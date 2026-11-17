#!/usr/bin/env node
"use strict";
/* Governance-only exact blob guard: owner-approved HTML STRUCTURE is NOT
   authorization to replace colors, font, size, spacings or G10 B01-B06 UI.
   The 13 SHA locks below come from actual published MAIN
   92d05d3b3939b385123495d7237d19995c3ea505.
   This guard preserves accepted B01–B07 bytes and checks B08-only CSS append;\n   it is NOT a replacement for browser visual AP1–AP5.
*/
const fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const baseline={
  "mkdocs.yml": "0567277340fa5c062dd83e63f7e8796556d1ba51",
  "mkdocs.thpt-preview.yml": "a18192415be322da6b3bdea6e6ca462cf1a189b4",
  "docs/assets/stylesheets/site-design-system.css": "cede51cfff25ef4f6c612c894c81f4639625c32b",
  "docs/assets/stylesheets/thpt-r4-preview.css": "f46b7280965c226039093c408dc7f8e3e78001fa",
  "docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css": "2aaaa262a1e3fe8195ab507bad2f08302302341e",
  "docs/assets/stylesheets/thpt-sgk-lesson-nav-v1.css": "4bf16bba1cd144f0a69c932d8ead24dd4534f4cb",
  "docs/assets/javascripts/thpt-sgk-lesson-nav-v1.js": "938a9f8fb62e76978e5eba73784f6966b2140c43",
  "docs/thpt-preview/sgk/chuong-i/bai-1.md": "dba6430cd79b17dee0591fb2dcd075ea5200b126",
  "docs/thpt-preview/sgk/chuong-i/bai-2.md": "3002487e974f2693528a39b2b2055fad8724d698",
  "docs/thpt-preview/sgk/chuong-ii/bai-3.md": "03cf894ec9e4fb55b86201ab43dab21c48337ef3",
  "docs/thpt-preview/sgk/chuong-ii/bai-4.md": "4c8bfa2bd9af3ac5a31da945abdc990ceaee4618",
  "docs/thpt-preview/sgk/chuong-iii/bai-5.md": "79f8101d34430bc0d672558115191a95875014a6",
  "docs/thpt-preview/sgk/chuong-iii/bai-6.md": "2f0b998bb7306b47dff3a4e9f0c8c910edf7f6f9"
};
const sha=bytes=>{
  const b=Buffer.isBuffer(bytes)?bytes:Buffer.from(bytes);
  return crypto.createHash("sha1").update(Buffer.from("blob "+b.length+"\0")).update(b).digest("hex");
};
function verify(files){
 for(const [name,hash] of Object.entries(baseline)){
  const actual=files[name];
  assert(actual!==undefined,"Missing inherited Golden UI/source "+name);
  if(name==="docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css"){
   const receipt=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHIV_B08_SEMANTIC_3PLUS1_DELTA_R04_20261117.md"),"utf8");
   const f=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(f("BASELINE_R05_B07_CSS_BLOB"),hash,
    "B08 owner 3+1 source-lock must build on accepted B07 CSS, not stale 12/11 fixture");
   assert.equal(sha(actual),f("R04_CSS_BLOB"),
    "B08 only exact approved scoped CSS may extend existing Golden palette");
   const txt=actual.toString("utf8"),at=txt.indexOf("/* G10 ChIV B08 R04");
   assert(at>0&&txt.indexOf("/* G10 ChIV B08 R04",at+1)<0,
    "B08 only one owner-approved 3+1 append");
   assert.equal(sha(txt.slice(0,at-1)),hash,
    "B01–B07 production CSS source is byte-for-byte unchanged");
  }else assert.equal(sha(actual),hash,
    "Owner-approved current G10 B01–B07 baseline must NOT change in governance PR: "+name);
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
assert(standard.startsWith("# SELF-LEARNING MATH — TIÊU CHUẨN CHẤT LƯỢNG HỌC LIỆU THPT THỐNG NHẤT v3.2.0"),
 "Versioned SAME canonical standard v3.2.0, not a competing standard file");
assert(standard.includes("## X-F. OWNER DECISION 12/11/2026"),"Missing one Q01–Q18 editorial amendment");
assert(standard.includes("Không duyệt giao diện màu sắc, cỡ chữ")&&standard.includes("Bài 1–6 Toán 10"),
 "No explicit owner style-preservation agreement in canonical Q01–Q18");
assert(standard.includes("## II. Ma trận chuẩn chất lượng duy nhất Q01–Q18"),
 "Do not remove academic/assessment criteria");
const mutant={...files,["docs/assets/stylesheets/thpt-r4-preview.css"]:Buffer.concat([files["docs/assets/stylesheets/thpt-r4-preview.css"],Buffer.from("\n/* changed demo palette */\n")])};
assert.throws(()=>verify(mutant),/baseline must NOT change/,"style mutation must FAIL");
const modified={...files,["docs/thpt-preview/sgk/chuong-i/bai-1.md"]:Buffer.concat([files["docs/thpt-preview/sgk/chuong-i/bai-1.md"],Buffer.from("\n# demo source drift\n")])};
assert.throws(()=>verify(modified),/baseline must NOT change/,"source mutation must FAIL");
console.log("PASS OWNER GOLDEN IMMUTABILITY: original config/JS and G10 B01–B06 untouched; B07 CSS prefix exact; owner-approved B08-only appendix. No demo CSS imported. Negative drift tests 2/2 FAIL as intended.");
console.log("This is NOT browser color/font-size/spacing QA. Future chapter migrations require visual AP1–AP5 at 390/820/1440, P1/P2 and owner release approval.");
