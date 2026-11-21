# Temp — CĐ20 R12 · TARGETED D6/PED6 REVIEW

PACKET_ID: TOP20-R12-D6-TARGETED-20261118
STATUS: INDEPENDENT_REVIEW_PENDING / CURRENT CONTENT_READY=NO
STANDARD: SLM-THPT-QUALITY-ONE Q08/Q14/Q18, 5 Permanent Sources NotebookLM THPT v2.1
SOURCE_FILE: prototypes/thpt/content-drafts/topic20-classical-probability/Temp_PLAN22_20_R11_LEARNER_PRESENTATION_20261116.md
SOURCE_BLOB: d4a501bce64003f3583aca947d429504530b72c0
SOURCE_BRANCH: authoring/topic20-r12-d6-navigation-fix-20261117
EXPECTED: 17/17 knowledge-to-practice remediation pointers; 17 canonical first-try placements, no new IDs; review affected D6 only, no full-Topic re-review. 11 public self-check question-only placements are not independent Readiness. Do not expose protected RD1.

## Reviewer instructions

For each of 17 error routes: verify precise misconception, student-actionable remediation, correct Knowledge destination, and a real matching Practice item; check mathematical accuracy of referenced examples, grade/condition if needed. Return SOURCE_RECEIPT, matrix of 17 ID/path PASS/REVISE/INSUFFICIENT_EVIDENCE, P0/P1/P2, MINIMAL_DELTA and affected-scope ACADEMIC/PED verdict. Reviewer neither grants CONTENT_READY nor deploy permission.

## Exact source blocks with Git source line numbers

### Knowledge cluster 1 / original lines 15–66

15 | ### 1.1. Phép thử, không gian mẫu và biến cố
16 | 
17 | **Khám phá kiến thức**
18 | 
19 | Khi rút ngẫu nhiên một thẻ trong bảy thẻ được đánh số từ 1 đến 7, ta không biết trước sẽ rút được thẻ nào. Tuy vậy, ta hoàn toàn có thể liệt kê những kết quả có thể xảy ra. Nếu chỉ ghi số trên thẻ thì mỗi số là **một kết quả sơ cấp**; tập hợp gồm cả bảy số mới là **không gian mẫu**. Cần phân biệt một kết quả riêng lẻ với tập tất cả kết quả, bởi hai đối tượng này giữ vai trò khác nhau trong cách mô tả phép thử.
20 | 
21 | Bây giờ giả sử câu hỏi là “rút được số nguyên tố”. Ta không thực hiện một phép thử khác: vẫn rút một thẻ như trước, nhưng chỉ những kết quả 2, 3, 5 và 7 làm câu nói ấy đúng. Vì vậy, một biến cố được biểu diễn bằng **tập các kết quả thuận lợi** bên trong không gian mẫu. Nếu không có kết quả nào phù hợp thì biến cố không thể xảy ra; nếu mọi kết quả đều phù hợp thì biến cố chắc chắn xảy ra. Cách nhìn bằng tập hợp này giúp em hiểu rõ mình đang tính xác suất cho điều gì, trước khi dùng bất kỳ phép đếm hay công thức nào.
22 | 
23 | > **ĐỊNH NGHĨA — Phép thử, không gian mẫu và biến cố**
24 | >
25 | > **Không gian mẫu** \(\Omega\) là **tập hợp tất cả các kết quả có thể xảy ra** của một phép thử ngẫu nhiên; mỗi kết quả sơ cấp là một phần tử \(\omega\in\Omega\). **Biến cố** \(A\subseteq\Omega\) là tập các kết quả làm biến cố xảy ra; \(\varnothing\) là biến cố không thể và \(\Omega\) là biến cố chắc chắn.
26 | 
27 | **Ví dụ**
28 | 
29 | **Đề bài:** Một hộp có bảy thẻ khác nhau ghi các số từ 1 đến 7. Rút ngẫu nhiên đều một thẻ. Hãy viết không gian mẫu \(\Omega\), biến cố \(A\) “rút được số nguyên tố” và biến cố đối của \(A\).
30 | 
31 | **Lời giải:** Vì chỉ rút một thẻ và ghi số trên thẻ nên \(\Omega=\{1,2,3,4,5,6,7\}\). Các số nguyên tố trong tập này là 2, 3, 5, 7, do đó \(A=\{2,3,5,7\}\). Biến cố đối gồm những kết quả còn lại: \(\bar A=\{1,4,6\}\). Chú ý: \(A\) là **một tập các kết quả**, không phải một kết quả sơ cấp duy nhất.
32 | 
33 | **Kiến thức cần ghi nhớ**
34 | 
35 | Trước khi đếm kết quả thuận lợi, phải xác định đúng không gian mẫu \(\Omega\). Mỗi kết quả riêng lẻ là một phần tử của \(\Omega\), còn biến cố \(A\) là tập hợp những kết quả làm điều kiện của \(A\) đúng, tức \(A\subseteq\Omega\). Biến cố không thể là tập rỗng; biến cố chắc chắn chính là \(\Omega\).
36 | 
37 | **Vận dụng**
38 | 
39 | Gieo một xúc xắc 8 mặt đồng khả năng ghi các số 1–8. Viết Ω và biến cố “ra số chẵn”.
40 | 
41 | <!-- ITEM_ID: THPT-TOP20-T01; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O01; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
42 | <details markdown="1"><summary>Đối chiếu</summary>
43 | 
44 | Ω={1,2,3,4,5,6,7,8}; A={2,4,6,8}.
45 | 
46 | **Khi làm sai:** Nếu chỉ viết xác suất 1/2, em chưa mô tả biến cố; hãy ghi kết quả sơ cấp vào tập. Ôn lại mục Kiến thức 1.1. Phép thử, không gian mẫu và biến cố và Bài luyện 1 tại Luyện tập 1.1. Không gian mẫu và tập kết quả của biến cố.
47 | 
48 | </details>
49 | 
50 | 
51 | 
52 | 
53 | 
54 | **Vận dụng**
55 | 
56 | Một vòng quay cân đối có các kết quả ghi 1 đến 6. Biến cố A là “kết quả không lớn hơn 2”. Hãy viết A và nói khi nào A xảy ra.
57 | 
58 | <!-- ITEM_ID: THPT-TOP20-T10; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O02; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
59 | <details markdown="1"><summary>Đối chiếu</summary>
60 | 
61 | **Lời giải:** A={1,2}; A xảy ra nếu lượt quay cho kết quả 1 hoặc 2.
62 | 
63 | **Khi làm sai:** Nếu viết A={2}, em đã bỏ kết quả 1 cũng không lớn hơn 2. Xem từng phần tử Ω={1,…,6}. Ôn lại mục Kiến thức 1.1. Phép thử, không gian mẫu và biến cố và Bài luyện 2 tại Luyện tập 1.2. Mô tả biến cố từ một điều kiện.
64 | 
65 | </details>
66 | 

**Practice 1 / original lines 514–527**

514 | ### 1.1. Không gian mẫu và tập kết quả của biến cố
515 | 
516 | <!-- ITEM_ID: THPT-TOP20-P01; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O01; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->
517 | 
518 | **Bài luyện 1.** Rút đều một thẻ trong 10 thẻ đánh số 0 đến 9. Viết Ω và biến cố A “số chẵn”.
519 | 
520 | <details markdown="1"><summary>Lời giải</summary>
521 | 
522 | **Lời giải:** Vì phép thử rút đều một thẻ và chỉ ghi số trên thẻ nên không gian mẫu là \(\Omega=\{0,1,2,3,4,5,6,7,8,9\}\). Một số nguyên chẵn khi chia hết cho 2; số 0 cũng là số chẵn. Do đó biến cố cần viết là \(A=\{0,2,4,6,8\}\), gồm năm kết quả sơ cấp. Bài yêu cầu **mô tả biến cố**, không yêu cầu tính xác suất.
523 | 
524 | **Khi làm sai:** Nếu loại 0 vì không phải số chẵn, hãy nhớ 0 chia hết cho 2.
525 | 
526 | </details>
527 | 

**Practice 2 / original lines 528–541**

528 | ### 1.2. Mô tả biến cố từ một điều kiện
529 | 
530 | <!-- ITEM_ID: THPT-TOP20-P02; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O02; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->
531 | 
532 | **Bài luyện 2.** Gieo xúc xắc sáu mặt một lần. Biến cố “kết quả bé hơn 2” gồm những phần tử nào và có chắc chắn không?
533 | 
534 | <details markdown="1"><summary>Lời giải</summary>
535 | 
536 | **Lời giải:** Không gian mẫu của một lần gieo xúc xắc sáu mặt là \(\Omega=\{1,2,3,4,5,6\}\). Điều kiện “bé hơn 2” chỉ thỏa với mặt số 1, nên \(A=\{1\}\). Biến cố chắc chắn phải chứa cả sáu kết quả, trong khi \(A\) chỉ chứa một kết quả; vì vậy \(A\) **không chắc chắn**. Trái lại, nó vẫn có thể xảy ra.
537 | 
538 | **Khi làm sai:** Phân biệt “bé hơn” với “bé hơn hoặc bằng”; A là một tập con chứ không phải số 1/6.
539 | 
540 | </details>
541 | 

