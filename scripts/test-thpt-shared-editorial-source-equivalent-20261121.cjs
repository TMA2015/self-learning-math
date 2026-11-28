#!/usr/bin/env node
"use strict";
/* RELEASE Delta B — #977-044/#047. No learner source duplication.
 * Assert that three published projections differ ONLY by owner-approved
 * nonmathematical wording. Reverse exact substitutions and compare the
 * original Git blob SHA, protecting stem math, options, keys, rubrics and Q16.
 */
const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");

const cases = [
  {
    file: "docs/assets/javascripts/thpt-chiv-b07-b08-reviewed-formative-v1.js",
    original: "028fb4c053ed08863ca4ba3110d104b46708da0c",
    id: "THPT-G10-B07-P04",
    changes: [
      ["Theo quy ước SGK/SBT KNTT, phát biểu nào đúng", "Theo quy ước đã học, phát biểu nào đúng"],
      ["SGK/SBT quy ước $", "theo quy ước đã học, $"],
      ["quy ước của SGK.", "quy ước đã học."]
    ]
  },
  {
    file: "docs/assets/javascripts/thpt-chvii-reviewed-formative-v1.js",
    original: "2b191d7abba7a4f5bd79d4c122673cd53a45495b",
    id: "THPT-G10-B22-P03",
    changes: [
      ["Dùng quy ước SGK (y^2=2px), (p>0).", "Dùng dạng chính tắc đã học (y^2=2px), (p>0)."]
    ]
  },
  {
    file: "docs/thpt-preview/thu-vien/tu-luan-chuong-vii.md",
    original: "1bbcfec3b492579412ea4e64374c18d3178cb7db",
    id: "THPT-G10-CHVII-W22-01",
    changes: [
      ['<p><strong>Depth note:</strong> kết luận về tiếp tuyến dựa vào duy nhất một giao điểm thực, không yêu cầu phép tính giải tích ngoài SGK.</p>',
       '<p><strong>Lưu ý phương pháp:</strong> Kết luận về tiếp tuyến dựa vào duy nhất một giao điểm thực, không cần dùng phép tính giải tích.</p>']
    ]
  }
];

function gitBlobSHA(text) {
  const bytes = Buffer.from(text, "utf8");
  return crypto.createHash("sha1").update(Buffer.from("blob " + bytes.length + "\0"))
    .update(bytes).digest("hex");
}
function exactlyOnce(s, phrase, context) {
  const n = s.split(phrase).length - 1;
  assert.equal(n, 1, context + ": expected one instance, got " + n);
}
for (const c of cases) {
  const content = require("./thpt-1132-public-formative-delta.cjs").previous(c.file,fs.readFileSync(path.join(root, c.file), "utf8"));
  assert(content.includes(c.id), c.file + ": canonical item ID missing");
  let reversed = content;
  for (const [before, after] of c.changes) {
    exactlyOnce(content, after, c.file);
    assert(!content.includes(before), c.file + ": old administrative wording retained");
    exactlyOnce(reversed, after, c.file);
    reversed = reversed.replace(after, before);
  }
  assert.equal(gitBlobSHA(reversed), c.original,
    c.file + ": noneditorial source delta detected; mathematical content or IDs may have changed");
  console.log("PASS OWNER_EQUIVALENT " + c.id + " - " + c.file);
}
const b07 = fs.readFileSync(path.join(root, cases[0].file), "utf8");
const idx = b07.indexOf('"item_id": "THPT-G10-B07-P04"');
assert(idx >= 0, "P04 missing");
const next = b07.indexOf('"item_id":', idx + 1);
const record = b07.slice(idx, next < 0 ? undefined : next);
assert(record.includes('"answerKey": "D"'), "P04 answer D changed");
assert(record.includes("D. Độ dài 0, được quy ước cùng hướng với mọi vectơ"), "P04 D option changed");

// #054 and #062 are repaired in AUTHORING drafts but not yet released.
// Preserve the current published legacy projections byte-for-byte: they
// already do not expose the corresponding obsolete student labels.
const alreadyClean = [
  {
    file: "docs/assets/javascripts/thpt-g11-chvii-b22-b27-source-locked-formative-r01.js",
    sha: "4d656f2b8d952a2ad0be1c4298d065e0b8c95c88",
    forbidden: "Đáp án sau Submit luyện tập",
    items: 51
  },
  {
    file: "docs/assets/data/thpt-g12-chv-b14-b17-public-r01.json",
    sha: "0570aed17f04537aa5c1047c56d3bf18b91a25dd",
    forbidden: "**Written:** học sinh tự đối chiếu, không được tự động ghi Mastery",
    items: 120
  }
];
for (const c of alreadyClean) {
  const content = fs.readFileSync(path.join(root, c.file), "utf8");
  assert.equal(gitBlobSHA(content), c.sha, "Unapproved G11/G12 legacy bank change");
  assert(!content.includes(c.forbidden), "Obsolete student-facing note: " + c.file);
  assert.equal((content.match(/"item_id":/g) || []).length, c.items,
    "G11/G12 canonical IDs altered");
  console.log("PASS LEGACY_UNCHANGED " + c.file);
}

if (process.argv.includes("--built")) {
  const dir = path.join(root, "site-thpt-preview");
  const written = [
    path.join(dir, "thu-vien/tu-luan-chuong-vii/index.html"),
    path.join(dir, "thpt-preview/thu-vien/tu-luan-chuong-vii/index.html")
  ].find(p => fs.existsSync(p));
  assert(written, "Built Written W22 route missing");
  const html = fs.readFileSync(written, "utf8");
  assert(html.includes('data-thpt-written-canonical="THPT-G10-CHVII-W22-01"'),
    "Built W22 canonical written card missing");
  assert(html.includes("Lưu ý phương pháp:"), "Built W22 new student label missing");
  assert(!html.includes("Depth note:"), "Built W22 leaks author note");
  for (const c of cases.slice(0,2)) {
    const dest = path.join(dir, c.file.replace("docs/", ""));
    assert(fs.existsSync(dest), "Built JS asset missing: " + dest);
    const js = fs.readFileSync(dest, "utf8");
    for (const [before, after] of c.changes) {
      assert(js.includes(after) && !js.includes(before), "Built JS is stale: " + c.id);
    }
  }
  console.log("PASS BUILT_HTML_JS editorial projections / IDs / no admin note");
}
console.log("PASS DELTA_B_SOURCE_EQUIVALENT 3/3 source files; unchanged reverse Git blob SHAs");
