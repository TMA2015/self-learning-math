#!/usr/bin/env node
"use strict";
/* G10 B01–B06 learner-facing Golden browser QA.
 * B01 now references owner-corrected R02 source and immutable R01→R02 Q18
 * receipts; B03–B06 keep exact historic SHA. Golden UI/answer and D6
 * regressions are checked; this does NOT independently approve Delta C.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto"),cp=require("node:child_process");
const {chromium}=require("playwright");
const root=path.resolve(__dirname,"..");
const base=process.env.SLM_G10_URL||"http://127.0.0.1:8765";
const SHA={
"docs/thpt-preview/sgk/chuong-i/bai-1.md":"fb4bd72f6101523e30e30cc970d74c23b76228a8",
"docs/thpt-preview/sgk/chuong-i/bai-2.md":"8a7b90f1768b789429def045e38ebe97e6adbf3a",
"docs/thpt-preview/sgk/chuong-ii/bai-3.md":"c9ae5104c2f65779f2dd452d3f7775abe2600b7b",
"docs/thpt-preview/sgk/chuong-ii/bai-4.md":"2c432958169cd9f3a8a66e6bc07610b6a60d5815",
"docs/thpt-preview/sgk/chuong-iii/bai-5.md":"d45eacd18ad14ee3bdf90a1fe4ba24926b602cd2",
"docs/thpt-preview/sgk/chuong-iii/bai-6.md":"3a2f4392357b0a7155488ba2427fbb2dde0dde81"
};
const STYLES={
"docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css":"44442773ac31eb1a46f0cab699a7d2c7974a5f37",
"docs/assets/stylesheets/site-design-system.css":"cede51cfff25ef4f6c612c894c81f4639625c32b",
"docs/assets/stylesheets/thpt-r4-preview.css":"f46b7280965c226039093c408dc7f8e3e78001fa",
"docs/assets/stylesheets/thpt-sgk-lesson-nav-v1.css":"4bf16bba1cd144f0a69c932d8ead24dd4534f4cb",
"mkdocs.yml":"0567277340fa5c062dd83e63f7e8796556d1ba51",
"mkdocs.thpt-preview.yml":"a18192415be322da6b3bdea6e6ca462cf1a189b4"
};
function hash(buffer){
 const b=Buffer.isBuffer(buffer)?buffer:Buffer.from(buffer);
 return crypto.createHash("sha1").update(Buffer.from("blob "+b.length+"\0")).update(b).digest("hex");
}
function checkSHA(){
 for(const [p,sha] of Object.entries({...SHA,...STYLES})){
  const data=fs.readFileSync(path.join(root,p));
  if(p==="docs/thpt-preview/sgk/chuong-i/bai-1.md"){
   const original=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHI_B01_KNOWLEDGE_ENRICHMENT_DELTA_RECEIPT_R01_20261115.md"),"utf8");
   const follow=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHI_B01_KNOWLEDGE_OWNER_P2_DELTA_RECEIPT_R02_20261115.md"),"utf8");
   const oldCandidate=original.match(/^\*\*CANDIDATE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
   const newBaseline=follow.match(/^\*\*BASELINE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
   const newCandidate=follow.match(/^\*\*CANDIDATE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
   assert(oldCandidate&&newBaseline===oldCandidate&&original.includes("**BASELINE_LESSON_GIT_BLOB:** "+String.fromCharCode(96)+sha+String.fromCharCode(96)),
    "B01 R02 must extend original owner-reviewed R01 / frozen historical SGK baseline");
   assert.equal(hash(data),newCandidate,"B01 owner P2 source must match exactly R02 Q18 candidate Git blob");
  }else if(p==="docs/thpt-preview/sgk/chuong-i/bai-2.md"){
   const receipt=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHI_B02_S1_Q18_KNOWLEDGE_ENRICHMENT_R01_20261116.md"),"utf8");
   const baseline=receipt.match(/^\*\*BASELINE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
   const candidate=receipt.match(/^\*\*CANDIDATE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
   assert.equal(baseline,sha,"B02 immutable prior SGK candidate source SHA remains source-locked");
   assert.equal(hash(data),candidate,"B02 source must exactly match S1/Q18 enrichment receipt");
  }else if(p==="docs/thpt-preview/sgk/chuong-ii/bai-3.md"){
   const receipt=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHII_B03_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md"),"utf8");
   const baseline=receipt.match(/^\*\*BASELINE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
   const candidate=receipt.match(/^\*\*CANDIDATE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
   assert.equal(baseline,sha,"B03 authoring source baseline unchanged");
   assert.equal(hash(data),candidate,"B03 source equals targeted author verified Q18 receipt");
  }else if(p==="docs/thpt-preview/sgk/chuong-ii/bai-4.md"){
   const receipt=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHII_B04_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md"),"utf8");
   const field=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(field("BASELINE_LESSON_GIT_BLOB"),sha,"B04 original source SHA preserved");
   assert.equal(hash(data),field("CANDIDATE_LESSON_GIT_BLOB"),"B04 Q18 candidate exact source");
  }else if(p==="docs/thpt-preview/sgk/chuong-iii/bai-5.md"){
   const receipt=fs.readFileSync(path.join(root,"prototypes/thpt/ux795/G10_CHIII_B05_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md"),"utf8");
   const field=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(field("BASELINE_LESSON_GIT_BLOB"),sha,"B05 frozen source baseline");
   assert.equal(hash(data),field("CANDIDATE_LESSON_GIT_BLOB"),"B05 Q18 source candidate");
  }else if(p==="docs/thpt-preview/sgk/chuong-iii/bai-6.md"){
    const receipt=fs.readFileSync(path.join(root,
      "prototypes/thpt/ux795/G10_CHIII_B06_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md"),"utf8");
    const field=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
    assert.equal(field("BASELINE_LESSON_GIT_BLOB"),sha,"B06 frozen original source blob");
    const follow=fs.readFileSync(path.join(root,"prototypes/thpt/ux795/G10_CHIII_B06_PED_REFERENCE_ANCHOR_R02_20261116.md"),"utf8");
     const r02=k=>follow.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
     assert.equal(r02("R01_APPROVED_SOURCE_BLOB"),field("CANDIDATE_LESSON_GIT_BLOB"),"B06 immutable R01 predecessor");
     assert.equal(hash(data),r02("R02_CORRECTED_SOURCE_BLOB"),"B06 final owner P2 clarity correction exact Q18");
  }else if(p==="docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css"){
   const b01=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHI_B01_DEFINITION_COLOR_UI_DELTA_A_20261116.md"),"utf8");
   const b02=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHI_B02_S1_Q18_KNOWLEDGE_ENRICHMENT_R01_20261116.md"),"utf8");
   const b01Baseline=b01.match(/^\*\*BASELINE_CSS_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
   const b01Candidate=b01.match(/^\*\*CANDIDATE_CSS_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
   const b02Baseline=b02.match(/^\*\*CSS_PATH:\*\*.*baseline \x60([a-f0-9]{40})\x60/m)?.[1];
   const b02Candidate=b02.match(/^\*\*CSS_PATH:\*\*.*candidate \x60([a-f0-9]{40})\x60/m)?.[1];
   assert(b01Baseline===sha&&b01Candidate===b02Baseline,
    "Original B01 teal receipt must be immutable and B02 CSS extend that exact blob");
   const b03=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHII_B03_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md"),"utf8");
   const b03Old=b03.match(/^\*\*BASELINE_CSS_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
   const b03New=b03.match(/^\*\*CANDIDATE_CSS_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
   assert.equal(b03Old,b02Candidate,"B03 CSS extends exact accepted B02 Golden theme");
   const b04=fs.readFileSync(path.join(root,"prototypes/thpt/ux795/G10_CHII_B04_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md"),"utf8");
   const field=k=>b04.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(field("BASELINE_CSS_GIT_BLOB"),b03New,"B04 CSS baseline preserves B03 accepted CSS");
   const b05=fs.readFileSync(path.join(root,"prototypes/thpt/ux795/G10_CHIII_B05_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md"),"utf8");
   const field05=k=>b05.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(field05("BASELINE_CSS_GIT_BLOB"),field("CANDIDATE_CSS_GIT_BLOB"),"B05 extends frozen B04 CSS");
   const b06=fs.readFileSync(path.join(root,
     "prototypes/thpt/ux795/G10_CHIII_B06_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md"),"utf8");
    const field06=k=>b06.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
    assert.equal(field06("BASELINE_CSS_GIT_BLOB"),field05("CANDIDATE_CSS_GIT_BLOB"),
      "B06 CSS must extend B05 P2 accepted CSS without rewriting history");
    const b09Receipt=fs.readFileSync(path.join(root,
      "prototypes/thpt/ux795/G10_CHIV_B09_S1_SEMANTIC_DECOMPOSITION_R03_20261117.md"),"utf8");
    const f09=k=>b09Receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
    const cssText=data.toString("utf8"),b07cut=cssText.indexOf("/* G10 ChIV B07 R05");
    const b09cut=cssText.indexOf("/* G10 Chapter IV B09 R03");
    assert(b07cut>0&&b09cut>b07cut,"B09 CSS is append-only after B07/B08 accepted Golden styles");
    assert.equal(hash(cssText.slice(0,b07cut-1)),field06("CANDIDATE_CSS_GIT_BLOB"),
      "Original B01–B06 scoped Golden CSS prefix must remain source-identical");
    assert.equal(hash(cssText.slice(0,b09cut-1)),f09("CSS_BASELINE_BLOB"),
      "B09 CSS only follows owner P2-accepted B08 source without other changes");
    // B10 is the only new scoped appendix; B01-B09 stay byte-for-byte frozen.
    const b10=fs.readFileSync(path.join(root,
      "prototypes/thpt/ux795/G10_CHIV_B10_S1_PED_SINGLE_CANONICAL_Q18_R01_20261118.md"),"utf8");
    const f10=k=>b10.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
    const marker10="/* G10 Chapter IV B10 R01";
    const cut10=cssText.indexOf(marker10);
    assert(cut10>b09cut&&cssText.indexOf(marker10,cut10+1)<0,
      "B10 CSS must append exactly one new scoped region after B09");
    // B09 main CSS ends immediately before the B10 comment (no extra separator).
    assert.equal(hash(cssText.slice(0,cut10)),f09("R03_CSS_BLOB"),
      "B01–B09 published CSS byte-identical before B10 section");
    assert.equal(f10("CSS_OWNER_B09_P2_BASELINE_BLOB"),f09("R03_CSS_BLOB"),
      "B10 Q18 must extend exactly owner-accepted B09 CSS");
    const cut11=cssText.indexOf("\n/* G10 Chapter IV B11 R01");
    assert(cut11>cut10&&cssText.indexOf("\n/* G10 Chapter IV B11 R01",cut11+1)<0,
     "B11 must append exactly one Golden scoped section after B10");
    assert.equal(hash(cssText.slice(0,cut11)),f10("CSS_R01_SCOPED_B10_BLOB"),
     "B10 P2 approved exact stylesheet prefix must not drift");
    const r11=fs.readFileSync(path.join(root,
     "prototypes/thpt/ux795/G10_CHIV_B11_S1_PED_CANONICAL_Q18_R01_20261118.md"),"utf8");
    const f11=k=>r11.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
    // The signed B11 stylesheet is a historical prefix before B12–B27
    // extensions. Lock those bytes, rather than the newer complete CSS hash.
    const b12Start=cssText.indexOf("/* G10 ChV B12 · OWNER P2 Golden parity");
    assert(b12Start>cut11&&cssText.indexOf("/* G10 ChV B12 · OWNER P2 Golden parity",b12Start+1)===-1,
     "Exactly one B12 scoped CSS appendix follows signed B11");
    assert.equal(hash(cssText.slice(0,b12Start-1)),f11("CSS_B11_SCOPED_APPEND_BLOB"),
     "B11 accepted Golden CSS must remain byte-exact immutable prefix");
    assert(cssText.slice(cut10,cut11).includes('data-thpt-first-try-id="THPT-G10-CHIV-TRY16"')&&
      !/TRY0[1-9]|TRY1[1-5]/.test(cssText.slice(cut10,cut11))&&
      cssText.slice(cut11).includes('data-thpt-first-try-id="THPT-G10-CHIV-TRY21"')&&
      !cssText.slice(cut11).includes("THPT-G10-CHIV-TRY16"),
      "B10 append may style only B10 TRY16, not previously accepted lessons");
    assert(data.toString("utf8").includes('data-thpt-first-try-id="THPT-G10-CHIII-TRY06"'),
      "Only B06 canonical Knowledge marker may add CSS");
   assert(data.toString("utf8").includes('data-thpt-first-try-id="THPT-G10-CHIII-TRY01"'),
    "B05 CSS must scope solely to B05");
  }else if(p==="mkdocs.yml"){
   // First Paint intentionally registers exactly one scoped MkDocs hook.
   // Reconstruct the accepted pre-PR config byte-for-byte; no other config
   // (including THCS / plugins / Firebase) may drift in this UI-only PR.
   const source=data.toString("utf8"),entry="  - hooks/sgk_golden_first_paint.py\n";
   assert.equal(source.split(entry).length-1,1,"One Golden First Paint hook only");
   assert.equal(hash(source.replace(entry,"")),sha,
    "Golden First Paint registration must be the ONLY config change");
  }else assert.equal(hash(data),sha,"Untouched SGK sibling source/theme drift: "+p);
 }
 const q18=fs.readFileSync(path.join(root,
  "prototypes/thpt/ux795/G10_CHI_B02_S1_Q18_KNOWLEDGE_ENRICHMENT_R01_20261116.md"),"utf8");
 const asset=fs.readFileSync(path.join(root,
  "docs/assets/images/thpt/G10_B02_NUMBER_SETS_INCLUSION_S1_R01.svg"));
 const js=fs.readFileSync(path.join(root,"docs/assets/javascripts/thpt-sgk-lesson-nav-v1.js"));
 assert(q18.includes("**SVG_ASSET_GIT_BLOB:** "+String.fromCharCode(96)+hash(asset)+String.fromCharCode(96)),
  "B02 S1 nested-set diagram must match immutable figure SHA");
 const b03Receipt=fs.readFileSync(path.join(root,
  "prototypes/thpt/ux795/G10_CHII_B03_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md"),"utf8");
 const formerJs=b03Receipt.match(/^\*\*BASELINE_JS_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
 const currentJs=b03Receipt.match(/^\*\*CANDIDATE_JS_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
 assert(q18.includes("candidate "+String.fromCharCode(96)+formerJs+String.fromCharCode(96)),
  "B03 JS must extend exact B02 accepted Golden route");
 const b04=fs.readFileSync(path.join(root,"prototypes/thpt/ux795/G10_CHII_B04_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md"),"utf8");
  const field=k=>b04.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field("BASELINE_JS_GIT_BLOB"),currentJs,"B04 extends B03 accepted JS");
  const b05=fs.readFileSync(path.join(root,"prototypes/thpt/ux795/G10_CHIII_B05_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md"),"utf8");
  const field05=k=>b05.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field05("BASELINE_JS_GIT_BLOB"),field("CANDIDATE_JS_GIT_BLOB"),"B05 extends owner approved B04 JS");
  const b06=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHIII_B06_S1_OWNER_Q18_ENRICHMENT_DELTA_R01_20261116.md"),"utf8");
  const field06=k=>b06.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field06("BASELINE_JS_GIT_BLOB"),field05("CANDIDATE_JS_GIT_BLOB"),
    "B06 nav must extend exact owner accepted B05 JS");
  const b08=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B08_S1_OWNER_Q18_ENRICHMENT_DELTA_R02_20261116.md"),"utf8");
  const field08=k=>b08.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field08("JS_PREVIOUS_BLOB"),field06("CANDIDATE_JS_GIT_BLOB"),
    "B08 scoped JS must extend exact B06 owner-approved Q18 JS, never rewrite history");
  const b07=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B07_S1_OWNER_Q18_ENRICHMENT_DELTA_R02_20261116.md"),"utf8");
  const field07=k=>b07.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field07("JS_PREVIOUS_BLOB"),field08("JS_CANDIDATE_BLOB"),
    "B07 scoped UI must extend exact B08 accepted source-locked JS");
  const b09=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B09_S1_SEMANTIC_DECOMPOSITION_R03_20261117.md"),"utf8");
 const f09=k=>b09.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
 assert.equal(f09("NAV_JS_BASELINE_BLOB"),field07("JS_CANDIDATE_BLOB"),
   "B09-only Golden solution JS must extend B07/B08 accepted navigation runtime");
 const b10=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B10_S1_PED_SINGLE_CANONICAL_Q18_R01_20261118.md"),"utf8");
 const f10=k=>b10.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
 const newJs=js.toString("utf8");
 const former=cp.spawnSync("git",["show",
  "e8d6f76e82711738e1e2af569d1613052b30f910:docs/assets/javascripts/thpt-sgk-lesson-nav-v1.js"],
  {cwd:root,encoding:"utf8"});
 assert.equal(former.status,0,"Golden runtime main baseline must be fetched and readable");
 const signedJs=former.stdout;
 assert.equal(hash(signedJs),f10("B10_SCOPED_GOLDEN_RUNTIME_BLOB"),
  "Previous signed B10 runtime must stay immutable in Git history");
 const start1=" const isEnrichedB10=",end1=" const section=",
       start2=" // B10 signed Q18:",end2=" // Golden example solution panel.";
 const a=signedJs.indexOf(start1),b=signedJs.indexOf(end1,a),
       c=signedJs.indexOf(start2),d=signedJs.indexOf(end2,c);
 assert(a>0&&b>a&&c>b&&d>c&&
  signedJs.indexOf(start1,a+1)<0&&signedJs.indexOf(start2,c+1)<0,
  "Historical signed B10 JavaScript must preserve two exact scoped regions");
 const baseJs=signedJs.slice(0,a)+signedJs.slice(b,c)+signedJs.slice(d);
 assert.equal(hash(baseJs),f09("NAV_JS_R03_BLOB"),
   "B01–B09 owner accepted JS historically byte-exact before B10");
 assert.equal(f10("B09_OWNER_P2_RUNTIME_BASELINE_BLOB"),f09("NAV_JS_R03_BLOB"),
  "B10 JS must extend owner-accepted B09 source");
 assert(signedJs.slice(a,b).includes("TRY16")&&signedJs.slice(c,d).includes("isEnrichedB10"),
  "Original B10 additions were scoped to B10");
 // Current shared runtime differs by UI First Paint, checked in real browser
 // 28-page Chromium/WebKit first-paint suite. Do not compare it to 18 Nov SHA.
 assert(newJs.includes('querySelector(":scope > h2.thpt-g10-section-heading")')&&
  newJs.includes("data-sgk-lesson-nav"),
  "Golden First Paint runtime must retain native H2 and lesson navigation logic");
}
const names=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
const ch=n=>n<=2?"i":n<=4?"ii":"iii";
const widths=[390,820,1440];
(async()=>{
 checkSHA();
 const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
 let passed=0;
 try{
  for(const width of widths){
   const page=await browser.newPage({viewport:{width,height:width===390?844:width===820?1180:900}});
   try{
    for(let n=1;n<=6;n++){
     const loc="G10-B"+n+"@"+width;
     const url=base+"/thpt-preview/sgk/chuong-"+ch(n)+"/bai-"+n+"/";
     const res=await page.goto(url,{waitUntil:"domcontentloaded",timeout:60000});
     assert(res?.ok(),loc+" HTML page reachable");
     await page.waitForFunction(()=>document.querySelector(".md-content__inner")?.dataset.g10B01B06EditorialNumbered==="true",{timeout:15000});
     const tabs=page.locator(".md-content__inner .tabbed-set").first();
     const labels=tabs.locator(":scope > .tabbed-labels > label");
     assert.deepEqual((await labels.allInnerTexts()).map(t=>t.trim()),names,loc+" four section titles");
     const groups=tabs.locator(":scope > .tabbed-content > .tabbed-block");
     assert.equal(await groups.count(),4,loc+" EXACT four original tab blocks");
     const discovery=groups.nth(0).locator("h3");
     const discoveryTitles=(await discovery.allInnerTexts()).map(x=>x.trim());
     const expectedDiscovery=n===1?
      ["1.1. Vì sao toán học cần mệnh đề?",
       "1.2. Đọc đúng chiều của một lời khẳng định",
       "1.3. “Mọi” và “có ít nhất một” khác nhau ra sao?",
       "1.4. Thuật ngữ và điều em cần nhớ"]:
      n===2?["1.1. Tập hợp giúp ta xác định những đối tượng nào?",
       "1.2. Đọc hình và tìm phần chung","1.3. Thuật ngữ và mục tiêu bài học"]:
      n===5?["1.1. Vì sao cần mở rộng lượng giác ra ngoài góc nhọn?",
       "1.2. Hình thành hệ thức và phân biệt góc phụ, góc bù",
       "1.3. Tại sao tan/cot có lúc không xác định?",
       "1.4. Dùng máy tính đúng cách và đọc ứng dụng"]:
      n===6?["1.1. Vì sao cần học hệ thức lượng trong tam giác?",
        "1.2. Vì sao định lí côsin phải có “phần điều chỉnh” Pitago?",
        "1.3. Vì sao định lí sin giúp giải tam giác và đo đạc?",
        "1.4. Vì sao diện tích xuất hiện sin, nửa chu vi và hai bán kính?",
        "1.5. Nếu chỉ đo được ba cạnh thì tính diện tích thế nào?"]:
       ["1.1. Cùng tìm hiểu","1.2. Ví dụ trực quan","1.3. Thuật ngữ, kiến thức và kỹ năng"];
     assert.deepEqual(discoveryTitles,expectedDiscovery,loc+" meaningful concept-first discovery headings");
     const knowledge=(await groups.nth(1).locator("h3").allInnerTexts()).map(x=>x.trim());
     assert(knowledge.length>=((n===3||n===5)?2:(n===2||n===4)?3:4)&&knowledge.every((v,i)=>v.startsWith("2."+(i+1)+". ")),loc+" authentic S1 SGK main sections");
     if(n===2)assert.deepEqual(knowledge,["2.1. Các khái niệm cơ bản về tập hợp",
      "2.2. Các tập hợp số","2.3. Các phép toán trên tập hợp"],loc+" original S1 has 3 main sections");
     if(n===3){
      assert.deepEqual(knowledge,["2.1. Bất phương trình bậc nhất hai ẩn",
       "2.2. Biểu diễn miền nghiệm của bất phương trình bậc nhất hai ẩn trên mặt phẳng tọa độ"],
       loc+" original two S1 knowledge sections only");
      const children=(await groups.nth(1).locator("h4").allInnerTexts()).map(x=>x.trim());
      assert.deepEqual(children.map(x=>x.split(" ")[0]),
       ["2.1.1.","2.1.2.","2.2.1.","2.2.2.","2.2.3."],
       loc+" owner monitored all level-3 headings with parents, no gap");
      const pane=groups.nth(1);
      assert.equal(await pane.locator(".thpt-r4-concept-card").count(),4,loc+" 4 S1 definition cards");
      assert.equal(await pane.locator(".thpt-r4-knowledge-conclusion:not(.thpt-r4-concept-card)").count(),
       3,loc+" 3 original amber reminders");
      const apps=(await pane.locator("p").allInnerTexts()).filter(x=>x.trim().startsWith("Vận dụng."));
      assert.equal(apps.length,5,loc+" 5 valid canonical First Try placements");
      const ids=(await pane.locator("[data-thpt-first-try-id]").evaluateAll(nodes=>nodes.map(x=>x.getAttribute("data-thpt-first-try-id"))));
      assert.deepEqual(ids,["THPT-G10-CHII-TRY01","THPT-G10-CHII-TRY02",
       "THPT-G10-CHII-TRY03","THPT-G10-CHII-TRY04","THPT-G10-CHII-TRY05"],
       loc+" 5 unchanged canonical item IDs");
      const example=groups.nth(2);
      assert.equal((await example.locator("p").allInnerTexts()).filter(x=>x.trim().startsWith("Phân tích.")).length,3,
       loc+" 3 analysis-before-solution examples");
      assert.equal(await pane.locator('img[src*="THPT_G10_B03_HALFPLANES_D5_R01.svg"]').count(),1,
       loc+" source-verified original B03 diagram preserved");
      await labels.nth(1).click();
      const img=pane.locator('img[src*="THPT_G10_B03_HALFPLANES_D5_R01.svg"]');
      await img.scrollIntoViewIfNeeded();
      await img.evaluate(async el=>{if(el.decode)await el.decode();});
      assert(await img.evaluate(el=>el.complete&&el.naturalWidth>0),loc+" diagram actually loads");
      await labels.nth(0).click();
     }
     if(n===4){
      assert.deepEqual(knowledge,[
       "2.1. Hệ bất phương trình bậc nhất hai ẩn",
       "2.2. Biểu diễn miền nghiệm của hệ bất phương trình bậc nhất hai ẩn trên mặt phẳng tọa độ",
       "2.3. Ứng dụng của hệ bất phương trình bậc nhất hai ẩn"
      ],loc+" actual S1 three-section outline");
      const pane=groups.nth(1);
      const child=(await pane.locator("h4").allInnerTexts()).map(x=>x.trim().split(" ")[0]);
      assert.deepEqual(child,["2.1.1.","2.2.1.","2.2.2.","2.3.1.","2.3.2."],
       loc+" five nested outcomes under authentic parent section");
      const ids=await pane.locator("[data-thpt-first-try-id]").evaluateAll(nodes=>nodes.map(x=>x.getAttribute("data-thpt-first-try-id")));
      assert.deepEqual(ids,["THPT-G10-CHII-TRY06","THPT-G10-CHII-TRY07","THPT-G10-CHII-TRY08","THPT-G10-CHII-TRY09","THPT-G10-CHII-TRY10"],
       loc+" all five canonical B04 self-trial IDs unchanged");
      assert.equal((await pane.locator("p").allInnerTexts()).filter(x=>x.trim().startsWith("Vận dụng.")).length,5,
       loc+" five genuine learner-first attempts");
      const text=await groups.nth(2).innerText();
      assert(text.includes("174 triệu đồng")&&text.includes("27"),loc+" corrected independent worked examples");
      const img=pane.locator('img[src*="THPT_G10_B04_FEASIBLE_POLYGON_D5_R01.svg"]');
      assert.equal(await img.count(),1,loc+" original D5 figure retained");
      await labels.nth(1).click();
      await img.evaluate(async el=>{if(el.decode)await el.decode()});
      assert(await img.evaluate(el=>el.complete&&el.naturalWidth>0),loc+" B04 D5 actual pixels");
      await labels.nth(0).click();
     }
     if(n===5){
      assert.deepEqual(knowledge,[
       "2.1. Giá trị lượng giác của một góc",
       "2.2. Mối quan hệ giữa các giá trị lượng giác của hai góc bù nhau"
      ],loc+" exact two SGK S1 parent sections for B05");
      const pane=groups.nth(1);
      const children=(await pane.locator("h4").allInnerTexts()).map(x=>x.trim().split(" ")[0]);
      assert.deepEqual(children,["2.1.1.","2.1.2.","2.1.3.","2.1.4.","2.2.1.","2.2.2.","2.2.3."],
       loc+" S1 B05 seven meaningful subtopics with proper parents");
      const ids=await pane.locator("[data-thpt-first-try-id]").evaluateAll(nodes=>nodes.map(x=>x.getAttribute("data-thpt-first-try-id")));
      assert.deepEqual(ids,["THPT-G10-CHIII-TRY01","THPT-G10-CHIII-TRY02","THPT-G10-CHIII-TRY03",
       "THPT-G10-CHIII-TRY04","THPT-G10-CHIII-TRY05","THPT-G10-CHIII-TRY11"],
       loc+" original five canonical plus one new DEG/inverse learner self-trial");
      assert.equal((await pane.locator("p").allInnerTexts()).filter(x=>x.trim().startsWith("Vận dụng.")).length,6,
       loc+" six genuine learner First Try labels including calculator");
      assert.equal(await pane.locator(".thpt-r4-concept-card").count(),3,loc+" three formal S1 concept boxes");
      assert.equal(await pane.locator(".thpt-r4-knowledge-conclusion:not(.thpt-r4-concept-card)").count(),2,
       loc+" two S1 amber memory recaps");
      assert.equal((await groups.nth(2).locator("p").allInnerTexts()).filter(x=>x.trim().startsWith("Phân tích.")).length,4,
       loc+" four nonidentical method-first worked examples");
      const text=await pane.innerText();
      assert(text.includes("DEG")&&text.includes("RAD")&&text.includes("góc chính"),loc+" mandatory calculator and inverse-angle S1 material present");
      const img=pane.locator('img[src*="THPT_G10_B05_SEMICIRCLE_120_D5_R01.svg"]');
      assert.equal(await img.count(),1,loc+" original source-truthful semicircle SVG preserved");
      await labels.nth(1).click();
      await img.evaluate(async el=>{if(el.decode)await el.decode()});
      assert(await img.evaluate(el=>el.complete&&el.naturalWidth>0),loc+" B05 unit semicircle image actually decodes");
      await labels.nth(0).click();
     }
     if(n===6){
      assert.deepEqual(knowledge,["2.1. Định lí côsin","2.2. Định lí sin",
       "2.3. Giải tam giác và ứng dụng thực tế","2.4. Công thức tính diện tích tam giác"],
       loc+" exact four SGK S1 parents in original order");
      const pane=groups.nth(1);
      const children=(await pane.locator("h4").allInnerTexts()).map(x=>x.trim().split(" ")[0]);
      assert.deepEqual(children,["2.1.1.","2.1.2.","2.2.1.","2.2.2.","2.3.1.","2.3.2.",
       "2.4.1.","2.4.2.","2.4.3.","2.4.4."],
       loc+" B06 10 subtopics nested under four S1 main headings");
      const ids=await pane.locator("[data-thpt-first-try-id]").evaluateAll(nodes=>nodes.map(x=>x.getAttribute("data-thpt-first-try-id")));
      assert.deepEqual(ids,["THPT-G10-CHIII-TRY06","THPT-G10-CHIII-TRY07",
       "THPT-G10-CHIII-TRY10","THPT-G10-CHIII-TRY08","THPT-G10-CHIII-TRY09"],
       loc+" exact five original canonical items now ordered by authentic S1 sections");
      const prompts=(await pane.locator("p").allInnerTexts()).filter(x=>x.trim().startsWith("Vận dụng."));
      assert.equal(prompts.length,5,loc+" five rendered self-trial prompts not code blocks");
      assert.equal(await pane.locator(".thpt-r4-concept-card").count(),4,loc+" B06 four source-formal theorem/formula cards");
      assert.equal(await pane.locator(".thpt-r4-knowledge-conclusion:not(.thpt-r4-concept-card)").count(),4,
       loc+" B06 four amber summaries");
      assert.equal((await groups.nth(2).locator("p").allInnerTexts()).filter(x=>x.trim().startsWith("Phân tích.")).length,4,
       loc+" four independent explained worked problems");
      const prose=await pane.innerText();
      assert(prose.toLocaleLowerCase("vi").includes("heron")&&prose.includes("ngoại tiếp")&&prose.includes("nội tiếp")&&prose.toLocaleLowerCase("vi").includes("khoảng cách"),
       loc+" coverage of cosine/sine/survey/area/radius/Heron outcomes");
      await labels.nth(1).click();
      for(const asset of ["THPT_G10_B06_COSINE_AREA_TRIANGLE_D5_R01.svg","G10_B06_SURVEY_RIGHT_TRIANGLE_R01.svg"]){
       const img=pane.locator('img[src*="'+asset+'"]');
       assert.equal(await img.count(),1,loc+" preserved source-matched B06 SVG "+asset);
       await img.scrollIntoViewIfNeeded();
       await img.evaluate(async el=>{if(el.decode)await el.decode()});
       const info=await img.evaluate(el=>{
        const figure=el.closest("figure");
        return {ready:el.complete&&el.naturalWidth>0,width:el.getBoundingClientRect().width,
         figureScroll:figure.scrollWidth>figure.clientWidth+2,
         pageOverflow:document.documentElement.scrollWidth>innerWidth+3};
       });
       assert(info.ready,loc+" B06 SVG decoded "+asset);
       assert(!info.pageOverflow,loc+" no whole-page overflow from B06 image");
       if(width<=740)assert(info.width>=755&&info.figureScroll,
        loc+" B06 narrow viewport SVG is 760px and scrolls inside figure "+asset);
      }
      await labels.nth(0).click();
     }
     if(n===1){
      const conceptBoxes=groups.nth(1).locator(".thpt-r4-knowledge-conclusion");
      assert.equal(await conceptBoxes.count(),7,loc+" B01 canonical boxed definitions and notation");
      const boxText=(await conceptBoxes.allInnerTexts()).join(" ");
      for(const key of ["Mệnh đề:","Mệnh đề chứa biến:","Mệnh đề phủ định:",
          "Mệnh đề kéo theo:","Mệnh đề đảo:","Mệnh đề tương đương:","Kí hiệu — Lượng từ:"])
        assert(boxText.includes(key),loc+" missing core S1 learner concept "+key);
      const applications=(await groups.nth(1).locator("p").allInnerTexts()).filter(x=>x.trim().startsWith("Vận dụng."));
      assert.equal(applications.length,5,loc+" five visually uniform Vận dụng prompts");
      const analyses=(await groups.nth(2).locator("p").allInnerTexts()).filter(x=>x.trim().startsWith("Phân tích."));
      assert.equal(analyses.length,4,loc+" four correctly titled analysis paragraphs before solution");
      assert(!await groups.nth(2).getByText("Vì sao chọn cách này?",{exact:true}).count(),
        loc+" never render rejected method-choice prompt");
     }
     if(n===2){
      const knowledgePane=groups.nth(1);
      const boxes=knowledgePane.locator(".thpt-r4-concept-card");
      assert.equal(await boxes.count(),13,loc+" thirteen source-aligned concept boxes");
      assert.equal(await knowledgePane.locator(".thpt-r4-knowledge-conclusion:not(.thpt-r4-concept-card)").count(),4,
        loc+" four amber memory cards");
      const ids=await knowledgePane.locator("[data-thpt-first-try-id]").evaluateAll(nodes=>nodes.map(x=>x.getAttribute("data-thpt-first-try-id")));
      assert.equal(ids.length,6,loc+" original six B02 First Tries");
      assert.equal(new Set(ids).size,6,loc+" no duplicate First Try ID");
      const texts=await knowledgePane.locator("p").allInnerTexts();
      assert.equal(texts.filter(x=>x.trim().startsWith("Vận dụng.")).length,6,
       loc+" six uniform Vận dụng titles");
      const analyses=await groups.nth(2).locator("p").allInnerTexts();
      assert.equal(analyses.filter(x=>x.trim().startsWith("Phân tích.")).length,4,
        loc+" four analysis-before-method examples");
      const diagram=knowledgePane.locator('img[src*="G10_B02_NUMBER_SETS_INCLUSION_S1_R01.svg"]');
      assert.equal(await diagram.count(),1,loc+" S1 nested number sets SVG present");
      await labels.nth(1).click(); // make lazy-loaded S1 diagram visible before checking pixels
      await page.waitForFunction(()=>{
       const image=document.querySelector('img[src*="G10_B02_NUMBER_SETS_INCLUSION_S1_R01.svg"]');
       return !!image&&image.complete&&image.naturalWidth>0;
      },null,{timeout:15000});
      await labels.nth(0).click();
     }
     const exampleTitles=(await groups.nth(2).locator("h3").allInnerTexts()).map(x=>x.trim());
     assert(exampleTitles.length>=(n===2?4:3)&&exampleTitles.every((v,i)=>v.startsWith("3."+(i+1)+". Ví dụ "+(i+1)+" —")),loc+" S1 extended worked example titles");
     // Visual consistency: every worked example has one full tinted solution,
     // and the table's headers and cells share the same column alignment.
     const solutions=groups.nth(2).locator(".thpt-g10-example-solution");
     assert.equal(await solutions.count(),exampleTitles.length,loc+" complete worked-solution panels");
     const solutionState=await solutions.evaluateAll(nodes=>nodes.map(node=>({
      starts:/^Lời giải(?:\s+theo vùng)?\./iu.test(node.firstElementChild?.textContent.trim()||""),
      background:getComputedStyle(node).backgroundColor,
      padding:parseFloat(getComputedStyle(node).paddingTop),
      originalStrong:node.firstElementChild?.querySelector(":scope > strong")?.textContent.trim()||""
     })));
     assert(solutionState.every(x=>x.starts&&x.padding>0&&x.background!=="rgba(0, 0, 0, 0)"),
      loc+" restored visually boxed solution text");
     const tableResults=await page.locator(".thpt-g10-knowledge-table").evaluateAll(tables=>tables.map(table=>{
      const header=table.querySelector("thead tr");
      const body=table.querySelector("tbody tr");
      if(!header||!body)return false;
      return [...header.cells].every((cell,i)=>{
       const data=body.cells[i];
       if(!data)return false;
       return getComputedStyle(cell).textAlign===getComputedStyle(data).textAlign &&
         getComputedStyle(data).verticalAlign==="middle";
      });
     }));
     assert(tableResults.every(Boolean),loc+" header/data table alignment");
     // MkDocs Material animates selection color; assert the settled Golden
     // reference color, not a transient interpolation during navigation.
     await page.waitForFunction(()=>{
      const label=document.querySelector(".md-content__inner .tabbed-labels > label");
      return !!label&&getComputedStyle(label).backgroundColor==="rgb(40, 77, 181)";
     },null,{timeout:4500});
     const golden=await page.evaluate(()=>{
      const root=document.querySelector(".md-content__inner");
      const sections=[...root.querySelectorAll(".tabbed-content > .tabbed-block")];
      const tabLabels=[...root.querySelectorAll(".tabbed-labels > label")];
      return {
       fourHeadings:sections.map(b=>b.querySelector(":scope > h2.thpt-g10-section-heading")?.textContent.trim()||""),
       headers:[...root.querySelectorAll(".tabbed-block > h3")].every(h=>
        getComputedStyle(h).borderLeftWidth==="4px" &&
        getComputedStyle(h).backgroundImage.includes("linear-gradient")),
       lead:root.querySelectorAll(".thpt-r4-lead").length,
       notes:root.querySelectorAll("p.thpt-r4-footnote").length,
       notesLast:sections[3].querySelectorAll("p.thpt-r4-footnote").length,
       noteText:[...root.querySelectorAll("p.thpt-r4-footnote")].map(p=>p.textContent).join(" "),
       disclosure:[...root.querySelectorAll("details.question")].every(d=>
        d.querySelector("summary")?.textContent.trim()==="Đối chiếu" &&
        getComputedStyle(d).backgroundColor==="rgb(248, 250, 255)"),
       tip:[...root.querySelectorAll("details.tip")].every(d=>
        getComputedStyle(d).backgroundColor==="rgb(248, 250, 255)"),
       firstTabBg:getComputedStyle(tabLabels[0]).backgroundColor
      };
     });
     assert.deepEqual(golden.fourHeadings,[
      "1. Khám phá kiến thức","2. Kiến thức SGK","3. Ví dụ",
      "4. Lỗi thường gặp và cách tự khắc phục"
     ],loc+" Golden HTML section bars and numbering");
     assert(golden.headers,loc+" numbered headings have pale background and blue border");
     assert.equal(golden.lead,0,loc+" redundant lead paragraph removed");
     assert.equal(golden.notes,1,loc+" only one source note for entire lesson");
     assert.equal(golden.notesLast,1,loc+" source only inside last tab");
     assert(!/Luyện tập tự đối chiếu không phải|Học liệu tự luyện không dùng/.test(golden.noteText),
      loc+" no redundant self-check disclaimer");
     assert(golden.disclosure&&golden.tip,loc+" subdued reference disclosure styling");
     assert.equal(golden.firstTabBg,"rgb(40, 77, 181)",loc+" HTML blue active tab styling");

     // Match owner HTML Golden, not Material's smaller table/disclosure fonts.
     const fontAudit=await page.evaluate(()=>{
      const article=document.querySelector(".md-content__inner");
      const reference=article.querySelector(".tabbed-block p");
      const px=el=>el?parseFloat(getComputedStyle(el).fontSize):null;
      const body=px(reference);
      const cells=[...article.querySelectorAll(".tabbed-block table th,.tabbed-block table td")].map(px);
      const folds=[...article.querySelectorAll(".tabbed-block details.question")];
      const summaries=folds.map(d=>px(d.querySelector("summary")));
      const inside=folds.flatMap(d=>[...d.querySelectorAll("p")].map(px));
      const callouts=[...article.querySelectorAll(".thpt-r4-knowledge-conclusion")].map(x=>({
       background:getComputedStyle(x).backgroundColor,
       left:getComputedStyle(x).borderLeftColor,
       concept:x.classList.contains("thpt-r4-concept-card")
      }));
      const labels=[...article.querySelectorAll(".tabbed-set > .tabbed-labels > label")];
      return {body,cells,summaries,inside,callouts,
       buttons:labels.map(l=>({height:l.getBoundingClientRect().height,font:px(l),width:l.getBoundingClientRect().width}))};
     });
     assert(fontAudit.body>0,loc+" normal text reference measurable");
     assert(fontAudit.cells.every(px=>Math.abs(px-fontAudit.body)<.6),loc+" all table fonts match normal text");
     assert(fontAudit.summaries.every(px=>Math.abs(px-fontAudit.body)<.6),
      loc+" Đối chiếu label same normal-text size");
     assert(fontAudit.inside.every(px=>Math.abs(px-fontAudit.body)<.6),
      loc+" revealed answer text same normal-text size");
     assert(fontAudit.callouts.length>0,loc+" concept or memory callouts exist");
     if(n===1){
      assert.equal(fontAudit.callouts.length,7,loc+" exactly seven S1 concept/notation boxes");
      assert(fontAudit.callouts.every(c=>c.background==="rgb(232, 247, 242)"&&c.left==="rgb(8, 125, 105)"),
       loc+" B01 teal S1 definitions distinct from amber memory box (light mode)");
      const scheme=await page.evaluate(()=>document.body.getAttribute("data-md-color-scheme"));
      await page.evaluate(()=>document.body.setAttribute("data-md-color-scheme","slate"));
      const dark=await groups.nth(1).locator(".thpt-r4-knowledge-conclusion")
       .evaluateAll(nodes=>nodes.map(el=>({
        bg:getComputedStyle(el).backgroundColor,
        left:getComputedStyle(el).borderLeftColor
       })));
      assert(dark.length===7&&dark.every(c=>c.bg==="rgb(25, 61, 54)"&&c.left==="rgb(118, 223, 199)"),
       loc+" B01 concept boxes use slate teal theme");
      await page.evaluate(old=>{
       if(old===null)document.body.removeAttribute("data-md-color-scheme");
       else document.body.setAttribute("data-md-color-scheme",old);
      },scheme);
     }else if(n===2){
      const concepts=fontAudit.callouts.filter(c=>c.concept);
      const memory=fontAudit.callouts.filter(c=>!c.concept);
      assert.equal(concepts.length,13,loc+" thirteen S1 definition cards in layout");
      assert.equal(memory.length,4,loc+" original four amber memory cards");
      assert(concepts.every(c=>c.background==="rgb(232, 247, 242)"&&c.left==="rgb(8, 125, 105)"),
       loc+" B02 concepts teal in light mode");
      assert(memory.every(c=>c.background==="rgb(255, 243, 213)"&&c.left==="rgb(196, 154, 55)"),
       loc+" B02 memory cards amber in light mode");
      const old=await page.evaluate(()=>document.body.getAttribute("data-md-color-scheme"));
      await page.evaluate(()=>document.body.setAttribute("data-md-color-scheme","slate"));
      const cards=await groups.nth(1).locator(".thpt-r4-knowledge-conclusion").evaluateAll(nodes=>nodes.map(x=>({
       bg:getComputedStyle(x).backgroundColor,left:getComputedStyle(x).borderLeftColor,
       concept:x.classList.contains("thpt-r4-concept-card")
      })));
      assert(cards.filter(c=>c.concept).every(c=>c.bg==="rgb(25, 61, 54)"&&c.left==="rgb(118, 223, 199)"),
       loc+" B02 slate teal definitions");
      assert(cards.filter(c=>!c.concept).every(c=>c.bg==="rgb(74, 58, 37)"&&c.left==="rgb(214, 170, 73)"),
       loc+" B02 slate amber reminders");
      await page.evaluate(v=>{if(v===null)document.body.removeAttribute("data-md-color-scheme");else document.body.setAttribute("data-md-color-scheme",v);},old);
     }else if(n===3){
      const concept=fontAudit.callouts.filter(x=>x.concept);
      const memory=fontAudit.callouts.filter(x=>!x.concept);
      assert.equal(concept.length,4,loc+" four distinct teal concepts");
      assert.equal(memory.length,3,loc+" three amber recaps");
      assert(concept.every(x=>x.background==="rgb(232, 247, 242)"&&x.left==="rgb(8, 125, 105)"),
       loc+" B03 definition teal in light mode");
      assert(memory.every(x=>x.background==="rgb(255, 243, 213)"&&x.left==="rgb(196, 154, 55)"),
       loc+" B03 recap amber in light mode");
      const old=await page.evaluate(()=>document.body.getAttribute("data-md-color-scheme"));
      await page.evaluate(()=>document.body.setAttribute("data-md-color-scheme","slate"));
      const cards=await groups.nth(1).locator(".thpt-r4-knowledge-conclusion").evaluateAll(nodes=>nodes.map(x=>({
       bg:getComputedStyle(x).backgroundColor,left:getComputedStyle(x).borderLeftColor,
       concept:x.classList.contains("thpt-r4-concept-card")
      })));
      assert(cards.filter(x=>x.concept).every(x=>x.bg==="rgb(25, 61, 54)"&&x.left==="rgb(118, 223, 199)"),
       loc+" B03 slate teal definitions");
      assert(cards.filter(x=>!x.concept).every(x=>x.bg==="rgb(74, 58, 37)"&&x.left==="rgb(214, 170, 73)"),
       loc+" B03 slate amber reminders");
      await page.evaluate(v=>{if(v===null)document.body.removeAttribute("data-md-color-scheme");else document.body.setAttribute("data-md-color-scheme",v);},old);
     }else if(n===4){
      const concept=fontAudit.callouts.filter(x=>x.concept),memory=fontAudit.callouts.filter(x=>!x.concept);
      assert.equal(concept.length,2,loc+" B04 two concept boxes");
      assert.equal(memory.length,3,loc+" B04 three memory boxes");
      assert(concept.every(x=>x.background==="rgb(232, 247, 242)"&&x.left==="rgb(8, 125, 105)"),loc+" B04 teal concept light");
      assert(memory.every(x=>x.background==="rgb(255, 243, 213)"&&x.left==="rgb(196, 154, 55)"),loc+" B04 amber memory light");
      const saved=await page.evaluate(()=>document.body.getAttribute("data-md-color-scheme"));
      await page.evaluate(()=>document.body.setAttribute("data-md-color-scheme","slate"));
      const dark=await groups.nth(1).locator(".thpt-r4-knowledge-conclusion").evaluateAll(nodes=>nodes.map(x=>({
       concept:x.classList.contains("thpt-r4-concept-card"),bg:getComputedStyle(x).backgroundColor,left:getComputedStyle(x).borderLeftColor
      })));
      assert(dark.filter(x=>x.concept).every(x=>x.bg==="rgb(25, 61, 54)"&&x.left==="rgb(118, 223, 199)"),loc+" B04 teal slate");
      assert(dark.filter(x=>!x.concept).every(x=>x.bg==="rgb(74, 58, 37)"&&x.left==="rgb(214, 170, 73)"),loc+" B04 amber slate");
      await page.evaluate(v=>{if(v===null)document.body.removeAttribute("data-md-color-scheme");else document.body.setAttribute("data-md-color-scheme",v);},saved);
     }else if(n===5){
      const concept=fontAudit.callouts.filter(x=>x.concept),memory=fontAudit.callouts.filter(x=>!x.concept);
      assert.equal(concept.length,3,loc+" three S1 B05 formal concept boxes");
      assert.equal(memory.length,2,loc+" two remaining amber recap boxes");
      assert(concept.every(x=>x.background==="rgb(232, 247, 242)"&&x.left==="rgb(8, 125, 105)"),
       loc+" B05 concept teal, only on B05");
      assert(memory.every(x=>x.background==="rgb(255, 243, 213)"&&x.left==="rgb(196, 154, 55)"),
       loc+" B05 amber reminders");
      const saved=await page.evaluate(()=>document.body.getAttribute("data-md-color-scheme"));
      await page.evaluate(()=>document.body.setAttribute("data-md-color-scheme","slate"));
      const dark=await groups.nth(1).locator(".thpt-r4-knowledge-conclusion").evaluateAll(nodes=>nodes.map(x=>({
       concept:x.classList.contains("thpt-r4-concept-card"),
       bg:getComputedStyle(x).backgroundColor,left:getComputedStyle(x).borderLeftColor
      })));
      assert(dark.filter(x=>x.concept).every(x=>x.bg==="rgb(25, 61, 54)"&&x.left==="rgb(118, 223, 199)"),
       loc+" B05 formal concepts slate teal");
      assert(dark.filter(x=>!x.concept).every(x=>x.bg==="rgb(74, 58, 37)"&&x.left==="rgb(214, 170, 73)"),
       loc+" B05 recap slate amber");
      await page.evaluate(v=>{if(v===null)document.body.removeAttribute("data-md-color-scheme");else document.body.setAttribute("data-md-color-scheme",v);},saved);
     }else if(n===6){
      const defs=fontAudit.callouts.filter(x=>x.concept),memory=fontAudit.callouts.filter(x=>!x.concept);
      assert.equal(defs.length,4,loc+" B06 four formal source-based cards");
      assert.equal(memory.length,4,loc+" B06 four amber recaps");
      assert(defs.every(x=>x.background==="rgb(232, 247, 242)"&&x.left==="rgb(8, 125, 105)"),
       loc+" B06 teal concepts light");
      assert(memory.every(x=>x.background==="rgb(255, 243, 213)"&&x.left==="rgb(196, 154, 55)"),
       loc+" B06 amber recaps light");
      const saved=await page.evaluate(()=>document.body.getAttribute("data-md-color-scheme"));
      await page.evaluate(()=>document.body.setAttribute("data-md-color-scheme","slate"));
      const dark=await groups.nth(1).locator(".thpt-r4-knowledge-conclusion").evaluateAll(nodes=>nodes.map(x=>({
       concept:x.classList.contains("thpt-r4-concept-card"),bg:getComputedStyle(x).backgroundColor,
       left:getComputedStyle(x).borderLeftColor
      })));
      assert(dark.filter(x=>x.concept).every(x=>x.bg==="rgb(25, 61, 54)"&&x.left==="rgb(118, 223, 199)"),
       loc+" B06 slate teal math");
      assert(dark.filter(x=>!x.concept).every(x=>x.bg==="rgb(74, 58, 37)"&&x.left==="rgb(214, 170, 73)"),
       loc+" B06 slate amber recap"); 
      await page.evaluate(v=>{if(v===null)document.body.removeAttribute("data-md-color-scheme");
       else document.body.setAttribute("data-md-color-scheme",v);},saved);
     }
     assert(fontAudit.buttons.every(b=>b.height>=42&&b.height<=52),
      loc+" compact original-HTML tab height");
     // Actual TOC interaction (including hidden sidebar at phone width):
     // click a heading of tab 2 while tab 3 is active, then reverse.
     const sgkId=await groups.nth(1).locator("h3[id]").first().getAttribute("id");
     const exId=await groups.nth(2).locator("h3[id]").first().getAttribute("id");
     for(const [from,to,id] of [[2,1,sgkId],[1,2,exId]]){
      await labels.nth(from).click();
      const link=page.locator('.md-sidebar--secondary a[href="#'+id+'"]').first();
      assert.equal(await link.count(),1,loc+" TOC anchor "+id+" exists");
      await link.evaluate(a=>a.click()); // works when mobile TOC is collapsed
      await page.waitForFunction(x=>{
       const target=document.getElementById(x);
       return !!target&&target.getBoundingClientRect().height>0;
      },id);
      assert(await groups.nth(to).isVisible(),loc+" TOC navigates to hidden tab "+(to+1));
      assert.equal(new URL(page.url()).hash,"#"+id,loc+" TOC maintains deep-link history");
     }
     // Direct #deep-links and browser back must restore the correct tab.
     await page.evaluate(id=>{window.location.hash="#"+id;},sgkId);
     await page.waitForFunction(id=>document.getElementById(id)?.getBoundingClientRect().height>0,sgkId);
     assert(await groups.nth(1).isVisible(),loc+" hashchange activates Knowledge tab");
     const mistakes=groups.nth(3).locator(":scope > details.tip > summary");
     assert((await mistakes.count())>=2,loc+" original remediation folds");
     const mistakeTitles=(await mistakes.allInnerTexts()).map(x=>x.trim());
     assert(mistakeTitles.every((v,i)=>v.startsWith("4."+(i+1)+". ")),loc+" 4.x mistake labels");
     const source=fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-"+ch(n)+"/bai-"+n+".md"),"utf8");
     for(const key of ["data-thpt-first-try-id","data-thpt-help-id"]){
      const exp=[...source.matchAll(new RegExp(key+'="([^"]+)"',"g"))].map(m=>m[1]).sort();
      const got=(await page.locator("["+key+"]").evaluateAll((elements,k)=>elements.map(e=>e.getAttribute(k)),key)).sort();
      assert.deepEqual(got,exp,loc+" "+key+" parity");
     }
     if(n===4||n===5||n===6){
      const radios=tabs.locator(':scope > input[type="radio"]');
      await labels.nth(0).click();
      await labels.nth(0).focus();
      await page.keyboard.press("ArrowRight");
      assert(await radios.nth(1).isChecked()&&await groups.nth(1).isVisible(),loc+" ArrowRight selects SGK tab");
      await page.keyboard.press("ArrowLeft");
      assert(await radios.nth(0).isChecked()&&await groups.nth(0).isVisible(),loc+" ArrowLeft selects Discovery tab");
      assert.equal(await page.evaluate(lesson=>document.querySelector(".md-content__inner").dataset[
       lesson===4?"g10B04KeyboardTabs":lesson===5?"g10B05KeyboardTabs":"g10B06KeyboardTabs"],n),"true",
       loc+" B04/B05/B06 route-scoped keyboard handling");
     }
     for(let t=0;t<4;t++){
      await labels.nth(t).click();
      assert(await groups.nth(t).isVisible(),loc+" tab "+(t+1)+" actually opens");
     }
     assert.equal(await tabs.locator("details.question[open]").count(),0,loc+" no pre-revealed formative answer");
     assert.equal(await page.locator("[data-g10-chapter-selfcheck]").count(),0,loc+" no RD1 readiness mounted in Knowledge");
     const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+3);
     assert(!overflow,loc+" whole-page overflow");
     passed++;
     console.log("PASS "+loc+" four compact HTML tabs, framed headings, quiet disclosures, single footer, source/answer safety");
    }
   }finally{await page.close();}
  }
 }finally{await browser.close();}
 assert.equal(passed,18);
 console.log("PASS 18/18 real browser cases G10 B01-B06 (390/820/1440). B01 owner P2 R02 SHA chain, B02–B06 and CSS/config immutable; no answer-key/backend/deploy mutation.");
})().catch(e=>{console.error(e);process.exitCode=1});
