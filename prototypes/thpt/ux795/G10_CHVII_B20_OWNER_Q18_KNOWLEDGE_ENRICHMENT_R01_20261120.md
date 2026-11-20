# G10 B20 · Vị trí tương đối, góc và khoảng cách — owner G0–G2/Q18 source receipt R01

**RECEIPT_ID:** G10-CHVII-B20-OWNER-G0G2-Q18-R01-20261120
**STANDARD_ID:** SLM-THPT-QUALITY-ONE · Q01–Q18 / current v3.2.0 (ONE standard)
**LESSON_ID:** G10-B20 · **OUTCOMES:** G10-B20-RELATIVE_POSITION, G10-B20-PERPENDICULAR, G10-B20-INTERSECTION, G10-B20-DISTANCE, G10-B20-ANGLE.
**MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` / `AUTHOR_SELF_VERIFIED` — author math/PED self-audit, **not** independent NotebookLM Academic/PED verdict. **OWNER_P2_PENDING** until the owner reviews the exact published snapshot.
**DELTA:** `DELTA_C_ACADEMIC_MATERIAL` (full learner narrative, formal definitions/rules, analytical worked examples and D6) plus `DELTA_A_UI` (semantic card colors, section labels and placement of original SVG).
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-vii/bai-20.md` (exact ONE canonical learning source).
**PREVIOUS_B20_SOURCE_BLOB:** `510f79eb61930e9b0d7795d4b0288fd29ccb0675` (immutable 13/11 signed Chapter VII S1 Golden receipt).
**CANDIDATE_B20_SOURCE_BLOB:** `2641517eb3ab845e1e73932b80b9896203442fbd` (new source Git blob R01, only B20).
**BASE_MAIN_COMMIT:** `e194fc87ffe66dd315dac3792ab313f888cd3bbc`, B19 owner P2 PASS snapshot unchanged.
**OWNER_SCOPE:** owner 20/11/2026 explicitly requested continuing B20 upgrade under source-first rules and scoped-only QA; no global tests or edits to other lessons/assessment/runtime.

## G0 — sources, prior errors, scope before authoring

