# CĐ07/22 — 22 câu PUBLIC canonical mới (18 Practice + 4 Written /7)

Mỗi câu có đúng một `item_id`/đề/đáp án/lời giải/D6/rubric. 47 câu SGK dùng lại qua chỉ mục riêng, không sao chép. Các mô hình tài chính là bài tự biên soạn giả định, không lời khuyên tài chính.

PACKET_ID: THPT-TOPIC07-SEQUENCES-AP-GP-FULL-R01
CATALOG_TOPIC_ID: CD07
PUBLIC_NEW_ORIGINAL: 22
PUBLIC_PRACTICE: 18
PUBLIC_WRITTEN: 4
PRIVATE_RD1_IMPORTED: 0
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY

## THPT-TOP07-P01 · TOP07-O01

item_id: THPT-TOP07-P01
outcome_id: TOP07-O01
role: TOPIC_PRACTICE
difficulty_band: BASIC
problem_family_id: TOP07-FINITE_INDEX
content_version: 1
**Đề:** Cho dãy hữu hạn u_n=2n−1 với n∈{1,2,3,4,5,6}. Liệt kê các số hạng và cho biết vì sao không được viết u_0.
**Đáp án:** 1,3,5,7,9,11; không có u_0 trong miền chỉ số.
**Lời giải có suy luận:** Thế lần lượt n từ 1 đến 6; dãy gồm đúng sáu phần tử có thứ tự. Công thức có thể tính ở n=0 về mặt đại số nhưng ký hiệu dãy đã quy ước chỉ số n∈{1,...,6}, nên u_0 không phải phần tử của dãy đang xét.
**D6 tự khắc phục:** Nhìn lại tập chỉ số trước khi áp công thức.

## THPT-TOP07-P02 · TOP07-O02

item_id: THPT-TOP07-P02
outcome_id: TOP07-O02
role: TOPIC_PRACTICE
difficulty_band: UNDERSTAND
problem_family_id: TOP07-EXPLICIT_MEMBERSHIP
content_version: 1
**Đề:** Dãy vô hạn u_n=(n+1)/(2n+1), n≥1. Tính u_4 và xét 1/2 có phải một số hạng hay không.
**Đáp án:** u_4=5/9; 1/2 không là số hạng.
**Lời giải có suy luận:** Thế n=4 được 5/9. Nếu (n+1)/(2n+1)=1/2 thì 2n+2=2n+1, vô lý; không có chỉ số nguyên dương nào thỏa.
**D6 tự khắc phục:** Không suy từ giới hạn 1/2 thành 'phải có một số hạng đúng bằng 1/2'.

## THPT-TOP07-P03 · TOP07-O03

item_id: THPT-TOP07-P03
outcome_id: TOP07-O03
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP07-RECURRENCE_CLOSED
content_version: 1
**Đề:** Dãy u_1=4, u_{n+1}=2u_n−1. Tìm u_2,u_3,u_4 và chứng minh công thức u_n=3·2^{n−1}+1.
**Đáp án:** u_2=7,u_3=13,u_4=25; u_n=3·2^{n−1}+1.
**Lời giải có suy luận:** Đặt v_n=u_n−1, khi đó v_{n+1}=2v_n và v_1=3, suy ra v_n=3·2^{n−1}. Hoặc quy nạp: công thức đúng n=1, thay vào truy hồi cho n+1 đúng.
**D6 tự khắc phục:** Nếu nhầm u_{n+1}=2(u_n−1), khai triển và đối chiếu u_2.

## THPT-TOP07-P04 · TOP07-O04

item_id: THPT-TOP07-P04
outcome_id: TOP07-O04
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP07-MONOTONIC_PROOF
content_version: 1
**Đề:** Với u_n=3−2/n (n≥1), xét dãy tăng hay giảm bằng hiệu hai số hạng liên tiếp.
**Đáp án:** Tăng nghiêm ngặt.
**Lời giải có suy luận:** u_{n+1}−u_n=(3−2/(n+1))−(3−2/n)=2/[n(n+1)]>0 vì n≥1. Kết luận tăng với mọi chỉ số thuộc miền.
**D6 tự khắc phục:** Thử n=1,2 để đoán rồi phải chứng minh dấu tổng quát.

