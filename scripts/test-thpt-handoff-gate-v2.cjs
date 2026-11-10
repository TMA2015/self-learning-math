#!/usr/bin/env node
"use strict";
// Source-lock V2: SGK chapter, independent TOPIC/FULL_TOPIC, and approved SGK supplements.
// Version compatibility is source-scoped; an accepted version never grants deploy rights.
// This never issues Academic/PED PASS and intentionally grandfathers historical READY manifests.
const fs = require("node:fs");
const assert = require("node:assert/strict");
const cp = require("node:child_process");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const prefix = "prototypes/thpt/release-queue/ready/";
const runGit = (...args) => cp.execFileSync("git", args, {cwd: root, encoding: "utf8"}).trim();
function field(content, key) {
  const line = content.split(/\r?\n/).find(s => s.startsWith(key + ": "));
  assert(line, "Missing " + key);
  const value = line.slice(key.length + 2).trim();
  assert(value && !/(^REPLACE_|^CHUA_CO$|^PENDING$)/i.test(value), "Placeholder " + key);
  return value;
}
function section(content, heading) {
  const lines = content.split(/\r?\n/);
  const start = lines.findIndex(s => s.trim() === "## " + heading);
  assert(start !== -1, "Missing section " + heading);
  const endOffset = lines.slice(start + 1).findIndex(s => s.startsWith("## "));
  const end = endOffset < 0 ? lines.length : start + 1 + endOffset;
  const body = lines.slice(start + 1, end).join("\n").trim();
  assert(body.length > 0, "Empty section " + heading);
  return body;
}
function ids(content, heading) {
  const body = section(content, heading);
  const values = body.split("\n").map(s => s.trim()).filter(s => /^- [A-Za-z0-9_.-]+$/.test(s)).map(s => s.slice(2));
  assert(values.length > 0, "No canonical IDs in " + heading);
  assert(new Set(values).size === values.length, "Duplicate ID in " + heading);
  assert(!values.some(s => /^REPLACE/i.test(s)), "Placeholder IDs in " + heading);
  return values;
}
function safeRepoFile(value, allowed) {
  assert(!value.startsWith("/") && !value.includes("..") && !value.includes("\\"), "Unsafe path " + value);
  assert(allowed.some(d => value.startsWith(d)) && /\.md$/.test(value), "Invalid evidence location " + value);
  const p = path.join(root, value);
  assert(fs.existsSync(p) && fs.statSync(p).isFile(), "Missing source/receipt/handoff " + value);
  return p;
}
function verifyBlob(value, file) {
  assert(/^[0-9a-f]{40}$/.test(value), "Invalid Git blob SHA " + value);
  const actual = runGit("hash-object", "--", file);
  assert.equal(actual, value, "Source/receipt byte mismatch: " + file);
}
// Version follows the ONE actual normative source, not a hand-maintained
// release-gate list. Grandfather ONLY previously effective historical versions.
// Governance drafts (even when present in a PR checkout) are NOT active modes.
const historicalVersions=["1.0.0","1.1.0","1.2.0"];
function acceptedStandardVersions(overrideText) {
  const raw=overrideText??fs.readFileSync(path.join(root,"prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md"),"utf8");
  const id=raw.match(/^\*\*STANDARD_ID:\*\*\s*\x60([A-Za-z0-9-]+)\x60/m);
  const version=raw.match(/^\*\*VERSION:\*\*\s*\x60(\d+\.\d+\.\d+)\x60/m);
  const status=raw.match(/^\*\*STATUS:\*\*\s*\x60([A-Z0-9_]+)\x60/m);
  assert(id && id[1]==="SLM-THPT-QUALITY-ONE","Single normative standard identity missing or changed");
  assert(version&&status,"Canonical standard version/status missing");
  const approved=/OWNER_APPROVED|EFFECTIVE/.test(status[1])&&!/GOVERNANCE_PROPOSAL|DRAFT|PENDING_OWNER/.test(status[1]);
  return [...new Set([...historicalVersions,...(approved?[version[1]]:[])])];
}

