/* RELEASE DELTA_A_UI · one SGK knowledge-lesson navigation for grades 10–12.
 * Public route navigation only; does not touch canonical content, answer keys,
 * learner progress, Firebase, Gemini, Final Submit or THCS Golden.
 */
(()=>{
"use strict";
const chapters=["i","ii","iii","iv","v","vi","vii","viii","ix"];
// S1 lesson-to-chapter boundaries, audited against published 79 SGK lesson routes.
const boundaries={
  10:[2,4,6,11,14,18,22,25,27],
  11:[4,7,9,14,17,21,27,30,33],
  12:[5,8,10,13,17,19]
};
const link=(label,href,kind)=>{
 const a=document.createElement("a");
 a.textContent=label;a.href=href;a.dataset.sgkLessonLink=kind;
 return a;
};
const unavailable=label=>{
 const node=document.createElement("span");
 node.textContent=label;node.className="thpt-sgk-nav-unavailable";
 node.setAttribute("aria-disabled","true");
 return node;
};
// OWNER 12/11: G10 B01–B06 are layout-ready; ONLY add the existing
// editorial 1.x–4.x labels in the rendered DOM. Source Markdown, mathematical
// headings in tab 2 (already 2.x), canonical IDs, figure URLs and link anchors
// remain byte-for-byte unchanged. No new CSS/theme; G10 B01–B06 live Golden.
const numberG10FirstSix=(article)=>{
 const set=article.querySelector(".tabbed-set");
 if(!set)return;
 const labels=[...set.querySelectorAll(":scope > .tabbed-labels > label")];
 const blocks=[...set.querySelectorAll(":scope > .tabbed-content > .tabbed-block")];
 const names=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
 if(labels.length!==4||blocks.length!==4)return;
 const displayNames=["Khám phá kiến thức","Kiến thức sách giáo khoa","Ví dụ","Lỗi thường gặp"];
 if(labels.every((node,i)=>node.textContent.trim()===(i+1)+". "+displayNames[i])){
  article.dataset.g10B01B06EditorialNumbered="true";
  return;
 }
 if(!labels.every((node,i)=>node.textContent.trim()===names[i]))return;
 const discovery=[...blocks[0].querySelectorAll("h3")];
 const original=["Cùng tìm hiểu","Ví dụ trực quan","Thuật ngữ và kiến thức, kỹ năng"];
 if(discovery.length!==3||!discovery.every((node,i)=>node.textContent.trim()===original[i]))return;
 // The existing 2.1–2.n titles are ALREADY numbered correctly in the
 // original published SGK source: do not rewrite their content or IDs.
 const knowledge=[...blocks[1].querySelectorAll("h3")];
 if(!knowledge.length||!knowledge.every((node,i)=>node.textContent.trim().startsWith("2."+(i+1)+". ")))return;
 const examples=[...blocks[2].querySelectorAll("h3")];
 if(!examples.length||!examples.every((node,i)=>node.textContent.trim().startsWith("Ví dụ "+(i+1)+" —")))return;
 const mistakes=[...blocks[3].querySelectorAll(":scope > details.tip > summary")];
 if(!mistakes.length||mistakes.some(node=>!node.textContent.trim()))return;
 labels.forEach((node,i)=>node.textContent=(i+1)+". "+displayNames[i]);
 const titles=["Cùng tìm hiểu","Ví dụ trực quan","Thuật ngữ, kiến thức và kỹ năng"];
 discovery.forEach((node,i)=>node.textContent="1."+(i+1)+". "+titles[i]);
 examples.forEach((node,i)=>node.textContent="3."+(i+1)+". "+node.textContent.trim());
 mistakes.forEach((node,i)=>node.textContent="4."+(i+1)+". "+node.textContent.trim());
 article.dataset.g10B01B06EditorialNumbered="true";
};
/* G10 B01-B06 DELTA_A_UI: align numeric columns and visually group only
 * the existing worked solution in example tab. No mathematical text changes.
 * Keep full solution content (MathJax, diagrams, tables) together. */
const polishG10FirstSix=(article)=>{
 if(article.dataset.g10B01B06EditorialNumbered!=="true")return;
 const set=article.querySelector(".tabbed-set");
 const blocks=[...(set?.querySelectorAll(":scope > .tabbed-content > .tabbed-block")||[])];
 if(blocks.length!==4)return; // fail closed outside the approved Golden layout
 for(const table of article.querySelectorAll("table.thpt-g10-knowledge-table")){
  const rows=[...table.querySelectorAll("tbody tr")];
  const header=table.querySelector("thead tr");
  if(!header||!rows.length)continue;
  [...header.cells].forEach((cell,column)=>{
   // Explanatory prose is left-aligned in both header and values;
   // compact numbers, coordinates, symbols and formulas are centred.
   const prose=rows.some(row=>{
    const value=row.cells[column]?.textContent.replace(/\s+/g," ").trim()||"";
    return value.length>24 && /\p{L}{3,}\s+\p{L}{2,}/u.test(value);
   });
   for(const row of [header,...rows]){
    row.cells[column]?.classList.toggle("thpt-g10-table-prose",prose);
   }
  });
 }
 const isLead=(node,pattern)=>node?.tagName==="P" &&
  node.firstElementChild?.tagName==="STRONG" &&
  pattern.test(node.firstElementChild.textContent.trim());
 for(const title of blocks[2].querySelectorAll(":scope > h3")){
  let current=title.nextElementSibling;
  while(current && current.tagName!=="H3" && !isLead(current,/^Lời giải(?:\s+theo vùng)?\./iu))
   current=current.nextElementSibling;
  if(!current||current.tagName==="H3")continue;
  const box=document.createElement("div");
  box.className="thpt-g10-example-solution";
  box.setAttribute("role","group");
  box.setAttribute("aria-label","Lời giải ví dụ");
  current.before(box);
  while(current && current.tagName!=="H3" &&
        !isLead(current,/^(?:Kiểm lại|Kết luận)\./iu)){
   const next=current.nextElementSibling;
   box.append(current);
   current=next;
  }
 }
 article.dataset.g10B01B06SolutionPolished="true";
};


/* G10 B01-B06: restore native right TOC links across four hidden tab panes.
 * Works for same-page clicks, initial #deep-links and browser back/forward.
 * Never touches heading IDs, math/source contents, or unrelated routes. */
let g10TocController=null;
const bindG10CrossTabToc=(article,set,labels,blocks)=>{
 g10TocController?.abort();
 const controller=new AbortController();
 g10TocController=controller;
 const choose=(hash,scroll)=>{
  if(!hash||hash[0]!=="#")return false;
  let key;
  try{key=decodeURIComponent(hash.slice(1));}catch{return false;}
  const target=document.getElementById(key);
  if(!target||!article.contains(target))return false;
  const pane=target.closest(".tabbed-block");
  const index=blocks.indexOf(pane);
  if(index<0)return false;
  const inputs=[...set.querySelectorAll(":scope > input[type=radio]")];
  if(!inputs[index]?.checked)labels[index].click();
  if(scroll)requestAnimationFrame(()=>requestAnimationFrame(()=>{
   if(target.isConnected)target.scrollIntoView({block:"start",behavior:"instant"});
  }));
  return true;
 };
 document.addEventListener("click",event=>{
  const node=event.target instanceof Element?event.target:null;
  const anchor=node?.closest(".md-sidebar--secondary a[href]");
  if(!anchor)return;
  let to;
  try{to=new URL(anchor.href,location.href);}catch{return;}
  if(to.origin!==location.origin||to.pathname!==location.pathname||!to.hash)return;
  const id=decodeURIComponent(to.hash.slice(1));
  const target=document.getElementById(id);
  if(!target||!article.contains(target))return;
  const index=blocks.indexOf(target.closest(".tabbed-block"));
  if(index<0)return;
  const inputs=[...set.querySelectorAll(":scope > input[type=radio]")];
  // Same-tab links already behave correctly through MkDocs Material.
  if(inputs[index]?.checked)return;
  event.preventDefault();
  event.stopPropagation();
  if(location.hash!==to.hash)history.pushState(null,"",to.hash);
  choose(to.hash,true);
 },{capture:true,signal:controller.signal});
 window.addEventListener("hashchange",()=>choose(location.hash,true),{signal:controller.signal});
 window.addEventListener("popstate",()=>choose(location.hash,true),{signal:controller.signal});
 if(location.hash)requestAnimationFrame(()=>choose(location.hash,true));
};

/* Owner 12/11 Golden HTML restoration: presentation-only, six published G10
 * lessons. Keep numbered tab text, canonical SGK source and every hidden answer
 * byte-identical. Move a single existing provenance note to the last tab. */
const restoreG10FirstSixGolden=(article)=>{
 if(article.dataset.g10B01B06EditorialNumbered!=="true")return;
 if(article.dataset.g10GoldenRestored==="true")return;
 const set=article.querySelector(".tabbed-set");
 const labels=[...(set?.querySelectorAll(":scope > .tabbed-labels > label")||[])];
 const blocks=[...(set?.querySelectorAll(":scope > .tabbed-content > .tabbed-block")||[])];
 if(labels.length!==4||blocks.length!==4)return;
 // The source tab uses "Kiến thức SGK"; the owner wants the unabbreviated
 // learner label. The section heading is presentation, not a source rewrite.
 const displayLabels=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
 labels.forEach((label,i)=>label.textContent=displayLabels[i]);
 const sectionNames=["1. Khám phá kiến thức","2. Kiến thức SGK",
  "3. Ví dụ","4. Lỗi thường gặp và cách tự khắc phục"];
 blocks.forEach((block,i)=>{
  if(block.querySelector(":scope > h2.thpt-g10-section-heading"))return;
  const h=document.createElement("h2");
  h.className="thpt-g10-section-heading";
  h.textContent=sectionNames[i];
  block.prepend(h);
 });
 const inputs=[...set.querySelectorAll(":scope > input[type=radio]")];
 const syncSelected=()=>labels.forEach((l,i)=>{
  l.classList.toggle("slm-g10-active-tab",Boolean(inputs[i]?.checked));
 });
 set.addEventListener("change",syncSelected);
 syncSelected();
 // Decorative lead paragraph is not curricular content; the scoped Knowledge
 // page already identifies its class, chapter and SGK source in the eyebrow.
 article.querySelectorAll(".thpt-r4-screen .thpt-r4-lead").forEach(el=>el.remove());
 // Both public First Try and D6 use the subdued HTML reference treatment.
 // Only the voluntary disclosure LABEL changes; answer bodies remain closed.
 for(const node of blocks[1].querySelectorAll("details.question > summary")){
  node.textContent="Đối chiếu";
 }
 // Source notes were displayed outside the tab set (all four tabs), plus a
 // duplicate in tab 4. Keep the detailed SGK/SBT receipt ONCE in tab 4.
 const sourceNotes=[...article.querySelectorAll("p.thpt-r4-footnote")];
 const selected=sourceNotes.find(n=>/Nguồn:\s*SGK Toán 10/i.test(n.textContent))||
  sourceNotes.find(n=>/Kiến thức đối chiếu theo SGK/i.test(n.textContent))||
  sourceNotes.at(-1);
 if(selected){
  const text=selected.textContent.replace(
   /\s*(?:Luyện tập tự đối chiếu không phải Tự kiểm tra độc lập|Học liệu tự luyện không dùng làm bài đánh giá độc lập)\.?\s*$/iu,"").trim();
  selected.textContent=text;
  for(const note of sourceNotes)if(note!==selected)note.remove();
  blocks[3].append(selected);
 }
 bindG10CrossTabToc(article,set,labels,blocks);
 article.dataset.g10GoldenRestored="true";
};


/* G10 Chapter IV B07–B11: presentation-only extension of owner's accepted
 * B01–B06 Golden. The real S1/Q18 reordering candidate stays in authoring
 * Draft PR #825; do NOT move any first tries or pedagogical paragraphs here. */
const polishG10ChapterIV=(article)=>{
 if(article.dataset.g10ChivGolden==="true")return;
 const set=article.querySelector(".tabbed-set");
 const labels=[...(set?.querySelectorAll(":scope > .tabbed-labels > label")||[])];
 const blocks=[...(set?.querySelectorAll(":scope > .tabbed-content > .tabbed-block")||[])];
 const names=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
 if(labels.length!==4||blocks.length!==4||
   !labels.every((l,i)=>l.textContent.trim()===names[i]))return;
 article.classList.add("thpt-g10-chiv-golden");
 const section=["1. Khám phá kiến thức","2. Kiến thức SGK","3. Ví dụ",
   "4. Lỗi thường gặp và cách tự khắc phục"];
 blocks.forEach((block,i)=>{
  const h=document.createElement("h2");
  h.className="thpt-g10-section-heading";
  h.textContent=section[i];block.prepend(h);
 });
 // Number only existing visible discovery/example/remediation labels. Source
 // SGK concept headings in tab 2 are untouched pending S1 editorial review.
 [...blocks[0].querySelectorAll(":scope > h3")].forEach((h,i)=>{
  h.textContent="1."+(i+1)+". "+h.textContent.trim();
 });
 [...blocks[2].querySelectorAll(":scope > h3")].forEach((h,i)=>{
  h.textContent="3."+(i+1)+". "+h.textContent.trim();
 });
 [...blocks[3].querySelectorAll(":scope > details.tip > summary")].forEach((h,i)=>{
  h.textContent="4."+(i+1)+". "+h.textContent.trim();
 });
 // Golden example solution panel. MkDocs may render Đề/Giải/Tự kiểm as
 // three strong labels in ONE paragraph; split its EXISTING DOM nodes without
 // altering a single answer, formula, punctuation mark or example ID.
 for(const h of blocks[2].querySelectorAll(":scope > h3")){
  const p=h.nextElementSibling;
  if(!p||p.tagName!=="P")continue;
  const children=[...p.childNodes];
  const strong=(node,re)=>node.nodeType===1&&node.tagName==="STRONG"&&re.test(node.textContent.trim());
  const start=children.findIndex(n=>strong(n,/^Giải\s*:/iu));
  const end=children.findIndex((n,i)=>i>start&&strong(n,/^(?:Điểm cần tự kiểm|Tự kiểm)\s*:/iu));
  if(start<=0||end<=start)continue;
  const oldText=p.textContent;
  const box=document.createElement("div");box.className="thpt-g10-example-solution";
  box.setAttribute("role","group");box.setAttribute("aria-label","Lời giải ví dụ");
  const solve=document.createElement("p");box.append(solve);
  const check=document.createElement("p");
  for(const n of children.slice(start,end))solve.append(n);
  for(const n of children.slice(end))check.append(n);
  p.after(box);box.after(check);
  if(oldText.replace(/\s+/g," ").trim()!==
    (p.textContent+solve.textContent+check.textContent).replace(/\s+/g," ").trim()){
   // Fail-safe: never leave an incomplete worked mathematical answer.
   for(const n of [...solve.childNodes,...check.childNodes])p.append(n);
   box.remove();check.remove();
  }
 }
 blocks[1].querySelectorAll("details.question > summary").forEach(summary=>{
  summary.textContent="Đối chiếu";
 });
 article.querySelectorAll(".thpt-r4-screen .thpt-r4-lead").forEach(p=>p.remove());
 const inputs=[...set.querySelectorAll(":scope > input[type=radio]")];
 const sync=()=>labels.forEach((l,i)=>l.classList.toggle("slm-g10-active-tab",Boolean(inputs[i]?.checked)));
 set.addEventListener("change",sync);
 sync();
 bindG10CrossTabToc(article,set,labels,blocks);
 article.dataset.g10ChivGolden="true";
};

/* G10 ChV B12–B14 Golden PREVIEW: wrap the three published example
 * paragraphs in the pre-existing Golden solution panel. Move DOM nodes
 * intact: do not invent/split example math, solutions or rubrics.
 * Academic S1 section reshuffling and First Try placements are NOT done here. */
const polishG10ChapterV=(article)=>{
 polishG10ChapterIV(article);
 if(article.dataset.g10ChivGolden!=="true")return;
 const blocks=[...(article.querySelector(".tabbed-set")?.
  querySelectorAll(":scope > .tabbed-content > .tabbed-block")||[])];
 if(blocks.length!==4)return;
 // First Try was moved to Discovery under the source-locked ChV §X-F
 // editorial receipt. Keep voluntary answers closed; change label only.
 blocks[0].querySelectorAll("details.question > summary").forEach(summary=>{
  summary.textContent="Đối chiếu";
 });
 for(const title of blocks[2].querySelectorAll(":scope > h3")){
  const paragraph=title.nextElementSibling;
  if(!paragraph||paragraph.tagName!=="P"||paragraph.closest(".thpt-g10-example-solution"))continue;
  const panel=document.createElement("div");
  panel.className="thpt-g10-example-solution";
  panel.setAttribute("role","group");
  panel.setAttribute("aria-label","Ví dụ và lời giải minh họa");
  paragraph.before(panel);
  panel.append(paragraph);
 }
 article.classList.add("thpt-g10-chv-golden");
 article.dataset.g10ChvGolden="preview";
};

/* G10 ChVI B15–B18: reuse the published owner Golden B01–B14 theme.
 * All source-level 19 First Try and 19 D6 placements are locked by the
 * additive S1/Q18 §X-F receipt, not moved or redefined by JavaScript.
 * Group each existing full worked explanation in the prior Golden solution
 * panel without changing the mathematical text or any canonical identifier. */
const polishG10ChapterVI=(article)=>{
 if(article.dataset.g10ChviGolden==="true")return;
 const set=article.querySelector(".tabbed-set");
 const labels=[...(set?.querySelectorAll(":scope > .tabbed-labels > label")||[])];
 const panes=[...(set?.querySelectorAll(":scope > .tabbed-content > .tabbed-block")||[])];
 const names=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
 if(labels.length!==4||panes.length!==4||
   !labels.every((x,i)=>x.textContent.trim()===names[i]))return;
 const formal=[...panes[1].querySelectorAll(":scope > h3")];
 if(formal.length<2||formal.some((x,i)=>!x.textContent.trim().startsWith("2."+(i+1)+". ")))return;
 polishG10ChapterIV(article);
 if(article.dataset.g10ChivGolden!=="true")return;
 // The source already provides concise public voluntary labels. This is
 // presentation parity only, never a correctness indicator or Mastery write.
 panes[0].querySelectorAll("details.question > summary").forEach(summary=>{
  summary.textContent="Đối chiếu";
 });
 for(const h of panes[2].querySelectorAll(":scope > h3")){
  const first=h.nextElementSibling;
  if(!first||first.tagName==="H3")continue;
  const panel=document.createElement("div");
  panel.className="thpt-g10-example-solution";
  panel.setAttribute("role","group");
  panel.setAttribute("aria-label","Ví dụ và lời giải minh họa");
  h.after(panel);
  let node=first;
  while(node&&node.tagName!=="H3"){
   const next=node.nextElementSibling;
   panel.append(node);node=next;
  }
 }
 article.classList.add("thpt-g10-chvi-golden");
 article.dataset.g10ChviGolden="preview";
};

const run=()=>{
 const path=location.pathname;
 const match=path.match(/^(.*\/thpt-preview\/sgk\/)(?:(lop-(11|12))\/)?chuong-([ivx]+)\/bai-(\d+)\/?$/);
 if(!match)return;
 const grade=Number(match[3]||10),lesson=Number(match[5]),chapter=match[4];
 const ends=boundaries[grade];
 if(!ends||!Number.isInteger(lesson)||lesson<1||lesson>ends.at(-1))return;
 const chapterIndex=ends.findIndex(end=>lesson<=end);
 if(chapters[chapterIndex]!==chapter)return; // fail closed on unexpected source mapping
 const article=document.querySelector(".md-content__inner");
 if(!article)return;
 if(grade===10){
  article.classList.add("thpt-g10-knowledge-ap1");
  if(lesson<=6){article.classList.add("thpt-g10-first-six-golden");numberG10FirstSix(article);polishG10FirstSix(article);restoreG10FirstSixGolden(article);}
  else if(chapter==="iv"&&lesson<=11)polishG10ChapterIV(article);
  else if(chapter==="v"&&lesson>=12&&lesson<=14)polishG10ChapterV(article);
  else if(chapter==="vi"&&lesson>=15&&lesson<=18)polishG10ChapterVI(article);
 }
 if(article.querySelector("[data-sgk-lesson-nav]"))return;
 const root=match[1]+(grade===10?"":"lop-"+grade+"/");
 const lessonUrl=n=>root+"chuong-"+chapters[ends.findIndex(end=>n<=end)]+"/bai-"+n+"/";
 const sectionRoot=root+"chuong-"+chapter+"/";
 const nav=document.createElement("nav");
 nav.className="thpt-r4-lesson-tabs thpt-sgk-lesson-nav";
 nav.dataset.sgkLessonNav=String(grade)+"-B"+lesson;
 nav.setAttribute("aria-label","Điều hướng bài học theo SGK");
 nav.append(
  lesson>1?link("← Bài trước",lessonUrl(lesson-1),"previous"):unavailable("← Bài trước"),
  lesson<ends.at(-1)?link("Bài sau →",lessonUrl(lesson+1),"next"):unavailable("Bài sau →"),
  link("Core và Luyện tập",sectionRoot+"luyen-tap/","practice"),
  link("Tự kiểm tra",sectionRoot+"tu-kiem-tra-chuong/","selfcheck")
 );
 // Preserve the approved lesson-first appearance; normalize only the first
 // top-of-lesson navigation, not any outcome cards, D6 or in-lesson anchors.
 const lead=article.querySelector(".thpt-r4-screen .thpt-r4-lead");
 const hero=lead?.closest(".thpt-r4-screen")||article.querySelector(".thpt-r4-screen");
 const old=hero?.querySelector("nav.thpt-r4-lesson-tabs");
 if(old)old.replaceWith(nav);
 else if(hero)hero.append(nav);
 else article.querySelector("h1")?.insertAdjacentElement("afterend",nav);
};
if(window.document$?.subscribe)window.document$.subscribe(run);
else if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",run);
else run();
})();