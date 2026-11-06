(() => {
  "use strict";

  // Owner 05/11/2026: Tutor on every learner KNOWLEDGE and PUBLIC
  // CORE/PRACTICE/WRITTEN/ANCHOR page in both SGK and Topic journeys.
  // Protected independent self-check/Readiness pages remain WITHOUT AI, before
  // or after Final Submit. No RD1, learner storage, or assessment changes.
  const currentPath = () => location.pathname.replace(/\/index\.html$/, "/");
  const isTHPTReadingPage = () => {
    const path=currentPath();
    return /^\/(?:(?:roadmap-toan-thcs|self-learning-math)\/)?(?:thpt-preview|thpt)\/(?:sgk|chuyen-de|thu-vien)\//.test(path)
      && !/\/(?:tu-kiem-tra(?:-[^/]+)?|readiness|tu-danh-gia-ky-nang-thi)\//.test(path);
  };
  const isReadingPage = () => {
    // Keep self-contained; the THCS route contract tests evaluate this in VM.
    const path = location.pathname.replace(/\/index\.html$/, "/");
    // Fail CLOSED on all self-check/readiness routes across BOTH journeys,
    // including all 25 THCS topics, SGK grades 10–12 and THPT Topic.
    if (/\/(?:tu-kiem-tra(?:-[^/]+)?|readiness|tu-danh-gia-ky-nang-thi)\//.test(path)) return false;
    if (/^\/(?:(?:roadmap-toan-thcs|self-learning-math)\/)?(?:thpt-preview|thpt)\/(?:sgk|chuyen-de|thu-vien)\//.test(path)) return true;
    // THCS: every Golden Knowledge, Core, practice, Written, Anchor, example
    // and public exercise page in all 25 topics; not just their index.
    return /^\/(?:(?:roadmap-toan-thcs|self-learning-math)\/)?kien-thuc\/[^/]+(?:\/[^/]+)*\/$/.test(path);
  };
  const thptGrade = () => {
    // Legacy unqualified THPT SGK route is grade 10.
    const match = currentPath().match(/\/sgk\/lop-(10|11|12)\//);
    return match ? Number(match[1]) : 10;
  };
  const contentRoot = () => document.querySelector(".md-content__inner .md-typeset") || document.querySelector(".md-content__inner");
  const topicSlug = () => {
    const match = location.pathname.match(/\/kien-thuc\/([^/]+)/);
    if (match) return match[1];
    if (isTHPTReadingPage())
      return "thpt-" + currentPath().replace(/^.*?\/(?:thpt-preview|thpt)\//, "").replace(/[^a-z0-9]+/gi, "-").replace(/-$/, "");
    return "lesson";
  };
  const clean = value => String(value || "").replace(/\s+/g, " ").trim();
  const headingLevel = node => /^H[1-6]$/.test(node?.tagName || "") ? Number(node.tagName.slice(1)) : 9;

  const activeHeading = root => {
    const headings = [...root.querySelectorAll("h1,h2,h3")];
    if (!headings.length) return null;
    const threshold = Math.min(innerHeight * .34, 260);
    let active = headings[0];
    for (const heading of headings) {
      if (heading.getBoundingClientRect().top <= threshold) active = heading;
      else break;
    }
    return active;
  };

  const selectedText = root => {
    const selection = getSelection?.();
    if (!selection || selection.isCollapsed || !selection.rangeCount) return "";
    const range = selection.getRangeAt(0);
    const node = range.commonAncestorContainer.nodeType === Node.ELEMENT_NODE
      ? range.commonAncestorContainer : range.commonAncestorContainer.parentElement;
    if (!node || !root.contains(node)) return "";
    return clean(selection.toString()).slice(0, 2200);
  };

  const sectionText = (root, heading) => {
    if (!heading) return clean(root.innerText).slice(0, 2400);
    const level = headingLevel(heading);
    const pieces = [clean(heading.textContent)];
    let node = heading.nextElementSibling;
    while (node && pieces.join(" ").length < 2600) {
      if (/^H[1-6]$/.test(node.tagName) && headingLevel(node) <= level) break;
      if (!node.matches?.("script,style,.practice-engine,.topic-workspace,.written-self-check-solution")) {
        const text = clean(node.innerText || node.textContent);
        if (text) pieces.push(text);
      }
      node = node.nextElementSibling;
    }
    return pieces.join("\n").slice(0, 2600);
  };

  const activeFormativeDialog = () =>
    [...document.querySelectorAll("dialog[open]")].reverse().find(d=>
      d.matches(".thpt-r4-practice-dialog,.topic-core-dialog")&&
      !d.matches("[data-thpt-readiness],[data-thpt-protected-readiness]"));
  const lessonContext = () => {
    // Inside any native PUBLIC Core/Practice modal (THCS and THPT),
    // send ONLY the active public question stem, never an answer or draft.
    // Never transfer model answer/rubric, hidden disclosure, learner draft,
    // other questions, or independent assessment content to Gemini.
    const modal=activeFormativeDialog();
    if(modal){
      const card=modal.querySelector("[data-thpt-canonical-item],.thpt-r4-reviewed-formative-card,.topic-micro-panel");
      const prompt=modal.matches(".topic-core-dialog")
        ? card?.querySelector(".topic-micro-question")
        : card?.querySelector("h3");
      const title=clean(modal.querySelector(".thpt-r4-modal-heading h2,.topic-core-dialog__head h2")?.textContent || document.title);
      const selected=prompt?selectedText(prompt):"";
      return {
        title,
        section:clean(prompt?.textContent||title).slice(0,180),
        text:(selected||clean(prompt?.textContent||title)).slice(0,1400),
        selected:Boolean(selected)
      };
    }
    const root = contentRoot();
    const heading = activeHeading(root);
    const selected = selectedText(root);
    const pageTitle = clean(root.querySelector("h1")?.textContent || document.title);
    // Public practice hub may contain hundreds of answer-bearing hidden nodes:
    // take only the learner-visible page heading unless a safe selection
    // was made, never scrape the full bank or complete practice DOM.
    const isPublicExercise=/\/(?:luyen-tap|bai-tap|tu-luan|core)(?:\/|$)/.test(currentPath());
    const safeSelection = selected && !String(selected).match(/Đáp án\s*\/\s*Lời giải|Tiêu chí tự đối chiếu/i);
    return {
      title:pageTitle,
      section:clean(heading?.textContent || pageTitle),
      text:(!isPublicExercise && safeSelection ? selected :
        isPublicExercise ? clean(heading?.textContent || pageTitle) : sectionText(root,heading)).slice(0,2400),
      selected:Boolean(!isPublicExercise && safeSelection)
    };
  };

  const button = (label, className = "") => {
    const el = document.createElement("button");
    el.type = "button";
    el.className = ("floating-ai-btn " + className).trim();
    el.textContent = label;
    return el;
  };

  const typeset = element => {
    if (!window.MathJax?.typesetPromise) return;
    window.MathJax.typesetClear?.([element]);
    window.MathJax.typesetPromise([element]).catch(() => {});
  };

  let tutorMount=null;
  const init = () => {
    if(!isReadingPage()){
      tutorMount?.dispose?.();
      tutorMount=null;
      return;
    }
    if(tutorMount?.shell?.isConnected){tutorMount.sync();return}
    if (document.querySelector("[data-floating-ai]")) return;
    if (!window.RoadmapGemini?.isConfigured?.() || !window.RoadmapTutor) return;

    const shell = document.createElement("div");
    shell.className = "floating-ai";
    shell.dataset.floatingAi = "1";

    const projectPrefix = location.pathname.match(/^\/(roadmap-toan-thcs|self-learning-math)\//);
    const iconSrc = (projectPrefix ? "/" + projectPrefix[1] + "/" : "/") + "assets/images/tutor-girl-awake.webp";
    const launcher = button("", "floating-ai-launcher");
    const face = document.createElement("img");
    face.className = "floating-ai-face";
    face.src = iconSrc;
    face.alt = "";
    face.width = 64;
    face.height = 64;
    face.decoding = "async";
    launcher.appendChild(face);
    launcher.setAttribute("aria-label", "Mở AI Tutor để hỏi về bài đang học hoặc luyện tập");
    launcher.setAttribute("aria-expanded", "false");

    const panel = document.createElement("section");
    panel.className = "floating-ai-panel";
    panel.hidden = true;
    panel.setAttribute("aria-label", "AI Tutor cho trang học và luyện tập");

    const head = document.createElement("div");
    head.className = "floating-ai-head";
    const titleWrap = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = "Gia sư AI · Hỏi về bài đang học";
    const contextLabel = document.createElement("small");
    titleWrap.append(title, contextLabel);
    const close = button("×", "floating-ai-close");
    close.setAttribute("aria-label", "Đóng AI Tutor");
    const smallFace = document.createElement("img");
    smallFace.src = iconSrc;
    smallFace.alt = "";
    smallFace.className = "floating-ai-head-face";
    head.append(smallFace, titleWrap, close);

    const quick = document.createElement("div");
    quick.className = "floating-ai-quick";
    [
      ["Giải thích dễ hơn", "Hãy giải thích đoạn kiến thức này bằng ngôn ngữ đơn giản hơn, từng ý ngắn, phù hợp học sinh " + (isTHPTReadingPage() ? "THPT" : "THCS") + ". Nêu trực giác trước rồi mới dùng công thức."],
      ["Cho ví dụ khác", "Hãy cho một ví dụ mới, đơn giản và khác ví dụ trên trang, giải thích từng bước để em thấy kiến thức này được dùng như thế nào."],
      ["Vì sao lại đúng?", "Hãy giải thích vì sao kiến thức hoặc quy tắc trong đoạn này đúng. Ưu tiên lập luận trực quan rồi mới trình bày toán học."],
      ["Em cần nhớ gì?", "Hãy tóm tắt đúng phần cốt lõi của đoạn này thành 3-5 ý cần nhớ và chỉ ra một lỗi học sinh thường mắc."]
    ].forEach(([label, prompt]) => {
      const el = button(label, "floating-ai-chip");
      el.addEventListener("click", () => ask(prompt, el));
      quick.appendChild(el);
    });

    const answer = document.createElement("div");
    answer.className = "floating-ai-answer";
    answer.hidden = true;

    const input = document.createElement("textarea");
    input.className = "floating-ai-input";
    input.rows = 3;
    input.maxLength = 500;
    input.placeholder = "Hỏi về bài đang học… Ví dụ: Em nên bắt đầu từ đâu?";
    input.setAttribute("aria-label", "Câu hỏi cho AI Tutor");

    const send = button("Hỏi Gemini", "floating-ai-send");
    const note = document.createElement("small");
    note.className = "floating-ai-note";
    note.textContent = "AI có thể sai. Không nhập thông tin cá nhân. Nếu bôi đen một đoạn trước khi mở AI, Tutor sẽ ưu tiên đúng đoạn đó.";

    panel.append(head, quick, answer, input, send, note);
    shell.append(panel, launcher);
    document.body.appendChild(shell);

    let pending = false;
    const refreshContextLabel = () => {
      const context = lessonContext();
      const inExercise=Boolean(activeFormativeDialog()||/\/(?:luyen-tap|bai-tap|core|tu-luan)(?:\/|$)/.test(currentPath()));
      contextLabel.textContent = (context.selected ? "Đang dùng đoạn đã bôi đen · " : (inExercise?"Đang làm bài · ":"Đang đọc · ")) + context.section;
    };

    const setOpen = open => {
      panel.hidden = !open;
      launcher.setAttribute("aria-expanded", String(open));
      shell.classList.toggle("is-open", open);
      if (open) {
        refreshContextLabel();
        setTimeout(() => input.focus(), 0);
      }
    };

    async function ask(request, trigger = send) {
      const questionText = clean(request || input.value);
      if (!questionText || pending) return;
      const page = lessonContext();
      if (!page.text) return;
      pending = true;
      trigger.disabled = true;
      send.disabled = true;
      answer.hidden = false;
      answer.replaceChildren();
      const waiting = document.createElement("p");
      waiting.className = "floating-ai-waiting";
      waiting.textContent = "Gemini đang đọc đúng phần này và chuẩn bị giải thích…";
      answer.appendChild(waiting);
      try {
        const lessonLayer = isTHPTReadingPage() ?
          (/\/chuyen-de\//.test(currentPath()) ? "THPT-TOPIC-KNTT" : "THPT-SGK-KNTT") : "KNTT-Core";
        const question = {
          id: "lesson-" + topicSlug(),
          question: (activeFormativeDialog()?"CÂU HỎI CORE/LUYỆN TẬP CÔNG KHAI ĐANG LÀM":"ĐOẠN KIẾN THỨC ĐANG ĐỌC") + "\nTrang: " + page.title + "\nMục: " + page.section + "\n\n" + page.text,
          tags: { layer: lessonLayer, skill: ["reading-" + topicSlug()] }
        };
        const context = window.RoadmapTutor.buildContext({
          projectContextVersion: "1.0.17",
          layer: lessonLayer,
          gradeOverlay: isTHPTReadingPage() && /\/sgk\//.test(currentPath()) ? thptGrade() : null,
          skill: "reading-" + topicSlug(),
          question,
          learnerRequest: questionText,
          helpMode: "TEACH_FROM_START",
          activity: "learning",
          submitted: false,
          stats: { tags: {} },
          graph: null,
          recovery: { events: [] }
        });
        const response = await window.RoadmapTutor.run({ provider: "gemini", context });
        answer.replaceChildren();
        if (window.RoadmapRichMath?.render) window.RoadmapRichMath.render(response.message, answer);
        else answer.textContent = response.message;
        typeset(answer);
        input.value = "";
        refreshContextLabel();
      } catch (error) {
        answer.replaceChildren();
        const errorText = document.createElement("p");
        errorText.className = "floating-ai-error";
        errorText.textContent = "Chưa hỏi được Gemini: " + (error?.message || "lỗi kết nối") + ". Nội dung bài học trên trang vẫn dùng bình thường.";
        answer.appendChild(errorText);
      } finally {
        pending = false;
        trigger.disabled = false;
        send.disabled = false;
      }
    }

    launcher.addEventListener("click", () => setOpen(panel.hidden));
    close.addEventListener("click", () => setOpen(false));
    send.addEventListener("click", () => ask(input.value));
    input.addEventListener("keydown", event => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        ask(input.value);
      }
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && !panel.hidden) setOpen(false);
    });
    // Native showModal() makes all DOM outside the dialog inert. Move the
    // SAME Tutor shell inside the active formative modal while it is open,
    // then back to body; do not create a second Tutor/AI provider session.
    const sync=()=>{
      if(!shell.isConnected)return;
      const active=activeFormativeDialog();
      const destination=active||document.body;
      if(shell.parentElement!==destination)destination.appendChild(shell);
    };
    const observer=new MutationObserver(sync);
    observer.observe(document.body,{attributes:true,attributeFilter:["open"],childList:true,subtree:true});
    tutorMount={shell,sync,dispose:()=>{observer.disconnect();shell.remove()}};
    sync();

  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
  if (typeof document$ !== "undefined") document$.subscribe(init);
})();
