# CĐ08/22 — 22 câu canonical PUBLIC R05 (18 Practice +4 Written)

**Một câu hỏi — một item_id/đề/key/lời giải/D6/rubric.** R05 sửa hai câu Written trùng/cận trùng CĐ07, giữ ID, tăng version; R01 bất biến để tra lịch sử. 36 câu SGK G11 ChV R03 được tham chiếu qua index riêng, không clone. Không có private RD1 ở đây; mọi đáp án đều là PUBLIC/formative.

PACKET_ID: THPT-TOPIC08-LIMITS-CONTINUITY-FULL-R01
CATALOG_TOPIC_ID: CD08
PUBLIC_NEW_CANONICAL: 22
PUBLIC_NEW_PRACTICE: 18
PUBLIC_NEW_WRITTEN: 4
PRIVATE_RD1_IMPORTED: 0
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY

## THPT-TOP08-P01 · TOP08-O01

item_id: THPT-TOP08-P01
outcome_id: TOP08-O01
role: TOPIC_PRACTICE
difficulty_band: BASIC
problem_family_id: TOP08-FINITE_LIMIT
content_version: 1
**Đề:** Dãy u_n=5+4/n với n nguyên dương. Tìm giới hạn khi n→∞; số 5 có nhất thiết là số hạng nào đó của dãy không?
**Đáp án:** lim u_n=5; không số hạng nào bằng 5.
**Lời giải có suy luận:** Vì 4/n→0 nên 5+4/n→5. Với mọi n≥1, u_n−5=4/n>0 nên u_n không bao giờ bằng 5. Giới hạn nói về giá trị tiến tới, không yêu cầu dãy đạt giá trị đó.
**D6 tự khắc phục:** Nếu cho rằng giới hạn phải là số hạng, thử giải 4/n=0 với n hữu hạn.

## THPT-TOP08-P02 · TOP08-O02

item_id: THPT-TOP08-P02
outcome_id: TOP08-O02
role: TOPIC_PRACTICE
difficulty_band: UNDERSTAND
problem_family_id: TOP08-OSCILLATION_DIVERGENCE
content_version: 1
**Đề:** Xét v_n=(−1)^n+1/n, n≥1. Dãy có giới hạn hữu hạn hay giới hạn ±∞ không? Giải thích bằng hai dãy chỉ số chẵn/lẻ.
**Đáp án:** Không có giới hạn hữu hạn hay ±∞.
**Lời giải có suy luận:** Với n=2k, v_{2k}=1+1/(2k)→1. Với n=2k+1, v_{2k+1}=−1+1/(2k+1)→−1. Hai dãy con tiến tới hai số khác nhau; không thể có giới hạn chung, và cũng không tiến tới vô cực cùng dấu.
**D6 tự khắc phục:** Đừng chỉ nhìn 1/n→0 rồi kết luận cả dãy về 0: thành phần (−1)^n vẫn dao động.

## THPT-TOP08-P03 · TOP08-O03

item_id: THPT-TOP08-P03
outcome_id: TOP08-O03
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP08-GEOMETRIC_QN
content_version: 1
**Đề:** Tính lim(n→∞)(−2/5)^n và cho biết việc luân phiên dấu có ngăn dãy hội tụ không.
**Đáp án:** Giới hạn bằng 0; luân phiên dấu không ngăn hội tụ.
**Lời giải có suy luận:** Do |−2/5|=2/5<1, trị tuyệt đối |(−2/5)^n|=(2/5)^n→0. Suy ra chính dãy tiến về 0 theo định lí kẹp; dấu có thể luân phiên nhưng độ lớn giảm về 0.
**D6 tự khắc phục:** So sánh q=−1 (không hội tụ) với q=−2/5 (hội tụ) bằng độ lớn |q|.

## THPT-TOP08-P04 · TOP08-O04

item_id: THPT-TOP08-P04
outcome_id: TOP08-O04
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP08-SEQUENCE_LEADING_POWERS
content_version: 1
**Đề:** Tính lim(n→∞)(7n²−3n+1)/(2n²+n) với n≥1.
**Đáp án:** 7/2.
**Lời giải có suy luận:** Chia cả tử/mẫu cho n²: (7−3/n+1/n²)/(2+1/n)→7/2. Mẫu giới hạn bằng 2 khác 0 nên luật thương hợp lệ.
**D6 tự khắc phục:** Không cho rằng ∞/∞ là đáp số; đưa về biểu thức có giới hạn hữu hạn.

