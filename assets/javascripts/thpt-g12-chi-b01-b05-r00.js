/* G12 SGK ChI R00. One author-reviewed PUBLIC canonical bank; never an official
 * RD1 exam. No storage, Firebase, automatic Written grading or Skill Mastery.
 * Student answers and rubrics are inserted into the DOM only after Submit.
 */
(()=>{
"use strict";
const source=document.currentScript?.src||"";
const url=new URL("../data/thpt-g12-chi-b01-b05-public-r00.json",source);
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
   const script=mk(op==="^"?"sup":"sub","g12-chi-math-script",parsed.value);
   target.append(script);i=parsed.end-1;
  }
  flush();
 };
 const appendMarked=(segment)=>{
  const reg=/(?:\x60[^\x60\n]+\x60|\*\*[^*\n]+\*\*)/g;let cursor=0;
  for(const m of segment.matchAll(reg)){
   if(m.index>cursor)bare(root,segment.slice(cursor,m.index));
   const code=m[0][0]==="\x60",span=mk(code?"span":"strong",code?"g12-chi-inline-notation":"");
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
     const el=mk(display?"div":"span",display?"g12-chi-math-display":"g12-chi-math-inline");
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
 const p=mk("p",cls||"g12-chi-paragraph");
 addText(p,text);return p;
};
const typeset=root=>{
 if(window.MathJax&&typeof window.MathJax.typesetPromise==="function")
  window.MathJax.typesetPromise([root]).catch(()=>{});
};

const anchor=id=>id.toLowerCase().replace(/[^a-z0-9-]/g,"-");
const showLines=(el,text)=>{
 for(const line of String(text||"").split(/\n+/)){
  if(line.trim())el.append(paragraph(line.trim()));
 }
};
const h=(root,title)=>root.append(mk("h3","g12-chi-stage-title",title));
const itemCard=(q,num)=>{
 const c=mk("section","g12-chi-item");
 c.id=anchor(q.item_id);
 c.dataset.canonicalItem=q.item_id;c.dataset.outcome=q.outcome_id;
 const written=q.placement==="SGK_WRITTEN";
 const role=written?"Tự luận":q.placement==="SGK_CORE"?"Core":q.placement==="SGK_APPLICATION"?"Vận dụng":"Luyện tập";
 c.append(mk("p","thpt-r4-eyebrow",role),mk("h4","","Câu "+num));
 c.append(paragraph(q.stem));
 const input=mk("textarea","g12-chi-input");
 input.rows=4;input.setAttribute("aria-label","Viết câu trả lời của em cho câu "+num);
 const button=mk("button","g12-chi-submit","Nộp câu trả lời");
 button.type="button";
 const status=mk("p","g12-chi-feedback");
 const answer=mk("section","g12-chi-answer");answer.hidden=true;
 button.addEventListener("click",()=>{
  if(button.disabled)return;
  if(!input.value.trim()){status.textContent="Hãy tự làm trước khi nộp để đối chiếu.";return}
  input.disabled=true;button.disabled=true;answer.hidden=false;
  answer.append(mk("h5","","Lời giải để tự đối chiếu"));
  if(q.answer)showLines(answer,q.answer);
  if(q.rubric){answer.append(mk("h5","","Tiêu chí tự đối chiếu bài tự luận"));showLines(answer,q.rubric)}
  status.textContent="Đã nộp; đây là hoạt động tự đối chiếu, không chấm điểm.";
  typeset(answer);
 });
 c.append(input,button,status,answer);
 return c;
};
const helpers=(root,bank,lesson)=>{
 const list=bank.help.filter(x=>x.lesson_id===lesson);
 if(!list.length)return;
 h(root,"Khi gặp khó khăn · Hướng dẫn khắc phục");
 root.append(paragraph("Chọn gợi ý của câu đang vướng, tự thử lại rồi quay về đúng câu ở phía trên."));
 list.forEach((x,i)=>{
  const d=mk("details","g12-chi-help"),sum=mk("summary","","Gợi ý "+(i+1)+" · Kiểm tra phương pháp");
  d.append(sum);showLines(d,x.body);
  const link=mk("a","g12-chi-return","Quay lại câu đang làm");link.href="#"+anchor(x.return_item);
  d.append(link);root.append(d);
 });
};
/* Student navigation is chapter-first: one practice hub, lesson bodies are knowledge-only.
 * PUBLIC canonical bank, D6, submit guards and Q16 remain exactly source-locked.
 */
const chapterLessons=[
 ["B01","Tính đơn điệu và cực trị của hàm số"],
 ["B02","Giá trị lớn nhất và giá trị nhỏ nhất của hàm số"],
 ["B03","Đường tiệm cận của đồ thị hàm số"],
 ["B04","Khảo sát sự biến thiên và vẽ đồ thị của hàm số"],
 ["B05","Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn"]
];
const openTarget=(root,id)=>{
 const target=document.getElementById(id);
 if(!target||!root.contains(target))return false;
 let p=target;
 while(p&&p!==root){if(p.tagName==="DETAILS")p.open=true;p=p.parentElement;}
 requestAnimationFrame(()=>target.scrollIntoView({block:"start"}));
 return true;
};
const groupCard=(bank,lesson,mode)=>{
 const practice=mode==="practice";
 const records=bank.items.filter(q=>q.lesson_id===lesson&&
    (practice?q.placement!=="SGK_CORE":q.placement==="SGK_CORE"));
 const d=mk("details","g12-chi-hub-group thpt-r4-practice-card");
 d.dataset.thptGrade="12";
 d.id=lesson.toLowerCase()+"-"+(practice?"practice":"core");
 const sum=mk("summary","g12-chi-hub-summary");
 const top=mk("span","g12-chi-hub-kind",practice?"Luyện tập · Vận dụng · Tự luận":"Core");
 const title=mk("strong","",practice?"Làm bài và trình bày suy luận":"Kiểm tra kiến thức cơ bản");
 const count=mk("span","g12-chi-hub-count",records.length+" câu gốc");
 const action=mk("span","g12-chi-hub-action",practice?"✎ Mở Luyện tập":"✎ Mở Core");
 sum.append(top,title,count,action);d.append(sum);
 const content=mk("div","g12-chi-hub-content");
 const groups=practice?[
  ["SGK_PRACTICE","Luyện tập · Tự giải"],
  ["SGK_APPLICATION","Vận dụng · Lựa chọn phương pháp"],
  ["SGK_WRITTEN","Tự luận · Trình bày suy luận"]
 ]:[["SGK_CORE","Core · Kiểm tra nền tảng"]];
 groups.forEach(([role,label])=>{
  const selected=records.filter(q=>q.placement===role);
  if(!selected.length)return;
  const section=mk("section","g12-chi-stage");h(section,label);
  selected.forEach((q,i)=>section.append(itemCard(q,i+1)));
  content.append(section);
 });
 d.append(content);
 d.addEventListener("toggle",()=>{if(d.open)typeset(d)});
 return d;
};
const startHub=(root,bank)=>{
 root.classList.add("thpt-r4-practice-sections");
 chapterLessons.forEach(([lesson,name],i)=>{
  const panel=mk("section","thpt-r4-practice-lesson g12-chi-hub-lesson");
  panel.dataset.g12ChiHubLesson=lesson;
  panel.dataset.thptGrade="12";
  const header=mk("div","thpt-r4-practice-lesson-header");
  const num=mk("span","thpt-r4-lesson-number",i+1);
  const head=mk("div","");
  head.append(mk("p","thpt-r4-practice-class","Lớp 12 · Chương I"),mk("h2","",name));
  header.append(num,head);panel.append(header);
  const grid=mk("div","thpt-r4-practice-card-grid");
  grid.append(groupCard(bank,lesson,"core"),groupCard(bank,lesson,"practice"));
  panel.append(grid);
  const aid=mk("details","g12-chi-hub-help");
  aid.id=lesson.toLowerCase()+"-help";
  const n=bank.help.filter(x=>x.lesson_id===lesson).length;
  aid.append(mk("summary","","Khi gặp khó khăn · "+n+" hướng dẫn theo câu"));
  const helpContent=mk("div","g12-chi-hub-help-content");
  helpers(helpContent,bank,lesson);aid.append(helpContent);panel.append(aid);
  panel.append(paragraph("Học lại kiến thức Bài "+(i+1)+": "));
  const back=mk("a","g12-chi-return","Quay về bài học");
  back.href="../bai-"+(i+1)+"/";panel.append(back);
  root.append(panel);
 });
 root.addEventListener("click",event=>{
  const link=event.target.closest("a.g12-chi-return");
  if(!link||!link.getAttribute("href")?.startsWith("#"))return;
  const target=decodeURIComponent(link.hash.slice(1));
  openTarget(root,target);
 });
 const followHash=()=>{const hash=decodeURIComponent(location.hash.slice(1));if(hash)openTarget(root,hash)};
 window.addEventListener("hashchange",followHash);
 followHash();
 root.dataset.g12ChiHubReady="true";
};
const startSelfCheck=(root,bank)=>{
 const items=bank.items.filter(x=>x.lesson_id==="END");
 if(items.length!==12)throw Error("Source snapshot has no 12-item self-check");
 const headline=mk("h3","","Tự kiểm tra cuối chương · 12 câu");
 root.append(headline,paragraph("Hãy viết câu trả lời cho cả 12 câu trước khi nộp. Đây là tự đối chiếu học liệu công khai, không tính điểm hoặc chứng nhận năng lực."));
 const progress=mk("p","g12-chi-quiz-progress"),nav=mk("nav","g12-chi-quiz-nav");
 nav.setAttribute("aria-label","Chọn câu hỏi tự kiểm tra");root.append(progress,nav);
 let cursor=0,submitted=false;
 const entries=[];
 for(const [i,q]of items.entries()){
  const c=mk("section","g12-chi-item g12-chi-selfcheck-item");
  c.dataset.canonicalItem=q.item_id;
  const title=mk("h4","","Câu "+(i+1)+" / 12");
  const input=mk("textarea","g12-chi-input");
  input.rows=4;input.setAttribute("aria-label","Trả lời câu "+(i+1));
  const result=mk("section","g12-chi-answer");result.hidden=true;
  c.append(title,paragraph(q.stem),input,result);
  root.append(c);entries.push({card:c,input,result,q});
 }

 const jumpButtons=entries.map((_,i)=>{
  const el=mk("button","g12-chi-quiz-jump",String(i+1));el.type="button";
  el.dataset.g12ChiJump=String(i);el.setAttribute("aria-label","Đến câu "+(i+1));
  nav.append(el);return el;
 });
 const prev=mk("button","g12-chi-quiz-step","Câu trước"),next=mk("button","g12-chi-quiz-step","Câu tiếp");
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
 const button=mk("button","g12-chi-submit g12-chi-final","Final Submit — Tự đối chiếu");
 button.type="button";button.dataset.g12ChiFinal="";
 const status=mk("p","g12-chi-feedback");
 button.addEventListener("click",()=>{
  if(button.disabled)return;
  const missing=entries.filter(x=>!x.input.value.trim()).length;
  if(missing){status.textContent="Còn "+missing+" câu chưa có lời giải. Hãy tự làm đủ 12 câu trước khi nộp.";
   cursor=entries.findIndex(x=>!x.input.value.trim());showQuestion();return}
  button.disabled=true;submitted=true;
  entries.forEach(({input,result,q})=>{
   input.disabled=true;result.hidden=false;
   result.append(mk("h5","","Đối chiếu sau Final Submit"));
   if(q.answer)showLines(result,q.answer);
   if(q.rubric){result.append(mk("h5","","Tiêu chí tự đối chiếu tự luận"));showLines(result,q.rubric)}
  });
  status.textContent="Đã Final Submit. Em có thể xem lời giải, tự nhận xét và ôn lại bài; không lưu kết quả hoặc ghi Mastery.";
  helpers(root,bank,"END");
  showQuestion();typeset(root);
 });
 const controls=mk("div","g12-chi-quiz-controls");controls.append(prev,next,button);
 root.append(controls,status);showQuestion();typeset(root);
};
const start=async()=>{
 const root=document.querySelector("[data-g12-chi-hub], [data-g12-chi-selfcheck]");
 if(!root)return;
 try{
  const res=await fetch(url,{cache:"no-cache"});
  if(!res.ok)throw Error("Source bank HTTP "+res.status);
  const bank=await res.json();
  if(bank.packet_id!=="G12-SGK-CHI-B01-B05-R00"
   ||bank.mode!=="CLIENT_SELF_CHECK_NO_MASTERY"
   ||bank.source_blob!=="f0862dcdab21dec136e43969f45c42638e7c7574"
   ||bank.items.length!==78||bank.help.length!==36
   ||new Set(bank.items.map(x=>x.item_id)).size!==78)throw Error("Source snapshot mismatch");
  root.replaceChildren();
  if(root.hasAttribute("data-g12-chi-hub")){startHub(root,bank);if(!window.THPT_G12_GOLDEN_HUB?.mount(root,bank,{chapter:"I"}))throw Error("Golden R4 modal unavailable");}
  else if(root.hasAttribute("data-g12-chi-selfcheck"))startSelfCheck(root,bank);
  root.dataset.g12ChiReady="true";
  const hash=decodeURIComponent(location.hash.slice(1));
  if(hash){const el=document.getElementById(hash);if(el)requestAnimationFrame(()=>el.scrollIntoView({block:"start"}))}
 }catch(err){
  root.dataset.g12ChiError="true";
  root.replaceChildren(paragraph("Không tải được nguồn học liệu đã kiểm duyệt; hãy tải lại trang. Không sử dụng đáp án thay thế.","g12-chi-error"));
  console.error("G12 ChI RELEASE:",err);
 }
};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();