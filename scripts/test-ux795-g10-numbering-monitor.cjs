#!/usr/bin/env node
"use strict";
/*
 * UX795 / Q01-Q18 / AP1 numbering MONITOR, owner 16 Nov 2026.
 * Not a new quality standard, not a source edit and never a blocker by itself.
 * Does not try to replace the per-lesson S1 main-heading crosswalk.
 * Compare source-level sequence/parent/heading depth; later validate rendered TOC.
 */
const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const chapters=new Set(["i","ii","iii","iv","v","vi","vii","viii","ix"]);
const numbered=/^ {0,4}(#{3,6})[ \t]+([1-4](?:\.[0-9]+)+)\.?[ \t]+/;
const tip=/^\s*\?\?\? tip "([4](?:\.[0-9]+)+)\.?[ \t]+/;
const letter=/^\s{0,8}([a-z])[\).][ \t]+/;
function inspect(source,file){
 const warnings=[];
 const seen=new Map();
 const previous=new Map();
 let tab=0,alpha=null,lineNo=0;
 let headings=0,nested=0,legacyTabs=new Set();
 const warn=(code,detail)=>warnings.push({file,line:lineNo,code,detail});
 for(const line of source.split("\n")){
  lineNo++;
  if(/^=== "[^"]+"$/.test(line)){
   tab++;alpha=null;continue;
  }
  const match=line.match(numbered);
  const help=line.match(tip);
  if(match||help){
   const raw=match?match[2]:help[1];
   const level=match?match[1].length:3;
   const nums=raw.split(".").map(Number);
   const key=nums.slice(0,-1).join(".");
   const n=nums[nums.length-1];
   if(match){headings++;if(nums.length>2)nested++;}
   if(tab!==nums[0])warn("TAB_PREFIX","heading "+raw+" is in tab "+tab);
   if(nums.length>2){
    const parent=seen.get(key);
    if(!parent)warn("MISSING_PARENT","heading "+raw+" has no prior "+key);
    else if(match&&level!==parent.level+1)
      warn("HEADING_DEPTH","heading "+raw+" should be one HTML heading level below "+key);
   }
   const group=String(tab)+"|"+key;
   const prev=previous.get(group)||0;
   if(n!==prev+1)warn(n===prev?"DUPLICATE_INDEX":"NON_SEQUENTIAL",
    "heading "+raw+" expected sibling index "+String(prev+1));
   previous.set(group,n);
   if(seen.has(raw))warn("REPEATED_HEADING","heading "+raw+" appears more than once");
   else seen.set(raw,{level,line:lineNo});
   alpha=null;
   continue;
  }
  const h=line.match(/^ {0,4}#{3,6}[ \t]+(.+)$/);
  if(h&&(tab===1||tab===3)&&!/^[1-4](?:\.\d+)+\.\s/.test(h[1]))
   legacyTabs.add(tab);
  const a=line.match(letter);
  if(a){
   const ord=a[1].charCodeAt(0)-96;
   const expect=alpha===null?1:alpha+1;
   if(ord!==expect)warn("ALPHABET_SEQUENCE",
    "letter "+a[1]+" requires "+String.fromCharCode(96+expect)+" before it at the same list level");
   alpha=ord;
  }else if(!/^\s*$/.test(line)){
   alpha=null;
  }else alpha=null;
 }
 for(const i of legacyTabs)warnings.push({file,line:0,code:"SOURCE_NUMBERING_PENDING",
   detail:"tab "+i+" has unnumbered source headings; verify runtime labels/TOC against B01/B02"});
 return {file,headings,nested,warnings};
}
function fixtures(){
 const intro='=== "Khám phá kiến thức"\n    ### 1.1. Mở đầu\n';
 const valid=intro+'=== "Kiến thức SGK"\n    ### 2.1. Đầu\n    ### 2.2. Sau\n    #### 2.2.1. A\n    #### 2.2.2. B\n';
 assert.equal(inspect(valid,"fixture").warnings.length,0,"valid parent sequence");
 assert(inspect(intro+'=== "Kiến thức SGK"\n    ### 2.1. A\n    #### 2.1.2. B\n',"bad")
  .warnings.some(w=>w.code==="NON_SEQUENTIAL"),"2 requires 1");
 assert(inspect(intro+'=== "Kiến thức SGK"\n    #### 2.2.1. B\n',"bad")
  .warnings.some(w=>w.code==="MISSING_PARENT"),"child requires parent");
 assert(inspect(intro+'=== "Kiến thức SGK"\n    ### 2.1. A\n    ### 2.1. B\n',"bad")
  .warnings.some(w=>w.code==="DUPLICATE_INDEX"),"no duplicate sibling");
 assert(inspect(intro+'=== "Kiến thức SGK"\n    ### 2.1. A\n    ### 2.2. B\n    ### 2.2.1. C\n',"bad")
  .warnings.some(w=>w.code==="HEADING_DEPTH"),"child needs deeper HTML heading");
 assert(inspect('=== "Khám phá kiến thức"\n    b) Không có a\n',"bad")
  .warnings.some(w=>w.code==="ALPHABET_SEQUENCE"),"b requires a");
 console.log("PASS numbering MONITOR six owner-required fixture cases");
}
fixtures();
if(process.argv.includes("--self-test"))process.exit(0);
const base=path.join(root,"docs/thpt-preview/sgk");
const files=[];
for(const dir of fs.readdirSync(base,{withFileTypes:true})){
 if(!dir.isDirectory()||!dir.name.startsWith("chuong-")||
   !chapters.has(dir.name.slice("chuong-".length)))continue;
 for(const file of fs.readdirSync(path.join(base,dir.name))){
  if(/^bai-[0-9]+\.md$/.test(file))files.push(path.join("docs/thpt-preview/sgk",dir.name,file));
 }
}
files.sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));
assert.equal(files.length,27,"G10 original SGK lesson count: monitor all 27; no silent omission");
const reports=files.map(p=>inspect(fs.readFileSync(path.join(root,p),"utf8"),p));
const findings=reports.flatMap(x=>x.warnings);
console.log("G10-NUM-01 MONITOR / NON_BLOCKING; 27 lessons; "+findings.length+" finding(s)");
for(const w of findings)console.log("MONITOR "+w.file+":"+w.line+" "+w.code+" "+w.detail);
console.log("Source numbering alone does not certify HTML/TOC, S1 section parity, or OWNER_P2_PASS.");
if(process.argv.includes("--strict")&&findings.length)process.exitCode=1;
