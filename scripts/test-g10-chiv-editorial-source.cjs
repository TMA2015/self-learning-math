#!/usr/bin/env node
"use strict";
/* SLM-THPT-QUALITY-ONE v3.1.0 Q18 self-verified: S1 exact headings,
 * original public First Try questions/keys, source blob SHA and semantic
 * conditions. Never infer a reviewer PASS or expose private RD1 data. */
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const crypto=require("node:crypto"),cp=require("node:child_process");
const root=path.resolve(__dirname,"..");
const baselineSha="045b15ecc402acf9a081a35bd4a7fb36d6325188";
const {chivEditorialReceiptRows,candidateG10KnowledgeBlob}=require("./thpt-q18-g10-source-receipt.cjs");
const rows=chivEditorialReceiptRows();
const blob=data=>{const b=Buffer.isBuffer(data)?data:Buffer.from(data);
 return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex");};
const ids=(s,key)=>[...s.matchAll(new RegExp(key+'="([^"]+)"',"g"))].map(x=>x[1]).sort();
const book={
 B07:["2.1. Khái niệm vectơ","2.2. Hai vectơ cùng phương, cùng hướng, bằng nhau"],
 B08:["2.1. Tổng của hai vectơ","2.2. Hiệu của hai vectơ"],
 B09:["2.1. Tích của một vectơ với một số","2.2. Các tính chất của phép nhân vectơ với một số"],
 B10:["2.1. Tọa độ của vectơ","2.2. Biểu thức tọa độ của các phép toán vectơ"],
 B11:["2.1. Góc giữa hai vectơ","2.2. Tích vô hướng của hai vectơ","2.3. Biểu thức tọa độ và tính chất của tích vô hướng"]
};
function formativeBodies(s){
 const a=s.split("\n"),out=[];
 for(let i=0;i<a.length;i++){
  if(!/^    \?\?\? question(?:\s|$)/.test(a[i]))continue;
  const lines=[a[i]];
  for(let j=i+1;j<a.length;j++){
   if(!a[j].trim()){lines.push("");continue;}
   if(!a[j].startsWith("        "))break;
   lines.push(a[j]);
  }
  out.push(lines.join("\n").trimEnd());
 }
 return out;
}
const tex=s=>[...s.matchAll(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]|\$([^$]+)\$/g)]
 .map(x=>(x[1]??x[2]??x[3]).trim().replace(/\s+/g," ")).sort();
