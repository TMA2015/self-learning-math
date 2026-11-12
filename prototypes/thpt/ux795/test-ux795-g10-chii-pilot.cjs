#!/usr/bin/env node
'use strict';
// UX795 Grade 10 Chapter II: static safeguards for both B03/B04 educational drafts.
// Run in repository: node prototypes/thpt/ux795/test-ux795-g10-chii-pilot.cjs
// It does NOT claim browser/learner/AP1–AP5 or Academic Q18 approval.
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const dir=__dirname;
const cases=[
 {b:3,ids:[1,2,3,4,5],helps:2,figures:1,md:'G10_B03_HYBRID_KNOWLEDGE_CANDIDATE_R01.md',html:'UX795_G10_B03_CONTINUOUS_NARRATIVE_AB_R01.html'},
 {b:4,ids:[6,7,8,9,10],helps:2,figures:1,md:'G10_B04_HYBRID_KNOWLEDGE_CANDIDATE_R01.md',html:'UX795_G10_B04_CONTINUOUS_NARRATIVE_AB_R01.html'}
];
const count=(s,re)=>(s.match(re)||[]).length;
const four=['Khám phá kiến thức','Kiến thức SGK','Ví dụ giải toán','Lỗi thường gặp và cách tự khắc phục'];
for(const x of cases){
 const md=fs.readFileSync(path.join(dir,x.md),'utf8');
 const html=fs.readFileSync(path.join(dir,x.html),'utf8');
 const source=html.match(/<script type="application\/json" id="locked">([\s\S]*?)<\/script>/);
 assert(source,'locked A/B source missing for B0'+x.b);
 const snapshot=JSON.parse(source[1]);
 assert.equal(snapshot.receipts.md.length,40,'source SHA missing');
 const heads=(md.match(/^## [1-4]\. .+$/gm)||[]).map(v=>v.replace(/^## [1-4]\. /,''));
 assert.deepEqual(heads,four,'same four-tab outline for B0'+x.b);
 assert.equal(count(md,/<figure\b/g),x.figures,'SVG figure amount');
 assert.equal(count(snapshot.md,/data:image\/svg\+xml/g),x.figures,'embedded and locked SVG');
 assert.equal(count(md,/data-thpt-help-id=/g),x.helps,'original HELPs');
 assert.equal(count(md,/<details\b/g),x.ids.length+x.helps,'closed formative + help count');
 assert.equal(count(md,/<details\b/g),count(md,/<\/details>/g),'details markup balanced');
 const ids=[...md.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(m=>m[1]);
 assert.deepEqual(ids,x.ids.map(i=>'THPT-G10-CHII-TRY'+String(i).padStart(2,'0')),'canonical First Try IDs');
 assert.equal(count(md,/\\\(/g),count(md,/\\\)/g),'inline TeX balanced');
 assert.equal(count(md,/\\\[/g),count(md,/\\\]/g),'display TeX balanced');
 assert(!/Vì sao cần học:|Tự thử trước Core|PREREQUISITE_CONFIRMED/.test(md),'no source QA labels');
 assert(!html.includes('slm-level2'),'no Level 2 tabs');
 assert(html.includes('function buildLevel1Tabs'),'level-one builder retained');
 assert(html.includes('function protectMathFromMarkdown'),'MathJax escape shield retained');
 const scripts=[...html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)];
 for(const script of scripts)if(!script[1].includes('application/json')&&script[2].trim())new vm.Script(script[2]);
 const expectedPrompt='THPT-G10-CHII-TRY'+String(x.ids[0]).padStart(2,'0');
 assert(md.includes(expectedPrompt));
 console.log('PASS B0'+x.b+' · 4 L1 headings, '+x.ids.length+' first tries, '+x.helps+' helps, '+x.figures+' SVG, Math delimiters and JS parsed');
}
// Arithmetic and semantic spot checks of the exact examples—not substitute for S1 full review.
assert.equal(2+2*2,6);
assert.equal(3+2*2,7);
assert.equal(4*10+6*10,100);
const verts=[[0,0],[4,0],[2,4],[0,6]];
assert(verts.every(([x,y])=>x>=0&&y>=0&&x+y<=6&&2*x+y<=8),'B04 figure vertices feasible');
assert.deepEqual(verts.map(([x,y])=>3*x+2*y),[0,12,14,12]);
assert.equal((140*1+180*4)/5,172,'B03 price average');
assert.equal((140*1+180*3)/4,170,'B03 price equality');
const business=[[0,0],[60,0],[20,80],[0,100]];
assert(business.every(([x,y])=>20*x+10*y<=1200&&x+y<=100));
assert.deepEqual(business.map(([x,y])=>3.5*x+2*y),[0,210,230,200]);
console.log('PASS CHII known-number arithmetic spot checks.');
console.log('NOT RUN: browser AP1–AP5, screen reader, independent SGK S1/Q18, exact-head release QA; NO MERGE/DEPLOY.');
