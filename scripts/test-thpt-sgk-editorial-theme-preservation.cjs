#!/usr/bin/env node
"use strict";
/* Governance-only exact blob guard: owner-approved HTML STRUCTURE is NOT
   authorization to replace colors, font, size, spacings or G10 B01-B06 UI.
   The 13 SHA locks below are verified current main b103cd91cd32a2ff3accd1ae14c24870330ef9a2.\n    Two asset blobs changed before this governance PR; this guard locks\n    exact PR baseline, not a visual acceptance or permission for design changes.
   This is a PRE-MIGRATION non-change guard, NOT visual AP1-AP5 acceptance.
*/
const fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const baseline={
  "mkdocs.yml": "0567277340fa5c062dd83e63f7e8796556d1ba51",
  "mkdocs.thpt-preview.yml": "a18192415be322da6b3bdea6e6ca462cf1a189b4",
  "docs/assets/stylesheets/site-design-system.css": "cede51cfff25ef4f6c612c894c81f4639625c32b",
  "docs/assets/stylesheets/thpt-r4-preview.css": "f46b7280965c226039093c408dc7f8e3e78001fa",
  "docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css": "44442773ac31eb1a46f0cab699a7d2c7974a5f37",
  "docs/assets/stylesheets/thpt-sgk-lesson-nav-v1.css": "4bf16bba1cd144f0a69c932d8ead24dd4534f4cb",
  "docs/assets/javascripts/thpt-sgk-lesson-nav-v1.js": "f1e19da9e6629d267010ba055f29482daaaecd59",
  "docs/thpt-preview/sgk/chuong-i/bai-1.md": "fb4bd72f6101523e30e30cc970d74c23b76228a8",
  "docs/thpt-preview/sgk/chuong-i/bai-2.md": "8a7b90f1768b789429def045e38ebe97e6adbf3a",
  "docs/thpt-preview/sgk/chuong-ii/bai-3.md": "c9ae5104c2f65779f2dd452d3f7775abe2600b7b",
  "docs/thpt-preview/sgk/chuong-ii/bai-4.md": "2c432958169cd9f3a8a66e6bc07610b6a60d5815",
  "docs/thpt-preview/sgk/chuong-iii/bai-5.md": "d45eacd18ad14ee3bdf90a1fe4ba24926b602cd2",
  "docs/thpt-preview/sgk/chuong-iii/bai-6.md": "3a2f4392357b0a7155488ba2427fbb2dde0dde81"
};
const sha=bytes=>{
  const b=Buffer.isBuffer(bytes)?bytes:Buffer.from(bytes);
  return crypto.createHash("sha1").update(Buffer.from("blob "+b.length+"\0")).update(b).digest("hex");
};
function verify(files){
 for(const [name,hash] of Object.entries(baseline)){
  const actual=files[name];
  assert(actual!==undefined,"Missing inherited Golden UI/source "+name);
  assert.equal(sha(actual),hash,"Owner G10 B01–B06 baseline must NOT change in governance PR: "+name);
 }
 return true;
}
const files=Object.fromEntries(Object.keys(baseline).map(n=>[n,fs.readFileSync(path.join(root,n))]));
verify(files);
const demo="prototypes/thpt/ux795/Temp_THPT_SGK_79_Editorial_Golden_Review_20261112.html";
for(const config of ["mkdocs.yml","mkdocs.thpt-preview.yml"]){
 const text=files[config].toString("utf8");
 assert(!text.includes(demo)&&!text.includes("Temp_THPT_SGK_79_Editorial_Golden_Review_20261112"),"Standalone demo must not be imported by production config");
}
const standard=fs.readFileSync(path.join(root,"prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md"),"utf8");
assert(/^# SELF-LEARNING MATH — TIÊU CHUẨN CHẤT LƯỢNG HỌC LIỆU THPT THỐNG NHẤT v3\.1\.[01]/.test(standard),
  "SAME canonical Q01–Q18 standard, not a competing file");
if(standard.includes("**VERSION:** `3.1.1-CANDIDATE`"))
  assert(standard.includes("**STATUS:** `GOVERNANCE_DRAFT_OWNER_REVIEW`")
    &&standard.includes("ONLY_AFTER_OWNER_APPROVAL_AND_GOVERNANCE_MERGE"),
    "Draft v3.1.1 must not claim owner-effective release");
assert(standard.includes("## X-F. OWNER DECISION 12/11/2026"),"Missing one Q01–Q18 editorial amendment");
assert(standard.includes("Không duyệt giao diện màu sắc, cỡ chữ")&&standard.includes("Bài 1–6 Toán 10"),
 "No explicit owner style-preservation agreement in canonical Q01–Q18");
assert(standard.includes("## II. Ma trận chuẩn chất lượng duy nhất Q01–Q18"),
 "Do not remove academic/assessment criteria");
const mutant={...files,["docs/assets/stylesheets/thpt-r4-preview.css"]:Buffer.concat([files["docs/assets/stylesheets/thpt-r4-preview.css"],Buffer.from("\n/* changed demo palette */\n")])};
assert.throws(()=>verify(mutant),/baseline must NOT change/,"style mutation must FAIL");
const modified={...files,["docs/thpt-preview/sgk/chuong-i/bai-1.md"]:Buffer.concat([files["docs/thpt-preview/sgk/chuong-i/bai-1.md"],Buffer.from("\n# demo source drift\n")])};
assert.throws(()=>verify(modified),/baseline must NOT change/,"source mutation must FAIL");
console.log("PASS OWNER GOLDEN STYLE IMMUTABILITY: 7 live theme/config/JS blobs and 6 original G10 B01–B06 lesson blobs unchanged. No demo CSS imported. Negative drift tests 2/2 FAIL as intended.");
console.log("This is NOT browser color/font-size/spacing QA. Future chapter migrations require visual AP1–AP5 at 390/820/1440, P1/P2 and owner release approval.");
