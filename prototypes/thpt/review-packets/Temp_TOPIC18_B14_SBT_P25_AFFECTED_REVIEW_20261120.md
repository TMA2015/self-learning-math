# Temp — CĐ18 G12 B14 SBT trang in 25 · Review độc lập phạm vi ảnh hưởng O22, nối kiến thức O40

PACKET_ID: THPT-TOPIC18-B14-SBT-P25-AFFECTED-REVIEW-20261120
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.2.0
PERMANENT_SOURCES_VERSION: 2.1 (đúng 5 nguồn đã thay thế; không thêm nguồn chuẩn thứ sáu)
Q18_VERIFICATION_MODE: INDEPENDENT_REVIEW_REQUESTED_FOR_AFFECTED_B14_ONLY
PACKET_STATE: REVIEW_CANDIDATE_NOT_VERDICT
LEARNING_PATH: TOPIC
RELEASE_SCOPE: AFFECTED_KNOWLEDGE_ONLY_NO_PUBLIC_RD1
ACADEMIC_SOURCE_PATH: prototypes/thpt/content-drafts/topic18-oxyz/Temp_TOPIC18_OXYZ_R05_PARAMETER_CONTEXT_CANDIDATE_20261117.md
ACADEMIC_SOURCE_BLOB: bcc7cb6c57ea3cddbfae312a1fe2d31c0791b3f4
CURRENT_AUTHOR_SELF_Q18_BLOB: 5aa42a6f873614228a3c8dcef2e526daa5a4b82c
CURRENT_A1_BLOB: 5edde8674bfe31accb684cbb8d6ff8127cc0d713
AUTHORING_PR: https://github.com/TMA2015/self-learning-math/pull/896

## Phạm vi kiểm — không hạ 22/22 CONTENT_READY

Đây là review **độc lập bổ sung** cho chứng cứ SBT Toán 12 KNTT Tập Hai, B14 trang **in 25**, bài 5.6 và 5.7, có nguồn SGK B14 và liên kết B17 mặt cầu. Chỉ nguồn PRIMARY SBT trang in25 mới đóng được khuyết chứng cứ gốc; các trang giải trên web dưới đây chỉ là đối chiếu phụ, không tự nhận là bản quét SBT chính.

- **5.6 — Dạng bài SBT được nguồn thứ cấp xác nhận:** máy phát tại A(1;2;1), vùng cầu bán kính 2; hỏi bán kính vùng giao trên Oxy. Lập khoảng cách từ A đến mặt z=0 bằng 1, bán kính thiết diện sqrt(2²−1²)=sqrt3. Đặc trưng mặt cầu/thiết diện thuộc B17 O40 hoặc mục mở rộng sau B17 O23; không biến thành Core B14.
- **5.7 — Dạng bài SBT được nguồn thứ cấp xác nhận:** khoảng cách mặt sàn alpha: x+2y+2z−1=0 tới trần beta: x+2y+2z−3=0, so với chiều cao tủ 1. Hai pháp tuyến cùng (1;2;2); khoảng cách |−3−(−1)|/sqrt(1+4+4)=2/3, không đủ. Cần kiểm trong TOP18-O21/O22 tại B14, giải thích điều kiện quy đổi pháp tuyến khi chỉ tỉ lệ.

Web thứ cấp tham khảo (không thay SBT primary): https://loigiaihay.com/giai-bai-56-trang-25-sach-bai-tap-toan-12-ket-noi-tri-thuc-a174373.html ; https://loigiaihay.com/giai-bai-57-trang-25-sach-bai-tap-toan-12-ket-noi-tri-thuc-a174374.html .

## Nguyên văn phần học liệu hiện hành TOP18-M17..M22 — learner Knowledge B14

### 4.1. Dựng vectơ pháp tuyến

<!-- LESSON_ID: TOP18-M17; OUTCOME_ID: TOP18-O17; S1_ORIGINAL_OUTCOME: G12-CHV-B14-O01; SCOPE: G12_CHV -->

