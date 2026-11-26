#!/usr/bin/env node
"use strict";
/* Release assembly only: TWO MkDocs builds share the same source tree and
 * learning engines. Overlay just the THPT HTML into one GitHub Pages site;
 * preserve the prebuilt THCS HTML/assets/routes byte-for-byte.
 */
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const main=path.join(root,"site");
const preview=path.join(root,"site-thpt-preview");
const source=path.join(preview,"thpt-preview");
const target=path.join(main,"thpt-preview");
const file=p=>fs.readFileSync(path.join(main,p),"utf8");
for(const p of [
 "index.html","thcs/index.html","kien-thuc/index.html","assets/javascripts/floating-ai-tutor-v1.js",
 "assets/javascripts/firebase-gemini-v1.js","assets/javascripts/thpt-r4-preview.js",
 "assets/stylesheets/thpt-r4-preview.css"
])assert(fs.existsSync(path.join(main,p)),"Missing shared site dependency: "+p);
assert(fs.existsSync(path.join(source,"sgk/chuong-vi/bai-16/index.html")),
 "THPT dedicated MkDocs build is missing Chapter VI.");
const coverBefore=fs.readFileSync(path.join(main,"index.html"));
const thcsBefore=fs.readFileSync(path.join(main,"thcs/index.html"));
const thcsTopicBefore=fs.readFileSync(path.join(main,"kien-thuc/index.html"));
fs.cpSync(source,target,{recursive:true,force:true});
// R3 first paint: native markup and versioned assets.
const crypto=require("node:crypto");
const r3Assets=["assets/javascripts/sticky-nav-v1.js","assets/stylesheets/site-design-system.css"];
const r3Versions=r3Assets.map(p=>crypto.createHash("sha256").update(fs.readFileSync(path.join(main,p))).digest("hex").slice(0,16));
let r3Pages=0,r3Standalone=0;
function applyR3(dir){
 for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
  const p=path.join(dir,entry.name);
  if(entry.isDirectory()){applyR3(p);continue}
  if(!entry.isFile()||!p.endsWith(".html"))continue;
  const original=fs.readFileSync(p,"utf8");
  const matches=[...original.matchAll(/<button\b(?=[^>]*\bdata-md-component="top")[^>]*>[\s\S]*?<\/button>/g)];
  if(!matches.length){r3Standalone++;continue}
  assert.equal(matches.length,1,"Duplicate native Back to top: "+p);
  const old=matches[0][0],svg=old.match(/<svg\b[\s\S]*?<\/svg>/);
  assert(svg&&old.includes('class="md-top md-icon"')&&old.includes("Trở lại mục lục"),"Unexpected native button markup: "+p);
  const button='<button type="button" class="md-top md-icon slm-topic-back-top" data-md-component="top" aria-label="Về đầu trang" title="Về đầu trang" hidden>'+svg[0]+'</button>';
  let output=original.replace(old,button);
  for(let i=0;i<r3Assets.length;i++){
   const asset=r3Assets[i],attr=i===0?"src":"href";
   const rx=new RegExp('('+attr+'="[^"]*'+asset.replaceAll(".","\\.")+')"' ,"g");
   assert.equal([...output.matchAll(rx)].length,1,"Missing or duplicate R3 asset: "+p+" "+asset);
   output=output.replace(rx,(_,prefix)=>prefix+'?v='+r3Versions[i]+'"');
  }
  fs.writeFileSync(p,output,"utf8");r3Pages++;
 }
}
applyR3(target);
assert(r3Pages>=150,"Unexpected THPT native page coverage");
console.log("PASS R3 first paint: "+r3Pages+" native THPT pages; "+r3Standalone+" standalone HTML pages unchanged; versioned JS/CSS "+r3Versions.join(" "));
// End R3 first paint.
for(const p of [
 "thpt-preview/index.html","thpt-preview/home/index.html",
 "thpt-preview/sgk/chuong-vi/bai-15/index.html",
 "thpt-preview/sgk/chuong-vi/bai-16/index.html",
 "thpt-preview/sgk/chuong-vi/bai-17/index.html",
 "thpt-preview/sgk/chuong-vi/bai-18/index.html",
 "thpt-preview/sgk/chuong-vi/tu-kiem-tra-chuong/index.html",
 "thpt-preview/chuyen-de/ham-so/kien-thuc/index.html",
 "thpt-preview/chuyen-de/ham-so/luyen-tap/index.html",
 "thpt-preview/chuyen-de/ham-so/tu-kiem-tra/index.html"
])assert(fs.existsSync(path.join(main,p)),"Missing released THPT route "+p);
const html=file("thpt-preview/sgk/chuong-vi/bai-16/index.html");
for(const label of ["Trang chủ THPT","Học theo SGK KNTT","Học theo chuyên đề","Thư viện bài tập"])
 assert(html.includes(label),"THPT page lost its own MkDocs menu: "+label);
assert(!html.includes("25 chuyên đề xuyên lớp")||html.includes("Trang chủ THPT"),
 "THPT pages must use THPT-specific navigation, not THCS top menu");
assert(fs.readFileSync(path.join(main,"index.html")).equals(coverBefore),"Assemble must not change root cover bytes");
assert(fs.readFileSync(path.join(main,"thcs/index.html")).equals(thcsBefore),"Assemble must not change THCS homepage bytes");
assert(fs.readFileSync(path.join(main,"kien-thuc/index.html")).equals(thcsTopicBefore),
 "Assemble must not change THCS knowledge route bytes");
console.log("PASS assembled ONE GitHub Pages site: shared MkDocs/Gemini assets, separate THPT navigation, THCS bytes preserved.");
