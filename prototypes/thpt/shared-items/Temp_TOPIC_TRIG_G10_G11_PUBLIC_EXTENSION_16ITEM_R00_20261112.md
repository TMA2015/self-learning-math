# Lượng giác G10–G11 — 16 canonical public Practice bổ sung đúng 16 outcome thiếu dạng R00

**ROLE:** TOPIC_PRACTICE (công khai, giải thích sau Check). Một item ID/đề/đáp án/lời giải/rubric duy nhất; không chép lại sang Knowledge hoặc Self Check. Các bài sau là DELTA_C tác giả mới, **chưa có NotebookLM PASS**, cần kiểm toán Q18 từng đáp án và giới hạn. Không lấy một câu public đã xem để chấm TOPIC_READINESS, không ghi Mastery. Không có private held-out.

SOURCE_TYPE: NEW_AUTHORING_ORIGINAL_PUBLIC
ITEM_VERSION: 1
PUBLIC_CANONICAL_COUNT: 16
PRIVATE_RD1_COUNT: 0
ASSESSMENT_MODE: CLIENT_CHECK_THEN_REVEAL_NO_MASTERY

## ITEM_OUTCOME_MATRIX

| item_id | outcome_id | role | version |
|---|---|---|---:|
| `THPT-G10-TOPTRIG-ADD01` | `G10-B06-AREA_SIN` | TOPIC_PRACTICE | 1 |
| `THPT-G10-TOPTRIG-ADD02` | `G10-B05-UNIT_SEMICIRCLE` | TOPIC_PRACTICE | 1 |
| `THPT-G11-TOPTRIG-ADD03` | `G11-B01-DEG_RAD` | TOPIC_PRACTICE | 1 |
| `THPT-G11-TOPTRIG-ADD04` | `G11-B01-TRIG_UNIT_CIRCLE` | TOPIC_PRACTICE | 1 |
| `THPT-G11-TOPTRIG-ADD05` | `G11-B01-PERIODIC_REDUCTION` | TOPIC_PRACTICE | 1 |
| `THPT-G11-TOPTRIG-ADD06` | `G11-B02-SUM_TO_PRODUCT` | TOPIC_PRACTICE | 1 |
| `THPT-G11-TOPTRIG-ADD07` | `G11-B01-RELATED_ANGLES` | TOPIC_PRACTICE | 1 |
| `THPT-G11-TOPTRIG-ADD08` | `G11-B03-PARITY` | TOPIC_PRACTICE | 1 |
| `THPT-G11-TOPTRIG-ADD09` | `G11-B03-COS_GRAPH` | TOPIC_PRACTICE | 1 |
| `THPT-G11-TOPTRIG-ADD10` | `G11-B03-TAN_GRAPH` | TOPIC_PRACTICE | 1 |
| `THPT-G11-TOPTRIG-ADD11` | `G11-B03-COT_GRAPH` | TOPIC_PRACTICE | 1 |
| `THPT-G11-TOPTRIG-ADD12` | `G11-B04-COS_EQ` | TOPIC_PRACTICE | 1 |
| `THPT-G11-TOPTRIG-ADD13` | `G11-B04-TAN_EQ` | TOPIC_PRACTICE | 1 |
| `THPT-G11-TOPTRIG-ADD14` | `G11-B04-COT_EQ` | TOPIC_PRACTICE | 1 |
| `THPT-G11-TOPTRIG-ADD15` | `G11-B04-EXTRANEOUS` | TOPIC_PRACTICE | 1 |
| `THPT-G11-TOPTRIG-ADD16` | `G11-B04-APPLICATION` | TOPIC_PRACTICE | 1 |

## 16 bài toán canonical gốc có lời giải và đường D6

### THPT-G10-TOPTRIG-ADD01

**Outcome:** `G10-B06-AREA_SIN` · **Kỹ năng:** Chọn đúng góc kẹp và diện tích

**Đề cho học sinh:** Tam giác ABC có AB=6 cm, AC=10 cm và góc BAC=150°. Tính diện tích tam giác; có thể dùng công thức nửa tích hai cạnh và sin của một góc không kẹp không?

**Lời giải (mở sau Check):** AB và AC kẹp góc A, nên S=(1/2)·6·10·sin150°=30·(1/2)=15 cm². Không tự chọn góc B hay C khi hai cạnh cho là AB,AC vì công thức 1/2 bc sin A đòi góc xen giữa.

**Đáp án chuẩn (sau Check):** 15 cm²

**D6 / lỗi dễ gặp (sau Check):** Nếu sai, vẽ hai cạnh được cho gặp nhau tại A và đánh dấu góc kẹp; kiểm sin150°=1/2, không âm.

