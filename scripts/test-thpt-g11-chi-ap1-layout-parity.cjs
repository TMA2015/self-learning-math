#!/usr/bin/env node
"use strict";
// AP1: format-only learning hierarchy; guard exact reversible D1 academic source.
const assert=require("node:assert/strict"),fs=require("node:fs");
const fnv=s=>{let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619);return(h>>>0).toString(16).padStart(8,"0")};
for(const [lesson,expectedHash,expectedSections] of [[3,"ceeb82fb",7],[4,"5201768b",8]]){
 const file="docs/thpt-preview/sgk/lop-11/chuong-i/bai-"+lesson+".md";
 const text=fs.readFileSync(file,"utf8");
  if(text.includes('=== "Khám phá kiến thức"')){
    const names=[...text.matchAll(/^===\s*"([^"]+)"\s*$/gm)].map(x=>x[1]);
    assert.deepEqual(names,["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],
      file+": incorrect level-1 Knowledge layout");
    // Historical byte/FNV parity is replayable only on original snapshot.
    const concept=text.slice(text.indexOf('=== "Kiến thức SGK"'),text.indexOf('=== "Ví dụ"'));
    const required=lesson===3?["y=sin x","y=cos x","y=tan x","y=cot x"]:["sin x=m","cos x=m","tan x=m","cot x=m"];
    for(const expression of required)assert(concept.includes(expression),file+": reviewed mathematical expression missing: "+expression);
    assert(text.includes("### Ví dụ trực quan")&&text.includes("data-ped-first-try"),file+": pedagogical example and independent-first student try must remain");
    continue;
  }
 const a=text.indexOf("## 1. Kiến thức SGK"),b=text.indexOf("## 2. Ví dụ",a);
 assert(a>=0&&b>a,"Missing B0"+lesson+" D1/D2 boundaries");
 const portion=text.slice(a,b);
 const headings=[...portion.matchAll(/^### 1\.(\d+)\. (.+)$/gm)];
 assert.equal(headings.length,expectedSections,"Expected discrete learner-facing concept sections");
 for(let i=0;i<headings.length;i++)assert.equal(Number(headings[i][1]),i+1,"Original concept order preserved");
 const restored=portion.replace(/^### 1\.(\d+)\. (.+)\n\n/gm,(_,n,label)=>n+". **"+label+":** ");
 assert.equal(fnv(restored),expectedHash,"D1 academic source changed beyond reversible heading layout: classify and review delta");
 assert(!/^(\d+)\. \*\*/m.test(portion),"All dense numbered knowledge lines should become readable sections");
}
console.log("PASS G11 B03/B04 AP1 presentation delta: 15/15 sections, reversible exact original D1 wording/formulas and order. PED/AP verdict and Final Submit gates remain HOLD.");
