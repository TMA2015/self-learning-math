"use strict";
/* Browser AP1–AP5/Q15/Q16 for two reviewed G12 SGK experience supplements.
 * Simulated Chromium viewports are not physical Safari P2.
 */
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const base="http://127.0.0.1:8765/thpt-preview/sgk/lop-12/bo-sung/";
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
 for(const width of [390,820,1440]){
  const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
  const errs=[];page.on("pageerror",e=>errs.push(e.message));
  const open=async route=>{
   const r=await page.goto(base+route,{waitUntil:"networkidle",timeout:90000});
   assert(r?.ok(),"Missing site route "+route);
   const spill=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
   assert(spill<=20,"Horizontal overflow "+route+" @"+width+" by "+spill);
  };
  try{
   await open("");
   assert.equal(await page.locator("a.thpt-r4-tile").count(),4,"2 lessons + public formative + END");
   for(const [n,figures]of [[1,3],[2,2]]){
    await open("trai-nghiem-"+n+"/");
    const body=page.locator(".md-content");
    const text=await body.innerText();
    assert(text.includes("Vì sao cần học")&&text.includes("Bản chất trước công thức")&&text.includes("Tự thử trước Core"),"Concept-first learning "+n);
    assert.equal(await body.locator("figure.g12-xp-original-figure img").count(),figures,"Five original PNG placement");
    assert.equal(await body.locator("details.g12-xp-first-try").count(),2);
    assert.equal(await body.locator("details.g12-xp-first-try[open]").count(),0,"No automatic first-try answer");
    assert.equal(await body.locator("h3").count()>=5,true,"Five outcome examples");
    for(const img of await body.locator("figure.g12-xp-original-figure img").all()){
     await img.scrollIntoViewIfNeeded();
     await img.evaluate(async x=>{if(!x.complete)await new Promise((resolve,reject)=>{x.addEventListener("load",resolve,{once:true});x.addEventListener("error",reject,{once:true})});if(x.decode)await x.decode()});
     assert(await img.evaluate(x=>x.naturalWidth>0),"Original PNG must decode");
    }
    await body.locator("details.g12-xp-first-try summary").first().click();
    assert.equal(await body.locator("details.g12-xp-first-try[open]").count(),1,"Voluntary self-try reveal");
    assert(!/RELEASE_AUTHORIZATION: NO|CONTENT_READY: NO|Q18_REVIEW_RECEIPT|NOTEBOOKLM/.test(text),"Author metadata hidden from learners");
   }
   await open("luyen-tap-trai-nghiem/");
   const root=page.locator("[data-g12-xp-practice]");
   await page.waitForFunction(()=>document.querySelector("[data-g12-xp-practice]")?.dataset.g12XpReady==="true",null,{timeout:25000});
   assert.equal(await root.locator("[data-g12-xp-open]").count(),8,"4 groups per 2 activities");
   assert.equal(await root.locator(".thpt-r4-practice-lesson[data-thpt-grade='12']").count(),2,"Both experiences reuse normal grade-12 Golden lessons");
   assert.equal(await root.locator(".thpt-r4-practice-card[data-thpt-grade='12']").count(),8,"Eight Golden role cards, not independent plain white tile kit");
   assert.equal(await root.locator(".g12-xp-role-card").count(),0,"Legacy card design removed from live page");
   const purple=await root.locator(".thpt-r4-practice-card[data-thpt-grade='12']").first().evaluate(x=>getComputedStyle(x).getPropertyValue("--thpt-grade-accent").trim());
   assert.equal(purple,"#8554c1","Correct established G12 Golden purple palette");

   await root.locator('[data-g12-xp-open="EXP01-CORE"]').click();
   const dialog=page.locator("dialog.thpt-r4-practice-dialog[open]");
   await dialog.waitFor({state:"visible"});
   assert.equal(await dialog.locator("[data-thpt-canonical-item]").count(),1,"Golden one question per modal");
   assert.equal(await dialog.locator("h3.g12-xp-question-stem").count(),1,"Only active public question stem to AI");
   assert.equal(await dialog.locator(".g12-xp-jump-button").count(),5);
   assert.equal(await dialog.locator(".g12-xp-reveal").innerText(),"","No solution before formative Submit");
   await dialog.locator("textarea.g12-xp-input").fill("Em tính đạo hàm để tự so sánh.");
   await dialog.locator("button.g12-xp-submit").click();
   assert((await dialog.locator(".g12-xp-reveal").innerText()).length>10,"Public solution voluntarily unlocked");
   await dialog.locator("button.g12-xp-next").click();
   assert.equal(await dialog.locator("[data-thpt-canonical-item]").count(),1,"Second question without stack");
   assert.equal(await dialog.locator(".g12-xp-reveal").innerText(),"","Next question solution stays hidden");
   await dialog.locator("button.g12-xp-close").click();
   assert.equal(await dialog.count(),0,"Modal should close");
   await open("tu-kiem-tra-trai-nghiem/");
   const end=page.locator("[data-g12-xp-selfcheck]");
   await page.waitForFunction(()=>document.querySelector("[data-g12-xp-selfcheck]")?.dataset.g12XpReady==="true",null,{timeout:25000});
   assert.equal(await end.locator(".g12-xp-jump-button").count(),10);
   assert.equal(await end.locator(".g12-xp-end-card").count(),1,"Exactly one END question rendered");
   assert.equal(await page.locator("[data-floating-ai]").count(),0,"Gemini forbidden on END route");
   assert.equal(await end.locator(".g12-xp-end-answer:not([hidden])").count(),0,"No key before Final Submit");
   const final=end.locator("[data-g12-xp-final]");
   await final.click();assert.equal(await end.locator(".g12-xp-end-answer:not([hidden])").count(),0,"Blank final blocked");
   for(let i=0;i<10;i++){
    await end.locator(".g12-xp-jump-button").nth(i).click();
    await end.locator("textarea.g12-xp-end-input").fill("Lời giải tự làm của câu "+(i+1));
   }
   await end.locator(".g12-xp-jump-button").first().click();
   assert.equal(await end.locator(".g12-xp-end-answer:not([hidden])").count(),0,"No early results after 10 drafts");
   await final.click();
   assert(await final.isDisabled(),"Final Submit one-way");
   assert.equal(await end.locator(".g12-xp-end-answer:not([hidden])").count(),1,"Only current answer visible after Final Submit");
   await end.locator(".g12-xp-jump-button").last().click();
   assert((await end.locator(".g12-xp-end-answer:not([hidden])").innerText()).length>10,"Last answer only after Final Submit");
   assert.equal(await page.locator("[data-floating-ai]").count(),0,"Never AI on END");
   assert.equal(errs.length,0,"Unexpected browser error: "+errs.join(" / "));
   console.log("PASS G12 EXP @"+width+"px: 2 original lessons, 5 PNG, 40 canonical public/modal, 10 D6, 10 END reuse, Q16 no AI/Mastery.");
  }finally{await page.close()}
 }
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
