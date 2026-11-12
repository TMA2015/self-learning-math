#!/usr/bin/env node
'use strict';
// PR #797 · UX795 mathematical typesetting smoke regression.
// Pure Node.js/no packages/no network. This is NOT a browser or learner verdict.
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const html=fs.readFileSync(path.join(__dirname,'UX795_G10_B02_CONTINUOUS_NARRATIVE_AB_R01.html'),'utf8');
const locked=html.match(/<script type="application\/json" id="locked">([\s\S]*?)<\/script>/);
assert(locked,'locked source data exists');
const data=JSON.parse(locked[1]);
assert.match(data.receipts.md,/^[0-9a-f]{40}$/);
const scripts=[...html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)];
for(const script of scripts){if(!script[1].includes('application/json') && script[2].trim())new vm.Script(script[2]);}
const app=scripts.at(-1)[2];
const view={innerHTML:'',querySelectorAll:()=>[]};
const status={textContent:''},mathStatus={textContent:''};
const button=()=>({setAttribute:()=>{},addEventListener:()=>{}});
const document={
 getElementById(id){return {
  locked:{textContent:JSON.stringify(data)},
  view,status,'math-status':mathStatus,
  a:button(),b:button()
 }[id];},
 addEventListener:()=>{}
};
const window={
 // Simulate a Markdown engine that ACTIVELY STRIPS backslash escapes.
 marked:{parse:md=>md.replace(/\\([()\[\]{}a-zA-Z])/g,'$1')},
 addEventListener:()=>{},
 MathJax:{
  startup:{promise:Promise.resolve()},
  typesetClear:()=>{},
  typesetPromise:()=>Promise.resolve()
 }
};
const context=vm.createContext({document,window,Promise});
vm.runInContext(app,context,{timeout:1000});
assert.equal(typeof context.renderLearnerMarkdown,'function');
const rendered=context.renderLearnerMarkdown(data.md);
const count=(source,pattern)=>(source.match(pattern)||[]).length;
for(const pattern of [/\\\(/g,/\\\)/g,/\\\[/g,/\\\]/g]){
 assert.equal(count(rendered,pattern),count(data.md,pattern),'Math delimiters preserved through Markdown');
}
for(const probe of [
 '\\(2\\in A\\)',
 '\\(\\{2\\}\\subseteq A\\)',
 '\\mathbb N',
 'A\\cap B',
 'A\\setminus B'
])assert(rendered.includes(probe),'lost TeX '+probe);
assert(!rendered.includes('SLMMATHTOKEN'),'no leaked placeholder');
for(const id of ['THPT-G10-CHI-TRY06','THPT-G10-CHI-TRY07','THPT-G10-CHI-TRY08','THPT-G10-CHI-TRY09','THPT-G10-CHI-TRY10','THPT-G10-CHI-TRY11']){
 assert.equal(count(rendered,new RegExp(id,'g')),1,'canonical First Try appears once: '+id);
}
assert.equal(count(rendered,/<details\b/g),count(rendered,/<\/details>/g),'self-reveal blocks balanced');
assert.equal(count(rendered,/<details\b/g),9,'6 first tries + 3 help cards');
assert.match(html,/window\.addEventListener\('load',typesetMath\)/,'late MathJax resource startup handled');
assert.match(html,/typesetClear/,'re-render clears old MathJax state');
console.log('PASS: TeX survives hostile Markdown escaping, inline/display delimiters balanced; 6/6 IDs, 9/9 blocks, late MathJax startup covered.');
console.log('NOT RUN: actual CDN connectivity, Chromium/Safari, responsive, MathJax typeset output.');
