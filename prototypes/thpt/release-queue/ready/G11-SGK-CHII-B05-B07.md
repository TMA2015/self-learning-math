# G11 SGK Chương II — canonical author CONTENT_READY V2, primary S1-verified source R03

PACKET_ID: G11-SGK-CHII-B05-B07
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.0.0
QUALITY_EVIDENCE_SECTION: QUALITY_Q01_Q18_EVIDENCE
HANDOFF_PROTOCOL: THPT-TWO-LANE-V2
LEARNING_PATH: SGK_CHAPTER
RELEASE_SCOPE: FULL_LEARNING_PATH
STATE: CONTENT_READY
AUTHOR_PR: 683
EFFECTIVE_SOURCE_REVISION: R03_DELTA_B_S1_METADATA_ONLY
SOURCE_COMMIT: d331b1d703ba6605e1d4930d94ad7230a9d2d66e
REVIEW_RECEIPT: prototypes/thpt/review-packets/G11_CHII_R03_COMBINED_R01_ACADEMIC_R02_PED_S1_SOURCE_RECEIPT_20261102.md (independent R01 Academic PASS + R02 targeted PED PASS + SBT direct book S1 correction)
CURRENT_PR: #683 — DRAFT AUTHORING-ONLY (NOT RELEASE)
ACADEMIC_SOURCE_PATH: prototypes/thpt/content-drafts/G11_CHII_B05_B07_S1_PAGINATION_EQUIVALENT_R03_SOURCE_20261102.md
ACADEMIC_SOURCE_BLOB: 2101e2a248e0cf53ee11847b913b937cebcd0806
REVIEW_RECEIPT_PATH: prototypes/thpt/review-packets/G11_CHII_R03_COMBINED_R01_ACADEMIC_R02_PED_S1_SOURCE_RECEIPT_20261102.md
REVIEW_RECEIPT_BLOB: 09d77f92e6efb266ac15e0d972256319d92a3e1e
AUTHOR_HANDOFF: prototypes/thpt/release-handoffs/G11-SGK-CHII-B05-B07_HANDOFF_V2_R03_20261102.md
ACADEMIC_VERDICT: PASS_ON_LOCKED_SNAPSHOT
PEDAGOGICAL_VERDICT: PASS_ON_LOCKED_SNAPSHOT
BLOCKERS: NONE
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
NOTEBOOKLM_PERMANENT_VERSION_OF_HISTORICAL_R01_R02: THPT-v2.0 (valid original snapshot; five current v2.1 sources for future review)
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO

## AUTHORING A1–A7 (independent review and direct S1 PDF receipt)

- [x] A1_SOURCE_SNAPSHOT — Source Git blob `2101e2a248e0cf53ee11847b913b937cebcd0806` R03, original R01/R02 source listed in independent/author composite receipt `09d77f92e6efb266ac15e0d972256319d92a3e1e`, PDF S1 SHA256 `fb5292103e5b682531ce37b5f30598393bba81b2943da9c1a374fdeb56557229`.
- [x] A2_SGK_SBT_SCOPE — **Direct original book scan**, printed SBT B05 31–34/B06 35–36/B07 37–39/cuối ChII 40–43; PDF one-based index printed+1 verified, 154 pages; exact receipt `G11_SBT_TAP1_PRIMARY_PDF_PRINTED_PAGINATION_RECEIPT_20261102.md`. Original reviewer wrong SBT pages are retained as historical text, explicitly superseded on R03.
- [x] A3_NOTEBOOKLM_VERDICT — R01 independently reviewed Academic PASS on 16/16 outcomes and 19/19 private RD1; owner independent R02 targeted PED PASS `P0=P1=P2=0`; R03 direct-S1 citation-only Delta_B proven line-by-line, not a new mathematics review.
- [x] A4_ITEM_OUTCOME_IDS — 3 lessons, 16 outcomes, 42 public unique canonical, 42 direct item→outcome→role rows in single effective author V2 handoff, 19 protected RD1 IDs counted only.
- [x] A5_D1_D6_SCOPE — Original R01 D1–D6 full chapter source, 9 reasoned D2 examples, 3 original SVG, 6 HELP, 3 nonmastery first tries introduced R02; independent R01 Academic and R02 PED PASS.
- [x] A6_DELTA_RESOLVED — R02 independent DELTA_C PED PASS, R03 DELTA_B_SOURCE_EQUIVALENT page citation-only with exact R02/R03 diff proof, no conditions/answer/key/rubric/body changed; original reviewer SBT source metadata corrected by direct source S1.
- [x] A7_PUBLIC_PRIVATE_BOUNDARY — 19 original private RD1 SHA256 `96d39c5b4a40dff0665fab33765f9266135dd9f607d1ccef9b3d0125c184180d`, owner-approved original Library custody; no private stem/answer/rubric in public GitHub.

## PED — independent pedagogical evidence on unchanged reviewed R02 body

- [x] PED1_MOTIVATION — 3 concrete chapter lesson WHY intros, original R02 reviewer independently PASS.
- [x] PED2_PREREQUISITES — Concepts/terms and prerequisite mathematics introduced/recalled ahead of formulas in 3 lessons, original R02 targeted PASS.
- [x] PED3_MEANING_FIRST — Mathematical meaning intuitively formed before formal methods, 3 lessons, original R02 targeted PASS.
- [x] PED4_EXPLAINED_VISUAL — 3 original figure annotations explain how and why to read SVG/graphs, original R02 targeted PASS.
- [x] PED5_REASONED_EXAMPLES — 9 original worked examples now accompanied by R02 reason-for-method and condition notes, targeted PASS.
- [x] PED6_FIRST_TRY_REMEDIATION — 3 optional pre-Core small self-tries, 6 original D6 remediation links, R02 independent targeted PASS, no Mastery.

