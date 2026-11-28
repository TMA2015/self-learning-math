# CĐ07/22 — 22 câu PUBLIC canonical R06 (18 Practice + 4 Written /7)

R06 thay có kiểm soát P01/P16/P18/W04 để khắc phục lộ đáp án từ hình/Ví dụ và hai ID gần trùng bài toán; 18 ID Practice +4 ID Written giữ nguyên. R01 canonical vẫn nguyên blob cho snapshot lịch sử.

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
content_version: 2
**Đề:** Cho dãy hữu hạn a_n=(−1)^n(2n+1), n∈{0,1,2,3}. Liệt kê các số hạng; có a_4 trong dãy không?
**Đáp án:** a_0=1,a_1=−3,a_2=5,a_3=−7; không có a_4.
**Lời giải có suy luận:** Thế lần lượt n=0,1,2,3 cho 1,−3,5,−7. Miền chỉ số của dãy có 0 nhưng không có 4; tính biểu thức tại n=4 được 9 không khiến 9 trở thành số hạng thuộc dãy đã cho.
**D6 tự khắc phục:** Viết miền chỉ số trước khi thay số; không mặc định mọi dãy bắt đầu n=1.

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
content_version: 2
**Đề:** Hai mô hình bắt đầu ở kỳ 0 với 50 đơn vị. A tăng 5 đơn vị mỗi kỳ; B tăng 10% so với kỳ trước. Tính A_3,B_3 và xác định kỳ nguyên k≥0 đầu tiên có B_k−A_k≥1.
**Đáp án:** A_3=65; B_3=66,55; k=3 là kỳ đầu tiên hiệu ít nhất 1.
**Lời giải có suy luận:** A_k=50+5k; B_k=50·1,1^k. Theo k=0,1,2,3, A lần lượt 50,55,60,65 và B lần lượt 50,55,60,5,66,55. Hiệu B_k−A_k lần lượt 0,0,0,5,1,55; do đó k=3 là chỉ số đầu tiên thỏa ≥1. Dãy bắt đầu ở kỳ 0, không phải số hạng đầu ở kỳ 1.
**D6 tự khắc phục:** Lập bảng từng kỳ 0→3; giữ nguyên 5 khi cộng nhưng tính 10% trên số dư mới khi nhân.

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
content_version: 2
**Đề:** Gửi 40 đơn vị vào CUỐI mỗi kỳ của 3 kỳ, lãi cố định 5%/kỳ, không phí. (a) Số dư ngay sau khoản gửi cuối kỳ 3? (b) Nếu gửi 40 vào ĐẦU mỗi kỳ 1,2,3 thì số dư cuối kỳ 3 lớn hơn bao nhiêu?
**Đáp án:** (a) 126,1; (b) gửi đầu kỳ được 132,405, nhiều hơn 6,305 đơn vị.
**Lời giải có suy luận:** Gửi cuối kỳ 1,2,3 được hưởng tương ứng 2,1,0 kỳ lãi: FV_cuối=40[(1,05)^2+1,05+1]=126,1. Gửi đầu kỳ 1,2,3 tương ứng thời điểm 0,1,2 nên mỗi khoản sinh lãi thêm một kỳ: FV_đầu=126,1·1,05=132,405. Chênh lệch =6,305. Các mốc thời gian quan trọng hơn tên công thức.
**D6 tự khắc phục:** Vẽ các mốc 0–1–2–3 và ghi số kỳ hưởng lãi cho từng khoản trước khi cộng.

## THPT-TOP07-W01 · TOP07-O03

item_id: THPT-TOP07-W01
outcome_id: TOP07-O03
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (only tag, not second ID)
problem_family_id: TOP07-RECURRENCE_INDUCTION
difficulty_band: TRANSFER
content_version: 1
**Đề bài:** Dãy \(u_1=2,u_{n+1}=3u_n-2\), \(n\ge1\). (a) Tính \(u_2,u_3\). (b) Đặt \(v_n=u_n-1\), tìm công thức \(u_n\) và chứng minh bằng quy nạp. (c) Chứng minh dãy tăng, tính \(u_4\).

**Lời giải:** \(u_2=3\cdot2-2=4,\ u_3=3\cdot4-2=10\). Ta có \(v_{n+1}=3u_n-3=3v_n,\ v_1=1\), nên \(v_n=3^{n-1}\) và \(u_n=3^{n-1}+1\). Quy nạp: tại \(n=1\), \(3^0+1=2\); nếu công thức đúng tại n thì \(u_{n+1}=3(3^{n-1}+1)-2=3^n+1\). Vậy đúng với mọi n nguyên dương. Hiệu \(u_{n+1}-u_n=2\cdot3^{n-1}>0\). \(u_4=3^3+1=28\), cũng bằng \(3u_3-2\).

**Rubric tự đối chiếu:** 7 điểm: \(u_2\) (1); \(u_3\) (1); đổi biến và truy hồi (1); công thức (1); quy nạp (1); chứng minh tăng (1); \(u_4\) và kiểm (1). Chấp nhận cách giải khác đúng; không trừ lặp lỗi kéo theo.

**D6 tự khắc phục:** Nếu nhầm \(3u_n-2\) thành \(3(u_n-2)\), hãy khai triển; kiểm lại \(u_2\).


## THPT-TOP07-W02 · TOP07-O09

item_id: THPT-TOP07-W02
outcome_id: TOP07-O09
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (only tag, not second ID)
problem_family_id: TOP07-AP_REVERSE_SUM
difficulty_band: TRANSFER
content_version: 1
**Đề bài:** Cấp số cộng có \(u_4=13,u_{10}=31\). (a) Tìm \(u_1,d\). (b) Tìm \(u_{20}\). (c) Tính \(S_{20}\) theo hai cách: đầu–cuối và công thức công sai, rồi đối chiếu.