## THPT-TOP08-P05 · TOP08-O05

item_id: THPT-TOP08-P05
outcome_id: TOP08-O05
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP08-INFINITE_GP
content_version: 1
**Đề:** Tính tổng vô hạn 12+3+3/4+3/16+⋯, và nêu điều kiện dùng công thức.
**Đáp án:** 16; công bội q=1/4 thỏa |q|<1.
**Lời giải có suy luận:** Đây là CSN a=12, q=3/12=1/4. S_n=12(1−(1/4)^n)/(1−1/4); khi n→∞ thì (1/4)^n→0 nên tổng vô hạn bằng 12/(3/4)=16.
**D6 tự khắc phục:** Nếu áp dụng khi |q|≥1 thì không được dùng công thức tổng lùi vô hạn; quay lại kiểm giới hạn số hạng.

## THPT-TOP08-P06 · TOP08-O06

item_id: THPT-TOP08-P06
outcome_id: TOP08-O06
role: TOPIC_PRACTICE
difficulty_band: UNDERSTAND
problem_family_id: TOP08-PUNCTURED_NEIGHBORHOOD
content_version: 1
**Đề:** Với f(x)=(x²−6x+8)/(x−2), x≠2, tính lim(x→2)f(x). Hàm có cần định nghĩa tại x=2 để có giới hạn không?
**Đáp án:** Giới hạn −2; f(2) không cần được định nghĩa.
**Lời giải có suy luận:** Tử=(x−2)(x−4). Với x≠2, f(x)=x−4, nên khi x→2 thì f(x)→−2. Phép rút gọn chỉ đúng trong lân cận loại điểm; giới hạn không xác nhận f(2).
**D6 tự khắc phục:** Nếu thế trực tiếp ra 0/0, đó là tín hiệu cần biến đổi, không phải kết quả.

## THPT-TOP08-P07 · TOP08-O07

item_id: THPT-TOP08-P07
outcome_id: TOP08-O07
role: TOPIC_PRACTICE
difficulty_band: UNDERSTAND
problem_family_id: TOP08-ONE_SIDED_JUMP
content_version: 1
**Đề:** Cho f(x)=x+1 nếu x<1, và f(x)=x²+3 nếu x≥1. Tính hai giới hạn một phía tại 1 và quyết định có lim(x→1)f(x) không.
**Đáp án:** Trái 2, phải 4; không tồn tại giới hạn hai phía hữu hạn.
**Lời giải có suy luận:** Khi x→1⁻ dùng nhánh x+1 nên được 2. Khi x→1⁺ dùng nhánh x²+3 nên được 4. Hai giới hạn một phía khác nhau thì giới hạn hai phía không tồn tại dù f(1)=4 xác định.
**D6 tự khắc phục:** Không lấy giá trị f(1) thay giới hạn bên trái; đọc điều kiện từng nhánh.

## THPT-TOP08-P08 · TOP08-O08

item_id: THPT-TOP08-P08
outcome_id: TOP08-O08
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP08-ONE_SIDED_INFINITE
content_version: 1
**Đề:** Xét f(x)=(x+1)/(x−2). Khi x→2⁻ và x→2⁺, f(x) tiến tới đâu? Có giới hạn hữu hạn hai phía không?
**Đáp án:** Giới hạn trái −∞, phải +∞; không có giới hạn hai phía hữu hạn.
**Lời giải có suy luận:** Gần x=2, tử x+1→3>0. Mẫu x−2 âm rất nhỏ từ trái ⇒ f→−∞; dương rất nhỏ từ phải ⇒ f→+∞. Không gộp hai vô cực khác dấu thành một giới hạn.
**D6 tự khắc phục:** Lập bảng dấu tử/mẫu trên hai phía trước khi viết ±∞.

## THPT-TOP08-P09 · TOP08-O09

item_id: THPT-TOP08-P09
outcome_id: TOP08-O09
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP08-FUNCTION_INFINITY_EQUAL_DEGREE
content_version: 1
**Đề:** Tính lim(x→−∞)(4x²−3)/(2x²+x).
**Đáp án:** 2.
**Lời giải có suy luận:** Chia tử/mẫu cho x²≠0 khi |x| lớn: (4−3/x²)/(2+1/x)→4/2=2, dù x tiến −∞. Bậc tử và mẫu bằng nhau, giới hạn là tỉ số hệ số dẫn.
**D6 tự khắc phục:** Đừng coi dấu x âm quyết định dấu x²; x² dương ở cả hai phía.

