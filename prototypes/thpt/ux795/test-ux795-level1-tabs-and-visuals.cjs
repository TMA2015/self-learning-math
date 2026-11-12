#!/usr/bin/env node
'use strict';
// UX795 Phase 1 smoke test: exactly four level-one tabs, two educational SVGs.
// No external dependencies, no network, no production behavior simulation claims.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const dir=__dirname;
const html=fs.readFileSync(path.join(dir,'UX795_G10_B02_CONTINUOUS_NARRATIVE_AB_R01.html'),'utf8');
const md=fs.readFileSync(path.join(dir,'G10_B02_HYBRID_KNOWLEDGE_CANDIDATE_R01.md'),'utf8');
const newSvg=fs.readFileSync(path.join(dir,'images/G10_B02_MEMBERSHIP_SUBSET_R01.svg'),'utf8');
const payload=html.match(/<script type="application\/json" id="locked">([\s\S]*?)<\/script>/);
assert(payload,'Locked HTML pilot source JSON');
const source=JSON.parse(payload[1]);
assert.equal((md.match(/^## \d\. /gm)||[]).length,4,'Four H2 lesson areas');
assert.deepEqual(
 (md.match(/^## \d\. .*/gm)||[]).map(x=>x.replace(/^## \d\. /,'')),
 ['Khám phá kiến thức','Kiến thức SGK','Ví dụ giải toán','Lỗi thường gặp và cách tự khắc phục']);
assert.equal((md.match(/<figure\b/g)||[]).length,2,'New membership and existing Venn figures');
assert.equal((source.md.match(/<figure\b/g)||[]).length,2,'Both figures embedded in pilot');
assert.equal((source.md.match(/data:image\/svg\+xml/g)||[]).length,2,'Two source-pinned SVGs');
assert(source.md.includes('SLM')===false || !source.md.includes('SLMMATHTOKEN'),'No math mask in source');
assert(md.includes('| Em muốn diễn đạt | Ký hiệu |'),'Comparison table accompanies definition');
assert(newSvg.includes('<title') && newSvg.includes('<desc') && newSvg.includes('viewBox'),'Semantic SVG source');
assert(source.receipts.subsetSvg,'New SVG blob receipt');
assert.equal((md.match(/data-thpt-first-try-id="/g)||[]).length,6);
assert.equal((md.match(/data-thpt-help-id="/g)||[]).length,3);
assert.equal((md.match(/<details\b/g)||[]).length,(md.match(/<\/details>/g)||[]).length);
assert(!html.includes('slm-level2-tabs'),'No second-tier tabs');

const scripts=[...html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)];
for(const script of scripts){if(!script[1].includes('application/json') && script[2].trim())new vm.Script(script[2]);}
const app=scripts.at(-1)[2], begin=app.indexOf('function buildLevel1Tabs'),end=app.indexOf('let activeTypeset=');
assert(begin>=0 && end>begin,'Reusable single-level tab builder present');

class E{
 constructor(tag,text=''){this.nodeType=1;this.tagName=tag.toUpperCase();this.textContent=text;this.childNodes=[];this.parentNode=null;this.attrs={};this.handlers={};this.hidden=false;}
 appendChild(node){if(node.parentNode)node.parentNode.childNodes=node.parentNode.childNodes.filter(x=>x!==node);this.childNodes.push(node);node.parentNode=this;return node}
 insertBefore(node,ref){if(node.parentNode)node.parentNode.childNodes=node.parentNode.childNodes.filter(x=>x!==node);const i=this.childNodes.indexOf(ref);assert(i>=0);this.childNodes.splice(i,0,node);node.parentNode=this}
 setAttribute(k,v){this.attrs[k]=v}
 getAttribute(k){return this.attrs[k]}
 addEventListener(k,fn){this.handlers[k]=fn}
 querySelectorAll(){return []}
 focus(){this.focused=true}
}
const view=new E('article');
view.appendChild(new E('h1','Toán 10 Bài 2'));
const headers=['1. Khám phá kiến thức','2. Kiến thức SGK','3. Ví dụ giải toán','4. Lỗi thường gặp và cách tự khắc phục'];
headers.forEach((h,i)=>{view.appendChild(new E('h2',h));view.appendChild(new E('p','Nội dung thật '+i))});
const status={textContent:''};let mathCalls=0;
const context={view,document:{createElement:tag=>new E(tag)},status,LEVEL1_LABELS:['Khám phá kiến thức','Kiến thức SGK','Ví dụ','Lỗi thường gặp'],typesetMath(){mathCalls++}};
const builder=new Function('view','document','status','LEVEL1_LABELS','typesetMath','let selectedLearningTab=0;\n'+app.slice(begin,end)+'\nreturn buildLevel1Tabs;')(
 context.view,context.document,context.status,context.LEVEL1_LABELS,context.typesetMath);
const built=builder();
assert(built,'Four correct source areas recognised');
assert.equal(built.buttons.length,4);
assert.equal(built.panels.length,4);
assert.equal(view.childNodes.filter(n=>n.attrs.role==='tablist').length,1,'one tab row');
assert(built.panels.every((p,i)=>p.childNodes.length===2 && p.childNodes[0].textContent===headers[i]),'all content stays next to own H2');
assert.equal(built.panels.filter(p=>!p.hidden).length,1);
built.buttons[2].handlers.click();
assert.equal(built.panels[2].hidden,false);
assert.equal(built.panels.filter(p=>!p.hidden).length,1);
built.buttons[2].handlers.keydown({key:'ArrowRight',preventDefault(){}});
assert.equal(built.panels[3].hidden,false);
assert(built.buttons[3].focused);
built.buttons[3].handlers.keydown({key:'Home',preventDefault(){}});
assert.equal(built.panels[0].hidden,false);
assert(built.buttons[0].focused);
assert.equal(mathCalls,4,'selecting visible panel triggers math pipeline');
console.log('PASS UX795 Phase 1: exactly 4 horizontal tabs, role/tabpanel, click + keyboard, 4 content regions, 2 source figures, table, 6 original First Try and 3 HELP IDs.');
console.log('NOT RUN: actual browser rendering, mobile/iPad Safari, MathJax CDN, screen reader, full Q01–Q18/P1/P2 gates.');
