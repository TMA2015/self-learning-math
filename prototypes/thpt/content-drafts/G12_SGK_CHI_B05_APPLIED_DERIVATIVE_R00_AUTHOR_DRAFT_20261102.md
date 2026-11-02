# Toán 12 KNTT — Chương I, Bài 5: Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn — AUTHOR R00

LESSON_ID: G12-B05
SGK_S1: Tập Một trang in 33–41 = PDF1 trang 35–43
SBT_S1: Tập Một trang in 27–32 = PDF1 trang 25–30
SOURCE_PDF_SHA256_SGK: faeb554bea9cf81189c5e790b1b1edb42f50b3648694acc80dc99682ada3f1fd
SOURCE_PDF_SHA256_SBT: db9d07a2fbe55cda3b4b50fb13d1767e45a7552f668b726241c59febac69c0ca
STANDARD_ID: SLM-THPT-QUALITY-ONE
ACADEMIC_VERDICT: NOT_REVIEWED
PEDAGOGICAL_VERDICT: NOT_REVIEWED
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY

## OUTCOME_IDS
- G12-B05-RATE_INTERPRETATION
- G12-B05-MOTION_SPEED_ACCELERATION
- G12-B05-MARGINAL_COST
- G12-B05-MODEL_VARIABLE_DOMAIN
- G12-B05-OPTIMIZATION_DERIVATIVE
- G12-B05-BOUNDARY_FEASIBILITY
- G12-B05-UNIT_ASSUMPTION_CHECK

## D1 / PED1: Vì sao cần học?

Khi sản lượng thay đổi một chút, chi phí tăng nhanh đến đâu? Khi một vật đi lùi, vị trí có thể vẫn dương không? Một hình hộp có thể tích lớn nhất với tấm bìa cho trước? Đây là ba loại quyết định cần **tốc độ biến thiên**, **điểm tối ưu** và quan trọng hơn là **miền khả thi**. Đạo hàm chỉ có ý nghĩa khi đi kèm mô hình, đơn vị và giả định thực tế.

## D1 / PED2: Tiền đề cần tự thử

Tỉ số thay đổi Δy/Δx và giới hạn khi Δx→0; quy tắc đạo hàm đa thức/phân thức; bảng dấu và max/min trên miền có thể bị giới hạn; thể tích hộp chữ nhật; chi phí/doanh thu/lợi nhuận. Nếu vị trí s tính bằng m và thời gian t tính bằng s, đạo hàm s'(t) có đơn vị m/s, đạo hàm lần hai có m/s². Không nhầm số âm của vận tốc với "độ lớn vận tốc" (tốc độ |v|≥0).

## D1 / PED3: Bản chất trước công thức

**Tốc độ thay đổi tức thời:** Khi x tăng h rất nhỏ, [f(x+h)−f(x)]/h xấp xỉ độ đổi y theo 1 đơn vị x. Giới hạn khi h→0, nếu tồn tại, là f'(x); đơn vị là "đơn vị y / đơn vị x". Đạo hàm không mặc định là tốc độ theo thời gian: chỉ gọi "vận tốc" khi f là vị trí theo thời gian.

**Chuyển động thẳng:** v=s'(t), a=v'(t)=s''(t). Chiều theo trục dương/âm phụ thuộc dấu v; **tốc độ** là |v|; khi v≠0, tốc độ tăng nếu v·a>0 và giảm nếu v·a<0. Ngay tại v=0 không khẳng định "tốc độ tăng" chỉ nhờ a>0; cần xét lân cận thời điểm.

**Chi phí cận biên:** C'(q) là tốc độ đổi chi phí theo sản lượng; khi q đo bằng đơn vị sản phẩm, C'(q) ≈ C(q+1)−C(q) nếu bước 1 đủ nhỏ so với quy mô mô hình. Đạo hàm không bằng đúng sai phân hữu hạn trong mọi mô hình.