## THPT-TOP07-P05 · TOP07-O05

item_id: THPT-TOP07-P05
outcome_id: TOP07-O05
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP07-BOUNDS_SHARP
content_version: 1
**Đề:** Cho u_n=(2n+1)/(n+2), n≥1. Chứng minh 1≤u_n<2 và cho biết số hạng nào nhận cận dưới 1.
**Đáp án:** 1≤u_n<2; u_1=1.
**Lời giải có suy luận:** Biến đổi u_n=2−3/(n+2). Vì n≥1 nên 0<3/(n+2)≤1; do đó 1≤u_n<2; dấu bằng trái tại n=1.
**D6 tự khắc phục:** Đừng đánh đồng cận trên 2 với một giá trị dãy thực sự đạt.

## THPT-TOP07-P06 · TOP07-O06

item_id: THPT-TOP07-P06
outcome_id: TOP07-O06
role: TOPIC_PRACTICE
difficulty_band: BASIC
problem_family_id: TOP07-AP_CONSTANT_DIFF
content_version: 1
**Đề:** Dãy 7,4,1,−2,… có là cấp số cộng? Nêu công sai và u_n.
**Đáp án:** Có; d=−3; u_n=7−3(n−1).
**Lời giải có suy luận:** Hiệu mỗi số sau trừ số trước luôn −3. Dãy CSC với số đầu 7, công sai −3 và số thứ n là 7+(n−1)(−3).
**D6 tự khắc phục:** Kiểm dấu hiệu u_{n+1}−u_n không phụ thuộc n.

## THPT-TOP07-P07 · TOP07-O07

item_id: THPT-TOP07-P07
outcome_id: TOP07-O07
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP07-AP_NTH
content_version: 1
**Đề:** CSC có u_1=−4 và d=3. Tính u_{20}.
**Đáp án:** 53.
**Lời giải có suy luận:** Từ số hạng thứ nhất đến thứ 20 có 19 bước cộng d. u_{20}=−4+19·3=53.
**D6 tự khắc phục:** Không nhầm n bước với n−1 bước.

## THPT-TOP07-P08 · TOP07-O08

item_id: THPT-TOP07-P08
outcome_id: TOP07-O08
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP07-AP_REVERSE
content_version: 1
**Đề:** CSC có u_5=14 và u_{11}=32. Tìm công sai d và u_1.
**Đáp án:** d=3, u_1=2.
**Lời giải có suy luận:** Khoảng cách chỉ số là 11−5=6 bước; d=(32−14)/6=3, suy ra u_1=u_5−4d=14−12=2.
**D6 tự khắc phục:** Không chia hiệu giá trị cho 11 hay 5.

## THPT-TOP07-P09 · TOP07-O09

item_id: THPT-TOP07-P09
outcome_id: TOP07-O09
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP07-AP_SUM
content_version: 1
**Đề:** CSC có u_1=3,d=4. Tính tổng 15 số hạng đầu.
**Đáp án:** 465.
**Lời giải có suy luận:** u_{15}=3+14·4=59. Ghép số hạng đầu và cuối: S_{15}=15(3+59)/2=465.
**D6 tự khắc phục:** Nếu dùng n/2[2u_1+(n−1)d], bảo đảm n=15 và d=4.

## THPT-TOP07-P10 · TOP07-O10