## THPT-TOP08-P10 · TOP08-O10

item_id: THPT-TOP08-P10
outcome_id: TOP08-O10
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP08-INDETERMINATE_FACTOR
content_version: 1
**Đề:** Tính lim(x→3)(x²−x−6)/(x−3). Vì sao phép thế ban đầu chưa có giá trị?
**Đáp án:** 5.
**Lời giải có suy luận:** x²−x−6=(x−3)(x+2). Biểu thức không xác định tại x=3 và thế trực tiếp cho 0/0, nhưng với x≠3 ta khử nhân tử x−3, lấy lim(x+2)=5. Giới hạn khác việc định nghĩa f(3).
**D6 tự khắc phục:** Chỉ khử nhân tử sau khi phân tích và nêu x≠3; 0/0 là dạng vô định.

## THPT-TOP08-P11 · TOP08-O11

item_id: THPT-TOP08-P11
outcome_id: TOP08-O11
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP08-RADICAL_CONJUGATE
content_version: 1
**Đề:** Tính lim(x→4)(√(x+5)−3)/(x−4).
**Đáp án:** 1/6.
**Lời giải có suy luận:** Nhân liên hợp tử: [(√(x+5)−3)(√(x+5)+3)]/[(x−4)(√(x+5)+3)] = (x−4)/[(x−4)(√(x+5)+3)]=1/(√(x+5)+3), x≠4 trong miền. Khi x→4, mẫu→6, lim=1/6.
**D6 tự khắc phục:** Không thay 0/0 bằng 0; kiểm x+5≥0 và mẫu liên hợp khác 0 gần 4.

## THPT-TOP08-P12 · TOP08-O12

item_id: THPT-TOP08-P12
outcome_id: TOP08-O12
role: TOPIC_PRACTICE
difficulty_band: TRANSFER
problem_family_id: TOP08-ASYMPTOTIC_RADICAL
content_version: 1
**Đề:** Tính lim(x→+∞)(√(x²+2x)−x).
**Đáp án:** 1.
**Lời giải có suy luận:** Trực tiếp là dạng ∞−∞. Nhân liên hợp: (2x)/(√(x²+2x)+x). Với x>0 chia cho x được 2/[√(1+2/x)+1]→2/(1+1)=1. Cần x→+∞ để |x|=x; không áp cùng cách chia cho x>0 khi x→−∞.
**D6 tự khắc phục:** Trước khi tách √(x²), viết √(x²)=|x|, không mặc định bằng x trên toàn trục.

## THPT-TOP08-P13 · TOP08-O13

item_id: THPT-TOP08-P13
outcome_id: TOP08-O13
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP08-CONTINUITY_AT_POINT
content_version: 1
**Đề:** f(x)=(x²−4)/(x−2) với x≠2, f(2)=k. Tìm k để f liên tục tại 2.
**Đáp án:** k=4.
**Lời giải có suy luận:** Trong lân cận x≠2, f=x+2 ⇒ lim(x→2)f=4. Liên tục tại 2 đòi f(2) được định nghĩa và bằng giới hạn, nên k=4; các k khác tạo gián đoạn có thể sửa được.
**D6 tự khắc phục:** Nhớ kiểm đủ: giá trị tại điểm, giới hạn hai phía, sự bằng nhau.

## THPT-TOP08-P14 · TOP08-O14

item_id: THPT-TOP08-P14
outcome_id: TOP08-O14
role: TOPIC_PRACTICE
difficulty_band: UNDERSTAND
problem_family_id: TOP08-DISCONTINUITY_TYPES
content_version: 1
**Đề:** Với f(x)=(x²−4x+3)/(x−1) khi x≠1 và f(1)=9, hãy phân loại gián đoạn tại 1 và tìm giá trị thay thế để liên tục.
**Đáp án:** Gián đoạn có thể khử; thay f(1)=−2.
**Lời giải có suy luận:** Tử=(x−1)(x−3). Khi x≠1, f=x−3 nên giới hạn tại 1 là −2; hiện f(1)=9 khác giới hạn. Đổi riêng giá trị ở điểm thành −2 sẽ làm liên tục; đây không phải gián đoạn nhảy hay vô cực.
**D6 tự khắc phục:** Nếu thấy mẫu ban đầu bằng 0 rồi gọi 'vô cực', trước hết thử phân tích tử và xem có triệt tiêu không.

