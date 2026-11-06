"use strict";
/* G11 SGK pp99–109 DELTA_A Golden: two independent chapter-like units.
 * AP1–AP5 / Q15–Q17: approved source content preserved, private RD1 excluded.
 * Chromium 390/820/1440 is P1 QA, not real iPhone/iPad Safari P2. */
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const base="http://127.0.0.1:8765/thpt-preview/sgk/lop-11/bo-sung/";
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
 for(const width of [390,820,1440]){
  const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
  const errors=[];page.on("pageerror",e=>errors.push(e.message));
  const open=async(slug,view)=>{
   const res=await page.goto(base+(slug?slug+"/":""),{waitUntil:"networkidle",timeout:90000});
   assert(res?.ok(),"Missing learner route "+slug);
   const spill=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
   assert(spill<=20,"Horizontal overflow "+slug+" @"+width+": "+spill);
   if(!view)return null;
   const root=page.locator('[data-g11-supp-view="'+view+'"]');
   await page.waitForFunction(()=>document.querySelector("[data-g11-supp-view]")?.dataset.g11SuppBound==="true",null,{timeout:24000});
   assert.equal(await root.getAttribute("data-g11-supp-error"),null,"Reviewed public source loaded "+slug);
   return root;
  };
  try{
   await open("",null);
   assert.equal(await page.locator("a.thpt-r4-tile").count(),7,"Two chapter-like SGK end units: 4+3 routes");
   assert.equal(await page.locator(".g11-supp-overview .thpt-r4-practice-lesson[data-thpt-grade='11']").count(),2);
   let root=await open("trai-nghiem-e01","E01");
   assert.equal(await root.locator(".g11-supp-topic").count(),1);
   assert.equal(await root.locator(".g11-supp-example").count(),6);
   assert.equal(await root.locator("figure.g11-supp-figure img").count(),2);
   assert.equal(await root.locator(".g11-supp-help").count(),6);
   assert.equal(await root.locator(".g11-supp-exercise").count(),0,"No Core/Practice/Written stacked inside Knowledge 1");
   assert((await root.locator(".g11-supp-topic").innerText()).includes("Tự thử trước khi vào Core"));
   assert((await root.locator(".g11-supp-help").first().locator("a").getAttribute("href")).includes("luyen-tap-trai-nghiem/"),"D6 redirects to exact original practice item");
   assert((await page.locator("h1").innerText()).includes("Hoạt động 1"));
   root=await open("trai-nghiem-e02","E02");
   assert.equal(await root.locator(".g11-supp-example").count(),6);
   assert.equal(await root.locator("figure.g11-supp-figure img").count(),3);
   assert.equal(await root.locator(".g11-supp-help").count(),5);
   assert.equal(await root.locator(".g11-supp-exercise").count(),0,"No inline exercise stacks in Knowledge 2");
   root=await open("on-tap-cuoi-nam","YEAR");
   assert.equal(await root.locator(".g11-supp-topic").count(),10,"Ten original concept topics");
   assert.equal(await root.locator(".g11-supp-example").count(),16);
   assert.equal(await root.locator("figure.g11-supp-figure img").count(),3);
   assert.equal(await root.locator(".g11-supp-help").count(),12);
   assert.equal(await root.locator(".g11-supp-exercise").count(),0,"Year-end Knowledge only, 41 items moved to own hub");
   assert((await root.locator(".g11-supp-help").first().locator("a").getAttribute("href")).includes("luyen-tap-on-tap-cuoi-nam/"));
   root=await open("luyen-tap-trai-nghiem","EXP_PRACTICE");
   assert.equal(await root.locator(".thpt-r4-practice-lesson[data-thpt-grade='11']").count(),2,"Two real green Golden chapter-like practice lessons");
   assert.equal(await root.locator(".g11-supp-exercise").count(),27,"21 original formative + 6 Written, no new canonical IDs");
   assert.equal(await root.locator(".g11-supp-exercise:visible").count(),0,"No vertical stack before learner chooses a role");
   assert.equal(await root.locator(".thpt-r4-practice-card").count(),7,"E01 four roles including 1 Application; E02 three original roles");
   const green=await root.locator(".thpt-r4-practice-card[data-thpt-grade='11']").first().evaluate(x=>getComputedStyle(x).getPropertyValue("--thpt-grade-accent").trim());
   assert.equal(green,"#148477","Same grade-11 Golden green as regular SGK");
   await root.locator('[data-g11-supp-open="E01-SGK_CORE"]').click();
   assert.equal(await root.locator(".g11-supp-exercise:visible").count(),1,"One public Core question on screen");
   const panel=root.locator('.g11-supp-role-panel[data-g11-supp-topic="E01"][data-g11-supp-role="SGK_CORE"]');
   assert.equal(await panel.locator(".g11-supp-deck-number").count(),5);
   const first=panel.locator(".g11-supp-exercise:visible");
   assert.equal(await first.locator(".g11-supp-solution:not([hidden])").count(),0);
   await first.locator(".g11-supp-submit").click();
   assert.equal(await first.locator(".g11-supp-solution:not([hidden])").count(),0,"Blank answer cannot reveal solution");
   await first.locator("textarea").fill("Em tự giải rồi mới đối chiếu");
   await first.locator(".g11-supp-submit").click();
   assert.equal(await first.locator(".g11-supp-solution:not([hidden])").count(),1);
   await root.locator('[data-g11-supp-open="E01-SGK_APPLICATION"]').click();
   assert.equal(await root.locator(".g11-supp-exercise:visible").count(),1);
   assert.equal(await root.locator('.g11-supp-role-panel[data-g11-supp-role="SGK_APPLICATION"]:not([hidden]) .g11-supp-deck-number').count(),1);
   assert.equal(await root.locator(".g11-supp-solution:visible").count(),0,"Switching roles must not leak another answer");
   await root.locator('[data-g11-supp-open="E01-SGK_WRITTEN"]').click();
   assert.equal(await root.locator('.g11-supp-role-panel[data-g11-supp-topic="E01"][data-g11-supp-role="SGK_WRITTEN"] .g11-supp-exercise').count(),3);
   root=await open("luyen-tap-on-tap-cuoi-nam","YEAR_PRACTICE");
   assert.equal(await root.locator(".thpt-r4-practice-lesson[data-thpt-grade='11']").count(),10);
   assert.equal(await root.locator(".g11-supp-exercise").count(),41,"31 canonical formative + 10 written original");
   assert.equal(await root.locator(".g11-supp-exercise:visible").count(),0);
   const ids=await root.locator(".g11-supp-exercise").evaluateAll(els=>els.map(x=>x.dataset.canonicalItem));
   assert.equal(new Set(ids).size,41,"No duplicate original ID in year-end practice page");
   await root.locator('[data-g11-supp-open="TRIG-SGK_CORE"]').click();
   assert.equal(await root.locator(".g11-supp-exercise:visible").count(),1);
   assert.equal(await root.locator(".g11-supp-deck-number:visible").count(),1);
   await root.locator('[data-g11-supp-open="INTEGRATE-SGK_APPLICATION"]').click();
   assert.equal(await root.locator(".g11-supp-exercise:visible").count(),1,"Original integrated Application retained");
   // Historical URLs remain learner-safe and retain canonical library parity.
   root=await open("luyen-tap","PRACTICE");assert.equal(await root.locator(".g11-supp-exercise").count(),52);
   root=await open("tu-luan","WRITTEN");assert.equal(await root.locator(".g11-supp-exercise").count(),16);
   assert.equal(await root.locator('[data-exposure-role="ANCHOR_TAG"]').count(),8);
   for(const [slug,view]of [["tu-kiem-tra-trai-nghiem","SELFCHECK_EXP"],["tu-kiem-tra","SELFCHECK"]]){
    root=await open(slug,view);
    const snapshot=await page.evaluate(()=>({local:{...localStorage},session:{...sessionStorage}}));
    assert.equal(await root.locator(".g11-supp-exercise").count(),11,"Exactly 11 distinct reviewed outcomes in "+slug);
    assert.equal(await root.locator(".g11-supp-exercise:visible").count(),1);
    assert.equal(await root.locator(".g11-supp-deck-number").count(),11);
    assert.equal(await root.locator(".g11-supp-solution:not([hidden])").count(),0);
    assert.equal(await page.locator("[data-floating-ai]").count(),0,"No Gemini Tutor on protected Final Submit");
    await root.locator("button[data-g11-supplement-final]").click();
    assert.equal(await root.locator(".g11-supp-solution:not([hidden])").count(),11,"Reveal only AFTER scoped Final Submit");
    assert(await root.locator("button[data-g11-supplement-final]").isDisabled());
    assert.deepEqual(await page.evaluate(()=>({local:{...localStorage},session:{...sessionStorage}})),snapshot,"No learner or Mastery storage mutation");
   }
   assert.equal(errors.length,0,"JS errors: "+errors.join(" / "));
   console.log("PASS G11 end units Golden AP/Q16 · "+width+"px: knowledge-only 2+10 topics, 21+6 EXP, 31+10 YEAR, 11+11 public Final Submit.");
  }finally{await page.close()}
 }
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
