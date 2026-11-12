"use strict";
/* Browser-only compatibility contract for exact source-locked G10 Model B pages.
 * Preserves legacy R01/R02 checks in callers. No source or Q16 data mutation. */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const {expectedG10KnowledgeBlob}=require("./thpt-q18-g10-source-receipt.cjs");
const tabsExpected=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
async function verifyModelBLesson(page,{n,chapter,tries,helps,images,questions=tries}){
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
 assert.equal(await article.locator("details.tip").count(),helps,
  "B"+n+" one default-closed D6 per canonical helper");
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
 await select("Kiến thức SGK");
 const answer=article.locator("details.question:visible").first();
 assert(await answer.count()===1,"B"+n+" First Try must be visible to learner in Knowledge tab");
 const before=await answer.innerText();
 await answer.locator("summary").click();
 assert(await answer.evaluate(x=>x.open),"B"+n+" student cannot open First Try");
 assert((await answer.innerText()).length>before.length+18,"B"+n+" First Try did not reveal reasoning");
 await answer.locator("summary").click();
 assert(!(await answer.evaluate(x=>x.open)),"B"+n+" student cannot reclose First Try");
 await select("Lỗi thường gặp");
 const tip=article.locator("details.tip:visible").first();
 assert(await tip.count()===1,"B"+n+" remediation must be available in mistakes tab");
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
  const measure=await img.evaluate(x=>({loaded:x.complete&&x.naturalWidth>0,w:x.getBoundingClientRect().width,p:x.parentElement.getBoundingClientRect().width}));
  assert(measure.loaded&&measure.w<=measure.p+2,"B"+n+" D5 missing/overflow "+asset);
 }
 const bounds=await page.evaluate(()=>({w:document.documentElement.scrollWidth,v:innerWidth}));
 assert(bounds.w<=bounds.v+20,"B"+n+" Model B horizontal overflow");
 assert.equal(await article.locator("[data-thpt-readiness],[data-mastery-credit],[data-mastery-write]").count(),0,
  "B"+n+" Knowledge must never claim held-out Readiness/Mastery");
 return true;
}
module.exports={verifyModelBLesson};