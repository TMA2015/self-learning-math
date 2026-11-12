"use strict";
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const {verifyModelBLesson}=require("./test-thpt-g10-model-b-browser-helper.cjs");

(async()=>{const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});try{for(const [width,height] of [[390,844],[820,1180],[1440,900]]){const page=await browser.newPage({viewport:{width,height}});try{for(const n of [5,6]){
const response=await page.goto("http://127.0.0.1:8765/thpt-preview/sgk/chuong-iii/bai-"+n+"/",{waitUntil:"domcontentloaded"});assert(response?.ok());if(!(await verifyModelBLesson(page,{n,chapter:"iii",tries:5,helps:2,images:n===5?["THPT_G10_B05_SEMICIRCLE_120_D5_R01.svg"]:["THPT_G10_B06_COSINE_AREA_TRIANGLE_D5_R01.svg","G10_B06_SURVEY_RIGHT_TRIANGLE_R01.svg"]}))){
assert.equal(await page.locator("[data-thpt-help-id]").count(),2);
const tries=page.locator('details[data-ped-first-try="1"]');
assert.equal(await tries.count(),5,"Five independently reviewed concept-first items per lesson");
assert.equal(await page.locator('details[data-ped-first-try="1"][open]').count(),0,"First Try answer cannot be visible by default");
for(let k=0;k<5;k++){
 const id="THPT-G10-CHIII-TRY"+String((n===5?0:5)+k+1).padStart(2,"0");
 assert.equal(await tries.nth(k).getAttribute("data-thpt-first-try-id"),id,"First Try source ID/order drift");
}
await tries.first().locator("summary").click();
assert(await tries.first().getAttribute("open")!==null,"Learner cannot open voluntary comparison");
await tries.first().locator("summary").click();
assert(await tries.first().getAttribute("open")===null,"Learner cannot close comparison");
assert.equal(await page.locator("h2").filter({hasText:"Trước khi học"}).count(),1,"Concept-first must precede formulas");
assert(await page.locator("h2").filter({hasText:"Trước khi học"}).first().evaluate(el=>el.getBoundingClientRect().top>=0||el.isConnected),"Concept-first unavailable");

const image=page.locator(".thpt-r4-probability-figure img");assert.equal(await image.count(),1);await image.scrollIntoViewIfNeeded();await page.waitForFunction(()=>[...document.querySelectorAll(".thpt-r4-probability-figure img")].every(x=>x.complete&&x.naturalWidth>0),{timeout:15000});
const frame=await image.evaluate(el=>({w:el.getBoundingClientRect().width,p:el.parentElement.getBoundingClientRect().width}));assert(frame.w<=frame.p+2,"SVG must fit viewport");await page.locator("[data-thpt-help-id] summary").first().click();assert(await page.locator("[data-thpt-help-id]").first().getAttribute("open")!==null);

}
const id="THPT-G10-B0"+n+"-C01";const res=await page.goto("http://127.0.0.1:8765/thpt-preview/sgk/chuong-iii/luyen-tap/?item="+id,{waitUntil:"domcontentloaded"});assert(res?.ok());const dlg=page.locator("dialog.thpt-r4-practice-dialog");await dlg.waitFor({state:"visible",timeout:12000});assert.equal(await dlg.locator("[data-thpt-canonical-item]").first().getAttribute("data-thpt-canonical-item"),id);assert.equal(await dlg.locator('.thpt-r4-formative-choice-group input[type="radio"]').count(),4);
assert.equal(await dlg.locator("details[open]").count(),0,"Answer/hint must stay collapsed");await page.locator("[data-thpt-modal-close]").click();
}
const short="THPT-G10-B05-P02";await page.goto("http://127.0.0.1:8765/thpt-preview/sgk/chuong-iii/luyen-tap/?item="+short,{waitUntil:"domcontentloaded"});const dlg=page.locator("dialog.thpt-r4-practice-dialog");await dlg.waitFor({state:"visible"});assert.equal(await dlg.locator("[data-thpt-canonical-item]").first().getAttribute("data-thpt-canonical-item"),short);assert.equal(await dlg.locator('.thpt-r4-formative-choice-group input[type="radio"]').count(),0,"Short-response must not be converted to MCQ");assert.equal(await dlg.locator("details[open]").count(),0);
const check=await page.goto("http://127.0.0.1:8765/thpt-preview/sgk/chuong-iii/tu-kiem-tra-chuong/",{waitUntil:"domcontentloaded"});assert(check?.ok());await page.locator('[data-g10-chapter-selfcheck="CHIII"] .g10sc-progress').waitFor();assert(!(await page.locator('[data-g10-chapter-selfcheck="CHIII"]').innerText()).includes("Đáp án:"),"ChIII pre-submit answer leak");
}finally{await page.close()}}console.log("PASS G10 ChIII FULL R03 browser 390/820/1440: 10 source-locked First Try, collapsed answers, original SVGs/4 D6, Golden MCQ/short response and Q16");}finally{await browser.close()}})().catch(e=>{console.error(e.stack||e);process.exit(1)});
