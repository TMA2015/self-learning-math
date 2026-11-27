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
**Đề bài:** Cho \(u_n=\frac{4n+7}{n+3}\), n nguyên dương. (a) Biến đổi về \(4-\frac5{n+3}\). (b) Tìm cận dưới đạt và cận trên không đạt. (c) Chứng minh tăng. (d) Tính giới hạn và giải thích vì sao không có số hạng bằng giới hạn.

**Đáp án:** \(u_n=4-\frac5{n+3}\), \(u_1=\frac{11}4\), \(\frac{11}4\le u_n<4\), dãy tăng, giới hạn 4.

**Lời giải:** (a) \(4n+7=4(n+3)-5\), nên \(u_n=4-\frac5{n+3}\). (b) Với \(n\ge1\), \(0<\frac5{n+3}\le\frac54\). Suy ra \(\frac{11}4\le u_n<4\), cận dưới đạt tại \(n=1\), cận trên không đạt vì phân số luôn dương. (c) \(u_{n+1}-u_n=\frac5{n+3}-\frac5{n+4}=\frac5{(n+3)(n+4)}>0\), nên tăng nghiêm ngặt. (d) Khi \(n\to\infty\), \(\frac5{n+3}\to0\), nên \(u_n\to4\). Không có n hữu hạn thỏa \(u_n=4\).

**Rubric tự đối chiếu:** 7 điểm: đổi dạng (1); cận dưới (1); cận trên không đạt (1); hiệu đúng (1); kết luận tăng (1); giới hạn 4 (1); phân biệt giới hạn và số hạng (1). Chấp nhận cách giải khác đúng; không trừ lặp lỗi kéo theo.

**D6 tự khắc phục:** Viết phần bị trừ là phân số dương, rồi xét cận, hiệu và giới hạn.


## THPT-TOP08-W02 · TOP08-O05

item_id: THPT-TOP08-W02
outcome_id: TOP08-O05
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (label only, no separate bank)
problem_family_id: TOP08-GEOMETRIC_TAIL_STRICT
difficulty_band: TRANSFER
content_version: 2
**Đề bài:** Cấp số nhân có \(u_1=15,q=-\frac14\). (a) Viết \(S_n\) và điều kiện tính tổng vô hạn. (b) Tính \(S_\infty\). (c) Tìm n nguyên dương nhỏ nhất sao cho \(|S_\infty-S_n|<\frac3{64}\); giải thích vì sao \(n=4\) chưa đủ.

**Đáp án:** \(S_n=12[1-(-\frac14)^n]\), \(S_\infty=12\), n nhỏ nhất 5.

**Lời giải:** Vì \(q\ne1\), \(S_n=\frac{15[1-(-\frac14)^n]}{1+\frac14}=12[1-(-\frac14)^n]\). Vì \(|q|=\frac14<1\), \(q^n\to0\) và \(S_\infty=12\). Sai số tuyệt đối \(|S_\infty-S_n|=\frac{12}{4^n}\). Điều kiện \(\frac{12}{4^n}<\frac3{64}\iff4^n>256=4^4\), nên n nguyên dương nhỏ nhất là 5. Tại \(n=4\), sai số bằng \(\frac3{64}\), chưa thỏa; tại \(n=5\), sai số bằng \(\frac3{256}<\frac3{64}\).

**Rubric tự đối chiếu:** 7 điểm: công bội và điều kiện (1); tổng riêng (1); tổng vô hạn (1); sai số (1); bất đẳng thức (1); n nhỏ nhất (1); giải thích n=4 không thỏa (1). Chấp nhận cách giải khác đúng; không trừ lặp lỗi kéo theo.

**D6 tự khắc phục:** Thay \(n=4\) để phân biệt dấu nhỏ hơn nghiêm ngặt với dấu bằng.


## THPT-TOP08-W03 · TOP08-O07

item_id: THPT-TOP08-W03
outcome_id: TOP08-O07
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (label only, no separate bank)
problem_family_id: TOP08-ABS_ONE_SIDED_LIMIT
difficulty_band: TRANSFER
content_version: 1
**Đề bài:** Cho \(f(x)=\frac{x^2-4}{|x-2|}\) với \(x\ne2\). (a) Viết f theo hai miền \(x<2\), \(x>2\). (b) Tính giới hạn trái, phải tại 2. (c) Kết luận giới hạn hai phía và giải thích vì sao dạng \(\frac00\) không cho phép kết luận bằng 0.

