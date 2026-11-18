# STANDARD_CHANGE_REQUEST — 3+1 Semantic Knowledge Boxes · approved 17/11/2026

**REQUEST_ID:** `SLM-THPT-QUALITY-ONE-SCR-20261117-3PLUS1`
**STATUS:** `OWNER_APPROVED_20261117` · **STANDARD_ID:** `SLM-THPT-QUALITY-ONE`
**FROM:** `v3.1.0` original Git blob `5a80b20ce99be3179d03d56a73fa57b6f4882fd8`
**TO:** `v3.2.0` same authoritative file `prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md`, candidate Git blob `24f744b5d9f114d053b6e2e1ab8a0fb26c3fab39`
**ACTIVATION:** after this owner-approved PR is merged into `main`. No new Q19 standard, no second math-authoring rubric.
**OWNER_DECISION:** approved in-chat on 17/11/2026: 3 knowledge box types plus 1 unfilled key formula frame; names reflect function, not word pattern; implement in B08, QA and publish after conditions.

## Approved semantic roles — one student-visible UI grammar

| Role | Semantic determination, not title match | Visual |
|---|---|---|
| `FORMAL_DEFINITION` | Defines an object/operation, e.g. sum, opposite, difference | teal background/left border |
| `FORMAL_RULE` | Proves/states theorem, rule, consequence, conditions, e.g. three-point/parallelogram, addition properties | subdued blue |
| `MANDATORY_RECAP` | Summarizes required mathematical knowledge after explanation, only where necessary | amber |
| `KEY_FORMULA` | Important standalone formula with assumptions, not duplicated in parent color card | unfilled white/transparent, neutral stroke |
| `LOCAL_NOTE` | Ghi nhớ/Lưu ý/Nhận xét/Cách kiểm — pedagogical reminder | **bold inline text**, not a fifth box |

This proposal is **now approved**, not an undecided UI experiment. It modifies existing X-F.3 and adds mandatory G0–G5 outcome mapping, reader-mode inspection, exact-browser CSS and source SHA proof, master defect ledger updates, and owner P2. Existing Q01–Q18 and Golden THCS remain intact.

## Release and academic protection

The revision applies prospectively to B08 and other lessons that are actively upgraded by owner; **does not restyle accepted B01–B07 P2** or silently revise an immutable snapshot. Only B08 scoped CSS `THPT-G10-CHIV-TRY06` may change in this PR. Mathematics/meaning changes are `DELTA_C_ACADEMIC_MATERIAL` and need affected-scope Q18 review, separate from CSS-only `DELTA_A_UI`. Q15/Q16, canonical First Try, Final Submit, RD1, Mastery, Firebase and independent SGK/Topic journeys remain protected.

## Gate and precedence

Latest owner approval > S1 Core, source 08, same Q01–Q18 standard > Project Sources 06/07 and handoff. Source history is versioned; historical v3.1.0 and earlier signoffs remain frozen, with no automatic migration of 79 existing pages. All QA checks must operate on the exact candidate HEAD; source-lock receipt and production HTML are evidence, not a substitute for teacher/owner review.

**STATE:** `STANDARD_CHANGE_OWNER_APPROVED / PR_QA_PENDING / NO_PRODUCTION_CHANGE_YET`.
