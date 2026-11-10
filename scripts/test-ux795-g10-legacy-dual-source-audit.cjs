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
const tests=[
 ["scripts/test-thpt-academic-presentation-pilot.cjs","96f07b15222bfd0561b6c4f8c8909853e5fa98ed"],
 ["scripts/test-thpt-chvi-math-block-render.cjs","6763e3e284db19b15ce71da76463b65814ba1fd2"]
];
for(const [p,expected]of tests)assert.equal(blob(read(baselineRoot,p)),expected,"Historical test source in published main must remain immutable: "+p);
assert(read(root,tests[0][0]).toString("utf8").includes('acceptedCandidateSha("B09")'),"Candidate B09 gate has no SHA-based migration");
assert(read(root,tests[1][0]).toString("utf8").includes("candidateSourceSha(lesson)"),"Candidate ChVI gate has no source-based migration");
const pilot=read(root,tests[0][0]).toString("utf8");
const chvi=read(root,tests[1][0]).toString("utf8");
const frozen=JSON.parse(pilot.match(/const frozen=(\[[\s\S]*?\]);/)[1]);
assert.equal(frozen.length,30);
const oldFNV=pilot.match(/assert\.equal\(fnv\(src\),"([a-f0-9]{8})"/)[1];
const fnv=s=>{let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619);return (h>>>0).toString(16).padStart(8,"0")};
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
 assert.equal(blob(mainRaw),row.main,name+" main baseline source drift");
 assert.equal(blob(candidateRaw),row.candidate,name+" staged candidate source drift");
 const base=mainRaw.toString("utf8"),s=candidateRaw.toString("utf8");
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
  assert.notEqual(fnv(s),oldFNV,"B09 not changed; migration not applicable");
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
console.log("PASS DRAFT DUAL-SOURCE EVIDENCE: 5/5 lessons; 27-row ledger; original baseline + current candidate immutable; legacy tests unchanged.");
console.log("NOT an Academic/PED PASS, NOT authorized Q18 self-QA, NOT a substitute for official R4/Roadmap; NO DEPLOY.");
