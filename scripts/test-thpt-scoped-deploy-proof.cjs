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
 for(const id of ["data-thpt-first-try-id","data-thpt-help-id","data-thpt-fig-id"]){
  assert.deepEqual(tokenSet(now,id),tokenSet(before,id),"Q15/source identity changed: "+id);
 }
 if(lesson==="docs/thpt-preview/sgk/chuong-ix/bai-26.md"&&
    receipt.includes("G10-CHIX-B26-S1-GOLDEN-ENRICHMENT-Q18-R01-20261121")){
  const historic=b26CanonicalAnswers(before),candidate=b26CanonicalAnswers(now);
  assert.equal(historic.length,5,"B26 history must include exactly five closed answer blocks");
  assert.deepEqual(candidate,historic,
    "B26 approved answers/rationales must be byte-identical after exact label normalization");
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
  if(lesson==="docs/thpt-preview/sgk/chuong-ix/bai-26.md"&&
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
function main(){
 const previous=process.env.BEFORE_SHA,current=process.env.HEAD_SHA;
 assert(sha(previous)&&sha(current),"Full nonzero main push before/head commits required");
 const checked=cp.execFileSync("git",["rev-parse","HEAD"],{cwd:root,encoding:"utf8"}).trim();
 assert.equal(checked,current,"Proof must run on exact main HEAD");
 const changed=cp.execFileSync("git",["diff","--no-renames","--name-only",previous,current],
  {cwd:root,encoding:"utf8"}).trim().split("\n").filter(Boolean);
 const lessonPaths=changed.filter(x=>LESSON.test(x)),receipts=changed.filter(x=>RECEIPT.test(x));
 const batch=PLACEMENT_BATCHES.find(b=>
  b.lessons.length===lessonPaths.length&&b.lessons.every(x=>lessonPaths.includes(x))&&
  receipts.includes(b.receipt));
 assert(lessonPaths.length===1||Boolean(batch),
  "Only one lesson or exact B07–B14/B15–B18 owner placement batch");
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
