#!/usr/bin/env node
"use strict";
/* AP2 Q18 scope: only 25 learner-triggered Đối chiếu answers may receive
 * equivalent MathJax markup. Canonical items and all other lines are frozen. */
const assert=require("node:assert/strict");
const fs=require("node:fs"),path=require("node:path"),
 cp=require("node:child_process"),crypto=require("node:crypto");
const root=path.resolve(__dirname,"..");
const oldRef="fb96ca34e3e4f2787177a5a3834253bda549253b";
const expected={19:7,20:5,21:5,22:8};
const receipt=fs.readFileSync(path.join(root,
 "prototypes/thpt/ux795/G10_CHVII_R02_AP2_COMPARISON_DISPLAY_EQUIVALENT_RECEIPT_20261114.md"),"utf8");
const rows=[...receipt.matchAll(/^\| B(19|20|21|22) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \| (\d+) \|/gm)];
assert.equal(rows.length,4,"Expected 4 signed B19–B22 AP2 comparison rows");
const table=new Map(rows.map(m=>[Number(m[1]),{from:m[2],to:m[3],items:Number(m[4]),lines:Number(m[5])}]));
function blob(s){const b=Buffer.from(s);return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex");}
function gitShow(ref,file){
 const r=cp.spawnSync("git",["show",ref+":"+file],{cwd:root,encoding:"utf8"});
 assert.equal(r.status,0,"Cannot reopen exact old answer source "+ref+" "+file+" "+r.stderr);
 return r.stdout;
}
function normalize(s){
 return s.replace(/\\dfrac\{([A-Za-z])\^2\}\{(\d+)\}/g,"$1²/$2")
 .replace(/\\overrightarrow\{([A-Z]{2})\}/g,"$1")
 .replace(/\\vec ([a-z])('|)/g,"$1$2")
 .replace(/\\mathbb R/g,"ℝ").replace(/\\in/g,"∈").replace(/\\ne/g,"≠")
 .replace(/\\Rightarrow/g,"⇒").replace(/\\cdot/g,"·").replace(/\\Delta\s*/g,"Δ")
 .replace(/\\varphi/g,"φ").replace(/\\cos/g,"cos")
 .replace(/\\lvert|\\rvert/g,"|")
 .replace(/\\sqrt\{([^{}]+)\}/g,"√($1)").replace(/\\sqrt([0-9])/g,"√$1")
 .replace(/\\approx/g,"≈").replace(/\\pm/g,"±").replace(/\\ge/g,"≥").replace(/\\le/g,"≤")
 .replace(/\^\\circ/g,"°").replace(/\\\(|\\\)/g,"").replace(/\\[ ,]/g,x=>x.slice(1))
 .replace(/([A-Za-z0-9)])\^2/g,(_,x)=>x+"²")
 .replace(/([AFdn])_(\d)/g,"$1$2")
 .replace(/−/g,"-").replace(/\x60/g,"")
 .replace(/\s*⇒\s*/g,"⇒").replace(/\s*±\s*/g,"±")
 .replace(/:\s*/g,": ").replace(/\s+/g," ").trim();
}
const allowed=s=>/^        \*\*(?:Đáp án|Lý do):\*\* /.test(s) ||
 s.startsWith("        Bán trục ngang 6,") ||
 s.startsWith("        Hiệu quãng đường ");
const answerLines=s=>s.split("\n").filter(allowed);
let total=0,verified=0,changes=0;
for(const n of [19,20,21,22]){
 const file="docs/thpt-preview/sgk/chuong-vii/bai-"+n+".md";
 const old=gitShow(oldRef,file),now=fs.readFileSync(path.join(root,file),"utf8");
 const signed=table.get(n);
 assert(signed,"Missing B"+n+" receipt row");
 assert.equal(blob(old),signed.from,"B"+n+" old blob mismatch");
 assert.equal(blob(now),signed.to,"B"+n+" new blob differs from signed candidate");
 assert.equal(signed.items,expected[n],"B"+n+" canonical count mismatch");
 const oldLines=old.split("\n"),newLines=now.split("\n");
 assert.equal(oldLines.length,newLines.length,"B"+n+" unexpected line insert/delete");
 let changed=0;
 for(let i=0;i<oldLines.length;i++)if(oldLines[i]!==newLines[i]){
  assert(allowed(oldLines[i])&&allowed(newLines[i]),
   "B"+n+" non-answer source line changed at "+(i+1));
  changed++;
 }
 changes+=changed;
 const a=answerLines(old),b=answerLines(now);
 assert.equal(a.length,signed.lines,"B"+n+" wrong signed original answer count");
 assert.equal(b.length,a.length,"B"+n+" original answer/rationale lines missing");
 for(let i=0;i<a.length;i++){
  assert.equal(normalize(a[i]),normalize(b[i]),
   "B"+n+" comparison row "+(i+1)+" changed mathematical meaning or natural-language proof");
  const opens=(b[i].match(/\\\(/g)||[]).length;
  assert.equal(opens,(b[i].match(/\\\)/g)||[]).length,"B"+n+" unbalanced MathJax");
  verified++;
 }
 const oldD=old.split('=== "Khám phá kiến thức"')[1].split('=== "Kiến thức SGK"')[0];
 const newD=now.split('=== "Khám phá kiến thức"')[1].split('=== "Kiến thức SGK"')[0];
 assert.equal((oldD.match(/\?\?\? question "Đối chiếu"/g)||[]).length,expected[n],
   "B"+n+" previous comparison count mismatch");
 assert.equal((newD.match(/\?\?\? question "Đối chiếu"/g)||[]).length,expected[n],
   "B"+n+" canonical disclosures lost");
 for(const id of ["data-thpt-first-try-id","data-outcome-id","data-thpt-help-ref","data-thpt-help-id"]){
  const list=s=>[...s.matchAll(new RegExp(id+'="([^"]+)"',"g"))].map(x=>x[1]);
  assert.deepEqual(list(now),list(old),"B"+n+" changed canonical IDs: "+id);
 }
 total+=expected[n];
 console.log("PASS B"+n+" "+expected[n]+" canonical comparisons, "+a.length+" equivalent source answer lines, "+changed+" display-only edits");
}
assert.equal(total,25);
assert.equal(verified,48,"Must compare 48 answer/rationale source lines");
assert.equal(changes,45,"Only 45 original plain-notation answer lines may be typeset");
console.log("PASS ChVII 25/25 Đối chiếu, 48/48 meaning-equivalent lines, zero changes outside answers");
