# G11-SGK-CHI-B01-B04 — Full SGK Chapter I academic handoff V2; Release QA pending

PACKET_ID: G11-SGK-CHI-B01-B04
LEARNING_PATH: SGK_CHAPTER
LESSON_SCOPE: B01-B04; 26 RD0 outcomes; 46 PUBLIC canonical IDs; 20 confidential RD1 candidate IDs
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
- [ ] R1_INTEGRATED_CURRENT_MAIN — Source R03 PED texts staged to learner pages B01–B04 on PR #697; AP, chapter Final Submit, branch rebasing and final R1 acceptance remain open.
- [ ] R2_EXACT_HEAD_CI — All mandatory checks must complete SUCCESS at final PR head SHA after finishing manifest and rendered learner changes; old green runs do not count.
- [ ] R3_CLEAN_STUDENT_UI — G11 chapter page mounts a 20-item voluntary Final Submit self-check; rendered UI and academic label cleanup still require browser QA on exact integrated HEAD.
- [ ] R4_ASSESSMENT_SAFETY — Client-only 20 Written manual-rubric Final Submit staged; 390/820/1440 browser no-leak, no score/Mastery/storage, and raw private archive exclusion checks still require exact-head SUCCESS. The exposed items are NOT independent held-out Readiness evidence.
- [ ] R5_OWNER_APPROVAL — Owner 02/11/2026 authorizes publishing genuinely eligible packages after full gates; no skip of Final Submit, AP, CI, or production P1 verification.

## AP — academic presentation quality on rendered learner pages
- [ ] AP1_IDEA_HIERARCHY — Need browser inspection of R03 B01–B04 concept-before-formula hierarchy and noncramped sections.
- [ ] AP2_FORMULA_VISIBILITY — Verify MathJax/rendering of all new and old expressions at 390 820 and 1440 viewport widths.
- [ ] AP3_FIGURE_READABILITY — Verify six original SVGs and new guided reading captions, axes, contrast, and accessibility.
- [ ] AP4_SELF_STUDY_CLARITY — Need student-first comprehension of independent first try, worked reasoning, remediation, and next actions.
- [ ] AP5_RESPONSIVE_VISUAL — Verify no clipped content in mobile/tablet/desktop simulation; actual Safari device remains P2.

## P — postrelease
- [ ] P1_DEPLOY_RECEIPT — Only after merge and Deploy MkDocs SUCCESS on exact main SHA and verifying gh-pages chapter pages, JS, SVG and Final Submit.
- [ ] P2_DEVICE_UAT — Human physical iPhone/iPad Safari test not yet provided; never infer it from headless browser.

**Final release status:** CONTENT_READY is Academic+PED custody only. SYSTEM_HOLD remains for AP and Final Submit runtime/assessment QA until Release lane R1–R5 verified. No deploy or Mastery activation from this manifest alone.
