# G12 SGK ChI — B01 Tính đơn điệu và cực trị của hàm số — original AUTHORING R00 candidate

PACKET_ID: G12-SGK-CHI-B01-B05-CANDIDATE
LESSON_ID: G12-B01
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.0.0
LEARNING_PATH: SGK_CHAPTER
S1_SCOPE: SGK KNTT Toán 12 Tập Một printed pp5–14 = PDF1 pp7–16; SBT Tập Một printed pp4–9 = PDF1 pp2–7
S1_PRIMARY_SOURCE_SHA256_SGK_T1: faeb554bea9cf81189c5e790b1b1edb42f50b3648694acc80dc99682ada3f1fd
S1_PRIMARY_SOURCE_SHA256_SBT_T1: db9d07a2fbe55cda3b4b50fb13d1767e45a7552f668b726241c59febac69c0ca
AUTHORING_STAGE: FIRST_LESSON_R00_DRAFT
ACADEMIC_VERDICT: NOT_REVIEWED
PEDAGOGICAL_VERDICT: NOT_REVIEWED
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
PRIVATE_RD1: NOT_IN_THIS_PUBLIC_SOURCE

## LESSON_IDS
- G12-B01

## OUTCOME_IDS
- G12-B01-MONOTONICITY_MEANING
- G12-B01-DERIVATIVE_SIGN
- G12-B01-DOMAIN_INTERVALS
- G12-B01-EXTREMA_SIGN_CHANGE
- G12-B01-ZERO_DERIVATIVE_NOT_SUFFICIENT
- G12-B01-MOTION_CONTEXT

## 1. D1 + PED1 — Vì sao cần học? Từ chuyển động đến hướng biến thiên

Tại một thời điểm, một vật có thể đi về bên phải rồi đổi hướng đi về bên trái. Vị trí s(t) tăng hay giảm phụ thuộc vào dấu vận tốc tức thời v(t), không phụ thuộc vào việc vị trí s(t) đang dương hay âm. Khi thay vị trí s(t) bằng độ cao, lợi nhuận, hay bất kỳ đại lượng f(x), ta cần biết f đang **tăng hay giảm**, và khi nào chuyển từ tăng sang giảm (đỉnh) hoặc ngược lại (đáy). Đạo hàm giúp chuyển câu hỏi này thành kiểm tra **dấu**; bản thân phép tính f′(x) chưa thay thế bước hiểu ý nghĩa biến thiên.

**Mục tiêu có thể tự kiểm:** người học phải giải thích vì sao f′>0 cho hướng tăng, lập bảng dấu/bảng biến thiên có các khoảng xác định đúng, phân biệt cực trị với điểm chỉ có f′=0, và phân tích tình huống chuyển động trong khoảng t≥0.

## 2. D1 + PED2 — Kiến thức tiền đề cần tự kiểm

- Miền xác định D của biểu thức (không chia 0, tôn trọng điều kiện nếu là thời gian/kích thước).
- So sánh x1<x2 và giá trị f(x1), f(x2); hiểu khoảng mở/đóng.
- Đạo hàm cơ bản: (x^n)′=n x^(n−1), (1/u)′=−u′/u² khi u≠0, đạo hàm tổng và tích.
- Trục hoành của đồ thị là đầu vào x; đỉnh/đáy cục bộ khác giá trị lớn nhất/nhỏ nhất toàn bộ D.

Nếu chưa tự tính được (x³−3x)′, nên quay về phần đạo hàm lớp 11 trước khi vào ví dụ tiếp theo; kết nối chỉ để hỗ trợ, không thay giải thích dưới đây.

## 3. D1 + PED3 — Hiểu bản chất trước định lý

### 3.1. Đồng biến và nghịch biến

