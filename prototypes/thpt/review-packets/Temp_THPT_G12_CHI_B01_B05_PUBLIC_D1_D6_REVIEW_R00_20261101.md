# Toán 12 KNTT Tập 1 — Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số

**PACKET_ID:** `THPT-G12-CHI-B01-B05-WHOLE-CHAPTER-AUTHORING-R00-20261101` · **LEARNING_PATH:** `SGK_CHAPTER` · **REVIEW_CANDIDATE:** `R00` · **OWNER_REVIEW:** `PENDING` · **ACADEMIC/PED PASS:** `NOT GRANTED`.

**S1 original scope to be confirmed by NotebookLM (5 Permanent Sources THPT v2.0):** SGK Toán 12 KNTT Tập 1 B1 tr.5–14, B2 tr.15–19, B3 tr.20–25, B4 tr.26–32, B5 tr.33–41, Bài tập cuối ChI tr.42–44, ChII starts tr.45. These are **web-index-based printed pages**, not direct owner-S1 PDF visual audit. SBT Toán 12 KNTT Tập 1 online index: B1 exercises from tr.8, B2 from tr.14, B3 from tr.19, B4 from tr.25, B5 from tr.31, ChI exercises tr.33–37; verify actual SBT S1 printed boundaries and answer keys. **Do not infer item equivalence with SGK/SBT just from skill labels.**

**Source pointers (external index, not official approval):** SGK https://www.metaisach.com/toan-12-tap-1-ket-noi-tri-thuc-voi-cuoc-song-bfa3425b ; SBT https://toan12.edu.vn/sbt-toan-12-ket-noi-tri-thuc ; use actual owner's original publisher scans as academic source S1 in NotebookLM.

**Architecture:** S1 → RD0 learning outcomes → D1 self-contained explanations (WHY→WHAT→HOW→conditions) → D2 worked examples → D3 SGK_CORE / SGK_PRACTICE → D4 shared Written+Anchor with a single rubric → D5 SVG figures → D6 five-step HELP → separate PRIVATE end-Chapter RD1; no Topic-only content needed. No practice result automatically becomes mastery. No keys/stems from private test in this public file.

**Source snapshot and item content rule:** Public file contains practice solutions **only available post-practice attempt**; Protected RD1 source, answer and rubric MUST NEVER be placed on GitHub public or client JS or shown before Final Submit. This public source is AUTHORING/REVIEW ONLY, not an operational website.

## A. Bài học và outcome matrix RD0

| lesson_id | Lesson | RD0 outcome IDs | Count |
|---|---|---|---:|
| `G12-B01` | Tính đơn điệu và cực trị của hàm số | `G12-B01-MONOTONIC_SIGN`, `G12-B01-STATIONARY_NOT_EXTREMUM`, `G12-B01-LOCAL_EXTREMA`, `G12-B01-DOMAIN_INTERVALS`, `G12-B01-SIGN_TABLE`, `G12-B01-PARAM_MONOTONIC` | 6 |
| `G12-B02` | Giá trị lớn nhất và giá trị nhỏ nhất của hàm số | `G12-B02-CLOSED_EXTREMA`, `G12-B02-ENDPOINT_CHECK`, `G12-B02-OPEN_INTERVAL`, `G12-B02-CRITICAL_COMPARE`, `G12-B02-OPTIMUM_CONTEXT` | 5 |
| `G12-B03` | Đường tiệm cận của đồ thị hàm số | `G12-B03-VERTICAL_ASY`, `G12-B03-HORIZONTAL_ASY`, `G12-B03-SLANT_ASY`, `G12-B03-HOLE_NOT_ASY`, `G12-B03-ASY_LIMITS` | 5 |
| `G12-B04` | Khảo sát sự biến thiên và vẽ đồ thị của hàm số | `G12-B04-CUBIC_SKETCH`, `G12-B04-RATIONAL_SKETCH`, `G12-B04-QUADRATIC_RATIONAL`, `G12-B04-INTERCEPT_GRAPH`, `G12-B04-READ_GRAPH`, `G12-B04-RANGE_RATIONAL` | 6 |
| `G12-B05` | Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn | `G12-B05-REVENUE_MODEL`, `G12-B05-OPEN_BOX`, `G12-B05-FENCE_AREA`, `G12-B05-MOTION_DIRECTION`, `G12-B05-COST_MIN` | 5 |
| `G12-CHI` | Tích hợp | `G12-CHI-INTEGRATED` | 1 |

### RD0 outcome-to-item and evidence ledger

| outcome_id | semantic expectation | public Core ID | public Practice ID | private RD1 ID |
|---|---|---|---|---|
| `G12-B01-MONOTONIC_SIGN` | Suy dấu f' để suy ra các khoảng tăng/giảm, xử lý điểm tới hạn. | `THPT-G12-CHI-C01` | `THPT-G12-CHI-P01` | `THPT-G12-CHI-RD1-01` (private metadata only) |
| `G12-B01-STATIONARY_NOT_EXTREMUM` | Hiểu f'=0 chưa đủ kết luận cực trị. | `THPT-G12-CHI-C02` | `THPT-G12-CHI-P02` | `THPT-G12-CHI-RD1-02` (private metadata only) |
| `G12-B01-LOCAL_EXTREMA` | Phân biệt điểm cực trị và giá trị cực trị, đổi dấu đạo hàm. | `THPT-G12-CHI-C03` | `THPT-G12-CHI-P03` | `THPT-G12-CHI-RD1-03` (private metadata only) |
| `G12-B01-DOMAIN_INTERVALS` | Tách các thành phần của miền xác định khi lập khoảng đơn điệu. | `THPT-G12-CHI-C04` | `THPT-G12-CHI-P04` | `THPT-G12-CHI-RD1-04` (private metadata only) |
| `G12-B01-SIGN_TABLE` | Diễn dịch bảng dấu đạo hàm thành bảng biến thiên. | `THPT-G12-CHI-C05` | `THPT-G12-CHI-P05` | `THPT-G12-CHI-RD1-05` (private metadata only) |
| `G12-B01-PARAM_MONOTONIC` | Xử lý tham số đồng biến, chú ý điều kiện đạo hàm không âm. | `THPT-G12-CHI-C06` | `THPT-G12-CHI-P06` | `THPT-G12-CHI-RD1-06` (private metadata only) |
| `G12-B02-CLOSED_EXTREMA` | Tìm GTLN/GTNN trên đoạn qua điểm tới hạn và hai đầu mút. | `THPT-G12-CHI-C07` | `THPT-G12-CHI-P07` | `THPT-G12-CHI-RD1-07` (private metadata only) |
| `G12-B02-ENDPOINT_CHECK` | Không bỏ qua đầu mút khi xét cực trị toàn cục. | `THPT-G12-CHI-C08` | `THPT-G12-CHI-P08` | `THPT-G12-CHI-RD1-08` (private metadata only) |
| `G12-B02-OPEN_INTERVAL` | Phân biệt cận trên/cận dưới với GTLN/GTNN đạt được. | `THPT-G12-CHI-C09` | `THPT-G12-CHI-P09` | `THPT-G12-CHI-RD1-09` (private metadata only) |
| `G12-B02-CRITICAL_COMPARE` | Chỉ xét các điểm tới hạn nằm trong đoạn và đánh giá ứng viên. | `THPT-G12-CHI-C10` | `THPT-G12-CHI-P10` | `THPT-G12-CHI-RD1-10` (private metadata only) |
| `G12-B02-OPTIMUM_CONTEXT` | Tính tối ưu trên miền ràng buộc và kiểm tra đơn vị. | `THPT-G12-CHI-C11` | `THPT-G12-CHI-P11` | `THPT-G12-CHI-RD1-11` (private metadata only) |
| `G12-B03-VERTICAL_ASY` | Nhận biết tiệm cận đứng từ giới hạn một phía. | `THPT-G12-CHI-C12` | `THPT-G12-CHI-P12` | `THPT-G12-CHI-RD1-12` (private metadata only) |
| `G12-B03-HORIZONTAL_ASY` | Giới hạn tại vô cực quyết định tiệm cận ngang. | `THPT-G12-CHI-C13` | `THPT-G12-CHI-P13` | `THPT-G12-CHI-RD1-13` (private metadata only) |
| `G12-B03-SLANT_ASY` | Dùng phép chia đa thức để tìm tiệm cận xiên. | `THPT-G12-CHI-C14` | `THPT-G12-CHI-P14` | `THPT-G12-CHI-RD1-14` (private metadata only) |
| `G12-B03-HOLE_NOT_ASY` | Phân biệt điểm khuyết có giới hạn hữu hạn với tiệm cận đứng. | `THPT-G12-CHI-C15` | `THPT-G12-CHI-P15` | `THPT-G12-CHI-RD1-15` (private metadata only) |
| `G12-B03-ASY_LIMITS` | Không đánh đồng giới hạn ở vô cực với giới hạn tại điểm. | `THPT-G12-CHI-C16` | `THPT-G12-CHI-P16` | `THPT-G12-CHI-RD1-16` (private metadata only) |
| `G12-B04-CUBIC_SKETCH` | Bảng biến thiên và dạng đồ thị đa thức bậc ba. | `THPT-G12-CHI-C17` | `THPT-G12-CHI-P17` | `THPT-G12-CHI-RD1-17` (private metadata only) |
| `G12-B04-RATIONAL_SKETCH` | Khảo sát phân thức bậc nhất/bậc nhất đầy đủ. | `THPT-G12-CHI-C18` | `THPT-G12-CHI-P18` | `THPT-G12-CHI-RD1-18` (private metadata only) |
| `G12-B04-QUADRATIC_RATIONAL` | Khảo sát phân thức bậc hai/bậc nhất và tiệm cận xiên. | `THPT-G12-CHI-C19` | `THPT-G12-CHI-P19` | `THPT-G12-CHI-RD1-19` (private metadata only) |
| `G12-B04-INTERCEPT_GRAPH` | Tìm giao trục và hiểu giới hạn khi dựng đồ thị. | `THPT-G12-CHI-C20` | `THPT-G12-CHI-P20` | `THPT-G12-CHI-RD1-20` (private metadata only) |
| `G12-B04-READ_GRAPH` | Đọc đồ thị/bảng biến thiên thay vì chỉ tính công thức. | `THPT-G12-CHI-C21` | `THPT-G12-CHI-P21` | `THPT-G12-CHI-RD1-21` (private metadata only) |
| `G12-B04-RANGE_RATIONAL` | Suy ra tập giá trị từ nhánh hyperbol và tiệm cận. | `THPT-G12-CHI-C22` | `THPT-G12-CHI-P22` | `THPT-G12-CHI-RD1-22` (private metadata only) |
| `G12-B05-REVENUE_MODEL` | Mô hình hóa doanh thu từ giá theo lượng và tối ưu. | `THPT-G12-CHI-C23` | `THPT-G12-CHI-P23` | `THPT-G12-CHI-RD1-23` (private metadata only) |
| `G12-B05-OPEN_BOX` | Lập miền hợp lệ khi tối ưu thể tích hộp không nắp. | `THPT-G12-CHI-C24` | `THPT-G12-CHI-P24` | `THPT-G12-CHI-RD1-24` (private metadata only) |
| `G12-B05-FENCE_AREA` | Tối ưu diện tích hình chữ nhật khi chu vi cố định. | `THPT-G12-CHI-C25` | `THPT-G12-CHI-P25` | `THPT-G12-CHI-RD1-25` (private metadata only) |
| `G12-B05-MOTION_DIRECTION` | Dùng dấu vận tốc để xác định chiều chuyển động, không nhầm với gia tốc. | `THPT-G12-CHI-C26` | `THPT-G12-CHI-P26` | `THPT-G12-CHI-RD1-26` (private metadata only) |
| `G12-B05-COST_MIN` | Phân biệt giảm chi phí với tối đa hóa lợi nhuận; xét miền. | `THPT-G12-CHI-C27` | `THPT-G12-CHI-P27` | `THPT-G12-CHI-RD1-27` (private metadata only) |
| `G12-CHI-INTEGRATED` | Kết hợp tăng giảm, tiệm cận, tối ưu và diễn giải có điều kiện. | `THPT-G12-CHI-C28` | `THPT-G12-CHI-P28` | `THPT-G12-CHI-RD1-28` (private metadata only) |

## B. D1 — Toàn bộ kiến thức SGK, giải thích concept-first

## Bài 1. Tính đơn điệu và cực trị của hàm số

### 1. Vì sao học điều này?
Đồ thị có thể mô tả vị trí, giá bán hoặc doanh thu. Trước khi vẽ chính xác, ta phải biết hàm đang **đi lên hay đi xuống**, và nơi nào sự tăng chuyển thành giảm. Đạo hàm lớp 11 cung cấp tốc độ biến thiên tại từng điểm, nhưng **dấu** của tốc độ biến thiên mới cho ta bức tranh cả khoảng.

### 2. Bản chất từ tốc độ biến đổi đến chiều biến thiên
Nếu $x$ tăng từng chút và $f'(x)>0$, giá trị $f(x)$ tăng cục bộ; nếu $f'(x)<0$, giá trị giảm. Trên một *khoảng* thuộc miền xác định, khi hàm khả vi và đạo hàm dương (hoặc âm) khắp khoảng, hàm đồng biến (hoặc nghịch biến). Đạo hàm có thể bằng 0 tại hữu hạn điểm cô lập mà hàm vẫn tăng nghiêm ngặt, như $x^3$. **Không ghép hai khoảng bị ngắt bởi lỗ hoặc tiệm cận**.

### 3. Định nghĩa, tiêu chuẩn, ví dụ suy luận
Đồng biến trên khoảng I: mọi $x_1<x_2$ trong I đều cho $f(x_1)<f(x_2)$. Nghịch biến đảo dấu. Điểm $x_0$ là điểm cực đại địa phương nếu trong một lân cận thuộc miền xác định, $f(x_0)\ge f(x)$; cực tiểu đảo chiều. Điểm cực trị **không phải** nhất thiết là nơi đạt GTLN/GTNN trên cả miền. Nếu đạo hàm đổi $+$ sang $-$ qua $x_0$ (hàm liên tục tại đó), có cực đại; $-$ sang $+$ có cực tiểu. Điều kiện $f'(x_0)=0$ không đủ: với $f(x)=x^3$, đạo hàm 0 tại 0 mà không có cực trị.

### 4. Hình thành bảng biến thiên và các bước thực hành
Ví dụ $f(x)=x^3-3x$: $f'(x)=3(x-1)(x+1)$. Nghiệm $-1,1$ chia trục thành ba khoảng; đánh dấu $+,-,+$. Vì thế đồ thị tăng đến $(-1,2)$, giảm đến $(1,-2)$ rồi tăng trở lại. Bảng biến thiên phải ghi **x, dấu f', chiều f, giá trị f tại mốc**, tách những điểm không thuộc miền.

### 5. Điều kiện và bẫy quan trọng
$f'(x)=0$ không tự động có cực trị; điểm góc có thể là cực trị dù đạo hàm không tồn tại. Cần xét dấu quanh điểm; không suy tính tăng giảm “trên $\mathbb R\setminus\{0\}$” chỉ từ đạo hàm âm ở hai nhánh của $1/x$. Khi có tham số, điều kiện $f'\ge0$ có thể đảm bảo tăng nghiêm ngặt nếu các điểm f'=0 không tạo khoảng phẳng.

### 6. Tự thử trước Core
Với $g(x)=x^3-12x$, tự tính $g'$ và tìm nghiệm; xác định cực đại/cực tiểu **trước khi** xem bài luyện. Kết quả tự kiểm sau khi làm: nghiệm $\pm2$; cực đại $16$ tại -2 và cực tiểu -16 tại 2. Vì sao đạo hàm bằng 0 tại x=0 của $x^3$ lại khác?

## Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số

### 1. Vì sao cần giá trị lớn nhất/nhỏ nhất?
Một cửa hàng không chỉ hỏi lúc nào lợi nhuận *đổi chiều tăng–giảm* mà phải tìm sản lượng có lợi nhuận **cao nhất trong các lựa chọn hợp lệ**. Cực đại địa phương chỉ so với lân cận; tối ưu toàn cục phải so sánh **toàn miền**, gồm đầu mút.

### 2. Định nghĩa từ bản chất
$M$ là GTLN của $f$ trên $D$ nếu (i) $f(x)\le M$ cho mọi $x\in D$ và (ii) **có** $x_0\in D$ để $f(x_0)=M$. GTNN tương tự. Phân biệt **cận trên đúng** không được đạt: $f(x)=x$ trên $(0,1)$ có supremum 1 nhưng không có GTLN.

### 3. Vì sao liên tục trên đoạn kín có GTLN/GTNN?
Trực quan, đồ thị liên tục trên đoạn hữu hạn không thể “chạy trốn” đến vô cùng hoặc tiến tới một đầu bị loại. Định lý giá trị lớn nhất/nhỏ nhất bảo đảm các giá trị đạt được. Muốn tính, xét tất cả ứng viên **đầu đoạn, điểm đạo hàm bằng 0, điểm đạo hàm không tồn tại nhưng hàm vẫn xác định**; sau đó so sánh giá trị.

### 4. Quy trình D2 có kiểm chứng
$f(x)=x^2-4x+1$ trên $[0,5]$: miền đóng; $f'=2x-4=0$ ở x=2. Bảng ứng viên: $f(0)=1$, $f(2)=-3$, $f(5)=6$. Vậy GTNN -3 tại2, GTLN6 tại5. Chỉ ghi “đỉnh parabol” sẽ bỏ sót giá trị 6 ở đầu mút!

### 5. Điều kiện và sai lầm phổ biến
Không mặc định hàm có cực trị toàn cục trên khoảng mở; cần xét tiếp cận đầu và giới hạn vô cực. Khi có bài toán thực tế, tập xác định toán học phải **giao với ràng buộc vật lý** (chiều dài dương, đơn vị, số lượng không âm/nguyên). Điểm tới hạn ngoài miền bị loại.

### 6. Tự thử
Với $f(x)=x^2-6x$ trên đoạn $[1,6]$, so sánh 3 ứng viên. Hướng dẫn tự đối chiếu sau khi thử: $f(1)=-5$, $f(3)=-9$, $f(6)=0$, nên min -9 và max 0.

## Bài 3. Đường tiệm cận của đồ thị hàm số

### 1. Vì sao cần đường tiệm cận?
Có những đồ thị tiến gần đường thẳng khi x tới vô cực hoặc tới ranh giới miền, dù không chạm vào một điểm cụ thể. Tiệm cận cho “khung xương” giúp vẽ đúng **hai nhánh, chiều đi ra vô cực và khoảng gián đoạn**.

### 2. Ba loại từ định nghĩa giới hạn
- Tiệm cận **đứng** $x=a$ khi ít nhất một giới hạn một phía $\lim_{x\to a^\pm}f(x)=\pm\infty$.
- Tiệm cận **ngang** $y=b$ khi $\lim_{x\to+\infty}f(x)=b$ hoặc $\lim_{x\to-\infty}f(x)=b$; giới hạn hai phía vô cực có thể khác nhau.
- Tiệm cận **xiên** $y=mx+n$, $m\ne0$ nếu $f(x)-(mx+n)\to0$ khi $x\to\pm\infty$; với hàm hữu tỉ, phép chia đa thức thường chỉ ra đường này.

### 3. Vì sao nghiệm mẫu không luôn là TCĐ?
$f(x)=(x^2-1)/(x-1)$ xác định khi $x\ne1$, nhưng bằng $x+1$ với $x\ne1$, nên giới hạn khi x→1 là 2: đồ thị có **lỗ**, không có TCĐ. Ngược lại $(2x+1)/(x-1)=2+3/(x-1)$ thực sự vô hạn khi x→1.

### 4. Ví dụ từng bước
$f(x)=(x^2+1)/(x-1)=x+1+2/(x-1)$. Khi x→1, phân thức dư vô hạn: TCĐ x=1. Khi $|x|\to\infty$, hiệu $f-(x+1)\to0$: tiệm cận xiên $y=x+1$. Đạo hàm có thể được xét để phác nhánh, nhưng **giới hạn** quyết định tiệm cận.

### 5. Kiểm soát sai lầm
Đừng gắn nhãn “tiệm cận đứng” cho mọi nghiệm của mẫu **trước khi khử nhân tử và xét giới hạn**; đừng suy tiệm cận ngang bằng cách thế x=0; đừng quên xét miền và một phía. Một đồ thị có thể cắt tiệm cận ngang; không phải định nghĩa yêu cầu không giao nhau.

### 6. Tự thử
Với $g(x)=(x^2+3)/(x+1)$, thực hiện phép chia để tìm TC xiên. Sau khi tự giải, kiểm lại $g=x-1+4/(x+1)$ nên TC xiên $y=x-1$, TC đứng x=-1.

## Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số

### 1. Vì sao kết hợp nhiều kỹ năng?
Chỉ biết đạo hàm chưa đủ để vẽ đồ thị: cần **miền xác định, giới hạn, tiệm cận, dấu đạo hàm, cực trị, giao trục**, rồi ghép thành phác họa đúng trật tự. Phương pháp toàn diện biến các dấu và giới hạn thành hình ảnh có thể kiểm tra.

### 2. Quy trình khép kín
**Bước 1** tìm miền xác định. **Bước 2** tính $f'$, nghiệm tới hạn và xét dấu. **Bước 3** tính giá trị cực trị và giới hạn tại biên miền/±∞. **Bước 4** xác định các tiệm cận theo giới hạn. **Bước 5** tìm giao trục, vài điểm kiểm tra và vẽ đúng các nhánh, tính đối xứng nếu có. Bảng biến thiên luôn giữ các đường ngắt tại điểm không xác định.

### 3. Ví dụ D2: phân thức bậc nhất/bậc nhất
$f(x)=(x+1)/(x-1)=1+2/(x-1)$. Miền $\mathbb R\setminus\{1\}$. $f'=-2/(x-1)^2<0$ nên **giảm trên từng nhánh**; tiệm cận x=1 và y=1. $f(0)=-1$, giao Ox=(-1,0). Nhánh trái tiến đến −∞ khi x→1−, nhánh phải tiến +∞ khi x→1+. Không ghi “giảm trên toàn bộ miền” dù đạo hàm âm ở hai nhánh.

### 4. Ví dụ D2: bậc hai/bậc nhất
$g(x)=(x^2+1)/(x-1)=x+1+2/(x-1)$: TCĐ x=1, TC xiên y=x+1; $g'=1-2/(x-1)^2$. Hai điểm tới hạn x=1±√2 nằm trên hai nhánh. Phải lập bảng dấu **riêng** từng phía TCĐ và tính giới hạn tại x→1± trước khi nối nét.

### 5. Cách đọc và kiểm hình
Với đồ thị đa thức bậc ba, xét dấu đạo hàm cho hai cực trị và hướng nhánh ở ±∞; với phân thức, quan sát tiệm cận và dấu của phần dư. Kiểm tra các giao trục và giá trị mẫu để tránh vẽ nhầm cực trị. Đồ thị phải có trục, nhãn đường, không chỉ mô tả bằng một hình không có điều kiện.

### 6. Tự thử
Phác $f(x)=x^3-3x$ theo $f'=3(x^2-1)$; tự kiểm cực đại (-1,2), cực tiểu (1,-2), cắt Ox tại $x=-\sqrt3,0,\sqrt3$. Trên đồ thị, kiểm xem chiều đi từ trái sang phải khớp bảng $+,-,+$.

## Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn

### 1. Vì sao phải mô hình hóa trước khi tính đạo hàm?
Đạo hàm chỉ tối ưu **hàm mà ta lập ra**, không tự quyết định hàm đó có đúng thực tế. Ví dụ giá bán giảm theo sản lượng; doanh thu bằng **giá × lượng**, không chỉ bằng giá. Với chiếc hộp gấp từ bìa, chiều dài cắt góc không được làm đáy biến mất. Mỗi mô hình có ràng buộc và đơn vị riêng.

### 2. Năm bước tư duy cho bài toán thực tiễn
(1) Xác định đại lượng cần tìm cực trị, kèm đơn vị. (2) Chọn biến độc lập và **miền vật lý**. (3) Diễn tả mục tiêu theo một biến. (4) Tính đạo hàm, xét các ứng viên trong miền (và biên nếu thuộc). (5) Thử lại điều kiện, độ lớn và diễn giải, kể cả nếu biến phải nguyên.

### 3. Ví dụ hộp không nắp có suy luận
Tấm bìa vuông cạnh 20 cm. Cắt bốn ô vuông cạnh x ở góc, gập thành hộp, ta có chiều cao x và cạnh đáy 20−2x. Điều kiện **$0<x<10$**, thể tích $V=x(20-2x)^2$. Đạo hàm $V'=(20-2x)(20-6x)$; trong miền có nghiệm $x=10/3$. Dấu V' dương trước và âm sau: đạt max $16000/27$ cm³. Nghiệm x=10 bị loại vì đáy suy biến, không được nhầm với nghiệm tối ưu.

### 4. Ví dụ kinh tế và ứng dụng chuyển động
Giá bán $p(q)=20-q$ với $q\in[0,20]$; doanh thu $R(q)=q(20-q)$ đạt max 100 khi q=10. Nếu q chỉ nhận số nguyên phải kiểm các số nguyên gần nghiệm đạo hàm. Chuyển động $s(t)$: dấu $v=s'$ cho **chiều chuyển động**, còn tốc độ là |v|; riêng dấu a=s'' không tự quyết định nhanh/chậm dần (cần xét v·a).

### 5. Giới hạn mô hình và phép đối chiếu
Giá trị cực đại chỉ đúng **trong miền ràng buộc** và với giả định giá–lượng tuyến tính. Phân biệt doanh thu, lợi nhuận, chi phí; mô hình chi phí có chi phí cố định, đơn vị tính rõ. Khi đầu mút không thuộc miền (cạnh bìa phải >0), dùng giới hạn biên để loại điểm giả.

### 6. Tự thử
Từ tấm bìa 12×12 cm cắt bốn hình vuông góc cạnh x để gập hộp. Hãy viết miền và V(x), tìm giá trị x tối ưu; sau khi tự tính đối chiếu x=2 cm, Vmax=128 cm³.

## C. D2 — Ví dụ giải thích lựa chọn cách làm (khác public item stems)

### Bài 1: Worked examples

#### EX-G12-B01-01 — Một đạo hàm kiểm soát chiều tăng

**Tình huống:** $f(x)=x^3-6x^2+9x$.  
**Lời giải theo bước:** $f'=3(x-1)(x-3)$, dấu +,-,+ nên tăng trên (-∞,1),(3,∞), giảm trên (1,3).  
**Tại sao chọn cách này:** Chọn dấu đạo hàm vì điều cần tìm là chiều biến thiên, không phải giao trục.

#### EX-G12-B01-02 — Điểm dừng không có cực trị

**Tình huống:** $f(x)=x^5$.  
**Lời giải theo bước:** $f'=5x^4\ge0$, bằng 0 tại 0 nhưng hàm vẫn tăng qua 0.  
**Tại sao chọn cách này:** Không kết luận cực trị chỉ vì đạo hàm bằng 0.

#### EX-G12-B01-03 — Đổi dấu tại góc nhọn

**Tình huống:** $f(x)=|x-2|$.  
**Lời giải theo bước:** Hàm giảm khi x<2, tăng khi x>2, cực tiểu tại 2 dù f' không tồn tại tại điểm 2.  
**Tại sao chọn cách này:** Cần xem tính liên tục và chiều biến thiên hai phía.

#### EX-G12-B01-04 — Điều kiện tham số cho hàm tăng

**Tình huống:** $f(x)=x^3+(m+2)x$.  
**Lời giải theo bước:** $f'=3x^2+m+2\ge0$ với mọi x iff $m\ge-2$.  
**Tại sao chọn cách này:** Điều kiện không âm trên toàn đường thẳng không buộc dương nghiêm ngặt ở mọi điểm.

### Bài 2: Worked examples

#### EX-G12-B02-01 — So sánh cả ba ứng viên

**Tình huống:** $f(x)=x^2-2x+4$ trên $[-1,4]$.  
**Lời giải theo bước:** $f'=2x-2$, giá trị tại -1,1,4 lần lượt 7,3,12 ⇒ GTNN3, GTLN12.  
**Tại sao chọn cách này:** Điểm tới hạn không quyết định GTLN nếu đầu mút lớn hơn.

