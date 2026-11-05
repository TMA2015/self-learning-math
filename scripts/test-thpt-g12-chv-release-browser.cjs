"use strict";
/* RELEASE G12 ChV R01 browser gate: original B14–B17 source, Golden R4, 96 PUBLIC
 * canonical items, optional B14 O07 only after B17, Final Submit before any answer.
 */
const assert=require("node:assert/strict");
const {chromium}=require("playwright");
const base="http://127.0.0.1:8765/thpt-preview/sgk/lop-12/";
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [390,820,1440]){
   const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
   const errors=[];
   page.on("pageerror",e=>errors.push(e.message));
   const open=async route=>{
    const response=await page.goto(base+route,{waitUntil:"networkidle",timeout:90000});
    assert(response?.ok(),"Missing built route "+route);
    const spill=await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
    assert(spill<=20,"Horizontal overflow "+route+" at "+width+": "+spill);
   };
   try{
    await open("chuong-v/");
    assert.equal(await page.locator("a.thpt-r4-tile").count(),7,"Four lessons + optional + hub + end");
    assert.equal(await page.locator('a.thpt-r4-tile[href="mo-rong-sau-bai-17/"]').count(),1);
    for(const [n,figCount,outcomes,tries]of [[14,1,6,1],[15,2,7,2],[16,2,5,2],[17,1,5,2]]){
     await open("chuong-v/bai-"+n+"/");
     const content=page.locator(".md-content");
     assert.equal(await content.locator(".g12-chv-item").count(),0,"No practice answer bank on Knowledge pages");
     const text=await content.innerText();
     assert(text.includes("Vì sao cần học"),"Missing learning motivation B"+n);
     assert(text.includes("Tự thử"),"Missing First Try B"+n);
     assert.equal((await content.locator("h3").allTextContents()).filter(t=>/^[1-9]\.\s/.test(t.trim())).length,outcomes,"Outcome sections B"+n);
     assert.equal(await content.locator("figure.g12-chi-figure img").count(),figCount,"Original PNG B"+n);
     assert(!/G12-CHV-B(?:14|15|16|17)-O\d{2}|\b(?:Outcome|PUBLIC RD0|RD1|EX-G12|FORMAL)\b/.test(text),"Author metadata visible B"+n);
     for(const img of await content.locator("figure.g12-chi-figure img").all()){
      await img.scrollIntoViewIfNeeded();
      await page.waitForFunction(()=>[...document.querySelectorAll("figure.g12-chi-figure img")].every(x=>x.complete&&x.naturalWidth>0),null,{timeout:15000});
     }
     assert.equal(await content.locator('a[href="../luyen-tap/#b'+n+'-core"]').count(),1);
     assert.equal(await content.locator('a[href="../luyen-tap/#b'+n+'-practice"]').count(),1);
     assert(tries>=1);
    }
    await open("chuong-v/mo-rong-sau-bai-17/");
    let extensionText=await page.locator(".md-content").innerText();
    assert(extensionText.includes("không phải kiến thức Core bắt buộc"));
    assert(extensionText.includes("Bài 17"));
    assert.equal(await page.locator('a[href="../luyen-tap/#b14-optional"]').count()>0,true);
    await open("chuong-v/luyen-tap/");
    const hub=page.locator("[data-g12-chv-hub]");
    await page.waitForFunction(()=>document.querySelector("[data-g12-chv-hub]")?.dataset.g12ChvReady==="true",null,{timeout:25000});
    assert.equal(await hub.getAttribute("data-g12-chv-error"),null,"No source mismatch runtime fallback");
    assert.equal(await hub.locator(".g12-chv-hub-lesson").count(),5,"Four lessons + post-B17 optional");
    assert.equal(await hub.locator(".g12-chv-hub-group").count(),9);
    assert.equal(await hub.locator(".g12-chv-item").count(),96);
    assert.equal(await hub.locator(".g12-chv-help").count(),24);
    for(const [lesson,count,helps]of [["B14",24,6],["B15",28,7],["B16",20,5],["B17",20,5]]){
     const section=hub.locator('[data-g12-chv-hub-lesson="'+lesson+'"]');
     assert.equal(await section.locator(".g12-chv-item").count(),count,"Mandatory Core/Practice "+lesson);
     assert.equal(await section.locator(".g12-chv-help").count(),helps);
    }
    const optional=hub.locator('[data-g12-chv-hub-lesson="B14-OPTIONAL"]');
    assert.equal(await optional.locator(".g12-chv-item").count(),4,"Four original optional items separate");
    assert.equal(await optional.locator(".g12-chv-help").count(),1);
    assert.equal(await hub.locator(".g12-chv-answer:not([hidden])").count(),0);
    const core=hub.locator("#b14-core");
    const layout=await core.locator(":scope > summary").evaluate(el=>{
     const st=getComputedStyle(el),a=[...el.children].map(x=>x.getBoundingClientRect());
     return {display:st.display,direction:st.flexDirection,stack:a.every((r,i)=>!i||r.top>=a[i-1].bottom-1),within:a.every(r=>r.right<=el.getBoundingClientRect().right+2)};
    });
    assert.equal(layout.display,"flex");
    assert.equal(layout.direction,"column");
    assert(layout.stack&&layout.within,"Golden labels/count/actions do not overlap");
    await core.locator(":scope > summary").click();
    const item=core.locator(".g12-chv-item").first();
    await item.locator("button.g12-chv-submit").click();
    assert.equal(await hub.locator(".g12-chv-answer:not([hidden])").count(),0,"No response without an attempt");
    await item.locator("textarea").fill("Tự làm");
    await item.locator("button.g12-chv-submit").click();
    assert.equal(await hub.locator(".g12-chv-answer:not([hidden])").count(),1,"Only own formative answer unlocks");
    assert(await item.locator("textarea").isDisabled());
    await open("chuong-v/luyen-tap/#b14-optional");
    await page.waitForFunction(()=>document.querySelector("[data-g12-chv-hub]")?.dataset.g12ChvReady==="true",null,{timeout:25000});
    assert.notEqual(await page.locator("#b14-optional").getAttribute("open"),null,"Optional deep-link opens after B17");
    await open("chuong-v/tu-kiem-tra-chuong/");
    const end=page.locator("[data-g12-chv-selfcheck]");
    await page.waitForFunction(()=>document.querySelector("[data-g12-chv-selfcheck]")?.dataset.g12ChvReady==="true",null,{timeout:25000});
    assert.equal(await end.locator(".g12-chv-selfcheck-item").count(),24);
    assert.equal(await end.locator(".g12-chv-quiz-jump").count(),24);
    assert.equal(await end.locator('.g12-chv-selfcheck-item[data-optional="true"]').count(),1);
    assert.equal(await end.locator('.g12-chv-selfcheck-item[data-optional="false"]').count(),23);
    assert.equal(await end.locator(".g12-chv-selfcheck-item:visible").count(),1,"One question at a time");
    assert.equal(await end.locator(".g12-chv-help").count(),0,"No premature D6 help");
    assert.equal(await end.locator(".g12-chv-answer:not([hidden])").count(),0,"Answers hidden before Final Submit");
    const submit=end.locator("[data-g12-chv-final]");
    await submit.click();
    assert.equal(await end.locator(".g12-chv-answer:not([hidden])").count(),0,"Empty Final Submit blocked");
    const questions=end.locator(".g12-chv-selfcheck-item");
    for(let i=0;i<23;i++){
     await end.locator(".g12-chv-quiz-jump").nth(i).click();
     assert.equal(await end.locator(".g12-chv-selfcheck-item:visible").count(),1);
     await questions.nth(i).locator("textarea").fill("Bài giải câu "+(i+1));
    }
    assert.equal(await questions.nth(23).getAttribute("data-optional"),"true","Optional moved to final slot");
    assert.equal(await questions.nth(23).locator("textarea").inputValue(),"","Optional deliberately unanswered");
    await end.locator(".g12-chv-quiz-jump").first().click();
    assert.equal(await questions.first().locator("textarea").inputValue(),"Bài giải câu 1","Draft kept across pages");
    assert.equal(await end.locator(".g12-chv-answer:not([hidden])").count(),0);
    await submit.click();
    assert(await submit.isDisabled(),"23 mandatory answers permit Final Submit");
    assert.equal(await questions.locator("textarea:disabled").count(),24,"Locked after Final Submit");
    assert.equal(await end.locator(".g12-chv-answer:not([hidden])").count(),24,"Only after final are original answers accessible");
    assert.equal(await end.locator(".g12-chv-selfcheck-item:visible").count(),1,"One visible question even after submit");
    assert.equal(await end.locator(".g12-chv-answer:visible").count(),1,"Single visible answer");
    await end.locator(".g12-chv-quiz-jump").last().click();
    assert.equal(await end.locator(".g12-chv-answer:visible").count(),1);
    assert.equal(await end.locator(".g12-chv-return").count(),24,"Remediation unlocked only after final");
    assert(!errors.length,"Page JS errors at "+width+": "+errors.slice(0,3));
    console.log("PASS G12 ChV "+width+"px: B14–B17, 6 PNG, 96 PUBLIC, 24 HELP, 23 mandatory + 1 optional END and protected Q16 Final Submit");
   }finally{await page.close()}
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exitCode=1});
