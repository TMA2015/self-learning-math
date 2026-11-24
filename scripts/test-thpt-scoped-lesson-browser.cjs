#!/usr/bin/env node
"use strict";
/* Browser-only AP1–AP5 smoke for the canonical SGK lesson(s) in this PR.
 * It does NOT judge S1 mathematics, give Academic/PED PASS, or run 79 pages.
 * Safety invariant: no answer reveal or Mastery before learner action.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const {chromium}=require("playwright");
const root=path.resolve(__dirname,"..");
const base=(process.env.SCOPED_BASE_URL||"http://127.0.0.1:8765").replace(/\/$/,"");
const lessons=(process.env.SCOPED_LESSONS||"").split(",").filter(Boolean);
const labels=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
const widths=[390,820,1440];
const re=/^docs\/thpt-preview\/sgk\/(?:(?:lop-11|lop-12)\/)?chuong-(?:i|ii|iii|iv|v|vi|vii|viii|ix)\/bai-[1-9]\d*\.md$/;
const chapter=/^docs\/thpt-preview\/sgk\/(?:(?:lop-11|lop-12)\/)?(?:chuong-(?:i|ii|iii|iv|v|vi|vii|viii|ix)\/(?:luyen-tap|tu-kiem-tra-chuong)\.md|chuong-(?:i|ii|iii|iv|v|vi|vii|viii|ix)\.md)$/;

// Compare rendered component styles against the published, owner-accepted
// G10 B10 (semantic 3+1) and B14 (native example/disclosure). No synthetic CSS.
async function goldenW1Parity(page,browser,width,rel){
 const w1=/\/lop-11\/chuong-i\/bai-[234]\.md$/.test(rel);
 const w2=/\/lop-11\/(?:chuong-ii\/bai-[567]|chuong-iii\/bai-[89])\.md$/.test(rel);
 const w3=/\/lop-11\/chuong-iv\/bai-1[0-4]\.md$/.test(rel);
 const w4=/\/lop-11\/chuong-v\/bai-1[5-7]\.md$/.test(rel);
 const w5=/\/lop-11\/chuong-vi\/bai-(?:1[89]|2[01])\.md$/.test(rel);
 const w6=/\/lop-11\/chuong-vii\/bai-2[2-7]\.md$/.test(rel);
 if(!w1&&!w2&&!w3&&!w4&&!w5&&!w6)return;
 const cases={
  article:["article.md-content__inner",["fontFamily","fontSize","fontWeight","lineHeight"]],
  tabs:["article .tabbed-labels",["gap","paddingTop","paddingBottom","borderBottomWidth"]],
  tab:["article .tabbed-labels > label",["height","minHeight","boxSizing","fontFamily","fontSize","fontWeight","lineHeight","paddingTop","paddingLeft","borderTopLeftRadius"]],
  title:["article h1",["fontFamily","fontSize","fontWeight","lineHeight"]],
  h2:["article .tabbed-block > h2.thpt-g10-section-heading",["fontSize","fontWeight","lineHeight","paddingTop","paddingLeft","borderLeftWidth","borderTopLeftRadius"]],
  h3:["article .tabbed-block > h3",["fontSize","fontWeight","lineHeight","paddingTop","paddingLeft","borderLeftWidth","borderTopLeftRadius"]],
  body:["article .tabbed-block > p",["fontFamily","fontSize","fontWeight","lineHeight"]],
  concept:["article .thpt-r4-concept-card",["backgroundColor","color","borderLeftColor","borderTopColor","paddingTop","paddingLeft","borderLeftWidth","borderTopLeftRadius","fontSize","lineHeight"]],
  rule:["article .thpt-r4-rule-card",["backgroundColor","color","borderLeftColor","borderTopColor","paddingTop","paddingLeft","borderLeftWidth","borderTopLeftRadius","fontSize","lineHeight"]],
  formula:["article .thpt-r4-key-formula",["backgroundColor","color","borderLeftColor","borderTopColor","paddingTop","paddingLeft","borderLeftWidth","borderTopLeftRadius","fontSize","lineHeight"]],
  example:["article .thpt-g10-example-solution",["backgroundColor","paddingTop","paddingLeft","borderLeftWidth","borderTopLeftRadius","fontSize","lineHeight"]],
  question:["article details.question",["backgroundColor","color","borderTopColor","borderLeftWidth","borderTopLeftRadius","fontSize","lineHeight"]],
  summary:["article details.question > summary",["fontSize","fontWeight","lineHeight","paddingTop","paddingLeft","borderTopLeftRadius"]],
  tip:["article details.tip",["backgroundColor","color","borderTopColor","borderLeftWidth","borderTopLeftRadius","fontSize","lineHeight"]],
  footnote:["article .thpt-r4-footnote",["fontFamily","fontSize","lineHeight","color"]],
  caption:["article figure figcaption",["fontFamily","fontSize","lineHeight","color"]]
 };
 const collect=async p=>p.evaluate(c=>Object.fromEntries(Object.entries(c).map(([key,[sel,props]])=>{
  const all=[...document.querySelectorAll(sel)];
  const values=all.map(e=>{const st=getComputedStyle(e);return Object.fromEntries(props.map(k=>[k,st[k]]));});
  return [key,values];
 })),cases);
 const reference=await browser.newPage({viewport:page.viewportSize()});
 const ref14=await browser.newPage({viewport:page.viewportSize()});
 const refB1=await browser.newPage({viewport:page.viewportSize()});
 try{
  for(const [p,route] of [[reference,"/thpt-preview/sgk/chuong-iv/bai-10/"],[ref14,"/thpt-preview/sgk/chuong-v/bai-14/"],[refB1,"/thpt-preview/sgk/lop-11/chuong-i/bai-1/"]]){
   assert((await p.goto(base+route,{waitUntil:"load",timeout:60000}))?.ok(),"Golden reference unavailable");
   await p.waitForFunction(()=>document.querySelector("article.thpt-g10-knowledge-ap1.thpt-g10-chiv-golden"));
  }
  const tabs=page.locator("article .tabbed-labels > label");
  for(const scheme of ["default","slate"]){
   // W2: independent palette samples; do not reuse mutated MathJax/disclosure DOM from the previous interaction pass.
   if((w2||w3||w4||w5||w6)&&scheme==="slate"){
    assert((await page.reload({waitUntil:"load",timeout:60000}))?.ok(),rel+" slate reload");
    await page.waitForFunction(()=>document.querySelectorAll("mjx-container").length>0,null,{timeout:30000});
   }
   for(const p of [reference,ref14,refB1,page]){
    await p.evaluate(s=>document.body.setAttribute("data-md-color-scheme",s),scheme);
    await p.waitForTimeout(150);
   }
   const a=await collect(reference),b=await collect(ref14),c=await collect(page);
   const match=(v,refs,key)=>{
    // Compare the complete tuple, not each value separately. Reference B10
    // and B14 share the same Golden component rules; body content may vary.
    assert(refs.some(x=>JSON.stringify(x)===JSON.stringify(v)),
     rel+" @"+width+" "+scheme+" "+key+" computed CSS differs: "+JSON.stringify({actual:v,reference:refs.slice(0,2)}));
   };
   for(const key of Object.keys(c)){
    if(!c[key].length)continue; // no requirement to invent an absent semantic role
    const refs=(["formula","concept","rule"].includes(key)?a[key]:[...a[key],...b[key]]);
    assert(refs.length,rel+" missing reference component "+key);
    for(const v of c[key])match(v,refs,key);
   }
   if(w2&&rel.endsWith("/bai-5.md")){
    const recap=page.locator("article .thpt-r4-recap-card");
    assert.equal(await recap.count(),1,"B05 exact mandatory recap");
    const goldRecap=reference.locator("article .thpt-r4-knowledge-conclusion").filter({hasText:"Kiến thức cần nhớ — Bài 10:"});
    assert.equal(await goldRecap.count(),1,"B10 Golden recap reference");
    const readRecap=el=>{const st=getComputedStyle(el);return {shape:[st.paddingTop,st.paddingLeft,st.borderLeftWidth,st.borderTopLeftRadius,st.fontSize,st.lineHeight],colors:[st.backgroundColor,st.borderTopColor,st.borderLeftColor]};};
    const got=await recap.evaluate(readRecap),ref=await goldRecap.evaluate(readRecap);
    assert.deepEqual(got.shape,ref.shape,"B05 recap Golden dimensions");
    assert.deepEqual(got.colors,scheme==="default"?["rgb(255, 243, 213)","rgb(234, 203, 124)","rgb(196, 154, 55)"]:["rgb(69, 57, 25)","rgb(133, 107, 55)","rgb(212, 176, 95)"],"B05 owner-approved recap semantic colors");
    assert((await recap.innerText()).includes("Kiến thức cần nhớ"),"B05 recap label");
   }
   for(const i of [0,1,2,3]){
    await tabs.nth(i).click();
    await page.waitForFunction(i=>[...document.querySelectorAll("article .tabbed-labels > label")].filter(x=>x.classList.contains("slm-g10-active-tab")).length===1&&document.querySelectorAll("article .tabbed-labels > label")[i].classList.contains("slm-g10-active-tab"),i);
    assert.equal(await tabs.nth(i).evaluate(el=>el.getBoundingClientRect().height),44,rel+" active tab actual height");
   }
   // SGK-REL-006: no vacuous PASS when tab4 is all exposed h3.
   const panel=page.locator("article .tabbed-block").nth(3);
   await refB1.locator("article .tabbed-labels > label").nth(3).click();
   const referenceTip=refB1.locator("article .tabbed-block").nth(3).locator(":scope > details.tip").first();
   const tips=panel.locator(":scope > details.tip");
   const source=fs.readFileSync(path.join(root,rel),"utf8");
   const expected=[...source.split('=== "Lỗi thường gặp"')[1].matchAll(/^    ### (4\.\d+\..+)$/gm)].map(x=>x[1]);
   assert(expected.length>0,rel+" expected recovery headings");
   if(w2||w3||w4||w5||w6){
    assert.equal(expected.length,rel.endsWith("/bai-5.md")?5:6);
    const raw=await page.evaluate(async()=>{
     const doc=new DOMParser().parseFromString(await (await fetch(location.href)).text(),"text/html");
     const panel=doc.querySelectorAll("article .tabbed-block")[3];
     return {titles:[...panel.querySelectorAll(":scope > details.tip > summary")].map(s=>s.textContent.trim()),links:[...panel.querySelectorAll(":scope > p")].filter(p=>p.querySelector("strong")?.textContent==="Học tiếp:").flatMap(p=>[...p.querySelectorAll("a")].map(a=>a.getAttribute("href")))};
    });
    assert.deepEqual(raw.titles,expected,rel+" source-to-static DOM recovery titles including math");
    assert.equal(raw.links.length,rel.endsWith("/bai-5.md")?0:rel.endsWith("/bai-6.md")||rel.endsWith("/bai-7.md")?2:3,rel+" Học tiếp links preserved");
   }
   assert.equal(await panel.locator(":scope > h3").count(),0,rel+" exposed tab4 headings");
   assert.equal(await tips.count(),expected.length,rel+" one accordion per recovery");
   assert.equal(await panel.locator(":scope > p > strong").filter({hasText:/^(Dấu hiệu:|Vì sao sai:|Cách sửa:)$/}).count(),0,rel+" exposed recovery body");
   const styles=el=>{const t=getComputedStyle(el),s=getComputedStyle(el.querySelector("summary"));return [t.backgroundColor,t.color,t.borderColor,t.borderRadius,t.marginTop,t.marginBottom,t.fontSize,t.lineHeight,s.backgroundColor,s.color,s.fontFamily,s.fontSize,s.fontWeight,s.lineHeight,s.padding,s.borderRadius,s.minHeight,getComputedStyle(el.querySelector("summary"),"::before").content];};
   const gold=await referenceTip.evaluate(styles);
   for(let k=0;k<expected.length;k++){
    const item=tips.nth(k),summary=item.locator(":scope > summary");
    if((w2||w3||w4||w5||w6)&&expected[k].includes("\\(")){
     const count=(expected[k].match(/\\\(/g)||[]).length;
     try{
      await page.waitForFunction(({k,count})=>document.querySelectorAll("article .tabbed-block")[3].querySelectorAll(":scope > details.tip > summary")[k].querySelectorAll("mjx-container").length===count,{k,count});
     }catch(error){
      console.error("W2_MATH_HEADING_DIAGNOSTIC "+JSON.stringify({rel,width,scheme,k,count,html:await summary.innerHTML()}));
      throw error;
     }
    }else assert.equal((await summary.innerText()).trim(),expected[k],rel+" exact recovery title");
    assert.equal(await item.evaluate(x=>x.open),false,rel+" accordion initially closed");
    assert.deepEqual(await item.evaluate(styles),gold,rel+" B01 tab4 Golden computed parity");
    assert.deepEqual(await item.locator(":scope > p > strong:first-child").allTextContents(),["Dấu hiệu:","Vì sao sai:","Cách sửa:"],rel+" original recovery paragraphs");
    assert(!(await item.locator(":scope > p").first().isVisible()),rel+" closed body must be hidden");
    await summary.click();
    assert(await item.evaluate(x=>x.open),rel+" disclosure opens");
    assert(await item.locator(":scope > p").first().isVisible(),rel+" expanded body visible");
    await summary.click();
    assert(!(await item.evaluate(x=>x.open)),rel+" disclosure closes");
   }
   console.log("PASS SGK_REL_006_TAB4 "+rel+" @"+width+" "+scheme+" "+expected.length+" closed/open/close, exact B01 computed CSS");
   console.log("PASS G10_G11_GOLDEN_COMPUTED_PARITY "+rel+" @"+width+" "+scheme+" "+Object.keys(c).filter(k=>c[k].length).join(","));
  }
 }finally{await reference.close();await ref14.close();await refB1.close();}
}

async function execute(){
 assert(lessons.length>0&&lessons.length<=120,"No canonical SGK page paths or too many scoped targets");
 assert.equal(new Set(lessons).size,lessons.length,"Duplicate lesson target");
 for(const rel of lessons)assert((re.test(rel)||chapter.test(rel))&&fs.existsSync(path.join(root,rel)),"Invalid canonical SGK page "+rel);
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 let checks=0;
 try{
  for(const rel of lessons){
   const source=fs.readFileSync(path.join(root,rel),"utf8");
   const isLesson=re.test(rel);
   const expectedTry=[...source.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(x=>x[1]);
   const expectedHelp=[...source.matchAll(/data-thpt-help-id="([^"]+)"/g)].map(x=>x[1]);
   if(isLesson){
   assert.equal(new Set(expectedTry).size,expectedTry.length,rel+" duplicate First Try IDs");
   assert.equal(new Set(expectedHelp).size,expectedHelp.length,rel+" duplicate D6 HELP IDs");
   assert(!/data-(?:thpt-readiness|mastery-credit|mastery-write)/i.test(source),
    rel+" Knowledge must never mount official Readiness/Mastery");
   assert.deepEqual([...source.matchAll(/^=== "([^"]+)"$/gm)].map(x=>x[1]),labels,
    rel+" must retain four owner-approved Golden tabs");
   }
   const route="/"+rel.slice(5,-3)+"/";
   for(const width of widths){
    const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
    page.setDefaultTimeout(20000);
    try{
     const response=await page.goto(base+route,{waitUntil:"domcontentloaded",timeout:60000});
     assert(response?.ok(),rel+" "+width+" route not rendered");
     if(isLesson){
     const tabs=page.locator(".md-content .tabbed-set").first();
     await tabs.waitFor({state:"visible"});
     const found=(await tabs.locator(".tabbed-labels > label").allInnerTexts()).map(s=>s.trim().replace(/\s+/g," "));
     assert.deepEqual(found,labels,rel+" "+width+" tab text and order");
     const groups=tabs.locator(".tabbed-content > .tabbed-block");
     assert.equal(await groups.count(),4,rel+" "+width+" exactly four tab panels");
     const renderedTry=await page.locator("[data-thpt-first-try-id]").evaluateAll(n=>n.map(x=>x.getAttribute("data-thpt-first-try-id")));
     const renderedHelp=await page.locator("[data-thpt-help-id]").evaluateAll(n=>n.map(x=>x.getAttribute("data-thpt-help-id")));
     assert.deepEqual(renderedTry,expectedTry,rel+" "+width+" source-to-DOM First Try Q15");
     assert.deepEqual(renderedHelp,expectedHelp,rel+" "+width+" source-to-DOM HELP Q15");
     assert.equal(await page.locator(".md-content details.question[open]").count(),0,
      rel+" "+width+" answers must be closed until voluntary Đối chiếu");
     assert.equal(await page.locator("[data-thpt-readiness],[data-mastery-credit],[data-mastery-write]").count(),0,
      rel+" "+width+" cannot write Q16/Mastery in Knowledge");
     for(let i=0;i<4;i++){
      await tabs.locator(".tabbed-labels > label").nth(i).click();
      assert(await groups.nth(i).isVisible(),rel+" "+width+" learner tab "+i+" not visible");
      if(/^docs\/thpt-preview\/sgk\/lop-11\/(?:chuong-i\/bai-[234]|chuong-ii\/bai-[567]|chuong-iii\/bai-[89]|chuong-iv\/bai-1[0-4]|chuong-v\/bai-1[5-7]|chuong-vi\/bai-(?:1[89]|2[01])|chuong-vii\/bai-2[2-7])\.md$/.test(rel)){
       const panel=groups.nth(i);
       for(const disclosure of await panel.locator("details.question").all()){
        const summary=disclosure.locator("summary").first();
        assert((await summary.innerText()).includes("Đối chiếu"),rel+" "+width+" comparison label");
        assert(!(await disclosure.evaluate(el=>el.open)),rel+" "+width+" comparison prematurely open");
        await summary.click();
        assert(await disclosure.evaluate(el=>el.open),rel+" "+width+" comparison failed to open");
        await summary.click();
        assert(!(await disclosure.evaluate(el=>el.open)),rel+" "+width+" comparison failed to close");
       }
      }
      const figs=groups.nth(i).locator("figure img");
      for(const fig of await figs.all()){
       assert((await fig.getAttribute("alt"))?.trim(),rel+" "+width+" figure alt missing");
       // A real lazy image below the fold never starts loading until in view.
       // Scrolling reproduces the learner's behavior; bounded load/decode
       // fails closed on broken assets instead of hanging a one-lesson runner.
       await fig.scrollIntoViewIfNeeded({timeout:20000});
       await fig.evaluate(async image=>{
        const deadline=(phase)=>new Promise((_,rej)=>setTimeout(
         ()=>rej(new Error("scoped SVG/image "+phase+" timed out after 15s")),15000));
        if(!image.complete){
         await Promise.race([
          new Promise((res,rej)=>{
           image.addEventListener("load",res,{once:true});
           image.addEventListener("error",()=>rej(new Error("scoped SVG/image load failed")),{once:true});
           if(image.complete){
            if(image.naturalWidth>0)res();
            else rej(new Error("scoped SVG/image completed without pixels"));
           }
          }),
          deadline("load")
         ]);
        }
        if(image.decode)await Promise.race([image.decode(),deadline("decode")]);
       });
       assert(await fig.evaluate(x=>x.naturalWidth>0),rel+" "+width+" broken educational image");
      }
     }
     }else{
      const article=page.locator("article.md-content__inner");
      await article.waitFor({state:"visible"});
      assert(await article.locator("h1").count()>=1,rel+" "+width+" chapter title missing");
      if(rel.endsWith("/tu-kiem-tra-chuong.md")){
       const before=await article.innerText();
       for(const forbidden of ["Đáp án:", "Lời giải:", "Kết quả tự đánh giá — không phải điểm"]){
        assert(!before.includes(forbidden),rel+" "+width+" Q16 pre-Final Submit answer/feedback leak "+forbidden);
       }
       assert(await article.locator('[data-g10-chapter-selfcheck],[data-g11-chapter-selfcheck],[data-g12-chi-selfcheck],[data-g12-chapter-selfcheck]').count()>0,
        rel+" "+width+" protected chapter self-check mount missing");
      }
      for(const fig of await article.locator("figure img").all()){
       await fig.evaluate(async img=>{if(img.decode)await img.decode();});
       assert(await fig.evaluate(img=>img.naturalWidth>0),rel+" "+width+" figure failed to render");
      }
     }
     if(rel==="docs/thpt-preview/sgk/lop-11/chuong-i/bai-1.md" && source.includes('data-g11-b01-owner-g0g2="r01"')){
      // P2 screenshot regression: computed style, not merely a colored fill.
      const v=await page.evaluate(()=>{
       const root=document.querySelector("article.md-content__inner");
       const selectors={question:"details.question",tip:"details.tip",
        concept:".thpt-r4-concept-card",rule:".thpt-r4-rule-card",
        example:".thpt-g10-example-solution",heading:".tabbed-block > h3",
        tab:":scope > .tabbed-set > .tabbed-labels > label"};
       const out={found:true,rootClass:root.classList.contains("thpt-g10-knowledge-ap1")&&
        root.classList.contains("thpt-g10-chiv-golden")};
       for(const [name,selector] of Object.entries(selectors)){
        const el=root.querySelector(selector);
        if(!el){out.found=false;continue}
        const st=getComputedStyle(el);
        out[name]={bg:st.backgroundColor,pad:parseFloat(st.paddingLeft),
         left:parseFloat(st.borderLeftWidth),radius:parseFloat(st.borderTopLeftRadius),
         image:st.backgroundImage};
       }
       out.solutions=root.querySelectorAll(".thpt-g10-example-solution").length;
       out.legacySolutions=root.querySelectorAll(".thpt-g11-example-solution").length;
       out.generalHelp=root.querySelectorAll(".tabbed-block [data-thpt-help-id^='HELP-G11-B01-0']").length;
       out.footnotes=root.querySelectorAll(".thpt-r4-footnote").length;
       return out;
      });
      assert(v.found&&v.rootClass,rel+" "+width+" Golden shared root class not activated");
      for(const name of ["concept","rule"])
       assert(v[name].pad>=12&&v[name].left>=3&&v[name].radius>=5,
        rel+" "+width+" "+name+" semantic border/padding/radius missing");
      assert(v.question.bg===v.tip.bg&&v.question.radius>=7&&v.tip.radius>=7&&
       v.question.bg!=="rgb(236, 248, 228)"&&v.question.bg!=="rgba(0, 0, 0, 0)",
       rel+" "+width+" native green/turquoise disclosure colors leaked");
      assert(v.solutions===6&&v.legacySolutions===0&&v.example.left<=2&&
       v.example.pad>=12&&v.example.radius>=6&&v.example.bg!=="rgba(0, 0, 0, 0)",
       rel+" "+width+" example card differs from G10 approved neutral card");
      assert(v.heading.left>=3&&v.heading.image!=="none"&&
       v.tab.radius>=6&&v.tab.pad>=8,
       rel+" "+width+" Golden blue headings/tabs not rendered");
      assert(v.generalHelp===2&&v.footnotes===1,
       rel+" "+width+" General HELP or source duplication");
      console.log("PASS G11 B01 P2 Golden computed-style @"+width+
       "px: neutral disclosure, semantic padding, 6 G10 neutral examples, blue tabs");
     }
     const mathExpected=isLesson||/\\\(|\\\[|\$\$/.test(source);
     if(mathExpected)await page.waitForFunction(()=>document.querySelectorAll("mjx-container").length>0,null,{timeout:30000});
     const layout=await page.evaluate(()=>{
      const root=document.querySelector("article.md-content__inner");
      const style=getComputedStyle(root);
      const cards=[...root.querySelectorAll(".thpt-r4-knowledge-conclusion")];
      return {overflow:document.documentElement.scrollWidth-innerWidth,
       font:style.fontFamily,math:document.querySelectorAll("mjx-container").length,
       brokenText:root.innerText.includes("\ufffd"),
       unstyled:cards.filter(x=>{
        const y=getComputedStyle(x);
        return y.backgroundColor==="rgba(0, 0, 0, 0)"&&y.borderLeftWidth==="0px";
       }).length};
     });
     assert(layout.overflow<=20,rel+" "+width+" horizontal overflow "+layout.overflow+"px");
     assert(layout.font?.trim(),rel+" "+width+" font stack failed");
     assert(!layout.brokenText,rel+" "+width+" replacement glyph/encoding damage");
     if(mathExpected)assert(layout.math>0,rel+" "+width+" MathJax did not typeset");
     assert.equal(layout.unstyled,0,rel+" "+width+" Golden concept/rule cards lack style");
     await goldenW1Parity(page,browser,width,rel);
     checks++;
     console.log("PASS SCOPED Golden AP "+rel+" @"+width+"px: "+(isLesson?"4 tabs / ":"chapter hub / ")+
      layout.math+" rendered math, "+expectedTry.length+" First Try, "+expectedHelp.length+" D6, layout/font/SVG/Q16");
    }finally{await page.close();}
   }
  }
  assert.equal(checks,lessons.length*widths.length,"Every scoped lesson must pass all viewports");
  console.log("PASS scoped SGK browser "+lessons.length+" canonical lesson(s) x 390/820/1440; "+
   "presentation-only; NOT academic review, no global site changes or deploy");
 }finally{await browser.close();}
}
execute().catch(err=>{console.error(err.stack||err);process.exitCode=1;});
