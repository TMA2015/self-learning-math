# Toán 12 KNTT — Chương I, Bài 4: Khảo sát sự biến thiên và vẽ đồ thị của hàm số — AUTHOR R00

LESSON_ID: G12-B04
SGK_S1: Tập Một trang in 26–32 = PDF1 trang 28–34
SBT_S1: Tập Một trang in 21–26 = PDF1 trang 19–24
SOURCE_PDF_SHA256_SGK: faeb554bea9cf81189c5e790b1b1edb42f50b3648694acc80dc99682ada3f1fd
SOURCE_PDF_SHA256_SBT: db9d07a2fbe55cda3b4b50fb13d1767e45a7552f668b726241c59febac69c0ca
STANDARD_ID: SLM-THPT-QUALITY-ONE
ACADEMIC_VERDICT: NOT_REVIEWED
PEDAGOGICAL_VERDICT: NOT_REVIEWED
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY

## OUTCOME_IDS
- G12-B04-SURVEY_WORKFLOW
- G12-B04-CUBIC_VARIATION
- G12-B04-RATIONAL_VARIATION
- G12-B04-INTERCEPTS_LIMITS
- G12-B04-CENTER_SYMMETRY
- G12-B04-READ_VARIATION_TABLE
- G12-B04-DOMAIN_NONCONNECT

## D1 / PED1: Vì sao cần học?

Có thể biết một hàm tăng giảm, có cực trị và có tiệm cận nhưng vẫn chưa hình dung được toàn bộ đồ thị. "Khảo sát" là ghép tất cả chứng cứ thành một bức tranh hợp lý: miền xác định, các hướng đi, đỉnh/đáy, các đường tiến sát, điểm giao trục. Kỹ năng này biến công thức thành dự đoán hình dạng và ngược lại giúp phát hiện sai sót trong phép tính.

## D1 / PED2: Tiền đề

Cần biết lấy đạo hàm, xét dấu trên các khoảng hợp lệ, tính cực trị và giới hạn ở ±∞/hai phía điểm loại khỏi D, phương trình đường thẳng tiệm cận. Từ f'=0 không được tự suy cực trị; từ mẫu 0 không được tự suy tiệm cận đứng. Bài này tự nhắc lại cả hai điểm ngay trong từng ví dụ.

## D1 / PED3: Quy trình có lý do

1. **Miền xác định** trước tất cả, vì đồ thị không được đi qua điểm x bị loại.
2. **Đạo hàm và dấu** để biết tăng/giảm, điểm tới hạn và cực trị; ghi giá trị tại điểm, không chỉ hoành độ.
3. **Giới hạn và tiệm cận**, nhất là hai phía điểm loại; các mũi tên ở ±∞ phải khớp với dạng hàm.
4. **Bảng biến thiên** ghép các miền liên thông, tuyệt đối không nối nhánh qua tiệm cận đứng.
5. **Giao trục và điểm đặc biệt** để đặt đồ thị đúng tỉ lệ tương đối. Vẽ đường cong dựa trên những chứng cứ đã có; không dùng "hình đẹp" thay cho tính toán.
6. **Tâm đối xứng**: đồ thị đa thức bậc ba y=ax³+bx²+cx+d (a≠0) có tâm đối xứng tại điểm uốn x0=−b/(3a), y0=f(x0); đồ thị phân thức (ax+b)/(cx+d) với c≠0 và ad−bc≠0 có tâm là giao hai tiệm cận (−d/c,a/c). Đây là tính chất riêng của các dạng nguồn SGK học, không suy rộng mọi đồ thị.

## D2 / PED5: Tại sao chọn từng bước?

### EX-G12-B04-01 — Đa thức bậc ba có hai cực trị
Khảo sát f(x)=x³−3x². D=ℝ, f'=3x(x−2). Dấu: + trên (−∞,0), − trên (0,2), + trên (2,+∞). Cực đại (0,0), cực tiểu (2,−4). lim x→−∞ f=−∞, lim x→+∞ f=+∞. Giao Ox: x²(x−3)=0 ⇒ (0,0) là nghiệm kép tiếp xúc Ox, (3,0) là nghiệm đơn cắt Ox; giao Oy (0,0). f''=6x−6, điểm uốn và tâm đối xứng (1,−2). **Lý do**: nếu không phân biệt nghiệm kép, dễ vẽ đồ thị xuyên trục ở x=0 dù f≥/≤ cùng dấu hai phía.

