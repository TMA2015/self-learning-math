"use strict";
// RELEASE candidate browser regression only: emulated viewports are NOT physical Safari P2.
const assert=require("node:assert/strict"),{chromium}=require("playwright");
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const root="http://127.0.0.1:8765/thpt-preview/sgk/";
 const base=root+"lop-11/chuong-ii/";
 try{
  for(const viewport of [{width:390,height:844},{width:820,height:1180},{width:1440,height:900}]){
   const page=await browser.newPage({viewport});
   try{
    let response=await page.goto(root,{waitUntil:"networkidle"});
    assert(response?.ok(),"SGK overview must load");
    assert.equal(await page.locator('.library-topic-tile[data-thpt-filter-item][href="lop-11/chuong-ii/"]').count(),1,"One G11 ChII entry tile");
    response=await page.goto(base,{waitUntil:"networkidle"});
    assert(response?.ok(),"G11 ChII overview must load");
    const overview=await page.locator("body").innerText();
    assert(overview.includes("Chương II")&&overview.includes("Bài 5"),"Chapter learning path visible");
    assert(overview.includes("Tự kiểm tra cuối chương · chưa phát hành"),"No false independent readiness claim");
    assert.equal(await page.locator("[data-thpt-readiness]").count(),0,"No active official Readiness");
    for(const lesson of [5,6,7]){
     response=await page.goto(base+"bai-"+lesson+"/",{waitUntil:"networkidle"});
     assert(response?.ok(),"G11 B0"+lesson+" page must load");
     assert((await page.locator("h1").innerText()).includes("Bài "+lesson),"Correct lesson");
     const firstTry=page.locator('[data-ped-first-try="1"]');
     assert.equal(await firstTry.count(),1,"One voluntary first try");
     assert.equal(await firstTry.getAttribute("open"),null,"First try must be closed by default");
     const helps=page.locator("[data-thpt-help-id]");
     assert.equal(await helps.count(),2,"Exactly 2 original D6 cards B0"+lesson);
     for(let i=0;i<2;i++){
      const summary=await helps.nth(i).locator("summary").innerText();
      assert(summary.length>25&&!summary.includes("Tự khắc phục lỗi"),"D6 label must be learner-readable");
      const href=await helps.nth(i).locator('a[href*="luyen-tap/?item="]').getAttribute("href");
      assert(href.includes("THPT-G11-B0"+lesson+"-"),"D6 returns to exact canonical item");
     }
     const image=page.locator(".thpt-r4-probability-figure img");
     assert.equal(await image.count(),1,"One source-locked D5 SVG per lesson");
     await image.scrollIntoViewIfNeeded();
     await page.waitForFunction(()=>{const el=document.querySelector(".thpt-r4-probability-figure img");return !!el&&el.complete&&el.naturalWidth>0},null,{timeout:20000});
     const dims=await image.evaluate(el=>({child:el.getBoundingClientRect().width,parent:el.parentElement.getBoundingClientRect().width}));
     assert(dims.child<=dims.parent+2,"SVG must fit "+viewport.width);
     for(const role of ["C01","P01"]){
      const id="THPT-G11-B0"+lesson+"-"+role;
      response=await page.goto(base+"luyen-tap/?item="+id,{waitUntil:"networkidle"});
      assert(response?.ok(),"G11 ChII practice route "+id);
      const dlg=page.locator("dialog.thpt-r4-practice-dialog");
      await dlg.waitFor({state:"visible",timeout:15000});
      assert.equal(await dlg.locator("[data-thpt-canonical-item]").first().getAttribute("data-thpt-canonical-item"),id,"Canonical deep link");
      assert((await dlg.locator(".thpt-r4-modal-meta").innerText()).includes("LỚP 11"),"Correct grade");
      assert.equal(await dlg.locator("details[open]").count(),0,"No pre-attempt solution reveal");
      assert.equal(await dlg.locator(".thpt-r4-formative-feedback").innerText(),"","No premature grading");
      const typed=dlg.locator(".thpt-r4-formative-answer textarea");
      assert.equal(await typed.count(),1,"Open-answer entry without fake machine grading");
      await typed.fill("G11 ChII QA self-comparison only");
      await dlg.locator(".thpt-r4-formative-submit").click();
      assert((await dlg.locator(".thpt-r4-formative-feedback").innerText()).includes("chưa chấm tự động"),"Do not machine-score open answer");
      assert(await dlg.locator(".thpt-r4-formative-actions details").nth(1).getAttribute("open")!==null,"Reveal only after attempt");
      await dlg.locator("[data-thpt-modal-close]").click();
     }
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
     assert(overflow<=20,"G11 ChII horizontal overflow at "+viewport.width);
    }
   }finally{await page.close()}
  }
  console.log("PASS G11 ChII B05-B07 browser 390/820/1440: D1-D6, 3 SVG, 6 D6 links, 6 canonical deep links, no early correctness, no machine scoring, Q16 selfcheck HOLD");
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exit(1)});
