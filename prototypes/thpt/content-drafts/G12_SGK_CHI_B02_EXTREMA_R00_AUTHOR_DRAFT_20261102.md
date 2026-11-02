# Toán 12 KNTT — Chương I, Bài 2: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số — AUTHOR R00

LESSON_ID: G12-B02
SGK_S1: Tập Một trang in 15–19 = PDF1 trang 17–21
SBT_S1: Tập Một trang in 10–16 = PDF1 trang 8–14
SOURCE_PDF_SHA256_SGK: faeb554bea9cf81189c5e790b1b1edb42f50b3648694acc80dc99682ada3f1fd
SOURCE_PDF_SHA256_SBT: db9d07a2fbe55cda3b4b50fb13d1767e45a7552f668b726241c59febac69c0ca
STANDARD_ID: SLM-THPT-QUALITY-ONE
ACADEMIC_VERDICT: NOT_REVIEWED
PEDAGOGICAL_VERDICT: NOT_REVIEWED
LEARNING_PATH: SGK_CHAPTER
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY

## OUTCOME_IDS
- G12-B02-EXTREMA_GLOBAL_MEANING
- G12-B02-CLOSED_INTERVAL_EXISTENCE
- G12-B02-CRITICAL_END_POINTS
- G12-B02-OPEN_DOMAIN_NONATTAINMENT
- G12-B02-CONSTRAINED_DOMAIN
- G12-B02-OPTIMIZATION_MODEL

## D1 / PED1: Vì sao cần học?

Một xưởng phải chọn kích thước thùng để thể tích lớn nhất, nhưng mô hình chỉ cho phép x thuộc một đoạn vật lý. Điểm cực đại cục bộ (gần đó hàm nhỏ hơn) **không nhất thiết** có giá trị lớn nhất trên cả miền. Khi cần quyết định thực tế, ta phải so sánh tất cả ứng viên và điểm biên được phép, chứ không chỉ giải f'(x)=0. Bài học này đi từ định nghĩa đến thuật toán tìm GTLN/GTNN có điều kiện và mô hình hóa.

## D1 / PED2: Tiền đề

Miền xác định D; liên tục trên [a,b]; bảng dấu f' và điểm tới hạn; đọc giá trị f(x) trên đồ thị; điều kiện vật lý (độ dài không âm, điểm biên có hay không). Nếu quên vì sao f'=0 mới chỉ là ứng viên, xem ví dụ phản chứng x³ ở Bài 1 (giải thích dưới đây vẫn đầy đủ độc lập).

## D1 / PED3: Bản chất trước công thức

Số M là **giá trị lớn nhất** của f trên D nếu (i) có x0 thuộc D với f(x0)=M và (ii) với mọi x thuộc D, f(x)≤M. Tương tự m là **giá trị nhỏ nhất** khi f(x0)=m và f(x)≥m với mọi x thuộc D. Điều kiện **đạt được** tại một x0 trong D là bắt buộc: f(x)=x trên (0,1) có cận trên đúng 1, cận dưới đúng 0 nhưng **không đạt GTLN/GTNN** vì 0,1 không thuộc D. Phân biệt "giá trị cực đại" địa phương với GTLN toàn cục.

Hàm **liên tục trên đoạn đóng, hữu hạn** [a,b] luôn đạt cả GTLN lẫn GTNN. Để tìm chúng khi f khả vi trong (a,b), ta so sánh f(a), f(b) với f(c) tại mọi c thuộc (a,b) mà f'(c)=0 hoặc f' không tồn tại. Với đoạn nửa mở, khoảng mở hoặc miền vô hạn, không áp dụng máy móc định lý đoạn; cần xét giới hạn ở biên và khả năng **không đạt**.

### PED4: Cách đọc bảng biến thiên

Đọc hàng x và đánh dấu *các biên được lấy* bằng ngoặc vuông hoặc chấm đặc, dấu tròn rỗng nếu bị loại; đọc hàng f' để xác định đỉnh/đáy; đọc hàng f và đối chiếu **giá trị tại điểm biên**. Chỉ có bảng dấu và cực trị cục bộ chưa đủ nếu không so các biên. Hình tự vẽ khi cần: đường parabol y=−(x−3)²+8 trên [0,4] đạt GTLN ở 3; GTNN là f(0)=−1 chứ không ở một cực tiểu nội.

