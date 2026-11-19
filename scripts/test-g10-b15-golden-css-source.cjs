#!/usr/bin/env node
"use strict";
/* Immutable Golden CSS chain: owner-P2 B01–B14 ancestor + B15 only appendix.
 * Existing B01–B14 regression assertions must compare the published ancestor,
 * not falsely require the full live stylesheet to end at B14 forever.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto");
const root=path.resolve(__dirname,"..");
const mark="/* G10 ChVI B15 · exact TRY01 canonical only";
const blob=b=>{const v=Buffer.isBuffer(b)?b:Buffer.from(b);return crypto.createHash("sha1").update(Buffer.from("blob "+v.length+"\0")).update(v).digest("hex");};
const file=path.join(root,"prototypes/thpt/ux795/G10_CHVI_B15_OWNER_Q18_KNOWLEDGE_ENRICHMENT_20261119.md");
const receipt=fs.readFileSync(file,"utf8");
const field=k=>{
 const v=receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
 assert(/^[a-f0-9]{40}$/.test(v||""),"B15 signed Q18 CSS field missing "+k);
 return v;
};
function publishedB14Ancestor(actual){
 const full=Buffer.isBuffer(actual)?actual.toString("utf8"):actual;
 const at=full.indexOf(mark);
 assert(at>0&&full.indexOf(mark,at+1)<0,"B15 exact owner scope only once, after existing approved Golden CSS");
 const prior=Buffer.from(full.slice(0,at-1));
 assert.equal(blob(prior),field("ORIGINAL_ACCEPTED_GOLDEN_CSS_BLOB"),
  "B01–B14 P2 accepted CSS bytes cannot change");
 assert.equal(blob(full),field("CANDIDATE_SCOPED_GOLDEN_CSS_BLOB"),
  "B15 sole scoped appendix final CSS SHA must match signed current Q18");
 assert(full.slice(at).includes('data-thpt-first-try-id="THPT-G10-CHVI-TRY01"'),
  "B15 CSS must not accidentally recolor previous owner-P2 lessons");
 return prior;
}
if(require.main===module){
 const current=fs.readFileSync(path.join(root,"docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css"));
 publishedB14Ancestor(current);
 console.log("PASS immutable B01–B14 Golden CSS ancestor, single B15 scope and signed final SHA");
}
module.exports={publishedB14Ancestor};
