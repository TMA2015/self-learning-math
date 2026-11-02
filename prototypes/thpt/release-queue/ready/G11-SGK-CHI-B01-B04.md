# G11-SGK-CHI-B01-B04 — Full SGK ChI reviewed V2; R/AP release acceptance evidence (P1/P2 separate)

PACKET_ID: G11-SGK-CHI-B01-B04
LEARNING_PATH: SGK_CHAPTER
LESSON_SCOPE: B01-B04; 26 RD0 outcomes; 46 PUBLIC canonical ID records; 20 original held-out RD1 items now exposed only via a separate 20-item voluntary client self-check copy (not independent unseen evidence)
RELEASE_SCOPE: FULL_LEARNING_PATH
STATE: CONTENT_READY
SOURCE_COMMIT: 20765a1e3f3972e7949945ee4986d603a8527423
REVIEW_RECEIPT: prototypes/thpt/review-packets/G11_SGK_CHI_B01_B04_R03_COMBINED_INDEPENDENT_REVIEW_RECEIPT_20261102.md [Git blob 4a7831cea1738a0d57f3e60bf6791f995aa693d8]; original R01 and targeted PED R02/R03 linked therein
CURRENT_PR: https://github.com/TMA2015/self-learning-math/pull/697
HANDOFF_PROTOCOL: THPT-TWO-LANE-V2
AUTHOR_HANDOFF: prototypes/thpt/release-handoffs/G11-SGK-CHI-B01-B04_HANDOFF_V2_20261102.md
ACADEMIC_SOURCE_PATH: prototypes/thpt/content-drafts/G11_CHI_B01_B04_CONCEPT_FIRST_PED_R03_SOURCE_CANDIDATE_20261102.md
ACADEMIC_SOURCE_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3
REVIEW_RECEIPT_PATH: prototypes/thpt/review-packets/G11_SGK_CHI_B01_B04_R03_COMBINED_INDEPENDENT_REVIEW_RECEIPT_20261102.md
REVIEW_RECEIPT_BLOB: 4a7831cea1738a0d57f3e60bf6791f995aa693d8
ACADEMIC_VERDICT: PASS_ON_LOCKED_SNAPSHOT
PEDAGOGICAL_VERDICT: PASS_ON_LOCKED_SNAPSHOT
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
BLOCKERS: NONE

**Scope of READY:** Only AUTHORING gates A1–A7 + PED, not an assertion the integrated website, chapter self-check, AP1–AP5 or release QA is finished. The exact public source R03, combined independent reviewer receipt, and authoring V2 handoff are present on this candidate branch with Git blob SHA parity. Source R03 metadata still includes original pre-review 'candidate' labels; later dated independent R01/R02/R03 receipts supersede those historical source headings without rewriting source bytes. The exact PRIVATE canonical archive was not committed. Under owner Issue #662, a distinct PUBLIC 20-item client self-check JSON derived from reviewed RD1 is staged for voluntary review after Final Submit; its stems/keys/rubrics are client-exposed by choice, so the 20 items must NEVER be represented as independently held-out, proctored or Mastery-bearing evidence.

## A — biên soạn/review
- [x] A1_SOURCE_SNAPSHOT — R03 public canonical source locked to Git blob 256ceb5edc5e02aec320e83e99c8e08e035654f3; immutable author receipt and original R01/R02 retained in signed handoff.
- [x] A2_SGK_SBT_SCOPE — S1 KNTT SGK Toán 11 tập 1 ChI B01 5–16 B02 17–21 B03 22–30 B04 31–39; SBT pages and scope independently checked in combined receipt.
- [x] A3_NOTEBOOKLM_VERDICT — Independent Academic R01 PASS 26/26 outcomes and 46/46 public IDs; targeted B03/B04 PED R02 and B01/B02 PED R03 PASS, combined receipt exact original review scopes.
- [x] A4_ITEM_OUTCOME_IDS — One public source with 46 unique canonical records (42 Core/Practice plus four Written/Anchor), 26 RD0 outcomes, full item-to-outcome mapping verified in V2 handoff.
- [x] A5_D1_D6_SCOPE — Each of four lessons includes concept-first theory, 18 worked examples, 42 Core/Practice items, four Written, six educational SVG and eight D6 remediation supports.
- [x] A6_DELTA_RESOLVED — R01 original math unchanged; targeted pedagogical additions R02 B03/B04 and R03 B01/B02 independently reviewed PASS, P0/P1/P2 zero, no unreviewed academic delta.
- [x] A7_PUBLIC_PRIVATE_BOUNDARY — The 20-item canonical private archive remains outside GitHub; the owner-approved separate PUBLIC reviewed self-check JSON exposes stems/answers/rubrics client-side under #662, so these 20 cannot count as independent held-out Readiness evidence. No Mastery or storage writes.

## PED — independent concept-first learning review
- [x] PED1_MOTIVATION — B01/B02 targeted R03 and B03/B04 targeted R02 introduce real mathematical problems and reasons the concepts exist before symbols, independently PASS.
- [x] PED2_PREREQUISITES — Source R03 bridges earlier triangle ratios and unit circle into functions and equation solutions, with S1 terminology explained and independent PED verdict PASS.
- [x] PED3_MEANING_FIRST — All four lessons have explanatory meaning-first narratives ahead of formula/algorithm; R02/R03 change scopes independently PASS.
- [x] PED4_EXPLAINED_VISUAL — Six original figures have reviewed visual-reading descriptions; R03 B01/B02 two figures, R02 B03 four, with no math SVG changes.
- [x] PED5_REASONED_EXAMPLES — Eighteen reviewed D2 examples include why-method selection, conditions, and common errors; R02/R03 PED5 ALL_PASS on respective lessons.
- [x] PED6_FIRST_TRY_REMEDIATION — Four formative first-tries precede Core with voluntary reveal/remediation; eight original D6 supports preserved and no new canonical score IDs.

