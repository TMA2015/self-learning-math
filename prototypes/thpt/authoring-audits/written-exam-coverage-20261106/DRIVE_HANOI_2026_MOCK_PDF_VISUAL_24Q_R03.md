# R03 — Hà Nội, thi thử tốt nghiệp 2026: 24 question loci, PDF visually verified (AUTHORING audit)

AUDIT_ID: SLM-SGK-WRITTEN-EXAM-COVERAGE-20261106
PACKET_ID: SLM-SGK-HN-GRADMOCK-2026-R03
SCOPE: AUTHORING_READ_ONLY_EVIDENCE
BASELINE_WRITTEN: G10=31;G11=83;G12=124;TOTAL=238
SOURCE_CLASS: ORDINARY_HANOI_GRADUATION_MOCKS_NOT_MOET_OFFICIAL_EXAMS
PDF_FILE_COUNT: 4
PDF_BLOB_HASH: SHA256_ORIGINAL_RETRIEVED_BYTES
QUESTION_LOCATORS: 24
QUESTION_PAGE_VISUAL_CHECK: PASS_FOR_24_LOCATORS
EXAM_ISSUER_ORIGINAL_PUBLISHING_VERIFIED: NO
FORMAL_OUTCOME_COVERAGE_VERDICTS: 0
NEW_ITEMS: 0
ACADEMIC_RE_REVIEW: NO
TOPIC_PASS: NO
RELEASE_AUTHORIZATION: NO

**Provenance:** four PDFs were downloaded by the *owner-connected private Google Drive* read-only connector, then opened locally, hashed and visually inspected. This proves the integrity/contents of the retrieved copies, **not** school-origin authenticity. They are third-party archived graduation **mock** papers; official school/Sở source-host verification remains pending. **Do not commit private Google Drive file IDs/links, mirrored exam PDFs, full exam stems/answers or screenshots to the public repository.** Only author-created classifications and SHA/page locators are included here. Exam questions are not automatically Written items: they are multiple-choice, True/False or short-answer formats, used only to infer method/depth demands.

## Source custody: SHA-256 against locally opened PDF bytes

| EXAM_SOURCE_ID | Exam | PDF pages | Short-answer loci | SHA-256 of supplied PDF copy | Provenance gate |
|---|---|---:|---|---|---|
| `HN-DOE-2026-MOCK-L1` | Sở GD&ĐT Hà Nội, đề thử tốt nghiệp lần 1 2026 | 18 | Part III C1–C6, PDF 4–5 | `1e7fde330bbd5e3dca6a61a6be3088752c73b7c2ae9f7e74eea328fdf82dfc40` | `MIRROR_ONLY_SCHOOL_ORIGINAL_UNCONFIRMED` |
| `HN-NGT-2026-MOCK` | THPT Nguyễn Gia Thiều, đề thử tốt nghiệp 2026 | 19 | Part III C1–C6, PDF 4–5 | `aafb8d8931ed4fce3ffe22aa107846634e63e80cdeb498044d063cf78a7a6085` | `MIRROR_ONLY_SCHOOL_ORIGINAL_UNCONFIRMED` |
| `HN-CL-2026-MOCK` | THPT Cổ Loa, đề thử tốt nghiệp 2026 | 15 | Part III C1–C6, PDF 3–4 | `a73fd8323e351f29d18d49ff1a04d0f8edf67fe974dd3f5353b85f14ae39084f` | `MIRROR_ONLY_SCHOOL_ORIGINAL_UNCONFIRMED` |
| `HN-TL-2026-MOCK` | Cụm THPT Bắc–Nam Từ Liêm, đề thử tốt nghiệp 2026 | 14 | Part III C1–C6, PDF 4 (header cuối 3) | `639e3346d193487c62bea13b3d3caa56bb4bd4293f24a16153a603ee740a7648` | `MIRROR_ONLY_SCHOOL_ORIGINAL_UNCONFIRMED` |

All six Part III question numbers were checked against the rendered **question pages**, not solution-key duplicates. These are **24 distinct question positions**, not a claim of 24 independent officially published sources or 24 Written questions.

## Twenty-four exam problem-type references (all 24 visually checked)

