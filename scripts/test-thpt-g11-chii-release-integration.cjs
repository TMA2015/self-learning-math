#!/usr/bin/env node
"use strict";
require("./thpt-g11-historical-source-replay.cjs")();
// RELEASE-only source/route guard. Does not certify academic or independent Readiness.
const assert=require("node:assert/strict"),fs=require("node:fs"),crypto=require("node:crypto"),vm=require("node:vm");
const read=p=>fs.readFileSync(p,"utf8");
const blob=b=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\0"),b])).digest("hex");
const sourcePath="prototypes/thpt/content-drafts/G11_CHII_B05_B07_S1_PAGINATION_EQUIVALENT_R03_SOURCE_20261102.md";
const sourceBytes=fs.readFileSync(sourcePath);
assert.equal(blob(sourceBytes),"2101e2a248e0cf53ee11847b913b937cebcd0806","Frozen R03 source Git blob");
const receiptPath="prototypes/thpt/review-packets/G11_CHII_R03_COMBINED_R01_ACADEMIC_R02_PED_S1_SOURCE_RECEIPT_20261102.md";
assert.equal(blob(fs.readFileSync(receiptPath)),"09d77f92e6efb266ac15e0d972256319d92a3e1e","Independent review and S1 receipt Git blob");
const manifest=read("prototypes/thpt/release-queue/ready/G11-SGK-CHII-B05-B07.md");
assert(manifest.includes("STATE: CONTENT_READY")&&manifest.includes("ACADEMIC_SOURCE_BLOB: 2101e2a248e0cf53ee11847b913b937cebcd0806"),"Do not promote author source to RELEASE_READY");
const source=sourceBytes.toString("utf8");
const start=source.indexOf("## D3 · SGK Core"),end=source.indexOf("## D4 ·",start);
assert(start>=0&&end>start,"Original R03 D3/D4 boundaries");
const section=source.slice(start,end);
const heads=[...section.matchAll(/^### (THPT-G11-B(05|06|07)-([CP])\d{2}) · (SGK_CORE|SGK_PRACTICE) · ([A-Z0-9_-]+) · ([A-Z_]+)\s*$/gm)];
assert.equal(heads.length,36,"36 exact source canonical D3 records");
const field=(text,name)=>{const m=text.match(new RegExp("^\\*\\*"+name+":\\*\\* (.+)$","m"));assert(m,"Missing source field "+name);return m[1].trim()};
const expected=heads.map((h,i)=>{const t=section.slice(h.index+h[0].length,heads[i+1]?.index??section.length);return {
 item_id:h[1],lesson:String(Number(h[2])),grade:"11",role:h[4]==="SGK_CORE"?"CORE":"PRACTICE",skill:h[5],
 stem:field(t,"Đề"),hint:"Đọc lại kiến thức và ví dụ của Bài "+Number(h[2])+" trước khi mở đối chiếu lời giải.",
 solution:"Đáp án: "+field(t,"Đáp án")+"\nLời giải: "+field(t,"Lời giải"),difficulty:h[6],exposure:"FORMATIVE_ONLY"
}});
const window={};
vm.runInNewContext(read("docs/assets/javascripts/thpt-g11-chii-b05-b07-source-locked-formative-r03.js"),{window});
const bank=window.THPT_G11_CHII_REVIEWED_FORMATIVE;
assert(bank?.validate().valid,"Reviewed public formative bank must validate");
assert.equal(JSON.stringify(bank.records),JSON.stringify(expected),"36 public records must be exact R03 source text/IDs/roles/outcomes");
assert.equal(new Set(bank.records.map(x=>x.item_id)).size,36,"No canonical duplication");
const hub=read("docs/thpt-preview/sgk/lop-11/chuong-ii/luyen-tap.md");
for(const n of [5,6,7]){
 const p=read("docs/thpt-preview/sgk/lop-11/chuong-ii/bai-"+n+".md");
 for(const section of ["## 1. Kiến thức SGK","## 2. Ví dụ","## 3. Hình minh họa","## 4. Tự khắc phục"])assert(p.includes(section),"B0"+n+" missing pedagogical section "+section);
 assert.equal(bank.forLesson(n,"core").length,4,"B0"+n+" 4 Core");
 assert.equal(bank.forLesson(n,"practice").length,8,"B0"+n+" 8 Practice");
 for(const role of ["core","practice"])assert(hub.includes('data-thpt-open-quiz="g11-b'+n+'-'+role+'"'),"B0"+n+" practice hub missing "+role);
 for(const [i,id] of [[1,n===5?"C03":n===6?"C02":"C02"],[2,n===5?"P04":n===6?"C03":"C03"]]){
  const help="HELP-G11-B0"+n+"-0"+i;
  assert(p.includes('data-thpt-help-id="'+help+'"'),"Missing original D6 "+help);
  assert(p.includes("../luyen-tap/?item=THPT-G11-B0"+n+"-"+id),"D6 must link to existing canonical Core/Practice item "+help);
 }
 assert(p.includes('data-ped-first-try="1"'),"B0"+n+" voluntary first try");
 assert(!p.includes("SGK_CHAPTER_READINESS")&&!p.includes("data-thpt-readiness"),"No official Readiness on formative lesson");
}
const figures=[["FIG-G11-B05-01_R01.svg","154e10059899d635dec5aacc78616e3d53b9ad17"],["FIG-G11-B06-01_R01.svg","7b26242cad828b6b4b6c27b87f3359273b03bf2a"],["FIG-G11-B07-01_R01.svg","3aa50318e6bbe1666d27bd82b5034101f1c100d9"]];
for(const [name,sha] of figures){
 const bytes=fs.readFileSync("docs/assets/images/thpt/"+name);
 assert.equal(blob(bytes),sha,"Original SVG blob drift "+name);
 assert(!/<script/i.test(bytes.toString()),"SVG script forbidden "+name);
}
const written=read("docs/thpt-preview/thu-vien/tu-luan-g11-chuong-ii.md");
for(const id of ["THPT-G11-CHII-W05-01","THPT-G11-CHII-W05-02-ANCHOR","THPT-G11-CHII-W06-01","THPT-G11-CHII-W06-02-ANCHOR","THPT-G11-CHII-W07-01","THPT-G11-CHII-W07-02-ANCHOR"])
 assert.equal(written.split('data-thpt-written-canonical="'+id+'"').length-1,1,"One shared Written/Anchor only: "+id);
const preview=read("mkdocs.thpt-preview.yml"),main=read("mkdocs.yml"),index=read("docs/thpt-preview/sgk/index.md");
assert(preview.includes("lop-11/chuong-ii/bai-7.md")&&preview.includes("lop-11/chuong-ii/luyen-tap.md"),"THPT preview navigation must include ChII");
assert(index.includes('href="lop-11/chuong-ii/"')&&index.includes('href="lop-11/chuong-ii/bai-5/"'),"Search entry for ChII/B05");
assert(main.indexOf("thpt-g11-chii-b05-b07-source-locked-formative-r03.js")>=0&&main.indexOf("thpt-g11-chii-b05-b07-source-locked-formative-r03.js")<main.indexOf("thpt-r4-preview.js"),"Load public bank before Golden router");
assert(preview.indexOf("thpt-g11-chii-b05-b07-source-locked-formative-r03.js")>=0&&preview.indexOf("thpt-g11-chii-b05-b07-source-locked-formative-r03.js")<preview.indexOf("thpt-r4-preview.js"),"Load G11 ChII public bank before Golden router in R4 preview build as well");
assert(read("docs/assets/javascripts/thpt-r4-preview.js").includes("THPT_G11_CHII_REVIEWED_FORMATIVE"),"Router must use original bank");
const selfcheck=JSON.parse(read("docs/assets/data/thpt-g11-selfcheck/CHII.json"));
assert.equal(selfcheck.schema,"thpt-g11-reviewed-selfcheck-v1");
assert.equal(selfcheck.scope,"SGK_CHAPTER_SELF_CHECK");
assert.equal(selfcheck.mode,"PUBLIC_CANONICAL_REFERENCE_ONLY");
assert.equal(selfcheck.original_public_source_blob,"2101e2a248e0cf53ee11847b913b937cebcd0806");
assert.equal(selfcheck.original_public_bank_version,bank.contentVersion);
assert.equal(selfcheck.mastery_credit,false);
assert.equal(selfcheck.independent_readiness_credit,false);
assert.equal(selfcheck.persist_results,false);
assert.equal(selfcheck.public_client_answer_keys,true);
assert.equal(selfcheck.item_refs.length,15);
assert.equal(new Set(selfcheck.item_refs).size,15,"No cloned/duplicate canonical IDs");
const byId=new Map(bank.records.map(q=>[q.item_id,q]));
const selected=selfcheck.item_refs.map(id=>byId.get(id));
assert(selected.every(q=>q&&q.role==="PRACTICE"&&q.exposure==="FORMATIVE_ONLY"),"Only already public reviewed practice source is eligible");
assert.equal(new Set(selected.map(q=>q.skill)).size,15,"One representative per original PUBLIC skill");
assert(selfcheck.item_refs.every(id=>!id.includes("-RD1-")),"Never publish protected canonical RD1");
assert(!JSON.stringify(selfcheck).includes('"stem"')&&!JSON.stringify(selfcheck).includes('"answer"')&&!JSON.stringify(selfcheck).includes('"solution"'),"No duplicated item text/solution bank");
const selfcheckPage=read("docs/thpt-preview/sgk/lop-11/chuong-ii/tu-kiem-tra-chuong.md");
assert(selfcheckPage.includes('data-g11-chapter-selfcheck="CHII"'));
assert(selfcheckPage.includes("không phải bộ đề độc lập")&&selfcheckPage.includes("không ghi Skill Mastery"));
assert(!/data-thpt-readiness|data-mastery-credit|SGK_CHAPTER_READINESS/.test(selfcheckPage));
const selfcheckEngine=read("docs/assets/javascripts/thpt-g11-reviewed-selfcheck-v1.js");
assert(selfcheckEngine.includes("PUBLIC_CANONICAL_REFERENCE_ONLY")&&selfcheckEngine.includes("THPT_G11_CHII_REVIEWED_FORMATIVE"));
assert(preview.includes("lop-11/chuong-ii/tu-kiem-tra-chuong.md"));
console.log("PASS G11 ChII source parity: 36 original PUBLIC canonical + 6 shared Written + 3 SVG + 6 HELP, and 15 unique voluntary self-check refs; private 19 RD1 untouched, no Mastery/independent score");
console.log("PASS G11 ChII RELEASE source parity: 36/36 exact R03 formative, 6 shared Written, 3 immutable SVG, 6 D6 deep links, preview navigation and Q16 voluntary self-check scope (no independent Readiness)");
