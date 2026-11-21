# Temp — CĐ21 R06 · Phản biện độc lập D6/PED6 theo 8 outcome

PACKET_ID: TOP21-R06-D6-TARGETED-20261118
STATUS: INDEPENDENT_REVIEW_PENDING — **không phải Academic/PED PASS**
STANDARD: SLM-THPT-QUALITY-ONE; Q08/Q14/Q18; 5 Permanent Sources THPT v2.1 (không thêm nguồn quy tắc thứ sáu).
SOURCE_FILE: prototypes/thpt/content-drafts/topic21-conditional-bayes/Temp_PLAN22_21_R05_LEARNER_PRESENTATION_20261116.md
SOURCE_BLOB: aa325637f659bc5f8ba504f6ce0129e07340a41d
SOURCE_BRANCH: authoring/topic21-r06-d6-navigation-fix-20261117
SCOPE: Chuyên đề 21, 8 outcome TOP21-O01–O08; chỉ kiểm phần D6, đường tự học từ lỗi → Kiến thức → Bài luyện, và tính đúng toán của ví dụ tham chiếu.
PROTECTED: Giữ nguyên 19 canonical item ID, đề/đáp án/rubric, 8 public self-check placements, RD1/private; không chỉnh sửa học liệu trong review, không cấp phát hành.

## Yêu cầu phản biện

Đối chiếu từng outcome xem giải thích sai lầm có thực chất, bước tự sửa làm được, mục Kiến thức tham chiếu đúng và Bài luyện đúng cấu trúc; đánh giá PED6/Q08 và kiểm toán liên quan. Trả bảng 8 ID (PASS/REVISE/INSUFFICIENT_EVIDENCE), SOURCE_RECEIPT, ACADEMIC/PED affected-scope verdict, P0/P1/P2, MINIMAL_DELTA; không suy rộng verdict ra cả Topic.

## Trích nguyên văn nguồn và bài luyện cùng outcome (đánh số dòng từ nguồn Git)

### TOP21-O01 — học, tự thử, khắc phục và bài luyện

**Nguồn Kiến thức + D6 (dòng 15–51)**

15 | ### 1.1. Biết thêm thông tin là đổi nhóm đang xét
16 | 
17 | <!-- OUTCOME_ID: TOP21-O01; LEGACY_SGK_SKILL: G12-B18-CONDITIONAL_INTERPRETATION; LESSON_ID: G12-SGK-B18 -->
18 | 
19 | **Khám phá kiến thức**
20 | 
21 | Khi rút ngẫu nhiên một học sinh trong cả lớp, ta xét mọi học sinh như những kết quả có thể xảy ra. Nhưng giả sử em đã biết người được rút thuộc câu lạc bộ cờ: lúc này những học sinh không tham gia câu lạc bộ không còn phù hợp với thông tin đã biết. Câu hỏi “người ấy có đeo kính không?” cần được trả lời **trong nhóm câu lạc bộ**, không phải trên toàn lớp.
22 | 
23 | Đó chính là ý tưởng của xác suất có điều kiện. Ta gọi \(B\) là biến cố đã biết và \(A\) là biến cố cần tìm. Trong những trường hợp thuộc \(B\), chỉ phần thuộc cả \(A\) và \(B\) là thuận lợi. Vì vậy, khi biết \(B\) xảy ra, nhóm được xét chuyển từ toàn bộ \(\Omega\) sang \(B\); không thể tự thay bằng xác suất thông thường của \(A\). Nếu \(P(B)=0\), cách xét “trong nhóm \(B\)” không xác định theo công thức điều kiện thông thường.
24 | 
25 | > **ĐỊNH NGHĨA — Xác suất khi đã biết một biến cố**
26 | >
27 | > Biết B xảy ra là chọn lại trong nhóm B: chỉ các kết quả thuộc B còn được xét; để xác suất điều kiện có nghĩa cần \(P(B)>0\). Không được đồng nhất \(P(A\mid B)\) và \(P(B\mid A)\).
28 | 
29 | **Ví dụ**
30 | 
31 | **Đề bài:** Một lớp có 20 học sinh, trong đó 8 bạn tham gia câu lạc bộ cờ và 5 trong 8 bạn ấy đeo kính. Chọn đều một học sinh, biết bạn được chọn thuộc câu lạc bộ cờ. Tính xác suất bạn ấy đeo kính.
32 | 
33 | **Lời giải:** Thông tin “thuộc câu lạc bộ cờ” giới hạn nhóm đang xét còn 8 bạn. Trong nhóm này có 5 bạn đeo kính, nên xác suất cần tìm là \(5/8\). Không lấy \(5/20\), vì 20 là quy mô cả lớp, không phải nhóm đã biết. Việc chọn đều là giả thiết cần thiết cho cách đếm theo số học sinh.
34 | 
35 | **Kiến thức cần ghi nhớ**
36 | 
37 | Một thông tin đã biết làm thay đổi nhóm kết quả đang xét. Biến cố cần hỏi là phần giao với nhóm đó; không đổi chiều hai biến cố.
38 | 
39 | **Vận dụng**
40 | 
41 | Trong 24 vé khác nhau được chọn đều có 9 vé xanh, 6 trong 9 vé xanh có dấu sao. Đã biết vé rút ra là xanh. Hỏi xác suất vé đó có dấu sao?
42 | 
43 | <!-- ITEM_ID: THPT-TOP21-T01; ROLE: TOPIC_FIRST_TRY; LEARNER_LABEL: VAN_DUNG; PRIMARY_OUTCOME: TOP21-O01; CONTENT_VERSION: TOP21-R06; PUBLIC_FORMATIVE_NO_MASTERY -->
44 | <details markdown="1"><summary>Đối chiếu</summary>
45 | 
46 | Nhóm điều kiện gồm 9 vé xanh; có 6 vé trong nhóm đó có sao. Do đó P(sao | xanh)=6/9=2/3, không phải 6/24.
47 | 
48 | **Khi làm sai:** Nếu chia cho 24, em đã quên thu hẹp Ω khi biết màu vé. Tự gạch riêng 9 vé xanh, đánh dấu 6 vé sao rồi thử lại. Ôn lại mục Kiến thức 1.1 (đổi nhóm đang xét) và Bài luyện 1 tại Luyện tập 1.1.
49 | 
50 | </details>
51 | 

**Nguồn Bài luyện (dòng 325–341)**

