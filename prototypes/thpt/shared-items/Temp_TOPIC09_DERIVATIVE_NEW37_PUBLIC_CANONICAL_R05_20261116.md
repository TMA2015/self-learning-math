<!-- R05 CANONICAL VERSION CUSTODY: R01 bank blob 32f0bac609e388e5fe4fd26eea383d63d62bb81f immutable; R04 correction blob d1c546f9ce9a19128ab80c4b04d4ee4f2cb29e1a immutable. P23 R04 changed 'miền giá trị' to 'tập xác định' while retaining content_version 1; R05 fixes metadata only by setting content_version 2, with identical R04 stem/answer/solution/rubric. -->
# CĐ09 — 37 NEW PUBLIC canonical questions: 32 Practice + 5 Written/7

Mỗi câu đúng một item_id trong file này, đủ đề/đáp án/lời giải/D6; Written/Anchor dùng cùng một rubric, không nhân ngân hàng. 71 SGK PUBLIC original items chỉ tham chiếu bằng index source-locked. Tất cả đều PUBLIC, 0 private RD1; self-check replay Practice không cấp mastery.

PACKET_ID: THPT-TOPIC09-DERIVATIVE-MEANING-FULL-R01
CATALOG_TOPIC_ID: CD09
PUBLIC_NEW_PRACTICE: 32
PUBLIC_NEW_WRITTEN: 5
PUBLIC_NEW_TOTAL: 37
PRIVATE_RD1_IMPORTED: 0
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY

## THPT-TOP09-P01 · TOP09-O01

item_id: THPT-TOP09-P01
outcome_id: TOP09-O01
role: TOPIC_PRACTICE
difficulty_band: BASIC
problem_family_id: TOP09-AVERAGE_RATE
content_version: 1
**Đề:** Vật chuyển động theo s(t)=t² mét (t≥0 giây). Tính vận tốc trung bình trong [1,3] và nêu đơn vị.
**Đáp án:** 4 m/s.
**Lời giải có suy luận:** s(1)=1,s(3)=9; Δs/Δt=(9−1)/(3−1)=4 m/s. Đây là giá trị trung bình của cả hai giây, chưa phải v(1).
**D6:** Nếu trả 8 m/s, nhớ chia Δs cho Δt=2 s.

## THPT-TOP09-P02 · TOP09-O02

item_id: THPT-TOP09-P02
outcome_id: TOP09-O02
role: TOPIC_PRACTICE
difficulty_band: UNDERSTAND
problem_family_id: TOP09-LIMIT_QUOTIENT
content_version: 1
**Đề:** Trên y=x², cát tuyến qua P(2,4) và Q(2+h,(2+h)²), h≠0, có hệ số góc gì? Khi h→0 được gì?
**Đáp án:** m_cát=4+h; m_tiếp=4.
**Lời giải có suy luận:** [(2+h)²−2²]/h=(4h+h²)/h=4+h (h≠0). Khi h→0 hai phía, m→4. Phải rút gọn trước khi lấy giới hạn, không cho h=0 vào cát tuyến ban đầu.
**D6:** Nếu gặp 0/0, khai triển f(a+h)−f(a) và khử h với h≠0.

## THPT-TOP09-P03 · TOP09-O03

item_id: THPT-TOP09-P03
outcome_id: TOP09-O03
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP09-DEFINITION_CUBIC
content_version: 1
**Đề:** Dùng định nghĩa để tính f'(−1) cho f(x)=x³, không chỉ dẫn quy tắc x³.
**Đáp án:** 3.
**Lời giải có suy luận:** f(−1)=−1; f(−1+h)=−1+3h−3h²+h³. Thương sai phân [f(−1+h)−f(−1)]/h=3−3h+h² với h≠0, giới hạn h→0 bằng 3. Đạo hàm tại −1 là 3.
**D6:** Khai triển (−1+h)³ đúng dấu h và kiểm giới hạn hai phía.

## THPT-TOP09-P04 · TOP09-O04

item_id: THPT-TOP09-P04
outcome_id: TOP09-O04
role: TOPIC_PRACTICE
difficulty_band: TRANSFER
problem_family_id: TOP09-DIFFERENTIABILITY_PIECEWISE
content_version: 1
**Đề:** Cho f(x)=x nếu x<0, f(x)=x² nếu x≥0. Hàm có đạo hàm tại 0 không? Có liên tục không?
**Đáp án:** Liên tục tại 0 nhưng không có đạo hàm hai phía tại 0.
**Lời giải có suy luận:** f(0)=0, lim trái của x và phải của x² đều 0 nên liên tục. Thương [f(h)−f(0)]/h bằng 1 nếu h<0, bằng h nếu h>0; các đạo hàm một phía lần lượt 1 và 0, khác nhau ⇒ f'(0) không tồn tại.
**D6:** Liên tục chỉ kiểm f(h)→f(0), còn khả vi phải kiểm thương sai phân.

## THPT-TOP09-P05 · TOP09-O05

item_id: THPT-TOP09-P05
outcome_id: TOP09-O05
role: TOPIC_PRACTICE
difficulty_band: UNDERSTAND
problem_family_id: TOP09-DERIVATIVE_IMPLIES_CONTINUITY
content_version: 1
**Đề:** f(x)=|x| tại x=0: liên tục? Có đạo hàm? Dùng ví dụ bác bỏ chiều ngược của mệnh đề 'có đạo hàm ⇒ liên tục'.
**Đáp án:** Liên tục nhưng không khả vi tại 0.
**Lời giải có suy luận:** |x|→0=|0| khi x→0, nên liên tục. Thương [|h|−0]/h =−1 khi h<0 và +1 khi h>0, không có giới hạn hai phía. Đây là phản ví dụ cho 'liên tục ⇒ có đạo hàm'.
**D6:** Đừng lấy đồ thị không đứt làm bằng chứng tiếp tuyến có một độ dốc duy nhất.

