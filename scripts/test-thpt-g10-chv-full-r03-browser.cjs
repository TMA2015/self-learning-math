"use strict";
/* G10 ChV FULL R03 RELEASE browser AP1–AP5, one Golden and no Q16 bypass.
 * Reviewed PED 14 FIRST_TRY items are optional self-disclosure before unchanged
 * original R01/R02 SGK knowledge and existing canonical Core/Practice bank.
 */
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const {verifyModelBLesson}=require("./test-thpt-g10-model-b-browser-helper.cjs");
const base="http://127.0.0.1:8765/thpt-preview/sgk/chuong-v/";
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const viewport of [{width:390,height:844},{width:820,height:1180},{width:1440,height:900}]){
   const page=await browser.newPage({viewport});
   try{
    for(const {n,first,count}of [{n:12,first:1,count:4},{n:13,first:5,count:5},{n:14,first:10,count:5}]){
     const res=await page.goto(base+"bai-"+n+"/",{waitUntil:"networkidle",timeout:90000});
     assert(res?.ok(),"G10 ChV student Knowledge page missing B"+n);
     if(await verifyModelBLesson(page,{n,chapter:"v",tries:count,helps:2,images:[
       n===12?"THPT_G10_B12_ERROR_INTERVAL_D5_R02_REVIEWED.svg":
       n===13?"THPT_G10_B13_QUARTILES_D5_R01.svg":"THPT_G10_B14_DISPERSION_D5_R01.svg"
     ]})){
      const article=page.locator("article.md-content__inner");
      const ids=article.locator("[data-thpt-first-try-id]");
      const actual=await ids.evaluateAll(nodes=>nodes.map(x=>x.getAttribute("data-thpt-first-try-id")));
      assert.deepEqual(actual,Array.from({length:count},(_,i)=>
        "THPT-G10-CHV-TRY"+String(first+i).padStart(2,"0")),
        "B"+n+" canonical original First Try ID/placement/order");
      const tab=article.locator(".tabbed-set").first().locator(".tabbed-labels label")
        .filter({hasText:/^Khám phá kiến thức$/});
      await tab.click();
      const answers=article.locator("details.question");
      assert.equal(await answers.count(),count,"B"+n+" one reviewed voluntary answer per First Try");
      for(let k=0;k<count;k++){
       const fold=answers.nth(k),content=fold.locator(".thpt-r4-first-try-answer");
       assert.equal(await content.count(),1,"B"+n+" original semantic answer block");
       assert(!(await content.isVisible()),"B"+n+" no pre-reveal answer");
       await fold.locator("summary").click();
       assert(await content.isVisible(),"B"+n+" student can reveal original reasoning");
       const s=await content.innerText();
       assert(s.includes("Đối chiếu kết quả")&&s.includes("Giải thích vì sao"),
         "B"+n+" original answered reasoning/correction not preserved");
       const links=content.locator('a[href*="?item=THPT-G10-B"]');
       assert.equal(await links.count(),1,"B"+n+" reviewed remediation deep link");
       await fold.locator("summary").click();
       assert(!(await content.isVisible()),"B"+n+" student can close original answer");
      }
     }else{
const disc=page.locator('details.thpt-r4-pedagogical-note[data-thpt-first-try-id]');
     assert.equal(await disc.count(),count,"B"+n+" First Try count on real rendered DOM");
     assert.equal(await page.locator('details[data-thpt-first-try-id][open]').count(),0,"First Try answers must start closed B"+n);
     const head=await page.locator(".md-content h2").allTextContents();
     const a=head.findIndex(x=>x.includes("Trước khi học")),b=head.findIndex(x=>x.includes("Kiến thức SGK"));
     assert(a>=0&&b>a,"Meaning-first sequence before formulas B"+n);
     for(let k=0;k<count;k++){
      const row=disc.nth(k),id="THPT-G10-CHV-TRY"+String(first+k).padStart(2,"0");
      assert.equal(await row.getAttribute("data-thpt-first-try-id"),id,"Canonical First Try ID and order");
      assert.equal(await row.locator("summary").innerText(),"Đối chiếu","Owner-approved concise First Try title");
      const content=row.locator(".thpt-r4-first-try-answer");
      assert.equal(await content.count(),1,"One semantic answer container distinct from visible summary "+id);
      assert.equal(await content.isVisible(),false,"Closed answer must be hidden "+id);
      await row.locator("summary").click();
      assert.equal(await row.getAttribute("open"),"","Learner voluntarily opened own answer "+id);
      assert(await content.isVisible(),"Reviewed answer visible on learner choice "+id);
      const revealed=await content.innerText();
      assert(revealed.includes("Đối chiếu kết quả")&&revealed.includes("Giải thích vì sao"),"Reviewed answer and reasoning present "+id);
      assert(!revealed.includes("**Đối chiếu kết quả:**"),"No raw Markdown label leaks in rendered answer "+id);
      assert.equal(await content.locator('a[href^="../luyen-tap/?item=THPT-G10-B"]').count(),1,"D6 deep-link to original canonical item "+id);
      await row.locator("summary").click();
      assert.equal(await content.isVisible(),false,"Learner can close answer "+id);
     }
     const figure=page.locator(".md-content figure img").first();
     assert(await figure.count(),"Original D5 must still appear B"+n);
     await figure.scrollIntoViewIfNeeded();
     await figure.evaluate(async img=>{if(!img.complete)await new Promise((done,fail)=>{img.addEventListener("load",done,{once:true});img.addEventListener("error",fail,{once:true})});if(img.decode)await img.decode()});
     assert(await figure.evaluate(img=>img.naturalWidth>0),"Original source-locked D5 image must load B"+n);
     
     }
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
     assert(overflow<=20,"Unexpected horizontal overflow B"+n+" @"+viewport.width+": "+overflow);
    }
    const res=await page.goto(base+"tu-kiem-tra-chuong/",{waitUntil:"networkidle",timeout:90000});
    assert(res?.ok(),"Protected G10 ChV self-check route still exists");
    assert.equal(await page.locator('[data-g10-chapter-selfcheck="CHV"]').count(),1);
    assert.equal(await page.locator("[data-thpt-first-try-id]").count(),0,"First Try not included in protected Final Submit");
    console.log("PASS G10 ChV R03 learner browser "+viewport.width+"px: B12–B14, 14 hidden-first attempts, D6 same IDs, original D5, Q16 route.");
   }finally{await page.close()}
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
