#!/usr/bin/env node
"use strict";
/* Source-equivalent G10 CHII FULL R03 (AUTHORING #745; source Git blob
 * 25f4eaf91483cb310ed13ebc5080f98cd247dd70; reviewer chain
 * 105e55939383c14242652dc326e508656643f07d).
 * This is release verification, not a second academic verdict. Q18 metadata-only
 * mismatch is not a review blocker under owner decision GitHub Issue #787.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto");
const root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const gitblob=p=>{const b=fs.readFileSync(path.join(root,p));return crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\0"),b])).digest("hex")};
const shaText=s=>{const b=Buffer.from(s);return crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\0"),b])).digest("hex")};
const fnv=t=>{let h=2166136261;for(let i=0;i<t.length;i++)h=Math.imul(h^t.charCodeAt(i),16777619)>>>0;return h.toString(16).padStart(8,"0")};
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
const original={3:"d63f02e2876622eaf88c987e41e2800689e620d2",4:"2cbcd2f1c2e774298936f53bd8a119e6e2eda57b"};
const names=["Vì sao cần học","Điều phải nhớ trước","Hình thành bản chất","Hướng dẫn đọc hình","Vì sao chọn phương pháp","Tự thử trước Core"];
const answers=["Đáp án canonical","Giải thích và kiểm điều kiện","D6 · Tự khắc phục sau khi thử","Đường trở lại"];
const seen=[];
for(const n of [3,4]){
 const p="docs/thpt-preview/sgk/chuong-ii/bai-"+n+".md",s=read(p);
 const range=/<!-- G10_CHII_FULL_R03_ALL_BEGIN -->[\s\S]*?<!-- G10_CHII_FULL_R03_ALL_END -->\n\n/g;
 assert.equal([...s.matchAll(range)].length,1,"Exactly one bounded source-equivalent addition B"+n);
 assert.equal(shaText(s.replace(range,"")),original[n],"Exact original S1 Academic source must remain unmodified B"+n);
 const blocks=[...s.matchAll(/<!-- G10_CHII_R03_BEGIN:(THPT-G10-CHII-TRY\d\d) OUTCOME=(G10-B0[34]-[A-Z_]+) -->([\s\S]*?)<!-- G10_CHII_R03_END:\1 -->/g)];
 assert.equal(blocks.length,5,"Five canonical approved outcomes B"+n);
 for(const [,id,outcome,text]of blocks){
  const k=records.find(x=>x.id===id);assert(k&&k.lesson===n&&k.outcome===outcome,"Canonical placement mismatch "+id);
  assert(!seen.includes(id),"No duplicated Q15 item "+id);seen.push(id);
  assert(text.includes('data-thpt-first-try-id="'+id+'"')&&text.includes('data-outcome-id="'+outcome+'"')&&text.includes('data-thpt-help-ref="'+k.help+'"'),"Q15/HELP reference "+id);
  const peds=[...text.matchAll(/^\*\*([^*]+):\*\* (.*)$/gm)].filter(m=>names.includes(m[1])).map(m=>({name:m[1],value:m[2]}));
  assert.deepEqual(peds.map(x=>x.name),names,"PED1–PED6 student-first pedagogy "+id);
  const answersParsed=[...text.matchAll(/^    \*\*([^*]+):\*\* ([^\n]+)$/gm)].filter(m=>answers.includes(m[1])).map(m=>({name:m[1],value:m[2]}));
  assert.deepEqual(answersParsed.map(x=>x.name),answers,"All four verbatim original authoring answer/HELP lines "+id);
  assert.equal(fnv(JSON.stringify([outcome,id,k.help,peds.map(x=>x.value),answersParsed.map(x=>x.value)])),k.hash,"Source fingerprint must match approved exact R02 text "+id);
  assert.equal((text.match(/\?\?\? question "Đã tự làm\? Tự mở đáp án và hướng khắc phục"/g)||[]).length,1,"Only one voluntary answer disclosure "+id);
  assert(!/^\s*ROLE:|^\s*SCORING:|SUPPORT_ONLY|RELEASE_AUTHORIZATION/.test(text),"No authoring metadata leaked "+id);
  assert(!/data-thpt-help-id="HELP-G10-CHII-TRY/.test(text),"Do not duplicate four existing canonical D6 HELP");
 }
 for(const help of [1,2])assert.equal((s.match(new RegExp('data-thpt-help-id="HELP-G10-B0'+n+'-0'+help+'"','g'))||[]).length,1,"Existing reviewed R01 D6 untouched B"+n+" HELP"+help);
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
console.log("PASS ChII FULL R03: original 2 SGK Git blobs, 10 verbatim PED1–6/answers and 4 reused D6, historical 16 formative+2 Written+14 Q16, no official Mastery.");