## THPT-TOP09-P06 · TOP09-O06

item_id: THPT-TOP09-P06
outcome_id: TOP09-O06
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP09-CORNER_SLOPES
content_version: 1
**Đề:** Xét f(x)=|x−2| tại x=2. Tính đạo hàm trái và phải; nêu đạo hàm hai phía.
**Đáp án:** Trái −1, phải +1; không có đạo hàm tại 2.
**Lời giải có suy luận:** f(2)=0. Với h<0: |h|/h=−1; với h>0: |h|/h=+1. Hai giới hạn hữu hạn nhưng khác nhau, nên không tồn tại f'(2).
**D6:** Luôn tính từ cả hai phía tại điểm gãy; một phía không đủ.

## THPT-TOP09-P07 · TOP09-O07

item_id: THPT-TOP09-P07
outcome_id: TOP09-O07
role: TOPIC_PRACTICE
difficulty_band: UNDERSTAND
problem_family_id: TOP09-TANGENT_SLOPE
content_version: 1
**Đề:** Với f(x)=x²−2x, tại x=2 tung độ điểm tiếp xúc và độ dốc tiếp tuyến bằng bao nhiêu?
**Đáp án:** f(2)=0 và f'(2)=2.
**Lời giải có suy luận:** f(2)=4−4=0; f'(x)=2x−2 ⇒ f'(2)=2. Tung độ là 0, độ dốc là 2; không được hoán đổi hai đại lượng.
**D6:** Vẽ P(2,0) rồi viết riêng hai dòng f(2) và f'(2).

## THPT-TOP09-P08 · TOP09-O08

item_id: THPT-TOP09-P08
outcome_id: TOP09-O08
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP09-TANGENT_EQUATION
content_version: 1
**Đề:** Viết tiếp tuyến của y=x³ tại x=1.
**Đáp án:** y=3x−2.
**Lời giải có suy luận:** Điểm tiếp xúc P(1,1), đạo hàm f'=3x² ⇒ hệ số góc 3. Tiếp tuyến y−1=3(x−1) ⇒ y=3x−2. Thay x=1 cho y=1 để kiểm.
**D6:** Thiếu (x−a) sẽ khiến đường thẳng không qua điểm P.

## THPT-TOP09-P09 · TOP09-O09

item_id: THPT-TOP09-P09
outcome_id: TOP09-O09
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP09-INSTANT_VELOCITY
content_version: 1
**Đề:** Tọa độ s(t)=t³−6t²+9t (m), t≥0 (s). Tại t=2, vận tốc có hướng và tốc độ bằng bao nhiêu?
**Đáp án:** v(2)=−3 m/s; tốc độ=3 m/s.
**Lời giải có suy luận:** v(t)=s'(t)=3t²−12t+9; v(2)=12−24+9=−3. Âm báo chuyển động ngược chiều tọa độ dương, còn tốc độ là |v|=3, không mang dấu.
**D6:** Không gọi vận tốc âm là 'tốc độ âm'; dùng trị tuyệt đối khi hỏi tốc độ.

## THPT-TOP09-P10 · TOP09-O10

item_id: THPT-TOP09-P10
outcome_id: TOP09-O10
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP09-RATE_UNITS
content_version: 1
**Đề:** Nhiệt độ T(t)=20+3t−0,5t² (°C), t tính theo phút. T'(2) bằng bao nhiêu, ý nghĩa và đơn vị?
**Đáp án:** T'(2)=1 °C/phút, nhiệt độ đang tăng tức thời.
**Lời giải có suy luận:** T'(t)=3−t; tại t=2 tốc độ thay đổi +1 °C trên mỗi phút. Đó không phải nhiệt độ T(2)=24 °C. Đơn vị đạo hàm là đơn vị giá trị chia đơn vị biến.
**D6:** Nếu kết luận 24 °C/phút, bạn đã nhầm T(2) với T'(2).

## THPT-TOP09-P11 · TOP09-O11

item_id: THPT-TOP09-P11
outcome_id: TOP09-O11
role: TOPIC_PRACTICE
difficulty_band: BASIC
problem_family_id: TOP09-POWER_RULE
content_version: 1
**Đề:** Tính đạo hàm y=2x⁵−3x²+7.
**Đáp án:** y'=10x⁴−6x.
**Lời giải có suy luận:** Dùng (x^n)'=n x^{n−1}, hệ số nhân giữ nguyên, hằng 7 có đạo hàm 0. 2·5x⁴−3·2x=10x⁴−6x.
**D6:** Nhớ nhân n chứ không chỉ hạ số mũ.

## THPT-TOP09-P12 · TOP09-O12

item_id: THPT-TOP09-P12
outcome_id: TOP09-O12
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP09-SQRT_DOMAIN
content_version: 1
**Đề:** f(x)=√(x+1). Tìm miền xác định và công thức f'(x) tại các điểm trong miền; có f'(−1) hữu hạn hai phía không?
**Đáp án:** D=[−1,+∞), f'(x)=1/[2√(x+1)] khi x>−1; không có đạo hàm hai phía tại −1.
**Lời giải có suy luận:** Điều kiện căn x+1≥0. Trên x>−1, chain rule cho 1/(2√(x+1)). Tại đầu mút x=−1, thương phải √h/h=1/√h→+∞; bên trái không thuộc miền, không có đạo hàm hữu hạn hai phía.
**D6:** Không lầm 'hàm xác định tại −1' với 'có đạo hàm tại −1'.

## THPT-TOP09-P13 · TOP09-O13