325 | ### 1.1. Biết thêm thông tin là đổi nhóm đang xét
326 | 
327 | **Bài luyện 1.**
328 | 
329 | <!-- ITEM_ID: THPT-TOP21-P01; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP21-O01; CONTENT_VERSION: TOP21-R03; PUBLIC_FORMATIVE_NO_MASTERY -->
330 | Trong 40 thẻ vật lí khác nhau được chọn đều có 12 thẻ hình tam giác, trong đó đúng 5 thẻ đỏ. Biết đã chọn thẻ tam giác, tính xác suất thẻ đỏ và giải thích mẫu số.
331 | 
332 | <details markdown="1"><summary>Lời giải</summary>
333 | 
334 | **Lời giải:** Khi chưa biết gì thêm, phép thử có 40 thẻ vật lí đồng khả năng. Nhưng đề đã cho biết **thẻ được chọn mang hình tam giác**, nên chỉ xét 12 thẻ tam giác. Trong nhóm này có đúng 5 thẻ đỏ, vì vậy \(P(\text{đỏ}\mid\text{tam giác})=5/12\). Mẫu số 12 là số kết quả còn phù hợp với điều kiện, không phải 40 thẻ ban đầu.
335 | 
336 | **Khi làm sai:** Nếu ra 5/40, hãy hỏi lại: đề đã cho biết thẻ mang hình gì? Mọi kết quả không phải tam giác đã bị loại khỏi nhóm xét.
337 | 
338 | </details>
339 | 
340 | 
341 | 

### TOP21-O02 — học, tự thử, khắc phục và bài luyện

**Nguồn Kiến thức + D6 (dòng 52–88)**

52 | ### 1.2. Từ vùng giao đến công thức xác suất có điều kiện
53 | 
54 | <!-- OUTCOME_ID: TOP21-O02; LEGACY_SGK_SKILL: G12-B18-CONDITIONAL_FORMULA; LESSON_ID: G12-SGK-B18 -->
55 | 
56 | **Khám phá kiến thức**
57 | 
58 | Đôi khi ta không được cho số người hoặc số phiếu trong từng nhóm, mà chỉ biết các xác suất của biến cố. Ta vẫn muốn giữ đúng cách nhìn từ bài trước: khi biết \(B\) xảy ra, ta chỉ quan tâm phần \(B\), còn trường hợp vừa \(A\) vừa \(B\) chính là vùng giao \(A\cap B\). Lấy phần giao so với toàn bộ phần đã biết sẽ cho xác suất của \(A\) **trong điều kiện \(B\)**.
59 | 
60 | Nếu các kết quả ban đầu đồng khả năng, ta có thể dùng tỉ số \(n(A\cap B)/n(B)\). Khi dữ liệu cho dưới dạng xác suất, cùng ý tưởng ấy được viết bằng cách chia xác suất giao cho xác suất của biến cố đã biết. Điều kiện \(P(B)>0\) không thể bỏ qua vì không được chia cho 0. Chú ý vị trí sau vạch đứng: \(P(A\mid B)\) hỏi về \(A\) khi **đã biết \(B\)**, khác với \(P(B\mid A)\).
61 | 
62 | > **CÔNG THỨC — Xác suất có điều kiện**
63 | >
64 | > \[P(A\mid B)=\frac{P(A\cap B)}{P(B)},\qquad P(B)>0.\] \(P(A\cap B)\) là phần giao; \(P(B)\) là toàn bộ nhóm đã biết. Khi các phần tử của B đồng khả năng có thể dùng \(n(A\cap B)/n(B)\).
65 | 
66 | **Ví dụ**
67 | 
68 | **Đề bài:** Chọn ngẫu nhiên đều một số nguyên từ 1 đến 10. Gọi \(A\) là biến cố “số chẵn” và \(B\) là biến cố “số chia hết cho 3”. Tính \(P(A\mid B)\).
69 | 
70 | **Lời giải:** Do chọn đều, \(\Omega=\{1,2,\ldots,10\}\). Biến cố đã biết là \(B=\{3,6,9\}\), gồm ba số; giao \(A\cap B=\{6\}\) chỉ có một số. Vậy \(P(A\mid B)=n(A\cap B)/n(B)=1/3\). Kiểm bằng công thức: \(P(A\cap B)=1/10\), \(P(B)=3/10>0\), nên \(P(A\mid B)=(1/10)/(3/10)=1/3\). Không dùng \(P(A)=5/10\) làm mẫu số vì đề không cho biết \(A\) trước.
71 | 
72 | **Kiến thức cần ghi nhớ**
73 | 
74 | Muốn tính \(P(A\mid B)\), đặt đúng nhóm đã biết \(B\) làm mẫu số và phải có \(P(B)>0\).
75 | 
76 | **Vận dụng**
77 | 
78 | Gieo xúc xắc sáu mặt cân đối. A là 'chia hết cho 3', B là 'số chẵn'. Tính P(A|B).
79 | 
80 | <!-- ITEM_ID: THPT-TOP21-T02; ROLE: TOPIC_FIRST_TRY; LEARNER_LABEL: VAN_DUNG; PRIMARY_OUTCOME: TOP21-O02; CONTENT_VERSION: TOP21-R06; PUBLIC_FORMATIVE_NO_MASTERY -->
81 | <details markdown="1"><summary>Đối chiếu</summary>
82 | 
83 | B={2,4,6}, A∩B={6}; P(A|B)=(1/6)/(3/6)=1/3. Mẫu số P(B)=1/2>0.
84 | 
85 | **Khi làm sai:** Nếu viết 1/2, em đã lấy P(B) thay cho xác suất giao trong B. Nếu chia cho P(A), em đã đổi chiều thành P(B|A). Ôn lại mục Kiến thức 1.2 (công thức xác suất có điều kiện) và Bài luyện 2 tại Luyện tập 1.2.
86 | 
87 | </details>
88 | 

**Nguồn Bài luyện (dòng 342–358)**

342 | ### 1.2. Từ vùng giao đến công thức xác suất có điều kiện
343 | 
344 | **Bài luyện 2.**
345 | 
346 | <!-- ITEM_ID: THPT-TOP21-P02; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP21-O02; CONTENT_VERSION: TOP21-R03; PUBLIC_FORMATIVE_NO_MASTERY -->
347 | Chọn đều một số trong 1,…,12. A: chia hết cho 4. B: lớn hơn 6. Tính P(A|B).
348 | 
349 | <details markdown="1"><summary>Lời giải</summary>
350 | 
351 | **Lời giải:** Gọi \(B\) là biến cố đã biết “số lớn hơn 6”; khi chọn đều trong 1–12, \(B=\{7,8,9,10,11,12\}\) gồm 6 số. Biến cố \(A\) “chia hết cho 4” có các kết quả 4, 8, 12; giao \(A\cap B=\{8,12\}\) gồm 2 số. Vì \(P(B)=6/12>0\), xác suất điều kiện là \(P(A\mid B)=n(A\cap B)/n(B)=2/6=1/3\). Chỉ có các phần tử của \(B\) được đưa vào mẫu số.
352 | 
353 | **Khi làm sai:** Nếu dùng 3/12, em đang tính P(A), không phải P(A|B). Hãy viết trọn tập B trước.
354 | 
355 | </details>
356 | 
357 | 
358 | 

