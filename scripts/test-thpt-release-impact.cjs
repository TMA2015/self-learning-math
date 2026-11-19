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
function classify(paths,{manual=false}={}){
 const files=paths.map(s=>s.trim()).filter(Boolean);
 if(manual)return {impact:"FULL",full_suite:"true",changed_lessons:"",reason:"MANUAL_FULL_REQUEST"};
 if(!files.length)return {impact:"FULL",full_suite:"true",changed_lessons:"",reason:"EMPTY_DIFF"};
 if(files.some(x=>x.includes("..")||x.includes("\\")||x.startsWith("/")))
  return {impact:"FULL",full_suite:"true",changed_lessons:"",reason:"UNSAFE_PATH"};
 const lessons=files.filter(x=>CANONICAL_PAGE(x));
 const safeCompanions=x=>RECEIPT.test(x)||SOURCE_TEST.test(x);
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
 const fixture="docs/thpt-preview/sgk/chuong-v/bai-14.md";
 const another="docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md";
 const authoring=[
  fixture,"scripts/test-g10-chv-editorial-source.cjs",
  "scripts/thpt-q18-g10-source-receipt.cjs",
  "prototypes/thpt/ux795/G10_CHV_B14_DELTA_A.md"
 ];
 assert.equal(classify([fixture]).impact,"SCOPED_LESSON");
 assert.equal(classify(authoring).full_suite,"false");
 assert.equal(classify([fixture,another]).changed_lessons,fixture+","+another);
 assert.equal(classify([fixture,
  "docs/thpt-preview/sgk/chuong-v/luyen-tap.md",
  "docs/thpt-preview/sgk/chuong-v/tu-kiem-tra-chuong.md"]).impact,"SCOPED_LESSON");
 assert.equal(classify(["docs/thpt-preview/sgk/lop-11/chuong-i.md",
  "docs/thpt-preview/sgk/lop-11/chuong-i/tu-kiem-tra-chuong.md"]).full_suite,"false");
 assert.equal(classify(["AGENTS.md"]).impact,"METADATA");
 for(const unsafe of [
  [],[fixture,"mkdocs.yml"],[fixture,"docs/assets/javascripts/thpt-golden-runtime-v1.js"],
  [fixture,"docs/assets/stylesheets/thpt-r4-preview.css"],[fixture,"docs/thpt-preview/sgk/index.md"],
  [fixture,"scripts/test-thpt-release-impact.cjs"],[fixture,".github/workflows/qa-pr.yml"],
  [fixture,"docs/assets/javascripts/thpt-chv-b13-b14-reviewed-formative-v1.js"],
  [fixture,"docs/assets/images/thpt/unknown.svg"],["docs/thpt-preview/../bad.md"]
 ])assert.equal(classify(unsafe).full_suite,"true","unsafe/mixed path must route FULL: "+unsafe);
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
