# R12 — Đối chiếu ứng dụng vectơ/lực từ đề cương chính thức THPT Trần Phú – Hoàn Kiếm (AUTHORING, read-only)

**AUDIT_ID:** `SLM-SGK-WRITTEN-EXAM-COVERAGE-20261106`
**PACKET_ID:** `SLM-SGK-G10-FORCE_METHOD_SOURCE_CROSSWALK-R12-20261106`
**STANDARD:** `SLM-THPT-QUALITY-ONE v1.2.0`, Q01–Q18; không tạo chuẩn thứ hai.
**SOURCE_CLASS:** `SCHOOL_PUBLISHED_REVISION_GUIDE` (đề cương ôn tập, KHÔNG phải đề kiểm tra thực tế).
**EXAM_EVENT_COUNT_ADDED:** `0`
**CUSTODY:** `SCHOOL_PUBLISHER_PAGE=CONFIRMED`; `SCHOOL_HOSTED_PDF_TEXT=INDEXED`; `PDF_FILE_BYTES_SHA256=UNVERIFIED`; `PDF_FIGURE_VISUAL=HOLD`; `OFFICIAL_EXAM_PAPER=NO`.
**RESULT:** `METHOD_EVIDENCE_PARTIAL`; `FORMAL_COVERED_OR_COVERAGE_GAP_VERDICT=0`; `NEW_ITEMS=0`; `AUTHORING_SOURCE_EDITS=0`; `ACADEMIC_PED_REREVIEW=NO`; `TOPIC_OR_RELEASE=NO`.

## 1. Nguồn và mức chứng cứ

