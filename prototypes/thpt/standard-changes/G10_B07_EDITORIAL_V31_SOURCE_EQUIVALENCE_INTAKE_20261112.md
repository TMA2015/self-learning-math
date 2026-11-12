# RELEASE intake · Toán 10 Bài 7 · SGK Golden v3.1.0 · nguồn tương đương (ứng viên, chưa phát hành)

**STATE:** `B07_EDITORIAL_CANDIDATE_ONLY / S1_ORIGINAL_PRINTED_SECTIONS_VERIFY_PENDING / Q18_DELTA_SCOPE_PENDING / NO_LIVE_SOURCE_CHANGE / NO_MERGE_DEPLOY`  
**OWNER DIRECTION:** Phát hành từng bài từ B07 sau khi đủ QA. Giữ giao diện B01–B06 (màu, text size, CSS), giữ toán học và dữ liệu học sinh.  
**STANDARD:** `SLM-THPT-QUALITY-ONE v3.1.0 §X-F` đang có hiệu lực trên `main`, PR #821 đã merge tại `3972c56f641b2d9722951892cf3d02989f1d666f`.  
**PUBLISHED SGK B07 SHA (Git blob):** `3766d84af8cbd27d1d84824048c39f974036020b` (file `docs/thpt-preview/sgk/chuong-iv/bai-7.md`).  
**REVIEW DRAFT:** `prototypes/thpt/ux795/Temp_G10_B07_EDITORIAL_FOUR_TAB_V31_REVIEW_20261112.md` — Git blob `97e606c65337c1464a62452e8883bf036a523254`. **KHÔNG phải file phát hành**.

## 1. Đề mục SGK và yêu cầu đối chiếu nguồn chính

Tài liệu S1 gốc đã được kiểm cho **phạm vi bài** trong lịch sử và source receipt `THPT_G10_CHIV_B07_B08_NOTEBOOKLM_D1D6_R01_PASS_RECEIPT_20261029.md`: **SGK KNTT Toán 10 Tập 1 Bài 7 trang in 46–50**, SBT B07 trang in 45–47. Review cũ có 5 outcomes B07 (DEFINITION, LENGTH, DIRECTION, EQUALITY, ZERO), 18 item toàn B07/B08 và hình/D6 đã duyệt. **PASS cũ chỉ thuộc source snapshot gốc, không tự trở thành PASS cho sắp xếp mới.**

Bản tra cứu nội dung SGK công khai (nguồn tham khảo *thứ cấp*, **không thay S1**) cùng hiển thị hai đầu mục: **1. Khái niệm vectơ** và **2. Hai vectơ cùng phương, cùng hướng, bằng nhau**. Đối chiếu: `https://www.sachgiaokhoa.online/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-iv-vecto-3098/bai-7-cac-khai-niem-mo-dau-11157.html` và `https://www.thivien.org/toan-10-kn/bai-7-cac-khai-niem-mo-dau.jsp`. **Đóng S1 gate chỉ khi xem trực tiếp SGK S1 các trang in 46–50**, xác nhận chính xác tên, thứ tự, định nghĩa/hình được dùng; không dùng hai website làm SOURCE_RECEIPT chính thức.

## 2. Delta tối thiểu từ bản học liệu đã duyệt

| Tầng | Nguồn đã xuất bản | Ứng viên biên tập theo Golden |
|---|---|---|
| Tab 1 | `Cùng tìm hiểu`, `Thuật ngữ...` | `1.1 Cùng tìm hiểu` nhận nguyên văn 5 đoạn giải thích và **5 First Try nguyên ID/nội dung** từ đầu tab 2; `1.2 Ví dụ trực quan` dùng đoạn trực quan có sẵn, `1.3 Thuật ngữ...` giữ nguyên mục tiêu |
| Tab 2 | 5 đoạn giải thích PED đi trước; lặp `### Kiến thức SGK`; 5 H3 tự đặt | Mở ngay tại `2.1 Khái niệm vectơ`, `2.2 Hai vectơ cùng phương, cùng hướng, bằng nhau`; các lưu ý, vectơ-không và ứng dụng giữ nguyên **dưới mạch SGK**, không tạo H3 giả |
| Tab 3 | Ba ví dụ giải đã có | Đánh số `3.1–3.3`; đề, điều kiện, lời giải, kết quả **nguyên văn** |
| Tab 4 | Hai lỗi/D6 đã có | Đánh số `4.1–4.2`; giữ nguyên nguyên nhân/cách sửa, HELP ID, link luyện tập |
| Hình | D5 SVG hình bình hành có sẵn | Giữ đúng một SVG cùng URL/alt/caption, đặt **trước** lời hướng dẫn quan sát hình |

**Sơ kiểm máy theo dữ liệu ứng viên:** 5/5 `data-thpt-first-try-id`; 2/2 `data-thpt-help-id`; `data-outcome-id` và `data-thpt-help-ref` trùng multiset nguồn; **31/31 biểu thức TeX** trùng multiset; một D5 SVG nguyên đường dẫn, không thêm hoặc xóa bài toán; không sửa CSS, Core, Practice, Final Submit, RD1, Firebase, Gemini, Mastery.

## 3. Cổng trước khi chuyển sang live RELEASE

1. **S1_PER_LESSON:** kiểm trực tiếp SGK/SBT bản gốc và mã trang in/PDF; nếu tên hoặc thứ tự đề mục khác → `STANDARD_CONFLICT_HOLD`, sửa ứng viên chứ không làm sai SGK.
2. **DELTA:** Q18 phải xác định cuối cùng `DELTA_B_SOURCE_EQUIVALENT` hay `DELTA_C_ACADEMIC_MATERIAL` theo **ảnh hưởng thật đến hành trình đọc/Tự thử** (5 First Try chuyển vị trí). Không mặc định tất cả là `DELTA_A_UI`; nếu C thì chỉ review độc lập phần B07/outcome/placement bị ảnh hưởng, không cả Chương IV.
3. **SOURCE_RECEIPT:** kiểm diff nội dung từng đoạn, MathJax, 5 canonical FirstTry, 2 HELP, 1 D5 SVG, toàn bộ đáp án/lời giải/điều kiện; bảo vệ Q15/Q16 và các file lịch sử bất biến.
4. **AP1–AP5/R1–R5:** dựng trên Golden B01–B06 với 390/820/1440, kiểm tab 1.x–4.x, công thức/định nghĩa đóng khung khi phù hợp, hình **trước** hướng dẫn, lỗi bảng/tràn, D6/First Try, Q16/Final Submit, đường dẫn.
5. **P1/P2 + quyền phát hành có điều kiện:** chỉ sửa live `docs/thpt-preview/sgk/chuong-iv/bai-7.md` qua PR riêng sau khi source/QA đủ; merge/deploy theo quyền owner 12/11/2026 khi tất cả cổng PASS; báo đúng trạng thái GitHub Pages và live/P2 thực tế.

**Checkpoint:** B07_PREVIEW_STAGED / PUBLISHED_SOURCE_UNCHANGED / REAL_S1_HEADING_VERIFICATION_PENDING / DELTA_B_OR_C_HOLD / NO_RELEASE.
