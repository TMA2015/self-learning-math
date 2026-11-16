#!/usr/bin/env node
"use strict";
/* Q18 v2.0 baseline and Knowledge candidate SHA selection.
 * This retires only obsolete exact-text fingerprints; never infers academic
 * reviewer PASS or alters Q15/Q16, canonical IDs, math or private bank data.
 */
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const ledger="prototypes/thpt/ux795/UX795_G10_KNOWLEDGE_RELEASE_SOURCE_INTAKE_R01_20261110.md";
const editorReceipt="prototypes/thpt/ux795/G10_CHIV_B07_B11_SGK_S1_Q18_EDITORIAL_RECEIPT_20261112.md";
function chivEditorialReceiptRows(){
 const file=path.join(root,editorReceipt);
 if(!fs.existsSync(file))return new Map();
 const source=fs.readFileSync(file,"utf8");
 const matches=[...source.matchAll(/^\| B(0[7-9]|1[01]) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \|/gm)];
 assert.equal(matches.length,5,"ChIV S1/Q18 editorial receipt requires five source rows");
 const rows=new Map(matches.map(m=>["B"+m[1],{baseline:m[2],candidate:m[3],moved:Number(m[4])}]));
 assert.equal(rows.size,5,"ChIV editorial source rows must be unique");
 return rows;
}

const chvReceipt="prototypes/thpt/ux795/G10_CHV_B12_B14_S1_Q18_EDITORIAL_RECEIPT_20261113.md";
function chvEditorialReceiptRows(){
 const file=path.join(root,chvReceipt);
 if(!fs.existsSync(file))return new Map();
 const source=fs.readFileSync(file,"utf8");
 const matches=[...source.matchAll(/^\| B(1[234]) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \|/gm)];
 assert.equal(matches.length,3,"ChV S1/Q18 editorial receipt requires exactly three source rows");
 const rows=new Map(matches.map(m=>["B"+m[1],{baseline:m[2],candidate:m[3],moved:Number(m[4])}]));
 assert.equal(rows.size,3,"ChV source rows must be unique");
 return rows;
}

const chviReceipt="prototypes/thpt/ux795/G10_CHVI_B15_B18_S1_Q18_EDITORIAL_RECEIPT_20261113.md";
function chviEditorialReceiptRows(){
 const file=path.join(root,chviReceipt);
 if(!fs.existsSync(file))return new Map();
 const source=fs.readFileSync(file,"utf8");
 const matches=[...source.matchAll(/^\| B(1[5-8]) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \|/gm)];
 assert.equal(matches.length,4,"ChVI S1/Q18 editorial receipt requires four source rows");
 const rows=new Map(matches.map(m=>["B"+m[1],{baseline:m[2],candidate:m[3],moved:Number(m[4])}]));
 assert.equal(rows.size,4,"ChVI editorial source rows must be unique");
 return rows;
}

const chviExampleUxReceipt="prototypes/thpt/ux795/G10_CHVI_B15_B18_EXAMPLE_UX_Q18_DELTA_RECEIPT_20261113.md";
function chviExampleUxReceiptRows(){
 const file=path.join(root,chviExampleUxReceipt);
 if(!fs.existsSync(file))return new Map();
 const source=fs.readFileSync(file,"utf8");
 const matches=[...source.matchAll(/^\| B(1[5-8]) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \|/gm)];
 assert.equal(matches.length,4,"ChVI example UX follow-on receipt requires four exact rows");
 const rows=new Map(matches.map(m=>["B"+m[1],{baseline:m[2],candidate:m[3],examples:Number(m[4])}]));
 assert.equal(rows.size,4,"ChVI UX lesson rows must be unique");
 return rows;
}

