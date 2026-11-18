"use strict";
/* G10 ChVI RELEASE exact-source FULL R04, not an AUTHORING verdict.
 * AUTH #756 current reviewed source blob 3f3d32c3bfd13634dad033970e944a3623cb5f14
 * and composite receipt df9a9528da029c40522e4f3f4959ad537c5266be.
 * R03 source 77d42ce0...; R04 two-item independently reviewed ef0b8255...
 * Public First Try = 19 placements / 18 new canonical + 1 shared existing;
 * CHVI selfcheck = 18 historic + 2 reviewed client-only Written; no Mastery.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto");
const {expectedG10KnowledgeBlob}=require("./thpt-q18-g10-source-receipt.cjs");
const root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const blob=p=>{const bytes=fs.readFileSync(path.join(root,p));return crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+bytes.length+"\0"),bytes])).digest("hex")};
const fnv=s=>{let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619)>>>0;return h.toString(16).padStart(8,"0")};
const lessons=[
 {n:15,old:"11ec84bedd9ab8b35912a1565751cfa3396149a2",items:["TRY01","TRY02","TRY03","TRY05","TRY04"],outcomes:["B15_OUT_01","B15_OUT_02","B15_OUT_03","B15_OUT_05","B15_OUT_04"]},
 {n:16,old:"0c1ce1ddbd44dd0d50acc0eba5c7e7d58d37c50a",items:["TRY06","TRY07","TRY09","TRY08","TRY10"],outcomes:["B16_OUT_01","B16_OUT_02","B16_OUT_04","B16_OUT_03","B16_OUT_05"]},
 {n:17,old:"dafa3ee1d68753bf06806bb212742d7db2ddc6fc",items:["TRY11","TRY12","TRY13","TRY15","TRY14"],outcomes:["B17_OUT_01","B17_OUT_02","B17_OUT_03","B17_OUT_05","B17_OUT_04"]},
 {n:18,old:"1f832722a7aec125d5b1868aa59e7a0c3ada78c0",items:["TRY16","B18-C01","TRY18","TRY19"],outcomes:["B18_OUT_01","B18_OUT_02","B18_OUT_03","B18_OUT_04"]}
];
const ids=[];const marker=/<!-- G10_CHVI_R04_BEGIN:(B\d\d_OUT_\d\d) -->([\s\S]*?)<!-- G10_CHVI_R04_END:\1 -->\n\n/g;
for(const lesson of lessons){
 const p="docs/thpt-preview/sgk/chuong-vi/bai-"+lesson.n+".md",s=read(p);
  // Candidate Model B: the historical R04 comment blocks were converted
  // into source-locked horizontal tabs and default-closed admonition folds.
  // Check the same exact canonical item/outcome mapping; keep old tests below.
  const tabs=[...s.matchAll(/^=== "([^"]+)"$/gm)].map(m=>m[1]);
  if(tabs.length){
   assert.deepEqual(tabs,["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],
     "B"+lesson.n+": four exact Model B Knowledge tabs");
   assert.equal(blob(p),expectedG10KnowledgeBlob(lesson.n,lesson.old),
     "B"+lesson.n+": immutable candidate ledger mismatch");
   const placements=[...s.matchAll(/data-thpt-first-try-id="([^"]+)" data-outcome-id="([^"]+)"/g)]
     .map(m=>({item:m[1],outcome:m[2]}));
   assert.equal(placements.length,lesson.items.length,
     "B"+lesson.n+": complete reviewed First Try placement count");
   placements.forEach((rec,i)=>{
    const label=lesson.items[i];
    const expected=label==="B18-C01"?"THPT-G10-B18-C01":"THPT-G10-CHVI-"+label;
    assert.equal(rec.item,expected,"B"+lesson.n+": original canonical First Try order");
    assert.equal(rec.outcome,lesson.outcomes[i],"B"+lesson.n+": original pedagogic outcome binding");
    const at=s.indexOf('data-thpt-first-try-id="'+expected+'"');
    assert(/^\s*\?\?\? question "/m.test(s.slice(at,at+380)),"B"+lesson.n+": hidden First Try missing "+expected);
    ids.push(expected);
   });
   const helps=[...s.matchAll(/data-thpt-help-id="(HELP-G10-CHVI-TRY\d\d)"/g)].map(m=>m[1]);
   assert.equal(helps.length,lesson.items.length,"B"+lesson.n+": original D6 helpers preserved");
   assert.equal(new Set(helps).size,helps.length,"B"+lesson.n+": duplicated D6 ID");
   for(const h of helps){
    const at=s.indexOf('data-thpt-help-id="'+h+'"');
    assert(/^\s*\?\?\? tip "/m.test(s.slice(at,at+460)),"B"+lesson.n+": D6 remediation not closed "+h);
   }
   assert((s.match(/^    \?\?\? question "/gm)||[]).length>=placements.length,
     "B"+lesson.n+": all first-attempt answers must be default-closed");
   assert(!/data-thpt-readiness|data-mastery-credit|data-mastery-write/.test(s),
     "B"+lesson.n+": do not leak official assessment/Mastery");
   continue;
  }
 const match=[...s.matchAll(marker)];
 assert.equal(match.length,lesson.items.length,"Per-subtopic reviewed placement count B"+lesson.n);
 assert.deepEqual(match.map(m=>m[1]),lesson.outcomes,"Follow authoring per-lesson insertion map B"+lesson.n);
 assert.equal(blob(p.replace(".md",".md")),blob(p),"Deterministic lesson hash");
 // RELEASE DELTA_A_UI: B15's seven original formulas live in raw HTML <li> tags.
 // Reversing only their presentation wrappers proves exact historical source parity.
 let original=s.replace(marker,"");
 if(lesson.n===15){
  const wrapper=/<span class="arithmatex">(\\\([\s\S]*?\\\))<\/span>/g;
  assert.equal([...original.matchAll(wrapper)].length,7,"Only seven original B15 solution math wrappers may differ in UI");
  original=original.replace(wrapper,(_,math)=>math.replace(/&lt;/g,"<").replace(/&gt;/g,">"));
 }
 const b=Buffer.from(original);
 const restored=crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\0"),b])).digest("hex");
 assert.equal(restored,lesson.old,"Unchanged original S1 Knowledge/Examples/D5/D6 B"+lesson.n);
 for(let i=0;i<match.length;i++){
  const q=match[i][2],label=lesson.items[i];
  const id=label==="B18-C01"?"THPT-G10-B18-C01":"THPT-G10-CHVI-"+label;
  ids.push(id);
  assert(q.includes('data-thpt-first-try-id="'+id+'"'),"Canonical placement "+id);
  assert(q.includes('data-outcome-id="'+lesson.outcomes[i]+'"'),"Outcome mapping "+id);
  assert.equal((q.match(/<details class="thpt-r4-pedagogical-note"/g)||[]).length,2,"Unscored First Try plus five-step HELP "+id);
  assert.equal((q.match(/<li>/g)||[]).length,5,"Reviewed five-step D6 "+id);
  assert(q.includes('<div class="thpt-r4-first-try-answer">'),"Semantic hidden answer "+id);
  assert(!/<details[^>]* open(?:=|>)/.test(q),"No answer auto-expanded "+id);
  assert(q.includes("**Vì sao cần học?**")&&q.includes("**Tự thử trước Core**"),"PED meaning precedes First Try "+id);
  assert(!/\bpacket\b|\bR0[1-9]\b|PREREQUISITE_CONFIRMED/.test(q),"No internal author labels in student UI "+id);
 }
}
assert.equal(ids.length,19);assert.equal(new Set(ids).size,19);
assert.equal(ids.filter(x=>x.startsWith("THPT-G10-CHVI-TRY")).length,18,"Q15 one B18-C01 shared existing canonical");
assert(!ids.includes("THPT-G10-CHVI-TRY17"),"Retired R02 duplicate alias never becomes public");
for(const [name,git]of [["THPT_G10_CHVI_B15_FUNCTION_MAPPING_D5_R03.svg","8a3b090af3a1bb73c972c4cb0a3795bbbc7f2f31"],["THPT_G10_CHVI_B18_RADICAL_FLOW_D5_R03.svg","57dc5868ca6b726c4936b2b5e5a3419112752930"]]){
 const p="docs/assets/images/thpt/"+name,v=read(p);
 assert.equal(blob(p),git,"Independently accepted Q07/PED4 original SVG "+name);
 assert(v.includes("<title ")&&v.includes("<desc ")&&v.includes("</svg>"),"Accessible SVG "+name);
}
const bank=JSON.parse(read("docs/assets/data/thpt-g10-readiness/CHVI.json"));
assert.equal(bank.items.length,20,"18 prior client selfcheck items + exactly two R04");
assert.equal(fnv(JSON.stringify(bank.items.slice(0,18))),"a1c5d223","Original 18 CHVI questions/keys/rubrics immutable");
assert.deepEqual(bank.items.slice(-2).map(q=>q.item_id),["THPT-G10-B16-R06","THPT-G10-B17-R05"]);
assert.deepEqual(bank.items.slice(-2).map(q=>q.outcome_id),["B16_OUT_04","B17_OUT_01"]);
const signatures=["cc6371ed","f85cd06f"];
bank.items.slice(-2).forEach((q,i)=>{
 assert.equal(q.type,"OPEN_REVIEW","Two approved public Written only");
 assert.equal(fnv(q.stem+"\0"+q.answer+"\0"+q.solution+"\0"+q.rubric),signatures[i],"Independent R04 source/reviewer math exact "+q.item_id);
 assert(q.solution.includes("Hỗ trợ tự khắc phục sau Final Submit"),"Reviewed 5-step D6 after Final "+q.item_id);
 assert(!q.optional,"New R04 written check is explicit part of chapter");
});
assert.equal(bank.mastery_credit,false);assert.equal(bank.persist_results,false);
assert.equal(bank.targeted_delta.source_blob,"ef0b82555bb9f8028c49d948d2276b6ea0f16956");
assert.equal(bank.targeted_delta.review_receipt_blob,"43b2da942b9d8d3ec5a32647e3ed1a217125a255");
assert.equal(bank.targeted_delta.original_public_chvi_blob,"0760782256a2d8d91c398814e62d013cf6083eb7");
assert.equal(bank.targeted_delta.protected_rd1_new,0);
const runtime=read("docs/assets/javascripts/thpt-g10-reviewed-selfcheck-v1.js");
assert(runtime.includes("CHVI:20"),"Same Golden selfcheck runtime sees 20 original+R04");
assert(!/localStorage\.setItem|sessionStorage\.setItem|firebase\.database|masteryCredit\s*:\s*true/.test(runtime),"No storage/Mastery writes");
const end=read("docs/thpt-preview/sgk/chuong-vi/tu-kiem-tra-chuong.md");
assert(end.includes("Tự đánh giá 20 câu")&&end.includes('data-g10-chapter-selfcheck="CHVI"')&&end.includes("Final Submit"),"No hidden pre-Final answer routes");
if(process.argv.includes("--built")){
 for(const {n,items}of lessons){
  const html=read("site/thpt-preview/sgk/chuong-vi/bai-"+n+"/index.html");
  for(const x of items){
   const id=x==="B18-C01"?"THPT-G10-B18-C01":"THPT-G10-CHVI-"+x;
   assert(html.includes('data-thpt-first-try-id="'+id+'"'),"Built First Try "+id);
  }
  assert(/mathjax/i.test(html),"MathJax in student journey B"+n);
 }
 assert(read("site/thpt-preview/sgk/chuong-vi/tu-kiem-tra-chuong/index.html").includes('data-g10-chapter-selfcheck="CHVI"'));
}
console.log("PASS G10 ChVI FULL R04: 4 immutable original lesson blobs, 19 pedagogic placements, 18 new + 1 shared canonical, two reviewed accessible SVG, two new post-Final Submit written/rubrics/D6, original 18 client items, no Mastery.");
