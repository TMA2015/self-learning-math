# CĐ18 — Oxyz · Phần B: phương pháp tọa độ SGK G12 ChV B14–B17 · AUTHORING R01

> **Bản thảo học liệu, CHƯA CONTENT_READY.** Phần A gồm 16 outcome của ChII ở tệp riêng; phần B này có 24 outcome ChV và chỉ được coi là ứng viên sau khi kiểm chứng toán theo item, SVG, nguồn SBT B14 in25 còn thiếu, signed Q18 trên *gói CĐ18 đầy đủ*. Không tạo Core Chuyên đề riêng, không coi nguồn SGK cũ là PASS Chuyên đề.

**Từ vị trí đến tập hợp điểm.** Phần A giúp chúng ta nói chính xác một vị trí hay một hướng bằng ba số. Vậy làm sao mô tả *vô số điểm* cùng nằm trên một bức tường, một đường bay hay mặt ngoài của quả cầu? Ta tìm một điều kiện chung thay vì ghi từng điểm. Với bức tường là phương trình mặt phẳng, điều kiện đến từ pháp tuyến; với đường bay là tham số chuyển động; với mặt cầu là khoảng cách cố định tới tâm. Sau đó, các công thức góc và khoảng cách đều trở về kiểm tra hướng và độ dài những vectơ đã hiểu.

**Thói quen xuyên suốt:** Khi viết bất kỳ phương trình nào, em cần kiểm hai điều: *vectơ pháp tuyến/chỉ phương có khác không?* và *điểm được dùng có thực sự thuộc hình không?* Với bài có phép chia, hãy nêu rõ mẫu khác không. Khi gặp trường hợp đặc biệt, giải thích bằng hình học trước khi thay công thức.

<!-- AUTHOR_ONLY_S1: G12 ChV B14–B17 locked SGK original Git blob 11eb2834cfdb4a24685157f84666c2bb0767970a, G12 ChII B06–B08 original Git blob 856a37bd16d2746ffc2e12906de18d1f4338a3b6, crosswalk source 7cba588cfe60d3675df99d8aa7e4b9275da9690e; B14 SBT printed p25 missing in original scan: SOURCE_GAP_HOLD exact exercises5.6/5.7 pending. No independent Topic review. -->
<!-- AUTHOR_ONLY_NOTEBOOK_EDITORIAL: accessible old NotebookLM Topic09 DRAFT_NOT_REVIEWED, source-informed narrative only, rejected missing B08 and B17, reject SOURCE_PENDING as actual S1. Issue #851 Q09–Q14. -->

## 1. Kiến thức — Phần B: bức tường, đường bay, góc và mặt cầu

### Chặng B1 — Mặt phẳng: một điểm và một phương vuông góc

#### 17. Vectơ pháp tuyến từ hai vectơ chỉ phương 

<!-- LESSON_ID: TOP18-M17; OUTCOME_ID: TOP18-O17; S1_ORIGINAL_OUTCOME: G12-CHV-B14-O01; SCOPE: G12_CHV -->

**Hình thành ý nghĩa.** Một mặt phẳng có vô số hướng nằm trong nó; một vectơ pháp tuyến n khác 0 phải vuông góc với mọi hướng đó. Nếu đã biết hai vectơ chỉ phương u,v **không cùng phương**, tích có hướng u×v là một cách dựng n. Tích có hướng bằng 0 khi u,v cùng phương, khi ấy chưa xác định được pháp tuyến mặt bằng cặp vectơ ấy.

**Ví dụ suy luận từng bước.** u=(1,0,1), v=(0,1,1) độc lập. Theo công thức tích có hướng, n=u×v=(−1,−1,1). Kiểm n·u=−1+1=0 và n·v=−1+1=0; vì n≠0, có thể dùng n làm pháp tuyến.

**Tự thử trước lời giải.** u=(1,0,0),v=(0,1,0) có pháp tuyến đơn giản nào?

<!-- ITEM_ID: THPT-TOP18-T17; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O17 -->

<details><summary>Tự mở đối chiếu</summary>

n=(0,0,1), vì vuông góc cả u lẫn v.

**D6 — Khi chưa đúng:** Nếu tích có hướng 0, phải kiểm hai hướng có cùng phương hay không; không dùng vectơ 0 làm pháp tuyến.

</details>

#### 18. Viết phương trình qua một điểm và một pháp tuyến 

<!-- LESSON_ID: TOP18-M18; OUTCOME_ID: TOP18-O18; S1_ORIGINAL_OUTCOME: G12-CHV-B14-O02; SCOPE: G12_CHV -->

**Hình thành ý nghĩa.** Một mặt phẳng là tập các điểm M có độ dời từ điểm M0 nằm vuông góc với một pháp tuyến n khác 0. Điều kiện n·M0M=0 dẫn đến A(x−x0)+B(y−y0)+C(z−z0)=0. Vì vậy cần một điểm đi qua và một hướng pháp tuyến, không thể chỉ biết n để xác định vị trí duy nhất.

**Ví dụ suy luận từng bước.** M0=(1,0,−1),n=(2,−1,3). Thay vào 2(x−1)−(y−0)+3(z+1)=0, thu 2x−y+3z+1=0. Thử điểm M0: 2−3+1=0.

**Tự thử trước lời giải.** M0=(0,0,2), n=(0,0,1). Viết mặt phẳng.

<!-- ITEM_ID: THPT-TOP18-T18; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O18 -->

<details><summary>Tự mở đối chiếu</summary>

z−2=0, tức z=2.

**D6 — Khi chưa đúng:** Không để pháp tuyến n=0; thay tọa độ điểm đã cho vào phương trình để phát hiện lỗi dấu.

</details>

#### 19. Mặt phẳng qua ba điểm không thẳng hàng 

<!-- LESSON_ID: TOP18-M19; OUTCOME_ID: TOP18-O19; S1_ORIGINAL_OUTCOME: G12-CHV-B14-O03; SCOPE: G12_CHV -->

**Hình thành ý nghĩa.** Ba điểm phân biệt chưa đủ xác định một mặt: chúng phải **không thẳng hàng**. Lấy AB và AC không cùng phương, dựng n=AB×AC rồi áp dụng phương trình mặt qua A. Nếu ba điểm thẳng hàng, tích có hướng bằng 0 và tồn tại vô số mặt phẳng qua đường đó.

**Ví dụ suy luận từng bước.** A=(1,0,0), B=(0,1,0), C=(0,0,1) cho AB=(−1,1,0), AC=(−1,0,1). Một n=(1,1,1) vuông cả hai; mặt phẳng qua A là x+y+z−1=0.

**Tự thử trước lời giải.** Ba giao điểm trục A=(2,0,0),B=(0,2,0),C=(0,0,2). Mặt phẳng?

<!-- ITEM_ID: THPT-TOP18-T19; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O19 -->

<details><summary>Tự mở đối chiếu</summary>

x+y+z=2. Ba điểm không thẳng hàng.

**D6 — Khi chưa đúng:** Kiểm AB,AC có cùng phương không trước khi dựng n, và thay đủ ba điểm vào đáp án.

</details>

