#!/usr/bin/env node
"use strict";
/* UX795 G10 ChIII: approved four-tab Delta C learner presentation.
 * The original source/AUTHORING receipts remain historical, immutable;
 * revised Knowledge requires new exact Git snapshots and Q01–Q18 gates.
 * This checks Q15/16 and mathematical scope, not an independent PED verdict.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto");
const root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const sha1=s=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(s)+"\0").update(s).digest("hex");
const labels=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
const lessons=[
 {n:5,start:1,sha:"dd1a9ecaa51a6ad1da0a6d86d6ac39847be68140",helps:["HELP-G10-B05-01","HELP-G10-B05-02"],figs:1, concepts:["\\sin","\\cos","\\tan","\\cot","180"]},
 {n:6,start:6,sha:"0806c3f48c0b99109ff1b2531f9a839a3a16ec8c",helps:["HELP-G10-B06-01","HELP-G10-B06-02"],figs:2,concepts:["\\cos","\\sin","Heron","diện tích","bán kính"]}
];
const all=[];
for(const c of lessons){
 const p="docs/thpt-preview/sgk/chuong-iii/bai-"+c.n+".md",txt=read(p);
 assert.equal(sha1(txt),c.sha,"B"+c.n+": exact Delta C source changed; lock Q18 receipt before accepting");
 assert.deepEqual([...txt.matchAll(/^=== "([^"]+)"$/gm)].map(x=>x[1]),labels,
  "B"+c.n+": four L1 tabs, no nested L2 tabs");
 assert(!/^    === "/m.test(txt),"B"+c.n+": no Level 2 tabs during Phase 1");
 const ids=[...txt.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(x=>x[1]);
 const expected=Array.from({length:5},(_,i)=>"THPT-G10-CHIII-TRY"+String(c.start+i).padStart(2,"0"));
 assert.deepEqual(ids,expected,"B"+c.n+": exact five canonical First Try IDs, Q15");
 all.push(...ids);
 const helps=[...txt.matchAll(/data-thpt-help-id="([^"]+)"/g)].map(x=>x[1]);
 assert.deepEqual(helps,c.helps,"B"+c.n+": D6 HELP IDs unchanged, Q15");
 assert.equal((txt.match(/^    \?\?\? (?:question|tip) "/gm)||[]).length,7,
  "B"+c.n+": seven self-reveal/remediation blocks must be collapsed");
 assert.equal((txt.match(/<figure\b/g)||[]).length,c.figs,"B"+c.n+": mathematically matched SVG figure count");
 for(const term of c.concepts)assert(txt.includes(term),"B"+c.n+": mathematical concept absent: "+term);
 assert.equal((txt.match(/\\\(/g)||[]).length,(txt.match(/\\\)/g)||[]).length,"B"+c.n+": inline TeX delimiters");
 assert.equal((txt.match(/\\\[/g)||[]).length,(txt.match(/\\\]/g)||[]).length,"B"+c.n+": block TeX delimiters");
 assert(!/PREREQUISITE_CONFIRMED|NOTEBOOKLM_PENDING|REVIEW_RECEIPT|CONTENT_READY:/.test(txt),
  "B"+c.n+": no QA vocabulary leaked to learner");
 assert(txt.includes("luyen-tap.md")&&txt.includes("tu-kiem-tra-chuong.md"),
  "B"+c.n+": Core/Final Submit links must resolve from actual Markdown location");
}
assert.equal(all.length,10);assert.equal(new Set(all).size,10);
const b06=read("docs/thpt-preview/sgk/chuong-iii/bai-6.md");
for(const key of ["b=6","c=8","30^\\circ","150^\\circ","(3,4,5)","(2,3,6)","10\\sqrt2"])
  assert(b06.includes(key),"B06 critical original/transfer outcome lost: "+key);
const practice=read("docs/thpt-preview/sgk/chuong-iii/luyen-tap.md");
const self=read("docs/thpt-preview/sgk/chuong-iii/tu-kiem-tra-chuong.md");
assert(practice.includes("data-thpt-practice-hub")&&practice.includes("data-thpt-open-quiz"),
 "Golden practice and quiz mount must remain unchanged");
assert(self.includes('data-g10-chapter-selfcheck="CHIII"')&&self.includes("Final Submit"),
 "Q16 independent final-submission route must survive");
assert(!self.includes("data-mastery-credit=")&&!practice.includes("data-mastery-credit="),
 "No formative Mastery credit");
console.log("PASS G10 ChIII UX795: exact B05/B06 SHA, four tabs, 10 canonical First Try, 4 HELP, 3 SVG and protected Core/Q16.");
