"use strict";
// RELEASE UAT AP1/AP2/AP3/AP5: every published G11 SGK lesson, 3 simulated viewports.
// Desktop/browser emulation is NOT real-device Safari P2 or Academic/PED review.
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const chapter=n=>n<=4?"i":n<=7?"ii":n<=9?"iii":n<=14?"iv":n<=17?"v":n<=21?"vi":n<=27?"vii":"viii";
const mathLessons=new Set([1,2,3,4,8,9,16,18,19,20,21]);
const root="http://127.0.0.1:8765/thpt-preview/sgk/lop-11/";
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 let visited=0,rendered=0;
 try{
  for(const width of [390,820,1440]){
   const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
   try{
    for(let n=1;n<=30;n++){
     const url=root+"chuong-"+chapter(n)+"/bai-"+n+"/";
     const reply=await page.goto(url,{waitUntil:"networkidle",timeout:30000});
     assert(reply?.ok(),"G11 B"+n+" HTML route not reachable: "+url);
     assert((await page.locator("h1").first().innerText()).includes("Bài "+n),"Wrong student H1 B"+n);
     const headings=(await page.locator(".md-content h3").allInnerTexts()).map(s=>s.trim());
     const section=headings.filter(s=>/^1\.\d+\./.test(s));
     if(section.length){
      for(let i=0;i<section.length;i++)assert(section[i].startsWith("1."+(i+1)+"."),
       "Misordered local headings B"+n+": "+section[i]);
     }
     if(n===18)assert((await page.locator("h4").allInnerTexts()).some(s=>s.startsWith("1.2.1.")),"B18 2A not nested correctly");
     if(n>=22&&n<=27)assert((await page.locator("h4").allInnerTexts()).some(s=>s.startsWith("1.4.1.")),"B"+n+" 4B not nested correctly");
     if(mathLessons.has(n)){
      await page.waitForFunction(()=>document.querySelectorAll("mjx-container").length>0,{timeout:20000});
      await page.evaluate(async()=>{if(window.MathJax?.startup?.promise)await window.MathJax.startup.promise});
      const m=await page.locator("mjx-container").count();
      assert(m>=3,"B"+n+" MathJax not typesetting mathematical notation at "+width);
      rendered+=m;
     }
     const layout=await page.evaluate(()=>{
      const overs=[...document.querySelectorAll("mjx-container")].filter(el=>{
       const r=el.getBoundingClientRect();return r.width>0&&(r.right>window.innerWidth+8||r.left< -8)
      }).map(el=>({left:el.getBoundingClientRect().left,right:el.getBoundingClientRect().right,
       text:(el.textContent||"").slice(0,90)}));
      return {document:document.documentElement.scrollWidth-window.innerWidth,math:overs}
     });
     assert(layout.document<=20,"G11 B"+n+" horizontal overflow "+layout.document+" px at "+width);
     assert.equal(layout.math.length,0,"G11 B"+n+" MathJax spills viewport at "+width+": "+JSON.stringify(layout.math.slice(0,2)));
     visited++;
    }
   }finally{await page.close()}
  }
  assert.equal(visited,90);
  console.log("PASS G11 all B01–B30 browser AP1/AP2/AP5: 90 page-width combinations, headings, MathJax and no horizontal overflow; rendered formulas "+rendered+". Not physical P2.");
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exit(1)});