#### 20. Mặt phẳng chứa hai hướng hoặc một trục 

<!-- LESSON_ID: TOP18-M20; OUTCOME_ID: TOP18-O20; S1_ORIGINAL_OUTCOME: G12-CHV-B14-O04; SCOPE: G12_CHV -->

**Hình thành ý nghĩa.** Khi mặt phẳng chứa một đường hoặc trục, mọi vectơ chỉ phương của đường ấy phải vuông góc với pháp tuyến của mặt. Nếu mặt chứa Ox và điểm P ngoài Ox, dùng e1=(1,0,0) và OP làm hai hướng độc lập. Điều kiện 'chứa trục' mạnh hơn 'song song trục' vì mặt còn phải đi qua mọi điểm trên trục.

**Ví dụ suy luận từng bước.** Mặt chứa Ox và P=(0,1,1). Hai hướng e1=(1,0,0), OP=(0,1,1) nên một pháp tuyến n=(0,−1,1); mặt qua O là y−z=0.

**Tự thử trước lời giải.** Mặt chứa trục Oz và điểm (1,1,0). Tìm phương trình đơn giản.

<!-- ITEM_ID: THPT-TOP18-T20; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O20 -->

<details><summary>Tự mở đối chiếu</summary>

x−y=0, vì mọi điểm Oz có x=y=0 và điểm thêm cũng thỏa.

**D6 — Khi chưa đúng:** Không bỏ điều kiện chứa điểm/đường; một mặt chỉ có pháp tuyến đúng nhưng lệch vị trí vẫn sai.

</details>

#### 21. Quan hệ song song và vuông góc giữa hai mặt phẳng 

<!-- LESSON_ID: TOP18-M21; OUTCOME_ID: TOP18-O21; S1_ORIGINAL_OUTCOME: G12-CHV-B14-O05; SCOPE: G12_CHV -->

**Hình thành ý nghĩa.** Hai mặt có pháp tuyến tỉ lệ có cùng phương, nhưng có thể **trùng nhau** hoặc **song song phân biệt**; phải kiểm thêm hằng số hoặc một điểm. Hai mặt vuông góc khi hai pháp tuyến khác không có tích vô hướng bằng 0. Góc giữa mặt là góc nhỏ, không phụ thuộc dấu chọn của pháp tuyến.

**Ví dụ suy luận từng bước.** P:x+2y−z=0 và Q:2x+4y−2z+3=0 có pháp tuyến tỉ lệ nhưng không trùng vì các hệ số cả phương trình không tỉ lệ; chúng song song phân biệt.

**Tự thử trước lời giải.** P:x+y+z=1, Q:2x+2y+2z=2. Hai mặt trùng hay song song phân biệt?

<!-- ITEM_ID: THPT-TOP18-T21; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O21 -->

<details><summary>Tự mở đối chiếu</summary>

Trùng nhau do chia phương trình Q cho 2 thu đúng P.

**D6 — Khi chưa đúng:** Nếu n1∥n2, kiểm tỉ lệ cả hệ số tự do trước khi nói 'hai mặt song song phân biệt'.

</details>

#### 22. Khoảng cách từ điểm đến mặt phẳng 

<!-- LESSON_ID: TOP18-M22; OUTCOME_ID: TOP18-O22; S1_ORIGINAL_OUTCOME: G12-CHV-B14-O06; SCOPE: G12_CHV -->

**Hình thành ý nghĩa.** Khoảng cách từ điểm M đến mặt P là độ dài đường vuông góc ngắn nhất, không phải khoảng cách đến một điểm tùy ý của P. Với P:Ax+By+Cz+D=0 có n=(A,B,C) khác không, lấy trị tuyệt đối của vế trái tại M và chia độ dài pháp tuyến √(A²+B²+C²).

**Ví dụ suy luận từng bước.** M=O, P:x+2y+2z−6=0 có độ dài n=3, trị tuyệt đối −6 là 6, nên d=6/3=2.

**Tự thử trước lời giải.** Khoảng cách từ O đến mặt z=−5?

<!-- ITEM_ID: THPT-TOP18-T22; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O22 -->

<details><summary>Tự mở đối chiếu</summary>

5 đơn vị, bởi pháp tuyến (0,0,1), độ chênh z là 5.

**D6 — Khi chưa đúng:** Đừng quên trị tuyệt đối và chuẩn hóa pháp tuyến; đáp án khoảng cách phải không âm.

</details>

### Chặng B2 — Đường thẳng: điểm xuất phát và hướng chuyển động

#### 24. Vectơ chỉ phương và phương trình tham số đường thẳng 

<!-- LESSON_ID: TOP18-M24; OUTCOME_ID: TOP18-O24; S1_ORIGINAL_OUTCOME: G12-CHV-B15-O01; SCOPE: G12_CHV -->

**Hình thành ý nghĩa.** Một đường thẳng vô hạn được mô tả bằng một điểm M0 nó đi qua và một vectơ chỉ phương u khác không. Mọi điểm trên đường có M=M0+t u với t thực. Ba tọa độ phải dùng **cùng một tham số t**; nếu mỗi tọa độ có một t khác, đó không còn là phương trình một đường cụ thể.

**Ví dụ suy luận từng bước.** M0=(1,2,3),u=(2,−1,0): x=1+2t,y=2−t,z=3. Độ cao không đổi vì thành phần chỉ phương z bằng 0.

**Tự thử trước lời giải.** Đường qua O hướng u=(1,0,2). Viết dạng tham số.

<!-- ITEM_ID: THPT-TOP18-T24; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O24 -->

<details><summary>Tự mở đối chiếu</summary>

x=t, y=0, z=2t, t∈R.

**D6 — Khi chưa đúng:** Nếu thành phần hướng bằng 0, tọa độ tương ứng là hằng, không tùy tiện bỏ phương trình đó.

</details>

#### 25. Đường thẳng qua hai điểm phân biệt 

<!-- LESSON_ID: TOP18-M25; OUTCOME_ID: TOP18-O25; S1_ORIGINAL_OUTCOME: G12-CHV-B15-O02; SCOPE: G12_CHV -->

**Hình thành ý nghĩa.** Hai điểm phân biệt A,B xác định một đường và cho vectơ chỉ phương AB=B−A khác 0. Lấy A làm điểm t=0; không cần pháp tuyến như phương trình mặt. Nếu A=B, không có hướng AB khác không để xác định duy nhất một đường.

**Ví dụ suy luận từng bước.** A=(0,1,2),B=(2,3,2), AB=(2,2,0); đường AB có x=2t,y=1+2t,z=2. Thay t=1 cho B, nên phương trình phù hợp.

**Tự thử trước lời giải.** Đường qua A=(0,0,0), B=(1,2,3) có một dạng tham số?

<!-- ITEM_ID: THPT-TOP18-T25; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O25 -->

<details><summary>Tự mở đối chiếu</summary>

x=t,y=2t,z=3t.

**D6 — Khi chưa đúng:** Nhớ A≠B, lấy đúng B−A và thử lại tọa độ cả hai điểm.

</details>

#### 26. Phương trình chính tắc và tọa độ hướng bằng 0 