### Knowledge cluster 2 / original lines 67–122

67 | ### 1.2. Đồng khả năng và cách tính xác suất
68 | 
69 | **Khám phá kiến thức**
70 | 
71 | Giả sử một hộp có nhiều phiếu khác nhau nhưng các phiếu chỉ mang ba loại nhãn A, B và C. Nếu mỗi phiếu được rút với cơ hội như nhau, liệu ba nhãn có nhất thiết cùng cơ hội xuất hiện? Không: một nhãn có trên nhiều phiếu hơn sẽ dễ xuất hiện hơn. Điểm quyết định không phải là có bao nhiêu **loại nhãn**, mà là có bao nhiêu **kết quả sơ cấp thực sự đồng khả năng** tạo ra từng nhãn.
72 | 
73 | Khi không gian mẫu gồm hữu hạn kết quả đồng khả năng, mỗi kết quả đóng góp một phần bằng nhau vào xác suất. Muốn tính khả năng xảy ra của biến cố A, ta đếm số kết quả thuộc A rồi so với số kết quả của cả không gian mẫu. Từ cách suy luận đó mới hình thành công thức xác suất cổ điển. Nếu các kết quả ban đầu không đồng khả năng, tỉ số đếm đơn thuần không còn là cách tính hợp lệ; ta phải thay đổi cách mô hình hóa hoặc sử dụng thông tin xác suất thích hợp.
74 | 
75 | > **CÔNG THỨC — Xác suất cổ điển**
76 | >
77 | > \[P(A)=\frac{n(A)}{n(\Omega)},\quad n(\Omega)>0.\] Chỉ dùng khi các kết quả sơ cấp hữu hạn và đồng khả năng.
78 | 
79 | **Ví dụ**
80 | 
81 | **Đề bài:** Một hộp có tám phiếu khác nhau: hai phiếu ghi A, ba phiếu ghi B và ba phiếu ghi C. Rút ngẫu nhiên đều một phiếu. Tính xác suất rút được nhãn B. Có thể chia đều xác suất cho ba loại nhãn không?
82 | 
83 | **Lời giải:** Tám **phiếu vật lí** là tám kết quả đồng khả năng. Ba phiếu mang nhãn B làm biến cố cần tìm xảy ra, vì thế \(P(B)=3/8\). Không thể lấy \(1/3\) chỉ vì có ba nhãn A, B, C: mỗi nhãn đại diện cho một số phiếu khác nhau, nên ba nhãn không đồng khả năng.
84 | 
85 | **Kiểm tra trước khi tính:** Có đang đếm nhóm không thứ tự trong khi mẫu gốc là chuỗi có thứ tự không? Các kết quả được đếm có thực sự đồng khả năng không? Nếu không, không được dùng công thức cổ điển theo tỉ số đơn giản.
86 | 
87 | **Kiến thức cần ghi nhớ**
88 | 
89 | Gộp các kết quả sơ cấp đồng khả năng thành vài nhãn có thể làm mất tính đồng khả năng. Khi tung hai đồng xu cân đối, độc lập, bốn chuỗi NN, NS, SN, SS đồng khả năng nhưng các nhãn “không ngửa”, “một ngửa”, “hai ngửa” tương ứng với 1, 2 và 1 chuỗi. Bởi vậy, xác suất đúng một lần ngửa là \(2/4=1/2\), không phải \(1/3\). Muốn dùng tỉ số đếm, hãy xác nhận các kết quả được đem ra đếm thực sự đồng khả năng.
90 | 
91 | **Vận dụng**
92 | 
93 | Hộp có 2 phiếu đỏ và 4 phiếu xanh khác nhau, rút đều một phiếu. P(đỏ) có phải 1/2 vì có hai màu không?
94 | 
95 | <!-- ITEM_ID: THPT-TOP20-T02; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O03; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
96 | <details markdown="1"><summary>Đối chiếu</summary>
97 | 
98 | Không. Sáu phiếu vật lí đồng khả năng, P(đỏ)=2/6=1/3.
99 | 
100 | **Khi làm sai:** Nếu dùng 1/2, em đếm màu thay vì từng phiếu; hãy đặt tên cho sáu phiếu. Ôn lại mục Kiến thức 1.2. Đồng khả năng và cách tính xác suất và Bài luyện 3 tại Luyện tập 1.3. Xác suất cổ điển từ phiếu đồng khả năng.
101 | 
102 | </details>
103 | 
104 | 
105 | 
106 | 
107 | 
108 | 
109 | 
110 | **Vận dụng**
111 | 
112 | Tung hai đồng xu cân đối và độc lập. Nếu chỉ ghi số mặt ngửa 0, 1, 2 thì ba giá trị ấy có đồng khả năng không? Hãy viết các chuỗi sơ cấp và tính xác suất có đúng một mặt ngửa.
113 | 
114 | <!-- ITEM_ID: THPT-TOP20-T11; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O06; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
115 | <details markdown="1"><summary>Đối chiếu</summary>
116 | 
117 | **Lời giải:** Không. Không gian mẫu gồm NN, NS, SN, SS, mỗi chuỗi có xác suất 1/4. Số ngửa 0 ứng với SS, số ngửa 1 ứng với NS và SN, số ngửa 2 ứng với NN. Vì vậy ba giá trị **không** đồng khả năng; xác suất đúng một ngửa là \(2/4=1/2\).
118 | 
119 | **Khi làm sai:** Nếu ra 1/3, em đã đếm ba **nhãn** thay vì bốn chuỗi sơ cấp. Liệt kê đủ NN, NS, SN, SS rồi ghép mỗi chuỗi với số mặt ngửa tương ứng. Ôn lại mục Kiến thức 1.2. Đồng khả năng và cách tính xác suất và Bài luyện 6 tại Luyện tập 1.6. Gộp kết quả không đồng khả năng.
120 | 
121 | </details>
122 | 

**Practice 3 / original lines 542–555**

542 | ### 1.3. Xác suất cổ điển từ phiếu đồng khả năng
543 | 
544 | <!-- ITEM_ID: THPT-TOP20-P03; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O03; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->
545 | 
546 | **Bài luyện 3.** Túi chứa 10 phiếu khác nhau, đúng 3 phiếu có thưởng, rút đều một phiếu. Tính P(trúng).
547 | 
548 | <details markdown="1"><summary>Lời giải</summary>
549 | 
550 | **Lời giải:** Mười phiếu là mười kết quả sơ cấp đồng khả năng vì mỗi phiếu được chọn đều, không phụ thuộc phiếu có ghi giải thưởng gì. Trong đó ba phiếu thuận lợi cho biến cố “trúng”. Áp dụng tỉ số đếm cho các kết quả đồng khả năng, \(P(\text{trúng})=\dfrac{3}{10}\). Không chia theo số loại nhãn vì các nhãn có thể xuất hiện trên số phiếu khác nhau.
551 | 
552 | **Khi làm sai:** Nếu dùng tỷ số số loại giải thưởng, em đã chọn sai đơn vị kết quả sơ cấp.
553 | 
554 | </details>
555 | 

**Practice 4 / original lines 556–569**

556 | ### 1.4. Tính xác suất bằng biến cố đối
557 | 
558 | <!-- ITEM_ID: THPT-TOP20-P04; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O04; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->
559 | 
560 | **Bài luyện 4.** Trong 12 thẻ khác nhau, có 4 thẻ bị lỗi. Rút đều một thẻ. Tính P(không lỗi) bằng biến cố đối.
561 | 
562 | <details markdown="1"><summary>Lời giải</summary>
563 | 
564 | **Lời giải:** Gọi \(B\) là biến cố “rút được thẻ lỗi”. Vì có 4 thẻ lỗi trong 12 thẻ được rút đều, \(P(B)=4/12=1/3\). Biến cố “không lỗi” chính là \(\bar B\), nên \(P(\bar B)=1-P(B)=1-\dfrac{4}{12}=\dfrac{8}{12}=\dfrac23\). Kiểm lại: tám thẻ còn lại đều không lỗi, khớp với xác suất vừa tìm.
565 | 
566 | **Khi làm sai:** Kiểm A và A̅ phủ hết 12 thẻ, không tính 4/12 là không lỗi.
567 | 
568 | </details>
569 | 

### Knowledge cluster 3 / original lines 123–178