// One normative rubric for both branches. Historical V2 packets are grandfathered;
// enforce on NEW handoffs (and all packets already declaring STANDARD_ID).
function verifyOneStandardEvidence(data, handoff, initialHandoff) {
  if (!initialHandoff && !data.includes("STANDARD_ID: ")) return;
  const normVersion=field(data,"STANDARD_VERSION");
  assert(acceptedStandardVersions().includes(normVersion),"Unrecognized or not-yet-effective standard version");
  for (const text of [data, handoff]) {
    assert.equal(field(text,"STANDARD_ID"),"SLM-THPT-QUALITY-ONE","Two competing quality standards are forbidden");
    assert.equal(field(text,"STANDARD_VERSION"),normVersion,"Version mismatch across a source-locked V2 handoff");
  }
  assert.equal(field(data,"QUALITY_EVIDENCE_SECTION"),"QUALITY_Q01_Q18_EVIDENCE");
  const evidence=section(handoff,"QUALITY_Q01_Q18_EVIDENCE");
  const compact=data.includes("LEARNING_PATH: TOPIC") &&
    !evidence.split("\n").some(line=>/^\|\s*Q\d{2}\s*\|/.test(line));
  let qEvidence=evidence;
  if(compact) {
    // Signed authoring A1-A7 may hold the full Q01-Q18 table, not a V2
    // copy. Validate the original Git blob and both source/receipt pointers.
    assert(evidence.includes("AUTHOR_A1_A7_PATH") && evidence.includes("REVIEW_RECEIPT_PATH"),
      "Compact Topic Q evidence must identify the independent review");
    const fp=safeRepoFile(field(handoff,"AUTHOR_A1_A7_PATH"),["prototypes/thpt/content-drafts/"]);
    verifyBlob(field(handoff,"AUTHOR_A1_A7_BLOB"),fp);
    qEvidence=fs.readFileSync(fp,"utf8");
    assert(qEvidence.includes(field(data,"ACADEMIC_SOURCE_BLOB")) &&
       qEvidence.includes(field(data,"REVIEW_RECEIPT_PATH")),
       "Signed Topic Q evidence source/receipt mismatch");
    assert(qEvidence.includes("SLM-THPT-QUALITY-ONE") && qEvidence.includes(normVersion),
       "Signed Topic evidence uses wrong standard version");
  } else assert(evidence.includes("THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md"),
    "Evidence must reference the ONE normative source");
  const rows=qEvidence.split("\n").filter(line=>/^\|\s*Q\d{2}\s*\|/.test(line));
  const codes=rows.map(line=>line.split("|")[1].trim());
  const expected=Array.from({length:18},(_,i)=>"Q"+String(i+1).padStart(2,"0"));
  assert.deepEqual(codes,expected,"Q01..Q18 must be complete and unique in author handoff");
  rows.forEach((line,i)=>{
    const cells=line.split("|").slice(1,-1).map(s=>s.trim());
    assert(cells.length>=(compact?3:5),"Incomplete signed Q evidence "+expected[i]);
    for(const cell of cells.slice(1)) assert(cell.length>4 &&
      !(compact?/REPLACE_|CHUA_CO|TBD/i:/REPLACE_|PENDING|CHUA_CO|TBD/i).test(cell),
      "Placeholder or empty Q evidence "+expected[i]);
    if(compact) assert(/REVIEW_PASS/i.test(cells[2]),"Missing signed scoped review "+expected[i]);
  });
}

// Owner-approved 03/11/2026: one SGK supplement packet type; never mislabel it as a chapter.
function verifyLaneScope(data) {
  const lane = field(data, "LEARNING_PATH");
  const scope = field(data, "RELEASE_SCOPE");
  assert(
    (lane === "SGK_CHAPTER" && scope === "FULL_LEARNING_PATH") ||
    (lane === "TOPIC" && scope === "FULL_TOPIC_LEARNING_PATH") ||
    (lane === "SGK_EXPERIENCE_SUPPLEMENT" && scope === "SGK_EXPERIENCE_SUPPLEMENT") ||
    (lane === "SGK_YEAR_END_REVIEW_SUPPLEMENT" && scope === "SGK_YEAR_END_REVIEW_SUPPLEMENT"),
    "V2 ready lane/scope mismatch or unapproved type: " + lane + " / " + scope
  );
  return lane;
}
function verifySupplementSafety(data, handoff, lane) {
  assert(["SGK_EXPERIENCE_SUPPLEMENT","SGK_YEAR_END_REVIEW_SUPPLEMENT"].includes(lane), "Unapproved supplemental lane");
  assert.equal(field(data, "PRIVATE_RD1_COUNT"), "0", "SGK supplement has no held-out RD1");
  assert.equal(field(data, "OFFICIAL_READINESS"), "NOT_CLAIMED", "SGK experience cannot claim chapter/topic Readiness");
  assert.equal(field(data, "MASTERY_ACTIVATION"), "NO", "Supplement cannot activate Mastery");
  assert.equal(field(data, "RELEASE_AUTHORIZATION"), "NO", "CONTENT_READY is not deploy authority");
  assert.equal(field(handoff, "LEARNING_PATH"), lane);
  assert.equal(field(handoff, "RELEASE_SCOPE"), lane);
  if (lane === "SGK_YEAR_END_REVIEW_SUPPLEMENT") {
    assert.equal(field(data, "SUPPLEMENT_UNIT"), "PUBLIC_YEAR_END_REVIEW", "Year-end is not a chapter or official exam");
    assert.equal(field(handoff, "SUPPLEMENT_UNIT"), "PUBLIC_YEAR_END_REVIEW");
  }
  const custody = section(handoff, "PRIVATE_RD1_CUSTODY_METADATA");
  assert(/RD1_PRIVATE_COUNT\s*=\s*0/.test(custody), "Supplement must document zero private RD1");
  assert(/no independent/i.test(custody) && /SGK_CHAPTER_READINESS/i.test(custody), "Supplement must disclaim independent chapter Readiness");
  if (lane === "SGK_YEAR_END_REVIEW_SUPPLEMENT") {
    assert(/TOPIC_READINESS/i.test(custody) && /(?:year.end|end.year)/i.test(custody), "Year-end must disclaim Topic Readiness and official exam");
  }
}

