# Q18 self-QA evidence template — DRAFT ONLY (NOT AN APPROVED PACKET)

**Purpose:** one compact delta-focused verification record for existing, already-approved SGK Knowledge updates in G10–G12, under the *proposed* Q18 mode in [STANDARD_CHANGE_REQUEST Q18](STANDARD_CHANGE_REQUEST_Q18_ENRICHMENT_SELF_VERIFICATION_20261110.md). This is a sample format, **not** another academic standard, independent-review verdict, `CONTENT_READY` handoff or READY manifest.

**Activation:** `GOVERNANCE_DRAFT_ONLY` · `STANDARD_CONFLICT_HOLD` until Q18 exact amendment owner-approved, canonical standard merged, Project Source 07 v1.1 reconciled and V2 source gate officially migrated. **Never use this template to change a source-lock expected SHA, mark reviewer PASS, or merge/deploy the G10 content.**

## Required packet metadata — replace all placeholders in a future effective content-owner receipt

```text
PACKET_ID: REPLACE_PACKET
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 2.0.0
Q18_VERIFICATION_MODE: OWNER_SELF_VERIFIED_ENRICHMENT
LEARNING_PATH: SGK_CHAPTER
RELEASE_SCOPE: SGK_CHAPTER_KNOWLEDGE_UPDATE_ONLY
BASELINE_REVIEW_RECEIPT_PATH: REPLACE_BASELINE_RECEIPT_PATH
BASELINE_REVIEW_RECEIPT_BLOB: REPLACE_40_HEX
BASELINE_PED_REVIEW_STATUS: REPLACE_PASS_MATCHED_OR_SCOPED_PARTIAL_OR_NOT_LOCATED
S1_SOURCE: REPLACE_VERIFIED_SGK_KNTT_VOLUME_AND_PRINTED_PAGES
OUTCOME_SCOPE: REPLACE_ACTUAL_OUTCOME_IDS
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
Q15_Q16_DELTA: NONE
RD1_CUSTODY_DELTA: NONE
FINAL_SUBMIT_DELTA: NONE
MASTERY_ACTIVATION: NO
OPEN_P0: 0
OPEN_P1: 0
MATH_SELF_CHECK: REPLACE_HOLD_OR_PASS
PED_SELF_CHECK: REPLACE_HOLD_OR_PASS
PED_CURRENT_OUTCOME_SELF_CHECK: REPLACE_HOLD_OR_PASS
OWNER_POLICY_APPLICABLE: NO_UNTIL_EFFECTIVE
CONTENT_OWNER_LANE: RELEASE
CONTENT_OWNER_SIGNOFF: REPLACE_KNOWLEDGE_EDITOR_AND_DATE
```

## SOURCE_DELTA_EVIDENCE

One row **for every affected lesson**; preserve approved baseline receipt and exact candidate SHA. A baseline PASS on an unrelated source or wrong version cannot qualify. Keep Git blob hash of actual Markdown, not the commit SHA.

| LESSON_ID | OUTCOME_IDS | BASELINE_SOURCE_PATH | BASELINE_SOURCE_BLOB | CANDIDATE_SOURCE_PATH | CANDIDATE_SOURCE_BLOB | CHANGE_SCOPE | STATUS |
|---|---|---|---|---|---|---|---|
| REPLACE_LESSON | REPLACE_OUTCOMES | REPLACE_PATH | REPLACE_40_HEX | REPLACE_PATH | REPLACE_40_HEX | REPLACE_CONTENT_DIFF | HOLD |

## MATERIAL_DELTA_CHECKS

Only newly written mathematical/pedagogical sections need rows (not immutable Core/Practice/Readiness). **Every affected OUTCOME_ID must appear in at least one row with specific pedagogical evidence**; this is especially important if old PED reviewer verdict is scoped or missing. Each row cites exact lesson/outcome, S1 printed page verification, statement/assumptions, computed solution or logical derivation, independent arithmetic/substitution/counterexample verification and readable learning sequence. Do not tick PASS merely because it displays correctly.

| DELTA_ID | LESSON_ID | OUTCOME_ID | KIND | SOURCE_POINTER | S1_RECEIPT | MATH_REASONING_AND_CROSSCHECK | PED_WHY_METHOD_LIMITS | STATUS |
|---|---|---|---|---|---|---|---|---|
| REPLACE_DELTA | REPLACE_LESSON | REPLACE_OUTCOME | WORKED_EXAMPLE_OR_FIGURE_OR_EXPLANATION | REPLACE_SOURCE_LOCATION | REPLACE_VERIFIED_S1_PAGE | REPLACE_EXPLICIT_MATH_AND_CHECK | REPLACE_PED_SEQUENCE | HOLD |

## FIGURE_DELTA_CHECKS

Only **new or materially modified** SVGs. Match figures' own Git blobs to the source, including labels, geometry, axes/units and the explanation that uses them. Store no private assessment key.

| FIG_ID | LESSON_ID | SOURCE_ASSET_PATH | FIG_ASSET_BLOB | MATH_AND_LABEL_CHECK | PED_READING_GUIDE | STATUS |
|---|---|---|---|---|---|---|
| REPLACE_FIG_ID | REPLACE_LESSON | REPLACE_SVG_PATH | REPLACE_40_HEX | REPLACE_FIGURE_MATH_CHECK | REPLACE_READING_GUIDE | HOLD |

## Content-owner self-check and separate release gates

The **owner-delegated RELEASE Knowledge editor** may sign `MATH_SELF_CHECK=PASS` and `PED_SELF_CHECK=PASS` for a changed SGK Knowledge source *only* after filling every relevant row, closing actual P0/P1 and documenting **current PED for each affected outcome**, even when `BASELINE_PED_REVIEW_STATUS=NOT_LOCATED`; unresolved or doubtful S1/math/PED is HOLD and returns to independent reviewer. This is **not** `ACADEMIC_PASS` or `PED_PASS` from NotebookLM. No fake 'owner approval of exact amendment'.

A **separate RELEASE technical gate** checks source/figure SHA identity, stable canonical IDs, Q15, Q16 (Final Submit, private RD1, no Mastery), Q17 routes, AP1–AP5/R1–R5 and live Pages after authorized deployment. It cannot turn the content editor's arithmetic/PED checks into a NotebookLM reviewer verdict. AUTHORING remains responsible for new Topic/core academic authoring outside this proposed Knowledge enrichment profile. An eventual migrated handoff must have **one** canonical source/receipt/READY manifest/REGISTER entry as appropriate to the approved scope.

**Baseline policy (DRAFT only):** An already-published SGK Knowledge baseline needs an authentic scoped **Academic PASS** receipt; its historical PED verdict may be `PASS_MATCHED`, `SCOPED_PARTIAL` or `NOT_LOCATED`, but the latter two are **not PED PASS**. They require full evidence of current Knowledge pedagogy by affected outcome. Do not conflate old ChVI `A5`/independent Readiness status with the new Knowledge PED proof.

**G10 #797 candidate:** 27 changed Knowledge page blobs and 11 SVG candidates identified by [RELEASE intake R01](../ux795/UX795_G10_KNOWLEDGE_RELEASE_SOURCE_INTAKE_R01_20261110.md); 81/81 browser PASS is only rendering evidence. Do not pre-fill this template with academic PASS.