**Bài toán tối ưu hóa:** (1) đặt biến có nghĩa và đơn vị; (2) viết ràng buộc vật lý; (3) biểu diễn mục tiêu bằng một biến; (4) tìm điểm tới hạn/biên; (5) so sánh và diễn giải kết quả phù hợp giả định. Nếu miền là khoảng mở, không tự tuyên bố giá trị min bằng giới hạn không đạt.

## D2 / PED5: Ví dụ dẫn dắt có lập luận

### EX-G12-B05-01 — Vận tốc âm không có nghĩa vị trí âm
Vật đi trên trục với s(t)=t³−6t²+9t (m), t≥0 (s). v(t)=3t²−12t+9=3(t−1)(t−3) (m/s). Trên 0<t<1 và t>3, v>0 nên chuyển động theo chiều dương; trên 1<t<3 v<0 nên đi theo chiều âm. Ở t=2: s(2)=8−24+18=2 m dương, v(2)=12−24+9=−3 m/s âm; đây là phản ví dụ trực tiếp cho lối nghĩ "tọa độ dương thì luôn đi về phía dương". a(t)=6t−12, a(2)=0; tại một thời điểm có thể tốc độ khác 0 nhưng gia tốc bằng 0.

### EX-G12-B05-02 — Chi phí cận biên không phải chênh lệch chính xác
C(q)=0.02q²+5q+1200 (nghìn đồng), q≥0 (sản phẩm); C'(q)=0.04q+5 (nghìn đồng/sản phẩm). Khi q=100, C'(100)=9. Nhưng C(101)−C(100)=0.02·201+5=9.02 nghìn đồng. **Vì sao hai số khác nhau?** Đạo hàm là tốc độ giới hạn; sai phân 1 sản phẩm có thêm tác động độ cong của C. Không đồng nhất C'(100) với tổng chi phí C(100).

### EX-G12-B05-03 — Quây vườn sát tường, chỉ dùng ba cạnh
Có 40 m hàng rào cho ba cạnh một mảnh vườn chữ nhật sát bức tường. Gọi x là chiều vuông góc tường, chiều song song là 40−2x. Miền 0<x<20. A=x(40−2x), A'=40−4x nên max A=200 m² tại x=10, cạnh song song 20 m. **Giới hạn mô hình**: không cần hàng rào ở cạnh sát tường; nếu dùng cả bốn cạnh sẽ ra công thức khác, trái yêu cầu. Không có diện tích nhỏ nhất dương trên miền hình chữ nhật không suy biến.

### EX-G12-B05-04 — Gấp hộp từ tấm bìa
Tấm bìa 30 cm × 20 cm; cắt ở bốn góc bốn hình vuông cạnh x cm, gấp thành hộp không nắp. Miền 0<x<10. V(x)=x(30−2x)(20−2x)=600x−100x²+4x³ (cm³); V'=600−200x+12x². Giải V'=0: x=(25±5√7)/3; nghiệm (25+5√7)/3>10, bị loại. Nghiệm hợp lệ x*=(25−5√7)/3≈3.9237 cm; V' dương trước x*, âm sau x*, nên V lớn nhất tại x*. Khi x→0+ hoặc10−, V→0 nhưng không đạt thể tích 0 nếu hộp vẫn là hộp không suy biến. *Lý do chọn bảng dấu*: trên miền mở chỉ nghiệm bên trong thỏa vật lý mới được chọn.

### EX-G12-B05-05 — Tối ưu lợi nhuận có điều kiện giá không âm
Một sản phẩm bán theo lượng q liên tục trong mô hình 0≤q≤300; giá bán p(q)=30−0.1q (nghìn đồng/sản phẩm), chi phí C(q)=10q+400 (nghìn đồng). Doanh thu R(q)=qp(q), lợi nhuận P=R−C=20q−0.1q²−400. P'(q)=20−0.2q=0 tại q=100, P''=−0.2<0; P(100)=600 nghìn đồng. Đầu biên P(0)=−400; P(300)=−3400. **GTLN** P=600 tại 100 sản phẩm. Nếu sản lượng là nguyên, 100 vẫn hợp lệ; cần kiểm tra điểm gần nhất nếu nghiệm tối ưu không nguyên. Mô hình p≥0 cho giới hạn q≤300, không được tối ưu trên tất cả ℝ.