Một mặt phẳng có vô số hướng nằm trong nó; một vectơ pháp tuyến n khác 0 phải vuông góc với mọi hướng đó. Nếu đã biết hai vectơ chỉ phương u,v **không cùng phương**, tích có hướng u×v là một cách dựng n. Tích có hướng bằng 0 khi u,v cùng phương, khi ấy chưa xác định được pháp tuyến mặt bằng cặp vectơ ấy.

> **PHƯƠNG PHÁP — Dựng vectơ pháp tuyến**
>
> Nếu u,v không cùng phương, một pháp tuyến mặt phẳng là \(n=u\times v\ne 0\), vuông góc với cả hai hướng u,v.


**Cách thực sự tính được pháp tuyến (không cần học thuộc ngay):** Nếu hai hướng là u=(u₁;u₂;u₃), v=(v₁;v₂;v₃) thì có thể tìm n=(a;b;c) bằng cách giải hai điều kiện **a·u₁+b·u₂+c·u₃=0** và **a·v₁+b·v₂+c·v₃=0**, rồi chọn một nghiệm n khác 0. Một cách gọn hơn là công thức tích có hướng

\[
u\times v=(u_2v_3-u_3v_2;\;u_3v_1-u_1v_3;\;u_1v_2-u_2v_1).
\]

Từng thành phần được tạo để khi nhân vô hướng lại với u hay v, các hạng tử triệt tiêu nhau, nên n·u=n·v=0. **Điều kiện quan trọng:** u và v phải không cùng phương, nếu không tích có hướng trở thành vectơ-không và không xác định được một pháp tuyến khác 0. Tính xong hãy **thử lại hai tích vô hướng**, không chỉ chép công thức.

**Ví dụ**

**Đề bài:** u=(1;0;1), v=(0;1;1) là hai hướng độc lập trong mặt. Hãy dựng và kiểm pháp tuyến.

**Lời giải:** u=(1,0,1), v=(0,1,1) độc lập. Theo công thức tích có hướng, n=u×v=(−1,−1,1). Kiểm n·u=−1+1=0 và n·v=−1+1=0; vì n≠0, có thể dùng n làm pháp tuyến. Hai hướng không cùng phương làm tích có hướng khác vectơ-không.

**Vận dụng:** u=(1,0,0),v=(0,1,0) có pháp tuyến đơn giản nào?

<!-- ITEM_ID: THPT-TOP18-T17; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O17 -->

<details markdown="1"><summary>Đối chiếu</summary>

n=(0,0,1), vì vuông góc cả u lẫn v.

**D6 — Khi chưa đúng:** Nếu tích có hướng 0, phải kiểm hai hướng có cùng phương hay không; không dùng vectơ 0 làm pháp tuyến.

</details>

### 4.2. Mặt phẳng qua một điểm

<!-- LESSON_ID: TOP18-M18; OUTCOME_ID: TOP18-O18; S1_ORIGINAL_OUTCOME: G12-CHV-B14-O02; SCOPE: G12_CHV -->

Một mặt phẳng là tập các điểm M có độ dời từ điểm M0 nằm vuông góc với một pháp tuyến n khác 0. Điều kiện n·M0M=0 dẫn đến A(x−x0)+B(y−y0)+C(z−z0)=0. Vì vậy cần một điểm đi qua và một hướng pháp tuyến, không thể chỉ biết n để xác định vị trí duy nhất.

> **ĐỊNH NGHĨA — Mặt phẳng qua một điểm**
>
> Một mặt phẳng là tập các điểm M có độ dời từ điểm M0 nằm vuông góc với một pháp tuyến n khác 0.


**Ví dụ**

**Đề bài:** Qua M0=(1;0;−1) có n=(2;−1;3). Viết phương trình mặt và kiểm M0.

