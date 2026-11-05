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
 assert.equal(await hub.locator("[class$='-help']").count()>=helps,true,"Original recovery links remain available");
 const id="b"+({I:"01",II:"06",III:"09",IV:"11"}[chapter])+"-core";
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
 assert.equal(await dlg.locator(".thpt-g12-golden-solution:not([hidden])").count(),0,"No answer before formative submit");
 const id0=await question.getAttribute("data-thpt-canonical-item");
 await dlg.locator("button.thpt-r4-formative-submit").click();
 assert.equal(await dlg.locator(".thpt-g12-golden-solution:not([hidden])").count(),0,"Blank attempt must not reveal answer");
 await dlg.locator("textarea").fill("Bài làm thử của em");
 await nav.nth(1).click();
 assert.equal(await question.count(),1);
 assert.notEqual(await question.getAttribute("data-thpt-canonical-item"),id0);
 await nav.first().click();
 assert.equal(await dlg.locator("textarea").inputValue(),"Bài làm thử của em","Draft retained when navigating");
 await dlg.locator("button.thpt-r4-formative-submit").click();
 assert.equal(await dlg.locator(".thpt-g12-golden-solution:not([hidden])").count(),1,"Canonical answer only after submit");
 assert(await dlg.locator("textarea").isDisabled(),"Submitted answer locked");
 await nav.nth(1).click();
 assert.equal(await dlg.locator(".thpt-g12-golden-solution:not([hidden])").count(),0,"Other answer remains hidden");
 await dlg.locator("[aria-label='Đóng cửa sổ']").click();
 assert.equal(await dlg.isVisible(),false,"Modal closes by explicit control");
 // Canonical D6 item deep links still open the exact source item in modal.
 await page.evaluate(id=>{location.hash="#"+id.toLowerCase()},id0);
 await page.waitForFunction(ch=>document.querySelector('dialog[data-g12-golden-dialog="'+ch+'"]')?.open,chapter,{timeout:5000});
 assert.equal(await dlg.locator("[data-thpt-canonical-item]").getAttribute("data-thpt-canonical-item"),id0);
 await page.keyboard.press("Escape");
 assert.equal(await dlg.isVisible(),false,"Escape closes via native dialog");
 const excess=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
 assert(excess<=20,"No horizontal overflow in Golden chapter hub");
}
module.exports={verifyG12GoldenHub};
