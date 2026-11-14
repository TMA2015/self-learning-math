# R14 — THPT Nguyễn Quốc Trinh, Toán 11 HKII 2023–24: đối chiếu xác suất theo outcome và Written canonical

AUDIT_ID: SLM-SGK-WRITTEN-EXAM-COVERAGE-20261106
PACKET_ID: SLM-G11-NQT2024-HKII-PROBABILITY-METHOD-R14
LANE: AUTHORING_READ_ONLY
STANDARD: SLM-THPT-QUALITY-ONE v1.2.0 (Q01–Q18)
BASELINE_D4: G10 31 + G11 83 + G12 124 = 238
CONTENT_EDIT_OR_NEW_ITEM: 0
INDEPENDENT_ACADEMIC_PED_PASS_REOPENED: NO
FORMAL_COVERED_OR_COVERAGE_GAP: 0
TOPIC_OR_RELEASE_AUTHORIZED: NO

## 1. Xác minh nguồn: bản trường và bản văn bản thứ cấp KHÁC mức chứng cứ

**Trang trường gốc:** THPT Nguyễn Quốc Trinh công bố ngày **07/05/2024** bộ **đề kiểm tra cuối học kỳ II khối 10, 11 năm học 2023–2024**, gồm 11 tệp đính kèm. Tệp PDF thứ **6/11** có tên `toan-11cuoi-hkii-23-24.pdf`; tệp thứ **2/11** có tên ghép `tieng-anhtoan-10cuoi-hkii.pdf`, cần tra xem nội dung trước khi gán grade. URL: https://thptnguyenquoctrinh.hanoi.edu.vn/thi-va-tuyen-sinh/de-kiem-tra-cuoi-hoc-ky-ii-khoi-10-11-nam-hoc-2023-2024/ctmb/21706/22818 . Chính danh mục phát hành trường là bằng chứng **PUBLISHER_EVENT_METADATA_PASS**, không chứng minh đã đọc bytes đề Toán 11.

**Bản truyền lại:** https://www.scribd.com/document/1005311976/De-Cuoi-Hoc-Ki-2-Toan-11-Nam-2023-2024-Truong-Thpt-Nguyen-Quoc-Trinh-Ha-Noi . Chỉ mục tìm kiếm cung cấp **văn bản OCR chất lượng thấp**, trong đó có mã đề **111** và **112**, Toán 11, 90 phút, và nhóm câu về xác suất. Không có xác minh rằng upload này là bản byte-trùng tệp `toan-11cuoi-hkii-23-24.pdf` của nhà trường; trang mở chi tiết Cache miss, không xem được hình/đáp án hoặc đối chiếu SHA. Nguồn thứ cấp này chỉ dùng để đặt **method candidates**, tuyệt đối KHÔNG là câu hỏi trường đã xác nhận theo vị trí/hình. Các mã 111/112 (nếu xác nhận) là các phiên bản của **cùng kỳ thi một trường**, không hai exam events.

**Evidence gates:** school page `PUBLISHER_ATTACHMENT_INDEX_VERIFIED`; OCR `SECONDARY_TRANSCRIPTION_UNVERIFIED`; original PDF `BYTES_SHA_PAGE_DIAGRAM_KEY_HOLD`; independently marked exam answers `NOT_VERIFIED`; category `REGULAR_HANOI_G11_CT2018_2023_24_ELIGIBLE_AFTER_SOURCE_QA`. Chưa có `CORPUS_VERIFIED` và không đếm câu theo tần suất.

## 2. Đối chiếu cấu trúc toán (tóm tắt, không sao chép nguyên đề)

