#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),crypto=require("node:crypto"),cp=require("node:child_process");
const read=p=>fs.readFileSync(p,"utf8"),buf=p=>fs.readFileSync(p);
const blob=b=>crypto.createHash("sha1").update(Buffer.from("blob "+b.length+"\0")).update(b).digest("hex");
const t=String.fromCharCode(96),r=read("prototypes/thpt/ux795/G10_CHIV_B10_S1_PED_SINGLE_CANONICAL_Q18_R01_20261118.md");
const field=k=>r.split("**"+k+":** "+t)[1]?.slice(0,40);
const delta=read("prototypes/thpt/ux795/G10_CHIV_B10_P2_MATHJAX_DELTA_A_UI_R02_20261118.md");
const dfield=k=>delta.split("**"+k+":** "+t)[1]?.slice(0,40);
assert.equal(dfield("BASELINE_R01_SOURCE_BLOB"),field("R01_SOURCE_BLOB"),"R02 must preserve published R01 source chain");
assert.equal(dfield("BASELINE_R01_CANONICAL_BLOB"),field("ONE_CANONICAL_LESSON_BLOB"),"R02 must preserve published R01 canonical chain");
const srcPath="docs/thpt-preview/sgk/chuong-iv/bai-10.md",src=read(srcPath);
const manuscriptPath="prototypes/thpt/content-drafts/THPT_G10_CHIV_B10_CANONICAL.md",manuscript=read(manuscriptPath);
const legacyPath="prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_B11_D1D6_AUTHORING_R01_SNAPSHOT.md",legacy=read(legacyPath);
const cssPath="docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css",css=read(cssPath);
const placement=read("prototypes/thpt/ux795/G10_CHIV_CHV_B07_B14_KIEM_LOI_PLACEMENT_Q18_R01_20261120.md");
assert(placement.includes("DELTA_C_ACADEMIC_MATERIAL")&&placement.includes("Q18_OWNER_SELF_VERIFIED_ENRICHMENT"),
 "B10 20/11 material HELP relocation must have signed Q18 self-QA");
const transition=key=>{
 const rows=placement.split("\n").filter(x=>x.startsWith("| "+key+" | "));
 assert.equal(rows.length,1,key+" exactly one signed predecessor/successor row");
 const pair=[...rows[0].matchAll(/`([a-f0-9]{40})`/g)].map(m=>m[1]);
 assert.equal(pair.length,2,key+" immutable old/current SHA pair");
 return pair;
};
assert.equal(require("./thpt-q18-g10-source-receipt.cjs").candidateG10KnowledgeBlob(10),blob(buf(srcPath)),"exact current B10 source and manuscript successor");
assert.deepEqual([dfield("R02_SOURCE_BLOB"),"7b0428899b64a9986689dc5723d119b4356eb06b"],transition("B10"),
 "B10 exact 18/11 P2 Knowledge → signed 20/11 Q18 HELP successor");
assert.equal(blob(buf(manuscriptPath)),"357499096e25a4a5bf5de1166472df868f142a67","exact CP11 B10 manuscript");
assert.deepEqual([dfield("R02_ONE_CANONICAL_LESSON_BLOB"),"be44fd35b3a39e814a11d0b422cfe64f67d5e7e4"],transition("CANONICAL_B10"),
 "B10 historical P2 manuscript → one signed current 20/11 manuscript");
assert.equal(blob(buf(legacyPath)),field("R01_BANK_SOURCE_BLOB"),"B10 original 8 items and W10 author packet mutated");
assert.equal(blob(Buffer.from(require("./thpt-1132-public-formative-delta.cjs").previous("docs/assets/javascripts/thpt-chiv-b09-b11-reviewed-formative-v1.js",read("docs/assets/javascripts/thpt-chiv-b09-b11-reviewed-formative-v1.js")))),
 field("R01_ORIGINAL_PUBLIC_BANK_BLOB"),"Original B09-B11 24 canonical items changed");
