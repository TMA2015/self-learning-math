"use strict";
/* Owner-reported 18/11/2026 P2 defects in G10 B11/B12 only.
 * Render-only, AFTER historic thpt-sgk-lesson-nav-v1.js. No authoring source,
 * canonical item, answer, hidden assessment, Q16/RD1, Firebase or Mastery edits.
 * All moved nodes remain exactly as rendered from immutable approved Markdown.
 */
(()=>{
 const lesson=()=>{
  const m=location.pathname.match(/\/thpt-preview\/sgk\/chuong-(iv|v)\/bai-(11|12)\/?$/);
  return m&&((m[1]==="iv"&&m[2]==="11")||(m[1]==="v"&&m[2]==="12"))?m[2]:null;
 };
 const isLead=(node,re)=>node?.tagName==="P"&&
  node.firstElementChild?.tagName==="STRONG"&&
  re.test(node.firstElementChild.textContent.trim());
 const prepare=(article,blocks,n)=>{
  const worked=blocks[2];
  const headings=[...worked.querySelectorAll(":scope > h3")];
  if(headings.length!==4)return false;
  for(const h of headings){
   // Existing B12 runtime accidentally framed the FIRST paragraph (Đề).
   // Undo only that known B12 mistake; keep B13/B14 old behavior untouched.
   if(n==="12"){
    const wrong=h.nextElementSibling;
    if(wrong?.classList.contains("thpt-g10-example-solution")){
     const nodes=[...wrong.children];
     if(nodes.length!==1||!isLead(nodes[0],/^Đề\s*:/iu))return false;
     wrong.before(nodes[0]);wrong.remove();
    }
   }
   let start=h.nextElementSibling;
   while(start&&start.tagName!=="H3"&&
    !isLead(start,/^Giải(?:\s+theo thao tác)?\s*:/iu))
    start=start.nextElementSibling;
   if(!start||start.tagName==="H3")return false;
   const panel=document.createElement("div");
   panel.className="thpt-g10-example-solution";
   panel.setAttribute("role","group");
   panel.setAttribute("aria-label","Lời giải ví dụ");
   start.before(panel);
   let node=start;
   while(node&&node.tagName!=="H3"&&
     !isLead(node,/^Kiểm(?:\s+lại)?\s*:/iu)){
    const next=node.nextElementSibling;
    panel.append(node);node=next;
   }
  }
  for(const p of worked.querySelectorAll(":scope > p")){
   const mark=p.firstElementChild;
   if(mark?.tagName==="STRONG"&&
    /^(?:Vì sao chọn phương pháp|Vì sao chọn cách này|Chọn phương pháp|Chọn mô hình)\s*:/iu.test(mark.textContent.trim()))
    mark.textContent="Phân tích:";
  }
  if(n==="12"){
   const sgk=blocks[1],formalHeadings=[...sgk.querySelectorAll(":scope > h3")];
   if(formalHeadings.length!==3)return false;
   const sourceOnly=[
    {head:formalHeadings[0],label:"Khái niệm — Số gần đúng",kind:"concept"},
    {head:formalHeadings[1],label:"Định nghĩa — Sai số tuyệt đối và độ chính xác",kind:"concept"},
    {head:sgk.querySelector(":scope > h4"),label:"Định nghĩa — Sai số tương đối",kind:"concept"},
    {head:formalHeadings[2],label:"Quy tắc — Quy tròn và giới hạn sai số",kind:"rule"}
   ];
   if(sourceOnly.some(row=>row.head?.nextElementSibling?.tagName!=="P"))return false;
   for(const {head,label,kind} of sourceOnly){
    const p=head.nextElementSibling;
    const card=document.createElement("div");
    card.className="thpt-g10-p2-formal-card thpt-g10-p2-formal-"+kind;
    card.setAttribute("role","note");
    const title=document.createElement("strong");
    title.className="thpt-g10-p2-formal-label";
    title.textContent=label;
    p.before(card);card.append(title,p);
   }
   const fig=blocks[0].querySelector('[data-thpt-fig-id="FIG-G10-B12-01"]');
   if(fig)fig.classList.add("thpt-g10-p2-interval-figure");
  }
  article.dataset.g10OwnerP2Examples="b"+n;
  return true;
 };
 const run=()=>{
  const n=lesson();if(!n)return;
  const article=document.querySelector(".md-content__inner");
  if(!article||article.dataset.g10OwnerP2Examples==="b"+n)return;
  const ready=n==="11"?article.dataset.g10ChivGolden==="true":
    article.dataset.g10ChvGolden==="preview";
  const blocks=[...(article.querySelector(":scope > .tabbed-set")?.
    querySelectorAll(":scope > .tabbed-content > .tabbed-block")||[])];
  if(ready&&blocks.length===4&&prepare(article,blocks,n))return;
  // Material instant navigation might finish loading base Golden after this file.
  // Observe only this article, disconnect as soon as the exact scoped DOM is ready.
  if(article.dataset.g10OwnerP2Watching==="true")return;
  article.dataset.g10OwnerP2Watching="true";
  const watcher=new MutationObserver(()=>{
   const readyNow=n==="11"?article.dataset.g10ChivGolden==="true":
     article.dataset.g10ChvGolden==="preview";
   if(!readyNow||article.dataset.g10OwnerP2Examples==="b"+n)return;
   watcher.disconnect();delete article.dataset.g10OwnerP2Watching;
   const panes=[...(article.querySelector(":scope > .tabbed-set")?.
    querySelectorAll(":scope > .tabbed-content > .tabbed-block")||[])];
   if(panes.length===4)prepare(article,panes,n);
  });
  watcher.observe(article,{attributes:true,attributeFilter:["data-g10-chiv-golden","data-g10-chv-golden"]});
 };
 if(window.document$?.subscribe)window.document$.subscribe(run);
 else if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",run);
 else run();
})();