### TOP21-O03 — học, tự thử, khắc phục và bài luyện

**Nguồn Kiến thức + D6 (dòng 89–125)**

89 | ### 1.3. Quy tắc nhân tổng quát cho các lượt phụ thuộc
90 | 
91 | <!-- OUTCOME_ID: TOP21-O03; LEGACY_SGK_SKILL: G12-B18-GENERAL_MULTIPLICATION; LESSON_ID: G12-SGK-B18 -->
92 | 
93 | **Khám phá kiến thức**
94 | 
95 | Khi lấy hai thẻ liên tiếp mà không hoàn lại, chiếc thẻ thứ nhất thực sự làm thay đổi số thẻ còn lại. Chẳng hạn, rút được một thẻ màu xanh ở lượt đầu sẽ khiến số thẻ xanh và tổng số thẻ ở lượt sau đều giảm. Bởi thế, xác suất rút xanh ở lượt thứ hai **khi đã biết lượt đầu xanh** có thể khác xác suất xanh ở lần rút đầu.
96 | 
97 | Muốn tính xác suất hai sự việc \(A\) rồi \(B\) cùng xảy ra, trước hết ta tính khả năng đi vào nhánh \(A\). Sau đó, **trong chính nhánh đã xảy ra \(A\)**, ta tính khả năng đi tiếp tới \(B\). Tích hai xác suất ấy cho khả năng đi trọn đường \(A\to B\). Đây là quy tắc nhân có điều kiện: không cần giả sử hai lượt độc lập, nhưng phải cập nhật thông tin ở bước sau và nói rõ điều kiện đang xét.
98 | 
99 | > **CÔNG THỨC — Xác suất đồng thời theo điều kiện**
100 | >
101 | > \[P(A\cap B)=P(A)P(B\mid A)\quad\text{khi }P(A)>0.\] Tương tự \(P(A\cap B)=P(B)P(A\mid B)\) nếu \(P(B)>0\). Khi rút không hoàn lại, phải cập nhật xác suất nhánh sau.
102 | 
103 | **Ví dụ**
104 | 
105 | **Đề bài:** Một túi có 3 thẻ xanh lục và 4 thẻ cam, tất cả các thẻ phân biệt. Rút đều ngẫu nhiên hai thẻ liên tiếp không hoàn lại. Tính xác suất cả hai thẻ đều xanh lục.
106 | 
107 | **Lời giải:** Xác suất thẻ đầu xanh lục là \(3/7\). Sau khi đã rút xanh lục, túi còn 2 thẻ xanh lục trong tổng 6 thẻ, nên xác suất xanh lục ở lượt hai **khi lượt đầu xanh lục** là \(2/6\). Theo quy tắc nhân có điều kiện, xác suất cả hai xanh lục bằng \((3/7)(2/6)=1/7\). Không được dùng \((3/7)^2\) vì số thẻ đã thay đổi sau lượt đầu.
108 | 
109 | **Kiến thức cần ghi nhớ**
110 | 
111 | Nhân xác suất dọc một đường theo đúng điều kiện của từng lượt; không hoàn lại thường làm xác suất lượt sau thay đổi.
112 | 
113 | **Vận dụng**
114 | 
115 | Có 4 thẻ đỏ và 5 thẻ xanh khác nhau; rút liên tiếp hai thẻ không hoàn lại, đều mỗi lượt. Tính P(lượt đầu đỏ và lượt sau xanh).
116 | 
117 | <!-- ITEM_ID: THPT-TOP21-T03; ROLE: TOPIC_FIRST_TRY; LEARNER_LABEL: VAN_DUNG; PRIMARY_OUTCOME: TOP21-O03; CONTENT_VERSION: TOP21-R06; PUBLIC_FORMATIVE_NO_MASTERY -->
118 | <details markdown="1"><summary>Đối chiếu</summary>
119 | 
120 | P(đỏ đầu)=4/9; sau đó còn 8 thẻ, 5 xanh nên P(xanh sau | đỏ đầu)=5/8. Giao = (4/9)(5/8)=5/18.
121 | 
122 | **Khi làm sai:** Nếu dùng (4/9)(5/9), em chưa đổi tổng số thẻ ở lượt hai từ 9 xuống 8. Vẽ một nhánh đỏ trước rồi ghi nội dung túi còn lại. Ôn lại mục Kiến thức 1.3 (quy tắc nhân cho lượt phụ thuộc) và Bài luyện 3 tại Luyện tập 1.3.
123 | 
124 | </details>
125 | 

**Nguồn Bài luyện (dòng 359–375)**

359 | ### 1.3. Quy tắc nhân tổng quát cho các lượt phụ thuộc
360 | 
361 | **Bài luyện 3.**
362 | 
363 | <!-- ITEM_ID: THPT-TOP21-P03; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP21-O03; CONTENT_VERSION: TOP21-R03; PUBLIC_FORMATIVE_NO_MASTERY -->
364 | Hộp có 5 thẻ đỏ, 2 thẻ vàng. Rút đều ba thẻ liên tiếp không hoàn lại. Tính xác suất màu theo đúng thứ tự đỏ–vàng–đỏ.
365 | 
366 | <details markdown="1"><summary>Lời giải</summary>
367 | 
368 | **Lời giải:** Vì **không hoàn lại**, ta phải cập nhật thành phần hộp sau mỗi lượt. Xác suất đỏ đầu tiên là \(5/7\); khi đỏ đã rút, hộp còn 4 đỏ và 2 vàng trong 6 thẻ, nên xác suất vàng thứ hai là \(2/6\). Sau hai lượt đỏ–vàng, hộp còn 4 đỏ trong 5 thẻ, nên xác suất đỏ ở lượt ba là \(4/5\). Theo quy tắc nhân theo các điều kiện liên tiếp, \(P(\text{đỏ–vàng–đỏ})=\dfrac57\cdot\dfrac26\cdot\dfrac45=\dfrac4{21}\). Không nhân ba xác suất dựa trên hộp ban đầu.
369 | 
370 | **Khi làm sai:** Nếu giữ 5/7 cho lượt thứ ba, em chưa cập nhật trạng thái túi; hãy ghi 'còn 6' rồi 'còn 5' trên các cạnh cây.
371 | 
372 | </details>
373 | 
374 | 
375 | 

### TOP21-O04 — học, tự thử, khắc phục và bài luyện

**Nguồn Kiến thức + D6 (dòng 126–162)**