**Lời giải:** M0=(1,0,−1),n=(2,−1,3). Thay vào 2(x−1)−(y−0)+3(z+1)=0, thu 2x−y+3z+1=0. Thử điểm M0: 2−3+1=0. Thử lại điểm M0 giúp phát hiện lỗi hệ số tự do.

**Vận dụng:** M0=(0,0,2), n=(0,0,1). Viết mặt phẳng.

<!-- ITEM_ID: THPT-TOP18-T18; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O18 -->

<details markdown="1"><summary>Đối chiếu</summary>

z−2=0, tức z=2.

**D6 — Khi chưa đúng:** Không để pháp tuyến n=0; thay tọa độ điểm đã cho vào phương trình để phát hiện lỗi dấu.

</details>

### 4.3. Mặt phẳng qua ba điểm

<!-- LESSON_ID: TOP18-M19; OUTCOME_ID: TOP18-O19; S1_ORIGINAL_OUTCOME: G12-CHV-B14-O03; SCOPE: G12_CHV -->

Ba điểm phân biệt chưa đủ xác định một mặt: chúng phải **không thẳng hàng**. Lấy AB và AC không cùng phương, dựng n=AB×AC rồi áp dụng phương trình mặt qua A. Nếu ba điểm thẳng hàng, tích có hướng bằng 0 và tồn tại vô số mặt phẳng qua đường đó.

> **KIẾN THỨC CẦN GHI NHỚ — Mặt phẳng qua ba điểm**
>
> Ba điểm phân biệt chưa đủ xác định một mặt: chúng phải **không thẳng hàng**.


**Phương trình mặt phẳng theo đoạn chắn.** Nếu mặt phẳng cắt ba trục tọa độ lần lượt tại \(A(a;0;0)\), \(B(0;b;0)\), \(C(0;0;c)\), với **\(abc\ne0\)**, thì ba điểm này không thẳng hàng. Phương trình đi qua cả ba điểm phải thỏa \(x=a\) tại trục \(Ox\), \(y=b\) tại trục \(Oy\) và \(z=c\) tại trục \(Oz\), dẫn tới:
\[
\frac{x}{a}+\frac{y}{b}+\frac{z}{c}=1.
\]
Các số \(a,b,c\) là **tọa độ đoạn chắn có dấu**, không nhất thiết dương. Nếu một đoạn chắn bằng \(0\) hoặc mặt phẳng song song một trục, không được chia cho \(0\); hãy quay lại dạng điểm–pháp tuyến hoặc phương trình tổng quát.

**Ví dụ minh họa.** Mặt phẳng qua \(A(2;0;0)\), \(B(0;-3;0)\), \(C(0;0;6)\) có \(\frac{x}{2}-\frac{y}{3}+\frac{z}{6}=1\). Nhân \(6\) thu \(3x-2y+z-6=0\). Kiểm riêng từng giao điểm: \(A\) cho \(6-6=0\), \(B\) cho \(6-6=0\), \(C\) cho \(6-6=0\). Nếu nhầm \(B\) thành \((0;3;0)\), dấu của hệ số \(y\) sẽ sai.

**Ví dụ**

**Đề bài:** Qua A=(1;0;0), B=(0;1;0), C=(0;0;1), lập phương trình mặt.

**Lời giải:** A=(1,0,0), B=(0,1,0), C=(0,0,1) cho AB=(−1,1,0), AC=(−1,0,1). Một n=(1,1,1) vuông cả hai; mặt phẳng qua A là x+y+z−1=0. Ba điểm phải không thẳng hàng.

**Vận dụng:** Ba giao điểm trục A=(2,0,0),B=(0,2,0),C=(0,0,2). Mặt phẳng?

<!-- ITEM_ID: THPT-TOP18-T19; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O19 -->

<details markdown="1"><summary>Đối chiếu</summary>

x+y+z=2. Ba điểm không thẳng hàng.

**D6 — Khi chưa đúng:** Kiểm AB,AC có cùng phương không trước khi dựng n, và thay đủ ba điểm vào đáp án.

