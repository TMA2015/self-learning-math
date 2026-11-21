# Bài 24 — sửa chữ giao diện theo ảnh chủ dự án · Q18 R03 · 21/11/2026

**RECEIPT_ID:** G10-CHVIII-B24-GOLDEN-COPY-UI-Q18-R03-20261121
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0, Golden B22–B23 (không tạo chuẩn mới)
**LESSON_ID:** G10-SGK-CHVIII-B24
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-viii/bai-24.md`
**R03_PREVIOUS_SOURCE_BLOB:** `d4850e3726a092f0f2cd79631bade7e59e53b682`
**R03_CORRECTED_SOURCE_BLOB:** `31aca301dafaf86403873e324b5bce7d4fa66a43`
**DELTA:** `DELTA_A_UI` — chỉ chữ hiển thị và nhãn mục; không thay nội dung toán, câu, đáp án, rubric
**OWNER_P2:** `OWNER_P2_RECHECK_PENDING`; không suy ra PASS từ CI
**PRIOR_RECEIPT:** `G10_CHVIII_B24_OWNER_P2_GOLDEN_UI_Q18_R02_20261121.md`, giữ bất biến
**MASTER_ISSUE:** #795 / SGK-TAB-PLACEMENT-01

## Sửa theo ảnh thực tế / G0–G2

1. Bỏ nguyên văn một đoạn dẫn **“Lộ trình chính thức của SGK”** dưới tab Kiến thức SGK. Kiến thức 2.1–2.6 và năm mục S1 được giữ nguyên.
2. Đổi tiêu đề **“2.5. Sử dụng máy tính cầm tay (SGK tr. 70)”** → **“2.5. Sử dụng máy tính cầm tay”**. Nội dung thao tác nPr/nCr và công thức không đổi.
3. Đổi đúng **3 nhãn** trong tab Ví dụ **“Vì sao chọn cách này?”** → **“Phân tích:”**, giữ y nguyên phần văn bản đứng sau nhãn. Tất cả ví dụ, khung Golden và lời giải vẫn nguyên.

**Source parity:** Git blob `d4850e3726a092f0f2cd79631bade7e59e53b682` → `31aca301dafaf86403873e324b5bce7d4fa66a43`. Đã so trước/sau: toàn bộ First Try IDs, HELP/D6 IDs, các khung đáp án và biểu thức MathJax giữ nguyên; bốn Golden tab và 5 ví dụ dạng card không đổi. Không đổi Q15/Q16, Final Submit, Firebase, Mastery, JS/CSS, hình hay Core. G2 affected UI source `P0=0 P1=0`; còn QA release hiện hữu trên HEAD và owner P2.
