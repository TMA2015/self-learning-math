/* G12 SGK ChII R00 · Original 64 PUBLIC canonical items and 16 chapter-end
 * references, one source bank, no new test IDs. No private RD1.
 * Answers/rubrics/HELP are appended only after formative Submit or Final Submit.
 */
(()=>{
"use strict";
const source=document.currentScript?.src||"";
const url=new URL("../data/thpt-g12-chii-b06-b08-public-r00.json",source);
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
   const script=mk(op==="^"?"sup":"sub","g12-chii-math-script",parsed.value);
   target.append(script);i=parsed.end-1;
  }
  flush();
 };
 const appendMarked=(segment)=>{
  const reg=/(?:\x60[^\x60\n]+\x60|\*\*[^*\n]+\*\*)/g;let cursor=0;
  for(const m of segment.matchAll(reg)){
   if(m.index>cursor)bare(root,segment.slice(cursor,m.index));
   const code=m[0][0]==="\x60",span=mk(code?"span":"strong",code?"g12-chii-inline-notation":"");
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
     const el=mk(display?"div":"span",display?"g12-chii-math-display":"g12-chii-math-inline");
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
 const p=mk("p",cls||"g12-chii-paragraph");
 addText(p,text);return p;
};
const typeset=root=>{
 if(window.MathJax&&typeof window.MathJax.typesetPromise==="function")
  window.MathJax.typesetPromise([root]).catch(()=>{});
};


const anchor=id=>id.toLowerCase().replace(/[^a-z0-9-]/g,"-");
const showLines=(root,text)=>{
 for(const line of String(text||"").split(/\n+/))if(line.trim())root.append(paragraph(line.trim()));
};
const itemCard=(q,i)=>{
 const c=mk("section","g12-chii-item");c.id=anchor(q.item_id);
 c.dataset.canonicalItem=q.item_id;c.dataset.outcome=q.outcome_id;
 const written=q.role==="WRITTEN",title=written?"Tự luận":q.role==="CORE"?"Core":"Luyện tập";
 c.append(mk("p","thpt-r4-eyebrow",title),mk("h4","","Câu "+i),paragraph(q.stem));
 const input=mk("textarea","g12-chii-input");input.rows=4;input.setAttribute("aria-label","Câu "+i+" · Viết lời giải của em");
 const submit=mk("button","g12-chii-submit","Nộp câu trả lời");submit.type="button";
 const status=mk("p","g12-chii-feedback"),result=mk("section","g12-chii-answer");result.hidden=true;
 submit.addEventListener("click",()=>{
  if(submit.disabled)return;
  if(!input.value.trim()){status.textContent="Hãy tự làm trước khi nộp.";return}
  input.disabled=true;submit.disabled=true;result.hidden=false;
  result.append(mk("h5","","Lời giải để tự đối chiếu"));
  showLines(result,q.answer);
  showLines(result,q.solution);
  if(written){result.append(mk("h5","","Tiêu chí tự đối chiếu bài tự luận · thang 5 điểm"));showLines(result,q.rubric)}
  status.textContent="Đã nộp. Hãy đối chiếu từng bước, không có chấm điểm tự động.";
  typeset(result);
 });
 c.append(input,submit,status,result);return c;
};
const helpers=(root,bank,lesson)=>{
 const items=bank.help.filter(x=>x.lesson_id===lesson);
 if(!items.length)return;
 root.append(mk("h3","","Khi gặp khó khăn · Hướng dẫn ôn lại"));
 root.append(paragraph("Mở gợi ý cùng outcome, xem lại kiến thức và ví dụ gốc, rồi quay lại đúng câu đã học."));
 items.forEach((h,i)=>{
  const details=mk("details","g12-chii-help"),summary=mk("summary","","Gợi ý "+(i+1)+" · Ôn lại phương pháp");
  details.append(summary,paragraph("Ôn lại "+h.review_path+" của bài này; so sánh cách suy luận trước khi làm tiếp."));
  const back=mk("a","g12-chii-return","Quay lại câu Core cùng nội dung");back.href="#"+anchor(h.return_item);
  const practice=mk("a","g12-chii-return","Thử lại câu Luyện tập");practice.href="#"+anchor(h.practice_item);
  details.append(back,practice);root.append(details);
 });
};
/* Use one chapter-level Core and Practice hub per owner-approved G10/G11 page architecture.
 * B06–B08 lesson knowledge remains independent from this PUBLIC formative bank.
 */
const lessonTitles={
 B06:"Vectơ trong không gian",
 B07:"Hệ trục tọa độ trong không gian",
 B08:"Biểu thức tọa độ của các phép toán vectơ"
};
const openHubTarget=(root,id)=>{
 const target=document.getElementById(id);
 if(!target||!root.contains(target))return false;
 let p=target;
 while(p&&p!==root){if(p.tagName==="DETAILS")p.open=true;p=p.parentElement}
 requestAnimationFrame(()=>target.scrollIntoView({block:"start"}));
 return true;
};
const makeHubGroup=(bank,lesson,practice)=>{
 const roles=practice?["PRACTICE","WRITTEN"]:["CORE"];
 const records=bank.items.filter(q=>q.lesson_id===lesson&&roles.includes(q.role));
 const details=mk("details","g12-chii-hub-group thpt-r4-practice-card");
 details.dataset.thptGrade="12";details.id=lesson.toLowerCase()+"-"+(practice?"practice":"core");
 const summary=mk("summary","g12-chii-hub-summary");
 summary.append(
   mk("span","g12-chii-hub-kind",practice?"Luyện tập · Tự luận":"Core"),
   mk("strong","",practice?"Thực hành và trình bày suy luận":"Kiểm tra nền tảng"),
   mk("span","g12-chii-hub-count",records.length+" câu canonical"),
   mk("span","g12-chii-hub-action",practice?"✎ Mở Luyện tập":"✎ Mở Core")
 );
 details.append(summary);
 const body=mk("div","g12-chii-hub-body");
 for(const [role,title] of (practice?
 [["PRACTICE","Luyện tập · Vận dụng"],["WRITTEN","Tự luận · Có rubric tự đối chiếu"]]:
 [["CORE","Core · Nắm chắc kiến thức"]])){
  const items=records.filter(q=>q.role===role);
  if(!items.length)continue;
  const section=mk("section","g12-chii-stage");
  section.append(mk("h3","",title));
  items.forEach((q,n)=>section.append(itemCard(q,n+1)));
  body.append(section);
 }
 details.append(body);
 details.addEventListener("toggle",()=>{if(details.open)typeset(details)});
 return details;
};
const startHub=(root,bank)=>{
 root.classList.add("thpt-r4-practice-sections");
 const counts={B06:24,B07:16,B08:24};
 for(const [i,lesson]of ["B06","B07","B08"].entries()){
  const available=bank.items.filter(x=>x.lesson_id===lesson);
  if(available.length!==counts[lesson])throw Error("Original ChII source count mismatch "+lesson);
  const outer=mk("section","thpt-r4-practice-lesson g12-chii-hub-lesson");
  outer.dataset.thptGrade="12";outer.dataset.g12ChiiHubLesson=lesson;
  const header=mk("div","thpt-r4-practice-lesson-header");
  const h=mk("div","");
  h.append(mk("p","thpt-r4-practice-class","Lớp 12 · Chương II"),mk("h2","",lessonTitles[lesson]));
  header.append(mk("span","thpt-r4-lesson-number",i+6),h);outer.append(header);
  const cards=mk("div","thpt-r4-practice-card-grid");
  cards.append(makeHubGroup(bank,lesson,false),makeHubGroup(bank,lesson,true));
  outer.append(cards);
  const help=mk("details","g12-chii-hub-help");help.id=lesson.toLowerCase()+"-help";
  help.append(mk("summary","","Khi gặp khó khăn · "+bank.help.filter(x=>x.lesson_id===lesson).length+" hướng dẫn"));
  const helpBody=mk("div","g12-chii-hub-help-body");
  helpers(helpBody,bank,lesson);
  help.append(helpBody);outer.append(help);
  const back=mk("a","g12-chii-return","← Trở về Kiến thức Bài "+(i+6));
  back.href="../bai-"+(i+6)+"/";outer.append(back);
  root.append(outer);
 }
 const onHash=()=>{const key=decodeURIComponent(location.hash.slice(1));if(key)openHubTarget(root,key)};
 window.addEventListener("hashchange",onHash);
 onHash();
 typeset(root);
};
const startSelfCheck=(root,bank)=>{
 const map=new Map(bank.items.map(x=>[x.item_id,x]));
 if(bank.end_references.length!==16)throw Error("Missing original end references");
 root.append(mk("h3","","16 câu · Tự kiểm tra cuối chương"));
 root.append(paragraph("Đây là 16 câu Luyện tập công khai đã học trước đó. Hãy tự giải trước, sau khi hoàn tất mới được xem đáp án. Không tính điểm hoặc ghi Mastery."));
 const progress=mk("p","g12-chii-quiz-progress"),nav=mk("nav","g12-chii-quiz-nav");
 nav.setAttribute("aria-label","Chọn câu hỏi tự kiểm tra");root.append(progress,nav);
 let cursor=0,submitted=false;
 const entries=[];
 for(const ref of bank.end_references){
  const q=map.get(ref.item_id);if(!q||q.role!=="PRACTICE"||q.outcome_id!==ref.outcome_id)throw Error("Wrong canonical end reference");
  const c=mk("section","g12-chii-item g12-chii-selfcheck-item");c.dataset.canonicalItem=q.item_id;
  const inp=mk("textarea","g12-chii-input");inp.rows=4;inp.setAttribute("aria-label","Trả lời câu "+ref.position);
  const answer=mk("section","g12-chii-answer");answer.hidden=true;
  c.append(mk("h4","","Câu "+ref.position+" / 16"),paragraph(q.stem),inp,answer);
  root.append(c);entries.push({card:c,q,ref,input:inp,answer});
 }

 const jumpButtons=entries.map((_,i)=>{
  const el=mk("button","g12-chii-quiz-jump",String(i+1));el.type="button";
  el.dataset.g12ChiiJump=String(i);el.setAttribute("aria-label","Đến câu "+(i+1));
  nav.append(el);return el;
 });
 const prev=mk("button","g12-chii-quiz-step","Câu trước"),next=mk("button","g12-chii-quiz-step","Câu tiếp");
 prev.type=next.type="button";
 const showQuestion=()=>{
  entries.forEach(({card},i)=>{card.hidden=i!==cursor});
  jumpButtons.forEach((b,i)=>{
   b.classList.toggle("is-current",cursor===i);
   if(cursor===i)b.setAttribute("aria-current","step");else b.removeAttribute("aria-current");
  });
  progress.textContent="Câu "+(cursor+1)+" / "+entries.length+(submitted?" · Đã nộp":" · Chưa nộp");
  prev.disabled=cursor===0;next.disabled=cursor===entries.length-1;
  typeset(entries[cursor].card);
 };
 jumpButtons.forEach((b,i)=>b.addEventListener("click",()=>{cursor=i;showQuestion()}));
 prev.addEventListener("click",()=>{if(cursor>0){cursor--;showQuestion()}});
 next.addEventListener("click",()=>{if(cursor<entries.length-1){cursor++;showQuestion()}});
 const button=mk("button","g12-chii-submit g12-chii-final","Final Submit — Tự đối chiếu");button.type="button";button.dataset.g12ChiiFinal="";
 const status=mk("p","g12-chii-feedback");
 button.addEventListener("click",()=>{
  if(button.disabled)return;
  const missing=entries.filter(x=>!x.input.value.trim()).length;
  if(missing){status.textContent="Còn "+missing+" câu chưa có bài làm. Hãy thử giải đủ 16 câu trước Final Submit.";
   cursor=entries.findIndex(x=>!x.input.value.trim());showQuestion();return}
  button.disabled=true;submitted=true;
  entries.forEach(({q,ref,input,answer})=>{
   input.disabled=true;answer.hidden=false;
   answer.append(mk("h5","","Đối chiếu sau Final Submit"));showLines(answer,q.answer);showLines(answer,q.solution);
   const h=bank.help.find(x=>x.outcome_id===q.outcome_id);
   if(h){
    answer.append(paragraph("Nếu chưa hiểu: ôn lại "+ref.remedial_path));
    const link=mk("a","g12-chii-return","Về bài học, ví dụ và câu Core");
    link.href="../luyen-tap/#"+anchor(h.return_item);
    answer.append(link);
   }
  });
  status.textContent="Đã Final Submit. Đây là tự đối chiếu sau khi làm, không chấm điểm, không ghi Mastery.";
  showQuestion();typeset(root);
 });
 const controls=mk("div","g12-chii-quiz-controls");controls.append(prev,next,button);
 root.append(controls,status);showQuestion();typeset(root);
};
const start=async()=>{
 const root=document.querySelector("[data-g12-chii-hub], [data-g12-chii-selfcheck]");
 if(!root)return;
 try{
  const response=await fetch(url,{cache:"no-cache"});
  if(!response.ok)throw Error("Canonical bank HTTP "+response.status);
  const bank=await response.json();
  if(bank.packet_id!=="G12-SGK-CHII-B06-B08-R00"||bank.mode!=="CLIENT_SELF_CHECK_NO_MASTERY"||
     bank.source_blob!=="856a37bd16d2746ffc2e12906de18d1f4338a3b6"||
     bank.receipt_blob!=="92c07bc943a3e5f1789b8c9e5e7a3acc1bea7532"||
     bank.items.length!==64||new Set(bank.items.map(x=>x.item_id)).size!==64||
     bank.help.length!==16||bank.end_references.length!==16)throw Error("Frozen source/receipt mismatch");
  root.replaceChildren();
  if(root.hasAttribute("data-g12-chii-hub")){startHub(root,bank);if(!window.THPT_G12_GOLDEN_HUB?.mount(root,bank,{chapter:"II"}))throw Error("Golden R4 modal unavailable");}
  else startSelfCheck(root,bank);
  root.dataset.g12ChiiReady="true";
  const hash=decodeURIComponent(location.hash.slice(1));
  if(hash){const el=document.getElementById(hash);if(el)requestAnimationFrame(()=>el.scrollIntoView({block:"start"}))}
 }catch(e){
  root.dataset.g12ChiiError="true";
  root.replaceChildren(paragraph("Không tải được học liệu từ nguồn đã kiểm duyệt. Hãy tải lại trang; không sử dụng đáp án thay thế.","g12-chii-error"));
  console.error("G12 ChII RELEASE",e);
 }
};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();