<!-- AUTHORING R04 canonical NEW28 source; source repair R02 blob 430a419fa95752d5ec4bdd9a7baf4875f3b57d2b. Original R01 bank 1d1de4a1dd2ed07954db7b5dde4b86a9f894ddfe remains historical immutable. Q18 authoring self-QA only; no RELEASE authorization. Material correction P22 washer/disk volume 2π, not old 8π. -->
# CĐ11 — one canonical bank, 28 NEW PUBLIC questions (22 Practice +6 Written /7)

Each `item_id` has exactly one stem/key/solution/D6 and (if Written) one rubric. 88 original SGK ChIV canonical remain reference-only via original88 index. 22 public Self Check placements reuse P01–P22, NOT new question IDs, independent Readiness or Mastery. All 28 newly authored questions are PUBLIC; ZERO protected RD1 imported.

PACKET_ID: THPT-TOPIC11-ANTIDERIVATIVE-INTEGRAL-GEOMETRY-FULL-R01
CANONICAL_CONTENT_REVISION: R04
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
LEARNING_PATH: TOPIC
PUBLIC_NEW_PRACTICE: 22
PUBLIC_NEW_WRITTEN: 6
PUBLIC_NEW_TOTAL: 28
PRIVATE_RD1_IMPORTED: 0
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY

## THPT-TOP11-P01 · TOP11-O01

item_id: THPT-TOP11-P01
outcome_id: TOP11-O01
role: TOPIC_PRACTICE
difficulty_band: BASIC_TO_APPLY
content_version: 2
problem_family_id: TOP11-PRIMITIVE
**Đề:** Tìm họ nguyên hàm f(x)=6x−4.
**Đáp án:** F(x)=3x²−4x+C trên ℝ.
**Lời giải và điều kiện:** Muốn F'=6x−4, chọn F=3x²−4x+C vì (3x²)'=6x và (−4x)'=−4. Hai nguyên hàm trên khoảng ℝ khác nhau hằng số C; kiểm ngược F'=6x−4.
**D6:** Nếu quên +C, nhớ đạo hàm mọi hằng số đều bằng 0, nên có cả một họ nguyên hàm.

## THPT-TOP11-P02 · TOP11-O02

item_id: THPT-TOP11-P02
outcome_id: TOP11-O02
role: TOPIC_PRACTICE
difficulty_band: BASIC_TO_APPLY
content_version: 2
problem_family_id: TOP11-INITIAL
**Đề:** F'=3x², F(2)=9; tìm F.
**Đáp án:** F=x³+C, C=9−8=1; F=x³+1.
**Lời giải và điều kiện:** Từ F'=3x² suy F=x³+C. Điều kiện F(2)=9 cho 8+C=9⇒C=1; vậy F=x³+1. Kiểm F'=3x² và F(2)=9.
**D6:** Thay điều kiện giá trị đầu vào F, không vào F'; C chỉ xuất hiện khi nguyên hàm xong.

## THPT-TOP11-P03 · TOP11-O03

item_id: THPT-TOP11-P03
outcome_id: TOP11-O03
role: TOPIC_PRACTICE
difficulty_band: BASIC_TO_APPLY
content_version: 2
problem_family_id: TOP11-POWER
**Đề:** Tính ∫(3x²+4x−2)dx.
**Đáp án:** x³+2x²−2x+C.
**Lời giải và điều kiện:** Lấy nguyên hàm từng hạng: ∫3x²dx=x³, ∫4xdx=2x² và ∫(−2)dx=−2x. Cộng lại được x³+2x²−2x+C; đạo hàm ngược trả đúng3x²+4x−2.
**D6:** Quy tắc lũy thừa tăng số mũ thêm1 rồi chia hệ số mới; kiểm bằng đạo hàm.

## THPT-TOP11-P04 · TOP11-O04

item_id: THPT-TOP11-P04
outcome_id: TOP11-O04
role: TOPIC_PRACTICE
difficulty_band: BASIC_TO_APPLY
content_version: 2
problem_family_id: TOP11-LOG_ABS
**Đề:** Tìm nguyên hàm 2/x trên (−∞,0) biết F(−1)=3.
**Đáp án:** F=2ln(−x)+3 trên x<0.
**Lời giải và điều kiện:** Trên x<0, ln|x|=ln(−x) hợp lệ. Họ nguyên hàm F=2ln(−x)+C, và F(−1)=2ln1+C=C=3. Vậy F=2ln(−x)+3. Kiểm F'=2/x trên nhánh âm.
**D6:** Không dùng ln x cho x âm; phép đổi ln|x| thành ln(−x) chỉ hợp lệ trên x<0.

