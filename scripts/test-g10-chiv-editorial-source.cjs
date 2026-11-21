#!/usr/bin/env node
"use strict";
/* SLM-THPT-QUALITY-ONE v3.1.0 Q18 self-verified: S1 exact headings,
 * original public First Try questions/keys, source blob SHA and semantic
 * conditions. Never infer a reviewer PASS or expose private RD1 data. */
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const crypto=require("node:crypto"),cp=require("node:child_process");
const root=path.resolve(__dirname,"..");
require("./test-g10-b11-b12-source-first-delta.cjs");
const baselineSha="045b15ecc402acf9a081a35bd4a7fb36d6325188";
const {chivEditorialReceiptRows,candidateG10KnowledgeBlob}=require("./thpt-q18-g10-source-receipt.cjs");
const rows=chivEditorialReceiptRows();
const blob=data=>{const b=Buffer.isBuffer(data)?data:Buffer.from(data);
 return crypto.createHash("sha1").update("blob "+b.length+"\0").update(b).digest("hex");};
const ids=(s,key)=>[...s.matchAll(new RegExp(key+'="([^"]+)"',"g"))].map(x=>x[1]).sort();
const book={
 B07:["2.1. Khái niệm vectơ","2.2. Hai vectơ cùng phương, cùng hướng, bằng nhau"],
 B08:["2.1. Tổng của hai vectơ","2.2. Hiệu của hai vectơ"],
 B09:["2.1. Tích của một vectơ với một số","2.2. Các tính chất của phép nhân vectơ với một số"],
 B10:["2.1. Tọa độ của vectơ","2.2. Biểu thức tọa độ của các phép toán vectơ"],
 B11:["2.1. Góc giữa hai vectơ","2.2. Tích vô hướng của hai vectơ","2.3. Biểu thức tọa độ và tính chất của tích vô hướng"]
};
function formativeBodies(s){
 const a=s.split("\n"),out=[];
 for(let i=0;i<a.length;i++){
  if(!/^    \?\?\? question(?:\s|$)/.test(a[i]))continue;
  const lines=[a[i]];
  for(let j=i+1;j<a.length;j++){
   if(!a[j].trim()){lines.push("");continue;}
   if(!a[j].startsWith("        "))break;
   lines.push(a[j]);
  }
  out.push(lines.join("\n").trimEnd());
 }
 return out;
}
const tex=s=>[...s.matchAll(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]|\$([^$]+)\$/g)]
 .map(x=>(x[1]??x[2]??x[3]).trim().replace(/\s+/g," ")).sort();