</details>

### 4.4. Mặt phẳng chứa trục

<!-- LESSON_ID: TOP18-M20; OUTCOME_ID: TOP18-O20; S1_ORIGINAL_OUTCOME: G12-CHV-B14-O04; SCOPE: G12_CHV -->

Khi mặt phẳng chứa một đường hoặc trục, mọi vectơ chỉ phương của đường ấy phải vuông góc với pháp tuyến của mặt. Nếu mặt chứa Ox và điểm P ngoài Ox, dùng e1=(1,0,0) và OP làm hai hướng độc lập. Điều kiện 'chứa trục' mạnh hơn 'song song trục' vì mặt còn phải đi qua mọi điểm trên trục.

> **TÍNH CHẤT — Mặt phẳng chứa trục**
>
> Khi mặt phẳng chứa một đường hoặc trục, mọi vectơ chỉ phương của đường ấy phải vuông góc với pháp tuyến của mặt.


**Mặt phẳng trung trực của một đoạn thẳng.** Tập hợp điểm \(X\) cách đều hai điểm **phân biệt** \(A,B\) trong không gian là mặt phẳng đi qua **trung điểm** \(M\) của \(AB\) và có pháp tuyến \(\overrightarrow{AB}\). Vì:
\[
XA^2-XB^2=(\overrightarrow{XA}-\overrightarrow{XB})\cdot(\overrightarrow{XA}+\overrightarrow{XB})
=2\overrightarrow{AB}\cdot\overrightarrow{MX},
\]
nên \(XA=XB\Longleftrightarrow\overrightarrow{AB}\cdot\overrightarrow{MX}=0\). Đây là cách dựng từ điều kiện **bằng khoảng cách**, không cần biết trước phương trình một mặt phẳng. Nếu \(A=B\), mọi điểm đều cách đều A và B nên **không** có một mặt trung trực xác định duy nhất.

**Ví dụ minh họa.** Cho \(A(0;0;0)\), \(B(2;4;0)\). Trung điểm \(M(1;2;0)\) và một pháp tuyến \(\overrightarrow{AB}=(2;4;0)\) cho phương trình \(2(x-1)+4(y-2)=0\), tức \(x+2y-5=0\). Kiểm điểm \(X(5;0;0)\) thuộc mặt: \(5-5=0\), đồng thời \(XA=5\) và \(XB=\sqrt{(5-2)^2+(0-4)^2}=5\).

**Ví dụ**

**Đề bài:** Mặt phẳng cần đi qua toàn bộ trục Ox và điểm P(0;1;1) nằm ngoài trục. Hãy tìm một phương trình đơn giản của mặt phẳng.

**Lời giải:** Mặt chứa Ox và P=(0,1,1). Hai hướng e1=(1,0,0), OP=(0,1,1) nên một pháp tuyến n=(0,−1,1); mặt qua O là y−z=0. Mặt phải chứa cả trục và điểm đã cho. Chọn hai vectơ độc lập trong mặt: e1=(1;0;0) và OP=(0;1;1). Một pháp tuyến là (0;−1;1), do đó mặt qua O có phương trình y−z=0.

**Vận dụng:** Mặt chứa trục Oz và điểm (1,1,0). Tìm phương trình đơn giản.

<!-- ITEM_ID: THPT-TOP18-T20; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O20 -->

<details markdown="1"><summary>Đối chiếu</summary>

x−y=0, vì mọi điểm Oz có x=y=0 và điểm thêm cũng thỏa.

**D6 — Khi chưa đúng:** Không bỏ điều kiện chứa điểm/đường; một mặt chỉ có pháp tuyến đúng nhưng lệch vị trí vẫn sai.

</details>

### 4.5. Hai mặt phẳng: song song hay vuông góc?

