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
  // Presentation-only: expose the actual source h3 sections in every B01-B27
  // Knowledge tab. Never synthesize mathematical headings or alter source IDs.
  const knowledge=article.querySelector(":scope > .tabbed-set > .tabbed-content > .tabbed-block:nth-child(2)");
  if(knowledge&&!knowledge.querySelector("[data-g10-knowledge-sections]")){
   // Existing source figures in G10 B07–B18 follow their "Cách đọc hình"
   // paragraph. Place that very same reviewed figure BEFORE the prompt;
   // do not duplicate, edit, fetch or replace any image or mathematical text.
   for(const p of knowledge.querySelectorAll("p")){
    const marker=p.querySelector("strong");
    const label=marker?.textContent?.trim()||"";
    if(!/^(?:Cách đọc hình|Quan sát hình|Đọc hình)/.test(label))continue;
    const next=p.nextElementSibling;
    if(next?.tagName!=="FIGURE")continue;
    p.parentElement.insertBefore(next,p);
    next.dataset.g10FigureBeforeGuide="true";
   }
   const headings=[...knowledge.querySelectorAll("h3")];
   if(headings.length>=3){
    const outline=document.createElement("details");
    outline.className="thpt-g10-knowledge-sections";
    outline.dataset.g10KnowledgeSections=String(headings.length);
    const summary=document.createElement("summary");
    summary.textContent="Nội dung Kiến thức SGK · "+headings.length+" mục (bấm để chọn mục)";
    const list=document.createElement("ol");
    for(const [index,heading] of headings.entries()){
     if(!heading.id)heading.id="g10-knowledge-part-"+(index+1);
     const item=document.createElement("li");
     const anchor=document.createElement("a");
     anchor.href="#"+heading.id;
     anchor.textContent=heading.textContent.trim();
     item.append(anchor);list.append(item);
    }
    outline.append(summary,list);
    knowledge.prepend(outline);
   }
  }
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