126 | ### 1.4. Khi nào xác suất có điều kiện không thay đổi?
127 | 
128 | <!-- OUTCOME_ID: TOP21-O04; LEGACY_SGK_SKILL: G12-B18-INDEPENDENCE_CONNECTION; LESSON_ID: G12-SGK-B18 -->
129 | 
130 | **Khám phá kiến thức**
131 | 
132 | Ta có thể cảm thấy hai biến cố liên quan chỉ vì chúng cùng nhắc tới một phép thử, hoặc cảm thấy chúng độc lập chỉ vì tên gọi khác nhau. Cả hai trực giác ấy đều có thể sai. Điều cần kiểm tra là: nếu biết biến cố \(B\) đã xảy ra, xác suất của \(A\) có thay đổi hay không?
133 | 
134 | Khi \(P(B)>0\), nếu xác suất của \(A\) trong nhóm \(B\) bằng xác suất của \(A\) trên toàn bộ không gian mẫu, thông tin \(B\) không làm thay đổi khả năng của \(A\). Từ công thức xác suất có điều kiện, điều đó tương đương với \(P(A\cap B)=P(A)P(B)\). Đẳng thức tích này là tiêu chuẩn kiểm tra độc lập kể cả khi một biến cố có xác suất 0; còn xác suất có điều kiện thì không được viết nếu mẫu số bằng 0. Độc lập cũng không phải là xung khắc: hai biến cố xung khắc có xác suất dương không thể độc lập.
135 | 
136 | > **TÍNH CHẤT — Tiêu chuẩn độc lập**
137 | >
138 | > \[A\text{ và }B\text{ độc lập}\iff P(A\cap B)=P(A)P(B).\] Khi \(P(B)>0\), độc lập tương đương \(P(A\mid B)=P(A)\). Hai biến cố xung khắc có xác suất dương không độc lập.
139 | 
140 | **Ví dụ**
141 | 
142 | **Đề bài:** Gieo hai xúc xắc cân đối và độc lập. Gọi \(A\) là biến cố “xúc xắc thứ nhất ra số chẵn” và \(B\) là biến cố “xúc xắc thứ hai ra số lớn hơn 4”. Kiểm tra hai biến cố có độc lập không.
143 | 
144 | **Lời giải:** Trong 36 cặp số chấm đồng khả năng, \(A\) có xác suất \(3/6=1/2\), còn \(B\) có xác suất \(2/6=1/3\). Để đồng thời thỏa \(A\) và \(B\), xúc xắc thứ nhất có 3 lựa chọn chẵn và thứ hai có 2 lựa chọn lớn hơn 4, nên \(P(A\cap B)=6/36=1/6\). Vì \(P(A)P(B)=(1/2)(1/3)=1/6=P(A\cap B)\), hai biến cố độc lập. Kết luận đến từ đẳng thức xác suất, không chỉ từ việc chúng nhắc hai xúc xắc khác nhau.
145 | 
146 | **Kiến thức cần ghi nhớ**
147 | 
148 | Độc lập cần kiểm \(P(A\cap B)=P(A)P(B)\). Không đồng nhất với xung khắc; chú ý điều kiện dương khi nói bằng xác suất có điều kiện.
149 | 
150 | **Vận dụng**
151 | 
152 | Tung hai đồng xu cân đối, độc lập. A: đồng xu đầu ngửa; B: có đúng một mặt ngửa trong cả hai lượt. A, B có độc lập không?
153 | 
154 | <!-- ITEM_ID: THPT-TOP21-T04; ROLE: TOPIC_FIRST_TRY; LEARNER_LABEL: VAN_DUNG; PRIMARY_OUTCOME: TOP21-O04; CONTENT_VERSION: TOP21-R06; PUBLIC_FORMATIVE_NO_MASTERY -->
155 | <details markdown="1"><summary>Đối chiếu</summary>
156 | 
157 | Ω={NN,NS,SN,SS}. P(A)=2/4, P(B)=2/4, P(A∩B)=1/4 (chỉ NS). Vì 1/4=(1/2)(1/2), A và B độc lập trong mô hình này.
158 | 
159 | **Khi làm sai:** Nếu kết luận phụ thuộc chỉ vì B có nhắc đồng xu đầu, em đã suy theo ngôn ngữ. Hãy đếm giao và tích; cả hai cùng bằng 1/4. Ôn lại mục Kiến thức 1.4 (dấu hiệu độc lập) và Bài luyện 4 tại Luyện tập 1.4.
160 | 
161 | </details>
162 | 

**Nguồn Bài luyện (dòng 376–392)**

376 | ### 1.4. Khi nào xác suất có điều kiện không thay đổi?
377 | 
378 | **Bài luyện 4.**
379 | 
380 | <!-- ITEM_ID: THPT-TOP21-P04; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP21-O04; CONTENT_VERSION: TOP21-R03; PUBLIC_FORMATIVE_NO_MASTERY -->
381 | Gieo một xúc xắc cân đối. A: mặt chẵn; B: mặt lớn hơn 3. Hai biến cố độc lập không?
382 | 
383 | <details markdown="1"><summary>Lời giải</summary>
384 | 
385 | **Lời giải:** Với một xúc xắc cân đối, \(A=\{2,4,6\}\), \(B=\{4,5,6\}\). Ta có \(P(A)=P(B)=3/6=1/2\) nhưng \(A\cap B=\{4,6\}\), nên \(P(A\cap B)=2/6=1/3\). Để kiểm **độc lập**, cần so sánh xác suất giao với tích: \(P(A)P(B)=(1/2)(1/2)=1/4\). Vì \(1/3\ne1/4\), hai biến cố **không độc lập**. Cùng có xác suất 1/2 không đủ để kết luận độc lập.
386 | 
387 | **Khi làm sai:** Nếu coi độc lập vì cả hai đều xác suất 1/2, em chưa kiểm phần giao. Khoanh {4,6} trên Ω.
388 | 
389 | </details>
390 | 
391 | 
392 | 

### TOP21-O05 — học, tự thử, khắc phục và bài luyện

**Nguồn Kiến thức + D6 (dòng 165–205)**

