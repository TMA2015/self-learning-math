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
const moving={12:4,13:5,14:5};
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
 assert.equal(blob(source),row.candidate,"B"+n+" current Git blob != Q18 receipt");
 assert.equal(candidateG10KnowledgeBlob(n),row.candidate,"B"+n+" source router returned stale historical ledger");
 assert.equal(row.moved,moving[n],"B"+n+" 14 original Q15 placements");
 for(const key of ["data-thpt-first-try-id","data-thpt-help-id","data-outcome-id"]){
  assert.deepEqual(ids(s,key),ids(prev,key),"B"+n+" source changed "+key);
  assert.equal(new Set(ids(s,key)).size,ids(s,key).length,"B"+n+" repeated canonical "+key);
 }
 assert.deepEqual(answerBlocks(s),answerBlocks(prev),"B"+n+" changed original 14 answer body HTML");
 assert.equal(answerBlocks(s).length,moving[n],"B"+n+" answer count");
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
  ["Cùng tìm hiểu","Ví dụ trực quan","Thuật ngữ, kiến thức và kỹ năng"],
  "B"+n+" exact Discovery stages before JS numbers");
 assert.deepEqual([...official.matchAll(/^    ### ([^\n]+)/gm)].map(m=>m[1]),
  headings[n],"B"+n+" exact official S1 headings, no duplicate SGK");
 assert(official.startsWith('=== "Kiến thức SGK"\n\n    ### 2.1.'),
  "B"+n+" formal Knowledge does not start at 2.1");
 assert(!/^\s{4,8}### Kiến thức SGK\s*$/m.test(official),
  "B"+n+" duplicated inside SGK header");
 assert.equal(s.slice(r,t),prev.slice(prev.indexOf('=== "Ví dụ"'),prev.indexOf('=== "Lỗi thường gặp"')),
  "B"+n+" 3 original worked examples changed");
 assert.equal(s.slice(t),prev.slice(prev.indexOf('=== "Lỗi thường gặp"')),
  "B"+n+" 2 original D6 remediation bodies/links changed");
 assert.equal((s.slice(r,t).match(/^    ### Ví dụ /gm)||[]).length,3,
  "B"+n+" 3 canonical example placements");
 const oldMath=count(fmt(prev)),newMath=count(fmt(s));
 for(const [expression,nOld] of oldMath){
  assert((newMath.get(expression)||0)>=nOld,"B"+n+" original mathematical expression lost: "+expression.slice(0,95));
 }
 assert(s.includes(originalSvg[n]),"B"+n+" original approved SVG must remain");
 const fig=official.indexOf("<figure"),guide=official.indexOf("**Cách đọc hình.**");
 assert(fig>=0&&guide>fig,"B"+n+" reading instructions must come after actual figure");
 assert.notDeepEqual(ids(s.replace('data-thpt-first-try-id="','data-thpt-first-try-id="MUTATED-'),
  "data-thpt-first-try-id"),ids(prev,"data-thpt-first-try-id"),"B"+n+" mutation must reject");
 assert.notDeepEqual([...official.replace(headings[n][0],"WRONG SGK").matchAll(/^    ### ([^\n]+)/gm)]
  .map(m=>m[1]),headings[n],"B"+n+" wrong S1 heading negative test");
 assert.notEqual(blob(s+" "),row.candidate,"B"+n+" source SHA mutation negative test");
 console.log("PASS B"+n+" Q18 S1 2.1–2.3, "+moving[n]+" First Try/answers, 3 examples, 2 HELP, exact source SHA");
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
