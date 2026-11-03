(() => {
  "use strict";

  const typeset = (element) => {
    if (!element || !window.MathJax?.typesetPromise) return;
    window.MathJax.typesetPromise([element]).catch(() => {});
  };

  const bind = (root = document) => {
    root.querySelectorAll?.("details:not([data-math-details-bound])").forEach((details) => {
      details.dataset.mathDetailsBound = "1";
      details.addEventListener("toggle", () => {
        if (!details.open) return;
        window.requestAnimationFrame(() => typeset(details));
      });
    });
  };

  const init = () => bind(document);

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  if (typeof document$ !== "undefined") {
    document$.subscribe(() => bind(document));
  }
})();

/* RELEASE DELTA_A_UI — THPT SGK inline-math presentation only.
 * Source stem/answer/rubric/TeX/MathJax and protected RD1 are never rewritten.
 * Convert only unambiguous text shorthand a^x, a^{m/n}, u_n, log_a into real
 * <sup>/<sub> DOM markup. Ambiguous syntax stays unchanged for human review.
 * THCS routes, pre/code blocks, links and MathJax nodes are excluded.
 */
(() => {
  "use strict";
  let liveArea = null;
  let liveObserver = null;
  const routeAllowed = () => /\/thpt-preview\/(?:sgk|thu-vien)(?:\/|$)/.test(location.pathname);

  function group(text, at) {
    const start = text[at];
    if (start === "{" || start === "(") {
      const closing = start === "{" ? "}" : ")";
      let depth = 0;
      for (let i = at; i < text.length; i++) {
        if (text[i] === start) depth++;
        else if (text[i] === closing && --depth === 0) {
          const value = start === "{" ? text.slice(at + 1, i) : text.slice(at, i + 1);
          return value ? { value, end: i + 1 } : null;
        }
      }
      return null;
    }
    const match = /^[−-]?(?:[A-Za-z][A-Za-z0-9]*|\d+)/.exec(text.slice(at));
    if (!match) return null;
    const end = at + match[0].length;
    // Do not visually decide whether a^u(x) means a^{u(x)} or a^u · (x).
    if (/^[A-Za-z]+$/.test(match[0]) && text[end] === "(") return null;
    // Do not silently render a^1/2 as a¹/2 rather than a^(1/2).
    if (/^\d+$/.test(match[0]) && text[end] === "/") return null;
    return { value: match[0], end };
  }

  function tokens(text) {
    if (!text || !/[\^_]/.test(text) || /\\\(|\\\[|\$\$|\\begin\{/.test(text)) return null;
    const out = [];
    let from = 0;
    for (let i = 0; i < text.length; i++) {
      const op = text[i];
      if (op !== "^" && op !== "_") continue;
      if (!/[A-Za-z0-9)\]⁰¹²³⁴⁵⁶⁷⁸⁹]/u.test(text[i - 1] || "")) continue;
      if (op === "_") {
        const prev = /([A-Za-z]+)$/.exec(text.slice(0, i))?.[1];
        if (!prev || prev.length > 3) continue;
      }
      const parsed = group(text, i + 1);
      if (!parsed) continue;
      if (from < i) out.push({ type: "text", value: text.slice(from, i) });
      out.push({ type: op === "^" ? "sup" : "sub", value: parsed.value });
      from = parsed.end;
      i = parsed.end - 1;
    }
    if (from === 0) return null;
    if (from < text.length) out.push({ type: "text", value: text.slice(from) });
    return out;
  }

  function formatText(node) {
    if (!node?.isConnected || node.nodeType !== 3) return;
    const parent = node.parentElement;
    if (!parent || parent.closest("script,style,pre,textarea,input,button,a,kbd,samp,math,mjx-container,sup,sub")) return;
    const parsed = tokens(node.nodeValue);
    if (!parsed) return;
    const fragment = document.createDocumentFragment();
    for (const part of parsed) {
      if (part.type === "text") fragment.append(document.createTextNode(part.value));
      else {
        const tag = document.createElement(part.type);
        tag.textContent = part.value;
        fragment.append(tag);
      }
    }
    if (parent.tagName === "CODE") parent.classList.add("thpt-math-notation");
    node.replaceWith(fragment);
  }

  function formatSubtree(root) {
    if (!root) return;
    if (root.nodeType === 3) { formatText(root); return; }
    if (root.nodeType !== 1) return;
    if (root.matches("script,style,pre,textarea,input,button,a,kbd,samp,math,mjx-container")) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const pending = [];
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      if (/[\^_]/.test(node.nodeValue)) pending.push(node);
    }
    pending.forEach(formatText);
  }

  function bindTypography() {
    // Only G11 SGK gets the narrower long-form reading measure; never THCS/G10/Topics.
    document.body?.classList.toggle("thpt-g11-sgk-readable", /\/thpt-preview\/sgk\/lop-11\/chuong-[ivx]+\/bai-\d+\/?/.test(location.pathname));
    const area = document.querySelector(".md-content__inner");
    if (!routeAllowed() || !area?.querySelector("[data-thpt-r4]")) {
      liveObserver?.disconnect();
      liveObserver = null;
      liveArea = null;
      return;
    }
    if (area === liveArea) return;
    liveObserver?.disconnect();
    liveArea = area;
    formatSubtree(area);
    liveObserver = new MutationObserver(records => {
      for (const record of records) {
        if (record.type === "characterData") formatText(record.target);
        else record.addedNodes.forEach(formatSubtree);
      }
    });
    liveObserver.observe(area, { childList: true, characterData: true, subtree: true });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bindTypography);
  else bindTypography();
  if (typeof document$ !== "undefined") document$.subscribe(bindTypography);
})();
