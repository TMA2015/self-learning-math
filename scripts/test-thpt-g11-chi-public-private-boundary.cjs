#!/usr/bin/env node
"use strict";
// A6: protected G11 ChI RD1 must not appear in the public source or client builds.
// This check does not certify pedagogy, official readiness, or Mastery.
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const read=p=>fs.readFileSync(p,"utf8"),exists=p=>fs.existsSync(p);
const id=/THPT[-_]G11[-_]CHI[-_]RD1[-_][A-Z0-9]+/i;
const filename=/(?:g11.*chi.*(?:rd1|private)|(?:rd1|private).*g11.*chi)/i;
const ext=new Set([".html",".js",".json",".md",".css",".svg",".txt"]);
function scan(dir){
 assert(exists(dir),"Missing client tree: "+dir);
 let count=0;
 function walk(folder){
  for(const entry of fs.readdirSync(folder,{withFileTypes:true})){
   const f=path.join(folder,entry.name);
   if(entry.isDirectory()){walk(f);continue;}
   if(!entry.isFile()||!ext.has(path.extname(f).toLowerCase()))continue;
   assert(!filename.test(f.replaceAll(path.sep,"/")),"Protected RD1 filename in public client: "+f);
   assert(!id.test(read(f)),"Protected RD1 canonical ID in public client: "+f);
   count++;
  }
 }
 walk(dir);return count;
}
const page="docs/thpt-preview/sgk/lop-11/chuong-i/tu-kiem-tra-chuong.md";
assert(read(page).includes("CHƯA KÍCH HOẠT"),"G11 official readiness must remain HOLD");
const active=/data-(?:thpt-readiness|thpt-self-check|g10-chapter-selfcheck)/i;
assert(!active.test(read(page)),"G11 readiness mounts an unapproved assessment");
let count=0;
for(const d of ["docs/thpt-preview/sgk/lop-11/chuong-i","docs/assets/javascripts","docs/assets/data"])count+=scan(d);
for(const d of ["site","site-thpt-preview"]){
 count+=scan(d);
 const html=read(d+"/thpt-preview/sgk/lop-11/chuong-i/tu-kiem-tra-chuong/index.html");
 assert(html.includes("CHƯA KÍCH HOẠT"),"Built G11 readiness status changed: "+d);
 assert(!active.test(html),"Built G11 page mounts unapproved assessment: "+d);
 assert(exists(d+"/assets/javascripts/thpt-g11-chi-b03-b04-reviewed-formative-r01.js"),
  "Reviewed public formative bank missing from build: "+d);
}
console.log("PASS G11 ChI RD1 custody: "+count+" source/build client files checked, both chapter-end routes inactive; no protected item ID or file exposed.");
