# THPT-G12-CHI-B01-W01

Nguồn lịch sử: Git blob `86063e922bbb883f6ae9a3d86049f60ff3fe5562`. Candidate canonical của kho bài tập; giữ nguyên bài, vai trò, rubric /4 và nội dung đã phản biện. Chỉ chuẩn hóa notation X-G.5.

### THPT-G12-CHI-B01-W01 | skill_id=G12-B01-EXTREMA_SIGN_CHANGE | placement=SGK_WRITTEN | role=WRITTEN
**Đề:** Khảo sát sự đồng biến, nghịch biến và cực trị của \(f(x)=x^3-3x\), tự vẽ phác thảo bảng dấu. Trình bày vì sao \(f'(x)=0\) riêng lẻ chưa phải kết luận.
**Rubric tự đối chiếu /4 (chỉ sau khi làm):** 1 điểm xác định \(D=\mathbb R\) và \(f'(x)=3(x^2-1)\); 1 điểm tìm đúng \(-1,1\) và dấu +,−,+; 1 điểm nêu đúng các khoảng tăng/giảm; 1 điểm tính đúng cực đại \((-1;2)\), cực tiểu \((1;-2)\) và giải thích đổi dấu.
**answer:** Tập xác định \(\mathbb R\). \(f'(x)=3(x-1)(x+1)\), bằng 0 tại \(-1\) và \(1\); dấu đạo hàm là \(+,-,+\) lần lượt trên \((-\infty;-1)\), \((-1;1)\) và \((1;+\infty)\). Hàm số tăng trên \((-\infty;-1)\) và \((1;+\infty)\), giảm trên \((-1;1)\). Cực đại địa phương ở \(x=-1\) với \(f(-1)=2\); cực tiểu địa phương ở \(x=1\) với \(f(1)=-2\). Cần xét **dấu đổi chiều** của \(f'\) tại điểm tới hạn, không kết luận cực trị chỉ vì \(f'=0\).

**solution:**

**Bước 1 — Xét điều kiện.** \(f(x)=x^3-3x\) là đa thức nên xác định trên \(D=\mathbb R\) và khả vi với mọi \(x\in\mathbb R\).

**Bước 2 — Đạo hàm và các điểm cần kiểm tra.**
\[
f'(x)=3x^2-3=3(x-1)(x+1).
\]
Phương trình \(f'(x)=0\) cho hai nghiệm \(x=-1\) và \(x=1\), chia trục số thành ba khoảng.

**Bước 3 — Xét dấu, không bỏ qua bước này.**
- Nếu \(x<-1\): hai thừa số \((x-1)\) và \((x+1)\) đều âm, nên \(f'(x)>0\).
- Nếu \(-1<x<1\): một âm, một dương, nên \(f'(x)<0\).
- Nếu \(x>1\): cả hai dương, nên \(f'(x)>0\).

Bảng biến thiên có hàng dấu đạo hàm **\(+\;|\;0\;|\;-\;|\;0\;|\;+\)** qua các mốc \(-1\) và \(1\). Hàng giá trị hàm: tăng đến \(f(-1)=2\), giảm đến \(f(1)=-2\), rồi lại tăng.

**Bước 4 — Kết luận đồng biến/nghịch biến và cực trị.** Hàm đồng biến trên \((-\infty;-1)\) và \((1;+\infty)\); nghịch biến trên \((-1;1)\). Tại \(x=-1\), \(f'\) đổi dấu **dương → âm**, nên \(x=-1\) là điểm cực đại, giá trị cực đại địa phương \(2\) (điểm trên đồ thị \((-1;2)\)). Tại \(x=1\), \(f'\) đổi dấu **âm → dương**, nên \(x=1\) là điểm cực tiểu, giá trị cực tiểu địa phương \(-2\) (điểm \((1;-2)\)).

**Bước 5 — Vì sao \(f'(x_0)=0\) chưa đủ?** Đây mới là dấu hiệu của một **ứng viên điểm cực trị** đối với hàm khả vi trong khoảng đang xét. Phải kiểm tra sự đổi chiều đơn điệu, chẳng hạn xét dấu đạo hàm hai bên. Phản ví dụ \(g(x)=x^3\) có \(g'(0)=0\) nhưng \(g\) đồng biến trên cả hai phía của 0, nên \(x=0\) không là cực trị. Lưu ý hàm \(f\) không có giá trị lớn nhất/nhỏ nhất toàn cục trên \(\mathbb R\); các cực trị ở trên là **cực trị địa phương**, không phải cực trị toàn miền.

**D6 sau đối chiếu:** Nếu sai đạo hàm, trở về kiến thức \(f'\); nếu tìm đúng \(f'=0\) mà kết luận sai, làm lại bảng dấu và giải thích đổi dấu; nếu nhầm cực trị với GTLN/GTNN, đối chiếu định nghĩa cực trị địa phương và ứng dụng giới hạn miền ở Bài 2. Học sinh không tự cấp Mastery.

**Không tự cấp điểm Mastery:** học sinh chỉ tự so sánh với rubric, không dùng làm kiểm tra độc lập RD1.

