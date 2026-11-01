# G11 Toán 11 KNTT Chương V B15–17 — QA học liệu và cổng review sư phạm

**Ngày:** 01/11/2026 · **Trạng thái:** `AUTHOR_DRAFT_R01_NOT_REVIEW_READY` · **Không Academic PASS, không PED PASS, không CONTENT_READY, không merge/deploy/Mastery.**
**Chuẩn bắt buộc:** Issue #691: Self-Learning Math vốn có mục tiêu từ chưa biết → hiểu bản chất → giải được → tự vận dụng. Đây KHÔNG phải nguyên tắc mới, mà là cổng kiểm chứng sư phạm cho mục đích gốc. Giữ Dual Complete Learning Paths THPT v2.0, Issue #675 SGK-first, protocol 06 và delta 07.

## 1. Danh sách nguồn và kiểm kê

- **D1/RD0 + D2:** `G11_CHV_B15_B17_S1_RD0_D1_D2_AUTHORING_R00_20261101.md`: 17 outcomes, 3 bài B15–B17, 12 ví dụ, dẫn nhập WHY/WHAT, giải thích các điều kiện, 3 hình SVG đúng vị trí với mô tả đọc hình.
- **D3:** `G11_CHV_B15_B17_D3_PUBLIC_CANONICAL_CANDIDATES_R01_20261101.md`: 30 Core/Practice/Application candidates, 10 bài B15 + 10 bài B16 + 10 bài B17; 30 ID duy nhất.
- **D4 và D6:** `G11_CHV_B15_B17_D4_WRITTEN_D6_HELP_R01_20261101.md`: 6 Written độc lập với 3 Anchor *tags* (không ngân hàng riêng), mỗi bài rubric 4 tiêu chí × 1 điểm; 6 HELP_ID với 5 bước, return về câu public canonical.
- **D5:** `svg/FIG-G11-B15-01_R01.svg`, `B16-01_R01.svg`, `B17-01_R01.svg` (đường dãy số tiệm về 0; lỗ giới hạn tại điểm; gián đoạn do giá trị không khớp xu hướng). Cả 3 có `title`, `desc`, đường trục/điểm, giải thích ý nghĩa ngay tại D1.
- **PRIVATE RD1:** 17 câu cho đúng 17 outcomes, mỗi câu có lời giải và rubric /4, trong `Math App/THPT_Academic_Review_Archive/Temp_THPT_G11_CHV_B15_B17_PRIVATE_RD0_RD1_AUTHOR_CANDIDATE_R00_20261101.md`. SHA256 **`c8fd2ad5e082be0e0346f095d4e9a3d4cedce152e459dcb683fe1b20a77dac09`**, **15.608 bytes**. Bản trước đó đã mang nhãn `_SUPERSEDED_`. Giữ câu, đáp án, rubric kín ngoài GitHub.
- **Tổng:** 30 formative + 6 Written = 36 public; 17 RD1 private = **53 canonical candidate items**, ngoài 12 ví dụ D2. **SGK_CHAPTER_READINESS** không trùng **TOPIC_READINESS**.

## 2. Tình trạng kiểm thử tác giả

**Kiểm được:** 30/30 D3 ID riêng; 6/6 Written ID riêng, 6 rubric × 4; 6/6 HELP; 3/3 hình có title/desc và được tham chiếu trong D1; 17/17 RD1 ID riêng và 17 rubric × 4; **16/16** kiểm tra đại số/giới hạn đại diện bằng SymPy khớp đáp án. Đây là QA một phần, **không phải 53/53 bài đã được kiểm toán độc lập**.

**Còn HOLD:** kiểm toán toàn bộ 53 item và lời giải; test hình SVG trên desktop/mobile; rà trùng cấu trúc và mức độ tiếp xúc RD1 với 36 public + SGK/SBT; kiểm chứng trực tiếp S1 PDF gốc và số trang in; PED1–PED6 từng outcome; NotebookLM full-chapter; source-lock/restore.

