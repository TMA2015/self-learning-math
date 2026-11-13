/* G12 SGK EXP01/02 R01 RELEASE only: 40 source-locked PUBLIC items, 10 D6;
   client-only END Final Submit; no private RD1, official Readiness, Mastery or writes.
   Floating Gemini reads ONLY active public h3 in native Golden dialog. */
(()=>{"use strict";
const src=document.currentScript?.src||"";
const bankUrl=new URL("../data/thpt-g12-exp01-exp02-public-r01.json",src);
const make=(tag,cls,value)=>{const x=document.createElement(tag);if(cls)x.className=cls;if(value!==undefined)x.textContent=String(value);return x};
const rich=(root,value)=>{
 const parts=String(value||"").split(/(\$[^$\n]+\$|\x60[^\x60]+\x60|\*\*[^*]+\*\*)/g);
 for(const part of parts){
  if(!part)continue;
  if(part.startsWith("$")&&part.endsWith("$")){
   root.append(make("span","arithmatex","\\("+part.slice(1,-1)+"\\)"));
  }else if(part.startsWith("\x60")&&part.endsWith("\x60")){
   root.append(make("code","",part.slice(1,-1)));
  }else if(part.startsWith("**")&&part.endsWith("**")){
   root.append(make("strong","",part.slice(2,-2)));
  }else root.append(document.createTextNode(part));
 }
 return root;
};
const para=text=>rich(make("p","g12-xp-paragraph"),text);
const math=node=>{if(node.isConnected&&window.MathJax?.typesetPromise)window.MathJax.typesetPromise([node]).catch(()=>{})};
const fail=msg=>{throw Error("G12 XP SOURCE_LOCK: "+msg)};
const verify=b=>{
 if(b?.packet_id!=="G12-SGK-EXP01-EXP02-R01"||
 b.source_git_blob!=="8a34d1cf4009b9b6511a34c08c5d8e31525a6a46"||
 b.review_receipt_blob!=="b765e732fa8049482936dbededfafd7b9eb99341"||
 b.mode!=="CLIENT_SELF_CHECK_NO_MASTERY"||
 b.learning_path!=="SGK_EXPERIENCE_SUPPLEMENT"||b.private_rd1_count!==0)fail("provenance");
 const items=b.items||[];
 if(items.length!==40||new Set(items.map(q=>q.item_id)).size!==40||
 b.outcomes?.length!==10||b.help?.length!==10||b.end_references?.length!==10)fail("counts");
 const outcomes=new Set(b.outcomes.map(x=>x.outcome_id));
 for(const role of ["CORE","SGK_PRACTICE","SGK_APPLICATION","SGK_WRITTEN"]){
  const section=items.filter(x=>x.role===role);
  if(section.length!==10||section.some(q=>!/^THPT-G12-EXP0[12]-[CPAW]0[1-5]$/.test(q.item_id)||!outcomes.has(q.outcome_id)||!q.stem||!q.answer))fail("role/ID "+role);
  if(role==="SGK_WRITTEN"&&section.some(q=>!q.rubric))fail("Written rubric");
 }
 if(b.help.some(h=>h.steps?.length!==5||!outcomes.has(h.outcome_id)))fail("D6");
 const ids=new Set();
 for(const p of b.end_references){
  const q=items.find(x=>x.item_id===p.item_id);
  if(!q||q.role!=="SGK_APPLICATION"||q.outcome_id!==p.outcome_id||ids.has(p.item_id))fail("END reuses");
  ids.add(p.item_id);
 }
};
const startPractice=(root,b)=>{
 const golden=window.THPT_GOLDEN_RUNTIME;if(!golden)throw Error("GOLDEN_RUNTIME_MISSING: G12 EXP");
 root.replaceChildren();root.dataset.g12XpReady="true";
 const drafts=new Map(),unlocked=new Set();
 const dlg=make("dialog","thpt-r4-practice-dialog g12-xp-dialog");
 const head=make("header","thpt-r4-modal-heading g12-xp-modal-head");
 const title=make("h2"),subtitle=make("p","g12-xp-counter"),close=make("button","g12-xp-close","Đóng ×");
 close.type="button";head.append(subtitle,title,close);
 const jumps=make("nav","g12-xp-jump"),stage=make("div","g12-xp-stage"),footer=make("div","g12-xp-foot");
 const prev=make("button","g12-xp-prev","← Câu trước"),next=make("button","g12-xp-next","Câu tiếp →");
 prev.type=next.type="button";footer.append(prev,next);
 dlg.append(head,jumps,stage,footer);document.body.append(dlg);
 const lifecycle=golden.bindDialog({dialog:dlg,closeButton:close});
 let current=0,group=[],lesson="",role="";
 const show=()=>{
  const q=group[current];
  subtitle.textContent="Câu "+(current+1)+" / 5 · Tự luyện, không ghi điểm";
  title.textContent=(lesson==="EXP01"?"Thực hành 1":"Thực hành 2")+" · "+({CORE:"Core",SGK_PRACTICE:"Luyện tập",SGK_APPLICATION:"Vận dụng",SGK_WRITTEN:"Tự luận"}[role]);
  golden.renderNav({container:jumps,count:group.length,index:current,onSelect:i=>{current=i;show()},
   buttonClass:"g12-xp-jump-button",activeClass:"is-current",label:i=>String(i+1),ariaCurrent:"step",allAriaCurrent:false});
  stage.replaceChildren();
  const card=make("section","g12-xp-modal-question");card.dataset.thptCanonicalItem=q.item_id;
  const h3=rich(make("h3","g12-xp-question-stem"),q.stem);
  const label=make("label","g12-xp-label","Nhập đáp án hoặc cách giải của em");
  const draft=make("textarea","g12-xp-input");
  draft.rows=5;draft.setAttribute("aria-label","Bài làm "+q.item_id);
  draft.value=drafts.get(q.item_id)||"";
  draft.addEventListener("input",()=>drafts.set(q.item_id,draft.value));
  const submit=make("button","g12-xp-submit","Nộp và đối chiếu lời giải");submit.type="button";
  const answer=make("div","g12-xp-reveal");
  const reveal=()=>{
   answer.replaceChildren(make("h4","","Đối chiếu sau khi tự làm"),para(q.answer));
   if(q.rubric)answer.append(make("h4","","Tiêu chí tự đối chiếu /5"),para(q.rubric));
   submit.disabled=true;submit.textContent="Đã mở đối chiếu";math(answer);
  };
  submit.addEventListener("click",()=>{
   if(!draft.value.trim()){draft.focus();return}
   drafts.set(q.item_id,draft.value);unlocked.add(q.item_id);reveal();
  });
  const help=b.help.find(x=>x.outcome_id===q.outcome_id);
  const details=make("details","g12-xp-help");details.append(make("summary","","Khi gặp khó khăn · Hướng dẫn D6"));
  if(help){const list=make("ol","g12-xp-help-list");for(const s of help.steps)list.append(rich(make("li"),s.replace(/^\(\d\)\s*/,"")));details.append(list)}
  card.append(make("p","g12-xp-question-number",q.item_id),h3,label,draft,submit,details,answer);
  stage.append(card);prev.disabled=current===0;next.disabled=current===4;
  if(unlocked.has(q.item_id))reveal();
  math(stage);
 };
 golden.bindPager({prev,next,getIndex:()=>current,getCount:()=>group.length,go:i=>{current=i;show()}});
 const open=(exp,r,index=0,trigger=null)=>{
  lesson=exp;role=r;group=b.items.filter(q=>q.lesson_id===exp&&q.role===r);
  if(group.length!==5)fail("modal group "+exp+" "+r);
  current=index;show();lifecycle.open(trigger);
 };
 // Reuse regular SGK Golden R4 components; only source-locked role grouping changes.
 for(const exp of ["EXP01","EXP02"]){
  const section=make("section","thpt-r4-practice-lesson g12-xp-lesson-group");
  section.dataset.thptGrade="12";
  const title=exp==="EXP01"?"Hoạt động 1 · Tích phân và hình thang":"Hoạt động 2 · Mô hình hình học 3D";
  const header=make("div","thpt-r4-practice-lesson-header"),name=make("div");
  name.append(make("p","thpt-r4-practice-class","Lớp 12 · Hoạt động thực hành, trải nghiệm"),make("h2","",title));
  header.append(make("span","thpt-r4-lesson-number",exp==="EXP01"?"1":"2"),name);section.append(header);
  const grid=make("div","thpt-r4-practice-card-grid");
  for(const [role,label] of [["CORE","Core"],["SGK_PRACTICE","Luyện tập"],["SGK_APPLICATION","Vận dụng"],["SGK_WRITTEN","Tự luận"]]){
   const card=make("section","thpt-r4-practice-card");card.dataset.thptGrade="12";
   const info=make("div");
   info.append(make("p","thpt-r4-practice-card-kind",label),
    make("strong","",title+" · "+label),
    make("small","",role==="SGK_WRITTEN"?"5 câu · Rubric /5 · Tự đối chiếu":"5 câu · Một câu mỗi lần · Không ghi điểm"));
   const button=make("button","thpt-r4-practice-open","✎ Mở "+label);
   button.type="button";button.dataset.g12XpOpen=exp+"-"+role;
   button.addEventListener("click",()=>open(exp,role,0,button));
   card.append(info,button);grid.append(card);
  }
  section.append(grid);root.append(section);
 }
 const m=location.hash.match(/^#(exp0[12])-([1-5])$/i);
 if(m)open(m[1].toUpperCase(),"CORE",Number(m[2])-1);
};
const startEnd=(root,b)=>{
 root.replaceChildren();root.dataset.g12XpReady="true";
 const lookup=new Map(b.items.map(q=>[q.item_id,q]));
 const entries=b.end_references.map(p=>{
  const q=lookup.get(p.item_id),card=make("section","g12-xp-end-card");
  card.dataset.canonicalItem=q.item_id;
  const draft=make("textarea","g12-xp-end-input");draft.rows=5;draft.setAttribute("aria-label","Trả lời "+q.item_id);
  const reveal=make("section","g12-xp-end-answer");reveal.hidden=true;
  card.append(rich(make("h3","g12-xp-question-stem"),q.stem),draft,reveal);
  return {q,card,draft,reveal};
 });
 const progress=make("p","g12-xp-end-progress"),nav=make("nav","g12-xp-end-nav"),stage=make("div","g12-xp-end-stage");
 nav.setAttribute("aria-label","Chọn câu tự kiểm tra");
 const controls=make("div","g12-xp-end-controls"),prev=make("button","g12-xp-prev","← Câu trước"),
       next=make("button","g12-xp-next","Câu tiếp →"),submit=make("button","g12-xp-submit","Final Submit — Tự đối chiếu");
 prev.type=next.type=submit.type="button";submit.dataset.g12XpFinal="";
 const message=make("p","g12-xp-end-message");
 controls.append(prev,next,submit);root.append(progress,nav,stage,controls,message);
 let current=0,submitted=false;
 const show=()=>{
  stage.replaceChildren(entries[current].card);nav.replaceChildren();
  progress.textContent="Câu "+(current+1)+" / 10 · "+(submitted?"Đã nộp":"Chưa nộp");
  entries.forEach((x,i)=>{
   const button=make("button","g12-xp-jump-button"+(i===current?" is-current":""),String(i+1));button.type="button";
   button.setAttribute("aria-label","Đến câu "+(i+1));
   if(i===current)button.setAttribute("aria-current","step");
   button.addEventListener("click",()=>{current=i;show()});nav.append(button);
  });
  prev.disabled=current===0;next.disabled=current===9;math(stage);
 };
 prev.addEventListener("click",()=>{if(current>0){current--;show()}});
 next.addEventListener("click",()=>{if(current<9){current++;show()}});
 submit.addEventListener("click",()=>{
  if(submitted)return;
  const missing=entries.findIndex(x=>!x.draft.value.trim());
  if(missing>=0){message.textContent="Hãy tự làm đủ 10 câu trước Final Submit.";current=missing;show();entries[current].draft.focus();return}
  submitted=true;submit.disabled=true;
  for(const {q,draft,reveal} of entries){
   draft.disabled=true;reveal.hidden=false;
   reveal.append(make("h4","","Đối chiếu sau Final Submit"),para(q.answer));
   const review=make("a","g12-xp-return","Ôn lại Core và D6");
   review.href="../luyen-tap-trai-nghiem/#"+q.lesson_id.toLowerCase()+"-"+Number(q.item_id.slice(-2));
   reveal.append(review);
  }
  message.textContent="Đã nộp · Chỉ tự đối chiếu, không chấm điểm hay ghi Mastery.";
  show();
 });
 show();
};
const start=async()=>{
 const root=document.querySelector("[data-g12-xp-practice],[data-g12-xp-selfcheck]");
 if(!root)return;
 try{
  const r=await fetch(bankUrl,{cache:"no-cache"});
  if(!r.ok)fail("bank HTTP "+r.status);
  const bank=await r.json();verify(bank);
  if(root.hasAttribute("data-g12-xp-practice"))startPractice(root,bank);
  else startEnd(root,bank);
 }catch(error){
  root.dataset.g12XpError="true";
  root.replaceChildren(make("p","", "Chưa tải được nội dung đã duyệt, vui lòng thử tải lại trang."));
  console.error("G12 EXP RELEASE",error);
 }
};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();