#!/usr/bin/env node
"use strict";
require("./thpt-g11-historical-source-replay.cjs")();
// RELEASE-only ChV exact Git blob/source, original public question answers and Q16 placement guards.
const assert=require("node:assert/strict"),fs=require("node:fs"),crypto=require("node:crypto"),vm=require("node:vm");
const rd=p=>fs.readFileSync(p,"utf8");
const blob=b=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\0"),b])).digest("hex");
const source="prototypes/thpt/content-drafts/G11_CHV_B15_B17_S1_PAGINATION_EQUIVALENT_R03_SOURCE_20261102.md";
const receipt="prototypes/thpt/review-packets/G11_CHV_R03_COMBINED_INDEPENDENT_R02_ACADEMIC_PED_AND_AUTHOR_S1_RECEIPT_20261102.md";
const SRC="7934757ed06de4ae4b63dbc351ef524fc054e0d0",RECEIPT="2fdc39c755f399b0df81e17a9c8978384612e2f1";
assert.equal(blob(fs.readFileSync(source)),SRC,"Effective R03 source exact original Git blob");
assert.equal(blob(fs.readFileSync(receipt)),RECEIPT,"Combined reviewed R02+S1 R03 receipt exact Git blob");
const s=rd(source),a=s.indexOf("## D3 canonical public item bank (30 candidates)"),z=s.indexOf("## Outcome coverage and author QA checkpoint",a);
assert(a>0&&z>a);const d3=s.slice(a,z);
const fields=(txt,key)=>{const m=txt.match(new RegExp("^\\*\\*"+key+":\\*\\* ([^\\n]+)$","m"));assert(m,"Original D3 source field "+key);return m[1].trim()};
const h=[...d3.matchAll(/^#### (THPT-G11-CHV-B(1[5-7])-[CP]\d{2}) · (CORE|PRACTICE|APPLICATION) · skill_id=([^\n]+)$/gm)];
assert.equal(h.length,30,"Original 30 PUBLIC D3");
const expected=h.map((m,i)=>{
 const chunk=d3.slice(m.index+m[0].length,h[i+1]?.index??d3.length);
 return {item_id:m[1],lesson:String(Number(m[2])),grade:"11",role:m[3],skill:m[4].trim(),
  stem:fields(chunk,"Đề"),hint:"Xem lại điều kiện và ví dụ giải của Bài "+Number(m[2])+" rồi tự thử trước khi mở lời giải.",
  solution:"Đáp án: "+fields(chunk,"Đáp án")+"\nLời giải: "+fields(chunk,"Lời giải và lời giải thích"),
  difficulty:m[3]==="CORE"?"CORE_APPLY":m[3]==="APPLICATION"?"APPLICATION":"PRACTICE_APPLY",exposure:"FORMATIVE_ONLY"};
});
const window={};vm.runInNewContext(rd("docs/assets/javascripts/thpt-g11-chv-b15-b17-source-locked-formative-r03.js"),{window});
const bank=window.THPT_G11_CHV_REVIEWED_FORMATIVE;
assert(bank?.validate().valid,"One source-locked public bank");
assert.equal(JSON.stringify(bank.records),JSON.stringify(expected),"Exact 30 public canonical ID/skill/role/stem/answer/solution");
assert.equal(new Set(bank.records.map(q=>q.item_id)).size,30,"No duplicate IDs");
let d2Total=0;
for(const n of [15,16,17]){
 const page=rd("docs/thpt-preview/sgk/lop-11/chuong-v/bai-"+n+".md");
 const d2=[...s.matchAll(new RegExp("^\\*\\*(EX-G11-B"+n+"-\\d{2})[^\\n]+$","gm"))];
 const expectedD2=n===16?5:4;
 assert.equal(d2.length,expectedD2,"Reviewed original D2 examples B"+n);d2Total+=d2.length;
 for(const m of d2)assert(page.includes(m[0]),"Original full D2 explanation "+m[1]);
 assert(page.includes("Cầu nối"),"Concept/prequisite learning bridge B"+n);
 assert.equal((page.match(/data-ped-first-try="1"/g)||[]).length,1,"One voluntary hidden pre-Core try");
 assert.equal((page.match(/data-thpt-help-id=/g)||[]).length,2,"Two original HELP D6 B"+n);
 const srcFile="FIG-G11-B"+n+"-01_R01.svg";
 assert.equal(blob(fs.readFileSync("docs/assets/images/thpt/"+srcFile)),blob(fs.readFileSync("prototypes/thpt/content-drafts/svg/"+srcFile)),"Original SVG Git blob "+srcFile);
 assert(!/<script/i.test(rd("docs/assets/images/thpt/"+srcFile)),"No scripted SVG");
 assert(page.includes(srcFile),"Figure B"+n+" not rendered");
 const hub=rd("docs/thpt-preview/sgk/lop-11/chuong-v/luyen-tap.md");
 assert.equal(bank.forLesson(n,"core").length,3,"Three Core B"+n);
 assert.equal(bank.forLesson(n,"practice").length,7,"Seven original Practice/Application B"+n);
 for(const role of ["core","practice"])assert(hub.includes('data-thpt-open-quiz="g11-b'+n+'-'+role+'"'),"Canonical R4 route B"+n);
}
assert.equal(d2Total,13);
const d4=s.slice(s.indexOf("## D4 — 6 original canonical Written items, each rubric /4"),s.indexOf("## D6 — 6 thẻ hỗ trợ khắc phục"));
const hs=[...d4.matchAll(/^### (THPT-G11-CHV-B(1[5-7])-W\d{2}(?:-ANCHOR)?) · WRITTEN(?: \(ANCHOR TAG\))? · skill_id=([^\n]+)$/gm)];
assert.equal(hs.length,6);
const book=rd("docs/thpt-preview/thu-vien/tu-luan-g11-chuong-v.md");
const esc=t=>String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\x60([^\x60]+)\x60/g,"<code>$1</code>");
for(let i=0;i<hs.length;i++){
 const id=hs[i][1],chunk=d4.slice(hs[i].index+hs[i][0].length,hs[i+1]?.index??d4.length);
 assert.equal(book.split('data-thpt-written-canonical="'+id+'"').length-1,1,"Written ID unique "+id);
 assert(book.includes(esc(fields(chunk,"Đề"))),"Original Written stem "+id);
 assert(book.includes(esc(fields(chunk,"Lời giải và lí do"))),"Original Written answer "+id);
 for(const line of chunk.split("\n").filter(x=>/^[1-4]\.\s/.test(x)))assert(book.includes(esc(line.replace(/^[1-4]\.\s/,""))),"Original rubric clause "+id);
}
const d6=s.slice(s.indexOf("## D6 — 6 thẻ hỗ trợ khắc phục"),s.indexOf("## PED / coverage and author-only checks"));
const helps=[...d6.matchAll(/^### (HELP-G11-CHV-B(1[5-7])-\d{2}) · skill_id=([^\n]+) · return=(THPT-G11-CHV-B1[5-7]-[CP]\d{2})$/gm)];
assert.equal(helps.length,6);
for(const help of helps){const page=rd("docs/thpt-preview/sgk/lop-11/chuong-v/bai-"+Number(help[2])+".md");assert(page.includes('data-thpt-help-id="'+help[1]+'"')&&page.includes("?item="+help[4]),"Original D6 canonical return "+help[1]);}
const check=JSON.parse(rd("docs/assets/data/thpt-g11-selfcheck/CHV.json"));
assert.equal(check.original_public_source_blob,SRC);assert.equal(check.original_public_bank_version,bank.contentVersion);
assert.equal(check.mode,"PUBLIC_CANONICAL_REFERENCE_ONLY");assert.equal(check.item_refs.length,13);
assert.equal(new Set(check.item_refs).size,13);
const byId=new Map(bank.records.map(q=>[q.item_id,q]));
const selected=check.item_refs.map(id=>byId.get(id));
assert(selected.every(q=>q&&(q.role==="PRACTICE"||q.role==="APPLICATION")&&q.exposure==="FORMATIVE_ONLY"),"No private/new Q16 public entries");
assert.equal(new Set(selected.map(q=>q.skill)).size,13);
assert(!/"stem"|"answer"|"solution"/.test(JSON.stringify(check)),"No duplicated question body in placement config");
assert(check.mastery_credit===false&&check.independent_readiness_credit===false&&check.persist_results===false);
const self=rd("docs/thpt-preview/sgk/lop-11/chuong-v/tu-kiem-tra-chuong.md");
assert(self.includes('data-g11-chapter-selfcheck="CHV"')&&!/data-thpt-readiness|data-mastery-credit/.test(self));
const router=rd("docs/assets/javascripts/thpt-r4-preview.js"),engine=rd("docs/assets/javascripts/thpt-g11-reviewed-selfcheck-v1.js");
assert(router.includes('Number(item.lesson)>=15?"v"')&&router.includes("THPT_G11_CHV_REVIEWED_FORMATIVE")&&router.includes("parsedG11[3]"),"Golden R4 original deep links");
assert(engine.includes('chapter==="CHV"')&&engine.includes("THPT_G11_CHV_REVIEWED_FORMATIVE"),"Self-check one canonical bank hydration");
for(const name of ["mkdocs.yml","mkdocs.thpt-preview.yml"]){const cfg=rd(name);const start=cfg.indexOf("thpt-g11-chv-b15-b17-source-locked-formative-r03.js");assert(start>0&&start<cfg.indexOf("thpt-r4-preview.js"),"Public bank before router "+name);}
for(const n of [15,16,17])assert(rd("mkdocs.thpt-preview.yml").includes("lop-11/chuong-v/bai-"+n+".md"),"R4 lesson nav");
console.log("PASS G11 ChV R03: 30 exact public D3 (9 Core,17 Practice,4 Application); 13 D2, 6 original Written/Anchor, 3 source SVG, 6 D6, 13 original PUBLIC self-check refs, no private RD1/Mastery");
