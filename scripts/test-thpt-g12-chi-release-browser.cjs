"use strict";
/* G12 ChI browser AP/Q16 smoke: three viewports, source-locked UI, no early answers.
 * Chromium P1 QA, NOT physical Safari P2.
 */
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const base="http://127.0.0.1:8765/thpt-preview/sgk/lop-12/";
const lessons=[11,12,14,14,15],helpc=[6,6,6,7,7],figurec=[1,1,1,2,1];
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const viewport of [{width:390,height:844},{width:820,height:1180},{width:1440,height:900}]){
   const page=await browser.newPage({viewport});
   try{
    const check=async url=>{
     const response=await page.goto(base+url,{waitUntil:"networkidle",timeout:60000});
     assert(response?.ok(),"Missing generated G12 route "+url);
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
     assert(overflow<=20,"Horizontal overflow "+url+" "+viewport.width+" by "+overflow);
    };
    await check("");
    await check("chuong-i/");
    assert.equal(await page.locator("a.thpt-r4-tile").count(),6,"5 lessons plus end self-check");
    for(let i=1;i<=5;i++){
     await check("chuong-i/bai-"+i+"/");
     const root=page.locator('[data-g12-chi-lesson="B0'+i+'"]');
     await root.waitFor({state:"visible"});
     await page.waitForFunction(()=>document.querySelector('[data-g12-chi-lesson]')?.dataset.g12ChiReady==="true",null,{timeout:30000});
     assert.equal(await root.getAttribute("data-g12-chi-error"),null);
     assert.equal(await root.locator(".g12-chi-item").count(),lessons[i-1],"Original canonical B0"+i);
     assert.equal(await root.locator(".g12-chi-help").count(),helpc[i-1],"Original D6 B0"+i);
     assert.equal(await root.locator(".g12-chi-item[data-outcome]").count(),lessons[i-1]);
     assert.equal(await page.locator(".g12-chi-figure img").count(),figurec[i-1],"Original SVG count B0"+i);
     const image=page.locator(".g12-chi-figure img").first();
     assert(await image.evaluate(x=>x.complete&&x.naturalWidth>0),"Original SVG failed to load");
     assert.equal(await root.locator(".g12-chi-answer:not([hidden])").count(),0,"No early answer");
     const content=await page.locator(".md-content").innerText();
     for(const label of ["1. Vì sao cần học?","2. Kiến thức tiền đề","3. Hiểu bản chất","4. Đọc hình","5. Ví dụ","6. Tự thử","7. Core"])
      assert(content.includes(label),"Missing full lesson flow "+i+" "+label);
     const first=root.locator(".g12-chi-item").first();
     await first.locator("button.g12-chi-submit").click();
     assert.equal(await first.locator(".g12-chi-answer:not([hidden])").count(),0,"No solution when submitting empty input");
     await first.locator("textarea").fill("Em tự lập luận về kết quả");
     await first.locator("button.g12-chi-submit").click();
     assert.equal(await first.locator(".g12-chi-answer:not([hidden])").count(),1,"Reveal formative only after Submit");
     assert.equal(await root.locator(".g12-chi-answer:not([hidden])").count(),1,"Do not reveal other answers");
     assert.equal(await root.locator('[data-canonical-item]').count(),lessons[i-1],"One canonical placement each");
     assert((await root.locator(".g12-chi-help").first().locator("a").getAttribute("href")).startsWith("#"),"D6 same-page return");
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
     assert(overflow<=20,"Loaded G12 lesson has horizontal overflow at "+viewport.width+" B0"+i+": "+overflow);
    }
    await check("chuong-i/tu-kiem-tra-chuong/");
    const root=page.locator('[data-g12-chi-selfcheck="END"]');
    await page.waitForFunction(()=>document.querySelector('[data-g12-chi-selfcheck]')?.dataset.g12ChiReady==="true",null,{timeout:30000});
    assert.equal(await root.locator(".g12-chi-selfcheck-item").count(),12,"12 public RD0 END original items");
    assert.equal(await root.locator(".g12-chi-answer:not([hidden])").count(),0,"No pre-final solution");
    assert.equal(await root.locator(".g12-chi-help").count(),0,"No pre-final D6 hints");
    const btn=root.locator("button[data-g12-chi-final]");
    await btn.click();
    assert.equal(await root.locator(".g12-chi-answer:not([hidden])").count(),0,"Cannot Final Submit empty quiz");
    await root.locator("textarea").first().fill("Tự thử câu 1");
    await btn.click();
    assert.equal(await root.locator(".g12-chi-answer:not([hidden])").count(),0,"Cannot reveal from partially completed quiz");
    const inputs=await root.locator(".g12-chi-selfcheck-item textarea").all();
    for(const [i,el]of inputs.entries())await el.fill("Lập luận của em cho câu "+(i+1));
    await btn.click();
    assert.equal(await root.locator(".g12-chi-answer:not([hidden])").count(),12,"Post-final reveal exact 12 public original keys");
    assert.equal(await btn.isDisabled(),true,"Final Submit cannot be repeated");
    assert.equal(await root.locator(".g12-chi-help").count(),4,"END D6 only after final submit");
    assert.equal(await root.locator("textarea:disabled").count(),12);
    const width=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
    assert(width<=20,"Self-check horizontal overflow at "+viewport.width+": "+width);
    console.log("PASS G12 ChI "+viewport.width+"px: 8 routes; 5 full learning journeys (66 original PUBLIC items), 36 D6, six SVG; 12 Q16 Final Submit with keys hidden until final.");
   }finally{await page.close()}
  }
 }finally{await browser.close()}
})().catch(err=>{console.error(err);process.exitCode=1});