assert.equal(blob(buf("docs/thpt-preview/thu-vien/tu-luan-chuong-iv-b09-b11.md")),
 field("SHARED_WRITTEN_LIBRARY_BLOB"),"Public W10-RIVER library changed");
const marker="/* G10 Chapter IV B10 R01",pos=css.indexOf(marker);
assert(pos>0&&css.indexOf(marker,pos+marker.length)<0,"One B10 CSS appendix only");
assert.equal(blob(Buffer.from(css.slice(0,pos))),field("CSS_OWNER_B09_P2_BASELINE_BLOB"),
 "B01-B09 owner accepted stylesheet prefix changed");
const b11Marker="\n/* G10 Chapter IV B11 R01",cut11=css.indexOf(b11Marker);
assert(cut11>0&&css.indexOf(b11Marker,cut11+1)===-1,"Exactly one B11 scoped CSS appendix");
assert.equal(blob(Buffer.from(css.slice(0,cut11))),field("CSS_R01_SCOPED_B10_BLOB"),
 "B10 P2 stylesheet source must be byte-identical before B11 append");
const b11Receipt=read("prototypes/thpt/ux795/G10_CHIV_B11_S1_PED_CANONICAL_Q18_R01_20261118.md"),
 b11field=k=>b11Receipt.split("**"+k+":** "+t)[1]?.slice(0,40);
assert.equal(b11field("B10_P2_APPROVED_CSS_BLOB"),field("CSS_R01_SCOPED_B10_BLOB"),
 "B11 scoped style baseline must be B10 owner accepted CSS");
const goldenReceipt=read("prototypes/thpt/ux795/G10_B11_B12_OWNER_P2_GOLDEN_COMPONENT_PARITY_DELTA_A_R02_20261118.md");
const golden=k=>goldenReceipt.split("**"+k+":** "+t)[1]?.slice(0,40);
assert.equal(golden("GOLDEN_CSS_PREVIOUS_BLOB"),b11field("CSS_B11_SCOPED_APPEND_BLOB"),
 "B10/B11 accepted stylesheet remains signed by original Q18");
const b12Marker="/* G10 ChV B12 · OWNER P2 Golden parity",b12Start=css.indexOf(b12Marker);
assert(b12Start>cut11&&css.indexOf(b12Marker,b12Start+1)<0,
 "Exactly one B12 scoped semantic palette extension follows B10/B11");
assert.equal(blob(Buffer.from(css.slice(0,b12Start-1))),b11field("CSS_B11_SCOPED_APPEND_BLOB"),
 "B01–B11 approved Golden CSS prefix must be byte-exact unchanged");
const b13Marker="/* G10 ChV B13 · exact B10/B12 Golden palette";
const b13Start=css.indexOf(b13Marker);
assert(b13Start>0&&css.indexOf(b13Marker,b13Start+1)<0,
 "B13 must be exactly one scoped style addition after B12");
assert.equal(blob(Buffer.from(css.slice(0,b13Start-1))),golden("GOLDEN_CSS_CURRENT_BLOB"),
 "B01–B12 approved Golden stylesheet remains immutable");
const b13Receipt=read("prototypes/thpt/ux795/G10_CHV_B13_S1_Q18_GOLDEN_ENRICHMENT_DELTA_R01_20261119.md");
const b13Field=k=>b13Receipt.split("**"+k+":** "+t)[1]?.slice(0,40);
const b14Marker="/* G10 ChV B14 · scoped X-C RELEASE Golden",b14At=css.indexOf(b14Marker);
const receipt14=read("prototypes/thpt/ux795/G10_CHV_B14_Q18_GOLDEN_ENRICHMENT_DELTA_R01_20261119.md");
const b14Field=k=>receipt14.split("**"+k+":** "+t)[1]?.slice(0,40);
assert(b14At>0&&css.indexOf(b14Marker,b14At+1)<0,
 "B14 one scoped Golden appendix after accepted B13");