**Rubric tự luận hỗ trợ, không tự chấm tự luận:** 1 điểm nhận diện mô hình/miền xác định; 1 điểm biến đổi và số học; 1 điểm giải thích nghiệm, đơn vị hoặc giới hạn áp dụng. `MASTERY_WRITE=NO`.

### THPT-G10-TOPTRIG-ADD02

**Outcome:** `G10-B05-UNIT_SEMICIRCLE` · **Kỹ năng:** Hoành/tung trên nửa đường tròn đơn vị

**Đề cho học sinh:** Điểm M=(cos α,sin α) nằm trên nửa đường tròn đơn vị phía trên, với α là góc tù và sin α=3/5. Xác định hoành độ của M và giải thích dấu.

**Lời giải (mở sau Check):** Vì cos²α+sin²α=1 nên cos²α=1−9/25=16/25. α tù nên M nằm bên trái trục Oy, cos α=−4/5. Tung độ M là 3/5.

**Đáp án chuẩn (sau Check):** M=(−4/5,3/5)

**D6 / lỗi dễ gặp (sau Check):** Đừng lấy căn dương khi chỉ biết cos²; nhìn vị trí trên nửa đường tròn.

**Rubric tự luận hỗ trợ, không tự chấm tự luận:** 1 điểm nhận diện mô hình/miền xác định; 1 điểm biến đổi và số học; 1 điểm giải thích nghiệm, đơn vị hoặc giới hạn áp dụng. `MASTERY_WRITE=NO`.

### THPT-G11-TOPTRIG-ADD03

**Outcome:** `G11-B01-DEG_RAD` · **Kỹ năng:** Chiều quay âm và tia cuối

**Đề cho học sinh:** Một bánh xe quay góc −450° từ trục Ox dương. Đổi sang radian và tìm góc không âm nhỏ hơn 360° cùng tia cuối. Tia cuối thuộc hướng nào?

**Lời giải (mở sau Check):** −450°×π/180°=−5π/2 rad. Cộng 720° cho −450° được 270°=3π/2; tia cuối trùng hướng Oy âm. Không đổi nghĩa góc quay âm thành quãng quay 270° nếu đang hỏi hành trình thực.

**Đáp án chuẩn (sau Check):** −5π/2 rad; đại diện cùng tia cuối 270°=3π/2

**D6 / lỗi dễ gặp (sau Check):** Phân biệt số đo góc có hướng và góc đại diện; cộng bội 360° chỉ khi xét tia cuối.

**Rubric tự luận hỗ trợ, không tự chấm tự luận:** 1 điểm nhận diện mô hình/miền xác định; 1 điểm biến đổi và số học; 1 điểm giải thích nghiệm, đơn vị hoặc giới hạn áp dụng. `MASTERY_WRITE=NO`.

### THPT-G11-TOPTRIG-ADD04

**Outcome:** `G11-B01-TRIG_UNIT_CIRCLE` · **Kỹ năng:** Tọa độ điểm ở góc phần tư III

**Đề cho học sinh:** Với góc θ trong [0,2π) có cosθ=−√2/2 và sinθ=−√2/2, tìm θ, tanθ và cotθ.

**Lời giải (mở sau Check):** Cả hai tọa độ âm nên θ ở phần tư III, góc tham chiếu π/4 ⇒ θ=5π/4. Vì sin,cos khác 0, tanθ=sinθ/cosθ=1, cotθ=1.

**Đáp án chuẩn (sau Check):** θ=5π/4; tanθ=cotθ=1

**D6 / lỗi dễ gặp (sau Check):** Không đánh dấu phần tư II/IV khi cả hai dấu âm; kiểm mẫu khác 0 trước khi chia.

**Rubric tự luận hỗ trợ, không tự chấm tự luận:** 1 điểm nhận diện mô hình/miền xác định; 1 điểm biến đổi và số học; 1 điểm giải thích nghiệm, đơn vị hoặc giới hạn áp dụng. `MASTERY_WRITE=NO`.

### THPT-G11-TOPTRIG-ADD05

**Outcome:** `G11-B01-PERIODIC_REDUCTION` · **Kỹ năng:** Quy về một vòng với góc âm lớn

**Đề cho học sinh:** Tính sin(−13π/6) và tìm đại diện cùng tia cuối trong [0,2π).

**Lời giải (mở sau Check):** Cộng 4π cho −13π/6 được (−13+24)π/6=11π/6. sin(11π/6)=−1/2. Sin có chu kì 2π; không thay bằng 13π/6 dương.

**Đáp án chuẩn (sau Check):** Đại diện 11π/6; sin=−1/2