## R — phát hành
- [x] R1_INTEGRATED_CURRENT_MAIN — All 4 lessons, 42 Core/Practice, four shared Written, six reviewed SVG, eight D6, reviewed PED R03 and 20-item client self-check integrated into PR #697; GitHub PR mergeable with current main (includes governance #699). Combined site build passes preview CI #41392601965 on candidate HEAD 3a02b1d.
- [x] R2_EXACT_HEAD_CI — Full THPT Preview, Roadmap PR Quality, Skill Assessment and Branding CI all SUCCESS at learner-candidate HEAD 3a02b1d (runs 41392601965 / 41392602056 / 41392602075 / 41392602042). This manifest-only DELTA_A checkpoint MUST also pass all four checks at its FINAL PR HEAD before merge; previous head PASS alone is NOT release permission.
- [x] R3_CLEAN_STUDENT_UI — Source and HTML QA verified concept-first ordering, lesson links, no review/PED internal labels on all four learner pages; G11 B01/B02 and B03/B04 Chromium 390/820/1440 PASS in #41392601965; chapter-end explicitly says 20 Written self-assessment, not independent Readiness.
- [x] R4_ASSESSMENT_SAFETY — CI #41392601965 passed exact 20 Written reviewed IDs, no raw PRIVATE archive, no pre-Final Submit answer/solution/rubric UI leakage, navigation/one Final Submit, post-submit manual rubric, no machine Written grade, no local/session writes, no official independent Readiness or Skill Mastery across 390/820/1440.
- [x] R5_OWNER_APPROVAL — Latest owner instruction 02/11/2026 explicitly authorizes publishing genuinely qualified new content after evidence gates; owner pause on recurring Math automation is NOT lifted; production merge still conditional on all exact-final-head CI SUCCESS.

## AP — academic presentation quality on rendered learner pages
- [x] AP1_IDEA_HIERARCHY — Reviewed R02/R03 concept-first progression precedes D1 in B01–B04; 15/15 B03/B04 knowledge sections and B01/B02 structural headings verified by source-lock tests; responsive browser on PR HEAD passed.
- [x] AP2_FORMULA_VISIBILITY — Source-locked 27 B01 knowledge expressions and 16 B02 pilot math expressions unchanged; Preview CI browser MathJax heading/render no-overflow at 390/820/1440 (AP pilot PASS).
- [x] AP3_FIGURE_READABILITY — Exact source hash guard for two B01/B02 SVG and four B03 graphs PASS; new reviewed PED4 descriptions/alt accessible in lesson markup, responsive browser smoke 390/820/1440 PASS. This is TECHNICAL/AP browser evidence only, not real-device P2.
- [x] AP4_SELF_STUDY_CLARITY — Independent NotebookLM R02/R03 PED5–6 PASS, four first-try voluntary reveal blocks before Core, reasoned examples and eight HELP links staged; B01–B04 source/interaction QA PASS. This is a technical/academic acceptance, not observed learner outcome.
- [x] AP5_RESPONSIVE_VISUAL — Preview CI #41392601965 includes responsive browser QA at 390/820/1440 for G11 B01–04 and 20 Written Final Submit; no horizontal overflow in G11 assessment and AP pilot; actual physical Safari stays P2 open.

## QA receipt — no inferred release from old SHA

- THPT R4 Preview run: https://github.com/TMA2015/self-learning-math/actions/runs/41392601965 — SUCCESS on 3a02b1d, including G11 Final Submit Chromium 390/820/1440, source-locked 46 public, browser regression and source/private bank guards.
- Roadmap PR Quality run: https://github.com/TMA2015/self-learning-math/actions/runs/41392602056 — SUCCESS on 3a02b1d, including V2 handoff gate and THCS browser visual regression.
- Skill Assessment run 41392602075 and Branding run 41392602042 — SUCCESS on 3a02b1d.
- **Final-HEAD QA:** metadata changes after 3a02b1d must be rechecked on the exact last PR HEAD before merge. Do not reuse these old receipts if checks fail or are incomplete.
- **Official readiness:** no credit or Mastery because all 20 client-exposed questions are voluntary self-comparison; future independent unseen SGK readiness requires a new protected/controlled bank.

## P — postrelease
- [ ] P1_DEPLOY_RECEIPT — Only after merge and Deploy MkDocs SUCCESS on exact main SHA and verifying gh-pages chapter pages, JS, SVG and Final Submit.
- [ ] P2_DEVICE_UAT — Human physical iPhone/iPad Safari test not yet provided; never infer it from headless browser.

**Release disposition:** All A1–A7, PED1–6, AP1–AP5 and R1–R5 have positive scoped evidence at 3a02b1d. STATE remains CONTENT_READY in this **initial V2 manifest** per governance #699 (initial handoff cannot jump directly to RELEASE_READY); mandatory QA must rerun on this final documentation HEAD before merging. Only after authorized merge and verified live P1 should this packet transition to published inventory, without falsely declaring P2 or independent Mastery. This manifest alone does not trigger deploy.
