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
  // Owner-approved UX795 Model B (Delta C): preserve the previously locked 30
  // formal expressions in their original order while pinning the NEW exact source
  // and its canonical IDs. G11 B02 and all non-UX795 logic remain unchanged.
  if(check.file==="docs/thpt-preview/sgk/chuong-iv/bai-9.md") {
    const labels=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
    const tabs=[...src.matchAll(/^=== "([^"]+)"$/gm)].map(m=>m[1]);
    assert.deepEqual(tabs,labels,"G10 B09 must have exactly four owner-approved Level-1 tabs");
    const start=src.indexOf('=== "Kiến thức SGK"');
    const end=src.indexOf('=== "Ví dụ"',start);
    assert(start>=0&&end>start,"G10 B09 contiguous Knowledge area missing");
    const body=src.slice(start,end);
    const actual=math(body).map(x=>x.replace(/\s+/g," ").trim());
    const frozen=["k\\in\\mathbb R","\\vec u","k\\vec u","|k\\vec u|=|k|\\,|\\vec u|","\\vec u\\ne\\vec0","k>0","k\\vec u","\\vec u","k<0","k=0","\\vec u=\\vec0","k\\vec u=\\vec0","k(\\vec u+\\vec v)=k\\vec u+k\\vec v","(k+m)\\vec u=k\\vec u+m\\vec u","k(m\\vec u)=(km)\\vec u","1\\vec u=\\vec u","(-1)\\vec u=-\\vec u","\\vec u","\\vec v","t\\ne0","\\vec v=t\\vec u","M","AB","\\overrightarrow{AM}=\\tfrac12\\overrightarrow{AB}","G","ABC","M","BC","\\overrightarrow{AG}=\\tfrac23\\overrightarrow{AM}=\\tfrac13(\\overrightarrow{AB}+\\overrightarrow{AC}), \\quad \\overrightarrow{GA}+\\overrightarrow{GB}+\\overrightarrow{GC}=\\vec0.","k"];
    const hasConsecutiveLegacy=actual.some((_,i)=>i+frozen.length<=actual.length&&
      frozen.every((v,j)=>actual[i+j]===v));
    assert(hasConsecutiveLegacy,"G10 B09 original 30 academic expressions changed, removed or reordered");
    for(const heading of ["### 1. Định nghĩa và trường hợp đặc biệt",
      "### 2. Tính chất","### 3. Trung điểm và trọng tâm","### 4. Ứng dụng"])
      assert(body.includes(heading),"G10 B09 source-locked topic missing: "+heading);
    const tries=[...src.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(m=>m[1]);
    const helps=[...src.matchAll(/data-thpt-help-id="([^"]+)"/g)].map(m=>m[1]);
    assert.equal(tries.length,5,"G10 B09 five canonical First Try IDs must survive");
    assert.equal(new Set(tries).size,5,"G10 B09 duplicate First Try ID");
    assert.equal(helps.length,2,"G10 B09 two canonical HELP IDs must survive");
    assert.equal(new Set(helps).size,2,"G10 B09 duplicate HELP");
    assert.equal((src.match(/^    \?\?\? (question|tip)/gm)||[]).length,7,
      "G10 B09 existing self-reveal/remediation must remain collapsed");
    assert.equal(fnv(src),"caa5d2b4",
      "G10 B09 exact Model B source snapshot changed; update receipt after Delta classification");
    console.log("PASS G10 B09 UX795: four Level-1 tabs, 30/30 frozen mathematical expressions, 5 tries, 2 HELP, exact snapshot");
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
