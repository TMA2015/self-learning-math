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
 "## VIII. Checklist PRE-Q18 (AUTHORING — tự QA có chứng cứ, không mạo danh reviewer PASS)",
 "## IX. Checklist PRE-HANDOFF V2 (AUTHORING)",
 "## X. Quản trị thay đổi và bảo đảm “một chuẩn”",
 "## XI. Truy vết nguồn → điều khoản và phân công"
];
function validate(source, agents, queue) {
 const failures=[],warnings=[];
 const fail=x=>failures.push(x);
 if(!source.includes("STANDARD_ID:** `SLM-THPT-QUALITY-ONE`"))fail("STANDARD_ID_NOT_EXPLICIT");
 const version=(source.match(/\*\*VERSION:\*\* `(\d+\.\d+\.\d+)`/)||[])[1];
 if(!["1.0.0","1.1.0","1.2.0","2.0.0","3.0.0","3.0.1"].includes(version))fail("VERSION_NOT_LOCKED");
 if(["1.1.0","1.2.0","2.0.0","3.0.0","3.0.1"].includes(version)){
   for(const token of ["SBT_REFERENCE_GAP_DOCUMENTED","SGK_CORE_AUTHORITY","REFERENCE_EXERCISE","ORIGINAL_AUTHORED","STANDARD_CHANGE_REQUEST_Q01_SOURCE_ROLES_20261103"]){
     if(!source.includes(token))fail("Q01_V1_1_MISSING_CONTROL:"+token);
   }
 }
 if(["1.2.0","2.0.0","3.0.0","3.0.1"].includes(version)){
   const required=["## II-B. Diễn giải áp dụng Q03/Q04/Q07/Q08/Q09–Q14/Q17 qua cùng AP1–AP5 — bổ sung v1.2.0",
     "## X-B. Quyết định hợp nhất trải nghiệm tự học — Change Log 04/11/2026",
     "1.1.0 → 1.2.0","LEARNER_EVIDENCE_PENDING",
     "Issue #742", "DELTA_C_ACADEMIC_MATERIAL",
     "Q09", "Q10", "Q11", "Q12", "Q13", "Q14",
     "AP1","AP2","AP3","AP4","AP5",
     "không phát sinh tiêu chí toán mới"];
   for(const token of required)if(!source.includes(token))fail("UX_PED_V1_2_MISSING_CONTROL:"+token);
   if(version==="1.2.0"&&!source.includes("OWNER_APPROVED_EFFECTIVE_UPON_GOVERNANCE_MERGE"))
     fail("UX_PED_V1_2_MISSING_CONTROL:OWNER_APPROVED_EFFECTIVE_UPON_GOVERNANCE_MERGE");
 }
 const approvalStatus=(source.match(/^\*\*STATUS:\*\*\s*\x60([A-Z0-9_]+)\x60/m)||[])[1];
 if(["2.0.0","3.0.0","3.0.1"].includes(version)){
   if(approvalStatus!=="OWNER_APPROVED_EFFECTIVE")fail("Q18_V2_OWNER_EFFECTIVE_STATUS_REQUIRED");
   const contract=fs.readFileSync(path.join(ROOT,"prototypes/thpt/THPT_TWO_LANE_SOURCE_LOCKED_HANDOFF_CONTRACT_v2_20261102.md"),"utf8");
   const policy07=fs.readFileSync(path.join(ROOT,"prototypes/thpt/standard-changes/07_THPT_NOTEBOOKLM_BATCH_AND_DELTA_REVIEW_POLICY_v1.2_20261110.md"),"utf8");
   for(const token of ["OWNER APPROVED Q18 v2.0 OPERATIONAL SUPERSESSION","ENRICHMENT_DELTA_RECEIPT","TOPIC"])
     if(!contract.includes(token))fail("V2_OWNER_STAGE_NOT_ALIGNED:"+token);
   for(const token of ["OWNER APPROVED","DELTA_C_ACADEMIC_MATERIAL","ENRICHMENT_DELTA_RECEIPT","CONTENT_MATH_PED_SOURCE","ASSESSMENT_DATA_SAFETY","RENDER_RELEASE_QA"])
     if(!policy07.includes(token))fail("SOURCE07_V1_2_NOT_ALIGNED:"+token);
   for(const token of ["## X-C. Quyết định có hiệu lực","ENRICHMENT_DELTA_RECEIPT","Q18_INDEPENDENT_REVIEW","Q18_OWNER_SELF_VERIFIED_ENRICHMENT","CONTENT_MATH_PED_SOURCE","ASSESSMENT_DATA_SAFETY","RENDER_RELEASE_QA","OWNER_APPROVED_EFFECTIVE"])
     if(!source.includes(token))fail("Q18_V2_EFFECTIVE_CONTROL_MISSING:"+token);
 
}
  if(["3.0.0","3.0.1"].includes(version)){
    for(const token of ["## X-D. OWNER DECISION 11/11/2026","Q18_AUTHOR_SELF_VERIFIED",
      "AUTHOR_SELF_QA_RECEIPT","TARGETED_INDEPENDENT_REVIEW_REQUIRED",
      "Adaptive Knowledge Tabs v2","ASSESSMENT_DATA_SAFETY"]){
      if(!source.includes(token))fail("Q18_V3_MISSING_CONTROL:"+token);
    }
    const contractV3=fs.readFileSync(path.join(ROOT,"prototypes/thpt/THPT_TWO_LANE_SOURCE_LOCKED_HANDOFF_CONTRACT_v2_20261102.md"),"utf8");
    if(!contractV3.includes("OWNER APPROVED 11/11/2026"))fail("V2_V3_OWNER_UPDATE_MISSING");
    const agentsV3=fs.readFileSync(path.join(ROOT,"AGENTS.md"),"utf8");
    if(!agentsV3.includes("OWNER OPERATIONAL DECISION"))fail("OWNER_DECISION_TRACE_MISSING");
    // The temporary AUTHORING pause may later be lifted by the owner; do NOT
    // hard-code PAUSED as a permanent quality-schema requirement.
  }
  if(version==="3.0.1"){
    for(const token of ["## X-E. OWNER CLARIFICATION 11/11/2026","AUTHORING_PASS = CONTENT_READY",
      "Q18_CONTENT_CHECK_PENDING","Q18_SUBSTANTIVE_HOLD",
      "HANDOFF_PACKAGING_PENDING","một V2 handoff","ASSESSMENT_DATA_SAFETY"])
      if(!source.includes(token))fail("Q18_V3_0_1_NO_DUPLICATE_GATE:"+token);
    const v2=fs.readFileSync(path.join(ROOT,
      "prototypes/thpt/THPT_TWO_LANE_SOURCE_LOCKED_HANDOFF_CONTRACT_v2_20261102.md"),"utf8");
    for(const token of ["AUTHORING_PASS = CONTENT_READY","HANDOFF_PACKAGING_PENDING",
      "Q18_CONTENT_CHECK_PENDING","not an external evidence hunt"])
      if(!v2.includes(token))fail("V2_SELF_QA_ONE_PASS_NOT_ALIGNED:"+token);
  }
  if(!["2.0.0","3.0.0","3.0.1"].includes(version) && !source.includes("OFFICIAL_OWNER_APPROVED_MAIN")&&!source.includes("OWNER_APPROVED_EFFECTIVE_UPON_GOVERNANCE_MERGE")&&!source.includes("OWNER_APPROVED_Q01_REVISION_PENDING_GOVERNANCE_QA_MERGE"))fail("OWNER_APPROVAL_RECEIPT_MISSING");
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
 if(/\*\*VERSION:\*\* `1\.(?:1|2)\.0`/.test(full)){
   assert(validate(full.replaceAll("SBT_REFERENCE_GAP_DOCUMENTED","SBT_REF_GAP_DELETED"),"","").failures.some(e=>e.startsWith("Q01_V1_1_MISSING_CONTROL")));
 }
 if(/\*\*VERSION:\*\* `(?:1\.2\.0|2\.0\.0)`/.test(full)){
   assert(validate(full.replace("## II-B. Diễn giải áp dụng", "## II-B. [REMOVED]"),"","").failures.some(e=>e.startsWith("UX_PED_V1_2_MISSING_CONTROL")));
   if(/\*\*VERSION:\*\* `1\.2\.0`/.test(full))
     assert(validate(full.replace("OWNER_APPROVED_EFFECTIVE_UPON_GOVERNANCE_MERGE","NO_OWNER_APPROVAL"),"","").failures.some(e=>e.startsWith("UX_PED_V1_2_MISSING_CONTROL")));
 }
 if(/\*\*VERSION:\*\* \x60(?:2\.0\.0|3\.0\.0)\x60/.test(full)){
    assert(validate(full.replace("**STATUS:** \x60OWNER_APPROVED_EFFECTIVE\x60","**STATUS:** \x60GOVERNANCE_PROPOSAL_OWNER_REVIEW_PENDING\x60"),"","").failures.includes("Q18_V2_OWNER_EFFECTIVE_STATUS_REQUIRED"));
    assert(validate(full.replace("## X-C. Quyết định có hiệu lực","## X-C. [REMOVED]"),"","").failures.some(e=>e.startsWith("Q18_V2_EFFECTIVE_CONTROL_MISSING")));
    assert(validate(full.replaceAll("ENRICHMENT_DELTA_RECEIPT","EVIDENCE_OMITTED"),"","").failures.some(e=>e.startsWith("Q18_V2_EFFECTIVE_CONTROL_MISSING")));
  }
 {
   assert(validate(full.replace(/\*\*VERSION:\*\* `\d+\.\d+\.\d+`/,"**VERSION:** `9.9.9`"),"","").failures.includes("VERSION_NOT_LOCKED"));
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
