# Toán 12 KNTT — Chương I, Bài 3: Đường tiệm cận của đồ thị hàm số — AUTHOR R00

LESSON_ID: G12-B03
SGK_S1: Tập Một trang in 20–25 = PDF1 trang 22–27
SBT_S1: Tập Một trang in 17–20 = PDF1 trang 15–18
SOURCE_PDF_SHA256_SGK: faeb554bea9cf81189c5e790b1b1edb42f50b3648694acc80dc99682ada3f1fd
SOURCE_PDF_SHA256_SBT: db9d07a2fbe55cda3b4b50fb13d1767e45a7552f668b726241c59febac69c0ca
STANDARD_ID: SLM-THPT-QUALITY-ONE
ACADEMIC_VERDICT: NOT_REVIEWED
PEDAGOGICAL_VERDICT: NOT_REVIEWED
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY

## OUTCOME_IDS
- G12-B03-HORIZONTAL_LIMIT
- G12-B03-VERTICAL_ONE_SIDED
- G12-B03-OBLIQUE_REMAINDER
- G12-B03-REMOVABLE_DISCONTINUITY
- G12-B03-DOMAIN_SIDED_LIMITS
- G12-B03-GRAPH_INTERPRETATION

## D1 / PED1: Vì sao cần học?

Một mô hình chi phí/đơn vị hoặc đường cong thực nghiệm có thể dần tiến tới mức trần mà không bao giờ chạm đúng mức ấy; một đồ thị có thể tăng/giảm vô hạn gần giá trị đầu vào bị cấm. Các đường thẳng mà đồ thị tiến sát trong các miền đó được gọi là **tiệm cận**. Nhận diện tiệm cận giúp dự đoán xu thế xa và tránh thay trực tiếp một điểm làm mẫu số bằng 0.

## D1 / PED2: Tiền đề

Giới hạn x→±∞, giới hạn một bên x→x0±, phép chia đa thức và rút gọn phân thức, miền xác định, kí hiệu phương trình đường thẳng x=a hoặc y=ax+b. Tự ôn nhanh: 1/(x−2)→+∞ khi x→2+ nhưng →−∞ khi x→2−; một phía đã đủ cho tiệm cận đứng.

## D1 / PED3: Bản chất trước công thức

- **Tiệm cận ngang** y=L nếu ít nhất một trong hai giới hạn lim(x→+∞)f(x)=L hoặc lim(x→−∞)f(x)=L hữu hạn. Một đồ thị có thể có **hai đường tiệm cận ngang khác nhau** ở hai phía.
- **Tiệm cận đứng** x=a nếu có ít nhất một giới hạn một bên lim(x→a−)f(x) hoặc lim(x→a+)f(x) bằng +∞ hoặc −∞. Chỉ thấy "mẫu bằng 0" là **ứng viên**, không đủ.
- **Tiệm cận xiên** y=mx+n với m≠0 khi f(x)−(mx+n)→0 lúc x→+∞ hoặc −∞. Nếu muốn tìm hệ số bằng giới hạn và chúng tồn tại: m=lim f(x)/x; n=lim[f(x)−mx] ở cùng một phía. Phép chia đa thức thường nhanh hơn cho phân thức hữu tỉ.
- **Điểm gián đoạn có thể khử:** (x²−1)/(x−1)=(x+1) với x≠1 có lỗ tại (1,2), không có tiệm cận đứng x=1 vì lim x→1 f=2 hữu hạn; không tự "điền" điểm x=1 khi mô tả đồ thị gốc.
- Sự tồn tại tiệm cận là kết luận về **giới hạn**, không phải việc đồ thị không được cắt đường đó. Đồ thị có thể giao tiệm cận ngang hoặc xiên tại một điểm khác.

## D2 / PED5: Ví dụ có chọn cách giải và đọc hình

