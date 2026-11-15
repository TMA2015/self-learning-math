<!-- AUTHORING R05 STUDENT_FIRST Q18_PENDING 15/11/2026; R04 SOURCE_BLOB 8fd1c9d223ccab794ae20fc8f0206df32f0671c4 and signed R04 ready/receipt stay immutable until R05 Q18. -->
<!-- STANDARD_ID=SLM-THPT-QUALITY-ONE; STANDARD_VERSION=3.1.0; LEARNING_PATH=TOPIC; OUTER_PAGES=Kiến thức|Luyện tập|Tự kiểm tra; SOURCE_VERSION=R05_AUTHORING_CANDIDATE_Q18_PENDING; ORIGINAL36_INDEX_BLOB=7ac532a2c6d9368bf4f991c90092d327c07ea842; NEW22_BANK_BLOB=2e93db80384de53e208248eaa0396a7f487302ac -->
# CĐ08 — Giới hạn và tính liên tục

# Kiến thức

## 1. Từ một điểm đến gần, đến sát và đến đúng

Khi muốn đo chính xác một độ dài, ta có thể thu nhỏ sai số đo mãi, dù chưa bao giờ ghi được giá trị hoàn toàn chính xác ở một lần thử. Một dãy số cũng có thể tiến sát giá trị đích mà không có số hạng nào bằng đích. Sau đó ta sẽ gặp hiện tượng tương tự ở hàm số: điều xảy ra **gần một điểm** không nhất thiết trùng giá trị của hàm tại chính điểm ấy. Hiểu sự khác biệt đó là chìa khóa để xét tính liên tục, phân biệt các kiểu gián đoạn và chứng minh sự tồn tại nghiệm bằng định lý giá trị trung gian.

Ta bắt đầu bằng câu hỏi đơn giản: muốn nói “càng ngày càng gần 2”, khoảng cách phải nhỏ đi như thế nào? Khi trả lời được bằng sai số, ta mới dùng quy tắc đại số để tính giới hạn và mở rộng sang đồ thị.

### 1.1. Giới hạn dãy số qua sai số

<!-- LESSON_ID: TOP08-M01; OUTCOME_ID: TOP08-O01 -->

Ta xét dãy \(u_n=2+1/n\) với \(n\) nguyên dương. Mọi số hạng đều lớn hơn 2, nên không số hạng nào bằng 2. Tuy vậy, khi \(n\) tăng, khoảng cách \(|u_n-2|=1/n\) nhỏ dần và có thể nhỏ hơn **bất kỳ độ sai lệch dương nào** nếu \(n\) đủ lớn. Đó là ý nghĩa của câu “dãy tiến tới giới hạn 2”: không đòi chạm giá trị đích ở một chỉ số hữu hạn.

Nói chính xác, \(u_n\to L\) nếu với mọi \(\varepsilon>0\), từ một chỉ số đủ lớn trở đi luôn có \(|u_n-L|<\varepsilon\). Trong ví dụ, chỉ cần chọn \(N>1/\varepsilon\) và \(n\ge N\), ta được \(1/n<\varepsilon\). Việc chứng minh bằng khoảng cách cho thấy công thức giới hạn không chỉ là phép thế \(n=\infty\), mà là một khẳng định về mọi mức sai số.

![Các điểm dãy số tiến gần đường giới hạn L](../../visuals/THPT_TOPIC08_SEQUENCE_LIMIT_R05.svg)

*Đọc hình:* Đồ thị gồm đúng **tám điểm** \((n,2+1/n)\) với \(n=1,\ldots,8\). Từng điểm đều nằm **phía trên** đường ngang \(L=2\) và không chạm đường này; chỉ số \(n\) là số nguyên. Chính khoảng cách \(1/n\) giảm dần mới giải thích giới hạn, không phải việc kéo dài nét vẽ thành một đường liên tục.

**Ví dụ**

**Đề bài:** Cho dãy \(v_n=4-\dfrac2n\), \(n\ge1\). Chứng minh \(\lim v_n=4\) bằng sai số và xem dãy có nhận giá trị \(4\) không.

**Lời giải:** Khoảng cách \(|v_n-4|=2/n\). Với bất kỳ \(\varepsilon>0\), lấy \(N\) nguyên lớn hơn \(2/\varepsilon\); mọi \(n\ge N\) đều cho \(2/n<\varepsilon\), nên \(v_n\to4\). Không số hạng nào bằng \(4\) vì \(2/n>0\) khi \(n\ge1\).

**Vận dụng** Với \(v_n=1+3/n\), \(n\ge1\), dãy tiến tới số nào? Giải thích bằng khoảng cách.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

Giới hạn bằng 1 vì \(|v_n-1|=3/n\to0\). Nếu em cho rằng giới hạn phải là một số hạng, hãy thử giải \(1+3/n=1\) để thấy không có \(n\) hữu hạn nào thỏa, dù dãy vẫn tiến tới 1.

</details>

### 1.2. Dãy tiến vô cực và dãy dao động

<!-- LESSON_ID: TOP08-M02; OUTCOME_ID: TOP08-O02 -->

Một dãy không tiến gần số hữu hạn nào có thể tăng ra vô hạn hoặc dao động. Nếu các số hạng không tiến tới một số hữu hạn thì chắc chắn tiến +∞ hoặc −∞? Ta đã biết dấu số, n tăng, dãy chỉ số chẵn/lẻ. Có ba hành vi cần tách: hữu hạn, tiến vô cực có dấu, và không có giới hạn (dao động, có thể không bị chặn). u_n→+∞ nếu cuối cùng vượt mọi ngưỡng M, u_n→−∞ nếu cuối cùng nhỏ hơn −M. Dãy (−1)^n dao động giữa ±1: không có giới hạn hữu hạn nhưng cũng không tiến đến vô cực; xem hai dãy con chẵn/lẻ.

Chẳng hạn, v_n=−n² với n≥1 đi về −∞ vì với mọi M>0, n>√M thì v_n<−M. Còn w_n=(−1)^n có dãy con chẵn=1, lẻ=−1, nên không thể có cùng giới hạn. Chọn kiểm dãy con thay vì dựa trên vài số hạng.

**Ví dụ**

**Đề bài:** Xét \(a_n=n+(-1)^n\) và \(b_n=(-1)^n\). Dãy nào tiến tới \(+\infty\), dãy nào dao động?

**Lời giải:** Với \(a_n\), luôn có \(a_n\ge n-1\); khi \(n\) đủ lớn thì \(a_n\) vượt mọi ngưỡng dương, vậy \(a_n\to+\infty\) dù có thành phần đổi dấu. Với \(b_n\), hai dãy con chẵn và lẻ bằng \(1\) và \(-1\), nên không có giới hạn chung hay giới hạn vô cực có dấu.

**Vận dụng** u_n=n², n≥1, giới hạn là gì?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

+∞, vì n vượt mọi căn của ngưỡng dương.

Nếu viết 'vô hạn' cho (−1)^n, hãy liệt kê các số hạng chẵn và lẻ rồi xét giới hạn từng dãy con.

</details>

### 1.3. Giới hạn dãy lũy thừa

<!-- LESSON_ID: TOP08-M03; OUTCOME_ID: TOP08-O03 -->

Dãy q^n cho thấy điều kiện về trị tuyệt đối q quyết định giới hạn. Số hạng đổi dấu luân phiên có nhất thiết không hội tụ? Ta sử dụng lũy thừa số thực và trị tuyệt đối. Khi |q|<1, |q^n|=|q|^n→0 nên q^n→0, kể cả q âm. Nếu q=1 thì q^n=1; q=−1 dao động; nếu q>1 thì q^n→+∞; q<−1 cho các nhánh dấu luân phiên với độ lớn tăng, không có giới hạn vô cực có dấu. Trường hợp q=0 cho 0^n=0 với n≥1.

Xét ví dụ: Với q=−1/4, số hạng q^n đổi dấu nhưng có độ lớn 1/4^n→0, nên giới hạn là 0. Chọn trị tuyệt đối để nhìn thấy cơ chế hội tụ trước khi hỏi dấu.

**Ví dụ**

**Đề bài:** Tính \(\lim_{n\to\infty}(-3/5)^n\) và so với \((-1)^n\).

**Lời giải:** Vì \(|-3/5|=3/5<1\), độ lớn \((3/5)^n\to0\), nên \((-3/5)^n\to0\) dù luân phiên dấu. Ngược lại \((-1)^n\) có độ lớn luôn bằng \(1\), hai dãy con trái dấu, không hội tụ.

**Vận dụng** lim(n→∞)(3/2)^n là gì?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

+∞ vì 3/2>1 và lũy thừa tăng không bị chặn.

Nếu nhầm q âm với không hội tụ, so (−1/4)^n và (−1)^n qua |q|.

</details>

### 1.4. Tính giới hạn dãy phân thức

<!-- LESSON_ID: TOP08-M04; OUTCOME_ID: TOP08-O04 -->

Ta tính giới hạn các tổng và tỉ số nhưng mẫu cần được kiểm soát. Tại sao ký hiệu ∞/∞ không giúp tính giới hạn dãy phân thức? Ta bắt đầu từ giới hạn của 1/n, phép cộng/nhân/chia với mẫu giới hạn khác 0. Quy tắc cộng, nhân, chia giới hạn hữu hạn chỉ dùng trực tiếp khi các giới hạn liên quan hữu hạn và mẫu giới hạn khác 0. Đối với tỉ số đa thức theo n, chia cho lũy thừa cao nhất để các hạng 1/n^k tiến 0. Nếu có căn chứa n², nhớ n>0 nên √(n²)=n, còn với biến thực x có thể âm phải giữ |x|.

Chẳng hạn, lim(n→∞)(3n²+n)/(n²+7)=lim(3+1/n)/(1+7/n²)=3. Chọn bậc 2 vì đây là lũy thừa lớn nhất; sau chia mẫu tiến 1 khác 0.

**Ví dụ**

**Đề bài:** Tính \(\lim_{n\to\infty}\dfrac{5n^2-n+2}{2n^2+3}\).

**Lời giải:** Chia cả tử và mẫu cho \(n^2\): \(\dfrac{5-1/n+2/n^2}{2+3/n^2}\to\dfrac52\). Mẫu mới tiến tới \(2\ne0\), nên quy tắc giới hạn của thương được phép áp dụng.

