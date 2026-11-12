#!/usr/bin/env node
"use strict";
require("./thpt-g11-historical-source-replay.cjs")();
// RELEASE ChVII immutable source/receipt and original public formative/assessment checks.
// Structural safety QA does NOT itself confer historical Academic/PED or physical Safari PASS.
const assert=require("node:assert/strict"),fs=require("node:fs"),crypto=require("node:crypto"),vm=require("node:vm");
const rd=p=>fs.readFileSync(p,"utf8");
const blob=b=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\0"),b])).digest("hex");
const SRC="afc8ec039213b87b4930f2d34d48c28d1fc6277f",REV="25e7be8637cdd9cfe021fbc70537e44bbdec04e2";
const sourcePath="prototypes/thpt/content-drafts/G11_CHVII_B22_B27_PUBLIC_CANONICAL_R01_SOURCE_LOCK.md",reviewPath="prototypes/thpt/review-packets/G11_CHVII_B22_B27_V2_COMPOSITE_HISTORIC_REVIEW_AND_OWNER_S1_RECEIPT_20261102.md";
assert.equal(blob(fs.readFileSync(sourcePath)),SRC,"Original R01 author source Git blob");
assert.equal(blob(fs.readFileSync(reviewPath)),REV,"Independent historical reviewer+S1 composite receipt Git blob");
const source=rd(sourcePath),d3=source.slice(source.indexOf("## D3 —"),source.indexOf("## D4 —"));
const h=[...d3.matchAll(/^#### (THPT-G11-CHVII-(?:B2[2-7]|CHVII)-[CP]\d{2}) \| skill_id=`([^`]+)` \| placement=`(SGK_CORE|SGK_PRACTICE|SGK_APPLICATION)`$/gm)];
assert.equal(h.length,51,"Original 51 public source D3");
const field=(chunk,k)=>{const pre="**"+k+":** ";const ln=chunk.split("\n").find(l=>l.startsWith(pre));assert(ln,"Original field "+k);return ln.slice(pre.length).trim();};
const original=h.map((m,i)=>{const body=d3.slice(m.index+m[0].length,h[i+1]?.index??d3.length);
 const lesson=m[1].match(/-B(2[2-7])-/)?.[1]??"27",role=m[3]==="SGK_CORE"?"CORE":m[3]==="SGK_APPLICATION"?"APPLICATION":"PRACTICE";
 return{item_id:m[1],lesson,grade:"11",role,skill:m[2],stem:field(body,"Đề"),
  hint:"Xem lại điều kiện và ví dụ của Bài "+lesson+" rồi tự giải trước khi mở lời giải.",
  solution:"Đáp án: "+field(body,"Đáp án sau Submit luyện tập")+"\nLời giải: "+field(body,"Lời giải và vì sao"),
  difficulty:role==="CORE"?"CORE_APPLY":role==="APPLICATION"?"APPLICATION":"PRACTICE_APPLY",exposure:"FORMATIVE_ONLY"};});
const window={};vm.runInNewContext(rd("docs/assets/javascripts/thpt-g11-chvii-b22-b27-source-locked-formative-r01.js"),{window});
const bank=window.THPT_G11_CHVII_REVIEWED_FORMATIVE;
assert(bank?.validate().valid,"Reviewed 51 canonical public bank");
assert.equal(JSON.stringify(bank.records),JSON.stringify(original),"Exact 51 source canonical ID/skill/role/stem/answer/solution parity");
assert.equal(new Set(bank.records.map(q=>q.item_id)).size,51,"No duplicated source item");
assert.equal(bank.records.filter(x=>x.role==="CORE").length,33);
assert.equal(bank.records.filter(x=>x.role==="PRACTICE").length,18);
const base=rd("docs/thpt-preview/sgk/lop-11/chuong-vii/luyen-tap.md");
const d1=source.slice(source.indexOf("## D1–D2 · Bài 22"),source.indexOf("## Mạch tư duy xuyên"));
const d4=source.slice(source.indexOf("## D4 —"),source.indexOf("## D5 —"));
const writtenHeaders=[...d4.matchAll(/^### (THPT-G11-CHVII-B2[2-7]-W\d{2}(?:-ANCHOR)?) \| skill_id=/gm)];
assert.equal(writtenHeaders.length,12,"12 original Written/Anchor IDs");
const written=rd("docs/thpt-preview/thu-vien/tu-luan-g11-chuong-vii.md");
for(const id of writtenHeaders.map(x=>x[1]))
 assert.equal(written.split('data-thpt-written-canonical="'+id+'"').length-1,1,"Exactly one Written card "+id);
assert.equal((written.match(/<summary>Em đã làm\? Mở lời giải và rubric \/4<\/summary>/g)||[]).length,12,"12 opt-in /4 rubrics");
const help=source.slice(source.indexOf("## D6 —"),source.indexOf("## Bảng yêu cầu reviewer"));
const helps=[...help.matchAll(/^### (HELP-G11-CHVII-B(2[2-7])-\d{2}) \| skill_id=`([^`]+)` \| return_item=`(THPT-G11-CHVII-B2[2-7]-[CP]\d{2})`$/gm)];
assert.equal(helps.length,10,"10 original HELP");
let examples=0;
for(const [n,C,P,E,H] of [[22,4,3,4,2],[23,5,3,4,2],[24,5,3,4,2],[25,7,3,5,2],[26,6,3,5,1],[27,6,3,5,1]]){
 const page=rd("docs/thpt-preview/sgk/lop-11/chuong-vii/bai-"+n+".md");
 const a=d1.indexOf("## D1–D2 · Bài "+n+" —"),b=d1.indexOf("## D1–D2 · Bài "+(n+1)+" —",a+1);
 const sourceLesson=d1.slice(a,b>0?b:d1.length);
 const e=sourceLesson.split("\n").filter(l=>l.startsWith("#### EX-G11-CHVII-B"+n+"-"));
 assert.equal(e.length,E,"Exact D2 examples source B"+n);examples+=E;
 for(const line of e)assert(page.includes(line),"Original EX title B"+n);
 for(const line of sourceLesson.split("\n").filter(l=>l.startsWith("**Nhiệm vụ:**")||l.startsWith("**Lập luận để tự đối chiếu sau khi thử:**")))assert(page.includes(line),"Original D2 math reasoning B"+n);
 assert.equal(bank.forLesson(n,"core").length,C,"Correct original Core placement B"+n);
 assert.equal(bank.forLesson(n,"practice").length,P,"Original Practice B"+n);
 assert.equal((page.match(/data-thpt-help-id=/g)||[]).length,H,"Exact D6 count B"+n);
 assert(page.includes('data-ped-first-try="1"'),"Opt-in before Core B"+n);
 assert(page.includes("Hướng dẫn đọc hình"),"Original SVG interpretation B"+n);
 for(const x of helps.filter(x=>Number(x[2])===n)){assert(page.includes('data-thpt-help-id="'+x[1]+'"'),"Original HELP "+x[1]);assert(page.includes("?item="+x[4]),"Original D6 return canonical ID "+x[4]);}
 const filename="FIG-G11-CHVII-B"+n+"-01_R00.svg",svg="docs/assets/images/thpt/"+filename,orig="prototypes/thpt/review-packets/"+filename;
 assert.equal(blob(fs.readFileSync(svg)),blob(fs.readFileSync(orig)),"Exact original SVG Git blob "+filename);
 assert(!/<script/i.test(rd(svg)),"No SVG active scripts "+filename);
 assert(page.includes(filename)&&page.includes("Hướng dẫn đọc hình"),"SVG rendered with reading guide B"+n);
 for(const role of ["core","practice"])assert(base.includes('data-thpt-open-quiz="g11-b'+n+"-"+role+'"'),"Golden R4 learner modal entry "+n+" "+role);
}
assert.equal(examples,27,"Source 27 reasoned D2 examples");
assert(bank.records.some(x=>x.item_id==="THPT-G11-CHVII-CHVII-C01"&&x.skill==="G11-CHVII-INTEGRATED"),"One original chapter-integrated canonical Core ID");
const cfg=JSON.parse(rd("docs/assets/data/thpt-g11-selfcheck/CHVII.json"));
assert.equal(cfg.original_public_source_blob,SRC);assert.equal(cfg.original_public_bank_version,bank.contentVersion);
assert.equal(cfg.mode,"PUBLIC_CANONICAL_REFERENCE_ONLY");assert.equal(cfg.item_refs.length,18);
const ids=new Set(cfg.item_refs),byId=new Map(bank.records.map(q=>[q.item_id,q]));
assert.equal(ids.size,18,"No copied/duplicated public placement ID");
const selected=cfg.item_refs.map(id=>byId.get(id));
assert(selected.every(x=>x&&x.role==="PRACTICE"&&x.exposure==="FORMATIVE_ONLY"),"No private RD1/new questions in client selfcheck");
assert.equal(new Set(selected.map(q=>q.skill)).size,18,"18 original Practice skill outcomes");
assert(!/"stem"|"answer"|"solution"/.test(JSON.stringify(cfg)),"JSON carries ID references only");
assert(cfg.mastery_credit===false&&cfg.independent_readiness_credit===false&&cfg.persist_results===false);
assert(rd("docs/thpt-preview/sgk/lop-11/chuong-vii/tu-kiem-tra-chuong.md").includes('data-g11-chapter-selfcheck="CHVII"'));
const engine=rd("docs/assets/javascripts/thpt-g11-reviewed-selfcheck-v1.js");
assert(engine.includes('chapter==="CHVII"')&&engine.includes("THPT_G11_CHVII_REVIEWED_FORMATIVE"));
const router=rd("docs/assets/javascripts/thpt-r4-preview.js");
assert(router.includes("THPT_G11_CHVII_REVIEWED_FORMATIVE")&&router.includes("CHVII-B(22|23|24|25|26|27)")&&router.includes('integratedG11=requestedItem==="THPT-G11-CHVII-CHVII-C01"'));
for(const config of ["mkdocs.yml","mkdocs.thpt-preview.yml"]){const str=rd(config);assert(str.indexOf("thpt-g11-chvii-b22-b27-source-locked-formative-r01.js")<str.indexOf("thpt-r4-preview.js"),"Bank script precedes router in "+config);}
const idx=rd("docs/thpt-preview/sgk/index.md");
assert(idx.includes('href="lop-11/chuong-vii/"'));
for(const n of [22,23,24,25,26,27])assert(idx.includes('href="lop-11/chuong-vii/bai-'+n+'/"'),"Search class11 B"+n);
console.log("PASS G11 ChVII original 51 D3, 12 Written, 27 D2, 6 immutable SVG, 10 D6, 18 Q16 PUBLIC refs, no private RD1/Mastery");
