#!/usr/bin/env node
'use strict';
// SGK Toán 10 · Chương III · source + mathematical spot checks; NOT a production release gate.
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const dir=__dirname;
const specs=[
 {lesson:5,ids:[1,2,3,4,5],helps:2,figures:1},
 {lesson:6,ids:[6,7,8,9,10],helps:2,figures:2}
];
const count=(s,p)=>(s.match(p)||[]).length;
const heads=['Khám phá kiến thức','Kiến thức SGK','Ví dụ giải toán','Lỗi thường gặp và cách tự khắc phục'];
for(const spec of specs){
 const id=String(spec.lesson).padStart(2,'0');
 const md=fs.readFileSync(path.join(dir,'G10_B'+id+'_HYBRID_KNOWLEDGE_CANDIDATE_R01.md'),'utf8');
 const html=fs.readFileSync(path.join(dir,'UX795_G10_B'+id+'_CONTINUOUS_NARRATIVE_AB_R01.html'),'utf8');
 const match=html.match(/<script type="application\/json" id="locked">([\s\S]*?)<\/script>/);
 assert(match,'A/B source lock missing');
 const data=JSON.parse(match[1]);
 assert.deepEqual((md.match(/^## [1-4]\. .+$/gm)||[]).map(x=>x.replace(/^## [1-4]\. /,'')),heads,'4 page areas');
 assert.equal(count(md,/data-thpt-help-id="/g),spec.helps,'original HELP count');
 const expected=spec.ids.map(i=>'THPT-G10-CHIII-TRY'+String(i).padStart(2,'0'));
 const actual=[...md.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(x=>x[1]);
 assert.deepEqual(actual,expected,'canonical First Try IDs retained once');
 assert.equal(count(md,/<details\b/g),spec.ids.length+spec.helps,'closed self-reveal and help count');
 assert.equal(count(md,/<details\b/g),count(md,/<\/details>/g),'all HTML details balanced');
 assert.equal(count(md,/<figure\b/g),spec.figures,'educational figure count');
 assert.equal(count(data.md,/data:image\/svg\+xml/g),spec.figures,'SVG embedded in source preview');
 assert.match(data.receipts.md,/^[0-9a-f]{40}$/,'source Git SHA pinned');
 assert.equal(count(md,/\\\(/g),count(md,/\\\)/g),'inline LaTeX pairs balanced');
 assert.equal(count(md,/\\\[/g),count(md,/\\\]/g),'display LaTeX pairs balanced');
 assert(!/Vì sao cần học\?|Em đã biết gì\?|Tự thử trước Core|PREREQUISITE_CONFIRMED|PED4 N\/A/.test(md),'no student-facing audit checklist');
 assert(!html.includes('slm-level2'),'Phase 1 only four L1 tabs');
 assert(html.includes('const LEVEL1_LABELS='),'fixed 4-tab names');
 assert(html.includes('function protectMathFromMarkdown'),'MathJax backslash protection');
 assert(html.includes('function buildLevel1Tabs'),'tab rendering helper');
 for(const block of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)){
  if(!block[1].includes('application/json')&&block[2].trim())new vm.Script(block[2]);
 }
 console.log('PASS G10 B'+id+' — 4 tab areas, 5 canonical tries, 2 HELPs, '+spec.figures+' figures, maths delimiters, preview JS syntax');
}
const near=(a,b)=>Math.abs(a-b)<1e-10;
assert(near(Math.sin(120*Math.PI/180),Math.sqrt(3)/2));
assert(near(Math.cos(120*Math.PI/180),-0.5));
assert(near(Math.sin(135*Math.PI/180),Math.SQRT1_2));
assert(near(Math.cos(135*Math.PI/180),-Math.SQRT1_2));
assert(near((1-(5/13)**2),(12/13)**2));
assert(near((3/5)**2+(-4/5)**2,1));
assert.equal(5*5+5*5-2*5*5*(-0.5),75,'cosine law at 120 degrees');
assert.equal(6*6+8*8-2*6*8*0.5,52,'original B06 figure data');
assert(near((6*8*Math.sin(Math.PI/3))/2,12*Math.sqrt(3)),'B06 area matches figure');
assert.equal(8*8+5*5-2*8*5*0.5,49,'Notebook v1 data separate from figure');
assert(near((8*5*Math.sin(Math.PI/3))/2,10*Math.sqrt(3)));
assert.equal(21*8*7*6,84*84,'Heron 13/14/15');
assert.equal((13*14*15)/(4*84),65/8,'circumradius');
assert.equal(84/21,4,'inradius');
const base=20*Math.sqrt(2),s=200;
assert(near(2*s/base,10*Math.sqrt(2)),'survey altitude CH');
assert(near((20**2+20**2),base**2),'survey isosceles right triangle');
console.log('PASS CHIII numerical spot checks: special angles, cosine/sine, area, Heron, R/r, survey altitude.');
console.log('NOT RUN: SGK S1 print-page audit, real-browser MathJax/ARIA/mobile QA, Q18 independent snapshot evidence, production release tests.');
