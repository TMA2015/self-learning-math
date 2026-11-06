"use strict";
/* RELEASE-only G12 Year End R00 Q01/Q15/Q16/Q18 exact source custody and UI boundary. */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto");
const root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p)),txt=p=>read(p).toString("utf8");
const gitblob=b=>crypto.createHash("sha1").update(Buffer.from("blob "+b.length+"\0")).update(b).digest("hex");
const source="prototypes/thpt/content-drafts/G12_SGK_YEAREND_R00_SOURCE/Temp_G12_SGK_YEAREND_R00_LEARNING_20261104.md";
const receipt="prototypes/thpt/review-packets/G12_YE_R00_NOTEBOOKLM_Q18_CORRECTED_OWNER_REPORT_20261104.md";
const sourceSha="7274cb3a6c35627f0e23574709cf5cdc355ab46a",receiptSha="3b5b7f70e3b68895fd976a265ae6f454f774e1cc";
assert.equal(gitblob(read(source)),sourceSha);assert.equal(gitblob(read(receipt)),receiptSha);
const src=txt(source),data=JSON.parse(txt("docs/assets/data/thpt-g12-yearend-public-r00.json"));
const manifest=txt("prototypes/thpt/release-queue/ready/G12-SGK-YEAREND-REVIEW-R00.md");
const handoff=txt("prototypes/thpt/release-handoffs/G12-SGK-YEAREND-REVIEW-R00_HANDOFF_V2_20261104.md");
for(const text of [manifest,handoff]){assert(text.includes(sourceSha));assert(text.includes(receiptSha));assert(text.includes("SGK_YEAR_END_REVIEW_SUPPLEMENT"));assert(text.includes("CLIENT_SELF_CHECK_NO_MASTERY"))}
assert(manifest.includes("STATE: CONTENT_READY"));assert(handoff.includes("CONTENT_READY: YES"));
assert.equal(data.packet_id,"G12-SGK-YEAREND-REVIEW-R00");
assert.equal(data.source_git_blob,sourceSha);assert.equal(data.review_receipt_blob,receiptSha);
assert.equal(data.learning_path,"SGK_YEAR_END_REVIEW_SUPPLEMENT");
assert.equal(data.mode,"CLIENT_SELF_CHECK_NO_MASTERY");
assert.equal(data.private_rd1_count,0);assert.equal(data.official_readiness,false);assert.equal(data.mastery_activation,false);
assert.equal(data.stations.length,6);assert.equal(data.help.length,6);assert.equal(data.items.length,31);
const stems=new Map();
const blocks=[...src.matchAll(/^### (THPT-G12-YE-([MW])(\d\d)) — ([^\n]+)\n([\s\S]*?)(?=^### THPT-G12-YE-[MW]\d\d|^## D6)/gm)];
assert.equal(blocks.length,31);
for(const [,id,code,number,title,body]of blocks){
 const outcome_id=body.match(/^OUTCOME_ID:\s*(G12-SGK-YE-O\d\d)$/m)?.[1];
 const stem=body.match(/^\*\*Đề:\*\*\s*([\s\S]*?)(?=\n\n(?:- \*\*A\.\*\*|\*\*WORKED_SOLUTION))/m)?.[1]?.trim();
 assert(outcome_id&&stem,id+" source outcome/stem");
 if(code==="M"){
  const options=[...body.matchAll(/^- \*\*([ABCD])\.\*\* ([^\n]+)$/gm)].map(x=>({letter:x[1],text:x[2]}));
  const answer=body.match(/^\*\*ANSWER_KEY \(POST_SUBMIT_ONLY\): ([A-D]\.)\*\*$/m)?.[1];
  const solution=body.match(/^\*\*WORKED_SOLUTION \(POST_SUBMIT_ONLY\):\*\*\s*([^\n]+)$/m)?.[1];
  const trap=body.match(/^\*\*D6 ERROR_TRAP:\*\*\s*([^\n]+)$/m)?.[1];
  assert.equal(options.length,4,id);assert(answer&&solution&&trap,id);
  stems.set(id,{outcome_id,stem,role:/CORE/.test(title)?"MCQ_CORE":/APPLICATION/.test(title)?"MCQ_APPLICATION":"MCQ_PRACTICE",options,answer,solution,trap});
 }else{
  const solution=body.match(/^\*\*WORKED_SOLUTION \(SELF_REVEAL_AFTER_ATTEMPT\):\*\*\s*\n\n([\s\S]*?)(?=^\*\*RUBRIC \/5)/m)?.[1]?.trim();
  const rubric=body.match(/^\*\*RUBRIC \/5 \(SELF_REVEAL_ONLY\):\*\*\s*\n\n([\s\S]*)/m)?.[1]?.trim();
  assert(solution&&rubric&&rubric.match(/^- \*\*1 điểm:/gm)?.length===5,id+" five-point rubric");
  stems.set(id,{outcome_id,stem,role:"WRITTEN",solution,rubric});
 }
}
assert.equal(new Set(data.items.map(x=>x.item_id)).size,31);
for(const q of data.items){const o=stems.get(q.item_id);assert(o,q.item_id+" original");
for(const key of ["outcome_id","stem","role","solution","rubric","answer","trap"])assert.equal(q[key],o[key],"Source mismatch "+q.item_id+" "+key);
if(o.options)assert.deepEqual(q.options,o.options,"Original options "+q.item_id)}
assert.equal(data.items.filter(q=>q.item_id.startsWith("THPT-G12-YE-M")).length,15);
assert.equal(data.items.filter(q=>q.role==="WRITTEN").length,16);
const stationMatches=[...src.matchAll(/^## TRẠM O(\d\d) — ([^\n]+)/gm)];
assert.equal(stationMatches.length,6);
for(const m of stationMatches){const entry=data.stations.find(x=>x.outcome_id==="G12-SGK-YE-O"+m[1]);assert(entry&&entry.title===m[2])}
const hs=[...src.matchAll(/^### \x60(HELP-G12-SGK-YE-O\d\d)\x60\n([\s\S]*?)(?=^### \x60HELP-|^## Q15)/gm)];
assert.equal(hs.length,6);
for(const m of hs){const h=data.help.find(x=>x.help_id===m[1]);assert(h&&h.text===m[2].trim())}
const images={
 "Temp_FIG_G12_YE_R00_FUNCTION_VARIATION_20261104.png":"69bc84632431f463f0d8f7359f469d93f135ac0e",
 "Temp_FIG_G12_YE_R00_SIGNED_AREA_20261104.png":"231ba9045048d03d3439fdc5e2fec706342da1a2",
 "Temp_FIG_G12_YE_R00_OXYZ_TETRA_20261104.png":"208c6703f827951a0663ad360442324c328b874c",
 "Temp_FIG_G12_YE_R00_GROUPED_DATA_20261104.png":"21c5d193a9399ac0b8c1f328790da7bf91e0d6cf"};
for(const [name,sha]of Object.entries(images)){
 assert.equal(gitblob(read("prototypes/thpt/content-drafts/G12_SGK_YEAREND_R00_SOURCE/"+name)),sha,"Original PNG");
 assert.equal(gitblob(read("docs/assets/images/thpt/"+name)),sha,"Published byte-exact PNG");
}
const overview=txt("docs/thpt-preview/sgk/lop-12/on-tap-cuoi-nam/index.md"),
  lesson=txt("docs/thpt-preview/sgk/lop-12/on-tap-cuoi-nam/tram-on-tap.md"),
  end=txt("docs/thpt-preview/sgk/lop-12/on-tap-cuoi-nam/tu-kiem-tra.md"),
  runtime=txt("docs/assets/javascripts/thpt-g12-yearend-r00.js");
assert(overview.includes("31")&&overview.includes("Sáu trạm"));assert(lesson.match(/g12-ye-original-figure/g)?.length===4);
assert(lesson.match(/g12-xp-first-try/g)?.length===6);
for(const name of Object.keys(images))assert(lesson.includes(name),"Figure absent "+name);
assert(end.includes("data-g12-ye-selfcheck")&&end.includes("Final Submit")&&!end.includes("ANSWER_KEY"));
assert(runtime.includes("data-g12-ye-selfcheck")&&runtime.includes("Final Submit"));
assert(!/\blocalStorage\b|\bsessionStorage\b|\bFirebase\b|\bsetDoc\b|\bsetItem\b|\bfetch\([^)]*\bPOST\b/.test(runtime),"No progress or backend writes");
assert(!runtime.includes("innerHTML"),"No unsafe question HTML injection");
for(const cfg of ["mkdocs.yml","mkdocs.thpt-preview.yml"]){
 const c=txt(cfg);assert(c.includes("thpt-g12-yearend-r00.js")&&c.includes("thpt-g12-yearend-r00.css"));
 assert(c.includes("thpt-preview/sgk/lop-12/on-tap-cuoi-nam/tram-on-tap.md"));
 assert(c.includes("thpt-preview/sgk/lop-12/on-tap-cuoi-nam/tu-kiem-tra.md"));
}
assert(txt("prototypes/thpt/release-queue/REGISTER.md").includes("G12-SGK-YEAREND-REVIEW-R00"));
console.log("PASS G12 year-end R00 source lock: 31 verbatim canonical, 15 MCQ+16 Written /5, 6 outcomes/D6, 4 original PNG and protected Final Submit public-only");
