/* G12 SGK ChVI R00 source-locked PUBLIC only; RD1 private; no Mastery writes. */
(()=>{"use strict";
const source=document.currentScript?.src||"";
const url=new URL("../data/thpt-g12-chvi-b18-b19-public-r00.json",source);
const mk=(tag,cls,text)=>{const x=document.createElement(tag);if(cls)x.className=cls;if(text!==undefined)x.textContent=String(text);return x};
const put=(root,text)=>{for(const bit of String(text??"").split(/(\x60[^\x60]+\x60)/g)){if(!bit)continue;if(bit[0]==="\x60"&&bit.at(-1)==="\x60")root.append(mk("code","",bit.slice(1,-1)));else root.append(document.createTextNode(bit))}return root};
const para=text=>put(mk("p","g12-chv-paragraph"),text);
const math=root=>{if(window.MathJax?.typesetPromise)window.MathJax.typesetPromise([root]).catch(()=>{})};
const anchor=id=>String(id).toLowerCase().replace(/[^a-z0-9-]/g,"-");
const fail=message=>{throw Error("G12 ChVI SOURCE_LOCK: "+message)};
const check=bank=>{
 if(bank?.packet_id!=="G12-SGK-CHVI-B18-B19-END-R00"||
  bank.source_blob!=="1578efd4d2d46deb9bae064d12752d88fc3747b8"||
  bank.receipt_blob!=="c371e9f4873caa04c0c005b625316cf07ef5449a"||
  bank.mode!=="CLIENT_SELF_CHECK_NO_MASTERY")fail("provenance");
 const ids=new Set(bank.items?.map(q=>q.item_id)||[]);
 if(bank.items?.length!==56||ids.size!==56||bank.help?.length!==14||bank.end_references?.length!==14)fail("counts/unique IDs");
 for(const role of ["CORE","SGK_PRACTICE","SGK_APPLICATION","SGK_WRITTEN"])
  if(bank.items.filter(q=>q.role===role).length!==14)fail("role "+role);
 const outcomes=new Set(bank.items.map(q=>q.outcome_id));
 if(outcomes.size!==14||bank.items.some(q=>!q.stem||!q.answer||!q.solution||!["B18","B19"].includes(q.lesson_id)))fail("item/outcome coverage");
 if(new Set(bank.end_references.map(x=>x.item_id)).size!==14||bank.end_references.some(ref=>{
  const q=bank.items.find(x=>x.item_id===ref.item_id);
  return !q||q.role!=="SGK_APPLICATION"||q.outcome_id!==ref.outcome_id;
 }))fail("canonical END reuses");
 for(const help of bank.help)if(help.steps?.length!==5||!ids.has(help.return_item)||!ids.has(help.practice_item))fail("D6");
};
const names={B18:"Xác suất có điều kiện",B19:"Công thức xác suất toàn phần và Bayes"};
const startHub=(root,bank)=>{
 root.classList.add("thpt-r4-practice-sections");
 for(const lesson of ["B18","B19"]){
  const panel=mk("section","thpt-r4-practice-lesson g12-chv-hub-lesson");
  panel.dataset.thptGrade="12";panel.dataset.g12ChviHubLesson=lesson;
  const head=mk("div","thpt-r4-practice-lesson-header"),heading=mk("div");
  heading.append(mk("p","thpt-r4-practice-class","Lớp 12 · Chương VI"),mk("h2","",names[lesson]));
  head.append(mk("span","thpt-r4-lesson-number",Number(lesson.slice(1))),heading);panel.append(head);
  const grid=mk("div","thpt-r4-practice-card-grid");
  for(const practice of [false,true]){
   const roles=practice?["SGK_PRACTICE","SGK_APPLICATION","SGK_WRITTEN"]:["CORE"];
   const chosen=bank.items.filter(q=>q.lesson_id===lesson&&roles.includes(q.role));
   const detail=mk("details","g12-chv-hub-group thpt-r4-practice-card");
   detail.dataset.thptGrade="12";detail.id=lesson.toLowerCase()+(practice?"-practice":"-core");
   const summary=mk("summary","g12-chv-hub-summary");
   summary.append(mk("span","g12-chv-hub-kind",practice?"Luyện tập · Vận dụng · Tự luận":"Core"),
    mk("strong","",practice?"Tự giải và trình bày suy luận":"Ôn nền tảng và điều kiện"),
    mk("span","g12-chv-hub-count",chosen.length+" câu gốc"),
    mk("span","g12-chv-hub-action","✎ Mở câu hỏi"));
   detail.append(summary);
   const content=mk("div","g12-chv-hub-body");
   for(const q of chosen){const pointer=mk("section");pointer.dataset.canonicalItem=q.item_id;content.append(pointer)}
   detail.append(content);grid.append(detail);
  }
  panel.append(grid);
  const go=mk("a","g12-chv-return","← Ôn kiến thức Bài "+Number(lesson.slice(1)));
  go.href="../bai-"+Number(lesson.slice(1))+"/";panel.append(go);root.append(panel);
 }
 if(!window.THPT_G12_GOLDEN_HUB?.mount(root,bank,{chapter:"VI"}))fail("approved Golden modal unavailable");
};
const startSelfCheck=(root,bank)=>{
 const lookup=new Map(bank.items.map(q=>[q.item_id,q]));
 const entries=bank.end_references.map((ref,i)=>{
  const q=lookup.get(ref.item_id);
  const card=mk("section","g12-chv-item g12-chv-selfcheck-item");
  card.dataset.canonicalItem=q.item_id;
  const input=mk("textarea","g12-chv-input");input.rows=4;input.setAttribute("aria-label","Trả lời câu "+(i+1));
  const result=mk("section","g12-chv-answer");result.hidden=true;
  card.append(mk("h4","","Câu "+(i+1)+" / 14"),para(q.stem),input,result);
  root.append(card);return {q,card,input,result};
 });
 const progress=mk("p","g12-chv-quiz-progress");
 const nav=mk("nav","g12-chv-quiz-nav");nav.setAttribute("aria-label","Chọn câu tự kiểm tra");
 root.prepend(nav);root.prepend(progress);
 let current=0,submitted=false;
 const jumps=entries.map((_,i)=>{const b=mk("button","g12-chv-quiz-jump",String(i+1));b.type="button";b.setAttribute("aria-label","Đến câu "+(i+1));nav.append(b);return b});
 const prev=mk("button","g12-chv-quiz-step","Câu trước"),next=mk("button","g12-chv-quiz-step","Câu tiếp");
 prev.type=next.type="button";
 const status=mk("p","g12-chv-feedback"),submit=mk("button","g12-chv-submit g12-chv-final","Final Submit — Tự đối chiếu");submit.type="button";submit.dataset.g12ChviFinal="";
 const show=()=>{
  entries.forEach((x,i)=>x.card.hidden=i!==current);
  jumps.forEach((b,i)=>{b.classList.toggle("is-current",i===current);if(i===current)b.setAttribute("aria-current","step");else b.removeAttribute("aria-current")});
  progress.textContent="Câu "+(current+1)+" / 14 · "+(submitted?"Đã nộp":"Chưa nộp");
  prev.disabled=current===0;next.disabled=current===13;math(entries[current].card);
 };
 jumps.forEach((b,i)=>b.addEventListener("click",()=>{current=i;show()}));
 prev.addEventListener("click",()=>{if(current){current--;show()}});
 next.addEventListener("click",()=>{if(current<13){current++;show()}});
 submit.addEventListener("click",()=>{
  if(submitted)return;
  const missing=entries.findIndex(x=>!x.input.value.trim());
  if(missing>=0){status.textContent="Hãy tự làm đủ 14 câu trước khi Final Submit.";current=missing;show();return}
  submitted=true;submit.disabled=true;
  for(const {q,input,result}of entries){
   input.disabled=true;result.hidden=false;
   result.append(mk("h5","","Đối chiếu sau Final Submit"),para(q.answer),para(q.solution));
   const a=mk("a","g12-chv-return","Ôn lại Core và hướng dẫn D6");a.href="../luyen-tap/#"+anchor(q.item_id.replace(/-A(\d\d)$/,"-C$1"));result.append(a);
  }
  status.textContent="Đã nộp. Chỉ tự đối chiếu; không chấm điểm, không ghi Skill Mastery hay đánh giá độc lập.";
  show();math(root);
 });
 const controls=mk("div","g12-chv-quiz-controls");controls.append(prev,next,submit);root.append(controls,status);show();
};
const start=async()=>{
 const root=document.querySelector("[data-g12-chvi-hub],[data-g12-chvi-selfcheck]");if(!root)return;
 try{
  const res=await fetch(url,{cache:"no-cache"});if(!res.ok)fail("bank HTTP "+res.status);
  const bank=await res.json();check(bank);
  root.replaceChildren();
  if(root.hasAttribute("data-g12-chvi-hub"))startHub(root,bank);
  else startSelfCheck(root,bank);
  root.dataset.g12ChviReady="true";
 }catch(error){
  root.dataset.g12ChviError="true";
  root.replaceChildren(para("Chưa tải được học liệu đã duyệt. Hãy thử tải lại trang."));
  console.error("G12 ChVI RELEASE",error);
 }
};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();