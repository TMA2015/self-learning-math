#!/usr/bin/env node
"use strict";
/* Owner P2 source-first DELTA_A_UI — one canonical per lesson, no overlay.
 * Independently compared original and revised formula token streams directly
 * using original immutable GitHub blob references (receipt below), then locked
 * the equivalent formula fingerprints. CI needs no re-fetch of historic blobs
 * absent from shallow/sparse checkout. Academic reviewer PASS not self-issued.
 */
const fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto"),
 assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const receipt=fs.readFileSync(path.join(root,
 "prototypes/thpt/ux795/G10_B11_B12_OWNER_P2_GOLDEN_COMPONENT_PARITY_DELTA_A_R02_20261118.md"),"utf8");
const field=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
const previous=fs.readFileSync(path.join(root,
 "prototypes/thpt/ux795/G10_B11_B12_OWNER_P2_SOURCE_FIRST_DELTA_A_R01_20261118.md"),"utf8");
const currentUi=fs.readFileSync(path.join(root,"prototypes/thpt/ux795/G10_B12_B13_DUPLICATE_DE_HEADING_DELTA_A_R01_20261119.md"),"utf8");
const ui=k=>currentUi.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
const placement=fs.readFileSync(path.join(root,
 "prototypes/thpt/ux795/G10_CHIV_CHV_B07_B14_KIEM_LOI_PLACEMENT_Q18_R01_20261120.md"),"utf8");
assert(placement.includes("DELTA_C_ACADEMIC_MATERIAL")&&
 placement.includes("G10-B07-B14-KIEM-LOI-PLACEMENT-Q18-R01-20261120"),
 "Signed 20/11 source is a material D6 change; no UI-only reclassification");
const placementSha=n=>{
 const rows=placement.split("\n").filter(line=>line.startsWith("| B"+n+" | "));
 assert.equal(rows.length,1,"B"+n+" exactly one approved source successor receipt");
 const blobs=[...rows[0].matchAll(/`([0-9a-f]{40})`/g)].map(m=>m[1]);
 assert.equal(blobs.length,2,"B"+n+" needs both previous/current exact blobs");
 assert.notEqual(blobs[0],blobs[1],"B"+n+" signed change must not be a no-op");
 return {previous:blobs[0],current:blobs[1]};
};
assert.equal(ui("B12_PREVIOUS_SOURCE_BLOB"),field("B12_SOURCE_CURRENT_BLOB"),
 "B12 signed predecessor current before owner duplicate-heading Delta A");
assert.equal(ui("B12_PREVIOUS_CANONICAL_BLOB"),field("B12_CANONICAL_CURRENT_BLOB"),
 "B12 signed predecessor canonical before owner duplicate-heading Delta A");
const prior=k=>previous.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
const gitblob=s=>{
 const b=Buffer.from(s,"utf8");
 return crypto.createHash("sha1").update(Buffer.from("blob "+b.length+"\0")).update(b).digest("hex");
};
const tex=s=>[...s.matchAll(/\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/g)].map(x=>x[0]);
const fnv=s=>{
 let h=0xcbf29ce484222325n;
 for(let i=0;i<s.length;i++)h=(h^BigInt(s.charCodeAt(i)))*0x100000001b3n&0xffffffffffffffffn;
 return h.toString(16).padStart(16,"0");
};
// First SHA/fingerprint remains the immutable owner-P2 snapshot; second is
// exact 20/11 signed HELP-context source. Neither is a new Academic verdict.
const formulaLock={B11:{count:168,old:"4864b93648eb37f6",current:"eba599d1087c95a8"},
                   B12:{count:165,old:"3116ae4e24ba7fc8",current:"1b5638a3d7c9c893"}};
