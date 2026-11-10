# Chuyên đề 1 · Luyện tập bổ sung cho M2–M3

**AUTHORING R00 — CÁC CÂU CHƯA REVIEW, CHƯA CANONICAL.** Bản này chứa **7 câu áp dụng và 2 bài tự luận Written candidate**. Tất cả thuộc Luyện tập hoặc Vận dụng công khai; không đưa vào Tự kiểm tra RD1, không sinh Mastery. DRAFT ID chỉ là vị trí theo dõi; đối chiếu Q15 với ngân hàng R18/SGK/Topic trước khi tạo item canonical. Có thể tái sử dụng một item đã duyệt bằng nhiều placement/role, không nhân bản một câu chỉ vì chuyển sang Topic.

## A. Đọc bảng và đồ thị — M2

### DRAFT-T1-M2-APP04 — Dữ liệu đo chưa phải đường nối

Một nhóm học sinh đo nhiệt độ nước tại phút 0 được 20°C, phút 4 được 30°C. Bạn A tuyên bố: “Đúng phút 2, nước chắc chắn 25°C vì ta có thể nối hai dấu chấm bằng đoạn thẳng”. Nhận xét này có căn cứ chắc chắn không? Nếu muốn tính 25°C thì cần nêu thêm giả định nào?

<details><summary>Đối chiếu</summary>

**Không có căn cứ chắc chắn** từ hai số đo riêng lẻ. Đường nối thẳng là một mô hình **nội suy tuyến tính**, không phải dữ liệu đã đo. Nếu giả định nhiệt độ biến thiên đều giữa phút 0 và phút 4, khi ấy mới tính được \(20+(30-20)\cdot2/4=25\)°C. Cần phân biệt phép đo và giả định mô hình.

</details>

### DRAFT-T1-M2-APP05 — Nhánh nào nhận đúng tại mốc?

Xét \(p(x)=2-x\) khi \(x\le1\) và \(p(x)=x+1\) khi \(x>1\). Hãy tính \(p(0),p(1),p(2)\) rồi cho biết ở \(x=1\), điểm \((1;1)\) hay \((1;2)\) phải được tô đặc.

<details><summary>Đối chiếu</summary>

\(p(0)=2\), \(p(1)=2-1=1\) do nhánh thứ nhất **nhận dấu bằng**, \(p(2)=3\) do nhánh thứ hai. Điểm \((1;1)\) tô đặc; \((1;2)\) chỉ là vị trí nhánh bên phải tiến gần khi \(x\) về 1, nên phải là vòng rỗng. Hai nhánh không được tự nối liền.

</details>

### DRAFT-T1-M2-APP06 — Một nhánh tăng có làm cả hàm tăng?

Cho \(g(x)=x+1\) khi \(x<1\), \(g(x)=3\) khi \(x\ge1\). Bạn B nói: “\(g\) đồng biến nghiêm ngặt trên \(\mathbb R\) vì nhánh bên trái là đường thẳng đi lên.” Hãy phản biện bằng một cặp đầu vào.

<details><summary>Đối chiếu</summary>

Chọn \(x_1=1\) và \(x_2=2\). Tuy \(x_1<x_2\) nhưng \(g(1)=g(2)=3\), không thỏa \(g(x_1)<g(x_2)\). Nhánh bên trái tăng không đủ kết luận toàn hàm tăng **nghiêm ngặt**.

</details>

### DRAFT-T1-M2-WR01 — Tách dữ kiện khỏi suy luận

Một bảng chỉ ghi vận tốc của xe tại \(t=0\) là 10 km/h và tại \(t=10\) phút là 20 km/h. Hãy trình bày (a) điều gì biết chắc từ bảng; (b) điều gì chưa thể khẳng định về vận tốc lúc \(t=5\) phút; (c) nếu giả định vận tốc tăng đều theo thời gian, hãy tính vận tốc dự kiến ở phút thứ 5 và nêu giới hạn của kết quả.

<details><summary>Đối chiếu và rubric dự kiến</summary>

(a) Ta biết chính xác **hai giá trị được cho trong bảng** tại hai mốc. (b) Không xác định được vận tốc đúng lúc phút 5 nếu không có dữ liệu hoặc giả định thêm. (c) Dưới giả định vận tốc tăng tuyến tính theo thời gian, \(v(5)=10+(20-10)\cdot5/10=15\) km/h. Đó là kết quả **dự kiến theo mô hình**, không tự trở thành một quan sát có thật.

**Rubric tạm (4 điểm):** 1 điểm nêu đúng hai mốc; 1 điểm giải thích chưa đủ dữ kiện; 1 điểm tính đúng 15 km/h dưới giả định; 1 điểm phân biệt kết quả mô hình với dữ liệu đo.

</details>

## B. Parabol và hai phép biến đổi — M3

### DRAFT-T1-M3-APP06 — Trị tuyệt đối tác động ở đâu?

Cho \(f(x)=(x-1)^2-4\). Hãy tính \(|f(-2)|\) và \(f(|-2|)\); giải thích tại sao hai kết quả khác nhau.

<details><summary>Đối chiếu</summary>

\(f(-2)=(-3)^2-4=5\) nên \(|f(-2)|=5\). Còn \(f(|-2|)=f(2)=(1)^2-4=-3\). Một phép lấy trị tuyệt đối **đầu ra**, phép kia đổi **đầu vào** trước khi tính.

