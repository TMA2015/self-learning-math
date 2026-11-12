#!/usr/bin/env node
"use strict";
/*
 * Q18 v2.0 single-source TEST ROUTER (not a content verdict).
 * Historical SGK tests run only on the historical layout; when the published
 * Knowledge candidate is pinned to all 27 Git blobs, run Model B/Q15/Q16
 * checks against actual source and browser. Never infer content PASS.
 */
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict"),crypto=require("node:crypto");
const root=path.resolve(__dirname,"..");
const chapter=n=>n<=2?"i":n<=4?"ii":n<=6?"iii":n<=11?"iv":n<=14?"v":n<=18?"vi":n<=22?"vii":n<=25?"viii":"ix";
const blob=b=>crypto.createHash("sha1").update(Buffer.from("blob "+b.length+"\0")).update(b).digest("hex");
const ledgerPath=path.join(root,"prototypes/thpt/ux795/UX795_G10_KNOWLEDGE_RELEASE_SOURCE_INTAKE_R01_20261110.md");
function detect() {
 if(!fs.existsSync(ledgerPath))return {mode:"HISTORICAL",count:0};
 const l=fs.readFileSync(ledgerPath,"utf8"),rows=[...l.matchAll(/^\|\s*B(\d{2})\s*\|\s*([IVX]+)\s*\|\s*\x60([a-f0-9]{40})\x60\s*\|\s*\x60([a-f0-9]{40})\x60\s*\|$/gm)];
 assert.equal(rows.length,27,"Q18 candidate manifest requires exactly 27 unique lesson SHA pairs");
 const requiredTabs=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
 for(let i=1;i<=27;i++){
  const m=rows[i-1];assert.equal(Number(m[1]),i,"B"+i+" missing or out of order");
  const rel="docs/thpt-preview/sgk/chuong-"+chapter(i)+"/bai-"+i+".md";
  const raw=fs.readFileSync(path.join(root,rel));
  assert.equal(blob(raw),m[4],"B"+i+" candidate source differs from ledger");
  assert.notEqual(m[3],m[4],"B"+i+" historical SHA conflated with updated SHA");
  const t=raw.toString("utf8");
  assert.deepEqual([...t.matchAll(/^=== "([^"]+)"$/gm)].map(x=>x[1]),requiredTabs,"B"+i+" Model B tabs wrong");
  assert(!/data-(?:thpt-readiness|mastery-credit)=/i.test(t),"Q16 data must not be present in Knowledge page B"+i);
 }
 return {mode:"KNOWLEDGE_MODEL_B",count:27};
}
function selfTest(){
 assert.equal(chapter(1),"i");assert.equal(chapter(3),"ii");assert.equal(chapter(16),"vi");assert.equal(chapter(27),"ix");
 const t="=== \"Khám phá kiến thức\"\n=== \"Kiến thức SGK\"\n=== \"Ví dụ\"\n=== \"Lỗi thường gặp\"";
 assert.deepEqual([...t.matchAll(/^=== "([^"]+)"$/gm)].map(x=>x[1]),["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"]);
 assert.notEqual(blob(Buffer.from("one")),blob(Buffer.from("one ")));
 console.log("PASS Q18 route selector self-test; no version/FNV/formula-count coupling");
}
if(process.argv.includes("--self-test"))selfTest();
else{
 const x=detect();
 console.log("Q18_RELEASE_TEST_ROUTE "+JSON.stringify(x));
 if(process.env.GITHUB_OUTPUT)fs.appendFileSync(process.env.GITHUB_OUTPUT,"candidate="+(x.mode==="KNOWLEDGE_MODEL_B"?"true":"false")+"\n");
}
