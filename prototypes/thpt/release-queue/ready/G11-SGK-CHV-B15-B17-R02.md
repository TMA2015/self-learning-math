# G11 SGK ChV B15–B17 — ONE canonical V2 READY on source-equivalent R03

PACKET_ID: G11-SGK-CHV-B15-B17-R02
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.0.0
QUALITY_EVIDENCE_SECTION: QUALITY_Q01_Q18_EVIDENCE
HANDOFF_PROTOCOL: THPT-TWO-LANE-V2
LEARNING_PATH: SGK_CHAPTER
RELEASE_SCOPE: FULL_LEARNING_PATH
STATE: CONTENT_READY
SOURCE_COMMIT: 27c1e1b1fe49d46c65d94c97fd1da79624c54a80
REVIEW_RECEIPT: prototypes/thpt/review-packets/G11_CHV_R03_COMBINED_INDEPENDENT_R02_ACADEMIC_PED_AND_AUTHOR_S1_RECEIPT_20261102.md (owner independent R02 Academic+PED+fidelity PASS and author direct SBT scan Q01 correction)
CURRENT_PR: #690 — DRAFT AUTHORING ONLY (not RELEASE)
ACADEMIC_SOURCE_PATH: prototypes/thpt/content-drafts/G11_CHV_B15_B17_S1_PAGINATION_EQUIVALENT_R03_SOURCE_20261102.md
ACADEMIC_SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0
REVIEW_RECEIPT_PATH: prototypes/thpt/review-packets/G11_CHV_R03_COMBINED_INDEPENDENT_R02_ACADEMIC_PED_AND_AUTHOR_S1_RECEIPT_20261102.md
REVIEW_RECEIPT_BLOB: 2fdc39c755f399b0df81e17a9c8978384612e2f1
AUTHOR_HANDOFF: prototypes/thpt/release-handoffs/G11-SGK-CHV-B15-B17_HANDOFF_V2_R03_20261102.md
ACADEMIC_VERDICT: PASS_ON_LOCKED_SNAPSHOT
PEDAGOGICAL_VERDICT: PASS_ON_LOCKED_SNAPSHOT
BLOCKERS: NONE
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
EFFECTIVE_SOURCE_REVISION: R03_DELTA_B_ONLY_SBT_CITATION
NOTEBOOKLM_HISTORY: original R02 report was generated using five THPT v2.0 Permanent sources; current five v2.1 are for future independent review
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO

## A — AUTHORING Q01–Q18 academic evidence only

- [x] A1_SOURCE_SNAPSHOT — Frozen R03 canonical public Git blob `7934757ed06de4ae4b63dbc351ef524fc054e0d0`; original R02 reviewed source `77be75de3fd01c7aa9dcc0f1a14e5e2ca68ab7fa`, creator commit `27c1e1b1fe49d46c65d94c97fd1da79624c54a80`, exact SOURCE_COMMIT readback required.
- [x] A2_SGK_SBT_SCOPE — SBT KNTT Tập 1 publisher PDF SHA256 `fb5292103e5b682531ce37b5f30598393bba81b2943da9c1a374fdeb56557229`; **direct original printed** B15 75–78/B16 79–83/B17 84–86/end ChV 87–90, solutions 145–153 (PDF1=print+1). This corrects false previous owner report SBT 96–116/solutions 157–172, not mathematics.
- [x] A3_NOTEBOOKLM_VERDICT — Owner independent R02 Academic/PED PASS on whole ChV, 17/17 outcomes, 13/13 examples, 36/36 public items, 17 private RD1, 3 SVG and 6 HELP; separate independent source-fidelity addendum PASS. R03 has only author-proven Delta_B SBT metadata, no invented new independent R03 verdict.
- [x] A4_ITEM_OUTCOME_IDS — Three lessons, seventeen outcomes, exactly thirty-six original public canonical (thirty formative and six Written/Anchor), thirty-six item→outcome→role mappings; seventeen protected private RD1 counted, not copied.
- [x] A5_D1_D6_SCOPE — Complete R02 SGK ChV D1–D6, thirteen D2 worked, thirty Core/Practice, six Written, three SVG and six HELP, concept-first meaning and nonmastery pre-Core practice.
- [x] A6_DELTA_RESOLVED — Direct SBT source correction R03 is DELTA_B_SOURCE_EQUIVALENT with only six citation/source-status lines changed (exact parity file); answers, item stems, rubrics, conditions, SVG and original reviewer PED scope unchanged.
- [x] A7_PUBLIC_PRIVATE_BOUNDARY — Seventeen independent RD1 private items with original immutable SHA256 `e9985e56cc17decd688a5fd3b068a8c75c5a709025a87afea68491ced18d2f98`, /4 rubric private; no student assessment or protected answers published.