**Trang SGK tham chiếu (scan công khai, chờ gốc owner):** B15 104–110, B16 111–118, B17 119–122, cuối chương V p123. Hoạt động thực hành trải nghiệm sau đó không tự cộng vào Core.
**SBT CHƯA XÁC NHẬN từ S1 gốc.** Chỉ mục lời giải công khai thứ cấp ghi B15 p77–78, B16 p83, B17 p86, cuối chương p87–90. **Mâu thuẫn cần làm rõ:** báo cáo chủ dự án ChIV trước đó báo SBT ChIV tới p95, chồng lên vùng của ChV theo chỉ mục này. Không thể cùng chính xác trong một bản SBT liên tiếp; phải yêu cầu NotebookLM đối chiếu PDF SBT gốc, ghi đúng tên bản in/trang in, kiểm tra lại chỉ dẫn trích dẫn của ChIV nếu cần. Không tự suy điều này là lỗi toán hay bắt review lại ChIV khi chưa có chứng cứ.

## 3. Bắt buộc NotebookLM review **khả năng truyền đạt kiến thức**

**Yêu cầu hai verdict riêng:** `ACADEMIC_CHAPTER_V=PASS/FIX/BLOCK` và `PEDAGOGICAL_SELF_LEARNING_READY=PASS/FIX/BLOCK`. Academic correctness/coverage PASS **không** tự chứng minh học liệu dạy được học sinh.

| Kiểm toán | Câu hỏi NotebookLM phải trả lời theo từng bài/outcome | FAIL nếu |
|---|---|---|
| PED1 WHY | Tại sao nảy sinh giới hạn/giới hạn một phía/tính liên tục? Vấn đề gì cần giải quyết? | Bắt đầu bằng công thức, không có động cơ |
| PED2 BRIDGE | Tiền đề học ở đâu, khái niệm mới có được giải thích bằng lời không? | Thuật ngữ không giải thích |
| PED3 WHAT | Học sinh nói được *nó là gì, vì sao tồn tại và khác gì khái niệm cũ* trước khi tính? | Chỉ còn dấu/ký hiệu/thuật toán |
| PED4 VISUAL | Hình/bảng có giúp học sinh **phát hiện** quan hệ, nhãn đúng và cách đọc rõ không? | Hình trang trí hoặc thiếu điều kiện |
| PED5 MODEL | Lời giải có nói vì sao chọn phép biến đổi, giả thiết nào bảo đảm đúng, kiểm tra lại bằng cách nào? | Chỉ thay số/tính đáp số |
| PED6 TRY & REPAIR | Có một bước thử độc lập trước Practice, cùng đường quay lại HELP/kiến thức nền? | Học sinh phải đoán/nhảy cóc |

**Reviewer bắt buộc:** lập verdict theo B15/B16/B17, 17 outcomes, 53 canonical item IDs, 12 ví dụ, 3 hình, 6 HELP; phân tích độ sâu, tính độc lập RD1, đúng điều kiện và rubric; cung cấp `SOURCE_RECEIPT` SGK/SBT gốc và bản đối chiếu mâu thuẫn trang; P0/P1/P2 + MINIMAL_DELTA; ghi chi tiết lỗi sư phạm nếu có, không chỉ nhận xét “dễ hiểu”.

**Chưa gửi NotebookLM:** Bản cuối cần đúng **hai Temp_*.md thật** (một public D1–D6 có XML SVG, một private RD0/RD1); link tải riêng và prompt 3–6 câu theo 06. Chỉ sau khi tự QA, xác minh scope S1 và anti-exposure đầy đủ mới mở review một lượt trọn chương. Không gửi JSON hoặc review từng bài rời rạc.

## 4. Trật tự làm việc chủ dự án

Tiếp tục toàn chương SGK 10→11→12 theo thứ tự, ChV hiện là việc active. **Không quay lại sửa Toán 10 hoặc những trang Toán 11 đã phát hành** cho đến khi phát triển chương trình theo kế hoạch hoàn tất; kiểm toán hồi tố sau, theo Issue #691. Không thay đổi Golden UI, THCS, learner progress, Firebase/Gemini, browser keys, scoring hay Mastery.
