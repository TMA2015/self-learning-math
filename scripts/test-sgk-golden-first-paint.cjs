#!/usr/bin/env node
"use strict";
/* UI-only: no academic/P2 verdict, no learner mutation. */
const assert=require("node:assert/strict");
const fs=require("node:fs"),path=require("node:path");
const {chromium}=require("playwright");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const chapters=[["i",1,2],["ii",3,4],["iii",5,6],["iv",7,11],["v",12,14],
 ["vi",15,18],["vii",19,22],["viii",23,25],["ix",26,27]];
const rows=chapters.flatMap(([c,a,b])=>Array.from({length:b-a+1},(_,i)=>({
 n:a+i,grade:10,rel:"thpt-preview/sgk/chuong-"+c+"/bai-"+(a+i)
})));
rows.push({n:1,grade:11,rel:"thpt-preview/sgk/lop-11/chuong-i/bai-1"});
const headings=["1. Khám phá kiến thức","2. Kiến thức SGK",
 "3. Ví dụ","4. Lỗi thường gặp và cách tự khắc phục"];
const labels=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
const attr=(s,k)=>[...s.matchAll(new RegExp(k+'="([^"]+)"',"g"))].map(m=>m[1]);
const matchH2=/<h2 class="thpt-g10-section-heading">([^<]+)<\/h2>/g;
for(const row of rows){
 const html=read("site-thpt-preview/"+row.rel+"/index.html");
 const source=read("docs/"+row.rel+".md");
 const article=html.match(/<article\b[^>]*>/g)||[];
 assert.equal(article.length,1,row.rel+" duplicate article");
 assert(article[0].includes('data-sgk-golden-first-paint="true"')&&
  article[0].includes("thpt-g10-knowledge-ap1")&&
  article[0].includes(row.grade===10&&row.n<=6?"thpt-g10-first-six-golden":"thpt-g10-chiv-golden"),
  row.rel+" missing pre-rendered Golden classes");
 assert.deepEqual([...html.matchAll(matchH2)].map(m=>m[1]),headings,
  row.rel+" static Golden tab headings missing or duplicated");
 assert.equal((html.match(/class="tabbed-block"/g)||[]).length,4,row.rel+" tab panels");
 const active=[...html.matchAll(/<label\b[^>]*class="slm-g10-active-tab"[^>]*>(.*?)<\/label>/g)];
 assert.equal(active.length,1,row.rel+" initial active tab count");
 assert.equal(active[0][1],labels[0],row.rel+" initial selected tab");
 for(const k of ["data-thpt-first-try-id","data-thpt-help-id"])
  assert.deepEqual(attr(html,k),attr(source,k),row.rel+" Q15 source-to-DOM "+k);
}
for(const rel of ["thpt-preview/sgk/lop-11/chuong-i/bai-2","thpt-preview/sgk/lop-12/chuong-i/bai-1"])
 assert(!read("site-thpt-preview/"+rel+"/index.html").includes('data-sgk-golden-first-paint="true"'),
  rel+" excluded route modified");
assert.equal(rows.length,28);
console.log("PASS STATIC_FIRST_PAINT: 28 accepted pages, all four Golden headings, unchanged IDs; excluded G11 B02/G12");

(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const reps=rows.filter(x=>x.grade===11||[1,7,16,23,27].includes(x.n));
 const base=(process.env.SGK_FIRST_PAINT_BASE_URL||"http://127.0.0.1:8765").replace(/\/$/,"");
 let checks=0;
 try{
  for(const width of [390,820,1440]){
   for(const row of reps){
    for(const js of [false,true]){
     const context=await browser.newContext({javaScriptEnabled:js,
      viewport:{width,height:width===390?844:900}});
     try{
      const page=await context.newPage();
      const response=await page.goto(base+"/"+row.rel+"/",{waitUntil:"domcontentloaded",timeout:60000});
      assert(response?.ok(),row.rel+" page missing");
      const v=await page.evaluate(()=>{
       const a=document.querySelector("article.md-content__inner");
       const labels=[...a.querySelectorAll(".tabbed-set > .tabbed-labels > label")];
       const h2=[...a.querySelectorAll(".tabbed-block > h2.thpt-g10-section-heading")];
       const ls=getComputedStyle(labels[0]);
       const hs=getComputedStyle(h2[0]);
       return {marker:a.dataset.sgkGoldenFirstPaint,
        active:labels.filter(x=>x.classList.contains("slm-g10-active-tab")).length,
        labels:labels.map(x=>x.textContent.trim()),headings:h2.map(x=>x.textContent.trim()),
        pad:parseFloat(ls.paddingLeft),radius:parseFloat(ls.borderTopLeftRadius),
        headingBorder:parseFloat(hs.borderLeftWidth)};
      });
      const k=row.rel+" "+width+" "+(js?"JS":"NO_JS");
      assert.equal(v.marker,"true",k+" marker");
      assert.deepEqual(v.labels,labels,k+" labels");
      assert.deepEqual(v.headings,headings,k+" missing/duplicate headings");
      assert.equal(v.active,1,k+" active label");
      if(!(v.pad>=8&&v.radius>=4&&v.headingBorder>=3))
       console.error("GOLDEN_STYLE_DIAGNOSTIC "+k+" "+JSON.stringify(v));
      assert(v.pad>=8&&v.radius>=4&&v.headingBorder>=3,
       k+" incorrect computed Golden CSS");
      if(js){
       const t=page.locator(".tabbed-set > .tabbed-labels > label");
       await t.nth(3).click();
       assert(await page.locator(".tabbed-set > input[type=radio]").nth(3).isChecked(),
        k+" tab interaction");
       assert.equal(await page.locator(".tabbed-block > h2.thpt-g10-section-heading").count(),4,
        k+" duplicate heading after JS");
      }
      checks++;
      console.log("PASS FIRST_PAINT "+k);
     }finally{await context.close()}
    }
   }
  }
 }finally{await browser.close()}
 assert.equal(checks,reps.length*3*2);
 console.log("PASS GOLDEN FIRST PAINT: "+checks+" Chromium modes/viewports");
})().catch(e=>{console.error(e.stack||e);process.exitCode=1});