// Owner-authorized one-lesson pilot. Keep the frozen 27-lesson ledger intact;
// promote only B01 when its separate Q18 enrichment receipt proves both blobs.
const b01Receipt="prototypes/thpt/ux795/G10_CHI_B01_KNOWLEDGE_ENRICHMENT_DELTA_RECEIPT_R01_20261115.md";
function b01EnrichmentBlob(ledgerCandidate) {
 const receiptFile=path.join(root,b01Receipt);
 if(!fs.existsSync(receiptFile))return null;
 const text=fs.readFileSync(receiptFile,"utf8");
 const baseline=text.match(/^\*\*BASELINE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m);
 const candidate=text.match(/^\*\*CANDIDATE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m);
 assert(baseline&&candidate,"B01 Q18 source-locked enrichment receipt must contain two Git blobs");
 assert.equal(baseline[1],ledgerCandidate,"B01 receipt must extend exact historic candidate, not overwrite legacy receipt");
 assert.notEqual(candidate[1],baseline[1],"B01 new revision must differ from historical source");
 for(const token of ["ENRICHMENT_DELTA_RECEIPT","Q18_OWNER_SELF_VERIFIED_ENRICHMENT","DELTA_C_ACADEMIC_MATERIAL","S1 section parity:"])
   assert(text.includes(token),"B01 Q18 delta evidence missing: "+token);
 const r02="prototypes/thpt/ux795/G10_CHI_B01_KNOWLEDGE_OWNER_P2_DELTA_RECEIPT_R02_20261115.md";
 const r02file=path.join(root,r02);
 if(!fs.existsSync(r02file))return candidate[1]; // original immutable R01
 const follow=fs.readFileSync(r02file,"utf8");
 const followBaseline=follow.match(/^\*\*BASELINE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m);
 const followCandidate=follow.match(/^\*\*CANDIDATE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m);
 assert(followBaseline&&followCandidate,"B01 owner P2 R02 requires two exact Git blobs");
 assert.equal(followBaseline[1],candidate[1],"B01 R02 must extend immutable deployed R01 source SHA");
 assert.notEqual(followCandidate[1],followBaseline[1],"B01 R02 candidate must differ from R01");
 for(const marker of ["ENRICHMENT_DELTA_RECEIPT","Q18_OWNER_SELF_VERIFIED_ENRICHMENT","OWNER_P2_CORRECTION","Seven boxed labels:"])
   assert(follow.includes(marker),"B01 R02 source-locked correction receipt missing: "+marker);
 return followCandidate[1];
}

const chviiReceipt="prototypes/thpt/ux795/G10_CHVII_B19_B22_S1_Q18_GOLDEN_ENRICHMENT_RECEIPT_20261113.md";
function chviiEditorialReceiptRows(){
 const file=path.join(root,chviiReceipt);
 if(!fs.existsSync(file))return new Map();
 const source=fs.readFileSync(file,"utf8");
 const matches=[...source.matchAll(/^\| B(19|20|21|22) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \| (\d+) \| (\d+) \|/gm)];
 assert.equal(matches.length,4,"ChVII Q18 receipt must contain exactly four source rows");
 const rows=new Map(matches.map(m=>["B"+m[1],{baseline:m[2],candidate:m[3],moved:Number(m[4]),helps:Number(m[5]),examples:Number(m[6])}]));
 assert.equal(rows.size,4,"ChVII Q18 editorial source IDs must be unique");
 return rows;
}

