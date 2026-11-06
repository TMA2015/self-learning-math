"use strict";
/* G12 Golden R4 UI-contract browser helper. This tests real DOM and modal behavior, not CSS snapshots. */
const assert=require("node:assert/strict");
async function verifyG12GoldenHub(page,{chapter,selector,lessons,groups,items,helps}){
 const key=selector.slice(1,-1).split("=")[0]; // not used for locator state
 const hub=page.locator(selector);
 await page.waitForFunction(s=>document.querySelector(s)?.dataset.g12GoldenHubReady==="true",selector,{timeout:30000});
 assert.equal(await hub.getAttribute("data-g12-golden-item-count"),String(items),"Original PUBLIC source count retained");
 assert.equal(await hub.locator(".thpt-r4-practice-lesson").count(),lessons,"Original lesson grouping");
 assert.equal(await hub.locator(".thpt-g12-golden-card").count(),groups,"Golden two-card layout");
 assert.equal(await hub.locator("[data-g12-golden-open]").count(),groups,"One modal launcher per Core/Practice group");
 assert.equal(await hub.locator("[data-canonical-item]").count(),0,"No full-page inline question stacks");
 assert.equal(await hub.locator('details[class*="-hub-help"]').count(),0,"D6 must live within Golden question, no chapter-level duplicate accordion");
 const id="b"+({I:"01",II:"06",III:"09",IV:"11",V:"14",VI:"18"}[chapter])+"-core";
 const card=hub.locator("#"+id);
 assert.equal(await card.count(),1,"Core card anchored");
 const geometry=await card.evaluate(c=>{
  const a=c.querySelector(".thpt-r4-practice-card-kind"),b=c.querySelector("strong"),btn=c.querySelector("button");
  const A=a.getBoundingClientRect(),B=b.getBoundingClientRect(),C=btn.getBoundingClientRect();
  return {stack:A.bottom<=B.top+2&&B.bottom<=C.top+2,button:C.width>=120,height:C.height};
 });
 assert(geometry.stack&&geometry.button&&geometry.height>=40,"Golden R4 labels/title/button must not overlap");
 await card.locator("button").click();
 const dlg=page.locator('dialog[data-g12-golden-dialog="'+chapter+'"]');
 assert(await dlg.isVisible(),"Same modal interaction as G11");
 assert.equal(await page.locator("dialog.thpt-r4-practice-dialog:visible").count(),1);
 const nav=dlg.locator(".thpt-r4-modal-question-nav button"),question=dlg.locator("[data-thpt-canonical-item]");
 assert((await nav.count())>=3,"Question-number navigation rendered");
 assert.equal(await question.count(),1,"Exactly one question per modal screen");
 if(chapter==="IV")assert((await question.locator("sup").count())>0,"G12 ChIV raw x^3 must be a proper superscript in Golden modal");
 const answer=dlg.locator(".thpt-g12-golden-solution");
 assert.equal(await answer.count(),1,"Same G10/G11 Golden answer/solution disclosure control");
 assert.equal(await answer.locator("summary").innerText(),"📖 Đáp án / Lời giải");
 assert.equal(await dlg.locator(".thpt-g12-golden-solution[open]").count(),0,"No answer before deliberate learner disclosure");
 await answer.locator("summary").click();
 assert.equal(await dlg.locator(".thpt-g12-golden-solution[open] .thpt-r4-formative-reveal").count(),1,
  "Public formative canonical answer available by self-chosen Golden disclosure as G10/G11");
 await answer.locator("summary").click();
 assert.equal(await dlg.locator(".thpt-g12-golden-solution[open]").count(),0,"Answer disclosure closes");
 const d6=dlg.locator(".thpt-g12-golden-d6[data-g12-golden-d6-outcome]");
 assert.equal(await d6.count(),1,"One outcome-linked D6 remediation per current PUBLIC formative item");
 await d6.locator("summary").click();
 assert.equal(await d6.locator(".thpt-g12-golden-d6-links button").count()>0,true,
  "D6 exposes a canonical return-to-question control");
 await d6.locator("summary").click();
 const id0=await question.getAttribute("data-thpt-canonical-item");
 await dlg.locator("button.thpt-r4-formative-submit").click();
 assert.equal(await dlg.locator(".thpt-g12-golden-solution[open]").count(),0,"Blank submit must not automatically reveal answer");
 await dlg.locator('textarea[aria-label="Lời giải của em"]').fill("Bài làm thử của em");
 await nav.nth(1).click();
 assert.equal(await question.count(),1);
 assert.notEqual(await question.getAttribute("data-thpt-canonical-item"),id0);
 await nav.first().click();
 assert.equal(await dlg.locator('textarea[aria-label="Lời giải của em"]').inputValue(),"Bài làm thử của em","Draft retained when navigating");
 await dlg.locator("button.thpt-r4-formative-submit").click();
 assert.equal(await dlg.locator(".thpt-g12-golden-solution[open]").count(),1,"Canonical answer auto-expanded after individual formative submit");
 assert(await dlg.locator('textarea[aria-label="Lời giải của em"]').isDisabled(),"Submitted answer locked");
 await nav.nth(1).click();
 assert.equal(await dlg.locator(".thpt-g12-golden-solution[open]").count(),0,"Other answer remains closed without learner disclosure");
 await dlg.locator("[aria-label='Đóng cửa sổ']").click();
 assert.equal(await dlg.isVisible(),false,"Modal closes by explicit control");
 // Canonical D6 item deep links still open the exact source item in modal.
 await page.evaluate(id=>{location.hash="#"+id.toLowerCase()},id0);
 await page.waitForFunction(ch=>document.querySelector('dialog[data-g12-golden-dialog="'+ch+'"]')?.open,chapter,{timeout:5000});
 assert.equal(await dlg.locator("[data-thpt-canonical-item]").getAttribute("data-thpt-canonical-item"),id0);
 await page.keyboard.press("Escape");
 assert.equal(await dlg.isVisible(),false,"Escape closes via native dialog");
 if(chapter==="III"){
  assert.equal(await hub.locator("details.g12-chiii-hub-help").count(),0,
   "No unapproved separate D6 learning panel under B09 cards");
  await card.locator("button").click();
  const currentD6=dlg.locator(".thpt-g12-golden-d6");
  await currentD6.locator("summary").click();
  assert((await currentD6.innerText()).includes("khi em chưa biết bắt đầu")||
    (await currentD6.innerText()).includes("Dùng khi em chưa biết bắt đầu"),
    "D6 tells student when to use it");
  await currentD6.locator('[data-g12-golden-d6-target="THPT-G12-B09-P01"]').click();
  assert.equal(await dlg.locator("[data-thpt-canonical-item]").getAttribute("data-thpt-canonical-item"),
   "THPT-G12-B09-P01","D6 Luyện tập lại navigates to exact canonical practice P01");
  const linked=dlg.locator(".thpt-g12-golden-d6");
  await linked.locator("summary").click();
  await linked.locator('[data-g12-golden-d6-target="THPT-G12-B09-C01"]').click();
  assert.equal(await dlg.locator("[data-thpt-canonical-item]").getAttribute("data-thpt-canonical-item"),
   "THPT-G12-B09-C01","D6 Quay lại Core navigates to exact canonical Core C01");
  await dlg.locator("[aria-label='Đóng cửa sổ']").click();
 }
 const excess=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
 assert(excess<=20,"No horizontal overflow in Golden chapter hub");
}
module.exports={verifyG12GoldenHub};
