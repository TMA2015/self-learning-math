#!/usr/bin/env node
"use strict";
/* Owner P2 18/11/2026: verify source-first Delta A, not a parallel manuscript
 * or an overlay. No user/assessment data, no reviewer-PASS assertion.
 */
const fs=require("node:fs"),cp=require("node:child_process"),
 path=require("node:path"),crypto=require("node:crypto"),
 assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const baseline="2d199c91d431a2969a032973bece87377ab321d9";
const receipt=fs.readFileSync(path.join(root,
 "prototypes/thpt/ux795/G10_B11_B12_OWNER_P2_SOURCE_FIRST_DELTA_A_R01_20261118.md"),"utf8");
const field=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
const gitblob=s=>{
 const b=Buffer.from(s,"utf8");
 return crypto.createHash("sha1").update(Buffer.from("blob "+b.length+"\0")).update(b).digest("hex");
};
function fromBaseline(file){
 return cp.execFileSync("git",["show",baseline+":"+file],{cwd:root,encoding:"utf8"});
}
function tokens(s){
 return [...s.matchAll(/\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/g)].map(x=>x[0]);
}
function ids(s,kind){
 return [...s.matchAll(new RegExp(kind+'="([^"]+)"',"g"))].map(x=>x[1]);
}
for(const [id,chapter,n] of [["B11","iv",11],["B12","v",12]]){
 const lesson="docs/thpt-preview/sgk/chuong-"+chapter+"/bai-"+n+".md";
 const master="prototypes/thpt/content-drafts/THPT_G10_CH"+chapter.toUpperCase()+"_"+id+"_CANONICAL.md";
 const old=fromBaseline(lesson),current=fs.readFileSync(path.join(root,lesson),"utf8");
 const oldM=fromBaseline(master),newM=fs.readFileSync(path.join(root,master),"utf8");
 assert.equal(gitblob(old),field(id+"_BASELINE_SOURCE_BLOB"),id+" old signed lesson remains immutable");
 assert.equal(gitblob(oldM),field(id+"_BASELINE_CANONICAL_BLOB"),id+" old canonical snapshot remains immutable");
 assert.equal(gitblob(current),field(id+"_SOURCE_CURRENT_BLOB"),id+" current learner source SHA");
 assert.equal(gitblob(newM),field(id+"_CANONICAL_CURRENT_BLOB"),id+" same current canonical SHA");
 const a="<!-- BEGIN_"+id+"_KNOWLEDGE_MARKDOWN -->\n",b="\n<!-- END_"+id+"_KNOWLEDGE_MARKDOWN -->";
 assert.equal(newM.split(a)[1]?.split(b)[0],current,id+" ONE canonical Section A must byte-equal learner source");
 assert.deepEqual(tokens(current),tokens(old),id+" TeX expressions changed: this is NOT Delta A");
 for(const kind of ["data-thpt-first-try-id","data-thpt-help-id","data-outcome-id","data-thpt-fig-id"])
  assert.deepEqual(ids(current,kind),ids(old,kind),id+" canonical id/figure changed "+kind);
 const ex=current.split('=== "Ví dụ"')[1].split('=== "Lỗi thường gặp"')[0];
 assert.equal((ex.match(/!!! example "Lời giải"/g)||[]).length,4,id+" EXACTLY four native Markdown solution boxes");
 assert.equal((ex.match(/\*\*Phân tích:\*\*/g)||[]).length,4,id+" source-authored Phân tích 4x");
 assert.equal((ex.match(/\*\*Giải:\*\*/g)||[]).length,4,id+" four unchanged solved methods");
 assert.equal((ex.match(/\*\*Kiểm lại:\*\*/g)||[]).length,4,id+" 4 independent self-check paragraphs");
 assert.equal((ex.match(/\*\*Đề:\*\*/g)||[]).length,4,id+" 4 plain problem statements");
 assert(!/Vì sao chọn phương pháp:|Vì sao chọn cách này:|Chọn phương pháp:|Chọn mô hình:/.test(ex),
  id+" old labels must not remain in single current source");
 if(id==="B12"){
  const formal=current.split('=== "Kiến thức SGK"')[1].split('=== "Ví dụ"')[0];
  assert.equal((formal.match(/!!! abstract /g)||[]).length,3,"B12 3 existing formal concepts");
  assert.equal((formal.match(/!!! info /g)||[]).length,1,"B12 existing rounding rule");
  assert(current.includes("min-width:600px")&&current.includes("780px")&&current.includes("overflow-x:auto"),
   "B12 source-authored legible interval SVG, not injected JS");
 }
}
for(const name of [
 "docs/assets/javascripts/thpt-g10-b11-b12-owner-p2-fix.js",
 "docs/assets/stylesheets/thpt-g10-b11-b12-owner-p2-fix.css",
 "hooks/g10_b11_b12_p2_asset_scope.py"])
 assert(!fs.existsSync(path.join(root,name)),"No per-lesson patch overlays: "+name);
console.log("PASS B11/B12 source-first Delta A: one canonical each; old math/ID/figure token stream identical; native solution boxes; no runtime overlay");