**Vận dụng** lim(n→∞)(4n+3)/(2n−1) bằng bao nhiêu?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

2, vì chia cho n cho (4+3/n)/(2−1/n)→2.

Nếu thế 'n=∞', hãy thực hiện phép chia n^k để chuyển sang giới hạn có thể tính.

</details>

### 1.5. Tổng cấp số nhân vô hạn

<!-- LESSON_ID: TOP08-M05; OUTCOME_ID: TOP08-O05 -->

Tổng vô hạn của cấp số nhân chỉ hữu hạn khi điều kiện hội tụ được thỏa. Vô hạn số hạng có thể cộng thành hữu hạn như thế nào mà không mâu thuẫn? Cần nhớ CĐ07 định nghĩa CSN và tổng S_n hữu hạn, giới hạn q^n. Số S=∑_{k=0}^∞ a q^k được định nghĩa là giới hạn của các tổng riêng S_n, không phải phép cộng xong vô hạn bước. Nếu |q|<1, q^n→0 và S_n=a(1−q^n)/(1−q)→a/(1−q). Nếu |q|≥1 với a≠0 thì số hạng không tiến 0 nên tổng riêng không thể hội tụ. Phần dư R_n=a q^n/(1−q) quyết định sai số.

Chẳng hạn, 10+5+2,5+… có a=10,q=1/2; S_n=20(1−(1/2)^n), phần dư=20/2^n nên tổng tiến 20. Ta chọn xem S_n trước S∞ để thấy nguồn gốc điều kiện hội tụ.

**Ví dụ**

**Đề bài:** Tính tổng vô hạn của \(8-4+2-1+\cdots\), và tính phần dư sau hai số hạng đầu.

**Lời giải:** Đây là cấp số nhân với \(a=8,q=-1/2\) và \(|q|<1\). Tổng vô hạn là \(S_\infty=8/(1+1/2)=16/3\). Hai số hạng đầu có tổng \(S_2=8-4=4\); phần dư có dấu \(S_\infty-S_2=4/3\), đúng công thức \(R_2=8(-1/2)^2/(1+1/2)=4/3\).

**Vận dụng** 6+2+2/3+… có tổng vô hạn bao nhiêu?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

9, vì q=1/3 và S=6/(1−1/3)=9.

Nếu dùng công thức khi q=1 hoặc −1, hãy xét giới hạn của số hạng trước: nó không về 0.

</details>

## 2. Từ dãy rời rạc tới hành vi của hàm số gần một điểm

Ở dãy số, ta tiến bằng những chỉ số nguyên ngày càng lớn. Với hàm số, ta có thể tiến tới cùng một hoành độ từ **bên trái hoặc bên phải** bằng các giá trị thực rất gần nhau. Đôi khi hàm bị khuyết ngay tại điểm đó, nhưng hai phía vẫn có thể cùng tiến tới một số. Ngược lại, khi hai phía tiến tới hai giá trị khác nhau, ta không thể gọi đó là một giới hạn hai phía. Nhìn lần lượt hai phía sẽ giúp em tự chọn đúng phép biến đổi khi gặp dạng chưa xác định.

### 2.1. Giới hạn hàm tại một điểm

<!-- LESSON_ID: TOP08-M06; OUTCOME_ID: TOP08-O06 -->

Vì sao một hàm không được định nghĩa tại x=a mà vẫn có giới hạn ở a? Để xác định điều đó, cần xét hàm số và phép biến đổi trên miền xác định. lim(x→a)f(x)=L hỏi giá trị f(x) khi x đủ gần a nhưng x≠a và thuộc miền xác định. Giá trị f(a) có thể khác L hoặc không tồn tại. Để tính giới hạn của phân thức có dạng 0/0, trước tiên nêu điều kiện loại điểm rồi biến đổi tương đương trên lân cận bỏ điểm, tuyệt đối không dùng kết quả để tự cho f(a) bằng L.

Chẳng hạn, f(x)=(x²−5x+6)/(x−2) với x≠2. Tử=(x−2)(x−3), rút còn x−3 trên miền x≠2; lim(x→2)f(x)=−1 dù f(2) không xác định. Chọn phân tích nhân tử vì thế trực tiếp cho 0/0.

**Ví dụ**

**Đề bài:** Với \(f(x)=\dfrac{x^2-1}{x-1}\), \(x\ne1\), tính \(\lim_{x\to1}f(x)\). Có thể suy \(f(1)=2\) không?

**Lời giải:** Với \(x\ne1\), \(x^2-1=(x-1)(x+1)\) nên \(f(x)=x+1\), suy ra giới hạn tại \(1\) là \(2\). Hàm gốc **không** xác định ở \(1\); rút gọn trên lân cận bỏ điểm không cho phép tự gán \(f(1)\).

**Vận dụng** lim(x→0) [x(x−4)]/x (x≠0) bằng bao nhiêu?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

−4 do biểu thức rút còn x−4 trên miền x≠0.

Nếu gọi 0/0 là giới hạn, xem hai hàm (x−2)/(x−2) và 2(x−2)/(x−2), cùng thế 0/0 nhưng có giới hạn 1 và 2.

</details>

### 2.2. Giới hạn trái và phải

<!-- LESSON_ID: TOP08-M07; OUTCOME_ID: TOP08-O07 -->

Tiến đến điểm từ trái và phải có thể cho hai kết quả khác nhau. Hàm có thể tiến đến hai giá trị khác nhau khi ta lại gần từ trái và từ phải không? Ta đã biết bất đẳng thức x<a/x>a, hàm xác định từng phần. Giới hạn trái lim(x→a⁻) xét x<a, phải lim(x→a⁺) xét x>a, đều đi trong miền xác định. Giới hạn hai phía hữu hạn tồn tại và bằng L khi và chỉ khi cả hai giới hạn một phía cùng tồn tại và bằng L. f(a) không quyết định hai giới hạn này; đọc điều kiện từng nhánh trước khi thế.

Chẳng hạn, f(x)=x+2 nếu x<0; f(x)=2x+1 nếu x≥0. Khi x→0⁻, f→2; khi x→0⁺, f→1. Hai giá trị khác nên không có giới hạn hai phía, mặc dù f(0)=1. Chọn phương pháp tách nhánh vì hàm từng phần.

**Ví dụ**

**Đề bài:** Cho \(f(x)=x+3\) khi \(x<1\), \(f(x)=x^2+1\) khi \(x\ge1\). Tính hai giới hạn một phía ở \(1\).

**Lời giải:** Từ trái dùng nhánh \(x+3\), được \(4\); từ phải dùng \(x^2+1\), được \(2\). Hai phía khác nhau nên giới hạn hai phía tại \(1\) không tồn tại, dù \(f(1)=2\) xác định. Hình nhảy ở bài sau có điểm nhảy ở \(0\), không phải ví dụ này.

**Vận dụng** lim(x→0⁻)|x|/x và lim(x→0⁺)|x|/x bằng gì?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

−1 và +1, nên giới hạn hai phía không tồn tại.

Nếu chỉ thế nhánh x≥0 tại 0, hãy vẽ hai mũi tên tiến vào 0 từ hai phía.

</details>

### 2.3. Giới hạn vô cực gần điểm

<!-- LESSON_ID: TOP08-M08; OUTCOME_ID: TOP08-O08 -->

Khi hàm tăng không bị chặn gần điểm, ta gặp giới hạn vô cực. Một phân thức có mẫu tiến đến 0 thì luôn tiến +∞ không? Ta sử dụng bảng dấu, 0⁺ và 0⁻, tử khác 0 gần điểm. Khi tử tiến đến một số khác 0 và mẫu tiến 0, giới hạn có thể là +∞ hoặc −∞ tùy dấu tử/mẫu trên từng phía. Kí hiệu f(x)→+∞ hay −∞ mô tả không bị chặn theo dấu, không phải giới hạn hữu hạn. Nếu trái và phải vô cực khác dấu thì không thể nói có giới hạn vô cực chung có một dấu.

Xét ví dụ: f(x)=1/(x−5): x→5⁻ thì mẫu âm nhỏ ⇒ f→−∞; x→5⁺ thì mẫu dương nhỏ ⇒ f→+∞. Chọn bảng dấu mẫu vì tử dương không đổi.

**Ví dụ**

**Đề bài:** Xét \(f(x)=\dfrac{x-4}{x-3}\). Nêu giới hạn khi \(x\to3^-\) và \(x\to3^+\).

**Lời giải:** Gần \(3\), tử \(x-4\) âm và gần \(-1\). Từ trái, mẫu \(x-3<0\) rất nhỏ nên \(f(x)\to+\infty\); từ phải, mẫu dương rất nhỏ nên \(f(x)\to-\infty\). Không nhập hai giới hạn khác dấu thành một kết quả hữu hạn.

**Vận dụng** lim(x→3⁻) 1/(3−x) là gì?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

+∞ vì 3−x tiến 0 từ phía dương.

Nếu cứ thấy mẫu 0 là +∞, đặt x=4,99 và 5,01 để kiểm dấu mẫu.

</details>

### 2.4. Giới hạn khi x tiến vô cực

<!-- LESSON_ID: TOP08-M09; OUTCOME_ID: TOP08-O09 -->

Ra xa trên trục hoành lại dẫn đến giới hạn ở vô cực. Hai đa thức đều rất lớn thì tỉ số sẽ luôn tiến đến 1? Ta bắt đầu từ quy tắc giới hạn 1/x^k→0 và dấu x âm. Với phân thức đa thức, so bậc tử/mẫu và chia cho lũy thừa x thích hợp. Nếu bậc bằng nhau thì giới hạn là tỉ số hệ số đầu (mẫu đầu khác 0); nếu bậc tử nhỏ hơn, giới hạn 0. Nếu bậc tử lớn hơn, cần xét dấu và bậc của phần còn lại, không tự viết ∞. Khi x→−∞, x lũy thừa chẵn dương, lẻ âm.

Chẳng hạn, lim(x→−∞)(2x²+5x)/(5x²−1) = lim(2+5/x)/(5−1/x²)=2/5. Chọn chia x² vì hai đa thức cùng bậc; −∞ không đổi dấu x².

**Ví dụ**

