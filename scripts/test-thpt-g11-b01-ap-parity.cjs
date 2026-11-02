#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const page=fs.readFileSync(path.join(__dirname,"../docs/thpt-preview/sgk/lop-11/chuong-i/bai-1.md"),"utf8");
const start=page.indexOf("## 1. Kiến thức SGK"),end=page.indexOf("## 2. Ví dụ",start);
assert(start>=0&&end>start,"G11 B01 expected knowledge block");
const fnv=s=>{let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619);return (h>>>0).toString(16).padStart(8,"0")};
const math=s=>[...s.matchAll(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g)].map(x=>(x[1]??x[2]).trim());
const knowledge=page.slice(start,end),formulas=math(knowledge);
assert.equal(formulas.length,27,"G11 B01 knowledge expression count");
assert.equal(fnv(JSON.stringify(formulas)),"2682a78b","Source-order math changed: classify academic delta");
// The only allowed header delta is the approved B01 learner-facing scope correction.
const newLead="Chương I gồm Bài 1–4; Bài tự kiểm tra cuối chương chỉ hỗ trợ tự đối chiếu sau Final Submit, không ghi điểm thành thạo.";
const frozenLead="Phạm vi đang công bố chỉ gồm Bài 1–2.";
const prefix=page.slice(0,start);
assert(prefix.includes(newLead),"G11 B01 must identify four lessons and selfcheck-only Final Submit");
assert(prefix.includes("## Trước khi học: Vì sao cần kiến thức này?"),"Missing reviewed B01 concept-first introduction");
assert(prefix.includes('data-ped-first-try="1"'),"Missing reviewed low-stakes first try");
const originalPrefix=prefix.slice(0,prefix.indexOf("## Trước khi học:"))
 .replace(newLead,frozenLead).replace("Tự kiểm tra · tự đối chiếu","Tự kiểm tra · chưa kích hoạt");
assert.equal(fnv(originalPrefix),"2e140b61","Frozen original B01 header changed beyond approved reviewed PED & UX scope");
const suffix=page.slice(end);
assert(suffix.includes("## Hướng suy luận trong các ví dụ"),"B01 PED5 evidence not displayed");
assert(suffix.includes("### Hướng dẫn đọc hình, đồ thị"),"B01 PED4 evidence not displayed");
const origSuffix=suffix.replace(/^## Hướng suy luận trong các ví dụ\n\n[\s\S]*?(?=^## 3\. )/m,"")
 .replace(/^### Hướng dẫn đọc hình, đồ thị\n\n[\s\S]*?(?=^## 4\. )/m,"");
assert.equal(fnv(origSuffix),"987319a3","Original B01 examples, SVG, HELP and written routes changed");
for(const name of [
"### 1. Góc lượng giác và số đo",
"### 2. Radian và độ dài cung",
"### 3. Đường tròn lượng giác",
"### 4. Tang, côtang và điều kiện xác định",
"### 5. Các góc liên quan đặc biệt",
"**Các góc cùng tia cuối.**",
"**Đổi giữa độ và radian:**",
"**Hệ thức cơ bản (đúng với mọi α):**",
"**Điều kiện:**",
"**Góc phụ:**"
])assert(knowledge.includes(name),"AP teaching group missing: "+name);
for(const key of ["s=R|α|","M=(cos α,sin α)","sin²α+cos²α=1","tan α=sin α/cos α","cot α=cos α/sin α"])
 assert(knowledge.includes("\\[\n"+key+"\n\\]"),"Display formula missing: "+key);
assert(!/\\bD1\\.\\d\\b/.test(knowledge),"Technical outcome labels in student Knowledge");
assert(!/data-thpt-readiness|data-mastery-credit|data-scoring-engine/.test(page),"Protected assessment activated");
console.log("PASS G11 B01 AP1/AP2/AP4 source: 27/27 unchanged math expressions, protected examples/SVG/HELP exact, no learner scoring; browser AP3/AP5 checked separately.");
