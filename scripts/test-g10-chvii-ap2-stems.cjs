#!/usr/bin/env node
"use strict";
/* G10 ChVII AP2: 25 canonical Vận dụng stems may change DISPLAY only.
 * Compare pre-AP2 source against original published semantic question content. */
const assert=require("node:assert/strict");
const fs=require("node:fs"),path=require("node:path"),cp=require("node:child_process"),
 crypto=require("node:crypto");
const root=path.resolve(__dirname,"..");
const before="1fd114150a170948d28aaca1abd04f3023af12ed";
const stemSnapshot="fb96ca34e3e4f2787177a5a3834253bda549253b";
const published="bfc15b552a1ea697edb1327f0a48d7a95bbb73ed";
const counts={19:7,20:5,21:5,22:8};
const receipt=fs.readFileSync(path.join(root,
 "prototypes/thpt/ux795/G10_CHVII_R02_AP2_STEM_DISPLAY_EQUIVALENT_RECEIPT_20261114.md"),"utf8");
const rows=[...receipt.matchAll(/^\| B(19|20|21|22) \| \x60([a-f0-9]{40})\x60 \| \x60([a-f0-9]{40})\x60 \| (\d+) \|/gm)];
assert.equal(rows.length,4,"AP2 receipt must source-lock four lessons");
const table=new Map(rows.map(m=>[Number(m[1]),{baseline:m[2],candidate:m[3],count:Number(m[4])}]));
const blob=s=>{
 const buf=Buffer.from(s);
 return crypto.createHash("sha1").update("blob "+buf.length+"\0").update(buf).digest("hex");
};
function gitShow(ref,file){
 const result=cp.spawnSync("git",["show",ref+":"+file],{cwd:root,encoding:"utf8"});
 assert.equal(result.status,0,"Required prior source inaccessible "+ref+" "+file+" "+result.stderr);
 return result.stdout;
}
const normalize=s=>s
 .replace(/\\dfrac\{([xy])\^2\}\{(\d+)\}/g,"$1²/$2")
 .replace(/\\vec ([nu])/g,"$1")
 .replace(/d_(\d)/g,"d$1")
 .replace(/([xyb])\^2/g,"$1²")
 .replace(/\\ge/g,"≥")
 .replace(/\\\(|\\\)/g,"")
 .replace(/\x60/g,"")
 .replace(/\u2212/g,"-")
 .replace(/:\s*/g,":")
 .replace(/\s+/g," ").trim();
const stems=s=>[...s.matchAll(/^    \*\*Em vận dụng\.\*\* ([^\n]+)$/gm)].map(m=>m[1]);
let total=0;
for(const n of [19,20,21,22]){
 const file="docs/thpt-preview/sgk/chuong-vii/bai-"+n+".md";
 const older=gitShow(before,file),original=gitShow(published,file);
 const newer=gitShow(stemSnapshot,file); // immutable AP2-only snapshot; latest changes only answer formatting
 const row=table.get(n);
 assert(row,"B"+n+" missing signed AP2 equivalence row");
 assert.equal(blob(older),row.baseline,"B"+n+" pre-AP2 source blob mismatch");
 assert.equal(blob(newer),row.candidate,"B"+n+" current source differs from signed AP2 snapshot");
 assert.equal(row.count,counts[n],"B"+n+" receipt item count mismatch");
 const oldLines=older.split("\n"),newLines=newer.split("\n");
 assert.equal(newLines.length,oldLines.length,"B"+n+" unexpectedly inserted/removed lines");
 const prefix="    **Em vận dụng.** ";
 let changes=0;
 for(let i=0;i<oldLines.length;i++){
  if(oldLines[i]===newLines[i])continue;
  assert(oldLines[i].startsWith(prefix)&&newLines[i].startsWith(prefix),
   "B"+n+" unrelated Markdown changed at line "+(i+1));
  changes++;
 }
 assert.equal(changes,counts[n],"B"+n+" only canonical question display may change");
 const beforeStems=stems(older),afterStems=stems(newer),origStems=stems(original);
 assert.equal(beforeStems.length,counts[n]);
 assert.equal(afterStems.length,counts[n]);
 assert.equal(origStems.length,counts[n]);
 for(let i=0;i<counts[n];i++){
  const context="B"+n+" item "+(i+1);
  assert.equal(normalize(beforeStems[i]),normalize(origStems[i]),
   context+" candidate had altered original question semantics");
  assert.equal(normalize(afterStems[i]),normalize(origStems[i]),
   context+" AP2 conversion changed words, maths, signs, units or data");
  const cur=afterStems[i];
  const opens=(cur.match(/\\\(/g)||[]).length,closes=(cur.match(/\\\)/g)||[]).length;
  assert(opens>=1,context+" stem has no math delimiters");
  assert.equal(opens,closes,context+" unbalanced inline MathJax");
  assert(!/\\\(\s*\\\)/.test(cur),context+" empty inline math");
  const groups=[...cur.matchAll(/\\\(([\s\S]*?)\\\)/g)].map(m=>m[1]);
  assert.equal(groups.length,opens,context+" delimiters overlap");
  assert(groups.every(x=>!x.includes("\\(")),context+" nested TeX");
  assert(!/<script|onerror=|onload=/i.test(cur),context+" executable markup");
 }
 for(const id of ["data-thpt-first-try-id","data-outcome-id","data-thpt-help-ref","data-thpt-help-id"]){
  const vals=s=>[...s.matchAll(new RegExp(id+'="([^"]+)"',"g"))].map(m=>m[1]);
  assert.deepEqual(vals(newer),vals(older),"B"+n+" changed canonical metadata "+id);
 }
 total+=counts[n];
 console.log("PASS B"+n+" "+counts[n]+" mathematically identical MathJax-delimited stems");
}
assert.equal(total,25);
console.log("PASS 25/25 AP2 stems equivalent to published questions; only stem display changed");
