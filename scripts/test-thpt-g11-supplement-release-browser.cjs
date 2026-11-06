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
   assert.equal(await root.locator(".g11-supp-topic-tab").count(),10,"10 horizontal knowledge topic selectors");
   assert.equal(await root.locator(".g11-supp-topic:visible").count(),1,"Only one original knowledge topic visible");
   await root.locator(".g11-supp-topic-tab").nth(4).click();
   assert.equal(await root.locator(".g11-supp-topic:visible").count(),1,"Topic switch does not stack pages");
   assert.equal(await root.locator(".g11-supp-topic-tab[aria-selected=true]").count(),1);
   assert.equal(await root.locator(".g11-supp-example").count(),16);
   assert.equal(await root.locator("figure.g11-supp-figure img").count(),3);
   assert.equal(await root.locator(".g11-supp-help").count(),12);
   assert.equal(await root.locator(".g11-supp-exercise").count(),0,"Year-end Knowledge only, 41 items moved to own hub");
   assert((await root.locator(".g11-supp-help").first().locator("a").getAttribute("href")).includes("luyen-tap-on-tap-cuoi-nam/"));
   root=await open("luyen-tap-trai-nghiem","EXP_PRACTICE");
   assert.equal(await root.locator(".thpt-r4-practice-lesson[data-thpt-grade='11']").count(),2);
   assert.equal(await root.locator(".thpt-r4-practice-card").count(),7,"21+6 original items in seven role buttons");
   assert.equal(await root.locator(".g11-supp-exercise").count(),0,"No exercise DOM stacked beneath the cards");
   const green=await root.locator(".thpt-r4-practice-card[data-thpt-grade='11']").first().evaluate(x=>getComputedStyle(x).getPropertyValue("--thpt-grade-accent").trim());
   assert.equal(green,"#148477","Same G11 green Golden palette");
   await root.locator('[data-g11-supp-open="E01-SGK_CORE"]').click();
   let modal=page.locator("dialog.g11-supp-dialog[open]");
   await modal.waitFor({state:"visible"});
   assert.equal(await root.locator(".g11-supp-exercise").count(),0,"Question must be in modal, not in-page");
   assert.equal(await modal.locator(".g11-supp-exercise:visible").count(),1,"Exactly one question in native modal");
   assert.equal(await modal.locator(".g11-supp-exercise:visible [data-thpt-canonical-item]").count(),0,"Canonical belongs on card, not child");
   assert.equal(await modal.locator(".g11-supp-exercise:visible[data-thpt-canonical-item]").count(),1,"Gemini receives one PUBLIC canonical item");
   assert.equal(await modal.locator(".g11-supp-exercise:visible h3.g11-supp-question-stem").count(),1,"Tutor source must be public stem only");
   assert.equal(await modal.locator(".g11-supp-deck-number").count(),5);
   assert.equal(await modal.evaluate(el=>parseFloat(getComputedStyle(el).fontSize)),16,"Readable G11 modal 16px");
   assert(await modal.locator(".g11-supp-deck-number").first().evaluate(el=>parseFloat(getComputedStyle(el).fontSize)>=14),"Golden question buttons must be legible");
   let first=modal.locator(".g11-supp-exercise:visible");
   assert.equal(await first.locator(".g11-supp-solution:not([hidden])").count(),0);
   await first.locator(".g11-supp-submit").click();
   assert.equal(await first.locator(".g11-supp-solution:not([hidden])").count(),0,"Blank answer cannot reveal solution");
   await first.locator("textarea").fill("Em tự giải rồi mới đối chiếu");
   await first.locator(".g11-supp-submit").click();
   assert.equal(await first.locator(".g11-supp-solution:not([hidden])").count(),1);
   await modal.locator(".g11-supp-modal-close").click();
   assert.equal(await page.locator("dialog.g11-supp-dialog[open]").count(),0);
   await root.locator('[data-g11-supp-open="E01-SGK_APPLICATION"]').click();
   modal=page.locator("dialog.g11-supp-dialog[open]");
   assert.equal(await modal.locator(".g11-supp-exercise:visible").count(),1);
   assert.equal(await modal.locator(".g11-supp-deck-number").count(),1);
   assert.equal(await modal.locator(".g11-supp-solution:visible").count(),0,"Different unsubmitted role must not reveal answer");
   await modal.locator(".g11-supp-modal-close").click();
   await root.locator('[data-g11-supp-open="E01-SGK_WRITTEN"]').click();
   modal=page.locator("dialog.g11-supp-dialog[open]");
   assert.equal(await modal.locator(".g11-supp-deck-number").count(),3,"Original Written rubric/4");
   await modal.locator(".g11-supp-modal-close").click();
   root=await open("luyen-tap-on-tap-cuoi-nam","YEAR_PRACTICE");
   assert.equal(await root.locator(".thpt-r4-practice-lesson[data-thpt-grade='11']").count(),10);
   assert.equal(await root.locator(".g11-supp-topic-tab").count(),10,"Ten horizontal year-end topics");
   assert.equal(await root.locator(".thpt-r4-practice-lesson:visible").count(),1,"One selected topic's role cards only");
   assert.equal(await root.locator(".g11-supp-exercise").count(),0,"No inline year-end question bank");
   await root.locator('[data-g11-supp-open="TRIG-SGK_CORE"]').click();
   modal=page.locator("dialog.g11-supp-dialog[open]");
   assert.equal(await modal.locator(".g11-supp-exercise:visible").count(),1);
   assert.equal(await modal.locator(".g11-supp-deck-number").count(),1);
   await modal.locator(".g11-supp-modal-close").click();
   await root.locator(".g11-supp-topic-tab").last().click();
   assert.equal(await root.locator(".thpt-r4-practice-lesson:visible").count(),1);
   assert.equal(await root.locator(".g11-supp-topic-tab[aria-selected=true]").count(),1);
   await root.locator('[data-g11-supp-open="INTEGRATE-SGK_APPLICATION"]').click();
   modal=page.locator("dialog.g11-supp-dialog[open]");
   assert.equal(await modal.locator(".g11-supp-exercise:visible").count(),1,"Correct linked original Application in modal");
   await modal.locator(".g11-supp-modal-close").click();
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
