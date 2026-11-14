# G10 ChVII — AP2 hiển thị toán trong 25 mục Đối chiếu (14/11/2026)

**Nhiệm vụ RELEASE:** Tăng khả năng đọc và hiểu phép tính trong **25 lời giải Vận dụng tự mở Đối chiếu**, không tạo bài tập mới, không làm lộ đáp án trước khi người học tự mở. Đây là `DELTA_B_SOURCE_EQUIVALENT`, không phải một đợt thay đổi học thuật. Academic/PED PASS nguồn giảng R02 vẫn là bằng chứng riêng; trình bày tốt phải được kiểm bằng trình duyệt.

**Chứng cứ so sánh:** Đối chiếu nguyên văn từng dòng `Đáp án`/`Lý do` và hai bài ứng dụng B22 với nguồn bất biến ở commit `fb96ca34e3e4f2787177a5a3834253bda549253b`. Chuẩn hóa ký pháp hiển thị (ngoặc `\\(...\\)`, `\\vec{}`, `\\overrightarrow{}`, mũ, chỉ số, căn, trị tuyệt đối, mũi tên, chữ Hy Lạp) thu **48/48 dòng có cùng nội dung toán**. Trong đó **45 dòng được đổi cách hiển thị, ba dòng giữ nguyên**. Không thêm hoặc bớt bất kỳ bước giải nào.

| Bài | Source trước AP2 Đối chiếu (Git blob) | Source sau AP2 Đối chiếu (Git blob) | Số Đối chiếu | Dòng được kiểm |
| --- | --- | --- | ---: | ---: |
| B19 | `2be35615045fbd20278959e9cae814ae1814237d` | `d13d77fc8cc6ecd74de9a5639739cf41890d5d09` | 7 | 14 |
| B20 | `02734542234ef3a634ace63062893be727da8540` | `4b7fb55d5cd5c8a112b79984e52fca4379d66ec5` | 5 | 10 |
| B21 | `e12b5dce8178a44cddd1d82aea04e3d93a10d825` | `11897c2b2f0a44b53ffbb503b6f22336b049b7da` | 5 | 10 |
| B22 | `0e8d53abf7d64453e91704e813ca741645f7fef1` | `b955b1abe2d2a83644d31ac47a00aa6fbeb125a5` | 8 | 14 |

**Bảo toàn:** 25 canonical `item_id` / `outcome_id`, 33 HELP và toàn bộ nhãn lỗi, 9 ví dụ có lời giải, 8 hình khái niệm + 1 bản mobile, hai hình ứng dụng, bốn tab Golden. Câu hỏi và cách giải không đổi; Đối chiếu vẫn là `??? question` đóng mặc định; không đụng RD1, Final Submit, Mastery, Firebase, Gemini, THCS hoặc G11/G12.

**Kiểm chứng kỹ thuật cần đạt:** `scripts/test-g10-chvii-ap2-comparisons.cjs` đối chiếu từng dòng, cấm sửa bất kỳ dòng ngoài phạm vi, so sánh SHA nguồn. Chromium 390/820/1440 cần thực sự mở và đóng đủ 25 Đối chiếu, kiểm các công thức mới **render thành MathJax** bên trong khi mở và không xuất hiện ở phần đề trước khi mở. Chạy lại Q18/source, UX795 27 bài, R4 trên **HEAD cuối**.

**Giới hạn:** HELP giữ nguyên lời hướng dẫn, có chỗ vẫn ghi ký pháp Unicode; không tự nhận tất cả HELP đã được MathJax hóa. Không dùng reviewer NotebookLM để phản biện dung lượng, metadata hoặc SHA. PR #856 tiếp tục Draft / no merge / no deploy; P1 production mới và P2 thiết bị thực chưa nghiệm thu.