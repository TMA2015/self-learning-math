#!/usr/bin/env node
"use strict";
/* B15 Q18 immutable chain: original full academic source → P2 note fix →
 * owner screenshot R02 flow/figure candidate. CI may have shallow checkout. */
const assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),
 crypto=require("node:crypto");
const root=path.resolve(__dirname,".."),ux="prototypes/thpt/ux795/";
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const field=(doc,key)=>{
 const s=doc.split("**"+key+":** "+String.fromCharCode(96))[1];
 assert(/^[a-f0-9]{40}/.test(s||""),"Missing signed Q18 field "+key);
 return s.slice(0,40);
};
const blob=b=>{const v=Buffer.isBuffer(b)?b:Buffer.from(b);return crypto.createHash("sha1").update("blob "+v.length+"\0").update(v).digest("hex")};
const old=read(ux+"G10_CHVI_B15_OWNER_Q18_KNOWLEDGE_ENRICHMENT_20261119.md");
const p2=read(ux+"G10_CHVI_B15_P2_EDITORIAL_NOTE_DELTA_R01_20261119.md");
const r02=read(ux+"G10_CHVI_B15_OWNER_P2_READABILITY_FIGURE_R02_20261119.md");
const relocation=read(ux+"G10_CHVI_B15_B18_KIEM_LOI_PLACEMENT_Q18_R01_20261120.md");
assert(relocation.includes("DELTA_C_ACADEMIC_MATERIAL")&&
 relocation.includes("G10-CHVI-B15-B18-KIEM-LOI-PLACEMENT-Q18-R01-20261120"),
 "Owner-signed HELP placement must retain its material-delta Q18 classification");
const relocatedBlobs=n=>{
 const rows=relocation.split("\n").filter(x=>x.startsWith("| B"+n+" | "));
 assert.equal(rows.length,1,"B"+n+" one source-locked HELP relocation receipt row");
 const shas=[...rows[0].matchAll(/`([a-f0-9]{40})`/g)].map(m=>m[1]);
 assert.equal(shas.length,2,"B"+n+" previous/current exact SHA transition");
 assert.notEqual(shas[0],shas[1],"B"+n+" source must have changed after HELP relocation");
 return {previous:shas[0],current:shas[1]};
};

assert.equal(field(p2,"PREVIOUS_B15_SOURCE_BLOB"),field(old,"CANDIDATE_B15_SOURCE_BLOB"),"B15 P1→P2 source ancestry");
assert.equal(field(r02,"PREVIOUS_B15_SOURCE_BLOB"),field(p2,"CANDIDATE_B15_SOURCE_BLOB"),"B15 P2→R02 source ancestry");
const src=read("docs/thpt-preview/sgk/chuong-vi/bai-15.md");
assert.equal(relocatedBlobs(15).previous,field(r02,"CANDIDATE_B15_SOURCE_BLOB"),
 "B15 R02 P2 snapshot must remain exact historical HELP-placement parent");
assert.equal(blob(src),relocatedBlobs(15).current,
 "B15 final source must equal signed R03 HELP-placement successor");
const css=fs.readFileSync(path.join(root,"docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css"),"utf8");
const svg=fs.readFileSync(path.join(root,"docs/assets/images/thpt/THPT_G10_CHVI_B15_FUNCTION_MAPPING_D5_R03.svg"));
const b16=read(ux+"G10_CHVI_B16_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261119.md");
const b16Marker="/* G10 ChVI B16 · scoped Golden only for canonical TRY06";
const atB16=css.indexOf(b16Marker);
assert(atB16>0&&css.indexOf(b16Marker,atB16+1)<0,"Only one scoped B16 CSS appendix");
assert.equal(blob(css.slice(0,atB16-1)),field(r02,"GOLDEN_STYLESHEET_BLOB"),
 "Owner P2 B15 Golden CSS prefix unchanged even after B16 appendix");
assert.equal(field(b16,"PREVIOUS_OWNER_P2_GOLDEN_CSS_BLOB"),
 field(r02,"GOLDEN_STYLESHEET_BLOB"),"B16 CSS must build on B15 owner-approved prefix");
assert.equal(blob(css),field(b16,"CANDIDATE_SCOPED_GOLDEN_CSS_BLOB"),
 "B16 full scoped CSS must match candidate Q18 receipt");