## PED4: Đọc đồ thị/hình ứng dụng

**FIG-G12-B05-01** (sẽ dựng SVG gốc trước review): V(x)=x(30−2x)(20−2x), miền **chỉ 0<x<10**; trục ngang x cm, dọc V cm³; đỉnh tại x*≈3.9237, hai biên không được tô chấm đặc vì hộp suy biến. Dạy đọc hình: xác định miền hợp lệ trước, xem dấu V' rồi mới đọc đỉnh; đồ thị ngoài (0,10) chỉ là đa thức toán, không là hộp vật lý.

## PED6: TỰ THỬ trước Core

A. s(t)=5−2t có vị trí dương lúc t=1, vật đi theo chiều nào? Tốc độ bao nhiêu?
B. Chi phí C(q) có đơn vị triệu đồng, q sản phẩm. Đơn vị C'(q) là gì?
C. Bốn cạnh hay ba cạnh hàng rào sẽ làm thay đổi điều kiện x+y hay 2x+y?
D. Khi x cắt vuông ở góc hộp 30×20, tại sao x=12 cm không hợp lệ?
Đoán trước rồi mới xem Core, sai thì chọn HELP theo outcome, tự thử khác và quay lại.

## D3: Core/Practice/Application canonical, đáp án chỉ mở sau khi tự làm

### THPT-G12-CHI-B05-C01 | skill_id=G12-B05-RATE_INTERPRETATION | placement=SGK_CORE | role=SGK_CORE
**Hỏi:** f(x)=2x²+3, x là s, f là m. f'(2) và đơn vị?
**Đối chiếu:** f'=4x, f'(2)=8 m/s. Không gọi đây là gia tốc.

### THPT-G12-CHI-B05-C02 | skill_id=G12-B05-MOTION_SPEED_ACCELERATION | placement=SGK_CORE | role=SGK_CORE
**Hỏi:** s(t)=t²−4t+5 m, t≥0 s. Vận tốc/tốc độ tại t=1?
**Đối chiếu:** v=2t−4, v(1)=−2 m/s; tốc độ 2 m/s, chiều âm.

### THPT-G12-CHI-B05-C03 | skill_id=G12-B05-MARGINAL_COST | placement=SGK_CORE | role=SGK_CORE
**Hỏi:** C(q)=q²+10q+100 (nghìn đồng). Chi phí cận biên tại q=5?
**Đối chiếu:** C'=2q+10, C'(5)=20 nghìn đồng/sản phẩm; không phải C(5).

### THPT-G12-CHI-B05-C04 | skill_id=G12-B05-MODEL_VARIABLE_DOMAIN | placement=SGK_CORE | role=SGK_CORE
**Hỏi:** Tấm bìa 30×20, cắt vuông góc x ở bốn góc làm hộp không nắp. Miền x hợp lệ?
**Đối chiếu:** 0<x<10 cm, vì 30−2x>0, 20−2x>0 và x>0.

### THPT-G12-CHI-B05-P01 | skill_id=G12-B05-RATE_INTERPRETATION | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** Từ f(x)=x³ cm với x phút, f'(2) và ý nghĩa x tăng rất nhỏ?
**Đối chiếu:** 3x² ⇒ f'(2)=12 cm/phút, thay đổi tức thời của f khi x ở gần2 phút.

### THPT-G12-CHI-B05-P02 | skill_id=G12-B05-MOTION_SPEED_ACCELERATION | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** Vật có v(t)=t−3 m/s, a=1 m/s². Ở t=2 tốc độ đang tăng hay giảm? Tại t=3 có thể kết luận chỉ bằng dấu a?
**Đối chiếu:** t=2, v=−1 nên v·a<0, tốc độ giảm; tại t=3 v=0, phải xét lân cận, không suy chỉ từ a.

### THPT-G12-CHI-B05-P03 | skill_id=G12-B05-MARGINAL_COST | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** C(q)=0.02q²+5q+1200. So C'(100) với C(101)−C(100).
**Đối chiếu:** 9 so với 9.02 nghìn đồng; sai phân hữu hạn không luôn bằng đạo hàm.

