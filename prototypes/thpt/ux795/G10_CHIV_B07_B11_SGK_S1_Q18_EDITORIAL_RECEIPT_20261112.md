# G10 Chương IV Bài 7–11 — SOURCE-LOCKED S1 / Q18 ENRICHMENT_DELTA_RECEIPT

**Ngày:** 12/11/2026 · **Issue:** #835 · **Owner authorization:** chủ dự án trực tiếp cho phép sửa cả năm bài và chủ động bổ sung đúng SGK ở Bài 11, tự kiểm chứng không cần thêm một vòng phản biện độc lập.  
**One standard:** `SLM-THPT-QUALITY-ONE v3.1.0`, §X-F/Q01–Q18.  
**Verification mode:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` / `AUTHOR_SELF_VERIFIED`; **NOT** `INDEPENDENT_REVIEWER_PASS`.  
**Classification:** `DELTA_C_ACADEMIC_MATERIAL` cho trình tự PED/First Try được di chuyển và điều kiện SGK B11; nội dung toán không mới ngoài việc khôi phục đúng quy ước S1. Không gọi nhầm là CSS Delta A.  
**Baseline:** `main 045b15ecc402acf9a081a35bd4a7fb36d6325188` · Golden UI #830/#832 giữ nguyên JS/CSS; ChIV First Try/HELP/outcomes chỉ đổi vị trí hiển thị theo tab.  
**S1:** SGK *Toán 10, Kết nối tri thức với cuộc sống*, tập một, Chương IV, trang in 46–70; đối chiếu văn bản PDF xuất bản tại https://media.metaisach.com/2025/09/toan-10-tap-1-ket-noi-tri-thuc-voi-cuoc-song-7ff1b316.pdf. Trang in dựa trên số in trực tiếp trong sách và mục lục; web PDF screenshot API không trả được ảnh (cache miss), nên **không khẳng định chỉ số trang PDF khi chưa xác minh**. S1 section names verified against original book text.  
**Author self-QA signoff:** ChatGPT, SGK content editorial + RELEASE; source, toán, PED và Q15/Q16 only for the affected five lessons.  
**Release gates:** Golden/browser 390/820/1440, Source/S1/Q18, assessment-data safety, R4/Roadmap and production Git blob parity **required on exact PR HEAD**; receipt itself is not deployment proof.

## Single source matrix — exact Git blob SHA (Git blob, not SHA256)

| LESSON | PUBLISHED_BASELINE_BLOB | EDITED_SOURCE_BLOB | FIRST_TRY_MOVED_TO_DISCOVERY | SGK_PRINTED_PAGES | OUTCOME_ID / Q18 affected | S1 section outline inside tab 2 |
|---|---|---|---|---|---|---|
| B07 | `3766d84af8cbd27d1d84824048c39f974036020b` | `d48a1b9edaec46480dc70acb519d77edf6008445` | 5 | 46–50 | G10-B07-DEFINITION; G10-B07-LENGTH; G10-B07-DIRECTION; G10-B07-EQUALITY; G10-B07-ZERO | 2.1. Khái niệm vectơ; 2.2. Hai vectơ cùng phương, cùng hướng, bằng nhau |
| B08 | `fdf2a7619f1a804a59ede82564a4853cadf6c5f7` | `dcdb7aec2ce8afd285739bc3e098d615e4faf623` | 5 | 51–54 | G10-B08-TRIANGLE; G10-B08-PARALLELOGRAM; G10-B08-OPPOSITE-SUBTRACTION; G10-B08-MIDPOINT; G10-B08-CENTROID | 2.1. Tổng của hai vectơ; 2.2. Hiệu của hai vectơ |
| B09 | `30cf7ba3fea8e8ebb4212ac5b06840b4ef7d380e` | `2529b915e4089862e1a48e685ba5dc88d5450558` | 5 | 55–59 | G10-B09-SCALAR_DEFINITION; G10-B09-LENGTH_DIRECTION; G10-B09-DISTRIBUTION; G10-B09-COLLINEAR; G10-B09-MIDPOINT_CENTROID | 2.1. Tích của một vectơ với một số; 2.2. Các tính chất của phép nhân vectơ với một số |
| B10 | `d4e0ad482ef7b8b5374c4e0f4cebea54e8deac82` | `ceaa76688e73274c9cf2d3116c41c6d4d0ac2726` | 6 | 60–65 | G10-B10-VECTOR_COORDS; G10-B10-OPERATIONS; G10-B10-NORM_DISTANCE; G10-B10-COLLINEAR_COORDS; G10-B10-MIDPOINT_CENTROID | 2.1. Tọa độ của vectơ; 2.2. Biểu thức tọa độ của các phép toán vectơ |
| B11 | `117e35eb3a9d96bd138826f6ed648d857019473c` | `2a1381689f66d1f8c752bdbf1c29a9ef49a4e073` | 4 | 66–70 | G10-B11-GEOMETRIC_DOT; G10-B11-COORDINATE_DOT; G10-B11-PERPENDICULAR; G10-B11-APPLICATION | 2.1. Góc giữa hai vectơ; 2.2. Tích vô hướng của hai vectơ; 2.3. Biểu thức tọa độ và tính chất của tích vô hướng |

## Exact editorial mapping

- **Tab 1:** `1.1 Cùng tìm hiểu`, `1.2 Ví dụ trực quan` (full WHY/PED/observation chain including all pre-Core First Tries with their existing opened-by-choice answer blocks), `1.3 Thuật ngữ, kiến thức và kỹ năng`. Total original First Try IDs per lesson = 5/5/5/6/5; B11's fifth `THPT-G10-CHIV-TRY-FORCE-TR01` is existing extra transfer practice inside tab 4 and was **not cloned or moved**, 4 moved into tab 1.
- **Tab 2:** exactly one outer `2. Kiến thức SGK` emitted from existing owner Golden JavaScript; Markdown begins `2.1` immediately, never has an inner `Kiến thức SGK` heading or `??? question` First Try. Headings follow the actual S1 lesson section order; existing SLM-created synthetic subheadings are subordinate `####` explanatory subtopics, not book-level `###` sections. Definitions, conditions, formulas, geometric figures and applications retained.
- **Tabs 3 and 4:** all three original solved public examples, Golden solution box, D6 HELP, Practice links, no canonical IDs duplicated.
- **Q15/Q16:** canonical source IDs, answer/solution in public First Try and tab 4, topic/Readiness roles, RD1 privacy, independent end-chapter Final Submit, Mastery and learner storage untouched.

