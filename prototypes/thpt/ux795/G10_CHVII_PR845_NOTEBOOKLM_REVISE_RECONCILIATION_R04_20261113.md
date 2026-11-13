# UX795 / G10 ChVII / PR #845 — NotebookLM REVISE intake and canonical reconciliation R04 (13/11/2026)

**Role:** RELEASE evidence intake and source/metadata reconciliation, not AUTHORING rework or NotebookLM reviewer correction. **Single standard:** \`SLM-THPT-QUALITY-ONE\` **v3.1.0** on \`main\` (file \`prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md\`, blob \`5a80b20ce99be3179d03d56a73fa57b6f4882fd8\`). Existing PR #845 is **Draft / NOT MERGED**, reviewed HEAD \`38f01ecc401bf420b39a7a4ae6c71187bfe3b1f4\`.

**External reviewer material received:** owner-pasted NotebookLM report \`TEMP-G10-CHVII-B19-B22-REVIEW-20261113\`, exact local text **SHA-256 \`08d0ed4066fbef90ddca00d1165527d0dacbfe904c066d325e21aba87fd4c8e1\`**, 15,622 original UTF-8 bytes (see user-provided source; do not rehost copyrighted SGK/RD1). Reviewer says \`ACADEMIC_VERDICT=REVISE\`, \`PED_VERDICT=REVISE\`, \`P0=0\`, \`TARGETED_CLEARANCE=NO\`, \`RELEASE_AUTHORIZATION=NO\`, \`MASTERY_ACTIVATION=NO\`. **These restrictions stand regardless of metadata errors.** This memo reports source mismatches for a *targeted reviewer metadata reconcilation*, not permission to relabel verdict as PASS.

## 1. Exact snapshot matched

| Lesson | PR #845 Git blob verified on reviewed HEAD | Canonical public unscored Vận dụng IDs | D6 HELP count |
|---|---|---|---:|
| B19 | \`d05c315cf75df5fee356f0be66b04d4009fdafe9\` | \`THPT-G10-CHVII-TRY01\` through \`TRY07\` | 9 |
| B20 | \`b26f5546a6847907b3d8be414bc308530edfea17\` | \`TRY08\` through \`TRY12\` | 7 |
| B21 | \`dd870973d7e824ee8b81eaaadf7abe8936d7c78a\` | \`TRY13\` through \`TRY17\` | 7 |
| B22 | \`c6253e0a1977728dd1da81448f0d3473d9437be7\` | \`TRY18\` through \`TRY23\` **plus** \`TRY-ELLIPSE-TR01\` and \`TRY-HYPERBOLA-TR01\` | 10 |

There are **25 actual public item IDs** in this snapshot: **23 consecutively numbered** \`TRY01..TRY23\` and **two named TR01 transfers**. \`TRY24\` and \`TRY25\` **do not exist**. A report string \`TRY01_TO_TRY25\` is not a complete canonical \`ITEM_ID\` inventory. Every item remains one canonical record with multiple roles/placements as applicable; no duplicative ID, no edits to question/answer/rubric.

## 2. Mandatory reviewer reconciliation (retain REVISE verdict)

1. **Version:** \`STANDARD_VERSION|1.0.0\` in the review metadata conflicts with the actual **effective \`3.1.0\`** on main at the reviewed snapshot. It may reflect the original filename or template rather than reviewer intent; request a **metadata-only correction** tied to the same exact evidence, not invented independent PASS.
2. **Canonical outcome IDs:** the report claims e.g. \`G10-B19-LINE_EQUATIONS\`, \`G10-B20-LINE_POSITIONS\`, \`G10-B20-ANGLE_DISTANCE\`, \`G10-B22-PARABOLA_DIRECTRIX\`. These are **not** the \`data-outcome-id\` fields on the reviewed content. Exact source examples: \`G10-B19-NORMAL_DIRECTION\`, \`G10-B19-GENERAL_POINT\`, \`G10-B19-MULTISTEP\`, \`G10-B20-RELATIVE_POSITION\`, \`G10-B20-INTERSECTION\`, \`G10-B20-DISTANCE\`, \`G10-B21-CIRCLE_STANDARD\`, \`G10-B21-LINE_CIRCLE_POSITION\`, \`G10-B22-ELLIPSE_PARAMETERS\`, \`G10-B22-HYPERBOLA_ASYMPTOTES\`, \`G10-B22-PARABOLA_FOCUS\`. Reviewer should map any teaching-level aliases to exact source outcomes, not replace or mint IDs.
3. **Wrong lesson/item grouping:** report places \`TRY07–TRY09\` inside B20: \`TRY07\` belongs to **B19**. It groups B22 \`TRY19\` with ellipse, \`TRY21\` with hyperbola, and \`TRY22–TRY25\` with parabola; actual \`TRY19\` is **hyperbola**, \`TRY21\` **parabola**, \`TRY22\` **conic intersection**, \`TRY23\` **applied parabolic width**, with two named transfer IDs. These must be reconciled **before emitting item-scoped MINIMAL_DELTA**.
4. **P1 count conflict:** machine \`P1|4\`, but \`MINIMAL_DELTA\` names **five distinct DELTA_C targets** (\`TRY06,13,17,18,20\`) and also separately labels **AP2 MathJax P1**. Request severity/count breakdown by \`lesson_id / outcome_id / item_id / Qxx / P-level\`; do not infer a corrected integer.
5. **Important narrowed claims:** B22 \`TRY18\` canonical question actually asks for **\`a,b,c\` and two foci**, *not* eccentricity \`e=c/a\`. The **discovery prose** introduces \`e=c/a\`, so the potential \`Q01_S1_SCOPE_HOLD\` concerns **optional prose**, not a nonexistent required subquestion; do **not** move a legitimate core item to optional without a valid AUTHORING decision. B21 \`TRY14\` prose **already states \`R²>0\`** (but MathJax presentation is weak), so “completely missing condition” is overstated; clarify pedagogy and visibility. B22 named hyperbola transfer already **states the mathematical bound \`0<2a<2c\`** in prose, while whether its *application prompt* scaffolds/validates the branch remains a legitimate PED review point.
6. **Source receipt form:** reviewer body gives the true SGK/SBT SHA-256 values, and four reviewed Git blobs match. The machine \`SOURCE_RECEIPT\` lists printed-page labels only: request explicit \`S1 SHA256 / printed pages / file↔PDF page offset / reviewed source blob / scope\` in corrected targeted receipt.
7. **No accidental standard conflict approval:** Preserve \`ACADEMIC_REVISE / PED_REVISE / TARGETED_CLEARANCE_NO\`; do not convert into \`CONTENT_READY\`. Any source-changing correction is a **new exact Git blob**, requiring **affected-scope Q18 re-review**, not a retroactive PASS of #845.

## 3. Confirmed actionable corrections and lane ownership

**RELEASE / \`DELTA_A_UI\` candidate (not yet applied):** actual source examination confirms **24/25 discovery narrative blocks** preceding \`**Em vận dụng.**\` have **no \`\\(\` MathJax opening delimiter**, while many contain equations. Normalize mathematical notation *only where meaning/conditions are strictly equivalent*, keep one canonical question + closed comparison, and run source SHA, MathJax DOM, 390/820/1440 layouts, Golden tabs, AP1–AP5 and R4 on exact new HEAD. The review's recommendation of \`$...$\` does not authorize automatically substituting a delimiter unsupported by the site's MathJax settings; inspect existing working \`\\(...\\)\` first.

**AUTHORING / \`DELTA_C_ACADEMIC_MATERIAL\` review targets (not modified by RELEASE):**
- \`G10-B19-MULTISTEP / TRY06\`: formal B20 intersection/perpendicularity ahead of B19 lesson; decide optional guided cross-lesson role, leave ID unchanged.
- \`G10-B21-CIRCLE_STANDARD / TRY13\`: opening *coverage disk versus circle boundary* ambiguity; correct meaning from S1 \`IM≤R\` vs \`IM=R\`, then re-review changed prose and instructional figure.
- \`G10-B21-LINE_CIRCLE_POSITION / TRY17\`: validate as inter-lesson application, not compulsory B21 Core outcome without S1 evidence.
- \`G10-B22-ELLIPSE_PARAMETERS / TRY18\`: whether \`e=c/a\` belongs as **clearly optional explanatory enrichment** or should be removed from the public opening; preserve core question (a,b,c,foci).
- \`G10-B22-HYPERBOLA_ASYMPTOTES / TRY20\`: scope/role of asymptote question needs targeted AUTHORING decision and **original** guided diagram; never silently delete/reclassify canonical item.
- \`PED/Q09–Q14\`: bridge S1 actual \`HĐ1/HĐ4\` geometry to learner explanation (B20 shared-point/system and projection; B21 3-point/bisector and tangent normal; B22 string/pegs ellipse, two-branched hyperbola, focus-directrix parabola), and verify feasibility, units and domain of transfer models. Respect zero-hint-before-Final Submit only for protected chapter evaluation; these are **unscored** open-on-demand comparisons.

**Independent NotebookLM task:** do an *exact-item metadata and affected-defect reconciliation only* against the same four SHA-locked candidate blobs, S1 and 5 THPT Permanent Sources v2.1. Return revised \`SOURCE_RECEIPT\`, \`MINIMAL_DELTA\`, P0/P1/P2 scoped table and metadata. **Keep original negative verdict** unless new evidence genuinely changes it; no full-chapter re-review due to metadata alone. After AUTHORING applies approved DELTA_C, obtain *a separate new-blob* affected-scope academic/PED review.

## 4. Operational checkpoint

\`INDEPENDENT_REVIEW_RECEIVED / ACADEMIC_REVISE / PED_REVISE / SNAPSHOT_SHA_MATCH / REVIEW_ID_VERSION_COUNT_RECONCILIATION_REQUIRED / DELTA_A_AP2_REVIEWABLE / DELTA_C_BLOCKED_BY_AUTHORING / P2_IPHONE_NOT_ATTESTED / PR845_DRAFT / PR847_RESEARCH_DRAFT / NO_MERGE / NO_DEPLOY / NO_MASTERY_CHANGE\`.

Do not amend the original pasted independent report; preserve it by SHA and append this discrepancy/crosswalk note. Previous #842 release P1 remains valid for its immutable older snapshot.