**D6 / lỗi dễ gặp (sau Check):** Khi rút gọn góc âm, cộng đúng bội 2π thay vì xóa dấu âm.

**Rubric tự luận hỗ trợ, không tự chấm tự luận:** 1 điểm nhận diện mô hình/miền xác định; 1 điểm biến đổi và số học; 1 điểm giải thích nghiệm, đơn vị hoặc giới hạn áp dụng. `MASTERY_WRITE=NO`.

### THPT-G11-TOPTRIG-ADD06

**Outcome:** `G11-B02-SUM_TO_PRODUCT` · **Kỹ năng:** Biến đổi tổng hai cos

**Đề cho học sinh:** Không tính máy, tính cos75°+cos15° bằng công thức tổng thành tích.

**Lời giải (mở sau Check):** cosu+cosv=2cos((u+v)/2)cos((u−v)/2). Ở đây u=75°,v=15°: 2cos45°cos30°=2(√2/2)(√3/2)=√6/2.

**Đáp án chuẩn (sau Check):** √6/2

**D6 / lỗi dễ gặp (sau Check):** Đừng nhầm tổng cos thành 2sin; phân biệt nửa tổng 45° và nửa hiệu 30°.

**Rubric tự luận hỗ trợ, không tự chấm tự luận:** 1 điểm nhận diện mô hình/miền xác định; 1 điểm biến đổi và số học; 1 điểm giải thích nghiệm, đơn vị hoặc giới hạn áp dụng. `MASTERY_WRITE=NO`.

### THPT-G11-TOPTRIG-ADD07

**Outcome:** `G11-B01-RELATED_ANGLES` · **Kỹ năng:** Dấu của góc đối và góc hơn π

**Đề cho học sinh:** Không dùng máy tính, xác định sin(−5π/6) và cos(π+π/6); nêu lý do dấu.

**Lời giải (mở sau Check):** sin(−5π/6)=−sin(5π/6)=−1/2. cos(π+π/6)=−cos(π/6)=−√3/2. Các dấu xuất phát từ đối xứng trên đường tròn.

**Đáp án chuẩn (sau Check):** −1/2 và −√3/2

**D6 / lỗi dễ gặp (sau Check):** Không chỉ thuộc trị số góc tham chiếu mà bỏ qua chiều quay và vị trí tia cuối.

**Rubric tự luận hỗ trợ, không tự chấm tự luận:** 1 điểm nhận diện mô hình/miền xác định; 1 điểm biến đổi và số học; 1 điểm giải thích nghiệm, đơn vị hoặc giới hạn áp dụng. `MASTERY_WRITE=NO`.

### THPT-G11-TOPTRIG-ADD08

**Outcome:** `G11-B03-PARITY` · **Kỹ năng:** Chẵn lẻ của tổng sin và cos

**Đề cho học sinh:** Xét f(x)=sin x+cos x trên R. Hàm số chẵn, lẻ hay không thuộc cả hai? Giải thích bằng hai giá trị chứng minh.

**Lời giải (mở sau Check):** f(−x)=−sin x+cos x, nhìn chung khác f(x) và khác −f(x). Chẳng hạn f(0)=1 nên f không lẻ; f(π/2)=1 và f(−π/2)=−1 nên f không chẵn.

**Đáp án chuẩn (sau Check):** Không chẵn, không lẻ

**D6 / lỗi dễ gặp (sau Check):** Đừng kết luận tổng của hàm chẵn và hàm lẻ tự động chẵn/lẻ; kiểm định nghĩa.

**Rubric tự luận hỗ trợ, không tự chấm tự luận:** 1 điểm nhận diện mô hình/miền xác định; 1 điểm biến đổi và số học; 1 điểm giải thích nghiệm, đơn vị hoặc giới hạn áp dụng. `MASTERY_WRITE=NO`.

### THPT-G11-TOPTRIG-ADD09

**Outcome:** `G11-B03-COS_GRAPH` · **Kỹ năng:** Dịch đồ thị cos và biên độ

**Đề cho học sinh:** Cho y=2cos(x−π/3). Xác định biên độ, chu kì dương nhỏ nhất, một vị trí đạt cực đại và cực tiểu trong [0,2π).

**Lời giải (mở sau Check):** Nhân 2 cho biên độ 2, dịch phải π/3; chu kì 2π. Cực đại khi x−π/3=2kπ ⇒ x=π/3 trong [0,2π). Cực tiểu khi x−π/3=π+2kπ ⇒ x=4π/3.

**Đáp án chuẩn (sau Check):** Biên độ 2; T=2π; max tại π/3 là 2; min tại 4π/3 là −2

