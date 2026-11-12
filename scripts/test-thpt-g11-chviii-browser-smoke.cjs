"use strict";
const {revealModelBFigure}=require("./test-thpt-g11-modelb-figure-tab.cjs");
// G11 ChVIII Golden R4 browser learner/AP/Q16 QA. Real physical Safari P2 remains OPEN.
const assert=require("node:assert/strict"),{chromium}=require("playwright");
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const root="http://127.0.0.1:8765/thpt-preview/sgk/",base=root+"lop-11/chuong-viii/";
 try{
  for(const viewport of [{width:390,height:844},{width:820,height:1180},{width:1440,height:900}]){
   const page=await browser.newPage({viewport});
   try{
    const open=async path=>{const response=await page.goto(path,{waitUntil:"networkidle"});assert(response?.ok(),"HTTP fail "+path)};
    await open(root);
    assert.equal(await page.locator('.library-topic-tile[data-thpt-filter-item][href="lop-11/chuong-viii/"]').count(),1,"G11 ChVIII tile");
    await open(base);
    assert((await page.locator("body").innerText()).includes("Bài 28"),"ChVIII chapter overview");
    for(const n of [28,29,30]){
     await open(base+"bai-"+n+"/");
     const first=page.locator('[data-ped-first-try="1"]');
     assert.equal(await first.count(),1,"First try B"+n);
     assert.equal(await first.getAttribute("open"),null,"First try closed by default");
     assert.equal(await page.locator("[data-thpt-help-id]").count(),n===29?2:3,"Original D6 B"+n);
     const fig=page.locator(".thpt-r4-probability-figure img");
     assert.equal(await fig.count(),1,"One source SVG B"+n);
     await revealModelBFigure(page,fig);await fig.scrollIntoViewIfNeeded();
     await page.waitForFunction(el=>el.complete&&el.naturalWidth>0,await fig.elementHandle(),{timeout:20000});
     const widths=await fig.evaluate(el=>[el.getBoundingClientRect().width,el.parentElement.getBoundingClientRect().width]);
     assert(widths[0]<=widths[1]+2,"Figure overflow B"+n+" "+viewport.width);
     for(const placement of ["C01","P01"]){
      const id="THPT-G11-CHVIII-B"+n+"-"+placement;
      await open(base+"luyen-tap/?item="+id);
      const dialog=page.locator("dialog.thpt-r4-practice-dialog");
      await dialog.waitFor({state:"visible",timeout:15000});
      assert.equal(await dialog.locator("[data-thpt-canonical-item]").first().getAttribute("data-thpt-canonical-item"),id,"Canonical ID "+id);
      const href=await dialog.locator(".thpt-r4-remediation-link").getAttribute("href");
      assert(href.includes("/sgk/lop-11/chuong-viii/bai-"+n+"/"),"D6 return path");
      assert.equal(await dialog.locator("details[open]").count(),0,"No pre-answer details");
      assert.equal(await dialog.locator(".thpt-r4-formative-feedback").innerText(),"","No premature feedback");
      const answer=dialog.locator(".thpt-r4-formative-answer textarea");
      assert.equal(await answer.count(),1,"Free-text input");
      await answer.fill("Thử tự giải");
      await dialog.locator(".thpt-r4-formative-submit").click();
      assert((await dialog.locator(".thpt-r4-formative-feedback").innerText()).includes("chưa chấm tự động"),"No fake grade");
      await dialog.locator("[data-thpt-modal-close]").click();
     }
     assert((await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth))<=20,"Horizontal overflow B"+n+" "+viewport.width);
    }
    // One original CHVIII-integrated Practice question is placed in the B30 group; no cloned ID.
    await open(base+"luyen-tap/?item=THPT-G11-CHVIII-CHVIII-P01");
    const integrated=page.locator("dialog.thpt-r4-practice-dialog");
    await integrated.waitFor({state:"visible",timeout:15000});
    assert.equal(await integrated.locator("[data-thpt-canonical-item]").first().getAttribute("data-thpt-canonical-item"),"THPT-G11-CHVIII-CHVIII-P01","Canonical CHVIII integrated Practice direct link");
    await integrated.locator("[data-thpt-modal-close]").click();
    await open(base+"tu-kiem-tra-chuong/");
    const check=page.locator('[data-g11-chapter-selfcheck="CHVIII"]');
    await check.locator(".g10sc-progress").waitFor({timeout:20000});
    assert((await check.innerText()).includes("Câu 1 / 20"),"20 original public Practice refs");
    assert.equal(await check.locator(".g10sc-jump-button").count(),20);
    assert.equal(await check.locator(".g10sc-review").count(),0,"No pre-Final Submit review");
    assert(!(await check.innerText()).includes("Đáp án:"),"No pre-Final Submit answer");
    await check.locator("textarea").fill("Tự giải");
    await check.locator("[data-g10sc-final]").click();
    const post=await check.innerText();
    assert(post.includes("Đáp án:")&&post.includes("Lời giải:"),"Answer after Final Submit only");
    assert(post.includes("Cần tự đối chiếu lời giải/rubric: 20 câu."),"All free-text manual comparison");
    assert(post.includes("Không ghi Skill Mastery"),"No Mastery");
    assert.equal(await check.locator("textarea").isDisabled(),true,"Answer locked after Final");
    assert((await page.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth))<=20,"Selfcheck responsive");
    await open("http://127.0.0.1:8765/thpt-preview/thu-vien/tu-luan-g11-chuong-viii/");
    const written=page.locator("[data-thpt-written-canonical]");
    assert.equal(await written.count(),8,"8 original Written/Anchor");
    assert.equal(await page.locator("[data-thpt-written-canonical] details[open]").count(),0,"Written solutions opt-in");
   }finally{await page.close()}
  }
  console.log("PASS G11 ChVIII browser 390/820/1440: 3 lessons, 3 SVG, 8 D6, exact canonical modal, 8 Written, 20 public Final Submit, no Mastery");
 }finally{await browser.close()}
})().catch(err=>{console.error(err.stack||err);process.exit(1)});
