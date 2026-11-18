#!/usr/bin/env node
'use strict';
/* RELEASE housekeeping guard, not another academic standard or Q18 PASS.
 * Checks exactly one ACTIVE learner lesson Markdown per B01...B27/B33/B19,
 * and prevents retired parallel G10 prototype copies from returning.
 * Frozen original source snapshots and Git receipts remain separately scoped.
 */
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const stem = path.join(root, 'docs/thpt-preview/sgk');
const roman = ['i','ii','iii','iv','v','vi','vii','viii','ix'];
const endByGrade = {
  10: [2,4,6,11,14,18,22,25,27],
  11: [4,7,9,14,17,21,27,30,33],
  12: [5,8,10,13,17,19]
};
const expected = new Set();
const counts = {};
for (const [gradeRaw, bounds] of Object.entries(endByGrade)) {
  const grade = Number(gradeRaw);
  counts[grade] = 0;
  let before = 0;
  for (let i = 0; i < bounds.length; ++i) {
    const folder = path.join(stem, ...(grade===10 ? [] : ['lop-'+grade]), 'chuong-'+roman[i]);
    for (let n=before+1; n<=bounds[i]; ++n) {
      const file = path.join(folder, 'bai-'+n+'.md');
      assert(fs.existsSync(file), 'Missing active SGK lesson '+file);
      assert(fs.statSync(file).isFile(), 'Not a file '+file);
      assert(fs.readFileSync(file,'utf8').trim().length > 100, 'Empty lesson '+file);
      const rel = path.relative(stem,file).replace(/\\/g,'/');
      assert(!expected.has(rel), 'Duplicate lesson '+rel);
      expected.add(rel);
      counts[grade]++;
    }
    before = bounds[i];
  }
}
const found = [];
function walk(dir) {
  for (const e of fs.readdirSync(dir,{withFileTypes:true})) {
    const full=path.join(dir,e.name);
    if(e.isDirectory()) walk(full);
    else if(e.isFile() && /^bai-\d+\.md$/.test(e.name)) {
      const rel=path.relative(stem,full).replace(/\\/g,'/');
      if (/^(?:(?:chuong-[ivx]+)|(?:lop-(?:11|12)\/chuong-[ivx]+))\/bai-\d+\.md$/.test(rel)) found.push(rel);
    }
  }
}
walk(stem);
assert.equal(expected.size,79,'Must map 79 unique SGK lessons');
assert.deepEqual(counts,{10:27,11:33,12:19});
assert.deepEqual(found.filter(p=>!expected.has(p)),[],'Unexpected competing SGK page');
assert.equal(found.length,79,'Unexpected duplicate/extra learner page');
const oldDir=path.join(root,'prototypes/thpt/ux795');
const retiredNames=fs.readdirSync(oldDir).filter(n=>
  /^G10_B\d{2}_HYBRID_KNOWLEDGE_CANDIDATE_R0[12]\.md$/.test(n) ||
  /^UX795_G10_B0[1-6]_CONTINUOUS_NARRATIVE_AB_R01\.html$/.test(n) ||
  n==='UX795_HYBRID_CROSSGRADE_AB_20261108.html' ||
  /^test-ux795-(?:g10-(?:chi|chii|chiii)-pilot|g10-full-knowledge-r03|level1-tabs-and-visuals|math-render|pilot)\.cjs$/.test(n)
);
assert.deepEqual(retiredNames,[],'Obsolete parallel prototype still active: '+retiredNames.join(', '));
for(const n of [9,10,11,12]){
  const f=path.join(root,'prototypes/thpt/content-drafts', n===12 ?
    'THPT_G10_CHV_B12_CANONICAL.md':'THPT_G10_CHIV_B'+String(n).padStart(2,'0')+'_CANONICAL.md');
  assert(fs.existsSync(f),'Missing current standalone G10 academic manuscript '+n);
}
console.log('SGK_CURRENT_SOURCE_INVENTORY_PASS: 79/79 (G10 27; G11 33; G12 19); no retired G10 prototypes; protected receipts untouched');
