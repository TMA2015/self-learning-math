#!/usr/bin/env node
"use strict";
/*
 * Release lane isolation: classify changed files WITHOUT minting a PASS.
 * A new Topic's independent Academic/PED receipt is not a G10 Knowledge
 * enrichment receipt. No automatic old-SGK source-lock exemption is granted.
 */
const assert=require("node:assert/strict");
const cp=require("node:child_process");
const path=require("node:path");
const root=path.resolve(__dirname,"..");

function profile(paths) {
 const files=[...new Set(paths.filter(Boolean))];
 const sgk=files.filter(p=>p.startsWith("docs/thpt-preview/sgk/"));
 const topic=files.filter(p=>p.startsWith("docs/thpt-preview/chuyen-de/")||
   /^prototypes\/thpt\/content-drafts\/topic-/.test(p)||
   /^prototypes\/thpt\/release-handoffs\/THPT-TOPIC-/.test(p)||
   /^prototypes\/thpt\/release-queue\/ready\/(?:THPT-)?TOPIC-/.test(p));
 const assessments=files.filter(p=>/^(?:docs\/assets\/(?:data|javascripts)\/|scripts\/.*(?:rd1|readiness|assessment|mastery)|firebase)/i.test(p));
 const infra=files.filter(p=>p.startsWith(".github/workflows/")||
   /^mkdocs(?:\.thpt-preview)?\.yml$/.test(p)||p.startsWith("scripts/")||
   p.startsWith("docs/assets/javascripts/")||p.startsWith("docs/assets/stylesheets/"));
 let lane="NO_COURSE_CONTENT";
 if(topic.length&&sgk.length)lane="MIXED_TOPIC_AND_SGK";
 else if(topic.length)lane="TOPIC_CANDIDATE";
 else if(sgk.length)lane="SGK_CANDIDATE";
 return {lane,files:files.length,sgk:sgk.length,topic:topic.length,
  sharedRuntime:infra.length,assessmentSurface:assessments.length,
  releaseImplication:lane==="TOPIC_CANDIDATE"?
    "TOPIC_INDEPENDENT_Q18_RECEIPT_REQUIRED; R/AP/Q16 still required; NO SGK KNOWLEDGE Q18 self-approval":
    lane==="SGK_CANDIDATE"?
    "SGK_SOURCE_DELTA_Q18_REQUIRED; NOT TOPIC review":
    lane==="MIXED_TOPIC_AND_SGK"?
    "MIXED_SCOPE_HOLD; separate Topic and SGK content receipts; full shared QA required":
    "NO_CONTENT_READY_FROM_INFRA_ONLY"};
}
function selfTest() {
 assert.equal(profile(["docs/thpt-preview/chuyen-de/ham-so/kien-thuc.md"]).lane,"TOPIC_CANDIDATE");
 assert.equal(profile(["prototypes/thpt/content-drafts/topic-functions/a.md","prototypes/thpt/release-handoffs/THPT-TOPIC-ABC_HANDOFF.md"]).lane,"TOPIC_CANDIDATE");
 assert.equal(profile(["docs/thpt-preview/sgk/chuong-vi/bai-18.md"]).lane,"SGK_CANDIDATE");
 assert.equal(profile(["docs/thpt-preview/chuyen-de/ham-so/index.md","docs/thpt-preview/sgk/chuong-iv/bai-9.md"]).lane,"MIXED_TOPIC_AND_SGK");
 const shared=profile(["docs/thpt-preview/chuyen-de/ham-so/luyen-tap.md","mkdocs.thpt-preview.yml","docs/assets/javascripts/route-module-loader-v2.js"]);
 assert.equal(shared.lane,"TOPIC_CANDIDATE");
 assert(shared.sharedRuntime>0,"Topic with shared site runtime still needs full release QA");
 const privateDelta=profile(["docs/thpt-preview/chuyen-de/ham-so/tu-kiem-tra.md","docs/assets/data/thpt-topic-readiness-private.json"]);
 assert(privateDelta.assessmentSurface>0,"Private assessment modifications must trigger Q16 scrutiny");
 assert.equal(profile(["scripts/test-thpt-handoff-gate-v2.cjs"]).lane,"NO_COURSE_CONTENT");
 assert.equal(profile(["prototypes/thpt/release-queue/ready/TOPIC-DEMO.md","prototypes/thpt/release-queue/ready/TOPIC-DEMO.md"]).topic,1);
 console.log("PASS lane classifier: 8 checks; Topic independent Q18, SGK enrichment Q18 and shared assessment gates isolated. No automatic release.");
}
if(process.argv.includes("--self-test"))selfTest();
else {
 const b=process.env.BASE_SHA,h=process.env.HEAD_SHA;
 assert(/^[a-f0-9]{40}$/.test(b||"")&&/^[a-f0-9]{40}$/.test(h||""),"Explicit BASE_SHA/HEAD_SHA required");
 const out=cp.execFileSync("git",["diff","--name-only",b+"..."+h],{cwd:root,encoding:"utf8"});
 const result=profile(out.split(/\r?\n/));
 console.log("RELEASE_SCOPE_PROFILE "+JSON.stringify(result));
 if(result.lane==="MIXED_TOPIC_AND_SGK")
  console.log("HOLD: distinct content receipts required for SGK and Topic; do not merge academic verdicts");
 if(result.assessmentSurface>0)
  console.log("Q16_GLOBAL_GATES_REQUIRED: no RD1, key, Mastery or early answer leakage is permitted");
 console.log("Classification ONLY; formal V2/Academic/PED/R4/Golden/Final Submit still independently mandatory.");
}
