#!/usr/bin/env node
"use strict";
/* ChVII no-ChVI-regression browser QA: actual Chromium at 390/820/1440.
 * Only Lời giải in Golden panel, zero exceptional full-example boxes,
 * all canonical First Try / D6 IDs, keyboards, SVG, MathJax, Q16 safety.
 * This is NOT physical iPhone/iPad Safari P2. */
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const base=process.env.CHVII_BASE_URL||"http://127.0.0.1:8765/thpt-preview/sgk/chuong-vii/";
const labels=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
const specs={
 19:{tries:7,help:9,fig:1,ex:2,book:["2.1. Phương trình tổng quát của đường thẳng","2.2. Phương trình tham số của đường thẳng"]},
 20:{tries:5,help:7,fig:1,ex:2,book:["2.1. Vị trí tương đối giữa hai đường thẳng","2.2. Góc giữa hai đường thẳng","2.3. Khoảng cách từ một điểm đến một đường thẳng"]},
 21:{tries:5,help:7,fig:1,ex:2,book:["2.1. Phương trình đường tròn","2.2. Phương trình tiếp tuyến của đường tròn"]},
 22:{tries:8,help:10,fig:3,ex:3,book:["2.1. Elip","2.2. Hypebol","2.3. Parabol","2.4. Một số ứng dụng của ba đường conic"]}
};
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [390,820,1440]){
   const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1100:900}});
   page.setDefaultTimeout(23000);
   try{
    for(const n of [19,20,21,22]){
     const s=specs[n],tag="B"+n+" @"+width;
     const res=await page.goto(base+"bai-"+n+"/",{waitUntil:"networkidle",timeout:90000});
     assert(res?.ok(),tag+" page route HTTP");
     const article=page.locator("article.md-content__inner");
     assert.equal(await article.getAttribute("data-g10-chvii-golden"),"preview",
      tag+" scoped Golden ChVII script missing");
     assert.equal(await article.locator(".tabbed-set").count(),1,tag+" native four tabs not duplicated");
     const tabs=article.locator(".tabbed-set").first();
     const t=tabs.locator(".tabbed-labels > label"),blocks=tabs.locator(".tabbed-content > .tabbed-block");
     assert.deepEqual((await t.allInnerTexts()).map(v=>v.trim()),labels,tag+" source Golden tabs");
     assert.equal(await blocks.count(),4,tag+" Golden panes");
     const official=(await blocks.nth(1).locator(":scope > h3").allInnerTexts()).map(x=>x.trim());
     assert.deepEqual(official,s.book,tag+" exact real S1 2.x headings");
     assert.deepEqual((await blocks.nth(0).locator(":scope > h3").allInnerTexts()).map(x=>x.trim()),
      ["1.1. Cùng tìm hiểu","1.2. Ví dụ trực quan","1.3. Thuật ngữ, kiến thức và kỹ năng"],
      tag+" 1.x independent discovery");
     assert.equal(await blocks.nth(0).locator("[data-thpt-first-try-id]").count(),s.tries,
      tag+" original First Try missing from Discovery");
     assert.equal(await blocks.nth(0).locator("details.question").count(),s.tries,
      tag+" every canonical First Try should have one voluntary answer");
     assert.equal(await blocks.nth(1).locator("[data-thpt-first-try-id], [data-thpt-help-id]").count(),0,
      tag+" questions/remediation leaked into official S1 Knowledge tab");
     assert.equal(await blocks.nth(2).locator("[data-thpt-first-try-id], [data-thpt-help-id]").count(),0,
      tag+" cloned canonical item in worked examples");
     assert.equal(await blocks.nth(3).locator("[data-thpt-help-id]").count(),s.help,tag+" lost 5-step HELP");
     assert.equal(await article.locator("details.question[open],details.tip[open]").count(),0,
      tag+" any answer/help exposed before user action");
     await t.nth(0).click();
     const first=blocks.nth(0).locator("details.question").first(),smy=first.locator("summary");
     assert.equal((await smy.innerText()).trim(),"Đối chiếu",tag+" canonical reveal label");
     await smy.focus();await page.keyboard.press("Enter");
     assert(await first.evaluate(el=>el.open),tag+" keyboard voluntary reveal failed");
     assert((await first.textContent()).length>50,tag+" revealed answer missing worked reasoning");
     await page.keyboard.press("Space");
     assert(!(await first.evaluate(el=>el.open)),tag+" keyboard cannot close answer");
     await t.nth(2).click();
     const ex=blocks.nth(2);
     assert.equal(await ex.locator(":scope > h3").count(),s.ex,tag+" worked examples count");
     assert.equal(await ex.locator(":scope > .thpt-g10-example-solution").count(),s.ex,
      tag+" only Lời giải should create a single solution box per example");
     assert.equal(await article.getAttribute("data-g10-chvii-example-sections"),String(s.ex),
      tag+" Golden example count evidence");
     assert.equal(await article.getAttribute("data-g10-chvii-example-boxes"),String(s.ex),
      tag+" missing a solution boundary");
     const groups=await ex.evaluate(el=>{
      const headings=[...el.children].filter(x=>x.tagName==="H3");
      return headings.map((heading,i)=>{
       const next=headings[i+1],parts=[];
       for(let x=heading.nextElementSibling;x&&x!==next;x=x.nextElementSibling)parts.push(x);
       const panels=parts.filter(x=>x.classList.contains("thpt-g10-example-solution"));
       const panel=panels[0];
       return {title:heading.textContent.trim(),
        panels:panels.length,
        firstStrong:panel?.firstElementChild?.querySelector("strong")?.textContent.trim()||"",
        inside:panel?.textContent||"",
        outside:parts.filter(x=>!x.classList.contains("thpt-g10-example-solution")).map(x=>x.textContent||"").join(" ")};
      });
     });
     for(const exItem of groups){
      assert.equal(exItem.panels,1,tag+" example has missing/double box");
      assert(exItem.firstStrong.startsWith("Lời giải."),tag+" a prompt instead of solution was boxed");
      assert(exItem.inside.length>35,tag+" worked solution empty");
      assert(exItem.outside.includes("Đề bài."),tag+" problem must be outside the solution box");
      assert(exItem.outside.includes("Vì sao chọn cách này?"),tag+" method rationale must be outside box");
      for(const forbidden of ["Đề bài.","Vì sao chọn cách này?","Kiểm lại:","Tự luyện thêm.",
        "Tự mở rộng.","Tự kiểm:","Học tiếp:","do dự án biên soạn"])
       assert(!exItem.inside.includes(forbidden),tag+" whole example/control wrongly boxed: "+forbidden);
     }
     assert.equal(await ex.locator(".thpt-g10-example-solution details.question").count(),0,
      tag+" student answer reveal wrongly boxed");
     const learnerText=await ex.innerText();
     assert(!/Ví dụ tự biên soạn|do dự án biên soạn|outcome Core|phạm vi Core|RD1/.test(learnerText),
      tag+" internal project note leaked into learner examples");
     await t.nth(3).click();
     const folded=blocks.nth(3).locator("details.tip");
     assert.equal(await folded.count(),s.help,tag+" tips count");
     const tip=folded.first();
     assert(!(await tip.evaluate(el=>el.open)),tag+" remediation open by default");
     await tip.locator("summary").click();
     assert(await tip.evaluate(el=>el.open),tag+" HELP not voluntarily openable");
     await tip.locator("summary").click();
     assert(!(await tip.evaluate(el=>el.open)),tag+" HELP not voluntarily closable");
     for(let pane=0;pane<4;pane++){
      await t.nth(pane).click();
      for(const img of await blocks.nth(pane).locator("figure img").all()){
       await img.scrollIntoViewIfNeeded();
       assert(await img.evaluate(async el=>{if(el.decode)await el.decode();return !!el.alt.trim()&&el.naturalWidth>0;}),
        tag+" D5 math figure broken or alt missing");
      }
     }
     assert.equal(await article.locator("figure").count(),s.fig,tag+" figure count");
     assert.equal(await page.locator("[data-mastery-credit], [data-mastery-write], [data-g10-chapter-selfcheck]").count(),0,
      tag+" Knowledge must not issue Skill Mastery/Final Submit");
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
     assert(overflow<=20,tag+" horizontal MathJax overflow "+overflow);
     console.log("PASS ChVII B"+n+" Golden @ "+width+"px: S1 "+s.book.length+
      ", First Try "+s.tries+", HELP "+s.help+", boxed solutions "+s.ex+", D5 "+s.fig);
    }
   }finally{await page.close();}
  }
 }finally{await browser.close();}
 console.log("PASS ChVII 12/12 actual Chromium QA, 25 canonical First Try and 33 HELP, nine solution-only boxes, zero narrative exceptions; NO DEPLOY.");
})().catch(e=>{console.error(e);process.exitCode=1;});