assert.equal(rows.size,5,"Q18 ChIV must have exactly five editorial source rows");
for(const [lesson,row] of rows){
 const n=Number(lesson.slice(1)),rel="docs/thpt-preview/sgk/chuong-iv/bai-"+n+".md";
 const source=fs.readFileSync(path.join(root,rel),"utf8");
 const old=cp.spawnSync("git",["show",baselineSha+":"+rel],{cwd:root,encoding:"utf8"});
 assert.equal(old.status,0,"baseline fetch missing: "+lesson+" "+old.stderr);
 const previous=old.stdout;
 assert.equal(blob(previous),row.baseline,lesson+" original published blob");
 let expected=row.candidate;
 if(lesson==="B07"){
  const receipt=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B07_S1_OWNER_Q18_ENRICHMENT_DELTA_R02_20261116.md"),"utf8");
  const field=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field("R01_APPROVED_SOURCE_BLOB"),row.candidate,"B07 R02 extends ChIV original R01");
  expected=field("R02_CANDIDATE_SOURCE_BLOB");
  const delta=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B07_HELP_LABELS_DELTA_A_R03_20261117.md"),"utf8");
  const ui=k=>delta.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(ui("R02_SOURCE_BLOB"),expected,"B07 R03 follows exact academic R02 source");
  const r04File=path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B07_S1_FORCE_VELOCITY_ENRICHMENT_R04_20261117.md");
  if(fs.existsSync(r04File)){
   const r04=fs.readFileSync(r04File,"utf8");
   const field04=k=>r04.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(field04("BASELINE_R03_SOURCE_BLOB"),ui("R03_SOURCE_BLOB"),
    "B07 R04 must extend immutable R03 without changing historical receipt");
   const svg=fs.readFileSync(path.join(root,
    "docs/assets/images/thpt/THPT_G10_B07_FORCE_VELOCITY_REPRESENTATION_D5_R04.svg"));
   assert.equal(blob(svg),field04("NEW_SVG_BLOB"),"B07 R04 original new D5 source exact SVG SHA");
   const mobileSvg=fs.readFileSync(path.join(root,
    "docs/assets/images/thpt/THPT_G10_B07_FORCE_VELOCITY_MOBILE_D5_R04.svg"));
   assert.equal(blob(mobileSvg),field04("MOBILE_SVG_BLOB"),
    "B07 R04 responsive mobile art exact Git blob");
   assert(source.includes('<source media="(max-width: 600px)"')&&
    source.includes("THPT_G10_B07_FORCE_VELOCITY_MOBILE_D5_R04.svg"),
    "B07 R04 requires portrait mobile variant at 390px");
   assert(source.includes("THPT_G10_B07_FORCE_VELOCITY_REPRESENTATION_D5_R04.svg")&&
    source.includes("1 cm trên giấy ứng với 10 N")&&
    source.includes("Xe thứ nhất có vận tốc 6 m/s")&&
    source.includes("Không so sánh độ dài mũi tên của các đại lượng khác đơn vị"),
    "B07 R04 force/velocity outcome must be taught as actual student action");
   assert(!source.includes("\\overrightarrow{EF}=-\\overrightarrow{HG}"),
    "B07 R04 may not require the opposite-vector minus sign before B08");
   const r05Path=path.join(root,
    "prototypes/thpt/ux795/G10_CHIV_B07_SEMANTIC_CONCEPT_RECAP_DELTA_R05_20261117.md");
   if(fs.existsSync(r05Path)){
    const r05=fs.readFileSync(r05Path,"utf8");
    const field05=k=>r05.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
    assert.equal(field05("BASELINE_R04_SOURCE_BLOB"),field04("R04_SOURCE_BLOB"),
     "B07 R05 must follow immutable R04 snapshot");
    const formal=source.slice(source.indexOf('=== "Kiến thức SGK"'),
     source.indexOf('=== "Ví dụ"'));
    const anchors=[
     "Định nghĩa — Vectơ:","Định nghĩa — Độ dài vectơ:",
     "Định nghĩa — Vectơ-không:","Kiến thức cần nhớ — Mục 2.1:",
     "Định nghĩa — Hai vectơ cùng phương:","Định nghĩa — Hai vectơ bằng nhau:",
     "Kiến thức cần nhớ — Mục 2.2:"
    ];
    let prev=-1;
    for(const anchor of anchors){
     const ix=formal.indexOf(anchor);
     assert(ix>prev,"B07 missing/out-of-order formal outcome or recap: "+anchor);
     prev=ix;
    }
    assert.equal((formal.match(/class="thpt-r4-knowledge-conclusion thpt-r4-concept-card"/g)||[]).length,5,
     "B07 all five mandatory formal concept groups must be distinct from prose");
    assert.equal((formal.match(/class="thpt-r4-knowledge-conclusion" role="note"/g)||[]).length,2,
     "B07 has two substantive group recaps, distinct from five formal definitions");
    assert(formal.includes("song song hoặc trùng nhau")&&
     formal.includes("cùng hướng và có cùng độ dài")&&
     formal.includes("vectơ-không được xem là cùng phương"),
     "B07 mandatory conditions/special zero convention must remain readable");
    expected=field05("R05_SOURCE_BLOB");
   }else expected=field04("R04_SOURCE_BLOB");
  }else{
   const replacements=[
    ["Trong Luyện tập, làm lại câu về vectơ ngược hướng trong hình bình hành, rồi đối chiếu câu Core về điều kiện hai vectơ bằng nhau.","Làm lại B07-P03 rồi đối chiếu B07-C02."],
    ["Trong Luyện tập, làm câu về hai vectơ cùng hướng nhưng khác độ dài, rồi câu về quy ước vectơ-không.","Làm B07-P05 rồi B07-P04."]
   ];
   let prior=source;
   for(const [friendly,original] of replacements){
    assert.equal(prior.split(friendly).length,2,"B07 R03 must contain exactly one signed friendly D6 label");
    prior=prior.replace(friendly,original);
   }
   assert.equal(blob(prior),expected,
    "B07 R03 must be byte-exact R02 except two verified learner-facing D6 labels");
   assert(!/B07-[CP][0-9]{2}/.test(source),"B07 internal Core/Practice codes cannot be visible in lesson");
   expected=ui("R03_SOURCE_BLOB");
  }
 }
 if(lesson==="B08"){
  const receipt=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B08_S1_OWNER_Q18_ENRICHMENT_DELTA_R02_20261116.md"),"utf8");
  const field=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field("R01_APPROVED_SOURCE_BLOB"),row.candidate,"B08 R02 extends immutable ChIV R01");
  expected=field("R02_CANDIDATE_SOURCE_BLOB");
  const visual=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B08_MATHJAX_DISPLAY_DELTA_A_R03_20261117.md"),"utf8");
  const visualField=k=>visual.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(visualField("R02_PUBLISHED_SOURCE_BLOB"),expected,
   "B08 R03 Delta A must follow exactly previously published R02 source blob");

  const r04Path=path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B08_SEMANTIC_3PLUS1_DELTA_R04_20261117.md");
  if(fs.existsSync(r04Path)){
   const r04=fs.readFileSync(r04Path,"utf8");
   const f04=k=>r04.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(f04("BASELINE_R03_SOURCE_BLOB"),visualField("R03_CANDIDATE_SOURCE_BLOB"),
     "B08 R04 extends exactly immutable R03 content");
   const standard=fs.readFileSync(path.join(root,
    "prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md"));
   assert.equal(f04("R04_STANDARD_BLOB"),"24f744b5d9f114d053b6e2e1ab8a0fb26c3fab39",
     "B08 original historical standard SHA remains signed and immutable");
   assert.equal(blob(standard),"488afe2908e0b471320e1d55f775391578d88bba",
     "B08 effective Q01–Q18 v3.2.0 current main SHA after governance-only PR914");
   assert(standard.toString("utf8").includes("OWNER_APPROVED_PR_899_MERGED_INTO_MAIN_20261117"),
     "Owner-effective v3.2.0 requires merged PR899 evidence");
   const formal=source.slice(source.indexOf('=== "Kiến thức SGK"'),source.indexOf('=== "Ví dụ"'));
   const signed=[
    ["Định nghĩa — Tổng hai vectơ:",1],
    ["Quy tắc ba điểm:",2],
    ["Quy tắc hình bình hành:",2],
    ["Tính chất phép cộng vectơ:",2],
    ["Định nghĩa — Vectơ đối:",1],
    ["Định nghĩa — Hiệu hai vectơ:",1],
    ["Quy tắc hiệu hai vectơ chung gốc:",2],
    ["Kiến thức cần nhớ — Bài 8:",3]
   ];
   let prev=-1;
   for(const [label,group] of signed){
    const pos=formal.indexOf(label);
    assert(pos>prev,"B08 Q03/X-F.3 missing or reordered semantic outcome: "+label);
    prev=pos;
   }
   assert.equal((formal.match(/class="thpt-r4-knowledge-conclusion thpt-r4-concept-card"/g)||[]).length,3,
    "B08: three actual formal definitions, not a word-based heading count");
   assert.equal((formal.match(/class="thpt-r4-knowledge-conclusion thpt-r4-rule-card"/g)||[]).length,4,
    "B08: four mandatory operational mathematical rules/properties");
   assert.equal((formal.match(/class="thpt-r4-knowledge-conclusion" role="note"/g)||[]).length,1,
    "B08: one actual math recap (local notes must be inline)");
   assert.equal((formal.match(/class="thpt-r4-key-formula"/g)||[]).length,1,
    "B08: one genuine unfilled core formula, intermediate algebra remains unboxed");
   assert(formal.includes("song song")===false||formal.includes("hình bình hành"),
    "B08 must not distort prerequisites of parallelogram");
   assert(formal.includes("Điểm đầu")||formal.includes("điểm đầu"),
    "B08 must explicitly teach orientation of result vector");
   const mathText=formal.toLocaleLowerCase("vi");
   assert(["giao hoán","kết hợp","vectơ-không","cùng độ dài, ngược hướng",
      "tổng","trung điểm","trọng tâm"].every(token=>mathText.includes(token)),
     "B08 official math conditions and S1 outcome family must not disappear");
   const examples=source.slice(source.indexOf('=== "Ví dụ"'),source.indexOf('=== "Lỗi thường gặp"'));
   assert(examples.includes(String.raw`\overrightarrow{AM}+\overrightarrow{AM}`)&&
     !examples.includes(String.raw`2\overrightarrow{AM}`),
     "B08 R04 must not assume scalar-vector multiplication before B09");
   const css=fs.readFileSync(path.join(root,
    "docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css"));
   const b09File=path.join(root,
    "prototypes/thpt/ux795/G10_CHIV_B09_S1_SEMANTIC_DECOMPOSITION_R03_20261117.md");
   if(fs.existsSync(b09File)){
    const b09=fs.readFileSync(b09File,"utf8");
    const b09f=k=>b09.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
    assert.equal(b09f("CSS_BASELINE_BLOB"),f04("R04_CSS_BLOB"),
     "B09 CSS baseline must equal exactly B08 P2 accepted CSS source");
    const allCss=css.toString("utf8"),offset=allCss.indexOf("/* G10 Chapter IV B09 R03");
    assert(offset>0&&allCss.indexOf("/* G10 Chapter IV B09 R03",offset+1)===-1,
     "B09 CSS must add exactly one scoped appendix");
    assert.equal(blob(allCss.slice(0,offset-1)),f04("R04_CSS_BLOB"),
     "B08 owner P2 CSS prefix must be byte-for-byte intact");
    const markerB10="/* G10 Chapter IV B10 R01";
    const atB10=allCss.indexOf(markerB10);
    assert(atB10>0&&allCss.indexOf(markerB10,atB10+1)<0,
     "B10 scoped CSS may be appended exactly once");
    assert.equal(blob(allCss.slice(0,atB10)),b09f("R03_CSS_BLOB"),
     "B09 owner P2 CSS must be exact prefix of B10 palette");
   }else assert.equal(blob(css),f04("R04_CSS_BLOB"),
    "B08 scoped CSS SHA must agree with Q18 packet");
   const cssStr=css.toString("utf8"),marker="/* G10 ChIV B08 R04";
   const p=cssStr.indexOf(marker);
   assert(p>0&&cssStr.indexOf(marker,p+1)===-1,
    "B08 3+1 css append must appear once");
   assert.equal(blob(cssStr.slice(0,p-1)),f04("BASELINE_R05_B07_CSS_BLOB"),
    "All B01–B07 Golden CSS must be unmodified before B08 exact scope");
   expected=f04("R04_SOURCE_BLOB");
  }else{
   // CI shallow checkout may not contain the already-published main commit.
   // Recover exact immutable R02 blob by removing only the nine added
   // boundary blank lines from candidate; no network or old Git tree needed.
   const lines=source.split("\n"),restored=[];
   let opens=0,closes=0,removed=0;
   for(let i=0;i<lines.length;i++){
    const line=lines[i];
    if(line==="    \\["){
     assert.equal(lines[i-1],"","B08 R03 every display opener must be separated from prose");
     assert.equal(restored.pop(),"","B08 R03 opener must have a blank boundary");
     opens++;removed++;
    }
    restored.push(line);
    if(line==="    \\]"){
     assert.equal(lines[i+1],"","B08 R03 every display closer must separate subsequent prose");
     if([0,2,3].includes(closes)){
      i++;removed++;
     }
     closes++;
    }
   }
   assert.equal(opens,6,"B08 R03 has exactly six preserved display equations");
   assert.equal(closes,6,"B08 R03 has six matching display closers");
   assert.equal(removed,9,"B08 R03 has exactly nine added blank lines");
   assert.equal(blob(restored.join("\n")),expected,
    "Removing only nine B08 display boundary blanks MUST recover the published R02 Git blob");
   expected=visualField("R03_CANDIDATE_SOURCE_BLOB");
  }
 }
 if(lesson==="B09"){
  const receipt=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B09_S1_SEMANTIC_DECOMPOSITION_R03_20261117.md"),"utf8");
  const f=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(f("SOURCE_BASELINE_BLOB"),row.candidate,
   "B09 R03 must extend exact frozen original editorial source");
  const standard=fs.readFileSync(path.join(root,
   "prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md"));
  assert.equal(f("STANDARD_BLOB"),"24f744b5d9f114d053b6e2e1ab8a0fb26c3fab39",
   "B09 historical v3.2.0 signed standard SHA must remain immutable");
  assert.equal(blob(standard),"488afe2908e0b471320e1d55f775391578d88bba",
   "B09 effective v3.2.0 current main SHA after owner governance PR914");
  assert(standard.toString("utf8").includes("OWNER_APPROVED_PR_899_MERGED_INTO_MAIN_20261117"),
   "Owner-effective v3.2.0 activation must be explicit");
  const official=source.slice(source.indexOf('=== "Kiến thức SGK"'),source.indexOf('=== "Ví dụ"'));
  const anchors=[
   "Định nghĩa — Tích của một vectơ với một số:",
   "Tính chất của phép nhân vectơ với một số:",
   "Điều kiện hai vectơ cùng phương:",
   "Phân tích một vectơ theo hai vectơ không cùng phương",
   "Phân tích duy nhất theo hai vectơ không cùng phương",
   "Hệ thức trung điểm – trọng tâm",
   "Kiến thức cần nhớ — Bài 9:"
  ];
  let last=-1;for(const key of anchors){
   const at=official.indexOf(key);
   assert(at>last,"B09 outcome/semantic order absent: "+key);last=at;
  }
  assert.deepEqual([
   (official.match(/class="thpt-r4-knowledge-conclusion thpt-r4-concept-card"/g)||[]).length,
   (official.match(/class="thpt-r4-knowledge-conclusion thpt-r4-rule-card"/g)||[]).length,
   (official.match(/class="thpt-r4-knowledge-conclusion" role="note"/g)||[]).length,
   (official.match(/class="thpt-r4-key-formula"/g)||[]).length
  ],[1,3,1,1],"B09 Q03/X-F.3 exactly meaningful definition/rule/recap/formula roles");
  for(const key of ["k=0","\\vec u=\\vec0","\\vec a,\\vec b","x\\vec a+y\\vec b",
   "không cùng phương","duy nhất","trung điểm","trọng tâm"]){
   assert(official.includes(key),"B09 S1 prerequisite/condition missing "+key);
  }
  const discover=source.slice(source.indexOf('=== "Khám phá kiến thức"'),
   source.indexOf('=== "Kiến thức SGK"'));
  assert(discover.includes("THPT_G10_B09_SCALAR_MULTIPLE_VECTORS_D5_R01.svg")&&
   !official.includes("THPT_G10_B09_SCALAR_MULTIPLE_VECTORS_D5_R01.svg")&&
   official.includes("THPT_G10_B09_DECOMPOSITION_TWO_DIRECTIONS_D5_R03.svg"),
   "B09 R05: scalar image must be visible in Discovery BEFORE learner tries; decomposition figure stays beside formal proof");
  assert(discover.indexOf("THPT_G10_B09_SCALAR_MULTIPLE_VECTORS_D5_R01.svg")<
   discover.indexOf('data-thpt-first-try-id="THPT-G10-CHIV-TRY11"'),
   "B09 known audit CHIV-09-A may never regress to text-only discovery");
  const examples=source.slice(source.indexOf('=== "Ví dụ"'),source.indexOf('=== "Lỗi thường gặp"'));
  assert.equal((examples.match(/^    ### Ví dụ [1-4]\./gm)||[]).length,4,
   "B09 four distinct worked examples, including mandatory decomposition");
  assert(examples.includes("Phân tích theo hai vectơ không cùng phương")&&
   examples.includes("\\overrightarrow{MN}=-\\tfrac12\\vec a+\\tfrac12\\vec b"),
   "B09 noncollinear decomposition must be solved and verified, not only noted");
  const css=fs.readFileSync(path.join(root,
   "docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css"));
  const b10CssMarker="/* G10 Chapter IV B10 R01";
  const endB09Css=css.toString("utf8").indexOf(b10CssMarker);
  assert(endB09Css>0,"New B10 scoped palette must preserve B09 accepted stylesheet");
  assert.equal(blob(css.toString("utf8").slice(0,endB09Css)),f("R03_CSS_BLOB"),
   "B09 original CSS must match exact owner P2 prefix");
  const cssText=css.toString("utf8"),marker="/* G10 Chapter IV B09 R03";
  const at=cssText.indexOf(marker);
  assert(at>0&&cssText.indexOf(marker,at+1)<0,"B09 one CSS append only");
  assert.equal(blob(cssText.slice(0,at-1)),f("CSS_BASELINE_BLOB"),
   "All owner P2-accepted B01–B08 CSS bytes must remain identical");
  const svg=fs.readFileSync(path.join(root,
   "docs/assets/images/thpt/THPT_G10_B09_DECOMPOSITION_TWO_DIRECTIONS_D5_R03.svg"));
  assert.equal(blob(svg),f("R03_SVG_BLOB"),
   "B09 desktop SVG must match signed geometry source");
  const mobile=fs.readFileSync(path.join(root,
   "docs/assets/images/thpt/THPT_G10_B09_DECOMPOSITION_MOBILE_D5_R03.svg"));
  assert.equal(blob(mobile),f("R03_MOBILE_SVG_BLOB"),
   "B09 mobile SVG must match signed 390px-friendly source");
  assert(official.includes('media="(max-width: 600px)"')&&
   official.includes("THPT_G10_B09_DECOMPOSITION_MOBILE_D5_R03.svg"),
   "B09 mobile viewport requires distinct decomposition picture source");
  assert(svg.toString("utf8").includes("<title")&&svg.toString("utf8").includes("<desc")&&
   !svg.toString("utf8").includes("<script"),"B09 SVG accessible/safe");
  assert(receipt.includes("BLOCKED_BY_AUTHORING")&&receipt.includes("NO_CANONICAL_DECOMPOSITION_ITEM"),
   "B09 source QA is technical only; academic release must remain HOLD");
  const r05=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHIV_B09_CANONICAL_Q18_R05_20261117.md"),"utf8");
  const q=k=>r05.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(q("BASELINE_R03_SOURCE_BLOB"),f("R03_SOURCE_BLOB"),
   "B09 Q18 R05 must retain immutable earlier signed R03");
  assert(r05.includes("CHIV-09-A")&&r05.includes("Q18_AUTHOR_SELF_VERIFIED")&&
    r05.includes("THPT-G10-B09-P07"),"B09 R05 Q18 source/P07/audit gate proof");
  const r06=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B09_TAB4_REAL_ERROR_P2_DELTA_C_R06_20261117.md"),"utf8");
  const q06=k=>r06.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(q06("PRIOR_R05_SOURCE_BLOB"),q("R05_SOURCE_BLOB"),
   "B09 new Tab4 correction must follow published P1 exact R05 source");
  assert.equal(q06("PRIOR_R05_CANONICAL_BLOB"),q("ONE_CANONICAL_LESSON_BLOB"),
   "B09 new Tab4 correction must preserve historical canonical SHA");
  assert(r06.includes("Q18_AUTHOR_SELF_VERIFIED")&&r06.includes("B09-F04"),
   "B09 real-error corrected Tab4 requires scoped Q18 self-QA receipt");
  const mistakes=source.slice(source.indexOf('=== "Lỗi thường gặp"'));
   // Signed 20/11 HELP relocation put 2 canonical D6 after Vận dụng.
   assert.equal((mistakes.match(/^    \?\?\? tip "/gm)||[]).length,1,
    "B09 final Tab4 contains only independent B09-F04 error");
   assert.equal((source.split('=== "Kiến thức SGK"')[0]
    .match(/^    \?\?\? tip "Kiểm lỗi"/gm)||[]).length,2,
    "B09 two original local HELP must remain next to Vận dụng");
  assert(!mistakes.includes("**Khi chưa phân tích được vectơ theo hai hướng:**"),
   "B09 P2 regression: standalone method advice is NOT an error");
  assert(mistakes.includes('??? tip "Đảo dấu khi phân tích vectơ theo hai vectơ không cùng phương"')&&
   mistakes.includes("<strong>Lỗi thường gặp:</strong>")&&
   mistakes.includes("<strong>Vì sao sai?</strong>")&&
   mistakes.includes("<strong>Tự kiểm:</strong>")&&
   mistakes.includes("<strong>Ôn và luyện lại:</strong>")&&
   mistakes.includes("THPT-G10-B09-P07"),
   "B09 Tab4 error 4.3 requires wrong step, diagnosis, repair, mathematical check and public practice route");
  assert.equal((source.match(/data-thpt-help-id=/g)||[]).length,2,
   "B09 owner correction must retain 2 original HELP IDs, not create another canonical HELP");
  expected=q06("R06_SOURCE_BLOB");
 }
 if(lesson==="B10"){
  const receipt=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B10_S1_PED_SINGLE_CANONICAL_Q18_R01_20261118.md"),"utf8");
  const f=k=>receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(f("BASELINE_B10_KNOWLEDGE_BLOB"),row.candidate,
   "B10 source SHA must extend exact previous published B10, never a parallel draft");
  assert(["CHIV-10-A","CHIV-10-B","CHIV-10-C","B09-F04","Q18_AUTHOR_SELF_VERIFIED"].every(x=>receipt.includes(x)),
   "B10 must review 79-deep-audit defects and owner P2 anti-repeat");
  const official=source.slice(source.indexOf('=== "Kiến thức SGK"'),source.indexOf('=== "Ví dụ"'));
  assert.deepEqual([
   (official.match(/class="thpt-r4-knowledge-conclusion thpt-r4-concept-card"/g)||[]).length,
   (official.match(/class="thpt-r4-knowledge-conclusion thpt-r4-rule-card"/g)||[]).length,
   (official.match(/class="thpt-r4-knowledge-conclusion" role="note"/g)||[]).length,
   (official.match(/class="thpt-r4-key-formula"/g)||[]).length
  ],[1,2,1,2],"B10 3+1 formal roles must match actual math");
  for(const x of [String.raw`\vec u=x\vec i+y\vec j`,
   String.raw`\overrightarrow{AB}=(x_B-x_A;y_B-y_A)`,
   String.raw`\vec u+\vec v=(a+c;b+d)`,
   String.raw`AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}`,
   "ad-bc=0",String.raw`\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0`])
   assert(official.includes(x),"B10 mandatory S1 mathematics absent "+x);
  const discover=source.split('=== "Khám phá kiến thức"')[1].split('=== "Kiến thức SGK"')[0];
  assert(discover.indexOf("THPT_G10_B10_COORDINATES_DIFFERENCE_D5_R01.svg")>0&&
   discover.indexOf("THPT_G10_B10_COORDINATES_DIFFERENCE_D5_R01.svg")<
   discover.indexOf('data-thpt-first-try-id="THPT-G10-CHIV-TRY16"'),
   "B10 original coordinate figure must precede first attempt");
  const worked=source.split('=== "Ví dụ"')[1].split('=== "Lỗi thường gặp"')[0];
  assert(worked.includes("Ví dụ 4 — Qua sông")&&
   worked.includes("Đọc hình theo đúng dữ kiện Ví dụ 4")&&
   worked.includes("THPT_G10_B10_RIVER_VELOCITY_D5_R01.svg")&&
   worked.includes("THPT_G10_B10_RIVER_VELOCITY_MOBILE_D5_R01.svg")&&
   !worked.includes("bộ dữ liệu khác")&&
   worked.includes("96"),
   "B10 river worked example must match the same geometry/units as its desktop and mobile figures");
  const tab4=source.split('=== "Lỗi thường gặp"')[1];
   // Signed 20/11 source moves three canonical D6 to Discovery Vận dụng.
   assert.equal((tab4.match(/^    \?\?\? tip "/gm)||[]).length,0,
    "B10 all canonical HELP are local; none duplicated in tab4");
   assert.equal((discover.match(/^    \?\?\? tip "Kiểm lỗi"/gm)||[]).length,3,
    "B10 three item-specific Kiểm lỗi disclosures remain in Discovery");
   for(const phrase of ["Vì sao sai","Tự kiểm","Ôn và luyện lại"])
    assert(discover.includes(phrase),"B10 D6 repair missing "+phrase);
  assert(!source.includes("EX-G10-B10-RIVER-TR01")&&
   !source.includes("Assessment safety")&&!source.includes("HELP_ID")&&
   !source.includes(String.fromCharCode(96)),"B10 learner text has exposed internal metadata/code");
  const css=fs.readFileSync(path.join(root,
   "docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css"));
  const textCss=css.toString("utf8"),marker="/* G10 Chapter IV B10 R01",at=textCss.indexOf(marker);
  assert(at>0&&textCss.indexOf(marker,at+1)===-1,"B10 exactly one scoped CSS append");
  assert.equal(blob(textCss.slice(0,at)),f("CSS_OWNER_B09_P2_BASELINE_BLOB"),
   "B10 may not touch any B01-B09 accepted CSS");
  const b11Pos=textCss.indexOf("\n/* G10 Chapter IV B11 R01");
  assert(b11Pos>0&&textCss.indexOf("\n/* G10 Chapter IV B11 R01",b11Pos+1)===-1,
   "B11 must have exactly one append-only scoped CSS section");
  assert.equal(blob(textCss.slice(0,b11Pos)),f("CSS_R01_SCOPED_B10_BLOB"),
   "B10 P2-approved CSS must be byte-identical before B11 append");
  const b11Receipt=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B11_S1_PED_CANONICAL_Q18_R01_20261118.md"),"utf8");
  const b11f=k=>b11Receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(b11f("B10_P2_APPROVED_CSS_BLOB"),f("CSS_R01_SCOPED_B10_BLOB"),
   "B11 scoped CSS must descend from B10 owner P2-approved CSS");
  const b12Palette=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_B11_B12_OWNER_P2_GOLDEN_COMPONENT_PARITY_DELTA_A_R02_20261118.md"),"utf8");
   const b12Color=k=>b12Palette.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert.equal(b12Color("GOLDEN_CSS_PREVIOUS_BLOB"),b11f("CSS_B11_SCOPED_APPEND_BLOB"),
    "Signed B10/B11 stylesheet was exact accepted baseline before B12 append");
   const b13CssText=css.toString("utf8"),b13CssMarker="/* G10 ChV B13 · exact B10/B12 Golden palette";
   const b13CssAt=b13CssText.indexOf(b13CssMarker);
   assert(b13CssAt>0&&b13CssText.indexOf(b13CssMarker,b13CssAt+1)<0,
    "B13 may add only one Golden scoped CSS appendix");
   assert.equal(blob(Buffer.from(b13CssText.slice(0,b13CssAt-1))),b12Color("GOLDEN_CSS_CURRENT_BLOB"),
    "B12 owner-accepted Golden CSS must remain exact prefix");
   const b13Receipt=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHV_B13_S1_Q18_GOLDEN_ENRICHMENT_DELTA_R01_20261119.md"),"utf8");
   const b13Field=k=>b13Receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   const b14Marker="/* G10 ChV B14 · scoped X-C RELEASE Golden";
   const b14At=b13CssText.indexOf(b14Marker);
   const b14Receipt=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHV_B14_Q18_GOLDEN_ENRICHMENT_DELTA_R01_20261119.md"),"utf8");
   const b14Field=k=>b14Receipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
   assert(b14At>0&&b13CssText.indexOf(b14Marker,b14At+1)<0,
    "B14 scoped CSS appended exactly once to B01–B13 accepted prefix");
   assert.equal(blob(Buffer.from(b13CssText.slice(0,b14At-1))),b13Field("CANDIDATE_GOLDEN_CSS_BLOB"),
    "B13 owner P2 source/stylesheet snapshot remains byte-identical");
   assert.equal(b14Field("G10_B01_B13_FROZEN_CSS_BLOB"),b13Field("CANDIDATE_GOLDEN_CSS_BLOB"),
    "B14 source receipt matches prior approved Golden CSS");
   assert.equal(blob(require("./test-g10-b15-golden-css-source.cjs").publishedB14Ancestor(css)),b14Field("CANDIDATE_GOLDEN_CSS_BLOB"),
    "B14 new scoped UI SHA must match X-C signed receipt");
   assert(b13Receipt.includes("Q18_OWNER_SELF_VERIFIED_ENRICHMENT_PASS")&&
    b13Receipt.includes("S1_SCOPE_MATH_CONVENTION_VERIFIED")&&
    b13Receipt.includes("P0=0; P1=0"),
    "B13 Q18 source has a math/PED self-QA receipt; Golden parity does not replace it");
  // Historical R01 source/receipt stay immutable; this P2 correction is a scoped DELTA_A_UI.
  const r02=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B10_P2_MATHJAX_DELTA_A_UI_R02_20261118.md"),"utf8");
  const r02f=k=>r02.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(r02f("BASELINE_R01_SOURCE_BLOB"),f("R01_SOURCE_BLOB"),"B10 P2 R02 source ancestry changed");
  assert.equal(r02f("BASELINE_R01_CANONICAL_BLOB"),f("ONE_CANONICAL_LESSON_BLOB"),"B10 P2 R02 canonical ancestry changed");
  assert(r02.includes("DELTA_A_UI")&&r02.includes("MathJax"),"B10 P2 targeted UI fix must be documented");
  expected=r02f("R02_SOURCE_BLOB");
   const canonical=fs.readFileSync(path.join(root,
    "prototypes/thpt/content-drafts/THPT_G10_CHIV_B10_CANONICAL.md"));
   const receipt20=fs.readFileSync(path.join(root,
    "prototypes/thpt/ux795/G10_CHIV_CHV_B07_B14_KIEM_LOI_PLACEMENT_Q18_R01_20261120.md"),"utf8");
   const sourceRows=receipt20.split("\n").filter(x=>x.startsWith("| CANONICAL_B10 | "));
   assert.equal(sourceRows.length,1,"B10 one signed current manuscript");
   const historical=[...sourceRows[0].matchAll(/`([a-f0-9]{40})`/g)].map(x=>x[1]);
   assert.deepEqual(historical,[r02f("R02_ONE_CANONICAL_LESSON_BLOB"),blob(canonical)],
    "B10 historical P2 manuscript must extend to exact signed 20/11 current manuscript");
 }else if(lesson==="B11"){
  const signed=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B11_S1_PED_CANONICAL_Q18_R01_20261118.md"),"utf8");
  const field=k=>signed.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field("R01_PUBLISHED_B11_SOURCE_BLOB"),row.candidate,
   "B11 candidate must extend immutable R01 publication");
  assert(signed.includes("INDEPENDENT_ACADEMIC_PED_REVIEW_PENDING")&&
   signed.includes("DELTA_C_ACADEMIC_MATERIAL")&&signed.includes("RELEASE_HOLD"),
   "B11 authoring material independent review required; not automated PASS");
  const ui=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B11_P2_TAB4_GOLDEN_DELTA_A_UI_R02_20261118.md"),"utf8");
  const uf=k=>ui.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(uf("R01_PUBLISHED_B11_SOURCE_BLOB"),field("B11_CANDIDATE_SOURCE_BLOB"),
   "B11 Tab4 R02 may only descend from independently reviewed R01 Knowledge");
  assert.equal(uf("R01_PUBLISHED_B11_CANONICAL_BLOB"),field("ONE_CANONICAL_B11_BLOB"),
   "B11 Tab4 R02 may only descend from independently reviewed R01 canonical");
  assert.equal(blob(fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B11_S1_PED_CANONICAL_Q18_R01_20261118.md"))),
   uf("R01_Q18_RECEIPT_BLOB"),"B11 original independently reviewed Q18 receipt must be frozen");
  assert.equal(uf("R01_CSS_BLOB"),uf("R02_CSS_BLOB"),
   "B11 UI-only Tab4 reflow cannot change CSS");
  const p2=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_B11_B12_OWNER_P2_SOURCE_FIRST_DELTA_A_R01_20261118.md"),"utf8");
  const d=k=>p2.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  const g2=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_B11_B12_OWNER_P2_GOLDEN_COMPONENT_PARITY_DELTA_A_R02_20261118.md"),"utf8");
  const g=k=>g2.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(g("B11_PREVIOUS_SOURCE_BLOB"),d("B11_SOURCE_CURRENT_BLOB"),
   "Prior published B11 Knowledge still matches old Delta A receipt");
  assert.equal(g("B11_PREVIOUS_CANONICAL_BLOB"),d("B11_CANONICAL_CURRENT_BLOB"),
   "Prior published B11 canonical still matches old Delta A receipt");
  assert.equal(d("B11_BASELINE_SOURCE_BLOB"),uf("R02_B11_SOURCE_BLOB"),
   "B11 prior signed reviewed source remains immutable");
  assert.equal(d("B11_BASELINE_CANONICAL_BLOB"),uf("R02_ONE_CANONICAL_B11_BLOB"),
   "B11 prior signed canonical remains immutable");
  expected=g("B11_SOURCE_CURRENT_BLOB");
  // The 18/11 owner-P2 manuscript is a historical snapshot; current B11
  // follows the signed 20/11 Q18 HELP-placement material-delta transition.
  // Verify both ends of the exact immutable SHA chain (not a whitelist).
  const currentManuscript=fs.readFileSync(path.join(root,
   "prototypes/thpt/content-drafts/THPT_G10_CHIV_B11_CANONICAL.md"));
  const placementReceipt=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_CHV_B07_B14_KIEM_LOI_PLACEMENT_Q18_R01_20261120.md"),"utf8");
  const canonicalRows=placementReceipt.split("\n")
   .filter(x=>x.startsWith("| CANONICAL_B11 | "));
  assert.equal(canonicalRows.length,1,"B11 exactly one signed manuscript transition");
  const canonicalShaChain=[...canonicalRows[0].matchAll(/`([a-f0-9]{40})`/g)]
   .map(x=>x[1]);
  assert.deepEqual(canonicalShaChain,
   [g("B11_CANONICAL_CURRENT_BLOB"),blob(currentManuscript)],
   "B11 historical owner-P2 and current manuscript must match signed Q18 SHA chain");
 }
 // 20/11 owner-signed local HELP placement supersedes the earlier
 // ChIV source. Verify both bytes of the historical chain; do not relabel
 // DELTA_C math repairs as UI-only or silently replace legacy receipts.
 const placement=fs.readFileSync(path.join(root,
  "prototypes/thpt/ux795/G10_CHIV_CHV_B07_B14_KIEM_LOI_PLACEMENT_Q18_R01_20261120.md"),"utf8");
 assert(placement.includes("DELTA_C_ACADEMIC_MATERIAL")&&
  placement.includes("G10-B07-B14-KIEM-LOI-PLACEMENT-Q18-R01-20261120"),
  lesson+" signed material delta classification and receipt required");
 const sourceRows=placement.split("\n").filter(x=>x.startsWith("| B"+n+" | "));
 assert.equal(sourceRows.length,1,lesson+" exactly one final HELP-placement source row");
 const blobs=[...sourceRows[0].matchAll(/`([a-f0-9]{40})`/g)].map(x=>x[1]);
 assert.equal(blobs.length,2,lesson+" source predecessor and successor both signed");
 assert.equal(blobs[0],expected,lesson+" historical Rxx learner source must remain immutable");
 expected=blobs[1];
 if(lesson==="B09"){
  // R02 subsequently moved the general wrong-vector-decomposition tip
  // back to tab 4 (not a local First Try D6). Require exact signed parent,
  // current public SHA and the ONE current canonical manuscript SHA.
  const r02=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHIV_B09_GENERAL_VECTOR_ERROR_TAB4_Q18_R02_20261120.md"),"utf8");
  const field=k=>r02.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field("R02_PREVIOUS_SOURCE_BLOB"),expected,
   "B09 current R02 general error must extend signed HELP-placement R01");
  const oldCanonical=placement.split("\n")
   .find(x=>x.startsWith("| CANONICAL_B09 | "));
  assert(oldCanonical,"B09 one-canonical manuscript transition receipt missing");
  const historical=[...oldCanonical.matchAll(/`([a-f0-9]{40})`/g)].map(x=>x[1]);
  assert.equal(historical.length,2);
  assert.equal(field("R02_PREVIOUS_CANONICAL_BLOB"),historical[1],
   "B09 canonical R02 must extend same signed current R01 manuscript");
  expected=field("R02_CORRECTED_SOURCE_BLOB");
  const manuscript=fs.readFileSync(path.join(root,
   "prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_CANONICAL.md"));
  assert.equal(blob(manuscript),field("R02_CORRECTED_CANONICAL_BLOB"),
   "B09 one current canonical manuscript must match exact final R02 Q18 SHA");
 }
 assert.equal(blob(source),expected,lesson+" exact current Q18 learner source");
 assert.equal(candidateG10KnowledgeBlob(n),expected,lesson+" Q18 router selects latest immutable source");
 for(const key of ["data-thpt-first-try-id","data-thpt-help-id","data-outcome-id"])
  assert.deepEqual(ids(source,key),ids(previous,key),lesson+" canonical/outcome IDs changed");
 if(lesson==="B10"){
  assert.equal(formativeBodies(source).length,6,
   "B10 six preserved ID placements, revised self-check answer math only in Q18 Delta C");
  assert.deepEqual(formativeBodies(source).slice(0,5),formativeBodies(previous).slice(0,5),
   "B10 original TRY16–TRY20 published questions/answers must remain exactly canonical");
  for(const t of ["(5;-3)","(5;-5)","5 đơn vị","\\vec v=3\\vec u","M=(1;2)","36"])
   assert(source.includes(t),"B10 first-try computed result absent "+t);
 }else if(lesson==="B11"){
  assert.equal(formativeBodies(source).length,5,
   "B11 original four First Tries + one force transfer placement must remain");
  assert.deepEqual(formativeBodies(source).slice(0,4),formativeBodies(previous).slice(0,4),
   "B11 four original independent First Try keys/solutions must remain exact");
  for(const item of ["THPT-G10-CHIV-TRY-FORCE-TR01","4\\sqrt3",
   "HELP-G10-CHIV-FORCE-TR01"])
   assert(source.includes(item),"B11 signed force transfer Q15/D6 evidence missing "+item);
 }else assert.deepEqual(formativeBodies(source),formativeBodies(previous),
  lesson+" any original First Try stem or answer changed");
 const tabs=[...source.matchAll(/^=== "([^"]+)"$/gm)].map(x=>x[1]);
 assert.deepEqual(tabs,["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],lesson+" four original tabs");
 const x=source.indexOf('=== "Khám phá kiến thức"'),y=source.indexOf('=== "Kiến thức SGK"'),
       z=source.indexOf('=== "Ví dụ"'),w=source.indexOf('=== "Lỗi thường gặp"');
 assert(x>=0&&y>x&&z>y&&w>z,lesson+" four tab order");
 const discover=source.slice(x,y),official=source.slice(y,z),examples=source.slice(z,w),last=source.slice(w);
 assert.equal((discover.match(/data-thpt-first-try-id/g)||[]).length,
  lesson==="B11"?5:row.moved,
  lesson+" each original canonical First Try must appear only in Discovery");
 assert.equal((official.match(/data-thpt-first-try-id/g)||[]).length,0,lesson+" SGK tab contains a First Try");
 assert.equal((official.match(/^    \?\?\? question/gm)||[]).length,0,lesson+" SGK tab contains an opened-answer control");
 assert.deepEqual([...official.matchAll(/^    ### ([^\n]+)$/gm)].map(x=>x[1]),book[lesson],
  lesson+" official S1 book headings exactly 2.1.., no double SGK");
 assert(official.startsWith('=== "Kiến thức SGK"\n\n    ### 2.1.'),
  lesson+" SGK tab must start directly at 2.1, not commentary");
 assert.equal((discover.match(/^    ### /gm)||[]).length,
  (lesson==="B07"||lesson==="B08")?5:lesson==="B09"||lesson==="B11"?4:3,
  lesson+" authentic discovery stages");
 assert(!official.includes("    ### Kiến thức SGK"),lesson+" duplicate SGK heading");
 for(const part of [discover.slice('=== "Khám phá kiến thức"\n'.length),official.slice('=== "Kiến thức SGK"\n'.length)]){
  const unindented=part.split("\n").filter(l=>l.trim()&&!l.startsWith("    "));
  assert.equal(unindented.length,0,lesson+" tabbed Markdown indentation leaked paragraphs");
 }
 if(lesson==="B07"||lesson==="B08"){
  assert.equal((examples.match(/^    ### 3\.[1-4]\. Ví dụ [1-4] —/gm)||[]).length,4,
   lesson+" new four distinct method-first examples match exact Q18 delta receipt");
  for(const section of ["Phân tích.","Lời giải.","Kiểm lại."]){
   assert.equal(examples.split("**"+section+"**").length-1,4,
     lesson+" every worked example must explain method, solve, and check "+section);
  }
  if(lesson==="B08")assert(discover.includes("THPT_G10_B08_TRIANGLE_PARALLELOGRAM_SUM_D5_R01.svg")&&
   !official.includes("THPT_G10_B08_TRIANGLE_PARALLELOGRAM_SUM_D5_R01.svg"),
    "B08 original D5 vector figure must guide discovery before formula");
  else assert(official.includes("THPT_G10_B07_PARALLELOGRAM_EQUAL_OPPOSITE_D5_R01.svg")&&
   !discover.includes("THPT_G10_B07_PARALLELOGRAM_EQUAL_OPPOSITE_D5_R01.svg"),
    "B07 keep source-matched exact-answer visual after first attempts");
 }else if(lesson==="B09"){
  assert.equal((examples.match(/^    ### Ví dụ [1-4]\./gm)||[]).length,4,
   "B09 S1 extra decomposition example must be a fourth distinct, solved example");
  for(const label of ["**Hướng giải:**","**Giải:**","**Tự kiểm:**"])
   assert.equal(examples.split(label).length-1,4,
    "B09 all four worked examples must include "+label);
  assert(examples.includes("Ví dụ 4. Phân tích theo hai vectơ không cùng phương"),
   "B09 missing required S1 decomposition learner example");
 }else if(lesson==="B10"){
  assert.equal((examples.match(/^    ### 3\.[1-4]\. Ví dụ [1-4] —/gm)||[]).length,4,
   "B10 needs four fully reasoned examples with river in Tab3");
  for(const k of ["**Phân tích:**","**Giải:**","**Kiểm lại"])
   assert.equal(examples.split(k).length-1,4,
    "B10 each worked example needs why/method/check "+k);
 }else if(lesson==="B11"){
  assert.equal((examples.match(/^    ### 3\.[1-4]\. Ví dụ [1-4] —/gm)||[]).length,4,
   "B11 force equilibrium worked example must belong to Tab3, not errors");
  assert(examples.includes("6\\,\\mathrm N")&&examples.includes("THPT_G10_CHIV_FORCE_TRANSFER_D5_R01_CORRECTED.svg"),
   "B11 original source-matched 8/15 SVG must be separated from 6/6 worked force example");
  for(const label of ["<strong>Giải:</strong>","**Kiểm lại:**","**Phân tích:**",
   'class="thpt-g10-example-solution"'])
   assert(examples.includes(label),"B11 signed B10 Golden source lacking "+label);
  assert.equal(examples.split('class="thpt-g10-example-solution"').length-1,4,
   "B11 exactly four B10 neutral Golden solution groups");
  assert.equal(examples.split("**Phân tích:**").length-1,4,
   "B11 four authored analysis paragraphs");
  assert(!examples.includes('!!! example "Lời giải"'),
   "B11 must not use violet MkDocs native example admonition");
 }else{
  assert.equal(examples,previous.slice(previous.indexOf('=== "Ví dụ"'),previous.indexOf('=== "Lỗi thường gặp"')),
   lesson+" previously approved three worked examples changed");
  assert.equal((examples.match(/^    ### Ví dụ /gm)||[]).length,3,
   lesson+" previous three original examples stay intact");
 }
 if(n<=10&&![7,8,9,10].includes(n)){
  assert.deepEqual(tex(source),tex(previous),lesson+" original mathematical expressions changed beyond reordering");
 }else if(n===11){
  assert(official.includes("có thể nhận một giá trị **tùy ý** từ")&&
   official.includes("vuông góc với mọi vectơ"),"B11 exact SGK zero-vector convention must not be erased");
  assert(official.includes("Mẫu số phải dương")&&
   official.includes("\\vec u\\cdot\\vec v=ac+bd"),"B11 denominator guards/coordinate dot missing");
  assert.equal((last.match(/data-thpt-first-try-id/g)||[]).length,0,
   "B11 force transfer First Try must not remain in error tab");
  assert.equal((last.match(/^    ### 4\.[1-3]\./gm)||[]).length,0,
   "B11 Golden Tab4 must have zero redundant heading cards like owner-P2 B10");
  // Owner-signed 20/11 Q18 moved three item-specific D6 disclosures
  // under their Vận dụng in Discovery; Tab4 must never clone them.
  // The historical and current manuscript/source SHA chain is checked above.
  const discovery=source.split('=== "Khám phá kiến thức"')[1]
   .split('=== "Kiến thức SGK"')[0];
  assert.equal((discovery.match(/^    \?\?\? tip "Kiểm lỗi"$/gm)||[]).length,3,
   "B11 3 signed local Kiểm lỗi disclosures remain in Discovery");
  assert.equal((last.match(/data-thpt-help-id=/g)||[]).length,0,
   "B11 Tab4 must not duplicate HELP moved to Vận dụng");
  assert.equal((source.match(/data-thpt-help-id=/g)||[]).length,3,
   "B11 3 original canonical HELP IDs unchanged");
  for(const [tryId,helpId] of [
   ["THPT-G10-CHIV-TRY21","HELP-G10-B11-02"],
   ["THPT-G10-CHIV-TRY23","HELP-G10-B11-01"],
   ["THPT-G10-CHIV-TRY-FORCE-TR01","HELP-G10-CHIV-FORCE-TR01"]
  ]){
   const atTry=discovery.indexOf('data-thpt-first-try-id="'+tryId+'"');
   const atHelp=discovery.indexOf('data-thpt-help-id="'+helpId+'"');
   assert(atTry>=0&&atHelp>atTry,
    "B11 Kiểm lỗi must follow related Vận dụng with original IDs "+tryId+"/"+helpId);
  }
  assert(!source.includes(String.fromCharCode(96))&&
   !source.includes("Assessment safety")&&
   !source.includes("Ví dụ có hướng dẫn — EX-"),
   "B11 learner prose must not leak raw code or implementation metadata");
 }else{
  assert(["B07","B08","B09","B10"].includes(lesson),
   "Only original-author-Q18 signed lesson deltas may reorder mandatory mathematics");
  if(lesson==="B10"){
  for(const required of ["\\vec u=x\\vec i+y\\vec j",
   "AB=\\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}","ad-bc=0"])
   assert(source.includes(required),"B10 essential mandatory S1 mathematics lost "+required);
 }else if(lesson==="B07"){
   for(const formula of ["|\\overrightarrow{AB}|=AB\\ge0",
    "\\overrightarrow{AB}=\\overrightarrow{DC}","\\overrightarrow{AA}=\\vec0"])
    assert(official.includes(formula),"B07 original required SGK mathematics preserved: "+formula);
  }else if(lesson==="B09"){
   for(const required of [
    "\\vec u=\\vec0", "k(\\vec u+\\vec v)=k\\vec u+k\\vec v",
    "x\\vec a+y\\vec b", "\\overrightarrow{MN}=-\\tfrac12\\vec a+\\tfrac12\\vec b"
   ]) assert(source.includes(required),"B09 required original/new S1 maths missing: "+required);
  }else{
  for(const required of [
   "\\overrightarrow{AB}+\\overrightarrow{BC}=\\overrightarrow{AC}",
   "\\overrightarrow{AB}+\\overrightarrow{AD}=\\overrightarrow{AC}",
   "\\vec u-\\vec v=\\vec u+(-\\vec v)",
   "\\overrightarrow{GA}+\\overrightarrow{GB}+\\overrightarrow{GC}=\\vec0"
  ])assert(official.includes(required),"B08 R02 must retain original vector rule: "+required);
  }
 }
 assert.notDeepEqual(ids(source.replace('data-thpt-first-try-id="','data-thpt-first-try-id="BAD-'),
  "data-thpt-first-try-id"),ids(previous,"data-thpt-first-try-id"),lesson+" ID mutation must fail");
 assert.notDeepEqual([...official.replace(book[lesson][0],"WRONG SGK").matchAll(/^    ### ([^\n]+)$/gm)].map(x=>x[1]),
  book[lesson],lesson+" wrong S1 section must fail");
 assert.notEqual(blob(source+" "),expected,lesson+" Git SHA mutation must fail");
 console.log("PASS "+lesson+" Q18 S1 sections, "+(["B07","B08","B10"].includes(lesson)?"4 signed worked":"3 original")+" examples, canonical IDs and formative answers");
}
console.log("PASS 5/5 G10 ChIV S1/Q18 self-verified editorial source receipts; no independent reviewer claimed.");
