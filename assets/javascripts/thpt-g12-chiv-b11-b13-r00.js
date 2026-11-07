/* G12 SGK ChIV PUBLIC R00, one source, no private RD1, no mastery writes. */
(()=>{
"use strict";
const source=document.currentScript?.src||"";
const url=new URL("../data/thpt-g12-chiv-b11-b13-public-r00.json",source);
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
   const script=mk(op==="^"?"sup":"sub","g12-chiv-math-script",parsed.value);
   target.append(script);i=parsed.end-1;
  }
  flush();
 };
 const appendMarked=(segment)=>{
  const reg=/(?:\x60[^\x60\n]+\x60|\*\*[^*\n]+\*\*)/g;let cursor=0;
  for(const m of segment.matchAll(reg)){
   if(m.index>cursor)bare(root,segment.slice(cursor,m.index));
   const code=m[0][0]==="\x60",span=mk(code?"span":"strong",code?"g12-chiv-inline-notation":"");
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
     const el=mk(display?"div":"span",display?"g12-chiv-math-display":"g12-chiv-math-inline");
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
 const p=mk("p",cls||"g12-chiv-paragraph");
 addText(p,text);return p;
};
const typeset=root=>{
 if(window.MathJax&&typeof window.MathJax.typesetPromise==="function")
  window.MathJax.typesetPromise([root]).catch(()=>{});
};



const anchor=id=>String(id).toLowerCase().replace(/[^a-z0-9-]/g,"-");
const lines=(root,s)=>{for(const line of String(s||"").split(/\n+/))if(line.trim())root.append(paragraph(line.trim()))};
const item=(q,n)=>{
 const box=mk("section","g12-chiv-item");box.id=anchor(q.item_id);box.dataset.canonicalItem=q.item_id;box.dataset.outcome=q.outcome_id;
 const label=q.role==="CORE"?"Core":q.role==="SGK_WRITTEN"?"Tự luận":q.role==="SGK_APPLICATION"?"Vận dụng":"Luyện tập";
 box.append(mk("p","thpt-r4-eyebrow",label),mk("h4","","Câu "+n),paragraph(q.stem));
 const textarea=mk("textarea","g12-chiv-input");textarea.rows=4;textarea.setAttribute("aria-label","Tự giải câu "+n);
 const submit=mk("button","g12-chiv-submit","Nộp để tự đối chiếu");submit.type="button";
 const status=mk("p","g12-chiv-feedback"),answer=mk("section","g12-chiv-answer");answer.hidden=true;
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
const help=(root,bank,lesson)=>{
 for(const [i,h]of bank.help.filter(x=>x.lesson_id===lesson).entries()){
  const d=mk("details","g12-chiv-help");d.append(mk("summary","","Hướng dẫn ôn tập · phần kiến thức "+(i+1)));
  const ol=mk("ol","g12-chiv-help-steps");
  for(const step of h.steps){const li=mk("li");addText(li,step);ol.append(li)}
  d.append(ol);
  const a=mk("a","g12-chiv-return","Quay lại Core");a.href="#"+anchor(h.return_item);
  const b=mk("a","g12-chiv-return","Luyện tập lại");b.href="#"+anchor(h.practice_item);
  d.append(a,b);root.append(d);
 }
};
const group=(bank,lesson,practice)=>{
 const d=mk("details","g12-chiv-hub-group thpt-r4-practice-card");d.dataset.thptGrade="12";d.id=lesson.toLowerCase()+(practice?"-practice":"-core");
 const roles=practice?["SGK_PRACTICE","SGK_APPLICATION","SGK_WRITTEN"]:["CORE"];
 const chosen=bank.items.filter(q=>q.lesson_id===lesson&&roles.includes(q.role));
 const summary=mk("summary","g12-chiv-hub-summary");
 summary.append(mk("span","g12-chiv-hub-kind",practice?"Luyện tập · Vận dụng · Tự luận":"Core"),mk("strong","",practice?"Làm bài và trình bày suy luận":"Ôn kiến thức cơ bản"),mk("span","g12-chiv-hub-count",chosen.length+" câu gốc"),mk("span","g12-chiv-hub-action","✎ Mở nhóm câu hỏi"));
 d.append(summary);
 const content=mk("div","g12-chiv-hub-body");
 for(const [role,name]of [["CORE","Core"],["SGK_PRACTICE","Luyện tập"],["SGK_APPLICATION","Vận dụng"],["SGK_WRITTEN","Tự luận"]]){
  const list=chosen.filter(q=>q.role===role);if(!list.length)continue;
  const s=mk("section","g12-chiv-stage");s.append(mk("h3","",name));
  list.forEach((q,i)=>s.append(item(q,i+1)));content.append(s);
 }
 d.append(content);d.addEventListener("toggle",()=>{if(d.open)typeset(d)});return d;
};
const startHub=(root,bank)=>{
 root.classList.add("thpt-r4-practice-sections");
 const lessonNames={"B11":"Nguyên hàm","B12":"Tích phân","B13":"Ứng dụng của tích phân"};
 for(const [i,lesson]of ["B11","B12","B13"].entries()){
  const panel=mk("section","thpt-r4-practice-lesson g12-chiv-hub-lesson");panel.dataset.thptGrade="12";panel.dataset.g12ChivHubLesson=lesson;
  const header=mk("div","thpt-r4-practice-lesson-header");
  const h=mk("div","");
  h.append(mk("p","thpt-r4-practice-class","Lớp 12 · Chương IV"),mk("h2","",lessonNames[lesson]));
  header.append(mk("span","thpt-r4-lesson-number",i+11),h);panel.append(header);
  const cards=mk("div","thpt-r4-practice-card-grid");cards.append(group(bank,lesson,false),group(bank,lesson,true));panel.append(cards);
  const ds=mk("details","g12-chiv-hub-help");ds.id=lesson.toLowerCase()+"-help";
  ds.append(mk("summary","","Khi gặp khó khăn · "+bank.help.filter(x=>x.lesson_id===lesson).length+" hướng dẫn"));
  const content=mk("div","g12-chiv-hub-help-body");help(content,bank,lesson);ds.append(content);panel.append(ds);
  const link=mk("a","g12-chiv-return","← Về Kiến thức Bài "+(i+11));link.href="../bai-"+(i+11)+"/";panel.append(link);root.append(panel);
 }
 const hash=()=>{const h=decodeURIComponent(location.hash.slice(1));if(h)openTarget(root,h)};
 window.addEventListener("hashchange",hash);hash();typeset(root);
};
const startSelfCheck=(root,bank)=>{
 const map=new Map(bank.items.map(q=>[q.item_id,q]));const entries=[];
 root.append(mk("h3","","22 câu · Tự kiểm tra cuối chương"));
 root.append(paragraph("Đây là những câu Vận dụng đã gặp khi học. Hãy làm đủ 22 câu rồi chọn Final Submit để tự đối chiếu. Hoạt động này không phải bài đánh giá độc lập hoặc chấm điểm."));
 const progress=mk("p","g12-chiv-quiz-progress"),nav=mk("nav","g12-chiv-quiz-nav");
 nav.setAttribute("aria-label","Chọn câu hỏi tự kiểm tra");
 root.append(progress,nav);let cursor=0,submitted=false;
 for(const [i,ref]of bank.end_references.entries()){
  const q=map.get(ref.item_id);
  if(!q||q.role!=="SGK_APPLICATION"||q.outcome_id!==ref.outcome_id)throw Error("END reference invalid "+ref.placement_id);
  const box=mk("section","g12-chiv-item g12-chiv-selfcheck-item");box.dataset.canonicalItem=q.item_id;
  const input=mk("textarea","g12-chiv-input");input.rows=4;input.setAttribute("aria-label","Trả lời câu "+(i+1));
  const result=mk("section","g12-chiv-answer");result.hidden=true;
  box.append(mk("h4","","Câu "+(i+1)+" / 22"),paragraph(q.stem),input,result);
  root.append(box);entries.push({card:box,q,input,result});
 }
 
 const jumpButtons=entries.map((_,i)=>{
  const button=mk("button","g12-chiv-quiz-jump",String(i+1));button.type="button";
  button.dataset.g12ChivJump=String(i);button.setAttribute("aria-label","Đến câu "+(i+1));
  nav.append(button);return button;
 });
 const prev=mk("button","g12-chiv-quiz-step","Câu trước"),next=mk("button","g12-chiv-quiz-step","Câu tiếp");
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
const submit=mk("button","g12-chiv-submit g12-chiv-final","Final Submit — Tự đối chiếu");submit.type="button";submit.dataset.g12ChivFinal="";
 const status=mk("p","g12-chiv-feedback");
 submit.addEventListener("click",()=>{
  if(submit.disabled)return;
  const missing=entries.filter(x=>!x.input.value.trim()).length;
  if(missing){status.textContent="Còn "+missing+" câu chưa làm. Hãy hoàn thành trước Final Submit.";cursor=entries.findIndex(x=>!x.input.value.trim());showQuestion();return}
  submit.disabled=true;submitted=true;
  for(const {q,input,result}of entries){
   input.disabled=true;result.hidden=false;
   result.append(mk("h5","","Đối chiếu sau Final Submit"));lines(result,q.answer);lines(result,q.solution);
   const h=bank.help.find(x=>x.outcome_id===q.outcome_id);
   if(h){result.append(paragraph("Nếu chưa đúng, hãy xem lại phần kiến thức tương ứng."));
    const a=mk("a","g12-chiv-return","Quay lại Core và hướng dẫn D6");a.href="../luyen-tap/#"+anchor(h.return_item);result.append(a)}
  }
  status.textContent="Đã nộp bài. Bây giờ em có thể tự đối chiếu lời giải; kết quả không ghi vào hồ sơ đánh giá.";showQuestion();typeset(root);
 });
 const controls=mk("div","g12-chiv-quiz-controls");controls.append(prev,next,submit);
 root.append(controls,status);showQuestion();typeset(root);
};
const start=async()=>{
 const root=document.querySelector("[data-g12-chiv-hub], [data-g12-chiv-selfcheck]");
 if(!root)return;
 try{
  const response=await fetch(url,{cache:"no-cache"});if(!response.ok)throw Error("Public bank HTTP "+response.status);
  const bank=await response.json();
  const roles=["CORE","SGK_PRACTICE","SGK_APPLICATION","SGK_WRITTEN"];
  if(bank.packet_id!=="G12-SGK-CHIV-B11-B13-R00"||bank.mode!=="CLIENT_SELF_CHECK_NO_MASTERY"||
   bank.source_blob!=="45722cd386a498f3e0e96a09928c85565af56d1b"||
   bank.receipt_blob!=="feabeeeef262e7f6b28c898cdf77e6aa4194da24"||
   bank.items.length!==88||new Set(bank.items.map(q=>q.item_id)).size!==88||
   bank.help.length!==22||bank.end_references.length!==22||
   roles.some(role=>bank.items.filter(q=>q.role===role).length!==22)||
   new Set(bank.end_references.map(r=>r.item_id)).size!==22)throw Error("Canonical bank/source receipt mismatch");
  root.replaceChildren();
  if(root.hasAttribute("data-g12-chiv-hub")){startHub(root,bank);if(!window.THPT_G12_GOLDEN_HUB?.mount(root,bank,{chapter:"IV"}))throw Error("Golden R4 modal unavailable");}else startSelfCheck(root,bank);
  root.dataset.g12ChivReady="true";
 }catch(e){
  root.dataset.g12ChivError="true";
  root.replaceChildren(paragraph("Không tải được học liệu gốc đã kiểm duyệt. Hãy thử tải lại trang.","g12-chiv-error"));
  console.error("G12 ChIV RELEASE",e);
 }
};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();
