"use strict";
/* RELEASE Golden AP1–AP5/Q16 browser QA, G10 ChII FULL R03; client demo only.
 * Ten First Tries share existing four canonical R01 HELP resources.
 */
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const {verifyModelBLesson}=require("./test-thpt-g10-model-b-browser-helper.cjs");
const root="http://127.0.0.1:8765/thpt-preview/sgk/chuong-ii/";
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [390,820,1440]){
   const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
   const errors=[];page.on("pageerror",e=>errors.push(String(e)));
   try{
    for(const [n,start]of [[3,1],[4,6]]){
     const response=await page.goto(root+"bai-"+n+"/",{waitUntil:"networkidle",timeout:90000});
     assert(response?.ok(),"Missing G10 ChII B"+n);
     const article=page.locator("article.md-content__inner");
     if(await verifyModelBLesson(page,{n,chapter:"ii",tries:5,helps:2,
       images:n===3?["THPT_G10_B03_HALFPLANES_D5_R01.svg"]:["THPT_G10_B04_FEASIBLE_POLYGON_D5_R01.svg"]})){
      const items=article.locator('[data-thpt-first-try-id^="THPT-G10-CHII-TRY"]');
      assert.equal(await items.count(),5,"B"+n+" five canonical Q15 placements");
      for(let k=0;k<5;k++){
       const id="THPT-G10-CHII-TRY"+String(start+k).padStart(2,"0");
       const it=items.nth(k);
       assert.equal(await it.getAttribute("data-thpt-first-try-id"),id,"B"+n+" original Q15 ID/order");
       const help=await it.getAttribute("data-thpt-help-ref");
       assert(help&&await article.locator('[data-thpt-help-id="'+help+'"]').count()===1,
         "B"+n+" unique original HELP mapping "+id);
      }
     }else{
const first=article.locator('[data-thpt-first-try-id^="THPT-G10-CHII-TRY"]');
     const answers=article.locator("details.question");
     const help=article.locator('[data-thpt-help-id^="HELP-G10-B0"]');
     assert.equal(await first.count(),5,"Five distinct first tries B"+n);
     assert.equal(await answers.count(),5,"Five voluntary Golden answer folds B"+n);
     assert.equal(await help.count(),2,"Exactly two existing R01 HELP resources, no duplicates B"+n);
     for(let k=0;k<5;k++){
      const id="THPT-G10-CHII-TRY"+String(start+k).padStart(2,"0");
      const item=first.nth(k),ans=answers.nth(k);
      assert.equal(await item.getAttribute("data-thpt-first-try-id"),id,"Canonical Q15 ID "+id);
      const ref=await item.getAttribute("data-thpt-help-ref");
      assert(ref&&await article.locator('[data-thpt-help-id="'+ref+'"]').count()===1,"Reviewed original remediation link "+id);
      assert.equal(await ans.getAttribute("open"),null,"No answer before voluntary open "+id);
      const detail=ans.locator("p").first();
      assert(!(await detail.isVisible()),"Solution hidden "+id);
      await ans.locator("summary").click();
      assert(await detail.isVisible(),"Visible only after learner clicks "+id);
      assert((await ans.innerText()).includes("Đáp án canonical")&&(await ans.innerText()).includes("Tự khắc phục"),"Approved solution/D6 review content "+id);
      await ans.locator("summary").click();
      assert(!(await detail.isVisible()),"Can close solution "+id);
     }
     
     }
     const text=await article.innerText();
     assert(!text.includes("??? question")&&!/NOTEBOOKLM_PENDING|CONTENT_READY|SCORING: UNSCORED/.test(text),"No authoring metadata/raw Markdown B"+n);
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
     assert(overflow<=20,"Horizontal overflow B"+n+" at "+width+": "+overflow);
    }
    const response=await page.goto(root+"tu-kiem-tra-chuong/",{waitUntil:"networkidle",timeout:90000});
    assert(response?.ok(),"Missing G10 ChII 14 public client selfchecks");
    const mount=page.locator('[data-g10-chapter-selfcheck="CHII"]');
    await mount.locator(".g10sc-progress").waitFor();
    assert.equal(await mount.locator("[data-g10sc-jump]").count(),14,"Historical 14 public client questions, unchanged");
    assert.equal(await mount.locator(".g10sc-review").count(),0,"No feedback/answer before Final Submit");
    assert.equal(await page.evaluate(()=>typeof window.THPTProtectedReadiness),"undefined","Protected RD1 engine must not load");
    assert.equal(errors.length,0,"JS errors "+errors.join("; "));
    console.log("PASS G10 ChII FULL R03 @"+width+": 10 reviewed pre-Core, reused four original D6, unchanged 14 public Final Submit client only");
   }finally{await page.close()}
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exitCode=1});
