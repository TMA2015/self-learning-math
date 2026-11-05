# Toán 10 ChVI R04 — Independent reviewer content mismatch, not a hash dispute (2026-11-05)

PACKET_ID: G10-SGK-CHVI-R04-2OUTCOME-SELFCHECK-20261105
ROLE: AUTHORING_ONLY
AUDIT_ID: G10-CHVI-R04-REVIEWER_WRONG_MATH_CONTENT_COLLISION-20261105
STATUS: REVIEW_CONTENT_MISMATCH_HOLD
STANDARD_ID: SLM-THPT-QUALITY-ONE
GOVERNANCE_VERSION: 1.2.0
CORRECT_AUTHOR_SOURCE_PATH: prototypes/thpt/content-drafts/Temp_G10_CHVI_R04_TWO_OUTCOME_PUBLIC_SELFCHECK_REVIEW_20261105.md
CORRECT_AUTHOR_SOURCE_GIT_BLOB: ef0b82555bb9f8028c49d948d2276b6ea0f16956
CORRECT_R03_EXISTING_REVIEWED_SOURCE_BLOB: 77d42ce0ecf6fd4677ea0d831589db4bb18290d8
CORRECT_R04_ACADEMIC_VERDICT_NEW: PENDING_INDEPENDENT_REVIEW
CORRECT_R04_PEDAGOGICAL_VERDICT_NEW: PENDING_INDEPENDENT_REVIEW
CORRECT_R04_CANONICAL_ID_COUNT: 2
REVIEWER_ALTERNATE_R04_ACADEMIC_VERDICT: REVISIONS_REQUIRED_1_P1
REVIEWER_ALTERNATE_R04_PED_VERDICT: PASS_REPORTED_ON_ALTERNATE_CONTENT_ONLY
REVIEWER_ALTERNATE_R04_USED_FOR_CANONICAL_PASS: NO
Q15_DUPLICATE_ITEM_IDS_WITH_DIFFERENT_QUESTIONS: YES_QUARANTINE_ALTERNATE_SOURCE
PRIVATE_RD1_NEW: 0
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO

## 1. What the owner supplied and what was actually reviewed

The owner uploaded an exported NotebookLM text transcript `Văn bản đã dán (1)(20261105-084936).txt`, with a R04 review that quoted its actually mounted `Temp_G10_CHVI_R04_TWO_OUTCOME_PUBLIC_SELFCHECK_REVIEW_20261105.md`. The transcript's mounted source **does not contain the two questions that AUTHORING committed on Draft PR #756**.

This is a **material question-and-outcome discrepancy, not Git, SHA, line ending, or reviewer wording**. Item IDs alone are not content identity. The owner's second uploaded MD file `Bao_Cao_Kiem_Toan_Toan_10_Chuong_VI_PED_R02_20261105(1).md` is an older R02 review and does **not** constitute a R04 independent review.

| Matching item code | Correct AUTHORING R04 candidate (PR #756) | NotebookLM's ALTERNATE mounted source | Implication |
|---|---|---|---|
| `THPT-G10-B16-R06` | **`B16_OUT_04`**, analyze intervals of monotonicity, extrema and image of `f(x)=−(x−1)²+9` only on `D=[−2;5]`; rubric **8 points**, `HELP-G10-CHVI-R04-B16-01` | `G10-B16-MODELING`, parabolic gate `h(x)=−0.5x²+4x`, 3 m wide / 6 m tall truck; rubric **2.0 points**, `HELP-G10-B16-R06` | Different outcome, problem, rubric, recovery; reviewer PASS **cannot apply** to correct AUTHORING item |
| `THPT-G10-B17-R05` | **`B17_OUT_01`**, compare signs of **three** quadratics `P=2x²+4x+5`, `Q=−(x+1)²`, `R=−2(x−1)(x−4)` for `Δ<0`, `Δ=0`, `Δ>0`; rubric **10 points**, `HELP-G10-CHVI-R04-B17-01` | `G10-B17-INEQUALITY`, business profit `C(x)=x²+10x+600`, sale 90 per unit; rubric **2.0 points**, `HELP-G10-B17-R05` | Different outcome, problem, rubric, recovery; reviewer P1 **cannot be applied** to correct AUTHORING item |

**Reviewer alternate numerical defect is valid for that alternate draft:** `-x²+80x−600` is NOT zero at `x=10` or `70` (both yield +100). The reviewer recommends changing fixed cost `600→700` to yield exactly the prescribed integer roots `10,70`. Do not make that change in correct AUTHORING R04: this profit problem **is not in the frozen R04 candidate**, so doing so would introduce a second competing canonical problem. The same item ID cannot represent both a business profit exercise and a three-discriminant-case exercise.

## 2. Owner-specified workflow boundary

- NotebookLM's task is independent academic and pedagogical review of the **correct 2 new public R04 candidate items** plus their D6 resources, **not** Git blob comparison or byte-level debugging.
- AUTHORING owns source packaging and which exact problem the reviewer is given. The old alternate mounted R04 should be **deselected/replaced** before any next review; do not let both same-named `Temp_` files coexist as active review sources.
- **Preserve all prior independent R01 PASS**, reviewer-reported R02 19/19 Academic/PED and two SVG Q07/PED4 PASS, and the source-equivalent effective R03 content. This report does NOT revoke any prior reviewed R01/R03 material.
- The current R04 source on PR #756 is mathematically preflight checked by AUTHORING but has **no matching independent verdict**. `ACADEMIC_NEW=PENDING`, `PED_NEW=PENDING` for correct item bodies.
- External R02 Q18 custody remains an independent authoring documentation issue; avoid another NotebookLM hash verification loop. Do not hide it or claim Q18 closed.

## 3. Minimal next review request (math and pedagogy only)

The only file to hand off is [the exact correct R04 AUTHORING file](https://github.com/TMA2015/self-learning-math/blob/876758a5f32093842ed675ee77d7dc32beff0cd4/prototypes/thpt/content-drafts/Temp_G10_CHVI_R04_TWO_OUTCOME_PUBLIC_SELFCHECK_REVIEW_20261105.md) from PR #756. Before substantive review, look at its two first lines of question content:
- `B16_OUT_04` has `f(x)=−(x−1)²+9`, `D=[−2;5]`, and an **8-point rubric**, not a gate or truck.
- `B17_OUT_01` has `P=2x²+4x+5`, `Q=−(x+1)²`, `R=−2(x−1)(x−4)`, and **10-point rubric**, not a company profit model.

Then reviewer should return two independent Academic/PED item-level verdicts and P0/P1/P2 with minimal mathematics/pedagogy delta. These two exact content anchors are **academic scope check** to avoid reviewing a different workbook, NOT cryptographic file identity. Do not repeat old R01/R03 reviews.

**Current authoring:** `REVIEW_CONTENT_MISMATCH_HOLD` on R04 only; R03 original frozen. No `CONTENT_READY`, RELEASE handoff, `ready/` manifest or REGISTER promotion, integration, merge/deploy, RD1 or Mastery.
