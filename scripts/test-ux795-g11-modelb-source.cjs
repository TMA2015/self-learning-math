"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs"),path=require("node:path"),cp=require("node:child_process");
const {transformG11}=require("./upgrade-g11-knowledge-modelb.cjs");
const receipt=fs.readFileSync(path.resolve(__dirname,"../prototypes/thpt/ux795/UX795_G11_B01_B33_ENRICHMENT_DELTA_RECEIPT_Q18_V301_20261112.md"),"utf8");
const labels=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
const group=n=>n<=4?"i":n<=7?"ii":n<=9?"iii":n<=14?"iv":n<=17?"v":n<=21?"vi":n<=27?"vii":n<=30?"viii":"ix";
const ids=(text,key)=>[...text.matchAll(new RegExp(key+'="([^"]+)"',"g"))].map(x=>x[1]).sort();
let lessons=0,attempts=0,remedies=0,figures=0;
for(const line of receipt.split("\n")){
 const nmatch=line.match(/^\| G11-B(\d{2})/);
 if(!nmatch)continue;
 const shaMatches=[...line.matchAll(/[0-9a-f]{40}/g)].map(x=>x[0]);
 assert.equal(shaMatches.length,2,"receipt requires exactly baseline and candidate blobs");
 const n=Number(nmatch[1]),originalSha=shaMatches[0],candidateSha=shaMatches[1];
 assert.equal(n,lessons+1,"receipt must be sequential");
 const raw=cp.execFileSync("git",["cat-file","blob",originalSha],{encoding:"utf8",maxBuffer:1024*1024});
 const file=path.resolve(__dirname,"../docs/thpt-preview/sgk/lop-11/chuong-"+group(n)+"/bai-"+n+".md");
 const now=fs.readFileSync(file,"utf8");
 const sha=cp.execFileSync("git",["hash-object",file],{encoding:"utf8"}).trim();
 assert.equal(sha,candidateSha,"B"+n+" exact candidate blob SHA");
 assert.equal(transformG11(raw,n),now,"B"+n+" must preserve original math, figures and canonical answers with only authored prose/layout delta");
 assert.deepEqual([...now.matchAll(/^=== "([^"]+)"$/gm)].map(x=>x[1]),labels,"B"+n+" exact four tabs");
 for(const key of ["data-ped-first-try","data-thpt-first-try-id","data-thpt-help-id"])
  assert.deepEqual(ids(now,key),ids(raw,key),"B"+n+" original "+key+" parity");
 const oldImages=[...raw.matchAll(/<img\b[^>]*src="([^"]+)"/g)].map(x=>x[1]).sort();
 const newImages=[...now.matchAll(/<img\b[^>]*src="([^"]+)"/g)].map(x=>x[1]).sort();
 assert.deepEqual(newImages,oldImages,"B"+n+" educational SVG/image paths preserved");
 assert(now.includes("### Ví dụ trực quan")&&now.includes("### Thuật ngữ và kiến thức, kỹ năng"),"B"+n+" new pedagogical bridge is real");
 assert(now.includes("data-ped-first-try=")&&now.includes("data-thpt-help-id="),"B"+n+" first try and D6 intact");
 attempts+=ids(now,"data-ped-first-try").length;
 remedies+=ids(now,"data-thpt-help-id").length;
 figures+=newImages.length;
 lessons++;
}
assert.equal(lessons,33,"all 33 G11 lessons should be source locked");
console.log("PASS G11 original-to-Model-B QA 33/33; "+attempts+" first tries, "+remedies+" D6 links, "+figures+" original image paths; exact source SHA");