### EX-G12-B04-02 — Phân thức bậc nhất/bậc nhất
Khảo sát g(x)=(x+2)/(x−1)=1+3/(x−1). D=ℝ\{1}, g'=−3/(x−1)²<0 trên từng khoảng (−∞,1),(1,+∞). lim x→1−=−∞, lim x→1+=+∞; lim ±∞=1. Tiệm cận đứng x=1, ngang y=1, tâm (1,1). Cắt Ox (−2,0), cắt Oy (0,−2). **Lý do**: kiểm tra các giao điểm sau khi tìm tiệm cận để định vị nhánh; không nối hai nhánh xuyên x=1.

### EX-G12-B04-03 — Đạo hàm bảng biến thiên từ phản chiều
h(x)=−x³+3x. h'=3(1−x²), âm khi |x|>1, dương khi |x|<1; hàm giảm trên (−∞,−1), tăng trên (−1,1), giảm trên (1,+∞). Cực tiểu (−1,−2), cực đại (1,2). Khi x→−∞ h→+∞, khi x→+∞ h→−∞. **Lý do**: hệ số bậc ba âm làm hướng đuôi hai bên đảo so với hệ số dương; chỉ nhìn hai cực trị chưa đủ.

### EX-G12-B04-04 — Đối xứng trung tâm có điều kiện
k(x)=(2x+5)/(x−3)=2+11/(x−3), D=ℝ\{3}; các tiệm cận x=3, y=2, tâm đối xứng (3,2). Từ việc tịnh tiến biến u=x−3, v=y−2 được v=11/u, hàm nghịch biến từng nhánh. **Lý do**: giao hai đường tiệm cận là tâm cho đồ thị hyperbol chữ nhật loại này, không lấy giao trục làm tâm.

### EX-G12-B04-05 — Vẽ sai nhánh khi quên giới hạn
r(x)=2+1/(x+1) có x=−1 tiệm cận đứng và y=2 ngang; r'=−1/(x+1)²<0. Với x>−1, r>2 và đi từ +∞ xuống2; x<−1, r<2 và đi từ2 (phía −∞) xuống−∞. **Không** dùng một đường "giảm trên ℝ\{−1}" theo định nghĩa mọi cặp điểm; phải tách hai khoảng.

## PED4 / D5: Đọc hình và bảng dấu

**FIG-G12-B04-01** (G12_B04_FIG01_RATIONAL_SURVEY_R00.svg): đồ thị g=(x+2)/(x−1) có đường x=1, y=1 và hai điểm giao trục, phân biệt nét đứt tiệm cận với nhánh thật. D5 học sinh đọc từng nhánh theo dấu g'<0 trên từng khoảng, kiểm tra g(−2)=0 và g(0)=−2 trước khi xác định nhánh trái.

**FIG-G12-B04-02** (G12_B04_FIG02_CUBIC_SURVEY_R00.svg): đồ thị cubic y=x³−3x². Học sinh nhìn cực đại tại (0,0) tiếp xúc Ox, cực tiểu tại (2,−4) và điểm uốn (1,−2), kiểm tra đối xứng tâm chứ không nhầm trục đối xứng. Khi chưa có SVG thì dùng bảng dữ liệu chính xác của EX01, không coi hình vẽ chưa kiểm chứng là chứng cứ toán học.

## PED6: TỰ THỬ trước Core

A. Nếu y'=−3/(x−1)² với x≠1, liệu có thể vẽ một nét giảm liên tục băng qua x=1?
B. Nghiệm bội hai x=0 của y=x³−3x² khiến đường cong tiếp xúc hay cắt trục Ox?
C. Với g=2+11/(x−3), dự đoán tâm đối xứng trước khi xem ví dụ.
Tự ghi dự đoán rồi kiểm tra lại bằng tính toán, không mở đáp án trước khi tự làm.

## D3: Core, Practice, Application canonical

### THPT-G12-CHI-B04-C01 | skill_id=G12-B04-SURVEY_WORKFLOW | placement=SGK_CORE | role=SGK_CORE
**Hỏi:** Khi khảo sát f=(x+1)/(x−2), cần xác định D trước hay giao Ox trước, vì sao?
**Đối chiếu:** D=ℝ\{2} trước; điểm không thuộc D không thể vẽ thành điểm trên đồ thị hoặc cực trị.

### THPT-G12-CHI-B04-C02 | skill_id=G12-B04-CUBIC_VARIATION | placement=SGK_CORE | role=SGK_CORE
**Hỏi:** f=x³−3x² có mấy cực trị và ở đâu?
**Đối chiếu:** f'=3x(x−2), cực đại (0,0), cực tiểu (2,−4).

