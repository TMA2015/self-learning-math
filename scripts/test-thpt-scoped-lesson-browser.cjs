#!/usr/bin/env node
"use strict";
/* Browser-only AP1–AP5 smoke for the canonical SGK lesson(s) in this PR.
 * It does NOT judge S1 mathematics, give Academic/PED PASS, or run 79 pages.
 * Safety invariant: no answer reveal or Mastery before learner action.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const {chromium,webkit}=require("playwright");
const engine=process.env.SCOPED_BROWSER_ENGINE||"chromium";
// Owner 28/11: display-only release means source-locked formula/text checks,
// not a re-audit of unchanged interactions, images or palette. The exact
// push classifier is used by the existing production workflow as well.
const displayReasons=new Set(["OWNER_1132_G11_B19_DISPLAY","OWNER_1132_G11_B16_DISPLAY","OWNER_1132_G11_B07_DISPLAY","OWNER_1132_EXACT_DISPLAY_DELTA"]);
function exactPushDisplay(){
 if(process.env.GITHUB_EVENT_NAME!=="push"||!process.env.GITHUB_EVENT_PATH)return false;
 const event=JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH,"utf8"));
 if(!/^[a-f0-9]{40}$/.test(event.before||"")||!/^([a-f0-9]{40})$/.test(event.after||""))return false;
 const cp=require("node:child_process"),paths=cp.execFileSync("git",["diff","--no-renames","--name-only",event.before,event.after],{encoding:"utf8"}).trim().split("\n").filter(Boolean);
 const impact=require("./test-thpt-release-impact.cjs").classify(paths,{base:event.before});
 return impact.impact==="SCOPED_LESSON"&&displayReasons.has(impact.reason)&&impact.changed_lessons===process.env.SCOPED_LESSONS;
}
const displayOnly=(process.env.SCOPED_DISPLAY_ONLY==="true"&&displayReasons.has(process.env.RELEASE_DELTA_REASON))||exactPushDisplay();
assert(["chromium","webkit"].includes(engine),"Unknown scoped browser engine");
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
 const w7=/\/lop-11\/(?:chuong-viii\/bai-(?:2[89]|30)|chuong-ix\/bai-3[1-3])\.md$/.test(rel);
 const w8=/\/lop-12\/chuong-i\/bai-[1-5]\.md$/.test(rel);
 const w9=/\/lop-12\/chuong-ii\/bai-[6-8]\.md$/.test(rel);
 const w10=/\/lop-12\/chuong-iii\/bai-(?:9|10)\.md$/.test(rel);
 const w11=/\/lop-12\/chuong-iv\/bai-1[1-3]\.md$/.test(rel);
 const w12=/\/lop-12\/chuong-v\/bai-1[4-7]\.md$/.test(rel);
 const w13=/\/lop-12\/chuong-vi\/bai-1[89]\.md$/.test(rel);
 const w12b17=w12&&rel.endsWith('/bai-17.md');
 if(!w1&&!w2&&!w3&&!w4&&!w5&&!w6&&!w7&&!w8&&!w9&&!w10&&!w11&&!w12&&!w13)return;
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
   if((w2||w3||w4||w5||w6||w7||w8||w9||w10||w11||w12||w13)&&scheme==="slate"){
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
   if(w2||w3||w4||w5||w6||w7||w8||w9||w10||w11||w12||w13){
    assert.equal(expected.length,w13?6:w12?(w12b17?6:7):w11?7:w10?7:w9?(rel.endsWith("/bai-7.md")?7:8):w8?(rel.endsWith("/bai-5.md")?8:7):w7?({28:6,29:6,30:7,31:8,32:10,33:8})[Number(rel.match(/bai-(\d+)\.md$/)[1])]:rel.endsWith("/bai-5.md")?5:w6&&/bai-2[5-7]\.md$/.test(rel)?8:6);
    const raw=await page.evaluate(async()=>{
     const doc=new DOMParser().parseFromString(await (await fetch(location.href)).text(),"text/html");
     const panel=doc.querySelectorAll("article .tabbed-block")[3];
     return {titles:[...panel.querySelectorAll(":scope > details.tip > summary")].map(s=>s.textContent.trim()),links:[...panel.querySelectorAll(":scope > p")].filter(p=>p.querySelector("strong")?.textContent==="Học tiếp:").flatMap(p=>[...p.querySelectorAll("a")].map(a=>a.getAttribute("href")))};
    });
    assert.deepEqual(raw.titles,expected,rel+" source-to-static DOM recovery titles including math");
    assert.equal(raw.links.length,w8||w9||w10||w11||w12||w13?2:w7?0:rel.endsWith("/bai-5.md")?0:rel.endsWith("/bai-6.md")||rel.endsWith("/bai-7.md")?2:3,rel+" Học tiếp links preserved");
   }
   assert.equal(await panel.locator(":scope > h3").count(),0,rel+" exposed tab4 headings");
   assert.equal(await tips.count(),expected.length,rel+" one accordion per recovery");
   assert.equal(await panel.locator(":scope > p > strong").filter({hasText:/^(Dấu hiệu:|Sai ở đâu:|Vì sao sai:|Cách sửa:|Sai:|Sửa:|Vì sao và cách sửa:)$/}).count(),0,rel+" exposed recovery body");
   const styles=el=>{const t=getComputedStyle(el),s=getComputedStyle(el.querySelector("summary"));return [t.backgroundColor,t.color,t.borderColor,t.borderRadius,t.marginTop,t.marginBottom,t.fontSize,t.lineHeight,s.backgroundColor,s.color,s.fontFamily,s.fontSize,s.fontWeight,s.lineHeight,s.padding,s.borderRadius,s.minHeight,getComputedStyle(el.querySelector("summary"),"::before").content];};
   const gold=await referenceTip.evaluate(styles);
   for(let k=0;k<expected.length;k++){
    const item=tips.nth(k),summary=item.locator(":scope > summary");
    if((w2||w3||w4||w5||w6||w7||w8||w9||w10||w11||w12||w13)&&expected[k].includes("\\(")){
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
    assert.deepEqual(await item.locator(":scope > p > strong:first-child").allTextContents(),w13?["Sai:","Vì sao và cách sửa:"]:w12b17?["Sai:","Sửa:"]:[w7||w8||w9||w10||w11||w12||w13?"Sai ở đâu:":"Dấu hiệu:","Vì sao sai:","Cách sửa:"],rel+" original recovery paragraphs");
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

// A positive rendered-math count is insufficient: ensure every standalone
// source display formula survives Markdown, and no literal TeX escapes remain.
async function verifyG12DisplayMath(page,source,rel,width){
 if(!re.test(rel))return;
 const lines=source.split("\n"),expected=[];
 for(let i=0;i<lines.length;i++){
  if(lines[i].trim()!=="\\[")continue;
  let j=i+1;while(j<lines.length&&lines[j].trim()!=="\\]")j++;
  assert(j<lines.length,rel+" unbalanced standalone block");
  expected.push(lines.slice(i+1,j).join("\n").replace(/\s+/g," ").trim());i=j;
 }
 const result=await page.evaluate(async()=>{
  const doc=new DOMParser().parseFromString(await (await fetch(location.href)).text(),"text/html");
  const root=doc.querySelector("article.md-content__inner");
  const math=[...root.querySelectorAll(".arithmatex")].map(el=>el.textContent.trim());
  const blocks=math.filter(t=>t.startsWith("\\[")&&t.endsWith("\\]")).map(t=>t.slice(2,-2).replace(/\s+/g," ").trim());
  const walk=doc.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  const raw=[];while(walk.nextNode()){
   const n=walk.currentNode;
   if(n.parentElement.closest(".arithmatex,script,style,code,pre,textarea"))continue;
   if(/\\(?:int|frac|sqrt|vec|overrightarrow|begin|end|tfrac|dfrac|sum|widehat|overline|quad|sin|cos|lim|alpha|beta|pi|left|right)\b|\\[\[\]]/.test(n.nodeValue))raw.push(n.nodeValue.trim().slice(0,160));
  }
  return {blocks,raw};
 });
 // A lesson may use only inline or explicit HTML math wrappers.
 const available=[...result.blocks];
 for(const formula of expected){
  const i=available.indexOf(formula);assert(i>=0,rel+" lost source display formula: "+formula);available.splice(i,1);
 }
 assert.deepEqual(result.raw,[],rel+" raw LaTeX in static article");
 await page.waitForFunction(()=>[...document.querySelectorAll("article .arithmatex")].every(el=>el.querySelector("mjx-container")),{},{timeout:30000});
 const errors=await page.locator("article mjx-merror,article mjx-container[data-mjx-error]").count();
 assert.equal(errors,0,rel+" MathJax error");
 console.log("PASS SGK_REL_009_MATH "+rel+" @"+width+" "+expected.length+" standalone source formulas, "+result.blocks.length+" static display wrappers, zero raw TeX and MathJax errors");
}


async function execute(){
 const batch=require("./thpt-1132-g10-knowledge-delta.cjs");
 if(batch.matchesRoutes(lessons)){
  const browser=await (engine==="webkit"?webkit:chromium).launch(engine==="webkit"?{headless:true}:{headless:true,args:["--no-sandbox"]});
  try{await batch.browserQA(browser,base,engine,widths)}finally{await browser.close()}return;
 }
 const publicDelta=require("./thpt-1132-public-formative-delta.cjs");
 if(publicDelta.matchesRoutes(lessons)){
  const browser=await (engine==="webkit"?webkit:chromium).launch(engine==="webkit"?{headless:true}:{headless:true,args:["--no-sandbox"]});
  try{await publicDelta.browserQA(browser,base,engine,widths)}finally{await browser.close()}return;
 }
 assert(lessons.length>0&&lessons.length<=120,"No canonical SGK page paths or too many scoped targets");
 assert.equal(new Set(lessons).size,lessons.length,"Duplicate lesson target");
 for(const rel of lessons)assert((re.test(rel)||chapter.test(rel))&&fs.existsSync(path.join(root,rel)),"Invalid canonical SGK page "+rel);
 const browser=await (engine==="webkit"?webkit:chromium).launch(engine==="webkit"?{headless:true}:{headless:true,args:["--no-sandbox"]});
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
     // Avoid clicking a native summary while initial MathJax/fonts move it.
     // Observe the actual browser transition; never set open or dispatch a fake click.
     await page.waitForLoadState("load",{timeout:60000});
     await page.waitForFunction(()=>Boolean(window.MathJax?.startup?.promise),null,{timeout:30000});
     await page.evaluate(async()=>{await window.MathJax.startup.promise;await document.fonts.ready;});
     await page.waitForFunction(()=>[...document.querySelectorAll("article .arithmatex")].every(el=>el.querySelector("mjx-container")),null,{timeout:30000});
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
     const display1132={
      "docs/thpt-preview/sgk/chuong-vi/bai-18.md":{selector:"strong",match:/^Bước 1 — hình dung và đặt điều kiện\.$/,expected:"Bước 1 — hình dung và đặt điều kiện."},
      "docs/thpt-preview/sgk/chuong-vii/bai-21.md":{selector:"li",match:/So khoảng cách ngắn nhất h với R:/,expected:"Kiến thức gốc: So khoảng cách ngắn nhất h với R: h < R cho hai điểm chung, h = R cho một tiếp điểm, h > R thì không gặp đường tròn."},
      "docs/thpt-preview/sgk/chuong-vii/bai-22.md":{selector:"li",match:/Elip trục lớn Ox có/,expected:"Kiến thức gốc: Elip trục lớn Ox có c² = a² − b² và c < a; hypebol trục thực Ox có c² = a² + b² và c > a. Dấu trong dạng chính tắc phản ánh quỹ tích khác nhau."}
     }[rel];
     let display1132Hits=0;
     for(let i=0;i<(displayOnly&&!display1132?0:4);i++){
      await tabs.locator(".tabbed-labels > label").nth(i).click();
      assert(await groups.nth(i).isVisible(),rel+" "+width+" learner tab "+i+" not visible");
      if(display1132){
       const nodes=groups.nth(i).locator(display1132.selector).filter({hasText:display1132.match});
       const count=await nodes.count();
       if(count){
        assert.equal(count,1,rel+" duplicate repaired fragment");
        const node=nodes.first(),fold=node.locator("xpath=ancestor::details[1]");
        let opened=false;
        if(await fold.count()&&!(await fold.evaluate(x=>x.open))){
         await fold.locator("summary").first().click();
         opened=true;
        }
        assert(await node.isVisible(),rel+" repaired fragment not visible");
        const text=(await node.innerText()).replace(/\s+/g," ").trim();
        assert.equal(text,display1132.expected,rel+" exact repaired learner text");
        assert(!text.includes("**"),rel+" raw Markdown in repaired fragment");
        if(display1132.selector==="strong"){
         const para=node.locator("xpath=ancestor::p[1]");
         assert((await para.innerText()).includes("Đặt"),rel+" step text lost after bold");
        }
        if(opened){
         await fold.locator("summary").first().click();
         assert(!(await fold.evaluate(x=>x.open)),rel+" restore disclosure closed");
        }
        display1132Hits++;
        console.log("PASS #1132 exact rendered correction "+rel+" @"+width);
       }
      }
      if(/^docs\/thpt-preview\/sgk\/lop-11\/(?:chuong-i\/bai-[234]|chuong-ii\/bai-[567]|chuong-iii\/bai-[89]|chuong-iv\/bai-1[0-4]|chuong-v\/bai-1[5-7]|chuong-vi\/bai-(?:1[89]|2[01])|chuong-vii\/bai-2[2-7]|(?:chuong-viii\/bai-(?:2[89]|30)|chuong-ix\/bai-3[1-3]))\.md$/.test(rel)||/^docs\/thpt-preview\/sgk\/lop-12\/chuong-i\/bai-[1-5]\.md$/.test(rel)||/\/lop-12\/chuong-v\/bai-1[4-7]\.md$/.test(rel)||/\/lop-12\/chuong-vi\/bai-1[89]\.md$/.test(rel)){
       const panel=groups.nth(i);
       for(const disclosure of await panel.locator("details.question").all()){
        if(displayOnly)continue;
        const summary=disclosure.locator("summary").first();
        assert((await summary.innerText()).includes("Đối chiếu"),rel+" "+width+" comparison label");
        assert(!(await disclosure.evaluate(el=>el.open)),rel+" "+width+" comparison prematurely open");
        // A page with many lazy educational SVGs can reflow during a
        // desktop scroll to a summary. Load the preceding in-flow images
        // as a learner scrolling through the lesson would, before clicking.
        for(const image of await panel.locator("figure img").all()){
         if(!await image.isVisible())continue;
         const precedes=await image.evaluate((img,summary)=>Boolean(img.compareDocumentPosition(summary)&Node.DOCUMENT_POSITION_FOLLOWING),await summary.elementHandle());
         if(!precedes)continue;
         await image.scrollIntoViewIfNeeded();
         await image.evaluate(async img=>{
          await Promise.race([img.decode(),new Promise((_,reject)=>setTimeout(()=>reject(Error("preceding image decode timeout")),15000))]);
         });
         assert(await image.evaluate(img=>img.naturalWidth>0),rel+" broken image preceding comparison");
        }
        for(const target of [true,false]){
         await summary.evaluate(el=>el.scrollIntoView({block:"center",inline:"nearest",behavior:"instant"}));
         await page.waitForFunction(el=>{const r=el.getBoundingClientRect(),hit=document.elementFromPoint(r.left+24,r.top+18);return r.top>=0&&r.bottom<=innerHeight&&Boolean(hit&&el.contains(hit));},await summary.elementHandle(),{timeout:5000});
         // Native click, then wait for its observed result (including WebKit
         // asynchronous native details state). No retries, forced clicks,
         // JS property writes, or relaxed open/close requirement.
         // Capture trusted pointer/click and toggle evidence without changing
         // event propagation or native disclosure state.
         await page.evaluate(el=>{
          const events=[];window.__comparisonEvents=events;
          const note=e=>events.push({type:e.type,trusted:e.isTrusted,target:e.target.tagName,within:el.contains(e.target),prevented:e.defaultPrevented,x:e.clientX,y:e.clientY,open:el.parentElement.open,rect:el.getBoundingClientRect().toJSON()});
          for(const type of ["pointerdown","pointerup","click"])document.addEventListener(type,note,{capture:true,once:true});
          el.parentElement.addEventListener("toggle",note,{once:true});
         },await summary.elementHandle());
         await summary.click({position:{x:24,y:18}});
         try{
          await page.waitForFunction(({el,target})=>el.open===target,
           {el:await disclosure.elementHandle(),target},{timeout:5000});
         }catch(error){
          console.error("COMPARISON_STATE_FAILURE "+JSON.stringify({engine,rel,width,tab:i,target,state:await disclosure.evaluate(el=>({open:el.open,summary:el.querySelector("summary")?.textContent,rect:el.getBoundingClientRect().toJSON()})),events:await page.evaluate(()=>window.__comparisonEvents)}));
          throw error;
         }
        }
       }
      }
      const figs=groups.nth(i).locator("figure img");
      for(const fig of await figs.all()){
       if(displayOnly)continue;
       assert((await fig.getAttribute("alt"))?.trim(),rel+" "+width+" figure alt missing");
       // A real lazy image below the fold never starts loading until in view.
       // Scrolling reproduces the learner's behavior; bounded load/decode
       // fails closed on broken assets instead of hanging a one-lesson runner.
       // W8 B04 contains signed figures inside closed voluntary comparison.
       // Open only for inspection via native summary; restore closed state.
       let disclosure=null;
       if((/\/lop-12\/chuong-i\/bai-[1-5]\.md$/.test(rel)||/\/lop-12\/chuong-v\/bai-1[4-7]\.md$/.test(rel)||/\/lop-12\/chuong-vi\/bai-1[89]\.md$/.test(rel))&&await fig.evaluate(el=>Boolean(el.closest("details:not([open])")))){
        disclosure=fig.locator("xpath=ancestor::details[1]");
        assert.equal(await disclosure.evaluate(el=>el.open),false,rel+" figure disclosure initially closed");
        await disclosure.locator("summary").first().click();
        assert(await disclosure.evaluate(el=>el.open),rel+" figure disclosure open");
       }
       await fig.scrollIntoViewIfNeeded({timeout:20000});
       await fig.evaluate(async image=>{
        const deadline=(phase)=>new Promise((_,rej)=>setTimeout(
         ()=>rej(new Error("scoped SVG/image "+phase+" timed out after 15s")),15000));
        if(!image.complete){
         await Promise.race([
          new Promise((res,rej)=>{
           image.addEventListener("load",res,{once:true});
           image.addEventListener("error",()=>rej(new Error("scoped SVG/image load failed: "+(image.currentSrc||image.src))),{once:true});
           if(image.complete){
            if(image.naturalWidth>0)res();
            else rej(new Error("scoped SVG/image completed without pixels: "+(image.currentSrc||image.src)));
           }
          }),
          deadline("load")
         ]);
        }
        if(image.decode)await Promise.race([image.decode(),deadline("decode")]);
       });
       assert(await fig.evaluate(x=>x.naturalWidth>0),rel+" "+width+" broken educational image");
       if(disclosure){await disclosure.locator("summary").first().click();assert(!(await disclosure.evaluate(el=>el.open)),rel+" figure disclosure restored closed");}
      }
     }
     if(display1132)assert.equal(display1132Hits,1,rel+" exact repaired fragment must be seen in one tab");
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
     await verifyG12DisplayMath(page,source,rel,width);
     // #1132: compare exact visible standalone display nodes in each
     // affected tab, after navigation away and back, on both engines.
     const display1132Tabs={
      "docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md":[15,0,0,0],
      "docs/thpt-preview/sgk/lop-11/chuong-ii/bai-7.md":[3,0,0,0],
      "docs/thpt-preview/sgk/lop-11/chuong-v/bai-16.md":[1,0,0,0],
      "docs/thpt-preview/sgk/lop-11/chuong-vi/bai-19.md":[3,0,0,0],
      "docs/thpt-preview/sgk/lop-11/chuong-vii/bai-22.md":[1,0,0,0],
      "docs/thpt-preview/sgk/lop-11/chuong-vii/bai-24.md":[3,0,0,0],
      "docs/thpt-preview/sgk/lop-11/chuong-vii/bai-25.md":[1,1,0,0],
      "docs/thpt-preview/sgk/lop-11/chuong-vii/bai-26.md":[5,0,0,0],
      "docs/thpt-preview/sgk/lop-11/chuong-vii/bai-27.md":[7,1,0,0]
     }[rel];
     if(display1132Tabs){
      const tabs=page.locator("article .tabbed-set").first();
      const panels=tabs.locator(".tabbed-content > .tabbed-block");
      assert.equal(await panels.count(),4,rel+" #1132 four panels");
      for(let t=0;t<4;t++){
       const display=panels.nth(t).locator("div.arithmatex");
       assert.equal(await display.count(),display1132Tabs[t],rel+" #1132 display count tab "+t);
       if(!display1132Tabs[t])continue;
       for(const k of [t,(t+1)%4,t]){
        await tabs.locator(".tabbed-labels > label").nth(k).click();
        if(k!==t)continue;
        // B02 has 15 source-verified display blocks, including unchanged
        // math in closed answers. The only changed expression is its fourth
        // source/static display (aligned sine derivation). Do not open other
        // answers just to assert visibility of intentionally hidden math.
        const affected=rel==="docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md"?[display.nth(3)]:await display.all();
        for(const node of affected){
         assert.equal(await node.evaluate(el=>Boolean(el.closest("details:not([open])"))),false,rel+" affected formula unexpectedly in closed disclosure");
         if(rel==="docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md"){
          assert.equal(await node.locator("mjx-container mjx-mtable").count(),1,rel+" aligned derivation must render as multi-row math");
          assert.equal(await node.locator("mjx-container mjx-mtable mjx-mtr").count(),3,rel+" expected three aligned rows");
         }
         await node.waitFor({state:"visible",timeout:30000});
         await node.locator("mjx-container").waitFor({state:"visible",timeout:30000});
         assert.equal(await node.locator("mjx-container").count(),1,rel+" #1132 duplicate/nested MathJax");
         assert.equal(await node.locator("mjx-merror").count(),0,rel+" #1132 MathJax error");
         const layout=await node.evaluate(el=>({width:el.getBoundingClientRect().width,overflow:document.documentElement.scrollWidth-innerWidth,font:getComputedStyle(el).fontSize}));
         assert(layout.width>0&&layout.overflow<=20&&parseFloat(layout.font)>0,rel+" affected formula layout "+JSON.stringify(layout));
        }
       }
      }
      console.log("PASS #1132 visible display tab-switch "+engine+" "+rel+" @"+width+" "+(rel==="docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md"?1:display1132Tabs.reduce((a,b)=>a+b,0))+" affected formulas");
     }
     if(!displayOnly)await goldenW1Parity(page,browser,width,rel);
     checks++;
     console.log((displayOnly?"PASS SCOPED DISPLAY ":"PASS SCOPED Golden AP ")+rel+" @"+width+"px: "+(isLesson?"4 tabs / ":"chapter hub / ")+
      layout.math+" rendered math, "+expectedTry.length+" First Try, "+expectedHelp.length+" D6, "+(displayOnly?"layout/font/Q16; unchanged interactions and SVG not retested":"layout/font/SVG/Q16"));
    }finally{await page.close();}
   }
  }
  assert.equal(checks,lessons.length*widths.length,"Every scoped lesson must pass all viewports");
  console.log("PASS scoped SGK browser ["+engine+"] "+lessons.length+" canonical lesson(s) x 390/820/1440; "+
   "presentation-only; NOT academic review, no global site changes or deploy");
 }finally{await browser.close();}
}
execute().catch(err=>{console.error(err.stack||err);process.exitCode=1;});