| Trích OCR gắn vị trí tạm thời | Phương pháp toán cần kiểm; kiểm toán tính toán độc lập, KHÔNG phải đáp án trường | Canonical/outcome thực đã khóa trên Git | Đánh giá chứng cứ đúng mức |
|---|---|---|---|
| Mã 111 Phần I C9 (OCR) — khảo sát 40 HS: 25 thích Lý, 20 thích Hóa, 14 thích cả hai | Dùng bao hàm–loại trừ: số thích ít nhất một =25+20−14=31; nếu lấy đều một HS: **31/40=0,775**. Cần kiểm phép thử chọn đều và ký hiệu chính thức trong PDF. | G11 B29 D1 có giải thích vì sao trừ vùng giao, ví dụ khảo sát **40 người**; `THPT-G11-CHVIII-B29-C06` tính hợp từ 60 phiếu; **D4 `THPT-G11-CHVIII-B29-W01`** có bảng 80 phiếu, tính hợp/bù và rubric giải thích double-count; **D4 `THPT-G11-CHVIII-B29-W03`** chia bốn miền và kiểm tổng =1. Outcome `G11-B29-ADDITION_OVERLAP`, `G11-B29-REAL_APPLICATION`, `G11-B29-VENN_COUNTS`. | **EXACT_METHOD_FAMILY_PRESENT** trong SGK học liệu. Không thêm câu tự luận giống khảo sát chỉ vì số liệu thay. **Formal exam-item COVERED vẫn HOLD** cho đến khi PDF nguyên bản/locator được xác nhận. |
| Mã 111 Phần II C1 (OCR) — hai người câu cá với xác suất thành công 0,9 và 0,8; đề nêu độc lập | Nếu độc lập: cả hai thành công **0,72**; cả hai thất bại (0,1)(0,2)=**0,02**; chỉ người đầu thành công 0,9·0,2=**0,18**; ít nhất một thành công **0,98**. Các mệnh đề OCR số 0,99 và 0,28 cần đối chiếu đúng hình thức Đ/S bản gốc; tính nghiên cứu không là key trường. | G11 B30 `THPT-G11-CHVIII-B30-P06` đã giải hai môđun độc lập; `THPT-G11-CHVIII-B30-P04` dùng biến cố bù ít nhất một; **D4 `THPT-G11-CHVIII-B30-W02-ANCHOR`** kết hợp cùng cả hai đúng/sai/ít nhất một và kiểm tổng; **D4 `THPT-G11-CHVIII-CHVIII-W01-ANCHOR`** tích hợp giao/chỉ A/hợp/không biến cố, giải thích khi nào nhân, cộng, bù. Outcomes `G11-B30-MULTIPLY_INDEPENDENT`, `G11-B30-AT_LEAST_ONE`, `G11-CHVIII-INTEGRATED`. | **EXACT_COMPOUND_METHOD_FAMILY_PRESENT** ở D4 tích hợp và PED. Không kết luận lỗi hoặc đủ toàn bộ bốn ý Đ/S của một PDF OCR chưa xác thực. |
| Mã 111 Phần I C2/C3 (OCR) — xung khắc và biến cố hợp; Phần II C3 khảo sát số HS thích Văn/Toán có phần chung | Phân biệt công thức cộng cho xung khắc với cộng trừ giao khi chồng lấn, gắn biến cố vào dữ liệu đếm. | G11 B28 `THPT-G11-CHVIII-B28-W02-ANCHOR` giải thích phân biệt độc lập/xung khắc; B29 W01/W02 và P02/P04 dùng công thức, giới hạn và miền giao. | **FOUND_CONCEPTS_AND_WRITTEN_RUBRIC**; OCR có chỗ toán/ký hiệu bị thay nên việc khớp từng assertion vẫn `EXACT_STATEMENT_HOLD`. |
| Mã 111 Phần III C4 (OCR) — hai người hẹn thư viện, thời điểm đến trong khoảng một giờ, người trước chờ tối đa 15 phút | **Hình học xác suất liên tục** trên hình vuông thời gian: cần xác định phân phối thời điểm đến (thường giả sử độc lập đều) và diện tích miền |x−y|≤15/60 trước khi dùng tỉ số diện tích. Với giả định đều độc lập: (1-(1-1/4)^2=7/16=0,4375). | G11 ChVIII dạy biến cố hữu hạn / xác suất đồng khả năng và cách phối hợp; bản R00 chưa có bằng chứng đã dạy **xác suất hình học liên tục**. Cần kiểm **S1 SGK/SBT và câu gốc** xem có ngoài phạm vi CT2018/KNTT; không tự dùng đề trường thay nguồn chuẩn. | `CONTINUOUS_GEOMETRIC_PROBABILITY_SCOPE_HOLD`; **KHÔNG** là gap SGK: một câu thi chưa xác thực cùng khả năng khác chương/trình độ, có giả định mô hình chưa rõ. Chỉ escalates khi source+S1 chứng minh cần thiết. |

### Lưu ý toán

