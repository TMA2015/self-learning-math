#!/usr/bin/env node
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),crypto=require("node:crypto");
const read=p=>fs.readFileSync(p,"utf8"),buf=p=>fs.readFileSync(p);
const blob=b=>crypto.createHash("sha1").update(Buffer.from("blob "+b.length+"\0")).update(b).digest("hex");
const t=String.fromCharCode(96),r=read("prototypes/thpt/ux795/G10_CHIV_B10_S1_PED_SINGLE_CANONICAL_Q18_R01_20261118.md");
const field=k=>r.split("**"+k+":** "+t)[1]?.slice(0,40);
const srcPath="docs/thpt-preview/sgk/chuong-iv/bai-10.md",src=read(srcPath);
const manuscriptPath="prototypes/thpt/content-drafts/THPT_G10_CHIV_B10_CANONICAL.md",manuscript=read(manuscriptPath);
const legacyPath="prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_B11_D1D6_AUTHORING_R01_SNAPSHOT.md",legacy=read(legacyPath);
const cssPath="docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css",css=read(cssPath);
assert.equal(blob(buf(srcPath)),field("R01_SOURCE_BLOB"),"B10 current Knowledge source does not match Q18 SHA");
assert.equal(blob(buf(manuscriptPath)),field("ONE_CANONICAL_LESSON_BLOB"),"B10 ONE academic manuscript SHA altered");
assert.equal(blob(buf(legacyPath)),field("R01_BANK_SOURCE_BLOB"),"B10 original 8 items and W10 author packet mutated");
assert.equal(blob(buf("docs/assets/javascripts/thpt-chiv-b09-b11-reviewed-formative-v1.js")),
 field("R01_ORIGINAL_PUBLIC_BANK_BLOB"),"Original B09-B11 24 canonical items changed");
assert.equal(blob(buf("docs/thpt-preview/thu-vien/tu-luan-chuong-iv-b09-b11.md")),
 field("SHARED_WRITTEN_LIBRARY_BLOB"),"Public W10-RIVER library changed");
const marker="/* G10 Chapter IV B10 R01",pos=css.indexOf(marker);
assert(pos>0&&css.indexOf(marker,pos+marker.length)<0,"One B10 CSS appendix only");
assert.equal(blob(Buffer.from(css.slice(0,pos))),field("CSS_OWNER_B09_P2_BASELINE_BLOB"),
 "B01-B09 owner accepted stylesheet prefix changed");
assert.equal(blob(buf(cssPath)),field("CSS_R01_SCOPED_B10_BLOB"),"B10 CSS SHA changed without new Q18 receipt");
assert(css.slice(pos).includes("THPT-G10-CHIV-TRY16")&&!css.slice(pos).includes("THPT-G10-CHIV-TRY11"));
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
assert.equal(part("B10_KNOWLEDGE_MARKDOWN"),src,"Public Knowledge not byte-identical with ONE current manuscript");
assert.equal(part("B10_R01_CORE_PRACTICE"),old("THPT-G10-B10-C01","THPT-G10-B11-C01"),
 "B10 original 8 records/keys/solutions not exact");
assert.equal(part("B10_R01_WRITTEN"),old("THPT-G10-CHIV-W10","THPT-G10-CHIV-W11-ANCHOR"),
 "Original W10 rubrics not exact");
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
assert(worked.includes("bộ dữ liệu khác")&&worked.includes("150")&&worked.includes("96")&&
 worked.includes("THPT_G10_CHIV_RIVER_TRANSFER_D5_R01_CORRECTED.svg"),"River figure numerical dataset not distinguished");
assert(!src.includes(t)&&!src.includes("Assessment safety")&&!src.includes("EX-G10-B10-RIVER-TR01")&&
 !src.includes("HELP_ID"),"B10 learner text exposes source/metadata or code style");
for(const token of ["Lỗi thường gặp:","Vì sao sai?","Tự kiểm:","Ôn và luyện lại:"])
 assert(error.includes(token),"B10 Tab4 missing real mistake→cause→repair "+token);
for(const token of ["\\vec u=x\\vec i+y\\vec j","\\vec0=(0;0)",
 "\\overrightarrow{AB}=(x_B-x_A;y_B-y_A)","\\vec u+\\vec v=(a+c;b+d)",
 "AB=\\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}","ad-bc=0",
 "\\overrightarrow{GA}+\\overrightarrow{GB}+\\overrightarrow{GC}=\\vec0"])
 assert(src.includes(token),"B10 mandatory S1 math missing "+token);
assert(!/data-mastery-credit|data-readiness-answer/.test(src),"Mastery/Readiness leak");
assert.notEqual(blob(Buffer.from(src+" ")),field("R01_SOURCE_BLOB"),"Mutation detector ineffective");
console.log("PASS B10 one canonical source and 8 original immutable questions/W10, 6 First Try/3 HELP, 2 SVG, four worked examples, semantic math, CSS old prefix and negative test");
