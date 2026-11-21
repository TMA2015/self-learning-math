#!/usr/bin/env node
"use strict";
// Exact-source HTML release guard: approved SOURCE is reconstructed from the
// THREE learner pages, undoing ONLY the two approved visual URL relocations.
const fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto"),assert=require("node:assert/strict");
const ROOT=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(ROOT,p),"utf8");
const blob=s=>{const b=Buffer.from(s,"utf8");return crypto.createHash("sha1").update(Buffer.from("blob "+b.length+"\0")).update(b).digest("hex")};
const sourceSHA="9271a9784e343ea87981a67dae7dabcf69e4c0ed";
const receiptSHA="e5cccc6d98bf3ce5244114752075f74a3389c46b";
const modelId="SLM-TOP01-TRUTH-01";
const paths=["kien-thuc","luyen-tap","tu-kiem-tra"].map(x=>"docs/thpt-preview/chuyen-de/cd01/"+x+".md");
const start="<!-- TOPIC01_APPROVED_SOURCE_START -->\n\n";
const end="\n<!-- TOPIC01_APPROVED_SOURCE_END -->";
const sections=paths.map(x=>{
 const raw=read(x),a=raw.indexOf(start),z=raw.indexOf(end);
 assert(a>=0&&z>a,"Missing unique canonical content delimiters "+x);
 assert.equal(raw.split(start).length,2,"Duplicate canonical start "+x);
 assert.equal(raw.split(end).length,2,"Duplicate canonical end "+x);
 assert(raw.includes('aria-label="Ba phần học của Chuyên đề 01"'),"Missing 3-part navigation "+x);
 assert(raw.includes('href="../../"'),"Missing overview link "+x);
 assert(!raw.includes("data-thpt-readiness")&&!raw.includes("data-mastery-credit"),"Unauthorised official assessment "+x);
 return raw.slice(a+start.length,z);
});
const normal=sections[0].replaceAll("../../../assets/visuals/","../../visuals/")+sections[1]+sections[2];
assert.equal(blob(normal),sourceSHA,"Learner body differs from owner-accepted canonical Git blob");
const manifest=read("scripts/topic01-release-intake-manifest.tsv");
assert(manifest.includes(sourceSHA)&&manifest.includes(receiptSHA)&&manifest.includes(modelId),"Missing source/receipt/model manifest");
assert.equal((sections[0].match(/^## \d+\./gm)||[]).length,3,"Knowledge math groups not 3");
assert.equal((sections[0].match(/^### \d+\.\d+\./gm)||[]).length,11,"Knowledge outcomes not 11");
assert.deepEqual([...sections[1].matchAll(/\*\*Bài\s+(\d+)/g)].map(m=>Number(m[1])),Array.from({length:24},(_,i)=>i+1),"Practice missing/reordered original 24");
assert.deepEqual([...sections[2].matchAll(/\*\*Câu\s+(\d+)/g)].map(m=>Number(m[1])),Array.from({length:11},(_,i)=>i+1),"Self-check missing/reordered 11 public replay questions");
assert.equal(sections.join("").match(/<details markdown="1">/g)?.length,36,"Changed voluntary solution disclosures");
assert.equal(sections.join("").match(/<summary>/g)?.length,36,"Changed solution reveal captions");
const images=[
 ["THPT_G10_B01_IMPLICATION_DIVISIBILITY_D5_R01.svg","40b53b26deb48a7cfdff91be5fe01d12a67bebeb"],
 ["THPT_G10_B02_VENN_TWO_CLUBS_D5_R01.svg","ea84ee68187e83aa4bc6b14e49a965b3d7da5a11"]
];
for(const [file,sha] of images){assert.equal(blob(read("docs/assets/visuals/"+file)),sha,"Altered canonical diagram "+file);assert(sections[0].includes("../../../assets/visuals/"+file),"Missing expected diagram "+file)}
const overview=read("docs/thpt-preview/chuyen-de/index.md");
assert(overview.includes('href="cd01/kien-thuc/"'),"Missing CĐ01 catalog entry");
assert(overview.includes("mẫu kỹ thuật cũ"),"Existing legacy demo must be retained");
for(const config of ["mkdocs.yml","mkdocs.thpt-preview.yml"]){const text=read(config);for(const file of paths)assert(text.includes(file.replace(/^docs\//,"")),"Missing official three-page nav in "+config);
 assert(text.includes("thpt-topic01-release-tabs-v1.js")&&text.includes("thpt-topic01-release-v1.css"),"Missing two-level tab assets in "+config);
}
const js=read("docs/assets/javascripts/thpt-topic01-release-tabs-v1.js");
assert(js.includes("data-topic01-module-layout")&&js.includes("aria-selected"),"Missing accessible adaptive knowledge tabs");
assert(js.includes("math-lab/models/slm-top01-truth-01/"),"Missing optional existing Math Lab link");
assert(!/localStorage|sessionStorage|indexedDB|\bfetch\s*\(|XMLHttpRequest|WebSocket/.test(js),"Topic UI unexpectedly writes user data");
if(process.argv.includes("--built")){
 let count=0;
 for(const site of ["site","site-thpt-preview"]){
  if(!fs.existsSync(path.join(ROOT,site)))continue;count++;
  const siteDir=path.join(ROOT,site),base=path.join(siteDir,"thpt-preview/chuyen-de/cd01");
  for(const name of ["kien-thuc","luyen-tap","tu-kiem-tra"]){
   const html=fs.readFileSync(path.join(base,name,"index.html"),"utf8");
   assert(html.includes("Ba phần học của Chuyên đề 01"),"Built topic nav missing "+site+"/"+name);
   assert(html.includes("TOPIC01_APPROVED_SOURCE_START")||html.includes("TOPIC01_APPROVED_SOURCE_END")||html.includes("topic01-"),"Built topic content unavailable "+site+"/"+name);
   assert(!/<form[^>]*data-(?:thpt-readiness|mastery)/i.test(html),"Built official Readiness leaked");
  }
  const knowledge=fs.readFileSync(path.join(base,"kien-thuc/index.html"),"utf8");
  assert(knowledge.includes("data-topic01-knowledge-start"),"Built knowledge marker missing");
  assert(knowledge.includes("Mệnh đề, tập hợp"),"Built learner explanation missing");
  const practice=fs.readFileSync(path.join(base,"luyen-tap/index.html"),"utf8");
  assert(practice.includes("Bài 24"),"Built Practice missing last question");
  const quiz=fs.readFileSync(path.join(base,"tu-kiem-tra/index.html"),"utf8");
  assert(quiz.includes("Câu 11"),"Built public SelfCheck missing last prompt");
  for(const [name] of images)assert(fs.existsSync(path.join(siteDir,"assets/visuals",name)),"Built diagram absent "+name);
  const model=path.join(siteDir,"thpt-preview/math-lab/models/slm-top01-truth-01/index.html");
  assert(fs.existsSync(model),"Optional Math Lab model deep-link missing");
  console.log("PASS "+site+" all 3 topic pages + 2 source SVG + 1 Math Lab route");
 }
 assert(count>=1,"No built site directory tested");
}
console.log("PASS Topic01 source-reconstruction SHA="+sourceSHA+"; Knowledge=11 Practice=24 SelfCheck=11; Q16 client-only");