## Math verification per affected outcome

| Lesson | Math/source verification and likely misconception |
|---|---|
| B07 | Vectơ = đoạn có hướng; độ dài không âm; cùng phương khác cùng hướng; bằng nhau phải cùng hướng và độ dài. `\vec0` độ dài 0; phân biệt độ dời với quãng đường. SBT convention about zero-vector direction retained with attribution. B07 pedagogic note now points to B11's SGK angle convention rather than incorrectly prohibiting every zero-vector angle. |
| B08 | Ba điểm `\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}`, hình bình hành cạnh cùng gốc, hiệu là cộng vectơ đối; trung điểm `\overrightarrow{MA}+\overrightarrow{MB}=\vec0`, trọng tâm `\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0`. Original quantities, formulas and example calculations retained. |
| B09 | `|k\vec u|=|k|\,|\vec u|`; sign reverses direction for nonzero vectors, `k=0` special case, distribution, centroid relation retained. No negative length or division by vector 0. |
| B10 | `\overrightarrow{AB}=(x_B-x_A;y_B-y_A)`, coordinate algebra, Euclidean norm, midpoint and centroid formulas, zero/nondegenerate conditions and river-transfer image/case retained. |
| B11 | **S1 printed p66:** for nonzero vectors the geometric angle is unique; `(\vec u,\vec0)` may **by book convention** take any value `0°–180°`, and `\vec0\perp\vec v` for every vector. These are not the same as a unique geometric angle. **p67:** dot product is a scalar, zero input produces 0; work of force. **p68–69:** dot in coordinates `ac+bd`; perpendicular iff dot=0 (with S1 zero convention); cosine quotient only when both norms positive, including a right angle where dot=0. Original D6 remediation now reflects this convention instead of saying zero vectors cannot be perpendicular. |

## Evidence boundaries and closure

**Source-verified:** mathematics/definitions/formula source mapping in the table, original canonical ID lists, original First Try closed-answer content when compared against baseline, no Q16/RD1 change. All five are self-verified; not a forged NotebookLM outcome and not a new standard. **P0/P1 in corrected Knowledge content:** 0 after focused source/maths self-QA; website old layout defect #835 remains open until exact-head QA and publish receipt. Historical old source SHA remains immutable in the existing 27-row ledger; this receipt is a **separate additive source snapshot**, not an overwrite of 27-lesson history. Historical source ledger rows must still be independently validated.

**Test contract:** `scripts/test-g10-chiv-editorial-source.cjs`, `scripts/test-g10-chiv-golden-browser.cjs`, mandatory Q18 source router, full G10 27, THPT R4 and Roadmap. Deliberate negative tests: ID corruption, wrong SGK heading, malformed Git blob SHA all rejected. No extra NotebookLM review is required by the owner's direct decision, but failing a substantive source/math check triggers scoped HOLD.

**Do not merge B07 Draft PR #825** as a separate source because this batch supersedes the same intended reordering; avoid duplicate canonical sources. Close #825 only after owner/site receipt confirms replacement of its scope.
