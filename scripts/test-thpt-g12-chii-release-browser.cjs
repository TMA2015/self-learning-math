"use strict";
/* Source-locked RELEASE ChII AP1–AP5/Q15/Q16: separate chapter Core/Practice. */
const assert=require("node:assert/strict");
const {chromium}=require("playwright");
const base="http://127.0.0.1:8765/thpt-preview/sgk/lop-12/";
const {verifyG12GoldenHub}=require("./test-thpt-g12-golden-modal-helper.cjs");
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const viewport of [{width:390,height:844},{width:820,height:1180},{width:1440,height:900}]){
   const page=await browser.newPage({viewport});
   const open=async path=>{
    const res=await page.goto(base+path,{waitUntil:"networkidle",timeout:90000});
    assert(res?.ok(),"Missing G12 ChII route "+path);
    const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
    assert(overflow<=20,"Horizontal overflow "+path+" @"+viewport.width+" by "+overflow);
   };
   try{
    await open("");
    assert((await page.locator("a.thpt-r4-tile").count())>=2,"At least ChI and ChII route tiles");
    for(const route of ["chuong-i/","chuong-ii/"])
     assert.equal(await page.locator('a.thpt-r4-tile[href="'+route+'"]').count(),1,"Expected G12 "+route+" tile");
    await open("chuong-ii/");
    assert.equal(await page.locator("a.thpt-r4-tile").count(),5,"Three B06–B08 lessons + one hub + END");
    assert.equal(await page.locator('a.thpt-r4-tile[href="luyen-tap/"]').count(),1);
    for(const n of [6,7,8]){
     await open("chuong-ii/bai-"+n+"/");
     assert.equal(await page.locator('[data-g12-chii-lesson]').count(),0,"No inline canonical practice B0"+n);
     assert.equal(await page.locator(".g12-chii-item").count(),0,"Lesson only contains knowledge and try-first");
     for(const text of ["1. Vì sao cần học","3. Bản chất","4. Đọc hình","5. Ví dụ","6. Tự thử","7. Core"]){
      assert((await page.locator(".md-content").innerText()).includes(text),"Missing lesson teaching section B0"+n+": "+text);
     }
     assert.equal(await page.locator('a[href="../luyen-tap/#b0'+n+'-core"]').count(),1);
     assert.equal(await page.locator('a[href="../luyen-tap/#b0'+n+'-practice"]').count(),1);
     const img=page.locator(".g12-chi-figure img");
     assert.equal(await img.count(),1,"Original source SVG B0"+n);
     await img.first().scrollIntoViewIfNeeded();
     await page.waitForFunction(()=>{const x=document.querySelector(".g12-chi-figure img");return x&&x.complete&&x.naturalWidth>0;},null,{timeout:15000});
     // Owner 06/11 screenshot regression: D5 must follow its explanation
     // before D6 table, source artifact IDs cannot replace student labels.
     const presentation=await page.evaluate(()=>{
      const article=document.querySelector(".md-content__inner");
      const figure=article?.querySelector("figure.g12-chi-figure");
      const table=[...(article?.querySelectorAll("table")||[])].find(t=>t.textContent.includes("Triệu chứng sai"));
      return {hasFigure:!!figure,hasTable:!!table,
       figureBeforeHelpTable:!!(figure&&table&&(figure.compareDocumentPosition(table)&Node.DOCUMENT_POSITION_FOLLOWING)),
       learnerHeader:table?.querySelector("th")?.textContent.trim()};
     });
     assert(presentation.hasFigure&&presentation.hasTable&&presentation.figureBeforeHelpTable,"B0"+n+" figure must be shown before technical D6 table");
     assert.equal(presentation.learnerHeader,"Ý","B0"+n+" must hide raw OUTCOME_ID metadata");
     if(n===7||n===8){
      const subtitles=await page.locator(".md-content__inner h3").allTextContents();
      assert(subtitles.some(x=>x.startsWith("3.1.")),"B0"+n+" subsection numbering must follow section 3");
      assert(!subtitles.some(x=>/^2\.[1-5]\./.test(x)),"B0"+n+" must not show contradictory 2.x labels");
     }
     if(n===8){
      const t=await page.locator(".md-content__inner").innerText();
      assert(!t.includes("$$"),"B08 raw $$ between TeX blocks is a rendering defect");
      // All original formulas remain source-matched; three separate display
      // blocks replace adjacent $ and overloaded \\quad math syntax.
      const displayMath=await page.locator(".md-content__inner .arithmatex").count();
      assert(displayMath>=3,"B08 original vector identities must remain typeset");
     }
    }
    await open("chuong-ii/luyen-tap/");
    await verifyG12GoldenHub(page,{chapter:"II",selector:"[data-g12-chii-hub]",lessons:3,groups:6,items:64,helps:16});
    await open("chuong-ii/tu-kiem-tra-chuong/");
    const end=page.locator('[data-g12-chii-selfcheck="END"]');
    await page.waitForFunction(()=>document.querySelector("[data-g12-chii-selfcheck]")?.dataset.g12ChiiReady==="true",null,{timeout:30000});
    assert.equal(await end.locator(".g12-chii-selfcheck-item").count(),16,"Exactly 16 reused approved END refs");
    assert.equal(await end.locator(".g12-chii-quiz-jump").count(),16,"G11-style numbered navigation");
    assert.equal(await end.locator(".g12-chii-selfcheck-item:visible").count(),1,"One visible question before Final Submit");
    assert.equal(await end.locator(".g12-chii-quiz-progress").innerText(),"Câu 1 / 16 · Chưa nộp");
    assert.equal(await end.locator(".g12-chii-answer:not([hidden])").count(),0,"END key protected");
    assert.equal(await end.locator(".g12-chii-return").count(),0,"No END D6 before Final Submit");
    const ids=await end.locator(".g12-chii-selfcheck-item").evaluateAll(xs=>xs.map(x=>x.dataset.canonicalItem));
    assert.equal(new Set(ids).size,16,"Unique END references");
    assert(ids.every(x=>/THPT-G12-B0[678]-P\d\d$/.test(x)),"No new item IDs");
    const submit=end.locator("button[data-g12-chii-final]");
    await submit.click();
    assert.equal(await end.locator(".g12-chii-answer:not([hidden])").count(),0,"No blank Final Submit");
    await end.locator("textarea").first().fill("Em tự làm một câu");
    await submit.click();
    assert.equal(await end.locator(".g12-chii-answer:not([hidden])").count(),0,"No partial Final Submit");
    const entries=await end.locator(".g12-chii-selfcheck-item textarea").all();
    for(const [i,x]of entries.entries()){
     await end.locator(".g12-chii-quiz-jump").nth(i).click();
     assert.equal(await end.locator(".g12-chii-selfcheck-item:visible").count(),1,"Only selected question visible");
     await x.fill("Bài tự giải số "+(i+1));
    }
    await end.locator(".g12-chii-quiz-jump").first().click();
    assert.equal(await entries[0].inputValue(),"Bài tự giải số 1","Draft retained when navigating");
    await submit.click();
    assert(await submit.isDisabled(),"Final Submit one-way");
    assert.equal(await end.locator(".g12-chii-answer:not([hidden])").count(),16,"END keys only after Final Submit");
    assert.equal(await end.locator(".g12-chii-return").count(),16,"Post-Submit D6 available");
    assert.equal(await end.locator("textarea:disabled").count(),16);
    assert.equal(await end.locator(".g12-chii-selfcheck-item:visible").count(),1,"One visible question after Final Submit");
    await end.locator(".g12-chii-quiz-jump").last().click();
    assert.equal(await end.locator(".g12-chii-answer:visible").count(),1,"Reveal only active question result after Final Submit");
    assert((await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth))<=20,"END reflow");
    console.log("PASS G12 ChII "+viewport.width+"px: separate 64-item chapter Core/Practice, 16 D6, original 3 SGK lessons/SVG, Q16 16 END refs.");
   }finally{await page.close()}
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
