"use strict";
// Q18 anti-drift: one authoritative B09 lesson manuscript, derived public
// Knowledge and P07 JS byte-equal. The 8 original R01 items are immutable.
const fs=require("node:fs"),assert=require("node:assert/strict"),crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8");
const sha=bytes=>crypto.createHash("sha1").update(Buffer.concat([
 Buffer.from("blob "+bytes.length+"\0"),bytes])).digest("hex");
const canonicalPath="prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_CANONICAL.md";
const master=read(canonicalPath);
const part=(begin,end)=>{
 const start="<!-- BEGIN_"+begin+" -->\n",stop="\n<!-- END_"+end+" -->";
 assert.equal(master.split(start).length,2,"One source section: "+begin);
 assert.equal(master.split(stop).length,2,"One source end: "+end);
 const m=master.split(start)[1].split(stop)[0];
 assert(m&&m.length>50,"Empty source section "+begin);
 return m;
};
const knowledge=part("B09_KNOWLEDGE_MARKDOWN","B09_KNOWLEDGE_MARKDOWN");
const original=part("B09_HISTORICAL_R01_ITEMS","B09_HISTORICAL_R01_ITEMS");
const p07=part("B09_P07_COMPILABLE_JS","B09_P07_COMPILABLE_JS");
const publicKnowledge=read("docs/thpt-preview/sgk/chuong-iv/bai-9.md");
const runtimeP07=read("docs/assets/javascripts/thpt-g10-b09-decomp-r04-formative-extension.js");
assert.equal(knowledge,publicKnowledge,"B09 Knowledge changed without updating ONE canonical lesson manuscript");
assert.equal(p07,runtimeP07,"B09 P07 JS changed without updating ONE canonical lesson manuscript");
const legacyBytes=fs.readFileSync("prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_B11_D1D6_AUTHORING_R01_SNAPSHOT.md");
assert.equal(sha(legacyBytes),"a9f6fab820559a8da98a5a42cd9902dbf9891f34");
const legacy=legacyBytes.toString("utf8");
const a=legacy.indexOf("### `THPT-G10-B09-C01`");
const z=legacy.indexOf("### `THPT-G10-B10-C01`");
assert(a>0&&z>a);
assert.equal(original,legacy.slice(a,z),"Original 8 B09 canonical records altered");
assert.equal((original.match(/^### `THPT-G10-B09-[CP]\d{2}`/gm)||[]).length,8);
assert.equal((p07.match(/"item_id": "THPT-G10-B09-P07"/g)||[]).length,1);
assert(master.includes("G10-B09-DECOMP_S1")&&master.includes("printed pages 55–59"));
assert(master.includes("Q18_SELF_QA")&&master.includes("B09-RUNTIME-01"));
console.log("PASS B09 ONE current complete academic manuscript: byte-exact Knowledge + 8 immutable original items + 1 new P07 JS; no competing patch source");
