#!/usr/bin/env node
"use strict";
// Structural/source-lock gate for newly introduced READY SGK chapter OR owner-approved SGK experience supplements.
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
// One normative rubric for both branches. Historical V2 packets are grandfathered;
// enforce on NEW handoffs (and all packets already declaring STANDARD_ID).
function verifyOneStandardEvidence(data, handoff, initialHandoff) {
  if (!initialHandoff && !data.includes("STANDARD_ID: ")) return;
  const normVersion=field(data,"STANDARD_VERSION");
  assert(["1.0.0","1.1.0"].includes(normVersion),"Unrecognized standard version");
  for (const text of [data, handoff]) {
    assert.equal(field(text,"STANDARD_ID"),"SLM-THPT-QUALITY-ONE","Two competing quality standards are forbidden");
    assert.equal(field(text,"STANDARD_VERSION"),normVersion,"Version mismatch across a source-locked V2 handoff");
  }
  assert.equal(field(data,"QUALITY_EVIDENCE_SECTION"),"QUALITY_Q01_Q18_EVIDENCE");
  const evidence=section(handoff,"QUALITY_Q01_Q18_EVIDENCE");
  assert(evidence.includes("THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md"),
    "Evidence must reference THE ONE normative source");
  const rows=evidence.split("\n").filter(line=>/^\|\s*Q\d{2}\s*\|/.test(line));
  const codes=rows.map(line=>line.split("|")[1].trim());
  const expected=Array.from({length:18},(_,i)=>"Q"+String(i+1).padStart(2,"0"));
  assert.deepEqual(codes,expected,"Q01..Q18 must be complete and unique in author handoff");
  rows.forEach((line,i)=>{
    const cells=line.split("|").slice(1,-1).map(s=>s.trim());
    assert(cells.length>=5,"Not enough source/review/release evidence in "+expected[i]);
    for (const cell of cells.slice(1)) assert(cell.length>4&&!/(REPLACE_|PENDING|CHUA_CO|TBD)/i.test(cell),
      "Placeholder/empty evidence in "+expected[i]);
  });
}

