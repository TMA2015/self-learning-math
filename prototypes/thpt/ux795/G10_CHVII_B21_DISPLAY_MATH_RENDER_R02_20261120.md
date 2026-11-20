# G10 B21 — R02 MathJax raw-HTML Markdown delimiter repair · 20/11/2026

**RECEIPT_ID:** G10-CHVII-B21-DISPLAY-MATH-G3-FIX-R02-20261120
**STANDARD_ID:** SLM-THPT-QUALITY-ONE / Q01–Q18, one effective standard.
**LESSON_ID:** G10-B21 · original five outcomes unchanged.
**DELTA_CLASS:** `DELTA_A_UI` (MathJax markup rendering only) / `DELTA_B_SOURCE_EQUIVALENT` (all mathematical content and 5 exact original display-TeX expressions byte-equivalent). Not a new Academic/PED source review or separate lesson.
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-vii/bai-21.md` — one canonical learning source.
**PREVIOUS_B21_SOURCE_BLOB:** `37c0a0c2e3c785bbfb1b4852162c867cf72e1626` — first R01 learner-first source; signed Q18 in `G10_CHVII_B21_OWNER_Q18_KNOWLEDGE_ENRICHMENT_R01_20261120.md` remains immutable.
**CANDIDATE_B21_SOURCE_BLOB:** `f07de06dcd063c473673b11eeaa3cc28091e21dd` — R02 exact content Git blob, four HTML-tag lines removed around two original display math blocks.
**R01_PUBLISHED_GH_PAGES_HTML_BLOB:** `8f2dcf61950613b7e3eb94ad88e493fbe25082ef` — defective published B21 HTML snapshot at `gh-pages` HEAD `d1d17ff176f5ffb97ac4a02e97d602cc87d2caa5`. Do not claim this is learner MathJax PASS.

## Observed production blocker and root cause (P1)

After PR #937 final scoped source/browser run [#44688156810](https://github.com/TMA2015/self-learning-math/actions/runs/44688156810) and deploy [#44688309190](https://github.com/TMA2015/self-learning-math/actions/runs/44688309190) SUCCESS, explicit GitHub Pages rendered HTML inspection found **five** `<div class="arithmatex">` wrappers but only **three** with literal `\[`/`\]` delimiters. The two wrappers manually inserted inside the neutral worked-example raw HTML block 3.2 had literal `[` and `]`, because Markdown escaped `\[`/`\]` inside raw HTML without using proper standalone Markdown display math. Hence source-level math conservation and counting wrappers alone gave a false rendering sense; G2 and G3 did not verify each wrapper's actual TeX delimiter. Documented in the *existing* cumulative anti-repeat [Issue #795](https://github.com/TMA2015/self-learning-math/issues/795) under `B21-G3-RAW-HTML-DISPLAY-MATH-20261120`.

## Minimal exact source repair and safety

- Remove only **two opening** `<div class="arithmatex">` and **two closing** `</div>` raw nested tags around the *same existing* display formulas inside the single Golden `thpt-g10-example-solution` neutral example2. Keep original `\[` and `\]` as proper standalone Markdown display blocks with blank-line separation.
- Five original display blocks remain five literal `    \[` / `    \]` pairs. Every display formula text is **identical** to R01 and the historical published pre-R01 baseline.
- Original **70/70 R01 TeX tokens byte-equivalent**, all **49/49 published 13/11 old TeX** retained, original five closed `??? question "Đối chiếu"` answer bodies byte-identical, five canonical TRY IDs/outcomes/help-ref, seven HELP, five formative IDs, original SVG, 2 concept/4 rule cards, 2 worked-example Golden solution boxes, five visible `Vận dụng`, and all four Golden tabs unchanged.
- No rule/derivation/conditions/answer/rubric, Q15/Q16, Final Submit/Readiness/Mastery/RD1, Core/Practice/Written, Gemini, Firebase, shared CSS/JS/runtime or other lesson changed. B20 already **OWNER P2 PASS** and frozen.
- **G3 B21-specific source regression:** `test-g10-chvii-editorial-source.cjs` requires five source display pairs and **zero nested raw `<div class="arithmatex">` in B21 examples**; negative fixture should fail if raw wrappers reintroduced.
- **G3 actual built proof required (not inferred):** B21 source exact SHA/receipt and 390/820/1440 Chromium one-lesson only, no full-site tests. After merge, inspect `thpt-preview/sgk/chuong-vii/bai-21/index.html` on `gh-pages`; **all five** arithmatex display wrappers must contain literal `\[` and `\]`; two example formulas must be visible in neutral worked solution context. If not, `B21_P1_RENDER_HOLD`, fix again before claiming P1.
- **G5:** only successful scoped `deploy-scoped-lesson`, broad `deploy` SKIPPED; Pages artifact SHA and unchanged B20 owner-P2 HTML must be confirmed.

**AUTHOR_SELF_QA_SIGNOFF:** `DELTA_A_UI` render repair only, mathematical equivalence checked, `P0=0`, `P1=0` in source content. **B21 OWNER_P2_PENDING**; final production P1 pending exact HTML checks.