**Đề bài:** Tính \(\lim_{x\to-\infty}\dfrac{3x^2-2x}{x^2+1}\).

**Lời giải:** Chia tử và mẫu cho \(x^2\ne0\) với \(|x|\) lớn: \(\dfrac{3-2/x}{1+1/x^2}\to3\). Dù \(x\) âm khi tiến về \(-\infty\), \(x^2\) vẫn dương; mẫu mới tiến về \(1\ne0\).

**Vận dụng** lim(x→+∞)(−3x³+1)/(x³+4) bằng bao nhiêu?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

−3; chia cả tử/mẫu cho x³.

Nếu giữ dấu 'x âm' ở mọi hạng, tách x² và x³ ra để so dấu của từng lũy thừa.

</details>

### 2.5. Khử dạng 0/0 bằng nhân tử

<!-- LESSON_ID: TOP08-M10; OUTCOME_ID: TOP08-O10 -->

Thế trực tiếp cho dạng 0/0 đòi hỏi biến đổi có thể khử hợp lệ. Làm sao biến một biểu thức 'không xác định ở điểm' thành giới hạn tính được? Cần nhớ hằng đẳng thức và phân thức khác 0 ở lân cận bỏ điểm. 0/0 là dạng vô định khi thế thử, không phải kết quả. Tìm nhân tử chung và khử chỉ trên các x khác điểm cấm; biểu thức sau khử giúp tính giới hạn nhưng không mở rộng miền của hàm gốc. Khi nhân tử không triệt tiêu hoặc hàm từng nhánh khác, phải kiểm lại một phía.

Chẳng hạn, (x²−7x+12)/(x−3) có tử (x−3)(x−4); với x≠3 rút thành x−4, giới hạn tại 3 là −1. Chọn phân tích nhân tử vì nghiệm tử trùng nghiệm mẫu.

**Ví dụ**

**Đề bài:** Tính \(\lim_{x\to-2}\dfrac{x^2+5x+6}{x+2}\).

**Lời giải:** Tử \((x+2)(x+3)\). Với \(x\ne-2\), phân thức bằng \(x+3\), do đó giới hạn tại \(-2\) là \(1\). Dạng \(0/0\) ban đầu chỉ báo cần biến đổi, không phải đáp án.

**Vận dụng** lim(x→6)(x²−36)/(x−6) bằng gì?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

12, vì tử=(x−6)(x+6) và x≠6.

Nếu viết 0/0 hoặc giá trị hàm tại x=3, trở lại định nghĩa lân cận loại điểm.

</details>

### 2.6. Khử dạng 0/0 bằng liên hợp

<!-- LESSON_ID: TOP08-M11; OUTCOME_ID: TOP08-O11 -->

Với căn thức, nhân liên hợp làm lộ nhân tử chung. Khi tử chứa √(x+a)−b, vì sao nhân liên hợp giúp thay dạng 0/0 bằng một phân thức có giới hạn? Để xác định điều đó, cần xét (A−B)(A+B)=A²−B², miền căn. Với phân thức chứa √(x+c)−d và điểm thế cho tử/mẫu đều 0, nhân cả tử và mẫu với liên hợp √(x+c)+d để trừ hai bình phương, lộ nhân tử khử. Phép biến đổi chỉ hợp lệ trên miền gốc, khi mẫu liên hợp khác 0; sau khử mới thế giới hạn. Không dùng phép nhân liên hợp để 'thay' điều kiện căn.

Chẳng hạn, lim(x→0)(√(x+16)−4)/x: nhân liên hợp (√(x+16)+4), được 1/(√(x+16)+4) với x≠0 nên giới hạn 1/8. Chọn liên hợp vì bình phương sẽ tạo x để khử.

**Ví dụ**

**Đề bài:** Tính \(\lim_{x\to1}\dfrac{\sqrt{x+3}-2}{x-1}\).

**Lời giải:** Trong miền \(x+3\ge0\) và \(x\ne1\), nhân liên hợp: \(\dfrac{(\sqrt{x+3}-2)(\sqrt{x+3}+2)}{(x-1)(\sqrt{x+3}+2)}=\dfrac1{\sqrt{x+3}+2}\). Khi \(x\to1\), mẫu tiến tới \(4\), nên giới hạn bằng \(1/4\).

**Vận dụng** lim(x→0)(√(x+25)−5)/x bằng bao nhiêu?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

1/10, vì bằng 1/(√(x+25)+5) gần x=0.

Nếu căn khiến bạn 'bình phương cả phân thức', thử nhân liên hợp đúng dạng và giữ điều kiện x+c≥0.

</details>

### 2.7. Biến đổi dạng vô cực trừ vô cực

<!-- LESSON_ID: TOP08-M12; OUTCOME_ID: TOP08-O12 -->

Dạng vô cực trừ vô cực cần biến đổi mà không được bỏ dấu. Tại sao √(x²) không luôn bằng x? Ta đã biết trị tuyệt đối |x|, nhân liên hợp, giới hạn 1/x. Khi x→+∞, √(x²)=x vì x>0; khi x→−∞, √(x²)=−x. Với √(x²+a x)−x ở +∞, nhân liên hợp để biến hiệu hai lượng lớn thành phân thức có giới hạn. Ở −∞ không được chia bằng cùng giả thiết x>0. Giới hạn có thể hữu hạn dù hai thành phần đều vô hạn.

Chẳng hạn, lim(x→+∞)[√(x²+6x)−x] = lim(6x)/[√(x²+6x)+x]=lim 6/[√(1+6/x)+1]=3. Chọn nhân liên hợp thay cho viết '∞−∞'.

**Ví dụ**

**Đề bài:** Tính \(\lim_{x\to+\infty}\left(\sqrt{x^2+8x}-x\right)\).

**Lời giải:** Nhân liên hợp được \(\dfrac{8x}{\sqrt{x^2+8x}+x}\). Vì \(x>0\) khi đủ lớn, chia cho \(x\) được \(\dfrac8{\sqrt{1+8/x}+1}\to4\). Không dùng \(\sqrt{x^2}=x\) nếu biến tiến về \(-\infty\).

**Vận dụng** lim(x→+∞)[√(x²+8x)−x] bằng bao nhiêu?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

4, bằng 8/[√(1+8/x)+1]→4.

Nếu quên dấu x, thay x=−10 để thấy √(x²)=10 chứ không phải −10.

</details>

## 3. Khi giới hạn gần điểm khớp với chính giá trị tại điểm

Một đường cong có thể đi sát tới cùng một độ cao từ hai phía, nhưng điểm được tô đặc trên đồ thị lại nằm ở nơi khác. Ta chỉ gọi hàm **liên tục tại điểm** nếu giá trị được xác định ở điểm đó và bằng giới hạn từ hai phía. Nhờ vậy, hình vẽ không phải dấu hiệu để đoán bằng mắt: ta có thể kiểm chính xác một lỗ thủng, một bước nhảy hay một tiệm cận vô cực.

Tính liên tục nối giới hạn với giá trị hàm. Ta sẽ thấy sự khác biệt giữa một lỗ có thể vá, một bước nhảy và một nhánh lao ra vô cực trước khi dùng quy tắc liên tục.

### 3.1. Liên tục tại một điểm

<!-- LESSON_ID: TOP08-M13; OUTCOME_ID: TOP08-O13 -->

Giới hạn có thể tồn tại nhưng hàm vẫn 'đứt' tại đúng điểm không? Ta sử dụng giới hạn hai phía, giá trị hàm và đẳng thức. f liên tục tại a khi a thuộc miền xác định, lim(x→a)f(x) tồn tại hữu hạn và bằng f(a). Chỉ một trong ba điều không đủ. Hàm có thể sửa bằng gán lại f(a) nếu giới hạn hữu hạn tồn tại; không thể sửa một cú nhảy với hai giới hạn một phía khác nhau chỉ bằng đổi một giá trị.

Xét ví dụ: Đặt f(x)=(x²−5x+6)/(x−2) nếu x≠2 và f(2)=k. Như M06, lim tại 2 là −1 nên chỉ k=−1 cho liên tục. Chọn so giới hạn đã tính với điểm thay vì giả định thế được phân thức gốc.

**Ví dụ**

**Đề bài:** Cho \(f(x)=\dfrac{x^2-9}{x-3}\) khi \(x\ne3\), và \(f(3)=k\). Tìm \(k\) để liên tục tại \(3\).

**Lời giải:** Với \(x\ne3\), \(f(x)=x+3\), nên \(\lim_{x\to3}f(x)=6\). Điều kiện liên tục tại \(3\) yêu cầu \(f(3)=k\) bằng giới hạn, vậy \(k=6\). Nếu \(k\ne6\), đó là gián đoạn có thể khử.

**Vận dụng** Cho f(x)=sin x khi x≠0 và f(0)=c; cần c bằng gì để liên tục?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

c=0 vì lim(x→0)sin x=0, bằng giá trị ở điểm.

Nếu quên hàm phải được định nghĩa tại a, so 'hole' và 'point f(a)=...' trên đồ thị.

</details>

### 3.2. Ba kiểu gián đoạn thường gặp

<!-- LESSON_ID: TOP08-M14; OUTCOME_ID: TOP08-O14 -->

Giới hạn và giá trị tại điểm có thể lệch nhau theo những cách rất khác. Đồ thị 'đứt' có phải lúc nào cũng vá được bằng một điểm mới? Ta bắt đầu từ giới hạn trái/phải và miền xác định. Gián đoạn khử được khi giới hạn hai phía hữu hạn tồn tại nhưng giá trị tại điểm thiếu/khác; có thể đặt lại f(a)=L. Gián đoạn nhảy khi hai giới hạn hữu hạn một phía khác nhau, không thể vá bằng một giá trị. Gián đoạn vô cực khi ít nhất một phía tăng không bị chặn; cần xem chiều và dấu. Nhận dạng dựa vào giới hạn, không chỉ nét đồ thị.

Chẳng hạn, f=|x|/x (x≠0) có giới hạn trái −1, phải +1 ⇒ gián đoạn nhảy tại 0. g=1/x có hai phía ±∞ ⇒ gián đoạn vô cực tại 0. h=(x²−4)/(x−2) nếu x≠2 rút x+2, lim=4 ⇒ hole khử được ở 2. Chọn so một phía trước khi kết luận.