<!-- LESSON_ID: TOP18-M26; OUTCOME_ID: TOP18-O26; S1_ORIGINAL_OUTCOME: G12-CHV-B15-O03; SCOPE: G12_CHV -->

**Hình thành ý nghĩa.** Phương trình chính tắc của đường thẳng cần cẩn thận khi một thành phần vectơ chỉ phương bằng 0. Chỉ những tỉ số có mẫu khác 0 mới xuất hiện; thành phần bằng 0 thành phương trình tọa độ cố định. Không bao giờ viết phép chia cho 0.

**Ví dụ suy luận từng bước.** x=1+2t,y=3,z=4−t. Với thành phần y=0 của hướng, giữ y=3 và viết (x−1)/2=(z−4)/(−1).

**Tự thử trước lời giải.** Đường x=2+t,y=−1,z=3+2t. Dạng chính tắc an toàn?

<!-- ITEM_ID: THPT-TOP18-T26; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O26 -->

<details><summary>Tự mở đối chiếu</summary>

(x−2)/1=(z−3)/2; y=−1.

**D6 — Khi chưa đúng:** D6: nhận từng thành phần hướng bằng 0 rồi giữ phương trình hằng; tỉ số có mẫu 0 là vô nghĩa.

</details>

#### 27. Kiểm điểm thuộc đường thẳng bằng một tham số 

<!-- LESSON_ID: TOP18-M27; OUTCOME_ID: TOP18-O27; S1_ORIGINAL_OUTCOME: G12-CHV-B15-O04; SCOPE: G12_CHV -->

**Hình thành ý nghĩa.** Kiểm tra điểm M thuộc đường bằng cách tìm **một** giá trị t đồng thời thỏa cả ba phương trình tham số. Nếu tọa độ x cho t1 nhưng y cho t2 khác, điểm không thuộc đường, dù hai tọa độ trông khớp.

**Ví dụ suy luận từng bước.** Đường x=1+t,y=2−2t,z=t. M=(3,−2,2) cho t=2 theo x; y=2−4=−2 và z=2 đều đúng nên M thuộc đường.

**Tự thử trước lời giải.** Điểm N=(0,2,0) có thuộc d: x=t,y=2−t,z=0 không?

<!-- ITEM_ID: THPT-TOP18-T27; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O27 -->

<details><summary>Tự mở đối chiếu</summary>

Có, chọn t=0 thỏa cả ba.

**D6 — Khi chưa đúng:** Không dùng ba tham số khác nhau cho ba tọa độ; kiểm tất cả với một t chung.

</details>

#### 28. Quan hệ hướng giữa hai đường thẳng 

<!-- LESSON_ID: TOP18-M28; OUTCOME_ID: TOP18-O28; S1_ORIGINAL_OUTCOME: G12-CHV-B15-O05; SCOPE: G12_CHV -->

**Hình thành ý nghĩa.** Hai đường có vectơ chỉ phương cùng phương có thể song song phân biệt hoặc trùng nhau; vị trí quyết định bằng một điểm của đường này có thuộc đường kia không. Khi hai hướng khác phương, chúng hoặc cắt nhau hoặc chéo nhau; phải kiểm nghiệm hệ tham số tiếp.

**Ví dụ suy luận từng bước.** u=(1,2,0) và v=(2,4,0) cùng phương. Nếu cả hai qua O thì trùng; nếu đường thứ hai qua (0,0,1) thì chúng song song phân biệt.

**Tự thử trước lời giải.** Hai đường qua A=(0,0,0) và B=(0,0,1), cùng hướng (1,0,0). Quan hệ?

<!-- ITEM_ID: THPT-TOP18-T28; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O28 -->

<details><summary>Tự mở đối chiếu</summary>

Song song phân biệt; A không thuộc đường qua B vì z khác.

**D6 — Khi chưa đúng:** Khi đã có hướng tỉ lệ, đừng kết luận song song phân biệt trước khi kiểm một điểm.

</details>

#### 29. Hai đường thẳng cắt nhau, song song, trùng hoặc chéo nhau 

<!-- LESSON_ID: TOP18-M29; OUTCOME_ID: TOP18-O29; S1_ORIGINAL_OUTCOME: G12-CHV-B15-O06; SCOPE: G12_CHV -->

**Hình thành ý nghĩa.** Trong không gian, hai đường không cùng phương **chưa chắc cắt**: chúng còn có thể chéo nhau. Đặt phương trình tham số hai đường d1(t),d2(s), giải hệ ba tọa độ với chỉ hai ẩn t,s; nếu hệ vô nghiệm và hướng không song song, đó là hai đường chéo nhau.

**Ví dụ suy luận từng bước.** d1(t)=(t,0,0) và d2(s)=(0,s,1). Nếu cắt, tọa độ z phải đồng thời 0 và 1, bất khả; hai hướng (1,0,0),(0,1,0) khác phương nên chéo nhau.

**Tự thử trước lời giải.** d1(t)=(t,0,0),d2(s)=(0,s,0). Chúng cắt tại đâu?

<!-- ITEM_ID: THPT-TOP18-T29; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O29 -->

<details><summary>Tự mở đối chiếu</summary>

Tại O=(0,0,0) với t=s=0.

**D6 — Khi chưa đúng:** D6: giải đủ ba tọa độ; hình chiếu lên giấy giao nhau không chứng minh hai đường trong không gian cắt nhau.

</details>

#### 30. Giao của đường thẳng với mặt phẳng 

<!-- LESSON_ID: TOP18-M30; OUTCOME_ID: TOP18-O30; S1_ORIGINAL_OUTCOME: G12-CHV-B15-O07; SCOPE: G12_CHV -->

**Hình thành ý nghĩa.** Giao điểm của đường với mặt tìm bằng thay M(t)=M0+t u vào Ax+By+Cz+D=0. Nếu hệ số t là n·u khác 0 thì có một giao điểm; nếu n·u=0, kiểm hằng số: bằng 0 thì đường nằm trong mặt, khác 0 thì song song phân biệt.

**Ví dụ suy luận từng bước.** d(t)=(1+t,0,2−t), P:x=0. Thay x=1+t=0 suy t=−1, điểm giao (0,0,3). Với Q:x+z=4, vế trái luôn 3 nên đường song song Q nhưng không nằm trong Q.

**Tự thử trước lời giải.** d(t)=(t,1,2), P:z=2. Quan hệ?

<!-- ITEM_ID: THPT-TOP18-T30; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O30 -->

<details><summary>Tự mở đối chiếu</summary>

Đường nằm trong P vì mọi t đều z=2.

**D6 — Khi chưa đúng:** Khi n·u=0, không chia cho 0; so sánh hằng số để phân biệt nằm trong/sóng song.

</details>

### Chặng B3 — Góc và quan hệ vị trí: kiểm hướng trước, tính sau

#### 31. Góc giữa hai đường thẳng bằng vectơ chỉ phương 

<!-- LESSON_ID: TOP18-M31; OUTCOME_ID: TOP18-O31; S1_ORIGINAL_OUTCOME: G12-CHV-B16-O01; SCOPE: G12_CHV -->