### EX-G12-B03-01
f(x)=(3x+1)/(x−2)=3+7/(x−2), x≠2. Tại x→±∞, 7/(x−2)→0 ⇒ tiệm cận ngang y=3. Tại x→2−, f→−∞; x→2+, f→+∞ ⇒ tiệm cận đứng x=2. **Vì sao chia về dạng hằng+phần dư?** Ta nhìn ngay cả hai xu thế. Không nói "x=2 là giá trị lớn nhất" vì x=2 bị loại.

### EX-G12-B03-02
g(x)=(x²+1)/(x−1)=x+1+2/(x−1). Vì phần dư→0 khi x→±∞ nên tiệm cận xiên y=x+1; g không có tiệm cận ngang. x=1 có lim một bên ±∞ ⇒ tiệm cận đứng x=1. **Vì sao là xiên?** Phần tuyến tính có hệ số x là 1 khác 0.

### EX-G12-B03-03
h(x)=(x²−1)/(x−1), D=ℝ\{1}; với x≠1, h=x+1. lim(x→1)h=2 hữu hạn. **Không có tiệm cận đứng** x=1 dù mẫu ban đầu bằng0. Đồ thị y=x+1 nhưng khuyết điểm (1,2), không tùy ý sửa D thành ℝ.

### EX-G12-B03-04
k(x)=x/sqrt(x²+1). x→+∞, k=1/sqrt(1+1/x²)→1. x→−∞, vì sqrt(x²+1)=|x|sqrt(1+1/x²)=−x sqrt(...) nên k→−1. Hai tiệm cận ngang **y=1 ở +∞ và y=−1 ở −∞**, phải tách dấu |x|; dùng máy móc căn x²=x sẽ sai ở phía âm.

### EX-G12-B03-05
m(x)=e^(−x), D=ℝ. Khi x→+∞, m→0, có y=0 tiệm cận ngang. Khi x→−∞, m→+∞, **không** có tiệm cận ngang tại phía âm; không có tiệm cận đứng vì m liên tục hữu hạn ở mọi x hữu hạn. Có thể tiến tới đường ngang một phía mà không có hai phía.

## PED4 / D5: Hướng dẫn đọc SVG

FIG-G12-B03-01: đường gốc (3x+1)/(x−2), hai nhánh tách bởi **đường đứng x=2**, cùng tiến sát **đường ngang y=3** khi |x| tăng. Đọc phía x=2− xuống −∞, phía x=2+ lên +∞; không nhầm đường kẻ nét đứt là một phần đồ thị. Không suy đoán "giao thì không phải tiệm cận".

## PED6: TỰ THỬ trước Core

A. Với f=2+1/(x−4), đoán đường nào là tiệm cận đứng/ngang, vì sao phải nói giới hạn? 
B. (x²−4)/(x−2) có "mẫu bằng0" tại 2: tiệm cận đứng hay lỗ? Tự rút gọn trước.
C. Nếu f(x)−(2x+3)→0 khi x→∞, dạng tiệm cận nào phù hợp? 
Tự trả lời bằng lời trước khi mở Core; sai thì dùng HELP đúng outcome.

## D3: Câu hỏi canonical

### THPT-G12-CHI-B03-C01 | skill_id=G12-B03-HORIZONTAL_LIMIT | placement=SGK_CORE | role=SGK_CORE
**Hỏi:** lim(x→∞)[5+2/(x−1)] và phương trình tiệm cận ngang?
**Đối chiếu:** Giới hạn 5; y=5.

### THPT-G12-CHI-B03-C02 | skill_id=G12-B03-VERTICAL_ONE_SIDED | placement=SGK_CORE | role=SGK_CORE
**Hỏi:** f=1/(x+3). Điểm x=−3 có là tiệm cận đứng? Nêu giới hạn hai phía.
**Đối chiếu:** lim x→−3− f=−∞, lim x→−3+ f=+∞; x=−3 là tiệm cận đứng.

### THPT-G12-CHI-B03-C03 | skill_id=G12-B03-OBLIQUE_REMAINDER | placement=SGK_CORE | role=SGK_CORE
**Hỏi:** g(x)=x−2+3/(x+1). Tiệm cận xiên khi x→∞?
**Đối chiếu:** y=x−2, vì phần dư →0; g=x−2 không phải y=x+1.

