#!/usr/bin/env node
"use strict";
// Q03–Q14/AP1/AP2 RELEASE presentation guard; NOT an academic verdict.
const fs=require("node:fs"),assert=require("node:assert/strict"),path=require("node:path");
const root=path.resolve(__dirname,"..");
const roman=["i","ii","iii","iv","v","vi","vii","viii"];
const ends=[4,7,9,14,17,21,27,30];
const chapter=n=>roman[ends.findIndex(end=>n<=end)];
let lessons=0,numbered=0,carets=0,inlineCarets=0;
const problems=[];
for(let n=1;n<=30;n++){
 const p="docs/thpt-preview/sgk/lop-11/chuong-"+chapter(n)+"/bai-"+n+".md";
 const c=fs.readFileSync(path.join(root,p),"utf8");
 let h2=null,next=0,h3count=0;
 for(const [i,line] of c.split("\n").entries()){
  const top=/^## (\d+)\.\s/.exec(line);
  if(top){h2=Number(top[1]);next=0;continue}
  if(/^## /.test(line)){h2=null;next=0;continue}
  if(/^### (?:§\d+|\d+[A-Z])(?:\.|\s)/.test(line))problems.push(p+":"+(i+1)+" orphan "+line);
  const sub=/^### (\d+)\.(\d+)\.\s/.exec(line);
  if(sub){
   h3count++;numbered++;
   if(h2===null||Number(sub[1])!==h2||Number(sub[2])!==next+1)problems.push(p+":"+(i+1)+" broken hierarchy "+line+" after "+h2+"."+(next+1));
   next=Number(sub[2]);
  }else if(/^### \d+\.\s/.test(line))problems.push(p+":"+(i+1)+" unscoped "+line);
 }
 const expected=n===18?6:n>=22&&n<=27?8:n>=28&&n<=30?6:null;
 if(expected!==null&&h3count!==expected)problems.push(p+" expected "+expected+" numbered H3; got "+h3count);
 carets+=(c.match(/\^[a-zA-Z0-9({\-+]/g)||[]).length;
 inlineCarets+=(c.match(/\x60[^\x60]*\^[^\x60]*\x60/g)||[]).length;
 lessons++;
}
assert.equal(lessons,30);
assert.equal(numbered,132,"Reviewed UI heading snapshot 132 nested H3");
assert.deepEqual(problems,[],"All headings must follow parent H2 numbering, no 2A/4B/§");
const js=fs.readFileSync(path.join(root,"docs/assets/javascripts/math-details-v1.js"),"utf8");
const css=fs.readFileSync(path.join(root,"docs/assets/stylesheets/thpt-r4-preview.css"),"utf8");
assert(js.includes("routeAllowed")&&js.includes("formatText(node)")&&js.includes("mjx-container"),"THPT-only formula renderer with MathJax exclusion");
assert(css.includes("code.thpt-math-notation"),"Math must not retain inline code chrome");
console.log("PASS: G11 SGK 30/30 lessons, "+numbered+" nested headings sequential, no 2A/4B/§, scoped math formatter present");
console.log("INFO: "+carets+" original raw caret patterns ("+inlineCarets+" in code spans); original academic text preserved. Any mathematical content correction must return to AUTHORING.");