165 | ### 2.1. Xác suất toàn phần: cộng các đường đi đến cùng kết quả
166 | 
167 | <!-- OUTCOME_ID: TOP21-O05; LEGACY_SGK_SKILL: G12-B19-TOTAL_PROBABILITY; LESSON_ID: G12-SGK-B19 -->
168 | 
169 | **Khám phá kiến thức**
170 | 
171 | Một sản phẩm bị lỗi có thể đến từ dây chuyền X hoặc dây chuyền Y. Nếu X làm ra ít sản phẩm nhưng có tỉ lệ lỗi cao, còn Y làm ra nhiều sản phẩm với tỉ lệ lỗi thấp, ta không thể cộng ngay hai tỉ lệ lỗi. Ta cần biết **tỉ trọng sản phẩm từ từng nguồn**, bởi một sản phẩm được chọn ngẫu nhiên phải đến từ một trong các nguồn trước khi có tình trạng lỗi hay không lỗi.
172 | 
173 | Gọi \(L\) là biến cố “sản phẩm lỗi”. Trong trường hợp hai nguồn X và Y phân chia toàn bộ sản phẩm, không chồng nhau, những sản phẩm lỗi chia thành hai nhóm rời nhau: “từ X và lỗi” hoặc “từ Y và lỗi”. Với mỗi nhóm ta **nhân** xác suất nguồn với xác suất lỗi khi biết nguồn; cuối cùng **cộng** hai đường lỗi, vì chúng không thể đồng thời xảy ra cho cùng một sản phẩm. Đó là bản chất của công thức xác suất toàn phần. Các xác suất điều kiện cần xác định trên nguồn có xác suất dương; không có yêu cầu nguồn phải độc lập với tình trạng lỗi.
174 | 
175 | > **CÔNG THỨC — Xác suất toàn phần hai nhánh**
176 | >
177 | > Nếu \(X\cap Y=\varnothing\), \(X\cup Y=\Omega\) và \(P(X),P(Y)>0\) thì \[P(L)=P(X)P(L\mid X)+P(Y)P(L\mid Y).\] Đây là tổng hai **đường đi rời nhau**, không phải tổng trần hai xác suất điều kiện.
178 | 
179 | **Ví dụ**
180 | 
181 | **Đề bài:** Nguồn X đóng góp 30% sản phẩm và có tỉ lệ lỗi 2%; nguồn Y đóng góp 70% sản phẩm và có tỉ lệ lỗi 4%. Chọn ngẫu nhiên đều một sản phẩm trong toàn bộ sản phẩm. Tính xác suất sản phẩm bị lỗi.
182 | 
183 | **Lời giải:** Vì một sản phẩm chỉ đến từ X hoặc Y và hai nguồn chiếm toàn bộ sản lượng, biến cố lỗi tách thành hai đường rời nhau. Đường “X rồi lỗi” có xác suất \(0{,}30\cdot0{,}02=0{,}006\); đường “Y rồi lỗi” có xác suất \(0{,}70\cdot0{,}04=0{,}028\). Cộng hai đường cho \(P(\text{lỗi})=0{,}006+0{,}028=0{,}034=3{,}4\%\). Không cộng trực tiếp 2% và 4%, vì hai nguồn có tỉ trọng sản lượng khác nhau.
184 | 
185 | ![Sơ đồ cây hai nguồn: X chiếm 30% có 2% hàng lỗi, Y chiếm 70% có 4% hàng lỗi](../../../../docs/assets/images/thpt/FIG-TOP21_TOTAL_PROBABILITY_30_70_TREE_WHITE_R01.svg)
186 | 
187 | **Hướng dẫn đọc hình:** Từ điểm xuất phát, chọn nhánh X hoặc Y theo tỉ trọng 30% và 70%. Tại mỗi nguồn, tiếp tục theo nhánh lỗi hoặc tốt **trong nguồn ấy**. Nhân các xác suất trên một đường để tìm xác suất ở lá; cộng hai lá lỗi được 0,034. Tổng bốn lá bằng 1.
188 | 
189 | **Kiến thức cần ghi nhớ**
190 | 
191 | Xác suất toàn phần là tổng các xác suất đường đi rời nhau. Trong mỗi đường đi, nhân xác suất nguồn với xác suất kết quả khi biết nguồn.
192 | 
193 | **Vận dụng**
194 | 
195 | Nguồn X cung cấp 1/4 sản phẩm, tỉ lệ lỗi 1/10; nguồn Y cung cấp 3/4, tỉ lệ lỗi 1/30. Chọn đều một sản phẩm. Xác suất gặp lỗi?
196 | 
197 | <!-- ITEM_ID: THPT-TOP21-T05; ROLE: TOPIC_FIRST_TRY; LEARNER_LABEL: VAN_DUNG; PRIMARY_OUTCOME: TOP21-O05; CONTENT_VERSION: TOP21-R06; PUBLIC_FORMATIVE_NO_MASTERY -->
198 | <details markdown="1"><summary>Đối chiếu</summary>
199 | 
200 | P(lỗi)=(1/4)(1/10)+(3/4)(1/30)=1/40+1/40=1/20.
201 | 
202 | **Khi làm sai:** Nếu ra 1/10+1/30, em đã quên nhân tỉ trọng nguồn; làm lại từng đường 'chọn nguồn → lỗi' trước khi cộng. Ôn lại mục Kiến thức 2.1 (công thức xác suất toàn phần) và Bài luyện 5 tại Luyện tập 2.1.
203 | 
204 | </details>
205 | 

**Nguồn Bài luyện (dòng 395–411)**

395 | ### 2.1. Xác suất toàn phần: cộng các đường đi đến cùng kết quả
396 | 
397 | **Bài luyện 5.**
398 | 
399 | <!-- ITEM_ID: THPT-TOP21-P05; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP21-O05; CONTENT_VERSION: TOP21-R03; PUBLIC_FORMATIVE_NO_MASTERY -->
400 | Kho hàng nhập 2/5 kiện từ X với tỉ lệ hỏng 1/20 và 3/5 từ Y với tỉ lệ hỏng 1/10. Lấy ngẫu nhiên một kiện. Tính tỉ lệ hỏng chung.
401 | 
402 | <details markdown="1"><summary>Lời giải</summary>
403 | 
404 | **Lời giải:** Một kiện hàng được chọn có thể đến từ **X hoặc Y**, hai nguồn rời nhau và chiếm toàn bộ kho. Xác suất đi theo đường “X rồi hỏng” là \((2/5)(1/20)=1/50\); đường “Y rồi hỏng” là \((3/5)(1/10)=3/50\). Hai đường không chồng nhau nên cộng lại: \(P(\text{hỏng})=1/50+3/50=4/50=2/25\). Không tính trung bình cộng đơn giản của hai tỉ lệ hỏng vì hai nguồn đóng góp lượng hàng khác nhau.
405 | 
406 | **Khi làm sai:** Nếu lấy trung bình cộng 1/20 và 1/10, em ngầm giả định hai nguồn 50%–50%; thực tế là 2/5 và 3/5.
407 | 
408 | </details>
409 | 
410 | 
411 | 

### TOP21-O06 — học, tự thử, khắc phục và bài luyện

**Nguồn Kiến thức + D6 (dòng 206–242)**