item_id: THPT-TOP07-P10
outcome_id: TOP07-O10
role: TOPIC_PRACTICE
difficulty_band: TRANSFER
problem_family_id: TOP07-AP_REAL_MODEL
content_version: 1
**Đề:** Một khán đài có 10 hàng, hàng đầu 12 ghế, mỗi hàng tiếp theo nhiều hơn hàng trước 3 ghế. Tổng số ghế?
**Đáp án:** 255 ghế.
**Lời giải có suy luận:** Số ghế theo hàng là CSC với u_1=12,d=3,n=10. Hàng cuối 12+9·3=39; tổng S_{10}=10(12+39)/2=255. Ghế phải đếm số nguyên không âm.
**D6 tự khắc phục:** Dùng n−1 khoảng tăng cho hàng cuối rồi mới tính tổng.

## THPT-TOP07-P11 · TOP07-O11

item_id: THPT-TOP07-P11
outcome_id: TOP07-O11
role: TOPIC_PRACTICE
difficulty_band: UNDERSTAND
problem_family_id: TOP07-GP_SIGN_RATIO
content_version: 1
**Đề:** Dãy −3,6,−12,24,… có là CSN không? Nêu công bội và số tiếp theo.
**Đáp án:** Có; q=−2; tiếp theo −48.
**Lời giải có suy luận:** Tỉ số 6/(−3)=(−12)/6=24/(−12)=−2. Công bội âm làm dấu luân phiên; nhân 24 với −2 được −48.
**D6 tự khắc phục:** Không lấy |q|=2 rồi làm mất dấu.

## THPT-TOP07-P12 · TOP07-O12

item_id: THPT-TOP07-P12
outcome_id: TOP07-O12
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP07-GP_NTH
content_version: 1
**Đề:** CSN u_1=3,q=−2. Tính u_6.
**Đáp án:** −96.
**Lời giải có suy luận:** u_6=3(−2)^{6−1}=3(−32)=−96. Lũy thừa bậc lẻ của số âm là âm.
**D6 tự khắc phục:** Nhớ số mũ n−1 và giữ dấu trong ngoặc.

## THPT-TOP07-P13 · TOP07-O13

item_id: THPT-TOP07-P13
outcome_id: TOP07-O13
role: TOPIC_PRACTICE
difficulty_band: TRANSFER
problem_family_id: TOP07-GP_REVERSE
content_version: 1
**Đề:** CSN có u_2=6,u_4=54, các số hạng liên quan khác 0. Có bao nhiêu cặp (u_1,q) thực thỏa điều kiện?
**Đáp án:** Hai cặp: (2,3) và (−2,−3).
**Lời giải có suy luận:** u_4/u_2=q²=54/6=9 ⇒ q=3 hoặc q=−3. Với u_2=u_1q=6, suy ra u_1=2 khi q=3 và u_1=−2 khi q=−3. Kiểm lại u_4=u_1q³=54 trong cả hai trường hợp.
**D6 tự khắc phục:** Không tự lấy căn q=+3 và bỏ nghiệm âm.

## THPT-TOP07-P14 · TOP07-O14

item_id: THPT-TOP07-P14
outcome_id: TOP07-O14
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP07-GP_SUM_FINITE
content_version: 1
**Đề:** CSN u_1=5,q=2. Tính S_6; viết rõ vì sao không dùng công thức q=1.
**Đáp án:** 315.
**Lời giải có suy luận:** S_6=5(2^6−1)/(2−1)=5·63=315. Vì q=2≠1 nên áp dụng tổng nhân hữu hạn; nếu q=1 thì phải dùng S_n=nu_1.
**D6 tự khắc phục:** Phân biệt q≠1 với q=1; công thức có mẫu q−1 không dùng được khi q=1.

## THPT-TOP07-P15 · TOP07-O15