### THPT-G12-CHI-B03-C04 | skill_id=G12-B03-REMOVABLE_DISCONTINUITY | placement=SGK_CORE | role=SGK_CORE
**Hỏi:** f=(x²−9)/(x−3) có tiệm cận đứng x=3 không?
**Đối chiếu:** Không; x≠3, f=x+3; lim x→3 f=6, chỉ là lỗ tại (3,6).

### THPT-G12-CHI-B03-P01 | skill_id=G12-B03-HORIZONTAL_LIMIT | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** f=(2x−1)/(x+2). Tìm tiệm cận ngang.
**Đối chiếu:** Chia 2−5/(x+2) nên y=2.

### THPT-G12-CHI-B03-P02 | skill_id=G12-B03-VERTICAL_ONE_SIDED | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** g=(x+1)/(x−2). Tính giới hạn một bên khi x→2±.
**Đối chiếu:** Tử gần3>0, mẫu âm/dương nên lim 2−=−∞, 2+=+∞; x=2 tiệm cận đứng.

### THPT-G12-CHI-B03-P03 | skill_id=G12-B03-OBLIQUE_REMAINDER | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** h=(x²+2x+3)/(x+1). Tìm tiệm cận xiên và đứng.
**Đối chiếu:** h=x+1+2/(x+1); xiên y=x+1, đứng x=−1.

### THPT-G12-CHI-B03-P04 | skill_id=G12-B03-DOMAIN_SIDED_LIMITS | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** f(x)=1/sqrt(x−1), D=(1,+∞). x=1 có là tiệm cận đứng dù không thể xét từ bên trái?
**Đối chiếu:** Có, lim x→1+=+∞ đủ để kết luận; chỉ dùng giới hạn trong D.

### THPT-G12-CHI-B03-P05 | skill_id=G12-B03-REMOVABLE_DISCONTINUITY | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** k=(x²−4)/(x−2), x≠2. Vẽ mô tả đồ thị có nên vẽ chấm đặc tại (2,4)?
**Đối chiếu:** Không. k=x+2 chỉ khi x≠2; (2,4) là lỗ, không có tiệm cận đứng.

### THPT-G12-CHI-B03-P06 | skill_id=G12-B03-GRAPH_INTERPRETATION | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** Với f=3+7/(x−2), nhánh phải x>2 nằm trên hay dưới y=3? Nhánh trái?
**Đối chiếu:** x>2 ⇒ 7/(x−2)>0 ⇒ trên; x<2 ⇒ dưới. Không cần vẽ thêm đường sai.

### THPT-G12-CHI-B03-P07 | skill_id=G12-B03-HORIZONTAL_LIMIT | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Hỏi:** f=x/sqrt(x²+1) có bao nhiêu đường tiệm cận ngang? Phía nào?
**Đối chiếu:** Hai: y=1 khi x→+∞, y=−1 khi x→−∞, dùng sqrt(x²)=|x|.

### THPT-G12-CHI-B03-A01 | skill_id=G12-B03-DOMAIN_SIDED_LIMITS | placement=SGK_APPLICATION | role=SGK_APPLICATION
**Hỏi:** Chi phí trung bình đơn vị C(q)=20+120/q (nghìn đồng/sp), q>0. Phân tích q→+∞ và q→0+, chỉ ra tiệm cận; ý nghĩa mô hình.
**Đối chiếu:** y=20 khi q→∞, q=0 là tiệm cận đứng từ phải (C→∞). q=0 không thể là mức sản lượng có chi phí trung bình xác định.

## D4: Written, Anchor một thư viện

