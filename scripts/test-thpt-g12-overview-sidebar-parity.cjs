"use strict";
/* RELEASE R4 navigation invariant: the single website's sidebar and SGK
 * overview must advertise the SAME PUBLISHED G12 chapters and lesson routes.
 * Source of truth is MkDocs nav + actual public lesson files, not an invented
 * content status. Applies Q17, AP1/AP5, R2/R4; never touches academic content. */
const assert=require("node:assert/strict");
const fs=require("node:fs"),path=require("node:path");
const root=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const md=read("docs/thpt-preview/sgk/index.md");
const match=md.match(/<details class="library-cluster" data-thpt-filter-group data-thpt-grade="12"[\s\S]*?<\/div><\/details>/);
assert(match,"G12 SGK overview grade cluster missing");
const cluster=match[0];
const cards=[...cluster.matchAll(/<a class="library-topic-tile" data-thpt-filter-item data-thpt-chapter="(\d+)"[^>]*href="lop-12\/(chuong-[ivx]+)\/"/g)].map(x=>x[2]);
const lessons=[...cluster.matchAll(/data-thpt-search-only hidden data-thpt-chapter="\d+" data-thpt-lesson="(\d+)"[^>]*href="lop-12\/(chuong-[ivx]+)\/bai-(\d+)\/"/g)].map(x=>x[2]+"/bai-"+x[3]);
const names={i:1,ii:2,iii:3,iv:4,v:5,vi:6};
assert(cards.length>0&&cards.length===new Set(cards).size,"G12 chapter cards must be unique");
assert(lessons.length===new Set(lessons).size,"G12 search lesson routes must be unique");
const equal=(a,b,message)=>assert.deepEqual([...a].sort(),[...b].sort(),message);
for(const configName of ["mkdocs.yml","mkdocs.thpt-preview.yml"]){
 const cfg=read(configName);
 const m=cfg.match(/^      - Lớp 12:\s*\n([\s\S]*?)(?=^  - Học theo chuyên đề:)/m);
 assert(m,configName+": missing G12 sidebar section");
 const nav=m[1];
 const chapterRoutes=[...nav.matchAll(/^          - Tổng quan Chương (?:I|II|III|IV|V|VI): thpt-preview\/sgk\/lop-12\/(chuong-[ivx]+)\.md$/gm)].map(x=>x[1]);
 const lessonRoutes=[...nav.matchAll(/thpt-preview\/sgk\/lop-12\/(chuong-[ivx]+)\/bai-(\d+)\.md/g)].map(x=>x[1]+"/bai-"+x[2]);
 equal(cards,chapterRoutes,"G12 overview chapter cards must match "+configName+" sidebar");
 equal(lessons,lessonRoutes,"G12 search lessons must match "+configName+" sidebar");
 for(const r of chapterRoutes)assert(fs.existsSync(path.join(root,"docs/thpt-preview/sgk/lop-12/"+r+".md")),"Missing G12 chapter source "+r);
 for(const r of lessonRoutes)assert(fs.existsSync(path.join(root,"docs/thpt-preview/sgk/lop-12/"+r+".md")),"Missing G12 lesson source "+r);
}
assert(cluster.includes(cards.length+" chương có học liệu"),"G12 overview counter stale");
assert(!cluster.includes("Chương I–II có học liệu"),"G12 stale chapter I-II banner");
const grade=read("docs/thpt-preview/sgk/lop-12/index.md");
for(const ch of cards)assert(grade.includes('href="'+ch+'/":')||grade.includes('href="'+ch+'/">'),
 "G12 grade overview missing public chapter "+ch);
const search=read("docs/assets/javascripts/thpt-r4-preview.js");
assert(search.includes("items.filter(x=>!x.hasAttribute(\"data-thpt-search-only\")).length"),
 "Search counter must derive from live chapter items, not fixed numbers");
assert(md.includes("Đang tải danh mục"),"Do not hardcode an outdated global result count");
console.log("PASS G12 SGK navigation: two MkDocs sidebars, learner chapter/lesson routes, search and overview are consistent for "+cards.length+" published chapters and "+lessons.length+" lessons.");
