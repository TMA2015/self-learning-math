"use strict";
/* G12 ChIII RELEASE P1 R4: 2 lesson pages, chapter-wide public Core/Practice,
 * 3 source-locked SVGs and Q16 Final Submit on phone/tablet/desktop.
 */
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const base="http://127.0.0.1:8765/thpt-preview/sgk/lop-12/";
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
    await open("chuong-iii/");
    assert.equal(await page.locator('a.thpt-r4-tile').count(),4,"2 lessons + hub + END");
    assert.equal(await page.locator('a.thpt-r4-tile[href="luyen-tap/"]').count(),1);
    for(const [n,figs]of [[9,2],[10,1]]){
     await open("chuong-iii/bai-"+n+"/");
     const content=page.locator(".md-content");
     assert.equal(await content.locator(".g12-chiii-item").count(),0,"No Core/Practice bank on Knowledge page");
     const text=await content.innerText();
     assert(text.includes("Vì sao cần học"),"Motivation missing B"+n);
     assert(text.includes("Tự thử trước Core"),"First try missing B"+n);
     const titles=await content.locator("h3").allTextContents();
     assert.equal(titles.filter(t=>/^[1-6]\.\s/.test(t.trim())).length,6,"Six readable knowledge sections B"+n);
     assert(!/G12-CHIII-B(?:09|10)-O\d{2}|\b(?:Outcome|WHY|FORMAL|PREREQUISITE_CONFIRMED|EX-G12|PUBLIC RD0|RD1)\b|Hình D5-/.test(text),"Internal author IDs must not appear to learners B"+n);
     const images=content.locator("figure.g12-chi-figure img");
     assert.equal(await images.count(),figs,"Original D5 figure count B"+n);
     for(const img of await images.all()){
      await img.scrollIntoViewIfNeeded();
      await page.waitForFunction(()=>[...document.querySelectorAll("figure.g12-chi-figure img")].every(x=>x.complete&&x.naturalWidth>0),null,{timeout:12000});
     }
     assert.equal(await content.locator('a[href="../luyen-tap/#b'+String(n).padStart(2,"0")+'-core"]').count(),1);
     assert.equal(await content.locator('a[href="../luyen-tap/#b'+String(n).padStart(2,"0")+'-practice"]').count(),1);
    }
    await open("chuong-iii/luyen-tap/");
    const hub=page.locator("[data-g12-chiii-hub]");
    await page.waitForFunction(()=>document.querySelector("[data-g12-chiii-hub]")?.dataset.g12ChiiiReady==="true",null,{timeout:25000});
    assert.equal(await hub.getAttribute("data-g12-chiii-error"),null,"Unreviewed fallback blocked");
    assert.equal(await hub.locator(".g12-chiii-hub-lesson").count(),2);
    assert.equal(await hub.locator(".g12-chiii-hub-group").count(),4);
    assert.equal(await hub.locator(".g12-chiii-item").count(),48,"48 original PUBLIC canonical items, never clones");
    assert.equal(await hub.locator(".g12-chiii-help").count(),12,"All D6 help");
    assert(!/\b(?:Outcome|PUBLIC RD0|RD1)\b|Hướng dẫn D6/.test(await hub.innerText()),"Internal metadata must not appear in Practice UI");
    assert.equal(await hub.locator(".g12-chiii-answer:not([hidden])").count(),0);
    for(const [n,id]of [[9,"B09"],[10,"B10"]]){
     const section=hub.locator('[data-g12-chiii-hub-lesson="'+id+'"]');
     assert.equal(await section.locator(".g12-chiii-item").count(),24);
     assert.equal(await section.locator(".g12-chiii-help").count(),6);
    }
    const core=hub.locator("#b09-core");
    assert.equal(await core.getAttribute("open"),null);
    await core.locator(":scope > summary").click();
    assert.notEqual(await core.getAttribute("open"),null);
    const item=core.locator(".g12-chiii-item").first();
    await item.locator("button.g12-chiii-submit").click();
    assert.equal(await hub.locator(".g12-chiii-answer:not([hidden])").count(),0,"Empty formative submission should not unlock");
    await item.locator("textarea").fill("Bài tự giải của em");
    await item.locator("button.g12-chiii-submit").click();
    assert.equal(await hub.locator(".g12-chiii-answer:not([hidden])").count(),1,"Only one submitted answer unlocks");
    assert(await item.locator("textarea").isDisabled());
    const help=hub.locator("#b09-help");
    await help.locator(":scope > summary").click();
    // D6 help has its own nested <details>; a learner must expand it before using the return link.
    const firstHelp=help.locator("details.g12-chiii-help").first();
    await firstHelp.locator(":scope > summary").click();
    assert.notEqual(await firstHelp.getAttribute("open"),null,"D6 detail opens before navigation");
    const ret=firstHelp.locator("a.g12-chiii-return[href^='#']").first();
    const hash=await ret.getAttribute("href");assert(hash?.startsWith("#"));
    await ret.click();
    assert(await hub.locator('[id="'+hash.slice(1)+'"]').isVisible(),"D6 directs to canonical Core item");
    await open("chuong-iii/luyen-tap/?direct=1#b10-practice");
    await page.waitForFunction(()=>document.querySelector("[data-g12-chiii-hub]")?.dataset.g12ChiiiReady==="true",null,{timeout:25000});
    assert.notEqual(await page.locator("#b10-practice").getAttribute("open"),null,"Deep link must expand correct Practice group");
    assert.equal(await page.locator(".g12-chiii-answer:not([hidden])").count(),0);
    await open("chuong-iii/tu-kiem-tra-chuong/");
    const end=page.locator("[data-g12-chiii-selfcheck]");
    await page.waitForFunction(()=>document.querySelector("[data-g12-chiii-selfcheck]")?.dataset.g12ChiiiReady==="true",null,{timeout:25000});
    const questions=end.locator(".g12-chiii-selfcheck-item");
    assert.equal(await questions.count(),12);
    assert(!/\b(?:PUBLIC RD0|RD1|Outcome)\b/.test(await page.locator(".md-content").innerText()),"Internal assessment metadata must not appear");
    assert.equal(new Set(await questions.evaluateAll(xs=>xs.map(x=>x.dataset.canonicalItem))).size,12);
    assert.equal(await end.locator(".g12-chiii-answer:not([hidden])").count(),0);
    assert.equal(await end.locator(".g12-chiii-help").count(),0,"No hint/D6 before Final Submit");
    const submit=end.locator("[data-g12-chiii-final]");
    await submit.click();assert.equal(await end.locator(".g12-chiii-answer:not([hidden])").count(),0);
    await questions.first().locator("textarea").fill("Thử một câu");
    await submit.click();assert.equal(await end.locator(".g12-chiii-answer:not([hidden])").count(),0);
    for(const [i,ta]of (await questions.locator("textarea").all()).entries())await ta.fill("Bài làm "+(i+1));
    await submit.click();assert(await submit.isDisabled());
    assert.equal(await end.locator(".g12-chiii-answer:not([hidden])").count(),12);
    assert.equal(await questions.locator("textarea:disabled").count(),12);
    assert.equal(await end.locator(".g12-chiii-return").count(),12,"D6 returns only post Final Submit");
    assert(!errors.length,"Unexpected JS errors at "+width+": "+errors.slice(0,2));
    console.log("PASS G12 ChIII "+width+"px: 2 lessons, 3 D5 SVG, 48 PUBLIC Core/Practice, 12 D6, protected Final Submit 12/12");
   }finally{await page.close()}
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exitCode=1});
