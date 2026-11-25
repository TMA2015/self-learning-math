(() => {
  "use strict";

  const typeset = (element) => {
    if (!element || element.dataset.topicRw1Managed === "1" || !window.MathJax?.typesetPromise) return;
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


/* OWNER #1055, X-G.5, DELTA_A_UI. Shared Topic Knowledge renderer CD01–22.
 * Never change canonical learner Markdown, assessment, answers or route chrome.
 * Preserve inline DOM, recover the signed TeX in escaped display delimiters,
 * and give these disclosures one serialized MathJax owner. */
(()=>{
 "use strict";
 if(!/\/thpt-preview\/chuyen-de\/cd(?:0[1-9]|1[0-9]|2[0-2])\/kien-thuc\/(?:index\.html)?$/.test(location.pathname))return;
 const make=(tag,value)=>{const el=document.createElement(tag);if(value!==undefined)el.textContent=value;return el};
 const math=(tex,display=false,source=tex)=>{
  const el=make("span",display?"\\["+tex+"\\]":"\\("+tex+"\\)");
  el.className="arithmatex";el.dataset.topicRw1Original=source;
  if(display){if(/^\[\s*\n/.test(source)&&/^\\(?:operatorname|lim)\b/.test(tex))el.dataset.topicW2DisplayMath="recovered-display";el.dataset.topicRw1Display="1";el.style.display="block";el.style.maxWidth="100%";el.style.overflowX="auto"}
  return el;
 };
 // Exact original CĐ01 source: Markdown stripped the set braces in this one formula.
 const rawSet=String.raw`[A\setminus B={x\in A:x\notin B}.]`;
 const setTex=String.raw`A\setminus B=\{x\in A:x\notin B\}.`;
 const rawUnion=String.raw`[|A\cup B|=|A|+|B|-|A\cap B|.]`;
 const unionTex=rawUnion.slice(1,-1);
 // A closing display delimiter must be alone on its line; inner [n] and
 // interval notation never qualify. Other explicit delimiters remain exact.
 const tokens=/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]|\[\s*\n([\s\S]*?)\n\s*\]|\[A\\setminus B=\{x\\in A:x\\notin B\}\.\]|\[\|A\\cup B\|=\|A\|\+\|B\|-\|A\\cap B\|\.\]|\*\*|\*/g;
 const skips=".arithmatex,mjx-container,math,script,style,pre,code,svg,textarea,input,button";
 function inline(parent,parts){
  // Elements already generated by MkDocs (including inline math) are moved,
  // not cloned, so punctuation and emphasis stay in the same paragraph.
  let stack=[parent];
  const target=()=>stack[stack.length-1];
  const pushMarker=(marker)=>{
   const tag=marker==="**"?"STRONG":"EM";
   if(stack.length>1&&target().tagName===tag){stack.pop();return}
   const el=make(tag.toLowerCase());target().append(el);stack.push(el);
  };
  const markerCounts={"**":0,"*":0};
  for(const part of parts)if(typeof part==="string")for(const m of part.matchAll(tokens))if(m[0]==="**"||m[0]==="*")markerCounts[m[0]]++;
  for(const part of parts){
   if(typeof part!=="string"){target().append(part);continue}
   let last=0;
   for(const m of part.matchAll(tokens)){
    if(m.index>last)target().append(part.slice(last,m.index));
    if(m[0]==="**"||m[0]==="*"){
     if(markerCounts[m[0]]%2===0)pushMarker(m[0]);else target().append(m[0]);
    }
    else if(m[0]===rawSet)target().append(math(setTex,true,m[0]));
    else if(m[0]===rawUnion)target().append(math(unionTex,true,m[0]));
    else if(m[1]!==undefined)target().append(math(m[1],false,m[0]));
    else if(m[2]!==undefined)target().append(math(m[2],true,m[0]));
    else if(/\\[A-Za-z]+/.test(m[3]||""))target().append(math(m[3].trim(),true,m[0]));
    else target().append(m[0]);
    last=m.index+m[0].length;
   }
   if(last<part.length)target().append(part.slice(last));
  }
 }
 function disclosure(details){
  if(details.dataset.topicRw1Managed==="1")return;
  const summary=details.querySelector(":scope > summary");if(!summary)return;
  const out=document.createDocumentFragment();let pending=[];
  const flush=()=>{
   if(!pending.some(n=>typeof n!=="string"||n.trim())){pending=[];return}
   const p=make("p");inline(p,pending);out.append(p);pending=[];
  };
  for(const node of [...details.childNodes]){
   if(node===summary)continue;
   if(node.nodeType===3){
    // Raw Markdown inside <details> is a single text node, or a run of
    // text interleaved with already parsed math. Blank lines alone end p.
    const chunks=node.nodeValue.split(/(\r?\n[ \t]*\r?\n(?:[ \t]*\r?\n)*)/);
    chunks.forEach((c,i)=>{if(i%2)flush();else if(c)pending.push(c)});
   }else if(node.nodeType===1){
    if(node.matches("p,div,ul,ol,table,blockquote,figure,h1,h2,h3,h4,pre")&&!node.matches(".arithmatex")){flush();out.append(node)}
    else if(node.matches(".arithmatex")&&node.textContent.trim().startsWith("\\[")){flush();out.append(node)}
    else pending.push(node);
   }
  }
  flush();details.classList.add("question");details.dataset.topicRw1Managed="1";
  details.replaceChildren(summary,out);
  details.addEventListener("toggle",()=>{if(details.open)typeset(details)});
 }
 function normalize(root){
  if(!root)return;
  const walk=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),nodes=[];
  while(walk.nextNode()){
   const t=walk.currentNode,p=t.parentElement;
   if(p&&!p.closest(skips)&&/(\\\(|\\\[|\[\s*\n|\[A\\setminus|\[\|A\\cup|\*\*|\^|_)/.test(t.nodeValue))nodes.push(t);
  }
  for(const t of nodes){
   if(!t.isConnected||t.parentElement?.closest(skips))continue;
   // Parse raw math and paired strong markers only. Unpaired literal
   // asterisks and ordinary text must not disappear.
   const v=t.nodeValue,fragment=document.createDocumentFragment();
   const rx=/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]|\[\s*\n([\s\S]*?)\n\s*\]|\[A\\setminus B=\{x\\in A:x\\notin B\}\.\]|\[\|A\\cup B\|=\|A\|\+\|B\|-\|A\\cap B\|\.\]|\*\*([^*\n]+)\*\*/g;
   let last=0,changed=false;
   for(const m of v.matchAll(rx)){
    if(m[3]!==undefined&&!/\\[A-Za-z]+/.test(m[3]))continue;
    fragment.append(v.slice(last,m.index));
    if(m[0]===rawSet)fragment.append(math(setTex,true,m[0]));
    else if(m[0]===rawUnion)fragment.append(math(unionTex,true,m[0]));
    else if(m[1]!==undefined)fragment.append(math(m[1],false,m[0]));
    else if(m[2]!==undefined)fragment.append(math(m[2],true,m[0]));
    else if(m[3]!==undefined)fragment.append(math(m[3].trim(),true,m[0]));
    else fragment.append(make("strong",m[4]));
    last=m.index+m[0].length;changed=true;
   }
   if(changed){fragment.append(v.slice(last));t.replaceWith(fragment)}
  }
  // Presentation-only unambiguous shorthand: preserve base and prose,
  // convert the explicit index/exponent to actual sub/sup. No guesses about
  // ambiguous ungrouped fractions, function arguments or mixed tokens.
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),plain=[];
  while(walker.nextNode()){
   const t=walker.currentNode;
   if(t.parentElement&&!t.parentElement.closest(skips+",sup,sub,a")&&/[\^_]/.test(t.nodeValue))plain.push(t);
  }
  for(const t of plain){
   const v=t.nodeValue,frag=document.createDocumentFragment();
   const rx=/([A-Za-z0-9)\]⁰¹²³⁴⁵⁶⁷⁸⁹])([\^_])(?:\{([^{}\n]+)\}|\(([^()\n]+)\)|([−-]?(?:\d+|[A-Za-z])))/g;
   let last=0;
   for(const m of v.matchAll(rx)){
    const value=m[3]??m[4]??m[5];const end=m.index+m[0].length;
    // A numeric index consumes digits only (u_1q must remain u₁·q), and
    // a single letter index before a function argument is still an index.
    if(m[2]==="^"&&m[5]&&/^[−-]?\d+$/.test(value)&&v[end]==="/")continue;
    if(m[2]==="_"&&/[A-Z0-9]{4,}$/.test(v.slice(0,m.index+1)))continue;
    frag.append(v.slice(last,m.index),m[1]);
    const tag=make(m[2]==="^"?"sup":"sub",value);tag.dataset.topicRw1Original=m[0].slice(1);
    frag.append(tag);last=end;
   }
   if(last){frag.append(v.slice(last));t.replaceWith(frag)}
  }
 }
 let chain=Promise.resolve();
 function typeset(root){
  if(!root)return chain;
  normalize(root);
  // Do not re-typeset a parent or an already rendered assistive subtree.
  // Wait for startup, then queue only connected, unrendered wrappers.
  chain=chain.then(async()=>{
   const mj=window.MathJax;
   if(mj?.startup?.promise)await mj.startup.promise;
   if(!mj?.typesetPromise)return;
   const spans=[...root.querySelectorAll(".arithmatex")].filter(el=>el.isConnected&&!el.closest("mjx-container")&&!el.querySelector("mjx-container"));
   if(spans.length)await mj.typesetPromise(spans);
  }).catch(err=>console.error("TOPIC_RW1_MATH_HOLD",err));
  return chain;
 }
 function prepare(root){
  if(!root)return;
  root.querySelectorAll("details").forEach(disclosure);
  normalize(root);
  for(const el of root.querySelectorAll(".arithmatex"))if(!el.dataset.topicRw1Original&&!el.querySelector("mjx-container"))el.dataset.topicRw1Original=el.textContent;
 }
 const shared=Object.freeze({prepare,normalize,typeset,disclosure});
 window.SLMTHPTKnowledgeMath=shared;
 // Compatibility for the already published CĐ01–08 adapters and regression.
 window.SLMTopicRW1Math=shared;
})();
