#!/usr/bin/env node
"use strict";
require("./thpt-g11-historical-source-replay.cjs")();
// RELEASE-only exact academic source custody, public bank parity and Q16 source/placement guards.
// This is not independent academic review nor an assessment Mastery claim.
const assert=require("node:assert/strict");
const fs=require("node:fs"),crypto=require("node:crypto"),vm=require("node:vm");
const read=p=>fs.readFileSync(p,"utf8");
const blob=b=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\0"),b])).digest("hex");
const sourcePath="prototypes/thpt/content-drafts/G11_CHIII_B08_B09_S1_PAGINATION_EQUIVALENT_R03_SOURCE_20261102.md";
const receiptPath="prototypes/thpt/review-packets/G11_CHIII_R03_COMBINED_R01_ACADEMIC_R02_PED_S1_SOURCE_RECEIPT_20261102.md";
assert.equal(blob(fs.readFileSync(sourcePath)),"4ea8df2ca2682d9fac8b1556852334af336930a5","original R03 source Git blob");
assert.equal(blob(fs.readFileSync(receiptPath)),"57d7126a5e846979bf4ac5a034ad591c9455598b","review receipt Git blob");
const source=read(sourcePath);
const d3=source.slice(source.indexOf("## D. D3 –"),source.indexOf("## E. D4 –"));
assert(d3.startsWith("## D. D3 –"),"Original source D3");
const heads=[...d3.matchAll(/^### \x60(THPT-G11-B(08|09)-[CP]\d{2})\x60 · (SGK_CORE|SGK_PRACTICE) · \x60([^\x60]+)\x60 · ([A-Z_]+)\s*$/gm)];
assert.equal(heads.length,28,"28 source canonical D3 items");
const field=(text,name)=>{const m=text.match(new RegExp("^\\*\\*"+name+":\\*\\* (.+)$","m"));assert(m,"Missing original field "+name);return m[1].trim()};
const expected=heads.map((h,i)=>{
 const t=d3.slice(h.index+h[0].length,heads[i+1]?.index??d3.length);
 return {item_id:h[1],lesson:String(Number(h[2])),grade:"11",role:h[3]==="SGK_CORE"?"CORE":"PRACTICE",skill:h[4],stem:field(t,"Đề"),hint:"Đọc lại kiến thức và ví dụ của Bài "+Number(h[2])+" trước khi mở đối chiếu lời giải.",solution:"Đáp án: "+field(t,"Đáp án")+"\nLời giải: "+field(t,"Lời giải"),difficulty:h[5],exposure:"FORMATIVE_ONLY"};
});
const window={};
vm.runInNewContext(read("docs/assets/javascripts/thpt-g11-chiii-b08-b09-source-locked-formative-r03.js"),{window});
const bank=window.THPT_G11_CHIII_REVIEWED_FORMATIVE;
assert(bank?.validate().valid,"ChIII bank valid");
assert.equal(JSON.stringify(bank.records),JSON.stringify(expected),"Exact original question, answer, solution, skill, role and ID parity");
assert.equal(new Set(bank.records.map(q=>q.item_id)).size,28,"No duplicated public canonical IDs");
// B09 local learner-facing numbering (1–6) is UI-only; exact reviewed math bodies stay unchanged.
const b09Knowledge=read("docs/thpt-preview/sgk/lop-11/chuong-iii/bai-9.md");
const reviewedB09=[...source.matchAll(/^\*\*(?:5|6|7|8|9|10)\. ([^*]+)\*\* (.+)$/gm)];
assert.equal(reviewedB09.length,6,"Six original B09 D1 ideas on the immutable source");
for(const [i,entry] of reviewedB09.entries()){
 const localHeading=entry[1].replace(/\.$/,"");
 const expected="### 1."+(i+1)+". "+localHeading+"\n\n"+entry[2];
 assert(b09Knowledge.includes(expected),"B09 rendered local idea "+(i+1)+" retains exact R03 reviewed mathematical paragraph");
}
assert(!/\*\*(?:5|6|7|8|9|10)\. /.test(b09Knowledge),"No misleading chapter-global ordinal on B09 knowledge page");
const hub=read("docs/thpt-preview/sgk/lop-11/chuong-iii/luyen-tap.md");
for(const [lesson,cores,practices,figs] of [[8,5,8,1],[9,5,10,2]]){
 assert.equal(bank.forLesson(lesson,"core").length,cores);
 assert.equal(bank.forLesson(lesson,"practice").length,practices);
 const page=read("docs/thpt-preview/sgk/lop-11/chuong-iii/bai-"+lesson+".md");
 for(const title of ["## 1. Kiến thức SGK","## 2. Ví dụ","## 3. Hình minh họa","## 4. Tự khắc phục"])assert(page.includes(title),"B"+lesson+" missing "+title);
 assert.equal((page.match(/data-ped-first-try=/g)||[]).length,1,"Voluntary first try B"+lesson);
 assert.equal((page.match(/data-thpt-help-id=/g)||[]).length,3,"Original three D6 help paths B"+lesson);
 assert.equal((page.match(/class="thpt-r4-plot thpt-r4-probability-figure"/g)||[]).length,figs,"Original SVG display B"+lesson);
 for(const role of ["core","practice"])assert(hub.includes('data-thpt-open-quiz="g11-b'+lesson+'-'+role+'"'),"Practice route B"+lesson+" "+role);
 for(const index of [1,2,3])assert(page.includes('data-thpt-help-id="HELP-G11-B0'+lesson+'-0'+index+'"'),"Missing D6 canonical");
}
const svgs=["FIG-G11-B08-01_R01.svg","FIG-G11-B09-01_R01.svg","FIG-G11-B09-02_R01.svg"];
for(const svg of svgs){
 const a=fs.readFileSync("docs/assets/images/thpt/"+svg),b=fs.readFileSync("prototypes/thpt/content-drafts/svg/"+svg);
 assert.equal(blob(a),blob(b),"Exact source SVG blob "+svg);
 assert(!/<script/i.test(a.toString()),"No active SVG script");
}
const written=read("docs/thpt-preview/thu-vien/tu-luan-g11-chuong-iii.md");
for(const id of ["THPT-G11-CHIII-W08-01","THPT-G11-CHIII-W08-02-ANCHOR","THPT-G11-CHIII-W09-01","THPT-G11-CHIII-W09-02-ANCHOR"])assert.equal(written.split('data-thpt-written-canonical="'+id+'"').length-1,1,"One Written/Anchor canonical "+id);
const check=JSON.parse(read("docs/assets/data/thpt-g11-selfcheck/CHIII.json"));
assert.equal(check.original_public_source_blob,"4ea8df2ca2682d9fac8b1556852334af336930a5");
assert.equal(check.original_public_bank_version,bank.contentVersion);
assert.equal(check.mode,"PUBLIC_CANONICAL_REFERENCE_ONLY");
assert.equal(check.item_refs.length,12);
assert.equal(new Set(check.item_refs).size,12);
const byId=new Map(bank.records.map(q=>[q.item_id,q]));
const chosen=check.item_refs.map(id=>byId.get(id));
assert(chosen.every(q=>q?.role==="PRACTICE"&&q.exposure==="FORMATIVE_ONLY"),"Public practice only");
assert.equal(new Set(chosen.map(q=>q.skill)).size,12,"12 distinct reviewed Practice skills");
assert(!JSON.stringify(check).includes('"stem"')&&!JSON.stringify(check).includes('"answer"')&&!JSON.stringify(check).includes('"solution"'),"No duplicated item bodies in JSON");
assert(check.mastery_credit===false&&check.independent_readiness_credit===false&&check.persist_results===false);
const page=read("docs/thpt-preview/sgk/lop-11/chuong-iii/tu-kiem-tra-chuong.md");
assert(page.includes('data-g11-chapter-selfcheck="CHIII"')&&!/data-thpt-readiness|data-mastery-credit/.test(page),"No official Readiness");
const engine=read("docs/assets/javascripts/thpt-g11-reviewed-selfcheck-v1.js");
assert(engine.includes('chapter==="CHIII"')&&engine.includes("THPT_G11_CHIII_REVIEWED_FORMATIVE"));
const router=read("docs/assets/javascripts/thpt-r4-preview.js");
assert(router.includes("THPT_G11_CHIII_REVIEWED_FORMATIVE")&&router.includes('Number(item.lesson)>=8?"iii"'),"ChIII canonical router and D6 return path");
for(const config of ["mkdocs.yml","mkdocs.thpt-preview.yml"]){
 const text=read(config),bankIndex=text.indexOf("thpt-g11-chiii-b08-b09-source-locked-formative-r03.js"),routerIndex=text.indexOf("thpt-r4-preview.js");
 assert(bankIndex>0&&routerIndex>bankIndex,"load bank before Golden R4 router: "+config);
}
const index=read("docs/thpt-preview/sgk/index.md");
assert(index.includes('href="lop-11/chuong-iii/"')&&index.includes('href="lop-11/chuong-iii/bai-8/"'),"Search/navigate to ChIII");
const preview=read("mkdocs.thpt-preview.yml");
assert(preview.includes("lop-11/chuong-iii/bai-9.md")&&preview.includes("lop-11/chuong-iii/tu-kiem-tra-chuong.md"),"R4 preview navigation");
console.log("PASS G11 ChIII R03 exact 28 public D3, 4 Written, 3 source-identical SVG, 6 D6, 12 PUBLIC selfcheck refs; no private RD1/Mastery");
