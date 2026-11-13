/* G12 SGK ChV PUBLIC R01, one source, no private RD1, no mastery writes. */
(()=>{
"use strict";
const source=document.currentScript?.src||"";
const url=new URL("../data/thpt-g12-chv-b14-b17-public-r01.json",source);
const mk=(tag,cls,text)=>{
 const n=document.createElement(tag);
 if(cls)n.className=cls;
 if(text!==undefined)n.textContent=String(text);
 return n;
};
const addText=(root,input)=>{
 const text=String(input??"");
 const bare=(target,str)=>{
  let buf="";
  const flush=()=>{if(buf){target.append(document.createTextNode(buf));buf=""}};
  for(let i=0;i<str.length;i++){
   const op=str[i];
   if((op!=="^"&&op!=="_")||!/[A-Za-z0-9)\]]/.test(buf.slice(-1))
      ||(op==="_"&&!/[A-Za-z]{1,5}$/.test(buf))){buf+=op;continue}
   const starter=str[i+1];
   let parsed=null;
   if(starter==="{"||starter==="("){
    const closer=starter==="{"?"}":")";let depth=0;
    for(let j=i+1;j<str.length;j++){
     if(str[j]===starter)depth++;
     else if(str[j]===closer&&--depth===0){
      parsed={value:starter==="{"?str.slice(i+2,j):str.slice(i+1,j+1),end:j+1};break;
     }
    }
   }else{
    const m=/^[−-]?(?:[A-Za-z][A-Za-z0-9]*|\d+)/.exec(str.slice(i+1));
    if(m){const end=i+1+m[0].length;
     if(!(/^[A-Za-z]+$/.test(m[0])&&str[end]==="(")
       &&!(/^\d+$/.test(m[0])&&str[end]==="/"))parsed={value:m[0],end};
    }
   }
   if(!parsed){buf+=op;continue}
   flush();
   const script=mk(op==="^"?"sup":"sub","g12-chv-math-script",parsed.value);
   target.append(script);i=parsed.end-1;
  }
  flush();
 };
 const appendMarked=(segment)=>{
  const reg=/(?:\x60[^\x60\n]+\x60|\*\*[^*\n]+\*\*)/g;let cursor=0;
  for(const m of segment.matchAll(reg)){
   if(m.index>cursor)bare(root,segment.slice(cursor,m.index));
   const code=m[0][0]==="\x60",span=mk(code?"span":"strong",code?"g12-chv-inline-notation":"");
   bare(span,m[0].slice(code?1:2,code?-1:-2));root.append(span);
   cursor=m.index+m[0].length;
  }
  if(cursor<segment.length)bare(root,segment.slice(cursor));
 };
 let buffer="";
 const flush=()=>{if(buffer){appendMarked(buffer);buffer=""}};
 for(let i=0;i<text.length;){
  let open=null,close=null,display=false;
  if(text.startsWith("$$",i)){open="$$";close="$$";display=true}
  else if(text.startsWith("\\[",i)){open="\\[";close="\\]";display=true}
  else if(text.startsWith("\\(",i)){open="\\(";close="\\)"}
  else if(text[i]==="$"&&(i===0||text[i-1]!=="\\")){open="$";close="$"}
  if(open){
   let end=text.indexOf(close,i+open.length);
   while(end>=0&&text[end-1]==="\\")end=text.indexOf(close,end+close.length);
   if(end>i+open.length){
    const latex=text.slice(i+open.length,end);
    if(latex.trim()){
     flush();
     const el=mk(display?"div":"span",display?"g12-chv-math-display":"g12-chv-math-inline");
     el.textContent=(display?"\\[":"\\(")+latex+(display?"\\]":"\\)");
     root.append(el);i=end+close.length;continue;
    }
   }
  }
  buffer+=text[i++];
 }
 flush();
};
const paragraph=(text,cls)=>{
 const p=mk("p",cls||"g12-chv-paragraph");
 addText(p,text);return p;
};
const typeset=root=>{
 if(window.MathJax&&typeof window.MathJax.typesetPromise==="function")
  window.MathJax.typesetPromise([root]).catch(()=>{});
};



