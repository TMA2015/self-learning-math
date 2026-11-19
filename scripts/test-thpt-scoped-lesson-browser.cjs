#!/usr/bin/env node
"use strict";
/* Browser-only AP1–AP5 smoke for the canonical SGK lesson(s) in this PR.
 * It does NOT judge S1 mathematics, give Academic/PED PASS, or run 79 pages.
 * Safety invariant: no answer reveal or Mastery before learner action.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const {chromium}=require("playwright");
const root=path.resolve(__dirname,"..");
const base=(process.env.SCOPED_BASE_URL||"http://127.0.0.1:8765").replace(/\/$/,"");
const lessons=(process.env.SCOPED_LESSONS||"").split(",").filter(Boolean);
const labels=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
const widths=[390,820,1440];
const re=/^docs\/thpt-preview\/sgk\/(?:(?:lop-11|lop-12)\/)?chuong-(?:i|ii|iii|iv|v|vi|vii|viii|ix)\/bai-[1-9]\d*\.md$/;
async function execute(){
 assert(lessons.length>0&&lessons.length<=79,"No canonical SGK lesson paths or too many scoped targets");
 assert.equal(new Set(lessons).size,lessons.length,"Duplicate lesson target");
 for(const rel of lessons)assert(re.test(rel)&&fs.existsSync(path.join(root,rel)),"Invalid canonical lesson "+rel);
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 let checks=0;
 try{
  for(const rel of lessons){
   const source=fs.readFileSync(path.join(root,rel),"utf8");
   const expectedTry=[...source.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(x=>x[1]);
   const expectedHelp=[...source.matchAll(/data-thpt-help-id="([^"]+)"/g)].map(x=>x[1]);
   assert.equal(new Set(expectedTry).size,expectedTry.length,rel+" duplicate First Try IDs");
   assert.equal(new Set(expectedHelp).size,expectedHelp.length,rel+" duplicate D6 HELP IDs");
   assert(!/data-(?:thpt-readiness|mastery-credit|mastery-write)/i.test(source),
    rel+" Knowledge must never mount official Readiness/Mastery");
   assert.deepEqual([...source.matchAll(/^=== "([^"]+)"$/gm)].map(x=>x[1]),labels,
    rel+" must retain four owner-approved Golden tabs");
   const route="/"+rel.slice(5,-3)+"/";
   for(const width of widths){
    const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
    page.setDefaultTimeout(20000);
    try{
     const response=await page.goto(base+route,{waitUntil:"domcontentloaded",timeout:60000});
     assert(response?.ok(),rel+" "+width+" route not rendered");
     const tabs=page.locator(".md-content .tabbed-set").first();
     await tabs.waitFor({state:"visible"});
     const found=(await tabs.locator(".tabbed-labels > label").allInnerTexts()).map(s=>s.trim().replace(/\s+/g," "));
     assert.deepEqual(found,labels,rel+" "+width+" tab text and order");
     const groups=tabs.locator(".tabbed-content > .tabbed-block");
     assert.equal(await groups.count(),4,rel+" "+width+" exactly four tab panels");
     const renderedTry=await page.locator("[data-thpt-first-try-id]").evaluateAll(n=>n.map(x=>x.getAttribute("data-thpt-first-try-id")));
     const renderedHelp=await page.locator("[data-thpt-help-id]").evaluateAll(n=>n.map(x=>x.getAttribute("data-thpt-help-id")));
     assert.deepEqual(renderedTry,expectedTry,rel+" "+width+" source-to-DOM First Try Q15");
     assert.deepEqual(renderedHelp,expectedHelp,rel+" "+width+" source-to-DOM HELP Q15");
     assert.equal(await page.locator(".md-content details.question[open]").count(),0,
      rel+" "+width+" answers must be closed until voluntary Đối chiếu");
     assert.equal(await page.locator("[data-thpt-readiness],[data-mastery-credit],[data-mastery-write]").count(),0,
      rel+" "+width+" cannot write Q16/Mastery in Knowledge");
     for(let i=0;i<4;i++){
      await tabs.locator(".tabbed-labels > label").nth(i).click();
      assert(await groups.nth(i).isVisible(),rel+" "+width+" learner tab "+i+" not visible");
      const figs=groups.nth(i).locator("figure img");
      for(const fig of await figs.all()){
       assert((await fig.getAttribute("alt"))?.trim(),rel+" "+width+" figure alt missing");
       await fig.evaluate(async image=>{
        if(!image.complete)await new Promise((res,rej)=>{
         image.addEventListener("load",res,{once:true});
         image.addEventListener("error",rej,{once:true});
        });
        if(image.decode)await image.decode();
       });
       assert(await fig.evaluate(x=>x.naturalWidth>0),rel+" "+width+" broken educational image");
      }
     }
     await page.waitForFunction(()=>document.querySelectorAll("mjx-container").length>0,null,{timeout:30000});
     const layout=await page.evaluate(()=>{
      const root=document.querySelector("article.md-content__inner");
      const style=getComputedStyle(root);
      const cards=[...root.querySelectorAll(".thpt-r4-knowledge-conclusion")];
      return {overflow:document.documentElement.scrollWidth-innerWidth,
       font:style.fontFamily,math:document.querySelectorAll("mjx-container").length,
       brokenText:root.innerText.includes("\ufffd"),
       unstyled:cards.filter(x=>{
        const y=getComputedStyle(x);
        return y.backgroundColor==="rgba(0, 0, 0, 0)"&&y.borderLeftWidth==="0px";
       }).length};
     });
     assert(layout.overflow<=20,rel+" "+width+" horizontal overflow "+layout.overflow+"px");
     assert(layout.font?.trim(),rel+" "+width+" font stack failed");
     assert(!layout.brokenText,rel+" "+width+" replacement glyph/encoding damage");
     assert(layout.math>0,rel+" "+width+" MathJax did not typeset");
     assert.equal(layout.unstyled,0,rel+" "+width+" Golden concept/rule cards lack style");
     checks++;
     console.log("PASS SCOPED Golden AP "+rel+" @"+width+"px: 4 tabs, "+layout.math+" rendered math, "+
      expectedTry.length+" canonical First Try, "+expectedHelp.length+" D6, layout/font/SVG/Q16");
    }finally{await page.close();}
   }
  }
  assert.equal(checks,lessons.length*widths.length,"Every scoped lesson must pass all viewports");
  console.log("PASS scoped SGK browser "+lessons.length+" canonical lesson(s) x 390/820/1440; "+
   "presentation-only; NOT academic review, no global site changes or deploy");
 }finally{await browser.close();}
}
execute().catch(err=>{console.error(err.stack||err);process.exitCode=1;});
