# G10 B08 · Hướng dẫn tìm Kiểm lỗi sau chuyển vị trí · Q18 R02 · 20/11/2026

**RECEIPT_ID:** G10-CHIV-B08-TAB4-KIEM-LOI-WAYFINDING-R02-20261120
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0 Q01–Q18, Golden R4
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-iv/bai-8.md`
**R02_PREVIOUS_SOURCE_BLOB:** `9e5c9227417484e3bbea4f0ba085ff844100f321`
**R02_CORRECTED_SOURCE_BLOB:** `24af9a4e2003eec8be8f1acef5836fa73ce8040c`
**DELTA:** `DELTA_A_UI` — chỉ bổ sung câu hướng dẫn tìm hai HELP đã có
**Q18_MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` trong affected UI scope; independent reviewer `NOT_CLAIMED`
**OWNER_P2:** `OWNER_P2_PENDING`, các snapshot nghiệm thu cũ bất biến
**MASTER_ISSUE:** #795

## G0–G2 · Scope và tự kiểm chứng

Sau 20/11 R01, B08 có 5 câu First Try, 2 HELP canonical đặt sau đúng Vận dụng ở `Khám phá kiến thức`, không còn lỗi tổng quát độc lập trong tab 4. Tab `Lỗi thường gặp` hiện chỉ chứa liên kết Học tiếp/footnote, khiến người học không biết tìm hướng dẫn ở đâu. Không tự bịa lỗi hoặc nhân đôi HELP. Thêm đúng một đoạn wayfinding dưới tiêu đề tab 4: tự thử → tự mở Đối chiếu → tự mở Kiểm lỗi tại Khám phá khi cần. Không thay lỗi/đáp án/rubric, không đổi SGK, math, ví dụ, First Try, SVG, Q15/Q16, Readiness/Mastery hay Core.

**Khóa bất biến:** 5 FirstTry: TRY06/07/08/09/10; 2 HELP: `HELP-G10-B08-01` và `HELP-G10-B08-02`, nhiều placement dùng chung; 4 Golden tabs. Toàn bộ nội dung trước tab4 **byte-identical**; 227 công thức/biểu thức LaTeX gốc giữ nguyên từng token; không xuất hiện thêm công thức. Mỗi HELP canonical một lần, không mở sẵn. **QA G2:** P0=0/P1=0 affected UI; không suy ra Academic/PED PASS mới của toàn bài.

**RELEASE G3–G5:** source SHA chain R01 → R02, scoped Golden/MathJax/Q15/Q16 Chromium 390/820/1440, exact push SHA, compiled gh-pages HTML P1; owner P2 sau phát hành. Không sửa các bài khác.