### THPT-G12-CHI-B05-P04 | skill_id=G12-B05-OPTIMIZATION_DERIVATIVE | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** Tối đa hóa f(x)=−x²+8x−3, 0≤x≤6.
**Đối chiếu:** f'=−2x+8, x=4 cho f=13; f(0)=−3, f(6)=9; max13 tại4.

### THPT-G12-CHI-B05-P05 | skill_id=G12-B05-BOUNDARY_FEASIBILITY | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** Với V=x(30−2x)(20−2x), tại x=10 có thể gọi V=0 là thể tích nhỏ nhất của một **hộp** tạo được không?
**Đối chiếu:** Không, x=10 làm chiều rộng đáy 0, hộp suy biến; miền (0,10), inf V=0 nhưng không có min.

### THPT-G12-CHI-B05-P06 | skill_id=G12-B05-UNIT_ASSUMPTION_CHECK | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** Nếu diện tích A(x) đo bằng m² và x bằng m, đơn vị A'(x) là gì? Có được gọi A' là vận tốc không?
**Đối chiếu:** m²/m=m; đó là độ nhạy diện tích theo độ dài, **không** là vận tốc nếu x không phải thời gian.

### THPT-G12-CHI-B05-A01 | skill_id=G12-B05-OPTIMIZATION_DERIVATIVE | placement=SGK_APPLICATION | role=SGK_APPLICATION
**Hỏi:** Quây vườn sát tường bằng 40 m hàng rào chỉ cho ba cạnh; hai kích thước tối ưu?
**Đối chiếu:** 10 m cạnh vuông góc tường, 20 m song song; Amax=200 m².

### THPT-G12-CHI-B05-A02 | skill_id=G12-B05-MODEL_VARIABLE_DOMAIN | placement=SGK_APPLICATION | role=SGK_APPLICATION
**Hỏi:** Mô hình giá p(q)=30−0.1q, q≥0 và không cho giá âm. Miền q nào hợp lệ?
**Đối chiếu:** 0≤q≤300, đơn vị sản phẩm theo mô hình liên tục; nếu cần q nguyên thì lấy giao với ℤ.

### THPT-G12-CHI-B05-A03 | skill_id=G12-B05-UNIT_ASSUMPTION_CHECK | placement=SGK_APPLICATION | role=SGK_APPLICATION
**Hỏi:** Lợi nhuận P(q)=20q−0.1q²−400 (nghìn đồng), 0≤q≤300. Nếu tính được q=100, lợi nhuận tối đa là bao nhiêu và với đơn vị nào?
**Đối chiếu:** P(100)=600 nghìn đồng, không phải 600 sản phẩm; q=100 sản phẩm tối ưu trong mô hình.

## D4: Written, Anchor một thư viện

### THPT-G12-CHI-B05-W01 | skill_id=G12-B05-BOUNDARY_FEASIBILITY | placement=SGK_WRITTEN | role=WRITTEN
**Đề:** Từ giấy 30×20 cm, cắt bốn góc vuông cạnh x để gấp hộp không nắp. Tìm miền x và kích thước tạo thể tích lớn nhất; giải thích tại sao không chọn nghiệm f'=0 ngoài miền.
**Lời giải tự mở:** 0<x<10, V=600x−100x²+4x³, V'=600−200x+12x². Nghiệm x*=(25−5√7)/3≈3.9237 hợp lệ, nghiệm còn lại >10; đạo hàm + sang − tại x*, hai biên cho V→0 nhưng hộp không hợp lệ; chiều dài đáy 30−2x*, rộng20−2x*, cao x*.
**Rubric /4:** 1 biến+miền; 1 mô hình V+đạo hàm; 1 nghiệm và dấu; 1 loại nghiệm ngoài miền, kích thước và đơn vị.

