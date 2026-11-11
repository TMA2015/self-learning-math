> **Owner clarification 11/11/2026:** This is a historic V2 structural template, not a fixed reviewer-only standard. Under v3.0 a new Topic may use `AUTHOR_SELF_VERIFIED` with a content-rich `AUTHOR_SELF_QA_RECEIPT` (never fake an independent verdict). Replace all placeholders and supply one handoff when the entire unit is QA-complete. For PUBLIC Topic self-check reuse canonical items only with `CLIENT_SELF_CHECK_NO_MASTERY`; private official RD1 must remain held-out. AUTHORING paused until owner process reset is integrated.

# THPT ACADEMIC HANDOFF V2 — TEMPLATE (NOT AN APPROVED PACKET)

**Important:** This is a template only; never mark this document CONTENT_READY, never select it as NotebookLM source, and never place it in `release-queue/ready/`. Fill all concrete evidence in a separate chapter-specific file under `release-handoffs/`.

PACKET_ID: REPLACE_WITH_G11_SGK_CHI
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: EFFECTIVE_ON_MAIN_AT_HANDOFF
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED | INDEPENDENT_REVIEW
ACADEMIC_SOURCE_BLOB: REPLACE_WITH_40_HEX
REVIEW_RECEIPT_BLOB: REPLACE_WITH_40_HEX  # Independent review OR author self-QA receipt; mode-specific content required
ACADEMIC_VERDICT: SELF_VERIFIED | PASS
PEDAGOGICAL_VERDICT: SELF_VERIFIED | PASS
BLOCKERS: OPEN
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
RELEASE_SCOPE: FULL_LEARNING_PATH

## S1_SGK_SBT_SOURCE
Official KNTT SGK/SBT edition, volume, chapter, *verified* page ranges, RD0 coverage and source evidence. Do not invent pages.

## LESSON_IDS
- REPLACE_LESSON_ID

## OUTCOME_IDS
- REPLACE_OUTCOME_ID

## PUBLIC_ITEM_IDS
- REPLACE_ITEM_ID

## ITEM_OUTCOME_MATRIX
| ITEM_ID | OUTCOME_ID | role / placement | D3/D4/Written |
| --- | --- | --- | --- |
| REPLACE_ITEM_ID | REPLACE_OUTCOME_ID | REPLACE_ROLE | REPLACE_D |

## D1_D6_EVIDENCE
Actual source locations per lesson/outcome for concepts, distinct worked examples, Core/Practice/Application, Written/Anchor, authentic/source evidence, D6 remediation.

## PED1_PED6_EVIDENCE
Exact evidence for motivation, prerequisite terms, mathematical meaning before formula/algorithm, informative SVG/table, why-based solution, independent first attempt and remediation. Provide separate independent pedagogical verdict on this snapshot.

## QUALITY_Q01_Q18_EVIDENCE

**ONE normative standard only:** `prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md` defines Q01–Q18. This chapter table is an **evidence map**, not a new academic rubric. Each Q must have specific lesson/outcome/source pointers; `NOT_APPLICABLE` needs precise reason and cannot hide a mandatory learning objective.

| Q_ID | AFFECTED_LESSON_OUTCOME_IDS | SOURCE_EVIDENCE_POINTERS | INDEPENDENT_REVIEW_RECEIPT | RELEASE_RECHECK_MAPPING |
| --- | --- | --- | --- | --- |
| Q01 | REPLACE_WITH_EXACT_SCOPE | REPLACE_WITH_S1_SOURCE | REPLACE_WITH_REVIEW | REPLACE_WITH_R_AP_STEP |
| Q02 | REPLACE_WITH_EXACT_SCOPE | REPLACE_WITH_OUTCOME_MATRIX | REPLACE_WITH_REVIEW | REPLACE_WITH_R_AP_STEP |
<!-- Fill one non-placeholder row each for Q03 through Q18 before CONTENT_READY. New V2 CI requires exactly Q01..Q18, no duplicates. Never claim self-authored PASS from this map. -->

## QUALITY_Q01_Q18_EVIDENCE

Single normative source: `prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md`. This is a traceability register, not a second quality standard. Provide a concrete lesson/outcome/source evidence pointer and independent reviewer receipt for **each** of Q01..Q18; RELEASE checks the same criterion in the rendered product, not mathematics again.

| Q_ID | LESSON_OUTCOME_IDS | AUTHORING_EVIDENCE | INDEPENDENT_REVIEW_RECEIPT | RELEASE_RECHECK |
| --- | --- | --- | --- | --- |
| Q01 | REPLACE_SCOPE | REPLACE_S1 | REPLACE_RECEIPT | REPLACE_R_AP |
| Q02 | REPLACE_SCOPE | REPLACE_MATRIX | REPLACE_RECEIPT | REPLACE_R_AP |

<!-- Complete Q03 through Q18 with real evidence before CONTENT_READY. Template cannot be passed as a ready packet. -->

## REVIEW_SOURCE_RECEIPT
For all newly standardized packets, independent NotebookLM receipt must explicitly cite `SLM-THPT-QUALITY-ONE`, effective `STANDARD_VERSION: 1.0.0`, and exact academic source SHA. Reviewer packet IDs, exact selected Permanent Sources v2.0, SGK/SBT S1, expected/reviewed lesson/outcome/item reconciliation, P0/P1/P2, Academic + PED verdicts, proof that aliases map to canonical source. **The separate immutable REVIEW_RECEIPT_PATH file must explicitly contain the exact ACADEMIC_SOURCE_BLOB string**; all IDs listed above must actually appear in the frozen academic source file.

## DELTA_LEDGER
Class A/B/C/D, affected IDs, corrections, reviewer re-review when C/D, source equivalence proof when B; `NONE` only if no changes.

## PRIVATE_RD1_CUSTODY_METADATA
Private bank item COUNT, SHA-256, custody/accessibility, assessment outcome mapping, exposure plan. **Never paste private stems, answer keys, rubrics or full private bank into GitHub.** Release lane must authorize any public self-check variant separately.

## AUTHOR_SIGNOFF
Author source commit, handoff date, exact immutable public source path/blob, receipt path/blob, declared scope FULL_LEARNING_PATH vs PUBLIC_FORMATIVE_ONLY, known remaining blockers (must be NONE to hand off).

## RELEASE_ACCEPTANCE
Release must validate this against the canonical `ready/PACKET_ID.md` and run live learner/technical QA; this document alone is NOT CONTENT_READY and never grants release permission.
