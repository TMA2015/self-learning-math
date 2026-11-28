#!/usr/bin/env node
"use strict";
/*
 * Release QA impact classifier. Scope decides TEST BREADTH, never content/PED PASS.
 * Unknown/mixed paths fail CLOSED to the existing broad Roadmap/R4 risk gate.
 * Full-suite workflows remain available on relevant shared changes/manual run.
 */
const assert=require("node:assert/strict"),fs=require("node:fs");
const LESSON=/^docs\/thpt-preview\/sgk\/(?:(?:lop-11|lop-12)\/)?chuong-(?:i|ii|iii|iv|v|vi|vii|viii|ix)\/bai-[1-9]\d*\.md$/;
const CHAPTER_PAGE=/^docs\/thpt-preview\/sgk\/(?:(?:lop-11|lop-12)\/)?(?:chuong-(?:i|ii|iii|iv|v|vi|vii|viii|ix)\/(?:luyen-tap|tu-kiem-tra-chuong)\.md|chuong-(?:i|ii|iii|iv|v|vi|vii|viii|ix)\.md)$/;
const CANONICAL_PAGE=p=>LESSON.test(p)||CHAPTER_PAGE.test(p);
const RECEIPT=/^prototypes\/thpt\/ux795\/[A-Za-z0-9_.-]+\.md$/;
const SOURCE_TEST=/^scripts\/(?:test-(?:g10-|thpt-g10-|thpt-q18-g10-|ux795-g10-)[A-Za-z0-9_.-]+|thpt-q18-g10-source-receipt)\.cjs$/;
const FIGURE=/^docs\/assets\/images\/thpt\/[A-Za-z0-9_.-]+\.(?:svg|png|jpg|webp)$/i;

// Workflow-only release-routing repairs are CI metadata, not a reason to run
// hundreds of already-unchanged lessons. The scoped B14 browser smoke and
// deploy-scope safety fixtures still run; combined site+workflow edits stay FULL.
const CI_ROUTING_ONLY=new Set([
 ".github/workflows/deploy.yml",
 ".github/workflows/g10-chiv-golden-qa.yml",
 ".github/workflows/g10-chv-golden-preview-qa.yml",
 ".github/workflows/g10-chvi-s1-editorial-golden-qa.yml",
 ".github/workflows/g10-chvii-s1-golden-qa.yml",
 ".github/workflows/ux795-g10-draft-render-qa.yml",
 ".github/workflows/thpt-sgk-canonical-cleanup-qa.yml",
 ".github/workflows/thpt-scoped-release-qa.yml",
 ".github/workflows/thpt-r4-preview-quality.yml",
 ".github/workflows/thpt-deploy-scope-safety-qa.yml",
 ".github/workflows/thpt-topic-rw1-math-qa.yml",
 ".github/workflows/qa-pr.yml",
 "scripts/test-thpt-release-impact.cjs",
 "scripts/test-thpt-scoped-deploy-proof.cjs",
 // Source-locked QA repairs contain NO learner/runtime changes; run their exact
 // source tests plus B14 Chromium smoke, never the THCS-wide browser suite.
 "scripts/test-thpt-ap-vector-knowledge-parity.cjs",
 "scripts/test-thpt-chvi-student-notes.cjs",
 // This changes test semantics only. It MUST NOT be mixed with learner content,
 // and the scoped B14 browser smoke remains mandatory on CI-only PRs.
 "scripts/test-thpt-scoped-lesson-browser.cjs"
]);
const B16_LESSON="docs/thpt-preview/sgk/chuong-vi/bai-16.md";
const B16_ALLOWED=new Set([
 "docs/thpt-preview/sgk/chuong-vi/bai-16.md",
 "docs/thpt-preview/sgk/core/ham-so-bac-hai.md",
 "docs/thpt-preview/thu-vien/tu-luan.md",
 "docs/assets/javascripts/thpt-r4-preview.js",
 "docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css",
 "prototypes/thpt/shared-items/thpt-g10-chvi-reviewed-public-placement-v1.cjs",
 "prototypes/thpt/ux795/G10_CHVI_B16_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261119.md",
 ".github/workflows/ux795-g10-draft-render-qa.yml",
 ".github/workflows/qa-pr.yml",
 ".github/workflows/thpt-r4-preview-quality.yml",
 "scripts/test-thpt-release-impact.cjs",
 "scripts/test-g10-b15-golden-css-source.cjs",
 "scripts/test-g10-b15-p2-editorial-delta.cjs",
 "scripts/test-g10-chvi-editorial-source.cjs",
 "scripts/test-thpt-chvi-reviewed-formative.cjs",
 "scripts/test-thpt-chvi-reviewed-knowledge-parity.cjs",
 "scripts/test-thpt-r4-preview-browser.js",
 "scripts/test-ux795-g10-chvi-ped-mapping.cjs",
 "scripts/test-ux795-g10-chvi-worked-math.cjs",
 "scripts/test-ux795-g10-postmerge-headings.cjs",
 "scripts/thpt-q18-g10-source-receipt.cjs"
]);
function b16RuntimeIsIsolated(){
 const crypto=require("node:crypto"),filename="docs/assets/javascripts/thpt-r4-preview.js";
 if(!fs.existsSync(filename))return false;
 let s=fs.readFileSync(filename,"utf8");
 const a=s.indexOf(" function initB16CanonicalBank(){"),b=s.indexOf(" function init() {",a+1);
 if(a<0||b<0)return false;
 s=s.slice(0,a)+s.slice(b);
 const edits=[
 ["  initB16CanonicalBank();\n",""],
 ['"b16-practice":["../../core/ham-so-bac-hai/","[data-thpt-practice]"]','"b16-practice":["../../../chuyen-de/ham-so/luyen-tap/","[data-thpt-practice]"]'],
 ["// B16 imports its ONE SGK canonical Core/Practice bank; Topic demos are independent.","// B16 uses the ORIGINAL exercise markup from existing SGK Core/Topic Practice URLs."]
 ];
 for(const [from,to] of edits){if(s.split(from).length!==2)return false;s=s.replace(from,to)}
 const bytes=Buffer.from(s),sha=crypto.createHash("sha1").update("blob "+bytes.length+"\0").update(bytes).digest("hex");
 // Owner-approved retired-topic launcher now links only to 22 canonical Topics;
 // hash recomputed after stripping the entire B16 adapter and normalizing its legacy link.
 return ["d847e412bbc1bc10e62620965312ae0d327a0907","7142b0311c23bfce8474537e2c80f495b07898b0"].includes(sha);
}
/* W3 CĐ12–15 is an owner-authorized, separately QA-gated Topic-only wave.
 * Explicit original-file allowlist includes ONLY new Topic pages/assets and
 * their navigation/router/test metadata. No shared Golden/SGK/THCS runtime.
 * This is intentionally a single immutable wave, not a generic bypass. */
const W3_EXACT_SCOPE_FILES=new Set([
 ".github/workflows/thpt-topic-w3-golden-release-qa.yml",
 "docs/assets/javascripts/thpt-topic-w3-golden-v1.js",
 "docs/assets/visuals/FIG_G11_CHIV_B10_SHARED_R01.svg",
 "docs/assets/visuals/FIG_G11_CHIV_B11_SHARED_R01.svg",
 "docs/assets/visuals/FIG_G11_CHIV_B12_SHARED_R01.svg",
 "docs/assets/visuals/FIG_G11_CHIV_B13_SHARED_R01.svg",
 "docs/assets/visuals/FIG_G11_CHIV_B14_SHARED_R01.svg",
 "docs/thpt-preview/chuyen-de/cd11/kien-thuc.md",
 "docs/thpt-preview/chuyen-de/cd11/luyen-tap.md",
 "docs/thpt-preview/chuyen-de/cd11/tu-kiem-tra.md",
 "docs/thpt-preview/chuyen-de/cd12/kien-thuc.md",
 "docs/thpt-preview/chuyen-de/cd12/luyen-tap.md",
 "docs/thpt-preview/chuyen-de/cd12/tu-kiem-tra.md",
 "docs/thpt-preview/chuyen-de/cd13/kien-thuc.md",
 "docs/thpt-preview/chuyen-de/cd13/luyen-tap.md",
 "docs/thpt-preview/chuyen-de/cd13/tu-kiem-tra.md",
 "docs/thpt-preview/chuyen-de/cd14/kien-thuc.md",
 "docs/thpt-preview/chuyen-de/cd14/luyen-tap.md",
 "docs/thpt-preview/chuyen-de/cd14/tu-kiem-tra.md",
 "docs/thpt-preview/chuyen-de/cd15/kien-thuc.md",
 "docs/thpt-preview/chuyen-de/cd15/luyen-tap.md",
 "docs/thpt-preview/chuyen-de/cd15/tu-kiem-tra.md",
 "docs/thpt-preview/chuyen-de/index.md",
 "mkdocs.thpt-preview.yml",
 "mkdocs.yml",
 "prototypes/thpt/release-queue/W3_CD12_15_SOURCE_INTAKE_20261122.json",
 "scripts/test-thpt-golden-ui-release-boundary.cjs",
 "scripts/test-thpt-r4-search-browser.cjs",
 "scripts/test-thpt-topic-knowledge-tabs-v3.cjs",
 "scripts/test-thpt-topic-w3-golden-browser.py",
 "scripts/test-thpt-topic-w3-source-locked.py",
 "scripts/test-thpt-release-impact.cjs",
 ".github/workflows/deploy.yml",
 ".github/workflows/thpt-deploy-scope-safety-qa.yml"
]);
/* OWNER CĐ06–15 postpublish maintenance: strictly fixed UI/MathJax scope. */
const TOPIC_W2_W3_HOTFIX_FILES=new Set([
 ...["06","07","08","09","10","11","12","13","14","15"].map(n=>"docs/thpt-preview/chuyen-de/cd"+n+"/kien-thuc.md"),
 "docs/assets/javascripts/thpt-topic-w3-golden-v1.js",
 "scripts/test-thpt-topic-w2-golden-browser.py",
 "scripts/test-thpt-topic-w3-golden-browser.py",
 "scripts/test-thpt-release-impact.cjs",
 ".github/workflows/deploy.yml",
 ".github/workflows/thpt-deploy-scope-safety-qa.yml"
]);
function isScopedTopicW2W3Hotfix(files){
 if(files.length!==TOPIC_W2_W3_HOTFIX_FILES.size||
    new Set(files).size!==files.length||
    !files.every(p=>TOPIC_W2_W3_HOTFIX_FILES.has(p)))return false;
 try{
  for(const n of ["06","07","08","09","10","11","12","13","14","15"]){
   const s=fs.readFileSync("docs/thpt-preview/chuyen-de/cd"+n+"/kien-thuc.md","utf8");
   if(!s.includes('topic-w1-source-intro" hidden aria-hidden="true"')||
      s.includes("tự làm Vận dụng trước khi mở Đối chiếu")||
      s.includes("tự thử trước khi mở Đối chiếu"))return false;
  }
  const js=fs.readFileSync("docs/assets/javascripts/thpt-topic-w3-golden-v1.js","utf8");
  return js.includes("recovered-display")&&js.includes("const normalizeRenderedMath");
 }catch{return false}
}

const W3_SOURCE_HEADS={
 "12":"f773f2622c88bd3e3a1e0137613846a83b3e6629",
 "13":"7bd211326e4f644a94e1dfad7868c03e1c415adb",
 "14":"d3c54d3867e6e831d6968a81d9c24d9d6b219363",
 "15":"c1be91f17044d89474d6399308385b4f1fbc7aeb"
};
function isExactW3TopicWave(files){
 if(files.length!==W3_EXACT_SCOPE_FILES.size||new Set(files).size!==files.length||
   !files.every(p=>W3_EXACT_SCOPE_FILES.has(p)))return false;
 const manifestPath="prototypes/thpt/release-queue/W3_CD12_15_SOURCE_INTAKE_20261122.json";
 if(!fs.existsSync(manifestPath))return false;
 try{
  const m=JSON.parse(fs.readFileSync(manifestPath,"utf8"));
  if(m.wave!=="W3"||Object.keys(m.topics||{}).sort().join(",")!=="12,13,14,15")return false;
  return Object.entries(W3_SOURCE_HEADS).every(([n,sha])=>{
   const t=m.topics[n];return t&&t.sourceBlob===sha&&/^[0-9a-f]{40}$/.test(t.q18ReceiptBlob)&&
    t.items>0&&t.replay>0&&t.outcomes>0;
  });
 }catch{return false}
}

/* W5 CĐ19–22: only the exact 38-file source-locked, browser-verified
 * owner-scoped release may use the W5 deploy lane. Unknown/shared/mixed
 * changes fail closed to FULL; no waiver of Q15/Q16/GIT/QA or owner authority. */