## THPT-TOP08-P15 · TOP08-O15

item_id: THPT-TOP08-P15
outcome_id: TOP08-O15
role: TOPIC_PRACTICE
difficulty_band: UNDERSTAND
problem_family_id: TOP08-CLOSED_INTERVAL_ENDPOINT
content_version: 1
**Đề:** Xét f(x)=√(x(4−x)) trên miền [0,4]. Hàm có liên tục trên đoạn [0,4] theo nghĩa tương đối không? Giá trị ở hai đầu là gì?
**Đáp án:** Có; f(0)=f(4)=0.
**Lời giải có suy luận:** Biểu thức x(4−x)≥0 đúng trên [0,4]; đa thức và căn bậc hai liên tục trên miền thích hợp, nên hàm liên tục bên trong. Tại 0 dùng giới hạn phải bằng f(0)=0; tại 4 dùng giới hạn trái bằng f(4)=0. Không cần giới hạn từ ngoài miền.
**D6 tự khắc phục:** Ở đầu mút, dùng đúng giới hạn một phía phía trong miền thay vì đòi hai phía ngoài miền.

## THPT-TOP08-P16 · TOP08-O16

item_id: THPT-TOP08-P16
outcome_id: TOP08-O16
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP08-CONTINUITY_OPERATIONS_DOMAIN
content_version: 1
**Đề:** Tìm miền xác định và các khoảng/đoạn liên tục theo miền cho f(x)=√(x−1)/(x−3).
**Đáp án:** D=[1,3)∪(3,+∞); liên tục trên mỗi thành phần theo nghĩa tương đối, tại x=1 liên tục phải.
**Lời giải có suy luận:** Cần x−1≥0 ⇒ x≥1, đồng thời x−3≠0 ⇒ x≠3. Căn và phép chia liên tục nơi xác định; tại x=1, f(1)=0/(−2)=0 và giới hạn phải cùng bằng 0. Không nói f liên tục xuyên điểm loại 3.
**D6 tự khắc phục:** Ghi đồng thời điều kiện căn và mẫu; tại 1 chỉ xét từ phải.

## THPT-TOP08-P17 · TOP08-O17

item_id: THPT-TOP08-P17
outcome_id: TOP08-O17
role: TOPIC_PRACTICE
difficulty_band: TRANSFER
problem_family_id: TOP08-IVT_EXISTENCE
content_version: 1
**Đề:** Chứng minh x³+x−1=0 có ít nhất một nghiệm trong (0,1). Định lí giá trị trung gian đã chứng minh tính duy nhất chưa?
**Đáp án:** Ít nhất một nghiệm ở (0,1); chưa suy ra duy nhất chỉ từ IVT.
**Lời giải có suy luận:** g(x)=x³+x−1 là đa thức nên liên tục trên [0,1]. g(0)=−1<0, g(1)=1>0. Theo định lí giá trị trung gian, có c∈(0,1) với g(c)=0. Muốn kết luận duy nhất phải dùng lập luận thêm (chẳng hạn g tăng do x³ và x đều tăng).
**D6 tự khắc phục:** Không viết 'nghiệm duy nhất theo IVT'; IVT chỉ cho tồn tại khi có liên tục và trái dấu.

## THPT-TOP08-P18 · TOP08-O18

item_id: THPT-TOP08-P18
outcome_id: TOP08-O18
role: TOPIC_PRACTICE
difficulty_band: TRANSFER
problem_family_id: TOP08-BISECTION_MODEL
content_version: 1
**Đề:** Mô hình giả định g(t)=t²+t−3, t∈[1,2]. Chứng minh có thời điểm g(t)=0; sau hai bước chia đôi nêu một khoảng dài 1/4 chứa nghiệm.
**Đáp án:** Có nghiệm; khoảng [5/4,3/2] sau 2 bước chia đôi.
**Lời giải có suy luận:** g là đa thức nên liên tục; g(1)=−1<0,g(2)=3>0. Giữa [1,2] tại 3/2: g(3/2)=3/4>0 nên giữ [1,3/2]; giữa khoảng đó tại 5/4: g(5/4)=25/16+5/4−3=−3/16<0 nên giữ [5/4,3/2] dài 1/4. Đây là một mô hình toán giả định, không tự suy diễn dữ liệu thực tế.
**D6 tự khắc phục:** Nếu đổi dấu không đúng khi chia đôi, lập bảng g(đầu),g(giữa),g(cuối), giữ cặp trái dấu.

