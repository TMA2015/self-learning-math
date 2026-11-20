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
     // Owner B23 P2 regression: check the ACTUAL rendered disclosure, box,
     // learner figure text, and distinct D6 labels, not just tab/math counts.
     if(rel==="docs/thpt-preview/sgk/chuong-viii/bai-23.md"){
      const ux=await page.evaluate(()=>{
       const blocks=[...document.querySelector(".md-content .tabbed-set .tabbed-content").children]
        .filter(x=>x.classList.contains("tabbed-block"));
       const q=[...blocks[0].querySelectorAll("details.question")];
       const rules=[...blocks[1].querySelectorAll(".thpt-r4-rule-card")];
       const concepts=[...blocks[1].querySelectorAll(".thpt-r4-concept-card")];
       const conditions=[...blocks[1].querySelectorAll("p.b23-condition")];
       const solutions=[...blocks[2].querySelectorAll(".thpt-g10-example-solution")];
       const tips=[...blocks[3].querySelectorAll("details.tip > summary")]
        .map(x=>x.textContent.trim());
       const qSummary=q[0]?.querySelector("summary");
       return {
        qCount:q.length,qLabels:q.map(x=>x.querySelector("summary")?.textContent.trim()),
        qOpen:q.some(x=>x.open),qBg:qSummary?getComputedStyle(qSummary).backgroundColor:"",
        qIcon:qSummary?getComputedStyle(qSummary,"::before").display:"",
        concepts:concepts.length,rules:rules.length,conditions:conditions.length,
        ruleNames:rules.map(x=>x.textContent.trim().slice(0,50)),
        ruleStyle:rules.map(x=>({border:parseFloat(getComputedStyle(x).borderLeftWidth),
         bg:getComputedStyle(x).backgroundColor})),
        solutions:solutions.length,solutionStyle:solutions.map(x=>({
         border:parseFloat(getComputedStyle(x).borderLeftWidth),
         padding:parseFloat(getComputedStyle(x).paddingLeft),
         bg:getComputedStyle(x).backgroundColor})),
        tips,figureCounts:[blocks[0],blocks[1]].map(x=>x.querySelectorAll(
         'img[src*="G10_B23_ADD_MULTIPLY_CHOICES_R02.svg"]').length),
        figureText:blocks[1].textContent,
        introText:blocks[1].textContent
       };
      });
      assert.equal(ux.qCount,4,"B23 exactly four voluntary closed Đối chiếu");
      assert(ux.qLabels.every(x=>x==="Đối chiếu"),"B23 Golden disclosure labels");
      assert(!ux.qOpen,"B23 answers must remain closed pre-click");
      assert(["rgb(234, 241, 252)","rgb(32, 53, 81)"].includes(ux.qBg),
       "B23 Đối chiếu must have deliberate blue/neutral background, not Material green question alert: "+ux.qBg);
      assert.equal(ux.qIcon,"none","B23 Đối chiếu must not display misleading Material question mark");
      assert.equal(ux.concepts,2,"B23 two concept cards");
      assert.equal(ux.rules,2,"B23 two FORMAL RULE cards, not blue condition boxes");
      assert.equal(ux.conditions,3,"B23 three unboxed condition paragraphs");
      assert(ux.ruleNames[0].startsWith("Quy tắc cộng.")&&ux.ruleNames[1].startsWith("Quy tắc nhân."),
       "B23 formal rule box hierarchy");
      assert(ux.ruleStyle.every(x=>x.border>=3&&x.bg!=="rgba(0, 0, 0, 0)"),
       "B23 formal rules need actual computed box frame and background");
      assert.equal(ux.solutions,3,"B23 three worked solution cards");
      assert(ux.solutionStyle.every(x=>x.border>=3&&x.padding>=12&&x.bg!=="rgba(0, 0, 0, 0)"),
       "B23 Lời giải must be visibly framed with padding and background");
      assert.deepEqual(ux.figureCounts,[1,1],"B23 same canonical SVG displayed once in each knowledge tab");
      assert(!/hình canonical dùng chung|Cách đọc hình ở tab Kiến thức SGK|Ví dụ đọc nhánh/.test(ux.figureText),
       "B23 no development jargon or misplaced example in independent SGK tab");
      assert(ux.figureText.includes("Cách đọc hình:"),"B23 learner reading guidance is present");
      assert.equal(ux.tips.length,6,"B23 exactly six D6 disclosures");
      assert.equal(new Set(ux.tips).size,6,"B23 each error must have a different meaningful label");
      assert(ux.tips.every((x,i)=>x.startsWith("4."+(i+1)+".")&&x.length>32),
       "B23 six error fold labels identify their specific misconception");
      await tabs.locator(".tabbed-labels > label").first().click();
      for(const fold of await groups.first().locator("details.question").all()){
       await fold.locator("summary").click();
       assert(await fold.evaluate(x=>x.open),"B23 answer opens only on voluntary click");
       await fold.locator("summary").click();
       assert(!(await fold.evaluate(x=>x.open)),"B23 answer closes again");
      }
      console.log("PASS B23 OWNER_P2_UI at "+width+"px: blue no-? Đối chiếu, 2 formal rule cards, 3 framed Lời giải, 6 distinct D6, 2 SVG and learner figure text");
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
