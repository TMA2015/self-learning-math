#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict");
const {chromium}=require("playwright");
const cases=[
 {lesson:7,headings:["1. Vectơ và độ dài","2. Phương và hướng","3. Bằng nhau và ngược hướng","4. Vectơ-không theo SGK/SBT","5. Ứng dụng"]},
 {lesson:8,headings:["1. Quy tắc ba điểm (quy tắc tam giác)","2. Quy tắc hình bình hành","3. Vectơ đối và hiệu","4. Trung điểm và trọng tâm","5. Ứng dụng hợp lực"]},
 {lesson:10,headings:["1. Hệ tọa độ và vectơ","2. Các phép toán tọa độ","3. Tọa độ trung điểm và trọng tâm","4. Ứng dụng"]}
];
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [390,820,1440]){
   const page=await browser.newPage({viewport:{width,height:900}});
   try{
    for(const item of cases){
     const res=await page.goto("http://127.0.0.1:8765/thpt-preview/sgk/chuong-iv/bai-"+item.lesson+"/",{waitUntil:"networkidle"});
     assert(res?.ok(),"Page B"+item.lesson+" not available");
     const headers=await page.locator(".md-content__inner h3").allInnerTexts();
     for(const h of item.headings)assert(headers.some(x=>x.trim().startsWith(h)),"B"+item.lesson+" heading: "+h);
     assert.equal(await page.locator(".md-content__inner h3").filter({hasText:"D1."}).count(),0,
       "Never display D1.x audit labels as lesson headings");
     const figures=page.locator(".thpt-r4-probability-figure img");
     assert(await figures.count()>=1,"Missing original reviewed SVG figure");
     const modelB=page.locator(".md-content__inner .tabbed-set").first();
     const labels=modelB.locator(".tabbed-labels > label");
     const isModelB=await modelB.count()>0;
     if(isModelB){
       const actual=(await labels.allInnerTexts()).map(s=>s.trim());
       assert.deepEqual(actual,["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],
         "G10 B"+item.lesson+" exact Model B learner tabs");
       assert.equal(await modelB.locator(".tabbed-content > .tabbed-block").count(),4,
         "G10 B"+item.lesson+" four independent lesson panels");
     }
     // In Model B a mathematically correct original SVG can live inside a
     // deliberately HIDDEN tab. Open the actual owning tab before checking
     // that the image becomes visible, loads, decodes, and fits. Never skip it.
     const measurements=[];
     for(let idx=0;idx<await figures.count();idx++){
       const figure=figures.nth(idx);
       if(isModelB){
         // Match the already-PASSING chapter Model B browser helper: tab
         // labels are interactive controls, while DOM block indices are not
         // guaranteed to equal label indices after the Material transformation.
         // Visit real learner tabs until the actual original SVG is visible.
         let selected=null;
         for(const name of ["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"]){
           const label=labels.filter({hasText:new RegExp("^"+name+"$")});
           assert.equal(await label.count(),1,"B"+item.lesson+" missing tab "+name);
           await label.click();
           if(await figure.isVisible()){selected=name;break;}
         }
         assert.equal(selected,"Kiến thức SGK",
           "B"+item.lesson+" original D5 SVG figure "+idx+" must be visible when learner selects Knowledge tab");
       }
       assert(await figure.isVisible(),"B"+item.lesson+" original SVG figure "+idx+" must be visible in selected tab");
       await figure.scrollIntoViewIfNeeded();
       await figure.evaluate(async img=>{if(img.decode)await img.decode()});
       const dims=await figure.evaluate(img=>({
         loaded:img.complete&&img.naturalWidth>0,
         img:img.getBoundingClientRect().width,
         parent:img.parentElement.getBoundingClientRect().width
       }));
       assert(dims.loaded,"SVG asset failed to render B"+item.lesson+" figure "+idx+" @"+width);
       assert(dims.img>0&&dims.parent>0&&dims.img<=dims.parent+2,
         "Original SVG figure "+idx+" too wide or invisible B"+item.lesson+" @"+width);
       measurements.push(dims);
     }
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
     assert(overflow<=12,"Page horizontal overflow B"+item.lesson+" at "+width+": "+overflow);
     assert.equal(measurements.length,await figures.count(),"Every source-locked SVG must be physically checked");
    }
   }finally{await page.close()}
  }
  console.log("PASS AP batch G10 B07/B08/B10 browser: headings, original SVG, no viewport overflow on 390/820/1440.");
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exit(1)});
