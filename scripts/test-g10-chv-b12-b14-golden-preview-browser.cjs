#!/usr/bin/env node
"use strict";
/* RELEASE preview-only B12–B14: verify scoped Golden UI extension without
 * changing canonical mathematics/First Try/D6/SGK text. A PASS here is
 * AP/browser evidence, NOT source S1/Q18 or release authorization. */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const crypto=require("node:crypto");
const {chromium}=require("playwright");
const root=path.resolve(__dirname,"..");
const base=process.env.SLM_CHV_URL||"http://127.0.0.1:8765";
const expectedSources={
 12:"23b11a7263661ae6f6e2a06029307b490b145dfb",
 13:"c55d650f5b59c5260960de136e3c7fc26f219cdf",
 14:"894c31de396a2f6d6d30912399d6cad39f790130"
};
const ids={12:4,13:5,14:5};
const names=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
const blob=data=>{
 const bytes=Buffer.isBuffer(data)?data:Buffer.from(data);
 return crypto.createHash("sha1").update(Buffer.from("blob "+bytes.length+"\0")).update(bytes).digest("hex");
};
(async()=>{
 for(const [lesson,sha] of Object.entries(expectedSources)){
  const filename=root+"/docs/thpt-preview/sgk/chuong-v/bai-"+lesson+".md";
  const source=fs.readFileSync(filename);
  assert.equal(blob(source),sha,"B"+lesson+" academic source must stay immutable");
  assert.equal((source.toString().match(/data-thpt-first-try-id="/g)||[]).length,ids[lesson],
   "B"+lesson+" original formative IDs must not be removed");
 }
 assert.equal(blob(fs.readFileSync(root+"/docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css")),
  "44442773ac31eb1a46f0cab699a7d2c7974a5f37","Golden CSS unchanged");
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 let total=0;
 try{
  for(const width of [390,820,1440]){
   const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
   page.setDefaultTimeout(20000);
   try{
    for(const lesson of [12,13,14]){
     const context="G10-CHV-B"+lesson+"@"+width;
     const response=await page.goto(base+"/thpt-preview/sgk/chuong-v/bai-"+lesson+"/",
      {waitUntil:"domcontentloaded",timeout:60000});
     assert(response?.ok(),context+" page reachable");
     await page.waitForFunction(()=>document.querySelector(".md-content__inner")?.dataset.g10ChvGolden==="preview");
     const article=page.locator(".md-content__inner");
     const tabbed=article.locator(":scope > .tabbed-set");
     const labels=tabbed.locator(":scope > .tabbed-labels > label");
     const blocks=tabbed.locator(":scope > .tabbed-content > .tabbed-block");
     assert.deepEqual((await labels.allInnerTexts()).map(v=>v.trim()),names,context+" four original tabs");
     assert.equal(await blocks.count(),4,context+" four source tabs");
     assert.equal(await blocks.nth(0).locator("[data-thpt-first-try-id]").count(),0,
      context+" old lesson flow is unchanged; no unsupported editorial relocation");
     assert.equal(await blocks.nth(1).locator("[data-thpt-first-try-id]").count(),ids[lesson],
      context+" original IDs retained in original tab, S1 layout pending");
     assert.equal(await blocks.nth(2).locator(":scope > h3").count(),3,
      context+" three historical worked examples still present");
     const render=await article.evaluate(root=>{
      const body=getComputedStyle(root.querySelector(".tabbed-block p")).fontSize;
      const labels=[...root.querySelectorAll(":scope > .tabbed-set > .tabbed-labels > label")];
      const closed=[...root.querySelectorAll(".tabbed-block details.question")];
      return {
       heights:labels.map(e=>e.getBoundingClientRect().height),
       closed:closed.every(e=>!e.open),
       summaries:closed.map(e=>e.querySelector("summary")?.textContent.trim()),
       overflow:document.documentElement.scrollWidth-window.innerWidth,
       body
      };
     });
     assert(render.heights.every(h=>Math.abs(h-44)<1),context+" Golden 44px buttons");
     assert(render.closed,context+" no pre-click answer exposure");
     assert.equal(render.summaries.length,ids[lesson],context+" original voluntary answer controls");
     assert(render.summaries.every(t=>t==="Đối chiếu"),context+" concise optional reveal");
     assert(render.overflow<=3,context+" no horizontal page overflow");
     assert.equal(await article.locator("[data-g10-chapter-selfcheck]").count(),0,
      context+" no independent Readiness exposed");
     // The cross-tab TOC must open the hidden source tab, preserving URL anchors.
     const headingId=await blocks.nth(1).locator("h3[id]").first().getAttribute("id");
     assert(headingId,context+" original Knowledge anchor");
     await labels.nth(2).click();
     const toc=page.locator('.md-sidebar--secondary a[href="#'+headingId+'"]').first();
     assert.equal(await toc.count(),1,context+" TOC contains original anchor");
     await toc.evaluate(el=>el.click());
     await page.waitForFunction(id=>document.getElementById(id)?.getBoundingClientRect().height>0,headingId);
     assert(await blocks.nth(1).isVisible(),context+" TOC opens hidden tab");
     await labels.nth(1).click();
     const first=blocks.nth(1).locator("details.question").first();
     await first.locator("summary").click();
     assert.notEqual(await first.getAttribute("open"),null,context+" opt-in reveal works");
     await first.locator("summary").click();
     assert.equal(await first.getAttribute("open"),null,context+" opt-in reveal recloses");
     assert((await page.locator("mjx-container").count())>0,context+" actual MathJax rendered");
     total++;console.log("PASS "+context+" UI preview, immutable content, Q16");
    }
   }finally{await page.close();}
  }
 }finally{await browser.close();}
 assert.equal(total,9);
 console.log("PASS 9/9 ChV B12–B14 browser PREVIEW; S1/Q18 and owner UX remain HOLD. NO DEPLOY.");
})().catch(error=>{console.error(error.stack||error);process.exitCode=1;});