<!-- LESSON_ID: TOP18-M21; OUTCOME_ID: TOP18-O21; S1_ORIGINAL_OUTCOME: G12-CHV-B14-O05; SCOPE: G12_CHV -->

Hai mặt có pháp tuyến tỉ lệ có cùng phương, nhưng có thể **trùng nhau** hoặc **song song phân biệt**; phải kiểm thêm hằng số hoặc một điểm. Hai mặt vuông góc khi hai pháp tuyến khác không có tích vô hướng bằng 0. Góc giữa mặt là góc nhỏ, không phụ thuộc dấu chọn của pháp tuyến.

> **TÍNH CHẤT — Hai mặt phẳng: song song hay vuông góc?**
>
> Hai mặt có pháp tuyến tỉ lệ có cùng phương, nhưng có thể **trùng nhau** hoặc **song song phân biệt**; phải kiểm thêm hằng số hoặc một điểm.


**Ví dụ**

**Đề bài:** P:x+2y−z=0 và Q:2x+4y−2z+3=0: trùng hay song song phân biệt?

**Lời giải:** P:x+2y−z=0 và Q:2x+4y−2z+3=0 có pháp tuyến tỉ lệ nhưng không trùng vì các hệ số cả phương trình không tỉ lệ; chúng song song phân biệt. Pháp tuyến cùng phương chưa đủ để hai mặt trùng.

**Vận dụng:** P:x+y+z=1, Q:2x+2y+2z=2. Hai mặt trùng hay song song phân biệt?

<!-- ITEM_ID: THPT-TOP18-T21; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O21 -->

<details markdown="1"><summary>Đối chiếu</summary>

Trùng nhau do chia phương trình Q cho 2 thu đúng P.

**D6 — Khi chưa đúng:** Nếu n1∥n2, kiểm tỉ lệ cả hệ số tự do trước khi nói 'hai mặt song song phân biệt'.

</details>

### 4.6. Khoảng cách điểm đến mặt phẳng

<!-- LESSON_ID: TOP18-M22; OUTCOME_ID: TOP18-O22; S1_ORIGINAL_OUTCOME: G12-CHV-B14-O06; SCOPE: G12_CHV -->

Khoảng cách từ điểm M đến mặt P là độ dài đường vuông góc ngắn nhất, không phải khoảng cách đến một điểm tùy ý của P. Với P:Ax+By+Cz+D=0 có n=(A,B,C) khác không, lấy trị tuyệt đối của vế trái tại M và chia độ dài pháp tuyến √(A²+B²+C²).

> **CÔNG THỨC — Khoảng cách điểm đến mặt phẳng**
>
> Với \((P):Ax+By+Cz+D=0\) có \((A;B;C)\ne(0;0;0)\), khoảng cách \(d(M,(P))=\frac{|Ax_M+By_M+Cz_M+D|}{\sqrt{A^2+B^2+C^2}}\).


**Từ khoảng cách điểm–mặt đến khoảng cách hai mặt phẳng song song.** Nếu \((\alpha)\parallel(\beta)\), khoảng cách giữa hai mặt phẳng bằng khoảng cách từ **một điểm bất kỳ** trên \((\alpha)\) tới \((\beta)\). Đó là cùng một độ cao vuông góc, nên không cần nhớ công thức mới: chọn một điểm trên mặt thứ nhất, thế vào công thức khoảng cách điểm–mặt đã biết. Nếu hai phương trình có **cùng bộ hệ số pháp tuyến khác không**,
\[
(\alpha):Ax+By+Cz+D_1=0,\quad
(\beta):Ax+By+Cz+D_2=0,
\]
thì khoảng cách giữa hai mặt là
\[
d((\alpha),(\beta))=\frac{|D_2-D_1|}{\sqrt{A^2+B^2+C^2}}.
\]
**Điều kiện:** hai mặt song song, và \(A^2+B^2+C^2>0\). Nếu các pháp tuyến chỉ **tỉ lệ**, phải nhân/chia một phương trình để chúng có **cùng hệ số \(A,B,C\)** trước khi lấy hiệu hằng số. Nếu hai phương trình trùng nhau, khoảng cách bằng 0, không được gọi hai mặt song song phân biệt.

