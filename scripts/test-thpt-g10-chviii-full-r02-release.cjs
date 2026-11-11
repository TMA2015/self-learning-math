#!/usr/bin/env node
"use strict";
/* G10 ChVIII FULL R02 RELEASE source-equivalence guard (not authoring verdict).
 * Immutable AUTHORING #765 head 3341381e; source Git blob d4c839ef7fdcb324220de59e54e33ee37684cbcb.
 * Independent review composite blob 172a91ada897b5057148e5329fdfe5e2796f539e.
 * This file keeps hashes only of exact reviewed pedagogical prose, question, original
 * answer and all five remediation steps; no second assessment item source.
 */
const fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto"),assert=require("node:assert/strict");
const {expectedG10KnowledgeBlob}=require("./thpt-q18-g10-source-receipt.cjs");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const gitblob=p=>{const b=fs.readFileSync(path.join(root,p));return crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\0"),b])).digest("hex")};
const fnv=t=>{let h=2166136261;for(let i=0;i<t.length;i++)h=Math.imul(h^t.charCodeAt(i),16777619)>>>0;return h.toString(16).padStart(8,"0")};
const original={23:"71cbb566fcb2a87e31676c5258d0d9a573f3f3fb",24:"62e1936c7bc4f6e27e4bd1cee5f43506c23bff78",25:"58869d20956c905a532d31d33269dcc0d1ecdd7b"};
const records=[
  {
    "lesson": 23,
    "outcome": "G10-B23-ADDITION",
    "id": "THPT-G10-CHVIII-TRY01",
    "help": "HELP-G10-CHVIII-TRY01",
    "hash": "89e05501"
  },
  {
    "lesson": 23,
    "outcome": "G10-B23-MULTIPLICATION",
    "id": "THPT-G10-CHVIII-TRY02",
    "help": "HELP-G10-CHVIII-TRY02",
    "hash": "2fc2317b"
  },
  {
    "lesson": 23,
    "outcome": "G10-B23-DIGIT_COUNT",
    "id": "THPT-G10-CHVIII-TRY03",
    "help": "HELP-G10-CHVIII-TRY03",
    "hash": "b972c15f"
  },
  {
    "lesson": 23,
    "outcome": "G10-B23-CASE_SPLIT",
    "id": "THPT-G10-CHVIII-TRY04",
    "help": "HELP-G10-CHVIII-TRY04",
    "hash": "3a5e4991"
  },
  {
    "lesson": 24,
    "outcome": "G10-B24-PERMUTATION",
    "id": "THPT-G10-CHVIII-TRY05",
    "help": "HELP-G10-CHVIII-TRY05",
    "hash": "032239bf"
  },
  {
    "lesson": 24,
    "outcome": "G10-B24-ARRANGEMENT",
    "id": "THPT-G10-CHVIII-TRY06",
    "help": "HELP-G10-CHVIII-TRY06",
    "hash": "519ca673"
  },
  {
    "lesson": 24,
    "outcome": "G10-B24-COMBINATION",
    "id": "THPT-G10-CHVIII-TRY07",
    "help": "HELP-G10-CHVIII-TRY07",
    "hash": "a183f445"
  },
  {
    "lesson": 24,
    "outcome": "G10-B24-CONSTRAINTS",
    "id": "THPT-G10-CHVIII-TRY08",
    "help": "HELP-G10-CHVIII-TRY08",
    "hash": "67c7cca5"
  },
  {
    "lesson": 25,
    "outcome": "G10-B25-NEWTON_EXPANSION",
    "id": "THPT-G10-CHVIII-TRY09",
    "help": "HELP-G10-CHVIII-TRY09",
    "hash": "57e33e35"
  },
  {
    "lesson": 25,
    "outcome": "G10-B25-COEFFICIENT_SIGN",
    "id": "THPT-G10-CHVIII-TRY10",
    "help": "HELP-G10-CHVIII-TRY10",
    "hash": "a100c1af"
  },
  {
    "lesson": 25,
    "outcome": "G10-B25-CONSTANT_TERM",
    "id": "THPT-G10-CHVIII-TRY11",
    "help": "HELP-G10-CHVIII-TRY11",
    "hash": "d17180bd"
  },
  {
    "lesson": 25,
    "outcome": "G10-B25-COEFFICIENT_SUM",
    "id": "THPT-G10-CHVIII-TRY12",
    "help": "HELP-G10-CHVIII-TRY12",
    "hash": "b4d32d22"
  }
];
assert.equal(records.length,12);
const all=[];
for(const n of [23,24,25]){
 const file="docs/thpt-preview/sgk/chuong-viii/bai-"+n+".md",source=read(file);
  // Candidate Model B is separately source-locked: preserve the 12 canonical
  // First Try/outcome/D6 mappings without forcing historical comment wrappers.
  const tabs=[...source.matchAll(/^=== "([^"]+)"$/gm)].map(m=>m[1]);
  if(tabs.length){
   assert.deepEqual(tabs,["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],
     "B"+n+": four exact Model B tabs");
   assert.equal(gitblob(file),expectedG10KnowledgeBlob(n,original[n]),"B"+n+": candidate SHA mismatch");
   const set=records.filter(x=>x.lesson===n);
   const ids=[...source.matchAll(/data-thpt-first-try-id="([^"]+)" data-outcome-id="([^"]+)"/g)]
      .map(m=>({id:m[1],outcome:m[2]}));
   assert.equal(ids.length,4,"B"+n+": four original First Try items");
   for(let i=0;i<set.length;i++){
    const k=set[i];
    assert.equal(ids[i].id,k.id,"B"+n+": changed canonical item/order");
    assert.equal(ids[i].outcome,k.outcome,"B"+n+": changed original outcome mapping");
    assert(!all.includes(k.id),"B"+n+": repeated canonical first try"); all.push(k.id);
    const ix=source.indexOf('data-thpt-first-try-id="'+k.id+'"');
    assert(/^\s*\?\?\? question "/m.test(source.slice(ix,ix+950)),
      "B"+n+": first-attempt solution must be collapsed "+k.id);
    const helpAt=source.indexOf('data-thpt-help-id="'+k.help+'"');
    assert(helpAt>=0 && /^\s*\?\?\? tip "/m.test(source.slice(helpAt,helpAt+1100)),
      "B"+n+": original reviewed D6 must remain a closed disclosure "+k.help);
   }
   assert((source.match(/^    \?\?\? question "/gm)||[]).length>=4,
     "B"+n+": minimum four closed first attempts");
   assert(!/data-thpt-readiness|data-mastery-credit|data-mastery-write/.test(source),
     "B"+n+": no official Readiness/Mastery in Knowledge");
   continue;
  }
 const start="<!-- G10_CHVIII_FULL_R02_ALL_BEGIN -->",finish="<!-- G10_CHVIII_FULL_R02_ALL_END -->";
 assert(source.includes(start)&&source.includes(finish),"Missing bounded approved pedagogical additions B"+n);
 const restored=source.replace(/<!-- G10_CHVIII_FULL_R02_ALL_BEGIN -->[\s\S]*?<!-- G10_CHVIII_FULL_R02_ALL_END -->\n\n/,"");
 const b=Buffer.from(restored);
 const restoredSha=crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\0"),b])).digest("hex");
 assert.equal(restoredSha,original[n],"Unchanged exact original S1 lesson B"+n);
 const matches=[...source.matchAll(/<!-- G10_CHVIII_R02_BEGIN:(THPT-G10-CHVIII-TRY\d\d) -->([\s\S]*?)<!-- G10_CHVIII_R02_END:\1 -->/g)];
 assert.equal(matches.length,4,"Four reviewed outcomes per lesson B"+n);
 for(const [,id,section] of matches){
  const k=records.find(x=>x.id===id);
  assert(k&&k.lesson===n,"Unexpected or wrong-lesson canonical ID "+id);
  assert(!all.includes(id),"Duplicated canonical ID "+id);
  all.push(id);
  const meta=section.match(new RegExp('<span id="'+id.toLowerCase()+'" data-thpt-first-try-id="'+id+'" data-outcome-id="([^"]+)"'));
  assert(meta&&meta[1]===k.outcome,"Wrong outcome binding "+id);
  const helpMeta=section.match(/data-thpt-help-id="(HELP-G10-CHVIII-TRY\d\d)"/);
  assert(helpMeta&&helpMeta[1]===k.help,"Wrong D6 binding "+id);
  const labels=["Vì sao cần học","Tiền đề","Hiểu bản chất trước công thức","Hướng dẫn đọc hình/sơ đồ","Lý do chọn phương pháp, điều kiện và giới hạn"];
  const ped=[...section.matchAll(/^\*\*([^*]+):\*\* (.*)$/gm)].filter(m=>labels.includes(m[1])).map(m=>m[1]+": "+m[2]);
  assert.deepEqual(ped.map(p=>p.slice(0,p.indexOf(": "))),labels,"PED1–PED5 concept-first sequence "+id);
  const prompt=section.match(/^\*\*Tự thử trước Core:\*\* (.*)$/m);
  const answer=[...section.matchAll(/^    \*\*(Đáp án|Lập luận|Nếu chưa đúng):\*\* (.*)$/gm)].map(m=>"**"+m[1]+":** "+m[2]);
  const steps=section.split("\n").filter(x=>/^    [1-5]\. \*\*/.test(x)).map(x=>x.slice(4));
  assert(prompt&&answer.length===3&&steps.length===5,"Exactly 3 hidden reviewer answer fields + five D6 steps "+id);
  assert.equal(fnv(JSON.stringify([k.outcome,id,k.help,ped,prompt[1],answer,steps])),k.hash,
     "Original authoring reviewed pedagogical source must be verbatim "+id);
  assert.equal((section.match(/\?\?\? question "Tự mở đáp án sau khi đã tự làm"/g)||[]).length,1,"One voluntary answer disclosure "+id);
  assert.equal((section.match(/\?\?\? tip "Nếu chưa làm được — khắc phục 5 bước"/g)||[]).length,1,"One voluntary remediation disclosure "+id);
 }
}
assert.equal(all.length,12);assert.equal(new Set(all).size,12);
for(const [file,sha] of [
 ["docs/assets/javascripts/thpt-chviii-reviewed-formative-v1.js","2ae62fada28913ec336b3507684408a1e05a3232"],
 ["docs/thpt-preview/thu-vien/tu-luan-chuong-viii.md","e78c43ab7b2f6d3ab1b135d1ad09c7030df2c44e"],
 ["docs/assets/data/thpt-g10-readiness/CHVIII.json","c3a1e108c1ff8a03f28d986c23bd8febe85f29d0"]]){
 assert.equal(gitblob(file),sha,"Original frozen formative/Written/public selfcheck file changed: "+file);
}
const bank=JSON.parse(read("docs/assets/data/thpt-g10-readiness/CHVIII.json"));
assert.equal(bank.items.length,14,"Original 14-client-item selfcheck retained");
assert(bank.mastery_credit===false&&bank.persist_results===false,"No skill Mastery/persistence");
assert(read("docs/thpt-preview/sgk/chuong-viii/tu-kiem-tra-chuong.md").includes('data-g10-chapter-selfcheck="CHVIII"'));
if(process.argv.includes("--built")){
 for(const n of [23,24,25]){
  const html=read("site/thpt-preview/sgk/chuong-viii/bai-"+n+"/index.html");
  assert.equal((html.match(/data-thpt-first-try-id=/g)||[]).length,4,"Four built First Tries B"+n);
  assert.equal((html.match(/data-thpt-help-id="HELP-G10-CHVIII-TRY\d\d"/g)||[]).length,4,"Four NEW reviewed D6 identities B"+n);
   const src=read("docs/thpt-preview/sgk/chuong-viii/bai-"+n+".md");
   const modelB=src.includes('=== "Khám phá kiến thức"');
   const expectedQuestions=modelB?(src.match(/^    \?\?\? question "/gm)||[]).length:4;
   const expectedTips=modelB?(src.match(/^    \?\?\? tip "/gm)||[]).length:4;
   assert.equal((html.match(/<details class="question"/g)||[]).length,expectedQuestions,
     "All source-locked First Try/folded questions rendered B"+n);
   assert.equal((html.match(/<details class="tip"/g)||[]).length,expectedTips,
     "All source-locked D6/remediation disclosures rendered B"+n);
  assert(!html.includes("??? question"),"Raw unrendered disclosure in B"+n);
 }
}
console.log("PASS G10 ChVIII FULL R02: 12 source-verbatim PED1–PED6/outcome/First Try/D6 hashes, 3 unchanged S1 lesson blobs, 25+3 old canonical public items, 14 client selfchecks and no Mastery.");
