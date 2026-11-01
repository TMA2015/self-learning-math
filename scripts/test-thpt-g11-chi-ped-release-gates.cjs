#!/usr/bin/env node
"use strict";
// Release-gate guard: source-locked academic correctness is NOT PED or runtime readiness.
const assert=require("node:assert/strict"),fs=require("node:fs"),vm=require("node:vm");
const read=p=>fs.readFileSync(p,"utf8");
const packet=read("prototypes/thpt/release-queue/inventory/G11-SGK-CHI-B01-B04-R01.md");
const audit=read("prototypes/thpt/release-queue/G11_CHI_PED_AP_GAP_AUDIT_20261102.md");
const readiness=read("docs/thpt-preview/sgk/lop-11/chuong-i/tu-kiem-tra-chuong.md");
assert.match(packet,/^STATE: HOLD$/m,"No release-ready without independent PED/AP/Final Submit gates");
assert.match(packet,/^RELEASE_SCOPE: FULL_LEARNING_PATH$/m);
assert.match(readiness,/CHƯA KÍCH HOẠT/,"No independent chapter readiness is live");
for(let i=1;i<=6;i++){
 assert.match(packet,new RegExp("^- \\[ \\] PED"+i+"_","m"),"PED"+i+" must remain explicitly unapproved");
 assert.match(audit,new RegExp("\\| PED"+i+" — [^\\n]+\\| (OPEN|PARTIAL / NOT PASS) \\|"),"PED"+i+" requires gap evidence");
}
for(let i=1;i<=5;i++)
 assert.match(packet,new RegExp("^- \\[ \\] AP"+i+"_","m"),"AP"+i+" not independently accepted");
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
 assert(!page.slice(0,d1).includes("## 0. Vấn đề"),
  "Concept-first content was changed: re-audit PED evidence and manifest");
}
const publicFiles=[read("docs/assets/javascripts/thpt-g11-chi-reviewed-formative-v1.js"),
 read("docs/assets/javascripts/thpt-g11-chi-b03-b04-reviewed-formative-r01.js")].join("\n");
assert(!/THPT-G11-CHI-RD1-|SGK_CHAPTER_READINESS.*mastery_credit\s*:\s*true/i.test(publicFiles),
 "Protected RD1/mastery marker unexpectedly in public bank");
console.log("PASS G11 ChI A6 guard: 46 unique PUBLIC IDs; PED1–6/AP1–5 explicitly OPEN; independent self-check inactive; no release claim.");
