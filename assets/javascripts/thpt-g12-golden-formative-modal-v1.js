/* G12 RELEASE Golden R4 UI-only: one-question Core/Practice modal, source-locked PUBLIC only. */
(()=>{"use strict";
const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=String(text);return n};
const para=(text)=>{const p=el("p");format(p,text);p.style.whiteSpace="pre-line";return p};
const format=(root,input)=>{
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
   const script=el(op==="^"?"sup":"sub","thpt-g12-golden-math-script",parsed.value);
   target.append(script);i=parsed.end-1;
  }
  flush();
 };
 const appendMarked=(segment)=>{
  const reg=/(?:\x60[^\x60\n]+\x60|\*\*[^*\n]+\*\*)/g;let cursor=0;
  for(const m of segment.matchAll(reg)){
   if(m.index>cursor)bare(root,segment.slice(cursor,m.index));
   const code=m[0][0]==="\x60",span=el(code?"span":"strong",code?"thpt-g12-golden-inline-notation":"");
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
     const mathNode=el(display?"div":"span",display?"thpt-g12-golden-math-display":"thpt-g12-golden-math-inline");
     mathNode.textContent=(display?"\\[":"\\(")+latex+(display?"\\]":"\\)");
     root.append(mathNode);i=end+close.length;continue;
    }
   }
  }
  buffer+=text[i++];
 }
 flush();
};
const math=root=>{const m=window.MathJax;if(m?.typesetPromise){const go=()=>m.typesetPromise([root]).catch(()=>{});if(m.startup?.promise)void m.startup.promise.then(go).catch(()=>{});else void go()}};
const anchor=id=>String(id).toLowerCase().replace(/[^a-z0-9-]/g,"-");
const expected={I:[10,66],II:[6,64],III:[4,48],IV:[6,88],V:[9,96],VI:[4,56]};
function mount(root,bank,{chapter}={}){
 const golden=window.THPT_GOLDEN_RUNTIME;if(!golden)throw Error("GOLDEN_RUNTIME_MISSING: G12 Ch I–VI");
 if(!expected[chapter]||!root?.matches('[data-g12-chi-hub],[data-g12-chii-hub],[data-g12-chiii-hub],[data-g12-chiv-hub],[data-g12-chv-hub],[data-g12-chvi-hub]')||bank?.mode!=="CLIENT_SELF_CHECK_NO_MASTERY")throw Error("G12 Golden: invalid scope");
 const details=[...root.querySelectorAll(".thpt-r4-practice-card-grid > details.thpt-r4-practice-card")];
 if(details.length!==expected[chapter][0])throw Error("G12 Golden: missing Core/Practice groups");
 const original=new Map(bank.items.map(x=>[x.item_id,x])),seen=new Set(),byGroup=new Map(),byItem=new Map(),draft=new Map();
 if(original.size!==bank.items.length)throw Error("G12 Golden: duplicate source IDs");
 const dialog=el("dialog","thpt-r4-practice-dialog thpt-g12-golden-dialog");
 dialog.dataset.g12GoldenDialog=chapter;
 const head=el("div","thpt-r4-modal-top");
 const badge=el("span","thpt-r4-modal-lesson-badge","12"),heading=el("div","thpt-r4-modal-heading");
 const meta=el("p","thpt-r4-modal-meta","LỚP 12 · CHƯƠNG "+chapter),title=el("h2","","Core và Luyện tập");
 const close=el("button","","Đóng ×");close.type="button";close.setAttribute("aria-label","Đóng cửa sổ");
 heading.append(meta,title);head.append(badge,heading,close);
 const body=el("div","thpt-r4-modal-main");dialog.append(head,body);document.body.append(dialog);
 let group=null,cursor=0,returnFocus=null;
 const lifecycle=golden.bindDialog({dialog,closeButton:close,getReturnFocus:()=>returnFocus});
 const render=()=>{
  const records=group.items,q=records[cursor];
  window.MathJax?.typesetClear?.([body]);body.replaceChildren();
  const prog=el("p","thpt-r4-modal-progress","Câu "+(cursor+1)+" / "+records.length+" · Luyện tập tương tác, không ghi điểm");
  const nav=el("div","thpt-r4-modal-question-nav");
  golden.renderNav({container:nav,count:records.length,index:cursor,onSelect:i=>{cursor=i;render()}});
  const card=el("article","thpt-r4-reviewed-formative-card thpt-g12-golden-question");
  card.dataset.thptCanonicalItem=q.item_id;card.dataset.thptExposureRole=q.placement||q.role||"";
  const prompt=el("h3");format(prompt,q.stem);
  const form=el("form","thpt-r4-formative-answer");const label=el("label","thpt-r4-formative-text-label","Nhập câu trả lời hoặc các bước giải của em");
  const area=el("textarea");area.rows=3;area.placeholder="Nhập đáp án hoặc cách làm trước khi đối chiếu";area.setAttribute("aria-label","Lời giải của em");
  let state=draft.get(q.item_id);if(!state){state={text:"",submitted:false};draft.set(q.item_id,state)}
  area.value=state.text;area.disabled=state.submitted;
  area.addEventListener("input",()=>{if(!state.submitted)state.text=area.value});
  label.append(area);
  const submit=el("button","thpt-r4-formative-submit","Nộp và đối chiếu lời giải");submit.type="submit";submit.disabled=state.submitted;
  const feedback=el("p","thpt-r4-formative-feedback");feedback.setAttribute("role","status");
  // The PUBLIC formative answer follows the existing G10/G11 Golden controls:
  // explicit "Đáp án / Lời giải" disclosure, auto-expanded after a self-attempt.
  // This adapter is never mounted on Q16 protected Final Submit routes.
  const postCompareGate=chapter==="I"&&bank.targeted_delta?.item_ids?.includes(q.item_id)&&Boolean(q.solution);
  const solution=el("details","thpt-g12-golden-solution");
  if(postCompareGate&&!state.submitted)solution.hidden=true;
  solution.dataset.g12GoldenSolutionFor=q.item_id;
  const solutionSummary=el("summary","","📖 Đáp án / Lời giải");
  const result=el("div","thpt-r4-formative-reveal");
  const worked=Boolean(String(q.answer??"").trim()||String(q.solution??"").trim());
  result.append(el("h4","",worked?"Đáp án và lời giải đã duyệt":"Tiêu chí tự đối chiếu đã duyệt (nguồn chưa có lời giải chi tiết)"));
  if(q.answer!==undefined)result.append(para(q.answer));
  if(q.solution!==undefined)result.append(para(q.solution));
  if(q.conditions)result.append(el("h4","","Điều kiện / giới hạn"),para(q.conditions));
  if(q.rubric){result.append(el("h4","","Tiêu chí tự đối chiếu tự luận /"+(chapter==="I"?"4":"5")));for(const r of Array.isArray(q.rubric)?q.rubric:[q.rubric])result.append(para(r))}
  solution.append(solutionSummary,result);
  solution.addEventListener("toggle",()=>{if(solution.open)math(solution)});
  form.append(label,submit,feedback);
  form.addEventListener("submit",e=>{
   e.preventDefault();if(state.submitted)return;
   if(!area.value.trim()){feedback.textContent="Hãy tự làm trước khi đối chiếu.";return}
   state.text=area.value;state.submitted=true;area.disabled=true;submit.disabled=true;
   if(postCompareGate)solution.hidden=false;
   solution.open=true;
   feedback.textContent="Đã nộp. Tự đối chiếu, không chấm điểm hay ghi Mastery.";
   math(body);
  });
  const actions=el("div","thpt-r4-formative-actions");
  const help=bank.help?.find(h=>h.outcome_id===q.outcome_id&&h.lesson_id===q.lesson_id)
    ||bank.help?.find(h=>h.outcome_id===q.outcome_id);
  if(help){
   const hintText=help.steps?.[1]||help.steps?.[0]||help.body?.split(/\n/)[0]||help.review_path;
   if(hintText){
    const d=el("details"),s=el("summary","","💡 Gợi ý"),p=el("div","thpt-r4-formative-reveal");
    format(p,hintText);d.append(s,p);actions.append(d);
   }
  }
  actions.append(solution);
  // D6 remediation is linked to the CURRENT question by outcome_id.
  // Reproduce the locked 5-step source verbatim, do not rewrite math/content.
  if(help){
   const d6=el("details","thpt-g12-golden-d6");
   d6.dataset.g12GoldenD6Outcome=help.outcome_id;
   const d6Summary=el("summary","","🧭 Khi gặp khó khăn");
   const wrap=el("div","thpt-g12-golden-d6-body");
   wrap.append(el("p","thpt-g12-golden-d6-intro","Dùng khi em chưa biết bắt đầu, làm sai hoặc muốn tìm lại kiến thức liên quan."));
   if(help.steps?.length){
    const ol=el("ol","thpt-g12-golden-d6-steps");
    for(const step of help.steps){const li=el("li");format(li,step);ol.append(li)}
    wrap.append(ol);
   }else if(help.body){
    wrap.append(para(help.body));
   }else if(help.review_path){
    wrap.append(para("Vị trí ví dụ cần ôn tập: "+help.review_path));
   }
   const links=el("div","thpt-g12-golden-d6-links");
   for(const [id,name] of [[help.return_item,"Quay lại câu liên quan"],[help.practice_item,"Luyện tập lại"]]){
    if(!id||!original.has(id))continue;
    const button=el("button","thpt-g12-golden-d6-link",name);
    button.type="button";button.dataset.g12GoldenD6Target=id;
    button.addEventListener("click",()=>{
     const target=byItem.get(anchor(id));
     if(target)open(target.entry,target.i);
    });
    links.append(button);
   }
   wrap.append(links);d6.append(d6Summary,wrap);actions.append(d6);
  }
  const back=el("a","thpt-r4-remediation-link","↶ Ôn lại kiến thức Bài "+Number(group.lesson.slice(1)));
  back.href=group.optional?"../mo-rong-sau-bai-17/":"../bai-"+Number(group.lesson.slice(1))+"/";actions.append(back);
  card.append(prompt,form,actions);
  const controls=el("div","thpt-r4-modal-buttons"),prev=el("button","","← Câu trước"),next=el("button","","Câu tiếp →");
  prev.type=next.type="button";prev.disabled=cursor===0;next.disabled=cursor===records.length-1;
  golden.bindPager({prev,next,getIndex:()=>cursor,getCount:()=>records.length,go:i=>{cursor=i;render()}});
  controls.append(prev,next);body.append(prog,nav,card,controls);
  if(state.submitted){solution.open=true;feedback.textContent="Đã nộp. Tự đối chiếu, không chấm điểm hay ghi Mastery."}
  math(body);
 };
 const open=(entry,i=0)=>{
  group=entry;returnFocus=entry.button;cursor=Math.max(0,Math.min(entry.items.length-1,i));
  title.textContent=(entry.optional?"Mở rộng":entry.practice?"Luyện tập":"Core")+" · Bài "+Number(entry.lesson.slice(1))+". "+entry.lessonTitle;
  badge.textContent=String(Number(entry.lesson.slice(1)));render();lifecycle.open(entry.button);
 };
 for(const old of details){
  const match=/^b(\d{2})-(core|practice|optional)$/.exec(old.id);if(!match)throw Error("G12 Golden: unexpected group "+old.id);
  const lesson="B"+match[1],practice=match[2]!=="core",optional=match[2]==="optional";
  const ids=[...old.querySelectorAll("[data-canonical-item]")].map(x=>x.dataset.canonicalItem);
  if(!ids.length||new Set(ids).size!==ids.length)throw Error("G12 Golden: missing item placements");
  const items=ids.map(id=>{const q=original.get(id);if(!q||seen.has(id))throw Error("G12 Golden: invalid canonical "+id);seen.add(id);return q});
  if(chapter==="V"&&items.some(q=>Boolean(q.optional_after_b17)!==optional))throw Error("G12 Golden: O07 optional placement");
  const lessonTitle=old.closest(".thpt-r4-practice-lesson")?.querySelector("h2")?.textContent?.trim()||"";
  const summary=old.querySelector(":scope > summary");
  const card=el("section","thpt-r4-practice-card thpt-g12-golden-card");card.id=old.id;card.dataset.thptGrade="12";card.dataset.g12GoldenGroup=old.id;
  const copy=el("div");
  copy.append(el("p","thpt-r4-practice-card-kind",summary?.firstElementChild?.textContent||"Core"),el("strong","",summary?.querySelector("strong")?.textContent||"Tự luyện"),el("p","thpt-r4-practice-card-desc",items.length+" câu gốc · Làm từng câu"));
  const button=el("button","thpt-r4-practice-open",optional?"✎ Mở rộng tự chọn":practice?"✎ Luyện tập":"✎ Mở Core");
  button.type="button";button.dataset.g12GoldenOpen=old.id;
  const entry={id:old.id,lesson,lessonTitle,practice,optional,items,button};
  button.addEventListener("click",()=>open(entry));byGroup.set(old.id,entry);
  items.forEach((q,i)=>byItem.set(anchor(q.item_id),{entry,i}));
  card.append(copy,button);old.replaceWith(card);
 }
 // Five-step D6 lives in the per-question Golden dialog. The earlier bulk
 // chapter-level help index was an unapproved second UI; keep its original
 // canonical data in bank.help, but remove duplicated on-page accordion markup.
 // Item-ID deep links continue to resolve through the existing modal mapping.
 for(const panel of root.querySelectorAll('details[class*="-hub-help"]'))panel.remove();
 if(seen.size!==expected[chapter][1])throw Error("G12 Golden: missing source items "+seen.size);
 const follow=()=>{
  const hash=decodeURIComponent(location.hash.slice(1)).toLowerCase();
  if(byItem.has(hash)){const item=byItem.get(hash);open(item.entry,item.i)}
  else if(byGroup.has(hash))open(byGroup.get(hash));
 };
 root.addEventListener("click",e=>{
  const link=e.target.closest('a[href^="#"]');if(!link||!root.contains(link))return;
  const key=decodeURIComponent(link.getAttribute("href").slice(1)).toLowerCase(),item=byItem.get(key),target=byGroup.get(key);
  if(!item&&!target)return;
  e.preventDefault();e.stopImmediatePropagation();
  if(item)open(item.entry,item.i);else open(target);
  if(location.hash.slice(1).toLowerCase()!==key)history.replaceState(null,"","#"+key);
 },true);
 window.addEventListener("hashchange",follow);follow();
 root.dataset.g12GoldenHubReady="true";root.dataset.g12GoldenItemCount=String(seen.size);return true;
}
window.THPT_G12_GOLDEN_HUB=Object.freeze({mount});
})();
