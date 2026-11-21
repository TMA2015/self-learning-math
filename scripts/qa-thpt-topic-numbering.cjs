#!/usr/bin/env node
"use strict";

/**
 * AUTHORING structural lint for the one SLM-THPT-QUALITY-ONE standard (Q01–Q18).
 * This does not establish another academic standard or perform RELEASE UI QA.
 *
 * Usage: node scripts/qa-thpt-topic-numbering.cjs <learner1.md> [learner2.md ...]
 * Checks same-level numbering, parent/child hierarchy, scoped practice labels,
 * and ordered (a),(b),(c) subquestions. Does not inspect MathJax arithmetic.
 */
const fs = require("node:fs");

function lintTopicMarkdown(markdown, displayPath) {
  const errors = [];
  const add = (code, message) => errors.push({ code, message });
  const pages = ["Kiến thức", "Luyện tập", "Tự kiểm tra"];
  const sections = [];

  for (const page of pages) {
    const pattern = new RegExp("^# " + page + "[ \\t]*$", "gm");
    const hits = [...markdown.matchAll(pattern)];
    if (hits.length !== 1) add("PAGE", page + ": expected one H1 page, found " + hits.length);
    sections.push(hits[0] ? hits[0].index : -1);
  }
  if (sections.some((index) => index < 0)) return { file: displayPath, errors };
  if (!(sections[0] < sections[1] && sections[1] < sections[2])) {
    add("PAGE_ORDER", "Required: Kiến thức -> Luyện tập -> Tự kiểm tra");
    return { file: displayPath, errors };
  }

  for (let section = 0; section < 3; section++) {
    const page = pages[section];
    const end = section < 2 ? sections[section + 1] : markdown.length;
    const text = markdown.slice(sections[section], end);
    const lines = text.split("\n");
    let group = 0;
    let child = 0;
    const practiceLabels = new Map();
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const h2 = line.match(/^## (.*)$/);
      if (h2) {
        const number = h2[1].match(/^(\d+)\.\s+/);
        if (!number) add("UNNUMBERED_SIBLING", page + " H2 " + (i + 1) + ": " + line);
        else {
          const value = Number(number[1]);
          if (value !== group + 1) {
            add("MISSING_PREDECESSOR", page + " H2: expected " + (group + 1) + ", saw " + value);
          }
          group = value;
          child = 0;
        }
      }
      const h3 = line.match(/^### (.*)$/);
      if (h3) {
        const numbers = h3[1].match(/^(\d+)\.(\d+)\.\s+/);
        if (!numbers) add("UNNUMBERED_LESSON", page + " H3 " + (i + 1) + ": " + line);
        else {
          const parent = Number(numbers[1]);
          const minor = Number(numbers[2]);
          if (parent !== group || minor !== child + 1) {
            add("ORPHAN_CHILD", page + ": expected " + group + "." + (child + 1) +
                ", saw " + parent + "." + minor);
          }
          child = minor;
        }
      }
      if (/^####\s/.test(line)) add("SKIPPED_LEVEL", page + ": unexpected H4 " + line);
      if (page !== "Luyện tập") continue;
      const item = line.match(/^\*\*(Bài SGK|Bài luyện|Bài|Luyện|Tự luận)\s+(\d+)\.(?:\*\*|\s|$)/);
      if (!item) continue;
      const key = group + "|" + item[1];
      const previous = practiceLabels.get(key);
      const value = Number(item[2]);
      // Each named sequence is either local (starts at 1) or continues across groups.
      if (previous === undefined) {
        if (value !== 1) {
          const earlier = [...practiceLabels.entries()].filter(([k]) => k.endsWith("|" + item[1]));
          const last = earlier.length ? earlier[earlier.length - 1][1] : undefined;
          if (last === undefined || value !== last + 1) {
            add("PRACTICE_START", page + ": " + item[1] + " starts at " + value +
                " without 1 or a preceding group's " + (value - 1));
          }
        }
      } else if (value !== previous + 1) {
        add("PRACTICE_GAP", page + ": " + item[1] + " expected " +
            (previous + 1) + ", saw " + value);
      }
      practiceLabels.set(key, value);
    }
    if (section < 2 && group === 0) add("EMPTY_GROUPS", page + ": no numbered H2 group");
  }

  const practice = markdown.slice(sections[1], sections[2]);
  // Detect ordered letter subparts on the learner's question portion only, not
  // mathematical variables, solutions, remarks or answer examples.
  const chunks = practice.split(/<!-- DISPLAY_ONLY_CANONICAL:[^\n]*-->/g).slice(1);
  for (let i = 0; i < chunks.length; i++) {
    const question = chunks[i].split(/<details\b/)[0];
    const labels = [...question.matchAll(/\(([a-h])\)/g)].map((m) => m[1]);
    if (!labels.length) continue;
    const ordered = [...new Set(labels)];
    if (ordered[0] !== "a") add("ORPHAN_LETTER", "Practice card " + (i + 1) + " starts with (" + ordered[0] + ")");
    for (let j = 1; j < ordered.length; j++) {
      if (ordered[j].charCodeAt(0) !== ordered[j - 1].charCodeAt(0) + 1) {
        add("LETTER_GAP", "Practice card " + (i + 1) + ": (" +
            ordered[j - 1] + ") -> (" + ordered[j] + ")");
      }
    }
  }
  return { file: displayPath, errors };
}

if (require.main === module) {
  const files = process.argv.slice(2);
  if (!files.length) {
    process.stderr.write("Usage: node scripts/qa-thpt-topic-numbering.cjs <learner.md> [...]\n");
    process.exit(2);
  }
  const data = [];
  for (const file of files) {
    try { data.push(lintTopicMarkdown(fs.readFileSync(file, "utf8"), file)); }
    catch (error) { data.push({ file, errors: [{ code: "IO", message: String(error.message || error) }] }); }
  }
  const errors = data.flatMap((x) => x.errors);
  process.stdout.write(JSON.stringify({ files: data.length, failures: errors.length, results: data }, null, 2) + "\n");
  process.exitCode = errors.length ? 1 : 0;
}

module.exports = { lintTopicMarkdown };
