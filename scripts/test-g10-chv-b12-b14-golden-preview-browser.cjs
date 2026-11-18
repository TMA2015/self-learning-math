#!/usr/bin/env node
"use strict";
/* RELEASE preview-only B12–B14: verify scoped Golden UI extension without
 * changing canonical mathematics/First Try/D6/SGK text. A PASS here is
 * AP/browser evidence, NOT source S1/Q18 or release authorization. */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const crypto=require("node:crypto");
const {chromium}=require("playwright");
const root=path.resolve(__dirname,"..");
const base=process.env.SLM_CHV_URL||"http://127.0.0.1:8765";
const expectedSources={
 12:"fc2942aeafdcd34d3cedd9eeb24c48716bbe7e78",
 13:"0459b67858246cb6136cf9a2cf9e7a7d18bd27be",
 14:"21c1ef59277f742b45a27900b173fac031a4a04f"
};
const ids={12:5,13:5,14:5};
const names=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
const blob=data=>{
 const bytes=Buffer.isBuffer(data)?data:Buffer.from(data);
 return crypto.createHash("sha1").update(Buffer.from("blob "+bytes.length+"\0")).update(bytes).digest("hex");
};
(async()=>{
 for(const [lesson,sha] of Object.entries(expectedSources)){
  const filename=root+"/docs/thpt-preview/sgk/chuong-v/bai-"+lesson+".md";
  const source=fs.readFileSync(filename);
  assert.equal(blob(source),sha,"B"+lesson+" exact candidate source must be SHA-locked");
  if(Number(lesson)===12){
   const receipt=fs.readFileSync(root+
    "/prototypes/thpt/ux795/G10_CHV_B12_S1_PED_CALCULATOR_Q18_R01_20261118.md","utf8");
   const get=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(get("BASELINE_B12_KNOWLEDGE_BLOB"),
    "386a8d46bb4960bbab4934a5891fad89406ac7a5",
    "B12 R01 must retain original independently reviewed source history");
   assert.equal(get("B12_R01_SOURCE_BLOB"),blob(source),
    "B12 must use exactly signed Academic Delta C candidate source");
   const master=fs.readFileSync(root+"/prototypes/thpt/content-drafts/THPT_G10_CHV_B12_CANONICAL.md","utf8");
   assert.equal(blob(master),get("ONE_CANONICAL_B12_R01_BLOB"),
    "B12 source must derive from one signed complete manuscript");
   assert.equal(master.split("<!-- BEGIN_B12_KNOWLEDGE_MARKDOWN -->\n")[1]
    ?.split("\n<!-- END_B12_KNOWLEDGE_MARKDOWN -->")[0],source.toString("utf8"),
    "B12 learner Knowledge must be byte-identical to current canonical");
   const bank=fs.readFileSync(root+"/docs/assets/javascripts/thpt-chv-b12-reviewed-formative-r02.js");
   assert.equal(blob(bank),get("B12_R01_ITEM_BANK_BLOB"),"B12 new calculator item source SHA mismatch");
   assert.equal(blob(fs.readFileSync(root+"/docs/thpt-preview/sgk/chuong-v/luyen-tap.md")),
    get("B12_R01_PRACTICE_HUB_BLOB"),"B12 new P07 launcher SHA mismatch");
   assert(receipt.includes("INDEPENDENT_NOTEBOOKLM_ACADEMIC_PED_REVIEW_PENDING"),
    "B12 material needs independent Academic/PED review, no code self-PASS");
  }
  assert.equal((source.toString().match(/data-thpt-first-try-id="/g)||[]).length,ids[lesson],
   "B"+lesson+" original formative IDs must not be removed");
 }
 const css=fs.readFileSync(root+"/docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css");
 const b01=fs.readFileSync(root+
  "/prototypes/thpt/ux795/G10_CHI_B01_DEFINITION_COLOR_UI_DELTA_A_20261116.md","utf8");
 const b02=fs.readFileSync(root+
  "/prototypes/thpt/ux795/G10_CHI_B02_S1_Q18_KNOWLEDGE_ENRICHMENT_R01_20261116.md","utf8");
 const a=b01.match(/^\*\*BASELINE_CSS_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
 const b=b01.match(/^\*\*CANDIDATE_CSS_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
 const c=b02.match(/^\*\*CSS_PATH:\*\*.*baseline \x60([a-f0-9]{40})\x60/m)?.[1];
 const d=b02.match(/^\*\*CSS_PATH:\*\*.*candidate \x60([a-f0-9]{40})\x60/m)?.[1];
 assert(a==="44442773ac31eb1a46f0cab699a7d2c7974a5f37"&&b===c,
  "B01 historic Golden CSS locked, B02 delta extends exact B01 candidate");
 const b03=fs.readFileSync(root+
  "/prototypes/thpt/ux795/G10_CHII_B03_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md","utf8");
 const b03baseline=b03.match(/^\*\*BASELINE_CSS_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
 const b03candidate=b03.match(/^\*\*CANDIDATE_CSS_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
 assert.equal(b03baseline,d,"B03 CSS must build on exact accepted B02 Golden candidate");
 const b04receipt=fs.readFileSync(root+
   "/prototypes/thpt/ux795/G10_CHII_B04_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md","utf8");
  const b04field=k=>b04receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(b04field("BASELINE_CSS_GIT_BLOB"),b03candidate,"B04 CSS must extend exact approved B03 CSS");
  const b05receipt=fs.readFileSync(root+
   "/prototypes/thpt/ux795/G10_CHIII_B05_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md","utf8");
  const b05field=k=>b05receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(b05field("BASELINE_CSS_GIT_BLOB"),b04field("CANDIDATE_CSS_GIT_BLOB"),
   "B05 CSS extends exact accepted B04 CSS");
  const b06receipt=fs.readFileSync(root+
   "/prototypes/thpt/ux795/G10_CHIII_B06_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md","utf8");
  const b06field=k=>b06receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(b06field("BASELINE_CSS_GIT_BLOB"),b05field("CANDIDATE_CSS_GIT_BLOB"),
   "B06 CSS extends exact B05 accepted Golden CSS");
  const r05=fs.readFileSync(root+
    "/prototypes/thpt/ux795/G10_CHIV_B07_SEMANTIC_CONCEPT_RECAP_DELTA_R05_20261117.md","utf8");
   const r05field=k=>r05.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(r05field("BASELINE_CSS_GIT_BLOB"),b06field("CANDIDATE_CSS_GIT_BLOB"),
    "B07 R05 extends immutable B06 style");
   const r04=fs.readFileSync(root+
    "/prototypes/thpt/ux795/G10_CHIV_B08_SEMANTIC_3PLUS1_DELTA_R04_20261117.md","utf8");
   const r04field=k=>r04.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(r04field("BASELINE_R05_B07_CSS_BLOB"),r05field("R05_CSS_GIT_BLOB"),
    "B08 R04 CSS extends exactly accepted B07 without retroactive redesign");
   const b09=fs.readFileSync(root+
    "/prototypes/thpt/ux795/G10_CHIV_B09_S1_SEMANTIC_DECOMPOSITION_R03_20261117.md","utf8");
   const b09field=k=>b09.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(b09field("CSS_BASELINE_BLOB"),r04field("R04_CSS_BLOB"),
    "B09 scoped CSS must extend owner P2 B08 exact Golden snapshot");
   const B10cssMarker="/* G10 Chapter IV B10 R01";
   const fullCss=css.toString("utf8"),atB10=fullCss.indexOf(B10cssMarker);
   assert(atB10>0&&fullCss.indexOf(B10cssMarker,atB10+1)<0,
    "B10 may add only one isolated scoped semantic appendix");
   assert.equal(blob(fullCss.slice(0,atB10)),b09field("R03_CSS_BLOB"),
    "B09 accepted styles including ChV baseline must remain exact prefix");
   const b10Receipt=fs.readFileSync(root+
    "/prototypes/thpt/ux795/G10_CHIV_B10_S1_PED_SINGLE_CANONICAL_Q18_R01_20261118.md","utf8");
   const b10f=k=>b10Receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   const cutB11=fullCss.indexOf("\n/* G10 Chapter IV B11 R01");
   assert(cutB11>atB10&&fullCss.indexOf("\n/* G10 Chapter IV B11 R01",cutB11+1)===-1,
    "B11 must be scoped append only, no global CSS mutation");
   assert.equal(blob(fullCss.slice(0,cutB11)),b10f("CSS_R01_SCOPED_B10_BLOB"),
    "B10 published CSS must remain byte-identical before B11");
   const b11Receipt=fs.readFileSync(root+
    "/prototypes/thpt/ux795/G10_CHIV_B11_S1_PED_CANONICAL_Q18_R01_20261118.md","utf8");
   const b11f=k=>b11Receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(blob(css),b11f("CSS_B11_SCOPED_APPEND_BLOB"),
    "B11 appended CSS must match signed exact Q18 source");
   assert(!fullCss.slice(atB10).includes("THPT-G10-CHV"),
    "B10 styles may not target Chapter V lesson");
   const cssText=css.toString("utf8"),cut=cssText.indexOf("/* G10 ChIV B07 R05");
   const b08cut=cssText.indexOf("/* G10 ChIV B08 R04");
   const b09cut=cssText.indexOf("/* G10 Chapter IV B09 R03");
   assert(b09cut>b08cut,"B09 scoped style follows previously accepted B08");
   assert.equal(blob(cssText.slice(0,b09cut-1)),r04field("R04_CSS_BLOB"),
    "B09 append-only style protects all previously accepted B01–B08");
   assert(b08cut>cut,"B08-only style must follow immutable B07 accepted CSS");
   assert.equal(blob(cssText.slice(0,b08cut-1)),r05field("R05_CSS_GIT_BLOB"),
    "B08 append-only semantics may not modify B01–B07 accepted Golden stylesheet");
   assert(cut>0,"B07 scoped CSS tail present");
   assert.equal(blob(cssText.slice(0,cut-1)),b06field("CANDIDATE_CSS_GIT_BLOB"),
    "All pre-B07 Golden CSS bytes unchanged");
  assert(css.toString("utf8").includes('data-thpt-first-try-id="THPT-G10-CHIII-TRY06"'),
   "B06 visual delta constrained to B06 first-try canonical selector");
  assert(css.toString("utf8").includes('data-thpt-first-try-id="THPT-G10-CHIII-TRY01"'),
   "B05 concept colors only on B05");
  assert(css.toString("utf8").includes(':has([data-thpt-first-try-id="THPT-G10-CHII-TRY06"])'),
   "B04 definition colors must only target canonical B04 Knowledge");
 assert(css.toString("utf8").includes(':has([data-thpt-first-try-id="THPT-G10-CHI-TRY06"])'),
  "B02 CSS may not accidentally recolor any ChV page");
 assert(css.toString("utf8").includes(':has([data-thpt-first-try-id="THPT-G10-CHII-TRY01"])'),
  "B03 CSS scope must not accidentally recolor ChV pages");
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 let total=0;
 try{
  for(const width of [390,820,1440]){
   const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
   page.setDefaultTimeout(20000);
   try{
    for(const lesson of [12,13,14]){
     const context="G10-CHV-B"+lesson+"@"+width;
     const response=await page.goto(base+"/thpt-preview/sgk/chuong-v/bai-"+lesson+"/",
      {waitUntil:"domcontentloaded",timeout:60000});
     assert(response?.ok(),context+" page reachable");
     await page.waitForFunction(()=>document.querySelector(".md-content__inner")?.dataset.g10ChvGolden==="preview");
     const article=page.locator(".md-content__inner");
     const tabbed=article.locator(":scope > .tabbed-set");
     const labels=tabbed.locator(":scope > .tabbed-labels > label");
     const blocks=tabbed.locator(":scope > .tabbed-content > .tabbed-block");
     assert.deepEqual((await labels.allInnerTexts()).map(v=>v.trim()),names,context+" four original tabs");
     assert.equal(await blocks.count(),4,context+" four source tabs");
     assert.equal(await blocks.nth(0).locator("[data-thpt-first-try-id]").count(),ids[lesson],
      context+" all original First Tries appear in Discovery after Q18 editorial relocation");
     assert.equal(await blocks.nth(1).locator("[data-thpt-first-try-id]").count(),0,
      context+" official SGK section has no First Try or answer controls");
     const officialBook={
      12:["2.1. Số gần đúng","2.2. Sai số tuyệt đối và sai số tương đối","2.3. Quy tròn số gần đúng"],
      13:["2.1. Số trung bình và trung vị","2.2. Tứ phân vị","2.3. Mốt"],
      14:["2.1. Khoảng biến thiên và khoảng tứ phân vị","2.2. Phương sai và độ lệch chuẩn",
          "2.3. Phát hiện số liệu bất thường hoặc không chính xác bằng biểu đồ hộp"]
     };
     assert.deepEqual((await blocks.nth(1).locator(":scope > h3").allInnerTexts()).map(t=>t.trim()),
      officialBook[lesson],context+" exact S1 headings without duplicate SGK");
     assert.deepEqual((await blocks.nth(0).locator(":scope > h3").allInnerTexts()).map(t=>t.trim()),
      lesson===12?["1.1. Cùng tìm hiểu","1.2. Ví dụ trực quan",
       "1.3. Thực hành máy tính cầm tay — tự nhập, đọc và kiểm",
       "1.4. Thuật ngữ, kiến thức và kỹ năng"]:
       ["1.1. Cùng tìm hiểu","1.2. Ví dụ trực quan","1.3. Thuật ngữ, kiến thức và kỹ năng"],
      context+" concept-first discovery");
     if(lesson===14){
      const picture=blocks.nth(1).locator('img[src$="G10_B14_BOXPLOT_S1_Q18_ENRICHMENT_20261113.svg"]');
      assert.equal(await picture.count(),1,context+" source-verified boxplot figure exists");
      await labels.nth(1).click();
      await picture.scrollIntoViewIfNeeded();
      assert(await picture.evaluate(async img=>{if(img.decode)await img.decode();return img.naturalWidth>0;}),
       context+" real educational boxplot SVG decodes");
     }
     assert.equal(await blocks.nth(2).locator(":scope > h3").count(),lesson===12?4:3,
      context+" signed number of worked examples");
     assert.equal(await blocks.nth(2).locator(".thpt-g10-example-solution").count(),
      lesson===12?0:3,context+" B12 complete authored 3.x sections / legacy B13-B14 panels");
     const render=await article.evaluate(root=>{
      const body=getComputedStyle(root.querySelector(".tabbed-block p")).fontSize;
      const labels=[...root.querySelectorAll(":scope > .tabbed-set > .tabbed-labels > label")];
      const closed=[...root.querySelectorAll(".tabbed-block details.question")];
      const tips=[...root.querySelectorAll(".tabbed-block details.tip")];
      const worked=[...root.querySelectorAll(".tabbed-block .thpt-g10-example-solution")];
      return {
       heights:labels.map(e=>e.getBoundingClientRect().height),
       closed:closed.every(e=>!e.open),
       summaries:closed.map(e=>e.querySelector("summary")?.textContent.trim()),
       tipsClosed:tips.every(e=>!e.open),
       tipsCount:tips.length,
       worked:worked.map(e=>({text:e.textContent.trim(),color:getComputedStyle(e).backgroundColor})),
       overflow:document.documentElement.scrollWidth-window.innerWidth,
       body
      };
     });
     assert(render.heights.every(h=>Math.abs(h-44)<1),context+" Golden 44px buttons");
     assert(render.closed,context+" no pre-click answer exposure");
     assert.equal(render.summaries.length,ids[lesson],context+" original voluntary answer controls");
     assert(render.summaries.every(t=>t.startsWith("Đối chiếu")),context+" opt-in concise result disclosure");
     assert(render.overflow<=3,context+" no horizontal page overflow");
     assert(render.tipsClosed&&render.tipsCount>=2,context+" all D6 remediation stays closed");
     assert.equal(render.worked.length,lesson===12?0:3,context+" B12 has new four semantic worked sections");
     assert(render.worked.every(x=>x.text.length>=55&&x.color!=="rgba(0, 0, 0, 0)"),
      context+" each example has unchanged readable source and a visible Golden panel");
     assert.equal(await article.locator("[data-g10-chapter-selfcheck]").count(),0,
      context+" no independent Readiness exposed");
     if(lesson===12){
      await labels.nth(0).click();
      const fig=blocks.nth(0).locator('img[src*="THPT_G10_B12_ERROR_INTERVAL_D5_R02_REVIEWED.svg"]');
      assert.equal(await fig.count(),1,context+" signed interval figure must guide concept BEFORE tab2");
      await fig.scrollIntoViewIfNeeded();
      assert(await fig.evaluate(async img=>{if(img.decode)await img.decode();return img.naturalWidth>0;}),
       context+" signed D5 source interval graphic must decode on device viewport");
      await labels.nth(2).click();
      assert((await blocks.nth(2).innerText()).includes("Ví dụ 4 — Bấm máy tính"),
       context+" B12 four method-first examples include genuine calculator operation");
      await labels.nth(3).click();
      const tips=blocks.nth(3).locator("details.tip");
      assert.equal(await blocks.nth(3).locator("h3").count(),0,
       context+" B12 Golden Tab4 must not regress to B11 duplicate heading cards");
      assert.equal(await tips.count(),3,context+" B12 three actual wrong-step diagnosis disclosures");
      assert.deepEqual((await tips.locator("summary").allTextContents())
       .map(t=>t.trim().slice(0,3)),["4.1","4.2","4.3"],
       context+" B12 three numbered accordion titles in summaries");
      await tips.last().locator("summary").click();
      assert.notEqual(await tips.last().getAttribute("open"),null,
       context+" B12 calculator D6 voluntarily opens");
      await tips.last().locator("summary").click();
      assert.equal(await tips.last().getAttribute("open"),null,
       context+" B12 calculator D6 must reclose");
      await labels.nth(0).click();
     }
     // The cross-tab TOC must open the hidden source tab, preserving URL anchors.
     const headingId=await blocks.nth(1).locator("h3[id]").first().getAttribute("id");
     assert(headingId,context+" original Knowledge anchor");
     await labels.nth(2).click();
     const toc=page.locator('.md-sidebar--secondary a[href="#'+headingId+'"]').first();
     assert.equal(await toc.count(),1,context+" TOC contains original anchor");
     await toc.evaluate(el=>el.click());
     await page.waitForFunction(id=>document.getElementById(id)?.getBoundingClientRect().height>0,headingId);
     assert(await blocks.nth(1).isVisible(),context+" TOC opens hidden tab");
     await labels.nth(0).click();
     const first=blocks.nth(0).locator("details.question").first();
     await first.locator("summary").click();
     assert.notEqual(await first.getAttribute("open"),null,context+" opt-in reveal works");
     await first.locator("summary").click();
     assert.equal(await first.getAttribute("open"),null,context+" opt-in reveal recloses");
     assert((await page.locator("mjx-container").count())>0,context+" actual MathJax rendered");
     total++;console.log("PASS "+context+" UI preview, immutable content, Q16");
    }
   }finally{await page.close();}
  }
 }finally{await browser.close();}
 assert.equal(total,9);
 console.log("PASS 9/9 ChV B12–B14 browser PREVIEW; S1/Q18 and owner UX remain HOLD. NO DEPLOY.");
})().catch(error=>{console.error(error.stack||error);process.exitCode=1;});