item_id: THPT-TOP07-P15
outcome_id: TOP07-O15
role: TOPIC_PRACTICE
difficulty_band: TRANSFER
problem_family_id: TOP07-GP_INFINITE_REMAINDER
content_version: 1
**Đề:** CSN vô hạn có a_1=9,q=−1/3. Tính tổng S_∞, tổng bốn số hạng đầu S_4 và phần dư S_∞−S_4.
**Đáp án:** S_∞=27/4, S_4=20/3, phần dư=1/12.
**Lời giải có suy luận:** |q|=1/3<1 nên S_∞=9/(1+1/3)=27/4. S_4=9[1−(−1/3)^4]/(1+1/3)=20/3. Phần dư=27/4−20/3=(81−80)/12=1/12.
**D6 tự khắc phục:** Tổng vô hạn cần |q|<1; phần dư có dấu khi q âm.

## THPT-TOP07-P16 · TOP07-O16

item_id: THPT-TOP07-P16
outcome_id: TOP07-O16
role: TOPIC_PRACTICE
difficulty_band: UNDERSTAND
problem_family_id: TOP07-LINEAR_VS_MULTIPLICATIVE
content_version: 1
**Đề:** A có các giá trị 100,110,120,130; B có 100,110,121,133,1. Phân loại CSC/CSN và dự đoán giá trị kế tiếp.
**Đáp án:** A là CSC d=10, tiếp 140; B là CSN q=1,1, tiếp 146,41.
**Lời giải có suy luận:** A có sai khác đều 10; B có tỉ số đều 1,1: 100·1,1=110, 110·1,1=121, 121·1,1=133,1, rồi 133,1·1,1=146,41.
**D6 tự khắc phục:** Một mức tăng 10% không đồng nghĩa tăng cố định 10 đơn vị.

## THPT-TOP07-P17 · TOP07-O17

item_id: THPT-TOP07-P17
outcome_id: TOP07-O17
role: TOPIC_PRACTICE
difficulty_band: APPLY
problem_family_id: TOP07-COMPOUND_INTEREST
content_version: 1
**Đề:** Gửi 8 triệu đồng, lãi kép 5% mỗi năm, không nộp/rút giữa kỳ. Sau đúng 2 năm có bao nhiêu triệu?
**Đáp án:** 8,82 triệu đồng.
**Lời giải có suy luận:** Mỗi năm nhân số dư với 1,05: 8·1,05²=8·1,1025=8,82 (triệu). Đây là mô hình giả định, chưa trừ thuế/phí nếu có.
**D6 tự khắc phục:** 5% là tỉ lệ theo năm, không phải cộng 0,05 triệu mỗi năm.

## THPT-TOP07-P18 · TOP07-O18

item_id: THPT-TOP07-P18
outcome_id: TOP07-O18
role: TOPIC_PRACTICE
difficulty_band: TRANSFER
problem_family_id: TOP07-ANNUITY_END_PERIOD
content_version: 1
**Đề:** Nộp 100 đơn vị vào CUỐI mỗi kỳ trong 3 kỳ, lãi 10% một kỳ. Giá trị tích lũy ngay CUỐI kỳ 3 là bao nhiêu? Đồng thời khoản vay ban đầu 210 đơn vị, lãi 10%/kỳ, trả đều CUỐI 2 kỳ thì mỗi kỳ trả bao nhiêu?
**Đáp án:** Tích lũy 331; khoản trả đều 121 đơn vị/kỳ.
**Lời giải có suy luận:** Tiền gửi kỳ 1 tăng lãi hai kỳ thành 100·1,1²=121; kỳ 2 tăng một kỳ thành 110; kỳ 3 vừa nộp 100: tổng 331. Với vay: B_0=210, B_1=1,1·210−A, B_2=1,1B_1−A=0 ⇒ 1,21·210−(1,1+1)A=0 ⇒ A=121. Hai bài khác chiều thời gian nhưng đều là tổng hữu hạn CSN.
**D6 tự khắc phục:** Vẽ trục thời gian để tách 'cuối kỳ' gửi tiền khỏi thanh toán nợ; không trộn giá trị hiện tại và tương lai.

## THPT-TOP07-W01 · TOP07-O03

