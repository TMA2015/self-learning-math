"use strict";
const assert=require("node:assert/strict"),{chromium}=require("playwright");
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const base="http://127.0.0.1:8765/thpt-preview/sgk/lop-11/chuong-i/";
 try{
  for(const viewport of [{width:390,height:844},{width:820,height:1180},{width:1440,height:900}]){
   const page=await browser.newPage({viewport});
   try{
    for(const lesson of [3,4]){
     const r=await page.goto(base+"bai-"+lesson+"/",{waitUntil:"networkidle"});
     assert(r?.ok(),"G11 lesson "+lesson+" must load");
     assert(await page.locator("h1").innerText(),"G11 lesson header missing");
     const helps=page.locator("[data-thpt-help-id]");
     assert.equal(await helps.count(),2,"Exactly two D6 aids for B0"+lesson);
     for(let i=0;i<2;i++){
      const label=await helps.nth(i).locator("summary").innerText();
      assert(label.length>=20&&!/^G11-B0[34]-/.test(label),
       "D6 must show learner-readable Vietnamese summary, not internal skill code");
     }
     const returnHref=await helps.first().locator("a[href*='luyen-tap/']").getAttribute("href");
     assert(returnHref.includes("THPT-G11-B0"+lesson+"-"),"D6 must link back to G11 canonical item");
     const imgs=page.locator(".thpt-r4-probability-figure img");
     assert.equal(await imgs.count(),lesson===3?4:0,"G11 B03 figures vs B04 text-only explanation");
     for(let i=0;i<await imgs.count();i++){
      const image=imgs.nth(i);await image.scrollIntoViewIfNeeded();
      await page.waitForFunction((n)=>{const el=document.querySelectorAll(".thpt-r4-probability-figure img")[n];return !!el&&el.complete&&el.naturalWidth>0},i,{timeout:20000});
      const dim=await image.evaluate(el=>({child:el.getBoundingClientRect().width,parent:el.parentElement.getBoundingClientRect().width}));
      assert(dim.child<=dim.parent+2,"G11 figure overflow at "+viewport.width);
     }
     for(const role of ["C01","P01"]){
      const id="THPT-G11-B0"+lesson+"-"+role;
      const x=await page.goto(base+"luyen-tap/?item="+id,{waitUntil:"networkidle"});
      assert(x?.ok(),"B0"+lesson+" Core/Practice route must load");
      const dlg=page.locator("dialog.thpt-r4-practice-dialog");
      await dlg.waitFor({state:"visible",timeout:15000});
      assert.equal(await dlg.locator("[data-thpt-canonical-item]").first().getAttribute("data-thpt-canonical-item"),id);
      assert((await dlg.locator(".thpt-r4-modal-meta").innerText()).includes("LỚP 11"),"Correct grade");
      assert.equal(await dlg.locator("details[open]").count(),0,"No pre-answer disclosure");
      assert.equal(await dlg.locator(".thpt-r4-formative-feedback").innerText(),"","No feedback before submit");
      const typed=dlg.locator(".thpt-r4-formative-answer textarea");
      assert.equal(await typed.count(),1,"Open answer requires learner entry, no fake auto-grade");
      await typed.fill("G11 learner self-check QA");
      await dlg.locator(".thpt-r4-formative-submit").click();
      assert((await dlg.locator(".thpt-r4-formative-feedback").innerText()).includes("chưa chấm tự động"),"Do not invent open-answer grading");
      assert(await dlg.locator(".thpt-r4-formative-actions details").nth(1).getAttribute("open")!==null,"May view solution after attempt");
      await dlg.locator("[data-thpt-modal-close]").click();
     }
     const over=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
     assert(over<=20,"G11 overflow at "+viewport.width);
    }
    const t=await page.goto(base+"tu-kiem-tra-chuong/",{waitUntil:"networkidle"});
    assert(t?.ok(),"G11 ChI selfcheck route missing");
    const readinessText=await page.locator("body").innerText();
    assert(readinessText.includes("CHƯA KÍCH HOẠT"),"Never claim official Readiness before R3");
    assert(readinessText.includes("Bài 1–4"),"Chapter-end page must describe all four integrated lessons");
    assert(!readinessText.includes("Core/Luyện tập Bài 1–2"),"No stale two-lesson release scope");
    assert.equal(await page.locator("[data-thpt-readiness]").count(),0,"No early official scoring");
   }finally{await page.close()}
  }
  console.log("PASS G11 ChI B03/B04: 26 public formative canonical routes, 4 SVG, 4 D6, no premature grading; browser 390/820/1440");
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exit(1)});
