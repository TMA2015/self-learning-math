#!/usr/bin/env node
"use strict";
/* Q18 OWNER_SELF_VERIFIED S1 editorial, five published G10 Chapter IV lessons:
 * exact source SHAs, owner Golden presentation, canonical First Try/D6,
 * cross-tab TOC, keyboard disclosures, MathJax/SVG and no answer leakage.
 * Exact S1 section and First Try placement test; older Draft #825 stays separate. */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const crypto=require("node:crypto");
const {chromium}=require("playwright");
const root=path.resolve(__dirname,"..");
const {candidateG10KnowledgeBlob}=require("./thpt-q18-g10-source-receipt.cjs");
const base=process.env.SLM_CHIV_URL||"http://127.0.0.1:8765";
const goldenCss="44442773ac31eb1a46f0cab699a7d2c7974a5f37";
const sources={
 7:"e1487ce01e81738228ae69d4d87cbdc56b5e0c69",
 8:"22e53396caf7753e813c492615a491e1f24cc9fd",
 9:"3d79a17e9ba39cd0f46077823800f5f38c73e313",
 10:"b923f5f491c007c54392d3f7d7be83193f3f93fc",
 11:"2a1381689f66d1f8c752bdbf1c29a9ef49a4e073"
};
const blob=data=>{const b=Buffer.isBuffer(data)?data:Buffer.from(data);return crypto.createHash("sha1").update(Buffer.from("blob "+b.length+"\0")).update(b).digest("hex");};
const idList=(s,key)=>[...s.matchAll(new RegExp(key+'="([^"]+)"',"g"))].map(m=>m[1]).sort();
const tabsExpected=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
(async()=>{
 const cssFile=fs.readFileSync(root+"/docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css");
 const previous=fs.readFileSync(root+
  "/prototypes/thpt/ux795/G10_CHI_B01_DEFINITION_COLOR_UI_DELTA_A_20261116.md","utf8");
 const newest=fs.readFileSync(root+
  "/prototypes/thpt/ux795/G10_CHI_B02_S1_Q18_KNOWLEDGE_ENRICHMENT_R01_20261116.md","utf8");
 const old=previous.match(/^\*\*BASELINE_CSS_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
 const b01=previous.match(/^\*\*CANDIDATE_CSS_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
 const b02Baseline=newest.match(/^\*\*CSS_PATH:\*\*.*baseline \x60([a-f0-9]{40})\x60/m)?.[1];
 const b02Candidate=newest.match(/^\*\*CSS_PATH:\*\*.*candidate \x60([a-f0-9]{40})\x60/m)?.[1];
 assert.equal(old,goldenCss,"Chapter IV historic Golden stylesheet SHA unchanged");
 assert.equal(b01,b02Baseline,"B02 scoped CSS must extend accepted B01 teal baseline");
 const b03receipt=fs.readFileSync(root+
  "/prototypes/thpt/ux795/G10_CHII_B03_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md","utf8");
 const b03base=b03receipt.match(/^\*\*BASELINE_CSS_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
 const b03candidate=b03receipt.match(/^\*\*CANDIDATE_CSS_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
 assert.equal(b03base,b02Candidate,"B03 extends exact B02 Golden CSS candidate");
 const b04receipt=fs.readFileSync(root+
   "/prototypes/thpt/ux795/G10_CHII_B04_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md","utf8");
  const b04field=k=>b04receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(b04field("BASELINE_CSS_GIT_BLOB"),b03candidate,"B04 CSS must extend frozen B03 approved CSS");
  const b05receipt=fs.readFileSync(root+
   "/prototypes/thpt/ux795/G10_CHIII_B05_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md","utf8");
  const b05field=k=>b05receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(b05field("BASELINE_CSS_GIT_BLOB"),b04field("CANDIDATE_CSS_GIT_BLOB"),
   "B05 CSS extends B04 accepted immutable candidate");
  const b06receipt=fs.readFileSync(root+
   "/prototypes/thpt/ux795/G10_CHIII_B06_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md","utf8");
  const b06field=k=>b06receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(b06field("BASELINE_CSS_GIT_BLOB"),b05field("CANDIDATE_CSS_GIT_BLOB"),
   "B06 CSS extends B05 P2 accepted source");
  const r05=fs.readFileSync(root+
   "/prototypes/thpt/ux795/G10_CHIV_B07_SEMANTIC_CONCEPT_RECAP_DELTA_R05_20261117.md","utf8");
  const r05field=k=>r05.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(r05field("BASELINE_CSS_GIT_BLOB"),b06field("CANDIDATE_CSS_GIT_BLOB"),
    "B07 R05 must extend accepted CSS without changing historical source");
  const semantic=fs.readFileSync(root+
    "/prototypes/thpt/ux795/G10_CHIV_B08_SEMANTIC_3PLUS1_DELTA_R04_20261117.md","utf8");
  const semField=k=>semantic.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(semField("BASELINE_R05_B07_CSS_BLOB"),r05field("R05_CSS_GIT_BLOB"),
    "B08 must preserve exact P2-accepted B07 CSS");
  const b09=fs.readFileSync(root+
    "/prototypes/thpt/ux795/G10_CHIV_B09_S1_SEMANTIC_DECOMPOSITION_R03_20261117.md","utf8");
  const b09f=k=>b09.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(b09f("CSS_BASELINE_BLOB"),semField("R04_CSS_BLOB"),
    "B09 3+1 must extend immutable owner-accepted B08 CSS");
  const cssWithB10=cssFile.toString("utf8");
  const atB10=cssWithB10.indexOf("/* G10 Chapter IV B10 R01");
  assert(atB10>0&&cssWithB10.indexOf("/* G10 Chapter IV B10 R01",atB10+1)<0,
    "B10 semantic CSS must add exactly one scoped tail");
  assert.equal(blob(cssWithB10.slice(0,atB10)),b09f("R03_CSS_BLOB"),
    "B09 owner P2 approved CSS must be exact byte-immutable prefix");
  const b10Receipt=fs.readFileSync(root+
   "/prototypes/thpt/ux795/G10_CHIV_B10_S1_PED_SINGLE_CANONICAL_Q18_R01_20261118.md","utf8");
  const b10f=k=>b10Receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  const b11Marker="\n/* G10 Chapter IV B11 R01",cutB11=cssWithB10.indexOf(b11Marker);
  assert(cutB11>0&&cssWithB10.indexOf(b11Marker,cutB11+1)===-1,
   "B11 CSS must append a single independent scoped tail");
  assert.equal(blob(cssWithB10.slice(0,cutB11)),b10f("CSS_R01_SCOPED_B10_BLOB"),
   "B10 P2-approved CSS must stay byte-frozen before B11 scope");
  const b11Receipt=fs.readFileSync(root+
   "/prototypes/thpt/ux795/G10_CHIV_B11_S1_PED_CANONICAL_Q18_R01_20261118.md","utf8");
  const b11f=k=>b11Receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  const b11ui=fs.readFileSync(root+
   "/prototypes/thpt/ux795/G10_CHIV_B11_P2_TAB4_GOLDEN_DELTA_A_UI_R02_20261118.md","utf8");
  const b11u=k=>b11ui.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(b11u("R01_PUBLISHED_B11_SOURCE_BLOB"),b11f("B11_CANDIDATE_SOURCE_BLOB"),
   "B11 P2 UI-only source must descend from Academic/PED R01");
  assert.equal(b11u("R01_PUBLISHED_B11_CANONICAL_BLOB"),b11f("ONE_CANONICAL_B11_BLOB"),
   "B11 P2 UI-only canonical must descend from Academic/PED R01");
  assert.equal(b11u("R02_CSS_BLOB"),b11f("CSS_B11_SCOPED_APPEND_BLOB"),
   "B11 P2 Tab4 reflow cannot modify accepted CSS");
  assert.equal(b11f("B10_P2_APPROVED_CSS_BLOB"),b10f("CSS_R01_SCOPED_B10_BLOB"),
   "B11 css source must descend from B10 owner P2");
  const goldCss=fs.readFileSync(root+
    "/prototypes/thpt/ux795/G10_B11_B12_OWNER_P2_GOLDEN_COMPONENT_PARITY_DELTA_A_R02_20261118.md","utf8");
   const gCss=k=>goldCss.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(gCss("GOLDEN_CSS_PREVIOUS_BLOB"),b11f("CSS_B11_SCOPED_APPEND_BLOB"),
    "B10/B11 owner-accepted CSS baseline still immutable");
   const currentCss=cssFile.toString("utf8"),b13Marker="/* G10 ChV B13 · exact B10/B12 Golden palette";
   const b13At=currentCss.indexOf(b13Marker);
   assert(b13At>0&&currentCss.indexOf(b13Marker,b13At+1)<0,
    "B13 Golden CSS must have one isolated append");
   assert.equal(blob(Buffer.from(currentCss.slice(0,b13At-1))),gCss("GOLDEN_CSS_CURRENT_BLOB"),
    "Owner B12 Golden CSS remains byte-exact prefix");
   const receipt13=fs.readFileSync(root+
    "/prototypes/thpt/ux795/G10_CHV_B13_S1_Q18_GOLDEN_ENRICHMENT_DELTA_R01_20261119.md","utf8");
   const f13=k=>receipt13.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   const receipt14=fs.readFileSync(root+
    "/prototypes/thpt/ux795/G10_CHV_B14_Q18_GOLDEN_ENRICHMENT_DELTA_R01_20261119.md","utf8");
   const f14=k=>receipt14.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   const b14Marker="/* G10 ChV B14 · scoped X-C RELEASE Golden";
   const atB14=currentCss.indexOf(b14Marker);
   assert(atB14>0&&currentCss.indexOf(b14Marker,atB14+1)<0,
    "B14 scoped Golden CSS must be appended only once");
   assert.equal(blob(Buffer.from(currentCss.slice(0,atB14-1))),f13("CANDIDATE_GOLDEN_CSS_BLOB"),
    "Owner-P2 B13 CSS must remain byte-identical prefix");
   assert.equal(f14("G10_B01_B13_FROZEN_CSS_BLOB"),f13("CANDIDATE_GOLDEN_CSS_BLOB"),
    "B14 prior stylesheet must be B13 signed release");
   assert.equal(blob(require("./test-g10-b15-golden-css-source.cjs").publishedB14Ancestor(cssFile)),f14("CANDIDATE_GOLDEN_CSS_BLOB"),
    "B14 scoped Golden CSS must equal current signed X-C source delta");
  assert(cssWithB10.slice(cutB11).includes("THPT-G10-CHIV-TRY21")&&
   !cssWithB10.slice(cutB11).includes("THPT-G10-CHIV-TRY16"),
   "B11 styles cannot recolor B10");
  assert(cssWithB10.slice(atB10).includes("THPT-G10-CHIV-TRY16")&&
   !cssWithB10.slice(atB10).includes("THPT-G10-CHIV-TRY11"),
    "B10 scoped CSS cannot recolor owner P2 B09");
  const cssTextR05=cssFile.toString("utf8"),markerR05="/* G10 ChIV B07 R05";
  const b09Marker="/* G10 Chapter IV B09 R03",b09Pos=cssTextR05.indexOf(b09Marker);
  assert(b09Pos>0&&cssTextR05.indexOf(b09Marker,b09Pos+1)===-1,
    "B09 must have one and only one scoped 3+1 palette appendix");
  assert.equal(blob(cssTextR05.slice(0,b09Pos-1)),semField("R04_CSS_BLOB"),
    "All CSS of owner-P2 B01–B08 immutable, B09 append only");
  assert(cssTextR05.includes(':has([data-thpt-first-try-id="THPT-G10-CHIV-TRY11"])'),
    "B09 styles cannot target unrelated lesson or grade");
  const b08Marker="/* G10 ChIV B08 R04",b08Start=cssTextR05.indexOf(b08Marker);
  assert(b08Start>0&&cssTextR05.indexOf(b08Marker,b08Start+1)===-1,
    "B08 only one scoped 3+1 CSS appendix");
  assert.equal(blob(cssTextR05.slice(0,b08Start-1)),r05field("R05_CSS_GIT_BLOB"),
    "B01–B07 CSS accepted prefix must remain byte-for-byte exact");
  assert(cssTextR05.includes(':has([data-thpt-first-try-id="THPT-G10-CHIV-TRY06"])'),
    "B08 CSS must target B08 only");
  const cutR05=cssTextR05.indexOf(markerR05);
  assert(cutR05>0&&cssTextR05.indexOf(markerR05,cutR05+1)===-1,"B07 CSS marker one occurrence");
  assert.equal(blob(cssTextR05.slice(0,cutR05-1)),b06field("CANDIDATE_CSS_GIT_BLOB"),
    "B01–B06 CSS is untouched byte-for-byte before scoped append");
  assert(cssTextR05.includes(':has([data-thpt-first-try-id="THPT-G10-CHIV-TRY01"])'),
    "B07 concept color specific to B07 only");
  assert(cssFile.toString("utf8").includes('data-thpt-first-try-id="THPT-G10-CHIII-TRY06"'),
   "B06 visual delta constrained to B06 first-try canonical selector");
  assert(cssFile.toString("utf8").includes('data-thpt-first-try-id="THPT-G10-CHIII-TRY01"'),
   "Only B05 Knowledge canonical route may gain new teal color");
  assert(cssFile.toString("utf8").includes(':has([data-thpt-first-try-id="THPT-G10-CHII-TRY06"])'),
   "Only B04 canonical first-try selector may extend existing B01–B03 concepts");
 const styles=cssFile.toString("utf8");
 assert(styles.includes(':has([data-thpt-first-try-id="THPT-G10-CHI-TRY01"])') &&
  styles.includes(':has([data-thpt-first-try-id="THPT-G10-CHI-TRY06"])') &&
  styles.includes(':has([data-thpt-first-try-id="THPT-G10-CHII-TRY01"])'),
  "B01/B02/B03 concept colors remain scoped; B07 formal-only now teal");
 for(const [lesson,sha] of Object.entries(sources)){
  const current=blob(fs.readFileSync(root+"/docs/thpt-preview/sgk/chuong-iv/bai-"+lesson+".md"));
  // Historical Q18 predecessor chain is separately validated by the
  // immediately preceding source-first editorial test in this workflow.
  const expected=candidateG10KnowledgeBlob(Number(lesson));
  assert.equal(current,expected,"B"+lesson+" browser checks latest signed Q18 source");
  if(lesson==="10"){
   const delta=fs.readFileSync(root+
    "/prototypes/thpt/ux795/G10_CHIV_B10_P2_MATHJAX_DELTA_A_UI_R02_20261118.md","utf8");
   const df=k=>delta.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(df("BASELINE_R01_SOURCE_BLOB"),sha,"B10 original R01 SHA historically frozen");
  }else if(lesson==="11"){
   assert.equal(b11f("R01_PUBLISHED_B11_SOURCE_BLOB"),sha,"B11 original R01 SHA historically frozen");
  }
 }
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 let cases=0;
 try{
  for(const width of [390,820,1440]){
   let b10GoldenStyles=null;
   const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
   page.setDefaultTimeout(20000);
   try{
    for(let lesson=7;lesson<=11;lesson++){
     const where="G10-CHIV-B"+lesson+"@"+width;
     const res=await page.goto(base+"/thpt-preview/sgk/chuong-iv/bai-"+lesson+"/",
      {waitUntil:"domcontentloaded",timeout:60000});
     assert(res?.ok(),where+" published Knowledge page is reachable");
     await page.waitForFunction(()=>document.querySelector(".md-content__inner")?.dataset.g10ChivGolden==="true");
     const article=page.locator(".md-content__inner");
     const tabbed=article.locator(":scope > .tabbed-set");
     const labels=tabbed.locator(":scope > .tabbed-labels > label");
     const blocks=tabbed.locator(":scope > .tabbed-content > .tabbed-block");
     assert.deepEqual((await labels.allInnerTexts()).map(v=>v.trim()),tabsExpected,where+" exact owner four tab labels");
     assert.equal(await blocks.count(),4,where+" four Golden content panes");

     const officialSections={
       7:["2.1. Khái niệm vectơ","2.2. Hai vectơ cùng phương, cùng hướng, bằng nhau"],
       8:["2.1. Tổng của hai vectơ","2.2. Hiệu của hai vectơ"],
       9:["2.1. Tích của một vectơ với một số","2.2. Các tính chất của phép nhân vectơ với một số"],
       10:["2.1. Tọa độ của vectơ","2.2. Biểu thức tọa độ của các phép toán vectơ"],
       11:["2.1. Góc giữa hai vectơ","2.2. Tích vô hướng của hai vectơ",
         "2.3. Biểu thức tọa độ và tính chất của tích vô hướng"]
     };
     assert.deepEqual((await blocks.nth(1).locator(":scope > h3").allInnerTexts()).map(x=>x.trim()),
       officialSections[lesson],where+" actual SGK S1 headings 2.1.. without duplicate heading");
     assert.deepEqual((await blocks.nth(0).locator(":scope > h3").allInnerTexts()).map(x=>x.trim()),
       lesson===8?[
         "1.1. Vì sao không thể cộng hai vectơ như cộng hai độ dài?",
         "1.2. Hai vectơ cùng điểm đặt: vì sao đường chéo biểu diễn hợp lực?",
         "1.3. Khi muốn lấy hiệu hai vectơ thì đổi chiều mũi tên nào?",
         "1.4. Vì sao tại trung điểm, hai vectơ hướng ra hai đầu triệt tiêu nhau?",
         "1.5. Vì sao tại trọng tâm, ba vectơ hướng tới các đỉnh cân bằng?"
        ]:lesson===7?[
         "1.1. Vectơ là gì và vì sao phải xác định điểm đầu–cuối?",
         "1.2. Độ dài vectơ khác hướng di chuyển thế nào?",
         "1.3. Vì sao cùng phương vẫn có thể ngược hướng?",
         "1.4. Hai mũi tên ở hai vị trí khác nhau khi nào bằng nhau?",
         "1.5. Vì sao quay lại điểm xuất phát tạo ra vectơ-không?"
        ]:lesson===9?["1.1. Cùng tìm hiểu","1.2. Ví dụ trực quan",
          "1.3. Vì sao phải phân tích một vectơ?",
          "1.4. Thuật ngữ, kiến thức và kỹ năng"]:lesson===11?
         ["1.1. Vì sao cần tích vô hướng?","1.2. Khám phá và vận dụng qua hình",
          "1.3. Vận dụng — hợp lực và lực giữ cân bằng",
          "1.4. Thuật ngữ, kiến thức và kỹ năng"]:
         ["1.1. Cùng tìm hiểu","1.2. Ví dụ trực quan","1.3. Thuật ngữ, kiến thức và kỹ năng"],
       where+" complete concept-first discovery stages");
     assert.equal(await blocks.nth(0).locator("[data-thpt-first-try-id]").count(),
       ({7:5,8:5,9:5,10:6,11:5})[lesson],where+" original First Tries moved to Discovery");
     assert.equal(await blocks.nth(1).locator("[data-thpt-first-try-id], details.question").count(),0,
       where+" official SGK has no First Try/question insertion");
     if(lesson===11){
       const s1=(await blocks.nth(1).innerText());
       assert(s1.includes("vuông góc với mọi vectơ"),where+" zero perpendicular SGK convention");
       assert(s1.includes("tùy ý"),where+" zero vector angle SGK convention");
       assert(s1.includes("Mẫu số phải dương"),where+" cos denominator guard");
     }

     assert.deepEqual((await blocks.locator(":scope > h2.thpt-g10-section-heading").allInnerTexts()).map(v=>v.trim()),
      ["1. Khám phá kiến thức","2. Kiến thức SGK","3. Ví dụ","4. Lỗi thường gặp và cách tự khắc phục"],
      where+" editorial section headings preserve 1–4 structure");
     assert((await blocks.nth(0).locator(":scope > h3").allInnerTexts()).every((v,i)=>v.trim().startsWith("1."+(i+1)+". ")),
      where+" discovery headings are visual-only numbered");
     const examples=await blocks.nth(2).locator(":scope > h3").allInnerTexts();
     assert.equal(examples.length,[7,8,9,10,11].includes(lesson)?4:3,where+" owner-scoped B07/B08 and B09 S1 have four worked examples");
     assert(examples.every((v,i)=>v.trim().startsWith("3."+(i+1)+". Ví dụ "+(i+1)+([7,8,10,11].includes(lesson)?" —":". "))),
      where+" numbered visual example headings");
     assert.equal(await blocks.nth(2).locator(".thpt-g10-example-solution").count(),
       [7,8,9,10,11].includes(lesson)?4:0,
       where+" every B07–B11 example uses approved B10 Golden neutral solution style");
     if(lesson===10||lesson===11){
       const panel=blocks.nth(2).locator(".thpt-g10-example-solution").first();
       const palette={};
       for(const scheme of ["default","slate"]){
        await page.evaluate(v=>document.body.setAttribute("data-md-color-scheme",v),scheme);
        palette[scheme]=await panel.evaluate(el=>{
         const css=getComputedStyle(el);
         return {background:css.backgroundColor,border:css.borderTopColor,
          borderWidth:css.borderTopWidth,borderRadius:css.borderRadius,padding:css.padding};
        });
       }
       await page.evaluate(()=>document.body.removeAttribute("data-md-color-scheme"));
       if(lesson===10)b10GoldenStyles=palette;
       if(lesson===11){
        assert(b10GoldenStyles,where+" B10 computed Golden reference missing");
        assert.deepEqual(palette,b10GoldenStyles,
         where+" B11 Golden background, border, radius and padding must equal B10 light/slate");
       }
      }
      if(lesson===11){
       const solved=blocks.nth(2).locator(".thpt-g10-example-solution");
       assert.equal(await solved.count(),4,where+" four B10 Golden source solution boxes");
       assert.equal(await blocks.nth(2).locator(".admonition.example").count(),0,
        where+" must not render default violet MkDocs Example admonitions");
       await solved.first().locator("mjx-container").first()
        .waitFor({state:"attached",timeout:15000});
       const texts=await solved.allInnerTexts();
       assert(texts.every(t=>t.trim().startsWith("Giải:")&&!t.includes("Đề:")),
        where+" only math solution goes inside the neutral panel");
       assert.equal(await blocks.nth(2).locator(":scope > p").filter({hasText:/^Phân tích:/}).count(),4,
        where+" four plain Phân tích paragraphs outside box");
       assert.equal(await blocks.nth(2).locator(":scope > p").filter({hasText:/^Đề:/}).count(),4,
        where+" four source-authored problems outside box");
      }
      assert.equal(await article.locator(".thpt-r4-lead").count(),0,where+" no redundant introduction");
     assert.equal(await article.locator(".thpt-r4-footnote").count(),1,where+" only existing source footnote retained");
     assert.equal(await blocks.nth(3).locator(".thpt-r4-footnote").count(),1,where+" source note only on last tab");
     const source=fs.readFileSync(root+"/docs/thpt-preview/sgk/chuong-iv/bai-"+lesson+".md","utf8");
     for(const key of ["data-thpt-first-try-id","data-thpt-help-id","data-outcome-id"]){
      const expected=idList(source,key);
      const actual=(await article.locator("["+key+"]").evaluateAll((nodes,k)=>nodes.map(n=>n.getAttribute(k)),key)).sort();
      assert.deepEqual(actual,expected,where+" "+key+" canonical unchanged");
     }
     const state=await page.evaluate(()=>{
      const root=document.querySelector(".md-content__inner");
      const px=el=>parseFloat(getComputedStyle(el).fontSize);
      const label=[...root.querySelectorAll(".tabbed-set > .tabbed-labels > label")];
      const body=px(root.querySelector(".tabbed-block p"));
      const disclosure=[...root.querySelectorAll("details.question")];
      const tips=[...root.querySelectorAll("details.tip")];
      const cells=[...root.querySelectorAll(".tabbed-block table :is(th,td)")];
      return {
       buttons:label.map(el=>({h:el.getBoundingClientRect().height,font:px(el)})),
       body,cells:cells.map(px),summary:disclosure.map(d=>({
        text:d.querySelector("summary")?.textContent.trim(),
        px:px(d.querySelector("summary")),open:d.open
       })),tips:tips.map(d=>({open:d.open})),
       solutions:[...root.querySelectorAll(".thpt-g10-example-solution")].map(d=>({
        bg:getComputedStyle(d).backgroundColor,strong:d.querySelector("p > strong")?.textContent.trim()
       })),overflow:document.documentElement.scrollWidth-window.innerWidth
      };
     });
     assert(state.buttons.every(b=>Math.abs(b.h-44)<1),where+" exact 44px buttons");
     assert(state.summary.length>=5&&state.summary.every(x=>x.text==="Đối chiếu"&&!x.open&&Math.abs(x.px-state.body)<.6),
      where+" First Try summaries collapsed and normal-size text");
     assert(state.tips.every(x=>!x.open),where+" D6 closed");
     assert(state.cells.every(px=>Math.abs(px-state.body)<.6),where+" table fonts equal body");
     assert(state.solutions.every(x=>x.bg!=="rgba(0, 0, 0, 0)"&&x.strong===([7,8].includes(lesson)?"Lời giải.":lesson===10?"Giải:":"Giải:")),
      where+" solution panel contains unchanged mathematical solution");
     assert(state.overflow<=3,where+" no whole-page horizontal overflow");
     if(lesson===7){
       const helpContent=await blocks.nth(0).locator("details.tip")
        .evaluateAll(tips=>tips.map(tip=>tip.textContent||""));
       assert.equal(helpContent.length,2,where+" two original D6 HELP sections remain");
       assert(helpContent.every(s=>!/B07-[CP][0-9]{2}/.test(s)),
        where+" no student-facing Core/Practice codes in D6");
       assert(helpContent[0].includes("vectơ ngược hướng trong hình bình hành")&&
        helpContent[0].includes("điều kiện hai vectơ bằng nhau")&&
        helpContent[1].includes("hai vectơ cùng hướng nhưng khác độ dài")&&
        helpContent[1].includes("quy ước vectơ-không"),
        where+" source-matched public bank tasks described naturally");
       assert.equal(await article.getAttribute("data-g10-b07-keyboard-tabs"),"true",
        where+" B07 accessible Left/Right keyboard tabs enabled");
       const formalCards=blocks.nth(1).locator(".thpt-r4-knowledge-conclusion.thpt-r4-concept-card");
       const recapCards=blocks.nth(1).locator(".thpt-r4-knowledge-conclusion:not(.thpt-r4-concept-card)");
       assert.equal(await formalCards.count(),5,where+" five formal mathematical definitions by outcome");
       assert.equal(await recapCards.count(),2,where+" two substantive S1 section recaps");
       await labels.nth(1).click();
       for(const scheme of ["default","slate"]){
        await page.evaluate(s=>document.body.setAttribute("data-md-color-scheme",s),scheme);
        const formalBg=await formalCards.first().evaluate(el=>getComputedStyle(el).backgroundColor);
        const recapBg=await recapCards.first().evaluate(el=>getComputedStyle(el).backgroundColor);
        assert.equal(formalBg,scheme==="slate"?"rgb(25, 61, 54)":"rgb(232, 247, 242)",
          where+" B07 formal definition teal in "+scheme);
        assert.equal(recapBg,scheme==="slate"?"rgb(74, 58, 37)":"rgb(255, 243, 213)",
          where+" B07 mandatory recall amber in "+scheme);
       }
       await page.evaluate(()=>document.body.removeAttribute("data-md-color-scheme"));
       await labels.nth(0).click();
       const physicalFig=blocks.nth(0).locator('img[src*="THPT_G10_B07_FORCE_VELOCITY_REPRESENTATION_D5_R04.svg"]');
       assert.equal(await physicalFig.count(),1,
        where+" B07 new original-force/velocity teaching figure in Discovery");
       await labels.nth(0).click();await physicalFig.scrollIntoViewIfNeeded();
       await physicalFig.evaluate(async el=>{if(el.decode)await el.decode();});
       assert(await physicalFig.evaluate(el=>el.complete&&el.naturalWidth>0),
        where+" B07 new physical-vector figure decodes and is accessible");
       const selectedFigure=await physicalFig.evaluate(el=>el.currentSrc);
       assert(selectedFigure.includes(width<=600?
         "THPT_G10_B07_FORCE_VELOCITY_MOBILE_D5_R04.svg":
         "THPT_G10_B07_FORCE_VELOCITY_REPRESENTATION_D5_R04.svg"),
        where+" responsive picture selects correct phone/desktop source");
       assert.equal(await blocks.nth(0).locator('picture source[media="(max-width: 600px)"]').count(),1,
        where+" B07 mobile SVG fallback exists");
       const firstText=await blocks.nth(0).innerText();
       await labels.nth(1).click();
       const formalText=await blocks.nth(1).innerText();
       await labels.nth(2).click();
       const solutionText=await blocks.nth(2).innerText();
       await labels.nth(0).click();
       assert(firstText.includes("20 N")&&firstText.includes("12 km/h")&&
        formalText.includes("Biểu diễn lực và vận tốc bằng vectơ")&&
        solutionText.includes("6 m/s")&&solutionText.includes("3 cm")&&solutionText.includes("1 cm"),
        where+" SGK force/velocity ability taught with method, units and worked transfer");
       const leakedTex=await blocks.evaluateAll(panels=>{
        const bad=[],slash=String.fromCharCode(92);
        for(const panel of panels){
         const tree=document.createTreeWalker(panel,NodeFilter.SHOW_TEXT);
         let node;
         while((node=tree.nextNode())){
          if(node.parentElement?.closest(".arithmatex,script,style"))continue;
          const t=node.textContent||"";
          if(["overrightarrow","cdot","sqrt","vec","["].some(x=>t.includes(slash+x)))
           bad.push(t.trim().slice(0,100));
         }
        }
        return bad;
       });
       assert.deepEqual(leakedTex,[],where+" B07 no raw unrendered TeX in all four tabs");
       const vectorFig=blocks.nth(1).locator('img[src*="THPT_G10_B07_PARALLELOGRAM_EQUAL_OPPOSITE_D5_R01.svg"]');
       assert.equal(await vectorFig.count(),1,where+" original B07 figure kept with exact SGK equality rule");
       await labels.nth(1).click();await vectorFig.scrollIntoViewIfNeeded();
       await vectorFig.evaluate(async el=>{if(el.decode)await el.decode()});
       assert(await vectorFig.evaluate(el=>el.complete&&el.naturalWidth>0),where+" B07 original figure decodes");
       await labels.nth(0).focus();await page.keyboard.press("ArrowRight");
       const radios=tabbed.locator(':scope > input[type="radio"]');
       assert(await radios.nth(1).isChecked(),where+" B07 arrow right activates tab 2");
       await page.keyboard.press("ArrowLeft");assert(await radios.nth(0).isChecked(),where+" B07 arrow left returns to tab 1");
     }
     if(lesson===8){
       // Owner-approved X-F.3 3+1 semantic test: exact actual B08 DOM and light/slate palette.
       const knowledge=blocks.nth(1);
       const definitions=knowledge.locator(".thpt-r4-knowledge-conclusion.thpt-r4-concept-card");
       const rules=knowledge.locator(".thpt-r4-knowledge-conclusion.thpt-r4-rule-card");
       const recaps=knowledge.locator(".thpt-r4-knowledge-conclusion:not(.thpt-r4-concept-card):not(.thpt-r4-rule-card)");
       const formulas=knowledge.locator(".thpt-r4-key-formula");
       assert.deepEqual([await definitions.count(),await rules.count(),await recaps.count(),await formulas.count()],
         [3,4,1,1],where+" B08 correct mathematical 3+1 semantic roles");
       assert((await definitions.allInnerTexts()).some(t=>t.includes("Định nghĩa — Tổng hai vectơ"))&&
         (await rules.allInnerTexts()).some(t=>t.includes("Quy tắc ba điểm"))&&
         (await definitions.allInnerTexts()).some(t=>t.includes("Định nghĩa — Vectơ đối")),
         where+" definition distinct from rule, no heading-keyword shortcut");
       assert.equal(await knowledge.locator(".thpt-r4-knowledge-conclusion strong").filter({hasText:/Ghi nhớ/}).count(),
         0,where+" local reminders cannot be mistaken for mandatory colored recap");
       await labels.nth(1).click();
       for(const scheme of ["default","slate"]){
        await page.evaluate(s=>document.body.setAttribute("data-md-color-scheme",s),scheme);
        const backgrounds=await Promise.all([definitions.first(),rules.first(),recaps.first(),formulas.first()]
         .map(el=>el.evaluate(x=>getComputedStyle(x).backgroundColor)));
        assert.deepEqual(backgrounds,scheme==="slate"?
         ["rgb(25, 61, 54)","rgb(32, 53, 81)","rgb(74, 58, 37)","rgba(0, 0, 0, 0)"]:
         ["rgb(232, 247, 242)","rgb(234, 241, 252)","rgb(255, 243, 213)","rgba(0, 0, 0, 0)"],
         where+" 3+1 computed colors must be meaningfully distinct in "+scheme);
       }
       await page.evaluate(()=>document.body.removeAttribute("data-md-color-scheme"));
       await labels.nth(0).click();
       // Source R04 is pedagogical Delta C, so do not treat R03 exact display count as invariant.
       // The original six equations and any new R04 formula must render without orphan TeX.
       // Owner 17/11: source-locked six display equations must become Arithmatex
       // blocks, not raw escaped TeX inserted into ordinary Markdown paragraphs.
       assert.equal(await blocks.nth(1).locator("div.arithmatex").count(),2,
        where+" one neutral formula frame plus unboxed subtraction verification both render MathJax");
       assert.equal(await formulas.locator("div.arithmatex").count(),1,
        where+" the unfilled key-formula frame contains real display MathJax");
       assert.equal(await blocks.nth(2).locator("div.arithmatex").count(),5,
        where+" five worked-example equations are display math");
       const unrendered=await blocks.evaluateAll(panels=>{
        const bad=[],slash=String.fromCharCode(92);
        const commands=["overrightarrow","cdot","sqrt","vec","cos","[","]"];
        for(const panel of panels){
         const tree=document.createTreeWalker(panel,NodeFilter.SHOW_TEXT);
         let node;
         while((node=tree.nextNode())){
          if(node.parentElement?.closest(".arithmatex,script,style"))continue;
          const content=node.textContent||"";
          if(commands.some(word=>content.includes(slash+word)))
           bad.push(content.trim().slice(0,100));
         }
        }
        return bad;
       });
       assert.deepEqual(unrendered,[],where+" no orphan TeX source outside MathJax wrappers");
       await labels.nth(1).click();
       assert(await blocks.nth(1).locator("div.arithmatex").first().isVisible()&&
        await blocks.nth(1).locator("div.arithmatex").last().isVisible(),
        where+" standalone verification and key formula both visible in Knowledge tab");
       await labels.nth(2).click();
       assert(await blocks.nth(2).locator("div.arithmatex").first().isVisible(),
        where+" solved equation visible when Examples tab selected");
       assert.equal(await article.getAttribute("data-g10-b08-keyboard-tabs"),"true",
        where+" B08 route-only keyboard navigation");
       const svg=blocks.nth(0).locator('img[src*="THPT_G10_B08_TRIANGLE_PARALLELOGRAM_SUM_D5_R01.svg"]');
       assert.equal(await svg.count(),1,where+" B08 original D5 image must be in Discovery");
       await labels.nth(0).click();await svg.scrollIntoViewIfNeeded();
       await svg.evaluate(async el=>{if(el.decode)await el.decode();});
       assert(await svg.evaluate(el=>el.complete&&el.naturalWidth>0),where+" original D5 SVG decodes");
       const radios=tabbed.locator(':scope > input[type="radio"]');
       await labels.nth(0).focus();await page.keyboard.press("ArrowRight");
       assert(await radios.nth(1).isChecked(),where+" arrow right activates tab 2");
       await page.keyboard.press("ArrowLeft");
       assert(await radios.nth(0).isChecked(),where+" arrow left returns to tab 1");
      }
      if(lesson===9){
       const scalarDiscovery=blocks.nth(0).locator(
        'img[src*="THPT_G10_B09_SCALAR_MULTIPLE_VECTORS_D5_R01.svg"]');
       assert.equal(await scalarDiscovery.count(),1,
        where+" historic audit CHIV-09-A: real scalar figure MUST be shown in Discovery");
       assert.equal(await blocks.nth(1).locator(
        'img[src*="THPT_G10_B09_SCALAR_MULTIPLE_VECTORS_D5_R01.svg"]').count(),0,
        where+" no second figure clone in SGK formal tab");
       await labels.nth(0).click();
       await scalarDiscovery.scrollIntoViewIfNeeded();
       await scalarDiscovery.evaluate(async el=>{if(el.decode)await el.decode();});
       assert(await scalarDiscovery.evaluate(el=>el.complete&&el.naturalWidth>0),
        where+" B09 early scalar picture accessible and decodes");
       const localTips=blocks.nth(0).locator("details.tip");
       const localHelp=await localTips.allTextContents();
       assert.equal(localHelp.length,2,where+" two canonical item-specific B09 D6 in Discovery");
       assert(localHelp.every(t=>t.includes("Vì sao sai?")&&t.includes("Ôn lại:")),
        where+" original B09 HELP provides cause and remedy");
       assert.equal(await blocks.nth(3).locator("[data-thpt-help-id]").count(),0,
        where+" B09 local HELP cannot be duplicated in Tab4");
       await labels.nth(3).click();
       const independent=blocks.nth(3).locator("details.tip");
       assert.equal(await independent.count(),1,
        where+" one general sign-error remedy distinct from local HELP");
       const third=independent.first();
       assert.equal(await third.getAttribute("open"),null,where+" B09 sign error defaults closed");
       const thirdLabel=await third.locator("summary").innerText();
       assert(thirdLabel.includes("Đảo dấu"),where+" B09 named real error, not a generic hint");
       await third.locator("summary").click();
       assert((await third.getAttribute("open"))!==null,where+" B09 help opens voluntarily");
       const thirdBody=await third.innerText();
       assert(thirdBody.includes("đổi chỗ điểm đầu và điểm cuối")&&
        thirdBody.includes("không cùng phương")&&thirdBody.includes("Ôn và luyện lại:"),
        where+" B09 sign error contains why/wrong step/repair");
       const link=third.locator('a[href*="THPT-G10-B09-P07"]');
       assert.equal(await link.count(),1,where+" B09 D6 points at existing public P07");
       assert(!(await link.innerText()).includes("P07"),where+" no internal item code exposed");
       await page.waitForFunction(()=>!!document.querySelector('details.tip[open] mjx-container'),
        null,{timeout:15000});
       assert(await third.locator("mjx-container").count()>3,
        where+" B09 wrong/corrected mathematical expressions typeset");
       await third.locator("summary").click();
       await labels.nth(0).click();
       const knowledge=blocks.nth(1);
       const defs=knowledge.locator(".thpt-r4-knowledge-conclusion.thpt-r4-concept-card");
       const rules=knowledge.locator(".thpt-r4-knowledge-conclusion.thpt-r4-rule-card");
       const recap=knowledge.locator(".thpt-r4-knowledge-conclusion:not(.thpt-r4-concept-card):not(.thpt-r4-rule-card)");
       const formulas=knowledge.locator(".thpt-r4-key-formula");
       assert.deepEqual([await defs.count(),await rules.count(),await recap.count(),await formulas.count()],
        [1,3,1,1],where+" B09 real 3+1 semantic roles by mathematical outcome");
       assert((await defs.innerText()).includes("Định nghĩa — Tích của một vectơ với một số")&&
        (await rules.allInnerTexts()).some(s=>s.includes("Phân tích duy nhất theo hai vectơ không cùng phương")),
        where+" mandatory decomposition and scalar definition visible");
       await labels.nth(1).click();
       for(const scheme of ["default","slate"]){
        await page.evaluate(s=>document.body.setAttribute("data-md-color-scheme",s),scheme);
        const backgrounds=await Promise.all([defs.first(),rules.first(),recap.first(),formulas.first()]
         .map(z=>z.evaluate(el=>getComputedStyle(el).backgroundColor)));
        assert.deepEqual(backgrounds,scheme==="slate"?
         ["rgb(25, 61, 54)","rgb(32, 53, 81)","rgb(74, 58, 37)","rgba(0, 0, 0, 0)"]:
         ["rgb(232, 247, 242)","rgb(234, 241, 252)","rgb(255, 243, 213)","rgba(0, 0, 0, 0)"],
         where+" B09 formal/blue/recap/white palette correct "+scheme);
       }
       await page.evaluate(()=>document.body.removeAttribute("data-md-color-scheme"));
       assert.equal(await formulas.locator("div.arithmatex").count(),1,
        where+" B09 centroid/midpoint key formula renders MathJax in white frame");
       assert(await formulas.locator("div.arithmatex").first().isVisible(),
        where+" B09 math formula actually visible in Knowledge");
       const fig=knowledge.locator('img[src*="THPT_G10_B09_DECOMPOSITION_TWO_DIRECTIONS_D5_R03.svg"]');
       assert.equal(await fig.count(),1,where+" authored decomposition SVG beside S1 explanation");
       await fig.scrollIntoViewIfNeeded();await fig.evaluate(async el=>{if(el.decode)await el.decode();});
       assert(await fig.evaluate(el=>el.complete&&el.naturalWidth>0),
        where+" B09 decomposition SVG decodes and is readable");
       const decoded=await fig.evaluate(el=>el.currentSrc||el.src);
       assert(decoded.includes(width<=600?
        "THPT_G10_B09_DECOMPOSITION_MOBILE_D5_R03.svg":
        "THPT_G10_B09_DECOMPOSITION_TWO_DIRECTIONS_D5_R03.svg"),
        where+" B09 serves matching responsive image, not tiny desktop labels on mobile");
       assert.equal(await blocks.nth(2).locator('h3').count(),4,
        where+" B09 four worked examples include decomposition");
       await labels.nth(0).click();
      }
      if(lesson===10){
       // B10 G3: anti-repeat CHIV-10-A/B/C + B09-F04, real learner UI.
       await labels.nth(0).click();
       const fig=blocks.nth(0).locator('img[src*="THPT_G10_B10_COORDINATES_DIFFERENCE_D5_R01.svg"]');
       assert.equal(await fig.count(),1,where+" B10 D5 figure moves BEFORE first student try");
       await fig.scrollIntoViewIfNeeded();await fig.evaluate(async el=>{if(el.decode)await el.decode();});
       assert(await fig.evaluate(el=>el.complete&&el.naturalWidth>0),where+" B10 early coordinate SVG decodes");
       const actualCoord=await fig.evaluate(el=>el.currentSrc);
       assert(actualCoord.includes(width<=600?
        "THPT_G10_B10_COORDINATES_MOBILE_D5_R01.svg":
        "THPT_G10_B10_COORDINATES_DIFFERENCE_D5_R01.svg"),
        where+" B10 early coordinate figure must have readable mobile source and exact original desktop source");
       assert.equal(await blocks.nth(0).locator("code").count(),0,
        where+" B10 no raw backtick-generated math code in Discovery");
       await labels.nth(1).click();
       const defs=blocks.nth(1).locator(".thpt-r4-concept-card");
       const rules=blocks.nth(1).locator(".thpt-r4-rule-card");
       const recap=blocks.nth(1).locator(".thpt-r4-knowledge-conclusion:not(.thpt-r4-concept-card):not(.thpt-r4-rule-card)");
       const formulas=blocks.nth(1).locator(".thpt-r4-key-formula");
       assert.deepEqual([await defs.count(),await rules.count(),await recap.count(),await formulas.count()],
        [1,2,1,2],where+" B10 semantic 3+1 roles, no arbitrary box quota");
       // Owner P2: 4 source display blocks were raw [..] in published HTML.
       // Require real typeset containers INSIDE each affected Tab2 card, not just any MathJax on page.
       await formulas.first().locator('div.arithmatex mjx-container').first()
        .waitFor({state:"attached",timeout:15000});
       assert.equal(await rules.first().locator('div.arithmatex mjx-container').count(),3,
        where+" B10 three coordinate-operation formulas must be typeset, not raw TeX");
       assert.equal(await formulas.nth(0).locator('div.arithmatex mjx-container').count(),2,
        where+" B10 both Pythagoras and distance formulas must be typeset");
       assert.equal(await formulas.nth(1).locator('div.arithmatex mjx-container').count(),2,
        where+" B10 both midpoint and centroid formulas must be typeset");
       for(const scheme of ["default","slate"]){
        await page.evaluate(v=>document.body.setAttribute("data-md-color-scheme",v),scheme);
        const colors=await Promise.all([defs.first(),rules.first(),recap.first(),formulas.first()]
         .map(z=>z.evaluate(el=>getComputedStyle(el).backgroundColor)));
        assert.deepEqual(colors,scheme==="slate"?
         ["rgb(25, 61, 54)","rgb(32, 53, 81)","rgb(74, 58, 37)","rgba(0, 0, 0, 0)"]:
         ["rgb(232, 247, 242)","rgb(234, 241, 252)","rgb(255, 243, 213)","rgba(0, 0, 0, 0)"],
         where+" B10 3+1 contrast in "+scheme);
       }
       await page.evaluate(()=>document.body.removeAttribute("data-md-color-scheme"));
       assert((await defs.innerText()).includes("Định nghĩa — Tọa độ của vectơ")&&
        (await rules.allInnerTexts()).some(v=>v.includes("Điều kiện cùng phương")),
        where+" B10 source-accurate real formal definition and rule");
       await labels.nth(2).click();
       await blocks.nth(2).locator('div.arithmatex mjx-container').first()
        .waitFor({state:"attached",timeout:15000});
       assert.equal(await blocks.nth(2).locator('div.arithmatex mjx-container').count(),1,
        where+" B10 counter-current square-root expression must be typeset in Example 4");
       const examplesText=await blocks.nth(2).innerText();
       assert(examplesText.includes("Ví dụ 4 — Qua sông")&&
        examplesText.includes("96")&&examplesText.includes("3")&&examplesText.includes("5")&&
        examplesText.includes("Đọc hình theo đúng dữ kiện Ví dụ 4")&&
        !examplesText.includes("bộ dữ liệu khác"),
        where+" B10 river figure must match its worked-example dataset exactly");
       const river=blocks.nth(2).locator('img[src*="THPT_G10_B10_RIVER_VELOCITY_D5_R01.svg"]');
       assert.equal(await river.count(),1,where+" B10 source-matched river diagram belongs in worked-example Tab3");
       await river.scrollIntoViewIfNeeded();
       await river.evaluate(async el=>{if(el.decode)await el.decode();});
       assert(await river.evaluate(el=>el.complete&&el.naturalWidth>0),where+" B10 river SVG decodes");
       const actualRiver=await river.evaluate(el=>el.currentSrc);
       assert(actualRiver.includes(width<=600?
        "THPT_G10_B10_RIVER_VELOCITY_MOBILE_D5_R01.svg":
        "THPT_G10_B10_RIVER_VELOCITY_D5_R01.svg"),
        where+" B10 must serve legible portrait diagram only on mobile, full width otherwise");
       await labels.nth(0).click();
       const tips=blocks.nth(0).locator("details.tip");
       assert.equal(await tips.count(),3,where+" B10 original three canonical D6 in Discovery");
       assert.equal(await blocks.nth(3).locator("details.tip,[data-thpt-help-id]").count(),0,
        where+" B10 no duplicate local HELP in Tab4");
       const data=await tips.evaluateAll(nodes=>nodes.map(e=>({
        open:e.open,summary:e.querySelector("summary")?.textContent.trim()||"",
        text:e.textContent||""
       })));
       assert(data.every(x=>!x.open&&x.summary==="Kiểm lỗi"&&
        x.text.includes("Lỗi thường gặp")&&x.text.includes("Vì sao sai?")&&
        x.text.includes("Ôn và luyện lại:")),
        where+" B10 D6 preserves wrong step, cause, remediation and voluntary reveal");
       assert(data[0].text.includes("Lỗi thường gặp:")&&
        data[1].text.includes("Lỗi thường gặp 1:")&&
        data[1].text.includes("Lỗi thường gặp 2:")&&data[2].text.includes("Lỗi thường gặp:"),
        where+" B10 four concrete wrong steps remain in three canonical HELPs");
       assert(data.every(x=>!/Assessment safety|HELP_ID|EX-G10-B10-RIVER|B10-[CP]0[1-6]/.test(x.text)),
        where+" B10 no internal metadata in student remedy");
       const last=tips.nth(2);await last.locator("summary").click();
       assert(await last.evaluate(e=>e.open),where+" B10 river Kiểm lỗi expands");
       await page.waitForFunction(()=>document.querySelector('details.tip[open] mjx-container')!==null,
        null,{timeout:15000});
       const paragraphs=await last.locator("p").allTextContents();
       assert(paragraphs.some(v=>v.includes("Thời gian đó sai"))&&
        paragraphs.some(v=>/thành phần hướng Bắc/i.test(v))&&
        paragraphs.some(v=>v.includes("Ôn và luyện lại:")),
        where+" B10 river D6 shows wrong speed/time and North component repair");
       assert(await last.locator("mjx-container").count()>=5,
        where+" B10 wrong and corrected time real MathJax");
       await last.locator("summary").click();
       assert(!(await last.evaluate(e=>e.open)),where+" B10 river D6 recloses");
       await labels.nth(0).click();
      }
      if(lesson===11){
       // B11 CHIV-11-A/B: all math must be real MathJax, distinct datasets visible,
       // genuine wrong step in Tab4, and 3+1 roles with no B01–B10 style mutation.
       await labels.nth(0).click();
       assert.equal(await blocks.nth(0).locator("code").count(),0,
        where+" B11 Knowledge does not expose raw backtick math or internal IDs");
       assert.equal(await blocks.nth(0).locator("details.question").count(),5,
        where+" B11 all four original + force transfer First Tries must be in Discovery");
       const obtuse=blocks.nth(0).locator('img[src*="THPT_G10_B11_DOT_PRODUCT_OBTUSE_D5_R01.svg"]');
       assert.equal(await obtuse.count(),1,where+" S1 obtuse figure remains adjacent to first concept");
       await labels.nth(1).click();
       const defs=blocks.nth(1).locator(".thpt-r4-concept-card"),
             rules=blocks.nth(1).locator(".thpt-r4-rule-card"),
             recap=blocks.nth(1).locator(".thpt-r4-knowledge-conclusion:not(.thpt-r4-concept-card):not(.thpt-r4-rule-card)"),
             formula=blocks.nth(1).locator(".thpt-r4-key-formula");
       assert.deepEqual([await defs.count(),await rules.count(),await recap.count(),await formula.count()],
        [2,3,1,1],where+" B11 3+1 roles follow meaning, not arbitrary quotas");
       await formula.locator("div.arithmatex mjx-container").first()
        .waitFor({state:"attached",timeout:15000});
       assert.equal(await blocks.nth(1).locator('div.arithmatex mjx-container').count(),5,
        where+" B11 all five formal TeX expressions must typeset, no raw brackets");
       for(const scheme of ["default","slate"]){
        await page.evaluate(v=>document.body.setAttribute("data-md-color-scheme",v),scheme);
        const colors=await Promise.all([defs.first(),rules.first(),recap.first(),formula.first()]
         .map(z=>z.evaluate(el=>getComputedStyle(el).backgroundColor)));
        assert.deepEqual(colors,scheme==="slate"?
         ["rgb(25, 61, 54)","rgb(32, 53, 81)","rgb(74, 58, 37)","rgba(0, 0, 0, 0)"]:
         ["rgb(232, 247, 242)","rgb(234, 241, 252)","rgb(255, 243, 213)","rgba(0, 0, 0, 0)"],
         where+" B11 semantic palette and slate contrast "+scheme);
       }
       await page.evaluate(()=>document.body.removeAttribute("data-md-color-scheme"));
       await labels.nth(2).click();
       assert.equal(await blocks.nth(2).locator("code").count(),0,
        where+" B11 worked maths must be MathJax, not literal code");
       await blocks.nth(2).locator('div.arithmatex mjx-container').first()
        .waitFor({state:"attached",timeout:15000});
       assert.equal(await blocks.nth(2).locator('div.arithmatex mjx-container').count(),1,
        where+" B11 force worked R-square is typeset in correct Example tab");
       const force=blocks.nth(2).locator('img[src*="THPT_G10_CHIV_FORCE_TRANSFER_D5_R01_CORRECTED.svg"]');
       assert.equal(await force.count(),1,where+" B11 force diagram now belongs to corresponding worked Example 4");
       await force.scrollIntoViewIfNeeded();await force.evaluate(async img=>{if(img.decode)await img.decode();});
       assert(await force.evaluate(img=>img.complete&&img.naturalWidth>0),
        where+" B11 original force SVG must decode");
       const exText=await blocks.nth(2).innerText();
       assert(exText.includes("8 N/15 N/120°")&&exText.includes("6 N/6 N/120°")&&
        exText.includes("Ví dụ 4 — Hợp lực"),
        where+" B11 force figure 8/15 must distinguish worked 6/6 dataset in student text");
       await labels.nth(3).click();
       assert.equal(await blocks.nth(3).locator("[data-thpt-first-try-id],details.tip,[data-thpt-help-id]").count(),0,
        where+" B11 Tab4 must not repeat local Vận dụng, HELPs or First Try");
       await labels.nth(0).click();
       const tips=blocks.nth(0).locator("details.tip");
       assert.equal(await tips.count(),3,where+" B11 three signed canonical local D6");
       const ts=await tips.evaluateAll(nodes=>nodes.map(el=>({
        open:el.open,summary:el.querySelector("summary")?.textContent.trim(),
        text:el.textContent||""
       })));
       assert(ts.every(x=>!x.open&&x.summary==="Kiểm lỗi"&&
        ["Cách làm sai:","Vì sao sai:","Tự sửa:","Luyện lại:"].every(t=>x.text.includes(t))),
        where+" B11 original local wrong step/cause/repair/retry only after learner opt-in");
       assert(ts.every(x=>!/Assessment safety|HELP_ID|EX-G10-|B11-[CP][0-9]{2}/.test(x.text)),
        where+" B11 no internal item identifier leaks");
       const first=tips.first();await first.locator("summary").click();
       assert.equal(await first.getAttribute("open"),"",where+" B11 D6 opens voluntarily");
       await first.locator("mjx-container").first().waitFor({state:"attached",timeout:15000});
       await first.locator("summary").click();
       assert.equal(await first.getAttribute("open"),null,where+" B11 D6 re-closes");
       await labels.nth(0).click();
      }
      // Right TOC cross-tab link: tab 3 -> hidden Knowledge tab 2.
     const tocId=await blocks.nth(1).locator("h3[id]").first().getAttribute("id");
     await labels.nth(2).click();
     const toc=page.locator('.md-sidebar--secondary a[href="#'+tocId+'"]').first();
     assert.equal(await toc.count(),1,where+" right TOC target exists");
     await toc.evaluate(a=>a.click());
     await page.waitForFunction(id=>document.getElementById(id)?.getBoundingClientRect().height>0,tocId);
     assert(await blocks.nth(1).isVisible(),where+" right TOC activates hidden Knowledge tab");
     assert.equal(new URL(page.url()).hash,"#"+tocId,where+" right TOC updates the URL");
     await labels.nth(0).click(); // Voluntary First Try now lives in Discovery (owner S1 contract).
     const first=blocks.nth(0).locator("details.question").first();
     await first.locator("summary").click();
     assert((await first.getAttribute("open"))!==null,where+" voluntary answer can be opened");
     await first.locator("summary").click();
     assert.equal(await first.getAttribute("open"),null,where+" answer can be reclosed");
     const math=await page.locator("mjx-container").count();
     assert(math>0,where+" math syntax rendered");
     assert.equal(await page.locator("[data-g10-chapter-selfcheck]").count(),0,where+" no private independent readiness");
     cases++;console.log("PASS "+where+" Golden UI source-locked, TOC, 44px buttons and Q16 intact");
    }
    // G3 B09-RUNTIME-01: actual PUBLIC Practice modal, item 7, answer disclosure,
    // deep-link and math on three real Chromium viewports. Static VM is insufficient.
    const hub=base+"/thpt-preview/sgk/chuong-iv/luyen-tap/";
    let response=await page.goto(hub,{waitUntil:"domcontentloaded",timeout:60000});
    assert(response?.ok(),"B09-P07@"+width+" Chapter IV public Practice hub reachable");
    await page.locator('[data-thpt-open-quiz="b9-practice"]').click();
    await page.waitForFunction(()=>document.querySelector(".thpt-r4-reviewed-formative-card")?.dataset.thptCanonicalItem==="THPT-G10-B09-P01");
    const dlg=page.locator("dialog.thpt-r4-practice-dialog");
    assert(await dlg.evaluate(el=>el.open),"B09-P07@"+width+" modal is open");
    const nav=dlg.locator(".thpt-r4-modal-question-nav button");
    assert.equal(await nav.count(),7,"B09-P07@"+width+" original six plus P07, exactly seven");
    await nav.nth(6).click();
    const item=dlg.locator('.thpt-r4-reviewed-formative-card[data-thpt-canonical-item="THPT-G10-B09-P07"]');
    assert.equal(await item.count(),1,"B09-P07@"+width+" exact item selected through learner navigation");
    assert.equal(await item.getAttribute("data-thpt-exposure-role"),"SGK_PRACTICE");
    assert((await item.locator("h3").innerText()).includes("tam giác"),"B09-P07@"+width+" stem visible");
    assert.equal(await item.locator('textarea[aria-label="Lời giải của em"]').count(),1,
     "B09-P07@"+width+" actual unscored written-answer field");
    const openDetails=item.locator("details");
    assert.equal(await openDetails.count(),2,"B09-P07@"+width+" separate voluntary hint/solution");
    assert.deepEqual(await openDetails.evaluateAll(nodes=>nodes.map(el=>el.open)),[false,false],
     "B09-P07@"+width+" answers and hints CLOSED before learner action");
    await item.locator(".thpt-r4-formative-submit").click();
    assert((await item.locator('[role="status"]').innerText()).includes("Hãy nhập"),
     "B09-P07@"+width+" no empty-answer comparison");
    assert.equal(await openDetails.nth(1).evaluate(el=>el.open),false,
     "B09-P07@"+width+" empty submit does not reveal solution");
    await item.locator("textarea").fill("MN = -a/6 - b/2; AB,AC khong cung phuong.");
    await item.locator(".thpt-r4-formative-submit").click();
    assert((await item.locator('[role="status"]').innerText()).includes("chưa chấm tự động"),
     "B09-P07@"+width+" NO auto grading / Mastery for free text");
    assert.equal(await openDetails.nth(1).evaluate(el=>el.open),true,
     "B09-P07@"+width+" solution shown only after student attempts");
    assert((await openDetails.nth(1).innerText()).includes("duy nhất"),
     "B09-P07@"+width+" includes unique coefficients explanation");
    await page.waitForFunction(()=>!!document.querySelector(
     '.thpt-r4-reviewed-formative-card[data-thpt-canonical-item="THPT-G10-B09-P07"] mjx-container'),
     null,{timeout:20000});
    assert.equal(await dlg.locator("[data-thpt-readiness],[data-mastery-credit]").count(),0,
     "B09-P07@"+width+" no private readiness or mastery UI");
    cases++;
    console.log("PASS B09-P07@"+width+" modal practice answer disclosure and MathJax");
    response=await page.goto(hub+"?item=THPT-G10-B09-P07",{waitUntil:"domcontentloaded",timeout:60000});
    assert(response?.ok(),"B09-P07@"+width+" deep-link returns Practice hub");
    await page.waitForFunction(()=>document.querySelector(
      '.thpt-r4-reviewed-formative-card[data-thpt-canonical-item="THPT-G10-B09-P07"]'),
      null,{timeout:20000});
    const deep=page.locator('.thpt-r4-reviewed-formative-card[data-thpt-canonical-item="THPT-G10-B09-P07"]');
    assert.equal(await deep.count(),1,"B09-P07@"+width+" correct question auto-opened from URL");
    assert.equal(await deep.locator("details[open]").count(),0,
     "B09-P07@"+width+" deep-link answer stays closed");
    assert.equal(await deep.locator('textarea[aria-label="Lời giải của em"]').inputValue(),"",
     "B09-P07@"+width+" new navigation has no pre-filled answer");
    cases++;console.log("PASS B09-P07@"+width+" deep-link cannot pre-expose solutions");
   }finally{await page.close();}
  }
 }finally{await browser.close();}
 assert.equal(cases,21);
 console.log("PASS 21/21 G10 Chapter IV Golden browser cases (15 Knowledge + 6 B09 P07 real runtime/deep-link); all 5 academic source blobs locked. NO DEPLOY.");
})().catch(e=>{console.error(e.stack||e);process.exitCode=1;});
