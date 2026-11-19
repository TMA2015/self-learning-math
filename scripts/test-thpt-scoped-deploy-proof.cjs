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
const firstAnswers=s=>[...s.matchAll(/<div class="thpt-r4-first-try-answer">[\s\S]*?<\/div>/g)].map(x=>x[0]).sort();
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
 assert.deepEqual(firstAnswers(now),firstAnswers(before),"Original First Try answer HTML changed");
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
