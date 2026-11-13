#!/usr/bin/env node
"use strict";
/*
 * RELEASE-only dry-run: overlay G10 Knowledge on current main during CI,
 * retain the published shared title transformer, and verify final rendered
 * headings. This DOES NOT bypass Academic/PED Q18 or deploy.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const crypto=require("node:crypto");
const root=path.resolve(__dirname,"..");
const chapter=n=>n<=2?"i":n<=4?"ii":n<=6?"iii":n<=11?"iv":n<=14?"v":n<=18?"vi":n<=22?"vii":n<=25?"viii":"ix";
const foldName=/^\s*\?\?\?\s+question\s+"([^"]+)"/gm;
const isAnswerReveal=title=>/(?:đối chiếu|lời giải|đáp án|tự mở kết quả)/i.test(title);
const concise=/<summary[^>]*>\s*Đối chiếu\s*<\/summary>/g;
const longTitle=/<summary[^>]*>\s*(?:Em đã[^<]{0,180}Mở (?:lời giải|đáp án)|Mở (?:lời giải|đáp án) sau khi)[^<]*<\/summary>/gi;

/* Only the exact 4-row Q18 ChVI follow-on receipt authorizes contextual
 * self-practice labels. Canonical First Try headings stay 'Đối chiếu'.
 * The integration-main test must receive this receipt from candidate CI. */
const uxReceipt=fs.readFileSync(path.join(root,
 "prototypes/thpt/ux795/G10_CHVI_B15_B18_EXAMPLE_UX_Q18_DELTA_RECEIPT_20261113.md"),"utf8");
const uxRows=[...uxReceipt.matchAll(/^\| B(1[5-8]) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \|/gm)];
assert.equal(uxRows.length,4,"ChVI UX receipt must have four immutable lessons");
const ux=new Map(uxRows.map(m=>[Number(m[1]),{baseline:m[2],candidate:m[3],examples:Number(m[4])}]));
assert.equal(ux.size,4,"ChVI UX receipt duplicate lesson");
const htmlSelfPractice=/<summary[^>]*>\s*Xem lời giải ba câu tự luyện\s*<\/summary>/g;
const blob=raw=>crypto.createHash("sha1")
 .update(Buffer.from("blob "+raw.length+"\0")).update(raw).digest("hex");

let lessons=0,first=0,reveals=0;
for(let n=1;n<=27;n++){
 const route="thpt-preview/sgk/chuong-"+chapter(n)+"/bai-"+n;
 const markdown=fs.readFileSync(path.join(root,"docs",route+".md"),"utf8");
 const html=fs.readFileSync(path.join(root,"site-thpt-preview",route,"index.html"),"utf8");
 const titles=[...markdown.matchAll(foldName)].map(m=>m[1]);
 const count=titles.filter(isAnswerReveal).length;
 const ids=[...markdown.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(m=>m[1]);
 const short=(html.match(concise)||[]).length;
 const verbose=(html.match(longTitle)||[]).length;
 assert(count>=ids.length,"B"+n+" all canonical First Try disclosures must be among explicit answer-reveal titles");
 const followon=ux.get(n);
 if(followon){
  const source=fs.readFileSync(path.join(root,"docs",route+".md"));
  assert.equal(blob(source),followon.candidate,"B"+n+" source SHA must match signed UX receipt");
 }
 if(followon&&[15,17,18].includes(n)){
  const self=(html.match(htmlSelfPractice)||[]).length;
  assert.equal(self,1,"B"+n+" one descriptive solution reveal for exactly three voluntary self-practice questions");
  assert.equal(short,ids.length,"B"+n+" every canonical First Try keeps concise Đối chiếu");
  assert.equal(count,short+self,"B"+n+" no unaccounted answer-reveal title");
 }else{
  assert.equal(short,count,"B"+n+" concise canonical answer labels must remain unchanged");
 }
 assert.equal(verbose,0,"B"+n+" obsolete spoken-style answer reveal titles must not show in post-merge HTML");
 for(const id of ids)assert(html.includes(id),"B"+n+" canonical First Try ID lost in main+candidate output: "+id);
 assert(!/<summary[^>]*>\s*Em vận dụng\s*<\/summary>/i.test(html),"B"+n+" application headings must be concise");
 lessons++;first+=ids.length;reveals+=short;
}
assert.equal(lessons,27,"Only G10 Knowledge scope is requested");
assert.equal(first,137,"The 137 existing First Try placements must remain canonical");
assert(reveals>=first,"At least all 137 First Try placements must have user-visible Đối chiếu labels");
console.log("PASS main+candidate dry-run 27 G10 Knowledge pages: "+reveals+" concise Đối chiếu labels for "+first+" First Tries; no verbose reveal headings, IDs preserved. NO DEPLOY; Q18 remains HOLD.");