**Hình thành ý nghĩa.** Góc giữa hai đường thẳng không định hướng được lấy là góc nhỏ 0°–90°. Nếu u,v là hai vectơ chỉ phương khác 0 thì cosθ=|u·v|/(|u||v|). Trị tuyệt đối cần thiết: đảo hướng vectơ không đổi góc hai đường.

**Ví dụ suy luận từng bước.** u=(1,0,0),v=(1,1,0), tích 1 và độ dài 1,√2, nên cosθ=1/√2 ⇒ 45°.

**Tự thử trước lời giải.** u=(1,0,0),v=(−1,0,0), góc giữa hai đường?

<!-- ITEM_ID: THPT-TOP18-T31; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O31 -->

<details><summary>Tự mở đối chiếu</summary>

0°, không phải 180°, vì hai phương cùng đường dù mũi tên ngược.

**D6 — Khi chưa đúng:** Nếu ra góc tù từ cos âm, nhớ góc giữa **đường** lấy giá trị không tù bằng trị tuyệt đối.

</details>

#### 32. Góc giữa đường thẳng và mặt phẳng 

<!-- LESSON_ID: TOP18-M32; OUTCOME_ID: TOP18-O32; S1_ORIGINAL_OUTCOME: G12-CHV-B16-O02; SCOPE: G12_CHV -->

**Hình thành ý nghĩa.** Góc θ giữa đường d và mặt P là góc giữa đường và hình chiếu vuông góc của nó, thuộc 0°–90°. Với vectơ chỉ phương u≠0, pháp tuyến n≠0, sinθ=|u·n|/(|u||n|). Đây là góc phụ của góc nhọn giữa u và n, không dùng cos trực tiếp để gọi góc đường–mặt.

**Ví dụ suy luận từng bước.** u=(1,0,1),n=(0,0,1), sinθ=1/√2 ⇒ θ=45°. Nếu u·n=0, θ=0 (đường song song hoặc nằm trong mặt).

**Tự thử trước lời giải.** Đường có hướng (0,0,1), mặt z=0. Góc đường–mặt?

<!-- ITEM_ID: THPT-TOP18-T32; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O32 -->

<details><summary>Tự mở đối chiếu</summary>

90° vì hướng đường trùng pháp tuyến.

**D6 — Khi chưa đúng:** Không nhầm góc pháp tuyến–đường với góc đường–mặt; trường hợp suy biến hình chiếu khi θ=90° vẫn xác định góc 90°.

</details>

#### 33. Góc giữa hai mặt phẳng 

<!-- LESSON_ID: TOP18-M33; OUTCOME_ID: TOP18-O33; S1_ORIGINAL_OUTCOME: G12-CHV-B16-O03; SCOPE: G12_CHV -->

**Hình thành ý nghĩa.** Góc nhỏ giữa hai mặt P,Q phụ thuộc pháp tuyến n1,n2 khác 0; cosθ=|n1·n2|/(|n1||n2|). Khi pháp tuyến vuông góc, hai mặt vuông góc; khi pháp tuyến cùng phương, hai mặt song song hoặc trùng và góc 0. Đừng lấy góc nhị diện tù làm góc giữa hai mặt.

**Ví dụ suy luận từng bước.** n1=(1,0,0),n2=(1,1,0), cosθ=1/√2 ⇒ θ=45°. Thay n2 bằng (−1,−1,0), kết quả vẫn 45° vì trị tuyệt đối.

**Tự thử trước lời giải.** Hai mặt P:x=0,Q:y=0 có góc bao nhiêu?

<!-- ITEM_ID: THPT-TOP18-T33; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O33 -->

<details><summary>Tự mở đối chiếu</summary>

90°, vì nP=(1,0,0),nQ=(0,1,0) vuông góc.

**D6 — Khi chưa đúng:** Kiểm chọn n≠0; nhớ góc giữa hai mặt là góc nhỏ, không lệ thuộc hướng n.

</details>

#### 34. Phân biệt song song và vuông góc trong các cặp hình 

<!-- LESSON_ID: TOP18-M34; OUTCOME_ID: TOP18-O34; S1_ORIGINAL_OUTCOME: G12-CHV-B16-O04; SCOPE: G12_CHV -->

**Hình thành ý nghĩa.** Cùng chữ 'song song' và 'vuông góc' nhưng các cặp đối tượng cần điều kiện khác nhau. Đường–mặt: n·u=0 chỉ khẳng định hướng song song mặt, còn phải thử điểm để phân biệt đường nằm trong mặt hay song song phân biệt. Mặt–mặt: n1,n2 cùng phương, cũng phải so hệ số tự do để loại trùng.

**Ví dụ suy luận từng bước.** Mặt z=0 và đường d(t)=(t,1,2) có u=(1,0,0), n=(0,0,1), u·n=0; vì z=2 mọi t nên đường song song phân biệt, không nằm trong mặt.

**Tự thử trước lời giải.** Đường d(t)=(t,0,0), mặt z=0. Quan hệ?

<!-- ITEM_ID: THPT-TOP18-T34; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O34 -->

<details><summary>Tự mở đối chiếu</summary>

Đường nằm trong mặt vì z=0 với mọi t.

**D6 — Khi chưa đúng:** Một đẳng thức hướng không quyết định vị trí; kiểm điểm/đường thuộc nhau.

</details>

#### 35. Ứng dụng độ dốc và độ nghiêng trong thực tế 

<!-- LESSON_ID: TOP18-M35; OUTCOME_ID: TOP18-O35; S1_ORIGINAL_OUTCOME: G12-CHV-B16-O05; SCOPE: G12_CHV -->

**Hình thành ý nghĩa.** Trong thiết kế đường dốc hoặc băng chuyền, độ nghiêng đối với nền ngang là góc đường–mặt, được tính từ tỉ số **độ tăng cao / chiều dài dốc** khi dùng sin, hoặc **độ tăng cao / quãng ngang** khi dùng tan. Hai tỉ số không giống nhau, và đơn vị chiều dài phải thống nhất.

**Ví dụ suy luận từng bước.** Đường dốc nâng cao 5 m trên quãng ngang 12 m thì chiều dài dốc 13 m theo Pitago; sinθ=5/13, tanθ=5/12. Không lấy θ sao cho sinθ=5/12.

**Tự thử trước lời giải.** Một dốc cao 3 m trên nền ngang 4 m, chiều dài dốc 5 m. sinθ?

<!-- ITEM_ID: THPT-TOP18-T35; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O35 -->

<details><summary>Tự mở đối chiếu</summary>

3/5, còn tanθ=3/4.

**D6 — Khi chưa đúng:** Phân biệt quãng ngang và chiều dài đường xiên; nếu có thể hãy kiểm bằng tam giác vuông.

</details>

### Chặng B4 — Mặt cầu: tất cả điểm cách một tâm cùng một khoảng

#### 36. Phương trình mặt cầu tâm và bán kính 

<!-- LESSON_ID: TOP18-M36; OUTCOME_ID: TOP18-O36; S1_ORIGINAL_OUTCOME: G12-CHV-B17-O01; SCOPE: G12_CHV -->

