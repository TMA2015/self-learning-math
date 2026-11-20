# G10 B22 — Chuyển HELP về Kiểm lỗi sau Vận dụng · Q18 R02 · 20/11/2026

**RECEIPT_ID:** G10-CHVII-B22-VAN-DUNG-KIEM-LOI-R02-20261120  
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0 Q01–Q18 + Golden R4, giữ quy trình G0–G5, không thêm chuẩn hoặc bộ test.  
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-vii/bai-22.md`  
**R02_PREVIOUS_SOURCE_BLOB:** `fa70c2b6d399e94f12bbeeb028a81252424a1879`  
**R02_CORRECTED_SOURCE_BLOB:** `463f1cc79861ed32a4e88283351bea947bc9282b`  
**Q18_SOURCE_CHAIN:** lịch sử R01 20/11/2026 kết thúc tại `fa70c2b6d399e94f12bbeeb028a81252424a1879`, không sửa receipt cũ hay snapshot Owner P2.  
**DELTA:** `DELTA_A_UI` cho chuyển vị trí + đổi tên 8 khung; `DELTA_C_ACADEMIC_MATERIAL` cho tác động trải nghiệm khắc phục theo bài (không sửa câu hỏi, nội dung năm bước, đáp án hay rubric).  
**OWNER_P2:** B22 snapshot P2 cũ bất biến; affected relocation đã tự kiểm chứng theo Q18 v3.2.0, bản mới chưa được owner P2 nghiệm thu.  
**ISSUE:** #795, audit B23→B01 HELP placement.

## G0 – nối chính xác bài Vận dụng với 1 HELP canonical

| Outcome / Vận dụng | ID HELP giữ nguyên | Vị trí mới |
|---|---|---|
| 1.2.1 Elip, tiêu điểm | HELP-G10-CHVII-TRY18 | dưới Đối chiếu 1.2.1 |
| 1.2.2 Hypebol, tiêu điểm | HELP-G10-CHVII-TRY19 | dưới Đối chiếu 1.2.2 |
| 1.2.3 Tiệm cận hypebol | HELP-G10-CHVII-TRY20 | dưới Đối chiếu 1.2.3 |
| 1.2.4 Parabol và định nghĩa | HELP-G10-CHVII-TRY21 | dưới Đối chiếu 1.2.4 |
| 1.2.5 Giao điểm conic | HELP-G10-CHVII-TRY22 | dưới Đối chiếu 1.2.5 |
| 1.2.6 Bề rộng parabol | HELP-G10-CHVII-TRY23 | dưới Đối chiếu 1.2.6 |
| 1.2.7 Mái nửa elip | HELP-G10-CHVII-ELLIPSE-TR01 | dưới Đối chiếu 1.2.7 |
| 1.2.8 Hai trạm tín hiệu | HELP-G10-CHVII-HYPERBOLA-TR01 | dưới Đối chiếu 1.2.8 |

## G1–G2 – nguyên vẹn toán, đổi đúng vị trí

- Mỗi khối HELP chính xác được chuyển khỏi tab lỗi sang dưới đúng **Vận dụng → Đối chiếu → Kiểm lỗi** trong Khám phá, mặc định đóng và chỉ tự mở. Không nhân đôi một ID.
- Tab **Lỗi thường gặp** chỉ giữ 2 D6 tổng quát đúng nghĩa: nhầm quan hệ c² elip/hypebol và lẫn quy ước tham số p. Số mục trình bày 4.1–4.2, không tạo thêm lỗi.
- Toàn bộ 8 câu hỏi/đáp án/lập luận, 8 HELP, 2 D6, 3 ví dụ, các hình và SVG, đề/nguồn học thuật, Q15/Q16, Final Submit, RD1, Mastery không đổi. Giao diện Golden CSS/JS và B19–B21 không thay.
- Thứ tự đọc: đề → học sinh tự thử → Đối chiếu tự mở → Kiểm lỗi đóng, theo đúng ý nghĩa tên khung.

**G2_AUTHOR_SELF_QA:** 8 First Try, 8 Kiểm lỗi trong Khám phá, 2 D6 trong Lỗi thường gặp, 8 Đối chiếu, 10 HELP IDs canonical không trùng. **Q18_OWNER_SELF_VERIFIED_ENRICHMENT** theo chuẩn v3.2.0 trên affected placement; không nhận reviewer PASS, owner P2 vẫn pending.

**G3–G5:** Dùng bộ kiểm hiện hữu trên HEAD, khóa R01→R02 và kiểm đủ 4 tab, đánh giá Q15/Q16, Android/iPad 390/820/1440; giữ nguyên P2 của source đã phát hành trước.

## Q18 affected-scope self-verification — 20/11/2026

Người kiểm: ChatGPT chủ biên xử lý RELEASE theo chỉ đạo trực tiếp mới nhất của owner; **không mạo danh NotebookLM/reviewer độc lập**. Đối chiếu source base SHA ở đầu receipt với candidate SHA thực: 8/8 HELP có **nội dung năm bước, đường dẫn và biểu thức toán nguyên vẹn** (đã so nội dung từng fold bỏ qua tên tip/vị trí và whitespace); 8/8 First Try ID và Đối chiếu không đổi; tập HELP_ID không mất/nhân bản, MathJax gốc không mất; bốn tab Golden giữ nguyên, hai D6 tổng quát ở tab lỗi không đổi. Tab Khám phá có đúng 8 fold Kiểm lỗi, mặc định đóng, ngay sau Vận dụng tương ứng; tab lỗi không còn HELP chuyên biệt. Đây là source-equivalent placement, **không chỉnh toán, điều kiện hay lời giải**. Q08/Q14/Q15/Q16 affected placement đã tự kiểm; P0=0, P1=0 trong scope này; P2 vẫn phải kiểm sau phát hành và source/compiled QA phải PASS trên exact release HEAD. `Q18_OWNER_SELF_VERIFIED_ENRICHMENT`, độc lập reviewer NOT_CLAIMED.