assert.equal(blob(svg),field(r02,"ORIGINAL_SVG_ASSET_BLOB"),"Original SVG text, aspect ratio and math unchanged");
assert(!src.includes("Vì sao chọn phương pháp này?"),"Remove four redundant mini headings from Discovery");
assert(!src.includes('!!! tip "Lưu ý khi đọc hình"')&&!src.includes("Những lỗi dưới đây là"),"Keep previous P2 readability changes");
assert(src.includes('class="thpt-r4-plot thpt-r4-probability-figure thpt-r4-concept-figure"'),
 "Existing approved Golden concept-figure styling must enlarge B15 figure without new CSS");
const discovered=src.slice(src.indexOf('=== "Khám phá kiến thức"'),src.indexOf('=== "Kiến thức SGK"'));
const sections=[...discovered.matchAll(/    #### 1\.2\.(\d)\. ([^\n]+)\n([\s\S]*?)(?=    #### 1\.2\.|    ### 1\.3\.)/g)];
assert.equal(sections.length,5,"Five canonical Discovery topics");
for(const [,i,title,body]of sections){
 assert.equal((body.match(/\*\*Em vận dụng\.\*\*/g)||[]).length,1,"One Vận dụng per scenario "+i);
 const tryAt=body.indexOf("    **Em vận dụng.**");
 assert(tryAt>=0&&body.slice(0,tryAt).trim().length>=120,"Full prose before independent First Try "+i);
 assert(!/\*\*Ví dụ (?:\d|bổ sung)/.test(body),"No extra mini-example labels "+i);
 assert(!body.slice(tryAt).includes("**Ví dụ"),"No example after learner try "+i);
}
assert.equal(src.split('data-thpt-first-try-id="').length-1,5,"Five canonical First Try IDs");
assert.equal(src.split('data-thpt-help-id="').length-1,5,"Five canonical D6 HELP IDs");
assert.equal((src.match(/\?\?\? question "Đối chiếu"/g)||[]).length,5,"Five voluntary nonmastery disclosures");
assert(src.includes("C(1)=8")&&src.includes("C(2)=16")&&src.includes("C(3)=22"),
 "Retain piecewise example values and branch case");
assert(src.includes("g(x)=\\frac{x+1}{x-2}")&&src.includes("T=\\mathbb{R}\\setminus\\{1\\}"),
 "Keep domain/range second illustration");
assert(!/data-mastery-write|data-mastery-credit|data-thpt-readiness/.test(src),"No unsafe learner mastery");
const neighbors={
 "docs/thpt-preview/sgk/chuong-v/bai-12.md":"a2ea6c909cdd2317188b13c2bde22e7923dba3de",
 "docs/thpt-preview/sgk/chuong-v/bai-13.md":"cb5adaa7804902fece7dd4ec30575733efd4c9c1",
 "docs/thpt-preview/sgk/chuong-v/bai-14.md":"a23afab8015c83813f0c8cbe918efa93e58aa623"
};
// Signed 20/11 Golden correction moved local HELP in ChV B12–B14 as well.
 // Those files are no longer byte-identical to their 19/11 screenshots.
 // Preserve BOTH historical neighbors and approved successor source locks.
const chvPlacement=read(ux+"G10_CHIV_CHV_B07_B14_KIEM_LOI_PLACEMENT_Q18_R01_20261120.md");
const {candidateG10KnowledgeBlob}=require("./thpt-q18-g10-source-receipt.cjs");
for(const [p,previous]of Object.entries(neighbors)){
 const lesson=Number(p.match(/bai-(1[234])\.md$/)?.[1]);
 assert([12,13,14].includes(lesson),"Only signed ChV neighbors may transition");
 const rows=chvPlacement.split("\n").filter(x=>x.startsWith("| B"+lesson+" | "));
 assert.equal(rows.length,1,"B"+lesson+" unique approved HELP-placement row");
 const signed=[...rows[0].matchAll(/`([a-f0-9]{40})`/g)].map(x=>x[1]);
 assert.deepEqual(signed,[previous,candidateG10KnowledgeBlob(lesson)],
  "B"+lesson+" historical frozen SHA must have exact approved HELP successor");
 assert.equal(blob(fs.readFileSync(path.join(root,p))),signed[1],
  "B"+lesson+" current source must be exactly the signed Q18 successor");
}
// B17 is now independently revised by the owner. Verify its new signed
// Q18 baseline→candidate chain instead of treating B17 as a frozen B15 neighbor.
const b17=read(ux+"G10_CHVI_B17_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261119.md");
assert.equal(field(b17,"BASELINE_PUBLISHED_B17_SOURCE_BLOB"),
 "1a3481ee2020f48e924dae5e8b4f5779b3a2d88b",
 "B15 regression preserves B17 previous published source in its signed receipt");
const b17r02=read(ux+"G10_CHVI_B17_DISPLAY_MATH_SOURCE_EQUIVALENT_R02_20261120.md");
assert.equal(field(b17r02,"PREVIOUS_B17_SOURCE_BLOB"),
 field(b17,"CANDIDATE_B17_SOURCE_BLOB"),
 "B17 layout-only R02 must derive directly from R01 source");
const b17r03=read(ux+"G10_CHVI_B17_OWNER_P2_LEARNER_READABILITY_R03_20261120.md");
assert.equal(field(b17r03,"PREVIOUS_B17_SOURCE_BLOB"),
 field(b17r02,"CANDIDATE_B17_SOURCE_BLOB"),
 "B17 semantic Golden R03 source extends R02 without history rewrite");
assert.equal(relocatedBlobs(17).previous,field(b17r03,"CANDIDATE_B17_SOURCE_BLOB"),
 "B17 R03 remains historical owner snapshot before HELP-placement R04");
assert.equal(blob(read("docs/thpt-preview/sgk/chuong-vi/bai-17.md")),
 relocatedBlobs(17).current,
 "B17 current source must match signed HELP-placement successor");
// B18 is now independently enhanced, never a frozen neighbor of B15.
// Compare its historical UX source to the separate immutable R01 owner receipt.
const b18=read(ux+"G10_CHVI_B18_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261120.md");
assert.equal(field(b18,"BASELINE_PUBLISHED_B18_SOURCE_BLOB"),
 "91d22f1af8814ed639ada3ee1c9dae2e9501c4c0",
 "B18 Q18 owner delta must preserve the previously published UX blob");
const b18r02=read(ux+"G10_CHVI_B18_OWNER_P2_GOLDEN_ERRORS_R02_20261120.md");
assert.equal(field(b18r02,"PREVIOUS_B18_SOURCE_BLOB"),
 field(b18,"CANDIDATE_B18_SOURCE_BLOB"),
 "B18 new Golden PED R02 follows old signed R01 source");
const b18r03=read(ux+"G10_CHVI_B18_OWNER_EDITORIAL_POLISH_R03_20261120.md");
assert.equal(field(b18r03,"PREVIOUS_B18_SOURCE_BLOB"),
 field(b18r02,"CANDIDATE_B18_SOURCE_BLOB"),
 "B18 editorial R03 must extend exact previously published R02");
assert.equal(relocatedBlobs(18).previous,field(b18r03,"CANDIDATE_B18_SOURCE_BLOB"),
 "B18 R03 remains unchanged historical predecessor of local HELP placement");
assert.equal(blob(read("docs/thpt-preview/sgk/chuong-vi/bai-18.md")),
 relocatedBlobs(18).current,
 "B18 current source must match signed HELP-placement successor");
assert.equal(field(b16,"BASELINE_PUBLISHED_B16_SOURCE_BLOB"),
 "4ddf9c449f92a9f48bace5a3f9b84186bf33af20",
 "B16 baseline must match historical accepted source, not overwrite it");
assert.equal(relocatedBlobs(16).previous,field(b16,"CANDIDATE_B16_SOURCE_BLOB"),
 "B16 original academic R01 remains exact parent of signed HELP relocation");
assert.equal(blob(fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-vi/bai-16.md"))),
 relocatedBlobs(16).current,
 "B16 current source must match signed HELP-placement successor");
console.log("PASS B15–B18 exact Q18 chain: historical R02/R03 snapshots + signed HELP relocation; B15 5 Vận dụng, original SVG/CSS, protected IDs and neighboring sources.");