assert.equal(rows.size,5,"Q18 ChIV must have exactly five editorial source rows");
for(const [lesson,row] of rows){
 const n=Number(lesson.slice(1)),rel="docs/thpt-preview/sgk/chuong-iv/bai-"+n+".md";
 const source=fs.readFileSync(path.join(root,rel),"utf8");
 const old=cp.spawnSync("git",["show",baselineSha+":"+rel],{cwd:root,encoding:"utf8"});
 assert.equal(old.status,0,"baseline fetch missing: "+lesson+" "+old.stderr);
 const previous=old.stdout;
 assert.equal(blob(previous),row.baseline,lesson+" original published blob");
 let expected=row.candidate;
 if(lesson==="B08"){
  const receipt=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B08_S1_OWNER_Q18_ENRICHMENT_DELTA_R02_20261116.md"),"utf8");
  const field=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field("R01_APPROVED_SOURCE_BLOB"),row.candidate,"B08 R02 extends immutable ChIV R01");
  expected=field("R02_CANDIDATE_SOURCE_BLOB");
  const visual=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B08_MATHJAX_DISPLAY_DELTA_A_R03_20261117.md"),"utf8");
  const visualField=k=>visual.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(visualField("R02_PUBLISHED_SOURCE_BLOB"),expected,
   "B08 R03 Delta A must follow exactly previously published R02 source blob");
  const published=cp.spawnSync("git",["show",
   "447967a6775c414578c841358290d232eacfa80b:"+rel],{cwd:root,encoding:"utf8"});
  assert.equal(published.status,0,"B08 immutable published R02 git object required");
  assert.equal(blob(published.stdout),expected,"B08 R02 Git content must equal approved published Q18 receipt");
  const lines=published.stdout.split("\n"),adjusted=[];
  let opens=0,closes=0,added=0;
  for(let i=0;i<lines.length;i++){
   if(lines[i]==="    \\["&&lines[i-1]?.trim()!==""){adjusted.push("");added++;}
   adjusted.push(lines[i]);
   if(lines[i]==="    \\[")opens++;
   if(lines[i]==="    \\]"){
    closes++;
    if(lines[i+1]?.trim()!==""){adjusted.push("");added++;}
   }
  }
  assert.equal(opens,6,"B08 R02 original exactly six display TeX blocks");
  assert.equal(closes,6,"B08 R02 original six closed displays");
  assert.equal(added,9,"B08 R03 exactly nine Markdown blank lines inserted");
  assert.equal(source,adjusted.join("\n"),
   "B08 R03 display-only fix must be byte-exact R02 plus nine blank lines; no math or answer edits");
  expected=visualField("R03_CANDIDATE_SOURCE_BLOB");
 }
 assert.equal(blob(source),expected,lesson+" exact final Q18 academic source receipt");
 assert.equal(candidateG10KnowledgeBlob(n),expected,lesson+" Q18 source router selects correct immutable snapshot");
 for(const key of ["data-thpt-first-try-id","data-thpt-help-id","data-outcome-id"])
  assert.deepEqual(ids(source,key),ids(previous,key),lesson+" canonical/outcome IDs changed");
 assert.deepEqual(formativeBodies(source),formativeBodies(previous),
  lesson+" any original First Try stem or answer changed");
 const tabs=[...source.matchAll(/^=== "([^"]+)"$/gm)].map(x=>x[1]);
 assert.deepEqual(tabs,["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],lesson+" four original tabs");
 const x=source.indexOf('=== "Khám phá kiến thức"'),y=source.indexOf('=== "Kiến thức SGK"'),
       z=source.indexOf('=== "Ví dụ"'),w=source.indexOf('=== "Lỗi thường gặp"');
 assert(x>=0&&y>x&&z>y&&w>z,lesson+" four tab order");
 const discover=source.slice(x,y),official=source.slice(y,z),examples=source.slice(z,w),last=source.slice(w);
 assert.equal((discover.match(/data-thpt-first-try-id/g)||[]).length,row.moved,
  lesson+" original pedagogic First Try must appear only in Discovery");
 assert.equal((official.match(/data-thpt-first-try-id/g)||[]).length,0,lesson+" SGK tab contains a First Try");
 assert.equal((official.match(/^    \?\?\? question/gm)||[]).length,0,lesson+" SGK tab contains an opened-answer control");
 assert.deepEqual([...official.matchAll(/^    ### ([^\n]+)$/gm)].map(x=>x[1]),book[lesson],
  lesson+" official S1 book headings exactly 2.1.., no double SGK");
 assert(official.startsWith('=== "Kiến thức SGK"\n\n    ### 2.1.'),
  lesson+" SGK tab must start directly at 2.1, not commentary");
 assert.equal((discover.match(/^    ### /gm)||[]).length,lesson==="B08"?5:3,lesson+" authentic discovery stages");
 assert(!official.includes("    ### Kiến thức SGK"),lesson+" duplicate SGK heading");
 for(const part of [discover.slice('=== "Khám phá kiến thức"\n'.length),official.slice('=== "Kiến thức SGK"\n'.length)]){
  const unindented=part.split("\n").filter(l=>l.trim()&&!l.startsWith("    "));
  assert.equal(unindented.length,0,lesson+" tabbed Markdown indentation leaked paragraphs");
 }
 if(lesson==="B08"){
  assert.equal((examples.match(/^    ### 3\.[1-4]\. Ví dụ [1-4] —/gm)||[]).length,4,
   "B08 new four distinct method-first examples match owner S1/PED delta receipt");
  for(const section of ["Phân tích.","Lời giải.","Kiểm lại."]){
   assert.equal(examples.split("**"+section+"**").length-1,4,
     "B08 every worked example must explain method, solve, and check "+section);
  }
  assert(discover.includes("THPT_G10_B08_TRIANGLE_PARALLELOGRAM_SUM_D5_R01.svg")&&
   !official.includes("THPT_G10_B08_TRIANGLE_PARALLELOGRAM_SUM_D5_R01.svg"),
    "B08 original D5 vector figure must guide discovery before formula");
 }else{
  assert.equal(examples,previous.slice(previous.indexOf('=== "Ví dụ"'),previous.indexOf('=== "Lỗi thường gặp"')),
   lesson+" previously approved three worked examples changed");
  assert.equal((examples.match(/^    ### Ví dụ /gm)||[]).length,3,
   lesson+" previous three original examples stay intact");
 }
 if(n<=10&&n!==8){
  assert.deepEqual(tex(source),tex(previous),lesson+" original mathematical expressions changed beyond reordering");
 }else if(n===11){
  assert(official.includes("có thể nhận một giá trị tùy ý từ $0^\\circ$ đến $180^\\circ$"),"B11 original SGK zero-angle range");
  assert(official.includes("vuông góc với mọi vectơ"),"B11 SGK orthogonality convention");
  assert(official.includes("hai độ dài đều dương"),"B11 denominator guard");
  assert(official.includes("\\vec u\\cdot\\vec v=ac+bd"),"B11 coordinate product formula");
  assert.equal((last.match(/data-thpt-first-try-id/g)||[]).length,1,
   "B11 original extra transfer First Try remains in mistakes tab");
 }else{
  assert.equal(lesson,"B08","Only B08 source enrichment may skip legacy order-only TeX check");
  for(const required of [
   "\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}",
   "\\overrightarrow{AB}+\\overrightarrow{AD}=\\overrightarrow{AC}",
   "\\vec u-\\vec v=\\vec u+(-\\vec v)",
   "\\overrightarrow{GA}+\\overrightarrow{GB}+\\overrightarrow{GC}=\\vec0"
  ])assert(official.includes(required),"B08 R02 must retain original vector rule: "+required);
 }
 assert.notDeepEqual(ids(source.replace('data-thpt-first-try-id="','data-thpt-first-try-id="BAD-'),
  "data-thpt-first-try-id"),ids(previous,"data-thpt-first-try-id"),lesson+" ID mutation must fail");
 assert.notDeepEqual([...official.replace(book[lesson][0],"WRONG SGK").matchAll(/^    ### ([^\n]+)$/gm)].map(x=>x[1]),
  book[lesson],lesson+" wrong S1 section must fail");
 assert.notEqual(blob(source+" "),expected,lesson+" Git SHA mutation must fail");
 console.log("PASS "+lesson+" Q18 S1 sections, "+(lesson==="B08"?"4 new":"3 original")+" examples, canonical IDs and formative answers");
}
console.log("PASS 5/5 G10 ChIV S1/Q18 self-verified editorial source receipts; no independent reviewer claimed.");