#### EX-G12-B02-02 — GTLN trên đoạn không tại cực đại

**Tình huống:** $f(x)=x^3$ trên $[-1,2]$.  
**Lời giải theo bước:** Hàm tăng, min=-1 và max=8, đều tại đầu mút.  
**Tại sao chọn cách này:** Không cần có điểm cực trị nội miền mới có GTLN/GTNN.

#### EX-G12-B02-03 — Mở không đạt biên

**Tình huống:** $f(x)=1/x$ trên $(1,+\infty)$.  
**Lời giải theo bước:** Giá trị giảm từ dưới 1 tới gần 0, không đạt cả 0 lẫn 1.  
**Tại sao chọn cách này:** Giới hạn không đồng nghĩa giá trị đạt được.

#### EX-G12-B02-04 — Chi phí có ràng buộc

**Tình huống:** $C(q)=q^2-8q+20$ trên $[0,6]$.  
**Lời giải theo bước:** $C'=2q-8$; min tại4 bằng4, max tại0 bằng20.  
**Tại sao chọn cách này:** Kiểm cả nghiệm tới hạn và hai biên hợp lệ.

### Bài 3: Worked examples

#### EX-G12-B03-01 — Đứng và ngang

**Tình huống:** $f(x)=(x+3)/(x-2)$.  
**Lời giải theo bước:** $f=1+5/(x-2)$, TCĐ x=2, TCN y=1.  
**Tại sao chọn cách này:** Tách phần gần vô cực và phần phân thức nhỏ dần.

#### EX-G12-B03-02 — Tiệm cận xiên từ phép chia

**Tình huống:** $f(x)=(x^2+2)/(x+2)$.  
**Lời giải theo bước:** $f=x-2+6/(x+2)$ nên TC xiên y=x−2, TCĐ x=−2.  
**Tại sao chọn cách này:** Hệ số góc tiệm cận xiên khác 0, hiệu tiến 0 ở vô cực.

#### EX-G12-B03-03 — Lỗ không phải tiệm cận đứng

**Tình huống:** $f(x)=(x^2-9)/(x-3)$, $x\ne3$.  
**Lời giải theo bước:** $f=x+3$ với x≠3, giới hạn f=6 khi x→3, không có TCĐ.  
**Tại sao chọn cách này:** Không kết luận chỉ từ mẫu bằng 0.

#### EX-G12-B03-04 — Tiệm cận ngang và dấu

**Tình huống:** $f(x)=2+1/(x+2)$.  
**Lời giải theo bước:** TCN y=2 vì 1/(x+2)→0 khi x→±∞; TCĐ x=−2.  
**Tại sao chọn cách này:** Xét riêng giới hạn vô cực và ở điểm hữu hạn.

### Bài 4: Worked examples

#### EX-G12-B04-01 — Khảo sát toàn phần dạng bậc ba

**Tình huống:** $f(x)=x^3-6x$.  
**Lời giải theo bước:** $f'=3x^2-6$; cực đại tại x=−√2, cực tiểu tại x=√2; dấu f' +,-,+; hướng nhánh theo bậc ba.  
**Tại sao chọn cách này:** Bảng biến thiên, giao trục và tiệm cận (không có) là ba công việc tách nhau.

#### EX-G12-B04-02 — Phân thức và nhánh hyperbol

**Tình huống:** $f(x)=(x+2)/(x-1)$.  
**Lời giải theo bước:** $f=1+3/(x-1)$; f'=-3/(x-1)^2; TCĐ x=1, TCN y=1; giao Ox=(-2,0), Oy=(0,-2).  
**Tại sao chọn cách này:** Dấu f' dùng riêng mỗi nhánh, không nối qua TCĐ.

#### EX-G12-B04-03 — Bậc hai trên bậc nhất

**Tình huống:** $f(x)=(x^2+2)/(x+1)$.  
**Lời giải theo bước:** $f=x-1+3/(x+1)$; TCĐ x=-1, TC xiên y=x−1; f'=1-3/(x+1)^2.  
**Tại sao chọn cách này:** Chia trước khi tìm tiệm cận; nghiệm f'=0 ở hai phía phải tách.

#### EX-G12-B04-04 — Giao trục để kiểm soát bản vẽ

**Tình huống:** $f(x)=(2x-4)/(x+1)$.  
**Lời giải theo bước:** Giao Ox (2,0), giao Oy (0,-4); TCĐ x=-1, TCN y=2.  
**Tại sao chọn cách này:** Hình sai dấu tại giao trục thường phản ánh lỗi tính hoặc nhầm nhánh.

### Bài 5: Worked examples

#### EX-G12-B05-01 — Từ giá bán đến doanh thu

**Tình huống:** $p(q)=18-q$, $0\le q\le18$.  
**Lời giải theo bước:** $R=q(18-q)$, $R'=18-2q=0$ tại q=9, doanh thu lớn nhất 81.  
**Tại sao chọn cách này:** Phải nhân giá với lượng; không tối ưu riêng giá.

#### EX-G12-B05-02 — Cực đại diện tích hàng rào

**Tình huống:** Chu vi khu đất hình chữ nhật là 32 m.  
**Lời giải theo bước:** $A=x(16-x)$, 0<x<16, max=64 tại x=8, hình vuông 8×8.  
**Tại sao chọn cách này:** Miền vật lý giúp loại cạnh bằng 0.

#### EX-G12-B05-03 — Hộp không nắp từ bìa 30 cm

**Tình huống:** Bìa vuông 30 cm, cắt góc x và gập.  
**Lời giải theo bước:** $V=x(30-2x)^2$, 0<x<15; $V'=(30-2x)(30-6x)$, max tại x=5, V=2000 cm³.  
**Tại sao chọn cách này:** Đầu mút 15 làm đáy 0, không phải nghiệm cực đại.

#### EX-G12-B05-04 — Chuyển động có thay đổi chiều

**Tình huống:** $s(t)=t^3-3t^2$ trên $[0,3]$.  
**Lời giải theo bước:** $v=3t(t-2)$; chuyển động theo chiều âm khi 0<t<2, dương khi 2<t<3.  
**Tại sao chọn cách này:** Vận tốc âm không đồng nghĩa tốc độ âm; gia tốc không tự quyết định chiều.

## D. D3 — Canonical SGK Core và Practice: 2 bài độc lập mỗi outcome

**Quy tắc giao diện:** Giấu đáp án và lời giải trong quá trình làm; chỉ mở sau khi học sinh nộp bài formative, không cộng điểm Skill Mastery. Trong lần NotebookLM review, keys được hiển thị ở đây để kiểm toán.

#### THPT-G12-CHI-C01 | skill_id=`G12-B01-MONOTONIC_SIGN` | placement=`SGK_CORE` | content_version=R00

**Đề:** Cho $f(x)=x^3-3x$. Xác định khoảng đồng biến và nghịch biến.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Đồng biến $(-\infty,-1)$, $(1,+\infty)$; nghịch biến $(-1,1)$.  
**Lời giải có lý do:** $f′(x)=3(x-1)(x+1)$; đạo hàm dương bên ngoài hai nghiệm, âm bên trong.

#### THPT-G12-CHI-P01 | skill_id=`G12-B01-MONOTONIC_SIGN` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Xét $g(x)=x^3-12x$. Xác định các khoảng tăng và giảm.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Tăng $(-\infty,-2)$, $(2,+\infty)$; giảm $(-2,2)$.  
**Lời giải có lý do:** $g′(x)=3(x^2-4)$, dùng dấu trên các khoảng do $\pm2$ chia ra.

#### THPT-G12-CHI-C02 | skill_id=`G12-B01-STATIONARY_NOT_EXTREMUM` | placement=`SGK_CORE` | content_version=R00

**Đề:** $f(x)=x^3$ có đạo hàm bằng 0 tại 0. Có cực trị tại 0 không?  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Không.  
**Lời giải có lý do:** $f′(x)=3x^2$ không đổi dấu khi qua 0; hàm vẫn tăng.

#### THPT-G12-CHI-P02 | skill_id=`G12-B01-STATIONARY_NOT_EXTREMUM` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Vì sao $g(x)=x^5+2$ không có cực trị tại $x=0$ dù $g′(0)=0$?  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Vì đạo hàm không đổi dấu.  
**Lời giải có lý do:** $g′(x)=5x^4\ge0$; kiểm tra chiều biến thiên hai phía.

#### THPT-G12-CHI-C03 | skill_id=`G12-B01-LOCAL_EXTREMA` | placement=`SGK_CORE` | content_version=R00

**Đề:** Tìm các cực trị của $f(x)=x^3-3x$.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Cực đại tại $x=-1$, giá trị $2$; cực tiểu tại $x=1$, giá trị $-2$.  
**Lời giải có lý do:** $f′$ chuyển + sang − tại -1 và − sang + tại 1; thay vào $f$.

#### THPT-G12-CHI-P03 | skill_id=`G12-B01-LOCAL_EXTREMA` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Xác định giá trị cực trị của $g(x)=x^3-12x$.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Cực đại $16$ tại $-2$; cực tiểu $-16$ tại $2$.  
**Lời giải có lý do:** $g′=3(x-2)(x+2)$; đổi dấu, tính $g(\pm2)$.

#### THPT-G12-CHI-C04 | skill_id=`G12-B01-DOMAIN_INTERVALS` | placement=`SGK_CORE` | content_version=R00

**Đề:** Hàm $f(x)=\ln x$ tăng hay giảm trên miền xác định?  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Tăng trên $(0,+\infty)$.  
**Lời giải có lý do:** Miền xác định $x>0$, $f′=1/x>0$.

#### THPT-G12-CHI-P04 | skill_id=`G12-B01-DOMAIN_INTERVALS` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Hàm $g(x)=1/x$ giảm trên những khoảng nào? Có thể ghi giảm trên $\mathbb R\setminus\{0\}$ không?  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Giảm riêng trên $(-\infty,0)$ và $(0,+\infty)$; không kết luận giảm trên toàn tập bị ngắt.  
**Lời giải có lý do:** $g′=-1/x^2<0$; không ghép hai khoảng qua điểm gián đoạn.

#### THPT-G12-CHI-C05 | skill_id=`G12-B01-SIGN_TABLE` | placement=`SGK_CORE` | content_version=R00

**Đề:** Biết $f\prime$ dương trên $(-\infty,0)$, âm trên $(0,2)$ và dương trên $(2,+\infty)$. Nêu loại cực trị tại 0 và 2.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Cực đại tại 0; cực tiểu tại 2.  
**Lời giải có lý do:** Quy tắc đổi dấu +→− là cực đại, −→+ là cực tiểu; chưa thể biết giá trị nếu thiếu $f(0),f(2)$.

#### THPT-G12-CHI-P05 | skill_id=`G12-B01-SIGN_TABLE` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Một bảng dấu có $f\prime$ âm trước $x=4$, dương sau $x=4$. Kết luận gì?  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Cực tiểu tại $x=4$ nếu hàm liên tục và khả vi thích hợp quanh 4.  
**Lời giải có lý do:** Hàm giảm rồi tăng khi qua 4; cần xét miền xác định và sự liên tục tại điểm. 

#### THPT-G12-CHI-C06 | skill_id=`G12-B01-PARAM_MONOTONIC` | placement=`SGK_CORE` | content_version=R00

**Đề:** Tìm $m$ để $f(x)=x^3-3mx$ đồng biến trên $\mathbb R$.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** $m\le0$.  
**Lời giải có lý do:** $f′=3(x^2-m)\ge0$ với mọi x iff $m\le0$; đạo hàm có thể bằng 0 cô lập.

#### THPT-G12-CHI-P06 | skill_id=`G12-B01-PARAM_MONOTONIC` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Tìm $a$ để $g(x)=x^3+ax$ đồng biến trên $\mathbb R$.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** $a\ge0$.  
**Lời giải có lý do:** $g′=3x^2+a\ge0$ với mọi x iff $a\ge0$.

#### THPT-G12-CHI-C07 | skill_id=`G12-B02-CLOSED_EXTREMA` | placement=`SGK_CORE` | content_version=R00

**Đề:** Tìm GTLN và GTNN của $f(x)=x^2-4x+1$ trên $[0,5]$.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** GTNN $-3$ tại $x=2$; GTLN $6$ tại $x=5$.  
**Lời giải có lý do:** $f′=2x-4=0$ tại 2; so sánh $f(0)=1,f(2)=-3,f(5)=6$.

#### THPT-G12-CHI-P07 | skill_id=`G12-B02-CLOSED_EXTREMA` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Tìm GTLN/GTNN của $g(x)=x^2-6x$ trên $[1,6]$.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** GTNN $-9$ tại $3$; GTLN $0$ tại $6$.  
**Lời giải có lý do:** $g′=2x-6$; so sánh $g(1)=-5,g(3)=-9,g(6)=0$.

#### THPT-G12-CHI-C08 | skill_id=`G12-B02-ENDPOINT_CHECK` | placement=`SGK_CORE` | content_version=R00

**Đề:** Tìm GTLN/GTNN của $f(x)=x^3$ trên $[-2,1]$.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** GTNN $-8$ tại -2; GTLN $1$ tại 1.  
**Lời giải có lý do:** $f′=3x^2\ge0$, hàm tăng; so sánh hai đầu mút.

#### THPT-G12-CHI-P08 | skill_id=`G12-B02-ENDPOINT_CHECK` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Tìm giá trị lớn nhất và nhỏ nhất của $g(x)=-x$ trên $[-1,4]$.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** GTLN $1$, GTNN $-4$.  
**Lời giải có lý do:** Hàm giảm trên đoạn; GTLN đầu trái, GTNN đầu phải.

#### THPT-G12-CHI-C09 | skill_id=`G12-B02-OPEN_INTERVAL` | placement=`SGK_CORE` | content_version=R00

**Đề:** Hàm $f(x)=x$ trên $(0,1)$ có GTLN hoặc GTNN không?  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Không có cả hai.  
**Lời giải có lý do:** Mọi giá trị nằm giữa 0 và 1; các mốc 0,1 không thuộc khoảng, chỉ có infimum/supremum.

#### THPT-G12-CHI-P09 | skill_id=`G12-B02-OPEN_INTERVAL` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Hàm $g(x)=1/x$ trên $(1,+\infty)$ có GTNN không?  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Không; chỉ có cận dưới đúng bằng 0.  
**Lời giải có lý do:** Hàm dương, tiến về 0 khi x→∞ nhưng không bao giờ bằng 0.

#### THPT-G12-CHI-C10 | skill_id=`G12-B02-CRITICAL_COMPARE` | placement=`SGK_CORE` | content_version=R00

**Đề:** Tính GTLN/GTNN của $f(x)=x^3-3x$ trên $[-2,2]$.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** GTLN $2$ (tại -1 và 2); GTNN $-2$ (tại -2 và 1).  
**Lời giải có lý do:** $f′=3x^2-3=0$ tại ±1; giá trị: -2,2,-2,2 lần lượt ở -2,-1,1,2.

#### THPT-G12-CHI-P10 | skill_id=`G12-B02-CRITICAL_COMPARE` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Tìm GTLN của $g(x)=x^3-3x$ trên $[0,3]$.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** GTLN $18$ tại 3.  
**Lời giải có lý do:** $g′=0$ tại 1 (trong đoạn), $g(0)=0,g(1)=-2,g(3)=18$.

#### THPT-G12-CHI-C11 | skill_id=`G12-B02-OPTIMUM_CONTEXT` | placement=`SGK_CORE` | content_version=R00

**Đề:** Lợi nhuận (triệu đồng) $P(q)=-q^2+12q-20$ với $0\le q\le10$. Mức $q$ nào cho lợi nhuận lớn nhất?  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** $q=6$, lợi nhuận tối đa $16$ triệu.  
**Lời giải có lý do:** $P′=-2q+12=0$ cho $q=6$; xét $P(0)=-20,P(6)=16,P(10)=0$.

#### THPT-G12-CHI-P11 | skill_id=`G12-B02-OPTIMUM_CONTEXT` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Lợi nhuận $Q(t)=-2t^2+16t-10$ trên $[0,8]$. Xác định đỉnh tối ưu.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** $t=4$, $Q_{max}=22$.  
**Lời giải có lý do:** $Q′=-4t+16=0$ tại 4; so sánh hai đầu.

#### THPT-G12-CHI-C12 | skill_id=`G12-B03-VERTICAL_ASY` | placement=`SGK_CORE` | content_version=R00

**Đề:** Tìm tiệm cận đứng của $f(x)=(2x+1)/(x-1)$.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** $x=1$.  
**Lời giải có lý do:** $f=2+3/(x-1)$, khi x→1± giá trị tiến ±∞.

#### THPT-G12-CHI-P12 | skill_id=`G12-B03-VERTICAL_ASY` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Tìm tiệm cận đứng của $g(x)=(x+2)/(x+1)$.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** $x=-1$.  
**Lời giải có lý do:** $g=1+1/(x+1)$; giới hạn một phía vô hạn.

#### THPT-G12-CHI-C13 | skill_id=`G12-B03-HORIZONTAL_ASY` | placement=`SGK_CORE` | content_version=R00

**Đề:** Xác định tiệm cận ngang của $f(x)=(3x-1)/(x+2)$.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** $y=3$.  
**Lời giải có lý do:** Chia tử mẫu cho x; khi x→±∞ giới hạn bằng tỉ số hệ số bậc cao nhất 3.

#### THPT-G12-CHI-P13 | skill_id=`G12-B03-HORIZONTAL_ASY` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Tìm tiệm cận ngang của $g(x)=(2x^2+1)/(x^2+1)$.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** $y=2$.  
**Lời giải có lý do:** Bậc tử/mẫu bằng nhau, giới hạn tỉ số hệ số đầu 2.

#### THPT-G12-CHI-C14 | skill_id=`G12-B03-SLANT_ASY` | placement=`SGK_CORE` | content_version=R00

**Đề:** Tìm tiệm cận xiên của $f(x)=(x^2+1)/(x-1)$.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** $y=x+1$.  
**Lời giải có lý do:** $f=x+1+2/(x-1)$, hiệu tiến 0 khi x→±∞.

#### THPT-G12-CHI-P14 | skill_id=`G12-B03-SLANT_ASY` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Tìm tiệm cận xiên của $g(x)=(x^2+3)/(x+1)$.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** $y=x-1$.  
**Lời giải có lý do:** $g=x-1+4/(x+1)$; phần dư tiến 0.

#### THPT-G12-CHI-C15 | skill_id=`G12-B03-HOLE_NOT_ASY` | placement=`SGK_CORE` | content_version=R00

**Đề:** Đồ thị $f(x)=(x^2-1)/(x-1)$ ($x\ne1$) có tiệm cận đứng x=1 không?  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Không; đồ thị là $y=x+1$ với lỗ tại (1,2).  
**Lời giải có lý do:** Khử nhân tử x−1 trên miền xác định cho giới hạn hữu hạn 2.

#### THPT-G12-CHI-P15 | skill_id=`G12-B03-HOLE_NOT_ASY` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Hàm $g(x)=(x^2-4)/(x-2)$ trên $x\ne2$ có tiệm cận đứng tại 2 không?  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Không; điểm khuyết (2,4).  
**Lời giải có lý do:** $g=x+2$ (x khác 2), giới hạn bằng 4.

#### THPT-G12-CHI-C16 | skill_id=`G12-B03-ASY_LIMITS` | placement=`SGK_CORE` | content_version=R00

**Đề:** Hàm $f(x)=1/x$ có các tiệm cận nào?  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** $x=0$ (đứng) và $y=0$ (ngang).  
**Lời giải có lý do:** Vô hạn một phía khi x→0, nhưng tiến 0 khi |x|→∞.

#### THPT-G12-CHI-P16 | skill_id=`G12-B03-ASY_LIMITS` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Hàm $g(x)=1/(x-3)$ có những tiệm cận gì?  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** $x=3$, $y=0$.  
**Lời giải có lý do:** Dịch của đồ thị 1/x; kiểm tra trực tiếp hai loại giới hạn.

#### THPT-G12-CHI-C17 | skill_id=`G12-B04-CUBIC_SKETCH` | placement=`SGK_CORE` | content_version=R00

**Đề:** Lập mốc biến thiên của $f(x)=x^3-3x$ để vẽ đồ thị.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Cực đại (-1,2), cực tiểu (1,-2); lên–xuống–lên.  
**Lời giải có lý do:** $f\prime=3(x^2-1)$; xét giới hạn hai đầu và dấu đạo hàm.

#### THPT-G12-CHI-P17 | skill_id=`G12-B04-CUBIC_SKETCH` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Phác đồ thị $g(x)=x^3-12x$ bằng cực trị.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Cực đại (-2,16), cực tiểu (2,-16); lên–xuống–lên.  
**Lời giải có lý do:** $g′=3(x-2)(x+2)$, nối đúng nhánh và cực trị.

#### THPT-G12-CHI-C18 | skill_id=`G12-B04-RATIONAL_SKETCH` | placement=`SGK_CORE` | content_version=R00

**Đề:** Khảo sát $f(x)=(x+1)/(x-1)$: tập xác định, dấu đạo hàm, tiệm cận.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** $D=\mathbb R\setminus\{1\}$; giảm trên từng khoảng $(-\infty,1)$ và $(1,+\infty)$; TCĐ x=1, TCN y=1.  
**Lời giải có lý do:** $f=1+2/(x-1)$ và $f′=-2/(x-1)^2<0$.

#### THPT-G12-CHI-P18 | skill_id=`G12-B04-RATIONAL_SKETCH` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Khảo sát $g(x)=(2x+1)/(x-1)$.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** TCĐ x=1, TCN y=2; giảm trên từng khoảng miền xác định.  
**Lời giải có lý do:** $g=2+3/(x-1)$, $g′=-3/(x-1)^2<0$.

#### THPT-G12-CHI-C19 | skill_id=`G12-B04-QUADRATIC_RATIONAL` | placement=`SGK_CORE` | content_version=R00

**Đề:** Khảo sát $f(x)=(x^2+1)/(x-1)$: TCĐ, tiệm cận xiên và điểm tới hạn.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** TCĐ x=1; TC xiên y=x+1; điểm tới hạn $x=1\pm\sqrt2$.  
**Lời giải có lý do:** $f=x+1+2/(x-1)$; $f′=1-2/(x-1)^2=0$ iff $(x-1)^2=2$.

#### THPT-G12-CHI-P19 | skill_id=`G12-B04-QUADRATIC_RATIONAL` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Với $g(x)=(x^2+3)/(x+1)$, tìm TCĐ, xiên và nghiệm $g′=0$.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** TCĐ x=-1, TC xiên y=x-1; nghiệm $x=-1\pm2$, tức -3 và 1.  
**Lời giải có lý do:** $g=x-1+4/(x+1)$; $g′=1-4/(x+1)^2$.

#### THPT-G12-CHI-C20 | skill_id=`G12-B04-INTERCEPT_GRAPH` | placement=`SGK_CORE` | content_version=R00

**Đề:** Với $f(x)=(x-2)/(x+1)$, tìm giao điểm hai trục.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Giao Ox: (2,0); giao Oy: (0,-2).  
**Lời giải có lý do:** Cho tử bằng 0 với mẫu khác 0; thay x=0 để tìm giao Oy.

#### THPT-G12-CHI-P20 | skill_id=`G12-B04-INTERCEPT_GRAPH` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Với $g(x)=(2x+4)/(x-1)$, tìm các giao trục.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Giao Ox: (-2,0); giao Oy: (0,-4).  
**Lời giải có lý do:** x=-2 làm tử 0; tại x=0 phân thức bằng -4.

#### THPT-G12-CHI-C21 | skill_id=`G12-B04-READ_GRAPH` | placement=`SGK_CORE` | content_version=R00

**Đề:** Hàm $f$ liên tục và tăng trên $(-3,1)$ rồi giảm trên $(1,4)$. Điểm $x=1$ thuộc loại cực trị nào?  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Cực đại địa phương tại x=1.  
**Lời giải có lý do:** Trên một lân cận, hàm tăng đến 1 rồi giảm sau 1; giá trị $f(1)$ chưa biết.

#### THPT-G12-CHI-P21 | skill_id=`G12-B04-READ_GRAPH` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Một đồ thị giảm trên $(-2,0)$ rồi tăng trên $(0,3)$. Xác định loại cực trị tại 0.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Cực tiểu tại 0 nếu đồ thị liên tục tại 0.  
**Lời giải có lý do:** Giảm rồi tăng qua điểm thuộc miền xác định.

#### THPT-G12-CHI-C22 | skill_id=`G12-B04-RANGE_RATIONAL` | placement=`SGK_CORE` | content_version=R00

**Đề:** Tìm tập giá trị $f(x)=1+2/(x-1)$.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** $\mathbb R\setminus\{1\}$.  
**Lời giải có lý do:** $2/(x-1)\ne0$, mọi số khác 1 đều đạt được qua x=1+2/(y-1).

#### THPT-G12-CHI-P22 | skill_id=`G12-B04-RANGE_RATIONAL` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Tập giá trị của $g(x)=2+3/(x-1)$ là gì?  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** $\mathbb R\setminus\{2\}$.  
**Lời giải có lý do:** Không bao giờ bằng 2, còn lại giải theo x được.

#### THPT-G12-CHI-C23 | skill_id=`G12-B05-REVENUE_MODEL` | placement=`SGK_CORE` | content_version=R00

**Đề:** Giá bán $p(q)=20-q$ (đơn vị giá), $0\le q\le20$. Tối đa hóa doanh thu $R(q)=qp(q)$.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** $q=10$, $R_{max}=100$ đơn vị.  
**Lời giải có lý do:** $R=20q-q^2$, $R′=20-2q$ đổi + sang − tại 10, kiểm tra đầu mút.

#### THPT-G12-CHI-P23 | skill_id=`G12-B05-REVENUE_MODEL` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Giá theo số lượng $p(q)=30-2q$, $0\le q\le15$. Doanh thu tối đa?  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** $q=15/2$, $R_{max}=225/2$.  
**Lời giải có lý do:** $R=30q-2q^2$ có đỉnh tại $q=30/4=15/2$, giá trị 225/2.

#### THPT-G12-CHI-C24 | skill_id=`G12-B05-OPEN_BOX` | placement=`SGK_CORE` | content_version=R00

**Đề:** Tấm bìa vuông 20 cm cắt bốn góc hình vuông cạnh $x$, gập thành hộp không nắp. Tìm $x$ để thể tích cực đại.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** $x=10/3$ cm; $V_{max}=16000/27$ cm³.  
**Lời giải có lý do:** $V=x(20-2x)^2,0<x<10$, $V′=(20-2x)(20-6x)$; tại $x=10/3$ đạo hàm + sang −; biên tiến 0.

#### THPT-G12-CHI-P24 | skill_id=`G12-B05-OPEN_BOX` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Tấm bìa vuông cạnh 12 cm làm hộp như trên. Cắt $x$ bằng bao nhiêu để $V$ lớn nhất?  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** $x=2$ cm, thể tích $128$ cm³.  
**Lời giải có lý do:** $V=x(12-2x)^2,0<x<6$; $V′=(12-2x)(12-6x)=0$ cho x=2 nội miền.

#### THPT-G12-CHI-C25 | skill_id=`G12-B05-FENCE_AREA` | placement=`SGK_CORE` | content_version=R00

**Đề:** Có 40 m hàng rào tạo hình chữ nhật kín. Kích thước nào để diện tích lớn nhất?  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Hình vuông 10×10 m, diện tích 100 m².  
**Lời giải có lý do:** $2(x+y)=40$ nên $y=20-x$, $A=x(20-x)$ đạt max tại 10.

#### THPT-G12-CHI-P25 | skill_id=`G12-B05-FENCE_AREA` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Dùng 60 m dây rào một khu vườn chữ nhật kín. Diện tích tối đa?  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** $225$ m², cạnh 15 m.  
**Lời giải có lý do:** $A=x(30-x)$, đỉnh parabol tại x=15.

#### THPT-G12-CHI-C26 | skill_id=`G12-B05-MOTION_DIRECTION` | placement=`SGK_CORE` | content_version=R00

