#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),crypto=require("node:crypto"),vm=require("node:vm");
const read=p=>fs.readFileSync(p,"utf8");
const blob=b=>crypto.createHash("sha1").update(Buffer.concat([Buffer.from("blob "+b.length+"\\0"),b])).digest("hex");
const sourcePath="prototypes/thpt/content-drafts/THPT_G11_CHI_B01_B04_FULL_CHAPTER_D1_D6_REVIEW_SOURCE_R01_20261031.md";
const bytes=fs.readFileSync(sourcePath);
assert.equal(blob(bytes),"599d12ac7c2252001f881833c39978f94112cee4","Reviewed source byte lock");
const source=bytes.toString("utf8");
const start=source.indexOf("## D3 — SGK Core, Practice, Application"),end=source.indexOf("## D4 — 4 Written",start);
assert(start>=0&&end>start,"Missing original D3 section");const section=source.slice(start,end);
const heads=[...section.matchAll(/^### (THPT-G11-B(03|04)-([CP])\\d{2}) — (SGK_CORE|SGK_PRACTICE) · ([A-Z0-9_-]+) · ([A-Z_]+)\\s*$/gm)];
assert.equal(heads.length,26,"26 source public canonical Core/Practice");
const field=(txt,name)=>{const x=txt.match(new RegExp("^\\*\\*"+name+":\\*\\* (.+)$","m"));assert(x,"Missing "+name);return x[1].trim()};
const expected=heads.map((m,i)=>{const t=section.slice(m.index+m[0].length,heads[i+1]?.index??section.length);return {
 item_id:m[1],lesson:String(Number(m[2])),grade:"11",role:m[4]==="SGK_CORE"?"CORE":"PRACTICE",skill:m[5],stem:field(t,"Đề"),hint:"Xem lại kiến thức và ví dụ ở Bài "+Number(m[2])+" trước khi đối chiếu lời giải.",
 solution:"Đáp án: "+field(t,"Đáp án")+"\\nLời giải: "+field(t,"Lời giải"),difficulty:m[6],exposure:"FORMATIVE_ONLY"
}});
const window={};vm.runInNewContext(read("docs/assets/javascripts/thpt-g11-chi-b03-b04-reviewed-formative-r01.js"),{window});
const bank=window.THPT_G11_CHI_B03_B04_REVIEWED_FORMATIVE;
assert(bank?.validate().valid,"New G11 public bank invalid");
assert.equal(JSON.stringify(bank.records),JSON.stringify(expected),"New 26 records must match reviewed source");
const legacy={};vm.runInNewContext(read("docs/assets/javascripts/thpt-g11-chi-reviewed-formative-v1.js"),{window:legacy});
assert.equal(legacy.window.THPT_G11_CHI_REVIEWED_FORMATIVE.records.length,16);
const ids=[...legacy.window.THPT_G11_CHI_REVIEWED_FORMATIVE.records,...bank.records].map(x=>x.item_id);
assert.equal(new Set(ids).size,42,"Canonical Core/Practice collision");
for(const [n,c,p] of [[3,4,8],[4,4,10]]) {
 assert.equal(bank.forLesson(n,"core").length,c);
 assert.equal(bank.forLesson(n,"practice").length,p);
 const page=read("docs/thpt-preview/sgk/lop-11/chuong-i/bai-"+n+".md");
 assert(page.includes("## 1. Kiến thức SGK")&&page.includes("## 2. Ví dụ giải thích bản chất"),"Complete lesson D1/D2");
 for(const x of ["HELP-G11-B0"+n+"-01","HELP-G11-B0"+n+"-02"])assert(page.includes(x),"Missing remediation "+x);
 const hub=read("docs/thpt-preview/sgk/lop-11/chuong-i/luyen-tap.md");
 for(const role of ["core","practice"])assert(hub.includes('data-thpt-open-quiz="g11-b'+n+'-'+role+'"'),"Missing practice route");
}
const figureNames=["FIG-G11-B03-01_R01.svg","FIG-G11-B03-02_R01.svg","FIG-G11-B03-03_R01.svg","FIG-G11-B03-04_R01.svg"];
const figureHashes=["0ec702b2c7e4059fec5b27ba2e14713b9cb68e34","e394b70aa5b3e238fd09cd4eac7076e2900193de","719bb8bad9d5d041893d64cb455197139f6c75a4","784a6486a46ad770a6faf9466301477bcf0a722a"];
for(let i=0;i<4;i++){const x=fs.readFileSync("docs/assets/images/thpt/"+figureNames[i]);assert.equal(blob(x),figureHashes[i],"Source figure SHA mismatch");assert(!/<script/i.test(x.toString()));}
const library=read("docs/thpt-preview/thu-vien/tu-luan-g11-chuong-i-b01-b02.md");
for(const id of ["THPT-G11-CHI-W01","THPT-G11-CHI-W02-ANCHOR","THPT-G11-CHI-W03","THPT-G11-CHI-W04-ANCHOR"]) {
 assert.equal(library.split('data-thpt-written-canonical="'+id+'"').length-1,1,"Shared Written canonical ID duplicated/missing "+id);
}
const runtime=read("docs/assets/javascripts/thpt-r4-preview.js");
assert(runtime.includes("THPT_G11_CHI_B03_B04_REVIEWED_FORMATIVE"));
const config=read("mkdocs.yml"),preview=read("mkdocs.thpt-preview.yml");
assert(config.includes("assets/javascripts/thpt-g11-chi-b03-b04-reviewed-formative-r01.js"));
assert(preview.includes("chuong-i/bai-3.md")&&preview.includes("chuong-i/bai-4.md"));
const readiness=read("docs/thpt-preview/sgk/lop-11/chuong-i/tu-kiem-tra-chuong.md");
assert(readiness.includes("CHƯA KÍCH HOẠT"),"Do not claim readiness released without independent approved engine");
assert(!runtime.includes("g11-b3-scores")&&!runtime.includes("g11-b4-scores"));
console.log("PASS G11 ChI B03/B04 staged 26 source-locked Core/Practice, 2 new shared Written, 4 SVG, 4 D6; 42 formative IDs total and independent RD1 still HOLD");