Ngay tại hình này, ta xét hàm từng đoạn \(f(x)=x+2\) khi \(x<0\), còn \(f(x)=2x+1\) khi \(x\ge0\). Khi \(x\to0^-\), nhánh trái tiến tới 2 nhưng **không lấy** \((0,2)\); khi \(x\to0^+\), nhánh phải tiến tới 1 và có điểm đặc \((0,1)\), nên \(f(0)=1\). Vì 2 khác 1, hàm **không có giới hạn hai phía** ở 0 và không liên tục tại 0. Điều này khác ví dụ \(|x|/x\) ở trên: cả hai là gián đoạn nhảy nhưng độ cao một phía không giống nhau.

![Hai phía của điểm nhảy có giới hạn khác nhau](../../visuals/THPT_TOPIC08_ONE_SIDED_JUMP_R01.svg)

*Đọc hình:* Nhánh trái \(y=x+2\) có chấm rỗng \((0,2)\); nhánh phải \(y=2x+1\) có chấm đặc \((0,1)\). Chấm đặc cho biết giá trị **tại** 0, còn độ cao khi tiến tới 0 từ hai phía là hai giới hạn riêng, khác nhau.

**Ví dụ**

**Đề bài:** Xét \(g(x)=\dfrac1{(x-3)^2}\) khi \(x\ne3\). Phân loại hành vi tại \(x=3\); có thể làm liên tục bằng cách bổ sung duy nhất \(g(3)\) không?

**Lời giải:** Khi \(x\to3^-\) hoặc \(x\to3^+\), mẫu \((x-3)^2\) luôn dương và tiến \(0^+\), nên cả hai phía \(g(x)\to+\infty\). Đây là gián đoạn vô cực: không có giới hạn hữu hạn ở \(3\), vì vậy không thể sửa tính liên tục chỉ bằng gán một giá trị tại \(3\).

**Vận dụng** Nếu g(x)=(x²−1)/(x−1) với x≠1 và g(1)=3, thuộc kiểu gián đoạn nào?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

Khử được: lim(x→1)g(x)=2 nhưng g(1)=3; đổi g(1)=2 thì liên tục.

Nếu gọi tất cả lỗ bằng vô cực, kiểm có khử được nhân tử chung hay không.

</details>

### 3.3. Liên tục trên khoảng và đoạn

<!-- LESSON_ID: TOP08-M15; OUTCOME_ID: TOP08-O15 -->

Trên khoảng và đoạn, tính liên tục phải được xét cả đầu mút. Hàm √x có thiếu 'giới hạn trái' tại x=0 trong miền của nó, vậy có thể liên tục trên [0,9] không? Cần nhớ miền căn không âm, giới hạn một phía. Hàm liên tục trên (a,b) khi liên tục tại từng điểm bên trong; liên tục trên [a,b] còn yêu cầu liên tục từ phải tại a và từ trái tại b, theo miền xác định. Ở đầu mút không yêu cầu xét bên ngoài miền. Nếu miền là tập hợp nhiều khoảng rời, không tuyên bố 'liên tục qua lỗ' ở điểm ngoài miền.

Chẳng hạn, f(x)=√x trên [0,9] liên tục bên trong vì căn liên tục trên [0,+∞), tại 0 giới hạn phải=0=f(0) và tại 9 giới hạn trái=3=f(9). Chọn kiểm đầu mút theo đúng phía trong đoạn.

**Ví dụ**

**Đề bài:** Xét \(f(x)=\sqrt{9-x^2}\) với miền \([-3,3]\). Hàm có liên tục trên cả đoạn không?

**Lời giải:** Đa thức \(9-x^2\) không âm trên \([-3,3]\); phép căn liên tục trên các giá trị không âm. Bên trong đoạn, hợp hàm liên tục; tại \(-3\) chỉ xét giới hạn từ phải bằng \(0=f(-3)\), tại \(3\) chỉ xét từ trái bằng \(0=f(3)\). Vì vậy hàm liên tục trên đoạn theo miền xác định.

**Vận dụng** g(x)=√(16−x²) có liên tục trên [−4,4] không?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

Có; trong đoạn biểu thức trong căn không âm và liên tục, tại −4 chỉ cần giới hạn phải, tại 4 chỉ cần trái.

Nếu hỏi giới hạn trái của √x ở 0 trong ℝ và nói 'không liên tục', hãy trở về định nghĩa liên tục trên miền [0,9].

</details>

### 3.4. Miền xác định và phép toán liên tục

<!-- LESSON_ID: TOP08-M16; OUTCOME_ID: TOP08-O16 -->

Phép toán giữ tính liên tục khi miền và điều kiện phù hợp. Nếu mỗi phép tính trong hàm trông quen thuộc, có thể bỏ qua miền xác định khi kết luận liên tục? Để xác định điều đó, cần xét đa thức, căn, mẫu khác 0, hợp hàm. Đa thức liên tục trên ℝ; căn liên tục nơi đối số không âm; phân thức liên tục tại điểm có mẫu khác 0, và tổng/tích/hợp các hàm liên tục vẫn liên tục khi các điều kiện miền được giữ. Luôn tìm miền chung của căn và mẫu trước khi viết khoảng liên tục. Tại đầu mút của miền liên tục tương đối có thể chỉ xét một phía.

Chẳng hạn, f(x)=(x²+1)/(x−1) có miền ℝ\{1} nên liên tục trên (−∞,1) và (1,∞), không thể nói liên tục trên toàn ℝ. Phép chia thất bại tại 1 dù tử vẫn có nghĩa.

**Ví dụ**

**Đề bài:** Tìm miền xác định và các phần liên tục của \(g(x)=\dfrac{\sqrt{(x-1)(x-4)}}{x-3}\).

**Lời giải:** Điều kiện căn: \((x-1)(x-4)\ge0\) nên \(x\le1\) hoặc \(x\ge4\). Điều kiện mẫu \(x\ne3\) tự thỏa trong miền vừa tìm. Vậy \(D=(-\infty,1]\cup[4,+\infty)\), và hàm liên tục trên từng thành phần; ở \(1\), \(4\) dùng giới hạn một phía trong miền. Không kết luận liên tục xuyên khoảng trống \((1,4)\).

**Vận dụng** h(x)=√(x+2)/(x+1): miền xác định là gì?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

x≥−2 và x≠−1; liên tục trên [−2,−1) và (−1,∞) theo miền.

Nếu kiểm căn x+2≥0 nhưng bỏ mẫu x+1≠0, hãy ghi hai điều kiện bằng dấu 'và'.

</details>

## 4. Từ đường cong không đứt tới khẳng định có nghiệm

Nếu một hàm liên tục trên đoạn và nhận giá trị âm ở đầu này, dương ở đầu kia, nó buộc phải đi qua mức 0 ở một vị trí giữa hai đầu. Đây không phải suy đoán từ vài điểm trên đồ thị mà là định lý giá trị trung gian. Từ bảo đảm **tồn tại** ấy, ta có thể dùng phép chia đôi để tìm khoảng ngày càng nhỏ chứa nghiệm, dù chưa biết công thức nghiệm chính xác.

Biết đồ thị không đứt và hai đầu một khoảng có dấu trái nhau, ta có thể kết luận có điểm cắt trục ngay cả khi chưa giải phương trình chính xác. Phương pháp chia đôi biến kết luận tồn tại ấy thành cách tìm xấp xỉ.

### 4.1. Định lí giá trị trung gian

<!-- LESSON_ID: TOP08-M17; OUTCOME_ID: TOP08-O17 -->

Làm sao biết một phương trình có nghiệm dù chưa tìm được công thức nghiệm? Ta đã biết liên tục trên đoạn đóng, dấu âm/dương. Nếu f liên tục trên [a,b] và f(a)f(b)<0 thì theo định lí giá trị trung gian có ít nhất một c∈(a,b) với f(c)=0. Định lí cho tồn tại, không tự cho duy nhất; nếu f(a)f(b)>0 cũng không đủ kết luận vô nghiệm. Muốn duy nhất cần lý do độc lập (đơn điệu, v.v.). Không dùng IVT khi có điểm gián đoạn trong đoạn.

Chẳng hạn, g(x)=x³−2 liên tục trên [1,2]; g(1)=−1, g(2)=6, nên tồn tại c∈(1,2) với g(c)=0. Có nghiệm thực ∛2, nhưng IVT chỉ khẳng định tồn tại; ta chọn IVT để làm chứng cứ không cần tính căn chính xác.

**Ví dụ**

**Đề bài:** Chứng minh phương trình \(x^3-5=0\) có ít nhất một nghiệm trong \((1,2)\).

**Lời giải:** Đa thức \(g(x)=x^3-5\) liên tục trên \([1,2]\). Ta có \(g(1)=-4<0\) và \(g(2)=3>0\); theo định lí giá trị trung gian tồn tại \(c\in(1,2)\) với \(g(c)=0\). Chưa thể chỉ từ IVT khẳng định duy nhất.

**Vận dụng** x²−3 có nghiệm trong (1,2) theo IVT không?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

Có; f(1)=−2<0, f(2)=1>0 và đa thức liên tục.

Nếu viết 'duy nhất do IVT', thử g(x)=x(x−1)(x+1) trên [−2,2] có nhiều nghiệm mặc dù đổi dấu hai đầu.

</details>

### 4.2. Chia đôi khoảng để khoanh nghiệm

<!-- LESSON_ID: TOP08-M18; OUTCOME_ID: TOP08-O18 -->

Sau kết luận tồn tại nghiệm, chia đôi giúp khoanh nghiệm bằng phép tính. Sau khi biết có nghiệm, làm thế nào khoanh vùng được nó mà chưa dùng máy tính? Ta sử dụng IVT, giá trị tại trung điểm, dấu trái/phải. Chia đôi đoạn [a,b] có f liên tục và hai đầu trái dấu: tại m=(a+b)/2, nếu f(m)=0 thì tìm xong; nếu không, giữ nửa đoạn có hai giá trị đầu trái dấu. Lặp lại, độ dài đoạn sau k bước bằng (b−a)/2^k. Phải nói rõ mô hình toán có miền t và đơn vị; nghiệm mô hình không tự là kết luận thực nghiệm.

