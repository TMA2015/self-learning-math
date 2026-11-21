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
const placement=fs.readFileSync(path.join(root,
 "prototypes/thpt/ux795/G10_CHVI_B15_B18_KIEM_LOI_PLACEMENT_Q18_R01_20261120.md"),"utf8");
assert(placement.includes("DELTA_C_ACADEMIC_MATERIAL")&&
 placement.includes("G10-CHVI-B15-B18-KIEM-LOI-PLACEMENT-Q18-R01-20261120"),
 "ChVI PED structural map must follow signed HELP-placement Q18 receipt");

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
 const expected=candidateG10KnowledgeBlob(n);
 const sourceRows=placement.split("\n").filter(x=>x.startsWith("| B"+n+" | "));
 assert.equal(sourceRows.length,1,"B"+n+" exact HELP-placement receipt row");
 const chain=[...sourceRows[0].matchAll(/`([a-f0-9]{40})`/g)].map(x=>x[1]);
 assert.equal(chain.length,2,"B"+n+" must retain historical + current signed SHA");
 assert.equal(chain[1],expected,"B"+n+" canonical source must use 20/11 HELP placement");

 if(n!==15&&n!==16&&n!==17&&n!==18)assert.equal(expected,ux?ux.candidate:(editorial?editorial.candidate:historic),
  "B"+n+" unmodified ChVI source must remain at historical approved signed Q18 SHA");
 else if(n===17){
  const r17=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHVI_B17_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261119.md"),"utf8");
  const field=k=>r17.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field("BASELINE_PUBLISHED_B17_SOURCE_BLOB"),ux.candidate,
   "B17 new receipt must follow immutable previously published B17 source");
  const r01=field("CANDIDATE_B17_SOURCE_BLOB");
  const r02=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHVI_B17_DISPLAY_MATH_SOURCE_EQUIVALENT_R02_20261120.md"),"utf8");
  const next=k=>r02.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(next("PREVIOUS_B17_SOURCE_BLOB"),r01,
   "B17 R02 source-equivalent display update must preserve original academic R01");
  const r03=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHVI_B17_OWNER_P2_LEARNER_READABILITY_R03_20261120.md"),"utf8");
  const field03=k=>r03.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field03("PREVIOUS_B17_SOURCE_BLOB"),next("CANDIDATE_B17_SOURCE_BLOB"),
   "B17 PED R03 lineage must follow R02 exact source");
  assert.equal(field03("CANDIDATE_B17_SOURCE_BLOB"),chain[0],
   "B17 owner R03 pedagogy candidate is exact latest source");
 }else if(n===18){
  const r18=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHVI_B18_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261120.md"),"utf8");
  const f18=k=>r18.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(f18("BASELINE_PUBLISHED_B18_SOURCE_BLOB"),ux.candidate,
   "B18 must preserve exact original ChVI UX receipt/source lineage");
  const r02=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHVI_B18_OWNER_P2_GOLDEN_ERRORS_R02_20261120.md"),"utf8");
  const f02=k=>r02.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(f02("PREVIOUS_B18_SOURCE_BLOB"),f18("CANDIDATE_B18_SOURCE_BLOB"),
   "B18 Q18 latest pedagogy receipt must extend old R01");
  const r03=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHVI_B18_OWNER_EDITORIAL_POLISH_R03_20261120.md"),"utf8");
  const f03=k=>r03.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(f03("PREVIOUS_B18_SOURCE_BLOB"),f02("CANDIDATE_B18_SOURCE_BLOB"),
   "B18 editorial R03 preserves the accepted R02 source");
  assert.equal(f03("CANDIDATE_B18_SOURCE_BLOB"),chain[0],
   "B18 source must match exact new R03 proof");
 }else if(n===16){
  const r16=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHVI_B16_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261119.md"),"utf8");
  const f16=k=>r16.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(f16("BASELINE_PUBLISHED_B16_SOURCE_BLOB"),ux.candidate,
   "B16 new receipt must follow immutable original UX source");
  assert.equal(f16("CANDIDATE_B16_SOURCE_BLOB"),chain[0],
   "B16 owner candidate must be SHA-locked in original pedagogy map");
 }else{
  const latest=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHVI_B15_OWNER_Q18_KNOWLEDGE_ENRICHMENT_20261119.md"),"utf8");
  const f=k=>latest.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(f("BASELINE_PUBLISHED_B15_BLOB"),ux.candidate,
   "B15 latest Q18 must start from immutable ChVI UX approved snapshot");
  assert.equal(f("CANDIDATE_B15_SOURCE_BLOB"),"131947762d1c2ad1c109602a5cbe2e7fea71652e",
   "B15 original complete Q18 receipt must remain frozen");
  const p2=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHVI_B15_P2_EDITORIAL_NOTE_DELTA_R01_20261119.md"),"utf8");
  const p2f=k=>p2.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(p2f("CANDIDATE_B15_SOURCE_BLOB"),"cc0b8a2d8aad63fc360246b07122094498634779",
   "B15 P2 source remains locked");
  const r02=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHVI_B15_OWNER_P2_READABILITY_FIGURE_R02_20261119.md"),"utf8");
  const f02=k=>r02.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(f02("PREVIOUS_B15_SOURCE_BLOB"),p2f("CANDIDATE_B15_SOURCE_BLOB"),
   "B15 R02 exact previous source");
  assert.equal(f02("CANDIDATE_B15_SOURCE_BLOB"),chain[0],
   "B15 latest visual-flow source must match signed R02 Delta");
 }
 assert.equal(blob,expected,"B"+n+" learner source matches one canonical current source");
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
