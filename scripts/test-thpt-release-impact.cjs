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
 return sha==="d847e412bbc1bc10e62620965312ae0d327a0907";
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
     !launcher.includes('["Danh mục 22 Chuyên đề đã phát hành","chuyen-de/"]')||
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

const G11_W1_REVIEW_DELTA_FILES=new Set(["docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md","docs/thpt-preview/sgk/lop-11/chuong-i/bai-3.md","docs/thpt-preview/sgk/lop-11/chuong-i/bai-4.md","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs"]);
function isG11W1ReviewDelta(files){
 return files.length===G11_W1_REVIEW_DELTA_FILES.size&&new Set(files).size===files.length&&files.every(p=>G11_W1_REVIEW_DELTA_FILES.has(p));
}

function classify(paths,{manual=false}={}){
 const files=paths.map(s=>s.trim()).filter(Boolean);
 if(manual)return {impact:"FULL",full_suite:"true",changed_lessons:"",reason:"MANUAL_FULL_REQUEST"};
 if(!files.length)return {impact:"FULL",full_suite:"true",changed_lessons:"",reason:"EMPTY_DIFF"};
 if(files.some(x=>x.includes("..")||x.includes("\\")||x.startsWith("/")))
  return {impact:"FULL",full_suite:"true",changed_lessons:"",reason:"UNSAFE_PATH"};
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
 assert.equal(classify(w5).impact,"SCOPED_TOPIC_W5","W5 exact signed 38-file scope only");
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
 assert.equal(classify(w4).impact,"SCOPED_TOPIC_W4","W4 signed 30-path wave uses only W4 scoped QA");
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
 assert.equal(classify(w3).impact,"SCOPED_TOPIC_W3","Exact signed CĐ12–15 changes run W3 scoped QA");
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
 if(process.argv.includes("--self-test"))selfTest();
 else{
  assert.equal(process.argv.length,3,"Supply git diff --name-only path file");
  const files=fs.readFileSync(process.argv[2],"utf8").split(/\r?\n/);
  const out=classify(files,{manual:process.env.RELEASE_QA_FORCE_FULL==="true"});
  // CI migration itself must exercise the new renderer against the most recent
  // owner-P2 accepted Golden baseline (B14), even though its paths are global.
  const qaSmoke=files.some(x=>[
   ".github/workflows/thpt-scoped-release-qa.yml",
   "scripts/test-thpt-scoped-lesson-browser.cjs",
   "scripts/test-thpt-release-impact.cjs"
  ].includes(x));
  if(process.env.GITHUB_OUTPUT)fs.appendFileSync(process.env.GITHUB_OUTPUT,
   "impact="+out.impact+"\nfull_suite="+out.full_suite+"\nchanged_lessons="+out.changed_lessons+
   "\nqa_smoke="+qaSmoke+"\n");
  else process.stdout.write("impact="+out.impact+"\nfull_suite="+out.full_suite+"\nchanged_lessons="+out.changed_lessons+"\n");
  console.error("RELEASE_CI_IMPACT "+JSON.stringify(out));
 }
}
module.exports={classify};