**Lời giải:** \(u_{10}-u_4=6d=18\), nên \(d=3\). \(u_1=13-3d=4\), \(u_{20}=4+19\cdot3=61\). Cách 1: \(S_{20}=\frac{20(4+61)}2=650\). Cách 2: \(S_{20}=\frac{20[2\cdot4+19\cdot3]}2=650\). Hai cách thống nhất vì \(u_{20}=u_1+19d\).

**Rubric tự đối chiếu:** 7 điểm: thiết lập hiệu (1); d (1); \(u_1\) (1); \(u_{20}\) (1); tổng đầu–cuối (1); tổng công sai (1); đối chiếu (1). Chấp nhận cách giải khác đúng; không trừ lặp lỗi kéo theo.

**D6 tự khắc phục:** Đếm bước \(10-4=6\); \(n=20\) có 19 lần tăng d.


## THPT-TOP07-W03 · TOP07-O15

item_id: THPT-TOP07-W03
outcome_id: TOP07-O15
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (only tag, not second ID)
problem_family_id: TOP07-GP_INFINITE_ERROR
difficulty_band: TRANSFER
content_version: 1
**Đề bài:** Cấp số nhân có \(u_1=12,q=-\frac12\). (a) Viết \(S_n\) và giải thích vì sao có tổng vô hạn. (b) Tính \(S_\infty\). (c) Tìm n nguyên dương nhỏ nhất sao cho \(\lvert S_\infty-S_n\rvert<\frac14\).

**Lời giải:** Vì \(q\ne1\), \(S_n=\frac{12[1-(-\frac12)^n]}{1+\frac12}=8[1-(-\frac12)^n]\). Do \(\lvert q\rvert<1\), \((-\frac12)^n\to0\), nên \(S_\infty=8\). Sai số tuyệt đối \(\lvert 8-S_n\rvert=\frac8{2^n}\). Điều kiện \(\frac8{2^n}<\frac14\iff2^n>32=2^5\), tức \(n>5\). Nhỏ nhất là 6: tại \(n=5\) sai số bằng \(\frac14\) (không thỏa dấu nghiêm), tại \(n=6\) bằng \(\frac18\).

**Rubric tự đối chiếu:** 7 điểm: số hạng đầu/công bội và điều kiện (1); thiết lập tổng (1); rút gọn (1); giải thích hội tụ (1); tổng vô hạn (1); bất đẳng thức sai số (1); n nhỏ nhất và loại 5 (1). Chấp nhận cách giải khác đúng; không trừ lặp lỗi kéo theo.

**D6 tự khắc phục:** Nếu chọn \(n=5\), phân biệt 'nhỏ hơn' và 'nhỏ hơn hoặc bằng'.


## THPT-TOP07-W04 · TOP07-O18

item_id: THPT-TOP07-W04
outcome_id: TOP07-O18
role: TOPIC_WRITTEN
written_role: DEEP_ANCHOR (only tag, not second ID)
problem_family_id: TOP07-FINANCE_TWO_DIRECTIONS
difficulty_band: TRANSFER
content_version: 2
**Đề bài:** Vay 42 đơn vị tại thời điểm 0, lãi 10% mỗi kỳ, trả đều A vào cuối hai kỳ 1 và 2, sau khi tính lãi, không phí. (a) Lập \(B_0,B_1,B_2\) và tìm A để tất toán. (b) Nếu lãi 0%, A bằng bao nhiêu? (c) Giải thích thứ tự tính lãi và trả nợ.

**Lời giải:** \(B_0=42\). Cuối kỳ 1, \(B_1=1{,}1\cdot42-A=46{,}2-A\). Cuối kỳ 2, \(B_2=1{,}1(46{,}2-A)-A=50{,}82-2{,}1A\). Tất toán khi \(B_2=0\), suy ra \(A=\frac{50{,}82}{2{,}1}=24{,}2\) đơn vị/kỳ. Kiểm \(B_1=22\), \(B_2=1{,}1\cdot22-24{,}2=0\). Nếu lãi 0%, \(B_2=42-2A=0\), nên \(A=21\). Tính lãi trên dư nợ đầu kỳ, rồi trừ khoản trả cuối kỳ. Đây là mô hình giả định, không phải báo giá khoản vay.

**Rubric tự đối chiếu:** 7 điểm: mốc và \(B_0\) (1); \(B_1\) (1); \(B_2\) (1); A (1); kiểm hai dư nợ (1); trường hợp lãi 0% (1); giải thích thứ tự và giả thiết (1). Chấp nhận cách giải khác đúng; không trừ lặp lỗi kéo theo.

**D6 tự khắc phục:** Khi không tất toán, kiểm từng dòng theo đúng thứ tự: nhân số dư đầu kỳ với 1,1 rồi trừ khoản trả cuối kỳ.


## Q15/Q16 và giới hạn đánh giá

- Chỉ lưu một canonical PUBLIC file cho 22 item, 18 self-check placements trỏ lại P01–P18 mà không tạo item_id. Written/Anchor chỉ cùng thư viện.
- `CLIENT_SELF_CHECK_NO_MASTERY`: câu và đáp án có thể xem trong luyện tập, không dùng làm đánh giá độc lập TOPIC_READINESS. Học sinh có thể mở đối chiếu sau Final Submit trên website do RELEASE kiểm chứng; không có private RD1 hoặc Mastery.
