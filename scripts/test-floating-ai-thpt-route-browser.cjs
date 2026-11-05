"use strict";
/* Shared Gemini launcher: all PUBLIC learning and exercise routes, protected Q16 excluded. Browser never calls Gemini.
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
      "thpt-preview/sgk/lop-12/chuong-i/bai-1/",
      "thpt-preview/sgk/lop-12/chuong-ii/bai-6/",
      "thpt-preview/sgk/lop-12/chuong-iii/bai-9/",
      "thpt-preview/sgk/lop-12/chuong-iv/bai-11/",
      "thpt-preview/sgk/lop-11/chuong-iv/luyen-tap/",
      "thpt-preview/sgk/lop-12/chuong-iii/luyen-tap/",
      "thpt-preview/chuyen-de/ham-so/luyen-tap/",
      "kien-thuc/04-bieu-thuc-dai-so/",
      "kien-thuc/04-bieu-thuc-dai-so/bai-tap/",
      "kien-thuc/25-tong-hop-on-thi-10/kho-bai-mo-neo/"
    ];
    const denied=[
      "thpt-preview/sgk/lop-11/chuong-i/tu-kiem-tra-chuong/",
      "thpt-preview/sgk/lop-12/chuong-i/tu-kiem-tra-chuong/",
      "thpt-preview/sgk/lop-12/chuong-iv/tu-kiem-tra-chuong/",
      "thpt-preview/sgk/lop-12/chuong-v/tu-kiem-tra-chuong/",
      "thpt-preview/chuyen-de/ham-so/tu-kiem-tra/",
      "kien-thuc/04-bieu-thuc-dai-so/tu-kiem-tra/",
      "kien-thuc/25-tong-hop-on-thi-10/tu-kiem-tra/"
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
      // Native modal makes outside DOM inert: the SAME Tutor shell must move
      // into active Core/Practice dialog, where it remains clickable.
      if(route==="thpt-preview/sgk/lop-12/chuong-iii/luyen-tap/"){
        await page.waitForFunction(()=>document.querySelector("[data-g12-chiii-hub]")?.dataset.g12ChiiiReady==="true");
        await page.locator('[data-g12-golden-open="b09-core"]').click();
        const dlg=page.locator('dialog[data-g12-golden-dialog="III"]');
        await dlg.locator("[data-floating-ai]").waitFor({state:"attached",timeout:10000});
        assert(await dlg.locator(".floating-ai-launcher").isVisible(),"Tutor must be usable inside G12 Golden modal");
        await dlg.locator(".floating-ai-launcher").click();
        const context=await dlg.locator(".floating-ai-panel small").first().innerText();
        assert(context.includes("Đang làm bài")&&(context.includes("Các nhóm")||context.includes("Cỡ mẫu")),
          "Tutor must receive active PUBLIC Core stem instead of hidden answers or draft");
        assert(await dlg.locator(".floating-ai-panel").isVisible(),"Tutor panel opens from native G12 modal");
        await dlg.locator(".floating-ai-close").click();
        await dlg.locator('[aria-label="Đóng cửa sổ"]').click();
        await page.waitForFunction(()=>document.querySelector("body > [data-floating-ai]")!==null,null,{timeout:10000});
      }
      if(route==="kien-thuc/04-bieu-thuc-dai-so/"){
        const start=page.locator(".topic-core-card .topic-micro-start").first();
        await start.waitFor({state:"visible",timeout:15000});
        await start.click();
        const dlg=page.locator("dialog.topic-core-dialog[open]");
        await dlg.locator("[data-floating-ai]").waitFor({state:"attached",timeout:10000});
        const stem=await dlg.locator(".topic-micro-question").first().innerText();
        assert(stem.length>15,"THCS Core dialog must show one public micro-question");
        await dlg.locator(".floating-ai-launcher").click();
        const label=await dlg.locator(".floating-ai-head small").innerText();
        assert(label.includes(stem.slice(0,15)),
          "Gemini must read current THCS PUBLIC micro question, not solution or other records");
        assert(await dlg.locator(".floating-ai-panel").isVisible(),"Same AI usable inside THCS native Core dialog");
        await dlg.locator(".floating-ai-close").click();
        await dlg.locator('[aria-label="Đóng cửa sổ Core"]').click();
        await page.waitForFunction(()=>document.querySelector("body > [data-floating-ai]")!==null,null,{timeout:10000});
      }
      if(route==="thpt-preview/sgk/lop-11/chuong-iv/luyen-tap/"){
        await page.locator("[data-thpt-open-quiz]").first().click();
        const dlg=page.locator("dialog.thpt-r4-practice-dialog[open]");
        await dlg.locator("[data-floating-ai]").waitFor({state:"attached",timeout:10000});
        await dlg.locator(".floating-ai-launcher").click();
        assert(await dlg.locator(".floating-ai-panel").isVisible(),"Same Tutor accessible inside G11 Golden modal");
        await dlg.locator(".floating-ai-close").click();
        await page.keyboard.press("Escape");
      }
    }
    // Material instant navigation must tear down Tutor when moving from
    // a PUBLIC practice hub to protected independent self-check.
    await page.goto(base+"thpt-preview/sgk/lop-12/chuong-iii/luyen-tap/",{waitUntil:"networkidle",timeout:60000});
    // Mobile lesson tabs are horizontally clipped. DOM link activation
    // exercises Material instant navigation without off-viewport pointer.
    await page.locator('.thpt-r4-lesson-tabs a[href*="tu-kiem-tra-chuong/"]').evaluate(el=>el.click());
    await page.waitForURL(/chuong-iii\/tu-kiem-tra-chuong\/$/,{timeout:15000});
    await page.waitForFunction(()=>document.querySelector("[data-floating-ai]")===null,null,{timeout:10000});
    assert.equal(await page.locator("[data-floating-ai]").count(),0,
      "Tutor must immediately unmount on public Practice → protected Final Submit navigation");
    for(const route of denied){
      const resp=await page.goto(base+route,{waitUntil:"networkidle",timeout:60000});
      assert(resp?.ok(),"Missing protected route "+route);
      assert.equal(await page.locator("[data-floating-ai]").count(),0,
        "Tutor may never mount on Q16 independent self-check "+route);
    }
    console.log("PASS Tutor launcher "+viewport.width+"px: G10/G11/G12 + THCS + Topic public practice, Golden modal and Q16 exclusions");
   }finally{await page.close()}
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