### THPT-G12-CHI-B04-C03 | skill_id=G12-B04-RATIONAL_VARIATION | placement=SGK_CORE | role=SGK_CORE
**Hỏi:** g=(x+2)/(x−1), xác định các khoảng giảm.
**Đối chiếu:** g'=−3/(x−1)²<0; giảm riêng trên (−∞,1) và (1,+∞).

### THPT-G12-CHI-B04-C04 | skill_id=G12-B04-INTERCEPTS_LIMITS | placement=SGK_CORE | role=SGK_CORE
**Hỏi:** f=(x+2)/(x−1) cắt trục Ox và Oy ở đâu?
**Đối chiếu:** Ox: x=−2 ⇒ (−2,0); Oy: x=0 ⇒ (0,−2).

### THPT-G12-CHI-B04-P01 | skill_id=G12-B04-CENTER_SYMMETRY | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** Tâm đối xứng của y=2+5/(x−4)?
**Đối chiếu:** (4,2), giao hai tiệm cận x=4, y=2.

### THPT-G12-CHI-B04-P02 | skill_id=G12-B04-READ_VARIATION_TABLE | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** Nếu bảng dấu y' trên ℝ là + trên (−∞,−1), − trên (−1,3), + trên (3,∞), loại cực trị tại −1 và 3?
**Đối chiếu:** Cực đại ở −1; cực tiểu ở3. Muốn biết giá trị phải thay vào hàm.

### THPT-G12-CHI-B04-P03 | skill_id=G12-B04-DOMAIN_NONCONNECT | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** Với y=1+2/(x+1), có nên nối hai nhánh qua x=−1?
**Đối chiếu:** Không; x=−1 bị loại khỏi D và là tiệm cận đứng.

### THPT-G12-CHI-B04-P04 | skill_id=G12-B04-CUBIC_VARIATION | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** h=−x³+3x, tìm các khoảng tăng/giảm và cực trị.
**Đối chiếu:** h'=3(1−x²), tăng (−1,1), giảm (−∞,−1),(1,∞); min (−1,−2), max (1,2) là **cực trị cục bộ**, không GTLN/GTNN toàn ℝ.

### THPT-G12-CHI-B04-P05 | skill_id=G12-B04-INTERCEPTS_LIMITS | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** y=x³−3x² cắt hay tiếp xúc Ox tại x=0 và tại x=3?
**Đối chiếu:** x=0 nghiệm kép, tiếp xúc Ox tại (0,0); x=3 nghiệm đơn, cắt Ox tại (3,0).

### THPT-G12-CHI-B04-P06 | skill_id=G12-B04-CENTER_SYMMETRY | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** Tâm đối xứng đồ thị y=x³−3x²?
**Đối chiếu:** (1,−2), vì hoành độ điểm uốn x=−b/(3a)=1 và f(1)=−2; không phải (0,0).

### THPT-G12-CHI-B04-A01 | skill_id=G12-B04-RATIONAL_VARIATION | placement=SGK_APPLICATION | role=SGK_APPLICATION
**Hỏi:** Chi phí bình quân f(q)=4+200/(q−10) cho q>10 đơn vị. Tính giới hạn q→10+, q→∞ và nhận định chi phí theo q.
**Đối chiếu:** f→+∞ khi q→10+, f→4 khi q→∞, f'<0; trên (10,∞) chi phí giảm dần và tiệm cận y=4. Không mở rộng sang q≤10 nếu mô hình quy định q>10.

### THPT-G12-CHI-B04-A02 | skill_id=G12-B04-SURVEY_WORKFLOW | placement=SGK_APPLICATION | role=SGK_APPLICATION
**Hỏi:** Người học vẽ y=x³−3x² đi từ +∞ ở x→−∞ và tăng liên tục tới +∞. Chỉ ra hai lỗi từ dữ liệu khảo sát.
**Đối chiếu:** lim x→−∞ =−∞ (không phải +∞); y'<0 trên (0,2) nên không tăng liên tục.

## D4: Written/Anchor canonical

