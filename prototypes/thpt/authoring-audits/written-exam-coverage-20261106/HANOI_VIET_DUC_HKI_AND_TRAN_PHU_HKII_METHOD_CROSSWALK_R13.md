# R13 — Đối chiếu HKI Việt Đức và đề cương HKII Trần Phú với học liệu SGK Toán 10

AUDIT_ID: SLM-SGK-WRITTEN-EXAM-COVERAGE-20261106
PACKET_ID: SLM-SGK-G10-HANOI-SCHOOL-METHOD-R13-20261106
LANE: AUTHORING_READ_ONLY
STANDARD: SLM-THPT-QUALITY-ONE v1.2.0 (Q01–Q18 duy nhất)
D4_BASELINE: G10 31 + G11 83 + G12 124 = 238 CANONICAL IDS
NEW_OR_CHANGED_ITEMS: 0
REOPENED_ACADEMIC_PED_PASS: NO
FORMAL_COVERED_OR_COVERAGE_GAP_VERDICTS: 0
RELEASE_OR_TOPIC_IMPLEMENTATION: NO

## A. Xuất xứ hai nguồn — không nhầm đề thi với đề cương

**A1 — THPT Việt Đức, Hà Nội, HKI Toán 10, 2025–2026 (nguồn trích thứ cấp).** Bài đăng TOANMATH ngày 22/12/2025 giới thiệu một đề HKI, mã 3126, 90 phút, 12 MCQ, 2 đúng/sai, 4 trả lời ngắn, 3 tự luận, và trích văn bản 3 tình huống: ca nô, tàu thủy tọa độ, thống kê tiêu thụ gạo. URL: https://toanmath.com/2025/12/de-hoc-ky-1-toan-10-nam-2025-2026-truong-thpt-viet-duc-ha-noi.html

**A2 — Mirror PDF:** https://toanmath.com/toanmath-pdf/de-hoc-ky-1-toan-10-nam-2025-2026-truong-thpt-viet-duc-ha-noi.pdf . Web index cho biết PDF ba trang; cả ba yêu cầu screenshot đều lỗi Cache miss, container download thất bại. Không có PDF bytes/SHA, hình hay trang/câu gốc được xác minh; chưa chứng minh trực tiếp nguồn trường phát hành. Montoan.com.vn đăng cùng đoạn trích, không được tính là sự kiện thi độc lập thứ hai. Ba đoạn trích KHÔNG được tự gán vào Part IV tự luận khi không có trang nguyên đề. Định danh: VIETDUC-2025-26-HK1-G10-CODE3126; EXAM_QUESTION_REF=UNVERIFIED; SOURCE_STATUS=SECONDARY_EXCERPT_ONLY.

**B1 — THPT Trần Phú – Hoàn Kiếm, Hà Nội, HKII Toán 10, 2025–2026 (nguồn trường, nhưng là đề cương).** Trang trường công bố 07/04/2026, liên kết file Toán số 10/12: https://thpttranphuhk.hanoi.edu.vn/de-cuong-cau-hoi-on-tap/de-cuong-on-tap-cuoi-hk2-cac-mon-khoi-lop-10-nam-hoc-2025-2026/ctmb/1765/13848

**B2 — School-hosted original PDF:** https://file2.hanoi.edu.vn/data/doc/2026/thpttranphuhk/2026_4/7/toan-10noi-dung-on-tap-cuoi-hoc-ky-ii-nam-hoc-2025-2026_7420269.pdf . Web index trả 16 trang văn bản; trang PDF pageno 10 (trang thứ 11) có MCQ C8 về tâm đường tròn trên Ox, C9/C12/C13 về tiếp tuyến. Screenshot PDF nhiều trang vẫn lỗi Cache miss, chưa lấy được bản bytes/SHA, hình và kí hiệu chọn đáp án trực quan. Đề cương mô tả cấu trúc thi dự kiến (12 MCQ + 2 Đ/S + 4 trả lời ngắn + 6 ý tự luận, 90 phút), KHÔNG có bằng chứng đây là đúng đề HKII được tổ chức. SOURCE_STATUS=SCHOOL_PUBLISHED_REVISION_GUIDE_TEXT_INDEXED; EXAM_EVENT_COUNT_ADDED=0.

## B. Ma trận cấu trúc phương pháp và học liệu bất biến