**Đề:** Cho $s(t)=t^3-6t^2+9t$, $t\in[0,4]$. Chuyển động cùng chiều dương lúc nào?  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Trên $(0,1)$ và $(3,4)$; ngược chiều trên $(1,3)$.  
**Lời giải có lý do:** $v=s'=3(t-1)(t-3)$; xét dấu, các thời điểm dừng t=1,3.

#### THPT-G12-CHI-P26 | skill_id=`G12-B05-MOTION_DIRECTION` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Với $s(t)=t^3-3t^2$, $t\in[0,3]$, chuyển động theo chiều âm trong khoảng nào?  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** $(0,2)$.  
**Lời giải có lý do:** $v=3t(t-2)<0$ khi 0<t<2.

#### THPT-G12-CHI-C27 | skill_id=`G12-B05-COST_MIN` | placement=`SGK_CORE` | content_version=R00

**Đề:** Chi phí $C(q)=q^2-10q+30$ với $0\le q\le10$. Mức q làm chi phí nhỏ nhất?  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** $q=5$, chi phí nhỏ nhất $5$.  
**Lời giải có lý do:** $C′=2q-10$ âm trước 5, dương sau; kiểm tra hai biên.

#### THPT-G12-CHI-P27 | skill_id=`G12-B05-COST_MIN` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Chi phí $D(q)=q^2-14q+60$ với $0\le q\le10$. Mức chi phí thấp nhất?  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** $q=7$, $D_{min}=11$.  
**Lời giải có lý do:** $D'=2q-14=0$ tại 7, nằm trong đoạn.

#### THPT-G12-CHI-C28 | skill_id=`G12-CHI-INTEGRATED` | placement=`SGK_CORE` | content_version=R00

**Đề:** Mô hình lợi nhuận $P(q)=-q^2+10q-9$ trên $[0,9]$. Xác định khoảng tăng/giảm và GTLN.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Tăng [0,5], giảm [5,9]; GTLN 16 tại q=5.  
**Lời giải có lý do:** $P′=10-2q$, đổi dấu tại 5; $P(5)=-25+50-9=16$.

#### THPT-G12-CHI-P28 | skill_id=`G12-CHI-INTEGRATED` | placement=`SGK_PRACTICE` | content_version=R00

**Đề:** Một hàm chi phí $C(t)=t^2-6t+12$ trên $[0,8]$. Tìm khoảng giảm/tăng và min.  
**Đáp án (CHỈ SAU PRACTICE SUBMIT):** Giảm [0,3], tăng [3,8]; min 3 tại t=3.  
**Lời giải có lý do:** $C′=2t-6$; $C(3)=9-18+12=3$.

## E. D4 — ONE WRITTEN/ANCHOR shared library (Anchor = role, not second bank)

### THPT-G12-CHI-W01 | lesson=B01 | role=`ANCHOR_TAG` | version=R00

**Tự luận:** Một nhà nghiên cứu theo dõi $s(t)=t^3-6t^2+8t$ với $0\le t\le5$. Lập bảng dấu $v(t)$, nêu các khoảng đi theo chiều dương/âm và vị trí đổi chiều.  
**Đáp án/lời giải mẫu (chỉ sau khi tự làm):** Đạo hàm $v=3t²-12t+8$ có nghiệm $t=2\pm(2\sqrt3)/3$; $v>0$ trước nghiệm nhỏ và sau nghiệm lớn; âm giữa hai nghiệm.  
**Rubric 4 điểm:** (1) Xác định miền t và đạo hàm — 1đ; (2) diễn giải/công thức xác đáng — 1đ; (3) phép tính và bảng dấu/so sánh đúng — 1đ; (4) kết luận có điều kiện/đơn vị — 1đ.

### THPT-G12-CHI-W02 | lesson=B01 | role=`WRITTEN` | version=R00

**Tự luận:** Khảo sát $f(x)=x^4-2x^2$ về cực trị, giải thích tại sao một điểm $f'=0$ vẫn có thể không cực trị trong các bài khác.  
**Đáp án/lời giải mẫu (chỉ sau khi tự làm):** f'=4x(x²-1); cực tiểu tại ±1 giá trị -1; cực đại tại 0 giá trị 0.  
**Rubric 4 điểm:** (1) Tính đạo hàm — 1đ; (2) diễn giải/công thức xác đáng — 1đ; (3) phép tính và bảng dấu/so sánh đúng — 1đ; (4) kết luận có điều kiện/đơn vị — 1đ.

### THPT-G12-CHI-W03 | lesson=B02 | role=`ANCHOR_TAG` | version=R00

**Tự luận:** Xưởng sản xuất có lợi nhuận $P(q)=-q²+14q-30$ trên $q\in[0,12]$. Xác định sản lượng tối ưu và phân tích nếu chỉ được sản xuất số nguyên.  
**Đáp án/lời giải mẫu (chỉ sau khi tự làm):** Đỉnh tại q=7, Pmax=19; q nguyên 7 vẫn tối ưu.  
**Rubric 4 điểm:** (1) Thiết lập miền — 1đ; (2) diễn giải/công thức xác đáng — 1đ; (3) phép tính và bảng dấu/so sánh đúng — 1đ; (4) kết luận có điều kiện/đơn vị — 1đ.

### THPT-G12-CHI-W04 | lesson=B02 | role=`WRITTEN` | version=R00

**Tự luận:** Giải thích tại sao $f(x)=1/x$ trên $(0,+\infty)$ không có GTNN, nhưng trên $[1,4]$ thì có.  
**Đáp án/lời giải mẫu (chỉ sau khi tự làm):** Khoảng mở vô hạn: f>0 và tiến 0 không đạt; đoạn [1,4]: min=1/4 tại4, max=1 tại1.  
**Rubric 4 điểm:** (1) Nêu định nghĩa đạt giá trị — 1đ; (2) diễn giải/công thức xác đáng — 1đ; (3) phép tính và bảng dấu/so sánh đúng — 1đ; (4) kết luận có điều kiện/đơn vị — 1đ.

### THPT-G12-CHI-W05 | lesson=B03 | role=`ANCHOR_TAG` | version=R00

**Tự luận:** Cho $f(x)=(x²+2x+3)/(x+1)$, tìm đầy đủ tiệm cận và phân biệt với điểm khuyết.  
**Đáp án/lời giải mẫu (chỉ sau khi tự làm):** f=x+1+2/(x+1); TCĐ x=-1, TC xiên y=x+1; không có khử mẫu.  
**Rubric 4 điểm:** (1) Tập xác định — 1đ; (2) diễn giải/công thức xác đáng — 1đ; (3) phép tính và bảng dấu/so sánh đúng — 1đ; (4) kết luận có điều kiện/đơn vị — 1đ.

### THPT-G12-CHI-W06 | lesson=B03 | role=`WRITTEN` | version=R00

**Tự luận:** Xét hàm $g(x)=(x²-4)/(x-2)$ với $x\ne2$. Giải thích bằng giới hạn vì sao không có TCĐ.  
**Đáp án/lời giải mẫu (chỉ sau khi tự làm):** g=x+2 với x≠2; giới hạn 4 tại2, chỉ có lỗ tại (2,4), không có TCĐ.  
**Rubric 4 điểm:** (1) Phân tích nhân tử — 1đ; (2) diễn giải/công thức xác đáng — 1đ; (3) phép tính và bảng dấu/so sánh đúng — 1đ; (4) kết luận có điều kiện/đơn vị — 1đ.

### THPT-G12-CHI-W07 | lesson=B04 | role=`ANCHOR_TAG` | version=R00

**Tự luận:** Khảo sát $y=(2x+1)/(x-1)$ về miền, tiệm cận, chiều biến thiên, giao hai trục và phác hai nhánh.  
**Đáp án/lời giải mẫu (chỉ sau khi tự làm):** D=R\{1}; x=1,y=2; y'=-3/(x-1)²<0; Ox=(-1/2,0), Oy=(0,-1).  
**Rubric 4 điểm:** (1) Miền — 1đ; (2) diễn giải/công thức xác đáng — 1đ; (3) phép tính và bảng dấu/so sánh đúng — 1đ; (4) kết luận có điều kiện/đơn vị — 1đ.

### THPT-G12-CHI-W08 | lesson=B04 | role=`WRITTEN` | version=R00

**Tự luận:** Cho $y=x³-3x$. Lập bảng biến thiên, giao trục và phác đồ thị sao cho cực trị rõ.  
**Đáp án/lời giải mẫu (chỉ sau khi tự làm):** Tăng bên ngoài (-1,1), giảm trong; cực đại (-1,2), cực tiểu (1,-2), nghiệm x=0,±√3.  
**Rubric 4 điểm:** (1) Tập xác định — 1đ; (2) diễn giải/công thức xác đáng — 1đ; (3) phép tính và bảng dấu/so sánh đúng — 1đ; (4) kết luận có điều kiện/đơn vị — 1đ.

### THPT-G12-CHI-W09 | lesson=B05 | role=`ANCHOR_TAG` | version=R00

**Tự luận:** Từ tấm bìa 24×24 cm cắt bốn góc cạnh x và gập hộp không nắp. Tối ưu thể tích, xét tính khả thi.  
**Đáp án/lời giải mẫu (chỉ sau khi tự làm):** V=x(24-2x)², 0<x<12; x=4, Vmax=4·16²=1024 cm³.  
**Rubric 4 điểm:** (1) Mô hình và miền — 1đ; (2) diễn giải/công thức xác đáng — 1đ; (3) phép tính và bảng dấu/so sánh đúng — 1đ; (4) kết luận có điều kiện/đơn vị — 1đ.

### THPT-G12-CHI-W10 | lesson=B05 | role=`WRITTEN` | version=R00

**Tự luận:** Một sản phẩm có giá phụ thuộc sản lượng $p(q)=40-q$, $0\le q\le40$. Tối ưu doanh thu và nêu hạn chế mô hình giá tuyến tính.  
**Đáp án/lời giải mẫu (chỉ sau khi tự làm):** R=q(40-q), max400 tại q=20; giới hạn q và giả thiết giá không âm.  
**Rubric 4 điểm:** (1) Mô hình giá và ràng buộc — 1đ; (2) diễn giải/công thức xác đáng — 1đ; (3) phép tính và bảng dấu/so sánh đúng — 1đ; (4) kết luận có điều kiện/đơn vị — 1đ.

## F. D5 — SVG nguyên bản cùng text fallback và diễn giải toán học

### FIG-G12-CHI-B01-01