Xét ví dụ: Với g(x)=x²−2 trên [1,2], g(1)=−1,g(2)=2. Bước 1 m=1,5: g=0,25>0 giữ [1,1,5]. Bước 2 m=1,25: g=−0,4375<0 giữ [1,25,1,5]; nghiệm √2 vẫn trong khoảng dài 0,25. Chọn dấu bảo toàn điều kiện IVT sau mỗi bước.

![Định lý giá trị trung gian và chia đôi đoạn](../../visuals/THPT_TOPIC08_IVT_BISECTION_R01.svg)

*Đọc hình:* Với \(f(x)=x^2-2\), đầu \(x=1\) có \(f=-1\) và \(x=2\) có \(f=2\), nên có ít nhất một nghiệm giữa chúng. Tại trung điểm \(1{,}5\), \(f=0{,}25>0\), vì thế bước đầu giữ \([1,1{,}5]\). Định lý bảo đảm **tồn tại**, còn tính duy nhất cần lập luận riêng.

**Ví dụ**

**Đề bài:** Dùng hai bước chia đôi để khoanh nghiệm của \(x^2-5=0\) trong \([2,3]\).

**Lời giải:** Vì \(g(2)=-1<0\), \(g(3)=4>0\), bước 1 lấy \(m=2{,}5\) có \(g(m)=1{,}25>0\), giữ \([2,2{,}5]\). Bước 2 có \(m=2{,}25\), \(g(m)=0{,}0625>0\), giữ \([2,2{,}25]\), dài \(0{,}25\). Các đầu đoạn luôn trái dấu; hình phía trên dùng \(x^2-2\), không phải phương trình này.

**Vận dụng** Với x²−3 trên [1,2], sau một bước chia đôi giữ nửa nào?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

g(1,5)=−0,75, g(2)=1 nên giữ [1,5; 2]; g vẫn đổi dấu.

Nếu chọn nửa không trái dấu, viết bảng f(a),f(m),f(b) và tìm cặp tích âm trước khi loại nửa còn lại.

</details>

<!-- AUTHORING_ONLY: source-locked figure custody and interaction SPEC_ONLY notes preserved in original R02 blob ef118d499f0c6bb4828f5f2db169e3135b187169. The learner text already places verified SVG inline. -->

# Luyện tập

Em hãy tự giải trước khi mở **Lời giải**. Với giới hạn, nêu miền xác định, hướng tiến đến và dạng vô định; với liên tục, kiểm giá trị tại điểm và hai giới hạn; với IVT, kiểm **liên tục trên đoạn** rồi mới xét dấu ở hai đầu. Khi làm sai, quay lại đúng mục Kiến thức và thử một cách giải khác.

## 1. Giới hạn của dãy số

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-P02; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O01; NOT_NEW_ID -->

**Bài 1.** Với uₙ=−4+9/n, hãy chỉ ra giới hạn và giải thích vì sao không phải −4+9.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** −4.

**Lời giải và lời giải thích:** Hiệu uₙ−(−4)=9/n→0; số 9 không giữ nguyên mà được chia cho n đang tăng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-C01; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O01; NOT_NEW_ID -->

**Bài 2.** Với uₙ=7+3/n, số 7 có ý nghĩa gì khi n tăng mãi?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Giới hạn của dãy là 7.

**Lời giải và lời giải thích:** Khoảng cách từ uₙ đến 7 bằng 3/n, tiến về 0. Như vậy 7 không cần là một số hạng của dãy.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P01; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O01; NOT_NEW_ID -->

**Bài 3.** Dãy u_n=5+4/n với n nguyên dương. Tìm giới hạn khi n→∞; số 5 có nhất thiết là số hạng nào đó của dãy không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** lim u_n=5; không số hạng nào bằng 5.

**Lời giải có suy luận:** Vì 4/n→0 nên 5+4/n→5. Với mọi n≥1, u_n−5=4/n>0 nên u_n không bao giờ bằng 5. Giới hạn nói về giá trị tiến tới, không yêu cầu dãy đạt giá trị đó.

**Nếu làm sai:** Nếu cho rằng giới hạn phải là số hạng, thử giải 4/n=0 với n hữu hạn.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-P05; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O02; NOT_NEW_ID -->

**Bài 4.** Dãy vₙ=(−1)ⁿ có giới hạn hữu hạn hoặc ±∞ không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Không có giới hạn theo các loại đã học.

**Lời giải và lời giải thích:** Các số hạng chẵn bằng 1 và lẻ bằng −1, nên không dần về một số hay vô cực có dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-C02; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O02; NOT_NEW_ID -->

**Bài 5.** Dãy uₙ=−2n có tiến đến −∞ hay không? Giải thích bằng lời.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có, uₙ→−∞.

**Lời giải và lời giải thích:** Với mọi M>0, từ n>M/2 thì −2n<−M; các số hạng ngày càng nhỏ theo chiều âm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P02; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O02; NOT_NEW_ID -->

**Bài 6.** Xét v_n=(−1)^n+1/n, n≥1. Dãy có giới hạn hữu hạn hay giới hạn ±∞ không? Giải thích bằng hai dãy chỉ số chẵn/lẻ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Không có giới hạn hữu hạn hay ±∞.

**Lời giải có suy luận:** Với n=2k, v_{2k}=1+1/(2k)→1. Với n=2k+1, v_{2k+1}=−1+1/(2k+1)→−1. Hai dãy con tiến tới hai số khác nhau; không thể có giới hạn chung, và cũng không tiến tới vô cực cùng dấu.

**Nếu làm sai:** Đừng chỉ nhìn 1/n→0 rồi kết luận cả dãy về 0: thành phần (−1)^n vẫn dao động.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-C03; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O03; NOT_NEW_ID -->

**Bài 7.** Tổng vô hạn 3+3/5+3/25+… có thể dùng công thức cấp số nhân lùi vô hạn không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có; tổng bằng 15/4.

**Lời giải và lời giải thích:** Số hạng đầu 3, công bội 1/5 có trị tuyệt đối nhỏ hơn 1; tổng 3/(1−1/5)=15/4.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P03; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O03; NOT_NEW_ID -->

**Bài 8.** Tính lim(n→∞)(−2/5)^n và cho biết việc luân phiên dấu có ngăn dãy hội tụ không.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Giới hạn bằng 0; luân phiên dấu không ngăn hội tụ.

**Lời giải có suy luận:** Do |−2/5|=2/5<1, trị tuyệt đối |(−2/5)^n|=(2/5)^n→0. Suy ra chính dãy tiến về 0 theo định lí kẹp; dấu có thể luân phiên nhưng độ lớn giảm về 0.

**Nếu làm sai:** So sánh q=−1 (không hội tụ) với q=−2/5 (hội tụ) bằng độ lớn |q|.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-W01; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O04; NOT_NEW_ID -->

**Bài 9.** (a) Tính lim(n→∞)(2n²+3n)/(n²+1). (b) Giải thích vì sao dãy vₙ=(−1)ⁿ không có giới hạn hữu hạn. (c) Tính 4+2+1+1/2+… và nêu điều kiện công bội.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải và lí do:** (a) Chia tử mẫu cho n²: (2+3/n)/(1+1/n²)→2. (b) Dãy con ở chỉ số chẵn bằng 1, ở chỉ số lẻ bằng −1, nên không thể tiến về một giá trị chung. (c) a=4, q=1/2 có |q|<1; S=4/(1−1/2)=8.

**Rubric 4 điểm:**
1. Chia tử và mẫu đúng theo bậc n², kết luận giới hạn 2. — 1 điểm.
2. Giải thích hai dãy con chẵn/lẻ có giới hạn khác nhau. — 1 điểm.
3. Nhận diện a=4, q=1/2, kiểm tra |q|<1. — 1 điểm.
4. Tính tổng vô hạn 8, giải thích do qⁿ→0. — 1 điểm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-P04; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O04; NOT_NEW_ID -->

**Bài 10.** Tính lim(n→∞) √(n²+2n)/n với n nguyên dương.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 1.

**Lời giải và lời giải thích:** Do n>0, chia trong căn cho n²: √(1+2/n)→1; không nhầm √(n²) với |n| cho n âm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-P03; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O04; NOT_NEW_ID -->

**Bài 11.** Tính lim(n→∞) (1−2/n)(4+1/n).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 4.

**Lời giải và lời giải thích:** Hai thừa số có giới hạn hữu hạn 1 và 4, nên giới hạn tích là 1×4.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-P01; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O04; NOT_NEW_ID -->

**Bài 12.** Tìm lim(n→∞) (5n²+2)/(2n²+n).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 5/2.

**Lời giải và lời giải thích:** Chia tử và mẫu cho n²; các phần 2/n² và 1/n tiến về 0; mẫu giới hạn 2 khác 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P04; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O04; NOT_NEW_ID -->

**Bài 13.** Tính lim(n→∞)(7n²−3n+1)/(2n²+n) với n≥1.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 7/2.

**Lời giải có suy luận:** Chia cả tử/mẫu cho n²: (7−3/n+1/n²)/(2+1/n)→7/2. Mẫu giới hạn bằng 2 khác 0 nên luật thương hợp lệ.

**Nếu làm sai:** Không cho rằng ∞/∞ là đáp số; đưa về biểu thức có giới hạn hữu hạn.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-W01; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O04; NOT_NEW_ID -->

**Bài 14.** Cho u_n=(4n+7)/(n+3), n≥1. (a) Biến đổi về 4−5/(n+3). (b) Tìm cận dưới đạt và cận trên không đạt. (c) Chứng minh tăng. (d) Tính lim u_n và lý giải giới hạn không phải số hạng.

<details markdown="1"><summary>Lời giải và rubric</summary>

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

**Nếu làm sai:** Viết u_n=4−5/(n+3), kiểm phần bị trừ có dấu dương, rồi xét cận, hiệu và giới hạn.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-W02-ANCHOR; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O05; NOT_NEW_ID -->

