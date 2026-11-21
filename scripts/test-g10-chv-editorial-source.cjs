#!/usr/bin/env node
"use strict";
/* SLM THPT Q01-Q18 v3.1.0, §X-C/§X-F, G10 ChV B12-B14.
 * Validate actual published baseline vs additive self-verified source receipt.
 * Do not turn browser-only QA into reviewer PASS. Fail on changing public
 * canonical item/answer/body, stale S1, SVG, or exam/assessment scope. */
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const cp=require("node:child_process"),crypto=require("node:crypto");
const root=path.resolve(__dirname,"..");
require("./test-g10-b11-b12-source-first-delta.cjs");
require("./test-g10-chv-de-label-parity-delta-a.cjs");
require("./test-g10-chv-b14-first-try-label-delta-a.cjs");
const baseline="95c111b313886283bd8245babcc9ffdbfcc7c54f";
const {chvEditorialReceiptRows,candidateG10KnowledgeBlob}=require("./thpt-q18-g10-source-receipt.cjs");
const blob=data=>{
 const b=Buffer.isBuffer(data)?data:Buffer.from(data);
 return crypto.createHash("sha1").update(Buffer.from("blob "+b.length+"\0")).update(b).digest("hex");
};
const ids=(s,key)=>[...s.matchAll(new RegExp(key+'="([^"]+)"',"g"))].map(m=>m[1]);
const answerBlocks=s=>[...s.matchAll(/<div class="thpt-r4-first-try-answer">[\s\S]*?<\/div>/g)].map(m=>m[0]);
const fmt=content=>[...content.matchAll(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g)]
 .map(m=>(m[1]||m[2]).trim().replace(/\s+/g," "));
