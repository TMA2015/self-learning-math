"use strict";
/* G12 SGK experience release provenance, Q15 canonical parity and Q16 boundary. */
const fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p)),txt=p=>read(p).toString("utf8");
const blob=b=>crypto.createHash("sha1").update(Buffer.from("blob "+b.length+"\0")).update(b).digest("hex");
const srcPath="prototypes/thpt/content-drafts/G12_SGK_XP_TWO_EXPERIENCES_R01_CANONICAL_20261103.md";
const receipt="prototypes/thpt/review-packets/G12_XP_R01_Q18_OWNER_PASTED_REVIEW_RECEIPT_20261103.md";
assert.equal(blob(read(srcPath)),"8a34d1cf4009b9b6511a34c08c5d8e31525a6a46");
assert.equal(blob(read(receipt)),"b765e732fa8049482936dbededfafd7b9eb99341");
const src=txt(srcPath),data=JSON.parse(txt("docs/assets/data/thpt-g12-exp01-exp02-public-r01.json"));
assert.equal(data.packet_id,"G12-SGK-EXP01-EXP02-R01");
assert.equal(data.source_git_blob,"8a34d1cf4009b9b6511a34c08c5d8e31525a6a46");
assert.equal(data.review_receipt_blob,"b765e732fa8049482936dbededfafd7b9eb99341");
assert.equal(data.mode,"CLIENT_SELF_CHECK_NO_MASTERY");assert.equal(data.private_rd1_count,0);
assert.equal(data.items.length,40);assert.equal(new Set(data.items.map(x=>x.item_id)).size,40);
assert.equal(data.outcomes.length,10);assert.equal(data.help.length,10);assert.equal(data.end_references.length,10);
for(const role of ["CORE","SGK_PRACTICE","SGK_APPLICATION","SGK_WRITTEN"])assert.equal(data.items.filter(x=>x.role===role).length,10);
const blocks=[...src.matchAll(/^### (G12-SGK-EXP(01|02)-O(\d\d)) — ([^\n]+)\n([\s\S]*?)(?=^### G12-SGK-EXP|^## Kết thúc trải nghiệm)/gm)];
assert.equal(blocks.length,10);
const originals=new Map();
for(const [,oid,exp,no,title,body]of blocks){
 const parts=[...body.matchAll(/^\*\*(?:Bài tập Core[^\n]*?|Practice|Application|Written) \x60(THPT-G12-EXP(01|02)-([CPAW])(\d\d))\x60\*\* — (.+)$/gm)];
 assert.equal(parts.length,4,"Canonical item count "+oid);
 for(let i=0;i<parts.length;i++){
  const m=parts[i],section=body.slice(m.index+m[0].length,parts[i+1]?.index??body.length);
  assert.equal(m[2],exp);assert.equal(m[4],no);
  const result=m[3]==="W"?section.match(/^\*Lời giải chuẩn tự đối chiếu:\*\s*(.+)$/m):section.match(/^\*Đáp án tự mở:\*\s*(.+)$/m);
  assert(result,"Missing original answer "+m[1]);
  const rubric=m[3]==="W"?section.match(/^\*\*Rubric \/5:\*\*\s*(.+)$/m)?.[1]:undefined;
  if(m[3]==="W")assert(rubric,"Missing original Written rubric "+m[1]);
  originals.set(m[1],{stem:m[5],answer:result[1],rubric,outcome_id:oid});
 }
 const help=body.match(/^\*\*D6 HELP \x60(HELP-G12-EXP\d\d-O\d\d)\x60[^\n]*?\*\* (.+)$/m);
 assert(help,"D6 original "+oid);
 const steps=help[2].split(/(?=\(\d\)\s)/).map(x=>x.trim()).filter(x=>/^\(\d\)/.test(x));
 const actual=data.help.find(x=>x.outcome_id===oid);
 assert(actual&&actual.help_id===help[1]);assert.deepEqual(actual.steps,steps);
 const outcome=data.outcomes.find(x=>x.outcome_id===oid);
 assert(outcome&&outcome.title===title&&outcome.knowledge===body.slice(0,parts[0].index).trim(),"Original outcome knowledge "+oid);
}
for(const q of data.items){
 const o=originals.get(q.item_id);assert(o,"ID not in source "+q.item_id);
 assert.equal(q.stem,o.stem);assert.equal(q.answer,o.answer);assert.equal(q.outcome_id,o.outcome_id);
 if(q.role==="SGK_WRITTEN")assert.equal(q.rubric,o.rubric);
}
assert.equal(originals.size,40);assert.equal(new Set(data.end_references.map(x=>x.item_id)).size,10);
for(const ref of data.end_references){const q=data.items.find(x=>x.item_id===ref.item_id);assert(q&&q.role==="SGK_APPLICATION"&&q.outcome_id===ref.outcome_id)}
const images={
"Temp_FIG_G12_XP01_CAS_VERIFICATION_R00.png":"86f9de9efef8a665cf7d48a0cd385a366b13b78f",
"Temp_FIG_G12_XP01_TRAPEZOID_R00.png":"87e4fe917db6a7771b4df5e6c13102a2916c2a2e",
"Temp_FIG_G12_XP01_ERROR_BOUND_R00.png":"221bba350156cc48b818cce91d969f01a6171e02",
"Temp_FIG_G12_XP02_PROJECTION_R00.png":"0e2b45a11ab247b46064406404b8a9f7fa95e930",
"Temp_FIG_G12_XP02_MOBIUS_R00.png":"ed786d710ed0d3105c431f850c2bfed8b1f95b2a"};
for(const [name,sha]of Object.entries(images)){
 assert.equal(blob(read("prototypes/thpt/content-drafts/G12_SGK_XP_R00_ORIGINAL_SOURCE/"+name)),sha);
 assert.equal(blob(read("docs/assets/images/thpt/"+name)),sha);
}
for(const n of [1,2]){
 const page=txt("docs/thpt-preview/sgk/lop-12/bo-sung/trai-nghiem-"+n+".md");
 assert.equal((page.match(/<figure class="thpt-r4-plot g12-xp-original-figure">/g)||[]).length,n===1?3:2);
 assert.equal((page.match(/<details class="thpt-r4-try-reveal g12-xp-first-try">/g)||[]).length,2);
 for(const o of data.outcomes.filter(x=>x.lesson_id==="EXP0"+n))assert(page.includes(o.knowledge),"Source pedagogy "+o.outcome_id);
}
const runtime=txt("docs/assets/javascripts/thpt-g12-exp01-exp02-r01.js");
assert(runtime.includes("thpt-r4-practice-dialog")&&runtime.includes("dataset.thptCanonicalItem"));
assert(runtime.includes("Final Submit")&&runtime.includes("submitted=true")&&runtime.includes("if(missing>=0)"));
assert(!/localStorage|sessionStorage|Firebase|setDoc|getFirestore/.test(runtime),"No learner data writes");
for(const p of ["mkdocs.yml","mkdocs.thpt-preview.yml"]){const s=txt(p);assert(s.includes("thpt-g12-exp01-exp02-r01.js")&&s.includes("thpt-g12-exp01-exp02-r01.css")&&s.includes("bo-sung/tu-kiem-tra-trai-nghiem.md"))}
const ready=txt("prototypes/thpt/release-queue/ready/G12-SGK-EXP01-EXP02-R01.md");
assert(ready.includes("STATE: CONTENT_READY")&&ready.includes("ACADEMIC_SOURCE_BLOB: 8a34d1cf"));
assert(txt("prototypes/thpt/release-queue/REGISTER.md").includes("[G12-SGK-EXP01-EXP02-R01](ready/"));
console.log("PASS G12 EXP source: 2 lessons, 10 outcomes, 40 exact items, 10 D6, 5 original PNG SHA, 4 first tries, 10 END ID reuses, no RD1/Mastery.");
