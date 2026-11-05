"use strict";
/* G12 ChIV RELEASE P1 R4: 3 lesson pages, chapter-wide public Core/Practice,
 * 6 source-locked PNGs and Q16 Final Submit on phone/tablet/desktop.
 */
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const base="http://127.0.0.1:8765/thpt-preview/sgk/lop-12/";
const {verifyG12GoldenHub}=require("./test-thpt-g12-golden-modal-helper.cjs");
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [390,820,1440]){
   const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
   const errors=[];page.on("pageerror",e=>errors.push(e.message));
   const open=async route=>{
    const r=await page.goto(base+route,{waitUntil:"networkidle",timeout:90000});
    assert(r?.ok(),"Route not found: "+route);
    const spill=await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
    assert(spill<=20,"Horizontal overflow "+route+" at "+width+": "+spill);
   };
   try{
    await open("chuong-iv/");
    assert.equal(await page.locator('a.thpt-r4-tile').count(),5,"3 lessons + hub + END");
    assert.equal(await page.locator('a.thpt-r4-tile[href="luyen-tap/"]').count(),1);
    for(const [n,figs]of [[11,1],[12,2],[13,3]]){
     await open("chuong-iv/bai-"+n+"/");
     const content=page.locator(".md-content");
     assert.equal(await content.locator(".g12-chiv-item").count(),0,"No Core/Practice bank on Knowledge page");
     const text=await content.innerText();
     assert(text.includes("Vì sao cần học"),"Motivation missing B"+n);
     assert(text.includes("Tự thử trước Core"),"First try missing B"+n);
     const titles=await content.locator("h3").allTextContents();
     assert.equal(titles.filter(t=>/^[1-8]\.\s/.test(t.trim())).length,n===13?8:7,"Source-locked knowledge outcomes B"+n);
     assert(!/G12-CHIV-B(?:11|12|13)-O\d{2}|\b(?:Outcome|WHY|FORMAL|PREREQUISITE_CONFIRMED|EX-G12|PUBLIC RD0|RD1)\b|Hình D5-/.test(text),"Internal author IDs must not appear to learners B"+n);
     const images=content.locator("figure.g12-chi-figure img");
     assert.equal(await images.count(),figs,"Original D5 figure count B"+n);
     for(const img of await images.all()){
      await img.scrollIntoViewIfNeeded();
      await page.waitForFunction(()=>[...document.querySelectorAll("figure.g12-chi-figure img")].every(x=>x.complete&&x.naturalWidth>0),null,{timeout:12000});
     }
     assert.equal(await content.locator('a[href="../luyen-tap/#b'+String(n).padStart(2,"0")+'-core"]').count(),1);
     assert.equal(await content.locator('a[href="../luyen-tap/#b'+String(n).padStart(2,"0")+'-practice"]').count(),1);
    }
    await open("chuong-iv/luyen-tap/");
    await verifyG12GoldenHub(page,{chapter:"IV",selector:"[data-g12-chiv-hub]",lessons:3,groups:6,items:88,helps:22});
    await open("chuong-iv/tu-kiem-tra-chuong/");
    const end=page.locator("[data-g12-chiv-selfcheck]");
    await page.waitForFunction(()=>document.querySelector("[data-g12-chiv-selfcheck]")?.dataset.g12ChivReady==="true",null,{timeout:25000});
    const questions=end.locator(".g12-chiv-selfcheck-item");
    assert.equal(await questions.count(),22);
     assert.equal(await end.locator(".g12-chiv-quiz-jump").count(),22,"22 Golden numbered jumps");
     assert.equal(await end.locator(".g12-chiv-selfcheck-item:visible").count(),1,"One question per screen");
     assert.equal(await end.locator(".g12-chiv-quiz-progress").innerText(),"Câu 1 / 22 · Chưa nộp");
    assert(!/\b(?:PUBLIC RD0|RD1|Outcome)\b/.test(await page.locator(".md-content").innerText()),"Internal assessment metadata must not appear");
    assert.equal(new Set(await questions.evaluateAll(xs=>xs.map(x=>x.dataset.canonicalItem))).size,22);
    assert.equal(await end.locator(".g12-chiv-answer:not([hidden])").count(),0);
    assert.equal(await end.locator(".g12-chiv-help").count(),0,"No hint/D6 before Final Submit");
    const submit=end.locator("[data-g12-chiv-final]");
    await submit.click();assert.equal(await end.locator(".g12-chiv-answer:not([hidden])").count(),0);
    await questions.first().locator("textarea").fill("Thử một câu");
    await submit.click();assert.equal(await end.locator(".g12-chiv-answer:not([hidden])").count(),0);
    for(const [i,ta]of (await questions.locator("textarea").all()).entries()){
      await end.locator(".g12-chiv-quiz-jump").nth(i).click();
      assert.equal(await end.locator(".g12-chiv-selfcheck-item:visible").count(),1,"One visible END question");
      await ta.fill("Bài làm "+(i+1));
     }
     await end.locator(".g12-chiv-quiz-jump").first().click();
     assert.equal(await questions.first().locator("textarea").inputValue(),"Bài làm 1","Preserve draft across question navigation");
    await submit.click();assert(await submit.isDisabled());
    assert.equal(await end.locator(".g12-chiv-answer:not([hidden])").count(),22);
    assert.equal(await questions.locator("textarea:disabled").count(),22);
     assert.equal(await end.locator(".g12-chiv-selfcheck-item:visible").count(),1,"One END question after Final Submit");
     assert.equal(await end.locator(".g12-chiv-answer:visible").count(),1,"Show only selected submitted answer");
     await end.locator(".g12-chiv-quiz-jump").last().click();
     assert.equal(await end.locator(".g12-chiv-answer:visible").count(),1,"Answer follows numbered navigation");
    assert.equal(await end.locator(".g12-chiv-return").count(),22,"D6 returns only post Final Submit");
    assert(!errors.length,"Unexpected JS errors at "+width+": "+errors.slice(0,2));
    console.log("PASS G12 ChIV "+width+"px: 3 lessons, 6 original D5 PNG, 88 PUBLIC Core/Practice, 22 D6, protected Final Submit 22/22");
   }finally{await page.close()}
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exitCode=1});
