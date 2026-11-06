"use strict";
/* RELEASE-only source and website contract: G11 SGK Tập Hai 99–109.
 * No RD1, no academic rewrite. Compare every canonical PUBLIC stem/answer
 * against the approved immutable source files by exact literal bytes.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs"),crypto=require("node:crypto");
const read=path=>fs.readFileSync(path,"utf8");
const sha=path=>{const b=fs.readFileSync(path);return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex")};
const prefix="docs/assets/data/thpt-g11-supplement-p99-p109-public-r00.json";
const bank=JSON.parse(read(prefix));
const original=[
 {path:"prototypes/thpt/review-packets/Temp_G11_SGK_EXPERIENCE_P99_P104_PUBLIC_D1_D6_AUTHOR_R00_20261102.md",sha:"7d369b8e6c3aa25fcfcbe5e10418d87f59d4b8e5"},
 {path:"prototypes/thpt/review-packets/Temp_G11_SGK_YEAR_END_P105_P109_PUBLIC_D1_D6_AUTHOR_R00_20261102.md",sha:"f78e1f4bcb477c995ffdb1281d366bf3b0e88a59"}
];
assert.equal(bank.packet_id,"G11-SGK-SUPPLEMENT-P99-P109-R00");
assert.equal(bank.mode,"CLIENT_SELF_CHECK_NO_MASTERY");
assert.equal(bank.source_blob,"b848436621c17c89919e3d3f93519d12612fe039");
assert.equal(bank.receipt_blob,"3183783afc69d263328a55f937ba22e6deb1f34d");
assert.equal(sha("prototypes/thpt/content-drafts/G11_SGK_SUPPLEMENT_P99_P109_CANONICAL_R00_SOURCE_LOCK.md"),bank.source_blob);
assert.equal(sha("prototypes/thpt/review-packets/G11_SGK_SUPPLEMENT_P99_P109_R00_INDEPENDENT_ACADEMIC_PED_PASS_SOURCE_RECEIPT_20261102.md"),bank.receipt_blob);
const sections=text=>{
 const rows=text.split(/\r?\n/),items=[];let current=null;
 for(const line of rows){
  if(/^## /.test(line)){if(current){current.body=current.body.join("\n").trim();items.push(current);current=null}}
  else if(/^### /.test(line)){if(current){current.body=current.body.join("\n").trim();items.push(current)}
   current={head:line.slice(4),body:[]}}
  else if(current)current.body.push(line);
 }
 if(current){current.body=current.body.join("\n").trim();items.push(current)}
 return items;
};
const get=body=>{
 const fields={};for(const line of body.split("\n")){const m=line.match(/^\*\*([^*]+):\*\*\s*(.*)$/);
 if(m)fields[m[1]]=m[2]}return fields;
};
const sources=original.flatMap((o,i)=>{
 assert.equal(sha(o.path),o.sha,"Original author source blob parity");
 assert.equal(bank.author_components[i],o.sha);
 return sections(read(o.path));
});
const byId=new Map(sources.filter(s=>/^THPT-G11-/.test(s.head)).map(s=>[s.head.split("|")[0].trim(),s]));
assert.equal(bank.items.length,52);assert.equal(bank.written.length,16);
assert.equal(bank.examples.length,28);assert.equal(bank.help.length,23);assert.equal(bank.figures.length,8);
assert.equal(bank.experience.length,2);assert.equal(bank.year.length,10);
assert.equal(new Set([...bank.items,...bank.written].map(q=>q.item_id)).size,68,"No duplicate canonical public ID");
const outcomes=new Set(bank.items.map(q=>q.outcome_id));
assert.equal(outcomes.size,22,"22 RD0 outcomes");
const seen=new Set();
for(const q of [...bank.items,...bank.written]){
 const s=byId.get(q.item_id);assert(s,"Missing original item "+q.item_id);
 const fields=get(s.body);
 const stem=Object.entries(fields).find(([k])=>q.placement==="SGK_WRITTEN"?k.startsWith("Đề tự luận"):k==="Câu hỏi")?.[1];
 const answer=Object.entries(fields).find(([k])=>q.placement==="SGK_WRITTEN"?k.startsWith("Đáp án tự mở")||k.startsWith("Lời giải chuẩn"):k.startsWith("Đáp án"))?.[1];
 assert.equal(q.stem,stem,q.item_id+" stem changed");
 assert.equal(q.answer,answer,q.item_id+" answer changed");
 if(q.placement==="SGK_WRITTEN"){
  const rubric=Object.entries(fields).find(([k])=>k.startsWith("Rubric /4"))?.[1];
  assert.equal(q.rubric,rubric,q.item_id+" rubric changed");
 }
 assert.equal(q.outcome_id,s.head.match(/skill_id=([^ ]+)/)?.[1]);
 assert.equal(q.role,s.head.match(/role=([A-Z_]+)/)?.[1]);
 assert.equal(q.placement,s.head.match(/placement=([A-Z_]+)/)?.[1]);
 seen.add(q.item_id);
}
const selfCandidates=bank.items.filter(q=>q.role!=="SGK_CORE");
assert.equal(new Set(selfCandidates.map(q=>q.outcome_id)).size,22);
for(const h of bank.help){
 const source=sources.find(s=>s.head.startsWith(h.help_id+" |"));
 assert(source,h.help_id);
 assert.equal(h.return_item,source.head.match(/return_item=([^ ]+)/)?.[1]);
 assert(bank.items.some(q=>q.item_id===h.return_item),h.help_id+" return source");
 assert.equal(h.steps.length,5,h.help_id+" D6 five steps");
}
const figMap={
 "FIG-G11-SUPP-E01-01":"11c1c4f741618196e5d6f3782ef6cd4dc3956934",
 "FIG-G11-SUPP-E01-02":"a11fb6984ba634f8f3eab32e239e670d9cf55884",
 "FIG-G11-SUPP-E02-01":"5aa8d1e7f7a1830198ad9006cd507a547d7aeca4",
 "FIG-G11-SUPP-E02-02":"7060dba434f209628399cc70d432a4580e439b7a",
 "FIG-G11-SUPP-E02-03":"5331b822907dc04e1017462bf1cf8bb4179961b9",
 "FIG-G11-YR-01":"281989c0bafdca415b98f422f9b2b27c6882d445",
 "FIG-G11-YR-02":"1eef534b5f4434b1e2c8dd4f1fde73557d719754",
 "FIG-G11-YR-03":"69862b21745e192f5eac200fbd9ab6502e8fa244"
};
for(const fig of bank.figures){
 assert.equal(sha("docs/assets/images/thpt/"+fig.src),figMap[fig.figure_id],"published SVG exact blob");
 const originalPath="prototypes/thpt/review-packets/Temp_"+fig.src;
 assert.equal(sha(originalPath),figMap[fig.figure_id],"approved original SVG blob");
}
const dir="docs/thpt-preview/sgk/lop-11/bo-sung/";
const pages=["index","trai-nghiem-e01","trai-nghiem-e02","on-tap-cuoi-nam","luyen-tap","tu-luan","tu-kiem-tra"];
for(const p of pages)assert(fs.existsSync(dir+p+".md"),"Missing SGK supplement page "+p);
const quiz=read(dir+"tu-kiem-tra.md");assert(quiz.includes('data-g11-supp-view="SELFCHECK"'));
const js=read("docs/assets/javascripts/thpt-g11-supplement-p99-p109-r00.js");
assert(js.includes("data-g11-supp-view")&&js.includes("data.g11SuppBound")===false);
for(const token of ["Final Submit","g11SupplementFinal","if(button.disabled)return","if(!input.value.trim())","textarea.disabled=true","button.disabled=true"])assert(js.includes(token),"Missing Q16 display safeguard "+token);
for(const denied of ["localStorage.setItem(","sessionStorage.setItem(","SkillMastery","SGK_CHAPTER_READINESS","/api/","firebase."])assert(!js.includes(denied),"No local learner mastery or private test storage: "+denied);
assert(!js.includes(".innerHTML"),"No unescaped HTML in supplemental UI");
for(const config of ["mkdocs.yml","mkdocs.thpt-preview.yml"]){
 const txt=read(config);
 assert(txt.includes("assets/javascripts/thpt-g11-supplement-p99-p109-r00.js"));
 assert(txt.includes("assets/stylesheets/thpt-g11-supplement-p99-p109-r00.css"));
 assert(txt.includes("thpt-preview/sgk/lop-11/bo-sung/index.md"));
}
assert(read("docs/thpt-preview/sgk/index.md").includes('data-thpt-sgk-supplement'));

const menu=read("mkdocs.thpt-preview.yml");
assert(menu.includes("Hoạt động thực hành trải nghiệm · Trang 99–104:"));
assert(menu.includes("Bài tập ôn tập cuối năm · Trang 105–109:"));
assert(!menu.includes("Bổ sung SGK Tập Hai ·"),"No technical package label in student navigation");
const home=read(dir+"index.md");
assert(home.includes("Hoạt động thực hành trải nghiệm")&&home.includes("Bài tập ôn tập cuối năm"));
assert(!home.includes("Bổ sung SGK"),"No technical package label in student heading");
for(const [p,view] of [["trai-nghiem-e01.md","E01"],["trai-nghiem-e02.md","E02"],["on-tap-cuoi-nam.md","YEAR"]]){
 assert(read(dir+p).includes('data-g11-supp-view="'+view+'"'),"Original course view remains "+view);
}
assert(js.includes("const written=bank.written.filter(q=>groupOf(q)===topic)"),"Written shares original bank");
assert(js.includes('const practiceCards=practiceItems.map((q,i)=>exerciseCard(q,"formative",i+1))')&&js.includes("practiceCards.forEach(card=>practiceSection.append(card))")&&js.includes('compactDeck(practiceSection,practiceCards,"Luyện tập và vận dụng")'),"Inline Practice uses original bank with one-question layout");
assert(js.includes('const coreCards=core.map((q,i)=>exerciseCard(q,"formative",i+1))')&&js.includes("coreCards.forEach(card=>coreSection.append(card))")&&js.includes('compactDeck(coreSection,coreCards,"Core")'),"Inline Core uses original bank with one-question layout");
assert(js.includes('a.href="#"+idAnchor(h.return_item)'),"D6 same page return link");
assert(js.includes("card.dataset.canonicalItem=q.item_id"),"Canonical IDs remain on client elements");
assert(!js.includes('mk("h3","",q.item_id)'),"Hide author technical IDs from learners");

console.log("PASS G11 SGK pp99–109 source lock & release: 22 outcomes, 52 canonical formative, 16 shared Written/Anchor, 28 examples, 8 exact SVG, 23 D6, 7 paths, Q16 public-only no storage.");