123 | ### 1.3. Biến cố đối và xác suất bé
124 | 
125 | **Khám phá kiến thức**
126 | 
127 | Có những câu hỏi hỏi một sự việc xảy ra, nhưng đếm trực tiếp các trường hợp thuận lợi lại khó. Chẳng hạn, khi gieo một đồng xu nhiều lần và hỏi “có ít nhất một lần ngửa”, ta phải tính tất cả các chuỗi chứa một, hai hoặc nhiều lần ngửa. Ngược lại, câu “không có lần ngửa nào” chỉ mô tả một kiểu kết quả: mọi lần đều sấp. Hai tình huống ấy phủ hết các khả năng và không thể đồng thời xảy ra.
128 | 
129 | Nếu gọi sự việc cần tìm là A, phần còn lại của không gian mẫu chính là **biến cố đối** của A. Vì tổng xác suất của tất cả khả năng là 1, xác suất của A và biến cố đối cộng lại bằng 1. Nhờ đó ta có thể tính gián tiếp qua trường hợp dễ đếm hơn. Cũng cần hiểu một khác biệt quan trọng: xác suất **rất nhỏ nhưng dương** vẫn có nghĩa là sự việc có thể xảy ra; trong mô hình hữu hạn đồng khả năng, biến cố không thể có xác suất 0; ngược lại, một biến cố có xác suất dương dù rất nhỏ vẫn có thể xảy ra.
130 | 
131 | > **TÍNH CHẤT — Biến cố đối**
132 | >
133 | > \[\bar A=\Omega\setminus A,\qquad P(\bar A)=1-P(A).\] A và đối A xung khắc, phủ hết mẫu.
134 | 
135 | **Ví dụ**
136 | 
137 | **Đề bài:** Một hộp có 20 phiếu khác nhau, trong đó đúng hai phiếu trúng thưởng. Chọn ngẫu nhiên đều một phiếu. Tính xác suất **không trúng thưởng** và xác suất **trúng thưởng**.
138 | 
139 | **Lời giải:** Có 18 phiếu không trúng trong 20 phiếu đồng khả năng, nên \(P(\text{không trúng})=18/20=9/10\). Biến cố “trúng thưởng” là biến cố đối của “không trúng thưởng”, do đó \(P(\text{trúng})=1-9/10=1/10\). Dùng biến cố đối giúp kiểm tra ngay hai xác suất cộng lại bằng 1.
140 | 
141 | **Nguyên lí xác suất bé:** Một biến cố có \(0<P(A)\ll 1\) vẫn có thể xảy ra. Không suy ra biến cố không thể và không khẳng định số lần xảy ra trong một số lượt thử bằng chính xác “số lượt × xác suất”.
142 | 
143 | **Kiến thức cần ghi nhớ**
144 | 
145 | Không được đồng nhất **hiếm** với **không thể**. Một vé trúng thưởng trong 50 vé đồng khả năng vẫn cho xác suất \(1/50>0\), còn một hộp không có vé trúng nào mới cho xác suất trúng bằng 0. Xác suất nhỏ cũng không có nghĩa rằng số lần xảy ra trong một số lượt thử ngắn phải bằng đúng tích số lượt với xác suất.
146 | 
147 | **Vận dụng**
148 | 
149 | Có 20 thẻ đồng khả năng, đúng 1 thẻ màu đen. Tính P(không đen). Biến cố đen có phải không thể?
150 | 
151 | <!-- ITEM_ID: THPT-TOP20-T03; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O04; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
152 | <details markdown="1"><summary>Đối chiếu</summary>
153 | 
154 | P(không đen)=19/20; P(đen)=1/20>0 nên đen là hiếm, không phải không thể.
155 | 
156 | **Khi làm sai:** Nếu nói xác suất 0, em đã nhầm ít xảy ra với biến cố rỗng. Ôn lại mục Kiến thức 1.3. Biến cố đối và xác suất bé và Bài luyện 4 tại Luyện tập 1.4. Tính xác suất bằng biến cố đối.
157 | 
158 | </details>
159 | 
160 | 
161 | 
162 | 
163 | 
164 | 
165 | 
166 | **Vận dụng**
167 | 
168 | Trong 100 vé đồng khả năng chỉ có một vé trúng. Biến cố trúng vé là không thể hay hiếm? Viết xác suất.
169 | 
170 | <!-- ITEM_ID: THPT-TOP20-T12; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O05; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
171 | <details markdown="1"><summary>Đối chiếu</summary>
172 | 
173 | **Lời giải:** P(trúng)=1/100>0; hiếm chứ không phải biến cố không thể.
174 | 
175 | **Khi làm sai:** Nếu P=0, em đã bỏ một vé trúng còn có mặt trong Ω. Đếm n(A)=1 và n(Ω)=100. Ôn lại mục Kiến thức 1.3. Biến cố đối và xác suất bé và Bài luyện 5 tại Luyện tập 1.5. Biến cố hiếm và biến cố không thể.
176 | 
177 | </details>
178 | 

**Practice 5 / original lines 570–583**

570 | ### 1.5. Biến cố hiếm và biến cố không thể
571 | 
572 | <!-- ITEM_ID: THPT-TOP20-P05; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O05; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->
573 | 
574 | **Bài luyện 5.** Trong 40 vé khác nhau có một vé trúng. Phân biệt xác suất trúng với trường hợp không có vé trúng.
575 | 
576 | <details markdown="1"><summary>Lời giải</summary>
577 | 
578 | **Lời giải:** Khi có đúng một vé trúng trong 40 vé được chọn đều, biến cố “trúng” chứa một kết quả thuận lợi, nên \(P(\text{trúng})=\dfrac1{40}>0\). Đó là một biến cố **hiếm nhưng có thể xảy ra**. Nếu trong cùng mô hình 40 vé không có vé nào trúng, biến cố “trúng” không chứa kết quả sơ cấp nào và có xác suất \(0\), tức **không thể xảy ra**. Không được suy từ “rất khó” thành “không thể”.
579 | 
580 | **Khi làm sai:** Đừng dùng chữ “rất khó” thay cho “bằng 0”.
581 | 
582 | </details>
583 | 

**Practice 6 / original lines 584–597**

584 | ### 1.6. Gộp kết quả không đồng khả năng
585 | 
586 | <!-- ITEM_ID: THPT-TOP20-P06; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O06; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->
587 | 
588 | **Bài luyện 6.** Bốn thẻ phân biệt được ghi 1, 2, 3, 4. Rút lần lượt hai thẻ **không hoàn lại**, mỗi lượt chọn đều trong các thẻ còn lại; chỉ ghi **tổng hai số**. So sánh xác suất tổng bằng 5 và tổng bằng 7. Có được xem các tổng có thể xuất hiện là đồng khả năng không?
589 | 
590 | <details markdown="1"><summary>Lời giải</summary>
591 | 
592 | **Lời giải:** Vì rút **lần lượt và không hoàn lại**, mỗi kết quả sơ cấp là một cặp có thứ tự \((a,b)\) với \(a\ne b\). Có \(4\cdot3=12\) cặp đồng khả năng. Tổng bằng 5 khi rút các cặp \((1,4),(4,1),(2,3),(3,2)\), nên \(P(S=5)=\dfrac4{12}=\dfrac13\). Tổng bằng 7 chỉ có \((3,4),(4,3)\), nên \(P(S=7)=\dfrac2{12}=\dfrac16\). Vì hai xác suất khác nhau, các giá trị tổng **không đồng khả năng**, dù từng cặp có thứ tự đồng khả năng.
593 | 
594 | **Khi làm sai:** Nếu chia cho 5 vì thấy các tổng 3,4,5,6,7, em đang coi các **nhãn tổng** là kết quả đồng khả năng. Hãy lập bảng cặp có thứ tự \((a,b)\) với \(a\ne b\), khoanh bốn cặp tổng 5 và hai cặp tổng 7. Không tính cặp \((a,a)\) vì rút không hoàn lại.
595 | 
596 | </details>
597 | 

### Knowledge cluster 4 / original lines 179–242

