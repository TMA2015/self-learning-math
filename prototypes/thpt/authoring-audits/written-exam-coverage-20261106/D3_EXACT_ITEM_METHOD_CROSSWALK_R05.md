# AUTHORING R05 — exact D3 item evidence for exam-method transfer, not Academic re-review

AUDIT_ID: SLM-SGK-WRITTEN-EXAM-COVERAGE-20261106
PACKET_ID: SLM-SGK-CANONICAL-D3-EVIDENCE-R05-20261106
SCOPE: G10_B24_PLUS_G12_B02_B05_PLUS_G11_B18_B21
IMMUTABLE_WRITTEN_D4_BASELINE: 238
D3_AND_D4_ITEMS_INSPECTED_IN_THIS_R05: 59
G10_B24_D3: 8
G12_B02_B05_D3_PLUS_D4: 27
G11_B18_B21_D3: 24
ACADEMIC_OR_PED_PASS_REOPENED: NO
QUESTION_ANSWER_RUBRIC_REWRITES: 0
NEW_CANONICAL_D4_ITEMS: 0
FORMAL_COVERED_VERDICTS: 0
FORMAL_COVERAGE_GAP_VERDICTS: 0
SOURCE_ISSUER_VERIFICATION: PENDING_FOR_SEMESTER_MIRRORS
TOPIC_PLACEMENTS_ISSUED: 0
RELEASE_AUTHORIZATION: NO

## How to interpret this audit

**This R05 checks *existing opportunity to practice a method*, not whether any of the approved questions/solutions/rubrics are academically correct.** The previous Academic/PED PASS is not re-opened. A D3 exercise is not itself part of the fixed **238 canonical D4 Written** inventory; the 4 G12 B02/B05 `WRITTEN/ANCHOR_TAG` records below **already** belong to the 238, and must not be added again.

The precise authoritative snapshots consulted were:

- Grade 10 ChVIII D3 canonical JS `docs/assets/javascripts/thpt-chviii-reviewed-formative-v1.js`; Git blob `2ae62fada28913ec336b3507684408a1e05a3232`; 8 G10 B24 records, all `item_id` unique.
- Grade 12 ChI source-locked public JSON `docs/assets/data/thpt-g12-chi-b01-b05-public-r00.json`; Git blob `4286fa7ea291ecd9c3f0504156ccb80d6e1baa9a`, source reviewed blob `f0862dcdab21dec136e43969f45c42638e7c7574`; 27 records B02 and B05 (4 are the already-counted D4 Written/Anchor).
- Grade 11 ChVI source-locked D3 JS `docs/assets/javascripts/thpt-g11-chvi-b18-b21-source-locked-formative-r01.js`; Git blob `33cf4229baa63ac70b4ca1b640a5be8414ed54c1`, source reviewed blob `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872`; 24 records in B18+B21.
- Grade 10 ChVIII pedagogical locked source `prototypes/thpt/content-drafts/Temp_G10_SGK_CHVIII_FULL_R02_SOURCE_WITH_CANONICAL_REFERENCES_20261105.md`, Git blob `d4c839ef7fdcb324220de59e54e33ee37684cbcb`: B24 permutation/adjacency first try and D6 explicitly present.

## A. G10 B24 — 8 genuine reviewed D3 Core/Practice records

| Canonical item ID | Role in source | Skill tag from source | Difficulty from source | Existing exercise demand (paraphrase) |
|---|---|---|---|---|
| `THPT-G10-B24-C01` | `CORE` | `PERMUTATION` | `BASE` | Hoán vị toàn bộ phần tử |
| `THPT-G10-B24-C02` | `CORE` | `ARRANGEMENT` | `BASE` | Chỉnh hợp theo vai trò phân biệt |
| `THPT-G10-B24-P01` | `PRACTICE` | `COMBINATION` | `BASE` | Chọn nhóm không xét thứ tự |
| `THPT-G10-B24-P02` | `PRACTICE` | `ARRANGEMENT_WITH_ROLES` | `BASE` | Phân vai hai chức danh |
| `THPT-G10-B24-P03` | `PRACTICE` | `PERMUTATION_LETTERS` | `BASE` | Xếp bốn phần tử khác nhau |
| `THPT-G10-B24-P04` | `APPLICATION` | `COMBINATION_TWO_GROUPS` | `BASE` | Chọn đúng số người từ hai nhóm |
| `THPT-G10-B24-P05` | `PRACTICE` | `COMBINATION_AT_LEAST_ONE` | `ADVANCED` | Ít nhất một trong hai người chỉ định; phương pháp phần bù |
| `THPT-G10-B24-P06` | `PRACTICE` | `PERMUTATION_ADJACENT` | `ADVANCED` | Hai người phải liền nhau; gộp khối rồi nhân thứ tự nội bộ |

