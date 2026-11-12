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
 assert.equal(blob(source),row.candidate,lesson+" exact final academic source receipt");
 assert.equal(candidateG10KnowledgeBlob(n),row.candidate,lesson+" Q18 source router must select latest approved blob");
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
 assert.equal((discover.match(/^    ### /gm)||[]).length,3,lesson+" Discovery stages 1.1–1.3");
 assert(!official.includes("    ### Kiến thức SGK"),lesson+" duplicate SGK heading");
 for(const part of [discover.slice('=== "Khám phá kiến thức"\n'.length),official.slice('=== "Kiến thức SGK"\n'.length)]){
  const unindented=part.split("\n").filter(l=>l.trim()&&!l.startsWith("    "));
  assert.equal(unindented.length,0,lesson+" tabbed Markdown indentation leaked paragraphs");
 }
 assert.equal(examples,previous.slice(previous.indexOf('=== "Ví dụ"'),previous.indexOf('=== "Lỗi thường gặp"')),
  lesson+" previously approved three worked examples changed");
 assert.equal((examples.match(/^    ### Ví dụ /gm)||[]).length,3,lesson+" examples must remain grouped in tab 3");
 if(n<=10){
  assert.deepEqual(tex(source),tex(previous),lesson+" original mathematical expressions changed beyond reordering");
 }else{
  assert(official.includes("tùy ý từ $0^\\circ$ đến $180^\\circ$"),"B11 original SGK zero-angle range");
  assert(official.includes("vuông góc với mọi vectơ"),"B11 SGK orthogonality convention");
  assert(official.includes("hai độ dài đều dương"),"B11 denominator guard");
  assert(official.includes("\\vec u\\cdot\\vec v=ac+bd"),"B11 coordinate product formula");
  assert.equal((last.match(/data-thpt-first-try-id/g)||[]).length,1,
   "B11 original extra transfer First Try remains in mistakes tab");
 }
 assert.notDeepEqual(ids(source.replace('data-thpt-first-try-id="','data-thpt-first-try-id="BAD-'),
  "data-thpt-first-try-id"),ids(previous,"data-thpt-first-try-id"),lesson+" ID mutation must fail");
 assert.notDeepEqual([...official.replace(book[lesson][0],"WRONG SGK").matchAll(/^    ### ([^\n]+)$/gm)].map(x=>x[1]),
  book[lesson],lesson+" wrong S1 section must fail");
 assert.notEqual(blob(source+" "),row.candidate,lesson+" Git SHA mutation must fail");
 console.log("PASS "+lesson+" Q18 S1 sections, 3 examples, canonicals and exact formative answer bodies");
}
console.log("PASS 5/5 G10 ChIV S1/Q18 self-verified editorial source receipts; no independent reviewer claimed.");
