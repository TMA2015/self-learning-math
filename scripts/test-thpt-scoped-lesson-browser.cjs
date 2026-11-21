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
const chapter=/^docs\/thpt-preview\/sgk\/(?:(?:lop-11|lop-12)\/)?(?:chuong-(?:i|ii|iii|iv|v|vi|vii|viii|ix)\/(?:luyen-tap|tu-kiem-tra-chuong)\.md|chuong-(?:i|ii|iii|iv|v|vi|vii|viii|ix)\.md)$/;
async function execute(){
 assert(lessons.length>0&&lessons.length<=120,"No canonical SGK page paths or too many scoped targets");
 assert.equal(new Set(lessons).size,lessons.length,"Duplicate lesson target");
 for(const rel of lessons)assert((re.test(rel)||chapter.test(rel))&&fs.existsSync(path.join(root,rel)),"Invalid canonical SGK page "+rel);
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 let checks=0;
 try{
  for(const rel of lessons){
   const source=fs.readFileSync(path.join(root,rel),"utf8");
   const isLesson=re.test(rel);
   const expectedTry=[...source.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(x=>x[1]);
   const expectedHelp=[...source.matchAll(/data-thpt-help-id="([^"]+)"/g)].map(x=>x[1]);
   if(isLesson){
   assert.equal(new Set(expectedTry).size,expectedTry.length,rel+" duplicate First Try IDs");
   assert.equal(new Set(expectedHelp).size,expectedHelp.length,rel+" duplicate D6 HELP IDs");
   assert(!/data-(?:thpt-readiness|mastery-credit|mastery-write)/i.test(source),
    rel+" Knowledge must never mount official Readiness/Mastery");
   assert.deepEqual([...source.matchAll(/^=== "([^"]+)"$/gm)].map(x=>x[1]),labels,
    rel+" must retain four owner-approved Golden tabs");
   }
   const route="/"+rel.slice(5,-3)+"/";
   for(const width of widths){
    const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
    page.setDefaultTimeout(20000);
    try{
     const response=await page.goto(base+route,{waitUntil:"domcontentloaded",timeout:60000});
     assert(response?.ok(),rel+" "+width+" route not rendered");
     if(isLesson){
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
       // A real lazy image below the fold never starts loading until in view.
       // Scrolling reproduces the learner's behavior; bounded load/decode
       // fails closed on broken assets instead of hanging a one-lesson runner.
       await fig.scrollIntoViewIfNeeded({timeout:20000});
       await fig.evaluate(async image=>{
        const deadline=(phase)=>new Promise((_,rej)=>setTimeout(
         ()=>rej(new Error("scoped SVG/image "+phase+" timed out after 15s")),15000));
        if(!image.complete){
         await Promise.race([
          new Promise((res,rej)=>{
           image.addEventListener("load",res,{once:true});
           image.addEventListener("error",()=>rej(new Error("scoped SVG/image load failed")),{once:true});
           if(image.complete){
            if(image.naturalWidth>0)res();
            else rej(new Error("scoped SVG/image completed without pixels"));
           }
          }),
          deadline("load")
         ]);
        }
        if(image.decode)await Promise.race([image.decode(),deadline("decode")]);
       });
       assert(await fig.evaluate(x=>x.naturalWidth>0),rel+" "+width+" broken educational image");
      }
     }
     // OWNER B27 P2: the first published snapshot technically had one formal
     // blue rule at the end, but no KEY_FORMULA in Knowledge §2.1 and no SVG
     // in Knowledge §2.2. Test exact learner TAB, not just whole-page counts.
     if(rel==="docs/thpt-preview/sgk/chuong-ix/bai-27.md"){
      await tabs.locator(".tabbed-labels > label").nth(1).click();
      const k=groups.nth(1),disc=groups.nth(0);
      const key=k.locator('.thpt-g10-key-formula[data-b27-key-formula="combinations"]');
      const fig=k.locator('figure[data-b27-knowledge-figure="reused-discovery-tree"] img');
      const discFig=disc.locator('figure img[src*="THPT_G10_B27_WITHOUT_REPLACEMENT_TREE.svg"]');
      const rule=k.locator(".thpt-r4-knowledge-conclusion.thpt-r4-rule-card");
      assert.equal(await key.count(),1,rel+" "+width+" neutral formula must be in SGK Knowledge tab");
      assert.equal(await fig.count(),1,rel+" "+width+" tree reused in SGK Knowledge tab");
      assert.equal(await discFig.count(),1,rel+" "+width+" original tree must still exist in Discovery");
      assert.equal(await fig.getAttribute("src"),await discFig.getAttribute("src"),
       rel+" "+width+" both tabs must link the SAME SVG file");
      assert.equal(await rule.count(),1,rel+" "+width+" exactly one formal SGK complement box");
      assert.equal(await k.locator(".thpt-r4-knowledge-conclusion.thpt-r4-concept-card").count(),0,
       rel+" "+width+" do not invent an SGK formal definition");
      await page.waitForFunction(()=>
       document.querySelectorAll('[data-b27-key-formula="combinations"] mjx-container').length>=3,
       null,{timeout:30000});
      const light=await key.evaluate(el=>{const x=getComputedStyle(el);return {
       border:parseFloat(x.borderLeftWidth),background:x.backgroundColor,color:x.color,
       math:el.querySelectorAll("mjx-container").length,
       visible:!!el.getClientRects().length};});
      assert(light.visible&&light.border>=3&&light.math>=3,
       rel+" "+width+" formula absent/invisible/unstyled in light mode");
      assert(["rgba(0, 0, 0, 0)","transparent"].includes(light.background),
       rel+" "+width+" KEY_FORMULA must have neutral transparent background");
      const official=await rule.evaluate(el=>{const x=getComputedStyle(el);return {
       border:parseFloat(x.borderLeftWidth),background:x.backgroundColor};});
      assert(official.border>=3&&official.background!=="rgba(0, 0, 0, 0)",
       rel+" "+width+" SGK formal complement rule needs its distinct blue card");
      await page.evaluate(()=>document.body.setAttribute("data-md-color-scheme","slate"));
      const dark=await key.evaluate(el=>{const x=getComputedStyle(el);return {
       border:parseFloat(x.borderLeftWidth),background:x.backgroundColor,color:x.color};});
      assert(dark.border>=3&&dark.color!==light.color,
       rel+" "+width+" KEY_FORMULA dark mode must retain contrast and border");
      assert(await fig.evaluate(el=>el.complete&&el.naturalWidth>0),
       rel+" "+width+" reused SGK tree should decode in real Chromium");
      console.log("PASS B27 owner P2 SGK knowledge placements @"+width+
       "px: neutral KEY_FORMULA, original SVG in two tabs, official rule, light/slate");
     }
     }else{
      const article=page.locator("article.md-content__inner");
      await article.waitFor({state:"visible"});
      assert(await article.locator("h1").count()>=1,rel+" "+width+" chapter title missing");
      if(rel.endsWith("/tu-kiem-tra-chuong.md")){
       const before=await article.innerText();
       for(const forbidden of ["Đáp án:", "Lời giải:", "Kết quả tự đánh giá — không phải điểm"]){
        assert(!before.includes(forbidden),rel+" "+width+" Q16 pre-Final Submit answer/feedback leak "+forbidden);
       }
       assert(await article.locator('[data-g10-chapter-selfcheck],[data-g11-chapter-selfcheck],[data-g12-chi-selfcheck],[data-g12-chapter-selfcheck]').count()>0,
        rel+" "+width+" protected chapter self-check mount missing");
      }
      for(const fig of await article.locator("figure img").all()){
       await fig.evaluate(async img=>{if(img.decode)await img.decode();});
       assert(await fig.evaluate(img=>img.naturalWidth>0),rel+" "+width+" figure failed to render");
      }
     }
     const mathExpected=isLesson||/\\\(|\\\[|\$\$/.test(source);
     if(mathExpected)await page.waitForFunction(()=>document.querySelectorAll("mjx-container").length>0,null,{timeout:30000});
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
     if(mathExpected)assert(layout.math>0,rel+" "+width+" MathJax did not typeset");
     assert.equal(layout.unstyled,0,rel+" "+width+" Golden concept/rule cards lack style");
     checks++;
     console.log("PASS SCOPED Golden AP "+rel+" @"+width+"px: "+(isLesson?"4 tabs / ":"chapter hub / ")+
      layout.math+" rendered math, "+expectedTry.length+" First Try, "+expectedHelp.length+" D6, layout/font/SVG/Q16");
    }finally{await page.close();}
   }
  }
  assert.equal(checks,lessons.length*widths.length,"Every scoped lesson must pass all viewports");
  console.log("PASS scoped SGK browser "+lessons.length+" canonical lesson(s) x 390/820/1440; "+
   "presentation-only; NOT academic review, no global site changes or deploy");
 }finally{await browser.close();}
}
execute().catch(err=>{console.error(err.stack||err);process.exitCode=1;});