**Finding:** `THPT-G10-B24-P05` uses total-minus-complement and `THPT-G10-B24-P06` independently practices an adjacent-pair block; both explicitly source-labeled `ADVANCED`. The actual approved B24 conceptual first-try also uses a block. **No claim of "permutation not taught" is acceptable.**

**Boundary:** `HN-CL-2026-MOCK:III.C6` asks to combine *fixed relative order, at-least-one gap, at-most-one different gap and probability*. G10 B24 D3 P05/P06 rehearse **submethods** but *not that same compound 8-seat scenario*. This is `COMPOUND_TRANSFER_NOT_PROVEN_BY_THESE_8`, **not** `MISSING_FORMATIVE` or `COVERAGE_GAP`. Check G10 B23 D3, G10 ChIX D3, year-end integrative material and other ordinary-school semester papers before deciding.

## B. G12 B02+B05 — 27 records (including 4 already-counted D4 Written)

| Canonical item ID | Source role | Outcome ID | Method-placement reading only |
|---|---|---|---|
| `THPT-G12-CHI-B02-C01` | `SGK_CORE` | `G12-B02-EXTREMA_GLOBAL_MEANING` | Đã có bài thao tác nguồn; chưa gắn trọn dạng đề thi |
| `THPT-G12-CHI-B02-C02` | `SGK_CORE` | `G12-B02-CLOSED_INTERVAL_EXISTENCE` | Đã có bài thao tác nguồn; chưa gắn trọn dạng đề thi |
| `THPT-G12-CHI-B02-C03` | `SGK_CORE` | `G12-B02-CRITICAL_END_POINTS` | Đã có bài thao tác nguồn; chưa gắn trọn dạng đề thi |
| `THPT-G12-CHI-B02-C04` | `SGK_CORE` | `G12-B02-OPEN_DOMAIN_NONATTAINMENT` | Đã có bài thao tác nguồn; chưa gắn trọn dạng đề thi |
| `THPT-G12-CHI-B02-P01` | `SGK_PRACTICE` | `G12-B02-CRITICAL_END_POINTS` | Đã có bài thao tác nguồn; chưa gắn trọn dạng đề thi |
| `THPT-G12-CHI-B02-P02` | `SGK_PRACTICE` | `G12-B02-OPEN_DOMAIN_NONATTAINMENT` | Đã có bài thao tác nguồn; chưa gắn trọn dạng đề thi |
| `THPT-G12-CHI-B02-P03` | `SGK_PRACTICE` | `G12-B02-CONSTRAINED_DOMAIN` | Đã có bài thao tác nguồn; chưa gắn trọn dạng đề thi |
| `THPT-G12-CHI-B02-P04` | `SGK_PRACTICE` | `G12-B02-EXTREMA_GLOBAL_MEANING` | Đã có bài thao tác nguồn; chưa gắn trọn dạng đề thi |
| `THPT-G12-CHI-B02-P05` | `SGK_PRACTICE` | `G12-B02-CLOSED_INTERVAL_EXISTENCE` | Đã có bài thao tác nguồn; chưa gắn trọn dạng đề thi |
| `THPT-G12-CHI-B02-A01` | `SGK_APPLICATION` | `G12-B02-OPTIMIZATION_MODEL` | Ứng viên kỹ năng mô hình thực tế / miền / lợi nhuận |
| `THPT-G12-CHI-B02-W01` | `WRITTEN` | `G12-B02-CRITICAL_END_POINTS` | Đã có bài thao tác nguồn; chưa gắn trọn dạng đề thi |
| `THPT-G12-CHI-B02-W02` | `ANCHOR_TAG` | `G12-B02-OPTIMIZATION_MODEL` | Đã có bài thao tác nguồn; chưa gắn trọn dạng đề thi |
| `THPT-G12-CHI-B05-C01` | `SGK_CORE` | `G12-B05-RATE_INTERPRETATION` | Đã có bài thao tác nguồn; chưa gắn trọn dạng đề thi |
| `THPT-G12-CHI-B05-C02` | `SGK_CORE` | `G12-B05-MOTION_SPEED_ACCELERATION` | Đã có bài thao tác nguồn; chưa gắn trọn dạng đề thi |
| `THPT-G12-CHI-B05-C03` | `SGK_CORE` | `G12-B05-MARGINAL_COST` | Đã có bài thao tác nguồn; chưa gắn trọn dạng đề thi |
| `THPT-G12-CHI-B05-C04` | `SGK_CORE` | `G12-B05-MODEL_VARIABLE_DOMAIN` | Đã có bài thao tác nguồn; chưa gắn trọn dạng đề thi |
| `THPT-G12-CHI-B05-P01` | `SGK_PRACTICE` | `G12-B05-RATE_INTERPRETATION` | Đã có bài thao tác nguồn; chưa gắn trọn dạng đề thi |
| `THPT-G12-CHI-B05-P02` | `SGK_PRACTICE` | `G12-B05-MOTION_SPEED_ACCELERATION` | Đã có bài thao tác nguồn; chưa gắn trọn dạng đề thi |
| `THPT-G12-CHI-B05-P03` | `SGK_PRACTICE` | `G12-B05-MARGINAL_COST` | Đã có bài thao tác nguồn; chưa gắn trọn dạng đề thi |
| `THPT-G12-CHI-B05-P04` | `SGK_PRACTICE` | `G12-B05-OPTIMIZATION_DERIVATIVE` | Đã có bài thao tác nguồn; chưa gắn trọn dạng đề thi |
| `THPT-G12-CHI-B05-P05` | `SGK_PRACTICE` | `G12-B05-BOUNDARY_FEASIBILITY` | Đã có bài thao tác nguồn; chưa gắn trọn dạng đề thi |
| `THPT-G12-CHI-B05-P06` | `SGK_PRACTICE` | `G12-B05-UNIT_ASSUMPTION_CHECK` | Đã có bài thao tác nguồn; chưa gắn trọn dạng đề thi |
| `THPT-G12-CHI-B05-A01` | `SGK_APPLICATION` | `G12-B05-OPTIMIZATION_DERIVATIVE` | Đã có bài thao tác nguồn; chưa gắn trọn dạng đề thi |
| `THPT-G12-CHI-B05-A02` | `SGK_APPLICATION` | `G12-B05-MODEL_VARIABLE_DOMAIN` | Ứng viên kỹ năng mô hình thực tế / miền / lợi nhuận |
| `THPT-G12-CHI-B05-A03` | `SGK_APPLICATION` | `G12-B05-UNIT_ASSUMPTION_CHECK` | Ứng viên kỹ năng mô hình thực tế / miền / lợi nhuận |
| `THPT-G12-CHI-B05-W01` | `WRITTEN` | `G12-B05-BOUNDARY_FEASIBILITY` | Ứng viên kỹ năng mô hình thực tế / miền / lợi nhuận |
| `THPT-G12-CHI-B05-W02` | `ANCHOR_TAG` | `G12-B05-MARGINAL_COST` | Ứng viên kỹ năng mô hình thực tế / miền / lợi nhuận |

