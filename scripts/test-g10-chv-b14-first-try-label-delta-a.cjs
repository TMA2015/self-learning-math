#!/usr/bin/env node
"use strict";
/* Release Delta A: no semantic change; prove exactly three localized copy fixes. */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const crypto=require("node:crypto");
const cp=require("node:child_process");
const root=path.resolve(__dirname,"..");
const get=p=>fs.readFileSync(path.join(root,p),"utf8");
const bytes=p=>fs.readFileSync(path.join(root,p));
const receipt=get("prototypes/thpt/ux795/G10_CHV_B14_EM_VAN_DUNG_LABEL_DELTA_A_R01_20261119.md");
const field=k=>{
 const v=receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
 assert(/^[a-f0-9]{40}$/.test(v||""),"Delta A receipt missing SHA "+k);
 return v;
};
const gitblob=b=>{
 const v=Buffer.isBuffer(b)?b:Buffer.from(b);
 return crypto.createHash("sha1").update(Buffer.from("blob "+v.length+"\0")).update(v).digest("hex");
};
const p="docs/thpt-preview/sgk/chuong-v/bai-14.md";
const current=get(p);
const historic=cp.spawnSync("git",["show",field("BASE_MAIN_COMMIT")+":"+p],
 {cwd:root,encoding:"utf8"});
assert.equal(historic.status,0,"B14 19/11 signed historical commit must be fetched");
const previous=historic.stdout;
assert.equal(gitblob(previous),field("B14_PREVIOUS_SOURCE_BLOB"),
 "B14 19/11 previous exact learner blob");
assert.equal((previous.match(/\*\*Em tự thử\.\*\*/g)||[]).length,3,
 "B14 historical source must have exactly three obsolete labels");
const labelFixed=previous.replace(/\*\*Em tự thử\.\*\*/g,"**Em vận dụng.**");
assert.equal(gitblob(labelFixed),field("B14_CURRENT_SOURCE_BLOB"),
 "B14 approved 19/11 Delta A consists of only three exact label fixes");
const placement=get("prototypes/thpt/ux795/G10_CHIV_CHV_B07_B14_KIEM_LOI_PLACEMENT_Q18_R01_20261120.md");
const row=placement.split("\n").filter(x=>x.startsWith("| B14 | "));
assert.equal(row.length,1,"B14 single signed 20/11 local HELP source transition");
const chain=[...row[0].matchAll(/`([a-f0-9]{40})`/g)].map(m=>m[1]);
assert.deepEqual([field("B14_CURRENT_SOURCE_BLOB"),gitblob(current)],chain,
 "B14 historical label-only source must extend to signed 20/11 Q18 current source");
const match=[...current.matchAll(/\*\*Em vận dụng\.\*\*/g)];
assert.equal(match.length,5,"B14 all five current Vận dụng labels retained");
assert.equal((current.match(/Em tự thử\./g)||[]).length,0,
 "B14 obsolete label must not resurface");
const ids=[...current.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(x=>x[1]);
assert.deepEqual(ids,[10,11,12,13,14].map(i=>"THPT-G10-CHV-TRY"+i),
 "Canonical 5 First Try IDs unchanged and in teaching sequence");
assert.equal((current.match(/\?\?\? question "Đối chiếu"/g)||[]).length,5,
 "Keep existing five self-reveal disclosures");
assert.equal((current.match(/class="thpt-g10-example-solution"/g)||[]).length,3,
 "Keep approved three worked-example solutions");
assert.equal((current.match(/class="thpt-r4-knowledge-conclusion thpt-r4-concept-card"/g)||[]).length,3,
 "Keep three Golden formal concept cards");
assert.equal((current.match(/class="thpt-r4-knowledge-conclusion thpt-r4-rule-card"/g)||[]).length,1,
 "Keep one Golden formal rule");
assert.equal((current.match(/data-thpt-help-id=/g)||[]).length,2,
 "Keep two targeted D6 recovery item placements");
assert.equal(gitblob(bytes("prototypes/thpt/ux795/G10_CHV_B14_Q18_GOLDEN_ENRICHMENT_DELTA_R01_20261119.md")),
 field("HISTORICAL_Q18_RECEIPT_BLOB"),"PR 917 Q18 receipt must remain immutable");
for(const [path,key] of [
 ["docs/thpt-preview/sgk/chuong-v/bai-12.md","B12_P2_LEARNER_BLOB"],
 ["docs/thpt-preview/sgk/chuong-v/bai-13.md","B13_P2_LEARNER_BLOB"],
 ["docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css","GOLDEN_CSS_BLOB"],
 ["docs/assets/javascripts/thpt-chv-b13-b14-reviewed-formative-v1.js","PUBLIC_B13_B14_BANK_BLOB"]
]){
 const raw=bytes(path);
 const immutable=path.endsWith("thpt-g10-knowledge-hybrid-l1-v1.css")?
   require("./test-g10-b15-golden-css-source.cjs").publishedB14Ancestor(raw):raw;
 if(path.includes("/bai-12.md")||path.includes("/bai-13.md")){
  const id=path.includes("bai-12")?"B12":"B13";
  const signed=placement.split("\n").filter(x=>x.startsWith("| "+id+" | "));
  assert.equal(signed.length,1,id+" signed Q18 20/11 row exists");
  const pair=[...signed[0].matchAll(/`([a-f0-9]{40})`/g)].map(m=>m[1]);
  assert.deepEqual([field(id+"_P2_LEARNER_BLOB"),gitblob(raw)],pair,
   id+" earlier P2 source immutable in receipt; current source exact 20/11 successor");
 }else assert.equal(gitblob(immutable),field(key),
   "Out-of-scope approved source changed: "+path);
}
console.log("PASS G10 B14 19/11 historical three-label Delta A replay + signed 20/11 Q18 successor, five First Try, two HELPs, CSS, bank.");
