"use strict";
/* G12 ChII source-locked learner journey AP/Q16 browser; P1 Chromium not P2 Safari. */
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const base="http://127.0.0.1:8765/thpt-preview/sgk/lop-12/";
(async()=>{
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
try{
 for(const viewport of [{width:390,height:844},{width:820,height:1180},{width:1440,height:900}]){
  const page=await browser.newPage({viewport});
  try{
   const open=async(path)=>{
    const result=await page.goto(base+path,{waitUntil:"networkidle",timeout:60000});
    assert(result?.ok(),"Missing G12 ChII route "+path);
    const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
    assert(overflow<=20,"Horizontal overflow "+path+" "+viewport.width+": "+overflow);
   };
   await open("");
   assert.equal(await page.locator("a.thpt-r4-tile").count(),2,"G12 chapter I and II both present");
   await open("chuong-ii/");
   assert.equal(await page.locator("a.thpt-r4-tile").count(),4,"B06–B08 and chapter end");
   const counts={6:24,7:16,8:24},helpers={6:6,7:4,8:6};
   for(const n of [6,7,8]){
    await open("chuong-ii/bai-"+n+"/");
    const root=page.locator('[data-g12-chii-lesson="B0'+n+'"]');
    await page.waitForFunction(()=>document.querySelector("[data-g12-chii-lesson]")?.dataset.g12ChiiReady==="true",null,{timeout:30000});
    assert.equal(await root.getAttribute("data-g12-chii-error"),null,"Source/receipt lock issue B0"+n);
    assert.equal(await root.locator(".g12-chii-item").count(),counts[n],"Original B0"+n+" items");
    assert.equal(await root.locator(".g12-chii-help").count(),helpers[n],"Original D6 B0"+n);
    assert.equal(await root.locator(".g12-chii-item[data-canonical-item]").count(),counts[n]);
    assert.equal(await page.locator(".g12-chi-figure img").count(),1);
    // Original full-length SGK theory places the SVG below the fold.
    // With loading="lazy", scroll first and wait for image decode; do not assume immediate readiness.
    const svg=page.locator(".g12-chi-figure img").first();
    await svg.scrollIntoViewIfNeeded();
    await page.waitForFunction(()=>{
      const img=document.querySelector(".g12-chi-figure img");
      return !!img&&img.complete&&img.naturalWidth>0;
    },null,{timeout:15000});
    assert(await svg.evaluate(img=>img.naturalWidth>0),"Original SVG B0"+n+" must load after lazy scroll");
    assert.equal(await root.locator(".g12-chii-answer:not([hidden])").count(),0,"Answer leaked before individual Submit");
    const prose=await page.locator(".md-content").innerText();
    for(const key of ["1. Vì sao cần học","3. Bản chất","4. Đọc hình","5. Ví dụ","6. Tự thử","7. Core"])
      assert(prose.includes(key),"Full student pedagogy missing "+n+" "+key);
    const first=root.locator(".g12-chii-item").first();
    await first.locator("button.g12-chii-submit").click();
    assert.equal(await root.locator(".g12-chii-answer:not([hidden])").count(),0,"Empty answer must not submit");
    await first.locator("textarea").fill("Em thử trình bày lời giải");
    await first.locator("button.g12-chii-submit").click();
    assert.equal(await root.locator(".g12-chii-answer:not([hidden])").count(),1,"Exactly one answer revealed");
    assert.equal(await first.locator("textarea:disabled").count(),1);
    assert((await root.locator(".g12-chii-help").first().locator("a").first().getAttribute("href")).startsWith("#"),"D6 returns same-page original canonical item");
    const width=await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
    assert(width<=20,"After hydration overflow B0"+n+" at "+viewport.width);
   }
   await open("chuong-ii/tu-kiem-tra-chuong/");
   const root=page.locator('[data-g12-chii-selfcheck="END"]');
   await page.waitForFunction(()=>document.querySelector("[data-g12-chii-selfcheck]")?.dataset.g12ChiiReady==="true",null,{timeout:30000});
   assert.equal(await root.locator(".g12-chii-selfcheck-item").count(),16,"16 original PUBLIC Practice references");
   assert.equal(await root.locator(".g12-chii-answer:not([hidden])").count(),0,"Pre Final Submit answer leak");
   assert.equal(await root.locator(".g12-chii-return").count(),0,"No pre-final D6");
   const ids=await root.locator(".g12-chii-selfcheck-item").evaluateAll(xs=>xs.map(x=>x.dataset.canonicalItem));
   assert.equal(new Set(ids).size,16,"No duplicate self-check item");
   assert(ids.every(x=>/THPT-G12-B0[678]-P\d\d$/.test(x)),"Self-check refs only approved Practice IDs");
   const submit=root.locator("button[data-g12-chii-final]");
   await submit.click();
   assert.equal(await root.locator(".g12-chii-answer:not([hidden])").count(),0,"Cannot submit blank selfcheck");
   await root.locator("textarea").first().fill("Em thử một câu");
   await submit.click();
   assert.equal(await root.locator(".g12-chii-answer:not([hidden])").count(),0,"Cannot submit partially completed selfcheck");
   const ta=await root.locator(".g12-chii-selfcheck-item textarea").all();
   for(const [i,t]of ta.entries())await t.fill("Em tự làm câu "+(i+1));
   await submit.click();
   assert.equal(await root.locator(".g12-chii-answer:not([hidden])").count(),16,"All original answers after Final Submit");
   assert.equal(await root.locator("textarea:disabled").count(),16);
   assert(await submit.isDisabled(),"Final Submit must be one-way");
   assert.equal(await root.locator(".g12-chii-return").count(),16,"D6 only inserted after Final Submit");
   assert((await root.innerText()).includes("không chấm điểm"),"No independent grading");
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
   assert(overflow<=20,"Selfcheck overflow at "+viewport.width);
   console.log("PASS G12 ChII "+viewport.width+"px: B06–B08 source-locked original 64, 16 D6 and 16 reused public Final Submit refs, 3 SVG, no pre-final answer");
  }finally{await page.close()}
 }
}finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