**B02 method presence** (12 items including 2 D4): on closed vs open domains, whether extremum/infimum is attained, boundary checks, optimization of area with geometric variables, and explanation of non-attained minimum. Its Written anchor requires an honest open-boundary argument.

**B05 method presence** (15 items including 2 D4): derivative in physical units, marginal vs discrete cost `C(q+1)-C(q)`, revenue/profit modeling, feasibility constraints for price/demand, optimizing a real profit parabola over bounded quantities, a box-design volume maximum and why a critical-point solution outside the domain must be rejected.

**Exam contrast:** `HN-NGT-2026-MOCK:III.C5` includes **price-demand, a cost break when production exceeds 100 units, integer quantity, factory capacity and positive-profit tax**. This **compound piecewise-integer optimization** is not exhibited *as one problem* in these 27 B02/B05 records. There **are** existing components. Do not misreport an absence of real-world optimization; do not declare a gap before B01/B03/B04 and G10 linear optimization D3, plus Topic source boundaries, are examined.

## C. G11 ChVI B18+B21 — 24 real reviewed D3 records

| Canonical item ID | Source role | Source skill tag | Difficulty tag | Interpretation |
|---|---|---|---|---|
| `THPT-G11-CHVI-B18-C01` | `CORE` | `G11-B18-POWER_INTEGER` | `CORE_APPLY` | Nguồn đã luyện kỹ năng nền; chưa suy sang toàn bộ mô hình đề thi |
| `THPT-G11-CHVI-B18-C02` | `CORE` | `G11-B18-POWER_RATIONAL` | `CORE_APPLY` | Nguồn đã luyện kỹ năng nền; chưa suy sang toàn bộ mô hình đề thi |
| `THPT-G11-CHVI-B18-C03` | `CORE` | `G11-B18-POWER_INTEGER` | `CORE_APPLY` | Nguồn đã luyện kỹ năng nền; chưa suy sang toàn bộ mô hình đề thi |
| `THPT-G11-CHVI-B18-C04` | `CORE` | `G11-B18-POWER_REAL` | `CORE_APPLY` | Nguồn đã luyện kỹ năng nền; chưa suy sang toàn bộ mô hình đề thi |
| `THPT-G11-CHVI-B18-C05` | `CORE` | `G11-B18-POWER_RATIONAL` | `CORE_APPLY` | Nguồn đã luyện kỹ năng nền; chưa suy sang toàn bộ mô hình đề thi |
| `THPT-G11-CHVI-B18-P01` | `PRACTICE` | `G11-B18-POWER_LAWS` | `PRACTICE_APPLY` | Nguồn đã luyện kỹ năng nền; chưa suy sang toàn bộ mô hình đề thi |
| `THPT-G11-CHVI-B18-P02` | `PRACTICE` | `G11-B18-POWER_RATIONAL` | `PRACTICE_APPLY` | Nguồn đã luyện kỹ năng nền; chưa suy sang toàn bộ mô hình đề thi |
| `THPT-G11-CHVI-B18-P03` | `PRACTICE` | `G11-B18-POWER_RATIONAL` | `PRACTICE_APPLY` | Nguồn đã luyện kỹ năng nền; chưa suy sang toàn bộ mô hình đề thi |
| `THPT-G11-CHVI-B18-P04` | `PRACTICE` | `G11-B18-POWER_LAWS` | `PRACTICE_APPLY` | Nguồn đã luyện kỹ năng nền; chưa suy sang toàn bộ mô hình đề thi |
| `THPT-G11-CHVI-B18-P05` | `APPLICATION` | `G11-B18-GROWTH_MODEL` | `APPLICATION` | Mô hình tăng trưởng/lãi kép theo năm |
| `THPT-G11-CHVI-B18-P06` | `PRACTICE` | `G11-B18-POWER_LAWS` | `PRACTICE_APPLY` | Nguồn đã luyện kỹ năng nền; chưa suy sang toàn bộ mô hình đề thi |
| `THPT-G11-CHVI-B18-P07` | `PRACTICE` | `G11-B18-POWER_INTEGER` | `PRACTICE_APPLY` | Nguồn đã luyện kỹ năng nền; chưa suy sang toàn bộ mô hình đề thi |
| `THPT-G11-CHVI-B21-C01` | `CORE` | `G11-B21-EXP_EQUATION` | `CORE_APPLY` | Nguồn đã luyện kỹ năng nền; chưa suy sang toàn bộ mô hình đề thi |
| `THPT-G11-CHVI-B21-C02` | `CORE` | `G11-B21-LOG_EQUATION` | `CORE_APPLY` | Nguồn đã luyện kỹ năng nền; chưa suy sang toàn bộ mô hình đề thi |
| `THPT-G11-CHVI-B21-C03` | `CORE` | `G11-B21-EXP_INEQUALITY` | `CORE_APPLY` | Nguồn đã luyện kỹ năng nền; chưa suy sang toàn bộ mô hình đề thi |
| `THPT-G11-CHVI-B21-C04` | `CORE` | `G11-B21-LOG_INEQUALITY` | `CORE_APPLY` | Nguồn đã luyện kỹ năng nền; chưa suy sang toàn bộ mô hình đề thi |
| `THPT-G11-CHVI-B21-P01` | `PRACTICE` | `G11-B21-EXP_EQUATION` | `PRACTICE_APPLY` | Nguồn đã luyện kỹ năng nền; chưa suy sang toàn bộ mô hình đề thi |
| `THPT-G11-CHVI-B21-P02` | `PRACTICE` | `G11-B21-LOG_EQUATION` | `PRACTICE_APPLY` | Nguồn đã luyện kỹ năng nền; chưa suy sang toàn bộ mô hình đề thi |
| `THPT-G11-CHVI-B21-P03` | `PRACTICE` | `G11-B21-EXP_INEQUALITY` | `PRACTICE_APPLY` | Nguồn đã luyện kỹ năng nền; chưa suy sang toàn bộ mô hình đề thi |
| `THPT-G11-CHVI-B21-P04` | `PRACTICE` | `G11-B21-LOG_INEQUALITY` | `PRACTICE_APPLY` | Nguồn đã luyện kỹ năng nền; chưa suy sang toàn bộ mô hình đề thi |
| `THPT-G11-CHVI-B21-P05` | `PRACTICE` | `G11-B21-DOMAIN_CHECK` | `PRACTICE_APPLY` | Nguồn đã luyện kỹ năng nền; chưa suy sang toàn bộ mô hình đề thi |
| `THPT-G11-CHVI-B21-P06` | `APPLICATION` | `G11-B21-REAL_CONTEXT` | `APPLICATION` | Ngưỡng vượt mức với năm nguyên, điều kiện chặt |
| `THPT-G11-CHVI-B21-P07` | `PRACTICE` | `G11-B21-EXP_EQUATION` | `PRACTICE_APPLY` | Nguồn đã luyện kỹ năng nền; chưa suy sang toàn bộ mô hình đề thi |
| `THPT-G11-CHVI-B21-P08` | `PRACTICE` | `G11-CHVI-INTEGRATED` | `PRACTICE_APPLY` | Nguồn đã luyện kỹ năng nền; chưa suy sang toàn bộ mô hình đề thi |