item_id: THPT-TOP09-P13
outcome_id: TOP09-O13
role: TOPIC_PRACTICE
difficulty_band: BASIC
problem_family_id: TOP09-SUM_CONSTANT
content_version: 1
**Đề:** Tính y' nếu y=5−4x+7x², chỉ ra từng hạng đóng góp.
**Đáp án:** y'=−4+14x.
**Lời giải có suy luận:** (5)'=0, (−4x)'=−4, (7x²)'=14x. Tính tuyến tính cho tổng và hiệu giúp chia bài thành ba hạng.
**D6:** Không để lại số 5 trong kết quả đạo hàm.

## THPT-TOP09-P14 · TOP09-O14

item_id: THPT-TOP09-P14
outcome_id: TOP09-O14
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP09-PRODUCT
content_version: 1
**Đề:** Tính đạo hàm y=x² sin x (x đo radian). Giải thích vì sao không lấy 2x cos x.
**Đáp án:** y'=2x sin x+x² cos x.
**Lời giải có suy luận:** u=x², v=sin x; u'=2x, v'=cos x (radian). (uv)'=u'v+uv'=2x sin x+x² cos x. Tích hai đạo hàm 2x cos x bỏ sót hai biến thiên tương ứng.
**D6:** Viết đủ hai hạng u'v và uv' trước khi rút gọn.

## THPT-TOP09-P15 · TOP09-O15

item_id: THPT-TOP09-P15
outcome_id: TOP09-O15
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP09-QUOTIENT
content_version: 1
**Đề:** Cho f(x)=(x²+1)/(x−1). Viết miền xác định và f'(x); tính f'(0).
**Đáp án:** D=ℝ\{1}, f'=(x²−2x−1)/(x−1)², f'(0)=−1.
**Lời giải có suy luận:** u=x²+1,u'=2x; v=x−1,v'=1. (u/v)'=[2x(x−1)−(x²+1)]/(x−1)²=(x²−2x−1)/(x−1)², x≠1. Thế x=0 được −1.
**D6:** Mẫu v² và dấu trừ uv' đều bắt buộc; không tính tại x=1.

## THPT-TOP09-P16 · TOP09-O16

item_id: THPT-TOP09-P16
outcome_id: TOP09-O16
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP09-CHAIN_POWER
content_version: 1
**Đề:** Tính đạo hàm y=(3x−1)^4.
**Đáp án:** y'=12(3x−1)^3.
**Lời giải có suy luận:** Đặt u=3x−1, đạo hàm ngoài 4u³, đạo hàm trong u'=3; dây chuyền cho y'=4u³·3=12(3x−1)^3.
**D6:** Nếu ra 4(3x−1)^3 thì thiếu nhân đạo hàm trong 3.

## THPT-TOP09-P17 · TOP09-O17

item_id: THPT-TOP09-P17
outcome_id: TOP09-O17
role: TOPIC_PRACTICE
difficulty_band: BASIC
problem_family_id: TOP09-SIN_COS
content_version: 1
**Đề:** Tính đạo hàm y=2sin x−3cos x, x tính radian.
**Đáp án:** y'=2cos x+3sin x.
**Lời giải có suy luận:** Dùng (sin x)'=cos x, (cos x)'=−sin x. Đạo hàm của −3cos x là +3sin x. Quy tắc với góc radian; nếu x là độ cần đổi về radian.
**D6:** Nếu giữ −3sin x, kiểm đạo hàm cos có dấu âm.

## THPT-TOP09-P18 · TOP09-O18

item_id: THPT-TOP09-P18
outcome_id: TOP09-O18
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP09-TAN_COT
content_version: 1
**Đề:** Tính đạo hàm f(x)=tan x+cot x và nêu miền xác định.
**Đáp án:** f'=1/cos²x−1/sin²x; D={x: sin x≠0 và cos x≠0}.
**Lời giải có suy luận:** Với tan x cần cos x≠0, với cot x cần sin x≠0. Derivative tan=sec², cot=−csc² trong radian. Không kết luận biểu thức có nghĩa tại các bội π/2.
**D6:** Cẩn thận dấu trừ của cot và điều kiện cả hai mẫu.

## THPT-TOP09-P19 · TOP09-O19

item_id: THPT-TOP09-P19
outcome_id: TOP09-O19
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP09-TRIG_CHAIN
content_version: 1
**Đề:** Tính y' nếu y=sin(2x²), x đo radian.
**Đáp án:** y'=4x cos(2x²).
**Lời giải có suy luận:** Hàm ngoài sin u có đạo hàm cos u; u=2x² có u'=4x. Theo dây chuyền y'=cos(2x²)·4x.
**D6:** Không để đạo hàm trong bằng 2x hoặc thiếu hệ số 4.

## THPT-TOP09-P20 · TOP09-O20

item_id: THPT-TOP09-P20
outcome_id: TOP09-O20
role: TOPIC_PRACTICE
difficulty_band: BASIC
problem_family_id: TOP09-EXP_DERIV
content_version: 1
**Đề:** Tính đạo hàm y=2^x+e^x và nêu điều kiện cho cơ số.
**Đáp án:** y'=2^x ln2+e^x.
**Lời giải có suy luận:** Với a^x, a>0,a≠1, (a^x)'=a^x ln a. Với e^x, ln e=1. Vì 2>0,2≠1, công thức áp dụng toàn ℝ.
**D6:** Không nhầm (2^x)' thành x·2^{x−1}, đó là đạo hàm của x^n chứ không phải a^x.

## THPT-TOP09-P21 · TOP09-O21