## THPT-TOP11-P05 · TOP11-O05

item_id: THPT-TOP11-P05
outcome_id: TOP11-O05
role: TOPIC_PRACTICE
difficulty_band: BASIC_TO_APPLY
content_version: 2
problem_family_id: TOP11-EXP
**Đề:** Tính ∫(2e^{2x}+3^x)dx.
**Đáp án:** e^{2x}+3^x/ln3+C.
**Lời giải và điều kiện:** ∫2e^{2x}dx=e^{2x} vì đạo hàm e^{2x} là2e^{2x}. ∫3^xdx=3^x/ln3 vì đạo hàm 3^x=3^x ln3. Cộng được F=e^{2x}+3^x/ln3+C.
**D6:** Không áp quy tắc nguyên hàm x^n cho hàm có x ở số mũ; dùng đạo hàm mũ ngược.

## THPT-TOP11-P06 · TOP11-O06

item_id: THPT-TOP11-P06
outcome_id: TOP11-O06
role: TOPIC_PRACTICE
difficulty_band: BASIC_TO_APPLY
content_version: 2
problem_family_id: TOP11-TRIG
**Đề:** Tính ∫(2cos x−3sin x)dx.
**Đáp án:** 2sin x+3cos x+C (x radian).
**Lời giải và điều kiện:** Với x đo radian, ∫2cos x dx=2sin x; ∫−3sin x dx=+3cos x do (cos x)'=−sin x. Họ nguyên hàm là 2sin x+3cos x+C; kiểm ngược cả hai dấu.
**D6:** Quên dấu âm của đạo hàm cos dễ gây sai nguyên hàm sin; luôn đạo hàm kết quả để kiểm.

## THPT-TOP11-P07 · TOP11-O07

item_id: THPT-TOP11-P07
outcome_id: TOP11-O07
role: TOPIC_PRACTICE
difficulty_band: BASIC_TO_APPLY
content_version: 2
problem_family_id: TOP11-RECOVERY
**Đề:** Với v(t)=6t−4, s(0)=3, tìm s(2).
**Đáp án:** s(2)=12−8+3=7m.
**Lời giải và điều kiện:** Vì s'=v=6t−4, tích phân được s=3t²−4t+C. Dùng s(0)=3⇒C=3; thế t=2 cho s(2)=12−8+3=7 m. Đây là vị trí, không phải quãng đường.
**D6:** Nếu chỉ tích phân v trên [0,2], bạn tính độ dời rồi còn phải cộng vị trí đầu để tìm s(2).

## THPT-TOP11-P08 · TOP11-O08

item_id: THPT-TOP11-P08
outcome_id: TOP11-O08
role: TOPIC_PRACTICE
difficulty_band: UNDERSTAND_TO_APPLY
content_version: 2
problem_family_id: TOP11-FTC
**Đề:** Tính ∫₀²(3x²+1)dx.
**Đáp án:** [x³+x]₀²=8+2=10.
**Lời giải và điều kiện:** Lấy F=x³+x vì F'=3x²+1. Theo Newton–Leibniz, ∫₀²(3x²+1)dx=F(2)−F(0)=(8+2)−0=10. Tích phân xác định là số, không cộng +C.
**D6:** Ghi hai cận rõ ràng và luôn trừ giá trị tại cận dưới.

## THPT-TOP11-P09 · TOP11-O09

item_id: THPT-TOP11-P09
outcome_id: TOP11-O09
role: TOPIC_PRACTICE
difficulty_band: UNDERSTAND_TO_APPLY
content_version: 2
problem_family_id: TOP11-LINEAR
**Đề:** Tính ∫₁³(2x+1)dx−∫₁³x dx.
**Đáp án:** ∫₁³(x+1)dx=[x²/2+x]₁³=(9/2+3)−(1/2+1)=6.
**Lời giải và điều kiện:** Hai tích phân cùng cận, nên gộp ∫₁³[(2x+1)−x]dx=∫₁³(x+1)dx. Nguyên hàm F=x²/2+x, hiệu F(3)−F(1)=(9/2+3)−(1/2+1)=6.
**D6:** Nếu cận khác nhau, không gộp trực tiếp. Kiểm dấu của dấu trừ trước khi cộng hạng.

