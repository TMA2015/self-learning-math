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
 E01:"Hoạt động 1 · Mô hình hàm mũ và thang lôgarit",
 E02:"Hoạt động 2 · Hình học trải nghiệm và đo đạc",
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
 const nav=mk("nav","g11-supp-local-nav");
 nav.setAttribute("aria-label","Điều hướng phần cuối sách giáo khoa");
 [
  ["Mục lục hai phần","../"],["Thực hành 1","../trai-nghiem-e01/"],
  ["Thực hành 2","../trai-nghiem-e02/"],
  ["Luyện tập Trải nghiệm","../luyen-tap-trai-nghiem/"],
  ["Tự kiểm tra Trải nghiệm","../tu-kiem-tra-trai-nghiem/"],
  ["Kiến thức Ôn tập cuối năm","../on-tap-cuoi-nam/"],
  ["Luyện tập cuối năm","../luyen-tap-on-tap-cuoi-nam/"],
  ["Tự kiểm tra cuối năm","../tu-kiem-tra/"]
 ].forEach(([label,url])=>{
  const a=mk("a","",label);a.href=url;nav.append(a);
 });
 root.append(nav);
};
const learningPath=root=>{
 const guide=mk("aside","g11-supp-learning-guide");
 guide.append(mk("h3","","Cách tự học ở phần này"));
 const steps=mk("ol");
 [
  "Hiểu bản chất, điều kiện và đọc các hình minh họa.",
  "Xem ví dụ, đọc hình và tự thử trước khi chuyển sang trang Core và Luyện tập.",
  "Trong trang luyện tập, chọn thẻ Core, Luyện tập, Vận dụng hoặc Tự luận, rồi chọn câu theo hàng nút.",
  "Nộp từng câu để tự đối chiếu, ôn lại kiến thức khi cần; làm Tự kiểm tra của đúng phần."
 ].forEach(t=>steps.append(mk("li","",t)));
 guide.append(steps);root.append(guide);
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
 for(const [i,h] of helps.entries()){
  const details=mk("details","g11-supp-help"),summary=mk("summary","","Gợi ý "+(i+1)+" · Kiểm tra cách làm");
  const steps=mk("ol");
  for(const step of h.steps){const li=mk("li");addText(li,step);steps.append(li)}
  const a=mk("a","","Quay lại bài luyện tập đã liên kết");
  a.href=(topic==="E01"||topic==="E02"?"../luyen-tap-trai-nghiem/":"../luyen-tap-on-tap-cuoi-nam/")+"#"+idAnchor(h.return_item);
  details.append(summary,steps,a);root.append(details);
 }
};
// DELTA_A_UI: one public exercise at a time per stage; canonical IDs and draft
// inputs stay intact. Existing question-level Submit / Q16 Final Submit own keys.
const compactDeck=(holder,cards,label)=>{
 if(cards.length<1)return;
 const jump=mk("nav","g11-supp-deck-jump");
 jump.setAttribute("aria-label","Chọn câu "+label);
 const progress=mk("p","g11-supp-deck-progress");
 const controls=mk("div","g11-supp-deck-controls");
 const prev=mk("button","g11-supp-deck-step","← Câu trước");
 const next=mk("button","g11-supp-deck-step","Câu tiếp →");
 prev.type=next.type="button";controls.append(prev,next);
 let cursor=Math.max(0,cards.findIndex(card=>card.id&&location.hash==="#"+card.id));
 const buttons=cards.map((card,i)=>{
  const button=mk("button","g11-supp-deck-number",String(i+1));
  button.type="button";button.setAttribute("aria-label",label+" · Câu "+(i+1));
  button.addEventListener("click",()=>{cursor=i;show()});jump.append(button);
  return button;
 });
 const show=()=>{
  cards.forEach((card,i)=>{card.hidden=i!==cursor});
  buttons.forEach((button,i)=>{
   button.classList.toggle("is-current",i===cursor);
   if(i===cursor)button.setAttribute("aria-current","step");
   else button.removeAttribute("aria-current");
  });
  progress.textContent=label+" · Câu "+(cursor+1)+" / "+cards.length;
  prev.disabled=cursor===0;next.disabled=cursor===cards.length-1;
  if(cards[cursor].isConnected)typeset(cards[cursor]);
 };
 prev.addEventListener("click",()=>{if(cursor){cursor--;show()}});
 next.addEventListener("click",()=>{if(cursor<cards.length-1){cursor++;show()}});
 const top=mk("div","g11-supp-deck-top");top.append(progress,jump);
 holder.insertBefore(top,cards[0]);holder.append(controls);
 holder.dataset.g11SuppDeck=label;
 window.addEventListener("hashchange",()=>{
  const i=cards.findIndex(card=>card.id&&location.hash==="#"+card.id);
  if(i>=0){cursor=i;show();cards[i].scrollIntoView({block:"nearest"})}
 });
 show();
};
const course=(root,bank,view)=>{
 miniNav(root);
 learningPath(root);
 const tracks=view==="YEAR"?bank.year:[bank.experience.find(x=>x.id===view)];
 for(const track of tracks){
  if(!track)continue;
  const topic=view==="YEAR"?track.id:view;
  const section=mk("section","g11-supp-topic");
  section.id="g11-supp-"+topic.toLowerCase();
  header(section,view==="YEAR"?"BÀI TẬP ÔN TẬP CUỐI NĂM":"HOẠT ĐỘNG THỰC HÀNH TRẢI NGHIỆM",topicName[topic]||track.title);
  for(const n of [1,2,3,4,5]){
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
  // Keep approved PED6 text unchanged, but place self-try after the
  // worked examples and before Core in the learner's reading order.
  if(track.ped.PED6){
   section.append(mk("h3","",pedNames.PED6));
   section.append(paragraph(track.ped.PED6,"g11-supp-first-try"));
  }
  // Render author-approved PED, figures, worked examples and first-try here.
  // Original public formative and Written now live in the Golden practice hub.
  const practiceUrl=topic==="E01"||topic==="E02"?
    "../luyen-tap-trai-nghiem/":"../luyen-tap-on-tap-cuoi-nam/";
  const go=mk("a","g11-supp-next","Mở Core, Luyện tập, Vận dụng và Tự luận →");
  go.href=practiceUrl+"#g11-supp-group-"+topic.toLowerCase();
  section.append(go);
  helpBlocks(section,bank,topic);
  const next=mk("a","g11-supp-next",view==="YEAR"?
    "Sang chủ điểm tiếp theo →":"Sang hoạt động tiếp theo →");
  next.href=view==="YEAR"?"#g11-supp-"+(bank.year[bank.year.findIndex(t=>t.id===topic)+1]?.id||"end").toLowerCase():
    topic==="E01"?"../trai-nghiem-e02/":"../tu-kiem-tra-trai-nghiem/";
  if(view==="YEAR"&&topic===bank.year[bank.year.length-1]?.id)next.href="../tu-kiem-tra/";
  section.append(next);
  root.append(section);
 }
 typeset(root);
};
const submitFormative=(card,q,kind)=>{
 const input=mk("textarea","g11-supp-answer");input.rows=3;
 input.setAttribute("aria-label",kind==="written"?"Viết lời giải tự luận của em":"Nhập câu trả lời hoặc các bước giải của em");
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
const exerciseCard=(q,kind,number=1)=>{
 const card=mk("section","g11-supp-exercise");
 card.id=idAnchor(q.item_id);
 card.dataset.canonicalItem=q.item_id;
 card.dataset.exposureRole=q.role;
 card.append(mk("p","thpt-r4-eyebrow",kind==="written"?"BÀI TẬP TỰ LUẬN":
  q.role==="SGK_CORE"?"CORE":q.role==="SGK_APPLICATION"?"VẬN DỤNG":"LUYỆN TẬP"));
 card.append(mk("h4","",kind==="written"?"Bài tự luận "+number:"Câu "+number),paragraph(q.stem));
 submitFormative(card,q,kind);
 return card;
};
const practice=(root,bank,kind)=>{
 miniNav(root);
 const items=kind==="written"?bank.written:bank.items;
 header(root,"TOÁN 11 · SGK TẬP HAI",kind==="written"?"Tổng hợp bài tập tự luận":"Tổng hợp Core và luyện tập");
 root.append(paragraph("Đây là trang tổng hợp để tra cứu bài tập. Khi tự học, em nên vào từng Hoạt động hoặc chủ điểm Ôn tập để học kiến thức, ví dụ và làm bài ngay tại đó. Lời giải chỉ hiện sau khi nộp."));
 const groups=[...new Set(items.map(groupOf))];
 for(const group of groups){
  const section=mk("section","g11-supp-topic");
  section.id="g11-supp-group-"+group.toLowerCase();
  section.append(mk("h2","",topicName[group]||group));
  const cards=items.filter(x=>groupOf(x)===group).map((q,i)=>exerciseCard(q,kind,i+1));
   cards.forEach(card=>section.append(card));
   compactDeck(section,cards,kind==="written"?"Tự luận":"Core và Luyện tập");
  root.append(section);
 }
 typeset(root);
};
/* Existing G11 Golden R4 2-column lesson/card/button UI with one-question
 * numbered deck per PUBLIC original role. Multiple placements, no new IDs. */
const practiceHub=(root,bank,unit)=>{
 miniNav(root);
 const experience=unit==="EXPERIENCE";
 const topics=experience?["E01","E02"]:bank.year.map(x=>x.id);
 header(root,experience?"SGK TRANG 99–104 · HOẠT ĐỘNG THỰC HÀNH":"SGK TRANG 105–109 · ÔN TẬP CUỐI NĂM",
   experience?"Core, Luyện tập, Vận dụng và Tự luận · Hai hoạt động":"Core, Luyện tập, Vận dụng và Tự luận · Mười chủ điểm");
 root.append(paragraph("Chọn thẻ đúng vai trò rồi bấm nút số câu trên một hàng. Tự làm và nộp từng câu mới xem đối chiếu; tự luận dùng rubric /4. Các nhóm Vận dụng chỉ xuất hiện khi có câu gốc, không tự tạo thêm bài. Không ghi điểm hoặc Skill Mastery."));
 const panels=[];
 for(const [i,topic]of topics.entries()){
  const title=topicName[topic]||topic;
  const section=mk("section","thpt-r4-practice-lesson g11-supp-golden-lesson");
  section.id="g11-supp-group-"+topic.toLowerCase();
  section.dataset.thptGrade="11";
  const head=mk("div","thpt-r4-practice-lesson-header"),info=mk("div");
  info.append(mk("p","thpt-r4-practice-class",experience?"Lớp 11 · Hoạt động thực hành":"Lớp 11 · Ôn tập cuối năm"),
    mk("h2","",title));
  head.append(mk("span","thpt-r4-lesson-number",String(i+1).padStart(2,"0")),info);
  const grid=mk("div","thpt-r4-practice-card-grid");
  section.append(head,grid);
  const definitions=[
   ["SGK_CORE","Core",topicFor(topic,bank).filter(q=>q.role==="SGK_CORE"),"formative"],
   ["SGK_PRACTICE","Luyện tập",topicFor(topic,bank).filter(q=>q.role==="SGK_PRACTICE"),"formative"],
   ["SGK_APPLICATION","Vận dụng",topicFor(topic,bank).filter(q=>q.role==="SGK_APPLICATION"),"formative"],
   ["SGK_WRITTEN","Tự luận",bank.written.filter(q=>groupOf(q)===topic),"written"]
  ];
  for(const [role,label,items,itemKind]of definitions){
   if(!items.length)continue;
   const card=mk("section","thpt-r4-practice-card");card.dataset.thptGrade="11";
   const copy=mk("div");
   copy.append(mk("p","thpt-r4-practice-card-kind",label),
    mk("strong","",title+" · "+label),
    mk("small","",items.length+" câu · "+(role==="SGK_WRITTEN"?"Rubric /4":"Một câu mỗi lần")+" · Tự đối chiếu"));
   const button=mk("button","thpt-r4-practice-open","✎ Mở "+label);
   button.type="button";button.dataset.g11SuppOpen=topic+"-"+role;
   button.setAttribute("aria-expanded","false");
   card.append(copy,button);grid.append(card);
   const panel=mk("div","g11-supp-role-panel");panel.hidden=true;
   panel.dataset.g11SuppTopic=topic;panel.dataset.g11SuppRole=role;
   const questions=items.map((q,n)=>exerciseCard(q,itemKind,n+1));
   questions.forEach(q=>panel.append(q));
   compactDeck(panel,questions,label);
   panels.push({panel,button,section,questions});
   button.addEventListener("click",()=>{
    const already=!panel.hidden;
    for(const entry of panels){
     entry.panel.hidden=true;entry.button.setAttribute("aria-expanded","false");
    }
    if(!already){
     panel.hidden=false;button.setAttribute("aria-expanded","true");
     panel.scrollIntoView({block:"nearest"});
    }
   });
   section.append(panel);
  }
  const back=mk("a","g11-supp-return",experience?"Về kiến thức hoạt động này":"Về kiến thức chủ điểm này");
  back.href=experience?(topic==="E01"?"../trai-nghiem-e01/":"../trai-nghiem-e02/"):
    "../on-tap-cuoi-nam/#g11-supp-"+topic.toLowerCase();
  section.append(back);root.append(section);
 }
 const hash=decodeURIComponent(location.hash.replace(/^#/,""));
 if(hash){
  const match=panels.find(p=>p.questions.some(q=>q.id===hash));
  if(match){match.panel.hidden=false;match.button.setAttribute("aria-expanded","true")}
 }
 typeset(root);
};
const selfCheck=(root,bank,unit)=>{
 miniNav(root);
 const picked=[];const seen=new Set();
 const isExp=unit==="EXPERIENCE";
 for(const q of bank.items){
  if(q.role==="SGK_CORE"||seen.has(q.outcome_id))continue;
  if((groupOf(q)==="E01"||groupOf(q)==="E02")!==isExp)continue;
  seen.add(q.outcome_id);picked.push(q);
 }
 if(picked.length!==11){root.append(paragraph("Chưa đủ 11 outcome của phần này để tự đối chiếu."));return}
 header(root,isExp?"TOÁN 11 · HOẠT ĐỘNG THỰC HÀNH":"TOÁN 11 · BÀI TẬP ÔN TẬP CUỐI NĂM",
   isExp?"Tự kiểm tra Trải nghiệm":"Tự kiểm tra và đối chiếu cuối năm");
 root.append(paragraph("Tự giải 11 câu của đúng phần học, sau đó nhấn Final Submit để đối chiếu lời giải. Đây là tự ôn công khai, không chấm điểm hoặc ghi Mastery."));
 const form=mk("div","g11-supp-selfcheck");
 const answers=[];
 for(const [i,q]of picked.entries()){
  const section=mk("section","g11-supp-exercise");
  section.dataset.canonicalItem=q.item_id;
  section.append(mk("h3","","Câu "+(i+1)+" / 11"),paragraph(q.stem));
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
   answer.append(mk("h4","","Lời giải để tự đối chiếu"),paragraph(q.answer));
  });
  status.textContent="Đã nộp. Hãy đối chiếu từng bước giải; kết quả không được chấm điểm hoặc lưu lại.";
  typeset(form);
 });
 compactDeck(form,[...form.querySelectorAll(":scope > .g11-supp-exercise")],isExp?"Tự kiểm tra Trải nghiệm":"Tự kiểm tra cuối năm");
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
  root.replaceChildren();root.dataset.g11SuppBound="true";
  if(view==="E01"||view==="E02"||view==="YEAR")course(root,bank,view);
  else if(view==="EXP_PRACTICE")practiceHub(root,bank,"EXPERIENCE");
  else if(view==="YEAR_PRACTICE")practiceHub(root,bank,"YEAR");
  else if(view==="PRACTICE")practice(root,bank,"formative");
  else if(view==="WRITTEN")practice(root,bank,"written");
  else if(view==="SELFCHECK_EXP")selfCheck(root,bank,"EXPERIENCE");
  else if(view==="SELFCHECK")selfCheck(root,bank,"YEAR");
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
