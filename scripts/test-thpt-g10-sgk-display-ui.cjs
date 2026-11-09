#!/usr/bin/env node
"use strict";
/* UI-only regression for SGK Grade 10 Knowledge under UX795 owner-approved
 * four-Level-1-tab Model B. Keep former requirements: no redundant example
 * headings, hierarchical concept numbering, and exact TeX source/render parity.
 * This guard does not approve academic Delta C, Mastery, RD1 or publication.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path");
const root=path.resolve(__dirname,".."),read=p=>fs.readFileSync(path.join(root,p),"utf8");
const built=process.argv.includes("--built");
const listed={i:[1,2],ii:[3,4],iii:[5,6],vii:[19,20,21],viii:[23,24,25],ix:[26,27]};
const labels=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
const htmlDecode=value=>value.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&").replace(/&quot;/g,'"').replace(/&#39;|&#x27;/g,"'");
const normalize=s=>htmlDecode(s).replace(/^[ \t]{4}/gm,"").replace(/\s+/g," ").trim();
for(const [chapter,nums] of Object.entries(listed))for(const num of nums){
 const base="thpt-preview/sgk/chuong-"+chapter+"/bai-"+num;
 const source=read("docs/"+base+".md");
 const tabs=[...source.matchAll(/^=== "([^"]+)"$/gm)].map(m=>m[1]);
 assert.deepEqual(tabs,labels,"B"+num+": exactly four approved Level-1 tabs");
 assert(!/^==== /m.test(source),"B"+num+": Level-2 tab is outside approved phase 1");
 assert(!/^## \d+\. Ví dụ/m.test(source),"B"+num+": obsolete top-level example heading");
 assert(!/Ví dụ giải mẫu|Ví dụ đã giải|Ví dụ mẫu có giải thích|Ví dụ từng bước|Ví dụ có kiểm tra/.test(source),
  "B"+num+": redundant example labels are not learner-facing");
 if(num===1||num===2){
   const subs=[...source.matchAll(/^    ### (2\.\d+)\. /gm)].map(m=>m[1]);
   assert.deepEqual(subs,["2.1","2.2","2.3","2.4"],
    "B"+num+": keep four SGK concept subsections and hierarchical numbering");
 }
 if([3,5,6].includes(num)){
   const opens=(source.match(/^    \\\[$/gm)||[]).length,closes=(source.match(/^    \\\]$/gm)||[]).length;
   const display=[...source.matchAll(/^    \\\[$\n([\s\S]*?)^    \\\]$/gm)].map(m=>normalize(m[1]));
   assert(opens>0&&opens===closes&&display.length===opens,
    "B"+num+": every display TeX must be a standalone Markdown paragraph");
   if(built){
     const html=read("site/"+base+"/index.html");
     const rendered=[...html.matchAll(/<div class="arithmatex">\\\[([\s\S]*?)\\\]<\/div>/g)].map(m=>normalize(m[1]));
     assert.equal(rendered.length,display.length,"B"+num+": TeX leaked or missing in built HTML");
     for(let i=0;i<display.length;i++)assert.equal(rendered[i],display[i],
       "B"+num+": built mathematical content drift at block "+(i+1));
   }
 }
 if(built){
   const html=read("site/"+base+"/index.html");
   assert(/class="tabbed-set"/.test(html),"B"+num+": built page missing horizontal tab container");
   assert(/class="tabbed-labels"/.test(html),"B"+num+": built page missing selectable tabs");
   for(const label of labels)assert(html.includes(label),"B"+num+": missing tab label "+label);
   assert(!html.includes("??? question")&&!html.includes("??? tip"),
     "B"+num+": raw disclosure syntax leaked into HTML");
 }
 console.log("PASS G10 SGK B"+String(num).padStart(2,"0")+": 4 L1 tabs, concept numbering"+(built?", rendered tabs/TeX":""));
}
