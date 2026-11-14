# Thống kê mô tả G10–G12 — bảy câu mới cho bảy outcome chỉ có một câu nguồn R00
**AUTHORING public extension:** 7 canonical ID mới; không tái sử dụng private RD1; một nguồn đề/đáp án/lời giải/rubric duy nhất ở file này. `ITEM_VERSION=1`, `ROLE=TOPIC_PRACTICE`, `EVALUATION=CLIENT_CHECK_THEN_REVEAL`, `SKILL_MASTERY=NO`. Hàng trong mục dưới chỉ là mapping; không sao chép câu vào source trang Kiến thức.

## ITEM_OUTCOME_MATRIX

| item_id | outcome_id | role | version |
|---|---|---|---:|
| `THPT-G10-TOPSTAT-ADD01` | `G10-B12-APPROX_CONCEPT` | TOPIC_PRACTICE | 1 |
| `THPT-G10-TOPSTAT-ADD02` | `G10-B13-MODE` | TOPIC_PRACTICE | 1 |
| `THPT-G10-TOPSTAT-ADD03` | `G10-B13-MEDIAN` | TOPIC_PRACTICE | 1 |
| `THPT-G10-TOPSTAT-ADD04` | `G10-B14-OUTLIERS` | TOPIC_PRACTICE | 1 |
| `THPT-G10-TOPSTAT-ADD05` | `G10-B14-COMPARISON` | TOPIC_PRACTICE | 1 |
| `THPT-G11-TOPSTAT-ADD06` | `G11-B09-REPRESENTATIVE` | TOPIC_PRACTICE | 1 |
| `THPT-G11-TOPSTAT-ADD07` | `G11-B09-INTERPRETATION` | TOPIC_PRACTICE | 1 |

## Canonical public questions with one answer/solution/rubric

### THPT-G10-TOPSTAT-ADD01
**Outcome:** `G10-B12-APPROX_CONCEPT`. **Mức:** Phân biệt số đúng/số gần đúng.
**Đề:** Một lớp có chính xác 25 học sinh. Một bạn đo chiều dài bàn là 120,3 cm bằng thước có độ phân giải hữu hạn. Số nào là số đúng theo ý nghĩa bài toán và số nào là gần đúng?
**Lời giải:** Số đếm 25 học sinh là số đúng trong tình huống đếm đầy đủ; 120,3 cm là số đo gần đúng vì dụng cụ/quan sát có sai số.
**Đáp án chuẩn:** Số đếm 25 học sinh là số đúng trong tình huống đếm đầy đủ; 120,3 cm là số đo gần đúng vì dụng cụ/quan sát có sai số.
**D6:** Không biến kết quả phép đo có nhiều chữ số thập phân thành số đúng; cần nêu nguồn gốc dữ liệu.
**Rubric thủ công (3 điểm):** 1 điểm mô hình/khái niệm đúng; 1 điểm tính hoặc lý giải đúng; 1 điểm giải thích giới hạn/điều kiện. Không tự chấm tự luận hoặc ghi Mastery.

### THPT-G10-TOPSTAT-ADD02
**Outcome:** `G10-B13-MODE`. **Mức:** Hai mốt đồng thời.
**Đề:** Mẫu số sách đọc trong tháng: 1,1,2,2,3,4. Tìm mốt và giải thích vì sao không thể viết một mốt duy nhất.
**Lời giải:** Giá trị 1 và 2 cùng xuất hiện 2 lần, lớn hơn các giá trị khác, nên mẫu có hai mốt: 1 và 2.
**Đáp án chuẩn:** Giá trị 1 và 2 cùng xuất hiện 2 lần, lớn hơn các giá trị khác, nên mẫu có hai mốt: 1 và 2.
**D6:** Mốt dựa tần số lớn nhất, không dựa vị trí giữa hay trung bình; nhiều mốt là hợp lệ.
**Rubric thủ công (3 điểm):** 1 điểm mô hình/khái niệm đúng; 1 điểm tính hoặc lý giải đúng; 1 điểm giải thích giới hạn/điều kiện. Không tự chấm tự luận hoặc ghi Mastery.

### THPT-G10-TOPSTAT-ADD03
**Outcome:** `G10-B13-MEDIAN`. **Mức:** Trung vị cần sắp xếp.
**Đề:** Dữ liệu thời gian (phút) là 9,2,4,7,1,5. Tính trung vị và cho biết vì sao phải sắp trước khi lấy hai số giữa.
**Lời giải:** Sắp tăng dần: 1,2,4,5,7,9. Có 6 số nên trung vị (4+5)/2=4,5 phút.
**Đáp án chuẩn:** Sắp tăng dần: 1,2,4,5,7,9. Có 6 số nên trung vị (4+5)/2=4,5 phút.
**D6:** Không chọn 4 và 7 ở vị trí giữa của thứ tự chưa sắp; tính trên dãy tăng.
**Rubric thủ công (3 điểm):** 1 điểm mô hình/khái niệm đúng; 1 điểm tính hoặc lý giải đúng; 1 điểm giải thích giới hạn/điều kiện. Không tự chấm tự luận hoặc ghi Mastery.

