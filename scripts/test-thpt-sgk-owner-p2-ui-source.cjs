"use strict";
/* RELEASE DELTA_A_UI source contract for the owner P2 four-stage fixes.
 * Does not read or write private RD1, learner progress, or academic item banks.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const roman=["i","ii","iii","iv","v","vi","vii","viii","ix"];
const ends={10:[2,4,6,11,14,18,22,25,27],11:[4,7,9,14,17,21,27,30,33],12:[5,8,10,13,17,19]};
let lessons=0;
for(const [raw,bounds]of Object.entries(ends)){
 const grade=Number(raw),base="docs/thpt-preview/sgk/"+(grade===10?"":"lop-"+grade+"/");
 for(let n=1;n<=bounds.at(-1);n++){
  const index=bounds.findIndex(end=>n<=end),p=base+"chuong-"+roman[index]+"/bai-"+n+".md";
  assert(fs.existsSync(path.join(root,p)),"Missing original SGK lesson "+p);
  const s=read(p);
  assert(/^# (?:Toán |Bài )/.test(s),"Lesson must retain original heading "+p);
  lessons++;
 }
}
assert.equal(lessons,79,"Exact S1 SGK route catalog");
for(const p of ["mkdocs.yml","mkdocs.thpt-preview.yml"]){
 const s=read(p);
 assert(s.includes("assets/javascripts/thpt-sgk-lesson-nav-v1.js"),p+" nav JS missing");
 assert(s.includes("assets/stylesheets/thpt-sgk-lesson-nav-v1.css"),p+" nav CSS missing");
}
const nav=read("docs/assets/javascripts/thpt-sgk-lesson-nav-v1.js");
assert(nav.includes("data.sgk")===false,"Scope must not use student data keys");
assert(nav.includes("thpt-preview\\/sgk")&&nav.includes("thpt-g10-knowledge-ap1"),"Route scope and G10 AP1 required");
for(const label of ["← Bài trước","Bài sau →","Core và Luyện tập","Tự kiểm tra"])assert(nav.includes(label),"Nav item missing "+label);
assert(!/localStorage|sessionStorage|firebase|setDoc|SkillMastery/.test(nav),"UI navigation cannot mutate learner state");
const g10=read("docs/assets/javascripts/thpt-g10-reviewed-selfcheck-v1.js"),
      g11=read("docs/assets/javascripts/thpt-g11-reviewed-selfcheck-v1.js");
const snippet=s=>s.slice(s.indexOf("  const rich=(parent,value)=>"),s.indexOf("  const mcqKey=q=>"));
assert(snippet(g10).length>1500,"Reviewed G10 safe presentation renderer absent");
assert(g11.includes(snippet(g10)),"G11 nine chapters must use exact G10 safe TeX renderer");
for(const roman of ["iv","v","vi","vii","viii","ix"]){
 const s=read("docs/thpt-preview/sgk/lop-11/chuong-"+roman+"/tu-kiem-tra-chuong.md");
 assert(!s.includes("SGK_CHAPTER_READINESS"),"Machine assessment key leaked into learner UI Ch"+roman);
}
const supp=read("docs/assets/javascripts/thpt-g11-supplement-p99-p109-r00.js");
assert(supp.includes("const compactDeck=")&&supp.includes('compactDeck(form,[')&&supp.includes("data-g11-supp-view"),
 "Supplement Core/Practice/Written/public self-check pagers missing");
assert(supp.includes("if(!input.value.trim())")&&supp.includes("if(button.disabled)return"),"Original submit guards must survive");
assert(!/(?:localStorage|sessionStorage)\.(?:setItem|removeItem|clear)\s*\(|\b(?:setDoc|updateDoc|addDoc|getFirestore)\s*\(/.test(supp),"Supplement must not gain persistence writes");
console.log("PASS P2 SGK source: 79 original lessons, both MkDocs bundles, one nav, G11 exact source-safe TeX, public self-check and supplemental pagers.");