item_id: THPT-TOP09-P21
outcome_id: TOP09-O21
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP09-LOG_DERIV
content_version: 1
**Đề:** Tính y' nếu y=ln x+log₃ x, nêu miền xác định.
**Đáp án:** D=(0,∞), y'=1/x+1/(x ln3).
**Lời giải có suy luận:** Cả ln và log₃ chỉ xác định khi x>0. Đạo hàm ln x=1/x; đạo hàm log_a x=1/(x ln a) với a>0,a≠1. Với a=3, kết quả như trên.
**D6:** Không cho x=0 vì công thức đạo hàm có mẫu x; miền log còn nghiêm ngặt x>0.

## THPT-TOP09-P22 · TOP09-O22

item_id: THPT-TOP09-P22
outcome_id: TOP09-O22
role: TOPIC_PRACTICE
difficulty_band: TRANSFER
problem_family_id: TOP09-EXP_LOG_CHAIN
content_version: 1
**Đề:** Tính y' và miền xác định của y=ln(2x+1)+3^{x²}.
**Đáp án:** D=(−1/2,∞), y'=2/(2x+1)+2x·3^{x²}ln3.
**Lời giải có suy luận:** Điều kiện ln(2x+1) là 2x+1>0. Chain log: [ln u]'=u'/u=2/(2x+1). Chain mũ: [3^{x²}]'=3^{x²}ln3·(2x). Cộng hai hạng; cơ số 3 hợp lệ.
**D6:** Nếu thiếu 2x ở mũ hoặc 2 ở log, ghi u ngoài/u trong riêng từng thành phần.

## THPT-TOP09-P23 · TOP09-O23

item_id: THPT-TOP09-P23
outcome_id: TOP09-O23
role: TOPIC_PRACTICE
difficulty_band: TRANSFER
problem_family_id: TOP09-DOMAIN_VALIDATE
content_version: 2
**Đề:** Với y=√(x−2)/ln x, xác định tập xác định và khoảng có thể tính đạo hàm bằng quy tắc thương.
**Đáp án:** D=[2,∞), có công thức đạo hàm theo quy tắc trên (2,∞); không có đạo hàm hữu hạn hai phía tại x=2.
**Lời giải có suy luận:** √(x−2) đòi x≥2; ln x xác định và khác 0 trên x≥2 (vì ln2>0). Với x>2, y'=[(ln x)/(2√(x−2))−√(x−2)/x]/(ln x)². Tại x=2 hàm định nghĩa bằng0, nhưng thương phải y(2+h)/h≈1/(√h ln2)→+∞, không có đạo hàm hữu hạn.
**D6:** Kiểm miền gốc trước khi dùng bảng đạo hàm; căn xác định ở đầu mút chưa chắc khả vi.

## THPT-TOP09-P24 · TOP09-O24

item_id: THPT-TOP09-P24
outcome_id: TOP09-O24
role: TOPIC_PRACTICE
difficulty_band: TRANSFER
problem_family_id: TOP09-RULE_SELECTION
content_version: 1
**Đề:** Tính đạo hàm y=x²e^{3x}. Chỉ ra thứ tự quy tắc tối ưu.
**Đáp án:** y'=e^{3x}(2x+3x²).
**Lời giải có suy luận:** Nhận diện tích u=x² và v=e^{3x}. Đạo hàm u'=2x; v'=3e^{3x} theo dây chuyền. Tích: y'=2x e^{3x}+x²·3e^{3x}=e^{3x}(2x+3x²).
**D6:** Không lấy (x²)'·(e^{3x})' vì đó không phải quy tắc tích.

## THPT-TOP09-P25 · TOP09-O25

item_id: THPT-TOP09-P25
outcome_id: TOP09-O25
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP09-APPLIED_VELOCITY
content_version: 1
**Đề:** Tọa độ s(t)=t³−3t²+2t (m), t≥0 s. Tính v(1) và tốc độ khi đó; nói ý nghĩa dấu.
**Đáp án:** v(1)=−1 m/s; tốc độ=1 m/s.
**Lời giải có suy luận:** v(t)=s'(t)=3t²−6t+2; v(1)=3−6+2=−1 m/s. Vận tốc âm biểu thị chuyển động ngược chiều dương, còn tốc độ |v(1)|=1.
**D6:** Nếu đáp án tốc độ −1, lấy trị tuyệt đối vận tốc; không thay s(1) thay v(1).

## THPT-TOP09-P26 · TOP09-O26