item_id: THPT-TOP07-W01
outcome_id: TOP07-O03
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (only tag, not second ID)
problem_family_id: TOP07-RECURRENCE_INDUCTION
difficulty_band: TRANSFER
content_version: 1
**Đề:** Dãy u_1=2, u_{n+1}=3u_n−2 (n≥1). (a) Tính u_2,u_3. (b) Đặt v_n=u_n−1 và tìm số hạng tổng quát u_n, chứng minh bằng quy nạp. (c) Chứng minh dãy tăng và tính u_4.
**Đáp án:** u_2=4,u_3=10,u_n=3^{n−1}+1, u_4=28; tăng nghiêm ngặt.
**Lời giải đầy đủ:** Từ truy hồi u_2=3·2−2=4, u_3=3·4−2=10. v_n=u_n−1 ⇒ v_{n+1}=u_{n+1}−1=3u_n−3=3(u_n−1)=3v_n, v_1=1 ⇒ v_n=3^{n−1}. Công thức u_n=3^{n−1}+1 đúng n=1; nếu đúng ở n, 3u_n−2=3·3^{n−1}+1=3^n+1 nên đúng ở n+1. Hiệu u_{n+1}−u_n=2·3^{n−1}>0. u_4=3³+1=28.
**Rubric tự đối chiếu /7 điểm:**
1. Tính u_2 (1đ)
2. Tính u_3 (1đ)
3. Đặt v_n và biến đổi truy hồi (1đ)
4. Viết công thức u_n (1đ)
5. Chứng minh quy nạp đầy đủ (1đ)
6. Chứng minh tăng mọi n≥1 (1đ)
7. Tính u_4 và kiểm lại (1đ)
**D6 tự khắc phục:** Nếu nhầm 3u_n−2 thành 3(u_n−2), hãy khai triển; kiểm lại u_2.

## THPT-TOP07-W02 · TOP07-O09

item_id: THPT-TOP07-W02
outcome_id: TOP07-O09
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (only tag, not second ID)
problem_family_id: TOP07-AP_REVERSE_SUM
difficulty_band: TRANSFER
content_version: 1
**Đề:** Một cấp số cộng thỏa u_4=13 và u_{10}=31. (a) Tìm u_1,d. (b) Tìm u_{20}. (c) Tính S_{20} theo hai cách: cặp đầu–cuối và công thức công sai. Đối chiếu.
**Đáp án:** d=3,u_1=4,u_{20}=61,S_{20}=650.
**Lời giải đầy đủ:** u_{10}−u_4=(10−4)d=18 ⇒ d=3. u_1=u_4−3d=13−9=4. u_{20}=4+19·3=61. Ghép đầu–cuối S_{20}=20(4+61)/2=650. Công thức khác S_{20}=20[2·4+19·3]/2=10(8+57)=650; hai cách thống nhất.
**Rubric tự đối chiếu /7 điểm:**
1. Lập phương trình hai chỉ số (1đ)
2. Tìm d (1đ)
3. Tìm u_1 (1đ)
4. Tính u_{20} (1đ)
5. Tổng theo đầu–cuối (1đ)
6. Tổng theo công sai (1đ)
7. Đối chiếu và kết luận (1đ)
**D6 tự khắc phục:** Đếm bước 10−4=6; n=20 có 19 lần tăng d.

## THPT-TOP07-W03 · TOP07-O15

