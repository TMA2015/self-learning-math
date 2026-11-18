#!/usr/bin/env node
'use strict';
// Chapter I B01–B02, source-locked research preview guard (no production release).
// Run: node prototypes/thpt/ux795/test-ux795-g10-chi-pilot.cjs
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const root=__dirname;
const cases=[
 {id:'B01',md:'G10_B01_HYBRID_KNOWLEDGE_CANDIDATE_R01.md',html:'UX795_G10_B01_CONTINUOUS_NARRATIVE_AB_R01.html',ids:[1,2,3,4,5],helps:2,figures:1,important:['Mệnh đề','Phủ định','Kéo theo','tương đương','Lượng từ']},
 {id:'B02',md:'G10_B02_HYBRID_KNOWLEDGE_CANDIDATE_R01.md',html:'UX795_G10_B02_CONTINUOUS_NARRATIVE_AB_R01.html',ids:[6,7,8,9,10,11],helps:3,figures:2,important:['Tập hợp','Giao','phần bù','Khoảng','Venn']}
];
const contentAreas=['Khám phá kiến thức','Kiến thức SGK','Ví dụ giải toán','Lỗi thường gặp và cách tự khắc phục'];
for(const item of cases){
 const src=fs.readFileSync(path.join(root,item.md),'utf8');
 const html=fs.readFileSync(path.join(root,item.html),'utf8');
 const raw=html.match(/<script type="application\/json" id="locked">([\s\S]*?)<\/script>/);
 assert(raw,'locked source JSON '+item.id);
 const data=JSON.parse(raw[1]);
 const headers=(src.match(/^## [1-4]\. .*$/gm)||[]).map(x=>x.replace(/^## [1-4]\. /,''));
 assert.deepEqual(headers,contentAreas,item.id+' uses four consistent content areas');
 assert.equal((src.match(/<figure\b/g)||[]).length,item.figures,'source SVG areas '+item.id);
 assert.equal((data.md.match(/data:image\/svg\+xml/g)||[]).length,item.figures,'embedded original SVG '+item.id);
 assert.equal((src.match(/data-thpt-help-id="/g)||[]).length,item.helps,item.id+' original HELP count');
 assert.equal((src.match(/<details\b/g)||[]).length,item.ids.length+item.helps,item.id+' all answers/help closed');
 assert.equal((src.match(/<\/details>/g)||[]).length,item.ids.length+item.helps,item.id+' all details closed');
 const actual=[...src.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(m=>m[1]);
 assert.deepEqual(actual,item.ids.map(i=>'THPT-G10-CHI-TRY'+String(i).padStart(2,'0')),item.id+' canonical IDs unchanged, unique');
 assert.equal(data.receipts.md.length,40,'SHA receipt '+item.id);
 for(const x of item.important)assert(src.toLocaleLowerCase('vi').includes(x.toLocaleLowerCase('vi')),item.id+' contains '+x);
 assert(!/Vì sao cần học\?|Em đã biết gì\?|Hiểu bản chất trước công thức|Tự thử trước Core|PREREQUISITE_CONFIRMED/.test(src),'student sees no PED checklist');
 assert(!html.includes('slm-level2'),'NO LEVEL-2 in Phase 1');
 assert(html.includes('const LEVEL1_LABELS='),'four tab labels and builder exist');
 const scripts=[...html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)];
 for(const script of scripts)if(!script[1].includes('application/json')&&script[2].trim())new vm.Script(script[2]);
 const inner=scripts.at(-1)[2];
 assert(inner.includes('function protectMathFromMarkdown'),'TeX escape protection persists');
 assert(inner.includes('function buildLevel1Tabs'),'single-level tab builder persists');
 const mathToken=src.match(/\\\([^)]*\\\)/)?.[0];
 assert(mathToken && data.md.includes(mathToken),'Math expression retained in embedded Markdown '+item.id);
 console.log('PASS '+item.id+': four content areas, '+actual.length+' first tries, '+item.helps+' HELP, '+item.figures+' original SVG, single tab tier, valid JS');
}
console.log('STATIC QA ONLY. NOT RUN: real browser AP1–AP5, MathJax/CDN, learner QA, source S1/Q18, production QA, merge/deploy.');