Trên một **khoảng** K thuộc D, hàm f đồng biến nghiêm ngặt khi với mọi x1,x2∈K, x1<x2 kéo theo f(x1)<f(x2); nghịch biến khi f(x1)>f(x2). Chẳng hạn f(x)=x² không tăng trên cả ℝ: khi x đi từ −2 tới −1 thì f giảm từ 4 xuống 1, nhưng từ 1 đến 2 thì f tăng từ 1 lên 4.

Nếu f khả vi trên K và f′(x)>0 tại mọi x thuộc K thì f tăng nghiêm ngặt trên K; f′(x)<0 thì giảm nghiêm ngặt. Đạo hàm **không đổi dấu** giải thích hướng biến thiên của tiếp tuyến, nhưng phải xét **trong từng khoảng liên thông của miền xác định**.

### 3.2. Bảng dấu đạo hàm và cực trị

Đầu tiên tìm D, sau đó tìm f′, giải phương trình f′=0 và các điểm mà f′ không tồn tại trong D, rồi chia D thành các khoảng có dấu đạo hàm ổn định. Cuối cùng mới suy ra khoảng tăng/giảm. Tại điểm **nội** x0∈D mà hàm liên tục và f′ chuyển từ dương sang âm, f đạt cực đại tại x0; chuyển âm sang dương, f đạt cực tiểu. Nếu f có cực trị tại điểm trong D và khả vi tại đó thì f′(x0)=0; chiều đảo lại **không đúng**.

Một điểm gián đoạn hoặc không thuộc D **không** được vẽ thành cực trị. Giá trị tại điểm cực trị (f(x0)) khác với tọa độ x0 của điểm đạt cực trị.

### 3.3. Hai phản ví dụ cần hiểu để không học mẹo

- f(x)=x³: f′(x)=3x², f′(0)=0 nhưng không đổi từ dương sang âm/âm sang dương; f tăng trên ℝ, **không có cực trị tại 0**.
- f(x)=|x|: tại 0, f′ không tồn tại nhưng hàm đạt **cực tiểu** f(0)=0; vậy điều kiện đạo hàm bằng 0 không phải điều kiện bắt buộc khi hàm không khả vi.

## 4. D2 + PED5 — Ví dụ có suy luận và lý do chọn phương pháp

### EX-G12-B01-01 | outcome=G12-B01-DERIVATIVE_SIGN
**Bài toán biên soạn mới:** Xét f(x)=x²−4x+1 trên ℝ. Xác định khoảng đơn điệu và cực trị.

**Lý do chọn phương pháp:** Đây là đa thức nên f khả vi mọi x; dấu đạo hàm cho ta bảng biến thiên có đủ mọi khoảng trong D. Tính f′(x)=2x−4. Khi x<2, f′<0; khi x>2, f′>0. Vì dấu đổi **âm sang dương**, x=2 là điểm cực tiểu, giá trị f(2)=−3. Hàm giảm trên (−∞,2), tăng trên (2,+∞). Kiểm tra bằng f=(x−2)²−3 khớp kết luận; đây là đối chiếu, không thay cho chứng minh dấu ở bước học này.

### EX-G12-B01-02 | outcome=G12-B01-EXTREMA_SIGN_CHANGE
**Bài toán biên soạn mới:** Xét f(x)=x³−3x trên ℝ; tìm cực trị và đọc SVG.

f′(x)=3x²−3=3(x+1)(x−1). Khi x<−1: hai nhân tử cùng âm nên f′>0; khi −1<x<1: tích âm nên f′<0; x>1: tích dương nên f′>0. Vì vậy f tăng trên (−∞,−1), giảm trên (−1,1), tăng trên (1,+∞); cực đại tại x=−1 với f(−1)=2, cực tiểu tại x=1 với f(1)=−2. **Tại sao không chỉ giải f′=0?** Hai nghiệm chỉ là ứng viên; phải kiểm tra sự đổi dấu.

### EX-G12-B01-03 | outcome=G12-B01-DOMAIN_INTERVALS
**Bài toán biên soạn mới:** Xét f(x)=1/(x−1).

