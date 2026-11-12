#!/usr/bin/env node
"use strict";
require("./thpt-g11-historical-source-replay.cjs")();
// Source-locked G11 ChVIII RELEASE integrity guard (no independent readiness or Mastery).
const assert=require("node:assert/strict"),fs=require("node:fs"),crypto=require("node:crypto"),vm=require("node:vm");
const rd=p=>fs.readFileSync(p,"utf8");
const blob=b=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\0"),b])).digest("hex");
const SRC="fde4f8be91b5884b4559fef59fde46cf826c2bc9",REV="d7477d24e8513e8e2e60a1f583d4b52e6c29bfc9";
const sourcePath="prototypes/thpt/content-drafts/G11_CHVIII_B28_B30_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md";
const reviewPath="prototypes/thpt/review-packets/G11_CHVIII_B28_B30_V2_COMPOSITE_HISTORIC_REVIEW_AND_OWNER_S1_RECEIPT_20261102.md";
assert.equal(blob(fs.readFileSync(sourcePath)),SRC,"Original locked author source Git blob");
assert.equal(blob(fs.readFileSync(reviewPath)),REV,"Original historical reviewer+owner S1 receipt blob");
const s=rd(sourcePath),d3=s.slice(s.indexOf("## D3 —"),s.indexOf("## D4 —"));
const headings=[...d3.matchAll(/^#### (THPT-G11-CHVIII-(?:B(?:28|29|30)|CHVIII)-[CP]\d{2}) · skill_id=(.+?) · placement=(.+)$/gm)];
assert.equal(headings.length,39,"Original 39 public canonical D3 records");
const field=(part,key)=>{const prefix="**"+key+":** ";const line=part.split("\n").find(l=>l.startsWith(prefix));assert(line,"Missing original field "+key);return line.slice(prefix.length).trim();};
const original=headings.map((h,i)=>{
 const part=d3.slice(h.index+h[0].length,headings[i+1]?.index??d3.length);
 const role=h[3].includes("SGK_CORE")?"CORE":h[3].includes("SGK_APPLICATION")?"APPLICATION":"PRACTICE";
 const lesson=h[1].match(/-B(28|29|30)-/)?.[1]??"30";
 const skill=h[2].replace(/[^A-Za-z0-9_-]/g,"");
 return {item_id:h[1],lesson,grade:"11",role,skill,stem:field(part,"Đề"),
  hint:"Xem lại khái niệm, điều kiện và ví dụ giải của Bài "+lesson+" trước khi tự thử.",
  solution:"Đáp án: "+field(part,"Đáp án (sau Submit formative)")+"\nLời giải: "+field(part,"Lời giải và vì sao"),
  difficulty:role==="CORE"?"CORE_APPLY":role==="APPLICATION"?"APPLICATION":"PRACTICE_APPLY",exposure:"FORMATIVE_ONLY"};
});
const window={};
vm.runInNewContext(rd("docs/assets/javascripts/thpt-g11-chviii-b28-b30-source-locked-formative-r00.js"),{window});
const bank=window.THPT_G11_CHVIII_REVIEWED_FORMATIVE;
assert(bank?.validate().valid,"One source-locked 39-item public bank");
assert.equal(JSON.stringify(bank.records),JSON.stringify(original),"Source-equivalent 39 item IDs/skills/stems/solutions");
assert.equal(new Set(bank.records.map(x=>x.item_id)).size,39,"No cloned canonical ID");
assert.equal(bank.records.filter(x=>x.role==="CORE").length,19);
assert.equal(bank.records.filter(x=>x.role==="PRACTICE").length,20);
const d1=s.slice(s.indexOf("## D1 —"),s.indexOf("## D2 —"));
const d2=s.slice(s.indexOf("## D2 —"),s.indexOf("## D3 —"));
const d4=s.slice(s.indexOf("## D4 —"),s.indexOf("## D5 —"));
const d6=s.slice(s.indexOf("## D6 —"),s.indexOf("## Kiểm toán"));
const writtenHeads=[...d4.matchAll(/^### (THPT-G11-CHVIII-(?:B(?:28|29|30)|CHVIII)-W\d{2}(?:-ANCHOR)?) · skill_id=/gm)];
assert.equal(writtenHeads.length,8,"Original 8 Written/Anchor canonical IDs");
const written=rd("docs/thpt-preview/thu-vien/tu-luan-g11-chuong-viii.md");
for(const h of writtenHeads)assert.equal(written.split('data-thpt-written-canonical="'+h[1]+'"').length-1,1,"Single canonical Written "+h[1]);
assert.equal((written.match(/<summary>Em đã làm\? Mở lời giải và rubric \/4<\/summary>/g)||[]).length,8,"Eight original /4 rubrics hidden until self-review");
const helps=[...d6.matchAll(/^### (HELP-G11-CHVIII-B(28|29|30)-\d{2}) · skill_id=(.+?) · return_item=(.+)$/gm)];
assert.equal(helps.length,8,"8 original D6 helpers");
const hub=rd("docs/thpt-preview/sgk/lop-11/chuong-viii/luyen-tap.md");
let totalD2=0;
for(const [n,core,practice,examples,help] of [[28,7,6,5,3],[29,6,6,5,2],[30,6,8,6,3]]){
 const page=rd("docs/thpt-preview/sgk/lop-11/chuong-viii/bai-"+n+".md");
 const next="## Bài "+(n+1)+" —",start=d1.indexOf("## Bài "+n+" —"),end=d1.indexOf(next,start+1);
 const lesson=d1.slice(start,end>0?end:d1.length);
 const exp=d2.split("\n").filter(l=>l.startsWith("#### EX-G11-CHVIII-B"+n+"-"));
 totalD2+=exp.length;assert.equal(exp.length,examples,"Original worked example count B"+n);
 for(const line of exp)assert(page.includes(line),"Original worked example kept B"+n);
 assert.equal(bank.forLesson(n,"core").length,core);
 assert.equal(bank.forLesson(n,"practice").length,practice);
 assert.equal((page.match(/data-thpt-help-id=/g)||[]).length,help,"Original D6 B"+n);
 assert.equal((page.match(/data-ped-first-try="1"/g)||[]).length,1,"Self-try solution opt-in B"+n);
 assert(page.includes("## 1. Kiến thức SGK")&&page.includes("## 2. Ví dụ có suy luận"),"Learner idea hierarchy B"+n);
 for(const m of helps.filter(h=>Number(h[2])===n)){
  const returned=m[4].replace(/[^A-Za-z0-9_-]/g,"");
  assert(page.includes('data-thpt-help-id="'+m[1]+'"')&&page.includes("?item="+returned),"D6 returns to original canonical "+m[1]);
 }
 const originalSvg="prototypes/thpt/review-packets/Temp_FIG-G11-CHVIII-B"+n+"-01_R00.svg";
 const siteSvg="docs/assets/images/thpt/FIG-G11-CHVIII-B"+n+"-01_R00.svg";
 assert.equal(blob(fs.readFileSync(siteSvg)),blob(fs.readFileSync(originalSvg)),"Exact original SVG B"+n);
 assert(!/<script/i.test(rd(siteSvg)),"SVG no active scripts B"+n);
 assert(page.includes("FIG-G11-CHVIII-B"+n+"-01_R00.svg"),"Source educational SVG rendered B"+n);
 for(const role of ["core","practice"])assert(hub.includes('data-thpt-open-quiz="g11-b'+n+"-"+role+'"'),"Golden R4 launch B"+n+" "+role);
}
assert.equal(totalD2,16,"16 original reasoned D2 examples");
assert(bank.records.some(x=>x.item_id==="THPT-G11-CHVIII-CHVIII-P01"&&x.skill==="G11-CHVIII-INTEGRATED"),"Integrated original canonical P01 preserved");
const cfg=JSON.parse(rd("docs/assets/data/thpt-g11-selfcheck/CHVIII.json"));
assert.equal(cfg.original_public_source_blob,SRC);
assert.equal(cfg.original_public_bank_version,bank.contentVersion);
assert.equal(cfg.mode,"PUBLIC_CANONICAL_REFERENCE_ONLY");
assert.equal(cfg.item_refs.length,20,"20 original PUBLIC Practice items");
assert.equal(new Set(cfg.item_refs).size,20,"No duplicate assessment placement IDs");
const byId=new Map(bank.records.map(x=>[x.item_id,x]));
const selected=cfg.item_refs.map(id=>byId.get(id));
assert(selected.every(q=>q&&q.role==="PRACTICE"&&q.exposure==="FORMATIVE_ONLY"),"No protected/new RD1 in selfcheck");
assert.equal(new Set(selected.map(q=>q.skill)).size,19,"Source actual 19 distinct Practice outcomes");
assert(!/"stem"|"answer"|"solution"/.test(JSON.stringify(cfg)),"Q16 config canonical ID references only");
assert(cfg.mastery_credit===false&&cfg.independent_readiness_credit===false&&cfg.persist_results===false);
assert(rd("docs/thpt-preview/sgk/lop-11/chuong-viii/tu-kiem-tra-chuong.md").includes('data-g11-chapter-selfcheck="CHVIII"'));
const engine=rd("docs/assets/javascripts/thpt-g11-reviewed-selfcheck-v1.js");
assert(engine.includes('chapter==="CHVIII"')&&engine.includes("THPT_G11_CHVIII_REVIEWED_FORMATIVE"),"Final Submit uses one original public bank");
const router=rd("docs/assets/javascripts/thpt-r4-preview.js");
assert(router.includes("THPT_G11_CHVIII_REVIEWED_FORMATIVE")&&router.includes("CHVIII-B(28|29|30)"),"Golden R4 original B28-30 routes");
for(const config of ["mkdocs.yml","mkdocs.thpt-preview.yml"]){
 const text=rd(config);
 assert(text.indexOf("thpt-g11-chviii-b28-b30-source-locked-formative-r00.js")<text.indexOf("thpt-r4-preview.js"),"Original public bank loaded before router in "+config);
}
const idx=rd("docs/thpt-preview/sgk/index.md");
for(const n of [28,29,30])assert(idx.includes('href="lop-11/chuong-viii/bai-'+n+'/"'),"SGK B"+n+" search");
console.log("PASS G11 ChVIII original 39 D3, 8 Written, 16 D2, 3 SVG, 8 D6, 20 Q16 PUBLIC refs/19 skills, no private RD1/Mastery");