| Đầu mục | Phương pháp cần có theo trích dẫn | Bằng chứng SLM đã xem | Kết luận giới hạn |
|---|---|---|---|
| Việt Đức HKI – ca nô đi hướng S20°E, tốc độ 22 km/h; nước chảy về Đông 2 km/h | Tách vận tốc đối đất/đối nước; đổi hướng la bàn thành thành phần Đông/Nam; trừ vectơ dòng, rồi lấy chuẩn Euclid. Với giả định 22 km/h là tốc độ so với bờ: sqrt(488 − 88 sin20°) ≈ 21,4 km/h. | G10 B07 EX-G10-B07-03 (độ dời khác quãng đường); B08 quy tắc tổng/hiệu; B09 THPT-G10-B09-P06 ứng dụng độ dời; B10 THPT-G10-B10-P01/P02 tính tọa độ và phép cộng. | FOUND_COMPONENT_METHODS; RELATIVE_VELOCITY_COMPOUND_PENDING. Con số nghiên cứu không là đáp án chính thức; chờ ảnh đề, điều kiện/quy ước. |
| Việt Đức HKI – tàu xuất phát (3;2), vận tốc vectơ (3;4) km/h, sau 2h | Lấy vectơ dịch chuyển bằng thời gian nhân vận tốc và cộng vào A. Tự kiểm độc lập: B=(9;10), tích hai tọa độ=90. | B09 THPT-G10-B09-P01 nhân vectơ với số; B10 THPT-G10-B10-P02 tìm B=A+AB; B10 P01 tính vectơ. | COORDINATE_TRANSLATION_METHOD_PRESENT; chuỗi scalar-time + coordinate placement chưa được chứng minh trên một item duy nhất của mẫu đã xem. |
| Việt Đức HKI – tiêu thụ gạo 1 năm | Tính trung bình và phương sai từ bảng số liệu. Đoạn trích không hiển thị số liệu gốc nên KHÔNG bịa bảng, đáp án hay rubric. | G10 B13 THPT-G10-CHV-W13: trung bình từ tần số; B14 THPT-G10-CHV-W14-ANCHOR: trung bình, phương sai và phân tích độ phân tán trên hai bộ số. | MEAN_VARIANCE_METHOD_PRESENT; exact question/key comparison PENDING. Không có lý do nhân bản chỉ vì đổi ngữ cảnh gạo. |
| Trần Phú HKII – đề cương hình học, MCQ C8, pageno 10 | Đường tròn qua A(1;1), B(5;3), tâm I=(h;0): IA²=IB² → h=4, R²=10 → (x−4)²+y²=10 (tính đối chiếu nội bộ, không phải đáp án trường). | G10 B21 THPT-G10-B21-P06: tâm I trên Ox đi qua hai điểm A(1;2), B(5;4); dùng chính IA²=IB², tìm I(9/2;0), R²=65/4. | **EXACT_METHOD_FAMILY_PRESENT**. Dạng bài đã có canonical thực, không cần đề xuất câu giống hệt và KHÔNG gọi là formal COVERED cho corpus thi. |
| Trần Phú HKII – đề cương MCQ C9/C12/C13, pageno 10 | Viết/kiểm tiếp tuyến đường tròn, ràng buộc hướng song song/vuông góc; phần văn bản đáp án bị rối glyph, chưa đọc đủ. | G10 B21 THPT-G10-B21-P02/P03/P05 đã có tiếp tuyến tại điểm, khoảng cách tâm–đường bằng R và tham số tiếp xúc. B21 D1/PED giải thích điều kiện. | TANGENCY_BASE_METHOD_PRESENT; VARIANTS_WITH_PARALLEL_OR_PERPENDICULAR_LINES_PENDING. Không khẳng định toàn bộ đã đủ. |

**Lưu ý bản chất toán:** Với bài ca nô, S20°E được hiểu là Nam lệch 20° về Đông. Nếu 22 km/h là tốc độ so với bờ, v_bo=(22 sin20°,−22 cos20°), v_nuoc=(2,0), v_rieng=v_bo−v_nuoc. Nếu trang gốc dùng một quy ước khác, phải sửa mô hình nghiên cứu theo nguyên đề, không sửa học liệu canonical vì diễn giải thứ cấp.

## C. Nguồn Git canonical và biên giới giữ nguyên

