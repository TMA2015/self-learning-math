"use strict";
/* P2 screenshot regression sweep: 24 SGK end-chapter routes at 390px;
 * Grade-11 ChIX original TeX also checked at 820/1440px.
 * This is simulated-browser AP/Q16, NOT owner real Safari P2.
 */
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const site="http://127.0.0.1:8765/thpt-preview/sgk/",roman=["i","ii","iii","iv","v","vi","vii","viii","ix"];
const prefix=grade=>grade===10?"":"lop-"+grade+"/";
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [390,820,1440]){
   const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
   try{
    const cases=[];
    for(const grade of [10,11,12])for(const chapter of roman.slice(0,grade===12?6:9)){
     if(width!==390&&!(grade===11&&chapter==="ix"))continue;
     cases.push({grade,chapter});
    }
    for(const {grade,chapter}of cases){
     const route=site+prefix(grade)+"chuong-"+chapter+"/tu-kiem-tra-chuong/";
     const res=await page.goto(route,{waitUntil:"networkidle",timeout:50000});
     assert(res?.ok(),"Missing published END "+route);
     const attr=grade===10?"data-g10-chapter-selfcheck":
       grade===11?"data-g11-chapter-selfcheck":"data-g12-ch"+chapter+"-selfcheck";
     const selector="["+attr+"]";
     await page.waitForFunction(sel=>{
      const root=document.querySelector(sel);
      return root&&(/Câu\s*1(?:\s*\/|\s*)/.test(root.innerText));
     },selector,{timeout:26000});
     assert.equal(await page.locator(selector).count(),1,"One chapter END root");
     if(grade<12){
      const root=page.locator(selector);
      assert.equal(await root.locator(".g10sc-review").count(),0,"G"+grade+" no solution before Final Submit "+chapter);
      assert.equal(await root.locator('[data-g10sc-final]').count(),1,"G"+grade+" Final Submit must be present");
      if(grade===11&&chapter==="ix"){
       const math=root.locator(".g10sc-body .g10sc-math-inline, .g10sc-body .g10sc-math-display");
       assert(await math.count()>=1,"G11 ChIX screenshot raw TeX is now safely tokenized");
       const stem=await root.locator(".g10sc-body .g10sc-rich").first().innerText();
       assert(!/\$[^$\n]+\$/.test(stem),"No literal $...$ on G11 ChIX question");
       const text=await page.locator(".md-content__inner").innerText();
       assert(!text.includes("SGK_CHAPTER_READINESS"),"No technical assessment key displayed in ChIX lead");
      }
     }
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
     assert(overflow<=20,"G"+grade+" Ch"+chapter+" END overflows at "+width);
    }
    console.log("PASS SGK self-check UI "+width+"px: "+cases.length+" end-chapter routes; ChIX TeX and Q16");
   }finally{await page.close()}
  }
 }finally{await browser.close()}
})().catch(error=>{console.error(error);process.exitCode=1});