assert.equal(blob(Buffer.from(css.slice(0,b14At-1))),b13Field("CANDIDATE_GOLDEN_CSS_BLOB"),
 "B13 owner P2 CSS remains exact ancestor without edits");
assert.equal(b14Field("G10_B01_B13_FROZEN_CSS_BLOB"),b13Field("CANDIDATE_GOLDEN_CSS_BLOB"),
 "B14 signed prior CSS must match B13 candidate CSS");
assert.equal(blob(require("./test-g10-b15-golden-css-source.cjs").publishedB14Ancestor(buf(cssPath))),b14Field("CANDIDATE_GOLDEN_CSS_BLOB"),
 "B14 exact CSS SHA signed X-C, not altered old B13 receipt");
const runtimePath="docs/assets/javascripts/thpt-sgk-lesson-nav-v1.js";
const runtime=read(runtimePath);
assert.equal(field("B09_OWNER_P2_RUNTIME_BASELINE_BLOB"),"7a77c4444dfc96aeeaf87ddd17d8f9d37a6ae136");
// The current shared runtime includes the signed first-paint change.
 // Prove the original B10 runtime from Git at owner-approved R01 merge;
 // actual current behaviour is verified by exact-head Golden browser QA.
 const original=cp.spawnSync("git",["show",
  "214a117fb2e17595bad64ddde6e0fa656fee856e:"+runtimePath],
  {encoding:"utf8"});
 assert.equal(original.status,0,"B10 historical Golden JS commit must be fetched");
 assert.equal(blob(Buffer.from(original.stdout)),field("B10_SCOPED_GOLDEN_RUNTIME_BLOB"),
  "B10 signed owner-P2 original JS must remain historically immutable");
 assert(runtime.includes("data-sgk-lesson-nav")&&runtime.includes("thpt-g10-section-heading"),
  "Current first-paint runtime must retain Golden navigation and headings");
assert(runtime.includes('const isEnrichedB10=/')&&
 runtime.includes('THPT-G10-CHIV-TRY16')&&
 runtime.includes('if(isEnrichedB10)')&&
 runtime.includes('while(cur&&cur.tagName!=="H3"'),
 "B10 must receive exactly scoped DOM solution grouping with strict stop at learner self-check");
assert(css.slice(pos,cut11).includes("THPT-G10-CHIV-TRY16")&&
 !css.slice(pos,cut11).includes("THPT-G10-CHIV-TRY11")&&
 css.slice(cut11).includes("THPT-G10-CHIV-TRY21")&&
 !css.slice(cut11).includes("THPT-G10-CHIV-TRY16"),
 "B10 and B11 CSS have independent selectors, no earlier lesson restyling");
const part=n=>{
 const a="<!-- BEGIN_"+n+" -->\n",b="<!-- END_"+n+" -->";
 assert.equal(manuscript.split(a).length,2,"Missing/duplicated canonical section "+n);
 assert.equal(manuscript.split(b).length,2);
 return manuscript.split(a)[1].split(b)[0];
};
const old=(a,b)=>{
 const i=legacy.indexOf("### "+t+a+t),j=legacy.indexOf("### "+t+b+t);
 assert(i>=0&&j>i,"Original R01 start/end not found");
 return legacy.slice(i,j);
};
// Original signed B10 master contains one extra structural separator LF
// at the Section A → END marker boundary, absent from website learner Markdown.
// Both Git blob SHAs are independently locked above; do not trim substantive
// content, or relax any mathematical/ID/parity checks.
const exactKnowledge=part("B10_KNOWLEDGE_MARKDOWN");
assert(src.endsWith("\n"),"B10 learner source must retain final newline");
assert.equal(exactKnowledge,src+"\n",
 "B10 manuscript and learner are exact, except one signed section-boundary LF");