**Hình thành ý nghĩa.** Mặt cầu tâm C bán kính R>0 gồm các điểm M có CM=R. Bình phương khoảng cách giúp viết phương trình (x−a)²+(y−b)²+(z−c)²=R², không phải một mặt phẳng vì có các số hạng bậc hai.

**Ví dụ suy luận từng bước.** Tâm C=(1,−2,3), R=4 cho (x−1)²+(y+2)²+(z−3)²=16. Kiểm M=(5,−2,3) thỏa.

**Tự thử trước lời giải.** Mặt cầu tâm O bán kính 5 có phương trình nào?

<!-- ITEM_ID: THPT-TOP18-T36; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O36 -->

<details><summary>Tự mở đối chiếu</summary>

x²+y²+z²=25.

**D6 — Khi chưa đúng:** Bán kính phải dương; phương trình không có điểm nếu tổng bình phương bằng số âm.

</details>

#### 37. Đưa phương trình tổng quát về tâm và bán kính 

<!-- LESSON_ID: TOP18-M37; OUTCOME_ID: TOP18-O37; S1_ORIGINAL_OUTCOME: G12-CHV-B17-O02; SCOPE: G12_CHV -->

**Hình thành ý nghĩa.** Từ phương trình x²+y²+z²+Dx+Ey+Fz+G=0, hoàn thành bình phương từng biến để tìm tâm (−D/2,−E/2,−F/2) và R²=(D²+E²+F²)/4−G. Chỉ có mặt cầu thực bán kính dương nếu R²>0; R²=0 chỉ cho một điểm.

**Ví dụ suy luận từng bước.** x²+y²+z²−2x+4y−6z+5=0 thành (x−1)²+(y+2)²+(z−3)²=9, nên tâm (1,−2,3), R=3.

**Tự thử trước lời giải.** x²+y²+z²−4x=0 có tâm, bán kính?

<!-- ITEM_ID: THPT-TOP18-T37; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O37 -->

<details><summary>Tự mở đối chiếu</summary>

(2,0,0), R=2 vì (x−2)²+y²+z²=4.

**D6 — Khi chưa đúng:** Không quên chuyển hằng số khi hoàn bình phương; tính R² trước khi lấy căn, kiểm >0.

</details>

#### 38. Điểm nằm trong, trên hay ngoài mặt cầu 

<!-- LESSON_ID: TOP18-M38; OUTCOME_ID: TOP18-O38; S1_ORIGINAL_OUTCOME: G12-CHV-B17-O03; SCOPE: G12_CHV -->

**Hình thành ý nghĩa.** Muốn biết điểm nằm trong/trên/ngoài mặt cầu, so CM² với R² thay vì bấm căn. Nếu nhỏ hơn là nằm trong, bằng là trên, lớn hơn là ngoài. Điều này là bài kiểm tra vị trí tương đối, không tự cho biết điểm có 'phía trước' trên hình phối cảnh.

**Ví dụ suy luận từng bước.** Mặt cầu tâm O, R=5; M=(3,4,0) có CM²=9+16=25 nên nằm trên. N=(1,1,1) có CM²=3<25 nên nằm trong.

**Tự thử trước lời giải.** Với mặt cầu tâm O R=3, điểm (0,0,4) ở đâu?

<!-- ITEM_ID: THPT-TOP18-T38; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O38 -->

<details><summary>Tự mở đối chiếu</summary>

Ngoài mặt vì khoảng cách bình phương 16>9.

**D6 — Khi chưa đúng:** So bình phương khoảng cách và bán kính; nếu nhầm tâm, thay hệ tọa độ dịch chuyển M−C.

</details>

#### 39. Mặt cầu có đường kính cho bởi hai điểm 

<!-- LESSON_ID: TOP18-M39; OUTCOME_ID: TOP18-O39; S1_ORIGINAL_OUTCOME: G12-CHV-B17-O04; SCOPE: G12_CHV -->

**Hình thành ý nghĩa.** Nếu hai điểm A,B là hai đầu đường kính của mặt cầu, tâm C là trung điểm AB, bán kính R=AB/2. Không nhầm độ dài đường kính với bán kính; tính trung điểm và độ dài phải theo ba tọa độ.

**Ví dụ suy luận từng bước.** A=(0,0,0),B=(2,4,0) cho C=(1,2,0), AB=√20=2√5, R=√5; phương trình (x−1)²+(y−2)²+z²=5.

**Tự thử trước lời giải.** A=(−2,0,0),B=(2,0,0). Viết phương trình mặt cầu đường kính AB.

<!-- ITEM_ID: THPT-TOP18-T39; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O39 -->

<details><summary>Tự mở đối chiếu</summary>

Tâm O và bán kính 2 nên x²+y²+z²=4.

**D6 — Khi chưa đúng:** Tính trung điểm trước; đường kính là AB, bán kính nửa AB, không dùng AB trực tiếp làm R.

</details>

#### 40. Tiếp xúc mặt cầu với mặt phẳng và thiết diện 

<!-- LESSON_ID: TOP18-M40; OUTCOME_ID: TOP18-O40; S1_ORIGINAL_OUTCOME: G12-CHV-B17-O05; SCOPE: G12_CHV -->

**Hình thành ý nghĩa.** Giao của mặt cầu bán kính R với mặt phẳng phụ thuộc khoảng cách d từ tâm đến mặt: d>R không có giao, d=R tiếp xúc một điểm, d<R cắt theo đường tròn bán kính √(R²−d²). Tâm đường tròn là chân vuông góc từ tâm mặt cầu đến mặt phẳng.

**Ví dụ suy luận từng bước.** Mặt cầu tâm O R=5 với mặt z=3 có d=3 và thiết diện bán kính 4. Với mặt z=5 là tiếp xúc ở (0,0,5).

**Tự thử trước lời giải.** Mặt cầu tâm O R=5, mặt z=6 có giao không?

<!-- ITEM_ID: THPT-TOP18-T40; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O40 -->

<details><summary>Tự mở đối chiếu</summary>

Không, vì khoảng cách tâm–mặt d=6>R.

**D6 — Khi chưa đúng:** Đầu tiên tính khoảng cách tâm–mặt chuẩn; không lấy trực tiếp số D của phương trình làm d nếu pháp tuyến chưa chuẩn hóa.

</details>

### Chặng B5 — Vận dụng tích hợp sau B17 (tùy chọn, không thuộc Core B14)

#### 23. Ứng dụng mặt phẳng: mặt cắt và khoảng cách thực tiễn (tự chọn sau B17)

<!-- LESSON_ID: TOP18-M23; OUTCOME_ID: TOP18-O23; S1_ORIGINAL_OUTCOME: G12-CHV-B14-O07; SCOPE: OPTIONAL_AFTER_B17 -->

**Hình thành ý nghĩa.** **Mở rộng tích hợp sau B17, không dùng để kiểm tra Core B14 trước khi học mặt cầu.** Khi cắt mặt cầu bằng mặt phẳng, chỉ cần so khoảng cách d từ tâm C đến mặt phẳng với bán kính R: d>R không cắt, d=R tiếp xúc, d<R cho đường tròn bán kính √(R²−d²). Đây là ứng dụng nối hình học mặt phẳng và hình học mặt cầu, không phải định lí mới thay SGK B14.

