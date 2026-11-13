/* G Learning · SGK Toán 10 · self-check after Final Submit only.
 * Client-side self-assessment: never writes local learner history or Skill Mastery.
 * Canonical source: 9 NotebookLM-reviewed G10 RD1 snapshots, checked separately.
 */
(() => {
  "use strict";
  const expected = Object.freeze({CHI:14,CHII:14,CHIII:14,CHIV:21,CHV:18,CHVI:20,CHVII:22,CHVIII:14,CHIX:6});
  const scriptUrl = document.currentScript && document.currentScript.src;
  const create = (tag,cls,txt) => {
    const x=document.createElement(tag);
    if(cls)x.className=cls;
    if(txt!==undefined)x.textContent=String(txt);
    return x;
  };
  // DELTA_A_UI: All nine G10 self-check chapters share this safe presentational
  // formatter. Original reviewed stems, keys, solutions and rubrics remain
  // unchanged in the exact canonical JSON; only DOM rendering differs.
  // DELTA_A_UI: safe recursive display parsing for all G10 self-check items.
  // Source JSON and post-Final-Submit access remain exactly unchanged.
  const rich=(parent,value)=>{
    const container=create("div","g10sc-rich");
    const plain=(dst,s)=>{
      s.split("\n").forEach((line,i)=>{
        if(i)dst.append(document.createElement("br"));
        if(line)dst.append(document.createTextNode(line));
      });
    };
    const math=(dst,expr,display=false)=>{
      const node=create(display?"div":"span",display?"g10sc-math-display":"g10sc-math-inline");
      node.textContent=(display?"\\[":"\\(")+expr+(display?"\\]":"\\)");
      dst.append(node);
    };
    const tokens=/\$\$[\s\S]+?\$\$|\$[^$\n]+\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\)|\x60[^\x60\n]+\x60|\*\*[^*]+\*\*|\\overrightarrow\{[^}]+\}|\\vec(?:\{[A-Za-z0-9]+\}|[A-Za-z0-9]+)|\\bar(?:\{[A-Za-z0-9]+\}|[A-Za-z0-9]+)/g;
    const insert=(dst,input)=>{
      const source=String(input??"");
      let from=0;
      for(const match of source.matchAll(tokens)){
        const token=match[0],start=match.index;
        if(start>from)plain(dst,source.slice(from,start));
        if(token.startsWith("$$"))math(dst,token.slice(2,-2),true);
        else if(token.startsWith("$"))math(dst,token.slice(1,-1));
        else if(token.startsWith("\\["))math(dst,token.slice(2,-2),true);
        else if(token.startsWith("\\("))math(dst,token.slice(2,-2));
        else if(token.startsWith("\x60")){
          const inner=token.slice(1,-1);
          if(/\\(?:bar|vec|overrightarrow|Delta|delta|frac|sqrt|mathbb|le|ge|in)\b/.test(inner))math(dst,inner);
          else{const el=create("code");el.textContent=inner;dst.append(el)}
        }else if(token.startsWith("**")){
          const strong=create("strong");
          // Nested original $...$ inside **emphasis** must still typeset,
          // notably reviewed ChVIII RD1-03.
          insert(strong,token.slice(2,-2));dst.append(strong);
        }else if(token.startsWith("\\"))math(dst,token);
        else plain(dst,token);
        from=start+token.length;
      }
      if(from<source.length)plain(dst,source.slice(from));
    };
    insert(container,value);
    parent.append(container);
  };
  const typeset=root=>{
    const run=()=>{
      if(!root.isConnected)return;
      const mj=window.MathJax;
      if(!mj)return;
      const ready=mj.startup?.promise;
      const process=()=>{
        if(!root.isConnected||typeof mj.typesetPromise!=="function")return;
        mj.typesetClear?.([root]);
        return mj.typesetPromise([root]);
      };
      if(ready?.then)void ready.then(process).catch(()=>{});
      else void process().catch(()=>{});
    };
    if(window.MathJax?.typesetPromise)run();
    else if(document.readyState!=="complete")
      window.addEventListener("load",run,{once:true});
  };
  const mcqKey=q=>{
    if(q.type!=="MCQ_SINGLE"||q.optional)return null;
    const m=String(q.answer||"").trim().match(/^\(?([ABCD])\)?(?=$|[.,;:\s(])/);
    return m?m[1]:null;
  };
  const tfKey=q=>{
    if(q.type!=="TRUE_FALSE_GROUP"||q.optional)return null;
    const raw=String(q.answer||"").trim();
    const compact=raw.replace(/^\(/,"").replace(/\)\s*\.?$/,"").trim();
    const tokens=compact.split(/\s*[,;]\s*/).map(x=>x.trim());
    if(tokens.length>=2&&tokens.length<=8&&tokens.every(x=>x==="Đ"||x==="S"))return tokens;
    // The reviewed sources also record grouped keys as "(a) Đ; (b) Sai; ...".
    const rex=/\(([a-h])\)\s*(Đúng|Sai|Đ|S)(?=\s*(?:;|,|\.|$))/gu;
    const segments=[...raw.matchAll(rex)];
    if(segments.length<2||segments.length>8)return null;
    if(segments.some((m,i)=>m[1]!==String.fromCharCode(97+i)))return null;
    if(raw.replace(rex,"").replace(/[;,\s.]/g,"")!=="")return null;
    return segments.map(m=>m[2]==="Đ"||m[2]==="Đúng"?"Đ":"S");
  };
  const gradingKey=q=>mcqKey(q)||tfKey(q);
  function mount(root,book){
    const items=book.items;
    let cursor=0,submitted=false;
    const answers=items.map(q=>q.type==="TRUE_FALSE_GROUP"&&tfKey(q)?tfKey(q).map(()=>null):"");
    root.dataset.g10scBound="true";
    root.replaceChildren();
    const heading=create("h2","g10sc-heading","Tự kiểm tra cuối chương "+book.chapter_label);
    const notice=create("p","g10sc-notice","Bài tự đánh giá. Chỉ xem đáp án và lời giải sau Final Submit; kết quả không ghi tiến độ hay Skill Mastery.");
    const progress=create("p","g10sc-progress");
    const nav=create("div","g10sc-jump");
    const body=create("section","g10sc-body");
    const controls=create("div","g10sc-controls");
    const prev=create("button","g10sc-button","Câu trước");
    const next=create("button","g10sc-button","Câu tiếp");
    const final=create("button","g10sc-button g10sc-final","Final Submit");
    prev.type=next.type=final.type="button";
    prev.dataset.g10scPrev="";next.dataset.g10scNext="";final.dataset.g10scFinal="";
    const report=create("section","g10sc-report");
    controls.append(prev,next,final);
    root.append(heading,notice,progress,nav,body,controls,report);
    const render=()=>{
      const q=items[cursor], answer=answers[cursor];
      progress.textContent="Câu "+(cursor+1)+" / "+items.length+(submitted?" · Đã nộp":" · Chưa nộp");
      nav.replaceChildren();
      items.forEach((_,j)=>{
        const b=create("button","g10sc-jump-button"+(cursor===j?" is-current":""),String(j+1));
        b.type="button";b.dataset.g10scJump=String(j);b.setAttribute("aria-label","Đến câu "+(j+1));
        b.addEventListener("click",()=>{cursor=j;render()});nav.append(b);
      });
      body.replaceChildren();
      body.append(create("h3","","Câu "+(cursor+1)+(q.optional?" · Tự chọn":"")));
      rich(body,q.stem);
      const field=create("div","g10sc-answer");
      const key=gradingKey(q);
      if(q.type==="MCQ_SINGLE"&&typeof key==="string"){
        field.append(create("p","","Chọn một phương án:"));
        for(const option of ["A","B","C","D"]){
          const label=create("label","g10sc-choice"),input=create("input");
          input.type="radio";input.name="g10sc-mcq";input.value=option;
          input.checked=answer===option;input.disabled=submitted;
          input.addEventListener("change",()=>{if(!submitted)answers[cursor]=option});
          label.append(input,document.createTextNode(" "+option));field.append(label);
        }
      }else if(q.type==="TRUE_FALSE_GROUP"&&Array.isArray(key)){
        field.append(create("p","","Ghi Đ/S lần lượt theo các nhận định trong đề:"));
        key.forEach((_,j)=>{
          const group=create("fieldset","g10sc-tf");group.append(create("legend","","Ý "+String.fromCharCode(97+j)));
          for(const val of ["Đ","S"]){
            const label=create("label","g10sc-choice"),input=create("input");
            input.type="radio";input.name="g10sc-tf-"+j;input.value=val;
            input.checked=Array.isArray(answer)&&answer[j]===val;input.disabled=submitted;
            input.addEventListener("change",()=>{if(!submitted)answers[cursor][j]=val});
            label.append(input,document.createTextNode(" "+(val==="Đ"?"Đúng":"Sai")));group.append(label);
          }field.append(group);
        });
      }else{
        field.append(create("p","g10sc-manual","Bài giải tự đối chiếu (không chấm máy):"));
        const input=create("textarea","g10sc-textarea");
        input.rows=5;input.placeholder="Em ghi câu trả lời hoặc cách giải vào đây…";
        input.value=typeof answer==="string"?answer:"";input.disabled=submitted;
        input.addEventListener("input",()=>{if(!submitted)answers[cursor]=input.value});
        field.append(input);
      }
      body.append(field);
      if(submitted){
        const result=create("section","g10sc-review");
        const expectedKey=gradingKey(q);
        if(!expectedKey)result.append(create("p","","Tự đối chiếu — không chấm tự động."));
        else{
          const ok=Array.isArray(expectedKey)?
            expectedKey.every((k,j)=>Array.isArray(answer)&&answer[j]===k):
            expectedKey===answer;
          result.append(create("p","g10sc-verdict",ok?"Đúng theo đáp án đã review.":"Chưa khớp đáp án — xem cách giải bên dưới."));
        }
        const label=(t,v)=>{if(v){result.append(create("strong","",t));rich(result,v)}};
        label("Đáp án:",q.answer);label("Lời giải:",q.solution);
        if(q.rubric)label("Hướng dẫn tự đối chiếu:",q.rubric);
        body.append(result);
      }
      prev.disabled=cursor===0;next.disabled=cursor===items.length-1;final.hidden=submitted;
      typeset(body);
    };
    const submit=()=>{
      if(submitted)return;
      submitted=true;
      let correct=0,gradable=0,manual=0,unanswered=0;
      items.forEach((q,i)=>{
        const k=gradingKey(q),a=answers[i];
        if(!k){manual++;if(!String(a||"").trim())unanswered++;return}
        gradable++;
        const filled=Array.isArray(a)?a.every(x=>x!==null):Boolean(a);
        if(!filled)unanswered++;
        if(Array.isArray(k)?k.every((x,j)=>Array.isArray(a)&&a[j]===x):k===a)correct++;
      });
      report.replaceChildren(create("h3","","Kết quả tự đánh giá — không phải điểm khảo thí"),
        create("p","","Phần có khóa chấm máy: "+correct+" / "+gradable+" câu."),
        create("p","","Cần tự đối chiếu lời giải/rubric: "+manual+" câu."),
        create("p","","Chưa trả lời: "+unanswered+" câu."),
        create("p","","Không ghi Skill Mastery hoặc tiến độ; em có thể ôn lại các câu chưa đúng."));
      render();report.scrollIntoView({block:"nearest",behavior:"smooth"});
    };
    prev.addEventListener("click",()=>{if(cursor>0){cursor--;render()}});
    next.addEventListener("click",()=>{if(cursor<items.length-1){cursor++;render()}});
    final.addEventListener("click",submit);
    render();
  }
  async function start(){
    for(const root of document.querySelectorAll("[data-g10-chapter-selfcheck]")){
      if(root.dataset.g10scBound)return;
      const chapter=root.getAttribute("data-g10-chapter-selfcheck");
      if(!Object.prototype.hasOwnProperty.call(expected,chapter))continue;
      root.replaceChildren(create("p","","Đang tải bộ Tự kiểm tra đã review…"));
      try{
        if(!scriptUrl)throw Error("missing script path");
        const url=new URL("../data/thpt-g10-readiness/"+chapter+".json",scriptUrl);
        const response=await fetch(url);
        if(!response.ok)throw Error("HTTP "+response.status);
        const book=await response.json();
        if(book.schema!=="thpt-g10-reviewed-selfcheck-v1"||
           book.scope!=="SGK_CHAPTER_READINESS"||book.chapter!==chapter||
           !Array.isArray(book.items)||book.items.length!==expected[chapter]||
           new Set(book.items.map(x=>x.item_id)).size!==book.items.length||
           book.mastery_credit!==false||book.persist_results!==false||
           !book.items.every(x=>x.item_id&&x.stem&&x.answer&&x.solution))
          throw Error("source/structure mismatch");
        mount(root,book);
      }catch(err){
        root.dataset.g10scBound="error";
        root.replaceChildren(create("p","g10sc-error","Bài tự kiểm tra chưa thể tải đúng nguồn. Chưa có kết quả nào được ghi. Có thể quay lại phần Luyện tập."));
        console.error("G10 self-check source blocked:",chapter,err);
      }
    }
  }
  if(window.document$&&typeof window.document$.subscribe==="function")window.document$.subscribe(start);
  else if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);
  else start();
})();
