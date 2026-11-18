#!/usr/bin/env node
'use strict';
// Static + DOM-shim smoke QA for the non-published UX #795 A/B prototype.
// No dependencies, no network, no evaluation of user input.
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const file=path.join(__dirname,'UX795_HYBRID_CROSSGRADE_AB_20261108.html');
const html=fs.readFileSync(file,'utf8');
assert(html.includes('<meta name="robots" content="noindex,nofollow">'));
assert(!html.includes('firebase.initializeApp'));
assert(html.includes('không chấm điểm'));
const match=html.match(/<script type="application\/json" id="locked">([\s\S]*?)<\/script>/);
assert(match,'source data present');
const records=JSON.parse(match[1]);
assert.equal(records.length,3,'three cross-grade cases');
assert.deepEqual(records.map(x=>x.id),['g10-b02','g11-b08','g12-b07']);
const embeddedScripts=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map(x=>x[1]);
for(const code of embeddedScripts){if(code.trim())new vm.Script(code)}
const app=embeddedScripts.at(-1);
const article={innerHTML:'',className:'',querySelectorAll:()=>[]};
const selector={value:records[0].id,addEventListener(){}};
const buttons=['A','B'].map(view=>({
 dataset:{view},pressed:view==='A',
 getAttribute(k){return k==='aria-pressed'?String(this.pressed):null},
 setAttribute(k,v){if(k==='aria-pressed')this.pressed=v==='true'},
 addEventListener(){}
}));
const status={textContent:''},report={textContent:''};
const document={
 getElementById(id){return {locked:{textContent:JSON.stringify(records)},article,'lesson-select':selector,'view-status':status,report}[id]},
 querySelectorAll(){return buttons}
};
const context={document,window:{}};
vm.runInNewContext(app,context,{timeout:1000});
const h2=source=>[...source.matchAll(/<h2(?:\s[^>]*)?>([\s\S]*?)<\/h2>/g)].map(m=>m[1].replace(/<[^>]+>/g,'').trim());
const figures=source=>(source.match(/<figure\b/g)||[]).length;
const ids=source=>[...source.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(m=>m[1]);
for(const row of records){
 assert.match(row.mdSha,/^[a-f0-9]{40}$/);
 assert.match(row.svgSha,/^[a-f0-9]{40}$/);
 assert.match(row.pageSha,/^[a-f0-9]{40}$/);
 assert(row.article.includes('data:image/svg+xml'),'source SVG embedded unchanged');
 selector.value=row.id;
 buttons.forEach(x=>x.pressed=x.dataset.view==='A');
 assert.equal(typeof context.render,'function');
 context.render();
 const before=article.innerHTML;
 const count=figures(before);
 assert(count>=1,'figure present for each selected case');
 buttons.forEach(x=>x.pressed=x.dataset.view==='B');
 context.render();
 const after=article.innerHTML;
 assert.deepEqual(h2(after).slice(0,4),[
  'Khám phá kiến thức','Kiến thức SGK','Ví dụ giải toán','Lỗi thường gặp và cách khắc phục'
 ],row.id+': uniform four-area page hierarchy');
 assert(after.includes('<h3>Thuật ngữ và kiến thức, kỹ năng</h3>'),row.id+': terms after Discovery');
 assert.equal(figures(after),count,row.id+': source figure retained once');
 assert.equal(ids(after).length,new Set(ids(after)).size,row.id+': no duplicated canonical first-try');
 assert.equal(ids(after).length,ids(before).length,row.id+': first-try placement preserved');
 assert(!/PREREQUISITE_CONFIRMED|PED4|FIG-G10-B02-/.test(after),row.id+': no known audit tokens in hybrid');
 console.log('PASS '+row.id+' · 4 main sections · SVG figure · first-try preserved');
}
console.log('PASS UX795 static/DOM-shim checks (NOT browser/AP5, MathJax or learner QA)');
