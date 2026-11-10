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
const root=path.resolve(__dirname,"..");
const chapter=n=>n<=2?"i":n<=4?"ii":n<=6?"iii":n<=11?"iv":n<=14?"v":n<=18?"vi":n<=22?"vii":n<=25?"viii":"ix";
const foldName=/^\s*\?\?\?\s+question\s+"Em đã tự làm\? Mở lời giải để đối chiếu"/gm;
const concise=/<summary[^>]*>\s*Đối chiếu\s*<\/summary>/g;
const longTitle=/<summary[^>]*>\s*(?:Em đã[^<]{0,180}Mở (?:lời giải|đáp án)|Mở (?:lời giải|đáp án) sau khi)[^<]*<\/summary>/gi;
let lessons=0,first=0,reveals=0;
for(let n=1;n<=27;n++){
 const route="thpt-preview/sgk/chuong-"+chapter(n)+"/bai-"+n;
 const markdown=fs.readFileSync(path.join(root,"docs",route+".md"),"utf8");
 const html=fs.readFileSync(path.join(root,"site-thpt-preview",route,"index.html"),"utf8");
 const count=(markdown.match(foldName)||[]).length;
 const ids=[...markdown.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(m=>m[1]);
 const short=(html.match(concise)||[]).length;
 const verbose=(html.match(longTitle)||[]).length;
 assert.equal(count,ids.length,"B"+n+" First Try disclosures must map 1:1 to canonical IDs");
 assert.equal(short,count,"B"+n+" short Đối chiếu headings must match protected First Try count");
 assert.equal(verbose,0,"B"+n+" obsolete spoken-style answer reveal titles must not show in post-merge HTML");
 for(const id of ids)assert(html.includes(id),"B"+n+" canonical First Try ID lost in main+candidate output: "+id);
 assert(!/<summary[^>]*>\s*Em vận dụng\s*<\/summary>/i.test(html),"B"+n+" application headings must be concise");
 lessons++;first+=ids.length;reveals+=short;
}
assert.equal(lessons,27,"Only G10 Knowledge scope is requested");
assert.equal(first,137,"The 137 existing First Try placements must remain canonical");
assert.equal(reveals,137,"Exactly 137 user-visible Đối chiếu labels required");
console.log("PASS main+candidate dry-run 27 G10 Knowledge pages: 137/137 Đối chiếu labels, no verbose reveal headings, IDs preserved. NO DEPLOY; Q18 remains HOLD.");
