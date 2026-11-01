#!/usr/bin/env node
"use strict";
// Scope-only PR preflight: distinguish immutable academic source from website/release changes.
// Never use this result as Academic PASS, RELEASE_READY or deployment authorization.
const assert = require("node:assert/strict");
const fs = require("node:fs");

const SOURCE_ONLY = /^prototypes\/thpt\/(?:content-drafts|review-packets|release-handoffs)\/.+\.(?:md|txt|svg)$/i;
function classify(paths) {
  const files = paths.map(s => s.trim()).filter(Boolean);
  // Empty/unexpected scope must run full QA, never pass by default.
  return files.length > 0 && files.every(p => SOURCE_ONLY.test(p) && !p.includes("..") && !p.includes("\\"));
}
function selfTest() {
  const example = [
    "prototypes/thpt/content-drafts/THPT_G11_CHII_SOURCE.md",
    "prototypes/thpt/content-drafts/svg/FIG-G11-B05-01_R01.svg",
    "prototypes/thpt/review-packets/Temp_G11_CHII.md",
    "prototypes/thpt/release-handoffs/G11-CHII-A6_HANDOFF.md"
  ];
  assert.equal(classify(example), true, "Authoring-only paths must use lightweight QA");
  for (const changed of [
    [], ["prototypes/thpt/release-queue/ready/G11-SGK-CHII.md"],
    ["prototypes/thpt/release-queue/REGISTER.md"],
    ["docs/thpt-preview/sgk/chuong-ii.md"],
    ["docs/assets/javascripts/thpt-r4-preview.js"],
    [".github/workflows/qa-pr.yml"],
    ["scripts/test-thpt-release-queue.cjs"],
    ["prototypes/thpt/content-drafts/unsafe.js"],
    ["prototypes/thpt/content-drafts/../release-queue/ready/inject.md"],
    [...example, "mkdocs.yml"]
  ]) assert.equal(classify(changed), false, "Release/UI/unsafe/empty changes must use full QA");
  console.log("PASS THPT PR classifier: academic source fast lane; release, website and workflow full gates");
}
if (require.main === module) {
  if (process.argv.includes("--self-test")) selfTest();
  else {
    assert.equal(process.argv.length, 3, "Provide git diff --name-only file");
    const files = fs.readFileSync(process.argv[2], "utf8").split(/\r?\n/);
    const only = classify(files);
    // This line is consumed by GITHUB_OUTPUT; keep it machine-readable.
    process.stdout.write("authoring_only=" + only + "\n");
    process.stderr.write("THPT PR scope: " + (only ? "ACADEMIC_SOURCE_ONLY" : "FULL_RELEASE_OR_SITE_QA") + "\n");
  }
}
module.exports = {classify};
