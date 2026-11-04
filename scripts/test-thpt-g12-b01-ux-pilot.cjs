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
const sourceSHA="7fc40081bb3f1e104e38e2c86a5bc1e8217e77cc";
const figureSHA="e2696224533994826104e6c505d9dab26fc0a2e2";
assert.equal(blobSHA(source),sourceSHA,"Original canonical B01 source must remain locked");
assert.equal(blobSHA(figure),figureSHA,"Original academic SVG must remain locked");
function embedded(id) {
 const exp=new RegExp('<script id="'+id+'" type="application/json">([\\s\\S]*?)<\\/script>');
 const match=html.match(exp);
 assert(match,"missing embedded canonical "+id);
 return JSON.parse(match[1]);
}
assert.equal(embedded("canonical-source"),source,"Embedded pilot copy must exactly equal original Markdown");
assert.equal(embedded("canonical-figure"),figure,"Embedded pilot SVG must equal original SVG");
const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
assert.equal(scripts.length,1,"Exactly one client-side pilot script");
new vm.Script(scripts[0][1],{filename:"G12_B01_PRESENTATION_AB_20261104.html"});
assert.match(html,/id="view-a"/);
assert.match(html,/id="view-b"/);
assert.match(html,/data-mode="A"/);
assert.match(html,/PILOT|Pilot/);
assert(!/fetch\s*\(|XMLHttpRequest|localStorage|sessionStorage|firebase\.|sendBeacon|RoadmapTutor\./.test(scripts[0][1]),"No network, AI, persistence or mastery");
assert(!/docs\/thpt-preview\/sgk\/lop-12\/chuong-i\/bai-1\.md/.test(html.slice(0,1000)), "Prototype is not a deployed SGK lesson page");
console.log("PASS isolated UX-PED A/B: source Git SHA "+sourceSHA+"; original SVG SHA "+figureSHA+"; no source edits/network/persistence; JS syntax valid");