// TOPIC has three learner pages (Knowledge / Practice / Self-check), not a fourth Core tab.
// Private independent RD1 stays owner-held; a PUBLIC static site may only provide
// voluntary self-comparison after Final Submit, with no scoring/Mastery claim.
function verifyTopicSafety(data, handoff) {
  assert.equal(field(data,"ASSESSMENT_MODE"),"CLIENT_SELF_CHECK_NO_MASTERY");
  assert.equal(field(data,"OFFICIAL_READINESS"),"NOT_CLAIMED");
  assert.equal(field(data,"MASTERY_ACTIVATION"),"NO");
  assert.equal(field(data,"RELEASE_AUTHORIZATION"),"NO");
  assert.equal(field(handoff,"LEARNING_PATH"),"TOPIC");
  assert.equal(field(handoff,"RELEASE_SCOPE"),"FULL_TOPIC_LEARNING_PATH");
  assert.equal(field(handoff,"ASSESSMENT_MODE"),"CLIENT_SELF_CHECK_NO_MASTERY");
  assert.equal(field(handoff,"MASTERY_ACTIVATION"),"NO");
  assert.equal(field(handoff,"RELEASE_AUTHORIZATION"),"NO");
  const count=field(data,"PRIVATE_RD1_COUNT");
  assert(/^\d+$/.test(count),"Invalid private Topic count");
  assert.equal(field(handoff,"PRIVATE_RD1_COUNT"),count,"Private count mismatch");
  const custody=section(handoff,"PRIVATE_RD1_CUSTODY_METADATA");
  if(new RegExp("RD1_PRIVATE_COUNT\\s*=\\s*"+count+"\\b").test(custody)){
    assert(/PRIVATE_OWNER_HELD\s*=\s*YES/.test(custody),"Private RD1 not owner-held");
    assert(/PRIVATE_GIT_CONTENT\s*=\s*NONE/.test(custody),"Private RD1 cannot enter public Git");
    assert(/PRIVATE_BANK_SHA256\s*=\s*[0-9a-f]{64}/.test(custody),"Private bank hash absent");
  } else {
    const hash=field(data,"PRIVATE_RD1_SHA256");
    assert(/^[0-9a-f]{64}$/.test(hash),"Missing private RD1 SHA256 metadata");
    assert.equal(field(handoff,"PRIVATE_RD1_SHA256"),hash,"Private hash mismatch");
    assert(new RegExp("\\b"+count+"\\s+held-out private items","i").test(custody),
      "Private Topic count absent from custody");
    const plain=custody.replace(/\*/g,"");
    assert(/owner-held only/i.test(plain) && /NOT\s+on\s+GitHub/i.test(plain),
      "Private Topic assessment must remain outside public Git");
  }
}

