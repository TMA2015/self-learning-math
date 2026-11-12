#!/usr/bin/env node
"use strict";
/* UX795 Grade 10 model-B draft rendered-HTML QA, NO deployment or academic PASS.
 * Keeps old Q15/Q16 sources untouched and never reads private RD1 answers.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const root=path.resolve(__dirname,".."),dir=path.join(root,"site-thpt-preview");
const labels=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
const chapter=n=>n<=2?"i":n<=4?"ii":n<=6?"iii":n<=11?"iv":n<=14?"v":n<=18?"vi":n<=22?"vii":n<=25?"viii":"ix";
let totalTry=0,totalHelp=0,totalImages=0;
for(let n=1;n<=27;n++){
 const route="thpt-preview/sgk/chuong-"+chapter(n)+"/bai-"+n;
 const p=path.join(dir,route,"index.html"),sourceFile=path.join(root,"docs",route+".md");
 assert(fs.existsSync(p),"B"+n+": MkDocs built page missing "+p);
 const html=fs.readFileSync(p,"utf8"),source=fs.readFileSync(sourceFile,"utf8");
 assert.equal((source.match(/^=== "/gm)||[]).length,4,"B"+n+": exact 4 native top-level tabs");
 const tabbed=(html.match(/class="tabbed-set(?: [^"]+)?"/g)||[]).length;
 assert.equal(tabbed,1,"B"+n+": exactly 1 tab set, no nested Level-2 tabs");
 assert(/class="tabbed-labels(?: [^"]+)?"/.test(html),"B"+n+": tab labels not rendered");
 for(const title of labels)assert(html.includes(title),"B"+n+": missing label "+title);
 assert(!html.includes("??? question")&&!html.includes("??? tip")&&!html.includes('=== "'),
   "B"+n+": raw MkDocs markup leaked into HTML");
 const testIDs=[...source.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(z=>z[1]);
 const helpIDs=[...source.matchAll(/data-thpt-help-id="([^"]+)"/g)].map(z=>z[1]);
 assert.equal(new Set(testIDs).size,testIDs.length,"B"+n+": duplicate First Try");
 assert.equal(new Set(helpIDs).size,helpIDs.length,"B"+n+": duplicate HELP");
 for(const id of [...testIDs,...helpIDs])assert(html.includes(id),"B"+n+": missing source ID in built page "+id);
 const folds=(source.match(/^    \?\?\? (?:question|tip) "/gm)||[]).length;
 const builtFolds=(html.match(/<details\b[^>]*class="(?:[^"]*\s)?(?:question|tip)(?:\s|")/g)||[]).length;
 assert(builtFolds>=folds,"B"+n+": folded self-reveals lost ("+folds+" vs "+builtFolds+")");
 assert(!/<details\b[^>]*\sopen(?:\s|=|>)/i.test(html),"B"+n+": answer reveal open by default");
 assert((html.match(/class="arithmatex"/g)||[]).length>0,"B"+n+": MathJax wrappers missing");
 const figs=[...html.matchAll(/<figure\b[\s\S]*?<\/figure>/g)];
 const imgs=figs.flatMap(z=>[...z[0].matchAll(/<img\b[^>]*src="([^"]+)"/g)].map(m=>m[1]));
 assert(imgs.length>0,"B"+n+": no educational figure");
 for(const im of imgs){
  assert(!/^https?:\/\//.test(im),"B"+n+": remote figure "+im);
  const clean=decodeURIComponent(im.split("?")[0].split("#")[0]);
  assert(fs.existsSync(path.resolve(path.dirname(p),clean)),"B"+n+": broken image at "+im);
 }
 assert(html.includes("thpt-g10-knowledge-hybrid-l1-v1.css"),"B"+n+": scoped Model B CSS not loaded");
 totalTry+=testIDs.length;totalHelp+=helpIDs.length;totalImages+=imgs.length;
 console.log("PASS B"+String(n).padStart(2,"0")+" four native tabs; "+testIDs.length+" First Try; "+helpIDs.length+" HELP; "+imgs.length+" image(s)");
}
console.log("PASS UX795 G10 built 27/27; First Try="+totalTry+" HELP="+totalHelp+" image="+totalImages+"; QA only, no release authorization");
