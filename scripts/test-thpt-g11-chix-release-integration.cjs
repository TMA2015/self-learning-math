#!/usr/bin/env node
"use strict";
require("./thpt-g11-historical-source-replay.cjs")();
// RELEASE ChIX source-lock safety; academic verdict belongs to independent reviewer receipt.
const assert=require("node:assert/strict"),fs=require("node:fs"),crypto=require("node:crypto"),vm=require("node:vm");
const read=p=>fs.readFileSync(p,"utf8");
const blob=b=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\0"),b])).digest("hex");
const sourcePath="prototypes/thpt/content-drafts/G11_CHIX_B31_B33_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md";
const receiptPath="prototypes/thpt/review-packets/G11_CHIX_B31_B33_V2_COMPOSITE_HISTORIC_REVIEW_AND_OWNER_S1_RECEIPT_20261102.md";
assert.equal(blob(fs.readFileSync(sourcePath)),"3fe3b1a12fac656b543ba3ba2743e3ba855c4fe0","Reviewed source exact Git SHA");
assert.equal(blob(fs.readFileSync(receiptPath)),"4280a1741ccde038bbd5ae22af5def0d8683c7e8","Composite independent receipt exact SHA");
assert.equal(blob(fs.readFileSync("prototypes/thpt/review-packets/Temp_THPT_G11_CHIX_B31_B33_PUBLIC_D1_D6_AUTHOR_REVIEW_R00_20261101.md")),"3fe3b1a12fac656b543ba3ba2743e3ba855c4fe0","Review source alias parity");
const s=read(sourcePath); const d3=s.slice(s.indexOf("## PART D —"),s.indexOf("## PART E —"));
const headings=[...d3.matchAll(/^#### (THPT-G11-CHIX-(?:B(?:31|32|33)|CHIX)-[CP]\d{2}) · skill_id=`([^`]+)` · placement=`([^`]+)`$/gm)];
assert.equal(headings.length,62,"Source 62 public canonical D3 IDs");
const field=(part,key)=>{const line=part.split("\n").find(x=>x.startsWith("**"+key+":** "));assert(line,"Field "+key);return line.slice(key.length+6).trim()};
const original=headings.map((h,i)=>{const p=d3.slice(h.index+h[0].length,headings[i+1]?.index??d3.length);const role=h[3]==="SGK_CORE"?"CORE":h[3]==="SGK_APPLICATION"?"APPLICATION":"PRACTICE";const lesson=h[1].match(/-B(31|32|33)-/)?.[1]??"33";return {item_id:h[1],lesson,grade:"11",role,skill:h[2],stem:field(p,"Đề"),hint:"Xem lại khái niệm, điều kiện và ví dụ giải của Bài "+lesson+" trước khi tự thử.",solution:"Đáp án: "+field(p,"Đáp án (chỉ sau khi nộp bài luyện tập formative)")+"\nLời giải: "+field(p,"Giải thích bản chất và cách chọn phương pháp"),difficulty:role==="CORE"?"CORE_APPLY":role==="APPLICATION"?"APPLICATION":"PRACTICE_APPLY",exposure:"FORMATIVE_ONLY"};});
const window={};vm.runInNewContext(read("docs/assets/javascripts/thpt-g11-chix-b31-b33-source-locked-formative-r00.js"),{window});const bank=window.THPT_G11_CHIX_REVIEWED_FORMATIVE;
assert(bank?.validate().valid,"bank validate source and uniqueness");
assert.equal(JSON.stringify(bank.records),JSON.stringify(original),"Strict 62 original stems, answers, skills, roles and IDs");
assert.equal(original.filter(q=>q.role==="CORE").length,31);assert.equal(original.filter(q=>q.role==="PRACTICE").length,31);
const book=JSON.parse(read("docs/assets/data/thpt-g11-selfcheck/CHIX.json"));
assert.equal(book.original_public_source_blob,"3fe3b1a12fac656b543ba3ba2743e3ba855c4fe0");
assert.equal(book.mode,"PUBLIC_CANONICAL_REFERENCE_ONLY");
assert.equal(book.mastery_credit,false);assert.equal(book.independent_readiness_credit,false);assert.equal(book.persist_results,false);
assert.equal(book.item_refs.length,31);assert.equal(new Set(book.item_refs).size,31);
const expected=original.filter(q=>q.role==="PRACTICE").map(q=>q.item_id);assert.deepEqual(book.item_refs,expected,"Same exact PUBLIC canonical Practice IDs, no cloned key");
const written=read("docs/thpt-preview/thu-vien/tu-luan-g11-chuong-ix.md");
const d4=s.slice(s.indexOf("## PART E —"),s.indexOf("## PART F —"));const wheads=[...d4.matchAll(/^#### (THPT-G11-CHIX-B(?:31|32|33)-W\d{2}) · role=`(ANCHOR_TAG|WRITTEN)`/gm)];
assert.equal(wheads.length,9);for(const h of wheads)assert.equal(written.split('data-thpt-written-canonical="'+h[1]+'"').length-1,1,"One Written item ID "+h[1]);
assert.equal(written.split("<summary>Em đã làm? Mở lời giải và rubric /4</summary>").length-1,9,"Nine closed-by-default original Written solutions");
for(const n of [31,32,33]){const page=read("docs/thpt-preview/sgk/lop-11/chuong-ix/bai-"+n+".md");assert.equal((page.match(/data-ped-first-try="1"/g)||[]).length,1);assert.equal((page.match(/data-thpt-help-id=/g)||[]).length,n===32?5:3);assert.equal((page.match(/\.svg/g)||[]).length,n===33?1:2);const ex=s.match(new RegExp("^#### EX-G11-CHIX-B"+n+"-\d{2}","gm"))||[];assert.equal((page.match(new RegExp("#### EX-G11-CHIX-B"+n+"-\d{2}","g"))||[]).length,ex.length)}
const figures=["B31-01","B31-02","B32-01","B32-02","B33-01"];for(const f of figures){const id="FIG-G11-CHIX-"+f+"_R00.svg";assert.equal(blob(fs.readFileSync("docs/assets/images/thpt/"+id)),blob(fs.readFileSync("prototypes/thpt/review-packets/Temp_"+id)),"SVG original exact "+id)}
const engine=read("docs/assets/javascripts/thpt-g11-reviewed-selfcheck-v1.js"),router=read("docs/assets/javascripts/thpt-r4-preview.js");assert(engine.includes('if(chapter==="CHIX")')&&engine.includes("CHIX:31"));assert(router.includes("THPT_G11_CHIX_REVIEWED_FORMATIVE")&&router.includes('3[0-3]'));
assert(!read("docs/thpt-preview/sgk/lop-11/chuong-ix/tu-kiem-tra-chuong.md").includes("Đáp án:"));
console.log("PASS G11 ChIX: exact Git source+review SHA, 62 D3/9 Written/5 SVG/11 D6, Q16 31 public refs, no RD1/Mastery");
