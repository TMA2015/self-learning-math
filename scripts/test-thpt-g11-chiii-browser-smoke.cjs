"use strict";
const {revealModelBFigure}=require("./test-thpt-g11-modelb-figure-tab.cjs");
// RELEASE Chromium viewport smoke; physical iPhone/iPad Safari P2 is separate.
const assert=require("node:assert/strict"),{chromium}=require("playwright");
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 const root="http://127.0.0.1:8765/thpt-preview/sgk/";
 const base=root+"lop-11/chuong-iii/";
 try{
  for(const viewport of [{width:390,height:844},{width:820,height:1180},{width:1440,height:900}]){
   const page=await browser.newPage({viewport});
   try{
    let response=await page.goto(root,{waitUntil:"networkidle"});
    assert(response?.ok(),"SGK index");
    assert.equal(await page.locator('.library-topic-tile[data-thpt-filter-item][href="lop-11/chuong-iii/"]').count(),1,"One G11 ChIII entry");
    response=await page.goto(base,{waitUntil:"networkidle"});
    assert(response?.ok(),"ChIII overview");
    assert((await page.locator("body").innerText()).includes("Bài 8"),"ChIII overview content");
    for(const lesson of [8,9]){
     response=await page.goto(base+"bai-"+lesson+"/",{waitUntil:"networkidle"});
     assert(response?.ok(),"B0"+lesson+" lesson");
     if(lesson===9){
      const localHeads=(await page.locator("h3").allTextContents()).map(x=>x.trim()).filter(x=>x.startsWith("1."));
      assert.deepEqual(localHeads,["1.1. Giá trị đại diện và trung bình","1.2. Tần số tích lũy","1.3. Trung vị (nội suy)","1.4. Tứ phân vị","1.5. Mốt (nội suy, điều kiện SGK)","1.6. Kiểm tra ngữ cảnh"],"B09 six learner-visible headings start at 1 and appear separately");
     }
     const first=page.locator('[data-ped-first-try="1"]');
     assert.equal(await first.count(),1);
     assert.equal(await first.getAttribute("open"),null,"First try hidden by default");
     assert.equal(await page.locator("[data-thpt-help-id]").count(),3,"3 D6 cards");
     const img=page.locator(".thpt-r4-probability-figure img");
     assert.equal(await img.count(),lesson===8?1:2);
     for(let i=0;i<await img.count();i++){
      const el=img.nth(i);await revealModelBFigure(page,el);await el.scrollIntoViewIfNeeded();
      await page.waitForFunction(element=>element.complete&&element.naturalWidth>0,await el.elementHandle(),{timeout:20000});
      const [width,parent]=await el.evaluate(element=>[element.getBoundingClientRect().width,element.parentElement.getBoundingClientRect().width]);
      assert(width<=parent+2,"SVG fits "+viewport.width);
     }
     for(const placement of ["C01","P01"]){
      const id="THPT-G11-B0"+lesson+"-"+placement;
      response=await page.goto(base+"luyen-tap/?item="+id,{waitUntil:"networkidle"});
      assert(response?.ok(),"Practice deeplink "+id);
      const dlg=page.locator("dialog.thpt-r4-practice-dialog");
      await dlg.waitFor({state:"visible",timeout:15000});
      assert.equal(await dlg.locator("[data-thpt-canonical-item]").first().getAttribute("data-thpt-canonical-item"),id,"Exact canonical ID");
      const ret=await dlg.locator(".thpt-r4-remediation-link").getAttribute("href");
      assert(ret.includes("/sgk/lop-11/chuong-iii/bai-"+lesson+"/"),"D6 return ChIII");
      assert.equal(await dlg.locator("details[open]").count(),0,"No premature solution");
      assert.equal(await dlg.locator(".thpt-r4-formative-feedback").innerText(),"","No premature feedback");
      const textarea=dlg.locator(".thpt-r4-formative-answer textarea");
      assert.equal(await textarea.count(),1,"Manual open answer");
      await textarea.fill("Thử tự giải");
      await dlg.locator(".thpt-r4-formative-submit").click();
      assert((await dlg.locator(".thpt-r4-formative-feedback").innerText()).includes("chưa chấm tự động"),"No fake auto-grade");
      await dlg.locator("[data-thpt-modal-close]").click();
     }
     assert((await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth))<=20,"Horizontal overflow");
    }
    response=await page.goto(base+"tu-kiem-tra-chuong/",{waitUntil:"networkidle"});
    assert(response?.ok(),"ChIII voluntary selfcheck route");
    const check=page.locator('[data-g11-chapter-selfcheck="CHIII"]');
    await check.locator(".g10sc-progress").waitFor({timeout:20000});
    assert((await check.innerText()).includes("Câu 1 / 12"),"12 public Practice item refs");
    assert.equal(await check.locator(".g10sc-jump-button").count(),12);
    assert.equal(await check.locator(".g10sc-review").count(),0,"No pre-final feedback");
    assert(!(await check.innerText()).includes("Đáp án:"),"No pre-final answer");
    await check.locator("textarea").fill("Tự giải");
    await check.locator("[data-g10sc-final]").click();
    const after=await check.innerText();
    assert(after.includes("Đáp án:")&&after.includes("Lời giải:"),"Key after Final Submit only");
    assert(after.includes("Cần tự đối chiếu lời giải/rubric: 12 câu."),"No fake grading");
    assert(after.includes("Không ghi Skill Mastery"),"No Mastery");
    assert.equal(await check.locator("textarea").isDisabled(),true,"Lock after submit");
    assert((await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth))<=20,"Responsive selfcheck");
   }finally{await page.close()}
  }
  console.log("PASS G11 ChIII browser 390/820/1440: original SVG, D6, canonical Core/Practice, protected Final Submit and no Mastery");
 }finally{await browser.close()}
})().catch(err=>{console.error(err.stack||err);process.exit(1)});