item_id: THPT-TOP07-W03
outcome_id: TOP07-O15
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (only tag, not second ID)
problem_family_id: TOP07-GP_INFINITE_ERROR
difficulty_band: TRANSFER
content_version: 1
**Đề:** CSN có u_1=12,q=−1/2. (a) Viết S_n và lý do được tính tổng vô hạn. (b) Tính S_∞. (c) Tìm số nguyên n nhỏ nhất sao cho |S_∞−S_n|<1/4; chú ý dấu < nghiêm ngặt.
**Đáp án:** S_n=8[1−(−1/2)^n], S_∞=8, n nhỏ nhất =6.
**Lời giải đầy đủ:** Vì q≠1, S_n=12[1−(−1/2)^n]/(1+1/2)=8[1−(−1/2)^n]. Vì |q|=1/2<1 nên q^n→0, S_∞=8. Sai số tuyệt đối |8−S_n|=8/2^n. Muốn nhỏ hơn 1/4 ⇒ 2^n>32, n nguyên nhỏ nhất 6; n=5 chỉ đạt đúng 1/4 nên không thỏa.
**Rubric tự đối chiếu /7 điểm:**
1. Nhận diện u_1,q và điều kiện q≠1 (1đ)
2. Thiết lập S_n (1đ)
3. Rút gọn S_n (1đ)
4. Giải thích |q|<1 (1đ)
5. Tính S_∞ (1đ)
6. Lập bất đẳng thức sai số (1đ)
7. Tìm n=6 và loại n=5 (1đ)
**D6 tự khắc phục:** Nếu chọn n=5, phân biệt 'nhỏ hơn' và 'nhỏ hơn hoặc bằng'.

## THPT-TOP07-W04 · TOP07-O18

item_id: THPT-TOP07-W04
outcome_id: TOP07-O18
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (only tag, not second ID)
problem_family_id: TOP07-FINANCE_TWO_DIRECTIONS
difficulty_band: TRANSFER
content_version: 1
**Đề:** Lãi 10% mỗi kỳ, không phí. (a) Gửi 100 đơn vị vào CUỐI 3 kỳ liên tiếp: tính giá trị tại cuối kỳ 3. (b) Vay 210 đơn vị tại đầu kỳ 1, trả A đơn vị vào CUỐI mỗi kỳ trong 2 kỳ. Lập bảng dư nợ và tìm A để tất toán; giải thích vì sao không nhầm hai loại tổng.
**Đáp án:** (a) 331 đơn vị; (b) A=121 đơn vị mỗi kỳ, dư nợ: B_0=210, B_1=110, B_2=0.
**Lời giải đầy đủ:** (a) Cuối kỳ 3: lần gửi kỳ 1 đã có hai lần sinh lãi: 100·1,1²; kỳ2 một lần:100·1,1; kỳ3 chưa lãi:100. Tổng=121+110+100=331. (b) Dư đầu B_0=210; B_1=1,1·210−A=231−A, B_2=1,1(231−A)−A=254,1−2,1A. Đặt B_2=0 ⇒ A=254,1/2,1=121. Khi đó B_1=110 và B_2=0. Tiền gửi nhìn theo tương lai; vay nhìn theo dòng tiền trả dần đến dư nợ 0. Các con số là ví dụ mô hình, không báo giá vay thật.
**Rubric tự đối chiếu /7 điểm:**
1. Xác định thời điểm nộp cuối kỳ (1đ)
2. Tính đúng ba khoản tích lũy (1đ)
3. Tính tổng 331 (1đ)
4. Viết công thức dư nợ hai kỳ (1đ)
5. Giải A=121 (1đ)
6. Kiểm bảng B_1=110,B_2=0 (1đ)
7. Giải thích khác nhau của dòng tiền (1đ)
**D6 tự khắc phục:** Vẽ timeline 0–1–2–3; lần gửi ngay cuối kỳ 3 không được cộng lãi kỳ 3.

## Q15/Q16 và giới hạn đánh giá

- Chỉ lưu một canonical PUBLIC file cho 22 item, 18 self-check placements trỏ lại P01–P18 mà không tạo item_id. Written/Anchor chỉ cùng thư viện.
- `CLIENT_SELF_CHECK_NO_MASTERY`: câu và đáp án có thể xem trong luyện tập, không dùng làm đánh giá độc lập TOPIC_READINESS. Học sinh có thể mở đối chiếu sau Final Submit trên website do RELEASE kiểm chứng; không có private RD1 hoặc Mastery.