**Ý nghĩa/fallback:** Đồ thị $x^3-3x$ có cực đại (-1,2), cực tiểu (1,-2); hình liên tục, mốc -1 và 1 chia ba khoảng tăng–giảm–tăng. Không chỉ nhìn hình mà phải hiểu dấu đạo hàm.

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="850" height="430" viewBox="0 0 850 430" role="img" aria-labelledby="title desc">
<title id="title">Dấu đạo hàm và cực trị của hàm bậc ba</title>
<desc id="desc">Hình toán học FIG-G12-CHI-B01-01, các đường và tọa độ được giải thích bằng văn bản ngay bên dưới.</desc>
<rect width="850" height="430" fill="#f8fafc"/>
<line x1="70" y1="212.5" x2="820" y2="212.5" stroke="#334155" stroke-width="2"/>
<line x1="445.0" y1="50" x2="445.0" y2="375" stroke="#334155" stroke-width="2"/>
<line x1="132.50" y1="208.5" x2="132.50" y2="216.5" stroke="#64748b"/>
<line x1="288.75" y1="208.5" x2="288.75" y2="216.5" stroke="#64748b"/>
<line x1="445.00" y1="208.5" x2="445.00" y2="216.5" stroke="#64748b"/>
<line x1="601.25" y1="208.5" x2="601.25" y2="216.5" stroke="#64748b"/>
<line x1="757.50" y1="208.5" x2="757.50" y2="216.5" stroke="#64748b"/>
<polyline fill="none" stroke="#2563eb" stroke-width="3" points="83.5,409.1 84.3,406.8 85.0,404.6 85.8,402.3 86.5,400.1 87.2,397.9 88.0,395.7 88.8,393.5 89.5,391.3 90.2,389.2 91.0,387.0 91.8,384.9 92.5,382.7 93.2,380.6 94.0,378.5 94.7,376.4 95.5,374.3 96.3,372.2 97.0,370.2 97.8,368.1 98.5,366.1 99.2,364.0 100.0,362.0 100.8,360.0 101.5,358.0 102.2,356.0 103.0,354.0 103.8,352.1 104.5,350.1 105.2,348.2 106.0,346.3 106.7,344.3 107.5,342.4 108.3,340.5 109.0,338.6 109.8,336.7 110.5,334.9 111.2,333.0 112.0,331.2 112.8,329.3 113.5,327.5 114.2,325.7 115.0,323.9 115.8,322.1 116.5,320.3 117.2,318.5 118.0,316.8 118.7,315.0 119.5,313.3 120.3,311.6 121.0,309.8 121.8,308.1 122.5,306.4 123.3,304.7 124.0,303.0 124.8,301.4 125.5,299.7 126.2,298.1 127.0,296.4 127.8,294.8 128.5,293.2 129.2,291.6 130.0,290.0 130.8,288.4 131.5,286.8 132.2,285.2 133.0,283.7 133.8,282.1 134.5,280.6 135.2,279.1 136.0,277.6 136.8,276.0 137.5,274.5 138.2,273.1 139.0,271.6 139.8,270.1 140.5,268.6 141.2,267.2 142.0,265.8 142.8,264.3 143.5,262.9 144.2,261.5 145.0,260.1 145.8,258.7 146.5,257.3 147.2,255.9 148.0,254.6 148.8,253.2 149.5,251.9 150.2,250.5 151.0,249.2 151.8,247.9 152.5,246.6 153.2,245.3 154.0,244.0 154.8,242.7 155.5,241.5 156.2,240.2 157.0,239.0 157.8,237.7 158.5,236.5 159.2,235.3 160.0,234.0 160.8,232.8 161.5,231.6 162.2,230.4 163.0,229.3 163.8,228.1 164.5,226.9 165.2,225.8 166.0,224.6 166.8,223.5 167.5,222.4 168.2,221.3 169.0,220.2 169.8,219.1 170.5,218.0 171.3,216.9 172.0,215.8 172.8,214.8 173.5,213.7 174.2,212.7 175.0,211.6 175.8,210.6 176.5,209.6 177.2,208.6 178.0,207.6 178.8,206.6 179.5,205.6 180.2,204.6 181.0,203.6 181.7,202.7 182.5,201.7 183.2,200.8 184.0,199.8 184.8,198.9 185.5,198.0 186.2,197.1 187.0,196.2 187.8,195.3 188.5,194.4 189.2,193.5 190.0,192.7 190.8,191.8 191.5,191.0 192.2,190.1 193.0,189.3 193.8,188.4 194.5,187.6 195.3,186.8 196.0,186.0 196.8,185.2 197.5,184.4 198.2,183.6 199.0,182.9 199.8,182.1 200.5,181.3 201.2,180.6 202.0,179.9 202.8,179.1 203.5,178.4 204.2,177.7 205.0,177.0 205.7,176.3 206.5,175.6 207.3,174.9 208.0,174.2 208.8,173.5 209.5,172.9 210.3,172.2 211.0,171.6 211.8,170.9 212.5,170.3 213.2,169.6 214.0,169.0 214.8,168.4 215.5,167.8 216.2,167.2 217.0,166.6 217.7,166.0 218.5,165.5 219.2,164.9 220.0,164.3 220.8,163.8 221.5,163.2 222.2,162.7 223.0,162.2 223.8,161.6 224.5,161.1 225.2,160.6 226.0,160.1 226.8,159.6 227.5,159.1 228.2,158.6 229.0,158.1 229.8,157.7 230.5,157.2 231.3,156.7 232.0,156.3 232.7,155.9 233.5,155.4 234.3,155.0 235.0,154.6 235.8,154.2 236.5,153.7 237.2,153.3 238.0,152.9 238.8,152.6 239.5,152.2 240.2,151.8 241.0,151.4 241.8,151.1 242.5,150.7 243.2,150.4 244.0,150.0 244.8,149.7 245.5,149.3 246.2,149.0 247.0,148.7 247.8,148.4 248.5,148.1 249.2,147.8 250.0,147.5 250.8,147.2 251.5,146.9 252.2,146.6 253.0,146.4 253.8,146.1 254.5,145.9 255.2,145.6 256.0,145.4 256.8,145.1 257.5,144.9 258.2,144.7 259.0,144.5 259.8,144.2 260.5,144.0 261.2,143.8 262.0,143.6 262.8,143.4 263.5,143.3 264.2,143.1 265.0,142.9 265.8,142.7 266.5,142.6 267.2,142.4 268.0,142.3 268.8,142.1 269.5,142.0 270.2,141.9 271.0,141.7 271.8,141.6 272.5,141.5 273.2,141.4 274.0,141.3 274.8,141.2 275.5,141.1 276.2,141.0 277.0,140.9 277.8,140.8 278.5,140.8 279.2,140.7 280.0,140.6 280.8,140.6 281.5,140.5 282.2,140.5 283.0,140.4 283.8,140.4 284.5,140.4 285.2,140.3 286.0,140.3 286.8,140.3 287.5,140.3 288.2,140.3 289.0,140.3 289.8,140.3 290.5,140.3 291.2,140.3 292.0,140.3 292.8,140.3 293.5,140.4 294.2,140.4 295.0,140.4 295.8,140.5 296.5,140.5 297.2,140.6 298.0,140.6 298.8,140.7 299.5,140.8 300.2,140.9 301.0,140.9 301.8,141.0 302.5,141.1 303.2,141.2 304.0,141.3 304.8,141.4 305.5,141.5 306.2,141.6 307.0,141.7 307.8,141.8 308.5,141.9 309.3,142.1 310.0,142.2 310.8,142.3 311.5,142.5 312.2,142.6 313.0,142.8 313.8,142.9 314.5,143.1 315.2,143.2 316.0,143.4 316.8,143.5 317.5,143.7 318.2,143.9 319.0,144.1 319.8,144.3 320.5,144.4 321.2,144.6 322.0,144.8 322.8,145.0 323.5,145.2 324.2,145.4 325.0,145.7 325.8,145.9 326.5,146.1 327.2,146.3 328.0,146.5 328.8,146.8 329.5,147.0 330.2,147.2 331.0,147.5 331.8,147.7 332.5,148.0 333.2,148.2 334.0,148.5 334.8,148.7 335.5,149.0 336.2,149.3 337.0,149.5 337.8,149.8 338.5,150.1 339.3,150.4 340.0,150.7 340.8,150.9 341.5,151.2 342.2,151.5 343.0,151.8 343.8,152.1 344.5,152.4 345.2,152.7 346.0,153.0 346.8,153.4 347.5,153.7 348.2,154.0 349.0,154.3 349.7,154.6 350.5,155.0 351.2,155.3 352.0,155.6 352.8,156.0 353.5,156.3 354.3,156.7 355.0,157.0 355.8,157.3 356.5,157.7 357.2,158.1 358.0,158.4 358.8,158.8 359.5,159.1 360.2,159.5 361.0,159.9 361.7,160.2 362.5,160.6 363.2,161.0 364.0,161.4 364.7,161.8 365.5,162.1 366.2,162.5 367.0,162.9 367.8,163.3 368.5,163.7 369.2,164.1 370.0,164.5 370.8,164.9 371.5,165.3 372.2,165.7 373.0,166.1 373.8,166.5 374.5,166.9 375.2,167.4 376.0,167.8 376.8,168.2 377.5,168.6 378.2,169.0 379.0,169.5 379.8,169.9 380.5,170.3 381.2,170.8 382.0,171.2 382.8,171.6 383.5,172.1 384.2,172.5 385.0,172.9 385.8,173.4 386.5,173.8 387.2,174.3 388.0,174.7 388.8,175.2 389.5,175.6 390.2,176.1 391.0,176.6 391.7,177.0 392.5,177.5 393.2,177.9 394.0,178.4 394.8,178.9 395.5,179.3 396.3,179.8 397.0,180.3 397.8,180.7 398.5,181.2 399.2,181.7 400.0,182.2 400.7,182.6 401.5,183.1 402.3,183.6 403.0,184.1 403.8,184.6 404.5,185.0 405.2,185.5 406.0,186.0 406.7,186.5 407.5,187.0 408.2,187.5 409.0,188.0 409.8,188.5 410.5,189.0 411.3,189.5 412.0,190.0 412.8,190.5 413.5,191.0 414.2,191.5 415.0,192.0 415.8,192.5 416.5,193.0 417.2,193.5 418.0,194.0 418.8,194.5 419.5,195.0 420.2,195.5 421.0,196.0 421.8,196.5 422.5,197.0 423.2,197.5 424.0,198.0 424.8,198.5 425.5,199.1 426.2,199.6 427.0,200.1 427.8,200.6 428.5,201.1 429.2,201.6 430.0,202.1 430.8,202.6 431.5,203.2 432.3,203.7 433.0,204.2 433.8,204.7 434.5,205.2 435.3,205.7 436.0,206.3 436.8,206.8 437.5,207.3 438.2,207.8 439.0,208.3 439.8,208.9 440.5,209.4 441.2,209.9 442.0,210.4 442.7,210.9 443.5,211.5 444.2,212.0 445.0,212.5 445.8,213.0 446.5,213.5 447.2,214.1 448.0,214.6 448.8,215.1 449.5,215.6 450.2,216.1 451.0,216.7 451.8,217.2 452.5,217.7 453.2,218.2 454.0,218.7 454.8,219.3 455.5,219.8 456.2,220.3 457.0,220.8 457.8,221.3 458.5,221.8 459.2,222.4 460.0,222.9 460.8,223.4 461.5,223.9 462.2,224.4 463.0,224.9 463.8,225.4 464.5,225.9 465.2,226.5 466.0,227.0 466.7,227.5 467.5,228.0 468.2,228.5 469.0,229.0 469.8,229.5 470.5,230.0 471.2,230.5 472.0,231.0 472.8,231.5 473.5,232.0 474.2,232.5 475.0,233.0 475.7,233.5 476.5,234.0 477.3,234.5 478.0,235.0 478.8,235.5 479.5,236.0 480.3,236.5 481.0,237.0 481.7,237.5 482.5,238.0 483.2,238.5 484.0,239.0 484.8,239.5 485.5,240.0 486.3,240.4 487.0,240.9 487.8,241.4 488.5,241.9 489.2,242.4 490.0,242.8 490.7,243.3 491.5,243.8 492.3,244.3 493.0,244.7 493.8,245.2 494.5,245.7 495.3,246.1 496.0,246.6 496.7,247.1 497.5,247.5 498.2,248.0 499.0,248.4 499.8,248.9 500.5,249.4 501.2,249.8 502.0,250.3 502.8,250.7 503.5,251.2 504.2,251.6 505.0,252.1 505.7,252.5 506.5,252.9 507.3,253.4 508.0,253.8 508.8,254.2 509.5,254.7 510.3,255.1 511.0,255.5 511.8,256.0 512.5,256.4 513.2,256.8 514.0,257.2 514.8,257.6 515.5,258.1 516.2,258.5 517.0,258.9 517.8,259.3 518.5,259.7 519.2,260.1 520.0,260.5 520.8,260.9 521.5,261.3 522.2,261.7 523.0,262.1 523.8,262.5 524.5,262.9 525.2,263.2 526.0,263.6 526.8,264.0 527.5,264.4 528.2,264.8 529.0,265.1 529.8,265.5 530.5,265.9 531.2,266.2 532.0,266.6 532.8,266.9 533.5,267.3 534.2,267.7 535.0,268.0 535.8,268.3 536.5,268.7 537.2,269.0 538.0,269.4 538.8,269.7 539.5,270.0 540.2,270.4 541.0,270.7 541.8,271.0 542.5,271.3 543.2,271.6 544.0,272.0 544.8,272.3 545.5,272.6 546.2,272.9 547.0,273.2 547.8,273.5 548.5,273.8 549.2,274.1 550.0,274.3 550.8,274.6 551.5,274.9 552.3,275.2 553.0,275.5 553.8,275.7 554.5,276.0 555.2,276.3 556.0,276.5 556.8,276.8 557.5,277.0 558.2,277.3 559.0,277.5 559.8,277.8 560.5,278.0 561.2,278.2 562.0,278.5 562.8,278.7 563.5,278.9 564.2,279.1 565.0,279.3 565.8,279.6 566.5,279.8 567.2,280.0 568.0,280.2 568.8,280.4 569.5,280.6 570.2,280.7 571.0,280.9 571.8,281.1 572.5,281.3 573.2,281.5 574.0,281.6 574.8,281.8 575.5,281.9 576.2,282.1 577.0,282.2 577.8,282.4 578.5,282.5 579.2,282.7 580.0,282.8 580.8,282.9 581.5,283.1 582.2,283.2 583.0,283.3 583.8,283.4 584.5,283.5 585.2,283.6 586.0,283.7 586.8,283.8 587.5,283.9 588.2,284.0 589.0,284.1 589.8,284.1 590.5,284.2 591.2,284.3 592.0,284.4 592.8,284.4 593.5,284.5 594.2,284.5 595.0,284.6 595.8,284.6 596.5,284.6 597.2,284.7 598.0,284.7 598.8,284.7 599.5,284.7 600.2,284.7 601.0,284.7 601.8,284.7 602.5,284.7 603.2,284.7 604.0,284.7 604.8,284.7 605.5,284.6 606.2,284.6 607.0,284.6 607.8,284.5 608.5,284.5 609.2,284.4 610.0,284.4 610.8,284.3 611.5,284.2 612.3,284.2 613.0,284.1 613.8,284.0 614.5,283.9 615.2,283.8 616.0,283.7 616.8,283.6 617.5,283.5 618.2,283.4 619.0,283.3 619.8,283.1 620.5,283.0 621.2,282.9 622.0,282.7 622.8,282.6 623.5,282.4 624.2,282.3 625.0,282.1 625.7,281.9 626.5,281.7 627.3,281.6 628.0,281.4 628.8,281.2 629.5,281.0 630.2,280.8 631.0,280.5 631.8,280.3 632.5,280.1 633.2,279.9 634.0,279.6 634.8,279.4 635.5,279.1 636.2,278.9 637.0,278.6 637.8,278.4 638.5,278.1 639.2,277.8 640.0,277.5 640.7,277.2 641.5,276.9 642.2,276.6 643.0,276.3 643.8,276.0 644.5,275.7 645.2,275.3 646.0,275.0 646.8,274.6 647.5,274.3 648.2,273.9 649.0,273.6 649.7,273.2 650.5,272.8 651.2,272.4 652.0,272.1 652.8,271.7 653.5,271.3 654.2,270.8 655.0,270.4 655.7,270.0 656.5,269.6 657.2,269.1 658.0,268.7 658.8,268.3 659.5,267.8 660.2,267.3 661.0,266.9 661.8,266.4 662.5,265.9 663.2,265.4 664.0,264.9 664.8,264.4 665.5,263.9 666.2,263.4 667.0,262.8 667.8,262.3 668.5,261.8 669.2,261.2 670.0,260.7 670.8,260.1 671.5,259.5 672.2,259.0 673.0,258.4 673.8,257.8 674.5,257.2 675.2,256.6 676.0,256.0 676.8,255.4 677.5,254.7 678.2,254.1 679.0,253.4 679.8,252.8 680.5,252.1 681.2,251.5 682.0,250.8 682.8,250.1 683.5,249.4 684.2,248.7 685.0,248.0 685.8,247.3 686.5,246.6 687.2,245.9 688.0,245.1 688.8,244.4 689.5,243.7 690.2,242.9 691.0,242.1 691.8,241.4 692.5,240.6 693.2,239.8 694.0,239.0 694.8,238.2 695.5,237.4 696.2,236.6 697.0,235.7 697.8,234.9 698.5,234.0 699.2,233.2 700.0,232.3 700.8,231.5 701.5,230.6 702.2,229.7 703.0,228.8 703.8,227.9 704.5,227.0 705.2,226.1 706.0,225.2 706.8,224.2 707.5,223.3 708.2,222.3 709.0,221.4 709.7,220.4 710.5,219.4 711.3,218.4 712.0,217.4 712.7,216.4 713.5,215.4 714.2,214.4 715.0,213.4 715.8,212.3 716.5,211.3 717.2,210.2 718.0,209.2 718.8,208.1 719.5,207.0 720.2,205.9 721.0,204.8 721.8,203.7 722.5,202.6 723.3,201.5 724.0,200.4 724.7,199.2 725.5,198.1 726.3,196.9 727.0,195.7 727.7,194.6 728.5,193.4 729.2,192.2 730.0,191.0 730.8,189.7 731.5,188.5 732.2,187.3 733.0,186.0 733.8,184.8 734.5,183.5 735.2,182.3 736.0,181.0 736.8,179.7 737.5,178.4 738.3,177.1 739.0,175.8 739.7,174.5 740.5,173.1 741.3,171.8 742.0,170.4 742.7,169.1 743.5,167.7 744.2,166.3 745.0,164.9 745.8,163.5 746.5,162.1 747.2,160.7 748.0,159.2 748.8,157.8 749.5,156.4 750.2,154.9 751.0,153.4 751.8,151.9 752.5,150.5 753.2,149.0 754.0,147.4 754.7,145.9 755.5,144.4 756.3,142.9 757.0,141.3 757.8,139.8 758.5,138.2 759.2,136.6 760.0,135.0 760.8,133.4 761.5,131.8 762.2,130.2 763.0,128.6 763.8,126.9 764.5,125.3 765.2,123.6 766.0,122.0 766.8,120.3 767.5,118.6 768.2,116.9 769.0,115.2 769.8,113.4 770.5,111.7 771.3,110.0 772.0,108.2 772.8,106.5 773.5,104.7 774.2,102.9 775.0,101.1 775.8,99.3 776.5,97.5 777.2,95.7 778.0,93.8 778.8,92.0 779.5,90.1 780.2,88.3 781.0,86.4 781.8,84.5 782.5,82.6 783.2,80.7 784.0,78.7 784.8,76.8 785.5,74.9 786.2,72.9 787.0,71.0 787.8,69.0 788.5,67.0 789.2,65.0 790.0,63.0 790.8,61.0 791.5,58.9 792.2,56.9 793.0,54.8 793.8,52.8 794.5,50.7 795.2,48.6 796.0,46.5 796.8,44.4 797.5,42.3 798.3,40.1 799.0,38.0 799.8,35.8 800.5,33.7 801.2,31.5 802.0,29.3 802.8,27.1 803.5,24.9 804.2,22.7 805.0,20.4 805.8,18.2 806.5,15.9"/>
<text x="78" y="90" font-size="17" fill="#2563eb">f(x)=x³-3x</text>
<circle cx="288.8" cy="140.3" r="6" fill="#0f766e"/><text x="296.8" y="130.3" font-size="17" fill="#0f766e">cực đại</text>
<circle cx="601.2" cy="284.7" r="6" fill="#0f766e"/><text x="609.2" y="274.7" font-size="17" fill="#0f766e">cực tiểu</text>
<text x="822" y="202.5" font-size="18">x</text><text x="455.0" y="54" font-size="18">y</text></svg>
```

### FIG-G12-CHI-B02-01

**Ý nghĩa/fallback:** Đồ thị $x^2-4x+1$ trên **đoạn đóng [0,5]** đánh dấu điểm (0,1), đáy (2,-3) và đầu phải (5,6). Cực tiểu trong đoạn khác GTLN ở đầu phải.

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="850" height="430" viewBox="0 0 850 430" role="img" aria-labelledby="title desc">
<title id="title">Hàm bậc hai trên đoạn kín [0,5]</title>
<desc id="desc">Hình toán học FIG-G12-CHI-B02-01, các đường và tọa độ được giải thích bằng văn bản ngay bên dưới.</desc>
<rect width="850" height="430" fill="#f8fafc"/>
<line x1="70" y1="266.7" x2="820" y2="266.7" stroke="#334155" stroke-width="2"/>
<line x1="132.5" y1="50" x2="132.5" y2="375" stroke="#334155" stroke-width="2"/>
<line x1="132.50" y1="262.7" x2="132.50" y2="270.7" stroke="#64748b"/>
<line x1="257.50" y1="262.7" x2="257.50" y2="270.7" stroke="#64748b"/>
<line x1="382.50" y1="262.7" x2="382.50" y2="270.7" stroke="#64748b"/>
<line x1="507.50" y1="262.7" x2="507.50" y2="270.7" stroke="#64748b"/>
<line x1="632.50" y1="262.7" x2="632.50" y2="270.7" stroke="#64748b"/>
<line x1="757.50" y1="262.7" x2="757.50" y2="270.7" stroke="#64748b"/>
<polyline fill="none" stroke="#2563eb" stroke-width="3" points="132.5,239.6 133.1,240.1 133.8,240.7 134.4,241.2 135.0,241.7 135.6,242.3 136.2,242.8 136.9,243.3 137.5,243.9 138.1,244.4 138.8,244.9 139.4,245.5 140.0,246.0 140.6,246.5 141.2,247.0 141.9,247.6 142.5,248.1 143.1,248.6 143.8,249.1 144.4,249.6 145.0,250.1 145.6,250.7 146.2,251.2 146.9,251.7 147.5,252.2 148.1,252.7 148.8,253.2 149.4,253.7 150.0,254.2 150.6,254.7 151.2,255.2 151.9,255.7 152.5,256.2 153.1,256.7 153.8,257.2 154.4,257.7 155.0,258.2 155.6,258.7 156.2,259.2 156.9,259.7 157.5,260.2 158.1,260.7 158.8,261.1 159.4,261.6 160.0,262.1 160.6,262.6 161.2,263.1 161.9,263.5 162.5,264.0 163.1,264.5 163.8,265.0 164.4,265.4 165.0,265.9 165.6,266.4 166.2,266.9 166.9,267.3 167.5,267.8 168.1,268.3 168.8,268.7 169.4,269.2 170.0,269.6 170.6,270.1 171.2,270.6 171.9,271.0 172.5,271.5 173.1,271.9 173.8,272.4 174.4,272.8 175.0,273.3 175.6,273.7 176.2,274.2 176.9,274.6 177.5,275.1 178.1,275.5 178.8,276.0 179.4,276.4 180.0,276.8 180.6,277.3 181.2,277.7 181.9,278.1 182.5,278.6 183.1,279.0 183.8,279.4 184.4,279.9 185.0,280.3 185.6,280.7 186.2,281.2 186.9,281.6 187.5,282.0 188.1,282.4 188.8,282.8 189.4,283.3 190.0,283.7 190.6,284.1 191.2,284.5 191.9,284.9 192.5,285.3 193.1,285.8 193.8,286.2 194.4,286.6 195.0,287.0 195.6,287.4 196.2,287.8 196.9,288.2 197.5,288.6 198.1,289.0 198.8,289.4 199.4,289.8 200.0,290.2 200.6,290.6 201.2,291.0 201.9,291.4 202.5,291.8 203.1,292.1 203.8,292.5 204.4,292.9 205.0,293.3 205.6,293.7 206.2,294.1 206.9,294.5 207.5,294.8 208.1,295.2 208.7,295.6 209.4,296.0 210.0,296.3 210.6,296.7 211.2,297.1 211.9,297.5 212.5,297.8 213.1,298.2 213.8,298.6 214.4,298.9 215.0,299.3 215.6,299.6 216.2,300.0 216.9,300.4 217.5,300.7 218.1,301.1 218.8,301.4 219.4,301.8 220.0,302.1 220.6,302.5 221.2,302.8 221.9,303.2 222.5,303.5 223.1,303.9 223.8,304.2 224.4,304.6 225.0,304.9 225.6,305.3 226.2,305.6 226.9,305.9 227.5,306.3 228.1,306.6 228.8,306.9 229.4,307.3 230.0,307.6 230.6,307.9 231.2,308.3 231.9,308.6 232.5,308.9 233.1,309.2 233.8,309.6 234.4,309.9 235.0,310.2 235.6,310.5 236.2,310.8 236.9,311.2 237.5,311.5 238.1,311.8 238.8,312.1 239.4,312.4 240.0,312.7 240.6,313.0 241.3,313.3 241.9,313.6 242.5,313.9 243.1,314.2 243.8,314.5 244.4,314.8 245.0,315.1 245.6,315.4 246.2,315.7 246.9,316.0 247.5,316.3 248.1,316.6 248.8,316.9 249.4,317.2 250.0,317.5 250.6,317.8 251.2,318.1 251.9,318.3 252.5,318.6 253.1,318.9 253.8,319.2 254.4,319.5 255.0,319.7 255.6,320.0 256.2,320.3 256.9,320.6 257.5,320.8 258.1,321.1 258.8,321.4 259.4,321.6 260.0,321.9 260.6,322.2 261.2,322.4 261.9,322.7 262.5,323.0 263.1,323.2 263.8,323.5 264.4,323.7 265.0,324.0 265.6,324.2 266.2,324.5 266.9,324.7 267.5,325.0 268.1,325.2 268.8,325.5 269.4,325.7 270.0,326.0 270.6,326.2 271.2,326.5 271.9,326.7 272.5,326.9 273.1,327.2 273.8,327.4 274.4,327.7 275.0,327.9 275.6,328.1 276.2,328.3 276.9,328.6 277.5,328.8 278.1,329.0 278.8,329.3 279.4,329.5 280.0,329.7 280.6,329.9 281.2,330.1 281.9,330.4 282.5,330.6 283.1,330.8 283.8,331.0 284.4,331.2 285.0,331.4 285.6,331.6 286.2,331.9 286.9,332.1 287.5,332.3 288.1,332.5 288.8,332.7 289.4,332.9 290.0,333.1 290.6,333.3 291.2,333.5 291.9,333.7 292.5,333.9 293.1,334.1 293.8,334.3 294.4,334.5 295.0,334.6 295.6,334.8 296.2,335.0 296.9,335.2 297.5,335.4 298.1,335.6 298.8,335.8 299.4,335.9 300.0,336.1 300.6,336.3 301.2,336.5 301.9,336.6 302.5,336.8 303.1,337.0 303.8,337.2 304.4,337.3 305.0,337.5 305.6,337.7 306.2,337.8 306.9,338.0 307.5,338.2 308.1,338.3 308.8,338.5 309.4,338.6 310.0,338.8 310.6,339.0 311.2,339.1 311.9,339.3 312.5,339.4 313.1,339.6 313.8,339.7 314.4,339.9 315.0,340.0 315.6,340.2 316.2,340.3 316.9,340.5 317.5,340.6 318.1,340.7 318.8,340.9 319.4,341.0 320.0,341.1 320.6,341.3 321.2,341.4 321.9,341.5 322.5,341.7 323.1,341.8 323.8,341.9 324.4,342.1 325.0,342.2 325.6,342.3 326.2,342.4 326.9,342.6 327.5,342.7 328.1,342.8 328.8,342.9 329.4,343.0 330.0,343.1 330.6,343.3 331.2,343.4 331.9,343.5 332.5,343.6 333.1,343.7 333.8,343.8 334.4,343.9 335.0,344.0 335.6,344.1 336.2,344.2 336.9,344.3 337.5,344.4 338.1,344.5 338.8,344.6 339.4,344.7 340.0,344.8 340.6,344.9 341.2,345.0 341.9,345.1 342.5,345.1 343.1,345.2 343.8,345.3 344.4,345.4 345.0,345.5 345.6,345.6 346.2,345.6 346.9,345.7 347.5,345.8 348.1,345.9 348.8,345.9 349.4,346.0 350.0,346.1 350.6,346.2 351.2,346.2 351.9,346.3 352.5,346.4 353.1,346.4 353.8,346.5 354.4,346.5 355.0,346.6 355.6,346.7 356.2,346.7 356.9,346.8 357.5,346.8 358.1,346.9 358.8,346.9 359.4,347.0 360.0,347.0 360.6,347.1 361.2,347.1 361.9,347.2 362.5,347.2 363.1,347.3 363.8,347.3 364.4,347.3 365.0,347.4 365.6,347.4 366.2,347.5 366.9,347.5 367.5,347.5 368.1,347.6 368.7,347.6 369.4,347.6 370.0,347.6 370.6,347.7 371.2,347.7 371.9,347.7 372.5,347.7 373.1,347.8 373.8,347.8 374.4,347.8 375.0,347.8 375.6,347.8 376.3,347.8 376.9,347.9 377.5,347.9 378.1,347.9 378.7,347.9 379.4,347.9 380.0,347.9 380.6,347.9 381.2,347.9 381.9,347.9 382.5,347.9 383.1,347.9 383.7,347.9 384.4,347.9 385.0,347.9 385.6,347.9 386.2,347.9 386.9,347.9 387.5,347.9 388.1,347.9 388.8,347.8 389.4,347.8 390.0,347.8 390.6,347.8 391.2,347.8 391.9,347.8 392.5,347.7 393.1,347.7 393.8,347.7 394.4,347.7 395.0,347.6 395.6,347.6 396.2,347.6 396.9,347.6 397.5,347.5 398.1,347.5 398.8,347.5 399.4,347.4 400.0,347.4 400.6,347.3 401.2,347.3 401.9,347.3 402.5,347.2 403.1,347.2 403.8,347.1 404.4,347.1 405.0,347.0 405.6,347.0 406.2,346.9 406.9,346.9 407.5,346.8 408.1,346.8 408.8,346.7 409.4,346.7 410.0,346.6 410.6,346.5 411.2,346.5 411.9,346.4 412.5,346.4 413.1,346.3 413.8,346.2 414.4,346.2 415.0,346.1 415.6,346.0 416.2,345.9 416.9,345.9 417.5,345.8 418.1,345.7 418.8,345.6 419.4,345.6 420.0,345.5 420.6,345.4 421.2,345.3 421.9,345.2 422.5,345.1 423.1,345.1 423.8,345.0 424.4,344.9 425.0,344.8 425.6,344.7 426.2,344.6 426.9,344.5 427.5,344.4 428.1,344.3 428.8,344.2 429.4,344.1 430.0,344.0 430.6,343.9 431.2,343.8 431.9,343.7 432.5,343.6 433.1,343.5 433.8,343.4 434.4,343.3 435.0,343.1 435.6,343.0 436.2,342.9 436.9,342.8 437.5,342.7 438.1,342.6 438.8,342.4 439.4,342.3 440.0,342.2 440.6,342.1 441.3,341.9 441.9,341.8 442.5,341.7 443.1,341.5 443.8,341.4 444.4,341.3 445.0,341.1 445.6,341.0 446.2,340.9 446.9,340.7 447.5,340.6 448.1,340.5 448.8,340.3 449.4,340.2 450.0,340.0 450.6,339.9 451.2,339.7 451.9,339.6 452.5,339.4 453.1,339.3 453.7,339.1 454.4,339.0 455.0,338.8 455.6,338.6 456.2,338.5 456.9,338.3 457.5,338.2 458.1,338.0 458.8,337.8 459.4,337.7 460.0,337.5 460.6,337.3 461.2,337.2 461.9,337.0 462.5,336.8 463.1,336.6 463.8,336.5 464.4,336.3 465.0,336.1 465.6,335.9 466.2,335.8 466.9,335.6 467.5,335.4 468.1,335.2 468.7,335.0 469.4,334.8 470.0,334.6 470.6,334.5 471.2,334.3 471.9,334.1 472.5,333.9 473.1,333.7 473.8,333.5 474.4,333.3 475.0,333.1 475.6,332.9 476.2,332.7 476.9,332.5 477.5,332.3 478.1,332.1 478.8,331.9 479.4,331.6 480.0,331.4 480.6,331.2 481.2,331.0 481.9,330.8 482.5,330.6 483.1,330.4 483.8,330.1 484.4,329.9 485.0,329.7 485.6,329.5 486.3,329.3 486.9,329.0 487.5,328.8 488.1,328.6 488.8,328.3 489.4,328.1 490.0,327.9 490.6,327.7 491.2,327.4 491.9,327.2 492.5,326.9 493.1,326.7 493.8,326.5 494.4,326.2 495.0,326.0 495.6,325.7 496.2,325.5 496.9,325.2 497.5,325.0 498.1,324.7 498.8,324.5 499.4,324.2 500.0,324.0 500.6,323.7 501.3,323.5 501.9,323.2 502.5,323.0 503.1,322.7 503.8,322.4 504.4,322.2 505.0,321.9 505.6,321.6 506.2,321.4 506.9,321.1 507.5,320.8 508.1,320.6 508.8,320.3 509.4,320.0 510.0,319.7 510.6,319.5 511.2,319.2 511.9,318.9 512.5,318.6 513.1,318.3 513.8,318.1 514.4,317.8 515.0,317.5 515.6,317.2 516.2,316.9 516.9,316.6 517.5,316.3 518.1,316.0 518.8,315.7 519.4,315.4 520.0,315.1 520.6,314.8 521.2,314.5 521.9,314.2 522.5,313.9 523.1,313.6 523.8,313.3 524.4,313.0 525.0,312.7 525.6,312.4 526.2,312.1 526.9,311.8 527.5,311.5 528.1,311.2 528.8,310.8 529.4,310.5 530.0,310.2 530.6,309.9 531.2,309.6 531.9,309.2 532.5,308.9 533.1,308.6 533.8,308.3 534.4,307.9 535.0,307.6 535.6,307.3 536.2,306.9 536.9,306.6 537.5,306.3 538.1,305.9 538.8,305.6 539.4,305.3 540.0,304.9 540.6,304.6 541.2,304.2 541.9,303.9 542.5,303.5 543.1,303.2 543.8,302.8 544.4,302.5 545.0,302.1 545.6,301.8 546.2,301.4 546.9,301.1 547.5,300.7 548.1,300.4 548.8,300.0 549.4,299.6 550.0,299.3 550.6,298.9 551.2,298.6 551.9,298.2 552.5,297.8 553.1,297.5 553.8,297.1 554.4,296.7 555.0,296.3 555.6,296.0 556.2,295.6 556.9,295.2 557.5,294.8 558.1,294.5 558.8,294.1 559.4,293.7 560.0,293.3 560.6,292.9 561.2,292.5 561.9,292.1 562.5,291.8 563.1,291.4 563.8,291.0 564.4,290.6 565.0,290.2 565.6,289.8 566.2,289.4 566.9,289.0 567.5,288.6 568.1,288.2 568.8,287.8 569.4,287.4 570.0,287.0 570.6,286.6 571.2,286.2 571.9,285.8 572.5,285.3 573.1,284.9 573.7,284.5 574.4,284.1 575.0,283.7 575.6,283.3 576.2,282.8 576.9,282.4 577.5,282.0 578.1,281.6 578.8,281.2 579.4,280.7 580.0,280.3 580.6,279.9 581.2,279.4 581.9,279.0 582.5,278.6 583.1,278.1 583.8,277.7 584.4,277.3 585.0,276.8 585.6,276.4 586.2,276.0 586.9,275.5 587.5,275.1 588.1,274.6 588.8,274.2 589.4,273.7 590.0,273.3 590.6,272.8 591.2,272.4 591.9,271.9 592.5,271.5 593.1,271.0 593.7,270.6 594.4,270.1 595.0,269.6 595.6,269.2 596.2,268.7 596.9,268.3 597.5,267.8 598.1,267.3 598.8,266.9 599.4,266.4 600.0,265.9 600.6,265.4 601.2,265.0 601.9,264.5 602.5,264.0 603.1,263.5 603.7,263.1 604.4,262.6 605.0,262.1 605.6,261.6 606.2,261.1 606.9,260.7 607.5,260.2 608.1,259.7 608.8,259.2 609.4,258.7 610.0,258.2 610.6,257.7 611.2,257.2 611.9,256.7 612.5,256.2 613.1,255.7 613.8,255.2 614.4,254.7 615.0,254.2 615.6,253.7 616.2,253.2 616.9,252.7 617.5,252.2 618.1,251.7 618.8,251.2 619.4,250.7 620.0,250.1 620.6,249.6 621.2,249.1 621.9,248.6 622.5,248.1 623.1,247.6 623.8,247.0 624.4,246.5 625.0,246.0 625.6,245.5 626.2,244.9 626.9,244.4 627.5,243.9 628.1,243.3 628.8,242.8 629.4,242.3 630.0,241.7 630.6,241.2 631.2,240.7 631.9,240.1 632.5,239.6 633.1,239.0 633.8,238.5 634.4,238.0 635.0,237.4 635.6,236.9 636.2,236.3 636.9,235.8 637.5,235.2 638.1,234.7 638.8,234.1 639.4,233.5 640.0,233.0 640.6,232.4 641.2,231.9 641.9,231.3 642.5,230.7 643.1,230.2 643.8,229.6 644.4,229.0 645.0,228.5 645.6,227.9 646.3,227.3 646.9,226.8 647.5,226.2 648.1,225.6 648.8,225.0 649.4,224.5 650.0,223.9 650.6,223.3 651.2,222.7 651.9,222.1 652.5,221.6 653.1,221.0 653.8,220.4 654.4,219.8 655.0,219.2 655.6,218.6 656.2,218.0 656.9,217.4 657.5,216.8 658.1,216.2 658.8,215.6 659.4,215.0 660.0,214.4 660.6,213.8 661.3,213.2 661.9,212.6 662.5,212.0 663.1,211.4 663.8,210.8 664.4,210.2 665.0,209.6 665.6,209.0 666.2,208.4 666.9,207.7 667.5,207.1 668.1,206.5 668.8,205.9 669.4,205.3 670.0,204.6 670.6,204.0 671.2,203.4 671.9,202.8 672.5,202.1 673.1,201.5 673.8,200.9 674.4,200.3 675.0,199.6 675.6,199.0 676.2,198.3 676.9,197.7 677.5,197.1 678.1,196.4 678.8,195.8 679.4,195.1 680.0,194.5 680.6,193.9 681.2,193.2 681.9,192.6 682.5,191.9 683.1,191.3 683.8,190.6 684.4,190.0 685.0,189.3 685.6,188.6 686.2,188.0 686.9,187.3 687.5,186.7 688.1,186.0 688.8,185.3 689.4,184.7 690.0,184.0 690.6,183.4 691.2,182.7 691.9,182.0 692.5,181.3 693.1,180.7 693.8,180.0 694.4,179.3 695.0,178.6 695.6,178.0 696.2,177.3 696.9,176.6 697.5,175.9 698.1,175.2 698.8,174.6 699.4,173.9 700.0,173.2 700.6,172.5 701.2,171.8 701.9,171.1 702.5,170.4 703.1,169.7 703.8,169.0 704.4,168.3 705.0,167.6 705.6,166.9 706.2,166.2 706.9,165.5 707.5,164.8 708.1,164.1 708.8,163.4 709.4,162.7 710.0,162.0 710.6,161.3 711.2,160.6 711.9,159.9 712.5,159.2 713.1,158.4 713.8,157.7 714.4,157.0 715.0,156.3 715.6,155.6 716.2,154.8 716.9,154.1 717.5,153.4 718.1,152.7 718.8,151.9 719.4,151.2 720.0,150.5 720.6,149.7 721.2,149.0 721.9,148.3 722.5,147.5 723.1,146.8 723.8,146.1 724.4,145.3 725.0,144.6 725.6,143.8 726.2,143.1 726.9,142.4 727.5,141.6 728.1,140.9 728.8,140.1 729.4,139.4 730.0,138.6 730.6,137.9 731.2,137.1 731.9,136.3 732.5,135.6 733.1,134.8 733.7,134.1 734.4,133.3 735.0,132.5 735.6,131.8 736.2,131.0 736.9,130.2 737.5,129.5 738.1,128.7 738.8,127.9 739.4,127.2 740.0,126.4 740.6,125.6 741.2,124.8 741.9,124.1 742.5,123.3 743.1,122.5 743.8,121.7 744.4,120.9 745.0,120.1 745.6,119.4 746.2,118.6 746.9,117.8 747.5,117.0 748.1,116.2 748.7,115.4 749.4,114.6 750.0,113.8 750.6,113.0 751.2,112.2 751.9,111.4 752.5,110.6 753.1,109.8 753.8,109.0 754.4,108.2 755.0,107.4 755.6,106.6 756.2,105.8 756.9,105.0 757.5,104.2"/>
<text x="78" y="90" font-size="17" fill="#2563eb">f(x)=x²-4x+1</text>
<circle cx="132.5" cy="239.6" r="6" fill="#0f766e"/><text x="140.5" y="229.6" font-size="17" fill="#0f766e">đầu trái</text>
<circle cx="382.5" cy="347.9" r="6" fill="#0f766e"/><text x="390.5" y="337.9" font-size="17" fill="#0f766e">GTNN</text>
<circle cx="757.5" cy="104.2" r="6" fill="#0f766e"/><text x="765.5" y="94.2" font-size="17" fill="#0f766e">GTLN</text>
<text x="822" y="256.7" font-size="18">x</text><text x="142.5" y="54" font-size="18">y</text></svg>
```

### FIG-G12-CHI-B03-01

