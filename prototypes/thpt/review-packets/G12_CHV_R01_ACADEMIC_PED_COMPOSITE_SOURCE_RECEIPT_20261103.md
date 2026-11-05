# G12 SGK ChV B14–B17 R01 — Composite independent Academic/PED source receipt and W01/Q06 Delta C
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.1.0
PACKET_ID: G12-SGK-CHV-B14-B17-R01
HANDOFF_PROTOCOL: THPT-TWO-LANE-V2
CANONICAL_R01_SOURCE_PATH: prototypes/thpt/content-drafts/G12_SGK_CHV_B14_B17_PUBLIC_CANONICAL_R01_SOURCE_LOCK.md
CANONICAL_R01_SOURCE_GIT_BLOB: 11eb2834cfdb4a24685157f84666c2bb0767970a
FROZEN_R00_SOURCE_GIT_BLOB: 9e73f50efdf237ebdae8e64572e45b9b22e8dbbd
ORIGINAL_INDEPENDENT_REVIEW_GIT_BLOB: 0f0ef597a258ce6372453d2028d239d1067649ec
ORIGINAL_REVIEW_VARIANT_GIT_BLOB: 55636e86dbb4c326a08c4a79be465d9c169ddeca
ORIGINAL_COMPOSITE_RECEIPT_GIT_BLOB: d917ae352f7d3ba3818a8dad689e43fe119b9950
TARGETED_INDEPENDENT_REVIEW_VERBATIM_GIT_BLOB: c06fd2e187afd6ad7e848d208f218bb044a7d690
TARGETED_NOTEBOOKLM_VERDICT_Q01_B14: PASS
TARGETED_NOTEBOOKLM_VERDICT_Q06_W01_R01: PASS
ORIGINAL_INDEPENDENT_VERDICT_B15_B17: PASS
ORIGINAL_INDEPENDENT_PEDAGOGICAL_CHV: PASS
ACADEMIC_COMPOSITE_STATUS: PASS_DERIVED_FROM_SEPARATE_INDEPENDENT_SCOPE_VERDICTS
PEDAGOGICAL_COMPOSITE_STATUS: PASS_PRESERVED_UNAFFECTED_R00
P0: 0
P1: 0
P2: 0
MINIMAL_DELTA: 1_ITEM_W01_RUBRIC_ONLY
SBT_REFERENCE_GAP_DOCUMENTED: YES
EXPOSURE_SYSTEM_VERDICT: SYSTEM_HOLD
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO
AUTHORING_SOURCE_GATE: SUBJECT_TO_ONE_V2_MANIFEST_REGISTER_AND_EXACT_HEAD_CI

## Independent review receipts: what was actually evaluated
- **Original NotebookLM R00 reviewer:** one independent round supplied in **two presentation formats**, not two independent reviews. Raw complete reviewer text Git blob `0f0ef597a258ce6372453d2028d239d1067649ec`, alternate Markdown blob `55636e86dbb4c326a08c4a79be465d9c169ddeca`. Original conclusions: B15/B16/B17 Academic PASS, entire Chapter V PED PASS; Chapter V Academic HOLD under historic Q01 v1.0.0 only because original SBT lacked printed p25 for B14. Original reviewer P0=0 P1=1 P2=0.
- **New owner-provided independent targeted NotebookLM reviewer:** raw verbatim (11,738 bytes) Git blob `c06fd2e187afd6ad7e848d208f218bb044a7d690` reviewed exactly Q01 B14 across seven outcomes and Q06/R01 Written rubric W01 under **official Q01 v1.1.0 on main**, governance PR #726 merged at `049fa190b05c3562816670d51defc62965986c31`. Results: `TARGETED_B14_Q01_ACADEMIC_VERDICT=PASS`, `W01_Q06_DELTA_C_VERDICT=PASS`, `P0=P1=P2=0`, `MINIMAL_DELTA=1`. It explicitly preserves B15–B17 Academic PASS and original Chapter V PED PASS. Reviewer text explicitly says `CONTENT_READY=NO`, meaning it does **not** sign source packaging, Final Submit, site runtime or deploy; AUTHORING must complete that separately.
- The R01 source Git wrapper `11eb2834cfdb4a24685157f84666c2bb0767970a` is **assembled AFTER** the original and targeted reviews by AUTHORING. Neither reviewer claimed to hash this Git blob. It inherits the exact R00 student content except one reviewer-approved W01 rubric substitution and explicit B14-O07 scope labeling. Thus `ACADEMIC_COMPOSITE_STATUS` is an auditable **AUTHORING recombination of independently scoped PASS receipts**, not a fictional NotebookLM fresh chapter-wide PASS report or a changed historical verdict.

