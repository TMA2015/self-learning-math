#!/usr/bin/env node
"use strict";
require("./thpt-g11-historical-source-replay.cjs")();
const assert=require("node:assert/strict"),fs=require("node:fs"),crypto=require("node:crypto"),vm=require("node:vm");
const rd=p=>fs.readFileSync(p,"utf8");
const blob=b=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\0"),b])).digest("hex");
const SRC="17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872",REV="1badeeaf12462da1b0e2778213ce8a8dbf92e14b";
const sourcePath="prototypes/thpt/content-drafts/G11_CHVI_B18_B21_PUBLIC_CANONICAL_R01_POSTPASS_DELTA_B_SOURCE_LOCK.md",receiptPath="prototypes/thpt/review-packets/G11_CHVI_B18_B21_V2_COMPOSITE_HISTORIC_REVIEW_AND_OWNER_S1_RECEIPT_20261102.md";
assert.equal(blob(fs.readFileSync(sourcePath)),SRC,"Original source Git blob");
assert.equal(blob(fs.readFileSync(receiptPath)),REV,"Original reviewer+S1 Git blob");
const s=rd(sourcePath),D3=s.slice(s.indexOf("## PART C"),s.indexOf("## PART D"));
const h=[...D3.matchAll(/^#### (THPT-G11-CHVI-B(18|19|20|21)-[CP]\d{2}) · placement=(SGK_CORE|SGK_PRACTICE|SGK_APPLICATION) · skill_id=([^\n]+)$/gm)];
assert.equal(h.length,41,"41 reviewed original public D3 items");
const field=(txt,key)=>{const prefix="**"+key+":** ";const line=txt.split("\n").find(l=>l.startsWith(prefix));assert(line,"D3 original "+key);return line.slice(prefix.length).trim();};
const original=h.map((m,i)=>{
 const c=D3.slice(m.index+m[0].length,h[i+1]?.index??D3.length);
 const role=m[3]==="SGK_CORE"?"CORE":m[3]==="SGK_APPLICATION"?"APPLICATION":"PRACTICE";
 return {item_id:m[1],lesson:m[2],grade:"11",role,skill:m[4].trim(),stem:field(c,"Đề"),
 hint:"Xem lại điều kiện và ví dụ giải của Bài "+m[2]+" rồi tự thử trước khi mở lời giải.",
 solution:"Đáp án: "+field(c,"Đáp án")+"\nLời giải: "+field(c,"Giải thích"),
 difficulty:role==="CORE"?"CORE_APPLY":role==="APPLICATION"?"APPLICATION":"PRACTICE_APPLY",exposure:"FORMATIVE_ONLY"};
});
const window={};vm.runInNewContext(rd("docs/assets/javascripts/thpt-g11-chvi-b18-b21-source-locked-formative-r01.js"),{window});
const bank=window.THPT_G11_CHVI_REVIEWED_FORMATIVE;
assert(bank?.validate().valid,"One original public bank");
assert.equal(JSON.stringify(bank.records),JSON.stringify(original),"41 canonical stems/keys/solutions/skills/roles exact parity");
assert.equal(new Set(bank.records.map(x=>x.item_id)).size,41,"No cloned canonical items");
assert.equal(bank.records.filter(x=>x.role==="CORE").length,16);
assert.equal(bank.records.filter(x=>x.role==="PRACTICE").length,21);
assert.equal(bank.records.filter(x=>x.role==="APPLICATION").length,4);
const D1=s.slice(s.indexOf("## PART B"),s.indexOf("## PART C"));
const help=s.slice(s.indexOf("## D6 HELP five-step"),s.indexOf("## PART E"));
const hs=[...help.matchAll(/^### (HELP-G11-CHVI-B(18|19|20|21)-\d{2}) · skill_id=([^\n]+) · return_item=(THPT-G11-CHVI-B(18|19|20|21)-[CP]\d{2})$/gm)];
assert.equal(hs.length,8,"Original 8 D6");
const d4=s.slice(s.indexOf("## D4 original public formative Written"),s.indexOf("## D6 HELP five-step"));
const wi=[...d4.matchAll(/^### (THPT-G11-CHVI-B(18|19|20|21)-W\d{2}(?:-ANCHOR)?) · placement=SGK_WRITTEN · role=(WRITTEN|ANCHOR_TAG) · skill_id=([^\n]+)$/gm)];
assert.equal(wi.length,8,"Original 8 Written/Anchor");
const hub=rd("docs/thpt-preview/sgk/lop-11/chuong-vi/luyen-tap.md"),written=rd("docs/thpt-preview/thu-vien/tu-luan-g11-chuong-vi.md");
for(const [n,C,P,E] of [[18,5,7,6],[19,3,6,4],[20,4,4,4],[21,4,8,5]]){
 const page=rd("docs/thpt-preview/sgk/lop-11/chuong-vi/bai-"+n+".md");
 const start=D1.indexOf("## Bài "+n+" —"),end=D1.indexOf("## Bài "+(n+1)+" —",start+1);
 const originalD1=D1.slice(start,end>0?end:D1.indexOf("## Kết nối toàn chương",start));
 const ex=originalD1.split("\n").filter(l=>l.startsWith("**EX-G11-B"+n+"-"));
 assert.equal(ex.length,E,"Full original D2 count B"+n);
 for(const line of ex)assert(page.includes(line),"Original D2 source explanation B"+n);
 assert.equal(bank.forLesson(n,"core").length,C);
 assert.equal(bank.forLesson(n,"practice").length,P);
 assert(page.includes('data-ped-first-try="1"')&&page.includes("## 1. Kiến thức SGK"),"Meaning-first and opt-in self-try B"+n);
 assert.equal((page.match(/data-thpt-help-id=/g)||[]).length,2,"Original D6 count B"+n);
 for(const m of hs.filter(x=>Number(x[2])===n))assert(page.includes(m[1])&&page.includes("?item="+m[4]),"Original D6 and return item "+m[1]);
 const svg="FIG-G11-CHVI-B"+n+"-01_R00.svg";
 assert.equal(blob(fs.readFileSync("docs/assets/images/thpt/"+svg)),blob(fs.readFileSync("prototypes/thpt/content-drafts/svg/"+svg)),"Original SVG exact identity B"+n);
 assert(page.includes(svg)&&page.includes("Cách đọc và phát hiện"),"SVG teaching explanation B"+n);
 for(const role of ["core","practice"])assert(hub.includes('data-thpt-open-quiz="g11-b'+n+"-"+role+'"'),"Golden R4 route B"+n+" "+role);
}
for(const m of wi)assert.equal(written.split('data-thpt-written-canonical="'+m[1]+'"').length-1,1,"One canonical Written/Anchor "+m[1]);
assert.equal((written.match(/<summary>Em đã làm\? Mở lời giải và rubric \/4<\/summary>/g)||[]).length,8,"Eight hidden rubric solutions");
const cfg=JSON.parse(rd("docs/assets/data/thpt-g11-selfcheck/CHVI.json"));
assert.equal(cfg.original_public_source_blob,SRC);
assert.equal(cfg.original_public_bank_version,bank.contentVersion);
assert.equal(cfg.mode,"PUBLIC_CANONICAL_REFERENCE_ONLY");
assert.equal(cfg.item_refs.length,20);
assert.equal(new Set(cfg.item_refs).size,20);
const byId=new Map(bank.records.map(x=>[x.item_id,x])),chosen=cfg.item_refs.map(id=>byId.get(id));
assert(chosen.every(q=>q&&q.exposure==="FORMATIVE_ONLY"&&(q.role==="PRACTICE"||q.role==="APPLICATION")),"Only original PUBLIC practice in Final Submit");
assert.equal(new Set(chosen.map(q=>q.skill)).size,20,"20 unique public skill refs");
assert(!/"stem"|"answer"|"solution"/.test(JSON.stringify(cfg)),"No duplicate answer/key in JSON");
assert(cfg.mastery_credit===false&&cfg.independent_readiness_credit===false&&cfg.persist_results===false);
assert(rd("docs/thpt-preview/sgk/lop-11/chuong-vi/tu-kiem-tra-chuong.md").includes('data-g11-chapter-selfcheck="CHVI"'));
assert(rd("docs/assets/javascripts/thpt-g11-reviewed-selfcheck-v1.js").includes('chapter==="CHVI"'));
const router=rd("docs/assets/javascripts/thpt-r4-preview.js");
assert(router.includes("THPT_G11_CHVI_REVIEWED_FORMATIVE")&&router.includes("CHVI-B(18|19|20|21)"));
for(const conf of ["mkdocs.yml","mkdocs.thpt-preview.yml"]){const v=rd(conf);assert(v.indexOf("thpt-g11-chvi-b18-b21-source-locked-formative-r01.js")<v.indexOf("thpt-r4-preview.js"),"Bank load before router");}
const index=rd("docs/thpt-preview/sgk/index.md");
assert(index.includes('href="lop-11/chuong-vi/"'));
for(const n of [18,19,20,21])assert(index.includes('href="lop-11/chuong-vi/bai-'+n+'/"'),"G11 B"+n+" search");
console.log("PASS G11 ChVI exact immutable public source 41 D3, 19 D2, 8 Written, 4 SVG, 8 D6, 20 Q16 public skills, no RD1/Mastery");
