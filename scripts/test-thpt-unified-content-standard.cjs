#!/usr/bin/env node
"use strict";
/*
 * Governance-only validation. A GREEN result means the ONE normative document
 * has structurally complete coverage, NOT that any math/lesson is Academic/PED PASS.
 * Do not read private RD1, mutate student data or invoke deployment.
 */
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const ROOT=path.resolve(__dirname,"..");
const FILE="prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md";
const REQUIRED_SECTIONS=[
 "## 0. Luật thống nhất và thứ tự hiệu lực",
 "## I. Các định nghĩa bắt buộc",
 "## II. Ma trận chuẩn chất lượng duy nhất Q01–Q18",
 "## III. Cách đánh giá PASS theo đơn vị và chứng cứ",
 "## IV. Source S1 và đối chiếu số trang PDF (AUTHORING tự làm)",
 "## V. Một chương SGK độc lập và một chuyên đề độc lập",
 "## VI. Một luồng nghiệm thu duy nhất và ranh giới hai nhánh",
 "## VII. Snapshot + NotebookLM + Delta: bảo toàn kết quả hợp lệ",
 "## VIII. Checklist PRE-REVIEW (AUTHORING — không thể tự cấp PASS)",
 "## IX. Checklist PRE-HANDOFF V2 (AUTHORING)",
 "## X. Quản trị thay đổi và bảo đảm “một chuẩn”",
 "## XI. Truy vết nguồn → điều khoản và phân công"
];
function validate(source, agents, queue) {
 const failures=[],warnings=[];
 const fail=x=>failures.push(x);
 if(!source.includes("STANDARD_ID:** `SLM-THPT-QUALITY-ONE`"))fail("STANDARD_ID_NOT_EXPLICIT");
 const version=(source.match(/\*\*VERSION:\*\* `(\d+\.\d+\.\d+)`/)||[])[1];
 if(!["1.0.0","1.1.0"].includes(version))fail("VERSION_NOT_LOCKED");
 if(version==="1.1.0"){
   for(const token of ["SBT_REFERENCE_GAP_DOCUMENTED","SGK_CORE_AUTHORITY","REFERENCE_EXERCISE","ORIGINAL_AUTHORED","STANDARD_CHANGE_REQUEST_Q01_SOURCE_ROLES_20261103"]){
     if(!source.includes(token))fail("Q01_V1_1_MISSING_CONTROL:"+token);
   }
 }
 if(!source.includes("OFFICIAL_OWNER_APPROVED_MAIN") && !source.includes("OWNER_APPROVED_Q01_REVISION_PENDING_GOVERNANCE_QA_MERGE"))fail("OWNER_APPROVAL_RECEIPT_MISSING");
 for(const heading of REQUIRED_SECTIONS)if(!source.includes(heading))fail("MISSING_SECTION:"+heading);
 const tableStart=source.indexOf("## II. Ma trận chuẩn chất lượng duy nhất Q01–Q18");
 const tableEnd=source.indexOf("## III.",tableStart);
 if(tableStart<0||tableEnd<tableStart)fail("MAIN_MATRIX_MISSING");
 else {
   const main=source.slice(tableStart,tableEnd);
   const codes=[...main.matchAll(/^\|\s*\*\*(Q\d\d)\b/gm)].map(m=>m[1]);
   const expected=Array.from({length:18},(_,i)=>"Q"+String(i+1).padStart(2,"0"));
   if(JSON.stringify(codes)!==JSON.stringify(expected))fail("Q01_Q18_MATRIX_MUST_BE_SINGLE_ORDERED_SET:"+codes.join(","));
 }
 const need=[
 "SGK_CHAPTER","TOPIC","PED1","PED2","PED3","PED4","PED5","PED6",
 "D1","D2","D3","D4","D5","D6","A1–A7","AP1–AP5","R1–R5","P1/P2",
 "SOURCE_RECEIPT_CONFLICT","PRINTED_PAGE","PDF_PAGE_INDEX_1_BASED",
 "DELTA_A_UI","DELTA_B_SOURCE_EQUIVALENT","DELTA_C_ACADEMIC_MATERIAL","DELTA_D_BLOCKER",
 "CLIENT_SELF_CHECK_NO_MASTERY","SGK_CHAPTER_READINESS","TOPIC_READINESS",
 "SOURCE_BLOB","REVIEW_RECEIPT_BLOB","BLOCKED_BY_AUTHORING","BLOCKED_BY_RELEASE",
 "Temp_","STANDARD_CHANGE_REQUEST","5 Permanent Sources","PRIVATE","Final Submit"
 ];
 for(const token of need)if(!source.includes(token))fail("MISSING_NORMATIVE_CONCEPT:"+token);
 const otherFiles=[...source.matchAll(/`(0[678]_[A-Za-z0-9_.-]+)`/g)].map(m=>m[1]);
 if(otherFiles.length<1)warnings.push("OTHER_PROJECT_SOURCES_REFERENCED_BY_06_07_08_ALIAS_ONLY");
 if(agents&&!agents.includes(FILE))fail("AGENTS_MISSING_ONE_STANDARD_POINTER");
 if(queue&&!queue.includes(FILE))fail("RELEASE_README_MISSING_ONE_STANDARD_POINTER");
 const status=failures.length?"FAIL":"STANDARD_SCHEMA_PASS_NOT_ACADEMIC_PASS";
 return {status,failures,warnings,sourceFile:FILE,qualityCriteria:18};
}
function selfTest(){
 const make=()=>"STANDARD_ID:** `SLM-THPT-QUALITY-ONE` VERSION:** `1.0.0` OFFICIAL_OWNER_APPROVED_MAIN";
 assert(validate(make(),"","").status==="FAIL");
 let full=fs.readFileSync(path.join(ROOT,FILE),"utf8");
 let a=validate(full,"","");
 assert.equal(a.status,"STANDARD_SCHEMA_PASS_NOT_ACADEMIC_PASS",a.failures.join(";"));
 let bad=full.replace("| **Q18 Review/fidelity**","| **Q17 Review/fidelity**");
 assert(validate(bad,"","").failures.some(e=>e.startsWith("Q01_Q18_MATRIX")));
 if(/\*\*VERSION:\*\* `1\.1\.0`/.test(full)){
   assert(validate(full.replaceAll("SBT_REFERENCE_GAP_DOCUMENTED","SBT_REF_GAP_DELETED"),"","").failures.some(e=>e.startsWith("Q01_V1_1_MISSING_CONTROL")));
   assert(validate(full.replace("**VERSION:** `1.1.0`","**VERSION:** `9.9.9`"),"","").failures.includes("VERSION_NOT_LOCKED"));
 }
 console.log("PASS governance-only preflight: one standard version, owner decision, Q01 source roles, missing evidence, duplicate Q and negative invalid version (NOT Academic/PED PASS)");
}
if(process.argv.includes("--self-test"))selfTest();
const source=fs.readFileSync(path.join(ROOT,FILE),"utf8");
const agents=fs.readFileSync(path.join(ROOT,"AGENTS.md"),"utf8");
const queue=fs.readFileSync(path.join(ROOT,"prototypes/thpt/release-queue/README.md"),"utf8");
const result=validate(source,agents,queue);
console.log(JSON.stringify(result,null,2));
if(result.failures.length)process.exitCode=1;