## S1 original receipts and Q01 v1.1.0 source-role reconciliation
- SGK KNTT Toán 12 Tập Hai original PDF SHA256 `3c642f2e80d86d699ea62bbcabd0c3074fd5118def96e4b3b8ce1f9ead7f97bb`, B14 printed29–40/PDF1 31–42; whole ChV B14–17 & END printed29–63/PDF1 31–65. SGK/chương trình are authoritative for six mandatory B14 Core outcomes and the other lessons' Core/outcomes.
- SBT KNTT Toán 12 Tập Hai original PDF SHA256 `823b013adeb487639e55493b4a7c09edb9a21daabc058ea53e6fe92f7a0352f1`, B14 printed22–24/PDF1 21–23, **printed p25 missing** (SBT 5.6–5.7 unknown from original). Later B15 printed26–29/PDF1 24–27, B16 printed30–31/PDF1 28–29, B17 printed32–34/PDF1 30–32, END printed35–39/PDF1 33–37. `SBT_REFERENCE_GAP_DOCUMENTED=YES`, a **reference-source caveat not a mandatory SGK Core outcome gap**. Do not falsely claim that original p25 was read or solved.
- Normative **one standard** `SLM-THPT-QUALITY-ONE v1.1.0 Q01–Q18`, canonical Git path `prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md`; use 5 Permanent Sources THPT v2.1 (their file bytes unchanged) plus owner-approved targeted batch Q01 v1.1.0, not a sixth Permanent Source.
- Reviewer classified `G12-CHV-B14-O07` sphere–plane intersection as **SGK_APPLICATION_INTEGRATED_AFTER_B17**, NOT compulsory B14 Core. Required B14 Core outcomes are O01–O06 (6). O07 retains its existing one canonical quartet `C07/P07/A07/W07`; the legacy `SOURCE_ROLE=SGK_CORE` of the introductory C07 is a **practice-placement role inside optional application**, not a grant of B14 official Core competence. B14-T02 (sphere-themed first try) also cannot gate O01–O06 before B17. RELEASE must preserve the independent B14 learning path; may render integrated block as optional post-B17 with links but cannot count it toward B14 Core readiness or Mastery.

## Exactly one academic-material Delta C: THPT-G12-B14-W01
| Field | Frozen R00 | AUTHORING R01 / reviewer approved |
|---|---|---|
| `ITEM_ID` | `THPT-G12-B14-W01` | SAME, no clone |
| `OUTCOME_ID` | `G12-CHV-B14-O01` | SAME |
| Question/answer/solution | Collinear `u=(1,1,0), v=(2,2,0)`, `v=2u`, `u×v=(0,0,0)`, cannot use zero as plane normal | SAME |
| Written rubric /5 | Awards calculation of a nonzero normal and checks orthogonality despite collinearity | **2 points** `v=2u` ⇒ dependent directions; **1** `u×v=0`; **1** zero vector cannot be plane normal; **1** choose second non-collinear direction |
| Review | Old original reviewed candidate had Q06 mismatch detected by AUTHORING | Targeted independent `W01_Q06_DELTA_C_VERDICT=PASS`, `DELTA_CLASS=DELTA_C_ACADEMIC_MATERIAL`, `MINIMAL_DELTA=1` |

Actual R01 source changes precisely **one W01 Written-rubric line**, plus **non-mathematical B14-O07 scope annotation** matching independent Q01 reviewer; **no question stem, answer key, solved example, HELP, ID, rubric other than W01, or SVG/PNG content changed**. An extension label does not make the optional item mandatory Core or define a new ID. Any later material changes to O07 pre-requisites/teaching sequence beyond the reviewer-approved scope require affected PED/Academic review.

