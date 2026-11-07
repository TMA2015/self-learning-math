"use strict";
/* RELEASE-only G10 ChV FULL R03 pre-Core PED1–PED6 and 14 First Try QA.
 * Canonical source from AUTHORING Draft #755: FULL R03 blob
 * ea0de4b484527c2f47e07840c7f00914badd67e7;
 * reviewed PED R02 blob 524124e5b6d3af92130cd05178d3d58d2035b084;
 * original owner independent NotebookLM TXT blob b722ec8a635d915b736bfa0dfe1b48d7a9dd6e9e;
 * composite receipt blob 1b9620cd45172277516b0621cd20f3cb695aceaa.
 * No new private RD1, Mastery, canonical scored item bank, Golden or Firebase change.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const fnv=s=>{let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619)>>>0;return h.toString(16).padStart(8,"0")};
const part="## Trước khi học — hiểu ý nghĩa trước khi nhớ công thức",anchor="## 1. Kiến thức SGK";
const lessons=[
 {n:12,count:4,first:1,bridge:"a86dd77e",suffix:"7e0a79ab"},
 {n:13,count:5,first:5,bridge:"524e983d",suffix:"df2f1086"},
 {n:14,count:5,first:10,bridge:"205f5c9f",suffix:"06b6ea57"}
];
const ids=[];
const labels=["Vì sao cần học?","Em đã biết gì?","Hiểu bản chất trước công thức","Cách đọc hình và hình dung","Vì sao làm theo cách này?","Tự thử trước Core"];
for(const {n,count,first,bridge:expectedBridge,suffix:expectedSuffix}of lessons){
 const p="docs/thpt-preview/sgk/chuong-v/bai-"+n+".md",txt=read(p);
 assert.equal(txt.split(part).length,2,"One pre-Knowledge PED section "+p);
 assert.equal(txt.split(anchor).length,2,"Original Knowledge D1–D6 section preserved "+p);
 const pre=txt.slice(txt.indexOf(part),txt.indexOf(anchor)),old=txt.slice(txt.indexOf(anchor));
 assert.equal(fnv(pre),expectedBridge,"Reviewed learner bridge (PED1–PED6/answer/D6) must remain frozen "+p);
 assert.equal(fnv(old),expectedSuffix,"Original R01 with reviewed B12 R02 figure/HELP remains byte-identical "+p);
 assert(pre.indexOf("**Vì sao cần học?**")<pre.indexOf("**Tự thử trước Core**"),"Concept precedes attempt "+p);
 for(const label of labels)assert.equal(pre.split("**"+label+"**").length-1,count,"Each outcome requires "+label+" "+p);
 const matches=[...pre.matchAll(/<details class="thpt-r4-pedagogical-note" markdown="1" data-ped-first-try="1" data-thpt-first-try-id="(THPT-G10-CHV-TRY\d\d)">/g)];
 assert.equal(matches.length,count,"One voluntary First Try per outcome "+p);
 assert.equal((pre.match(/<summary>Em đã tự thử\? Mở lời giải để đối chiếu<\/summary>/g)||[]).length,count);
 assert.equal((pre.match(/<\/details>/g)||[]).length,count);
 assert.equal((pre.match(/\*\*Đối chiếu kết quả:\*\*/g)||[]).length,count);
 assert.equal((pre.match(/\*\*Giải thích vì sao:\*\*/g)||[]).length,count);
 assert.equal((pre.match(/\*\*Nếu chưa làm được:\*\*/g)||[]).length,count);
 assert.equal((pre.match(/\.\.\/luyen-tap\/\?item=THPT-G10-B\d\d-[CP]\d\d/g)||[]).length,count,"Link only to existing canonical Core/Practice");
 assert(!/\bR0[1-9]\b|HELP-G10|FIG-G10|PREREQUISITE_CONFIRMED|\bPED[1-6] ·|data-mastery-credit=/.test(pre),"No author/admin artifacts or Mastery exposure "+p);
 matches.forEach((m,i)=>{
  const id="THPT-G10-CHV-TRY"+String(first+i).padStart(2,"0");
  assert.equal(m[1],id,"Canonical first-try item_id/placement order "+p);
  ids.push(id);
 });
 assert(old.includes("## 2. Ví dụ")&&old.includes("## 3. Hình minh họa")&&old.includes("## 4. Tự khắc phục lỗi thường gặp"),"Original teaching and D5/D6 remain "+p);
 for(const h of ["01","02"])assert(old.includes("HELP-G10-B"+n+"-"+h),"Original reviewed D6 HELP "+n+"-"+h);
}
assert.equal(ids.length,14);assert.equal(new Set(ids).size,14);
const selfcheck=read("docs/thpt-preview/sgk/chuong-v/tu-kiem-tra-chuong.md");
assert(selfcheck.includes('data-g10-chapter-selfcheck="CHV"')&&selfcheck.includes("Final Submit"),"Preserve existing 18-item public Q16 Final Submit");
const practice=read("docs/thpt-preview/sgk/chuong-v/luyen-tap.md");
assert(practice.includes("data-thpt-open-quiz")&&!practice.includes("data-mastery-credit="),"Golden practice and no Mastery unchanged");
if(process.argv.includes("--built")){
 for(const {n,count,first}of lessons){
  const p="site/thpt-preview/sgk/chuong-v/bai-"+n+"/index.html",html=read(p);
  for(let i=0;i<count;i++)assert(html.includes('data-thpt-first-try-id="THPT-G10-CHV-TRY'+String(first+i).padStart(2,"0")+'"'),"Built learner First Try "+p+" "+i);
  assert(html.includes("mathjax")||html.includes("MathJax"),"Learner MathJax must be present "+p);
 }
}
console.log("PASS G10 ChV FULL R03: 14 canonical First Tries, PED1–PED6, reviewed answers/D6, original B12 R02 and B13/B14 R01 suffixes untouched, Golden/Q16 and no Mastery.");