## THPT-TOP11-P10 · TOP11-O10

item_id: THPT-TOP11-P10
outcome_id: TOP11-O10
role: TOPIC_PRACTICE
difficulty_band: UNDERSTAND_TO_APPLY
content_version: 2
problem_family_id: TOP11-ORIENTED
**Đề:** Tính ∫₃¹ x²dx.
**Đáp án:** −26/3.
**Lời giải và điều kiện:** Dùng đảo cận: ∫₃¹x²dx=−∫₁³x²dx=−[x³/3]₁³=−(27−1)/3=−26/3. Giá trị âm do chiều lấy tích phân, không phải diện tích âm.
**D6:** Khi cận trên nhỏ hơn cận dưới, đổi chỗ và đặt dấu trừ một lần.

## THPT-TOP11-P11 · TOP11-O11

item_id: THPT-TOP11-P11
outcome_id: TOP11-O11
role: TOPIC_PRACTICE
difficulty_band: UNDERSTAND_TO_APPLY
content_version: 2
problem_family_id: TOP11-POS_AREA
**Đề:** Tính diện tích dưới y=x² trên [0,2].
**Đáp án:** S=8/3 đơn vị diện tích.
**Lời giải và điều kiện:** Vì x²≥0 liên tục trên [0,2], diện tích đúng bằng tích phân ∫₀²x²dx=[x³/3]₀²=8/3 đơn vị². Nếu f đổi dấu, công thức diện tích phải dùng |f|.
**D6:** Đừng quên xác nhận f≥0 trên đoạn trước khi gọi tích phân là diện tích hình học.

## THPT-TOP11-P12 · TOP11-O12

item_id: THPT-TOP11-P12
outcome_id: TOP11-O12
role: TOPIC_PRACTICE
difficulty_band: UNDERSTAND_TO_APPLY
content_version: 2
problem_family_id: TOP11-SIGNED
**Đề:** Với f=x trên [−2,1], tính tích phân có dấu và diện tích.
**Đáp án:** ∫−₂¹x dx=(1−4)/2=−3/2; diện tích 2+1/2=5/2.
**Lời giải và điều kiện:** Tích phân có dấu I=∫_{−2}^{1}x dx=[x²/2]_{−2}^{1}=1/2−2=−3/2. Để tính diện tích, chia tại x=0: S=∫_{−2}⁰(−x)dx+∫₀¹x dx=2+1/2=5/2 đơn vị². |I|=3/2 khác S.
**D6:** Tìm nghiệm làm f đổi dấu rồi lấy trị tuyệt đối từng phần; không lấy |∫f| thay ∫|f|.

## THPT-TOP11-P13 · TOP11-O13

item_id: THPT-TOP11-P13
outcome_id: TOP11-O13
role: TOPIC_PRACTICE
difficulty_band: UNDERSTAND_TO_APPLY
content_version: 2
problem_family_id: TOP11-TRIG_EXP_DEFINITE
**Đề:** Tính ∫₀^π2sin x dx.
**Đáp án:** [−2cos x]₀^π=2−(−2)=4.
**Lời giải và điều kiện:** Góc đo radian; F=−2cos x vì F'=2sin x. Thế cận: ∫₀^π2sin x dx=−2cosπ−(−2cos0)=2−(−2)=4. Vì sin≥0 trên [0,π], giá trị này cũng là diện tích dưới đồ thị.
**D6:** Nếu ra 0, kiểm lại cosπ=−1 và dấu trừ trước F(0).

## THPT-TOP11-P14 · TOP11-O14

item_id: THPT-TOP11-P14
outcome_id: TOP11-O14
role: TOPIC_PRACTICE
difficulty_band: UNDERSTAND_TO_APPLY
content_version: 2
problem_family_id: TOP11-ACCUMULATE
**Đề:** Với v=3t², s(0)=5, tính s(2).
**Đáp án:** s(2)=5+8=13m.
**Lời giải và điều kiện:** Vì v(t)=s'(t)=3t², độ dời từ0 tới2 là ∫₀²3t²dt=[t³]₀²=8. Vị trí cuối s(2)=s(0)+8=5+8=13 m. Không dùng v(2)×2 vì vận tốc không hằng.
**D6:** Phân biệt độ dời và vị trí cuối: vị trí cuối bằng vị trí đầu cộng độ dời.

