/* RELEASE CĐ01: adaptive 2-level knowledge tabs; DOM-only visual grouping.
   No academic text rewrite, grading, network, storage, Tutor or Mastery writes. */
(()=>{"use strict";
const init=()=>{
 const start=document.querySelector("[data-topic01-knowledge-start]");
 if(!start||start.dataset.ready==="1")return;
 const article=start.closest(".md-typeset"),end=article?.querySelector("[data-topic01-knowledge-end]");
 if(!article||!end)return;
 const groups=[...article.children].filter(el=>el.tagName==="H2"&&/^[123]\.\s/.test(el.textContent));
 if(groups.length!==3)return; // progressive enhancement: no learner content hidden on failure
 start.dataset.ready="1";
 document.body.classList.add("thpt-r4-topic-knowledge");
 const root=document.createElement("div");root.className="topic01-knowledge-layout";root.setAttribute("data-topic01-module-layout","true");
 const tabs=document.createElement("nav");tabs.className="thpt-r4-knowledge-tabs thpt-r4-knowledge-modules";
 tabs.setAttribute("role","tablist");tabs.setAttribute("aria-label","Ba mảng kiến thức Chuyên đề 01");
 article.insertBefore(root,groups[0]);root.appendChild(tabs);
 const outerButtons=[],outerPanels=[];
 function activate(buttons,panels,n){
  buttons.forEach((b,i)=>{const selected=i===n;b.classList.toggle("is-active",selected);b.setAttribute("aria-selected",String(selected));b.tabIndex=selected?0:-1;panels[i].hidden=!selected;});
  const active=panels[n];if(active&&window.MathJax&&typeof window.MathJax.typesetPromise==="function")window.MathJax.typesetPromise([active]).catch(()=>{});
 }
 function bind(buttons,panels){
  buttons.forEach((b,i)=>{
   b.addEventListener("click",()=>activate(buttons,panels,i));
   b.addEventListener("keydown",event=>{const k=event.key;if(!["ArrowLeft","ArrowRight","Home","End"].includes(k))return;event.preventDefault();const next=k==="Home"?0:k==="End"?buttons.length-1:(i+(k==="ArrowRight"?1:-1)+buttons.length)%buttons.length;activate(buttons,panels,next);buttons[next].focus();});
  });activate(buttons,panels,0);
 }
 for(let n=0;n<groups.length;n++){
  const heading=groups[n],next=groups[n+1]||end,id=String(n+1);
  const button=document.createElement("button");button.type="button";
  button.className="thpt-r4-knowledge-tab thpt-r4-knowledge-module-tab";
  button.id="topic01-group-tab-"+id;button.setAttribute("role","tab");
  button.dataset.topic01ModuleTab=id;button.setAttribute("aria-controls","topic01-group-"+id);
  button.textContent=heading.textContent.replace(/^\s*\d+\.\s*/,"");
  const panel=document.createElement("section");panel.className="thpt-r4-knowledge-panel thpt-r4-knowledge-module-panel";
  panel.id="topic01-group-"+id;panel.dataset.topic01ModulePanel=id;
  panel.setAttribute("role","tabpanel");panel.setAttribute("aria-labelledby",button.id);
  let node=heading;
  while(node&&node!==next){const following=node.nextSibling;panel.appendChild(node);node=following;}
  tabs.appendChild(button);root.appendChild(panel);outerButtons.push(button);outerPanels.push(panel);
  const subHeads=[...panel.children].filter(el=>el.tagName==="H3"&&new RegExp("^"+id+"\\.\\d+\\.").test(el.textContent));
  if(!subHeads.length)continue;
  const wrapper=document.createElement("div");wrapper.className="thpt-r4-knowledge-subgroup";
  const subTabs=document.createElement("nav");subTabs.className="thpt-r4-knowledge-tabs thpt-r4-knowledge-subtabs";
  subTabs.setAttribute("role","tablist");subTabs.setAttribute("aria-label","Nội dung trong mảng "+id);
  panel.insertBefore(wrapper,subHeads[0]);wrapper.appendChild(subTabs);
  const buttons=[],panels=[];
  for(let j=0;j<subHeads.length;j++){
   const header=subHeads[j],until=subHeads[j+1]||null,tabId=id+"-"+(j+1);
   const b=document.createElement("button");b.type="button";b.className="thpt-r4-knowledge-tab";
   b.dataset.topic01Subtab=tabId;b.id="topic01-subtab-"+tabId;b.setAttribute("role","tab");
   b.setAttribute("aria-controls","topic01-content-"+tabId);
   b.textContent=header.textContent;
   const p=document.createElement("section");p.className="thpt-r4-knowledge-panel thpt-r4-knowledge-content-panel";
   p.id="topic01-content-"+tabId;p.setAttribute("role","tabpanel");p.setAttribute("aria-labelledby",b.id);
   let child=header;while(child&&child!==until){const nextChild=child.nextSibling;p.appendChild(child);child=nextChild;}
   subTabs.appendChild(b);wrapper.appendChild(p);buttons.push(b);panels.push(p);
  }
  bind(buttons,panels);
 }
 // Optional model is additional practice of the visible logic ideas, never a replacement for knowledge.
 const note=document.createElement("aside");note.className="thpt-r4-knowledge-note topic01-model-note";
 note.append("Thử khám phá: ");
 const link=document.createElement("a");link.href="../../../math-lab/models/slm-top01-truth-01/";link.textContent="Mô hình chân trị và mệnh đề trong Math Lab";
 note.appendChild(link);note.append(". Em có thể quay lại học tiếp mà không cần đăng nhập hoặc chấm điểm.");
 const firstSub=outerPanels[0].querySelector(".thpt-r4-knowledge-subgroup");
 if(firstSub)outerPanels[0].insertBefore(note,firstSub);
 bind(outerButtons,outerPanels);
};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
})();