function expectedG10KnowledgeBlob(lesson,legacy){
 assert(/^[a-f0-9]{40}$/.test(legacy),"Historical source SHA malformed");
 const name="B"+String(lesson).replace(/^B/,"").padStart(2,"0");
 const file=path.join(root,ledger);
 if(!fs.existsSync(file))return legacy;
 const lines=fs.readFileSync(file,"utf8").split(/\r?\n/);
 const matches=lines.filter(l=>new RegExp("^\\|\\s*"+name+"\\s*\\|").test(l));
 assert.equal(matches.length,1,name+" must appear once in Q18 candidate source ledger");
 const blobs=[...matches[0].matchAll(/[a-f0-9]{40}/g)].map(x=>x[0]);
 assert.equal(blobs.length,2,name+" must carry baseline AND candidate Git blob");
 assert.notEqual(blobs[0],blobs[1],name+" Knowledge delta must not silently change baseline identity");

 if(name==="B01"){
   const newCandidate=b01EnrichmentBlob(blobs[1]);
   if(newCandidate)return newCandidate;
 }
 if(name==="B02"){
   const pathB02="prototypes/thpt/ux795/G10_CHI_B02_S1_Q18_KNOWLEDGE_ENRICHMENT_R01_20261116.md";
   const receiptPath=path.join(root,pathB02);
   assert(fs.existsSync(receiptPath),"B02 must have separate source-locked Q18 enrichment receipt");
   const receipt=fs.readFileSync(receiptPath,"utf8");
   const baseline=receipt.match(/^\*\*BASELINE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
   const candidate=receipt.match(/^\*\*CANDIDATE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
   assert.equal(baseline,blobs[1],"B02 source must start exactly from the legacy source ledger candidate");
   assert(candidate&&candidate!==baseline,"B02 candidate must differ from historical source SHA");
   for(const phrase of ["ENRICHMENT_DELTA_RECEIPT","DELTA_C_ACADEMIC_MATERIAL",
     "THREE","Q18_OWNER_SELF_VERIFIED_ENRICHMENT","B01_FROZEN_OWNER_ACCEPTED"])
     assert(receipt.includes(phrase),"B02 Q18 scope/academic evidence missing "+phrase);
   return candidate;
 }

 if(name==="B03"){
   const receipt="prototypes/thpt/ux795/G10_CHII_B03_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md";
   const r=fs.readFileSync(path.join(root,receipt),"utf8");
   const field=key=>r.match(new RegExp("^\\*\\*"+key+":\\*\\* \\x60([a-f0-9]{40})\\x60","m"))?.[1];
   assert.equal(field("BASELINE_LESSON_GIT_BLOB"),blobs[1],"B03 must extend exact legacy source SHA");
   const next=field("CANDIDATE_LESSON_GIT_BLOB");
   assert(next&&next!==blobs[1],"B03 requires new S1 source candidate");
   for(const marker of ["AUTHOR_SELF_VERIFIED_ENRICHMENT","DELTA_C_ACADEMIC_MATERIAL",
     "SOURCE_RECEIPT","B03-F08","TRY01","TRY02","P0","P1"]){
    assert(r.includes(marker),"B03 Q18 author receipt missing evidence: "+marker);
   }
   return next;
 }

 if(name==="B04"){
   const receipt="prototypes/thpt/ux795/G10_CHII_B04_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md";
   const r=fs.readFileSync(path.join(root,receipt),"utf8");
   const field=key=>r.split("**"+key+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(field("BASELINE_LESSON_GIT_BLOB"),blobs[1],"B04 must extend legacy source SHA");
   const next=field("CANDIDATE_LESSON_GIT_BLOB");
   assert(/^[a-f0-9]{40}$/.test(next||"")&&next!==blobs[1],"B04 candidate requires exact source receipt");
   for(const marker of ["Q18_OWNER_SELF_VERIFIED_ENRICHMENT","AUTHOR_SELF_VERIFIED_ENRICHMENT",
     "DELTA_C_ACADEMIC_MATERIAL","G10-B04-SYSTEM","G10-B04-INTEGER_MODELS",
     "THPT-G10-CHII-TRY06","THPT-G10-CHII-TRY10"])
    assert(r.includes(marker),"B04 academic source evidence absent: "+marker);
   return next;
  }

 const chiv=chivEditorialReceiptRows().get(name);
 const chv=chvEditorialReceiptRows().get(name);
 assert(!(chiv&&chv),name+" duplicate editorial receipts");
 const chvi=chviEditorialReceiptRows().get(name);
 assert(!(chvi&&(chiv||chv)),name+" overlapping editorial source receipts");
 const chvii=chviiEditorialReceiptRows().get(name);
 assert(!(chvii&&(chiv||chv||chvi)),name+" overlapping ChVII source receipt");
 const row=chiv||chv||chvi||chvii;
 if(row){
  assert.equal(row.baseline,blobs[1],name+" immutable S1/Q18 baseline must match ledger candidate");
  assert.notEqual(row.candidate,row.baseline,name+" editorial source must be distinct");
  assert.equal(row.moved,({B07:5,B08:5,B09:5,B10:6,B11:4,B12:4,B13:5,B14:5,B15:5,B16:5,B17:5,B18:4,B19:7,B20:5,B21:5,B22:8})[name],name+" moved First Try count");
  if(chvii){
   assert.equal(chvii.helps,({B19:9,B20:7,B21:7,B22:10})[name],name+" exact total HELP count");
   assert.equal(chvii.examples,({B19:2,B20:2,B21:2,B22:3})[name],name+" anti-ChVI Golden worked-example count");
  }
  const ux=chviExampleUxReceiptRows().get(name);
  if(ux){
   assert(chvi&&!chiv&&!chv,name+" UX follow-on restricted to published Chapter VI source");
   assert.equal(ux.baseline,row.candidate,name+" immutable source chain: original ChVI receipt → UX delta");
   assert.notEqual(ux.candidate,ux.baseline,name+" follow-on UX candidate SHA must change");
   assert.equal(ux.examples,({B15:1,B16:4,B17:4,B18:4})[name],name+" explicit Golden example section count");
   return ux.candidate;
  }
  return row.candidate;
 }
 return blobs[1];
}
function candidateG10KnowledgeBlob(lesson){
 const sentinel="0".repeat(40),result=expectedG10KnowledgeBlob(lesson,sentinel);
 return result===sentinel?null:result;
}
module.exports={expectedG10KnowledgeBlob,candidateG10KnowledgeBlob,chivEditorialReceiptRows,chvEditorialReceiptRows,chviEditorialReceiptRows,chviExampleUxReceiptRows,chviiEditorialReceiptRows};
