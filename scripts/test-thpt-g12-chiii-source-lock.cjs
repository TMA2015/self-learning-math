"use strict";
/* RELEASE SOURCE/Q15/Q16: byte-locked canonical PUBLIC R00; no RD1. */
const assert=require("node:assert/strict"),fs=require("node:fs"),crypto=require("node:crypto"),path=require("node:path");
const root=path.resolve(__dirname,".."),at=p=>path.join(root,p),read=p=>fs.readFileSync(at(p),"utf8");
const sha=p=>{const b=fs.readFileSync(at(p));return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex")};
const sourcePath="prototypes/thpt/content-drafts/G12_SGK_CHIII_B09_B10_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md";
const receiptPath="prototypes/thpt/review-packets/G12_CHIII_R00_INDEPENDENT_ACADEMIC_PED_SOURCE_RECEIPT_20261103.md";
const officialSource="4e8e462a5c2243583be8c71625a9be3095e48c7b",officialReceipt="0fb489698a92c71e1fb9e0ab17671c5d90d65327";
assert.equal(sha(sourcePath),officialSource);assert.equal(sha(receiptPath),officialReceipt);
const source=read(sourcePath),bank=JSON.parse(read("docs/assets/data/thpt-g12-chiii-b09-b10-public-r00.json"));
assert.equal(bank.source_blob,officialSource);assert.equal(bank.receipt_blob,officialReceipt);
assert.equal(bank.packet_id,"G12-SGK-CHIII-B09-B10-R00");assert.equal(bank.mode,"CLIENT_SELF_CHECK_NO_MASTERY");
assert.equal(bank.items.length,48);assert.equal(new Set(bank.items.map(q=>q.item_id)).size,48);
assert.equal(new Set(bank.items.map(q=>q.outcome_id)).size,12);assert.equal(bank.help.length,12);assert.equal(bank.end_references.length,12);
for(const role of ["CORE","SGK_PRACTICE","SGK_APPLICATION","WRITTEN"])
 assert.equal(bank.items.filter(x=>x.role===role).length,12,role);
assert.equal(bank.items.filter(q=>q.anchor_tag).length,4);
const bt=String.fromCharCode(96);
for(const [i,lesson] of ["B09","B10"].entries()){
 const subset=bank.items.filter(q=>q.lesson_id===lesson);assert.equal(subset.length,24);
 const page=read("docs/thpt-preview/sgk/lop-12/chuong-iii/bai-"+(i+9)+".md");
 assert(page.includes("Tự thử trước Core"));assert(!page.includes("#### Item THPT-"));assert(!page.includes("#### HELP-G12-"));
 for(let j=1;j<=6;j++){
  assert(page.includes("G12-CHIII-"+lesson+"-O"+String(j).padStart(2,"0")));
  assert(page.includes("EX-G12-B"+(i+9)+"-"+String(j).padStart(2,"0")));
 }
 for(const q of subset){
  const marker="#### Item "+q.item_id+"\n";const from=source.indexOf(marker);
  assert(from>=0,"Source item missing "+q.item_id);
  const tail=source.slice(from+marker.length);
  const end=tail.search(/^#### |^### Outcome |^## Đối chiếu sau học/m);
  assert(end>=0,"Missing source item boundary "+q.item_id);
  const block=tail.slice(0,end);
  assert(block.includes(bt+"ITEM_ID"+bt+": "+bt+q.item_id+bt));
  assert(block.includes(bt+"OUTCOME_ID"+bt+": "+bt+q.outcome_id+bt));
  assert(block.includes(bt+"ROLE"+bt+": "+bt+q.source_role+bt));
  for(const [field,label] of [["stem","Đề gốc (tự viết)"],["answer","Đáp án canonical"],["solution","Lời giải và lý do"],["conditions","Điều kiện/giới hạn"]])
   assert(block.includes("- **"+label+":** "+q[field]),"Modified "+field+" "+q.item_id);
  if(q.role==="WRITTEN"){assert(q.rubric?.length>=3);q.rubric.forEach(x=>assert(block.includes("- "+x),"Rubric changed "+q.item_id))}
 }
}
for(const h of bank.help){
 assert.equal(h.steps.length,5);assert(bank.items.some(q=>q.item_id===h.return_item));assert(bank.items.some(q=>q.item_id===h.practice_item));
 const marker="#### "+h.help_id+" — D6",from=source.indexOf(marker);assert(from>=0);
 const end=source.indexOf("\n### Outcome ",from+marker.length),after=source.slice(from,end<0?source.indexOf("## Đối chiếu sau học",from):end);
 h.steps.forEach((step,i)=>assert(after.includes((i+1)+". "+step),"D6 changed "+h.help_id));
}
for(const e of bank.end_references){
 const q=bank.items.find(x=>x.item_id===e.item_id);
 assert(q&&q.role==="SGK_APPLICATION"&&q.outcome_id===e.outcome_id);
 assert(source.includes("| "+e.placement_id+" | "+e.item_id+" | "+e.outcome_id+" | Reveal only after Final Submit |"));
}
for(const name of ["FIG-G12-CHIII-B09-QUARTILES-R00.svg","FIG-G12-CHIII-B09-RANGE-IQR-R00.svg","FIG-G12-CHIII-B10-SPREAD-R00.svg"])
 assert.equal(sha("docs/assets/images/thpt/"+name),sha("prototypes/thpt/content-drafts/svg/"+name),"SVG changed "+name);
const nav=read("mkdocs.thpt-preview.yml");
for(const p of ["chuong-iii.md","chuong-iii/bai-9.md","chuong-iii/bai-10.md","chuong-iii/luyen-tap.md","chuong-iii/tu-kiem-tra-chuong.md"])
 assert(nav.includes("thpt-preview/sgk/lop-12/"+p),"Nav missing "+p);
const runtime=read("docs/assets/javascripts/thpt-g12-chiii-b09-b10-r00.js");
for(const key of ["Final Submit","data-g12-chiii-selfcheck","data-g12-chiii-hub","CLIENT_SELF_CHECK_NO_MASTERY","bank.source_blob","bank.receipt_blob"])
 assert(runtime.includes(key),"Gate missing "+key);
for(const forbidden of ["localStorage","firebase","setDoc(","SkillMastery"])
 assert(!runtime.includes(forbidden),"Unexpected data writes "+forbidden);
console.log("PASS G12 ChIII source: 48 canonical PUBLIC, 12 outcomes/D6, 12 reused END, 3 SHA-equivalent SVG, Q15/Q16");