206 | ### 2.2. Bayes: đi từ kết quả quan sát ngược về nguồn
207 | 
208 | <!-- OUTCOME_ID: TOP21-O06; LEGACY_SGK_SKILL: G12-B19-BAYES_REVERSE; LESSON_ID: G12-SGK-B19 -->
209 | 
210 | **Khám phá kiến thức**
211 | 
212 | Một nhà máy cho biết sản phẩm từ dây chuyền A có xác suất mang dấu hiệu H là 80%. Khi bắt gặp một sản phẩm có dấu hiệu H, ta có thể kết luận nó đến từ A với xác suất 80% không? Chưa thể, vì ngoài A còn có các dây chuyền khác cũng có thể tạo ra dấu hiệu ấy. Câu hỏi đã **đảo chiều điều kiện**: từ “thấy H khi biết A” sang “thuộc A khi đã thấy H”.
213 | 
214 | Muốn trả lời, trước hết ta tính xác suất **mọi cách** tạo ra dấu hiệu H, sử dụng công thức toàn phần. Tiếp theo, ta tính riêng xác suất sản phẩm vừa đến từ A vừa có H. Trong số tất cả sản phẩm có H, phần thuộc A bằng xác suất đường “A rồi H” chia cho xác suất H chung. Tỉ số đó là công thức Bayes; mẫu số luôn là xác suất sự kiện **đã quan sát**, và phải dương.
215 | 
216 | > **CÔNG THỨC — Bayes – đảo chiều câu hỏi**
217 | >
218 | > \[P(Y\mid L)=\frac{P(Y)P(L\mid Y)}{P(L)},\qquad P(L)>0.\] Với hai nhánh X,Y phân hoạch, mẫu số là công thức toàn phần của L. Xác suất của nguồn **sau khi thấy L** không tự bằng xác suất thấy L **khi biết nguồn**.
219 | 
220 | **Ví dụ**
221 | 
222 | **Đề bài:** Nguồn A cung cấp 20% sản phẩm và cho dấu hiệu H ở 80% sản phẩm của mình; nguồn B cung cấp 80% còn lại và cho dấu hiệu H ở 10% sản phẩm của mình. Chọn ngẫu nhiên một sản phẩm. Biết sản phẩm có dấu hiệu H, tính xác suất nó đến từ A.
223 | 
224 | **Lời giải:** Gọi \(H\) là biến cố “có dấu hiệu”. Xác suất toàn phần là \(P(H)=0{,}2\cdot0{,}8+0{,}8\cdot0{,}1=0{,}16+0{,}08=0{,}24\). Riêng đường “A và H” có xác suất \(0{,}2\cdot0{,}8=0{,}16\). Do đó \(P(A\mid H)=0{,}16/0{,}24=2/3\). Kết quả khác 80% vì 80% trả lời câu hỏi ngược chiều: “có H khi biết nguồn A”.
225 | 
226 | **Kiến thức cần ghi nhớ**
227 | 
228 | Bayes đảo chiều điều kiện: lấy xác suất đường nguồn–kết quả chia cho xác suất của tất cả đường dẫn tới kết quả đã quan sát.
229 | 
230 | **Vận dụng**
231 | 
232 | Nguồn X chiếm 2/5 sản phẩm, tỉ lệ lỗi 1/10; Y chiếm 3/5, tỉ lệ lỗi 1/5. Biết sản phẩm chọn ra bị lỗi, xác suất nó thuộc Y?
233 | 
234 | <!-- ITEM_ID: THPT-TOP21-T06; ROLE: TOPIC_FIRST_TRY; LEARNER_LABEL: VAN_DUNG; PRIMARY_OUTCOME: TOP21-O06; CONTENT_VERSION: TOP21-R06; PUBLIC_FORMATIVE_NO_MASTERY -->
235 | <details markdown="1"><summary>Đối chiếu</summary>
236 | 
237 | P(Y∩lỗi)=(3/5)(1/5)=3/25; P(X∩lỗi)=(2/5)(1/10)=1/25. P(lỗi)=4/25 nên P(Y|lỗi)=(3/25)/(4/25)=3/4.
238 | 
239 | **Khi làm sai:** Nếu trả lời 1/5, em mới tính xác suất lỗi khi đã biết Y, chưa đảo chiều. Cộng tất cả nhánh lỗi thành mẫu số rồi chia đường Y–lỗi. Ôn lại mục Kiến thức 2.2 (Bayes) và Bài luyện 6 tại Luyện tập 2.2.
240 | 
241 | </details>
242 | 

**Nguồn Bài luyện (dòng 412–428)**

412 | ### 2.2. Bayes: đi từ kết quả quan sát ngược về nguồn
413 | 
414 | **Bài luyện 6.**
415 | 
416 | <!-- ITEM_ID: THPT-TOP21-P06; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP21-O06; CONTENT_VERSION: TOP21-R03; PUBLIC_FORMATIVE_NO_MASTERY -->
417 | Một lô gồm 1/4 sản phẩm từ H, 3/4 từ K. Xác suất mang nhãn xanh là 3/5 nếu từ H, 1/5 nếu từ K. Biết đã thấy nhãn xanh, tính xác suất sản phẩm thuộc H.
418 | 
419 | <details markdown="1"><summary>Lời giải</summary>
420 | 
421 | **Lời giải:** Biết sản phẩm có **nhãn xanh**, ta phải xét tất cả nguồn có thể tạo ra nhãn xanh. Đường “H rồi xanh” có xác suất \(P(H\cap\text{xanh})=(1/4)(3/5)=3/20\). Đường “K rồi xanh” có xác suất \((3/4)(1/5)=3/20\). Xác suất thấy nhãn xanh từ hai nguồn là \(P(\text{xanh})=3/20+3/20=6/20\). Vì vậy xác suất sản phẩm thuộc H **khi đã thấy xanh** là \(P(H\mid\text{xanh})=(3/20)/(6/20)=1/2\). Số \(3/5\) là xác suất xanh khi biết H, tức câu hỏi ngược chiều.
422 | 
423 | **Khi làm sai:** Nếu viết 3/5, em đã đảo câu hỏi. Muốn biết nguồn sau khi thấy nhãn, mẫu số gồm các cách có nhãn xanh từ cả H và K.
424 | 
425 | </details>
426 | 
427 | 
428 | 

### TOP21-O07 — học, tự thử, khắc phục và bài luyện

**Nguồn Kiến thức + D6 (dòng 245–285)**

