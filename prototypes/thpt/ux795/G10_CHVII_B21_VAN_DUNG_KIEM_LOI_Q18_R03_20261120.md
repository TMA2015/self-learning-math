# G10 B21 — Phân luồng HELP và D6 theo Vận dụng · Q18 R03

**RECEIPT_ID:** G10-CHVII-B21-VAN-DUNG-KIEM-LOI-R03-20261120  
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0 Q01–Q18; G0–G5 và Golden hiện hữu, không tạo chuẩn/bộ test mới.  
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-vii/bai-21.md`  
**R03_PREVIOUS_SOURCE_BLOB:** `f07de06dcd063c473673b11eeaa3cc28091e21dd`  
**R03_CORRECTED_SOURCE_BLOB:** `5456fd9756c6f1c795f0d56d51f49561cbad7e1c`  
**DELTA:** `DELTA_A_UI` vị trí/nhãn khung, `DELTA_C_ACADEMIC_MATERIAL` tác động tiến trình tự sửa (nội dung các bước không đổi).  
**OWNER_P2:** Source đã nghiệm thu trước giữ lịch sử snapshot bất biến. Cần review phần bị ảnh hưởng và owner nghiệm thu riêng trước khi công nhận PASS cho bản mới.  
**ISSUE:** #795 audit B23 về B01; không mở tiêu chuẩn mới.

## G0-G2: đối chiếu ngữ nghĩa Vận dụng và HELP

Đã đọc source Khám phá và tab Lỗi thường gặp, đối chiếu trực tiếp `data-thpt-help-ref` của từng Vận dụng với đúng `data-thpt-help-id`. Di chuyển **5 HELP** có một bài toán/điều kiện cụ thể sang ngay dưới phần **Đối chiếu** của chính Vận dụng đó, trong khung tự mở **Kiểm lỗi**; mỗi ID đúng một lần. Giữ nguyên **2 D6 tổng quát thực sự** trong tab Lỗi thường gặp, đánh số mục 4.1–4.2, không tạo nội dung giả.

Bảo toàn 5 First Try/Đối chiếu gốc, các đáp án và lập luận, 5 HELP, 2 D6, hình minh họa, S1, Core, luyện tập, liên kết, Q15/Q16/RD1/Final Submit và dữ liệu tiến độ. Golden/JS/CSS không bị thay đổi. Sau di chuyển đường đọc là: *Đề Vận dụng → tự giải → Đối chiếu đóng → Kiểm lỗi đóng để tự khắc phục*, không cần chuyển tab để đoán dữ kiện. Phần lỗi tổng quát vẫn riêng biệt trong tab 4.

**G2_VERDICT:** AUTHOR_SELF_QA_SOURCE_ONLY, **NOT** Academic/PED review PASS hay owner P2 PASS.  
**G3–G5:** Kiểm existing QA đúng HEAD, khóa SHA nguồn, kiểm hiển thị trên 390/820/1440, mở/đóng Đối chiếu và Kiểm lỗi không rò đáp án; chỉ chuyển READY và phát hành sau đủ review/cổng QA.
