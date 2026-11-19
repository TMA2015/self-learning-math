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

 if(name==="B05"){
  const receipt="prototypes/thpt/ux795/G10_CHIII_B05_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md";
  const r=fs.readFileSync(path.join(root,receipt),"utf8");
  const field=k=>r.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field("BASELINE_LESSON_GIT_BLOB"),blobs[1],"B05 must extend exact legacy S1 candidate");
  const next=field("CANDIDATE_LESSON_GIT_BLOB");
  assert(/^[a-f0-9]{40}$/.test(next||"")&&next!==blobs[1],"B05 new S1 source must have Q18 receipt");
  for(const marker of ["Q18_OWNER_SELF_VERIFIED_ENRICHMENT","AUTHOR_SELF_VERIFIED_ENRICHMENT",
   "DELTA_C_ACADEMIC_MATERIAL","SOURCE_SCAN_AUTHORITY_PENDING",
   "G10-B05-CALCULATOR_ANGLE","THPT-G10-CHIII-TRY11","HELP-G10-B05-03"]){
   assert(r.includes(marker),"B05 source Q18 academic/canonical evidence missing "+marker);
  }
  return next;
 }

 if(name==="B06"){
  const receiptPath="prototypes/thpt/ux795/G10_CHIII_B06_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md";
  const r=fs.readFileSync(path.join(root,receiptPath),"utf8");
  const field=k=>r.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field("BASELINE_LESSON_GIT_BLOB"),blobs[1],"B06 exact frozen authoring/source baseline");
  const next=field("CANDIDATE_LESSON_GIT_BLOB");
  assert(/^[a-f0-9]{40}$/.test(next||"")&&next!==blobs[1],"B06 requires new exact Q18 Delta C source");
  for(const m of ["Q18_OWNER_SELF_VERIFIED_ENRICHMENT","AUTHOR_SELF_VERIFIED_ENRICHMENT",
    "DELTA_C_ACADEMIC_MATERIAL","SOURCE_SCAN_AUTHORITY_PENDING",
    "B06-F01","B06-F04","THPT-G10-CHIII-TRY06","THPT-G10-CHIII-TRY10",
    "HELP-G10-B06-01","HELP-G10-B06-02"])
   assert(r.includes(m),"B06 Q18 source evidence missing "+m);
  const follow=fs.readFileSync(path.join(root,"prototypes/thpt/ux795/G10_CHIII_B06_PED_REFERENCE_ANCHOR_R02_20261116.md"),"utf8");
  const r02=k=>follow.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(r02("R01_APPROVED_SOURCE_BLOB"),next,"B06 R02 follows immutable R01 approved source");
  const corrected=r02("R02_CORRECTED_SOURCE_BLOB");
  assert(/^[0-9a-f]{40}$/.test(corrected||"")&&corrected!==next,"B06 R02 must have distinct source");
  for(const token of ["Q18_OWNER_SELF_VERIFIED_ENRICHMENT","ACADEMIC_SELF_QA_P0=0","ACADEMIC_SELF_QA_P1=0",
     "THPT-G10-CHIII-TRY06","THPT-G10-CHIII-TRY10","SOURCE_SCAN_AUTHORITY_PENDING"])
   assert(follow.includes(token),"B06 R02 academic/canonical receipt evidence missing "+token);
  return corrected;
 }

 if(name==="B07"){
  const original=chivEditorialReceiptRows().get("B07");
  assert(original&&original.baseline===blobs[1],"B07 R02 must extend exact original ChIV S1 ledger");
  const receipt=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B07_S1_OWNER_Q18_ENRICHMENT_DELTA_R02_20261116.md"),"utf8");
  const field=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field("R01_APPROVED_SOURCE_BLOB"),original.candidate,
   "B07 R02 source must directly extend immutable R01 editorial source");
  const candidate=field("R02_CANDIDATE_SOURCE_BLOB");
  assert(/^[0-9a-f]{40}$/.test(candidate||"")&&candidate!==original.candidate,
   "B07 concept-first R02 must carry new exact source SHA");
  for(const key of ["Q18_OWNER_SELF_VERIFIED_ENRICHMENT","DELTA_C_ACADEMIC_MATERIAL",
    "THPT-G10-CHIV-TRY01","THPT-G10-CHIV-TRY05",
    "HELP-G10-B07-01","HELP-G10-B07-02"])
    assert(receipt.includes(key),"B07 R02 receipt missing source/identity evidence "+key);
  const visual=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B07_HELP_LABELS_DELTA_A_R03_20261117.md"),"utf8");
  const ui=k=>visual.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(ui("R02_SOURCE_BLOB"),candidate,
   "B07 UI-only R03 must extend exact immutable academic R02");
  const source=ui("R03_SOURCE_BLOB");
  assert(/^[a-f0-9]{40}$/.test(source||"")&&source!==candidate,
   "B07 R03 learner-facing labels source must have exact new SHA");
  for(const token of ["DELTA_A_UI","HELP-G10-B07-01","HELP-G10-B07-02",
    "THPT-G10-CHIV-TRY01","THPT-G10-CHIV-TRY05"]){
    assert(visual.includes(token),"B07 R03 visual receipt missing "+token);
  }
  const r04Path=path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B07_S1_FORCE_VELOCITY_ENRICHMENT_R04_20261117.md");
  if(fs.existsSync(r04Path)){
   const r04=fs.readFileSync(r04Path,"utf8");
   const field04=k=>r04.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(field04("BASELINE_R03_SOURCE_BLOB"),source,
    "B07 R04 must extend immutable R03 D6/source snapshot");
   const next=field04("R04_SOURCE_BLOB");
   assert(/^[a-f0-9]{40}$/.test(next||"")&&next!==source,
    "B07 R04 requires distinct source-locked learner math/S1 delta");
   for(const token of ["Q18_OWNER_SELF_VERIFIED_ENRICHMENT","DELTA_C_ACADEMIC_MATERIAL",
    "THPT_G10_B07_FORCE_VELOCITY_REPRESENTATION_D5_R04.svg",
    "THPT-G10-CHIV-TRY01","THPT-G10-CHIV-TRY05"]){
    assert(r04.includes(token),
     "B07 R04 source/assessment receipt lacks "+token);
   }
   const r05Path=path.join(root,
    "prototypes/thpt/ux795/G10_CHIV_B07_SEMANTIC_CONCEPT_RECAP_DELTA_R05_20261117.md");
   if(fs.existsSync(r05Path)){
    const r05=fs.readFileSync(r05Path,"utf8");
    const field05=k=>r05.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
    assert.equal(field05("BASELINE_R04_SOURCE_BLOB"),next,
     "B07 semantic R05 must extend exact historical R04 publication");
    const final=field05("R05_SOURCE_BLOB");
    assert(/^[a-f0-9]{40}$/.test(final||"")&&final!==next,
     "B07 semantic R05 must carry distinct exact source SHA");
    for(const token of ["B07-F01","G10-SEM-01","X-F.3",
       "Định nghĩa — Vectơ","Kiến thức cần nhớ — Mục 2.2",
       "THPT-G10-CHIV-TRY01"]){
      assert(r05.includes(token),"B07 R05 full semantic gate receipt missing "+token);
    }
    return final;
   }
   return next;
  }
  return source;
 }

 if(name==="B08"){
  const original=chivEditorialReceiptRows().get("B08");
  assert(original&&original.baseline===blobs[1],"B08 R02 must extend exact ChIV frozen S1 ledger");
  const receipt=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B08_S1_OWNER_Q18_ENRICHMENT_DELTA_R02_20261116.md"),"utf8");
  const field=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field("R01_APPROVED_SOURCE_BLOB"),original.candidate,
   "B08 new source must follow accepted ChIV R01 candidate");
  const candidate=field("R02_CANDIDATE_SOURCE_BLOB");
  assert(/^[0-9a-f]{40}$/.test(candidate||"")&&candidate!==original.candidate,
   "B08 corrective academic enrichment must carry distinct Q18 source blob");
  for(const keyword of ["Q18_OWNER_SELF_VERIFIED_ENRICHMENT","DELTA_C_ACADEMIC_MATERIAL",
    "LEGACY_TRANSFER_EXPOSURE_NOT_HELD_OUT","THPT-G10-CHIV-TRY06","THPT-G10-CHIV-TRY10",
    "SOURCE_SCAN_AUTHORITY_PENDING"])
   assert(receipt.includes(keyword),"B08 R02 source academic/canonical evidence missing "+keyword);
  const visualFile=path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B08_MATHJAX_DISPLAY_DELTA_A_R03_20261117.md");
  if(fs.existsSync(visualFile)){
   const visual=fs.readFileSync(visualFile,"utf8");
   const r03=k=>visual.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(r03("R02_PUBLISHED_SOURCE_BLOB"),candidate,
    "B08 R03 display Delta A must extend exact published R02 academic source");
   const next=r03("R03_CANDIDATE_SOURCE_BLOB");
   assert(/^[a-f0-9]{40}$/.test(next||"")&&next!==candidate,
    "B08 R03 MathJax display must carry a distinct exact source blob");
   for(const marker of ["DELTA_A_UI","six display TeX payloads","P1_PAGES_ARTIFACT_VERIFIED"]){
    assert(visual.includes(marker),"B08 R03 visual-only Q18 evidence missing: "+marker);
   }
   const semanticFile=path.join(root,
    "prototypes/thpt/ux795/G10_CHIV_B08_SEMANTIC_3PLUS1_DELTA_R04_20261117.md");
   if(fs.existsSync(semanticFile)){
    const sem=fs.readFileSync(semanticFile,"utf8");
    const semField=k=>sem.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
    assert.equal(semField("BASELINE_R03_SOURCE_BLOB"),next,
      "B08 R04 must extend immutable R03 visual fix");
    assert.equal(semField("BASELINE_R05_B07_CSS_BLOB"),
      "2aaaa262a1e3fe8195ab507bad2f08302302341e",
      "B08 R04 scoped CSS must extend P2-accepted B07 CSS");
    const r04=semField("R04_SOURCE_BLOB");
    assert(/^[a-f0-9]{40}$/.test(r04||"")&&r04!==next,
     "B08 R04 exact new academic source required");
    for(const label of ["B08-F01","3PLUS1","OWNER_P2_PENDING","R04_CSS_BLOB",
      "FORMAL_DEFINITION","FORMAL_RULE","KEY_FORMULA"]){
     assert(sem.includes(label),"B08 R04 semantic receipt lacks "+label);
    }
    return r04;
   }
   return next;
  }
  return candidate;
 }

 if(name==="B11"){
  // Academic material is a DRAFT requiring independent review, not a Q18 PASS.
  // Q18 source-locks a single candidate source without touching frozen receipts.
  const row=chivEditorialReceiptRows().get("B11");
  assert(row&&row.baseline===blobs[1],
   "B11 candidate must extend historical ChIV editorial baseline");
  const signed=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B11_S1_PED_CANONICAL_Q18_R01_20261118.md"),"utf8");
  const field=k=>signed.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field("R01_PUBLISHED_B11_SOURCE_BLOB"),row.candidate,
   "B11 R01 immutable source must be signed");
  const ui=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B11_P2_TAB4_GOLDEN_DELTA_A_UI_R02_20261118.md"),"utf8");
  const uf=k=>ui.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(uf("R01_PUBLISHED_B11_SOURCE_BLOB"),field("B11_CANDIDATE_SOURCE_BLOB"),
   "B11 R02 UI delta must descend from independent-reviewed R01 Knowledge");
  assert.equal(uf("R01_PUBLISHED_B11_CANONICAL_BLOB"),field("ONE_CANONICAL_B11_BLOB"),
   "B11 R02 UI delta must descend from independent-reviewed R01 canonical");
  assert.equal(uf("R01_CSS_BLOB"),field("CSS_B11_SCOPED_APPEND_BLOB"),
   "B11 R02 must preserve approved R01 CSS");
  assert.equal(uf("R02_CSS_BLOB"),uf("R01_CSS_BLOB"),
   "B11 R02 must not touch shared CSS");
  assert(ui.includes("B11-UI-TAB4-01")&&ui.includes("DELTA_A_UI"),
   "B11 R02 owner UI issue and classification missing");
  const delta=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_B11_B12_OWNER_P2_SOURCE_FIRST_DELTA_A_R01_20261118.md"),"utf8");
  const df=k=>delta.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  const currentGolden=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_B11_B12_OWNER_P2_GOLDEN_COMPONENT_PARITY_DELTA_A_R02_20261118.md"),"utf8");
   const g=k=>currentGolden.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(g("B11_PREVIOUS_SOURCE_BLOB"),df("B11_SOURCE_CURRENT_BLOB"),
   "B11 prior P2 source-first learner SHA history intact");
  assert.equal(g("B11_PREVIOUS_CANONICAL_BLOB"),df("B11_CANONICAL_CURRENT_BLOB"),
   "B11 prior P2 source-first canonical SHA history intact");
  assert.equal(g("GOLDEN_CSS_PREVIOUS_BLOB"),uf("R02_CSS_BLOB"),
   "B11 old shared Golden CSS history intact");
  const source=uf("R02_B11_SOURCE_BLOB"),
        masterSha=uf("R02_ONE_CANONICAL_B11_BLOB");
  assert.equal(df("B11_BASELINE_SOURCE_BLOB"),source,
   "B11 source-first P2 must descend from exact previously approved source");
  assert.equal(df("B11_BASELINE_CANONICAL_BLOB"),masterSha,
   "B11 source-first P2 must descend from exact previously signed canonical");
  assert(/^[a-f0-9]{40}$/.test(source||"")&&/^[a-f0-9]{40}$/.test(masterSha||"")&&source!==row.candidate,
   "B11 distinct candidate and canonical must have SHA-locked identities");
  const calc=buf=>require("node:crypto").createHash("sha1")
   .update(Buffer.from("blob "+buf.length+String.fromCharCode(0))).update(buf).digest("hex");
  assert.equal(calc(Buffer.from(signed)),uf("R01_Q18_RECEIPT_BLOB"),
   "B11 signed academic/PED R01 receipt must remain byte-identical");
  const manuscript=fs.readFileSync(path.join(root,
   "prototypes/thpt/content-drafts/THPT_G10_CHIV_B11_CANONICAL.md"));
  assert.equal(calc(manuscript),g("B11_CANONICAL_CURRENT_BLOB"),
   "B11 same canonical file must equal new owner P2 Delta A SHA");
  const css=fs.readFileSync(path.join(root,"docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css"));
  const cssFull=css.toString("utf8"),b13Tail="/* G10 ChV B13 · exact B10/B12 Golden palette";
  const tailAt=cssFull.indexOf(b13Tail);
  assert(tailAt>0&&cssFull.indexOf(b13Tail,tailAt+1)<0,
   "B13 Golden palette must be an isolated exact CSS append");
  assert.equal(calc(Buffer.from(cssFull.slice(0,tailAt-1))),g("GOLDEN_CSS_CURRENT_BLOB"),
   "B11/B12 approved Golden CSS must remain byte-exact prefix");
  const receipt=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHV_B13_S1_Q18_GOLDEN_ENRICHMENT_DELTA_R01_20261119.md"),"utf8");
  const f=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(calc(css),f("CANDIDATE_GOLDEN_CSS_BLOB"),
   "B13 candidate CSS must match signed Q18 receipt without changing B11/B12");
  const sourceText=fs.readFileSync(path.join(root,
   "docs/thpt-preview/sgk/chuong-iv/bai-11.md"),"utf8");
  assert.equal(calc(Buffer.from(sourceText)),g("B11_SOURCE_CURRENT_BLOB"),
   "B11 source-first learner Knowledge must match new owner P2 receipt");
  const manuscriptText=manuscript.toString("utf8");
  const start="<!-- BEGIN_B11_KNOWLEDGE_MARKDOWN -->\n",end="\n<!-- END_B11_KNOWLEDGE_MARKDOWN -->";
  assert(manuscriptText.includes(start)&&manuscriptText.includes(end),"B11 one canonical Knowledge markers missing");
  assert.equal(manuscriptText.split(start)[1].split(end)[0].trimEnd()+"\n",sourceText,
   "B11 published learner source must be exact current canonical Section A");
  for(const required of ["CHIV-11-A","CHIV-11-B","DELTA_C_ACADEMIC_MATERIAL",
    "INDEPENDENT_ACADEMIC_PED_REVIEW_PENDING","NO_MERGE_NO_DEPLOY"]){
   assert(signed.includes(required),"B11 review HOLD evidence missing "+required);
  }
  return g("B11_SOURCE_CURRENT_BLOB");
 }

 if(name==="B10"){
  const row=chivEditorialReceiptRows().get("B10");
  assert(row&&row.baseline===blobs[1],"B10 R01 Q18 must extend exact old editorial ledger");
  const rf="prototypes/thpt/ux795/G10_CHIV_B10_S1_PED_SINGLE_CANONICAL_Q18_R01_20261118.md";
  const receipt=fs.readFileSync(path.join(root,rf),"utf8");
  const f=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(f("BASELINE_B10_KNOWLEDGE_BLOB"),row.candidate,
    "B10 scoped Q18 source baseline must match old current Knowledge");
  const source=f("R01_SOURCE_BLOB"),masterSha=f("ONE_CANONICAL_LESSON_BLOB");
  assert(/^[a-f0-9]{40}$/.test(source||"")&&/^[a-f0-9]{40}$/.test(masterSha||"")&&
   source!==row.candidate,"B10 candidate Academic Delta C requires distinct signed SHA");
  const canonical=fs.readFileSync(path.join(root,
   "prototypes/thpt/content-drafts/THPT_G10_CHIV_B10_CANONICAL.md"));
  const calc=b=>require("node:crypto").createHash("sha1")
   .update(Buffer.from("blob "+b.length+String.fromCharCode(0))).update(b).digest("hex");
  for(const token of ["Q18_AUTHOR_SELF_VERIFIED","CHIV-10-A","CHIV-10-B","CHIV-10-C",
   "B09-F04","DELTA_C_ACADEMIC_MATERIAL","P1_NOT_PUBLISHED"])
   assert(receipt.includes(token),"B10 mandatory signed self-QA/audit evidence missing "+token);
  // Published R01 is immutable. P2 visual MathJax fix has a separate DELTA_A receipt.
  const r02=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B10_P2_MATHJAX_DELTA_A_UI_R02_20261118.md"),"utf8");
  const f02=k=>r02.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(f02("BASELINE_R01_SOURCE_BLOB"),source,"B10 P2 R02 must chain to published R01 Knowledge");
  assert.equal(f02("BASELINE_R01_CANONICAL_BLOB"),masterSha,"B10 P2 R02 must chain to published R01 manuscript");
  for(const keyword of ["DELTA_A_UI","OWNER_P2","MathJax"])
   assert(r02.includes(keyword),"B10 P2 MathJax receipt is missing scope/provenance "+keyword);
  const nextSource=f02("R02_SOURCE_BLOB"),nextMaster=f02("R02_ONE_CANONICAL_LESSON_BLOB");
  assert(/^[a-f0-9]{40}$/.test(nextSource||"")&&/^[a-f0-9]{40}$/.test(nextMaster||""),
   "B10 P2 R02 source and manuscript must be exactly hash-locked");
  assert.equal(calc(canonical),nextMaster,"B10 current canonical manuscript must match R02 P2 receipt");
  return nextSource;
 }

 if(name==="B09"){
  const row=chivEditorialReceiptRows().get("B09");
  assert(row&&row.baseline===blobs[1],
   "B09 R03 source chain must extend immutable ChIV original baseline");
  const file=path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B09_S1_SEMANTIC_DECOMPOSITION_R03_20261117.md");
  if(fs.existsSync(file)){
   const receipt=fs.readFileSync(file,"utf8");
   const f=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(f("SOURCE_BASELINE_BLOB"),row.candidate,
    "B09 R03 academic content must extend published exact editorial source");
   assert.equal(f("CSS_BASELINE_BLOB"),"0cdc618cf9a070f1b1ed50566877f5de0d025ee8",
    "B09 R03 style must extend owner P2-accepted B08 CSS");
   const next=f("R03_SOURCE_BLOB");
   assert(/^[a-f0-9]{40}$/.test(next||"")&&next!==row.candidate,
    "B09 R03 requires a distinct signed source snapshot");
   for(const word of ["B09-F01","B09-F02","FORMAL_DEFINITION","FORMAL_RULE",
     "MANDATORY_RECAP","KEY_FORMULA","BLOCKED_BY_AUTHORING",
     "NO_CANONICAL_DECOMPOSITION_ITEM","THPT-G10-CHIV-TRY11"]){
    assert(receipt.includes(word),"B09 academic receipt missing "+word);
   }
   // R05 is an additive self-QA receipt on the SAME current B09 canonical
   // manuscript; R03 stays a frozen historical checkpoint, not a competing draft.
   const unifiedPath=path.join(root,
    "prototypes/thpt/ux795/G10_CHIV_B09_CANONICAL_Q18_R05_20261117.md");
   if(fs.existsSync(unifiedPath)){
    const locked=fs.readFileSync(unifiedPath,"utf8");
    const field=k=>locked.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
    assert.equal(field("BASELINE_R03_SOURCE_BLOB"),next,
     "B09 R05 must follow exact frozen R03 academic source");
    const r05Source=field("R05_SOURCE_BLOB"),r05Master=field("ONE_CANONICAL_LESSON_BLOB");
    assert(/^[0-9a-f]{40}$/.test(r05Source||"")&&r05Source!==next,
     "B09 R05 original discovery figure source SHA locked");
    let final=r05Source,master=r05Master;
    const r06Path=path.join(root,
     "prototypes/thpt/ux795/G10_CHIV_B09_TAB4_REAL_ERROR_P2_DELTA_C_R06_20261117.md");
    if(fs.existsSync(r06Path)){
     const r06=fs.readFileSync(r06Path,"utf8");
     const q=k=>r06.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
     assert.equal(q("PRIOR_R05_SOURCE_BLOB"),r05Source,
      "B09 owner P2 correction must follow exact frozen R05 Knowledge");
     assert.equal(q("PRIOR_R05_CANONICAL_BLOB"),r05Master,
      "B09 owner P2 correction must follow exact frozen R05 manuscript");
     assert(r06.includes("Q18_AUTHOR_SELF_VERIFIED")&&r06.includes("B09-F04")&&
      r06.includes("DELTA_C_ACADEMIC_MATERIAL")&&r06.includes("OWNER_P2_STATUS"),
      "B09 R06 scoped Q18 pedagogic correction receipt required");
     final=q("R06_SOURCE_BLOB");master=q("R06_ONE_CANONICAL_LESSON_BLOB");
     assert(/^[a-f0-9]{40}$/.test(final||"")&&/^[a-f0-9]{40}$/.test(master||"")&&
      final!==r05Source&&master!==r05Master,"B09 real-error delta must bind new distinct source/master SHA");
    }
    const current=fs.readFileSync(path.join(root,
     "prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_CANONICAL.md"));
    const blob=bytes=>require("node:crypto").createHash("sha1").update(Buffer.from("blob "+bytes.length+String.fromCharCode(0))).update(bytes).digest("hex");
    assert.equal(blob(current),master,"B09 must use the ONE SHA-locked academic manuscript");
    for(const token of ["Q18_AUTHOR_SELF_VERIFIED","CHIV-09-A","THPT-G10-B09-P07",
      "FORMATIVE_ONLY","OWNER_P2_PENDING","B09-RUNTIME-01"])
     assert(locked.includes(token),"B09 single-source Q18 receipt missing "+token);
    return final;
   }
   return next;
  }
  return row.candidate;
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
  const currentB13=()=>{
   const t=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHV_B13_S1_Q18_GOLDEN_ENRICHMENT_DELTA_R01_20261119.md"),"utf8");
   const f=k=>t.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   const baseline=f("BASELINE_LESSON_GIT_BLOB"),next=f("CANDIDATE_LESSON_GIT_BLOB");
   assert.equal(baseline,chvEditorialReceiptRows().get("B13").candidate,
    "B13 current source must derive from signed historic ChV editorial candidate");
   assert(/^[a-f0-9]{40}$/.test(next||"")&&next!==baseline,
    "B13 affected Delta C source must have a distinct pinned current SHA");
   assert(t.includes("DELTA_C_ACADEMIC_MATERIAL_AFFECTED_REVIEW_HOLD")&&
    t.includes("SOURCE_RECEIPT_S1_PDF_UNVERIFIED")&&
    t.includes("NOT_MERGED"),"B13 provisional source receipt must declare real reviewer and S1 HOLD");
   return {baseline,next,css:f("CANDIDATE_GOLDEN_CSS_BLOB"),
    previousCss:f("G10_B01_B12_FROZEN_CSS_BLOB")};
  };
  if(name==="B12"){
   const locked=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHV_B12_S1_PED_CALCULATOR_Q18_R01_20261118.md"),"utf8");
   const f=k=>locked.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(f("BASELINE_B12_KNOWLEDGE_BLOB"),row.candidate,
    "B12 current material must extend immutable ChV S1 editorial Q18 receipt");
   assert(locked.includes("DELTA_C_ACADEMIC_MATERIAL")&&
    locked.includes("INDEPENDENT_NOTEBOOKLM_ACADEMIC_PED_REVIEW_PENDING"),
    "B12 calculator material is a review HOLD; no automated academic PASS");
   const blob=b=>{const c=require("node:crypto");return c.createHash("sha1")
     .update(Buffer.from("blob "+b.length+String.fromCharCode(0))).update(b).digest("hex");};
   const delta=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_B11_B12_OWNER_P2_SOURCE_FIRST_DELTA_A_R01_20261118.md"),"utf8");
   const df=k=>delta.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   const currentGolden=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_B11_B12_OWNER_P2_GOLDEN_COMPONENT_PARITY_DELTA_A_R02_20261118.md"),"utf8");
   const g=k=>currentGolden.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(g("B12_PREVIOUS_SOURCE_BLOB"),df("B12_SOURCE_CURRENT_BLOB"),
    "B12 prior P2 source-first learner SHA preserved");
   assert.equal(g("B12_PREVIOUS_CANONICAL_BLOB"),df("B12_CANONICAL_CURRENT_BLOB"),
    "B12 prior P2 source-first canonical SHA preserved");
   assert.equal(g("GOLDEN_CSS_PREVIOUS_BLOB"),f("FROZEN_CSS_BLOB"),
    "B12 original shared CSS SHA must remain signed");
   assert.equal(df("B12_BASELINE_SOURCE_BLOB"),f("B12_R01_SOURCE_BLOB"),
    "B12 source-first P2 must preserve historical independent-review source SHA");
   assert.equal(df("B12_BASELINE_CANONICAL_BLOB"),f("ONE_CANONICAL_B12_R01_BLOB"),
    "B12 source-first P2 must preserve historical signed canonical SHA");
   assert.equal(blob(fs.readFileSync(path.join(root,
    "prototypes/thpt/content-drafts/THPT_G10_CHV_B12_CANONICAL.md"))),
    g("B12_CANONICAL_CURRENT_BLOB"),"B12 current canonical must match B10 Golden component parity SHA");
   for(const [rel,key] of [
    ["docs/assets/javascripts/thpt-chv-b12-reviewed-formative-r02.js","B12_R01_ITEM_BANK_BLOB"],
    ["docs/thpt-preview/sgk/chuong-v/luyen-tap.md","B12_R01_PRACTICE_HUB_BLOB"],

    ["docs/thpt-preview/sgk/chuong-v/bai-14.md","FROZEN_B14_SOURCE_BLOB"]]){
     assert.equal(blob(fs.readFileSync(path.join(root,rel))),f(key),
      "B12 single canonical/source and other owner-frozen lesson SHA mismatch "+rel);
   }
   const b13=currentB13();
   assert.equal(b13.baseline,f("FROZEN_B13_SOURCE_BLOB"),
    "B12 frozen B13 ancestor preserved in its original academic source receipt");
   assert.equal(blob(fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-v/bai-13.md"))),b13.next,
    "B13 current candidate must match its own source-locked Q18 receipt");
   const style=fs.readFileSync(path.join(root,
    "docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css"));
   const full=style.toString("utf8"),marker="/* G10 ChV B13 · exact B10/B12 Golden palette";
   const offset=full.indexOf(marker);
   assert(offset>0&&full.indexOf(marker,offset+1)<0,
    "B13 may append one and only one new Golden CSS scope");
   assert.equal(blob(Buffer.from(full.slice(0,offset-1))),g("GOLDEN_CSS_CURRENT_BLOB"),
    "B12 owner-approved Golden CSS prefix must remain byte-identical");
   assert.equal(b13.previousCss,g("GOLDEN_CSS_CURRENT_BLOB"),
    "B13 receipt previous CSS SHA must match owner signed B12");
   assert.equal(blob(style),b13.css,"B13 current scoped CSS SHA must match Q18 receipt");
   return g("B12_SOURCE_CURRENT_BLOB");
  }
  if(name==="B13")return currentB13().next;
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