item_id: THPT-TOP09-P26
outcome_id: TOP09-O26
role: TOPIC_PRACTICE
difficulty_band: UNDERSTAND
problem_family_id: TOP09-SECOND_DERIVATIVE_DEF
content_version: 1
**Đề:** f(x)=x³. Tính f', f'' và f''(2); f'' có phải (f')² không?
**Đáp án:** f'=3x², f''=6x, f''(2)=12; không phải (3x²)².
**Lời giải có suy luận:** Lấy đạo hàm f một lần được 3x², lấy đạo hàm của hàm mới thêm lần nữa được 6x. Ký hiệu f''=(f')' yêu cầu f' khả vi; không bình phương f'.
**D6:** Nếu tính f''=9x⁴, bạn đã bình phương f' thay vì đạo hàm lần hai.

## THPT-TOP09-P27 · TOP09-O27

item_id: THPT-TOP09-P27
outcome_id: TOP09-O27
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP09-SECOND_POLYNOMIAL
content_version: 1
**Đề:** Tính f'(x), f''(x) cho f(x)=2x⁴−x³+5.
**Đáp án:** f'=8x³−3x²; f''=24x²−6x.
**Lời giải có suy luận:** Từng hạng: f'=8x³−3x²; đạo hàm lại cho 24x²−6x. Hằng 5 mất ở lần đầu, không xuất hiện lại.
**D6:** Kiểm bậc đa thức giảm mỗi lần với hạng có hệ số khác0.

## THPT-TOP09-P28 · TOP09-O28

item_id: THPT-TOP09-P28
outcome_id: TOP09-O28
role: TOPIC_PRACTICE
difficulty_band: TRANSFER
problem_family_id: TOP09-SECOND_TRIG_EXP
content_version: 1
**Đề:** Với f(x)=e^{2x}+sin(3x), tính f''(x).
**Đáp án:** f''=4e^{2x}−9sin(3x).
**Lời giải có suy luận:** Lần đầu f'=2e^{2x}+3cos(3x). Lần hai lấy đạo hàm của 2e^{2x} được 4e^{2x}, của 3cos(3x) được −9sin(3x); dùng dây chuyền ở cả hai lần.
**D6:** Nhớ đạo hàm cos là −sin và nhân hệ số bên trong 3 mỗi lần.

## THPT-TOP09-P29 · TOP09-O29

item_id: THPT-TOP09-P29
outcome_id: TOP09-O29
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP09-ACCELERATION
content_version: 1
**Đề:** s(t)=t³−6t²+9t (m), t≥0 s. Tính gia tốc a(1) từ s''.
**Đáp án:** a(1)=−6 m/s².
**Lời giải có suy luận:** v(t)=3t²−12t+9 (m/s), a(t)=v'(t)=6t−12 (m/s²). Tại t=1, a=6−12=−6. Gia tốc là đạo hàm vận tốc, không phải s(t) hoặc (s')².
**D6:** Đơn vị gia tốc là m/s², khác đơn vị vận tốc m/s.

## THPT-TOP09-P30 · TOP09-O30

item_id: THPT-TOP09-P30
outcome_id: TOP09-O30
role: TOPIC_PRACTICE
difficulty_band: TRANSFER
problem_family_id: TOP09-VELOCITY_ACCEL_SIGNS
content_version: 1
**Đề:** Chuyển động s(t)=t²−4t (m), t≥0. Ở t=1 và t=3, vật tăng tốc hay giảm tốc theo nghĩa tốc độ |v|?
**Đáp án:** t=1 tốc độ giảm, t=3 tốc độ tăng (ở lân cận các thời điểm này).
**Lời giải có suy luận:** v=2t−4,a=2. Khi t=1, v=−2,a=+2 ngược dấu, vận tốc tiến tới0 nên tốc độ giảm. Khi t=3, v=+2,a=+2 cùng dấu, tốc độ tăng. Tại t=2, v=0 vật đổi chiều, không suy 'gia tốc dương luôn nhanh dần' cho mọi t.
**D6:** Xét dấu tích v·a tại nơi v≠0: cùng dấu nhanh dần, trái dấu chậm dần.

## THPT-TOP09-P31 · TOP09-O31

item_id: THPT-TOP09-P31
outcome_id: TOP09-O31
role: TOPIC_PRACTICE
difficulty_band: TRANSFER
problem_family_id: TOP09-INTEGRATED_TANGENT_SECOND
content_version: 1
**Đề:** Cho f(x)=(x²+1)e^x. Tính f(0), f'(0), f''(0) và tiếp tuyến tại x=0.
**Đáp án:** f(0)=1; f'(0)=1; f''(0)=3; tiếp tuyến y=x+1.
**Lời giải có suy luận:** Quy tắc tích: f'=e^x(2x+x²+1). Lần hai f''=e^x(2x+x²+1)+e^x(2+2x)=e^x(x²+4x+3). Tại0: f=1,f'=1,f''=3. Tiếp tuyến y−1=1(x−0). Không lấy f'' làm độ dốc tiếp tuyến.
**D6:** Lập bảng ba cột f(0),f'(0),f''(0), dùng đúng f' cho độ dốc.

## THPT-TOP09-W01 · TOP09-O06

item_id: THPT-TOP09-W01
outcome_id: TOP09-O06
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (role tag only; no cloned item)
problem_family_id: TOP09-PIECEWISE_DIFFERENTIABILITY
difficulty_band: TRANSFER
content_version: 2
**Đề bài:** Cho \(c\in\mathbb R\) và \(f(x)=\begin{cases}x^2,&x\ge0,\\x^2+cx,&x<0.\end{cases}\) (a) Chứng minh \(f\) liên tục tại \(0\) với mọi \(c\). (b) Tính giới hạn trái và phải của thương sai phân tại \(0\). (c) Tìm mọi \(c\) để \(f\) có đạo hàm tại \(0\). (d) Viết tiếp tuyến tại \(0\) trong trường hợp ấy.

