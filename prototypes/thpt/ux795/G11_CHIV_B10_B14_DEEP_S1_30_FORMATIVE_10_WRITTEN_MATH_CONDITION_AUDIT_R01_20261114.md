# RELEASE — Kiểm toán sâu Toán 11 Chương IV B10–B14 (R01, 14/11/2026)

**LANE:** RELEASE, **EVIDENCE-ONLY** cho Issue #795 / Draft PR #862. **Trạng thái:** `OWNER_QUALITY_HOLD`, `G11_CHIV_Q01_Q02_Q14_AP_HOLD`, `B14_P04_MATH_CONDITION_HOLD`. Không sửa canonical learner source, item/key, reviewer receipt, RD1, Firebase, Golden THCS/THPT; không merge/deploy. **Không cấp Academic/PED PASS mới, CONTENT_READY mới, Q01 toàn phần, AP1–AP5 browser PASS hoặc Q16 runtime PASS.**

**Chuẩn duy nhất:** `SLM-THPT-QUALITY-ONE v3.1.0` tại `main`, Q01–Q18, AP1–AP5/R1–R5, cùng quy định biên tập bốn tab Golden của owner. Đã kiểm tra GitHub đầu lượt: `main b103cd91cd32a2ff3accd1ae14c24870330ef9a2`, `gh-pages 469e0c6cffde64a9b6ffbe7c65ed97144eb74659`, PR #862 vẫn OPEN/DRAFT; issue #795 trước lượt chưa có báo cáo riêng về G11 B10–B14.

## 1. Source receipts (đã mở file thật)

