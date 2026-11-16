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
   // Direct SGK KNTT Toán 10 T1: B01 (pp5–11) has FIVE main sections,
   // B02 (pp12–19) has THREE. Do not freeze the old B02 false 4-section outline.
   const expected=num===1
     ?["2.1","2.2","2.3","2.4","2.5"]
     :["2.1","2.2","2.3"];
   assert.deepEqual(subs,expected,
     "B"+num+": original SGK section parity and hierarchical numbering");
   if(num===2){
     const headings=[...source.matchAll(/^    ### 2\.\d+\. (.+)$/gm)].map(m=>m[1]);
     assert.deepEqual(headings,["Các khái niệm cơ bản về tập hợp","Các tập hợp số",
       "Các phép toán trên tập hợp"],"B02 S1 exact three main headings");
     const ids=[...source.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(m=>m[1]);
     assert.equal(ids.length,6,"B02 six First Tries retained, now in their actual S1 section");
     assert.equal(new Set(ids).size,6,"B02 no duplicate Q15 First Try");
     assert(ids.every(id=>/^THPT-G10-CHI-TRY(0[6-9]|1[01])$/.test(id)),"B02 only six original canonical IDs");
     assert.equal((source.match(/data-thpt-help-id=/g)||[]).length,3,"B02 three original D6 remediation IDs");
     for(const name of ["\\\\mathbb N","\\\\mathbb Z","\\\\mathbb Q","\\\\mathbb R",
       "G10_B02_NUMBER_SETS_INCLUSION_S1_R01.svg","#### 2.2.2.","#### 2.3.2."])
       assert(source.includes(name),"B02 S1 number-set theory or diagram missing "+name);
     assert.equal((source.match(/thpt-r4-concept-card/g)||[]).length,13,"B02 thirteen explicitly labeled S1 concepts");
     assert.equal((source.match(/class="thpt-r4-knowledge-conclusion" role="note"/g)||[]).length,4,"B02 four original amber recap cards preserved");
     assert.equal((source.match(/\*\*Phân tích\.\*\*/g)||[]).length,4,"B02 four analysis-before-solution examples");
     assert.equal((source.match(/^    ### 3\.\d\. Ví dụ \d — /gm)||[]).length,4,"B02 four Golden numbered worked examples");
     assert.equal((source.match(/\*\*Vận dụng\.\*\*/g)||[]).length,6,"B02 six unified Vận dụng titles");
     assert(!source.includes("Vì sao chọn cách giải này?")&&!source.includes("Em vận dụng —"),
       "B02 must not regress owner terminology F07/F09");
     const receipt=read("prototypes/thpt/ux795/G10_CHI_B02_S1_Q18_KNOWLEDGE_ENRICHMENT_R01_20261116.md");
     const sourceBlob=require("node:crypto").createHash("sha1")
       .update("blob "+Buffer.byteLength(source)+"\0"+source).digest("hex");
     const base=receipt.match(/^\*\*BASELINE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
     const candidate=receipt.match(/^\*\*CANDIDATE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
     assert.equal(base,"8a7b90f1768b789429def045e38ebe97e6adbf3a","B02 historic source blob immutable");
     assert.equal(candidate,sourceBlob,"B02 true S1 candidate blob must match Q18 receipt");
   }
   if(num===1){
     const names=[
       "Mệnh đề và mệnh đề chứa biến",
       "Phủ định một mệnh đề",
       "Mệnh đề kéo theo và mệnh đề đảo",
       "Mệnh đề tương đương",
       "Mệnh đề có chứa kí hiệu"
     ];
     const headings=[...source.matchAll(/^    ### 2\.\d+\. (.+)$/gm)].map(m=>m[1]);
     for(let i=0;i<names.length;i++)
       assert(headings[i].includes(names[i]),"B01: S1 content/section "+(i+1)+" changed");
     const ids=[...source.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(m=>m[1]);
     assert.equal(ids.length,5,"B01: preserve exactly five Q14 first-try hooks");
     assert.equal(new Set(ids).size,5,"B01: first-try IDs cannot be duplicated");
     assert(source.includes("### 1.3. “Mọi” và “có ít nhất một”"),
       "B01: preserve original quantifier concept formation before formalization");
     const prev=read("prototypes/thpt/ux795/G10_CHI_B01_KNOWLEDGE_ENRICHMENT_DELTA_RECEIPT_R01_20261115.md");
     const r02=read("prototypes/thpt/ux795/G10_CHI_B01_KNOWLEDGE_OWNER_P2_DELTA_RECEIPT_R02_20261115.md");
     const sourceBlob=require("node:crypto").createHash("sha1")
       .update("blob "+Buffer.byteLength(source)+"\0"+source).digest("hex");
     const r01Candidate=prev.match(/^\*\*CANDIDATE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
     const r02Baseline=r02.match(/^\*\*BASELINE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
     const r02Candidate=r02.match(/^\*\*CANDIDATE_LESSON_GIT_BLOB:\*\* \x60([a-f0-9]{40})\x60/m)?.[1];
     assert(r01Candidate&&r01Candidate===r02Baseline&&r02Candidate===sourceBlob,
       "B01 owner P2 source must preserve immutable R01→R02 Git blob chain");
     assert(!source.includes("Vì sao chọn cách này?"),"B01 owner rejected method-choice label before a method exists");
     assert.equal((source.match(/\*\*Phân tích\.\*\*/g)||[]).length,4,"B01 four examples must label analysis correctly");
     assert.equal((source.match(/\*\*Vận dụng\.\*\*/g)||[]).length,5,"B01 all five first tries use Vận dụng");
     const expectedConcepts=["Mệnh đề:","Mệnh đề chứa biến:","Mệnh đề phủ định:","Mệnh đề kéo theo:","Mệnh đề đảo:","Mệnh đề tương đương:"];
     for(const concept of expectedConcepts)
       assert(source.includes("<strong>Khái niệm — "+concept+"</strong>"),"B01 source concept missing boxed label "+concept);
     assert(source.includes("<strong>Kí hiệu — Lượng từ:</strong>"),"B01 SGK 2.5 must mark notation in box");
     assert.equal((source.match(/role="note"><strong>(?:Khái niệm|Kí hiệu) — /g)||[]).length,7,
       "B01 seven canonical S1 concept/notation labels, no duplicate summary boxes");
   }
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
   assert(/class="tabbed-set(?: [^"]+)?"/.test(html),"B"+num+": built page missing horizontal tab container");
   assert(/class="tabbed-labels(?: [^"]+)?"/.test(html),"B"+num+": built page missing selectable tabs");
   for(const label of labels)assert(html.includes(label),"B"+num+": missing tab label "+label);
   assert(!html.includes("??? question")&&!html.includes("??? tip"),
     "B"+num+": raw disclosure syntax leaked into HTML");
 }
 console.log("PASS G10 SGK B"+String(num).padStart(2,"0")+": 4 L1 tabs, concept numbering"+(built?", rendered tabs/TeX":""));
}
