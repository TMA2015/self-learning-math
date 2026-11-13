/* G12 SGK year-end R00: original 31 PUBLIC canonical items, client-only Final Submit.
 * No independent RD1, official Readiness, Mastery, learner storage or Gemini on this route. */
(()=>{"use strict";
const src=document.currentScript?.src||"";
const bankUrl=new URL("../data/thpt-g12-yearend-public-r00.json",src);
const make=(tag,cls,txt)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(txt!==undefined)e.textContent=String(txt);return e};
const rich=(root,txt)=>{
 const parts=String(txt||"").split(/(\$[^$\n]+\$|\x60[^\x60]+\x60|\*\*[^*]+\*\*)/g);
 for(const part of parts){
  if(!part)continue;
  if(part.startsWith("$")&&part.endsWith("$"))root.append(make("span","arithmatex","\\("+part.slice(1,-1)+"\\)"));
  else if(part.startsWith("\x60")&&part.endsWith("\x60"))root.append(make("code","",part.slice(1,-1)));
  else if(part.startsWith("**")&&part.endsWith("**"))root.append(make("strong","",part.slice(2,-2)));
  else root.append(document.createTextNode(part));
 }return root;
};
const paragraphs=(root,txt)=>{
 for(const line of String(txt||"").split("\n").map(x=>x.trim()).filter(Boolean)){
  root.append(rich(make("p","g12-xp-paragraph"),line.replace(/^\d+\.\s*/,"").replace(/^-\s*/,"")));
 }return root;
};
const math=root=>{if(root.isConnected&&window.MathJax?.typesetPromise)window.MathJax.typesetPromise([root]).catch(()=>{})};
const fail=msg=>{throw Error("G12 YEAR-END SOURCE_LOCK: "+msg)};
const verify=b=>{
 if(b?.packet_id!=="G12-SGK-YEAREND-REVIEW-R00"||
 b.source_git_blob!=="7274cb3a6c35627f0e23574709cf5cdc355ab46a"||
 b.review_receipt_blob!=="3b5b7f70e3b68895fd976a265ae6f454f774e1cc"||
 b.learning_path!=="SGK_YEAR_END_REVIEW_SUPPLEMENT"||
 b.mode!=="CLIENT_SELF_CHECK_NO_MASTERY"||b.private_rd1_count!==0||
 b.official_readiness!==false||b.mastery_activation!==false)fail("provenance");
 if(b.stations?.length!==6||b.help?.length!==6||b.items?.length!==31||
 new Set(b.items.map(x=>x.item_id)).size!==31||
 b.items.filter(x=>x.role==="WRITTEN").length!==16||
 b.items.filter(x=>x.item_id.startsWith("THPT-G12-YE-M")).length!==15)fail("counts");
 const outcomes=new Set(b.stations.map(x=>x.outcome_id));
 for(const q of b.items){
  if(!outcomes.has(q.outcome_id)||!/^THPT-G12-YE-[MW]\d\d$/.test(q.item_id)||
   !q.stem||!q.solution||
   (q.role==="WRITTEN"?!q.rubric:q.options?.length!==4||!/^[ABCD]\.$/.test(q.answer?.trim())))fail("item "+q.item_id);
 }
 for(const h of b.help)if(!outcomes.has(h.outcome_id)||!h.text)fail("D6 "+h.help_id);
};
/* PUBLIC formative bank: same canonical item_id in a different placement.
 * Exactly the same Golden R4 lesson/card/buttons as regular Grade 12 chapters. */
const startPractice=(root,b)=>{
 const golden=window.THPT_GOLDEN_RUNTIME;if(!golden)throw Error("GOLDEN_RUNTIME_MISSING: G12 YEAR");
 const options=[
  ["MCQ_CORE","Core"],["MCQ_PRACTICE","Luyện tập"],
  ["MCQ_APPLICATION","Vận dụng"],["WRITTEN","Tự luận"]];
 const drafts=new Map(),revealed=new Set();
 const dialog=make("dialog","thpt-r4-practice-dialog g12-xp-dialog g12-ye-dialog");
 const head=make("header","thpt-r4-modal-heading g12-xp-modal-head");
 const title=make("h2"),counter=make("p","g12-xp-counter"),close=make("button","g12-xp-close","Đóng ×");
 close.type="button";head.append(counter,title,close);
 const jump=make("nav","g12-xp-jump"),stage=make("div","g12-xp-stage");
 const foot=make("div","g12-xp-foot"),prev=make("button","g12-xp-prev","← Câu trước"),
       next=make("button","g12-xp-next","Câu tiếp →");
 prev.type=next.type="button";foot.append(prev,next);
 dialog.append(head,jump,stage,foot);document.body.append(dialog);
 const lifecycle=golden.bindDialog({dialog,closeButton:close});
 let current=0,role="",group=[];
 const show=()=>{
  const q=group[current];
  title.textContent="Ôn tập cuối năm · "+options.find(x=>x[0]===role)[1];
  counter.textContent="Câu "+(current+1)+" / "+group.length+" · Tự luyện, không ghi điểm";
  golden.renderNav({container:jump,count:group.length,index:current,onSelect:i=>{current=i;show()},
   buttonClass:"g12-xp-jump-button",activeClass:"is-current",label:i=>String(i+1),ariaCurrent:"step",allAriaCurrent:false});
  stage.replaceChildren();
  const card=make("section","g12-xp-modal-question");
  card.dataset.thptCanonicalItem=q.item_id;
  card.append(rich(make("h3","g12-xp-question-stem"),q.stem));
  let selected=null;
  const inputs=make("div");
  if(q.role==="WRITTEN"){
   selected=make("textarea","g12-xp-input");selected.rows=6;
   selected.setAttribute("aria-label","Lời giải tự luận "+q.item_id);
   selected.value=drafts.get(q.item_id)||"";
   selected.addEventListener("input",()=>drafts.set(q.item_id,selected.value));
   inputs.append(make("label","g12-xp-label","Trình bày cách giải của em"),selected);
  }else{
   inputs.className="g12-ye-options";
   for(const opt of q.options){
    const row=make("label","g12-ye-option"),radio=make("input");
    radio.type="radio";radio.name="g12-ye-formative-choice";radio.value=opt.letter;
    radio.checked=drafts.get(q.item_id)===opt.letter;
    radio.addEventListener("change",()=>drafts.set(q.item_id,opt.letter));
    row.append(radio,rich(make("span"),opt.letter+". "+opt.text));inputs.append(row);
   }
  }
  const submit=make("button","g12-xp-submit","Nộp và đối chiếu lời giải");submit.type="button";
  const status=make("p","g12-xp-end-message"),reveal=make("section","g12-xp-reveal");
  const showReveal=()=>{
   reveal.replaceChildren(make("h4","","Đối chiếu sau khi tự làm"));
   if(q.answer)reveal.append(rich(make("p"),"Đáp án: "+q.answer));
   reveal.append(make("h4","","Lời giải mẫu"),paragraphs(make("div"),q.solution));
   if(q.rubric)reveal.append(make("h4","","Rubric tự đối chiếu /5"),paragraphs(make("div"),q.rubric));
   if(q.trap)reveal.append(make("h4","","Lỗi thường gặp"),rich(make("p"),q.trap));
   submit.disabled=true;submit.textContent="Đã mở đối chiếu";math(reveal);
  };
  submit.addEventListener("click",()=>{
   const value=String(drafts.get(q.item_id)||"").trim();
   if(!value){status.textContent="Hãy tự làm câu này trước khi mở lời giải.";return}
   revealed.add(q.item_id);showReveal();
  });
  if(revealed.has(q.item_id))showReveal();
  card.append(inputs,submit,status,reveal);
  stage.append(card);prev.disabled=current===0;next.disabled=current===group.length-1;math(stage);
 };
 golden.bindPager({prev,next,getIndex:()=>current,getCount:()=>group.length,go:i=>{current=i;show()}});
 const open=(r,trigger=null)=>{
  role=r;group=b.items.filter(q=>q.role===role);
  if(!group.length)fail("Empty formative category "+role);
  current=0;show();lifecycle.open(trigger);
 };
 root.replaceChildren();root.dataset.g12YePracticeReady="true";
 const lesson=make("section","thpt-r4-practice-lesson g12-ye-formative-lesson");
 lesson.dataset.thptGrade="12";
 const header=make("div","thpt-r4-practice-lesson-header"),copy=make("div");
 copy.append(make("p","thpt-r4-practice-class","Lớp 12 · Bài tập ôn tập cuối năm"),
             make("h2","","Sáu trạm ôn tập · Core, Luyện tập, Vận dụng và Tự luận"));
 header.append(make("span","thpt-r4-lesson-number","YE"),copy);lesson.append(header);
 const grid=make("div","thpt-r4-practice-card-grid");
 for(const [name,label]of options){
  const all=b.items.filter(q=>q.role===name);
  const card=make("section","thpt-r4-practice-card");card.dataset.thptGrade="12";
  const info=make("div");
  info.append(make("p","thpt-r4-practice-card-kind",label),
    make("strong","","Ôn tập cuối năm · "+label),
    make("small","",all.length+" câu · "+(name==="WRITTEN"?"Rubric /5":"Trắc nghiệm")+" · Một câu mỗi lần"));
  const button=make("button","thpt-r4-practice-open","✎ Mở "+label);
  button.type="button";button.dataset.g12YeOpen=name;
  button.addEventListener("click",()=>open(name,button));
  card.append(info,button);grid.append(card);
 }
 lesson.append(grid);root.append(lesson);
};
const run=(root,b)=>{
 const items=b.items,drafts=new Map();let current=0,submitted=false;
 root.replaceChildren();root.dataset.g12YeReady="true";
 const progress=make("p","g12-xp-end-progress"),
       nav=make("nav","g12-xp-end-nav g12-ye-end-nav"),
       stage=make("section","g12-xp-end-stage"),
       controls=make("div","g12-xp-end-controls"),
       prev=make("button","g12-xp-prev","← Câu trước"),
       next=make("button","g12-xp-next","Câu tiếp →"),
       submit=make("button","g12-xp-submit","Final Submit — Tự đối chiếu"),
       message=make("p","g12-xp-end-message");
 nav.setAttribute("aria-label","Chọn một câu ôn tập cuối năm");
 prev.type=next.type=submit.type="button";submit.dataset.g12YeFinal="";
 controls.append(prev,next,submit);root.append(progress,nav,stage,controls,message);
 const render=()=>{
  nav.replaceChildren();stage.replaceChildren();
  const q=items[current];
  progress.textContent="Câu "+(current+1)+" / 31 · "+(q.role==="WRITTEN"?"Tự luận /5":"Trắc nghiệm")+" · "+(submitted?"Đã nộp":"Chưa nộp");
  items.forEach((item,i)=>{
   const bt=make("button","g12-xp-jump-button"+(i===current?" is-current":"")+(drafts.has(item.item_id)?" g12-ye-answered":""),String(i+1));
   bt.type="button";bt.setAttribute("aria-label","Chọn câu "+(i+1));
   if(i===current)bt.setAttribute("aria-current","step");
   bt.addEventListener("click",()=>{current=i;render()});nav.append(bt);
  });
  const card=make("section","g12-xp-end-card g12-ye-question");
  card.dataset.g12YeItem=q.item_id;
  card.append(make("p","g12-xp-question-number","Câu "+(current+1)+" · "+(q.role==="WRITTEN"?"Tự luận":"Trắc nghiệm")));
  card.append(rich(make("h3","g12-xp-question-stem"),q.stem));
  if(q.role==="WRITTEN"){
   const input=make("textarea","g12-xp-end-input");
   input.rows=7;input.setAttribute("aria-label","Lời giải câu "+(current+1));
   input.value=drafts.get(q.item_id)||"";input.disabled=submitted;
   input.addEventListener("input",()=>drafts.set(q.item_id,input.value));
   card.append(make("label","g12-xp-label","Lời giải của em"),input);
  }else{
   const box=make("div","g12-ye-options");
   for(const o of q.options){
    const label=make("label","g12-ye-option"),radio=make("input");
    radio.type="radio";radio.name="g12-ye-choice";radio.value=o.letter;radio.disabled=submitted;
    radio.checked=drafts.get(q.item_id)===o.letter;
    radio.addEventListener("change",()=>drafts.set(q.item_id,o.letter));
    label.append(radio,rich(make("span"),o.letter+". "+o.text));box.append(label);
   }card.append(box);
  }
  if(submitted){
   const reveal=make("section","g12-xp-end-answer g12-ye-reveal");
   reveal.append(make("h4","","Đối chiếu sau Final Submit"));
   if(q.answer)reveal.append(rich(make("p"),"Đáp án: "+q.answer));
   reveal.append(make("h4","","Lời giải mẫu"),paragraphs(make("div"),q.solution));
   if(q.rubric)reveal.append(make("h4","","Rubric tự đối chiếu /5"),paragraphs(make("div"),q.rubric));
   if(q.trap)reveal.append(make("h4","","Lỗi dễ gặp"),rich(make("p"),q.trap));
   const link=make("a","g12-xp-return","Ôn kiến thức và D6 trạm "+Number(q.outcome_id.slice(-2)));
   link.href="../tram-on-tap/#tram-"+q.outcome_id.slice(-2);reveal.append(link);card.append(reveal);
  }
  stage.append(card);prev.disabled=current===0;next.disabled=current===items.length-1;math(stage);
 };
 prev.addEventListener("click",()=>{if(current>0){current--;render()}});
 next.addEventListener("click",()=>{if(current<items.length-1){current++;render()}});
 submit.addEventListener("click",()=>{
  if(submitted)return;
  const missing=items.findIndex(item=>!String(drafts.get(item.item_id)||"").trim());
  if(missing>=0){current=missing;message.textContent="Hãy tự làm đủ 31 câu (15 trắc nghiệm, 16 tự luận) trước Final Submit.";render();return}
  submitted=true;submit.disabled=true;
  message.textContent="Đã Final Submit · Chỉ tự đối chiếu. Không chấm chính thức hoặc ghi Mastery/tiến độ.";
  render();
 });
 render();
};
const start=async()=>{
 const root=document.querySelector("[data-g12-ye-practice],[data-g12-ye-selfcheck]");if(!root)return;
 try{
  const res=await fetch(bankUrl,{cache:"no-cache"});if(!res.ok)fail("bank HTTP "+res.status);
  const bank=await res.json();verify(bank);
  if(root.hasAttribute("data-g12-ye-practice"))startPractice(root,bank);else run(root,bank);
 }catch(error){
  root.dataset.g12YeError="true";
  root.replaceChildren(make("p","","Không tải được 31 câu đã duyệt, vui lòng thử tải lại."));
  console.error("G12 YEAR_END RELEASE",error);
 }
};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();