## D5 / PED4: Hình gốc và cách đọc đoạn đóng

FIG-G12-B02-01 (G12_B02_FIG01_GLOBAL_MIN_MAX_CLOSED_INTERVAL_R00.svg): đồ thị chính xác của f=x²−4x+1 chỉ trên [0,5], đánh dấu cả ba ứng viên x=0,2,5 bằng chấm đặc. Bước đọc: (1) nhận diện 0,5 là biên được lấy; (2) xác định đỉnh x=2, f=−3; (3) so f(0)=1, f(2)=−3, f(5)=6 để thấy GTLN ở biên x=5; (4) thay đoạn mở (0,5) thì không thể kết luận vẫn có max6 ở biên. Nét đồ thị ngoài đoạn không phải phần miền đang xét.

## D2 / PED5: Ví dụ dẫn dắt, có lý do chọn phương pháp

### EX-G12-B02-01
Trên [0,5], f(x)=x²−4x+1. **Vì sao chọn so các điểm?** f liên tục trên đoạn và khả vi bên trong. f'=2x−4=0 tại x=2. Tính f(0)=1, f(2)=−3, f(5)=6. Vậy GTNN =−3 tại x=2, GTLN=6 tại x=5. Nếu chỉ tìm f'=0 sẽ bỏ sót **GTLN ở biên**.

### EX-G12-B02-02
Trên (0,1), g(x)=x. g tăng và tiến tới 0,1 ở hai đầu nhưng hai đầu không thuộc miền. Không có x nào trong (0,1) đạt giá trị 1 hay 0; **không có GTLN/GTNN**. Không được nhầm sup=1 với max=1.

### EX-G12-B02-03
Trên [0,4], h(x)=−x²+6x−1. h'=−2x+6; h' đổi +→− ở x=3. Các ứng viên 0,3,4 cho h(0)=−1, h(3)=8, h(4)=7. GTLN=8 tại 3; GTNN=−1 tại 0. Lưu ý đỉnh cho GTLN còn GTNN nằm ở biên.

### EX-G12-B02-04
Trên [0,+∞), q(x)=x/(x²+1). q'=(1−x²)/(x²+1)²; tăng (0,1), giảm (1,+∞). q(0)=0, q(1)=1/2, lim∞q=0, và q(x)≥0. Do đó GTLN=1/2 tại x=1, GTNN=0 tại x=0. **Giới hạn 0 khi x→∞ không phải một điểm đạt được**, nhưng lần này 0 được đạt tại x=0.

### EX-G12-B02-05
Một khu vườn hình chữ nhật có chu vi 24 m. Đặt chiều rộng x m, chiều dài 12−x m; điều kiện 0<x<12. A(x)=x(12−x), A'=12−2x, dấu +→− tại x=6. Diện tích lớn nhất 36 m² khi hình vuông 6×6 m. Diện tích tiến gần 0 ở hai biên không hợp lệ, nên **không có GTNN** trên miền hình chữ nhật không suy biến (0,12); phải nói rõ điều kiện mô hình.

## PED6: TỰ THỬ trước Core

A. Hàm có cực đại tại x=2 nhưng liên tục trên [0,5], giá trị ở x=5 cao hơn: GTLN ở đâu? Nêu lý do.
B. Hàm f(x)=x, 0<x<1, "gần 1" khác "đạt 1" như thế nào?
C. Khi tối ưu một chiều dài x, vì sao cần ghi 0<x<12 trước khi đạo hàm?
Tự ghi dự đoán, chỉ sau đó mở từng Core. Nếu sai: đi tới đúng thẻ D6, thử lại mục khác rồi mới trở về câu gốc.

## D3: Canonical Core, Practice, Application

### THPT-G12-CHI-B02-C01 | skill_id=G12-B02-EXTREMA_GLOBAL_MEANING | placement=SGK_CORE | role=SGK_CORE
**Hỏi:** f(x)=x trên (0,1) có GTLN bằng 1 không? Giải thích.
**Đối chiếu sau tự làm:** Không; với mọi x<1 tồn tại y=(x+1)/2 trong (x,1), nên f(y)>f(x). 1 chỉ là supremum.

