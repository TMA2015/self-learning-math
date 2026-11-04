"use strict";
/* RELEASE AP1–AP5 and Q16 visual smoke for G11 SGK supplement pp99–109.
 * Chromium viewport checks are P1 evidence, NOT real iOS Safari P2.
 */
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const base="http://127.0.0.1:8765/thpt-preview/sgk/lop-11/bo-sung/";
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const viewport of [{width:390,height:844},{width:820,height:1180},{width:1440,height:900}]){
   const page=await browser.newPage({viewport});
   const open=async(slug,view)=>{
    const response=await page.goto(base+slug+"/",{waitUntil:"networkidle",timeout:45000});
    assert(response?.ok(),slug+" generated route HTTP");
    const root=page.locator('[data-g11-supp-view="'+view+'"]');
    await root.waitFor({state:"visible",timeout:18000});
    await page.waitForFunction(()=>document.querySelector('[data-g11-supp-view]')?.dataset.g11SuppBound==="true",null,{timeout:20000});
    assert.equal(await root.getAttribute("data-g11-supp-error"),null,"Source JSON load");
    return root;
   };
   try{
    let response=await page.goto(base,{waitUntil:"networkidle",timeout:45000});
    assert(response?.ok(),"index route");
    assert.equal(await page.locator("a.thpt-r4-tile").count(),4);
    assert((await page.locator(".md-content").innerText()).includes("Hoạt động thực hành trải nghiệm"));
    assert((await page.locator(".md-content").innerText()).includes("Bài tập ôn tập cuối năm"));
    assert(!(await page.locator("h1").innerText()).includes("Bổ sung SGK"),"Release package label must not appear to learners");
    let root=await open("trai-nghiem-e01","E01");
    assert.equal(await root.locator(".g11-supp-topic").count(),1);
    assert.equal(await root.locator(".g11-supp-example").count(),6);
    assert.equal(await root.locator("figure.g11-supp-figure img").count(),2);
    assert.equal(await root.locator(".g11-supp-help").count(),6);
    assert.equal(await root.locator(".g11-supp-exercise").count(),14,"E01 complete 11 formative + 3 written on same page");
    assert.equal(await root.locator('[data-exposure-role="ANCHOR_TAG"]').count(),2,"E01 canonical Written roles still intact");
    assert.equal(await root.locator(".g11-supp-solution:not([hidden])").count(),0,"E01 no early key");
    const withinE01=root.locator(".g11-supp-exercise").first();
    await withinE01.locator("textarea").fill("Bài giải của học sinh");
    await withinE01.locator(".g11-supp-submit").click();
    assert.equal(await withinE01.locator(".g11-supp-solution:not([hidden])").count(),1,"Inline learning solution after submit");
    assert.equal(await root.locator(".g11-supp-solution:not([hidden])").count(),1,"Other topic answers stay hidden");
    assert((await root.locator(".g11-supp-help").first().locator("a").getAttribute("href")).startsWith("#"),"D6 returns to the exact exercise on this page");
    assert((await root.innerText()).includes("Tự thử trước khi vào Core"),"Self-try before Core E01");
    for(const image of await root.locator("figure.g11-supp-figure img").all()){
     assert(await image.evaluate(img=>img.complete&&img.naturalWidth>0),"E01 SVG loaded");
    }
    root=await open("trai-nghiem-e02","E02");
    assert.equal(await root.locator(".g11-supp-example").count(),6);
    assert.equal(await root.locator("figure.g11-supp-figure img").count(),3);
    assert.equal(await root.locator(".g11-supp-help").count(),5);
    assert.equal(await root.locator(".g11-supp-exercise").count(),13,"E02 complete 10 formative + 3 written inline");
    assert.equal(await root.locator(".g11-supp-solution:not([hidden])").count(),0,"E02 no early key");
    root=await open("on-tap-cuoi-nam","YEAR");
    assert.equal(await root.locator(".g11-supp-topic").count(),10,"Ten year-end concept tracks");
    assert.equal(await root.locator(".g11-supp-example").count(),16);
    assert.equal(await root.locator("figure.g11-supp-figure img").count(),3);
    assert.equal(await root.locator(".g11-supp-help").count(),12);
    assert.equal(await root.locator(".g11-supp-exercise").count(),41,"Year-end 31 formative + 10 written across 10 topics");
    assert.equal(await root.locator(".g11-supp-learning-stage").count(),29,"10 topic Core+Practice stages and 9+ written stages");
    assert.equal(await root.locator(".g11-supp-solution:not([hidden])").count(),0,"No early key in review");
    const allInlineIds=[...await root.locator(".g11-supp-exercise").evaluateAll(els=>els.map(x=>x.dataset.canonicalItem))];
    assert.equal(new Set(allInlineIds).size,41,"One canonical item per year-end placement");
    root=await open("luyen-tap","PRACTICE");
    assert.equal(await root.locator(".g11-supp-exercise").count(),52,"All 52 canonical public D3");
    assert((await root.locator("h2").first().innerText()).includes("Tổng hợp"),"Old Core route remains as a learner-safe catalogue");
    assert.equal(await root.locator(".g11-supp-topic").count(),12,"E01,E02 and ten year-end tracks");
    assert.equal(await root.locator('.g11-supp-solution:not([hidden])').count(),0,"No early answer");
    const first=root.locator(".g11-supp-exercise").first();
    const id=await first.getAttribute("data-canonical-item");
    assert.equal(id,"THPT-G11-SUPP-E01-C01");
    const button=first.locator("button.g11-supp-submit");
    await button.click();
    assert.equal(await first.locator(".g11-supp-solution:not([hidden])").count(),0,"Cannot submit empty response");
    await first.locator("textarea").fill("Em tính bằng mô hình tăng trưởng");
    await button.click();
    assert.equal(await first.locator(".g11-supp-solution:not([hidden])").count(),1,"Solution appears only after learner submit");
    assert.equal(await first.locator("textarea").isDisabled(),true);
    assert.equal(await root.locator(".g11-supp-solution:not([hidden])").count(),1,"No other answer exposed");
    root=await open("tu-luan","WRITTEN");
    assert.equal(await root.locator(".g11-supp-exercise").count(),16,"One shared Written/Anchor library");
    assert((await root.locator("h2").first().innerText()).includes("Tổng hợp"),"Old Written route remains as a learner-safe catalogue");
    assert.equal(await root.locator('[data-exposure-role="ANCHOR_TAG"]').count(),8,"Anchor tags not copied questions");
    const written=root.locator(".g11-supp-exercise").first();
    assert.equal(await written.locator(".g11-supp-solution:not([hidden])").count(),0);
    await written.locator("textarea").fill("Lời giải tự luận do em viết");
    await written.locator("button.g11-supp-submit").click();
    assert((await written.locator(".g11-supp-solution").innerText()).includes("Rubric"),"Rubric after submit");
    root=await open("tu-kiem-tra","SELFCHECK");
    const storageBefore=await page.evaluate(()=>({local:{...localStorage},session:{...sessionStorage}}));
    assert.equal(await root.locator(".g11-supp-exercise").count(),22,"One PUBLIC practice item per outcome");
    assert.equal(await root.locator(".g11-supp-solution:not([hidden])").count(),0,"Final Submit protects all answers");
    assert.equal(await root.locator("button[data-g11-supplement-final]").count(),1);
    await root.locator("textarea").first().fill("Học sinh tự thử trước khi nộp");
    await root.locator("button[data-g11-supplement-final]").click();
    assert.equal(await root.locator(".g11-supp-solution:not([hidden])").count(),22,"Answer reveal only AFTER Final Submit");
    assert.equal(await root.locator("button[data-g11-supplement-final]").isDisabled(),true);
    const storageAfter=await page.evaluate(()=>({local:{...localStorage},session:{...sessionStorage}}));
    assert.deepEqual(storageAfter,storageBefore,"Final Submit must not persist assessment data to local/session storage");
    const width=await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
    assert(width<=20,"Horizontal overflow "+viewport.width+"px by "+width);
    console.log("PASS G11 supplement AP/Q16 "+viewport.width+"px: 7 learner routes, 28 examples, 8 SVG, 23 D6, 52 Core/Practice, 16 Written, 22-public Final Submit.");
   }finally{await page.close()}
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