## THPT-TOP11-P15 · TOP11-O15

item_id: THPT-TOP11-P15
outcome_id: TOP11-O15
role: TOPIC_PRACTICE
difficulty_band: APPLY_TO_TRANSFER
content_version: 2
problem_family_id: TOP11-CURVE_AREA
**Đề:** Tính diện tích dưới y=√x trên [0,4].
**Đáp án:** 16/3 đơn vị².
**Lời giải và điều kiện:** √x=x^{1/2} liên tục, không âm trên [0,4]; S=∫₀⁴x^{1/2}dx=[(2/3)x^{3/2}]₀⁴=(2/3)·8=16/3 đơn vị².
**D6:** Nếu tính nhầm ∫√x, hãy tăng số mũ từ1/2 thành3/2 rồi chia3/2.

## THPT-TOP11-P16 · TOP11-O16

item_id: THPT-TOP11-P16
outcome_id: TOP11-O16
role: TOPIC_PRACTICE
difficulty_band: APPLY_TO_TRANSFER
content_version: 2
problem_family_id: TOP11-SPLIT_AXIS
**Đề:** Tính S giữa y=|x| và Ox trên [−1,2].
**Đáp án:** S=1/2+2=5/2.
**Lời giải và điều kiện:** y=|x| không âm. Trên [−1,0], |x|=−x cho S₁=∫_{−1}⁰(−x)dx=1/2; trên [0,2], |x|=x cho S₂=∫₀²x dx=2. Tổng S=5/2 đơn vị².
**D6:** Trị tuyệt đối đổi công thức tại x=0; chia đoạn để tích phân thành biểu thức đại số đơn giản.

## THPT-TOP11-P17 · TOP11-O17

item_id: THPT-TOP11-P17
outcome_id: TOP11-O17
role: TOPIC_PRACTICE
difficulty_band: APPLY_TO_TRANSFER
content_version: 2
problem_family_id: TOP11-BETWEEN_UNCROSSED
**Đề:** Tính diện tích giữa y=x+2 và y=x² trên [0,2].
**Đáp án:** Vì x+2−x²=(2−x)(x+1)≥0, S=∫₀²(x+2−x²)dx=10/3.
**Lời giải và điều kiện:** Trên [0,2], f−g=(x+2)−x²=(2−x)(x+1)≥0 nên đường y=x+2 ở trên y=x². Diện tích S=∫₀²(x+2−x²)dx=[x²/2+2x−x³/3]₀²=2+4−8/3=10/3 đơn vị².
**D6:** Trước khi lấy hiệu, kiểm dấu f−g để xác định đường nào ở trên trên toàn khoảng.

## THPT-TOP11-P18 · TOP11-O18

item_id: THPT-TOP11-P18
outcome_id: TOP11-O18
role: TOPIC_PRACTICE
difficulty_band: APPLY_TO_TRANSFER
content_version: 2
problem_family_id: TOP11-BETWEEN_CROSSED
**Đề:** Tính S giữa y=x và y=x² trên [0,2].
**Đáp án:** 1 đơn vị² (giao 0,1 và chia tại1).
**Lời giải và điều kiện:** Hai đường giao khi x=x² ⇔ x=0 hoặc1. Trên (0,1), x−x²>0; trên (1,2), x−x²<0. Diện tích S=∫₀¹(x−x²)dx+∫₁²(x²−x)dx=1/6+5/6=1 đơn vị².
**D6:** Nếu hai đường đổi thứ tự, phải chia tại giao điểm và cộng phần dương, không để diện tích triệt dấu.

## THPT-TOP11-P19 · TOP11-O19

item_id: THPT-TOP11-P19
outcome_id: TOP11-O19
role: TOPIC_PRACTICE
difficulty_band: APPLY_TO_TRANSFER
content_version: 2
problem_family_id: TOP11-MODEL_INTERSECTIONS
**Đề:** Tính S giữa y=2x và y=x² từ hai điểm giao.
**Đáp án:** 4/3 đơn vị².
**Lời giải và điều kiện:** Giao điểm y=2x và y=x² cho 2x=x²⇔x(x−2)=0, x=0 hoặc2. Trên [0,2], 2x−x²=x(2−x)≥0. Vậy diện tích giới hạn S=∫₀²(2x−x²)dx=[x²−x³/3]₀²=4−8/3=4/3 đơn vị².
**D6:** Cận của hình kín xuất phát từ giao điểm, không đoán trên nét vẽ.

