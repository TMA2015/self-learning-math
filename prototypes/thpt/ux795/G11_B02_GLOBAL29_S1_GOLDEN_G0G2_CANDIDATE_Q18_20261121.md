# SGK Global 29/79 · Toán 11 Bài 2 · G0/G1 candidate (CHƯA PHÁT HÀNH)

**LESSON_ID:** G11-B02  
**GLOBAL_SGK_ORDER:** 29/79  
**CANONICAL_LEARNER_PATH:** `docs/thpt-preview/sgk/lop-11/chuong-i/bai-2.md`  
**OLD_SOURCE_BLOB:** `15c4de731bfbaf5b8a141a54d9b5493e7895c752`  
**CANDIDATE_SOURCE_BLOB:** `9d15d0122443ad9897ed64fed0fd2a717ff46582`  
**STANDARD_ID:** `SLM-THPT-QUALITY-ONE`; **STANDARD_VERSION:** `3.2.0/Q01-Q18`  
**DELTA:** `DELTA_C_ACADEMIC_MATERIAL` (chỉnh nhịp sư phạm, thêm 4 unscored First Try và ví dụ ứng dụng, định dạng TeX) + `DELTA_A_UI` (bốn Golden tabs/khung/tiêu đề).  
**Q18_STATE:** `Q18_CONTENT_CHECK_PENDING` — bản candidate tác giả đang kiểm, không giả `Q18_OWNER_SELF_VERIFIED_ENRICHMENT` hoặc NotebookLM PASS.  
**RELEASE_STATE:** `DRAFT_NO_MERGE_NO_DEPLOY`; **OWNER_P2:** PENDING.

## G0 — Phạm vi, nguồn và những lỗi cũ cần phòng tránh

- S1 SGK KNTT Toán 11 tập 1, Bài 2 **trang in 17–21**: 4 mục (cộng; nhân đôi/hạ bậc; tích thành tổng; tổng thành tích). Đã so công thức và bài tập theo *văn bản PDF SGK* tại https://media.metaisach.com/2025/09/toan-11-tap-1-ket-noi-tri-thuc-voi-cuoc-song-3c036587.pdf (trích nguyên văn trang in có số trang); **PDF screenshot tool lỗi cache miss**, nên **chưa ký direct visual/page-image receipt**. SBT chưa được xác minh trực tiếp trong lượt này.
- Old canonical có các formula display `cos(u±v)`, `sin(u±v)` thiếu backslash lệnh toán; lời giảng chia dọc thành headings `Trước khi học`, `Tự thử`, `Kiến thức SGK`, `Ví dụ`, `Hướng suy luận`, `Hình minh họa`, `Tự khắc phục lỗi` thay vì Golden 4 tab. Các câu ở ví dụ thiếu dàn bước, SVG nằm sau tất cả ví dụ. Không đổi shared CSS/runtime.
- Chống lặp `SGK-TAB-PLACEMENT-01`: lỗi tổng quát phải có tiêu đề riêng `4.1/4.2` ở tab `Lỗi thường gặp`; `Kiểm lỗi` chỉ ở từng Vận dụng dưới Đối chiếu; không đi vòng kiểm toán G10.

## G1 — Candidate 1 canonical, nội dung mới

- 4 tab chính xác: Khám phá kiến thức / Kiến thức SGK / Ví dụ / Lỗi thường gặp.
- 4 tuyến hình thành tương ứng bốn nhóm S1, có lý do chọn phương pháp, tiền đề, điều kiện và mỗi tuyến một **Vận dụng → Đối chiếu đóng → Kiểm lỗi đóng**.
- **New unscored TRY IDs**: `THPT-G11-B02-TRY01`, `TRY02`, `TRY03`, `TRY04` (chính xác một stem/key/solution ở trang canonical). **New local HELP IDs**: `HELP-G11-B02-TRY01` ... `TRY04`. Giữ hai ID tổng quát lịch sử `HELP-G11-B02-01` và `HELP-G11-B02-02` tại tab 4; nội dung tổng quát khác ví dụ cụ thể.
- Công thức sin/cos/tan tổng-hiệu, nhân đôi + hạ bậc, 3 công thức tích thành tổng, 4 công thức tổng thành tích; nêu miền điều kiện tan. Dẫn giải từ tích vô hướng / đổi v thành -v / đặt v=u / tổ hợp công thức cộng / nửa tổng nửa hiệu.
- 5 bài mẫu có `Đề bài / Phân tích / Lời giải / Kiểm lại`, bảo toàn **bốn cấu trúc/bộ dữ kiện bài mẫu cũ** và bổ sung tín hiệu (5\sin t+5\cos t=5\sqrt2\sin(t+\pi/4)) theo tình huống đầu bài S1.
- Giữ SVG duy nhất `docs/assets/images/thpt/THPT_G11_B02_ANGLE_SUM_60_30_D5_R01.svg` **blob `b6cb63f72bbd7d93231c457baf19c4942114957b`**, hiển thị hai vị trí trong cùng trang với chỉ dẫn đọc đúng giới hạn.

## G2 — Checklist còn cần đóng trên chính candidate SHA

- [ ] So SGK/SBT nguồn S1 thực tế từng công thức/điều kiện/bài với page image (PDF screenshot chưa mở được, không tự đánh dấu nguồn trực tiếp PASS).
- [ ] Tự phản biện riêng 4 outcome và 4 First Try mới, kiểm không trùng item canonical trong Shared Bank/READINESS; đối chiếu độc lập toán, đáp án, D6, figure, Q15/Q16 và ký Q18 source-locked khi đủ chứng cứ.
- [ ] Chuẩn hóa và khóa exact math-migration old/new để existing `test-thpt-scoped-deploy-proof.cjs` không bác bỏ chuyển định dạng TeX hợp lệ; không nới generic fail-closed check. Chưa tạo exception trước khi author QA toán thật.
- [ ] G3 source/Golden/MathJax/SVG/responsive/390-820-1440 + Q15/Q16 exact PR HEAD (Golden computed DOM, cards, 4 tab headings, 4 closed Đối chiếu, 4 local Kiểm lỗi + 2 generic).
- [ ] G4 owner authorization for exact release and G5 published Pages blob/source P1 parity, owner P2 separately.

**BLOCKER:** `Q18_CONTENT_CHECK_PENDING` + `S1_PAGE_IMAGE_NOT_YET_VERIFIED`; `ACADEMIC_CLEARANCE=NOT_GRANTED`; `MERGE_DEPLOY=NO`. Không sử dụng candidate này làm tuyên bố học liệu đã phát hành.