## THPT-TOP08-W01 · TOP08-O04

item_id: THPT-TOP08-W01
outcome_id: TOP08-O04
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (label only, no separate bank)
problem_family_id: TOP08-SEQ_LIMIT_MONOTONE_BOUNDED
difficulty_band: TRANSFER
content_version: 2
**Đề:** Cho u_n=(4n+7)/(n+3), n≥1. (a) Biến đổi về 4−5/(n+3). (b) Tìm cận dưới đạt và cận trên không đạt. (c) Chứng minh tăng. (d) Tính lim u_n và lý giải giới hạn không phải số hạng.
**Đáp án:** u_n=4−5/(n+3), tăng nghiêm ngặt, 11/4≤u_n<4; u_1=11/4, lim=4, không đạt 4.
**Lời giải đầy đủ:** (a) (4n+7)/(n+3)=4−5/(n+3). (b) Với n≥1, 0<5/(n+3)≤5/4 nên 11/4≤u_n<4; dấu bằng trái tại n=1; 4 không đạt ở n hữu hạn. (c) u_{n+1}−u_n=5/(n+3)−5/(n+4)=5/[(n+3)(n+4)]>0. (d) Vì 5/(n+3)→0, giới hạn u_n là 4 mặc dù không có số hạng bằng 4.
**Rubric tự đối chiếu /7 điểm:**
1. Đổi đúng về 4−5/(n+3) (1đ)
2. Chứng minh 11/4≤u_n (1đ)
3. Chứng minh u_n<4 và không đạt 4 (1đ)
4. Tính hiệu hai số hạng đúng (1đ)
5. Kết luận tăng cho mọi n≥1 (1đ)
6. Tính lim u_n=4 (1đ)
7. Phân biệt giá trị giới hạn và số hạng (1đ)
**D6 tự khắc phục:** Viết u_n=4−5/(n+3), kiểm phần bị trừ có dấu dương, rồi xét cận, hiệu và giới hạn.

## THPT-TOP08-W02 · TOP08-O05

item_id: THPT-TOP08-W02
outcome_id: TOP08-O05
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (label only, no separate bank)
problem_family_id: TOP08-GEOMETRIC_TAIL_STRICT
difficulty_band: TRANSFER
content_version: 2
**Đề:** CSN có u_1=15,q=−1/4. (a) Viết S_n và điều kiện tính tổng vô hạn. (b) Tính S_∞. (c) Tìm n nguyên dương nhỏ nhất để |S_∞−S_n|<3/64; vì sao n=4 không đủ?
**Đáp án:** S_n=12[1−(−1/4)^n], S_∞=12; n nhỏ nhất 5, n=4 sai số đúng 3/64.
**Lời giải đầy đủ:** S_n=15[1−(−1/4)^n]/(1+1/4)=12[1−(−1/4)^n]. Do |q|=1/4<1, q^n→0 và S_∞=12. Sai số |S_∞−S_n|=12/4^n. Muốn 12/4^n<3/64 ⇔ 4^n>256=4^4, nên n nguyên dương nhỏ nhất là 5. Khi n=4, sai số đúng 12/256=3/64, không thỏa dấu nhỏ hơn nghiêm ngặt.
**Rubric tự đối chiếu /7 điểm:**
1. Chỉ rõ q=−1/4 và |q|<1 (1đ)
2. Lập S_n đúng dấu (1đ)
3. Tính S_∞=12 (1đ)
4. Viết đúng sai số 12/4^n (1đ)
5. Chuyển bất đẳng thức thành 4^n>256 (1đ)
6. Tìm n nhỏ nhất bằng 5 (1đ)
7. Chỉ rõ n=4 chỉ đạt bằng 3/64 (1đ)
**D6 tự khắc phục:** Nếu chọn n=4, hãy thay vào sai số và so dấu < với =; luôn lấy trị tuyệt đối khi q âm.