**Ví dụ suy luận từng bước.** Mặt cầu tâm O bán kính 5, mặt z=3. Khoảng cách tâm đến mặt d=3<R; thiết diện có bán kính √(25−9)=4. Hình tròn thiết diện không phải hình tròn lớn bán kính 5.

**Tự thử trước lời giải.** Mặt cầu tâm O R=4, mặt z=4 cắt theo hình gì?

<!-- ITEM_ID: THPT-TOP18-T23; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O23 -->

<details><summary>Tự mở đối chiếu</summary>

Tiếp xúc một điểm (0,0,4), vì d=R.

**D6 — Khi chưa đúng:** Cần học khái niệm mặt cầu B17 trước; không cho O23 làm outcome Core bắt buộc của B14 hay SGK-ChII.

</details>

## 2. Luyện tập — Phần B (suy luận trước phép tính)

Trước mỗi bài, viết một dòng về đối tượng cần dựng và điều kiện để dùng công thức. Giải xong nên kiểm ngược bằng thế tọa độ/điều kiện. Đối chiếu tự mở không phải đánh giá chính thức.

### Luyện tập 17 · Vectơ pháp tuyến từ hai vectơ chỉ phương

<!-- ITEM_ID: THPT-TOP18-P17; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O17 -->

u=(1,1,0),v=(0,1,1). Tìm một pháp tuyến khác không bằng tích có hướng.

<details><summary>Tự mở lời giải và đối chiếu</summary>

u×v=(1,−1,1). Kiểm n·u=1−1=0, n·v=−1+1=0. Hai vectơ đã cho độc lập nên n≠0.

**Đường khắc phục D6:** Nếu tích có hướng 0, phải kiểm hai hướng có cùng phương hay không; không dùng vectơ 0 làm pháp tuyến.

</details>

### Luyện tập 18 · Viết phương trình qua một điểm và một pháp tuyến

<!-- ITEM_ID: THPT-TOP18-P18; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O18 -->

M0=(−1,2,0), n=(1,2,−1). Viết phương trình mặt phẳng và thử lại M0.

<details><summary>Tự mở lời giải và đối chiếu</summary>

(x+1)+2(y−2)−z=0, suy x+2y−z−3=0. Thay (−1,2,0) được −1+4−3=0.

**Đường khắc phục D6:** Không để pháp tuyến n=0; thay tọa độ điểm đã cho vào phương trình để phát hiện lỗi dấu.

</details>

### Luyện tập 19 · Mặt phẳng qua ba điểm không thẳng hàng

<!-- ITEM_ID: THPT-TOP18-P19; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O19 -->

Lập mặt phẳng qua A=(0,0,0),B=(1,0,1),C=(0,1,1).

<details><summary>Tự mở lời giải và đối chiếu</summary>

AB=(1,0,1),AC=(0,1,1), n=(−1,−1,1) nên mặt phẳng −x−y+z=0, hoặc z=x+y.

**Đường khắc phục D6:** Kiểm AB,AC có cùng phương không trước khi dựng n, và thay đủ ba điểm vào đáp án.

</details>

### Luyện tập 20 · Mặt phẳng chứa hai hướng hoặc một trục

<!-- ITEM_ID: THPT-TOP18-P20; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O20 -->

Tìm mặt phẳng chứa Oy và A=(2,0,−1).

<details><summary>Tự mở lời giải và đối chiếu</summary>

Dùng e2=(0,1,0) và OA=(2,0,−1); pháp tuyến n=(1,0,2), nên x+2z=0; Oy và A đều thỏa.

**Đường khắc phục D6:** Không bỏ điều kiện chứa điểm/đường; một mặt chỉ có pháp tuyến đúng nhưng lệch vị trí vẫn sai.

</details>

### Luyện tập 21 · Quan hệ song song và vuông góc giữa hai mặt phẳng

<!-- ITEM_ID: THPT-TOP18-P21; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O21 -->

P:x−y=0, Q:x+y=0. Chúng vuông góc không?

<details><summary>Tự mở lời giải và đối chiếu</summary>

Pháp tuyến n1=(1,−1,0),n2=(1,1,0); tích n1·n2=0 và cả hai khác không nên hai mặt vuông góc.

**Đường khắc phục D6:** Nếu n1∥n2, kiểm tỉ lệ cả hệ số tự do trước khi nói 'hai mặt song song phân biệt'.

</details>

### Luyện tập 22 · Khoảng cách từ điểm đến mặt phẳng

<!-- ITEM_ID: THPT-TOP18-P22; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O22 -->

Tính khoảng cách M=(1,1,1) đến P:2x−y+2z−6=0.

<details><summary>Tự mở lời giải và đối chiếu</summary>

Thay M: 2−1+2−6=−3, |−3|=3, |n|=√(4+1+4)=3 nên d=1.

**Đường khắc phục D6:** Đừng quên trị tuyệt đối và chuẩn hóa pháp tuyến; đáp án khoảng cách phải không âm.

</details>

### Luyện tập 24 · Vectơ chỉ phương và phương trình tham số đường thẳng

<!-- ITEM_ID: THPT-TOP18-P24; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O24 -->

Đường qua P=(−1,2,0) hướng v=(0,3,−2). Viết phương trình tham số.

<details><summary>Tự mở lời giải và đối chiếu</summary>

x=−1,y=2+3t,z=−2t (t∈R). Tại t=0 trở về P; vectơ v khác 0.

**Đường khắc phục D6:** Nếu thành phần hướng bằng 0, tọa độ tương ứng là hằng, không tùy tiện bỏ phương trình đó.

</details>

### Luyện tập 25 · Đường thẳng qua hai điểm phân biệt

<!-- ITEM_ID: THPT-TOP18-P25; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O25 -->

Tìm đường qua C=(1,−1,0),D=(1,1,4).

<details><summary>Tự mở lời giải và đối chiếu</summary>

CD=(0,2,4), nên x=1,y=−1+2t,z=4t; t=0 cho C, t=1 cho D.

**Đường khắc phục D6:** Nhớ A≠B, lấy đúng B−A và thử lại tọa độ cả hai điểm.

</details>

### Luyện tập 26 · Phương trình chính tắc và tọa độ hướng bằng 0

<!-- ITEM_ID: THPT-TOP18-P26; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O26 -->

Cho đường x=2,y=−1+3t,z=5−t. Viết chính tắc.

<details><summary>Tự mở lời giải và đối chiếu</summary>

x=2 và (y+1)/3=(z−5)/(−1). Không ghi (x−2)/0.

**Đường khắc phục D6:** D6: nhận từng thành phần hướng bằng 0 rồi giữ phương trình hằng; tỉ số có mẫu 0 là vô nghĩa.

</details>

### Luyện tập 27 · Kiểm điểm thuộc đường thẳng bằng một tham số

<!-- ITEM_ID: THPT-TOP18-P27; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O27 -->

Điểm P=(2,0,2) có thuộc d: x=1+t,y=t,z=t không?