const W5_EXACT_SCOPE_FILES=new Set([
 ".github/workflows/deploy.yml",
 ".github/workflows/thpt-deploy-scope-safety-qa.yml",
 ".github/workflows/thpt-topic-w5-golden-release-qa.yml",
 ".github/workflows/thpt-topic-w5-source-intake-qa.yml",
 "docs/assets/images/thpt/FIG-TOP19-B23-ADD-MULTIPLY-WHITE-R00.svg",
 "docs/assets/images/thpt/FIG-TOP19-B23-TWO_STAGE_TREE_WHITE_R00.svg",
 "docs/assets/images/thpt/FIG-TOP19-B24-ORDER-GROUP-WHITE-R00.svg",
 "docs/assets/images/thpt/FIG-TOP19-B25-PASCAL-WHITE-R00.svg",
 "docs/assets/images/thpt/FIG-TOP20-G10-B27_TWO_TOSSES_TREE_WHITE_R00.svg",
 "docs/assets/images/thpt/FIG-TOP20-G11-B28-B29_VENN_WHITE_R00.svg",
 "docs/assets/images/thpt/FIG-TOP21_ROUTE_TREE_3_5_2_5_R01.svg",
 "docs/assets/images/thpt/FIG-TOP21_TOTAL_PROBABILITY_30_70_TREE_WHITE_R01.svg",
 "docs/assets/images/thpt/Temp_STATISTICS_BOX_OUTLIER_R00_20261111.svg",
 "docs/assets/images/thpt/Temp_STATISTICS_GROUPED_FREQ_R00_20261111.svg",
 "docs/assets/javascripts/thpt-topic-w5-golden-v1.js",
 "docs/thpt-preview/chuyen-de/cd18/kien-thuc.md",
 "docs/thpt-preview/chuyen-de/cd18/luyen-tap.md",
 "docs/thpt-preview/chuyen-de/cd18/tu-kiem-tra.md",
 "docs/thpt-preview/chuyen-de/cd19/kien-thuc.md",
 "docs/thpt-preview/chuyen-de/cd19/luyen-tap.md",
 "docs/thpt-preview/chuyen-de/cd19/tu-kiem-tra.md",
 "docs/thpt-preview/chuyen-de/cd20/kien-thuc.md",
 "docs/thpt-preview/chuyen-de/cd20/luyen-tap.md",
 "docs/thpt-preview/chuyen-de/cd20/tu-kiem-tra.md",
 "docs/thpt-preview/chuyen-de/cd21/kien-thuc.md",
 "docs/thpt-preview/chuyen-de/cd21/luyen-tap.md",
 "docs/thpt-preview/chuyen-de/cd21/tu-kiem-tra.md",
 "docs/thpt-preview/chuyen-de/cd22/kien-thuc.md",
 "docs/thpt-preview/chuyen-de/cd22/luyen-tap.md",
 "docs/thpt-preview/chuyen-de/cd22/tu-kiem-tra.md",
 "docs/thpt-preview/chuyen-de/index.md",
 "mkdocs.thpt-preview.yml",
 "mkdocs.yml",
 "prototypes/thpt/release-queue/W5_CD19_22_SOURCE_INTAKE_20261123.json",
 "scripts/test-thpt-release-impact.cjs",
 "scripts/test-thpt-topic-w5-golden-browser.py",
 "scripts/test-thpt-topic-w5-source-intake.py",
 "scripts/test-thpt-topic-w5-source-locked.py"
]);
const W5_SOURCE_HEADS={"19":"2faa5d797eb16020d21673c572c443f1cb7acb41","20":"b40b01cfbd89e3fd3cc4fe75adb599f55df2a3d9","21":"e526468f2452221e08070fc96e3a64d42ad5c8f9","22":"7ac79e5ed705a5ce482c3d9c42a4451e659e1109"};
function isExactW5TopicWave(files){
 if(files.length!==W5_EXACT_SCOPE_FILES.size||new Set(files).size!==files.length||
    !files.every(p=>W5_EXACT_SCOPE_FILES.has(p)))return false;
 try{
  const m=JSON.parse(fs.readFileSync("prototypes/thpt/release-queue/W5_CD19_22_SOURCE_INTAKE_20261123.json","utf8"));
  if(m.wave!=="W5"||m.standard!=="SLM-THPT-QUALITY-ONE v3.2.0 Q01–Q18"||
     m.assessment!=="PUBLIC_REPLAY_ONLY / CLIENT_SELF_CHECK_NO_MASTERY; not independent TOPIC_READINESS"||
     Object.keys(m.topics||{}).sort().join(",")!=="19,20,21,22"||
     m.totals?.outcomes!==78||m.totals?.practice!==187||
     m.totals?.q15Canonical!==239||m.totals?.replay!==35||
     m.totals?.sourceSVGCount!==10||m.totals?.plannedPages!==12)return false;
  const js=fs.readFileSync("docs/assets/javascripts/thpt-topic-w5-golden-v1.js","utf8");
  if(!js.includes("PUBLIC_REPLAY_ONLY")||!js.includes('credentials:"omit"')||
     /localStorage|sessionStorage|setDoc\(|sendBeacon|WebSocket\(/.test(js))return false;
  let totalSVG=0;
  for(const [n,source] of Object.entries(W5_SOURCE_HEADS)){
   const t=m.topics[n];if(!t||t.sourceBlob!==source||
      !/^[a-f0-9]{40}$/.test(t.q18ReceiptBlob)||
      !/^[a-f0-9]{40}$/.test(t.readyBlob)||
      !/^[a-f0-9]{40}$/.test(t.authorHead))return false;
   for(const part of ["kien-thuc","luyen-tap","tu-kiem-tra"]){
    const page=fs.readFileSync("docs/thpt-preview/chuyen-de/cd"+n+"/"+part+".md","utf8");
    if(!page.includes("SOURCE_LEARNER_BLOB "+source)||
       !page.includes("Q18_RECEIPT_BLOB "+t.q18ReceiptBlob)||
       !page.includes("thpt-topic-w5-golden-v1.js"))return false;
    if(part==="tu-kiem-tra"&&
       (!page.includes("NO_MASTERY")||!page.includes("Đối chiếu")))return false;
   }
   totalSVG+=t.sourceSVGCount;
  }
  if(totalSVG!==10)return false;
  for(const name of W5_EXACT_SCOPE_FILES)
   if(name.startsWith("docs/assets/images/thpt/")&&!fs.existsSync(name))return false;
  return true;
 }catch{return false}
}

/* Exact owner-approved W5 visual formula + retired-pilot + launcher patch.
 * Any missing/extra source, shared Golden, Auth or RD1 path fails FULL. */
const W5_P1_FILES=new Set([
 ".github/workflows/deploy.yml",
 ".github/workflows/thpt-deploy-scope-safety-qa.yml",
 ".github/workflows/thpt-r4-preview-quality.yml",
 "docs/assets/javascripts/thpt-r4-preview.js",
 "docs/assets/javascripts/thpt-topic-w5-golden-v1.js",
 "docs/thpt-preview/chuyen-de/ham-so/kien-thuc.md",
 "docs/thpt-preview/chuyen-de/ham-so/luyen-tap.md",
 "docs/thpt-preview/chuyen-de/ham-so/tu-kiem-tra.md",
 "docs/thpt-preview/chuyen-de/index.md",
 "mkdocs.thpt-preview.yml",
 "mkdocs.yml",
 "scripts/test-thpt-release-impact.cjs",
 "scripts/test-thpt-topic-w5-golden-browser.py"
]);
/* Owner screenshot follow-up: exactly W5 display-only adapter and its
 * exhaustive Golden browser audit plus this classifier. Do not widen to SGK,
 * THCS, shared Golden, Firebase/Auth or authoring source/receipts. */
const W5_INLINE_AUDIT_FILES=new Set([
 "docs/assets/javascripts/thpt-topic-w5-golden-v1.js",
 "scripts/test-thpt-topic-w5-golden-browser.py",
 "scripts/test-thpt-release-impact.cjs"
]);
function isExactW5InlineAudit(files){
 if(files.length!==W5_INLINE_AUDIT_FILES.size||
   new Set(files).size!==files.length||
   !files.every(f=>W5_INLINE_AUDIT_FILES.has(f))||
   !b16RuntimeIsIsolated())return false;
 try{
  const js=fs.readFileSync("docs/assets/javascripts/thpt-topic-w5-golden-v1.js","utf8");
  const qa=fs.readFileSync("scripts/test-thpt-topic-w5-golden-browser.py","utf8");
  if(!js.includes("const inlineTex=match[0].replace(")||
     !js.includes("const fragments=")||
     !js.includes("PUBLIC_REPLAY_ONLY")||
     !js.includes('credentials:"omit"')||
     /localStorage|sessionStorage|setDoc\(|sendBeacon|WebSocket\(/.test(js)||
     !qa.includes("def audit_visible_math(")||
     !qa.includes("W5_COMPLETE_VISIBLE_MATH_AUDIT")||
     !qa.includes("audit_visible_math(card,")||
     !qa.includes("audit_visible_math(solution,"))return false;
  const manifest=JSON.parse(fs.readFileSync("prototypes/thpt/release-queue/W5_CD19_22_SOURCE_INTAKE_20261123.json","utf8"));
  if(Object.keys(manifest.topics||{}).sort().join(",")!=="19,20,21,22")return false;
  for(const [n,t]of Object.entries(manifest.topics)){
   for(const part of ["kien-thuc","luyen-tap","tu-kiem-tra"]){
    const src=fs.readFileSync("docs/thpt-preview/chuyen-de/cd"+n+"/"+part+".md","utf8");
    if(!src.includes(t.sourceBlob)||!src.includes(t.q18ReceiptBlob))return false;
   }
  }
  return true;
 }catch{return false}
}
function isExactW5P1(files){
 if(files.length!==W5_P1_FILES.size||new Set(files).size!==files.length||
    !files.every(p=>W5_P1_FILES.has(p))||!b16RuntimeIsIsolated())return false;
 try{
  const js=fs.readFileSync("docs/assets/javascripts/thpt-topic-w5-golden-v1.js","utf8");
  const launcher=fs.readFileSync("docs/assets/javascripts/thpt-r4-preview.js","utf8");
  if(!js.includes('if(t.nodeValue.includes("^")||t.nodeValue.includes("[")')||
     !js.includes("recovered-display")||!js.includes('credentials:"omit"')||
     /localStorage|sessionStorage|setDoc\(|sendBeacon/.test(js)||
     (!launcher.includes('["Danh mục 22 Chuyên đề đã phát hành","chuyen-de/"]')&&!launcher.includes('title.textContent="Toán THPT 6+1"'))||
     launcher.includes("Hàm số và đồ thị · MẪU"))return false;
  for(const part of ["kien-thuc","luyen-tap","tu-kiem-tra"]){
   const page=fs.readFileSync("docs/thpt-preview/chuyen-de/ham-so/"+part+".md","utf8");
   if(!page.includes('window.location.replace("../../")')||
      page.includes("data-thpt-practice")||page.includes("data-thpt-readiness"))return false;
  }
  if(fs.readFileSync("docs/thpt-preview/chuyen-de/index.md","utf8").includes('href="ham-so/kien-thuc/"'))return false;
  for(const y of ["mkdocs.yml","mkdocs.thpt-preview.yml"])
   if(fs.readFileSync(y,"utf8").includes("thpt-preview/chuyen-de/ham-so/"))return false;
  return true;
 }catch{return false}
}

/* W4 CĐ16–18: exact 30-path owner-instructed scoped integration.
 * Any unknown/mixed source/runtime/Auth/Firebase/SGK/THCS change fails CLOSED
 * to FULL; this exception never grants Academic/PED PASS or T5 approval. */
const W4_EXACT_SCOPE_FILES=new Set([
 ".github/workflows/deploy.yml",
 ".github/workflows/thpt-deploy-scope-safety-qa.yml",
 ".github/workflows/thpt-topic-w4-golden-release-qa.yml",
 "docs/assets/images/thpt/FIG-TOP18-B14-NORMAL-WHITE-R00.svg",
 "docs/assets/images/thpt/FIG-TOP18-B15-LINE-WHITE-R00.svg",
 "docs/assets/images/thpt/FIG-TOP18-B15-SKEW-WHITE-R00.svg",
 "docs/assets/images/thpt/FIG-TOP18-B16-LINE-PLANE-ANGLE-WHITE-R00.svg",
 "docs/assets/images/thpt/FIG-TOP18-B16-TWO-PLANES-WHITE-R00.svg",
 "docs/assets/images/thpt/FIG-TOP18-B17-SPHERE-SECTION-WHITE-R00.svg",
 "docs/assets/images/thpt/FIG-TOP18-RADAR-TRAJECTORY-OXYZ-R00.svg",
 "docs/assets/javascripts/thpt-topic-w4-golden-v1.js",
 "docs/thpt-preview/chuyen-de/cd15/kien-thuc.md",
 "docs/thpt-preview/chuyen-de/cd15/luyen-tap.md",
 "docs/thpt-preview/chuyen-de/cd15/tu-kiem-tra.md",
 "docs/thpt-preview/chuyen-de/cd16/kien-thuc.md",
 "docs/thpt-preview/chuyen-de/cd16/luyen-tap.md",
 "docs/thpt-preview/chuyen-de/cd16/tu-kiem-tra.md",
 "docs/thpt-preview/chuyen-de/cd17/kien-thuc.md",
 "docs/thpt-preview/chuyen-de/cd17/luyen-tap.md",
 "docs/thpt-preview/chuyen-de/cd17/tu-kiem-tra.md",
 "docs/thpt-preview/chuyen-de/cd18/kien-thuc.md",
 "docs/thpt-preview/chuyen-de/cd18/luyen-tap.md",
 "docs/thpt-preview/chuyen-de/cd18/tu-kiem-tra.md",
 "docs/thpt-preview/chuyen-de/index.md",
 "mkdocs.thpt-preview.yml",
 "mkdocs.yml",
 "prototypes/thpt/release-queue/W4_CD16_18_SOURCE_INTAKE_20261123.json",
 "scripts/test-thpt-release-impact.cjs",
 "scripts/test-thpt-topic-w4-golden-browser.py",
 "scripts/test-thpt-topic-w4-source-locked.py"
]);
const W4_SOURCE_HEADS={
 "16":"1d45c826ca9fc2aa9fc9ef65797620c97d8f8f84",
 "17":"0ef0ad696e97d2549f29c5a22ba675970572a089",
 "18":"d8f30dc5a62b1706e5464e5a7b3b52b15e5bd960"
};
function isExactW4TopicWave(files){
 if(files.length!==W4_EXACT_SCOPE_FILES.size||
    new Set(files).size!==files.length||
    !files.every(p=>W4_EXACT_SCOPE_FILES.has(p)))return false;
 const manifest="prototypes/thpt/release-queue/W4_CD16_18_SOURCE_INTAKE_20261123.json";
 try{
  const m=JSON.parse(fs.readFileSync(manifest,"utf8"));
  if(m.wave!=="W4"||m.standard!=="SLM-THPT-QUALITY-ONE v3.2.0 Q01-Q18"||
     m.assessmentMode!=="PUBLIC_REPLAY_ONLY / CLIENT_SELF_CHECK_NO_MASTERY; independent TOPIC_READINESS not included"||
     Object.keys(m.topics||{}).sort().join(",")!=="16,17,18")return false;
  const total=Object.values(m.topics);
  if(total.reduce((n,t)=>n+t.outcomes,0)!==73||
     total.reduce((n,t)=>n+t.items,0)!==309||
     total.reduce((n,t)=>n+t.replay,0)!==28)return false;
  const js=fs.readFileSync("docs/assets/javascripts/thpt-topic-w4-golden-v1.js","utf8");
  if(!js.includes("PUBLIC_REPLAY_ONLY")||!js.includes('credentials:"omit"')||
     /localStorage|sessionStorage|setDoc\(|sendBeacon|WebSocket\(/.test(js))return false;
  for(const [n,sha] of Object.entries(W4_SOURCE_HEADS)){
    const t=m.topics[n];
    if(!t||t.sourceBlob!==sha||!/^[a-f0-9]{40}$/.test(t.q18ReceiptBlob)||
       !/^[a-f0-9]{40}$/.test(t.authorHead)||
       !Array.isArray(t.svg)||!t.svg.length)return false;
    for(const part of ["kien-thuc","luyen-tap","tu-kiem-tra"]){
      const page=fs.readFileSync("docs/thpt-preview/chuyen-de/cd"+n+"/"+part+".md","utf8");
      if(!page.includes("SOURCE_LEARNER_BLOB "+sha)||
         !page.includes("Q18_RECEIPT_BLOB "+t.q18ReceiptBlob)||
         !page.includes("thpt-topic-w4-golden-v1.js"))return false;
      if(part==="tu-kiem-tra"&&(!page.includes("PUBLIC_REPLAY_ONLY")||
         !page.includes("NO_MASTERY")))return false;
    }
    for(const name of t.svg)if(!fs.existsSync("docs/assets/images/thpt/"+name))return false;
  }
  return true;
 }catch{return false}
}

// One-time post-merge W3 workflow-quote repair: only the original signed
// W3 bundle, exact three-file recovery diff and a comment-only UI touch.
// Shared/SGK/THCS/runtime changes remain FULL, no generic path wildcard.
const W3_RECOVERY_FILES=new Set([
 ".github/workflows/deploy.yml",
 "scripts/test-thpt-release-impact.cjs",
 "docs/assets/javascripts/thpt-topic-w3-golden-v1.js"
]);
function isSignedW3Recovery(files){
 if(files.length!==W3_RECOVERY_FILES.size||
    new Set(files).size!==files.length||
    !files.every(x=>W3_RECOVERY_FILES.has(x)))return false;
 if(!isExactW3TopicWave([...W3_EXACT_SCOPE_FILES]))return false;
 const path="docs/assets/javascripts/thpt-topic-w3-golden-v1.js";
 if(!fs.existsSync(path))return false;
 const marker="/* W3_RELEASE_DEPLOY_RECOVERY_20261122: comment-only scoped asset touch; UI/math/source unchanged. */\n";
 const js=fs.readFileSync(path,"utf8");
 if(!js.startsWith(marker))return false;
 const original=Buffer.from(js.slice(marker.length));
 const crypto=require("node:crypto");
 const sha=crypto.createHash("sha1").update("blob "+original.length+"\0").update(original).digest("hex");
 if(sha!=="f673f2eceec558d89584e0b7f5991feb8613ac9b")return false;
 const manifest=JSON.parse(fs.readFileSync("prototypes/thpt/release-queue/W3_CD12_15_SOURCE_INTAKE_20261122.json","utf8"));
 return Object.entries(manifest.topics).every(([n,rec])=>
  ["kien-thuc","luyen-tap","tu-kiem-tra"].every(part=>{
   const page="docs/thpt-preview/chuyen-de/cd"+n+"/"+part+".md";
   if(!fs.existsSync(page))return false;
   const html=fs.readFileSync(page,"utf8");
   return html.includes(rec.sourceBlob)&&html.includes(rec.q18ReceiptBlob);
  }));
}

/* Full-page Math Lab 25: exactly five UX/QA paths and three deploy-guard paths.
 * Unknown/mixed/shared-runtime/assessment changes fall back to FULL. */
const MATHLAB_FULLPAGE_RELEASE_FILES=new Set([
 ".github/workflows/math-lab-25-release-intake-qa.yml",
 "docs/assets/javascripts/math-lab-library-v1.js",
 "docs/thpt-preview/math-lab/index.md",
 "scripts/test-math-lab-25-browser.py",
 "scripts/test-math-lab-25-release-intake.cjs",
 ".github/workflows/deploy.yml",
 ".github/workflows/thpt-deploy-scope-safety-qa.yml",
 "scripts/test-thpt-release-impact.cjs"
]);
function isExactMathLabFullPage(files){
 if(files.length!==MATHLAB_FULLPAGE_RELEASE_FILES.size ||
    new Set(files).size!==files.length ||
    !files.every(p=>MATHLAB_FULLPAGE_RELEASE_FILES.has(p)))return false;
 try{
  const page=fs.readFileSync("docs/thpt-preview/math-lab/index.md","utf8");
  const js=fs.readFileSync("docs/assets/javascripts/math-lab-library-v1.js","utf8");
  return (page.match(/data-ml-card\b/g)||[]).length===25 &&
    page.includes('href="../../assets/math-lab/models/SLM-TOP01-TRUTH-01.html"') &&
    page.includes('href="../../assets/math-lab/models/SLM-SGK-G11-B04-TRIGEQ.html"') &&
    js.includes("location.replace(expected.href)") &&
    js.includes("mountMathLabShortcut");
 }catch{return false}
}

/* Exact Math Lab postmerge recovery after V2 main-push HEAD_SHA
 * omission: only protected workflow, scope test, and invisible catalog
 * rebuild marker. Unknown/mixed/shared changes still require FULL. */
const MATHLAB_DEPLOY_RECOVERY_FILES=new Set([
 ".github/workflows/deploy.yml",
 "docs/thpt-preview/math-lab/index.md",
 "scripts/test-thpt-release-impact.cjs"
]);
function isMathLabDeployRecovery(files){
 if(files.length!==MATHLAB_DEPLOY_RECOVERY_FILES.size ||
    new Set(files).size!==files.length ||
    !files.every(p=>MATHLAB_DEPLOY_RECOVERY_FILES.has(p)))return false;
 try{
  const catalog=fs.readFileSync("docs/thpt-preview/math-lab/index.md","utf8");
  const workflow=fs.readFileSync(".github/workflows/deploy.yml","utf8");
  const required="      - name: Enforce V2 source/receipt SHA of any new READY packet even when no site deployment\n"+
    "        env:\n"+
    "          BASE_SHA: ${{ github.event.before }}\n"+
    "          HEAD_SHA: ${{ github.sha }}\n"+
    "        run: node scripts/test-thpt-handoff-gate-v2.cjs";
  return catalog.includes("MATHLAB_25_POSTMERGE_DEPLOY_RECOVERY_20261123") &&
    workflow.includes(required) &&
    isExactMathLabFullPage([...MATHLAB_FULLPAGE_RELEASE_FILES]);
 }catch{return false}
}

/* Owner P1 correction to earlier no-frame release: retain ALL authored page
 * guidance/back links at each of 25 contextual top-level model routes.
 * Only exact Math Lab viewer/catalog/hook/QA changes get dedicated 200-case
 * source-locked deploy; any extra/missing/shared path remains FULL. */
const MATHLAB_RESTORE_PAGE_FILES=new Set([
 "hooks/math_lab_full_page.py",
 "mkdocs.yml",
 "docs/thpt-preview/math-lab/index.md",
 "docs/assets/javascripts/math-lab-library-v1.js",
 "scripts/test-math-lab-25-release-intake.cjs",
 "scripts/test-math-lab-25-browser.py",
 ".github/workflows/math-lab-25-release-intake-qa.yml",
 "scripts/test-thpt-release-impact.cjs"
]);
function isMathLabRestorePage(files){
 if(files.length!==MATHLAB_RESTORE_PAGE_FILES.size ||
    new Set(files).size!==files.length ||
    !files.every(p=>MATHLAB_RESTORE_PAGE_FILES.has(p)))return false;
 try{
  const catalog=fs.readFileSync("docs/thpt-preview/math-lab/index.md","utf8");
  const hook=fs.readFileSync("hooks/math_lab_full_page.py","utf8");
  const cfg=fs.readFileSync("mkdocs.yml","utf8");
  const js=fs.readFileSync("docs/assets/javascripts/math-lab-library-v1.js","utf8");
  return (catalog.match(/data-ml-card\b/g)||[]).length===25 &&
    (catalog.match(/href="models\/slm-[a-z0-9-]+\/"/g)||[]).length===25 &&
    catalog.includes('href="models/slm-top01-truth-01/"') &&
    catalog.includes('href="models/slm-sgk-g11-b04-trigeq/"') &&
    cfg.includes("hooks/math_lab_full_page.py") &&
    hook.includes("def on_post_page(") &&
    hook.includes("Math Lab source SHA mismatch") &&
    hook.includes("data-ml-restored-full-page") &&
    hook.includes("#ml-restored-bottom") &&
    !js.includes("location.replace(expected.href)") &&
    js.includes("mountMathLabShortcut");
 }catch{return false}
}

/* 25-model Math Lab learner-visible exponent TYPOGRAPHY fix: only a
 * composed CĐ04 label, never model source blobs, assessment or Golden UI.
 * Require exact four-path patch and all existing 200 browser/source QA. */
const MATHLAB_EXPONENT_DISPLAY_FILES=new Set([
 "hooks/math_lab_full_page.py",
 "scripts/test-math-lab-25-browser.py",
 "scripts/test-math-lab-25-release-intake.cjs",
 "scripts/test-thpt-release-impact.cjs"
]);
function isMathLabExponentDisplay(files){
 if(files.length!==MATHLAB_EXPONENT_DISPLAY_FILES.size ||
    new Set(files).size!==files.length ||
    !files.every(p=>MATHLAB_EXPONENT_DISPLAY_FILES.has(p)))return false;
 try{
  const hook=fs.readFileSync("hooks/math_lab_full_page.py","utf8");
  const browser=fs.readFileSync("scripts/test-math-lab-25-browser.py","utf8");
  const intake=fs.readFileSync("scripts/test-math-lab-25-release-intake.cjs","utf8");
  return hook.includes('if slug == "slm-top04-explog-01":') &&
    hook.includes('bad = "Vẽ y=a^x và y=logₐ(x)"') &&
    hook.includes('good = "Vẽ y=aˣ và y=logₐ(x)"') &&
    hook.includes('model = model.replace(bad, good, 1)') &&
    browser.includes('"CĐ04 exponent visually not raised"') &&
    intake.includes('"CĐ04 composed student intro must raise exponent"');
 }catch{return false}
}

const G11_W1_RELEASE_FILES=new Set([".github/workflows/sgk-golden-first-paint-qa.yml","scripts/test-thpt-academic-presentation-browser.cjs","scripts/test-thpt-sgk-lesson-nav-p2-browser.cjs","scripts/test-sgk-golden-first-paint.cjs","hooks/sgk_golden_first_paint.py","docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md","docs/thpt-preview/sgk/lop-11/chuong-i/bai-3.md","docs/thpt-preview/sgk/lop-11/chuong-i/bai-4.md","docs/assets/images/thpt/G11_B02_UNIT_CIRCLE_AUTHORING_RESET_20261122.svg","docs/assets/images/thpt/G11_B04_COS_MINUS_HALF_AUTHORING_RESET_20261123.svg","docs/assets/images/thpt/G11_B04_SIN_HALF_AUTHORING_RESET_20261123.svg","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-thpt-release-impact.cjs",".github/workflows/thpt-scoped-release-qa.yml","scripts/test-thpt-scoped-lesson-browser.cjs"]);
function isG11W1Release(files){
 if(files.length!==G11_W1_RELEASE_FILES.size||new Set(files).size!==files.length||!files.every(p=>G11_W1_RELEASE_FILES.has(p)))return false;
 try{return fs.readFileSync("scripts/test-thpt-scoped-deploy-proof.cjs","utf8").includes("SCOPED_G11_W1_SOURCE_PASS")&&fs.readFileSync(".github/workflows/thpt-scoped-release-qa.yml","utf8").includes("Verify #1039 W1 on exact integration HEAD");}catch{return false;}
}

const G11_W1_TAB4_HOTFIX_FILES=new Set(["hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-thpt-scoped-lesson-browser.cjs"]);
function isG11W1Tab4Hotfix(files){
 return files.length===G11_W1_TAB4_HOTFIX_FILES.size&&new Set(files).size===files.length&&files.every(p=>G11_W1_TAB4_HOTFIX_FILES.has(p));
}

const G11_W1_REVIEW_DELTA_FILES=new Set([".github/workflows/sgk-golden-first-paint-qa.yml","docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md","docs/thpt-preview/sgk/lop-11/chuong-i/bai-3.md","docs/thpt-preview/sgk/lop-11/chuong-i/bai-4.md","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs"]);
function isG11W1ReviewDelta(files){
 return files.length===G11_W1_REVIEW_DELTA_FILES.size&&new Set(files).size===files.length&&files.every(p=>G11_W1_REVIEW_DELTA_FILES.has(p));
}

const G11_W2_LESSONS=["docs/thpt-preview/sgk/lop-11/chuong-ii/bai-5.md","docs/thpt-preview/sgk/lop-11/chuong-ii/bai-6.md","docs/thpt-preview/sgk/lop-11/chuong-ii/bai-7.md","docs/thpt-preview/sgk/lop-11/chuong-iii/bai-8.md","docs/thpt-preview/sgk/lop-11/chuong-iii/bai-9.md"];
const G11_W2_FILES=new Set(["docs/thpt-preview/sgk/lop-11/chuong-ii/bai-5.md","docs/thpt-preview/sgk/lop-11/chuong-ii/bai-6.md","docs/thpt-preview/sgk/lop-11/chuong-ii/bai-7.md","docs/thpt-preview/sgk/lop-11/chuong-iii/bai-8.md","docs/thpt-preview/sgk/lop-11/chuong-iii/bai-9.md","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-thpt-scoped-lesson-browser.cjs","scripts/test-sgk-golden-first-paint.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"]);
function isG11W2(files){return files.length===G11_W2_FILES.size&&new Set(files).size===files.length&&files.every(p=>G11_W2_FILES.has(p));}

const G11_W3_LESSONS=["docs/thpt-preview/sgk/lop-11/chuong-iv/bai-10.md","docs/thpt-preview/sgk/lop-11/chuong-iv/bai-11.md","docs/thpt-preview/sgk/lop-11/chuong-iv/bai-12.md","docs/thpt-preview/sgk/lop-11/chuong-iv/bai-13.md","docs/thpt-preview/sgk/lop-11/chuong-iv/bai-14.md"];
const G11_W3_FILES=new Set(["docs/thpt-preview/sgk/lop-11/chuong-iv/bai-10.md","docs/thpt-preview/sgk/lop-11/chuong-iv/bai-11.md","docs/thpt-preview/sgk/lop-11/chuong-iv/bai-12.md","docs/thpt-preview/sgk/lop-11/chuong-iv/bai-13.md","docs/thpt-preview/sgk/lop-11/chuong-iv/bai-14.md","docs/assets/images/thpt/G11_B10_PLANE_MEMBERSHIP_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B10_QUADRILATERAL_PYRAMID_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B11_TWO_PLANES_PARALLEL_LINES_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B12_THREE_LINE_PLANE_POSITIONS_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B13_THALES_THREE_PLANES_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B14_PROJECTION_DEGENERACY_AUTHORING_20261123.svg","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-thpt-scoped-lesson-browser.cjs","scripts/test-sgk-golden-first-paint.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"]);
function isG11W3(files){return files.length===G11_W3_FILES.size&&new Set(files).size===files.length&&files.every(p=>G11_W3_FILES.has(p));}

const G11_W4_LESSONS=["docs/thpt-preview/sgk/lop-11/chuong-v/bai-15.md","docs/thpt-preview/sgk/lop-11/chuong-v/bai-16.md","docs/thpt-preview/sgk/lop-11/chuong-v/bai-17.md"];
const G11_W4_FILES=new Set(["docs/thpt-preview/sgk/lop-11/chuong-v/bai-15.md","docs/thpt-preview/sgk/lop-11/chuong-v/bai-16.md","docs/thpt-preview/sgk/lop-11/chuong-v/bai-17.md","docs/assets/images/thpt/G11_B15_GEOMETRIC_PARTIAL_SUMS_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B16_ONE_SIDED_JUMP_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B17_IVT_SIGN_CHANGE_AUTHORING_20261123.svg","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-thpt-scoped-lesson-browser.cjs","scripts/test-sgk-golden-first-paint.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"]);
function isG11W4(files){return files.length===G11_W4_FILES.size&&new Set(files).size===files.length&&files.every(p=>G11_W4_FILES.has(p));}

const G11_W5_LESSONS=["docs/thpt-preview/sgk/lop-11/chuong-vi/bai-18.md","docs/thpt-preview/sgk/lop-11/chuong-vi/bai-19.md","docs/thpt-preview/sgk/lop-11/chuong-vi/bai-20.md","docs/thpt-preview/sgk/lop-11/chuong-vi/bai-21.md"];
const G11_W5_FILES=new Set(["docs/thpt-preview/sgk/lop-11/chuong-vi/bai-18.md","docs/thpt-preview/sgk/lop-11/chuong-vi/bai-19.md","docs/thpt-preview/sgk/lop-11/chuong-vi/bai-20.md","docs/thpt-preview/sgk/lop-11/chuong-vi/bai-21.md","docs/assets/images/thpt/G11_B20_DECREASING_EXP_LOG_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B21_EXP_LOG_THRESHOLD_AUTHORING_20261123.svg","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-thpt-scoped-lesson-browser.cjs","scripts/test-sgk-golden-first-paint.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"]);
function isG11W5(files){return files.length===G11_W5_FILES.size&&new Set(files).size===files.length&&files.every(p=>G11_W5_FILES.has(p));}

const G12_MATH_HOTFIX_LESSONS=["docs/thpt-preview/sgk/lop-12/chuong-ii/bai-7.md","docs/thpt-preview/sgk/lop-12/chuong-ii/bai-8.md","docs/thpt-preview/sgk/lop-12/chuong-iii/bai-9.md","docs/thpt-preview/sgk/lop-12/chuong-iii/bai-10.md","docs/thpt-preview/sgk/lop-12/chuong-iv/bai-11.md","docs/thpt-preview/sgk/lop-12/chuong-iv/bai-12.md","docs/thpt-preview/sgk/lop-12/chuong-iv/bai-13.md"];
const G12_MATH_HOTFIX_FILES=new Set(["docs/thpt-preview/sgk/lop-12/chuong-ii/bai-7.md","docs/thpt-preview/sgk/lop-12/chuong-ii/bai-8.md","docs/thpt-preview/sgk/lop-12/chuong-iii/bai-9.md","docs/thpt-preview/sgk/lop-12/chuong-iii/bai-10.md","docs/thpt-preview/sgk/lop-12/chuong-iv/bai-11.md","docs/thpt-preview/sgk/lop-12/chuong-iv/bai-12.md","docs/thpt-preview/sgk/lop-12/chuong-iv/bai-13.md","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-thpt-scoped-lesson-browser.cjs","scripts/test-sgk-golden-first-paint.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"]);
function isG12MathHotfix(files){return files.length===G12_MATH_HOTFIX_FILES.size&&new Set(files).size===files.length&&files.every(p=>G12_MATH_HOTFIX_FILES.has(p));}
const G12_W13_LESSONS=["docs/thpt-preview/sgk/lop-12/chuong-vi/bai-18.md","docs/thpt-preview/sgk/lop-12/chuong-vi/bai-19.md"];
const G12_W13_FILES=new Set(["docs/thpt-preview/sgk/lop-12/chuong-vi/bai-18.md","docs/thpt-preview/sgk/lop-12/chuong-vi/bai-19.md","docs/assets/images/thpt/G12_B18_TREE_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B19_TREE_AUTHORING_20261124.svg","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-sgk-golden-first-paint.cjs","scripts/test-thpt-scoped-lesson-browser.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"]);
function isG12W13(files){return files.length===G12_W13_FILES.size&&new Set(files).size===files.length&&files.every(p=>G12_W13_FILES.has(p));}
const G12_W12_LESSONS=["docs/thpt-preview/sgk/lop-12/chuong-v/bai-14.md","docs/thpt-preview/sgk/lop-12/chuong-v/bai-15.md","docs/thpt-preview/sgk/lop-12/chuong-v/bai-16.md","docs/thpt-preview/sgk/lop-12/chuong-v/bai-17.md"];
const G12_W12_FILES=new Set(["docs/thpt-preview/sgk/lop-12/chuong-v/bai-14.md","docs/thpt-preview/sgk/lop-12/chuong-v/bai-15.md","docs/thpt-preview/sgk/lop-12/chuong-v/bai-16.md","docs/thpt-preview/sgk/lop-12/chuong-v/bai-17.md","docs/assets/images/thpt/G12_B14_FIG01_NORMAL_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B14_FIG02_DISTANCE_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B15_FIG01_PARAMETER_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B15_FIG02_SKEW_PERP_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B16_FIG01_LINE_ANGLE_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B16_FIG02_LINE_PLANE_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B16_FIG03_PLANE_ANGLE_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B17_SECTION_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B17_GREAT_CIRCLE_AUTHORING_20261124.svg","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-sgk-golden-first-paint.cjs","scripts/test-thpt-scoped-lesson-browser.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"]);
function isG12W12(files){return files.length===G12_W12_FILES.size&&new Set(files).size===files.length&&files.every(p=>G12_W12_FILES.has(p));}
const G12_W11_LESSONS=["docs/thpt-preview/sgk/lop-12/chuong-iv/bai-11.md","docs/thpt-preview/sgk/lop-12/chuong-iv/bai-12.md","docs/thpt-preview/sgk/lop-12/chuong-iv/bai-13.md"];
const G12_W11_FILES=new Set(["docs/thpt-preview/sgk/lop-12/chuong-iv/bai-11.md","docs/thpt-preview/sgk/lop-12/chuong-iv/bai-12.md","docs/thpt-preview/sgk/lop-12/chuong-iv/bai-13.md","docs/assets/images/thpt/G12_B11_FIG01_FAMILY_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B12_FIG01_AREA_DERIVATIVE_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B12_FIG02_SIGNED_AREA_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B13_FIG01_TWO_CURVES_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B13_FIG02_PYRAMID_SECTION_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B13_FIG03_REVOLUTION_AUTHORING_20261124.svg","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-sgk-golden-first-paint.cjs","scripts/test-thpt-scoped-lesson-browser.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"]);
function isG12W11(files){return files.length===G12_W11_FILES.size&&new Set(files).size===files.length&&files.every(p=>G12_W11_FILES.has(p));}
const G12_W10_LESSONS=["docs/thpt-preview/sgk/lop-12/chuong-iii/bai-9.md","docs/thpt-preview/sgk/lop-12/chuong-iii/bai-10.md"];
const G12_W10_FILES=new Set(["docs/thpt-preview/sgk/lop-12/chuong-iii/bai-9.md","docs/thpt-preview/sgk/lop-12/chuong-iii/bai-10.md","docs/assets/images/thpt/FIG-G12-CHIII-B09-QUARTILES-R00.svg","docs/assets/images/thpt/FIG-G12-CHIII-B09-RANGE-IQR-R00.svg","docs/assets/images/thpt/FIG-G12-CHIII-B10-SPREAD-R00.svg","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-sgk-golden-first-paint.cjs","scripts/test-thpt-scoped-lesson-browser.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"]);
function isG12W10(files){return files.length===G12_W10_FILES.size&&new Set(files).size===files.length&&files.every(p=>G12_W10_FILES.has(p));}
const G12_W9_LESSONS=["docs/thpt-preview/sgk/lop-12/chuong-ii/bai-6.md","docs/thpt-preview/sgk/lop-12/chuong-ii/bai-7.md","docs/thpt-preview/sgk/lop-12/chuong-ii/bai-8.md"];
const G12_W9_FILES=new Set(["docs/thpt-preview/sgk/lop-12/chuong-ii/bai-6.md","docs/thpt-preview/sgk/lop-12/chuong-ii/bai-7.md","docs/thpt-preview/sgk/lop-12/chuong-ii/bai-8.md","docs/assets/images/thpt/G12_B06_FIG02_TETRA_CENTROID_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B06_FIG03_VECTOR_ANGLE_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B07_FIG02_DISPLACEMENT_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B08_FIG02_PYRAMID_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B08_FIG03_ROOF_AUTHORING_20261124.svg","docs/assets/images/thpt/FIG-G12-CHII-B07-R00.svg","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-sgk-golden-first-paint.cjs","scripts/test-thpt-scoped-lesson-browser.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"]);
function isG12W9(files){return files.length===G12_W9_FILES.size&&new Set(files).size===files.length&&files.every(p=>G12_W9_FILES.has(p));}
const G12_W8_LESSONS=["docs/thpt-preview/sgk/lop-12/chuong-i/bai-1.md","docs/thpt-preview/sgk/lop-12/chuong-i/bai-2.md","docs/thpt-preview/sgk/lop-12/chuong-i/bai-3.md","docs/thpt-preview/sgk/lop-12/chuong-i/bai-4.md","docs/thpt-preview/sgk/lop-12/chuong-i/bai-5.md"];
const G12_W8_FILES=new Set(["docs/thpt-preview/sgk/lop-12/chuong-i/bai-1.md","docs/thpt-preview/sgk/lop-12/chuong-i/bai-2.md","docs/thpt-preview/sgk/lop-12/chuong-i/bai-3.md","docs/thpt-preview/sgk/lop-12/chuong-i/bai-4.md","docs/thpt-preview/sgk/lop-12/chuong-i/bai-5.md","docs/assets/images/thpt/G12_B01_FIG02_READ_DERIVATIVE_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B03_FIG02_OBLIQUE_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B04_FIG03_QUADRATIC_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B04_FIG04_CUBIC_MONOTONE_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B04_FIG05_OBLIQUE_EXTREMA_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B04_FIG06_OBLIQUE_MONOTONE_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B04_FIG07_CHECK_QUADRATIC_20261124.svg","docs/assets/images/thpt/G12_B04_FIG08_CHECK_CUBIC_20261124.svg","docs/assets/images/thpt/G12_B04_FIG09_CHECK_RATIONAL_20261124.svg","docs/assets/images/thpt/G12_B04_FIG10_CHECK_OBLIQUE_20261124.svg","docs/assets/images/thpt/G12_B05_FIG02_BOX_NET_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B05_FIG03_TRAVEL_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B05_FIG04_POLLUTION_COST_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B05_FIG05_PROFIT_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B02_FIG01_GLOBAL_MIN_MAX_CLOSED_INTERVAL_R00.svg","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-sgk-golden-first-paint.cjs","scripts/test-thpt-scoped-lesson-browser.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"]);
function isG12W8(files){return files.length===G12_W8_FILES.size&&new Set(files).size===files.length&&files.every(p=>G12_W8_FILES.has(p));}
const G11_W7_LESSONS=["docs/thpt-preview/sgk/lop-11/chuong-viii/bai-28.md","docs/thpt-preview/sgk/lop-11/chuong-viii/bai-29.md","docs/thpt-preview/sgk/lop-11/chuong-viii/bai-30.md","docs/thpt-preview/sgk/lop-11/chuong-ix/bai-31.md","docs/thpt-preview/sgk/lop-11/chuong-ix/bai-32.md","docs/thpt-preview/sgk/lop-11/chuong-ix/bai-33.md"];
const G11_W7_FILES=new Set(["docs/thpt-preview/sgk/lop-11/chuong-viii/bai-28.md","docs/thpt-preview/sgk/lop-11/chuong-viii/bai-29.md","docs/thpt-preview/sgk/lop-11/chuong-viii/bai-30.md","docs/thpt-preview/sgk/lop-11/chuong-ix/bai-31.md","docs/thpt-preview/sgk/lop-11/chuong-ix/bai-32.md","docs/thpt-preview/sgk/lop-11/chuong-ix/bai-33.md","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-sgk-golden-first-paint.cjs","scripts/test-thpt-scoped-lesson-browser.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"]);
function isG11W7(files){return files.length===G11_W7_FILES.size&&new Set(files).size===files.length&&files.every(p=>G11_W7_FILES.has(p));}
const G11_W6_LESSONS=["docs/thpt-preview/sgk/lop-11/chuong-vii/bai-22.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-23.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-24.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-25.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-26.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-27.md"];
const G11_W6_FILES=new Set(["docs/thpt-preview/sgk/lop-11/chuong-vii/bai-22.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-23.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-24.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-25.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-26.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-27.md","docs/assets/images/thpt/G11_B22_KHEOPS_ANGLE_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B22_SKEW_PERP_RECTANGULAR_BOX_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B23_PARALLEL_PLANES_NORMAL_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B23_PERPENDICULAR_BISECTOR_PLANE_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B24_SABC_PROJECTION_EXAMPLE_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B24_THREE_PERPENDICULAR_LINES_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B25_CUBE_EQUILATERAL_DIAGONALS_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B25_DIHEDRAL_CHAIR_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B25_PERPENDICULAR_PLANES_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B25_REGULAR_PYRAMID_FRUSTUM_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B25_RHOMBUS_PYRAMID_DIHEDRAL_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B25_SPECIAL_PRISMS_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B26_PARALLEL_DISTANCES_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B26_PYRAMID_HEIGHT_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B26_RHOMBUS_PRISM_DISTANCES_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B26_RIGHT_TRIANGULAR_PRISM_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B26_SABC_COMMON_PERPENDICULAR_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B26_SKEW_COMMON_PERPENDICULAR_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B26_SLOPE_CLEARANCE_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B26_SQUARE_PYRAMID_SKEW_DISTANCE_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B27_FRUSTUM_BASKET_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B27_FRUSTUM_SIMILARITY_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B27_PARALLELEPIPED_OBLIQUE_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B27_PRISM_INCLINED_HEIGHT_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B27_TETRAHEDRON_ORTHOGONAL_AUTHORING_20261123.svg","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-thpt-scoped-lesson-browser.cjs","scripts/test-sgk-golden-first-paint.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"]);
function isG11W6(files){return files.length===G11_W6_FILES.size&&new Set(files).size===files.length&&files.every(p=>G11_W6_FILES.has(p));}

const TOPIC_RW1_FILES=new Set(["scripts/test-thpt-topic01-release-intake.cjs","docs/assets/javascripts/math-details-v1.js","docs/assets/javascripts/thpt-topic01-release-tabs-v1.js","docs/assets/javascripts/thpt-topic-w1-golden-v1.js","docs/assets/javascripts/thpt-topic-w2-golden-v1.js","scripts/test-thpt-topic-rw1-math-browser.py","scripts/test-thpt-release-impact.cjs",".github/workflows/thpt-topic-rw1-math-qa.yml",".github/workflows/deploy.yml",".github/workflows/thpt-deploy-scope-safety-qa.yml"]);
function isExactTopicRW1(files){
 if(files.length!==TOPIC_RW1_FILES.size||new Set(files).size!==files.length||!files.every(f=>TOPIC_RW1_FILES.has(f)))return false;
 try{
  const js=fs.readFileSync("docs/assets/javascripts/math-details-v1.js","utf8");
  const qa=fs.readFileSync("scripts/test-thpt-topic-rw1-math-browser.py","utf8");
  const adapter=fs.readFileSync("docs/assets/javascripts/thpt-topic-w2-golden-v1.js","utf8");
  return js.includes("SLMTopicRW1Math")&&js.includes("cd0[1-8]")&&adapter.includes('part==="kien-thuc"&&["06","07","08"].includes(topic)')&&qa.includes("RW1_SCOPE_HOLD")&&qa.includes("formula parity")&&qa.includes("126*6");
 }catch{return false}
}
// #1055 R-W2 only: exact technical path set. The dedicated PR and
// production gates verify actual base-to-head diff, immutable canonical
// sources, byte-identical SGK/THCS renderer prefix and both browser waves.
const SHARED_KNOWLEDGE_MATH_FILES=new Set([".github/workflows/deploy.yml",".github/workflows/thpt-deploy-scope-safety-qa.yml",".github/workflows/thpt-topic-rw1-math-qa.yml","docs/assets/javascripts/math-details-v1.js","docs/assets/javascripts/thpt-topic-w2-golden-v1.js","docs/assets/javascripts/thpt-topic-w3-golden-v1.js","docs/assets/javascripts/thpt-topic-w4-golden-v1.js","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-topic-knowledge-tabs-v3.cjs","scripts/test-thpt-topic-rw1-math-browser.py","scripts/test-thpt-topic-w2-golden-browser.py","scripts/test-thpt-topic-w3-golden-browser.py","scripts/test-thpt-topic-w4-golden-browser.py","docs/assets/javascripts/thpt-topic-w5-golden-v1.js","scripts/test-thpt-topic-w5-golden-browser.py"]);
function isExactSharedKnowledgeMath(files){
 if(files.length!==SHARED_KNOWLEDGE_MATH_FILES.size||new Set(files).size!==files.length||!files.every(f=>SHARED_KNOWLEDGE_MATH_FILES.has(f)))return false;
 try{
  const helper=fs.readFileSync("docs/assets/javascripts/math-details-v1.js","utf8");
  const qa=fs.readFileSync("scripts/test-thpt-topic-rw1-math-browser.py","utf8");
  const deploy=fs.readFileSync(".github/workflows/deploy.yml","utf8");
  return helper.includes("window.SLMTHPTKnowledgeMath=shared;")&&
    qa.includes("SHARED_MATH_SCOPE_HOLD")&&qa.includes("markdown_inventory(topic)")&&qa.includes("RW2_SIZES")&&
    deploy.includes("deploy-scoped-topic-shared-math:")&&deploy.includes("--shared-candidate-scope")&&deploy.includes("test-thpt-topic-rw1-math-browser.py --rw2")&&deploy.includes("test-thpt-topic-rw1-math-browser.py --tail")&&deploy.includes("scripts/test-thpt-topic-w5-golden-browser.py");
 }catch{return false}
}
// One-time recovery of failed #1110 deploy; no runtime or learner changes.
// Only the exact failed main SHA and these four QA/workflow files qualify.
const SHARED_DEPLOY_RECOVERY_BASE="f9a4b0caef4f860a17d956c0c4d7600dc511c3d2";
const SHARED_DEPLOY_RECOVERY_FILES=new Set(["scripts/test-thpt-release-impact.cjs",".github/workflows/deploy.yml",".github/workflows/thpt-deploy-scope-safety-qa.yml",".github/workflows/thpt-topic-rw1-math-qa.yml"]);
const SHARED_APPROVED_HEAD="90cfffe5f3adb09eaf347ac9436c6f9e6d4b8ecd";
function proveSharedDeployRecovery(){
 const cp=require("node:child_process");
 const git=(...args)=>cp.execFileSync("git",args,{encoding:"utf8"}).trim();
 assert.equal(process.env.BASE_SHA,SHARED_DEPLOY_RECOVERY_BASE,"Recovery base must be exact approved merged SHA");
 assert.equal(git("rev-parse",SHARED_APPROVED_HEAD+"^{tree}"),git("rev-parse",SHARED_DEPLOY_RECOVERY_BASE+"^{tree}"),"Approved PR and merged tree differ");
 const files=git("diff","--no-renames","--name-only",SHARED_APPROVED_HEAD,"HEAD").split("\n").filter(Boolean);
 assert(isExactSharedDeployRecovery(files,process.env.BASE_SHA),"Recovery contains non-QA changes or unexpected files");
 console.log("PASS #1110 exact snapshot preserved: only four QA/workflow paths changed; renderer, content, build inputs and prior browser test code byte-identical");
}
function isExactSharedDeployRecovery(files,base){
 return base===SHARED_DEPLOY_RECOVERY_BASE&&
  files.length===SHARED_DEPLOY_RECOVERY_FILES.size&&new Set(files).size===files.length&&
  files.every(f=>SHARED_DEPLOY_RECOVERY_FILES.has(f))&&
  isExactSharedKnowledgeMath([...SHARED_KNOWLEDGE_MATH_FILES])&&
  fs.readFileSync(".github/workflows/deploy.yml","utf8").includes("OWNER_1110_DEPLOY_RECOVERY_EXACT");
}
const RW3_TAB_FILES=new Set(["docs/assets/javascripts/thpt-topic-w4-golden-v1.js","docs/assets/javascripts/thpt-topic-w5-golden-v1.js","scripts/test-thpt-topic-w4-golden-browser.py","scripts/test-thpt-topic-w5-golden-browser.py","scripts/test-thpt-topic-rw1-math-browser.py","scripts/test-thpt-release-impact.cjs",".github/workflows/thpt-topic-rw1-math-qa.yml",".github/workflows/thpt-topic-w4-golden-release-qa.yml",".github/workflows/thpt-topic-w5-golden-release-qa.yml",".github/workflows/deploy.yml",".github/workflows/thpt-deploy-scope-safety-qa.yml"]);
function isExactRW3Tabs(files){
 return files.length===RW3_TAB_FILES.size&&new Set(files).size===files.length&&files.every(f=>RW3_TAB_FILES.has(f))&&fs.readFileSync("scripts/test-thpt-topic-rw1-math-browser.py","utf8").includes("RW3_TAB_SCOPE_HOLD");
}
function proveRW3Tabs(){
 const cp=require("node:child_process"), git=(...args)=>cp.execFileSync("git",args,{encoding:"utf8"});
 const base=process.env.BASE_SHA;
 assert.equal(base,"0a4a1aa82961e4136a3aa5b0fb783e5b9c3e303a","R-W3 base must be the published snapshot");
 assert(isExactRW3Tabs(git("diff","--no-renames","--name-only",base,"HEAD").trim().split("\n")),"R-W3 exact scope HOLD");
 let changes=0;
 for(const wave of [4,5]){
  const p="docs/assets/javascripts/thpt-topic-w"+wave+"-golden-v1.js";
  const split=s=>{const m=s.match(/const topicTabNames=(\{[\s\S]*?\n\});/);assert(m,"Missing alias map");return {rest:s.replace(m[0],"ALIAS_DATA"),data:JSON.parse(m[1])};};
  const old=split(git("show",base+":"+p)),now=split(fs.readFileSync(p,"utf8"));
  assert.equal(now.rest,old.rest,"Non-alias JS changed");
  assert.deepEqual(Object.keys(now.data),Object.keys(old.data));
  for(const key of Object.keys(old.data)){
   if(key==="16")assert.deepEqual(now.data[key],old.data[key],"CĐ16 changed");
   const flatten=x=>[...x.modules,...x.subs.flat()];
   const a=flatten(old.data[key]),b=flatten(now.data[key]);
   assert.deepEqual(now.data[key].subs.map(x=>x.length),old.data[key].subs.map(x=>x.length));
   assert.equal(a.length,b.length);
   assert(a.every((v,i)=>v.match(/^\d+(?:\.\d+)?\./)?.[0]===b[i].match(/^\d+(?:\.\d+)?\./)?.[0]),"Tab number/order changed");
   changes+=a.filter((v,i)=>v!==b[i]).length;
  }
 }
 assert.equal(changes,69,"Unexpected alias count");
 console.log("PASS R-W3 69 labels only, all renderer logic, content and protected assessment unchanged");
}
// One-time recovery: #1120 merged, no main-push run and gh-pages still at CĐ01.
const W1_RECOVERY_BASE="8b3ea2e2500f00578a2f9072d08916c545c72f6c";
const W1_RECOVERY_APPROVED="81501e03a0f392812ea84daca7b8249e681a9815";
const W1_RECOVERY_FILES=new Set(["scripts/test-thpt-release-impact.cjs",".github/workflows/thpt-topic-rw1-math-qa.yml",".github/workflows/thpt-deploy-scope-safety-qa.yml",".github/workflows/deploy.yml"]);
function isExactW1Recovery(files,base){
 return base===W1_RECOVERY_BASE&&files.length===W1_RECOVERY_FILES.size&&new Set(files).size===files.length&&files.every(p=>W1_RECOVERY_FILES.has(p))&&isExactTopicW1Refresh([...TOPIC_W1_REFRESH_FILES]);
}
function proveW1Recovery(){
 const cp=require("node:child_process"),git=(...args)=>cp.execFileSync("git",args,{encoding:"utf8"}).trim();
 assert.equal(process.env.BASE_SHA,W1_RECOVERY_BASE,"Exact merged W1 snapshot required");
 assert.equal(git("rev-parse",W1_RECOVERY_APPROVED+"^{tree}"),git("rev-parse",W1_RECOVERY_BASE+"^{tree}"),"Approved W1 and merged tree differ");
 assert(isExactW1Recovery(git("diff","--no-renames","--name-only",W1_RECOVERY_APPROVED,"HEAD").split("\n").filter(Boolean),process.env.BASE_SHA),"Recovery includes changes outside exact four QA files");
 console.log("PASS W1 unchanged approved tree; only exact four deploy/QA files changed");
}



const W5_REFRESH_FILES=new Set([".github/workflows/deploy.yml",".github/workflows/thpt-deploy-scope-safety-qa.yml",".github/workflows/thpt-topic-rw1-math-qa.yml",".github/workflows/thpt-topic-w5-golden-release-qa.yml",".github/workflows/thpt-topic-w5-source-intake-qa.yml","docs/assets/images/thpt/Temp_STATISTICS_HISTOGRAM_DENSITY_WORK_20261126.svg","docs/assets/javascripts/math-details-v1.js","docs/assets/javascripts/thpt-topic-w5-golden-v1.js","docs/thpt-preview/chuyen-de/cd19/kien-thuc.md","docs/thpt-preview/chuyen-de/cd19/luyen-tap.md","docs/thpt-preview/chuyen-de/cd19/tu-kiem-tra.md","docs/thpt-preview/chuyen-de/cd20/kien-thuc.md","docs/thpt-preview/chuyen-de/cd20/luyen-tap.md","docs/thpt-preview/chuyen-de/cd20/tu-kiem-tra.md","docs/thpt-preview/chuyen-de/cd21/kien-thuc.md","docs/thpt-preview/chuyen-de/cd21/luyen-tap.md","docs/thpt-preview/chuyen-de/cd21/tu-kiem-tra.md","docs/thpt-preview/chuyen-de/cd22/kien-thuc.md","docs/thpt-preview/chuyen-de/cd22/luyen-tap.md","docs/thpt-preview/chuyen-de/cd22/tu-kiem-tra.md","prototypes/thpt/release-queue/W5_CD19_22_SOURCE_INTAKE_20261123.json","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-topic-w5-golden-browser.py","scripts/test-thpt-topic-w5-source-intake.py","scripts/test-thpt-topic-w5-source-locked.py"]);
const W5_REFRESH_BLOBS={"docs/assets/images/thpt/Temp_STATISTICS_HISTOGRAM_DENSITY_WORK_20261126.svg":"a1d78f19563e02942d7c348026efe234146dbb79","docs/assets/javascripts/thpt-topic-w5-golden-v1.js":"994bbc46570663c46c6628801215ed269f2ba54a","docs/thpt-preview/chuyen-de/cd19/kien-thuc.md":"7907480c9321edbae7456a7c81df21748548cc67","docs/thpt-preview/chuyen-de/cd19/luyen-tap.md":"0855b79add3d429a7b12d7af03834c59752561d9","docs/thpt-preview/chuyen-de/cd19/tu-kiem-tra.md":"c641cf021fe8a91dc63a399cbfe64d78dfa2a09a","docs/thpt-preview/chuyen-de/cd20/kien-thuc.md":"025f17ff6479f7d64f826c80d6611c236a2c296e","docs/thpt-preview/chuyen-de/cd20/luyen-tap.md":"8ee2b9add36def644a5c28acd40d8555eea60b9d","docs/thpt-preview/chuyen-de/cd20/tu-kiem-tra.md":"2488f0502a40b8df55ce99a7acadf26865cde8f4","docs/thpt-preview/chuyen-de/cd21/kien-thuc.md":"8394601535835a4e515c9b4637cfed0dfe1af958","docs/thpt-preview/chuyen-de/cd21/luyen-tap.md":"e910d6d4fc08863f5b4eb6b3a6220710acf36345","docs/thpt-preview/chuyen-de/cd21/tu-kiem-tra.md":"cb87ad97971b937b8f8e737d6f1816d31a22f1c2","docs/thpt-preview/chuyen-de/cd22/kien-thuc.md":"cee9ace40f84deb2b4f3f28266a255bed68421ac","docs/thpt-preview/chuyen-de/cd22/luyen-tap.md":"3bfc030418552b1a8cc10a9207590e2aff784eee","docs/thpt-preview/chuyen-de/cd22/tu-kiem-tra.md":"e5081b6e3c9aa6333a7c079eefdf9aff8f2b3970","prototypes/thpt/release-queue/W5_CD19_22_SOURCE_INTAKE_20261123.json":"c61fefda5c934aa3dc38989f9f4672bf4fae8a90","scripts/test-thpt-topic-w5-golden-browser.py":"0ea4852765cad883733b847192d9030e72113328","scripts/test-thpt-topic-w5-source-intake.py":"2c169e40674e34925c7f59bc56d692cc3c029e7b","scripts/test-thpt-topic-w5-source-locked.py":"8c67957aee840fa5108dc005d93981d85ff27568","docs/assets/javascripts/math-details-v1.js":"9fdd31a0d15acd50fe0ed430001e5103c7df143d",".github/workflows/deploy.yml":"052a2121ddfd4b389d5d387d15b6a2e6ea89443d",".github/workflows/thpt-deploy-scope-safety-qa.yml":"b78182655b5360a085891a5a34dc98d7bc57b2c3",".github/workflows/thpt-topic-rw1-math-qa.yml":"b8e0e6997ff879ef3f37f8a5f7c7571a18028d00",".github/workflows/thpt-topic-w5-golden-release-qa.yml":"493acbf9a25a22d6b7977dc34d2fcad0425237eb",".github/workflows/thpt-topic-w5-source-intake-qa.yml":"abf321bfb614e89c5d7bed2ab19c6e5bd775c55f"};
function isExactW5Refresh(files){
 const crypto=require("node:crypto"),blob=p=>{const b=fs.readFileSync(p);return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex");};
 return files.length===W5_REFRESH_FILES.size&&new Set(files).size===files.length&&files.every(f=>W5_REFRESH_FILES.has(f))&&Object.entries(W5_REFRESH_BLOBS).every(([p,sha])=>blob(p)===sha);
}
function proveW5Refresh(){
 const cp=require("node:child_process"),git=(...args)=>cp.execFileSync("git",args,{encoding:"utf8"}),base=process.env.BASE_SHA;
 assert(base&&/^[0-9a-f]{40}$/.test(base),"W5 requires actual base SHA");
 assert.equal(git("rev-parse",base+"^{tree}").trim(),"aa862c09fd26b4988f20c216eba8e29da18c2b65","W5 base must have exact W4 tree; reconcile if changed");
 assert(isExactW5Refresh(git("diff","--no-renames","--name-only",base,"HEAD").trim().split("\n")),"W5 exact scope HOLD");
 const helper="docs/assets/javascripts/math-details-v1.js",before=git("show",base+":"+helper),now=fs.readFileSync(helper,"utf8");
 assert(now.includes("cd(?:0[1-9]|1[0-9]|2[0-2])\\/(?:luyen-tap|tu-kiem-tra)")&&now.replace("cd(?:0[1-9]|1[0-9]|2[0-2])\\/(?:luyen-tap|tu-kiem-tra)","cd(?:0[1-9]|1[0-8])\\/(?:luyen-tap|tu-kiem-tra)")===before,"Unrelated shared math behavior changed");
 for(const p of [helper,"docs/assets/javascripts/thpt-topic-w5-golden-v1.js"])cp.execFileSync("node",["--check",p],{stdio:"inherit"});
 console.log("PASS exact W5 signed projections; W4 tree preserved");
}

const W4_REFRESH_FILES=new Set([".github/workflows/deploy.yml",".github/workflows/thpt-deploy-scope-safety-qa.yml",".github/workflows/thpt-topic-rw1-math-qa.yml",".github/workflows/thpt-topic-w4-golden-release-qa.yml",".github/workflows/thpt-topic-w5-golden-release-qa.yml","docs/assets/data/thpt-g12-chii-b06-b08-public-r00.json","docs/assets/data/thpt-g12-chv-b14-b17-public-r01.json","docs/assets/javascripts/math-details-v1.js","docs/assets/javascripts/thpt-topic-w4-golden-v1.js","docs/thpt-preview/chuyen-de/cd16/kien-thuc.md","docs/thpt-preview/chuyen-de/cd16/luyen-tap.md","docs/thpt-preview/chuyen-de/cd16/tu-kiem-tra.md","docs/thpt-preview/chuyen-de/cd17/kien-thuc.md","docs/thpt-preview/chuyen-de/cd17/luyen-tap.md","docs/thpt-preview/chuyen-de/cd17/tu-kiem-tra.md","docs/thpt-preview/chuyen-de/cd18/kien-thuc.md","docs/thpt-preview/chuyen-de/cd18/luyen-tap.md","docs/thpt-preview/chuyen-de/cd18/tu-kiem-tra.md","prototypes/thpt/release-queue/W4_CD16_18_SOURCE_INTAKE_20261123.json","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-topic-w4-golden-browser.py","scripts/test-thpt-topic-w4-shared-owner-delta.py","scripts/test-thpt-topic-w4-source-locked.py"]);
const W4_REFRESH_BLOBS={"docs/assets/javascripts/thpt-topic-w4-golden-v1.js":"92a851f36f457356ed7266c9d23578a4a4d0d7dc","docs/thpt-preview/chuyen-de/cd16/kien-thuc.md":"543ecfabcf425fc7d8f476eca4f06134bba8fec8","docs/thpt-preview/chuyen-de/cd16/luyen-tap.md":"e474b4fb5ef7f6d4cd3347a2c2175001c8beaf15","docs/thpt-preview/chuyen-de/cd16/tu-kiem-tra.md":"0f0403f23eca705b907e205733786706a94c5a3c","docs/thpt-preview/chuyen-de/cd17/kien-thuc.md":"51cd07a5903f338732822b4d67082709efee04bf","docs/thpt-preview/chuyen-de/cd17/luyen-tap.md":"152f74ee481d5c9bbe23a168bb57f03a73be892c","docs/thpt-preview/chuyen-de/cd17/tu-kiem-tra.md":"f1ad9835cb203c07718ce4cc37e7adb76fd219d3","docs/thpt-preview/chuyen-de/cd18/kien-thuc.md":"a53ea677c5a69118e6965cc68a68162b3dc4166b","docs/thpt-preview/chuyen-de/cd18/luyen-tap.md":"09175d2fd967205e4498e886a0bf422d1aac8449","docs/thpt-preview/chuyen-de/cd18/tu-kiem-tra.md":"0923b36a797d53e51e2fa2a6e603557307a4e7e5","scripts/test-thpt-topic-w4-source-locked.py":"99a26f7009b57dd8ccc11a059bbe8d8728fc7caa","scripts/test-thpt-topic-w4-golden-browser.py":"91d96ce344f4c56b63f7597801ad86f89cd85d4e","docs/assets/data/thpt-g12-chii-b06-b08-public-r00.json":"7291de1c6afd270dc5b3da3c01d8b9c660b00e85","docs/assets/data/thpt-g12-chv-b14-b17-public-r01.json":"0570aed17f04537aa5c1047c56d3bf18b91a25dd","docs/assets/javascripts/math-details-v1.js":"0a817a09fb9111a0d6f45fa340caeeede28f9687","prototypes/thpt/release-queue/W4_CD16_18_SOURCE_INTAKE_20261123.json":"63488123ec85341b4c232a0897932763f596fd3e","scripts/test-thpt-topic-w4-shared-owner-delta.py":"be77a01fa8d7d1ae0a5f9d96e3979e6aa6731ce0",".github/workflows/deploy.yml":"266e857d3ff431c7a82046fc361ef3b8b5991b8d",".github/workflows/thpt-deploy-scope-safety-qa.yml":"d5f523aca3d49234a8c60927e33abb4dc2c9bb34",".github/workflows/thpt-topic-rw1-math-qa.yml":"738cacf0f7a48e56a08350b36689ffca8f8a3c02",".github/workflows/thpt-topic-w4-golden-release-qa.yml":"e9019fef20459693444266276e217391eb1ea7a2",".github/workflows/thpt-topic-w5-golden-release-qa.yml":"fdfd8f3256ab6cdb4e75015b43451c93c45718b2"};
function isExactW4Refresh(files){
 const crypto=require("node:crypto"),blob=p=>{const b=fs.readFileSync(p);return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex");};
 return files.length===W4_REFRESH_FILES.size&&new Set(files).size===files.length&&files.every(f=>W4_REFRESH_FILES.has(f))&&Object.entries(W4_REFRESH_BLOBS).every(([p,sha])=>blob(p)===sha);
}
function proveW4Refresh(){
 const cp=require("node:child_process"),git=(...args)=>cp.execFileSync("git",args,{encoding:"utf8"}),base=process.env.BASE_SHA;
 assert(base&&/^[0-9a-f]{40}$/.test(base),"W4 requires actual base SHA");
 assert.equal(git("rev-parse",base+"^{tree}").trim(),"854ca224634dbfe394f6637c45ef0d2e8a4c79e3","W4 base must have exact W3b candidate tree; reconcile after merge if changed");
 assert(isExactW4Refresh(git("diff","--no-renames","--name-only",base,"HEAD").trim().split("\n")),"W4 exact scope HOLD");
 const helper="docs/assets/javascripts/math-details-v1.js",before=git("show",base+":"+helper),now=fs.readFileSync(helper,"utf8");
 assert(now.includes("cd(?:0[1-9]|1[0-8])\\/(?:luyen-tap|tu-kiem-tra)")&&now.replace("cd(?:0[1-9]|1[0-8])\\/(?:luyen-tap|tu-kiem-tra)","cd(?:0[1-9]|1[0-5])\\/(?:luyen-tap|tu-kiem-tra)")===before,"Unrelated shared math behavior changed");
 for(const p of [helper,"docs/assets/javascripts/thpt-topic-w4-golden-v1.js"])cp.execFileSync("node",["--check",p],{stdio:"inherit"});
 console.log("PASS exact W4 signed projections + two owner-approved public SGK deltas; W3b preserved");
}

const W3B_REFRESH_FILES=new Set([".github/workflows/deploy.yml",".github/workflows/thpt-deploy-scope-safety-qa.yml",".github/workflows/thpt-topic-rw1-math-qa.yml",".github/workflows/thpt-topic-w3-golden-release-qa.yml","docs/assets/javascripts/math-details-v1.js","docs/assets/javascripts/thpt-topic-w3-golden-v1.js","docs/thpt-preview/chuyen-de/cd15/kien-thuc.md","docs/thpt-preview/chuyen-de/cd15/luyen-tap.md","docs/thpt-preview/chuyen-de/cd15/tu-kiem-tra.md","prototypes/thpt/release-queue/W3_CD12_15_SOURCE_INTAKE_20261122.json","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-topic-rw1-math-browser.py","scripts/test-thpt-topic-w3-golden-browser.py","scripts/test-thpt-topic-w3-source-locked.py"]);
const W3B_REFRESH_BLOBS={"docs/thpt-preview/chuyen-de/cd15/kien-thuc.md":"421e83b1229e4b2a5fc5a0193a864956da277273","docs/thpt-preview/chuyen-de/cd15/luyen-tap.md":"1cf97880db7acbab45da1ed71fbd1baaeb40c57e","docs/thpt-preview/chuyen-de/cd15/tu-kiem-tra.md":"692a495977ddcc2d450ab7ddd514a64b3b510751","docs/assets/javascripts/thpt-topic-w3-golden-v1.js":"6b437fbf873704d2a39534d1ae16815b5e6e8414","scripts/test-thpt-topic-w3-source-locked.py":"0da3153bac79971ac22d27f8198f2cc671d281d4","scripts/test-thpt-topic-rw1-math-browser.py":"1f6cda997d0142f505ab2dfcb82b84ac7e17623a","scripts/test-thpt-topic-w3-golden-browser.py":"bc06b9f0013006a97388675cc25688b534b4ae43","docs/assets/javascripts/math-details-v1.js":"8026a1042d086d1f3bf33d272b47dc1cac8d8c33","prototypes/thpt/release-queue/W3_CD12_15_SOURCE_INTAKE_20261122.json":"0c6692dc125c8cf536216a447362e898b3cbe0cc",".github/workflows/deploy.yml":"a42ac809706fecad42d95d43055ac8a11c5a2fbd",".github/workflows/thpt-deploy-scope-safety-qa.yml":"c10fec855d2e4dae5d23a05ce26034206e056684",".github/workflows/thpt-topic-rw1-math-qa.yml":"6501b3b352186ff99abfb0ba8eabe1ca7e183fda",".github/workflows/thpt-topic-w3-golden-release-qa.yml":"f4d766f98c583871c364c50667975ba93f393210"};
function isExactW3bRefresh(files){
 const crypto=require("node:crypto"),blob=p=>{const b=fs.readFileSync(p);return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex");};
 return files.length===W3B_REFRESH_FILES.size&&new Set(files).size===files.length&&files.every(f=>W3B_REFRESH_FILES.has(f))&&Object.entries(W3B_REFRESH_BLOBS).every(([p,sha])=>blob(p)===sha);
}
function proveW3bRefresh(){
 const cp=require("node:child_process"),git=(...args)=>cp.execFileSync("git",args,{encoding:"utf8"}),base=process.env.BASE_SHA;
 assert(base&&/^[0-9a-f]{40}$/.test(base),"W3b requires actual base SHA");
 assert.equal(git("rev-parse",base+"^{tree}").trim(),"649394713367fc9cfd6f780a83dc05a2b3d7f214","W3b base must have exact W3a candidate tree; reconcile after merge if changed");
 assert(isExactW3bRefresh(git("diff","--no-renames","--name-only",base,"HEAD").trim().split("\n")),"W3b exact scope HOLD");
 const helper="docs/assets/javascripts/math-details-v1.js",before=git("show",base+":"+helper),now=fs.readFileSync(helper,"utf8");
 assert(now.includes("cd(?:0[1-9]|1[0-5])\\/(?:luyen-tap|tu-kiem-tra)")&&now.replace("cd(?:0[1-9]|1[0-5])\\/(?:luyen-tap|tu-kiem-tra)","cd(?:0[1-9]|1[0-4])\\/(?:luyen-tap|tu-kiem-tra)")===before,"Unrelated shared math behavior changed");
 for(const p of [helper,"docs/assets/javascripts/thpt-topic-w3-golden-v1.js"])cp.execFileSync("node",["--check",p],{stdio:"inherit"});
 console.log("PASS exact W3b signed projections and public route-only MathJax; W3a tree preserved");
}

const W3A_REFRESH_FILES=new Set([".github/workflows/deploy.yml",".github/workflows/thpt-deploy-scope-safety-qa.yml",".github/workflows/thpt-topic-rw1-math-qa.yml",".github/workflows/thpt-topic-w3-golden-release-qa.yml","docs/assets/images/thpt/THPT_TOPIC13_COMMON_ORIGIN_ANGLE.svg","docs/assets/images/thpt/THPT_TOPIC14_HYPERBOLA_ASYMPTOTES.svg","docs/assets/javascripts/math-details-v1.js","docs/assets/javascripts/thpt-topic-w3-golden-v1.js","docs/thpt-preview/chuyen-de/cd12/kien-thuc.md","docs/thpt-preview/chuyen-de/cd12/luyen-tap.md","docs/thpt-preview/chuyen-de/cd12/tu-kiem-tra.md","docs/thpt-preview/chuyen-de/cd13/kien-thuc.md","docs/thpt-preview/chuyen-de/cd13/luyen-tap.md","docs/thpt-preview/chuyen-de/cd13/tu-kiem-tra.md","docs/thpt-preview/chuyen-de/cd14/kien-thuc.md","docs/thpt-preview/chuyen-de/cd14/luyen-tap.md","docs/thpt-preview/chuyen-de/cd14/tu-kiem-tra.md","prototypes/thpt/release-queue/W3_CD12_15_SOURCE_INTAKE_20261122.json","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-topic-rw1-math-browser.py","scripts/test-thpt-topic-w3-golden-browser.py","scripts/test-thpt-topic-w3-source-locked.py"]);
const W3A_REFRESH_BLOBS={"docs/assets/images/thpt/THPT_TOPIC13_COMMON_ORIGIN_ANGLE.svg":"03f008e587226f0492ec217373d090cd7cc0d79b","docs/assets/images/thpt/THPT_TOPIC14_HYPERBOLA_ASYMPTOTES.svg":"d83a92eda12499dd39226c3eff07a410e51da224","docs/assets/javascripts/math-details-v1.js":"aec7efb316d7a5db0cb20148f9036f0288c62028","docs/assets/javascripts/thpt-topic-w3-golden-v1.js":"10b2a96f6d7df0877be83824f55a3fb8df721191","docs/thpt-preview/chuyen-de/cd12/kien-thuc.md":"a0d6f0e8ef170967d2ea5a0e16890adfb1737069","docs/thpt-preview/chuyen-de/cd12/luyen-tap.md":"863ded30338e1a9a6504abe6970dcbe1b5327118","docs/thpt-preview/chuyen-de/cd12/tu-kiem-tra.md":"02b87d4cab138c8b466a6877d3efa83886a30c05","docs/thpt-preview/chuyen-de/cd13/kien-thuc.md":"5d6ba7da26babad34a0db12b4eecef3eb19d6f92","docs/thpt-preview/chuyen-de/cd13/luyen-tap.md":"cf37f9a7ae39e2019b633ea59279fc88c348cbc2","docs/thpt-preview/chuyen-de/cd13/tu-kiem-tra.md":"c6ccf44ba0b7603617f22521485533bd43d9bf09","docs/thpt-preview/chuyen-de/cd14/kien-thuc.md":"c2c320822aec0099a328ace612ae1fba24d437f9","docs/thpt-preview/chuyen-de/cd14/luyen-tap.md":"bfcfffc86b2717057d13f87643129482c39cf158","docs/thpt-preview/chuyen-de/cd14/tu-kiem-tra.md":"9c7b79a2a8cbc9f74cad922e98aca421323c8c89","prototypes/thpt/release-queue/W3_CD12_15_SOURCE_INTAKE_20261122.json":"87f4b23de51958c107502e634dfe9e2a85310dd0","scripts/test-thpt-topic-w3-golden-browser.py":"f58ded2893f9c9b6919693dbb690bf311ce03537","scripts/test-thpt-topic-w3-source-locked.py":"b0c2cb4cb098d9fe383cf064e7109902a47cba37","scripts/test-thpt-topic-rw1-math-browser.py":"02bb8d6fb914f79844752ad0c29ddf7d3f3ab5d8"};
function isExactW3aRefresh(files){
 const crypto=require("node:crypto"),blob=p=>{const b=fs.readFileSync(p);return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex");};
 return files.length===W3A_REFRESH_FILES.size&&new Set(files).size===files.length&&files.every(f=>W3A_REFRESH_FILES.has(f))&&Object.entries(W3A_REFRESH_BLOBS).every(([p,sha])=>blob(p)===sha);
}
function proveW3aRefresh(){
 const cp=require("node:child_process"),git=(...args)=>cp.execFileSync("git",args,{encoding:"utf8"}),base=process.env.BASE_SHA;
 assert.equal(base,"88544cd12ed343ecb00ca6a549cc7123b11a7251","W3a base must be exact W2b merge");
 assert(isExactW3aRefresh(git("diff","--no-renames","--name-only",base,"HEAD").trim().split("\n")),"W3a exact scope HOLD");
 const helper="docs/assets/javascripts/math-details-v1.js",adapter="docs/assets/javascripts/thpt-topic-w3-golden-v1.js",before=git("show",base+":"+helper),now=fs.readFileSync(helper,"utf8");
 assert(now.includes("cd(?:0[1-9]|1[0-4])\\/(?:luyen-tap|tu-kiem-tra)")&&now.replace("cd(?:0[1-9]|1[0-4])\\/(?:luyen-tap|tu-kiem-tra)","cd(?:0[1-9]|1[01])\\/(?:luyen-tap|tu-kiem-tra)")===before,"Unrelated shared math behavior changed");
 for(const p of [helper,adapter])cp.execFileSync("node",["--check",p],{stdio:"inherit"});
 console.log("PASS exact W3a signed projections and figures, public route-only MathJax, W2b unchanged");
}
const W2B_REFRESH_FILES=new Set(["docs/assets/javascripts/math-details-v1.js","docs/assets/javascripts/thpt-topic-w2-golden-v1.js","docs/assets/visuals/THPT_TOPIC10_ASYMPTOTE_READING_R01.svg","docs/thpt-preview/chuyen-de/cd09/kien-thuc.md","docs/thpt-preview/chuyen-de/cd09/luyen-tap.md","docs/thpt-preview/chuyen-de/cd09/tu-kiem-tra.md","docs/thpt-preview/chuyen-de/cd10/kien-thuc.md","docs/thpt-preview/chuyen-de/cd10/luyen-tap.md","docs/thpt-preview/chuyen-de/cd10/tu-kiem-tra.md","docs/thpt-preview/chuyen-de/cd11/kien-thuc.md","docs/thpt-preview/chuyen-de/cd11/luyen-tap.md","docs/thpt-preview/chuyen-de/cd11/tu-kiem-tra.md","scripts/test-thpt-topic-rw1-math-browser.py","scripts/test-thpt-topic-w2-golden-browser.py","scripts/test-thpt-topic-w2-source-locked.py","scripts/test-thpt-release-impact.cjs",".github/workflows/thpt-topic-w2-golden-release-qa.yml",".github/workflows/thpt-topic-rw1-math-qa.yml",".github/workflows/deploy.yml",".github/workflows/thpt-deploy-scope-safety-qa.yml"]);
const W2B_REFRESH_BLOBS={"docs/assets/javascripts/math-details-v1.js":"60001a8569412a9846581624e245a70a578c4f2a","docs/assets/javascripts/thpt-topic-w2-golden-v1.js":"57e4a6a6c3fe5299dc018f896073d61a49923da5","docs/assets/visuals/THPT_TOPIC10_ASYMPTOTE_READING_R01.svg":"fd95665e72fb029bf5182643ea3888f19bb9732b","docs/thpt-preview/chuyen-de/cd09/kien-thuc.md":"c91e3fb51ec7157dc7d3c7d6e806554f848b8a89","docs/thpt-preview/chuyen-de/cd09/luyen-tap.md":"47e3e3c39601142ef9cc76bc271656343e7055e8","docs/thpt-preview/chuyen-de/cd09/tu-kiem-tra.md":"64787e7baa81ed6e3b0a74b03d4fc84e1596eaeb","docs/thpt-preview/chuyen-de/cd10/kien-thuc.md":"edcb8a492bb24126fcd40393e5afde07c7b35961","docs/thpt-preview/chuyen-de/cd10/luyen-tap.md":"c56dda1c4d405906870407fa6940062682f9fdd2","docs/thpt-preview/chuyen-de/cd10/tu-kiem-tra.md":"1025ee30cce22294257b3f04f90df9f7cd23fc51","docs/thpt-preview/chuyen-de/cd11/kien-thuc.md":"4f6b2e3a5e9dfb137626f02a58a4eeedb487a1a1","docs/thpt-preview/chuyen-de/cd11/luyen-tap.md":"62b40d0a392d670d4e2b8cfd7e5a6f9568852ac9","docs/thpt-preview/chuyen-de/cd11/tu-kiem-tra.md":"cd45183dffbd60c04d8c75cf0e55d8c2ac21efbe","scripts/test-thpt-topic-rw1-math-browser.py":"2bb6602bb255926bc52e5611d1dbc5520f3be8d9","scripts/test-thpt-topic-w2-golden-browser.py":"dc5337609bd46e96a5b8f35cda82b706bcca8dd2","scripts/test-thpt-topic-w2-source-locked.py":"00019a07f39a9d734c23a835c4426f1941e3bdff"};
function isExactW2bRefresh(files){
 const crypto=require("node:crypto"),blob=p=>{const b=fs.readFileSync(p);return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex");};
 return files.length===W2B_REFRESH_FILES.size&&new Set(files).size===files.length&&files.every(f=>W2B_REFRESH_FILES.has(f))&&Object.entries(W2B_REFRESH_BLOBS).every(([p,sha])=>blob(p)===sha);
}
function proveW2bRefresh(){
 const cp=require("node:child_process"),git=(...args)=>cp.execFileSync("git",args,{encoding:"utf8"}),base=process.env.BASE_SHA;
 assert.equal(base,"63cd3f3eafff6c2f013c15405903006cef14165c","W2b base must be exact W2a merge");
 assert(isExactW2bRefresh(git("diff","--no-renames","--name-only",base,"HEAD").trim().split("\n")),"W2b exact scope HOLD");
 const helper="docs/assets/javascripts/math-details-v1.js",adapter="docs/assets/javascripts/thpt-topic-w2-golden-v1.js",before=git("show",base+":"+helper),now=fs.readFileSync(helper,"utf8");
 assert(now.includes("cd(?:0[1-9]|1[01])\\/(?:luyen-tap|tu-kiem-tra)")&&now.replace("cd(?:0[1-9]|1[01])\\/(?:luyen-tap|tu-kiem-tra)","cd0[1-8]\\/(?:luyen-tap|tu-kiem-tra)")===before,"Unrelated shared math behavior changed");
 const j=fs.readFileSync(adapter,"utf8");
 assert(j.includes('["06","07","08","09","10","11"].includes(topic)')&&j.replace('["06","07","08","09","10","11"].includes(topic)','["06","07","08"].includes(topic)')===git("show",base+":"+adapter),"W2a or other adapter behavior changed");
 cp.execFileSync("node",["--check",adapter],{stdio:"inherit"});
 cp.execFileSync("node",["--check",helper],{stdio:"inherit"});
 console.log("PASS exact W2b nine projections and signed figure; public route-only MathJax, W2a unchanged");
}
const W2A_REFRESH_FILES=new Set(["docs/assets/javascripts/math-details-v1.js","docs/assets/javascripts/thpt-topic-w2-golden-v1.js","docs/assets/visuals/THPT_TOPIC06_COS_PHASE_COMPARISON_R01.svg","docs/assets/visuals/THPT_TOPIC06_COT_ASYMPTOTES_R01.svg","docs/assets/visuals/THPT_TOPIC06_TAN_ASYMPTOTES_R01.svg","docs/assets/visuals/THPT_TOPIC07_AP_VS_GP_GROWTH_R01.svg","docs/thpt-preview/chuyen-de/cd06/kien-thuc.md","docs/thpt-preview/chuyen-de/cd06/luyen-tap.md","docs/thpt-preview/chuyen-de/cd06/tu-kiem-tra.md","docs/thpt-preview/chuyen-de/cd07/kien-thuc.md","docs/thpt-preview/chuyen-de/cd07/luyen-tap.md","docs/thpt-preview/chuyen-de/cd07/tu-kiem-tra.md","docs/thpt-preview/chuyen-de/cd08/kien-thuc.md","docs/thpt-preview/chuyen-de/cd08/luyen-tap.md","docs/thpt-preview/chuyen-de/cd08/tu-kiem-tra.md","scripts/test-thpt-topic-rw1-math-browser.py","scripts/test-thpt-topic-w2-golden-browser.py","scripts/test-thpt-topic-w2-source-locked.py","scripts/test-thpt-release-impact.cjs",".github/workflows/thpt-topic-w2-golden-release-qa.yml",".github/workflows/thpt-topic-rw1-math-qa.yml",".github/workflows/deploy.yml",".github/workflows/thpt-deploy-scope-safety-qa.yml"]);
const W2A_REFRESH_BLOBS={"docs/assets/javascripts/math-details-v1.js":"2f465a36312fe662ada47631fc51f7ca42ced7b1","docs/assets/javascripts/thpt-topic-w2-golden-v1.js":"2b67a81dbef1d79eaeed1360698724b851ca3241","docs/assets/visuals/THPT_TOPIC06_COS_PHASE_COMPARISON_R01.svg":"c8734ab09037afc437aa48344178a975bc23bf87","docs/assets/visuals/THPT_TOPIC06_COT_ASYMPTOTES_R01.svg":"eac15f15e82e2e33cde3e09b07ced3c6455728b5","docs/assets/visuals/THPT_TOPIC06_TAN_ASYMPTOTES_R01.svg":"76edbe0917c90d9f67f82cfd91f1fd28784f2e53","docs/assets/visuals/THPT_TOPIC07_AP_VS_GP_GROWTH_R01.svg":"e3be79f17eadcd26d36b99f28dc0df8f4158addb","docs/thpt-preview/chuyen-de/cd06/kien-thuc.md":"e290dcfeb4c98721d46add0a777967dbfc1950aa","docs/thpt-preview/chuyen-de/cd06/luyen-tap.md":"b929c3a9fec06dc3ef374272d9ba1fb00dab01b5","docs/thpt-preview/chuyen-de/cd06/tu-kiem-tra.md":"70f606e59e42dd88f6f985c924f8f10bd9f48504","docs/thpt-preview/chuyen-de/cd07/kien-thuc.md":"4e08635870d886fec6dbc6a7b70c31d46cdadae9","docs/thpt-preview/chuyen-de/cd07/luyen-tap.md":"de9c5d7c617448d267584a983e48789bcd5ae720","docs/thpt-preview/chuyen-de/cd07/tu-kiem-tra.md":"931625da273d3190b3feaa6e63d1e2820f3810a3","docs/thpt-preview/chuyen-de/cd08/kien-thuc.md":"af2a6603fc2db415b511ac8f7f32db1c7f570fad","docs/thpt-preview/chuyen-de/cd08/luyen-tap.md":"45af28531465c49521b6af7e4695a650223d5d84","docs/thpt-preview/chuyen-de/cd08/tu-kiem-tra.md":"0ff6692b1a27927778ae69255721823b35240aee","scripts/test-thpt-topic-rw1-math-browser.py":"402e4df22b41b29f894d5912600edd06e571074c","scripts/test-thpt-topic-w2-golden-browser.py":"8190f0634ee307349242afcc40fde0dfb766c502","scripts/test-thpt-topic-w2-source-locked.py":"6f7172a042278627aa5828d4413cb3fc9cfd486e"};
function isExactW2aRefresh(files){
 const crypto=require("node:crypto"),blob=p=>{const b=fs.readFileSync(p);return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex");};
 return files.length===W2A_REFRESH_FILES.size&&new Set(files).size===files.length&&files.every(f=>W2A_REFRESH_FILES.has(f))&&Object.entries(W2A_REFRESH_BLOBS).every(([p,sha])=>blob(p)===sha);
}
function proveW2aRefresh(){
 const cp=require("node:child_process"),git=(...args)=>cp.execFileSync("git",args,{encoding:"utf8"}),base=process.env.BASE_SHA;
 assert.equal(base,"67f11247ed669d4b1fb88085e780c079e926e09d","W2a base must be exact W1 recovery");
 assert(isExactW2aRefresh(git("diff","--no-renames","--name-only",base,"HEAD").trim().split("\n")),"W2a exact scope HOLD");
 const helper="docs/assets/javascripts/math-details-v1.js",before=git("show",base+":"+helper),now=fs.readFileSync(helper,"utf8");
 assert(now.includes("cd0[1-8]\\/(?:luyen-tap|tu-kiem-tra)")&&now.replace("cd0[1-8]\\/(?:luyen-tap|tu-kiem-tra)","cd0[1-5]\\/(?:luyen-tap|tu-kiem-tra)")===before,"Unrelated shared math behavior changed");
 cp.execFileSync("node",["--check","docs/assets/javascripts/thpt-topic-w2-golden-v1.js"],{stdio:"inherit"});
 cp.execFileSync("node",["--check",helper],{stdio:"inherit"});
 console.log("PASS exact W2a nine projections, signed figures and public route-only MathJax; W1 and other sources/protected data unchanged");
}
const TOPIC_W1_REFRESH_FILES=new Set(["docs/assets/visuals/THPT_TOPIC03_RADICAL_DOMAIN_NUMBERLINE_R01.svg","docs/thpt-preview/chuyen-de/cd02/kien-thuc.md","docs/thpt-preview/chuyen-de/cd02/luyen-tap.md","docs/thpt-preview/chuyen-de/cd02/tu-kiem-tra.md","docs/thpt-preview/chuyen-de/cd03/kien-thuc.md","docs/thpt-preview/chuyen-de/cd03/luyen-tap.md","docs/thpt-preview/chuyen-de/cd03/tu-kiem-tra.md","docs/thpt-preview/chuyen-de/cd04/kien-thuc.md","docs/thpt-preview/chuyen-de/cd04/luyen-tap.md","docs/thpt-preview/chuyen-de/cd04/tu-kiem-tra.md","docs/thpt-preview/chuyen-de/cd05/kien-thuc.md","docs/thpt-preview/chuyen-de/cd05/luyen-tap.md","docs/thpt-preview/chuyen-de/cd05/tu-kiem-tra.md","scripts/test-thpt-topic-w1-source-locked.py","docs/assets/javascripts/thpt-topic-w1-golden-v1.js","docs/assets/javascripts/math-details-v1.js","scripts/test-thpt-topic-w1-golden-browser.py","scripts/test-thpt-topic-rw1-math-browser.py","scripts/test-thpt-release-impact.cjs",".github/workflows/thpt-topic-w1-golden-release-qa.yml",".github/workflows/thpt-topic-rw1-math-qa.yml",".github/workflows/deploy.yml",".github/workflows/thpt-deploy-scope-safety-qa.yml"]);
const TOPIC_W1_REFRESH_BLOBS={"docs/assets/visuals/THPT_TOPIC03_RADICAL_DOMAIN_NUMBERLINE_R01.svg":"78689938988f1a4e097aebbade89c85be0ab8b79","docs/thpt-preview/chuyen-de/cd02/kien-thuc.md":"fa291bb9c8dd4c2a47a5904e369cbd9fb6ca8ec8","docs/thpt-preview/chuyen-de/cd02/luyen-tap.md":"4fcaf06e4d6e5486d071808cc8825a7ed518a387","docs/thpt-preview/chuyen-de/cd02/tu-kiem-tra.md":"b20ac5670e2cc947f867ea967298be21d66dee5b","docs/thpt-preview/chuyen-de/cd03/kien-thuc.md":"c706aef1363f2b12327f8cae02fda96b9966378a","docs/thpt-preview/chuyen-de/cd03/luyen-tap.md":"b3162e0bd10d3e8f77a9ddcaec65c8279ac0cc7d","docs/thpt-preview/chuyen-de/cd03/tu-kiem-tra.md":"788cbed9793f74bcfdcff58ea6dc139ff865657d","docs/thpt-preview/chuyen-de/cd04/kien-thuc.md":"68bd81dbd71a3b139249d2fe09df1a0b966b144a","docs/thpt-preview/chuyen-de/cd04/luyen-tap.md":"fd0694d0a77b10867a34fd9fecda29421cf4accb","docs/thpt-preview/chuyen-de/cd04/tu-kiem-tra.md":"5a1f9830346909082c826d24adb0272c0548dc20","docs/thpt-preview/chuyen-de/cd05/kien-thuc.md":"65eab422a486ce828201e43aaafc44f8e909ec12","docs/thpt-preview/chuyen-de/cd05/luyen-tap.md":"82f79a8610bcad4e83093acdd529116d435fb2c7","docs/thpt-preview/chuyen-de/cd05/tu-kiem-tra.md":"5c29ccdbfe86eeeef510f73340b093001a1d828e","scripts/test-thpt-topic-w1-source-locked.py":"bf624cf2955c88666f7decc7cc74fb70d00ebd26","docs/assets/javascripts/thpt-topic-w1-golden-v1.js":"d9495451ac961d0d0d8247cf7f6ae8ea06c0bf3b","docs/assets/javascripts/math-details-v1.js":"0f20a009d429b5f9e31a8ee6ead95710abaeb395"};
function isExactTopicW1Refresh(files){
 const crypto=require("node:crypto"),blob=p=>{const b=fs.readFileSync(p);return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex");};
 return files.length===TOPIC_W1_REFRESH_FILES.size&&new Set(files).size===files.length&&files.every(f=>TOPIC_W1_REFRESH_FILES.has(f))&&Object.entries(TOPIC_W1_REFRESH_BLOBS).every(([p,sha])=>blob(p)===sha);
}
function proveTopicW1Refresh(){
 const cp=require("node:child_process"),git=(...args)=>cp.execFileSync("git",args,{encoding:"utf8"}),base=process.env.BASE_SHA;
 assert.equal(base,"f4a6442946801780208cad00b01e4b9ea26d3dfd","W1 base must be published CĐ01 snapshot");
 assert(isExactTopicW1Refresh(git("diff","--no-renames","--name-only",base,"HEAD").trim().split("\n")),"W1 exact scope HOLD");
 const helper="docs/assets/javascripts/math-details-v1.js",before=git("show",base+":"+helper),now=fs.readFileSync(helper,"utf8");
 assert(now.includes("!/\\/thpt-preview\\/chuyen-de\\/cd0[1-5]\\/(?:luyen-tap|tu-kiem-tra)\\/(?:index\\.html)?$/.test(location.pathname)")&&now.replace("!/\\/thpt-preview\\/chuyen-de\\/cd0[1-5]\\/(?:luyen-tap|tu-kiem-tra)\\/(?:index\\.html)?$/.test(location.pathname)","!/\\/thpt-preview\\/chuyen-de\\/cd01\\/(?:luyen-tap|tu-kiem-tra)\\/(?:index\\.html)?$/.test(location.pathname)")===before,"Unrelated shared math/SGK/THCS or CĐ01 behavior changed");
 cp.execFileSync("node",["--check","docs/assets/javascripts/thpt-topic-w1-golden-v1.js"],{stdio:"inherit"});
 cp.execFileSync("node",["--check",helper],{stdio:"inherit"});
 console.log("PASS exact W1 12 projections, signed SVG and route-scoped public MathJax; CD01/protected data unchanged");
}
const TOPIC01_REFRESH_FILES=new Set(["docs/assets/javascripts/thpt-topic01-release-tabs-v1.js","docs/assets/javascripts/math-details-v1.js","docs/thpt-preview/chuyen-de/cd01/kien-thuc.md","docs/thpt-preview/chuyen-de/cd01/luyen-tap.md","docs/thpt-preview/chuyen-de/cd01/tu-kiem-tra.md","docs/assets/visuals/THPT_TOPIC01_INTERVAL_INTERSECTION_UNION.svg","scripts/topic01-release-intake-manifest.tsv","scripts/test-thpt-topic01-release-intake.cjs","scripts/test-thpt-topic01-release-browser.py","scripts/test-thpt-topic-rw1-math-browser.py","scripts/test-thpt-release-impact.cjs",".github/workflows/thpt-topic-rw1-math-qa.yml",".github/workflows/deploy.yml",".github/workflows/thpt-deploy-scope-safety-qa.yml",".github/workflows/thpt-topic-w1-golden-release-qa.yml",".github/workflows/thpt-topic01-source-locked-release-qa.yml"]);
const TOPIC01_REFRESH_BLOBS={"docs/assets/javascripts/thpt-topic01-release-tabs-v1.js":"5bd0b944202cff42c6c1955c39dea9085c12a515","docs/assets/javascripts/math-details-v1.js":"f20a884dc284d880f17ea25b90cc520753ea109a","docs/thpt-preview/chuyen-de/cd01/kien-thuc.md":"91bd077fad2ea072d4debfc54d9a7a8c397c59a8","docs/thpt-preview/chuyen-de/cd01/luyen-tap.md":"d0422d755fedb9a3f266bf76d3a9780357723eca","docs/thpt-preview/chuyen-de/cd01/tu-kiem-tra.md":"7d74439f49a971491893653d04e229d2227696ca","docs/assets/visuals/THPT_TOPIC01_INTERVAL_INTERSECTION_UNION.svg":"f405493bc6eefedc2106bb93316d981eb36931ce","scripts/topic01-release-intake-manifest.tsv":"bbc6ca2f6b5dd455ec872e3606a991d3c131bfbb"};
function isExactTopic01Refresh(files){
 const crypto=require("node:crypto"),blob=p=>{const b=fs.readFileSync(p);return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex");};
 return files.length===TOPIC01_REFRESH_FILES.size&&new Set(files).size===files.length&&files.every(f=>TOPIC01_REFRESH_FILES.has(f))&&Object.entries(TOPIC01_REFRESH_BLOBS).every(([p,sha])=>blob(p)===sha);
}
function proveTopic01Refresh(){
 const cp=require("node:child_process"),git=(...args)=>cp.execFileSync("git",args,{encoding:"utf8"}),base=process.env.BASE_SHA;
 assert.equal(base,"360ee2737c86f59fa16a7ecdcd8951e2686f3c96","CĐ01 refresh base must match published snapshot");
 assert(isExactTopic01Refresh(git("diff","--no-renames","--name-only",base,"HEAD").trim().split("\n")),"CĐ01 exact scope HOLD");
 const helper="docs/assets/javascripts/math-details-v1.js";
 const before=git("show",base+":"+helper),candidate=fs.readFileSync(helper,"utf8");
 const oldRoute=' if(!/\\/thpt-preview\\/chuyen-de\\/cd(?:0[1-9]|1[0-9]|2[0-2])\\/kien-thuc\\/(?:index\\.html)?$/.test(location.pathname))return;';
 const newRoute=' // Extend the existing helper only to the two CĐ01 public replay/formative routes.\n if(!/\\/thpt-preview\\/chuyen-de\\/cd(?:0[1-9]|1[0-9]|2[0-2])\\/kien-thuc\\/(?:index\\.html)?$/.test(location.pathname)&&\n    !/\\/thpt-preview\\/chuyen-de\\/cd01\\/(?:luyen-tap|tu-kiem-tra)\\/(?:index\\.html)?$/.test(location.pathname))return;';
 assert(candidate.includes(newRoute),"Exact CĐ01-only helper route guard missing");
 assert.equal(candidate.replace(newRoute,oldRoute),before,"Unrelated shared MathJax/SGK/THCS implementation changed");
 cp.execFileSync("node",["scripts/test-thpt-topic01-release-intake.cjs"],{stdio:"inherit"});
 cp.execFileSync("node",["--check","docs/assets/javascripts/thpt-topic01-release-tabs-v1.js"],{stdio:"inherit"});
 cp.execFileSync("node",["--check","docs/assets/javascripts/math-details-v1.js"],{stdio:"inherit"});
 console.log("PASS CĐ01 CP10 exact projections, approved SVG and scoped public MathJax adapter fix; other topics and protected data unchanged");
}
const WRITTEN_LIBRARY_UI_FILES=new Set(["scripts/assemble-thpt-site.cjs","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-topic-rw1-math-browser.py",".github/workflows/thpt-topic-rw1-math-qa.yml",".github/workflows/deploy.yml",".github/workflows/thpt-deploy-scope-safety-qa.yml"]);
function isExactWrittenLibraryUI(files){
 const crypto=require("node:crypto"),blob=p=>{const b=fs.readFileSync(p);return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex");};
 return files.length===WRITTEN_LIBRARY_UI_FILES.size&&new Set(files).size===files.length&&files.every(f=>WRITTEN_LIBRARY_UI_FILES.has(f))&&blob("scripts/assemble-thpt-site.cjs")==="03ade7da1ce85da92fecc9a9e3771ac55a052f16"&&fs.readFileSync("scripts/test-thpt-topic-rw1-math-browser.py","utf8").includes("WRITTEN_LIBRARY_UI_ONLY");
}
function proveWrittenLibraryUI(){
 const cp=require("node:child_process"),git=(...args)=>cp.execFileSync("git",args,{encoding:"utf8"}),base=process.env.BASE_SHA;
 assert.equal(base,"ba76a2e7abe6e3b9bc50459795ff0cf6593edb0b","Written library base must match published snapshot");
 assert(isExactWrittenLibraryUI(git("diff","--no-renames","--name-only",base,"HEAD").trim().split("\n")),"Written library exact scope HOLD");
 const p="scripts/assemble-thpt-site.cjs",old=git("show",base+":"+p),now=fs.readFileSync(p,"utf8");
 assert.equal(now.replace(/\/\/ BEGIN WRITTEN LIBRARY UI:[\s\S]*?\/\/ END WRITTEN LIBRARY UI\n/,""),old,"Unrelated assembly changed");
 console.log("PASS Written library exact scope: canonical content, Core CSS/runtime, R3 and all other assets unchanged");
}
const TOPIC_BACK_TOP_FILES=new Set(["scripts/assemble-thpt-site.cjs","scripts/test-thpt-topic-rw1-math-browser.py","scripts/test-thpt-release-impact.cjs"]);
function isExactTopicBackTop(files){
 const crypto=require("node:crypto"),blob=p=>{const b=fs.readFileSync(p);return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex");};
 return files.length===TOPIC_BACK_TOP_FILES.size&&new Set(files).size===files.length&&files.every(f=>TOPIC_BACK_TOP_FILES.has(f))&&
  blob("scripts/assemble-thpt-site.cjs")==="16efc896576761caab8afea7392854b445c7aee7"&&
  blob("docs/assets/javascripts/sticky-nav-v1.js")==="9b9f23018d7570e84d9d37c9cee7df4f452bf75b"&&
  blob("docs/assets/stylesheets/site-design-system.css")==="5765dfe92168804a67b4d3b62ef4a1305313b349"&&
  fs.readFileSync("scripts/test-thpt-topic-rw1-math-browser.py","utf8").includes("TOPIC_BACK_TOP_R3");
}
function proveTopicBackTop(){
 const cp=require("node:child_process"),git=(...args)=>cp.execFileSync("git",args,{encoding:"utf8"}),base=process.env.BASE_SHA;
 assert.equal(base,"0bf8478386709aefdf5083afb4aedf1a74611cac","R3 base must match published snapshot");
 assert(isExactTopicBackTop(git("diff","--no-renames","--name-only",base,"HEAD").trim().split("\n")),"R3 exact scope HOLD");
 for(const p of ["docs/assets/javascripts/sticky-nav-v1.js","docs/assets/stylesheets/site-design-system.css"]){
  assert.equal(fs.readFileSync(p,"utf8"),git("show",base+":"+p),"Approved runtime/design unchanged "+p);
 }
 const p="scripts/assemble-thpt-site.cjs",old=git("show",base+":"+p),now=fs.readFileSync(p,"utf8");
 assert.equal(now.replace(/\/\/ R3 first paint: native markup and versioned assets\.[\s\S]*?\/\/ End R3 first paint\.\n/,""),old,"Unrelated assembly behavior changed");
 console.log("PASS R3 exact delta: first-paint HTML and asset versions only; approved runtime/design and content unchanged");
}
const MENU_6_PLUS_1_FILES=new Set(["docs/assets/javascripts/thpt-r4-preview.js","docs/assets/stylesheets/thpt-r4-preview.css","scripts/test-thpt-r4-preview-browser.js","scripts/test-self-learning-math-rename-browser.cjs","scripts/test-math-lab-25-release-intake.cjs","scripts/test-math-lab-25-browser.py","scripts/test-thpt-release-impact.cjs",".github/workflows/thpt-topic-rw1-math-qa.yml",".github/workflows/math-lab-25-release-intake-qa.yml",".github/workflows/deploy.yml",".github/workflows/thpt-deploy-scope-safety-qa.yml"]);
function isExactMenu6Plus1(files){
 const crypto=require("node:crypto");
 const blob=p=>{const bytes=fs.readFileSync(p);return crypto.createHash("sha1").update("blob "+bytes.length+"\0").update(bytes).digest("hex");};
 return files.length===MENU_6_PLUS_1_FILES.size&&new Set(files).size===files.length&&files.every(f=>MENU_6_PLUS_1_FILES.has(f))&&
  blob("docs/assets/javascripts/thpt-r4-preview.js")==="0da9e816048c10745fa9dceda3dcb14c4f3a756f"&&
  blob("docs/assets/stylesheets/thpt-r4-preview.css")==="9cd256b3301d4f0ee748a0fc16130df8370e37cb"&&
  fs.readFileSync("scripts/test-math-lab-25-browser.py","utf8").includes("THPT_MENU_ONLY");
}
function proveMenu6Plus1(){
 const cp=require("node:child_process"),git=(...args)=>cp.execFileSync("git",args,{encoding:"utf8"});
 const base=process.env.BASE_SHA;
 assert.equal(base,"7add09ad572074fa02f7ff75a8059400e327636e","Menu base is not the exact published snapshot");
 assert(isExactMenu6Plus1(git("diff","--no-renames","--name-only",base,"HEAD").trim().split("\n")),"Menu exact scope HOLD");
 const js="docs/assets/javascripts/thpt-r4-preview.js",css="docs/assets/stylesheets/thpt-r4-preview.css";
 const outside=s=>{const a=s.indexOf(" function initTHPTLauncher(){"),b=s.indexOf(" function initQuadraticPlot(){",a);assert(a>=0&&b>a);return s.slice(0,a)+s.slice(b);};
 assert.equal(outside(fs.readFileSync(js,"utf8")),outside(git("show",base+":"+js)),"Non-menu runtime changed");
 assert(fs.readFileSync(css,"utf8").startsWith(git("show",base+":"+css)),"Existing CSS changed");
 console.log("PASS menu 6+1 only, existing THCS, content, math, assessment and CSS unchanged");
}
const TOPIC_DISCLOSURE_FILES=new Set(["docs/assets/javascripts/math-details-v1.js","scripts/test-thpt-topic-rw1-math-browser.py","scripts/test-thpt-release-impact.cjs",".github/workflows/thpt-topic-rw1-math-qa.yml",".github/workflows/deploy.yml",".github/workflows/thpt-deploy-scope-safety-qa.yml","docs/assets/stylesheets/thpt-topic01-release-v1.css","docs/assets/stylesheets/thpt-topic-w1-golden-v1.css",".github/workflows/thpt-topic01-source-locked-release-qa.yml",".github/workflows/thpt-topic-w1-golden-release-qa.yml",".github/workflows/thpt-topic-w2-golden-release-qa.yml"]);
function isExactTopicDisclosures(files){
 const crypto=require("node:crypto"),blob=p=>{const b=fs.readFileSync(p);return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex");};
 return files.length===TOPIC_DISCLOSURE_FILES.size&&new Set(files).size===files.length&&files.every(f=>TOPIC_DISCLOSURE_FILES.has(f))&&
  [["docs/assets/javascripts/math-details-v1.js","5db3b192527694119596bbe3e3eb46a8fce35d89"],["docs/assets/stylesheets/thpt-topic01-release-v1.css","32b66dcfd16dc778490f0560b90ae54a62f0fb7b"],["docs/assets/stylesheets/thpt-topic-w1-golden-v1.css","81cf00277e9db1e481f78ddfe00fbdb4eebaaefa"]].every(([p,sha])=>blob(p)===sha)&&fs.readFileSync("scripts/test-thpt-topic-rw1-math-browser.py","utf8").includes("TOPIC_SGK_DISCLOSURE_ONLY");
}
function proveTopicDisclosures(){
 const cp=require("node:child_process"),git=(...args)=>cp.execFileSync("git",args,{encoding:"utf8"});
 const base=process.env.BASE_SHA;
 assert(/^[0-9a-f]{40}$/.test(base||""),"Actual base required");
 assert(isExactTopicDisclosures(git("diff","--no-renames","--name-only",base,"HEAD").trim().split("\n")),"Disclosure scope HOLD");
 const helper="docs/assets/javascripts/math-details-v1.js";
 const old=git("show",base+":"+helper),now=fs.readFileSync(helper,"utf8");
 const restore=now.replace(/ \/\/ OWNER: use the same two native disclosures[\s\S]*?(?= function prepare\(root\)\{)/,"").replace("  root.querySelectorAll(\"details\").forEach(splitSGKDisclosure);\n","");
 assert.equal(restore,old,"Math/SGK logic changed outside the new disclosure split");
 const css="docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css";
 assert.equal(fs.readFileSync(css,"utf8"),git("show",base+":"+css),"SGK stylesheet must be byte-identical");
 for(const p of ["docs/assets/stylesheets/thpt-topic01-release-v1.css","docs/assets/stylesheets/thpt-topic-w1-golden-v1.css"]){
  const prior=fs.readFileSync(p,"utf8").replaceAll(":not([data-topic-sgk-disclosure])","").replace(/\n\/\* Native SGK disclosures only\.[\s\S]*$/,"");
  assert.equal(prior,git("show",base+":"+p),"Unrelated Topic CSS changed");
 }
 console.log("PASS exact disclosure-only scope: SGK declarations and all math code unchanged; no source/assessment edits");
}
// Exact governance-only files: other learner/runtime changes remain FULL.
const MATH_NOTATION_GOVERNANCE=new Set(["AGENTS.md","prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md","prototypes/thpt/SGK_11_12_AUTHORING_CHECKLIST_OWNER_RESET_20261122.md","scripts/test-thpt-push-deploy-scope.cjs","scripts/test-thpt-release-impact.cjs",".github/workflows/thpt-topic-rw1-math-qa.yml"]);
function classify(paths,{manual=false,base=""}={}){
 const files=paths.map(s=>s.trim()).filter(Boolean);
 if(manual)return {impact:"FULL",full_suite:"true",changed_lessons:"",reason:"MANUAL_FULL_REQUEST"};
 if(!files.length)return {impact:"FULL",full_suite:"true",changed_lessons:"",reason:"EMPTY_DIFF"};
 if(files.some(x=>x.includes("..")||x.includes("\\")||x.startsWith("/")))
  return {impact:"FULL",full_suite:"true",changed_lessons:"",reason:"UNSAFE_PATH"};
 if(files.length===MATH_NOTATION_GOVERNANCE.size&&new Set(files).size===files.length&&files.every(p=>MATH_NOTATION_GOVERNANCE.has(p)))
  return {impact:"METADATA",full_suite:"false",changed_lessons:"",reason:"EXACT_MATH_NOTATION_GOVERNANCE_ONLY"};
 if(isExactW1Recovery(files,base))return {impact:"SCOPED_TOPIC_SHARED_MATH",full_suite:"false",changed_lessons:"",reason:"OWNER_W1_DEPLOY_RECOVERY_EXACT"};
 if(isExactW5Refresh(files))return {impact:"SCOPED_TOPIC_SHARED_MATH",full_suite:"false",changed_lessons:"",reason:"OWNER_TOPIC_W5_REFRESH"};
 if(isExactW4Refresh(files))return {impact:"SCOPED_TOPIC_SHARED_MATH",full_suite:"false",changed_lessons:"",reason:"OWNER_TOPIC_W4_REFRESH"};
 if(isExactW3bRefresh(files))return {impact:"SCOPED_TOPIC_SHARED_MATH",full_suite:"false",changed_lessons:"",reason:"OWNER_TOPIC_W3B_REFRESH"};
 if(isExactW3aRefresh(files))return {impact:"SCOPED_TOPIC_SHARED_MATH",full_suite:"false",changed_lessons:"",reason:"OWNER_TOPIC_W3A_REFRESH"};
 if(isExactW2bRefresh(files))return {impact:"SCOPED_TOPIC_SHARED_MATH",full_suite:"false",changed_lessons:"",reason:"OWNER_TOPIC_W2B_REFRESH"};
 if(isExactW2aRefresh(files))return {impact:"SCOPED_TOPIC_SHARED_MATH",full_suite:"false",changed_lessons:"",reason:"OWNER_TOPIC_W2A_REFRESH"};
 if(isExactTopicW1Refresh(files))return {impact:"SCOPED_TOPIC_SHARED_MATH",full_suite:"false",changed_lessons:"",reason:"OWNER_TOPIC_W1_REFRESH"};
 if(isExactTopic01Refresh(files))return {impact:"SCOPED_TOPIC_SHARED_MATH",full_suite:"false",changed_lessons:"",reason:"OWNER_TOPIC01_REFRESH_CP10"};
 if(isExactWrittenLibraryUI(files))return {impact:"SCOPED_TOPIC_SHARED_MATH",full_suite:"false",changed_lessons:"",reason:"OWNER_WRITTEN_LIBRARY_UI"};
 if(isExactTopicBackTop(files))return {impact:"SCOPED_TOPIC_SHARED_MATH",full_suite:"false",changed_lessons:"",reason:"OWNER_TOPIC_BACK_TOP_R3"};
 if(isExactMenu6Plus1(files))return {impact:"SCOPED_TOPIC_SHARED_MATH",full_suite:"false",changed_lessons:"",reason:"OWNER_THPT_MENU_6_PLUS_1"};
 if(isExactTopicDisclosures(files))return {impact:"SCOPED_TOPIC_SHARED_MATH",full_suite:"false",changed_lessons:"",reason:"OWNER_TOPIC_SGK_DISCLOSURES"};
 if(isExactRW3Tabs(files))return {impact:"SCOPED_TOPIC_SHARED_MATH",full_suite:"false",changed_lessons:"",reason:"OWNER_1055_RW3_TAB_LABELS"};
 if(isExactSharedDeployRecovery(files,base))return {impact:"SCOPED_TOPIC_SHARED_MATH",full_suite:"false",changed_lessons:"",reason:"OWNER_1110_DEPLOY_RECOVERY_EXACT"};
 if(isExactSharedKnowledgeMath(files))return {impact:"SCOPED_TOPIC_SHARED_MATH",full_suite:"false",changed_lessons:"",reason:"OWNER_1055_EXACT_SHARED_KNOWLEDGE_MATH_RW2"};
 if(isExactTopicRW1(files))return {impact:"SCOPED_TOPIC_RW1",full_suite:"false",changed_lessons:"",reason:"OWNER_1055_RW1_EXACT_KNOWLEDGE_MATH_TAB_QA"};
 if(isG12MathHotfix(files))return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:G12_MATH_HOTFIX_LESSONS.join(","),reason:"OWNER_1039_G12_MATH_HOTFIX"};
 if(isG12W13(files))return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:G12_W13_LESSONS.join(","),reason:"OWNER_1039_W13_EXACT_SOURCE_AND_BROWSER"};
 if(isG12W12(files))return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:G12_W12_LESSONS.join(","),reason:"OWNER_1039_W12_EXACT_SOURCE_AND_BROWSER"};
 if(isG12W11(files))return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:G12_W11_LESSONS.join(","),reason:"OWNER_1039_W11_EXACT_SOURCE_AND_BROWSER"};
 if(isG12W10(files))return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:G12_W10_LESSONS.join(","),reason:"OWNER_1039_W10_EXACT_SOURCE_AND_BROWSER"};
 if(isG12W9(files))return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:G12_W9_LESSONS.join(","),reason:"OWNER_1039_W9_EXACT_SOURCE_AND_BROWSER"};
 if(isG12W8(files))return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:G12_W8_LESSONS.join(","),reason:"OWNER_1039_W8_EXACT_SOURCE_AND_BROWSER"};
 if(isG11W7(files))return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:G11_W7_LESSONS.join(","),reason:"OWNER_1039_W7_EXACT_SOURCE_AND_BROWSER"};
 if(isG11W6(files))return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:G11_W6_LESSONS.join(","),reason:"OWNER_1039_W6_EXACT_SOURCE_AND_BROWSER"};
 if(isG11W5(files))return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:G11_W5_LESSONS.join(","),reason:"OWNER_1039_W5_EXACT_SOURCE_AND_BROWSER"};
 if(isG11W4(files))return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:G11_W4_LESSONS.join(","),reason:"OWNER_1039_W4_EXACT_SOURCE_AND_BROWSER"};
 if(isG11W3(files))return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:G11_W3_LESSONS.join(","),reason:"OWNER_1039_W3_EXACT_SOURCE_AND_BROWSER"};
 if(isG11W2(files))return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:G11_W2_LESSONS.join(","),reason:"OWNER_1039_W2_EXACT_SOURCE_AND_BROWSER"};
 if(isG11W1ReviewDelta(files))return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:"docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md,docs/thpt-preview/sgk/lop-11/chuong-i/bai-3.md,docs/thpt-preview/sgk/lop-11/chuong-i/bai-4.md",reason:"OWNER_1039_W1_REVIEW_DELTA_EXACT_SOURCE"};
 if(isG11W1Tab4Hotfix(files))return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:"docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md,docs/thpt-preview/sgk/lop-11/chuong-i/bai-3.md,docs/thpt-preview/sgk/lop-11/chuong-i/bai-4.md",reason:"SGK_REL_006_EXACT_TAB4_PRESENTATION_ONLY"};
 if(isG11W1Release(files))return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:"docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md,docs/thpt-preview/sgk/lop-11/chuong-i/bai-3.md,docs/thpt-preview/sgk/lop-11/chuong-i/bai-4.md",reason:"EXACT_OWNER_1039_G11_W1_HANDOFF_SOURCE_AND_BROWSER"};
 if(isExactMathLabFullPage(files))return {impact:"SCOPED_MATH_LAB_FULLPAGE",full_suite:"false",changed_lessons:"",reason:"OWNER_25_MODELS_DIRECT_FULL_PAGE_WITH_200_BROWSER_GATES"};
 if(isMathLabDeployRecovery(files))return {impact:"SCOPED_MATH_LAB_FULLPAGE",full_suite:"false",changed_lessons:"",reason:"OWNER_POSTMERGE_V2_HEAD_SHA_DEPLOY_RECOVERY_25_MODEL_200_BROWSER_PROOF"};
 if(isMathLabRestorePage(files))return {impact:"SCOPED_MATH_LAB_FULLPAGE",full_suite:"false",changed_lessons:"",reason:"OWNER_RESTORE_25_ORIGINAL_MODEL_PAGE_GUIDANCE_BACK_NAV_WITHOUT_IFRAMES"};
 if(isMathLabExponentDisplay(files))return {impact:"SCOPED_MATH_LAB_FULLPAGE",full_suite:"false",changed_lessons:"",reason:"OWNER_MATHLAB_CĐ04_DISPLAY_SUPERSCRIPT_SIGNED_SOURCE_UNCHANGED_200_BROWSER_QA"};
 if(isScopedTopicW2W3Hotfix(files))return {impact:"SCOPED_TOPIC_HOTFIX_W2_W3",full_suite:"false",changed_lessons:"",reason:"OWNER_POSTPUBLISH_CĐ06_15_TEXT_MATH_SCOPED_BROWSER"};
 if(isExactW5InlineAudit(files))return {impact:"SCOPED_TOPIC_W5_P1_HOTFIX",full_suite:"false",changed_lessons:"",reason:"OWNER_W5_COMPLETE_VISIBLE_MATH_AUDIT_EXACT_THREE_FILES"};
 if(isExactW5P1(files))return {impact:"SCOPED_TOPIC_W5_P1_HOTFIX",full_suite:"false",changed_lessons:"",reason:"EXACT_OWNER_P1_W5_MATH_PILOT_LAUNCHER_BROWSER"};
 if(isExactW5TopicWave(files))return {impact:"SCOPED_TOPIC_W5",full_suite:"false",changed_lessons:"",reason:"SIGNED_W5_12_PAGES_239_Q15_35_PUBLIC_Q16_GOLDEN_BROWSER"};
 if(isExactW4TopicWave(files))return {impact:"SCOPED_TOPIC_W4",full_suite:"false",changed_lessons:"",reason:"SIGNED_W4_9_PAGES_309_Q15_28_PUBLIC_Q16_GOLDEN_BROWSER"};
 if(isExactW3TopicWave(files))return {impact:"SCOPED_TOPIC_W3",full_suite:"false",changed_lessons:"",reason:"SIGNED_W3_12_PAGES_240_Q15_59_Q16_GOLDEN_BROWSER_INDEPENDENT"};
 if(isSignedW3Recovery(files))return {impact:"SCOPED_TOPIC_W3",full_suite:"false",changed_lessons:"",reason:"SIGNED_W3_POSTMERGE_WORKFLOW_QUOTE_RECOVERY_COMMENT_ONLY"};
 if(files.every(x=>CI_ROUTING_ONLY.has(x)))
  return {impact:"CI_ROUTING_ONLY",full_suite:"false",changed_lessons:"",reason:"ONLY_EXACT_CI_ROUTING_PATHS"};
 if(files.includes(B16_LESSON)&&files.every(x=>B16_ALLOWED.has(x))&&
   (!files.includes("docs/assets/javascripts/thpt-r4-preview.js")||b16RuntimeIsIsolated()))
  return {impact:"SCOPED_G10_B16",full_suite:"false",changed_lessons:B16_LESSON,
   reason:"OWNER_B16_EXACT_FILES_AND_BYTE_VERIFIED_RUNTIME"};
 const b07Display1132Files=["docs/thpt-preview/sgk/lop-11/chuong-ii/bai-7.md","prototypes/thpt/ux795/G11_B07_DISPLAY_Q18_DELTA_1132_20261128.md","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs",".github/workflows/thpt-scoped-release-qa.yml"];
 if(files.length===b07Display1132Files.length&&new Set(files).size===files.length&&files.every(x=>b07Display1132Files.includes(x)))
  return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:"docs/thpt-preview/sgk/lop-11/chuong-ii/bai-7.md",reason:"OWNER_1132_G11_B07_DISPLAY"};
 const display1132Lessons=["docs/thpt-preview/sgk/chuong-vi/bai-18.md","docs/thpt-preview/sgk/chuong-vii/bai-21.md","docs/thpt-preview/sgk/chuong-vii/bai-22.md"];
 const display1132Files=[...display1132Lessons,...["prototypes/thpt/ux795/G10_B18_B21_B22_DISPLAY_Q18_DELTA_1132_20261128.md","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-thpt-scoped-lesson-browser.cjs",".github/workflows/thpt-scoped-release-qa.yml","scripts/thpt-q18-g10-source-receipt.cjs"]];
 if(files.length===display1132Files.length&&new Set(files).size===files.length&&files.every(x=>display1132Files.includes(x)))
  return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:display1132Lessons.join(","),reason:"OWNER_1132_EXACT_DISPLAY_DELTA"};
 const lessons=files.filter(x=>CANONICAL_PAGE(x));
 const safeCompanions=x=>RECEIPT.test(x)||SOURCE_TEST.test(x);
 // Owner-authorized B19–B26 editorial QA batch: exact eight canonical
 // sources, ONE Q18 receipt and scoped proof. Any shared runtime/unknown path
 // falls back to FULL, never a broad whitelist of multi-lesson changes.
 const antiRepeatLessons=[19,20,21,22,23,24,25,26].map(n=>
  "docs/thpt-preview/sgk/chuong-"+(n<=22?"vii":n<=25?"viii":"ix")+"/bai-"+n+".md");
 const antiRepeatReceipt="prototypes/thpt/ux795/G10_B19_B26_ONE_SOURCE_AND_SEMANTIC_BOX_Q18_DELTA_20261121.md";
 const antiRepeatProof="scripts/test-thpt-scoped-deploy-proof.cjs";
 if(lessons.length===antiRepeatLessons.length&&
    antiRepeatLessons.every(p=>lessons.includes(p))&&
    files.includes(antiRepeatReceipt)&&files.includes(antiRepeatProof)&&
    files.every(p=>antiRepeatLessons.includes(p)||p===antiRepeatReceipt||
     p===antiRepeatProof||p==="scripts/test-thpt-release-impact.cjs"||
     SOURCE_TEST.test(p))&&
    fs.readFileSync(antiRepeatReceipt,"utf8").includes("G10-B19-B26-ONE-SOURCE-SEMANTIC-Q18-20261121"))
  return {impact:"SCOPED_LESSON",full_suite:"false",
   changed_lessons:antiRepeatLessons.join(","),
   reason:"EXACT_G10_B19_B26_SIGNED_ANTI_REPEAT_Q18_AND_DEPLOY_PROOF"};
 // B09 DELTA_A: one learner page, the SAME one canonical manuscript and
 // its exact chained Q18 receipt. Unknown/shared files still require FULL.
 const b09="docs/thpt-preview/sgk/chuong-iv/bai-9.md";
 const master="prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_CANONICAL.md";
 const receipt="prototypes/thpt/ux795/G10_CHIV_B09_GENERAL_VECTOR_ERROR_TAB4_Q18_R02_20261120.md";
 if(lessons.length===1&&lessons[0]===b09&&files.includes(master)&&files.includes(receipt)&&
    files.every(x=>x===b09||x===master||x===receipt||x==="scripts/test-thpt-release-impact.cjs"||SOURCE_TEST.test(x)))
  return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:b09,
   reason:"EXACT_B09_COMMON_ERROR_TAB4_DELTA_A_ONE_CANONICAL"};

 // B26 owner-authorized DELTA_C source-lock proof follows the one existing
 // canonical manuscript and one existing scoped test, not a shared runtime edit.
 const b26="docs/thpt-preview/sgk/chuong-ix/bai-26.md";
 const b26Receipt="prototypes/thpt/ux795/G10_CHIX_B26_S1_GOLDEN_ENRICHMENT_Q18_R01_20261121.md";
 const b26Proof="scripts/test-thpt-scoped-deploy-proof.cjs";
 const b26Figure="docs/assets/images/thpt/G10_B26_EVENT_COMPLEMENT_R01.svg";
 if(lessons.length===1&&lessons[0]===b26&&files.includes(b26Receipt)&&
    files.includes(b26Proof)&&files.includes(b26Figure)&&
    files.every(x=>x===b26||x===b26Receipt||x===b26Proof||x===b26Figure||
     x==="scripts/test-thpt-release-impact.cjs"||SOURCE_TEST.test(x))&&
    fs.readFileSync(b26,"utf8").includes("G10_B26_EVENT_COMPLEMENT_R01.svg"))
  return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:b26,
   reason:"EXACT_B26_SIGNED_G0G2_MATH_AND_GOLDEN_SOURCE_PROOF"};

 // Owner-authorized single canonical B27 SGK S1/PED source-lock and exact
 // scoped proof. Unknown/shared runtime/config/asset changes route FULL.
 const b27="docs/thpt-preview/sgk/chuong-ix/bai-27.md";
 const b27Receipt="prototypes/thpt/ux795/G10_CHIX_B27_S1_GOLDEN_ENRICHMENT_Q18_R01_20261121.md";
 const b27Proof="scripts/test-thpt-scoped-deploy-proof.cjs";
 if(lessons.length===1&&lessons[0]===b27&&
    files.includes(b27Receipt)&&files.includes(b27Proof)&&
    files.every(x=>x===b27||x===b27Receipt||x===b27Proof||
      x==="scripts/test-thpt-release-impact.cjs"||SOURCE_TEST.test(x))&&
    fs.readFileSync(b27,"utf8").includes("THPT_G10_B27_WITHOUT_REPLACEMENT_TREE.svg"))
  return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:b27,
   reason:"EXACT_G10_B27_S1_SIGNED_SOURCE_Q18_GOLDEN_AND_PROOF"};
 // Owner-P2-only G11 B01 correction after published R01.
 // Visual computed-style browser changes are allowed ONLY with one exact
 // canonical + R02 receipt + fail-closed deploy source proof + this classifier.
 const g11b01r02="docs/thpt-preview/sgk/lop-11/chuong-i/bai-1.md";
 const g11r02Receipt="prototypes/thpt/ux795/G11_B01_OWNER_P2_GOLDEN_VISUAL_GENERAL_D6_Q18_R02_20261121.md";
 const g11r02Proof="scripts/test-thpt-scoped-deploy-proof.cjs";
 const g11r02Browser="scripts/test-thpt-scoped-lesson-browser.cjs";
 if(lessons.length===1&&lessons[0]===g11b01r02&&
    [g11b01r02,g11r02Receipt,g11r02Proof,g11r02Browser,
     "scripts/test-thpt-release-impact.cjs"].every(x=>files.includes(x))&&
    files.length===5&&
    fs.readFileSync(g11r02Receipt,"utf8").includes(
     "G11-B01-OWNER-P2-GOLDEN-VISUAL-GENERAL-D6-R02-20261121")&&
    fs.readFileSync(g11b01r02,"utf8").includes(
     'article.classList.add("thpt-g10-knowledge-ap1","thpt-g10-chiv-golden");'))
  return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:g11b01r02,
   reason:"EXACT_G11_B01_P2_R02_GOLDEN_COMPUTED_BROWSER_PLUS_SOURCE_Q18"};
 // Exactly one new global 28/79 SGK lesson: G11 B01. All other G11
 // changes / shared runtime / missing signed Q18 evidence fail to FULL.
 const g11b01="docs/thpt-preview/sgk/lop-11/chuong-i/bai-1.md";
 const g11b01Receipt="prototypes/thpt/ux795/G11_B01_GLOBAL28_S1_GOLDEN_ENRICHMENT_Q18_R01_20261121.md";
 const g11b01Proof="scripts/test-thpt-scoped-deploy-proof.cjs";
 if(lessons.length===1&&lessons[0]===g11b01&&
    files.includes(g11b01Receipt)&&files.includes(g11b01Proof)&&
    files.every(x=>x===g11b01||x===g11b01Receipt||x===g11b01Proof||
      x==="scripts/test-thpt-release-impact.cjs")&&
    fs.readFileSync(g11b01Receipt,"utf8").includes(
      "G11-B01-GLOBAL28-S1-GOLDEN-Q18-R01-20261121")&&
    fs.readFileSync(g11b01,"utf8").includes(
      "THPT_G11_B01_UNIT_CIRCLE_5PI6_D5_R01.svg"))
  return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:g11b01,
   reason:"EXACT_G11_B01_GLOBAL28_S1_GOLDEN_Q18_SIGNED_SOURCE_PROOF"};
 // Owner-directed G10 B07–B14 migration: four existing manuscript files are
 // exactly paired with the eight canonical published lesson Markdown files.
 const manuscripts=[
  "prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_CANONICAL.md",
  "prototypes/thpt/content-drafts/THPT_G10_CHIV_B10_CANONICAL.md",
  "prototypes/thpt/content-drafts/THPT_G10_CHIV_B11_CANONICAL.md",
  "prototypes/thpt/content-drafts/THPT_G10_CHV_B12_CANONICAL.md"];
 const rel=[7,8,9,10,11,12,13,14].map(n=>
  "docs/thpt-preview/sgk/chuong-"+(n<=11?"iv":"v")+"/bai-"+n+".md");
 const signedReceipt="prototypes/thpt/ux795/G10_CHIV_CHV_B07_B14_KIEM_LOI_PLACEMENT_Q18_R01_20261120.md";
 if(rel.every(x=>lessons.includes(x))&&lessons.length===rel.length&&
    manuscripts.every(x=>files.includes(x))&&files.includes(signedReceipt)&&
    files.every(x=>rel.includes(x)||manuscripts.includes(x)||x===signedReceipt||SOURCE_TEST.test(x)))
  return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:rel.join(","),
   reason:"EXACT_G10_B07_B14_SOURCE_LOCKED_HELP_PLACEMENT_BATCH"};
 if(lessons.length&&files.every(x=>CANONICAL_PAGE(x)||safeCompanions(x)||FIGURE.test(x))){
  // Figures must actually be referenced from a changed lesson. Do not widen
  // to common library SVGs, as a figure shared by other pages needs FULL.
  for(const x of files.filter(y=>FIGURE.test(y))){
   const basename=x.slice(x.lastIndexOf("/")+1);
   if(!lessons.some(p=>fs.readFileSync(p,"utf8").includes(basename)))
    return {impact:"FULL",full_suite:"true",changed_lessons:"",reason:"UNSCOPED_FIGURE"};
  }
  return {impact:"SCOPED_LESSON",full_suite:"false",changed_lessons:[...new Set(lessons)].join(","),reason:"ONLY_CANONICAL_LESSONS_AND_SCOPED_EVIDENCE"};
 }
 // No learner files: receipt-only and ordinary docs changes do not need
 // full Roadmap browser suite; source/hand-off integrity is checked separately.
 if(files.every(x=>RECEIPT.test(x)||/^docs\/collaboration\/[A-Za-z0-9_.\/-]+\.md$/.test(x)||x==="AGENTS.md"))
  return {impact:"METADATA",full_suite:"false",changed_lessons:"",reason:"NON_LEARNER_DOCS"};
 return {impact:"FULL",full_suite:"true",changed_lessons:"",reason:"SHARED_OR_UNRECOGNIZED_CHANGE"};
}
function selfTest(){
 const b07Display1132=["docs/thpt-preview/sgk/lop-11/chuong-ii/bai-7.md","prototypes/thpt/ux795/G11_B07_DISPLAY_Q18_DELTA_1132_20261128.md","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs",".github/workflows/thpt-scoped-release-qa.yml"];
 assert.equal(classify(b07Display1132).reason,"OWNER_1132_G11_B07_DISPLAY");
 assert.equal(classify([...b07Display1132,"docs/assets/javascripts/thpt-r4-preview.js"]).impact,"FULL");
 assert.equal(classify(b07Display1132.filter(x=>x!=="prototypes/thpt/ux795/G11_B07_DISPLAY_Q18_DELTA_1132_20261128.md")).impact,"FULL");
 const display1132=["docs/thpt-preview/sgk/chuong-vi/bai-18.md","docs/thpt-preview/sgk/chuong-vii/bai-21.md","docs/thpt-preview/sgk/chuong-vii/bai-22.md","prototypes/thpt/ux795/G10_B18_B21_B22_DISPLAY_Q18_DELTA_1132_20261128.md","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-thpt-scoped-lesson-browser.cjs",".github/workflows/thpt-scoped-release-qa.yml","scripts/thpt-q18-g10-source-receipt.cjs"];
 assert.equal(classify(display1132).reason,"OWNER_1132_EXACT_DISPLAY_DELTA");
 assert.equal(classify([...display1132,"docs/assets/javascripts/thpt-r4-preview.js"]).impact,"FULL");
 assert.equal(classify(display1132.filter(x=>x!=="prototypes/thpt/ux795/G10_B18_B21_B22_DISPLAY_Q18_DELTA_1132_20261128.md")).impact,"FULL");
 const notation=[...MATH_NOTATION_GOVERNANCE];
 assert.equal(classify(notation).impact,"METADATA");
 assert.equal(classify([...notation,"docs/assets/javascripts/math-details-v1.js"]).full_suite,"true");
 assert.equal(classify([...notation,"docs/thpt-preview/chuyen-de/cd01/kien-thuc.md"]).full_suite,"true");
 assert.equal(classify([...notation,"mkdocs.yml"]).full_suite,"true");
 assert.equal(classify(notation,{manual:true}).full_suite,"true");
 const rw1=[...TOPIC_RW1_FILES];
 // The original ten-path lane is immutable; the evolved shared renderer
 // intentionally no longer qualifies. Do not make the historical fixture
 // assert a stale runtime signature against the current checkout.
 const evolvedShared=fs.readFileSync("docs/assets/javascripts/math-details-v1.js","utf8").includes("window.SLMTHPTKnowledgeMath=shared;");
 assert.equal(classify(rw1).impact,evolvedShared?"FULL":"SCOPED_TOPIC_RW1");
 const sharedCandidate=[
  "docs/assets/javascripts/math-details-v1.js",
  "docs/assets/javascripts/thpt-topic-w2-golden-v1.js",
  "docs/assets/javascripts/thpt-topic-w3-golden-v1.js",
  "docs/assets/javascripts/thpt-topic-w4-golden-v1.js",
  "scripts/test-thpt-topic-rw1-math-browser.py",
  "scripts/test-thpt-release-impact.cjs",
  ".github/workflows/thpt-topic-rw1-math-qa.yml"
 ];
 // Incomplete old candidate and any mixed/unknown site paths stay FULL.
 assert.equal(classify(sharedCandidate).impact,"FULL");
 const shared=[...SHARED_KNOWLEDGE_MATH_FILES];
 assert.equal(classify(shared).impact,"SCOPED_TOPIC_SHARED_MATH");
 assert.equal(classify(shared.slice(1)).impact,"FULL");
 assert.equal(classify([...shared,"docs/thpt-preview/chuyen-de/cd09/kien-thuc.md"]).impact,"FULL");
 assert.equal(classify([...shared,"docs/assets/javascripts/firebase-gemini-v1.js"]).impact,"FULL");
 assert.equal(classify(shared,{manual:true}).impact,"FULL");
 const backTop=[...TOPIC_BACK_TOP_FILES];
 if(isExactTopicBackTop(backTop))assert.equal(classify(backTop).reason,"OWNER_TOPIC_BACK_TOP_R3");
 const w1Recovery=[...W1_RECOVERY_FILES];
 if(isExactW1Recovery(w1Recovery,W1_RECOVERY_BASE))assert.equal(classify(w1Recovery,{base:W1_RECOVERY_BASE}).reason,"OWNER_W1_DEPLOY_RECOVERY_EXACT");
 assert.notEqual(classify(w1Recovery,{base:"0".repeat(40)}).reason,"OWNER_W1_DEPLOY_RECOVERY_EXACT");
 assert.notEqual(classify([...w1Recovery,"docs/assets/javascripts/firebase-gemini-v1.js"],{base:W1_RECOVERY_BASE}).reason,"OWNER_W1_DEPLOY_RECOVERY_EXACT");
 assert.notEqual(classify(w1Recovery,{base:W1_RECOVERY_BASE,manual:true}).reason,"OWNER_W1_DEPLOY_RECOVERY_EXACT");
 const refreshW5=[...W5_REFRESH_FILES];
 if(isExactW5Refresh(refreshW5))assert.equal(classify(refreshW5).reason,"OWNER_TOPIC_W5_REFRESH");
 else assert.equal(classify(refreshW5).impact,"FULL");
 assert.equal(classify([...refreshW5,"mkdocs.yml"]).impact,"FULL");
 assert.equal(classify(refreshW5.slice(1)).impact,"FULL");
 assert.equal(classify(refreshW5,{manual:true}).impact,"FULL");
 const refreshW4=[...W4_REFRESH_FILES];
 if(isExactW4Refresh(refreshW4))assert.equal(classify(refreshW4).reason,"OWNER_TOPIC_W4_REFRESH");
 else assert.equal(classify(refreshW4).impact,"FULL");
 assert.equal(classify([...refreshW4,"mkdocs.yml"]).impact,"FULL");
 assert.equal(classify(refreshW4.slice(1)).impact,"FULL");
 assert.equal(classify(refreshW4,{manual:true}).impact,"FULL");
 const refreshW3b=[...W3B_REFRESH_FILES];
 if(isExactW3bRefresh(refreshW3b))assert.equal(classify(refreshW3b).reason,"OWNER_TOPIC_W3B_REFRESH");
 else assert.equal(classify(refreshW3b).impact,"FULL");
 assert.equal(classify([...refreshW3b,"mkdocs.yml"]).impact,"FULL");
 assert.equal(classify(refreshW3b.slice(1)).impact,"FULL");
 assert.equal(classify(refreshW3b,{manual:true}).impact,"FULL");
 const refreshW3a=[...W3A_REFRESH_FILES];
 if(isExactW3aRefresh(refreshW3a))assert.equal(classify(refreshW3a).reason,"OWNER_TOPIC_W3A_REFRESH");
 else assert.equal(classify(refreshW3a).impact,"FULL");
 assert.equal(classify([...refreshW3a,"mkdocs.yml"]).impact,"FULL");
 assert.equal(classify(refreshW3a.slice(1)).impact,"FULL");
 assert.equal(classify(refreshW3a,{manual:true}).impact,"FULL");
 const refreshW2b=[...W2B_REFRESH_FILES];
 if(isExactW2bRefresh(refreshW2b))assert.equal(classify(refreshW2b).reason,"OWNER_TOPIC_W2B_REFRESH");
 else assert.equal(classify(refreshW2b).impact,"FULL");
 assert.equal(classify([...refreshW2b,"mkdocs.yml"]).impact,"FULL");
 assert.equal(classify(refreshW2b.slice(1)).impact,"FULL");
 assert.equal(classify(refreshW2b,{manual:true}).impact,"FULL");
 const refreshW2a=[...W2A_REFRESH_FILES];
 if(isExactW2aRefresh(refreshW2a))assert.equal(classify(refreshW2a).reason,"OWNER_TOPIC_W2A_REFRESH");
 else assert.equal(classify(refreshW2a).impact,"FULL");
 assert.equal(classify([...refreshW2a,"mkdocs.yml"]).impact,"FULL");
 assert.equal(classify(refreshW2a.slice(1)).impact,"FULL");
 assert.equal(classify(refreshW2a,{manual:true}).impact,"FULL");
 const refreshW1=[...TOPIC_W1_REFRESH_FILES];
 if(isExactTopicW1Refresh(refreshW1))assert.equal(classify(refreshW1).reason,"OWNER_TOPIC_W1_REFRESH");
 else assert.equal(classify(refreshW1).impact,"FULL");
 assert.equal(classify([...refreshW1,"mkdocs.yml"]).impact,"FULL");
 assert.equal(classify(refreshW1.slice(1)).impact,"FULL");
 assert.equal(classify(refreshW1,{manual:true}).impact,"FULL");
 const refresh01=[...TOPIC01_REFRESH_FILES];
 if(isExactTopic01Refresh(refresh01))assert.equal(classify(refresh01).reason,"OWNER_TOPIC01_REFRESH_CP10");
 assert.equal(classify([...refresh01,"mkdocs.yml"]).impact,"FULL");
 assert.equal(classify(refresh01,{manual:true}).impact,"FULL");
 const libraryUI=[...WRITTEN_LIBRARY_UI_FILES];
 if(fs.readFileSync("scripts/assemble-thpt-site.cjs","utf8").includes("BEGIN WRITTEN LIBRARY UI"))assert.equal(classify(libraryUI).reason,"OWNER_WRITTEN_LIBRARY_UI");
 assert.equal(classify([...libraryUI,"mkdocs.yml"]).impact,"FULL");
 assert.equal(classify(libraryUI,{manual:true}).impact,"FULL");
 assert.equal(classify([...backTop,"mkdocs.yml"]).impact,"FULL");
 assert.equal(classify(backTop,{manual:true}).impact,"FULL");
 const menu6=[...MENU_6_PLUS_1_FILES];
 const currentMenu=fs.readFileSync("docs/assets/javascripts/thpt-r4-preview.js","utf8").includes('title.textContent="Toán THPT 6+1"');
 if(currentMenu)assert.equal(classify(menu6).reason,"OWNER_THPT_MENU_6_PLUS_1");
 assert.equal(classify([...menu6,"mkdocs.yml"]).impact,"FULL");
 assert.equal(classify(menu6,{manual:true}).impact,"FULL");
 const topicDisclosures=[...TOPIC_DISCLOSURE_FILES];
 // Historical exact-blob fixtures must reject later renderer revisions, even when the old function survives.
 if(isExactTopicDisclosures(topicDisclosures))assert.equal(classify(topicDisclosures).reason,"OWNER_TOPIC_SGK_DISCLOSURES");
 else assert.equal(classify(topicDisclosures).impact,"FULL","Historical disclosure fixture cannot authorize a different renderer blob");
 assert.equal(classify([...topicDisclosures,"mkdocs.yml"]).impact,"FULL");
 assert.equal(classify(topicDisclosures,{manual:true}).impact,"FULL");
 const rw3Tabs=[...RW3_TAB_FILES];
 assert.equal(classify(rw3Tabs).reason,"OWNER_1055_RW3_TAB_LABELS");
 assert.equal(classify([...rw3Tabs,"mkdocs.yml"]).impact,"FULL");
 assert.equal(classify(rw3Tabs.slice(1)).impact,"FULL");
 assert.equal(classify(rw3Tabs,{manual:true}).impact,"FULL");
 const sharedRecovery=[...SHARED_DEPLOY_RECOVERY_FILES];
 assert.equal(classify(sharedRecovery,{base:SHARED_DEPLOY_RECOVERY_BASE}).reason,"OWNER_1110_DEPLOY_RECOVERY_EXACT");
 assert.notEqual(classify(sharedRecovery,{base:"0".repeat(40)}).impact,"SCOPED_TOPIC_SHARED_MATH");
 assert.notEqual(classify(sharedRecovery.slice(1),{base:SHARED_DEPLOY_RECOVERY_BASE}).impact,"SCOPED_TOPIC_SHARED_MATH");
 assert.equal(classify([...sharedRecovery,"docs/assets/javascripts/firebase-gemini-v1.js"],{base:SHARED_DEPLOY_RECOVERY_BASE}).impact,"FULL");
 assert.equal(classify([...sharedRecovery,"docs/thpt-preview/chuyen-de/cd17/kien-thuc.md"],{base:SHARED_DEPLOY_RECOVERY_BASE}).impact,"FULL");
 assert.equal(classify(sharedRecovery,{base:SHARED_DEPLOY_RECOVERY_BASE,manual:true}).impact,"FULL");
 assert.equal(classify([...sharedCandidate,"docs/thpt-preview/chuyen-de/cd09/kien-thuc.md"]).impact,"FULL");
 assert.equal(classify(rw1.slice(1)).impact,"FULL");
 assert.equal(classify([...rw1,"docs/thpt-preview/chuyen-de/cd01/kien-thuc.md"]).impact,"FULL");
 assert.equal(classify(rw1,{manual:true}).impact,"FULL");
 const hot=[...G12_MATH_HOTFIX_FILES];
 assert.equal(classify(hot).reason,"OWNER_1039_G12_MATH_HOTFIX");
 assert.equal(classify(hot).changed_lessons,G12_MATH_HOTFIX_LESSONS.join(","));
 assert.equal(classify(hot.slice(1)).impact,"FULL");
 assert.equal(classify([...hot,"docs/assets/javascripts/thpt-r4-preview.js"]).impact,"FULL");
 assert.equal(classify(hot,{manual:true}).impact,"FULL");
 const g12W13=[...G12_W13_FILES];
 assert.equal(classify(g12W13).impact,"SCOPED_LESSON");
 assert.equal(classify(g12W13).changed_lessons,G12_W13_LESSONS.join(","));
 assert.equal(classify(g12W13.slice(1)).impact,"FULL");
 assert.equal(classify([...g12W13,"docs/thpt-preview/sgk/lop-12/chuong-vi/luyen-tap.md"]).impact,"FULL");
 assert.equal(classify([...g12W13,"docs/assets/javascripts/thpt-r4-preview.js"]).impact,"FULL");
 assert.equal(classify(g12W13,{manual:true}).impact,"FULL");
 const g12W12=[...G12_W12_FILES];
 assert.equal(classify(g12W12).impact,"SCOPED_LESSON");
 assert.equal(classify(g12W12).changed_lessons,G12_W12_LESSONS.join(","));
 assert.equal(classify(g12W12.slice(1)).impact,"FULL");
 assert.equal(classify([...g12W12,"docs/thpt-preview/sgk/lop-12/chuong-v/luyen-tap.md"]).impact,"FULL");
 assert.equal(classify([...g12W12,"docs/assets/javascripts/thpt-r4-preview.js"]).impact,"FULL");
 assert.equal(classify(g12W12,{manual:true}).impact,"FULL");
 const g12W11=[...G12_W11_FILES];
 assert.equal(classify(g12W11).impact,"SCOPED_LESSON");
 assert.equal(classify(g12W11).changed_lessons,G12_W11_LESSONS.join(","));
 assert.equal(classify(g12W11.slice(1)).impact,"FULL");
 assert.equal(classify([...g12W11,"docs/thpt-preview/sgk/lop-12/chuong-iv/luyen-tap.md"]).impact,"FULL");
 assert.equal(classify([...g12W11,"docs/assets/javascripts/thpt-r4-preview.js"]).impact,"FULL");
 assert.equal(classify(g12W11,{manual:true}).impact,"FULL");
 const g12W10=[...G12_W10_FILES];
 assert.equal(classify(g12W10).impact,"SCOPED_LESSON");
 assert.equal(classify(g12W10).changed_lessons,G12_W10_LESSONS.join(","));
 assert.equal(classify(g12W10.slice(1)).impact,"FULL");
 assert.equal(classify([...g12W10,"docs/thpt-preview/sgk/lop-12/chuong-iii/luyen-tap.md"]).impact,"FULL");
 assert.equal(classify([...g12W10,"docs/assets/javascripts/thpt-r4-preview.js"]).impact,"FULL");
 assert.equal(classify(g12W10,{manual:true}).impact,"FULL");
 const g12W9=[...G12_W9_FILES];
 assert.equal(classify(g12W9).impact,"SCOPED_LESSON");
 assert.equal(classify(g12W9).changed_lessons,G12_W9_LESSONS.join(","));
 assert.equal(classify(g12W9.slice(1)).impact,"FULL");
 assert.equal(classify([...g12W9,"docs/thpt-preview/sgk/lop-12/chuong-ii/luyen-tap.md"]).impact,"FULL");
 assert.equal(classify([...g12W9,"docs/assets/javascripts/thpt-r4-preview.js"]).impact,"FULL");
 assert.equal(classify(g12W9,{manual:true}).impact,"FULL");
 const g12W8=[...G12_W8_FILES];
 assert.equal(classify(g12W8).impact,"SCOPED_LESSON");
 assert.equal(classify(g12W8).changed_lessons,G12_W8_LESSONS.join(","));
 assert.equal(classify(g12W8.slice(1)).impact,"FULL");
 assert.equal(classify([...g12W8,"docs/thpt-preview/sgk/lop-12/chuong-i/luyen-tap.md"]).impact,"FULL");
 assert.equal(classify([...g12W8,"docs/assets/javascripts/thpt-r4-preview.js"]).impact,"FULL");
 assert.equal(classify(g12W8,{manual:true}).impact,"FULL");
 const g11W7=[...G11_W7_FILES];
 assert.equal(classify(g11W7).impact,"SCOPED_LESSON");
 assert.equal(classify(g11W7).changed_lessons,G11_W7_LESSONS.join(","));
 assert.equal(classify(g11W7.slice(1)).impact,"FULL");
 assert.equal(classify([...g11W7,"docs/thpt-preview/sgk/lop-11/chuong-ix/luyen-tap.md"]).impact,"FULL");
 assert.equal(classify([...g11W7,"docs/assets/javascripts/thpt-r4-preview.js"]).impact,"FULL");
 assert.equal(classify(g11W7,{manual:true}).impact,"FULL");
 const g11W6=[...G11_W6_FILES];
 assert.equal(classify(g11W6).impact,"SCOPED_LESSON");
 assert.equal(classify(g11W6).changed_lessons,G11_W6_LESSONS.join(","));
 assert.equal(classify(g11W6.slice(1)).impact,"FULL");
 assert.equal(classify(g11W6.filter(p=>!p.endsWith("AUTHORING_20261123.svg"))).impact,"FULL");
 assert.equal(classify([...g11W6,"docs/thpt-preview/sgk/lop-11/chuong-vii/luyen-tap.md"]).impact,"FULL");
 assert.equal(classify([...g11W6,"docs/assets/javascripts/thpt-r4-preview.js"]).impact,"FULL");
 assert.equal(classify(g11W6,{manual:true}).impact,"FULL");
 const g11W5=[...G11_W5_FILES];
 assert.equal(classify(g11W5).impact,"SCOPED_LESSON");
 assert.equal(classify(g11W5).changed_lessons,G11_W5_LESSONS.join(","));
 assert.equal(classify(g11W5.slice(1)).impact,"FULL");
 assert.equal(classify(g11W5.filter(p=>!p.endsWith("AUTHORING_20261123.svg"))).impact,"FULL");
 assert.equal(classify([...g11W5,"docs/thpt-preview/sgk/lop-11/chuong-vi/luyen-tap.md"]).impact,"FULL");
 assert.equal(classify([...g11W5,"docs/assets/javascripts/thpt-r4-preview.js"]).impact,"FULL");
 assert.equal(classify(g11W5,{manual:true}).impact,"FULL");
 const g11W4=[...G11_W4_FILES];
 assert.equal(classify(g11W4).impact,"SCOPED_LESSON");
 assert.equal(classify(g11W4).changed_lessons,G11_W4_LESSONS.join(","));
 assert.equal(classify(g11W4.slice(1)).impact,"FULL");
 assert.equal(classify(g11W4.filter(p=>!p.endsWith("AUTHORING_20261123.svg"))).impact,"FULL");
 assert.equal(classify([...g11W4,"docs/thpt-preview/sgk/lop-11/chuong-v/luyen-tap.md"]).impact,"FULL");
 assert.equal(classify([...g11W4,"docs/assets/javascripts/thpt-r4-preview.js"]).impact,"FULL");
 assert.equal(classify(g11W4,{manual:true}).impact,"FULL");
 const g11W3=[...G11_W3_FILES];
 assert.equal(classify(g11W3).impact,"SCOPED_LESSON");
 assert.equal(classify(g11W3).changed_lessons,G11_W3_LESSONS.join(","));
 assert.equal(classify(g11W3.slice(1)).impact,"FULL");
 assert.equal(classify(g11W3.filter(p=>!p.endsWith("AUTHORING_20261123.svg"))).impact,"FULL");
 assert.equal(classify([...g11W3,"docs/thpt-preview/sgk/lop-11/chuong-iv/luyen-tap.md"]).impact,"FULL");
 assert.equal(classify([...g11W3,"docs/assets/javascripts/thpt-r4-preview.js"]).impact,"FULL");
 assert.equal(classify(g11W3,{manual:true}).impact,"FULL");
 const g11W2=[...G11_W2_FILES];
 assert.equal(classify(g11W2).impact,"SCOPED_LESSON");
 assert.equal(classify(g11W2).changed_lessons,G11_W2_LESSONS.join(","));
 assert.equal(classify(g11W2.slice(1)).impact,"FULL");
 assert.equal(classify([...g11W2,"docs/thpt-preview/sgk/lop-11/chuong-ii/luyen-tap.md"]).impact,"FULL");
 assert.equal(classify([...g11W2,"docs/assets/javascripts/thpt-r4-preview.js"]).impact,"FULL");
 assert.equal(classify(g11W2,{manual:true}).impact,"FULL");
 const g11Review=[...G11_W1_REVIEW_DELTA_FILES];
 assert.equal(classify(g11Review).impact,"SCOPED_LESSON");
 assert.equal(classify(g11Review).changed_lessons,"docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md,docs/thpt-preview/sgk/lop-11/chuong-i/bai-3.md,docs/thpt-preview/sgk/lop-11/chuong-i/bai-4.md");
 assert.equal(classify(g11Review.slice(1)).impact,"FULL");
 assert.equal(classify([...g11Review,"docs/thpt-preview/sgk/lop-11/chuong-i/luyen-tap.md"]).impact,"FULL");
 assert.equal(classify([...g11Review,"hooks/sgk_golden_first_paint.py"]).impact,"FULL");
 const g11Tab4Hotfix=[...G11_W1_TAB4_HOTFIX_FILES];
 assert.equal(classify(g11Tab4Hotfix).impact,"SCOPED_LESSON");
 assert.equal(classify(g11Tab4Hotfix).changed_lessons,"docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md,docs/thpt-preview/sgk/lop-11/chuong-i/bai-3.md,docs/thpt-preview/sgk/lop-11/chuong-i/bai-4.md");
 assert.equal(classify(g11Tab4Hotfix.slice(1)).impact,"CI_ROUTING_ONLY","Test-only subset cannot publish learner pages");
 assert.equal(classify(g11Tab4Hotfix.filter(p=>!p.endsWith("test-thpt-scoped-deploy-proof.cjs"))).impact,"FULL","Incomplete hook change must fail closed");
 assert.equal(classify([...g11Tab4Hotfix,"docs/assets/javascripts/thpt-r4-preview.js"]).impact,"FULL");
 assert.equal(classify(g11Tab4Hotfix,{manual:true}).impact,"FULL");
 const g11w1=[...G11_W1_RELEASE_FILES];
 assert.equal(classify(g11w1).impact,"SCOPED_LESSON","Exact #1039 W1 release");
 assert.equal(classify(g11w1).changed_lessons,"docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md,docs/thpt-preview/sgk/lop-11/chuong-i/bai-3.md,docs/thpt-preview/sgk/lop-11/chuong-i/bai-4.md");
 assert.equal(classify(g11w1.slice(1)).impact,"FULL","Incomplete W1 must fail closed");
 assert.equal(classify([...g11w1,"docs/assets/javascripts/thpt-r4-preview.js"]).impact,"FULL","Shared runtime must fail closed");
 assert.equal(classify([...g11w1,"docs/thpt-preview/sgk/lop-11/chuong-i/luyen-tap.md"]).impact,"FULL","Core/Practice cannot join W1");
 assert.equal(classify(g11w1,{manual:true}).impact,"FULL");
 const inline=[...W5_INLINE_AUDIT_FILES];
 assert.equal(classify(inline).impact,"SCOPED_TOPIC_W5_P1_HOTFIX","W5 inline audit exact 3-file scope");
 assert.equal(classify(inline.slice(1)).impact,"FULL","Partial W5 inline audit must fail closed");
 assert.equal(classify([...inline,"docs/assets/javascripts/thpt-golden-runtime-v1.js"]).impact,"FULL","Shared Golden edits require FULL");
 assert.equal(classify([...inline,"docs/thpt-preview/sgk/chuong-vii/bai-19.md"]).impact,"FULL","SGK canonical changes require FULL");
 assert.equal(classify([...inline,"docs/assets/data/assessment/private.json"]).impact,"FULL","RD1 cannot enter W5 P1 audit");
 assert.equal(classify(inline,{manual:true}).impact,"FULL","Manual FULL still available");

 const p1=[...W5_P1_FILES];
 assert.equal(classify(p1).impact,"SCOPED_TOPIC_W5_P1_HOTFIX","Exact owner hotfix only");
 assert.equal(classify(p1.slice(1)).impact,"FULL","Incomplete owner hotfix stays FULL");
 assert.equal(classify([...p1,"docs/assets/javascripts/thpt-golden-runtime-v1.js"]).impact,"FULL","Golden runtime modification not allowed");
 assert.equal(classify([...p1,"docs/thpt-preview/sgk/chuong-vii/bai-19.md"]).impact,"FULL","SGK source modification not allowed");
 assert.equal(classify([...p1,"docs/assets/data/assessment/private.json"]).impact,"FULL","RD1 scope not allowed");
 assert.equal(classify(p1,{manual:true}).impact,"FULL","Manual FULL remains available");

 const w5=[...W5_EXACT_SCOPE_FILES];
 assert.equal(classify(w5).impact,isExactW5TopicWave(w5)?"SCOPED_TOPIC_W5":"FULL","Historical W5 bundle valid only with original signed manifest");
 assert.equal(classify(w5.filter(x=>!x.endsWith("cd22/tu-kiem-tra.md"))).impact,"FULL","W5 missing Q16 must fail closed");
 assert.equal(classify([...w5,"docs/assets/javascripts/thpt-golden-runtime-v1.js"]).impact,"FULL","W5 shared Golden runtime must stay FULL");
 assert.equal(classify([...w5,"docs/thpt-preview/sgk/chuong-vii/bai-19.md"]).impact,"FULL","W5 + SGK mixed must stay FULL");
 assert.equal(classify([...w5,"docs/assets/data/assessment/private.json"]).impact,"FULL","W5 + RD1 private must stay FULL");
 assert.equal(classify(w5,{manual:true}).impact,"FULL","manual FULL request must stay FULL");

 const hotfix=[...TOPIC_W2_W3_HOTFIX_FILES];
 assert.equal(classify(hotfix).impact,"SCOPED_TOPIC_HOTFIX_W2_W3","Exact ten-topic maintenance only");
 assert.equal(classify(hotfix.slice(1)).full_suite,"true","Missing hotfix file must fail closed");
 assert.equal(classify([...hotfix,"docs/assets/javascripts/thpt-golden-runtime-v1.js"]).full_suite,"true","Shared runtime is not Topic-only");
 assert.equal(classify([...hotfix,"docs/thpt-preview/sgk/chuong-v/bai-14.md"]).full_suite,"true","SGK mixed change fails closed");
 const exponent=[...MATHLAB_EXPONENT_DISPLAY_FILES];
 assert.equal(classify(exponent).impact,"SCOPED_MATH_LAB_FULLPAGE","Exact display-only Math Lab exponent fix uses protected 200-case lane");
 assert.equal(classify(exponent.slice(1)).impact,"FULL","Incomplete display patch fails closed");
 assert.equal(classify([...exponent,"docs/assets/math-lab/models/SLM-TOP04-EXPLOG-01.html"]).impact,"FULL","Source change cannot join display-only fix");
 assert.equal(classify([...exponent,"docs/assets/javascripts/thpt-r4-preview.js"]).impact,"FULL","Golden shared runtime cannot join display-only fix");
 assert.equal(classify([...exponent,"docs/assets/data/assessment/readiness.json"]).impact,"FULL","Assessment cannot join display-only fix");
 assert.equal(classify([...exponent,"docs/thpt-preview/sgk/chuong-v/bai-14.md"]).impact,"FULL","SGK academic change cannot join display-only fix");
 assert.equal(classify(exponent,{manual:true}).impact,"FULL","Manual FULL cannot be narrowed");
 const labRestore=[...MATHLAB_RESTORE_PAGE_FILES];
 assert.equal(classify(labRestore).impact,"SCOPED_MATH_LAB_FULLPAGE","Exact restore of 25 contextual model pages is scoped by 200 browser checks");
 assert.equal(classify(labRestore.slice(1)).impact,"FULL","Missing page-restore path fails closed");
 assert.equal(classify([...labRestore,"docs/thpt-preview/sgk/chuong-v/bai-14.md"]).impact,"FULL","Mixed SGK restore fails closed");
 assert.equal(classify([...labRestore,"docs/assets/javascripts/thpt-r4-preview.js"]).impact,"FULL","Golden runtime cannot join restore");
 assert.equal(classify([...labRestore,"docs/assets/data/assessment/readiness.json"]).impact,"FULL","Assessment path cannot join restore");
 assert.equal(classify([...labRestore,"docs/assets/math-lab/models/SLM-TOP01-TRUTH-01.html"]).impact,"FULL","Model math asset change cannot join restore");
 assert.equal(classify(labRestore,{manual:true}).impact,"FULL","Manual full release cannot be scoped");
 const labRecovery=[...MATHLAB_DEPLOY_RECOVERY_FILES];
 assert.equal(classify(labRecovery).impact,"FULL","Historical bare-asset recovery no longer matches restored viewer contract");
 assert.equal(classify(labRecovery.slice(1)).impact,"FULL","Incomplete Math Lab recovery must fail closed");
 assert.equal(classify([...labRecovery,"docs/assets/javascripts/thpt-r4-preview.js"]).impact,"FULL","Shared runtime cannot use recovery");
 assert.equal(classify([...labRecovery,"docs/thpt-preview/chuyen-de/cd16/kien-thuc.md"]).impact,"FULL","Topic academic change cannot use recovery");
 assert.equal(classify([...labRecovery,"docs/assets/data/assessment/readiness.json"]).impact,"FULL","Q16 cannot use recovery");
 assert.equal(classify([...labRecovery,"docs/assets/javascripts/math-lab-library-v1.js"]).impact,"FULL","Additional Math Lab runtime change cannot use recovery");
 assert.equal(classify(labRecovery,{manual:true}).impact,"FULL","Requested full review always remains full");
 const lab=[...MATHLAB_FULLPAGE_RELEASE_FILES];
 assert.equal(classify(lab).impact,"FULL","Historical bare-asset release no longer matches restored viewer contract");
 assert.equal(classify(lab.slice(1)).impact,"FULL","Missing Math Lab release file fails closed");
 for(const extra of ["docs/assets/javascripts/thpt-r4-preview.js",
   "docs/thpt-preview/chuyen-de/cd16/kien-thuc.md","mkdocs.yml",
   "docs/assets/data/assessment/readiness.json"])
   assert.equal(classify([...lab,extra]).impact,"FULL","Shared or assessment change must be FULL: "+extra);
 assert.equal(classify(lab,{manual:true}).impact,"FULL","Manual FULL cannot be suppressed");
 const w4=[...W4_EXACT_SCOPE_FILES];
 assert.equal(classify(w4).impact,isExactW4TopicWave(w4)?"SCOPED_TOPIC_W4":"FULL","Historical W4 bundle valid only with original signed manifest; refreshed source cannot use legacy scope");
 assert.equal(classify(w4.filter(p=>!p.endsWith("cd18/tu-kiem-tra.md"))).impact,"FULL","Missing CĐ18 question-only page must fail closed");
 assert.equal(classify([...w4,"docs/assets/javascripts/thpt-golden-runtime-v1.js"]).impact,"FULL","Shared runtime change must use FULL");
 assert.equal(classify([...w4,"docs/thpt-preview/sgk/chuong-v/bai-14.md"]).impact,"FULL","Mixed SGK scope must use FULL");
 assert.equal(classify([...w4,"docs/assets/stylesheets/thpt-topic-w1-golden-v1.css"]).impact,"FULL","Golden shared stylesheet change must use FULL");
 assert.equal(classify(w4,{manual:true}).impact,"FULL","Manual FULL cannot be narrowed");
 const fixture="docs/thpt-preview/sgk/chuong-v/bai-14.md";
 const another="docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md";
 const authoring=[
  fixture,"scripts/test-g10-chv-editorial-source.cjs",
  "scripts/thpt-q18-g10-source-receipt.cjs",
  "prototypes/thpt/ux795/G10_CHV_B14_DELTA_A.md"
 ];
 const recovery=[...W3_RECOVERY_FILES];
 assert.equal(classify(recovery).impact,isSignedW3Recovery(recovery)?"SCOPED_TOPIC_W3":"FULL","Historic W3 recovery invalid if runtime differs");
 assert.equal(classify(recovery.slice(1)).full_suite,"true","Incomplete recovery cannot publish");
 assert.equal(classify([...recovery,"docs/assets/javascripts/thpt-golden-runtime-v1.js"]).full_suite,"true","Shared Golden runtime changes are FULL");
 assert.equal(classify([...recovery,"docs/thpt-preview/sgk/lop-11/chuong-i/bai-1.md"]).full_suite,"true","SGK changes are FULL");
  const w3=[...W3_EXACT_SCOPE_FILES];
 assert.equal(classify(w3).impact,isExactW3TopicWave(w3)?"SCOPED_TOPIC_W3":"FULL","Historical W3 bundle valid only with original manifest");
 assert.equal(classify(w3.filter(x=>!x.endsWith("cd15/tu-kiem-tra.md"))).full_suite,"true","Incomplete W3 must fail closed");
 assert.equal(classify([...w3,"docs/assets/javascripts/thpt-golden-runtime-v1.js"]).full_suite,"true","Shared Golden change is full site");
 assert.equal(classify([...w3,"docs/thpt-preview/sgk/lop-11/chuong-i/bai-1.md"]).full_suite,"true","SGK mixed change is full site");
 assert.equal(classify(w3,{manual:true}).full_suite,"true","Explicit manual full remains supported");
 assert.equal(classify([fixture]).impact,"SCOPED_LESSON");
 assert.equal(classify(authoring).full_suite,"false");
 assert.equal(classify([fixture,another]).changed_lessons,fixture+","+another);
 const b09Case=["docs/thpt-preview/sgk/chuong-iv/bai-9.md",
  "prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_CANONICAL.md",
  "prototypes/thpt/ux795/G10_CHIV_B09_GENERAL_VECTOR_ERROR_TAB4_Q18_R02_20261120.md",
  "scripts/thpt-q18-g10-source-receipt.cjs",
  "scripts/test-thpt-release-impact.cjs"];
 assert.equal(classify(b09Case).impact,"SCOPED_LESSON",
  "Exact B09 one-manuscript relocation must run scoped browser QA");
 assert.equal(classify([...b09Case,"docs/assets/javascripts/thpt-r4-preview.js"]).impact,"FULL",
  "Shared runtime change cannot use B09 exception");
 assert.equal(classify([...b09Case,"mkdocs.yml"]).impact,"FULL",
  "Global build config cannot use B09 exception");

 const b26Case=[
  "docs/thpt-preview/sgk/chuong-ix/bai-26.md",
  "docs/assets/images/thpt/G10_B26_EVENT_COMPLEMENT_R01.svg",
  "prototypes/thpt/ux795/G10_CHIX_B26_S1_GOLDEN_ENRICHMENT_Q18_R01_20261121.md",
  "scripts/thpt-q18-g10-source-receipt.cjs",
  "scripts/test-thpt-scoped-deploy-proof.cjs",
  "scripts/test-thpt-release-impact.cjs"];
 assert.equal(classify(b26Case).impact,"SCOPED_LESSON",
  "B26 exact signed lesson+figure+scoped safety test must not trigger site-wide QA");
 assert.equal(classify([...b26Case,"mkdocs.yml"]).impact,"FULL",
  "B26 exception cannot hide shared configuration");
 assert.equal(classify([...b26Case,
  "docs/assets/javascripts/thpt-golden-runtime-v1.js"]).impact,"FULL",
  "B26 exception cannot hide shared JS regression");
 assert.equal(classify(b26Case.filter(p=>!p.endsWith("G10_B26_EVENT_COMPLEMENT_R01.svg"))).impact,"FULL",
  "Missing reviewed figure must not use exception");

 const antiRepeatCase=[
  ...[19,20,21,22,23,24,25,26].map(n=>
   "docs/thpt-preview/sgk/chuong-"+(n<=22?"vii":n<=25?"viii":"ix")+"/bai-"+n+".md"),
  "prototypes/thpt/ux795/G10_B19_B26_ONE_SOURCE_AND_SEMANTIC_BOX_Q18_DELTA_20261121.md",
  "scripts/thpt-q18-g10-source-receipt.cjs",
  "scripts/test-thpt-scoped-deploy-proof.cjs",
  "scripts/test-thpt-release-impact.cjs"];
 assert.equal(classify(antiRepeatCase).impact,"SCOPED_LESSON",
  "Exact 8-lesson owner anti-repeat correction must remain targeted");
 assert.equal(classify([...antiRepeatCase,"mkdocs.yml"]).impact,"FULL",
  "Anti-repeat correction cannot hide global build config changes");
 assert.equal(classify(antiRepeatCase.filter(x=>!x.endsWith("bai-26.md"))).impact,"FULL",
  "Missing eighth lesson cannot qualify for exact 8-lesson batch");
 assert.equal(classify(antiRepeatCase.filter(x=>!x.endsWith("scoped-deploy-proof.cjs"))).impact,"FULL",
  "No source-locked production proof means exact 8-lesson batch must fail closed");
 const g11B01R02Case=[
  "docs/thpt-preview/sgk/lop-11/chuong-i/bai-1.md",
  "prototypes/thpt/ux795/G11_B01_OWNER_P2_GOLDEN_VISUAL_GENERAL_D6_Q18_R02_20261121.md",
  "scripts/test-thpt-scoped-deploy-proof.cjs",
  "scripts/test-thpt-scoped-lesson-browser.cjs",
  "scripts/test-thpt-release-impact.cjs"];
 assert.equal(classify(g11B01R02Case).impact,"SCOPED_LESSON",
  "Exact G11 B01 P2 R02 requires targeted real computed CSS browser QA");
 assert.equal(classify([...g11B01R02Case,"docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css"]).impact,"FULL",
  "G11 B01 P2 cannot hide changes to the approved shared G10 stylesheet");
 assert.equal(classify([...g11B01R02Case,"docs/assets/javascripts/thpt-golden-runtime-v1.js"]).impact,"FULL",
  "G11 B01 P2 cannot hide shared Golden runtime changes");
 assert.equal(classify(g11B01R02Case.filter(x=>x!=="scripts/test-thpt-scoped-lesson-browser.cjs")).impact,"FULL",
  "G11 B01 P2 cannot claim computed visual parity without a dedicated browser regression");
 const g11B01Case=[
  "docs/thpt-preview/sgk/lop-11/chuong-i/bai-1.md",
  "prototypes/thpt/ux795/G11_B01_GLOBAL28_S1_GOLDEN_ENRICHMENT_Q18_R01_20261121.md",
  "scripts/test-thpt-scoped-deploy-proof.cjs",
  "scripts/test-thpt-release-impact.cjs"];
 assert.equal(classify(g11B01Case).impact,"SCOPED_LESSON",
  "Exactly source-locked G11 B01 28/79 must receive targeted technical QA");
 assert.equal(classify([...g11B01Case,"mkdocs.thpt-preview.yml"]).impact,"FULL",
  "G11 B01 cannot hide shared preview configuration");
 assert.equal(classify([...g11B01Case,
  "docs/assets/javascripts/thpt-golden-runtime-v1.js"]).impact,"FULL",
  "G11 B01 cannot hide global Golden runtime changes");
 assert.equal(classify(g11B01Case.filter(x=>!x.endsWith("scoped-deploy-proof.cjs"))).impact,
  "FULL","G11 B01 exact release cannot omit source-locked deploy proof");
 const b27Case=[
  "docs/thpt-preview/sgk/chuong-ix/bai-27.md",
  "prototypes/thpt/ux795/G10_CHIX_B27_S1_GOLDEN_ENRICHMENT_Q18_R01_20261121.md",
  "scripts/thpt-q18-g10-source-receipt.cjs",
  "scripts/test-thpt-scoped-deploy-proof.cjs",
  "scripts/test-thpt-release-impact.cjs"];
 assert.equal(classify(b27Case).impact,"SCOPED_LESSON",
  "B27 exact one-lesson signed source and same proof must be scoped");
 assert.equal(classify([...b27Case,"mkdocs.yml"]).impact,"FULL",
  "B27 cannot hide global site build config");
 assert.equal(classify([...b27Case,"docs/assets/javascripts/thpt-golden-runtime-v1.js"]).impact,
  "FULL","B27 cannot hide shared Golden JS changes");
 assert.equal(classify(b27Case.filter(x=>!x.endsWith("scoped-deploy-proof.cjs"))).impact,
  "FULL","B27 without exact production proof must fail closed for mixed test+learner change");
 const bBatch=[7,8,9,10,11,12,13,14].map(n=>
  "docs/thpt-preview/sgk/chuong-"+(n<=11?"iv":"v")+"/bai-"+n+".md");
 const mBatch=[
  "prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_CANONICAL.md",
  "prototypes/thpt/content-drafts/THPT_G10_CHIV_B10_CANONICAL.md",
  "prototypes/thpt/content-drafts/THPT_G10_CHIV_B11_CANONICAL.md",
  "prototypes/thpt/content-drafts/THPT_G10_CHV_B12_CANONICAL.md"];
 const bReceipt="prototypes/thpt/ux795/G10_CHIV_CHV_B07_B14_KIEM_LOI_PLACEMENT_Q18_R01_20261120.md";
 assert.equal(classify([...bBatch,...mBatch,bReceipt,"scripts/thpt-q18-g10-source-receipt.cjs"]).impact,
  "SCOPED_LESSON","Exact 8 lesson and 4 canonical manuscript relocation uses targeted browser");
 assert.equal(classify([...bBatch,...mBatch,bReceipt,"mkdocs.yml"]).impact,
  "FULL","Mixed shared config cannot disguise global QA risk");
 assert.equal(classify([...bBatch,...mBatch.slice(1),bReceipt]).impact,
  "FULL","Missing one manuscript must fail closed");
 assert.equal(classify([fixture,
  "docs/thpt-preview/sgk/chuong-v/luyen-tap.md",
  "docs/thpt-preview/sgk/chuong-v/tu-kiem-tra-chuong.md"]).impact,"SCOPED_LESSON");
 assert.equal(classify(["docs/thpt-preview/sgk/lop-11/chuong-i.md",
  "docs/thpt-preview/sgk/lop-11/chuong-i/tu-kiem-tra-chuong.md"]).full_suite,"false");
 assert.equal(classify(["AGENTS.md"]).impact,"METADATA");
 assert.equal(classify([".github/workflows/deploy.yml",
  ".github/workflows/ux795-g10-draft-render-qa.yml",
  "scripts/test-thpt-release-impact.cjs"]).impact,"CI_ROUTING_ONLY");
 assert.equal(classify(["scripts/test-thpt-ap-vector-knowledge-parity.cjs",
  "scripts/test-thpt-chvi-student-notes.cjs",
  "scripts/test-thpt-release-impact.cjs",
  ".github/workflows/thpt-scoped-release-qa.yml"]).impact,"CI_ROUTING_ONLY",
  "Exact source-gate-only correction must run targeted checks and B14 smoke");
 assert.equal(classify([fixture,"scripts/test-thpt-ap-vector-knowledge-parity.cjs"]).full_suite,"true",
  "Learner+source-test mixed PR must retain full classification");
 assert.equal(classify(["scripts/test-thpt-scoped-lesson-browser.cjs",
  "scripts/test-thpt-release-impact.cjs"]).impact,"CI_ROUTING_ONLY",
  "Exact browser harness-only fix uses the B14 scoped smoke, never all-site test");
 assert.equal(classify([fixture,"scripts/test-thpt-scoped-lesson-browser.cjs"]).full_suite,"true",
  "Mixed learner source+test harness cannot disguise release risk");
 assert.equal(classify([fixture,".github/workflows/deploy.yml"]).full_suite,"true",
  "site plus workflow never hides a real site risk");
 assert.equal(classify([".github/workflows/deploy.yml","mkdocs.yml"]).full_suite,"true",
  "CI routing and actual site configuration require full analysis");

 for(const unsafe of [
  [],[fixture,"mkdocs.yml"],[fixture,"docs/assets/javascripts/thpt-golden-runtime-v1.js"],
  [fixture,"docs/assets/stylesheets/thpt-r4-preview.css"],[fixture,"docs/thpt-preview/sgk/index.md"],
  [fixture,"scripts/test-thpt-release-impact.cjs"],[fixture,".github/workflows/qa-pr.yml"],
  [fixture,"docs/assets/javascripts/thpt-chv-b13-b14-reviewed-formative-v1.js"],
  [fixture,"docs/assets/images/thpt/unknown.svg"],["docs/thpt-preview/../bad.md"]
 ])assert.equal(classify(unsafe).full_suite,"true","unsafe/mixed path must route FULL: "+unsafe);
 assert.equal(classify([B16_LESSON,"docs/assets/javascripts/thpt-r4-preview.js",
 ".github/workflows/qa-pr.yml",".github/workflows/thpt-r4-preview-quality.yml",
 "scripts/test-thpt-release-impact.cjs"]).impact,"SCOPED_G10_B16");
 for(const extra of ["mkdocs.yml","docs/assets/javascripts/firebase-gemini-v1.js",
 "docs/assets/data/assessment/private.json"])
  assert.equal(classify([B16_LESSON,extra]).full_suite,"true","unsafe mixed change must still use FULL");
 // Two genuine learner lessons legitimately use the existing scoped-lesson
 // lane, never the exceptional single-B16 profile.
 assert.notEqual(classify([B16_LESSON,"docs/thpt-preview/sgk/chuong-vii/bai-19.md"]).impact,
  "SCOPED_G10_B16","multiple lessons cannot claim the B16-only profile");
 assert.equal(classify([fixture],{manual:true}).impact,"FULL");
 console.log("PASS scoped CI impact classifier: canonical SGK page/receipt-only fast lanes, global/unknown/assessment full, manual full");
}
if(require.main===module){
 if(process.argv.includes("--prove-w5-refresh"))proveW5Refresh();
 else if(process.argv.includes("--prove-w4-refresh"))proveW4Refresh();
 else if(process.argv.includes("--prove-w3b-refresh"))proveW3bRefresh();
 else if(process.argv.includes("--prove-w3a-refresh"))proveW3aRefresh();
 else if(process.argv.includes("--prove-w2b-refresh"))proveW2bRefresh();
 else if(process.argv.includes("--prove-w2a-refresh"))proveW2aRefresh();
 else if(process.argv.includes("--prove-w1-recovery"))proveW1Recovery();
 else if(process.argv.includes("--prove-topic-w1-refresh"))proveTopicW1Refresh();
 else if(process.argv.includes("--prove-topic01-refresh"))proveTopic01Refresh();
 else if(process.argv.includes("--prove-written-library-ui"))proveWrittenLibraryUI();
 else if(process.argv.includes("--prove-topic-back-top"))proveTopicBackTop();
 else if(process.argv.includes("--prove-menu-6-plus-1"))proveMenu6Plus1();
 else if(process.argv.includes("--prove-topic-disclosures"))proveTopicDisclosures();
 else if(process.argv.includes("--prove-rw3-tabs"))proveRW3Tabs();
 else if(process.argv.includes("--prove-shared-recovery"))proveSharedDeployRecovery();
 else if(process.argv.includes("--self-test"))selfTest();
 else{
  assert.equal(process.argv.length,3,"Supply git diff --name-only path file");
  const files=fs.readFileSync(process.argv[2],"utf8").split(/\r?\n/);
  const out=classify(files,{manual:process.env.RELEASE_QA_FORCE_FULL==="true",base:process.env.BEFORE_SHA||process.env.BASE_SHA||""});
  // CI migration itself must exercise the new renderer against the most recent
  // owner-P2 accepted Golden baseline (B14), even though its paths are global.
  const qaSmoke=!["SCOPED_TOPIC_RW1","SCOPED_TOPIC_SHARED_MATH"].includes(out.impact)&&files.some(x=>[
   ".github/workflows/thpt-scoped-release-qa.yml",
   "scripts/test-thpt-scoped-lesson-browser.cjs",
   "scripts/test-thpt-release-impact.cjs"
  ].includes(x));
  if(process.env.GITHUB_OUTPUT)fs.appendFileSync(process.env.GITHUB_OUTPUT,
   "impact="+out.impact+"\nfull_suite="+out.full_suite+"\nchanged_lessons="+out.changed_lessons+
   "\nreason="+out.reason+"\nqa_smoke="+qaSmoke+"\n");
  else process.stdout.write("impact="+out.impact+"\nfull_suite="+out.full_suite+"\nchanged_lessons="+out.changed_lessons+"\nreason="+out.reason+"\n");
  console.error("RELEASE_CI_IMPACT "+JSON.stringify(out));
 }
}
module.exports={classify};