245 | ### 3.1. Đọc sơ đồ cây: nhân trên đường, cộng tại đích
246 | 
247 | <!-- OUTCOME_ID: TOP21-O07; LEGACY_SGK_SKILL: G12-B19-TREE_MODEL; LESSON_ID: G12-SGK-B19 -->
248 | 
249 | **Khám phá kiến thức**
250 | 
251 | Sơ đồ cây hữu ích nhất khi một quá trình diễn ra qua nhiều lựa chọn nối tiếp: chọn tuyến đường, rồi xét có đến đúng giờ hay không; chọn nguồn hàng, rồi xét hàng lỗi hay tốt. Mỗi nhánh xuất phát từ một nút biểu diễn một khả năng **trong điều kiện đã đi tới nút ấy**. Vì thế, tổng các xác suất rẽ ra từ cùng một nút phải bằng 1.
252 | 
253 | Một đường đi từ gốc đến lá tương ứng với một trường hợp đồng thời, nên ta **nhân các xác suất dọc đường**. Những đường đi kết thúc bằng cùng một kết quả như “đến đúng giờ” là các trường hợp rời nhau, nên ta **cộng xác suất các lá ấy**. Kiểm lại tổng toàn bộ lá bằng 1 giúp phát hiện nhánh bỏ sót hoặc xác suất ghi nhầm. Khi đã quan sát một kết quả, muốn truy ngược nguồn, ta lấy xác suất lá nguồn-kết quả chia cho tổng các lá có kết quả được quan sát.
254 | 
255 | > **PHƯƠNG PHÁP — Ba thao tác đọc cây xác suất**
256 | >
257 | > Tại **mỗi nút**, tổng xác suất các nhánh ra bằng 1. **Nhân dọc** từ gốc đến lá để có xác suất giao; **cộng các lá rời nhau** đưa tới kết quả cần tính; khi đảo điều kiện, **chia lá mục tiêu cho tổng các lá đã quan sát**. Tổng toàn bộ các lá cuối phải bằng 1.
258 | 
259 | **Ví dụ**
260 | 
261 | **Đề bài:** Một hành khách chọn tuyến R với xác suất \(3/5\), chọn tuyến S với xác suất \(2/5\). Nếu chọn R, xác suất đến đúng giờ là \(4/5\); nếu chọn S, xác suất đến đúng giờ là \(1/2\). Hãy tìm xác suất đến đúng giờ và kiểm tra tổng bốn lá trên cây.
262 | 
263 | **Lời giải:** Tại tuyến R, xác suất đến đúng là \((3/5)(4/5)=12/25\), muộn là \((3/5)(1/5)=3/25\). Tại tuyến S, xác suất đúng là \((2/5)(1/2)=1/5\), muộn cũng là \(1/5\). Bốn lá cộng thành \(12/25+3/25+1/5+1/5=1\), nên cây đã bao quát mọi trường hợp. Hai lá đúng giờ rời nhau, vì vậy \(P(\text{đúng giờ})=12/25+1/5=17/25\).
264 | 
265 | ![Sơ đồ cây hai tuyến R, S và xác suất đến đúng giờ hoặc muộn](../../../../docs/assets/images/thpt/FIG-TOP21_ROUTE_TREE_3_5_2_5_R01.svg)
266 | 
267 | **Hướng dẫn đọc hình:** Trước hết đọc xác suất chọn R hoặc S tại gốc. Trên từng tuyến, tổng hai nhánh đúng giờ và muộn bằng 1. Nhân các xác suất **trên cùng một đường**; khi hỏi khả năng đến đúng giờ, cộng hai lá R–đúng và S–đúng. Kiểm tra tổng bốn lá bằng 1.
268 | 
269 | **Kiến thức cần ghi nhớ**
270 | 
271 | Tại mỗi nút, tổng nhánh ra bằng 1; nhân dọc đường, cộng các lá rời nhau dẫn tới cùng kết quả; tổng lá cuối bằng 1.
272 | 
273 | **Vận dụng**
274 | 
275 | Chọn lớp A với xác suất 3/5, trong A tỉ lệ thẻ đỏ là 3/10; lớp B với xác suất 2/5, trong B tỉ lệ đỏ 1/4. Lập bốn lá đỏ/không đỏ và tính P(đỏ).
276 | 
277 | <!-- ITEM_ID: THPT-TOP21-T07; ROLE: TOPIC_FIRST_TRY; LEARNER_LABEL: VAN_DUNG; PRIMARY_OUTCOME: TOP21-O07; CONTENT_VERSION: TOP21-R06; PUBLIC_FORMATIVE_NO_MASTERY -->
278 | <details markdown="1"><summary>Đối chiếu</summary>
279 | 
280 | A-đỏ=9/50, A-không đỏ=21/50; B-đỏ=1/10, B-không đỏ=3/10. Tổng bốn lá bằng 1, P(đỏ)=9/50+1/10=7/25.
281 | 
282 | **Khi làm sai:** Nếu bốn lá không cộng thành 1, hãy rà mỗi nút: đỏ và không đỏ trong A phải có tổng 1; tương tự B. Đừng cộng trực tiếp 3/10 và 1/4. Ôn lại mục Kiến thức 3.1 (đọc sơ đồ cây) và Bài luyện 7 tại Luyện tập 3.1.
283 | 
284 | </details>
285 | 

**Nguồn Bài luyện (dòng 431–447)**

431 | ### 3.1. Đọc sơ đồ cây: nhân trên đường, cộng tại đích
432 | 
433 | **Bài luyện 7.**
434 | 
435 | <!-- ITEM_ID: THPT-TOP21-P07; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP21-O07; CONTENT_VERSION: TOP21-R03; PUBLIC_FORMATIVE_NO_MASTERY -->
436 | Chọn tuyến R xác suất 2/5, xác suất thành công khi đi R là 3/4. Chọn tuyến S xác suất 3/5, xác suất thành công khi đi S là 1/2. Tính P(S và thất bại) và P(thành công).
437 | 
438 | <details markdown="1"><summary>Lời giải</summary>
439 | 
440 | **Lời giải:** Cây có hai nhánh gốc: R xác suất \(2/5\) và S xác suất \(3/5\). Sau khi chọn S, xác suất thất bại là \(1-1/2=1/2\), nên đường **S rồi thất bại** có xác suất \((3/5)(1/2)=3/10\). Muốn tính xác suất thành công, cộng hai lá thành công rời nhau: R thành công \((2/5)(3/4)=3/10\), S thành công \((3/5)(1/2)=3/10\), nên \(P(\text{thành công})=3/5\). Hai lá thất bại còn lại có xác suất R thất bại \(1/10\) và S thất bại \(3/10\); cả bốn lá cộng thành 1.
441 | 
442 | **Khi làm sai:** Nếu ra 1/2 cho S và thất bại, em dùng xác suất thất bại có điều kiện mà quên xác suất chọn S. Đọc từ gốc đến lá.
443 | 
444 | </details>
445 | 
446 | 
447 | 

### TOP21-O08 — học, tự thử, khắc phục và bài luyện

**Nguồn Kiến thức + D6 (dòng 286–318)**