### THPT-G12-CHI-B05-W02 | skill_id=G12-B05-MARGINAL_COST | placement=SGK_WRITTEN | role=ANCHOR_TAG
**Đề:** Chi phí C(q)=0.01q²+4q+200 (nghìn đồng) với q≥0. Tính C'(50), C(51)−C(50), nêu ý nghĩa, đơn vị và giới hạn dùng xấp xỉ đạo hàm.
**Lời giải tự mở:** C'=0.02q+4; C'(50)=5 nghìn đồng/sp; C(51)−C(50)=0.01·101+4=5.01 nghìn đồng; sai số 0.01 nghìn đồng do bước rời rạc.
**Rubric /4:** 1 đạo hàm; 1 giá trị C'(50); 1 sai phân; 1 diễn giải đúng đơn vị và "xấp xỉ". Anchor là nhãn, không nhân bản.

## D6: Khắc phục 5 bước và return đúng canonical

### HELP-G12-B05-01 | skill_id=G12-B05-RATE_INTERPRETATION | return_item=THPT-G12-CHI-B05-C01
1. Lỗi: lẫn f và f'. 2. Bản chất: f' là độ đổi mỗi đơn vị x. 3. Gợi lại y=x², y'=2x. 4. Tự thử f=x³ tại x=1. 5. Quay lại C01.

### HELP-G12-B05-02 | skill_id=G12-B05-MOTION_SPEED_ACCELERATION | return_item=THPT-G12-CHI-B05-C02
1. Lỗi: vận tốc âm thì tốc độ âm. 2. Bản chất: tốc độ=|v|. 3. Gợi lại v=−4 ⇒ tốc độ4. 4. Tự thử v=−6. 5. Quay lại C02.

### HELP-G12-B05-03 | skill_id=G12-B05-MARGINAL_COST | return_item=THPT-G12-CHI-B05-C03
1. Lỗi: tính C(q) thay cho C'(q). 2. Bản chất: chi phí cận biên là đạo hàm theo q. 3. Gợi lại (q²)'=2q. 4. Tự thử C=q²+3q tại q=2. 5. Quay lại C03.

### HELP-G12-B05-04 | skill_id=G12-B05-MODEL_VARIABLE_DOMAIN | return_item=THPT-G12-CHI-B05-C04
1. Lỗi: cho x lớn hơn nửa chiều ngắn nhất. 2. Bản chất: hai đáy sau cắt phải dương. 3. Gợi lại 20−2x>0. 4. Tự thử giấy 20×10. 5. Quay lại C04.

### HELP-G12-B05-05 | skill_id=G12-B05-OPTIMIZATION_DERIVATIVE | return_item=THPT-G12-CHI-B05-P04
1. Lỗi: bỏ giá trị tại biên đoạn. 2. Bản chất: so ứng viên và hai đầu được phép. 3. Gợi lại f(0), f(6). 4. Tự thử x ở đỉnh4. 5. Quay lại P04.

### HELP-G12-B05-06 | skill_id=G12-B05-BOUNDARY_FEASIBILITY | return_item=THPT-G12-CHI-B05-P05
1. Lỗi: dùng hộp bẹt là hộp khả thi. 2. Bản chất: x,30−2x,20−2x cùng dương. 3. Gợi lại x=10 cho bề rộng đáy0. 4. Tự thử x=9.9 hợp lệ và còn thể tích dương không? 5. Quay lại P05.

### HELP-G12-B05-07 | skill_id=G12-B05-UNIT_ASSUMPTION_CHECK | return_item=THPT-G12-CHI-B05-P06
1. Lỗi: mọi đạo hàm gọi vận tốc. 2. Bản chất: đơn vị y chia đơn vị x. 3. Gợi lại diện tích m², chiều dài m. 4. Tự thử thể tích m³ theo thời gian s. 5. Quay lại P06.

## AUTHOR_CHECKPOINT
B05 R00: 7 outcomes; five D2 examples; 4 Core+6 Practice+3 Application+2 Written=15 canonical public IDs, 7 same-outcome HELP and planned exact SVG. No external Academic/PED review; owner S1 scope p33–41 and SBT p27–32; no RD1/official mastery, do not integrate release.
