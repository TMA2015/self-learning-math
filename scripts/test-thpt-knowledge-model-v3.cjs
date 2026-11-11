#!/usr/bin/env node
"use strict";
/*
 * Owner 11/11/2026: Model B is the learner-facing Knowledge layout for
 * SGK G10–G12 (B06 preview reference); Topic keeps 3 outer pages and
 * uses Adaptive Knowledge Tabs for long vertical concepts. This test is
 * semantic/layout source QA, NEVER Academic/PED or browser PASS.
 *
 * Full-grade flags are enabled only on a genuine G10/G11/G12 upgrade PR.
 * Historical pages are not rejected because they precede that rollout.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const root=path.resolve(__dirname,"..");
const expected=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
function walk(dir){
 if(!fs.existsSync(dir))return [];
 return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):
   e.isFile()&&e.name.endsWith(".md")?[path.join(dir,e.name)]:[]);
}
function tabs(src){
 return [...src.matchAll(/^===\s*"([^"]+)"\s*$/gm)].map(x=>x[1].replace(/^\d+\.\s*/,""));
}
function verify(source,label){
 const rows=tabs(source),modelB=rows.includes(expected[0]);
 if(!modelB)return false;
 assert.deepEqual(rows,expected,label+": expected EXACT four level-1 horizontal tabs, no subtopic-level tab flood");
 for(const text of ["Kiến thức SGK","Ví dụ","Lỗi thường gặp"])
   assert(source.includes(text),label+": missing essential source heading "+text);
 assert(!/\b(?:Academic PASS|PED PASS|SOURCE_RECEIPT|REVIEW_RECEIPT):/.test(source.slice(0,3000)),
   label+": audit metadata exposed at lesson opening");
 return true;
}
function grade(f){
 if(f.includes("/lop-11/"))return 11;
 if(f.includes("/lop-12/"))return 12;
 return 10;
}
function run(){
 let count={10:0,11:0,12:0};
 const files=walk(path.join(root,"docs/thpt-preview/sgk"));
 for(const f of files){
   const src=fs.readFileSync(f,"utf8");
   if(verify(src,path.relative(root,f)))count[grade(f)]++;
 }
 const expectedCounts={10:27,11:33,12:19};
 for(const arg of process.argv.filter(x=>x.startsWith("--require-grade="))){
   const g=Number(arg.split("=")[1]);
   assert([10,11,12].includes(g),"Unknown grade flag "+arg);
   assert.equal(count[g],expectedCounts[g],"Full Model B grade not ready; cannot claim 79/79");
 }
 console.log("PASS Model B source/heading QA, staged pages by grade "+JSON.stringify(count)+" (browser/AP/Math QA separate)");
}
function selfTest(){
 const valid=expected.map((x,i)=>'=== "'+x+'"\n\n'+["Em quan sát và giải thích.","Điều kiện: x > 0.","Giải từng bước.","Sửa lỗi bằng ví dụ."][i]).join("\n\n");
 assert.equal(verify(valid,"fixture"),true);
 assert.throws(()=>verify(valid.replace('=== "Ví dụ"','=== "Nhảy công thức"'),"fixture"));
 assert.throws(()=>verify(valid+'\n\n=== "Thêm tab máy móc"',"fixture"));
 assert.equal(verify("# Bài cũ\n\n## Kiến thức chuẩn\n", "legacy"),false);
 console.log("PASS Model B negative missing/extra tab and historical-page compatibility tests");
}
if(process.argv.includes("--self-test"))selfTest();else run();