## R — RELEASE responsibility, NOT YET IMPLEMENTED/QA

- [x] R1_INTEGRATED_CURRENT_MAIN — RELEASE PR #713 has exact source/receipt R03 Git blobs (`2101e2a2` / `09d77f92`) plus 3 lessons, 36 public Core/Practice, 6 shared Written, 3 SVG, 6 D6 and 15-item voluntary Final Submit; original canonical public records parity 36/36 in `scripts/test-thpt-g11-chii-release-integration.cjs`; awaiting merge before claiming live main.
- [ ] R2_EXACT_HEAD_CI — RELEASE must independently check site CI on exact current integration commit.
- [x] R3_CLEAN_STUDENT_UI — Chromium source-locked smoke 390/820/1440 in R4 run #41545357499 verifies G11 ChII menus, B05–B07 teaching flow/figures, 6 canonical item deep links, D6 remediation and client self-check. Page explicitly distinguishes voluntary assessment from independent readiness; raw RD1 archive absent.
- [x] R4_ASSESSMENT_SAFETY — Owner Issue #662 permits client-only selfcheck from original reviewed public canonical Practice IDs. 15 references / 15 distinct skills / no cloned stems, no protected RD1, manual Written rubric only, no keys/feedback before Final Submit, answers only after, one submit, no Mastery/independent Readiness/persistence; R4 browser #41545357499 and exact source-integration assertion pass. Private 19 RD1 remain outside public repo.
- [x] R5_OWNER_APPROVAL — Owner 03/11/2026 expressly authorized RELEASE to finish verified G11 chapter QA and autonomously merge/deploy chapters meeting all conditions. `RELEASE_AUTHORIZATION: NO` above is *historical authoring-lane* status and cannot override later owner conditional permission; NO deploy until R2 final-HEAD CI SUCCESS.

## AP — RELEASE visual and learning QA, NOT YET IMPLEMENTED/QA

- [x] AP1_IDEA_HIERARCHY — All three B05–B07 have reviewed concept-first introductions, D1/2 examples and an optional pre-Core try before practice; browser smoke #41545357499 confirms layout/navigation at 390/820/1440.
- [x] AP2_FORMULA_VISIBILITY — Original mathematics/formula text and answers retained byte-for-byte in source-locked R03 and 36/36 D3 records; MkDocs preview build + Chromium smoke #41545357499 show no horizontal overflow on 390/820/1440. Physical-device typesetting UAT remains P2 OPEN.
- [x] AP3_FIGURE_READABILITY — Three SVG blobs B05/B06/B07 exactly match author R03 and are loaded with nonzero naturalWidth inside their figure containers in 390/820/1440 browser smoke #41545357499; original captions/alt kept.
- [x] AP4_SELF_STUDY_CLARITY — Three reviewed PED first-tries initially collapsed; D1–D6 and six specific remediation links return to existing canonical items; no automatic open-answer grade, browser smoke #41545357499.
- [x] AP5_RESPONSIVE_VISUAL — Preview browser R4 #41545357499 validated all B05–B07 SVG sizing, deep links, learner self-check navigation and final submit on 390/820/1440 without horizontal overflow. Real iPhone/iPad Safari P2 stays explicitly OPEN.

## P — ACTUAL RELEASE only (not authoring)

- [ ] P1_DEPLOY_RECEIPT — No production deploy has been requested/verified by this handoff.
- [ ] P2_DEVICE_UAT — No real device UAT has been conducted in authoring.

## ONE quality-standard and custody boundary

The canonical `AUTHOR_HANDOFF` `G11-SGK-CHII-B05-B07_HANDOFF_V2_R03_20261102.md` contains **Q01–Q18 evidence with exact source pointers** and a complete item/outcome/role matrix. This manifest is the only effective author READY record for `G11-SGK-CHII-B05-B07`; historical R01 and R02 artifacts and draft V2 documents are preserved as audit history, not duplicate active handoffs. Reviewer R01/R02 PASS remains only for the reviewed mathematical/pedagogic scope; `S1` citation changes were author-direct proven and have not been deceptively labeled independently re-reviewed under NotebookLM v2.1. `CONTENT_READY` is only source-authoring, no permission for public RD1 release, client mastery scoring, workflow activation or website production deployment.

## RELEASE gate checkpoint · 03/11/2026 (without altering authoring evidence)

- **Current candidate:** PR #713, R03 original source SHA `2101e2a248e0cf53ee11847b913b937cebcd0806`; immutable review SHA `09d77f92e6efb266ac15e0d972256319d92a3e1e`. These academic hashes are NOT changed by R/AP checkbox updates.
- **Q16 owned by RELEASE (owner Issue #662):** the approved 15-item client self-check is a `placement` referencing original *already public reviewed* canonical Practice IDs, NOT a new RD1 bank or an independently scored Readiness. No requirement to ask AUTHORING for new questions; 19 private RD1 held-out remain outside public source.
- **R2 pending:** after these metadata/operations changes, required Roadmap/THPT Preview/Branding/Skill CI must all re-run `SUCCESS` on **exact final PR HEAD** and current main, then only merge. Earlier #41545357499 R4 SUCCESS on unchanged learner code supports scoped R3/R4/AP checks but is not final-head R2.
- **P1 still unchecked:** only merge+SUCCESS Deploy MkDocs on exact main merge commit + verified `gh-pages` chapter and self-check assets qualifies as published. Real-device P2 must stay OPEN unless independently tested.
- **Runbook:** `prototypes/thpt/release-queue/G11_RELEASE_OPERATIONS_20261103.md`, operational only; the sole academic rubric remains Q01–Q18.
