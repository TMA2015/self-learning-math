# G10 ChIV Bài 10 — owner P2 MathJax display defect / scoped DELTA_A_UI R02 (18/11/2026)

**ISSUE:** #795 · **RELEASE_BASELINE:** PR #903 P1 verified · **OWNER_P2:** HOLD pending actual device retest
**STANDARD:** SLM-THPT-QUALITY-ONE Q01–Q18; AP2/AP3/AP5 / Q07 display only.
**CLASSIFICATION:** DELTA_A_UI (Markdown→HTML→MathJax delimiter rendering). No changes to mathematical expressions, answer keys, canonical item identities, examples, First Try, method choice, figures, rubrics, assessment, privacy, Tutor, Mastery or learner data.
**BASELINE_MAIN_MERGE:** `214a117fb2e17595bad64ddde6e0fa656fee856e`
**BASELINE_R01_SOURCE_BLOB:** `b923f5f491c007c54392d3f7d7be83193f3f93fc`
**BASELINE_R01_CANONICAL_BLOB:** `d5561ed615865538f3397fe39ee0e737117d52cd`
**R02_SOURCE_BLOB:** `b5f72c28668f9cad548bb6ec000dc435d9557652`
**R02_ONE_CANONICAL_LESSON_BLOB:** `22ebe6b2e11f2a2c47752862a873c8c98fd6d7ec`
**CANONICAL_PATH:** `prototypes/thpt/content-drafts/THPT_G10_CHIV_B10_CANONICAL.md`
**PUBLIC_KNOWLEDGE_PATH:** `docs/thpt-preview/sgk/chuong-iv/bai-10.md`

## Observed published HTML failure

Owner provided a P2 screenshot of the Knowledge Tab 2 ("Công thức cần sử dụng — Độ dài và khoảng cách" and "Hệ quả hình học — Trung điểm và trọng tâm") showing literal `[ ... \sqrt{...} ... ]` and `[ ... \frac{...} ... ]` in students' view. Confirmed in gh-pages published `thpt-preview/sgk/chuong-iv/bai-10/index.html` Git blob `0ca6878eaa1710115bb48331f6e857379f52f6d9`, near HTML lines 8520, 8528, 8536 and 8565: original Markdown multiline `\[ ... \]` was emitted as plain `[ ... ]` without `<span class="arithmatex">` or MathJax delimiters in the output. Adjacent `\( ... \)` expressions were correctly wrapped and typeset. Thus P1 source QA passed but failed to assert actual typesetting of these four blocks.

## Exact four-location repair (same ONE canonical manuscript)

1. Tab 2 "Quy tắc — Phép toán tọa độ": 3 original expressions, now 3 `<div class="arithmatex">\(\displaystyle ...\)</div>` block lines.
2. Tab 2 "Công thức cần sử dụng — Độ dài và khoảng cách": 2 expressions, now 2 typeset block lines.
3. Tab 2 "Hệ quả hình học — Trung điểm và trọng tâm": 2 expressions, now 2 typeset block lines.
4. Tab 3 Example 4 counter-current speed calculation: 1 expression, now 1 typeset block line.

Four malformed raw `\[ ... \]` blocks are removed. All eight TeX equations, identifiers and numbers remain unchanged. Only trailing `\quad` / `\qquad` layout spacers at the end of split equation lines were removed; these are spacing commands, not mathematics.

## Required regression and release gates

- One source: exact Knowledge excerpt in the sole updated canonical manuscript equals published Knowledge Markdown byte-for-byte; R01 historical Q18/source SHA remains frozen; this R02 receipt binds the scoped render-only delta.
- Source QA must assert exactly 8 explicit math line wrappers and no raw display-math delimiters in B10; fail if a historical raw block returns.
- MkDocs generated HTML QA must assert actual `arithmatex` wrappers (not literal bracket blocks), and Chromium must confirm MathJax `mjx-container` inside the three Tab2 formula/rule cards and the Tab3 worked math at 390, 820 and 1440 CSS px.
- Preserve frozen B01–B09 owner P2/HTML, all B10 original item IDs and four tab Golden, navigation, images/MathJax, protected Final Submit.
- No new S1/NotebookLM academic review is required for this verified presentational delta, and no prior Academic/PED receipt is relabeled as fresh review.
- **RELEASE STATUS:** candidate/QA only. No merge or deploy without the established exact-final-HEAD CI and owner release authority; P2 only after owner verifies actual device rendering.