**D6 / lỗi dễ gặp (sau Check):** Không coi dịch ngang là đổi chu kì; dùng đối số bên trong cos để định vị điểm.

**Rubric tự luận hỗ trợ, không tự chấm tự luận:** 1 điểm nhận diện mô hình/miền xác định; 1 điểm biến đổi và số học; 1 điểm giải thích nghiệm, đơn vị hoặc giới hạn áp dụng. `MASTERY_WRITE=NO`.

### THPT-G11-TOPTRIG-ADD10

**Outcome:** `G11-B03-TAN_GRAPH` · **Kỹ năng:** Tiệm cận và nhánh tan

**Đề cho học sinh:** Xét y=tan x trên (−π/2,π/2). Tính y tại ±π/4, xác định hướng thay đổi và hai đường tiệm cận đứng.

**Lời giải (mở sau Check):** tan(−π/4)=−1, tan(π/4)=1. Trên nhánh này, tan tăng từ −∞ đến +∞; có tiệm cận x=−π/2 và x=π/2 vì cos x→0 ở biên.

**Đáp án chuẩn (sau Check):** Các giá trị −1 và 1; tăng; tiệm cận x=±π/2

**D6 / lỗi dễ gặp (sau Check):** Không vẽ đường thẳng nối qua tiệm cận hoặc dùng chu kì 2π làm nhỏ nhất; tan chu kì π.

**Rubric tự luận hỗ trợ, không tự chấm tự luận:** 1 điểm nhận diện mô hình/miền xác định; 1 điểm biến đổi và số học; 1 điểm giải thích nghiệm, đơn vị hoặc giới hạn áp dụng. `MASTERY_WRITE=NO`.

### THPT-G11-TOPTRIG-ADD11

**Outcome:** `G11-B03-COT_GRAPH` · **Kỹ năng:** Nhánh cot giảm và điểm đặc trưng

**Đề cho học sinh:** Xét y=cot x trên (0,π). Tính y tại π/4, π/2, 3π/4; cho biết hàm tăng hay giảm và các tiệm cận đứng.

**Lời giải (mở sau Check):** cotπ/4=1, cotπ/2=0, cot3π/4=−1. Hàm giảm trên (0,π); tiệm cận đứng ở x=0 và x=π vì sin x=0 tại các biên, cot không xác định.

**Đáp án chuẩn (sau Check):** 1,0,−1; giảm; tiệm cận x=0,π

**D6 / lỗi dễ gặp (sau Check):** Không đặt cot xác định tại x=0,π hoặc nhầm chiều giảm với tan.

**Rubric tự luận hỗ trợ, không tự chấm tự luận:** 1 điểm nhận diện mô hình/miền xác định; 1 điểm biến đổi và số học; 1 điểm giải thích nghiệm, đơn vị hoặc giới hạn áp dụng. `MASTERY_WRITE=NO`.

### THPT-G11-TOPTRIG-ADD12

**Outcome:** `G11-B04-COS_EQ` · **Kỹ năng:** Nghiệm cos đối số gấp đôi

**Đề cho học sinh:** Giải cos(2x)=0 trên [0,2π). Liệt kê toàn bộ nghiệm trong khoảng.

**Lời giải (mở sau Check):** cos t=0 ⇔ t=π/2+kπ. Đặt t=2x: x=π/4+kπ/2. Trong [0,2π), k=0,1,2,3 cho π/4,3π/4,5π/4,7π/4.

**Đáp án chuẩn (sau Check):** π/4; 3π/4; 5π/4; 7π/4

**D6 / lỗi dễ gặp (sau Check):** Phải chia toàn bộ biểu thức nghiệm cho 2 và lọc k theo khoảng; không bỏ sót hai nghiệm.

**Rubric tự luận hỗ trợ, không tự chấm tự luận:** 1 điểm nhận diện mô hình/miền xác định; 1 điểm biến đổi và số học; 1 điểm giải thích nghiệm, đơn vị hoặc giới hạn áp dụng. `MASTERY_WRITE=NO`.

### THPT-G11-TOPTRIG-ADD13

**Outcome:** `G11-B04-TAN_EQ` · **Kỹ năng:** Giải tan với chu kì π

**Đề cho học sinh:** Giải tan(2x)=√3 trên [0,π). Kiểm tra miền xác định.

**Lời giải (mở sau Check):** tan t=√3 ⇔ t=π/3+kπ; 2x=π/3+kπ ⇒ x=π/6+kπ/2. Trong [0,π), k=0,1 cho π/6,2π/3. Ở các nghiệm cos(2x)=1/2 hoặc −1/2 ≠0.

