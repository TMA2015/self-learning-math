#!/usr/bin/env node
"use strict";
const {expectedG10KnowledgeBlob}=require("./thpt-q18-g10-source-receipt.cjs");
/* UX795 Model B G10 vector AP source lock: preserve exact historical snapshots
 * mathematical expression sequence exactly while allowing owner-approved
 * narrative Delta C in four independent Level-1 tabs. Not academic PASS.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),crypto=require("node:crypto");
const cases=[
 {n:7,count:9,hash:"bcee085f",sha:"76a449bbc3386e7dc244b1e981dc55f454605350",headings:5,tryCount:5,helpCount:2,figs:2},
 {n:8,count:10,hash:"e7848abf",sha:"9495a09548acffeea2763816336fc22859933890",headings:5,tryCount:5,helpCount:2,figs:1},
 {n:10,count:24,hash:"fe5bcbec",sha:"ff46465388cf3882af931fc181bb635413f7d521",headings:4,tryCount:6,helpCount:3,figs:2}
];
const fnv=s=>{let h=2166136261;for(let i=0;i<s.length;i++)h=Math.imul(h^s.charCodeAt(i),16777619);return(h>>>0).toString(16).padStart(8,"0")};
const blob=s=>crypto.createHash("sha1").update("blob "+Buffer.byteLength(s)+"\0").update(s).digest("hex");
const math=s=>[...s.matchAll(/\\\[([\s\S]*?)\\\]|\$([^$]+)\$/g)].map(m=>(m[1]??m[2]).trim());
const labels=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
/* Current S1 editorial keeps old math but relocates educational framing. */
const editorial={
  "7": {
    "sha": "d48a1b9edaec46480dc70acb519d77edf6008445",
    "sections": [
      "2.1. Khái niệm vectơ",
      "2.2. Hai vectơ cùng phương, cùng hướng, bằng nhau"
    ],
    "formulas": [
      "|\\overrightarrow{AB}|=AB\\ge0",
      "\\overrightarrow{AB}=\\overrightarrow{DC}",
      "\\overrightarrow{AA}=\\vec0"
    ]
  },
  "8": {
    "sha": "dcdb7aec2ce8afd285739bc3e098d615e4faf623",
    "sections": [
      "2.1. Tổng của hai vectơ",
      "2.2. Hiệu của hai vectơ"
    ],
    "formulas": [
      "\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}",
      "\\overrightarrow{AB}+\\overrightarrow{AD}=\\overrightarrow{AC}",
      "\\vec u-\\vec v=\\vec u+(-\\vec v)",
      "\\overrightarrow{GA}+\\overrightarrow{GB}+\\overrightarrow{GC}=\\vec0"
    ]
  },
  "10": {
    "sha": "ceaa76688e73274c9cf2d3116c41c6d4d0ac2726",
    "sections": [
      "2.1. Tọa độ của vectơ",
      "2.2. Biểu thức tọa độ của các phép toán vectơ"
    ],
    "formulas": [
      "\\overrightarrow{AB}=(x_B-x_A;",
      "\\vec u+\\vec v=(a+c;b+d)",
      "M\\left(\\frac{x_A+x_B}{2}",
      "G\\left(\\frac{x_A+x_B+x_C}{3}"
    ]
  }
};

