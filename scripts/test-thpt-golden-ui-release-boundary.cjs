#!/usr/bin/env node
"use strict";
/* RELEASE AP1/AP2/AP4/AP5 Golden UI boundary for CURRENT published SGK.
 * One Q01–Q18 standard; NOT an additional academic standard.
 * This stops G12 inline bulk questions, missing Golden runtime, accidental
 * redeclaration of Tutor behavior, ID duplication, or missing Q16 test coverage.
 */
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const base=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(base,p),"utf8");
const exists=p=>fs.existsSync(path.join(base,p));
const chapter=[
 {roman:"i",name:"I",start:1,end:5,short:"chi",runtime:"thpt-g12-chi-b01-b05-r00.js",bank:"thpt-g12-chi-b01-b05-public-r00.json",selector:"data-g12-chi-hub",public:66,total:78},
 {roman:"ii",name:"II",start:6,end:8,short:"chii",runtime:"thpt-g12-chii-b06-b08-r00.js",bank:"thpt-g12-chii-b06-b08-public-r00.json",selector:"data-g12-chii-hub",public:64,total:64},
 {roman:"iii",name:"III",start:9,end:10,short:"chiii",runtime:"thpt-g12-chiii-b09-b10-r00.js",bank:"thpt-g12-chiii-b09-b10-public-r00.json",selector:"data-g12-chiii-hub",public:48,total:48},
 {roman:"iv",name:"IV",start:11,end:13,short:"chiv",runtime:"thpt-g12-chiv-b11-b13-r00.js",bank:"thpt-g12-chiv-b11-b13-public-r00.json",selector:"data-g12-chiv-hub",public:88,total:88},
 {roman:"v",name:"V",start:14,end:17,short:"chv",runtime:"thpt-g12-chv-b14-b17-r01.js",bank:"thpt-g12-chv-b14-b17-public-r01.json",selector:"data-g12-chv-hub",public:96,total:96}
];
const golden=read("docs/assets/javascripts/thpt-r4-preview.js");
const g11=read("docs/thpt-preview/sgk/lop-11/chuong-i/luyen-tap.md");
assert(golden.includes('thpt-r4-practice-dialog')&&golden.includes('thpt-r4-modal-question-nav')&&golden.includes('data-thpt-open-quiz'),
 "G10/G11 approved Golden R4 modal engine/contract changed");
assert(g11.includes('data-thpt-practice-hub')&&g11.includes('data-thpt-open-quiz')&&g11.includes('thpt-r4-practice-card-grid'),
 "Accepted G11 hub disappeared");