**Ví dụ minh họa — ứng dụng chiều cao phòng.** Mặt sàn thuộc \((\alpha):x+2y+2z-1=0\), trần thuộc \((\beta):x+2y+2z-3=0\) (đơn vị độ dài như trong mô hình). Hai pháp tuyến đều là \((1;2;2)\ne\vec0\); hệ số tự do khác nhau nên chúng song song phân biệt. Khoảng cách giữa hai mặt bằng \(|-3-(-1)|/\sqrt{1+4+4}=2/3\). Kiểm bằng cách lấy \(H(1;0;0)\in(\alpha)\): \(d(H,(\beta))=|1-3|/3=2/3\). Do \(2/3<1\), khoảng cách sàn–trần **không đủ** cho chiếc tủ cao 1 đơn vị nếu chiều cao tủ đo theo hướng vuông góc hai mặt. Đừng lấy độ chênh \(|-3+1|=2\) làm chiều cao khi pháp tuyến không có độ dài 1.

**Tự khắc phục (D6).** Nếu ra 2 thay vì \(2/3\), em quên chuẩn hóa pháp tuyến. Nếu ra \(0\), em nhầm hai mặt **song song phân biệt** với hai mặt **trùng nhau**. Hãy chọn điểm thuộc một mặt và tính trực tiếp khoảng cách điểm–mặt để kiểm lại phương pháp.

**Ví dụ**

**Đề bài:** Cho mặt phẳng (P):x+2y+2z−6=0 và điểm O(0;0;0). Hãy tính khoảng cách từ O đến (P) và nêu điều kiện áp dụng công thức.

**Lời giải:** M=O, P:x+2y+2z−6=0 có độ dài n=3, trị tuyệt đối −6 là 6, nên d=6/3=2. Mẫu số là độ dài pháp tuyến, phải khác 0. Pháp tuyến n=(1;2;2) khác 0 có độ dài √(1+4+4)=3. Tại O, trị tuyệt đối của vế trái là 6 nên d=6/3=2; giá trị không âm vì đây là độ dài đoạn vuông góc.

**Vận dụng:** Khoảng cách từ O đến mặt z=−5?

<!-- ITEM_ID: THPT-TOP18-T22; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O22 -->

<details markdown="1"><summary>Đối chiếu</summary>

5 đơn vị, bởi pháp tuyến (0,0,1), độ chênh z là 5.

**D6 — Khi chưa đúng:** Đừng quên trị tuyệt đối và chuẩn hóa pháp tuyến; đáp án khoảng cách phải không âm.

</details>



## Nguyên văn TOP18-M40/O40 — thiết diện sau SGK B17

### 7.5. Tiếp xúc và thiết diện mặt cầu

<!-- LESSON_ID: TOP18-M40; OUTCOME_ID: TOP18-O40; S1_ORIGINAL_OUTCOME: G12-CHV-B17-O05; SCOPE: G12_CHV -->

Giao của mặt cầu bán kính R với mặt phẳng phụ thuộc khoảng cách d từ tâm đến mặt: d>R không có giao, d=R tiếp xúc một điểm, d<R cắt theo đường tròn bán kính √(R²−d²). Tâm đường tròn là chân vuông góc từ tâm mặt cầu đến mặt phẳng.

> **CÔNG THỨC — Tiếp xúc và thiết diện mặt cầu**
>
> Giao của mặt cầu bán kính R với mặt phẳng phụ thuộc khoảng cách d từ tâm đến mặt: d>R không có giao, d=R tiếp xúc một điểm, d<R cắt theo đường tròn bán kính √(R²−d²).


