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
 if(labels.every((node,i)=>node.textContent.trim()===(i+1)+". "+names[i]))return;
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
 labels.forEach((node,i)=>node.textContent=(i+1)+". "+names[i]);
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
    const value=row.cells[column]?.textContent.replace(/\\s+/g," ").trim()||"";
    return value.length>24 && /\\p{L}{3,}\\s+\\p{L}{2,}/u.test(value);
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
  while(current && current.tagName!=="H3" && !isLead(current,/^Lời giải(?:\\s+theo vùng)?\\./iu))
   current=current.nextElementSibling;
  if(!current||current.tagName==="H3")continue;
  const box=document.createElement("div");
  box.className="thpt-g10-example-solution";
  box.setAttribute("role","group");
  box.setAttribute("aria-label","Lời giải ví dụ");
  current.before(box);
  while(current && current.tagName!=="H3" &&
        !isLead(current,/^(?:Kiểm lại|Kết luận)\\./iu)){
   const next=current.nextElementSibling;
   box.append(current);
   current=next;
  }
 }
 article.dataset.g10B01B06SolutionPolished="true";
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
  if(lesson<=6){numberG10FirstSix(article);polishG10FirstSix(article);}
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