- Trang do trường THPT Trần Phú – Hoàn Kiếm (Hà Nội) công bố **27/10/2025**: [Đề cương ôn tập cuối HK I, khối 10, năm học 2025–2026](https://thpttranphuhk.hanoi.edu.vn/de-cuong-cau-hoi-on-tap/de-cuong-on-tap-cuoi-hk-i-cac-mon-khoi-lop-10-nam-hoc-2025-2026/ctmb/1765/13435); liên kết file thứ 9/11 là Toán.
- Tài liệu Toán nằm trên máy chủ `file2.hanoi.edu.vn`: [PDF gốc liên kết từ trang trường](https://file2.hanoi.edu.vn/data/doc/2025/thpttranphuhk/2025_10/27/toan-noi-dung-on-tap-cuoi-ky-1k-10-nam-hoc-2025-2026_271020258.pdf). Tiêu đề và tên trường/năm học kiểm tra được qua phần văn bản PDF được chỉ mục.
- Đã đối chiếu **văn bản trích xuất** tại vị trí `III. Câu trả lời ngắn`, Câu 59 và Câu 70. Công cụ tải hình trực tiếp báo `Cache miss` nên **chưa đối chiếu trực quan hình F1/F2/F3 hoặc từng glyph ký hiệu**. Không có bản PDF bytes để khóa SHA256; không giả nhận đã xem nguyên trang in.
- Đây là **đề cương ôn tập của trường**, có giá trị tham chiếu họ dạng và phương pháp, nhưng **không chứng minh câu đó xuất hiện trong kỳ thi học kỳ**. Không cộng vào mẫu đề thi đã xác minh; không sử dụng làm SGK S1 hay thẩm quyền Core.

## 2. Đối chiếu 2 câu hỏi thực tế từ đề cương và học liệu bất biến

| Định vị trong tài liệu trường | Cấu trúc toán/phương pháp (diễn giải, không sao chép nguyên đề) | Bằng chứng canonical trong SLM | Kết luận giới hạn |
|---|---|---|---|
| Toán 10, phần trả lời ngắn, **C59** | Hai lực đồng quy, mỗi lực 25 N, góc 60°; vật cân bằng với lực thứ ba. Điều kiện `F1+F2+F3=0`, độ lớn `F3=|F1+F2|=25√3 N ≈ 43,30 N`. Cần phối hợp hình bình hành + góc không vuông/tích vô hướng + điều kiện cân bằng. | G10 B08 `THPT-G10-CHIV-TRY07` và `THPT-G10-B08-P06` giải **hợp lực vuông góc** (3/4 N → 5 N) và giải thích bằng hình bình hành; G10 B11 có D1 tích vô hướng và điều kiện góc. | `NONORTHOGONAL_EQUILIBRIUM_COMPOUND_TRANSFER_PENDING`: đã chứng minh **các thành phần nền tảng**, chưa chứng minh đủ chuỗi **60° + lực cân bằng thứ ba** trong các item đã xem. **KHÔNG gắn COVERAGE_GAP.** |
| Toán 10, phần trả lời ngắn, **C70** | Tính công khi biết lực 90 N, độ dời 100 m, góc 60°: `W=F·s=Fs cos60°=4.500 J`; yêu cầu ý nghĩa góc/đơn vị. | G10 B11 `THPT-G10-CHIV-W11-ANCHOR`, outcome `G10-B11-APPLICATION`: dùng lực/độ dời theo thành phần, công 48 J, cos góc và giải thích dấu công; lý thuyết D1.4 cho công thức `|F||s|cosθ`, đơn vị J. | `METHOD_FAMILY_EVIDENCE_PRESENT_IN_INSPECTED_CANONICAL`: cùng phương pháp tích vô hướng và công của lực, khác hình thức dữ liệu đầu vào. **Không tự nâng thành formal COVERED đối với corpus thi.** |

### Kiểm toán toán học độc lập trên dữ liệu đã thấy

- C59: do đứng yên, **tổng ba vectơ lực bằng không**; do đó lực thứ ba ngược chiều hợp lực của hai lực đầu và có cùng độ lớn. Bình phương hợp lực là `25²+25²+2·25·25·cos60° = 1.875 (N²)`; căn là `25√3 N`. Nếu chỉ cộng 25+25 hoặc dùng định lý Pythagoras cho góc 60° sẽ sai. Đây là phép tính kiểm toán nghiên cứu, **không** phải đáp án chính thức của trường hay revision rubric.
- C70: `90·100·cos60° = 4.500 J`, khác phép nhân thẳng 9.000 J. Đối chiếu SLM có phép tính công cùng bản chất (W11) và công thức nguồn (D1.4), không đòi thêm một item chỉ vì đổi biểu diễn tọa độ thành độ lớn–góc.

## 3. Source lock và boundaries

- Nguồn SLM được kiểm trên **Draft AUTHORING PR #750**, không sửa: `prototypes/thpt/content-drafts/Temp_G10_SGK_CHIV_FULL_R03_CONSOLIDATED_SOURCE_20261105.md`; Git blob **`96b5c95f9b74a3ed3b9fd66dc6c60481d8b0dcb9`**. R01/R02 reviews và composite receipt thuộc PR #750 giữ nguyên.
- D4 baseline G10: `G10_WRITTEN_31_CANONICAL_BASELINE.md` Git blob **`19ad4b47d4e046d770a4126011dcdccbd899f45a`**; W11 là **một** canonical item, Anchor là nhãn, không tính thêm item hoặc ID khác.
- Ma trận sơ bộ: `C59 → G10-B08-PARALLELOGRAM / G10-B11-GEOMETRIC_DOT` là nghiên cứu **liên-outcome**, không tự tạo placement hoặc thay chương SGK; `C70 → G10-B11-APPLICATION`, canonical `THPT-G10-CHIV-W11-ANCHOR` là đối chiếu phương pháp. Đây không phải kết luận toàn bộ đề cương hay tất cả outcome.
- 238 Written SGK được bảo toàn: G10 **31**, G11 **83**, G12 **124**, không đổi item/đáp án/rubric/source blob/historical verdict. Không mở NotebookLM review vì **không có Delta C học liệu**; nếu về sau thật sự đề xuất item mới cần khóa S1 + kiểm thiếu thực chất + owner decision + targeted independent review.
- Không upload PDF trường lên GitHub, không sao chép hình/đáp án toàn bộ, không đẩy RD1/private; không sửa website/engine/Firebase/Gemini; không merge/deploy. Giữ Draft #771.

## 4. Điều kiện bước tiếp theo

1. Tải và xem trực quan PDF đề cương và nếu có **đề HKI/HKII đã thi** được công bố bởi trường, kiểm đúng mã đề, trang, hình, đáp án; khóa SHA của bản bytes thực sự đọc.
2. Kiểm thêm toàn bộ D1–D4/EX/HELP của G10 B08 và B11 và SGK nguồn S1, sau đó so với một số trường phổ thông Hà Nội độc lập 2022–2026 cùng CT2018 để xác nhận tính cần thiết của phép phối hợp góc không vuông + cân bằng.
3. Chỉ khi chứng minh thiếu một họ phương pháp quan trọng mới tạo đề xuất bổ sung cho chủ dự án; không kết luận từ một đề cương hoặc ví dụ số liệu mới.

**CHECKPOINT:** `R12=SOURCE_AND_METHOD_CROSSWALK_RECORDED;ORIGINAL_PDF_VISUAL_HOLD;NO_FORMAL_GAP;NEW_WRITTEN=0;RELEASE=NO`.