- G10 ChIV R03 source: prototypes/thpt/content-drafts/Temp_G10_SGK_CHIV_FULL_R03_CONSOLIDATED_SOURCE_20261105.md; Git blob 96b5c95f9b74a3ed3b9fd66dc6c60481d8b0dcb9 (AUTHORING Draft #750); B07–B11 methods and real item IDs preserved.
- G10 ChV R03 source: prototypes/thpt/content-drafts/Temp_G10_SGK_CHV_FULL_R03_CONSOLIDATED_SOURCE_20261105.md; Git blob ea0de4b484527c2f47e07840c7f00914badd67e7 (AUTHORING Draft #755); W13/W14 original solution/rubric untouched.
- G10 ChVII formative bank: docs/assets/javascripts/thpt-chvii-reviewed-formative-v1.js; Git blob 2b191d7abba7a4f5bd79d4c122673cd53a45495b. Source R02 WITH_CANONICAL_REFERENCES Git blob c5c222af88b0e932f9b60df059d8ffd4da5f0f26 (AUTHORING Draft #764); THPT-G10-B21-P06 exact method, P02/P03/P05 tangency methods preserved.
- G10 D4 baseline: G10_WRITTEN_31_CANONICAL_BASELINE.md Git blob 19ad4b47d4e046d770a4126011dcdccbd899f45a. G11 83, G12 124 remain. No change to any 238 canonical IDs, question bodies, solutions, rubrics, source receipts or historical NotebookLM PASS.
- Q01/Q02/Q04/Q05/Q06/Q15/Q18: this is READ_ONLY reference-method evidence, not a source delta or independent authoring verdict. SOURCE_ID→METHOD→LESSON/OUTCOME/ITEM is tentative for source excerpts without question locators. No new CHAPTER/TOPIC Readiness, Mastery or software changes.

## D. Result and next evidence gate

1. **Exact structural example found**, not a gap: circle through two points with center on Ox, Trần Phú outline C8 ↔ G10 B21-P06.
2. **Underlying building blocks already taught**: scalar-vector operations, coordinate displacement, mean/variance and tangent radius-distance. One possible composite water-current task remains PENDING; never call missing from item-number count or simple text search.
3. **No reliable formal COVERED / COVERAGE_GAP verdict yet**: HKI Việt Đức PDF still secondary excerpt with missing issuer and image/answer inspection; HKII Trần Phú is a school-issued revision outline, NOT administered-paper corpus.
4. Keep Draft #771; continue with school-issued/verified real HKI/HKII PDF including correct code, printed page and images, verify D1–D4 across all relevant original chapters; decide on new items only after an important method/depth gap is proven and owner approves a scoped DELTA_C + NotebookLM review.

CHECKPOINT: R13=SOURCE_AND_METHOD_CROSSWALK_RECORDED;B21_P06_METHOD_MATCH;EXAM_ORIGINAL_PDF_HOLD;NO_FORMAL_GAP;NEW_D4=0;RELEASE=NO

## R13 SOURCE-ANCHORED RESOLUTION — river-vector method (06/11/2026)

- **Loại bỏ yêu cầu tìm bằng được đề thi HKI gốc để công nhận dạng luyện:** bài ca nô 22 km/h theo hướng S20°E trong trích đoạn Việt Đức được giữ là tham chiếu **SECONDARY_EXCERPT_ONLY**; nguồn số 21,4 km/h trong §B **chỉ là phép tính có điều kiện** dựa trên việc 22 là tốc độ theo bờ. Chưa có PDF glyph rõ để chốt lời giải trường và câu đó có thuộc phần tự luận hay không.
- **S1 chính thức đã đọc ảnh trang trực tiếp:** SGK KNTT Toán 10 Tập Một **trang in 53/PDF54** nêu quy tắc tổng vận tốc riêng thuyền + dòng nước; **trang in 54/PDF55** có Ví dụ 4 chọn hướng chèo khi sang sông và bài **4.10** hai ca nô với dòng nước. SGK PDF SHA256 **3cbb335780dc0f2f4a034a55eb542e3bbe67693412b10a90ca1dffe9ea50eac2**. SBT cùng tập PDF SHA256 **2b1b98665b2c5cccb99f6699a43cbf71b8b2dfc63bdaec759a7b1c51778e2fa1**.
- Đối chiếu source G10 ChIV blob **96b5c95f9b74a3ed3b9fd66dc6c60481d8b0dcb9**, **45/45 canonical**, **15/15 D2**, **24/24 First Try**, cho thấy công thức và phép tọa độ đã có nhưng **không có bài tích hợp thuyền/dòng nước/đến đúng bờ** trong phần public đã rà. Gắn **S1_ANCHORED_RIVER_VECTOR_TRANSFER_CANDIDATE** (ứng viên tăng độ sâu ứng dụng), **không** gắn thiếu lý thuyết hay formal Q FAIL.
- [Biên bản chứng cứ S1/nguồn lỗi và các QA probes duy nhất — R12 closeout](G10_OFFICIAL_SCHOOL_REVISION_FORCE_APPLICATION_CROSSWALK_R12.md). Không tạo audit R tiếp, không mở DELTA_C/source mới khi chưa có quyết định phạm vi; giữ 238 Written.
