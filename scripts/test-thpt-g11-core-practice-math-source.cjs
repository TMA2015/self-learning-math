"use strict";
// RELEASE AP2: full G11 SGK B01–B33 PUBLIC Core/Practice source + renderer.
// Metadata/source audit only; never changes protected RD1 or academic answers.
const assert=require("node:assert/strict"),fs=require("node:fs");
const banks=[
 ["chi-reviewed-formative-v1",16],["chi-b03-b04-reviewed-formative-r01",26],
 ["chii-b05-b07-source-locked-formative-r03",36],
 ["chiii-b08-b09-source-locked-formative-r03",28],
 ["chiv-b10-b14-source-locked-formative-r03",30],
 ["chv-b15-b17-source-locked-formative-r03",30],
 ["chvi-b18-b21-source-locked-formative-r01",41],
 ["chvii-b22-b27-source-locked-formative-r01",51],
 ["chviii-b28-b30-source-locked-formative-r00",39],
 ["chix-b31-b33-source-locked-formative-r00",62]
];
const all=[];let dollarFields=0,underscoreFields=0,caretFields=0;
for(const [suffix,count]of banks){
 const file="docs/assets/javascripts/thpt-g11-"+suffix+".js",source=fs.readFileSync(file,"utf8");
 const start=source.indexOf("const records="),end=source.indexOf("\n];",start);
 assert(start>=0&&end>start,"Canonical bank must be inspectable: "+file);
 const items=JSON.parse(source.slice(start+"const records=".length,end+2));
 assert.equal(items.length,count,"Original canonical bank count "+suffix);
 for(const q of items){
  assert.equal(q.grade,"11");assert.equal(q.exposure,"FORMATIVE_ONLY");
  assert(/^[1-9]|[12]\d|3[0-3]$/.test(String(q.lesson)));
  for(const key of ["stem","hint","solution"]){
   assert.equal(typeof q[key],"string","Missing "+key+" "+q.item_id);
   const v=q[key];
   if(v.includes("$"))dollarFields++;
   if(/(?:\bu|log)_(?:\{[^}]+\}|[A-Za-z0-9])/.test(v))underscoreFields++;
   if(/\^(?:\([^)]*\)|\{[^}]*\}|[A-Za-z0-9])/.test(v))caretFields++;
  }
  all.push(q);
 }
}
assert.equal(all.length,359,"Full G11 33-lesson inventory");
assert.equal(new Set(all.map(q=>q.item_id)).size,359,"Unique canonical IDs, no role cloning");
const lessons=new Set(all.map(q=>Number(q.lesson)));
assert.equal(lessons.size,33,"All B01–B33 covered");
for(let n=1;n<=33;n++)assert(lessons.has(n),"Missing B"+n);
assert(dollarFields>=112,"ChIX inline TeX source remains protected");
assert(underscoreFields>=40,"ChII unformatted indices remain in canonical source");
assert(caretFields>=40,"Unformatted powers and ChIX source tokens retained");
const code=fs.readFileSync("docs/assets/javascripts/thpt-r4-preview.js","utf8");
for(const required of [
 "const renderG11Math=",
 "reviewedText(prompt,item.stem,item)",
 "reviewedText(formattedChoice,choice,item)",
 "reviewedText(hintContent,item.hint,item)",
 "reviewedText(solutionContent,item.solution,item)",
 "window.MathJax.typesetPromise([card])"
 ])assert(code.includes(required),"Missing G11 formula renderer path "+required);
assert(!/\.innerHTML\s*=\s*(?:item\.(?:stem|solution|hint)|choice)/.test(code),"No unsafe HTML injection");
console.log("PASS G11 33 lessons / 359 canonical PUBLIC items, review fields stem/hint/solution and AP2 scoped renderer. Source buckets: TeX="+dollarFields+", subscripts="+underscoreFields+", powers="+caretFields);