Read original B20 canonical in full and owner accepted B19 source/Golden, `AGENTS.md` current G0–G5 and [#795](https://github.com/TMA2015/self-learning-math/issues/795), prior B17/B18 mistakes, [#861](https://github.com/TMA2015/self-learning-math/issues/861). Logged **five original B20 G0 defects in #795 before editing** (disconnected Discovery, no formal semantic cards, wrong example labels, duplicate/generic D6, figure detached from description). No second quality standard.

S1: SGK Toán 10 Kết nối tri thức **Tập 2**, historical printed pp **36–42** and original SBT printed pp **32–38** (the prior 13/11 receipt, not newly opened physical scan). Three genuine sections, in source unchanged: **2.1. Vị trí tương đối giữa hai đường thẳng; 2.2. Góc giữa hai đường thẳng; 2.3. Khoảng cách từ một điểm đến một đường thẳng**. Checked publicly accessible digitized SGK transcription at https://sgkvn.com/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vii-phuong-phap-toa-do-trong-mat-phang-3234/bai-20-vi-tri-tuong-doi-giua-hai-duong-thang-goc-va-khoang-cach-12001.html and preserved original source-S1 sequence. **No false claim** of newly verified original scan hash or PDF/printed page offset. Historical original ChVII `G10_CHVII_B19_B22_S1_Q18_GOLDEN_ENRICHMENT_RECEIPT_20261113.md` remains immutable, with B20 expected exact old SHA `510f79...`.

## G1 — one coherent learner narrative, formal Golden, no redundant student instructions

**Tab 1 Khám phá:** five chapters of a single story: deciding when two roads intersect/are parallel/coincident → drawing a perpendicular through P → solving a system for the common point → interpreting *shortest perpendicular* distance → reading *smaller angle* independent of normal arrow orientation. No fake seven-image requests and no `Kiến thức tiền đề/Bản chất trước công thức/Hướng dẫn đọc hình` checklist. Real original `G10_B20_POINT_LINE_DISTANCE_R02.svg` moved from Tab2 to **before** the explanatory diagram paragraph in Tab1; exact figure/alt/caption source preserved. Each of **five** canonical original questions is introduced by **Vận dụng** (zero title “Tự thử”), followed by voluntary, closed **Đối chiếu**; no five duplicate Practice links between outcomes. No academic necessity lost.

**Tab 2 formal role map:** retained exactly three real SGK headings, source originals and two display formula blocks. **3 green concept boxes:** position of two lines, angle of two lines, perpendicular distance from a point. **3 blue rule boxes:** location test with coefficient and zero constraints; smaller-angle absolute dot product with positive nonzero normal lengths; nonnegative point-line distance as absolute numerator divided by length of nonzero normal. Original math remains next to, not inside an unrelated decorative box; page-local Golden CSS colors in light/slate, no shared stylesheet.

**Tab 3 examples:** exactly two original cases, no new canonical questions or changed numerical answers. Each shows **Đề bài → Phân tích (why that method; input limits) → neutral Golden Lời giải → Kiểm lại**. No obsolete heading `Vì sao chọn cách này?`, no example note that talks about a nonexistent figure “bên cạnh”, no duplicate Tab4 errors. B20 original examples: distance from M(0;0) to 2x+y−6=0 is 6/√5, and d₁:x−y−1=0 vs d₂:x+y−5=0 cross at (3;2) and are perpendicular; d(O,d₁)=1/√2.

**Tab 4 D6:** seven original HELP IDs, **one** named taxonomy 4.1–4.7, each with recognizable error, problem data, self-diagnosis, math cause, correction and aligned practice. No generic `Tự khắc phục theo năm bước`, no duplicated “Nếu đã xem lời giải ...”, no second problem/error list. 4.6 isolates unsafe division by zero in comparing coefficients, 4.7 deals with invariance under equivalent equation scaling (distinct from the problem-specific absolute/distance error in 4.4). Original six formative references and bottom Core/Luyện tập + end-of-chapter link preserved.

## G2 — independent manual mathematics and pedagogic read-through by outcome

| OUTCOME / original item | Independent arithmetic and conceptual check | D6 |
| --- | --- | --- |
| `G10-B20-RELATIVE_POSITION` / `THPT-G10-CHVII-TRY08` | d1: 2x−y+1=0, d2:4x−2y+3=0. Normals proportional but triplets not: 2*d1 has constant 2, d2 constant 3. **Parallel distinct**, not coincident; no ratio division by zero | 4.1,4.6 |
| `G10-B20-PERPENDICULAR` / `THPT-G10-CHVII-TRY09` | n=(1;2), choose n'=(2;−1), dot=0; through P(1;−2) gives **2x−y−4=0**, evaluate 2+2−4=0 | 4.2 |
| `G10-B20-INTERSECTION` / `THPT-G10-CHVII-TRY10` | x+2y=8, 2x−y=1 ⇒ **(2;3)**, 2+6=8 and 4−3=1 | 4.3 |
| `G10-B20-DISTANCE` / `THPT-G10-CHVII-TRY11` | From M(1;2) to d:3x+4y−1=0, numerator |3+8−1|=10, denominator √25=5 ⇒ **2**, nonnegative | 4.4,4.7 |
| `G10-B20-ANGLE` / `THPT-G10-CHVII-TRY12` | x=0 and x−y=0, n1=(1;0), n2=(1;−1) ⇒ cos φ=1/√2, **45°**, not 135° | 4.5,4.7 |

**Other S1 math limits:** n_i≠0 for every line; determinant nonzero gives unique crossing, zero requires full triple test; perpendicular normals dot=0; 0°≤φ≤90°, absolute dot numerator; d(M,d)≥0 and invariant under multiplying whole line equation by any nonzero number. Original figure 2x+y−6=0 from M(0;0) foot H=(12/5;6/5) and distance 6/√5 verified by 2*(12/5)+6/5=6, H parallel n=(2,1).

**Exact preservation audit before CI:** Original B20 `510f79eb61930e9b0d7795d4b0288fd29ccb0675` → new `2641517eb3ab845e1e73932b80b9896203442fbd`. **39/39 original math expressions preserved as multiset**, revised now 59 TeX expressions including 2 original display math blocks. **5/5 original canonical `??? question "Đối chiếu"` Markdown answer bodies byte-identical**; 5 original `data-thpt-first-try-id`, five `data-thpt-help-ref`, 7 `data-thpt-help-id`, five outcome IDs, six `data-thpt-formative-id`, one original SVG and Golden four-tab identity preserved. Original examples' mathematics/results preserved; no new official scored bank, duplicate item, RD1, Final Submit, Readiness, hint, Mastery or Firebase write.

**Q15/Q16/Q17/Q18:** one canonical source/ID/answer, unscored Vận dụng/Đối chiếu still opt-in, no private assessments exposed; independent SGK/Topic learning paths unchanged. Source SHA chain explicitly extends old ChVII signed published snapshot; no invented Topic PASS or prior reviewer PASS.

**AUTHOR_SELF_QA_SIGNOFF:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` source-scoped G0–G2 completed, `P0=0`, `P1=0` for B20 math/PED editorial scope; not a NotebookLM verdict, and owner device P2 remains PENDING.

## G3–G5 strictly technical RELEASE

PR only B20 canonical + this receipt + exact source verifier/router companions. `SCOPED_LESSON` classifier and B20 real Chromium 390/820/1440 Golden/semantic cards/SVG/MathJax/Q15/Q16, exact source+immutable answer check. Roadmap scope-only job, no 27/79/93/all-site QA. After exact-head CI passes, merge only the approved lesson scope and use `deploy-scoped-lesson` with global `deploy` **SKIPPED**. Validate `gh-pages` B20 HTML (5 visible Vận dụng, 5 original TRY, 7 HELP, 3+3 semantic cards, two neutral examples and 2 MathJax display wrappers) and confirm B19 accepted Pages blob unchanged. **OWNER_P2_PENDING** until the owner inspects.
