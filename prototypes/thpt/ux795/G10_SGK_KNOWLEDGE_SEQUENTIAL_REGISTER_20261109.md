# UX795 · Toán 10 SGK Knowledge · sổ theo dõi tuần tự

**Quyết định chủ dự án:** tiến hành từ Toán 10 theo thứ tự SGK, hoàn thiện theo chương, dùng mô hình B đã được owner chấp thuận về UX. Một hàng **4 tab cấp 1**, không thêm tab cấp 2 trước khi hoàn thiện toàn bộ SGK. Trang Kiến thức không thay đổi Core/Luyện tập/Tự kiểm tra độc lập. Trạng thái dưới đây chỉ ghi việc trên **Draft PR #797**, không phải trạng thái production.

| Chương | Bài SGK | Trạng thái học liệu mới | Nội dung cần đóng trước khi ghi READY |
|---|---|---|---|
| I — Mệnh đề và tập hợp | B01–B02 | **R01 đã biên soạn**, owner chấp thuận **mẫu UX B** | S1/Q18 cho Delta C, browser/MathJax/SVG, Q15/Q16 regression |
| II — Bất phương trình bậc nhất hai ẩn | B03–B04 | **R01 đã biên soạn cả 2 bài**; A/B nguồn khóa, guard nguồn và spot-check phép toán PASS | S1/Q18 cho snapshot mới, browser 390/820/1440, keyboard/ARIA, xác minh hình đúng trạng thái |
| III — Hệ thức lượng trong tam giác | B05–B06 | **Chưa mở biên soạn mới**, xếp sau ChII | Khai thác Gemini/NotebookLM v1, audit S1 rồi xây cả chương |
| IV — Vectơ | B07–B11 | Chưa mở | Chờ ChIII |
| V | B12–B14 | Chưa mở | Chờ ChIV |
| VI | B15–B18 | Chưa mở | Chờ ChV |
| VII | B19–B22 | Chưa mở | Chờ ChVI |
| VIII | B23–B25 | Chưa mở | Chờ ChVII |
| IX — Tính xác suất theo định nghĩa cổ điển | B26–B27 | Chưa mở | Chờ ChVIII |

**Tổng cộng:** **4/27** bài đã có lời giảng R01 trên nhánh nghiên cứu; **0/27** bài mới được xác minh là phát hành. “Đã biên soạn” không tự động thành “đã review”, “CONTENT_READY” hoặc “đã phát hành”.

### Bàn giao Chương II

- [B03 R01](G10_B03_HYBRID_KNOWLEDGE_CANDIDATE_R01.md) · [A/B B03](UX795_G10_B03_CONTINUOUS_NARRATIVE_AB_R01.html)
- [B04 R01](G10_B04_HYBRID_KNOWLEDGE_CANDIDATE_R01.md) · [A/B B04](UX795_G10_B04_CONTINUOUS_NARRATIVE_AB_R01.html)
- [Source / 10 outcome / hình / QA ledger](G10_CHII_B03_B04_SOURCE_OUTCOME_QA_R01_20261109.md)
- [Source static & numerical smoke test](test-ux795-g10-chii-pilot.cjs)

**Ranh giới cần giữ:** Gemini/Notebook v1 được chọn lọc theo đúng quyết định chủ dự án; S1 vẫn quyết định phạm vi và toán. Văn bản/hình mới là DELTA_C, không tự chuyển PASS của nguồn canonical cũ sang snapshot mới. Q15 mỗi item một ID canonical; bản thử không cho phép thay ngân hàng hoặc đáp án đã kiểm soát khi chưa đồng bộ version. Không ghi Mastery từ First Try hoặc Practice, không động tới RD1/Final Submit, Golden UI, Gemini, Firebase, hoặc dữ liệu học sinh. Chỉ merge/deploy khi chủ dự án phê duyệt riêng, QA cuối cùng trên HEAD thực và các cổng đạt.

**Checkpoint:** G10_04_OF_27_R01_DRAFTED · CHI_AND_CHII_DRAFTS_EXIST · OWNER_B_MODEL_UX_PASS · Q18_AND_REAL_BROWSER_HOLD · NO_MERGE_DEPLOY.
