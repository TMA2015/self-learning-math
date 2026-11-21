#!/usr/bin/env node
"use strict";
/* G10 B12/B13 owner screenshot DELTA_A_UI: one worked problem => one "Đề:".
 * This is a source-fidelity/visible-label guard, not Academic/PED review.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const crypto=require("node:crypto");
const path=require("node:path");
const cp=require("node:child_process");
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
const historicCommit=field("BASE_MAIN_COMMIT");
const historyAt=p=>{
 const z=cp.spawnSync("git",["show",historicCommit+":"+p],{cwd:root,encoding:"utf8"});
 assert.equal(z.status,0,"Fetch historical 19/11 signed commit before QA: "+p+" "+z.stderr);
 return z.stdout;
};
const placement=get("prototypes/thpt/ux795/G10_CHIV_CHV_B07_B14_KIEM_LOI_PLACEMENT_Q18_R01_20261120.md");
assert(placement.includes("DELTA_C_ACADEMIC_MATERIAL")&&placement.includes("Q18_OWNER_SELF_VERIFIED_ENRICHMENT"),
 "20/11 B12/B13 material HELP relocation receipt required");
const transition=(prefix)=>{
 const rows=placement.split("\n").filter(l=>l.startsWith("| "+prefix+" | "));
 assert.equal(rows.length,1,prefix+": one signed Q18 transition row");
 const values=[...rows[0].matchAll(/`([a-f0-9]{40})`/g)].map(m=>m[1]);
 assert.equal(values.length,2,prefix+": exact old/current SHA pair");
 return values;
};
const heading="    #### Đề bài\n\n";
const marker='    #### &nbsp; {style="display:none"}\n\n';
const canon="prototypes/thpt/content-drafts/THPT_G10_CHV_B12_CANONICAL.md";
const marker1="<!-- BEGIN_B12_KNOWLEDGE_MARKDOWN -->\n";
const marker2="\n<!-- END_B12_KNOWLEDGE_MARKDOWN -->";
const section=s=>s.split(marker1)[1]?.split(marker2)[0];
const restorePrevious=(candidate,label)=>{
 const occurrences=candidate.split(marker).length-1;
 assert.equal(occurrences,4,label+": exactly four hidden Markdown H4 boundary markers");
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
 const candidate=get(p),previous=historyAt(p);
 // The 19/11 Delta A must be replayed from its historical Git commit,
 // not reconstructed from the later signed 20/11 Q18 material delta.
 assert.equal(sha1(previous),field(lesson+"_PREVIOUS_SOURCE_BLOB"),lesson+": historical predecessor");
 const uiCandidate=expectedDiff(previous,lesson);
 assert.equal(sha1(uiCandidate),field(lesson+"_CURRENT_SOURCE_BLOB"),lesson+": historical four-heading edit");
 const [oldQ18,newQ18]=transition(lesson);
 assert.deepEqual([oldQ18,sha1(candidate)],[field(lesson+"_CURRENT_SOURCE_BLOB"),newQ18],
  lesson+": signed 19/11 UI-only→20/11 material source chain");
 const examples=candidate.split('=== "Ví dụ"')[1]?.split('=== "Lỗi thường gặp"')[0]||"";
 assert.equal((examples.match(/^    ### 3\.[1-4]\. Ví dụ [1-4] —/gm)||[]).length,4,
  lesson+": four distinct worked examples must remain");
 assert.equal((examples.match(/^    \*\*Đề:\*\*/gm)||[]).length,4,
  lesson+": exactly four original visible 'Đề:' labels");
 assert.equal((examples.match(/^\s{4}#### Đề bài$/gm)||[]).length,0,
  lesson+": no redundant 'Đề bài' subheading");
 assert.equal(examples.split('#### &nbsp; {style="display:none"}').length-1,4,
  lesson+": four attr_list-hidden Markdown H4 boundaries must preserve original source-authored solution panels");
 assert.equal((examples.match(/class="thpt-g10-example-solution"/g)||[]).length,4,
  lesson+": preserve four original worked solutions");
 assert.equal((candidate.match(/data-thpt-first-try-id="/g)||[]).length,5,
  lesson+": original five First Try IDs protected");
}
const b12=get("docs/thpt-preview/sgk/chuong-v/bai-12.md");
const master=get(canon);
const formerMaster=historyAt(canon);
assert.equal(sha1(formerMaster),field("B12_PREVIOUS_CANONICAL_BLOB"),
 "B12 immutable 19/11 predecessor canonical");
assert.equal(sha1(expectedDiff(formerMaster,"B12 canonical")),field("B12_CURRENT_CANONICAL_BLOB"),
 "B12 exact historical four-heading canonical transformation");
const [oldCanonical,newCanonical]=transition("CANONICAL_B12");
assert.deepEqual([oldCanonical,sha1(master)],[field("B12_CURRENT_CANONICAL_BLOB"),newCanonical],
 "B12 one current manuscript must match 20/11 signed Q18 successor");
assert.equal(section(master),b12,"B12 canonical Section A must equal current learner source");
const b11p="docs/thpt-preview/sgk/chuong-iv/bai-11.md";
const b11Q18=transition("B11");
assert.deepEqual([field("B11_UNCHANGED_SOURCE_BLOB"),sha1(get(b11p))],b11Q18,
 "B11 owner-approved 19/11 SHA must extend signed 20/11 HELP relocation");
const fullCss=get("docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css");
const b14CssMarker="/* G10 ChV B14 · scoped X-C RELEASE Golden";
const at=fullCss.indexOf(b14CssMarker);
assert(at>0&&fullCss.indexOf(b14CssMarker,at+1)<0,
 "B14 must append one new scoped CSS block after owner-P2 B12/B13");
assert.equal(sha1(fullCss.slice(0,at-1)),field("SHARED_GOLDEN_CSS_BLOB"),
 "B12/B13 Golden CSS cannot drift before B14 append");
const b14Receipt=get("prototypes/thpt/ux795/G10_CHV_B14_Q18_GOLDEN_ENRICHMENT_DELTA_R01_20261119.md");
const f=k=>b14Receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
assert.equal(f("G10_B01_B13_FROZEN_CSS_BLOB"),field("SHARED_GOLDEN_CSS_BLOB"),
 "B14 scoped source receipt must preserve original B12/B13 stylesheet SHA");
assert.equal(sha1(require("./test-g10-b15-golden-css-source.cjs").publishedB14Ancestor(fullCss)),f("CANDIDATE_GOLDEN_CSS_BLOB"),
 "B14 scoped stylesheet exact final SHA");
for(const [p,key] of [
 ["docs/assets/javascripts/thpt-chv-b12-reviewed-formative-r02.js","B12_PUBLIC_BANK_BLOB"],
 ["docs/assets/javascripts/thpt-chv-b13-b14-reviewed-formative-v1.js","B13_B14_PUBLIC_BANK_BLOB"],
 ["docs/assets/images/thpt/THPT_G10_B13_QUARTILES_D5_R01.svg","B13_D5_SVG_BLOB"]]){
 assert.equal(sha1(fs.readFileSync(path.join(root,p))),field(key),
  "Unrelated assessed bank or original educational SVG changed: "+p);
}
console.log("PASS G10 B12/B13 historical 19/11 Delta A Git replay + 20/11 signed Q18 successor: 8 hidden boundaries, one B12 canonical, Q15/Q16/CSS/banks.");
