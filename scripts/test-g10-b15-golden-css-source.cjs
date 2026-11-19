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
 // New lessons append their own separately SHA-locked CSS, without mutating
 // any of the earlier owner-P2 approved Golden bytes.
 const b16mark="/* G10 ChVI B16 · scoped Golden only for canonical TRY06";
 const at16=full.indexOf(b16mark),hasB16=at16>at;
 const b15Full=hasB16?full.slice(0,at16-1):full;
 if(hasB16){
  assert(full.indexOf(b16mark,at16+1)<0,"B16 CSS must be a single append");
  const b16=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHVI_B16_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261119.md"),"utf8");
  const b16f=k=>b16.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(b16f("PREVIOUS_OWNER_P2_GOLDEN_CSS_BLOB"),
   field("CANDIDATE_SCOPED_GOLDEN_CSS_BLOB"),"B16 CSS must start at approved B15 prefix");
  assert.equal(blob(full),b16f("CANDIDATE_SCOPED_GOLDEN_CSS_BLOB"),
   "B16 candidate stylesheet must match signed Q18 receipt");
  assert(full.slice(at16).includes('data-thpt-first-try-id="THPT-G10-CHVI-TRY06"'),
   "B16 append must affect only canonical B16 learner");
 }
 const prior=Buffer.from(full.slice(0,at-1));
 assert.equal(blob(prior),field("ORIGINAL_ACCEPTED_GOLDEN_CSS_BLOB"),
  "B01–B14 P2 accepted CSS bytes cannot change");
 assert.equal(blob(b15Full),field("CANDIDATE_SCOPED_GOLDEN_CSS_BLOB"),
  "B15 Golden ancestor must match signed owner-accepted Q18 SHA");
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