const anchor=id=>String(id).toLowerCase().replace(/[^a-z0-9-]/g,"-");
const lines=(root,s)=>{for(const line of String(s||"").split(/\n+/))if(line.trim())root.append(paragraph(line.trim()))};
const item=(q,n)=>{
 const box=mk("section","g12-chv-item");box.id=anchor(q.item_id);box.dataset.canonicalItem=q.item_id;box.dataset.outcome=q.outcome_id;
 const label=q.role==="CORE"?"Core":q.role==="SGK_WRITTEN"?"Tự luận":q.role==="SGK_APPLICATION"?"Vận dụng":"Luyện tập";
 box.append(mk("p","thpt-r4-eyebrow",label),mk("h4","","Câu "+n),paragraph(q.stem));
 const textarea=mk("textarea","g12-chv-input");textarea.rows=4;textarea.setAttribute("aria-label","Tự giải câu "+n);
 const submit=mk("button","g12-chv-submit","Nộp để tự đối chiếu");submit.type="button";
 const status=mk("p","g12-chv-feedback"),answer=mk("section","g12-chv-answer");answer.hidden=true;
 submit.addEventListener("click",()=>{
  if(submit.disabled)return;
  if(!textarea.value.trim()){status.textContent="Hãy tự làm trước khi nộp.";return}
  submit.disabled=true;textarea.disabled=true;answer.hidden=false;
  answer.append(mk("h5","","Đáp án và lời giải"));lines(answer,q.answer);lines(answer,q.solution);
  if(q.conditions){answer.append(mk("h5","","Điều kiện / giới hạn"));lines(answer,q.conditions)}
  if(q.role==="SGK_WRITTEN"){answer.append(mk("h5","","Rubric tự đối chiếu /5"));for(const rub of q.rubric||[])lines(answer,rub)}
  status.textContent="Đã nộp. Em có thể đối chiếu lời giải; hoạt động này không được tính điểm.";typeset(answer);
 });
 box.append(textarea,submit,status,answer);return box;
};
const openTarget=(root,id)=>{
 const el=document.getElementById(id);if(!el||!root.contains(el))return;
 for(let p=el;p&&p!==root;p=p.parentElement)if(p.tagName==="DETAILS")p.open=true;
 requestAnimationFrame(()=>el.scrollIntoView({block:"start"}));
};
const help=(root,bank,lesson,optional=false)=>{
 for(const [i,h]of bank.help.filter(x=>x.lesson_id===lesson&&Boolean(x.optional_after_b17)===optional).entries()){
  const d=mk("details","g12-chv-help");d.append(mk("summary","","Hướng dẫn ôn tập · phần kiến thức "+(i+1)));
  const ol=mk("ol","g12-chv-help-steps");
  for(const step of h.steps){const li=mk("li");addText(li,step);ol.append(li)}
  d.append(ol);
  const a=mk("a","g12-chv-return","Quay lại Core");a.href="#"+anchor(h.return_item);
  const b=mk("a","g12-chv-return","Luyện tập lại");b.href="#"+anchor(h.practice_item);
  d.append(a,b);root.append(d);
 }
};
const group=(bank,lesson,practice,optional=false)=>{
 const d=mk("details","g12-chv-hub-group thpt-r4-practice-card");d.dataset.thptGrade="12";d.id=optional?"b14-optional":lesson.toLowerCase()+(practice?"-practice":"-core");
 const roles=optional?["CORE","SGK_PRACTICE","SGK_APPLICATION","SGK_WRITTEN"]:(practice?["SGK_PRACTICE","SGK_APPLICATION","SGK_WRITTEN"]:["CORE"]);
 const chosen=bank.items.filter(q=>q.lesson_id===lesson&&roles.includes(q.role)&&Boolean(q.optional_after_b17)===optional);
 const summary=mk("summary","g12-chv-hub-summary");
 summary.append(mk("span","g12-chv-hub-kind",optional?"Mở rộng sau Bài 17":(practice?"Luyện tập · Vận dụng · Tự luận":"Core")),mk("strong","",optional?"Vận dụng tích hợp, không bắt buộc":(practice?"Làm bài và trình bày suy luận":"Ôn kiến thức cơ bản")),mk("span","g12-chv-hub-count",chosen.length+" câu gốc"),mk("span","g12-chv-hub-action","✎ Mở nhóm câu hỏi"));
 d.append(summary);
 const content=mk("div","g12-chv-hub-body");
 for(const [role,name]of [["CORE","Core"],["SGK_PRACTICE","Luyện tập"],["SGK_APPLICATION","Vận dụng"],["SGK_WRITTEN","Tự luận"]]){
  const list=chosen.filter(q=>q.role===role);if(!list.length)continue;
  const s=mk("section","g12-chv-stage");s.append(mk("h3","",name));
  list.forEach((q,i)=>s.append(item(q,i+1)));content.append(s);
 }
 d.append(content);d.addEventListener("toggle",()=>{if(d.open)typeset(d)});return d;
};
const startHub=(root,bank)=>{
 root.classList.add("thpt-r4-practice-sections");
 const lessonNames={"B14":"Phương trình mặt phẳng","B15":"Phương trình đường thẳng trong không gian","B16":"Công thức tính góc trong không gian","B17":"Phương trình mặt cầu"};
 for(const [i,lesson]of ["B14","B15","B16","B17"].entries()){
  const panel=mk("section","thpt-r4-practice-lesson g12-chv-hub-lesson");panel.dataset.thptGrade="12";panel.dataset.g12ChvHubLesson=lesson;
  const header=mk("div","thpt-r4-practice-lesson-header");
  const h=mk("div","");
  h.append(mk("p","thpt-r4-practice-class","Lớp 12 · Chương V"),mk("h2","",lessonNames[lesson]));
  header.append(mk("span","thpt-r4-lesson-number",i+14),h);panel.append(header);
  const cards=mk("div","thpt-r4-practice-card-grid");cards.append(group(bank,lesson,false),group(bank,lesson,true));panel.append(cards);
  const ds=mk("details","g12-chv-hub-help");ds.id=lesson.toLowerCase()+"-help";
  ds.append(mk("summary","","Khi gặp khó khăn · "+bank.help.filter(x=>x.lesson_id===lesson&&!x.optional_after_b17).length+" hướng dẫn"));
  const content=mk("div","g12-chv-hub-help-body");help(content,bank,lesson);ds.append(content);panel.append(ds);
  const link=mk("a","g12-chv-return","← Về Kiến thức Bài "+(i+14));link.href="../bai-"+(i+14)+"/";panel.append(link);root.append(panel);
 }
 // Source-locked O07 stays outside B14 Core; show only after the B17 lesson.
 const extension=mk("section","thpt-r4-practice-lesson g12-chv-hub-lesson");
 extension.dataset.thptGrade="12";
 extension.dataset.g12ChvHubLesson="B14-OPTIONAL";
 extension.append(mk("h2","","Mở rộng sau Bài 17 · Mặt phẳng và mặt cầu"));
 extension.append(paragraph("Đây là nội dung vận dụng tích hợp tự chọn, không phải Core bắt buộc của Bài 14."));
 const optionalCards=mk("div","thpt-r4-practice-card-grid");
 optionalCards.append(group(bank,"B14",true,true));extension.append(optionalCards);
 const optionalHelp=mk("details","g12-chv-hub-help");
 optionalHelp.id="b14-optional-help";
 optionalHelp.append(mk("summary","","Khi gặp khó khăn · phần mở rộng"));
 const optionalBody=mk("div","g12-chv-hub-help-body");help(optionalBody,bank,"B14",true);
 optionalHelp.append(optionalBody);extension.append(optionalHelp);
 const optionalLink=mk("a","g12-chv-return","← Xem kiến thức mở rộng sau Bài 17");
 optionalLink.href="../mo-rong-sau-bai-17/";extension.append(optionalLink);
 root.append(extension);
 const hash=()=>{const h=decodeURIComponent(location.hash.slice(1));if(h)openTarget(root,h)};
 window.addEventListener("hashchange",hash);hash();typeset(root);
};
const startSelfCheck=(root,bank)=>{
 const map=new Map(bank.items.map(q=>[q.item_id,q]));const entries=[];
 root.append(mk("h3","","23 câu chính và 1 câu mở rộng · Tự kiểm tra cuối chương"));
 root.append(paragraph("23 câu vận dụng chính cần làm trước Final Submit. Câu thứ 24 là phần mở rộng mặt phẳng–mặt cầu sau Bài 17: có thể tự chọn làm, không chặn nộp bài. Câu hỏi đã gặp khi học, chỉ tự đối chiếu, không phải bài đánh giá độc lập hay chấm điểm."));
 const progress=mk("p","g12-chv-quiz-progress"),nav=mk("nav","g12-chv-quiz-nav");
 nav.setAttribute("aria-label","Chọn câu hỏi tự kiểm tra");
 root.append(progress,nav);let cursor=0,submitted=false;
 const orderedRefs=bank.end_references.slice().sort((a,b)=>Number(Boolean(map.get(a.item_id)?.optional_after_b17))-Number(Boolean(map.get(b.item_id)?.optional_after_b17)));
 for(const [i,ref]of orderedRefs.entries()){
  const q=map.get(ref.item_id);
  if(!q||q.role!=="SGK_APPLICATION"||q.outcome_id!==ref.outcome_id)throw Error("END reference invalid "+ref.placement_id);
  const box=mk("section","g12-chv-item g12-chv-selfcheck-item");box.dataset.canonicalItem=q.item_id;
  box.dataset.optional=q.optional_after_b17?"true":"false";
  const input=mk("textarea","g12-chv-input");input.rows=4;input.setAttribute("aria-label","Trả lời câu "+(i+1));
  const result=mk("section","g12-chv-answer");result.hidden=true;
  box.append(mk("h4","","Câu "+(i+1)+" / 24"+(q.optional_after_b17?" · Tự chọn, không bắt buộc":"")),paragraph(q.stem),input,result);
  root.append(box);entries.push({card:box,q,input,result});
 }
 
 const jumpButtons=entries.map((_,i)=>{
  const button=mk("button","g12-chv-quiz-jump",String(i+1));button.type="button";
  button.dataset.g12ChvJump=String(i);button.setAttribute("aria-label","Đến câu "+(i+1));
  nav.append(button);return button;
 });
 const prev=mk("button","g12-chv-quiz-step","Câu trước"),next=mk("button","g12-chv-quiz-step","Câu tiếp");
 prev.type=next.type="button";
 const showQuestion=()=>{
  entries.forEach(({card},i)=>{card.hidden=i!==cursor});
  jumpButtons.forEach((button,i)=>{
   button.classList.toggle("is-current",cursor===i);
   if(cursor===i)button.setAttribute("aria-current","step");else button.removeAttribute("aria-current");
  });
  progress.textContent="Câu "+(cursor+1)+" / "+entries.length+(submitted?" · Đã nộp":" · Chưa nộp");
  prev.disabled=cursor===0;next.disabled=cursor===entries.length-1;
  typeset(entries[cursor].card);
 };
 jumpButtons.forEach((button,i)=>button.addEventListener("click",()=>{cursor=i;showQuestion()}));
 prev.addEventListener("click",()=>{if(cursor>0){cursor--;showQuestion()}});
 next.addEventListener("click",()=>{if(cursor<entries.length-1){cursor++;showQuestion()}});
const submit=mk("button","g12-chv-submit g12-chv-final","Final Submit — Tự đối chiếu");submit.type="button";submit.dataset.g12ChvFinal="";
 const status=mk("p","g12-chv-feedback");
 submit.addEventListener("click",()=>{
  if(submit.disabled)return;
  const missing=entries.filter(x=>!x.q.optional_after_b17&&!x.input.value.trim()).length;
  if(missing){status.textContent="Còn "+missing+" câu chính chưa làm. Câu mở rộng tự chọn không bắt buộc.";cursor=entries.findIndex(x=>!x.q.optional_after_b17&&!x.input.value.trim());showQuestion();return}
  submit.disabled=true;submitted=true;
  for(const {q,input,result}of entries){
   input.disabled=true;result.hidden=false;
   result.append(mk("h5","","Đối chiếu sau Final Submit"));lines(result,q.answer);lines(result,q.solution);
   const h=bank.help.find(x=>x.outcome_id===q.outcome_id);
   if(h){result.append(paragraph("Nếu chưa đúng, hãy xem lại phần kiến thức tương ứng."));
    const a=mk("a","g12-chv-return","Quay lại Core và hướng dẫn D6");a.href="../luyen-tap/#"+(q.optional_after_b17?"b14-optional":anchor(h.return_item));result.append(a)}
  }
  status.textContent="Đã nộp bài. Bây giờ em có thể tự đối chiếu lời giải; kết quả không ghi vào hồ sơ đánh giá.";showQuestion();typeset(root);
 });
 const controls=mk("div","g12-chv-quiz-controls");controls.append(prev,next,submit);
 root.append(controls,status);showQuestion();typeset(root);
};
const start=async()=>{
 const root=document.querySelector("[data-g12-chv-hub], [data-g12-chv-selfcheck]");
 if(!root)return;
 try{
  const response=await fetch(url,{cache:"no-cache"});if(!response.ok)throw Error("Public bank HTTP "+response.status);
  const bank=await response.json();
  const roles=["CORE","SGK_PRACTICE","SGK_APPLICATION","SGK_WRITTEN"];
  if(bank.packet_id!=="G12-SGK-CHV-B14-B17-R01"||bank.mode!=="CLIENT_SELF_CHECK_NO_MASTERY"||
   bank.source_blob!=="11eb2834cfdb4a24685157f84666c2bb0767970a"||
   bank.receipt_blob!=="a07070119259bd0133535fc3250d008cd78d8195"||
   bank.items.length!==96||new Set(bank.items.map(q=>q.item_id)).size!==96||
   bank.help.length!==24||bank.end_references.length!==24||
   roles.some(role=>bank.items.filter(q=>q.role===role).length!==24)||
   new Set(bank.end_references.map(r=>r.item_id)).size!==24||
   bank.items.filter(q=>q.optional_after_b17).length!==4||
   bank.help.filter(h=>h.optional_after_b17).length!==1||
   bank.end_references.filter(r=>bank.items.find(q=>q.item_id===r.item_id)?.optional_after_b17).length!==1)throw Error("Canonical bank/source receipt mismatch");
  root.replaceChildren();
  if(root.hasAttribute("data-g12-chv-hub")){
   startHub(root,bank);
   // The same source-locked one-question Golden adapter as G12 ChI-IV.
   // Fail closed if the approved shared module has not been included.
   if(!window.THPT_G12_GOLDEN_HUB?.mount(root,bank,{chapter:"V"}))throw Error("G12 Golden V unavailable");
  }else startSelfCheck(root,bank);
  root.dataset.g12ChvReady="true";
 }catch(e){
  root.dataset.g12ChvError="true";
  root.replaceChildren(paragraph("Không tải được học liệu gốc đã kiểm duyệt. Hãy thử tải lại trang.","g12-chv-error"));
  console.error("G12 ChV RELEASE",e);
 }
};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();