179 | ### 1.4. Đếm kết quả bằng tổ hợp và sơ đồ cây
180 | 
181 | **Khám phá kiến thức**
182 | 
183 | Khi tung một đồng xu cân đối hai lần, kết quả “lần đầu ngửa, lần sau sấp” khác với “lần đầu sấp, lần sau ngửa”. Vì phép thử diễn ra theo từng bước, cách tự nhiên để không bỏ sót kết quả là vẽ một **sơ đồ cây**: từ mỗi khả năng ở lượt đầu, ta tiếp tục xét những khả năng ở lượt hai. Mỗi đường đi từ gốc đến lá mô tả một kết quả có thứ tự, chứ không chỉ một nhóm ký hiệu.
184 | 
185 | Quan sát hình dưới đây trước khi tính: sau mỗi nhánh N (ngửa) hoặc S (sấp), cây lại tách thành N và S. Ta nhận được bốn đường đi NN, NS, SN, SS. Trong phép tung đồng xu cân đối và độc lập, bốn đường đi ấy đồng khả năng. Tuy nhiên, nếu cơ chế ở lượt sau phụ thuộc lượt trước, các lá trên cây không nhất thiết còn có xác suất bằng nhau; cây giúp **liệt kê** các kết quả, không tự bảo đảm đồng khả năng.
186 | 
187 | ![Sơ đồ cây hai lần tung đồng xu cân đối với bốn kết quả đồng khả năng](../../../../docs/assets/images/thpt/FIG-TOP20-G10-B27_TWO_TOSSES_TREE_WHITE_R00.svg)
188 | 
189 | **Hướng dẫn đọc hình:** Theo một đường đi từ trái sang phải để biết thứ tự hai lần tung. Muốn có đúng một lần ngửa, em chỉ chọn hai lá NS và SN, không gộp chúng thành một kết quả. Trong mô hình đồng xu cân đối, đó là hai trong bốn kết quả đồng khả năng, nên xác suất bằng \(2/4\).
190 | 
191 | Với bài toán **chọn đồng thời** một nhóm \(k\) vật từ \(n\) vật phân biệt và không phân vai, thứ tự chọn không tạo ra kết quả mới: ta cần đếm các **nhóm** khác nhau chứ không đếm mọi cách sắp xếp của từng nhóm. Còn với việc **thực hiện tuần tự**, thứ tự thường quan trọng và ta đếm bằng quy tắc nhân hoặc sơ đồ cây. Vì vậy, trước khi tính xác suất, phải xác định đúng mình đang đếm **nhóm không thứ tự** hay **chuỗi có thứ tự**, và dùng cùng một kiểu kết quả ở tử số lẫn mẫu số.
192 | 
193 | > **PHƯƠNG PHÁP — Đếm và đọc sơ đồ cây**
194 | >
195 | > Đếm chuỗi có thứ tự khác nhóm không thứ tự; dùng \(\binom nk\) khi chọn nhóm không phân vai. Không suy mọi lá của cây đồng khả năng nếu chưa kiểm.
196 | 
197 | **Ví dụ**
198 | 
199 | **Đề bài:** Có tám lá phiếu khác nhau ghi các số từ 1 đến 8, trong đó bốn số chẵn. Rút đồng thời ngẫu nhiên ba phiếu, các nhóm ba phiếu đồng khả năng. Tính xác suất cả ba phiếu đều ghi số chẵn.
200 | 
201 | **Lời giải:** Vì rút đồng thời và không phân vai ba vị trí, mỗi kết quả là một **nhóm không thứ tự**. Số nhóm có thể rút là \(\binom83=56\). Có bốn phiếu mang số chẵn, nên số nhóm ba phiếu đều chẵn là \(\binom43=4\). Xác suất cần tìm là \(P=4/56=1/14\). Tử và mẫu đều đếm nhóm không thứ tự.
202 | 
203 | **Ví dụ**
204 | 
205 | **Đề bài:** Có bốn thẻ khác nhau. So sánh số kết quả khi (a) rút liên tiếp hai thẻ không hoàn lại, ghi thứ tự rút; (b) lấy đồng thời hai thẻ không xét thứ tự. Mỗi trường hợp cần dùng cách đếm nào?
206 | 
207 | **Lời giải:** Ở (a), lượt đầu có bốn cách chọn, lượt sau còn ba cách, nên có \(4\cdot3=12\) **cặp có thứ tự**. Ở (b), chỉ xét nhóm hai thẻ, nên có \(\binom42=6\) **nhóm không thứ tự**. Hai phép thử có cách mô tả kết quả khác nhau; khi tính xác suất, không được trộn tử số đếm nhóm với mẫu số đếm cặp.
208 | 
209 | **Kiến thức cần ghi nhớ**
210 | 
211 | Với câu hỏi “ít nhất một”, biến cố đối thường là “không có lần nào”. Khi chọn đều hai phiếu trong năm phiếu khác nhau (hai đỏ, ba xanh), xác suất có ít nhất một phiếu đỏ là \(1-\binom32/\binom52=7/10\). Phải lấy biến cố đối là **cả hai phiếu xanh**, không phải “đúng một phiếu đỏ”, và đếm cùng một kiểu nhóm ở cả tử số lẫn mẫu số.
212 | 
213 | **Vận dụng**
214 | 
215 | Từ 6 học sinh chọn một nhóm 2 người không phân vai; so với chọn trưởng rồi phó, có bao nhiêu kết quả mỗi loại?
216 | 
217 | <!-- ITEM_ID: THPT-TOP20-T04; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O07; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
218 | <details markdown="1"><summary>Đối chiếu</summary>
219 | 
220 | Không phân vai có C(6,2)=15 nhóm; phân hai vai có 6×5=30 cặp có thứ tự.
221 | 
222 | **Khi làm sai:** Nếu có cả hai bằng 30, nhóm AB và BA đã bị đếm hai lần ở trường hợp không phân vai. Ôn lại mục Kiến thức 1.4. Đếm kết quả bằng tổ hợp và sơ đồ cây và Bài luyện 7 tại Luyện tập 1.7. Chọn nhóm không xét thứ tự.
223 | 
224 | </details>
225 | 
226 | 
227 | 
228 | 
229 | 
230 | **Vận dụng**
231 | 
232 | Từ 5 phiếu khác nhau (1 đỏ, 4 xanh), chọn đều **hai phiếu không xét thứ tự**. Xác suất ít nhất một phiếu đỏ?
233 | 
234 | <!-- ITEM_ID: THPT-TOP20-T13; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O08; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
235 | <details markdown="1"><summary>Đối chiếu</summary>
236 | 
237 | **Lời giải:** P=1−P(cả hai xanh)=1−C(4,2)/C(5,2)=1−6/10=2/5.
238 | 
239 | **Khi làm sai:** Nếu dùng 1−4/5 thì em đang xét một phiếu. Mẫu này là **nhóm hai phiếu**, phải đếm C(5,2). Ôn lại mục Kiến thức 1.4. Đếm kết quả bằng tổ hợp và sơ đồ cây và Bài luyện 8 tại Luyện tập 1.8. Ít nhất một và biến cố đối.
240 | 
241 | </details>
242 | 

**Practice 7 / original lines 598–611**

598 | ### 1.7. Chọn nhóm không xét thứ tự
599 | 
600 | <!-- ITEM_ID: THPT-TOP20-P07; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O07; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->
601 | 
602 | **Bài luyện 7.** Từ 7 thẻ khác nhau, trong đó có 3 thẻ ghi sao, lấy đều 2 thẻ cùng lúc (không xét thứ tự). Tính P(cả hai sao).
603 | 
604 | <details markdown="1"><summary>Lời giải</summary>
605 | 
606 | **Lời giải:** Hai thẻ được lấy **cùng lúc**, không phân biệt thẻ nào được chọn trước. Do đó một kết quả sơ cấp là một nhóm hai thẻ, có \(\binom72=21\) nhóm đồng khả năng. Muốn cả hai đều ghi sao, ta phải chọn cả hai trong ba thẻ sao, nên có \(\binom32=3\) nhóm thuận lợi. Xác suất là \(P=\dfrac{\binom32}{\binom72}=\dfrac3{21}=\dfrac17\). Cả tử và mẫu đều đếm nhóm **không có thứ tự**.
607 | 
608 | **Khi làm sai:** Nếu dùng 7×6 ở mẫu mà C(3,2) ở tử, em đã trộn có và không xét thứ tự.
609 | 
610 | </details>
611 | 

**Practice 8 / original lines 612–625**

612 | ### 1.8. Ít nhất một và biến cố đối
613 | 
614 | <!-- ITEM_ID: THPT-TOP20-P08; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O08; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->
615 | 
616 | **Bài luyện 8.** Túi có 2 bóng đỏ và 4 bóng xanh khác nhau. Chọn đều 2 bóng cùng lúc. Tính P(ít nhất một bóng đỏ).
617 | 
618 | <details markdown="1"><summary>Lời giải</summary>
619 | 
620 | **Lời giải:** Có sáu bóng khác nhau và mọi nhóm hai bóng được chọn đều, nên tổng số kết quả là \(\binom62=15\). Thay vì đếm riêng trường hợp đúng một đỏ và hai đỏ, ta xét **biến cố đối** của “ít nhất một đỏ”: đó là “không có bóng đỏ”, tức chọn cả hai trong bốn bóng xanh. Có \(\binom42=6\) nhóm như vậy. Vì thế \(P(\text{ít nhất một đỏ})=1-\dfrac{\binom42}{\binom62}=1-\dfrac6{15}=\dfrac35\).
621 | 
622 | **Khi làm sai:** Biến cố đối là “không có đỏ”, tức cả hai xanh, không phải “đúng một đỏ”.
623 | 
624 | </details>
625 | 

### Knowledge cluster 5 / original lines 243–298

