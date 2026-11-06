# Exam excerpt → skill/outcome → canonical Written: R01 candidates (NOT COVERAGE VERDICT)

AUDIT_ID: SLM-SGK-WRITTEN-EXAM-COVERAGE-20261106
PACKET_ID: SLM-SGK-WRITTEN-HANOI-EXCERPT-CANDIDATES-R01-20261106
STATE: EXCERPT_MAPPED_PDF_QUESTION_VERIFICATION_PENDING
CANONICAL_LIBRARY: G10_31_PLUS_G11_83_PLUS_G12_124
EXAM_PDF_VERIFIED: 0
EXAM_QUESTION_ID_VERIFIED: 0
COVERED_VERDICTS: 0
COVERAGE_GAP_VERDICTS: 0
ACADEMIC_PED_REVIEW_REOPEN: NO
ITEM_CONTENT_CHANGES: NO
TOPIC_PLACEMENT_PASS: NO
RELEASE_AUTHORIZATION: NO

## Evidence status and prohibited inferences

- **`SECONDARY_WEB_EXCERPT`**: an HTML excerpt presented as originating in a named Hanoi school exam, verifiable on that secondary website by URL and publication date. **Not** confirmed against official school question PDF, its page, exam question number, rubric or diagram. Thus the local suffix `WEB-EX##` is **our excerpt identifier, not the official question number**. Do not infer official exam frequencies or weight.
- **`SECONDARY_HTML_TRANSCRIPTION`**: a secondary page presents Part IV numbered Written questions. This identifies the displayed order but the scan PDF/math typesetting is not independently checked; content-based method matches are **candidates**.
- **`PDF_TEXT_ONLY_VISUAL_PENDING`**: an actual PDF URL was indexed and parsed as text; page imagery/screenshot could not be retrieved for visual formula/diagram validation. It may support *format/policy observations*, never a theorem-level mapping based on incomplete math text.
- **`CANDIDATE_METHOD_MATCH`**: source candidate D4 item and exam excerpt clearly share a **method family**, but difficulty, all substeps and matching rubric have **not** been evaluated.
- **`CANDIDATE_PARTIAL_METHOD`**: exercise rehearses part of the apparent reasoning, not verified full scenario. This is not `PARTIAL_COVERAGE` (final coverage verdict).
- **`INVENTORY_OUTCOME_ONLY`**: concept present in canonical outcome list or D3 but **not** verified as a matching D4 Written exercise. Not an actual `COVERAGE_GAP`.

Original canonical academic sources and rubric remain immutable. Anchor is a tag and NOT a new exam item. Only source titles, small paraphrases of task types, link and immutable item/outcome refs appear here.

## Candidate mappings based on real public web excerpts

