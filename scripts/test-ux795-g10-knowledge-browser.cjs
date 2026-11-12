#!/usr/bin/env node
"use strict";
/*
 * UX795 G10 B01–B27 source-draft REAL-browser AP smoke test, NO DEPLOY.
 * Presentation-only checks must not replace independent S1/NotebookLM/Q18
 * academic verdicts. Do not weaken legacy source lock or Final Submit.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const {chromium}=require("playwright");
const {SPECS}=require("./thpt-g10-guidance-correction-v1.cjs");

const base=process.env.UX795_BASE_URL||"http://127.0.0.1:8765";
const labels=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
const chapter=n=>n<=2?"i":n<=4?"ii":n<=6?"iii":n<=11?"iv":n<=14?"v":n<=18?"vi":n<=22?"vii":n<=25?"viii":"ix";
const widths=[390,820,1440];
const srcPath=n=>path.resolve(__dirname,"../docs/thpt-preview/sgk/chuong-"+chapter(n)+"/bai-"+n+".md");
const countIDs=(s,key)=>[...s.matchAll(new RegExp(key+'="([^"]+)"',"g"))].map(x=>x[1]);
function sameIDs(actual,expected,where){
 assert.deepEqual(actual.slice().sort(),expected.slice().sort(),where+" canonical ID parity");
 assert.equal(new Set(actual).size,actual.length,where+" duplicate IDs");
}
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 let pages=0,foldsOpened=0,keyboardFolds=0,imagesDecoded=0;
 try{
  for(const width of widths){
   const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
   page.setDefaultTimeout(20000);
   try{
    for(let n=1;n<=27;n++){
     const route="/thpt-preview/sgk/chuong-"+chapter(n)+"/bai-"+n+"/";
     const location="B"+String(n).padStart(2,"0")+"@"+width;
     const source=fs.readFileSync(srcPath(n),"utf8");
     const expectedTry=countIDs(source,"data-thpt-first-try-id");
     const expectedHelp=countIDs(source,"data-thpt-help-id");
     const response=await page.goto(base+route,{waitUntil:"domcontentloaded",timeout:60000});
     assert(response?.ok(),location+" Knowledge route must load");
     const tabs=page.locator(".md-content .tabbed-set").first();
     await tabs.waitFor({state:"visible"});
     assert.equal(await page.locator(".md-content .tabbed-set").count(),1,location+" exactly four native Level-1 tabs, no nested tab");
     const choices=tabs.locator(".tabbed-labels > label");
     const found=(await choices.allInnerTexts()).map(x=>x.replace(/\s+/g," ").trim());
     assert.deepEqual(found,labels,location+" owner-approved tab vocabulary and order");
     const groups=tabs.locator(".tabbed-content > .tabbed-block");
     assert.equal(await groups.count(),4,location+" four content groups");
     // G10 B01–B27 must display an ACTUAL subsection index based on native
     // H3, not fabricated headings or another nested tab. Check all viewports.
     const knowledge=groups.nth(1);
     const originalKnowledge=source.split(/^=== "([^"]+)"$/gm)[4]||"";
     const originalSectionTitles=[...originalKnowledge.matchAll(/^ {4,}### (.+)$/gm)].map(m=>m[1].trim());
     const actualH3=originalSectionTitles.length;
     const outline=knowledge.locator("details.thpt-g10-knowledge-sections");
     await outline.waitFor({state:"attached",timeout:15000});
     assert.equal(await outline.getAttribute("data-g10-knowledge-sections"),String(actualH3),
      location+" visible subsection summary must match original source H3 count");
     await choices.nth(1).click();
     assert(await knowledge.isVisible(),location+" Knowledge SGK panel must open");
     // Originally these 13 reviewed figures immediately FOLLOWED their
     // reading cues. They now must appear before the same cue on screen.
     const existingFiguresAbove={7:1,8:1,9:1,11:2,12:1,13:1,14:1,15:1,16:2,17:1,18:1};
     const expectedPlaced=existingFiguresAbove[n]||0;
     const placed=knowledge.locator('figure[data-g10-figure-before-guide]');
     assert.equal(await placed.count(),expectedPlaced,
      location+" original reviewed figure relocation B07–B18");
     await outline.locator("summary").click();
     assert(await outline.evaluate(el=>el.open),location+" learner can expand subsection list");
     const partLinks=outline.locator("ol li a");
     assert.equal(await partLinks.count(),actualH3,location+" every actual subsection must have one link");
     const displayedTitles=(await partLinks.allInnerTexts()).map(x=>x.trim());
     originalSectionTitles.forEach((title,index)=>{
      // MathJax may convert original TeX spans into rendered mathematical labels.
      // Compare untouched prose titles exactly, and check TeX titles by link target.
      const hasMath=title.includes(String.fromCharCode(92)+"(")||
       title.includes(String.fromCharCode(92)+"[");
      if(!hasMath)
       assert.equal(displayedTitles[index],title,location+" source subsection "+index);
      else assert(displayedTitles[index].length>3,location+" math subsection label absent "+index);
     });
     assert(await partLinks.evaluateAll(nodes=>nodes.every(a=>{
      const id=a.getAttribute("href").slice(1);
      return !!document.getElementById(decodeURIComponent(id));
     })),location+" all subsection navigation targets must be real H3 IDs");
     await outline.locator("summary").click();
     assert(!(await outline.evaluate(el=>el.open)),location+" section outline must close on choice");
     if(SPECS.has(n)){
      const count=(await knowledge.innerText()).match(/Tự dựng sơ đồ minh họa:|Tự dựng hình hoặc bảng:|Tự phác hình minh họa:/g)||[];
      assert.equal(count.length,SPECS.get(n).count,location+" all unsupported read-figure labels corrected in real browser");
     }
     const observedTry=await page.locator("[data-thpt-first-try-id]").evaluateAll(nodes=>nodes.map(n=>n.getAttribute("data-thpt-first-try-id")));
     const observedHelp=await page.locator("[data-thpt-help-id]").evaluateAll(nodes=>nodes.map(n=>n.getAttribute("data-thpt-help-id")));
     sameIDs(observedTry,expectedTry,location+" First Try");
     sameIDs(observedHelp,expectedHelp,location+" D6 HELP");
     // New G10 B26/B27 learner-facing remediation links retain original
     // canonical item IDs as query parameters; these remain formative, never
     // independent readiness or Mastery evidence.
     if(n===26||n===27){
      const expected=[...source.matchAll(/<p><strong>Luyện tiếp:<\/strong> <a href="\.\.\/luyen-tap\/\?item=(THPT-G10-B(?:26|27)-[CP]\d+)"/g)].map(m=>m[1]);
      assert.equal(expected.length,5,location+" five reviewed cross-links from Knowledge to Practice");
      assert.equal(new Set(expected).size,expected.length,location+" unique Practice IDs in B26/B27");
      const live=await page.locator('.md-content a[href*="luyen-tap/?item="]').evaluateAll(nodes=>nodes.map(a=>({
       item:new URL(a.href).searchParams.get("item"),route:new URL(a.href).pathname
      })));
      for(const id of expected){
       assert(live.some(a=>a.item===id&&a.route==="/thpt-preview/sgk/chuong-ix/luyen-tap/"),
        location+" canonical Practice deep link must be rendered for "+id);
      }
     }

     const allFolds=tabs.locator("details.question");
     assert((await allFolds.count())>=expectedTry.length,location+" reviewed formative disclosures present");
     assert.equal(await tabs.locator("details.question[open]").count(),0,location+" no first-try solution shown before learner choice");
     assert.equal(await page.locator("[data-g10-chapter-selfcheck]").count(),0,location+" cannot mount independent chapter assessment inside Knowledge");
     let opened=false,figured=false;
     for(let i=0;i<4;i++){
      await choices.nth(i).click();
      assert(await groups.nth(i).isVisible(),location+" tab "+i+" should be visible on selection");
      const visibleDetails=groups.nth(i).locator("details.question");
      if(!opened && await visibleDetails.count()){
       const fold=visibleDetails.first();
       assert(!(await fold.getAttribute("open")),location+" answer starts folded");
       await fold.locator("summary").click();
       assert((await fold.getAttribute("open"))!==null,location+" learner explicitly opens first-try answer");
       await fold.locator("summary").click();
       assert((await fold.getAttribute("open"))===null,location+" learner closes answer again");
       await fold.locator("summary").focus();
       await page.keyboard.press("Enter");
       assert((await fold.getAttribute("open"))!==null,location+" keyboard Enter opens deliberate First Try reveal");
       await page.keyboard.press("Space");
       assert((await fold.getAttribute("open"))===null,location+" keyboard Space closes deliberate First Try reveal");
       opened=true;foldsOpened++;keyboardFolds++;
      }
      const images=groups.nth(i).locator("figure img");
      for(const figure of await images.all()){
       assert((await figure.getAttribute("alt"))?.trim(),location+" every educational SVG requires descriptive alt text");
       await figure.scrollIntoViewIfNeeded();
       await figure.evaluate(async img=>{
        if(!img.complete) await new Promise((resolve,reject)=>{
         img.addEventListener("load",resolve,{once:true});
         img.addEventListener("error",reject,{once:true});
        });
        if(img.decode) await img.decode();
       });
       assert(await figure.evaluate(img=>img.naturalWidth>0),location+" every educational SVG must decode");
       figured=true;imagesDecoded++;
      }
     }
     assert(opened,location+" at least one voluntary first-try fold");
     assert(figured,location+" at least one educational figure");
     await page.waitForFunction(()=>document.querySelectorAll("mjx-container").length>0,null,{timeout:30000});
     const layout=await page.evaluate(()=>({
      overflow:document.documentElement.scrollWidth-innerWidth,
      math:document.querySelectorAll("mjx-container").length,
      openAnswers:document.querySelectorAll(".md-content details.question[open]").length
     }));
     assert(layout.overflow<=20,location+" horizontal page overflow "+layout.overflow+"px");
     assert(layout.math>0,location+" MathJax must render");
     assert.equal(layout.openAnswers,0,location+" answer is not inadvertently left revealed");
     pages++;
     console.log("PASS "+location+": tabs 4, TRY "+expectedTry.length+", HELP "+expectedHelp.length+
       ", math "+layout.math+", image and closed disclosures");
    }
   }finally{await page.close();}
  }
  assert.equal(pages,81,"Expected 27 lessons at three viewports");
  assert.equal(foldsOpened,81,"All 81 cases need voluntary mouse reveal/close");
  assert.equal(keyboardFolds,81,"All 81 cases need keyboard Enter/Space reveal/close");
  assert(imagesDecoded>=81,"All 81 cases need every SVG decoded, not only the first per lesson");
  console.log("PASS UX795 G10 real browser 27/27 × 390/820/1440 = 81 checks; "+
    imagesDecoded+" SVG image decodes and descriptive alt text, 81 keyboard disclosures; "+
    "source Q18 still HOLD, NO DEPLOY");
 }finally{await browser.close();}
})().catch(e=>{console.error(e.stack||e);process.exitCode=1;});
