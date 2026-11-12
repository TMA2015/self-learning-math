"use strict";
/* RELEASE R4/AP1–AP5/Q16 G10 ChVIII FULL R02; not independent academic review.
 * Browser validates Material native disclosures, 12 canonical First Try/D6 and
 * unchanged 14-client-question Final Submit at 390/820/1440.
 */
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const {verifyModelBLesson}=require("./test-thpt-g10-model-b-browser-helper.cjs");
const root="http://127.0.0.1:8765/thpt-preview/sgk/chuong-viii/";
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [390,820,1440]){
   const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
   const errors=[];page.on("pageerror",e=>errors.push(String(e)));
   try{
    for(const [n,start]of [[23,1],[24,5],[25,9]]){
     const response=await page.goto(root+"bai-"+n+"/",{waitUntil:"networkidle",timeout:90000});
     assert(response?.ok(),"Missing Chapter VIII B"+n);
     const article=page.locator("article.md-content__inner");
     if(await verifyModelBLesson(page,{n,chapter:"viii",tries:4,helps:6,
       questions:n===25?5:4,
       images:n===23?["G10_B23_ADD_MULTIPLY_CHOICES_R02.svg"]:
              n===24?["G10_B24_ORDER_VS_COMBINATION_R02.svg"]:
                       ["G10_B25_PASCAL_TRIANGLE_R02.svg"]})){
       const first=article.locator("[data-thpt-first-try-id]");
       const helps=article.locator('[data-thpt-help-id^="HELP-G10-CHVIII-TRY"]');
       assert.equal(await first.count(),4,"B"+n+" 4 canonical First Try IDs");
       assert.equal(await helps.count(),4,"B"+n+" 4 canonical D6 helpers");
       for(let k=0;k<4;k++){
        const v=String(start+k).padStart(2,"0");
        assert.equal(await first.nth(k).getAttribute("data-thpt-first-try-id"),
          "THPT-G10-CHVIII-TRY"+v,"B"+n+" Q15 canonical ID order");
        assert.equal(await helps.nth(k).getAttribute("data-thpt-help-id"),
          "HELP-G10-CHVIII-TRY"+v,"B"+n+" original D6 mapping");
       }
       const knowledge=article.locator(".tabbed-set").first().locator(".tabbed-labels label")
         .filter({hasText:/^Kiến thức SGK$/});
       await knowledge.click();
       const answers=article.locator("details.question:visible"),tips=article.locator("details.tip:visible");
       assert((await answers.count())>=4&&(await tips.count())>=4,
         "B"+n+" all reviewed First Try/D6 must remain visible on Knowledge tab");
       for(let k=0;k<4;k++){
        const a=answers.nth(k),h=tips.nth(k);
        assert(!(await a.evaluate(x=>x.open))&&!(await h.evaluate(x=>x.open)),"B"+n+" no automatic solution");
        await a.locator("summary").click();
        assert((await a.innerText()).includes("Lập luận"),"B"+n+" reviewed worked reasoning");
        await a.locator("summary").click();
        assert(!(await a.evaluate(x=>x.open)),"B"+n+" original First Try can close");
        await h.locator("summary").click();
        assert.equal(await h.locator("li").count(),5,"B"+n+" five D6 remediation steps");
        await h.locator("summary").click();
       }
      }else{
const first=article.locator("[data-thpt-first-try-id]");
     const helps=article.locator('[data-thpt-help-id^="HELP-G10-CHVIII-TRY"]');
     const answers=article.locator("details.question");
     const recovery=article.locator("details.tip");
     assert.equal(await first.count(),4,"Four canonical First Try identities B"+n);
     assert.equal(await helps.count(),4,"Four D6 canonical identities B"+n);
     assert.equal(await answers.count(),4,"Four native voluntary answer disclosures B"+n);
     assert.equal(await recovery.count(),4,"Four native D6 disclosures B"+n);
     for(let k=0;k<4;k++){
      const id="THPT-G10-CHVIII-TRY"+String(start+k).padStart(2,"0");
      assert.equal(await first.nth(k).getAttribute("data-thpt-first-try-id"),id,"Canonical ID order");
      assert.equal(await helps.nth(k).getAttribute("data-thpt-help-id"),"HELP-G10-CHVIII-TRY"+String(start+k).padStart(2,"0"),"Q15 one D6 identity");
      const ans=answers.nth(k),hint=recovery.nth(k);
      assert.equal(await ans.getAttribute("open"),null,"No answer open before voluntary disclosure "+id);
      assert.equal(await hint.getAttribute("open"),null,"No D6 open before voluntary disclosure "+id);
      const p=ans.locator("p").first();
      assert(!(await p.isVisible()),"Answer text hidden by default "+id);
      await ans.locator("summary").click();
      assert(await p.isVisible(),"Answer available after voluntary open "+id);
      assert((await ans.innerText()).includes("Lập luận"),"Reviewed reasoning visible after voluntary open "+id);
      await ans.locator("summary").click();
      assert(!(await p.isVisible()),"Answer closes "+id);
      await hint.locator("summary").click();
      assert.equal(await hint.locator("li").count(),5,"Five remediation steps "+id);
      await hint.locator("summary").click();
      assert.equal(await hint.getAttribute("open"),null,"D6 can collapse "+id);
     }
     
      }
      const visible=await article.innerText();
     assert(!visible.includes("??? question")&&!visible.includes("??? tip"),"Raw unrendered disclosure B"+n);
     assert(!/ACADEMIC_VERDICT|CONTENT_READY|NOTEBOOKLM|RELEASE_AUTHORIZATION/.test(visible),"Reviewer metadata leaked B"+n);
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
     assert(overflow<=20,"Horizontal overflow B"+n+" at "+width+": "+overflow);
    }
    const check=await page.goto(root+"tu-kiem-tra-chuong/",{waitUntil:"networkidle",timeout:90000});
    assert(check?.ok(),"Missing ChVIII client-only Final Submit");
    const mount=page.locator('[data-g10-chapter-selfcheck="CHVIII"]');
    await mount.locator(".g10sc-progress").waitFor();
    assert.equal(await mount.locator("[data-g10sc-jump]").count(),14,"Original 14 public questions unchanged");
    assert.equal(await mount.locator(".g10sc-review").count(),0,"No answer or rubric before Final Submit");
    assert.equal(await page.locator("[data-thpt-secure-readiness]").count(),0,"No protected readiness");
    assert.equal(await page.evaluate(()=>typeof window.THPTProtectedReadiness),"undefined","Protected engine not loaded");
    const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
    assert(overflow<=20,"ChVIII self-check overflow "+width);
    assert.equal(errors.length,0,"Browser errors "+width+": "+errors.join("; "));
    console.log("PASS G10 ChVIII R02 @"+width+": 12 canonical First Try/D6, answer hidden by default, old 14 Q16, 0 Mastery, no viewport overflow.");
   }finally{await page.close()}
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exitCode=1});
