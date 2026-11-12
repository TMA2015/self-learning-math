#!/usr/bin/env node
"use strict";
require("./thpt-g11-historical-source-replay.cjs")();
// ChIV RELEASE-only exact-source/Q16 check. Not independent academic PASS.
const assert=require("node:assert/strict"),fs=require("node:fs"),crypto=require("node:crypto"),vm=require("node:vm");
const rd=p=>fs.readFileSync(p,"utf8");
const blob=b=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\0"),b])).digest("hex");
const sourcePath="prototypes/thpt/content-drafts/G11_CHIV_B10_B14_S1_PAGINATION_EQUIVALENT_R03_SOURCE_20261102.md",receiptPath="prototypes/thpt/review-packets/G11_CHIV_R03_COMBINED_R01_ACADEMIC_R02_PED_S1_SOURCE_RECEIPT_20261102.md";
const sourceSha="e945ccdd434689a5c6d8d7bfd44ba26d287a7b9b",receiptSha="b95425c53ab55dc4f3d0f05ecba6fd6e2f69bc52";
assert.equal(blob(fs.readFileSync(sourcePath)),sourceSha);
assert.equal(blob(fs.readFileSync(receiptPath)),receiptSha);
const src=rd(sourcePath);
const get=(s,a,b)=>{let i=s.indexOf(a),j=b?s.indexOf(b,i+a.length):s.length;assert(i>=0&&j>=i,"Missing "+a);return s.slice(i+a.length,j).trim()};
const field=(s,k)=>{const m=s.match(new RegExp("^\\*\\*"+k+":\\*\\* ([^\\n]+)$","m"));assert(m,"missing "+k);return m[1].trim()};
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const lite=s=>esc(s).replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\x60([^\x60]+)\x60/g,"<code>$1</code>");
const chapters=[...src.matchAll(/^## B(1[0-4])\. ([^\n]+)$/gm)];
const ped5=get(src,"## [R02-NEW] CHIV-PED5 — Vì sao chọn từng phương pháp trong 20 ví dụ R01","## [R02-NEW] CHIV-PED4");
const ped4=get(src,"## [R02-NEW] CHIV-PED4 — Thuyết minh hình D5 theo đúng bản R01","## R02 review boundary");
assert.equal(chapters.length,5);
const expected=[];
let countW=0,countHelp=0;
const library=rd("docs/thpt-preview/thu-vien/tu-luan-g11-chuong-iv.md");
const hub=rd("docs/thpt-preview/sgk/lop-11/chuong-iv/luyen-tap.md");
for(let i=0;i<chapters.length;i++){
 const n=Number(chapters[i][1]);
 const source=src.slice(chapters[i].index+chapters[i][0].length,chapters[i+1]?.index??src.indexOf("## Cross-chapter D6:",chapters[i].index));
 const why=get(source,"### [R02-NEW] B"+n+"-PED1-3 — Vấn đề và quá trình hình thành","### D1.");
 const d1=get(source,"### D1. Kiến thức tự học, giả thiết và điều kiện","### D2.");
 const d2=get(source,"### D2. Ví dụ giải thích bản chất","### [R02-NEW] B"+n+"-PED6");
 const d3=get(source,"### D3. SGK Core và Practice/Application — ứng viên canonical","### D4.");
 const d4=get(source,"### D4. Written/Anchor dùng chung — đáp án và rubric /4","### D5.");
 const d6=get(source,"### D6. Thẻ khắc phục lỗi — 5 bước",null);
 const lesson=rd("docs/thpt-preview/sgk/lop-11/chuong-iv/bai-"+n+".md");
 for(const section of [why,d1,d2])assert(lesson.includes(section),"Exact B"+n+" theory/WHY/examples");
 assert.equal((lesson.match(/data-ped-first-try="1"/g)||[]).length,1);
 assert.equal((lesson.match(/data-thpt-help-id=/g)||[]).length,2);
 assert(lesson.includes("FIG-G11-B"+n+"-01_R01.svg"));
 const methods=ped5.split("\n").filter(x=>x.startsWith("- \x60EX-G11-B"+n+"-"));
 assert.equal(methods.length,4);for(const method of methods)assert(lesson.includes(method),"PED5 B"+n);
 const fig=ped4.split("\n").find(l=>l.startsWith("- FIG-G11-B"+n+"-"));
 assert(fig&&lesson.includes(fig.replace(/^- FIG[^:]+:\s*/,"")),"PED4 B"+n);
 const heads=[...d3.matchAll(/^#### (THPT-G11-CHIV-B(1[0-4])-[CP]\d{2}) · (SGK_CORE|SGK_PRACTICE) · \x60skill_id=([^\x60]+)\x60$/gm)];
 assert.equal(heads.length,6);
 for(let j=0;j<heads.length;j++){
  const h=heads[j],q=d3.slice(h.index+h[0].length,heads[j+1]?.index??d3.length);
  expected.push({item_id:h[1],lesson:String(Number(h[2])),grade:"11",role:h[3]==="SGK_CORE"?"CORE":"PRACTICE",skill:h[4],stem:field(q,"Đề"),hint:"Đọc lại D1 và các điều kiện trong Bài "+Number(h[2])+" trước khi mở lời giải.",solution:"Đáp án: "+field(q,"Đáp án")+"\nLời giải: "+field(q,"Lời giải"),difficulty:h[3]==="SGK_CORE"?"CORE_APPLY":"PRACTICE_APPLY",exposure:"FORMATIVE_ONLY"});
 }
 const w=[...d4.matchAll(/^#### (THPT-G11-CHIV-B(1[0-4])-W\d{2}(?:-ANCHOR)?) · WRITTEN(?: \(ANCHOR TAG\))?$/gm)];
 assert.equal(w.length,2);countW+=w.length;
 for(let j=0;j<w.length;j++){
  const id=w[j][1],q=d4.slice(w[j].index+w[j][0].length,w[j+1]?.index??d4.length);
  assert.equal(library.split('data-thpt-written-canonical="'+id+'"').length-1,1,"Unique W "+id);
  assert(library.includes(lite(field(q,"Đề"))),"Written stem");
  assert(library.includes(lite(field(q,"Đáp án và lời giải"))),"Written original answer");
  for(const point of get(q,"**Rubric 4 điểm:**",null).split("\n").filter(x=>/^[1-4]\.\s/.test(x)))assert(library.includes(lite(point.replace(/^[1-4]\.\s/,""))),"Original rubric item "+id);
 }
 const hs=[...d6.matchAll(/^#### (HELP-G11-B(1[0-4])-\d{2}) · \x60([^\x60]+)\x60 · return \x60(THPT-G11-CHIV-B1[0-4]-[CP]\d{2})\x60$/gm)];
 assert.equal(hs.length,2);countHelp+=hs.length;
 for(const h of hs)assert(lesson.includes('data-thpt-help-id="'+h[1]+'"')&&lesson.includes("?item="+h[4]),"D6 target");
 const svg="FIG-G11-B"+n+"-01_R01.svg";
 assert.equal(blob(fs.readFileSync("docs/assets/images/thpt/"+svg)),blob(fs.readFileSync("prototypes/thpt/content-drafts/svg/"+svg)),"SVG original");
 assert(!/<script/i.test(rd("docs/assets/images/thpt/"+svg)),"SVG script injection");
 for(const role of ["core","practice"])assert(hub.includes('data-thpt-open-quiz="g11-b'+n+'-'+role+'"'),"Formative launch");
}
assert.equal(countW,10);assert.equal(countHelp,10);assert.equal(expected.length,30);
const win={};vm.runInNewContext(rd("docs/assets/javascripts/thpt-g11-chiv-b10-b14-source-locked-formative-r03.js"),{window:win});
const bank=win.THPT_G11_CHIV_REVIEWED_FORMATIVE;assert(bank?.validate().valid);
assert.equal(JSON.stringify(bank.records),JSON.stringify(expected),"Source 30/30 public stem/answer/solution/skill parity");
const cfg=JSON.parse(rd("docs/assets/data/thpt-g11-selfcheck/CHIV.json"));
assert.equal(cfg.original_public_source_blob,sourceSha);
assert.equal(cfg.original_public_bank_version,bank.contentVersion);
assert.equal(cfg.mode,"PUBLIC_CANONICAL_REFERENCE_ONLY");
assert.equal(cfg.item_refs.length,17);
const index=new Map(bank.records.map(x=>[x.item_id,x]));
const items=cfg.item_refs.map(id=>index.get(id));
assert(items.every(x=>x?.role==="PRACTICE"&&x.exposure==="FORMATIVE_ONLY"));
assert.equal(new Set(items.map(x=>x.skill)).size,17,"Unique Practice skill");
assert(!/"stem"|"answer"|"solution"/.test(JSON.stringify(cfg)),"No cloned item body");
assert(cfg.mastery_credit===false&&cfg.independent_readiness_credit===false&&cfg.persist_results===false);
const sc=rd("docs/thpt-preview/sgk/lop-11/chuong-iv/tu-kiem-tra-chuong.md");
assert(sc.includes('data-g11-chapter-selfcheck="CHIV"')&&!/data-thpt-readiness|data-mastery-credit/.test(sc));
const engine=rd("docs/assets/javascripts/thpt-g11-reviewed-selfcheck-v1.js"),router=rd("docs/assets/javascripts/thpt-r4-preview.js");
assert(engine.includes('chapter==="CHIV"')&&engine.includes("THPT_G11_CHIV_REVIEWED_FORMATIVE"));
assert(router.includes('Number(item.lesson)>=10?"iv"')&&router.includes("CHIV-B(10|11|12|13|14)")&&router.includes("parsedG11[2]"));
for(const path of ["mkdocs.yml","mkdocs.thpt-preview.yml"]){const c=rd(path);assert(c.indexOf("thpt-g11-chiv-b10-b14-source-locked-formative-r03.js")>0&&c.indexOf("thpt-g11-chiv-b10-b14-source-locked-formative-r03.js")<c.indexOf("thpt-r4-preview.js"));}
for(let n=10;n<=14;n++)assert(rd("mkdocs.thpt-preview.yml").includes("lop-11/chuong-iv/bai-"+n+".md"));
console.log("PASS G11 ChIV R03: original source/receipt, 30 D3, 10 Written, 5 SVG, 10 D6, 17 public Practice-only references, Q16 no Mastery/independent RD1");