D=ℝ\{1}; f′(x)=−1/(x−1)²<0 với mọi x∈D. Kết luận chính xác: hàm nghịch biến trên **mỗi** khoảng (−∞,1) và (1,+∞). Không viết \"nghịch biến trên cả miền D\" theo định nghĩa so sánh x1<x2 nằm hai bên điểm loại trừ: f(0)=−1 và f(2)=1, trái chiều giảm. Đây là giới hạn của phép kiểm tra đạo hàm theo khoảng.

### EX-G12-B01-04 | outcome=G12-B01-MOTION_CONTEXT
**Tình huống mới khác số SGK:** Vị trí trên trục là s(t)=t³−6t²+9t (m), t≥0 (s).

v(t)=s′(t)=3t²−12t+9=3(t−1)(t−3) m/s. Trong 0<t<1 và t>3: v>0, vật đi theo chiều dương; trong 1<t<3: v<0, vật đi theo chiều âm. t=1 và t=3 là thời điểm tức thời đứng yên, trước khi đổi chiều; s(1)=4 m, s(3)=0 m. Không đồng nhất \"vận tốc âm\" với \"vị trí âm\". Phân biệt \"đi theo chiều dương\" với \"tốc độ tăng\" (cần thêm gia tốc và dấu va).

## 5. PED4 + D5 — Hướng dẫn học sinh đọc hình

FIG-G12-B01-01: `G12_B01_FIG01_DERIVATIVE_SIGN_R00.svg` — original authored SVG, không sao chép ảnh SGK. Bước đọc: (1) nhìn trục x và xác định x=−1, x=1; (2) đọc lần lượt dấu f′: +, 0, −, 0, +; (3) liên hệ hướng đồ thị f: tăng, giảm, tăng; (4) chỉ ra đỉnh (−1,2) là cực đại và đáy (1,−2) là cực tiểu; (5) kiểm tra trên hàm riêng f=x³, dù f′(0)=0 nhưng đồ thị không đổi từ tăng sang giảm tại đó.

## 6. PED6 — TỰ THỬ trước Core (không ghi điểm)

Tự thử A: Với f′(x) dương trước x0 và âm sau x0, hàm sẽ chuyển hướng như thế nào? Trả lời bằng lời trước khi đọc phần Core; không có điểm chính thức.

Tự thử B: Nếu đạo hàm bằng 0 tại x0, có chắc chắn x0 là cực trị không? Nghĩ tới x³.

Tự thử C: Một hàm phân thức không xác định tại x=1 có thể được kết luận nghịch biến trên cả hai miền hợp lại chỉ từ f′<0 hay không? Hãy thử x=0 và x=2.

## 7. D3 — Canonical Core / Practice / Application (chỉ mở đối chiếu sau khi tự làm)

### THPT-G12-CHI-B01-C01 | skill_id=G12-B01-MONOTONICITY_MEANING | placement=SGK_CORE | role=SGK_CORE
**Câu hỏi:** Hàm f(x)=x² giảm trên khoảng nào trong (−∞,0), (0,+∞)?
**Đáp án/lí do chỉ mở sau khi làm:** (−∞,0): khi x tiến về 0 từ bên trái, giá trị x² giảm; trên (0,+∞) hàm tăng.

### THPT-G12-CHI-B01-C02 | skill_id=G12-B01-DERIVATIVE_SIGN | placement=SGK_CORE | role=SGK_CORE
**Câu hỏi:** Cho f(x)=x²−4x+1. Xác định dấu f′ và khoảng tăng/giảm.
**Đáp án/lí do chỉ mở sau khi làm:** f′=2x−4, âm x<2, dương x>2 ⇒ giảm (−∞,2), tăng (2,+∞).

### THPT-G12-CHI-B01-C03 | skill_id=G12-B01-EXTREMA_SIGN_CHANGE | placement=SGK_CORE | role=SGK_CORE
**Câu hỏi:** f′ đổi dấu + sang − tại x=−1 và − sang + tại x=1. Xác định loại cực trị tại mỗi điểm nếu f liên tục và khả vi quanh chúng.
**Đáp án/lí do chỉ mở sau khi làm:** Cực đại tại −1, cực tiểu tại 1; dấu đổi mới quyết định loại cực trị.