// A canonical item may be placed at multiple Topic outcomes/roles without
// duplicating stem, key or rubric. Accept two reviewed AUTHORING schemas:
// explicit indexed placement rows or compact source_type + Topic role rows.
// The latter has no live route claim; RELEASE still verifies the actual route.
function verifyTopicPlacementMatrix(matrix, items, outcomes) {
  const lines=matrix.split("\n").filter(s=>/^\|/.test(s));
  const seen=new Set(),covered=new Set();
  let count=0,format=null;
  for(const line of lines) {
    const cells=line.split("|").slice(1,-1).map(s=>s.trim().replace(/^\x60|\x60$/g,""));
    if(!cells.length || cells[0]==="#" || /^item_id$/i.test(cells[0]) || /^[-:]+$/.test(cells[0]))continue;
    let item,outcome,role,placement,sourceType;
    if(cells.length===6 && /^\d+$/.test(cells[0])) {
      [,item,outcome,role,placement]=cells;
      assert(placement.startsWith("TOPIC/"),"Topic placement must start TOPIC/: "+item);
      assert(!/(^|\/)CORE(\/|$)/.test(placement),"Topic cannot create a fourth Core page");
      assert(!/(READINESS|RD1)/i.test(placement),"Private Topic Readiness cannot be a public placement");
      format=format||"EXPLICIT";
      assert.equal(format,"EXPLICIT","Mixed Topic matrix schemas forbidden");
    } else if(cells.length===5 && /^[A-Za-z0-9_.-]+$/.test(cells[0])) {
      [item,outcome,role,sourceType]=cells;
      assert(["SGK_CANONICAL_REUSE","TOPIC_NEW_CANDIDATE"].includes(sourceType),
        "Unverified Topic source_type: "+sourceType);
      placement="TOPIC/"+role+"/"+sourceType;
      format=format||"COMPACT";
      assert.equal(format,"COMPACT","Mixed Topic matrix schemas forbidden");
    } else throw new Error("Malformed Topic item–outcome mapping: "+line);
    assert(items.includes(item),"Unregistered Topic canonical ID: "+item);
    assert(outcomes.includes(outcome),"Unknown Topic outcome: "+outcome);
    assert(/^TOPIC_/.test(role),"Invalid Topic role: "+role);
    assert(!/(READINESS|RD1|PRIVATE|OFFICIAL)/i.test(role),
      "Private or official assessment role forbidden in public Topic placements: "+role);
    const tuple=[item,outcome,role,placement].join("|");
    assert(!seen.has(tuple),"Duplicate Topic placement tuple: "+tuple);
    seen.add(tuple);covered.add(item);count++;
  }
  assert(count>=items.length,"Topic placements must cover all canonical IDs");
  for(const item of items)assert(covered.has(item),"Unmapped Topic canonical ID: "+item);
  return count;
}