| EXCERPT_ID (internal, NOT official question number) | Source & short task-type paraphrase | Candidate outcome(s) | Existing canonical D4 item(s) examined | Evidence and provisional scope | Verification still needed |
|---|---|---|---|---|---|
| `HN-VD-2026-HK2-G10-WEB-EX01` | THPT Việt Đức HKII 2025–26: choose a mixed-gender group with a fixed number from each category | `G10-B24-CONSTRAINTS` | `THPT-G10-CHVIII-W24-ANCHOR-01` | `SECONDARY_WEB_EXCERPT / CANDIDATE_METHOD_MATCH`: canonical W24 also picks 2 persons from each of two disjoint groups, then assigns an additional role | Actual PDF/official section/question ID and complete problem conditions |
| `HN-VD-2026-HK2-G10-WEB-EX02` | THPT Việt Đức HKII 2025–26: parabolic reflector focal distance from visual dimensions | `G10-B22-PARABOLA_FOCUS` | `THPT-G10-CHVII-W22-01` (elipse canonical; **not** same conic task) | `SECONDARY_WEB_EXCERPT / INVENTORY_OUTCOME_ONLY`: B22 registered outcome is parabolic focus, but the single Written W22 is specifically an ellipse problem; other D2/D3 not exhaustively scanned | Read original diagram/dimensions; inspect original D3/lesson before considering any Written-only subtype gap |
| `HN-PHT-2026-HK2-G10-WEB-EX01` | THPT Phạm Hồng Thái HKII 2025–26: die tossed twice, probability for a specified total | `G10-B26-EXPERIMENT_SAMPLE_SPACE`, `G10-B27-COUNTING_OUTCOMES` | `THPT-G10-CHIX-W26-01`, `THPT-G10-CHIX-W27-ANCHOR-01` | `SECONDARY_WEB_EXCERPT / CANDIDATE_PARTIAL_METHOD`: canonical W26 builds finite coin/die sample space & event/complement; W27 counts drawing outcomes using combinations, **different experiments** | Original PDF item type, sample-space representation and whether extended cases required |
| `HN-PHT-2026-HK2-G10-WEB-EX02` | THPT Phạm Hồng Thái HKII 2025–26: select an ordered relay group with a designated student in the last position | `G10-B24-CONSTRAINTS` | `THPT-G10-CHVIII-W24-ANCHOR-01` | `SECONDARY_WEB_EXCERPT / CANDIDATE_PARTIAL_METHOD`: W24 uses constrained subset selection and assigns captain; **does not itself demonstrate full ordered permutation with fixed last position** | Inspect D3 B24 variants, actual full exam stem and final substeps before proposing `COVERAGE_GAP` |
| `HN-HDA-2026-HK1-G11-WEB-EX01` | THPT Hoài Đức A HKI 2025–26: daily savings increasing by fixed amount, compute cumulative deposits over an interval | `G11-B06-AP-APPLICATION` | `THPT-G11-CHII-W06-01`, `THPT-G11-CHII-W06-02-ANCHOR` | `SECONDARY_WEB_EXCERPT / CANDIDATE_METHOD_MATCH`: W06-02 applies arithmetic series to theater seating; savings differs in dates/unit conversion but shares sum-of-AP reasoning | Confirm original exam item ID, date counting and full solution conditions |
| `HN-HDA-2026-HK1-G11-WEB-EX02` | THPT Hoài Đức A HKI 2025–26: tide level described by shifted cosine, count times in one day satisfying a value | `G11-B03-MODELING`, `G11-B04-TRANSFORM` | `THPT-G11-CHI-W03`, `THPT-G11-CHI-W04-ANCHOR` | `SECONDARY_WEB_EXCERPT / CANDIDATE_PARTIAL_METHOD`: W03 handles shifted sine period/range/extrema, W04 solves trig equation on interval; combination in a real-world period still needs explicit item comparison | Original PDF; whether restrictions on 24-hour interval introduce a new method family or only composition |
| `HN-NGT-2026-HK1-G11-PIV-C01-WEB` | THPT Nguyễn Gia Thiều HKI 2025–26, article Part IV C1: monthly salary increases by a constant; sum over two-year contract | `G11-B06-AP-APPLICATION` | `THPT-G11-CHII-W06-02-ANCHOR` | `SECONDARY_HTML_TRANSCRIPTION / CANDIDATE_METHOD_MATCH`: same arithmetic-series summation; contexts and time units differ | Validate official PDF, question number and source rubric |
| `HN-NGT-2026-HK1-G11-PIV-C02-WEB` | THPT Nguyễn Gia Thiều HKI 2025–26, article Part IV C2: two-sided limit at a piecewise function boundary | `G11-B16-LIMIT_AT_POINT` | `THPT-G11-CHV-B16-W01`, `THPT-G11-CHV-B16-W02-ANCHOR` | `SECONDARY_HTML_TRANSCRIPTION / CANDIDATE_PARTIAL_METHOD`: W01 factors removable singularity and checks one-sided limits, W02 conjugate technique; question requires checking both sides of a piecewise definition | Confirm original piecewise formula visually, classify single/two-sided/continuity submethods |
| `HN-NGT-2026-HK1-G11-PIV-C03-WEB` | THPT Nguyễn Gia Thiều HKI 2025–26, article Part IV C3: prove parallel relations in a pyramid and determine an intersection ratio | `G11-B11-PARALLEL_PROOF`, `G11-B12-PARALLEL_TEST`, `G11-B13-PRISM_RATIO` | `THPT-G11-CHIV-B11-W01`, `THPT-G11-CHIV-B12-W01`, `THPT-G11-CHIV-B13-W02-ANCHOR` | `SECONDARY_HTML_TRANSCRIPTION / CANDIDATE_PARTIAL_METHOD`: several known spatial parallel and proportionality outcome families; **not** confirmed same compound proof workflow | Verify full geometric figure, labels, constraints, exact subparts and D4 steps |

### Source URLs, timestamps and custody

