#!/usr/bin/env node
"use strict";
/* Q18 OWNER_SELF_VERIFIED S1 editorial, five published G10 Chapter IV lessons:
 * exact source SHAs, owner Golden presentation, canonical First Try/D6,
 * cross-tab TOC, keyboard disclosures, MathJax/SVG and no answer leakage.
 * Exact S1 section and First Try placement test; older Draft #825 stays separate. */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const crypto=require("node:crypto");
const {chromium}=require("playwright");
const root=path.resolve(__dirname,"..");
const base=process.env.SLM_CHIV_URL||"http://127.0.0.1:8765";
const goldenCss="44442773ac31eb1a46f0cab699a7d2c7974a5f37";
const sources={
 7:"d48a1b9edaec46480dc70acb519d77edf6008445",
 8:"dcdb7aec2ce8afd285739bc3e098d615e4faf623",
 9:"2529b915e4089862e1a48e685ba5dc88d5450558",
 10:"ceaa76688e73274c9cf2d3116c41c6d4d0ac2726",
 11:"2a1381689f66d1f8c752bdbf1c29a9ef49a4e073"
};
const blob=data=>{const b=Buffer.isBuffer(data)?data:Buffer.from(data);return crypto.createHash("sha1").update(Buffer.from("blob "+b.length+"\0")).update(b).digest("hex");};
const idList=(s,key)=>[...s.matchAll(new RegExp(key+'="([^"]+)"',"g"))].map(m=>m[1]).sort();
const tabsExpected=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
(async()=>{
 assert.equal(blob(fs.readFileSync(root+"/docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css")),goldenCss,
  "Golden presentation CSS exact Git blob SHA");
 for(const [lesson,sha] of Object.entries(sources)){
  assert.equal(blob(fs.readFileSync(root+"/docs/thpt-preview/sgk/chuong-iv/bai-"+lesson+".md")),sha,
   "Unapproved academic/source/First Try change B"+lesson);
 }
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 let cases=0;
 try{
  for(const width of [390,820,1440]){
   const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
   page.setDefaultTimeout(20000);
   try{
    for(let lesson=7;lesson<=11;lesson++){
     const where="G10-CHIV-B"+lesson+"@"+width;
     const res=await page.goto(base+"/thpt-preview/sgk/chuong-iv/bai-"+lesson+"/",
      {waitUntil:"domcontentloaded",timeout:60000});
     assert(res?.ok(),where+" published Knowledge page is reachable");
     await page.waitForFunction(()=>document.querySelector(".md-content__inner")?.dataset.g10ChivGolden==="true");
     const article=page.locator(".md-content__inner");
     const tabbed=article.locator(":scope > .tabbed-set");
     const labels=tabbed.locator(":scope > .tabbed-labels > label");
     const blocks=tabbed.locator(":scope > .tabbed-content > .tabbed-block");
     assert.deepEqual((await labels.allInnerTexts()).map(v=>v.trim()),tabsExpected,where+" exact owner four tab labels");
     assert.equal(await blocks.count(),4,where+" four Golden content panes");

     const officialSections={
       7:["2.1. Khái niệm vectơ","2.2. Hai vectơ cùng phương, cùng hướng, bằng nhau"],
       8:["2.1. Tổng của hai vectơ","2.2. Hiệu của hai vectơ"],
       9:["2.1. Tích của một vectơ với một số","2.2. Các tính chất của phép nhân vectơ với một số"],
       10:["2.1. Tọa độ của vectơ","2.2. Biểu thức tọa độ của các phép toán vectơ"],
       11:["2.1. Góc giữa hai vectơ","2.2. Tích vô hướng của hai vectơ",
         "2.3. Biểu thức tọa độ và tính chất của tích vô hướng"]
     };
     assert.deepEqual((await blocks.nth(1).locator(":scope > h3").allInnerTexts()).map(x=>x.trim()),
       officialSections[lesson],where+" actual SGK S1 headings 2.1.. without duplicate heading");
     assert.deepEqual((await blocks.nth(0).locator(":scope > h3").allInnerTexts()).map(x=>x.trim()),
       ["1.1. Cùng tìm hiểu","1.2. Ví dụ trực quan","1.3. Thuật ngữ, kiến thức và kỹ năng"],
       where+" complete concept-first discovery stages");
     assert.equal(await blocks.nth(0).locator("[data-thpt-first-try-id]").count(),
       ({7:5,8:5,9:5,10:6,11:4})[lesson],where+" original First Tries moved to Discovery");
     assert.equal(await blocks.nth(1).locator("[data-thpt-first-try-id], details.question").count(),0,
       where+" official SGK has no First Try/question insertion");
     if(lesson===11){
       const s1=(await blocks.nth(1).innerText());
       assert(s1.includes("vuông góc với mọi vectơ"),where+" zero perpendicular SGK convention");
       assert(s1.includes("tùy ý"),where+" zero vector angle SGK convention");
       assert(s1.includes("hai độ dài đều dương"),where+" cos denominator guard");
     }

     assert.deepEqual((await blocks.locator(":scope > h2.thpt-g10-section-heading").allInnerTexts()).map(v=>v.trim()),
      ["1. Khám phá kiến thức","2. Kiến thức SGK","3. Ví dụ","4. Lỗi thường gặp và cách tự khắc phục"],
      where+" editorial section headings preserve 1–4 structure");
     assert((await blocks.nth(0).locator(":scope > h3").allInnerTexts()).every((v,i)=>v.trim().startsWith("1."+(i+1)+". ")),
      where+" discovery headings are visual-only numbered");
     const examples=await blocks.nth(2).locator(":scope > h3").allInnerTexts();
     assert.equal(examples.length,3,where+" exactly 3 original solved examples");
     assert(examples.every((v,i)=>v.trim().startsWith("3."+(i+1)+". Ví dụ "+(i+1)+". ")),
      where+" numbered visual example headings");
     assert.equal(await blocks.nth(2).locator(".thpt-g10-example-solution").count(),3,
      where+" original three solutions grouped in owner Golden panel");
     assert.equal(await article.locator(".thpt-r4-lead").count(),0,where+" no redundant introduction");
     assert.equal(await article.locator(".thpt-r4-footnote").count(),1,where+" only existing source footnote retained");
     assert.equal(await blocks.nth(3).locator(".thpt-r4-footnote").count(),1,where+" source note only on last tab");
     const source=fs.readFileSync(root+"/docs/thpt-preview/sgk/chuong-iv/bai-"+lesson+".md","utf8");
     for(const key of ["data-thpt-first-try-id","data-thpt-help-id","data-outcome-id"]){
      const expected=idList(source,key);
      const actual=(await article.locator("["+key+"]").evaluateAll((nodes,k)=>nodes.map(n=>n.getAttribute(k)),key)).sort();
      assert.deepEqual(actual,expected,where+" "+key+" canonical unchanged");
     }
     const state=await page.evaluate(()=>{
      const root=document.querySelector(".md-content__inner");
      const px=el=>parseFloat(getComputedStyle(el).fontSize);
      const label=[...root.querySelectorAll(".tabbed-set > .tabbed-labels > label")];
      const body=px(root.querySelector(".tabbed-block p"));
      const disclosure=[...root.querySelectorAll("details.question")];
      const tips=[...root.querySelectorAll("details.tip")];
      const cells=[...root.querySelectorAll(".tabbed-block table :is(th,td)")];
      return {
       buttons:label.map(el=>({h:el.getBoundingClientRect().height,font:px(el)})),
       body,cells:cells.map(px),summary:disclosure.map(d=>({
        text:d.querySelector("summary")?.textContent.trim(),
        px:px(d.querySelector("summary")),open:d.open
       })),tips:tips.map(d=>({open:d.open})),
       solutions:[...root.querySelectorAll(".thpt-g10-example-solution")].map(d=>({
        bg:getComputedStyle(d).backgroundColor,strong:d.querySelector("p > strong")?.textContent.trim()
       })),overflow:document.documentElement.scrollWidth-window.innerWidth
      };
     });
     assert(state.buttons.every(b=>Math.abs(b.h-44)<1),where+" exact 44px buttons");
     assert(state.summary.length>=5&&state.summary.every(x=>x.text==="Đối chiếu"&&!x.open&&Math.abs(x.px-state.body)<.6),
      where+" First Try summaries collapsed and normal-size text");
     assert(state.tips.every(x=>!x.open),where+" D6 closed");
     assert(state.cells.every(px=>Math.abs(px-state.body)<.6),where+" table fonts equal body");
     assert(state.solutions.every(x=>x.bg!=="rgba(0, 0, 0, 0)"&&x.strong==="Giải:"),
      where+" solution panel contains unchanged mathematical solution");
     assert(state.overflow<=3,where+" no whole-page horizontal overflow");
     // Right TOC cross-tab link: tab 3 -> hidden Knowledge tab 2.
     const tocId=await blocks.nth(1).locator("h3[id]").first().getAttribute("id");
     await labels.nth(2).click();
     const toc=page.locator('.md-sidebar--secondary a[href="#'+tocId+'"]').first();
     assert.equal(await toc.count(),1,where+" right TOC target exists");
     await toc.evaluate(a=>a.click());
     await page.waitForFunction(id=>document.getElementById(id)?.getBoundingClientRect().height>0,tocId);
     assert(await blocks.nth(1).isVisible(),where+" right TOC activates hidden Knowledge tab");
     assert.equal(new URL(page.url()).hash,"#"+tocId,where+" right TOC updates the URL");
     const first=blocks.nth(1).locator("details.question").first();
     await first.locator("summary").click();
     assert((await first.getAttribute("open"))!==null,where+" voluntary answer can be opened");
     await first.locator("summary").click();
     assert.equal(await first.getAttribute("open"),null,where+" answer can be reclosed");
     const math=await page.locator("mjx-container").count();
     assert(math>0,where+" math syntax rendered");
     assert.equal(await page.locator("[data-g10-chapter-selfcheck]").count(),0,where+" no private independent readiness");
     cases++;console.log("PASS "+where+" Golden UI source-locked, TOC, 44px buttons and Q16 intact");
    }
   }finally{await page.close();}
  }
 }finally{await browser.close();}
 assert.equal(cases,15);
 console.log("PASS 15/15 G10 Chapter IV Golden browser cases; all 5 academic source blobs locked. NO DEPLOY.");
})().catch(e=>{console.error(e.stack||e);process.exitCode=1;});
