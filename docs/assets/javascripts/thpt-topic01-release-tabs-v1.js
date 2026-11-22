/* RELEASE CĐ01: adaptive 2-level knowledge tabs; DOM-only visual grouping.
   No academic text rewrite, grading, network, storage, Tutor or Mastery writes. */
(()=>{"use strict";

const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n};
const typeset=n=>{const m=window.MathJax;if(m?.typesetPromise)m.typesetPromise([n]).catch(()=>{});else if(m?.startup?.promise)m.startup.promise.then(()=>m.typesetPromise([n])).catch(()=>{})};
function solutionContent(details){
 const out=el("div","thpt-r4-formative-reveal"),clone=details.cloneNode(true);clone.querySelector("summary")?.remove();
 for(const n of [...clone.childNodes]){
  if(n.nodeType===1){out.append(document.importNode(n,true));continue}
  if(n.nodeType!==3)continue;
  for(const part of n.textContent.trim().split(/\n\s*\n/)){if(!part.trim())continue;const p=el("p");
   for(const c of part.split(/(\*\*[^*]+\*\*|\*[^*\n]+\*)/g)){if(c.startsWith("**")&&c.endsWith("**")&&c.length>4)p.append(el("strong","",c.slice(2,-2)));else if(c.startsWith("*")&&c.endsWith("*")&&c.length>2)p.append(el("em","",c.slice(1,-1)));else p.append(c.replace(/\n/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">"))}out.append(p)
  }
 }return out;
}
function knowledgeStyle(root){
 for(const q of root.querySelectorAll("blockquote")){
  const label=(q.querySelector("strong")?.textContent||"").trim().toLocaleUpperCase("vi");
  const roles={"ĐỊNH NGHĨA":["concept","thpt-r4-knowledge-conclusion thpt-r4-concept-card"],"TÍNH CHẤT":["rule","thpt-r4-knowledge-conclusion thpt-r4-rule-card"],"CÔNG THỨC":["formula","thpt-r4-key-formula"],"KIẾN THỨC CẦN GHI NHỚ":["recap","thpt-r4-knowledge-conclusion"]};
  if(!roles[label])continue;const [role,cls]=roles[label],box=el("div",cls);box.dataset.topic01Callout=role;box.setAttribute("role","note");box.append(...q.childNodes);q.replaceWith(box)
 }
 for(const d of root.querySelectorAll("details")){const summary=d.querySelector("summary");if(!summary)continue;const c=solutionContent(d);d.classList.add("question");d.replaceChildren(summary,...c.childNodes);d.addEventListener("toggle",()=>{if(d.open)typeset(d)})}
 for(const p of root.querySelectorAll("p")){if(p.querySelector(":scope > strong")?.textContent.trim()!=="Lời giải.")continue;const box=el("div","thpt-g10-example-solution");p.before(box);box.append(p);let n=box.nextElementSibling;while(n&&!n.matches("h2,h3,h4,details,.thpt-r4-knowledge-conclusion,.thpt-r4-key-formula")&&!/^(Vận dụng|Kiểm lại|Ví dụ|Kiểm lỗi|Khám phá kiến thức)/.test(n.textContent.trim())){const following=n.nextElementSibling;box.append(n);n=following}}
}

const init=()=>{
 const start=document.querySelector("[data-topic01-knowledge-start]");
 if(!start||start.dataset.ready==="1")return;
 const article=start.closest(".md-typeset"),end=article?.querySelector("[data-topic01-knowledge-end]");
 if(!article||!end)return;
 const groups=[...article.children].filter(el=>el.tagName==="H2"&&/^[123]\.\s/.test(el.textContent));
 if(groups.length!==3)return; // progressive enhancement: no learner content hidden on failure
 start.dataset.ready="1";
 article.classList.add("thpt-g10-knowledge-ap1","thpt-g10-first-six-golden","topic01-golden-knowledge");
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
  button.textContent=heading.textContent;
  const panel=document.createElement("section");panel.className="thpt-r4-knowledge-panel thpt-r4-knowledge-module-panel";heading.classList.add("thpt-g10-section-heading");
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
 knowledgeStyle(root);
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
 const groups=headings.map(h=>({title:h.textContent.trim(),items:items.filter(q=>q.group===h.textContent.trim())}));
 if(groups.map(g=>g.items.length).join(",")!=="11,8,5")throw Error("TOPIC01_GROUP_SOURCE_GATE");
 const hub=el("section","topic01-golden-hub"),grid=el("div","thpt-r4-practice-sections topic01-golden-grid"),shelf=el("div","");
 hub.dataset.topic01GoldenHub="1";hub.append(grid);shelf.hidden=true;shelf.dataset.topic01SourceShelf="1";shelf.setAttribute("aria-hidden","true");
 article.insertBefore(hub,headings[0]);article.insertBefore(shelf,headings[0]);originalNodes.forEach(n=>shelf.append(n));
 const descriptions=["Nhận biết mệnh đề, phủ định, kéo theo, tương đương và lượng từ.","Xác định phần tử, tập con, giao, hợp, hiệu và phần bù.","Đọc khoảng trên trục số, sử dụng sơ đồ Ven và đếm phần hợp."];
 const cards=groups.map((g,i)=>{
  const wrap=el("section","thpt-r4-practice-lesson");wrap.dataset.thptGrade="10";
  const header=el("div","thpt-r4-practice-lesson-header"),meta=el("div","");meta.append(el("p","thpt-r4-practice-class","Chuyên đề 01 · Nhóm "+(i+1)),el("h2","",g.title.replace(/^\d+\.\s*/,"")));header.append(el("span","thpt-r4-lesson-number",String(i+1)),meta);
  const inner=el("div","thpt-r4-practice-card-grid topic01-single-card"),card=el("section","thpt-r4-practice-card"),content=el("div","");content.append(el("p","",descriptions[i]),el("p","",g.items.length+" bài luyện tập"));
  const button=el("button","thpt-r4-practice-open","✎ Luyện tập");button.type="button";button.dataset.topic01PracticeCard=String(i+1);card.append(content,button);inner.append(card);wrap.append(header,inner);grid.append(wrap);return button;
 });
 const dialog=el("dialog","thpt-r4-practice-dialog topic01-practice-dialog");dialog.dataset.topic01GoldenDialog="1";dialog.setAttribute("aria-label","Luyện tập Chuyên đề 01");
 const bar=el("div","thpt-r4-modal-top"),badge=el("span","thpt-r4-modal-lesson-badge","1"),heading=el("div","thpt-r4-modal-heading"),title=el("h2","");
 heading.append(el("p","thpt-r4-modal-meta","CĐ01 · LUYỆN TẬP"),title);
 const close=el("button","topic01-close","Đóng ×");close.type="button";close.dataset.thptModalClose="";close.setAttribute("aria-label","Đóng bài luyện tập");bar.append(badge,heading,close);
 const body=el("div","thpt-r4-modal-main");dialog.append(bar,body);document.body.append(dialog);
 let activeGroup=0,cursor=0,pager=null;
 const lifecycle=golden.bindDialog({dialog,closeButton:close,getReturnFocus:()=>cards[activeGroup]});
 const prev=el("button","","← Bài trước"),next=el("button","","Bài tiếp →");prev.type=next.type="button";
 const render=()=>{
  const g=groups[activeGroup],q=g.items[cursor];body.replaceChildren();badge.textContent=String(activeGroup+1);title.textContent=g.title.replace(/^\d+\.\s*/,"");
  body.append(el("p","thpt-r4-modal-progress","Câu "+(cursor+1)+" / "+g.items.length));
  const nav=el("div","thpt-r4-modal-question-nav");golden.renderNav({container:nav,count:g.items.length,index:cursor,label:i=>String(i+1),onSelect:i=>{cursor=i;render()}});body.append(nav);
  const card=el("article","md-typeset thpt-r4-reviewed-formative-card topic01-question-body");card.dataset.topic01CurrentItem=String(q.number);card.dataset.thptCanonicalItem=q.itemId;card.append(el("h3","","Bài "+q.number+"."));
  const source=q.nodes.find(n=>n.nodeType===1&&n.tagName==="DETAILS");if(!source)throw Error("Missing canonical solution "+q.itemId);
  for(const n of q.nodes.slice(1)){if(n.nodeType===1&&n.tagName!=="DETAILS"||n.nodeType===3)card.append(n.cloneNode(true))}
  const form=el("div","thpt-r4-formative-answer"),reveal=el("button","thpt-r4-formative-submit","Đối chiếu"),feedback=el("p","thpt-r4-formative-feedback");reveal.type="button";feedback.setAttribute("role","status");form.append(el("p","","Em tự làm bài trên giấy trước khi đối chiếu."),reveal,feedback);
  const actions=el("div","thpt-r4-formative-actions"),details=el("details",""),solution=solutionContent(source);details.append(el("summary","","📖 Đáp án / Lời giải"),solution);
  const review=el("a","thpt-r4-remediation-link","↶ Ôn lại kiến thức");review.href="../kien-thuc/";actions.append(details,review);card.append(form,actions);body.append(card);
  reveal.onclick=()=>{details.open=true;feedback.textContent="Em hãy đối chiếu cách làm với lời giải bên dưới.";typeset(solution)};details.addEventListener("toggle",()=>{if(details.open)typeset(solution)});
  const paging=el("div","thpt-r4-modal-buttons");paging.append(prev,next);body.append(paging);pager?.sync();typeset(card);
 };
 pager=golden.bindPager({prev,next,getIndex:()=>cursor,getCount:()=>groups[activeGroup].items.length,go:i=>{cursor=i;render()}});
 cards.forEach((button,i)=>button.addEventListener("click",()=>{activeGroup=i;cursor=0;render();lifecycle.open(button)}));
}
function initTopic01Selfcheck(){
 const marker=document.querySelector("[data-topic01-selfcheck-start]"),end=document.querySelector("[data-topic01-selfcheck-end]");if(!marker||!end||marker.dataset.ready==="1")return;
 const startHost=marker.closest("p")||marker,endHost=end.closest("p")||end;
 const nodes=[];for(let n=startHost.nextSibling;n&&n!==endHost;n=n.nextSibling)nodes.push(n);
 const items=[];
 for(const n of nodes){if(n.nodeType!==8)continue;const id=n.textContent.match(/PUBLIC_REPLAY_ONLY:\s*([A-Z0-9-]+)/)?.[1];if(!id)continue;let p=n.nextSibling;while(p&&p.nodeType!==1)p=p.nextSibling;const num=Number(p?.querySelector(":scope > strong")?.textContent.match(/^Câu (\d+)\./)?.[1]);if(p?.tagName!=="P"||!num)throw Error("Invalid public replay");const stem=p.cloneNode(true);stem.querySelector(":scope > strong").remove();items.push({id,num,stem})}
 if(items.length!==11||items.some((q,i)=>q.num!==i+1)||new Set(items.map(q=>q.id)).size!==11)return;
 const root=el("div","");root.dataset.g10ChapterSelfcheck="TOP01";root.dataset.g10scBound="topic-public-replay";root.dataset.topic01PublicSelfcheck="1";
 root.append(el("h2","g10sc-heading","Tự kiểm tra chuyên đề 01"),el("p","g10sc-notice","Em tự làm từng câu trên giấy, sau đó mở Đối chiếu. Không chấm điểm tự động, không ghi điểm thành thạo."));
 const progress=el("p","g10sc-progress"),nav=el("div","g10sc-jump"),body=el("section","g10sc-body"),controls=el("div","g10sc-controls"),prev=el("button","g10sc-button","Câu trước"),next=el("button","g10sc-button","Câu tiếp");prev.type=next.type="button";controls.append(prev,next);root.append(progress,nav,body,controls,el("p","g10sc-notice","Học liệu được xây dựng dựa trên Chương I SGK Toán 10, Tập Một – Kết nối tri thức với cuộc sống."));
 const shelf=el("div","");shelf.hidden=true;shelf.dataset.topic01SelfcheckSource="1";startHost.after(root,shelf);nodes.forEach(n=>shelf.append(n));marker.dataset.ready="1";
 let cursor=0,publicPractice=null;
 async function existingPublicSolution(id){
  if(!items.some(q=>q.id===id))throw Error("Not public replay");
  if(!publicPractice){const url=new URL("../luyen-tap/",location.href);if(url.origin!==location.origin||!url.pathname.endsWith("/chuyen-de/cd01/luyen-tap/"))throw Error("Invalid public source");
   const response=await fetch(url,{method:"GET",credentials:"omit",redirect:"error"});if(!response.ok)throw Error("Public source unavailable");
   const doc=new DOMParser().parseFromString(await response.text(),"text/html"),begin=doc.querySelector("[data-topic01-practice-start]"),finish=doc.querySelector("[data-topic01-practice-end]");if(!begin||!finish)throw Error("Missing source markers");
   const bank=new Map();let key="";const sourceStart=begin.closest("p")||begin,sourceEnd=finish.closest("p")||finish;for(let n=sourceStart.nextSibling;n&&n!==sourceEnd;n=n.nextSibling){if(n.nodeType===8){const m=n.textContent.match(/DISPLAY_ONLY_CANONICAL:\s*([A-Z0-9-]+)/);if(m)key=m[1]}if(n.nodeType===1&&n.tagName==="DETAILS"&&key){if(bank.has(key))throw Error("Duplicate public ID");bank.set(key,n);key=""}}
   if(bank.size!==24||items.some(q=>!bank.has(q.id)))throw Error("Public solution mapping incomplete");publicPractice=bank
  }return solutionContent(publicPractice.get(id))
 }
 function render(){
  const q=items[cursor];progress.textContent="Câu "+(cursor+1)+" / "+items.length;nav.replaceChildren();
  items.forEach((_,j)=>{const b=el("button","g10sc-jump-button"+(j===cursor?" is-current":""),String(j+1));b.type="button";b.setAttribute("aria-label","Đến câu "+(j+1));if(j===cursor)b.setAttribute("aria-current","true");b.onclick=()=>{cursor=j;render()};nav.append(b)});
  body.replaceChildren(el("h3","","Câu "+q.num));body.dataset.thptCanonicalItem=q.id;const rich=el("div","g10sc-rich");rich.append(q.stem.cloneNode(true));body.append(rich);
  const button=el("button","g10sc-button g10sc-final","Đối chiếu"),solution=el("section","g10sc-review");button.type="button";solution.hidden=true;solution.id="topic01-current-solution";button.setAttribute("aria-controls",solution.id);button.setAttribute("aria-expanded","false");body.append(button,solution);
  button.onclick=async()=>{if(!solution.hidden){solution.hidden=true;button.textContent="Đối chiếu";button.setAttribute("aria-expanded","false");return}button.disabled=true;try{const original=await existingPublicSolution(q.id);if(!solution.isConnected)return;solution.replaceChildren(...original.childNodes);solution.dataset.thptCanonicalSolution=q.id;solution.hidden=false;button.textContent="Ẩn đối chiếu";button.setAttribute("aria-expanded","true");typeset(solution)}catch(error){if(solution.isConnected){solution.replaceChildren(el("p","g10sc-error","Chưa tải được lời giải. Em bấm Đối chiếu để thử lại."));solution.hidden=false;button.textContent="Ẩn đối chiếu";button.setAttribute("aria-expanded","true")}}finally{button.disabled=false}};
  prev.disabled=cursor===0;next.disabled=cursor===items.length-1;typeset(body)
 }
 prev.onclick=()=>{if(cursor>0){cursor--;render()}};next.onclick=()=>{if(cursor<items.length-1){cursor++;render()}};render()
}

const launch=()=>{initTopic01Selfcheck();initTopic01Practice();init();};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",launch,{once:true});else launch();
})();