## THPT-TOP11-P20 · TOP11-O20

item_id: THPT-TOP11-P20
outcome_id: TOP11-O20
role: TOPIC_PRACTICE
difficulty_band: APPLY_TO_TRANSFER
content_version: 2
problem_family_id: TOP11-SQUARE_SLICES
**Đề:** Cho thiết diện hình vuông cạnh x+1 trên [0,1], tính V.
**Đáp án:** V=7/3 đơn vị³.
**Lời giải và điều kiện:** Tiết diện vuông cạnh x+1 có diện tích A(x)=(x+1)²=x²+2x+1. Thể tích V=∫₀¹A(x)dx=[x³/3+x²+x]₀¹=1/3+1+1=7/3 đơn vị³. Không nhân π vì không có hình tròn.
**D6:** Phân biệt cạnh dài (đơn vị) và diện tích lát cắt (đơn vị²) trước khi tích phân thành thể tích.

## THPT-TOP11-P21 · TOP11-O21

item_id: THPT-TOP11-P21
outcome_id: TOP11-O21
role: TOPIC_PRACTICE
difficulty_band: APPLY_TO_TRANSFER
content_version: 2
problem_family_id: TOP11-CIRCULAR_SLICES
**Đề:** Cho r(x)=x trên [0,2], tính V hình tròn cắt vuông góc Ox.
**Đáp án:** V=8π/3 đơn vị³.
**Lời giải và điều kiện:** Tiết diện hình tròn bán kính r(x)=x, diện tích A(x)=πx². V=∫₀²πx²dx=π[x³/3]₀²=8π/3 đơn vị³. Điều kiện x≥0 trên [0,2] đảm bảo bán kính hợp lệ.
**D6:** Dùng diện tích đĩa πr², không dùng chu vi 2πr hoặc chỉ bán kính r.

## THPT-TOP11-P22 · TOP11-O22

item_id: THPT-TOP11-P22
outcome_id: TOP11-O22
role: TOPIC_PRACTICE
difficulty_band: APPLY_TO_TRANSFER
content_version: 2
problem_family_id: TOP11-WASHERS
**Đề:** Cho miền 0≤x≤2, 0≤y≤√x quay quanh Ox, V?
**Đáp án:** 2π đơn vị³.
**Lời giải và điều kiện:** Quay vùng 0≤y≤√x, 0≤x≤2 quanh Ox: tiết diện là đĩa bán kính √x. Diện tích A(x)=π(√x)²=πx; V=π∫₀²x dx=π[x²/2]₀²=2π đơn vị³.
**D6:** Nếu lấy V=8π, bạn đã thế cận x=4 của ví dụ kiến thức thay vì x=2 trong chính đề bài. Luôn đọc lại cận hiện tại.

## THPT-TOP11-W01 · TOP11-O02

item_id: THPT-TOP11-W01
outcome_id: TOP11-O02
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (role label only, never clone an item)
problem_family_id: TOP11-ANTIDERIVATIVE_INITIAL_VALUE
difficulty_band: TRANSFER
content_version: 1
**Đề:** Cho F'(x)=3x²−4x+1 trên ℝ và F(1)=2. (a) Viết họ nguyên hàm. (b) Tìm C. (c) Tính F(2). (d) Chứng minh nghiệm là duy nhất trên ℝ trong họ nguyên hàm.
**Đáp án:** F=x³−2x²+x+2; F(2)=8−8+2+2=4; C=2.
**Lời giải có lập luận:** Nguyên hàm F=x³−2x²+x+C; F(1)=1−2+1+C=C=2. F(2)=8−8+2+2=4. Kiểm F'=3x²−4x+1. Hai nguyên hàm của cùng đạo hàm trên khoảng ℝ chỉ khác nhau hằng; dữ kiện F(1)=2 xác định C duy nhất.
**Rubric /7:**
1. Viết nguyên hàm x³ đúng (1đ)
2. Viết −2x² đúng (1đ)
3. Viết +x và +C đúng (1đ)
4. Thay F(1) chính xác (1đ)
5. Giải C=2 (1đ)
6. Tính F(2)=4 (1đ)
7. Kiểm đạo hàm/giải thích duy nhất trên ℝ (1đ)
**D6:** Đặt F=F₀+C rồi thay điều kiện vào F, không phải vào F'.

## THPT-TOP11-W02 · TOP11-O04