**Đáp án:** Khi \(x<2\), \(f(x)=-(x+2)\); khi \(x>2\), \(f(x)=x+2\). Giới hạn trái -4, phải 4; không tồn tại giới hạn hai phía.

**Lời giải:** Với \(x\ne2\), tử số là \((x-2)(x+2)\). Nếu \(x<2\), \(|x-2|=-(x-2)\), nên \(f(x)=-(x+2)\) và \(\lim_{x\to2^-}f(x)=-4\). Nếu \(x>2\), \(|x-2|=x-2\), nên \(f(x)=x+2\) và \(\lim_{x\to2^+}f(x)=4\). Hai giới hạn một phía khác nhau, vậy không có giới hạn hai phía. Phân thức gốc không xác định tại 2; \(\frac00\) là dạng vô định, không phải một số hay một giới hạn.

**Rubric tự đối chiếu:** 7 điểm: phân tích tử (1); phân dấu trị tuyệt đối (1); rút nhánh trái (1); rút nhánh phải (1); giới hạn trái (1); giới hạn phải (1); kết luận và giải thích dạng vô định (1). Chấp nhận cách giải khác đúng; không trừ lặp lỗi kéo theo.

**D6 tự khắc phục:** Đánh dấu điểm 2 trên trục số và kiểm dấu của \(x-2\) ở từng phía.


## THPT-TOP08-W04 · TOP08-O18

item_id: THPT-TOP08-W04
outcome_id: TOP08-O18
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (label only, no separate bank)
problem_family_id: TOP08-PIECEWISE_IVT_UNIQUENESS
difficulty_band: TRANSFER
content_version: 1
**Đề bài:** Cho \(f(x)=2-x^2\) nếu \(x\le1\), và \(f(x)=ax+3\) nếu \(x>1\). (a) Tìm a để f liên tục tại 1. (b) Với a đó, chứng minh có nghiệm \(f(x)=0\) trong \((0;2)\). (c) Tìm nghiệm và giải thích vì sao duy nhất trên \([0;2]\), không chỉ viện dẫn định lý đổi dấu.

**Đáp án:** \(a=-2\); \(f(0)=2>0,f(2)=-1<0\); nghiệm duy nhất \(x=\frac32\).

**Lời giải:** (a) \(f(1)=1\), giới hạn trái 1, giới hạn phải \(a+3\). Liên tục khi \(a+3=1\), suy ra \(a=-2\). (b) Với giá trị này, mỗi nhánh là đa thức, hai nhánh khớp tại 1, nên f liên tục trên \([0;2]\). \(f(0)=2>0,\ f(2)=-1<0\). Theo định lý giá trị trung gian, có nghiệm trong \((0;2)\). (c) Khi \(0\le x\le1\), \(2-x^2\ge1>0\) nên không có nghiệm. Khi \(1<x\le2\), \(f(x)=-2x+3=0\iff x=\frac32\), thuộc nhánh này. Do đó đây là nghiệm duy nhất trên đoạn; sự duy nhất đến từ xét từng nhánh, không chỉ từ đổi dấu.

**Rubric tự đối chiếu:** 7 điểm: \(f(1)\) và giới hạn trái (1); giới hạn phải (1); a (1); liên tục trên đoạn (1); đổi dấu và tồn tại (1); giải nhánh phải (1); loại nhánh trái và kết luận duy nhất (1). Chấp nhận cách giải khác đúng; không trừ lặp lỗi kéo theo.

**D6 tự khắc phục:** Xét dấu trên \([0;1]\) và giải phương trình bậc nhất trên \((1;2]\); không dùng định lý đổi dấu để kết luận duy nhất.


## Ràng buộc Q15/Q16

18 lượt self-check công khai tham chiếu P01–P18 (cùng 18 `item_id`), không tạo 18 đề mới. Các `item_id` Written W01–W04 giữ chung một rubric và nhãn Anchor không phải thư viện khác. Câu tự kiểm tra công khai đã có đáp án ở luyện tập chỉ được `CLIENT_SELF_CHECK_NO_MASTERY`: không phải nguồn tính Skill Mastery hoặc official TOPIC_READINESS.