const count=a=>a.reduce((m,x)=>(m.set(x,(m.get(x)||0)+1),m),new Map());
const headings={
 12:["2.1. Số gần đúng","2.2. Sai số tuyệt đối và sai số tương đối","2.3. Quy tròn số gần đúng"],
 13:["2.1. Số trung bình và trung vị","2.2. Tứ phân vị","2.3. Mốt"],
 14:["2.1. Khoảng biến thiên và khoảng tứ phân vị","2.2. Phương sai và độ lệch chuẩn",
     "2.3. Phát hiện số liệu bất thường hoặc không chính xác bằng biểu đồ hộp"]
};
const moving={12:5,13:5,14:5};
const originalSvg={
 12:"THPT_G10_B12_ERROR_INTERVAL_D5_R02_REVIEWED.svg",
 13:"THPT_G10_B13_QUARTILES_D5_R01.svg",
 14:"THPT_G10_B14_DISPERSION_D5_R01.svg"
};
const rows=chvEditorialReceiptRows();
assert.equal(rows.size,3,"three signed ChV Q18 source receipt rows required");
for(const n of [12,13,14]){
 const row=rows.get("B"+n);
 assert(row,"B"+n+" missing source receipt");
 const rel="docs/thpt-preview/sgk/chuong-v/bai-"+n+".md";
 const source=fs.readFileSync(path.join(root,rel));
 const s=source.toString("utf8");
 const old=cp.spawnSync("git",["show",baseline+":"+rel],{cwd:root,encoding:"utf8"});
 assert.equal(old.status,0,"B"+n+" baseline Git commit missing: "+old.stderr);
 const prev=old.stdout;
 assert.equal(blob(prev),row.baseline,"B"+n+" baseline Git blob mismatch");
 const receipt=n===12?fs.readFileSync(path.join(root,
  "prototypes/thpt/ux795/G10_CHV_B12_S1_PED_CALCULATOR_Q18_R01_20261118.md"),"utf8"):null;
 const r12=k=>receipt?.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
 const p2=fs.readFileSync(path.join(root,
  "prototypes/thpt/ux795/G10_B11_B12_OWNER_P2_SOURCE_FIRST_DELTA_A_R01_20261118.md"),"utf8");
 const d=k=>p2.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
 const gold=fs.readFileSync(path.join(root,
  "prototypes/thpt/ux795/G10_B11_B12_OWNER_P2_GOLDEN_COMPONENT_PARITY_DELTA_A_R02_20261118.md"),"utf8");
 const g=k=>gold.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
 if(n===12){
  assert.equal(g("B12_PREVIOUS_SOURCE_BLOB"),d("B12_SOURCE_CURRENT_BLOB"),"Prior B12 learner SHA must remain Q18 signed");
  assert.equal(g("B12_PREVIOUS_CANONICAL_BLOB"),d("B12_CANONICAL_CURRENT_BLOB"),"Prior B12 canonical SHA must remain Q18 signed");
 }
 const b13=fs.readFileSync(path.join(root,
  "prototypes/thpt/ux795/G10_CHV_B13_S1_Q18_GOLDEN_ENRICHMENT_DELTA_R01_20261119.md"),"utf8");
 const b13field=k=>b13.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
 const fix=fs.readFileSync(path.join(root,"prototypes/thpt/ux795/G10_B12_B13_DUPLICATE_DE_HEADING_DELTA_A_R01_20261119.md"),"utf8");
 const ui=k=>fix.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
 assert.equal(ui("B12_PREVIOUS_SOURCE_BLOB"),g("B12_SOURCE_CURRENT_BLOB"),"B12 signed UI predecessor");
 assert.equal(ui("B13_PREVIOUS_SOURCE_BLOB"),b13field("CANDIDATE_LESSON_GIT_BLOB"),"B13 signed Q18 predecessor");
 const b14=fs.readFileSync(path.join(root,
  "prototypes/thpt/ux795/G10_CHV_B14_Q18_GOLDEN_ENRICHMENT_DELTA_R01_20261119.md"),"utf8");
 const b14f=k=>b14.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
 const ui14=fs.readFileSync(path.join(root,
  "prototypes/thpt/ux795/G10_CHV_B14_EM_VAN_DUNG_LABEL_DELTA_A_R01_20261119.md"),"utf8");
 const f14=k=>ui14.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
 const predecessor=n===12?ui("B12_CURRENT_SOURCE_BLOB"):
  n===13?ui("B13_CURRENT_SOURCE_BLOB"):f14("B14_CURRENT_SOURCE_BLOB");
 const placement=fs.readFileSync(path.join(root,
  "prototypes/thpt/ux795/G10_CHIV_CHV_B07_B14_KIEM_LOI_PLACEMENT_Q18_R01_20261120.md"),"utf8");
 assert(placement.includes("DELTA_C_ACADEMIC_MATERIAL")&&
  placement.includes("Q18_OWNER_SELF_VERIFIED_ENRICHMENT"),
  "B"+n+" material HELP relocation must have proper Q18 self-QA receipt");
 const q18row=placement.split("\n").filter(x=>x.startsWith("| B"+n+" | "));
 assert.equal(q18row.length,1,"B"+n+" exactly one signed 20/11 source row");
 const signedPair=[...q18row[0].matchAll(/`([a-f0-9]{40})`/g)].map(x=>x[1]);
 assert.equal(signedPair.length,2,"B"+n+" predecessor/current SHA pair");
 assert.equal(signedPair[0],predecessor,"B"+n+" immutable 19 Nov historical predecessor");
 const expected=signedPair[1];
 if(n===14){
  assert.equal(f14("B14_PREVIOUS_SOURCE_BLOB"),b14f("CANDIDATE_LESSON_GIT_BLOB"),
   "B14 owner UI correction preserves original signed §X-C source predecessor");
  assert.equal(b14f("BASELINE_LESSON_GIT_BLOB"),row.candidate,
   "B14 §X-C current delta must preserve signed original Knowledge baseline");
  assert(b14.includes("Q18_OWNER_SELF_VERIFIED_ENRICHMENT")&&
   b14.includes("S1_SCOPE_MATH_CONVENTION_VERIFIED")&&
   b14.includes("SBT_REFERENCE_GAP_DOCUMENTED")&&b14.includes("NOT_DEPLOYED"),
   "B14 eligible published Knowledge must carry affected-outcome math/PED receipt");
 }
 if(n===13){
  assert.equal(b13field("BASELINE_LESSON_GIT_BLOB"),row.candidate,
   "B13 new source must extend exact prior ChV approved candidate");
  assert(b13.includes("Q18_OWNER_SELF_VERIFIED_ENRICHMENT_PASS")&&
   b13.includes("S1_SCOPE_MATH_CONVENTION_VERIFIED")&&
   b13.includes("PDF_INDEX_NOT_VERIFIED_NON_BLOCKING")&&
   b13.includes("SBT_REFERENCE_GAP_DOCUMENTED")&&
   b13.includes("P0=0; P1=0")&&b13.includes("AUTHOR_SIGNOFF"),
   "B13 current receipt must carry outcome-proved Q18 self-QA and transparent S1 provenance");
 }
 if(n===12)assert.equal(d("B12_BASELINE_SOURCE_BLOB"),r12("B12_R01_SOURCE_BLOB"),
  "B12 historic reviewed source SHA must remain immutable");
 assert.equal(blob(source),expected,"B"+n+" current Git blob != current Q18 signed source");
 assert.equal(candidateG10KnowledgeBlob(n),expected,"B"+n+" source router selects wrong signed source");
 assert.equal(row.moved,n===12?4:moving[n],"B"+n+" legacy Q15 placements must remain frozen");
 if(n===12){
  assert.equal(r12("BASELINE_B12_KNOWLEDGE_BLOB"),row.candidate,
   "B12 new academic Delta C must extend exactly prior Q18 accepted source");
  assert(receipt.includes("INDEPENDENT_NOTEBOOKLM_ACADEMIC_PED_REVIEW_PENDING")&&
   receipt.includes("DELTA_C_ACADEMIC_MATERIAL"),"B12 material must stay independent-review HOLD");
  const master=fs.readFileSync(path.join(root,
   "prototypes/thpt/content-drafts/THPT_G10_CHV_B12_CANONICAL.md"),"utf8");
  assert.equal(d("B12_BASELINE_CANONICAL_BLOB"),r12("ONE_CANONICAL_B12_R01_BLOB"),
    "B12 historic independent-reviewed canonical SHA must remain immutable");
  const canonicalRow=placement.split("\n").filter(x=>x.startsWith("| CANONICAL_B12 | "));
  assert.equal(canonicalRow.length,1,"B12 single signed manuscript Q18 transition");
  const canonicalPair=[...canonicalRow[0].matchAll(/`([a-f0-9]{40})`/g)].map(x=>x[1]);
  assert.deepEqual(canonicalPair,[ui("B12_CURRENT_CANONICAL_BLOB"),blob(master)],
   "B12 19/11 manuscript predecessor must extend exactly to 20/11 current manuscript");
  assert.equal(master.split("<!-- BEGIN_B12_KNOWLEDGE_MARKDOWN -->\n")[1]
   .split("\n<!-- END_B12_KNOWLEDGE_MARKDOWN -->")[0],s,"B12 learner Knowledge must equal ONE canonical Section A");
  const bank=fs.readFileSync(path.join(root,
   "docs/assets/javascripts/thpt-chv-b12-reviewed-formative-r02.js"),"utf8");
  assert.equal(blob(bank),r12("B12_R01_ITEM_BANK_BLOB"),"B12 nine-item bank source receipt mismatch");
  assert.equal(master.split("<!-- BEGIN_B12_FORMATIVE_JS -->\n")[1]
   .split("\n<!-- END_B12_FORMATIVE_JS -->")[0],bank,"B12 public 9-item bank must equal ONE canonical");
  const hub=fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-v/luyen-tap.md"));
  assert.equal(blob(hub),r12("B12_R01_PRACTICE_HUB_BLOB"),"B12 calculator P07 launcher source receipt mismatch");
 }
 for(const key of ["data-thpt-first-try-id","data-thpt-help-id","data-outcome-id"]){
  const original=ids(prev,key),current=ids(s,key);
  if(n===12){
   assert.deepEqual(current.slice(0,original.length),original,
    "B12 existing original canonical/outcome IDs changed "+key);
   assert.equal(current.length,original.length+(key==="data-outcome-id"?1:1),
    "B12 exactly one new calculator identifier expected "+key);
  }else assert.deepEqual(current,original,"B"+n+" source changed "+key);
  assert.equal(new Set(current).size,current.length,"B"+n+" repeated canonical "+key);
 }
 const oldAnswers=answerBlocks(prev),newAnswers=answerBlocks(s);
 if(n===12){
  const withoutRemedy=x=>x.replace(/<p><strong>Nếu chưa làm được:<\/strong>[\s\S]*?<\/p>/g,"");
  assert.deepEqual(newAnswers.map(withoutRemedy),oldAnswers.map(withoutRemedy),
   "B12 first four mathematical results/solutions changed outside authorized D6 remediation");
  }else if(n===13){
  const strip=x=>x.replace(/<p><strong>Nếu chưa làm được:<\/strong>[\s\S]*?<\/p>/g,"");
  assert.deepEqual(newAnswers.map(strip),oldAnswers.map(strip),
   "B13 original five mathematical first-try answers unchanged except recovery text");
 }else{
  const strip=x=>x.replace(/<p><strong>Nếu chưa làm được:<\/strong>[\s\S]*?<\/p>/g,"");
  assert.deepEqual(newAnswers.map(strip),oldAnswers.map(strip),
   "B14 all original First Try result/reasoning paragraphs must remain byte-identical except recovery navigation");
 }
 assert.equal(newAnswers.length,n===12?4:moving[n],
  "B"+n+" original result blocks; B12 new calculator uses text question disclosure");
 const tabs=[...s.matchAll(/^=== "([^"]+)"$/gm)].map(m=>m[1]);
 assert.deepEqual(tabs,["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],
  "B"+n+" owner 4-tab Golden source order");
 const p=s.indexOf('=== "Khám phá kiến thức"'),q=s.indexOf('=== "Kiến thức SGK"'),
  r=s.indexOf('=== "Ví dụ"'),t=s.indexOf('=== "Lỗi thường gặp"');
 assert(p>=0&&q>p&&r>q&&t>r,"B"+n+" tab boundaries");
 const discovery=s.slice(p,q),official=s.slice(q,r);
 assert.equal((discovery.match(/data-thpt-first-try-id=/g)||[]).length,moving[n],
  "B"+n+" First Try missing from Discovery");
 assert.equal((official.match(/data-thpt-first-try-id=/g)||[]).length,0,
  "B"+n+" First Try retained inside formal SGK");
 assert.equal((official.match(/^    \?\?\? question/gm)||[]).length,0,
  "B"+n+" answers leaked inside formal SGK");
 assert.deepEqual([...discovery.matchAll(/^    ### ([^\n]+)/gm)].map(m=>m[1]),
  n===12?["1.1. Cùng tìm hiểu","1.2. Ví dụ trực quan",
   "1.3. Thực hành máy tính cầm tay — tự nhập, đọc và kiểm",
   "1.4. Thuật ngữ, kiến thức và kỹ năng"]:
   n===13?["1.1. Vì sao một bộ dữ liệu cần nhiều số đại diện?",
    "1.2. Khám phá cách xác định số đại diện","1.3. Tổng kết cách chọn số đặc trưng"]:
   ["1.1. Cùng tìm hiểu","1.2. Ví dụ trực quan","1.3. Thuật ngữ, kiến thức và kỹ năng"],
  "B"+n+" signed intuitive Discovery stages");
 assert.deepEqual([...official.matchAll(/^    ### ([^\n]+)/gm)].map(m=>m[1]),
  headings[n],"B"+n+" exact official S1 headings, no duplicate SGK");
 assert(official.startsWith('=== "Kiến thức SGK"\n\n    ### 2.1.'),
  "B"+n+" formal Knowledge does not start at 2.1");
 assert(!/^\s{4,8}### Kiến thức SGK\s*$/m.test(official),
  "B"+n+" duplicated inside SGK header");
 if(n===12){
  const ex=s.slice(r,t),errors=s.slice(t);
  assert.equal((ex.match(/^    ### 3\.[1-4]\. Ví dụ [1-4] —/gm)||[]).length,4,
   "B12 four reasoned examples including SGK calculator must be authored");
  for(const label of ["<strong>Giải:</strong>","**Kiểm lại:**","**Phân tích:**",
   'class="thpt-g10-example-solution"'])
   assert(ex.includes(label),"B12 B10 Golden worked source lacking "+label);
  assert.equal(ex.split('class="thpt-g10-example-solution"').length-1,4,
   "B12 four B10 Golden neutral solved-example panels");
  assert.equal(ex.split("**Phân tích:**").length-1,4,
   "B12 four source-authored outside analysis paragraphs");
  assert(!ex.includes("#### Đề bài"),"B12 must never double label Đề bài above Đề:");
  assert.equal((ex.match(/^    \*\*Đề:\*\*/gm)||[]).length,4,
   "B12 four original Đề: labels, exactly one per worked example");
  const formalB12=s.slice(s.indexOf('=== "Kiến thức SGK"'),s.indexOf('=== "Ví dụ"'));
  assert.equal((formalB12.match(/class="thpt-r4-knowledge-conclusion thpt-r4-concept-card"/g)||[]).length,3,
   "B12 three teal B10 semantic concepts");
  assert.equal((formalB12.match(/class="thpt-r4-knowledge-conclusion thpt-r4-rule-card"/g)||[]).length,1,
   "B12 one blue B10 semantic rule");
  assert(!/!!! (example|abstract|info)/.test(ex+formalB12),"B12 wrong-color MkDocs admonition prohibited");
  assert(!ex.includes("**Vì sao chọn cách này:**")&&!ex.includes("**Chọn phương pháp:**"),
   "B12 legacy method heading still present in current manuscript");
  assert(ex.includes("2^9")&&ex.includes("886{,}810"),
   "B12 authentic SGK p74 calculator worked example absent");
  assert.equal((discovery.match(/^    \?\?\? tip "Kiểm lỗi"$/gm)||[]).length,3,
   "B12 exactly three signed local Kiểm lỗi in Discovery");
  assert.equal((errors.match(/^    \?\?\? tip /gm)||[]).length,0,
   "B12 Tab4 must not duplicate HELP under Vận dụng");
  assert.equal((errors.match(/^    ### 4\./gm)||[]).length,0,
   "B12 Tab4 cannot recreate B11 P2 duplicate-heading regression");
  assert(discovery.includes("HELP-G10-B12-CALC-01")&&
   discovery.includes("**Cách làm sai:**"),
   "B12 calculator local Kiểm lỗi must include real wrong-step recovery");
 }else if(n===13){
  const examples=s.slice(r,t),help=s.slice(t);
  assert.equal((examples.match(/^    ### 3\.[1-4]\. Ví dụ [1-4] —/gm)||[]).length,4,
   "B13 four independent worked examples required");
  assert.equal((examples.match(/class="thpt-g10-example-solution"/g)||[]).length,4,
   "B13 original Golden neutral worked solution component required");
  assert.equal((examples.match(/\*\*Phân tích:\*\*/g)||[]).length,4,
   "B13 methods must each explain rationale before calculating");
  assert(!examples.includes("#### Đề bài"),"B13 must never double label Đề bài above Đề:");
  assert.equal((examples.match(/^    \*\*Đề:\*\*/gm)||[]).length,4,
   "B13 four original Đề: labels, exactly one per worked example");
  assert((examples.match(/<strong>Bước [1-4]/g)||[]).length>=12,
   "B13 examples must explain real intermediate steps");
  assert.equal((official.match(/class="thpt-r4-knowledge-conclusion thpt-r4-concept-card"/g)||[]).length,4,
   "B13 four new formal conceptual statements in Golden teal");
  assert.equal((official.match(/class="thpt-r4-knowledge-conclusion thpt-r4-rule-card"/g)||[]).length,1,
   "B13 one positional quartile rule in Golden blue");
  assert.equal((discovery.match(/^    \?\?\? tip "Kiểm lỗi"$/gm)||[]).length,2,
   "B13 two original local Kiểm lỗi in Discovery");
  assert.equal((help.match(/^    \?\?\? tip /gm)||[]).length,0,
   "B13 Tab4 must not clone targeted D6");
  assert(!s.includes("Em tự thử.")&&!s.includes("Hiểu bản chất trước công thức"),
   "B13 visible copy cannot reference obsolete labels or nonexistent sections");
 }else{
  const ex=s.slice(r,t),help=s.slice(t);
  assert.equal((ex.match(/^    ### 3\.[1-3]\. Ví dụ [1-3] —/gm)||[]).length,3,
   "B14 preserve EX01–EX03 as three worked examples");
  for(const [phrase,number] of [["**Đề:**",3],["**Phân tích:**",3],
   ["**Kiểm lại:**",3],['class="thpt-g10-example-solution"',3],
   ['#### &nbsp; {style="display:none"}',3]]){
   assert.equal(ex.split(phrase).length-1,number,"B14 exact 3 source-authored example components "+phrase);
  }
  assert.equal((ex.match(/<strong>Bước [1-4]/g)||[]).length>=9,true,
   "B14 method must include real intermediate mathematical steps");
  assert.equal((official.match(/class="thpt-r4-knowledge-conclusion thpt-r4-concept-card"/g)||[]).length,3,
   "B14 exactly three S1 math definitions use Golden teal");
  assert.equal((official.match(/class="thpt-r4-knowledge-conclusion thpt-r4-rule-card"/g)||[]).length,1,
   "B14 one S1 outlier rule uses Golden blue");
  assert.equal((discovery.match(/^    \?\?\? tip "Kiểm lỗi"$/gm)||[]).length,2,
   "B14 two original local D6 near Vận dụng");
  assert.equal((help.match(/^    \?\?\? tip /gm)||[]).length,0,
   "B14 no duplicate targeted HELP in Tab4");
  assert.equal((discovery.match(/\*\*Em vận dụng\.\*\*/g)||[]).length,5,
   "B14 five pre-Core First Tries must have one approved Em vận dụng label each");
  assert(!discovery.includes("Em tự thử."),
   "B14 no mismatched Em tự thử in Discovery");
  assert(!s.includes("Hiểu bản chất trước công thức và Vì sao làm theo cách này?"),
   "B14 First Try D6 links must target actual lesson sections");
  for(const phrase of ["(2+4+6+8)/4=5","R=8-2=6","s^2","(4+5+6)/3=5",
   "(1+5+9)/3=5","20>7"]){
   assert(s.includes(phrase),"B14 essential approved result/formula lost "+phrase);
  }
 }
 assert(s.includes(originalSvg[n]),"B"+n+" original approved SVG must remain");
 const figureArea=n===12||n===13?discovery:official;
 const fig=figureArea.indexOf("<figure"),
  guide=figureArea.indexOf(n===13?"**Đọc hình ngay khi học tứ phân vị:**":"**Cách đọc hình.**");
 assert(fig>=0&&(n===13?guide>=0&&guide<fig:guide>fig),
  "B"+n+" D5 diagram and reading guidance must be with concept");
 assert.notDeepEqual(ids(s.replace('data-thpt-first-try-id="','data-thpt-first-try-id="MUTATED-'),
  "data-thpt-first-try-id"),ids(prev,"data-thpt-first-try-id"),"B"+n+" mutation must reject");
 assert.notDeepEqual([...official.replace(headings[n][0],"WRONG SGK").matchAll(/^    ### ([^\n]+)/gm)]
  .map(m=>m[1]),headings[n],"B"+n+" wrong S1 heading negative test");
 assert.notEqual(blob(s+" "),expected,"B"+n+" negative source SHA mutation");
 console.log("PASS B"+n+" Q18 S1 2.1–2.3, "+moving[n]+" First Tries, source-locked "+(n===14?"§X-C self-verified eligible Knowledge":"historical receipt")+"; no independent reviewer claim");
}
// Independent checks for newly added mathematics, not a fake reviewer PASS:
assert(1.4135**2<2&&2<1.4145**2,"B12 sqrt2 accuracy proof incorrect");
assert(Math.abs(Math.sqrt(2)-1.414)<.0005,"B12 calculator approximate d incorrect");
const data=[1,2,3,4,5,6,7,8,20];
const q1=(data[1]+data[2])/2,q2=data[4],q3=(data[6]+data[7])/2;
const iqr=q3-q1,lower=q1-1.5*iqr,upper=q3+1.5*iqr;
assert.deepEqual([q1,q2,q3,iqr,lower,upper],[2.5,5,7.5,5,-5,15],
 "B14 actual 9-item boxplot quartile/fence math");
assert.deepEqual(data.filter(x=>x<lower||x>upper),[20],
 "B14 only 20 is an outlier");
const svgFile="docs/assets/images/thpt/G10_B14_BOXPLOT_S1_Q18_ENRICHMENT_20261113.svg";
const svg=fs.readFileSync(path.join(root,svgFile),"utf8");
assert.equal(blob(svg),"60627e01f44dcf1e4c8e4aab5ec9617bece28888",
 "B14 boxplot SVG exact visually-reviewed source blob");
for(const label of ["<title","<desc","Q₁ = 2,5","Q₂ = 5","Q₃ = 7,5","râu","20"]){
 assert(svg.includes(label),"B14 SVG lacks "+label);
}
const b14=fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-v/bai-14.md"),"utf8");
assert(b14.includes("n-1")&&b14.includes("\\hat{s}"),"B14 SGK alternative n−1 variance note missing");
assert(b14.includes("biểu đồ hộp"),"B14 SGK boxplot teaching missing");
assert(b14.includes(svgFile.split("/").at(-1)),"B14 diagram not linked from Knowledge page");
const b13=fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-v/bai-13.md"),"utf8");
assert(b13.includes("mọi giá trị phân biệt đều xuất hiện")&&b13.includes("cùng tần số"),
 "B13 equal-frequency no-mode exception must remain");
const b12=fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-v/bai-12.md"),"utf8");
assert(b12.includes("Máy tính cầm tay giúp")&&b12.includes("0{,}0005"),
 "B12 S1 calculator competence not taught");
console.log("PASS 3/3 G10 ChV Q18 S1 math/PED enrichment; old item/stem/key/solution, D6 and Core unchanged. NO DEPLOY.");
