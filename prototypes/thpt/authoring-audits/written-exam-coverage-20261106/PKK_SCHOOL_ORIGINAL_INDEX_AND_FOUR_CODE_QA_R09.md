# R09 — Khóa xuất xứ trường gốc và chống trộn mã đề Toán 12 HKI Phùng Khắc Khoan 2025–26

AUDIT_ID: SLM-SGK-WRITTEN-EXAM-COVERAGE-20261106
PACKET_ID: SLM-SGK-HANOI-PKK-OFFICIAL_SCHOOL_METADATA_CODE_CUSTODY-R09-20261106
SCOPE: AUTHORING_READ_ONLY_SOURCE_PROVENANCE_AND_METHOD_AUDIT
SOURCE_SCOPE: HANOI_ORDINARY_SCHOOL_HKI_2025_2026
ACCEPTED_CANONICAL_WRITTEN_BASELINE: 238
ACADEMIC_PED_REVIEW_REOPENED: NO
CANONICAL_SOURCE_ITEM_ANSWER_RUBRIC_EDITS: 0
OFFICIAL_SCHOOL_PUBLICATION_ANNOUNCEMENT: VERIFIED_INDEXED
OFFICIAL_SCHOOL_ATTACHMENT_BYTES_FETCHED: NO
SECONDARY_PDF_CODE_TEXT_SECTIONS_READ: YES
PDF_PAGE_VISUALS_VERIFIED: NO
PDF_SHA256_CUSTODIED: NO
FORMAL_COVERED_OR_COVERAGE_GAP_VERDICTS: 0
NEW_ITEM_PROPOSALS: 0
RELEASE_AUTHORIZATION: NO

## 1. Primary publisher discovery: a meaningful improvement over R08

School's own public **Thi và tuyển sinh** index:
https://thptphungkhackhoan-thachthat.edu.vn/thi-va-tuyen-sinh/c/21796

The index (web-crawled and search-visible on **06/11/2026**) shows a **23/12/2025** article titled *“Đề và đáp án 3 kỳ thi cuối học kỳ I THPT Phùng khắc khoan - TT”*, described by the school as **“Đề và đáp án 3 kỳ thi cuối học kỳ I Môn Toán THPT Phùng khắc khoan - TT năm học 2025 - 2026”** and marked **“7 tệp”** (seven attachments). This provides **issuer-site announcement metadata**, significantly more authoritative than a mirrored article. The school's detailed page and attachments could **not** be opened by the research browser (HTTP 502 / Cache miss); names, hashes, contents and even exact per-grade composition of the **seven school-hosted files** remain **UNVERIFIED**.

**Evidence separation**:
- `PUBLISHER_INDEX_ANNOUNCEMENT_CONFIRMED=YES`.
- `PUBLISHER_ATTACHMENT_CONTENT_CONFIRMED=NO`.
- The 2025–2026 G10/G12 exam **text** indexed from third-party mirrors is **NOT PROVEN byte-for-byte identical to any school-hosted original**.
- Do not use the index as proof that the archived marking guide is the official signed answer, or count seven files as seven examinations.

## 2. Four exam-code versions explicitly seen inside one secondary-hosted G12 Math PDF

A complete **PDF text index** is readable via https://tailieudethi.com.vn/wp-content/uploads/2025/12/de-cuoi-ky-1-toan-12-nam-2025-2026-truong-thpt-phung-khac-khoan-ha-noi.pdf . The PDF download into container and its browser **page screenshots** failed, therefore images, original table and every formula's typography are `VISUAL_HOLD`.

