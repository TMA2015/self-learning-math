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

/* CĐ01 public Practice ONLY. The existing approved Markdown body remains
   a single source; cards show one original item at a time in shared Golden R4. */
function initTopic01Practice(){
 const marker=document.querySelector("[data-topic01-practice-start]");
 if(!marker||marker.dataset.ready==="1")return;
 const article=marker.closest(".md-typeset"),end=article?.querySelector("[data-topic01-practice-end]");
 const golden=window.THPT_GOLDEN_RUNTIME;
 if(!article||!end||!golden)return;
 const headings=[...article.children].filter(x=>x.tagName==="H2"&&/^[123]\.\s/.test(x.textContent));
 if(headings.length!==3)return;
 // ID placements only, taken in original order from the 24 AUTHORING Q15 markers.
 // No canonical stems, keys, solutions or rubrics duplicated in JavaScript.
 const approvedIds=["THPT-G10-B01-C01","THPT-TOP01-ADD01","THPT-G10-B01-C02","THPT-G10-B01-P05","THPT-G10-B01-P03","THPT-G10-B01-P06","THPT-G10-CHI-W01","THPT-G10-B01-P04","THPT-TOP01-ADD02","THPT-G10-B01-P01","THPT-G10-B01-P02","THPT-G10-B02-C01","THPT-G10-B02-P06","THPT-G10-B02-C02","THPT-TOP01-ADD03","THPT-G10-B02-P01","THPT-TOP01-ADD04","THPT-G10-B02-P02","THPT-TOP01-ADD05","THPT-G10-B02-P03","THPT-G10-B02-P04","THPT-G10-B02-P05","THPT-G10-CHI-W02-ANCHOR","THPT-TOP01-ADD06"];
 const items=[];let group="",current=null,node=headings[0];
 const originalNodes=[];
 while(node&&node!==end){originalNodes.push(node);node=node.nextSibling;}
 for(const n of originalNodes){
  if(n.nodeType===1&&n.tagName==="H2"){group=n.textContent.trim();current=null;continue;}
  const name=n.nodeType===1&&n.tagName==="P"?n.querySelector(":scope > strong")?.textContent?.trim():"";
  const match=/^Bài\s+(\d+)\.$/.exec(name||"");
  if(match){
   let previous=n.previousSibling;
   while(previous&&previous.nodeType===3&&!previous.textContent.trim())previous=previous.previousSibling;
   const commentId=(previous?.nodeType===8?previous.textContent:"").match(/DISPLAY_ONLY_CANONICAL:\s*([A-Z0-9-]+)/)?.[1]||"";
   const itemId=approvedIds[Number(match[1])-1]||"";
   if(commentId&&commentId!==itemId)return; // source display marker changed
   current={number:Number(match[1]),group,itemId,nodes:[n]};items.push(current);
  }else if(current)current.nodes.push(n);
 }
 if(items.length!==24||items.some((x,i)=>x.number!==i+1||!x.itemId)||new Set(items.map(x=>x.itemId)).size!==24){console.error("TOPIC01_GOLDEN_SOURCE_GATE",JSON.stringify({count:items.length,ids:items.map(x=>x.itemId),numbers:items.map(x=>x.number)}));return;}
 golden.publicOnly();marker.dataset.ready="1";
 const hub=document.createElement("section");hub.className="topic01-golden-hub";hub.dataset.topic01GoldenHub="1";
 const lead=document.createElement("p");lead.textContent="24 bài luyện tập đã duyệt. Chọn một bài để tự giải rồi mở Lời giải / rubric. Mỗi lần chỉ hiện một bài, không ghi điểm thành thạo.";
 lead.className="topic01-golden-lead";hub.append(lead);
 const grid=document.createElement("div");grid.className="thpt-r4-practice-card-grid topic01-golden-grid";hub.append(grid);
 const shelf=document.createElement("div");shelf.hidden=true;shelf.dataset.topic01SourceShelf="1";shelf.setAttribute("aria-hidden","true");
 article.insertBefore(hub,headings[0]);article.insertBefore(shelf,headings[0]);
 originalNodes.forEach(n=>shelf.appendChild(n));
 const cards=[];let lastGroup="";
 for(const q of items){
  if(q.group!==lastGroup){lastGroup=q.group;const title=document.createElement("h2");title.className="topic01-golden-section-heading";title.textContent=lastGroup;grid.append(title);}
  const button=document.createElement("button");button.type="button";button.className="topic01-golden-card thpt-r4-practice-card";
  button.dataset.topic01PracticeCard=String(q.number);
  const title=document.createElement("strong");title.textContent="Bài "+q.number;
  const subtitle=document.createElement("span");subtitle.textContent=q.group.replace(/^\d+\.\s*/,"");
  button.append(title,subtitle);grid.append(button);cards.push(button);
 }
 const dialog=document.createElement("dialog");dialog.className="thpt-r4-practice-dialog topic01-practice-dialog";
 dialog.dataset.topic01GoldenDialog="1";
 const bar=document.createElement("div");bar.className="thpt-r4-modal-top";
 const heading=document.createElement("div");heading.className="thpt-r4-modal-heading";
 const eyebrow=document.createElement("p");eyebrow.className="thpt-r4-modal-meta";eyebrow.textContent="CĐ01 · LUYỆN TẬP CÔNG KHAI";
 const title=document.createElement("h2");title.textContent="Một bài – một lần tự giải";
 heading.append(eyebrow,title);
 const close=document.createElement("button");close.type="button";close.className="topic01-close";close.textContent="Đóng ×";close.setAttribute("aria-label","Đóng bài luyện tập");
 bar.append(heading,close);
 const body=document.createElement("div");body.className="thpt-r4-modal-main";dialog.append(bar,body);document.body.append(dialog);
 let cursor=0;const drafts=new Map();
 const lifecycle=golden.bindDialog({dialog,closeButton:close,getReturnFocus:()=>cards[cursor]});
 const prev=document.createElement("button"),next=document.createElement("button");prev.type="button";next.type="button";
 prev.textContent="← Bài trước";next.textContent="Bài tiếp →";
 let pager=null;
 const render=()=>{
  const q=items[cursor];body.replaceChildren();
  const status=document.createElement("p");status.className="thpt-r4-modal-progress";
  status.textContent="Bài "+q.number+" / 24 · "+q.group;body.append(status);
  const nav=document.createElement("div");nav.className="thpt-r4-modal-question-nav";
  golden.renderNav({container:nav,count:items.length,index:cursor,label:i=>String(i+1),onSelect:i=>{cursor=i;render();}});
  body.append(nav);
  const content=document.createElement("article");content.className="thpt-r4-reviewed-formative-card topic01-question-body";
  content.dataset.topic01CurrentItem=String(q.number);content.dataset.thptCanonicalItem=q.itemId;
  q.nodes.forEach(n=>content.append(n.cloneNode(true)));body.append(content);
  const label=document.createElement("label");label.className="topic01-draft-label";
  label.textContent="Ghi cách làm của em (không lưu vào tài khoản)";
  const area=document.createElement("textarea");area.rows=3;area.placeholder="Tự làm trước khi mở Lời giải";
  area.setAttribute("aria-label","Bản nháp Bài "+q.number);
  area.value=drafts.get(q.itemId)||"";area.addEventListener("input",()=>drafts.set(q.itemId,area.value));
  label.append(area);body.append(label);
  const paging=document.createElement("div");paging.className="thpt-r4-modal-buttons";paging.append(prev,next);body.append(paging);
  pager?.sync();
  window.MathJax?.typesetPromise?.([content])?.catch(()=>{});
 };
 pager=golden.bindPager({prev,next,getIndex:()=>cursor,getCount:()=>items.length,go:i=>{cursor=i;render();}});
 cards.forEach((button,i)=>button.addEventListener("click",()=>{cursor=i;render();lifecycle.open(button);}));
}
const launch=()=>{init();initTopic01Practice();};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",launch,{once:true});else launch();
})();