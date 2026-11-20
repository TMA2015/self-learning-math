# G10 B18 · Phương trình quy về phương trình bậc hai — RELEASE Q18 owner self-QA R01 (20/11/2026)

**RECEIPT_ID:** G10-CHVI-B18-OWNER-SELF-QA-R01-20261120  
**STANDARD_ID:** SLM-THPT-QUALITY-ONE  
**STANDARD_VERSION:** 3.2.0 · Q01–Q18 (canonical main, PR #899)  
**LESSON_ID:** G10-B18 · **OUTCOMES:** B18_OUT_01..B18_OUT_04  
**MODE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` / `AUTHOR_SELF_VERIFIED` — **không phải** NotebookLM/independent reviewer  
**OWNER_AUTHORIZATION:** Chủ dự án 20/11/2026 yêu cầu tiếp tục phát hành ngay bài sau B17; cấm chạy kiểm thử toàn site, dùng scoped QA đã triển khai PR #926.  
**RELEASE_SCOPE:** chỉ SGK Toán 10, Chương VI, B18 Knowledge; không thay Core/Practice, bài khác, đánh giá hay runtime.  
**MAIN_BASE_COMMIT:** `69f3c46ebbc592732e8fd0f22ad2f07a7e9cd2a2`  
**BASELINE_PUBLISHED_B18_SOURCE_BLOB:** `91d22f1af8814ed639ada3ee1c9dae2e9501c4c0`  
**CANDIDATE_B18_SOURCE_BLOB:** `98059f63097812bcdf90bed239f79e7521d8f058`  
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-vi/bai-18.md` (một nguồn canonical; Git history/receipt không tạo bản học liệu song song).  
**DELTA:** `DELTA_C_ACADEMIC_MATERIAL` cho lời giảng/giải thích bản chất, hai đề Tự thử bị thiếu và D6 đặc thù; `DELTA_A_UI` cho nhãn Vận dụng/Đối chiếu và hướng dẫn đọc SVG. **Không đổi** điều kiện toán, đáp án, rubric, dữ liệu assessment, item IDs.  
**Q18_CLEARANCE:** `Q18_OWNER_SELF_VERIFIED_ENRICHMENT`, source-scoped, không suy rộng thành reviewer PASS hay P2.

## G0 — S1 và gốc toán học

Nguồn gốc đã kiểm thực trong lịch sử (không tự nhận tái mở PDF lượt này): SGK Toán 10 KNTT **Tập 2**, trang in **25–27**, PDF 1-based **26–28**; SBT cùng tập trang in **19–21**. Hồ sơ trực tiếp `UX795_G10_CHVI_S1_PRINTED_PAGE_SCOPE_R01_20261110.md`; SGK scan SHA-256 `ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6`, SBT scan SHA-256 `3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7`. Nguồn được phát hành B18 trước lượt này và ký ChVI S1/Q18 tại `G10_CHVI_B15_B18_S1_Q18_EDITORIAL_RECEIPT_20261113.md`, UX follow-on `G10_CHVI_B15_B18_EXAMPLE_UX_Q18_DELTA_RECEIPT_20261113.md`. Hai mục SGK đúng: **2.1.** `sqrt(A)=sqrt(B)`; **2.2.** `sqrt(A)=B`. Không tự bổ sung mục Core thứ ba.

## G1/G2 — kiểm từng outcome và First Try/HELP

| Outcome | Item `data-thpt-first-try-id` | Toán nguồn và self-check | Sửa học sinh nhìn thấy |
| --- | --- | --- | --- |
| **B18_OUT_01** | `THPT-G10-CHVI-TRY16` / HELP `HELP-G10-CHVI-TRY16` | `sqrt(x+1)=sqrt(2x-2)`, miền `x≥1`; bình phương `x+1=2x-2` cho **x=3**, kiểm hai vế `2` | Giữ Vận dụng trước Đối chiếu; giải thích vì sao hai căn phải cùng xác định; D6 hỏi rõ **hai miền căn** |
| **B18_OUT_02** | `THPT-G10-B18-C01` / HELP `HELP-G10-CHVI-TRY17` | `sqrt(x+5)=x-1`, điều kiện `x≥1`, ứng viên **4, −1**, loại `−1` vì vế phải âm, kiểm `sqrt(9)=3` | **Khôi phục đề bị thiếu** trước đáp án đã có; phân biệt điều kiện và biến đổi; D6 chẩn đoán sai dấu `x-1` |
| **B18_OUT_03** | `THPT-G10-CHVI-TRY18` / HELP `HELP-G10-CHVI-TRY18` | `sqrt(2x+3)=x`, miền `x≥0`, ứng viên **3, −1**, loại `−1`, `sqrt(9)=3` | **Khôi phục đề bị thiếu** trước Đối chiếu; chỉ rõ nghiệm ngoại lai do mất thông tin dấu; D6 bắt thử từng ứng viên |
| **B18_OUT_04** | `THPT-G10-CHVI-TRY19` / HELP `HELP-G10-CHVI-TRY19` | Thang `13m`, khoảng chân `5m`, cao `h>0`, `sqrt(h²+25)=13` → `h=12m`; nghiệm âm không phải độ dài | Viết rõ cạnh huyền, điều kiện vật lí và đơn vị; D6 phân biệt cạnh `13`/cạnh `5` |

**Kiểm toán toàn bài:** 4 tab Golden cố định, 4 original canonical First Try, 4 original HELP, 1 SVG `THPT_G10_CHVI_B18_RADICAL_FLOW_D5_R03.svg`, **10 display TeX gốc** và **170 biểu thức TeX** gốc đều còn nguyên (173 trong candidate vì khôi phục đề), 4 HTML answer bodies **byte-identical**, ID/outcome/figure **byte-identical**. Các đề Tự thử thêm đúng lời giải canonical đã có, không phát sinh `item_id` mới. Xóa bốn lời nhắc tiền đề chung chung; mạch giải thích WHY → điều kiện → phép bình phương → thử gốc; 4 HELP có chẩn đoán lỗi khác nhau thay cho boilerplate. Nhãn Vận dụng và Đối chiếu thống nhất, không ép em phải đọc lời giải trước khi tự thử.

**Toán ví dụ giữ nguyên:** Hai căn `sqrt(x²−3x+4)=sqrt(x+2)` cho `2±sqrt2` hợp miền; một căn `sqrt(2x+3)=x−1` cho `2+sqrt6` hợp điều kiện; ví dụ `sqrt(x+1)=x−1` chỉ `x=3`; hai căn `sqrt(x²+7x+11)=sqrt(x+3)` chỉ `x=−2`; bài hình vuông góc `sqrt(x²+16)=2x−1` chỉ `x=3`. Bài hai người đi đến `M`: `0≤x≤8`, `sqrt(x²+9)/5=(8−x)/4` → `(x−4)(9x−364)=0`; chỉ `x=4` thuộc miền, cả hai cùng mất **1 giờ**. Kết luận không đổi với baseline.

**Q15:** không nhân bản item/key/rubric; không đổi vị trí các đáp án original; `THPT-G10-B18-C01` là item canonical dùng lại. Core/Practice/Written giữ một nguồn.
**Q16:** vẫn Đối chiếu tự mở (mặc định đóng), không có `Readiness` hoặc ghi `Mastery` từ trang Knowledge. Không chạm RD1, Final Submit, Firebase, dữ liệu học viên.
**Q17:** SGK Core và Luyện tập độc lập hiện hành; Topic 3 mục không thay; không suy SGK PASS thành Topic PASS.
**Q18:** snapshot R01 lock source theo Git blob, bảo toàn historical S1 receipt, lưu S1 provenance; `P0=0` `P1=0` sau G2 self-QA; chưa có independent reviewer verdict mới và chưa có owner device P2.

## G3–G5 RELEASE GATES / phạm vi QA

`SCOPED_LESSON` trên **đúng một** canonical `bai-18.md` + receipt và source test companion, không chạy 79 SGK, 93-step Roadmap hay 27-lesson UX795 browsers. Trước merge: scoped release QA source/Q16, browser B18 390/820/1440 AP1–AP5 (4 tabs, 4 TRY/4 D6, SVG/math, Đối chiếu đóng, font/overflow), source/receipt route. Sau merge: deploy job `deploy-scoped-lesson`, build cùng website chỉ để xuất bản, kiểm Q15/Q16/4-bank, 10/10 built MathJax display, W9 safety, Chromium B18 rồi `ghp-import` production. Nếu fail thì HOLD cụ thể, không bypass test. `gh-pages` mới chỉ là P1 kỹ thuật khi thực sự thấy file xuất bản khớp; `OWNER_P2` do chủ dự án nghiệm thu thiết bị thật.

**AUTHOR_SELF_QA_SIGNOFF:** B18 G0–G2 source checked as above, no P0/P1 in edited Knowledge scope; Q18 mode self-verified (not NotebookLM PASS).