# RELEASE QA — Phạm vi Delta C Kiến thức Toán 10 B01–B27

**Ngày:** 10/11/2026 · **PR:** [#797](https://github.com/TMA2015/self-learning-math/pull/797) · **Trạng thái:** PHÂN LOẠI THAY ĐỔI, KHÔNG PHẢI Academic/PED verdict.

Đã đối chiếu trực tiếp từng file Markdown trên hai nguồn GitHub: `main cbd3c86ca8c41f13baf16b37418a89dee8981496` và ứng viên `7c25959a87aa1aea38ba2c4b329f5b446052978c`. SHA từng bài trong [bảng tiếp nhận R01](UX795_G10_KNOWLEDGE_RELEASE_SOURCE_INTAKE_R01_20261110.md). Bất kể thay đổi nào về nguồn sau thời điểm đối chiếu phải so lại bản chịu ảnh hưởng.

**Kết quả điều kiện kỹ thuật:** 27/27 tập First Try ID bất biến, 27/27 tập HELP ID bất biến so với `main`. Không dùng bảng này để kết luận toán đúng/sai: nội dung giảng, ví dụ, hình và cú pháp công thức thay đổi thực chất, cần phản biện phần Delta C.

| Bài | First Try ID | HELP ID | TeX token (cũ → mới) | Figure HTML (cũ → mới) | ID parity |
|---|---:|---:|---:|---:|---|
| B01 | 5 | 2 | 0 → 167 | 1 → 1 | PASS |
| B02 | 6 | 3 | 0 → 177 | 1 → 2 | PASS |
| B03 | 5 | 2 | 92 → 190 | 1 → 1 | PASS |
| B04 | 5 | 2 | 54 → 148 | 1 → 1 | PASS |
| B05 | 5 | 2 | 7 → 230 | 1 → 1 | PASS |
| B06 | 5 | 2 | 12 → 240 | 1 → 2 | PASS |
| B07 | 5 | 2 | 17 → 14 | 1 → 1 | PASS |
| B08 | 5 | 2 | 27 → 28 | 1 → 1 | PASS |
| B09 | 5 | 2 | 37 → 39 | 1 → 1 | PASS |
| B10 | 6 | 3 | 24 → 30 | 2 → 2 | PASS |
| B11 | 5 | 3 | 25 → 27 | 2 → 2 | PASS |
| B12 | 4 | 2 | 114 → 102 | 1 → 1 | PASS |
| B13 | 5 | 2 | 50 → 46 | 1 → 1 | PASS |
| B14 | 5 | 2 | 53 → 49 | 1 → 1 | PASS |
| B15 | 5 | 5 | 200 → 206 | 1 → 1 | PASS |
| B16 | 5 | 5 | 138 → 152 | 1 → 2 | PASS |
| B17 | 5 | 5 | 200 → 224 | 0 → 1 | PASS |
| B18 | 4 | 4 | 115 → 126 | 1 → 1 | PASS |
| B19 | 7 | 9 | 36 → 56 | 0 → 1 | PASS |
| B20 | 5 | 7 | 25 → 32 | 0 → 1 | PASS |
| B21 | 5 | 7 | 30 → 48 | 0 → 1 | PASS |
| B22 | 8 | 10 | 43 → 70 | 2 → 3 | PASS |
| B23 | 4 | 6 | 2 → 8 | 0 → 1 | PASS |
| B24 | 4 | 6 | 10 → 14 | 0 → 1 | PASS |
| B25 | 4 | 6 | 16 → 42 | 0 → 1 | PASS |
| B26 | 5 | 7 | 19 → 29 | 1 → 1 | PASS |
| B27 | 5 | 7 | 18 → 32 | 1 → 1 | PASS |

**Tổng:** 137 lượt First Try, 115 HELP; 23 → 34 thẻ figure; 1364 → 2526 đoạn biểu thức TeX trong source Markdown.

**Lưu ý khi đọc số lượng:** Source cũ có những công thức dưới dạng chữ/HTML/backtick, source mới đưa sang MathJax; số lượng đoạn TeX là chỉ báo tác động trình bày, **không phải số định lý/công thức toán khác nhau**, không phản ánh đúng/sai. Thẻ figure tăng cũng không tự chứng minh hình đúng hệ điều kiện.

## Đối tượng cần kiểm nguồn SGK/SBT S1 (đúng phần đã thay đổi)

1. Mỗi bài/outcome bị ảnh hưởng: giải thích mới, điều kiện áp dụng, ví dụ có suy luận, khung kết luận, diễn đạt có làm sai lệch ý SGK không. Không review lại ngân hàng câu bất biến chỉ vì đổi giao diện.
2. Hình và tình huống mới: ưu tiên B02, B05–B06, B16–B17, B19–B22 và B23–B25; xác minh hình và nhãn khớp định nghĩa/toán/số liệu/hệ điều kiện ngay bên cạnh. B26–B27 kiểm giả thiết đồng khả năng/xác suất. Không suy các bài khác được PASS.
3. Q14/PED6 giữ ít nhất một Tự thử nhỏ trước Core, chỉ lộ đối chiếu khi học sinh tự mở, bảo vệ đường khắc phục. Q15 cùng item_id canonical, Q16 không kích hoạt chấm chính thức/Mastery/RD1 trong Knowledge.
4. Reviewer học thuật độc lập trả verdict Academic/PED, SOURCE_RECEIPT gắn **đúng Git blob SHA và lesson/outcome**, phân loại P0/P1/P2, MINIMAL_DELTA; khi sửa chỉ review phần ảnh hưởng.
5. RELEASE chỉ thay source locks theo receipt hợp lệ, sync với `main` đã có PR #800 (Đối chiếu / Lời giải / Vận dụng), chạy QA final-head và deploy theo quyền chủ dự án **đã cấp có điều kiện**.

**STATE:** `RELEASE_DELTA_C_IMPACT_MAPPED / ID_PARITY_27_PASS / ACADEMIC_PED_Q18_HOLD / NO_MERGE_DEPLOY`.
