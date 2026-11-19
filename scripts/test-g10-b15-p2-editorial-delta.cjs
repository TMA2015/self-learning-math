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
assert.equal(field(p2,"PREVIOUS_B15_SOURCE_BLOB"),field(old,"CANDIDATE_B15_SOURCE_BLOB"),"B15 P1→P2 source ancestry");
assert.equal(field(r02,"PREVIOUS_B15_SOURCE_BLOB"),field(p2,"CANDIDATE_B15_SOURCE_BLOB"),"B15 P2→R02 source ancestry");
const src=read("docs/thpt-preview/sgk/chuong-vi/bai-15.md");
assert.equal(blob(src),field(r02,"CANDIDATE_B15_SOURCE_BLOB"),"B15 candidate must match its own latest Q18 SHA");
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
 "docs/thpt-preview/sgk/chuong-v/bai-14.md":"a23afab8015c83813f0c8cbe918efa93e58aa623",


 "docs/thpt-preview/sgk/chuong-vi/bai-18.md":"91d22f1af8814ed639ada3ee1c9dae2e9501c4c0"
};
for(const [p,sha]of Object.entries(neighbors))
 assert.equal(blob(fs.readFileSync(path.join(root,p))),sha,"Out-of-scope frozen source "+p);
// B17 is now independently revised by the owner. Verify its new signed
// Q18 baseline→candidate chain instead of treating B17 as a frozen B15 neighbor.
const b17=read(ux+"G10_CHVI_B17_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261119.md");
assert.equal(field(b17,"BASELINE_PUBLISHED_B17_SOURCE_BLOB"),
 "1a3481ee2020f48e924dae5e8b4f5779b3a2d88b",
 "B15 regression preserves B17 previous published source in its signed receipt");
assert.equal(blob(read("docs/thpt-preview/sgk/chuong-vi/bai-17.md")),
 field(b17,"CANDIDATE_B17_SOURCE_BLOB"),
 "B17 new source must match its own receipt; B15/12–14/18 remain frozen");
assert.equal(field(b16,"BASELINE_PUBLISHED_B16_SOURCE_BLOB"),
 "4ddf9c449f92a9f48bace5a3f9b84186bf33af20",
 "B16 baseline must match historical accepted source, not overwrite it");
assert.equal(blob(fs.readFileSync(path.join(root,"docs/thpt-preview/sgk/chuong-vi/bai-16.md"))),
 field(b16,"CANDIDATE_B16_SOURCE_BLOB"),
 "B16 is the sole allowed neighboring academic delta, exactly source-locked");
console.log("PASS B15 screenshot R02 source: 3 SHA-linked receipts, 5 fluent Discovery topics, 5 TRY/HELP/Đối chiếu, original SVG/CSS and six neighboring sources.");
