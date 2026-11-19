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
const formulaLock={B11:{count:168,hash:"4864b93648eb37f6"},
                   B12:{count:165,hash:"3116ae4e24ba7fc8"}};
for(const [id,chapter,n] of [["B11","iv",11],["B12","v",12]]){
 const lesson="docs/thpt-preview/sgk/chuong-"+chapter+"/bai-"+n+".md";
 const master="prototypes/thpt/content-drafts/THPT_G10_CH"+chapter.toUpperCase()+"_"+id+"_CANONICAL.md";
 const current=fs.readFileSync(path.join(root,lesson),"utf8");
 const manuscript=fs.readFileSync(path.join(root,master),"utf8");
 assert.equal(field(id+"_PREVIOUS_SOURCE_BLOB"),prior(id+"_SOURCE_CURRENT_BLOB"),
  id+" previous published learner source SHA must be locked by R01 receipt");
 assert.equal(field(id+"_PREVIOUS_CANONICAL_BLOB"),prior(id+"_CANONICAL_CURRENT_BLOB"),
  id+" previous published canonical SHA must be locked by R01 receipt");
 assert.equal(gitblob(current),field(id+"_SOURCE_CURRENT_BLOB"),id+" exact learner-source SHA");
 assert.equal(gitblob(manuscript),field(id+"_CANONICAL_CURRENT_BLOB"),id+" single current canonical SHA");
 const a="<!-- BEGIN_"+id+"_KNOWLEDGE_MARKDOWN -->\n",b="\n<!-- END_"+id+"_KNOWLEDGE_MARKDOWN -->";
 assert.equal(manuscript.split(a)[1]?.split(b)[0],current,id+" canonical Section A must byte-equal learner Markdown");
 const stream=tex(current);
 assert.equal(stream.length,formulaLock[id].count,id+" full authored math token count");
 assert.equal(fnv(stream.join("\u241f")),formulaLock[id].hash,id+" changed any pre-reviewed TeX token");
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
assert.equal(gitblob(css),get13("CANDIDATE_GOLDEN_CSS_BLOB"),
 "B13 candidate CSS must match exact Q18 release receipt; prior B12 remains frozen");
assert(!/!!! (example|abstract|info)/.test(
 fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-v/bai-12.md"),"utf8")),
 "B12 no violet/cyan default MkDocs native colored boxes");
console.log("PASS B11/B12 one canonical source parity; B10 components; 333 original math expressions; no per-lesson overlay");
