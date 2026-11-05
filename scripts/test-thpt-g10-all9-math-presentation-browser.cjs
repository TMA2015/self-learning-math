"use strict";
/* RELEASE AP1/AP2/AP5/Q16: all nine G10 SGK chapter Core/Selfcheck routes,
 * with targeted reviewed TeX cases and MathJax at 390/820/1440.
 * No canonical bank, assessment data, or learner state modifications.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const {chromium}=require("playwright");
const chapters=["i","ii","iii","iv","v","vi","vii","viii","ix"];
const target={
 iv:{lesson:"7",bank:"THPT_CHIV_B07_B08_REVIEWED_FORMATIVE",sc:"CHIV"},
 v:{lesson:"12",bank:"THPT_CHV_B12_REVIEWED_FORMATIVE",sc:"CHV"},
 vii:{lesson:"19",bank:"THPT_CHVII_REVIEWED_FORMATIVE",sc:"CHVII"},
 viii:{lesson:"24",bank:"THPT_CHVIII_REVIEWED_FORMATIVE",sc:"CHVIII"}
};
const root="http://127.0.0.1:8765/thpt-preview/sgk/";
const selfBooks=Object.fromEntries(Object.values(target).map(x=>[x.sc,
 JSON.parse(fs.readFileSync(path.join(__dirname,"..","docs/assets/data/thpt-g10-readiness",x.sc+".json"),"utf8"))]));
const mathPattern=/\$[^$\n]+\$|\\\([^)]*\\\)|\\(?:vec|overrightarrow|bar)/;
const open=async(page,url)=>{
 const response=await page.goto(url,{waitUntil:"domcontentloaded",timeout:60000});
 assert(response?.ok(),"Missing G10 route "+url);
};
(async()=>{
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 let chapterViews=0,mathViews=0,scViews=0;
 try{
  for(const width of [390,820,1440]){
   const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
   const errors=[];
   page.on("pageerror",err=>errors.push(String(err)));
   try{
    for(const ch of chapters){
     const practice=root+"chuong-"+ch+"/luyen-tap/";
     await open(page,practice);
     const cards=page.locator('[data-thpt-practice-hub] button[data-thpt-open-quiz]');
     assert(await cards.count()>=4,"Core/Practice buttons missing Ch"+ch);
     await cards.first().click();
     const modal=page.locator("dialog.thpt-r4-practice-dialog");
     await modal.waitFor({state:"visible",timeout:15000});
     assert(await modal.locator("[data-thpt-canonical-item]").count()>0,
       "PUBLIC canonical exercise missing in Ch"+ch);
     assert.equal(await modal.locator("details[open]").count(),0,"Preanswer reveal in Ch"+ch);
     await modal.locator("[data-thpt-modal-close]").click();
     chapterViews++;
     if(target[ch]){
      const t=target[ch];
      const id=await page.evaluate(({bank,lesson})=>{
        const b=window[bank];
        if(!b?.validate?.().valid)return null;
        return ["core","practice"].flatMap(role=>b.forLesson(lesson,role))
          .find(q=>/\$[^$\n]+\$|\\\([^)]*\\\)|\\(?:vec|overrightarrow|bar)/.test(q.stem))?.item_id||null;
      },t);
      assert(id,"No source-backed maths item in Ch"+ch);
      await open(page,practice+"?item="+id);
      await page.locator("dialog.thpt-r4-practice-dialog").waitFor({state:"visible",timeout:15000});
      const prompt=page.locator("dialog.thpt-r4-practice-dialog .thpt-r4-reviewed-formative-card h3");
      try{
       await prompt.locator("mjx-container").first().waitFor({state:"attached",timeout:12000});
      }catch(error){
       const diagnostics=await page.evaluate(()=>({
        mathjax:typeof window.MathJax,
        typesetPromise:typeof window.MathJax?.typesetPromise,
        startup:typeof window.MathJax?.startup?.promise?.then,
        ready:document.readyState,
        script:[...document.querySelectorAll("script[src]")].filter(s=>s.src.includes("mathjax")).map(s=>s.src),
        item:document.querySelector(".thpt-r4-reviewed-formative-card")?.dataset.thptCanonicalItem,
        prompt:document.querySelector(".thpt-r4-reviewed-formative-card h3")?.innerHTML?.slice(0,650),
        mathNodes:document.querySelectorAll(".thpt-r4-reviewed-formative-card [data-thpt-reviewed-math]").length
       }));
       throw Error("G10 "+ch+" item "+id+" @"+width+" MathJax render failure: "+JSON.stringify(diagnostics)+"; "+error.message);
      }
      assert(await prompt.locator("[data-thpt-reviewed-math]").count()>0,"Missing math wrapper "+id);
      const visible=await prompt.innerText();
      assert(!/\$[^$\n]+\$/.test(visible),"Raw math dollar on published Core "+id);
      assert(!visible.includes("\\overrightarrow"),"Raw TeX command on Core "+id);
      mathViews++;
     }
     const check=root+"chuong-"+ch+"/tu-kiem-tra-chuong/";
     await open(page,check);
     const sc=page.locator('[data-g10-chapter-selfcheck]');
     await sc.locator(".g10sc-progress").waitFor({state:"visible",timeout:15000});
     assert.equal(await sc.locator(".g10sc-review").count(),0,"Selfcheck solutions visible before Final Submit "+ch);
     if(target[ch]){
      const t=target[ch];
      const idx=selfBooks[t.sc].items.findIndex(q=>mathPattern.test(q.stem));
      assert(idx>=0,"Missing source TeX for G10 "+ch);
      await sc.locator('[data-g10sc-jump="'+idx+'"]').click();
      const math=sc.locator(".g10sc-math-inline mjx-container, .g10sc-math-display mjx-container");
      await math.first().waitFor({state:"attached",timeout:25000});
      assert(!(await sc.locator(".g10sc-rich").first().innerText()).includes("\\overrightarrow"),
        "Raw vector TeX still visible on selfcheck "+ch);
      assert.equal(await sc.locator(".g10sc-review").count(),0);
      scViews++;
     }
     const metrics=await page.evaluate(()=>({
       overflow:document.documentElement.scrollWidth-window.innerWidth,
       coreWrong:document.querySelector('[data-g10-chapter-selfcheck] [data-thpt-reviewed-formative]')!==null
     }));
     assert(metrics.overflow<=20,"G10 "+ch+" horizontal overflow "+metrics.overflow+" at "+width);
     assert(!metrics.coreWrong,"Core prompt leaked into independent selfcheck "+ch);
    }
    assert(!errors.length,"Browser JavaScript errors at "+width+": "+errors.slice(0,4).join(" ; "));
   }finally{await page.close()}
  }
  assert.equal(chapterViews,27);
  assert.equal(mathViews,12);
  assert.equal(scViews,12);
  console.log("PASS RELEASE G10 I–IX Core+Selfcheck 27 route pairs, ChIV/V/VII/VIII 24 MathJax cases, 390/820/1440, no early answer/overflow/errors");
 }finally{await browser.close()}
})().catch(e=>{console.error(e.stack||e);process.exitCode=1});