### THPT-G12-CHI-B02-C02 | skill_id=G12-B02-CLOSED_INTERVAL_EXISTENCE | placement=SGK_CORE | role=SGK_CORE
**Hỏi:** Hàm liên tục trên [−1,3] có chắc đạt GTNN và GTLN không?
**Đối chiếu:** Có, bởi định lý giá trị cực trị trên đoạn đóng hữu hạn; chưa cần biết chúng ở điểm nào.

### THPT-G12-CHI-B02-C03 | skill_id=G12-B02-CRITICAL_END_POINTS | placement=SGK_CORE | role=SGK_CORE
**Hỏi:** Tìm GTLN/GTNN f(x)=x²−2x trên [0,4].
**Đối chiếu:** f'=2x−2, ứng viên x=0,1,4, lần lượt f=0,−1,8; GTNN=−1, GTLN=8.

### THPT-G12-CHI-B02-C04 | skill_id=G12-B02-OPEN_DOMAIN_NONATTAINMENT | placement=SGK_CORE | role=SGK_CORE
**Hỏi:** Trên miền (0,+∞), f(x)=1/x có giá trị nhỏ nhất bằng 0 không?
**Đối chiếu:** Không; mọi 1/x>0, lim∞=0 không đạt được; cũng không có GTLN vì không bị chặn trên gần 0+.

### THPT-G12-CHI-B02-P01 | skill_id=G12-B02-CRITICAL_END_POINTS | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** Tìm max/min g(x)=−x²+4x+2 trên [0,5], ghi cả điểm đạt.
**Đối chiếu:** g'=−2x+4, c=2; g(0)=2, g(2)=6, g(5)=−3. Max=6 tại2, min=−3 tại5.

### THPT-G12-CHI-B02-P02 | skill_id=G12-B02-OPEN_DOMAIN_NONATTAINMENT | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** f(x)=x² trên (−1,1) có GTNN? GTLN? Chứng minh.
**Đối chiếu:** min=0 tại x=0; không có max, vì x²<1 với mọi |x|<1 dù sup=1.

### THPT-G12-CHI-B02-P03 | skill_id=G12-B02-CONSTRAINED_DOMAIN | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** Xét f(x)=x/(x²+1), x≥0. Tìm GTLN, GTNN.
**Đối chiếu:** f'=(1−x²)/(x²+1)²; max 1/2 tại1, min0 tại0. Mệnh đề f→0 khi x∞ không tự chứng minh GTNN nếu quên x=0.

### THPT-G12-CHI-B02-P04 | skill_id=G12-B02-EXTREMA_GLOBAL_MEANING | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** Trên [−2,2], f(x)=x³ có GTLN, GTNN và cực trị nội không?
**Đối chiếu:** max=8 tại2; min=−8 tại−2; không có cực trị nội dù f'(0)=0.

### THPT-G12-CHI-B02-P05 | skill_id=G12-B02-CLOSED_INTERVAL_EXISTENCE | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** Vì sao f(x)=1/x trên [−1,1]\{0} không được áp dụng định lý liên tục trên đoạn [−1,1]?
**Đối chiếu:** Không xác định tại0, miền xét không phải toàn đoạn đóng [−1,1]; f không bị chặn gần 0 nên cũng không có min/max toàn miền.

### THPT-G12-CHI-B02-A01 | skill_id=G12-B02-OPTIMIZATION_MODEL | placement=SGK_APPLICATION | role=SGK_APPLICATION
**Hỏi:** Mảnh vườn chữ nhật chu vi 24 m, hai cạnh dương. Diện tích lớn nhất và có GTNN dương không?
**Đối chiếu:** x∈(0,12), A=x(12−x)≤36 m² (dấu bằng x=6); không có GTNN vì A→0+ khi x→0+.

## D4: Một thư viện Written, Anchor là nhãn

### THPT-G12-CHI-B02-W01 | skill_id=G12-B02-CRITICAL_END_POINTS | placement=SGK_WRITTEN | role=WRITTEN
**Đề:** Tìm max/min f(x)=x³−3x trên [−2,2]. Phân biệt cực trị nội với GTLN/GTNN.
**Lời giải tự mở:** f'=3(x+1)(x−1). Ứng viên −2,−1,1,2; f lần lượt −2,2,−2,2. GTLN=2 đạt tại x=−1 và2, GTNN=−2 đạt tại x=−2 và1. Cực đại nội x=−1, cực tiểu nội x=1, không vì thế bỏ qua hai biên.
**Rubric /4:** 1 D+f'; 1 các điểm tới hạn và biên; 1 bốn giá trị; 1 max/min đúng cả điểm đạt và phân biệt cực trị nội.

