"use strict";
/* G10 ChVII FULL R03 browser AP1–AP5/Q15/Q16 on preview only;
 * public selfchecks are client self-compare, never official protected RD1/Mastery.
 */
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const {verifyModelBLesson}=require("./test-thpt-g10-model-b-browser-helper.cjs");
const {chviiEditorialReceiptRows}=require("./thpt-q18-g10-source-receipt.cjs");
const base="http://127.0.0.1:8765/thpt-preview/";
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [390,820,1440]){
   const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
   const jsErrors=[];page.on("pageerror",e=>jsErrors.push(String(e)));
   try{
    for(const [n,count]of [[19,7],[20,5],[21,5],[22,8]]){
     const response=await page.goto(base+"sgk/chuong-vii/bai-"+n+"/",{waitUntil:"networkidle",timeout:90000});
     assert(response?.ok(),"Missing G10 ChVII B"+n+" "+width);
     const article=page.locator("article.md-content__inner");
     if(await verifyModelBLesson(page,{n,chapter:"vii",tries:count,helps:count+2,
       // B22 original source had a separate optional disclosure.
       // Signed ChVII §X-F Golden source removes that admin disclosure and
       // keeps eight original canonical First Try answer disclosures.
       questions:n===22&&!chviiEditorialReceiptRows().has("B22")?count+1:count,
       images:n===19?["G10_B19_LINE_NORMAL_R02.svg"]:
              n===20?["G10_B20_POINT_LINE_DISTANCE_R02.svg"]:
              n===21?["G10_B21_CIRCLE_TANGENT_R02.svg"]:
                       ["THPT_G10_CHVII_ELLIPSE_TRANSFER_D5_R00.svg",
                        "THPT_G10_CHVII_HYPERBOLA_TRANSFER_D5_R00.svg",
                        "G10_B22_PARABOLA_FOCUS_R02.svg"]})){
       const first=article.locator('[data-thpt-first-try-id^="THPT-G10-CHVII-TRY"]');
       const extra=article.locator('[data-thpt-first-try-id^="THPT-G10-CHVII-TRY-"]');
       assert.equal(await first.count(),count,"B"+n+" original canonical and transfer First Try coverage");
       assert.equal(await extra.count(),n===22?2:0,"B"+n+" Q15 transfer placement count");
       for(let k=0;k<count;k++){
        const it=first.nth(k);
        const id=await it.getAttribute("data-thpt-first-try-id"),help=await it.getAttribute("data-thpt-help-ref");
        assert(id&&help&&await article.locator('[data-thpt-help-id="'+help+'"]').count()===1,
          "B"+n+" source-locked First Try/outcome/D6 return "+id);
       }
      }else{
const first=article.locator('[data-thpt-first-try-id^="THPT-G10-CHVII-TRY"]');
     const helps=article.locator('[data-thpt-help-id^="HELP-G10-CHVII-TRY"],[data-thpt-help-id^="HELP-G10-CHVII-ELLIPSE"],[data-thpt-help-id^="HELP-G10-CHVII-HYPERBOLA"]');
     const answer=article.locator("details.question"),tips=article.locator("details.tip");
     assert.equal(await first.count(),count,"Canonical First Try placements B"+n);
     assert.equal(await helps.count(),count,"Canonical HELP IDs B"+n);
     assert.equal(await answer.count(),count,"One voluntary answer disclosure per First Try B"+n);
     assert.equal(await tips.count(),count,"One voluntary D6 help per First Try B"+n);
     for(let i=0;i<count;i++){
      const id=await first.nth(i).getAttribute("data-thpt-first-try-id"),link=await first.nth(i).getAttribute("data-thpt-help-ref");
      assert(id&&link&&await article.locator('[data-thpt-help-id="'+link+'"]').count()===1,"Unique Q15/HELP return "+id);
      const fold=answer.nth(i),hint=tips.nth(i);
      assert.equal(await fold.getAttribute("open"),null,"No automatic answer "+id);
      assert.equal(await hint.getAttribute("open"),null,"No automatic D6 "+id);
      const text=fold.locator("p").first();
      assert(!(await text.isVisible()),"Answer hidden until voluntary reveal "+id);
      await fold.locator("summary").click();assert(await text.isVisible(),"Student can reveal "+id);
      await fold.locator("summary").click();assert(!(await text.isVisible()),"Student can close "+id);
      await hint.locator("summary").click();
      assert((await hint.innerText()).includes("Tự sửa")||(await hint.innerText()).includes("Luyện"),"Five-step D6 instructions rendered "+id);
      await hint.locator("summary").click();
     }
     if(n===22){
      const imgs=article.locator('figure[data-thpt-reviewed-d5] img');
      assert.equal(await imgs.count(),2,"Two reviewed D5 transfer geometry figures");
      for(let i=0;i<2;i++){
       const im=imgs.nth(i);await im.scrollIntoViewIfNeeded();
       await page.waitForFunction(index=>{const img=document.querySelectorAll('figure[data-thpt-reviewed-d5] img')[index];return !!img&&img.complete&&img.naturalWidth>0;},i);
       const sz=await im.evaluate(el=>({img:el.getBoundingClientRect().width,parent:el.parentElement.getBoundingClientRect().width}));
       assert(sz.img<=sz.parent+2,"Reviewed D5 SVG not responsive "+width);
      }
     }
     
      }
      assert((await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth))<=20,"Horizontal overflow B"+n+" @"+width);
     assert(!/NOTEBOOKLM_PENDING|CONTENT_READY|SOURCE_RECEIPT|RELEASE_AUTHORIZATION/.test(await article.innerText()),"Academic authoring metadata leaked");
    }
    const writtenResponse=await page.goto(base+"thu-vien/tu-luan-chuong-vii/",{waitUntil:"networkidle",timeout:90000});
    assert(writtenResponse?.ok(),"New ChVII public Written page missing");
    const cards=page.locator('[data-thpt-written-canonical^="THPT-G10-CHVII-W22-"][data-thpt-written-canonical$="-TR01"][data-thpt-filter-item]');
    assert.equal(await cards.count(),2,"Two new unique written items, no duplicate Anchor");
    for(let i=0;i<2;i++){
     const item=cards.nth(i),id=await item.getAttribute("data-thpt-written-canonical"),folds=item.locator("details");
     assert.equal(await folds.count(),2,"Hint and solution must each be voluntary "+id);
     assert.equal(await folds.nth(0).getAttribute("open"),null,"Hint initially closed "+id);
     assert.equal(await folds.nth(1).getAttribute("open"),null,"Rubric initially closed "+id);
     assert(!(await folds.nth(1).locator("table").isVisible()),"Rubric inaccessible before voluntary opening "+id);
     await folds.nth(1).locator("summary").click();
     assert(await folds.nth(1).locator("table").isVisible(),"Reviewed rubric accessible post-attempt "+id);
     await folds.nth(1).locator("summary").click();
    }
    const self=await page.goto(base+"sgk/chuong-vii/tu-kiem-tra-chuong/",{waitUntil:"networkidle",timeout:90000});
    assert(self?.ok(),"ChVII client selfcheck missing");
    const m=page.locator('[data-g10-chapter-selfcheck="CHVII"]');await m.locator(".g10sc-progress").waitFor();
    assert.equal(await m.locator("[data-g10sc-jump]").count(),22,"Historical 22 client questions unchanged");
    assert.equal(await m.locator(".g10sc-review").count(),0,"No Q16 solution before Final Submit");
    assert.equal(await page.evaluate(()=>typeof window.THPTProtectedReadiness),"undefined","No official RD1 engine");
    assert.equal(jsErrors.length,0,"Browser errors "+width+": "+jsErrors.join("; "));
    console.log("PASS G10 ChVII FULL R03 @"+width+": 25 First Try/D6, 2 reviewed D5, 2 post-attempt Written, 22 client Final Submit no Mastery.");
   }finally{await page.close()}
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exitCode=1});
