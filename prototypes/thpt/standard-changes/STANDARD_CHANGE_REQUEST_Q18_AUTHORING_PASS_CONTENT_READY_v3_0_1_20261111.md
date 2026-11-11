# STANDARD_CHANGE_REQUEST — Q18 v3.0.1: AUTHORING_PASS → CONTENT_READY, evidence generated during authoring

**OWNER_DECISION:** approved in conversation 11/11/2026 (two explicit operational clarifications). **STANDARD_ID:** `SLM-THPT-QUALITY-ONE`. **CHANGE_CLASS:** PATCH `3.0.0 → 3.0.1`, same Q01–Q18, no new academic or release standard. **Effective only after governance PR full exact-head CI and merge main.** This is the change ledger, not independent approval evidence.

## Owner issue 1 — no duplicate academic approval after author signoff

- **Previously ambiguous:** `AUTHOR_SELF_VERIFIED` only allowed *preparing* `CONTENT_READY`, while V2 source/receipt/ready/REGISTER appeared as an additional academic approval round.
- **Approved rule:** Check maths, SGK S1, pedagogy, item mappings, rubric, diagrams and Q15/Q16 *while writing*. Once a self-contained packet truly passes Q01–Q18/A1–A7 and P0/P1=0, author completes **one** canonical SOURCE_BLOB, **one** Q18 self-QA receipt, **one** V2 handoff, **one** ready manifest and **one** REGISTER row **in the same finalization pass**, and reports `AUTHORING_PASS = CONTENT_READY`.
- Content genuinely verified but awaiting mechanical fill/lock is `HANDOFF_PACKAGING_PENDING`: AUTHORING fixes it immediately, not another academic approval; still never claim READY before files/hashes actually exist.
- Website integration/QA/merge/deploy remains RELEASE R1–R5/AP1–AP5/Q16/P1/P2 and owner authorized.

## Owner issue 2 — evidence means the author's actual work, not an external hunt

- **Previously ambiguous:** reviewers, additional source receipts, templates and metadata were interpreted as requests for a second external search/approval after author wrote the lesson.
- **Approved rule:** the lesson source and the author's *real* S1 cross-check, math derivations/edge cases, solved examples, figure and rubrics/assessment checks are the primary work. A **brief, source-linked receipt** records which lesson/outcome has been tested and what was corrected. No mandatory NotebookLM, Gemini, external review or long boilerplate.
- If work is **not yet actually examined**, status `Q18_CONTENT_CHECK_PENDING`, with affected LESSON/OUTCOME (not automatically an academic error). If a **real unresolved** math/S1/PED/Q15/Q16 defect/critical uncertainty exists, `Q18_SUBSTANTIVE_HOLD`. Neither source QA nor CI may invent PASS.
- Independent reviewer is targeted and optional for substantial uncertainty; never claim reviewer verdict when none exists.

## Scope, compatibility and affected source

- **Canonical modified:** `prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md` §X-E. Project Source 09 v3.0 is a reference to GitHub canonical, not a second veto; exact patch-version summary can be updated during normal source maintenance without holding valid packets.
- **Policy:** existing GitHub 07 policy, V2 contract/handoff template, AUTHOR_SELF_QA_RECEIPT template, REGISTER packet template, AGENTS and queue README. Existing reviewed snapshots v1.x–v3.0.0 valid for their pinned source; no retroactive reapproval.
- **QA:** governance `test-thpt-unified-content-standard.cjs`, `test-thpt-handoff-gate-v2.cjs` version-lock + negative tests for wrong receipt SHA/version, P0/P1, mode and Q16. Do **not** automatically pass actual lesson Q18/CONTENT_READY.
- **SGK G10 candidate PR #797:** known checks are four-tab source, 137 First Try + 115 HELP parity, selected real math/figures. Pending **remaining genuine 27-lesson/outcome mathematics/S1/PED check** is `Q18_CONTENT_CHECK_PENDING`; source defects identified during checking get `Q18_SUBSTANTIVE_HOLD`. SGK *published* Knowledge enrichment uses **one `ENRICHMENT_DELTA_RECEIPT` per release batch**, not 27 new handoffs or Topic READY certificates.

**Safety unchanged:** Q15 one canonical item ID, Q16 Final Submit / private held-out RD1/no Mastery, two learning paths, Golden, exact-final-HEAD CI, owner merge/deploy permission, 5 NotebookLM Permanent v2.1. No learner source, key/rubric or protected data changed by this governance patch.
