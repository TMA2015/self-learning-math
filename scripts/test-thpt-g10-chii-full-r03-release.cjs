#!/usr/bin/env node
"use strict";
const {expectedG10KnowledgeBlob}=require("./thpt-q18-g10-source-receipt.cjs");
/* UX795 G10 ChII source-locked model B; Q15/16 + Golden preserved, not independent academic verdict. */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto");
const root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const gitblob=p=>{const b=fs.readFileSync(path.join(root,p));return crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\0"),b])).digest("hex")};
const shaText=s=>{const b=Buffer.from(s);return crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\0"),b])).digest("hex")};
const records=[
  {
    "lesson": 3,
    "outcome": "G10-B03-LINEAR_INEQUALITY",
    "id": "THPT-G10-CHII-TRY01",
    "help": "HELP-G10-B03-02",
    "hash": "7bbd0725"
  },
  {
    "lesson": 3,
    "outcome": "G10-B03-POINT_TEST",
    "id": "THPT-G10-CHII-TRY02",
    "help": "HELP-G10-B03-01",
    "hash": "19f8d121"
  },
  {
    "lesson": 3,
    "outcome": "G10-B03-BOUNDARY",
    "id": "THPT-G10-CHII-TRY03",
    "help": "HELP-G10-B03-02",
    "hash": "085cb6a1"
  },
  {
    "lesson": 3,
    "outcome": "G10-B03-HALFPLANE",
    "id": "THPT-G10-CHII-TRY04",
    "help": "HELP-G10-B03-02",
    "hash": "b0a151df"
  },
  {
    "lesson": 3,
    "outcome": "G10-B03-MODELING",
    "id": "THPT-G10-CHII-TRY05",
    "help": "HELP-G10-B03-01",
    "hash": "523fcc40"
  },
  {
    "lesson": 4,
    "outcome": "G10-B04-SYSTEM",
    "id": "THPT-G10-CHII-TRY06",
    "help": "HELP-G10-B04-01",
    "hash": "d160a52a"
  },
  {
    "lesson": 4,
    "outcome": "G10-B04-REGION_INTERSECTION",
    "id": "THPT-G10-CHII-TRY07",
    "help": "HELP-G10-B04-01",
    "hash": "6ff0c89a"
  },
  {
    "lesson": 4,
    "outcome": "G10-B04-FEASIBILITY",
    "id": "THPT-G10-CHII-TRY08",
    "help": "HELP-G10-B04-01",
    "hash": "6115da2f"
  },
  {
    "lesson": 4,
    "outcome": "G10-B04-LINEAR_OBJECTIVE",
    "id": "THPT-G10-CHII-TRY09",
    "help": "HELP-G10-B04-02",
    "hash": "14ae317d"
  },
  {
    "lesson": 4,
    "outcome": "G10-B04-INTEGER_MODELS",
    "id": "THPT-G10-CHII-TRY10",
    "help": "HELP-G10-B04-02",
    "hash": "3cd971c5"
  }
];
const snapshot={3:"d7fab29f7727e1873120c81353d9db0d30ef2c69",4:"ad312d8eec7386f989846edb379be285a6ba1d7a"};
const tabs=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
const seen=[];
for(const n of [3,4]){
 const p="docs/thpt-preview/sgk/chuong-ii/bai-"+n+".md",s=read(p);
 assert.equal(shaText(s),expectedG10KnowledgeBlob(n,snapshot[n]),"B"+n+": exact Model B source receipt drift, classify Delta C before updating");
 assert.deepEqual([...s.matchAll(/^=== "([^"]+)"$/gm)].map(m=>m[1]),tabs,"B"+n+": exactly four owner-approved L1 tabs");
 assert(!/^    === "/m.test(s),"B"+n+": no L2 tabs in phase 1");
 const ids=[...s.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(ids.length,5,"B"+n+": five Q15 canonical IDs");
 assert.equal(new Set(ids).size,5,"B"+n+": repeated First Try");
 for(const k of records.filter(v=>v.lesson===n)){
  assert(ids.includes(k.id),"B"+n+": Q15 missing "+k.id);
  const marker='data-thpt-first-try-id="'+k.id+'" data-outcome-id="'+k.outcome+'" data-thpt-help-ref="'+k.help+'"';
  assert(s.includes(marker),"B"+n+": original outcome/HELP relation changed "+k.id);
  assert(!seen.includes(k.id),"Duplicate canonical "+k.id);seen.push(k.id);
 }
 for(const h of [1,2]){
  const id="HELP-G10-B0"+n+"-0"+h;
  assert.equal((s.match(new RegExp('data-thpt-help-id="'+id+'"','g'))||[]).length,1,"B"+n+": reviewed D6 "+id);
 }
 assert.equal((s.match(/^    \?\?\? (?:question|tip) "/gm)||[]).length,7,"B"+n+": five closed First Try and two closed HELP");
 assert.equal((s.match(/<figure\b/g)||[]).length,1,"B"+n+": source SVG retained");
 assert.equal((s.match(/\\\(/g)||[]).length,(s.match(/\\\)/g)||[]).length,"B"+n+": balanced inline TeX");
 assert(s.includes("luyen-tap.md")&&s.includes("tu-kiem-tra-chuong.md"),"B"+n+": Core/Final Submit links resolve");
 assert(!/PREREQUISITE_CONFIRMED|CONTENT_READY:|REVIEW_RECEIPT/.test(s),"B"+n+": student-facing audit leak");
}
assert.equal(seen.length,10);assert.equal(new Set(seen).size,10);
for(const [p,sha]of [
 ["docs/assets/javascripts/thpt-chii-reviewed-formative-v1.js","c258edc212022944c0e0e4693c5efffb72754f4a"],
 ["docs/thpt-preview/thu-vien/tu-luan-chuong-ii.md","6ff217b4c24a248a8120bc1f964476b4966eca83"],
 ["docs/assets/data/thpt-g10-readiness/CHII.json","7f35aa93193f886490754237bf0f3f6209eabe86"]
])assert.equal(gitblob(p),sha,"Historical exact canonical item data must not change: "+p);
const bank=JSON.parse(read("docs/assets/data/thpt-g10-readiness/CHII.json"));
assert.equal(bank.items.length,14);assert.equal(bank.mastery_credit,false);assert.equal(bank.persist_results,false);
assert(read("docs/thpt-preview/sgk/chuong-ii/tu-kiem-tra-chuong.md").includes('data-g10-chapter-selfcheck="CHII"'));
if(process.argv.includes("--built")){
 for(const n of [3,4]){
  const html=read("site/thpt-preview/sgk/chuong-ii/bai-"+n+"/index.html");
  assert.equal((html.match(/data-thpt-first-try-id="THPT-G10-CHII-TRY\d\d"/g)||[]).length,5,"5 source-locked First Tries B"+n);
  assert.equal((html.match(/data-thpt-help-ref="HELP-G10-B0[34]-0[12]"/g)||[]).length,5,"5 original D6 reference placements B"+n);
  assert.equal((html.match(/<details class="question"/g)||[]).length,5,"5 native closed answer folds B"+n);
  assert(!html.includes("??? question"),"No raw Markdown disclosure B"+n);
 }
}
console.log("PASS ChII UX795: two exact Model B SHA, 10 original outcome-to-HELP roles, 4 D6, historical formative/Written/Q16 assets and Golden preserved.");