286 | ### 3.2. Tỉ lệ nền và bẫy kết luận từ một dấu hiệu
287 | 
288 | <!-- OUTCOME_ID: TOP21-O08; LEGACY_SGK_SKILL: G12-B19-BASE_RATE_REASONING; LESSON_ID: G12-SGK-B19 -->
289 | 
290 | **Khám phá kiến thức**
291 | 
292 | Một thiết bị nhận biết lỗi có thể phát hiện rất tốt những sản phẩm thực sự lỗi, nhưng kết quả “máy báo lỗi” chưa chắc đồng nghĩa với xác suất hàng lỗi cao. Nếu hàng lỗi rất hiếm, chỉ một tỉ lệ báo nhầm nhỏ trong nhóm hàng tốt đông đảo cũng có thể tạo ra nhiều thông báo lỗi. Để hiểu độ tin cậy **sau khi thấy dấu hiệu**, ta phải tính cả tỉ lệ hàng lỗi ban đầu, gọi là **tỉ lệ nền**.
293 | 
294 | Hãy chia sản phẩm thành hai nguồn: thật sự lỗi \(H\) và không lỗi \(\bar H\). Cả hai nguồn đều có thể đưa đến kết quả báo dấu hiệu \(+\): máy báo đúng từ nhóm \(H\) và báo nhầm từ nhóm \(\bar H\). Xác suất một sản phẩm thật sự lỗi **khi đã bị báo** bằng xác suất đi theo nhánh “lỗi rồi báo” chia cho tổng xác suất của **tất cả** các nhánh dẫn tới báo. Đây là công thức Bayes được nhìn bằng tần suất, không phải một công thức hoàn toàn mới.
295 | 
296 | > **KIẾN THỨC CẦN GHI NHỚ — Vai trò của tỉ lệ nền**
297 | >
298 | > \[P(H\mid +)=\frac{P(H)P(+\mid H)}{P(H)P(+\mid H)+P(\bar H)P(+\mid\bar H)},\qquad P(+)>0.\] Cần biết **tỉ lệ nền**, **khả năng phát hiện khi thực sự H** và **tỉ lệ báo nhầm khi không H**. Không kết luận \(P(H\mid +)=P(+\mid H)\); nếu không có trường hợp được báo thì xác suất điều kiện ấy không xác định bằng công thức này.
299 | 
300 | **Ví dụ**
301 | 
302 | **Đề bài:** Giả sử một lô hàng có 1% sản phẩm lỗi. Thiết bị báo lỗi ở 95% sản phẩm lỗi và báo nhầm ở 10% sản phẩm tốt. Chọn ngẫu nhiên một sản phẩm; biết thiết bị đã báo lỗi. Tính xác suất sản phẩm thực sự lỗi.
303 | 
304 | **Lời giải:** Gọi \(H\) là biến cố “thật sự lỗi”, \(+\) là “thiết bị báo lỗi”. Xác suất “lỗi và báo” là \(0{,}01\cdot0{,}95=0{,}0095\); xác suất “tốt nhưng báo nhầm” là \(0{,}99\cdot0{,}10=0{,}099\). Vì cả hai dẫn tới báo lỗi, \(P(+)=0{,}0095+0{,}099=0{,}1085\). Do đó \(P(H\mid +)=0{,}0095/0{,}1085=19/217\approx8{,}76\%\). Máy phát hiện 95% hàng lỗi không có nghĩa là 95% hàng bị báo là lỗi: nhóm tốt chiếm tới 99% nên số báo nhầm đáng kể. Đây chỉ là mô hình giả định.
305 | 
306 | **Vận dụng**
307 | 
308 | Một hệ thống giả định có 2% hồ sơ thuộc nhóm H. Hệ thống báo dấu hiệu với 90% hồ sơ H và báo nhầm với 15% hồ sơ không H. Biết hồ sơ bị báo, xác suất nó thuộc H?
309 | 
310 | <!-- ITEM_ID: THPT-TOP21-T08; ROLE: TOPIC_FIRST_TRY; LEARNER_LABEL: VAN_DUNG; PRIMARY_OUTCOME: TOP21-O08; CONTENT_VERSION: TOP21-R06; PUBLIC_FORMATIVE_NO_MASTERY -->
311 | <details markdown="1"><summary>Đối chiếu</summary>
312 | 
313 | P(H∩báo)=0,02·0,90=0,018; P(không H∩báo)=0,98·0,15=0,147. Xác suất cần tìm là 0,018/(0,018+0,147)=18/165=6/55≈10,91%.
314 | 
315 | **Khi làm sai:** Nếu ra 90%, em đã nhầm 'báo khi biết H' với 'H khi đã báo'. Hãy lập bảng 10.000 hồ sơ: 200 H có 180 báo; 9.800 không H có 1.470 báo; tỉ lệ 180/(180+1470). Ôn lại mục Kiến thức 3.2 (tỉ lệ nền) và Bài luyện 8 tại Luyện tập 3.2.
316 | 
317 | </details>
318 | 

**Nguồn Bài luyện (dòng 448–465)**

448 | ### 3.2. Tỉ lệ nền và bẫy kết luận từ một dấu hiệu
449 | 
450 | **Bài luyện 8.**
451 | 
452 | <!-- ITEM_ID: THPT-TOP21-P08; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP21-O08; CONTENT_VERSION: TOP21-R03; PUBLIC_FORMATIVE_NO_MASTERY -->
453 | Trong mô hình kiểm tra 1.000 sản phẩm có đúng 20 sản phẩm lỗi. Thiết bị phát hiện 80% sản phẩm lỗi và báo nhầm 5% của 980 sản phẩm tốt. Nếu máy báo lỗi, xác suất sản phẩm thực sự lỗi là bao nhiêu?
454 | 
455 | <details markdown="1"><summary>Lời giải</summary>
456 | 
457 | **Lời giải:** Trong 1.000 sản phẩm, có 20 sản phẩm lỗi và 980 sản phẩm tốt. Máy phát hiện \(80\%\) trong 20 sản phẩm lỗi nên báo đúng \(20\cdot0{,}8=16\) sản phẩm; đồng thời báo nhầm \(5\%\) trong 980 sản phẩm tốt, tức \(980\cdot0{,}05=49\) sản phẩm. Khi máy đã báo lỗi, nhóm đang xét có \(16+49=65\) sản phẩm bị báo, nhưng chỉ 16 thật sự lỗi. Xác suất cần tìm là \(16/65\approx24{,}62\%\). Mẫu số là tổng **mọi trường hợp bị báo**, không phải số sản phẩm thật sự lỗi.
458 | 
459 | **Khi làm sai:** Nếu trả lời 80%, em chỉ nêu khả năng phát hiện khi đồ đã lỗi. Hãy đếm toàn bộ 65 lượt báo, gồm cả 49 lượt báo nhầm.
460 | 
461 | </details>
462 | 
463 | 
464 | **Bài tự luận tổng hợp:** Hãy trình bày lời giải và giải thích ý nghĩa xác suất trước khi tự kiểm rubric.
465 | 

## Ranh giới tiếp nhận

Đây là bản sao trích xuất để phản biện đúng 8 outcome, không phải learner source mới. Source Git blob giữ nguyên. Nếu không đủ dữ liệu S1 để đánh giá, ghi INSUFFICIENT_EVIDENCE; không tự cấp CONTENT_READY hay reviewer PASS. Chỉ sau verdict và đối soát source-lock mới cập nhật Q18/V2/ready/REGISTER trên cùng nhánh AUTHORING.
