"use strict";
/* Source-locked RELEASE ChII AP1–AP5/Q15/Q16: separate chapter Core/Practice. */
const assert=require("node:assert/strict");
const {chromium}=require("playwright");
const base="http://127.0.0.1:8765/thpt-preview/sgk/lop-12/";
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const viewport of [{width:390,height:844},{width:820,height:1180},{width:1440,height:900}]){
   const page=await browser.newPage({viewport});
   const open=async path=>{
    const res=await page.goto(base+path,{waitUntil:"networkidle",timeout:90000});
    assert(res?.ok(),"Missing G12 ChII route "+path);
    const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
    assert(overflow<=20,"Horizontal overflow "+path+" @"+viewport.width+" by "+overflow);
   };
   try{
    await open("");
    assert.equal(await page.locator("a.thpt-r4-tile").count(),2,"ChI and ChII routes available");
    await open("chuong-ii/");
    assert.equal(await page.locator("a.thpt-r4-tile").count(),5,"Three B06–B08 lessons + one hub + END");
    assert.equal(await page.locator('a.thpt-r4-tile[href="luyen-tap/"]').count(),1);
    for(const n of [6,7,8]){
     await open("chuong-ii/bai-"+n+"/");
     assert.equal(await page.locator('[data-g12-chii-lesson]').count(),0,"No inline canonical practice B0"+n);
     assert.equal(await page.locator(".g12-chii-item").count(),0,"Lesson only contains knowledge and try-first");
     for(const text of ["1. Vì sao cần học","3. Bản chất","4. Đọc hình","5. Ví dụ","6. Tự thử","7. Core"]){
      assert((await page.locator(".md-content").innerText()).includes(text),"Missing lesson teaching section B0"+n+": "+text);
     }
     assert.equal(await page.locator('a[href="../luyen-tap/#b0'+n+'-core"]').count(),1);
     assert.equal(await page.locator('a[href="../luyen-tap/#b0'+n+'-practice"]').count(),1);
     const img=page.locator(".g12-chi-figure img");
     assert.equal(await img.count(),1,"Original source SVG B0"+n);
     await img.first().scrollIntoViewIfNeeded();
     await page.waitForFunction(()=>{const x=document.querySelector(".g12-chi-figure img");return x&&x.complete&&x.naturalWidth>0;},null,{timeout:15000});
    }
    await open("chuong-ii/luyen-tap/");
    const hub=page.locator("[data-g12-chii-hub]");
    await page.waitForFunction(()=>document.querySelector("[data-g12-chii-hub]")?.dataset.g12ChiiReady==="true",null,{timeout:30000});
    assert.equal(await hub.getAttribute("data-g12-chii-error"),null,"Source lock/hydration error");
    assert.equal(await hub.locator(".g12-chii-hub-lesson").count(),3,"Three lesson sections");
    assert.equal(await hub.locator(".g12-chii-hub-group").count(),6,"One Core + one Practice per lesson");
    assert.equal(await hub.locator(".g12-chii-item").count(),64,"All 64 original items");
    assert.equal(await hub.locator(".g12-chii-help").count(),16,"All 16 D6");
    assert.equal(await hub.locator(".g12-chii-answer:not([hidden])").count(),0,"No formative answer before submit");
    const expected={6:24,7:16,8:24},d6={6:6,7:4,8:6};
    for(const n of [6,7,8]){
     const section=hub.locator('[data-g12-chii-hub-lesson="B0'+n+'"]');
     assert.equal(await section.locator(".g12-chii-item").count(),expected[n],"Canonical count B0"+n);
     assert.equal(await section.locator(".g12-chii-help").count(),d6[n],"D6 count B0"+n);
    }
    const core=hub.locator("#b06-core");
    assert.equal(await core.getAttribute("open"),null,"Groups initially closed");
    await core.locator("summary").click();
    assert.notEqual(await core.getAttribute("open"),null,"Core opens");
    const first=core.locator(".g12-chii-item").first();
    await first.locator("button.g12-chii-submit").click();
    assert.equal(await hub.locator(".g12-chii-answer:not([hidden])").count(),0,"Empty response cannot reveal key");
    await first.locator("textarea").fill("Em tự thử giải");
    await first.locator("button.g12-chii-submit").click();
    assert.equal(await hub.locator(".g12-chii-answer:not([hidden])").count(),1,"Only submitted answer is shown");
    assert.equal(await first.locator("textarea:disabled").count(),1);
    const help=hub.locator("#b06-help");
    await help.locator(":scope > summary").click();
    const link=help.locator("a.g12-chii-return[href^='#']").first();
    const dest=await link.getAttribute("href");
    assert(dest&&dest.length>1,"D6 original canonical return link");
    await link.evaluate(el=>{let parent=el.parentElement;while(parent){if(parent.tagName==="DETAILS")parent.open=true;parent=parent.parentElement;}});
     await link.click();
    const item=hub.locator('[id="'+dest.slice(1)+'"]');
    assert.equal(await item.count(),1,"D6 return target exists");
    assert(await item.isVisible(),"D6 return opens original Core card");
    await open("chuong-ii/luyen-tap/?entry=direct#b07-practice");
    await page.waitForFunction(()=>document.querySelector("[data-g12-chii-hub]")?.dataset.g12ChiiReady==="true",null,{timeout:30000});
    assert.notEqual(await page.locator("#b07-practice").getAttribute("open"),null,"Lesson B07 deep link opens correct Practice");
    assert.equal(await page.locator(".g12-chii-answer:not([hidden])").count(),0,"Direct navigation cannot reveal key");
    await open("chuong-ii/tu-kiem-tra-chuong/");
    const end=page.locator('[data-g12-chii-selfcheck="END"]');
    await page.waitForFunction(()=>document.querySelector("[data-g12-chii-selfcheck]")?.dataset.g12ChiiReady==="true",null,{timeout:30000});
    assert.equal(await end.locator(".g12-chii-selfcheck-item").count(),16,"Exactly 16 reused approved END refs");
    assert.equal(await end.locator(".g12-chii-answer:not([hidden])").count(),0,"END key protected");
    assert.equal(await end.locator(".g12-chii-return").count(),0,"No END D6 before Final Submit");
    const ids=await end.locator(".g12-chii-selfcheck-item").evaluateAll(xs=>xs.map(x=>x.dataset.canonicalItem));
    assert.equal(new Set(ids).size,16,"Unique END references");
    assert(ids.every(x=>/THPT-G12-B0[678]-P\d\d$/.test(x)),"No new item IDs");
    const submit=end.locator("button[data-g12-chii-final]");
    await submit.click();
    assert.equal(await end.locator(".g12-chii-answer:not([hidden])").count(),0,"No blank Final Submit");
    await end.locator("textarea").first().fill("Em tự làm một câu");
    await submit.click();
    assert.equal(await end.locator(".g12-chii-answer:not([hidden])").count(),0,"No partial Final Submit");
    const entries=await end.locator(".g12-chii-selfcheck-item textarea").all();
    for(const [i,x]of entries.entries())await x.fill("Bài tự giải số "+(i+1));
    await submit.click();
    assert(await submit.isDisabled(),"Final Submit one-way");
    assert.equal(await end.locator(".g12-chii-answer:not([hidden])").count(),16,"END keys only after Final Submit");
    assert.equal(await end.locator(".g12-chii-return").count(),16,"Post-Submit D6 available");
    assert.equal(await end.locator("textarea:disabled").count(),16);
    assert((await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth))<=20,"END reflow");
    console.log("PASS G12 ChII "+viewport.width+"px: separate 64-item chapter Core/Practice, 16 D6, original 3 SGK lessons/SVG, Q16 16 END refs.");
   }finally{await page.close()}
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
