#!/usr/bin/env node
"use strict";
/* UX795 Delta C Model B: verify every Grade 10 Chapter VI display TeX block
 * survives four-Level-1-tab Markdown and built MkDocs HTML. Source snapshots
 * are locked to Git blob SHAs. No change to banks, Mastery or Final Submit.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto");
const root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const specs={
  15:{display:1,inline:205,sha:"295b0d032c4d91cc718bf9c556924b4ff9f74da5",tries:5,extraFold:1},
  16:{display:4,inline:148,sha:"02d4bd23fd584cee78105e074766cb31f875141d",tries:5,extraFold:0},
  17:{display:4,inline:220,sha:"38f9683aa332bc713a44616eff1b7e199af3011e",tries:5,extraFold:2},
  18:{display:8,inline:118,sha:"06e97d3685f0dbfb5ef80082622eda185a5dfe7d",tries:4,extraFold:1}
};
const gitBlob=s=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(s,"utf8")+"\0").update(s).digest("hex");
function candidateSourceSha(n){
 const ledgerPath=path.join(root,"prototypes/thpt/ux795/UX795_G10_KNOWLEDGE_RELEASE_SOURCE_INTAKE_R01_20261110.md");
 if(!fs.existsSync(ledgerPath))return null;
 const lines=fs.readFileSync(ledgerPath,"utf8").split(/\r?\n/);
 const row=lines.find(x=>new RegExp("^\\|\\s*B"+String(n).padStart(2,"0")+"\\s*\\|").test(x));
 assert(row,"G10 ChVI B"+n+": candidate ledger row missing");
 const blobs=[...row.matchAll(/[a-f0-9]{40}/g)].map(x=>x[0]);
 assert.equal(blobs.length,2,"B"+n+": baseline + candidate SHA must be present");
 return blobs[1];
}

const dec=s=>s.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;/g,"'");
const normalize=s=>dec(s).replace(/^[ \t]{4}/gm,"").replace(/\s+/g," ").trim();
const built=process.argv.includes("--built");
const labels=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
for(const [lesson,spec] of Object.entries(specs)){
 const rel="docs/thpt-preview/sgk/chuong-vi/bai-"+lesson+".md";
 const source=read(rel);
 const candidate=candidateSourceSha(lesson);
 assert.equal(gitBlob(source),candidate||spec.sha,"B"+lesson+": source blob must match historical or pinned candidate ledger");

 assert.deepEqual([...source.matchAll(/^=== "([^"]+)"$/gm)].map(m=>m[1]),labels,
  "B"+lesson+": exactly four L1 tabs required");
 const open=[...source.matchAll(/^    \\\[$/gm)],close=[...source.matchAll(/^    \\\]$/gm)];
 assert(open.length>0,"B"+lesson+": all display mathematics lost");
 assert.equal(close.length,open.length,"B"+lesson+": open/close MathJax display mismatch");
 const countExpectedDisplay=candidate?open.length:spec.display;
 if(!candidate)assert.equal(open.length,spec.display,"B"+lesson+": historical display count drift");

 const display=[...source.matchAll(/^    \\\[$\n([\s\S]*?)^    \\\]$/gm)].map(m=>normalize(m[1]));
 assert.equal(display.length,countExpectedDisplay,"B"+lesson+": standalone MathJax blocks must pair");
 const inline=[...source.matchAll(/\\\(([\s\S]*?)\\\)/g)].map(m=>m[1]);
 if(candidate)assert(inline.length>0,"B"+lesson+": candidate lost all inline math");
 else assert.equal(inline.length,spec.inline,"B"+lesson+": historical math count drift");
 const ids=[...source.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(ids.length,spec.tries,"B"+lesson+": Q15 original First Try count");
 assert.equal(new Set(ids).size,ids.length,"B"+lesson+": repeated First Try");
 const helps=[...source.matchAll(/data-thpt-help-id="([^"]+)"/g)].map(m=>m[1]);
 assert.equal(new Set(helps).size,helps.length,"B"+lesson+": duplicate D6 help");
 // The pre-UX795 canonical source includes extra self-check/clarification
 // disclosure(s), beyond the uniquely identified First Try and HELP items.
 // Keep them default-closed and preserve their EXACT per-lesson counts; they
 // are not formal new item placements and do not write Mastery.
 const folds=(source.match(/^    \?\?\? (?:question|tip) "/gm)||[]);
 assert.equal(folds.length,ids.length+helps.length+spec.extraFold,
  "B"+lesson+": all original identified and extra disclosures remain default-closed");
 for(const [idIndex]of ids.entries()){
  const id=ids[idIndex],at=source.indexOf('data-thpt-first-try-id="'+id+'"');
  assert(at>=0 && /^\s*\?\?\? question "/m.test(source.slice(at,at+320)),
   "B"+lesson+": canonical First Try "+id+" must have its own closed answer");
 }
 for(const id of helps){
  const at=source.indexOf('data-thpt-help-id="'+id+'"');
  assert(at>=0 && /^\s*\?\?\? tip "/m.test(source.slice(at,at+320)),
   "B"+lesson+": original D6 "+id+" must have its own closed help");
 }
 if(built){
  const html=read("site/thpt-preview/sgk/chuong-vi/bai-"+lesson+"/index.html");
  const blocks=[...html.matchAll(/<div class="arithmatex">\\\[([\s\S]*?)\\\]<\/div>/g)].map(m=>normalize(m[1]));
  assert.equal(blocks.length,countExpectedDisplay,"B"+lesson+": built HTML lost or added a display math wrapper");
  for(let i=0;i<display.length;i++)assert.equal(blocks[i],display[i],
   "B"+lesson+": built display TeX changed at "+(i+1));
  assert(!html.includes("\n[\n"),"B"+lesson+": raw TeX display delimiters leaked to page");
  const tabLabels=(html.match(/class="tabbed-set(?: [^"]+)?"/g)||[]).length;
  assert(tabLabels>=1,"B"+lesson+": no rendered tabbed-set in MkDocs HTML");
  const visibleWrappers=(html.match(/<span class="arithmatex">\\\(/g)||[]).length;
  assert(visibleWrappers>0,"B"+lesson+": inline formulas not parsed into MathJax wrappers");
 }
 console.log("PASS B"+lesson+" UX795 math source"+(built?"+built":"")+": "+display.length+" display / "+inline.length+" inline, SHA locked, four L1 tabs, closed Q15/Q16-safe disclosures");
}