**Lời giải:** Vì \(f(0)=0\), \(\lim_{x\to0^+}x^2=0\) và \(\lim_{x\to0^-}(x^2+cx)=0\), hàm liên tục tại \(0\) với mọi \(c\). Khi \(h>0\), thương sai phân bằng \(\frac{h^2}{h}=h\to0\); khi \(h<0\), thương bằng \(\frac{h^2+ch}{h}=h+c\to c\). Đạo hàm tồn tại khi và chỉ khi hai giới hạn hữu hạn bằng nhau, tức \(c=0\). Khi đó \(f'(0)=0\) và tiếp tuyến qua \(O(0;0)\) có phương trình \(y=0\).

**Rubric /7:**
1. Xác định \(f(0)=0\) (1 điểm).
2. Tính giới hạn phải của hàm (1 điểm).
3. Tính giới hạn trái và kết luận liên tục (1 điểm).
4. Lập thương sai phân phải và lấy giới hạn (1 điểm).
5. Lập thương sai phân trái và lấy giới hạn (1 điểm).
6. Suy ra \(c=0\) là điều kiện cần và đủ (1 điểm).
7. Viết tiếp tuyến đúng (1 điểm).

**D6:** Liên tục chưa đủ để có đạo hàm; phải kiểm hai thương sai phân.

Chấp nhận cách giải đúng khác; không trừ điểm lặp lại cho lỗi kéo theo.


**Đáp án:** Liên tục mọi c; f'_-(0)=c, f'_+(0)=0; khả vi iff c=0, f'(0)=0, tiếp tuyến y=0.
**Lời giải đầy đủ:** f(0)=0. Khi x→0⁺, f=x²→0; khi x→0⁻, f=x²+c x→0 nên liên tục. Với h>0, [f(h)−f(0)]/h=h→0. Với h<0, thương=(h²+c h)/h=h+c→c. Hai đạo hàm một phía bằng nhau khi c=0; khi đó f'(0)=0 và P(0,0), tiếp tuyến y=0.
**Rubric /7:**
1. Tính f(0) đúng (1đ)
2. Giới hạn f từ phải 0 (1đ)
3. Giới hạn f từ trái 0 (1đ)
4. Viết thương sai phân phía phải (1đ)
5. Viết thương sai phân phía trái (1đ)
6. Điều kiện c=0 và kết luận khả vi (1đ)
7. Tiếp tuyến y=0 khi c=0 (1đ)
**D6:** Không dùng chỉ tính liên tục để suy khả vi; bắt buộc xét cả hai thương sai phân.

## THPT-TOP09-W02 · TOP09-O09

item_id: THPT-TOP09-W02
outcome_id: TOP09-O09
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (role tag only; no cloned item)
problem_family_id: TOP09-AVERAGE_INSTANT_TANGENT
difficulty_band: TRANSFER
content_version: 2
**Đề bài:** Vật có tọa độ \(s(t)=t^3-6t^2+9t\) (m), \(t\ge0\) tính bằng giây. (a) Tính \(s(2),s(3)\). (b) Tính vận tốc trung bình trên \([2;3]\). (c) Tính vận tốc và tốc độ tại \(t=2\). (d) Viết phương trình tiếp tuyến của đồ thị \(y=s(t)\) tại \(t=2\); giải thích vì sao hai vận tốc khác nhau.

**Lời giải:** \(s(2)=8-24+18=2\) m và \(s(3)=27-54+27=0\) m. Vận tốc trung bình là \(\frac{0-2}{3-2}=-2\) m/s. Vận tốc tức thời \(v(t)=s'(t)=3t^2-12t+9\), nên \(v(2)=-3\) m/s; tốc độ bằng \(|v(2)|=3\) m/s. Tiếp tuyến qua điểm \((2;2)\), có hệ số góc \(-3\), nên \(y-2=-3(t-2)\). Vận tốc trung bình đo độ dời trên cả khoảng một giây, còn vận tốc tức thời tại \(2\) là giới hạn của thương sai phân khi bước thời gian tiến về \(0\).

**Rubric /7:**
1. Tính \(s(2)=2\) (1 điểm).
2. Tính \(s(3)=0\) (1 điểm).
3. Tính đúng vận tốc trung bình (1 điểm).
4. Lập \(v(t)=s'(t)\) (1 điểm).
5. Tính vận tốc và tốc độ tại \(2\) (1 điểm).
6. Lập tiếp tuyến đúng (1 điểm).
7. Giải thích hai đại lượng và ghi đơn vị (1 điểm).

**D6:** Phân biệt độ dời với quãng đường; vận tốc có hướng còn tốc độ không âm.

Chấp nhận cách giải đúng khác; không trừ điểm lặp lại cho lỗi kéo theo.


**Đáp án:** s(2)=2 m,s(3)=0 m; v_tb=−2 m/s; v(2)=−3 m/s; tốc độ3 m/s; tiếp tuyến y−2=−3(t−2).
**Lời giải đầy đủ:** s(2)=8−24+18=2; s(3)=27−54+27=0. Vận tốc trung bình (0−2)/(3−2)=−2 m/s. v=s'=3t²−12t+9 nên v(2)=−3 m/s, tốc độ |v(2)|=3. Độ dốc tiếp tuyến tại (2,2) là −3; y−2=−3(t−2). V_tb tính trên cả khoảng 1s, v(2) là giới hạn khi khoảng co lại.
**Rubric /7:**
1. Tính s(2)=2 (1đ)
2. Tính s(3)=0 (1đ)
3. Tính vận tốc trung bình −2 (1đ)
4. Lập v=s' đúng (1đ)
5. Tính v(2)=−3 và tốc độ3 (1đ)
6. Lập đúng tiếp tuyến qua (2,2) (1đ)
7. Giải thích ý nghĩa và đơn vị vận tốc (1đ)
**D6:** Nếu trộn y=s(t) với t hoặc lẫn quãng đường với tọa độ, đặt trục t và ký hiệu độ dốc (m/s).

## THPT-TOP09-W03 · TOP09-O15

item_id: THPT-TOP09-W03
outcome_id: TOP09-O15
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (role tag only; no cloned item)
problem_family_id: TOP09-QUOTIENT_DOMAIN_TANGENT
difficulty_band: TRANSFER
content_version: 2
**Đề bài:** Cho \(f(x)=\frac{x^2+1}{x-1}\). (a) Tìm tập xác định. (b) Tính đạo hàm bằng quy tắc thương và rút gọn. (c) Tính \(f(0),f'(0)\) và viết tiếp tuyến tại \(x=0\). (d) Giải thích vì sao không thể áp dụng kết quả tại \(x=1\).

**Lời giải:** Điều kiện \(x-1\ne0\) cho \(D=\mathbb R\setminus\{1\}\). Đặt \(u=x^2+1,\ v=x-1\), nên \(u'=2x,\ v'=1\). Do đó
\[
f'(x)=\frac{2x(x-1)-(x^2+1)}{(x-1)^2}=\frac{x^2-2x-1}{(x-1)^2},\qquad x\ne1.
\]
Tại \(x=0\), \(f(0)=-1,\ f'(0)=-1\); tiếp tuyến là \(y+1=-x\), hay \(y=-x-1\). Tại \(x=1\), mẫu của hàm gốc bằng \(0\), nên hàm không xác định và không thể có đạo hàm tại đó.

**Rubric /7:**
1. Tìm đúng tập xác định (1 điểm).
2. Xác định \(u,v,u',v'\) (1 điểm).
3. Lập đúng quy tắc thương (1 điểm).
4. Rút gọn chính xác (1 điểm).
5. Tính \(f(0)\) (1 điểm).
6. Tính \(f'(0)\) và viết tiếp tuyến (1 điểm).
7. Giải thích điều kiện loại \(x=1\) (1 điểm).

**D6:** Ghi điều kiện mẫu trước khi đạo hàm; nếu đảo dấu tử, ôn quy tắc thương và làm lại THPT-TOP09-P15.

Chấp nhận cách giải đúng khác; không trừ điểm lặp lại cho lỗi kéo theo.


**Đáp án:** D=ℝ\{1}; f'=(x²−2x−1)/(x−1)²; f(0)=−1; f'(0)=−1; tiếp tuyến y=−x−1.
**Lời giải đầy đủ:** D=ℝ\{1}. u=x²+1, v=x−1. f'=[2x(x−1)−(x²+1)]/(x−1)²=(x²−2x−1)/(x−1)², x≠1. Tại0, f(0)=1/(−1)=−1, f'(0)=−1. Tiếp tuyến y+1=−1(x−0), tức y=−x−1. x=1 bị loại vì mẫu gốc bằng0; biểu thức đạo hàm cũng không có nghĩa.
**Rubric /7:**
1. Miền loại x=1 (1đ)
2. Xác định u,v và đạo hàm của chúng (1đ)
3. Lập công thức thương với đúng dấu (1đ)
4. Rút gọn tử chính xác (1đ)
5. Tính f(0)=−1 (1đ)
6. Tính f'(0)=−1 và tiếp tuyến (1đ)
7. Khẳng định điều kiện x≠1 (1đ)
**D6:** Chỉ áp (u/v)' khi v khác0; dùng P15 để sửa dấu âm quy tắc thương.

## THPT-TOP09-W04 · TOP09-O22

item_id: THPT-TOP09-W04
outcome_id: TOP09-O22
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (role tag only; no cloned item)
problem_family_id: TOP09-LOG_EXP_CHAIN_SECOND
difficulty_band: TRANSFER
content_version: 2
**Đề bài:** Cho \(f(x)=\ln(1+x^2)+e^{2x}\). (a) Tìm tập xác định. (b) Tính \(f'(x)\). (c) Tính \(f''(x)\). (d) Tính \(f(0),f'(0),f''(0)\) và giải thích ý nghĩa khác nhau của chúng.

**Lời giải:** Vì \(1+x^2\ge1>0\), hàm xác định trên \(\mathbb R\). Dùng quy tắc hàm hợp cho từng hạng:
\[
f'(x)=\frac{2x}{1+x^2}+2e^{2x}.
\]
Tiếp tục đạo hàm; hạng phân thức dùng quy tắc thương, hạng mũ dùng quy tắc hàm hợp:
\[
f''(x)=\frac{2(1+x^2)-4x^2}{(1+x^2)^2}+4e^{2x}
=\frac{2(1-x^2)}{(1+x^2)^2}+4e^{2x}.
\]
Thay \(x=0\), được \(f(0)=1,\ f'(0)=2,\ f''(0)=6\). Chúng lần lượt là giá trị hàm, hệ số góc tiếp tuyến và tốc độ biến thiên của hệ số góc theo \(x\).

**Rubric /7:**
1. Kiểm điều kiện logarit (1 điểm).
2. Đạo hàm hạng logarit (1 điểm).
3. Đạo hàm hạng mũ (1 điểm).
4. Đạo hàm lần hai của phân thức (1 điểm).
5. Đạo hàm lần hai của hạng mũ (1 điểm).
6. Tính đúng ba giá trị tại \(0\) (1 điểm).
7. Giải thích ý nghĩa của ba đại lượng (1 điểm).

**D6:** Đạo hàm cấp hai là đạo hàm của \(f'\), không phải bình phương \(f'\).

Chấp nhận cách giải đúng khác; không trừ điểm lặp lại cho lỗi kéo theo.


**Đáp án:** D=ℝ; f'=2x/(1+x²)+2e^{2x}; f''=2(1−x²)/(1+x²)²+4e^{2x}; tại0 lần lượt 1,2,6.
**Lời giải đầy đủ:** 1+x²≥1>0 nên f xác định toàn ℝ. Chain log cho 2x/(1+x²), chain mũ cho 2e^{2x}. Đạo hàm tiếp của 2x/(1+x²) theo thương là [2(1+x²)−4x²]/(1+x²)²=2(1−x²)/(1+x²)², mũ tiếp cho 4e^{2x}. Tại x=0, f(0)=ln1+e^0=1, f'(0)=2, f''(0)=2+4=6. f là giá trị, f' là độ dốc, f'' biến thiên độ dốc.
**Rubric /7:**
1. Kiểm miền ln(1+x²) (1đ)
2. Chain của ln chính xác (1đ)
3. Chain của e^{2x} chính xác (1đ)
4. Lập đạo hàm lần hai của phân thức (1đ)
5. Tính đạo hàm lần hai của mũ (1đ)
6. Tính ba số 1,2,6 (1đ)
7. Giải thích ba ý nghĩa không hoán đổi (1đ)
**D6:** Khi đạo hàm 2x/(1+x²), dùng thương; f'' là đạo hàm f', không phải bình phương.

## THPT-TOP09-W05 · TOP09-O30

item_id: THPT-TOP09-W05
outcome_id: TOP09-O30
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (role tag only; no cloned item)
problem_family_id: TOP09-MOTION_SIGN_CHART
difficulty_band: TRANSFER
content_version: 2
**Đề bài:** Vật có tọa độ \(s(t)=t^3-6t^2+9t\) (m), với \(0\le t\le4\), thời gian tính bằng giây. (a) Tính vận tốc \(v(t)\) và gia tốc \(a(t)\). (b) Xác định dấu vận tốc trên \((0;1),(1;3),(3;4)\) và thời điểm đổi chiều. (c) Xác định các khoảng tốc độ tăng hoặc giảm bằng dấu của \(v(t)a(t)\), không xét các điểm \(v=0\) hoặc \(a=0\).

**Lời giải:** Ta có \(v(t)=3t^2-12t+9=3(t-1)(t-3)\) (m/s) và \(a(t)=6(t-2)\) (m/s²). Vận tốc dương trên \((0;1)\) và \((3;4)\), âm trên \((1;3)\); do đó vật đổi chiều tại \(t=1\) và \(t=3\). Gia tốc âm trên \((0;2)\), dương trên \((2;4)\). Khi \(v\ne0\), đạo hàm của tốc độ \(|v|\) bằng \(a\) nếu \(v>0\) và bằng \(-a\) nếu \(v<0\). Vì vậy tốc độ giảm trên \((0;1)\), \((2;3)\) và tăng trên \((1;2)\), \((3;4)\). Các điểm \(1,2,3\) không thuộc các khoảng đang xét.

**Rubric /7:**
1. Tính \(v(t)\) (1 điểm).
2. Phân tích vận tốc thành nhân tử (1 điểm).
3. Tính \(a(t)\) (1 điểm).
4. Xét dấu vận tốc và tìm hai thời điểm đổi chiều (1 điểm).
5. Xét dấu gia tốc (1 điểm).
6. Tìm đúng các khoảng tốc độ tăng (1 điểm).
7. Tìm đúng các khoảng tốc độ giảm và lưu ý điểm loại (1 điểm).

**D6:** Gia tốc âm không đồng nghĩa vật chậm dần; xét dấu vận tốc cùng với gia tốc.

Chấp nhận cách giải đúng khác; không trừ điểm lặp lại cho lỗi kéo theo.


**Đáp án:** v=3(t−1)(t−3), a=6(t−2); v đổi dấu ở t=1,3; tốc độ giảm (0,1),(2,3), tăng (1,2),(3,4).
**Lời giải đầy đủ:** v=s'=3t²−12t+9=3(t−1)(t−3), a=v'=6t−12=6(t−2). v>0 (0,1), v<0 (1,3), v>0 (3,4): đổi chiều tại t=1,3. a<0 (0,2), a>0 (2,4). Khi v·a<0 tốc độ |v| giảm: (0,1) và (2,3); khi v·a>0 tốc độ tăng: (1,2) và (3,4). Điểm t=2 có a=0 và t=1,3 có v=0 được xét riêng; không gọi mọi a<0 là chậm dần.
**Rubric /7:**
1. Tính v=s' (1đ)
2. Phân tích v=3(t−1)(t−3) (1đ)
3. Tính a=6(t−2) (1đ)
4. Bảng dấu v đúng và đổi chiều (1đ)
5. Bảng dấu a đúng (1đ)
6. Khoảng tăng tốc độ đúng (1đ)
7. Khoảng giảm tốc độ và lưu ý điểm biên đúng (1đ)
**D6:** Tăng tốc là |v| tăng, không đồng nghĩa a>0; v/a cùng dấu mới tăng tốc độ khi v≠0.

## THPT-TOP09-P32 · TOP09-O32

item_id: THPT-TOP09-P32
outcome_id: TOP09-O32
role: TOPIC_PRACTICE
difficulty_band: TRANSFER
problem_family_id: TOP09-DIFFERENTIAL_LINEAR_APPROX
content_version: 1
source_scope: TOPIC_EXTENSION_NOT_SGK_CORE
**Đề:** f(x)=x², x ban đầu a=2 và tăng Δx=0,1. Tính vi phân tuyến tính dy=f'(a)Δx, độ tăng thật Δy=f(2,1)−f(2), sai lệch |Δy−dy|; phát biểu điều kiện khi dùng xấp xỉ.
**Đáp án:** dy=0,4; Δy=0,41; sai lệch=0,01.
**Lời giải có suy luận:** f'(x)=2x nên f'(2)=4. Vi phân tại a=2 ứng với dx=0,1 là dy=4·0,1=0,4. Độ tăng thực là 2,1²−2²=4,41−4=0,41. Với f=x², Δy=2aΔx+(Δx)² nên Δy−dy=(Δx)²=0,01; vì hàm khả vi tại a và Δx nhỏ, dy là xấp xỉ bậc nhất, không phải đẳng thức Δy=dy. Nếu bước thay đổi lớn, phần dư có thể đáng kể.
**D6:** Không coi dy=Δy luôn đúng; khai triển f(a+Δx)−f(a) để thấy phần dư bậc hai.

## Q15/Q16

Chỉ có 37 item_id canonical NEW; 71 item_id SGK giữ nguồn cũ và chỉ mục riêng. 32 self-check PUBLIC placement dùng lại P01–P32, không thêm item_id. Không giữ hay công khai 31 SGK private RD1, không chấm chính thức hoặc ghi Skill Mastery.
