#!/usr/bin/env node
"use strict";
/* Fail-closed G10 Knowledge subsection/figure self-QA on current exact HEAD.
 * Old 27 source ledger is immutable. The corrective Delta C must equal one
 * deterministic transform of ten published Git blobs, not an unreviewed rewrite.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),
 crypto=require("node:crypto"),cp=require("node:child_process");
const {SPECS,transform,readCorrections}=require("./thpt-g10-guidance-correction-v1.cjs");
const root=path.resolve(__dirname,".."),rows=readCorrections(root);
assert.equal(rows.size,10,"B10 + B19–B27 Q18 delta receipt required");
const chapter=n=>n<=2?"i":n<=4?"ii":n<=6?"iii":n<=11?"iv":n<=14?"v":n<=18?"vi":n<=22?"vii":n<=25?"viii":"ix";
const gitBlob=text=>{const b=Buffer.from(text);return crypto.createHash("sha1").update(Buffer.from("blob "+b.length+"\0")).update(b).digest("hex");};
const getIds=(s,key)=>[...s.matchAll(new RegExp(key+'="([^"]+)"',"g"))].map(x=>x[1]).sort();
let headings=0,prompts=0,svgMoved=0;
for(let n=1;n<=27;n++){
 const p=path.join(root,"docs/thpt-preview/sgk/chuong-"+chapter(n)+"/bai-"+n+".md");
 const md=fs.readFileSync(p,"utf8");
 const tabbed=md.split(/^=== "([^"]+)"$/gm);
 assert.deepEqual([tabbed[1],tabbed[3],tabbed[5],tabbed[7]],
  ["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],"B"+n+" four L1 tabs unchanged");
 const knowledge=tabbed[4]||"";
 const titles=[...knowledge.matchAll(/^    ###\s+(.+)$/gm)].map(x=>x[1]);
 assert(titles.length>=4,"B"+n+" source Knowledge page MUST contain real smaller sections");
 headings+=titles.length;
 assert(!/\*\*Hướng dẫn đọc (?:hình|bảng)/i.test(knowledge),
  "B"+n+" must not ask learners to read a phantom existing diagram/table");
 if(!SPECS.has(n))continue;
 const row=rows.get(n),spec=SPECS.get(n);
 assert(row&&row.count===spec.count,"B"+n+" Q18 guide count");
 assert.equal(gitBlob(md),row.current,"B"+n+" exact amended source blob");
 let published;
 try{published=cp.execFileSync("git",["cat-file","blob",row.old],{encoding:"utf8",maxBuffer:3*1024*1024});}
 catch(e){throw Error("B"+n+" published source blob not available: CI checkout must fetch full history (no relaxed source parity)");}
 assert.equal(gitBlob(published),row.old,"published baseline Git blob corrupted");
 assert.equal(transform(published,n),md,"B"+n+" only exactly authorized guidance changes and SVG moves");
 for(const key of ["data-thpt-first-try-id","data-thpt-help-id","data-outcome-id"]){
  assert.deepEqual(getIds(md,key),getIds(published,key),"B"+n+" original "+key+" must be identical");
 }
 assert.equal((md.match(/<figure\b/g)||[]).length,(published.match(/<figure\b/g)||[]).length,
  "B"+n+" all original figures preserved, not duplicated");
 const corrected=[...knowledge.matchAll(/\*\*(?:Tự dựng sơ đồ minh họa|Tự dựng hình hoặc bảng|Tự phác hình minh họa):\*\*/g)];
 assert.equal(corrected.length,spec.count,"B"+n+" all drawing prompts explicitly self-constructed");
 prompts+=corrected.length;
 if(spec.asset){
  const ix=knowledge.indexOf(spec.asset),finish=knowledge.indexOf("</figure>",ix)+9;
  const guide=corrected[spec.guide-1].index;
  assert(ix>=0&&finish>ix&&guide>finish&&guide-finish<45,
   "B"+n+" the original checked SVG MUST appear immediately above its relevant drawing prompt");
  svgMoved++;
 }
}
assert.equal(prompts,48,"exact 48 formerly unsupported reading prompts");
assert.equal(svgMoved,7,"exact seven approved SVGs relocated");
const script=fs.readFileSync(path.join(root,"docs/assets/javascripts/thpt-sgk-lesson-nav-v1.js"),"utf8");
const css=fs.readFileSync(path.join(root,"docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css"),"utf8");
assert(script.includes("data-g10-knowledge-sections")||script.includes("g10KnowledgeSections"),
 "actual 27-lesson subsection outline must mount in G10-only article");
assert(css.includes(".thpt-g10-knowledge-sections"),"subsection outline must have scoped responsive styling");
console.log("PASS G10 27/27 real Knowledge sections, "+headings+" original h3 headings; 48 phantom directions replaced by self-draw instructions; seven original SVGs moved above relevant prompt. Original 10 published Git blobs, mathematical source, canonical IDs/First Try/D6 unchanged. Q18 scoped self-QA only, no publish authorization.");