// Owner-approved 03/11/2026: one SGK supplement packet type; never mislabel it as a chapter.
function verifyLaneScope(data) {
  const lane = field(data, "LEARNING_PATH");
  const scope = field(data, "RELEASE_SCOPE");
  assert(
    (lane === "SGK_CHAPTER" && scope === "FULL_LEARNING_PATH") ||
    (lane === "SGK_EXPERIENCE_SUPPLEMENT" && scope === "SGK_EXPERIENCE_SUPPLEMENT"),
    "V2 ready lane/scope mismatch or unapproved type: " + lane + " / " + scope
  );
  return lane;
}
function verifySupplementSafety(data, handoff) {
  assert.equal(field(data, "PRIVATE_RD1_COUNT"), "0", "SGK experience has no held-out RD1");
  assert.equal(field(data, "OFFICIAL_READINESS"), "NOT_CLAIMED", "SGK experience cannot claim chapter/topic Readiness");
  assert.equal(field(data, "MASTERY_ACTIVATION"), "NO", "Supplement cannot activate Mastery");
  assert.equal(field(data, "RELEASE_AUTHORIZATION"), "NO", "CONTENT_READY is not deploy authority");
  assert.equal(field(handoff, "LEARNING_PATH"), "SGK_EXPERIENCE_SUPPLEMENT");
  assert.equal(field(handoff, "RELEASE_SCOPE"), "SGK_EXPERIENCE_SUPPLEMENT");
  const custody = section(handoff, "PRIVATE_RD1_CUSTODY_METADATA");
  assert(/RD1_PRIVATE_COUNT\s*=\s*0/.test(custody), "Supplement must document zero private RD1");
  assert(/no independent SGK_CHAPTER_READINESS/i.test(custody), "Supplement must disclaim independent chapter Readiness");
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
      "New reviewer receipt must identify its own effective standard version (historical 1.0.0 or approved 1.1.0)");
  }
  const handoffRel = field(data, "AUTHOR_HANDOFF");
  const handoff = fs.readFileSync(safeRepoFile(handoffRel, ["prototypes/thpt/release-handoffs/"]), "utf8");
  verifyOneStandardEvidence(data, handoff, initialHandoff);
  if (lane === "SGK_EXPERIENCE_SUPPLEMENT") verifySupplementSafety(data, handoff);
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
  for (const canonicalId of [...lessons, ...outcomes, ...items]) assert(sourceText.includes(canonicalId), "Registered ID absent from canonical academic source: " + canonicalId);
  const pedKeys = ["PED1_MOTIVATION", "PED2_PREREQUISITES", "PED3_MEANING_FIRST", "PED4_EXPLAINED_VISUAL", "PED5_REASONED_EXAMPLES", "PED6_FIRST_TRY_REMEDIATION"];
  for (const key of pedKeys) assert(data.split("\n").some(line => line.startsWith("- [x] " + key + " — ") && line.length > key.length + 35), "PED evidence not signed off: " + key);
  const matrix = section(handoff, "ITEM_OUTCOME_MATRIX");
  const rows = matrix.split("\n").filter(s => /^\|/.test(s)).map(s => s.split("|").slice(1).map(x => x.trim()));
  for (const id of items) assert(rows.some(row => row[0] === id && outcomes.includes(row[1])), "Unmapped item " + id);
  for (const heading of ["S1_SGK_SBT_SOURCE","D1_D6_EVIDENCE","PED1_PED6_EVIDENCE","REVIEW_SOURCE_RECEIPT","DELTA_LEDGER","PRIVATE_RD1_CUSTODY_METADATA","AUTHOR_SIGNOFF"]) assert(section(handoff, heading).length > 35, "Insufficient evidence in " + heading);
  assert(lessons.length && outcomes.length && items.length, "Empty author register");
  console.log("SOURCE_LOCK_PASS " + id + ": " + lessons.length + " lessons, " + outcomes.length + " outcomes, " + items.length + " public item IDs; evidence hashes match (not an Academic PASS).");
}
function selfTest() {
  assert.deepEqual(ids("## IDS\n- A\n- B\n", "IDS"), ["A","B"]);
  assert.equal(verifyLaneScope("LEARNING_PATH: SGK_CHAPTER\nRELEASE_SCOPE: FULL_LEARNING_PATH"), "SGK_CHAPTER");
  assert.equal(verifyLaneScope("LEARNING_PATH: SGK_EXPERIENCE_SUPPLEMENT\nRELEASE_SCOPE: SGK_EXPERIENCE_SUPPLEMENT"), "SGK_EXPERIENCE_SUPPLEMENT");
  assert.throws(() => verifyLaneScope("LEARNING_PATH: SGK_EXPERIENCE_SUPPLEMENT\nRELEASE_SCOPE: FULL_LEARNING_PATH"));
  assert.throws(() => verifyLaneScope("LEARNING_PATH: SGK_CHAPTER\nRELEASE_SCOPE: SGK_EXPERIENCE_SUPPLEMENT"));
  const safeSupplement="PRIVATE_RD1_COUNT: 0\nOFFICIAL_READINESS: NOT_CLAIMED\nMASTERY_ACTIVATION: NO\nRELEASE_AUTHORIZATION: NO";
  const safeHandoff="LEARNING_PATH: SGK_EXPERIENCE_SUPPLEMENT\nRELEASE_SCOPE: SGK_EXPERIENCE_SUPPLEMENT\n## PRIVATE_RD1_CUSTODY_METADATA\nRD1_PRIVATE_COUNT = 0, no independent SGK_CHAPTER_READINESS.";
  assert.doesNotThrow(() => verifySupplementSafety(safeSupplement, safeHandoff));
  assert.throws(() => verifySupplementSafety(safeSupplement.replace("PRIVATE_RD1_COUNT: 0","PRIVATE_RD1_COUNT: 1"),safeHandoff));
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
  console.log("PASS handoff V2 parser: chapters and owner-approved SGK experiences scoped; historical versions retained; negative scope/version cases");
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
