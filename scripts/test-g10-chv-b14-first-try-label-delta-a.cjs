#!/usr/bin/env node
"use strict";
/* Release Delta A: no semantic change; prove exactly three localized copy fixes. */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const crypto=require("node:crypto");
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
assert.equal(gitblob(current),field("B14_CURRENT_SOURCE_BLOB"),"B14 final learner source SHA");
const match=[...current.matchAll(/\*\*Em vận dụng\.\*\*/g)];
assert.equal(match.length,5,"Five published First Try labels must all read Em vận dụng");
assert.equal((current.match(/Em tự thử\./g)||[]).length,0,"No obsolete label visible");
let n=0;
const previous=current.replace(/\*\*Em vận dụng\.\*\*/g,x=>{
 n++;
 return n>=2&&n<=4?"**Em tự thử.**":x;
});
assert.equal(n,5,"Five original placements");
assert.equal(gitblob(previous),field("B14_PREVIOUS_SOURCE_BLOB"),
 "Reconstructed prior B14 source must match signed Q18 snapshot exactly, not just equivalent meaning");
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
]) assert.equal(gitblob(bytes(path)),field(key),"Out-of-scope approved source changed: "+path);
console.log("PASS G10 B14 Delta A: exact three Em tự thử → Em vận dụng replacements; 5 existing First Try and Đối chiếu placements; immutable published math, approved B12/B13, Golden CSS, bank and Q18 receipt.");
