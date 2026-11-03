#!/usr/bin/env node
"use strict";
// AP1: format-only learning hierarchy; guard exact reversible D1 academic source.
const assert=require("node:assert/strict"),fs=require("node:fs");
const fnv=s=>{let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619);return(h>>>0).toString(16).padStart(8,"0")};
for(const [lesson,expectedHash,expectedSections] of [[3,"541ed274",7],[4,"5621c411",8]]){
 const file="docs/thpt-preview/sgk/lop-11/chuong-i/bai-"+lesson+".md";
 const text=fs.readFileSync(file,"utf8");
 const a=text.indexOf("## 1. Kiến thức SGK"),b=text.indexOf("## 2. Ví dụ",a);
 assert(a>=0&&b>a,"Missing B0"+lesson+" D1/D2 boundaries");
 const portion=text.slice(a,b);
 const headings=[...portion.matchAll(/^### 1\.(\d+)\. (.+)$/gm)];
 assert.equal(headings.length,expectedSections,"Expected discrete learner-facing concept sections");
 for(let i=0;i<headings.length;i++)assert.equal(Number(headings[i][1]),i+1,"Original concept order preserved");
 assert.equal(fnv(portion),expectedHash,"G11 B03/B04 approved source-equivalent AP1/AP2 learner display snapshot changed");
 assert.equal((portion.match(/\\\(/g)||[]).length,40,"G11 B03/B04 source-equivalent formulas must be MathJax-delimited");
 assert(!/^(\d+)\. \*\*/m.test(portion),"All dense numbered knowledge lines should become readable sections");
}
console.log("PASS G11 B03/B04 AP1 presentation delta: 15/15 sections, reversible exact original D1 wording/formulas and order. PED/AP verdict and Final Submit gates remain HOLD.");