### THPT-G12-CHI-B01-C04 | skill_id=G12-B01-ZERO_DERIVATIVE_NOT_SUFFICIENT | placement=SGK_CORE | role=SGK_CORE
**Câu hỏi:** f(x)=x³ có f′(0)=0. x=0 có là điểm cực trị không, vì sao?
**Đáp án/lí do chỉ mở sau khi làm:** Không; f′=3x²>0 ở hai phía (trừ x=0), nên hàm vẫn tăng qua x=0.

### THPT-G12-CHI-B01-P01 | skill_id=G12-B01-DOMAIN_INTERVALS | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Câu hỏi:** Với f(x)=1/(x−2), nêu miền xác định và tất cả khoảng nghịch biến, giải thích tại sao phải tách.
**Đáp án/lí do chỉ mở sau khi làm:** D=ℝ\{2}, f′=−1/(x−2)²<0. Giảm trên (−∞,2) và (2,+∞), không nối qua x=2 không thuộc D.

### THPT-G12-CHI-B01-P02 | skill_id=G12-B01-DERIVATIVE_SIGN | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Câu hỏi:** Cho f′(x)=(x+1)(x−2) trên ℝ. Hãy nêu các khoảng tăng/giảm của f.
**Đáp án/lí do chỉ mở sau khi làm:** f′>0 khi x<−1 hoặc x>2, f′<0 khi −1<x<2 ⇒ tăng, giảm, tăng theo ba khoảng.

### THPT-G12-CHI-B01-P03 | skill_id=G12-B01-EXTREMA_SIGN_CHANGE | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Câu hỏi:** f(x)=x³−3x. Tìm hoành độ và giá trị của các cực trị.
**Đáp án/lí do chỉ mở sau khi làm:** f′=3(x+1)(x−1); cực đại tại −1, giá trị 2; cực tiểu tại 1, giá trị −2.

### THPT-G12-CHI-B01-P04 | skill_id=G12-B01-ZERO_DERIVATIVE_NOT_SUFFICIENT | placement=SGK_PRACTICE | role=SGK_PRACTICE
**Câu hỏi:** Hàm f(x)=|x| có cực tiểu tại 0 không, mặc dù f′(0) không tồn tại?
**Đáp án/lí do chỉ mở sau khi làm:** Có, f(x)≥f(0)=0; điều kiện f′(0)=0 chỉ là điều kiện cần đối với cực trị nội tại điểm có đạo hàm.

### THPT-G12-CHI-B01-A01 | skill_id=G12-B01-MOTION_CONTEXT | placement=SGK_APPLICATION | role=SGK_APPLICATION
**Câu hỏi:** Vật có vị trí s(t)=t³−6t²+9t m, t≥0 s. Xác định các khoảng thời gian vật chuyển động theo chiều dương và âm.
**Đáp án/lí do chỉ mở sau khi làm:** v(t)=3(t−1)(t−3). Chiều dương khi 0<t<1 và t>3; chiều âm khi 1<t<3; t=1,3 dừng tức thời.

## 8. D4 — Một thư viện Written; Anchor chỉ là nhãn, không nhân bản

### THPT-G12-CHI-B01-W01 | skill_id=G12-B01-EXTREMA_SIGN_CHANGE | placement=SGK_WRITTEN | role=WRITTEN
**Đề:** Khảo sát sự đồng biến, nghịch biến và cực trị của f(x)=x³−3x, tự vẽ phác thảo bảng dấu. Trình bày vì sao f′=0 riêng lẻ chưa phải kết luận.
**Rubric tự đối chiếu /4 (chỉ sau khi làm):** 1 điểm xác định D=ℝ và f′=3(x²−1); 1 điểm tìm đúng −1,1 và dấu +,−,+; 1 điểm nêu đúng các khoảng tăng/giảm; 1 điểm tính đúng cực đại (−1,2), cực tiểu (1,−2) và giải thích đổi dấu.
**Không tự cấp điểm Mastery:** học sinh chỉ tự so sánh với rubric, không dùng làm kiểm tra độc lập RD1.

