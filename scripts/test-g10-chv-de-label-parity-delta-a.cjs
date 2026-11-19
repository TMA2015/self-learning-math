#!/usr/bin/env node
"use strict";
/* G10 B12/B13 owner screenshot DELTA_A_UI: one worked problem => one "Đề:".
 * This is a source-fidelity/visible-label guard, not Academic/PED review.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const receipt=fs.readFileSync(path.join(root,
 "prototypes/thpt/ux795/G10_B12_B13_DUPLICATE_DE_HEADING_DELTA_A_R01_20261119.md"),"utf8");
const tick=String.fromCharCode(96);
const field=k=>{
 const hit=receipt.split("**"+k+":** "+tick)[1]?.slice(0,40);
 assert(/^[a-f0-9]{40}$/.test(hit||""),"Missing Delta A source-lock field "+k);
 return hit;
};
const sha1=data=>{
 const b=Buffer.isBuffer(data)?data:Buffer.from(data);
 return crypto.createHash("sha1").update(Buffer.from("blob "+b.length+"\0")).update(b).digest("hex");
};
const get=p=>fs.readFileSync(path.join(root,p),"utf8");
const heading="    #### Đề bài\n\n";
const marker="    <h4 hidden data-thpt-g10-example-boundary></h4>\n\n";
const canon="prototypes/thpt/content-drafts/THPT_G10_CHV_B12_CANONICAL.md";
const marker1="<!-- BEGIN_B12_KNOWLEDGE_MARKDOWN -->\n";
const marker2="\n<!-- END_B12_KNOWLEDGE_MARKDOWN -->";
const section=s=>s.split(marker1)[1]?.split(marker2)[0];
const restorePrevious=(candidate,label)=>{
 const occurrences=candidate.split(marker).length-1;
 assert.equal(occurrences,4,label+": exactly four invisible empty heading-boundary markers");
 return candidate.split(marker).join(heading);
};
const expectedDiff=(previous,label)=>{
 const occurrences=previous.split(heading).length-1;
 assert.equal(occurrences,4,label+": baseline must have exactly four duplicate headings");
 return previous.split(heading).join(marker);
};
for(const n of [12,13]){
 const lesson="B"+n;
 const p="docs/thpt-preview/sgk/chuong-v/bai-"+n+".md";
 const candidate=get(p),previous=restorePrevious(candidate,lesson);
 assert.equal(sha1(previous),field(lesson+"_PREVIOUS_SOURCE_BLOB"),lesson+": previous SHA");
 assert.equal(sha1(candidate),field(lesson+"_CURRENT_SOURCE_BLOB"),lesson+": current SHA");
 assert.equal(candidate,expectedDiff(previous,lesson),
  lesson+": ONLY the four redundant headings may be replaced by invisible structural boundaries");
 const examples=candidate.split('=== "Ví dụ"')[1]?.split('=== "Lỗi thường gặp"')[0]||"";
 assert.equal((examples.match(/^    ### 3\.[1-4]\. Ví dụ [1-4] —/gm)||[]).length,4,
  lesson+": four distinct worked examples must remain");
 assert.equal((examples.match(/^    \*\*Đề:\*\*/gm)||[]).length,4,
  lesson+": exactly four original visible 'Đề:' labels");
 assert.equal((examples.match(/^\s{4}#### Đề bài$/gm)||[]).length,0,
  lesson+": no redundant 'Đề bài' subheading");
 assert.equal((examples.match(/data-thpt-g10-example-boundary/g)||[]).length,4,
  lesson+": four invisible empty H4 boundaries must preserve original source-authored solution panels");
 assert.equal((examples.match(/class="thpt-g10-example-solution"/g)||[]).length,4,
  lesson+": preserve four original worked solutions");
 assert.equal((candidate.match(/data-thpt-first-try-id="/g)||[]).length,5,
  lesson+": original five First Try IDs protected");
}
const b12=get("docs/thpt-preview/sgk/chuong-v/bai-12.md");
const master=get(canon);
const formerMaster=master.replace(section(master),restorePrevious(section(master),"B12 canonical"));
assert.equal(sha1(formerMaster),field("B12_PREVIOUS_CANONICAL_BLOB"),
 "B12 immutable predecessor canonical blob");
assert.equal(sha1(master),field("B12_CURRENT_CANONICAL_BLOB"),
 "B12 current one-canonical SHA");
assert.equal(master,expectedDiff(formerMaster,"B12 canonical"),
 "B12 canonical may change only by four heading-to-invisible-boundary substitutions");
assert.equal(section(master),b12,"B12 canonical Section A must equal current learner source");
const b11p="docs/thpt-preview/sgk/chuong-iv/bai-11.md";
assert.equal(sha1(get(b11p)),field("B11_UNCHANGED_SOURCE_BLOB"),
 "B11 owner-approved presentation must not change");
assert.equal(sha1(get("docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css")),
 field("SHARED_GOLDEN_CSS_BLOB"),"Golden CSS cannot drift");
for(const [p,key] of [
 ["docs/assets/javascripts/thpt-chv-b12-reviewed-formative-r02.js","B12_PUBLIC_BANK_BLOB"],
 ["docs/assets/javascripts/thpt-chv-b13-b14-reviewed-formative-v1.js","B13_B14_PUBLIC_BANK_BLOB"],
 ["docs/assets/images/thpt/THPT_G10_B13_QUARTILES_D5_R01.svg","B13_D5_SVG_BLOB"]]){
 assert.equal(sha1(fs.readFileSync(path.join(root,p))),field(key),
  "Unrelated assessed bank or original educational SVG changed: "+p);
}
console.log("PASS G10 B12/B13 Delta A: 8 visible 'Đề bài' removed, 8 original 'Đề:' retained; four hidden boundary markers per lesson; one B12 canonical; historical source, CSS, Q15/Q16 and bank SHA guarded.");