**Bài 15.** Một thiết bị trong lần thử đầu tiêu thụ 1,2 đơn vị năng lượng. Mỗi lần thử tiếp theo tiêu thụ 3/4 lần liền trước. (a) Viết ba mức tiêu thụ đầu. (b) Thiết lập tổng n lần thử. (c) Tính tổng lý thuyết vô hạn. (d) Giải thích vì sao công thức không áp dụng với q=1.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải và lí do:** (a) 1,2; 0,9; 0,675. (b) Sₙ=1,2(1−(3/4)ⁿ)/(1−3/4). (c) Vì |3/4|<1 nên (3/4)ⁿ→0, S=1,2/(1/4)=4,8. (d) Nếu q=1, mỗi số hạng bằng 1,2, tổng n lần là 1,2n tăng không bị chặn; không có tổng hữu hạn.

**Rubric 4 điểm:**
1. Tính đúng ba mức đầu và công bội. — 1 điểm.
2. Thiết lập đúng tổng riêng Sₙ, ghi điều kiện. — 1 điểm.
3. Lấy giới hạn và kết luận 4,8 đơn vị. — 1 điểm.
4. Lí giải đúng q=1 làm tổng không hội tụ hữu hạn. — 1 điểm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-P07; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O05; NOT_NEW_ID -->

**Bài 16.** Bóng rơi từ độ cao 3 m, mỗi lần bật lên cao bằng 1/2 lần trước; mô hình vô hạn. Tổng quãng đường theo phương thẳng đứng là bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 9 m.

**Lời giải và lời giải thích:** Lần đầu đi xuống 3 m. Những lần sau gồm đi lên và xuống ở các độ cao 3/2,3/4,… nên tổng là 3+2×[(3/2)/(1−1/2)]=9 m. Nêu rõ đây là mô hình lí tưởng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-P06; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O05; NOT_NEW_ID -->

**Bài 17.** Tính tổng lý thuyết 8−4+2−1+…; vì sao tổng vẫn hữu hạn dù có vô hạn số hạng?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 16/3.

**Lời giải và lời giải thích:** Đây là cấp số nhân a=8, q=−1/2, |q|<1; tổng bằng 8/(1+1/2)=16/3; số hạng và phần dư tiến về 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P05; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O05; NOT_NEW_ID -->

**Bài 18.** Tính tổng vô hạn 12+3+3/4+3/16+⋯, và nêu điều kiện dùng công thức.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 16; công bội q=1/4 thỏa |q|<1.

**Lời giải có suy luận:** Đây là CSN a=12, q=3/12=1/4. S_n=12(1−(1/4)^n)/(1−1/4); khi n→∞ thì (1/4)^n→0 nên tổng vô hạn bằng 12/(3/4)=16.

**Nếu làm sai:** Nếu áp dụng khi |q|≥1 thì không được dùng công thức tổng lùi vô hạn; quay lại kiểm giới hạn số hạng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-W02; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O05; NOT_NEW_ID -->

**Bài 19.** CSN có u_1=15,q=−1/4. (a) Viết S_n và điều kiện tính tổng vô hạn. (b) Tính S_∞. (c) Tìm n nguyên dương nhỏ nhất để |S_∞−S_n|<3/64; vì sao n=4 không đủ?

<details markdown="1"><summary>Lời giải và rubric</summary>

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

**Nếu làm sai:** Nếu chọn n=4, hãy thay vào sai số và so dấu < với =; luôn lấy trị tuyệt đối khi q âm.

</details>

## 2. Giới hạn hàm số và các phép biến đổi

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-W01; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O06; NOT_NEW_ID -->

**Bài 20.** Cho f(x)=(x²−25)/(x−5) khi x≠5, và f(5)=m. (a) Tìm lim(x→5)f(x). (b) Tìm m để f liên tục tại 5. (c) Tính lim(x→−1⁺)1/(x+1) và lim(x→−1⁻)1/(x+1).

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải và lí do:** (a) Với x≠5, (x²−25)/(x−5)=x+5, nên giới hạn bằng 10. (b) Cần f(5)=10, tức m=10. (c) Mẫu tiến đến 0 từ phía dương bên phải −1 nên giới hạn +∞; từ phía âm bên trái nên −∞.

**Rubric 4 điểm:**
1. Phân tích nhân tử và rút gọn đúng với x≠5. — 1 điểm.
2. Tính giới hạn bằng 10, không thay x=5 vào phân thức gốc. — 1 điểm.
3. Áp điều kiện liên tục, được m=10. — 1 điểm.
4. Giải thích dấu mẫu và hai giới hạn một phía đúng. — 1 điểm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-C01; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O06; NOT_NEW_ID -->

**Bài 21.** Hàm f(x)=(x²−9)/(x−3) (x≠3) không xác định ở x=3. Nó có giới hạn khi x→3 không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có, giới hạn bằng 6.

**Lời giải và lời giải thích:** Với x≠3, f(x)=x+3. Khi x tiến đến 3, f(x) tiến đến 6; giới hạn không yêu cầu f(3) tồn tại.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P06; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O06; NOT_NEW_ID -->

**Bài 22.** Với f(x)=(x²−6x+8)/(x−2), x≠2, tính lim(x→2)f(x). Hàm có cần định nghĩa tại x=2 để có giới hạn không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Giới hạn −2; f(2) không cần được định nghĩa.

**Lời giải có suy luận:** Tử=(x−2)(x−4). Với x≠2, f(x)=x−4, nên khi x→2 thì f(x)→−2. Phép rút gọn chỉ đúng trong lân cận loại điểm; giới hạn không xác nhận f(2).

**Nếu làm sai:** Nếu thế trực tiếp ra 0/0, đó là tín hiệu cần biến đổi, không phải kết quả.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-P03; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O07; NOT_NEW_ID -->

**Bài 23.** f(x)=x² khi x≤2 và f(x)=3x−2 khi x>2. Hai giới hạn một phía ở 2 có bằng nhau không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có, đều bằng 4.

**Lời giải và lời giải thích:** Từ trái x²→4; từ phải 3x−2→4, nên giới hạn hai phía bằng 4.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-C02; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O07; NOT_NEW_ID -->

**Bài 24.** Cho f(x)=x+2 nếu x<0 và f(x)=3−x nếu x≥0. Giới hạn hai phía tại 0 có tồn tại không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Không.

**Lời giải và lời giải thích:** Phía trái tiến đến 2, phía phải tiến đến 3. Hai giới hạn một phía khác nhau nên giới hạn hai phía không tồn tại.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P07; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O07; NOT_NEW_ID -->

**Bài 25.** Cho f(x)=x+1 nếu x<1, và f(x)=x²+3 nếu x≥1. Tính hai giới hạn một phía tại 1 và quyết định có lim(x→1)f(x) không.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Trái 2, phải 4; không tồn tại giới hạn hai phía hữu hạn.

**Lời giải có suy luận:** Khi x→1⁻ dùng nhánh x+1 nên được 2. Khi x→1⁺ dùng nhánh x²+3 nên được 4. Hai giới hạn một phía khác nhau thì giới hạn hai phía không tồn tại dù f(1)=4 xác định.

**Nếu làm sai:** Không lấy giá trị f(1) thay giới hạn bên trái; đọc điều kiện từng nhánh.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-W03; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O07; NOT_NEW_ID -->

**Bài 26.** Cho f(x)=(x²−4)/|x−2| với x≠2. (a) Viết f theo hai phía x<2 và x>2. (b) Tính giới hạn trái/phải tại 2. (c) Kết luận giới hạn hai phía, giải thích vì sao dạng 0/0 không cho phép thay bằng 0.

<details markdown="1"><summary>Lời giải và rubric</summary>

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

**Nếu làm sai:** Vẽ trục x với 2 là điểm loại, dấu của x−2 đổi khi qua 2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-P06; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O08; NOT_NEW_ID -->

**Bài 27.** Tính lim(x→2⁻) (x+1)/(2−x).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** +∞.

**Lời giải và lời giải thích:** Tử tiến tới 3>0, mẫu dương và tiến đến 0 khi x<2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-C03; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O08; NOT_NEW_ID -->

**Bài 28.** Khi x→4⁺ và x→4⁻, f(x)=1/(x−4) có xu hướng như thế nào?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** +∞ ở bên phải và −∞ ở bên trái.

**Lời giải và lời giải thích:** Khi x>4 mẫu dương rất nhỏ; khi x<4 mẫu âm rất nhỏ. Dấu mẫu quyết định dấu giới hạn vô cực.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P08; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O08; NOT_NEW_ID -->

**Bài 29.** Xét f(x)=(x+1)/(x−2). Khi x→2⁻ và x→2⁺, f(x) tiến tới đâu? Có giới hạn hữu hạn hai phía không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Giới hạn trái −∞, phải +∞; không có giới hạn hai phía hữu hạn.

**Lời giải có suy luận:** Gần x=2, tử x+1→3>0. Mẫu x−2 âm rất nhỏ từ trái ⇒ f→−∞; dương rất nhỏ từ phải ⇒ f→+∞. Không gộp hai vô cực khác dấu thành một giới hạn.

**Nếu làm sai:** Lập bảng dấu tử/mẫu trên hai phía trước khi viết ±∞.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-P07; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O09; NOT_NEW_ID -->

**Bài 30.** Mô hình hiệu suất H(t)=100t/(t+5) với t≥0. Khi t tăng vô hạn, H(t) tiến đến mức nào? Điều đó có nghĩa gì?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 100 (đơn vị hiệu suất của mô hình).

**Lời giải và lời giải thích:** Chia tử mẫu cho t: H(t)=100/(1+5/t)→100. Mô hình dự báo mức bão hòa, không khẳng định giá trị 100 đạt được ở thời gian hữu hạn.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-P05; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O09; NOT_NEW_ID -->

**Bài 31.** Tính lim(x→+∞) (3x²−x)/(x²+2).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 3.

**Lời giải và lời giải thích:** Chia cả tử và mẫu cho x²; tử→3 và mẫu→1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P09; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O09; NOT_NEW_ID -->

**Bài 32.** Tính lim(x→−∞)(4x²−3)/(2x²+x).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 2.

**Lời giải có suy luận:** Chia tử/mẫu cho x²≠0 khi |x| lớn: (4−3/x²)/(2+1/x)→4/2=2, dù x tiến −∞. Bậc tử và mẫu bằng nhau, giới hạn là tỉ số hệ số dẫn.

**Nếu làm sai:** Đừng coi dấu x âm quyết định dấu x²; x² dương ở cả hai phía.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-P02; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O10; NOT_NEW_ID -->

