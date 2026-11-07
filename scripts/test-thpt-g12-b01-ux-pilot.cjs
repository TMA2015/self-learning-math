"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const crypto=require("node:crypto");
const vm=require("node:vm");
const root=path.resolve(__dirname,"..");
const base="prototypes/thpt/ux-ped/";
const sourcePath=path.join(root,"docs/thpt-preview/sgk/lop-12/chuong-i/bai-1.md");
const figurePath=path.join(root,"docs/assets/images/thpt/G12_B01_FIG01_DERIVATIVE_SIGN_R00.svg");
const htmlPath=path.join(root,base,"G12_B01_PRESENTATION_AB_20261104.html");
const html=fs.readFileSync(htmlPath,"utf8");
const source=fs.readFileSync(sourcePath,"utf8");
const figure=fs.readFileSync(figurePath,"utf8");
const blobSHA=data=>crypto.createHash("sha1")
  .update(Buffer.from("blob "+Buffer.byteLength(data,"utf8")+"\0","utf8"))
  .update(data,"utf8").digest("hex");
const sourceSHA="7fc40081bb3f1e104e38e2c86a5bc1e8217e77cc"; // original frozen A/B snapshot
const currentUiSHA="64f6a142a88e8c4dd63dff3f7d2220787fcdec5c"; // main approved DELTA_A_UI snapshot
const figureSHA="e2696224533994826104e6c505d9dab26fc0a2e2";
assert([sourceSHA,currentUiSHA].includes(blobSHA(source)),"B01 source must match an explicitly locked historical/production snapshot");
assert.equal(blobSHA(figure),figureSHA,"Original academic SVG must remain locked");
function embedded(id) {
 const exp=new RegExp('<script id="'+id+'" type="application/json">([\\s\\S]*?)<\\/script>');
 const match=html.match(exp);
 assert(match,"missing embedded canonical "+id);
 return JSON.parse(match[1]);
}
const historical=embedded("canonical-source");
assert.equal(blobSHA(historical),sourceSHA,"Embedded A/B snapshot MUST equal original immutable source");
const academic=text=>{const start=text.indexOf("## 1. Vì sao cần học?");const end=text.indexOf("## 7.",start);assert(start>0&&end>start,"Academic §1–§6 headings");return text.slice(start,end)};
assert.equal(academic(source),academic(historical),"Academic §1–§6 must be byte-identical; never waive math/pedagogy delta");
if(blobSHA(source)===currentUiSHA){
 assert(source.includes("trang Core và Luyện tập của Chương I"),"Approved relocation in live source");
 assert(historical.includes("data-g12-chi-lesson"),"Historical prototype retains old UI footer");
}
assert.equal(embedded("canonical-figure"),figure,"Embedded pilot SVG must equal original SVG");
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
assert.equal(scripts.length,1,"Exactly one client-side pilot script");
new vm.Script(scripts[0][1],{filename:"G12_B01_PRESENTATION_AB_20261104.html"});
assert.match(html,/id="view-a"/);
assert.match(html,/id="view-b"/);
assert.match(html,/data-mode="A"/);
assert.match(html,/PILOT|Pilot/);
assert(html.includes('get("participant")'),"T4 participant variant must be selected by query, not visible chooser");
assert(html.includes('document.querySelector(".controls").hidden=true'),"Learner view must hide reviewer A/B choice");
assert(html.includes('document.querySelector(".source-note").hidden=true'),"Learner view must hide reviewer metadata");
assert(html.includes('toggle(assigned)'),"Learner sees assigned original canonical variant only");
assert(!/fetch\s*\(|XMLHttpRequest|localStorage|sessionStorage|firebase\.|sendBeacon|RoadmapTutor\./.test(scripts[0][1]),"No network, AI, persistence or mastery");
assert(!/docs\/thpt-preview\/sgk\/lop-12\/chuong-i\/bai-1\.md/.test(html.slice(0,1000)), "Prototype is not a deployed SGK lesson page");
// T4/T5 research artifacts are part of the isolated pilot only; no learner answer key or fake measured verdict.
const learnerForm=fs.readFileSync(path.join(root,base,"G12_B01_T4_LEARNER_WORKSHEET_20261107.md"),"utf8");
const facilitator=fs.readFileSync(path.join(root,base,"G12_B01_T4_LEARNER_AB_TRIAL_PROTOCOL_20261106.md"),"utf8");
const decision=fs.readFileSync(path.join(root,base,"G12_B01_T5_OWNER_DECISION_BRIEF_20261107.md"),"utf8");
assert(learnerForm.includes("Nhiệm vụ 1.")&&learnerForm.includes("Nhiệm vụ 2."),"Two independent learner tasks required");
assert(learnerForm.includes("Không phải bài kiểm tra chính thức"),"Research only, not official self-check");
assert(!/đáp án\s*:\s*[ABCD]|f'\(x\)\s*>\s*0\s*trên/.test(learnerForm),"No scored answer-key text in learner form");
assert(facilitator.includes("rubric")&&facilitator.includes("G12_B01_T4_LEARNER_WORKSHEET_20261107.md"),"Facilitator rubric must stay separate from learner worksheet");
assert(facilitator.includes("CROSSOVER_EXCLUDED"),"Explicit exclusion when learner switches variants");
assert(decision.includes("T4_REAL_LEARNER_RESULTS=PENDING")&&decision.includes("Chưa phát hành biến thể B"),"No fictional learner outcome or approval");
console.log("PASS isolated UX-PED A/B: source Git SHA "+sourceSHA+"; original SVG SHA "+figureSHA+"; no source edits/network/persistence; JS syntax valid");