| Thành phần | Git blob SHA1 | Nội dung xác thực |
|---|---|---|
| [B10 Knowledge](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/sgk/lop-11/chuong-iv/bai-10.md) | `b55bf3c5122dd967b3b56fe9085eff19e58d509e` | 61 dòng, 4 EX, 1 first try, 2 HELP, 1 SVG |
| [B11 Knowledge](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/sgk/lop-11/chuong-iv/bai-11.md) | `7dccb87d44c1734cf7b5f3c77df209b75db6e63b` | 61 dòng, 4 EX, 1 first try, 2 HELP, 1 SVG |
| [B12 Knowledge](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/sgk/lop-11/chuong-iv/bai-12.md) | `6dc44484c9e12d7dcbf49c40157645ddae577390` | 61 dòng, 4 EX, 1 first try, 2 HELP, 1 SVG |
| [B13 Knowledge](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/sgk/lop-11/chuong-iv/bai-13.md) | `619162cbe9854188c5873e03a69c3fb5afc95b43` | 61 dòng, 4 EX, 1 first try, 2 HELP, 1 SVG |
| [B14 Knowledge](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/sgk/lop-11/chuong-iv/bai-14.md) | `121b165f6bd95cdfa4c33d4a4def678d9121e81c` | 61 dòng, 4 EX, 1 first try, 2 HELP, 1 SVG |
| [All five lesson C/P R03 source-locked JS](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/assets/javascripts/thpt-g11-chiv-b10-b14-source-locked-formative-r03.js) | `b9cae4023f586acd549ffc6e8253d7757f4265d7` | 30 unique PUBLIC IDs, **10 Core + 20 Practice**, 6 per bài, original public source blob `e945ccdd434689a5c6d8d7bfd44ba26d287a7b9b`, R03 reviewer receipt `b95425c53ab55dc4f3d0f05ecba6fd6e2f69bc52`, 22 protected RD1 not exported |
| [Practice hub](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/sgk/lop-11/chuong-iv/luyen-tap.md) | `90ba22a4a4d80d8a7469f40718ff21bdadd6b34b` | All five lessons correctly expose 2C +4P |
| [Shared Written/Anchor library](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/thu-vien/tu-luan-g11-chuong-iv.md) | `17bb4f8071a421060f665f2ec89e1ea9f88218ca` | **10 unique canonical Written**, 2/bài (1 normal, 1 Anchor-as-label), /4 rubric, solutions behind details |
| [Chapter self-check entry](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/thpt-preview/sgk/lop-11/chuong-iv/tu-kiem-tra-chuong.md) | `e42a59fdd7c47e55a559100c94c00b5fccc5889c` | 17 public repeated practice skills, explicitly not independent exam |
| [Chapter self-check config](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/assets/data/thpt-g11-selfcheck/CHIV.json) | `42ad404c8bae1a7e51358128763c68a0f4c50980` | `17` unique PUBLIC Practice refs; includes `THPT-G11-CHIV-B14-P04`; `mastery_credit=false`, `independent_readiness_credit=false`, `persist_results=false` |
| [G11 Final Submit static engine](https://github.com/TMA2015/self-learning-math/blob/b103cd91cd32a2ff3accd1ae14c24870330ef9a2/docs/assets/javascripts/thpt-g11-reviewed-selfcheck-v1.js) | `295cc4109943b35d289e816678998568fe7dde74` | JS lines 161–175 only output solution after `submitted`; 309–328 enforce CHIV PUBLIC R03 source/version/17 refs/unique skills; no browser execution QA |

**Published HTML (read at exact `gh-pages` commit):** B10 `186cb72b0f5790720b6e31d36918ec6d13814dd0`; B11 `23a5db1845f8ac46ff0ad1cfee7ca879584d637d`; B12 `2183508c8ae549c6fb77b9736a1ae8cab8a790b5`; B13 `556f4d888f58ffe4c7b9abaad4fbffbe8c846379`; B14 `4004d6355c5092e296ea27cec93accb8c035fd2d`. Also published practice `78ac607bc6ad438d7f88b62f2cfde4eb93f35099`, Written `32e82a016776ad2b6511d9e410001a503f028767`, selfcheck `3eb15e976362fc65b8e8db366340f4d833fa4e84`. No false claim actual browser click or responsive validation.

### Actual SVG inventory and verification (all five EXIST and geometrically coherent)

- `FIG-G11-B10-01_R01.svg`: blob `ffd7788a36442efae9067f61bc891d360bd65151`. Tứ diện S.ABC, SA as (SAB)∩(SAC), matching labels.
- `FIG-G11-B11-01_R01.svg`: blob `ab6bd565f48e9addf190e02b0e9d729011d21c52`. Triangular prism, AB∥A′B′, AA′ skew BC, distinct.
- `FIG-G11-B12-01_R01.svg`: blob `4f0972621fa04af55232a46c46448998ee241ba6`. S.ABCD parallelogram base, midpoint MN red ∥AB and ∥base.
- `FIG-G11-B13-01_R01.svg`: blob `153327ce6ceaf9c2f1110e3939fa464442dd7cb0`. Box two parallel quadrilaterals, labeled edges.
- `FIG-G11-B14-01_R01.svg`: blob `c7c1f862228c51443d8021c63870990052009679`. Four aligned projection segments between parallelograms, correct parallel direction.

All have `<title>/<desc>`, source alt/caption consistent. They are **not missing or demonstrably wrong**. However, only one per lesson and placed at **source line 48** AFTER four examples and the first-try. They do not teach some absent S1 outcomes: e.g. B10 pyramid anatomy, B11 three plane-intersection cases, B13 3 parallel planes/two transversals. No on-device 390/820/1440 zoom/accessibility/visual overflow signoff.

## 2. S1 comparison authority and limitations

**Book:** *Toán 11 Kết nối tri thức, Tập một*, NXB Giáo dục Việt Nam, public `BẢN MẪU tháng 11/2022` PDF text **directly read** via [PDF mirror](https://sqhx-hanoi.mediacdn.vn/91579363132710912/2025/11/18/1-toan-11-tap-1-ket-noi-tri-thuc-1763452729932535290170.pdf), backed by [SGKVN SGK text transcription](https://www.sgkvn.com/lop-11-14/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-iv-quan-he-song-song-trong-khong-gian-3442/bai-13-hai-mat-phang-song-song-12658.html). **Printed chapter start pages** from original PDF Table of Contents: B10 **70**, B11 **78**, B12 **84**, B13 **88**, B14 **95**, Chapter IV end exercises **102**. Direct SGK PDF text shows:
- B10 pp70–77: §1 *Khái niệm mở đầu*, §2 *Các tính chất thừa nhận*, §3 *Cách xác định một mặt phẳng*, §4 *Hình chóp và hình tứ diện*; specific learner capability **recognize pyramid/tetrahedron and name components**, not merely apply notation.
- B11 pp78–83: relative lines, parallel properties, and **Định lí về ba đường giao tuyến**: if three planes intersect pairwise in three distinct lines, they are concurrent or pairwise parallel (PDF text around §2, printed p81).
- B12 pp84–87: line-plane relations and conditions, represented in source, but no automatic complete S1 verdict.
- B13 pp88–94: **4 parent groups** §1 two parallel planes, §2 conditions/properties **including unique parallel plane through an exterior point**, §3 **Định lí Thalès trong không gian** (3 pairwise parallel planes intercept proportional segments on two transversals, PDF printed p91), §4 **definition/properties of prism and box**. These are explicitly in the opening outcome table, not optional add-ons.
- B14 pp95–101: definition, properties of parallel projection and **hình biểu diễn**; skills include projecting point/segment/triangle/**circle** and **drawing simple spatial figures**; SLM source covers concept, degenerate lines, ratio, and qualitative ellipse, but lacks a pedagogical demonstration of constructing ellipse/circle image or a student-executable spatial illustration exercise.

**SOURCE LIMIT:** PDF text, page numbers and textbook tables were accessible, but `web PDF screenshot` and container binary download returned `cache miss/download failure`; **printed-page ↔ actual PDF page-index, figure visual custody, edition reconciliation and full SBT not independently authenticated**. No `Q01_S1_FINAL_PASS`. Do not confuse accessible PDF text with visually verified publisher copy. Supplied standard Project Source remains secondary to S1.

## 3. Critical findings: exact lesson/outcome/item, gate and evidence

### P1 — `G11_B14_P04_MATH_CONDITION_FALSE_GENERALIZATION` (Q03/Q05/Q15, AP2, Q16 downstream)

**Exact canonical** `THPT-G11-CHIV-B14-P04` in R03 PUBLIC bank (blob `b9cae402...`), stem:
> “Một hình bình hành không suy biến chiếu song song thành hình gì?”

Published review solution:
> “Đáp án: Hình bình hành.” / “... giả thiết ảnh không suy biến loại trường hợp cùng đường.”

**This is mathematically under-conditioned and can label a correct learner objection wrong.** The *stem only says the original parallelogram is nondegenerate*, **not** that its projected image is nondegenerate. Valid counterexample in `R³`: let square `A=(0,0,0), B=(1,0,0), C=(1,0,1), D=(0,0,1)` (nondegenerate area 1) lie in `y=0`. Project onto `z=0` along vertical `Δ=(0,0,1)` (a valid direction transverse to the target plane). Images `A′=D′=(0,0,0)`, `B′=C′=(1,0,0)`; thus whole square **collapses to a segment**, not a nondegenerate parallelogram. The solution's phrase “giả thiết **ảnh** không suy biến” is **not in the stem**. Lesson B14 line ~14 itself mentions lines/faces can collapse and conditions matter; the misleading item loses them.

**Impact:** This exact B14 P04 is also one of the **17** `CHIV.json` public self-check refs; after `Final Submit` the app would show the same logically under-conditioned official answer. Static Q16 no-leak guard is separate: no claim of runtime wrong-mark since `FREE_TEXT` is manually compared and not system-graded, but content after submit is misleading.

**Required route:** `AUTHORING_DEFECT` Q03/Q05 + item_id, `DELTA_C_ACADEMIC_MATERIAL` if fixing condition or rubric, targeted independent NotebookLM/reviewer recheck, maintain **one canonical item_id** with updated reviewer/receipt/SHA and verified self-check placement. RELEASE must not patch the public JS or silently change key independently.

### P1 — `G11_B13_S1_THALES_3_PARALLEL_PLANES_MISSING` (Q01/Q02/Q03/Q04/Q05/Q17)
SGK B13 original §3 (printed 91) requires *three pairwise parallel planes intersect two distinct transversals and intercept corresponding segments proportionally*, e.g. `AB/A′B′ = BC/B′C′` for corresponding intervals. **B13 full source lines 9–35 covers two-plane definition, two intersecting lines condition, plane intersection relation and single-plane sections via ratios from vertex S; does not state/derive/apply triple-plane theorem**. B13 2C+4P **none** asks two arbitrary transversals with three parallel planes or proportional corresponding distances; both B13 Written W01/W02 use a pyramid plane section and 2/5 area scale. Current similar triangle section ratio is **not equivalent** to the general S1 Thalès-in-space outcome.

**Also absent:** §2 SGK printed p89 **unique plane through exterior point parallel to given plane**, and §4 true **prism/box definitions + why lateral faces are parallelograms and side edges are pairwise parallel and equal in length**. B13 source EX01 names a prism and says bases parallel, no teaching the complete construction/proof. Do not count an SVG of a box as theory, or a title occurrence as an outcome PASS. These are distinct outcome gaps, **not** a new RELEASE standard.

### P1 — `G11_B11_S1_THREE_PLANE_INTERSECTIONS_MISSING` (Q01/Q02/Q07/Q13)
Original SGK B11 §2 printed p81 gives **định lí về ba đường giao tuyến**: three planes pairwise intersect in three distinct lines ⇒ the lines are **concurrent or pairwise parallel**. B11 lesson lines 9–18 only has a special statement “giao tuyến cùng phương” when both planes contain specified parallel directions. B11 EX1–EX4 and its six C/P **no construction, illustration or proof of full three-plane concurrent/parallel alternative**; 2 Written focus triangle midpoint/skew lines. Special shared-direction corollary does **not** replace full theorem. Need self-contained diagram/reading and distinct exercise mapped to this outcome.

### P1 — `G11_B10_S1_PYRAMID_TETRAHEDRON_DEFINITION_MISSING` (Q01/Q02/Q03/Q10)
Original SGK B10 §4 printed pp75–76 **defines pyramid** (base convex polygon, apex, lateral triangular faces, lateral/base edges) and **tetrahedron** (4 noncoplanar vertices, four triangular faces, three pairs of opposite edges), plus what counts as a face/vertex/base. B10 current theory **lines 9–18** instead teaches plane determination, intersections, *already assumes* tetrahedron/pyramid in all EX, and section triangles, but does **not** define these spatial solids, their components or the special tetrahedral opposite-edge concept. 2C+4P and Written B10 W01/W02 only *use* `S.ABC` as a given, do not ask learner to recognize/name structure. This is a teachability/outcome miss, not a claim that intersection examples have wrong answer.

### P1 — `G11_CHIV_GOLDEN_TABS_PUBLISHED_MISSING` (Q03–Q14/AP1/AP4)
All B10–B14 source exactly 61 lines each, six content sections **in vertical order**: line5 `Vì sao cần học`, line9 `1. Bản chất...`, line19 `2. Ví dụ`, line29 method reasons, line36 `3. Tự thử`, line46 `4. Hình minh họa`, line52 `5. Tự khắc phục`, line58 `6. Tiếp tục`. All five published HTML learner articles **zero independent Golden four-tab containers**; masthead Chapter/Practice/Selfcheck link bar does not count. Need separate full, deep Tab1 discovery / S1-faithful concise Tab2 / EX in Tab3 / HELP in Tab4 with verified JS and accessibility—not merely renaming heading. SOURCE pedagogical rework is **DELTA_C** and requires scoped review; equivalent safe CSS/label changes are different DELTA A.

### P1 — `G11_CHIV_PRACTICE_EQUALS_SOLUTION_EXPOSURE` (Q04/Q05/Q14/Q15)
Of 20 Practice, **at least 16** are identical/near-identical to fully solved public EX/first try/HELP; examples:
- B10 P01 `(SAB)∩(SAC)=SA` is exact EX02; P02 `CM∩(SAB)=M` exact EX03; P04 `MNK` section exact EX04.
- B11 P01 skew `SA,BC` exact EX01; P02 midpoint `MN∥AB` EX02; P03 skew `SA,CD` exact EX03; P04 `a∥b,b∥c` with `a=c` EX04.
- B12 P01 midpoint MN∥base EX01; P02 SA intersects base at A EX01; P03 (d∥(P)), (Q)∩(P)=e EX03; P04 midpoint construction EX04.
- B13 P03 pyramid section ratio 1/3 same method as EX03; P04 exact `t=2/3→area 4/9` EX04.
- B14 P01 projected B′→B EX01; P02 midpoint image EX02; P03 degenerate projection EX03; P04 image of parallelogram EX04 (P04 has separate missing-condition math defect).
All these are useful as **formative retrieval** but not independent transfer or held-out Readiness. *Do not delete, duplicate, re-ID or relabel canonical 30 IDs just to satisfy a count.* Matrix role+exposure/outcome and new truly independent tasks require AUTHORING and targeted reviewer.

### P1/P2 — `G11_CHIV_PED_FIRST_TRY_PREANSWER` (Q09–Q14/PED6)
All five `Tự thử trước Core` source lines 36–44 repeat concepts and in several cases the **same fully solved prompts directly above**: B10 two points/AB⊂plane already in definition and B10-C01/HELP; B11 SA vs BC skew already EX01/P01; B12 AB within plane already EX02/C01; B13 midpoint section plane parallel base already EX03; B14 AA′ projects to A already EX03 and HELP. The `<details>` reveal after the self-try works as an affordance, but not as novel independent reasoning after pre-exposed solution. In earlier owner Golden review “Tự thử” learner presentation should become **Vận dụng**, with a genuinely independent first-try and remediation. Pedagogic rewrites require Delta C.

### P2 — `G11_CHIV_AP3_DIAGRAM_LATE_AND_UNCOVERED_OUTCOMES`
Each source SVG at line48 after entire formal theory, 4 EX, and first try; correct single figure exists, not placed as learning scaffold before lines9–35. B11 needs distinct diagram for three pairwise intersections; B13 needs a three-plane/two-transversal visual. B14 needs how to draw a simple solid's image and an ellipse image from a circle if required by S1. Preserve valid existing files, don't invent incorrect/missing figures. AP3 browser 390/820/1440, device/Safari P2 and accessibility screenshots not done.

### P2 — `G11_CHIV_STUDENT_TECH_IDS_AND_GENERIC_HINTS`
Visible `EX-G11-...` and `THPT-G11-CHIV-...` IDs in prose and anchor headings, and `D1 Bxx` in recovery messages; all 30 PUBLIC hints are the same generic “Đọc lại D1 và các điều kiện ...” per lesson. There **are** 2 actual 5-step HELP chains per lesson, do not claim D6 absent. All method selection rationales grouped in lines29–35, after the 4 EX, rather than embedded in guided examples. Mark Q04/Q08/Q13/AP4. Pure display labels Delta A possible, real method/how-to enrichment Delta C.

### Positive AP2 (avoid false positives)
All five published articles actually contain `<span class="arithmatex">\(...\)</span>` from Markdown math and load MathJax 3 `tex-mml-chtml.js`. Static counts B10 **52**, B11 **46**, B12 **62**, B13 **47**, B14 **10** arithmatex fragments. Thus **do NOT raise a source AP2 “MathJax completely absent/raw formula” defect** like G11 ChIII. JS runtime availability, exact rendering and 390px overflow remain untested; the content may still have raw non-math technical codes.

## 4. Q15/Q16 math, Written and independent assessment

**30/30 parsed PUBLIC items with unique canonical IDs**; **29/30 solutions/conditions appeared mathematically sound within supplied context**; the one specific counterexample defect is **B14-P04**. No other wrong answer established; never translate “other 29 source checks” into academic full PASS. Bank has 10C, 20P and 20 distinct skill tags, self-check cites 17 unique practice skills.

**10/10 Written normal/Anchor** source prompt/solution/rubric checked:
- B10 W01/W02 intersection SB, sections MNK/SCP; correct given internal points;
- B11 W01/W02 parallel midpoint and skew, correct;
- B12 W01/W02 non-coplanar line-plane hypothesis, correct;
- B13 W01/W02 parallel sections and area `(2/5)^2×50=8 cm²`, correct; do not count as general triple-plane Thalès;
- B14 W01/W02 ratios `2:3` of 25⇒10/15 cm, median preservation, correct with nondegenerate triangle condition.
All /4 rubrics and hidden `<details>` for manual reveal. 10 exact canonical IDs distinct; `Anchor` is a tag only. No automated Written grading or Mastery credit.

**Selfcheck Q16:** R03 `CHIV.json` holds 17 public practice refs, including flawed P04. `mastery_credit=false`, `independent_readiness_credit=false`, `persist_results=false`. JS client `submitted=false` initially, displays answer/solution only after `if(submitted)`, validates all 17 public refs with source/version SHA (lines309–328). `FREE_TEXT` manual review, **not automated scoring**, so phrase impact accurately: *misleading answer shown on comparison after Final Submit*, not proved auto-wrong grade. Protected RD1 remains outside this audit. Real navigation, reload persistence, hints/Gemini suppression, click behavior and network exfiltration not tested.

## 5. Corrective routing and checkpoint

Escalate **`AUTHORING_DEFECT`** (same `SLM-THPT-QUALITY-ONE Qxx`) for `THPT-G11-CHIV-B14-P04` first, because it is actively exposed in both PUBLIC Practice and public self-check and has an explicit valid counterexample; then separately B13 missing *three-plane Thalès / unique parallel plane / prism-box structure*, B11 missing full three-intersection theorem, B10 missing spatial solid definitions; then Golden pedagogy, independent transfer and figures. **Do not edit while in RELEASE.** Source-affecting mathematical/pedagogical changes must use `DELTA_C_ACADEMIC_MATERIAL` and targeted NotebookLM independent review preserving source/receipt chain. Distinguish `SGK_CHAPTER_READINESS` from `PUBLIC_CANONICAL_REFERENCE_ONLY`, and protect `OWNER_QUALITY_HOLD` until owner/QA gates.

**Status count after this audit:** G10 27/27 + G11 ChI B01–B04 4 + ChII B05–B07 3 + ChIII B08–B09 2 + **ChIV B10–B14 5** = **41/79 THPT SGK deep source-audited**. This is **not 41 released**, not AP/Academic PASS.

**Next in RELEASE only:** Toán 11 ChV B15–B17, after rechecking GitHub main/gh-pages/head/comments. No cross-lane learning content edits, no merge/deploy.
