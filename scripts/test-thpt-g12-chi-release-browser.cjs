"use strict";
/* G12 ChI AP/Q16 chapter-wide practice hub, golden visual parity to G10/G11.
 * Same PUBLIC canonical bank, original SVG, no early answer/Final Submit bypass.
 * Three Chromium viewports; physical Safari owner P2 remains independent.
 */
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const base="http://127.0.0.1:8765/thpt-preview/sgk/lop-12/";
const {verifyG12GoldenHub}=require("./test-thpt-g12-golden-modal-helper.cjs");
const counts=[11,12,14,14,15],helpc=[6,6,6,7,7],figurec=[1,1,1,2,1];
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const viewport of [{width:390,height:844},{width:820,height:1180},{width:1440,height:900}]){
   const page=await browser.newPage({viewport});
   try{
    const check=async route=>{
     const res=await page.goto(base+route,{waitUntil:"networkidle",timeout:90000});
     assert(res?.ok(),"Missing G12 route "+route);
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
     assert(overflow<=20,"Horizontal overflow "+route+" @"+viewport.width+" by "+overflow);
    };
    await check("");
    await check("chuong-i/");
    assert.equal(await page.locator("a.thpt-r4-tile").count(),7,"Five lesson links + one hub + one END");
    assert.equal(await page.locator('a.thpt-r4-tile[href="luyen-tap/"]').count(),1,"Chapter Core page tile");
    for(let i=1;i<=5;i++){
     await check("chuong-i/bai-"+i+"/");
     assert.equal(await page.locator("[data-g12-chi-lesson]").count(),0,"No inline practice root B"+i);
     assert.equal(await page.locator(".g12-chi-item").count(),0,"No public quiz item on lesson B"+i);
     const text=await page.locator(".md-content").innerText();
     for(const label of ["1. Vì sao cần học?","2. Kiến thức tiền đề","3. Hiểu bản chất",
        "4. Đọc hình","5. Ví dụ","6. Tự thử","7. Chuyển sang Core"])
      assert(text.includes(label),"Missing student lesson knowledge step B"+i+": "+label);
     assert.equal(await page.locator('a[href="../luyen-tap/#b0'+i+'-core"]').count(),1);
     assert.equal(await page.locator('a[href="../luyen-tap/#b0'+i+'-practice"]').count(),1);
     assert.equal(await page.locator(".g12-chi-figure img").count(),figurec[i-1]);
     const images=await page.locator(".g12-chi-figure img").all();
     for(const img of images){
      await img.scrollIntoViewIfNeeded();
      await img.evaluate(async x=>{if(!x.complete)await new Promise((done,fail)=>{
        x.addEventListener("load",done,{once:true});x.addEventListener("error",fail,{once:true});
      });if(x.decode)await x.decode();});
      assert(await img.evaluate(x=>x.naturalWidth>0),"Missing original D5 SVG B"+i);
     }
    }
    await check("chuong-i/luyen-tap/");
    await verifyG12GoldenHub(page,{chapter:"I",selector:"[data-g12-chi-hub]",lessons:5,groups:10,items:66,helps:32});
    await check("chuong-i/tu-kiem-tra-chuong/");
    const root=page.locator('[data-g12-chi-selfcheck="END"]');
    await page.waitForFunction(()=>document.querySelector("[data-g12-chi-selfcheck]")?.dataset.g12ChiReady==="true",null,{timeout:30000});
    assert.equal(await root.locator(".g12-chi-selfcheck-item").count(),12,"12 original PUBLIC end items");
    assert.equal(await root.locator(".g12-chi-quiz-jump").count(),12,"G11-style numbered navigation");
    assert.equal(await root.locator(".g12-chi-selfcheck-item:visible").count(),1,"One visible question before Final Submit");
    assert.equal(await root.locator(".g12-chi-quiz-progress").innerText(),"Câu 1 / 12 · Chưa nộp");
    assert.equal(await root.locator(".g12-chi-answer:not([hidden])").count(),0);
    assert.equal(await root.locator(".g12-chi-help").count(),0,"Never reveal D6 before Final Submit");
    const btn=root.locator("button[data-g12-chi-final]");
    await btn.click();assert.equal(await root.locator(".g12-chi-answer:not([hidden])").count(),0);
    await root.locator("textarea").first().fill("Tự thử");
    await btn.click();assert.equal(await root.locator(".g12-chi-answer:not([hidden])").count(),0);
    const inputs=await root.locator(".g12-chi-selfcheck-item textarea").all();
    for(const [i,x]of inputs.entries()){
     await root.locator(".g12-chi-quiz-jump").nth(i).click();
     assert.equal(await root.locator(".g12-chi-selfcheck-item:visible").count(),1,"Only selected question visible");
     await x.fill("Lập luận câu "+(i+1));
    }
    await root.locator(".g12-chi-quiz-jump").first().click();
    assert.equal(await inputs[0].inputValue(),"Lập luận câu 1","Draft retained when navigating");
    await btn.click();
    assert.equal(await root.locator(".g12-chi-answer:not([hidden])").count(),12,"Only after full Final Submit");
    assert.equal(await btn.isDisabled(),true);
    assert.equal(await root.locator(".g12-chi-help").count(),4,"END D6 only post-submit");
    assert.equal(await root.locator("textarea:disabled").count(),12);
    assert.equal(await root.locator(".g12-chi-selfcheck-item:visible").count(),1,"One visible question after Final Submit");
    await root.locator(".g12-chi-quiz-jump").last().click();
    assert.equal(await root.locator(".g12-chi-answer:visible").count(),1,"Reveal only active question result after Final Submit");
    assert((await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth))<=20);
    console.log("PASS G12 ChI "+viewport.width+"px: 5 knowledge-only lessons, separate 66-item chapter hub, 32 D6, 6 SVG; 12 END Q16.");
   }finally{await page.close()}
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
