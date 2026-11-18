# G10 ChIV B11 R02 — owner P2 Tab4 Golden accordion repair

**DATE:** 18/11/2026 · **MASTER:** #795 · **DEFECT_ID:** B11-UI-TAB4-01 · **SCOPE:** learner-facing B11 Tab “Lỗi thường gặp” only; no change to earlier approved B01–B10.
**STANDARD:** SLM-THPT-QUALITY-ONE Q01–Q18; AP1/AP2/AP5 Golden UI regression.
**CLASSIFICATION:** DELTA_A_UI — moving headings/questions into the existing three default-closed accordion disclosures. Same mathematical content, wrong step, diagnosis, correction, retry, answer/keys/rubrics, item IDs, outcomes, Q16/Final Submit, RD1/Firebase/Mastery, no figure/CSS/library edits.
**OWNER_P2:** OPEN pending live device verification of released R02. Owner provided two screenshots on 18/11/2026, comparing erroneous B11 with accepted B10.

## Immutable SHA chain — reviewed R01 → UI-only R02

**R01_PUBLISHED_B11_SOURCE_BLOB:** `e5cdc6e7a0e6b337069815a7ecd8ea39854b49bc`
**R01_PUBLISHED_B11_CANONICAL_BLOB:** `9da519eacfa4258ebd116838e6fbe040b8f6ffca`
**R01_Q18_RECEIPT_BLOB:** `ca15fad1ac670ae61dabbf88d4678b9bb7e2381a`
**R01_CSS_BLOB:** `818866d2ea73b3252649f78926fe3abd343abc64`
**R02_B11_SOURCE_BLOB:** `60a3d043694986e3250f15b51350380b86f70cfc`
**R02_ONE_CANONICAL_B11_BLOB:** `db9ec64bc82d44ae09a7cdce79b97e14ac4a2ef8`
**R02_CSS_BLOB:** `818866d2ea73b3252649f78926fe3abd343abc64`
**ONE_CANONICAL_PATH:** prototypes/thpt/content-drafts/THPT_G10_CHIV_B11_CANONICAL.md
**PUBLIC_KNOWLEDGE_PATH:** docs/thpt-preview/sgk/chuong-iv/bai-11.md

## Root cause / control failure

B11 R01 Tab4 was authored with **three separate heading cards** followed by three accordion disclosures; Golden CSS styles the headings into cards, creating an unwanted title-card above every accordion. B10 (owner-approved) presents the numbered mistake heading directly in the disclosure summary with no extra heading cards. B11 initial Chromium QA incorrectly **required** exactly three headings in Tab4, making the regression an implicit accepted condition; it did not compare the DOM layout pattern against B10. This defect is in content markup and missing comparison assertion, not global CSS or mathematics.

## Minimal targeted R02 transformation, no academic re-review

For each 4.1–4.3, remove only redundant standalone heading. The **identical title** is moved into each disclosure summary, the **identical former question** is moved to the beginning of that disclosure under a presentational **Tự nhận diện** label. Keep three original hidden canonical HELP spans, default-closed disclosures, complete wrong-step/cause/correction/retry paragraphs, and links verbatim.

Explicitly prohibit changes to all other Knowledge tabs, original bank items, Written, SVG, CSS, First Try IDs, Q16, Mastery, Firebase, RD1 or published B01–B10. The R01 independent NotebookLM report (Academic/PED PASS, P0/P1/P2=0 for canonical 9da519ea) remains immutable and is not relabeled as an R02 re-review. This R02 is a verified DELTA_A_UI; no second academic standard or reviewer PASS is invented.

## Release and QA gates

1. Verify R01→R02 source and single canonical exact Git blob SHA; R01 Q18 file unchanged. Public Knowledge must equal canonical Section A byte-for-byte.
2. Verify R02 diff is limited to the three Tab4 title/summary/question placements. Check exact previous wording of all three wrong steps, reasons, remedies and retrials and all canonical IDs.
3. Source and built HTML: B11 Tab4 has **zero** h3 headings inside mistake panel, **exactly three** numbered default-closed accordion summaries, with 4.1 / 4.2 / 4.3; B10 Tab4 same structural pattern. Help placeholders hidden and correct; disclosure content reachable only by clicking.
4. Real Chromium 390/820/1440 CSS light/slate, expanded contents MathJax/retries readable; frozen B01–B10 HTML hashes unchanged; exact-final-HEAD full CI required.
5. Merge/deploy only when RELEASE gates PASS. Owner standing release authorization applies; **OWNER P2 only after real-device retest**.

**CURRENT:** B11_R02_UI_PATCH_ON_BRANCH / QA_PENDING / NO_MERGE_NO_DEPLOY / OWNER_P2_PENDING.