**Lập phương trình tiếp diện tại một điểm của mặt cầu.** Cho mặt cầu tâm \(I(a;b;c)\), bán kính \(R>0\), điểm \(P(x_0;y_0;z_0)\) đã **kiểm tra thuộc mặt cầu**, nghĩa là \(IP=R\). Tại tiếp điểm \(P\), bán kính \(IP\) vuông góc với mọi hướng trên mặt phẳng tiếp xúc, nên \(\overrightarrow{IP}\ne\vec0\) chính là một vectơ pháp tuyến. Dùng điểm–pháp tuyến ta có:
\[
(x_0-a)(x-x_0)+(y_0-b)(y-y_0)+(z_0-c)(z-z_0)=0.
\]
Nếu \(P\) không nằm trên mặt cầu, mặt qua \(P\) với pháp tuyến \(IP\) **không phải tiếp diện tại P**. Cũng không nhầm mặt tiếp xúc với đường tròn thiết diện có vô số điểm: tiếp diện chỉ có **một điểm chung** với mặt cầu.

**Ví dụ minh họa.** Với mặt cầu tâm \(I(1;2;3)\), bán kính \(4\), xét \(P(5;2;3)\). Ta có \(IP=\sqrt{4^2}=4\), nên \(P\) thuộc mặt cầu; \(\overrightarrow{IP}=(4;0;0)\). Tiếp diện qua P là \(4(x-5)=0\), tức \(x=5\). Khoảng cách từ tâm I đến mặt \(x=5\) bằng \(|1-5|=4=R\), đúng tiêu chuẩn tiếp xúc. Nếu điểm chọn là \(Q(6;2;3)\), \(IQ=5\ne R\), không được gọi mặt qua Q là tiếp diện tại Q.

**Ví dụ**

**Đề bài:** Cầu O, R=5: mặt z=3 tạo thiết diện gì và mặt z=5 có tiếp xúc không?

**Lời giải:** Mặt cầu tâm O R=5 với mặt z=3 có d=3 và thiết diện bán kính 4. Với mặt z=5 là tiếp xúc ở (0,0,5). Phân loại theo d so với R.

**Vận dụng:** Mặt cầu tâm O R=5, mặt z=6 có giao không?

<!-- ITEM_ID: THPT-TOP18-T40; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O40 -->

<details markdown="1"><summary>Đối chiếu</summary>

Không, vì khoảng cách tâm–mặt d=6>R.

**D6 — Khi chưa đúng:** Đầu tiên tính khoảng cách tâm–mặt chuẩn; không lấy trực tiếp số D của phương trình làm d nếu pháp tuyến chưa chuẩn hóa.

</details>

## 8. Vận dụng tích hợp sau B17 (tự chọn)

**Khép lại hành trình của một bài toán.** Câu chuyện drone ban đầu có thể được giải mà không học rời rạc sáu công thức: (1) chọn hệ trục và định vị A=(1;1;2); (2) đọc vectơ v=(1;0;1) để viết M(t); (3) tìm lúc M(t) thuộc mặt x+y+z=6, được t=1 và C=(2;1;3); (4) với cầu tâm C bán kính 5, tìm d(C,z=0)=3 và vòng giao mặt sàn bán kính 4. Mỗi bước chỉ sử dụng một ý nghĩa đã hình thành ở các chặng trước. Đây là ví dụ xuyên suốt, **không phải một câu kiểm tra có ID riêng**, và phần kết nối mặt cầu–mặt phẳng chỉ học sau kiến thức B17.



## Nguyên văn TOP18-M23/O23 — mở rộng sau B17, không phải Core B14

### 8.1. Mặt cắt và khoảng cách đến mặt cầu

<!-- LESSON_ID: TOP18-M23; OUTCOME_ID: TOP18-O23; S1_ORIGINAL_OUTCOME: G12-CHV-B14-O07; SCOPE: OPTIONAL_AFTER_B17 -->

