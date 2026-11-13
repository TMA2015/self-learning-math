# Toán 10 Chương VII B19–B22 — Golden continuous exposition, Q18 source-locked delta (13/11/2026)

**LANE:** RELEASE SGK Knowledge (published pages) · **STANDARD_ID:** `SLM-THPT-QUALITY-ONE` · **STANDARD_VERSION:** `3.1.0` · **Q18_MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` · **DELTA:** `DELTA_C_ACADEMIC_MATERIAL` (student-facing pedagogical explanations rewritten, same math/outcomes), no canonical assessment changes. This is an author/RELEASE affected-scope self-audit receipt, **not independent reviewer PASS**. No new V2 Topic or Chapter packet.

**Owner evidence:** Four real-device screenshots B19–B22 (13/11) report layout about 90% aligned but request **continuous explanatory prose without recurring PED/checklist subheads**, and deletion of a generic instruction about "Tự thử" at the top of Discovery where the visible exercises are now labelled **Vận dụng**. Do not repeat that sentence anywhere, including other SGK lessons.

**Base release:** PR #842 merged `main=b103cd91cd32a2ff3accd1ae14c24870330ef9a2`; G10 ChVII 8/8 exact-head CI PASS; MkDocs #43417147560 and GitHub Pages #43417781934 SUCCESS; published `gh-pages=469e0c6cffde64a9b6ffbe7c65ed97144eb74659`. Preserve immutable #842 enrichment receipt and P1 history; these are evidence for **previous version**, not automatic acceptance of this delta.

## Exact source chain

| Bài | PUBLISHED baseline #842 Git blob | NEW edited candidate Git blob | Canonical Vận dụng/First Try | D6 HELP | Golden worked examples |
| --- | --- | --- | ---: | ---: | ---: |
| B19 | `8fc4efaafcf2b896430f8cfa0ab18d7118fefc9c` | `581b046a40d317dfa3c910a83144f1b73f3cd9ac` | 7 | 9 | 2 |
| B20 | `510f79eb61930e9b0d7795d4b0288fd29ccb0675` | `b26f5546a6847907b3d8be414bc308530edfea17` | 5 | 7 | 2 |
| B21 | `0af5e4d9e2348575f2be7de57f81acd00098bc55` | `dd870973d7e824ee8b81eaaadf7abe8936d7c78a` | 5 | 7 | 2 |
| B22 | `34288f6ed32a0bf100edbf2ef495a4d9cec3ad2a` | `c6253e0a1977728dd1da81448f0d3473d9437be7` | 8 | 10 | 3 |

**Canonical preservation checks from same branch:** all 25 First Try `item_id`/outcome/HELP refs and 33 D6 identities are byte-identical; 25 original `??? question "Đối chiếu"` bodies, exact questions and solution/rubric texts unchanged; four original S1 tab-2 Knowledge sections, tab-3 examples, tab-4 remediation, six SVG, original TeX outside affected narrative, right TOC, Golden nav JS and scoped CSS unmodified. No changes to Q15 canonical bank, Core/Practice/Written, Chapter Final Submit, held-out RD1, Mastery, Firebase, Gemini, THCS, G11/G12/Topic or learner data.

## Affected mathematical and pedagogic scope

- **B19 (7 outcomes):** directions and normal vectors, the point-normal equation, parametric representation, two points, membership, intersections/perpendicularity, linear data model. Rewrites connect visual situation to prerequisite knowledge to reasoned method. Condition nonzero direction/normal, distinct points, slope denominator and model-range caveats preserved.
- **B20 (5 outcomes):** cut/parallel/coincident lines with all coefficients, perpendicular through point, two-line intersection, point-line distance, acute line angle. Explain *why* cross product/determinant or dot product is used before the rule; no division by zero, nonnegative distance and acute-angle limits retained.
- **B21 (5 outcomes):** circle locus/positive radius, completing squares, tangent at known point, circle through three noncollinear points, line–circle position. Correct conditions `R>0`, `R²>0`, `M on circle`, noncollinearity and comparison of center distance with radius retained.
- **B22 (8 outcomes):** ellipse/hyperbola focus and sign distinctions, hyperbola asymptotes, parabolic focus/directrix `y²=2px` with `F(p/2,0)`, intersection with conic, parabolic width and two original applied ellipse-roof/hyperbola-signal cases. Retain `a>b>0` for major-Ox ellipse, `c²=a²−b²` vs `c²=a²+b²`, `0<vΔt<AB`, upper-half ellipse, physical units, branch direction and model limits.
- **PED/Q09–Q14:** replaced 25 stacks of microheadings and repeated `Kiến thức tiền đề / Bản chất trước công thức / Hướng dẫn đọc hình` labels with natural adjacent paragraphs connecting problem setting, known mathematics, mechanism, rationale and geometric interpretation, followed immediately by `**Em vận dụng.**` and opt-in closed `Đối chiếu`. Removed two extra B22 microheadings and the internal student-visible phrase `Tại sao là D2 mới`.
- Removed exact generic sentence `Hãy tự giải từng câu Tự thử trước khi mở Đối chiếu. Nếu vướng, hãy đọc phần tự khắc phục và tự làm lại một bài tương tự.` from **all four affected lessons**. Read-only audit of **all 79 source SGK lessons** at the base `main` found this exact sentence only in B19–B22; no other lesson needs a source edit. A folded answer is student-opened; no extra instructional sentence is required.

## Scoped Q18 self-check and QA gates

**Q01/Q02:** unchanged official S1 2.x lesson outline, canonical concept/skill outcomes; this pedagogical delta does not expand mandatory SGK Core or reclassify optional applications. **Q03/Q04/Q09–Q14:** each rewritten paragraph checked for source-consistent conditions, explanatory sequence and reasoned method before the unchanged Vận dụng. **Q07:** existing figure metadata and math intact; picture-related prose is illustrative, not a fictitious new image. **Q15/Q16:** each public item one ID/answer/solution; `CLIENT_SELF_CHECK_NO_MASTERY`, hints/answers closed by default, no protected assessment changes. **Q17/Q18:** SGK Knowledge-only additive receipt with old and candidate Git blobs; previous release evidence immutable.

Affected-scope desk math checks: B19 (2,3)·(−3,2)=0, equation through (1,3) with normal (2,−1) gives 2x−y+1=0; B20 determinant 2(−2)−4(−1)=0 with distinct constants gives parallel distinct lines, distance is absolute/positive; B21 I(−2,1), R=3 implies (x+2)²+(y−1)²=9; B22 ellipse x²/25+y²/16=1 gives a=5,b=4,c=3, and roof w=12,h=4, x=3 gives y=2√3. Explicit `y²=2px` parabolic focus F(p/2,0), hyperbola c²=a²+b² and station difference bound verified against unchanged original answer bodies. **No changed-source P0/P1 identified in this desk audit; exact-head render/interaction CI is a separate release gate.**

**PREVIEW QA NOT IMPLIED:** The original #842 8/8 CI and P1 apply to the previous source only. New Draft must pass source SHA/negative mutation, Q15/Q16/FirstTry/HELP lock, 4×3 Chromium widths, default-closed answers, Golden tab/TOC, SVG/MathJax, other G10 and G11/G12/THCS regression, R4 and Roadmap on **exact final HEAD**. New source never becomes P1 until independent release merge+Deploy MkDocs+Pages successful and compiled gh-pages source/parity verified. New Chapter VII owner iPhone P2 remains a separate attestation.

**STATUS:** `Q18_AFFECTED_SOURCE_SELF_QA_DESK_PASS / RELEASE_RENDER_QA_PENDING / DRAFT / NO_NEW_MERGE / NO_DEPLOY`.