function verifyReadyManifest(rel, initialHandoff) {
  const data = fs.readFileSync(path.join(root, rel), "utf8");
  const id = field(data, "PACKET_ID");
  assert.equal(rel, prefix + id + ".md", "Manifest name/ID mismatch");
  assert.equal(field(data, "HANDOFF_PROTOCOL"), "THPT-TWO-LANE-V2");
  const state = field(data, "STATE");
  assert(["CONTENT_READY","RELEASE_READY"].includes(state), "Invalid V2 ready state");
  if (initialHandoff) assert.equal(state, "CONTENT_READY", "New handoff cannot skip R gates");
  const lane = verifyLaneScope(data);
  assert.equal(field(data, "ASSESSMENT_MODE"), "CLIENT_SELF_CHECK_NO_MASTERY");
  assert.equal(field(data, "ACADEMIC_VERDICT"), "PASS_ON_LOCKED_SNAPSHOT");
  assert.equal(field(data, "PEDAGOGICAL_VERDICT"), "PASS_ON_LOCKED_SNAPSHOT");
  assert.equal(field(data, "BLOCKERS"), "NONE");

  const sourceRel = field(data, "ACADEMIC_SOURCE_PATH");
  const sourceBlob = field(data, "ACADEMIC_SOURCE_BLOB");
  const sourceFile = safeRepoFile(sourceRel, ["prototypes/thpt/content-drafts/"]);
  verifyBlob(sourceBlob, sourceFile);
  const sourceText = fs.readFileSync(sourceFile, "utf8");
  const reviewRel = field(data, "REVIEW_RECEIPT_PATH");
  const reviewBlob = field(data, "REVIEW_RECEIPT_BLOB");
  const reviewFile = safeRepoFile(reviewRel, ["prototypes/thpt/review-packets/", "prototypes/thpt/release-handoffs/"]);
  verifyBlob(reviewBlob, reviewFile);
  const reviewText = fs.readFileSync(reviewFile, "utf8");
  assert(reviewText.includes(sourceBlob), "Review receipt must identify the exact canonical source blob");
  if (initialHandoff || data.includes("STANDARD_ID: ")) {
    assert(reviewText.includes("SLM-THPT-QUALITY-ONE"),
      "New reviewer receipt must identify the same ONE normative standard as both lanes");
    assert(reviewText.includes(field(data,"STANDARD_VERSION")),
      "New reviewer receipt must identify its own effective standard version (including approved 1.2.0; historical versions remain source-scoped)");
  }
  const handoffRel = field(data, "AUTHOR_HANDOFF");
  const handoff = fs.readFileSync(safeRepoFile(handoffRel, ["prototypes/thpt/release-handoffs/"]), "utf8");
  verifyOneStandardEvidence(data, handoff, initialHandoff);
  if (lane === "TOPIC") verifyTopicSafety(data, handoff);
  else if (lane !== "SGK_CHAPTER") verifySupplementSafety(data, handoff, lane);
  for (const [k,v] of [
    ["PACKET_ID", id], ["ACADEMIC_SOURCE_BLOB", sourceBlob],
    ["REVIEW_RECEIPT_BLOB", reviewBlob], ["ACADEMIC_VERDICT", "PASS"],
    ["PEDAGOGICAL_VERDICT", "PASS"], ["BLOCKERS", "NONE"],
    ["ASSESSMENT_MODE", "CLIENT_SELF_CHECK_NO_MASTERY"],
    ["RELEASE_SCOPE", field(data, "RELEASE_SCOPE")]
  ]) assert.equal(field(handoff, k), v, "Handoff mismatch " + k);
  const lessons = ids(handoff, "LESSON_IDS");
  const outcomes = ids(handoff, "OUTCOME_IDS");
  const items = ids(handoff, "PUBLIC_ITEM_IDS");
  // Topic lesson/outcome IDs are source-locked handoff *mapping metadata*.
  // Their literal tokens need not appear in learner-facing canonical prose.
  // Academic Q02/PED evidence and the full item→outcome crosswalk bind them.
  // Canonical PUBLIC item IDs must still exist in the frozen academic source;
  // no missing/renamed questions or fabricated item IDs are permitted.
  const sourceAnchoredIds=lane==="TOPIC" ? items : [...lessons,...outcomes,...items];
  for(const canonicalId of sourceAnchoredIds)
    assert(sourceText.includes(canonicalId), "Registered source item/ID absent from canonical academic source: "+canonicalId);
  const pedKeys = ["PED1_MOTIVATION", "PED2_PREREQUISITES", "PED3_MEANING_FIRST", "PED4_EXPLAINED_VISUAL", "PED5_REASONED_EXAMPLES", "PED6_FIRST_TRY_REMEDIATION"];
  for (const key of pedKeys) assert(data.split("\n").some(line => line.startsWith("- [x] " + key + " — ") && line.length > key.length + 35), "PED evidence not signed off: " + key);
  const matrix = section(handoff, "ITEM_OUTCOME_MATRIX");
  if (lane === "TOPIC") {
    verifyTopicPlacementMatrix(matrix, items, outcomes);
  } else {
    const rows = matrix.split("\n").filter(s => /^\|/.test(s)).map(s => s.split("|").slice(1).map(x => x.trim()));
    for (const id of items) assert(rows.some(row => row[0] === id && outcomes.includes(row[1])), "Unmapped item " + id);
    if (lane !== "SGK_CHAPTER") {
      const canonicalRows=rows.filter(row=>items.includes(row[0]));
      assert.equal(canonicalRows.length, items.length, "Supplement requires exactly one canonical item–outcome row per item");
      for (const id of items) assert.equal(canonicalRows.filter(row=>row[0]===id).length,1,"Duplicate supplement item mapping "+id);
    }
  }
  const commonEvidence=["S1_SGK_SBT_SOURCE","D1_D6_EVIDENCE","PED1_PED6_EVIDENCE","DELTA_LEDGER","PRIVATE_RD1_CUSTODY_METADATA"];
  for(const heading of commonEvidence)
    assert(section(handoff,heading).length>35,"Insufficient evidence in "+heading);
  if(lane==="TOPIC"){
    // Signed Topic authoring packets also use AUTHORING_A1_A7 and
    // RELEASE_AND_OWNER_GATE as equivalent custody/signoff section titles.
    // Review receipt SHA/source lock and Q01–Q18 are validated above.
    const reviewHeading=handoff.includes("## REVIEW_SOURCE_RECEIPT")
      ?"REVIEW_SOURCE_RECEIPT":"AUTHORING_A1_A7";
    const signoffHeading=handoff.includes("## AUTHOR_SIGNOFF")
      ?"AUTHOR_SIGNOFF":"RELEASE_AND_OWNER_GATE";
    for(const heading of [reviewHeading,signoffHeading])
      assert(section(handoff,heading).length>35,"Incomplete Topic source evidence "+heading);
  }else{
    for(const heading of ["REVIEW_SOURCE_RECEIPT","AUTHOR_SIGNOFF"])
      assert(section(handoff,heading).length>35,"Insufficient evidence in "+heading);
  }
  assert(lessons.length && outcomes.length && items.length, "Empty author register");
  console.log("SOURCE_LOCK_PASS " + id + ": " + lessons.length + " lessons, " + outcomes.length + " outcomes, " + items.length + " public item IDs; evidence hashes match (not an Academic PASS).");
}
function selfTest() {
  assert.deepEqual(ids("## IDS\n- A\n- B\n", "IDS"), ["A","B"]);
  assert.equal(verifyLaneScope("LEARNING_PATH: SGK_CHAPTER\nRELEASE_SCOPE: FULL_LEARNING_PATH"), "SGK_CHAPTER");
  const norm=(v,status)=>"**STANDARD_ID:** \x60SLM-THPT-QUALITY-ONE\x60\n**VERSION:** \x60"+v+"\x60\n**STATUS:** \x60"+status+"\x60";
  assert(acceptedStandardVersions().includes("1.2.0"),"Current normative v1.2.0 must work");
  assert(!acceptedStandardVersions(norm("2.0.0","GOVERNANCE_PROPOSAL_OWNER_REVIEW_PENDING")).includes("2.0.0"),
    "Draft Q18 version must NOT become a release version");
  assert(acceptedStandardVersions(norm("2.0.0","OWNER_APPROVED_EFFECTIVE")).includes("2.0.0"),
    "Approved future single standard must not need a stale V2 allowlist update");
  assert.throws(()=>acceptedStandardVersions(norm("2.0.0","OWNER_APPROVED_EFFECTIVE").replace("SLM-THPT-QUALITY-ONE","DIFFERENT-STANDARD")));
  assert.equal(verifyLaneScope("LEARNING_PATH: TOPIC\nRELEASE_SCOPE: FULL_TOPIC_LEARNING_PATH"), "TOPIC");
  assert.throws(() => verifyLaneScope("LEARNING_PATH: TOPIC\nRELEASE_SCOPE: FULL_LEARNING_PATH"));
  assert.throws(() => verifyLaneScope("LEARNING_PATH: SGK_CHAPTER\nRELEASE_SCOPE: FULL_TOPIC_LEARNING_PATH"));
  assert.equal(verifyLaneScope("LEARNING_PATH: SGK_EXPERIENCE_SUPPLEMENT\nRELEASE_SCOPE: SGK_EXPERIENCE_SUPPLEMENT"), "SGK_EXPERIENCE_SUPPLEMENT");
  assert.equal(verifyLaneScope("LEARNING_PATH: SGK_YEAR_END_REVIEW_SUPPLEMENT\nRELEASE_SCOPE: SGK_YEAR_END_REVIEW_SUPPLEMENT"), "SGK_YEAR_END_REVIEW_SUPPLEMENT");
  assert.throws(() => verifyLaneScope("LEARNING_PATH: SGK_YEAR_END_REVIEW_SUPPLEMENT\nRELEASE_SCOPE: FULL_LEARNING_PATH"));
  assert.throws(() => verifyLaneScope("LEARNING_PATH: SGK_YEAR_END_REVIEW_SUPPLEMENT\nRELEASE_SCOPE: SGK_EXPERIENCE_SUPPLEMENT"));
  assert.throws(() => verifyLaneScope("LEARNING_PATH: SGK_EXPERIENCE_SUPPLEMENT\nRELEASE_SCOPE: FULL_LEARNING_PATH"));
  assert.throws(() => verifyLaneScope("LEARNING_PATH: SGK_CHAPTER\nRELEASE_SCOPE: SGK_EXPERIENCE_SUPPLEMENT"));
  const safeSupplement="PRIVATE_RD1_COUNT: 0\nOFFICIAL_READINESS: NOT_CLAIMED\nMASTERY_ACTIVATION: NO\nRELEASE_AUTHORIZATION: NO";
  const safeHandoff="LEARNING_PATH: SGK_EXPERIENCE_SUPPLEMENT\nRELEASE_SCOPE: SGK_EXPERIENCE_SUPPLEMENT\n## PRIVATE_RD1_CUSTODY_METADATA\nRD1_PRIVATE_COUNT = 0, no independent SGK_CHAPTER_READINESS.";
  assert.doesNotThrow(() => verifySupplementSafety(safeSupplement, safeHandoff, "SGK_EXPERIENCE_SUPPLEMENT"));
  assert.throws(() => verifySupplementSafety(safeSupplement.replace("PRIVATE_RD1_COUNT: 0","PRIVATE_RD1_COUNT: 1"),safeHandoff, "SGK_EXPERIENCE_SUPPLEMENT"));
  const yearManifest=safeSupplement+"\nSUPPLEMENT_UNIT: PUBLIC_YEAR_END_REVIEW";
  const yearHandoff=safeHandoff.replaceAll("SGK_EXPERIENCE_SUPPLEMENT","SGK_YEAR_END_REVIEW_SUPPLEMENT")+"\nSUPPLEMENT_UNIT: PUBLIC_YEAR_END_REVIEW\nNo independent SGK_CHAPTER_READINESS or TOPIC_READINESS and not a year-end official exam.";
  assert.doesNotThrow(() => verifySupplementSafety(yearManifest,yearHandoff,"SGK_YEAR_END_REVIEW_SUPPLEMENT"));
  assert.throws(() => verifySupplementSafety(yearManifest.replace("MASTERY_ACTIVATION: NO","MASTERY_ACTIVATION: YES"),yearHandoff,"SGK_YEAR_END_REVIEW_SUPPLEMENT"));
  assert.throws(() => verifySupplementSafety(yearManifest.replace("SUPPLEMENT_UNIT: PUBLIC_YEAR_END_REVIEW","SUPPLEMENT_UNIT: OFFICIAL_EXAM"),yearHandoff,"SGK_YEAR_END_REVIEW_SUPPLEMENT"));
  assert.throws(() => ids("## IDS\n- A\n- A\n", "IDS"));
  assert.throws(() => field("X: REPLACE_ME","X"));
  assert.equal(field("X: PASS\n", "X"), "PASS");
  const bad="## QUALITY_Q01_Q18_EVIDENCE\n| Q01 | sample | source | reviewer | AP |\n";
  assert.throws(()=>verifyOneStandardEvidence("STANDARD_ID: SLM-THPT-QUALITY-ONE\nSTANDARD_VERSION: 1.0.0\nQUALITY_EVIDENCE_SECTION: QUALITY_Q01_Q18_EVIDENCE",
    "STANDARD_ID: SLM-THPT-QUALITY-ONE\nSTANDARD_VERSION: 1.0.0\n"+bad,true));
  assert.throws(()=>verifyOneStandardEvidence(
    "STANDARD_ID: SLM-THPT-QUALITY-ONE\nSTANDARD_VERSION: 9.9.9\nQUALITY_EVIDENCE_SECTION: QUALITY_Q01_Q18_EVIDENCE",
    "STANDARD_ID: SLM-THPT-QUALITY-ONE\nSTANDARD_VERSION: 9.9.9\n"+bad,true));
  assert.throws(()=>verifyOneStandardEvidence(
    "STANDARD_ID: SLM-THPT-QUALITY-ONE\nSTANDARD_VERSION: 1.1.0\nQUALITY_EVIDENCE_SECTION: QUALITY_Q01_Q18_EVIDENCE",
    "STANDARD_ID: SLM-THPT-QUALITY-ONE\nSTANDARD_VERSION: 1.0.0\n"+bad,true));
  const topicMeta="ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY\nOFFICIAL_READINESS: NOT_CLAIMED\nMASTERY_ACTIVATION: NO\nRELEASE_AUTHORIZATION: NO\nPRIVATE_RD1_COUNT: 30";
  const topicHandoff="LEARNING_PATH: TOPIC\nRELEASE_SCOPE: FULL_TOPIC_LEARNING_PATH\nASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY\nMASTERY_ACTIVATION: NO\nRELEASE_AUTHORIZATION: NO\nPRIVATE_RD1_COUNT: 30\n## PRIVATE_RD1_CUSTODY_METADATA\nRD1_PRIVATE_COUNT = 30, PRIVATE_OWNER_HELD = YES, PRIVATE_GIT_CONTENT = NONE, PRIVATE_BANK_SHA256 = " + "a".repeat(64);
  assert.doesNotThrow(() => verifyTopicSafety(topicMeta, topicHandoff));
  assert.throws(() => verifyTopicSafety(topicMeta.replace("MASTERY_ACTIVATION: NO","MASTERY_ACTIVATION: YES"), topicHandoff));
  assert.throws(() => verifyTopicSafety(topicMeta.replace("PRIVATE_RD1_COUNT: 30","PRIVATE_RD1_COUNT: 29"), topicHandoff));
  assert.throws(() => verifyTopicSafety(topicMeta, topicHandoff.replace("PRIVATE_GIT_CONTENT = NONE","PRIVATE_GIT_CONTENT = FULL")));
  const topicMatrix="| # | item_id | primary outcome | TOPIC role | placement | state |\n| 1 | \x60ITEM-A\x60 | \x60O1\x60 | \x60TOPIC_PRACTICE\x60 | \x60TOPIC/UNIT/O1/PRACTICE\x60 | PROPOSED |\n| 2 | \x60ITEM-A\x60 | \x60O2\x60 | \x60TOPIC_PRACTICE\x60 | \x60TOPIC/UNIT/O2/PRACTICE\x60 | PROPOSED |\n| 3 | \x60ITEM-B\x60 | \x60O2\x60 | \x60TOPIC_WRITTEN\x60 | \x60TOPIC/UNIT/WRITTEN\x60 | PROPOSED |";
  assert.equal(verifyTopicPlacementMatrix(topicMatrix, ["ITEM-A","ITEM-B"], ["O1","O2"]), 3);
  assert.throws(() => verifyTopicPlacementMatrix(topicMatrix + "\n" + topicMatrix.split("\n")[1], ["ITEM-A","ITEM-B"], ["O1","O2"]));
  assert.throws(() => verifyTopicPlacementMatrix(topicMatrix.replace("TOPIC/UNIT/WRITTEN","TOPIC/UNIT/CORE"), ["ITEM-A","ITEM-B"], ["O1","O2"]));
  const compactTopicMatrix="| item_id | primary_outcome | role | source_type | status |\n| --- | --- | --- | --- | --- |\n| \x60ITEM-A\x60 | \x60O1\x60 | \x60TOPIC_PRACTICE\x60 | SGK_CANONICAL_REUSE | PROPOSED_NOT_LIVE |\n| \x60ITEM-B\x60 | \x60O2\x60 | \x60TOPIC_WRITTEN_SHARED\x60 | TOPIC_NEW_CANDIDATE | PROPOSED_NOT_LIVE |";
  assert.equal(verifyTopicPlacementMatrix(compactTopicMatrix,["ITEM-A","ITEM-B"],["O1","O2"]),2);
  assert.throws(()=>verifyTopicPlacementMatrix(compactTopicMatrix.replace("TOPIC_WRITTEN_SHARED","TOPIC_READINESS"),["ITEM-A","ITEM-B"],["O1","O2"]));
  assert.throws(()=>verifyTopicPlacementMatrix(compactTopicMatrix.replace("TOPIC_PRACTICE","TOPIC_PRIVATE_RD1"),["ITEM-A","ITEM-B"],["O1","O2"]));
  assert.throws(()=>verifyTopicPlacementMatrix(topicMatrix.replace("TOPIC_WRITTEN","TOPIC_OFFICIAL_READINESS"),["ITEM-A","ITEM-B"],["O1","O2"]));
  assert.throws(()=>verifyTopicPlacementMatrix(compactTopicMatrix.replace("TOPIC_NEW_CANDIDATE","PRIVATE_RD1"),["ITEM-A","ITEM-B"],["O1","O2"]));
  assert.throws(()=>verifyTopicPlacementMatrix(compactTopicMatrix.replace("ITEM-B","ITEM-UNREGISTERED"),["ITEM-A","ITEM-B"],["O1","O2"]));
  assert.throws(()=>verifyTopicPlacementMatrix(compactTopicMatrix+"\n"+compactTopicMatrix.split("\n")[2],["ITEM-A","ITEM-B"],["O1","O2"]));
  const evidence12="## QUALITY_Q01_Q18_EVIDENCE\nTHPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md\n"+Array.from({length:18},(_,i)=>"| Q"+String(i+1).padStart(2,"0")+" | outcome proof | author evidence | independent receipt | rendered check |").join("\n");
  assert.doesNotThrow(() => verifyOneStandardEvidence("STANDARD_ID: SLM-THPT-QUALITY-ONE\nSTANDARD_VERSION: 1.2.0\nQUALITY_EVIDENCE_SECTION: QUALITY_Q01_Q18_EVIDENCE","STANDARD_ID: SLM-THPT-QUALITY-ONE\nSTANDARD_VERSION: 1.2.0\n"+evidence12,true));
  console.log("PASS handoff V2 parser: SGK, TOPIC multi-placement, supplements; version 1.2, Q16 private custody, negative pairing/safety checks");
}
if (process.argv.includes("--self-test")) selfTest();
else {
  const base = process.env.BASE_SHA, head = process.env.HEAD_SHA;
  assert(/^[a-f0-9]{40}$/.test(base || "") && /^[a-f0-9]{40}$/.test(head || ""), "BASE_SHA and HEAD_SHA must be supplied by PR scope; fail closed");
  // Recheck ALL V2 packets on every PR, even when only their source/receipt changed.
  // New manifest additions must use V2; old historical manifests remain grandfathered.
  const changed = runGit("diff","--name-status",base + "..." + head,"--",prefix);
  const added = new Set();
  for (const line of changed.split("\n").filter(Boolean)) {
    const parts = line.split("\t"), status = parts[0], rel = parts[parts.length-1];
    if ((status.startsWith("A") || status.startsWith("R")) && rel.startsWith(prefix) && rel.endsWith(".md") && !rel.endsWith("/README.md")) added.add(rel);
  }
  let checked = 0;
  for (const name of fs.readdirSync(path.join(root,prefix)).filter(x => x.endsWith(".md") && x !== "README.md")) {
    const rel = prefix + name;
    const data = fs.readFileSync(path.join(root,rel), "utf8");
    if (!data.includes("HANDOFF_PROTOCOL: THPT-TWO-LANE-V2")) {
      assert(!added.has(rel), "New READY manifest must use source-locked V2: " + rel);
      continue;
    }
    verifyReadyManifest(rel, added.has(rel));
    checked++;
  }
  console.log("PASS handoff V2 gate: " + checked + " current V2 ready manifests revalidated; older manifests grandfathered. No academic PASS or deploy.");
}