**Bài 33.** Tính lim(x→1) (x²−1)/(x²+x−2).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 2/3.

**Lời giải và lời giải thích:** Phân tích (x−1)(x+1)/[(x−1)(x+2)] khi x≠1, sau đó thế giới hạn 2/3.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P10; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O10; NOT_NEW_ID -->

**Bài 34.** Tính lim(x→3)(x²−x−6)/(x−3). Vì sao phép thế ban đầu chưa có giá trị?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 5.

**Lời giải có suy luận:** x²−x−6=(x−3)(x+2). Biểu thức không xác định tại x=3 và thế trực tiếp cho 0/0, nhưng với x≠3 ta khử nhân tử x−3, lấy lim(x+2)=5. Giới hạn khác việc định nghĩa f(3).

**Nếu làm sai:** Chỉ khử nhân tử sau khi phân tích và nêu x≠3; 0/0 là dạng vô định.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-P01; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O11; NOT_NEW_ID -->

**Bài 35.** Tính lim(x→0) (√(x+4)−2)/x.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 1/4.

**Lời giải và lời giải thích:** Với x≠0, nhân liên hợp: (√(x+4)−2)/x=1/(√(x+4)+2), rồi cho x→0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P11; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O11; NOT_NEW_ID -->

**Bài 36.** Tính lim(x→4)(√(x+5)−3)/(x−4).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 1/6.

**Lời giải có suy luận:** Nhân liên hợp tử: [(√(x+5)−3)(√(x+5)+3)]/[(x−4)(√(x+5)+3)] = (x−4)/[(x−4)(√(x+5)+3)]=1/(√(x+5)+3), x≠4 trong miền. Khi x→4, mẫu→6, lim=1/6.

**Nếu làm sai:** Không thay 0/0 bằng 0; kiểm x+5≥0 và mẫu liên hợp khác 0 gần 4.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-W02-ANCHOR; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O12; NOT_NEW_ID -->

**Bài 37.** (a) Tính L=lim(x→0)(√(x+9)−3)/x; chỉ ra vì sao cách thế trực tiếp chưa cho đáp số. (b) Tính M=lim(x→−∞)(√(x²+1)+x). Giải thích dấu của x khi biến đổi.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải và lí do:** (a) Thế trực tiếp cho dạng 0/0 không xác định. Với x≠0, nhân liên hợp: L=lim 1/(√(x+9)+3)=1/6. (b) Nhân liên hợp: √(x²+1)+x = 1/(√(x²+1)−x). Với x→−∞, mẫu = |x|√(1+1/x²)−x = −x(√(1+1/x²)+1)→+∞; do đó M=0 từ phía dương.

**Rubric 4 điểm:**
1. Nêu được 0/0 là dạng chưa kết luận, kiểm tra miền x+9≥0. — 1 điểm.
2. Nhân liên hợp và tìm L=1/6 chính xác. — 1 điểm.
3. Biến đổi M bằng liên hợp, không nhầm √(x²)=x khi x<0. — 1 điểm.
4. Giải thích mẫu →+∞ nên M→0⁺. — 1 điểm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-P04; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O12; NOT_NEW_ID -->

**Bài 38.** Tính lim(x→−∞) √(x²+4)/x.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** −1.

**Lời giải và lời giải thích:** Vì x âm đủ lớn, √(x²)=|x|=−x; biểu thức bằng −√(1+4/x²)→−1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P12; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O12; NOT_NEW_ID -->

**Bài 39.** Tính lim(x→+∞)(√(x²+2x)−x).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 1.

**Lời giải có suy luận:** Trực tiếp là dạng ∞−∞. Nhân liên hợp: (2x)/(√(x²+2x)+x). Với x>0 chia cho x được 2/[√(1+2/x)+1]→2/(1+1)=1. Cần x→+∞ để |x|=x; không áp cùng cách chia cho x>0 khi x→−∞.

**Nếu làm sai:** Trước khi tách √(x²), viết √(x²)=|x|, không mặc định bằng x trên toàn trục.

</details>

## 3. Tính liên tục

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-P06; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O13; NOT_NEW_ID -->

**Bài 40.** f(x)=x+1 với x<0, f(x)=x²+1 với x≥0. Liên tục tại 0 không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có.

**Lời giải và lời giải thích:** Giới hạn trái và phải cùng bằng 1, giá trị f(0)=1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-P02; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O13; NOT_NEW_ID -->

**Bài 41.** Cho f(x)=ax+1 nếu x<2, và f(x)=x²−1 nếu x≥2. Tìm a để liên tục tại 2.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** a=1.

**Lời giải và lời giải thích:** Giới hạn trái 2a+1; giới hạn phải và f(2) đều bằng 3. Điều kiện khớp 2a+1=3.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-C01; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O13; NOT_NEW_ID -->

**Bài 42.** Cho f(x)=(x²−1)/(x−1) khi x≠1 và f(1)=2. Hàm có liên tục ở 1 không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có.

**Lời giải và lời giải thích:** Giới hạn khi x→1 bằng lim(x+1)=2, khớp với giá trị f(1)=2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P13; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O13; NOT_NEW_ID -->

**Bài 43.** f(x)=(x²−4)/(x−2) với x≠2, f(2)=k. Tìm k để f liên tục tại 2.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** k=4.

**Lời giải có suy luận:** Trong lân cận x≠2, f=x+2 ⇒ lim(x→2)f=4. Liên tục tại 2 đòi f(2) được định nghĩa và bằng giới hạn, nên k=4; các k khác tạo gián đoạn có thể sửa được.

**Nếu làm sai:** Nhớ kiểm đủ: giá trị tại điểm, giới hạn hai phía, sự bằng nhau.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-P04; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O14; NOT_NEW_ID -->

**Bài 44.** Đặt f(x)=(x²−16)/(x−4) khi x≠4 và f(4)=m. Tìm m để liên tục ở 4.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** m=8.

**Lời giải và lời giải thích:** Với x≠4 rút gọn thành x+4; giới hạn khi x→4 bằng 8, nên cần f(4)=8.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-C02; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O14; NOT_NEW_ID -->

**Bài 45.** Cùng biểu thức (x²−1)/(x−1) khi x≠1 nhưng đặt f(1)=0. Hàm có liên tục ở 1 không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Không.

**Lời giải và lời giải thích:** Giới hạn bằng 2 nhưng giá trị ở điểm lại bằng 0. Thiếu điều kiện giới hạn bằng giá trị hàm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P14; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O14; NOT_NEW_ID -->

**Bài 46.** Với f(x)=(x²−4x+3)/(x−1) khi x≠1 và f(1)=9, hãy phân loại gián đoạn tại 1 và tìm giá trị thay thế để liên tục.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Gián đoạn có thể khử; thay f(1)=−2.

**Lời giải có suy luận:** Tử=(x−1)(x−3). Khi x≠1, f=x−3 nên giới hạn tại 1 là −2; hiện f(1)=9 khác giới hạn. Đổi riêng giá trị ở điểm thành −2 sẽ làm liên tục; đây không phải gián đoạn nhảy hay vô cực.

**Nếu làm sai:** Nếu thấy mẫu ban đầu bằng 0 rồi gọi 'vô cực', trước hết thử phân tích tử và xem có triệt tiêu không.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-W02-ANCHOR; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O15; NOT_NEW_ID -->

**Bài 47.** (a) Xét tính liên tục của f(x)=√(x+1) trên [−1,3], kể cả hai đầu mút. (b) Cho h(x)=x²+1 nếu x<0, và h(x)=3x+1 nếu x≥0. Chứng minh h liên tục tại 0. (c) Nếu đổi nhánh x≥0 thành 3x+2, điều gì thay đổi?

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải và lí do:** (a) f có miền xác định x≥−1; liên tục trên (−1,3), lim bên phải ở −1 bằng f(−1)=0 và lim bên trái ở 3 bằng f(3)=2, nên liên tục trên [−1,3]. (b) Lim trái h=1, lim phải h=1, h(0)=1, nên liên tục. (c) Lim trái vẫn 1 nhưng lim phải và h(0)=2: hai giới hạn một phía không khớp, nên gián đoạn tại 0.

**Rubric 4 điểm:**
1. Xác định đúng miền và tính liên tục bên trong đoạn. — 1 điểm.
2. Kiểm tra giới hạn một phía đúng tại −1 và 3. — 1 điểm.
3. So sánh hai giới hạn một phía và giá trị h(0), kết luận liên tục. — 1 điểm.
4. Phân tích nhánh thay đổi và lí giải gián đoạn, không chỉ nói 'không'. — 1 điểm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-P05; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O15; NOT_NEW_ID -->

**Bài 48.** Hàm f(x)=√(9−x²) có liên tục trên đoạn [−3,3] không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có.

**Lời giải và lời giải thích:** Miền xác định là [−3,3]. Hàm liên tục ở bên trong và có giới hạn một phía tại hai đầu mút bằng giá trị hàm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-C03; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O15; NOT_NEW_ID -->

**Bài 49.** Hàm h(x)=√(x+2) có liên tục tại đầu mút x=−2 trên miền xác định không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có, liên tục từ bên phải tại −2.

**Lời giải và lời giải thích:** Hàm xác định với x≥−2; lim(x→−2⁺)√(x+2)=0=h(−2). Không kiểm tra từ phía trái ngoài miền xác định.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P15; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O15; NOT_NEW_ID -->

**Bài 50.** Xét f(x)=√(x(4−x)) trên miền [0,4]. Hàm có liên tục trên đoạn [0,4] theo nghĩa tương đối không? Giá trị ở hai đầu là gì?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có; f(0)=f(4)=0.

**Lời giải có suy luận:** Biểu thức x(4−x)≥0 đúng trên [0,4]; đa thức và căn bậc hai liên tục trên miền thích hợp, nên hàm liên tục bên trong. Tại 0 dùng giới hạn phải bằng f(0)=0; tại 4 dùng giới hạn trái bằng f(4)=0. Không cần giới hạn từ ngoài miền.

**Nếu làm sai:** Ở đầu mút, dùng đúng giới hạn một phía phía trong miền thay vì đòi hai phía ngoài miền.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-P01; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O16; NOT_NEW_ID -->

**Bài 51.** Hàm g(x)=(x+2)/(x−1) liên tục trên những khoảng nào?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** (−∞,1) và (1,+∞).

