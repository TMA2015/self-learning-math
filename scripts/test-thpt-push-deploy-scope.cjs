#!/usr/bin/env node
"use strict";
/*
 * Restrict automatic Pages deployment to pushes with a real site/runtime
 * impact. This does NOT skip a site regression gate: every unsafe/unknown
 * path demands deploy and must pass all existing deployment QA.
 * Full push diff from github.event.before to github.sha avoids incorrectly
 * skipping a multi-commit push whose last commit happens to be metadata-only.
 */
const assert=require("node:assert/strict");
const cp=require("node:child_process");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
function isNonSiteFile(p) {
 if(typeof p!=="string"||!p||p.startsWith("/")||p.includes("..")||p.includes("\\"))return false;
 const nonSiteThptMetadata=[
   "prototypes/thpt/release-queue/",
   "prototypes/thpt/release-handoffs/",
   "prototypes/thpt/review-packets/",
   "prototypes/thpt/content-drafts/",
   "prototypes/thpt/standard-changes/",
   "prototypes/thpt/notebooklm-permanent-sources/"
 ];
 const normativeDocs=[
   "prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md",
   "prototypes/thpt/THPT_TWO_LANE_SOURCE_LOCKED_HANDOFF_CONTRACT_v2_20261102.md"
 ];
 return p.startsWith(".github/")||
   nonSiteThptMetadata.some(dir=>p.startsWith(dir))||
   normativeDocs.includes(p)||
   p.startsWith("review-packets/")||
   /^scripts\/test-[^/]+\.(?:js|cjs|py)$/.test(p);
}
function decide(files) {
 assert(Array.isArray(files)&&files.length>0,"Empty/unknown push diff: HOLD, never silently skip deploy");
 assert(files.every(x=>typeof x==="string"&&x.length>0),"Malformed push diff: HOLD");
 const changed=[...new Set(files)];
 const site=changed.filter(p=>!isNonSiteFile(p));
 return {deploy:site.length>0,changed:changed.length,siteChanges:site.length,
  sample:site.slice(0,8),reason:site.length?"SITE_OR_UNKNOWN_CHANGE_REQUIRES_FULL_DEPLOY_QA":"VERIFIED_QA_GOVERNANCE_ONLY_NO_SITE_CHANGE"};
}
function selfTest(){
 const safe=[".github/workflows/deploy.yml",".github/workflows/thpt-topic-intake-qa.yml",
   "scripts/test-thpt-handoff-gate-v2.cjs","prototypes/thpt/standard-changes/README.md",
   "prototypes/thpt/content-drafts/topic-functions/R18.md",
   "prototypes/thpt/release-queue/REGISTER.md"];
 assert.equal(decide(safe).deploy,false,"Known non-site QA/governance changes must not auto-deploy");
 for(const p of ["docs/thpt-preview/sgk/chuong-vi/bai-18.md","docs/thpt-preview/chuyen-de/ham-so/kien-thuc.md",
   "docs/assets/javascripts/firebase-gemini-v1.js","docs/assets/data/thpt-g10-readiness/CHVI.json",
   "mkdocs.yml","mkdocs.thpt-preview.yml","hooks/topic_markdown_fixes.py",
   "scripts/assemble-thpt-site.cjs","scripts/new-unknown-release-code.cjs","prototypes/thpt/unknown-runtime.js","AGENTS.md"]){
   assert.equal(decide([...safe,p]).deploy,true,"Must deploy when touched real/unknown site path "+p);
 }
 assert.equal(decide([...safe,...safe]).changed,safe.length);
 assert.throws(()=>decide([]));
 assert.throws(()=>decide(["../docs/index.md"]));
 console.log("PASS deploy scope: metadata-only safe; 10 site/unknown negative cases; multi-file pushes and empty diff fail-closed.");
}
if(process.argv.includes("--self-test"))selfTest();
else{
 const before=process.env.BEFORE_SHA,head=process.env.HEAD_SHA;
 assert(/^[a-f0-9]{40}$/.test(before||"")&&before!=="0".repeat(40),"Valid complete push BEFORE_SHA required");
 assert(/^[a-f0-9]{40}$/.test(head||"")&&head!=="0".repeat(40),"Valid HEAD_SHA required");
 const actual=cp.execFileSync("git",["rev-parse","HEAD"],{cwd:root,encoding:"utf8"}).trim();
 assert.equal(actual,head,"Checkout HEAD does not match pushed HEAD");
 const raw=cp.execFileSync("git",["diff","--name-only","-z",before,head],{cwd:root,encoding:"utf8"});
 const files=raw.split("\0").filter(Boolean);
 const result=decide(files);
 console.log("PUSH_DEPLOY_SCOPE "+JSON.stringify(result));
 process.stdout.write(result.deploy?"DEPLOY_REQUIRED\n":"NO_DEPLOY_METADATA_ONLY\n");
}
