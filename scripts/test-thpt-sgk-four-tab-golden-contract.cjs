#!/usr/bin/env node
"use strict";
/*
 * Strict Golden preview contract. Test ONLY owner-review HTML, never claim
 * the 79 published lessons comply before approved source + migration.
 * No node modules, no production code or data touched.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const file=path.resolve(__dirname,"../prototypes/thpt/ux795/Temp_THPT_SGK_79_Editorial_Golden_Review_20261112.html");
function validate(html){
 const names=[...html.matchAll(/<button id="tab-(\d)"[^>]*role="tab"[^>]*>([^<]+)<\/button>/g)].map(m=>({n:Number(m[1]),text:m[2].trim()}));
 assert.deepEqual(names,[
  {n:1,text:"1. Khám phá kiến thức"},{n:2,text:"2. Kiến thức SGK"},
  {n:3,text:"3. Ví dụ"},{n:4,text:"4. Lỗi thường gặp"}
 ],"exact 4 owner-proposed Level-1 tab labels and 1–4");
 const panels=[...html.matchAll(/<section class="panel" id="panel-(\d)"[\s\S]*?<\/section>/g)];
 assert.equal(panels.length,4,"one and only one learner panel for each tab");
 const expectedMin=[3,4,2,2];
 for(let i=0;i<4;i++){
  const n=i+1,s=panels[i][0];
  assert.equal(Number(panels[i][1]),n,"tab and panel number order");
  const h=[...s.matchAll(/<h2>([^<]+)<\/h2>/g)].map(m=>m[1].trim());
  assert(h.length>=expectedMin[i],"tab "+n+" missing required model subsections");
  for(let j=0;j<h.length;j++){
   assert(h[j].startsWith(n+"."+(j+1)+". "), "tab "+n+" subsection "+(j+1)+" not sequential or has duplicated H2");
  }
  if(i===1){
   assert(!/<h2>\s*(?:2\.\s*)?Kiến thức SGK\s*<\/h2>/i.test(s),"no duplicate SGK heading inside Knowledge tab");
   assert(s.indexOf("<h2>2.1.")>=0&&s.indexOf("<h2>2.1.")<s.indexOf("<p>"),
     "Knowledge tab begins directly with 2.1, no preface");
   assert(!/<h2>[^<]*(?:Bản chất trước công thức|Kiến thức tiền đề|Hướng dẫn đọc hình)[^<]*<\/h2>/i.test(s),
    "no PED checklist subheadings in Knowledge tab");
   for(const token of ['class="boxed"','class="formula"','class="memory"','class="table-scroll"'])
    assert(s.includes(token),"important definition/formula/memory/table presentation absent: "+token);
  }
  if(i===2)assert(s.includes("Lời giải")&&s.includes("Kết luận"),"solved EXs belong in tab 3");
 }
 assert(html.indexOf("<svg")<html.indexOf("<figcaption")&&html.includes('role="img"'),
  "illustration with accessible description must precede reading caption");
 assert(html.includes("vertical-align:middle")&&html.includes("td:first-child"),
  "table numeric/text cell alignment semantics must be consistent");
 assert(html.includes("max-width:720px")||html.includes("max-width:720"),"formula mobile presentation must not overflow");
 assert(!/firebase\.initializeApp|mastery\.write|RD1_PRIVATE_KEYS/.test(html),
  "Golden preview must not write student data or embed RD1");
 return true;
}
const html=fs.readFileSync(file,"utf8");
assert(validate(html),"Golden candidate fixture");
const negatives=[
 [html.replace("<h2>2.1.","<h2>2.2."),"bad first Knowledge heading"],
 [html.replace("3. Ví dụ</button>","3. Luyện tập</button>"),"wrong tab vocabulary"],
 [html.replace('class="formula"','class="unboxed"'),"missing formula frame"],
 [html.replace("<h2>4.1.","<h2>4.2."),"mistake numbering skips 4.1"]
];
for(const [mutant,label] of negatives)assert.throws(()=>validate(mutant),undefined,"negative regression must catch "+label);
console.log("PASS Golden four-tab fixture: exact 1.x–4.x, Knowledge opens at 2.1, examples 3.x, mistakes 4.x, boxes/table/figure and 4 negative tests.");
console.log("NOT owner-approved, NOT an SGK S1 mapping verdict, NOT a production 79-lesson AP/R gate.");
