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

// Verify 15 registered G11/G12 FULL_LEARNING_PATH academic authorities at Git
// blob level; protect original receipts instead of deleting historic variants.
// Does NOT give a new Academic/PED verdict or permission to release.
const crypto=require('node:crypto');
const releaseRoot=path.join(root,'prototypes/thpt/release-queue');
const register=fs.readFileSync(path.join(releaseRoot,'REGISTER.md'),'utf8');
const primaryPackets={"11":["G11-SGK-CHI-B01-B04","G11-SGK-CHII-B05-B07","G11-SGK-CHIII-B08-B09","G11-SGK-CHIV-B10-B14-R01","G11-SGK-CHV-B15-B17-R02","G11-SGK-CHVI-B18-B21-R01","G11-SGK-CHVII-B22-B27-R01","G11-SGK-CHVIII-B28-B30-R00","G11-SGK-CHIX-B31-B33-R00"],"12":["G12-SGK-CHI-B01-B05-R00","G12-SGK-CHII-B06-B08-R00","G12-SGK-CHIII-B09-B10-R00","G12-SGK-CHIV-B11-B13-R00","G12-SGK-CHV-B14-B17-R01","G12-SGK-CHVI-B18-B19-END-R00"]};
const effectiveSources=new Set();
const lessonAssignments=new Set();
let verified=0;
for(const [gradeRaw,packetNames] of Object.entries(primaryPackets)){
  const grade=Number(gradeRaw);
  for(const packet of packetNames){
    assert(register.includes('['+packet+'](ready/'+packet+'.md) | SGK_CHAPTER | CONTENT_READY | FULL_LEARNING_PATH'),
      'Missing FULL_LEARNING_PATH CONTENT_READY packet: '+packet);
    const m=fs.readFileSync(path.join(releaseRoot,'ready',packet+'.md'),'utf8');
    const source=/^ACADEMIC_SOURCE_PATH:\s*(\S+)/m.exec(m)?.[1];
    const sha=/^ACADEMIC_SOURCE_BLOB:\s*([0-9a-f]{40})/m.exec(m)?.[1];
    const receipt=/^REVIEW_RECEIPT_PATH:\s*(\S+)/m.exec(m)?.[1];
    assert(source && sha && receipt,'Missing academic blob or reviewer receipt: '+packet);
    assert(/^prototypes\/thpt\/content-drafts\/[^/]+\.md$/.test(source),'Noncanonical source location '+source);
    assert(/^prototypes\/thpt\/review-packets\/[^/]+\.md$/.test(receipt),'Noncanonical receipt location '+receipt);
    const bytes=fs.readFileSync(path.join(root,source));
    const blob=crypto.createHash('sha1').update(Buffer.from('blob '+bytes.length+'\0')).update(bytes).digest('hex');
    assert.equal(blob,sha,'Academic Git blob SHA drift: '+packet);
    assert(fs.statSync(path.join(root,receipt)).isFile(),'Missing reviewer receipt: '+packet);
    assert(!effectiveSources.has(source),'Double-register academic source: '+source);
    effectiveSources.add(source);
    const r=/-B(\d{2})-B(\d{2})/.exec(packet);
    assert(r,'Missing lesson-range proof '+packet);
    for(let n=Number(r[1]);n<=Number(r[2]);++n){
      const key=grade+'-B'+String(n).padStart(2,'0');
      assert(!lessonAssignments.has(key),'Competing full-path canonical chapter packets: '+key);
      lessonAssignments.add(key);
    }
    verified++;
  }
}
for(const grade of [11,12])
  for(let n=1;n<=(grade===11?33:19);++n)
    assert(lessonAssignments.has(grade+'-B'+String(n).padStart(2,'0')),
      'No registered full-path canonical author source: '+grade+' B'+n);
assert.equal(verified,15);
assert.equal(effectiveSources.size,15);
assert.equal(lessonAssignments.size,52);
console.log('SGK_AUTHORING_LOCK_CUSTODY_PASS: G11/G12 15/15 canonical packets; 52/52 lessons mapped; source Git blobs exact and reviewer receipts present. NOT academic or website release PASS.');

console.log('SGK_CURRENT_SOURCE_INVENTORY_PASS: 79/79 (G10 27; G11 33; G12 19); no retired G10 prototypes; protected receipts untouched');
