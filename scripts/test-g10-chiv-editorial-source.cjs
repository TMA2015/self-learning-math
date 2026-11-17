#!/usr/bin/env node
"use strict";
/* SLM-THPT-QUALITY-ONE v3.1.0 Q18 self-verified: S1 exact headings,
 * original public First Try questions/keys, source blob SHA and semantic
 * conditions. Never infer a reviewer PASS or expose private RD1 data. */
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const crypto=require("node:crypto"),cp=require("node:child_process");
const root=path.resolve(__dirname,"..");
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
   assert.equal(blob(standard),f04("R04_STANDARD_BLOB"),
     "B08 semantic 3+1 must reference one owner-approved exact standard source");
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
   assert.equal(blob(css),f04("R04_CSS_BLOB"),
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
  assert.equal(blob(standard),f("STANDARD_BLOB"),
   "B09 3+1 source uses one effective signed v3.2.0 standard");
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
  assert(official.includes("THPT_G10_B09_SCALAR_MULTIPLE_VECTORS_D5_R01.svg")&&
   official.includes("THPT_G10_B09_DECOMPOSITION_TWO_DIRECTIONS_D5_R03.svg"),
   "B09 two D5 figures must be adjacent to official teaching");
  const examples=source.slice(source.indexOf('=== "Ví dụ"'),source.indexOf('=== "Lỗi thường gặp"'));
  assert.equal((examples.match(/^    ### Ví dụ [1-4]\\./gm)||[]).length,4,
   "B09 four distinct worked examples, including mandatory decomposition");
  assert(examples.includes("Phân tích theo hai vectơ không cùng phương")&&
   examples.includes("\\overrightarrow{MN}=-\\tfrac12\\vec a+\\tfrac12\\vec b"),
   "B09 noncollinear decomposition must be solved and verified, not only noted");
  const css=fs.readFileSync(path.join(root,
   "docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css"));
  assert.equal(blob(css),f("R03_CSS_BLOB"),
   "B09 scoped 3+1 CSS exact source SHA required");
  const cssText=css.toString("utf8"),marker="/* G10 Chapter IV B09 R03";
  const at=cssText.indexOf(marker);
  assert(at>0&&cssText.indexOf(marker,at+1)<0,"B09 one CSS append only");
  assert.equal(blob(cssText.slice(0,at-1)),f("CSS_BASELINE_BLOB"),
   "All owner P2-accepted B01–B08 CSS bytes must remain identical");
  const svg=fs.readFileSync(path.join(root,
   "docs/assets/images/thpt/THPT_G10_B09_DECOMPOSITION_TWO_DIRECTIONS_D5_R03.svg"));
  assert.equal(blob(svg),f("R03_SVG_BLOB"),
   "B09 SVG must match signed geometry source");
  assert(svg.toString("utf8").includes("<title")&&svg.toString("utf8").includes("<desc")&&
   !svg.toString("utf8").includes("<script"),"B09 SVG accessible/safe");
  assert(receipt.includes("BLOCKED_BY_AUTHORING")&&receipt.includes("NO_CANONICAL_DECOMPOSITION_ITEM"),
   "B09 source QA is technical only; academic release must remain HOLD");
  expected=f("R03_SOURCE_BLOB");
 }
 assert.equal(blob(source),expected,lesson+" exact final Q18 academic source receipt");
 assert.equal(candidateG10KnowledgeBlob(n),expected,lesson+" Q18 source router selects correct immutable snapshot");
 for(const key of ["data-thpt-first-try-id","data-thpt-help-id","data-outcome-id"])
  assert.deepEqual(ids(source,key),ids(previous,key),lesson+" canonical/outcome IDs changed");
 assert.deepEqual(formativeBodies(source),formativeBodies(previous),
  lesson+" any original First Try stem or answer changed");
 const tabs=[...source.matchAll(/^=== "([^"]+)"$/gm)].map(x=>x[1]);
 assert.deepEqual(tabs,["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],lesson+" four original tabs");
 const x=source.indexOf('=== "Khám phá kiến thức"'),y=source.indexOf('=== "Kiến thức SGK"'),
       z=source.indexOf('=== "Ví dụ"'),w=source.indexOf('=== "Lỗi thường gặp"');
 assert(x>=0&&y>x&&z>y&&w>z,lesson+" four tab order");
 const discover=source.slice(x,y),official=source.slice(y,z),examples=source.slice(z,w),last=source.slice(w);
 assert.equal((discover.match(/data-thpt-first-try-id/g)||[]).length,row.moved,
  lesson+" original pedagogic First Try must appear only in Discovery");
 assert.equal((official.match(/data-thpt-first-try-id/g)||[]).length,0,lesson+" SGK tab contains a First Try");
 assert.equal((official.match(/^    \?\?\? question/gm)||[]).length,0,lesson+" SGK tab contains an opened-answer control");
 assert.deepEqual([...official.matchAll(/^    ### ([^\n]+)$/gm)].map(x=>x[1]),book[lesson],
  lesson+" official S1 book headings exactly 2.1.., no double SGK");
 assert(official.startsWith('=== "Kiến thức SGK"\n\n    ### 2.1.'),
  lesson+" SGK tab must start directly at 2.1, not commentary");
 assert.equal((discover.match(/^    ### /gm)||[]).length,(lesson==="B07"||lesson==="B08")?5:3,lesson+" authentic discovery stages");
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
 }else{
  assert.equal(examples,previous.slice(previous.indexOf('=== "Ví dụ"'),previous.indexOf('=== "Lỗi thường gặp"')),
   lesson+" previously approved three worked examples changed");
  assert.equal((examples.match(/^    ### Ví dụ /gm)||[]).length,3,
   lesson+" previous three original examples stay intact");
 }
 if(n<=10&&n!==8&&n!==7){
  assert.deepEqual(tex(source),tex(previous),lesson+" original mathematical expressions changed beyond reordering");
 }else if(n===11){
  assert(official.includes("có thể nhận một giá trị tùy ý từ $0^\\circ$ đến $180^\\circ$"),"B11 original SGK zero-angle range");
  assert(official.includes("vuông góc với mọi vectơ"),"B11 SGK orthogonality convention");
  assert(official.includes("hai độ dài đều dương"),"B11 denominator guard");
  assert(official.includes("\\vec u\\cdot\\vec v=ac+bd"),"B11 coordinate product formula");
  assert.equal((last.match(/data-thpt-first-try-id/g)||[]).length,1,
   "B11 original extra transfer First Try remains in mistakes tab");
 }else{
  assert(["B07","B08"].includes(lesson),"Only source-locked B07/B08 enrichment skips legacy TeX reorder check");
  if(lesson==="B07"){
   for(const formula of ["|\\overrightarrow{AB}|=AB\\ge0",
    "\\overrightarrow{AB}=\\overrightarrow{DC}","\\overrightarrow{AA}=\\vec0"])
    assert(official.includes(formula),"B07 original required SGK mathematics preserved: "+formula);
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
 console.log("PASS "+lesson+" Q18 S1 sections, "+(["B07","B08"].includes(lesson)?"4 new":"3 original")+" examples, canonical IDs and formative answers");
}
console.log("PASS 5/5 G10 ChIV S1/Q18 self-verified editorial source receipts; no independent reviewer claimed.");