243 | ### 1.5. Chọn đúng mô hình trước khi tính
244 | 
245 | **Khám phá kiến thức**
246 | 
247 | Một lời giải có thể tính toán hoàn toàn chính xác mà vẫn cho xác suất sai nếu ngay từ đầu ta lựa chọn sai mô hình. Chẳng hạn, khi gieo hai xúc xắc, các cặp \((1,6)\) và \((6,1)\) là hai kết quả khác nhau nếu ghi riêng số chấm của từng con. Nhưng nếu chỉ nhìn vào tổng số chấm thì cả hai đều được ghi thành 7. Số **nhãn tổng** ít hơn số **cặp kết quả**, và các nhãn tổng lại không đồng khả năng.
248 | 
249 | Vì thế, trước khi chọn công thức, ta cần hiểu chính xác một kết quả sơ cấp gồm những thông tin gì; các kết quả ấy có đồng khả năng không; thứ tự hoặc việc hoàn lại có làm thay đổi tập kết quả không. Sau đó mới xác định tập kết quả thuận lợi và quyết định nên đếm trực tiếp, dùng biến cố đối hay lập sơ đồ cây. Làm theo thứ tự này giúp em kiểm tra tính đúng đắn của mô hình trước khi kiểm tra phép tính, thay vì chỉ dựa vào việc đáp số cuối cùng nằm giữa 0 và 1.
250 | 
251 | > **KIẾN THỨC CẦN GHI NHỚ — Kiểm mô hình trước phép tính**
252 | >
253 | > Xác định kết quả sơ cấp, tính đồng khả năng, thứ tự, có/không hoàn lại, tập kết quả thuận lợi và điều kiện dùng công thức.
254 | 
255 | **Ví dụ**
256 | 
257 | **Đề bài:** Gieo hai xúc xắc cân đối, phân biệt. Tính xác suất tổng số chấm bằng 5 và giải thích vì sao không thể lấy \(1/11\) chỉ vì tổng số chấm có 11 giá trị từ 2 đến 12.
258 | 
259 | **Lời giải:** Một kết quả sơ cấp là cặp có thứ tự \((a,b)\), với \(a,b\in\{1,2,3,4,5,6\}\), nên có \(6\cdot6=36\) cặp đồng khả năng. Tổng bằng 5 khi rơi vào một trong bốn cặp \((1,4),(2,3),(3,2),(4,1)\), do đó \(P(\text{tổng}=5)=4/36=1/9\). Mười một giá trị tổng không đồng khả năng vì mỗi tổng có số cặp tạo thành khác nhau; vì vậy \(1/11\) không phải xác suất cần tìm.
260 | 
261 | **Lỗi thường gặp**
262 | 
263 | Khi gieo hai xúc xắc phân biệt, có 36 **cặp có thứ tự** đồng khả năng, nhưng 11 **giá trị tổng** từ 2 đến 12 không đồng khả năng. Tổng bằng 2 chỉ xuất hiện ở cặp \((1,1)\), trong khi tổng bằng 7 xuất hiện ở sáu cặp. Nếu đếm 11 giá trị tổng như 11 kết quả đồng khả năng, lời giải sẽ sai dù phép chia được tính đúng.
264 | 
265 | Đáp số nằm trong khoảng \([0,1]\) chưa đủ bảo đảm mô hình đúng. Trước khi sử dụng tỉ số đếm, hãy kiểm tra và giải thích vì sao các kết quả sơ cấp mình chọn thực sự đồng khả năng.
266 | 
267 | **Vận dụng**
268 | 
269 | Gieo hai xúc xắc phân biệt, cân đối. Có bao nhiêu cặp sơ cấp đồng khả năng và P(tổng số chấm bằng 12)?
270 | 
271 | <!-- ITEM_ID: THPT-TOP20-T05; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O10; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
272 | <details markdown="1"><summary>Đối chiếu</summary>
273 | 
274 | Có 36 cặp có thứ tự; chỉ (6,6) có tổng12 nên P=1/36.
275 | 
276 | **Khi làm sai:** Không coi 11 tổng số chấm từ 2 đến12 là đồng khả năng; tổng12 chỉ có một cặp. Ôn lại mục Kiến thức 1.5. Chọn đúng mô hình trước khi tính và Bài luyện 10 tại Luyện tập 1.10. Rút không hoàn lại theo từng bước.
277 | 
278 | </details>
279 | 
280 | 
281 | 
282 | **Vận dụng**
283 | 
284 | Tung một đồng xu cân đối ba lần, coi chuỗi có thứ tự. Có mấy kết quả đồng khả năng và xác suất đúng hai mặt ngửa?
285 | 
286 | <!-- ITEM_ID: THPT-TOP20-T14; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O09; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
287 | <details markdown="1"><summary>Đối chiếu</summary>
288 | 
289 | **Lời giải:** Có 2³=8 chuỗi; đúng hai ngửa là NNS, NSN, SNN (3 chuỗi), P=3/8.
290 | 
291 | **Khi làm sai:** Nếu đếm ba loại “0/1/2/3 ngửa” là 4 kết quả đồng khả năng, em đã gộp các chuỗi khác nhau. Vẽ cây ba tầng. Ôn lại mục Kiến thức 1.5. Chọn đúng mô hình trước khi tính và Bài luyện 9 tại Luyện tập 1.9. Chuỗi có thứ tự trên sơ đồ cây.
292 | 
293 | </details>
294 | 
295 | ## 2. Kết hợp các biến cố
296 | 
297 | 
298 | 

**Practice 9 / original lines 626–639**

626 | ### 1.9. Chuỗi có thứ tự trên sơ đồ cây
627 | 
628 | <!-- ITEM_ID: THPT-TOP20-P09; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O09; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->
629 | 
630 | **Bài luyện 9.** Tung một đồng xu cân đối ba lần độc lập. Vẽ cây ba tầng hoặc liệt kê chuỗi có thứ tự để tính xác suất **lượt đầu và lượt cuối đều ngửa**, không giới hạn lượt ở giữa.
631 | 
632 | <details markdown="1"><summary>Lời giải</summary>
633 | 
634 | **Lời giải:** Ba lần tung đồng xu cân đối, độc lập tạo \(2^3=8\) chuỗi có thứ tự đồng khả năng. Đề chỉ ràng buộc **lượt đầu và lượt cuối ngửa**; lượt giữa có thể ngửa hoặc sấp. Vì vậy có đúng hai chuỗi thuận lợi: **NNN** và **NSN**. Xác suất cần tìm là \(P=\dfrac28=\dfrac14\). Khi lập cây, phải giữ vị trí của ba lượt trên từng đường đi; đếm theo tổng số mặt ngửa sẽ làm mất thông tin đề yêu cầu.
635 | 
636 | **Khi làm sai:** Nếu chỉ đếm NNN, em đã tự áp thêm điều kiện “lượt giữa cũng ngửa”. Nếu gộp chuỗi theo số lần ngửa, em mất thông tin về vị trí; hãy giữ cả ba lượt trên mỗi lá cây.
637 | 
638 | </details>
639 | 

**Practice 10 / original lines 640–655**

640 | ### 1.10. Rút không hoàn lại theo từng bước
641 | 
642 | <!-- ITEM_ID: THPT-TOP20-P10; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O10; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->
643 | 
644 | **Bài luyện 10.** Hộp 5 thẻ khác nhau (2 đỏ, 3 xanh), rút đều liên tiếp 2 thẻ không hoàn lại. Tính P(cả hai đỏ) bằng đếm chuỗi.
645 | 
646 | <details markdown="1"><summary>Lời giải</summary>
647 | 
648 | **Lời giải:** Mỗi cặp có thứ tự gồm hai thẻ **khác nhau**, vì rút không hoàn lại. Lượt đầu có năm lựa chọn, lượt sau còn bốn, nên có \(5\cdot4=20\) cặp đồng khả năng. Muốn cả hai đều đỏ, lượt đầu có hai thẻ đỏ có thể chọn và lượt sau chỉ còn một thẻ đỏ: có \(2\cdot1=2\) cặp thuận lợi. Do đó \(P(\text{cả hai đỏ})=\dfrac2{20}=\dfrac1{10}\). Không thể dùng \((2/5)^2\), bởi lần rút sau hộp đã thay đổi.
649 | 
650 | **Khi làm sai:** Nếu dùng (2/5)², em đã giả sử lượt sau vẫn có 2 đỏ trong 5 thẻ.
651 | 
652 | </details>
653 | 
654 | ## 2. Hợp, giao và các quy tắc tính xác suất
655 | 

### Knowledge cluster 6 / original lines 299–343

