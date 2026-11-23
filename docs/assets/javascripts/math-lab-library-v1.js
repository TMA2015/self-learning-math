/* Math Lab catalog UI only. No assessment, auth, network or learner progress. */
(()=>{"use strict";
 // Add one auxiliary Math Lab link when the existing Golden 5+1
 // dialog opens. Do NOT change the signed shared THPT launcher module,
 // its five groups, or its one official Topic catalog shortcut.
 function mountMathLabShortcut(){
  const dialog=document.querySelector("[data-thpt-r4-shortcut-dialog]");
  const section=dialog?.querySelector("details.roadmap-main-quick");
  if(!section||section.querySelector("[data-thpt-math-lab-shortcut]"))return;
  const match=location.pathname.match(/^(.*?\/)(thpt-preview|thpt)\//);
  if(!match)return;
  const nav=document.createElement("nav");
  nav.className="roadmap-main-quick__links";
  nav.setAttribute("aria-label","Lối tắt bổ sung tới thư viện Math Lab");
  const a=document.createElement("a");
  a.href=match[1]+match[2]+"/math-lab/";
  a.textContent="Math Lab · 25 mô hình tương tác";
  a.dataset.thptMathLabShortcut="1";
  nav.append(a);section.append(nav);
 }
 document.addEventListener("click",event=>{
  if(event.target?.closest?.("[data-thpt-r4-launcher]"))
   requestAnimationFrame(mountMathLabShortcut);
 },true);

 // The 25 original model-page routes now contain composed top-level documents.
 // No redirect: this preserves all original wrapper context and both back links.
 const root=document.querySelector("[data-math-lab-catalog]");if(!root)return;const grid=root.querySelector("[data-ml-grid]"),search=root.querySelector("[data-ml-search]"),counter=root.querySelector("[data-ml-count]"),buttons=[...root.querySelectorAll("[data-ml-mode]")],cards=[...root.querySelectorAll("[data-ml-card]")],subjects={algebra:"Đại số và hàm số",calculus:"Lượng giác và giải tích",geometry:"Hình học và vectơ",probability:"Tổ hợp, xác suất và thống kê"},idx={algebra:0,calculus:1,geometry:2,probability:3};let state={mode:"topic",q:""};try{const old=JSON.parse(sessionStorage.getItem("slm-mathlab-ui")||"null");if(old&&(old.mode==="topic"||old.mode==="grade")&&typeof old.q==="string"){state=old;state.q=state.q.slice(0,100);}}catch(_e){}search.value=state.q;
function render(){const q=state.q.trim().toLocaleLowerCase("vi");const visible=cards.filter(c=>!q||c.textContent.toLocaleLowerCase("vi").includes(q)||c.dataset.grade===q||subjects[c.dataset.group].toLocaleLowerCase("vi").includes(q));visible.sort((a,b)=>state.mode==="topic"?(idx[a.dataset.group]-idx[b.dataset.group]||Number(a.dataset.grade)-Number(b.dataset.grade)||Number(a.dataset.order)-Number(b.dataset.order)):(Number(a.dataset.grade)-Number(b.dataset.grade)||Number(a.dataset.order)-Number(b.dataset.order)));grid.replaceChildren();let prev="";for(const card of visible){const k=state.mode==="topic"?card.dataset.group:card.dataset.grade;if(k!==prev){const h=document.createElement("h2");h.className="ml-section-head";h.textContent=state.mode==="topic"?subjects[k]:"Lớp "+k+" · Gợi ý nội dung";grid.appendChild(h);prev=k;}grid.appendChild(card);}if(!visible.length){const p=document.createElement("p");p.textContent="Không tìm thấy mô hình. Hãy thử từ khóa khác.";grid.appendChild(p);}counter.textContent=visible.length+" / 25 mô hình";buttons.forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.mlMode===state.mode)));try{sessionStorage.setItem("slm-mathlab-ui",JSON.stringify(state));}catch(_e){}}buttons.forEach(b=>b.addEventListener("click",()=>{state.mode=b.dataset.mlMode;render();}));search.addEventListener("input",()=>{state.q=search.value;render();});render();
})();