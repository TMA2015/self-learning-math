#!/usr/bin/env node
"use strict";
/* Q18 v2.0 baseline and Knowledge candidate SHA selection.
 * This retires only obsolete exact-text fingerprints; never infers academic
 * reviewer PASS or alters Q15/Q16, canonical IDs, math or private bank data.
 */
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");

// Owner's ONE anti-repeat ledger (#795); this is its Q18 source-lock delta,
// not a second checklist. Historic signed snapshots remain immutable.
const antiRepeatReceipt="prototypes/thpt/ux795/G10_B19_B26_ONE_SOURCE_AND_SEMANTIC_BOX_Q18_DELTA_20261121.md";
const oldGenericFootnote='<p class="thpt-r4-footnote">Nguồn toán học: SGK Toán 10 Kết nối tri thức với cuộc sống và học liệu SLM hiện hành. Lời giảng được biên tập nhằm hỗ trợ tự học độc lập.</p>';
const gitBlobAntiRepeat=bytes=>{
 const b=Buffer.isBuffer(bytes)?bytes:Buffer.from(bytes);
 return require("node:crypto").createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex");
};
function g10PublicKnowledgePath(n) {
 const chapter=n<=2?"i":n<=4?"ii":n<=6?"iii":n<=11?"iv":n<=14?"v":n<=18?"vi":n<=22?"vii":n<=25?"viii":"ix";
 return "docs/thpt-preview/sgk/chuong-"+chapter+"/bai-"+n+".md";
}
function g10OneSourceCitation(n,content){
 const footers=[...content.matchAll(/<p class="thpt-r4-footnote">([^\n]*)<\/p>/g)];
 assert.equal(footers.length,1,"B"+n+" must have ONE final source footer");
 assert(footers[0][1].includes("SGK"),"B"+n+" source citation must identify SGK");
 assert(!/<small>\s*(?:Nguồn|Đối chiếu SGK)/.test(content),
  "B"+n+" must not carry a second small-font source note");
 return footers[0];
}
// #1132 / owner authorization comment 7234992998, PR #1133.
// Exact reversible display-only successor: retain every historical Q18 lock.
// No new academic verdict; actual browser and publication gates remain separate.
const release1132DisplayDelta=new Map([
 [
  18,
  {
   "old": "3d8b0ed45b606f608db4b2a55ecfa8a273a8c802",
   "updated": "d0961206048222b26e82900db8fff6a2f60b6ad3",
   "before": "**Bước 1 — hình dung và đặt điều kiện. Đặt",
   "after": "**Bước 1 — hình dung và đặt điều kiện.** Đặt"
  }
 ],
 [
  21,
  {
   "old": "4b6ab3755ff8d5c074f4ffa7d7a283fa8799bfb7",
   "updated": "e3da0e71eebde3f879a35d3e044eea49fa03b5d7",
   "before": "**h<R** cho hai điểm, **h=R** cho một tiếp điểm, **h>R** thì không gặp đường tròn.",
   "after": "<strong>h &lt; R</strong> cho hai điểm chung, <strong>h = R</strong> cho một tiếp điểm, <strong>h &gt; R</strong> thì không gặp đường tròn."
  }
 ],
 [
  22,
  {
   "old": "0b37ecdc4270fe24b6ba0b3dc724a2444f703cd4",
   "updated": "045b24b9df5ae19de6e857d4781083311f132c32",
   "before": "**c²=a²−b²** và c<a; hypebol trục thực Ox có **c²=a²+b²** và c>a.",
   "after": "<strong>c² = a² − b²</strong> và c &lt; a; hypebol trục thực Ox có <strong>c² = a² + b²</strong> và c &gt; a."
  }
 ]
]);
function release1132HistoricalText(n,content,previousSha){
 const d=release1132DisplayDelta.get(n);
 if(!d)return content;
 assert.equal(previousSha,d.old,"#1132 must extend exact historical B"+n+" source");
 assert.equal(gitBlobAntiRepeat(content),d.updated,"#1132 exact successor B"+n);
 assert.equal(content.split(d.after).length,2,"#1132 exactly one corrected fragment B"+n);
 const prior=content.replace(d.after,d.before);
 assert.equal(gitBlobAntiRepeat(prior),d.old,"#1132 only approved reversible display fragment B"+n);
 return prior;
}
function release1132Candidate(n,previousSha){
 const d=release1132DisplayDelta.get(n);
 if(!d)return previousSha;
 release1132HistoricalText(n,fs.readFileSync(path.join(root,g10PublicKnowledgePath(n)),"utf8"),previousSha);
 return d.updated;
}

