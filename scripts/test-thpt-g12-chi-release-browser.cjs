"use strict";
/* G12 ChI AP/Q16 chapter-wide practice hub, golden visual parity to G10/G11.
 * Same PUBLIC canonical bank, original SVG, no early answer/Final Submit bypass.
 * Three Chromium viewports; physical Safari owner P2 remains independent.
 */
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const base="http://127.0.0.1:8765/thpt-preview/sgk/lop-12/";
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
    const hub=page.locator("[data-g12-chi-hub]");
    await page.waitForFunction(()=>document.querySelector("[data-g12-chi-hub]")?.dataset.g12ChiReady==="true",null,{timeout:30000});
    assert.equal(await hub.getAttribute("data-g12-chi-error"),null);
    assert.equal(await hub.locator(".g12-chi-hub-lesson").count(),5,"Five G12 chapter lesson sections");
    assert.equal(await hub.locator("details.g12-chi-hub-group").count(),10,"Core and Practice cards per lesson");
    assert.equal(await hub.locator(".g12-chi-item").count(),66,"Exactly 66 original public items");
    assert.equal(await hub.locator(".g12-chi-item[data-outcome]").count(),66);
    assert.equal(await hub.locator(".g12-chi-help").count(),32,"Same original D6");
    assert.equal(await hub.locator(".g12-chi-answer:not([hidden])").count(),0,"No formative key before submit");
    for(let i=1;i<=5;i++){
     const lesson=hub.locator('[data-g12-chi-hub-lesson="B0'+i+'"]');
     assert.equal(await lesson.locator(".g12-chi-item").count(),counts[i-1],"Original canonical items B0"+i);
     assert.equal(await lesson.locator(".g12-chi-help").count(),helpc[i-1],"Original D6 B0"+i);
     assert.equal(await lesson.locator(".g12-chi-hub-group").count(),2);
    }
    const core=hub.locator("#b01-core");
    assert.equal(await core.getAttribute("open"),null,"Groups collapsed by default");
    await core.locator("summary").click();
    assert.notEqual(await core.getAttribute("open"),null,"Core opens");
    const first=core.locator(".g12-chi-item").first();
    await first.locator("button.g12-chi-submit").click();
    assert.equal(await first.locator(".g12-chi-answer:not([hidden])").count(),0,"No reveal on empty submit");
    await first.locator("textarea").fill("Em tự giải bài này trước");
    await first.locator("button.g12-chi-submit").click();
    assert.equal(await first.locator(".g12-chi-answer:not([hidden])").count(),1,"Reveal only submitted Core key");
    assert.equal(await hub.locator(".g12-chi-answer:not([hidden])").count(),1,"Other keys stay hidden");
    const help=hub.locator("#b01-help");
    await help.locator(":scope > summary").click();
    assert.notEqual(await help.getAttribute("open"),null);
    const d6=help.locator("a.g12-chi-return").first();
    const anchor=await d6.getAttribute("href");
    assert(anchor.startsWith("#"),"Original D6 return-to-item link");
    await d6.click();
    const target=hub.locator('[id="'+anchor.slice(1)+'"]');
    assert.equal(await target.count(),1,"Canonical item target exists");
    assert(await target.isVisible(),"D6 return opens the proper Core/Practice group");
    const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
    assert(overflow<=20,"Expanded practice does not overflow @"+viewport.width);
    await check("chuong-i/luyen-tap/?qa=deep-link#b02-practice");
    await page.waitForFunction(()=>document.querySelector("[data-g12-chi-hub]")?.dataset.g12ChiReady==="true",null,{timeout:30000});
    assert.notEqual(await page.locator("#b02-practice").getAttribute("open"),null,"Deep link opens Practice B02");
    assert.equal(await page.locator(".g12-chi-answer:not([hidden])").count(),0,"New view never preloads key");
    await check("chuong-i/tu-kiem-tra-chuong/");
    const root=page.locator('[data-g12-chi-selfcheck="END"]');
    await page.waitForFunction(()=>document.querySelector("[data-g12-chi-selfcheck]")?.dataset.g12ChiReady==="true",null,{timeout:30000});
    assert.equal(await root.locator(".g12-chi-selfcheck-item").count(),12,"12 original PUBLIC end items");
    assert.equal(await root.locator(".g12-chi-answer:not([hidden])").count(),0);
    assert.equal(await root.locator(".g12-chi-help").count(),0,"Never reveal D6 before Final Submit");
    const btn=root.locator("button[data-g12-chi-final]");
    await btn.click();assert.equal(await root.locator(".g12-chi-answer:not([hidden])").count(),0);
    await root.locator("textarea").first().fill("Tự thử");
    await btn.click();assert.equal(await root.locator(".g12-chi-answer:not([hidden])").count(),0);
    const inputs=await root.locator(".g12-chi-selfcheck-item textarea").all();
    for(const [i,el]of inputs.entries())await el.fill("Lập luận câu "+(i+1));
    await btn.click();
    assert.equal(await root.locator(".g12-chi-answer:not([hidden])").count(),12,"Only after full Final Submit");
    assert.equal(await btn.isDisabled(),true);
    assert.equal(await root.locator(".g12-chi-help").count(),4,"END D6 only post-submit");
    assert.equal(await root.locator("textarea:disabled").count(),12);
    assert((await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth))<=20);
    console.log("PASS G12 ChI "+viewport.width+"px: 5 knowledge-only lessons, separate 66-item chapter hub, 32 D6, 6 SVG; 12 END Q16.");
   }finally{await page.close()}
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
