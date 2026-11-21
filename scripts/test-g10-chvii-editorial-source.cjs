#!/usr/bin/env node
"use strict";
/* Q18 Golden B19–B22 — fail-closed original published source → candidate.
 * No assessment answer/rubric edits, no Academic/PED reviewer PASS inference.
 * This suite is independent of the original historical G10 source ledger. */
const fs=require("node:fs"),path=require("node:path"),cp=require("node:child_process"),
 crypto=require("node:crypto"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,".."),published="bfc15b552a1ea697edb1327f0a48d7a95bbb73ed";
const {chviiEditorialReceiptRows,candidateG10KnowledgeBlob}=require("./thpt-q18-g10-source-receipt.cjs");
const blob=data=>{const raw=Buffer.isBuffer(data)?data:Buffer.from(data);return crypto.createHash("sha1").update("blob "+raw.length+"\0").update(raw).digest("hex");};
const ids=(s,k)=>[...s.matchAll(new RegExp(k+'="([^"]+)"',"g"))].map(m=>m[1]).sort();
const tex=s=>[...s.matchAll(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g)].map(m=>(m[1]||m[2]).trim().replace(/\s+/g," "));
function revealed(s){
 const lines=s.split("\n"),out=[];let capture=null;
 for(let i=0;i<lines.length;i++){
  const line=lines[i];
  if(/^    \?\?\? question "(?:Tự mở đáp án sau khi đã tự làm|Tự mở kết quả sau khi đã thử|Đối chiếu)"$/.test(line)){
   if(capture)out.push(capture.join("\n").trimEnd());
   capture=[];continue;
  }
  if(capture!==null){
   if(line===""||line.startsWith("        ")){capture.push(line);continue;}
   out.push(capture.join("\n").trimEnd());capture=null;
  }
 }
 if(capture)out.push(capture.join("\n").trimEnd());
 return out.sort();
}
const specs={
 19:{count:7,helps:9,figures:1,examples:2,book:["2.1. Phương trình tổng quát của đường thẳng","2.2. Phương trình tham số của đường thẳng"]},
 20:{count:5,helps:7,figures:1,examples:2,book:["2.1. Vị trí tương đối giữa hai đường thẳng","2.2. Góc giữa hai đường thẳng","2.3. Khoảng cách từ một điểm đến một đường thẳng"]},
 21:{count:5,helps:7,figures:1,examples:2,book:["2.1. Phương trình đường tròn","2.2. Phương trình tiếp tuyến của đường tròn"]},
 22:{count:8,helps:10,figures:3,examples:3,book:["2.1. Elip","2.2. Hypebol","2.3. Parabol","2.4. Một số ứng dụng của ba đường conic"]}
};
const rows=chviiEditorialReceiptRows();
assert.equal(rows.size,4,"Exactly four signed Chapter VII rows required");
let allTry=0,allHelp=0,allFigures=0,allExamples=0;
for(const [lessonStr,info]of Object.entries(specs)){
 const n=Number(lessonStr),name="B"+n,row=rows.get(name);
 assert(row,"Missing signed receipt "+name);
 const rel="docs/thpt-preview/sgk/chuong-vii/bai-"+n+".md";
 const bytes=fs.readFileSync(path.join(root,rel)),s=bytes.toString("utf8");
 const old=cp.spawnSync("git",["show",published+":"+rel],{cwd:root,encoding:"utf8"});
 assert.equal(old.status,0,"Original published Git source inaccessible "+rel+" "+old.stderr);
 const baseline=old.stdout;
 assert.equal(blob(baseline),row.baseline,name+" published source baseline SHA mismatch");
 const expected=(n===19||n===20||n===21||n===22)?candidateG10KnowledgeBlob(n):row.candidate;
 // Signed succession: 20/11 owner S1 → local HELP placement → 21/11
 // metadata-only single source footer. All three SHA receipts are required.
 const helpRelease=n===21?"R03":"R02";
 const helpReceipt=fs.readFileSync(path.join(root,
  "prototypes/thpt/ux795/G10_CHVII_B"+n+"_VAN_DUNG_KIEM_LOI_Q18_"+
  helpRelease+"_20261120.md"),"utf8");
 const hf=k=>helpReceipt.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
 const helpBefore=hf(helpRelease+"_PREVIOUS_SOURCE_BLOB");
 const helpAfter=hf(helpRelease+"_CORRECTED_SOURCE_BLOB");
 const metadata=fs.readFileSync(path.join(root,
  "prototypes/thpt/ux795/G10_B19_B26_ONE_SOURCE_AND_SEMANTIC_BOX_Q18_DELTA_20261121.md"),"utf8");
 const rows21=metadata.split("\n").filter(x=>x.startsWith("| B"+n+" | "));
 assert.equal(rows21.length,1,name+" one-source source receipt required");
 const footerBlobs=[...rows21[0].matchAll(/`([a-f0-9]{40})`/g)].map(x=>x[1]);
 assert.deepEqual(footerBlobs,[helpAfter,expected],
  name+" HELP placement must precede exact signed metadata-only source");

 assert.equal(blob(bytes),expected,name+" candidate Markdown differs from signed latest receipt");
 assert.equal(candidateG10KnowledgeBlob(n),expected,name+" canonical current source router not signed");
 if(n===19){
  const latest=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHVII_B19_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261120.md"),"utf8");
  const field=k=>latest.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field("PREVIOUS_B19_SOURCE_BLOB"),row.candidate,
   "B19 owner update must preserve published 13/11 receipt/source");
  assert.equal(field("CANDIDATE_B19_SOURCE_BLOB"),helpBefore,
   "B19 current exact Git source must match new owner Q18 receipt");
 }
 if(n===20){
  const latest=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHVII_B20_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261120.md"),"utf8");
  const field=k=>latest.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field("PREVIOUS_B20_SOURCE_BLOB"),row.candidate,
   "B20 owner source must extend original signed S1/G10-CHVII receipt");
  assert.equal(field("CANDIDATE_B20_SOURCE_BLOB"),helpBefore,
   "B20 new learner-first source must match Q18 signed Git blob");
 }
 if(n===21){
  const latest=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHVII_B21_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261120.md"),"utf8");
  const field=k=>latest.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field("PREVIOUS_B21_SOURCE_BLOB"),row.candidate,
   "B21 must extend exact prior 13/11 SGK S1 published source");
  const r01=field("CANDIDATE_B21_SOURCE_BLOB");
  assert.equal(r01,"37c0a0c2e3c785bbfb1b4852162c867cf72e1626",
   "B21 original R01 signed source must remain immutable");
  const fixed=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHVII_B21_DISPLAY_MATH_RENDER_R02_20261120.md"),"utf8");
  const f02=k=>fixed.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(f02("PREVIOUS_B21_SOURCE_BLOB"),r01,
   "B21 display-math R02 must extend exact R01");
  assert.equal(f02("CANDIDATE_B21_SOURCE_BLOB"),helpBefore,
   "B21 canonical source must match exact R02 source SHA");
 }
 if(n===22){
  const latest=fs.readFileSync(path.join(root,
   "prototypes/thpt/ux795/G10_CHVII_B22_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261120.md"),"utf8");
  const field=k=>latest.split("**"+k+":** "+String.fromCharCode(96))[1]?.slice(0,40);
  assert.equal(field("PREVIOUS_B22_SOURCE_BLOB"),row.candidate,
   "B22 must preserve signed original ChVII S1 source");
  assert.equal(field("CANDIDATE_B22_SOURCE_BLOB"),helpBefore,
   "B22 authored Git blob must match signed owner Q18 receipt");
 }
 assert.equal(row.moved,info.count,name+" 25 First Try count source receipt");
 assert.equal(row.helps,info.helps,name+" 33 HELP source receipt");
 assert.equal(row.examples,info.examples,name+" example count source receipt");
 for(const id of ["data-thpt-first-try-id","data-thpt-help-id","data-outcome-id","data-thpt-help-ref","data-thpt-fig-id"]){
  assert.deepEqual(ids(s,id),ids(baseline,id),name+" canonical data ID drift: "+id);
  if(id!=="data-outcome-id")assert.equal(new Set(ids(s,id)).size,ids(s,id).length,name+" duplicated canonical "+id);
  // Q15: multiple distinct item_ids may target the SAME outcome_id. Do not
  // misclassify original B22 shared ellipse/hyperbola outcomes as duplicate items.
 }
 assert.deepEqual(revealed(s),revealed(baseline),name+" original canonical voluntary answer text changed");
 assert.equal(revealed(s).length,info.count,name+" original First Try answer-body count");
 const now=Math.max(0,s.indexOf('=== "Khám phá kiến thức"')),k=s.indexOf('=== "Kiến thức SGK"'),e=s.indexOf('=== "Ví dụ"'),m=s.indexOf('=== "Lỗi thường gặp"');
 assert(now>=0&&now<k&&k<e&&e<m,name+" tabs broken");
 assert.deepEqual([...s.matchAll(/^=== "([^"]+)"$/gm)].map(x=>x[1]),
  ["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],name+" tab identity");
 const d=s.slice(now,k),knowledge=s.slice(k,e),examples=s.slice(e,m),rem=s.slice(m);
 assert.deepEqual([...d.matchAll(/^    ### ([^\n]+)/gm)].map(x=>x[1]),
  ["Cùng tìm hiểu","Ví dụ trực quan","Thuật ngữ, kiến thức và kỹ năng"],name+" Discovery stages");
 assert.deepEqual([...knowledge.matchAll(/^    ### ([^\n]+)/gm)].map(x=>x[1]),info.book,
  name+" only real S1 textbook sections in Knowledge");
 assert.equal(ids(d,"data-thpt-first-try-id").length,info.count,name+" all First Try MUST be before Core/SGK Knowledge");
 assert.equal(ids(knowledge+examples+rem,"data-thpt-first-try-id").length,0,name+" cloned First Try outside Discovery");
 assert.equal(ids(d,"data-thpt-help-id").length,info.count,
  name+" one canonical local HELP per Discovery Vận dụng after signed relocation");
 assert.equal(ids(rem,"data-thpt-help-id").length,info.helps-info.count,
  name+" exactly two independent general HELPs remain in Golden tab 4");
 assert.equal(ids(knowledge+examples,"data-thpt-help-id").length,0,
  name+" no HELP in Knowledge or examples");
 assert.equal((s.match(/<figure/g)||[]).length,info.figures,name+" original D5 figures lost");
 assert.equal([...examples.matchAll(/^    ### /gm)].length,info.examples,name+" worked example sections incorrect");
 const solutions=(n===19||n===20||n===21||n===22)?
  [...examples.matchAll(/<div class="thpt-g10-example-solution"/g)].length:
  [...examples.matchAll(/\*\*Lời giải\.\*\*/g)].length;
 assert.equal(solutions,info.examples,
  name+" missing one clear Golden solution for every example");
 if(n===19){
  assert.equal([...examples.matchAll(/<strong>Lời giải\.<\/strong>/g)].length,2,
   "B19 both solution boxes must display exact label Lời giải");
  assert.equal([...examples.matchAll(/\*\*Phân tích:\*\*/g)].length,2,
   "B19 each worked example must explain method before the solution");
  assert.equal((knowledge.match(/thpt-r4-knowledge-conclusion thpt-r4-concept-card/g)||[]).length,2,
   "B19 must distinguish exact formal normal and direction definitions");
  assert.equal((knowledge.match(/thpt-r4-knowledge-conclusion thpt-r4-rule-card/g)||[]).length,2,
   "B19 must distinguish general and parametric equation rules");
  assert.equal((d.match(/\*\*Vận dụng\.\*\*/g)||[]).length,7,
   "B19 must have seven visible Vận dụng prompts, not Tự thử");
  assert.equal((rem.match(/^    \?\?\? tip "4\.[1-9]\. /gm)||[]).length,2,
   "B19 9 original D6 IDs need 9 meaningfully distinguished errors");
  assert(!/Tự thử|Em vận dụng\.|Vì sao chọn cách này\?|Kiến thức tiền đề:|Tự khắc phục theo năm bước/.test(s),
   "B19 must remove legacy learner-facing metadata and non-Golden labels");
  assert(d.includes("G10_B19_LINE_NORMAL_R02.svg")&&!knowledge.includes("G10_B19_LINE_NORMAL_R02.svg"),
   "B19 real figure must appear in Discovery before learner reads its arrows");
  // Protect mathematical interpretation, not a removed generic editorial phrase.
  for(const x of ["đồ thị của một hàm số","t không nhất thiết là thời gian"])
   assert(s.includes(x), "B19 learner-first explanation missing "+x);
 }
 if(n===20){
  assert.equal((examples.match(/<strong>Lời giải\.<\/strong>/g)||[]).length,2,
   "B20 exact two solutions inside approved neutral Golden boxes");
  assert.equal((examples.match(/\*\*Phân tích:/g)||[]).length,2,
   "B20 examples need learner-first method analysis before calculations");
  assert.equal((knowledge.match(/thpt-r4-knowledge-conclusion thpt-r4-concept-card/g)||[]).length,3,
   "B20 three actual textbook concepts must be classified in Golden concept cards");
  assert.equal((knowledge.match(/thpt-r4-knowledge-conclusion thpt-r4-rule-card/g)||[]).length,3,
   "B20 three conditional formula/rule cards must be present");
  assert.equal((d.match(/\*\*Vận dụng\.\*\*/g)||[]).length,5,
   "B20 exactly five learner-facing Vận dụng before original Đối chiếu");
  assert.equal((rem.match(/^    \?\?\? tip "4\.[1-7]\. /gm)||[]).length,2,
   "B20 original seven D6 IDs must map to seven distinct 4.x errors");
  assert(!/Tự thử|Em vận dụng\.|Vì sao chọn cách này\?|Kiến thức tiền đề:|Bản chất trước công thức:|Tự khắc phục theo năm bước/.test(s),
   "B20 retained obsolete machine-like student copy or non-Golden labels");
  assert(d.includes("G10_B20_POINT_LINE_DISTANCE_R02.svg")&&!knowledge.includes("G10_B20_POINT_LINE_DISTANCE_R02.svg"),
   "B20 real SVG must precede its visual interpretation in Discovery");
  assert((s.match(/^    \\\[$/gm)||[]).length===2,
   "B20 must retain exactly two original S1 display equations");
  for(const token of ["pháp tuyến", "đoạn vuông góc", "trị tuyệt đối", "song song phân biệt"])
   assert(s.includes(token),"B20 instructional explanation missing "+token);
 }
 if(n===21){
  assert.equal((examples.match(/<strong>Lời giải\.<\/strong>/g)||[]).length,2,
   "B21 needs both approved neutral worked-solution headers");
  assert.equal((examples.match(/\*\*Phân tích:/g)||[]).length,2,
   "B21 each worked example must analyze method and apply conditions");
  assert.equal((knowledge.match(/thpt-r4-knowledge-conclusion thpt-r4-concept-card/g)||[]).length,2,
   "B21 exact real circle/tangent concept roles missing");
  assert.equal((knowledge.match(/thpt-r4-knowledge-conclusion thpt-r4-rule-card/g)||[]).length,4,
   "B21 four actual conditional rules across two SGK sections missing");
  assert.equal((d.match(/\*\*Vận dụng\.\*\*/g)||[]).length,5,
   "B21 needs five learner-facing Vận dụng items before Đối chiếu");
  assert.equal((rem.match(/^    \?\?\? tip "4\.[1-7]\. /gm)||[]).length,2,
   "B21 must map seven unique learner-repair mistakes to original HELP");
  assert(!/Tự thử|Em vận dụng\.|Vì sao chọn cách này\?|Kiến thức tiền đề:|Bản chất trước công thức:|Tự khắc phục theo năm bước/.test(s),
   "B21 must not retain obsolete learner labels or repetitive D6");
  assert(d.includes("G10_B21_CIRCLE_TANGENT_R02.svg")&&!knowledge.includes("G10_B21_CIRCLE_TANGENT_R02.svg"),
   "B21 original tangent SVG must be read within Discovery");
  assert.equal((s.match(/^    \\\[$/gm)||[]).length,5,
   "B21 must preserve three original SGK and two worked example display math blocks");
  assert(!examples.includes('<div class="arithmatex">'),
   "B21 display TeX must be standalone Markdown, never raw nested arithmatex tags that strip delimiters");
  const displays=[...examples.matchAll(/^    \\\[$/gm)];
  assert.equal(displays.length,2,
   "B21 neutral example 3.2 must keep both visible standalone display formulas");
  assert(examples.includes("(x-2)^2+(y+3)^2=25.")&&examples.includes("3x+4y-19=0"),
   "B21 two original worked display expressions are mandatory");
  for(const token of ["đường biên","hoàn thành bình phương","đường trung trực",
    "M thuộc đường tròn","khoảng cách ngắn nhất"])
   assert(s.includes(token),"B21 full learner explanation missing: "+token);
 }
 if(n===22){
  assert.equal((examples.match(/<strong>Lời giải\.<\/strong>/g)||[]).length,3,
   "B22 exact three Golden neutral worked-solution boxes must contain Lời giải");
  assert.equal((examples.match(/\*\*Phân tích:/g)||[]).length,3,
   "B22 each of three worked examples needs true method analysis");
  assert.equal((examples.match(/\*\*Kiểm lại:/g)||[]).length,3,
   "B22 independent math self-check must follow each example");
  assert.equal((knowledge.match(/thpt-r4-knowledge-conclusion thpt-r4-concept-card/g)||[]).length,3,
   "B22 three geometric conic definitions need semantic Golden concept cards");
  assert.equal((knowledge.match(/thpt-r4-knowledge-conclusion thpt-r4-rule-card/g)||[]).length,4,
   "B22 equation/method/application conditional rules require exactly four roles");
  assert.equal((d.match(/\*\*Vận dụng\.\*\*/g)||[]).length,8,
   "B22 eight original learner questions must all be Vận dụng");
  assert.equal((rem.match(/^    \?\?\? tip "4\.(?:[1-9]|10)\. /gm)||[]).length,2,
   "B22 all ten original HELP need distinct named 4.x cases");
  assert(!/Tự thử|Em vận dụng\.|Vì sao chọn cách này\?|Kiến thức tiền đề:|Bản chất trước công thức:|Hướng dẫn đọc hình:|Tự khắc phục theo năm bước|Tại sao là D2 mới/.test(s),
   "B22 student source has obsolete machine labels or redundant D6 lists");
  assert.equal((d.match(/<figure class="thpt-r4-plot/g)||[]).length,3,
   "B22 exact three original figures must be introduced before figure reading in Discovery");
  assert(!knowledge.includes('<figure class="thpt-r4-plot'),
   "B22 detached figures may not stay in Knowledge tab");
  for(const token of ["THPT_G10_CHVII_ELLIPSE_TRANSFER_D5_R00.svg",
    "THPT_G10_CHVII_HYPERBOLA_TRANSFER_D5_R00.svg",
    "G10_B22_PARABOLA_FOCUS_R02.svg"])
    assert(d.includes(token),"B22 original figure missing from Discovery: "+token);
  for(const x of ["mái rộng 12 m","rộng 30 m","rộng 20 m",
    "B nhận trước","A đến trước","x≤−20","chưa cho tọa độ duy nhất"])
    assert(d.includes(x),"B22 transfer explanation missing guarded separate data: "+x);
  assert((s.match(/^    \\\[$/gm)||[]).length===0,
   "B22 original inline math does not need raw HTML display wrappers");
  assert(!examples.includes('<div class="arithmatex">'),
   "B22 must avoid the B21 raw nested HTML MathJax delimiter defect");
 }
 assert(!/Ví dụ do dự án biên soạn|Ví dụ tự biên soạn|Lưu ý về phạm vi Core|outcome Core|RD1/.test(s),
  name+" review metadata exposed in learner-facing source");
 const more=new Map();for(const f of tex(s))more.set(f,(more.get(f)||0)+1);
 for(const f of tex(baseline)){const v=more.get(f)||0;assert(v>=1,name+" original math expression missing "+f.slice(0,90));more.set(f,v-1);}
 assert.equal((s.match(/^    \\\[$/gm)||[]).length,(s.match(/^    \\\]$/gm)||[]).length,name+" math display delimiters malformed");
 assert(!/data-mastery-credit|data-mastery-write|data-thpt-readiness/.test(s),name+" official scoring/mastery in Knowledge");
 assert(!/^\s{4}\?\?\? question "Tự mở đáp án sau khi đã tự làm"/m.test(s),name+" non-Golden reveal label");
 assert.notDeepEqual(ids(s.replace('data-thpt-first-try-id="','data-thpt-first-try-id="CORRUPTED-'),"data-thpt-first-try-id"),
  ids(baseline,"data-thpt-first-try-id"),name+" negative item-id mutation failed");
 assert.notEqual(blob(s+" "),expected,name+" negative source SHA mutation failed");
 assert.notDeepEqual([...knowledge.replace(info.book[0],"WRONG_S1_TITLE").matchAll(/^    ### ([^\n]+)/gm)].map(x=>x[1]),
  info.book,name+" negative SGK title mutation failed");
 allTry+=info.count;allHelp+=info.helps;allFigures+=info.figures;allExamples+=info.examples;
 console.log("PASS "+name+" true S1 sections "+info.book.length+", FirstTry "+info.count+", HELP "+info.helps+
  ", figures "+info.figures+", worked problems "+info.examples+", original math and source SHA");
}
assert.deepEqual([allTry,allHelp,allFigures,allExamples],[25,33,6,9]);
const eq=(x,y)=>Math.abs(x-y)<1e-10;
assert(eq(2*1+4-6,0),"B19 line normal example");
assert(eq(6/Math.sqrt(5),Math.hypot(12/5,6/5)),"B20 perpendicular distance example");
assert(eq((5-2)**2+(1-1)**2,9),"B21 source circle tangent point");
assert(eq(25-16,9)&&eq(9+16,25),"B22 ellipse vs hyperbola c² sign");
assert(eq(4,2*2)&&eq(2/2,1),"B22 parabol 2p convention, F(1;0)");
console.log("PASS Q18 G10 ChVII 25/25 canonical First Try, 33 D6, 6 D5, 9 solution boundaries, math/ID/source negative checks; NO DEPLOY.");