299 | ### 2.1. Hợp, giao và xung khắc
300 | 
301 | **Khám phá kiến thức**
302 | 
303 | Trong một lớp học, có bạn thích bóng đá, có bạn thích bóng rổ và có bạn thích cả hai. Nếu cần đếm những bạn thích **ít nhất một** môn, ta phải gộp hai nhóm nhưng chỉ tính mỗi người một lần. Nếu cần đếm những bạn thích **cả hai** môn, ta chỉ giữ phần chung của hai nhóm. Trong xác suất, hai cách chọn kết quả ấy dẫn đến hai khái niệm khác nhau: **hợp** và **giao** của các biến cố.
304 | 
305 | Hãy xét một lần gieo xúc xắc, với A là biến cố ra số chẵn và B là biến cố ra số từ 4 trở lên. Khi biểu diễn trên hình, A chứa các số 2, 4, 6 còn B chứa các số 4, 5, 6. Phần chồng nhau gồm 4 và 6 — đó là kết quả làm **cả A và B** xảy ra. Phần nằm trong ít nhất một vùng gồm 2, 4, 5, 6 — đó là kết quả làm **A hoặc B** xảy ra. Nếu hai vùng không có kết quả chung, ta gọi hai biến cố là **xung khắc**; khi ấy chúng không thể đồng thời xảy ra trong một lần thử.
306 | 
307 | ![Đọc phần giao và phần hợp của hai biến cố khi gieo xúc xắc](../../../../docs/assets/images/thpt/FIG-TOP20-G11-B28-B29_VENN_WHITE_R00.svg)
308 | 
309 | **Hướng dẫn đọc hình:** Khung \(\Omega\) biểu diễn sáu kết quả của phép gieo xúc xắc. Quan sát riêng phần giao chứa 4, 6; phần chỉ thuộc A chứa 2; phần chỉ thuộc B chứa 5. Kết quả 1 và 3 nằm ngoài cả hai biến cố. Các vòng tròn giúp nhìn quan hệ tập hợp, **không** có nghĩa là diện tích các vùng tỉ lệ với xác suất.
310 | 
311 | **Tương tác khám phá:** [Thay đổi các kết quả thuộc A và B trên mô hình](Temp_PLAN22_20_EVENTS_INTERACTIVE_WHITE_R00_20261114.html) để tự kiểm tra sự khác nhau giữa “hoặc”, “và” và “không xảy ra cùng nhau”.
312 | 
313 | > **ĐỊNH NGHĨA — Hợp, giao, xung khắc**
314 | >
315 | > \(A\cup B\) là ít nhất một; \(A\cap B\) là cả hai; xung khắc khi \(A\cap B=\varnothing\). Hợp đếm mỗi kết quả ở giao chỉ một lần.
316 | 
317 | **Ví dụ**
318 | 
319 | **Đề bài:** Gieo một xúc xắc sáu mặt cân đối. Gọi \(A\) là biến cố “ra số chẵn” và \(B\) là biến cố “ra số lớn hơn 3”. Dựa vào hình Venn ngay phía trên, hãy viết \(A\cap B\), \(A\cup B\), tính \(P(A\cup B)\) và cho biết hai biến cố có xung khắc không.
320 | 
321 | **Lời giải:** Ta có \(A=\{2,4,6\}\) và \(B=\{4,5,6\}\), nên \(A\cap B=\{4,6\}\). Hợp của hai tập là \(A\cup B=\{2,4,5,6\}\), gồm bốn kết quả. Vì sáu mặt xúc xắc đồng khả năng, \(P(A\cup B)=4/6=2/3\); cũng có thể kiểm bằng quy tắc cộng: \(3/6+3/6-2/6=4/6\). Hai biến cố **không xung khắc**, bởi 4 và 6 thuộc cả hai tập. Các tập kết quả và xác suất đều khớp với hình minh họa.
322 | 
323 | **Hướng dẫn đọc hình:** Nhìn vùng chỉ thuộc A, chỉ thuộc B, vùng chồng nhau và vùng ở ngoài cả hai. Đếm vùng chồng **một lần** khi tìm hợp.
324 | 
325 | **Vận dụng**
326 | 
327 | Gieo xúc xắc cân đối. A=ra số chẵn, B=ra số lớn hơn 4. Viết A∩B và A∪B.
328 | 
329 | <!-- ITEM_ID: THPT-TOP20-T06; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O11; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
330 | <details markdown="1"><summary>Đối chiếu</summary>
331 | 
332 | A={2,4,6}, B={5,6}; giao={6}, hợp={2,4,5,6}.
333 | 
334 | **Khi làm sai:** Giao chỉ lấy phần có chung, hợp chứa tất cả nhưng mỗi số chỉ ghi một lần. Ôn lại mục Kiến thức 2.1. Hợp, giao và xung khắc và Bài luyện 11 tại Luyện tập 2.1. Hợp và giao hai biến cố.
335 | 
336 | </details>
337 | 
338 | 
339 | 
340 | 
341 | 
342 | 
343 | 

**Practice 11 / original lines 656–669**

656 | ### 2.1. Hợp và giao hai biến cố
657 | 
658 | <!-- ITEM_ID: THPT-TOP20-P11; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O11; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->
659 | 
660 | **Bài luyện 11.** Gieo xúc xắc: A=ra số lẻ, B=ra số không nhỏ hơn 5. Viết A∩B và A∪B.
661 | 
662 | <details markdown="1"><summary>Lời giải</summary>
663 | 
664 | **Lời giải:** Trên không gian mẫu \(\Omega=\{1,2,3,4,5,6\}\), biến cố lẻ là \(A=\{1,3,5\}\), còn “không nhỏ hơn 5” nghĩa là **lớn hơn hoặc bằng 5**, nên \(B=\{5,6\}\). Giao gồm những kết quả thỏa **đồng thời** hai điều kiện: \(A\cap B=\{5\}\). Hợp gồm những kết quả thỏa **ít nhất một** điều kiện: \(A\cup B=\{1,3,5,6\}\). Trong hợp, số 5 chỉ được viết một lần.
665 | 
666 | **Khi làm sai:** Nếu gộp kết quả 5 hai lần trong hợp, em chưa coi hợp là tập hợp.
667 | 
668 | </details>
669 | 

### Knowledge cluster 7 / original lines 344–397

344 | ### 2.2. Độc lập không phải xung khắc
345 | 
346 | **Khám phá kiến thức**
347 | 
348 | Giả sử ta tung hai đồng xu cân đối và việc tung đồng xu thứ nhất không ảnh hưởng đến đồng xu thứ hai. Biết đồng xu đầu tiên ra ngửa không làm kết quả ngửa của đồng xu thứ hai dễ hay khó hơn. Đó là trực giác của **hai biến cố độc lập**: thông tin rằng biến cố này xảy ra không làm thay đổi xác suất của biến cố kia (khi xác suất có điều kiện được xác định).
349 | 
350 | Bây giờ hãy so sánh với hai biến cố “lần tung đầu ra ngửa” và “lần tung đầu ra sấp”. Chúng không thể cùng xảy ra, nên **xung khắc**; nhưng khi đã biết biến cố thứ nhất xảy ra, biến cố thứ hai chắc chắn không xảy ra. Với hai biến cố đều có xác suất dương, xung khắc và độc lập vì thế không thể là cùng một tính chất. Tiêu chuẩn toán học để kiểm tra độc lập là so sánh xác suất của **giao** với **tích hai xác suất riêng**. Đây là điều kiện phải được kiểm tra, không phải công thức được phép áp dụng cho mọi cặp biến cố.
351 | 
352 | > **TÍNH CHẤT — Độc lập**
353 | >
354 | > \[P(A\cap B)=P(A)P(B).\] Đây là tiêu chuẩn độc lập; không suy từ việc hai biến cố không xung khắc.
355 | 
356 | **Ví dụ**
357 | 
358 | **Đề bài:** Tung hai đồng xu cân đối, độc lập; ghi kết quả theo thứ tự. (a) Xét \(A\): “xu đầu ngửa” và \(B\): “xu sau ngửa”. Kiểm tra xem \(A,B\) có độc lập không. (b) Xét \(C\): “cả hai xu ngửa” và \(D\): “xu đầu sấp”. Hai biến cố \(C,D\) có xung khắc và độc lập không?
359 | 
360 | **Lời giải:** Không gian mẫu là \(\{NN,NS,SN,SS\}\), gồm bốn kết quả đồng khả năng. (a) \(P(A)=P(B)=1/2\) và \(P(A\cap B)=1/4=P(A)P(B)\), nên \(A,B\) độc lập. (b) \(C=\{NN\}\), \(D=\{SN,SS\}\), do đó \(C\cap D=\varnothing\): hai biến cố **xung khắc**. Nhưng \(P(C\cap D)=0\), còn \(P(C)P(D)=(1/4)(1/2)=1/8\), nên chúng **không độc lập**. Xung khắc và độc lập là hai tính chất khác nhau.
361 | 
362 | **Giới hạn:** Không suy độc lập chỉ vì hai biến cố có thể đồng thời xảy ra; phải xem mô hình hoặc kiểm công thức.
363 | 
364 | **Kiến thức cần ghi nhớ**
365 | 
366 | Hai biến cố **xung khắc** không cùng xảy ra, còn hai biến cố **độc lập** phải thỏa \(P(A\cap B)=P(A)P(B)\). Trên một lần gieo xúc xắc cân đối, “ra số chẵn” và “ra số lẻ” đều có xác suất \(1/2\) nhưng giao rỗng, nên không độc lập. Kết luận “xung khắc thì không độc lập” cần điều kiện **cả hai xác suất đều dương**; trường hợp có xác suất bằng 0 là ngoại lệ phải xét riêng.
367 | 
368 | **Vận dụng**
369 | 
370 | Tung một đồng xu cân đối và gieo xúc xắc cân đối độc lập. Xác suất đồng xu ngửa và xúc xắc chẵn là bao nhiêu?
371 | 
372 | <!-- ITEM_ID: THPT-TOP20-T07; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O12; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
373 | <details markdown="1"><summary>Đối chiếu</summary>
374 | 
375 | P=1/2×3/6=1/4. Hai phép thử độc lập nên số cặp thuận lợi=1×3 trong 12 cặp.
376 | 
377 | **Khi làm sai:** Nếu tính 1/2+1/2, em đang cộng xác suất mà đề yêu cầu cùng xảy ra. Ôn lại mục Kiến thức 2.2. Độc lập không phải xung khắc và Bài luyện 12 tại Luyện tập 2.2. Xác suất giao của hai biến cố độc lập.
378 | 
379 | </details>
380 | 
381 | 
382 | 
383 | 
384 | 
385 | **Vận dụng**
386 | 
387 | Gieo một xúc xắc: A=ra 1 và B=ra 6. A,B có xung khắc không? Có độc lập không?
388 | 
389 | <!-- ITEM_ID: THPT-TOP20-T15; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O13; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
390 | <details markdown="1"><summary>Đối chiếu</summary>
391 | 
392 | **Lời giải:** A∩B=∅ nên xung khắc; P(A)P(B)=1/36>0 nhưng P(A∩B)=0 nên **không độc lập**.
393 | 
394 | **Khi làm sai:** Nếu viết “vì không xảy ra cùng nên độc lập”, em đã đảo khái niệm. Xung khắc là giao rỗng, độc lập cần kiểm tích xác suất. Ôn lại mục Kiến thức 2.2. Độc lập không phải xung khắc và Bài luyện 13 tại Luyện tập 2.3. Phân biệt xung khắc và độc lập.
395 | 
396 | </details>
397 | 