// The signed one-canonical manuscript and historical bank each contain
// 1–3 formatting newlines at their section boundary. Compare every item,
// answer and rubric byte, allowing ONLY a one-LF delimiter difference.
const exactLegacySection=(n,first,next)=>{
 const authored=part(n),archived=old(first,next);
 const trail=x=>(x.match(/\n*$/)||[""])[0].length;
 const na=trail(authored),nb=trail(archived);
 assert(na>=1&&na<=3&&nb>=1&&nb<=3&&Math.abs(na-nb)<=1,
  n+" exact original manuscript must differ at most one terminal separator LF");
 assert.equal(authored.slice(0,-na),archived.slice(0,-nb),
  n+" original canonical questions/answers/rubrics must be byte-identical");
};
exactLegacySection("B10_R01_CORE_PRACTICE","THPT-G10-B10-C01","THPT-G10-B11-C01");
exactLegacySection("B10_R01_WRITTEN","THPT-G10-CHIV-W10","THPT-G10-CHIV-W11-ANCHOR");
const ids=[...src.matchAll(/data-thpt-first-try-id="([^"]+)"/g)].map(x=>x[1]);
const help=[...src.matchAll(/data-thpt-help-id="([^"]+)"/g)].map(x=>x[1]);
assert.deepEqual(ids,["THPT-G10-CHIV-TRY16","THPT-G10-CHIV-TRY17","THPT-G10-CHIV-TRY18",
 "THPT-G10-CHIV-TRY19","THPT-G10-CHIV-TRY20","THPT-G10-CHIV-TRY-RIVER-TR01"]);
