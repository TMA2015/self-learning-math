#!/usr/bin/env node
"use strict";
/*
 * DRAFT EVIDENCE ONLY — compare legacy published-source identity with the
 * UX795 Knowledge candidate. NOT a replacement for R4/Roadmap/Q18 gates.
 * Main source locks from ledger stay immutable; candidate has its own locks.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const crypto=require("node:crypto");
const root=path.resolve(__dirname,"..");
const {candidateG10KnowledgeBlob,chivEditorialReceiptRows,chviEditorialReceiptRows,chviExampleUxReceiptRows}=require("./thpt-q18-g10-source-receipt.cjs");
const index=process.argv.indexOf("--baseline");
assert(index>=0&&process.argv[index+1],"--baseline DIR required: use a pristine main checkout");
const baselineRoot=path.resolve(root,process.argv[index+1]);
assert(fs.statSync(baselineRoot).isDirectory(),"Main checkout absent");
const read=(base,rel)=>fs.readFileSync(path.join(base,rel));
const blob=b=>crypto.createHash("sha1").update(Buffer.from("blob "+b.length+"\0")).update(b).digest("hex");
const ledger=read(root,"prototypes/thpt/ux795/UX795_G10_KNOWLEDGE_RELEASE_SOURCE_INTAKE_R01_20261110.md").toString("utf8");
const matches=ledger.split("\n").map(line=>line.match(/^\|\s*B(\d{2})\s*\|\s*([IVX]+)\s*\|\s*\x60([a-f0-9]{40})\x60\s*\|\s*\x60([a-f0-9]{40})\x60\s*\|\s*$/)).filter(Boolean);
assert.equal(matches.length,27,"Expected 27 source ledger rows");
const rows=new Map(matches.map(m=>["B"+m[1],{main:m[3],candidate:m[4]}]));
// Independent published B09 Git blob witness; earlier text/FNV fingerprints
// were derived from another HEAD. Both old/new snapshots remain separately
// source-locked, with 30 formula/order and canonical ID-parity guards.
const historicalMainB09GitBlob="84c67363264698fab87db0e76eca5e4561006fa6";
const frozen=["k\\in\\mathbb R","\\vec u","k\\vec u","|k\\vec u|=|k|\\,|\\vec u|","\\vec u\\ne\\vec0","k>0","k\\vec u","\\vec u","k<0","k=0","\\vec u=\\vec0","k\\vec u=\\vec0","k(\\vec u+\\vec v)=k\\vec u+k\\vec v","(k+m)\\vec u=k\\vec u+m\\vec u","k(m\\vec u)=(km)\\vec u","1\\vec u=\\vec u","(-1)\\vec u=-\\vec u","\\vec u","\\vec v","t\\ne0","\\vec v=t\\vec u","M","AB","\\overrightarrow{AM}=\\tfrac12\\overrightarrow{AB}","G","ABC","M","BC","\\overrightarrow{AG}=\\tfrac23\\overrightarrow{AM}=\\tfrac13(\\overrightarrow{AB}+\\overrightarrow{AC}), \\quad \\overrightarrow{GA}+\\overrightarrow{GB}+\\overrightarrow{GC}=\\vec0.","k"];
assert.equal(frozen.length,30,"B09 historic 30-expression witness must be complete");
const chvi=read(root,"scripts/test-thpt-chvi-math-block-render.cjs").toString("utf8");
assert(chvi.includes("candidateSourceSha(lesson)"),
  "ChVI must still bind source to the 27-row exact candidate ledger");
const getIDs=s=>({
 first:[...s.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(x=>x[1]).sort(),
 help:[...s.matchAll(/data-thpt-help-id="([^"]+)"/g)].map(x=>x[1]).sort(),
 outcomes:[...s.matchAll(/data-outcome-id="([^"]+)"/g)].map(x=>x[1]).sort()
});
const tabs=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
const specs=[["B09","iv",9],["B15","vi",15],["B16","vi",16],["B17","vi",17],["B18","vi",18]];
for(const [name,chapter,num]of specs){
 const row=rows.get(name);assert(row,"Missing source ledger "+name);
 const rel="docs/thpt-preview/sgk/chuong-"+chapter+"/bai-"+num+".md";
 const mainRaw=read(baselineRoot,rel),candidateRaw=read(root,rel);
 // The 27 candidate sources were published on 12/11 (commit 92d05d3b).
 // The historic source remains pinned in the immutable intake ledger, while
 // current main must equal EITHER the old published blob or its exact approved
 // replacement. No arbitrary source drift is accepted.
 const baselineSha=blob(mainRaw);
 // Current main may itself already contain the latest signed Q18 revision.
 // Keep the frozen intake ledger AND require an independently matched
 // exact current candidate; never label this a fresh Academic/PED review.
 const signedCurrent=candidateG10KnowledgeBlob(num)||row.candidate;
 assert.equal(blob(candidateRaw),signedCurrent,
   name+" current candidate must match the complete Q18 successor chain");
 // The immutable ChIV v3.1.0 Q18 receipt adds the third approved
 // state for B09 only. Keep the old ledger snapshots and identity chain:
 // historical main -> Model B candidate -> S1 editorial candidate.
 const editorial=chivEditorialReceiptRows().get(name);
 if(editorial)assert.equal(editorial.baseline,row.candidate,
   name+" ChIV editorial baseline must equal the historic 27-lesson candidate");
 const chviReceiptRow=chviEditorialReceiptRows().get(name);
 if(chviReceiptRow)assert.equal(chviReceiptRow.baseline,row.candidate,name+" ChVI Q18 must extend only historical candidate");
 const ux=chviExampleUxReceiptRows().get(name);
 if(ux){
  assert(chviReceiptRow,name+" UX receipt without original ChVI editorial");
  assert.equal(ux.baseline,chviReceiptRow.candidate,name+" UX follows published original source, never replaces it");
 }
 const b09P1Receipt=name==="B09"?read(root,
  "prototypes/thpt/ux795/G10_CHIV_B09_CANONICAL_Q18_R05_20261117.md").toString("utf8"):null;
 const receiptField=(packet,k)=>packet?.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
 const b09PublishedP1=b09P1Receipt?receiptField(b09P1Receipt,"R05_SOURCE_BLOB"):null;
 if(b09P1Receipt){
  assert.equal(b09PublishedP1,"a28fa50f223f260c8fded1f42b13065d3e047d63",
   "B09 historical P1 R05 SHA must match immutable owner-reviewed publication");
  const r03=read(root,"prototypes/thpt/ux795/G10_CHIV_B09_S1_SEMANTIC_DECOMPOSITION_R03_20261117.md").toString("utf8");
  assert.equal(receiptField(b09P1Receipt,"BASELINE_R03_SOURCE_BLOB"),
   receiptField(r03,"R03_SOURCE_BLOB"),"B09 published R05 must follow exact approved R03");
 }
 const b09P2Receipt=name==="B09"?read(root,
  "prototypes/thpt/ux795/G10_CHIV_B09_TAB4_REAL_ERROR_P2_DELTA_C_R06_20261117.md").toString("utf8"):null;
 const b09OwnerP2=b09P2Receipt?receiptField(b09P2Receipt,"R06_SOURCE_BLOB"):null;
 if(b09P2Receipt){
  assert.equal(receiptField(b09P2Receipt,"PRIOR_R05_SOURCE_BLOB"),b09PublishedP1,
   "B09 P2 owner source must follow exact previous published R05");
  assert.equal(b09OwnerP2,"3d79a17e9ba39cd0f46077823800f5f38c73e313",
   "B09 Q18 R06 immutable owner-accepted Knowledge source SHA");
  assert.equal(receiptField(b09P2Receipt,"PRIOR_R05_CANONICAL_BLOB"),
   receiptField(b09P1Receipt,"ONE_CANONICAL_LESSON_BLOB"),
   "B09 R06 one academic manuscript must follow frozen P1 snapshot");
 }
 // B09 20/11 R02 moves a general vector error into Tab 4 and extends
 // the prior 20/11 placement R01, without changing any academic math.
 const b09R02=name==="B09"?read(root,
  "prototypes/thpt/ux795/G10_CHIV_B09_GENERAL_VECTOR_ERROR_TAB4_Q18_R02_20261120.md").toString("utf8"):null;
 const b09CurrentR02=b09R02?receiptField(b09R02,"R02_CORRECTED_SOURCE_BLOB"):null;
 if(b09R02){
  assert.equal(receiptField(b09R02,"R02_PREVIOUS_SOURCE_BLOB"),
   "e1bc7777f5b39f831f8009f4b564381d23d40aa2",
   "B09 R02 must extend the frozen 20/11 R01 source");
  assert.equal(b09CurrentR02,signedCurrent,
   "B09 R02 source must match the current canonical Q18 router");
  assert(b09R02.includes("DELTA_A_UI")&&
   b09R02.includes("Q18_OWNER_SELF_VERIFIED_ENRICHMENT")&&
   b09R02.includes("OWNER_P2_PENDING"),
   "B09 R02 placement receipt must not claim academic or owner P2 PASS");
 }
 const b15Historical=name==="B15"?read(root,
   "prototypes/thpt/ux795/G10_CHVI_B15_OWNER_Q18_KNOWLEDGE_ENRICHMENT_20261119.md").toString("utf8"):null;
  const b15P2=name==="B15"?read(root,
   "prototypes/thpt/ux795/G10_CHVI_B15_P2_EDITORIAL_NOTE_DELTA_R01_20261119.md").toString("utf8"):null;
  if(b15P2)assert.equal(receiptField(b15P2,"PREVIOUS_B15_SOURCE_BLOB"),
   receiptField(b15Historical,"CANDIDATE_B15_SOURCE_BLOB"),
   "B15 owner P2 note delta must extend actual published prior source");
  const b15R02=name==="B15"?read(root,
   "prototypes/thpt/ux795/G10_CHVI_B15_OWNER_P2_READABILITY_FIGURE_R02_20261119.md").toString("utf8"):null;
  if(b15R02)assert.equal(receiptField(b15R02,"PREVIOUS_B15_SOURCE_BLOB"),
   receiptField(b15P2,"CANDIDATE_B15_SOURCE_BLOB"),
   "B15 R02 must extend the owner accepted P2 SHA without overwriting it");
  const approvedSources=[row.main,row.candidate,...(editorial?[editorial.candidate]:[]),
   ...(chviReceiptRow?[chviReceiptRow.candidate]:[]),...(ux?[ux.candidate]:[]),
   ...(b09PublishedP1?[b09PublishedP1]:[]),
   ...(b09OwnerP2?[b09OwnerP2]:[]),
   ...(b09CurrentR02?[b09CurrentR02]:[]),
   // Approved current main is allowed ONLY if exactly pinned to the
   // same complete Q18 chain as the checked candidate.
   signedCurrent,
   ...(b15Historical?[receiptField(b15Historical,"CANDIDATE_B15_SOURCE_BLOB")]:[]),
   ...(b15P2?[receiptField(b15P2,"CANDIDATE_B15_SOURCE_BLOB")]:[]),
   ...(b15R02?[receiptField(b15R02,"CANDIDATE_B15_SOURCE_BLOB")]:[])];
  assert(approvedSources.includes(baselineSha),
   name+" unknown main baseline source drift outside immutable 27-row/Q18 chain");
 assert.equal(blob(candidateRaw),signedCurrent,name+" exact approved historical/editorial source drift");
 const base=mainRaw.toString("utf8"),s=candidateRaw.toString("utf8");
 assert.deepEqual(getIDs(s),getIDs(base),name+" original First Try/HELP/outcome IDs changed");
 assert.deepEqual([...s.matchAll(/^=== "([^"]+)"$/gm)].map(x=>x[1]),tabs,name+" changed owner Model B tabs");
 const ids=getIDs(s);
 assert.equal(new Set(ids.first).size,ids.first.length,name+" duplicate First Try ID");
 assert.equal(new Set(ids.help).size,ids.help.length,name+" duplicate HELP ID");
 if(name==="B09"){
  const a=s.indexOf('=== "Kiến thức SGK"'),b=s.indexOf('=== "Ví dụ"',a);
  assert(a>=0&&b>a,"B09 missing Knowledge area");
  const originalStart=base.indexOf('=== "Kiến thức SGK"');
  const originalEnd=base.indexOf('=== "Ví dụ"',originalStart);
  assert(originalStart>=0&&originalEnd>originalStart,"B09 historic main S1 source intact");
  const historic=[...base.slice(originalStart,originalEnd).matchAll(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]|\$([^$]+)\$/g)]
    .map(x=>(x[1]??x[2]??x[3]).trim().replace(/\s+/g," "));
  if([b09PublishedP1,b09OwnerP2,b09CurrentR02].includes(baselineSha)){
   // This main source is a signed R05/R06/R02 successor, not the original
   // 30-expression historical baseline. The immutable ledger still freezes
   // that original snapshot; source-locked Delta C may reorder its math.
   assert(base.includes("Phân tích duy nhất theo hai vectơ không cùng phương")&&
    base.includes("THPT_G10_B09_DECOMPOSITION_TWO_DIRECTIONS_D5_R03.svg")&&
    base.includes("THPT-G10-CHIV-TRY11"),"B09 signed R05 published main mathematics missing");
  }else{
   assert(historic.some((_,i)=>i+30<=historic.length&&frozen.every((v,j)=>historic[i+j]===v)),
    "B09 immutable 30-expression witness lost in historical main");
  }
  // R03 changes notation and prose semantically: candidate must keep each
  // essential S1 mathematical law plus the newly restored decomposition.
  // Reordering is allowed ONLY under signed academic Q18 Delta C source.
  const knowledge=s.slice(a,b),tight=knowledge.replace(/\s+/g,"");
  for(const formula of [
   "k(\\vec u+\\vec v)=k\\vec u+k\\vec v",
   "(k+m)\\vec u=k\\vec u+m\\vec u",
   "k(m\\vec u)=(km)\\vec u",
   "1\\vec u=\\vec u","(-1)\\vec u=-\\vec u",
   "\\vec u=x\\vec a+y\\vec b",
   "\\overrightarrow{AG}"
  ])assert(tight.includes(formula.replace(/\s+/g,"")),
   "B09 signed Delta C missing original/new mandatory SGK formula: "+formula);
  assert(knowledge.includes("Phân tích duy nhất theo hai vectơ không cùng phương")&&
   knowledge.includes("THPT_G10_B09_DECOMPOSITION_MOBILE_D5_R03.svg"),
   "B09 signed academic Delta C must restore decomposition with responsive diagram");
  const packet=read(root,"prototypes/thpt/ux795/G10_CHIV_B09_S1_SEMANTIC_DECOMPOSITION_R03_20261117.md").toString("utf8");
  assert(packet.includes("BLOCKED_BY_AUTHORING")&&packet.includes("NO_CANONICAL_DECOMPOSITION_ITEM"),
   "B09 semantic source comparison cannot certify independent assessment");
   assert.equal(row.main,historicalMainB09GitBlob,"B09 ledger must retain immutable historic published Git blob");
   assert.notEqual(blob(candidateRaw),historicalMainB09GitBlob,"B09 must remain a distinct source-locked Delta C");
  assert.equal(ids.first.length,5);assert.equal(ids.help.length,2);
  console.log("PASS EVIDENCE B09: historical 30-math witness frozen; baseline SHA "+baselineSha+" approved R03→R05→R06→R01→R02 chain, five First Tries/two HELP, Q18 current candidate math signed");
 }else{
  const old=chvi.match(new RegExp(num+':\\{display:(\\d+),inline:(\\d+),sha:"([a-f0-9]{40})",tries:(\\d+),extraFold:(\\d+)\\}'));
  assert(old,name+" historical math spec missing");
  const disp=[...s.matchAll(/^    \\\[$/gm)].length,close=[...s.matchAll(/^    \\\]$/gm)].length;
  const inline=[...s.matchAll(/\\\(([\s\S]*?)\\\)/g)].length;
  assert(disp>=Number(old[1])&&disp===close,name+" display math regression");
  assert(inline>=Number(old[2]),name+" inline math regression");
  assert.equal(ids.first.length,Number(old[4]),name+" First Try regression");
  assert.notEqual(blob(candidateRaw),old[3],name+" unchanged historical source");
  console.log("PASS EVIDENCE "+name+": "+disp+" display/"+inline+" inline math (legacy "+old[1]+"/"+old[2]+"); canonical IDs preserved");
 }
 const mutated=s.replace('data-thpt-first-try-id="','data-thpt-first-try-id="CORRUPTED-');
 assert.notDeepEqual(getIDs(mutated),getIDs(base),name+" negative canonical-ID mutation must be caught");
 assert.notEqual(blob(Buffer.from(s+" ","utf8")),candidateG10KnowledgeBlob(num)||row.candidate,name+" negative source-drift mutation must be caught");
}
console.log("PASS DUAL-SOURCE MATH EVIDENCE: five lessons, 27-row SHA ledger, B09 historic 30 expressions, immutable source and canonical IDs; no obsolete test-file textual gate.");
console.log("NOT an Academic/PED PASS, NOT authorized Q18 self-QA, NOT a substitute for official R4/Roadmap; NO DEPLOY.");