The text contains **four** distinct printed exam codes:
- `123`: first full G12 paper in mirror; Part IV C1 (parabolic pond-bank to circular island, island radius **15 m**), C2 (3 drones' pairwise distances), C3 (grouped sample variance/standard deviation), plus corresponding code-123 marking guide.
- `345`: second code variant, with a **different** Part IV C1 (water supply-station placement by a river), not the same parabolic pond problem; marking guide is separate.
- `567`: third code variant, which **does** reuse the parabolic pond problem pattern but has island radius **10 m**, not 15 m, and different drone data and a different statistical prompt.
- `789`: fourth printed variant with its own geometry/space application and grouped-data items; do not reuse the code-123 key.

**One event, multiple variants**: `EVENT_ID=HN-PKK-2026-HK1-G12`. The indispensable key for every exam mapping is the full `(exam_event_id, exam_code, section, question_number, source_file_snapshot, page)`. **Code is not optional.** Four variants are **not** four independent schools/semesters in frequency statistics, and variant-level marking guides must not be mixed.

## 3. Focused numerical cross-check of one compound transfer task (external evidence only)

To test the R08 methodological interpretation without altering canonical content, independently evaluate the text-indexed **code 123, Part IV C1** model described in the archived marking guide. With the guide's coordinate setup, the minimum is obtained by optimizing a squared-distance polynomial on `[0,20]` (not by minimizing distance to arbitrary unbounded parabola). The polynomial represented in the guide's **text extraction** is
`f(x)=x^4/100 - x^2 - 80x + 1700`;
its derivative is `f'(x)=x^3/25 -2x -80`.
The sole relevant stationary point is approximately `x*=13.91768772`; checking both endpoints gives `min f≈768.08772089`, so `min distance to circular island≈sqrt(768.08772089)-15≈12.71439555m` (approx **12.71m**). For **code 567** the same center-to-parabola geometry but **10m** island radius would give **17.71m**. **This is a verification of the calculation based on the *text-indexed model*, not independent validation of the diagram.**

The third-party PDF text extraction appears to say `IM²≈768.8` while the displayed modeled polynomial at its quoted critical point is closer to `768.09`. This might be PDF text extraction/rounding artifact or a marking typo: **`EXTERNAL_NUMERIC_DETAIL_VISUAL_HOLD`**. Do not label the school as having issued an academic error until a page screenshot of the school-hosted original and the actual mark scheme has been checked. Either way, **none of this is an error in a previously approved SLM canonical item**.

**Educational transfer inference**, carefully scoped: the exam demands a multi-step chain (**infer parabola from diagram** → parameterize curve within physical bounds → square circle-center distance → solve constrained minimum → subtract island radius). Existing frozen G12 B02 `THPT-G12-CHI-B02-W02` rehearses domain/boundary optimization and G12 B08 `THPT-G12-B08-W05` rehearses Euclidean distance. These are **prerequisite methods**, **not** a direct complete long-form comparison with the multi-step exam problem. Before claiming a `GAP`, inspect the full G12 B02/B03/B05 D3 applications and G10 B22 conic modeling, and seek independent ordinary-school semester exemplars.

## 4. Additional primary school historical source with curriculum-cohort guard

The school's **01/01/2023** official news page
https://thptphungkhackhoan-thachthat.edu.vn/thi-va-tuyen-sinh/de-thi-dap-an-ky-thi-hoc-ky-i-nam-hoc-2022-2023/ctfull/21796/20031
lists test/answer links for grades 10, 11, 12 following exams on 29–31/12/2022. This falls within the **2022–2026 five-year examination window**, but:
- Grade **10** 2022–23 is the first CT GDPT 2018 G10 cohort, hence `CURRICULUM_ELIGIBLE_AFTER_FILE_QA`.
- Grades **11 and 12** 2022–23 still followed the old curriculum (rollout G11 2023–24, G12 2024–25), so they are **`LEGACY_CURRICULUM_CONTEXT_ONLY`** and cannot justify modern missing outcomes without compatibility proof.
- The detail URL/attachments were not retrieved from school page in this session. `EXAM_QUESTION_CONTENT_VERIFIED=NO` for all three historical sources.

## 5. R09 gates, next actions and non-actions

| QA item | R09 outcome |
|---|---|
| School issuer's **2025–26 announcement** | `PUBLISHER_METADATA_PASS` (date/title/7-attached-files **listing**) |
| School-hosted original attachment PDF | `HOLD_502` (content, PDF blob SHA and printed diagram unverified) |
| Secondary combined G12 PDF | `TEXT_INDEX_READ` (codes 123/345/567/789) ; `VISUAL_HOLD` |
| Each variant's C1 and answer pairing | `CODE_PAIRING_TAXONOMY_LOCKED` in **research metadata**, exact school-issued key still pending |
| Independent external model numeric check | `MODEL_CALC_REPRODUCED` based on secondary extracted polynomial; small text-key numeric discrepancy `VISUAL_HOLD` |
| All 238 canonical SGK D4 items | `NO_CHANGE` (31 G10 +83 G11 +124 G12) |
| Formal exam-to-outcome coverage/gaps | `NONE`: original issuer files, diagrams and full D3/D4 comparison still required |
| Topic placement/RELEASE | `NO_CHANGE`, no deploy or merge authorization |

Do not circulate original mirrored PDF/answer key/figures in public GitHub. Only these short source descriptions, research method classifications and links are committed. Older reviewed item/solution/rubric/NotebookLM PASS snapshots remain immutable.
