#!/usr/bin/env node
"use strict";
/*
 * Owner 11/11/2026: Topic is one independent three-page learning journey:
 * Kiến thức / Luyện tập / Tự kiểm tra. Within long Knowledge,
 * horizontal subtopic tabs (pymdownx.tabbed) help learners navigate.
 * This source/UX preflight never grants Academic/PED/CONTENT_READY.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const ROOT=path.resolve(__dirname,"..");
const DIR=path.join(ROOT,"docs/thpt-preview/chuyen-de");
const PAGES=["kien-thuc.md","luyen-tap.md","tu-kiem-tra.md"];
function walk(dir) {
 if(!fs.existsSync(dir))return [];
 return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>
   e.isDirectory()?walk(path.join(dir,e.name)):
   e.isFile()&&e.name==="kien-thuc.md"?[path.join(dir,e.name)]:[]);
}
function labels(src) {
 return [...src.matchAll(/^===\s*"([^"\n]+)"\s*$/gm)].map(m=>m[1].trim());
}
function verifyTopicKnowledge(src,pages,label) {
 assert(src.includes("Kiến thức"),label+": knowledge page missing learner-facing title");
 const names=labels(src);
 assert(names.length>=2,label+": long Topic Knowledge needs at least two horizontal subtopic tabs");
 assert(names.every(Boolean)&&new Set(names).size===names.length,
   label+": missing or duplicate subtopic label");
 const nav=src.match(/<nav\b[^>]*class="[^"]*thpt-r4-topic-steps[^"]*"[^>]*>[\s\S]*?<\/nav>/);
 assert(nav,label+": missing three-page Topic journey navigation");
 for(const fn of PAGES) {
   assert(pages[fn],label+": missing outer page "+fn);
   const href=new RegExp('href="\\.\\./'+fn.replace(/\.md$/,"")+'/"',"g");
   assert.equal((nav[0].match(href)||[]).length,1,label+": outer nav missing or duplicates "+fn);
 }
 assert.equal((nav[0].match(/<a\b/g)||[]).length,3,
   label+": Topic must have exactly 3 external learning pages, not separate Core");
 assert(!/href="[^"]*\/core\/"/i.test(nav[0]),label+": Topic must not add standalone Core");
 assert(!/^===\s*"(?:PED\d|D\d|SOURCE|REVIEW)/mi.test(src),
   label+": audit labels must not become learner tabs");
 return names.length;
}
function run(){
 const files=walk(DIR), counts=[];
 for(const f of files) {
   const base=path.dirname(f), pages={};
   for(const p of PAGES){
     const fp=path.join(base,p);
     pages[p]=fs.existsSync(fp)?fs.readFileSync(fp,"utf8"):null;
   }
   const count=verifyTopicKnowledge(pages["kien-thuc.md"],pages,path.relative(ROOT,f));
   counts.push({topic:path.relative(DIR,base),tabs:count,preview:/PILOT_PARTIAL|TECHNICAL_DEMO_ONLY/.test(pages["kien-thuc.md"]||"")});
 }
 console.log("PASS Topic horizontal subtopic tabs and three outer pages: "+JSON.stringify(counts)+". Browser/Math/PED/Ready separately gated.");
}
function selfTest(){
 const src=[
   '# Kiến thức',
   '<nav class="thpt-r4-topic-steps" aria-label="Ba phần học của chuyên đề">',
   '<a href="../kien-thuc/">Kiến thức</a><a href="../luyen-tap/">Luyện tập</a><a href="../tu-kiem-tra/">Tự kiểm tra</a>',
   '</nav>',
   '=== "Khám phá hàm số"',
   '',
   '    Xem xét biến thiên trước công thức.',
   '=== "Đồ thị"',
   '',
   '    Đọc đỉnh, trục và miền xác định.'
 ].join("\n");
 const pages=Object.fromEntries(PAGES.map(p=>[p,src]));
 assert.equal(verifyTopicKnowledge(src,pages,"positive"),2);
 assert.throws(()=>verifyTopicKnowledge(src.replace('=== "Đồ thị"',''),pages,"single tab"));
 assert.throws(()=>verifyTopicKnowledge(src.replace('=== "Đồ thị"','=== "Khám phá hàm số"'),pages,"duplicate"));
 assert.throws(()=>verifyTopicKnowledge(src.replace('href="../tu-kiem-tra/"','href="../core/"'),pages,"wrong outer nav"));
 assert.throws(()=>verifyTopicKnowledge(src,{...pages,"tu-kiem-tra.md":null},"missing page"));
 console.log("PASS Topic UX negative cases: single/duplicate tab, missing self-check, standalone Core");
}
if(process.argv.includes("--self-test"))selfTest(); else run();