### THPT-G12-CHI-B01-W02 | skill_id=G12-B01-DOMAIN_INTERVALS | placement=SGK_WRITTEN | role=ANCHOR_TAG
**Đề:** Xét f(x)=1/(x−2). Chứng minh f nghịch biến trên mỗi thành phần khoảng của miền xác định; nêu một cặp x1<x2 ở hai phía x=2 cho thấy không thể gộp các khoảng vào một phát biểu \"nghịch biến trên D\".
**Rubric tự đối chiếu /4:** 1 điểm D=ℝ\{2}; 1 điểm f′=−1/(x−2)²<0; 1 điểm hai khoảng (−∞,2),(2,+∞); 1 điểm phản ví dụ f(1)=−1, f(3)=1 với 1<3 nhưng f(1)<f(3), nên không nghịch biến trên D theo định nghĩa toàn miền.
**Anchor chỉ gắn nhãn** cho cùng item_id W02, không tạo bản chép chấm điểm thứ hai.

## 9. D6 — Giúp học sinh khắc phục lỗ hổng (5 bước; quay lại đúng canonical)

### HELP-G12-B01-01 | skill_id=G12-B01-MONOTONICITY_MEANING | return_item=THPT-G12-CHI-B01-C01
1. Chẩn đoán: nhầm khoảng âm với giá trị hàm âm.  
2. Bản chất: nhìn hai đầu vào x1<x2, không xem x âm hay dương riêng lẻ.  
3. Gợi lại: tính g(−3), g(−2) với g(x)=x².  
4. Tự thử riêng: trên (0,+∞), g(x) tăng hay giảm?  
5. Quay lại C01, tự trả lời bằng định nghĩa.

### HELP-G12-B01-02 | skill_id=G12-B01-DERIVATIVE_SIGN | return_item=THPT-G12-CHI-B01-C02
1. Chẩn đoán: tìm f′=0 nhưng không xét dấu.  
2. Bản chất: dấu f′ là hướng dịch chuyển của f khi x tăng.  
3. Gợi lại: với h′=x−3, so sánh dấu khi x=2 và x=4.  
4. Tự thử riêng: từ hai dấu đó dự đoán h giảm/tăng ở hai phía 3.  
5. Quay lại C02, tự viết hai khoảng.

### HELP-G12-B01-03 | skill_id=G12-B01-DOMAIN_INTERVALS | return_item=THPT-G12-CHI-B01-P01
1. Chẩn đoán: bỏ quên điểm làm mẫu số 0.  
2. Bản chất: định lý đạo hàm xét trên từng khoảng nằm hẳn trong D.  
3. Gợi lại: k(x)=1/x, x=0 không thuộc D.  
4. Tự thử riêng: k(−1)=−1, k(1)=1; việc nối hai phía có thể làm sai phát biểu toàn miền.  
5. Quay lại P01, viết D trước dấu f′.

### HELP-G12-B01-04 | skill_id=G12-B01-EXTREMA_SIGN_CHANGE | return_item=THPT-G12-CHI-B01-C03
1. Chẩn đoán: lẫn lộn cực đại và cực tiểu hoặc nhầm x0 với f(x0).  
2. Bản chất: + sang − tức đi lên rồi đi xuống, tạo đỉnh.  
3. Gợi lại: nhìn hình D5 tại x=−1 và x=1.  
4. Tự thử riêng: nếu f′ đổi − sang + tại x=3, đó là loại cực trị nào?  
5. Quay lại C03, nêu riêng x0 và giá trị f(x0) khi biết hàm.

