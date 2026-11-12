#!/usr/bin/env node
"use strict";
/*
 * DRAFT EVIDENCE ONLY — compare legacy published-source identity with the
 * UX795 Knowledge candidate. NOT a replacement for R4/Roadmap/Q18 gates.
 * Main source locks from ledger stay immutable; candidate has its own locks.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const crypto=require("node:crypto");
const cp=require("node:child_process");
const root=path.resolve(__dirname,"..");
const index=process.argv.indexOf("--baseline");
assert(index>=0&&process.argv[index+1],"--baseline DIR required: use a pristine main checkout");
const baselineRoot=path.resolve(root,process.argv[index+1]);
assert(fs.statSync(baselineRoot).isDirectory(),"Main checkout absent");
const read=(base,rel)=>fs.readFileSync(path.join(base,rel));
const blob=b=>crypto.createHash("sha1").update(Buffer.from("blob "+b.length+"\0")).update(b).digest("hex");
const ledger=read(root,"prototypes/thpt/ux795/UX795_G10_KNOWLEDGE_RELEASE_SOURCE_INTAKE_R01_20261110.md").toString("utf8");
const matches=ledger.split("\n").map(line=>line.match(/^\|\s*B(\d{2})\s*\|\s*([IVX]+)\s*\|\s*\x60([a-f0-9]{40})\x60\s*\|\s*\x60([a-f0-9]{40})\x60\s*\|\s*$/)).filter(Boolean);
assert.equal(matches.length,27,"Expected 27 source ledger rows");
const rows=new Map(matches.map(m=>["B"+m[1],{main:m[3],candidate:m[4]}]));
// Independent published B09 Git blob witness; earlier text/FNV fingerprints
// were derived from another HEAD. Both old/new snapshots remain separately
// source-locked, with 30 formula/order and canonical ID-parity guards.
const historicalMainB09GitBlob="84c67363264698fab87db0e76eca5e4561006fa6";
const frozen=["k\\in\\mathbb R","\\vec u","k\\vec u","|k\\vec u|=|k|\\,|\\vec u|","\\vec u\\ne\\vec0","k>0","k\\vec u","\\vec u","k<0","k=0","\\vec u=\\vec0","k\\vec u=\\vec0","k(\\vec u+\\vec v)=k\\vec u+k\\vec v","(k+m)\\vec u=k\\vec u+m\\vec u","k(m\\vec u)=(km)\\vec u","1\\vec u=\\vec u","(-1)\\vec u=-\\vec u","\\vec u","\\vec v","t\\ne0","\\vec v=t\\vec u","M","AB","\\overrightarrow{AM}=\\tfrac12\\overrightarrow{AB}","G","ABC","M","BC","\\overrightarrow{AG}=\\tfrac23\\overrightarrow{AM}=\\tfrac13(\\overrightarrow{AB}+\\overrightarrow{AC}), \\quad \\overrightarrow{GA}+\\overrightarrow{GB}+\\overrightarrow{GC}=\\vec0.","k"];
assert.equal(frozen.length,30,"B09 historic 30-expression witness must be complete");
const chvi=read(root,"scripts/test-thpt-chvi-math-block-render.cjs").toString("utf8");
assert(chvi.includes("candidateSourceSha(lesson)"),
  "ChVI must still bind source to the 27-row exact candidate ledger");
const getIDs=s=>({
 first:[...s.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(x=>x[1]).sort(),
 help:[...s.matchAll(/data-thpt-help-id="([^"]+)"/g)].map(x=>x[1]).sort(),
 outcomes:[...s.matchAll(/data-outcome-id="([^"]+)"/g)].map(x=>x[1]).sort()
});
const tabs=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
const specs=[["B09","iv",9],["B15","vi",15],["B16","vi",16],["B17","vi",17],["B18","vi",18]];
for(const [name,chapter,num]of specs){
 const row=rows.get(name);assert(row,"Missing source ledger "+name);
 const rel="docs/thpt-preview/sgk/chuong-"+chapter+"/bai-"+num+".md";
 const mainRaw=read(baselineRoot,rel),candidateRaw=read(root,rel);
 const mainSHA=blob(mainRaw);
 assert(mainSHA===row.main||mainSHA===row.candidate,name+" must use frozen historic or published Model B source, never a third snapshot");
 assert.equal(blob(candidateRaw),row.candidate,name+" current candidate must keep immutable reviewed Model B source");
 // After #797 merged, main contains Model B. Compare against its PREVIOUS
 // Git blob, still verifiable in full history, not against a false assumption.
 const historic=mainSHA===row.main?mainRaw:cp.execFileSync("git",["cat-file","blob",row.main],{maxBuffer:3*1024*1024});
 assert.equal(blob(historic),row.main,name+" original historical source Git blob missing");
 const base=historic.toString("utf8"),s=candidateRaw.toString("utf8");
 assert.deepEqual(getIDs(s),getIDs(base),name+" original First Try/HELP/outcome IDs changed");
 assert.deepEqual([...s.matchAll(/^=== "([^"]+)"$/gm)].map(x=>x[1]),tabs,name+" changed owner Model B tabs");
 const ids=getIDs(s);
 assert.equal(new Set(ids.first).size,ids.first.length,name+" duplicate First Try ID");
 assert.equal(new Set(ids.help).size,ids.help.length,name+" duplicate HELP ID");
 if(name==="B09"){
  const a=s.indexOf('=== "Kiến thức SGK"'),b=s.indexOf('=== "Ví dụ"',a);
  assert(a>=0&&b>a,"B09 missing Knowledge area");
  const actual=[...s.slice(a,b).matchAll(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]|\$([^$]+)\$/g)]
    .map(x=>(x[1]??x[2]??x[3]).trim().replace(/\s+/g," "));
  assert(actual.some((_,i)=>i+30<=actual.length&&frozen.every((v,j)=>actual[i+j]===v)),
    "B09 protected original 30 math expressions lost or reordered");
   assert.equal(blob(historic),historicalMainB09GitBlob,"B09 original baseline must match immutable historical Git blob");
   assert.notEqual(blob(candidateRaw),historicalMainB09GitBlob,"B09 must remain a distinct source-locked Delta C");
  assert.equal(ids.first.length,5);assert.equal(ids.help.length,2);
  console.log("PASS EVIDENCE B09: 30/30 original math; 5 FirstTry/2 HELP; old+new source hashes");
 }else{
  const old=chvi.match(new RegExp(num+':\\{display:(\\d+),inline:(\\d+),sha:"([a-f0-9]{40})",tries:(\\d+),extraFold:(\\d+)\\}'));
  assert(old,name+" historical math spec missing");
  const disp=[...s.matchAll(/^    \\\[$/gm)].length,close=[...s.matchAll(/^    \\\]$/gm)].length;
  const inline=[...s.matchAll(/\\\(([\s\S]*?)\\\)/g)].length;
  assert(disp>=Number(old[1])&&disp===close,name+" display math regression");
  assert(inline>=Number(old[2]),name+" inline math regression");
  assert.equal(ids.first.length,Number(old[4]),name+" First Try regression");
  assert.notEqual(blob(candidateRaw),old[3],name+" unchanged historical source");
  console.log("PASS EVIDENCE "+name+": "+disp+" display/"+inline+" inline math (legacy "+old[1]+"/"+old[2]+"); canonical IDs preserved");
 }
 const mutated=s.replace('data-thpt-first-try-id="','data-thpt-first-try-id="CORRUPTED-');
 assert.notDeepEqual(getIDs(mutated),getIDs(base),name+" negative canonical-ID mutation must be caught");
 assert.notEqual(blob(Buffer.from(s+" ","utf8")),row.candidate,name+" negative source-drift mutation must be caught");
}
console.log("PASS DUAL-SOURCE MATH EVIDENCE: five lessons, 27-row SHA ledger, B09 historic 30 expressions, immutable source and canonical IDs; no obsolete test-file textual gate.");
console.log("NOT an Academic/PED PASS, NOT authorized Q18 self-QA, NOT a substitute for official R4/Roadmap; NO DEPLOY.");
