"use strict";
const assert=require("node:assert/strict");
const {chromium}=require("playwright");
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const [width,height] of [[390,844],[820,1180],[1440,900]]){
   const page=await browser.newPage({viewport:{width,height}});
   try{
    for(const lesson of [26,27]){
     const url="http://127.0.0.1:8765/thpt-preview/sgk/chuong-ix/bai-"+lesson+"/";
     const response=await page.goto(url,{waitUntil:"networkidle"});
     assert(response?.ok(),"No ChIX page B"+lesson);
     const modelB=page.locator(".md-content__inner .tabbed-set").first();
     const isModelB=await modelB.count()>0;
     const tabs=modelB.locator(".tabbed-labels > label");
     const selectTab=async name=>{
       if(!isModelB)return;
       const label=tabs.filter({hasText:new RegExp("^"+name+"$")});
       assert.equal(await label.count(),1,"B"+lesson+" Model B tab not found: "+name);
       await label.click();
     };
     if(isModelB){
       assert.deepEqual((await tabs.allInnerTexts()).map(s=>s.trim()),
         ["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],
         "B"+lesson+" four Golden learner tabs");
       assert.equal(await modelB.locator(".tabbed-content > .tabbed-block").count(),4,
         "B"+lesson+" four real learner panels");
     }
     const ids=[...await page.locator("[data-thpt-help-id]").evaluateAll(ns=>ns.map(n=>n.dataset.thptHelpId))];
     assert.deepEqual(ids.filter(id=>id.startsWith("HELP-G10-CHIX-TRY")),Array.from({length:5},(_,i)=>"HELP-G10-CHIX-TRY"+String((lesson-26)*5+i+1).padStart(2,"0")),"Reviewed new First Try HELP B"+lesson);
     assert.deepEqual(ids.filter(id=>id.startsWith("D6-G10-B")),["D6-G10-B"+lesson+"-01","D6-G10-B"+lesson+"-02"],"Original D6 retained B"+lesson);
     assert.equal(await page.locator("[data-thpt-help-id][open]").count(),0,"D6 cards must be collapsed");
     const fig=page.locator(".thpt-r4-probability-figure img");
     assert.equal(await fig.count(),1,"Missing D5 teaching SVG B"+lesson);
     await selectTab("Kiến thức SGK");
     // Lazy SVG can have zero intrinsic dimensions until scrolled to.
     // Its educational FIGURE/figcaption must be reachable first.
     const figure=fig.locator("xpath=..");
     assert(await figure.isVisible(),"B"+lesson+" reviewed D5 figure should be accessible in Knowledge panel");
     await figure.scrollIntoViewIfNeeded();
     await fig.evaluate(el=>el.decode());
     const check=await fig.evaluate(el=>({loaded:el.complete&&el.naturalWidth>0,imgWidth:el.getBoundingClientRect().width,boxWidth:el.parentElement.getBoundingClientRect().width}));
     assert(check.loaded,"Broken D5 SVG image link B"+lesson+" at "+width);
     assert(check.imgWidth<=check.boxWidth+1,"SVG overflows container B"+lesson+" at "+width);
     await selectTab("Lỗi thường gặp");
     // Canonical D6 marker is a hidden SPAN immediately preceding the
     // public MkDocs details.tip; it is not itself a details element.
     const d6Marker=page.locator('[data-thpt-help-id="D6-G10-B'+lesson+'-01"]');
     assert.equal(await d6Marker.count(),1,"B"+lesson+" canonical D6 marker missing");
     const d6=d6Marker.locator('xpath=following::details[contains(concat(" ",normalize-space(@class)," ")," tip ")][1]');
     assert.equal(await d6.count(),1,"B"+lesson+" D6 details must follow source-locked marker");
     assert(!(await d6.evaluate(el=>el.open)),"B"+lesson+" no D6 solution pre-open");
     await d6.locator("summary").click();
     assert(await d6.evaluate(el=>el.open),"B"+lesson+" D6 card cannot expand");
    }
    const firstId="THPT-G10-B27-C01";
    await page.locator('[data-thpt-formative-id="'+firstId+'"]').first().click();
    const modal=page.locator("dialog.thpt-r4-practice-dialog");
    await modal.waitFor({state:"visible"});
    assert.equal(await modal.locator("[data-thpt-canonical-item]").getAttribute("data-thpt-canonical-item"),firstId,
      "Remediation deep link must open exact canonical public item");
    assert.equal(await modal.locator("details[open]").count(),0,"Public formative answers start collapsed");
    await modal.locator("[data-thpt-modal-close]").click();
    const ready=await page.goto("http://127.0.0.1:8765/thpt-preview/sgk/chuong-ix/tu-kiem-tra-chuong/",{waitUntil:"networkidle"});
    assert(ready?.ok());await page.locator('[data-g10-chapter-selfcheck="CHIX"] .g10sc-progress').waitFor();assert(!(await page.locator('[data-g10-chapter-selfcheck="CHIX"]').innerText()).includes("Đáp án:"),"ChIX pre-submit answer leak");
   }finally{await page.close()}
  }
  console.log("PASS G10 ChIX B26/B27 browser: 10 new HELP plus 4 original D6 cards, 2 responsive SVG on phone/tablet/desktop, canonical deep link, client self-check without Mastery");
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exit(1)});
