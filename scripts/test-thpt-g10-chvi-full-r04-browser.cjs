"use strict";
/* Exact-head RELEASE AP1-AP5/Q16 browser: G10 ChVI FULL R04, 390/820/1440.
 * 19 public First Tries are voluntary unscored; 2 new public WRITTEN selfchecks
 * are NEVER self-revealed before Final Submit, no Mastery or storage.
 */
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const base="http://127.0.0.1:8765/thpt-preview/sgk/chuong-vi/";
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [390,820,1440]){
   const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
   const errors=[];page.on("pageerror",e=>errors.push(String(e)));
   try{
    for(const {n,count}of [{n:15,count:5},{n:16,count:5},{n:17,count:5},{n:18,count:4}]){
     const r=await page.goto(base+"bai-"+n+"/",{waitUntil:"networkidle",timeout:90000});
     assert(r?.ok(),"Missing SGK B"+n);
     const cards=page.locator('details[data-ped-first-try="1"]'),help=page.locator('details[data-thpt-help-id^="HELP-G10-CHVI-TRY"]');
     assert.equal(await cards.count(),count,"19 reviewed per-subtopic FIRST_TRY placements B"+n);
     assert.equal(await help.count(),count,"Five-step D6 for each outcome B"+n);
     assert.equal(await page.locator('details[data-ped-first-try="1"][open]').count(),0,"First Try answers initially closed B"+n);
     assert.equal(await page.locator('details[data-thpt-help-id^="HELP-G10-CHVI-TRY"][open]').count(),0,"D6 default closed");
     for(const k of [0,count-1]){
      const card=cards.nth(k),answer=card.locator(".thpt-r4-first-try-answer");
      assert.equal(await answer.isVisible(),false,"No pre-attempt answer "+n+"/"+k);
      await card.locator("summary").click();
      assert(await answer.isVisible(),"Voluntary answer reveal only "+n+"/"+k);
      assert((await answer.innerText()).includes("Vì sao:"),"Reviewed reasoning attached "+n+"/"+k);
      await card.locator("summary").click();
      assert.equal(await answer.isVisible(),false,"Answer collapses again "+n+"/"+k);
      const d6=help.nth(k);await d6.locator("summary").click();
      assert.equal(await d6.locator("li").count(),5,"Five-step remedial sequence "+n+"/"+k);
      await d6.locator("summary").click();
     }
     if(n===15||n===18){
      const src=n===15?"THPT_G10_CHVI_B15_FUNCTION_MAPPING_D5_R03.svg":"THPT_G10_CHVI_B18_RADICAL_FLOW_D5_R03.svg";
      const image=page.locator('img[src*="'+src+'"]');
      assert.equal(await image.count(),1,"Independent Q07/PED4 D5 exists B"+n);
      await image.scrollIntoViewIfNeeded();
      const metrics=await image.evaluate(async img=>{if(!img.complete)await new Promise((done,fail)=>{img.addEventListener("load",done,{once:true});img.addEventListener("error",fail,{once:true})});return {complete:img.complete,width:img.naturalWidth}});
      assert(metrics.complete&&metrics.width>0,"Source-locked SVG renders "+src);
     }
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
     assert(overflow<=20,"B"+n+" horizontal overflow at "+width+" "+overflow);
    }
    const self=await page.goto(base+"tu-kiem-tra-chuong/",{waitUntil:"networkidle",timeout:90000});assert(self?.ok(),"Missing CHVI Final Submit route");
    const root=page.locator('[data-g10-chapter-selfcheck="CHVI"]');await root.locator(".g10sc-progress").waitFor();
    assert.equal(await root.locator("[data-g10sc-jump]").count(),20,"18 old + 2 approved R04");
    assert.equal(await root.locator(".g10sc-review").count(),0,"No answer/rubric visible before Final Submit");
    for(const idx of [18,19]){
     await root.locator('[data-g10sc-jump="'+idx+'"]').click();
     const txt=await root.innerText();
     assert(!txt.includes("Hỗ trợ tự khắc phục sau Final Submit")&&!txt.includes("Hướng dẫn tự đối chiếu:"),"No R04 answer/rubric/D6 before Final Submit");
     await root.locator('textarea').first().fill("Em tự làm trước khi nộp; trình bày bài giải.");
    }
    await root.locator("[data-g10sc-final]").click();
    for(const idx of [18,19]){
     await root.locator('[data-g10sc-jump="'+idx+'"]').click();
     const txt=await root.innerText();
     assert(txt.includes("Lời giải:")&&txt.includes("Hướng dẫn tự đối chiếu:"),"R04 solution and rubric only after Final Submit");
     assert(txt.includes("Hỗ trợ tự khắc phục sau Final Submit"),"R04 reviewed D6 only after Final Submit");
    }
    const post=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth-innerWidth}));
    assert(post.overflow<=20,"CHVI Final Submit horizontal overflow "+width);
    assert.equal(errors.length,0,"Browser page errors at "+width+" "+errors.slice(0,3).join("; "));
    console.log("PASS G10 ChVI FULL R04 @"+width+": 19 First Tries/19 D6/2 SVG and 20 public Final Submit selfchecks no pre-submit leak.");
   }finally{await page.close()}
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exitCode=1});
