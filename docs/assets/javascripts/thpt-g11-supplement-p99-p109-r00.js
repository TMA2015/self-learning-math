/* RELEASE G11 SGK supplement pp99–109: one PUBLIC RD0 bank.
 * Static student-only self-study: no RD1, Firebase, localStorage, mastery,
 * automatic free-text grading or independent readiness.
 * Answers are inserted into DOM ONLY after a learner-initiated Submit.
 */
(()=>{
"use strict";
const scriptSrc=document.currentScript?.src||"";
const dataUrl=new URL("../data/thpt-g11-supplement-p99-p109-public-r00.json",scriptSrc);
const imagesUrl=new URL("../images/thpt/",scriptSrc);
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
   const script=mk(op==="^"?"sup":"sub","g11-supp-math-script",parsed.value);
   target.append(script);i=parsed.end-1;
  }
  flush();
 };
 const appendMarked=(segment)=>{
  const reg=/(?:\x60[^\x60\n]+\x60|\*\*[^*\n]+\*\*)/g;let cursor=0;
  for(const m of segment.matchAll(reg)){
   if(m.index>cursor)bare(root,segment.slice(cursor,m.index));
   const code=m[0][0]==="\x60",span=mk(code?"span":"strong",code?"g11-supp-inline-notation":"");
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
     const el=mk(display?"div":"span",display?"g11-supp-math-display":"g11-supp-math-inline");
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
 const p=mk("p",cls||"g11-supp-paragraph");
 addText(p,text);return p;
};
const typeset=root=>{
 if(window.MathJax&&typeof window.MathJax.typesetPromise==="function")
  window.MathJax.typesetPromise([root]).catch(()=>{});
};
const pedNames={
 PED1:"Vì sao cần học?",PED2:"Kiến thức tiền đề",PED3:"Hình thành bản chất",
 PED4:"Cách đọc hình và dữ liệu",PED5:"Lý do chọn phương pháp, điều kiện",
 PED6:"Tự thử trước khi vào Core"
};
const topicName={
 E01:"E01 · Mô hình hàm mũ và thang lôgarit",
 E02:"E02 · Hình học trải nghiệm và đo đạc",
 TRIG:"Lượng giác",SEQUENCE:"Dãy số",LIMIT:"Giới hạn và liên tục",
 EXPLOG:"Hàm mũ và lôgarit",DERIV:"Đạo hàm",SPACE:"Quan hệ vuông góc và khoảng cách",
 VOLUME:"Thể tích",STAT:"Dữ liệu ghép nhóm",PROB:"Xác suất",INTEGRATE:"Khắc phục lỗ hổng liên chương"
};
const groupOf=x=>{
 if(x.item_id?.includes("-SUPP-E01-"))return "E01";
 if(x.item_id?.includes("-SUPP-E02-"))return "E02";
 const short=x.item_id?.match(/-YR-([A-Z]+)-/)?.[1]||"";
 return {SEQ:"SEQUENCE",EXPL:"EXPLOG",VOL:"VOLUME",IND:"PROB",INT:"INTEGRATE"}[short]||short;
};
const idAnchor=id=>id.toLowerCase().replace(/[^a-z0-9-]/g,"-");
const topicFor=(topic,bank)=>bank.items.filter(x=>groupOf(x)===topic);
const header=(root,label,title)=>{
 root.append(mk("p","thpt-r4-eyebrow",label),mk("h2","g11-supp-section-title",title));
};
const miniNav=root=>{
 const nav=mk("nav","thpt-r4-lesson-tabs");
 [
  ["Tổng quan","../"],["Trải nghiệm E01","../trai-nghiem-e01/"],
  ["Trải nghiệm E02","../trai-nghiem-e02/"],
  ["Ôn tập cuối năm","../on-tap-cuoi-nam/"],
  ["Core/Luyện tập","../luyen-tap/"],["Tự luận","../tu-luan/"],
  ["Tự kiểm tra tự đối chiếu","../tu-kiem-tra/"]
 ].forEach(([t,url])=>{const a=mk("a","",t);a.href=url;nav.append(a)});
 root.append(nav);
};
const figures=(root,bank,topic)=>{
 for(const f of bank.figures.filter(x=>x.group===(topic==="E01"||topic==="E02"?topic:"YEAR"))){
  const figure=mk("figure","thpt-r4-plot g11-supp-figure");
  const image=mk("img");image.src=new URL(f.src,imagesUrl).href;
  image.loading="lazy";image.alt=f.description;image.decoding="async";
  figure.append(image,mk("figcaption","",f.description));root.append(figure);
 }
};
const examples=(root,bank,topic)=>{
 const chosen=bank.examples.filter(x=>topic==="E01"||topic==="E02"?
  x.example_id.includes("-"+topic+"-"):
  groupOf({item_id:x.example_id})===topic);
 if(!chosen.length)return;
 root.append(mk("h3","","Ví dụ có suy luận"));
 for(const example of chosen){
  const card=mk("section","g11-supp-example");
  card.append(paragraph(example.text));
  root.append(card);
 }
};
const helpBlocks=(root,bank,topic)=>{
 const ids=new Set(topicFor(topic,bank).map(x=>x.item_id));
 const helps=bank.help.filter(h=>ids.has(h.return_item));
 if(!helps.length)return;
 root.append(mk("h3","","Khi gặp khó khăn: gợi ý khắc phục"));
 for(const h of helps){
  const details=mk("details","g11-supp-help"),summary=mk("summary","",h.help_id);
  const steps=mk("ol");
  for(const step of h.steps){const li=mk("li");addText(li,step);steps.append(li)}
  const a=mk("a","","Quay lại bài luyện tập đã liên kết");
  a.href="../luyen-tap/#"+idAnchor(h.return_item);
  details.append(summary,steps,a);root.append(details);
 }
};
const course=(root,bank,view)=>{
 miniNav(root);
 const tracks=view==="YEAR"?bank.year:[bank.experience.find(x=>x.id===view)];
 for(const track of tracks){
  if(!track)continue;
  const topic=view==="YEAR"?track.id:view;
  const section=mk("section","g11-supp-topic");
  section.id="g11-supp-"+topic.toLowerCase();
  header(section,"KIẾN THỨC SGK · "+(view==="YEAR"?"ÔN TẬP CUỐI NĂM":"TRẢI NGHIỆM"),topicName[topic]||track.title);
  for(const n of [1,2,3,4,5,6]){
   const body=track.ped["PED"+n];if(!body)continue;
   section.append(mk("h3","",pedNames["PED"+n]));
   section.append(paragraph(body,n===6?"g11-supp-first-try":"g11-supp-paragraph"));
  }
  if(topic==="E01"||topic==="E02"){section.append(mk("h3","","Đọc hình và kiểm tra giả định"));figures(section,bank,topic)}
  else if(["DERIV","STAT","PROB"].includes(topic)){section.append(mk("h3","","Hình minh họa ôn tập"));const all=bank.figures.filter(x=>x.group==="YEAR");
   const figure=all[topic==="DERIV"?0:topic==="STAT"?1:2];
   if(figure){const f=mk("figure","thpt-r4-plot g11-supp-figure"),im=mk("img");im.src=new URL(figure.src,imagesUrl).href;im.alt=figure.description;im.loading="lazy";f.append(im,mk("figcaption","",figure.description));section.append(f)}
  }
  examples(section,bank,topic);
  const link=mk("a","g11-supp-link","✎ Làm Core/Luyện tập của "+(topicName[topic]||topic));
  link.href="../luyen-tap/#g11-supp-group-"+topic.toLowerCase();
  section.append(link);
  helpBlocks(section,bank,topic);
  root.append(section);
 }
 typeset(root);
};
const submitFormative=(card,q,kind)=>{
 const input=mk("textarea","g11-supp-answer");input.rows=3;
 input.setAttribute("aria-label","Câu trả lời của "+q.item_id);
 const button=mk("button","g11-supp-submit","Nộp câu trả lời");
 button.type="button";const status=mk("p","g11-supp-feedback");
 const result=mk("section","g11-supp-solution");result.hidden=true;
 button.addEventListener("click",()=>{
  if(!input.value.trim()){status.textContent="Hãy viết lời giải hoặc ý tưởng trước khi nộp.";return}
  status.textContent="Đã nộp để tự đối chiếu. Không chấm điểm tự động.";
  input.disabled=true;button.disabled=true;result.hidden=false;
  result.append(mk("h4","","Lời giải để tự đối chiếu"),paragraph(q.answer));
  if(kind==="written"&&q.rubric){result.append(mk("h4","","Rubric tự đối chiếu /4"),paragraph(q.rubric))}
  typeset(result);
 });
 card.append(input,button,status,result);
};
const exerciseCard=(q,kind)=>{
 const card=mk("section","g11-supp-exercise");
 card.id=idAnchor(q.item_id);
 card.dataset.canonicalItem=q.item_id;
 card.dataset.exposureRole=q.role;
 card.append(mk("p","thpt-r4-eyebrow",q.role==="ANCHOR_TAG"?"TỰ LUẬN · ANCHOR (NHÃN)":
  kind==="written"?"TỰ LUẬN":q.role==="SGK_CORE"?"CORE":q.role==="SGK_APPLICATION"?"VẬN DỤNG":"LUYỆN TẬP"));
 card.append(mk("h3","",q.item_id),paragraph(q.stem));
 submitFormative(card,q,kind);
 return card;
};
const practice=(root,bank,kind)=>{
 miniNav(root);
 const items=kind==="written"?bank.written:bank.items;
 header(root,"TOÁN 11 · HỌC LIỆU CÔNG KHAI",kind==="written"?"Thư viện 16 bài tự luận/Anchor":"Core và Luyện tập · 52 câu");
 root.append(paragraph("Tự làm trước khi nộp từng câu. Lời giải chỉ hiện sau nút Nộp câu trả lời. Không ghi Mastery, không chấm tự luận tự động; Anchor chỉ là nhãn của một câu Written."));
 const groups=[...new Set(items.map(groupOf))];
 for(const group of groups){
  const section=mk("section","g11-supp-topic");
  section.id="g11-supp-group-"+group.toLowerCase();
  section.append(mk("h2","",topicName[group]||group));
  items.filter(x=>groupOf(x)===group).forEach(q=>section.append(exerciseCard(q,kind)));
  root.append(section);
 }
 typeset(root);
};
const selfCheck=(root,bank)=>{
 miniNav(root);
 const picked=[];const seen=new Set();
 for(const q of bank.items){
  if(q.role==="SGK_CORE"||seen.has(q.outcome_id))continue;
  seen.add(q.outcome_id);picked.push(q);
 }
 if(picked.length!==22){root.append(paragraph("Chưa đủ ma trận 22 outcomes để mở tự đối chiếu."));return}
 header(root,"TỰ KIỂM TRA SGK · KHÔNG PHẢI RD1","Tự đối chiếu cuối năm · 22 câu PUBLIC");
 root.append(paragraph("Đây là 22 câu Practice/Vận dụng đã có trên hành trình học, không phải bài kiểm tra độc lập. Không xem gợi ý, đáp án hay lời giải trước Final Submit. Không tự chấm đúng/sai, không ghi điểm, tiến độ hay Skill Mastery."));
 const form=mk("div","g11-supp-selfcheck");
 const answers=[];
 for(const [i,q]of picked.entries()){
  const section=mk("section","g11-supp-exercise");
  section.dataset.canonicalItem=q.item_id;
  section.append(mk("h3","","Câu "+(i+1)+" / 22"),paragraph(q.stem));
  const textarea=mk("textarea","g11-supp-answer");
  textarea.rows=3;textarea.setAttribute("aria-label","Trả lời câu "+(i+1));
  const answer=mk("div","g11-supp-solution");answer.hidden=true;
  answers.push({textarea,answer,q});section.append(textarea,answer);form.append(section);
 }
 const button=mk("button","g11-supp-submit g11-supp-final","Final Submit — tự đối chiếu");
 button.type="button";button.dataset.g11SupplementFinal="";
 const status=mk("p","g11-supp-feedback");
 button.addEventListener("click",()=>{
  if(button.disabled)return;
  button.disabled=true;answers.forEach(({textarea,answer,q})=>{
   textarea.disabled=true;answer.hidden=false;
   answer.append(mk("h4","","Đáp án / lời giải từ ngân hàng PUBLIC"),paragraph(q.answer));
  });
  status.textContent="Đã Final Submit. Tự đọc lời giải và so sánh, không có chấm điểm độc lập hoặc lưu dữ liệu.";
  typeset(form);
 });
 root.append(form,button,status);typeset(root);
};
const start=async()=>{
 const root=document.querySelector("[data-g11-supp-view]");
 if(!root)return;
 const view=root.getAttribute("data-g11-supp-view");
 try{
  const res=await fetch(dataUrl,{cache:"no-cache"});
  if(!res.ok)throw Error("HTTP "+res.status);
  const bank=await res.json();
  if(bank.packet_id!=="G11-SGK-SUPPLEMENT-P99-P109-R00"
    ||bank.items.length!==52||bank.written.length!==16||bank.help.length!==23
    ||bank.figures.length!==8||bank.examples.length!==28)throw Error("Snapshot mismatch");
  root.dataset.g11SuppBound="true";
  if(view==="E01"||view==="E02"||view==="YEAR")course(root,bank,view);
  else if(view==="PRACTICE")practice(root,bank,"formative");
  else if(view==="WRITTEN")practice(root,bank,"written");
  else if(view==="SELFCHECK")selfCheck(root,bank);
  else throw Error("Unknown learner page");
  const hash=decodeURIComponent(location.hash.slice(1));
  if(hash){const target=document.getElementById(hash);if(target)requestAnimationFrame(()=>target.scrollIntoView({block:"start"}))}
 }catch(err){
  const msg=mk("p","g11-supp-error","Không tải được học liệu nguồn đã khóa. Vui lòng thử tải lại trang; không sử dụng đáp án thay thế.");
  root.replaceChildren(msg);root.dataset.g11SuppError="true";
  console.error("G11 supplement RELEASE:",err);
 }
};
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();