## THPT-TOP08-W03 · TOP08-O07

item_id: THPT-TOP08-W03
outcome_id: TOP08-O07
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (label only, no separate bank)
problem_family_id: TOP08-ABS_ONE_SIDED_LIMIT
difficulty_band: TRANSFER
content_version: 1
**Đề:** Cho f(x)=(x²−4)/|x−2| với x≠2. (a) Viết f theo hai phía x<2 và x>2. (b) Tính giới hạn trái/phải tại 2. (c) Kết luận giới hạn hai phía, giải thích vì sao dạng 0/0 không cho phép thay bằng 0.
**Đáp án:** x<2: f=−(x+2), x>2: f=x+2; trái −4, phải 4, giới hạn hai phía không tồn tại.
**Lời giải đầy đủ:** Với x≠2, x²−4=(x−2)(x+2). Khi x<2, |x−2|=−(x−2) ⇒ f=−(x+2), nên lim trái=−4. Khi x>2, |x−2|=x−2 ⇒ f=x+2, lim phải=4. Hai giới hạn một phía khác nhau nên giới hạn hai phía không tồn tại; 0/0 là dạng vô định tại điểm, không phải một số.
**Rubric tự đối chiếu /7 điểm:**
1. Nhân tử hóa x²−4 (1đ)
2. Phân trường hợp |x−2| đúng (1đ)
3. Rút nhánh x<2 đúng (1đ)
4. Rút nhánh x>2 đúng (1đ)
5. Giới hạn trái −4 (1đ)
6. Giới hạn phải 4 (1đ)
7. Kết luận và nêu 0/0 vô định (1đ)
**D6 tự khắc phục:** Vẽ trục x với 2 là điểm loại, dấu của x−2 đổi khi qua 2.

## THPT-TOP08-W04 · TOP08-O18

item_id: THPT-TOP08-W04
outcome_id: TOP08-O18
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (label only, no separate bank)
problem_family_id: TOP08-PIECEWISE_IVT_UNIQUENESS
difficulty_band: TRANSFER
content_version: 1
**Đề:** Cho f(x)=2−x² khi x≤1, và f(x)=a x+3 khi x>1. (a) Tìm a để f liên tục tại x=1. (b) Với a đó, chứng minh có nghiệm f(x)=0 trong (0,2). (c) Tìm nghiệm và giải thích vì sao duy nhất trên [0,2] (không chỉ viện dẫn IVT).
**Đáp án:** a=−2, f(0)=2>0, f(2)=−1<0, nghiệm duy nhất x=3/2.
**Lời giải đầy đủ:** Tại 1: f(1)=2−1=1, giới hạn trái=1, giới hạn phải=a+3 ⇒ a+3=1, a=−2. Khi đó f liên tục trên [0,2] vì mỗi nhánh là đa thức và khớp tại 1. f(0)=2>0,f(2)=−4+3=−1<0 nên theo IVT có c∈(0,2) với f(c)=0. Với 0≤x≤1, 2−x²≥1>0 nên không có nghiệm; với 1<x≤2, f=−2x+3=0 ⇒ x=3/2 là nghiệm duy nhất. IVT bảo đảm tồn tại, tính duy nhất cần xét hai nhánh.
**Rubric tự đối chiếu /7 điểm:**
1. Tính f(1)=1 (1đ)
2. Tính giới hạn phải a+3 (1đ)
3. Tìm a=−2 (1đ)
4. Chứng minh f liên tục trên đoạn (1đ)
5. Kiểm hai đầu trái dấu và áp IVT (1đ)
6. Giải x=3/2 ở nhánh phải (1đ)
7. Loại nghiệm nhánh trái, kết luận duy nhất (1đ)
**D6 tự khắc phục:** Đừng kết luận duy nhất nhờ IVT; xét dấu trên [0,1] và giải phương trình tuyến tính trên (1,2].

## Ràng buộc Q15/Q16

18 lượt self-check công khai tham chiếu P01–P18 (cùng 18 `item_id`), không tạo 18 đề mới. Các `item_id` Written W01–W04 giữ chung một rubric và nhãn Anchor không phải thư viện khác. Câu tự kiểm tra công khai đã có đáp án ở luyện tập chỉ được `CLIENT_SELF_CHECK_NO_MASTERY`: không phải nguồn tính Skill Mastery hoặc official TOPIC_READINESS.
