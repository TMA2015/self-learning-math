# G10 B23 · Chuyển HELP về dưới Vận dụng — Q18 R04 · 20/11/2026

**RECEIPT_ID:** G10-CHVIII-B23-VAN-DUNG-KIEM-LOI-R04-20261120  
**STANDARD:** SLM-THPT-QUALITY-ONE v3.2.0, Q01–Q18; quy trình G0–G5 và Golden hiện hữu, không thêm chuẩn/bộ test.  
**SOURCE_PATH:** `docs/thpt-preview/sgk/chuong-viii/bai-23.md`  
**R04_PREVIOUS_SOURCE_BLOB:** `e0c20af522b61cb69b33ad5f7d4d6bde8c011f47`  
**R04_CORRECTED_SOURCE_BLOB:** `25f460ab8432496a2685cbaed4d21fd04ed1adbe`  
**HISTORICAL_CHAIN:** R01 `8e94c245250b77b6f7670345f9edcb7b85e958ac` → R02 `ed7a35d6650ecbe59f01e824295174541c4e3b49` → R03 `e0c20af522b61cb69b33ad5f7d4d6bde8c011f47`. Tất cả receipt cũ bất biến.  
**OWNER_DIRECTIVE:** Rà B23 ngược B01; HELP bám theo Vận dụng phải nằm ngay dưới Vận dụng trong tab Khám phá, khung đóng tự mở tên Kiểm lỗi; chỉ giữ lỗi tổng quát thật ở tab Lỗi thường gặp.  
**DELTA:** `DELTA_C_ACADEMIC_MATERIAL` phần hướng dẫn tự sửa của Vận dụng 1.2 (sửa lệch ngữ cảnh bánh–nhân thành đúng 4×3); `DELTA_A_UI` đối với di chuyển vị trí 4 HELP và đổi tên khung, `DELTA_B_SOURCE_EQUIVALENT` với dòng điều hướng Đối chiếu (không thay đáp án/lập luận).  
**OWNER_P2:** chưa nghiệm thu thay đổi mới; KHÔNG tự cấp Academic/PED PASS; cần review độc lập phần chịu ảnh hưởng theo quy trình hiện hành.  
**ISSUE:** #795 (B23-PED-D6-CONTEXT-01 và audit B01–B23).

## G0 – nguồn, tình trạng sai và cặp item–HELP

B23 R03 có bốn đề Vận dụng thực tại Khám phá mục 1.1–1.4 và bốn khối HELP lại xuất hiện tại tab Lỗi thường gặp 4.1–4.4. Điều này làm mất ngữ cảnh, câu 4.2 còn đổi chủ đề sang 3 áo/2 quần. Hai D6 tổng quát khác có ID D6-G10-B23-01/02 là lỗi thật, không chuyển đi chỉ để làm trống tab.

| Vận dụng – outcome | HELP canonical | Vị trí sau sửa |
|---|---|---|
| 1.1; G10-B23-ADDITION; 2 truyện hoặc 6 vé | HELP-G10-CHVIII-TRY01 | Khám phá, ngay dưới Đối chiếu 1.1, khung đóng **Kiểm lỗi** |
| 1.2; G10-B23-MULTIPLICATION; 4 loại bánh và 3 loại nhân | HELP-G10-CHVIII-TRY02 | Khám phá, ngay dưới Đối chiếu 1.2, khung đóng **Kiểm lỗi**; bước 3 sửa đúng 12 suất |
| 1.3; G10-B23-DIGIT_COUNT; 0,1,2,3 lập số 2 chữ số khác nhau | HELP-G10-CHVIII-TRY03 | Khám phá, dưới Đối chiếu 1.3 |
| 1.4; G10-B23-CASE_SPLIT; 0,1,2,3 lập số chẵn 2 chữ số khác nhau | HELP-G10-CHVIII-TRY04 | Khám phá, dưới Đối chiếu 1.4 |

## G1–G2 – học sinh lần đầu đọc bốn tab

- Khám phá: đọc đề → tự làm → tự mở Đối chiếu khi muốn → nếu cần tự sửa, mở **Kiểm lỗi** ngay dưới câu. 4 HELP chỉ có một bản canonical trong nguồn; không xuất hiện trước khi chủ động mở. Sửa riêng bước 3 của HELP02: liệt kê bánh B1–B4 ghép nhân N1–N3 đủ 12 suất, không đột ngột lấy bài áo/quần 3×2.
- Kiến thức SGK: không chỉnh toán, khái niệm, điều kiện hay SVG.
- Ví dụ: không chỉnh ba lời giải, đáp án.
- Lỗi thường gặp: giữ đúng 2 D6 về dựa từ khóa cộng/nhân và chữ số đầu/nhánh phụ thuộc; đổi số hiển thị 4.5/4.6 thành 4.1/4.2, viết rõ phần Kiểm lỗi cụ thể đã nằm dưới Vận dụng.

**Q15/Q16 bất biến:** 4 item_id First Try, 4 HELP_ID, 2 D6_ID, 4 câu hỏi + đáp án + lập luận, ngân hàng luyện và tất cả đường liên kết, Final Submit/RD1/Mastery không đổi. Các dòng `Đường khắc phục` chỉ điều hướng vị trí mới, KHÔNG thay toán học hoặc đáp án. Hình SVG canonical trong hai tab vẫn cùng asset SHA lịch sử.

**G2_STATUS:** AUTHOR_SELF_QA (content source check), **CHỜ independent Academic + PED review affected part**; không lấy CI xanh làm chứng cứ hoàn tất sư phạm.

**G3–G5:** Duy nhất sau review phần DELTA_C và receipt SHA hợp lệ mới chạy QA đúng phạm vi và phát hành. Không tự sửa B22 owner-P2 snapshot trong PR này.
