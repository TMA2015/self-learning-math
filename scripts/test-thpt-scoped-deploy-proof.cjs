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
  if(/^    \?\?\? question "(?:Đối chiếu(?: sau khi đã tự thao tác)?|(?:Em )?[Tt]ự mở đối chiếu sau khi đã (?:thử )?làm)"$/i.test(line)){
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
function verifySource(before,now,receipt,beforeBlob,currentBlob){
 assert.equal(blob(before),beforeBlob,"Before SHA does not match exact Git history");
 assert.equal(blob(now),currentBlob,"Current SHA does not match actual canonical file");
 assert.notEqual(beforeBlob,currentBlob,"No real changed canonical source");
 assert(receipt.includes(beforeBlob),"Q18 receipt must declare immutable previous lesson blob");
 // Require the exact new blob in a candidate SOURCE field, not a stray prose hash.
 const fields=[...receipt.matchAll(/^\*\*(?:CANDIDATE_[A-Z0-9_]*(?:SOURCE|LESSON)[A-Z0-9_]*|R\d\d_(?:CORRECTED_)?SOURCE_BLOB):\*\* `([a-f0-9]{40})`/gm)].map(m=>m[1]);
 assert(fields.includes(currentBlob),"Q18 receipt missing exact current SOURCE candidate field");
 for(const id of ["data-thpt-first-try-id","data-thpt-help-id","data-thpt-fig-id"]){
  assert.deepEqual(tokenSet(now,id),tokenSet(before,id),"Q15/source identity changed: "+id);
 }
 if(receipt.includes("G10-CHVIII-B23-G0G2-Q18") ||
    receipt.includes("G10-CHVIII-B23-VAN-DUNG-KIEM-LOI-R04-20261120")) {
  const original=b23CanonicalAnswers(before),candidate=b23CanonicalAnswers(now);
  assert.equal(original.length,4,"B23 historical four answer disclosures must be preserved");
  assert.deepEqual(candidate,original,"B23 approved disclosure label and D6 navigation may move, but all four original answer/rationale/remediation texts must match exactly");
 } else {
  assert.deepEqual(firstAnswers(now),firstAnswers(before),
   "Original canonical First Try answer (HTML or Markdown) changed");
 }
 assert.deepEqual([...now.matchAll(/^=== "([^"]+)"$/gm)].map(m=>m[1]),
  ["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"],
  "Golden four tabs changed");
 assert.equal(tokenSet(now,"data-thpt-first-try-id").length,firstAnswers(now).length,
  "First Try question/closed answer cardinality mismatch");
 assert(originalMathPreserved(before,now),"Original math expression removed without separate academic review");
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
 assert.equal(lessonPaths.length,1,"Scoped production lane authorizes exactly ONE canonical lesson per push");
 assert(receipts.length>=1,"Scoped production requires a changed Q18 receipt for that lesson");
 assert.equal(process.env.SCOPED_LESSONS,lessonPaths[0],"Changed lesson must equal CI classifier output");
 const lesson=lessonPaths[0],now=fs.readFileSync(path.join(root,lesson));
 const previousContent=cp.execFileSync("git",["show",previous+":"+lesson],{cwd:root});
 const prev=blob(previousContent),currentBlob=blob(now);
 const candidate=receipts.filter(p=>{
  const r=fs.readFileSync(path.join(root,p),"utf8");
  return r.includes(lesson)||r.includes("B"+String(lesson.match(/bai-(\d+)\.md$/)[1]).padStart(2,"0"));
 });
 assert(candidate.length>=1,"No lesson-bound changed Q18 receipt");
 let matched=false,errors=[];
 for(const p of candidate){try{
  verifySource(previousContent.toString("utf8"),now.toString("utf8"),
   fs.readFileSync(path.join(root,p),"utf8"),prev,currentBlob);
  matched=true;break;
 }catch(e){errors.push(p+": "+e.message)}}
 assert(matched,"No exact candidate Q18 receipt validates changed lesson: "+errors.join("; "));
 console.log("SCOPED_DEPLOY_SOURCE_PASS "+JSON.stringify({
  lesson,previous_sha:prev,candidate_sha:currentBlob,first_tries:tokenSet(now.toString("utf8"),"data-thpt-first-try-id").length,
  q16:"NO_ASSESSMENT_EXPOSURE",status:"TECHNICAL_SOURCE_ONLY_NOT_ACADEMIC_PASS"}));
}
if(process.argv.includes("--self-test"))selfTest();else main();
