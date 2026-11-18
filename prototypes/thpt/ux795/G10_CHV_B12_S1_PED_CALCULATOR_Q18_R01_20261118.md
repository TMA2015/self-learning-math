# G10 ChV B12 R01 — S1/PED, Calculator and canonical SHA receipt

**ISSUE:** #795 · **LESSON_ID:** G10-CHV-B12 · **STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0 Q01–Q18 · **DELTA:** DELTA_C_ACADEMIC_MATERIAL for calculator learning outcome, new practice item, four worked examples and D6; DELTA_A_UI for student copy/numbering/figure placement.

**AUTHOR_QA_DISPOSITION:** CANDIDATE_ONLY / INDEPENDENT_NOTEBOOKLM_ACADEMIC_PED_REVIEW_PENDING / S1_PRIMARY_PDF_ORIGINAL_NOT_AUTHENTICATED / CONTENT_READY_NOT_GRANTED / NO_MERGE_NO_DEPLOY. Technical CI cannot grant academic PASS.

## Exact Git blob receipts

**BASELINE_B12_KNOWLEDGE_BLOB:** `386a8d46bb4960bbab4934a5891fad89406ac7a5`
**BASELINE_B12_8_ITEM_JS_BLOB:** `b9e5f967671bd76e03c420e88ebfcb4e9dc02bc7`
**BASELINE_CHV_PUBLIC_PRACTICE_HUB_BLOB:** `e99b057ebc26f93821d0a2f161279d071d3f51bf`
**BASELINE_W12_W13_W14_PUBLIC_WRITTEN_BLOB:** `8a1fbabe62d749177d2986e3d59ddb979a9d0267`
**BASELINE_B12_PUBLISHED_HTML_BLOB:** `a33bd362e79c8fd53a3250e97d73737d318bd45e`
**B12_R01_SOURCE_BLOB:** `fc2942aeafdcd34d3cedd9eeb24c48716bbe7e78`
**B12_R01_ITEM_BANK_BLOB:** `ca93acc0dd4df6e8f7fcd45732a6c69d82892d3f`
**B12_R01_PRACTICE_HUB_BLOB:** `9a559ebf48e9c75abe3ebbdee667944eb2ae98b1`
**ONE_CANONICAL_B12_R01_BLOB:** `c4ee9f322d158d775be551c9888d426aba8ee16d`
**FROZEN_B13_SOURCE_BLOB:** `0459b67858246cb6136cf9a2cf9e7a7d18bd27be`
**FROZEN_B14_SOURCE_BLOB:** `21c1ef59277f742b45a27900b173fac031a4a04f`
**FROZEN_CSS_BLOB:** `818866d2ea73b3252649f78926fe3abd343abc64`
**ONE_CANONICAL_PATH:** prototypes/thpt/content-drafts/THPT_G10_CHV_B12_CANONICAL.md

## S1 and academic scope

SGK Toán 10 Kết nối tri thức Tập 1, Bài 12, printed pp73–77: three major sections §1 Số gần đúng, §2 Sai số tuyệt đối và sai số tương đối, §3 Quy tròn số gần đúng. Printed p73 requires handheld calculator; p74 shows 2^9√3 calculation; p77 exercise 5.3 asks ∛7 with accuracy 0.0005. Exact book wording based on a public PDF transcription and independent HTML mirror, but original publisher-supplied PDF, printed↔PDF page-index chain, and original SBT page custody were **not verified**. Do not claim primary S1-source PASS without independent reviewer receipt.

Retained source-matched formal §2.1/§2.2/§2.3 content and existing B12 SVG. The figure was moved from Tab2 to intuitive Tab1 next to the first interval explanation; new Tab3 example uses **different numbers**, not duplicate figure data. Kept original D5 data a=20.0cm,d=0.1cm (19.9..20.1). The original eight B12 C/P item objects were compared by complete JSON value against published baseline and are **8/8 exactly identical**. Original Written W12 is reproduced source-exact, original W13/W14 preserved.

## Outcome and item-role matrix

| Outcome | Concept / Tab1 | Formal S1 / Tab2 | Solved examples / Tab3 | New/old formative/HELP |
|---|---|---|---|---|
| APPROX_CONCEPT | 1.1, 1.2, TRY01 | 2.1 | 3.4 calculator connection | B12-P04 |
| ABS_ERROR | Interval graphic, TRY02 | 2.2 | 3.1, 3.2 | B12-C01/C02, HELP-B12-01 |
| REL_ERROR | TRY03 | 2.2 | 3.1 | B12-P01/P03/P06, HELP-B12-02 |
| ROUNDING | TRY04 | 2.3 | 3.3 | B12-P02/P05 |
| CALCULATOR | **1.3**, TRY-CALC-R01 (∛11) | 2.1 how to use output | **3.4** 2^9√3 | **new B12-P07 (∛7)**, HELP-B12-CALC-01 |

**FirstTry canonical IDs:** THPT-G10-CHV-TRY01/02/03/04 and THPT-G10-CHV-TRY-CALC-R01. **Public records:** THPT-G10-B12-C01/C02/P01–P07 (9 unique). **HELP:** HELP-G10-B12-01/02 and HELP-G10-B12-CALC-01. **Written:** THPT-G10-CHV-W12 unchanged. New P07 not reused in the first-try, so the already-revealed model answer cannot be mistaken for independent item evidence.

## Technical and release gates

1. Public Knowledge equals Section A of one current canonical byte-for-byte; public item JS equals Section B; original W12 exact immutable historical source. Q15 no duplicate IDs or cloned answer/version.
2. Q03–Q08 and PED1–PED6: intuitions precede formulas; calculator model-agnostic input/display/rounding; deep solved methods, zero raw TeX, no student-visible implementation labels; D6 actual wrong step with closed tip. SVG physically readable and tied to correct example, MathJax and responsive at 390/820/1440.
3. New P07 must render with correct answer and optional hint; no hint/answer/AI before protected Chapter V Final Submit, no changes to RD1/Firebase/Mastery; original eight items immutable. B13/B14, all B01–B11 approved sources/html unchanged.
4. **Independent NotebookLM** review of all affected lesson-outcome/items with exactly five THPT v2.1 Permanent Sources and original S1, provide SOURCE_RECEIPT and Academic/PED PASS, Q01–Q18, P0/P1/P2 MINIMAL_DELTA. If not proven, hold. This receipt is not itself approval.
5. If Academic/PED are genuinely cleared on this exact source, full CI on exact HEAD, release/AP and owner standing permission must pass before merge/deploy. Physical device P2 belongs to owner separately.

**STATE:** B12_CANONICAL_AUTHORING_CANDIDATE / INDEPENDENT_REVIEW_PENDING / NOT_CONTENT_READY / NO_MERGE_NO_DEPLOY.
