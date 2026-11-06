"use strict";
/* G12 ChVI RELEASE browser: source-locked lesson/Golden/Q16, 390/820/1440. */
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const {verifyG12GoldenHub}=require("./test-thpt-g12-golden-modal-helper.cjs");
const base="http://127.0.0.1:8765/thpt-preview/sgk/lop-12/";
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
 for(const width of [390,820,1440]){
  const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
  const errors=[];page.on("pageerror",e=>errors.push(e.message));
  const open=async route=>{
   const response=await page.goto(base+route,{waitUntil:"networkidle",timeout:90000});
   assert(response?.ok(),"Missing built G12 ChVI route "+route);
   const spill=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
   assert(spill<=20,"G12 ChVI horizontal overflow @"+width+" "+route+" by "+spill);
  };
  try{
   await open("");
   assert.equal(await page.locator('a.thpt-r4-tile[href="chuong-vi/"]').count(),1);
   await open("chuong-vi/");
   assert.equal(await page.locator("a.thpt-r4-tile").count(),4,"Two lessons + hub + END");
   for(const [n,figures]of [[18,3],[19,2]]){
    await open("chuong-vi/bai-"+n+"/");
    const content=page.locator(".md-content");
    const text=await content.innerText();
    assert(text.includes("Vì sao cần học")&&text.includes("Hiểu bản chất")&&text.includes("Tự thử trước Core"),"PED flow B"+n);
    assert.equal(await content.locator("figure.g12-chi-figure img").count(),figures,"Original reviewed PNGs B"+n);
    assert.equal(await content.locator("details.thpt-r4-try-reveal").count(),2);
    assert.equal(await content.locator("details.thpt-r4-try-reveal[open]").count(),0,"Do not reveal Self try answers automatically");
    await content.locator("details.thpt-r4-try-reveal summary").first().click();
    assert.equal(await content.locator("details.thpt-r4-try-reveal[open]").count(),1,"Deliberate Self-try solution toggle");
    assert(!/REVIEW_CANDIDATE_NOT_PASS|SOURCE_RECEIPT|RD1_PRIVATE|NOTEBOOKLM/.test(text),"No source governance metadata shown");
    for(const image of await content.locator("figure.g12-chi-figure img").all()){
     await image.scrollIntoViewIfNeeded();
     await image.evaluate(async img=>{if(!img.complete)await new Promise((resolve,reject)=>{img.addEventListener("load",resolve,{once:true});img.addEventListener("error",reject,{once:true})});if(img.decode)await img.decode()});
     assert(await image.evaluate(img=>img.naturalWidth>0),"Original figure must render B"+n);
    }
    assert.equal(await content.locator('a[href="../luyen-tap/#b'+n+'-core"]').count(),1);
   }
   await open("chuong-vi/luyen-tap/");
   const hub=page.locator("[data-g12-chvi-hub]");
   await page.waitForFunction(()=>document.querySelector("[data-g12-chvi-hub]")?.dataset.g12ChviReady==="true",null,{timeout:25000});
   assert.equal(await hub.getAttribute("data-g12-chvi-error"),null,"Source validation error");
   await verifyG12GoldenHub(page,{chapter:"VI",selector:"[data-g12-chvi-hub]",lessons:2,groups:4,items:56,helps:14});
   await open("chuong-vi/tu-kiem-tra-chuong/");
   const root=page.locator('[data-g12-chvi-selfcheck="END"]');
   await page.waitForFunction(()=>document.querySelector("[data-g12-chvi-selfcheck]")?.dataset.g12ChviReady==="true",null,{timeout:25000});
   assert.equal(await root.locator(".g12-chv-selfcheck-item").count(),14);
   assert.equal(await root.locator(".g12-chv-quiz-jump").count(),14);
   assert.equal(await root.locator(".g12-chv-selfcheck-item:visible").count(),1);
   assert.equal(await page.locator("[data-floating-ai]").count(),0,"No Gemini on independent self-check");
   assert.equal(await root.locator(".g12-chv-answer:not([hidden])").count(),0,"No answer before Final Submit");
   const final=root.locator("[data-g12-chvi-final]");
   await final.click();
   assert(!await final.isDisabled(),"Blank Final Submit blocked");
   const inputs=await root.locator(".g12-chv-selfcheck-item textarea").all();
   await root.locator(".g12-chv-quiz-jump").first().click();
   await inputs[0].fill("Em tự giải thử câu 1");
   await final.click();
   assert(!await final.isDisabled(),"Partial Final Submit blocked");
   for(let i=0;i<inputs.length;i++){await root.locator(".g12-chv-quiz-jump").nth(i).click();await inputs[i].fill("Bài làm số "+(i+1))}
   assert.equal(await root.locator(".g12-chv-answer:not([hidden])").count(),0,"No pre-submit reveal after all drafts");
   await final.click();
   assert(await final.isDisabled(),"Final Submit one-way");
   assert.equal(await root.locator(".g12-chv-answer:not([hidden])").count(),14,"Only post-submit answer unlock");
   assert.equal(await root.locator("textarea:disabled").count(),14,"Lock drafts after submission");
   await root.locator(".g12-chv-quiz-jump").last().click();
   assert.equal(await root.locator(".g12-chv-answer:visible").count(),1,"One visible answer after Final Submit");
   assert.equal(await page.locator("[data-floating-ai]").count(),0,"No AI even after Final Submit");
   assert.equal(errors.length,0,"Unhandled browser error: "+errors.join(" | "));
   console.log("PASS G12 ChVI "+width+"px: 2 lessons/5 reviewed PNG/56 public Golden/14 D6/14 Q16 reuse, no AI/Mastery.");
  }finally{await page.close()}
 }
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});