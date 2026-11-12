"use strict";
/* RELEASE P2 UI contract browser: one canonical SGK knowledge navigation
 * for all 79 published G10/G11/G12 lessons, no THCS/END leakage.
 * Chromium 390/820/1440 is AP evidence only, not owner Safari P2.
 */
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const site="http://127.0.0.1:8765";
const ranges={
  10:[2,4,6,11,14,18,22,25,27],
  11:[4,7,9,14,17,21,27,30,33],
  12:[5,8,10,13,17,19]
};
const chapters=["i","ii","iii","iv","v","vi","vii","viii","ix"];
const chapterOf=(grade,lesson)=>chapters[ranges[grade].findIndex(last=>lesson<=last)];
const baseOf=grade=>"/thpt-preview/sgk/"+(grade===10?"":"lop-"+grade+"/");
const routeOf=(grade,lesson)=>baseOf(grade)+"chuong-"+chapterOf(grade,lesson)+"/bai-"+lesson+"/";
const eqHref=(actual,expected)=>assert.equal(new URL(actual,site).pathname,expected);
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  const cases=[];
  for(const grade of [10,11,12])for(let lesson=1;lesson<=ranges[grade].at(-1);lesson++)cases.push({grade,lesson});
  assert.equal(cases.length,79);
  for(const viewport of [{width:390,height:844},{width:820,height:1180},{width:1440,height:900}]){
   const page=await browser.newPage({viewport});
   try{
    const samples=viewport.width===390?cases:cases.filter(x=>[1,2,14,18,ranges[x.grade].at(-1)].includes(x.lesson));
    for(const {grade,lesson}of samples){
     const path=routeOf(grade,lesson);
     const response=await page.goto(site+path,{waitUntil:"domcontentloaded",timeout:35000});
     assert(response?.ok(),"Lesson must exist "+path);
     const nav=page.locator(".md-content__inner nav[data-sgk-lesson-nav]");
     await nav.waitFor({state:"visible",timeout:14000});
     assert.equal(await nav.count(),1,grade+" B"+lesson+" one nav only");
     assert.equal(await nav.locator("a,span[aria-disabled]").count(),4,"Four stable Golden nav positions");
     const chapter=chapterOf(grade,lesson),root=baseOf(grade)+"chuong-"+chapter+"/";
     await eqHref(await nav.locator('[data-sgk-lesson-link="practice"]').getAttribute("href"),root+"luyen-tap/");
     await eqHref(await nav.locator('[data-sgk-lesson-link="selfcheck"]').getAttribute("href"),root+"tu-kiem-tra-chuong/");
     if(lesson>1)await eqHref(await nav.locator('[data-sgk-lesson-link="previous"]').getAttribute("href"),routeOf(grade,lesson-1));
     else assert.equal(await nav.locator('span[aria-disabled]').count(),1,"B1 no prior lesson");
     if(lesson<ranges[grade].at(-1))await eqHref(await nav.locator('[data-sgk-lesson-link="next"]').getAttribute("href"),routeOf(grade,lesson+1));
     else assert.equal(await nav.locator('span[aria-disabled]').count(),1,"Final lesson has no unpublished next");
     if(grade===10){
      assert.equal(await page.locator(".md-content__inner.thpt-g10-knowledge-ap1").count(),1);
      const modelB=page.locator(".md-content__inner .tabbed-set").first();
      const isModelB=await modelB.count()>0;
      if(isModelB){
       // Model B uses MkDocs tabs and ### headings, not the historical direct h2.
       // Verify actual learner tab labels and a meaningful concept-first heading;
       // never satisfy AP1 merely by the presence of a generic tab container.
       const names=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
       const expectedTabs=names;
       if(lesson<=6)assert.equal(await page.locator(".md-content__inner").getAttribute("data-g10-b01-b06-editorial-numbered"),"true",
          "G10 B"+lesson+" must mount the owner-approved numbering scope");
       const labels=(await modelB.locator(".tabbed-labels label").allTextContents()).map(s=>s.trim());
       assert.deepEqual(labels,expectedTabs,"G10 B"+lesson+" exact Model B learning tabs");
       assert.equal(await modelB.locator(".tabbed-content > .tabbed-block").count(),4,
        "G10 B"+lesson+" four learner content panels");
       assert(await modelB.locator(".tabbed-content > .tabbed-block").first().locator("h3").count()>0,
        "G10 B"+lesson+" AP1 concept-first heading inside Model B");
      }else{
       const section=page.locator(".thpt-g10-knowledge-ap1>h2").first();
       assert(await section.count()>0,"G10 AP1 historical knowledge heading exists B"+lesson);
      }
     }else assert.equal(await page.locator(".md-content__inner.thpt-g10-knowledge-ap1").count(),0,"G10 CSS not applied cross-grade");
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
     assert(overflow<=20,"Horizontal overflow "+grade+" B"+lesson+" @"+viewport.width+" "+overflow);
    }
    for(const path of ["/thpt-preview/sgk/lop-11/chuong-ix/tu-kiem-tra-chuong/",
                       "/thpt-preview/sgk/lop-12/chuong-vi/tu-kiem-tra-chuong/"]){
      await page.goto(site+path,{waitUntil:"domcontentloaded"});
      assert.equal(await page.locator("[data-sgk-lesson-nav]").count(),0,"Lesson nav must not pollute independent END");
    }
    await page.goto(site+"/kien-thuc/",{waitUntil:"domcontentloaded"});
    assert.equal(await page.locator("[data-sgk-lesson-nav]").count(),0,"THCS Golden unaffected");
    console.log("PASS SGK nav "+viewport.width+"px: "+samples.length+" lessons, four controls, no END/THCS leakage");
   }finally{await page.close()}
  }
 }finally{await browser.close()}
})().catch(error=>{console.error(error);process.exitCode=1});