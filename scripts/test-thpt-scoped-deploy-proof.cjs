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

function main(){
 const previous=process.env.BEFORE_SHA,current=process.env.HEAD_SHA;
 assert(sha(previous)&&sha(current),"Full nonzero main push before/head commits required");
 const checked=cp.execFileSync("git",["rev-parse","HEAD"],{cwd:root,encoding:"utf8"}).trim();
 assert.equal(checked,current,"Proof must run on exact main HEAD");
 const changed=cp.execFileSync("git",["diff","--no-renames","--name-only",previous,current],
  {cwd:root,encoding:"utf8"}).trim().split("\n").filter(Boolean);
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
