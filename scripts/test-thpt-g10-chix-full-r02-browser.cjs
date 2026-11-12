"use strict";
/* G10 ChIX FULL R02 RELEASE AP1–AP5/Q16, browser 390/820/1440;
 * tests voluntary public practice, not held-out independent Readiness/Mastery.
 */
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const {verifyModelBLesson}=require("./test-thpt-g10-model-b-browser-helper.cjs");
const base="http://127.0.0.1:8765/thpt-preview/sgk/chuong-ix/";
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [390,820,1440]){
   const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
   const errors=[];page.on("pageerror",e=>errors.push(String(e)));
   try{
    for(const [n,start]of [[26,1],[27,6]]){
     const response=await page.goto(base+"bai-"+n+"/",{waitUntil:"networkidle",timeout:90000});
     assert(response?.ok(),"Missing G10 ChIX B"+n);
     const article=page.locator("article.md-content__inner");
     if(await verifyModelBLesson(page,{n,chapter:"ix",tries:5,helps:7,
       images:n===26?["THPT_G10_B26_COIN_DIE_SAMPLE_SPACE.svg"]:["THPT_G10_B27_WITHOUT_REPLACEMENT_TREE.svg"]})){
       const article=page.locator("article.md-content__inner");
       const tab=article.locator(".tabbed-set").first().locator(".tabbed-labels label")
        .filter({hasText:/^Kiến thức SGK$/});await tab.click();
       const items=article.locator('[data-thpt-first-try-id^="THPT-G10-CHIX-TRY"]');
       const helps=article.locator('[data-thpt-help-id^="HELP-G10-CHIX-TRY"]');
       assert.equal(await items.count(),5,"B"+n+" five original source-locked First Try items");
       assert.equal(await helps.count(),5,"B"+n+" five original five-step D6 help items");
       const answers=article.locator("details.question:visible"),tips=article.locator("details.tip:visible");
       assert.equal(await answers.count(),5,"B"+n+" every original First Try visible in Knowledge tab");
       assert.equal(await tips.count(),5,"B"+n+" every original D6 visible in Knowledge tab");
       for(let k=0;k<5;k++){
        const id="THPT-G10-CHIX-TRY"+String(start+k).padStart(2,"0");
        assert.equal(await items.nth(k).getAttribute("data-thpt-first-try-id"),id,
          "B"+n+" canonical item/order");
        assert.equal(await items.nth(k).getAttribute("data-ped-first-try"),"1",
          "B"+n+" intentional voluntary self-attempt");
        assert.equal(await helps.nth(k).getAttribute("data-thpt-help-id"),
          "HELP-G10-CHIX-TRY"+String(start+k).padStart(2,"0"),"B"+n+" exact remedial ID");
        const answer=answers.nth(k),hint=tips.nth(k);
        assert(!(await answer.evaluate(x=>x.open))&&!(await hint.evaluate(x=>x.open)),
          "B"+n+" First Try/D6 must be hidden before voluntary choice");
        await answer.locator("summary").click();
        assert(await answer.evaluate(x=>x.open),"B"+n+" learner must be able to open answer");
        assert((await answer.innerText()).includes("Đáp án và lập luận"),
          "B"+n+" original reasoned answer missing "+id);
        await answer.locator("summary").click();
        assert(!(await answer.evaluate(x=>x.open)),"B"+n+" learner can collapse answer");
        await hint.locator("summary").click();
        assert.equal(await hint.locator("strong").filter({hasText:/^Bước [1-5]:$/}).count(),5,
          "B"+n+" original five-step D6 not preserved "+id);
        await hint.locator("summary").click();
       }
      }else{
const cards=article.locator('details[data-thpt-first-try-id^="THPT-G10-CHIX-TRY"]');
     const helps=article.locator('details[data-thpt-help-id^="HELP-G10-CHIX-TRY"]');
     assert.equal(await cards.count(),5,"Five canonical First Try B"+n);
     assert.equal(await helps.count(),5,"Five canonical five-step D6 B"+n);
     for(let k=0;k<5;k++){
      const id="THPT-G10-CHIX-TRY"+String(start+k).padStart(2,"0");
      const c=cards.nth(k),h=helps.nth(k);
      assert.equal(await c.getAttribute("data-thpt-first-try-id"),id);
      assert.equal(await c.getAttribute("data-ped-first-try"),"1","Voluntary pre-Core placement");
      assert.equal(await h.getAttribute("data-thpt-help-id"),"HELP-G10-CHIX-TRY"+String(start+k).padStart(2,"0"));
      assert.equal(await c.getAttribute("open"),null,"Answer initially hidden "+id);
      assert.equal(await h.getAttribute("open"),null,"Recovery initially hidden "+id);
      const answer=c.locator("p").first();assert(!(await answer.isVisible()),"No answer before voluntary open "+id);
      await c.locator("summary").click();
      assert(await answer.isVisible(),"Student can inspect reasoned solution "+id);
      assert((await c.innerText()).includes("Đáp án và lập luận"),"Reasoned explanation "+id);
      await c.locator("summary").click();assert(!(await answer.isVisible()),"Student can collapse "+id);
      await h.locator("summary").click();
      assert.equal(await h.locator("strong").filter({hasText:/^Bước [1-5]:$/}).count(),5,"All reviewed remediation steps "+id);
      await h.locator("summary").click();
     }
     
      }
      const text=await article.innerText();
     assert(!/PED1 —|PED6 —|LESSON_ID|CONTENT_READY|SOURCE_RECEIPT/.test(text),"Author review metadata leaked B"+n);
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
     assert(overflow<=20,"ChIX B"+n+" horizontal overflow at "+width);
    }
    const q=await page.goto(base+"tu-kiem-tra-chuong/",{waitUntil:"networkidle",timeout:90000});
    assert(q?.ok(),"Missing ChIX client-only Final Submit");
    const root=page.locator('[data-g10-chapter-selfcheck="CHIX"]');
    await root.locator(".g10sc-progress").waitFor();
    assert.equal(await root.locator("[data-g10sc-jump]").count(),6,"Six existing public client questions");
    assert.equal(await root.locator(".g10sc-review").count(),0,"No answer/rubric before Final Submit");
    assert.equal(await page.evaluate(()=>typeof window.THPTProtectedReadiness),"undefined","No official protected readiness engine");
    assert.equal(errors.length,0,"Browser JS errors "+width+": "+errors.join("; "));
    console.log("PASS G10 ChIX FULL R02 @"+width+": 10 source-locked Golden First Try and 10 optional five-step D6, Q16 six public questions no early review.");
   }finally{await page.close()}
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exitCode=1});