**Đáp án chuẩn (sau Check):** x=π/6; 2π/3

**D6 / lỗi dễ gặp (sau Check):** Không dùng chu kì 2π của sin cho tan; ghi điều kiện cos2x≠0.

**Rubric tự luận hỗ trợ, không tự chấm tự luận:** 1 điểm nhận diện mô hình/miền xác định; 1 điểm biến đổi và số học; 1 điểm giải thích nghiệm, đơn vị hoặc giới hạn áp dụng. `MASTERY_WRITE=NO`.

### THPT-G11-TOPTRIG-ADD14

**Outcome:** `G11-B04-COT_EQ` · **Kỹ năng:** Giải cot âm

**Đề cho học sinh:** Giải cot x=−1 trên [0,2π).

**Lời giải (mở sau Check):** cot x=−1 ⇔ tan x=−1 khi cả hai xác định; góc tham chiếu π/4, cot âm ở phần tư II/IV. Các nghiệm là x=3π/4,7π/4 (sin khác 0 tại cả hai).

**Đáp án chuẩn (sau Check):** x=3π/4; 7π/4

**D6 / lỗi dễ gặp (sau Check):** Không lấy nghiệm x=π/4 vì cot tại đó bằng +1; kiểm sinx≠0.

**Rubric tự luận hỗ trợ, không tự chấm tự luận:** 1 điểm nhận diện mô hình/miền xác định; 1 điểm biến đổi và số học; 1 điểm giải thích nghiệm, đơn vị hoặc giới hạn áp dụng. `MASTERY_WRITE=NO`.

### THPT-G11-TOPTRIG-ADD15

**Outcome:** `G11-B04-EXTRANEOUS` · **Kỹ năng:** Loại nghiệm làm mẫu bằng 0

**Đề cho học sinh:** Giải sin x/(1−cos x)=0 trên [0,2π). Vì sao x=0 không là nghiệm?

**Lời giải (mở sau Check):** Phân thức bằng 0 nếu sinx=0 và 1−cosx≠0. Trong [0,2π), sinx=0 tại x=0,π. Với x=0, mẫu=0 ⇒ loại. Với x=π, mẫu=1−(−1)=2≠0 ⇒ nhận.

**Đáp án chuẩn (sau Check):** Chỉ x=π

**D6 / lỗi dễ gặp (sau Check):** Phải viết điều kiện mẫu khác 0 trước khi giải tử; 0/0 không bằng 0.

**Rubric tự luận hỗ trợ, không tự chấm tự luận:** 1 điểm nhận diện mô hình/miền xác định; 1 điểm biến đổi và số học; 1 điểm giải thích nghiệm, đơn vị hoặc giới hạn áp dụng. `MASTERY_WRITE=NO`.

### THPT-G11-TOPTRIG-ADD16

**Outcome:** `G11-B04-APPLICATION` · **Kỹ năng:** Mô hình dao động bằng sin và khoảng thời gian

**Đề cho học sinh:** Mực nước mô hình h(t)=2+sin(πt/6) (m), với 0≤t≤12 giờ. Tính độ cao cực đại, cực tiểu và thời điểm đầu tiên đạt các mức đó.

**Lời giải (mở sau Check):** Vì −1≤sin≤1 nên h nằm [1,3] m. sin đạt 1 khi πt/6=π/2⇒t=3 giờ (cực đại 3 m); sin đạt −1 khi πt/6=3π/2⇒t=9 giờ (cực tiểu 1 m). Chu kì 12 giờ, phù hợp khoảng quan sát.

**Đáp án chuẩn (sau Check):** Max 3m tại t=3h; min1m tại t=9h

**D6 / lỗi dễ gặp (sau Check):** Không lấy điểm giữa 2m làm biên độ; biên độ 1m, đường trung bình 2m và chu kì phải đọc từ đối số πt/6.

**Rubric tự luận hỗ trợ, không tự chấm tự luận:** 1 điểm nhận diện mô hình/miền xác định; 1 điểm biến đổi và số học; 1 điểm giải thích nghiệm, đơn vị hoặc giới hạn áp dụng. `MASTERY_WRITE=NO`.


## Authoring QA scope (R00 chưa CONTENT_READY)

- 16/16 đề/đáp án/lời giải mới được người biên soạn soạn theo đúng outcome, khác các câu nguồn 18 G10 + 46 G11. Mọi phép tính phải chạy kiểm toán và chỉ được signoff trên source SHA bất biến.
- Quyết định có trở thành `TOPIC_READINESS` chính thức thuộc bộ đề bảo vệ riêng của chủ dự án, không nhập vào GitHub.
