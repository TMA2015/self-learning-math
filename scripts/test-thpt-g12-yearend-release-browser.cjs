"use strict";
/* G12 year-end R00 browser AP1–AP5/Q15/Q16. Chromium 390/820/1440 is not physical Safari P2. */
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const base="http://127.0.0.1:8765/thpt-preview/sgk/lop-12/on-tap-cuoi-nam/";
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
 for(const width of [390,820,1440]){
  const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
  const errors=[];page.on("pageerror",e=>errors.push(e.message));
  const open=async suffix=>{
   const resp=await page.goto(base+suffix,{waitUntil:"networkidle",timeout:90000});
   assert(resp?.ok(),"Missing G12 YE site route "+suffix);
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
   assert(overflow<=20,"Horizontal overflow "+suffix+" @"+width+": "+overflow);
  };
  try{
   await open("");
   assert.equal(await page.locator("a.thpt-r4-tile").count(),3,"Three separate Knowledge, Core/Practice and Self-check choices");
   assert((await page.locator(".md-content").innerText()).includes("Sáu trạm"),"Introduction clear");
   await open("tram-on-tap/");
   const main=page.locator(".md-content");
   const text=await main.innerText();
   assert(text.includes("Vì sao cần ôn lại")&&text.includes("Bản chất trước công thức")&&text.includes("Giới hạn áp dụng"),"Six concept-first station pedagogy");
   assert.equal(await main.locator("h2").filter({hasText:/Trạm [1-6] ·/}).count(),6);
   const images=main.locator("figure.g12-ye-original-figure img");
   assert.equal(await images.count(),4,"Original figure count");
   for(const image of await images.all()){
    await image.scrollIntoViewIfNeeded();
    await image.evaluate(async img=>{
     if(!img.complete)await new Promise((ok,bad)=>{img.addEventListener("load",ok,{once:true});img.addEventListener("error",bad,{once:true})});
     if(img.decode)await img.decode();
    });
    assert(await image.evaluate(img=>img.naturalWidth>0),"Source image must decode");
   }
   const tries=main.locator("details.g12-xp-first-try");
   assert.equal(await tries.count(),6);
   assert.equal(await main.locator("details.g12-xp-first-try[open]").count(),0,"First-try solutions closed by default");
   await tries.first().locator("summary").click();
   assert.equal(await main.locator("details.g12-xp-first-try[open]").count(),1,"Voluntary first try disclosure");
   assert(!/NOTEBOOKLM_PENDING|RELEASE_AUTHORIZATION|CONTENT_READY: NO|REVIEW_RECEIPT_BLOB/.test(text),"No authoring QA metadata in student page");
   await open("luyen-tap/");
   const hub=page.locator("[data-g12-ye-practice]");
   await page.waitForFunction(()=>document.querySelector("[data-g12-ye-practice]")?.dataset.g12YePracticeReady==="true",null,{timeout:25000});
   assert.equal(await hub.locator(".thpt-r4-practice-lesson[data-thpt-grade='12']").count(),1,"Same Golden grade-12 lesson header");
   assert.equal(await hub.locator(".thpt-r4-practice-card[data-thpt-grade='12']").count(),4,"Four separate Golden role cards");
   const purple=await hub.locator(".thpt-r4-practice-card").first().evaluate(x=>getComputedStyle(x).getPropertyValue("--thpt-grade-accent").trim());
   assert.equal(purple,"#8554c1","Correct established grade-12 Golden purple");
   const roles={"MCQ_CORE":3,"MCQ_PRACTICE":7,"MCQ_APPLICATION":5,"WRITTEN":16};
   for(const [role,count]of Object.entries(roles)){
    await hub.locator('[data-g12-ye-open="'+role+'"]').click();
    const modal=page.locator("dialog.thpt-r4-practice-dialog[open]");
    await modal.waitFor({state:"visible"});
    assert.equal(await modal.locator("[data-thpt-canonical-item]").count(),1,"Only one source-locked PUBLIC formative question on screen");
    assert.equal(await modal.locator(".g12-xp-jump-button").count(),count,"Original role placement "+role);
    assert.equal(await modal.locator(".g12-xp-reveal").innerText(),"","No answer/rubric before item submit");
    if(role==="MCQ_CORE"){
     await modal.locator(".g12-ye-options input[type=radio]").first().check();
     await modal.locator(".g12-xp-submit").click();
     assert((await modal.locator(".g12-xp-reveal").innerText()).includes("Đáp án:"),"Only after voluntary MCQ submit");
     await modal.locator(".g12-xp-next").click();
     assert.equal(await modal.locator(".g12-xp-reveal").innerText(),"","Next MCQ solution remains hidden");
    }else if(role==="WRITTEN"){
     await modal.locator("textarea.g12-xp-input").fill("Em trình bày cách giải và kiểm điều kiện.");
     await modal.locator(".g12-xp-submit").click();
     assert((await modal.locator(".g12-xp-reveal").innerText()).includes("Rubric tự đối chiếu /5"),"Reviewed Written rubric only after submit");
    }
    await modal.locator(".g12-xp-close").click();
   }
   assert.equal(await page.locator(".floating-ai-launcher:visible").count()>0,true,"Floating AI allowed on PUBLIC formative route");
   await open("tu-kiem-tra/");
   const root=page.locator("[data-g12-ye-selfcheck]");
   await page.waitForFunction(()=>document.querySelector("[data-g12-ye-selfcheck]")?.dataset.g12YeReady==="true",null,{timeout:25000});
   const nav=root.locator("button.g12-xp-jump-button");
   assert.equal(await nav.count(),31,"All 31 canonical placements, not duplicate questions");
   assert.equal(await root.locator(".g12-ye-question").count(),1,"Exactly one question on screen");
   assert.equal(await root.locator(".g12-ye-reveal").count(),0,"No answer or rubric before Final Submit");
   assert.equal(await root.locator(".g12-ye-options input[type=radio]").count(),4,"Four public MCQ choices");
   assert.equal(await page.locator(".floating-ai-launcher:visible").count(),0,"No Gemini Tutor on self-check route");
   await root.locator("button[data-g12-ye-final]").click();
   assert((await root.locator(".g12-xp-end-message").innerText()).includes("đủ 31 câu"),"Incomplete Final Submit blocked");
   assert.equal(await root.locator(".g12-ye-reveal").count(),0,"Fail closed for incomplete attempt");
   for(let i=0;i<31;i++){
    await root.locator("button.g12-xp-jump-button").nth(i).click();
    assert.equal(await root.locator(".g12-ye-question").count(),1,"One question screen "+i);
    if(i<15){
     await root.locator(".g12-ye-options input[type=radio]").first().check();
    }else{
     await root.locator("textarea.g12-xp-end-input").fill("Em tự làm câu "+(i+1)+" và ghi lập luận của mình.");
    }
    assert.equal(await root.locator(".g12-ye-reveal").count(),0,"Cannot see solution before Final Submit "+i);
   }
   await root.locator("button[data-g12-ye-final]").click();
   assert((await root.locator(".g12-xp-end-message").innerText()).includes("Đã Final Submit"),"Final submit must complete after all drafts");
   assert.equal(await root.locator(".g12-ye-reveal").count(),1);
   assert((await root.locator(".g12-ye-reveal").innerText()).includes("Rubric tự đối chiếu /5"),"Original Written rubric only after submission");
   await root.locator("button.g12-xp-jump-button").first().click();
   assert((await root.locator(".g12-ye-reveal").innerText()).includes("Đáp án: "),"MCQ answer unlocked only after Final Submit");
   assert.equal(await root.locator("button[data-g12-ye-final]").isDisabled(),true,"One immutable Final Submit");
   assert.equal(await page.locator(".floating-ai-launcher:visible").count(),0,"No Gemini even after Final Submit");
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
   assert(overflow<=20,"Self-check horizontal overflow @"+width+": "+overflow);
   assert.equal(errors.length,0,"No browser runtime errors: "+errors.join(" | "));
   console.log("PASS G12 year-end R00 390/820/1440 viewport="+width+" 6 stations/4 PNG/6 first tries/31 Final Submit/Q16");
  }finally{await page.close()}
 }
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