## Canonical IDs, pedagogy and assessment boundary
- Four original chapters' lesson IDs `G12-CHV-B14/B15/B16/B17` plus `G12-CHV-END`; **24 outcome IDs**, B14 7 (O01–O06 Core, O07 optional cross-lesson), B15 7, B16 5, B17 5. Exactly **96 original unique public canonical ITEM_IDs**: 24 `SGK_CORE` placement role (including one optional O07 intro), 24 Practice, 24 Application, 24 Written rubric /5. Exactly 24 END public references reuse existing Application item IDs; no clones.
- Original 24 D2 worked examples, 24 same-outcome 5-step D6 HELP, eight self-tries, six visual PNGs all preserved. Original six PNG Git SHA1 blobs listed below are **byte-identical** to the original R00 ZIP and the review image representations; never claim original SVG if none exists.
- **Protected RD1:** 28 original private held-out questions/answers/solutions/rubrics only with owner/NotebookLM. Full original private-file SHA256 `b0a0bbe4922cf06373d6392070c8211d08f2c4db03286fede89c64a98809fb17` is **metadata only**, no protected stems or grading rubrics in public Git.
- The public chapter-end is `CLIENT_SELF_CHECK_NO_MASTERY` and does NOT certify official SGK_CHAPTER_READINESS; **Final Submit** must block hints/answers/correctness/Tutor before submission in RELEASE, no Mastery from client self-check or self-compared Written, no public RD1.
- No website integration, Firebase/Gemini, production deploy, owner runtime UAT or Master's progress is claimed by this receipt. Academic/PED PASS scoped to reviewed R01 material is necessary but not sufficient for RELEASE.

## Original binary-reviewed PNG Git blobs
| Image | R00 byte-exact Git blob SHA1 |
|---|---|
| `prototypes/thpt/content-drafts/png/Temp_FIG-G12-CHV-B14-R00.png` | `5763cbd3c555a40e2644e9666611a7b4ecaa4070` |
| `prototypes/thpt/content-drafts/png/Temp_FIG-G12-CHV-B15-R00.png` | `8991b0aaa4e532c0b7b8284608462b2286035733` |
| `prototypes/thpt/content-drafts/png/Temp_FIG-G12-CHV-B151-R00.png` | `447205394c355531845746ccf3a2474a2e910974` |
| `prototypes/thpt/content-drafts/png/Temp_FIG-G12-CHV-B16-R00.png` | `4dbe38abdc36744cedf69e4e411c8449d7f0b31d` |
| `prototypes/thpt/content-drafts/png/Temp_FIG-G12-CHV-B161-R00.png` | `a6d03ef5310ad93ce2cb8cebc03ff6e54bed55fb` |
| `prototypes/thpt/content-drafts/png/Temp_FIG-G12-CHV-B17-R00.png` | `3a87aa63ef68d3c12c170a213f7ea6a4ab719532` |

## Delta ledger and signoff scope
- `DELTA_A`: no student-facing site code or layout changes. `DELTA_B`: historical source receipt metadata and O07 curricular application role classification aligned to reviewer. `DELTA_C`: **one W01 rubric** R00→R01 with explicit independent targeted reviewer approval. Earlier `DELTA_D Q01_SBT_P25_HOLD` is closed by independent Q01 v1.1.0 PASS with the gap documented, **not** by fabricating the missing SBT page.
- The owner-provided new targeted reviewer reported P0=P1=P2=0 in its **limited scope**. Other historic independent Academic/PED PASS preserved unchanged; no retroactive re-review. AUTHORING signs item/source and receipt byte parity, not release UI, Final Submit, live browser or mastery.
- **AUTHORING final source gate** still requires one handoff V2, one ready manifest, one REGISTER row and exact-HEAD QA. Until those exist, the independent targeted reviewer correctly states `CONTENT_READY=NO`. Once the signed V2 packet passes, AUTHORING may set `CONTENT_READY` based on composite evidence without claiming that reviewer authorized release.
