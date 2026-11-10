#!/usr/bin/env node
"use strict";
/*
 * Governance DRAFT ONLY. Structural preflight for a future Q18 self-QA receipt.
 * This script NEVER grants Academic/PED PASS, CONTENT_READY or release authority.
 * Production handoff V2 gate remains independent-review-only until owner migration.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const crypto=require("node:crypto");
const root=path.resolve(__dirname,"..");
const sha=/^[a-f0-9]{40}$/;
const id=/^[A-Za-z0-9_.-]+$/;
const bad=/REPLACE|PENDING|TBD|CHUA_CO|NOT_REVIEWED/i;
function field(source,name){
 const m=[...source.matchAll(new RegExp("^"+name+": ([^\r\n]+)$","gm"))];
 if(m.length!==1)throw new Error("MISSING_OR_DUPLICATE_FIELD:"+name);
 const v=m[0][1].trim();
 if(!v||bad.test(v))throw new Error("UNVERIFIED_FIELD:"+name);
 return v;
}
function table(source,heading,width,allowEmpty=false){
 const marker="## "+heading;
 const start=source.indexOf(marker+"\n");
 if(start<0)throw new Error("MISSING_SECTION:"+heading);
 const tail=source.slice(start+marker.length).split(/\n## /,2)[0].split(/\r?\n/);
 const rows=tail.filter(line=>line.trim().startsWith("|")).map(line=>line.split("|").slice(1,-1).map(s=>s.trim()));
 if(rows.length<2||(!allowEmpty&&rows.length<3))throw new Error("INCOMPLETE_TABLE:"+heading);
 const values=rows.slice(2);
 if(values.some(row=>row.length!==width||row.some(s=>!s||bad.test(s))))throw new Error("INVALID_ROW:"+heading);
 return values;
}
function validateReceipt(source,options={}){
 const errors=[];
 const check=(condition,label)=>{if(!condition)errors.push(label)};
 let meta;
 try{
  meta={};
  for(const key of [
   "PACKET_ID","STANDARD_ID","STANDARD_VERSION","Q18_VERIFICATION_MODE",
   "LEARNING_PATH","RELEASE_SCOPE","BASELINE_REVIEW_RECEIPT_PATH",
   "BASELINE_REVIEW_RECEIPT_BLOB","S1_SOURCE","OUTCOME_SCOPE",
   "ASSESSMENT_MODE","Q15_Q16_DELTA","RD1_CUSTODY_DELTA",
   "FINAL_SUBMIT_DELTA","MASTERY_ACTIVATION","OPEN_P0","OPEN_P1",
   "MATH_SELF_CHECK","PED_SELF_CHECK","OWNER_POLICY_APPLICABLE","CONTENT_OWNER_LANE","CONTENT_OWNER_SIGNOFF"
  ])meta[key]=field(source,key);
 }catch(e){errors.push(e.message);return {status:"HOLD",errors}}
 const equals={
  STANDARD_ID:"SLM-THPT-QUALITY-ONE",
  STANDARD_VERSION:"2.0.0",
  Q18_VERIFICATION_MODE:"OWNER_SELF_VERIFIED_ENRICHMENT",
  LEARNING_PATH:"SGK_CHAPTER",
  RELEASE_SCOPE:"SGK_CHAPTER_KNOWLEDGE_UPDATE_ONLY",
  ASSESSMENT_MODE:"CLIENT_SELF_CHECK_NO_MASTERY",
  Q15_Q16_DELTA:"NONE",
  RD1_CUSTODY_DELTA:"NONE",
  FINAL_SUBMIT_DELTA:"NONE",
  MASTERY_ACTIVATION:"NO",
  OPEN_P0:"0",
  OPEN_P1:"0",
  MATH_SELF_CHECK:"PASS",
  PED_SELF_CHECK:"PASS",
  OWNER_POLICY_APPLICABLE:"YES_EFFECTIVE",
   CONTENT_OWNER_LANE:"RELEASE"
 };
 for(const [k,v] of Object.entries(equals))check(meta[k]===v,"BOUNDARY_MISMATCH:"+k);
 check(sha.test(meta.BASELINE_REVIEW_RECEIPT_BLOB),"BASELINE_RECEIPT_SHA_INVALID");
 check(/^prototypes\/thpt\/(?:review-packets|release-handoffs)\/[^.][A-Za-z0-9_./-]*\.md$/.test(meta.BASELINE_REVIEW_RECEIPT_PATH)&&!meta.BASELINE_REVIEW_RECEIPT_PATH.includes(".."),"BASELINE_RECEIPT_PATH_INVALID");
 check(meta.S1_SOURCE.includes("KNTT")&&/trang in/i.test(meta.S1_SOURCE),"S1_PRINTED_PAGE_UNVERIFIED");
 check(id.test(meta.PACKET_ID),"PACKET_ID_INVALID");
 check(meta.CONTENT_OWNER_SIGNOFF.length>=18,"CONTENT_OWNER_SIGNOFF_MISSING");
 const outcomes=new Set(meta.OUTCOME_SCOPE.split(",").map(x=>x.trim()));
 check(outcomes.size>0&&[...outcomes].every(x=>id.test(x)),"OUTCOME_SCOPE_INVALID");
 let sources,delta,figures;
 try{
  sources=table(source,"SOURCE_DELTA_EVIDENCE",8);
  delta=table(source,"MATERIAL_DELTA_CHECKS",9);
  figures=table(source,"FIGURE_DELTA_CHECKS",7,true);
 }catch(e){errors.push(e.message);return {status:"HOLD",errors}}
 const lessonMap=new Map();
 for(const r of sources){
  const [lesson,localOutcomes,baselinePath,baseline,nowPath,nowSha,scope,status]=r;
  check(id.test(lesson)&&!lessonMap.has(lesson),"DUPLICATE_OR_INVALID_LESSON:"+lesson);
  lessonMap.set(lesson,new Set(localOutcomes.split(",").map(x=>x.trim())));
  check([...lessonMap.get(lesson)].every(x=>outcomes.has(x)),"LESSON_OUTCOME_NOT_IN_SCOPE:"+lesson);
  check(/^docs\/thpt-preview\/sgk\/chuong-[ivx]+\/bai-[0-9]+\.md$/.test(nowPath),"CANDIDATE_NOT_KNOWLEDGE:"+lesson);
  check(nowPath===baselinePath,"BASELINE_PATH_MISMATCH:"+lesson);
  check(sha.test(baseline)&&sha.test(nowSha)&&baseline!==nowSha,"UNSAFE_SOURCE_BLOB:"+lesson);
  check(["EXPLANATION","WORKED_EXAMPLE","FIGURE","TEACHING_SEQUENCE","MIXED"].includes(scope),"UNAPPROVED_CHANGE_SCOPE:"+lesson);
  check(status==="PASS","SOURCE_ROW_HOLD:"+lesson);
  if(options.sourceBlobOf){
   try{check(options.sourceBlobOf(nowPath)===nowSha,"SOURCE_BLOB_MISMATCH:"+lesson)}
   catch{errors.push("CANDIDATE_FILE_UNAVAILABLE:"+lesson)}
  }
 }
 const seen=new Set();
 for(const r of delta){
  const [deltaId,lesson,outcome,kind,sourcePtr,s1,math,ped,status]=r;
  check(id.test(deltaId)&&!seen.has(deltaId),"DUPLICATE_OR_INVALID_DELTA:"+deltaId);seen.add(deltaId);
  check(lessonMap.has(lesson)&&lessonMap.get(lesson)?.has(outcome),"UNMAPPED_DELTA:"+deltaId);
  check(["WORKED_EXAMPLE","FIGURE","EXPLANATION","TEACHING_SEQUENCE"].includes(kind),"UNAPPROVED_DELTA_KIND:"+deltaId);
  check(sourcePtr.length>=8,"NO_SOURCE_POINTER:"+deltaId);
  check(/trang in/i.test(s1)&&s1.length>=12,"NO_VERIFIED_S1_PRINTED_PAGE:"+deltaId);
  check(math.length>=35&&/kiểm|thử|thay|đối chiếu|chứng minh/i.test(math),"NO_REASONED_MATH_CROSSCHECK:"+deltaId);
  check(ped.length>=35&&/vì sao|điều kiện|khi nào|hướng dẫn|cách đọc/i.test(ped),"NO_PED_EVIDENCE:"+deltaId);
  check(status==="PASS","DELTA_NOT_CLOSED:"+deltaId);
 }
 for(const r of figures){
  const [fig,lesson,src,blob,math,guide,status]=r;
  check(id.test(fig)&&lessonMap.has(lesson),"UNMAPPED_FIGURE:"+fig);
  check(/^docs\/assets\/images\/thpt\/[A-Za-z0-9_.-]+\.svg$/.test(src),"INVALID_FIGURE_PATH:"+fig);
  check(sha.test(blob),"INVALID_FIGURE_BLOB:"+fig);
  check(math.length>=25&&guide.length>=25,"FIGURE_MATH_OR_PED_MISSING:"+fig);
  check(status==="PASS","FIGURE_NOT_CHECKED:"+fig);
  if(options.sourceBlobOf){
   try{check(options.sourceBlobOf(src)===blob,"FIGURE_BLOB_MISMATCH:"+fig)}
   catch{errors.push("FIGURE_FILE_UNAVAILABLE:"+fig)}
  }
 }
 return {status:errors.length?"HOLD":"DRAFT_SCHEMA_CHECK_ONLY",errors,lessons:sources.length,deltas:delta.length,figures:figures.length};
}
function makeFixture(){
 const a="a".repeat(40),b="b".repeat(40),c="c".repeat(40),d="d".repeat(40);
 const page="docs/thpt-preview/sgk/chuong-i/bai-2.md";
 const fig="docs/assets/images/thpt/G10_B02_MEMBERSHIP_SUBSET_R01.svg";
 const r=[
"PACKET_ID: G10_B02_TEST_FIXTURE_ONLY",
"STANDARD_ID: SLM-THPT-QUALITY-ONE","STANDARD_VERSION: 2.0.0",
"Q18_VERIFICATION_MODE: OWNER_SELF_VERIFIED_ENRICHMENT",
"LEARNING_PATH: SGK_CHAPTER","RELEASE_SCOPE: SGK_CHAPTER_KNOWLEDGE_UPDATE_ONLY",
"BASELINE_REVIEW_RECEIPT_PATH: prototypes/thpt/review-packets/fixture-not-a-real-receipt.md",
"BASELINE_REVIEW_RECEIPT_BLOB: "+d,
"S1_SOURCE: SGK KNTT Toán 10, tập một, trang in 10 (SYNTHETIC FIXTURE, NOT VERIFIED)",
"OUTCOME_SCOPE: G10-O02","ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY",
"Q15_Q16_DELTA: NONE","RD1_CUSTODY_DELTA: NONE","FINAL_SUBMIT_DELTA: NONE",
"MASTERY_ACTIVATION: NO","OPEN_P0: 0","OPEN_P1: 0",
"MATH_SELF_CHECK: PASS","PED_SELF_CHECK: PASS",
"OWNER_POLICY_APPLICABLE: YES_EFFECTIVE",
"CONTENT_OWNER_LANE: RELEASE","CONTENT_OWNER_SIGNOFF: SYNTHETIC_TEST_ONLY_NOT_REAL",
"",
"## SOURCE_DELTA_EVIDENCE",
"| LESSON_ID | OUTCOME_IDS | BASELINE_SOURCE_PATH | BASELINE_SOURCE_BLOB | CANDIDATE_SOURCE_PATH | CANDIDATE_SOURCE_BLOB | CHANGE_SCOPE | STATUS |",
"|---|---|---|---|---|---|---|---|",
"| G10-B02 | G10-O02 | "+page+" | "+a+" | "+page+" | "+b+" | MIXED | PASS |",
"",
"## MATERIAL_DELTA_CHECKS",
"| DELTA_ID | LESSON_ID | OUTCOME_ID | KIND | SOURCE_POINTER | S1_RECEIPT | MATH_REASONING_AND_CROSSCHECK | PED_WHY_METHOD_LIMITS | STATUS |",
"|---|---|---|---|---|---|---|---|---|",
"| DX02 | G10-B02 | G10-O02 | WORKED_EXAMPLE | docs/sgk/b02 example | SGK KNTT trang in 10 | Giả sử A={2,4}, B={2}; kiểm B là tập con A bằng thay từng phần tử. | Giải thích vì sao phần tử khác tập con và cách đọc điều kiện. | PASS |",
"",
"## FIGURE_DELTA_CHECKS",
"| FIG_ID | LESSON_ID | SOURCE_ASSET_PATH | FIG_ASSET_BLOB | MATH_AND_LABEL_CHECK | PED_READING_GUIDE | STATUS |",
"|---|---|---|---|---|---|---|",
"| F02 | G10-B02 | "+fig+" | "+c+" | Kiểm hai tập hợp và các nhãn phần tử đúng với quan hệ. | Hướng dẫn cách đọc hình và nối lại với định nghĩa thuộc/tập con. | PASS |"
].join("\n");
 const map={[page]:b,[fig]:c};return{r,map};
}
function test(){
 const {r,map}=makeFixture();
 const valid=validateReceipt(r,{sourceBlobOf:p=>map[p]});
 assert.equal(valid.status,"DRAFT_SCHEMA_CHECK_ONLY",valid.errors.join(","));
 const bad=[
  r.replace("OWNER_POLICY_APPLICABLE: YES_EFFECTIVE","OWNER_POLICY_APPLICABLE: NO_UNTIL_EFFECTIVE"),
  r.replace("FINAL_SUBMIT_DELTA: NONE","FINAL_SUBMIT_DELTA: CHANGED"),
  r.replace("OPEN_P1: 0","OPEN_P1: 1"),
  r.replace("RD1_CUSTODY_DELTA: NONE","RD1_CUSTODY_DELTA: EXPOSED"),
  r.replace("MATH_SELF_CHECK: PASS","MATH_SELF_CHECK: HOLD"),
  r.replace("SGK KNTT trang in 10","S1 UNVERIFIED"),
  r.replace("Giả sử A={2,4}, B={2}; kiểm B là tập con A bằng thay từng phần tử.","Vẽ một hình đẹp."),
  r.replace("| F02 | G10-B02 |","| F02 | G10-B99 |"),
  r.replace(" | MIXED | PASS |"," | CORE_CHANGE | PASS |"),
  r.replace("BASELINE_REVIEW_RECEIPT_BLOB: "+ "d".repeat(40),"BASELINE_REVIEW_RECEIPT_BLOB: INVALID"),
  r.replace("| G10-B02 | G10-O02 |","| G10-B02 | NOT_AN_OUTCOME |"),
  r.replace("MASTERY_ACTIVATION: NO","MASTERY_ACTIVATION: YES"),
   r.replace("CONTENT_OWNER_LANE: RELEASE","CONTENT_OWNER_LANE: AUTHORING"),
   r.replace("CONTENT_OWNER_SIGNOFF: SYNTHETIC_TEST_ONLY_NOT_REAL","CONTENT_OWNER_SIGNOFF: X")
 ];
 bad.forEach((text,i)=>assert.equal(validateReceipt(text,{sourceBlobOf:p=>map[p]}).status,"HOLD","Negative case "+i));
 assert.equal(validateReceipt(r,{sourceBlobOf:p=>"e".repeat(40)}).status,"HOLD","Source blob must match actual bytes");
 const draft=fs.readFileSync(path.join(root,"prototypes/thpt/standard-changes/Q18_SELF_QA_EVIDENCE_TEMPLATE_DRAFT_20261110.md"),"utf8");
 assert(draft.includes("STANDARD_CONFLICT_HOLD")&&draft.includes("NOT AN APPROVED PACKET"));
 assert(!draft.includes("OWNER_POLICY_APPLICABLE: YES_EFFECTIVE"),"Draft template cannot carry approved policy flag");
 assert.equal(validateReceipt(draft).status,"HOLD","Unfilled draft template cannot pass");
 console.log("PASS Q18 self-QA DRAFT preflight: 1 synthetic positive + "+bad.length+" negative cases, blob drift, draft-template HOLD. NOT Academic/PED PASS; NO READY OR DEPLOY.");
}
if(process.argv.includes("--self-test"))test();
else if(process.argv.includes("--preview-receipt")){
 const pos=process.argv.indexOf("--preview-receipt"),file=process.argv[pos+1];
 assert(file&&file.startsWith("prototypes/thpt/")&&!file.includes(".."),"Preview only safe repo Markdown");
 const data=fs.readFileSync(path.join(root,file),"utf8");
 const blobOf=rel=>{
  const abs=path.join(root,rel),raw=fs.readFileSync(abs);
  return crypto.createHash("sha1").update(Buffer.from("blob "+raw.length+"\0")).update(raw).digest("hex");
 };
 const result=validateReceipt(data,{sourceBlobOf:blobOf});
 console.log(JSON.stringify({...result,authority:"DRAFT_SCHEMA_ONLY_NO_ACADEMIC_APPROVAL_NO_RELEASE"},null,2));
 if(result.status!=="DRAFT_SCHEMA_CHECK_ONLY")process.exitCode=1;
}
else{console.error("Use --self-test or --preview-receipt <repo-path>; no production authorization.");process.exitCode=2;}
