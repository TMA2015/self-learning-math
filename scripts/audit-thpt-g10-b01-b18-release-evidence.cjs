#!/usr/bin/env node
'use strict';
// RELEASE-only structural evidence inventory. Not an Academic/PED verdict.
// Intentionally NOT wired into deploy; known P1s must remain visible.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const ROOT = path.resolve(__dirname, '..');
const CHAPTER = [1,1,2,2,3,3,4,4,4,4,4,5,5,5,6,6,6,6];
const ROMAN = ['', 'i', 'ii', 'iii', 'iv', 'v', 'vi'];
const GOLDEN = ['Khám phá kiến thức','Kiến thức SGK','Ví dụ','Lỗi thường gặp'];
function inspect(source, lesson) {
  const tabs = [...source.matchAll(/^===\s*"([^"]+)"\s*$/gm)].map(m => m[1]);
  const sections = [...source.matchAll(/^\s+###\s+(2\.\d+\.)\s+([^\r\n]+)$/gm)].map(m => m[1] + ' ' + m[2].trim());
  const helps = [...source.matchAll(/\?\?\?\s+tip\s+"([^"]+)"/g)].map(m => m[1]);
  const titles = new Map();
  for (const title of helps) titles.set(title, (titles.get(title) || 0) + 1);
  const repeated = [...titles].filter(([, n]) => n > 1);
  const svgs = [...source.matchAll(/<svg\b[^>]*>([\s\S]*?)<\/svg>/g)].map(m => m[1]);
  const textOnly = svgs.filter(svg => !/<(?:path|line|polyline|polygon|circle|ellipse|rect|use)\b/i.test(svg)).length;
  const issues = [];
  if (JSON.stringify(tabs) !== JSON.stringify(GOLDEN)) issues.push('GOLDEN_4TABS_REVIEW');
  if (repeated.length) issues.push('D6_REPEAT_TITLE_REVIEW');
  if (textOnly) issues.push('SVG_TEXT_ONLY_P1_REVIEW');
  // Known G10/B02 S1 completeness probe, not an auto-PASS.
  if (lesson === 2) {
    if (!/các tập hợp số/i.test(source)) issues.push('B02_S1_NUMBER_SETS_MISSING_P1');
    // A heading or four set names alone cannot discharge S1/Q01/PED. Human review stays mandatory.
    issues.push('B02_S1_NUMBER_SETS_SEMANTIC_REVIEW_REQUIRED');
  }
  // This catches one documented contradiction, not every possible math error.
  if (lesson === 16) {
    // A fake line/path can silence a structural warning: never clear semantic geometry by tag count.
    issues.push('B16_FIGURE_GEOMETRY_REVIEW_REQUIRED');
    if (/I\(2[;,.]?[−-]1\)/.test(source) &&
        /Cách đọc hình[^\n]*\(1,\s*-4\)/i.test(source)) issues.push('B16_FIGURE_GUIDE_CONFLICT_P1');
  }
  return { tabs, sections, helps: helps.length, repeated,
    conclusions: (source.match(/thpt-r4-knowledge-conclusion/g) || []).length,
    figures: (source.match(/<figure\b/g) || []).length,
    inlineSvg: svgs.length, textOnlySvg: textOnly, issues };
}
function selfTest() {
  const minimalTabs = GOLDEN.map(t => '=== "' + t + '"').join('\n');
  assert(inspect(minimalTabs, 2).issues.includes('B02_S1_NUMBER_SETS_MISSING_P1'));
  const headingOnly = minimalTabs + '\n    ### 2.2. Các tập hợp số\n    N, Z, Q, R\n';
  assert(!inspect(headingOnly, 2).issues.includes('B02_S1_NUMBER_SETS_MISSING_P1'));
  assert(inspect(headingOnly, 2).issues.includes('B02_S1_NUMBER_SETS_SEMANTIC_REVIEW_REQUIRED'));
  const falseGraph = minimalTabs + '\n<svg><title>Parabol</title><text>I(2;−1)</text></svg>\n' +
    '**Cách đọc hình.** Quan sát đỉnh (1,-4) và trục x=1.\n';
  const defects = inspect(falseGraph, 16).issues;
  assert(defects.includes('SVG_TEXT_ONLY_P1_REVIEW'));
  assert(defects.includes('B16_FIGURE_GUIDE_CONFLICT_P1'));
  const drawing = falseGraph.replace('</svg>', '<path d="M0 0L1 1"/></svg>');
  assert(!inspect(drawing, 16).issues.includes('SVG_TEXT_ONLY_P1_REVIEW'));
  assert(inspect(drawing, 16).issues.includes('B16_FIGURE_GUIDE_CONFLICT_P1'));
  assert(inspect(drawing, 16).issues.includes('B16_FIGURE_GEOMETRY_REVIEW_REQUIRED'));
  const duplicateHelp = minimalTabs + '\n??? tip "Gợi ý khắc phục"\n??? tip "Gợi ý khắc phục"';
  assert(inspect(duplicateHelp, 15).issues.includes('D6_REPEAT_TITLE_REVIEW'));
  console.log('PASS: 9 negative/positive control assertions. Academic/PED review remains human/source-dependent.');
}
function report() {
  console.log('| Bài | 4 tab | 2.x | Semantic box | Figure | Inline SVG text-only | HELP | Phát hiện tự động |');
  console.log('|---|---|---:|---:|---:|---:|---:|---|');
  let p1 = 0;
  for (let lesson = 1; lesson <= 18; lesson++) {
    const file = path.join(ROOT, 'docs/thpt-preview/sgk/chuong-' +
      ROMAN[CHAPTER[lesson - 1]] + '/bai-' + lesson + '.md');
    const x = fs.readFileSync(file, 'utf8');
    const r = inspect(x, lesson);
    p1 += r.issues.filter(f => f.includes('_P1')).length;
    console.log('| B' + String(lesson).padStart(2, '0') + ' | ' + r.tabs.length +
      ' | ' + r.sections.length + ' | ' + r.conclusions + ' | ' + r.figures +
      ' | ' + r.textOnlySvg + '/' + r.inlineSvg + ' | ' + r.helps + ' | ' +
      (r.issues.join(', ') || 'No automated trigger (NOT academic PASS)') + ' |');
  }
  console.log('\nREAD_ONLY_TRIAGE; ' + p1 +
    ' documented high-priority triggers. No release authorization; see Issue #861 for S1 evidence and learner review.');
}
if (require.main === module) {
  if (process.argv.includes('--self-test')) selfTest();
  else report();
}
module.exports = { inspect };