Legend: the `candidate canonical item` field is a **method/partial-skill pointer**, not question equivalence, not Topic placement and not an answer/rubric review. `—` = investigation pending, **not** proven coverage gap. `Complexity observation` labels what the question visibly requires, not a prescribed difficulty standard.

| Exam source: Part III question | PDF page | Task-type paraphrase (not full exam text) | Proposed `problem_type_id` | Required method/transfer | Complexity observation | Canonical D4 pointer (candidate only) | Audit status |
|---|---:|---|---|---|---|---|---|
| `HN-DOE-2026-MOCK-L1:III.C1` | 4 | Hình vuông–cung tròn; tối ưu diện tích tam giác theo tiếp tuyến | `CONIC_TANGENT_GEOM_OPT` | hình học → biến tham số → hàm diện tích → cực trị | `MULTISTEP_VISUAL` | `THPT-G12-CHI-B02-W02` | `SUBSKILL_OPTIMIZATION_ONLY` |
| `HN-DOE-2026-MOCK-L1:III.C2` | 4 | Đếm cách tô bảng 4×4, mỗi hàng/cột đúng hai ô mỗi loại | `GRID_ROW_COLUMN_COMBINATORICS` | ràng buộc đồng thời hai chiều; tránh đếm trùng | `MULTICONSTRAINT` | `THPT-G10-CHVIII-W24-ANCHOR-01` | `SUBSKILL_CONSTRAINED_COUNT_ONLY` |
| `HN-DOE-2026-MOCK-L1:III.C3` | 4 | Mô hình suy giảm nồng độ thuốc và giới hạn thời gian tiêm | `EXP_DECAY_THRESHOLD` | hiệu chỉnh hàm mũ → giải ngưỡng log → diễn giải thời gian | `MODEL_PARAMETER_BOUNDARY` | `THPT-G11-CHVI-B21-W02-ANCHOR` | `SUBSKILL_THRESHOLD_ONLY_DISCRETE_VS_CONTINUOUS` |
| `HN-DOE-2026-MOCK-L1:III.C4` | 4 | Vay trả góp; tổng lãi theo dư nợ giảm hằng tháng | `DECLINING_BALANCE_FINANCE` | lãi dư nợ từng kỳ → chuỗi giảm đều → tổng | `MULTISTEP_CONTEXT` | `THPT-G11-CHII-W06-02-ANCHOR` | `ARITHMETIC_SERIES_METHOD_ONLY` |
| `HN-DOE-2026-MOCK-L1:III.C5` | 5 | Diện tích vùng tạo bởi hai parabol từ đồ thị có ô lưới | `PARABOLA_AREA_GRAPH_RECONSTRUCTION` | đọc tọa độ/hình → dựng phương trình → giao → tích phân hiệu | `VISUAL_MULTI_METHOD` | `THPT-G12-B13-W03` | `AREA_BETWEEN_GRAPHS_SUBSKILL_ONLY` |
| `HN-DOE-2026-MOCK-L1:III.C6` | 5 | Góc phẳng nhị diện trong hình chóp có cạnh vuông góc đáy | `DIHEDRAL_PYRAMID_ANGLE` | dựng góc trong mặt cắt/quan hệ vuông góc | `SPATIAL_DIAGRAM` | `THPT-G12-B16-W03` | `ANGLE_OF_PLANES_SUBSKILL_ONLY` |
| `HN-NGT-2026-MOCK:III.C1` | 4 | Cực tiểu của đa thức bậc bốn | `POLYNOMIAL_EXTREMA` | đạo hàm → điểm tới hạn → phân loại cực trị | `STANDARD_EXTREMA` | `THPT-G12-CHI-B01-W01` | `METHOD_FAMILY_CANDIDATE` |
| `HN-NGT-2026-MOCK:III.C2` | 4 | Tích vô hướng hai vectơ trong hình lập phương | `SPACE_VECTOR_DOT` | chọn gốc/tọa độ hoặc phân tích vectơ → dot | `SPATIAL_TRANSFER` | `THPT-G12-B08-W04` | `METHOD_FAMILY_CANDIDATE` |
| `HN-NGT-2026-MOCK:III.C3` | 4 | Flycam bay theo đoạn tới biên vùng cấm hình cầu | `SPACE_LINE_SPHERE_STOP_DISTANCE` | vectơ/quãng đường đoạn → mặt cầu/chạm biên | `MULTI_OUTCOME_MODEL` | `THPT-G12-B15-W02` | `LINE_SEGMENT_SUBSKILL_ONLY` |
| `HN-NGT-2026-MOCK:III.C4` | 4 | Tối thiểu thể tích tứ diện tạo từ mặt phẳng cắt ba trục | `THREE_AXIS_INTERCEPT_MIN_VOLUME` | mô hình hình học 3D → tối ưu tích | `MULTISTEP_MODEL` | — | `CANONICAL_ITEM_MATCH_PENDING` |
| `HN-NGT-2026-MOCK:III.C5` | 4–5 | Tối đa lợi nhuận drone với giá theo cầu, chi phí theo ngưỡng, thuế | `PIECEWISE_DISCRETE_PROFIT_OPT` | lập hàm từng miền → tối ưu → so ranh giới, số nguyên và thuế | `PIECEWISE_DISCRETE` | `THPT-G12-CHI-B02-W02`; `THPT-G12-CHI-B05-W02` | `OPTIMIZATION_AND_COST_SUBSKILLS_ONLY` |
| `HN-NGT-2026-MOCK:III.C6` | 5 | Xác suất phân bố đèn trên trung điểm ba cạnh với quy tắc trung bình | `AP_PATTERN_CONSTRAINED_ARRANGEMENT` | xác định bộ số cấp số cộng → gán vị trí → đếm có điều kiện | `MULTI_OUTCOME_CONSTRAINT` | `THPT-G10-CHVIII-W24-ANCHOR-01` | `ONLY_CONSTRAINT_SELECTION_SUBSKILL` |
| `HN-CL-2026-MOCK:III.C1` | 3 | Quy hoạch sản xuất hai loại thuyền với lao động, số lượng và lợi nhuận | `TWO_VARIABLE_LINEAR_PROGRAM` | mô hình 2 biến → miền khả thi → xét đỉnh và tính nguyên | `MANY_CONSTRAINTS` | `THPT-G10-CHII-W04-ANCHOR` | `LINEAR_PROGRAM_METHOD_FAMILY` |
| `HN-CL-2026-MOCK:III.C2` | 3 | Tô bốn ô quanh tâm bằng năm màu, hai ô kề khác màu | `ADJACENCY_COLORING_COUNT` | mô hình chu trình 4 đỉnh → đếm tô hợp lệ | `CONSTRAINT_COUNTING` | — | `CANONICAL_ITEM_MATCH_PENDING` |
| `HN-CL-2026-MOCK:III.C3` | 4 | Lắp đèn: quỹ tích H từ điều kiện vuông góc và khoảng cách nhỏ nhất tới tường | `SPACE_LOCUS_POINT_PLANE_MIN` | điều kiện vuông góc → quỹ tích → cực tiểu khoảng cách đến mặt phẳng | `COMPOSITE_3D_MODEL` | — | `CANONICAL_ITEM_MATCH_PENDING` |
| `HN-CL-2026-MOCK:III.C4` | 4 | Khoảng cách hai đường thẳng AB và SO trong hình chóp | `SKEW_LINE_DISTANCE` | xác định vị trí hai đường → chọn tọa độ/pháp tuyến phù hợp | `SPATIAL_TECHNIQUE` | — | `CANONICAL_ITEM_MATCH_PENDING` |
| `HN-CL-2026-MOCK:III.C5` | 4 | Tối ưu giá bán điện thoại từ độ co giãn lượng mua và chi phí | `PRICE_DEMAND_PROFIT_OPT` | mô hình lượng cầu theo giá → lợi nhuận → cực trị → ràng buộc | `ECONOMIC_MODEL` | `THPT-G12-CHI-B02-W02`; `THPT-G12-CHI-B05-W02` | `OPTIMIZATION_AND_COST_SUBSKILLS_ONLY` |
| `HN-CL-2026-MOCK:III.C6` | 4 | Xác suất xếp chỗ theo thứ tự ba bạn và giới hạn số nữ giữa từng cặp | `ORDERED_SEATING_GAP_CONSTRAINT` | xếp thứ tự ràng buộc → phân hoạch vị trí → đếm xác suất | `MULTICONSTRAINT_ORDER` | `THPT-G10-CHVIII-W24-ANCHOR-01` | `ORDERED_PERMUTATION_NOT_IN_THIS_WRITTEN_ITEM` |
| `HN-TL-2026-MOCK:III.C1` | 4 | Tiệm cận xiên hàm phân thức | `OBLIQUE_ASYMPTOTE_DIVISION` | chia đa thức → đọc hệ số tiệm cận | `STANDARD_ASYMPTOTE` | `THPT-G12-CHI-B03-W02` | `METHOD_FAMILY_CANDIDATE` |
| `HN-TL-2026-MOCK:III.C2` | 4 | Giảm giá bưởi: lượng bán tăng, tối ưu lãi | `PRICE_RESPONSE_QUADRATIC_PROFIT` | lập doanh thu−chi phí theo mức giảm → cực trị | `ECONOMIC_MODEL` | `THPT-G12-CHI-B02-W02` | `OPTIMIZATION_SUBSKILL_ONLY` |
| `HN-TL-2026-MOCK:III.C3` | 4 | Tối đa lợi nhuận quảng cáo theo hàm bậc ba trên miền không âm | `CUBIC_PROFIT_NONNEG_DOMAIN` | đạo hàm → kiểm các điểm tới hạn/miền → giá trị tối ưu | `MODEL_DOMAIN` | `THPT-G12-CHI-B02-W02` | `OPTIMIZATION_SUBSKILL_ONLY` |
| `HN-TL-2026-MOCK:III.C4` | 4 | Nghiệm dương nhỏ nhất của phương trình lượng giác dịch pha | `TRIG_SMALLEST_POSITIVE_ROOT` | giải họ nghiệm → lọc điều kiện nghiệm dương nhỏ nhất | `INTERVAL_RESTRICTION` | `THPT-G11-CHI-W04-ANCHOR` | `TRIG_METHOD_FAMILY_CANDIDATE` |
| `HN-TL-2026-MOCK:III.C5` | 4 | Hình bình hành không gian và độ dài đường chéo | `SPACE_VECTOR_PARALLELOGRAM_NORM` | quan hệ vectơ hình bình hành → tọa độ → chuẩn | `SPATIAL_TRANSFER` | `THPT-G12-B08-W05` | `VECTOR_NORM_SUBSKILL_ONLY` |
| `HN-TL-2026-MOCK:III.C6` | 4 | Khoảng cách điểm–mặt phẳng của hình chóp tứ giác đều | `POINT_PLANE_DISTANCE` | dựng tọa độ/mặt phẳng → khoảng cách | `SPATIAL_COMPOSITE` | — | `CANONICAL_ITEM_MATCH_PENDING` |

## Reviewer boundary and next action

- `PDF_CONTENT_AND_VISUAL_VERIFIED=YES` for the **24 question locations and their relevant figures/formulas** within those four local copies; `SCHOOL_ISSUER_ORIGINAL_VERIFIED=NO`. Do not merge these distinct states.
- `COVERAGE_PASS=NO`; **all canonical D4 source/solution/rubric and independent NotebookLM Academic/PED PASS snapshots remain frozen**. Existing items may cover background skills without covering compound exam transfer.
- The four papers are **all G12 graduation mock formats**; they do **not** establish G10/G11 ordinary semester-exam coverage. A G10 or G11 item linked as a prerequisite is an across-grade **foundation** pointer only, never evidence it appears in that grade's school exams.
- Potential high-complexity **research candidates**, not proven D4 gaps: simultaneous row/column constrained grid counting, constrained seating permutations, piecewise/discrete profit optimum, spatial locus/minimum distance, multi-subject financial amortization. Compare every candidate with SGK D3, examples and other schools, **not only with one Written card**, before asserting absence.
- Avoid equating different methods just because both use optimization, combinatorics or vectors. Require full reasoning-step and conditions comparison, not only chapter/keyword matching. No gap report or new items proposed on this packet.