**Ý nghĩa/fallback:** Hai đường tiệm cận x=1 và y=2 của $2+3/(x-1)$: nhánh trái đi xuống −∞ khi x→1−, nhánh phải lên +∞ khi x→1+; ở xa tiến gần y=2.

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="850" height="430" viewBox="0 0 850 430" role="img" aria-labelledby="title desc">
<title id="title">Tiệm cận đứng x=1 và ngang y=2</title>
<desc id="desc">Hình toán học FIG-G12-CHI-B03-01, các đường và tọa độ được giải thích bằng văn bản ngay bên dưới.</desc>
<rect width="850" height="430" fill="#f8fafc"/>
<line x1="70" y1="222.1" x2="820" y2="222.1" stroke="#334155" stroke-width="2"/>
<line x1="410.9" y1="50" x2="410.9" y2="375" stroke="#334155" stroke-width="2"/>
<line x1="70.00" y1="218.1" x2="70.00" y2="226.1" stroke="#64748b"/>
<line x1="138.18" y1="218.1" x2="138.18" y2="226.1" stroke="#64748b"/>
<line x1="206.36" y1="218.1" x2="206.36" y2="226.1" stroke="#64748b"/>
<line x1="274.55" y1="218.1" x2="274.55" y2="226.1" stroke="#64748b"/>
<line x1="342.73" y1="218.1" x2="342.73" y2="226.1" stroke="#64748b"/>
<line x1="410.91" y1="218.1" x2="410.91" y2="226.1" stroke="#64748b"/>
<line x1="479.09" y1="218.1" x2="479.09" y2="226.1" stroke="#64748b"/>
<line x1="547.27" y1="218.1" x2="547.27" y2="226.1" stroke="#64748b"/>
<line x1="615.45" y1="218.1" x2="615.45" y2="226.1" stroke="#64748b"/>
<line x1="683.64" y1="218.1" x2="683.64" y2="226.1" stroke="#64748b"/>
<line x1="751.82" y1="218.1" x2="751.82" y2="226.1" stroke="#64748b"/>
<line x1="820.00" y1="218.1" x2="820.00" y2="226.1" stroke="#64748b"/>
<line x1="479.09" y1="50" x2="479.09" y2="375" stroke="#dc2626" stroke-dasharray="8 7" stroke-width="2"/><text x="485.1" y="72" fill="#dc2626" font-size="17">x=1</text>
<line x1="70" y1="183.82" x2="820" y2="183.82" stroke="#dc2626" stroke-dasharray="8 7" stroke-width="2"/><text x="755" y="173.8" fill="#dc2626" font-size="17">y=2</text>
<polyline fill="none" stroke="#2563eb" stroke-width="3" points="70.0,193.4 70.4,193.4 70.8,193.4 71.2,193.4 71.6,193.4 72.0,193.4 72.4,193.4 72.9,193.4 73.3,193.5 73.7,193.5 74.1,193.5 74.5,193.5 74.9,193.5 75.3,193.5 75.7,193.5 76.1,193.5 76.5,193.5 76.9,193.5 77.3,193.6 77.7,193.6 78.2,193.6 78.6,193.6 79.0,193.6 79.4,193.6 79.8,193.6 80.2,193.6 80.6,193.6 81.0,193.6 81.4,193.7 81.8,193.7 82.2,193.7 82.6,193.7 83.0,193.7 83.5,193.7 83.9,193.7 84.3,193.7 84.7,193.7 85.1,193.7 85.5,193.8 85.9,193.8 86.3,193.8 86.7,193.8 87.1,193.8 87.5,193.8 87.9,193.8 88.3,193.8 88.8,193.8 89.2,193.9 89.6,193.9 90.0,193.9 90.4,193.9 90.8,193.9 91.2,193.9 91.6,193.9 92.0,193.9 92.4,193.9 92.8,193.9 93.2,194.0 93.6,194.0 94.1,194.0 94.5,194.0 94.9,194.0 95.3,194.0 95.7,194.0 96.1,194.0 96.5,194.0 96.9,194.1 97.3,194.1 97.7,194.1 98.1,194.1 98.5,194.1 98.9,194.1 99.4,194.1 99.8,194.1 100.2,194.1 100.6,194.2 101.0,194.2 101.4,194.2 101.8,194.2 102.2,194.2 102.6,194.2 103.0,194.2 103.4,194.2 103.8,194.2 104.2,194.3 104.7,194.3 105.1,194.3 105.5,194.3 105.9,194.3 106.3,194.3 106.7,194.3 107.1,194.3 107.5,194.3 107.9,194.4 108.3,194.4 108.7,194.4 109.1,194.4 109.5,194.4 110.0,194.4 110.4,194.4 110.8,194.4 111.2,194.5 111.6,194.5 112.0,194.5 112.4,194.5 112.8,194.5 113.2,194.5 113.6,194.5 114.0,194.5 114.4,194.5 114.8,194.6 115.3,194.6 115.7,194.6 116.1,194.6 116.5,194.6 116.9,194.6 117.3,194.6 117.7,194.6 118.1,194.7 118.5,194.7 118.9,194.7 119.3,194.7 119.7,194.7 120.2,194.7 120.6,194.7 121.0,194.7 121.4,194.8 121.8,194.8 122.2,194.8 122.6,194.8 123.0,194.8 123.4,194.8 123.8,194.8 124.2,194.8 124.6,194.9 125.0,194.9 125.5,194.9 125.9,194.9 126.3,194.9 126.7,194.9 127.1,194.9 127.5,194.9 127.9,195.0 128.3,195.0 128.7,195.0 129.1,195.0 129.5,195.0 129.9,195.0 130.3,195.0 130.8,195.0 131.2,195.1 131.6,195.1 132.0,195.1 132.4,195.1 132.8,195.1 133.2,195.1 133.6,195.1 134.0,195.2 134.4,195.2 134.8,195.2 135.2,195.2 135.6,195.2 136.1,195.2 136.5,195.2 136.9,195.3 137.3,195.3 137.7,195.3 138.1,195.3 138.5,195.3 138.9,195.3 139.3,195.3 139.7,195.3 140.1,195.4 140.5,195.4 140.9,195.4 141.4,195.4 141.8,195.4 142.2,195.4 142.6,195.4 143.0,195.5 143.4,195.5 143.8,195.5 144.2,195.5 144.6,195.5 145.0,195.5 145.4,195.5 145.8,195.6 146.2,195.6 146.7,195.6 147.1,195.6 147.5,195.6 147.9,195.6 148.3,195.6 148.7,195.7 149.1,195.7 149.5,195.7 149.9,195.7 150.3,195.7 150.7,195.7 151.1,195.7 151.5,195.8 152.0,195.8 152.4,195.8 152.8,195.8 153.2,195.8 153.6,195.8 154.0,195.9 154.4,195.9 154.8,195.9 155.2,195.9 155.6,195.9 156.0,195.9 156.4,195.9 156.8,196.0 157.3,196.0 157.7,196.0 158.1,196.0 158.5,196.0 158.9,196.0 159.3,196.1 159.7,196.1 160.1,196.1 160.5,196.1 160.9,196.1 161.3,196.1 161.7,196.1 162.1,196.2 162.6,196.2 163.0,196.2 163.4,196.2 163.8,196.2 164.2,196.2 164.6,196.3 165.0,196.3 165.4,196.3 165.8,196.3 166.2,196.3 166.6,196.3 167.0,196.4 167.4,196.4 167.9,196.4 168.3,196.4 168.7,196.4 169.1,196.4 169.5,196.5 169.9,196.5 170.3,196.5 170.7,196.5 171.1,196.5 171.5,196.5 171.9,196.6 172.3,196.6 172.7,196.6 173.2,196.6 173.6,196.6 174.0,196.6 174.4,196.7 174.8,196.7 175.2,196.7 175.6,196.7 176.0,196.7 176.4,196.7 176.8,196.8 177.2,196.8 177.6,196.8 178.0,196.8 178.5,196.8 178.9,196.8 179.3,196.9 179.7,196.9 180.1,196.9 180.5,196.9 180.9,196.9 181.3,197.0 181.7,197.0 182.1,197.0 182.5,197.0 182.9,197.0 183.3,197.0 183.8,197.1 184.2,197.1 184.6,197.1 185.0,197.1 185.4,197.1 185.8,197.2 186.2,197.2 186.6,197.2 187.0,197.2 187.4,197.2 187.8,197.2 188.2,197.3 188.6,197.3 189.1,197.3 189.5,197.3 189.9,197.3 190.3,197.4 190.7,197.4 191.1,197.4 191.5,197.4 191.9,197.4 192.3,197.5 192.7,197.5 193.1,197.5 193.5,197.5 193.9,197.5 194.4,197.6 194.8,197.6 195.2,197.6 195.6,197.6 196.0,197.6 196.4,197.7 196.8,197.7 197.2,197.7 197.6,197.7 198.0,197.7 198.4,197.8 198.8,197.8 199.2,197.8 199.7,197.8 200.1,197.8 200.5,197.9 200.9,197.9 201.3,197.9 201.7,197.9 202.1,197.9 202.5,198.0 202.9,198.0 203.3,198.0 203.7,198.0 204.1,198.0 204.5,198.1 205.0,198.1 205.4,198.1 205.8,198.1 206.2,198.2 206.6,198.2 207.0,198.2 207.4,198.2 207.8,198.2 208.2,198.3 208.6,198.3 209.0,198.3 209.4,198.3 209.9,198.3 210.3,198.4 210.7,198.4 211.1,198.4 211.5,198.4 211.9,198.5 212.3,198.5 212.7,198.5 213.1,198.5 213.5,198.5 213.9,198.6 214.3,198.6 214.7,198.6 215.2,198.6 215.6,198.7 216.0,198.7 216.4,198.7 216.8,198.7 217.2,198.8 217.6,198.8 218.0,198.8 218.4,198.8 218.8,198.8 219.2,198.9 219.6,198.9 220.0,198.9 220.5,198.9 220.9,199.0 221.3,199.0 221.7,199.0 222.1,199.0 222.5,199.1 222.9,199.1 223.3,199.1 223.7,199.1 224.1,199.2 224.5,199.2 224.9,199.2 225.3,199.2 225.8,199.3 226.2,199.3 226.6,199.3 227.0,199.3 227.4,199.4 227.8,199.4 228.2,199.4 228.6,199.4 229.0,199.5 229.4,199.5 229.8,199.5 230.2,199.5 230.6,199.6 231.1,199.6 231.5,199.6 231.9,199.6 232.3,199.7 232.7,199.7 233.1,199.7 233.5,199.7 233.9,199.8 234.3,199.8 234.7,199.8 235.1,199.9 235.5,199.9 235.9,199.9 236.4,199.9 236.8,200.0 237.2,200.0 237.6,200.0 238.0,200.0 238.4,200.1 238.8,200.1 239.2,200.1 239.6,200.2 240.0,200.2 240.4,200.2 240.8,200.2 241.2,200.3 241.7,200.3 242.1,200.3 242.5,200.3 242.9,200.4 243.3,200.4 243.7,200.4 244.1,200.5 244.5,200.5 244.9,200.5 245.3,200.6 245.7,200.6 246.1,200.6 246.5,200.6 247.0,200.7 247.4,200.7 247.8,200.7 248.2,200.8 248.6,200.8 249.0,200.8 249.4,200.8 249.8,200.9 250.2,200.9 250.6,200.9 251.0,201.0 251.4,201.0 251.8,201.0 252.3,201.1 252.7,201.1 253.1,201.1 253.5,201.2 253.9,201.2 254.3,201.2 254.7,201.3 255.1,201.3 255.5,201.3 255.9,201.3 256.3,201.4 256.7,201.4 257.1,201.4 257.6,201.5 258.0,201.5 258.4,201.5 258.8,201.6 259.2,201.6 259.6,201.6 260.0,201.7 260.4,201.7 260.8,201.7 261.2,201.8 261.6,201.8 262.0,201.8 262.4,201.9 262.9,201.9 263.3,201.9 263.7,202.0 264.1,202.0 264.5,202.0 264.9,202.1 265.3,202.1 265.7,202.1 266.1,202.2 266.5,202.2 266.9,202.3 267.3,202.3 267.7,202.3 268.2,202.4 268.6,202.4 269.0,202.4 269.4,202.5 269.8,202.5 270.2,202.5 270.6,202.6 271.0,202.6 271.4,202.7 271.8,202.7 272.2,202.7 272.6,202.8 273.0,202.8 273.5,202.8 273.9,202.9 274.3,202.9 274.7,203.0 275.1,203.0 275.5,203.0 275.9,203.1 276.3,203.1 276.7,203.1 277.1,203.2 277.5,203.2 277.9,203.3 278.3,203.3 278.8,203.3 279.2,203.4 279.6,203.4 280.0,203.5 280.4,203.5 280.8,203.5 281.2,203.6 281.6,203.6 282.0,203.7 282.4,203.7 282.8,203.7 283.2,203.8 283.6,203.8 284.1,203.9 284.5,203.9 284.9,204.0 285.3,204.0 285.7,204.0 286.1,204.1 286.5,204.1 286.9,204.2 287.3,204.2 287.7,204.3 288.1,204.3 288.5,204.3 288.9,204.4 289.4,204.4 289.8,204.5 290.2,204.5 290.6,204.6 291.0,204.6 291.4,204.7 291.8,204.7 292.2,204.7 292.6,204.8 293.0,204.8 293.4,204.9 293.8,204.9 294.2,205.0 294.7,205.0 295.1,205.1 295.5,205.1 295.9,205.2 296.3,205.2 296.7,205.3 297.1,205.3 297.5,205.4 297.9,205.4 298.3,205.5 298.7,205.5 299.1,205.6 299.6,205.6 300.0,205.7 300.4,205.7 300.8,205.8 301.2,205.8 301.6,205.9 302.0,205.9 302.4,206.0 302.8,206.0 303.2,206.1 303.6,206.1 304.0,206.2 304.4,206.2 304.9,206.3 305.3,206.3 305.7,206.4 306.1,206.4 306.5,206.5 306.9,206.5 307.3,206.6 307.7,206.6 308.1,206.7 308.5,206.7 308.9,206.8 309.3,206.9 309.7,206.9 310.2,207.0 310.6,207.0 311.0,207.1 311.4,207.1 311.8,207.2 312.2,207.3 312.6,207.3 313.0,207.4 313.4,207.4 313.8,207.5 314.2,207.5 314.6,207.6 315.0,207.7 315.5,207.7 315.9,207.8 316.3,207.8 316.7,207.9 317.1,208.0 317.5,208.0 317.9,208.1 318.3,208.1 318.7,208.2 319.1,208.3 319.5,208.3 319.9,208.4 320.3,208.5 320.8,208.5 321.2,208.6 321.6,208.6 322.0,208.7 322.4,208.8 322.8,208.8 323.2,208.9 323.6,209.0 324.0,209.0 324.4,209.1 324.8,209.2 325.2,209.2 325.6,209.3 326.1,209.4 326.5,209.4 326.9,209.5 327.3,209.6 327.7,209.7 328.1,209.7 328.5,209.8 328.9,209.9 329.3,209.9 329.7,210.0 330.1,210.1 330.5,210.1 330.9,210.2 331.4,210.3 331.8,210.4 332.2,210.4 332.6,210.5 333.0,210.6 333.4,210.7 333.8,210.7 334.2,210.8 334.6,210.9 335.0,211.0 335.4,211.0 335.8,211.1 336.2,211.2 336.7,211.3 337.1,211.4 337.5,211.4 337.9,211.5 338.3,211.6 338.7,211.7 339.1,211.8 339.5,211.8 339.9,211.9 340.3,212.0 340.7,212.1 341.1,212.2 341.5,212.3 342.0,212.3 342.4,212.4 342.8,212.5 343.2,212.6 343.6,212.7 344.0,212.8 344.4,212.9 344.8,212.9 345.2,213.0 345.6,213.1 346.0,213.2 346.4,213.3 346.8,213.4 347.3,213.5 347.7,213.6 348.1,213.7 348.5,213.8 348.9,213.9 349.3,214.0 349.7,214.0 350.1,214.1 350.5,214.2 350.9,214.3 351.3,214.4 351.7,214.5 352.1,214.6 352.6,214.7 353.0,214.8 353.4,214.9 353.8,215.0 354.2,215.1 354.6,215.2 355.0,215.3 355.4,215.4 355.8,215.5 356.2,215.7 356.6,215.8 357.0,215.9 357.4,216.0 357.9,216.1 358.3,216.2 358.7,216.3 359.1,216.4 359.5,216.5 359.9,216.6 360.3,216.7 360.7,216.9 361.1,217.0 361.5,217.1 361.9,217.2 362.3,217.3 362.7,217.4 363.2,217.6 363.6,217.7 364.0,217.8 364.4,217.9 364.8,218.0 365.2,218.2 365.6,218.3 366.0,218.4 366.4,218.5 366.8,218.7 367.2,218.8 367.6,218.9 368.0,219.0 368.5,219.2 368.9,219.3 369.3,219.4 369.7,219.6 370.1,219.7 370.5,219.8 370.9,220.0 371.3,220.1 371.7,220.2 372.1,220.4 372.5,220.5 372.9,220.7 373.3,220.8 373.8,220.9 374.2,221.1 374.6,221.2 375.0,221.4 375.4,221.5 375.8,221.7 376.2,221.8 376.6,222.0 377.0,222.1 377.4,222.3 377.8,222.4 378.2,222.6 378.6,222.8 379.1,222.9 379.5,223.1 379.9,223.2 380.3,223.4 380.7,223.6 381.1,223.7 381.5,223.9 381.9,224.1 382.3,224.2 382.7,224.4 383.1,224.6 383.5,224.7 384.0,224.9 384.4,225.1 384.8,225.3 385.2,225.5 385.6,225.6 386.0,225.8 386.4,226.0 386.8,226.2 387.2,226.4 387.6,226.6 388.0,226.8 388.4,227.0 388.8,227.2 389.3,227.3 389.7,227.5 390.1,227.7 390.5,228.0 390.9,228.2 391.3,228.4 391.7,228.6 392.1,228.8 392.5,229.0 392.9,229.2 393.3,229.4 393.7,229.6 394.1,229.9 394.6,230.1 395.0,230.3 395.4,230.5 395.8,230.8 396.2,231.0 396.6,231.2 397.0,231.5 397.4,231.7 397.8,231.9 398.2,232.2 398.6,232.4 399.0,232.7 399.4,232.9 399.9,233.2 400.3,233.4 400.7,233.7 401.1,233.9 401.5,234.2 401.9,234.5 402.3,234.7 402.7,235.0 403.1,235.3 403.5,235.6 403.9,235.9 404.3,236.1 404.7,236.4 405.2,236.7 405.6,237.0 406.0,237.3 406.4,237.6 406.8,237.9 407.2,238.2 407.6,238.5 408.0,238.8 408.4,239.2 408.8,239.5 409.2,239.8 409.6,240.1 410.0,240.5 410.5,240.8 410.9,241.1 411.3,241.5 411.7,241.8 412.1,242.2 412.5,242.5 412.9,242.9 413.3,243.3 413.7,243.6 414.1,244.0 414.5,244.4 414.9,244.8 415.3,245.2 415.8,245.6 416.2,246.0 416.6,246.4 417.0,246.8 417.4,247.2 417.8,247.6 418.2,248.0 418.6,248.5 419.0,248.9 419.4,249.4 419.8,249.8 420.2,250.3 420.6,250.7 421.1,251.2 421.5,251.7 421.9,252.2 422.3,252.7 422.7,253.1 423.1,253.7 423.5,254.2 423.9,254.7 424.3,255.2 424.7,255.7 425.1,256.3 425.5,256.8 425.9,257.4 426.4,258.0 426.8,258.6 427.2,259.1 427.6,259.7 428.0,260.3 428.4,261.0 428.8,261.6 429.2,262.2 429.6,262.9 430.0,263.5 430.4,264.2 430.8,264.9 431.2,265.6 431.7,266.3 432.1,267.0 432.5,267.7 432.9,268.4 433.3,269.2 433.7,270.0 434.1,270.7 434.5,271.5 434.9,272.3 435.3,273.2 435.7,274.0 436.1,274.9 436.5,275.7 437.0,276.6 437.4,277.5 437.8,278.5 438.2,279.4 438.6,280.4 439.0,281.3 439.4,282.3 439.8,283.4 440.2,284.4 440.6,285.5 441.0,286.6 441.4,287.7 441.8,288.8 442.3,290.0 442.7,291.2 443.1,292.4 443.5,293.6 443.9,294.9 444.3,296.2 444.7,297.5 445.1,298.9 445.5,300.3 445.9,301.7 446.3,303.2 446.7,304.7 447.1,306.2 447.6,307.8 448.0,309.4 448.4,311.1 448.8,312.8 449.2,314.6 449.6,316.4 450.0,318.3 450.4,320.2 450.8,322.1 451.2,324.2 451.6,326.2 452.0,328.4 452.4,330.6 452.9,332.9 453.3,335.2 453.7,337.7 454.1,340.2 454.5,342.8 454.9,345.4 455.3,348.2 455.7,351.1 456.1,354.0 456.5,357.1 456.9,360.3 457.3,363.6 457.7,367.0 458.2,370.6 458.6,374.3 459.0,378.2 459.4,382.2 459.8,386.4 460.2,390.8"/>
<text x="78" y="90" font-size="17" fill="#2563eb">f(x)=2+3/(x-1)</text>
<polyline fill="none" stroke="#2563eb" stroke-width="3" points="504.9,32.3 505.2,34.3 505.6,36.2 505.9,38.1 506.3,39.9 506.6,41.7 506.9,43.4 507.3,45.1 507.6,46.7 508.0,48.4 508.3,49.9 508.6,51.5 509.0,53.0 509.3,54.4 509.7,55.9 510.0,57.3 510.3,58.7 510.7,60.0 511.0,61.3 511.4,62.6 511.7,63.9 512.0,65.1 512.4,66.3 512.7,67.5 513.1,68.7 513.4,69.8 513.7,70.9 514.1,72.0 514.4,73.1 514.7,74.2 515.1,75.2 515.4,76.2 515.8,77.2 516.1,78.2 516.4,79.1 516.8,80.1 517.1,81.0 517.5,81.9 517.8,82.8 518.1,83.7 518.5,84.6 518.8,85.4 519.2,86.2 519.5,87.1 519.8,87.9 520.2,88.7 520.5,89.4 520.9,90.2 521.2,91.0 521.5,91.7 521.9,92.4 522.2,93.2 522.6,93.9 522.9,94.6 523.2,95.2 523.6,95.9 523.9,96.6 524.3,97.2 524.6,97.9 524.9,98.5 525.3,99.2 525.6,99.8 526.0,100.4 526.3,101.0 526.6,101.6 527.0,102.2 527.3,102.7 527.7,103.3 528.0,103.9 528.3,104.4 528.7,105.0 529.0,105.5 529.3,106.0 529.7,106.5 530.0,107.1 530.4,107.6 530.7,108.1 531.0,108.6 531.4,109.0 531.7,109.5 532.1,110.0 532.4,110.5 532.7,110.9 533.1,111.4 533.4,111.9 533.8,112.3 534.1,112.7 534.4,113.2 534.8,113.6 535.1,114.0 535.5,114.5 535.8,114.9 536.1,115.3 536.5,115.7 536.8,116.1 537.2,116.5 537.5,116.9 537.8,117.3 538.2,117.6 538.5,118.0 538.9,118.4 539.2,118.8 539.5,119.1 539.9,119.5 540.2,119.8 540.6,120.2 540.9,120.6 541.2,120.9 541.6,121.2 541.9,121.6 542.3,121.9 542.6,122.2 542.9,122.6 543.3,122.9 543.6,123.2 543.9,123.5 544.3,123.8 544.6,124.2 545.0,124.5 545.3,124.8 545.6,125.1 546.0,125.4 546.3,125.7 546.7,126.0 547.0,126.2 547.3,126.5 547.7,126.8 548.0,127.1 548.4,127.4 548.7,127.6 549.0,127.9 549.4,128.2 549.7,128.5 550.1,128.7 550.4,129.0 550.7,129.2 551.1,129.5 551.4,129.8 551.8,130.0 552.1,130.3 552.4,130.5 552.8,130.8 553.1,131.0 553.5,131.2 553.8,131.5 554.1,131.7 554.5,132.0 554.8,132.2 555.2,132.4 555.5,132.6 555.8,132.9 556.2,133.1 556.5,133.3 556.9,133.5 557.2,133.8 557.5,134.0 557.9,134.2 558.2,134.4 558.5,134.6 558.9,134.8 559.2,135.0 559.6,135.2 559.9,135.4 560.2,135.6 560.6,135.8 560.9,136.0 561.3,136.2 561.6,136.4 561.9,136.6 562.3,136.8 562.6,137.0 563.0,137.2 563.3,137.4 563.6,137.6 564.0,137.8 564.3,137.9 564.7,138.1 565.0,138.3 565.3,138.5 565.7,138.7 566.0,138.8 566.4,139.0 566.7,139.2 567.0,139.4 567.4,139.5 567.7,139.7 568.1,139.9 568.4,140.0 568.7,140.2 569.1,140.4 569.4,140.5 569.8,140.7 570.1,140.9 570.4,141.0 570.8,141.2 571.1,141.3 571.5,141.5 571.8,141.6 572.1,141.8 572.5,141.9 572.8,142.1 573.2,142.2 573.5,142.4 573.8,142.5 574.2,142.7 574.5,142.8 574.8,143.0 575.2,143.1 575.5,143.3 575.9,143.4 576.2,143.6 576.5,143.7 576.9,143.8 577.2,144.0 577.6,144.1 577.9,144.2 578.2,144.4 578.6,144.5 578.9,144.7 579.3,144.8 579.6,144.9 579.9,145.0 580.3,145.2 580.6,145.3 581.0,145.4 581.3,145.6 581.6,145.7 582.0,145.8 582.3,145.9 582.7,146.1 583.0,146.2 583.3,146.3 583.7,146.4 584.0,146.6 584.4,146.7 584.7,146.8 585.0,146.9 585.4,147.0 585.7,147.1 586.1,147.3 586.4,147.4 586.7,147.5 587.1,147.6 587.4,147.7 587.8,147.8 588.1,147.9 588.4,148.1 588.8,148.2 589.1,148.3 589.4,148.4 589.8,148.5 590.1,148.6 590.5,148.7 590.8,148.8 591.1,148.9 591.5,149.0 591.8,149.1 592.2,149.2 592.5,149.3 592.8,149.4 593.2,149.5 593.5,149.7 593.9,149.8 594.2,149.9 594.5,150.0 594.9,150.1 595.2,150.2 595.6,150.2 595.9,150.3 596.2,150.4 596.6,150.5 596.9,150.6 597.3,150.7 597.6,150.8 597.9,150.9 598.3,151.0 598.6,151.1 599.0,151.2 599.3,151.3 599.6,151.4 600.0,151.5 600.3,151.6 600.7,151.7 601.0,151.7 601.3,151.8 601.7,151.9 602.0,152.0 602.4,152.1 602.7,152.2 603.0,152.3 603.4,152.4 603.7,152.4 604.0,152.5 604.4,152.6 604.7,152.7 605.1,152.8 605.4,152.9 605.7,152.9 606.1,153.0 606.4,153.1 606.8,153.2 607.1,153.3 607.4,153.4 607.8,153.4 608.1,153.5 608.5,153.6 608.8,153.7 609.1,153.8 609.5,153.8 609.8,153.9 610.2,154.0 610.5,154.1 610.8,154.1 611.2,154.2 611.5,154.3 611.9,154.4 612.2,154.4 612.5,154.5 612.9,154.6 613.2,154.7 613.6,154.7 613.9,154.8 614.2,154.9 614.6,155.0 614.9,155.0 615.3,155.1 615.6,155.2 615.9,155.2 616.3,155.3 616.6,155.4 617.0,155.5 617.3,155.5 617.6,155.6 618.0,155.7 618.3,155.7 618.6,155.8 619.0,155.9 619.3,155.9 619.7,156.0 620.0,156.1 620.3,156.1 620.7,156.2 621.0,156.3 621.4,156.3 621.7,156.4 622.0,156.5 622.4,156.5 622.7,156.6 623.1,156.7 623.4,156.7 623.7,156.8 624.1,156.9 624.4,156.9 624.8,157.0 625.1,157.0 625.4,157.1 625.8,157.2 626.1,157.2 626.5,157.3 626.8,157.3 627.1,157.4 627.5,157.5 627.8,157.5 628.2,157.6 628.5,157.7 628.8,157.7 629.2,157.8 629.5,157.8 629.9,157.9 630.2,157.9 630.5,158.0 630.9,158.1 631.2,158.1 631.6,158.2 631.9,158.2 632.2,158.3 632.6,158.3 632.9,158.4 633.2,158.5 633.6,158.5 633.9,158.6 634.3,158.6 634.6,158.7 634.9,158.7 635.3,158.8 635.6,158.8 636.0,158.9 636.3,159.0 636.6,159.0 637.0,159.1 637.3,159.1 637.7,159.2 638.0,159.2 638.3,159.3 638.7,159.3 639.0,159.4 639.4,159.4 639.7,159.5 640.0,159.5 640.4,159.6 640.7,159.6 641.1,159.7 641.4,159.7 641.7,159.8 642.1,159.8 642.4,159.9 642.8,159.9 643.1,160.0 643.4,160.0 643.8,160.1 644.1,160.1 644.5,160.2 644.8,160.2 645.1,160.3 645.5,160.3 645.8,160.4 646.2,160.4 646.5,160.5 646.8,160.5 647.2,160.6 647.5,160.6 647.9,160.7 648.2,160.7 648.5,160.7 648.9,160.8 649.2,160.8 649.5,160.9 649.9,160.9 650.2,161.0 650.6,161.0 650.9,161.1 651.2,161.1 651.6,161.2 651.9,161.2 652.3,161.2 652.6,161.3 652.9,161.3 653.3,161.4 653.6,161.4 654.0,161.5 654.3,161.5 654.6,161.5 655.0,161.6 655.3,161.6 655.7,161.7 656.0,161.7 656.3,161.8 656.7,161.8 657.0,161.8 657.4,161.9 657.7,161.9 658.0,162.0 658.4,162.0 658.7,162.1 659.1,162.1 659.4,162.1 659.7,162.2 660.1,162.2 660.4,162.3 660.8,162.3 661.1,162.3 661.4,162.4 661.8,162.4 662.1,162.5 662.5,162.5 662.8,162.5 663.1,162.6 663.5,162.6 663.8,162.7 664.1,162.7 664.5,162.7 664.8,162.8 665.2,162.8 665.5,162.8 665.8,162.9 666.2,162.9 666.5,163.0 666.9,163.0 667.2,163.0 667.5,163.1 667.9,163.1 668.2,163.1 668.6,163.2 668.9,163.2 669.2,163.3 669.6,163.3 669.9,163.3 670.3,163.4 670.6,163.4 670.9,163.4 671.3,163.5 671.6,163.5 672.0,163.5 672.3,163.6 672.6,163.6 673.0,163.7 673.3,163.7 673.7,163.7 674.0,163.8 674.3,163.8 674.7,163.8 675.0,163.9 675.4,163.9 675.7,163.9 676.0,164.0 676.4,164.0 676.7,164.0 677.1,164.1 677.4,164.1 677.7,164.1 678.1,164.2 678.4,164.2 678.7,164.2 679.1,164.3 679.4,164.3 679.8,164.3 680.1,164.4 680.4,164.4 680.8,164.4 681.1,164.5 681.5,164.5 681.8,164.5 682.1,164.6 682.5,164.6 682.8,164.6 683.2,164.7 683.5,164.7 683.8,164.7 684.2,164.8 684.5,164.8 684.9,164.8 685.2,164.9 685.5,164.9 685.9,164.9 686.2,164.9 686.6,165.0 686.9,165.0 687.2,165.0 687.6,165.1 687.9,165.1 688.3,165.1 688.6,165.2 688.9,165.2 689.3,165.2 689.6,165.2 690.0,165.3 690.3,165.3 690.6,165.3 691.0,165.4 691.3,165.4 691.7,165.4 692.0,165.5 692.3,165.5 692.7,165.5 693.0,165.5 693.3,165.6 693.7,165.6 694.0,165.6 694.4,165.7 694.7,165.7 695.0,165.7 695.4,165.7 695.7,165.8 696.1,165.8 696.4,165.8 696.7,165.9 697.1,165.9 697.4,165.9 697.8,165.9 698.1,166.0 698.4,166.0 698.8,166.0 699.1,166.1 699.5,166.1 699.8,166.1 700.1,166.1 700.5,166.2 700.8,166.2 701.2,166.2 701.5,166.2 701.8,166.3 702.2,166.3 702.5,166.3 702.9,166.3 703.2,166.4 703.5,166.4 703.9,166.4 704.2,166.5 704.6,166.5 704.9,166.5 705.2,166.5 705.6,166.6 705.9,166.6 706.3,166.6 706.6,166.6 706.9,166.7 707.3,166.7 707.6,166.7 708.0,166.7 708.3,166.8 708.6,166.8 709.0,166.8 709.3,166.8 709.6,166.9 710.0,166.9 710.3,166.9 710.7,166.9 711.0,167.0 711.3,167.0 711.7,167.0 712.0,167.0 712.4,167.1 712.7,167.1 713.0,167.1 713.4,167.1 713.7,167.2 714.1,167.2 714.4,167.2 714.7,167.2 715.1,167.3 715.4,167.3 715.8,167.3 716.1,167.3 716.4,167.3 716.8,167.4 717.1,167.4 717.5,167.4 717.8,167.4 718.1,167.5 718.5,167.5 718.8,167.5 719.2,167.5 719.5,167.6 719.8,167.6 720.2,167.6 720.5,167.6 720.9,167.6 721.2,167.7 721.5,167.7 721.9,167.7 722.2,167.7 722.6,167.8 722.9,167.8 723.2,167.8 723.6,167.8 723.9,167.9 724.2,167.9 724.6,167.9 724.9,167.9 725.3,167.9 725.6,168.0 725.9,168.0 726.3,168.0 726.6,168.0 727.0,168.0 727.3,168.1 727.6,168.1 728.0,168.1 728.3,168.1 728.7,168.2 729.0,168.2 729.3,168.2 729.7,168.2 730.0,168.2 730.4,168.3 730.7,168.3 731.0,168.3 731.4,168.3 731.7,168.3 732.1,168.4 732.4,168.4 732.7,168.4 733.1,168.4 733.4,168.4 733.8,168.5 734.1,168.5 734.4,168.5 734.8,168.5 735.1,168.5 735.5,168.6 735.8,168.6 736.1,168.6 736.5,168.6 736.8,168.7 737.2,168.7 737.5,168.7 737.8,168.7 738.2,168.7 738.5,168.7 738.8,168.8 739.2,168.8 739.5,168.8 739.9,168.8 740.2,168.8 740.5,168.9 740.9,168.9 741.2,168.9 741.6,168.9 741.9,168.9 742.2,169.0 742.6,169.0 742.9,169.0 743.3,169.0 743.6,169.0 743.9,169.1 744.3,169.1 744.6,169.1 745.0,169.1 745.3,169.1 745.6,169.2 746.0,169.2 746.3,169.2 746.7,169.2 747.0,169.2 747.3,169.2 747.7,169.3 748.0,169.3 748.4,169.3 748.7,169.3 749.0,169.3 749.4,169.4 749.7,169.4 750.1,169.4 750.4,169.4 750.7,169.4 751.1,169.4 751.4,169.5 751.8,169.5 752.1,169.5 752.4,169.5 752.8,169.5 753.1,169.6 753.4,169.6 753.8,169.6 754.1,169.6 754.5,169.6 754.8,169.6 755.1,169.7 755.5,169.7 755.8,169.7 756.2,169.7 756.5,169.7 756.8,169.7 757.2,169.8 757.5,169.8 757.9,169.8 758.2,169.8 758.5,169.8 758.9,169.8 759.2,169.9 759.6,169.9 759.9,169.9 760.2,169.9 760.6,169.9 760.9,169.9 761.3,170.0 761.6,170.0 761.9,170.0 762.3,170.0 762.6,170.0 763.0,170.0 763.3,170.1 763.6,170.1 764.0,170.1 764.3,170.1 764.7,170.1 765.0,170.1 765.3,170.2 765.7,170.2 766.0,170.2 766.4,170.2 766.7,170.2 767.0,170.2 767.4,170.3 767.7,170.3 768.0,170.3 768.4,170.3 768.7,170.3 769.1,170.3 769.4,170.4 769.7,170.4 770.1,170.4 770.4,170.4 770.8,170.4 771.1,170.4 771.4,170.4 771.8,170.5 772.1,170.5 772.5,170.5 772.8,170.5 773.1,170.5 773.5,170.5 773.8,170.6 774.2,170.6 774.5,170.6 774.8,170.6 775.2,170.6 775.5,170.6 775.9,170.6 776.2,170.7 776.5,170.7 776.9,170.7 777.2,170.7 777.6,170.7 777.9,170.7 778.2,170.8 778.6,170.8 778.9,170.8 779.3,170.8 779.6,170.8 779.9,170.8 780.3,170.8 780.6,170.9 781.0,170.9 781.3,170.9 781.6,170.9 782.0,170.9 782.3,170.9 782.7,170.9 783.0,171.0 783.3,171.0 783.7,171.0 784.0,171.0 784.3,171.0 784.7,171.0 785.0,171.0 785.4,171.1 785.7,171.1 786.0,171.1 786.4,171.1 786.7,171.1 787.1,171.1 787.4,171.1 787.7,171.2 788.1,171.2 788.4,171.2 788.8,171.2 789.1,171.2 789.4,171.2 789.8,171.2 790.1,171.3 790.5,171.3 790.8,171.3 791.1,171.3 791.5,171.3 791.8,171.3 792.2,171.3 792.5,171.3 792.8,171.4 793.2,171.4 793.5,171.4 793.9,171.4 794.2,171.4 794.5,171.4 794.9,171.4 795.2,171.5 795.6,171.5 795.9,171.5 796.2,171.5 796.6,171.5 796.9,171.5 797.3,171.5 797.6,171.5 797.9,171.6 798.3,171.6 798.6,171.6 798.9,171.6 799.3,171.6 799.6,171.6 800.0,171.6 800.3,171.6 800.6,171.7 801.0,171.7 801.3,171.7 801.7,171.7 802.0,171.7 802.3,171.7 802.7,171.7 803.0,171.8 803.4,171.8 803.7,171.8 804.0,171.8 804.4,171.8 804.7,171.8 805.1,171.8 805.4,171.8 805.7,171.9 806.1,171.9 806.4,171.9 806.8,171.9 807.1,171.9 807.4,171.9 807.8,171.9 808.1,171.9 808.5,172.0 808.8,172.0 809.1,172.0 809.5,172.0 809.8,172.0 810.2,172.0 810.5,172.0 810.8,172.0 811.2,172.0 811.5,172.1 811.9,172.1 812.2,172.1 812.5,172.1 812.9,172.1 813.2,172.1 813.5,172.1 813.9,172.1 814.2,172.2 814.6,172.2 814.9,172.2 815.2,172.2 815.6,172.2 815.9,172.2 816.3,172.2 816.6,172.2 816.9,172.2 817.3,172.3 817.6,172.3 818.0,172.3 818.3,172.3 818.6,172.3 819.0,172.3 819.3,172.3 819.7,172.3 820.0,172.4"/>
<text x="822" y="212.1" font-size="18">x</text><text x="420.9" y="54" font-size="18">y</text></svg>
```

### FIG-G12-CHI-B04-01

**Ý nghĩa/fallback:** Hai nhánh của $1+2/(x-1)$ bị ngăn bởi x=1, cùng có đạo hàm âm; đồ thị không được nối qua khoảng trống. Giao trục (-1,0) và (0,-1).

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="850" height="430" viewBox="0 0 850 430" role="img" aria-labelledby="title desc">
<title id="title">Khảo sát phân thức hai nhánh giảm</title>
<desc id="desc">Hình toán học FIG-G12-CHI-B04-01, các đường và tọa độ được giải thích bằng văn bản ngay bên dưới.</desc>
<rect width="850" height="430" fill="#f8fafc"/>
<line x1="70" y1="222.1" x2="820" y2="222.1" stroke="#334155" stroke-width="2"/>
<line x1="382.5" y1="50" x2="382.5" y2="375" stroke="#334155" stroke-width="2"/>
<line x1="70.00" y1="218.1" x2="70.00" y2="226.1" stroke="#64748b"/>
<line x1="132.50" y1="218.1" x2="132.50" y2="226.1" stroke="#64748b"/>
<line x1="195.00" y1="218.1" x2="195.00" y2="226.1" stroke="#64748b"/>
<line x1="257.50" y1="218.1" x2="257.50" y2="226.1" stroke="#64748b"/>
<line x1="320.00" y1="218.1" x2="320.00" y2="226.1" stroke="#64748b"/>
<line x1="382.50" y1="218.1" x2="382.50" y2="226.1" stroke="#64748b"/>
<line x1="445.00" y1="218.1" x2="445.00" y2="226.1" stroke="#64748b"/>
<line x1="507.50" y1="218.1" x2="507.50" y2="226.1" stroke="#64748b"/>
<line x1="570.00" y1="218.1" x2="570.00" y2="226.1" stroke="#64748b"/>
<line x1="632.50" y1="218.1" x2="632.50" y2="226.1" stroke="#64748b"/>
<line x1="695.00" y1="218.1" x2="695.00" y2="226.1" stroke="#64748b"/>
<line x1="757.50" y1="218.1" x2="757.50" y2="226.1" stroke="#64748b"/>
<line x1="820.00" y1="218.1" x2="820.00" y2="226.1" stroke="#64748b"/>
<line x1="445.00" y1="50" x2="445.00" y2="375" stroke="#dc2626" stroke-dasharray="8 7" stroke-width="2"/><text x="451.0" y="72" fill="#dc2626" font-size="17">x=1</text>
<line x1="70" y1="202.94" x2="820" y2="202.94" stroke="#dc2626" stroke-dasharray="8 7" stroke-width="2"/><text x="755" y="192.9" fill="#dc2626" font-size="17">y=1</text>
<polyline fill="none" stroke="#2563eb" stroke-width="3" points="70.0,209.3 70.4,209.3 70.7,209.3 71.1,209.3 71.5,209.3 71.9,209.3 72.2,209.4 72.6,209.4 73.0,209.4 73.4,209.4 73.7,209.4 74.1,209.4 74.5,209.4 74.9,209.4 75.2,209.4 75.6,209.4 76.0,209.4 76.4,209.4 76.7,209.4 77.1,209.4 77.5,209.4 77.8,209.4 78.2,209.5 78.6,209.5 79.0,209.5 79.3,209.5 79.7,209.5 80.1,209.5 80.5,209.5 80.8,209.5 81.2,209.5 81.6,209.5 82.0,209.5 82.3,209.5 82.7,209.5 83.1,209.5 83.5,209.6 83.8,209.6 84.2,209.6 84.6,209.6 85.0,209.6 85.3,209.6 85.7,209.6 86.1,209.6 86.4,209.6 86.8,209.6 87.2,209.6 87.6,209.6 87.9,209.6 88.3,209.6 88.7,209.6 89.1,209.7 89.4,209.7 89.8,209.7 90.2,209.7 90.6,209.7 90.9,209.7 91.3,209.7 91.7,209.7 92.1,209.7 92.4,209.7 92.8,209.7 93.2,209.7 93.5,209.7 93.9,209.7 94.3,209.8 94.7,209.8 95.0,209.8 95.4,209.8 95.8,209.8 96.2,209.8 96.5,209.8 96.9,209.8 97.3,209.8 97.7,209.8 98.0,209.8 98.4,209.8 98.8,209.8 99.2,209.9 99.5,209.9 99.9,209.9 100.3,209.9 100.6,209.9 101.0,209.9 101.4,209.9 101.8,209.9 102.1,209.9 102.5,209.9 102.9,209.9 103.3,209.9 103.6,209.9 104.0,209.9 104.4,210.0 104.8,210.0 105.1,210.0 105.5,210.0 105.9,210.0 106.3,210.0 106.6,210.0 107.0,210.0 107.4,210.0 107.7,210.0 108.1,210.0 108.5,210.0 108.9,210.1 109.2,210.1 109.6,210.1 110.0,210.1 110.4,210.1 110.7,210.1 111.1,210.1 111.5,210.1 111.9,210.1 112.2,210.1 112.6,210.1 113.0,210.1 113.4,210.1 113.7,210.2 114.1,210.2 114.5,210.2 114.8,210.2 115.2,210.2 115.6,210.2 116.0,210.2 116.3,210.2 116.7,210.2 117.1,210.2 117.5,210.2 117.8,210.2 118.2,210.3 118.6,210.3 119.0,210.3 119.3,210.3 119.7,210.3 120.1,210.3 120.5,210.3 120.8,210.3 121.2,210.3 121.6,210.3 122.0,210.3 122.3,210.3 122.7,210.4 123.1,210.4 123.4,210.4 123.8,210.4 124.2,210.4 124.6,210.4 124.9,210.4 125.3,210.4 125.7,210.4 126.1,210.4 126.4,210.4 126.8,210.5 127.2,210.5 127.6,210.5 127.9,210.5 128.3,210.5 128.7,210.5 129.1,210.5 129.4,210.5 129.8,210.5 130.2,210.5 130.5,210.5 130.9,210.5 131.3,210.6 131.7,210.6 132.0,210.6 132.4,210.6 132.8,210.6 133.2,210.6 133.5,210.6 133.9,210.6 134.3,210.6 134.7,210.6 135.0,210.7 135.4,210.7 135.8,210.7 136.2,210.7 136.5,210.7 136.9,210.7 137.3,210.7 137.6,210.7 138.0,210.7 138.4,210.7 138.8,210.7 139.1,210.8 139.5,210.8 139.9,210.8 140.3,210.8 140.6,210.8 141.0,210.8 141.4,210.8 141.8,210.8 142.1,210.8 142.5,210.8 142.9,210.9 143.3,210.9 143.6,210.9 144.0,210.9 144.4,210.9 144.8,210.9 145.1,210.9 145.5,210.9 145.9,210.9 146.2,210.9 146.6,211.0 147.0,211.0 147.4,211.0 147.7,211.0 148.1,211.0 148.5,211.0 148.9,211.0 149.2,211.0 149.6,211.0 150.0,211.0 150.4,211.1 150.7,211.1 151.1,211.1 151.5,211.1 151.9,211.1 152.2,211.1 152.6,211.1 153.0,211.1 153.3,211.1 153.7,211.1 154.1,211.2 154.5,211.2 154.8,211.2 155.2,211.2 155.6,211.2 156.0,211.2 156.3,211.2 156.7,211.2 157.1,211.2 157.5,211.3 157.8,211.3 158.2,211.3 158.6,211.3 159.0,211.3 159.3,211.3 159.7,211.3 160.1,211.3 160.4,211.3 160.8,211.4 161.2,211.4 161.6,211.4 161.9,211.4 162.3,211.4 162.7,211.4 163.1,211.4 163.4,211.4 163.8,211.4 164.2,211.5 164.6,211.5 164.9,211.5 165.3,211.5 165.7,211.5 166.1,211.5 166.4,211.5 166.8,211.5 167.2,211.5 167.5,211.6 167.9,211.6 168.3,211.6 168.7,211.6 169.0,211.6 169.4,211.6 169.8,211.6 170.2,211.6 170.5,211.6 170.9,211.7 171.3,211.7 171.7,211.7 172.0,211.7 172.4,211.7 172.8,211.7 173.2,211.7 173.5,211.7 173.9,211.8 174.3,211.8 174.7,211.8 175.0,211.8 175.4,211.8 175.8,211.8 176.1,211.8 176.5,211.8 176.9,211.9 177.3,211.9 177.6,211.9 178.0,211.9 178.4,211.9 178.8,211.9 179.1,211.9 179.5,211.9 179.9,212.0 180.3,212.0 180.6,212.0 181.0,212.0 181.4,212.0 181.8,212.0 182.1,212.0 182.5,212.0 182.9,212.1 183.2,212.1 183.6,212.1 184.0,212.1 184.4,212.1 184.7,212.1 185.1,212.1 185.5,212.1 185.9,212.2 186.2,212.2 186.6,212.2 187.0,212.2 187.4,212.2 187.7,212.2 188.1,212.2 188.5,212.3 188.9,212.3 189.2,212.3 189.6,212.3 190.0,212.3 190.3,212.3 190.7,212.3 191.1,212.4 191.5,212.4 191.8,212.4 192.2,212.4 192.6,212.4 193.0,212.4 193.3,212.4 193.7,212.5 194.1,212.5 194.5,212.5 194.8,212.5 195.2,212.5 195.6,212.5 196.0,212.5 196.3,212.6 196.7,212.6 197.1,212.6 197.4,212.6 197.8,212.6 198.2,212.6 198.6,212.6 198.9,212.7 199.3,212.7 199.7,212.7 200.1,212.7 200.4,212.7 200.8,212.7 201.2,212.7 201.6,212.8 201.9,212.8 202.3,212.8 202.7,212.8 203.1,212.8 203.4,212.8 203.8,212.8 204.2,212.9 204.6,212.9 204.9,212.9 205.3,212.9 205.7,212.9 206.0,212.9 206.4,213.0 206.8,213.0 207.2,213.0 207.5,213.0 207.9,213.0 208.3,213.0 208.7,213.1 209.0,213.1 209.4,213.1 209.8,213.1 210.2,213.1 210.5,213.1 210.9,213.1 211.3,213.2 211.7,213.2 212.0,213.2 212.4,213.2 212.8,213.2 213.1,213.2 213.5,213.3 213.9,213.3 214.3,213.3 214.6,213.3 215.0,213.3 215.4,213.3 215.8,213.4 216.1,213.4 216.5,213.4 216.9,213.4 217.3,213.4 217.6,213.5 218.0,213.5 218.4,213.5 218.8,213.5 219.1,213.5 219.5,213.5 219.9,213.6 220.2,213.6 220.6,213.6 221.0,213.6 221.4,213.6 221.7,213.6 222.1,213.7 222.5,213.7 222.9,213.7 223.2,213.7 223.6,213.7 224.0,213.8 224.4,213.8 224.7,213.8 225.1,213.8 225.5,213.8 225.9,213.8 226.2,213.9 226.6,213.9 227.0,213.9 227.3,213.9 227.7,213.9 228.1,214.0 228.5,214.0 228.8,214.0 229.2,214.0 229.6,214.0 230.0,214.1 230.3,214.1 230.7,214.1 231.1,214.1 231.5,214.1 231.8,214.2 232.2,214.2 232.6,214.2 233.0,214.2 233.3,214.2 233.7,214.3 234.1,214.3 234.5,214.3 234.8,214.3 235.2,214.3 235.6,214.4 235.9,214.4 236.3,214.4 236.7,214.4 237.1,214.4 237.4,214.5 237.8,214.5 238.2,214.5 238.6,214.5 238.9,214.5 239.3,214.6 239.7,214.6 240.1,214.6 240.4,214.6 240.8,214.6 241.2,214.7 241.6,214.7 241.9,214.7 242.3,214.7 242.7,214.8 243.0,214.8 243.4,214.8 243.8,214.8 244.2,214.8 244.5,214.9 244.9,214.9 245.3,214.9 245.7,214.9 246.0,215.0 246.4,215.0 246.8,215.0 247.2,215.0 247.5,215.0 247.9,215.1 248.3,215.1 248.7,215.1 249.0,215.1 249.4,215.2 249.8,215.2 250.1,215.2 250.5,215.2 250.9,215.3 251.3,215.3 251.6,215.3 252.0,215.3 252.4,215.3 252.8,215.4 253.1,215.4 253.5,215.4 253.9,215.4 254.3,215.5 254.6,215.5 255.0,215.5 255.4,215.5 255.8,215.6 256.1,215.6 256.5,215.6 256.9,215.6 257.2,215.7 257.6,215.7 258.0,215.7 258.4,215.7 258.7,215.8 259.1,215.8 259.5,215.8 259.9,215.8 260.2,215.9 260.6,215.9 261.0,215.9 261.4,216.0 261.7,216.0 262.1,216.0 262.5,216.0 262.9,216.1 263.2,216.1 263.6,216.1 264.0,216.1 264.4,216.2 264.7,216.2 265.1,216.2 265.5,216.3 265.8,216.3 266.2,216.3 266.6,216.3 267.0,216.4 267.3,216.4 267.7,216.4 268.1,216.4 268.5,216.5 268.8,216.5 269.2,216.5 269.6,216.6 270.0,216.6 270.3,216.6 270.7,216.7 271.1,216.7 271.5,216.7 271.8,216.7 272.2,216.8 272.6,216.8 272.9,216.8 273.3,216.9 273.7,216.9 274.1,216.9 274.4,217.0 274.8,217.0 275.2,217.0 275.6,217.0 275.9,217.1 276.3,217.1 276.7,217.1 277.1,217.2 277.4,217.2 277.8,217.2 278.2,217.3 278.6,217.3 278.9,217.3 279.3,217.4 279.7,217.4 280.0,217.4 280.4,217.5 280.8,217.5 281.2,217.5 281.5,217.6 281.9,217.6 282.3,217.6 282.7,217.7 283.0,217.7 283.4,217.7 283.8,217.8 284.2,217.8 284.5,217.8 284.9,217.9 285.3,217.9 285.7,217.9 286.0,218.0 286.4,218.0 286.8,218.0 287.1,218.1 287.5,218.1 287.9,218.2 288.3,218.2 288.6,218.2 289.0,218.3 289.4,218.3 289.8,218.3 290.1,218.4 290.5,218.4 290.9,218.4 291.3,218.5 291.6,218.5 292.0,218.6 292.4,218.6 292.8,218.6 293.1,218.7 293.5,218.7 293.9,218.8 294.2,218.8 294.6,218.8 295.0,218.9 295.4,218.9 295.7,219.0 296.1,219.0 296.5,219.0 296.9,219.1 297.2,219.1 297.6,219.2 298.0,219.2 298.4,219.2 298.7,219.3 299.1,219.3 299.5,219.4 299.9,219.4 300.2,219.4 300.6,219.5 301.0,219.5 301.4,219.6 301.7,219.6 302.1,219.7 302.5,219.7 302.8,219.8 303.2,219.8 303.6,219.8 304.0,219.9 304.3,219.9 304.7,220.0 305.1,220.0 305.5,220.1 305.8,220.1 306.2,220.2 306.6,220.2 307.0,220.3 307.3,220.3 307.7,220.3 308.1,220.4 308.5,220.4 308.8,220.5 309.2,220.5 309.6,220.6 309.9,220.6 310.3,220.7 310.7,220.7 311.1,220.8 311.4,220.8 311.8,220.9 312.2,220.9 312.6,221.0 312.9,221.0 313.3,221.1 313.7,221.1 314.1,221.2 314.4,221.2 314.8,221.3 315.2,221.3 315.6,221.4 315.9,221.5 316.3,221.5 316.7,221.6 317.0,221.6 317.4,221.7 317.8,221.7 318.2,221.8 318.5,221.8 318.9,221.9 319.3,222.0 319.7,222.0 320.0,222.1 320.4,222.1 320.8,222.2 321.2,222.2 321.5,222.3 321.9,222.4 322.3,222.4 322.7,222.5 323.0,222.5 323.4,222.6 323.8,222.7 324.1,222.7 324.5,222.8 324.9,222.8 325.3,222.9 325.6,223.0 326.0,223.0 326.4,223.1 326.8,223.2 327.1,223.2 327.5,223.3 327.9,223.3 328.3,223.4 328.6,223.5 329.0,223.5 329.4,223.6 329.8,223.7 330.1,223.7 330.5,223.8 330.9,223.9 331.3,223.9 331.6,224.0 332.0,224.1 332.4,224.2 332.7,224.2 333.1,224.3 333.5,224.4 333.9,224.4 334.2,224.5 334.6,224.6 335.0,224.7 335.4,224.7 335.7,224.8 336.1,224.9 336.5,225.0 336.9,225.0 337.2,225.1 337.6,225.2 338.0,225.3 338.4,225.3 338.7,225.4 339.1,225.5 339.5,225.6 339.8,225.7 340.2,225.7 340.6,225.8 341.0,225.9 341.3,226.0 341.7,226.1 342.1,226.2 342.5,226.2 342.8,226.3 343.2,226.4 343.6,226.5 344.0,226.6 344.3,226.7 344.7,226.8 345.1,226.9 345.5,226.9 345.8,227.0 346.2,227.1 346.6,227.2 346.9,227.3 347.3,227.4 347.7,227.5 348.1,227.6 348.4,227.7 348.8,227.8 349.2,227.9 349.6,228.0 349.9,228.1 350.3,228.2 350.7,228.3 351.1,228.4 351.4,228.5 351.8,228.6 352.2,228.7 352.6,228.8 352.9,228.9 353.3,229.0 353.7,229.1 354.1,229.2 354.4,229.3 354.8,229.4 355.2,229.5 355.5,229.7 355.9,229.8 356.3,229.9 356.7,230.0 357.0,230.1 357.4,230.2 357.8,230.3 358.2,230.5 358.5,230.6 358.9,230.7 359.3,230.8 359.7,230.9 360.0,231.1 360.4,231.2 360.8,231.3 361.2,231.4 361.5,231.6 361.9,231.7 362.3,231.8 362.6,232.0 363.0,232.1 363.4,232.2 363.8,232.4 364.1,232.5 364.5,232.6 364.9,232.8 365.3,232.9 365.6,233.1 366.0,233.2 366.4,233.3 366.8,233.5 367.1,233.6 367.5,233.8 367.9,233.9 368.3,234.1 368.6,234.2 369.0,234.4 369.4,234.5 369.7,234.7 370.1,234.9 370.5,235.0 370.9,235.2 371.2,235.3 371.6,235.5 372.0,235.7 372.4,235.8 372.7,236.0 373.1,236.2 373.5,236.4 373.9,236.5 374.2,236.7 374.6,236.9 375.0,237.1 375.4,237.3 375.7,237.4 376.1,237.6 376.5,237.8 376.8,238.0 377.2,238.2 377.6,238.4 378.0,238.6 378.3,238.8 378.7,239.0 379.1,239.2 379.5,239.4 379.8,239.6 380.2,239.8 380.6,240.0 381.0,240.3 381.3,240.5 381.7,240.7 382.1,240.9 382.5,241.1 382.8,241.4 383.2,241.6 383.6,241.8 384.0,242.1 384.3,242.3 384.7,242.6 385.1,242.8 385.4,243.1 385.8,243.3 386.2,243.6 386.6,243.8 386.9,244.1 387.3,244.4 387.7,244.6 388.1,244.9 388.4,245.2 388.8,245.5 389.2,245.8 389.6,246.0 389.9,246.3 390.3,246.6 390.7,246.9 391.1,247.2 391.4,247.5 391.8,247.9 392.2,248.2 392.5,248.5 392.9,248.8 393.3,249.2 393.7,249.5 394.0,249.8 394.4,250.2 394.8,250.5 395.2,250.9 395.5,251.3 395.9,251.6 396.3,252.0 396.7,252.4 397.0,252.8 397.4,253.2 397.8,253.5 398.2,254.0 398.5,254.4 398.9,254.8 399.3,255.2 399.6,255.6 400.0,256.1 400.4,256.5 400.8,257.0 401.1,257.4 401.5,257.9 401.9,258.4 402.3,258.9 402.6,259.4 403.0,259.9 403.4,260.4 403.8,260.9 404.1,261.4 404.5,262.0 404.9,262.5 405.3,263.1 405.6,263.6 406.0,264.2 406.4,264.8 406.7,265.4 407.1,266.0 407.5,266.7 407.9,267.3 408.2,268.0 408.6,268.6 409.0,269.3 409.4,270.0 409.7,270.7 410.1,271.4 410.5,272.2 410.9,272.9 411.2,273.7 411.6,274.5 412.0,275.3 412.4,276.1 412.7,277.0 413.1,277.9 413.5,278.7 413.9,279.7 414.2,280.6 414.6,281.5 415.0,282.5 415.3,283.5 415.7,284.6 416.1,285.6 416.5,286.7 416.8,287.8 417.2,288.9 417.6,290.1 418.0,291.3 418.3,292.6 418.7,293.8 419.1,295.1 419.5,296.5 419.8,297.9 420.2,299.3 420.6,300.8 421.0,302.3 421.3,303.9 421.7,305.5 422.1,307.2 422.4,308.9 422.8,310.7 423.2,312.5 423.6,314.4 423.9,316.4 424.3,318.5 424.7,320.6 425.1,322.8 425.4,325.1 425.8,327.5 426.2,329.9 426.6,332.5 426.9,335.2 427.3,338.0 427.7,340.9 428.1,343.9 428.4,347.1 428.8,350.5 429.2,353.9 429.5,357.6 429.9,361.4 430.3,365.5 430.7,369.7 431.0,374.2 431.4,378.9 431.8,383.8 432.2,389.1"/>
<text x="78" y="90" font-size="17" fill="#2563eb">f(x)=1+2/(x-1)</text>
<polyline fill="none" stroke="#2563eb" stroke-width="3" points="459.0,31.7 459.3,36.2 459.7,40.4 460.1,44.5 460.5,48.3 460.8,51.9 461.2,55.4 461.6,58.8 461.9,61.9 462.3,65.0 462.7,67.9 463.1,70.7 463.4,73.4 463.8,75.9 464.2,78.4 464.6,80.8 464.9,83.1 465.3,85.3 465.7,87.4 466.1,89.5 466.4,91.4 466.8,93.4 467.2,95.2 467.6,97.0 467.9,98.7 468.3,100.4 468.7,102.0 469.0,103.6 469.4,105.1 469.8,106.6 470.2,108.0 470.5,109.4 470.9,110.7 471.3,112.0 471.7,113.3 472.0,114.6 472.4,115.8 472.8,116.9 473.2,118.1 473.5,119.2 473.9,120.3 474.3,121.3 474.7,122.4 475.0,123.4 475.4,124.3 475.8,125.3 476.1,126.2 476.5,127.1 476.9,128.0 477.3,128.9 477.6,129.7 478.0,130.6 478.4,131.4 478.8,132.2 479.1,132.9 479.5,133.7 479.9,134.4 480.3,135.2 480.6,135.9 481.0,136.6 481.4,137.3 481.8,137.9 482.1,138.6 482.5,139.2 482.9,139.9 483.3,140.5 483.6,141.1 484.0,141.7 484.4,142.2 484.7,142.8 485.1,143.4 485.5,143.9 485.9,144.5 486.2,145.0 486.6,145.5 487.0,146.0 487.4,146.5 487.7,147.0 488.1,147.5 488.5,148.0 488.9,148.5 489.2,148.9 489.6,149.4 490.0,149.8 490.4,150.2 490.7,150.7 491.1,151.1 491.5,151.5 491.8,151.9 492.2,152.3 492.6,152.7 493.0,153.1 493.3,153.5 493.7,153.9 494.1,154.3 494.5,154.6 494.8,155.0 495.2,155.3 495.6,155.7 496.0,156.0 496.3,156.4 496.7,156.7 497.1,157.1 497.5,157.4 497.8,157.7 498.2,158.0 498.6,158.3 498.9,158.6 499.3,159.0 499.7,159.3 500.1,159.5 500.4,159.8 500.8,160.1 501.2,160.4 501.6,160.7 501.9,161.0 502.3,161.2 502.7,161.5 503.1,161.8 503.4,162.0 503.8,162.3 504.2,162.6 504.6,162.8 504.9,163.1 505.3,163.3 505.7,163.6 506.1,163.8 506.4,164.0 506.8,164.3 507.2,164.5 507.5,164.7 507.9,165.0 508.3,165.2 508.7,165.4 509.0,165.6 509.4,165.8 509.8,166.1 510.2,166.3 510.5,166.5 510.9,166.7 511.3,166.9 511.7,167.1 512.0,167.3 512.4,167.5 512.8,167.7 513.2,167.9 513.5,168.1 513.9,168.3 514.3,168.4 514.6,168.6 515.0,168.8 515.4,169.0 515.8,169.2 516.1,169.4 516.5,169.5 516.9,169.7 517.3,169.9 517.6,170.0 518.0,170.2 518.4,170.4 518.8,170.5 519.1,170.7 519.5,170.9 519.9,171.0 520.3,171.2 520.6,171.3 521.0,171.5 521.4,171.7 521.7,171.8 522.1,172.0 522.5,172.1 522.9,172.3 523.2,172.4 523.6,172.5 524.0,172.7 524.4,172.8 524.7,173.0 525.1,173.1 525.5,173.2 525.9,173.4 526.2,173.5 526.6,173.7 527.0,173.8 527.4,173.9 527.7,174.1 528.1,174.2 528.5,174.3 528.8,174.4 529.2,174.6 529.6,174.7 530.0,174.8 530.3,174.9 530.7,175.1 531.1,175.2 531.5,175.3 531.8,175.4 532.2,175.5 532.6,175.7 533.0,175.8 533.3,175.9 533.7,176.0 534.1,176.1 534.5,176.2 534.8,176.3 535.2,176.4 535.6,176.6 536.0,176.7 536.3,176.8 536.7,176.9 537.1,177.0 537.4,177.1 537.8,177.2 538.2,177.3 538.6,177.4 538.9,177.5 539.3,177.6 539.7,177.7 540.1,177.8 540.4,177.9 540.8,178.0 541.2,178.1 541.6,178.2 541.9,178.3 542.3,178.4 542.7,178.5 543.1,178.6 543.4,178.7 543.8,178.8 544.2,178.8 544.5,178.9 544.9,179.0 545.3,179.1 545.7,179.2 546.0,179.3 546.4,179.4 546.8,179.5 547.2,179.5 547.5,179.6 547.9,179.7 548.3,179.8 548.7,179.9 549.0,180.0 549.4,180.1 549.8,180.1 550.2,180.2 550.5,180.3 550.9,180.4 551.3,180.5 551.6,180.5 552.0,180.6 552.4,180.7 552.8,180.8 553.1,180.8 553.5,180.9 553.9,181.0 554.3,181.1 554.6,181.1 555.0,181.2 555.4,181.3 555.8,181.4 556.1,181.4 556.5,181.5 556.9,181.6 557.3,181.7 557.6,181.7 558.0,181.8 558.4,181.9 558.7,181.9 559.1,182.0 559.5,182.1 559.9,182.1 560.2,182.2 560.6,182.3 561.0,182.3 561.4,182.4 561.7,182.5 562.1,182.5 562.5,182.6 562.9,182.7 563.2,182.7 563.6,182.8 564.0,182.9 564.4,182.9 564.7,183.0 565.1,183.0 565.5,183.1 565.9,183.2 566.2,183.2 566.6,183.3 567.0,183.3 567.3,183.4 567.7,183.5 568.1,183.5 568.5,183.6 568.8,183.6 569.2,183.7 569.6,183.8 570.0,183.8 570.3,183.9 570.7,183.9 571.1,184.0 571.5,184.0 571.8,184.1 572.2,184.2 572.6,184.2 573.0,184.3 573.3,184.3 573.7,184.4 574.1,184.4 574.4,184.5 574.8,184.5 575.2,184.6 575.6,184.6 575.9,184.7 576.3,184.7 576.7,184.8 577.1,184.8 577.4,184.9 577.8,184.9 578.2,185.0 578.6,185.0 578.9,185.1 579.3,185.1 579.7,185.2 580.1,185.2 580.4,185.3 580.8,185.3 581.2,185.4 581.5,185.4 581.9,185.5 582.3,185.5 582.7,185.6 583.0,185.6 583.4,185.7 583.8,185.7 584.2,185.8 584.5,185.8 584.9,185.9 585.3,185.9 585.7,186.0 586.0,186.0 586.4,186.0 586.8,186.1 587.2,186.1 587.5,186.2 587.9,186.2 588.3,186.3 588.6,186.3 589.0,186.3 589.4,186.4 589.8,186.4 590.1,186.5 590.5,186.5 590.9,186.6 591.3,186.6 591.6,186.6 592.0,186.7 592.4,186.7 592.8,186.8 593.1,186.8 593.5,186.8 593.9,186.9 594.3,186.9 594.6,187.0 595.0,187.0 595.4,187.0 595.8,187.1 596.1,187.1 596.5,187.2 596.9,187.2 597.2,187.2 597.6,187.3 598.0,187.3 598.4,187.4 598.7,187.4 599.1,187.4 599.5,187.5 599.9,187.5 600.2,187.5 600.6,187.6 601.0,187.6 601.4,187.7 601.7,187.7 602.1,187.7 602.5,187.8 602.9,187.8 603.2,187.8 603.6,187.9 604.0,187.9 604.3,187.9 604.7,188.0 605.1,188.0 605.5,188.0 605.8,188.1 606.2,188.1 606.6,188.2 607.0,188.2 607.3,188.2 607.7,188.3 608.1,188.3 608.5,188.3 608.8,188.4 609.2,188.4 609.6,188.4 610.0,188.5 610.3,188.5 610.7,188.5 611.1,188.6 611.4,188.6 611.8,188.6 612.2,188.6 612.6,188.7 612.9,188.7 613.3,188.7 613.7,188.8 614.1,188.8 614.4,188.8 614.8,188.9 615.2,188.9 615.6,188.9 615.9,189.0 616.3,189.0 616.7,189.0 617.1,189.1 617.4,189.1 617.8,189.1 618.2,189.1 618.5,189.2 618.9,189.2 619.3,189.2 619.7,189.3 620.0,189.3 620.4,189.3 620.8,189.3 621.2,189.4 621.5,189.4 621.9,189.4 622.3,189.5 622.7,189.5 623.0,189.5 623.4,189.5 623.8,189.6 624.2,189.6 624.5,189.6 624.9,189.7 625.3,189.7 625.6,189.7 626.0,189.7 626.4,189.8 626.8,189.8 627.1,189.8 627.5,189.8 627.9,189.9 628.3,189.9 628.6,189.9 629.0,190.0 629.4,190.0 629.8,190.0 630.1,190.0 630.5,190.1 630.9,190.1 631.3,190.1 631.6,190.1 632.0,190.2 632.4,190.2 632.8,190.2 633.1,190.2 633.5,190.3 633.9,190.3 634.2,190.3 634.6,190.3 635.0,190.4 635.4,190.4 635.7,190.4 636.1,190.4 636.5,190.5 636.9,190.5 637.2,190.5 637.6,190.5 638.0,190.6 638.4,190.6 638.7,190.6 639.1,190.6 639.5,190.7 639.9,190.7 640.2,190.7 640.6,190.7 641.0,190.7 641.3,190.8 641.7,190.8 642.1,190.8 642.5,190.8 642.8,190.9 643.2,190.9 643.6,190.9 644.0,190.9 644.3,191.0 644.7,191.0 645.1,191.0 645.5,191.0 645.8,191.0 646.2,191.1 646.6,191.1 647.0,191.1 647.3,191.1 647.7,191.2 648.1,191.2 648.4,191.2 648.8,191.2 649.2,191.2 649.6,191.3 649.9,191.3 650.3,191.3 650.7,191.3 651.1,191.3 651.4,191.4 651.8,191.4 652.2,191.4 652.6,191.4 652.9,191.4 653.3,191.5 653.7,191.5 654.1,191.5 654.4,191.5 654.8,191.6 655.2,191.6 655.6,191.6 655.9,191.6 656.3,191.6 656.7,191.7 657.0,191.7 657.4,191.7 657.8,191.7 658.2,191.7 658.5,191.8 658.9,191.8 659.3,191.8 659.7,191.8 660.0,191.8 660.4,191.8 660.8,191.9 661.2,191.9 661.5,191.9 661.9,191.9 662.3,191.9 662.7,192.0 663.0,192.0 663.4,192.0 663.8,192.0 664.1,192.0 664.5,192.1 664.9,192.1 665.3,192.1 665.6,192.1 666.0,192.1 666.4,192.1 666.8,192.2 667.1,192.2 667.5,192.2 667.9,192.2 668.3,192.2 668.6,192.3 669.0,192.3 669.4,192.3 669.8,192.3 670.1,192.3 670.5,192.3 670.9,192.4 671.2,192.4 671.6,192.4 672.0,192.4 672.4,192.4 672.7,192.4 673.1,192.5 673.5,192.5 673.9,192.5 674.2,192.5 674.6,192.5 675.0,192.6 675.4,192.6 675.7,192.6 676.1,192.6 676.5,192.6 676.9,192.6 677.2,192.7 677.6,192.7 678.0,192.7 678.3,192.7 678.7,192.7 679.1,192.7 679.5,192.7 679.8,192.8 680.2,192.8 680.6,192.8 681.0,192.8 681.3,192.8 681.7,192.8 682.1,192.9 682.5,192.9 682.8,192.9 683.2,192.9 683.6,192.9 684.0,192.9 684.3,193.0 684.7,193.0 685.1,193.0 685.5,193.0 685.8,193.0 686.2,193.0 686.6,193.0 686.9,193.1 687.3,193.1 687.7,193.1 688.1,193.1 688.4,193.1 688.8,193.1 689.2,193.2 689.6,193.2 689.9,193.2 690.3,193.2 690.7,193.2 691.1,193.2 691.4,193.2 691.8,193.3 692.2,193.3 692.6,193.3 692.9,193.3 693.3,193.3 693.7,193.3 694.0,193.3 694.4,193.4 694.8,193.4 695.2,193.4 695.5,193.4 695.9,193.4 696.3,193.4 696.7,193.4 697.0,193.5 697.4,193.5 697.8,193.5 698.2,193.5 698.5,193.5 698.9,193.5 699.3,193.5 699.7,193.6 700.0,193.6 700.4,193.6 700.8,193.6 701.1,193.6 701.5,193.6 701.9,193.6 702.3,193.7 702.6,193.7 703.0,193.7 703.4,193.7 703.8,193.7 704.1,193.7 704.5,193.7 704.9,193.7 705.3,193.8 705.6,193.8 706.0,193.8 706.4,193.8 706.8,193.8 707.1,193.8 707.5,193.8 707.9,193.9 708.2,193.9 708.6,193.9 709.0,193.9 709.4,193.9 709.7,193.9 710.1,193.9 710.5,193.9 710.9,194.0 711.2,194.0 711.6,194.0 712.0,194.0 712.4,194.0 712.7,194.0 713.1,194.0 713.5,194.0 713.9,194.1 714.2,194.1 714.6,194.1 715.0,194.1 715.3,194.1 715.7,194.1 716.1,194.1 716.5,194.1 716.8,194.2 717.2,194.2 717.6,194.2 718.0,194.2 718.3,194.2 718.7,194.2 719.1,194.2 719.5,194.2 719.8,194.2 720.2,194.3 720.6,194.3 721.0,194.3 721.3,194.3 721.7,194.3 722.1,194.3 722.5,194.3 722.8,194.3 723.2,194.4 723.6,194.4 723.9,194.4 724.3,194.4 724.7,194.4 725.1,194.4 725.4,194.4 725.8,194.4 726.2,194.4 726.6,194.5 726.9,194.5 727.3,194.5 727.7,194.5 728.1,194.5 728.4,194.5 728.8,194.5 729.2,194.5 729.6,194.5 729.9,194.6 730.3,194.6 730.7,194.6 731.0,194.6 731.4,194.6 731.8,194.6 732.2,194.6 732.5,194.6 732.9,194.6 733.3,194.7 733.7,194.7 734.0,194.7 734.4,194.7 734.8,194.7 735.2,194.7 735.5,194.7 735.9,194.7 736.3,194.7 736.7,194.7 737.0,194.8 737.4,194.8 737.8,194.8 738.1,194.8 738.5,194.8 738.9,194.8 739.3,194.8 739.6,194.8 740.0,194.8 740.4,194.9 740.8,194.9 741.1,194.9 741.5,194.9 741.9,194.9 742.3,194.9 742.6,194.9 743.0,194.9 743.4,194.9 743.8,194.9 744.1,195.0 744.5,195.0 744.9,195.0 745.2,195.0 745.6,195.0 746.0,195.0 746.4,195.0 746.7,195.0 747.1,195.0 747.5,195.0 747.9,195.1 748.2,195.1 748.6,195.1 749.0,195.1 749.4,195.1 749.7,195.1 750.1,195.1 750.5,195.1 750.9,195.1 751.2,195.1 751.6,195.1 752.0,195.2 752.4,195.2 752.7,195.2 753.1,195.2 753.5,195.2 753.8,195.2 754.2,195.2 754.6,195.2 755.0,195.2 755.3,195.2 755.7,195.3 756.1,195.3 756.5,195.3 756.8,195.3 757.2,195.3 757.6,195.3 758.0,195.3 758.3,195.3 758.7,195.3 759.1,195.3 759.5,195.3 759.8,195.4 760.2,195.4 760.6,195.4 760.9,195.4 761.3,195.4 761.7,195.4 762.1,195.4 762.4,195.4 762.8,195.4 763.2,195.4 763.6,195.4 763.9,195.4 764.3,195.5 764.7,195.5 765.1,195.5 765.4,195.5 765.8,195.5 766.2,195.5 766.6,195.5 766.9,195.5 767.3,195.5 767.7,195.5 768.0,195.5 768.4,195.6 768.8,195.6 769.2,195.6 769.5,195.6 769.9,195.6 770.3,195.6 770.7,195.6 771.0,195.6 771.4,195.6 771.8,195.6 772.2,195.6 772.5,195.6 772.9,195.7 773.3,195.7 773.7,195.7 774.0,195.7 774.4,195.7 774.8,195.7 775.1,195.7 775.5,195.7 775.9,195.7 776.3,195.7 776.6,195.7 777.0,195.7 777.4,195.8 777.8,195.8 778.1,195.8 778.5,195.8 778.9,195.8 779.3,195.8 779.6,195.8 780.0,195.8 780.4,195.8 780.8,195.8 781.1,195.8 781.5,195.8 781.9,195.8 782.3,195.9 782.6,195.9 783.0,195.9 783.4,195.9 783.7,195.9 784.1,195.9 784.5,195.9 784.9,195.9 785.2,195.9 785.6,195.9 786.0,195.9 786.4,195.9 786.7,195.9 787.1,196.0 787.5,196.0 787.9,196.0 788.2,196.0 788.6,196.0 789.0,196.0 789.4,196.0 789.7,196.0 790.1,196.0 790.5,196.0 790.8,196.0 791.2,196.0 791.6,196.0 792.0,196.1 792.3,196.1 792.7,196.1 793.1,196.1 793.5,196.1 793.8,196.1 794.2,196.1 794.6,196.1 795.0,196.1 795.3,196.1 795.7,196.1 796.1,196.1 796.5,196.1 796.8,196.1 797.2,196.2 797.6,196.2 797.9,196.2 798.3,196.2 798.7,196.2 799.1,196.2 799.4,196.2 799.8,196.2 800.2,196.2 800.6,196.2 800.9,196.2 801.3,196.2 801.7,196.2 802.1,196.2 802.4,196.3 802.8,196.3 803.2,196.3 803.6,196.3 803.9,196.3 804.3,196.3 804.7,196.3 805.0,196.3 805.4,196.3 805.8,196.3 806.2,196.3 806.5,196.3 806.9,196.3 807.3,196.3 807.7,196.4 808.0,196.4 808.4,196.4 808.8,196.4 809.2,196.4 809.5,196.4 809.9,196.4 810.3,196.4 810.7,196.4 811.0,196.4 811.4,196.4 811.8,196.4 812.2,196.4 812.5,196.4 812.9,196.4 813.3,196.5 813.6,196.5 814.0,196.5 814.4,196.5 814.8,196.5 815.1,196.5 815.5,196.5 815.9,196.5 816.3,196.5 816.6,196.5 817.0,196.5 817.4,196.5 817.8,196.5 818.1,196.5 818.5,196.5 818.9,196.5 819.3,196.6 819.6,196.6 820.0,196.6"/>
<circle cx="320.0" cy="222.1" r="6" fill="#0f766e"/><text x="328.0" y="212.1" font-size="17" fill="#0f766e">(-1,0)</text>
<circle cx="382.5" cy="241.2" r="6" fill="#0f766e"/><text x="390.5" y="231.2" font-size="17" fill="#0f766e">(0,-1)</text>
<text x="822" y="212.1" font-size="18">x</text><text x="392.5" y="54" font-size="18">y</text></svg>
```

