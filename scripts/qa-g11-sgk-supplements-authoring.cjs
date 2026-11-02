#!/usr/bin/env node
"use strict";
/** AUTHORING-only structural QA. Does NOT issue Academic/PED PASS or release permission. */
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const assert = require("node:assert/strict");
const root=path.resolve(__dirname,"../prototypes/thpt/review-packets");
const filenames=[
 "Temp_G11_SGK_EXPERIENCE_P99_P104_PUBLIC_D1_D6_AUTHOR_R00_20261102.md",
 "Temp_G11_SGK_YEAR_END_P105_P109_PUBLIC_D1_D6_AUTHOR_R00_20261102.md"
];
const review="Temp_G11_SGK_SUPPLEMENTS_P99_P109_FULL_NOTEBOOKLM_REVIEW_R00_20261102.md";
const images=[
 "Temp_FIG-G11-SUPP-E01-01_R00.svg","Temp_FIG-G11-SUPP-E01-02_R00.svg",
 "Temp_FIG-G11-SUPP-E02-01_R00.svg","Temp_FIG-G11-SUPP-E02-02_R00.svg",
 "Temp_FIG-G11-SUPP-E02-03_R00.svg",
 "Temp_FIG-G11-YR-01_R00.svg","Temp_FIG-G11-YR-02_R00.svg","Temp_FIG-G11-YR-03_R00.svg"
];
const read=f=>fs.readFileSync(path.join(root,f),"utf8");
const sha=s=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+Buffer.byteLength(s),"utf8"),Buffer.from([0]),Buffer.from(s,"utf8")])).digest("hex");
const text=read(review), globalItems=new Set(), globalOutcomes=new Set(), stats=[];
const expected=[{outcomes:11,items:27,worked:12,written:6,help:11},{outcomes:11,items:41,worked:16,written:10,help:12}];
const getMatches=(s,re,project)=>([...s.matchAll(re)]).map(project);
for(let n=0;n<filenames.length;n++){
 const s=read(filenames[n]), goal=expected[n], originalSHA=sha(s);
 assert(text.includes(s),"review bundle is missing exact original candidate "+filenames[n]);
 assert(text.includes(originalSHA),"review source missing Git blob SHA for "+filenames[n]);
 const m=s.match(/## OUTCOME_IDS\n([\s\S]*?)(?=\n## )/);
 assert(m,"missing OUTCOME_IDS "+filenames[n]);
 const outcomes=getMatches(m[1],/^- (G11-[A-Z0-9_-]+)$/gm,x=>x[1]);
 const items=getMatches(s,/^### (THPT-G11-[A-Z0-9_-]+) \| skill_id=(G11-[A-Z0-9_-]+) \| placement=(SGK_[A-Z_]+) \| role=([A-Z_]+)$/gm,x=>({id:x[1],out:x[2],place:x[3],role:x[4]}));
 const help=getMatches(s,/^### (HELP-G11-[A-Z0-9_-]+) \| skill_id=(G11-[A-Z0-9_-]+) \| return_item=(THPT-G11-[A-Z0-9_-]+)$/gm,x=>({id:x[1],out:x[2],returnItem:x[3]}));
 const ex=getMatches(s,/^### (EX-G11-[A-Z0-9_-]+) \| skill_id=(G11-[A-Z0-9_-]+)/gm,x=>x[1]);
 assert.equal(outcomes.length,goal.outcomes,"outcomes count "+n);
 assert.equal(new Set(outcomes).size,outcomes.length,"outcome IDs repeat");
 assert.equal(items.length,goal.items,"canonical item count");
 assert.equal(new Set(items.map(x=>x.id)).size,items.length,"item duplicate in packet");
 assert.equal(items.filter(x=>x.place==="SGK_WRITTEN").length,goal.written,"Written count");
 assert.equal(ex.length,goal.worked,"worked-example count");
 assert.equal(help.length,goal.help,"D6 HELP count");
 for(const x of items){
  assert(outcomes.includes(x.out),"undefined primary outcome "+x.id);
  assert(!globalItems.has(x.id),"cross-packet duplicate "+x.id);
  globalItems.add(x.id);
  if(x.place==="SGK_WRITTEN")assert(["WRITTEN","ANCHOR_TAG"].includes(x.role),"bad Written role "+x.id);
 }
 for(const x of outcomes){
  assert(!globalOutcomes.has(x),"outcome ID shared incorrectly "+x);
  globalOutcomes.add(x);
  assert(items.some(item=>item.out===x),"outcome lacks formative item "+x);
  assert(help.some(item=>item.out===x),"outcome lacks targeted D6 "+x);
 }
 for(const h of help){
  assert(items.some(item=>item.id===h.returnItem&&item.out===h.out),"D6 points to unknown/wrong-skill item "+h.id);
  assert(!/RD1|MASTERY_ACTIVATED/.test(h.returnItem),"protected assessment target "+h.id);
 }
 stats.push({file:filenames[n],Git_blob_SHA:originalSHA,outcomes:outcomes.length,items:items.length,examples:ex.length,Written:goal.written,help:help.length});
}
for(const f of images){
 const s=read(f);const id=sha(s);
 assert(text.includes(s),"review bundle SVG not byte-equal "+f);
 assert(text.includes(id),"review missing SVG Git blob "+f);
 assert(/<svg[^>]+xmlns="http:\/\/www.w3.org\/2000\/svg"/.test(s),"bad SVG XML root "+f);
 assert(/<title[^>]*>[^<]+<\/title>/.test(s),"missing SVG title "+f);
 assert(/<desc[^>]*>[^<]+<\/desc>/.test(s),"missing SVG accessible description "+f);
 assert(/viewBox="\d+ \d+ \d+ \d+"/.test(s),"missing SVG viewBox "+f);
 assert(!/<script|<foreignObject|xlink:href|href="https?:/i.test(s),"unsafe SVG external execution/reference "+f);
}
assert.equal(globalOutcomes.size,22);
assert.equal(globalItems.size,68);
assert(text.includes("PERMANENT_SOURCES_VERSION: 2.1"),"wrong permanent-source review version");
assert(/NOT_NOTEBOOKLM_REVIEWED/.test(text),"cannot auto-PASS missing independent reviewer");
console.log(JSON.stringify({status:"AUTHORING_STRUCTURAL_PASS_ONLY",outcomes:22,publicCanonicalIDs:68,SVG:8,HELP:23,academicVerdict:"INDEPENDENT_PENDING",release:"HOLD",stats},null,2));
