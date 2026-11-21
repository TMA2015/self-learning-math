/* G Learning · SGK Toán 11 · self-check after Final Submit only.
 * Client-side self-assessment: never writes local learner history or Skill Mastery.
 * Canonical source: one reviewed 20-item ChI RD1 snapshot converted to voluntary public client self-check per owner Issue #662.
 */
(() => {
  "use strict";
  const expected = Object.freeze({CHI:20,CHII:15,CHIII:12,CHIV:17,CHV:13,CHVI:20,CHVII:18,CHVIII:20,CHIX:31});
  const scriptUrl = document.currentScript && document.currentScript.src;
  const create = (tag,cls,txt) => {
    const x=document.createElement(tag);
    if(cls)x.className=cls;
    if(txt!==undefined)x.textContent=String(txt);
    return x;
  };
  // RELEASE DELTA_A_UI: reuse tested G10 chapter self-check safe TeX/notation renderer.
  // All G11 canonical source banks, Q16 answer guards and Mastery remain unchanged.
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
        create("p","","Câu khách quan có thể chấm bằng khóa: "+correct+" / "+gradable+" câu."),
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
    for(const root of document.querySelectorAll("[data-g11-chapter-selfcheck]")){
      if(root.dataset.g10scBound)return;
      const chapter=root.getAttribute("data-g11-chapter-selfcheck");
      if(!Object.prototype.hasOwnProperty.call(expected,chapter))continue;
      root.replaceChildren(create("p","","Đang tải bộ Tự kiểm tra đã review…"));
      try{
        if(!scriptUrl)throw Error("missing script path");
        const url=new URL("../data/thpt-g11-selfcheck/"+chapter+".json",scriptUrl);
        const response=await fetch(url);
        if(!response.ok)throw Error("HTTP "+response.status);
        const book=await response.json();
        if(chapter==="CHIX"){
          // Original PUBLIC Practice refs only; 31 protected RD1 remain owner-private.
          const bank=window.THPT_G11_CHIX_REVIEWED_FORMATIVE;
          if(!bank||!bank.validate().valid||bank.contentVersion!==book.original_public_bank_version||
             book.mode!=="PUBLIC_CANONICAL_REFERENCE_ONLY"||
             book.original_public_source_blob!=="3fe3b1a12fac656b543ba3ba2743e3ba855c4fe0"||
             !Array.isArray(book.item_refs)||book.item_refs.length!==31||new Set(book.item_refs).size!==31)throw Error("CHIX source-locked PUBLIC reference mismatch");
          const byId=new Map(bank.records.map(q=>[q.item_id,q]));
          const chosen=book.item_refs.map(id=>{
            const q=byId.get(id);
            if(!q||q.exposure!=="FORMATIVE_ONLY"||!(q.role==="PRACTICE"||q.role==="APPLICATION"))throw Error("CHIX unreviewed/private id: "+id);
            const p=q.solution.split("\nLời giải: ");
            if(p.length!==2||!p[0].startsWith("Đáp án: ")||!p[1])throw Error("CHIX source-locked solution missing");
            return {item_id:q.item_id,type:"FREE_TEXT",stem:q.stem,answer:p[0].slice("Đáp án: ".length),solution:p[1],outcome_id:q.skill};
          });
          if(new Set(chosen.map(q=>q.outcome_id)).size!==31)throw Error("CHIX Practice skill coverage mismatch");
          book.items=chosen;
        }
        if(chapter==="CHVIII"){
           // Exact reviewed PUBLIC Practice/Application bank. 20 protected RD1 items stay outside site.
           const bank=window.THPT_G11_CHVIII_REVIEWED_FORMATIVE;
           if(!bank||!bank.validate().valid||bank.contentVersion!==book.original_public_bank_version||
              book.mode!=="PUBLIC_CANONICAL_REFERENCE_ONLY"||
              book.original_public_source_blob!=="fde4f8be91b5884b4559fef59fde46cf826c2bc9"||
              !Array.isArray(book.item_refs)||book.item_refs.length!==20||
              new Set(book.item_refs).size!==20)throw Error("CHVIII original public bank/reference mismatch");
           const byId=new Map(bank.records.map(q=>[q.item_id,q]));
           const chosen=book.item_refs.map(id=>{
             const q=byId.get(id);
             if(!q||q.exposure!=="FORMATIVE_ONLY"||!(q.role==="PRACTICE"||q.role==="APPLICATION"))throw Error("Unreviewed/private ChVIII ID: "+id);
             const parts=q.solution.split("\nLời giải: ");
             if(parts.length!==2||!parts[0].startsWith("Đáp án: ")||!parts[1])throw Error("ChVIII original solution missing");
             return {item_id:q.item_id,type:"FREE_TEXT",stem:q.stem,answer:parts[0].slice("Đáp án: ".length),solution:parts[1],outcome_id:q.skill};
           });
           if(new Set(chosen.map(q=>q.outcome_id)).size!==19)throw Error("ChVIII Practice skill coverage duplicated");
           book.items=chosen;
         }
         if(chapter==="CHVII"){
           // Exact reviewed PUBLIC Practice/Application bank. 33 protected RD1 items stay outside site.
           const bank=window.THPT_G11_CHVII_REVIEWED_FORMATIVE;
           if(!bank||!bank.validate().valid||bank.contentVersion!==book.original_public_bank_version||
              book.mode!=="PUBLIC_CANONICAL_REFERENCE_ONLY"||
              book.original_public_source_blob!=="afc8ec039213b87b4930f2d34d48c28d1fc6277f"||
              !Array.isArray(book.item_refs)||book.item_refs.length!==18||
              new Set(book.item_refs).size!==18)throw Error("CHVII original public bank/reference mismatch");
           const byId=new Map(bank.records.map(q=>[q.item_id,q]));
           const chosen=book.item_refs.map(id=>{
             const q=byId.get(id);
             if(!q||q.exposure!=="FORMATIVE_ONLY"||!(q.role==="PRACTICE"||q.role==="APPLICATION"))throw Error("Unreviewed/private ChVII ID: "+id);
             const parts=q.solution.split("\nLời giải: ");
             if(parts.length!==2||!parts[0].startsWith("Đáp án: ")||!parts[1])throw Error("ChVII original solution missing");
             return {item_id:q.item_id,type:"FREE_TEXT",stem:q.stem,answer:parts[0].slice("Đáp án: ".length),solution:parts[1],outcome_id:q.skill};
           });
           if(new Set(chosen.map(q=>q.outcome_id)).size!==18)throw Error("ChVII Practice skill coverage duplicated");
           book.items=chosen;
         }
         if(chapter==="CHVI"){
           // Exact reviewed PUBLIC Practice/Application bank. 22 protected RD1 items stay outside site.
           const bank=window.THPT_G11_CHVI_REVIEWED_FORMATIVE;
           if(!bank||!bank.validate().valid||bank.contentVersion!==book.original_public_bank_version||
              book.mode!=="PUBLIC_CANONICAL_REFERENCE_ONLY"||
              book.original_public_source_blob!=="17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872"||
              !Array.isArray(book.item_refs)||book.item_refs.length!==20||
              new Set(book.item_refs).size!==20)throw Error("CHVI original public bank/reference mismatch");
           const byId=new Map(bank.records.map(q=>[q.item_id,q]));
           const chosen=book.item_refs.map(id=>{
             const q=byId.get(id);
             if(!q||q.exposure!=="FORMATIVE_ONLY"||!(q.role==="PRACTICE"||q.role==="APPLICATION"))throw Error("Unreviewed/private ChVI ID: "+id);
             const parts=q.solution.split("\nLời giải: ");
             if(parts.length!==2||!parts[0].startsWith("Đáp án: ")||!parts[1])throw Error("ChVI original solution missing");
             return {item_id:q.item_id,type:"FREE_TEXT",stem:q.stem,answer:parts[0].slice("Đáp án: ".length),solution:parts[1],outcome_id:q.skill};
           });
           if(new Set(chosen.map(q=>q.outcome_id)).size!==20)throw Error("ChVI Practice skill coverage duplicated");
           book.items=chosen;
         }
         if(chapter==="CHV"){
           // Exact reviewed PUBLIC Practice/Application bank. 17 protected RD1 items stay outside site.
           const bank=window.THPT_G11_CHV_REVIEWED_FORMATIVE;
           if(!bank||!bank.validate().valid||bank.contentVersion!==book.original_public_bank_version||
              book.mode!=="PUBLIC_CANONICAL_REFERENCE_ONLY"||
              book.original_public_source_blob!=="7934757ed06de4ae4b63dbc351ef524fc054e0d0"||
              !Array.isArray(book.item_refs)||book.item_refs.length!==13||
              new Set(book.item_refs).size!==13)throw Error("CHV original public bank/reference mismatch");
           const byId=new Map(bank.records.map(q=>[q.item_id,q]));
           const chosen=book.item_refs.map(id=>{
             const q=byId.get(id);
             if(!q||q.exposure!=="FORMATIVE_ONLY"||!(q.role==="PRACTICE"||q.role==="APPLICATION"))throw Error("Unreviewed/private ChV ID: "+id);
             const parts=q.solution.split("\nLời giải: ");
             if(parts.length!==2||!parts[0].startsWith("Đáp án: ")||!parts[1])throw Error("ChV original solution missing");
             return {item_id:q.item_id,type:"FREE_TEXT",stem:q.stem,answer:parts[0].slice("Đáp án: ".length),solution:parts[1],outcome_id:q.skill};
           });
           if(new Set(chosen.map(q=>q.outcome_id)).size!==13)throw Error("ChV Practice skill coverage duplicated");
           book.items=chosen;
         }
         if(chapter==="CHIV"){
           // Exact R03 public D3 bank only. 22 independent RD1 remain private.
           const bank=window.THPT_G11_CHIV_REVIEWED_FORMATIVE;
           if(!bank||!bank.validate().valid||bank.contentVersion!==book.original_public_bank_version||
              book.mode!=="PUBLIC_CANONICAL_REFERENCE_ONLY"||
              book.original_public_source_blob!=="e945ccdd434689a5c6d8d7bfd44ba26d287a7b9b"||
              !Array.isArray(book.item_refs)||book.item_refs.length!==17||
              new Set(book.item_refs).size!==17)throw Error("CHIV R03 public reference mismatch");
           const byId=new Map(bank.records.map(q=>[q.item_id,q]));
           const selected=book.item_refs.map(id=>{
             const q=byId.get(id);
             if(!q||q.exposure!=="FORMATIVE_ONLY"||q.role!=="PRACTICE")throw Error("Unreviewed/private ChIV ID: "+id);
             const parts=q.solution.split("\nLời giải: ");
             if(parts.length!==2||!parts[0].startsWith("Đáp án: ")||!parts[1])throw Error("ChIV reviewed solution missing");
             return {item_id:q.item_id,type:"FREE_TEXT",stem:q.stem,
               answer:parts[0].slice("Đáp án: ".length),solution:parts[1],outcome_id:q.skill};
           });
           if(new Set(selected.map(q=>q.outcome_id)).size!==17)throw Error("Duplicate ChIV Practice skills");
           book.items=selected;
         }
         if(chapter==="CHIII"){
           // Only the reviewed PUBLIC formative bank; private 21 RD1 items excluded.
           const bank=window.THPT_G11_CHIII_REVIEWED_FORMATIVE;
           if(!bank||!bank.validate().valid||bank.contentVersion!==book.original_public_bank_version||
              book.mode!=="PUBLIC_CANONICAL_REFERENCE_ONLY"||
              book.original_public_source_blob!=="4ea8df2ca2682d9fac8b1556852334af336930a5"||
              !Array.isArray(book.item_refs)||book.item_refs.length!==12||
              new Set(book.item_refs).size!==12)throw Error("CHIII original source mismatch");
           const byId=new Map(bank.records.map(q=>[q.item_id,q]));
           const selected=book.item_refs.map(id=>{
             const q=byId.get(id);
             if(!q||q.exposure!=="FORMATIVE_ONLY"||q.role!=="PRACTICE")throw Error("Nonpublic/unreviewed ChIII ID "+id);
             const parts=q.solution.split("\nLời giải: ");
             if(parts.length!==2||!parts[0].startsWith("Đáp án: ")||!parts[1])throw Error("Missing original solution");
             return {item_id:q.item_id,type:"FREE_TEXT",stem:q.stem,
               answer:parts[0].slice("Đáp án: ".length),solution:parts[1],outcome_id:q.skill};
           });
           if(new Set(selected.map(q=>q.outcome_id)).size!==12)throw Error("Duplicate ChIII skill");
           book.items=selected;
         }
         if(chapter==="CHII"){
          // Placement-only: source of truth remains the original reviewed PUBLIC formative bank.
          // Never copy PRIVATE RD1 into JavaScript, JSON or learner HTML.
          const bank=window.THPT_G11_CHII_REVIEWED_FORMATIVE;
          if(!bank||!bank.validate().valid||bank.contentVersion!==book.original_public_bank_version||
             book.mode!=="PUBLIC_CANONICAL_REFERENCE_ONLY"||
             book.original_public_source_blob!=="2101e2a248e0cf53ee11847b913b937cebcd0806"||
             !Array.isArray(book.item_refs)||book.item_refs.length!==15||
             new Set(book.item_refs).size!==15)throw Error("CHII original public source/placement mismatch");
          const byId=new Map(bank.records.map(q=>[q.item_id,q]));
          const selected=book.item_refs.map(id=>{
            const q=byId.get(id);
            if(!q||q.exposure!=="FORMATIVE_ONLY"||q.role!=="PRACTICE")throw Error("Unexpected new or private item: "+id);
            const parts=q.solution.split("\nLời giải: ");
            if(parts.length!==2||!parts[0].startsWith("Đáp án: ")||!parts[1])throw Error("Original reviewed answer/solution unavailable");
            return {item_id:q.item_id,type:"FREE_TEXT",stem:q.stem,
              answer:parts[0].slice("Đáp án: ".length),solution:parts[1],outcome_id:q.skill};
          });
          if(new Set(selected.map(q=>q.outcome_id)).size!==15)throw Error("Duplicate ChII skill coverage");
          book.items=selected;
        }
        if(book.schema!=="thpt-g11-reviewed-selfcheck-v1"||
           book.scope!=="SGK_CHAPTER_SELF_CHECK"||book.chapter!==chapter||
           !Array.isArray(book.items)||book.items.length!==expected[chapter]||
           new Set(book.items.map(x=>x.item_id)).size!==book.items.length||
           book.mastery_credit!==false||book.independent_readiness_credit!==false||book.persist_results!==false||book.public_client_answer_keys!==true||
           !book.items.every(x=>x.item_id&&x.stem&&x.answer&&x.solution))
          throw Error("source/structure mismatch");
        mount(root,book);
      }catch(err){
        root.dataset.g10scBound="error";
        root.replaceChildren(create("p","g10sc-error","Bài tự kiểm tra chưa thể tải đúng nguồn. Chưa có kết quả nào được ghi. Có thể quay lại phần Luyện tập."));
        console.error("G11 client self-check source blocked:",chapter,err);
      }
    }
  }
  if(window.document$&&typeof window.document$.subscribe==="function")window.document$.subscribe(start);
  else if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);
  else start();
})();
