# Temp — AUTHORING R13 | Four already-reviewed distinct public transfer items, one canonical source each

**Project:** One vertical TOPIC Hàm số & đồ thị, M6–M7, Draft AUTHORING #782. **ONE STANDARD:** SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18.
**R13 ACTION:** Reserve **four unique public `item_id` values** and one versioned pointer per question at the AUTHORING level, without copying the mathematical problem/answer/solution/rubric source into a second file. This is a Q15 metadata-to-source mapping, not new math, and not an official deployed site bank or private RD1. Source originals remain immutable at the reviewed Git blobs below.
**REVIEW:** Owner-provided NotebookLM targeted/full M4–M7 Academic/PED PASS accepted with correct mathematics, original source SHA. Math texts of the four questions were already present and reviewed at the source blobs; **no new NotebookLM review required** for identifier metadata alone, owner [decision #787](https://github.com/TMA2015/self-learning-math/issues/787).
**NO CLONE RULE:** The canonical stem, one answer, one worked solution and D6 live **only inside the original Git blob/source section `### CAND-...`**, referenced below. In a final V2 handoff, render the source through `item_id` lookup; do not retype it as a second item and do not change its math. `Anchor` remains a Written label only, these four are public Practice.
**PER-ITEM VERSION CREATED HERE:** `content_version = 1.0.0` is this R13 AUTHORING registration of the **unchanged reviewed candidate source section**; `source_git_blob` separately identifies the immutable physical Markdown snapshot. These are distinct concepts. Final website/library integration must verify its own canonical version compatibility and cannot infer live placement from this declaration.
**SOURCE DEDUP:** R08 `Temp_TOPIC_FUNCTIONS_SIX_REVIEWED_CANDIDATES_Q15_SEMANTIC_DEDUP_R08_20261107.md` Git blob `dc9bf99011dd6206dfead140a698a37410ae4b01` compared closest SGK bank families, yielding two other proposals REUSE_NOT_NEW and these four distinct candidates; R12 Git blob `5f22a43f8266f6906fc05dbd59cb7d9accf7eaef` verifies **192 distinct existing public IDs** on actual source snapshots and maps outcome evidence. GitHub code search for each new full proposed ID returned zero matches before registration (as of this authoring event), so no naming collision was found.
**Q16:** All four are PUBLIC worked/revealed practice; none can be used as independent held-out `TOPIC_READINESS` after exposure. No key/rubric private content is added to public Git. `FULL_TOPIC_CONTENT_READY=NO`, `RELEASE_AUTHORIZATION=NO`.

## 1. One canonical item_id → single existing reviewed source section (no duplicate stem)

| New AUTHORING item_id | content_version | Exact reviewed source section | Original SOURCE Git blob | Proposed Topic outcome | Role and placement (NOT live) | Associated existing D6 HELP |
|---|---|---|---|---|---|---|
| `THPT-G11-TOP-FUNC-P01` | `1.0.0` | `CAND-P-M6-01` in `Temp_TOPIC_FUNCTIONS_M6_PRACTICE_CANONICAL_REUSE_LEDGER_R01_20261107.md` | `c735a2e21bffe4ffe2e16d06de1d8592acc22674` | `TOP-FUNC-M6-O02` | `TOPIC_PRACTICE`, `TOPIC/FUNC/M6/O02/PRACTICE` | `HELP-G11-CHIX-B31-02` |
| `THPT-G11-TOP-FUNC-P02` | `1.0.0` | `CAND-P-M6-02` in `Temp_TOPIC_FUNCTIONS_M6_PRACTICE_CANONICAL_REUSE_LEDGER_R01_20261107.md` | `c735a2e21bffe4ffe2e16d06de1d8592acc22674` | `TOP-FUNC-M6-O06` | `TOPIC_PRACTICE`, `TOPIC/FUNC/M6/O06/PRACTICE` | `HELP-G11-CHIX-B32-03` |
| `THPT-G12-TOP-FUNC-P01` | `1.0.0` | `CAND-P-M7-01` in `Temp_TOPIC_FUNCTIONS_M7_S1_CANONICAL_REUSE_DEDUP_LEDGER_R01_20261107.md` | `7b4d0f7f6b97127d6f823e79135f8fd7f9095b8d` | `TOP-FUNC-M7-O01` | `TOPIC_PRACTICE`, `TOPIC/FUNC/M7/O01/PRACTICE` | `HELP-G12-B01-02` |
| `THPT-G12-TOP-FUNC-P02` | `1.0.0` | `CAND-P-M7-02` in `Temp_TOPIC_FUNCTIONS_M7_S1_CANONICAL_REUSE_DEDUP_LEDGER_R01_20261107.md` | `7b4d0f7f6b97127d6f823e79135f8fd7f9095b8d` | `TOP-FUNC-M7-O09` | `TOPIC_PRACTICE`, `TOPIC/FUNC/M7/O09/PRACTICE` | `HELP-G12-B05-04` |

## 2. Mathematical difference and one-source QA

| AUTHORING item_id | Distinct outcome claim already independently reviewed | Why not a number-only clone |
|---|---|---|
| `THPT-G11-TOP-FUNC-P01` | `CONTINUOUS_JOIN_AND_EQUAL_ONE_SIDED_DERIVATIVES` | b=a ensures continuity but differentiability also requires a=2, hence a=b=2 |
| `THPT-G11-TOP-FUNC-P02` | `LOG_OF_ROOT_STRICT_DOMAIN_AND_CHAIN` | F=ln sqrt(4-x^2) on (-2,2), F'=-x/(4-x^2), endpoints excluded |
| `THPT-G12-TOP-FUNC-P01` | `MONOTONICITY_DISCONNECTED_BRANCHES_AND_JUMP` | f'=1 on each open branch but f(-1)=9>f(0)=0, so not increasing on whole R |
| `THPT-G12-TOP-FUNC-P02` | `INTEGER_FEASIBILITY_VS_CONTINUOUS_OPTIMUM` | continuous x*~3.92375 but feasible integer x=4 maximizes V with V(4)=1056 cm³ vs V(3)=1008 |

- `THPT-G11-TOP-FUNC-P01` specifically requires BOTH value matching and derivative matching at join (G11 B17 original continuity-only and B31 cusp exercises are not the same task).
- `THPT-G11-TOP-FUNC-P02` composes logarithm OUTSIDE square root, with strict positivity and chain rule; not covered by either B32 derivative-of-ln(positive-polynomial) or square-root-only practice in isolation.
- `THPT-G12-TOP-FUNC-P01` is an actual downward jump with positive derivative on each separate open interval, not the existing G12 monotonicity-on-a-single-connected-interval exercise.
- `THPT-G12-TOP-FUNC-P02` requires integer feasibility and exact optimal choice; existing G12 box task treats a continuous variable, so solution/evaluation criterion are different.

**No new math claimed:** The verbatim original candidate source still uses its original `CAND-P-` heading as the **single authoritative content location**. This R13 assigns the immutable external `item_id` and content version as canonical metadata for AUTHORING; it does NOT duplicate its question body or make a new solution record. Both G11 IDs and G12 IDs are unique in the R12 192-item set and distinct from G10 original `THPT-G10-TOP-FUNC-P01..P06`.

## 3. QA / next gate (Q15 & Q16 separate)

- **Source QA:** 4/4 candidate heading sections fetched and matched original source SHA (M6 `c735a2e21bffe4ffe2e16d06de1d8592acc22674`, M7 `7b4d0f7f6b97127d6f823e79135f8fd7f9095b8d`), no math/answer/rubric modification. Exact new ID code search 0/4 prior use; future integrated bank must enforce global uniqueness.
- **Academic/PED:** the four PUBLIC question sources are inside the independently accepted M4–M7 reviewer packet; metadata-only ID/version/placement addition does not open DELTA_C.
- **Publication boundary:** `AUTHORING_CANONICAL_ID_REGISTERED_IN_R13=4`; `OFFICIAL_RUNTIME_BANK_IMPORT=NO`; `FULL_48_OUTCOME_PLACEMENTS=NOT_REGISTERED`; `OFFICIAL_PRIVATE_TOPIC_READINESS=NO`; `FULL_TOPIC_CONTENT_READY=NO`; `RELEASE=NO`.
- **Next:** link these four exact `item_id` pointers into R12/R11 target outcome rows as separate **R13 metadata** (not duplicating their existing source text), finalize other Written/Anchor existing-source role/placement, then Q16 independent Topic readiness protections/coverage as a separate genuine gate.

**CHECKPOINT:** `FOUR_PUBLIC_TRANSFER_CANONICAL_ITEM_ID_ASSIGNMENTS_CREATED=4`, `REVIEWED_MATH_SOURCE_UNCHANGED=YES`, `NEW_MATH_REVIEW_REQUIRED=NO`, `PUBLIC_ONLY=YES`, `NEW_PRIVATE_RD1=0`, `CONTENT_READY=NO`, `RELEASE=NO`.
