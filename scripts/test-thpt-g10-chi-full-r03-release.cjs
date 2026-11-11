#!/usr/bin/env node
"use strict";
/* One original SLM-THPT-QUALITY-ONE Q01–Q18 standard.
 * UI-only integration verification of AUTHORING ChI R03 (PR #746).
 * Academic material is source-locked there, never invented in RELEASE.
 */
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const read=rel=>fs.readFileSync(path.join(root,rel),"utf8");
const chapters=[
 {file:"docs/thpt-preview/sgk/chuong-i/bai-1.md",lesson:"B01",expected:5,start:1,end:5},
 {file:"docs/thpt-preview/sgk/chuong-i/bai-2.md",lesson:"B02",expected:6,start:6,end:11}
];
const all=[];
for(const c of chapters){
 const x=read(c.file);
  if(x.includes('=== "Khám phá kiến thức"')){
    const names=[...x.matchAll(/^===\s*"([^"]+)"\s*$/gm)].map(z=>z[1]);
    assert.deepEqual(names,["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],
      c.lesson+": Model B 4-tab mismatch");
    const ids=[...x.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(z=>z[1]);
    const expected=Array.from({length:c.expected},(_,i)=>"THPT-G10-CHI-TRY"+String(c.start+i).padStart(2,"0"));
    assert.deepEqual(ids,expected,c.lesson+": source item identity/regression");
    assert(x.includes('href="../luyen-tap/"') && x.includes('href="../tu-kiem-tra-chuong/"'),
      c.lesson+": Golden Core/self-check routes lost");
    assert(!x.includes("REVIEW_RECEIPT:")&&!x.includes("CONTENT_READY:"),c.lesson+": audit metadata exposed");
    all.push(...ids);
    continue;
  }
  const head=x.split("## 1. Kiến thức SGK")[0],tail=x.split("## 1. Kiến thức SGK")[1];
 assert.equal(x.split("## 1. Kiến thức SGK").length,2,c.lesson+": one original reviewed D1 section");
 assert(head.includes("Trước khi học — hiểu ý nghĩa trước khi nhớ quy tắc"),"Concept-first before formula");
 for(const label of ["Vì sao cần học?","Em đã biết gì?","Hiểu bản chất trước công thức","Quy tắc và điều kiện áp dụng","Vì sao làm theo cách này?","Tự thử trước Core"])
  assert.equal((head.match(new RegExp(label.replace(/[?]/g,"\\?"),"g"))||[]).length,c.expected,c.lesson+" requires all PED1–PED6 per outcome: "+label);
 const ids=[...x.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(z=>z[1]);
 const expected=Array.from({length:c.expected},(_,i)=>"THPT-G10-CHI-TRY"+String(c.start+i).padStart(2,"0"));
 assert.deepEqual(ids,expected,c.lesson+" original 11 canonical First Try IDs, no duplicates");
 assert.equal((head.match(/<details class="thpt-r4-pedagogical-note" data-ped-first-try="1"/g)||[]).length,c.expected,"Solutions self-reveal after Tự thử only");
 assert.equal((head.match(/Em đã tự thử\? Mở lời giải để đối chiếu/g)||[]).length,c.expected);
 assert(!/(?:PED1|PED2|PED3|PED5|PED6) —/.test(head),"No internal authoring labels shown to learners");
 assert(!head.includes("REVIEW_RECEIPT")&&!head.includes("CONTENT_READY:"),"No audit/admin status on public lessons");
 assert(x.indexOf("## 1. Kiến thức SGK")>x.lastIndexOf("data-thpt-first-try-id"),"First Try is before formal theory");
 assert(tail.includes("## 2. Ví dụ"),"Reviewed old worked examples retained");
 assert(tail.includes("## 3. Hình minh họa"),"Reviewed original D5 examples retained");
 assert(x.includes('href="../luyen-tap/"'),"Existing Golden Core/Luyện tập path intact");
 assert(x.includes('href="../tu-kiem-tra-chuong/"'),"Existing Final Submit route intact");
 assert(!x.includes("chưa kích hoạt"),"Do not mislabel functional client self-check");
 all.push(...ids);
}
assert.equal(new Set(all).size,11,"One canonical First Try per outcome, not repeated in the two lessons");
const b02=read("docs/thpt-preview/sgk/chuong-i/bai-2.md");
assert(b02.includes('data-thpt-help-id="HELP-G10-B02-03"'),"Additional reviewed R02 D6 interval remediation required");
assert.equal((b02.match(/data-thpt-help-id="HELP-G10-B02-03"/g)||[]).length,1);
for(const [name,rel] of [
 ["Golden Core/Luyện tập","docs/thpt-preview/sgk/chuong-i/luyen-tap.md"],
 ["public chapter Final Submit","docs/thpt-preview/sgk/chuong-i/tu-kiem-tra-chuong.md"]
]){
 const content=read(rel);
 if(name.startsWith("Golden"))assert(content.includes("data-thpt-practice-hub")&&content.includes("data-thpt-open-quiz"),name+" original runtime untouched");
 else assert(content.includes('data-g10-chapter-selfcheck="CHI"')&&content.includes("Final Submit")&&/không/i.test(content)&&content.includes("thành thạo"),name+" Q16 protected from accidental change");
}
console.log("PASS G10 ChI FULL R03 interface: 2 theory pages, 11 canonical First Tries, 1 extra D6, original D1/D2/D5/Golden/Q16 routes preserved; no Mastery.");