for(const [id,chapter,n] of [["B11","iv",11],["B12","v",12]]){
 const lesson="docs/thpt-preview/sgk/chuong-"+chapter+"/bai-"+n+".md";
 const master="prototypes/thpt/content-drafts/THPT_G10_CH"+chapter.toUpperCase()+"_"+id+"_CANONICAL.md";
 const current=fs.readFileSync(path.join(root,lesson),"utf8");
 const manuscript=fs.readFileSync(path.join(root,master),"utf8");
 assert.equal(field(id+"_PREVIOUS_SOURCE_BLOB"),prior(id+"_SOURCE_CURRENT_BLOB"),
  id+" previous published learner source SHA must be locked by R01 receipt");
 assert.equal(field(id+"_PREVIOUS_CANONICAL_BLOB"),prior(id+"_CANONICAL_CURRENT_BLOB"),
  id+" previous published canonical SHA must be locked by R01 receipt");
 const original=id==="B12"?ui("B12_CURRENT_SOURCE_BLOB"):field(id+"_SOURCE_CURRENT_BLOB");
 const earlierCanonical=id==="B12"?ui("B12_CURRENT_CANONICAL_BLOB"):field(id+"_CANONICAL_CURRENT_BLOB");
 const transition=placementSha(n);
 assert.equal(transition.previous,original,id+" immutable owner P2 source predecessor");
 const expectedCanonical={B11:"22228598320ee81549c4ee9783559e2d4ff9476c",
  B12:"1d11fadde3b592d68b328eb448318ac52d8a8c95"}[id];
 // Historical parent and its manuscript must remain source locked in the
 // original 18–19 Nov receipts while current manuscript follows 20 Nov receipt.
 assert(/^[a-f0-9]{40}$/.test(earlierCanonical),id+" historical manuscript SHA");
 assert.equal(gitblob(current),transition.current,id+" signed current learner source SHA");
 assert.equal(gitblob(manuscript),expectedCanonical,id+" current signed manuscript SHA");
 const a="<!-- BEGIN_"+id+"_KNOWLEDGE_MARKDOWN -->\n",b="\n<!-- END_"+id+"_KNOWLEDGE_MARKDOWN -->";
 assert.equal(manuscript.split(a)[1]?.split(b)[0],current,id+" canonical Section A must byte-equal learner Markdown");
 const stream=tex(current);
 assert.equal(stream.length,formulaLock[id].count,id+" full authored math token count");
 assert.equal(fnv(stream.join("\u241f")),formulaLock[id].current,
  id+" 20/11 signed TeX stream changed outside approved Q18 material delta");
 assert.notEqual(formulaLock[id].old,formulaLock[id].current,
  id+" original P2 formula fingerprint must remain a distinct historical baseline");
 if(id==="B11"){
  for(const expr of ["\\(60^\\circ\\)","\\(4\\,\\mathrm N\\)",
   "\\(|\\vec F_1+\\vec F_2|^2=4^2+4^2+2\\cdot4\\cdot4\\cos60^\\circ=48\\)",
   "\\(4\\sqrt3\\,\\mathrm N\\)"])
   assert(current.includes(expr),"B11 material-delta force example missing "+expr);
  const forceAnchor='data-thpt-help-id="HELP-G10-CHIV-FORCE-TR01"';
  const forceStart=current.indexOf(forceAnchor);
  assert(forceStart>=0,"B11 FORCE HELP canonical anchor must be preserved");
  const rest=current.slice(forceStart);
  const nextHeading=rest.search(/\n    #{3,4} |\n=== "/);
  const forceHelp=nextHeading<0?rest:rest.slice(0,nextHeading);
  assert(forceHelp.includes("\\(4\\sqrt3\\,\\mathrm N\\)")&&
   forceHelp.includes("\\(60^\\circ\\)")&&
   !forceHelp.includes("\\(120^\\circ\\)"),
   "B11 corrected FORCE HELP must use 4N/60 degrees; unrelated example 6N/120 remains valid");
 }else{
  for(const expr of ["\\(\\sqrt[3]{11}\\)","\\(11^{(1/3)}\\)",
   "\\(2{,}224\\)","\\(2{,}2235^3<11<2{,}2245^3\\)"])
   assert(current.includes(expr),"B12 owner-checked cube-root-11 correction missing "+expr);
  assert(!current.includes("\\(\\sqrt[3]{7}\\)"),
   "B12 legacy cube-root-7 HELP not the related First Try");
 }
 const ex=current.split('=== "Ví dụ"')[1].split('=== "Lỗi thường gặp"')[0];
 for(const [label,re] of [
  ["B10 neutral solution component",/<div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ">/g],
  ["Phân tích",/\*\*Phân tích:\*\*/g],["Giải",/<strong>Giải:<\/strong>/g],
  ["Kiểm lại",/\*\*Kiểm lại:\*\*/g],["Đề",/\*\*Đề:\*\*/g]]){
  assert.equal((ex.match(re)||[]).length,4,id+" needs four "+label+" placements");
 }
 assert(!/Vì sao chọn phương pháp:|Vì sao chọn cách này:|Chọn phương pháp:|Chọn mô hình:/.test(ex),
  id+" must not retain inconsistent source labels");
 if(id==="B12"){
  const official=current.split('=== "Kiến thức SGK"')[1].split('=== "Ví dụ"')[0];
  assert.equal((official.match(/class="thpt-r4-knowledge-conclusion thpt-r4-concept-card"/g)||[]).length,3,
   "B12 3 formal cards must reuse exact B10 Golden concept component");
  assert.equal((official.match(/class="thpt-r4-knowledge-conclusion thpt-r4-rule-card"/g)||[]).length,1,
   "B12 original rounding rule must reuse exact B10 Golden rule component");
  assert(!/!!! (abstract|info)/.test(official),"No default MkDocs formal admonition tint");
  for(const t of ["min-width:600px","780px","overflow-x:auto"])
   assert(current.includes(t),"B12 source-authored interval-figure legibility "+t);
 }
}
for(const f of ["docs/assets/javascripts/thpt-g10-b11-b12-owner-p2-fix.js",
 "docs/assets/stylesheets/thpt-g10-b11-b12-owner-p2-fix.css",
 "hooks/g10_b11_b12_p2_asset_scope.py"])
 assert(!fs.existsSync(path.join(root,f)),"No per-lesson patch overlay allowed: "+f);
assert.equal(field("GOLDEN_CSS_PREVIOUS_BLOB"),"818866d2ea73b3252649f78926fe3abd343abc64",
 "Previously accepted shared CSS snapshot must be immutable");
const css=fs.readFileSync(path.join(root,"docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css"),"utf8");
const b13Marker="/* G10 ChV B13 · exact B10/B12 Golden palette";
const at=css.indexOf(b13Marker);
assert(at>0&&css.indexOf(b13Marker,at+1)<0,
 "B13 scoped palette must occur exactly once after all B12 owner-signed rules");
assert.equal(gitblob(css.slice(0,at-1)),field("GOLDEN_CSS_CURRENT_BLOB"),
 "B01–B12 owner accepted Golden CSS must remain immutable prefix");
const r13=fs.readFileSync(path.join(root,
 "prototypes/thpt/ux795/G10_CHV_B13_S1_Q18_GOLDEN_ENRICHMENT_DELTA_R01_20261119.md"),"utf8");
const get13=k=>r13.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
const r14=fs.readFileSync(path.join(root,
 "prototypes/thpt/ux795/G10_CHV_B14_Q18_GOLDEN_ENRICHMENT_DELTA_R01_20261119.md"),"utf8");
const get14=k=>r14.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
const b14Marker="/* G10 ChV B14 · scoped X-C RELEASE Golden";
const at14=css.indexOf(b14Marker);
assert(at14>0&&css.indexOf(b14Marker,at14+1)<0,"B14 only one scoped CSS appendix");
assert.equal(gitblob(css.slice(0,at14-1)),get13("CANDIDATE_GOLDEN_CSS_BLOB"),
 "B13 fully owner-P2 accepted CSS must remain exact prior prefix");
assert.equal(get14("G10_B01_B13_FROZEN_CSS_BLOB"),get13("CANDIDATE_GOLDEN_CSS_BLOB"),
 "B14 signed previous CSS cannot disagree with B13 reviewed receipt");
assert.equal(gitblob(require("./test-g10-b15-golden-css-source.cjs").publishedB14Ancestor(css)),get14("CANDIDATE_GOLDEN_CSS_BLOB"),
 "B14 candidate CSS must match signed X-C receipt without altering accepted prefix");
assert(!/!!! (example|abstract|info)/.test(
 fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-v/bai-12.md"),"utf8")),
 "B12 no violet/cyan default MkDocs native colored boxes");
console.log("PASS B11/B12 one canonical source parity; B10 components; 333 original math expressions; no per-lesson overlay");
