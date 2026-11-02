# THPT ACADEMIC HANDOFF V2 — TEMPLATE (NOT AN APPROVED PACKET)

**Important:** This is a template only; never mark this document CONTENT_READY, never select it as NotebookLM source, and never place it in `release-queue/ready/`. Fill all concrete evidence in a separate chapter-specific file under `release-handoffs/`.

PACKET_ID: REPLACE_WITH_G11_SGK_CHI
ACADEMIC_SOURCE_BLOB: REPLACE_WITH_40_HEX
REVIEW_RECEIPT_BLOB: REPLACE_WITH_40_HEX
ACADEMIC_VERDICT: PENDING
PEDAGOGICAL_VERDICT: PENDING
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

## REVIEW_SOURCE_RECEIPT
Reviewer packet IDs, exact selected Permanent Sources v2.0, SGK/SBT S1, expected/reviewed lesson/outcome/item reconciliation, P0/P1/P2, Academic + PED verdicts, proof that aliases map to canonical source. **The separate immutable REVIEW_RECEIPT_PATH file must explicitly contain the exact ACADEMIC_SOURCE_BLOB string**; all IDs listed above must actually appear in the frozen academic source file.

## DELTA_LEDGER
Class A/B/C/D, affected IDs, corrections, reviewer re-review when C/D, source equivalence proof when B; `NONE` only if no changes.

## PRIVATE_RD1_CUSTODY_METADATA
Private bank item COUNT, SHA-256, custody/accessibility, assessment outcome mapping, exposure plan. **Never paste private stems, answer keys, rubrics or full private bank into GitHub.** Release lane must authorize any public self-check variant separately.

## AUTHOR_SIGNOFF
Author source commit, handoff date, exact immutable public source path/blob, receipt path/blob, declared scope FULL_LEARNING_PATH vs PUBLIC_FORMATIVE_ONLY, known remaining blockers (must be NONE to hand off).

## RELEASE_ACCEPTANCE
Release must validate this against the canonical `ready/PACKET_ID.md` and run live learner/technical QA; this document alone is NOT CONTENT_READY and never grants release permission.