### HELP-G12-B01-05 | skill_id=G12-B01-ZERO_DERIVATIVE_NOT_SUFFICIENT | return_item=THPT-G12-CHI-B01-C04
1. Chẩn đoán: coi mọi nghiệm f′=0 là cực trị.  
2. Bản chất: cần chuyển từ tăng sang giảm hoặc ngược lại, nếu hàm khả vi.  
3. Gợi lại: đạo hàm x³ là 3x² không đổi dấu ở 0.  
4. Tự thử riêng: y=x⁵ có điểm dừng tại 0 nhưng có đảo hướng không?  
5. Quay lại C04, tự giải thích bằng dấu.

### HELP-G12-B01-06 | skill_id=G12-B01-MOTION_CONTEXT | return_item=THPT-G12-CHI-B01-A01
1. Chẩn đoán: lấy s(t)>0 để đoán chiều chuyển động.  
2. Bản chất: chiều phụ thuộc v=s′, không phải dấu s.  
3. Gợi lại: vị trí giảm từ 10 m xuống 8 m trong một giây nghĩa là vận tốc trung bình âm.  
4. Tự thử riêng: nếu v(t)=2(t−4), trước và sau 4 s chiều nào?  
5. Quay lại A01, xét riêng miền thời gian t≥0.

## 10. ITEM_OUTCOME_MATRIX — one canonical item, one primary outcome, role/placement only

| ITEM_ID | PRIMARY_OUTCOME_ID | PLACEMENT | ROLE |
|---|---|---|---|
| THPT-G12-CHI-B01-C01 | G12-B01-MONOTONICITY_MEANING | SGK_CORE | SGK_CORE |
| THPT-G12-CHI-B01-C02 | G12-B01-DERIVATIVE_SIGN | SGK_CORE | SGK_CORE |
| THPT-G12-CHI-B01-C03 | G12-B01-EXTREMA_SIGN_CHANGE | SGK_CORE | SGK_CORE |
| THPT-G12-CHI-B01-C04 | G12-B01-ZERO_DERIVATIVE_NOT_SUFFICIENT | SGK_CORE | SGK_CORE |
| THPT-G12-CHI-B01-P01 | G12-B01-DOMAIN_INTERVALS | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G12-CHI-B01-P02 | G12-B01-DERIVATIVE_SIGN | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G12-CHI-B01-P03 | G12-B01-EXTREMA_SIGN_CHANGE | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G12-CHI-B01-P04 | G12-B01-ZERO_DERIVATIVE_NOT_SUFFICIENT | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G12-CHI-B01-A01 | G12-B01-MOTION_CONTEXT | SGK_APPLICATION | SGK_APPLICATION |
| THPT-G12-CHI-B01-W01 | G12-B01-EXTREMA_SIGN_CHANGE | SGK_WRITTEN | WRITTEN |
| THPT-G12-CHI-B01-W02 | G12-B01-DOMAIN_INTERVALS | SGK_WRITTEN | ANCHOR_TAG |

## 11. AUTHORING QA boundary and next step

First-lesson authoring R00 has 6 candidate RD0 outcomes, 4 guided D2, 4 Core + 4 Practice + 1 Application + 2 Written/Anchor = **11 canonical public item IDs**, one original mathematically calibrated SVG D5 and six D6 five-step HELPs pointing to original same-outcome items. First-try precedes Core; rubric is for self-comparison, not RD1/Mastery. This is an **author-written source draft**, not a NotebookLM review verdict or chapter handoff.

**HOLD:** Continue original SGK/SBT S1 page-by-page verification and complete B02–B05 plus ChI original chapter-end self-check, exact outcome-depth/diagram/answer math QA, then produce a real review `Temp_*.md` + prompt directly in chat for independent NotebookLM five Permanent Sources v2.1. **Do not** add `ready/` or REGISTER or call `CONTENT_READY` until entire ChI Academic+PED PASS and ONE handoff V2 is signed. Do not perform RELEASE, merge/deploy or student Mastery writes.