### THPT-G12-CHI-B02-W02 | skill_id=G12-B02-OPTIMIZATION_MODEL | placement=SGK_WRITTEN | role=ANCHOR_TAG
**Đề:** Từ 28 m dây quây khu chữ nhật không suy biến, tìm diện tích lớn nhất; giải thích có đạt diện tích nhỏ nhất không.
**Lời giải tự mở:** x+y=14, 0<x<14; A=x(14−x), A'=14−2x; max49 m² khi x=y=7. A>0 và tiến về0 khi x→0+, nhưng 0 không đạt nên không có min.
**Rubric /4:** 1 xác lập đúng miền/biến; 1 công thức diện tích; 1 tìm tối ưu và đơn vị; 1 xử lý biên mở, giải thích min không tồn tại. Anchor là tag, không clone item.

## D6: HELP 5 bước, trở lại cùng outcome

### HELP-G12-B02-01 | skill_id=G12-B02-EXTREMA_GLOBAL_MEANING | return_item=THPT-G12-CHI-B02-C01
1. Lỗi: cho rằng tiến tới 1 nghĩa là đạt 1.
2. Bản chất: "lớn nhất" yêu cầu có x0 trong miền.
3. Gợi lại: giữa x=0.8 và1 luôn có 0.9.
4. Tự thử: f(x)=x, (2,3) có max3?
5. Quay lại C01.

### HELP-G12-B02-02 | skill_id=G12-B02-CLOSED_INTERVAL_EXISTENCE | return_item=THPT-G12-CHI-B02-C02
1. Lỗi: bỏ điều kiện liên tục và đoạn đóng.
2. Bản chất: "đạt" là điều kiện quan trọng của định lý đoạn.
3. Gợi lại: y=x trên (0,1) khác [0,1].
4. Tự thử: y=x trên [0,1] đạt max/min tại đâu?
5. Quay lại C02.

### HELP-G12-B02-03 | skill_id=G12-B02-CRITICAL_END_POINTS | return_item=THPT-G12-CHI-B02-C03
1. Lỗi: chỉ ghi nghiệm f'=0.
2. Bản chất: điểm biên có thể lớn hơn/nhỏ hơn cực trị nội.
3. Gợi lại: f(0), f(1), f(4) của x²−2x.
4. Tự thử: tại sao không bỏ x=4?
5. Quay lại C03.

### HELP-G12-B02-04 | skill_id=G12-B02-OPEN_DOMAIN_NONATTAINMENT | return_item=THPT-G12-CHI-B02-C04
1. Lỗi: nhầm giới hạn với giá trị đạt.
2. Bản chất: giới hạn bằng0 nhưng 1/x không thể bằng0.
3. Gợi lại: với x>0, 1/x>0.
4. Tự thử: f=1/x trên [1,∞) có max ở đâu, có min0?
5. Quay lại C04.

### HELP-G12-B02-05 | skill_id=G12-B02-CONSTRAINED_DOMAIN | return_item=THPT-G12-CHI-B02-P03
1. Lỗi: lấy x<0 dù bài quy định x≥0.
2. Bản chất: miền xét là ràng buộc của tối ưu.
3. Gợi lại: f(0)=0 và f(1)=1/2.
4. Tự thử: khi x>1, f tăng hay giảm?
5. Quay lại P03.

### HELP-G12-B02-06 | skill_id=G12-B02-OPTIMIZATION_MODEL | return_item=THPT-G12-CHI-B02-A01
1. Lỗi: tối ưu không ghi miền chiều dài.
2. Bản chất: đoạn dây cố định, hai chiều dương.
3. Gợi lại: chiều dài=12−x.
4. Tự thử: nếu x=0 có còn khu vườn hình chữ nhật không?
5. Quay lại A01.

## AUTHOR_CHECKPOINT
AUTHOR_CANDIDATE_ONLY: 6 outcomes, 5 D2, 4 Core +5 Practice +1 Application +2 Written=12 canonical original IDs, 6 same-outcome HELP. S1 title/ranges visually checked. Academic/PED **PENDING external NotebookLM review**, no ready manifest, no Mastery.
