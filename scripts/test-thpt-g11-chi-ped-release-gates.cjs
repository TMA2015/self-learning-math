#!/usr/bin/env node
"use strict";
require("./thpt-g11-historical-source-replay.cjs")();
// Release-gate guard: source-locked academic correctness is NOT PED or runtime readiness.
const assert=require("node:assert/strict"),fs=require("node:fs"),vm=require("node:vm");
const read=p=>fs.readFileSync(p,"utf8");
const packet=read("prototypes/thpt/release-queue/ready/G11-SGK-CHI-B01-B04.md");
const handoff=read("prototypes/thpt/release-handoffs/G11-SGK-CHI-B01-B04_HANDOFF_V2_20261102.md");
const review=read("prototypes/thpt/review-packets/G11_SGK_CHI_B01_B04_R03_COMBINED_INDEPENDENT_REVIEW_RECEIPT_20261102.md");
const readiness=read("docs/thpt-preview/sgk/lop-11/chuong-i/tu-kiem-tra-chuong.md");
assert.match(packet,/^STATE: CONTENT_READY$/m,"Academic ready is not release ready");
assert.match(packet,/^RELEASE_SCOPE: FULL_LEARNING_PATH$/m);
assert.match(packet,/^ACADEMIC_SOURCE_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3$/m);
assert.match(handoff,/^ACADEMIC_VERDICT: PASS$/m);
assert.match(handoff,/^PEDAGOGICAL_VERDICT: PASS$/m);
assert.match(handoff,/^BLOCKERS: NONE$/m);
assert(review.includes("256ceb5edc5e02aec320e83e99c8e08e035654f3"),"Independent R03 receipt missing exact source");
assert.match(readiness,/data-g11-chapter-selfcheck="CHI"/,"Client-side Final Submit is staged");
assert.match(readiness,/không thay thế đánh giá độc lập/,"Selfcheck must not claim independent evidence");
const selfcheck=JSON.parse(read("docs/assets/data/thpt-g11-selfcheck/CHI.json"));
assert.equal(selfcheck.scope,"SGK_CHAPTER_SELF_CHECK");
assert.equal(selfcheck.items.length,20);
assert.equal(new Set(selfcheck.items.map(x=>x.item_id)).size,20);
assert.equal(selfcheck.mastery_credit,false);
assert.equal(selfcheck.independent_readiness_credit,false);
assert.equal(selfcheck.persist_results,false);
assert.equal(selfcheck.public_client_answer_keys,true);
assert(selfcheck.items.every(x=>x.type==="WRITTEN_RUBRIC"&&x.rubric),"Human rubric review only; never auto-grade open Written");
const selfcheckJS=read("docs/assets/javascripts/thpt-g11-reviewed-selfcheck-v1.js");
assert(selfcheckJS.includes("independent_readiness_credit!==false")&&!/localStorage\.setItem|sessionStorage\.setItem/.test(selfcheckJS),
 "Selfcheck must not write progress or claim official Readiness");
for(let i=1;i<=6;i++)
 assert.match(packet,new RegExp("^- \\[x\\] PED"+i+"_","m"),"PED"+i+" must have an independent academic-scope receipt");
for(let i=1;i<=5;i++)
 assert.match(packet,new RegExp("^- \\[x\\] AP"+i+"_","m"),"AP"+i+" must be backed by independent PED and browser QA");
for(let i=1;i<=5;i++)
 assert.match(packet,new RegExp("^- \\[x\\] R"+i+"_","m"),"Release gate R"+i+" must be explicitly documented");
assert.match(packet,/41392601965/,"Missing precise THPT Preview QA receipt");
assert.match(packet,/41392602056/,"Missing precise Roadmap QA receipt");
assert.match(packet,/Final-HEAD QA/,"Latest metadata HEAD still needs final CI recheck");

const getBank=(path,name)=>{
 const w={};vm.runInNewContext(read(path),{window:w});
 const bank=w[name];assert(bank?.validate().valid,"Public bank schema invalid");
 return bank.records;
};
const older=getBank("docs/assets/javascripts/thpt-g11-chi-reviewed-formative-v1.js",
 "THPT_G11_CHI_REVIEWED_FORMATIVE");
const newer=getBank("docs/assets/javascripts/thpt-g11-chi-b03-b04-reviewed-formative-r01.js",
 "THPT_G11_CHI_B03_B04_REVIEWED_FORMATIVE");
assert.equal(older.length,16);assert.equal(newer.length,26);
const ids=[...older,...newer].map(x=>x.item_id);
assert.equal(new Set(ids).size,42,"Duplicate formative canonical ID");
const library=read("docs/thpt-preview/thu-vien/tu-luan-g11-chuong-i-b01-b02.md");
const written=["THPT-G11-CHI-W01","THPT-G11-CHI-W02-ANCHOR",
 "THPT-G11-CHI-W03","THPT-G11-CHI-W04-ANCHOR"];
for(const id of written)
 assert.equal(library.split('data-thpt-written-canonical="'+id+'"').length-1,1,
  "Shared Written ID missing or duplicated: "+id);
assert.equal(new Set([...ids,...written]).size,46,"Public ID collision");
for(const lesson of [3,4]){
 const page=read("docs/thpt-preview/sgk/lop-11/chuong-i/bai-"+lesson+".md");
 const d1=page.indexOf("## 1. Kiến thức SGK"),d2=page.indexOf("## 2. Ví dụ");
 assert(d1>=0&&d2>d1,"Missing D1/D2 learner progression");
 assert(page.indexOf("## 4. Tự khắc phục lỗi")>d2,"Missing D6");
 assert(page.slice(0,d1).includes("## Trước khi học: Vì sao cần kiến thức này?"),
  "Reviewed concept-first explanation must be visible before D1");
 assert(page.includes("## Hướng suy luận trong các ví dụ"),"Reviewed example thinking absent");
 assert(page.includes("data-ped-first-try="),"Ungraded voluntary first try missing");
}
const publicFiles=[read("docs/assets/javascripts/thpt-g11-chi-reviewed-formative-v1.js"),
 read("docs/assets/javascripts/thpt-g11-chi-b03-b04-reviewed-formative-r01.js")].join("\n");
assert(!/THPT-G11-CHI-RD1-|SGK_CHAPTER_READINESS.*mastery_credit\s*:\s*true/i.test(publicFiles),
 "Protected RD1/mastery marker unexpectedly in public bank");
console.log("PASS G11 ChI A6 guard: 46 unique PUBLIC IDs; independent PED1–6 academic PASS; AP1–5 and R1–R5 evidences archived; final exact-head QA must be SUCCESS on this metadata commit before merge; 20 voluntary items have no Mastery/Readiness credit.");
