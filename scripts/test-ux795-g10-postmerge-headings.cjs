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
const {candidateG10KnowledgeBlob}=require("./thpt-q18-g10-source-receipt.cjs");
const root=path.resolve(__dirname,"..");
const chapter=n=>n<=2?"i":n<=4?"ii":n<=6?"iii":n<=11?"iv":n<=14?"v":n<=18?"vi":n<=22?"vii":n<=25?"viii":"ix";
const foldName=/^\s*\?\?\?\s+question\s+"([^"]+)"/gm;
const isAnswerReveal=title=>/(?:đối chiếu|lời giải|đáp án|tự mở kết quả)/i.test(title);
const concise=/<summary[^>]*>\s*Đối chiếu\s*<\/summary>/g;
const longTitle=/<summary[^>]*>\s*(?:Em đã[^<]{0,180}Mở (?:lời giải|đáp án)|Mở (?:lời giải|đáp án) sau khi)[^<]*<\/summary>/gi;

/* Only the exact 4-row Q18 ChVI follow-on receipt authorizes contextual
 * self-practice labels. Canonical First Try headings stay 'Đối chiếu'.
 * The integration-main test must receive this receipt from candidate CI. */
const uxPath=path.join(root,
 "prototypes/thpt/ux795/G10_CHVI_B15_B18_EXAMPLE_UX_Q18_DELTA_RECEIPT_20261113.md");
const uxReceipt=fs.existsSync(uxPath)?fs.readFileSync(uxPath,"utf8"):"";
const uxRows=[...uxReceipt.matchAll(/^\| B(1[5-8]) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \|/gm)];
if(uxReceipt)assert.equal(uxRows.length,4,"ChVI UX receipt must have four immutable lessons");
const ux=new Map(uxRows.map(m=>[Number(m[1]),{baseline:m[2],candidate:m[3],examples:Number(m[4])}]));
if(uxReceipt)assert.equal(ux.size,4,"ChVI UX receipt duplicate lesson");
const chviiReceiptPath=path.join(root,
 "prototypes/thpt/ux795/G10_CHVII_B19_B22_S1_Q18_GOLDEN_ENRICHMENT_RECEIPT_20261113.md");
const chviiReceipt=fs.existsSync(chviiReceiptPath)?fs.readFileSync(chviiReceiptPath,"utf8"):"";
const chviiRows=[...chviiReceipt.matchAll(/^\| B(19|20|21|22) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \| (\d+) \| (\d+) \|/gm)];
if(chviiReceipt)assert.equal(chviiRows.length,4,"ChVII must have all four signed first-try/HELP/example receipts");
const chvii=new Map(chviiRows.map(m=>[Number(m[1]),{
 baseline:m[2],candidate:m[3],tries:Number(m[4]),helps:Number(m[5]),examples:Number(m[6])}]));

// B17/B18 20/11 signed local practice is now labelled “Đối chiếu ba câu Vận dụng”.
// Keep exactly one closed, opt-in disclosure, also accepting frozen B15 label.
const htmlSelfPractice=/<summary[^>]*>\s*(?:Xem lời giải ba câu tự luyện|Đối chiếu ba câu Vận dụng)\s*<\/summary>/g;
const blob=raw=>crypto.createHash("sha1")
 .update(Buffer.from("blob "+raw.length+"\0")).update(raw).digest("hex");
// Frozen 20/11 Q18 matrix: B7–B14 old→new Knowledge, plus B09–B12
// one manuscript. Later owner-signed deltas are read by the Q18 router.
const placement=fs.readFileSync(path.join(root,
 "prototypes/thpt/ux795/G10_CHIV_CHV_B07_B14_KIEM_LOI_PLACEMENT_Q18_R01_20261120.md"),"utf8");