**Mở rộng tích hợp sau B17, không dùng để kiểm tra Core B14 trước khi học mặt cầu.** Khi cắt mặt cầu bằng mặt phẳng, chỉ cần so khoảng cách d từ tâm C đến mặt phẳng với bán kính R: d>R không cắt, d=R tiếp xúc, d<R cho đường tròn bán kính √(R²−d²). Đây là ứng dụng nối hình học mặt phẳng và hình học mặt cầu, không phải định lí mới thay SGK B14.

> **TÍNH CHẤT — Mặt cắt và khoảng cách đến mặt cầu**
>
> Chỉ dùng sau B17: với mặt cầu tâm C bán kính R>0 và mặt phẳng cách tâm d≥0, nếu d<R thiết diện là đường tròn bán kính \(\sqrt{R^2-d^2}\); d=R tiếp xúc một điểm; d>R không cắt.


**Ví dụ**

**Đề bài:** Sau khi học B17, cho mặt cầu tâm C(1;−2;3), bán kính 13 và mặt phẳng z=8. Xác định tâm, bán kính thiết diện và giải thích vì sao điều kiện d<R quan trọng.

**Lời giải:** Chân đường vuông góc từ tâm C xuống mặt z=8 là H(1;−2;8), nên d(C,(P))=5<13. Mặt cắt là đường tròn tâm H với bán kính r=√(13²−5²)=√144=12. Độ dài r không phải bán kính cầu 13, vì mặt phẳng không qua tâm. Bài kết hợp phương pháp khoảng cách điểm–mặt và kiến thức mặt cầu sau B17, không lấy làm Core bắt buộc ở B14.

**Vận dụng:** Mặt cầu tâm O R=4, mặt z=4 cắt theo hình gì?

<!-- ITEM_ID: THPT-TOP18-T23; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O23 -->

<details markdown="1"><summary>Đối chiếu</summary>

Tiếp xúc một điểm (0,0,4), vì d=R.

**D6 — Khi chưa đúng:** Cần học khái niệm mặt cầu B17 trước; không cho O23 làm outcome Core bắt buộc của B14 hay SGK-ChII.

</details>



## Yêu cầu phản biện và cách xử lý kết luận

1. Đọc **SGK và SBT KNTT bản gốc**, đúng trang in SGK B14 và SBT B14 trang25. Nếu hệ thống không truy cập được ảnh/trang gốc, ghi SOURCE_UNVERIFIED_HOLD cho **chứng cứ SBT riêng**, tuyệt đối không suy ra Academic FAIL toàn CĐ18 từ thiếu trang.
2. Q01, Q03, Q04, PED1–PED6: kiểm O21/O22 nêu đủ điều kiện mặt phẳng song song/trùng; khoảng cách từ điểm đến mặt và hai mặt song song; ví dụ 5.7 có hai cách kiểm; kiểm số học và đơn vị. Q15/Q16: không nhân đôi canonical, không tiết lộ RD1, không ghi Mastery từ Selfcheck.
3. Bài 5.6: kiểm hình cầu/sphere **sau B17** O40/O23 đã có r=sqrt(R²−d²); đánh dấu SUPPORT_EXTENSION nếu đúng, không cưỡng ép thành Core B14.
4. Trả theo **đúng snapshot** trên: `SOURCE_RECEIPT` (nguồn + trang in + PDF index nếu thực sự nhìn), `OUTCOME_MATRIX`, `ACADEMIC/PED_VERDICT` cho affected scope, `P0/P1/P2`, `MINIMAL_DELTA` và lý do. Giữ nguyên 22/22 CONTENT_READY trước đó trừ khi phát hiện lỗi mới có chứng cứ rõ ràng; không tự phê duyệt merge/deploy.

**Không bao gồm:** toàn bộ 247 item public, đáp án/sơ đồ RD1 riêng tư, source SVG asset bytes, hoặc cổng RELEASE. Practice/Selfcheck đã được author byte-compare trước/sau Delta C, review độc lập tại đây chỉ phần Knowledge đã thay.
