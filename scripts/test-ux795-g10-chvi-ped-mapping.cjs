#!/usr/bin/env node
"use strict";
/* G10 ChVI structural learner outcome/First Try/D6 mapping regression only.
 * NOT a pedagogical verdict or release authorization.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const crypto=require("node:crypto");
const root=path.resolve(__dirname,"..");
const {chviEditorialReceiptRows,chviExampleUxReceiptRows,candidateG10KnowledgeBlob}=require("./thpt-q18-g10-source-receipt.cjs");
const mapping=fs.readFileSync(path.join(root,"prototypes/thpt/ux795/UX795_G10_CHVI_PED_OUTCOME_MAPPING_R01_20261110.md"),"utf8");
const rows=mapping.split("\n").filter(line=>/^\| B(?:15|16|17|18) \| \x60B\d{2}_OUT_\d{2}\x60 \|/.test(line));
assert.equal(rows.length,19,"Expected 19 G10 ChVI mappings");
const tick=String.fromCharCode(96);
const seen=new Set();
for(const n of [15,16,17,18]){
 const rel="docs/thpt-preview/sgk/chuong-vi/bai-"+n+".md";
 const raw=fs.readFileSync(path.join(root,rel));
 const source=raw.toString("utf8");
 const blob=crypto.createHash("sha1").update(Buffer.from("blob "+raw.length+"\0")).update(raw).digest("hex");
 const historic=(mapping.match(new RegExp("- B"+n+": "+tick+"([a-f0-9]{40})"+tick))||[])[1];
 assert(historic,"B"+n+" immutable 19-outcome mapping must keep historical source");
 const editorial=chviEditorialReceiptRows().get("B"+n);
 if(editorial)assert.equal(editorial.baseline,historic,"B"+n+" S1 editorial source chain must start from original PED map");
 const ux=chviExampleUxReceiptRows().get("B"+n);
 if(ux)assert.equal(ux.baseline,editorial.candidate,"B"+n+" follow-on UX cannot rewrite historical PED/S1 source");
 assert.equal(blob,ux?ux.candidate:(editorial?editorial.candidate:historic),
  "B"+n+" candidate must equal exact signed Q18 source chain");
 assert.equal(blob,candidateG10KnowledgeBlob(n),"B"+n+" Q18 router disagrees with source");
 const local=rows.filter(line=>line.startsWith("| B"+n+" |"));
 assert.equal(local.length,n===18?4:5,"B"+n+" missing/extra outcomes");
 for(const line of local){
  const cols=line.split("|").slice(1,-1).map(x=>x.trim());
  assert.equal(cols.length,6,"B"+n+" malformed row");
  const outcome=cols[1].replaceAll(tick,""),first=cols[3].replaceAll(tick,""),help=cols[4].replaceAll(tick,"");
  assert(cols[2].length>=35,"Missing content-specific pedagogical note "+outcome);
  assert.equal(cols[5],tick+"STRUCTURE_MAPPED"+tick,"No accidental PED certification in structural map");
  assert(!seen.has(outcome),"Duplicate outcome "+outcome);seen.add(outcome);
  assert.equal(source.split("\n").filter(line=>line.includes('data-outcome-id="'+outcome+'"')&&line.includes('data-thpt-first-try-id="'+first+'"')).length,1,"First Try/outcome mismatch "+outcome);
  assert(source.includes('data-thpt-help-id="'+help+'"'),"HELP missing "+help);
 }
}
assert.equal(seen.size,19);
console.log("PASS UX795 G10 ChVI 19/19 source-pinned outcome-FirstTry-HELP structural paths.");
console.log("No independent PED/S1 Q18 signoff, official Readiness or release authorization.");