item_id: THPT-TOP11-W02
outcome_id: TOP11-O04
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (role label only, never clone an item)
problem_family_id: TOP11-LOG_ABS_DOMAIN
difficulty_band: TRANSFER
content_version: 1
**Đề:** Trên khoảng (−∞,0), cho F'(x)=2/x+cos x và F(−1)=4. (a) Tìm họ nguyên hàm. (b) Xác định F đúng miền với hằng C. (c) Kiểm đạo hàm và giá trị đầu. (d) Nêu vì sao không dùng ln x trên khoảng âm.
**Đáp án:** F(x)=2ln(−x)+sin x+4+sin1 (x<0).
**Lời giải có lập luận:** Vì x<0 nên ∫2/x dx=2ln(−x), và ∫cos x dx=sin x. F=2ln(−x)+sin x+C. F(−1)=0−sin1+C=4⇒C=4+sin1. Đạo hàm ln(−x) là (−1)/(−x)=1/x, nên F'=2/x+cos x; F(−1)=4. ln x không xác định thực nếu x<0.
**Rubric /7:**
1. Giữ miền x<0 (1đ)
2. Nguyên hàm 2/x thành 2ln(−x) (1đ)
3. Nguyên hàm cos x đúng (1đ)
4. Lập F=...+C (1đ)
5. Tính C=4+sin1 (1đ)
6. Kiểm F' và F(−1) (1đ)
7. Giải thích ln x không hợp lệ x<0 (1đ)
**D6:** Ghi ln|x| trên mỗi khoảng không chứa0, sau mới dùng giá trị đầu.

## THPT-TOP11-W03 · TOP11-O12

item_id: THPT-TOP11-W03
outcome_id: TOP11-O12
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (role label only, never clone an item)
problem_family_id: TOP11-SIGNED_AREA_DISTANCE
difficulty_band: TRANSFER
content_version: 1
**Đề:** Một vật có vận tốc v(t)=t−1 (m/s) trong 0≤t≤2 s. (a) Tính độ dời bằng tích phân. (b) Xác định thời điểm đổi chiều. (c) Tính tổng quãng đường. (d) Giải thích vì sao không dùng trị tuyệt đối độ dời làm quãng đường.
**Đáp án:** Độ dời=0 m, đổi chiều ở t=1 s, quãng đường=1 m.
**Lời giải có lập luận:** ∫₀²(t−1)dt=[t²/2−t]₀²=2−2=0. v<0 trên (0,1), v>0 trên (1,2), nên đổi chiều tại1. Quãng đường ∫₀¹(1−t)dt+∫₁²(t−1)dt=1/2+1/2=1 m. |∫v|=0 khác ∫|v|=1 vì hai đoạn đối chiều triệt trong độ dời.
**Rubric /7:**
1. Đặt đúng tích phân v(t) (1đ)
2. Tính độ dời0 (1đ)
3. Giải v(t)=0 tại1 (1đ)
4. Xét dấu v hai bên (1đ)
5. Lập hai tích phân trị tuyệt đối (1đ)
6. Tính quãng đường1m (1đ)
7. Giải thích độ dời và quãng đường khác nhau (1đ)
**D6:** Thấy v đổi dấu phải tách khoảng để tính ∫|v|, không lấy trị tuyệt đối toàn tổng.

## THPT-TOP11-W04 · TOP11-O18

item_id: THPT-TOP11-W04
outcome_id: TOP11-O18
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (role label only, never clone an item)
problem_family_id: TOP11-TWO_CURVES_CROSS
difficulty_band: TRANSFER
content_version: 1
**Đề:** Tính diện tích giới hạn bởi hai đường y=x và y=x² trên đoạn [0,2]. (a) Giải giao điểm. (b) Xác định đường trên từng khoảng. (c) Thiết lập hai tích phân. (d) Tính diện tích và so với tích phân đại số ∫₀²(x−x²)dx.
**Đáp án:** Giao x=0,1. S=∫₀¹(x−x²)+∫₁²(x²−x)=1. Tích phân đại số ∫₀²(x−x²)=−2/3, không phải diện tích.
**Lời giải có lập luận:** x=x² ⇒ x=0 hoặc1. Trên (0,1), x>x²; trên (1,2), x²>x. S=[x²/2−x³/3]₀¹+[x³/3−x²/2]₁²=(1/2−1/3)+(8/3−2−(1/3−1/2))=1/6+5/6=1. Trong khi ∫₀²(x−x²)dx=[x²/2−x³/3]₀²=2−8/3=−2/3. Âm cho thấy không phải diện tích hình học.
**Rubric /7:**
1. Giải x=0,1 (1đ)
2. Nêu dấu trên (0,1) (1đ)
3. Nêu dấu trên (1,2) (1đ)
4. Viết đủ hai tích phân không âm (1đ)
5. Tính phần đầu1/6 (1đ)
6. Tính phần sau5/6 và S=1 (1đ)
7. So với tích phân đại số −2/3 đúng (1đ)
**D6:** Một dấu trừ duy nhất qua điểm giao làm mất diện tích; dùng tích phân trị tuyệt đối chia đoạn.