**Practice 12 / original lines 670–683**

670 | ### 2.2. Xác suất giao của hai biến cố độc lập
671 | 
672 | <!-- ITEM_ID: THPT-TOP20-P12; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O12; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->
673 | 
674 | **Bài luyện 12.** Hai xúc xắc cân đối độc lập. A: con thứ nhất ra số lớn hơn 4; B: con thứ hai ra số chẵn. Tính P(A∩B).
675 | 
676 | <details markdown="1"><summary>Lời giải</summary>
677 | 
678 | **Lời giải:** Gọi \(A\) là biến cố con xúc xắc thứ nhất ra 5 hoặc 6, nên \(P(A)=2/6=1/3\). Gọi \(B\) là biến cố con thứ hai ra số chẵn 2, 4 hoặc 6, nên \(P(B)=3/6=1/2\). Vì hai xúc xắc được gieo độc lập, ta dùng **quy tắc nhân cho giao**: \(P(A\cap B)=P(A)P(B)=\dfrac13\cdot\dfrac12=\dfrac16\).
679 | 
680 | **Khi làm sai:** Nếu ra 5/6, em đang cộng hai biến cố thay vì lấy giao.
681 | 
682 | </details>
683 | 

**Practice 13 / original lines 684–697**

684 | ### 2.3. Phân biệt xung khắc và độc lập
685 | 
686 | <!-- ITEM_ID: THPT-TOP20-P13; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O13; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->
687 | 
688 | **Bài luyện 13.** Một xúc xắc: A={1,2}, B={3,4}. Chúng có xung khắc và độc lập không?
689 | 
690 | <details markdown="1"><summary>Lời giải</summary>
691 | 
692 | **Lời giải:** Hai biến cố \(A=\{1,2\}\) và \(B=\{3,4\}\) **xung khắc** vì \(A\cap B=\varnothing\). Nhưng để xét **độc lập**, phải kiểm tra đẳng thức \(P(A\cap B)=P(A)P(B)\). Ở đây \(P(A\cap B)=0\), trong khi \(P(A)P(B)=\dfrac26\cdot\dfrac26=\dfrac19>0\). Hai vế khác nhau, nên \(A\) và \(B\) **không độc lập**. Không đánh đồng hai khái niệm.
693 | 
694 | **Khi làm sai:** Hai biến cố không cùng xảy ra có xác suất dương thì không độc lập.
695 | 
696 | </details>
697 | 

### Knowledge cluster 8 / original lines 398–451

398 | ### 2.3. Quy tắc cộng xác suất
399 | 
400 | **Khám phá kiến thức**
401 | 
402 | Khi đếm số người tham gia ít nhất một trong hai câu lạc bộ, cách cộng số người của từng câu lạc bộ có thể đếm trùng những người tham gia cả hai. Cụ thể, mỗi người ở phần giao đã xuất hiện một lần trong nhóm A và thêm một lần trong nhóm B. Muốn đếm đúng hợp, ta phải **trừ phần giao một lần**.
403 | 
404 | Lập luận ấy cũng áp dụng cho xác suất: cộng xác suất của A và B rồi trừ xác suất của phần xảy ra đồng thời. Ta không cần giả thiết hai biến cố độc lập, bởi đây là quy tắc về việc phân chia và đếm những kết quả thuộc hợp. Trường hợp hai biến cố xung khắc thì phần giao không có kết quả nào, số hạng cần trừ bằng 0 và công thức tự rút gọn thành phép cộng hai xác suất.
405 | 
406 | > **CÔNG THỨC — Quy tắc cộng**
407 | >
408 | > \[P(A\cup B)=P(A)+P(B)-P(A\cap B).\] Nếu giao rỗng thì bỏ số hạng giao.
409 | 
410 | **Ví dụ**
411 | 
412 | **Đề bài:** Trong một nhóm 50 người, có 30 người thích hoạt động A, 25 người thích hoạt động B và 10 người thích cả hai. Chọn ngẫu nhiên đều một người. Tính xác suất người đó thích **ít nhất một** trong hai hoạt động.
413 | 
414 | **Lời giải:** Cộng 30 và 25 sẽ đếm hai lần 10 người thích cả hai. Số người thích ít nhất một hoạt động là \(30+25-10=45\), nên xác suất cần tìm bằng \(45/50=9/10\). Không cần giả thiết hai sở thích độc lập; chỉ cần dùng quy tắc cộng trừ phần giao. Kiểm tra: 45 không vượt 50.
415 | 
416 | **Lỗi thường gặp:** Cộng \(P(A)+P(B)\) mà quên trừ giao, dẫn tới xác suất có thể vượt 1.
417 | 
418 | **Kiến thức cần ghi nhớ**
419 | 
420 | Nếu \(A\cap B=\varnothing\) thì không có phần chung bị đếm hai lần, vì vậy \(P(A\cup B)=P(A)+P(B)\). Chẳng hạn, trên một lần gieo xúc xắc, \(A=\{1\}\) và \(B=\{4\}\) xung khắc nên \(P(A\cup B)=2/6=1/3\). Nếu có kết quả chung, phải trở lại công thức đầy đủ và trừ \(P(A\cap B)\).
421 | 
422 | **Vận dụng**
423 | 
424 | Gieo xúc xắc cân đối. A=lẻ, B=lớn hơn 3. Tính P(A∪B) bằng quy tắc cộng.
425 | 
426 | <!-- ITEM_ID: THPT-TOP20-T08; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O14; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
427 | <details markdown="1"><summary>Đối chiếu</summary>
428 | 
429 | A={1,3,5}, B={4,5,6}, giao={5}; P(hợp)=3/6+3/6−1/6=5/6.
430 | 
431 | **Khi làm sai:** Nếu ra 1, em đã cộng mà quên trừ kết quả 5 được đếm hai lần. Ôn lại mục Kiến thức 2.3. Quy tắc cộng xác suất và Bài luyện 14 tại Luyện tập 2.4. Áp dụng quy tắc cộng xác suất.
432 | 
433 | </details>
434 | 
435 | 
436 | 
437 | 
438 | 
439 | **Vận dụng**
440 | 
441 | Gieo xúc xắc cân đối. A={1,2}, B={5,6}. Tính P(A∪B) và nêu vì sao cộng trực tiếp.
442 | 
443 | <!-- ITEM_ID: THPT-TOP20-T16; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O15; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
444 | <details markdown="1"><summary>Đối chiếu</summary>
445 | 
446 | **Lời giải:** Hai tập rời nhau nên P(A∩B)=0, P(A∪B)=2/6+2/6=4/6=2/3.
447 | 
448 | **Khi làm sai:** Nếu nhân 2/6×2/6, em đã tính giao của biến cố độc lập; ở đây A,B xung khắc và đề hỏi hợp. Ôn lại mục Kiến thức 2.3. Quy tắc cộng xác suất và Bài luyện 15 tại Luyện tập 2.5. Quy tắc cộng khi hai biến cố xung khắc.
449 | 
450 | </details>
451 | 

**Practice 14 / original lines 698–711**

698 | ### 2.4. Áp dụng quy tắc cộng xác suất
699 | 
700 | <!-- ITEM_ID: THPT-TOP20-P14; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O14; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->
701 | 
702 | **Bài luyện 14.** Gieo xúc xắc. A={1,2,3,4}, B={2,4,6}. Tính P(A∪B) theo quy tắc cộng.
703 | 
704 | <details markdown="1"><summary>Lời giải</summary>
705 | 
706 | **Lời giải:** Ta có \(A=\{1,2,3,4\}\), \(B=\{2,4,6\}\), nên \(A\cap B=\{2,4\}\). Vì kết quả 2 và 4 nằm trong **cả hai** biến cố, khi cộng xác suất phải trừ phần giao: \(P(A\cup B)=\dfrac46+\dfrac36-\dfrac26=\dfrac56\). Kiểm lại bằng cách liệt kê hợp \(A\cup B=\{1,2,3,4,6\}\), đúng năm trong sáu kết quả đồng khả năng.
707 | 
708 | **Khi làm sai:** Nếu ra 7/6>1, phép cộng đã đếm trùng 2,4.
709 | 
710 | </details>
711 | 

**Practice 15 / original lines 712–725**

712 | ### 2.5. Quy tắc cộng khi hai biến cố xung khắc
713 | 
714 | <!-- ITEM_ID: THPT-TOP20-P15; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O15; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->
715 | 
716 | **Bài luyện 15.** Gieo xúc xắc, A=ra 1 và B=ra 6. Tính P(A∪B) và giải thích vì sao cộng trực tiếp.
717 | 
718 | <details markdown="1"><summary>Lời giải</summary>
719 | 
720 | **Lời giải:** Trên một lần gieo xúc xắc, \(A=\{1\}\) và \(B=\{6\}\). Hai biến cố này **xung khắc** vì không có kết quả nào vừa là 1 vừa là 6, tức \(A\cap B=\varnothing\). Do đó áp dụng **quy tắc cộng cho biến cố xung khắc**: \(P(A\cup B)=P(A)+P(B)=\dfrac16+\dfrac16=\dfrac13\). Không cần và cũng không được suy rằng hai biến cố độc lập.
721 | 
722 | **Khi làm sai:** Nếu gọi A,B độc lập, thử kiểm P(A)P(B)=1/36 khác 0.
723 | 
724 | </details>
725 | 