### THPT-G10-TOPSTAT-ADD04
**Outcome:** `G10-B14-OUTLIERS`. **Mức:** Hàng rào ngoại lệ.
**Đề:** Mẫu đã sắp 2,3,3,4,5,6,20. Tính Q1,Q3,IQR và kiểm số 20 theo hàng rào 1,5 IQR.
**Lời giải:** Me=4; nửa dưới 2,3,3 cho Q1=3; nửa trên 5,6,20 cho Q3=6. IQR=3, hàng rào trên 6+1,5·3=10,5, nên 20 là ngoại lệ theo quy tắc này.
**Đáp án chuẩn:** Me=4; nửa dưới 2,3,3 cho Q1=3; nửa trên 5,6,20 cho Q3=6. IQR=3, hàng rào trên 6+1,5·3=10,5, nên 20 là ngoại lệ theo quy tắc này.
**D6:** Giá trị ngoại lệ không tự động là dữ liệu sai; chỉ đánh dấu để kiểm tra.
**Rubric thủ công (3 điểm):** 1 điểm mô hình/khái niệm đúng; 1 điểm tính hoặc lý giải đúng; 1 điểm giải thích giới hạn/điều kiện. Không tự chấm tự luận hoặc ghi Mastery.

### THPT-G10-TOPSTAT-ADD05
**Outcome:** `G10-B14-COMPARISON`. **Mức:** Hai mẫu cùng trung bình khác phân tán.
**Đề:** Hai nhóm A=2,4,6 và B=3,4,5 có cùng đơn vị đo. Tính trung bình và phương sai mô tả chia n rồi chọn nhóm ổn định hơn.
**Lời giải:** Cả hai có trung bình 4. Phương sai A=(4+0+4)/3=8/3; B=(1+0+1)/3=2/3. Nhóm B ổn định hơn.
**Đáp án chuẩn:** Cả hai có trung bình 4. Phương sai A=(4+0+4)/3=8/3; B=(1+0+1)/3=2/3. Nhóm B ổn định hơn.
**D6:** Không chỉ so trung bình bằng nhau; kiểm phương sai/độ lệch chuẩn và điều kiện cùng đơn vị.
**Rubric thủ công (3 điểm):** 1 điểm mô hình/khái niệm đúng; 1 điểm tính hoặc lý giải đúng; 1 điểm giải thích giới hạn/điều kiện. Không tự chấm tự luận hoặc ghi Mastery.

### THPT-G11-TOPSTAT-ADD06
**Outcome:** `G11-B09-REPRESENTATIVE`. **Mức:** Trung điểm chỉ là đại diện.
**Đề:** Một bảng ghép nhóm có [10,20):4 người và [20,30):6 người. Chọn giá trị đại diện, ước lượng trung bình và giải thích có thể kết luận 4 người đầu đều bằng 15 không.
**Lời giải:** Trung điểm là 15 và 25; trung bình ước lượng (4×15+6×25)/10=21. Không thể kết luận bốn người nhóm đầu đều có giá trị đúng 15; bảng nhóm mất thông tin thô.
**Đáp án chuẩn:** Trung điểm là 15 và 25; trung bình ước lượng (4×15+6×25)/10=21. Không thể kết luận bốn người nhóm đầu đều có giá trị đúng 15; bảng nhóm mất thông tin thô.
**D6:** Giá trị đại diện không đồng nghĩa quan sát đúng của mọi cá thể.
**Rubric thủ công (3 điểm):** 1 điểm mô hình/khái niệm đúng; 1 điểm tính hoặc lý giải đúng; 1 điểm giải thích giới hạn/điều kiện. Không tự chấm tự luận hoặc ghi Mastery.

### THPT-G11-TOPSTAT-ADD07
**Outcome:** `G11-B09-INTERPRETATION`. **Mức:** Giới hạn suy luận từ số nhóm.
**Đề:** Mẫu ghép [0,10):3 và [10,20):7 có n=10. Ước lượng trung vị và đánh giá phát biểu “trung vị dữ liệu gốc chắc chắn bằng số ước lượng”.
**Lời giải:** Tích lũy là 3,10; nhóm trung vị thứ hai có L=10,h=10,f=7,F trước=3. Me≈10+(5−3)×10/7=90/7≈12,86. Không thể khẳng định trung vị dữ liệu thô đúng bằng 90/7.
**Đáp án chuẩn:** Tích lũy là 3,10; nhóm trung vị thứ hai có L=10,h=10,f=7,F trước=3. Me≈10+(5−3)×10/7=90/7≈12,86. Không thể khẳng định trung vị dữ liệu thô đúng bằng 90/7.
**D6:** Ước lượng nội suy giả định phân bố trong nhóm; không có dữ liệu thô để xác nhận chính xác.
**Rubric thủ công (3 điểm):** 1 điểm mô hình/khái niệm đúng; 1 điểm tính hoặc lý giải đúng; 1 điểm giải thích giới hạn/điều kiện. Không tự chấm tự luận hoặc ghi Mastery.

## Authoring boundaries
- Bảy câu mới chỉ phục vụ Practice, đáp án/lời giải mở sau Check; không là independent Readiness.
- Các đáp án mới phải được tự kiểm toán theo Q18 trên Git blob của file này, không mượn verdict reviewer SGK cho item mới.
- Giữ 107 câu SGK lịch sử ở đúng ba nguồn blob; không tạo câu thứ hai từ việc đặt lại role.