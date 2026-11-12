# UX795 · Toán 10 SGK Knowledge · sổ theo dõi tuần tự

**Quyết định chủ dự án:** hoàn thiện **liên tục toàn bộ 27 bài SGK Toán 10** bằng mô hình B; **không tạo A/B HTML mới**, không dừng từng hai bài để xin duyệt UX. Chỉ dùng **4 tab cấp 1**, chưa có tab cấp 2. Lời văn phải tự nhiên, đầy đủ ý, giải thích tại sao chọn thao tác và điều kiện áp dụng. Chủ dự án đã chấp thuận sửa diễn đạt cụ thể ở B05. Trang Kiến thức không thay đổi Core/Luyện tập/Tự kiểm tra. Trạng thái này ghi công việc trên **Draft PR #797**, không phải website đã phát hành.

| Chương | Bài SGK | Trạng thái học liệu mới | Nội dung cần đóng trước khi ghi READY |
|---|---|---|---|
| I — Mệnh đề và tập hợp | B01–B02 | **R01 đã biên soạn**, owner chấp thuận **mẫu UX B** | S1/Q18 cho Delta C, browser/MathJax/SVG, Q15/Q16 regression |
| II — Bất phương trình bậc nhất hai ẩn | B03–B04 | **R01 đã biên soạn; OWNER_UX_PASS cả B03–B04** | S1/Q18 snapshot mới, browser 390/820/1440, keyboard/ARIA, QA hình |
| III — Hệ thức lượng trong tam giác | B05–B06 | **R01 đã biên soạn cả 2 bài**, A/B bốn tab, static/numeric guard PASS | Chủ dự án chưa nghiệm thu UX B05–B06, S1/Q18, browser AP1–AP5; nguồn Gemini B05 sai ánh xạ đã loại |
| IV — Vectơ | B07–B11 | **R02 đã biên soạn cả 5 bài**, QA tĩnh nguồn/ID/hình PASS | S1 từng outcome, Q18 snapshot, MathJax & browser, link rebase |
| V — Thống kê | B12–B14 | **R02 đã biên soạn cả 3 bài**, QA tĩnh PASS | S1/Q18, kiểm sai số/tứ phân vị, MathJax/mobile |
| VI — Hàm số và phương trình | B15–B18 | **R02 đã biên soạn cả 4 bài**, QA tĩnh PASS; thêm SVG parabol và bảng dấu | S1/Q18, QA SVG, nghiệm ngoại lai, browser |
| VII — Phương pháp tọa độ | B19–B22 | **R02 đã biên soạn cả 4 bài**, QA tĩnh PASS; SVG đường/pháp tuyến, khoảng cách, tròn, parabol | S1/Q18, QA trục và thông số hình, browser |
| VIII — Tổ hợp, nhị thức Newton | B23–B25 | **R02 đã biên soạn cả 3 bài**, QA tĩnh PASS; ba SVG mới | S1/Q18, kiểm chính xác điều kiện đếm, browser |
| IX — Xác suất cổ điển | B26–B27 | **R02 đã biên soạn cả 2 bài**, QA tĩnh PASS; giữ sơ đồ không gian mẫu/cây gốc | S1/Q18, xác nhận đồng khả năng và browser |

**Tổng cộng:** **27/27** bài đã có lời giảng ứng viên R01 (B01–B06) hoặc R02 (B07–B27) trên nhánh nghiên cứu; **21/21 bản R02 QA tĩnh PASS** khi đối chiếu nguồn chính: 106 First Try ID, 102 HELP ID, 26 figure và công thức source delimiter/HTML details cân bằng. **0/27** bài trong đợt này được xác minh phát hành. B03–B04 Owner UX PASS; B05 có sửa câu diễn đạt Owner APPROVED. Các trường hợp đó không tự thành Q18 PASS, CONTENT_READY, AP/P2 PASS hoặc quyền merge/deploy.

### Bàn giao toàn bộ Bài 7–27 (không có HTML A/B mới)

- Nguồn R02 từng bài: `G10_B07_HYBRID_KNOWLEDGE_CANDIDATE_R02.md` đến `G10_B27_HYBRID_KNOWLEDGE_CANDIDATE_R02.md` (21 tệp trong thư mục này).
- [Bộ kiểm tra nguồn/ID/hình/Math](test-ux795-g10-full-knowledge-r03.cjs); [công cụ chỉnh văn bản](tools/g10-student-prose-cleanup-r02.js) và [chuyển thẻ tự mở](tools/g10-convert-collapsible-and-polish-r03.js).
- [Sổ QA toàn lớp và các cổng chưa đạt](G10_FULL_KNOWLEDGE_R02_QA_RECEIPT_20261109.md).
- SVG bổ sung được lưu trong `images/`; hình gốc còn tham chiếu `docs/assets/images/thpt` của repository.

### Bàn giao Chương III

- [B05 R01](G10_B05_HYBRID_KNOWLEDGE_CANDIDATE_R01.md) · [A/B B05](UX795_G10_B05_CONTINUOUS_NARRATIVE_AB_R01.html)
- [B06 R01](G10_B06_HYBRID_KNOWLEDGE_CANDIDATE_R01.md) · [A/B B06](UX795_G10_B06_CONTINUOUS_NARRATIVE_AB_R01.html)
- [Nguồn / outcome / đối chiếu hình / QA và Gemini B05 sai ánh xạ](G10_CHIII_B05_B06_SOURCE_OUTCOME_QA_R01_20261109.md)
- [Static/numeric smoke B05–B06](test-ux795-g10-chiii-pilot.cjs)

### Bàn giao Chương II

- [B03 R01](G10_B03_HYBRID_KNOWLEDGE_CANDIDATE_R01.md) · [A/B B03](UX795_G10_B03_CONTINUOUS_NARRATIVE_AB_R01.html)
- [B04 R01](G10_B04_HYBRID_KNOWLEDGE_CANDIDATE_R01.md) · [A/B B04](UX795_G10_B04_CONTINUOUS_NARRATIVE_AB_R01.html)
- [Source / 10 outcome / hình / QA ledger](G10_CHII_B03_B04_SOURCE_OUTCOME_QA_R01_20261109.md)
- [Source static & numerical smoke test](test-ux795-g10-chii-pilot.cjs)

**Ranh giới cần giữ:** Gemini/Notebook v1 được chọn lọc theo đúng quyết định chủ dự án; S1 vẫn quyết định phạm vi và toán. Văn bản/hình mới là DELTA_C, không tự chuyển PASS của nguồn canonical cũ sang snapshot mới. Q15 mỗi item một ID canonical; bản thử không cho phép thay ngân hàng hoặc đáp án đã kiểm soát khi chưa đồng bộ version. Không ghi Mastery từ First Try hoặc Practice, không động tới RD1/Final Submit, Golden UI, Gemini, Firebase, hoặc dữ liệu học sinh. Chỉ merge/deploy khi chủ dự án phê duyệt riêng, QA cuối cùng trên HEAD thực và các cổng đạt.

**Checkpoint:** G10_27_OF_27_SOURCE_DRAFTED · R02_21_OF_21_STATIC_SOURCE_QA_PASS · OWNER_B03_B04_UX_PASS · B05_TEXT_APPROVED · Q18_BROWSER_LINK_REBASE_HOLD · NO_MERGE_DEPLOY.