<details><summary>Tự mở lời giải và đối chiếu</summary>

Không. Từ x=2 suy t=1; khi đó y=z=1, khác y=0,z=2 của P.

**Đường khắc phục D6:** Không dùng ba tham số khác nhau cho ba tọa độ; kiểm tất cả với một t chung.

</details>

### Luyện tập 28 · Quan hệ hướng giữa hai đường thẳng

<!-- ITEM_ID: THPT-TOP18-P28; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O28 -->

d1 qua (1,1,0) hướng (2,0,0), d2 qua (3,1,0) hướng (1,0,0). Trùng hay song song phân biệt?

<details><summary>Tự mở lời giải và đối chiếu</summary>

Trùng: hướng cùng phương và điểm (3,1,0) nằm trên d1 khi t=1.

**Đường khắc phục D6:** Khi đã có hướng tỉ lệ, đừng kết luận song song phân biệt trước khi kiểm một điểm.

</details>

### Luyện tập 29 · Hai đường thẳng cắt nhau, song song, trùng hoặc chéo nhau

<!-- ITEM_ID: THPT-TOP18-P29; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O29 -->

Phân loại d1(t)=(t,0,0), d2(s)=(0,s,2).

<details><summary>Tự mở lời giải và đối chiếu</summary>

Khác phương, z luôn 0 ở d1 nhưng luôn 2 ở d2, hệ vô nghiệm ⇒ chéo nhau.

**Đường khắc phục D6:** D6: giải đủ ba tọa độ; hình chiếu lên giấy giao nhau không chứng minh hai đường trong không gian cắt nhau.

</details>

### Luyện tập 30 · Giao của đường thẳng với mặt phẳng

<!-- ITEM_ID: THPT-TOP18-P30; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O30 -->

Tìm giao của d(t)=(2+t,−1,t) với mặt P:x+y+z=3.

<details><summary>Tự mở lời giải và đối chiếu</summary>

Thay: (2+t)−1+t=3 → 2t=2 → t=1, điểm (3,−1,1).

**Đường khắc phục D6:** Khi n·u=0, không chia cho 0; so sánh hằng số để phân biệt nằm trong/sóng song.

</details>

### Luyện tập 31 · Góc giữa hai đường thẳng bằng vectơ chỉ phương

<!-- ITEM_ID: THPT-TOP18-P31; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O31 -->

u=(1,1,0),v=(1,−1,0). Tính góc giữa hai đường.

<details><summary>Tự mở lời giải và đối chiếu</summary>

Tích vô hướng 0, nên góc 90°. Hai hướng đều khác không.

**Đường khắc phục D6:** Nếu ra góc tù từ cos âm, nhớ góc giữa **đường** lấy giá trị không tù bằng trị tuyệt đối.

</details>

### Luyện tập 32 · Góc giữa đường thẳng và mặt phẳng

<!-- ITEM_ID: THPT-TOP18-P32; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O32 -->

Đường có hướng u=(3,4,0), mặt z=0. Góc giữa đường và mặt?

<details><summary>Tự mở lời giải và đối chiếu</summary>

0°, do n=(0,0,1), u·n=0. Chưa biết đường nằm trong hay song song phân biệt nếu chưa kiểm điểm gốc.

**Đường khắc phục D6:** Không nhầm góc pháp tuyến–đường với góc đường–mặt; trường hợp suy biến hình chiếu khi θ=90° vẫn xác định góc 90°.

</details>

### Luyện tập 33 · Góc giữa hai mặt phẳng

<!-- ITEM_ID: THPT-TOP18-P33; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O33 -->

P:x+y=0,Q:x−y=1. Tính góc hai mặt.

<details><summary>Tự mở lời giải và đối chiếu</summary>

Pháp tuyến n1=(1,1,0),n2=(1,−1,0), dot=0 nên góc 90°.

**Đường khắc phục D6:** Kiểm chọn n≠0; nhớ góc giữa hai mặt là góc nhỏ, không lệ thuộc hướng n.

</details>

### Luyện tập 34 · Phân biệt song song và vuông góc trong các cặp hình

<!-- ITEM_ID: THPT-TOP18-P34; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O34 -->

Mặt x=0 và đường d(t)=(1,t,0). Quan hệ?

<details><summary>Tự mở lời giải và đối chiếu</summary>

n=(1,0,0),u=(0,1,0), n·u=0 và điểm (1,0,0) không thuộc x=0, nên song song phân biệt.

**Đường khắc phục D6:** Một đẳng thức hướng không quyết định vị trí; kiểm điểm/đường thuộc nhau.

</details>

### Luyện tập 35 · Ứng dụng độ dốc và độ nghiêng trong thực tế

<!-- ITEM_ID: THPT-TOP18-P35; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O35 -->

Một dây cáp có độ dời ngang 8 m, tăng cao 6 m. Tính sin góc cáp với nền và độ dài cáp.

<details><summary>Tự mở lời giải và đối chiếu</summary>

Độ dài cáp √(8²+6²)=10 m, sinθ=6/10=3/5.

**Đường khắc phục D6:** Phân biệt quãng ngang và chiều dài đường xiên; nếu có thể hãy kiểm bằng tam giác vuông.

</details>

### Luyện tập 36 · Phương trình mặt cầu tâm và bán kính

<!-- ITEM_ID: THPT-TOP18-P36; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O36 -->

Viết mặt cầu tâm (−1,2,0), bán kính 3.

<details><summary>Tự mở lời giải và đối chiếu</summary>

(x+1)²+(y−2)²+z²=9. Các dấu trong ngoặc đối với tọa độ tâm.

**Đường khắc phục D6:** Bán kính phải dương; phương trình không có điểm nếu tổng bình phương bằng số âm.

</details>

### Luyện tập 37 · Đưa phương trình tổng quát về tâm và bán kính

<!-- ITEM_ID: THPT-TOP18-P37; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O37 -->

Viết tâm và bán kính của x²+y²+z²+2x−4y+4=0.

<details><summary>Tự mở lời giải và đối chiếu</summary>

Hoàn bình phương: (x+1)²+(y−2)²+z²=1; tâm (−1,2,0), R=1.

**Đường khắc phục D6:** Không quên chuyển hằng số khi hoàn bình phương; tính R² trước khi lấy căn, kiểm >0.

</details>

### Luyện tập 38 · Điểm nằm trong, trên hay ngoài mặt cầu

<!-- ITEM_ID: THPT-TOP18-P38; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O38 -->

Mặt cầu tâm C=(1,1,1) R=2, xét P=(1,1,3) và Q=(2,2,2).

<details><summary>Tự mở lời giải và đối chiếu</summary>

CP²=4=R² nên P trên; CQ²=3<R² nên Q trong.

**Đường khắc phục D6:** So bình phương khoảng cách và bán kính; nếu nhầm tâm, thay hệ tọa độ dịch chuyển M−C.

</details>

### Luyện tập 39 · Mặt cầu có đường kính cho bởi hai điểm

<!-- ITEM_ID: THPT-TOP18-P39; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O39 -->

A=(0,2,0),B=(0,2,6). Xác định tâm, bán kính và phương trình mặt cầu.

