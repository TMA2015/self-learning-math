# THPT-G12-CHI-B01-W02

Nguồn lịch sử: Git blob `86063e922bbb883f6ae9a3d86049f60ff3fe5562`. Candidate canonical của kho bài tập; giữ nguyên bài, vai trò, rubric /4 và nội dung đã phản biện. Chỉ chuẩn hóa notation X-G.5.

### THPT-G12-CHI-B01-W02 | skill_id=G12-B01-DOMAIN_INTERVALS | placement=SGK_WRITTEN | role=ANCHOR_TAG
**Đề:** Xét \(f(x)=\frac1{x-2}\). Chứng minh f nghịch biến trên mỗi thành phần khoảng của miền xác định; nêu một cặp \(x_1<x_2\) ở hai phía \(x=2\) cho thấy không thể gộp các khoảng vào một phát biểu \"nghịch biến trên D\".
**Rubric tự đối chiếu /4:** 1 điểm \(D=\mathbb R\setminus\{2\}\); 1 điểm \(f'(x)=-\frac1{(x-2)^2}<0\); 1 điểm hai khoảng \((-\infty;2),(2;+\infty)\); 1 điểm phản ví dụ \(f(1)=-1,\ f(3)=1\) với \(1<3\) nhưng \(f(1)<f(3)\), nên không nghịch biến trên D theo định nghĩa toàn miền.
**answer:** \(D=\mathbb R\setminus\{2\}\). \(f'(x)=-\frac1{(x-2)^2}<0\) với mọi \(x\in D\), nên \(f\) nghịch biến trên **từng khoảng** \((-\infty;2)\) và \((2;+\infty)\). Nhưng \(1<3\) đều thuộc \(D\), trong khi \(f(1)=-1<f(3)=1\); điều này trái với yêu cầu \(f(x_1)>f(x_2)\) của một hàm nghịch biến khi lấy hai điểm bất kỳ \(x_1<x_2\) trên toàn \(D\). Không được gộp hai khoảng qua điểm \(x=2\) bị loại.

**solution:**

**Bước 1 — Miền xác định là bước không thể bỏ qua.** Mẫu \(x-2\ne0\), do đó \(D=\mathbb R\setminus\{2\}=(-\infty;2)\cup(2;+\infty)\). Hai khoảng này rời nhau, **không** tạo thành một khoảng liên thông chứa \(x=2\).

**Bước 2 — Đạo hàm trên từng thành phần miền xác định.**
\[
f'(x)=\left(\frac{1}{x-2}\right)'=-\frac{1}{(x-2)^2}.
\]
Với mọi \(x\in D\), \((x-2)^2>0\), nên \(f'(x)<0\).

**Bước 3 — Áp dụng đúng phạm vi của định lí dấu đạo hàm.** Trên mỗi khoảng \((-\infty;2)\) và \((2;+\infty)\), hàm xác định, liên tục và khả vi; đạo hàm luôn âm. Vì vậy theo tiêu chuẩn đơn điệu, hàm **nghịch biến trên từng khoảng** này.

**Bước 4 — Bác bỏ phát biểu gộp thành "nghịch biến trên D".** Chọn \(x_1=1\) và \(x_2=3\). Có \(1<3\), cả hai thuộc \(D\), nhưng
\[
f(1)=\frac1{1-2}=-1 < 1=\frac1{3-2}=f(3).
\]
Một hàm nghịch biến trên toàn tập xét theo so sánh mọi cặp \(x_1<x_2\) phải cho \(f(x_1)>f(x_2)\); cặp trên cho bất đẳng thức **ngược lại**. Vậy không thể kết luận hàm nghịch biến trên cả \(D\) theo nghĩa toàn tập.

**Bước 5 — Chỉ ra lỗi tư duy cần tránh.** Mệnh đề "\(f'(x)<0\) trên miền xác định" chỉ bảo đảm nghịch biến **trên từng khoảng nằm trọn trong miền xác định**. Không được áp dụng định lí trên đoạn \([1;3]\), vì tại \(x=2\) hàm **không xác định**. Không thể đi xuyên qua điểm gián đoạn để nối hai bảng biến thiên thành một khoảng đơn điệu chung.

**D6 sau đối chiếu:** Nếu sai \(D\), kiểm tra mẫu số trước khi đạo hàm; nếu nhầm "\(f'<0\)" thành "giảm trên mọi hợp khoảng", quay về điều kiện áp dụng trên **một khoảng**; nếu chưa hiểu phản ví dụ, so sánh trực tiếp \(f(1)=-1\) với \(f(3)=1\). Không ghi Mastery.

**Anchor chỉ gắn nhãn** cho cùng item_id W02, không tạo bản chép chấm điểm thứ hai.