- `HN-VD-2026-HK2-G10`: https://toanmath.com/2026/04/de-hoc-ky-2-toan-10-nam-2025-2026-truong-thpt-viet-duc-ha-noi.html ; posted 23/04/2026; mirror text preview only. Canonical B24 [G10 ChVIII D4](https://github.com/TMA2015/self-learning-math/blob/main/docs/thpt-preview/thu-vien/tu-luan-chuong-viii.md) Git blob `e78c43ab7b2f6d3ab1b135d1ad09c7030df2c44e`. Canonical B22 [G10 ChVII D4](https://github.com/TMA2015/self-learning-math/blob/main/docs/thpt-preview/thu-vien/tu-luan-chuong-vii.md) blob `ebc70018a168998c7dd43b34c3e195a2b1e15ed7`; outcome `G10-B22-PARABOLA_FOCUS` from full [V2 author handoff](https://github.com/TMA2015/self-learning-math/pull/764).
- `HN-PHT-2026-HK2-G10`: https://toanmath.com/2026/04/de-cuoi-ky-2-toan-10-nam-2025-2026-truong-thpt-pham-hong-thai-ha-noi.html ; posted 22/04/2026; mirror snippet, not PDF. Canonical [G10 ChIX D4](https://github.com/TMA2015/self-learning-math/blob/main/docs/thpt-preview/thu-vien/tu-luan-chuong-ix.md) blob `fe0c6486eef27392d116c076d848c372c95ec881`.
- `HN-HDA-2026-HK1-G11`: https://toanmath.com/2026/01/de-cuoi-hoc-ky-1-toan-11-nam-2025-2026-truong-thpt-hoai-duc-a-ha-noi.html ; posted 04/01/2026; secondary excerpt. Canonical G11 ChII R03 source blob `2101e2a248e0cf53ee11847b913b937cebcd0806`, G11 ChI source on main `G11_CHI_B01_B04_CONCEPT_FIRST_PED_R03_SOURCE_CANDIDATE_20261102.md`.
- `HN-NGT-2026-HK1-G11`: https://khoahoc.vietjack.com/chi-tiet-de-thi/8175/de-thi-hoc-ki-1-toan-11-nam-2025-2026-truong-thpt-nguyen-gia-thieu-ha ; Part IV question transcriptions C1–C3 on public mirror, source PDF/diagram not checked. Canonical G11 ChV R03 `G11_CHV_B15_B17_S1_PAGINATION_EQUIVALENT_R03_SOURCE_20261102.md`, G11 ChIV R03 `G11_CHIV_B10_B14_S1_PAGINATION_EQUIVALENT_R03_SOURCE_20261102.md`.

## Separate primary-school published **review guide** (NOT a real exam)

`HN-TPHK-2026-HK2-G10-REVIEW`: THPT Trần Phú–Hoàn Kiếm `NỘI DUNG ÔN TẬP CUỐI HỌC KÌ II 2025–2026` publicly indexed as PDF at https://file.giaitoan.edu.vn/file-pdf/on-tap-cuoi-hoc-ki-2-toan-10-nam-2025-2026-truong-thpt-tran-phu-ha-noi.pdf . The accessible text of page 1 explicitly lists coordinates/conics, statistics, probability and says the planned examination contains 12 four-choice MCQ, 2 True/False, 4 short-answer, **6 Written subparts (0.5 pt each)**, 90 min; students write Part IV solutions separately. This is a school **revision/blueprint document**, not the actual school final exam. Its browser PDF screenshot could not be retrieved; `PDF_TEXT_ONLY_VISUAL_PENDING`, formulas later in the file are **not yet trusted** as mapped questions. This is a useful *format reference only* and carries zero coverage verdict.

## Next check required before firm coverage classification

1. Retrieve actual original PDF/scan, confirm school, calendar year, class, official question IDs, geometry diagrams and exact statements/answers; store content hash and PDF page reference.
2. For each verified exam question, map all involved outcome(s), required method steps and complexity, then compare full D4 Written **and** D3/First Try source coverage. Use `COVERED` only with actual matching source item evidence.
3. Compare frequency across **multiple ordinary Hanoi schools** (not specialist schools) and years before recommending new item. No duplicate, removal or new equation/rubric at this stage.
4. Only after mappings support it, propose scoped new Written item(s) to owner with reason, targeted Academic/PED review only for genuinely new content. Topic placements remain separate future metadata, no Topic PASS inference.
