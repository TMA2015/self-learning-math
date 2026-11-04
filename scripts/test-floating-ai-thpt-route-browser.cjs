"use strict";
/* Shared Gemini launcher: only public reading routes. Browser never calls Gemini.
 * Checks 390/820/1440 and Q16 exclusions; G10/THCS legacy behavior preserved.
 */
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const base="http://127.0.0.1:8765/";
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const viewport of [{width:390,height:844},{width:820,height:1180},{width:1440,height:900}]){
   const page=await browser.newPage({viewport});
   try{
    const allowed=[
      "thpt-preview/sgk/chuong-ii/bai-3/",
      "thpt-preview/sgk/lop-11/chuong-i/bai-1/",
      "thpt-preview/sgk/lop-12/chuong-i/bai-1/"
    ];
    const denied=[
      "thpt-preview/sgk/lop-11/chuong-i/tu-kiem-tra-chuong/",
      "thpt-preview/sgk/lop-12/chuong-i/tu-kiem-tra-chuong/",
      "thpt-preview/sgk/lop-11/chuong-i/luyen-tap/"
    ];
    for(const route of allowed){
      const resp=await page.goto(base+route,{waitUntil:"networkidle",timeout:60000});
      assert(resp?.ok(),"Missing learning route "+route);
      const ai=page.locator("[data-floating-ai]");
      await ai.waitFor({state:"attached",timeout:15000});
      assert.equal(await ai.count(),1,"Tutor mounted once per reading route "+route);
      const launcher=ai.locator(".floating-ai-launcher");
      assert(await launcher.isVisible(),"Tutor launcher hidden on "+route);
      const face=ai.locator(".floating-ai-face");
      await face.scrollIntoViewIfNeeded();
      await page.waitForFunction(()=>{
        const img=document.querySelector(".floating-ai-face");
        return !!img&&img.complete&&img.naturalWidth>0;
      },null,{timeout:10000});
      await launcher.click();
      assert(await ai.locator(".floating-ai-panel").isVisible(),"Tutor panel did not open "+route);
      assert.equal(await ai.locator(".floating-ai-chip").count(),4,"Tutor four original actions");
      await ai.locator(".floating-ai-close").click();
      assert.equal(await launcher.getAttribute("aria-expanded"),"false");
    }
    for(const route of denied){
      const resp=await page.goto(base+route,{waitUntil:"networkidle",timeout:60000});
      assert(resp?.ok(),"Missing protected route "+route);
      assert.equal(await page.locator("[data-floating-ai]").count(),0,
        "Tutor may never mount on Final Submit/practice "+route);
    }
    console.log("PASS Tutor launcher "+viewport.width+"px: G10/G11/G12 reading avatar/panel and protected Q16 exclusions");
   }finally{await page.close()}
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