### THPT-G12-CHI-B04-W01 | skill_id=G12-B04-CUBIC_VARIATION | placement=SGK_WRITTEN | role=WRITTEN
**Đề:** Lập đầy đủ bảng biến thiên và mô tả đồ thị f=x³−3x² (D, y', cực trị, giới hạn, giao Ox và tâm).
**Lời giải tự mở:** D=ℝ, f'=3x(x−2), tăng/giảm/tăng ba khoảng, max cục bộ (0,0), min cục bộ (2,−4), lim hai đầu −∞/+∞; nghiệm x=0 bội2 và x=3 đơn; tâm (1,−2).
**Rubric /4:** 1 miền+đạo hàm+dấu; 1 cực trị+bảng; 1 giới hạn+giao trục; 1 tâm và đồ thị khớp chứng cứ.

### THPT-G12-CHI-B04-W02 | skill_id=G12-B04-DOMAIN_NONCONNECT | placement=SGK_WRITTEN | role=ANCHOR_TAG
**Đề:** Khảo sát y=(x+2)/(x−1) và thuyết minh vì sao hai nhánh không nối.
**Lời giải tự mở:** D ℝ\{1}, y'=−3/(x−1)², giảm từng nhánh; x=1, y=1 tiệm cận; tâm (1,1); Ox (−2,0), Oy (0,−2), hai nhánh tách tại tiệm cận đứng.
**Rubric /4:** 1 D+đạo hàm; 1 đơn điệu từng khoảng; 1 giới hạn/tiệm cận; 1 giao trục+đúng hai nhánh. Anchor chỉ tag một câu.

## D6: Hỗ trợ 5 bước từng outcome → item gốc

### HELP-G12-B04-01 | skill_id=G12-B04-SURVEY_WORKFLOW | return_item=THPT-G12-CHI-B04-C01
1. Lỗi: chưa xác định D đã vẽ. 2. Bản chất: điểm ngoài D không có trên đồ thị. 3. Gợi lại x−2 không bằng0. 4. Tự thử y=1/(x+4): loại x nào? 5. Trở lại C01.

### HELP-G12-B04-02 | skill_id=G12-B04-CUBIC_VARIATION | return_item=THPT-G12-CHI-B04-C02
1. Lỗi: xét nghiệm f'=0 nhưng bỏ đổi dấu. 2. Bản chất: dấu dẫn đến tăng/giảm. 3. Gợi lại tích x(x−2). 4. Tự thử tại x=1 dấu ra sao? 5. Trở lại C02.

### HELP-G12-B04-03 | skill_id=G12-B04-RATIONAL_VARIATION | return_item=THPT-G12-CHI-B04-C03
1. Lỗi: kết luận giảm trên hợp hai khoảng. 2. Bản chất: định lý xét từng khoảng trong D. 3. Gợi lại x=1 không hợp lệ. 4. Tự thử g(0),g(2) có phù hợp "giảm trên hợp" không? 5. Trở lại C03.

### HELP-G12-B04-04 | skill_id=G12-B04-INTERCEPTS_LIMITS | return_item=THPT-G12-CHI-B04-C04
1. Lỗi: đặt y=0 và x=0 lẫn nhau. 2. Bản chất: Ox thì y=0, Oy thì x=0. 3. Gợi lại tử x+2. 4. Tự thử với (x+3)/(x−1). 5. Trở lại C04.

### HELP-G12-B04-05 | skill_id=G12-B04-CENTER_SYMMETRY | return_item=THPT-G12-CHI-B04-P01
1. Lỗi: lấy tâm (0,0) mọi đồ thị. 2. Bản chất: tâm là giao các tiệm cận trong mẫu y=a+k/(x−b). 3. Gợi lại y=2 đường ngang. 4. Tự thử y=−1+3/(x−2) tâm đâu? 5. Trở lại P01.

### HELP-G12-B04-06 | skill_id=G12-B04-READ_VARIATION_TABLE | return_item=THPT-G12-CHI-B04-P02
1. Lỗi: nhầm +→− với tiểu. 2. Bản chất: đi lên rồi xuống tức đỉnh. 3. Gợi lại y=x² ở0: −→+. 4. Tự thử y'=−→+ tại 5. 5. Trở lại P02.

### HELP-G12-B04-07 | skill_id=G12-B04-DOMAIN_NONCONNECT | return_item=THPT-G12-CHI-B04-P03
1. Lỗi: nối nét qua điểm cấm. 2. Bản chất: giới hạn đứng tạo nhánh vô hạn. 3. Gợi lại 1/(x+1). 4. Tự thử giá trị khi x→−1±. 5. Trở lại P03.

## AUTHOR_CHECKPOINT
B04 R00: 7 outcomes, 5 worked D2, 4 Core +6 Practice+2 Application +2 Written=14 canonical original IDs, 7 D6 HELP linked same outcome. Two original mathematically scaled SVG files completed; freeze their Git blob SHA in the reviewer source. Academic/PED **not yet reviewed**, no official testing or Mastery.
