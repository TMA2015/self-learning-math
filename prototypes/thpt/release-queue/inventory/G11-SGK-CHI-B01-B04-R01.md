# G11 SGK Chương I B01–B04 · A6 release packet (HOLD)

PACKET_ID: G11-SGK-CHI-B01-B04-R01
LEARNING_PATH: SGK_CHAPTER
RELEASE_SCOPE: FULL_LEARNING_PATH
STATE: HOLD
SOURCE_COMMIT: d02f7315c05d9166e6fd53de8f132b3b48a368f9
REVIEW_RECEIPT: https://github.com/TMA2015/self-learning-math/issues/682
CURRENT_PR: https://github.com/TMA2015/self-learning-math/pull/697

**Source lock:** reviewed whole-chapter public Git blob `599d12ac7c2252001f881833c39978f94112cee4`. Original 20 private RD1 items excluded from public source/client. This manifest is **not** a release authorization. [PED/AP gap audit](../G11_CHI_PED_AP_GAP_AUDIT_20261102.md).

## A — academic/source gates
- [x] A1_SOURCE_SNAPSHOT — Owner Issue #682 identifies exact public source Git blob 599d12ac7c2252001f881833c39978f94112cee4 and frozen author PR #681.
- [x] A2_SGK_SBT_SCOPE — Issue #682 records S1 SGK B01–B04 and verified SBT B03 pp11–18, B04 pp19–24, chapter end pp25–30.
- [x] A3_NOTEBOOKLM_VERDICT — Owner-supplied NotebookLM Academic PASS for whole ChI on author source, bounded to correctness and 26 RD0 outcomes.
- [x] A4_ITEM_OUTCOME_IDS — Source-locked 46 unique public canonical IDs (42 formative plus 4 Written), 26 RD0 outcomes; author Issue #682.
- [x] A5_D1_D6_SCOPE — B01–B04 learner pages, six original SVG, eight D6, shared Written/Anchor present; PED quality independently pending.
- [x] A6_DELTA_RESOLVED — No mathematics, answer, rubric, SVG or canonical ID changes in this A6 integration; targeted future PED Delta_C separate.
- [x] A7_PUBLIC_PRIVATE_BOUNDARY — Original 20 private RD1 stems, answers and rubrics remain off public GitHub and are not imported into client.

## PED — independent concept-first review (not inherited from Academic PASS)
- [ ] PED1_WHY — B03/B04 need motivating problem before formulas; see linked PED/AP audit.
- [ ] PED2_PREREQUISITES — B03/B04 lack explicit prerequisite vocabulary bridge; targeted review required.
- [ ] PED3_ESSENCE — Rotation/function and repeated-angle solution essence must precede procedural definitions.
- [ ] PED4_TEACHING_FIGURE — Existing SVG captions need concept-level interpretation and learner verification.
- [ ] PED5_REASONED_EXAMPLES — Eleven examples exist; their concept-first transitions require independent evidence.
- [ ] PED6_FIRST_TRY — No source-reviewed low-stakes first try before Core in B03/B04 learner pages.

## R — release gates
- [ ] R1_INTEGRATED_CURRENT_MAIN — Source-locked B03/B04 public journey staged on #697; full-chapter self-check and PED gates incomplete.
- [ ] R2_EXACT_HEAD_CI — Four workflows passed on ab128dc3904b27f59e13770a47ee6bb5a2bdb73c, but any new commit requires fresh exact-head QA.
- [ ] R3_CLEAN_STUDENT_UI — Chapter-end self-check still marked CHƯA KÍCH HOẠT; do not present as a complete chapter.
- [ ] R4_ASSESSMENT_SAFETY — Issue #662 Final Submit client engine integration, pre-submit UI leak tests and no-Mastery evidence pending.
- [ ] R5_OWNER_APPROVAL — Conditional general owner authorization 2026-11-01 applies only after all A/PED/AP/R gates pass.

## AP — presentation gates
- [ ] AP1_IDEA_HIERARCHY — Seven/eight dense numbered knowledge points in B03/B04 need learner-level concept hierarchy review.
- [ ] AP2_FORMULA_VISIBILITY — Inline code mathematical expressions need MathJax/readability verification on actual rendered pages.
- [ ] AP3_FIGURE_READABILITY — Four B03 SVG source blobs are pinned, but captions/axis/curve interpretations need acceptance.
- [ ] AP4_SELF_STUDY_CLARITY — Internal D6 summary names and first-time learner comprehension not independently validated.
- [ ] AP5_RESPONSIVE_VISUAL — Existing 390/820/1440 smoke is technical evidence only, not full AP or physical Safari acceptance.

## P — postrelease
- [ ] P1_DEPLOY_RECEIPT — No merge, production deploy, main merge SHA or gh-pages verification for this packet.
- [ ] P2_DEVICE_UAT — No real iPhone/iPad Safari verification; never infer P2 from Chromium emulation.

**Disposition:** SYSTEM_HOLD; not release-eligible; no new Academic/PED PASS invented, no merge/deploy.