### Knowledge cluster 9 / original lines 452–509

452 | ### 2.4. Quy tắc nhân độc lập và biến cố đối
453 | 
454 | **Khám phá kiến thức**
455 | 
456 | Giả sử một hệ thống có hai thiết bị hoạt động độc lập. Nếu câu hỏi là “**cả hai** thiết bị cùng hoạt động”, ta xét giao của hai biến cố. Vì các kết quả hoạt động không ảnh hưởng nhau, xác suất cả hai cùng hoạt động bằng tích các xác suất riêng. Nhưng nếu câu hỏi đổi thành “**ít nhất một** thiết bị hoạt động”, việc cộng ngay hai xác suất hoạt động sẽ đếm trùng trường hợp cả hai đều hoạt động.
457 | 
458 | Cách suy nghĩ gọn hơn là xét tình huống ngược lại: “không có thiết bị nào hoạt động”, tức là **cả hai đều hỏng**. Đây là biến cố đối của “ít nhất một hoạt động”. Khi hai thiết bị độc lập, sự cố hỏng của chúng cũng độc lập, nên có thể nhân hai xác suất hỏng rồi lấy 1 trừ kết quả đó. Lập luận này **không được tự động áp dụng** cho hai thiết bị có chung nguồn điện hoặc một phép rút thẻ không hoàn lại: những tình huống ấy có thể làm các biến cố phụ thuộc nhau.
459 | 
460 | > **CÔNG THỨC — Nhân độc lập và biến cố đối**
461 | >
462 | > Nếu A,B độc lập: \[P(A\cap B)=P(A)P(B),\quad P(A\cup B)=1-P(\bar A)P(\bar B).\] Không nhân xác suất biên cho biến cố phụ thuộc.
463 | 
464 | **Ví dụ**
465 | 
466 | **Đề bài:** Hai thiết bị hoạt động độc lập. Xác suất thiết bị thứ nhất hoạt động là \(3/4\), thiết bị thứ hai là \(4/5\). Tính xác suất của ba biến cố: (a) **cả hai** cùng hoạt động; (b) **cả hai** cùng hỏng; (c) **ít nhất một** thiết bị hoạt động.
467 | 
468 | **Lời giải:** (a) Vì hoạt động độc lập, xác suất cả hai chạy là \((3/4)(4/5)=3/5\). (b) Xác suất hỏng riêng lần lượt là \(1/4\) và \(1/5\). Hai trạng thái hỏng cũng độc lập, nên xác suất cả hai hỏng là \((1/4)(1/5)=1/20\). (c) “Ít nhất một hoạt động” là biến cố đối của “cả hai cùng hỏng”, vì vậy xác suất bằng \(1-1/20=19/20\). **Cách chọn phương pháp:** dùng quy tắc nhân khi xét hai biến cố độc lập cùng xảy ra và dùng biến cố đối khi câu hỏi là “ít nhất một”.
469 | 
470 | **Giới hạn:** Khi rút liên tiếp không hoàn lại hoặc hai biến cố phụ thuộc, không nhân hai xác suất ban đầu như thể độc lập. Trong chuyên đề này, em vẫn có thể **đếm các chuỗi kết quả đồng khả năng** để giải tình huống cụ thể; công thức xác suất có điều kiện sẽ được học ở chuyên đề khác, không phải tiền đề bắt buộc ở đây.
471 | 
472 | **Kiến thức cần ghi nhớ**
473 | 
474 | Đối với hai phép thử độc lập, muốn tính xác suất **cả hai** biến cố cùng xảy ra ta dùng tích các xác suất; muốn tính **ít nhất một** xảy ra, ta có thể dùng quy tắc cộng trừ phần giao hoặc lấy biến cố đối. Khi tung đồng xu cân đối và gieo xúc xắc cân đối độc lập, xác suất “xu ngửa hoặc xúc xắc ra số lớn hơn 4” là \(1/2+1/3-1/6=2/3\). Không dùng phép nhân như công thức độc lập khi chưa có căn cứ về tính độc lập.
475 | 
476 | **Vận dụng**
477 | 
478 | Hai thiết bị hoạt động độc lập, xác suất hỏng lần lượt 1/5 và 1/4. Xác suất có ít nhất một thiết bị hoạt động là bao nhiêu?
479 | 
480 | <!-- ITEM_ID: THPT-TOP20-T09; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O16; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
481 | <details markdown="1"><summary>Đối chiếu</summary>
482 | 
483 | P=1−P(cả hai hỏng)=1−(1/5)(1/4)=19/20.
484 | 
485 | **Khi làm sai:** Nếu nhân hai xác suất hoạt động 4/5×3/4, em đang tính cả hai hoạt động, không phải ít nhất một. Ôn lại mục Kiến thức 2.4. Quy tắc nhân độc lập và biến cố đối và Bài luyện 16 tại Luyện tập 2.6. Quy tắc nhân cho hai phép thử độc lập.
486 | 
487 | </details>
488 | 
489 | 
490 | 
491 | 
492 | 
493 | 
494 | 
495 | **Vận dụng**
496 | 
497 | Tung đồng xu cân đối và gieo xúc xắc cân đối độc lập. A=đồng xu ngửa, B=xúc xắc chẵn. Tính P(A∪B).
498 | 
499 | <!-- ITEM_ID: THPT-TOP20-T17; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O17; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
500 | <details markdown="1"><summary>Đối chiếu</summary>
501 | 
502 | **Lời giải:** P(A)=1/2, P(B)=1/2, P(A∩B)=1/4. Vậy P(A∪B)=1/2+1/2−1/4=3/4.
503 | 
504 | **Khi làm sai:** Nếu được 1, em đã cộng mà chưa trừ phần **cả hai cùng xảy ra**; nếu được 1/4 đó là giao, không phải hợp. Ôn lại mục Kiến thức 2.4. Quy tắc nhân độc lập và biến cố đối và Bài luyện 17 tại Luyện tập 2.7. Tính xác suất hợp bằng cộng và trừ giao.
505 | 
506 | </details>
507 | 
508 | # Luyện tập
509 | 

**Practice 16 / original lines 726–739**

726 | ### 2.6. Quy tắc nhân cho hai phép thử độc lập
727 | 
728 | <!-- ITEM_ID: THPT-TOP20-P16; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O16; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->
729 | 
730 | **Bài luyện 16.** Tung đồng xu cân đối và gieo xúc xắc cân đối độc lập. P(ngửa và mặt xúc xắc chia hết cho 3)?
731 | 
732 | <details markdown="1"><summary>Lời giải</summary>
733 | 
734 | **Lời giải:** Đồng xu cân đối có xác suất ngửa \(1/2\). Với xúc xắc cân đối, các mặt chia hết cho 3 là 3 và 6, nên xác suất của biến cố đó bằng \(2/6=1/3\). Hai phép thử độc lập và đề hỏi **cả hai điều kiện cùng xảy ra**, nên dùng quy tắc nhân: \(P=\dfrac12\cdot\dfrac26=\dfrac16\). Nếu dùng phép cộng, em đang tính một dạng hợp chứ không phải giao.
735 | 
736 | **Khi làm sai:** Đừng lấy 1/2+2/6 vì câu hỏi yêu cầu cùng xuất hiện.
737 | 
738 | </details>
739 | 

**Practice 17 / original lines 740–753**

740 | ### 2.7. Tính xác suất hợp bằng cộng và trừ giao
741 | 
742 | <!-- ITEM_ID: THPT-TOP20-P17; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O17; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->
743 | 
744 | **Bài luyện 17.** Gieo hai xúc xắc cân đối độc lập. A: con thứ nhất ra số lẻ, B: con thứ hai không lớn hơn 2. Tính P(A∪B).
745 | 
746 | <details markdown="1"><summary>Lời giải</summary>
747 | 
748 | **Lời giải:** Đặt \(A\): “xúc xắc thứ nhất ra số lẻ” và \(B\): “xúc xắc thứ hai ra số không lớn hơn 2”. Khi đó \(P(A)=3/6=1/2\), \(P(B)=2/6=1/3\). Vì hai xúc xắc độc lập, \(P(A\cap B)=P(A)P(B)=1/6\). Đề hỏi **\(A\) hoặc \(B\)**, tức hợp; áp dụng quy tắc cộng, \(P(A\cup B)=\dfrac12+\dfrac13-\dfrac16=\dfrac23\). Trừ phần giao để không đếm các cặp cùng thỏa hai điều kiện hai lần.
749 | 
750 | **Khi làm sai:** Nếu kết quả 5/6, em quên trừ phần giao; nếu 1/6 đó là giao chứ không phải hợp.
751 | 
752 | </details>
753 | 

---
This is a reviewer evidence copy, NOT a new learner source. Source blob is immutable for this packet; reconcile review with exact HEAD before changing current Q18/V2/ready/REGISTER.