**Finding:** `THPT-G11-CHVI-B18-P05` rehearses annual compound growth; `THPT-G11-CHVI-B21-P06` solves a **strict threshold for discrete integer years**, with method and inequality-domain awareness. `B21` also covers domain checking and `a<1` inequality direction. Existing ChII `THPT-G11-CHII-W06-02-ANCHOR` covers arithmetic series in a context.

**Exam contrast 1**: `HN-DOE-2026-MOCK:III.C3` asks for **continuous** decay with a parameter fitted from observations, then a target time/threshold; B21-P06's discrete integer-growth transfer is **not identical**, though logarithmic inversion is a shared prerequisite. Before recommending a new question, inspect B19/B20 continuous exponential lesson/application, and cross-check ordinary HKII/grad sources.

**Exam contrast 2**: `HN-DOE-2026-MOCK:III.C4` models a decreasing loan balance when equal principal is repaid monthly; `B18-P05` is annual compounding of *growing savings* and `B21-P06` is an integer-year threshold. Do not equate these with amortization. ChII arithmetic sum is a useful partial skill; complete loan-finance outcomes may also live in the **already-planned G12 KNTT Topic 3** but the SGK path must remain independently complete per its own prescribed outcomes.

## D. Conclusions permitted vs prohibited

| Method family | Permitted source-grounded observation | Unresolved evidence | Audit flag |
|---|---|---|---|
| Permutation, combination, block, complement | Multiple actual D3 exercises and pre-Core guidance **exist** | Compound ordered gaps and probability across several skills | `FOUNDATION_PRESENT_COMPOSITE_PENDING` |
| Real-world derivative optimization and marginal cost | D3+A+D4 covers modeling, boundary, feasibility, unit interpretation and derivative/discrete cost | Multi-branch integer price/quantity + tax scenario | `FOUNDATION_PRESENT_PIECEWISE_TRANSFER_PENDING` |
| Exponential growth/log thresholds | Existing discrete year growth and strict threshold skills are present | Continuous rate fitting, units, loan repayment sequence | `FOUNDATION_PRESENT_CONTINUOUS_FINANCE_PENDING` |

**Crucial**: these are *method inventories*, **not formal Academic PASS/FULL COVERAGE judgments** and do not change any item/rubric. All `GAP` statuses remain `UNDETERMINED` until the actual ordinary-school HKI/HKII corpus, full relevant lesson D1–D4 and representative exam question-level source provenance are checked.

## E. Corpus source preference and next gate

Independent public indexing also identified 2025–2026 ordinary Hanoi school **G11 HKII** papers of THPT Trần Nhân Tông and THPT Việt Nam–Ba Lan (see `EXAM_SOURCE_REGISTER.md`). Only the secondary web transcription/snippets have been observed; **original school-issuer PDF and full page visuals are still missing**, so these are **candidates**, not confirmed exam-question-to-item coverage verdicts. Do not confuse a school review *outline* with an administered exam.

**Next:** verify official school-hosted HKII/HKI PDF + numbered questions, choose 2–3 regular schools and different years, map each question to full outcome methods. Then draft a `COVERAGE_GAP` recommendation *only* for multi-step types absent from D1–D4 and repeated/relevant in normal school assessment. The owner decides any new questions; any new content receives targeted DELTA_C independent NotebookLM review; previous 238 are never re-reviewed merely because of new taxonomy.
