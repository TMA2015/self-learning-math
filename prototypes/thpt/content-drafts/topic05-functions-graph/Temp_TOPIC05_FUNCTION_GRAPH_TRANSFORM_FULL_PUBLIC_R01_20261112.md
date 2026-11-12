# CĐ05/22 — Hàm số, Đồ thị và Phép biến đổi đồ thị

**LEARNING_PATH: TOPIC** — hành trình chuyên đề độc lập với SGK, đúng **Kiến thức / Luyện tập / Tự kiểm tra**; không tạo Core riêng. Tổ chức theo mục tiêu học tập và phương pháp hình học của đồ thị, không theo bài SGK lớp nào.

# Kiến thức

## Vì sao cần học đồ thị và phép biến đổi đồ thị?

Một đại lượng phụ thuộc một đại lượng khác thông qua **hàm số có miền đầu vào**. Hình đồ thị giúp thấy xu hướng, đầu mút, thay đổi do đổi đơn vị hoặc dời mốc; muốn hiểu đúng phải giải thích mỗi phép biến đổi bằng tọa độ. Ta học khái niệm trước quy tắc, thử trước khi mở đối chiếu và tìm đường tự sửa ngay tại chuyên đề.

**Tiền đề:** số thực và tập hợp, căn số học √u (u≥0), phân số mẫu khác0, bình phương≥0, giá trị tuyệt đối, hệ trục tọa độ. Được nhắc tại từng mô-đun, không bắt mở SGK.

**Ranh giới theo danh mục 22:** CĐ05 dạy hàm tổng quát, đọc đồ thị và phép dịch/đối xứng/co giãn. Hàm mũ–lôgarit thuộc CĐ04; lượng giác thuộc CĐ06; giới hạn/ liên tục hình thức CĐ08; đạo hàm CĐ09; khảo sát/tối ưu bằng đạo hàm CĐ10. Có thể dùng ví dụ tiền đề nhưng không tự công nhận các chuyên đề đó đã hoàn thành.

## TOP05-M01 · Hàm số và đầu ra duy nhất

**Outcome TOP05-O01:** Nhận biết, giải thích và vận dụng đúng khái niệm này.
**Vì sao cần học?** Tại sao một bảng có cùng x nhiều lần vẫn có thể là hàm số?
**Nhắc tiền đề tại chỗ:** Tập đầu vào D; cặp có thứ tự (x,y).
**Hình thành bản chất trước công thức:** Hàm f:D→ℝ phải gán **mỗi x∈D đúng một y=f(x)**. Các x khác nhau được phép cùng một y; nhầm tính đơn trị với tính một-một khiến bác bỏ sai bảng số liệu. Đồ thị của hàm không có hai tung độ với cùng một hoành độ.
**Ví dụ giải có lý do chọn cách:** Bảng (0,2),(1,4),(1,4) hợp lệ vì hai lần x=1 đều cho4. Thay một cặp (1,4) bằng (1,7) sẽ không hợp lệ. Kiểm duy nhất đầu ra, không kiểm duy nhất đầu vào.
**Tự thử trước khi xem đối chiếu:** Các cặp (1,3),(2,3),(3,5) là hàm số?
**Tự mở đối chiếu:** Có, vì mỗi x chỉ có một y; y=3 có thể ứng với hai x.
**D6 đường khắc phục:** Nếu nhầm tính đơn trị với một-một, vẽ mũi tên từ 1 và 2 tới cùng 3; luyện P01/P02.
**Câu luyện:** `THPT-TOP05-P01`, `THPT-TOP05-P02`.


## TOP05-M02 · Miền xác định bằng giao điều kiện