### THPT-G12-CHI-B03-W01 | skill_id=G12-B03-GRAPH_INTERPRETATION | placement=SGK_WRITTEN | role=WRITTEN
**Đề:** Khảo sát tiệm cận và vị trí hai nhánh của f=(3x+1)/(x−2) so với các tiệm cận.
**Đối chiếu:** D=ℝ\{2}; f=3+7/(x−2), y=3 ngang, x=2 đứng; x<2 dưới y=3 và xuống −∞ khi x→2−, x>2 trên y=3 và lên +∞ khi x→2+.
**Rubric /4:** 1 D+biến đổi; 1 tiệm cận ngang; 1 đứng với dấu một bên; 1 mô tả nhánh tương ứng.

### THPT-G12-CHI-B03-W02 | skill_id=G12-B03-OBLIQUE_REMAINDER | placement=SGK_WRITTEN | role=ANCHOR_TAG
**Đề:** Với g=(x²+1)/(x−1), tìm tiệm cận xiên và đứng, giải thích không có ngang.
**Đối chiếu:** D=ℝ\{1}; g=x+1+2/(x−1); y=x+1 xiên; x=1 đứng; vì g lớn theo x khi |x|→∞ nên không có tiệm cận ngang.
**Rubric /4:** 1 D; 1 chia đa thức đúng; 1 đứng và giới hạn; 1 xiên, chứng minh phần dư→0 và bác ngang. Anchor chỉ nhãn.

## D6: Khắc phục sai lầm, 5 bước, một return target/outcome

### HELP-G12-B03-01 | skill_id=G12-B03-HORIZONTAL_LIMIT | return_item=THPT-G12-CHI-B03-C01
1. Lỗi: lấy x=∞ như một số. 2. Bản chất: xét xu hướng khi |x| tăng. 3. Gợi lại: 1/(1000−1) rất nhỏ. 4. Tự thử 8+1/x khi x→∞. 5. Về C01.

### HELP-G12-B03-02 | skill_id=G12-B03-VERTICAL_ONE_SIDED | return_item=THPT-G12-CHI-B03-C02
1. Lỗi: quên dấu mẫu hai phía. 2. Bản chất: 1/số âm rất nhỏ có độ lớn lớn, mang dấu âm. 3. Gợi lại 1/(−0.01),1/(0.01). 4. Tự thử x→1± của 1/(x−1). 5. Về C02.

### HELP-G12-B03-03 | skill_id=G12-B03-OBLIQUE_REMAINDER | return_item=THPT-G12-CHI-B03-C03
1. Lỗi: thấy x và chọn ngang. 2. Bản chất: đường xiên phải có phần dư tiến về0. 3. Gợi lại x+1+1/x. 4. Tự thử y=2x−3+1/(x+4). 5. Về C03.

### HELP-G12-B03-04 | skill_id=G12-B03-REMOVABLE_DISCONTINUITY | return_item=THPT-G12-CHI-B03-C04
1. Lỗi: mọi nghiệm mẫu0 đều là tiệm cận. 2. Bản chất: có thể rút gọn tử. 3. Gợi lại x²−a²=(x−a)(x+a). 4. Tự thử (x²−1)/(x−1). 5. Về C04.

### HELP-G12-B03-05 | skill_id=G12-B03-DOMAIN_SIDED_LIMITS | return_item=THPT-G12-CHI-B03-P04
1. Lỗi: bắt buộc có hai phía. 2. Bản chất: một giới hạn vô cực đủ. 3. Gợi lại sqrt(x−1) chỉ có nghĩa khi x≥1. 4. Tự thử 1/sqrt(x−4) khi x→4+. 5. Về P04.

### HELP-G12-B03-06 | skill_id=G12-B03-GRAPH_INTERPRETATION | return_item=THPT-G12-CHI-B03-P06
1. Lỗi: nhầm dấu phần dư trong hai nhánh. 2. Bản chất: f−3=7/(x−2). 3. Gợi lại tại x=1 giá trị phần dư âm, tại3 dương. 4. Tự thử đối chiếu x=0 và4. 5. Về P06.

## AUTHOR_CHECKPOINT
B03 R00: 6 outcomes, 5 worked D2, 4 Core+7 Practice+1 Application+2 Written=14 unique public IDs, 6 D6 same-skill HELP. Academic/PED review not yet conducted, no official RD1/Mastery.