## THPT-TOP11-W05 · TOP11-O20

item_id: THPT-TOP11-W05
outcome_id: TOP11-O20
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (role label only, never clone an item)
problem_family_id: TOP11-SQUARE_CROSS_SECTIONS
difficulty_band: TRANSFER
content_version: 1
**Đề:** Một khối có thiết diện vuông góc Ox là hình vuông cạnh s(x)=x+1 cm với 0≤x≤2 cm. (a) Nêu diện tích mặt cắt. (b) Thiết lập thể tích. (c) Tính V. (d) Giải thích vì sao không nhân π.
**Đáp án:** A=(x+1)² cm², V=∫₀²(x+1)² dx=26/3 cm³; không nhân π.
**Lời giải có lập luận:** Tiết diện vuông cạnh x+1 nên A=(x+1)²=x²+2x+1 cm². V=∫₀² A dx=[x³/3+x²+x]₀²=8/3+4+2=26/3 cm³. Hình vuông có diện tích s², còn πr² là thiết diện tròn nên nhân π sai.
**Rubric /7:**
1. Miền [0,2] và đơn vị cm (1đ)
2. A=(x+1)² cm² (1đ)
3. Khai triển chính xác (1đ)
4. Lập V=∫A dx đúng cận (1đ)
5. Tính nguyên hàm (1đ)
6. Giá trị26/3 cm³ (1đ)
7. Nêu không có π vì mặt cắt vuông (1đ)
**D6:** Phải xác định loại thiết diện trước khi chọn công thức diện tích.

## THPT-TOP11-W06 · TOP11-O22

item_id: THPT-TOP11-W06
outcome_id: TOP11-O22
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (role label only, never clone an item)
problem_family_id: TOP11-WASHER_REVOLUTION
difficulty_band: TRANSFER
content_version: 1
**Đề:** Miền 0≤x≤2, x≤y≤2 quay quanh trục Ox. (a) Mô tả bán kính ngoài, trong của tiết diện. (b) Thiết lập công thức vành khăn. (c) Tính thể tích. (d) Nêu vì sao không dùng π∫(2−x)²dx.
**Đáp án:** R=2, r=x; V=π∫₀²(4−x²)dx=16π/3 đơn vị³.
**Lời giải có lập luận:** Với x∈[0,2], y từ x tới2 nên quay quanh Ox cho vành khăn bán kính ngoài R=2, trong r=x. Diện tích A=π(R²−r²)=π(4−x²). V=π[x·4−x³/3]₀²=π(8−8/3)=16π/3. (R−r)²=4−4x+x² khác R²−r², không biểu diễn diện tích vành khăn; chỉ dùng π∫f² khi vùng chạm trục.
**Rubric /7:**
1. Xác định miền và trục Ox (1đ)
2. Bán kính ngoài R=2 (1đ)
3. Bán kính trong r=x (1đ)
4. Thiết lập π∫(4−x²) (1đ)
5. Nguyên hàm đúng (1đ)
6. V=16π/3 và đơn vị³ (1đ)
7. Giải thích sai khác giữa bình phương hiệu và hiệu bình phương (1đ)
**D6:** Nếu vùng không chạm trục, trừ diện tích hai đĩa: π(R²−r²), không bình phương (R−r).

## Q15 / Q16 identity and assessment boundary

22 P +6 W original canonical bodies. 88 old canonical IDs are separate references, never copied. PUBLIC Self Check 22 placements reuse P01–P22. Public Practice answer visibility makes it `CLIENT_SELF_CHECK_NO_MASTERY`, not held-out `TOPIC_READINESS`. No confidential source, private stem/key/solution/rubric or Skill Mastery.