**Outcome TOP05-O02:** Nhận biết, giải thích và vận dụng đúng khái niệm này.
**Vì sao cần học?** Căn số học và mẫu số tạo ra điểm bị loại; dấu ≥ của căn không được biến thành >.
**Nhắc tiền đề tại chỗ:** Căn √u đòi u≥0, mẫu v≠0.
**Hình thành bản chất trước công thức:** Với √A(x)/B(x) cần đồng thời A(x)≥0 và B(x)≠0, nên D là **giao** các miền; luôn xét biểu thức ban đầu trước khi rút gọn. Ở đầu mút căn bằng0 là hợp lệ nếu mẫu khác0.
**Ví dụ giải có lý do chọn cách:** √(x+1)/(x−2): cần x≥−1, x≠2 ⇒ D=[−1,2)∪(2,+∞). Nhận x=−1 vì căn bằng0, mẫu−3.
**Tự thử trước khi xem đối chiếu:** Tìm D của √(9−x²)/(x−1).
**Tự mở đối chiếu:** D=[−3,1)∪(1,3], vì −3≤x≤3 và x≠1.
**D6 đường khắc phục:** Nếu bỏ điều kiện mẫu, thử x=1; nếu loại căn bằng0, thử x=±3; luyện P03/P04.
**Câu luyện:** `THPT-TOP05-P03`, `THPT-TOP05-P04`.


## TOP05-M03 · Tập giá trị của hàm trong miền thật

**Outcome TOP05-O03:** Nhận biết, giải thích và vận dụng đúng khái niệm này.
**Vì sao cần học?** Một biểu thức có thể cho rất nhiều giá trị trên ℝ, nhưng trên số sản phẩm nguyên chỉ có ít đầu ra.
**Nhắc tiền đề tại chỗ:** Phép thế số và tập số nguyên/đoạn.
**Hình thành bản chất trước công thức:** T={f(x):x∈D} là tập **các y thật nhận được**, khác tập xác định D và tập đích ℝ. Miền rời rạc dẫn tới tập giá trị rời rạc, không tự nối thành khoảng.
**Ví dụ giải có lý do chọn cách:** f(x)=x² trên D={−2,0,1} cho T={0,1,4}. Với D=[−2,1] thì T=[0,4]. Cùng công thức nhưng miền khác nhau làm tập giá trị khác.
**Tự thử trước khi xem đối chiếu:** f(q)=3q−1 với q∈{0,1,2} có T nào?
**Tự mở đối chiếu:** T={−1,2,5}, không phải cả đoạn [−1,5].
**D6 đường khắc phục:** Nếu lầm T với [min,max], liệt kê đầu vào thực sự cho phép; luyện P05/P06.
**Câu luyện:** `THPT-TOP05-P05`, `THPT-TOP05-P06`.


## TOP05-M04 · Điểm và đồ thị: đọc dữ kiện thay vì tưởng tượng

**Outcome TOP05-O04:** Nhận biết, giải thích và vận dụng đúng khái niệm này.
**Vì sao cần học?** Nối một vài điểm đo thành đường cong có thể là giả định, không phải dữ kiện chắc chắn.
**Nhắc tiền đề tại chỗ:** Hệ trục Oxy; điểm A(a,b).
**Hình thành bản chất trước công thức:** Γ={(x,f(x)):x∈D}. A(a,b) thuộc đồ thị khi a∈D và b=f(a). Chấm đặc biểu thị điểm thuộc, chấm rỗng không thuộc; đường thẳng đứng x=c gặp hai y thì quan hệ không là đồ thị y=f(x).
**Ví dụ giải có lý do chọn cách:** f(x)=|x−2|+1: A(1,2) thuộc vì f(1)=2, B(3,3) không thuộc vì f(3)=2. Thay vào công thức là lý do kiểm nhanh chính xác.
**Tự thử trước khi xem đối chiếu:** Vì sao đường tròn x²+y²=9 không biểu diễn hàm y=f(x) trên [−3,3]?
**Tự mở đối chiếu:** x=0 cho hai y=3 và −3, vi phạm một đầu vào một đầu ra.
**D6 đường khắc phục:** Nếu chỉ nhìn đường cong mượt và gọi hàm, kẻ đường thẳng đứng qua x=0; luyện P07/P08.
**Câu luyện:** `THPT-TOP05-P07`, `THPT-TOP05-P08`.