assert(!/<details\b[^>]*class=["'][^"']*thpt-r4-practice-card/.test(g11),
 "Approved G11 buttons must not regress to inline expanding question stacks");
const modalPath="docs/assets/javascripts/thpt-g12-golden-formative-modal-v1.js";
const modal=read(modalPath);
for(const text of ["thpt-r4-practice-dialog","thpt-r4-modal-question-nav","thpt-r4-practice-card-grid","dataset.g12GoldenOpen","solution.open=true","thpt-g12-golden-solution","thpt-g12-golden-d6","THPT_G12_GOLDEN_HUB"]){
 assert(modal.includes(text),"Shared G12 adapter missing Golden/R3 boundary: "+text);
}
for(const code of ["localStorage","sessionStorage","firebase.","setDoc(","recordMastery","SGK_CHAPTER_READINESS","TOPIC_READINESS"]){
 assert(!modal.includes(code),"G12 formative Golden must not write progress or impersonate RD1: "+code);
}
for(const config of ["mkdocs.yml","mkdocs.thpt-preview.yml"]){
 const c=read(config);
 assert(c.includes("thpt-r4-preview.js")&&c.includes("thpt-g12-golden-formative-modal-v1.js"),
  "Site must load G10/G11 Golden and G12 adapter: "+config);
}
for(const ch of chapter){
 const prefix="docs/thpt-preview/sgk/lop-12/chuong-"+ch.roman+"/";
 const hub=read(prefix+"luyen-tap.md");
 const end=read(prefix+"tu-kiem-tra-chuong.md");
 const js=read("docs/assets/javascripts/"+ch.runtime);
 const bank=JSON.parse(read("docs/assets/data/"+ch.bank));
 assert(hub.includes(ch.selector),"Ch"+ch.name+" requires separate chapter practice hub");
 assert(!/data-canonical-item|<details\b[^>]*class=["'][^"']*thpt-r4-practice-card/.test(hub),
  "No inline question lists or nested exercise accordions in learner hub Ch"+ch.name);
 assert(js.includes("THPT_G12_GOLDEN_HUB?.mount(root,bank,{chapter:\""+ch.name+"\"})"),
  "G12 Ch"+ch.name+" must bind approved Golden modality, not a private inline renderer");
 assert(bank.mode==="CLIENT_SELF_CHECK_NO_MASTERY","No independent RD1/Mastery from G12 public bank Ch"+ch.name);
 assert(Array.isArray(bank.items)&&bank.items.length===ch.total&&new Set(bank.items.map(x=>x.item_id)).size===ch.total,
  "Frozen public canonical IDs not unique on Ch"+ch.name);
 const count=ch.name==="I"?bank.items.filter(x=>/^B\d{2}$/.test(x.lesson_id)).length:bank.items.length;
 assert(count===ch.public,"Source placements missing on chapter hub Ch"+ch.name);
 assert(end.includes("data-g12-"+ch.short+"-selfcheck"),"Protected self-check route missing Ch"+ch.name);
 for(let n=ch.start;n<=ch.end;n++){
  const lesson=read(prefix+"bai-"+n+".md");
  assert(lesson.includes("../luyen-tap/#b"+String(n).padStart(2,"0")+"-core"),
   "Knowledge-to-Core chapter link missing B"+n);
  assert(lesson.includes("../luyen-tap/#b"+String(n).padStart(2,"0")+"-practice"),
   "Knowledge-to-Practice chapter link missing B"+n);
 }
}
const helper=read("scripts/test-thpt-g12-golden-modal-helper.cjs");
for(const text of ['.thpt-g12-golden-card','[data-canonical-item]','[data-thpt-canonical-item]','Exactly one question','No answer before','Draft retained']){
 assert(helper.includes(text),"Golden browser test does not prove required interaction: "+text);
}
const tutor=read("docs/assets/javascripts/floating-ai-tutor-v1.js");
const tutorTest=read("scripts/test-floating-ai-thpt-route-browser.cjs");
for(const x of ["isReadingPage","isTHPTReadingPage","floating-ai-launcher","floating-ai-panel"]){
 assert(tutor.includes(x),"Shared AI Tutor protected contract missing "+x);
}
for(const x of ["thpt-preview/sgk/chuong-ii/bai-3/","thpt-preview/sgk/lop-11/chuong-i/bai-1/","thpt-preview/sgk/lop-12/chuong-i/bai-1/","thpt-preview/sgk/lop-12/chuong-iv/bai-11/","thpt-preview/sgk/lop-12/chuong-iv/tu-kiem-tra-chuong/"]){
 assert(tutorTest.includes(x),"Tutor browser Q16 and shared-route regression coverage missing "+x);
}
assert(exists("docs/thpt-preview/chuyen-de/ham-so/luyen-tap.md"),
 "Keep legacy THPT Topic demo visible; it does NOT authorize Topic production");
assert(read("docs/thpt-preview/chuyen-de/ham-so/luyen-tap.md").includes("PRACTICE-THPT-DEMO-01"),
 "Historic ham-so practice is a demonstration, not independent reviewed Topic or its Golden release");
const registry=new Set(chapter.map(c=>"chuong-"+c.roman));
const gradeDir="docs/thpt-preview/sgk/lop-12";
const unexpectedChapters=fs.readdirSync(path.join(base,gradeDir),{withFileTypes:true}).filter(e=>e.isDirectory()&&/^chuong-[ivx]+$/.test(e.name)&&!registry.has(e.name)&&exists(gradeDir+"/"+e.name+"/luyen-tap.md")).map(e=>e.name);
assert.deepEqual(unexpectedChapters,[],"New G12 chapter practice requires explicit Golden and browser contract registration");
const topicsDir="docs/thpt-preview/chuyen-de";
const futureTopics=fs.readdirSync(path.join(base,topicsDir),{withFileTypes:true}).filter(e=>e.isDirectory()&&e.name!=="ham-so"&&exists(topicsDir+"/"+e.name+"/luyen-tap.md")).map(e=>e.name);
assert.deepEqual(futureTopics,[],"New THPT Topic practice must register Golden modal, three-page UX and independent browser/Q16 gate first");
console.log("PASS Golden RELEASE AP/R: G10/G11 reference modal, G12 I-V five chapter hubs, canonical source-locked items, one-question browser contract, Q16 boundary and G10/G11/G12 AI Tutor regression. New Topic production remains separate gated release.");
