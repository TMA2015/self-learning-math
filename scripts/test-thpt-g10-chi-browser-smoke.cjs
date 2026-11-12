"use strict";
const assert=require("node:assert/strict");const {chromium}=require("playwright");
(async()=>{const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});try{
 for(const [width,height] of [[390,844],[820,1180],[1440,900]]){
  const page=await browser.newPage({viewport:{width,height}});try{
   for(const n of [1,2]){
    const res=await page.goto("http://127.0.0.1:8765/thpt-preview/sgk/chuong-i/bai-"+n+"/",{waitUntil:"networkidle"});assert(res?.ok(),"Missing Chapter I lesson "+n);
     const expectedTries=n===1?5:6,expectedHelp=n===1?2:3;
     const cards=page.locator("[data-thpt-help-id]");
     assert.equal(await cards.count(),expectedHelp,"B0"+n+" source-locked HELP markers must render");
     const isModelB=(await page.locator("article .tabbed-set").count())>0;
     const openTab=async label=>{
       const tabs=page.locator("article .tabbed-set").first().locator(".tabbed-labels label");
       const tab=tabs.filter({hasText:new RegExp("^"+label+"$")});
       assert.equal(await tab.count(),1,"B0"+n+" missing exact tab "+label);
       await tab.click();
     };
     if(isModelB){
       const labels=(await page.locator("article .tabbed-set").first().locator(".tabbed-labels label").allTextContents()).map(x=>x.trim());
       assert.deepEqual(labels,["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],
         "B0"+n+" exact Golden Model B horizontal tabs");
       const markers=page.locator('span[data-ped-first-try="1"][data-thpt-first-try-id]');
       assert.equal(await markers.count(),expectedTries,"B0"+n+" original canonical First Try markers");
       const ids=await markers.evaluateAll(nodes=>nodes.map(x=>x.getAttribute("data-thpt-first-try-id")));
       assert.deepEqual(ids,Array.from({length:expectedTries},(_,i)=>"THPT-G10-CHI-TRY"+String((n===1?1:6)+i).padStart(2,"0")),
         "B0"+n+" source-locked First Try ID/order");
       await openTab("Kiến thức SGK");
       const tries=page.locator("article details.question");
       assert.equal(await tries.count(),expectedTries,"B0"+n+" all canonical First Try disclosures rendered");
       assert.equal(await page.locator("article details.question[open]").count(),0,"B0"+n+" answers must start closed");
       const first=tries.first(),before=await first.innerText();
       await first.locator("summary").click();
       assert(await first.evaluate(x=>x.open),"B0"+n+" cannot open First Try");
       assert((await first.innerText()).length>before.length+18,"B0"+n+" First Try explanation not revealed");
       await first.locator("summary").click();
       assert(!(await first.evaluate(x=>x.open)),"B0"+n+" cannot close First Try");
       const original=n===1?"THPT_G10_B01_IMPLICATION_DIVISIBILITY_D5_R01.svg":"THPT_G10_B02_VENN_TWO_CLUBS_D5_R01.svg";
       const image=page.locator('article img[src$="'+original+'"]');
       assert.equal(await image.count(),1,"B0"+n+" original reviewed D5 asset missing");
       await image.scrollIntoViewIfNeeded();
       await image.evaluate(async x=>{if(typeof x.decode==="function")await x.decode()});
       const dims=await image.evaluate(x=>({loaded:x.complete&&x.naturalWidth>0,w:x.getBoundingClientRect().width,p:x.parentElement.getBoundingClientRect().width}));
       assert(dims.loaded&&dims.w<=dims.p+1,"B0"+n+" reviewed D5 missing or overflows at "+width);
       if(n===2){
         await openTab("Khám phá kiến thức");
         const added=page.locator('article img[src$="G10_B02_MEMBERSHIP_SUBSET_R01.svg"]');
         assert.equal(await added.count(),1,"B02 new membership/subset D5 missing");
         await added.scrollIntoViewIfNeeded();
         await added.evaluate(async x=>{if(typeof x.decode==="function")await x.decode()});
         assert(await added.evaluate(x=>x.complete&&x.naturalWidth>0),"B02 new D5 SVG does not decode");
       }
       await openTab("Lỗi thường gặp");
       const tips=page.locator("article details.tip");
       assert.equal(await tips.count(),expectedHelp,"B0"+n+" all original D6 tips rendered");
       assert.equal(await page.locator("article details.tip[open]").count(),0,"B0"+n+" D6 must start closed");
       const h=tips.first(),hBefore=await h.innerText();
       await h.locator("summary").click();
       assert(await h.evaluate(x=>x.open),"B0"+n+" D6 cannot open");
       assert((await h.innerText()).length>hBefore.length+18,"B0"+n+" D6 remediation content not visible");
       await h.locator("summary").click();
       assert(!(await h.evaluate(x=>x.open)),"B0"+n+" D6 cannot close");
     }else{
       const firstTries=page.locator('details[data-ped-first-try="1"]');
       assert.equal(await firstTries.count(),expectedTries,"B0"+n+" legacy R02 First Try count");
       assert.equal(await page.locator('details[data-ped-first-try="1"][open]').count(),0,"Legacy First Try answer closed");
       await firstTries.first().locator("summary").click();
       assert(await firstTries.first().evaluate(x=>x.open),"Legacy First Try should open");
       await firstTries.first().locator("summary").click();
       assert(!(await firstTries.first().evaluate(x=>x.open)),"Legacy First Try should close");
       assert.equal(await page.locator("[data-thpt-help-id][open]").count(),0,"Legacy D6 must start collapsed");
       const image=page.locator(".thpt-r4-probability-figure img");
       assert.equal(await image.count(),1,"Legacy original D5");
       await image.scrollIntoViewIfNeeded();
       await image.evaluate(async x=>{if(typeof x.decode==="function")await x.decode()});
       const dims=await image.evaluate(x=>({loaded:x.complete&&x.naturalWidth>0,w:x.getBoundingClientRect().width,p:x.parentElement.getBoundingClientRect().width}));
       assert(dims.loaded&&dims.w<=dims.p+1,"Legacy original D5 missing/overflow at "+width);
       await cards.first().locator("summary").click();
       assert(await cards.first().evaluate(x=>x.open),"Legacy D6 should open");
     }
    const id="THPT-G10-B0"+n+"-C01";
    const practice=await page.goto("http://127.0.0.1:8765/thpt-preview/sgk/chuong-i/luyen-tap/?item="+id,{waitUntil:"networkidle"});
    assert(practice?.ok(),"Practice missing");
    const dlg=page.locator("dialog.thpt-r4-practice-dialog");await dlg.waitFor({state:"visible"});
    assert.equal(await dlg.locator("[data-thpt-canonical-item]").first().getAttribute("data-thpt-canonical-item"),id,"Deep link wrong canonical item");
    assert.equal(await dlg.locator("details[open]").count(),0,"Public answer leaked before student voluntarily opens");
    await dlg.locator("[data-thpt-modal-close]").click();
   }
   const ready=await page.goto("http://127.0.0.1:8765/thpt-preview/sgk/chuong-i/tu-kiem-tra-chuong/",{waitUntil:"networkidle"});
   assert(ready?.ok()&&await page.locator('[data-g10-chapter-selfcheck="CHI"] .g10sc-progress').count()===1,"Chapter I reviewed self-check missing");assert(!(await page.locator('[data-g10-chapter-selfcheck="CHI"]').innerText()).includes("Đáp án:"),"Answer exposed before Final Submit");
  }finally{await page.close()}
 }
 console.log("PASS G10 ChI browser: 16 source-locked formative items, two D1/D2 lesson pages, 11 source-locked First Try, 5 D6 and 2 responsive D5, original item deep-links, client self-check no pre-final answers");
}finally{await browser.close()}})().catch(e=>{console.error(e.stack||e);process.exit(1)});
