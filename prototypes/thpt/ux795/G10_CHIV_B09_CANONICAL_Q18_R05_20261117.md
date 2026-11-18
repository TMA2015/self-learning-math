# G10 B09 · Single current canonical lesson source Q18 self-QA / audit anti-repeat R05 · 17/11/2026

**LESSON_ID:** `G10-CHIV-B09`
**STANDARD:** `SLM-THPT-QUALITY-ONE v3.2.0` Q01–Q18, G0–G5.
**DELTA:** `DELTA_C_ACADEMIC_MATERIAL` for previously added missing S1 decomposition outcome + one new original PUBLIC P07, plus `DELTA_A_UI` / pedagogic figure adjacency refinement R05; retains all 5 original first tries and 2 HELP. No Topic/Readiness scope.
**REVIEW_MODE:** `Q18_AUTHOR_SELF_VERIFIED` — SOURCE MATH/PED SELF-QA; **no independent NotebookLM reviewer verdict**. Technical/real-browser AP and RELEASE P1/P2 are separate.
**BASELINE_R03_SOURCE_BLOB:** `70217896971335905ac7907b222b161073c4df4e`
**R05_SOURCE_BLOB:** `a28fa50f223f260c8fded1f42b13065d3e047d63`
**ONE_CANONICAL_LESSON_PATH:** `prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_CANONICAL.md`
**ONE_CANONICAL_LESSON_BLOB:** `3c22b8d72d1f514257a4fe815bb1e46fccd7c3a3`
**DERIVED_KNOWLEDGE_PATH:** `docs/thpt-preview/sgk/chuong-iv/bai-9.md`
**PUBLIC_P07_JS_BLOB:** `e4e795715cc7a68e5f72e429776aa71816e3e023` (source file path in canonical §C)
**HISTORIC_R01_AUTHOR_BLOB:** `a9f6fab820559a8da98a5a42cd9902dbf9891f34` (8 B09 items/24 total immutable)
**MASTER_DEFECTS:** [#795](https://github.com/TMA2015/self-learning-math/issues/795) `B09-F01/F02/F03`, `G10-SEM-01`, `B09-CANONICAL-01`, `B09-RUNTIME-01`, `CHIV-09-A/B`.

## G0. Verified source / audit and differences

S1: **SGK KNTT Toán 10 tập 1, printed p55–59, §1 “Tích của một vectơ với một số”, §2 “Các tính chất ...”**. Direct text of the digital SGK facsimile PDF at `https://media.metaisach.com/2025/09/toan-10-tap-1-ket-noi-tri-thuc-voi-cuoc-song-7ff1b316.pdf` was reopened 17/11/2026; at printed **p57**, `Luyện tập 3` requires decomposition against two vectors and `Chú ý` states unique existence for two noncollinear vectors. **Original official publisher PDF identity and precise PDF-index offset not verified**; no invented official receipt or page offset. SBT is for exercise patterns, not a substitute for Core.

Historic 79/79 deep academic audit from [PR #862 immutable HEAD f44c6c7...](https://github.com/TMA2015/self-learning-math/pull/862/files) was re-opened: specific B09 `CHIV-09-A` repetitive text-driven discovery and *scalar D5 image only after the entire Discovery tab*; `CHIV-09-B` public HELP exposes internal codes. New R05 moves **the existing single scalar-multiple SVG** to **Discovery 1.2 before first try TRY11** and updates the introductory paragraph in SGK tab 2 to stay coherent. This is **not a second/duplicate SVG or new mathematics**. R03 already rewrote two HELP as learner-facing causes/actions and removed internal IDs. The R03 decomposition figure remains near formal `§2.2` and responsive mobile figure; source tab 2 still begins at 2.1.

## G1/G2. Academic/PED self-verification for each outcome

| Outcome | Required scope | Trace in the ONE canonical manuscript | Check result |
|---|---|---|---|
| `G10-B09-SCALAR_DEFINITION`, `LENGTH_DIRECTION` | Formal definition + k signs, length and k=0/vector-zero; do not call length negative | Tab1 examples, early visual, tab2 formal definition, Example1, TRY11–12, old C/P | math/conditions VERIFIED |
| `G10-B09-DISTRIBUTION` | scalar distributive laws, associative scaling, signs | Tab2 `2.2`, Example/TRY13, P02/P06 | VERIFIED |
| `G10-B09-COLLINEAR` | `b != 0` in `a=kb`, nonzero and zero-vector convention | Tab2 collinearity and TRY14/P05 | VERIFIED |
| `G10-B09-DECOMP_S1` | `u=xa+yb` unique iff `a,b` noncollinear (same plane), independent student attempt | Tab1 concept WHY, tab2 after Hình4.27, responsive SVG, Example4, `THPT-G10-B09-P07` + D6 | VERIFIED scope/math |
| `G10-B09-MIDPOINT_CENTROID` | point direction/triangle hypotheses and identities | Tab2 key formula, Example2/3, TRY15/P03/P04/W09 | VERIFIED |

Proof checks: (1) a geometric triangle `A=(0,0),B=(6,0),C=(0,6)`, `M=(3,3)`, `N=(2,0)`, so `MN=(-1,-3)=-a/6-b/2`, nonzero determinant 36; (2) analytic derivation `AM=(a+b)/2`, `AN=a/3`, `MN=AN-AM=-a/6-b/2`; (3) uniqueness from noncollinear vectors, without invoking B10 coordinate procedures in learner solution; (4) invalid collinear cases excluded. P07 rubric 2+1+2+1=6 for voluntary self-comparison, never auto-Mastery. No second P07 ID, no new official Readiness item.

Q03–Q14: all four Golden with 1.x–4.x; correct formal 3+1, four reasoned examples, five original voluntary self-check questions with closed reveals, two D6 HELP, scalar image now *before* discovery first try. Q15: 8 inherited public B09 canonical items remain byte-identical to frozen R01, one new public P07 source and derived JS exact. Q16: `FORMATIVE_ONLY / CLIENT_SELF_CHECK_NO_MASTERY`; private held-out, Final Submit and learner records unmodified. Q17: SGK scope only, Chapter Readiness separately; no Topic promotion.

**Source academic self-QA:** P0=0; P1 math/PED known issues addressed in the candidate. **FINAL RELEASE STATUS:** `AWAIT_EXACT_HEAD_CI_AND_ACTUAL_BROWSER / P1_NOT_PUBLISHED / OWNER_P2_PENDING`; owner standing authorization applies only when every effective gate is verified. This receipt must not be quoted as a deployed-product or independent-review PASS.

## G3–G5. Specific regression obligations

- `scripts/test-thpt-g10-b09-single-canonical-source.cjs`: byte-for-byte parity manuscript→public Knowledge/P07; inherited 8 legacy B09 items exact.
- `scripts/test-g10-chiv-editorial-source.cjs` + `scripts/test-g10-chiv-golden-browser.cjs`: on 390/820/1440 scalar figure in Discovery before TRY11; decomposition figure near formal `§2.2`, MathJax/3+1; actual P07 modal and `?item=THPT-G10-B09-P07` open the **seventh** question; hint/solution closed, entry/submit before self-comparison, no automatic assessment; B01–B08 frozen and B10/B11 unaffected.
- Master #795 G4 must move relevant issues only after exact source+browser evidence, then after P1 and owner P2. Do not close `B09-RUNTIME-01` just because VM/source checks pass.

**Signed Q18 academic source** is current single full manuscript at blob `3c22b8d72d1f514257a4fe815bb1e46fccd7c3a3`; reference exact derived markdown `a28fa50f223f260c8fded1f42b13065d3e047d63`, no competing Academic draft. All subsequent affected academic changes must be made in **that same canonical file**, with parity tests and source receipt update.
