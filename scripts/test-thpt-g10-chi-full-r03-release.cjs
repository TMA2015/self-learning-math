#!/usr/bin/env node
"use strict";
const {expectedG10KnowledgeBlob}=require("./thpt-q18-g10-source-receipt.cjs");
/* Q01–Q18 single-standard preservation during owner-approved UX795 Delta C.
 * Grade 10 ChI model B replaces the six QA-heading layout with four coherent
 * Level-1 tabs. This gate is NOT academic authoring approval; exact source
 * blob locks and all canonical First Try/HELP/Q16 boundaries remain mandatory.
 */
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict"),crypto=require("node:crypto");
const root=path.resolve(__dirname,".."),read=rel=>fs.readFileSync(path.join(root,rel),"utf8");
const gitBlob=s=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(s,"utf8")+"\0").update(s,"utf8").digest("hex");
const tabs=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
const cases=[
  {file:"docs/thpt-preview/sgk/chuong-i/bai-1.md",id:"B01",first:1,last:5,helps:["HELP-G10-B01-01","HELP-G10-B01-02"],
   figures:1,sha:"0b8729751a2de0aec450543adfd1808a1a1e1483",
   concepts:["mệnh đề","phủ định","kéo theo","tương đương","lượng từ"]},
  {file:"docs/thpt-preview/sgk/chuong-i/bai-2.md",id:"B02",first:6,last:11,helps:["HELP-G10-B02-01","HELP-G10-B02-02","HELP-G10-B02-03"],
   figures:2,sha:"e122cc154ecdf53709a89f0b8af2f3961f4c6515",
   concepts:["phần tử","tập con","tập rỗng","hợp","giao","hiệu","phần bù","khoảng"]}
];
const seen=[];
for(const c of cases){
  const s=read(c.file);
  assert.equal(gitBlob(s),expectedG10KnowledgeBlob(c.id,c.sha),c.id+": exact source receipt changed; classify Delta before updating lock");
  assert.deepEqual([...s.matchAll(/^=== "([^"]+)"$/gm)].map(m=>m[1]),tabs,
    c.id+": four and only four Level-1 tabs in owner-approved order");
  assert(!/^ {4}=== "/m.test(s),c.id+": no Level-2 tabs in Phase 1");
  for(const w of c.concepts)
    assert(s.toLowerCase().includes(w),c.id+": core outcome missing: "+w);
  const ids=[...s.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(m=>m[1]);
  const expected=Array.from({length:c.last-c.first+1},(_,i)=>
    "THPT-G10-CHI-TRY"+String(c.first+i).padStart(2,"0"));
  assert.deepEqual(ids,expected,c.id+": original Q15 canonical First Try IDs lost/duplicated");
  const helpers=[...s.matchAll(/data-thpt-help-id="([^"]+)"/g)].map(m=>m[1]);
  assert.deepEqual(helpers,c.helps,c.id+": D6 remedial IDs changed or duplicated");
  assert.equal((s.match(/^    \?\?\? (?:question|tip) "/gm)||[]).length,ids.length+helpers.length,
    c.id+": 1 closed-by-default disclosure per formative/remediation ID");
  assert.equal((s.match(/<figure\b/g)||[]).length,c.figures,c.id+": reviewed D5/SVG figures lost");
  assert.equal((s.match(/\\\(/g)||[]).length,(s.match(/\\\)/g)||[]).length,c.id+": unmatched inline TeX");
  assert.equal((s.match(/\\\[/g)||[]).length,(s.match(/\\\]/g)||[]).length,c.id+": unmatched display TeX");
  assert(s.includes("luyen-tap.md")&&s.includes("tu-kiem-tra-chuong.md"),
    c.id+": Core and end-check links must resolve to MkDocs source pages");
  assert(!/PREREQUISITE_CONFIRMED|PED[1-6]\/PED|D5 kế thừa|REVIEW_RECEIPT|CONTENT_READY:/.test(s),
    c.id+": internal QA metadata leaked to student text");
  assert(!s.includes("chưa kích hoạt"),c.id+": functional chapter self-check mislabeled");
  seen.push(...ids);
}
assert.equal(new Set(seen).size,11,"exactly 11 Q15 canonical First Try IDs across ChI");
const b02=read(cases[1].file);
assert.equal((b02.match(/data-thpt-help-id="HELP-G10-B02-03"/g)||[]).length,1,
  "B02 extra reviewed interval remediation HELP must remain present");
const practice=read("docs/thpt-preview/sgk/chuong-i/luyen-tap.md");
assert(practice.includes("data-thpt-practice-hub")&&practice.includes("data-thpt-open-quiz"),
  "Golden Core/Luyện tập runtime unchanged");
const self=read("docs/thpt-preview/sgk/chuong-i/tu-kiem-tra-chuong.md");
assert(self.includes('data-g10-chapter-selfcheck="CHI"')&&self.includes("Final Submit")
  &&/không/i.test(self)&&self.includes("thành thạo"),"Q16 Final Submit and Mastery boundary preserved");
const nav=read("docs/assets/javascripts/thpt-sgk-lesson-nav-v1.js");
assert(nav.includes('10:[2,4,6,11,14,18,22,25,27]')&&nav.includes("data-sgk-lesson-nav"),
  "Golden SGK lesson navigation contract preserved outside Knowledge content");
console.log("PASS G10 ChI UX795: 4 Level-1 tabs, exact B01/B02 snapshot SHA, 11 Q15 tries, 5 HELP, 3 original SVG, collapsed answers and protected Q16/Golden routes.");