function ownerAntiRepeatCandidate(name,immutableCurrent){
 const n=Number(String(name).replace(/^B/,""));
 if(n<19||n>26)return immutableCurrent;
 const receiptFile=path.join(root,antiRepeatReceipt);
 if(!fs.existsSync(receiptFile))return immutableCurrent;
 const r=fs.readFileSync(receiptFile,"utf8");
 assert(r.includes("G10-B19-B26-ONE-SOURCE-SEMANTIC-Q18-20261121")&&
  r.includes("Q18_OWNER_SELF_VERIFIED_ENRICHMENT")&&r.includes("SINGLE_ANTI_REPEAT_LEDGER"),
  "B19–B26 receipt must link to the one existing #795 ledger");
 const rows=r.split("\n").filter(x=>x.startsWith("| B"+n+" | "));
 assert.equal(rows.length,1,"Exactly one B"+n+" source transition row");
 const tick=String.fromCharCode(96),pattern=new RegExp(tick+"([a-f0-9]{40})"+tick,"g");
 const shas=[...rows[0].matchAll(pattern)].map(x=>x[1]);
 assert.equal(shas.length,2,"B"+n+" source row must carry old/new SHA");
 assert.equal(shas[0],immutableCurrent,"B"+n+" successor must extend historical Q18 receipt");
 assert.notEqual(shas[0],shas[1],"B"+n+" source must actually change");
 assert(rows[0].includes(n===26?"DELTA_C_ACADEMIC_MATERIAL":"DELTA_A_UI_METADATA"),
  "B"+n+" correction class must match receipt");
 const content=release1132HistoricalText(n,fs.readFileSync(path.join(root,g10PublicKnowledgePath(n)),"utf8"),shas[1]);
 assert.equal(gitBlobAntiRepeat(content),shas[1],
  "B"+n+" corrected source must match signed exact Git blob");
 const match=g10OneSourceCitation(n,content);
 if(n<=25){
  // Prove that ONLY duplicated source footer changed; not one math/ID byte.
  const reconstructed=content.replace(match[0],
   oldGenericFootnote+"\n\n<small>"+match[1]+(n<=21?" ":"")+"</small>");
  assert.equal(gitBlobAntiRepeat(reconstructed),shas[0],
   "B"+n+" DELTA_A must ONLY deduplicate its source note");
 }else{
  const tab=content.split('=== "Kiến thức SGK"')[1]?.split('=== "Ví dụ"')[0];
  assert(tab,"B26 missing canonical SGK knowledge tab");
  const concept=(tab.match(/<div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card"/g)||[]).length;
  const rules=(tab.match(/<div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card"/g)||[]).length;
  assert.equal(concept,3,"B26 event/complement/classical definitions must be 3 concept cards");
  assert.equal(rules,2,"B26 probability properties and small-probability principle must be 2 rule cards");
  for(const token of ["Định nghĩa — Biến cố.","Định nghĩa — Biến cố đối.",
   "Định nghĩa cổ điển của xác suất.","Tính chất cơ bản của xác suất",
   "Nguyên lí xác suất bé (SGK).","**Vận dụng — Ước lượng số trẻ mới sinh",
   "2.1. Biến cố (SGK mục 1, tr. 77–79)",
   "2.2. Định nghĩa cổ điển của xác suất (SGK mục 2, tr. 79–81)"])
   assert(tab.includes(token),"B26 SGK semantic content missing: "+token);
  assert(!tab.includes('<strong>Vận dụng ý nghĩa thực tế.</strong>')&&
   !content.includes("Mỗi ví dụ có **Đề bài")&&
   !content.includes("**Phạm vi bài:**"),
   "B26 must not box numeric applications or narrate visible lesson structure");
  assert.equal((content.match(/class="thpt-g10-example-solution"/g)||[]).length,6,
   "B26 must retain six solved examples");
 }
 return shas[1];
}

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

function chviKiemLoiCandidate(name,immutablePublished){
 const file=path.join(root,"prototypes/thpt/ux795/G10_CHVI_B15_B18_KIEM_LOI_PLACEMENT_Q18_R01_20261120.md");
 if(!fs.existsSync(file))return immutablePublished;
 const receipt=fs.readFileSync(file,"utf8");
 const lines=receipt.split("\n").filter(x=>x.startsWith("| "+name+" | "));
 assert.equal(lines.length,1,"ChVI Kiểm lỗi receipt "+name+" missing/duplicate");
 const matches=[...lines[0].matchAll(/`([a-f0-9]{40})`/g)].map(x=>x[1]);
 assert.equal(matches.length,2,"ChVI Kiểm lỗi receipt must carry old and new Git SHA");
 assert.equal(matches[0],immutablePublished,name+" Kiểm lỗi must extend immutable published source SHA");
 assert.notEqual(matches[0],matches[1],name+" Kiểm lỗi must change real source");
 assert(receipt.includes("DELTA_C_ACADEMIC_MATERIAL")&&receipt.includes("OWNER_P2")&&
  receipt.includes("G10-CHVI-B15-B18-KIEM-LOI-PLACEMENT-Q18-R01-20261120"),
  "ChVI Kiểm lỗi pending reviewer evidence missing");
 return matches[1];
}
function currentOneCanonicalAfterKiểmLỗi(name,priorPublicSha,priorManuscriptSha){
 const receiptPath=path.join(root,
  "prototypes/thpt/ux795/G10_CHIV_CHV_B07_B14_KIEM_LOI_PLACEMENT_Q18_R01_20261120.md");
 assert(fs.existsSync(receiptPath),"Kiểm lỗi requires a real Q18 source receipt");
 const txt=fs.readFileSync(receiptPath,"utf8");
 const getRow=prefix=>{
  const lines=txt.split("\n").filter(line=>line.startsWith("| "+prefix+" | "));
  assert.equal(lines.length,1,"Exactly one current canonical receipt row "+prefix);
  const hashes=[...lines[0].matchAll(/`([a-f0-9]{40})`/g)].map(x=>x[1]);
  assert.equal(hashes.length,2,prefix+" requires prior+new SHA");
  return hashes;
 };
 let [priorSource,currentSource]=getRow(name==="B09"?"B9":name);
 let [priorMaster,currentMaster]=getRow("CANONICAL_"+name);
 assert.equal(priorSource,priorPublicSha,name+" Q18 chain must start from prior published source SHA");
 assert.equal(priorMaster,priorManuscriptSha,name+" Q18 chain must start from prior signed manuscript SHA");
 assert.notEqual(priorSource,currentSource,name+" requires a genuinely changed learner source");
 assert.notEqual(priorMaster,currentMaster,name+" requires a genuinely changed single canonical manuscript");
 if(name==="B09"){
  const fileR02=path.join(root,"prototypes/thpt/ux795/G10_CHIV_B09_GENERAL_VECTOR_ERROR_TAB4_Q18_R02_20261120.md");
  if(fs.existsSync(fileR02)){
   const r02=fs.readFileSync(fileR02,"utf8");
   const field=k=>r02.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(field("R02_PREVIOUS_SOURCE_BLOB"),currentSource,
    "B09 tab4 placement must extend immutable R01 source SHA");
   assert.equal(field("R02_PREVIOUS_CANONICAL_BLOB"),currentMaster,
    "B09 tab4 placement must extend same one canonical R01 manuscript SHA");
   currentSource=field("R02_CORRECTED_SOURCE_BLOB");
   currentMaster=field("R02_CORRECTED_CANONICAL_BLOB");
   assert(/^[a-f0-9]{40}$/.test(currentSource)&&/^[a-f0-9]{40}$/.test(currentMaster),
    "B09 R02 candidate SHA malformed");
   for(const marker of ["G10-CHIV-B09-GENERAL-VECTOR-ERROR-TAB4-Q18-R02-20261120",
    "DELTA_A_UI","Q18_OWNER_SELF_VERIFIED_ENRICHMENT","OWNER_P2_PENDING"]){
    assert(r02.includes(marker),"B09 R02 receipt lacks "+marker);
   }
  }
 }
 const number=Number(name.slice(1)),roman=number<=11?"iv":"v";
 const lessonPath=path.join(root,"docs/thpt-preview/sgk/chuong-"+roman+"/bai-"+number+".md");
 const manuscriptPath=path.join(root,"prototypes/thpt/content-drafts/THPT_G10_CH"+
  (number<=11?"IV":"V")+"_B"+String(number).padStart(2,"0")+"_CANONICAL.md");
 const bytes=fs.readFileSync(lessonPath),full=fs.readFileSync(manuscriptPath);
 const gitblob=b=>require("node:crypto").createHash("sha1")
  .update(Buffer.from("blob "+b.length+String.fromCharCode(0))).update(b).digest("hex");
 assert.equal(gitblob(bytes),currentSource,name+" current public Knowledge must exactly match R01 receipt");
 assert.equal(gitblob(full),currentMaster,name+" ONE current canonical manuscript must exactly match R01 receipt");
 const src=bytes.toString("utf8"),master=full.toString("utf8");
 const b="<!-- BEGIN_"+name+"_KNOWLEDGE_MARKDOWN -->\n";
 const e="\n<!-- END_"+name+"_KNOWLEDGE_MARKDOWN -->";
 assert.equal(master.split(b).length,2,name+" exactly one canonical Knowledge start");
 assert.equal(master.split(e).length,2,name+" exactly one canonical Knowledge end");
 const section=master.split(b)[1].split(e)[0];
 assert.equal(section,src,
  name+" derived public Knowledge must reflect the SAME one canonical manuscript");
 assert(txt.includes("CANONICAL_PARITY_CONTRACT")&&txt.includes("DELTA_C_ACADEMIC_MATERIAL")&&
  txt.includes("AUTHORING_REVIEW_HOLD"),"One-canonical Q18 receipt may not self-issue PED PASS");
 return {source:currentSource,canonical:currentMaster};
}
function expectedG10KnowledgeBlobHistorical(lesson,legacy){
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

 if(name==="B23"){
  // Owner-approved B23 single canonical source enrichment (20/11/2026).
  // Extend the immutable 27-row Q18 ledger through one signed delta receipt;
  // never silently relax the current-site baseline or trust an unchecked hash.
  const receiptPath="prototypes/thpt/ux795/G10_CHVIII_B23_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261120.md";
  const receipt=fs.readFileSync(path.join(root,receiptPath),"utf8");
  const field=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field("BEFORE_BLOB"),blobs[1],
   "B23 Q18 must extend exact immutable published S1 source");
  assert(receipt.includes("G10-B23-ADDITION")&&receipt.includes("G10-B23-CASE_SPLIT")&&
   receipt.includes("Q18_OWNER_SELF_VERIFIED_ENRICHMENT")&&
   receipt.includes("DELTA_C_ACADEMIC_MATERIAL")&&
   receipt.includes("OWNER_P2_PENDING")&&receipt.includes("P0=0")&&receipt.includes("P1=0"),
   "B23 source receipt must identify full four-outcome delta and no false owner P2");
  const r01=field("CANDIDATE_BLOB");
  assert(/^[a-f0-9]{40}$/.test(r01||"")&&r01!==blobs[1],
   "B23 R01 source must differ from immutable S1 ledger");
  const r02file=path.join(root,"prototypes/thpt/ux795/G10_CHVIII_B23_OWNER_P2_UX_CORRECTION_Q18_R02_20261120.md");
  let current=r01;
  if(fs.existsSync(r02file)){
   const r02=fs.readFileSync(r02file,"utf8");
   const get=k=>r02.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(get("R02_PREVIOUS_SOURCE_BLOB"),r01,
    "B23 R02 must extend immutable P1-published R01, never rewrite R01");
   current=get("R02_CORRECTED_SOURCE_BLOB");
   assert(/^[a-f0-9]{40}$/.test(current||"")&&current!==r01,
    "B23 owner P2 correction must identify a distinct exact R02 Git blob");
   for(const marker of ["G10-CHVIII-B23-G0G2-Q18","OWNER_P2_FAIL_RECEIVED",
    "DELTA_A_UI","DELTA_C_ACADEMIC_MATERIAL","UX-P2-01","UX-P2-06"]){
    assert(r02.includes(marker),"B23 R02 source-lock/owner defect ledger missing "+marker);
   }
  }
  const r03file=path.join(root,"prototypes/thpt/ux795/G10_CHVIII_B23_OWNER_P2_GOLDEN_ROUTE_Q18_R03_20261120.md");
  if(fs.existsSync(r03file)){
   assert(fs.existsSync(r02file),"B23 R03 must extend the existing immutable R02");
   const r03=fs.readFileSync(r03file,"utf8");
   const get=k=>r03.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(get("R03_PREVIOUS_SOURCE_BLOB"),current,
    "B23 R03 source must extend exact R02 published blob");
   current=get("R03_CORRECTED_SOURCE_BLOB");
   assert(/^[a-f0-9]{40}$/.test(current||"")&&current!==get("R03_PREVIOUS_SOURCE_BLOB"),
    "B23 owner P2 R03 requires changed source hash, never silently rewrite R02");
   for(const phrase of ["G10-CHVIII-B23-OWNER-P2-GOLDEN-ROUTE-R03-20261120",
    "B23-GOLDEN-03..07","DELTA_A_UI","OWNER_P2_FAIL_RECEIVED"]){
    assert(r03.includes(phrase),"B23 R03 Q18 chain lacks "+phrase);
   }
  }
  const r04file=path.join(root,"prototypes/thpt/ux795/G10_CHVIII_B23_VAN_DUNG_KIEM_LOI_Q18_R04_20261120.md");
  if(fs.existsSync(r04file)){
   assert(fs.existsSync(r03file),"B23 R04 requires immutable signed R03 ancestor");
   const r04=fs.readFileSync(r04file,"utf8");
   const get=k=>r04.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(get("R04_PREVIOUS_SOURCE_BLOB"),current,"B23 R04 must extend exact R03 Git blob");
   current=get("R04_CORRECTED_SOURCE_BLOB");
   assert(/^[a-f0-9]{40}$/.test(current||"")&&current!==get("R04_PREVIOUS_SOURCE_BLOB"),
    "B23 R04 requires changed canonical source SHA");
   for(const marker of ["G10-CHVIII-B23-VAN-DUNG-KIEM-LOI-R04-20261120",
    "DELTA_C_ACADEMIC_MATERIAL","OWNER_P2","HELP-G10-CHVIII-TRY02"]){
    assert(r04.includes(marker),"B23 R04 affected-scope receipt missing "+marker);
   }
  }
  const lesson=fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-viii/bai-23.md"));
  const gitBlob=require("node:crypto").createHash("sha1").update(Buffer.from("blob "+lesson.length+"\0")).update(lesson).digest("hex");
  assert.equal(gitBlob,ownerAntiRepeatCandidate(name,current),"B23 canonical source must match signed Q18 successor");

  // B23 owner P2 regression source checks apply only when a signed R02 exists.
  // The actual computed-style and click-to-open behavior were independently
  // proven on this exact B23 source in scoped Chromium run #44707796075.
  if(fs.existsSync(r02file)&&!fs.existsSync(r03file)){
   const x=lesson.toString("utf8");
   const count=re=>[...x.matchAll(re)].length;
   assert.equal(count(/^\s+\?\?\? question "Đối chiếu"$/gm),4,
    "B23 must retain four voluntary source-locked Golden disclosures");
   assert(x.includes('details.question>summary::before{display:none!important;')&&
    x.includes('background:#eaf1fc!important'),
    "B23 blue source-local Đối chiếu skin must hide misleading question-mark icon");
   assert.equal(count(/thpt-r4-knowledge-conclusion thpt-r4-concept-card/g),2,
    "B23 must keep two green concept cards");
   assert.equal(count(/<div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card"/g),2,
    "B23 must box formal addition and multiplication rules, not conditions");
   assert.equal(count(/<p class="b23-condition">/g),3,
    "B23 conditions must remain three readable unboxed paragraphs");
   assert.equal(count(/<div class="thpt-g10-example-solution"/g),3,
    "B23 worked solutions must have 3 genuine card containers");
   assert(x.includes('.thpt-g10-example-solution{display:block;')&&
    x.includes('border-left:4px solid #4879c2'),
    "B23 Lời giải boxes need actual scoped border/background CSS");
   assert.equal(count(/G10_B23_ADD_MULTIPLY_CHOICES_R02\.svg/g),2,
    "B23 canonical figure must appear in both Discovery and SGK tabs");
   assert(x.includes('**Cách đọc hình:** Ở khung bên trái')&&
    !/hình canonical dùng chung|Cách đọc hình ở tab Kiến thức SGK|Ví dụ đọc nhánh/.test(x),
    "B23 figure reading must address learners, and examples belong in Example tab");
   const tipTitles=[...x.matchAll(/^\s+\?\?\? tip "([^"]+)"/gm)].map(y=>y[1]);
   assert.equal(tipTitles.length,6,"B23 needs six D6 error disclosure titles");
   assert.equal(new Set(tipTitles).size,6,"B23 cannot repeat generic D6 labels");
   assert(tipTitles.every((v,i)=>v.startsWith("4."+(i+1)+".")&&v.length>32),
    "B23 D6 titles must identify each distinct misconception");
   console.log("PASS G10 B23 OWNER_P2 R02 source-regression: deliberate 4 Đối chiếu, 2 concept + 2 rule boxes + 3 conditions, 3 solution boxes, 2 SVG placements, 6 unique D6 labels");
  }

  return current;
 }
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
  const currentB11=currentOneCanonicalAfterKiểmLỗi("B11",g("B11_SOURCE_CURRENT_BLOB"),g("B11_CANONICAL_CURRENT_BLOB"));
  assert.equal(calc(manuscript),currentB11.canonical,
    "B11 current ONE canonical manuscript must extend frozen P2 Delta A SHA");
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
  const b14Marker="/* G10 ChV B14 · scoped X-C RELEASE Golden";
  const b14At=cssFull.indexOf(b14Marker);
  const b14Receipt=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHV_B14_Q18_GOLDEN_ENRICHMENT_DELTA_R01_20261119.md"),"utf8");
  const b14f=k=>b14Receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert(b14At>0&&cssFull.indexOf(b14Marker,b14At+1)<0,"B14 only one scoped CSS appendix");
  assert.equal(calc(Buffer.from(cssFull.slice(0,b14At-1))),f("CANDIDATE_GOLDEN_CSS_BLOB"),
   "B13 owner-P2 style stays byte-identical prefix after B14");
  assert.equal(b14f("G10_B01_B13_FROZEN_CSS_BLOB"),f("CANDIDATE_GOLDEN_CSS_BLOB"),
   "B14 signed previous Golden CSS is B13 published baseline");
  const b15Marker="/* G10 ChVI B15 · exact TRY01 canonical only";
  const atB15=cssFull.indexOf(b15Marker);
  const q15=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHVI_B15_OWNER_Q18_KNOWLEDGE_ENRICHMENT_20261119.md"),"utf8");
  const v15=k=>q15.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert(atB15>0&&cssFull.indexOf(b15Marker,atB15+1)<0,
   "B15 new semantic CSS append must exist once");
  assert.equal(calc(Buffer.from(cssFull.slice(0,atB15-1))),b14f("CANDIDATE_GOLDEN_CSS_BLOB"),
   "B14 fully published CSS must remain exact frozen prefix before B15");
  assert.equal(v15("ORIGINAL_ACCEPTED_GOLDEN_CSS_BLOB"),b14f("CANDIDATE_GOLDEN_CSS_BLOB"),
   "B15 proposed scoped CSS must extend B14 baseline");
  const b16Mark="/* G10 ChVI B16 · scoped Golden only for canonical TRY06";
  const atB16=cssFull.indexOf(b16Mark);
  const b15Prefix=atB16>atB15?Buffer.from(cssFull.slice(0,atB16-1)):css;
  assert.equal(calc(b15Prefix),v15("CANDIDATE_SCOPED_GOLDEN_CSS_BLOB"),
   "B15 approved CSS ancestor matches immutable signed Q18");
  if(atB16>atB15){
   assert(cssFull.indexOf(b16Mark,atB16+1)<0,"B16 CSS append must exist once");
   const receipt16=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHVI_B16_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261119.md"),"utf8");
   const f16=k=>receipt16.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(f16("PREVIOUS_OWNER_P2_GOLDEN_CSS_BLOB"),v15("CANDIDATE_SCOPED_GOLDEN_CSS_BLOB"),
    "B16 CSS must extend B15 approved prefix");
   assert.equal(calc(css),f16("CANDIDATE_SCOPED_GOLDEN_CSS_BLOB"),
    "B16 current CSS must match signed scoped Q18 candidate");
  }
  const sourceText=fs.readFileSync(path.join(root,
   "docs/thpt-preview/sgk/chuong-iv/bai-11.md"),"utf8");
   assert.equal(calc(Buffer.from(sourceText)),currentB11.source,
    "B11 current public Knowledge must equal one updated canonical, old P2 receipt unchanged");
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
  const currentB10=currentOneCanonicalAfterKiểmLỗi("B10",nextSource,nextMaster);
   assert.equal(calc(canonical),currentB10.canonical,"B10 current ONE manuscript must extend frozen R02 P2 receipt");
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
    const currentB09=currentOneCanonicalAfterKiểmLỗi("B09",final,master);
     assert.equal(blob(current),currentB09.canonical,"B09 ONE manuscript must match corrected Knowledge and source-lock");
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
   assert(t.includes("Q18_OWNER_SELF_VERIFIED_ENRICHMENT_PASS")&&
    t.includes("S1_SCOPE_MATH_CONVENTION_VERIFIED")&&
    t.includes("SBT_REFERENCE_GAP_DOCUMENTED")&&
    t.includes("PDF_INDEX_NOT_VERIFIED_NON_BLOCKING")&&
    t.includes("NOT_MERGED"),"B13 signed self-QA must state source scope/math PASS and unverified PDF-index provenance without asserting reviewer PASS");
   const ui=fs.readFileSync(path.join(root,"prototypes/thpt/ux795/G10_B12_B13_DUPLICATE_DE_HEADING_DELTA_A_R01_20261119.md"),"utf8");
   const u=k=>ui.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(u("B13_PREVIOUS_SOURCE_BLOB"),next,
    "B13 published Q18 source is immutable predecessor of the UI-only Delta A");
   return {baseline,next:u("B13_CURRENT_SOURCE_BLOB"),css:f("CANDIDATE_GOLDEN_CSS_BLOB"),
    previousCss:f("G10_B01_B12_FROZEN_CSS_BLOB")};
  };
  const currentB14=()=>{
   const t=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHV_B14_Q18_GOLDEN_ENRICHMENT_DELTA_R01_20261119.md"),"utf8");
   const f=k=>t.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   const baseline=f("BASELINE_LESSON_GIT_BLOB"),next=f("CANDIDATE_LESSON_GIT_BLOB");
   const cssBase=f("G10_B01_B13_FROZEN_CSS_BLOB"),cssNext=f("CANDIDATE_GOLDEN_CSS_BLOB");
   assert.equal(baseline,chvEditorialReceiptRows().get("B14").candidate,
    "B14 current Knowledge must derive from historical signed ChV source");
   assert(/^[a-f0-9]{40}$/.test(next||"")&&next!==baseline,
    "B14 current source must be an independently pinned Git blob");
   assert(t.includes("Q18_OWNER_SELF_VERIFIED_ENRICHMENT")&&
    t.includes("S1_SCOPE_MATH_CONVENTION_VERIFIED")&&
    t.includes("SBT_REFERENCE_GAP_DOCUMENTED")&&
    t.includes("NOT_MERGED"),"B14 scoped math/PED self-QA and release gate missing");
   const css=fs.readFileSync(path.join(root,"docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css"));
   const full=css.toString("utf8"),mark="/* G10 ChV B14 · scoped X-C RELEASE Golden";
   const at=full.indexOf(mark);
   assert(at>0&&full.indexOf(mark,at+1)<0,"B14 one and only one scoped CSS append");
   const blob=b=>{const c=require("node:crypto");return c.createHash("sha1")
    .update(Buffer.from("blob "+b.length+String.fromCharCode(0))).update(b).digest("hex");};
   assert.equal(blob(Buffer.from(full.slice(0,at-1))),cssBase,
    "B01–B13 owner-P2 CSS prefix must remain byte-exact");
   const b15Marker="/* G10 ChVI B15 · exact TRY01 canonical only";
   const atB15=full.indexOf(b15Marker);
   assert(atB15>0&&full.indexOf(b15Marker,atB15+1)<0,
    "B15 scoped Golden appendix must exist once");
   assert.equal(blob(Buffer.from(full.slice(0,atB15-1))),cssNext,
    "B14 owner-P2 CSS must remain exact ancestor before B15");
   const b15=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHVI_B15_OWNER_Q18_KNOWLEDGE_ENRICHMENT_20261119.md"),"utf8");
   const b15f=k=>b15.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(b15f("ORIGINAL_ACCEPTED_GOLDEN_CSS_BLOB"),cssNext,
    "B15 receipt must chain to B14 owner-P2 CSS");
   const b16Mark="/* G10 ChVI B16 · scoped Golden only for canonical TRY06";
   const at16=full.indexOf(b16Mark);
   const b15End=at16>atB15?Buffer.from(full.slice(0,at16-1)):css;
   assert.equal(blob(b15End),b15f("CANDIDATE_SCOPED_GOLDEN_CSS_BLOB"),
    "B15 scoped CSS ancestor must match signed Q18 candidate");
   if(at16>atB15){
    const r16=fs.readFileSync(path.join(root,
     "prototypes/thpt/ux795/G10_CHVI_B16_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261119.md"),"utf8");
    const f16=k=>r16.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
    assert.equal(f16("PREVIOUS_OWNER_P2_GOLDEN_CSS_BLOB"),b15f("CANDIDATE_SCOPED_GOLDEN_CSS_BLOB"),
     "B16 must extend B15 approved prefix");
    assert.equal(blob(css),f16("CANDIDATE_SCOPED_GOLDEN_CSS_BLOB"),
     "B16 CSS exact Q18 scoped candidate SHA");
   }
   const labelReceipt=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHV_B14_EM_VAN_DUNG_LABEL_DELTA_A_R01_20261119.md"),"utf8");
   const labelField=k=>labelReceipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(labelField("B14_PREVIOUS_SOURCE_BLOB"),next,
    "B14 Delta A labels must derive from immutable §X-C candidate Git blob");
   const current=labelField("B14_CURRENT_SOURCE_BLOB");
   assert(/^[a-f0-9]{40}$/.test(current||"")&&current!==next,
    "B14 current owner-label correction must be exact SHA-locked");
   assert(labelReceipt.includes("DELTA_A_UI")&&
    labelReceipt.includes("OWNER_P2 vẫn PENDING"),
    "B14 only copy change; user P2 remains pending");
   return {baseline,next:current,cssBase,cssNext};
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
   const ui=fs.readFileSync(path.join(root,"prototypes/thpt/ux795/G10_B12_B13_DUPLICATE_DE_HEADING_DELTA_A_R01_20261119.md"),"utf8");
   const u=k=>ui.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(u("B12_PREVIOUS_SOURCE_BLOB"),g("B12_SOURCE_CURRENT_BLOB"),
    "B12 prior signed published source must remain predecessor of UI-only Delta A");
   assert.equal(u("B12_PREVIOUS_CANONICAL_BLOB"),g("B12_CANONICAL_CURRENT_BLOB"),
    "B12 prior signed manuscript must remain predecessor of UI-only Delta A");
   assert.equal(blob(fs.readFileSync(path.join(root,
    "prototypes/thpt/content-drafts/THPT_G10_CHV_B12_CANONICAL.md"))),
    currentOneCanonicalAfterKiểmLỗi("B12",u("B12_CURRENT_SOURCE_BLOB"),u("B12_CURRENT_CANONICAL_BLOB")).canonical,
    "B12 ONE canonical must match signed successor after historical Delta A");
   assert.equal(blob(fs.readFileSync(path.join(root,
    "docs/thpt-preview/sgk/chuong-v/bai-12.md"))),currentOneCanonicalAfterKiểmLỗi("B12",u("B12_CURRENT_SOURCE_BLOB"),u("B12_CURRENT_CANONICAL_BLOB")).source,
    "B12 derived public Markdown must match signed successor after historical Delta A");
   for(const [rel,key] of [
    ["docs/assets/javascripts/thpt-chv-b12-reviewed-formative-r02.js","B12_R01_ITEM_BANK_BLOB"],
    ["docs/thpt-preview/sgk/chuong-v/luyen-tap.md","B12_R01_PRACTICE_HUB_BLOB"]]){
     assert.equal(blob(fs.readFileSync(path.join(root,rel))),f(key),
      "B12 single canonical/source and other owner-frozen lesson SHA mismatch "+rel);
   }
   const b13=currentB13();
   assert.equal(b13.baseline,f("FROZEN_B13_SOURCE_BLOB"),
    "B12 frozen B13 ancestor preserved in its original academic source receipt");
   assert.equal(blob(fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-v/bai-13.md"))),candidateG10KnowledgeBlob("B13"),
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
   const b14=currentB14();
   assert.equal(b14.baseline,f("FROZEN_B14_SOURCE_BLOB"),"B12 historical B14 baseline preserved");
   assert.equal(b14.cssBase,b13.css,"B14 CSS append must start from owner-P2 B13 CSS");
   assert.equal(blob(fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-v/bai-14.md"))),candidateG10KnowledgeBlob("B14"),
    "B14 current Knowledge must match scoped Q18 X-C receipt");
   assert.equal(blob(Buffer.from(full.slice(0,full.indexOf("/* G10 ChV B14 · scoped X-C RELEASE Golden")-1))),
    b13.css,"B13 CSS snapshot unchanged before B14 appendix");
   return u("B12_CURRENT_SOURCE_BLOB");
  }
  if(name==="B13")return currentB13().next;
  if(name==="B14")return currentB14().next;
  if(chvii){
   assert.equal(chvii.helps,({B19:9,B20:7,B21:7,B22:10})[name],name+" exact total HELP count");
   assert.equal(chvii.examples,({B19:2,B20:2,B21:2,B22:3})[name],name+" anti-ChVI Golden worked-example count");
  }
  if(name==="B19"){
   assert(chvii&&chvii.candidate==="8fc4efaafcf2b896430f8cfa0ab18d7118fefc9c",
    "B19 R01 must extend exact immutable 13/11 ChVII S1 source");
   const r19=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHVII_B19_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261120.md"),"utf8");
   const field=k=>r19.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(field("PREVIOUS_B19_SOURCE_BLOB"),chvii.candidate,
    "B19 owner R01 must preserve previously published source exact SHA");
   let current=field("CANDIDATE_B19_SOURCE_BLOB");
   assert(/^[a-f0-9]{40}$/.test(current||"")&&current!==chvii.candidate,
    "B19 R01 candidate must be distinct valid Git blob");
   for(const token of ["Q18_OWNER_SELF_VERIFIED_ENRICHMENT","DELTA_C_ACADEMIC_MATERIAL",
    "G10-B19-NORMAL_DIRECTION","G10-B19-LINEAR_MODEL","OWNER_P2_PENDING","P0=0","P1=0"]){
    assert(r19.includes(token),"B19 Q18 owner self-QA receipt missing "+token);
   }
   const ri=path.join(root,"prototypes/thpt/ux795/G10_CHVII_B19_VAN_DUNG_KIEM_LOI_Q18_R02_20261120.md");
   if(fs.existsSync(ri)){
    const r=fs.readFileSync(ri,"utf8");
    const get=k=>r.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
    assert.equal(get("R02_PREVIOUS_SOURCE_BLOB"),current,"B19 Kiểm lỗi receipt must extend exactly published SHA");
    current=get("R02_CORRECTED_SOURCE_BLOB");
    assert(/^[0-9a-f]{40}$/.test(current||""),"B19 Kiểm lỗi new source SHA malformed");
    assert(r.includes("G10-CHVII-B19-VAN-DUNG-KIEM-LOI-R02-20261120")&&r.includes("OWNER_P2"),
     "B19 corrective receipt must preserve owner metadata");
   }
   return current;
  }
  if(name==="B20"){
   assert(chvii&&chvii.candidate==="510f79eb61930e9b0d7795d4b0288fd29ccb0675",
    "B20 owner Q18 must extend exact immutable 13/11 signed ChVII source");
   const r20=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHVII_B20_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261120.md"),"utf8");
   const field=k=>r20.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(field("PREVIOUS_B20_SOURCE_BLOB"),chvii.candidate,
    "B20 current release must preserve original published source history");
   let current=field("CANDIDATE_B20_SOURCE_BLOB");
   assert(/^[a-f0-9]{40}$/.test(current||"")&&current!==chvii.candidate,
    "B20 source must be exact signed new candidate");
   for(const token of ["Q18_OWNER_SELF_VERIFIED_ENRICHMENT","DELTA_C_ACADEMIC_MATERIAL",
    "G10-B20-RELATIVE_POSITION","G10-B20-ANGLE","OWNER_P2_PENDING","P0=0","P1=0"]){
    assert(r20.includes(token),"B20 owner Q18 missing: "+token);
   }
   const ri=path.join(root,"prototypes/thpt/ux795/G10_CHVII_B20_VAN_DUNG_KIEM_LOI_Q18_R02_20261120.md");
   if(fs.existsSync(ri)){
    const r=fs.readFileSync(ri,"utf8");
    const get=k=>r.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
    assert.equal(get("R02_PREVIOUS_SOURCE_BLOB"),current,"B20 Kiểm lỗi receipt must extend exactly published SHA");
    current=get("R02_CORRECTED_SOURCE_BLOB");
    assert(/^[0-9a-f]{40}$/.test(current||""),"B20 Kiểm lỗi new source SHA malformed");
    assert(r.includes("G10-CHVII-B20-VAN-DUNG-KIEM-LOI-R02-20261120")&&r.includes("OWNER_P2"),
     "B20 corrective receipt must preserve owner metadata");
   }
   return current;
  }
  if(name==="B21"){
   assert(chvii&&chvii.candidate==="0af5e4d9e2348575f2be7de57f81acd00098bc55",
    "B21 owner Q18 must extend exact immutable 13/11 signed ChVII source");
   const r21=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHVII_B21_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261120.md"),"utf8");
   const field=k=>r21.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(field("PREVIOUS_B21_SOURCE_BLOB"),chvii.candidate,
    "B21 new source must extend exact old S1 source Git blob");
   const current=field("CANDIDATE_B21_SOURCE_BLOB");
   assert(/^[0-9a-f]{40}$/.test(current||"")&&current!==chvii.candidate,
    "B21 new source requires distinct valid SHA");
   for(const token of ["Q18_OWNER_SELF_VERIFIED_ENRICHMENT","DELTA_C_ACADEMIC_MATERIAL",
    "G10-B21-CIRCLE_STANDARD","G10-B21-LINE_CIRCLE_POSITION","OWNER_P2_PENDING","P0=0","P1=0"]){
    assert(r21.includes(token),"B21 Q18 signed owner source receipt missing "+token);
   }
   const pathR02=path.join(root,
    "prototypes/thpt/ux795/G10_CHVII_B21_DISPLAY_MATH_RENDER_R02_20261120.md");
   if(fs.existsSync(pathR02)){
    const r02=fs.readFileSync(pathR02,"utf8");
    const f02=k=>r02.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
    assert.equal(f02("PREVIOUS_B21_SOURCE_BLOB"),current,
     "B21 render R02 must extend exact signed and published R01");
    const next=f02("CANDIDATE_B21_SOURCE_BLOB");
    assert(/^[0-9a-f]{40}$/.test(next||"")&&next!==current,
     "B21 render R02 candidate must be exact distinct Git blob");
    for(const token of ["DELTA_A_UI","DELTA_B_SOURCE_EQUIVALENT",
     "B21-G3-RAW-HTML-DISPLAY-MATH-20261120","OWNER_P2_PENDING","P0=0","P1=0"])
     assert(r02.includes(token),"B21 render R02 missing signed condition "+token);
    const ri=path.join(root,"prototypes/thpt/ux795/G10_CHVII_B21_VAN_DUNG_KIEM_LOI_Q18_R03_20261120.md");
    if(fs.existsSync(ri)){
     const r=fs.readFileSync(ri,"utf8");
     const get=k=>r.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
     assert.equal(get("R03_PREVIOUS_SOURCE_BLOB"),next,"B21 Kiểm lỗi R03 must extend published display R02 SHA");
     const candidate=get("R03_CORRECTED_SOURCE_BLOB");
     assert(/^[0-9a-f]{40}$/.test(candidate||""),"B21 Kiểm lỗi R03 malformed source SHA");
     assert(r.includes("G10-CHVII-B21-VAN-DUNG-KIEM-LOI-R03-20261120")&&r.includes("OWNER_P2"),
      "B21 corrective R03 owner metadata missing");
     return candidate;
    }
    return next;
   }
   return current;
  }
  if(name==="B22"){
   assert(chvii&&chvii.candidate==="34288f6ed32a0bf100edbf2ef495a4d9cec3ad2a",
    "B22 Q18 must extend exact immutable 13/11 signed ChVII source");
   const r22=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHVII_B22_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261120.md"),"utf8");
   const field=k=>r22.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(field("PREVIOUS_B22_SOURCE_BLOB"),chvii.candidate,
    "B22 new source must extend exact 13/11 S1 source Git blob");
   let current=field("CANDIDATE_B22_SOURCE_BLOB");
   assert(/^[0-9a-f]{40}$/.test(current||"")&&current!==chvii.candidate,
    "B22 author Q18 requires exact new distinct source blob");
   for(const token of ["Q18_OWNER_SELF_VERIFIED_ENRICHMENT","DELTA_C_ACADEMIC_MATERIAL",
    "G10-B22-ELLIPSE_PARAMETERS","G10-B22-HYPERBOLA_PARAMETERS",
    "G10-B22-PARABOLA_FOCUS","OWNER_P2_PENDING","P0=0","P1=0"]){
     assert(r22.includes(token),"B22 source Q18 receipt missing "+token);
   }
   const r02path=path.join(root,"prototypes/thpt/ux795/G10_CHVII_B22_VAN_DUNG_KIEM_LOI_Q18_R02_20261120.md");
   if(fs.existsSync(r02path)){
    const r02=fs.readFileSync(r02path,"utf8");
    const get=k=>r02.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
    assert.equal(get("R02_PREVIOUS_SOURCE_BLOB"),current,"B22 Kiểm lỗi R02 must extend owner-approved R01 exact SHA");
    current=get("R02_CORRECTED_SOURCE_BLOB");
    assert(/^[0-9a-f]{40}$/.test(current||""),"B22 R02 new canonical SHA malformed");
    for(const required of ["G10-CHVII-B22-VAN-DUNG-KIEM-LOI-R02-20261120",
     "DELTA_C_ACADEMIC_MATERIAL","HELP-G10-CHVII-TRY18","OWNER_P2"]){
     assert(r02.includes(required),"B22 Kiểm lỗi R02 missing Q18 metadata "+required);
    }
   }
   return current;
  }
  const ux=chviExampleUxReceiptRows().get(name);
  if(name==="B15"){
   assert(ux&&ux.baseline===row.candidate,
    "B15 new Q18 follows exact old editorial + UX frozen lineage");
   const receipt=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHVI_B15_OWNER_Q18_KNOWLEDGE_ENRICHMENT_20261119.md"),"utf8");
   const f=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(f("BASELINE_PUBLISHED_B15_BLOB"),ux.candidate,
    "B15 canonical source must extend exactly published B15 UX source");
   assert.equal(f("ORIGINAL_ACCEPTED_GOLDEN_CSS_BLOB"),
    "bda67d4ed6368179c5a8c9e0a368e149304ab71c",
    "B15 CSS predecessor remains approved B14 snapshot");
   const next=f("CANDIDATE_B15_SOURCE_BLOB");
   assert(/^[a-f0-9]{40}$/.test(next||"")&&next!==ux.candidate,
    "B15 Q18 candidate requires distinct real Git source hash");
   for(const marker of ["Q18_OWNER_SELF_VERIFIED_ENRICHMENT",
    "DELTA_C_ACADEMIC_MATERIAL","B15_OUT_01","B15_OUT_05",
    "P0=0 P1=0","TRY03","SOURCE_REFERENCE"]){
    assert(receipt.includes(marker),"B15 actual G0/G1/G2 Q18 evidence missing "+marker);
   }
   // Immutable B15 R01 source remains valid for its exact former snapshot.
   // The owner-authorized P2 two-hunk Delta A/B has a separate SHA receipt.
   const p2=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHVI_B15_P2_EDITORIAL_NOTE_DELTA_R01_20261119.md"),"utf8");
   const p2f=k=>p2.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(p2f("PREVIOUS_B15_SOURCE_BLOB"),next,
    "B15 P2 copy/UI delta must start from exact previously released B15");
   assert.equal(p2f("HISTORICAL_OWNER_Q18_RECEIPT_BLOB"),require("node:crypto").createHash("sha1").update(Buffer.from("blob "+Buffer.byteLength(receipt)+String.fromCharCode(0))).update(Buffer.from(receipt)).digest("hex"),
    "B15 historical signed Q18 receipt must stay immutable");
   assert.equal(p2f("EXISTING_GOLDEN_CSS_BLOB"),
    "4af85dd38d02ed55b29daa6713bfbc892f0d7078",
    "B15 P2 must not alter approved Golden style");
   const revised=p2f("CANDIDATE_B15_SOURCE_BLOB");
   assert(/^[a-f0-9]{40}$/.test(revised||"")&&revised!==next,
    "B15 P2 must have real distinct source hash and signed delta");
   // Owner screenshot R02: flow and figure display; never rewrite R01/P2 receipts.
   const visual=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHVI_B15_OWNER_P2_READABILITY_FIGURE_R02_20261119.md"),"utf8");
   const vf=k=>visual.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(vf("PREVIOUS_B15_SOURCE_BLOB"),revised,
    "B15 screenshot R02 must extend exactly the published P2 source");
   assert.equal(vf("GOLDEN_STYLESHEET_BLOB"),p2f("EXISTING_GOLDEN_CSS_BLOB"),
    "B15 figure enlargement reuses existing stylesheet, not a new Golden component");
   assert.equal(vf("ORIGINAL_SVG_ASSET_BLOB"),
    "8a3b090af3a1bb73c972c4cb0a3795bbbc7f2f31",
    "B15 mapped SVG geometry/text unchanged");
   const current=vf("CANDIDATE_B15_SOURCE_BLOB");
   assert(/^[a-f0-9]{40}$/.test(current||"")&&current!==revised,
    "B15 R02 must carry a real distinct exact Git source hash");
   return chviKiemLoiCandidate("B15",current);
  }
  if(name==="B16"){
   assert(ux&&chvi&&!chiv&&!chv,"B16 current source must extend exact historical ChVI receipt");
   const r16=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHVI_B16_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261119.md"),"utf8");
   const f16=k=>r16.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(f16("BASELINE_PUBLISHED_B16_SOURCE_BLOB"),ux.candidate,
    "B16 authoring must extend immutable previously published baseline");
   assert.equal(f16("PREVIOUS_OWNER_P2_GOLDEN_CSS_BLOB"),
    "4af85dd38d02ed55b29daa6713bfbc892f0d7078",
    "B16 CSS approved B15 root unchanged");
   const next16=f16("CANDIDATE_B16_SOURCE_BLOB");
   assert(/^[a-f0-9]{40}$/.test(next16||"")&&next16!==ux.candidate,
    "B16 candidate SHA must be a distinct actual source from signed receipt");
   assert(r16.includes("DELTA_C_ACADEMIC_MATERIAL")&&r16.includes("B16_OUT_05"),
    "B16 material revision requires outcome-specific owner source receipt");
   return chviKiemLoiCandidate("B16",next16);
  }
  if(name==="B17"){
   // Current B17 extends the immutable published ChVI example-UX snapshot.
   // One scoped author self-QA receipt, never a retroactive NotebookLM verdict.
   assert(ux&&chvi&&!chiv&&!chv,"B17 requires exact historical ChVI lineage");
   const receipt=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHVI_B17_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261119.md"),"utf8");
   const field=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(field("BASELINE_PUBLISHED_B17_SOURCE_BLOB"),ux.candidate,
    "B17 R01 must extend exact historic published source, preserving old receipt");
   const current=field("CANDIDATE_B17_SOURCE_BLOB");
   assert(/^[0-9a-f]{40}$/.test(current||"")&&current!==ux.candidate,
    "B17 R01 must point to a different SHA-locked canonical learner source");
   for(const token of ["Q18_OWNER_SELF_VERIFIED_ENRICHMENT","DELTA_C_ACADEMIC_MATERIAL",
     "B17_OUT_01","B17_OUT_05","TRY11","TRY15","P0=0","P1=0"]){
    assert(receipt.includes(token),"B17 Q18 owner receipt missing: "+token);
   }
   // Independent R02 display-only fix extends R01 without rewriting
   // the accepted academic source receipt or any assessment identity.
   const r02path=path.join(root,
    "prototypes/thpt/ux795/G10_CHVI_B17_DISPLAY_MATH_SOURCE_EQUIVALENT_R02_20261120.md");
   if(fs.existsSync(r02path)){
    const r02=fs.readFileSync(r02path,"utf8");
    const nextField=k=>r02.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
    assert.equal(nextField("PREVIOUS_B17_SOURCE_BLOB"),current,
     "B17 display MathJax R02 must follow R01 exact already published SHA");
    const next=nextField("CANDIDATE_B17_SOURCE_BLOB");
    assert(/^[a-f0-9]{40}$/.test(next||"")&&next!==current,
     "B17 R02 requires a distinct SHA for actual corrected Markdown source");
    assert(r02.includes("DELTA_B_SOURCE_EQUIVALENT")&&r02.includes("MathJax")&&r02.includes("B17_OUT_01"),
     "B17 R02 format-only and outcome scope evidence required");
    const r03path=path.join(root,
     "prototypes/thpt/ux795/G10_CHVI_B17_OWNER_P2_LEARNER_READABILITY_R03_20261120.md");
    if(fs.existsSync(r03path)){
     const r03=fs.readFileSync(r03path,"utf8");
     const f03=k=>r03.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
     assert.equal(f03("PREVIOUS_B17_SOURCE_BLOB"),next,
      "B17 R03 must extend exactly R02 display-source SHA");
     const final=f03("CANDIDATE_B17_SOURCE_BLOB");
     assert(/^[a-f0-9]{40}$/.test(final||"")&&final!==next,
      "B17 R03 requires a distinct source SHA after pedagogic edits");
     for(const token of ["Q18_OWNER_SELF_VERIFIED_ENRICHMENT",
       "DELTA_C_ACADEMIC_MATERIAL","B17_OUT_01","B17_OUT_05","P0=0","P1=0"])
      assert(r03.includes(token),"B17 R03 source receipt missing "+token);
     return chviKiemLoiCandidate("B17",final);
    }
    return next;
   }
   return current;
  }
  if(name==="B18"){
   // B18 is a one-lesson Golden source enrichment; preserve the original
   // Chapter VI UX receipt and require an exact owner-signed new Git blob.
   assert(ux&&chvi&&!chiv&&!chv,"B18 source must extend exact ChVI UX source");
   const r18=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHVI_B18_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261120.md"),"utf8");
   const f18=k=>r18.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(f18("BASELINE_PUBLISHED_B18_SOURCE_BLOB"),ux.candidate,
    "B18 owner Q18 must preserve published historical UX source");
   const next=f18("CANDIDATE_B18_SOURCE_BLOB");
   assert(/^[a-f0-9]{40}$/.test(next||"")&&next!==ux.candidate,
    "B18 Q18 candidate requires a different exact source blob");
   for(const token of ["Q18_OWNER_SELF_VERIFIED_ENRICHMENT","DELTA_C_ACADEMIC_MATERIAL",
    "B18_OUT_01","B18_OUT_04","TRY16","TRY19","P0=0","P1=0"]){
    assert(r18.includes(token),"B18 owner self-QA receipt missing: "+token);
   }
   const r02path=path.join(root,
    "prototypes/thpt/ux795/G10_CHVI_B18_OWNER_P2_GOLDEN_ERRORS_R02_20261120.md");
   if(fs.existsSync(r02path)){
    const r02=fs.readFileSync(r02path,"utf8");
    const f02=k=>r02.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
    assert.equal(f02("PREVIOUS_B18_SOURCE_BLOB"),next,
     "B18 R02 Golden must extend signed B18 R01 exact published blob");
    const final=f02("CANDIDATE_B18_SOURCE_BLOB");
    assert(/^[a-f0-9]{40}$/.test(final||"")&&final!==next,
     "B18 R02 must point to a distinct exact canonical new source");
    for(const token of ["Q18_OWNER_SELF_VERIFIED_ENRICHMENT",
     "DELTA_C_ACADEMIC_MATERIAL","B18_OUT_01","B18_OUT_04","P0=0","P1=0"])
     assert(r02.includes(token),"B18 R02 signed Q18 missing: "+token);
    const r03path=path.join(root,
     "prototypes/thpt/ux795/G10_CHVI_B18_OWNER_EDITORIAL_POLISH_R03_20261120.md");
    if(fs.existsSync(r03path)){
     const r03=fs.readFileSync(r03path,"utf8");
     const f03=k=>r03.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
     assert.equal(f03("PREVIOUS_B18_SOURCE_BLOB"),final,
      "B18 final editorial R03 must extend exact R02");
     const latest=f03("CANDIDATE_B18_SOURCE_BLOB");
     assert(/^[0-9a-f]{40}$/.test(latest||"")&&latest!==final,
      "B18 R03 must name exact new canonical source");
     for(const token of ["DELTA_B_SOURCE_EQUIVALENT","DELTA_A_UI",
      "Vận dụng","OWNER_B18_P2_PENDING","P0=0","P1=0"])
      assert(r03.includes(token),"B18 source-equivalent R03 receipt missing: "+token);
     return chviKiemLoiCandidate("B18",latest);
    }
    return final;
   }
   return next;
  }
  if(ux){
   assert(chvi&&!chiv&&!chv,name+" UX follow-on restricted to published Chapter VI source");
   assert.equal(ux.baseline,row.candidate,name+" immutable source chain: original ChVI receipt → UX delta");
   assert.notEqual(ux.candidate,ux.baseline,name+" follow-on UX candidate SHA must change");
   assert.equal(ux.examples,({B15:1,B16:4,B17:4,B18:4})[name],name+" explicit Golden example section count");
   return ux.candidate;
  }
  return row.candidate;
 }
 if(name==="B24"){
  const file=path.join(root,"prototypes/thpt/ux795/G10_CHVIII_B24_S1_FIVE_SECTIONS_OWNER_Q18_R01_20261120.md");
  if(fs.existsSync(file)){
   const r=fs.readFileSync(file,"utf8");
   const get=k=>r.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(get("R01_PREVIOUS_SOURCE_BLOB"),blobs[1],"B24 R01 must extend immutable S1 ledger SHA");
   const next=get("R01_CORRECTED_SOURCE_BLOB");
   assert(/^[a-f0-9]{40}$/.test(next)&&next!==blobs[1],"B24 R01 candidate SHA invalid");
   for(const marker of ["G10-CHVIII-B24-S1-FIVE-SECTIONS-G0G2-Q18-R01-20261120",
    "DELTA_C_ACADEMIC_MATERIAL","Q18_OWNER_SELF_VERIFIED_ENRICHMENT","OWNER_P2_PENDING",
    "P0=0 P1=0","THPT-G10-CHVIII-TRY08"])
     assert(r.includes(marker),"B24 owner G0-G2 Q18 source proof missing "+marker);
   let current=next;
   const p02=path.join(root,"prototypes/thpt/ux795/G10_CHVIII_B24_OWNER_P2_GOLDEN_UI_Q18_R02_20261121.md");
   if(fs.existsSync(p02)){
    const r02=fs.readFileSync(p02,"utf8");
    const field=k=>r02.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
    assert.equal(field("R02_PREVIOUS_SOURCE_BLOB"),next,
     "B24 P2 R02 must extend exact published R01 SHA");
    current=field("R02_CORRECTED_SOURCE_BLOB");
    assert(/^[a-f0-9]{40}$/.test(current||"")&&current!==next,
     "B24 R02 candidate source hash malformed");
    for(const phrase of ["G10-CHVIII-B24-OWNER-P2-GOLDEN-UI-R02-20261121",
      "DELTA_A_UI","OWNER_P2_FAIL_RECEIVED","OWNER_P2_RECHECK_PENDING",
      "P2-GOLDEN-24-01","P2-GOLDEN-24-02","P2-GOLDEN-24-03"]){
      assert(r02.includes(phrase),"B24 R02 receipt missing "+phrase);
    }
   }
   const p03=path.join(root,"prototypes/thpt/ux795/G10_CHVIII_B24_GOLDEN_COPY_UI_Q18_R03_20261121.md");
   if(fs.existsSync(p03)){
    const r03=fs.readFileSync(p03,"utf8");
    const field=k=>r03.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
    assert.equal(field("R03_PREVIOUS_SOURCE_BLOB"),current,
     "B24 UI R03 must descend exactly from R02 current source SHA");
    const candidate=field("R03_CORRECTED_SOURCE_BLOB");
    assert(/^[a-f0-9]{40}$/.test(candidate||"")&&candidate!==current,
     "B24 R03 source SHA invalid");
    for(const phrase of ["G10-CHVIII-B24-GOLDEN-COPY-UI-Q18-R03-20261121",
      "DELTA_A_UI","OWNER_P2_RECHECK_PENDING","Vì sao chọn cách này","Phân tích:"]){
      assert(r03.includes(phrase),"B24 R03 Q18 receipt lacks "+phrase);
    }
    current=candidate;
   }
   const lesson=fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-viii/bai-24.md"));
   const actual=require("node:crypto").createHash("sha1").update(Buffer.from("blob "+lesson.length+"\0")).update(lesson).digest("hex");
   assert.equal(actual,ownerAntiRepeatCandidate(name,current),"B24 source must match immutable chain + signed footer delta");
   const t=lesson.toString("utf8");
   assert(t.includes("2.5. Sử dụng máy tính cầm tay")&&t.includes("nPr")&&t.includes("nCr")&&
    !t.includes("0le kle n")&&[...t.matchAll(/^=== "([^"]+)"$/gm)].length===4,
    "B24 cannot lose S1 5-section outcome or Golden tab4");
   for(const n of ["TRY05","TRY06","TRY07","TRY08"])assert(
    t.includes('data-thpt-first-try-id="THPT-G10-CHVIII-'+n+'"')&&
    t.includes('data-thpt-help-id="HELP-G10-CHVIII-'+n+'"'),
    "B24 original FirstTry/HELP canonical ID changed: "+n);
   if(fs.existsSync(p02)){
    assert(t.includes('bai-24\\/?$')&&!t.includes('bai-23\\/?$')&&
      t.includes('THPT-G10-CHVIII-TRY05')&&t.includes('.thpt-r4-concept-card')&&
      t.includes('.thpt-r4-rule-card')&&
      (t.match(/<div class="thpt-g10-example-solution"/g)||[]).length===5,
      "B24 R02 Golden route, semantic cards and five example boxes missing");
   }
   return current;
  }
 }
 if(name==="B25"){
  const rPath=path.join(root,"prototypes/thpt/ux795/G10_CHVIII_B25_NEWTON_TREE_APPLICATION_Q18_R01_20261121.md");
  if(fs.existsSync(rPath)){
   const r=fs.readFileSync(rPath,"utf8"),field=k=>r.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(field("R01_PREVIOUS_SOURCE_BLOB"),blobs[1],
     "B25 R01 must extend immutable published old source Git SHA");
   const next=field("R01_CORRECTED_SOURCE_BLOB");
   assert(/^[a-f0-9]{40}$/.test(next||"")&&next!==blobs[1],"B25 R01 source SHA invalid");
   for(const marker of ["G10-CHVIII-B25-NEWTON-TREE-APPLICATION-Q18-R01-20261121",
    "DELTA_C_ACADEMIC_MATERIAL","G2_AFFECTED_SCOPE_P0=0_P1=0",
    "INDEPENDENT_NOTEBOOKLM_REVIEW_NOT_CLAIMED","OWNER_P2_PENDING"]){
    assert(r.includes(marker),"B25 Q18 receipt incomplete: "+marker);
   }
   let current=next;
   const p02=path.join(root,"prototypes/thpt/ux795/G10_CHVIII_B25_APPLICATION_R02_SOURCE_Q18_20261121.md");
   if(fs.existsSync(p02)){
    const r02=fs.readFileSync(p02,"utf8"),field2=k=>r02.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
    assert.equal(field2("R02_PREVIOUS_SOURCE_BLOB"),next,
      "B25 R02 must extend exact B25 G2 R01 source SHA");
    current=field2("R02_CORRECTED_SOURCE_BLOB");
    assert(/^[a-f0-9]{40}$/.test(current||"")&&current!==next,
      "B25 R02 new source Git blob SHA malformed");
    for(const marker of ["G10-CHVIII-B25-APPLICATION-R02-SOURCE-Q18-20261121",
     "DELTA_C_ACADEMIC_MATERIAL","OWNER_P2_PENDING","1,02^5","0,0040808032"]){
     assert(r02.includes(marker),"B25 R02 receipt incomplete: "+marker);
    }
   }
   const full=fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-viii/bai-25.md"));
   const actual=require("node:crypto").createHash("sha1").update(Buffer.from("blob "+full.length+"\0")).update(full).digest("hex");
   assert.equal(actual,ownerAntiRepeatCandidate(name,current),"B25 source must match immutable chain + signed footer delta");
   const s=full.toString("utf8");
   assert(s.includes("G10_B25_NEWTON_BRANCH_TREE_R01.svg")&&
     s.includes("G10_B25_PASCAL_TRIANGLE_R02.svg")&&
     s.includes("2.5. Dùng khai triển để ước lượng và kiểm sai số")&&
     (s.match(/class="thpt-g10-example-solution"/g)||[]).length===6&&
     !s.includes("Lộ trình chính thức của SGK")&&!s.includes("Vì sao chọn cách này"),
    "B25 S1/PED source contract missing");
   const svg=fs.readFileSync(path.join(root,"docs/assets/images/thpt/G10_B25_NEWTON_BRANCH_TREE_R01.svg"));
   const svgActual=require("node:crypto").createHash("sha1").update(Buffer.from("blob "+svg.length+"\0")).update(svg).digest("hex");
   assert.equal(svgActual,field("FIGURE_GIT_BLOB"),"B25 Q07 image must match signed source");
   for(const id of ["09","10","11","12"]){
    assert(s.includes('data-thpt-first-try-id="THPT-G10-CHVIII-TRY'+id+'"')&&
      s.includes('data-thpt-help-id="HELP-G10-CHVIII-TRY'+id+'"'),
      "B25 canonical TRY/HELP ID changed: "+id);
   }
   return current;
  }
 }
 if(name==="B27"){
  // One canonical, complete SGK S1 83–87 enrichment, Q18 source-locked.
  // Preserve the unchanged B01–B26 previously accepted source snapshots.
  const p="prototypes/thpt/ux795/G10_CHIX_B27_S1_GOLDEN_ENRICHMENT_Q18_R01_20261121.md";
  const r=fs.readFileSync(path.join(root,p),"utf8");
  const field=k=>r.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field("BASELINE_SOURCE_BLOB"),blobs[1],
    "B27 must extend exact previous original canonical SGK source");
  const next=field("CANDIDATE_SOURCE_BLOB");
  assert(/^[a-f0-9]{40}$/.test(next||"")&&next!==blobs[1],
    "B27 new source must have a real SHA successor");
  // Owner P2 source-only semantic correction. R01 history stays immutable.
  const r02file="prototypes/thpt/ux795/G10_CHIX_B27_KNOWLEDGE_FORMULA_TREE_OWNER_P2_Q18_R02_20261121.md";
  let final=next;
  if(fs.existsSync(path.join(root,r02file))){
   const r02=fs.readFileSync(path.join(root,r02file),"utf8");
   const f02=k=>r02.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(f02("R02_PREVIOUS_SOURCE_BLOB"),next,
    "B27 formula/tree P2 delta must descend from EXACT published R01 source");
   final=f02("R02_CORRECTED_SOURCE_BLOB");
   assert(/^[a-f0-9]{40}$/.test(final||"")&&final!==next,
    "B27 P2 source replacement must name a distinct real Git blob");
   for(const token of ["G10-CHIX-B27-KNOWLEDGE-FORMULA-TREE-R02-20261121",
    "DELTA_C_ACADEMIC_MATERIAL","DELTA_A_UI","OWNER_P2_DEFECT_RECEIVED",
    "OWNER_P2_RECHECK_PENDING","Q18_OWNER_SELF_VERIFIED_ENRICHMENT",
    "B27-G0-KNOWLEDGE-FORMULA-FIGURE-20261121"])
    assert(r02.includes(token),"B27 P2 Q18 receipt missing "+token);
  }
  // R03 editorial-only successor; R01/R02 immutable.
  const r03file="prototypes/thpt/ux795/G10_CHIX_B27_EDITORIAL_HEADINGS_KIEM_LOI_Q18_R03_20261121.md";
  if(fs.existsSync(path.join(root,r03file))){
   const r03=fs.readFileSync(path.join(root,r03file),"utf8");
   const f03=k=>r03.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(f03("R03_PREVIOUS_SOURCE_BLOB"),final,
    "B27 R03 must descend from the exact published R02 Git blob");
   const newer=f03("R03_CORRECTED_SOURCE_BLOB");
   assert(/^[a-f0-9]{40}$/.test(newer||"")&&newer!==final,
    "B27 R03 must identify a distinct valid source Git blob");
   final=newer;
   for(const m of ["G10-CHIX-B27-EDITORIAL-HEADINGS-KIEM-LOI-Q18-R03-20261121",
    "DELTA_A_UI_EDITORIAL","DELTA_B_SOURCE_EQUIVALENT",
    "Q18_OWNER_SELF_VERIFIED_ENRICHMENT",
    "SGK-G0-EDITORIAL-HEADINGS-D6-NO-META-20261121","OWNER_P2_RECHECK_PENDING"])
     assert(r03.includes(m),"B27 R03 editorial receipt missing "+m);
  }
  for(const marker of ["G10-CHIX-B27-S1-GOLDEN-ENRICHMENT-Q18-R01-20261121",
   "SLM-THPT-QUALITY-ONE","Q18_OWNER_SELF_VERIFIED_ENRICHMENT",
   "DELTA_C_ACADEMIC_MATERIAL","INDEPENDENT_NOTEBOOKLM_REVIEW_NOT_CLAIMED",
   "PDF_INDEX_NOT_VERIFIED_NON_BLOCKING","OWNER_P2_PENDING",
   "B27_AFFECTED_MATH_TOKEN_MIGRATION=15","P0=0 P1=0"])
   assert(r.includes(marker),"B27 S1/PED signed Q18 receipt missing "+marker);
  const lesson=fs.readFileSync(path.join(root,
   "docs/thpt-preview/sgk/chuong-ix/bai-27.md"));
  const blob=require("node:crypto").createHash("sha1")
   .update("blob "+lesson.length+"\0").update(lesson).digest("hex");
  assert.equal(blob,final,"B27 current Git SHA must match signed R01 → R02 exact chain");
  const t=lesson.toString("utf8");
  assert.deepEqual([...t.matchAll(/^=== "([^"]+)"$/gm)].map(m=>m[1]),
   ["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],
   "B27 Golden must have four exact owner-approved tabs");
  const knowledge=t.split('=== "Kiến thức SGK"')[1]?.split('=== "Ví dụ"')[0];
  assert(knowledge,"B27 no formal S1 knowledge tab");
  for(const term of ["2.1. Sử dụng phương pháp tổ hợp","2.2. Sử dụng sơ đồ hình cây",
    "2.3. Xác suất của biến cố đối" ,"P(\\overline E)=1-P(E)"])
    assert(knowledge.includes(term),"B27 S1 section or formula missing "+term);
  assert.equal((knowledge.match(/<div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card"/g)||[]).length,1,
   "B27 precisely ONE official boxed theorem/rule: complement probability");
  assert.equal((knowledge.match(/thpt-r4-concept-card/g)||[]).length,0,
   "B27 cannot invent a formal concept when SGK teaches application methods");
  for(const id of ["06","07","08","09","10"]){
   assert(t.includes('data-thpt-first-try-id="THPT-G10-CHIX-TRY'+id+'"')&&
    t.includes('data-thpt-help-id="HELP-G10-CHIX-TRY'+id+'"'),
    "B27 canonical First Try and D6 identity lost: "+id);
  }
  assert.equal((t.match(/\?\?\? question "Đối chiếu"/g)||[]).length,5,
    "B27 five original answer disclosures must remain closed, exact labels");
  assert.equal((t.match(/\?\?\? tip "Kiểm lỗi/g)||[]).length,5,
    "B27 five local outcome D6 steps must be directly below First Try");
  assert.equal((t.match(/class="thpt-g10-example-solution"/g)||[]).length,6,
   "B27 six full solved examples have to keep neutral explanation boxes");
  assert(t.includes("data-b27-owner-g0g2=")&&t.includes("chuong-ix\\/bai-27\\/?$")&&
   !t.includes("chuong-ix\\/bai-26\\/?$"),"B27 Golden route and marker mismatch");
  assert.equal((t.match(/class="thpt-r4-footnote"/g)||[]).length,1,
   "B27 one source note only; no duplicate footer");
  assert(!t.includes("<small>Nguồn")&&!t.includes("Mỗi ví dụ có")&&
   !t.includes("Tự đối chiếu lời giải sau khi em đã thử"),
   "B27 learner prose still duplicates source or narration");
  const svg=fs.readFileSync(path.join(root,"docs/assets/images/thpt/THPT_G10_B27_WITHOUT_REPLACEMENT_TREE.svg"));
  const svgSha=require("node:crypto").createHash("sha1")
   .update("blob "+svg.length+"\0").update(svg).digest("hex");
  assert.equal(svgSha,field("SOURCE_FIGURE_SVG_BLOB"),
   "B27 existing tree SVG must match signed source");
  assert(t.includes("THPT_G10_B27_WITHOUT_REPLACEMENT_TREE.svg")&&
   t.includes("Cây")&&t.includes("8\\,145\\,060")&&
   t.includes("234"),"B27 SGK tree/lottery application lost");
  if(final!==next){
   // B27 P2: visual/semantic requirements must hold in the exact SGK tab.
   const discovery=t.split('=== "Khám phá kiến thức"')[1]?.split('=== "Kiến thức SGK"')[0];
   const k1=knowledge.split('### 2.1. Sử dụng phương pháp tổ hợp')[1]?.split('### 2.2. Sử dụng sơ đồ hình cây')[0];
   const k2=knowledge.split('### 2.2. Sử dụng sơ đồ hình cây')[1]?.split('### 2.3. Xác suất của biến cố đối')[0];
   assert(discovery&&k1&&k2,"B27 exact SGK section placements missing");
   assert.equal((k1.match(/<div class="thpt-g10-key-formula"/g)||[]).length,1,
    "B27 Knowledge §2.1 must contain exactly one visible neutral KEY_FORMULA");
   for(const token of ["data-b27-key-formula=\"combinations\"","P(A)=\\dfrac{n(A)}{\\binom nk}",
    "0\\le k\\le n","n(\\Omega)>0","các nhóm"]){
    assert(k1.includes(token),"B27 formula application missing item/condition "+token);
   }
   assert.equal((k2.match(/<figure/g)||[]).length,1,
    "B27 Knowledge §2.2 needs the one existing source SVG figure");
   assert(k2.includes('data-b27-knowledge-figure="reused-discovery-tree"')&&
    k2.includes("THPT_G10_B27_WITHOUT_REPLACEMENT_TREE.svg")&&
    discovery.includes("THPT_G10_B27_WITHOUT_REPLACEMENT_TREE.svg"),
    "B27 must reuse the same actual tree SVG in both Discovery and SGK tabs");
   assert(k2.indexOf("<figure")<k2.indexOf("**Hướng dẫn đọc sơ đồ cây.**"),
    "B27 knowledge tree must appear BEFORE its reading explanation");
   assert.equal((t.match(/THPT_G10_B27_WITHOUT_REPLACEMENT_TREE\.svg/g)||[]).length,2,
    "B27 original tree must be placed twice, never cloned or renamed");
   assert.equal((knowledge.match(/<div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card"/g)||[]).length,1,
    "B27 still has exactly one official SGK formal probability-complement rule");
   assert.equal((knowledge.match(/thpt-r4-concept-card/g)||[]).length,0,
    "B27 practice lesson must not invent a formal definition");
   assert(t.includes("background:transparent;color:inherit")&&
    t.includes('data-md-color-scheme="slate"')&&
    t.includes('.thpt-g10-key-formula'),
    "B27 neutral key formula must be scoped and legible in light/slate");
  }
  if(fs.existsSync(path.join(root,r03file))){
   // Audit the whole learner page, not only one screenshot.
   const heads=t.split("\n").filter(x=>x.trimStart().startsWith("### ")||x.trimStart().startsWith("#### "));
   assert(heads.length>=10,"B27 book headings unexpectedly missing");
   assert(heads.every(x=>!x.includes("?")&&!x.includes("？")&&
    !x.includes("(SGK")&&!x.includes("KNTT")&&!x.includes("tr.")),
    "B27 headings cannot be questions or source/page citations");
   for(const title of [
    "### 1.1. Chọn nhóm không xét thứ tự",
    "### 1.2. Rút thẻ theo nhiều lượt",
    "### 1.3. Sử dụng biến cố đối",
    "### 1.4. Phép rút có hoàn lại và không hoàn lại",
    "### 1.5. Điều kiện đồng khả năng",
    "### 2.1. Sử dụng phương pháp tổ hợp",
    "### 2.2. Sử dụng sơ đồ hình cây",
    "### 2.3. Xác suất của biến cố đối",
    "**Hướng dẫn đọc sơ đồ cây.**",
    "<strong>Công thức tính xác suất bằng tổ hợp</strong>"
   ])assert(t.includes(title),"B27 book-style title missing "+title);
   for(const forbidden of [
    "TOÁN 10 · CHƯƠNG IX · KIẾN THỨC SGK KNTT",
    "không phải một định nghĩa mới",
    "cách vận dụng các công thức đã học",
    "**Khi nào nhân các tổ hợp?**",
    "**Vì sao chọn biến cố đối?**",
    "**Tại sao phải đọc hình như vậy?**",
    "Kiểm lỗi —"])
    assert(!t.includes(forbidden),"B27 redundant learner-facing label/prose: "+forbidden);
   const d6=t.split('??? tip "Kiểm lỗi"').slice(1);
   assert.equal(d6.length,5,"Exactly 5 B27 First Try disclosures titled Kiểm lỗi");
   for(const part of d6)assert(part.startsWith("\n\n        <p><strong>Lỗi cần kiểm:</strong>")&&
    part.indexOf("<p><strong>Lỗi cần kiểm:</strong>")<
    part.indexOf("<p><strong>Bước 1:</strong>"),
    "Error name belongs inside Kiểm lỗi before Bước 1");
   assert(t.includes(".thpt-g10-key-formula > strong{display:block")&&
    !t.includes(".thpt-g10-key-formula strong{display:block"),
    "Strong prose in KEY_FORMULA must not become a standalone line");
   assert.equal((t.match(/class="thpt-r4-footnote"/g)||[]).length,1,
    "B27 one and only one final SGK/SBT source note");
  }
  return final;
 }
 if(name==="B26"){
  // Owner-authorized B26 SGK enrichment; require a source-locked Q18 delta
  // on the one canonical lesson, never silently promote the old 27-row ledger.
  const receiptPath="prototypes/thpt/ux795/G10_CHIX_B26_S1_GOLDEN_ENRICHMENT_Q18_R01_20261121.md";
  const r=fs.readFileSync(path.join(root,receiptPath),"utf8");
  const field=k=>r.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field("BASELINE_SOURCE_BLOB"),blobs[1],
   "B26 Q18 baseline must extend exactly the immutable old source");
  const current=field("CANDIDATE_SOURCE_BLOB");
  assert(/^[a-f0-9]{40}$/.test(current||"")&&current!==blobs[1],
   "B26 candidate must have a distinct valid source Git blob SHA");
  for(const marker of ["G10-CHIX-B26-S1-GOLDEN-ENRICHMENT-Q18-R01-20261121",
   "Q18_OWNER_SELF_VERIFIED_ENRICHMENT","DELTA_C_ACADEMIC_MATERIAL",
   "INDEPENDENT_NOTEBOOKLM_REVIEW_NOT_CLAIMED","OWNER_P2_PENDING",
   "G10-B26-SCOPE_SMALL_PROBABILITY","P0=0","P1=0"]){
   assert(r.includes(marker),"B26 Q18 source evidence missing "+marker);
  }
  const gitBlob=buf=>require("node:crypto").createHash("sha1")
    .update(Buffer.from("blob "+buf.length+"\0")).update(buf).digest("hex");
  const full=fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-ix/bai-26.md"));
  assert.equal(gitBlob(full),ownerAntiRepeatCandidate(name,current),"B26 canonical source must match signed semantic successor");
  const t=full.toString("utf8");
  assert.deepEqual([...t.matchAll(/^=== "([^"]+)"$/gm)].map(m=>m[1]),
   ["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],
   "B26 Golden UI must retain exactly four tabs in approved order");
  for(let i=1;i<=5;i++){
   const id="0"+i;
   assert(t.includes('data-thpt-first-try-id="THPT-G10-CHIX-TRY'+id+'"')&&
    t.includes('data-thpt-help-id="HELP-G10-CHIX-TRY'+id+'"'),
    "B26 canonical FirstTry/HELP ID missing: "+id);
  }
  assert((t.match(/\?\?\? question "Đối chiếu"/g)||[]).length===5&&
   (t.match(/\?\?\? tip "Kiểm lỗi"/g)||[]).length===5&&
   (t.match(/class="thpt-g10-example-solution"/g)||[]).length===6&&
   t.includes("2.3. Nguyên lí xác suất bé")&&t.includes("10 492 bé trai")&&
   t.includes("G10_B26_EVENT_COMPLEMENT_R01.svg")&&
   t.includes("THPT_G10_B26_COIN_DIE_SAMPLE_SPACE.svg")&&
   t.includes('bai-26\\/?$')&&!t.includes('bai-25\\/?$'),
   "B26 SGK outcomes, Golden solved examples, visual or self-check placement missing");
  const svg=fs.readFileSync(path.join(root,"docs/assets/images/thpt/G10_B26_EVENT_COMPLEMENT_R01.svg"));
  assert.equal(gitBlob(svg),field("VENN_SVG_BLOB"),"B26 complement figure must match signed Git SHA");
  return current;
 }
 return blobs[1];
}
function expectedG10KnowledgeBlob(lesson,legacy){
 const current=expectedG10KnowledgeBlobHistorical(lesson,legacy);
 const n=Number(String(lesson).replace(/^B/,""));
 if(n>=1&&n<=26)g10OneSourceCitation(n,fs.readFileSync(path.join(root,g10PublicKnowledgePath(n)),"utf8"));
 if(n>=19&&n<=26)return release1132Candidate(n,ownerAntiRepeatCandidate("B"+n,current));
 if(!(n>=7&&n<=14))return release1132Candidate(n,current);
 const file=path.join(root,"prototypes/thpt/ux795/G10_CHIV_CHV_B07_B14_KIEM_LOI_PLACEMENT_Q18_R01_20261120.md");
 if(!fs.existsSync(file))return current;
 const source=fs.readFileSync(file,"utf8"),rows=source.split("\n").filter(x=>x.startsWith("| B"+n+" | "));
 assert.equal(rows.length,1,"B"+n+" Kiểm lỗi R01 source receipt missing or duplicate row");
 const sha=[...rows[0].matchAll(/`([a-f0-9]{40})`/g)].map(x=>x[1]);
 assert.equal(sha.length,2,"B"+n+" Kiểm lỗi row must lock previous and candidate Git SHA");
 assert.equal(sha[0],current,"B"+n+" Kiểm lỗi must extend exact immutable published source");
 assert.notEqual(sha[0],sha[1],"B"+n+" Kiểm lỗi source SHA must change");
 assert(source.includes("G10-B07-B14-KIEM-LOI-PLACEMENT-Q18-R01-20261120")&&
  source.includes("DELTA_C_ACADEMIC_MATERIAL")&&source.includes("OWNER_P2"),
  "B07-B14 Kiểm lỗi authoring HOLD receipt missing");
 let newest=sha[1];
 if(n===9){
  const p02=path.join(root,"prototypes/thpt/ux795/G10_CHIV_B09_GENERAL_VECTOR_ERROR_TAB4_Q18_R02_20261120.md");
  if(fs.existsSync(p02)){
   const r02=fs.readFileSync(p02,"utf8");
   const field=k=>r02.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(field("R02_PREVIOUS_SOURCE_BLOB"),newest,
    "B09 R02 must extend exact original relocation source SHA");
   newest=field("R02_CORRECTED_SOURCE_BLOB");
   assert(/^[a-f0-9]{40}$/.test(newest)&&newest!==sha[1],
    "B09 R02 current source SHA malformed");
  }
 }
 return newest;
}
function candidateG10KnowledgeBlob(lesson){
 const sentinel="0".repeat(40),result=expectedG10KnowledgeBlob(lesson,sentinel);
 return result===sentinel?null:result;
}
module.exports={expectedG10KnowledgeBlob,candidateG10KnowledgeBlob,chivEditorialReceiptRows,chvEditorialReceiptRows,chviEditorialReceiptRows,chviExampleUxReceiptRows,chviiEditorialReceiptRows};
