#!/usr/bin/env node
"use strict";
/* G10 ChIII FULL R03 RELEASE-only learner UI guard.
 * Academic: AUTHORING #749 immutable composite source Git blob
 * 9d186b2eb8d1c8250a716014beae3021625a6f6c;
 * independent component reviewer receipt blob
 * aeae036a487ffd8e30f1fd4bc65c655f7724e8f1.
 * No new item, private RD1, new standard, Gemini or Mastery change.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs"),path=require("node:path");
const root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const fnv=s=>{let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619)>>>0;return h.toString(16).padStart(8,"0")};
const lessons=[
 {n:5,expectedOriginalFNV:"d2a9f02b",start:1},
 {n:6,expectedOriginalFNV:"74763784",start:6}
];
const ids=[];
for(const {n,start,expectedOriginalFNV} of lessons){
 const p="docs/thpt-preview/sgk/chuong-iii/bai-"+n+".md",txt=read(p);
 const anchor="## 1. Kiến thức";
 assert.equal(txt.split(anchor).length,2,"One original D1/D2 section "+p);
 const before=txt.slice(0,txt.indexOf(anchor)),after=txt.slice(txt.indexOf(anchor));
 assert.equal(fnv(after),expectedOriginalFNV,"Original reviewed D1/D2/SVG/D6 must remain byte-identical "+p);
 assert(before.includes("Trước khi học — hiểu ý nghĩa trước khi nhớ quy tắc"),"Concept-first before formulas "+p);
 for(const l of ["Vì sao cần học?","Em đã biết gì?","Hiểu bản chất trước công thức","Cách đọc hình và hình dung","Vì sao làm theo cách này?","Tự thử trước Core"]){
  assert.equal(before.split("**"+l+"**").length-1,5,"Five outcomes must each include "+l+" in "+p);
 }
 const matches=[...before.matchAll(/<details class="thpt-r4-pedagogical-note" markdown="1" data-ped-first-try="1" data-thpt-first-try-id="(THPT-G10-CHIII-TRY\d\d)">/g)];
 assert.equal(matches.length,5,"Expected five voluntary First Try disclosures in "+p);
 assert.equal((before.match(/<summary>Em đã tự thử\? Mở lời giải để đối chiếu<\/summary>/g)||[]).length,5);
 assert.equal((before.match(/<\/details>/g)||[]).length,5,"All voluntary responses must close");
 matches.forEach((m,i)=>{
  const id="THPT-G10-CHIII-TRY"+String(start+i).padStart(2,"0");
  assert.equal(m[1],id,"Canonical First Try order changed");
  ids.push(id);
 });
 assert(!/(?:PED1|PED2|PED3|PED4|PED5|PED6) ·/.test(before),"Authoring labels exposed to student");
 assert(!/REVIEW_RECEIPT|NOTEBOOKLM_PENDING|CONTENT_READY:/i.test(before),"Review/internal metadata leaked");
 assert(!/\bR0[1-9]\b|HELP-G10-B0\d-\d\d|Hình hình/u.test(before),"Internal author labels or typo exposed to learner "+p);
 assert(txt.includes('href="../luyen-tap/"')&&txt.includes('href="../tu-kiem-tra-chuong/"'),"Original learner routes missing");
 assert.equal((after.match(/data-thpt-help-id="/g)||[]).length,2,"Original D6 must be unchanged");
 assert(after.includes("## 2. Ví dụ")&&after.includes("## 3. Hình minh họa"),"Academic D2/D5 not present");
}
assert.equal(new Set(ids).size,10,"Each First Try has one canonical item ID");
const b06=read("docs/thpt-preview/sgk/chuong-iii/bai-6.md");
assert(/b=6,\s*c=8/.test(b06)&&b06.includes("A=30°")&&b06.includes("A=150°")&&b06.includes("=12"),"Original reviewed TRY08 area-transfer case changed");
assert(b06.includes("(3,4,5)")&&b06.includes("(2,3,6)")&&b06.includes("không"),"Original reviewed TRY09 triangle-validity case changed");
const practice=read("docs/thpt-preview/sgk/chuong-iii/luyen-tap.md");
const check=read("docs/thpt-preview/sgk/chuong-iii/tu-kiem-tra-chuong.md");
assert(practice.includes("data-thpt-practice-hub")&&practice.includes("data-thpt-open-quiz"),"Golden practice not preserved");
assert(check.includes('data-g10-chapter-selfcheck="CHIII"')&&check.includes("Final Submit"),"Q16 self-check changed");
assert(!check.includes("data-mastery-credit=")&&!practice.includes("data-mastery-credit="),"No new Mastery credit");
console.log("PASS G10 ChIII FULL R03: 10 unique source-locked First Tries, PED1–PED6, original D1/D2/D5/D6 byte parity, TRY08/09, Golden/Q16 stable.");