assert.deepEqual(help,["HELP-G10-B10-01","HELP-G10-B10-02","HELP-G10-CHIV-RIVER-TR01"]);
assert.equal((src.match(/^    \?\?\? question /gm)||[]).length,6);
assert.equal((src.match(/^    \?\?\? tip /gm)||[]).length,3);
assert.equal((src.match(/^    ### 3\.[1-4]\. Ví dụ/gm)||[]).length,4);
assert.equal((src.match(/<figure\b/g)||[]).length,2);
assert.deepEqual([...src.matchAll(/^=== "([^"]+)"$/gm)].map(x=>x[1]),
 ["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"]);
const disc=src.split('=== "Khám phá kiến thức"')[1].split('=== "Kiến thức SGK"')[0];
const formal=src.split('=== "Kiến thức SGK"')[1].split('=== "Ví dụ"')[0];
const worked=src.split('=== "Ví dụ"')[1].split('=== "Lỗi thường gặp"')[0];
const error=src.split('=== "Lỗi thường gặp"')[1];
assert(disc.indexOf("THPT_G10_B10_COORDINATES_DIFFERENCE_D5_R01.svg")>0&&
 disc.indexOf("THPT_G10_B10_COORDINATES_DIFFERENCE_D5_R01.svg")<
 disc.indexOf('data-thpt-first-try-id="THPT-G10-CHIV-TRY16"'),"Figure must precede student attempt");
assert.deepEqual([...formal.matchAll(/^    ### ([^\n]+)$/gm)].map(x=>x[1]),
 ["2.1. Tọa độ của vectơ","2.2. Biểu thức tọa độ của các phép toán vectơ"]);
assert((formal.match(/thpt-r4-concept-card/g)||[]).length===1&&
 (formal.match(/thpt-r4-rule-card/g)||[]).length===2&&
 (formal.match(/thpt-r4-key-formula/g)||[]).length===2,"B10 3+1 roles wrong");
assert(worked.includes("Đọc hình theo đúng dữ kiện Ví dụ 4")&&
 worked.includes("96")&&worked.includes("3")&&worked.includes("5")&&
 worked.includes("THPT_G10_B10_RIVER_VELOCITY_D5_R01.svg")&&
 worked.includes("THPT_G10_B10_RIVER_VELOCITY_MOBILE_D5_R01.svg")&&
 !worked.includes("THPT_G10_CHIV_RIVER_TRANSFER_D5_R01_CORRECTED.svg")&&
 !worked.includes("bộ dữ liệu khác"),"B10 worked river figure must match EXACT 96m/3/5 dataset, no legacy 150m graphic");
const figurePairs=[
 ["FIG_B10_COORDINATES_DESKTOP_BLOB","THPT_G10_B10_COORDINATES_DIFFERENCE_D5_R01.svg"],
 ["FIG_B10_COORDINATES_MOBILE_BLOB","THPT_G10_B10_COORDINATES_MOBILE_D5_R01.svg"],
 ["FIG_B10_RIVER_DESKTOP_BLOB","THPT_G10_B10_RIVER_VELOCITY_D5_R01.svg"],
 ["FIG_B10_RIVER_MOBILE_BLOB","THPT_G10_B10_RIVER_VELOCITY_MOBILE_D5_R01.svg"]
];
for(const [k,name] of figurePairs){
 assert.equal(blob(buf("docs/assets/images/thpt/"+name)),field(k),
   "B10 signed pedagogical SVG Git blob drift: "+name);
 assert(src.includes(name),"B10 missing source-locked desktop/mobile SVG "+name);
}
assert(r.includes("FIG_GEOMETRY_VERIFIED")&&r.includes("FIRST_TRY_PRESERVATION"),
 "B10 Q18 must state math proof and previous self-try custody");
assert(!src.includes(t)&&!src.includes("Assessment safety")&&!src.includes("EX-G10-B10-RIVER-TR01")&&
 !src.includes("HELP_ID"),"B10 learner text exposes source/metadata or code style");
// Three item-specific D6 disclosures were moved into Discovery on 20/11;
 // original HELP_ID and repair reasoning remain intact, not duplicated in Tab4.
 assert.equal((disc.match(/^    \?\?\? tip "Kiểm lỗi"/gm)||[]).length,3,
  "B10 three local Kiểm lỗi disclosures must be under Vận dụng");
 assert.equal((error.match(/data-thpt-help-id=/g)||[]).length,0,
  "B10 Tab4 must not duplicate canonical HELP anchors");
 for(const token of ["Vì sao sai","Tự kiểm","Ôn và luyện lại"])
  assert(disc.includes(token),"B10 local D6 missing mistake→cause→repair "+token);
for(const token of ["\\vec u=x\\vec i+y\\vec j","\\vec0=(0;0)",
 "\\overrightarrow{AB}=(x_B-x_A;y_B-y_A)","\\vec u+\\vec v=(a+c;b+d)",
 "AB=\\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}","ad-bc=0",
 "\\overrightarrow{GA}+\\overrightarrow{GB}+\\overrightarrow{GC}=\\vec0"])
 assert(src.includes(token),"B10 mandatory S1 math missing "+token);
assert(!/data-mastery-credit|data-readiness-answer/.test(src),"Mastery/Readiness leak");
// P2 regression: do not let Markdown backslash escaping silently turn \\[...\\] into raw [..] in HTML.
assert(!/^\s*\\\[$/m.test(src)&&!/^\s*\\\]$/m.test(src),"B10 source contains unrenderable raw MathJax display delimiters");
assert.equal((src.match(/<div class="arithmatex">\\\(\\displaystyle /g)||[]).length,8,
 "Exactly eight formulas in four former raw display blocks must use reliable arithmatex inline wrappers");
for(const tex of ["\\vec u+\\vec v=(a+c;b+d)","AB=\\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}",
 "M\\left(\\frac{x_A+x_B}{2};\\frac{y_A+y_B}{2}\\right)",
 "v_{\\mathrm{riêng},y}=\\sqrt{5^2-3^2}=4\\,\\mathrm{m/s}."])
 assert(src.includes(tex),"B10 P2 required rendered expression missing: "+tex);
assert.notEqual(blob(Buffer.from(src+" ")),transition("B10")[1],"Mutation detector ineffective");
console.log("PASS B10 one canonical source and 8 original immutable questions/W10, 6 First Try/3 HELP, two figures/four SVG, four worked examples, semantic math, CSS old prefix and negative test");