for(const c of cases){
 const src=fs.readFileSync(path.join(__dirname,"../docs/thpt-preview/sgk/chuong-iv/bai-"+c.n+".md"),"utf8");
 assert.equal(blob(src),expectedG10KnowledgeBlob(c.n,c.sha),"B"+c.n+": pinned Delta C source snapshot changed");
 assert.deepEqual([...src.matchAll(/^=== "([^"]+)"$/gm)].map(x=>x[1]),labels,
  "B"+c.n+": exactly four Level-1 tabs required");
 const start=src.indexOf('=== "Kiến thức SGK"'),end=src.indexOf('=== "Ví dụ"',start);
 assert(start>=0&&end>start,"B"+c.n+": knowledge/example areas missing");
 const middle=src.slice(start,end),expressions=math(middle);
 const receiptPath=c.n===7?
  "G10_CHIV_B07_S1_OWNER_Q18_ENRICHMENT_DELTA_R02_20261116.md":
  c.n===8?"G10_CHIV_B08_S1_OWNER_Q18_ENRICHMENT_DELTA_R02_20261116.md":null;
 const r02=receiptPath?fs.readFileSync(path.join(__dirname,"../prototypes/thpt/ux795",receiptPath),"utf8"):null;
 const r03=c.n===7?fs.readFileSync(path.join(__dirname,
  "../prototypes/thpt/ux795/G10_CHIV_B07_HELP_LABELS_DELTA_A_R03_20261117.md"),"utf8"):
  c.n===8?fs.readFileSync(path.join(__dirname,
  "../prototypes/thpt/ux795/G10_CHIV_B08_MATHJAX_DISPLAY_DELTA_A_R03_20261117.md"),"utf8"):null;
 const r04=c.n===7?fs.readFileSync(path.join(__dirname,
  "../prototypes/thpt/ux795/G10_CHIV_B07_S1_FORCE_VELOCITY_ENRICHMENT_R04_20261117.md"),"utf8"):null;
 const field=(s,k)=>s?.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
 const signedR02=!!r02&&field(r02,"R01_APPROVED_SOURCE_BLOB")===editorial[c.n].sha&&
  field(r02,"R02_CANDIDATE_SOURCE_BLOB")===blob(src);
 const signedR03=c.n===7?
  field(r02,"R01_APPROVED_SOURCE_BLOB")===editorial[7].sha&&
  field(r03,"R02_SOURCE_BLOB")===field(r02,"R02_CANDIDATE_SOURCE_BLOB")&&
  field(r03,"R03_SOURCE_BLOB")===blob(src):
  c.n===8&&field(r02,"R01_APPROVED_SOURCE_BLOB")===editorial[8].sha&&
  field(r03,"R02_PUBLISHED_SOURCE_BLOB")===field(r02,"R02_CANDIDATE_SOURCE_BLOB")&&
  field(r03,"R03_CANDIDATE_SOURCE_BLOB")===blob(src);
 const signedR04=c.n===7&&
  field(r04,"BASELINE_R03_SOURCE_BLOB")===field(r03,"R03_SOURCE_BLOB")&&
  field(r04,"R04_SOURCE_BLOB")===blob(src)&&
  field(r04,"NEW_SVG_BLOB")===blob(fs.readFileSync(path.join(__dirname,
  "../docs/assets/images/thpt/THPT_G10_B07_FORCE_VELOCITY_REPRESENTATION_D5_R04.svg")))&&
  field(r04,"MOBILE_SVG_BLOB")===blob(fs.readFileSync(path.join(__dirname,
  "../docs/assets/images/thpt/THPT_G10_B07_FORCE_VELOCITY_MOBILE_D5_R04.svg")))&&
  src.includes('media="(max-width: 600px)"');
 const r05=c.n===7?fs.readFileSync(path.join(__dirname,
  "../prototypes/thpt/ux795/G10_CHIV_B07_SEMANTIC_CONCEPT_RECAP_DELTA_R05_20261117.md"),"utf8"):null;
 const signedR05=c.n===7&&
  field(r05,"BASELINE_R04_SOURCE_BLOB")===field(r04,"R04_SOURCE_BLOB")&&
  field(r05,"R05_SOURCE_BLOB")===blob(src);
 const b08r04=c.n===8?fs.readFileSync(path.join(__dirname,
   "../prototypes/thpt/ux795/G10_CHIV_B08_SEMANTIC_3PLUS1_DELTA_R04_20261117.md"),"utf8"):null;
 const signedB08R04=c.n===8&&
  field(b08r04,"BASELINE_R03_SOURCE_BLOB")===field(r03,"R03_CANDIDATE_SOURCE_BLOB")&&
  field(b08r04,"R04_SOURCE_BLOB")===blob(src);
 const b09r03=c.n===9?fs.readFileSync(path.join(__dirname,
  "../prototypes/thpt/ux795/G10_CHIV_B09_S1_SEMANTIC_DECOMPOSITION_R03_20261117.md"),"utf8"):null;
 const signedB09R03=c.n===9&&
  field(b09r03,"SOURCE_BASELINE_BLOB")===editorial[9].sha&&
  field(b09r03,"R03_SOURCE_BLOB")===blob(src);
 const b09r05=c.n===9?fs.readFileSync(path.join(__dirname,
  "../prototypes/thpt/ux795/G10_CHIV_B09_CANONICAL_Q18_R05_20261117.md"),"utf8"):null;
 const signedB09R05=c.n===9&&
  field(b09r05,"BASELINE_R03_SOURCE_BLOB")===field(b09r03,"R03_SOURCE_BLOB")&&
  field(b09r05,"R05_SOURCE_BLOB")===blob(src);
 const b09r06=c.n===9?fs.readFileSync(path.join(__dirname,
  "../prototypes/thpt/ux795/G10_CHIV_B09_TAB4_REAL_ERROR_P2_DELTA_C_R06_20261117.md"),"utf8"):null;
 const signedB09R06=c.n===9&&
  field(b09r06,"PRIOR_R05_SOURCE_BLOB")===field(b09r05,"R05_SOURCE_BLOB")&&
  field(b09r06,"PRIOR_R05_CANONICAL_BLOB")===field(b09r05,"ONE_CANONICAL_LESSON_BLOB")&&
  field(b09r06,"R06_SOURCE_BLOB")===blob(src);
 const b10R01=c.n===10?fs.readFileSync(path.join(__dirname,
  "../prototypes/thpt/ux795/G10_CHIV_B10_S1_PED_SINGLE_CANONICAL_Q18_R01_20261118.md"),"utf8"):null;
 const signedB10R01=c.n===10&&
  field(b10R01,"BASELINE_B10_KNOWLEDGE_BLOB")===editorial[10].sha&&
  field(b10R01,"R01_SOURCE_BLOB")===blob(src);
 const current=editorial[c.n]&&(blob(src)===editorial[c.n].sha||signedR02||signedR03||signedR04||signedR05||signedB08R04||signedB09R03||signedB09R05||signedB09R06||signedB10R01);
 if(signedR02||signedR03||signedR04||signedR05||signedB08R04||signedB09R03||signedB09R05||signedB09R06||signedB10R01)assert.equal(signedB10R01?field(b10R01,"R01_SOURCE_BLOB"):signedB09R06?field(b09r06,"R06_SOURCE_BLOB"):signedB09R05?field(b09r05,"R05_SOURCE_BLOB"):signedB09R03?field(b09r03,"R03_SOURCE_BLOB"):signedB08R04?field(b08r04,"R04_SOURCE_BLOB"):signedR05?field(r05,"R05_SOURCE_BLOB"):signedR04?field(r04,"R04_SOURCE_BLOB"):signedR03?
  field(r03,c.n===7?"R03_SOURCE_BLOB":"R03_CANDIDATE_SOURCE_BLOB"):
  field(r02,"R02_CANDIDATE_SOURCE_BLOB"),expectedG10KnowledgeBlob(c.n,c.sha),
  "B07/B08 exact immutable receipt-chain must match Q18 router");
  if(current){
  const headings=[...middle.matchAll(/^    ### ([^\n]+)$/gm)].map(m=>m[1]);
  assert.deepEqual(headings,editorial[c.n].sections,"B"+c.n+": official S1 book sections changed");
  assert(expressions.length>0||(c.n===7&&signedR05&&middle.includes("\\(")),
    "B"+c.n+": all S1 mathematical expressions missing");
  for(const required of editorial[c.n].formulas)
   assert(middle.includes(required),"B"+c.n+": essential S1 formula absent or mutated: "+required);
  assert.equal((middle.match(/data-thpt-first-try-id/g)||[]).length,0,
   "B"+c.n+": First Try leaked into formal SGK knowledge");
 }else{
  assert.equal(expressions.length,c.count,"B"+c.n+": historical formulas missing");
  assert.equal(fnv(JSON.stringify(expressions)),c.hash,
   "B"+c.n+": historical formulas changed or reordered");
  assert.equal((middle.match(/^    ### \d+\./gm)||[]).length,c.headings,
   "B"+c.n+": original SGK concept groups changed");
 }
 const tries=[...src.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(x=>x[1]);
 const helps=[...src.matchAll(/data-thpt-help-id="([^"]+)"/g)].map(x=>x[1]);
 assert.equal(tries.length,c.tryCount,"B"+c.n+": Q15 canonical First Try count changed");
 assert.equal(new Set(tries).size,c.tryCount,"B"+c.n+": duplicate First Try");
 assert.equal(helps.length,c.helpCount,"B"+c.n+": D6 HELP count changed");
 assert.equal(new Set(helps).size,c.helpCount,"B"+c.n+": duplicate HELP");
 assert.equal((src.match(/^    \?\?\? (question|tip) "/gm)||[]).length,
  c.tryCount+c.helpCount+(signedB09R06?1:0),
  "B"+c.n+": answers/remediation must stay collapsed; B09 R06 adds one genuine error 4.3 only");
 assert.equal((src.match(/<figure\b/g)||[]).length,c.figs+((signedB09R03||signedB09R05||signedB09R06)?1:0),
  "B"+c.n+": preserve original D5 and signed B09 decomposition figure");
 assert(!/PREREQUISITE_CONFIRMED|D5 kế thừa|CONTENT_READY:|data-mastery-credit/.test(src),
  "B"+c.n+": QA metadata/Mastery leaked");
 assert(signedB10R01?
  src.includes("../luyen-tap/")&&src.includes("../tu-kiem-tra-chuong/"):
  src.includes("luyen-tap.md")&&src.includes("tu-kiem-tra-chuong.md"),
  "B"+c.n+": actual working relative Core and end-of-chapter deep links missing");
}
console.log("PASS G10 vector AP: historical FNV or current exact-S1 semantic maths, 16 First Try, 7 HELP, 4 SVG and four tabs.");
