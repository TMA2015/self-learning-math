"use strict";
// RELEASE-only G11 AP1/AP2 static presentation regression. Academic source stays immutable.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const chapter = n => n<=4?"i":n<=7?"ii":n<=9?"iii":n<=14?"iv":n<=17?"v":n<=21?"vi":n<=27?"vii":"viii";
let count=0, math=0, marked=0;
for(let n=1;n<=30;n++){
 const path=`docs/thpt-preview/sgk/lop-11/chuong-${chapter(n)}/bai-${n}.md`;
 const s=fs.readFileSync(path,"utf8");
 assert(s.startsWith(`# Bài ${n}.`),`Incorrect lesson heading B${n}`);
 assert(!/^###\s+(?:§\d+|\d+[A-Z])\./m.test(s),`Unnormalized §/2A/4B subsection in B${n}`);
 const seq=[...s.matchAll(/^### 1\.(\d+)\.\s+/gm)].map(x=>+x[1]);
 if(seq.length){assert.equal(seq[0],1,`Unexpected subsection first label B${n}`);for(let i=1;i<seq.length;i++)assert.equal(seq[i],seq[i-1]+1,`Skipped or duplicated subsection B${n}`)}
 if(n===18)assert(s.includes("#### 1.2.1. Căn bậc n:"),"B18 2A not a proper nested heading");
 if(n>=22&&n<=27)assert(s.includes("#### 1.4.1. Làm rõ"),`B${n} 4B not a proper nested heading`);
 const expressions=[...s.matchAll(/\\\(([\s\S]*?)\\\)/g)].map(x=>x[1]);
 for(const expr of expressions){let depth=0;for(let i=0;i<expr.length;i++){if(expr[i]==="\\"){i++;continue}if(expr[i]==="{")depth++;else if(expr[i]==="}")depth--;assert(depth>=0,`Unbalanced TeX brace B${n}: ${expr}`)}assert.equal(depth,0,`Unbalanced TeX B${n}: ${expr}`)}
 math+=expressions.length;
 const outside=s.replace(/\\\([\s\S]*?\\\)/g,"").replace(/\$[^$\n]+\$/g,"");
 const raw=(outside.match(/[\w)\]]\^(?:\{|\(|[\w])/g)||[]);
 assert.equal(raw.length,0,`Visible raw exponent caret B${n}: ${raw.slice(0,3)}`);
 const backticked=[...outside.matchAll(/`([^`\n]+)`/g)].map(x=>x[1]).filter(x=>!(/^(THPT-|VD-|EX-|HELP-|FIG-)/.test(x)||/\.(?:md|js|svg|json)$/i.test(x)));
 assert.equal(backticked.length,0,`Math/inline-code must be typeset B${n}: ${backticked.slice(0,3)}`);
 marked+=(s.match(/<sup>/g)||[]).length;
 assert(s.includes("data-thpt-r4"),`G11 learner wrapper missing B${n}`);
 count++;
}
assert.equal(count,30);
console.log(`PASS G11 SGK B01–B30 AP1/AP2 static display: ${count} pages, ${math} MathJax spans, ${marked} HTML superscripts; no 2A/4B, raw ^ or maths backticks. No Academic/PED/Mastery or physical Safari verdict.`);
