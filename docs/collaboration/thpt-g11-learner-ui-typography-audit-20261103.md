# SGK Toán 11 · Kiểm toán giao diện tiêu đề và công thức · 03/11/2026

**Phạm vi:** 30 bài đã phát hành B01–B30 (Chương I–VIII), đồng thời đọc riêng B31–B33 của Draft RELEASE #727. Đây là kiểm toán **AP1/AP2 (DELTA_A_UI)** thuộc nhánh RELEASE; KHÔNG phải Academic/PED re-review, không thay câu/đáp án/rubric, không tự cấp P1/P2.

## Phát hiện theo bằng chứng trang học sinh

| Khu vực | Hiện trạng xác minh trong Markdown student-facing | Hướng xử lý RELEASE |
|---|---|---|
| B18 | Tiểu mục `2A` cùng cấp mục `2`, hơn 80 biểu thức inline code, số mũ dạng dấu `^` ở ví dụ/D6 | Hiển thị cấp con `1.2.1`; chuyển math code sang `\\(...\\)`/MathJax và dấu mũ văn bản sang `<sup>`; không thay định nghĩa hay tính toán |
| B22–B27 | Sáu bài có `4B` giữa `4` và `5`; nhiều công thức hình học xuất hiện dạng văn bản thông thường | Chuyển `4B` thành cấp con `1.4.1`, các tiểu mục còn lại `1.1–1.7`. Công thức hình học plain-text phải được xem thêm bằng browser; không diễn giải lại nguồn |
| B03–B04, B08–B09, B16, B18–B21 | Nhiều công thức dùng dấu backtick mặc dù bản chất là toán, MathJax không tự xử lý bên trong code | Dàn trang MathJax cho các toán thức hiển thị (9 bài); giữ `item_id` và mã VD/EX nguyên dạng code |
| B01–B04, B09, B15–B21, B22–B30 | Tiểu mục đánh số `1`, `§1`, `2A`, `4B` không đồng nhất với mục cha `1` và các mục lớn `2–4` | Đánh số theo cấp thực (`1.1`, `1.2`, ...; tiểu mục con `1.2.1`/`1.4.1`), không đổi thứ tự nội dung |
| B05/B07/B15/B18–B21/B28 | Một số dấu mũ raw `^` nằm trong câu hoặc HTML D6, không nằm trong MathJax | Chỉ thay cách hiển thị số mũ, bảo toàn cơ số/số mũ/điều kiện |
| B28–B30 | Dấu §1–§6 ở tiêu đề và công thức xác suất chữ thường; ảnh chủ dự án là ảnh bị cắt chiều rộng, chưa đủ để khẳng định trang thật tràn ngang | Chuẩn hóa cấu trúc mục; kiểm tra responsive trên 390/820/1440 px và hiển thị MathJax trong QA |
| B31–B33 (chưa phát hành, PR #727) | Nhiều biểu thức toán hiển thị dạng `^`, D1/D2 nguồn đầy đủ nhưng chưa qua audit AP2 typography mới | **HOLD** PR #727; phải áp dụng cùng tiêu chí trình bày, reconcile main mới, chạy lại 4/4 exact-head CI; không sửa academic source |

## An toàn nguồn và các giới hạn

- Bản sửa chỉ chạm `docs/thpt-preview/sgk/lop-11/...` của 30 bài và các bài kiểm thử/báo cáo RELEASE; tất cả bản gốc AUTHORING, source/receipt Git blob, D3 canonical, Written/Anchor, JSON tự kiểm tra, private RD1 và Firebase đều không thay.
- Đổi ký hiệu biểu diễn `a^(−n)` hoặc `a^{m/n}` chỉ thay cách dàn trang thành lũy thừa có số mũ đặt đúng vị trí; phép toán, điều kiện và giá trị giữ nguyên. Chuyển `sin`, `cos`, `log`, `√`, chỉ số dưới sang cú pháp MathJax tương ứng; cần nhìn trực tiếp bản HTML để kết luận AP2.
- Kiểm toán tĩnh không thể xác nhận bản dựng hiển thị toàn bộ công thức đúng trên từng thiết bị; không coi green CI là chứng cứ đủ cho nghiệm thu thực tế. Cần AP2 MathJax render check + ảnh 390/820/1440 và mở rộng sang các trang Core/Practice, thư viện Written, Tự kiểm tra nếu phát hiện lệch.
- Nếu công thức gốc/giải thích toán sai hoặc bản trình bày không thể chuyển đổi chắc chắn, ghi `AUTHORING_DEFECT` (Qxx, bài/outcome/item, chứng cứ) và chuyển đúng AUTHORING; RELEASE không tự làm DELTA_C.
- SGK Toán 11 có 9 chương cùng gói bổ sung Tập Hai pp99–109; kiểm toán này không cấp PASS cho ChIX, phần bổ sung, hay Chuyên đề.

**Checkpoint:** `RELEASE_UI_AUDIT_CANDIDATE`; blockers `AP1_AP2_BROWSER_VISUAL_QA`, `AP2_MATH_RENDER`, `CHIX_SOURCE_LOCK_REBASE`; tiếp theo chạy QA trên exact HEAD, kiểm tra mọi bài có công thức, đóng các lỗi còn lại hoặc HOLD đúng phần.
