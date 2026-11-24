#!/usr/bin/env node
"use strict";
/*
 * Scoped production proof for exactly ONE changed canonical THPT SGK lesson.
 * No all-site browser crawl. All untouched pages remain outside QA scope.
 * This is a source/assessment-integrity technical check, not Academic/PED PASS.
 * Only a changed exact-Q18 receipt authorizes the new Git blob; otherwise HOLD.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),
 path=require("node:path"),crypto=require("node:crypto"),cp=require("node:child_process");
const root=path.resolve(__dirname,"..");
const LESSON=/^docs\/thpt-preview\/sgk\/(?:(?:lop-11|lop-12)\/)?chuong-(?:i|ii|iii|iv|v|vi|vii|viii|ix)\/bai-[1-9]\d*\.md$/;
const RECEIPT=/^prototypes\/thpt\/ux795\/[A-Za-z0-9_.-]+\.md$/;
const tokenSet=(s,k)=>[...s.matchAll(new RegExp(k+'="([^"]+)"',"g"))].map(x=>x[1]).sort();
function markdownAnswers(s){
 const lines=s.split("\n"),out=[];let block=null;
 for(const line of lines){
  if(/^    \?\?\? question "(?:Đối chiếu(?: sau khi đã tự thao tác)?|(?:Em )?[Tt]ự mở đối chiếu sau khi đã (?:thử )?làm|Tự mở đáp án sau khi đã tự làm)"$/i.test(line)){
   if(block)out.push(block.join("\n").trimEnd());
   block=[line];continue;
  }
  if(block!==null){
   if(!line.trim()||line.startsWith("        ")){block.push(line);continue}
   out.push(block.join("\n").trimEnd());block=null;
  }
 }
 if(block)out.push(block.join("\n").trimEnd());
 return out;
}
// Historical ChVII canonical First Try answers use MkDocs question disclosures
// rather than HTML answer divs. Validate exact original answer content in BOTH
// representations, with no weakening of Q15 or willingness to display keys.
// B23 owner-approved UX normalization: historical fold was "Tự mở đáp án
// sau khi đã tự làm"; Golden requires "Đối chiếu". Normalize ONLY this label
// and the exact D6 navigation wording moved to a visible tab. No answers,
// rationales, conditions, or learning content may change.
function b23CanonicalAnswers(s) {
 const normalized=s
  .replace(/^\s{4}\?\?\? question "Tự mở đáp án sau khi đã tự làm"$/gm,'    ??? question "Đối chiếu"')
  .replace(/^\s{8}<a href="#help-g10-chviii-try0[1-4]">Đến hướng dẫn tự sửa<\/a>$/gm,
   '        [B23_D6_NAVIGATION]')
  .replace(/^\s{8}\*\*Đường khắc phục:\*\* Mở tab \*Lỗi thường gặp\*, mục 4\.[1-4] để xem hướng dẫn từng bước \(không cần rời bài học\)\.$/gm,
   '        [B23_D6_NAVIGATION]')
  .replace(/^\s{8}\*\*Đường khắc phục:\*\* Mở khung \*Kiểm lỗi\* ngay dưới câu Vận dụng này để tự sửa từng bước\.$/gm,
   '        [B23_D6_NAVIGATION]');
 return firstAnswers(normalized);
}
// B26 historical source used the wording below; normalize exactly the label
// while protecting all five original answer/rationale blocks byte-for-byte.
function b26CanonicalAnswers(s){
 return firstAnswers(s.replace(
  /^    \?\?\? question "Tự đối chiếu lời giải sau khi em đã thử"$/gm,
  '    ??? question "Đối chiếu"'));
}
function firstAnswers(s){
 const html=[...s.matchAll(/<div class="thpt-r4-first-try-answer">[\s\S]*?<\/div>/g)].map(x=>x[0]);
 const md=markdownAnswers(s),count=tokenSet(s,"data-thpt-first-try-id").length;
 // Preserve standalone mutation fixtures that intentionally have no marker.
 if(!count)return [...html,...md].sort();
 const needed=count-html.length;
 assert(needed>=0,"More answer HTML than canonical First Try IDs");
 const specialized=md.filter(x=>!x.startsWith('    ??? question "Đối chiếu"\n'));
 const standard=md.filter(x=>x.startsWith('    ??? question "Đối chiếu"\n'));
 const chosen=[...specialized,...standard].slice(0,needed);
 assert.equal(chosen.length,needed,"Missing original First Try answer disclosures");
 return [...html,...chosen].sort();
}
const latex=s=>[...s.matchAll(/\\\(([\s\S]*?)\\\)|\\\[([\s\S]*?)\\\]/g)].map(m=>(m[1]||m[2]).trim().replace(/\s+/g," "));
const blob=b=>{const bytes=Buffer.isBuffer(b)?b:Buffer.from(b);return crypto.createHash("sha1").update("blob "+bytes.length+"\0").update(bytes).digest("hex")};
const sha=s=>/^[a-f0-9]{40}$/.test(s||"")&&s!=="0".repeat(40);
function originalMathPreserved(old,now){
 const counts=new Map();for(const x of latex(now))counts.set(x,(counts.get(x)||0)+1);
 for(const x of latex(old)){const n=counts.get(x)||0;if(!n)return false;counts.set(x,n-1)}
 return true;
}
// Owner-authorized, exact-scope source-locked G10 HELP placement migrations only.
// All unrelated multi-lesson production changes remain fail CLOSED.
const PLACEMENT_BATCHES=[
 {id:"G10-B19-B26-ONE-SOURCE-SEMANTIC-Q18-20261121",
  receipt:"prototypes/thpt/ux795/G10_B19_B26_ONE_SOURCE_AND_SEMANTIC_BOX_Q18_DELTA_20261121.md",
  lessons:[19,20,21,22,23,24,25,26].map(n=>"docs/thpt-preview/sgk/chuong-"+(n<=22?"vii":n<=25?"viii":"ix")+"/bai-"+n+".md")},
 {id:"G10-CHVI-B15-B18-KIEM-LOI-PLACEMENT-Q18-R01-20261120",
  receipt:"prototypes/thpt/ux795/G10_CHVI_B15_B18_KIEM_LOI_PLACEMENT_Q18_R01_20261120.md",
  lessons:[15,16,17,18].map(n=>"docs/thpt-preview/sgk/chuong-vi/bai-"+n+".md")},
 {id:"G10-B07-B14-KIEM-LOI-PLACEMENT-Q18-R01-20261120",
  receipt:"prototypes/thpt/ux795/G10_CHIV_CHV_B07_B14_KIEM_LOI_PLACEMENT_Q18_R01_20261120.md",
  lessons:[7,8,9,10,11,12,13,14].map(n=>
   "docs/thpt-preview/sgk/chuong-"+(n<=11?"iv":"v")+"/bai-"+n+".md")}
];
function scopedBatchRow(receipt,lesson){
 if(!lesson)return null;
 const batch=PLACEMENT_BATCHES.find(b=>b.lessons.includes(lesson)&&
  receipt.includes("**RECEIPT_ID:** "+b.id)&&receipt.includes("Q18_OWNER_SELF_VERIFIED_ENRICHMENT"));
 if(!batch)return null;
 const n=Number(lesson.match(/bai-(\d+)\.md$/)?.[1]);
 const rows=receipt.split("\n").filter(x=>x.startsWith("| B"+n+" | "));
 assert.equal(rows.length,1,"One signed candidate row for B"+n+" required");
 const tick=String.fromCharCode(96), re=new RegExp(tick+"([a-f0-9]{40})"+tick,"g");
 const hashes=[...rows[0].matchAll(re)].map(m=>m[1]);
 assert.equal(hashes.length,2,"Q18 batch row must carry old and new SHA");
 return {batch,n,old:hashes[0],now:hashes[1]};
}
function normalizePlacementAnswerBlocks(blocks,row){
 if(!row||row.batch.id!=="G10-B07-B14-KIEM-LOI-PLACEMENT-Q18-R01-20261120")return blocks;
 return blocks.map(x=>{
  if(row.n===11)x=x.replace(/Nếu nhầm, (?:xem cách sửa ở mục 4\.3|tự mở khung Kiểm lỗi ngay dưới câu Vận dụng này)\./g,
   "Nếu nhầm, [KIEM_LOI_NAV_B11].");
  if(row.n===12)x=x.replace(/(?:Mở mục lỗi 4\.3|Tự mở khung Kiểm lỗi ngay bên dưới), rồi chọn bộ số mới/g,
   "[KIEM_LOI_NAV_B12], rồi chọn bộ số mới");
  return x;
 });
}
function removedMathCount(before,now){
 const counts=new Map();for(const x of latex(now))counts.set(x,(counts.get(x)||0)+1);
 let missing=0;
 for(const x of latex(before)){const n=counts.get(x)||0;if(n)counts.set(x,n-1);else missing++}
 return missing;
}
function verifySource(before,now,receipt,beforeBlob,currentBlob,lesson=""){
 assert.equal(blob(before),beforeBlob,"Before SHA does not match exact Git history");
 assert.equal(blob(now),currentBlob,"Current SHA does not match actual canonical file");
 assert.notEqual(beforeBlob,currentBlob,"No real changed canonical source");
 assert(receipt.includes(beforeBlob),"Q18 receipt must declare immutable previous lesson blob");
 // Require the exact new blob in a candidate SOURCE field, not a stray prose hash.
 const fields=[...receipt.matchAll(/^\*\*(?:CANDIDATE_[A-Z0-9_]*(?:SOURCE|LESSON)[A-Z0-9_]*|R\d\d_(?:CORRECTED_)?SOURCE_BLOB):\*\* `([a-f0-9]{40})`/gm)].map(m=>m[1]);
 const row=scopedBatchRow(receipt,lesson);
 if(row){
  assert.equal(row.old,beforeBlob,"Signed batch previous source blob mismatch");
  assert.equal(row.now,currentBlob,"Signed batch current source blob mismatch");
 }
 assert(fields.includes(currentBlob)||Boolean(row),
  "Q18 receipt missing exact current SOURCE candidate SHA");
 // Exact signed R02 after the global28 G11 B01 R01 reached owner P1.
 // Neither the independent assessment nor six original answers may change.
 if(lesson==="docs/thpt-preview/sgk/lop-11/chuong-i/bai-1.md"&&
    receipt.includes("G11-B01-OWNER-P2-GOLDEN-VISUAL-GENERAL-D6-R02-20261121")){
  assert.equal(beforeBlob,"2d7cff18f4e46375f06a672a3742a2a43b5f2db5",
   "G11 B01 R02 must descend from exact R01 published source");
  assert.equal(currentBlob,"e5b140bffd46d829f94d793c45bd987c64838723",
   "G11 B01 R02 source must be exact Q18 candidate");
  for(const [key,expected] of [["R02_PREVIOUS_SOURCE_BLOB",beforeBlob],
   ["R02_CORRECTED_SOURCE_BLOB",currentBlob]]){
   const mark="**"+key+":** "+String.fromCharCode(96)+expected+String.fromCharCode(96);
   assert(receipt.includes(mark),"Signed R02 receipt mismatch: "+key);
  }
  for(const key of ["DELTA_A_UI","DELTA_C_ACADEMIC_MATERIAL",
   "Q18_OWNER_SELF_VERIFIED_ENRICHMENT",
   "SGK-G11-B01-P2-GOLDEN-CARD-AND-GENERAL-D6-20261121",
   "OWNER_P2_RECHECK_PENDING"])
   assert(receipt.includes(key),"R02 Q18 role/scope marker missing "+key);
  for(const key of ["data-thpt-first-try-id","data-thpt-help-id","data-thpt-fig-id"])
   assert.deepEqual(tokenSet(now,key),tokenSet(before,key),
    "R02 changed source-locked First Try/HELP/figure identity "+key);
  assert.deepEqual(firstAnswers(now),firstAnswers(before),
   "R02 must keep the six original closed answers and reasoning byte-identical");
  assert.equal(firstAnswers(now).length,6,"Six original closed First Try answers required");
  assert.equal(latex(before).length,203,"R01 historical math count changed");
  assert.equal(latex(now).length,203,"R02 math count must remain 203");
  assert(originalMathPreserved(before,now)&&originalMathPreserved(now,before),
   "R02 must preserve every original MathJax expression as a multiset");
  const section=(s,a,b)=>s.split(a)[1]?.split(b)[0];
  for(const [start,end] of [
   ['=== "Khám phá kiến thức"','=== "Kiến thức SGK"'],
   ['=== "Kiến thức SGK"','=== "Ví dụ"']])
   assert.equal(section(now,start,end),section(before,start,end),
    "R02 cannot rewrite S1 academic outcomes "+start);
  const oldExamples=section(before,'=== "Ví dụ"','=== "Lỗi thường gặp"');
  const newExamples=section(now,'=== "Ví dụ"','=== "Lỗi thường gặp"');
  assert.equal(newExamples.replaceAll('class="thpt-g10-example-solution"',
   'class="thpt-g11-example-solution"'),oldExamples,
   "Six example prompts/analysis/solutions/checks must be identical except CSS class");
  assert.equal((now.match(/class="thpt-g10-example-solution"/g)||[]).length,6,
   "R02 must use approved G10 neutral solution class six times");
  assert(!now.includes(".thpt-g11-example-solution")&&
   !now.includes('class="thpt-g11-example-solution"'),
   "R02 cannot keep G11-only dark 4px left-rule example CSS");
  assert(now.includes('article.classList.add("thpt-g10-knowledge-ap1","thpt-g10-chiv-golden");'),
   "R02 must mount both proven Golden classes");
  assert.equal((now.match(/^    \?\?\? question "Đối chiếu"$/gm)||[]).length,6);
  assert.equal((now.match(/^    \?\?\? tip "Kiểm lỗi"$/gm)||[]).length,8);
  const errors=now.split('=== "Lỗi thường gặp"')[1];
  assert(errors&&errors.includes("Những lỗi gắn với")&&
   (errors.match(/<strong>Nhóm lỗi tổng quát:<\/strong>/g)||[]).length===2,
   "R02 last tab needs two genuinely general HELP categories");
  for(const phrase of ["số đo góc quay, vị trí tia cuối và độ dài",
   "trong nhiều dạng bài","điều kiện, dấu và phép đối xứng"])
   assert(errors.includes(phrase),"General HELP not multi-outcome "+phrase);
  assert.equal((now.match(/class="thpt-r4-footnote"/g)||[]).length,1);
  assert.equal((now.match(/THPT_G11_B01_UNIT_CIRCLE_5PI6_D5_R01.svg/g)||[]).length,2);
  assert(!/data-(?:thpt-readiness|mastery-credit|mastery-write|thpt-final)/i.test(now));
  const css=fs.readFileSync(path.join(root,
   "docs/assets/stylesheets/thpt-g10-knowledge-hybrid-l1-v1.css"));
  assert.equal(blob(css),"14001f525b1825557493f439a1f0555e9614185f",
   "R02 must reuse exactly the existing unchanged owner-approved G10 Golden CSS");
  console.log("SCOPED_G11_B01_R02_Q18_PASS: 203 math, 6 original answers, 8 HELP, approved computed Golden styling");
  return;
 }
 // Global 28/79 is G11 B01 (G10 has only 27 SGK lessons). It is an
 // explicit DELTA_C full Knowledge rewrite; old lesson has no canonical
 // First Try IDs. Never generalize this exception to other G11 lessons.
 if(lesson==="docs/thpt-preview/sgk/lop-11/chuong-i/bai-1.md"&&
    receipt.includes("G11-B01-GLOBAL28-S1-GOLDEN-Q18-R01-20261121")){
  assert.equal(beforeBlob,"9605eaf510f9f873751e20bef29f4aac848609a3",
   "G11 B01 rewrite must start from historical published source");
  assert.equal(currentBlob,"2d7cff18f4e46375f06a672a3742a2a43b5f2db5",
   "G11 B01 cannot bypass the exact signed new source");
  assert(receipt.includes("GLOBAL_SGK_ORDER:** 28/79")&&
   receipt.includes("DELTA_C_ACADEMIC_MATERIAL")&&
   receipt.includes("Q18_OWNER_SELF_VERIFIED_ENRICHMENT")&&
   receipt.includes("P0=0 P1=0"),"G11 B01 source/outcome review receipt missing");
  assert.equal(tokenSet(before,"data-thpt-first-try-id").length,0,
   "G11 B01 old source does not contain canonical practice IDs");
  assert.deepEqual(tokenSet(before,"data-thpt-help-id"),
   ["HELP-G11-B01-01","HELP-G11-B01-02"],
   "G11 B01 original independent remediation HELP IDs changed");
  assert.deepEqual([...now.matchAll(/^=== "([^"]+)"$/gm)].map(x=>x[1]),
   ["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],
   "G11 B01 must contain 4 exact Golden tabs");
  assert.deepEqual(tokenSet(now,"data-thpt-first-try-id"),
   [1,2,3,4,5,6].map(n=>"THPT-G11-CHI-TRY0"+n),
   "G11 B01 six unscored canonical First Try identities incomplete");
  assert.deepEqual(tokenSet(now,"data-thpt-help-id"),
   [...[1,2,3,4,5,6].map(n=>"HELP-G11-CHI-TRY0"+n),
    "HELP-G11-B01-01","HELP-G11-B01-02"].sort(),
   "G11 B01 must retain two old D6 identities and six new paired HELP");
  assert.equal((now.match(/^    \?\?\? question "Đối chiếu"$/gm)||[]).length,6,
   "G11 B01 six answers must remain closed until voluntarily opened");
  assert.equal((now.match(/^    \?\?\? tip "Kiểm lỗi"$/gm)||[]).length,8,
   "G11 B01 eight D6 panels must have owner-approved short labels");
  assert.equal((now.match(/<p><strong>Lỗi cần kiểm:<\/strong>/g)||[]).length,8,
   "G11 B01 error names belong inside D6 panels");
  assert.equal((now.match(/class="thpt-g11-example-solution"/g)||[]).length,6,
   "G11 B01 preserve six solved examples with reasoning");
  const know=now.split('=== "Kiến thức SGK"')[1]?.split('=== "Ví dụ"')[0];
  assert(know,"G11 B01 Knowledge SGK tab missing");
  for(const term of ["2.1. Góc lượng giác",
   "2.2. Đơn vị đo góc và độ dài cung tròn",
   "2.3. Giá trị lượng giác của góc lượng giác",
   "2.4. Quan hệ giữa các giá trị lượng giác",
   "\\tan\\alpha=\\dfrac{\\sin\\alpha}{\\cos\\alpha}",
   "\\cot\\alpha=\\dfrac{\\cos\\alpha}{\\sin\\alpha}",
   "\\sin^2\\alpha+\\cos^2\\alpha=1",
   "\\pi/2+k\\pi", "\\alpha+k\\pi"])
   assert(know.includes(term),"G11 B01 source missing S1 concept/condition "+term);
  assert.equal((know.match(/class="thpt-r4-knowledge-conclusion thpt-r4-concept-card"/g)||[]).length,3,
   "G11 B01 must present three actual SGK concepts in green cards");
  assert.equal((know.match(/class="thpt-r4-knowledge-conclusion thpt-r4-rule-card"/g)||[]).length,5,
   "G11 B01 must present five correct SGK properties/conditions");
  assert.equal((now.match(/THPT_G11_B01_UNIT_CIRCLE_5PI6_D5_R01.svg/g)||[]).length,2,
   "G11 B01 must reuse one SVG in both Discovery and Knowledge");
  assert.equal((now.match(/class="thpt-r4-footnote"/g)||[]).length,1,
   "G11 B01 must have one final S1 source footnote");
  assert(!now.includes("Mỗi ví dụ có")&&
   !now.includes("Không phải một định nghĩa mới")&&
   !/data-(?:thpt-readiness|mastery-credit|mastery-write|thpt-final)/i.test(now),
   "G11 B01 inappropriate meta / assessment leaking");
  const originalIds=tokenSet(before,"data-thpt-fig-id");
  assert.deepEqual(tokenSet(now,"data-thpt-fig-id"),originalIds,
   "G11 B01 protected original figure metadata changed");
  assert.equal(latex(before).length,38,"Old G11 B01 S1 source math count changed");
  assert.equal(latex(now).length,203,"G11 B01 full revised source mathematical notation changed");
  assert.equal(removedMathCount(before,now),37,
   "G11 B01 signed academic rewrite unexpectedly removed extra math tokens");
  const image="docs/assets/images/thpt/THPT_G11_B01_UNIT_CIRCLE_5PI6_D5_R01.svg";
  const figure=fs.readFileSync(path.join(root,image));
  assert.equal(blob(figure),"a75d70c2dbbedce6934f0f4521c159dd9045844e",
   "G11 B01 existing SVG must stay immutable");
  console.log("SCOPED_G11_B01_SOURCE_Q18_PASS: exact two Git blobs, S1, 6 unscored IDs, 8 HELP, 203 math");
  return;
 }
 for(const id of ["data-thpt-first-try-id","data-thpt-help-id","data-thpt-fig-id"]){
  assert.deepEqual(tokenSet(now,id),tokenSet(before,id),"Q15/source identity changed: "+id);
 }
 if(lesson==="docs/thpt-preview/sgk/chuong-ix/bai-26.md"&&
    receipt.includes("G10-CHIX-B26-S1-GOLDEN-ENRICHMENT-Q18-R01-20261121")){
  const historic=b26CanonicalAnswers(before),candidate=b26CanonicalAnswers(now);
  assert.equal(historic.length,5,"B26 history must include exactly five closed answer blocks");
  assert.deepEqual(candidate,historic,
    "B26 approved answers/rationales must be byte-identical after exact label normalization");
 } else if(lesson==="docs/thpt-preview/sgk/chuong-ix/bai-27.md"&&
    receipt.includes("G10-CHIX-B27-S1-GOLDEN-ENRICHMENT-Q18-R01-20261121")){
  // B27 original five golden answers and their complete rationales are an
  // immutable source bank, even though the learner-facing label is shorter.
  const historical=b26CanonicalAnswers(before),candidate=b26CanonicalAnswers(now);
  assert.equal(historical.length,5,"B27 baseline has five closed answer disclosures");
  assert.deepEqual(candidate,historical,
    "B27 five original answer/rationale disclosures must be byte-identical after label normalization");
 } else if(receipt.includes("G10-CHVIII-B23-G0G2-Q18") ||
    receipt.includes("G10-CHVIII-B23-VAN-DUNG-KIEM-LOI-R04-20261120")) {
  const original=b23CanonicalAnswers(before),candidate=b23CanonicalAnswers(now);
  assert.equal(original.length,4,"B23 historical four answer disclosures must be preserved");
  assert.deepEqual(candidate,original,"B23 approved disclosure label and D6 navigation may move, but all four original answer/rationale/remediation texts must match exactly");
 } else {
  assert.deepEqual(normalizePlacementAnswerBlocks(firstAnswers(now),row),
   normalizePlacementAnswerBlocks(firstAnswers(before),row),
   "Original canonical First Try answer (HTML or Markdown) changed");
 }
 assert.deepEqual([...now.matchAll(/^=== "([^"]+)"$/gm)].map(m=>m[1]),
  ["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],
  "Golden four tabs changed");
 assert.equal(tokenSet(now,"data-thpt-first-try-id").length,firstAnswers(now).length,
  "First Try question/closed answer cardinality mismatch");
 if(!originalMathPreserved(before,now)){
  if(row&&row.batch.id==="G10-B19-B26-ONE-SOURCE-SEMANTIC-Q18-20261121"&&row.n===26){
   // One old spelling of the probability-bound TeX is subsumed by an
   // equivalent displayed property. Signed exact blob pair, no quota bypass.
   assert(receipt.includes("B26_SOURCE_FORMULA_REPHRASE")&&
    receipt.includes("Q18_OWNER_SELF_VERIFIED_ENRICHMENT")&&
    receipt.includes("DELTA_C_ACADEMIC_MATERIAL"),
    "B26 one-formula rephrase needs signed affected-scope Q18 evidence");
   assert.equal(removedMathCount(before,now),1,
    "B26 owner corrective delta must remove exactly one legacy TeX occurrence");
   for(const token of ["0\\le n(A)\\le n(\\Omega)",
    "0\\le P(A)\\le1","P(A)=\\dfrac{n(A)}{n(\\Omega)}",
    "Nguyên lí xác suất bé (SGK)."])
    assert(now.includes(token),"B26 correct formula/principle missing: "+token);
  }else if(lesson==="docs/thpt-preview/sgk/chuong-ix/bai-26.md"&&
     receipt.includes("G10-CHIX-B26-S1-GOLDEN-ENRICHMENT-Q18-R01-20261121")){
   // This exact old-to-new SHA pair has a signed mathematical/content delta.
   // The 13 legacy TeX occurrences were reformatted/restructured or subsumed
   // into the new teaching flow; NOT a general math-removal exemption.
   assert(receipt.includes("B26_AFFECTED_MATH_TOKEN_MIGRATION=13")&&
    receipt.includes("Q18_OWNER_SELF_VERIFIED_ENRICHMENT")&&
    receipt.includes("DELTA_C_ACADEMIC_MATERIAL"),
    "B26 source-math replacement requires signed exact-scope Q18 evidence");
   assert.equal(removedMathCount(before,now),13,
    "B26 must retain all original math except 13 explicitly audited old tokens");
   for(const token of ["P(A)=\\dfrac{n(A)}{n(\\Omega)}",
    "\\overline A=\\Omega\\setminus A","P(\\overline A)=1-P(A)",
    "n(\\Omega)>0","2.3. Nguyên lí xác suất bé"]){
    assert(now.includes(token),"B26 math migration lacks correct new equivalent "+token);
   }
  }else if(lesson==="docs/thpt-preview/sgk/chuong-ix/bai-27.md"&&
   receipt.includes("G10-CHIX-B27-S1-GOLDEN-ENRICHMENT-Q18-R01-20261121")){
   // Explicitly self-audited pedagogical rewrite of three SGK methods.
   // This checks a locked old/new SHA pair and fifteen moved/rephrased TeX
   // occurrences, not a general permission to discard mathematics.
   assert(receipt.includes("B27_AFFECTED_MATH_TOKEN_MIGRATION=15")&&
    receipt.includes("Q18_OWNER_SELF_VERIFIED_ENRICHMENT")&&
    receipt.includes("DELTA_C_ACADEMIC_MATERIAL"),
    "B27 changed source maths requires exact-scope Q18 evidence");
   assert.equal(removedMathCount(before,now),15,
    "B27 expected exactly 15 historical TeX tokens restructured");
   for(const term of ["\\binom nk","\\binom{45}{6}","P(\\overline E)=1-P(E)",
    "\\dfrac{25}{66}","P_5=\\dfrac{234}{\\binom{45}{6}}",
    "THPT_G10_B27_WITHOUT_REPLACEMENT_TREE.svg"])
    assert(now.includes(term),"B27 replacement math S1 outcome missing: "+term);
  } else {
   // The historical three narrowly owner-verified HELP context repairs:
   // B10 mismatched coordinates, B11 stale resultant-force data, B12 cube-root 7.
   const expected={10:13,11:6,12:7};
   assert(row&&row.batch.id==="G10-B07-B14-KIEM-LOI-PLACEMENT-Q18-R01-20261120"&&
    Object.hasOwn(expected,row.n)&&receipt.includes("Ba chỗ sửa ngữ cảnh"),
    "Removed source math without signed affected-scope self-verification");
   assert.equal(removedMathCount(before,now),expected[row.n],
    "Exact contextual correction removed unexpected mathematical expressions");
  }
 }
 assert(!/data-(?:thpt-readiness|mastery-credit|mastery-write|thpt-final)/i.test(now),
  "Q16: private Readiness/Final Submit/Mastery leaked into public Knowledge");
 assert(receipt.includes("Q18")&&receipt.includes("DELTA_"),"Q18 receipt lacks scope/delta evidence");
}
function selfTest(){
 assert(LESSON.test("docs/thpt-preview/sgk/chuong-vi/bai-17.md"));
 assert(!LESSON.test("docs/assets/javascripts/thpt-r4-preview.js"));
 assert(!LESSON.test("docs/thpt-preview/sgk/chuong-vi/tu-kiem-tra-chuong.md"));
 const old='=== "Khám phá kiến thức"\n=== "Kiến thức SGK"\n=== "Ví dụ"\n=== "Lỗi thường gặp"\n'+
  '<span data-thpt-first-try-id="A"></span><span data-thpt-help-id="B"></span>'+
  '<div class="thpt-r4-first-try-answer">OK</div>\\(x^2\\)';
 const now=old+'\nThêm lời dẫn \(x+1\)';
 const receipt="**CANDIDATE_B17_SOURCE_BLOB:** `"+blob(now)+"`\n**BASELINE_B17_SOURCE_BLOB:** `"+blob(old)+"`\nQ18 DELTA_C";
 verifySource(old,now,receipt,blob(old),blob(now));
 assert.throws(()=>verifySource(old,now,receipt.replace(blob(now),"0".repeat(40)),blob(old),blob(now)));
 assert.throws(()=>verifySource(old,now.replace('data-thpt-first-try-id="A"','data-thpt-first-try-id="X"'),receipt,blob(old),blob(now)));
 assert(originalMathPreserved(old,now)&&!originalMathPreserved(old,now.replace("x^2","NO_MATH")));
 const mdOld='=== "Khám phá kiến thức"\n=== "Kiến thức SGK"\n=== "Ví dụ"\n=== "Lỗi thường gặp"\n'+
  '<span data-thpt-first-try-id="B19Q"></span><span data-thpt-help-id="B19H"></span>\n'+
  '    ??? question "Đối chiếu"\n\n        **Đáp án:** nghiệm đúng.\n\n        **Lý do:** giải thích từ giả thiết.\n\n'+
  '\\\\(a^2\\\\)';
 const mdNew=mdOld+"\nViết lại mạch giải thích trước Vận dụng.";
 const mdReceipt="**CANDIDATE_B19_SOURCE_BLOB:** `"+blob(mdNew)+"`\n**PREVIOUS_B19_SOURCE_BLOB:** `"+blob(mdOld)+"`\nQ18 DELTA_C";
 assert.equal(firstAnswers(mdOld).length,1,"MkDocs closed answer must count as one");
 verifySource(mdOld,mdNew,mdReceipt,blob(mdOld),blob(mdNew));
 assert.throws(()=>verifySource(mdOld,mdNew.replace("nghiệm đúng","nghiệm sai"),mdReceipt,blob(mdOld),blob(mdNew)),"Mutation to exact source must fail");
 assert.throws(()=>verifySource(mdOld,mdNew.replace("**Đáp án:** nghiệm đúng.","**Đáp án:** nghiệm sai."),
  "**CANDIDATE_B19_SOURCE_BLOB:** `"+blob(mdNew.replace("**Đáp án:** nghiệm đúng.","**Đáp án:** nghiệm sai."))+"`\n"+
  "**PREVIOUS_B19_SOURCE_BLOB:** `"+blob(mdOld)+"`\nQ18 DELTA_C",
  blob(mdOld),blob(mdNew.replace("**Đáp án:** nghiệm đúng.","**Đáp án:** nghiệm sai."))),
  "Signed but changed historical answer must fail Q15");
 // B23's approved disclosure UX change is not an answer edit.
 const b23Old='    ??? question "Tự mở đáp án sau khi đã tự làm"\n\n'+
  '        **Đáp án:** 8 lựa chọn.\n\n        **Lập luận:** 2+6=8.\n\n'+
  '        **Nếu chưa đúng:** đọc lại.\n\n'+
  '        <a href="#help-g10-chviii-try01">Đến hướng dẫn tự sửa</a>';
 const b23New=b23Old.replace('Tự mở đáp án sau khi đã tự làm','Đối chiếu')
  .replace('<a href="#help-g10-chviii-try01">Đến hướng dẫn tự sửa</a>',
   '**Đường khắc phục:** Mở tab *Lỗi thường gặp*, mục 4.1 để xem hướng dẫn từng bước (không cần rời bài học).');
 assert.deepEqual(b23CanonicalAnswers(b23New),b23CanonicalAnswers(b23Old),
  "Only exact owner-approved B23 label/navigation edits are source-equivalent");
 const relocatedB23=b23New.replace(
  'Mở tab *Lỗi thường gặp*, mục 4.1 để xem hướng dẫn từng bước (không cần rời bài học).',
  'Mở khung *Kiểm lỗi* ngay dưới câu Vận dụng này để tự sửa từng bước.');
 assert.deepEqual(b23CanonicalAnswers(relocatedB23),b23CanonicalAnswers(b23Old),
  'Exact B23 HELP placement navigation may change, but original answer/rationale stays immutable');
 assert.notDeepEqual(b23CanonicalAnswers(relocatedB23.replace('8 lựa chọn','9 lựa chọn')),
  b23CanonicalAnswers(b23Old),'B23 relocation must not mask changed answer');
 assert.notDeepEqual(b23CanonicalAnswers(relocatedB23.replace('tự sửa từng bước','xem đáp án ngay')),
  b23CanonicalAnswers(b23Old),'B23 unrelated navigation rewrite must fail closed');
 assert.notDeepEqual(b23CanonicalAnswers(b23New.replace('8 lựa chọn','9 lựa chọn')),
  b23CanonicalAnswers(b23Old),"Changing the answer must still fail");
 assert.notDeepEqual(b23CanonicalAnswers(b23New.replace('2+6=8','2+6=9')),
  b23CanonicalAnswers(b23Old),"Changing the explanation must still fail");
 console.log("PASS scoped production proof fixtures: historical blob, new receipt, Q15/16, no old math loss; negatives fail closed");
}

// Owner #1039: first Knowledge-only wave, with the immutable snapshot of the
// single AUTHORING handoff (same canonical path, not a second receipt).
// These three lessons previously had no scored First Try identities.
// Authoring rewrote the unscored Knowledge/HELP explanations; no bank, Core,
// practice, chapter assessment, runtime or shared CSS may enter this batch.
const G11_W1_HANDOFF="prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md";
const G11_W1_HANDOFF_SHA="0339ff19d39210df10d2b4296460c8b758b51d02";
const G11_W1_ROWS=[
 [2,1021,"b6b88d8fdd67a902dc55d9d46b4c0baab551dd95","15c4de731bfbaf5b8a141a54d9b5493e7895c752","d628a3af98495c5e7ade5d4fa19d7ad4107b7ff6"],
 [3,1023,"a7288efd8e2287085fb77210bc0a5e4d8521d4f0","a8a3592c661b06fae94aad386b991f23a6718957","9177a10ade8788712c6b9fbf39789822df2a417a"],
 [4,1025,"a505489e888d61850ef20a426447b981a4d3e869","71271b2035bfe289ac3ccf6f384d8f41ec55aefb","0714c5b72389d29dbc8993c2ce9828fc98cf7a92"]
];
const G11_W1_LESSONS=G11_W1_ROWS.map(r=>"docs/thpt-preview/sgk/lop-11/chuong-i/bai-"+r[0]+".md");
const G11_W1_ASSETS=[["docs/assets/images/thpt/G11_B02_UNIT_CIRCLE_AUTHORING_RESET_20261122.svg","02bb742a7e44b9219e7bd44fa9e306468ac6cc9c"],["docs/assets/images/thpt/G11_B04_COS_MINUS_HALF_AUTHORING_RESET_20261123.svg","34e5b47e1e549c6d24d00354cf1d7bd730561839"],["docs/assets/images/thpt/G11_B04_SIN_HALF_AUTHORING_RESET_20261123.svg","86530ed774254494b010d60a27fed660f9e6f745"]];
const G11_W1_PATHS=[".github/workflows/sgk-golden-first-paint-qa.yml","scripts/test-thpt-academic-presentation-browser.cjs","scripts/test-thpt-sgk-lesson-nav-p2-browser.cjs","scripts/test-sgk-golden-first-paint.cjs","hooks/sgk_golden_first_paint.py","docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md","docs/thpt-preview/sgk/lop-11/chuong-i/bai-3.md","docs/thpt-preview/sgk/lop-11/chuong-i/bai-4.md","docs/assets/images/thpt/G11_B02_UNIT_CIRCLE_AUTHORING_RESET_20261122.svg","docs/assets/images/thpt/G11_B04_COS_MINUS_HALF_AUTHORING_RESET_20261123.svg","docs/assets/images/thpt/G11_B04_SIN_HALF_AUTHORING_RESET_20261123.svg","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-thpt-release-impact.cjs",".github/workflows/thpt-scoped-release-qa.yml","scripts/test-thpt-scoped-lesson-browser.cjs"];
function verifyG11W1(previous,current,changed,expected){
 assert.deepEqual(changed.slice().sort(),G11_W1_PATHS.slice().sort(),"#1039 W1 exact diff only");
 assert.deepEqual(expected.slice().sort(),G11_W1_LESSONS.slice().sort(),"#1039 W1 changed lessons mismatch");
 const git=(args)=>cp.execFileSync("git",args,{cwd:root});
 assert.equal(blob(fs.readFileSync(path.join(root,"hooks/sgk_golden_first_paint.py"))),"80194f462a0a55410a828e03dc50b5307402fb09","W1 verified exact route-scoped Golden adapter");
 const receipt=fs.readFileSync(path.join(root,G11_W1_HANDOFF));
 assert.equal(blob(receipt),G11_W1_HANDOFF_SHA,"Single #1039 handoff snapshot changed");
 const r=receipt.toString("utf8");
 assert(r.includes("32/32 CONTENT_READY")&&r.includes("Q18_VERIFICATION_MODE=AUTHOR_SELF_VERIFIED")&&r.includes("RELEASE_SCOPE=SGK_KNOWLEDGE_ENRICHMENT_ONLY"));
 for(const [n,pr,commit,oldSha,newSha] of G11_W1_ROWS){
  const file="docs/thpt-preview/sgk/lop-11/chuong-i/bai-"+n+".md";
  const lines=r.split("\n").filter(l=>l.startsWith("| B0"+n+" [#"+pr+"]"));
  assert.equal(lines.length,1,"Missing unique signed handoff row B0"+n);
  for(const value of [commit,oldSha,newSha])assert(lines[0].includes(value),"Handoff row mismatch B0"+n);
  const before=git(["show",previous+":"+file]),now=fs.readFileSync(path.join(root,file));
  assert.equal(blob(before),oldSha,"Published baseline mismatch "+file);
  assert.equal(blob(now),newSha,"Candidate learner blob mismatch "+file);
  assert.equal(blob(git(["show",current+":"+file])),newSha,"Exact commit candidate mismatch "+file);
  const s=now.toString("utf8"),old=before.toString("utf8");
  assert.deepEqual([...s.matchAll(/^=== "([^"]+)"$/gm)].map(m=>m[1]),["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"]);
  assert.deepEqual(tokenSet(s,"data-thpt-first-try-id"),tokenSet(old,"data-thpt-first-try-id"),"Scored/identified First Try changed");
  assert(!/data-(?:thpt-readiness|mastery-credit|mastery-write|thpt-final|g11-chapter-selfcheck)/i.test(s),"Assessment mount in Knowledge");
  assert(s.includes('href="../luyen-tap/"')&&s.includes('href="../tu-kiem-tra-chuong/"'),"Protected navigation missing");
  // Old HELP IDs belonged to the overwritten Knowledge prose, not a bank;
  // preserve independent chapter files and all other paths by exact diff.
  assert((s.match(/^\s+\?\?\? question "Đối chiếu"$/gm)||[]).length>0,"Voluntary comparison absent");
  console.log("SCOPED_G11_W1_SOURCE_PASS "+JSON.stringify({lesson:file,baseline:oldSha,candidate:newSha,authoring:commit,pr,receipt:G11_W1_HANDOFF_SHA,mode:"AUTHOR_SELF_VERIFIED",status:"TECHNICAL_SOURCE_ONLY"}));
 }
 for(const [asset,sha] of G11_W1_ASSETS){
  assert.equal(blob(fs.readFileSync(path.join(root,asset))),sha,"Signed SVG changed "+asset);
  assert.equal(blob(git(["show",current+":"+asset])),sha,"Commit SVG mismatch "+asset);
 }
 console.log("PASS #1039 W1 exact 3 learner + 3 SVG, source and assessment boundaries; no Academic/PED verdict");
}

const G11_W1_TAB4_HOTFIX_FILES=["hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-thpt-scoped-lesson-browser.cjs"];
function verifyW1Tab4Hotfix(previous,current,changed,expected){
 assert.deepEqual(changed.slice().sort(),G11_W1_TAB4_HOTFIX_FILES.slice().sort(),"REL006 exact diff");
 assert.equal(previous,"f74465e7f2a6fda091c551f800f66ff172eed617","REL006 must be based on published W1");
 assert.deepEqual(expected.slice().sort(),G11_W1_LESSONS.slice().sort());
 const git=(args)=>cp.execFileSync("git",args,{cwd:root});
 for(const [n,pr,commit,oldSha,newSha] of G11_W1_ROWS){
  const file="docs/thpt-preview/sgk/lop-11/chuong-i/bai-"+n+".md";
  assert.equal(blob(git(["show",previous+":"+file])),newSha);
  assert.equal(blob(git(["show",current+":"+file])),newSha);
 }
 for(const [file,sha] of G11_W1_ASSETS)assert.equal(blob(git(["show",current+":"+file])),sha);
 assert.equal(blob(git(["show",current+":"+G11_W1_HANDOFF])),G11_W1_HANDOFF_SHA);
 const h="hooks/sgk_golden_first_paint.py";
 const old=git(["show",previous+":"+h]).toString("utf8"),now=git(["show",current+":"+h]).toString("utf8");
 const expectedHook=old.replace("def on_post_page(output, page, config):","\n# SGK-REL-006: transform only the fourth tab of the three exact W1 pages.\n# Preserve original h3 anchor ID and the complete rendered content bytes.\n_W1_MISTAKE_COUNTS = {2: 5, 3: 6, 4: 6}\ndef _w1_mistake_disclosures(html: str, number: int) -> str:\n    heading = '<h2 class=\"thpt-g10-section-heading\">' + _HEADINGS[3] + '</h2>'\n    if html.count(heading) != 1:\n        raise RuntimeError(\"W1 tab4 heading changed\")\n    start = html.index(heading) + len(heading)\n    foot = re.search(r'<p>\\s*<p class=\"thpt-r4-footnote\">|<p class=\"thpt-r4-footnote\">', html[start:])\n    if foot is None:\n        raise RuntimeError(\"W1 tab4 source note missing\")\n    end = start + foot.start()\n    body = html[start:end]\n    pattern = re.compile(r'<h3 id=\"([^\"]+)\">(4\\.\\d+\\.[^<]+)</h3>\\s*((?:<p>[\\s\\S]*?</p>\\s*){3})')\n    matches = list(pattern.finditer(body))\n    if len(matches) != _W1_MISTAKE_COUNTS[number] or pattern.sub(\"\", body).strip():\n        raise RuntimeError(\"W1 tab4 unexpected source shape: B\" + str(number))\n    for i, item in enumerate(matches, 1):\n        if not item[2].startswith(f\"4.{i}. \") or re.findall(r'<p><strong>([^<]+)</strong>', item[3])[:3] != [\"Dấu hiệu:\", \"Vì sao sai:\", \"Cách sửa:\"]:\n            raise RuntimeError(\"W1 tab4 missing original recovery labels\")\n    def disclosure(item):\n        return '<details class=\"tip\" id=\"' + item[1] + '\">\\n<summary>' + item[2] + '</summary>\\n' + item[3] + '</details>\\n'\n    return html[:start] + '\\n<p>Mở từng mục để xem dấu hiệu, vì sao sai và cách sửa.</p>\\n' + pattern.sub(disclosure, body) + html[end:]\n\n"+"def on_post_page(output, page, config):").replace("        # #1039 W1: only the three exact approved Golden Knowledge routes.","        rendered = _w1_mistake_disclosures(rendered, int(uri.rsplit('-', 1)[1][:-3]))\n        # #1039 W1: only the three exact approved Golden Knowledge routes.");
 assert.equal(now,expectedHook,"REL006 no changes outside the exact W1 tab4 hook");
 console.log("PASS SGK_REL_006: signed learner/asset/receipt blobs unchanged; exact tab4 render delta only");
}

// #1039 W1 review delta: exact path and blob locks, preserve published tab4 and all frozen sources.
const G11_W1_REVIEW_DELTA_FILES=[".github/workflows/sgk-golden-first-paint-qa.yml","docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md","docs/thpt-preview/sgk/lop-11/chuong-i/bai-3.md","docs/thpt-preview/sgk/lop-11/chuong-i/bai-4.md","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs"];
const G11_W1_REVIEW_ROWS=[[2,"d628a3af98495c5e7ade5d4fa19d7ad4107b7ff6","573e2d8fc84e89112c6b061b39e6a53465659472"],[3,"9177a10ade8788712c6b9fbf39789822df2a417a","6a88cfa1fc03f8ed6f642fc448bea286dfd9f55c"],[4,"0714c5b72389d29dbc8993c2ce9828fc98cf7a92","515ad705f86b2448b262026f2f2fb8d3ec2e5bdc"]];
function verifyW1ReviewDelta(previous,current,changed,expected){
 assert.deepEqual(changed.slice().sort(),G11_W1_REVIEW_DELTA_FILES.slice().sort(),"W1 review delta exact diff");
 assert.equal(previous,"a8f2d63e52335c1c686a567334b4f26d43bac0d3","W1 review delta must be based on owner-accepted publication");
 assert.deepEqual(expected.slice().sort(),G11_W1_LESSONS.slice().sort());
 const git=(args)=>cp.execFileSync("git",args,{cwd:root});
 const read=(ref,file)=>git(["show",ref+":"+file]);
 const handoff=read(current,G11_W1_HANDOFF);
 assert.equal(blob(read(previous,G11_W1_HANDOFF)),G11_W1_HANDOFF_SHA);
 assert.equal(blob(handoff),"f3ecefca29faab6939e4a3b3ee9678b2a8db76b4","W1 delta handoff blob");
 assert(handoff.toString("utf8").includes("DELTA_C_ACADEMIC_MATERIAL"));
 const prefix=s=>s.slice(0,s.indexOf('=== "Khám phá kiến thức"'));
 const suffix=s=>s.slice(s.indexOf('=== "Ví dụ"'));
 const structure=s=>{
  const lines=s.split("\n").map(line=>line.trim());
  return {
   tabs:lines.filter(line=>line.startsWith('=== "')),
   headings:lines.filter(line=>line.startsWith("### ")),
   disclosures:lines.filter(line=>line.startsWith('??? question "')||line.startsWith('??? tip "')),
   assets:s.match(/src="[^"]+"/g)||[],
   identities:s.match(/data-[\w-]+="[^"]+"/g)||[]
  };
 };
 const b1="docs/thpt-preview/sgk/lop-11/chuong-i/bai-1.md";
 assert.equal(blob(read(previous,b1)),"0603fbb2b61374fcd49eff3c119197cff3fa77e4");
 assert.equal(blob(read(current,b1)),blob(read(previous,b1)));
 for(const [n,oldSha,newSha] of G11_W1_REVIEW_ROWS){
  const file="docs/thpt-preview/sgk/lop-11/chuong-i/bai-"+n+".md";
  const before=read(previous,file),now=read(current,file);
  assert.equal(blob(before),oldSha);assert.equal(blob(now),newSha);
  assert.equal(blob(fs.readFileSync(path.join(root,file))),newSha);
  assert(handoff.toString("utf8").includes(oldSha)&&handoff.toString("utf8").includes(newSha));
  const a=before.toString("utf8"),b=now.toString("utf8");
  assert(a.includes('=== "Khám phá kiến thức"')&&a.includes('=== "Ví dụ"'));
  assert.equal(prefix(a),prefix(b));assert.equal(suffix(a),suffix(b),"Frozen example/mistake tabs");
  const oldStructure=structure(a),newStructure=structure(b);
  assert.deepEqual(oldStructure.tabs,['=== "Khám phá kiến thức"','=== "Kiến thức SGK"','=== "Ví dụ"','=== "Lỗi thường gặp"']);
  assert(oldStructure.headings.length>0&&oldStructure.disclosures.length>0&&oldStructure.assets.length>0);
  for(const key of Object.keys(oldStructure))assert.deepEqual(oldStructure[key],newStructure[key],"W1 "+key+" changed "+file);
  assert(!/data-(?:thpt-readiness|mastery-credit|mastery-write|thpt-final|g11-chapter-selfcheck)/i.test(b));
  console.log("SCOPED_G11_W1_REVIEW_DELTA_SOURCE_PASS "+file+" "+newSha);
 }
 for(const [file,sha] of G11_W1_ASSETS){
  assert.equal(blob(read(previous,file)),sha);
  assert.equal(blob(read(current,file)),sha);
 }
 const hook="hooks/sgk_golden_first_paint.py";
 assert.equal(blob(read(current,hook)),blob(read(previous,hook)));
 console.log("PASS W1 review delta source and frozen boundary only; no Academic/PED or browser verdict");
}

// #1039 W2: exact source and route adapter, no academic verdict.
const G11_W2_ROWS=[[5,"ii","8634196e27b5bac8cb3089f433779b592809d955","6adf77092611788f301eb3e3dd0b52a4ddbd8a66"],[6,"ii","43b285b679941e0748ad78f377ab9bbdd73ec3d3","15832bd010a1a965be901c1ed13bc9702366644e"],[7,"ii","3d0886889e383cd76963e1fa3a5eef175a389080","28dbd57c0c08d5887ff829c1f706cfcc25d0fa9b"],[8,"iii","4f3d1af635dd548700ad3514aff283ebe29aa9a2","b3c9f4973bec363ddfd1cc8ea9a156c030dd5bc2"],[9,"iii","46aa17f758783330c2b396f9ed36a25ab77a4094","c8869d0413370af29b0e069036d8aab7e4b7b5f6"]];
const G11_W2_ASSETS=[["docs/assets/images/thpt/FIG-G11-B05-01_R01.svg","154e10059899d635dec5aacc78616e3d53b9ad17"],["docs/assets/images/thpt/FIG-G11-B06-01_R01.svg","7b26242cad828b6b4b6c27b87f3359273b03bf2a"],["docs/assets/images/thpt/FIG-G11-B07-01_R01.svg","3aa50318e6bbe1666d27bd82b5034101f1c100d9"],["docs/assets/images/thpt/FIG-G11-B08-01_R01.svg","ef440d8b314bbbf74a21d624843a38577b040876"],["docs/assets/images/thpt/FIG-G11-B09-01_R01.svg","84b570e65c5cdf63871be984b2c186508591bce9"],["docs/assets/images/thpt/FIG-G11-B09-02_R01.svg","9cf54f86f54a81070bfc75a2782c3ab48b1842da"]];
const G11_W2_LESSONS=["docs/thpt-preview/sgk/lop-11/chuong-ii/bai-5.md","docs/thpt-preview/sgk/lop-11/chuong-ii/bai-6.md","docs/thpt-preview/sgk/lop-11/chuong-ii/bai-7.md","docs/thpt-preview/sgk/lop-11/chuong-iii/bai-8.md","docs/thpt-preview/sgk/lop-11/chuong-iii/bai-9.md"];
const G11_W2_FILES=["docs/thpt-preview/sgk/lop-11/chuong-ii/bai-5.md","docs/thpt-preview/sgk/lop-11/chuong-ii/bai-6.md","docs/thpt-preview/sgk/lop-11/chuong-ii/bai-7.md","docs/thpt-preview/sgk/lop-11/chuong-iii/bai-8.md","docs/thpt-preview/sgk/lop-11/chuong-iii/bai-9.md","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-thpt-scoped-lesson-browser.cjs","scripts/test-sgk-golden-first-paint.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"];
function verifyG11W2(previous,current,changed,expected){
 assert.equal(previous,"745e9c0843c984d23cdaa2ccba0eae9661cf1e81","W2 must start from exact W1 main");
 assert.deepEqual(changed.slice().sort(),G11_W2_FILES.slice().sort());
 assert.deepEqual(expected.slice().sort(),G11_W2_LESSONS.slice().sort());
 const read=(ref,file)=>cp.execFileSync("git",["show",ref+":"+file],{cwd:root});
 const receipt=read(current,G11_W1_HANDOFF);
 assert.equal(blob(read(previous,G11_W1_HANDOFF)),"f3ecefca29faab6939e4a3b3ee9678b2a8db76b4");
 assert.equal(blob(receipt),"c0164fc067282cd343fa9de3639eb552536dfdb3");
 assert(receipt.toString("utf8").startsWith(read(previous,G11_W1_HANDOFF).toString("utf8")));
 const hook="hooks/sgk_golden_first_paint.py";
 const oldHook=read(previous,hook).toString("utf8"),nowHook=read(current,hook).toString("utf8");
 assert.equal(blob(read(current,hook)),"c44fe72d9d8cc459f830d1119de029efea42dc0f");
 const w2Start=nowHook.indexOf("# #1039 W2: only these five signed Knowledge routes.");
 const w2End=nowHook.indexOf("def on_post_page(output, page, config):");
 assert(w2Start>0&&w2End>w2Start);
 assert.equal((nowHook.slice(0,w2Start)+nowHook.slice(w2End)).replace("    if uri in _W2_ROUTES:\n        return _render_w2(output, uri)\n",""),oldHook,"W1 and other routes unchanged");
 const b1="docs/thpt-preview/sgk/lop-11/chuong-i/bai-1.md";
 assert.equal(blob(read(current,b1)),"0603fbb2b61374fcd49eff3c119197cff3fa77e4");
 for(const [n,,h] of G11_W1_REVIEW_ROWS)assert.equal(blob(read(current,"docs/thpt-preview/sgk/lop-11/chuong-i/bai-"+n+".md")),h);
 for(const [n,ch,oldSha,newSha] of G11_W2_ROWS){
  const file="docs/thpt-preview/sgk/lop-11/chuong-"+ch+"/bai-"+n+".md";
  assert.equal(blob(read(previous,file)),oldSha);
  const source=read(current,file);
  assert.equal(blob(source),newSha);assert.equal(blob(fs.readFileSync(path.join(root,file))),newSha);
  const content=source.toString("utf8");
  assert.deepEqual(content.split("\n").filter(l=>l.startsWith('=== "')),['=== "Khám phá kiến thức"','=== "Kiến thức SGK"','=== "Ví dụ"','=== "Lỗi thường gặp"']);
  assert(!/data-(?:thpt-readiness|mastery-credit|mastery-write|thpt-final|g11-chapter-selfcheck)/i.test(content));
  const recovery=content.split('=== "Lỗi thường gặp"')[1];
  assert.equal(recovery.split("\n").filter(l=>/^    ### 4\.\d+\./.test(l)).length,n===5?5:6);
  assert.equal(recovery.includes("**Học tiếp:**"),n!==5);
  assert(receipt.toString("utf8").includes(oldSha)&&receipt.toString("utf8").includes(newSha));
  console.log("SCOPED_G11_W2_SOURCE_PASS "+file+" "+newSha);
 }
 for(const [file,h] of [...G11_W2_ASSETS,...G11_W1_ASSETS]){
  assert.equal(blob(read(previous,file)),h);
  assert.equal(blob(read(current,file)),h);
 }
 console.log("PASS #1039 W2 five source locks, six SVG, frozen W1 and assessment boundary, exact hook");
}

const G11_W3_ROWS=[[10,"b55bf3c5122dd967b3b56fe9085eff19e58d509e","0ac17c3c50a00f886a07dcbde58e6644d698b999"],[11,"7dccb87d44c1734cf7b5f3c77df209b75db6e63b","cc68e2f3089a5c79ee181aadc3d73e1f95ad2708"],[12,"6dc44484c9e12d7dcbf49c40157645ddae577390","cd22cea2d2b016f7c62c5734179eceef24b25f6b"],[13,"619162cbe9854188c5873e03a69c3fb5afc95b43","8d662b7d8d8677eb3c8d210f8acacce2cc00824d"],[14,"121b165f6bd95cdfa4c33d4a4def678d9121e81c","2c44172b68321d0b9e9b515840ca548c90c00df0"]];
const G11_W3_NEW_ASSETS=[["docs/assets/images/thpt/G11_B10_PLANE_MEMBERSHIP_AUTHORING_20261123.svg","5892bd8106d0368ebbab36e29ba870a2036d3941"],["docs/assets/images/thpt/G11_B10_QUADRILATERAL_PYRAMID_AUTHORING_20261123.svg","7b8fe2dc35a5f0e091e6c2c74dd0d411d6215c63"],["docs/assets/images/thpt/G11_B11_TWO_PLANES_PARALLEL_LINES_AUTHORING_20261123.svg","6bc8619a5a14e44c3185f30eb4c1f129f121ec0e"],["docs/assets/images/thpt/G11_B12_THREE_LINE_PLANE_POSITIONS_AUTHORING_20261123.svg","c466df68287de04d26b984caea663bdf6e0db050"],["docs/assets/images/thpt/G11_B13_THALES_THREE_PLANES_AUTHORING_20261123.svg","3ac52d817f9883c5c866b8b6319ebd738097ae3b"],["docs/assets/images/thpt/G11_B14_PROJECTION_DEGENERACY_AUTHORING_20261123.svg","c5fd29c810bf6b9b41ddebd8fb3cfa3b8bb3ed83"]];
const G11_W3_EXISTING_ASSETS=[["docs/assets/images/thpt/FIG-G11-B10-01_R01.svg","ffd7788a36442efae9067f61bc891d360bd65151"],["docs/assets/images/thpt/FIG-G11-B11-01_R01.svg","ab6bd565f48e9addf190e02b0e9d729011d21c52"],["docs/assets/images/thpt/FIG-G11-B12-01_R01.svg","4f0972621fa04af55232a46c46448998ee241ba6"],["docs/assets/images/thpt/FIG-G11-B13-01_R01.svg","153327ce6ceaf9c2f1110e3939fa464442dd7cb0"],["docs/assets/images/thpt/FIG-G11-B14-01_R01.svg","c7c1f862228c51443d8021c63870990052009679"]];
const G11_W3_LESSONS=["docs/thpt-preview/sgk/lop-11/chuong-iv/bai-10.md","docs/thpt-preview/sgk/lop-11/chuong-iv/bai-11.md","docs/thpt-preview/sgk/lop-11/chuong-iv/bai-12.md","docs/thpt-preview/sgk/lop-11/chuong-iv/bai-13.md","docs/thpt-preview/sgk/lop-11/chuong-iv/bai-14.md"];
const G11_W3_FILES=["docs/thpt-preview/sgk/lop-11/chuong-iv/bai-10.md","docs/thpt-preview/sgk/lop-11/chuong-iv/bai-11.md","docs/thpt-preview/sgk/lop-11/chuong-iv/bai-12.md","docs/thpt-preview/sgk/lop-11/chuong-iv/bai-13.md","docs/thpt-preview/sgk/lop-11/chuong-iv/bai-14.md","docs/assets/images/thpt/G11_B10_PLANE_MEMBERSHIP_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B10_QUADRILATERAL_PYRAMID_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B11_TWO_PLANES_PARALLEL_LINES_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B12_THREE_LINE_PLANE_POSITIONS_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B13_THALES_THREE_PLANES_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B14_PROJECTION_DEGENERACY_AUTHORING_20261123.svg","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-thpt-scoped-lesson-browser.cjs","scripts/test-sgk-golden-first-paint.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"];
function verifyG11W3(previous,current,changed,expected){
 assert.equal(previous,"46e63ae54855350503db84a068fdcc74f80b69b9","W3 must start from exact published W2 main");
 assert.deepEqual(changed.slice().sort(),G11_W3_FILES.slice().sort());
 assert.deepEqual(expected.slice().sort(),G11_W3_LESSONS.slice().sort());
 const read=(ref,file)=>cp.execFileSync("git",["show",ref+":"+file],{cwd:root});
 const receipt=read(current,G11_W1_HANDOFF);
 assert.equal(blob(read(previous,G11_W1_HANDOFF)),"c0164fc067282cd343fa9de3639eb552536dfdb3");
 assert.equal(blob(receipt),"eca03dc4ce7a2452fb2815534a23fcf6bf168e36");
 assert(receipt.toString("utf8").startsWith(read(previous,G11_W1_HANDOFF).toString("utf8")));
 const hook="hooks/sgk_golden_first_paint.py";
 const oldHook=read(previous,hook).toString("utf8"),nowHook=read(current,hook).toString("utf8");
 assert.equal(blob(read(current,hook)),"46f3905bf3b14b38bc6fa53e910b59a5f1f525ca");
 const start=nowHook.indexOf("# #1039 W3 exact route scope;");
 const end=nowHook.indexOf("def on_post_page(output, page, config):");
 assert(start>0&&end>start);
 assert.equal((nowHook.slice(0,start)+nowHook.slice(end)).replace("    if uri in _W3_ROUTES:\n        return _render_w3(output, uri)\n",""),oldHook,"W1/W2 and other routes unchanged");
 for(const file of ["docs/thpt-preview/sgk/lop-11/chuong-i/bai-1.md",...G11_W2_LESSONS,...G11_W1_LESSONS])assert.equal(blob(read(previous,file)),blob(read(current,file)));
 for(const [n,oldSha,newSha] of G11_W3_ROWS){
  const file="docs/thpt-preview/sgk/lop-11/chuong-iv/bai-"+n+".md";
  assert.equal(blob(read(previous,file)),oldSha);
  const source=read(current,file),content=source.toString("utf8");
  assert.equal(blob(source),newSha);assert.equal(blob(fs.readFileSync(path.join(root,file))),newSha);
  assert.deepEqual(content.split("\n").filter(l=>l.startsWith('=== "')),['=== "Khám phá kiến thức"','=== "Kiến thức SGK"','=== "Ví dụ"','=== "Lỗi thường gặp"']);
  assert(!/data-(?:thpt-readiness|mastery-credit|mastery-write|thpt-final|g11-chapter-selfcheck)/i.test(content));
  const recovery=content.split('=== "Lỗi thường gặp"')[1];
  assert.equal(recovery.split("\n").filter(l=>/^    ### 4\.\d+\./.test(l)).length,6);
  assert(recovery.includes("**Học tiếp:**"));
  assert(receipt.toString("utf8").includes(oldSha)&&receipt.toString("utf8").includes(newSha));
  console.log("SCOPED_G11_W3_SOURCE_PASS "+file+" "+newSha);
 }
 for(const [file,h] of [...G11_W3_EXISTING_ASSETS,...G11_W2_ASSETS,...G11_W1_ASSETS]){
  assert.equal(blob(read(previous,file)),h);assert.equal(blob(read(current,file)),h);
 }
 for(const [file,h] of G11_W3_NEW_ASSETS){
  assert.throws(()=>read(previous,file),"New SVG must not exist in baseline");
  assert.equal(blob(read(current,file)),h);assert.equal(blob(fs.readFileSync(path.join(root,file))),h);
 }
 console.log("PASS #1039 W3 five source locks, six new and five reused SVG, frozen W1/W2 and assessment boundary, exact hook");
}

const G11_W4_ROWS=[[15,"95bbe5ecdd73b92f88176ae0245e11b1098d8e6e","5c1a81633b877074aa64a21e2cfd128de2f7db2a"],[16,"a2242eeb50ae0f02643182bf10c315c41ce05c3b","7d58a11f2ad82c11d277287c81f8b5c085f31cf2"],[17,"36a7c21f3ae2474318c1e857acbcb640680e1326","989f397ebb88ed7a49ba9895c949bd85a3059585"]];
const G11_W4_NEW_ASSETS=[["docs/assets/images/thpt/G11_B15_GEOMETRIC_PARTIAL_SUMS_AUTHORING_20261123.svg","fa7db1642d772acaef27c1b1f4654df867cc2aba"],["docs/assets/images/thpt/G11_B16_ONE_SIDED_JUMP_AUTHORING_20261123.svg","62c7f1a3c9d5b7455b3223c347ba7aa48adb5526"],["docs/assets/images/thpt/G11_B17_IVT_SIGN_CHANGE_AUTHORING_20261123.svg","612883b518746c9d535fbcd151e226da562cfa1c"]];
const G11_W4_EXISTING_ASSETS=[["docs/assets/images/thpt/FIG-G11-B15-01_R01.svg","632bef51196757f9c71f54c53bb3c7639ce158e0"],["docs/assets/images/thpt/FIG-G11-B16-01_R01.svg","d623e8a96c6d5f9723aafb9c62bffe57bdc9aa73"],["docs/assets/images/thpt/FIG-G11-B17-01_R01.svg","0cc06960b371bca72ee78da414a04aa56f5e5fbe"]];
const G11_W4_LESSONS=["docs/thpt-preview/sgk/lop-11/chuong-v/bai-15.md","docs/thpt-preview/sgk/lop-11/chuong-v/bai-16.md","docs/thpt-preview/sgk/lop-11/chuong-v/bai-17.md"];
const G11_W4_FILES=["docs/thpt-preview/sgk/lop-11/chuong-v/bai-15.md","docs/thpt-preview/sgk/lop-11/chuong-v/bai-16.md","docs/thpt-preview/sgk/lop-11/chuong-v/bai-17.md","docs/assets/images/thpt/G11_B15_GEOMETRIC_PARTIAL_SUMS_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B16_ONE_SIDED_JUMP_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B17_IVT_SIGN_CHANGE_AUTHORING_20261123.svg","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-thpt-scoped-lesson-browser.cjs","scripts/test-sgk-golden-first-paint.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"];
function verifyG11W4(previous,current,changed,expected){
 assert.equal(previous,"c6882ee3cfec3304841505e600187b1d7fe83d31","W4 must start from exact published W3 main");
 assert.deepEqual(changed.slice().sort(),G11_W4_FILES.slice().sort());
 assert.deepEqual(expected.slice().sort(),G11_W4_LESSONS.slice().sort());
 const read=(ref,file)=>cp.execFileSync("git",["show",ref+":"+file],{cwd:root});
 const receipt=read(current,G11_W1_HANDOFF);
 assert.equal(blob(read(previous,G11_W1_HANDOFF)),"eca03dc4ce7a2452fb2815534a23fcf6bf168e36");
 assert.equal(blob(receipt),"4ca5e678146021533871669d7cf6cfed0069f91c");
 assert(receipt.toString("utf8").startsWith(read(previous,G11_W1_HANDOFF).toString("utf8")));
 const hook="hooks/sgk_golden_first_paint.py";
 const oldHook=read(previous,hook).toString("utf8"),nowHook=read(current,hook).toString("utf8");
 assert.equal(blob(read(current,hook)),"b89d84d79ceb186abf00c9bbbef94722a8c836a7");
 const start=nowHook.indexOf("# #1039 W4 exact route scope;");
 const end=nowHook.indexOf("def on_post_page(output, page, config):");
 assert(start>0&&end>start);
 assert.equal((nowHook.slice(0,start)+nowHook.slice(end)).replace("    if uri in _W4_ROUTES:\n        return _render_w4(output, uri)\n",""),oldHook,"W1/W2/W3 and other routes unchanged");
 for(const file of ["docs/thpt-preview/sgk/lop-11/chuong-i/bai-1.md",...G11_W3_LESSONS,...G11_W2_LESSONS,...G11_W1_LESSONS])assert.equal(blob(read(previous,file)),blob(read(current,file)));
 for(const [n,oldSha,newSha] of G11_W4_ROWS){
  const file="docs/thpt-preview/sgk/lop-11/chuong-v/bai-"+n+".md";
  assert.equal(blob(read(previous,file)),oldSha);
  const source=read(current,file),content=source.toString("utf8");
  assert.equal(blob(source),newSha);assert.equal(blob(fs.readFileSync(path.join(root,file))),newSha);
  assert.deepEqual(content.split("\n").filter(l=>l.startsWith('=== "')),['=== "Khám phá kiến thức"','=== "Kiến thức SGK"','=== "Ví dụ"','=== "Lỗi thường gặp"']);
  assert(!/data-(?:thpt-readiness|mastery-credit|mastery-write|thpt-final|g11-chapter-selfcheck)/i.test(content));
  const recovery=content.split('=== "Lỗi thường gặp"')[1];
  assert.equal(recovery.split("\n").filter(l=>/^    ### 4\.\d+\./.test(l)).length,6);
  assert(recovery.includes("**Học tiếp:**"));
  assert(receipt.toString("utf8").includes(oldSha)&&receipt.toString("utf8").includes(newSha));
  console.log("SCOPED_G11_W4_SOURCE_PASS "+file+" "+newSha);
 }
 for(const [file,h] of [...G11_W4_EXISTING_ASSETS,...G11_W3_NEW_ASSETS,...G11_W3_EXISTING_ASSETS,...G11_W2_ASSETS,...G11_W1_ASSETS]){
  assert.equal(blob(read(previous,file)),h);assert.equal(blob(read(current,file)),h);
 }
 for(const [file,h] of G11_W4_NEW_ASSETS){
  assert.throws(()=>read(previous,file),"New SVG must not exist in baseline");
  assert.equal(blob(read(current,file)),h);assert.equal(blob(fs.readFileSync(path.join(root,file))),h);
 }
 console.log("PASS #1039 W4 three source locks, three new and three reused SVG, frozen W1/W2/W3 and assessment boundary, exact hook");
}

const G11_W5_ROWS=[[18,"fd7d7a33ec276c4e03c95185c5ea49b53643b584","91397166b56f95c8118d0134f7f8cb14916a963c"],[19,"f872e9f19e28467e1b6ea11a943e04a2edf3b266","ddc2ae13711cd29fbe096b303db042a37b547686"],[20,"1587f399e7ea9557a9fc490768c589991f25dcb0","486af83a35ac295bf22bcd8e9b1ce3a428848550"],[21,"b7fb59866ce1b250e446cb957d975e7c58d037bb","c13fea0e82a408692ba43fe0e8fa6fdbdeaa83f9"]];
const G11_W5_NEW_ASSETS=[["docs/assets/images/thpt/G11_B20_DECREASING_EXP_LOG_AUTHORING_20261123.svg","e0edabf109720b5720e2419c8b0f2c4af6045b50"],["docs/assets/images/thpt/G11_B21_EXP_LOG_THRESHOLD_AUTHORING_20261123.svg","f2c7fdfbb16c79d43ceb36b9c8df35ddb042e3cb"]];
const G11_W5_EXISTING_ASSETS=[["docs/assets/images/thpt/FIG-G11-CHVI-B18-01_R00.svg","79528bcd2c87eb40b1b54f18c697b0ae3458e642"],["docs/assets/images/thpt/FIG-G11-CHVI-B19-01_R00.svg","fe2895ac101dcc4cf4046d57428181ad0f448dc8"],["docs/assets/images/thpt/FIG-G11-CHVI-B20-01_R00.svg","64bcb465bd6d809095a4ca2b910555e314badb69"],["docs/assets/images/thpt/FIG-G11-CHVI-B21-01_R00.svg","6d43f842d096b974eb70af21e6751f1ec70eea00"]];
const G11_W5_LESSONS=["docs/thpt-preview/sgk/lop-11/chuong-vi/bai-18.md","docs/thpt-preview/sgk/lop-11/chuong-vi/bai-19.md","docs/thpt-preview/sgk/lop-11/chuong-vi/bai-20.md","docs/thpt-preview/sgk/lop-11/chuong-vi/bai-21.md"];
const G11_W5_FILES=["docs/thpt-preview/sgk/lop-11/chuong-vi/bai-18.md","docs/thpt-preview/sgk/lop-11/chuong-vi/bai-19.md","docs/thpt-preview/sgk/lop-11/chuong-vi/bai-20.md","docs/thpt-preview/sgk/lop-11/chuong-vi/bai-21.md","docs/assets/images/thpt/G11_B20_DECREASING_EXP_LOG_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B21_EXP_LOG_THRESHOLD_AUTHORING_20261123.svg","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-thpt-scoped-lesson-browser.cjs","scripts/test-sgk-golden-first-paint.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"];
function verifyG11W5(previous,current,changed,expected){
 assert.equal(previous,"25fef0d91201601ad55c8b4ce5d9e69be6f09887","W5 must start from exact published W4 main");
 assert.deepEqual(changed.slice().sort(),G11_W5_FILES.slice().sort());
 assert.deepEqual(expected.slice().sort(),G11_W5_LESSONS.slice().sort());
 const read=(ref,file)=>cp.execFileSync("git",["show",ref+":"+file],{cwd:root});
 const receipt=read(current,G11_W1_HANDOFF);
 assert.equal(blob(read(previous,G11_W1_HANDOFF)),"4ca5e678146021533871669d7cf6cfed0069f91c");
 assert.equal(blob(receipt),"4d8858dca8e46f64ff33d183f6adddb1ca0ce25a");
 assert(receipt.toString("utf8").startsWith(read(previous,G11_W1_HANDOFF).toString("utf8")));
 const hook="hooks/sgk_golden_first_paint.py";
 const oldHook=read(previous,hook).toString("utf8"),nowHook=read(current,hook).toString("utf8");
 assert.equal(blob(read(current,hook)),"278e592244a64d22346431012d61cd862c772299");
 const start=nowHook.indexOf("# #1039 W5 exact route scope;");
 const end=nowHook.indexOf("def on_post_page(output, page, config):");
 assert(start>0&&end>start);
 assert.equal((nowHook.slice(0,start)+nowHook.slice(end)).replace("    if uri in _W5_ROUTES:\n        return _render_w5(output, uri)\n",""),oldHook,"W1/W2/W3/W4 and other routes unchanged");
 for(const file of ["docs/thpt-preview/sgk/lop-11/chuong-i/bai-1.md",...G11_W4_LESSONS,...G11_W3_LESSONS,...G11_W2_LESSONS,...G11_W1_LESSONS])assert.equal(blob(read(previous,file)),blob(read(current,file)));
 for(const [n,oldSha,newSha] of G11_W5_ROWS){
  const file="docs/thpt-preview/sgk/lop-11/chuong-vi/bai-"+n+".md";
  assert.equal(blob(read(previous,file)),oldSha);
  const source=read(current,file),content=source.toString("utf8");
  assert.equal(blob(source),newSha);assert.equal(blob(fs.readFileSync(path.join(root,file))),newSha);
  assert.deepEqual(content.split("\n").filter(l=>l.startsWith('=== "')),['=== "Khám phá kiến thức"','=== "Kiến thức SGK"','=== "Ví dụ"','=== "Lỗi thường gặp"']);
  assert(!/data-(?:thpt-readiness|mastery-credit|mastery-write|thpt-final|g11-chapter-selfcheck)/i.test(content));
  const recovery=content.split('=== "Lỗi thường gặp"')[1];
  assert.equal(recovery.split("\n").filter(l=>/^    ### 4\.\d+\./.test(l)).length,6);
  assert(recovery.includes("**Học tiếp:**"));
  assert(receipt.toString("utf8").includes(oldSha)&&receipt.toString("utf8").includes(newSha));
  console.log("SCOPED_G11_W5_SOURCE_PASS "+file+" "+newSha);
 }
 for(const [file,h] of [...G11_W5_EXISTING_ASSETS,...G11_W4_NEW_ASSETS,...G11_W4_EXISTING_ASSETS,...G11_W3_NEW_ASSETS,...G11_W3_EXISTING_ASSETS,...G11_W2_ASSETS,...G11_W1_ASSETS]){
  assert.equal(blob(read(previous,file)),h);assert.equal(blob(read(current,file)),h);
 }
 for(const [file,h] of G11_W5_NEW_ASSETS){
  assert.throws(()=>read(previous,file),"New SVG must not exist in baseline");
  assert.equal(blob(read(current,file)),h);assert.equal(blob(fs.readFileSync(path.join(root,file))),h);
 }
 console.log("PASS #1039 W5 four source locks, two new and four reused SVG, frozen W1/W2/W3/W4 and assessment boundary, exact hook");
}

const G11_W6_ROWS=[[22,"d8a679897dde1d2fa25e12df56772eb54be29ff4","fdcee166ee96617e3889cd9c05d2b5549be0705c"],[23,"ad1ce1335b2c4dcef36edff8f8ad5378b8f63cad","03cccc3ae3b48856589611ee4d3ffea05cdc89b4"],[24,"0bd7550087f455264e2b5e5d3214078e063ccb1c","8eab4af3ecff4958feffaf2bf092a1ec01a506c4"],[25,"c6ba455035041fbe16ee66f346cb78477ceaaa73","81d59089a9169c20a920735eb87dc8008b958afe"],[26,"417ce70fc81b8a656e803855d0594dfa9db945b2","3babd4c575e2dc5b9974b3abfe686ac4d5a3a5bc"],[27,"abd417ddb6d89528eaa8da28c132a126a26738e0","d1f4a6cd17321278cb8c6bc65ab397f8b15feb0b"]];
const G11_W6_NEW_ASSETS=[["docs/assets/images/thpt/G11_B22_KHEOPS_ANGLE_AUTHORING_20261123.svg","9e3820f228b9c0733378736e4cd24636572b5c83"],["docs/assets/images/thpt/G11_B22_SKEW_PERP_RECTANGULAR_BOX_AUTHORING_20261123.svg","95c942955c6a4499378b90260eb37a3116791854"],["docs/assets/images/thpt/G11_B23_PARALLEL_PLANES_NORMAL_AUTHORING_20261123.svg","d8264650f25a1dc885cab77a6ba9900829fb2ee1"],["docs/assets/images/thpt/G11_B23_PERPENDICULAR_BISECTOR_PLANE_AUTHORING_20261123.svg","bca2dd8689c5edb1a19bb1e6fe11eeb24d40df52"],["docs/assets/images/thpt/G11_B24_SABC_PROJECTION_EXAMPLE_AUTHORING_20261123.svg","f05beae8d637098a296c4e52e2a6ff4913d145f7"],["docs/assets/images/thpt/G11_B24_THREE_PERPENDICULAR_LINES_AUTHORING_20261123.svg","ccfeff10568475186750ae735dfc8edc4bca7658"],["docs/assets/images/thpt/G11_B25_CUBE_EQUILATERAL_DIAGONALS_AUTHORING_20261123.svg","40e1fa9e9d922d4bb433a6ee36e2477bf66afbca"],["docs/assets/images/thpt/G11_B25_DIHEDRAL_CHAIR_AUTHORING_20261123.svg","e2d84db3d7fe0dc03bb33a4afba5e3b31bbba362"],["docs/assets/images/thpt/G11_B25_PERPENDICULAR_PLANES_AUTHORING_20261123.svg","1f2e7a6f93fc5981def01d39e7ab41b13717ef57"],["docs/assets/images/thpt/G11_B25_REGULAR_PYRAMID_FRUSTUM_AUTHORING_20261123.svg","8efdd9fd9528f064da32202edb8f155941186b9f"],["docs/assets/images/thpt/G11_B25_RHOMBUS_PYRAMID_DIHEDRAL_AUTHORING_20261123.svg","6ef7828be37ca6906e7fd06aa3642a3085aee99f"],["docs/assets/images/thpt/G11_B25_SPECIAL_PRISMS_AUTHORING_20261123.svg","139874b20f72f567c66a311141642cc2b441e079"],["docs/assets/images/thpt/G11_B26_PARALLEL_DISTANCES_AUTHORING_20261123.svg","8d235dac67e15cc18514585fd95b0ddf01506f60"],["docs/assets/images/thpt/G11_B26_PYRAMID_HEIGHT_AUTHORING_20261123.svg","57867c20712b82d1d117621124936d5a7b797657"],["docs/assets/images/thpt/G11_B26_RHOMBUS_PRISM_DISTANCES_AUTHORING_20261123.svg","c6a0b4379711c13fa429f22ec47b9b1f41641437"],["docs/assets/images/thpt/G11_B26_RIGHT_TRIANGULAR_PRISM_AUTHORING_20261123.svg","ed51c2603dcf3f4bb6d5135fbf76b3f559678fb7"],["docs/assets/images/thpt/G11_B26_SABC_COMMON_PERPENDICULAR_AUTHORING_20261123.svg","fbaa2a728fbd178866cd7b3425b9265ba21af06b"],["docs/assets/images/thpt/G11_B26_SKEW_COMMON_PERPENDICULAR_AUTHORING_20261123.svg","53e2dd16ebaa406149586ccaa2ae64d70546ffa6"],["docs/assets/images/thpt/G11_B26_SLOPE_CLEARANCE_AUTHORING_20261123.svg","799feadf45ad7a3e57fb42167bac21b9faafea89"],["docs/assets/images/thpt/G11_B26_SQUARE_PYRAMID_SKEW_DISTANCE_AUTHORING_20261123.svg","e86bfcbfb9d7414afec530db780122947bfb9e5c"],["docs/assets/images/thpt/G11_B27_FRUSTUM_BASKET_AUTHORING_20261123.svg","56ac666836da322f1dd9fb63dca588046ce62759"],["docs/assets/images/thpt/G11_B27_FRUSTUM_SIMILARITY_AUTHORING_20261123.svg","10ccc89345ab469eb7feb136a933da546c8234f0"],["docs/assets/images/thpt/G11_B27_PARALLELEPIPED_OBLIQUE_AUTHORING_20261123.svg","4f495702bc69960025b454acd6c967a17a83f760"],["docs/assets/images/thpt/G11_B27_PRISM_INCLINED_HEIGHT_AUTHORING_20261123.svg","f62240aa34d6fe3711193b1f742cd2ed286c0518"],["docs/assets/images/thpt/G11_B27_TETRAHEDRON_ORTHOGONAL_AUTHORING_20261123.svg","2669181a54e561532ecbfb032348f92f43d2dc42"]];
const G11_W6_EXISTING_ASSETS=[["docs/assets/images/thpt/FIG-G11-CHVII-B22-01_R00.svg","5f2d23adb6f947064312d04d67ce5a5bb2d1ff48"],["docs/assets/images/thpt/FIG-G11-CHVII-B23-01_R00.svg","b53b65704f9830e1c97b533bac0e79a0b56761b6"],["docs/assets/images/thpt/FIG-G11-CHVII-B24-01_R00.svg","c98d7df30b87c339336636e00322816a4099681b"],["docs/assets/images/thpt/FIG-G11-CHVII-B25-01_R00.svg","3f6112a7b12f1829ee2249b979d45f1f5370fc66"],["docs/assets/images/thpt/FIG-G11-CHVII-B26-01_R00.svg","26fb51f3af65ba7d86a2907f0eaff808d2d87532"],["docs/assets/images/thpt/FIG-G11-CHVII-B27-01_R00.svg","a7bec7a20295d09ca6f32aae0e8910cef7bed9dc"],["docs/assets/images/thpt/G10_B20_POINT_LINE_DISTANCE_R02.svg","ef30404a12bbb1a9241e7efc3c5f8a4fa1a8e9ff"]];
const G11_W6_LESSONS=["docs/thpt-preview/sgk/lop-11/chuong-vii/bai-22.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-23.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-24.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-25.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-26.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-27.md"];
const G11_W6_FILES=["docs/thpt-preview/sgk/lop-11/chuong-vii/bai-22.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-23.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-24.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-25.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-26.md","docs/thpt-preview/sgk/lop-11/chuong-vii/bai-27.md","docs/assets/images/thpt/G11_B22_KHEOPS_ANGLE_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B22_SKEW_PERP_RECTANGULAR_BOX_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B23_PARALLEL_PLANES_NORMAL_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B23_PERPENDICULAR_BISECTOR_PLANE_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B24_SABC_PROJECTION_EXAMPLE_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B24_THREE_PERPENDICULAR_LINES_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B25_CUBE_EQUILATERAL_DIAGONALS_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B25_DIHEDRAL_CHAIR_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B25_PERPENDICULAR_PLANES_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B25_REGULAR_PYRAMID_FRUSTUM_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B25_RHOMBUS_PYRAMID_DIHEDRAL_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B25_SPECIAL_PRISMS_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B26_PARALLEL_DISTANCES_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B26_PYRAMID_HEIGHT_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B26_RHOMBUS_PRISM_DISTANCES_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B26_RIGHT_TRIANGULAR_PRISM_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B26_SABC_COMMON_PERPENDICULAR_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B26_SKEW_COMMON_PERPENDICULAR_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B26_SLOPE_CLEARANCE_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B26_SQUARE_PYRAMID_SKEW_DISTANCE_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B27_FRUSTUM_BASKET_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B27_FRUSTUM_SIMILARITY_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B27_PARALLELEPIPED_OBLIQUE_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B27_PRISM_INCLINED_HEIGHT_AUTHORING_20261123.svg","docs/assets/images/thpt/G11_B27_TETRAHEDRON_ORTHOGONAL_AUTHORING_20261123.svg","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-thpt-scoped-lesson-browser.cjs","scripts/test-sgk-golden-first-paint.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"];
function verifyG11W6(previous,current,changed,expected){
 assert.equal(previous,"7c9161abdbe5a51ecc11db343cd660a70d8f2657","W6 must start from exact published W5 main");
 assert.deepEqual(changed.slice().sort(),G11_W6_FILES.slice().sort());
 assert.deepEqual(expected.slice().sort(),G11_W6_LESSONS.slice().sort());
 const read=(ref,file)=>cp.execFileSync("git",["show",ref+":"+file],{cwd:root});
 const receipt=read(current,G11_W1_HANDOFF);
 assert.equal(blob(read(previous,G11_W1_HANDOFF)),"4d8858dca8e46f64ff33d183f6adddb1ca0ce25a");
 assert.equal(blob(receipt),"5a1813dd06dee8dcac575cf4d1d7f3df0c722817");
 assert(receipt.toString("utf8").startsWith(read(previous,G11_W1_HANDOFF).toString("utf8")));
 const hook="hooks/sgk_golden_first_paint.py";
 const oldHook=read(previous,hook).toString("utf8"),nowHook=read(current,hook).toString("utf8");
 assert.equal(blob(read(current,hook)),"7b3301c7e606af4e174722914c56613477ed3946");
 const start=nowHook.indexOf("# #1039 W6 exact route scope;");
 const end=nowHook.indexOf("def on_post_page(output, page, config):");
 assert(start>0&&end>start);
 assert.equal((nowHook.slice(0,start)+nowHook.slice(end)).replace("    if uri in _W6_ROUTES:\n        return _render_w6(output, uri)\n",""),oldHook,"W1/W2/W3/W4/W5 and other routes unchanged");
 for(const file of ["docs/thpt-preview/sgk/lop-11/chuong-i/bai-1.md",...G11_W5_LESSONS,...G11_W4_LESSONS,...G11_W3_LESSONS,...G11_W2_LESSONS,...G11_W1_LESSONS])assert.equal(blob(read(previous,file)),blob(read(current,file)));
 for(const [n,oldSha,newSha] of G11_W6_ROWS){
  const file="docs/thpt-preview/sgk/lop-11/chuong-vii/bai-"+n+".md";
  assert.equal(blob(read(previous,file)),oldSha);
  const source=read(current,file),content=source.toString("utf8");
  assert.equal(blob(source),newSha);assert.equal(blob(fs.readFileSync(path.join(root,file))),newSha);
  assert.deepEqual(content.split("\n").filter(l=>l.startsWith('=== "')),['=== "Khám phá kiến thức"','=== "Kiến thức SGK"','=== "Ví dụ"','=== "Lỗi thường gặp"']);
  assert(!/data-(?:thpt-readiness|mastery-credit|mastery-write|thpt-final|g11-chapter-selfcheck)/i.test(content));
  const recovery=content.split('=== "Lỗi thường gặp"')[1];
  assert.equal(recovery.split("\n").filter(l=>/^    ### 4\.\d+\./.test(l)).length,n<=24?6:8);
  assert(recovery.includes("**Học tiếp:**"));
  assert(receipt.toString("utf8").includes(oldSha)&&receipt.toString("utf8").includes(newSha));
  console.log("SCOPED_G11_W6_SOURCE_PASS "+file+" "+newSha);
 }
 for(const [file,h] of [...G11_W6_EXISTING_ASSETS,...G11_W5_NEW_ASSETS,...G11_W5_EXISTING_ASSETS,...G11_W4_NEW_ASSETS,...G11_W4_EXISTING_ASSETS,...G11_W3_NEW_ASSETS,...G11_W3_EXISTING_ASSETS,...G11_W2_ASSETS,...G11_W1_ASSETS]){
  assert.equal(blob(read(previous,file)),h);assert.equal(blob(read(current,file)),h);
 }
 for(const [file,h] of G11_W6_NEW_ASSETS){
  assert.throws(()=>read(previous,file),"New SVG must not exist in baseline");
  assert.equal(blob(read(current,file)),h);assert.equal(blob(fs.readFileSync(path.join(root,file))),h);
 }
 console.log("PASS #1039 W6 six source locks, 25 new and seven reused SVG, frozen W1/W2/W3/W4/W5 and assessment boundary, exact hook");
}

const G11_W7_ROWS=[[28,"86018a916315d313249f958ff2c66acdb52612be","ede75c644c6da8305090bf1210e17873144d9367",6,"docs/thpt-preview/sgk/lop-11/chuong-viii/bai-28.md"],[29,"51b686118c52605d8c8ab64b2e05d3fea419c1f8","8466e2640ad5b8f271c59e02fd9bdaec723802b0",6,"docs/thpt-preview/sgk/lop-11/chuong-viii/bai-29.md"],[30,"7ef2e8be4bca6c64f7ab190ed5d1cde921998373","134423d47faeed1a00ab5f9b0ed704119de67c64",7,"docs/thpt-preview/sgk/lop-11/chuong-viii/bai-30.md"],[31,"20f6b47a4f56a1531ee695fde11953edfb9661bb","8f3d2b6e144a5d5bee5635b7f5058291cc89c9ac",8,"docs/thpt-preview/sgk/lop-11/chuong-ix/bai-31.md"],[32,"078a5d9aca09954fd2b451508152147f6a655015","82cfd851c3629e67793d91355d970011d8d1134e",10,"docs/thpt-preview/sgk/lop-11/chuong-ix/bai-32.md"],[33,"920752c92ab12a97d8e034780907fd2bcaac1308","1102e28f47fb8946fdafca2f86194abd60637b47",8,"docs/thpt-preview/sgk/lop-11/chuong-ix/bai-33.md"]];
const G11_W7_ASSETS=[["docs/assets/images/thpt/FIG-G11-CHVIII-B28-01_R00.svg","e74a36b76333707519ac9e1432904e83ffbe408e"],["docs/assets/images/thpt/FIG-G11-CHVIII-B29-01_R00.svg","1984743b38a2f9855763214608cd264f976976a4"],["docs/assets/images/thpt/FIG-G11-CHVIII-B30-01_R00.svg","27df5f16c8aa69cf5458f3117abab9eff256970d"],["docs/assets/images/thpt/FIG-G11-CHIX-B31-01_R00.svg","ca0a19f3931983632f88754bf4317d012add6b79"],["docs/assets/images/thpt/FIG-G11-CHIX-B31-02_R00.svg","b569565e99675ad5ba56a11fb38cf1f8977ba134"],["docs/assets/images/thpt/FIG-G11-CHIX-B32-01_R00.svg","bc35da6f466cfaac519fe84e483856a3e4e24464"],["docs/assets/images/thpt/FIG-G11-CHIX-B32-02_R00.svg","6493758f2ebf13f51a81847f91835b2ba1fcdb38"],["docs/assets/images/thpt/FIG-G11-CHIX-B33-01_R00.svg","58fcb5ce261fe35d93d8eacd2af584c7b93dc1a9"]];
const G11_W7_LESSONS=["docs/thpt-preview/sgk/lop-11/chuong-viii/bai-28.md","docs/thpt-preview/sgk/lop-11/chuong-viii/bai-29.md","docs/thpt-preview/sgk/lop-11/chuong-viii/bai-30.md","docs/thpt-preview/sgk/lop-11/chuong-ix/bai-31.md","docs/thpt-preview/sgk/lop-11/chuong-ix/bai-32.md","docs/thpt-preview/sgk/lop-11/chuong-ix/bai-33.md"];
const G11_W7_FILES=["docs/thpt-preview/sgk/lop-11/chuong-viii/bai-28.md","docs/thpt-preview/sgk/lop-11/chuong-viii/bai-29.md","docs/thpt-preview/sgk/lop-11/chuong-viii/bai-30.md","docs/thpt-preview/sgk/lop-11/chuong-ix/bai-31.md","docs/thpt-preview/sgk/lop-11/chuong-ix/bai-32.md","docs/thpt-preview/sgk/lop-11/chuong-ix/bai-33.md","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-sgk-golden-first-paint.cjs","scripts/test-thpt-scoped-lesson-browser.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"];
function verifyG11W7(previous,current,changed,expected){
 assert.equal(previous,"a80996173f65298c78db1521edca6739f7339855","W7 exact published W6 main");
 assert.deepEqual(changed.slice().sort(),G11_W7_FILES.slice().sort());
 assert.deepEqual(expected.slice().sort(),G11_W7_LESSONS.slice().sort());
 const read=(ref,file)=>cp.execFileSync("git",["show",ref+":"+file],{cwd:root});
 const receipt=read(current,G11_W1_HANDOFF);
 assert.equal(blob(read(previous,G11_W1_HANDOFF)),"5a1813dd06dee8dcac575cf4d1d7f3df0c722817");
 assert.equal(blob(receipt),"ddf34e9a408a675e16812680505f50738c83a475");
 assert(receipt.toString("utf8").startsWith(read(previous,G11_W1_HANDOFF).toString("utf8")));
 const hook="hooks/sgk_golden_first_paint.py";
 const oldHook=read(previous,hook).toString("utf8"),nowHook=read(current,hook).toString("utf8");
 assert.equal(blob(read(current,hook)),"203be40eb39a20820914fe58873be08346640dd9");
 const start=nowHook.indexOf("# #1039 W7 exact route scope;");
 const end=nowHook.indexOf("def on_post_page(output, page, config):");
 assert(start>0&&end>start);
 assert.equal((nowHook.slice(0,start)+nowHook.slice(end)).replace("    if uri in _W7_ROUTES:\n        return _render_w7(output, uri)\n",""),oldHook,"W1–W6 and other routes unchanged");
 for(const file of ["docs/thpt-preview/sgk/lop-11/chuong-i/bai-1.md",...G11_W6_LESSONS,...G11_W5_LESSONS,...G11_W4_LESSONS,...G11_W3_LESSONS,...G11_W2_LESSONS,...G11_W1_LESSONS])assert.equal(blob(read(previous,file)),blob(read(current,file)));
 for(const [n,oldSha,newSha,count,file] of G11_W7_ROWS){
  assert.equal(blob(read(previous,file)),oldSha);
  const source=read(current,file),content=source.toString("utf8");
  assert.equal(blob(source),newSha);assert.equal(blob(fs.readFileSync(path.join(root,file))),newSha);
  assert.deepEqual(content.split("\n").filter(l=>l.startsWith('=== "')),['=== "Khám phá kiến thức"','=== "Kiến thức SGK"','=== "Ví dụ"','=== "Lỗi thường gặp"']);
  assert(!/data-(?:thpt-readiness|mastery-credit|mastery-write|thpt-final|g11-chapter-selfcheck)/i.test(content));
  const recovery=content.split('=== "Lỗi thường gặp"')[1];
  assert.equal(recovery.split("\n").filter(l=>/^    ### 4\.\d+\./.test(l)).length,count);
  assert.equal(recovery.split("\n").filter(l=>l.startsWith("    **Sai ở đâu:**")).length,count);
  assert(!recovery.includes("**Học tiếp:**"));
  assert(receipt.toString("utf8").includes(oldSha)&&receipt.toString("utf8").includes(newSha));
  console.log("SCOPED_G11_W7_SOURCE_PASS "+file+" "+newSha);
 }
 for(const [file,h] of [...G11_W7_ASSETS,...G11_W6_NEW_ASSETS,...G11_W6_EXISTING_ASSETS,...G11_W5_NEW_ASSETS,...G11_W5_EXISTING_ASSETS,...G11_W4_NEW_ASSETS,...G11_W4_EXISTING_ASSETS,...G11_W3_NEW_ASSETS,...G11_W3_EXISTING_ASSETS,...G11_W2_ASSETS,...G11_W1_ASSETS]){
  assert.equal(blob(read(previous,file)),h);assert.equal(blob(read(current,file)),h);
 }
 console.log("PASS #1039 W7 six source locks, eight reused SVG, frozen W1–W6, assessment boundary, exact hook");
}

const G12_MATH_HOTFIX_ROWS=[["docs/thpt-preview/sgk/lop-12/chuong-ii/bai-7.md","c87cefbfe3dfe2bdcce4976a40aa1596f8fca31c","eb93bf6a1ac1fd07347bf01d872aae26957ebc78",5,4,8],["docs/thpt-preview/sgk/lop-12/chuong-ii/bai-8.md","757b85da3ebdc143be51b7816b142dbde13b11da","40b60e3419e71738bbfa61dcb4ff45c58c5342f2",7,6,11],["docs/thpt-preview/sgk/lop-12/chuong-iii/bai-9.md","0ae1063568ddf02dec12f61ecc7733b643d1245a","2d143590b7bfb1bb2d807c69f4040f62a7700968",6,3,4],["docs/thpt-preview/sgk/lop-12/chuong-iii/bai-10.md","adfe3511b1335aed52047f00c11ecb3ad830d287","ac62a6cfb481327fa98f330b64b72f1684c9b267",8,7,9],["docs/thpt-preview/sgk/lop-12/chuong-iv/bai-11.md","88dda34ee093c97e0cc3b844b6857168ee630506","8ce272ea3bd2425c943b4ed9c642e229a659ffa0",8,8,16],["docs/thpt-preview/sgk/lop-12/chuong-iv/bai-12.md","e0ffd6f8389218585baa7e47b2558b3c83248034","ad7f4379832984d2ce30db269a59d8e0990b7e64",12,12,23],["docs/thpt-preview/sgk/lop-12/chuong-iv/bai-13.md","8007752c3027a88281aa3192ef30ba557d0df648","fb7d4173e0ed6376aa71bfaf53f70803a6bade5e",15,15,29]],G12_MATH_HOTFIX_FILES=["docs/thpt-preview/sgk/lop-12/chuong-ii/bai-7.md","docs/thpt-preview/sgk/lop-12/chuong-ii/bai-8.md","docs/thpt-preview/sgk/lop-12/chuong-iii/bai-9.md","docs/thpt-preview/sgk/lop-12/chuong-iii/bai-10.md","docs/thpt-preview/sgk/lop-12/chuong-iv/bai-11.md","docs/thpt-preview/sgk/lop-12/chuong-iv/bai-12.md","docs/thpt-preview/sgk/lop-12/chuong-iv/bai-13.md","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-thpt-scoped-lesson-browser.cjs","scripts/test-sgk-golden-first-paint.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"];

function normalizeG12DisplayBlocks(content){
 const lines=content.split("\n"),before=new Set();let total=0,affected=0;
 for(let i=0;i<lines.length;i++){
  if(lines[i].trim()!=="\\[")continue;
  let j=i+1;while(j<lines.length&&lines[j].trim()!=="\\]")j++;
  assert(j<lines.length,"unbalanced display block");
  total++;
  if(lines[i-1]?.trim()||lines[j+1]?.trim())affected++;
  if(lines[i-1]?.trim())before.add(i);
  if(lines[j+1]?.trim())before.add(j+1);
  i=j;
 }
 return {text:lines.flatMap((l,i)=>before.has(i)?["",l]:[l]).join("\n"),total,affected,inserted:before.size};
}
function verifyG12MathHotfix(previous,current,changed,expected){
 assert.equal(previous,"d7253020057be0464034b6168a513267c08ec127");
 assert.deepEqual(changed.slice().sort(),G12_MATH_HOTFIX_FILES.slice().sort());
 assert.deepEqual(expected.slice().sort(),G12_MATH_HOTFIX_ROWS.map(r=>r[0]).sort());
 const read=(ref,file)=>cp.execFileSync("git",["show",ref+":"+file],{cwd:root});
 const receipt=read(current,G11_W1_HANDOFF);
 assert.equal(blob(read(previous,G11_W1_HANDOFF)),"f9ea6b18f934d29f6a9549272fc42ac467d88da8");
 assert.equal(blob(receipt),"64438297709b8b71ea1a478e0f3908f539f0d132");
 assert(receipt.toString("utf8").startsWith(read(previous,G11_W1_HANDOFF).toString("utf8")));
 for(const [file,oldSha,newSha,total,affected,inserted] of G12_MATH_HOTFIX_ROWS){
  const old=read(previous,file),now=read(current,file),fix=normalizeG12DisplayBlocks(old.toString("utf8"));
  assert.equal(blob(old),oldSha);assert.equal(blob(now),newSha);assert.equal(blob(fs.readFileSync(path.join(root,file))),newSha);
  assert.equal(fix.total,total);assert.equal(fix.affected,affected);assert.equal(fix.inserted,inserted);
  assert.equal(now.toString("utf8"),fix.text,"Only empty lines around display delimiters may change");
  assert.deepEqual(old.toString("utf8").split("\n").filter(l=>l.trim()),now.toString("utf8").split("\n").filter(l=>l.trim()));
  console.log("SGK_REL_009_EXACT_SOURCE_PASS "+file+" standalone blocks "+total+" inserted "+inserted);
 }
 console.log("PASS SGK-REL-009 seven canonical sources, 61 display blocks, 100 inserted separators; no nonblank line changes");
}

const G12_W11_ROWS=[[11,"f3fc0f654a21af7ec72de657643ef97488413dcb","88dda34ee093c97e0cc3b844b6857168ee630506",7,"docs/thpt-preview/sgk/lop-12/chuong-iv/bai-11.md"],[12,"2ea14427518e58acb03e85d64dcc6b18d55f8798","e0ffd6f8389218585baa7e47b2558b3c83248034",7,"docs/thpt-preview/sgk/lop-12/chuong-iv/bai-12.md"],[13,"51b5cf8243b4793e159db862379a21df60ff75bd","8007752c3027a88281aa3192ef30ba557d0df648",7,"docs/thpt-preview/sgk/lop-12/chuong-iv/bai-13.md"]],G12_W11_NEW=[["docs/assets/images/thpt/G12_B11_FIG01_FAMILY_AUTHORING_20261124.svg","cb98c0d7e33eab90f1b1fd4e09e6dba925539e25"],["docs/assets/images/thpt/G12_B12_FIG01_AREA_DERIVATIVE_AUTHORING_20261124.svg","299037dee91e0c91db3e5c911982bbebbb514ae0"],["docs/assets/images/thpt/G12_B12_FIG02_SIGNED_AREA_AUTHORING_20261124.svg","b04dafd5b4ff5f56be0893d3a52bba5121b64808"],["docs/assets/images/thpt/G12_B13_FIG01_TWO_CURVES_AUTHORING_20261124.svg","af5e42bcb3b150c706d472a92be96399b480e02c"],["docs/assets/images/thpt/G12_B13_FIG02_PYRAMID_SECTION_AUTHORING_20261124.svg","9fb3c7377877eaea2b5de466659c85437e95a7b7"],["docs/assets/images/thpt/G12_B13_FIG03_REVOLUTION_AUTHORING_20261124.svg","01143627de4f6c90e3a74f6945c284c76f256c4a"]],G12_W11_UPDATED=[],G12_W11_EXISTING=[],G12_W11_FILES=["docs/thpt-preview/sgk/lop-12/chuong-iv/bai-11.md","docs/thpt-preview/sgk/lop-12/chuong-iv/bai-12.md","docs/thpt-preview/sgk/lop-12/chuong-iv/bai-13.md","docs/assets/images/thpt/G12_B11_FIG01_FAMILY_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B12_FIG01_AREA_DERIVATIVE_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B12_FIG02_SIGNED_AREA_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B13_FIG01_TWO_CURVES_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B13_FIG02_PYRAMID_SECTION_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B13_FIG03_REVOLUTION_AUTHORING_20261124.svg","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-sgk-golden-first-paint.cjs","scripts/test-thpt-scoped-lesson-browser.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"];
function verifyG12W11(previous,current,changed,expected){
 assert.equal(previous,"cfd2f3e5494bbf0d48a9f2838dcc4104d3586ecc");
 assert.deepEqual(changed.slice().sort(),G12_W11_FILES.slice().sort());
 assert.deepEqual(expected.slice().sort(),G12_W11_ROWS.map(x=>x[4]).sort());
 const read=(ref,file)=>cp.execFileSync("git",["show",ref+":"+file],{cwd:root});
 const receipt=read(current,G11_W1_HANDOFF);
 assert.equal(blob(read(previous,G11_W1_HANDOFF)),"07a9d19fa60117f99130788f4bc8c58752d1834f");assert.equal(blob(receipt),"f9ea6b18f934d29f6a9549272fc42ac467d88da8");assert(receipt.toString("utf8").startsWith(read(previous,G11_W1_HANDOFF).toString("utf8")));
 const hook="hooks/sgk_golden_first_paint.py",old=read(previous,hook).toString("utf8"),now=read(current,hook).toString("utf8");
 assert.equal(blob(read(current,hook)),"f984730b64fc19502a91603706c93e4c29c2d35c");
 const a=now.indexOf("# #1039 W11 exact G12 ChIV routes;"),b=now.indexOf("def on_post_page(output, page, config):");assert(a>0&&b>a);
 assert.equal((now.slice(0,a)+now.slice(b)).replace("    if uri in _W11_ROUTES:\n        return _render_w11(output, uri)\n",""),old,"prior route hook unchanged");
 for(const [n,oldSha,newSha,count,file] of G12_W11_ROWS){
  assert.equal(blob(read(previous,file)),oldSha);
  const source=read(current,file),content=source.toString("utf8");
  assert.equal(blob(source),newSha);assert.equal(blob(fs.readFileSync(path.join(root,file))),newSha);
  assert.deepEqual(content.split("\n").filter(l=>l.startsWith('=== "')),['=== "Khám phá kiến thức"','=== "Kiến thức SGK"','=== "Ví dụ"','=== "Lỗi thường gặp"']);
  assert(!/data-(?:thpt-readiness|mastery-credit|mastery-write|thpt-final|g12-chi-selfcheck|g12-chapter-selfcheck)/i.test(content));
  const recovery=content.split('=== "Lỗi thường gặp"')[1];
  assert.equal(recovery.split("\n").filter(l=>/^    ### 4\.\d+\./.test(l)).length,count);
  assert.equal(recovery.split("\n").filter(l=>l.startsWith("    **Sai ở đâu:**")).length,count);
  assert(recovery.includes("**Học tiếp:**")&&recovery.includes('class="thpt-r4-footnote"'));
  assert(receipt.toString("utf8").includes(oldSha)&&receipt.toString("utf8").includes(newSha));
  console.log("SCOPED_G12_W11_SOURCE_PASS "+file+" "+newSha);
 }
 for(const [file,h] of G12_W11_NEW){assert.throws(()=>read(previous,file));assert.equal(blob(read(current,file)),h);assert.equal(blob(fs.readFileSync(path.join(root,file))),h);}
 for(const [file,o,h] of G12_W11_UPDATED){assert.equal(blob(read(previous,file)),o);assert.equal(blob(read(current,file)),h);assert.equal(blob(fs.readFileSync(path.join(root,file))),h);}
 for(const [file,h] of G12_W11_EXISTING){assert.equal(blob(read(previous,file)),h);assert.equal(blob(read(current,file)),h);}
 for(const [file] of [...G12_W11_NEW,...G12_W11_UPDATED,...G12_W11_EXISTING])cp.execFileSync("python3",["-c","import sys, xml.etree.ElementTree as ET; root=ET.fromstring(sys.stdin.buffer.read()); assert root.tag=='{http://www.w3.org/2000/svg}svg'"],{cwd:root,input:read(current,file)});
 console.log("PASS #1039 W11 3 source locks, 6/6 valid SVG, exact hook and frozen W1-W10 diff");
}
const G12_W10_ROWS=[[9,"4571bac678c36c4fb06d6a7fde45b86703f8ebce","0ae1063568ddf02dec12f61ecc7733b643d1245a",7,"docs/thpt-preview/sgk/lop-12/chuong-iii/bai-9.md"],[10,"32f4eda1cfd151592eef5a35921ad872c1f644c4","adfe3511b1335aed52047f00c11ecb3ad830d287",7,"docs/thpt-preview/sgk/lop-12/chuong-iii/bai-10.md"]],G12_W10_NEW=[],G12_W10_UPDATED=[["docs/assets/images/thpt/FIG-G12-CHIII-B09-QUARTILES-R00.svg","51fd46bc69ee7c4279e5024aa29dc0e83651a1a7","e847496c567b7121d2121134401e36ead2040e1a"],["docs/assets/images/thpt/FIG-G12-CHIII-B09-RANGE-IQR-R00.svg","b0cdf1b1f00c5d70525dc8c889da48211aeb8cac","1a3cb6397d8ed8ca634724e2084c909747dee836"],["docs/assets/images/thpt/FIG-G12-CHIII-B10-SPREAD-R00.svg","ddff354dca86b0cfa1a223a8245b87044a6e93b1","120a1a0e7b360c8cde1742459174d747bca87de0"]],G12_W10_EXISTING=[],G12_W10_FILES=["docs/thpt-preview/sgk/lop-12/chuong-iii/bai-9.md","docs/thpt-preview/sgk/lop-12/chuong-iii/bai-10.md","docs/assets/images/thpt/FIG-G12-CHIII-B09-QUARTILES-R00.svg","docs/assets/images/thpt/FIG-G12-CHIII-B09-RANGE-IQR-R00.svg","docs/assets/images/thpt/FIG-G12-CHIII-B10-SPREAD-R00.svg","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-sgk-golden-first-paint.cjs","scripts/test-thpt-scoped-lesson-browser.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"];
function verifyG12W10(previous,current,changed,expected){
 assert.equal(previous,"c35c2c01cea98a26dcdd071041a6c98da720bc53");
 assert.deepEqual(changed.slice().sort(),G12_W10_FILES.slice().sort());
 assert.deepEqual(expected.slice().sort(),G12_W10_ROWS.map(x=>x[4]).sort());
 const read=(ref,file)=>cp.execFileSync("git",["show",ref+":"+file],{cwd:root});
 const receipt=read(current,G11_W1_HANDOFF);
 assert.equal(blob(read(previous,G11_W1_HANDOFF)),"e1dc88b8262862bafb88d51d0c0cf377823a48a9");assert.equal(blob(receipt),"07a9d19fa60117f99130788f4bc8c58752d1834f");assert(receipt.toString("utf8").startsWith(read(previous,G11_W1_HANDOFF).toString("utf8")));
 const hook="hooks/sgk_golden_first_paint.py",old=read(previous,hook).toString("utf8"),now=read(current,hook).toString("utf8");
 assert.equal(blob(read(current,hook)),"75ec11492a16789608dd23b51ebcbf896d578846");
 const a=now.indexOf("# #1039 W10 exact G12 ChIII routes;"),b=now.indexOf("def on_post_page(output, page, config):");assert(a>0&&b>a);
 assert.equal((now.slice(0,a)+now.slice(b)).replace("    if uri in _W10_ROUTES:\n        return _render_w10(output, uri)\n",""),old,"prior route hook unchanged");
 for(const [n,oldSha,newSha,count,file] of G12_W10_ROWS){
  assert.equal(blob(read(previous,file)),oldSha);
  const source=read(current,file),content=source.toString("utf8");
  assert.equal(blob(source),newSha);assert.equal(blob(fs.readFileSync(path.join(root,file))),newSha);
  assert.deepEqual(content.split("\n").filter(l=>l.startsWith('=== "')),['=== "Khám phá kiến thức"','=== "Kiến thức SGK"','=== "Ví dụ"','=== "Lỗi thường gặp"']);
  assert(!/data-(?:thpt-readiness|mastery-credit|mastery-write|thpt-final|g12-chi-selfcheck|g12-chapter-selfcheck)/i.test(content));
  const recovery=content.split('=== "Lỗi thường gặp"')[1];
  assert.equal(recovery.split("\n").filter(l=>/^    ### 4\.\d+\./.test(l)).length,count);
  assert.equal(recovery.split("\n").filter(l=>l.startsWith("    **Sai ở đâu:**")).length,count);
  assert(recovery.includes("**Học tiếp:**")&&recovery.includes('class="thpt-r4-footnote"'));
  assert(receipt.toString("utf8").includes(oldSha)&&receipt.toString("utf8").includes(newSha));
  console.log("SCOPED_G12_W10_SOURCE_PASS "+file+" "+newSha);
 }
 for(const [file,h] of G12_W10_NEW){assert.throws(()=>read(previous,file));assert.equal(blob(read(current,file)),h);assert.equal(blob(fs.readFileSync(path.join(root,file))),h);}
 for(const [file,o,h] of G12_W10_UPDATED){assert.equal(blob(read(previous,file)),o);assert.equal(blob(read(current,file)),h);assert.equal(blob(fs.readFileSync(path.join(root,file))),h);}
 for(const [file,h] of G12_W10_EXISTING){assert.equal(blob(read(previous,file)),h);assert.equal(blob(read(current,file)),h);}
 for(const [file] of [...G12_W10_NEW,...G12_W10_UPDATED,...G12_W10_EXISTING])cp.execFileSync("python3",["-c","import sys, xml.etree.ElementTree as ET; root=ET.fromstring(sys.stdin.buffer.read()); assert root.tag=='{http://www.w3.org/2000/svg}svg'"],{cwd:root,input:read(current,file)});
 console.log("PASS #1039 W10 2 source locks, 3/3 valid SVG, exact hook and frozen W1-W9 diff");
}
const G12_W9_ROWS=[[6,"8991c8a30487fdf1db65cf31a19b0ed68ef52518","e3091a022ce73d2a355aaf8dd1acc292e7bafce3",8,"docs/thpt-preview/sgk/lop-12/chuong-ii/bai-6.md"],[7,"4bfbed222d552f3ccb9c965616245015930ab1cd","c87cefbfe3dfe2bdcce4976a40aa1596f8fca31c",7,"docs/thpt-preview/sgk/lop-12/chuong-ii/bai-7.md"],[8,"c85922428c85ddeb48cec5e2bd5953faa44207c8","757b85da3ebdc143be51b7816b142dbde13b11da",8,"docs/thpt-preview/sgk/lop-12/chuong-ii/bai-8.md"]],G12_W9_NEW=[["docs/assets/images/thpt/G12_B06_FIG02_TETRA_CENTROID_AUTHORING_20261124.svg","ec871f9e8285f1f6ad203214b975a76783c7174b"],["docs/assets/images/thpt/G12_B06_FIG03_VECTOR_ANGLE_AUTHORING_20261124.svg","a3133220a16675ca3c719deea35b9d7e6476dc85"],["docs/assets/images/thpt/G12_B07_FIG02_DISPLACEMENT_AUTHORING_20261124.svg","498a7f687a493dc3cf4b03d4423eba5025559d8b"],["docs/assets/images/thpt/G12_B08_FIG02_PYRAMID_AUTHORING_20261124.svg","0d8e4b4fd4bbdc1c896143a74307b3ea5ff25367"],["docs/assets/images/thpt/G12_B08_FIG03_ROOF_AUTHORING_20261124.svg","7a9920c100572366b38937eda4ee22d769441aa5"]],G12_W9_UPDATED=[["docs/assets/images/thpt/FIG-G12-CHII-B07-R00.svg","979ca912e99fdadfc4e91ae0edad5db34fc13928","053c483242c92f11097b5d577aeb4ad5f832497a"]],G12_W9_EXISTING=[["docs/assets/images/thpt/FIG-G12-CHII-B06-R00.svg","26e388d873521aa5b0bae945343e69357490ec16"],["docs/assets/images/thpt/FIG-G12-CHII-B08-R00.svg","13445da079245a556a08e7a57069d9987097a0be"]],G12_W9_FILES=["docs/thpt-preview/sgk/lop-12/chuong-ii/bai-6.md","docs/thpt-preview/sgk/lop-12/chuong-ii/bai-7.md","docs/thpt-preview/sgk/lop-12/chuong-ii/bai-8.md","docs/assets/images/thpt/G12_B06_FIG02_TETRA_CENTROID_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B06_FIG03_VECTOR_ANGLE_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B07_FIG02_DISPLACEMENT_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B08_FIG02_PYRAMID_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B08_FIG03_ROOF_AUTHORING_20261124.svg","docs/assets/images/thpt/FIG-G12-CHII-B07-R00.svg","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-sgk-golden-first-paint.cjs","scripts/test-thpt-scoped-lesson-browser.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"];
function verifyG12W9(previous,current,changed,expected){
 assert.equal(previous,"9dfb840e8967abcd0b5e6788d435447899524bbd");
 assert.deepEqual(changed.slice().sort(),G12_W9_FILES.slice().sort());
 assert.deepEqual(expected.slice().sort(),G12_W9_ROWS.map(x=>x[4]).sort());
 const read=(ref,file)=>cp.execFileSync("git",["show",ref+":"+file],{cwd:root});
 const receipt=read(current,G11_W1_HANDOFF);
 assert.equal(blob(read(previous,G11_W1_HANDOFF)),"9571d99d63a0432a6c113d5125eb91db3774e824");assert.equal(blob(receipt),"e1dc88b8262862bafb88d51d0c0cf377823a48a9");assert(receipt.toString("utf8").startsWith(read(previous,G11_W1_HANDOFF).toString("utf8")));
 const hook="hooks/sgk_golden_first_paint.py",old=read(previous,hook).toString("utf8"),now=read(current,hook).toString("utf8");
 assert.equal(blob(read(current,hook)),"ce10de61ce50a1334b29f3004556ddf25c4a05c9");
 const a=now.indexOf("# #1039 W9 exact G12 ChII routes;"),b=now.indexOf("def on_post_page(output, page, config):");assert(a>0&&b>a);
 assert.equal((now.slice(0,a)+now.slice(b)).replace("    if uri in _W9_ROUTES:\n        return _render_w9(output, uri)\n",""),old,"prior route hook unchanged");
 for(const [n,oldSha,newSha,count,file] of G12_W9_ROWS){
  assert.equal(blob(read(previous,file)),oldSha);
  const source=read(current,file),content=source.toString("utf8");
  assert.equal(blob(source),newSha);assert.equal(blob(fs.readFileSync(path.join(root,file))),newSha);
  assert.deepEqual(content.split("\n").filter(l=>l.startsWith('=== "')),['=== "Khám phá kiến thức"','=== "Kiến thức SGK"','=== "Ví dụ"','=== "Lỗi thường gặp"']);
  assert(!/data-(?:thpt-readiness|mastery-credit|mastery-write|thpt-final|g12-chi-selfcheck|g12-chapter-selfcheck)/i.test(content));
  const recovery=content.split('=== "Lỗi thường gặp"')[1];
  assert.equal(recovery.split("\n").filter(l=>/^    ### 4\.\d+\./.test(l)).length,count);
  assert.equal(recovery.split("\n").filter(l=>l.startsWith("    **Sai ở đâu:**")).length,count);
  assert(recovery.includes("**Học tiếp:**")&&recovery.includes('class="thpt-r4-footnote"'));
  assert(receipt.toString("utf8").includes(oldSha)&&receipt.toString("utf8").includes(newSha));
  console.log("SCOPED_G12_W9_SOURCE_PASS "+file+" "+newSha);
 }
 for(const [file,h] of G12_W9_NEW){assert.throws(()=>read(previous,file));assert.equal(blob(read(current,file)),h);assert.equal(blob(fs.readFileSync(path.join(root,file))),h);}
 for(const [file,o,h] of G12_W9_UPDATED){assert.equal(blob(read(previous,file)),o);assert.equal(blob(read(current,file)),h);assert.equal(blob(fs.readFileSync(path.join(root,file))),h);}
 for(const [file,h] of G12_W9_EXISTING){assert.equal(blob(read(previous,file)),h);assert.equal(blob(read(current,file)),h);}
 for(const [file] of [...G12_W9_NEW,...G12_W9_UPDATED,...G12_W9_EXISTING])cp.execFileSync("python3",["-c","import sys, xml.etree.ElementTree as ET; root=ET.fromstring(sys.stdin.buffer.read()); assert root.tag=='{http://www.w3.org/2000/svg}svg'"],{cwd:root,input:read(current,file)});
 console.log("PASS #1039 W9 3 source locks, 8/8 valid SVG, exact hook and frozen W1-W8 diff");
}
const G12_W8_ROWS=[[1,"64f6a142a88e8c4dd63dff3f7d2220787fcdec5c","28f6b83ab28731f51667164fe5f239cb868b948c",7,"docs/thpt-preview/sgk/lop-12/chuong-i/bai-1.md"],[2,"d6e517a980ec9259345285964f4c42767faa6122","b40ce4dad554e94a6cb88c5b5d20274f91e8c336",7,"docs/thpt-preview/sgk/lop-12/chuong-i/bai-2.md"],[3,"02f4b8a446e89d824b7b08c833fc306ca9db02c6","be100bd245a9caaa511c98f88b5d76280d9f503f",7,"docs/thpt-preview/sgk/lop-12/chuong-i/bai-3.md"],[4,"a9a9a8f823ee85fe53014150b5cda31201867a4d","d3949a0120e7fd19a690a2ac6f7eddd25cc922f4",7,"docs/thpt-preview/sgk/lop-12/chuong-i/bai-4.md"],[5,"54c9c90323f7b1d9077270d90627864f5a468c03","6f9a867a541530c2c44ca03f016eb59348977306",8,"docs/thpt-preview/sgk/lop-12/chuong-i/bai-5.md"]];
const G12_W8_NEW=[["docs/assets/images/thpt/G12_B01_FIG02_READ_DERIVATIVE_AUTHORING_20261124.svg","4720ec1c26e8ecc6ff5707281b9aba3465d31df5"],["docs/assets/images/thpt/G12_B03_FIG02_OBLIQUE_AUTHORING_20261124.svg","62d2cf3e7604d331ea26ac7b49f863ae8793d97a"],["docs/assets/images/thpt/G12_B04_FIG03_QUADRATIC_AUTHORING_20261124.svg","432f122215bf6ea897f5d13b3eab7327cf14e9b9"],["docs/assets/images/thpt/G12_B04_FIG04_CUBIC_MONOTONE_AUTHORING_20261124.svg","a338c274f85e030033a524810639510e099989bf"],["docs/assets/images/thpt/G12_B04_FIG05_OBLIQUE_EXTREMA_AUTHORING_20261124.svg","9f800741b8d016e3039e6cff35721b22a6dc0a81"],["docs/assets/images/thpt/G12_B04_FIG06_OBLIQUE_MONOTONE_AUTHORING_20261124.svg","1f34ef45faeeaeaa38f5c1d6823ba713e7cc3b4c"],["docs/assets/images/thpt/G12_B04_FIG07_CHECK_QUADRATIC_20261124.svg","585b277a399a8961ea6617ec0851e2235ed06faa"],["docs/assets/images/thpt/G12_B04_FIG08_CHECK_CUBIC_20261124.svg","878b6f0ed35799daeef7f1db33781129277776cd"],["docs/assets/images/thpt/G12_B04_FIG09_CHECK_RATIONAL_20261124.svg","e846dbbc0cb8374a825179f8e4a43e6149f1efdb"],["docs/assets/images/thpt/G12_B04_FIG10_CHECK_OBLIQUE_20261124.svg","64ba475d59101e1dc0311f5fab8b9922162c019b"],["docs/assets/images/thpt/G12_B05_FIG02_BOX_NET_AUTHORING_20261124.svg","abc066d14e33a6e1fcec829aae34e47d4f0a273e"],["docs/assets/images/thpt/G12_B05_FIG03_TRAVEL_AUTHORING_20261124.svg","8303761922a9fa53e41b5dad2482ac9bb9b6950a"],["docs/assets/images/thpt/G12_B05_FIG04_POLLUTION_COST_AUTHORING_20261124.svg","92d73b38bb81df8b34c3d34041ceb8e9f7e4dac1"],["docs/assets/images/thpt/G12_B05_FIG05_PROFIT_AUTHORING_20261124.svg","340dc2bea3ce34ca1cc06c608c50c16deb19f1d4"]];
const G12_W8_UPDATED=[["docs/assets/images/thpt/G12_B02_FIG01_GLOBAL_MIN_MAX_CLOSED_INTERVAL_R00.svg","057991020c0f9349f160047cd87ae35ce03a87ef","cd8c5bea9b17bb89aa0edcd40f49dd317d834c86"]];
const G12_W8_EXISTING=[["docs/assets/images/thpt/G12_B01_FIG01_DERIVATIVE_SIGN_R00.svg","e2696224533994826104e6c505d9dab26fc0a2e2"],["docs/assets/images/thpt/G12_B03_FIG01_ASYMPTOTES_R00.svg","802f01f5b8dce392e3a064a54efe33ae1aea44fc"],["docs/assets/images/thpt/G12_B04_FIG01_RATIONAL_SURVEY_R00.svg","529b05d33fb0347dab70587c84c8ec08789c5c98"],["docs/assets/images/thpt/G12_B04_FIG02_CUBIC_SURVEY_R00.svg","8e4cf830e5aa1cac3fe37b9b3c3d93d9b34c006b"],["docs/assets/images/thpt/G12_B05_FIG01_BOX_VOLUME_R00.svg","eacd5ba60f25d87c102917a55d314fb16d6f8341"]];
const G12_W8_LESSONS=["docs/thpt-preview/sgk/lop-12/chuong-i/bai-1.md","docs/thpt-preview/sgk/lop-12/chuong-i/bai-2.md","docs/thpt-preview/sgk/lop-12/chuong-i/bai-3.md","docs/thpt-preview/sgk/lop-12/chuong-i/bai-4.md","docs/thpt-preview/sgk/lop-12/chuong-i/bai-5.md"];
const G12_W8_FILES=["docs/thpt-preview/sgk/lop-12/chuong-i/bai-1.md","docs/thpt-preview/sgk/lop-12/chuong-i/bai-2.md","docs/thpt-preview/sgk/lop-12/chuong-i/bai-3.md","docs/thpt-preview/sgk/lop-12/chuong-i/bai-4.md","docs/thpt-preview/sgk/lop-12/chuong-i/bai-5.md","docs/assets/images/thpt/G12_B01_FIG02_READ_DERIVATIVE_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B03_FIG02_OBLIQUE_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B04_FIG03_QUADRATIC_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B04_FIG04_CUBIC_MONOTONE_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B04_FIG05_OBLIQUE_EXTREMA_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B04_FIG06_OBLIQUE_MONOTONE_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B04_FIG07_CHECK_QUADRATIC_20261124.svg","docs/assets/images/thpt/G12_B04_FIG08_CHECK_CUBIC_20261124.svg","docs/assets/images/thpt/G12_B04_FIG09_CHECK_RATIONAL_20261124.svg","docs/assets/images/thpt/G12_B04_FIG10_CHECK_OBLIQUE_20261124.svg","docs/assets/images/thpt/G12_B05_FIG02_BOX_NET_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B05_FIG03_TRAVEL_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B05_FIG04_POLLUTION_COST_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B05_FIG05_PROFIT_AUTHORING_20261124.svg","docs/assets/images/thpt/G12_B02_FIG01_GLOBAL_MIN_MAX_CLOSED_INTERVAL_R00.svg","prototypes/thpt/release-handoffs/SGK_11_12_KNOWLEDGE_UPGRADE_HANDOFF_1039.md","hooks/sgk_golden_first_paint.py","scripts/test-thpt-release-impact.cjs","scripts/test-thpt-scoped-deploy-proof.cjs","scripts/test-sgk-golden-first-paint.cjs","scripts/test-thpt-scoped-lesson-browser.cjs",".github/workflows/sgk-golden-first-paint-qa.yml",".github/workflows/thpt-scoped-release-qa.yml"];
function verifyG12W8(previous,current,changed,expected){
 assert.equal(previous,"11acdb75e861442744c207537935e01ad7747a07","W8 exact published W7 main");
 assert.deepEqual(changed.slice().sort(),G12_W8_FILES.slice().sort());
 assert.deepEqual(expected.slice().sort(),G12_W8_LESSONS.slice().sort());
 const read=(ref,file)=>cp.execFileSync("git",["show",ref+":"+file],{cwd:root});
 const receipt=read(current,G11_W1_HANDOFF);
 assert.equal(blob(read(previous,G11_W1_HANDOFF)),"ddf34e9a408a675e16812680505f50738c83a475");
 assert.equal(blob(receipt),"9571d99d63a0432a6c113d5125eb91db3774e824");
 assert(receipt.toString("utf8").startsWith(read(previous,G11_W1_HANDOFF).toString("utf8")));
 const hook="hooks/sgk_golden_first_paint.py";
 const oldHook=read(previous,hook).toString("utf8"),nowHook=read(current,hook).toString("utf8");
 assert.equal(blob(read(current,hook)),"9e731c94180134ac252be4c8e5b1f949c058fb2e");
 const start=nowHook.indexOf("# #1039 W8 exact G12 ChI routes;");
 const end=nowHook.indexOf("def on_post_page(output, page, config):");
 assert(start>0&&end>start);
 assert.equal((nowHook.slice(0,start)+nowHook.slice(end)).replace("    if uri in _W8_ROUTES:\n        return _render_w8(output, uri)\n",""),oldHook,"prior routes unchanged");
 for(const file of ["docs/thpt-preview/sgk/lop-11/chuong-i/bai-1.md",...G11_W7_LESSONS,...G11_W6_LESSONS,...G11_W5_LESSONS,...G11_W4_LESSONS,...G11_W3_LESSONS,...G11_W2_LESSONS,...G11_W1_LESSONS])assert.equal(blob(read(previous,file)),blob(read(current,file)));
 for(const [n,oldSha,newSha,count,file] of G12_W8_ROWS){
  assert.equal(blob(read(previous,file)),oldSha);
  const source=read(current,file),content=source.toString("utf8");
  assert.equal(blob(source),newSha);assert.equal(blob(fs.readFileSync(path.join(root,file))),newSha);
  assert.deepEqual(content.split("\n").filter(l=>l.startsWith('=== "')),['=== "Khám phá kiến thức"','=== "Kiến thức SGK"','=== "Ví dụ"','=== "Lỗi thường gặp"']);
  assert(!/data-(?:thpt-readiness|mastery-credit|mastery-write|thpt-final|g12-chi-selfcheck|g12-chapter-selfcheck)/i.test(content));
  const recovery=content.split('=== "Lỗi thường gặp"')[1];
  assert.equal(recovery.split("\n").filter(l=>/^    ### 4\.\d+\./.test(l)).length,count);
  assert.equal(recovery.split("\n").filter(l=>l.startsWith("    **Sai ở đâu:**")).length,count);
  assert(recovery.includes("**Học tiếp:**")&&recovery.includes('class="thpt-r4-footnote"'));
  assert(receipt.toString("utf8").includes(oldSha)&&receipt.toString("utf8").includes(newSha));
  console.log("SCOPED_G12_W8_SOURCE_PASS "+file+" "+newSha);
 }
 for(const [file,h] of [...G12_W8_EXISTING,...G11_W7_ASSETS,...G11_W6_NEW_ASSETS,...G11_W6_EXISTING_ASSETS,...G11_W5_NEW_ASSETS,...G11_W5_EXISTING_ASSETS,...G11_W4_NEW_ASSETS,...G11_W4_EXISTING_ASSETS,...G11_W3_NEW_ASSETS,...G11_W3_EXISTING_ASSETS,...G11_W2_ASSETS,...G11_W1_ASSETS]){
  assert.equal(blob(read(previous,file)),h);assert.equal(blob(read(current,file)),h);
 }
 for(const [file,h] of G12_W8_NEW){assert.throws(()=>read(previous,file),"new SVG cannot replace existing path");assert.equal(blob(read(current,file)),h);assert.equal(blob(fs.readFileSync(path.join(root,file))),h);}
 for(const [file,oldSha,h] of G12_W8_UPDATED){assert.equal(blob(read(previous,file)),oldSha);assert.equal(blob(read(current,file)),h);assert.equal(blob(fs.readFileSync(path.join(root,file))),h);}
 // SGK-REL-008: prove this exact XML escaping delta preserves the signed asset.
 const fixedFile="docs/assets/images/thpt/G12_B05_FIG04_POLLUTION_COST_AUTHORING_20261124.svg";
 const fixed=read(current,fixedFile).toString("utf8");
 const encoded="0≤x&lt;100",literal="0≤x<100";
 assert.equal(fixed.split(encoded).length,2,"one and only one escaped comparison");
 assert.equal(blob(Buffer.from(fixed.replace(encoded,literal),"utf8")),"fa76ba8469c7fb27e2fe3f83f8b8b3b8bf04a497","reverse escaping must reproduce exact signed AUTHORING SVG bytes");
 assert(receipt.toString("utf8").includes("fa76ba8469c7fb27e2fe3f83f8b8b3b8bf04a497")&&receipt.toString("utf8").includes("92d73b38bb81df8b34c3d34041ceb8e9f7e4dac1"));
 for(const [file] of [...G12_W8_NEW,...G12_W8_UPDATED,...G12_W8_EXISTING]){
  cp.execFileSync("python3",["-c","import sys, xml.etree.ElementTree as ET; root=ET.fromstring(sys.stdin.buffer.read()); assert root.tag=='{http://www.w3.org/2000/svg}svg'"],{cwd:root,input:read(current,file)});
 }
 console.log("PASS SGK-REL-008 exact reversible XML escape + 20/20 XML-valid SVGs");
 console.log("PASS #1039 W8 five source locks, 14 new/1 updated/5 reused SVG, frozen G11 and assessment boundary, exact hook");
}

function main(){
 const previous=process.env.BEFORE_SHA,current=process.env.HEAD_SHA;
 assert(sha(previous)&&sha(current),"Full nonzero main push before/head commits required");
 const checked=cp.execFileSync("git",["rev-parse","HEAD"],{cwd:root,encoding:"utf8"}).trim();
 assert.equal(checked,current,"Proof must run on exact main HEAD");
 const changed=cp.execFileSync("git",["diff","--no-renames","--name-only",previous,current],
  {cwd:root,encoding:"utf8"}).trim().split("\n").filter(Boolean);
 if(changed.length===G12_MATH_HOTFIX_FILES.length&&changed.every(x=>G12_MATH_HOTFIX_FILES.includes(x))){verifyG12MathHotfix(previous,current,changed,(process.env.SCOPED_LESSONS||"").split(",").filter(Boolean));return;}
 if(changed.length===G12_W11_FILES.length&&changed.every(x=>G12_W11_FILES.includes(x))){verifyG12W11(previous,current,changed,(process.env.SCOPED_LESSONS||"").split(",").filter(Boolean));return;}
 if(changed.length===G12_W10_FILES.length&&changed.every(x=>G12_W10_FILES.includes(x))){verifyG12W10(previous,current,changed,(process.env.SCOPED_LESSONS||"").split(",").filter(Boolean));return;}
 if(changed.length===G12_W9_FILES.length&&changed.every(x=>G12_W9_FILES.includes(x))){verifyG12W9(previous,current,changed,(process.env.SCOPED_LESSONS||"").split(",").filter(Boolean));return;}
 if(changed.length===G12_W8_FILES.length&&changed.every(x=>G12_W8_FILES.includes(x))){
  verifyG12W8(previous,current,changed,(process.env.SCOPED_LESSONS||"").split(",").filter(Boolean));return;
 }
 if(changed.length===G11_W7_FILES.length&&changed.every(x=>G11_W7_FILES.includes(x))){
  verifyG11W7(previous,current,changed,(process.env.SCOPED_LESSONS||"").split(",").filter(Boolean));return;
 }
 if(changed.length===G11_W6_FILES.length&&changed.every(x=>G11_W6_FILES.includes(x))){
  verifyG11W6(previous,current,changed,(process.env.SCOPED_LESSONS||"").split(",").filter(Boolean));return;
 }
 if(changed.length===G11_W5_FILES.length&&changed.every(x=>G11_W5_FILES.includes(x))){
  verifyG11W5(previous,current,changed,(process.env.SCOPED_LESSONS||"").split(",").filter(Boolean));return;
 }
 if(changed.length===G11_W4_FILES.length&&changed.every(x=>G11_W4_FILES.includes(x))){
  verifyG11W4(previous,current,changed,(process.env.SCOPED_LESSONS||"").split(",").filter(Boolean));return;
 }
 if(changed.length===G11_W3_FILES.length&&changed.every(x=>G11_W3_FILES.includes(x))){
  verifyG11W3(previous,current,changed,(process.env.SCOPED_LESSONS||"").split(",").filter(Boolean));return;
 }
 if(changed.length===G11_W2_FILES.length&&changed.every(x=>G11_W2_FILES.includes(x))){
  verifyG11W2(previous,current,changed,(process.env.SCOPED_LESSONS||"").split(",").filter(Boolean));return;
 }
 if(changed.length===G11_W1_REVIEW_DELTA_FILES.length&&changed.every(x=>G11_W1_REVIEW_DELTA_FILES.includes(x))){
  verifyW1ReviewDelta(previous,current,changed,(process.env.SCOPED_LESSONS||"").split(",").filter(Boolean));return;
 }
 if(changed.length===G11_W1_TAB4_HOTFIX_FILES.length&&changed.every(x=>G11_W1_TAB4_HOTFIX_FILES.includes(x))){
  verifyW1Tab4Hotfix(previous,current,changed,(process.env.SCOPED_LESSONS||"").split(",").filter(Boolean));return;
 }
 if(changed.includes(G11_W1_HANDOFF)){
  verifyG11W1(previous,current,changed,(process.env.SCOPED_LESSONS||"").split(",").filter(Boolean));
  return;
 }
 const lessonPaths=changed.filter(x=>LESSON.test(x)),receipts=changed.filter(x=>RECEIPT.test(x));
 const batch=PLACEMENT_BATCHES.find(b=>
  b.lessons.length===lessonPaths.length&&b.lessons.every(x=>lessonPaths.includes(x))&&
  receipts.includes(b.receipt));
 assert(lessonPaths.length===1||Boolean(batch),
  "Only one lesson or one exact signed B07–B14/B15–B18/B19–B26 owner batch");
 assert(receipts.length>=1,"Scoped production requires changed signed Q18 receipt");
 if(batch)assert.equal(receipts.length,1,"Placement batch must have one exact Q18 receipt");
 const expected=(process.env.SCOPED_LESSONS||"").split(",").filter(Boolean).sort();
 assert.deepEqual(expected,lessonPaths.slice().sort(),
  "Scoped classifier must identify every changed canonical lesson");
 for(const lesson of lessonPaths){
  const now=fs.readFileSync(path.join(root,lesson));
  const previousContent=cp.execFileSync("git",["show",previous+":"+lesson],{cwd:root});
  const prev=blob(previousContent),currentBlob=blob(now);
  const candidate=receipts.filter(p=>{
   const receipt=fs.readFileSync(path.join(root,p),"utf8");
   return receipt.includes(lesson)||
    receipt.includes("B"+String(lesson.match(/bai-(\d+)\.md$/)[1]).padStart(2,"0"))||
    Boolean(scopedBatchRow(receipt,lesson));
  });
  assert(candidate.length>=1,"No lesson-bound Q18 receipt for "+lesson);
  let matched=false,errors=[];
  for(const p of candidate){try{
   verifySource(previousContent.toString("utf8"),now.toString("utf8"),
    fs.readFileSync(path.join(root,p),"utf8"),prev,currentBlob,lesson);
   matched=true;break;
  }catch(e){errors.push(p+": "+e.message)}}
  assert(matched,"No exact candidate receipt validates "+lesson+": "+errors.join("; "));
  console.log("SCOPED_DEPLOY_SOURCE_PASS "+JSON.stringify({
   lesson,previous_sha:prev,candidate_sha:currentBlob,
   first_tries:tokenSet(now.toString("utf8"),"data-thpt-first-try-id").length,
   q16:"NO_ASSESSMENT_EXPOSURE",status:"TECHNICAL_SOURCE_ONLY_NOT_ACADEMIC_PASS"}));
 }
}
if(process.argv.includes("--self-test"))selfTest();else main();