<details><summary>Tự mở lời giải và đối chiếu</summary>

Tâm C=(0,2,3), AB=6, R=3, phương trình x²+(y−2)²+(z−3)²=9.

**Đường khắc phục D6:** Tính trung điểm trước; đường kính là AB, bán kính nửa AB, không dùng AB trực tiếp làm R.

</details>

### Luyện tập 40 · Tiếp xúc mặt cầu với mặt phẳng và thiết diện

<!-- ITEM_ID: THPT-TOP18-P40; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O40 -->

Mặt cầu tâm C=(0,0,1) bán kính 5, mặt z=4. Tính bán kính đường tròn thiết diện.

<details><summary>Tự mở lời giải và đối chiếu</summary>

Khoảng cách d=|4−1|=3, r=√(25−9)=4; hình tròn có tâm (0,0,4).

**Đường khắc phục D6:** Đầu tiên tính khoảng cách tâm–mặt chuẩn; không lấy trực tiếp số D của phương trình làm d nếu pháp tuyến chưa chuẩn hóa.

</details>

### Luyện tập 23 · Ứng dụng mặt phẳng: mặt cắt và khoảng cách thực tiễn

<!-- ITEM_ID: THPT-TOP18-P23; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP18-O23 -->

Mặt cầu tâm O R=10, mặt phẳng z=6. Tính bán kính đường tròn cắt.

<details><summary>Tự mở lời giải và đối chiếu</summary>

r=√(100−36)=8. Nếu mặt ở z=11 thì d>R nên không có giao.

**Đường khắc phục D6:** Cần học khái niệm mặt cầu B17 trước; không cho O23 làm outcome Core bắt buộc của B14 hay SGK-ChII.

</details>

## 3. Tự kiểm tra công khai — Phần B

Các câu dưới đây chỉ là **placement** của các bài Practice công khai đã học, không có item ID mới, không bảo đảm độc lập và **không ghi Skill Mastery**. Bản Markdown tĩnh có lời giải tự mở; một website thực hiện Final Submit phải giữ đáp án/gợi ý/đúng sai/rubric/AI Tutor kín tới sau Final Submit.

- Vị trí 1: `THPT-TOP18-P17` — `TOPIC_SELF_CHECK_REPLAY`, không sinh bản sao.
- Vị trí 2: `THPT-TOP18-P19` — `TOPIC_SELF_CHECK_REPLAY`, không sinh bản sao.
- Vị trí 3: `THPT-TOP18-P22` — `TOPIC_SELF_CHECK_REPLAY`, không sinh bản sao.
- Vị trí 4: `THPT-TOP18-P24` — `TOPIC_SELF_CHECK_REPLAY`, không sinh bản sao.
- Vị trí 5: `THPT-TOP18-P29` — `TOPIC_SELF_CHECK_REPLAY`, không sinh bản sao.
- Vị trí 6: `THPT-TOP18-P31` — `TOPIC_SELF_CHECK_REPLAY`, không sinh bản sao.
- Vị trí 7: `THPT-TOP18-P37` — `TOPIC_SELF_CHECK_REPLAY`, không sinh bản sao.
- Vị trí 8: `THPT-TOP18-P40` — `TOPIC_SELF_CHECK_REPLAY`, không sinh bản sao.

**Đối chiếu sau cùng:** Nếu nhầm dấu pháp tuyến, đọc lại B1; nếu chưa xác định đúng vị trí tương đối, quay B2; nếu nhầm góc với vectơ pháp tuyến, quay B3; nếu hiểu sai bán kính/tiếp xúc, quay B4. O23 là vận dụng tích hợp cuối B5, **không có quyền trở thành Core bắt buộc B14**.

<!-- AUTHOR_ONLY_ORIGINAL_G12_CHV_96_PUBLIC_CANONICAL_POINTERS: THPT-G12-B14-C01, THPT-G12-B14-P01, THPT-G12-B14-A01, THPT-G12-B14-W01, THPT-G12-B14-C02, THPT-G12-B14-P02, THPT-G12-B14-A02, THPT-G12-B14-W02, THPT-G12-B14-C03, THPT-G12-B14-P03, THPT-G12-B14-A03, THPT-G12-B14-W03, THPT-G12-B14-C04, THPT-G12-B14-P04, THPT-G12-B14-A04, THPT-G12-B14-W04, THPT-G12-B14-C05, THPT-G12-B14-P05, THPT-G12-B14-A05, THPT-G12-B14-W05, THPT-G12-B14-C06, THPT-G12-B14-P06, THPT-G12-B14-A06, THPT-G12-B14-W06, THPT-G12-B14-C07, THPT-G12-B14-P07, THPT-G12-B14-A07, THPT-G12-B14-W07, THPT-G12-B15-C01, THPT-G12-B15-P01, THPT-G12-B15-A01, THPT-G12-B15-W01, THPT-G12-B15-C02, THPT-G12-B15-P02, THPT-G12-B15-A02, THPT-G12-B15-W02, THPT-G12-B15-C03, THPT-G12-B15-P03, THPT-G12-B15-A03, THPT-G12-B15-W03, THPT-G12-B15-C04, THPT-G12-B15-P04, THPT-G12-B15-A04, THPT-G12-B15-W04, THPT-G12-B15-C05, THPT-G12-B15-P05, THPT-G12-B15-A05, THPT-G12-B15-W05, THPT-G12-B15-C06, THPT-G12-B15-P06, THPT-G12-B15-A06, THPT-G12-B15-W06, THPT-G12-B15-C07, THPT-G12-B15-P07, THPT-G12-B15-A07, THPT-G12-B15-W07, THPT-G12-B16-C01, THPT-G12-B16-P01, THPT-G12-B16-A01, THPT-G12-B16-W01, THPT-G12-B16-C02, THPT-G12-B16-P02, THPT-G12-B16-A02, THPT-G12-B16-W02, THPT-G12-B16-C03, THPT-G12-B16-P03, THPT-G12-B16-A03, THPT-G12-B16-W03, THPT-G12-B16-C04, THPT-G12-B16-P04, THPT-G12-B16-A04, THPT-G12-B16-W04, THPT-G12-B16-C05, THPT-G12-B16-P05, THPT-G12-B16-A05, THPT-G12-B16-W05, THPT-G12-B17-C01, THPT-G12-B17-P01, THPT-G12-B17-A01, THPT-G12-B17-W01, THPT-G12-B17-C02, THPT-G12-B17-P02, THPT-G12-B17-A02, THPT-G12-B17-W02, THPT-G12-B17-C03, THPT-G12-B17-P03, THPT-G12-B17-A03, THPT-G12-B17-W03, THPT-G12-B17-C04, THPT-G12-B17-P04, THPT-G12-B17-A04, THPT-G12-B17-W04, THPT-G12-B17-C05, THPT-G12-B17-P05, THPT-G12-B17-A05, THPT-G12-B17-W05 -->

**HOLD:** nguồn SBT B14 trang in 25 (bài 5.6–5.7) thiếu; chưa phân định exact Topic impact theo original S1; chưa ký Q18/có V2 và chưa được gắn CONTENT_READY.