#!/usr/bin/env node
"use strict";
/* RELEASE AP1/AP2/AP5 learner-presentation lint for CURRENT AND FUTURE SGK 11
 * lessons. This guards visible UI semantics, not SGK truth or academic approval.
 * Q01–Q18 remain the only normative standard. No edits to RD1 or item content.
 */
const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const base=path.join(root,"docs/thpt-preview/sgk/lop-11");
const chapters=fs.readdirSync(base,{withFileTypes:true})
 .filter(x=>x.isDirectory()&&/^chuong-[ivx]+$/.test(x.name)).map(x=>x.name).sort();
const files=chapters.flatMap(ch=>fs.readdirSync(path.join(base,ch))
 .filter(f=>/^bai-\d+\.md$/.test(f)).map(f=>({ch,path:path.join(base,ch,f),id:Number(f.match(/\d+/)[0])})))
 .sort((a,b)=>a.id-b.id);
assert(files.length>=30,"Missing already released 30 SGK 11 lessons");
const ids=new Set(files.map(f=>f.id));
assert.equal(ids.size,files.length,"Duplicate SGK G11 lesson number");
for(let n=1;n<=Math.max(...ids);n++)assert(ids.has(n),"Missing G11 B"+n+" in contiguous published curriculum");
let headings=0,rawPowers=0,inlineMath=0,modelBCount=0;
const problems=[];
for(const file of files){
 const rel=path.relative(root,file.path).replaceAll(path.sep,"/");
 const c=fs.readFileSync(file.path,"utf8");
 const tabs=[...c.matchAll(/^=== "([^"]+)"$/gm)].map(x=>x[1]);
 if(tabs.length){
  const labels=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
  assert.deepEqual(tabs,labels,rel+" exactly four approved Model B L1 tabs");
  const headers=[...c.matchAll(/^    ### 1\.(\d+)\.\s/gm)].map(x=>Number(x[1]));
  for(let i=1;i<headers.length;i++)
   if(headers[i]!==headers[i-1]+1)
    problems.push(rel+" concept hierarchy out of sequence: "+headers[i-1]+" to "+headers[i]);
  if((c.match(/data-ped-first-try=/g)||[]).length<1||(c.match(/data-thpt-help-id=/g)||[]).length<1)
   problems.push(rel+" missing original first-try or D6 path");
  if(!c.includes("### Ví dụ trực quan")||!c.includes("### Thuật ngữ và kiến thức, kỹ năng"))
   problems.push(rel+" lesson-specific pedagogical bridge missing");
  headings+=headers.length;modelBCount++;
  rawPowers+=(c.match(/\^[A-Za-z0-9({\-+]/g)||[]).length;
  inlineMath+=(c.match(/\x60[^\x60]*\^[^\x60]*\x60/g)||[]).length;
  continue;
 }
 let section=null,next=0;
 for(const [idx,line] of c.split("\n").entries()){
  const where=rel+":"+(idx+1);
  if(/^#{2,3}\s/.test(line)){
   if(/\b(?:WHY|WHAT|HOW|FORMAL|DEEPENING|PED[1-6]|D[1-6])\b|VD-G11-B\d+|§\d+/u.test(line))
    problems.push(where+" internal QA label visible: "+line);
   if(/^### (?:\d+[A-Z]|§\d+)/u.test(line))
    problems.push(where+" orphan/lettered numbered section: "+line);
  }
  const main=/^## (\d+)\.\s/.exec(line);
  if(main){section=Number(main[1]);next=0;continue;}
  if(/^##\s/.test(line)){section=null;next=0;continue;}
  const sub=/^### (\d+)\.(\d+)\.\s/.exec(line);
  if(sub){
   headings++;
   if(section===null||Number(sub[1])!==section||Number(sub[2])!==next+1)
    problems.push(where+" broken hierarchy, expected "+section+"."+(next+1)+" but got "+line);
   next=Number(sub[2]);
  }else if(/^### \d+\.\s/.test(line))problems.push(where+" orphan numeric H3: "+line);
 }
 rawPowers+=(c.match(/\^[A-Za-z0-9({\-+]/g)||[]).length;
 inlineMath+=(c.match(/\x60[^\x60]*\^[^\x60]*\x60/g)||[]).length;
}
if(modelBCount===0)assert(headings>=132,"G11 historical subheading guard unexpectedly lost existing scope");
else assert.equal(modelBCount,33,"G11 Model B upgrade must cover all 33 lessons");
if(problems.length){
 console.error("SGK RELEASE PRESENTATION HOLD: "+problems.length+" problems\n"+problems.join("\n"));
 process.exit(1);
}
const js=fs.readFileSync(path.join(root,"docs/assets/javascripts/math-details-v1.js"),"utf8");
const css=fs.readFileSync(path.join(root,"docs/assets/stylesheets/thpt-r4-preview.css"),"utf8");
assert(js.includes("routeAllowed")&&js.includes("formatText(node)")&&js.includes("mjx-container"),"THPT-only accessible math visual normalizer must remain");
assert(js.includes('parent.closest("script,style,pre,textarea,input,button,a,kbd,samp,math,mjx-container,sup,sub")'),"No unsafe transformation inside MathJax, links, answers or UI controls");
assert(css.includes("code.thpt-math-notation"),"Inline math requires non-code student typography");
console.log("PASS G11 learner-facing headings "+files.length+" lessons, "+headings+" sequential subheadings, no 2A/4B/§/internal D/PED/WHY/WHAT/HOW labels.");
console.log("INFO math-source untouched: "+rawPowers+" caret patterns, "+inlineMath+" inline-code caret patterns; visual rendering separately tested in browser. This is NOT independent academic review.");
