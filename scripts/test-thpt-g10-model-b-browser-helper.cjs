"use strict";
/* Browser-only compatibility contract for exact source-locked G10 Model B pages.
 * Preserves legacy R01/R02 checks in callers. No source or Q16 data mutation. */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const {expectedG10KnowledgeBlob,chivEditorialReceiptRows,chvEditorialReceiptRows,chviiEditorialReceiptRows}=require("./thpt-q18-g10-source-receipt.cjs");
const tabsExpected=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
async function verifyModelBLesson(page,{n,chapter,tries,helps,images,questions=tries,remediationTab="Lỗi thường gặp"}){
 const article=page.locator("article.md-content__inner");
 const group=article.locator(".tabbed-set").first();
 if(await group.count()===0)return false;
 const labels=group.locator(".tabbed-labels label");
 const actual=(await labels.allTextContents()).map(x=>x.trim());
 const expected=tabsExpected;
 assert.deepEqual(actual,expected,"B"+n+" four Golden horizontal Model B tabs: numbered G10 B01-B06, unchanged B07+");
 if(n<=6)assert.equal(await article.getAttribute("data-g10-b01-b06-editorial-numbered"),"true",
   "B"+n+" numbering must be mounted on approved B01–B06 DOM only");
 const rel="docs/thpt-preview/sgk/chuong-"+chapter+"/bai-"+n+".md";
 const bytes=fs.readFileSync(rel);
 const sha=crypto.createHash("sha1").update(Buffer.from("blob "+bytes.length+"\0")).update(bytes).digest("hex");
 assert.equal(sha,expectedG10KnowledgeBlob(n,"0".repeat(40)),"B"+n+" candidate SHA no longer matches 27-row source ledger");
 const source=bytes.toString("utf8");
 const sourceTries=[...source.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(x=>x[1]);
 const sourceHelps=[...source.matchAll(/data-thpt-help-id="([^"]+)"/g)].map(x=>x[1]);
 assert.equal(sourceTries.length,tries,"B"+n+" source first tries");
 assert.equal(sourceHelps.length,helps,"B"+n+" source D6");
 assert.equal(new Set(sourceTries).size,tries,"B"+n+" duplicate canonical First Try");
 assert.equal(new Set(sourceHelps).size,helps,"B"+n+" duplicate canonical HELP");
 const markers=article.locator("[data-thpt-first-try-id]");
 const helpMarkers=article.locator("[data-thpt-help-id]");
 assert.deepEqual(await markers.evaluateAll(nodes=>nodes.map(n=>n.getAttribute("data-thpt-first-try-id"))),
  sourceTries,"B"+n+" first try IDs in actual HTML must match pinned source/order");
 assert.deepEqual(await helpMarkers.evaluateAll(nodes=>nodes.map(n=>n.getAttribute("data-thpt-help-id"))),
  sourceHelps,"B"+n+" D6 IDs in actual HTML must match pinned source/order");
 assert.equal((source.match(/^    \?\?\? question "/gm)||[]).length,questions,"B"+n+" source question/disclosure count");
 assert.equal(await article.locator("details.question").count(),questions,
  "B"+n+" one default-closed First Try per canonical placement");
 // B09 owner P2 correction adds a REAL third mistake disclosure (4.3)
 // without adding a THIRD canonical D6 HELP_ID. Count both contracts separately.
 // The exception is only allowed for the exact R06 source SHA.
 const r06Path="prototypes/thpt/ux795/G10_CHIV_B09_TAB4_REAL_ERROR_P2_DELTA_C_R06_20261117.md";
 let extraMistake=0;
 if(n===9&&fs.existsSync(r06Path)){
  const r06=fs.readFileSync(r06Path,"utf8");
  const signed=r06.split("**R06_SOURCE_BLOB:** "+String.fromCharCode(96))[1]?.slice(0,40);
  // Frozen 17/11 R06 is the predecessor of the owner-signed 20/11
  // local-HELP placement (R01), then the one general vector mistake
  // remains in Tab4 after the 20/11 R02 relocation. Source identity and
  // historical chain are both mandatory; no ad hoc editorial acceptance.
  const placement=fs.readFileSync(
   "prototypes/thpt/ux795/G10_CHIV_CHV_B07_B14_KIEM_LOI_PLACEMENT_Q18_R01_20261120.md","utf8");
  const row=placement.split("\n").find(x=>x.startsWith("| B9 | "));
  assert(row,"B09 needs immutable 20/11 placement receipt");
  const shas=[...row.matchAll(/`([a-f0-9]{40})`/g)].map(m=>m[1]);
  assert.equal(shas[0],signed,"B09 20/11 original must be frozen owner R06 source");
  const next=fs.readFileSync(
   "prototypes/thpt/ux795/G10_CHIV_B09_GENERAL_VECTOR_ERROR_TAB4_Q18_R02_20261120.md","utf8");
  const field=k=>next.split("**"+k+":** `")[1]?.slice(0,40);
  assert.equal(field("R02_PREVIOUS_SOURCE_BLOB"),shas[1],
   "B09 current general mistake must extend 20/11 local-HELP placement");
  assert.equal(field("R02_CORRECTED_SOURCE_BLOB"),sha,
   "B09 current rendered error must match exact 20/11 source receipt");
  assert(r06.includes("B09-F04")&&source.includes("Đảo dấu khi phân tích vectơ"),
   "B09 general Tab4 must diagnose a genuine sign error");
  extraMistake=1;
 }
 assert.equal((source.match(/^    \?\?\? tip "/gm)||[]).length,helps+extraMistake,
  "B"+n+" only canonical HELP disclosures plus signed B09 4.3 may be shown");
 assert.equal(await article.locator("details.tip").count(),helps+extraMistake,
  "B"+n+" exact collapsed error count; canonical HELP markers remain independently checked");
 if(extraMistake){
  const third=article.locator("details.tip").nth(2);
  assert((await third.locator("summary").innerText()).includes("Đảo dấu khi phân tích vectơ"),
   "B09 must retain one real general wrong-sign diagnosis in Tab4");
  await labels.nth(3).click();
  assert(!(await third.evaluate(x=>x.open)),"B09 4.3 remains closed before learner action");
  await third.locator("summary").click();
  assert(await third.evaluate(x=>x.open),"B09 4.3 student can open actual diagnosis");
  const text=await third.innerText();
  assert(text.includes("Vì sao sai?")&&text.includes("Ôn và luyện lại:"),
   "B09 third real error must explain reason, correction and remediation");
  await third.locator("summary").click();
  assert(!(await third.evaluate(x=>x.open)),"B09 4.3 student can reclose error diagnosis");
 }
 assert.equal(await article.locator("details.question[open], details.tip[open]").count(),0,
  "B"+n+" no pre-attempt solution/remediation may be open");
 const select=async name=>{
  const index=tabsExpected.indexOf(name);
  assert(index>=0,"Unknown Golden tab request "+name);
  const t=labels.nth(index);
  assert.equal((await t.textContent()).trim(),expected[index],
   "B"+n+" missing exact expected tab "+expected[index]);
  await t.click();
 };
 // S1 editorial Golden (owner §X-F): First Try belongs in Discovery.
 // Original, independently frozen versions without the ChIV receipt retain
 // the previous Knowledge placement. Never remove disclosure/Q15 assertions.
 const lesson="B"+String(n).padStart(2,"0");
 const hasEditorial=chivEditorialReceiptRows().has(lesson)||chvEditorialReceiptRows().has(lesson)||
   chviiEditorialReceiptRows().has(lesson);
 const formativeTab=hasEditorial?"Khám phá kiến thức":"Kiến thức SGK";
 await select(formativeTab);
 const answer=article.locator("details.question:visible").first();
 assert(await answer.count()===1,"B"+n+" First Try must be visible in "+formativeTab);
 const before=await answer.innerText();
 await answer.locator("summary").click();
 assert(await answer.evaluate(x=>x.open),"B"+n+" student cannot open First Try");
 assert((await answer.innerText()).length>before.length+18,"B"+n+" First Try did not reveal reasoning");
 await answer.locator("summary").click();
 assert(!(await answer.evaluate(x=>x.open)),"B"+n+" student cannot reclose First Try");
 await select(remediationTab);
 const tip=article.locator("details.tip:visible").first();
 assert(await tip.count()===1,"B"+n+" signed D6 must be available in "+remediationTab);
 const tipBefore=await tip.innerText();
 await tip.locator("summary").click();
 assert(await tip.evaluate(x=>x.open),"B"+n+" student cannot open D6");
 assert((await tip.innerText()).length>tipBefore.length+18,"B"+n+" D6 lacks readable help");
 await tip.locator("summary").click();
 assert(!(await tip.evaluate(x=>x.open)),"B"+n+" student cannot close D6");
 for(const asset of images){
  const img=article.locator('img[src$="'+asset+'"]');
  assert.equal(await img.count(),1,"B"+n+" reviewed D5 asset missing "+asset);
  let visible=false;
  // Lazy SVG may be zero-size until scrolled; select its visible figure/caption.
  const figure=img.locator("xpath=..");
  for(const name of tabsExpected){
   await select(name);
   if(await figure.isVisible()){visible=true;break;}
  }
  assert(visible,"B"+n+" reviewed D5 figure inaccessible under four tabs "+asset);
  await figure.scrollIntoViewIfNeeded();
  await img.evaluate(async x=>{if(typeof x.decode==="function")await x.decode()});
  const measure=await img.evaluate(x=>{
   const fig=x.closest("figure");
   return {loaded:x.complete&&x.naturalWidth>0,w:x.getBoundingClientRect().width,
    p:x.parentElement.getBoundingClientRect().width,
    width:innerWidth,scroll:fig?fig.scrollWidth:0,client:fig?fig.clientWidth:0,
    figureOverflow:fig?getComputedStyle(fig).overflowX:null};
  });
  assert(measure.loaded,"B"+n+" D5 SVG missing or failed to decode "+asset);
  if(n===6&&measure.width<=740){
   assert(measure.w>=755&&measure.scroll>measure.client+2&&
    (measure.figureOverflow==="auto"||measure.figureOverflow==="scroll"),
    "B06 phone D5 must be readable at 760px and scroll inside figure "+asset);
   }else if(n===13&&measure.width<=600&&asset==="THPT_G10_B13_QUARTILES_D5_R01.svg"){
   assert(measure.w>=580&&measure.scroll>measure.client+50&&
    (measure.figureOverflow==="auto"||measure.figureOverflow==="scroll"),
    "B13 quartile illustration must pan inside figure on mobile");
  }else if(n===12&&measure.width<=600&&asset==="THPT_G10_B12_ERROR_INTERVAL_D5_R02_REVIEWED.svg"){
   assert(measure.w>=580&&measure.scroll>measure.client+50&&
    (measure.figureOverflow==="auto"||measure.figureOverflow==="scroll"),
    "B12 source-authored D5 must show readable 600px graphic and pan only inside figure "+asset);
  }else{
   assert(measure.w<=measure.p+2,"B"+n+" D5 must fit ordinary figure "+asset);
  }
 }
 const bounds=await page.evaluate(()=>({w:document.documentElement.scrollWidth,v:innerWidth}));
 assert(bounds.w<=bounds.v+20,"B"+n+" Model B horizontal overflow");
 assert.equal(await article.locator("[data-thpt-readiness],[data-mastery-credit],[data-mastery-write]").count(),0,
  "B"+n+" Knowledge must never claim held-out Readiness/Mastery");
 return true;
}
module.exports={verifyModelBLesson};