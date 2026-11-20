# G10 B19 · Phương trình đường thẳng — chủ biên toàn bài / source-locked Q18 R01

**RECEIPT_ID:** G10-CHVII-B19-OWNER-G0G2-Q18-R01-20261120
**STANDARD_ID:** SLM-THPT-QUALITY-ONE · **STANDARD_VERSION:** 3.2.0 · same Q01–Q18
**LESSON_ID:** G10-B19 · **OUTCOMES:** G10-B19-NORMAL_DIRECTION; G10-B19-GENERAL_POINT; G10-B19-PARAMETRIC; G10-B19-TWO_POINTS; G10-B19-MEMBERSHIP; G10-B19-MULTISTEP; G10-B19-LINEAR_MODEL.
**MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` / `AUTHOR_SELF_VERIFIED` (author's full-lesson math/PED self-critique; **not** NotebookLM/independent Academic+PED PASS, **not** OWNER_P2_PASS).
**OWNER_AUTHORIZATION:** Owner explicitly requests immediately upgrading and publishing B19 on 20/11/2026, with G0–G5 obligations and hard prohibition on full-site tests.
**DELTA_CLASS:** `DELTA_C_ACADEMIC_MATERIAL` (full PED prose, method analysis, semantic formal statements, D6 specificity and pedagogic figure location) plus `DELTA_A_UI` (page-only Golden styles/labels). Mathematical tasks, conditions, original answers, original figure and Q15/Q16 unchanged.
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-vii/bai-19.md` — one canonical Knowledge source.
**PREVIOUS_B19_SOURCE_BLOB:** `8fc4efaafcf2b896430f8cfa0ab18d7118fefc9c` (already published old 13/11 ChVII Golden); original 13/11 receipt `G10_CHVII_B19_B22_S1_Q18_GOLDEN_ENRICHMENT_RECEIPT_20261113.md` remains immutable.
**CANDIDATE_B19_SOURCE_BLOB:** `e80126160dfc7670d7feaaeb55cafa416b8e52ff` (exact revised canonical Git blob, not a separate manuscript).
**BASE_COMMIT:** `d667b53d0696bca66b45dcd9e5ea97f678855cce` (before B19; only prior CI scope routing #933). **Q18_STATUS:** SELF_VERIFIED_SOURCE_MATH_PED_SCOPE; CI/production pending until exact-Git checks.

## G0 — source authority, existing anti-repeat failures

**S1 authority:** Toán 10 KNTT **Tập 2**, printed **pp30–35**, Chapter VII B19 *Phương trình đường thẳng*, two main SGK parts: **1. Phương trình tổng quát của đường thẳng** and **2. Phương trình tham số của đường thẳng**. Confirmed against already signed 13/11 ChVII S1 provenance and primary text extracted from public SGK Tập 2 PDF at https://toanaz.com/wp-content/uploads/2026/10/SGK-Toan-10-Tap-2-Chuong-trinh-moi.pdf ; secondary corroboration https://sgkvn.com/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vii-phuong-phap-toa-do-trong-mat-phang-3234/bai-19-phuong-trinh-duong-thang-11997.html . **Caveat:** actual PDF page-index offset and user's original scan SHA were NOT reverified; no invented PDF page numbers/hash. Historical SBT printed pp28–31 from prior B19 source was not re-audited. If a future authoritative S1 contradicts scope, hold affected section instead of guessing.

SGK explicitly calls for (a) nonzero normal/direction vectors, (b) point+normal to general equation, (c) point+direction or two distinct points to parametric/general equations, (d) relationship to graph of `y=mx+p` and (e) application to reality (textbook °C/°F calibration). Current S1 sections preserve *exactly* the former two headings 2.1 / 2.2 and source math.

**Prior anti-repeat:** before editing, read [Issue #795](https://github.com/TMA2015/self-learning-math/issues/795) cumulative ledger (B08/B09/B12/B15/B17/B18 semantic-formal, learner-flow, wrong-label, generic-D6, redundant-link errors), [Issue #861](https://github.com/TMA2015/self-learning-math/issues/861) warning, `AGENTS.md` G0–G5, effective X-F.1–X-F.5. Registered 5 OPEN G0 defects in the **existing** #795 ledger *before* writing, no duplicate standard or new content repo. Reused accepted B17/B18 Golden page-scope semantic colors rather than altering shared CSS/runtime.

## G1 — learner-first editorial composition, full seven-outcome source

**Four Golden tabs retained** with natural roles rather than PED labels: 1.1 motivational problem of representing a line as a coordinate condition; 1.2 seven distinct intuitions from actual line/figure → point+normal → parameter t → two points A≠B → membership by substitution → intersection-vs-perpendicular extension → linear model with actual SGK Celsius/Fahrenheit anchors; 1.3 explicit vocabulary/outcome recap. Every original First Try in Tab1 is a **Vận dụng** with a clearly visible question **before** the voluntary, closed **Đối chiếu**. All formerly repeated `Kiến thức tiền đề/Bản chất/Hướng dẫn đọc hình`, `Em vận dụng.`, `Tự thử` and per-try duplicate Core navigation removed in favor of connected explanation. Seven Q15 items/answers stay immutable.

**Figure PED4:** exact unchanged `G10_B19_LINE_NORMAL_R02.svg` (original SVG Git blob `e051724efd4ac88a3f135b1695da7bab08895df9`) moved from remote Tab2 *before* the relevant Tab1 first "Cách đọc hình". Real plot `2x+y=6`, P(1;4), `u=(1;-2)`, `n=(2;1)`; diagram's `n·u=0` checked by arithmetic. Removed six rhetorical "Hướng dẫn đọc hình" references to figures not present.

**Formal 2.1/2.2 semantic mapping (X-F.3):**
- `FORMAL_DEFINITION` **teal/green**: vectơ pháp tuyến ≠0 and its nonzero scalar multiples; in 2.2 vectơ chỉ phương ≠0 and multiples.
- `FORMAL_RULE` **light blue**: every general equation `ax+by+c=0` with `a²+b²>0` and its point-membership equivalence; parametric with **one common t∈ℝ** and nonzero direction.
- Original **two display TeX formulas** remain adjacent to relevant rule, not duplicated in extra colorful boxes; no unjustified quota yellow/card.
- Required graph relation: `b≠0` gives `y=−a/b·x−c/b`; vertical `b=0,a≠0` gives `x=−c/a`, not a graph `y=f(x)`. Explicit special conditions and note that for linear `y=mx+p`, `n=(m;−1)`.

**Examples X-F.1:** exactly **3.1 and 3.2**, distinct **Đề bài → Phân tích → Lời giải in existing Golden neutral `thpt-g10-example-solution` → Kiểm lại**. Example 3.1 through P(1;4) and n=(2;1) gives `2x+y−6=0`, u=(1;−2), valid n·u=0. Example 3.2 through A(1;2), B(4;3) gives AB=(3;1), n=(1;−3), `x−3y+5=0` and x=1+3t, y=2+t; check both points and same parametric line. No original example numeric answers changed.

**D6/PED6:** Original seven named canonical HELP `HELP-G10-CHVII-TRY01..07` plus two original transfer HELP `D6-G10-B19-01/02` now form **one and only one 4.1–4.9 error taxonomy**. Each has distinct mistake name, original problem context, "Nhận diện lỗi → Tự chẩn đoán → Kiến thức gốc → Tự sửa → Luyện lại" and original linked Core/Practice/Written IDs, no generic "Tự khắc phục theo năm bước", no redundant navigation/meta copy. Cases: normal vs direction; subtraction/sign from point; shared param t; AB as normal; point-substitution sign; intersection vs orthogonality; slope vs intercept; zero normal; identical endpoints A=B. One footer Core/Luyện tập/Tự kiểm tra remains.

## G2 — independently reworked mathematical evidence per unchanged outcome

| Original OUTCOME_ID / canonical First Try | Expected mathematical reasoning, independently computed | Student-error route |
|---|---|---|
| `G10-B19-NORMAL_DIRECTION` · `THPT-G10-CHVII-TRY01` | n=(2;3), u=(−3;2), n·u = −6+6 = 0, both nonzero; yes u is direction | 4.1 and 4.8 |
| `G10-B19-GENERAL_POINT` · `THPT-G10-CHVII-TRY02` | A(1;3), n=(2;−1) yields 2(x−1)−(y−3)=0 i.e. `2x−y+1=0`; A indeed satisfies 2−3+1=0 | 4.2 |
| `G10-B19-PARAMETRIC` · `THPT-G10-CHVII-TRY03` | A(1;−1), u=(−2;3), `x=1−2t,y=−1+3t,t∈ℝ`; t=0 is A, t=1 is (−1;2) | 4.3 |
| `G10-B19-TWO_POINTS` · `THPT-G10-CHVII-TRY04` | A(−1;2), B(2;5), AB=(3;3); n=(1;−1), line `x−y+3=0`; both points satisfy | 4.4 and 4.9 |
| `G10-B19-MEMBERSHIP` · `THPT-G10-CHVII-TRY05` | d:2x−3y+1=0; M(1;1) value 0 belongs, N(2;1) value 2 does not | 4.5 |
| `G10-B19-MULTISTEP` · `THPT-G10-CHVII-TRY06` | x+y=4, x−y=2 solve I(3;1); n1=(1;1), n2=(1;−1) dot=0, so perpendicular, not simply from crossing | 4.6 |
| `G10-B19-LINEAR_MODEL` · `THPT-G10-CHVII-TRY07` | (t,V) at (0;5),(2;9) → slope 2, intercept 5, `V(t)=2t+5`, `V(3)=11` if linearity still holds | 4.7 |

**Source conservation static proof:** Old published B19 canonical Git blob `8fc4efaafcf2b896430f8cfa0ab18d7118fefc9c` vs R01 current `e80126160dfc7670d7feaaeb55cafa416b8e52ff`; **57/57 original MathJax expressions as multiset preserved**, revised contains **129** math expressions with 2 original display blocks. **All 7** original Q15 `data-thpt-first-try-id`, 7 original `data-thpt-help-ref`, **all 9** original `data-thpt-help-id`, 7 outcome IDs and 5 original formative IDs unchanged in exact order; **7/7 original Markdown `??? question "Đối chiếu"` answer/disclosure bodies exact-text preserved**. One original SVG and two original mathematical examples preserved. Page contains 4 exact Golden tabs; visible **7 "Vận dụng." and 0 "Tự thử"**. All original mathematics/conditions retained while improvements are truly editorial and PED substantive.

**Q15:** one canonical item per original `first-try-id`, unscored "Vận dụng" only, original hidden answers strictly preserved; no new keys/rubrics or IDs. **Q16:** no official Readiness, Final Submit, score or Mastery changed; no shared runtime, Firebase, THCS, Gemini, bank, private RD1, Core, Practice or Written alteration. **Q17:** SGK and Chuyên đề journeys unchanged and independent. **Q18:** signed source chain original receipt 13/11 → new per-B19 R01 only, previous immutable source untouched, no academic verdict for unchanged items inferred.

**AUTHOR_SELF_QA_SIGNOFF:** G0/G1/G2 completed for the seven outcome math and learner path, with `P0=0`, `P1=0` in source-scoped self-audit. **NOT** an independent reviewer PASS; owner real-device P2 after release is separate.

## G3–G5 (technical only, not academic PASS)

Required PR HEAD QA: exactly B19 source + this Q18 receipt + source test/router companions; classifier `SCOPED_LESSON`, **no site-wide QA**. B19-only Chromium Golden/semantic boxes/MathJax/SVG/Q15/Q16 at 390/820/1440 and scope source/receipt integrity. Before merge, all scoped CI PASS and no broad trigger; on main push `deploy-scoped-lesson` must succeed with broad `deploy` job SKIPPED, including source proof for original **Markdown `Đối chiếu`** answer blocks (PR #934), built MathJax and privacy. Check exact `gh-pages` B19 rendered HTML and 2 neutral example cards, four formal boxes, 9 unique errors; **OWNER_P2_PENDING** until owner confirms.

**G3_SCOPE_REPAIR:** First B19-only Chromium run #44659125356 discovered all seven original First Try spans missing from rendered DOM, due to accidental **eight-space** indentation (code block) instead of four spaces inside Golden tabs; one original SVG was identically indented. Corrected precisely seven marker lines and one SVG line in the same canonical source, without touching any mathematics, IDs, closed answers, Q16 or neighboring pages. Preserve the failed run as evidence and require final-HEAD scoped Chromium recheck. Current candidate Git blob above is the corrected source.