</details>

### DRAFT-T1-M3-APP07 — Số giao điểm với trục Ox sau biến đổi

Với \(f(x)=x^2-4x+3\), hãy tìm nghiệm của \(|f(x)|=0\) và của \(f(|x|)=0\). Vì sao số nghiệm có thể khác nhau?

<details><summary>Đối chiếu</summary>

\(|f(x)|=0\) tương đương \(f(x)=0\), nên \(x=1\) hoặc \(x=3\): **hai nghiệm**. Với \(f(|x|)=0\), đặt \(u=|x|\ge0\). Khi ấy \(u^2-4u+3=(u-1)(u-3)=0\), suy ra \(|x|=1\) hoặc \(|x|=3\), nên \(x=\pm1,\pm3\): **bốn nghiệm**. Đồ thị \(f(|x|)\) sao đối xứng các giao điểm thuộc nửa \(x\ge0\) sang nửa trái.

</details>

### DRAFT-T1-M3-APP08 — Trường hợp a bằng 0

Một công cụ hiển thị \(y=ax^2+bx+c\), đặt \(a=0\), \(b=-3\), \(c=2\). Khi ấy đồ thị thuộc loại nào, nghiệm của phương trình \(f(x)=0\) là bao nhiêu và có được dùng hoành độ đỉnh \(-b/(2a)\) không?

<details><summary>Đối chiếu</summary>

Hàm là \(f(x)=-3x+2\), có đồ thị **đường thẳng**, nghiệm \(x=2/3\). Không có đỉnh parabol và công thức \(-b/(2a)\) vô nghĩa vì \(2a=0\). Không được âm thầm đổi \(a=0\) thành một số nhỏ khác 0.

</details>

### DRAFT-T1-M3-APP09 — Miền quan sát quyết định cực trị

Độ cao của vật tính theo giây là \(H(t)=-(t-3)^2+9\). Chỉ xét \(t\in[0,2]\). Hãy tìm độ cao lớn nhất và giải thích vì sao không chọn \(t=3\).

<details><summary>Đối chiếu</summary>

Trong \([0,2]\), \((t-3)^2\) giảm khi \(t\) tăng nên \(H(t)\) tăng. \(H(0)=0\), \(H(2)=8\); do đó GTLN trong miền là 8 tại \(t=2\). Mốc \(t=3\) nằm ngoài khoảng quan sát. Không tự gọi 9 là GTLN trên \([0,2]\).

</details>

### DRAFT-T1-M3-WR02 — Hai cách đặt dấu | |, hai đồ thị

Cho \(f(x)=x^2-4x+3\). Xét \(g(x)=|f(x)|\) và \(h(x)=f(|x|)\). (a) Hãy mô tả phần đồ thị thay đổi trong mỗi trường hợp. (b) Tính \(g(2),h(2),g(-2),h(-2)\). (c) Tìm các nghiệm của \(g(x)=0\) và \(h(x)=0\). Kết luận hai đồ thị có giống nhau không và giải thích.

<details><summary>Đối chiếu và rubric dự kiến</summary>

(a) \(g\) phản chiếu phần \(f<0\), tức giữa các nghiệm 1 và 3, lên trên \(Ox\). \(h\) lấy nửa \(x\ge0\) của \(f\) rồi phản chiếu sang trái \(Oy\). (b) \(g(2)=1\), \(h(2)=-1\); \(f(-2)=15\), nên \(g(-2)=15\) nhưng \(h(-2)=f(2)=-1\). (c) \(g(x)=0\) tại \(x=1,3\); \(h(x)=0\) tại \(x=\pm1,\pm3\). Hai đồ thị không trùng nhau.

**Rubric tạm (6 điểm):** 2 điểm mô tả đúng mỗi phép biến đổi và trục phản chiếu; 2 điểm tính đúng bốn giá trị; 1 điểm giải đúng hai tập nghiệm; 1 điểm kết luận khác nhau có căn cứ. Các lời giải này là đối chiếu của bài công khai, **không** dùng làm ngân hàng Tự kiểm tra kín.

</details>

---

## Kiểm soát trùng câu, vai trò, và review

| Nhóm | Số bài ứng viên | Mục tiêu năng lực | Trạng thái |
|---|---:|---|---|
| M2 · APP04–06 + WR01 | 4 | đọc dữ liệu, điều kiện biên, lập luận đồng biến | DRAFT, cần cross-bank Q15 |
| M3 · APP06–09 + WR02 | 5 | hai phép biến đổi trị tuyệt đối, trường hợp a=0, cực trị có miền | DRAFT, cần cross-bank Q15 |
| **Tổng** | **9** | PUBLIC PRACTICE / WRITTEN CANDIDATE | **NOT CANONICAL** |

**Không trùng ID nội bộ**, nhưng một số bài cùng họ dạng với ví dụ R18 M2/M3 và gói R00 cũ; phải so sánh **stem, phương án, lời giải, rubric** trên nguồn canonical trước khi đưa vào thư viện chung. Nếu trùng chính câu, thêm placement/role vào một item duy nhất, không phát hành item khác ID. Các câu mới phải được NotebookLM phản biện về Academic/PED và Q01–Q18 đúng phần DELTA_C. Không sử dụng bất kỳ câu này làm chứng cứ RD1 độc lập sau khi đã lộ đáp án trong Practice.