const signedRow=name=>{
 const row=placement.split("\n").filter(x=>x.startsWith("| "+name+" | "));
 assert.equal(row.length,1,"one source receipt row for "+name);
 const shas=[...row[0].matchAll(/`([a-f0-9]{40})`/g)].map(x=>x[1]);
 assert.equal(shas.length,2,"exact old/current SHA cells for "+name);
 return shas;
};

let lessons=0,first=0,reveals=0,legacyCount=0,newB05Count=0,newB12Count=0;
for(let n=1;n<=27;n++){
 const route="thpt-preview/sgk/chuong-"+chapter(n)+"/bai-"+n;
 const markdown=fs.readFileSync(path.join(root,"docs",route+".md"),"utf8");
 const html=fs.readFileSync(path.join(root,"site-thpt-preview",route,"index.html"),"utf8");
 const sourceBlob=blob(fs.readFileSync(path.join(root,"docs",route+".md")));
 assert.equal(sourceBlob,candidateG10KnowledgeBlob(n),
  "B"+n+" isolated dry-run must exactly match current complete Q18 source router");
 const titles=[...markdown.matchAll(foldName)].map(m=>m[1]);
 const count=titles.filter(isAnswerReveal).length;
 const ids=[...markdown.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(m=>m[1]);
 const added=ids.filter(id=>id==="THPT-G10-CHIII-TRY11");
 assert.equal(added.length,n===5?1:0,"B"+n+" only B05 may place new calculator First Try once");
 if(n===5){
  assert.deepEqual(ids,["THPT-G10-CHIII-TRY01","THPT-G10-CHIII-TRY02","THPT-G10-CHIII-TRY03",
   "THPT-G10-CHIII-TRY04","THPT-G10-CHIII-TRY05","THPT-G10-CHIII-TRY11"],
   "B05 preserves original five item IDs and adds one canonical calculator self-trial");
  const receipt=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIII_B05_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md"),"utf8");
  const field=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(blob(fs.readFileSync(path.join(root,"docs",route+".md"))),field("CANDIDATE_LESSON_GIT_BLOB"),
   "B05 new public question only on current Q18 source-locked candidate");
  assert(markdown.includes('data-outcome-id="G10-B05-CALCULATOR_ANGLE"')&&
   markdown.includes('data-thpt-help-ref="HELP-G10-B05-03"'),
   "B05 new item maps to calculator outcome and HELP D6 (never RD1)");
 }
 if(n===12){
  const original=["THPT-G10-CHV-TRY01","THPT-G10-CHV-TRY02",
    "THPT-G10-CHV-TRY03","THPT-G10-CHV-TRY04"];
  assert.deepEqual(ids.slice(0,4),original,
   "B12 four historical independently reviewed First Try IDs/order must remain");
  assert.deepEqual(ids.slice(4),["THPT-G10-CHV-TRY-CALC-R01"],
   "B12 may add exactly one independent calculator First Try");
  const q18=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHV_B12_S1_PED_CALCULATOR_Q18_R01_20261118.md"),"utf8");
  const f=k=>q18.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  // UX795 dry-run copies a selected subset of GitHub source files into
  // integration-main, not the new Delta A receipt. Both exact source SHA
  // guards are immutable literals here; full-repo ChV QA separately checks
  // the original signed reviewer receipt and the new current Delta A receipt.
  assert.equal(f("B12_R01_SOURCE_BLOB"),"fc2942aeafdcd34d3cedd9eeb24c48716bbe7e78",
   "B12 historical reviewed calculator SHA must remain locked");
  const [priorB12,currentB12]=signedRow("B12");
  assert.equal(priorB12,"a2ea6c909cdd2317188b13c2bde22e7923dba3de",
   "B12 original owner duplicate-heading Delta A must remain an immutable baseline");
  assert.equal(currentB12,candidateG10KnowledgeBlob(12),
   "B12 new 20/11 local calculator D6 must use its exact Q18 successor");
  assert.equal(sourceBlob,currentB12,"B12 current one-canonical Q18 source");
  assert(q18.includes("INDEPENDENT_NOTEBOOKLM_ACADEMIC_PED_REVIEW_PENDING"),
   "B12 distinct calculator attempt does not itself grant Academic/PED clearance");
  newB12Count++;
 }
 if(n===6){
  assert.deepEqual(ids,["THPT-G10-CHIII-TRY06","THPT-G10-CHIII-TRY07",
   "THPT-G10-CHIII-TRY10","THPT-G10-CHIII-TRY08","THPT-G10-CHIII-TRY09"],
   "B06 source preserves exact five historical item IDs, reorganized only by real S1 sections");
  const receiptPath="prototypes/thpt/ux795/G10_CHIII_B06_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md";
  const receipt=fs.readFileSync(path.join(root,receiptPath),"utf8");
  const field=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  const follow=fs.readFileSync(path.join(root,"prototypes/thpt/ux795/G10_CHIII_B06_PED_REFERENCE_ANCHOR_R02_20261116.md"),"utf8");
   const r02=k=>follow.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(r02("R01_APPROVED_SOURCE_BLOB"),field("CANDIDATE_LESSON_GIT_BLOB"),"B06 immutable R01 predecessor");
   assert.equal(blob(fs.readFileSync(path.join(root,"docs",route+".md"))),r02("R02_CORRECTED_SOURCE_BLOB"),
    "B06 final owner P2 language correction exact source receipt");
  assert.equal([...markdown.matchAll(/data-thpt-help-id="([^"]+)"/g)].length,2,
   "B06 original two HELP IDs preserved, no assessment mutation");
 }
 if(n===8){
  assert.deepEqual(ids,["THPT-G10-CHIV-TRY06","THPT-G10-CHIV-TRY07","THPT-G10-CHIV-TRY08",
   "THPT-G10-CHIV-TRY09","THPT-G10-CHIV-TRY10"],"B08 original five canonical IDs unchanged");
  const receipt=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B08_S1_OWNER_Q18_ENRICHMENT_DELTA_R02_20261116.md"),"utf8");
  const field=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  const visualFile=path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B08_MATHJAX_DISPLAY_DELTA_A_R03_20261117.md");
  let expected=field("R02_CANDIDATE_SOURCE_BLOB");
  if(fs.existsSync(visualFile)){
   const delta=fs.readFileSync(visualFile,"utf8");
   const visualField=k=>delta.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(visualField("R02_PUBLISHED_SOURCE_BLOB"),expected,
    "B08 R03 UI-only MathJax repair must extend exact published R02 academic source");
   assert(delta.includes("DELTA_A_UI")&&delta.includes("nine blank lines"),
    "B08 R03 receipt requires precise display-only evidence");
   expected=visualField("R03_CANDIDATE_SOURCE_BLOB");
  }
  const semanticPath=path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B08_SEMANTIC_3PLUS1_DELTA_R04_20261117.md");
  if(fs.existsSync(semanticPath)){
   const semantic=fs.readFileSync(semanticPath,"utf8");
   const semField=k=>semantic.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(semField("BASELINE_R03_SOURCE_BLOB"),expected,
    "B08 R04 must extend the exact immutable R03 display snapshot");
   assert(semantic.includes("OWNER_P2_PENDING")&&semantic.includes("FORMAL_DEFINITION")&&
    semantic.includes("FORMAL_RULE")&&semantic.includes("KEY_FORMULA"),
    "B08 R04 owner-approved semantic roles require signed Q18 evidence");
   expected=semField("R04_SOURCE_BLOB");
  }
  const [priorB08,currentB08]=signedRow("B8");
  assert.equal(priorB08,expected,
   "B08 20/11 D6 placement must extend the exact signed R02→R03→R04 source");
  assert.equal(currentB08,candidateG10KnowledgeBlob(8),
   "B08 20/11 current D6 placement must match complete Q18 source router");
  assert.equal(sourceBlob,currentB08,"B08 current source locked after R04→20/11");
  const first=markdown.indexOf('=== "Khám phá kiến thức"'),second=markdown.indexOf('=== "Kiến thức SGK"');
  assert(first>=0&&second>first&&markdown.slice(first,second).includes("THPT_G10_B08_TRIANGLE_PARALLELOGRAM_SUM_D5_R01.svg"),
   "B08 authentic D5 figure must guide concept-first discovery");
 }
 if(n===9){
  const r03Path=path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B09_S1_SEMANTIC_DECOMPOSITION_R03_20261117.md");
  if(fs.existsSync(r03Path)){
   const receipt=fs.readFileSync(r03Path,"utf8");
   const field=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(field("SOURCE_BASELINE_BLOB"),
    "2529b915e4089862e1a48e685ba5dc88d5450558",
    "B09 R03 follows exact immutable R01 editorial source");
   // R03 remains immutable; R05 is the one current source SHA.
   const r05Path=path.join(root,
    "prototypes/thpt/ux795/G10_CHIV_B09_CANONICAL_Q18_R05_20261117.md");
   assert(fs.existsSync(r05Path),"B09 R05 Q18 receipt must be in the QA-only checkout");
   const signed=fs.readFileSync(r05Path,"utf8");
   const q=k=>signed.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(q("BASELINE_R03_SOURCE_BLOB"),field("R03_SOURCE_BLOB"),
    "B09 R05 must follow exact frozen R03");
   const r06Path=path.join(root,
    "prototypes/thpt/ux795/G10_CHIV_B09_TAB4_REAL_ERROR_P2_DELTA_C_R06_20261117.md");
   assert(fs.existsSync(r06Path),"B09 real error 4.3 source receipt must be in isolated main+candidate QA");
   const correction=fs.readFileSync(r06Path,"utf8");
   const q06=k=>correction.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(q06("PRIOR_R05_SOURCE_BLOB"),q("R05_SOURCE_BLOB"),
    "B09 R06 must extend exact P1 published R05 Markdown");
   assert.equal(q06("PRIOR_R05_CANONICAL_BLOB"),q("ONE_CANONICAL_LESSON_BLOB"),
    "B09 R06 must extend exact P1 canonical source");
   const manuscriptPath=path.join(root,
    "prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_CANONICAL.md");
   assert(fs.existsSync(manuscriptPath),"B09 one-current manuscript missing from QA");
   // Immutable R06→20/11 local HELP→R02 Tab4 general-error source.
   // Both Knowledge AND its ONE canonical manuscript must follow signed
   // old/new SHA pairs; never overwrite a previously approved receipt.
   const [oldB09,movedB09]=signedRow("B9");
   const [oldMasterB09,movedMasterB09]=signedRow("CANONICAL_B09");
   assert.equal(oldB09,q06("R06_SOURCE_BLOB"),
    "B09 20/11 placement must descend from immutable R06 Knowledge");
   assert.equal(oldMasterB09,q06("R06_ONE_CANONICAL_LESSON_BLOB"),
    "B09 20/11 placement must descend from immutable R06 manuscript");
   const r02=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHIV_B09_GENERAL_VECTOR_ERROR_TAB4_Q18_R02_20261120.md"),"utf8");
   const f02=k=>r02.split("**"+k+":** `")[1]?.slice(0,40);
   assert.equal(f02("R02_PREVIOUS_SOURCE_BLOB"),movedB09,
    "B09 R02 source must follow 20/11 signed local HELP placement");
   assert.equal(f02("R02_PREVIOUS_CANONICAL_BLOB"),movedMasterB09,
    "B09 R02 manuscript must follow same 20/11 signed local HELP placement");
   assert.equal(f02("R02_CORRECTED_SOURCE_BLOB"),candidateG10KnowledgeBlob(9),
    "B09 current 20/11 Tab4 source must match complete Q18 router");
   assert.equal(sourceBlob,f02("R02_CORRECTED_SOURCE_BLOB"),
    "B09 current Knowledge after R02 must match exact signed source");
   assert.equal(blob(fs.readFileSync(manuscriptPath)),f02("R02_CORRECTED_CANONICAL_BLOB"),
    "B09 ONE manuscript must match the exact R02 canonical source");
   const manuscript=fs.readFileSync(manuscriptPath,"utf8");
   assert(manuscript.includes("<!-- BEGIN_B09_KNOWLEDGE_MARKDOWN -->")&&
    manuscript.includes("THPT-G10-B09-P07"),"B09 manuscript needs Knowledge and P07");
   const tab4=markdown.slice(markdown.indexOf('=== "Lỗi thường gặp"'));
   assert.equal((tab4.match(/^    \?\?\? tip "/gm)||[]).length,1,
    "B09 Tab4 must keep one genuinely diagnosed general vector error");
   assert.equal((markdown.match(/^    \?\?\? tip "Kiểm lỗi"/gm)||[]).length,2,
    "B09 two local mistake-specific HELP must remain after the relevant First Try");
   assert(tab4.includes("Đảo dấu khi phân tích vectơ")&&
    !tab4.includes("**Khi chưa phân tích được vectơ theo hai hướng:**"),
    "B09 tab4 real wrong-sign diagnosis must replace misplaced D6 prose");
   assert(markdown.includes("Phân tích duy nhất theo hai vectơ không cùng phương")&&
    markdown.includes("THPT_G10_B09_DECOMPOSITION_TWO_DIRECTIONS_D5_R03.svg"),
    "B09 S1 decomposition explanation and its accessible D5 asset missing");
   assert(receipt.includes("BLOCKED_BY_AUTHORING")&&
    receipt.includes("NO_CANONICAL_DECOMPOSITION_ITEM"),
    "B09 can be technically previewed, but authoring gap is still HOLD");
  }
 }
 if(n===10){
  const receiptPath=path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B10_S1_PED_SINGLE_CANONICAL_Q18_R01_20261118.md");
  const masterPath=path.join(root,
   "prototypes/thpt/content-drafts/THPT_G10_CHIV_B10_CANONICAL.md");
  assert(fs.existsSync(receiptPath)&&fs.existsSync(masterPath),
   "G10 B10 QA integration must carry both one canonical manuscript and Q18 receipt");
  const receipt=fs.readFileSync(receiptPath,"utf8");
  const f=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(f("BASELINE_B10_KNOWLEDGE_BLOB"),"ceaa76688e73274c9cf2d3116c41c6d4d0ac2726");
  const deltaPath=path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B10_P2_MATHJAX_DELTA_A_UI_R02_20261118.md");
  const currentPublic=blob(fs.readFileSync(path.join(root,"docs",route+".md")));
  const currentMaster=blob(fs.readFileSync(masterPath));
  if(fs.existsSync(deltaPath)){
   // PR candidate: new render-only source SHA must follow exact P1 R01.
   const delta=fs.readFileSync(deltaPath,"utf8");
   const df=k=>delta.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(df("BASELINE_R01_SOURCE_BLOB"),f("R01_SOURCE_BLOB"),
    "G10 B10 UI-only R02 must descend from P1 R01 Knowledge");
   assert.equal(df("BASELINE_R01_CANONICAL_BLOB"),f("ONE_CANONICAL_LESSON_BLOB"),
    "G10 B10 UI-only R02 must descend from P1 R01 canonical");
   const [priorB10,currentB10]=signedRow("B10");
   const [priorMasterB10,currentMasterB10]=signedRow("CANONICAL_B10");
   assert.equal(priorB10,df("R02_SOURCE_BLOB"),
    "B10 immutable P2 MathJax source must precede 20/11 D6 placement");
   assert.equal(priorMasterB10,df("R02_ONE_CANONICAL_LESSON_BLOB"),
    "B10 immutable P2 manuscript must precede 20/11 D6 placement");
   assert.equal(currentB10,candidateG10KnowledgeBlob(10),
    "B10 final Q18 source must be complete current Knowledge");
   assert.equal(currentPublic,currentB10,"B10 current Knowledge source drift");
   assert.equal(currentMaster,currentMasterB10,"B10 current ONE manuscript source drift");
  }else{
   // UX795 separately reconstructs unmodified published main, which has only R01.
   assert.equal(currentPublic,f("R01_SOURCE_BLOB"),
    "G10 B10 published baseline Knowledge must be exact immutable R01");
   assert.equal(currentMaster,f("ONE_CANONICAL_LESSON_BLOB"),
    "G10 B10 published baseline canonical must be exact immutable R01");
  }
  const manuscript=fs.readFileSync(masterPath,"utf8");
  assert(manuscript.includes("<!-- BEGIN_B10_KNOWLEDGE_MARKDOWN -->")&&
   manuscript.includes("<!-- BEGIN_B10_R01_CORE_PRACTICE -->"),
   "G10 B10 no other draft/fragment source can replace one full lesson manuscript");
  assert(markdown.includes("### 3.4. Ví dụ 4 — Qua sông")&&
   markdown.includes("THPT_G10_B10_RIVER_VELOCITY_D5_R01.svg")&&
   markdown.includes("THPT_G10_B10_RIVER_VELOCITY_MOBILE_D5_R01.svg")&&
   markdown.includes("Đọc hình theo đúng dữ kiện Ví dụ 4")&&
   markdown.includes("luyen-tap.md")&&markdown.includes("tu-kiem-tra-chuong.md"),
   "B10 real S1 river method belongs in Tab3 with figures and working routes");
  assert.equal((markdown.match(/^    \?\?\? tip "Kiểm lỗi"/gm)||[]).length,3,
   "B10 exactly three contextual student-error diagnosis disclosures");
  assert.equal((markdown.match(/data-thpt-help-id=/g)||[]).length,3,
   "B10 HELP Q15 ID count is independent of UI error disclosure count");
  assert(!markdown.includes("EX-G10-B10-RIVER-TR01")&&
   !markdown.includes(String.fromCharCode(96)),
   "B10 old source code/admin text cannot leak to learner-facing page");
 }
 legacyCount+=ids.length-added.length-(n===12?1:0);newB05Count+=added.length;
 const short=(html.match(concise)||[]).length;
 const verbose=(html.match(longTitle)||[]).length;
 assert(count>=ids.length,"B"+n+" all canonical First Try disclosures must be among explicit answer-reveal titles");
 const followon=ux.get(n);
 if(followon){
  const source=fs.readFileSync(path.join(root,"docs",route+".md"));
  let active=followon.candidate;
  if(n===15){
   const receiptPath=path.join(root,
    "prototypes/thpt/ux795/G10_CHVI_B15_OWNER_Q18_KNOWLEDGE_ENRICHMENT_20261119.md");
   assert(fs.existsSync(receiptPath),"B15 latest Q18 must accompany isolated merged-source QA");
   const receipt=fs.readFileSync(receiptPath,"utf8");
   const field=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(field("BASELINE_PUBLISHED_B15_BLOB"),followon.candidate,
    "B15 new owner Q18 is chained to original immutable UX receipt");
   const prior=field("CANDIDATE_B15_SOURCE_BLOB");
   const p2=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHVI_B15_P2_EDITORIAL_NOTE_DELTA_R01_20261119.md"),"utf8");
   const p2f=k=>p2.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(p2f("PREVIOUS_B15_SOURCE_BLOB"),prior,"B15 P2 source must preserve old signed source");
   const old=p2f("CANDIDATE_B15_SOURCE_BLOB");
   const visual=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHVI_B15_OWNER_P2_READABILITY_FIGURE_R02_20261119.md"),"utf8");
   const vf=k=>visual.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(vf("PREVIOUS_B15_SOURCE_BLOB"),old,"B15 R02 receipt follows exact P2 source");
   active=vf("CANDIDATE_B15_SOURCE_BLOB");
  }
  if(n===16){
   const r16=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHVI_B16_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261119.md"),"utf8");
   const f16=k=>r16.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(f16("BASELINE_PUBLISHED_B16_SOURCE_BLOB"),followon.candidate,
    "B16 owner Q18 must extend exact historical UX source");
   active=f16("CANDIDATE_B16_SOURCE_BLOB");
  }
  // All historic B15–B18 receipt links remain checked above; Q18's
  // current router additionally locks later 20/11 D6 and 21/11 source.
  assert.equal(blob(source),candidateG10KnowledgeBlob(n),
    "B"+n+" source must match full owner-signed Q18 successor chain");
 }
 const signedVII=chvii.get(n);
 if(signedVII){
  const source=fs.readFileSync(path.join(root,"docs",route+".md"));
  assert.equal(blob(source),candidateG10KnowledgeBlob(n),
   "B"+n+" ChVII Nov13 receipt must extend to signed Nov20/21 current source");
  assert.equal(ids.length,signedVII.tries,"B"+n+" original ChVII FirstTry count");
  assert.equal([...markdown.matchAll(/data-thpt-help-id="([^"]+)"/g)].length,signedVII.helps,
   "B"+n+" ChVII D6 source receipt drift");
  assert.equal([...markdown.slice(markdown.indexOf('=== "Ví dụ"'),markdown.indexOf('=== "Lỗi thường gặp"')).matchAll(/^    ### /gm)].length,
   signedVII.examples,"B"+n+" worked-example solution count must be source locked");
 }

 if(followon&&[15,17,18].includes(n)){
  const self=(html.match(htmlSelfPractice)||[]).length;
  assert.equal(self,1,"B"+n+" one descriptive solution reveal for exactly three voluntary self-practice questions");
  assert.equal(short,ids.length,"B"+n+" every canonical First Try keeps concise Đối chiếu");
  assert.equal(count,short+self,"B"+n+" no unaccounted answer-reveal title");
 }else if(n===12){
  const calculator=/<summary[^>]*>\s*Đối chiếu sau khi đã tự thao tác\s*<\/summary>/g;
  const extra=(html.match(calculator)||[]).length;
  assert.equal(extra,1,"B12 exact separate calculator disclosure summary must be present");
  assert.equal(short,4,"B12 four previously reviewed concise Đối chiếu summaries unchanged");
  assert.equal(count,short+extra,"B12 one distinct opt-in calculator answer, no other changes");
 }else{
  assert.equal(short,count,"B"+n+" concise canonical answer labels must remain unchanged");
 }
 assert.equal(verbose,0,"B"+n+" obsolete spoken-style answer reveal titles must not show in post-merge HTML");
 for(const id of ids)assert(html.includes(id),"B"+n+" canonical First Try ID lost in main+candidate output: "+id);
 assert(!/<summary[^>]*>\s*Em vận dụng\s*<\/summary>/i.test(html),"B"+n+" application headings must be concise");
 lessons++;first+=ids.length;reveals+=short+(n===12?1:0);
}
assert.equal(lessons,27,"Only G10 Knowledge scope is requested");
assert.equal(legacyCount,137,"All 137 historical First Try placements must remain canonical");
assert.equal(newB05Count,1,"Exactly one previously signed new B05 calculator First Try");
assert.equal(newB12Count,1,"Exactly one independently reviewed-pending new B12 calculator First Try");
assert.equal(first,139,"137 historic + one B05 + one B12 = 139 canonical First Tries");
assert.equal(reveals,first,"All 139 First Tries must have voluntary answer disclosures");
console.log("PASS main+candidate dry-run: 137 immutable historical IDs, one B05, one new Q18-signed B12; 139/139 voluntary answer summaries, no verbose legacy titles. Independent review remains HOLD.");