**Lời giải và lời giải thích:** Tử và mẫu là đa thức liên tục, thương liên tục khi mẫu khác 0; phải loại x=1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P16; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O16; NOT_NEW_ID -->

**Bài 52.** Tìm miền xác định và các khoảng/đoạn liên tục theo miền cho f(x)=√(x−1)/(x−3).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** D=[1,3)∪(3,+∞); liên tục trên mỗi thành phần theo nghĩa tương đối, tại x=1 liên tục phải.

**Lời giải có suy luận:** Cần x−1≥0 ⇒ x≥1, đồng thời x−3≠0 ⇒ x≠3. Căn và phép chia liên tục nơi xác định; tại x=1, f(1)=0/(−2)=0 và giới hạn phải cùng bằng 0. Không nói f liên tục xuyên điểm loại 3.

**Nếu làm sai:** Ghi đồng thời điều kiện căn và mẫu; tại 1 chỉ xét từ phải.

</details>

## 4. Định lí giá trị trung gian, chia đôi

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-W01; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O17; NOT_NEW_ID -->

**Bài 53.** Cho f(x)=2x+k nếu x<1, và f(x)=x²+3 nếu x≥1. (a) Tìm k để f liên tục tại 1. (b) Với g(x)=x³−x−1, chứng minh có ít nhất một nghiệm của g(x)=0 trong (1,2); nói rõ điều gì chưa thể kết luận bằng định lí đổi dấu.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải và lí do:** (a) lim trái tại 1 bằng 2+k; lim phải và f(1) bằng 4, nên 2+k=4→k=2. (b) g liên tục trên [1,2] vì là đa thức; g(1)=−1, g(2)=5 trái dấu, nên tồn tại ít nhất một c∈(1,2) có g(c)=0. Chỉ từ đổi dấu chưa suy nghiệm duy nhất.

**Rubric 4 điểm:**
1. Tìm và so sánh giới hạn trái, phải và f(1). — 1 điểm.
2. Giải phương trình điều kiện liên tục k=2. — 1 điểm.
3. Kiểm tra tính liên tục của g và dấu tại hai đầu mút. — 1 điểm.
4. Kết luận tồn tại nghiệm, không tự suy tính duy nhất. — 1 điểm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-P03; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O17; NOT_NEW_ID -->

**Bài 54.** Chứng minh f(x)=x²−2 có ít nhất một nghiệm trong (1,2).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có ít nhất một nghiệm.

**Lời giải và lời giải thích:** Đa thức liên tục trên [1,2], f(1)=−1<0, f(2)=2>0. Theo định lí giá trị trung gian, tồn tại c∈(1,2) với f(c)=0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P17; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O17; NOT_NEW_ID -->

**Bài 55.** Chứng minh x³+x−1=0 có ít nhất một nghiệm trong (0,1). Định lí giá trị trung gian đã chứng minh tính duy nhất chưa?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Ít nhất một nghiệm ở (0,1); chưa suy ra duy nhất chỉ từ IVT.

**Lời giải có suy luận:** g(x)=x³+x−1 là đa thức nên liên tục trên [0,1]. g(0)=−1<0, g(1)=1>0. Theo định lí giá trị trung gian, có c∈(0,1) với g(c)=0. Muốn kết luận duy nhất phải dùng lập luận thêm (chẳng hạn g tăng do x³ và x đều tăng).

**Nếu làm sai:** Không viết 'nghiệm duy nhất theo IVT'; IVT chỉ cho tồn tại khi có liên tục và trái dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-P07; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O18; NOT_NEW_ID -->

**Bài 56.** f(x)=x³−5 liên tục trên [1,2]; f(1) và f(2) trái dấu. Kết luận nào chắc chắn đúng, và có được suy ngay nghiệm duy nhất không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có ít nhất một nghiệm trong (1,2); chưa thể suy duy nhất chỉ từ định lí đổi dấu.

**Lời giải và lời giải thích:** f(1)=−4<0, f(2)=3>0. Định lí cho sự tồn tại, còn tính duy nhất cần luận cứ khác.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P18; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O18; NOT_NEW_ID -->

**Bài 57.** Mô hình giả định g(t)=t²+t−3, t∈[1,2]. Chứng minh có thời điểm g(t)=0; sau hai bước chia đôi nêu một khoảng dài 1/4 chứa nghiệm.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có nghiệm; khoảng [5/4,3/2] sau 2 bước chia đôi.

**Lời giải có suy luận:** g là đa thức nên liên tục; g(1)=−1<0,g(2)=3>0. Giữa [1,2] tại 3/2: g(3/2)=3/4>0 nên giữ [1,3/2]; giữa khoảng đó tại 5/4: g(5/4)=25/16+5/4−3=−3/16<0 nên giữ [5/4,3/2] dài 1/4. Đây là một mô hình toán giả định, không tự suy diễn dữ liệu thực tế.

**Nếu làm sai:** Nếu đổi dấu không đúng khi chia đôi, lập bảng g(đầu),g(giữa),g(cuối), giữ cặp trái dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-W04; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O18; NOT_NEW_ID -->

**Bài 58.** Cho f(x)=2−x² khi x≤1, và f(x)=a x+3 khi x>1. (a) Tìm a để f liên tục tại x=1. (b) Với a đó, chứng minh có nghiệm f(x)=0 trong (0,2). (c) Tìm nghiệm và giải thích vì sao duy nhất trên [0,2] (không chỉ viện dẫn IVT).

<details markdown="1"><summary>Lời giải và rubric</summary>

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

**Nếu làm sai:** Đừng kết luận duy nhất nhờ IVT; xét dấu trên [0,1] và giải phương trình tuyến tính trên (1,2].

</details>

# Tự kiểm tra

Hãy tự làm đủ 18 câu sau đây trên giấy hoặc phần trả lời riêng, giải thích cách chọn phương pháp và điều kiện trước khi đối chiếu. Đây là các câu **công khai đã có trong Luyện tập**, nhằm tự phát hiện lỗ hổng, không phải bài kiểm tra độc lập hay điểm thành thạo chính thức.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP08-P01; NO_RD1; NO_MASTERY -->

**Câu 1.** Dãy u_n=5+4/n với n nguyên dương. Tìm giới hạn khi n→∞; số 5 có nhất thiết là số hạng nào đó của dãy không?

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP08-P02; NO_RD1; NO_MASTERY -->

**Câu 2.** Xét v_n=(−1)^n+1/n, n≥1. Dãy có giới hạn hữu hạn hay giới hạn ±∞ không? Giải thích bằng hai dãy chỉ số chẵn/lẻ.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP08-P03; NO_RD1; NO_MASTERY -->

**Câu 3.** Tính lim(n→∞)(−2/5)^n và cho biết việc luân phiên dấu có ngăn dãy hội tụ không.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP08-P04; NO_RD1; NO_MASTERY -->

**Câu 4.** Tính lim(n→∞)(7n²−3n+1)/(2n²+n) với n≥1.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP08-P05; NO_RD1; NO_MASTERY -->

**Câu 5.** Tính tổng vô hạn 12+3+3/4+3/16+⋯, và nêu điều kiện dùng công thức.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP08-P06; NO_RD1; NO_MASTERY -->

**Câu 6.** Với f(x)=(x²−6x+8)/(x−2), x≠2, tính lim(x→2)f(x). Hàm có cần định nghĩa tại x=2 để có giới hạn không?

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP08-P07; NO_RD1; NO_MASTERY -->

**Câu 7.** Cho f(x)=x+1 nếu x<1, và f(x)=x²+3 nếu x≥1. Tính hai giới hạn một phía tại 1 và quyết định có lim(x→1)f(x) không.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP08-P08; NO_RD1; NO_MASTERY -->

**Câu 8.** Xét f(x)=(x+1)/(x−2). Khi x→2⁻ và x→2⁺, f(x) tiến tới đâu? Có giới hạn hữu hạn hai phía không?

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP08-P09; NO_RD1; NO_MASTERY -->

**Câu 9.** Tính lim(x→−∞)(4x²−3)/(2x²+x).

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP08-P10; NO_RD1; NO_MASTERY -->

**Câu 10.** Tính lim(x→3)(x²−x−6)/(x−3). Vì sao phép thế ban đầu chưa có giá trị?

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP08-P11; NO_RD1; NO_MASTERY -->

**Câu 11.** Tính lim(x→4)(√(x+5)−3)/(x−4).

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP08-P12; NO_RD1; NO_MASTERY -->

**Câu 12.** Tính lim(x→+∞)(√(x²+2x)−x).

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP08-P13; NO_RD1; NO_MASTERY -->

**Câu 13.** f(x)=(x²−4)/(x−2) với x≠2, f(2)=k. Tìm k để f liên tục tại 2.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP08-P14; NO_RD1; NO_MASTERY -->

**Câu 14.** Với f(x)=(x²−4x+3)/(x−1) khi x≠1 và f(1)=9, hãy phân loại gián đoạn tại 1 và tìm giá trị thay thế để liên tục.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP08-P15; NO_RD1; NO_MASTERY -->

**Câu 15.** Xét f(x)=√(x(4−x)) trên miền [0,4]. Hàm có liên tục trên đoạn [0,4] theo nghĩa tương đối không? Giá trị ở hai đầu là gì?

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP08-P16; NO_RD1; NO_MASTERY -->

**Câu 16.** Tìm miền xác định và các khoảng/đoạn liên tục theo miền cho f(x)=√(x−1)/(x−3).

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP08-P17; NO_RD1; NO_MASTERY -->

**Câu 17.** Chứng minh x³+x−1=0 có ít nhất một nghiệm trong (0,1). Định lí giá trị trung gian đã chứng minh tính duy nhất chưa?

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP08-P18; NO_RD1; NO_MASTERY -->

**Câu 18.** Mô hình giả định g(t)=t²+t−3, t∈[1,2]. Chứng minh có thời điểm g(t)=0; sau hai bước chia đôi nêu một khoảng dài 1/4 chứa nghiệm.

Nguồn kiến thức: SGK Toán 11, tập 1, Chương V (Bài 15–17), bộ Kết nối tri thức với cuộc sống. Các câu vận dụng mô hình mở rộng được xây dựng riêng cho Chuyên đề.
