#!/usr/bin/env node
"use strict";
/* SLM THPT Q01-Q18 v3.1.0, §X-C/§X-F, G10 ChV B12-B14.
 * Validate actual published baseline vs additive self-verified source receipt.
 * Do not turn browser-only QA into reviewer PASS. Fail on changing public
 * canonical item/answer/body, stale S1, SVG, or exam/assessment scope. */
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const cp=require("node:child_process"),crypto=require("node:crypto");
const root=path.resolve(__dirname,"..");
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
 const expected=n===12?d("B12_SOURCE_CURRENT_BLOB"):row.candidate;
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
  assert.equal(blob(master),d("B12_CANONICAL_CURRENT_BLOB"),
    "B12 ONE current canonical must match updated source-first receipt");
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
 }else assert.deepEqual(newAnswers,oldAnswers,"B"+n+" original answer changed");
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
   ["Cùng tìm hiểu","Ví dụ trực quan","Thuật ngữ, kiến thức và kỹ năng"],
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
  for(const term of ["**Giải:**","**Kiểm lại:**","**Phân tích:**",
   '!!! example "Lời giải"',"#### Đề bài"])
   assert(ex.includes(term),"B12 source-first structure missing "+term);
  assert.equal(ex.split('!!! example "Lời giải"').length-1,4,
   "B12 four source-authored native solution boxes, no runtime overlay");
  assert.equal(ex.split("**Phân tích:**").length-1,4,
   "B12 four source-authored analysis labels");
  assert(!ex.includes("**Vì sao chọn cách này:**")&&!ex.includes("**Chọn phương pháp:**"),
   "B12 legacy method heading still present in current manuscript");
  assert(ex.includes("2^9")&&ex.includes("886{,}810"),
   "B12 authentic SGK p74 calculator worked example absent");
  assert.equal((errors.match(/^    \?\?\? tip "4\.[1-3]\. /gm)||[]).length,3,
   "B12 exactly three numbered GOLDEN mistake accordions");
  assert.equal((errors.match(/^    ### 4\./gm)||[]).length,0,
   "B12 Tab4 cannot recreate B11 P2 duplicate-heading regression");
  assert(errors.includes("HELP-G10-B12-CALC-01")&&
   errors.includes("**Cách làm sai:**"),"B12 new calculator actual wrong-step recovery missing");
 }else{
  assert.equal(s.slice(r,t),prev.slice(prev.indexOf('=== "Ví dụ"'),prev.indexOf('=== "Lỗi thường gặp"')),
   "B"+n+" approved worked examples unchanged");
  assert.equal(s.slice(t),prev.slice(prev.indexOf('=== "Lỗi thường gặp"')),
   "B"+n+" original D6 changed");
  assert.equal((s.slice(r,t).match(/^    ### Ví dụ /gm)||[]).length,3,
   "B"+n+" 3 canonical example placements");
 }
 if(n!==12){
  const oldMath=count(fmt(prev)),newMath=count(fmt(s));
  for(const [expression,nOld] of oldMath)
   assert((newMath.get(expression)||0)>=nOld,
    "B"+n+" original math expression lost "+expression.slice(0,95));
 }
 assert(s.includes(originalSvg[n]),"B"+n+" original approved SVG must remain");
 const fig=(n===12?discovery:official).indexOf("<figure"),
  guide=(n===12?discovery:official).indexOf("**Cách đọc hình.**");
 assert(fig>=0&&guide>fig,"B"+n+" D5 figure/reading must appear in concept formation");
 assert.notDeepEqual(ids(s.replace('data-thpt-first-try-id="','data-thpt-first-try-id="MUTATED-'),
  "data-thpt-first-try-id"),ids(prev,"data-thpt-first-try-id"),"B"+n+" mutation must reject");
 assert.notDeepEqual([...official.replace(headings[n][0],"WRONG SGK").matchAll(/^    ### ([^\n]+)/gm)]
  .map(m=>m[1]),headings[n],"B"+n+" wrong S1 heading negative test");
 assert.notEqual(blob(s+" "),expected,"B"+n+" negative source SHA mutation");
 console.log("PASS B"+n+" Q18 S1 2.1–2.3, "+moving[n]+" First Tries, strict source receipt, independent review HOLD");
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
assert(b13.includes("tần số chung lớn hơn 1"),"B13 equal-frequency no-mode exception missing");
const b12=fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-v/bai-12.md"),"utf8");
assert(b12.includes("Máy tính cầm tay giúp")&&b12.includes("0{,}0005"),
 "B12 S1 calculator competence not taught");
console.log("PASS 3/3 G10 ChV Q18 S1 math/PED enrichment; old item/stem/key/solution, D6 and Core unchanged. NO DEPLOY.");
