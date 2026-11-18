#!/usr/bin/env node
"use strict";
/* RELEASE-only G10 ChIX FULL R02 source custody and Q15/Q16.
 * One approved Q01-Q18 AUTHORING source #768 Git blob 0dbaf569bfbb65d6c0e5e47d80ed0783795ac7bb,
 * review receipt f536cd38732f4ed545a76e882602308ffe934aaf. Hashes below
 * fingerprint original reviewed text after dropping only admin labels; no duplicate bank.
 */
const fs=require("node:fs"),crypto=require("node:crypto"),path=require("node:path"),assert=require("node:assert/strict");
const {expectedG10KnowledgeBlob}=require("./thpt-q18-g10-source-receipt.cjs");
const root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const blob=p=>{const b=fs.readFileSync(path.join(root,p));return crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\0"),b])).digest("hex")};
const fnv=t=>{let h=2166136261;for(let i=0;i<t.length;i++)h=Math.imul(h^t.charCodeAt(i),16777619)>>>0;return h.toString(16).padStart(8,"0")};
const records=[
  {
    "lesson": 26,
    "outcome": "G10-B26-EXPERIMENT_SAMPLE_SPACE",
    "id": "THPT-G10-CHIX-TRY01",
    "help": "HELP-G10-CHIX-TRY01",
    "hash": "20cf399c"
  },
  {
    "lesson": 26,
    "outcome": "G10-B26-EVENT_SUBSET",
    "id": "THPT-G10-CHIX-TRY02",
    "help": "HELP-G10-CHIX-TRY02",
    "hash": "da06b79e"
  },
  {
    "lesson": 26,
    "outcome": "G10-B26-CLASSICAL_RATIO",
    "id": "THPT-G10-CHIX-TRY03",
    "help": "HELP-G10-CHIX-TRY03",
    "hash": "89841d38"
  },
  {
    "lesson": 26,
    "outcome": "G10-B26-COMPLEMENT",
    "id": "THPT-G10-CHIX-TRY04",
    "help": "HELP-G10-CHIX-TRY04",
    "hash": "a6b8c038"
  },
  {
    "lesson": 26,
    "outcome": "G10-B26-SCOPE_SMALL_PROBABILITY",
    "id": "THPT-G10-CHIX-TRY05",
    "help": "HELP-G10-CHIX-TRY05",
    "hash": "d4d91edc"
  },
  {
    "lesson": 27,
    "outcome": "G10-B27-COUNTING_OUTCOMES",
    "id": "THPT-G10-CHIX-TRY06",
    "help": "HELP-G10-CHIX-TRY06",
    "hash": "cf2bb435"
  },
  {
    "lesson": 27,
    "outcome": "G10-B27-TREE_SEQUENCE",
    "id": "THPT-G10-CHIX-TRY07",
    "help": "HELP-G10-CHIX-TRY07",
    "hash": "9db4e889"
  },
  {
    "lesson": 27,
    "outcome": "G10-B27-COMPLEMENT_PROBABILITY",
    "id": "THPT-G10-CHIX-TRY08",
    "help": "HELP-G10-CHIX-TRY08",
    "hash": "c3733c8f"
  },
  {
    "lesson": 27,
    "outcome": "G10-B27-MULTISTEP_CONTEXT",
    "id": "THPT-G10-CHIX-TRY09",
    "help": "HELP-G10-CHIX-TRY09",
    "hash": "ba7529aa"
  },
  {
    "lesson": 27,
    "outcome": "G10-B27-EQUIPROBABLE_MODELLING",
    "id": "THPT-G10-CHIX-TRY10",
    "help": "HELP-G10-CHIX-TRY10",
    "hash": "35014619"
  }
];
const original={26:"c469d19c6ba7db40d694c0590638c3832b0feaa0",27:"a47e8e149f3ee190a68e13764aa7edc8c5193ae1"};
const seen=[];
for(const n of [26,27]){
 const name="docs/thpt-preview/sgk/chuong-ix/bai-"+n+".md",s=read(name);
  // Model B: verified candidate Git blob + exact original canonical IDs and
  // pedagogical outcome/D6 pairings. Historical comment-bound FNV below is
  // retained for historical snapshots only.
  const tabs=[...s.matchAll(/^=== "([^"]+)"$/gm)].map(m=>m[1]);
  if(tabs.length){
   assert.deepEqual(tabs,["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],
      "B"+n+" must have owner-approved four horizontal tabs");
   assert.equal(blob(name),expectedG10KnowledgeBlob(n,original[n]),"B"+n+" candidate SHA");
   const eligible=records.filter(x=>x.lesson===n);
   const placements=[...s.matchAll(/data-outcome-id="([^"]+)" data-thpt-first-try-id="([^"]+)" hidden/g)]
      .map(x=>({outcome:x[1],item:x[2]}));
   assert.equal(placements.length,5,"B"+n+": five canonical First Try placements");
   placements.forEach((item,i)=>{
    const k=eligible[i];
    assert.equal(item.item,k.id,"B"+n+": unchanged First Try item ID/order");
    assert.equal(item.outcome,k.outcome,"B"+n+": unchanged pedagogic outcome");
    assert(!seen.includes(k.id),"B"+n+": duplicate first try");seen.push(k.id);
    const at=s.indexOf('data-thpt-first-try-id="'+k.id+'"');
    const next=i+1<eligible.length?s.indexOf('data-thpt-first-try-id="'+eligible[i+1].id+'"',at+1):s.length;
    assert(at>=0&&next>at&&/^\s*\?\?\? question "/m.test(s.slice(at,next)),
      "B"+n+": First Try solution must remain collapsed "+k.id);
    const ix=s.indexOf('data-thpt-help-id="'+k.help+'"');
    assert(ix>=0 && /^\s*\?\?\? tip "/m.test(s.slice(ix,ix+700)),
      "B"+n+": original D6 HELP not default-closed "+k.help);
   });
   assert.equal((s.match(/^    \?\?\? question "/gm)||[]).length,5,"B"+n+": five answer disclosures");
   assert(!/data-thpt-readiness|data-mastery-credit|data-mastery-write/.test(s),
      "B"+n+": prevent Readiness/Mastery in Knowledge");
   continue;
  }
 assert.equal((s.match(/<!-- G10_CHIX_FULL_R02_ALL_BEGIN -->/g)||[]).length,1);
 const old=s.replace(/<!-- G10_CHIX_FULL_R02_ALL_BEGIN -->[\s\S]*?<!-- G10_CHIX_FULL_R02_ALL_END -->\n\n/,"");
 const b=Buffer.from(old);
 const sha=crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\0"),b])).digest("hex");
 assert.equal(sha,original[n],"Original reviewed S1 Knowledge/D2/D5/D6 page unchanged B"+n);
 const matches=[...s.matchAll(/<!-- G10_CHIX_R02_BEGIN:(THPT-G10-CHIX-TRY\d\d) OUTCOME=(G10-B2[67]-[A-Z_]+) -->([\s\S]*?)<!-- G10_CHIX_R02_END:\1 -->/g)];
 assert.equal(matches.length,5,"Five outcome First Tries B"+n);
 for(const [,id,outcome,raw]of matches){
  const x=records.find(x=>x.id===id);
  assert(x&&x.lesson===n&&x.outcome===outcome,"Wrong placement mapping "+id);
  assert(!seen.includes(id),"Duplicated Q15 item "+id);seen.push(id);
  const section=raw.trim();
  const detail='<details class="thpt-r4-pedagogical-note" data-ped-first-try="1" data-outcome-id="'+outcome+'" data-thpt-first-try-id="'+id+'">';
  const originalDetail='<details class="thpt-r4-pedagogical-note" data-thpt-first-try-id="'+id+'">';
  assert(section.includes(detail),"One unscored Golden First Try "+id);
  assert(section.includes('data-thpt-help-id="'+x.help+'"'),"Five-step HELP mapped "+id);
  assert.equal((section.match(/<details class="thpt-r4-pedagogical-note"/g)||[]).length,2,"Only first try and D6 per approved outcome");
  assert.equal((section.match(/<strong>Bước [1-5]:<\/strong>/g)||[]).length,5,"Five D6 steps "+id);
  assert(!/<details[^>]* open(?:\s|=|>)/.test(section),"Optional disclosure never auto opens "+id);
  let recovered=section.replace(detail,originalDetail);
  recovered=recovered.replace(/<span class="arithmatex">(\\\([\s\S]*?\\\))<\/span>/g,(_,math)=>math.replace(/&lt;/g,"<").replace(/&gt;/g,">"));
  assert.equal(fnv(recovered),x.hash,"Authoring approved full pedagogical/answer/D6 source changed "+id);
  assert(!/\*\*PED[1-6] —|\*\*LESSON_ID/.test(section),"Technical authoring labels leaked "+id);
 }
}
assert.equal(seen.length,10);assert.equal(new Set(seen).size,10);
for(const [name,sha]of [
 ["docs/assets/javascripts/thpt-chix-reviewed-formative-v1.js","caf4ca6f8866a2cb3377dfdfa73d723c0e5bd5f0"],
 ["docs/thpt-preview/thu-vien/tu-luan-chuong-ix.md","fe0c6486eef27392d116c076d848c372c95ec881"],
 ["docs/assets/data/thpt-g10-readiness/CHIX.json","baea25514bc0e414c560fc911961c6e0b9ef9785"]]){
 assert.equal(blob(name),sha,"Historical canonical source file changed: "+name);
}
const bank=JSON.parse(read("docs/assets/data/thpt-g10-readiness/CHIX.json"));
assert.equal(bank.items.length,6);assert.equal(bank.mastery_credit,false);assert.equal(bank.persist_results,false);
assert(read("docs/thpt-preview/sgk/chuong-ix/tu-kiem-tra-chuong.md").includes('data-g10-chapter-selfcheck="CHIX"'));
if(process.argv.includes("--built")){
 for(const n of [26,27]){
  const html=read("site/thpt-preview/sgk/chuong-ix/bai-"+n+"/index.html");
  assert.equal((html.match(/data-thpt-first-try-id="THPT-G10-CHIX-TRY\d\d"/g)||[]).length,5,"Five built First Try IDs B"+n);
  assert.equal((html.match(/data-thpt-help-id="HELP-G10-CHIX-TRY\d\d"/g)||[]).length,5,"Five built D6 IDs B"+n);
  assert.equal((html.match(/data-ped-first-try="1"/g)||[]).length,5,"Exactly five Golden voluntary first tries B"+n);
  assert(!html.includes("**PED1 —")&&!html.includes("CONTENT_READY"),"Authoring metadata visible B"+n);
 }
}
console.log("PASS G10 ChIX FULL R02: 10 source-verbatim PED/First Try/5-step HELP, original two S1 lesson blobs, historical formative/Written/6-client Q16 unchanged, no Mastery.");
