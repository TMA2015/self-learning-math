"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const {chromium}=require("playwright");
const base=process.env.G11_BASE_URL||"http://127.0.0.1:8765";
const labels=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
const chapter=n=>n<=4?"i":n<=7?"ii":n<=9?"iii":n<=14?"iv":n<=17?"v":n<=21?"vi":n<=27?"vii":n<=30?"viii":"ix";
const ids=(s,k)=>[...s.matchAll(new RegExp(k+'="([^"]+)"',"g"))].map(x=>x[1]).sort();
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 let cases=0,folds=0,decoded=0;
 try{
  for(const width of [390,820,1440]){
   const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
   page.setDefaultTimeout(18000);
   try{
    for(let n=1;n<=33;n++){
     const ch=chapter(n),route="/thpt-preview/sgk/lop-11/chuong-"+ch+"/bai-"+n+"/";
     const msg="G11 B"+n+"@"+width;
     const source=fs.readFileSync(path.resolve(__dirname,"../docs/thpt-preview/sgk/lop-11/chuong-"+ch+"/bai-"+n+".md"),"utf8");
     const response=await page.goto(base+route,{waitUntil:"domcontentloaded",timeout:60000});
     assert(response?.ok(),msg+" Knowledge route must load");
     const tabs=page.locator(".md-content .tabbed-set");
     await tabs.first().waitFor({state:"visible"});
     assert.equal(await tabs.count(),1,msg+" no nested/tab 2");
     const labelsLive=tabs.locator(".tabbed-labels > label");
     assert.deepEqual((await labelsLive.allInnerTexts()).map(s=>s.replace(/\s+/g," ").trim()),labels,msg+" exact four labels");
     const panels=tabs.locator(".tabbed-content > .tabbed-block");
     assert.equal(await panels.count(),4,msg+" four content panels");
     await page.waitForFunction(()=>document.querySelector(".md-content__inner.thpt-g11-knowledge-modelb"),null,{timeout:10000});
     for(const key of ["data-ped-first-try","data-thpt-help-id"]){
      const actual=await page.locator("["+key+"]").evaluateAll((nodes,attr)=>nodes.map(n=>n.getAttribute(attr)).sort(),key);
      assert.deepEqual(actual,ids(source,key),msg+" original "+key+" parity");
     }
     assert.equal(await page.locator("details[data-ped-first-try][open]").count(),0,msg+" no self-try answer pre-open");
     assert.equal(await page.locator("[data-g11-chapter-selfcheck]").count(),0,msg+" no independent readiness inside Knowledge");
     let opened=false;
     for(let i=0;i<4;i++){
      await labelsLive.nth(i).click();
      assert(await panels.nth(i).isVisible(),msg+" selected panel "+i+" visible");
      const attempt=panels.nth(i).locator("details[data-ped-first-try]").first();
      if(!opened&&await attempt.count()){
       assert(await attempt.isVisible(),msg+" student first try visible");
       const summary=attempt.locator("summary");
       await summary.click();
       assert(await attempt.evaluate(el=>el.open),msg+" student opens self-try answer");
       await summary.click();
       assert(!(await attempt.evaluate(el=>el.open)),msg+" student can close answer");
       await summary.focus();await page.keyboard.press("Enter");
       assert(await attempt.evaluate(el=>el.open),msg+" keyboard Enter opens");
       await page.keyboard.press("Space");
       assert(!(await attempt.evaluate(el=>el.open)),msg+" keyboard Space closes");
       opened=true;folds++;
      }
      const images=panels.nth(i).locator("figure img");
      for(const image of await images.all()){
       assert((await image.getAttribute("alt"))?.trim(),msg+" original figure alt");
       const holder=image.locator("xpath=ancestor::figure[1]");
       assert(await holder.isVisible(),msg+" figure parent visible");
       await holder.scrollIntoViewIfNeeded();
       await image.evaluate(async img=>{
        if(!img.complete)await new Promise((yes,no)=>{img.addEventListener("load",yes,{once:true});img.addEventListener("error",no,{once:true})});
        if(img.decode)await img.decode();
       });
       const v=await image.evaluate(img=>({loaded:img.complete&&img.naturalWidth>0,width:img.getBoundingClientRect().width,parent:img.closest("figure").getBoundingClientRect().width}));
       assert(v.loaded&&v.width<=v.parent+2,msg+" educational image loaded and fitted");
       decoded++;
      }
     }
     assert(opened,msg+" needs actual first-try disclosure");
     const view=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth-innerWidth,open:document.querySelectorAll(".md-content details[data-ped-first-try][open]").length}));
     assert(view.overflow<=20,msg+" horizontal overflow "+view.overflow);
     assert.equal(view.open,0,msg+" no answer left revealed");
     cases++;
     console.log("PASS "+msg+" four tabs, First Try, D6, figure, width");
    }
   }finally{await page.close();}
  }
  assert.equal(cases,99);assert.equal(folds,99);
  console.log("PASS G11 B01–B33 x 390/820/1440 = 99 real browser cases, "+decoded+" image decodes, keyboard first-try");
 }finally{await browser.close();}
})().catch(e=>{console.error(e.stack||e);process.exitCode=1;});
