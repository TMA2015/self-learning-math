#!/usr/bin/env node
"use strict";
/* G10 ChVI B15-B18 Golden AP1–AP5 on REAL Chromium at 390/820/1440.
 * This tests learner disclosure, visual math and image accessibility only;
 * not genuine physical Safari UAT nor official independent Readiness. */
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const base=process.env.CHVI_BASE_URL||"http://127.0.0.1:8765/thpt-preview/sgk/chuong-vi/";
const specs=[
 {n:15,tries:5,helps:5,books:["2.1. Khái niệm hàm số","2.2. Đồ thị của hàm số","2.3. Sự đồng biến, nghịch biến của hàm số"],ex:1,figures:1},
 {n:16,tries:5,helps:5,books:["2.1. Khái niệm hàm số bậc hai","2.2. Đồ thị của hàm số bậc hai"],ex:3,figures:2},
 {n:17,tries:5,helps:5,books:["2.1. Dấu của tam thức bậc hai","2.2. Bất phương trình bậc hai"],ex:4,figures:1},
 {n:18,tries:4,helps:4,books:["2.1. Phương trình dạng","2.2. Phương trình dạng"],ex:4,figures:1}
];
const labels=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [390,820,1440]){
   const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
   page.setDefaultTimeout(20000);
   try{
    for(const item of specs){
     const where="B"+item.n+" @ "+width;
     const response=await page.goto(base+"bai-"+item.n+"/",{waitUntil:"networkidle",timeout:90000});
     assert(response?.ok(),where+" route missing");
     const article=page.locator("article.md-content__inner");
     const tabs=article.locator(".tabbed-set").first();
     const lab=tabs.locator(".tabbed-labels > label");
     const blocks=tabs.locator(".tabbed-content > .tabbed-block");
     assert.equal(await article.locator(".tabbed-set").count(),1,where+" nested tab forbidden");
     assert.deepEqual((await lab.allInnerTexts()).map(x=>x.trim()),labels,where+" four Golden labels");
     assert.equal(await blocks.count(),4,where+" four content groups");
     assert.equal(await article.locator(".thpt-g10-chvi-golden").count(),0,
      where+" Golden scope class belongs on article, not child");
     assert.equal(await article.getAttribute("data-g10-chvi-golden"),"preview",where+" JS scoped Golden not active");
     const heads=await blocks.nth(1).locator(":scope > h3").allInnerTexts();
     assert.equal(heads.length,item.books.length,where+" actual S1 section count");
     for(let i=0;i<item.books.length;i++)
      assert(heads[i].trim().startsWith(item.books[i]),where+" S1 heading "+(i+1));
     assert.deepEqual((await blocks.nth(0).locator(":scope > h3").allInnerTexts()).map(x=>x.trim()),
      ["1.1. Cùng tìm hiểu","1.2. Ví dụ trực quan","1.3. Thuật ngữ, kiến thức và kỹ năng"],
      where+" 1.x discovery sequence");
     const tries=blocks.nth(0).locator("[data-thpt-first-try-id]"),
      answers=blocks.nth(0).locator("details.question");
     assert.equal(await tries.count(),item.tries,where+" original canonical First Try placement count");
     assert.equal(await answers.count(),item.tries,where+" one closed answer per canonical First Try");
     assert.equal(await blocks.nth(1).locator("[data-thpt-first-try-id], [data-thpt-help-id]").count(),0,
      where+" public First Try leaked into formal Knowledge");
     assert.equal(await blocks.nth(2).locator("[data-thpt-first-try-id], [data-thpt-help-id]").count(),0,
      where+" extra worked examples cannot clone canonical item");
     assert.equal(await blocks.nth(3).locator("[data-thpt-help-id]").count(),item.helps,
      where+" 5-step D6 cards in last tab");
     assert.equal(await article.locator("details.question[open],details.tip[open]").count(),0,
      where+" answer/help must not open before learner action");
     await lab.nth(0).click();
     const first=answers.first(),summary=first.locator("summary");
     assert.equal((await summary.innerText()).trim(),"Đối chiếu",where+" concise voluntary answer label");
     await summary.focus();await page.keyboard.press("Enter");
     assert(await first.evaluate(el=>el.open),where+" keyboard opens voluntary First Try");
     assert((await first.innerText()).length>60,where+" source answer not readable after deliberate reveal");
     await page.keyboard.press("Space");
     assert(!(await first.evaluate(el=>el.open)),where+" keyboard closes voluntarily opened answer");
     await lab.nth(2).click();
     assert.equal(await blocks.nth(2).locator(":scope > h3").count(),item.ex,where+" 3.x example sections");
     assert.equal(await blocks.nth(2).locator(":scope > h3 + .thpt-g10-example-solution").count(),item.ex,
      where+" all original worked explanations grouped in Golden panels");
     for(let k=0;k<item.ex;k++){
      const panel=blocks.nth(2).locator(":scope > h3 + .thpt-g10-example-solution").nth(k);
      assert((await panel.textContent()).trim().length>55,where+" example solution inexplicably empty");
     }
     await lab.nth(3).click();
     const tip=blocks.nth(3).locator("details.tip").first();
     assert.equal(await blocks.nth(3).locator("details.tip").count(),item.helps,where+" preserved HELP count");
     assert((await tip.locator("summary").innerText()).trim().startsWith("4.1."),
      where+" Golden remediation numbering");
     assert(!(await tip.evaluate(el=>el.open)),where+" D6 opens prematurely");
     await tip.locator("summary").click();
     assert(await tip.evaluate(el=>el.open),where+" HELP cannot be opened voluntarily");
     await tip.locator("summary").click();
     assert(!(await tip.evaluate(el=>el.open)),where+" HELP cannot be reclosed");
     for(let tab=0;tab<4;tab++){
      await lab.nth(tab).click();
      for(const img of await blocks.nth(tab).locator("figure img").all()){
       await img.scrollIntoViewIfNeeded();
       assert(await img.evaluate(async x=>{if(x.decode)await x.decode();return x.naturalWidth>0&&!!x.alt.trim();}),
        where+" mathematical SVG fails to decode/alt");
      }
     }
     assert.equal(await article.locator("figure").count(),item.figures,where+" D5 figure count");
     assert.equal(await page.locator("[data-g10-chapter-selfcheck]").count(),0,
      where+" Knowledge cannot mount Final Submit");
     assert.equal(await page.locator("[data-mastery-credit], [data-mastery-write]").count(),0,
      where+" never write Mastery from Knowledge self-reveals");
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
     assert(overflow<=20,where+" horizontal overflow "+overflow);
     console.log("PASS G10 ChVI B"+item.n+" Golden @ "+width+"px: S1 "+item.books.length+
      ", First Try "+item.tries+", HELP "+item.helps+", worked "+item.ex+", figure "+item.figures);
    }
   }finally{await page.close();}
  }
 }finally{await browser.close();}
 console.log("PASS 12/12 ChVI browser AP cases; no real iPhone Safari P2, NO DEPLOY.");
})().catch(e=>{console.error(e);process.exitCode=1;});
