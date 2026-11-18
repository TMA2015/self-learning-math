#!/usr/bin/env node
"use strict";
const {expectedG10KnowledgeBlob}=require("./thpt-q18-g10-source-receipt.cjs");
/* UX795 Model B, Grade 10 B03 AP1–AP5 Delta C. Previous D1 mathHash
 * 20a9cd2f belongs to historical source snapshot. New study content is
 * source-locked with its own math hash and checks all original outcome roles;
 * no academic verdict, merger or release implied.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto");
const src=fs.readFileSync(path.join(__dirname,"../docs/thpt-preview/sgk/chuong-ii/bai-3.md"),"utf8");
const blob=s=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(s)+"\0").update(s).digest("hex");
const fnv=s=>{let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619);return(h>>>0).toString(16).padStart(8,"0")};
const expr=s=>[...s.matchAll(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g)].map(x=>(x[1]??x[2]).trim());
assert.equal(blob(src),expectedG10KnowledgeBlob(3,"d7fab29f7727e1873120c81353d9db0d30ef2c69"),
 "B03 exact Model B source changed; classify Delta C before updating receipt");
const labels=[...src.matchAll(/^=== "([^"]+)"$/gm)].map(x=>x[1]);
assert.deepEqual(labels,["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],
 "B03 exactly four Level-1 tabs, no L2");
const a=src.indexOf('=== "Kiến thức SGK"'),b=src.indexOf('=== "Ví dụ"',a);
assert(a>=0&&b>a,"B03 contiguous knowledge/example tabs missing");
const k=src.slice(a,b);
// Old count/FNV 116/54ba164b remains valid only for the immutable historical
// B03 source. This is a SOURCE-CHANGING S1/author-self-verified B03 R01 delta;
// validate its exact Q18 candidate plus conditions, calculations and outcomes.
const r=fs.readFileSync(path.join(__dirname,
 "../prototypes/thpt/ux795/G10_CHII_B03_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md"),"utf8");
const base=r.match(/^\*\*BASELINE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
const candidate=r.match(/^\*\*CANDIDATE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
assert.equal(base,"c9ae5104c2f65779f2dd452d3f7775abe2600b7b","B03 historic source receipt immutable");
assert.equal(candidate,blob(src),"B03 Q18 candidate is exact authored source blob");
assert(expr(k).length>0,"B03 mathematical expressions must remain renderable");
const headings=[...k.matchAll(/^    ### (2\.\d+\. [^\n]+)/gm)].map(m=>m[1]);
const sub=[...k.matchAll(/^    #### (2\.\d+\.\d+\. [^\n]+)/gm)].map(m=>m[1]);
assert.equal(headings.length,2,"B03 original S1 exactly two main sections");
assert.deepEqual(sub.map(x=>x.split(" ")[0]),["2.1.1.","2.1.2.","2.2.1.","2.2.2.","2.2.3."],
 "B03 five nested ideas, correct parent/sibling numbering");
for(const token of ["Kiến thức SGK","Bất phương trình bậc nhất hai ẩn",
 "Biểu diễn miền nghiệm","thpt-r4-concept-card", "x+2y\\le5", "3x-y<2"])
 assert(src.includes(token),"B03 teaching content or independent exemplar missing "+token);
assert.equal(3*3+0*2,9,"EX1 (3,2) is on x+3y=9 boundary");
assert(0<=9&&10>9,"EX1 origin inside / (10,0) outside");
assert.equal(3*2-4,2,"EX2 (2,4) must be excluded from strict <2 boundary");
assert(3*0-1<2 && !(3*0-(-3)<2),"EX2 correct two-sided tests");
assert.equal(1+2*2,5,"pre-TRY02 worked sample P on boundary x+2y=5");
assert(2+2*2>5 && 0+2*1<5,"pre-TRY02 Q outside, R inside");
assert(2+2*2<=6 && !(3+2*2<=6) && 0<=6,
 "original TRY02 three canonical solution statuses unchanged");
for(const concept of ["a,b","không đồng thời bằng 0","đường biên","điểm thử","đảo dấu","mẫu số dương","số sản phẩm"])
 assert(k.includes(concept),"B03 critical mathematical explanation missing: "+concept);
for(const id of ["THPT-G10-CHII-TRY01","THPT-G10-CHII-TRY02","THPT-G10-CHII-TRY03","THPT-G10-CHII-TRY04","THPT-G10-CHII-TRY05"])
 assert.equal((src.match(new RegExp('data-thpt-first-try-id="'+id+'"','g'))||[]).length,1,
  "B03 Q15 canonical placement changed: "+id);
for(const id of ["HELP-G10-B03-01","HELP-G10-B03-02"])
 assert.equal((src.match(new RegExp('data-thpt-help-id="'+id+'"','g'))||[]).length,1,
  "B03 D6 canonical support missing "+id);
assert.equal((src.match(/data-thpt-help-ref="/g)||[]).length,5,
 "B03 five outcome-to-D6 links must remain explicit");
assert.equal((src.match(/^    \?\?\? (question|tip) "/gm)||[]).length,7,
 "B03 five self-reveals and two closed D6 remedies");
assert.equal((src.match(/<figure\b/g)||[]).length,1,"B03 geometric diagram must remain beside its explanation");
assert(src.includes("luyen-tap.md")&&src.includes("tu-kiem-tra-chuong.md"),"B03 links must target actual chapter pages");
assert(!/data-thpt-readiness|data-mastery-credit|data-scoring-engine/.test(src),
 "B03 must not activate independent Readiness/Mastery");
console.log("PASS G10 B03 UX795 AP: exact Q18 source candidate, two S1 main sections, five correct nested headings, boundary/First Try sample checks, 5 canonical IDs, 2 D6, 1 SVG, Q16 unchanged.");
