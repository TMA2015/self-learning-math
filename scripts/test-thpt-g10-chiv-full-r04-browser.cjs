"use strict";
/* Owner-authorized RELEASE AP1–AP5/Q15/Q16 G10 ChIV FULL R04.
 * PUBLIC formative is unscored; 21 historical self-check questions client-only,
 * not protected RD1, never Mastery.
 */
const assert=require("node:assert/strict"),{chromium}=require("playwright");
const root="http://127.0.0.1:8765/thpt-preview/";
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 try{
  for(const width of [390,820,1440]){
   const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
   const errors=[];page.on("pageerror",e=>errors.push(String(e)));
   try{
    for(const [n,count]of [[7,5],[8,5],[9,5],[10,6],[11,5]]){
     const response=await page.goto(root+"sgk/chuong-iv/bai-"+n+"/",{waitUntil:"networkidle",timeout:90000});
     assert(response?.ok(),"Missing ChIV B"+n);
     const article=page.locator("article.md-content__inner");
     const items=article.locator('[data-thpt-first-try-id^="THPT-G10-CHIV-TRY"]');
     const answers=article.locator("details.question");
     const oldHelp=article.locator('[data-thpt-help-id^="HELP-G10-B"]');
     const transferHelp=article.locator('[data-thpt-help-id^="HELP-G10-CHIV-"]');
     assert.equal(await items.count(),count,"Canonical approved First Try outcome count B"+n);
     assert.equal(await answers.count(),count,"Every first try has voluntary answer fold B"+n);
     assert.equal(await oldHelp.count(),2,"Two original D6 canonical resources B"+n);
     assert.equal(await transferHelp.count(),n===10||n===11?1:0,"Only reviewed transfer D6 if applicable B"+n);
     for(let k=0;k<count;k++){
      const item=items.nth(k),id=await item.getAttribute("data-thpt-first-try-id"),target=await item.getAttribute("data-thpt-help-ref");
      assert(id&&target&&await article.locator('[data-thpt-help-id="'+target+'"]').count()===1,"Q15 unique mapped canonical HELP "+id);
      const a=answers.nth(k);
      assert.equal(await a.getAttribute("open"),null,"Solution initially hidden "+id);
      const p=a.locator("p").first();
      assert(!(await p.isVisible()),"No solution before voluntary reveal "+id);
      await a.locator("summary").click();
      assert(await p.isVisible(),"Reasoned answer visible on student request "+id);
      await a.locator("summary").click();
      assert(!(await p.isVisible()),"Student can close solution "+id);
     }
     if(n===10||n===11){
      const fig=article.locator('figure[data-thpt-reviewed-d5] img');
      assert.equal(await fig.count(),1,"One corrected independently reviewed R01 transfer D5 image B"+n);
      await fig.scrollIntoViewIfNeeded();
      await page.waitForFunction(()=>{const im=document.querySelector('figure[data-thpt-reviewed-d5] img');return im?.complete&&im.naturalWidth>0;});
      const sizes=await fig.evaluate(el=>({width:el.getBoundingClientRect().width,parent:el.parentElement.getBoundingClientRect().width}));
      assert(sizes.width<=sizes.parent+2,"No D5 diagram overflow B"+n+" @"+width);
      const src=await fig.getAttribute("src");
      assert(src?.includes("R01_CORRECTED.svg"),"Do NOT render old R00 incorrectly directed vector diagrams B"+n);
      const svg=await (await page.request.get(new URL(src,page.url()).href)).text();
      assert(svg.includes('orient="auto"')&&svg.includes('marker-end=')&&svg.includes('<desc'),"Accessible corrected vector arrowheads B"+n);
     }
     assert(!/NOTEBOOKLM_PENDING|CONTENT_READY|RELEASE_AUTHORIZATION/.test(await article.innerText()),"Authoring metadata leaked B"+n);
     assert((await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth))<=20,"Page overflow B"+n+" @"+width);
    }
    for(const [name,count,newId]of [["tu-luan-chuong-iv-b07-b08",3,"THPT-G10-CHIV-W08-FORCE-TR01"],["tu-luan-chuong-iv-b09-b11",4,"THPT-G10-CHIV-W10-RIVER-TR01"]]){
     const response=await page.goto(root+"thu-vien/"+name+"/",{waitUntil:"networkidle",timeout:90000});
     assert(response?.ok(),"Original Written library route "+name);
     const cards=page.locator('[data-thpt-written-canonical]');
     assert.equal(await cards.count(),count,"Original canonical Written preserved with exactly one additive transfer "+name);
     const card=page.locator('[data-thpt-written-canonical="'+newId+'"]');
     assert.equal(await card.count(),1,"Exactly one new Q15 Written "+newId);
     const folds=card.locator("details");
     assert.equal(await folds.count(),2,"Student opens hint separately from worked solution/rubric "+newId);
     assert.equal(await folds.nth(0).getAttribute("open"),null);
     assert.equal(await folds.nth(1).getAttribute("open"),null);
     const rubric=folds.nth(1).locator("table");assert.equal(await rubric.count(),1);
     assert(!(await rubric.isVisible()),"No rubric before student chooses to inspect "+newId);
     await folds.nth(1).locator("summary").click();
     assert(await rubric.isVisible(),"Voluntary post-attempt rubric available "+newId);
     await folds.nth(1).locator("summary").click();
     assert(!(await rubric.isVisible()));
    }
    const q=await page.goto(root+"sgk/chuong-iv/tu-kiem-tra-chuong/",{waitUntil:"networkidle",timeout:90000});
    assert(q?.ok(),"Original ChIV public Final Submit route");
    const self=page.locator('[data-g10-chapter-selfcheck="CHIV"]');
    await self.locator(".g10sc-progress").waitFor();
    assert.equal(await self.locator("[data-g10sc-jump]").count(),21,"Historic 21 public Final Submit items unchanged");
    assert.equal(await self.locator(".g10sc-review").count(),0,"Q16 no right/wrong/solution before Final Submit");
    assert.equal(await page.evaluate(()=>typeof window.THPTProtectedReadiness),"undefined","Never expose official protected RD1 engine");
    assert.equal(errors.length,0,"No runtime JS errors @"+width+": "+errors.join("; "));
    console.log("PASS G10 ChIV FULL R04 @"+width+": 24 old+2 new First Try, 2 R01 corrected D5 arrows, 2 Written hidden rubrics, 21 client Final Submit.");
   }finally{await page.close()}
  }
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exitCode=1});