Ở bài hẹn thư viện, phép tính (7/16) là **diễn giải giả định** thời điểm đến độc lập và phân bố đều trên [0,1], thời gian chờ 1/4 giờ. Không tuyên bố là đáp án mã 111 nếu ảnh đề chỉ thể hiện 'đến bất kỳ lúc nào' mà thiếu giả định đồng khả năng. Với hai bên ngồi đợi/đến cùng thời gian, miền gặp nhau là vùng giữa hai đường thẳng y=x±1/4, phần ngoài hai tam giác cạnh 3/4 nên tỉ số 1−2·(1/2)·(3/4)^2=7/16. Phải xác minh tính thuộc phạm vi chương trình trước mọi quyết định.

## 3. Khóa source SLM và phân loại kỹ năng theo lesson/outcome

- **G11 ChVIII immutable public reviewed source** `prototypes/thpt/content-drafts/G11_CHVIII_B28_B30_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md` trên AUTHORING Draft #710, Git blob `fde4f8be91b5884b4559fef59fde46cf826c2bc9`, 20 RD0 outcomes, 8 D4 original item IDs, D1/PED và D3 canonical. Văn bản tiêu đề nguồn là historic authoring candidate, status cuối cùng phải tra composite independent review/receipt ở handoff V2 — KHÔNG tự coi dòng header thành trạng thái final.
- **G11 ChVIII V2 handoff** `prototypes/thpt/release-handoffs/G11-SGK-CHVIII-B28-B30-R00_HANDOFF_V2_20261102.md` (Draft #710). **G11 D4 baseline source** `G11_WRITTEN_83_CANONICAL_BASELINE.md`, blob `0bf2130e22759e8be870e7575cad69a4a2e2ae55`, 83 unique. ChVIII eight D4 IDs trong baseline gồm B29-W01, B29-W02-ANCHOR, B29-W03, B30-W01, B30-W02-ANCHOR, CHVIII integrated W01-ANCHOR, plus B28 W01/W02.
- Nhấn mạnh D4 B29 W01 rubric: trình bày phần giao, tính hợp/bù, mẫu số và *lý do loại phần đếm trùng*. D4 B30 W02 và integrated W01 có *vì sao áp dụng tích (độc lập) rồi bù hoặc cộng*, không chỉ học công thức; không nhân bản chỉ để phủ bộ số.
- Không đổi original source Git blob, `item_id`, lời giải, rubric, independent Academic/PED receipts hay các key private RD1. Chỉ là documentation mapping, chưa biến thành Academic PASS cho một đề mới. Bảo vệ RD1/Q16 và source SHA/Q18.

## 4. Cổng kết luận và việc tiếp

1. **Thêm chứng cứ giáo dục hữu ích**: Toán 11 B29/B30 đã có cả D1 bản chất, D3 rèn, D4 Written theo các họ công thức **cộng có giao + độc lập/tích + biến cố bù + vận dụng tích hợp** được mô tả trong mirror của đề HKII.
2. **HOLD nguồn thi gốc**: truy xuất chính PDF thứ 6/11 từ trang trường, xác nhận mã 111/112, từng section/item/page, câu hẹn giờ (assumptions) và đáp án. Source text Scribd không thay thế ảnh PDF hoặc xác minh trường.
3. **HOLD phạm vi S1** đối với bài hẹn giờ xác suất hình học liên tục. Không tạo item theo một ví dụ có khả năng vượt phạm vi, không gắn formal `COVERAGE_GAP` khi chưa so SGK.
4. **Giữ 238 canonical**: không sửa/bỏ/tăng số lượng, không re-review pass, không chuyển Topic hay RELEASE. Nếu xác nhận method gap quan trọng thuộc S1, lập đề xuất `DELTA_C` gửi chủ dự án duyệt; nếu không, đóng bằng chứng ở `METHOD_FAMILY_PRESENT`.

CHECKPOINT: R14=NQT_HKII_2024_OFFICIAL_INDEX_VERIFIED;MIRROR_OCR_METHOD_RESEARCH_ONLY;B29_B30_D4_EXACT_METHOD_FAMILY_PRESENT;CONTINUOUS_PROBABILITY_S1_SCOPE_HOLD;PDF_VISUAL_SHA_HOLD;FORMAL_GAP=0;NEW_D4=0;RELEASE=NO
