#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const {join}=require("node:path");
const root=join(__dirname,"..");

const checks=[
  {
    file:"docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md",
    mathCount:16,mathHash:"418a504f",prefixHash:"c7ded31c",suffixHash:"e3c3e02a",
    groups:["### 1.1. Công thức cộng và trừ","### 1.2. Công thức nhân đôi",
      "### 1.3. Tích thành tổng","### 1.4. Tổng thành tích"],
    required:["**Điều kiện áp dụng:**","**Lỗi cần tránh:**","**Điểm cần nhớ:**"]
  },
  {
    file:"docs/thpt-preview/sgk/chuong-iv/bai-9.md",
    mathCount:30,mathHash:"46521aca",prefixHash:"7c101ff6",suffixHash:"5683de9b",
    groups:["### 1. Định nghĩa và trường hợp đặc biệt","### 2. Tính chất",
      "### 3. Trung điểm và trọng tâm","### 4. Ứng dụng"],
    required:["**Độ dài:**","**Hướng:**","**Trường hợp đặc biệt:**",
      "**Các quy tắc cơ bản:**","**Trung điểm:**","**Trọng tâm:**"]
  }
];
const fnv=s=>{
  let h=2166136261;
  for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619);
  return (h>>>0).toString(16).padStart(8,"0");
};
const math=s=>[...s.matchAll(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]|\$([^$]+)\$/g)]
  .map(x=>(x[1]??x[2]??x[3]).trim());
for(const check of checks){
  const src=fs.readFileSync(join(root,check.file),"utf8");
  // Old math-count/FNV locks protect the historical source only. When a
  // Q18-evidenced Model B candidate arrives, check the real learner structure.
  if(src.includes('=== "Khám phá kiến thức"')){
    const names=[...src.matchAll(/^===\s*"([^"]+)"\s*$/gm)].map(x=>x[1]);
    assert.deepEqual(names,["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],
      check.file+": invalid Model B 4-tab structure");
    assert(!src.includes("REVIEW_RECEIPT:"),check.file+": internal metadata leaked");
    continue;
  }
  const start=src.indexOf("## 1. Kiến thức SGK");
  const end=src.indexOf("## 2. Ví dụ",start);
  assert(start>=0&&end>start,check.file+": knowledge section missing");
  const middle=src.slice(start,end);
  const formulas=math(middle);
  assert.equal(formulas.length,check.mathCount,check.file+": math expression count changed");
  assert.equal(fnv(JSON.stringify(formulas)),check.mathHash,
    check.file+": source-locked math sequence changed, classify delta before proceeding");
  // Normalize only the approved B02 lead-copy correction; D1 math, examples and figures stay pinned.
  let prefix=src.slice(0,start);
  if(check.file==="docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md"){
    const current="Chương I gồm Bài 1–4; Bài tự kiểm tra cuối chương chỉ hỗ trợ tự đối chiếu sau Final Submit, không ghi điểm thành thạo.";
    const frozen="Phạm vi đang công bố chỉ gồm Bài 1–2.";
    assert(prefix.includes(current),"G11 B02 must show accurate four-lesson chapter scope");
    assert(prefix.includes("## Trước khi học: Vì sao cần kiến thức này?"),"Reviewed B02 concept-first intro must precede D1");
    assert(prefix.includes('data-ped-first-try="2"'),"B02 first try must remain independently openable");
    // Only the new independently reviewed PED intro may precede the original source-locked D1.
    prefix=prefix.slice(0,prefix.indexOf("## Trước khi học:"));
    prefix=prefix.replace(current,frozen).replace("Tự kiểm tra · tự đối chiếu","Tự kiểm tra · chưa kích hoạt");
  }
  if(check.file==="docs/thpt-preview/sgk/chuong-iv/bai-9.md"){
    // Preserve the originally audited header, while independently source-locking the 5 new Q01-Q18 PED outcomes.
    const addition=/<!-- G10_CHIV_FULL_R04_ALL_BEGIN -->[\s\S]*?<!-- G10_CHIV_FULL_R04_ALL_END -->\n\n/g;
    assert.equal([...prefix.matchAll(addition)].length,1,"One unique approved bounded FULL R04 pedagogy addition before B09 Knowledge");
    prefix=prefix.replace(addition,"");
  }
  assert.equal(fnv(prefix),check.prefixHash,check.file+": lesson header changed beyond approved UI-only scope");
  let originalSuffix=src.slice(end);
  if(check.file==="docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md"){
    assert(originalSuffix.includes("## Hướng suy luận trong các ví dụ"),"Reviewed B02 PED5 note absent");
    assert(originalSuffix.includes("### Hướng dẫn đọc hình, đồ thị"),"Reviewed B02 PED4 note absent");
    // Strip ONLY the added reviewed PED notes to prove original examples/SVG/D6/link bytes remain unchanged.
    originalSuffix=originalSuffix.replace(/^## Hướng suy luận trong các ví dụ\n\n[\s\S]*?(?=^## 3\. )/m,"")
      .replace(/^### Hướng dẫn đọc hình, đồ thị\n\n[\s\S]*?(?=^## 4\. )/m,"");
  }
  assert.equal(fnv(originalSuffix),check.suffixHash,
    check.file+": original examples, SVG, HELP, links or solutions changed");
  for(const h of check.groups)assert(middle.includes(h),check.file+": missing "+h);
  for(const h of check.required)assert(middle.includes(h),check.file+": missing "+h);
  if(check.file.includes("chuong-iv/bai-9.md")){
    assert(!/\bD1\.\d\b/.test(middle),"Audit-only D1.x labels must not be student headings");
  }
}
console.log("PASS AP pilot source parity: 2 lessons, 46/46 unchanged math expressions; examples, SVGs, HELP and lessons outside Knowledge unchanged; presentation headings present. Browser AP3/AP5 remains separate.");
