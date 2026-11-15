# CĐ21 · Reviewer packet R03 · NotebookLM Academic/PED · 15/11/2026

**Đối tượng phản biện:** [CĐ21 R03 – nguồn học liệu đầy đủ](Temp_PLAN22_21_R03_LUYEN_TAP_TU_LUAN_GIAI_CO_LAP_LUAN_20261115.md) (`SOURCE_BLOB=9615cabe7c3b81d8c81d970a9dbf77d11bc04a33`).
**Hình minh họa học thuật:** `docs/assets/images/thpt/FIG-TOP21_TOTAL_PROBABILITY_30_70_TREE_WHITE_R01.svg` (`FIG_BLOB=03b94e7d1c60c0d410dc8f48c10e71b7a1cf540a`), ứng với *Ví dụ* tại Kiến thức 5, **không dùng dữ liệu câu Vận dụng 5**.
**Chuẩn nguồn:** `SLM-THPT-QUALITY-ONE v1.0` bản có hiệu lực trên main (Q01–Q18); đúng 5 THPT Permanent Sources v2.1 của NotebookLM. SGK/SBT KNTT Toán 12 Tập Hai Chương VI là khung outcome; Chuyên đề phải diễn giải đầy đủ và đủ độ sâu để tự học độc lập.

## Phạm vi học thuật thực sự thay đổi

- So với R01 (`0258f29a1ece0fd9d0c1772781878ce827282c24`), R03 tái biên tập **toàn bộ 8 phần Khám phá kiến thức và 8 ví dụ**, đồng bộ Đề bài/Lời giải.
- Di chuyển hình cây từ phần sau bài Vận dụng 5 sang phần ngay sau **Ví dụ 5** và đổi dữ liệu về X=30%, lỗi khi X=2%, Y=70%, lỗi khi Y=4%. Tổng lá lỗi là 0,034; bài Vận dụng 5 dùng bộ dữ liệu 1/4–3/4, 1/10–1/30 nên không lộ lời giải trước khi tự làm.
- Cả **8 lời giải Luyện tập và 3 lời giải tự luận** được tăng chiều sâu; giữ nguyên stems, 19 item IDs, đầu ra 8 Vận dụng, 3 rubric.
- Các câu đã được dùng ở phần Luyện tập chỉ được nhắc lại ở mục Tự kiểm tra như **bài tự ôn**, không phải kiểm tra độc lập. Không dùng chúng làm `TOPIC_READINESS` hoặc ghi Mastery.
- Một câu nguồn KNTT tổng quát ở cuối học liệu; các receipt/SHA/ID nội bộ không xuất hiện trong lời giảng học sinh.

## Tự kiểm toán (không thay phản biện độc lập)

- 40/40 phép tính liên quan đến ví dụ, Vận dụng, Luyện tập, Written và bốn lá của SVG được tính lại đúng.
- 8/8 Khám phá, 8/8 Ví dụ tự đủ đề/lời giải, 8/8 Vận dụng–Đối chiếu, 8/8 Practice–Lời giải, 3/3 Written–Lời giải và rubric.
- 19/19 item ID giữ nguyên, không nhân bản và 19/19 phần lời giải vẫn đóng theo `<details>`; 3 rubric giữ nội dung.
- Đã xác nhận SVG có `title`, `desc` và số liệu phù hợp. **Chưa kiểm tra website RELEASE/AP hoặc đánh giá bảo mật trên runtime.**

## Prompt phản biện NotebookLM (5 câu)

Hãy đánh giá **toàn bộ CĐ21 R03** theo từng mục Kiến thức 1–8, outcome TOP21-O01–O08, Vận dụng T01–T08, Luyện tập P01–P08 và Written W01–W03, dựa trên SGK/SBT KNTT Toán 12 Tập Hai Chương VI và đúng 5 Permanent Sources THPT v2.1. Ưu tiên kiểm tra người học chưa biết xác suất có điều kiện có thể tự khám phá bản chất trước công thức, hiểu rõ hướng điều kiện, theo được Ví dụ độc lập có Đề bài/Lời giải, áp dụng quy tắc nhân/toàn phần/Bayes và sửa lỗi thường gặp hay không. Kiểm tra tính toán, điều kiện (P(B)>0), tính độc lập, cách đọc sơ đồ cây và đặc biệt xác nhận **hình minh họa không tiết lộ lời giải Vận dụng 5**; xem cả chất lượng ba lời giải Written và rubric. Trả riêng Academic/PED verdict, `SOURCE_RECEIPT` khóa chính xác `SOURCE_BLOB=9615cabe7c3b81d8c81d970a9dbf77d11bc04a33`, danh sách P0/P1/P2 có định vị theo mục/outcome/item và `MINIMAL_DELTA`, không suy rộng PASS từ R01 hay chuyên đề khác. Phân biệt lỗi ảnh hưởng trực tiếp việc học với sai lệch dẫn nguồn hậu trường; không đặt trang/PDF/SHA trình bày ra học liệu học sinh hoặc tạo tiêu chuẩn mới.

## Trạng thái AUTHORING

`AUTHORING_R03_NEEDS_INDEPENDENT_REVIEW` · `Q15_LEGACY_G12_COLLISION_HOLD` · `Q16_PROTECTED_SELF_CHECK_NOT_IMPLEMENTED` · `CONTENT_READY=NO`.
Không tự nhận PASS, không tự sửa câu canonical khác, không merge/deploy.