## PED — original independent R02 PED1–PED6 PASS, no self-granted mastery

- [x] PED1_MOTIVATION — B15 why sequence limits, B16 why function limits, B17 why continuity, independently reviewed R02 self-study material.
- [x] PED2_PREREQUISITES — Recall sequences, one-sided algebra and function prerequisites at appropriate lesson entry points, reviewed in R02.
- [x] PED3_MEANING_FIRST — Build finite/infinite limits and continuity conditions before applying memorized formulas, R02 PED PASS.
- [x] PED4_EXPLAINED_VISUAL — Three original SVG/graphs include accessible reading/interpretation evidence under R02 review.
- [x] PED5_REASONED_EXAMPLES — Thirteen original worked examples give reasons for method selection and conditions, reviewer 13/13 PASS.
- [x] PED6_FIRST_TRY_REMEDIATION — R02 offers ungraded learner first tries and six D6 HELP targets, no official scoring or answers before chapter Final Submit.

## RELEASE gates intentionally unchecked

- [ ] R1_INTEGRATED_CURRENT_MAIN — RELEASE has NOT integrated the exact R03 Git source or verified it on a website main build.
- [ ] R2_EXACT_HEAD_CI — RELEASE has NOT passed exact final-HEAD integration CI and all browser regression gates.
- [ ] R3_CLEAN_STUDENT_UI — RELEASE must validate SVG/MathJax, metadata isolation and protected RD1 source custody in actual learner render.
- [ ] R4_ASSESSMENT_SAFETY — RELEASE must validate Final Submit isolation, pre-submit answer/hint protection and no unlawful Mastery writes.
- [ ] R5_OWNER_APPROVAL — OWNER has NOT authorized release website merge/deploy based on this authoring manifest.

## AP — RELEASE rendered learning QA intentionally unchecked

- [ ] AP1_IDEA_HIERARCHY — RELEASE must inspect concept hierarchy on real learner UI.
- [ ] AP2_FORMULA_VISIBILITY — RELEASE must inspect MathJax, domain restrictions, symbols and overflow.
- [ ] AP3_FIGURE_READABILITY — RELEASE must inspect original three SVG labels and figure reading.
- [ ] AP4_SELF_STUDY_CLARITY — RELEASE must inspect WHY→WHAT→D2→Tự thử→Core/D6 progression.
- [ ] AP5_RESPONSIVE_VISUAL — RELEASE must inspect desktop and iPhone/iPad viewport equivalence.

## P — publication intentionally unchecked

- [ ] P1_DEPLOY_RECEIPT — No deploy has been authorized or verified from this authoring source.
- [ ] P2_DEVICE_UAT — No independent real-device acceptance has been granted for release.

## Immutable source/receipt and scope

This replaces only the **effective** source reference of the existing stable `PACKET_ID: G11-SGK-CHV-B15-B17-R02`, not a second ready packet. The independent R02 reviewer source and source-fidelity follow-up remain unaltered, while the author's first-party PDF SBT pagination correction and exact six-line parity receipt are attached via the single V2 `AUTHOR_HANDOFF`. `CONTENT_READY` means academic authoring only; protected RD1 never made public, no production and no Skill Mastery.