### FIG-G12-CHI-B05-01

**Ý nghĩa/fallback:** Doanh thu $R(q)=q(20-q)$ là parabol úp trên đoạn $[0,20]$, đánh dấu đỉnh (10,100). Số lượng q và doanh thu dùng đơn vị của mô hình.

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="850" height="430" viewBox="0 0 850 430" role="img" aria-labelledby="title desc">
<title id="title">Doanh thu theo số lượng và điểm tối ưu</title>
<desc id="desc">Hình toán học FIG-G12-CHI-B05-01, các đường và tọa độ được giải thích bằng văn bản ngay bên dưới.</desc>
<rect width="850" height="430" fill="#f8fafc"/>
<line x1="70" y1="349.0" x2="820" y2="349.0" stroke="#334155" stroke-width="2"/>
<line x1="104.1" y1="50" x2="104.1" y2="375" stroke="#334155" stroke-width="2"/>
<line x1="70.00" y1="345.0" x2="70.00" y2="353.0" stroke="#64748b"/>
<line x1="104.09" y1="345.0" x2="104.09" y2="353.0" stroke="#64748b"/>
<line x1="138.18" y1="345.0" x2="138.18" y2="353.0" stroke="#64748b"/>
<line x1="172.27" y1="345.0" x2="172.27" y2="353.0" stroke="#64748b"/>
<line x1="206.36" y1="345.0" x2="206.36" y2="353.0" stroke="#64748b"/>
<line x1="240.45" y1="345.0" x2="240.45" y2="353.0" stroke="#64748b"/>
<line x1="274.55" y1="345.0" x2="274.55" y2="353.0" stroke="#64748b"/>
<line x1="308.64" y1="345.0" x2="308.64" y2="353.0" stroke="#64748b"/>
<line x1="342.73" y1="345.0" x2="342.73" y2="353.0" stroke="#64748b"/>
<line x1="376.82" y1="345.0" x2="376.82" y2="353.0" stroke="#64748b"/>
<line x1="410.91" y1="345.0" x2="410.91" y2="353.0" stroke="#64748b"/>
<line x1="445.00" y1="345.0" x2="445.00" y2="353.0" stroke="#64748b"/>
<line x1="479.09" y1="345.0" x2="479.09" y2="353.0" stroke="#64748b"/>
<line x1="513.18" y1="345.0" x2="513.18" y2="353.0" stroke="#64748b"/>
<line x1="547.27" y1="345.0" x2="547.27" y2="353.0" stroke="#64748b"/>
<line x1="581.36" y1="345.0" x2="581.36" y2="353.0" stroke="#64748b"/>
<line x1="615.45" y1="345.0" x2="615.45" y2="353.0" stroke="#64748b"/>
<line x1="649.55" y1="345.0" x2="649.55" y2="353.0" stroke="#64748b"/>
<line x1="683.64" y1="345.0" x2="683.64" y2="353.0" stroke="#64748b"/>
<line x1="717.73" y1="345.0" x2="717.73" y2="353.0" stroke="#64748b"/>
<line x1="751.82" y1="345.0" x2="751.82" y2="353.0" stroke="#64748b"/>
<line x1="785.91" y1="345.0" x2="785.91" y2="353.0" stroke="#64748b"/>
<line x1="820.00" y1="345.0" x2="820.00" y2="353.0" stroke="#64748b"/>
<polyline fill="none" stroke="#2563eb" stroke-width="3" points="104.1,349.0 104.8,348.0 105.5,346.9 106.1,345.9 106.8,344.9 107.5,343.8 108.2,342.8 108.9,341.8 109.5,340.7 110.2,339.7 110.9,338.7 111.6,337.7 112.3,336.7 113.0,335.7 113.6,334.6 114.3,333.6 115.0,332.6 115.7,331.6 116.4,330.6 117.0,329.6 117.7,328.6 118.4,327.6 119.1,326.6 119.8,325.6 120.5,324.6 121.1,323.6 121.8,322.7 122.5,321.7 123.2,320.7 123.9,319.7 124.5,318.7 125.2,317.8 125.9,316.8 126.6,315.8 127.3,314.8 128.0,313.9 128.6,312.9 129.3,311.9 130.0,311.0 130.7,310.0 131.4,309.1 132.0,308.1 132.7,307.2 133.4,306.2 134.1,305.3 134.8,304.3 135.5,303.4 136.1,302.4 136.8,301.5 137.5,300.5 138.2,299.6 138.9,298.7 139.5,297.7 140.2,296.8 140.9,295.9 141.6,294.9 142.3,294.0 143.0,293.1 143.6,292.2 144.3,291.3 145.0,290.3 145.7,289.4 146.4,288.5 147.0,287.6 147.7,286.7 148.4,285.8 149.1,284.9 149.8,284.0 150.5,283.1 151.1,282.2 151.8,281.3 152.5,280.4 153.2,279.5 153.9,278.6 154.5,277.7 155.2,276.9 155.9,276.0 156.6,275.1 157.3,274.2 158.0,273.3 158.6,272.5 159.3,271.6 160.0,270.7 160.7,269.8 161.4,269.0 162.0,268.1 162.7,267.3 163.4,266.4 164.1,265.5 164.8,264.7 165.5,263.8 166.1,263.0 166.8,262.1 167.5,261.3 168.2,260.4 168.9,259.6 169.5,258.7 170.2,257.9 170.9,257.1 171.6,256.2 172.3,255.4 173.0,254.6 173.6,253.7 174.3,252.9 175.0,252.1 175.7,251.3 176.4,250.4 177.0,249.6 177.7,248.8 178.4,248.0 179.1,247.2 179.8,246.4 180.5,245.6 181.1,244.8 181.8,244.0 182.5,243.2 183.2,242.4 183.9,241.6 184.5,240.8 185.2,240.0 185.9,239.2 186.6,238.4 187.3,237.6 188.0,236.8 188.6,236.0 189.3,235.2 190.0,234.5 190.7,233.7 191.4,232.9 192.0,232.1 192.7,231.4 193.4,230.6 194.1,229.8 194.8,229.1 195.5,228.3 196.1,227.6 196.8,226.8 197.5,226.0 198.2,225.3 198.9,224.5 199.5,223.8 200.2,223.0 200.9,222.3 201.6,221.5 202.3,220.8 203.0,220.1 203.6,219.3 204.3,218.6 205.0,217.9 205.7,217.1 206.4,216.4 207.0,215.7 207.7,214.9 208.4,214.2 209.1,213.5 209.8,212.8 210.5,212.1 211.1,211.4 211.8,210.6 212.5,209.9 213.2,209.2 213.9,208.5 214.5,207.8 215.2,207.1 215.9,206.4 216.6,205.7 217.3,205.0 218.0,204.3 218.6,203.6 219.3,202.9 220.0,202.3 220.7,201.6 221.4,200.9 222.0,200.2 222.7,199.5 223.4,198.8 224.1,198.2 224.8,197.5 225.5,196.8 226.1,196.2 226.8,195.5 227.5,194.8 228.2,194.2 228.9,193.5 229.5,192.9 230.2,192.2 230.9,191.5 231.6,190.9 232.3,190.2 233.0,189.6 233.6,188.9 234.3,188.3 235.0,187.7 235.7,187.0 236.4,186.4 237.0,185.7 237.7,185.1 238.4,184.5 239.1,183.9 239.8,183.2 240.5,182.6 241.1,182.0 241.8,181.4 242.5,180.7 243.2,180.1 243.9,179.5 244.5,178.9 245.2,178.3 245.9,177.7 246.6,177.1 247.3,176.5 248.0,175.9 248.6,175.3 249.3,174.7 250.0,174.1 250.7,173.5 251.4,172.9 252.0,172.3 252.7,171.7 253.4,171.1 254.1,170.5 254.8,170.0 255.5,169.4 256.1,168.8 256.8,168.2 257.5,167.7 258.2,167.1 258.9,166.5 259.5,165.9 260.2,165.4 260.9,164.8 261.6,164.3 262.3,163.7 263.0,163.1 263.6,162.6 264.3,162.0 265.0,161.5 265.7,160.9 266.4,160.4 267.0,159.8 267.7,159.3 268.4,158.8 269.1,158.2 269.8,157.7 270.5,157.2 271.1,156.6 271.8,156.1 272.5,155.6 273.2,155.0 273.9,154.5 274.5,154.0 275.2,153.5 275.9,153.0 276.6,152.4 277.3,151.9 278.0,151.4 278.6,150.9 279.3,150.4 280.0,149.9 280.7,149.4 281.4,148.9 282.0,148.4 282.7,147.9 283.4,147.4 284.1,146.9 284.8,146.4 285.5,145.9 286.1,145.5 286.8,145.0 287.5,144.5 288.2,144.0 288.9,143.5 289.5,143.1 290.2,142.6 290.9,142.1 291.6,141.7 292.3,141.2 293.0,140.7 293.6,140.3 294.3,139.8 295.0,139.3 295.7,138.9 296.4,138.4 297.0,138.0 297.7,137.5 298.4,137.1 299.1,136.6 299.8,136.2 300.5,135.7 301.1,135.3 301.8,134.9 302.5,134.4 303.2,134.0 303.9,133.6 304.5,133.1 305.2,132.7 305.9,132.3 306.6,131.9 307.3,131.4 308.0,131.0 308.6,130.6 309.3,130.2 310.0,129.8 310.7,129.4 311.4,129.0 312.0,128.5 312.7,128.1 313.4,127.7 314.1,127.3 314.8,126.9 315.5,126.5 316.1,126.1 316.8,125.8 317.5,125.4 318.2,125.0 318.9,124.6 319.5,124.2 320.2,123.8 320.9,123.4 321.6,123.1 322.3,122.7 323.0,122.3 323.6,122.0 324.3,121.6 325.0,121.2 325.7,120.8 326.4,120.5 327.0,120.1 327.7,119.8 328.4,119.4 329.1,119.1 329.8,118.7 330.5,118.4 331.1,118.0 331.8,117.7 332.5,117.3 333.2,117.0 333.9,116.6 334.5,116.3 335.2,116.0 335.9,115.6 336.6,115.3 337.3,115.0 338.0,114.6 338.6,114.3 339.3,114.0 340.0,113.7 340.7,113.3 341.4,113.0 342.0,112.7 342.7,112.4 343.4,112.1 344.1,111.8 344.8,111.5 345.5,111.2 346.1,110.9 346.8,110.6 347.5,110.3 348.2,110.0 348.9,109.7 349.5,109.4 350.2,109.1 350.9,108.8 351.6,108.5 352.3,108.2 353.0,108.0 353.6,107.7 354.3,107.4 355.0,107.1 355.7,106.8 356.4,106.6 357.0,106.3 357.7,106.0 358.4,105.8 359.1,105.5 359.8,105.2 360.5,105.0 361.1,104.7 361.8,104.5 362.5,104.2 363.2,104.0 363.9,103.7 364.5,103.5 365.2,103.2 365.9,103.0 366.6,102.8 367.3,102.5 368.0,102.3 368.6,102.0 369.3,101.8 370.0,101.6 370.7,101.4 371.4,101.1 372.0,100.9 372.7,100.7 373.4,100.5 374.1,100.2 374.8,100.0 375.5,99.8 376.1,99.6 376.8,99.4 377.5,99.2 378.2,99.0 378.9,98.8 379.5,98.6 380.2,98.4 380.9,98.2 381.6,98.0 382.3,97.8 383.0,97.6 383.6,97.4 384.3,97.2 385.0,97.1 385.7,96.9 386.4,96.7 387.0,96.5 387.7,96.3 388.4,96.2 389.1,96.0 389.8,95.8 390.5,95.7 391.1,95.5 391.8,95.3 392.5,95.2 393.2,95.0 393.9,94.9 394.5,94.7 395.2,94.5 395.9,94.4 396.6,94.2 397.3,94.1 398.0,94.0 398.6,93.8 399.3,93.7 400.0,93.5 400.7,93.4 401.4,93.3 402.0,93.1 402.7,93.0 403.4,92.9 404.1,92.7 404.8,92.6 405.5,92.5 406.1,92.4 406.8,92.3 407.5,92.1 408.2,92.0 408.9,91.9 409.5,91.8 410.2,91.7 410.9,91.6 411.6,91.5 412.3,91.4 413.0,91.3 413.6,91.2 414.3,91.1 415.0,91.0 415.7,90.9 416.4,90.8 417.0,90.7 417.7,90.7 418.4,90.6 419.1,90.5 419.8,90.4 420.5,90.3 421.1,90.3 421.8,90.2 422.5,90.1 423.2,90.1 423.9,90.0 424.5,89.9 425.2,89.9 425.9,89.8 426.6,89.8 427.3,89.7 428.0,89.6 428.6,89.6 429.3,89.6 430.0,89.5 430.7,89.5 431.4,89.4 432.0,89.4 432.7,89.3 433.4,89.3 434.1,89.3 434.8,89.2 435.5,89.2 436.1,89.2 436.8,89.1 437.5,89.1 438.2,89.1 438.9,89.1 439.5,89.1 440.2,89.1 440.9,89.0 441.6,89.0 442.3,89.0 443.0,89.0 443.6,89.0 444.3,89.0 445.0,89.0 445.7,89.0 446.4,89.0 447.0,89.0 447.7,89.0 448.4,89.0 449.1,89.0 449.8,89.1 450.5,89.1 451.1,89.1 451.8,89.1 452.5,89.1 453.2,89.1 453.9,89.2 454.5,89.2 455.2,89.2 455.9,89.3 456.6,89.3 457.3,89.3 458.0,89.4 458.6,89.4 459.3,89.5 460.0,89.5 460.7,89.6 461.4,89.6 462.0,89.6 462.7,89.7 463.4,89.8 464.1,89.8 464.8,89.9 465.5,89.9 466.1,90.0 466.8,90.1 467.5,90.1 468.2,90.2 468.9,90.3 469.5,90.3 470.2,90.4 470.9,90.5 471.6,90.6 472.3,90.7 473.0,90.7 473.6,90.8 474.3,90.9 475.0,91.0 475.7,91.1 476.4,91.2 477.0,91.3 477.7,91.4 478.4,91.5 479.1,91.6 479.8,91.7 480.5,91.8 481.1,91.9 481.8,92.0 482.5,92.1 483.2,92.3 483.9,92.4 484.5,92.5 485.2,92.6 485.9,92.7 486.6,92.9 487.3,93.0 488.0,93.1 488.6,93.3 489.3,93.4 490.0,93.5 490.7,93.7 491.4,93.8 492.0,94.0 492.7,94.1 493.4,94.2 494.1,94.4 494.8,94.5 495.5,94.7 496.1,94.9 496.8,95.0 497.5,95.2 498.2,95.3 498.9,95.5 499.5,95.7 500.2,95.8 500.9,96.0 501.6,96.2 502.3,96.3 503.0,96.5 503.6,96.7 504.3,96.9 505.0,97.1 505.7,97.2 506.4,97.4 507.0,97.6 507.7,97.8 508.4,98.0 509.1,98.2 509.8,98.4 510.5,98.6 511.1,98.8 511.8,99.0 512.5,99.2 513.2,99.4 513.9,99.6 514.5,99.8 515.2,100.0 515.9,100.2 516.6,100.5 517.3,100.7 518.0,100.9 518.6,101.1 519.3,101.4 520.0,101.6 520.7,101.8 521.4,102.0 522.0,102.3 522.7,102.5 523.4,102.8 524.1,103.0 524.8,103.2 525.5,103.5 526.1,103.7 526.8,104.0 527.5,104.2 528.2,104.5 528.9,104.7 529.5,105.0 530.2,105.2 530.9,105.5 531.6,105.8 532.3,106.0 533.0,106.3 533.6,106.6 534.3,106.8 535.0,107.1 535.7,107.4 536.4,107.7 537.0,108.0 537.7,108.2 538.4,108.5 539.1,108.8 539.8,109.1 540.5,109.4 541.1,109.7 541.8,110.0 542.5,110.3 543.2,110.6 543.9,110.9 544.5,111.2 545.2,111.5 545.9,111.8 546.6,112.1 547.3,112.4 548.0,112.7 548.6,113.0 549.3,113.3 550.0,113.7 550.7,114.0 551.4,114.3 552.0,114.6 552.7,115.0 553.4,115.3 554.1,115.6 554.8,116.0 555.5,116.3 556.1,116.6 556.8,117.0 557.5,117.3 558.2,117.7 558.9,118.0 559.5,118.4 560.2,118.7 560.9,119.1 561.6,119.4 562.3,119.8 563.0,120.1 563.6,120.5 564.3,120.8 565.0,121.2 565.7,121.6 566.4,122.0 567.0,122.3 567.7,122.7 568.4,123.1 569.1,123.4 569.8,123.8 570.5,124.2 571.1,124.6 571.8,125.0 572.5,125.4 573.2,125.8 573.9,126.1 574.5,126.5 575.2,126.9 575.9,127.3 576.6,127.7 577.3,128.1 578.0,128.5 578.6,129.0 579.3,129.4 580.0,129.8 580.7,130.2 581.4,130.6 582.0,131.0 582.7,131.4 583.4,131.9 584.1,132.3 584.8,132.7 585.5,133.1 586.1,133.6 586.8,134.0 587.5,134.4 588.2,134.9 588.9,135.3 589.5,135.7 590.2,136.2 590.9,136.6 591.6,137.1 592.3,137.5 593.0,138.0 593.6,138.4 594.3,138.9 595.0,139.3 595.7,139.8 596.4,140.3 597.0,140.7 597.7,141.2 598.4,141.7 599.1,142.1 599.8,142.6 600.5,143.1 601.1,143.5 601.8,144.0 602.5,144.5 603.2,145.0 603.9,145.5 604.5,145.9 605.2,146.4 605.9,146.9 606.6,147.4 607.3,147.9 608.0,148.4 608.6,148.9 609.3,149.4 610.0,149.9 610.7,150.4 611.4,150.9 612.0,151.4 612.7,151.9 613.4,152.4 614.1,153.0 614.8,153.5 615.5,154.0 616.1,154.5 616.8,155.0 617.5,155.6 618.2,156.1 618.9,156.6 619.5,157.2 620.2,157.7 620.9,158.2 621.6,158.8 622.3,159.3 623.0,159.8 623.6,160.4 624.3,160.9 625.0,161.5 625.7,162.0 626.4,162.6 627.0,163.1 627.7,163.7 628.4,164.3 629.1,164.8 629.8,165.4 630.5,165.9 631.1,166.5 631.8,167.1 632.5,167.7 633.2,168.2 633.9,168.8 634.5,169.4 635.2,170.0 635.9,170.5 636.6,171.1 637.3,171.7 638.0,172.3 638.6,172.9 639.3,173.5 640.0,174.1 640.7,174.7 641.4,175.3 642.0,175.9 642.7,176.5 643.4,177.1 644.1,177.7 644.8,178.3 645.5,178.9 646.1,179.5 646.8,180.1 647.5,180.7 648.2,181.4 648.9,182.0 649.5,182.6 650.2,183.2 650.9,183.9 651.6,184.5 652.3,185.1 653.0,185.7 653.6,186.4 654.3,187.0 655.0,187.7 655.7,188.3 656.4,188.9 657.0,189.6 657.7,190.2 658.4,190.9 659.1,191.5 659.8,192.2 660.5,192.9 661.1,193.5 661.8,194.2 662.5,194.8 663.2,195.5 663.9,196.2 664.5,196.8 665.2,197.5 665.9,198.2 666.6,198.8 667.3,199.5 668.0,200.2 668.6,200.9 669.3,201.6 670.0,202.3 670.7,202.9 671.4,203.6 672.0,204.3 672.7,205.0 673.4,205.7 674.1,206.4 674.8,207.1 675.5,207.8 676.1,208.5 676.8,209.2 677.5,209.9 678.2,210.6 678.9,211.4 679.5,212.1 680.2,212.8 680.9,213.5 681.6,214.2 682.3,214.9 683.0,215.7 683.6,216.4 684.3,217.1 685.0,217.9 685.7,218.6 686.4,219.3 687.0,220.1 687.7,220.8 688.4,221.5 689.1,222.3 689.8,223.0 690.5,223.8 691.1,224.5 691.8,225.3 692.5,226.0 693.2,226.8 693.9,227.6 694.5,228.3 695.2,229.1 695.9,229.8 696.6,230.6 697.3,231.4 698.0,232.1 698.6,232.9 699.3,233.7 700.0,234.5 700.7,235.2 701.4,236.0 702.0,236.8 702.7,237.6 703.4,238.4 704.1,239.2 704.8,240.0 705.5,240.8 706.1,241.6 706.8,242.4 707.5,243.2 708.2,244.0 708.9,244.8 709.5,245.6 710.2,246.4 710.9,247.2 711.6,248.0 712.3,248.8 713.0,249.6 713.6,250.4 714.3,251.3 715.0,252.1 715.7,252.9 716.4,253.7 717.0,254.6 717.7,255.4 718.4,256.2 719.1,257.1 719.8,257.9 720.5,258.7 721.1,259.6 721.8,260.4 722.5,261.3 723.2,262.1 723.9,263.0 724.5,263.8 725.2,264.7 725.9,265.5 726.6,266.4 727.3,267.3 728.0,268.1 728.6,269.0 729.3,269.8 730.0,270.7 730.7,271.6 731.4,272.5 732.0,273.3 732.7,274.2 733.4,275.1 734.1,276.0 734.8,276.9 735.5,277.7 736.1,278.6 736.8,279.5 737.5,280.4 738.2,281.3 738.9,282.2 739.5,283.1 740.2,284.0 740.9,284.9 741.6,285.8 742.3,286.7 743.0,287.6 743.6,288.5 744.3,289.4 745.0,290.3 745.7,291.3 746.4,292.2 747.0,293.1 747.7,294.0 748.4,294.9 749.1,295.9 749.8,296.8 750.5,297.7 751.1,298.7 751.8,299.6 752.5,300.5 753.2,301.5 753.9,302.4 754.5,303.4 755.2,304.3 755.9,305.3 756.6,306.2 757.3,307.2 758.0,308.1 758.6,309.1 759.3,310.0 760.0,311.0 760.7,311.9 761.4,312.9 762.0,313.9 762.7,314.8 763.4,315.8 764.1,316.8 764.8,317.8 765.5,318.7 766.1,319.7 766.8,320.7 767.5,321.7 768.2,322.7 768.9,323.6 769.5,324.6 770.2,325.6 770.9,326.6 771.6,327.6 772.3,328.6 773.0,329.6 773.6,330.6 774.3,331.6 775.0,332.6 775.7,333.6 776.4,334.6 777.0,335.7 777.7,336.7 778.4,337.7 779.1,338.7 779.8,339.7 780.5,340.7 781.1,341.8 781.8,342.8 782.5,343.8 783.2,344.9 783.9,345.9 784.5,346.9 785.2,348.0 785.9,349.0"/>
<text x="78" y="90" font-size="17" fill="#2563eb">R(q)=20q-q²</text>
<circle cx="445.0" cy="89.0" r="6" fill="#0f766e"/><text x="453.0" y="79.0" font-size="17" fill="#0f766e">max tại 10</text>
<text x="822" y="339.0" font-size="18">q</text><text x="114.1" y="54" font-size="18">y</text></svg>
```

## G. D6 — Hỗ trợ khắc phục lỗ hổng (5 bước, canonical return links)

### HELP-G12-CHI-01 | skill_id=`G12-B01-MONOTONIC_SIGN` | return_item=`THPT-G12-CHI-C01`

1. **Nhận diện:** Lẫn chiều tăng với dấu f.
2. **Chẩn đoán:** Chỉ ra bước điều kiện/phép suy luận nào sai, không tiết lộ trước bài kiểm tra độc lập.
3. **Giải thích lại bản chất:** Hãy tính f' và xét dấu trên từng khoảng của miền.
4. **Tự làm kiểm thử nhỏ:** Đặt thêm một trường hợp tham số khác; học sinh tự nói vì sao chọn phương pháp.
5. **Quay lại luyện tập:** `THPT-G12-CHI-C01` sau khi hoàn thành chu kỳ HELP; không ghi Mastery từ việc xem thẻ.

### HELP-G12-CHI-02 | skill_id=`G12-B01-STATIONARY_NOT_EXTREMUM` | return_item=`THPT-G12-CHI-C02`

1. **Nhận diện:** f'=0 không đủ kết luận cực trị.
2. **Chẩn đoán:** Chỉ ra bước điều kiện/phép suy luận nào sai, không tiết lộ trước bài kiểm tra độc lập.
3. **Giải thích lại bản chất:** Tìm dấu đạo hàm cả hai phía thay vì chỉ giải f'=0.
4. **Tự làm kiểm thử nhỏ:** Đặt thêm một trường hợp tham số khác; học sinh tự nói vì sao chọn phương pháp.
5. **Quay lại luyện tập:** `THPT-G12-CHI-C02` sau khi hoàn thành chu kỳ HELP; không ghi Mastery từ việc xem thẻ.

### HELP-G12-CHI-03 | skill_id=`G12-B01-DOMAIN_INTERVALS` | return_item=`THPT-G12-CHI-C04`

1. **Nhận diện:** Ghép khoảng qua điểm không thuộc miền.
2. **Chẩn đoán:** Chỉ ra bước điều kiện/phép suy luận nào sai, không tiết lộ trước bài kiểm tra độc lập.
3. **Giải thích lại bản chất:** Viết riêng từng thành phần liên thông của D.
4. **Tự làm kiểm thử nhỏ:** Đặt thêm một trường hợp tham số khác; học sinh tự nói vì sao chọn phương pháp.
5. **Quay lại luyện tập:** `THPT-G12-CHI-C04` sau khi hoàn thành chu kỳ HELP; không ghi Mastery từ việc xem thẻ.

### HELP-G12-CHI-04 | skill_id=`G12-B02-CLOSED_EXTREMA` | return_item=`THPT-G12-CHI-C07`

1. **Nhận diện:** Quên so sánh đầu mút.
2. **Chẩn đoán:** Chỉ ra bước điều kiện/phép suy luận nào sai, không tiết lộ trước bài kiểm tra độc lập.
3. **Giải thích lại bản chất:** Lập bảng mọi ứng viên và so sánh giá trị.
4. **Tự làm kiểm thử nhỏ:** Đặt thêm một trường hợp tham số khác; học sinh tự nói vì sao chọn phương pháp.
5. **Quay lại luyện tập:** `THPT-G12-CHI-C07` sau khi hoàn thành chu kỳ HELP; không ghi Mastery từ việc xem thẻ.

### HELP-G12-CHI-05 | skill_id=`G12-B02-OPEN_INTERVAL` | return_item=`THPT-G12-CHI-C09`

1. **Nhận diện:** Biên không đạt vẫn ghi GTLN.
2. **Chẩn đoán:** Chỉ ra bước điều kiện/phép suy luận nào sai, không tiết lộ trước bài kiểm tra độc lập.
3. **Giải thích lại bản chất:** Kiểm tra có x thuộc miền cho giá trị đó hay không.
4. **Tự làm kiểm thử nhỏ:** Đặt thêm một trường hợp tham số khác; học sinh tự nói vì sao chọn phương pháp.
5. **Quay lại luyện tập:** `THPT-G12-CHI-C09` sau khi hoàn thành chu kỳ HELP; không ghi Mastery từ việc xem thẻ.

### HELP-G12-CHI-06 | skill_id=`G12-B03-HOLE_NOT_ASY` | return_item=`THPT-G12-CHI-C15`

1. **Nhận diện:** Rút gọn xong vẫn kết luận TCĐ.
2. **Chẩn đoán:** Chỉ ra bước điều kiện/phép suy luận nào sai, không tiết lộ trước bài kiểm tra độc lập.
3. **Giải thích lại bản chất:** Giới hạn tại điểm loại có hữu hạn không?
4. **Tự làm kiểm thử nhỏ:** Đặt thêm một trường hợp tham số khác; học sinh tự nói vì sao chọn phương pháp.
5. **Quay lại luyện tập:** `THPT-G12-CHI-C15` sau khi hoàn thành chu kỳ HELP; không ghi Mastery từ việc xem thẻ.

### HELP-G12-CHI-07 | skill_id=`G12-B03-SLANT_ASY` | return_item=`THPT-G12-CHI-C14`

1. **Nhận diện:** Sai hệ số đường xiên.
2. **Chẩn đoán:** Chỉ ra bước điều kiện/phép suy luận nào sai, không tiết lộ trước bài kiểm tra độc lập.
3. **Giải thích lại bản chất:** Chia đa thức và kiểm hiệu f−(mx+n)→0.
4. **Tự làm kiểm thử nhỏ:** Đặt thêm một trường hợp tham số khác; học sinh tự nói vì sao chọn phương pháp.
5. **Quay lại luyện tập:** `THPT-G12-CHI-C14` sau khi hoàn thành chu kỳ HELP; không ghi Mastery từ việc xem thẻ.

### HELP-G12-CHI-08 | skill_id=`G12-B04-RATIONAL_SKETCH` | return_item=`THPT-G12-CHI-C18`

1. **Nhận diện:** Nối đồ thị qua tiệm cận đứng.
2. **Chẩn đoán:** Chỉ ra bước điều kiện/phép suy luận nào sai, không tiết lộ trước bài kiểm tra độc lập.
3. **Giải thích lại bản chất:** Giữ hai nhánh riêng, thể hiện giới hạn một phía.
4. **Tự làm kiểm thử nhỏ:** Đặt thêm một trường hợp tham số khác; học sinh tự nói vì sao chọn phương pháp.
5. **Quay lại luyện tập:** `THPT-G12-CHI-C18` sau khi hoàn thành chu kỳ HELP; không ghi Mastery từ việc xem thẻ.

### HELP-G12-CHI-09 | skill_id=`G12-B04-QUADRATIC_RATIONAL` | return_item=`THPT-G12-CHI-C19`

1. **Nhận diện:** Quên giới hạn khi khảo sát.
2. **Chẩn đoán:** Chỉ ra bước điều kiện/phép suy luận nào sai, không tiết lộ trước bài kiểm tra độc lập.
3. **Giải thích lại bản chất:** Tính miền, TCĐ, TC xiên và dấu f' trước khi vẽ.
4. **Tự làm kiểm thử nhỏ:** Đặt thêm một trường hợp tham số khác; học sinh tự nói vì sao chọn phương pháp.
5. **Quay lại luyện tập:** `THPT-G12-CHI-C19` sau khi hoàn thành chu kỳ HELP; không ghi Mastery từ việc xem thẻ.

### HELP-G12-CHI-10 | skill_id=`G12-B05-OPEN_BOX` | return_item=`THPT-G12-CHI-C24`

1. **Nhận diện:** Tối ưu tại kích thước không hợp lệ.
2. **Chẩn đoán:** Chỉ ra bước điều kiện/phép suy luận nào sai, không tiết lộ trước bài kiểm tra độc lập.
3. **Giải thích lại bản chất:** Viết 0<x<L/2 rồi mới giải V'=0.
4. **Tự làm kiểm thử nhỏ:** Đặt thêm một trường hợp tham số khác; học sinh tự nói vì sao chọn phương pháp.
5. **Quay lại luyện tập:** `THPT-G12-CHI-C24` sau khi hoàn thành chu kỳ HELP; không ghi Mastery từ việc xem thẻ.

### HELP-G12-CHI-11 | skill_id=`G12-B05-REVENUE_MODEL` | return_item=`THPT-G12-CHI-C23`

1. **Nhận diện:** Lẫn giá bán và doanh thu.
2. **Chẩn đoán:** Chỉ ra bước điều kiện/phép suy luận nào sai, không tiết lộ trước bài kiểm tra độc lập.
3. **Giải thích lại bản chất:** Xác định R=qp(q) và đơn vị.
4. **Tự làm kiểm thử nhỏ:** Đặt thêm một trường hợp tham số khác; học sinh tự nói vì sao chọn phương pháp.
5. **Quay lại luyện tập:** `THPT-G12-CHI-C23` sau khi hoàn thành chu kỳ HELP; không ghi Mastery từ việc xem thẻ.

### HELP-G12-CHI-12 | skill_id=`G12-B05-MOTION_DIRECTION` | return_item=`THPT-G12-CHI-C26`

1. **Nhận diện:** Đổi dấu gia tốc thành dấu tốc độ.
2. **Chẩn đoán:** Chỉ ra bước điều kiện/phép suy luận nào sai, không tiết lộ trước bài kiểm tra độc lập.
3. **Giải thích lại bản chất:** Chiều theo v, nhanh/chậm theo v·a khi v≠0.
4. **Tự làm kiểm thử nhỏ:** Đặt thêm một trường hợp tham số khác; học sinh tự nói vì sao chọn phương pháp.
5. **Quay lại luyện tập:** `THPT-G12-CHI-C26` sau khi hoàn thành chu kỳ HELP; không ghi Mastery từ việc xem thẻ.

## H. Checklist học thuật đề nghị NotebookLM

- **D1:** Theo SGK/SBT S1 xác nhận phạm vi 5 bài, định nghĩa đúng và điều kiện chính xác (đồng biến, cực trị, GTLN/GTNN, tiệm cận ngang/đứng/xiên, các họ hàm và ràng buộc mô hình).
- **D2:** 20 worked examples phải giải thích *vì sao* chọn phương pháp, không thay bằng áp dụng máy móc.
- **D3/D4:** Kiểm tra từng đáp án, phép so sánh cực trị, bảng dấu, miền xác định, tiệm cận, giao trục, Written rubric. Xem liệu 56 D3 + 10 Written có đủ chiều sâu SGK/SBT chứ không lấy số lượng làm chứng cứ.
- **D5:** Kiểm tra đúng vị trí các điểm/tiệm cận, hình SVG và fallback, đối chiếu trục và nhãn.
- **D6:** 12 HELP đúng bẫy thực, đủ 5 bước, return ID tồn tại và không tạo mastery giả.
- **RD1:** Đối chiếu riêng file kín, 28 outcome ↔ 28 RD1; kiểm toán độc lập cấu trúc với 66 public và SBT, lời giải và rubric. PRIVATE tuyệt đối không được dùng làm bằng chứng kiến thức đã dạy ở D1/D2.
- **PED1–PED6:** Chỉ dùng D1/D2/D3 công khai cho self-learning verdict. Nếu một outcome thiếu kiến thức nền/giải thích, đề xuất DELTA_C đúng phạm vi.
- **Machine fields cần trả:** PACKET_ID, ACTUAL_PUBLIC_SOURCE, ACTUAL_PRIVATE_SOURCE, SOURCE_RECEIPT_SGK/SBT, ACADEMIC_CHAPTER_I_G12, PEDAGOGICAL_SELF_LEARNING_READY, RD0_OUTCOMES, D2_WORKED, D3_ITEMS, D4_WRITTEN, SVG_D5, HELP_D6, PRIVATE_RD1, ID_RECONCILIATION, EXPOSURE_STRUCTURAL_VERDICT, P0/P1/P2, MINIMAL_DELTA, RELEASE_AUTHORIZATION=NO, MASTERY_ACTIVATION=NO.