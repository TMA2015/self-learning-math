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
 const root=document.querySelector("[data-g12-ye-selfcheck]");if(!root)return;
 try{
  const res=await fetch(bankUrl,{cache:"no-cache"});if(!res.ok)fail("bank HTTP "+res.status);
  const bank=await res.json();verify(bank);run(root,bank);
 }catch(error){
  root.dataset.g12YeError="true";
  root.replaceChildren(make("p","","Không tải được 31 câu đã duyệt, vui lòng thử tải lại."));
  console.error("G12 YEAR_END RELEASE",error);
 }
};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();