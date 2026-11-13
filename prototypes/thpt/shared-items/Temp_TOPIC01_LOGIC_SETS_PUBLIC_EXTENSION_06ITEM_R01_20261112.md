# CĐ01 — Sáu bài luyện tập PUBLIC tự biên soạn độc lập R01

Mỗi `item_id` có **đúng một** đề, đáp án, lời giải và hướng khắc phục tại tệp này; không sao chép từ nguồn SGK đã review. Các câu là formative, không phải đề kín Topic Readiness.

PACKET_ID: THPT-TOPIC01-LOGIC-SETS-FULL-R01
CANONICAL_NEW_ITEM_COUNT: 6
PRIVATE_RD1_IMPORTED: 0

## THPT-TOP01-ADD01 — Nhận diện mệnh đề và mệnh đề chứa biến

- `item_id`: `THPT-TOP01-ADD01`
- `outcome_id`: `TOP01-O01`
- `role`: `TOPIC_PRACTICE`
- `level`: `APPLICATION`
- **Đề:** Cho m∈ℤ. Phát biểu (a) “m+2=7”; (b) “∀m∈ℤ, m+2=7”; (c) “∃m∈ℤ, m+2=7”. Phân loại và xét giá trị chân lý khi xác định.
- **Đáp án:** (a) Mệnh đề chứa biến, chưa có chân lý khi chưa gán m; (b) mệnh đề sai vì m=0 thì 2≠7; (c) mệnh đề đúng vì m=5.
- **Lời giải có lập luận:** (a) Chưa gán m nên chưa thể gán đúng/sai; thử m=5 và m=0. (b) Phủ định bằng một phản ví dụ m=0. (c) Một chứng cứ m=5 đủ xác nhận tồn tại.
- **Tự đối chiếu và D6:** Nhầm mệnh đề chứa biến với mệnh đề; quay lại TOP01-M01 và THPT-G10-B01-C01.

## THPT-TOP01-ADD02 — Bác bỏ tương đương thiếu chiều đảo

- `item_id`: `THPT-TOP01-ADD02`
- `outcome_id`: `TOP01-O04`
- `role`: `TOPIC_PRACTICE`
- `level`: `APPLICATION`
- **Đề:** Với n∈ℤ, phát biểu “n chia hết cho 4 ⇔ n² chia hết cho 4” đúng hay sai? Xác định chiều đúng và nêu phản ví dụ cho chiều sai.
- **Đáp án:** Sai. n chia hết cho 4 ⇒ n² chia hết cho 4 đúng; chiều n² chia hết cho 4 ⇒ n chia hết cho 4 sai khi n=2.
- **Lời giải có lập luận:** Nếu n=4k thì n²=16k² chia hết cho 4. Lấy n=2: n²=4 chia hết cho 4 nhưng 2 không chia hết cho 4, do đó không có tương đương.
- **Tự đối chiếu và D6:** Quên chứng minh hai chiều; quay lại TOP01-M04 và THPT-G10-B01-P04.

## THPT-TOP01-ADD03 — Hợp và giao hai tập hữu hạn

- `item_id`: `THPT-TOP01-ADD03`
- `outcome_id`: `TOP01-O07`
- `role`: `TOPIC_PRACTICE`
- `level`: `APPLICATION`
- **Đề:** Đặt A={1,2,3,4,5}, B={1,3,5,7}. Tìm A∩B và A∪B; giải thích vì sao phần tử 1 chỉ viết một lần trong hợp.
- **Đáp án:** A∩B={1,3,5}; A∪B={1,2,3,4,5,7}.
- **Lời giải có lập luận:** Phần chung 1,3,5 đi vào giao. Hợp chứa mọi phần tử xuất hiện ở ít nhất một tập và theo định nghĩa tập hợp mỗi phần tử chỉ viết một lần.
- **Tự đối chiếu và D6:** Nhầm 'và' với 'hoặc'; quay lại TOP01-M07 và THPT-G10-B02-C02.

## THPT-TOP01-ADD04 — Hiệu hai tập không giao hoán

- `item_id`: `THPT-TOP01-ADD04`
- `outcome_id`: `TOP01-O08`
- `role`: `TOPIC_PRACTICE`
- `level`: `APPLICATION`
- **Đề:** Cho A={1,2,4,6}, B={2,3,6,8}. Tính A\\B và B\\A. Có thể kết luận hai hiệu luôn bằng nhau không?
- **Đáp án:** A\\B={1,4}; B\\A={3,8}; không.
- **Lời giải có lập luận:** Giữ phần tử nằm trong A nhưng không ở B cho A\\B; đổi vai A,B cho B\\A. Hai kết quả khác nhau là phản ví dụ cho tính giao hoán.
- **Tự đối chiếu và D6:** Nhầm hiệu với hợp/giao; quay lại TOP01-M08 và THPT-G10-B02-P01.

## THPT-TOP01-ADD05 — Phần bù cần xác định tập vũ trụ

- `item_id`: `THPT-TOP01-ADD05`
- `outcome_id`: `TOP01-O09`
- `role`: `TOPIC_PRACTICE`
- `level`: `APPLICATION`
- **Đề:** Cho U={−3,−2,−1,0,1,2,3}, A={x∈U | x²≤1}. Xác định U\\A.
- **Đáp án:** A={−1,0,1}; U\\A={−3,−2,2,3}.
- **Lời giải có lập luận:** Do x²≤1 trên các số nguyên của U đúng khi x∈{−1,0,1}. Loại chính các phần tử ấy ra khỏi U, giữ bốn số còn lại.
- **Tự đối chiếu và D6:** Không xác định U và nhầm A với U\\A; quay lại TOP01-M09 và THPT-G10-B02-P02.

## THPT-TOP01-ADD06 — Mô hình hai nhóm và phần ngoài cả hai

- `item_id`: `THPT-TOP01-ADD06`
- `outcome_id`: `TOP01-O11`
- `role`: `TOPIC_PRACTICE`
- `level`: `APPLICATION`
- **Đề:** Trong 50 học sinh, 31 tham gia CLB Hát, 27 tham gia CLB Robot, 12 tham gia cả hai. Hỏi chỉ Hát, chỉ Robot, ít nhất một CLB, và không tham gia CLB nào.
- **Đáp án:** Chỉ Hát 19; chỉ Robot 15; ít nhất một 46; không tham gia 4.
- **Lời giải có lập luận:** Giao 12. Chỉ Hát=31−12=19; chỉ Robot=27−12=15; hợp=19+12+15=46 (=31+27−12); ngoài=50−46=4. Kiểm 19+12+15+4=50.
- **Tự đối chiếu và D6:** Cộng trùng phần giao hoặc quên miền ngoài; quay lại TOP01-M11 và THPT-G10-B02-P05.


**Q15:** Sáu stem/answer/solution ở đây là nguồn duy nhất; không nhân bản ở Tự kiểm tra hoặc tài liệu sinh viên. **Q16:** 0 held-out private; câu nào đã học không làm chứng cứ đánh giá độc lập.
