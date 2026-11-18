#!/usr/bin/env node
"use strict";
/*
 * RELEASE-only UX795 staged source receipt check.
 * Exact candidate Git blobs are not an independent Academic/PED verdict;
 * this source checksum MUST NOT satisfy Q18 review by itself.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto");
const root=path.resolve(__dirname,"..");
const {candidateG10KnowledgeBlob}=require("./thpt-q18-g10-source-receipt.cjs");
const ledger=fs.readFileSync(path.join(root,"prototypes/thpt/ux795/UX795_G10_KNOWLEDGE_RELEASE_SOURCE_INTAKE_R01_20261110.md"),"utf8");
const records=[...ledger.matchAll(/^\| B(\d{2}) \| ([IVX]+) \| \x60([0-9a-f]{40})\x60 \| \x60([0-9a-f]{40})\x60 \|$/gm)];
assert.equal(records.length,27,"Exactly 27 source candidates must be present in frozen RELEASE intake");
assert(ledger.includes("ACADEMIC_PED_Q18_HOLD"),"Draft source intake cannot claim academic release approval");
const chapter=n=>n<=2?"i":n<=4?"ii":n<=6?"iii":n<=11?"iv":n<=14?"v":n<=18?"vi":n<=22?"vii":n<=25?"viii":"ix";
const roman=["I","II","III","IV","V","VI","VII","VIII","IX"];
const gitBlob=buf=>crypto.createHash("sha1").update(Buffer.from("blob "+buf.length+"\0")).update(buf).digest("hex");
let totalFirst=0,totalHelp=0;
for(const [index,row] of records.entries()){
 const n=Number(row[1]),group=chapter(n);
 assert.equal(n,index+1,"Missing or unordered G10 Knowledge lesson");
 assert.equal(row[2],roman[["i","ii","iii","iv","v","vi","vii","viii","ix"].indexOf(group)],"Wrong G10 chapter");
 assert.notEqual(row[3],row[4],"This is the changed Knowledge Delta C snapshot, not the historical approved blob");
 const rel="docs/thpt-preview/sgk/chuong-"+group+"/bai-"+n+".md";
 const raw=fs.readFileSync(path.join(root,rel));
 assert.equal(gitBlob(raw),candidateG10KnowledgeBlob(n)||row[4],"B"+n+" differs from historical or source-locked Q18 S1 editorial receipt");
 const content=raw.toString("utf8");
 const labels=[...content.matchAll(/^=== "([^"]+)"$/gm)].map(m=>m[1]);
 assert.deepEqual(labels,["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],"B"+n+" four approved learner tabs");
 const first=[...content.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(m=>m[1]);
 const help=[...content.matchAll(/data-thpt-help-id="([^"]+)"/g)].map(m=>m[1]);
 assert(first.length>0&&help.length>0,"B"+n+" lacks independent First Try or HELP");
 assert.equal(new Set(first).size,first.length,"B"+n+" duplicate First Try placement");
 assert.equal(new Set(help).size,help.length,"B"+n+" duplicate HELP");
 assert(!/<[^>]*\bdata-(?:thpt-readiness|mastery-credit|scoring-engine)=/i.test(content),
   "B"+n+" may not publish official readiness or Mastery");
 totalFirst+=first.length;totalHelp+=help.length;
}
console.log("PASS UX795 27/27 staged Git blobs; "+totalFirst+" public First Try; "+
 totalHelp+" D6 HELP; owner-self-verification/source receipts remain mandatory (not a reviewer PASS)");
