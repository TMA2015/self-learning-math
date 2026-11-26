<!-- AUTHORING_ONLY_NOT_FOR_STUDENT_VIEW: CĐ11 current R06 canonical learner; R04/R05 previous revisions immutable in Git; source Q18 is separately signed. -->
<!-- AUTHORING_ONLY_NOT_FOR_STUDENT_VIEW: STANDARD_ID=SLM-THPT-QUALITY-ONE; STANDARD_VERSION=3.2.0; LEARNING_PATH=TOPIC; OUTER_PAGES=Kiến thức|Luyện tập|Tự kiểm tra; SOURCE_REVISION=R06_AUTHOR_SELF_Q18 -->
<!-- ORIGINAL88_SGK_BLOB=45722cd386a498f3e0e96a09928c85565af56d1b; ORIGINAL88_INDEX_BLOB=672fdce0c02ebf4f6ae6b37b331ca59e259d9b5c; NEW28_ACTIVE_R05_BLOB=6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0 -->
# CĐ11 — Nguyên hàm, tích phân và ứng dụng hình học

# Kiến thức

## 1. Từ biết tốc độ biến đổi đến khôi phục đại lượng

Nếu một thiết bị đo cho ta vận tốc theo thời gian mà không cho trực tiếp vị trí, ta có thể hỏi: liệu có thể **khôi phục vị trí** từ vận tốc ấy không? Đạo hàm biến một đại lượng thành tốc độ biến đổi, còn nguyên hàm giúp đi ngược lại. Nhưng đi ngược không xác định ngay vị trí ban đầu: các hàm chỉ khác hằng số đều có cùng đạo hàm. Chính vì thế ta cần điều kiện đầu để chọn đúng một đại lượng.

Khi muốn biết đại lượng đã thay đổi bao nhiêu trong cả một quãng thời gian, ta cộng những thay đổi rất nhỏ thành **tích phân xác định**. Từ đây xuất hiện hai câu hỏi phải phân biệt: thay đổi ròng có thể dương hay âm, còn độ dài, diện tích hay thể tích **không thể âm**. Bài học đi từ nguyên hàm qua tích phân có dấu đến hình học lát cắt, không nhảy thẳng vào công thức diện tích và thể tích.

### 1.1. Nhận ra nguyên hàm từ đạo hàm

<!-- LESSON_ID: TOP11-M01; OUTCOME_ID: TOP11-O01 -->

Giả sử ta biết một đại lượng thay đổi nhanh thế nào, nhưng lại muốn tìm quy luật của chính đại lượng ấy. Đó là lúc ta đi ngược từ đạo hàm về **nguyên hàm**. 

> **ĐỊNH NGHĨA — Nguyên hàm.** Hàm \(F\) là một nguyên hàm của \(f\) trên một khoảng \(I\) nếu \(F'(x)=f(x)\) với mọi \(x\in I\). Trên một khoảng, nếu \(F\) là nguyên hàm thì họ nguyên hàm có dạng \(F(x)+C\), \(C\in\mathbb R\); phải phân biệt các thành phần miền rời.



Không chỉ trên khoảng mở: ta có thể xét nguyên hàm trên một khoảng, một nửa khoảng hoặc một đoạn \(K\). Chẳng hạn với \(K=[a,b]\), tại đầu \(a\) ta hiểu \(F'(a)=f(a)\) theo **đạo hàm bên phải**, còn tại đầu \(b\) theo **đạo hàm bên trái**; không đòi lấy đạo hàm ở phía nằm ngoài đoạn. Nếu \(f\) **liên tục trên một khoảng** thì \(f\) có ít nhất một nguyên hàm trên khoảng ấy; đây là điều kiện đủ bảo đảm tồn tại, không phải yêu cầu bắt buộc trong định nghĩa. Khi \(F'=f\), ký hiệu \(dF(x)=F'(x)\,dx=f(x)\,dx\) gọi là **vi phân** của \(F\); ký hiệu này mô tả quan hệ đạo hàm–nguyên hàm, không cho phép coi \(\int f(x)\,dx\) là phép nhân đại số tùy ý.

Ví dụ, với \(f(x)=4x^3+2\), ta nhận thấy \((x^4)'=4x^3\) và \((2x)'=2\), nên \(F(x)=x^4+2x\) là một nguyên hàm. Nhưng \(x^4+2x+5\) cũng có đạo hàm ấy, bởi đạo hàm của hằng số bằng 0. Vì thế khi hỏi **họ nguyên hàm**, ta phải viết \(F(x)=x^4+2x+C\). Hãy kiểm bằng cách lấy đạo hàm ngược; phép tích phân bất định không phải một phép nhân với ký hiệu \(dx\).

**Ví dụ**

**Đề bài:** Tìm mọi nguyên hàm của \(f(x)=9x^2-4x+1\) trên \(\mathbb R\).

**Lời giải:** Lấy nguyên hàm từng hạng tử: \(F(x)=3x^3-2x^2+x+C\). Kiểm tra \(F'(x)=9x^2-4x+1\) trên \(\mathbb R\). Hằng số \(C\) cần có vì đạo hàm của mọi hằng số bằng 0.

**Vận dụng** Tìm họ nguyên hàm của \(f(x)=8x^3-2\). Em kiểm lại được bằng đạo hàm không?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

\(F(x)=2x^4-2x+C\). Đạo hàm của biểu thức này là \(8x^3-2\), đúng bằng \(f\). Nếu em quên \(+C\), hãy thử cộng thêm 5 vào nguyên hàm của mình rồi lấy đạo hàm: kết quả vẫn không đổi.


**Kiểm lỗi**

Nếu em chỉ thấy một nguyên hàm mà bỏ \(+C\), hoặc kết luận bằng cách nhìn dạng hàm, đọc **Kiến thức 1.1**, giải **Bài 3** (đạo hàm để kiểm) và **Bài 5** (tìm cả họ). Cứ lấy đạo hàm kết quả để đối chiếu với \(f\).

</details>

### 1.2. Một họ nguyên hàm và điều kiện đầu

<!-- LESSON_ID: TOP11-M02; OUTCOME_ID: TOP11-O02 -->

> **TÍNH CHẤT — Một họ nguyên hàm và điều kiện đầu.** Nếu hai hàm có cùng đạo hàm trên một khoảng thì chúng chỉ khác nhau một hằng số. Chọn một nguyên hàm \(F_0\) của \(f\), ta viết \(F(x)=F_0(x)+C\). Nếu biết \(a\) thuộc khoảng đó và \(F(a)=b\), ta có \(F_0(a)+C=b\), từ đó xác định \(C=b-F_0(a)\). Dữ kiện ở một khoảng không xác định hằng số trên một khoảng tách rời khác. Hãy kiểm cả đạo hàm và giá trị ban đầu.

Chẳng hạn, \(F'(x)=3x^2-4\), \(F(1)=5\). Họ nguyên hàm là \(F(x)=x^3-4x+C\). Thay \(x=1\), ta được \(1-4+C=5\), suy ra \(C=8\). Vậy \(F(x)=x^3-4x+8\). Kiểm lại \(F'(x)=3x^2-4\) và \(F(1)=5\).

**Ví dụ**

**Đề bài:** Biết \(F'(x)=4x-3\) trên \(\mathbb R\) và \(F(2)=5\). Tìm \(F(x)\).

**Lời giải:** Từ \(F'\) suy ra \(F(x)=2x^2-3x+C\). Điều kiện \(F(2)=8-6+C=5\) cho \(C=3\), vậy \(F(x)=2x^2-3x+3\). Thế lại \(x=2\) và lấy đạo hàm để kiểm cả hai điều kiện.

**Vận dụng** \(F'(x)=2x+1\) và \(F(0)=7\): tìm \(F\).

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

\(F(x)=x^2+x+7\).

Nếu dùng \(F'(0)=7\), em đã dùng sai loại dữ kiện; \(F(0)\) mới là giá trị ban đầu.


**Kiểm lỗi**

Nếu em thay điều kiện \(F(a)\) thành \(F'(a)\) hoặc không tìm hằng \(C\), đọc **Kiến thức 1.2**, giải **Bài 8** rồi **Bài 10**. Phải thỏa đồng thời đạo hàm và giá trị ban đầu.

</details>

### 1.3. Nguyên hàm lũy thừa

<!-- LESSON_ID: TOP11-M03; OUTCOME_ID: TOP11-O03 -->

Từ quy tắc đạo hàm lũy thừa, ta biết \((x^{n+1})'=(n+1)x^n\) trên khoảng thích hợp. Muốn đạo hàm trở về đúng \(x^n\), ta chia cho \(n+1\). Khi \(n=-1\), phép chia này không thực hiện được; ta sẽ xét trường hợp ấy riêng.

> **CÔNG THỨC — Nguyên hàm lũy thừa.** Với \(n\ne-1\) và trên khoảng mà biểu thức thực \(x^n\) được xác định, \(\displaystyle\int x^n\,dx=\frac{x^{n+1}}{n+1}+C\). Trường hợp \(n=-1\) dùng \(\ln|x|+C\) trên từng khoảng tránh \(0\); không thay trực tiếp vào mẫu \(n+1=0\).

 Nếu \(F'=f\), \(G'=g\) trên cùng một khoảng và \(\alpha,\beta\) là các hằng số thì họ nguyên hàm của \(\alpha f+\beta g\) là \(\alpha F+\beta G+C\). Các hằng số cộng được gộp thành một hằng số \(C\) duy nhất.

Xét ví dụ: \(\int (6x^2-4x+3)\,\mathrm dx=2x^3-2x^2+3x+C\). Đạo hàm của \(2x^3\) là \(6x^2\), của \(-2x^2\) là \(-4x\) và của \(3x\) là \(3\). Kiểm từng hạng giúp tránh lỗi hệ số.

**Ví dụ**

**Đề bài:** Tính \(\int (2x^{5}-4x^{3}+6)\,\mathrm dx\).

**Lời giải:** Trên \(\mathbb R\), dùng tính tuyến tính và quy tắc lũy thừa. Một nguyên hàm của \(2x^5\) là \(\frac{x^6}{3}\), của \(-4x^3\) là \(-x^4\), của \(6\) là \(6x\). Kết quả \(F(x)=\frac{x^6}{3}-x^4+6x+C\). Lấy đạo hàm được \(F'(x)=2x^5-4x^3+6\).

**Vận dụng** \(\int (5x^{4}+2x)\,\mathrm dx\)=?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

\(x^5+x^2+C\).

Nếu không chia hệ số mũ mới, kiểm đạo hàm ngược sẽ phát hiện hệ số dư.


**Kiểm lỗi**

Nếu em quên chia hệ số theo mũ mới khi tính nguyên hàm lũy thừa, đọc **Kiến thức 1.3**, làm **Bài 14** rồi **Bài 16**. Lấy đạo hàm ngược để phát hiện hệ số thiếu.

</details>

### 1.4. Nguyên hàm của \(\frac1x\) trên khoảng

<!-- LESSON_ID: TOP11-M04; OUTCOME_ID: TOP11-O04 -->

> **CÔNG THỨC — Nguyên hàm của \(\frac1x\).** Khi \(x>0\), ta có \((\ln x)'=\frac1x\). Khi \(x<0\), \(-x>0\) nên \((\ln(-x))'=\frac1{-x}\cdot(-1)=\frac1x\). Hai biểu thức logarit này được viết gọn thành \(\ln|x|\). Vì vậy \(\int\frac1x\,\mathrm dx=\ln|x|+C\) trên từng khoảng \((-\infty;0)\) hoặc \((0;+\infty)\). Không thể áp dụng công thức trên một khoảng chứa \(0\), vì hàm số không xác định tại đó. Hai khoảng có thể có các hằng số \(C_-\) và \(C_+\) khác nhau; một điều kiện tại \(-1\) không xác định hằng số ở nhánh dương.

Chẳng hạn, trên \(x<0\), \(\int\frac3x\,\mathrm dx=3\ln(-x)+C\). Lấy đạo hàm: \(3\cdot\frac{-1}{-x}=\frac3x\), đúng với hàm đã cho. Ta chọn \(\ln(-x)\) vì \(-x>0\) trên nhánh âm; \(\ln x\) không xác định ở đó.

**Ví dụ**

**Đề bài:** Tìm \(F(x)\) biết \(F'(x)=\frac{3}{x}\) trên \(x<0\) và \(F(-2)=7\).

**Lời giải:** Trên khoảng \((-\infty;0)\), \(F(x)=3\ln|x|+C=3\ln(-x)+C\). Thay \(x=-2\): \(3\ln 2+C=7\), nên \(C=7-3\ln 2\). Vậy \(F(x)=3\ln(-x)+7-3\ln 2\). Không dùng \(\ln x\) trên khoảng \(x<0\) hoặc nối qua \(x=0\).

**Vận dụng** \(F'(x)=\frac1x\) trên \(x<0\), \(F(-1)=2\). Tìm \(F(x)\).

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

\(F(x)=\ln(-x)+2\) trên \(x<0\).

Không viết \(\ln x\) khi \(x<0\); sau đó kiểm đạo hàm trước khi kết luận.


**Kiểm lỗi**

Nếu em dùng \(\ln x\) cho \(x<0\) hoặc ghép hằng số xuyên qua điểm \(x=0\) bị loại, đọc **Kiến thức 1.4**, làm **Bài 17** và **Bài 21**. Luôn chọn một khoảng xác định không qua 0.

</details>

### 1.5. Hàm mũ và hệ số bù

<!-- LESSON_ID: TOP11-M05; OUTCOME_ID: TOP11-O05 -->

> **CÔNG THỨC — Hàm mũ và hệ số bù.** Từ quy tắc đạo hàm hàm hợp, \((e^{kx})'=ke^{kx}\). Khi \(k\ne0\), ta chia cho \(k\) để có đạo hàm đúng bằng \(e^{kx}\). Vì vậy \(\int e^{kx}\,\mathrm dx=\frac{e^{kx}}k+C\). Tương tự, \((a^x)'=a^x\ln a\), nên \(\int a^x\,\mathrm dx=\frac{a^x}{\ln a}+C\) với \(a>0,\ a\ne1\). Không áp dụng quy tắc nguyên hàm lũy thừa \(x^n\) cho hàm mũ \(a^x\), vì vị trí của biến khác nhau.

Chẳng hạn, \(\int(6e^{3x}+2^x)\,\mathrm dx=2e^{3x}+\frac{2^x}{\ln 2}+C\). Lấy đạo hàm kết quả, ta được \(6e^{3x}+2^x\). Hệ số \(2\) ở số hạng đầu xuất hiện vì ta chia \(6\) cho \(3\).

**Ví dụ**

**Đề bài:** Tính \(\int (3e^{3x}+2^x)\,\mathrm dx\).

**Lời giải:** Vì \((e^{3x})'=3e^{3x}\) và \(\left(\frac{2^x}{\ln 2}\right)'=2^x\) (cơ số \(2>0,\ 2\ne1\)), họ nguyên hàm là \(e^{3x}+\frac{2^x}{\ln 2}+C\). Lấy đạo hàm để xác nhận các hệ số.

**Vận dụng** Tìm \(\int 5e^{5x}\,\mathrm dx\).

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

\(e^{5x}+C\).

Nếu kết quả là \(5e^{5x}\), lấy đạo hàm sẽ được \(25e^{5x}\), gấp năm lần hàm đã cho. Em cần chia hệ số cho \(5\).


**Kiểm lỗi**

Nếu em đạo hàm ngược \(e^{kx}\) hay \(a^x\) mà thiếu hệ số bù, đọc **Kiến thức 1.5**, làm **Bài 25** và **Bài 27**; phải dùng \(\ln a\) khi cơ số là \(a>0,a\ne1\).

</details>

### 1.6. Nguyên hàm lượng giác

<!-- LESSON_ID: TOP11-M06; OUTCOME_ID: TOP11-O06 -->

> **CÔNG THỨC — Nguyên hàm lượng giác.** Với góc tính bằng radian, \((\sin x)'=\cos x\), \((\cos x)'=-\sin x\). Theo quy tắc đạo hàm hàm hợp, khi \(k\ne0\), ta có \(\int\cos(kx)\,\mathrm dx=\frac{\sin(kx)}k+C\) và \(\int\sin(kx)\,\mathrm dx=-\frac{\cos(kx)}k+C\). Dấu trừ trong công thức thứ hai xuất hiện vì đạo hàm của cos mang dấu âm. Nếu góc được cho theo độ, phải đổi đơn vị trước khi áp dụng.

Từ hai đạo hàm \((\tan x)'=\dfrac{1}{\cos^2x}\) (khi \(\cos x\ne0\)) và \((\cot x)'=-\dfrac{1}{\sin^2x}\) (khi \(\sin x\ne0\)), ta còn hai nguyên hàm cơ bản mà chỉ học sin và cos sẽ bỏ sót:

\[
\int \frac{1}{\cos^2x}\,dx=\tan x+C\quad(\cos x\ne0),\qquad
\int \frac{1}{\sin^2x}\,dx=-\cot x+C\quad(\sin x\ne0).
\]

Mỗi công thức được áp dụng trên **một khoảng** không chứa điểm làm mẫu bằng 0. Chẳng hạn, trên khoảng \(0<x<\frac{\pi}{2}\), ta có \(\int\left(\frac{2}{\cos^2x}-\frac{3}{\sin^2x}\right)\mathrm dx=2\tan x+3\cot x+C\). Lấy đạo hàm kết quả cho đúng \(\frac{2}{\cos^2x}-\frac{3}{\sin^2x}\); dấu cộng trước \(3\cot x\) đến từ \((\cot x)'=-\frac{1}{\sin^2x}\). Trên những khoảng xác định tách rời, hằng số \(C\) có thể khác nhau.

Chẳng hạn, \(\int(4\cos(2x)+3\sin(3x))\,\mathrm dx=2\sin(2x)-\cos(3x)+C\). Kiểm bằng đạo hàm: \((2\sin(2x))'=4\cos(2x)\) và \((-\cos(3x))'=3\sin(3x)\).

**Ví dụ**

**Đề bài:** Tính \(\int (4\cos (2x)-3\sin (3x))\,\mathrm dx\), góc đo radian.

**Lời giải:** Ta có \((2\sin(2x))'=4\cos(2x)\) và \((\cos(3x))'=-3\sin(3x)\). Vậy \(F(x)=2\sin(2x)+\cos(3x)+C\). Khi lấy đạo hàm để kiểm lại, dùng góc radian và quy tắc đạo hàm hàm hợp.

**Vận dụng** \(\int 2\sin (2x)\,\mathrm dx\)?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

\(-\cos(2x)+C\).

Nếu thiếu dấu âm, em hãy lấy đạo hàm của \(\cos(2x)\): kết quả là \(-2\sin(2x)\), trái dấu với hàm đề bài.


**Kiểm lỗi**

Nếu em mất dấu khi nguyên hàm \(\sin\) hoặc quên nhân hệ số góc theo radian, đọc **Kiến thức 1.6**, làm **Bài 30** rồi **Bài 32**. Lấy đạo hàm kết quả theo quy tắc dây chuyền.

</details>

### 1.7. Từ vận tốc khôi phục vị trí

<!-- LESSON_ID: TOP11-M07; OUTCOME_ID: TOP11-O07 -->

> **PHƯƠNG PHÁP — Từ vận tốc khôi phục vị trí.** Vận tốc có hướng \(v(t)=s'(t)\) cho biết vị trí \(s(t)\) biến đổi nhanh thế nào. Nếu \(F\) là một nguyên hàm của \(v\) thì \(s(t)=F(t)+C\). Ta cần biết vị trí ban đầu \(s(t_0)\) để tìm \(C\); chỉ biết vận tốc chưa đủ để xác định vị trí. Tích phân của \(v\) trên \([a;b]\) cho **độ dời**, không phải luôn là tổng quãng đường. Nếu thời gian tính bằng giây và vị trí tính bằng mét, đơn vị vận tốc là \(\mathrm{m/s}\), còn gia tốc \(v'(t)\) có đơn vị \(\mathrm{m/s^2}\).

Chẳng hạn, cho \(v(t)=4t-2\) (m/s), \(s(0)=3\) m. Một họ nguyên hàm là \(s(t)=2t^2-2t+C\); từ vị trí ban đầu suy ra \(C=3\). Sau 2 giây, \(s(2)=8-4+3=7\) m. Kiểm lại \(s'(t)=4t-2\) (m/s).

**Ví dụ**

**Đề bài:** Vận tốc có hướng \(v(t)=4t+1\) (m/s), \(t\ge0\), và \(s(1)=6\) m. Tính \(s(2)\).

**Lời giải:** Vì \(s'=v\), ta có \(s(t)=2t^2+t+C\) (m). Thay \(t=1\), \(s(1)=2+1+C=6\), suy ra \(C=3\). Do đó \(s(2)=8+2+3=13\) m. Cần điều kiện vị trí đã biết để xác định hằng số; riêng tích phân vận tốc chỉ cho độ dời.

**Vận dụng** Vật chuyển động thẳng có vận tốc \(v(t)=6t\) (m/s), thời gian \(t\) tính bằng giây, vị trí ban đầu \(s(0)=1\) m. Tính vị trí \(s(1)\).

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

Vì \(s'(t)=v(t)\), ta có \(s(t)=3t^2+C\). Thế \(s(0)=1\) được \(C=1\); do đó \(s(1)=4\) m.

Nếu không biết \(s(0)\), ta chưa xác định được vị trí tuyệt đối cụ thể.


**Kiểm lỗi**

Nếu em tích phân vận tốc để ra độ dời nhưng ghi ngay vị trí tuyệt đối không có dữ kiện đầu, đọc **Kiến thức 1.7**, làm **Bài 35** và **Bài 37**. Viết \(s'=v\), tìm hằng \(C\) từ vị trí đã biết rồi mới tính.

</details>

## 2. Từ các bước thay đổi nhỏ đến tích phân trên cả khoảng

Nếu vận tốc đổi theo thời gian, lấy một giá trị vận tốc nhân cả khoảng thời gian chỉ là ước lượng thô. Chia thời gian thành nhiều đoạn rất ngắn, cộng độ dời gần đúng trên từng đoạn rồi cho độ rộng đoạn giảm dần giúp ta hiểu **tích phân** là giới hạn của quá trình cộng dồn. Định lý cơ bản liên hệ tổng ấy với hiệu hai giá trị của một nguyên hàm; từ đó mới dùng các quy tắc đổi cận, tuyến tính và đổi biến có điều kiện.

Khi biến thiên diễn ra suốt một khoảng, tích phân cộng dồn các phần rất nhỏ. Nhờ nguyên hàm, ta tính được sự thay đổi ròng bằng hiệu tại hai cận, nhưng dấu của kết quả vẫn phụ thuộc vào chiều lấy tích phân và dấu của hàm.

### 2.1. Tích phân xác định và Newton–Leibniz

<!-- LESSON_ID: TOP11-M08; OUTCOME_ID: TOP11-O08 -->

Các nguyên hàm của cùng một hàm số trên một khoảng có thể khác nhau hằng số. Vì sao khi tính tích phân có cận, ta vẫn luôn thu được cùng một số? Với \(f\) liên tục trên đoạn \([a;b]\), chọn nguyên hàm \(F\) của \(f\) trên đoạn ấy.

> **ĐỊNH NGHĨA — Tích phân xác định.** Với \(f\) liên tục trên đoạn \([a,b]\), chọn một nguyên hàm \(F\) của \(f\) trên đoạn ấy. **Tích phân của \(f\) từ \(a\) đến \(b\)** là số \(F(b)-F(a)\), ký hiệu \(\displaystyle\int_a^b f(x)\,dx\). Kết quả không phụ thuộc vào việc chọn nguyên hàm nào: nếu chọn \(F+C\) thì hai hằng số ở hai cận triệt tiêu. \(a\) là cận dưới, \(b\) là cận trên, \(f\) là hàm dưới dấu tích phân; khi đảo hai cận thì tích phân đổi dấu.

Như vậy định nghĩa giải thích **vì sao tích phân xác định là một số**, còn công thức Newton–Leibniz dưới đây là cách tính bằng một nguyên hàm. Trong một bài toán thực tế, đơn vị tích phân bằng đơn vị của \(f\) nhân với đơn vị của \(x\).

> **ĐỊNH LÝ — Newton–Leibniz.** Nếu \(f\) liên tục trên đoạn \([a,b]\), \(a<b\), và \(F\) liên tục trên \([a,b]\), khả vi trên \((a,b)\) với \(F'(x)=f(x)\) tại mọi \(x\in(a,b)\), thì \(\displaystyle\int_a^b f(x)\,dx=F(b)-F(a)\). Đây là **một số thực**, không có \(+C\).

 Hằng số \(C\) bị triệt tiêu trong hiệu \((F(b)+C)-(F(a)+C)=F(b)-F(a)\). Khác với nguyên hàm bất định, tích phân xác định không thêm \(+C\). Tên biến lấy tích phân là **ký hiệu thay chỗ**, nên nếu giữ cùng hàm và cận thì \(\int_a^b f(x)\,\mathrm dx=\int_a^b f(t)\,\mathrm dt\); còn đổi hàm hoặc đổi cận thì nói chung giá trị thay đổi. Nếu hàm không xác định hoặc không liên tục trên đoạn, cần kiểm điều kiện trước khi áp dụng công thức.

Xét ví dụ: \(\int_1^2 4x^3\,\mathrm dx=\left[x^4\right]_1^2=16-1=15\). Chọn nguyên hàm \(F(x)=x^4\); hàm dưới dấu tích phân là đa thức, liên tục trên \([1;2]\). Kết quả là một số, không thêm \(+C\).

**Ví dụ**

**Đề bài:** Tính \(\int_{1}^{3} 4x\,\mathrm dx\) bằng nguyên hàm và cận.

**Lời giải:** \(f(x)=4x\) liên tục trên \([1;3]\), chọn \(F(x)=2x^2\). Theo công thức Newton–Leibniz, \(\int_1^3 4x\,\mathrm dx=F(3)-F(1)=18-2=16\). Tích phân có cận là một số, không thêm \(+C\).

**Vận dụng** Tính \(\displaystyle\int_1^3 2x\,dx\). Viết rõ giá trị nguyên hàm ở cả hai cận.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

\(\left[x^2\right]_1^3=3^2-1^2=8\). Nếu em ra 9, em mới thế cận trên mà quên trừ giá trị tại cận dưới.

Nếu chỉ thế cận trên, hãy nhớ công thức là hiệu \(F(b)-F(a)\).


**Kiểm lỗi**

Nếu em thêm \(+C\) vào tích phân có cận hoặc chỉ thế cận trên, đọc **Kiến thức 2.1**, làm **Bài 40** và **Bài 42**. Kiểm hàm liên tục trên đoạn và tính đúng \(F(b)-F(a)\).

</details>

### 2.2. Tính tuyến tính của tích phân

<!-- LESSON_ID: TOP11-M09; OUTCOME_ID: TOP11-O09 -->

> **TÍNH CHẤT — Tính tuyến tính của tích phân.** Nếu \(f,g\) liên tục trên \([a;b]\) và \(\alpha,\beta\) là hằng số, thì \(\int_a^b(\alpha f(x)+\beta g(x))\,\mathrm dx=\alpha\int_a^b f(x)\,\mathrm dx+\beta\int_a^b g(x)\,\mathrm dx\). Vì hiệu giá trị nguyên hàm cũng tuân theo phép cộng và nhân với hằng số, ta có thể tách một biểu thức dài thành các tích phân đơn giản hơn. Tất cả tích phân trong công thức đều giữ cùng hai cận. Nếu một thành phần không xác định trên đoạn, cần kiểm điều kiện trước.

Chẳng hạn, \(\int_0^1(3x^2+2x+1)\,\mathrm dx=\left[x^3+x^2+x\right]_0^1=3\). Có thể tính ba tích phân thành phần riêng rồi cộng: \(1+1+1=3\).

**Ví dụ**

**Đề bài:** Tính \(\int_{0}^{2} (3x^{2}-2x+4)\,\mathrm dx\) và giải thích phép tách.

**Lời giải:** Các đa thức đều liên tục trên \([0;2]\); dùng tính tuyến tính, chọn nguyên hàm \(F(x)=x^3-x^2+4x\). Giá trị là \(F(2)-F(0)=8-4+8=12\). Cũng có thể tách thành ba tích phân và tính riêng từng tích phân **với cùng hai cận 0 và 2**:

\[
\int_0^2 3x^2\,dx-\int_0^2 2x\,dx+\int_0^2 4\,dx
=8-4+8=12.
\]

Hai cách hoàn toàn tương đương; không được tự ý thay cận của một số hạng mà không có phép biến đổi hợp lệ.

**Vận dụng** \(\int_{0}^{2} (2x+3)\,\mathrm dx\)?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

\(\left[x^2+3x\right]_0^2=4+6=10\).

Nếu ghép các tích phân khác cận mà không đổi cận, đó không phải quy tắc tuyến tính.


**Kiểm lỗi**

Nếu em tách biểu thức nhưng đổi nhầm cận hoặc không nhân hệ số, đọc **Kiến thức 2.2**, làm **Bài 45** và **Bài 47**. Quy tắc tuyến tính giữ nguyên cận cho các tích phân thành phần.

</details>

### 2.3. Đảo cận và ghép cận

<!-- LESSON_ID: TOP11-M10; OUTCOME_ID: TOP11-O10 -->

> **TÍNH CHẤT — Đảo cận và ghép cận.** Với \(f\) liên tục trên đoạn chứa các cận, từ hiệu \(F(b)-F(a)\) của một nguyên hàm \(F\), suy ra \(\int_b^a f(x)\,\mathrm dx=-\int_a^b f(x)\,\mathrm dx\) và \(\int_a^a f(x)\,\mathrm dx=0\). Nếu \(a\le c\le b\), thì \(\int_a^b f(x)\,\mathrm dx=\int_a^c f(x)\,\mathrm dx+\int_c^b f(x)\,\mathrm dx\), vì giá trị \(F(c)\) được cộng rồi trừ đi. Tích phân có hướng, không đồng nhất với diện tích hình học. Quy tắc ghép cận giúp ta chia khoảng tại điểm hàm đổi dấu.

Chẳng hạn, \(\int_2^0(3x^2+1)\,\mathrm dx=-\int_0^2(3x^2+1)\,\mathrm dx=-10\). Giá trị âm xuất phát từ việc đảo cận, không đại diện cho một diện tích âm.

**Ví dụ**

**Đề bài:** Tính \(\int_{4}^{1} 2x\,\mathrm dx\) và so với \(\int_{1}^{4} 2x\,\mathrm dx\).

**Lời giải:** Chọn \(F(x)=x^2\). Theo chiều cận từ 4 đến 1, \(\int_4^1 2x\,\mathrm dx=F(1)-F(4)=1-16=-15\). Khi đảo lại hai cận, \(\int_1^4 2x\,\mathrm dx=15\). Dấu âm biểu thị hướng lấy tích phân, không phải diện tích hình học âm.

**Vận dụng** Biết \(\int_1^3 f(x)\,dx=5\) và \(\int_3^5 f(x)\,dx=-2\), trong đó \(f\) liên tục trên \([1;5]\). Tính \(\int_1^5 f(x)\,dx\), \(\int_5^1 f(x)\,dx\) và \(\int_3^3 f(x)\,dx\).

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

Ghép tại \(3\): \(\int_1^5 f(x)\,dx=5+(-2)=3\). Đảo cận cho \(\int_5^1 f(x)\,dx=-3\); hai cận bằng nhau cho \(\int_3^3 f(x)\,dx=0\). Nếu em cộng thành 7, em đã thay số hạng âm bằng trị tuyệt đối, trong khi đề hỏi tích phân có dấu.


**Kiểm lỗi**

Nếu em quên dấu khi đảo cận hoặc ghép sai khoảng, đọc **Kiến thức 2.3**, làm **Bài 48** và **Bài 52**. Xác định đúng chiều cận và điểm nối trước khi cộng.

</details>

### 2.4. Từ tích lũy tới diện tích không âm

<!-- LESSON_ID: TOP11-M11; OUTCOME_ID: TOP11-O11 -->

> **CÔNG THỨC — Từ tích lũy tới diện tích không âm.** Giả sử \(f\) liên tục và \(f(x)\ge0\) trên \([a;b]\), với \(a<b\). Chia đoạn thành nhiều khoảng nhỏ: một dải đứng có chiều cao gần bằng \(f(x)\), chiều rộng rất nhỏ \(\Delta x\), nên diện tích gần bằng \(f(x)\Delta x\). Khi các dải ngày càng hẹp, tổng diện tích tiến đến \(S=\int_a^b f(x)\,\mathrm dx\). Đây là diện tích vùng giới hạn bởi đồ thị, trục \(Ox\) và hai đường \(x=a,\ x=b\). Nếu hàm đổi dấu, tích phân có dấu không còn bằng tổng diện tích hình học.

Chẳng hạn, \(y=2x\) không âm trên \([0;2]\). Ta có \(S=\int_0^2 2x\,\mathrm dx=\left[x^2\right]_0^2=4\). Kiểm bằng hình học: tam giác có đáy 2 và chiều cao 4, diện tích \(\frac12\cdot2\cdot4=4\).

**Ví dụ**

**Đề bài:** Tính diện tích hình phẳng dưới đồ thị \(y=2x+1\), giới hạn bởi trục \(Ox\) và hai đường \(x=0,\ x=2\).

**Lời giải:** Hàm \(f(x)=2x+1\) liên tục và \(f(x)\ge1>0\) trên \([0;2]\). Đồ thị nằm trên \(Ox\), do đó \(S=\int_0^2(2x+1)\,\mathrm dx=\left[x^2+x\right]_0^2=4+2=6\) đơn vị diện tích.

**Vận dụng** Tính diện tích dưới đồ thị \(y=x^2\), phía trên trục \(Ox\), từ \(x=0\) đến \(x=1\).

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

\(\int_0^1 x^2\,\mathrm dx=\frac13\) đơn vị diện tích.

Nếu trả diện tích âm, kiểm f có âm trên đoạn hay không.


**Kiểm lỗi**

Nếu em coi tích phân âm là diện tích âm, hoặc bỏ kiểm dấu \(f\), đọc **Kiến thức 2.4**, làm **Bài 55** và **Bài 57**. Diện tích hình học yêu cầu hàm không âm trên đoạn, hoặc phải tách theo dấu.

</details>

### 2.5. Phân biệt độ dời và quãng đường

<!-- LESSON_ID: TOP11-M12; OUTCOME_ID: TOP11-O12 -->

Độ dời khác quãng đường vì các phần có dấu trái nhau trong tích phân có thể triệt tiêu. Với vận tốc có hướng \(v\) liên tục trên \([a;b]\), độ dời là \(\int_a^b v(t)\,\mathrm dt\), còn quãng đường là \(\int_a^b |v(t)|\,\mathrm dt\). Tương tự, diện tích giữa đồ thị của \(f\) và trục \(Ox\) là \(\int_a^b |f(x)|\,\mathrm dx\). Khi hàm đổi dấu tại một số hữu hạn điểm, chia đoạn tại các điểm đó để tính từng phần không âm. Không thay tích phân của trị tuyệt đối bằng trị tuyệt đối của tích phân khi chưa kiểm dấu.

Chẳng hạn, \(v(t)=t-1\) (m/s) trong \(0\le t\le2\) giây. Độ dời là \(\int_0^2(t-1)\,\mathrm dt=0\) m. Vật đổi chiều tại \(t=1\); quãng đường là \(\int_0^1(1-t)\,\mathrm dt+\int_1^2(t-1)\,\mathrm dt=\frac12+\frac12=1\) m.

> **PHƯƠNG PHÁP — Phân biệt độ dời và quãng đường.** Hình dưới minh họa một ví dụ khác: \(f(x)=x\) trên \([-1;2]\). Trên \([-1;0]\), đồ thị nằm dưới trục nên phần tích phân bằng \(-\frac12\); trên \([0;2]\), vùng tam giác phía trên có diện tích 2 và đóng góp \(+2\). Vì thế \(\int_{-1}^2 x\,\mathrm dx=\frac32\), nhưng **diện tích hình học** của hai vùng là \(\frac12+2=\frac52\). Trong bài vận tốc \(v(t)=t-1\) trên \([0;2]\) vừa xét, hai số tương ứng là 0 và 1; không dùng kết quả của hình này cho bài vận tốc đó.

![Tích phân có dấu và diện tích hình học là hai đại lượng khác nhau](../../visuals/THPT_TOPIC11_SIGNED_INTEGRAL_R01.svg)

*Đọc hình:* Đây là \(y=x\) trên \([-1;2]\), đổi dấu tại \(x=0\). Hai vùng tam giác có diện tích lần lượt \(\frac12\) và 2, nên phần dưới góp số **âm** vào tích phân nhưng vẫn là diện tích **dương** khi cộng diện tích hình học.

**Ví dụ**

**Đề bài:** Với \(f(x)=x-1\) trên \([0;4]\), tính tích phân có dấu và diện tích hình học giữa đồ thị với \(Ox\).

**Lời giải:** Hàm đổi dấu tại \(x=1\). Tích phân có dấu là \(\int_0^4(x-1)\,\mathrm dx=\left[\frac{x^2}2-x\right]_0^4=4\). Để tính diện tích, tách tại \(x=1\): \(\int_0^1(1-x)\,\mathrm dx=\frac12\) và \(\int_1^4(x-1)\,\mathrm dx=\frac92\). Tổng diện tích là \(S=\frac12+\frac92=5\), khác với \(|4|=4\).

**Vận dụng** Một vật chuyển động thẳng với vận tốc có hướng \(v(t)=2-t\) (m/s), \(0\le t\le5\) giây. Tìm thời điểm đổi chiều, độ dời và tổng quãng đường của vật.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

Vận tốc bằng 0 tại \(t=2\), dương trước 2 và âm sau 2 nên vật đổi chiều tại đó. Độ dời là

\[
\int_0^5(2-t)\,dt=\left[2t-\frac{t^2}2\right]_0^5=-\frac52\ \text{m}.
\]

Hai phần quãng đường là \(\int_0^2(2-t)\,dt=2\) m và \(\int_2^5(t-2)\,dt=\frac92\) m. Tổng quãng đường \(\frac{13}2\) m. Nếu lấy \(\frac52\) m, em mới lấy trị tuyệt đối của độ dời, chưa cộng quãng đường ở cả hai chiều.


**Kiểm lỗi**

Nếu em lấy trị tuyệt đối của **một** tích phân có dấu làm quãng đường/diện tích khi hàm đổi dấu, đọc **Kiến thức 2.5**, làm **Bài 58** và **Bài 62**. Tách các khoảng tại điểm đổi dấu, tích phân \(|f|\) hoặc \(|v|\).

</details>

### 2.6. Tích phân lượng giác

<!-- LESSON_ID: TOP11-M13; OUTCOME_ID: TOP11-O13 -->

> **CÔNG THỨC — Tích phân lượng giác.** Nếu hàm liên tục trên đoạn lấy tích phân, công thức Newton–Leibniz vẫn là \(F(b)-F(a)\), dù hàm dưới dấu tích phân là đa thức, hàm mũ hay lượng giác. Với góc radian, ta chọn nguyên hàm của \(\cos x\) là \(\sin x\), của \(\sin x\) là \(-\cos x\). Với \(e^x\), nguyên hàm là \(e^x\); với \(e^{kx}\), nguyên hàm là \(\frac{e^{kx}}k\) khi \(k\ne0\). Sau khi chọn nguyên hàm, thay cả hai cận và lấy hiệu; không thêm \(+C\) vào kết quả tích phân.

Xét ví dụ: \(\int_0^{\ln 3} e^x\,\mathrm dx=\left[e^x\right]_0^{\ln 3}=e^{\ln 3}-1=2\). Chọn \(F(x)=e^x\) vì \(F'(x)=e^x\). Lưu ý cận trên là \(\ln 3\), không phải 3.

**Ví dụ**

**Đề bài:** Tính \(\int_{0}^{\pi} \sin  x\,\mathrm dx\) khi góc đo radian.

**Lời giải:** Hàm sin liên tục trên đoạn; chọn \(F(x)=-\cos x\). Ta có \(\int_0^\pi\sin x\,\mathrm dx=\left[-\cos x\right]_0^\pi=1-(-1)=2\). Góc được tính bằng radian.

**Vận dụng** \(\int_{0}^{\frac{\pi}{2}} \sin  x\,\mathrm dx\)?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

\(\left[-\cos x\right]_0^{\frac{\pi}{2}}=0-(-1)=1\).

Nếu thay cận góc độ mà không quy đổi, xem lại giả thiết radian.


**Kiểm lỗi**

Nếu em quên đạo hàm \(-\cos x\) bằng \(\sin x\) hoặc thế cận góc độ vào công thức radian, đọc **Kiến thức 2.6**, giải **Bài 64** và **Bài 68**. Chọn nguyên hàm đúng trước khi tính hiệu giá trị tại cận.

</details>

### 2.7. Tích lũy từ tốc độ biến thiên

<!-- LESSON_ID: TOP11-M14; OUTCOME_ID: TOP11-O14 -->

> **PHƯƠNG PHÁP — Tích lũy từ tốc độ biến thiên.** Giả sử \(Q'(t)=r(t)\) và \(r\) liên tục trên \([a;b]\). Lượng biến đổi ròng là \(Q(b)-Q(a)=\int_a^b r(t)\,\mathrm dt\). Nếu tốc độ \(r\) không hằng, không thể chỉ lấy tốc độ cuối \(r(b)\) nhân với thời gian \(b-a\). Ta phải cộng dồn sự thay đổi trong toàn khoảng. Nếu tốc độ tính bằng lượng mỗi giây và thời gian tính bằng giây, tích phân có đơn vị lượng. Khi tốc độ đổi dấu, kết quả vẫn là biến đổi ròng.

Chẳng hạn, lưu lượng \(r(t)=2t\) lít/phút trong \(0\le t\le2\) phút. Lượng nước tăng thêm là \(Q(2)-Q(0)=\int_0^2 2t\,\mathrm dt=4\) lít, không phải \(r(2)\cdot2=8\) lít.

**Ví dụ**

**Đề bài:** Một vật chuyển động thẳng với vận tốc có hướng \(v(t)=5-2t\) (m/s) trong \(0\le t\le2\) giây. Tính độ dời của vật.

**Lời giải:** Độ dời là \(s(2)-s(0)=\int_0^2(5-2t)\,\mathrm dt=\left[5t-t^2\right]_0^2=10-4=6\) m. Không tính bằng \(v(2)\cdot2=2\) m vì vận tốc không hằng; trên \([0;2]\) có \(v(t)\ge1\) (m/s), nên quãng đường cũng bằng 6 m.

**Vận dụng** Một vật có vận tốc có hướng \(v(t)=3t^2\) (m/s) trong \(0\le t\le1\) giây. Độ dời là bao nhiêu?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

Độ dời bằng \(\int_0^1 3t^2\,\mathrm dt=1\) m.

Nếu kết quả còn đơn vị m/s, em chưa tích phân theo thời gian (giây).


**Kiểm lỗi**

Nếu em lấy giá trị vận tốc cuối nhân tổng thời gian, hoặc không đổi đơn vị m/s theo giây thành mét, đọc **Kiến thức 2.7**, làm **Bài 71** và **Bài 73**. Độ dời là \(\int v(t)dt\); quãng đường mới cần \(\int|v(t)|dt\).

</details>

## 3. Từ tổng có dấu đến diện tích hình học không âm

Một vật đi về phía phải rồi quay lại có thể có **độ dời ròng bằng 0** dù đã đi một quãng đường dương. Tích phân của vận tốc giữ dấu nên các phần dương/âm có thể triệt tiêu; quãng đường thì phải cộng **độ lớn** của từng phần. Diện tích hình học cũng vậy: ta cần biết đồ thị nằm trên hay dưới trục, hoặc đường nào nằm trên đường nào, trước khi đưa ra công thức tích phân. Khi hai đường cắt nhau, phải chia khoảng tại nơi chúng đổi thứ tự.

Diện tích hình học không thể âm. Vì vậy, khi đồ thị đổi phía so với trục Ox hoặc hai đường cắt nhau, ta cần chia miền và cộng những phần dương, không dùng ngay tích phân đại số của một hiệu xuyên suốt.

### 3.1. Diện tích dưới hàm căn

<!-- LESSON_ID: TOP11-M15; OUTCOME_ID: TOP11-O15 -->

> **PHƯƠNG PHÁP — Diện tích dưới hàm căn.** Hàm \(y=\sqrt{x}\) liên tục, không âm trên đoạn \([a;b]\) với \(0\le a<b\). Vùng giới hạn bởi đồ thị, trục \(Ox\) và hai đường \(x=a,\ x=b\) có diện tích \(S=\int_a^b\sqrt{x}\,\mathrm dx=\frac23\left[x^{\frac32}\right]_a^b\). Để tìm nguyên hàm, viết \(\sqrt{x}=x^{\frac12}\) rồi dùng quy tắc lũy thừa. Không lấy cận âm khi hàm căn không xác định trên số thực.

Chẳng hạn, diện tích dưới \(y=\sqrt{x}\) trên \([0;1]\) là \(\int_0^1 x^{\frac12}\,\mathrm dx=\frac23\) đơn vị diện tích. Kiểm lại: đường cong nằm trong hình vuông cạnh 1, nên diện tích nhỏ hơn 1.

Không phải mọi hình phẳng có hàm căn đều cần tìm nguyên hàm bằng công thức. Chẳng hạn, đồ thị \(y=\sqrt{4-x^2}\), \(-2\le x\le2\), chính là **nửa đường tròn phía trên** của đường tròn \(x^2+y^2=4\): bình phương hai vế được phương trình đường tròn, còn dấu \(y\ge0\) chọn nửa trên. Do đó, diện tích dưới đồ thị từ \(-2\) tới \(2\) là nửa diện tích hình tròn bán kính \(2\).

> **PHƯƠNG PHÁP — Nhận diện diện tích hình học.** Với \(R>0\), \(\displaystyle\int_{-R}^{R}\sqrt{R^2-x^2}\,dx=\frac{\pi R^2}{2}\), vì đó là nửa hình tròn phía trên trục \(Ox\). Chỉ dùng trực tiếp khi **cận và miền thật sự khớp** nửa đường tròn; nếu cận chỉ lấy một phần, cần xác định hình quạt/hình tương ứng hoặc dùng phương pháp phù hợp.

**Ví dụ minh họa.** Tính \(\displaystyle\int_{-2}^{2}\sqrt{4-x^2}\,dx\). Đường cong là nửa đường tròn tâm \(O\), bán kính \(2\) và nằm trên trục hoành. Vậy tích phân bằng diện tích của nửa hình tròn: \(\frac12\pi\cdot2^2=2\pi\). Không thay nhầm số \(4\) dưới căn thành bán kính \(4\).

**Ví dụ**

**Đề bài:** Tính diện tích dưới \(y=\sqrt{x}\) và trên \(Ox\), từ \(x=1\) đến \(x=4\).

**Lời giải:** Hàm \(\sqrt{x}\) liên tục và không âm trên \([1;4]\). Ta có \(S=\int_1^4 x^{\frac12}\,\mathrm dx=\frac23\left[x^{\frac32}\right]_1^4=\frac23(8-1)=\frac{14}{3}\) đơn vị diện tích. Hai cận đều thuộc miền xác định.

**Vận dụng** Tính diện tích dưới \(y=\sqrt{x}\) và trên \(Ox\), từ \(x=0\) đến \(x=9\).

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

\(\frac23\cdot9^{\frac32}=\frac23\cdot27=18\) đơn vị diện tích.

Nếu em nhầm \(\sqrt{x}\) với \(x^2\), hãy viết lại \(\sqrt{x}=x^{\frac12}\) trước khi tìm nguyên hàm.


**Kiểm lỗi**

Nếu em áp dụng công thức nguyên hàm \(x^2\) cho \(\sqrt{x}\) hoặc bỏ miền \(x\ge0\), đọc **Kiến thức 3.1**, làm **Bài 74** và **Bài 78**. Đổi \(\sqrt{x}=x^{\frac12}\) rồi kiểm cận và đơn vị diện tích.

</details>

### 3.2. Diện tích đổi dấu qua trục

<!-- LESSON_ID: TOP11-M16; OUTCOME_ID: TOP11-O16 -->

Khi đồ thị cắt trục \(Ox\), những mảnh nằm dưới trục vẫn có diện tích dương. Tìm các điểm mà \(f(x)=0\), xét dấu của \(f\) trên từng khoảng và cộng độ lớn của các tích phân tương ứng.

> **CÔNG THỨC — Diện tích hình phẳng so với trục Ox.** Nếu \(f\) liên tục trên \([a,b]\) thì diện tích hình phẳng giới hạn bởi đồ thị, trục \(Ox\) và các đường \(x=a,x=b\) là \(\displaystyle S=\int_a^b|f(x)|\,dx\). Nếu \(f\) đổi dấu, chia đoạn ở các nghiệm trước khi tính; không lấy \(\left|\int_a^b f(x)\,dx\right|\) thay thế nói chung.

 Nếu hàm đổi dấu tại hữu hạn điểm, ta chia đoạn tại các điểm đổi dấu và lấy dấu thích hợp cho từng tích phân. Nếu hàm giữ dấu trên toàn đoạn thì không cần chia. Diện tích luôn không âm; không thay \(\int_a^b |f(x)|\,\mathrm dx\) bằng \(\left|\int_a^b f(x)\,\mathrm dx\right|\) khi chưa kiểm dấu.

Chẳng hạn, \(f(x)=x\) trên \([-2;2]\): tích phân có dấu bằng 0, nhưng \(S=\int_{-2}^0(-x)\,\mathrm dx+\int_0^2 x\,\mathrm dx=2+2=4\). Ta chọn mốc \(x=0\) vì đồ thị cắt \(Ox\) tại đó.

**Ví dụ**

**Đề bài:** Với \(y=x^2-1\) trên \([-2;2]\), tính tích phân có dấu và diện tích giữa đồ thị với \(Ox\).

**Lời giải:** Hàm đổi dấu tại \(x=-1\) và \(x=1\). Tích phân có dấu là \(\int_{-2}^2(x^2-1)\,\mathrm dx=\left[\frac{x^3}3-x\right]_{-2}^2=\frac43\). Do tính đối xứng, hai mảnh ngoài mỗi mảnh có diện tích \(\int_1^2(x^2-1)\,\mathrm dx=\frac43\); mảnh giữa có diện tích \(\int_{-1}^1(1-x^2)\,\mathrm dx=\frac43\). Vậy \(S=3\cdot\frac43=4\).

**Vận dụng** Tính diện tích hình phẳng giữa \(y=2x-2\) và trục hoành trên \([0;3]\). Tự tìm mốc chia đoạn.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

Hàm bằng 0 tại \(x=1\), âm trên \([0;1)\) và dương trên \((1;3]\). Diện tích là \(\int_0^1(2-2x)\,dx+\int_1^3(2x-2)\,dx=1+4=5\) đơn vị diện tích. Tích phân có dấu chỉ bằng \(-1+4=3\); hai mảnh diện tích không triệt tiêu nhau.


**Kiểm lỗi**

Nếu em cho phép hai phần hình nằm trên/dưới Ox triệt tiêu thành diện tích 0, đọc **Kiến thức 3.2**, làm **Bài 79** và **Bài 83**. Tìm mọi nghiệm \(f(x)=0\), tách đoạn và tích phân \(|f|\).

</details>

### 3.3. Diện tích giữa hai đường

<!-- LESSON_ID: TOP11-M17; OUTCOME_ID: TOP11-O17 -->

> **CÔNG THỨC — Diện tích giữa hai đường.** Nếu \(f,g\) liên tục trên \([a;b]\) và \(f(x)\ge g(x)\) trên cả đoạn, dải đứng giữa hai đồ thị có chiều cao \(f(x)-g(x)\ge0\). Diện tích là \(S=\int_a^b(f(x)-g(x))\,\mathrm dx\). Cần xác định đường trên và đường dưới trước khi lấy hiệu. Nếu hai đường đổi thứ tự, chia miền tại các giao điểm đổi dấu.

Chẳng hạn, trên \([0;1]\), \(2>x^2\), nên diện tích giữa \(y=2\) và \(y=x^2\) là \(S=\int_0^1(2-x^2)\,\mathrm dx=2-\frac13=\frac53\).

**Ví dụ**

**Đề bài:** Tính diện tích giữa \(y=2x+1\) và \(y=x+1\) trên \([0;2]\).

**Lời giải:** Hiệu \((2x+1)-(x+1)=x\ge0\) trên \([0;2]\), nên đường thứ nhất nằm trên. Do đó \(S=\int_0^2 x\,\mathrm dx=\left[\frac{x^2}2\right]_0^2=2\) đơn vị diện tích. Lấy đường trên trừ đường dưới, không cộng hai hàm.

**Vận dụng** Tính diện tích giữa \(y=3\) và \(y=x\) trên \([0;2]\).

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

\(S=\int_0^2(3-x)\,\mathrm dx=4\).

Nếu hiệu âm, hãy kiểm đã trừ đúng 'trên−dưới'.


**Kiểm lỗi**

Nếu em lấy đường dưới trừ đường trên hoặc bỏ kiểm vị trí đường cong, đọc **Kiến thức 3.3**, làm **Bài 84** và **Bài 88**. Kiểm dấu hiệu hai hàm trên từng khoảng để chọn \(\int(\text{trên}-\text{dưới})dx\).

</details>

### 3.4. Hai đường đổi thứ tự

<!-- LESSON_ID: TOP11-M18; OUTCOME_ID: TOP11-O18 -->

> **PHƯƠNG PHÁP — Hai đường đổi thứ tự.** Với \(f,g\) liên tục trên \([a;b]\), diện tích giữa hai đồ thị là \(S=\int_a^b|f(x)-g(x)|\,\mathrm dx\). Giải phương trình \(f(x)=g(x)\) để tìm giao điểm, rồi xét dấu của hiệu trên các khoảng. Nếu hai đường đổi thứ tự tại một số hữu hạn điểm, chia đoạn tại những điểm đó và lấy đường trên trừ đường dưới ở mỗi phần. Các diện tích không âm phải được cộng lại. Nếu hai đường chỉ tiếp xúc mà không đổi thứ tự, không bắt buộc chia tại điểm đó.

Xét \(f(x)=x,\ g(x)=x^2\) trên \([0;2]\), giao nhau tại \(x=0,\ x=1\). Trên \((0;1)\), \(x>x^2\); trên \((1;2)\), \(x^2>x\). Diện tích là \(S=\int_0^1(x-x^2)\,\mathrm dx+\int_1^2(x^2-x)\,\mathrm dx=\frac16+\frac56=1\). Trong khi đó \(\int_0^2(x-x^2)\,\mathrm dx=-\frac23\), không phải diện tích.

![Hai đường y=x và y=x bình phương cắt nhau](../../visuals/THPT_TOPIC11_TWO_CURVES_SPLIT_R01.svg)

*Quan sát hình:* Trên \([0;1]\) lấy \(x-x^2\), trên \([1;2]\) lấy \(x^2-x\). Hai diện tích là \(\frac16\) và \(\frac56\), nên tổng bằng 1, không phải trị tuyệt đối của tích phân có dấu.

**Ví dụ**

**Đề bài:** Tính diện tích giữa \(y=3x\) và \(y=x^2\) trên \([0;4]\); cần chia ở đâu?

**Lời giải:** Hai đường giao khi \(x^2=3x\), tức \(x=0\) hoặc \(x=3\). Trên \((0;3)\), \(3x>x^2\); trên \((3;4)\), \(x^2>3x\). Do đó \(S=\int_0^3(3x-x^2)\,\mathrm dx+\int_3^4(x^2-3x)\,\mathrm dx=\frac92+\frac{11}6=\frac{19}3\). Không lấy trị tuyệt đối của một tích phân duy nhất.

**Vận dụng** Tính diện tích giữa \(y=2x\) và \(y=x^2\) trên đoạn \([0,3]\). Vì sao phải chia miền tại một giao điểm ở trong đoạn?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

Giải \(2x=x^2\) được \(x=0\) và \(x=2\). Trên \([0,2]\), \(2x\ge x^2\); trên \([2,3]\), \(x^2\ge2x\). Vì thế \(S=\int_0^2(2x-x^2)\,\mathrm dx+\int_2^3(x^2-2x)\,\mathrm dx=\frac43+\frac43=\frac83\). Nếu em lấy ngay \(\left|\int_0^3(2x-x^2)dx\right|\), hai phần trái dấu sẽ bị triệt và không cho diện tích thực.


**Kiểm lỗi**

Nếu em dùng một hiệu có dấu xuyên qua giao điểm đổi thứ tự của hai đường, đọc **Kiến thức 3.4**, làm **Bài 89** và **Bài 93**; thử thêm **Bài 94** để lập hai tích phân đúng chiều. Diện tích phải cộng trị dương từng mảnh.

</details>

### 3.5. Mô hình diện tích từ giao điểm

<!-- LESSON_ID: TOP11-M19; OUTCOME_ID: TOP11-O19 -->

> **PHƯƠNG PHÁP — Mô hình diện tích từ giao điểm.** Trước khi tính nguyên hàm, hãy xác định miền hình phẳng: các đường biên, giao điểm thực thuộc miền đang xét và biến tích phân. Với các lát cắt đứng, giải phương trình \(f(x)=g(x)\) để tìm giao điểm; kiểm tra thứ tự trên/dưới trên từng khoảng rồi lập tích phân. Hai đường không nhất thiết tạo thành một miền kín; không tự đặt cận nếu đề bài hoặc giao điểm chưa xác định chúng.

Chẳng hạn, \(y=2x\) và \(y=x^2\) giao tại \(x=0\) và \(x=2\). Trên \((0;2)\), \(2x>x^2\), nên \(S=\int_0^2(2x-x^2)\,\mathrm dx=\frac43\) đơn vị diện tích. Hai cận được xác định từ phương trình giao điểm.

**Ví dụ**

**Đề bài:** Tìm diện tích hình phẳng giới hạn bởi \(y=2-x^2\) và \(y=x\) giữa hai giao điểm.

**Lời giải:** Giải \(2-x^2=x\), tương đương \(x^2+x-2=0\), được \(x=-2\) hoặc \(x=1\). Trên \((-2;1)\), hiệu \(2-x^2-x=(1-x)(x+2)>0\). Vậy \(S=\int_{-2}^1(2-x^2-x)\,\mathrm dx=\left[2x-\frac{x^3}3-\frac{x^2}2\right]_{-2}^1=\frac92\) đơn vị diện tích.

**Vận dụng** Hai đồ thị \(y=4-x^2\) và \(y=0\) tạo thành một hình phẳng bị chặn. Tự tìm hai giao điểm, xác định đường nằm trên giữa chúng rồi tính diện tích.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

Giải \(4-x^2=0\), được \(x=-2\) hoặc \(x=2\). Trên \((-2;2)\), \(4-x^2>0\), nên parabol nằm trên trục hoành. Vậy \(S=\int_{-2}^{2}(4-x^2)\,dx=\left[4x-\dfrac{x^3}{3}\right]_{-2}^{2}=\dfrac{32}{3}\) đơn vị diện tích. Hai cận phải đến từ giao điểm; không lấy lại cận của ví dụ đã học.


**Kiểm lỗi**

Nếu em lấy cận theo cảm tính thay vì giải giao điểm, hoặc quên miền của mô hình, đọc **Kiến thức 3.5**, làm **Bài 95** và **Bài 99**. Giao điểm cùng điều kiện đề mới xác định cận và miền diện tích.

</details>

## 4. Khi mỗi lát cắt có diện tích, toàn khối có thể tích

Đối với một khối ba chiều, ta không cộng chiều cao theo từng lát mà cộng **diện tích mặt cắt nhân độ dày**. Hình cắt là hình vuông thì dùng cạnh bình phương; hình tròn thì dùng \(\pi r^2\); nếu quay một miền có lỗ quanh trục, mặt cắt là vành khăn và phải trừ **diện tích hai đĩa**. Việc xác định đúng mặt cắt, trục quay, miền và đơn vị quyết định công thức, không có một hệ số \(\pi\) dùng chung cho mọi bài thể tích.

Mỗi lát cắt mỏng của một khối có diện tích riêng; cộng chúng bằng tích phân cho thể tích. Công thức chỉ đúng khi chọn đúng hình tiết diện — hình vuông, hình tròn, hay vành khăn khi quay quanh một trục.

### 4.1. Thể tích từ thiết diện vuông

<!-- LESSON_ID: TOP11-M20; OUTCOME_ID: TOP11-O20 -->

Nếu mặt cắt vuông góc với \(Ox\) tại \(x\) có diện tích \(A(x)\ge0\) và \(A\) liên tục trên \([a;b]\), thể tích khối là \(V=\int_a^b A(x)\,\mathrm dx\). Một lát mỏng có thể tích gần bằng diện tích mặt cắt nhân độ dày. Vì vậy cần chọn đúng diện tích mặt cắt: hình vuông cạnh \(s\) có diện tích \(s^2\), hình tròn bán kính \(r\) có diện tích \(\pi r^2\). Không thêm \(\pi\) nếu mặt cắt không phải hình tròn.

Chẳng hạn, thiết diện vuông cạnh \(2x\) trên \([0;1]\) (độ dài tính bằng cm) có diện tích \(A(x)=4x^2\) cm² và thể tích \(V=\int_0^1 4x^2\,\mathrm dx=\frac43\) cm³. Không nhân thêm \(\pi\) vì mặt cắt là hình vuông.

> **CÔNG THỨC — Thể tích từ thiết diện vuông.** Hình minh họa **hai lát cắt có cùng độ dài tham chiếu bằng 1**, không phải các thiết diện cạnh \(2x\) của ví dụ tính \(\frac43\) vừa giải. Nếu cạnh hình vuông \(s=1\), diện tích là \(s^2=1\); nếu bán kính hình tròn \(r=1\), diện tích là \(\pi r^2=\pi\). Bởi vậy phải xác định hình dạng mặt cắt **trước** khi lập \(V=\int A(x)\,dx\): khác hình, khác diện tích dù dùng cùng một số đo chiều dài.

![Phân biệt thiết diện vuông và tròn](../../visuals/THPT_TOPIC11_CROSS_SECTION_SQUARE_CIRCLE_R01.svg)

*Đọc hình:* Lát vuông có cạnh 1 nên diện tích 1; lát tròn có bán kính 1 nên diện tích \(\pi\). Đây là so sánh diện tích của hai mặt cắt, không phải thể tích của hai khối.

Từ công thức thiết diện, ta còn có thể **tự suy ra thể tích khối chóp cụt**, không phải học thuộc một công thức không có nguồn gốc. Xét khối chóp cụt có hai đáy đồng dạng diện tích \(S_0\) và \(S_1\), chiều cao \(h>0\). Đặt \(x\) là khoảng cách từ đáy thứ nhất (\(0\le x\le h\)). Vì các thiết diện song song với đáy đồng dạng, kích thước dài thay đổi tuyến tính, nên căn bậc hai diện tích thiết diện biến thiên tuyến tính:
\[
\sqrt{A(x)}=\sqrt{S_0}+\frac{x}{h}(\sqrt{S_1}-\sqrt{S_0}).
\]
Bình phương rồi lấy tích phân từ \(0\) đến \(h\) cho thể tích.

> **CÔNG THỨC — Thể tích khối chóp cụt.** Với hai đáy đồng dạng diện tích \(S_0,S_1\ge0\) và chiều cao \(h>0\), thể tích là \(\displaystyle V=\frac h3(S_0+\sqrt{S_0S_1}+S_1)\). Khi một đáy thu về đỉnh (\(S_1=0\)), nhận được công thức khối chóp \(V=\frac h3S_0\). Cần đúng giả thiết các tiết diện đồng dạng và kích thước biến thiên tuyến tính theo chiều cao.

**Ví dụ minh họa.** Một khối chóp cụt đều có hai đáy diện tích \(9\) và \(36\) cm², cao \(6\) cm. Thể tích là \(V=\frac63(9+\sqrt{9\cdot36}+36)=2(9+18+36)=126\) cm³. Cách suy từ diện tích thiết diện giải thích hạng căn \(\sqrt{S_0S_1}\), không phải cộng tùy ý hai diện tích đáy.

**Ví dụ**

**Đề bài:** Một khối có tiết diện vuông cạnh \(s(x)=2x+1\) cm, với \(x\in[0;1]\) (cm). Tính thể tích.

**Lời giải:** Diện tích mặt cắt là \(A(x)=(2x+1)^2=4x^2+4x+1\) cm². Do đó \(V=\int_0^1(4x^2+4x+1)\,\mathrm dx=\frac43+2+1=\frac{13}3\) cm³. Không nhân \(\pi\) vì tiết diện là hình vuông.

**Vận dụng** Một khối có thiết diện vuông cạnh 3 không đổi trên đoạn dài 2 (cùng đơn vị độ dài). Tính thể tích.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

\(V=3^2\cdot2=18\) đơn vị thể tích.

Nếu dùng 3 thay cho9, bạn lấy cạnh làm diện tích.


**Kiểm lỗi**

Nếu em lấy chiều dài cạnh hình vuông làm diện tích, hoặc nhân thêm \(\pi\) dù thiết diện là vuông, đọc **Kiến thức 4.1**, làm **Bài 100** và **Bài 104**. Phải lập \(A(x)=s(x)^2\) rồi tích phân theo chiều dài.

</details>

### 4.2. Thể tích từ tiết diện tròn

<!-- LESSON_ID: TOP11-M21; OUTCOME_ID: TOP11-O21 -->

> **CÔNG THỨC — Thể tích từ tiết diện tròn.** Nếu khối có mặt cắt vuông góc với \(Ox\) là hình tròn bán kính \(r(x)\ge0\) trên \([a;b]\), diện tích mặt cắt là \(A(x)=\pi r(x)^2\). Khi \(A\) liên tục, thể tích là \(V=\pi\int_a^b r(x)^2\,\mathrm dx\). Đây là phương pháp mặt cắt, không bắt buộc khối được tạo bởi phép quay. Nếu bán kính và độ dày tính bằng cm, diện tích tính bằng cm² và thể tích tính bằng cm³.

Chẳng hạn, với \(r(x)=2x\) trên \([0;1]\), thể tích là \(V=\pi\int_0^1 4x^2\,\mathrm dx=\frac{4\pi}3\) đơn vị thể tích. Phải bình phương bán kính trước khi lấy tích phân.

**Ví dụ**

**Đề bài:** Khối có thiết diện tròn bán kính \(r(x)=\sqrt{x+1}\) cm với \(x\in[0;3]\) (cm). Tính thể tích \(V\).

**Lời giải:** Bán kính không âm trên đoạn; diện tích mặt cắt là \(A(x)=\pi r(x)^2=\pi(x+1)\) cm². Vậy \(V=\pi\int_0^3(x+1)\,\mathrm dx=\pi\left(\frac92+3\right)=\frac{15\pi}2\) cm³.

**Vận dụng** Một khối có thiết diện tròn bán kính \(r(x)=1+x\) trên \([0;1]\). Tính thể tích.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

\(V=\pi\int_0^1(1+x)^2\,\mathrm dx=\frac{7\pi}3\).

Nếu ra \(\frac{3\pi}2\), em đã tính \(\pi\int_0^1(1+x)\,dx\), tức tích phân bán kính thay vì diện tích tiết diện. Phải bình phương bán kính trước: \(\pi(1+x)^2\).


**Kiểm lỗi**

Nếu em quên bình phương bán kính hoặc nhầm đường kính với bán kính, đọc **Kiến thức 4.2**, làm **Bài 106** và **Bài 110**. Với tiết diện tròn, \(A(x)=\pi r(x)^2\); kiểm đơn vị cm³.

</details>

### 4.3. Đĩa và vành khăn khối xoay

<!-- LESSON_ID: TOP11-M22; OUTCOME_ID: TOP11-O22 -->

> **CÔNG THỨC — Đĩa và vành khăn khối xoay.** Nếu \(f\) liên tục, không âm trên \([a;b]\), khi quay miền \(0\le y\le f(x)\) quanh \(Ox\), mặt cắt là đĩa bán kính \(f(x)\). Thể tích là \(V=\pi\int_a^b f(x)^2\,\mathrm dx\). Nếu quay miền \(g(x)\le y\le f(x)\) với \(f,g\) liên tục và \(0\le g(x)\le f(x)\), mặt cắt là vành khăn bán kính ngoài \(R(x)=f(x)\), bán kính trong \(r(x)=g(x)\). Khi đó \(V=\pi\int_a^b\left(R(x)^2-r(x)^2\right)\mathrm dx\). Nếu miền cắt hoặc nằm khác phía trục quay, cần xác định lại bán kính và hình dạng mặt cắt, không áp dụng máy móc công thức này.

Chẳng hạn, quay miền \(0\le y\le x\), \(x\in[0;1]\) quanh \(Ox\), ta được \(V=\pi\int_0^1 x^2\,\mathrm dx=\frac{\pi}3\). Nếu quay miền \(x\le y\le2\), \(x\in[0;2]\), bán kính ngoài là 2, bán kính trong là \(x\); khi đó \(V=\pi\int_0^2(4-x^2)\,\mathrm dx=\frac{16\pi}3\). Phải lấy hiệu hai bình phương, không bình phương hiệu hai bán kính.

Ngay trên hình, lấy miền \(0\le x\le2\), \(x\le y\le2\) quay quanh \(Ox\). Tại lát \(x=1\), vành khăn có bán kính ngoài 2, trong 1 nên diện tích \(\pi(2^2-1^2)=3\pi\). Khi cộng các lát, \(V=\pi\int_0^2(4-x^2)\,\mathrm dx=\frac{16\pi}3\). Việc **trừ hai bình phương** xuất phát từ diện tích đĩa lớn trừ đĩa nhỏ, không từ bình phương bề dày.

![Tiết diện vành khăn khi quay quanh trục Ox](../../visuals/THPT_TOPIC11_WASHER_REVOLUTION_R01.svg)

*Đọc hình:* Ở mỗi \(x\), bán kính ngoài luôn 2 và bán kính trong bằng \(x\). Lát \(x=1\) có diện tích \(3\pi\), còn tổng cả khối \(\frac{16\pi}3\); không thay \(R^2-r^2\) bằng \((R-r)^2\).

**Ví dụ**

**Đề bài:** Miền \(0\le x\le1\), \(x\le y\le x+2\) quay quanh \(Ox\). Tính thể tích khối xoay.

**Lời giải:** Bán kính ngoài \(R=x+2\), bán kính trong \(r=x\ge0\). Lát cắt là vành khăn có diện tích \(A(x)=\pi(R^2-r^2)=\pi\left((x+2)^2-x^2\right)=\pi(4x+4)\). Do đó \(V=\pi\int_0^1(4x+4)\,\mathrm dx=6\pi\) đơn vị thể tích. Không tính \(\pi(R-r)^2\) và không nhầm với đĩa đặc.

**Vận dụng** Quay miền \(0\le x\le2,\ 1\le y\le3\) quanh trục \(Ox\). Tính thể tích và giải thích vì sao không dùng đĩa đặc.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

Miền không chạm trục \(Ox\), nên mỗi thiết diện là vành khăn có bán kính ngoài \(R=3\), trong \(r=1\). Diện tích là \(\pi(3^2-1^2)=8\pi\). Thể tích \(V=\int_0^2 8\pi\,dx=16\pi\) đơn vị thể tích. Nếu ra \(18\pi\), em đã tính cả phần lỗ; nếu ra \(8\pi\), em đã dùng \(\pi(R-r)^2\) thay hiệu hai diện tích.


**Kiểm lỗi**

Nếu em dùng công thức đĩa đặc cho một miền quay có lỗ hoặc lấy \((R-r)^2\) thay \(R^2-r^2\), đọc **Kiến thức 4.3**, làm **Bài 111** và **Bài 115**; giải **Bài 116** về vành khăn trước khi kết luận. Chỉ áp dụng công thức sau khi xác định vùng và bán kính thật.

</details>

<!-- AUTHORING_ONLY: source-locked figure custody and interaction SPEC_ONLY notes preserved in original R02 blob 1150ecb3681ce180ff7db889a30a61f164b7fa3b. The learner text already places verified SVG inline. -->

> **Kiến thức cần ghi nhớ**
>
> - **Nguyên hàm** \(F'=f\) trên một khoảng có họ \(F+C\); điều kiện đầu mới xác định \(C\). Với \(x^n\), công thức chia cho \(n+1\) chỉ khi \(n\ne-1\); \(\frac1x\) dùng \(\ln|x|\) trên từng nhánh.
> - **Newton–Leibniz:** với \(f\) liên tục và \(F'=f\) trên đoạn, \(\int_a^b f=F(b)-F(a)\), không viết \(+C\). Đảo cận làm đổi dấu, ghép cận phải theo đúng vị trí.
> - **Phân biệt tích phân và diện tích:** tích phân có dấu có thể âm/triệt tiêu; diện tích dùng \(\int|f|\), quãng đường dùng \(\int|v|\), còn độ dời dùng \(\int v\). Kiểm chỗ đổi dấu.
> - **Thể tích theo thiết diện:** \(V=\int_a^b A(x)\,dx\); đĩa tròn \(A=\pi r^2\), vành khăn \(A=\pi(R^2-r^2)\) khi bán kính ngoài/trong và miền quay đã xác định đúng.

# Luyện tập

Làm từng bài trước khi mở **Lời giải**. Khi tính nguyên hàm, kiểm đạo hàm và miền; với tích phân, kiểm cận, dấu và đơn vị; với hình học, mô tả hình phẳng/tiết diện trước khi lập tích phân. Rubric đi kèm giúp em tự xem lại từng bước lập luận, không phải bảng điểm đánh giá độc lập.

## 1. Nguyên hàm và điều kiện đầu

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-W01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O01; SINGLE_ITEM_ID -->

**Bài 1.** Viết lời giải kiểm tra hai hàm \(F(x)=x^3-2x\) và \(G(x)=x^3-2x+6\) có cùng là nguyên hàm của \(f(x)=3x^2-2\) không.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** Cả hai đúng; \(G-F=6\).

**Lời giải:** \(F'=G'=3x^2-2\); cùng trên \(\mathbb R\); \(G-F=6\) là hằng số.

**Rubric tự luận /5:** 2đ tính đúng hai đạo hàm; 1đ đối chiếu f; 1đ xét chung khoảng \(\mathbb R\); 1đ kết luận hai hàm chênh hằng số.

**Nếu làm sai:** Muốn chứng minh nguyên hàm, hãy lấy đạo hàm F và so với f trên đúng khoảng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-A01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O01; SINGLE_ITEM_ID -->

**Bài 2.** Mô hình vị trí \(s(t)=t^3+2t\) (m) với \(t\ge0\). Viết vận tốc v(t).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(v(t)=3t^2+2\) (m/s).

**Lời giải:** Lấy đạo hàm vị trí theo thời gian; \(v(t)=s'(t)=3t^2+2\), \(t\ge0\).

**Nếu làm sai:** Muốn chứng minh nguyên hàm, hãy lấy đạo hàm F và so với f trên đúng khoảng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-P01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O01; SINGLE_ITEM_ID -->

**Bài 3.** Kiểm tra \(G(x)=\frac{x^3}{3}+x\) có phải nguyên hàm của \(g(x)=x^2+1\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có.

**Lời giải:** \(G'(x)=x^2+1\) trên \(\mathbb R\). Giải thích chọn cách: Đạo hàm đáp án ứng viên để kiểm đúng f; không kiểm bằng cách thay một giá trị x.

**Nếu làm sai:** Muốn chứng minh nguyên hàm, hãy lấy đạo hàm F và so với f trên đúng khoảng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-C01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O01; SINGLE_ITEM_ID -->

**Bài 4.** \(F(x)=2x^3-5x+7\) có là nguyên hàm của \(f(x)=6x^2-5\) trên \(\mathbb R\) không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có.

**Lời giải:** \(F'(x)=6x^2-5=f(x)\) trên \(\mathbb R\). Giải thích chọn cách: Đạo hàm đáp án ứng viên để kiểm đúng f; không kiểm bằng cách thay một giá trị x.

**Nếu làm sai:** Muốn chứng minh nguyên hàm, hãy lấy đạo hàm F và so với f trên đúng khoảng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P01; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O01; SINGLE_ITEM_ID -->

**Bài 5.** Tìm họ nguyên hàm \(f(x)=6x-4\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(F(x)=3x^2-4x+C\) trên \(\mathbb R\).

**Lời giải:** Muốn \(F'=6x-4\), chọn \(F=3x^2-4x+C\) vì \((3x^2)'=6x\) và \((-4x)'=-4\). Hai nguyên hàm trên khoảng \(\mathbb R\) khác nhau hằng số C; kiểm ngược \(F'=6x-4\).

**Nếu làm sai:** Nếu quên +C, nhớ đạo hàm mọi hằng số đều bằng 0, nên có cả một họ nguyên hàm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-W02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O02; SINGLE_ITEM_ID -->

**Bài 6.** Tìm F nếu \(F'(x)=6x\) và \(F(-1)=1\); kiểm lại đầy đủ.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(F(x)=3x^2-2\).

**Lời giải:** \(F=3x^2+C\); \(F(-1)=3+C=1\) nên \(C=-2\); đạo hàm 6x và giá trị tại -1 bằng 1.

**Rubric tự luận /5:** 2đ lấy đúng họ nguyên hàm; 1đ lập điều kiện; 1đ giải C; 1đ kiểm lại cả hai điều kiện.

**Nếu làm sai:** Viết \(F_0+C\) rồi thay \(F(a)=b\) vào \(F\), đừng thay vào đạo hàm \(F'\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-A02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O02; SINGLE_ITEM_ID -->

**Bài 7.** Một vật có \(v(t)=4t\) (m/s), \(s(0)=6\) m. Viết vị trí s(t) cho \(t\ge0\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(s(t)=2t^2+6\).

**Lời giải:** Từ \(s'=4t\) có \(s=2t^2+C\); điều kiện \(s(0)=6\) cho \(C=6\).

**Nếu làm sai:** Viết \(F_0+C\) rồi thay \(F(a)=b\) vào \(F\), đừng thay vào đạo hàm \(F'\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-P02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O02; SINGLE_ITEM_ID -->

**Bài 8.** \(F'(x)=2x\), \(F(2)=9\). Tìm F.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(F(x)=x^2+5\).

**Lời giải:** \(F=x^2+C\); \(4+C=9\) nên \(C=5\). Giải thích chọn cách: Tích phân được F+C; thay \(x_0\) vào F+C; giải C; kiểm lại đạo hàm và điều kiện đầu.

**Nếu làm sai:** Viết \(F_0+C\) rồi thay \(F(a)=b\) vào \(F\), đừng thay vào đạo hàm \(F'\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-C02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O02; SINGLE_ITEM_ID -->

**Bài 9.** Viết họ nguyên hàm của 4x trên \(\mathbb R\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(2x^2+C\).

**Lời giải:** Vì \((2x^2)'=4x\) nên họ là \(2x^2+C\).

**Nếu làm sai:** Viết \(F_0+C\) rồi thay \(F(a)=b\) vào \(F\), đừng thay vào đạo hàm \(F'\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P02; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O02; SINGLE_ITEM_ID -->

**Bài 10.** \(F'=3x^2\), \(F(2)=9\); tìm F.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(F=x^3+C\), \(C=9-8=1\); \(F=x^3+1\).

**Lời giải:** Từ \(F'=3x^2\) suy \(F=x^3+C\). Điều kiện \(F(2)=9\) cho \(8+C=9\Rightarrow C=1\); vậy \(F=x^3+1\). Kiểm \(F'=3x^2\) và \(F(2)=9\).

**Nếu làm sai:** Thay điều kiện giá trị đầu vào F, không vào F'; C chỉ xuất hiện khi nguyên hàm xong.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-W01; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O02; SINGLE_ITEM_ID -->

**Bài 11.** Cho \(F'(x)=3x^2-4x+1\) trên \(\mathbb R\) và \(F(1)=2\). (a) Viết họ nguyên hàm. (b) Tìm C. (c) Tính \(F(2)\). (d) Chứng minh nghiệm là duy nhất trên \(\mathbb R\) trong họ nguyên hàm.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(F=x^3-2x^2+x+2\); \(F(2)=8-8+2+2=4\); \(C=2\).

**Lời giải:** Nguyên hàm \(F=x^3-2x^2+x+C\); \(F(1)=1-2+1+C=C=2\). \(F(2)=8-8+2+2=4\). Kiểm \(F'=3x^2-4x+1\). Hai nguyên hàm của cùng đạo hàm trên khoảng \(\mathbb R\) chỉ khác nhau hằng; dữ kiện \(F(1)=2\) xác định C duy nhất.

**Rubric /7:**
1. Viết nguyên hàm \(x^3\) đúng (1đ)
2. Viết \(-2x^2\) đúng (1đ)
3. Viết \(+x\) và +C đúng (1đ)
4. Thay \(F(1)\) chính xác (1đ)
5. Giải \(C=2\) (1đ)
6. Tính \(F(2)=4\) (1đ)
7. Kiểm đạo hàm/giải thích duy nhất trên \(\mathbb R\) (1đ)

**Nếu làm sai:** Đặt \(F=F_0+C\) rồi thay điều kiện vào F, không phải vào F'.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-W03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O03; SINGLE_ITEM_ID -->

**Bài 12.** Giải đầy đủ \(\int (2x^3+6x-2)\,\mathrm dx\) và kiểm bằng đạo hàm.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(\frac{x^4}{2}+3x^2-2x+C\).

**Lời giải:** Từng hạng tử cho \(\frac{x^4}2,3x^2,-2x\); lấy đạo hàm khôi phục \(2x^3+6x-2\).

**Rubric tự luận /5:** 1đ nêu tuyến tính; 2đ tính ba hạng tử; 1đ +C; 1đ kiểm đạo hàm.

**Nếu làm sai:** Nhớ chia cho \(n+1\) khi \(n\ne-1\), giữ \(+C\) và kiểm đạo hàm ngược.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-A03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O03; SINGLE_ITEM_ID -->

**Bài 13.** Một đại lượng có \(q'(t)=3t^2+2\), \(q(0)=4\). Viết q(t).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(q(t)=t^3+2t+4\).

**Lời giải:** Nguyên hàm \(t^3+2t+C\), từ \(q(0)=4\) được \(C=4\).

**Nếu làm sai:** Nhớ chia cho \(n+1\) khi \(n\ne-1\), giữ \(+C\) và kiểm đạo hàm ngược.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-P03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O03; SINGLE_ITEM_ID -->

**Bài 14.** Tính \(\int (5x^4-4x+3)\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(x^5-2x^2+3x+C\).

**Lời giải:** Tách ba hạng tử, áp công thức lũy thừa và tuyến tính.

**Nếu làm sai:** Nhớ chia cho \(n+1\) khi \(n\ne-1\), giữ \(+C\) và kiểm đạo hàm ngược.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-C03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O03; SINGLE_ITEM_ID -->

**Bài 15.** Tính \(\int 6x^2\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(2x^3+C\).

**Lời giải:** Dùng \(n=2\): \(6\cdot\frac{x^3}3=2x^3\). Giải thích chọn cách: Tách đa thức thành các hạng tử, nâng số mũ một đơn vị, chia số mũ mới, rồi lấy đạo hàm kiểm.

**Nếu làm sai:** Nhớ chia cho \(n+1\) khi \(n\ne-1\), giữ \(+C\) và kiểm đạo hàm ngược.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P03; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O03; SINGLE_ITEM_ID -->

**Bài 16.** Tính \(\int (3x^{2}+4x-2)\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(x^3+2x^2-2x+C\).

**Lời giải:** Lấy nguyên hàm từng hạng: \(\int3x^2\,\mathrm dx=x^3\), \(\int4x\,\mathrm dx=2x^2\) và \(\int(-2)\,\mathrm dx=-2x\). Cộng lại được \(x^3+2x^2-2x+C\); đạo hàm ngược trả đúng \(3x^2+4x-2\).

**Nếu làm sai:** Quy tắc lũy thừa tăng số mũ thêm1 rồi chia hệ số mới; kiểm bằng đạo hàm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-W04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O04; SINGLE_ITEM_ID -->

**Bài 17.** Tính \(\int(\frac4x-x^{-2})\,\mathrm dx\) trên mỗi khoảng không chứa 0; kiểm đạo hàm.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(4\ln|x|+\frac1x+C\).

**Lời giải:** \(\int -x^{-2}\,\mathrm dx=\frac1x\); đạo hàm của \(\frac1x\) là \(-\frac1{x^2}\).

**Rubric tự luận /5:** 1đ điều kiện \(x\ne0\); 2đ log và lũy thừa; 1đ +C; 1đ đạo hàm kiểm.

**Nếu làm sai:** Trên \(x<0\) dùng \(\ln(-x)\), trên \(x>0\) dùng \(\ln x\); mỗi khoảng có hằng số riêng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-A04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O04; SINGLE_ITEM_ID -->

**Bài 18.** Biết \(F'(x)=\frac3x\) trên \(x>0\), \(F(1)=2\). Tính F(x).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(3\ln x+2\).

**Lời giải:** \(F=3\ln x+C\); \(\ln1=0\Rightarrow C=2\). Giải thích chọn cách: Nhận diện \(\frac1x\), tách tuyến tính các hạng khác, ghi điều kiện \(x\ne0\) và lấy đạo hàm kiểm.

**Nếu làm sai:** Trên \(x<0\) dùng \(\ln(-x)\), trên \(x>0\) dùng \(\ln x\); mỗi khoảng có hằng số riêng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-P04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O04; SINGLE_ITEM_ID -->

**Bài 19.** Tính \(\int(\frac1x+2x)\,\mathrm dx\) trên \(x>0\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\ln x+x^2+C\).

**Lời giải:** Tính từng phần và ghi \(x>0\). Giải thích chọn cách: Nhận diện \(\frac1x\), tách tuyến tính các hạng khác, ghi điều kiện \(x\ne0\) và lấy đạo hàm kiểm.

**Nếu làm sai:** Trên \(x<0\) dùng \(\ln(-x)\), trên \(x>0\) dùng \(\ln x\); mỗi khoảng có hằng số riêng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-C04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O04; SINGLE_ITEM_ID -->

**Bài 20.** Tính \(\int\frac2x\,\mathrm dx\) trên \(x<0\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(2\ln|x|+C\).

**Lời giải:** Dùng nguyên hàm \(\ln|x|\) hợp lệ trên \((-\infty;0)\).

**Nếu làm sai:** Trên \(x<0\) dùng \(\ln(-x)\), trên \(x>0\) dùng \(\ln x\); mỗi khoảng có hằng số riêng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P04; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O04; SINGLE_ITEM_ID -->

**Bài 21.** Tìm nguyên hàm \(\frac2x\) trên \((-\infty;0)\) biết \(F(-1)=3\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(F=2\ln(-x)+3\) trên \(x<0\).

**Lời giải:** Trên \(x<0\), \(\ln|x|=\ln(-x)\) hợp lệ. Họ nguyên hàm \(F=2\ln(-x)+C\), và \(F(-1)=2\ln1+C=C=3\). Vậy \(F=2\ln(-x)+3\). Kiểm \(F'=\frac2x\) trên nhánh âm.

**Nếu làm sai:** Không dùng \(\ln x\) cho \(x\) âm; phép đổi \(\ln|x|\) thành \(\ln(-x)\) chỉ hợp lệ trên \(x<0\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-W02; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O04; SINGLE_ITEM_ID -->

**Bài 22.** Trên khoảng \((-\infty;0)\), cho \(F'(x)=\frac2x+\cos x\) và \(F(-1)=4\). (a) Tìm họ nguyên hàm. (b) Xác định F đúng miền với hằng C. (c) Kiểm đạo hàm và giá trị đầu. (d) Nêu vì sao không dùng \(\ln x\) trên khoảng âm.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(F(x)=2\ln(-x)+\sin x+4+\sin1\) (\(x<0\)).

**Lời giải:** Vì \(x<0\) nên \(\int\frac2x\,\mathrm dx=2\ln(-x)+C_1\), và \(\int\cos x\,\mathrm dx=\sin x+C_2\). Do đó \(F=2\ln(-x)+\sin x+C\). \(F(-1)=0-\sin1+C=4\Rightarrow C=4+\sin1\). Đạo hàm \(\ln(-x)\) là \(\frac{-1}{-x}=\frac1x\), nên \(F'=\frac2x+\cos x\); \(F(-1)=4\). \(\ln x\) không xác định thực nếu \(x<0\).

**Rubric /7:**
1. Giữ miền \(x<0\) (1đ)
2. Nguyên hàm \(\frac2x\) thành \(2\ln(-x)\) (1đ)
3. Nguyên hàm \(\cos x\) đúng (1đ)
4. Lập \(F=\ldots+C\) (1đ)
5. Tính \(C=4+\sin1\) (1đ)
6. Kiểm F' và \(F(-1)\) (1đ)
7. Giải thích \(\ln x\) không hợp lệ \(x<0\) (1đ)

**Nếu làm sai:** Ghi \(\ln|x|\) trên mỗi khoảng không chứa0, sau mới dùng giá trị đầu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-W05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O05; SINGLE_ITEM_ID -->

**Bài 23.** Giải \(\int (2^x+3e^x)\,\mathrm dx\) và kiểm đạo hàm.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(\frac{2^x}{\ln2}+3e^x+C\).

**Lời giải:** Tách tuyến tính, phần \(2^x\) phải chia \(\ln2\); kiểm bằng đạo hàm.

**Rubric tự luận /5:** 1đ nêu \(a>0,a\ne1\); 2đ hai nguyên hàm đúng; 1đ hằng số; 1đ kiểm đạo hàm.

**Nếu làm sai:** Kiểm hệ số của đạo hàm hàm mũ bên trong: \(\int e^{kx}\,\mathrm dx=\frac{e^{kx}}k+C\) (với \(k\ne0\)).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-A05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O05; SINGLE_ITEM_ID -->

**Bài 24.** Lượng chất có \(q'(t)=3e^t\) và \(q(0)=5\). Viết q(t).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(q(t)=3e^t+2\).

**Lời giải:** \(q=3e^t+C\); \(3+C=5\Rightarrow C=2\). Giải thích chọn cách: Tách hệ số rồi chia \(\ln a\) nếu cơ số a không phải e.

**Nếu làm sai:** Kiểm hệ số của đạo hàm hàm mũ bên trong: \(\int e^{kx}\,\mathrm dx=\frac{e^{kx}}k+C\) (với \(k\ne0\)).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-P05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O05; SINGLE_ITEM_ID -->

**Bài 25.** Tính \(\int 2^x\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\frac{2^x}{\ln2}+C\).

**Lời giải:** \((2^x)'=2^x\ln2\), vì vậy chia \(\ln2\).

**Nếu làm sai:** Kiểm hệ số của đạo hàm hàm mũ bên trong: \(\int e^{kx}\,\mathrm dx=\frac{e^{kx}}k+C\) (với \(k\ne0\)).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-C05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O05; SINGLE_ITEM_ID -->

**Bài 26.** Tính \(\int e^x\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(e^x+C\).

**Lời giải:** Vì đạo hàm \(e^x\) là \(e^x\). Giải thích chọn cách: Tách hệ số rồi chia \(\ln a\) nếu cơ số a không phải e.

**Nếu làm sai:** Kiểm hệ số của đạo hàm hàm mũ bên trong: \(\int e^{kx}\,\mathrm dx=\frac{e^{kx}}k+C\) (với \(k\ne0\)).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P05; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O05; SINGLE_ITEM_ID -->

**Bài 27.** Tính \(\int (2e^{2x}+3^x)\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(e^{2x}+\frac{3^x}{\ln3}+C\).

**Lời giải:** Một nguyên hàm của \(2e^{2x}\) là \(e^{2x}\) vì đạo hàm của \(e^{2x}\) là \(2e^{2x}\). Một nguyên hàm của \(3^x\) là \(\frac{3^x}{\ln3}\) vì đạo hàm \(3^x\) bằng \(3^x\ln3\). Cộng được \(F=e^{2x}+\frac{3^x}{\ln3}+C\).

**Nếu làm sai:** Không áp quy tắc nguyên hàm \(x^n\) cho hàm có x ở số mũ; dùng đạo hàm mũ ngược.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-W06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O06; SINGLE_ITEM_ID -->

**Bài 28.** Tính \(\int(\frac1{\cos^2 x}+2\sin x)\,\mathrm dx\) trên khoảng \(\cos x\ne0\); kiểm bằng đạo hàm.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(\tan x-2\cos x+C\).

**Lời giải:** Dùng \((\tan x)'=\sec^2 x\) và \(d(-2\cos x)=2\sin x\).

**Rubric tự luận /5:** 1đ điều kiện \(\cos x\ne0\); 2đ hai nguyên hàm; 1đ +C; 1đ kiểm đạo hàm.

**Nếu làm sai:** Nguyên hàm sin có dấu trừ, cos thành sin; góc phải là radian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-A06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O06; SINGLE_ITEM_ID -->

**Bài 29.** Vận tốc \(v(t)=2\cos t\), \(0\le t\le\frac{\pi}2\), vị trí \(s(0)=0\). Viết s(t).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(s(t)=2\sin t\).

**Lời giải:** \(s=2\sin t+C\); \(s(0)=0\Rightarrow C=0\). Giải thích chọn cách: Tách hệ số, ghi dấu âm chính xác ở nguyên hàm sin, kiểm bằng đạo hàm lượng giác.

**Nếu làm sai:** Nguyên hàm sin có dấu trừ, cos thành sin; góc phải là radian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-P06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O06; SINGLE_ITEM_ID -->

**Bài 30.** Tính \(\int (3\sin  x-2\cos  x)\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(-3\cos x-2\sin x+C\).

**Lời giải:** Từng hạng tử; đạo hàm của \(-3\cos x\) là \(+3\sin x\).

**Nếu làm sai:** Nguyên hàm sin có dấu trừ, cos thành sin; góc phải là radian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-C06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O06; SINGLE_ITEM_ID -->

**Bài 31.** Tính \(\int 2\cos  x\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(2\sin x+C\).

**Lời giải:** \((2\sin x)'=2\cos x\). Giải thích chọn cách: Tách hệ số, ghi dấu âm chính xác ở nguyên hàm sin, kiểm bằng đạo hàm lượng giác.

**Nếu làm sai:** Nguyên hàm sin có dấu trừ, cos thành sin; góc phải là radian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P06; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O06; SINGLE_ITEM_ID -->

**Bài 32.** Tính \(\int (2\cos  x-3\sin  x)\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(2\sin x+3\cos x+C\) (x radian).

**Lời giải:** Với \(x\) đo radian, một nguyên hàm của \(2\cos x\) là \(2\sin x\); một nguyên hàm của \(-3\sin x\) là \(3\cos x\) do \((\cos x)'=-\sin x\). Họ nguyên hàm là \(2\sin x+3\cos x+C\); kiểm ngược cả hai dấu.

**Nếu làm sai:** Quên dấu âm của đạo hàm cos dễ gây sai nguyên hàm sin; luôn đạo hàm kết quả để kiểm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-W07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O07; SINGLE_ITEM_ID -->

**Bài 33.** Lợi nhuận biên \(P'(x)=12x^2-4\), \(P(0)=100\). Tìm P(x), nêu đơn vị phù hợp nếu P tính bằng nghìn đồng.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(P(x)=4x^3-4x+100\) (nghìn đồng).

**Lời giải:** \(P=4x^3-4x+C\); \(C=100\); P' đúng, \(P(0)=100\).

**Rubric tự luận /5:** 1đ đọc P' đúng; 2đ nguyên hàm; 1đ điều kiện đầu; 1đ kiểm đơn vị và đạo hàm.

**Nếu làm sai:** Điều kiện đầu tìm C trong vị trí s; \(\int v\,\mathrm dt\) trên khoảng cho độ dời trên khoảng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-A07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O07; SINGLE_ITEM_ID -->

**Bài 34.** Một vật có \(a(t)=6t\), \(v(0)=2\), \(s(0)=1\). Viết v(t), s(t).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(v(t)=3t^2+2\); \(s(t)=t^3+2t+1\).

**Lời giải:** Hai lần nguyên hàm; mỗi lần dùng điều kiện đầu riêng.

**Nếu làm sai:** Điều kiện đầu tìm C trong vị trí s; \(\int v\,\mathrm dt\) trên khoảng cho độ dời trên khoảng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-P07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O07; SINGLE_ITEM_ID -->

**Bài 35.** Cho \(v(t)=4t^3\) và \(s(1)=5\). Tìm s(t).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(s(t)=t^4+4\).

**Lời giải:** \(s=t^4+C\); \(1+C=5\Rightarrow C=4\). Giải thích chọn cách: Đọc đúng đạo hàm, nguyên hàm, chọn C theo trạng thái ban đầu, kiểm thứ nguyên.

**Nếu làm sai:** Điều kiện đầu tìm C trong vị trí s; \(\int v\,\mathrm dt\) trên khoảng cho độ dời trên khoảng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-C07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O07; SINGLE_ITEM_ID -->

**Bài 36.** Cho \(s'(t)=6t\) và \(s(0)=3\), tìm s(t).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(s(t)=3t^2+3\).

**Lời giải:** Nguyên hàm 6t là \(3t^2+C\), \(C=3\). Giải thích chọn cách: Đọc đúng đạo hàm, nguyên hàm, chọn C theo trạng thái ban đầu, kiểm thứ nguyên.

**Nếu làm sai:** Điều kiện đầu tìm C trong vị trí s; \(\int v\,\mathrm dt\) trên khoảng cho độ dời trên khoảng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P07; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O07; SINGLE_ITEM_ID -->

**Bài 37.** Với \(v(t)=6t-4\), \(s(0)=3\), tìm s(2).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(s(2)=12-8+3=7\) m.

**Lời giải:** Vì \(s'=v=6t-4\), tích phân được \(s=3t^2-4t+C\). Dùng \(s(0)=3\Rightarrow C=3\); thế \(t=2\) cho \(s(2)=12-8+3=7\) m. Đây là vị trí, không phải quãng đường.

**Nếu làm sai:** Nếu chỉ tích phân v trên \([0;2]\), bạn tính độ dời rồi còn phải cộng vị trí đầu để tìm s(2).

</details>

## 2. Tích phân xác định và ý nghĩa tích lũy

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-W01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O08; SINGLE_ITEM_ID -->

**Bài 38.** Tính \(\int_{-1}^{2} (2x+1)\,\mathrm dx\) và giải thích vì sao kết quả không có +C.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** 6.

**Lời giải:** \(F=x^2+x\); \(F(2)=6\); \(F(-1)=0\); tích phân xác định là số 6.

**Rubric tự luận /5:** 1đ chọn F đúng; 1đ ghi \(F(b)-F(a)\); 2đ thế cận và tính; 1đ nêu không có +C.

**Nếu làm sai:** Kiểm nguyên hàm \(F\) và thay đúng \(F(b)-F(a)\), không thêm \(+C\) vào tích phân xác định.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-A01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O08; SINGLE_ITEM_ID -->

**Bài 39.** Vận tốc \(v(t)=3t^2\) m/s, \(0\le t\le2\). Tính độ dời.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 8 m.

**Lời giải:** \(\int_0^2 3t^2\,\mathrm dt=[t^3]_0^2=8\) m; vận tốc không âm nên bằng quãng đường.

**Nếu làm sai:** Kiểm nguyên hàm \(F\) và thay đúng \(F(b)-F(a)\), không thêm \(+C\) vào tích phân xác định.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-P01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O08; SINGLE_ITEM_ID -->

**Bài 40.** Tính \(\int_{1}^{3} x^{2}\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\frac{26}3\).

**Lời giải:** \(F=\frac{x^3}3\); \(F(3)-F(1)=9-\frac13=\frac{26}3\). Giải thích chọn cách: Tìm nguyên hàm F, thế cận b trước a, rút gọn; kiểm bằng ước lượng dấu.

**Nếu làm sai:** Kiểm nguyên hàm \(F\) và thay đúng \(F(b)-F(a)\), không thêm \(+C\) vào tích phân xác định.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-C01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O08; SINGLE_ITEM_ID -->

**Bài 41.** Tính \(\int_{0}^{2} 2x\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 4.

**Lời giải:** \(F=x^2\); \(F(2)-F(0)=4\). Giải thích chọn cách: Tìm nguyên hàm F, thế cận b trước a, rút gọn; kiểm bằng ước lượng dấu.

**Nếu làm sai:** Kiểm nguyên hàm \(F\) và thay đúng \(F(b)-F(a)\), không thêm \(+C\) vào tích phân xác định.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P08; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O08; SINGLE_ITEM_ID -->

**Bài 42.** Tính \(\int_{0}^{2} (3x^{2}+1)\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \([x^3+x]_0^2=8+2=10\).

**Lời giải:** Lấy \(F=x^3+x\) vì \(F'=3x^2+1\). Theo Newton–Leibniz, \(\int_0^2(3x^2+1)\,\mathrm dx=F(2)-F(0)=(8+2)-0=10\). Tích phân xác định là số, không cộng \(+C\).

**Nếu làm sai:** Ghi hai cận rõ ràng và luôn trừ giá trị tại cận dưới.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-W02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O09; SINGLE_ITEM_ID -->

**Bài 43.** Giải \(\int_{1}^{2} (6x^{2}-4x+1)\,\mathrm dx\) bằng tính tuyến tính; kiểm kết quả.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** 9.

**Lời giải:** \(F=2x^3-2x^2+x\), \(F(2)=10\) và \(F(1)=1\Rightarrow10-1=9\).

**Rubric tự luận /5:** 1đ nêu tính tuyến tính; 2đ F đúng; 1đ thế hai cận; 1đ kiểm phép tính.

**Nếu làm sai:** Tách các hạng tử phải giữ cùng cận và hệ số, rồi tính hiệu tại hai đầu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-A02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O09; SINGLE_ITEM_ID -->

**Bài 44.** Nhu cầu \(r(t)=4+2t\) đơn vị/giờ, \(0\le t\le1\). Lượng tích lũy?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 5 đơn vị.

**Lời giải:** \(\int_0^1(4+2t)\,\mathrm dt=[4t+t^2]_0^1=5\). Giải thích chọn cách: Phân phối rồi dùng nguyên hàm từng hạng tử, chỉ thế cận một lần khi đã tổng hợp \(F\).

**Nếu làm sai:** Tách các hạng tử phải giữ cùng cận và hệ số, rồi tính hiệu tại hai đầu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-P02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O09; SINGLE_ITEM_ID -->

**Bài 45.** Tính \(\int_{0}^{2} (3x^{2}-2)\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 4.

**Lời giải:** \(F=x^3-2x\); tại 2 cho \(8-4=4\). Giải thích chọn cách: Phân phối rồi dùng nguyên hàm từng hạng tử, chỉ thế cận một lần khi đã tổng hợp F.

**Nếu làm sai:** Tách các hạng tử phải giữ cùng cận và hệ số, rồi tính hiệu tại hai đầu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-C02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O09; SINGLE_ITEM_ID -->

**Bài 46.** Tính \(\int_{0}^{1} (2x+3)\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 4.

**Lời giải:** \(F=x^2+3x\); \(F(1)-F(0)=4\). Giải thích chọn cách: Phân phối rồi dùng nguyên hàm từng hạng tử, chỉ thế cận một lần khi đã tổng hợp F.

**Nếu làm sai:** Tách các hạng tử phải giữ cùng cận và hệ số, rồi tính hiệu tại hai đầu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P09; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O09; SINGLE_ITEM_ID -->

**Bài 47.** Tính \(\int_1^3(2x+1)\,\mathrm dx-\int_1^3 x\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\int_1^3(x+1)\,\mathrm dx=\left[\frac{x^2}2+x\right]_1^3=(\frac92+3)-(\frac12+1)=6\).

**Lời giải:** Hai tích phân cùng cận, nên gộp \(\int_1^3[(2x+1)-x]\,\mathrm dx=\int_1^3(x+1)\,\mathrm dx\). Nguyên hàm \(F=\frac{x^2}2+x\), hiệu \(F(3)-F(1)=(\frac92+3)-(\frac12+1)=6\).

**Nếu làm sai:** Nếu cận khác nhau, không gộp trực tiếp. Kiểm dấu của dấu trừ trước khi cộng hạng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-W03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O10; SINGLE_ITEM_ID -->

**Bài 48.** Cho \(\int_{-1}^1 f(x)\,\mathrm dx=5\) và \(\int_1^4 f(x)\,\mathrm dx=-3\). Tính \(\int_4^{-1} f(x)\,\mathrm dx\).

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(-2\).

**Lời giải:** \(\int_{-1}^4 f(x)\,\mathrm dx=5-3=2\); đảo cận được \(-2\).

**Rubric tự luận /5:** 1đ ghép hai đoạn; 1đ cộng đúng dấu; 1đ dùng đảo cận; 1đ kết quả; 1đ giải thích dấu.

**Nếu làm sai:** Đảo cận đổi dấu; tích phân có cận trùng nhau bằng 0, không là diện tích âm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-A03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O10; SINGLE_ITEM_ID -->

**Bài 49.** Độ dời 0–2 s là 4 m, 2–4 s là −6 m. Tính độ dời tổng và ý nghĩa dấu.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** −2 m.

**Lời giải:** Cộng đại số \(4-6=-2\): vị trí cuối lùi 2m so với đầu.

**Nếu làm sai:** Đảo cận đổi dấu; tích phân có cận trùng nhau bằng 0, không là diện tích âm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-P03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O10; SINGLE_ITEM_ID -->

**Bài 50.** Biết \(\int_0^2 f(x)\,\mathrm dx=7\) và \(\int_0^5 f(x)\,\mathrm dx=9\). Tính \(\int_2^5 f(x)\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 2.

**Lời giải:** \(\int_2^5 f(x)\,\mathrm dx=\int_0^5 f(x)\,\mathrm dx-\int_0^2 f(x)\,\mathrm dx=9-7=2\). Giải thích chọn cách: Vẽ trục cận theo thứ tự, ghép hoặc trừ đúng lượng, kiểm chiều dấu.

**Nếu làm sai:** Đảo cận đổi dấu; tích phân có cận trùng nhau bằng 0, không là diện tích âm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-C03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O10; SINGLE_ITEM_ID -->

**Bài 51.** Biết \(\int_1^3 f(x)\,\mathrm dx=5\) và \(\int_3^5 f(x)\,\mathrm dx=-2\). Tính \(\int_1^5 f(x)\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 3.

**Lời giải:** Ghép đoạn: \(5+(-2)=3\). Giải thích chọn cách: Vẽ trục cận theo thứ tự, ghép hoặc trừ đúng lượng, kiểm chiều dấu.

**Nếu làm sai:** Đảo cận đổi dấu; tích phân có cận trùng nhau bằng 0, không là diện tích âm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P10; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O10; SINGLE_ITEM_ID -->

**Bài 52.** Tính \(\int_{3}^{1} x^{2}\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(-\frac{26}3\).

**Lời giải:** Dùng đảo cận: \(\int_3^1 x^2\,\mathrm dx=-\int_1^3 x^2\,\mathrm dx=-\left[\frac{x^3}3\right]_1^3=-\frac{27-1}3=-\frac{26}3\). Giá trị âm do chiều lấy tích phân, không phải diện tích âm.

**Nếu làm sai:** Khi cận trên nhỏ hơn cận dưới, đổi chỗ và đặt dấu trừ một lần.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-W04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O11; SINGLE_ITEM_ID -->

**Bài 53.** Tính diện tích giữa \(y=4-x^2\) và Ox từ \(x=0\) đến \(x=2\), kèm kiểm dấu.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(\frac{16}3\) đơn vị².

**Lời giải:** \(4-x^2\ge0\) trên \([0;2]\), \(S=\left[4x-\frac{x^3}3\right]_0^2=8-\frac83=\frac{16}3\).

**Rubric tự luận /5:** 1đ chứng minh không âm; 1đ viết tích phân; 2đ nguyên hàm và cận; 1đ đơn vị/kết luận.

**Nếu làm sai:** Diện tích bằng \(\int_a^b f(x)\,\mathrm dx\) chỉ khi \(f\ge0\) trên \([a;b]\); nhớ đơn vị bình phương.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-A04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O11; SINGLE_ITEM_ID -->

**Bài 54.** Độ cao \(y=1+x\) (m) và bề rộng biến \(x\in[0;2]\) (m). Tính diện tích phần dưới đồ thị.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 4 m².

**Lời giải:** \(S=\int_0^2(1+x)\,\mathrm dx=\left[x+\frac{x^2}2\right]_0^2=4\). Giải thích chọn cách: Kiểm dấu hàm trước khi tích phân; dựng hình/thấy giao điểm với \(Ox\), lấy cận đúng.

**Nếu làm sai:** Diện tích bằng \(\int_a^b f(x)\,\mathrm dx\) chỉ khi \(f\ge0\) trên \([a;b]\); nhớ đơn vị bình phương.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-P04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O11; SINGLE_ITEM_ID -->

**Bài 55.** Tính diện tích dưới \(y=2-x\) trên \([0;2]\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 2 đơn vị².

**Lời giải:** \(2-x\ge0\), \(S=\left[2x-\frac{x^2}2\right]_0^2=4-2=2\). Giải thích chọn cách: Kiểm dấu hàm trước khi tích phân; dựng hình/thấy giao điểm với Ox, lấy cận đúng.

**Nếu làm sai:** Diện tích bằng \(\int_a^b f(x)\,\mathrm dx\) chỉ khi \(f\ge0\) trên \([a;b]\); nhớ đơn vị bình phương.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-C04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O11; SINGLE_ITEM_ID -->

**Bài 56.** Diện tích dưới \(y=x\) trên \([0;2]\) là bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 2 đơn vị².

**Lời giải:** Hàm không âm; \(S=\int_0^2 x\,\mathrm dx=\left[\frac{x^2}2\right]_0^2=2\).

**Nếu làm sai:** Diện tích bằng \(\int_a^b f(x)\,\mathrm dx\) chỉ khi \(f\ge0\) trên \([a;b]\); nhớ đơn vị bình phương.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P11; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O11; SINGLE_ITEM_ID -->

**Bài 57.** Tính diện tích dưới \(y=x^2\) trên \([0;2]\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(S=\frac83\) đơn vị diện tích.

**Lời giải:** Vì \(x^2\ge0\) và hàm liên tục trên \([0;2]\), diện tích đúng bằng tích phân \(\int_0^2 x^2\,\mathrm dx=\left[\frac{x^3}3\right]_0^2=\frac83\) đơn vị². Nếu \(f\) đổi dấu, công thức diện tích phải dùng \(|f|\).

**Nếu làm sai:** Đừng quên xác nhận \(f\ge0\) trên đoạn trước khi gọi tích phân là diện tích hình học.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-W05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O12; SINGLE_ITEM_ID -->

**Bài 58.** Diện tích giữa \(y=x^2-1\) và Ox trên \([-2;2]\) là bao nhiêu?

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** 4 đơn vị².

**Lời giải:** Nghiệm \(\pm1\); hai vùng ngoài tổng \(\frac83\), vùng giữa \(\frac43\); \(S=4\).

**Rubric tự luận /5:** 1đ nghiệm và bảng dấu; 1đ chia tích phân; 2đ tính từng phần; 1đ cộng và phân biệt tích phân có dấu.

**Nếu làm sai:** Chia tại nghiệm \(f=0\) rồi cộng độ lớn từng phần: \(\int_a^b|f(x)|\,\mathrm dx\), không lấy \(\left|\int_a^b f(x)\,\mathrm dx\right|\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-A05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O12; SINGLE_ITEM_ID -->

**Bài 59.** Vật có \(v(t)=t-2\) m/s, \(t\in[0;4]\). Tính độ dời và quãng đường.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Độ dời 0 m; quãng đường 4 m.

**Lời giải:** \(\int_0^4(t-2)\,\mathrm dt=0\); chia tại \(t=2\), \(\int_0^4|t-2|\,\mathrm dt=2+2=4\).

**Nếu làm sai:** Chia tại nghiệm \(f=0\) rồi cộng độ lớn từng phần: \(\int_a^b|f(x)|\,\mathrm dx\), không lấy \(\left|\int_a^b f(x)\,\mathrm dx\right|\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-P05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O12; SINGLE_ITEM_ID -->

**Bài 60.** Diện tích giữa \(y=x-1\) và Ox trên \([0;2]\)?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 1 đơn vị².

**Lời giải:** Chia tại \(x=1\): hai tam giác mỗi diện tích \(\frac12\), tổng 1.

**Nếu làm sai:** Chia tại nghiệm \(f=0\) rồi cộng độ lớn từng phần: \(\int_a^b|f(x)|\,\mathrm dx\), không lấy \(\left|\int_a^b f(x)\,\mathrm dx\right|\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-C05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O12; SINGLE_ITEM_ID -->

**Bài 61.** Tính diện tích giữa \(y=x\) và trục Ox trên \([-2;2]\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 4 đơn vị².

**Lời giải:** Chia tại \(x=0\): \(\int_{-2}^0(-x)\,\mathrm dx+\int_0^2 x\,\mathrm dx=2+2=4\).

**Nếu làm sai:** Chia tại nghiệm \(f=0\) rồi cộng độ lớn từng phần: \(\int_a^b|f(x)|\,\mathrm dx\), không lấy \(\left|\int_a^b f(x)\,\mathrm dx\right|\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P12; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O12; SINGLE_ITEM_ID -->

**Bài 62.** Với \(f=x\) trên \([-2;1]\), tính tích phân có dấu và diện tích.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\int_{-2}^1 x\,\mathrm dx=\frac{1-4}2=-\frac32\); diện tích \(2+\frac12=\frac52\).

**Lời giải:** Tích phân có dấu \(I=\int_{-2}^1 x\,\mathrm dx=\left[\frac{x^2}2\right]_{-2}^1=\frac12-2=-\frac32\). Để tính diện tích, chia tại \(x=0\): \(S=\int_{-2}^0(-x)\,\mathrm dx+\int_0^1 x\,\mathrm dx=2+\frac12=\frac52\) đơn vị². \(|I|=\frac32\) khác \(S\).

**Nếu làm sai:** Tìm nghiệm làm f đổi dấu rồi lấy trị tuyệt đối từng phần; không lấy \(\left|\int_a^b f(x)\,\mathrm dx\right|\) thay \(\int_a^b|f(x)|\,\mathrm dx\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-W03; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O12; SINGLE_ITEM_ID -->

**Bài 63.** Một vật có vận tốc \(v(t)=t-1\) (m/s) trong \(0\le t\le2\) s. (a) Tính độ dời bằng tích phân. (b) Xác định thời điểm đổi chiều. (c) Tính tổng quãng đường. (d) Giải thích vì sao không dùng trị tuyệt đối độ dời làm quãng đường.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** Độ dời bằng 0 m, đổi chiều ở \(t=1\) s, quãng đường bằng 1 m.

**Lời giải:** \(\int_0^2(t-1)\,\mathrm dt=\left[\frac{t^2}2-t\right]_0^2=2-2=0\). \(v<0\) trên \((0;1)\), \(v>0\) trên \((1;2)\), nên đổi chiều tại 1. Quãng đường \(\int_0^1(1-t)\,\mathrm dt+\int_1^2(t-1)\,\mathrm dt=\frac12+\frac12=1\) m. \(\left|\int_0^2 v\,\mathrm dt\right|=0\) khác \(\int_0^2|v|\,\mathrm dt=1\) vì hai đoạn đối chiều triệt trong độ dời.

**Rubric /7:**
1. Đặt đúng tích phân v(t) (1đ)
2. Tính độ dời0 (1đ)
3. Giải \(v(t)=0\) tại1 (1đ)
4. Xét dấu v hai bên (1đ)
5. Lập hai tích phân trị tuyệt đối (1đ)
6. Tính quãng đường1m (1đ)
7. Giải thích độ dời và quãng đường khác nhau (1đ)

**Nếu làm sai:** Thấy v đổi dấu phải tách khoảng để tính \(\int_a^b|v(t)|\,\mathrm dt\), không lấy trị tuyệt đối toàn tổng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-W06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O13; SINGLE_ITEM_ID -->

**Bài 64.** Tính \(\int_{0}^{\frac{\pi}{2}} (2\cos  x+\sin  x)\,\mathrm dx\) bằng nguyên hàm; giải rõ cận.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** 3.

**Lời giải:** \(F=2\sin x-\cos x\); \(F(\frac{\pi}2)=2\), \(F(0)=-1\Rightarrow2-(-1)=3\).

**Rubric tự luận /5:** 1đ nêu điều kiện liên tục; 2đ nguyên hàm; 1đ thế cận; 1đ kết quả/chính xác.

**Nếu làm sai:** Thử đạo hàm của \(\sin x,\cos x,e^x\) và so cận trong radian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-A06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O13; SINGLE_ITEM_ID -->

**Bài 65.** Tốc độ \(r(t)=2e^t\) đơn vị/giờ trên \([0;\ln2]\). Lượng tăng?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 2 đơn vị.

**Lời giải:** \(\int_0^{\ln2}2e^t\,\mathrm dt=2(2-1)=2\). Giải thích chọn cách: Giữ \(\pi,e,\ln2\) dạng chính xác đến kết quả cuối; không tự quy đổi radian thành độ.

**Nếu làm sai:** Thử đạo hàm của \(\sin x,\cos x,e^x\) và so cận trong radian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-P06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O13; SINGLE_ITEM_ID -->

**Bài 66.** Tính \(\int_{0}^{\pi} \cos  x\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 0.

**Lời giải:** \([\sin x]_0^\pi=0\). Giải thích chọn cách: Giữ \(\pi,e,\ln2\) dạng chính xác đến kết quả cuối; không tự quy đổi radian thành độ.

**Nếu làm sai:** Thử đạo hàm của \(\sin x,\cos x,e^x\) và so cận trong radian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-C06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O13; SINGLE_ITEM_ID -->

**Bài 67.** Tính \(\int_{0}^{\ln  2} e^x\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 1.

**Lời giải:** \([e^x]_0^{\ln2}=2-1=1\). Giải thích chọn cách: Giữ \(\pi,e,\ln2\) dạng chính xác đến kết quả cuối; không tự quy đổi radian thành độ.

**Nếu làm sai:** Thử đạo hàm của \(\sin x,\cos x,e^x\) và so cận trong radian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P13; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O13; SINGLE_ITEM_ID -->

**Bài 68.** Tính \(\int_{0}^{\pi} 2\sin  x\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \([-2\cos x]_0^\pi=2-(-2)=4\).

**Lời giải:** Góc đo radian; \(F=-2\cos x\) vì \(F'=2\sin x\). Thế cận: \(\int_0^\pi 2\sin x\,\mathrm dx=-2\cos\pi-(-2\cos0)=2-(-2)=4\). Vì \(\sin x\ge0\) trên \([0;\pi]\), giá trị này cũng là diện tích dưới đồ thị.

**Nếu làm sai:** Nếu ra 0, kiểm lại \(\cos\pi=-1\) và dấu trừ trước F(0).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-W07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O14; SINGLE_ITEM_ID -->

**Bài 69.** \(a(t)=4\) m/s², \(v(0)=-3\) m/s, \(s(0)=2\) m. Tìm độ dời trong \([0;2]\)s, giải thích tại sao không được coi là quãng đường.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** Độ dời 2m.

**Lời giải:** \(v(t)=4t-3\); \(\int_0^2 v\,\mathrm dt=[2t^2-3t]_0^2=8-6=2\) m. Vì \(v\) đổi dấu ở \(t=\frac34\) nên quãng đường lớn hơn độ lớn của độ dời (2 m).

**Rubric tự luận /5:** 1đ tìm v(t); 1đ tìm thời điểm đổi dấu; 2đ tính tích phân; 1đ nêu phân biệt độ dời và quãng đường.

**Nếu làm sai:** Tốc độ biến thiên không hằng phải tích phân; không dùng tích của giá trị cuối với thời gian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-A07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O14; SINGLE_ITEM_ID -->

**Bài 70.** Sản lượng tăng với \(q'(t)=4+3t^2\) (sản phẩm/giờ), \(t\in[0;2]\) giờ. Lượng tăng?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 16 sản phẩm.

**Lời giải:** \(\int_0^2(4+3t^2)\,\mathrm dt=[4t+t^3]_0^2=8+8=16\).

**Nếu làm sai:** Tốc độ biến thiên không hằng phải tích phân; không dùng tích của giá trị cuối với thời gian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-P07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O14; SINGLE_ITEM_ID -->

**Bài 71.** Vận tốc \(v=t^2\) trên \([1;2]\) s. Tính quãng đường.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\frac73\) m (nếu v đo m/s).

**Lời giải:** \(v\ge0\) nên \(\int_1^2 t^2\,\mathrm dt=\frac{8-1}3=\frac73\).

**Nếu làm sai:** Tốc độ biến thiên không hằng phải tích phân; không dùng tích của giá trị cuối với thời gian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-C07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O14; SINGLE_ITEM_ID -->

**Bài 72.** Vận tốc \(v(t)=2t+1\) m/s trong \(0\le t\le3\). Tính độ dời.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 12 m.

**Lời giải:** \(\int_0^3(2t+1)\,\mathrm dt=[t^2+t]_0^3=9+3=12\).

**Nếu làm sai:** Tốc độ biến thiên không hằng phải tích phân; không dùng tích của giá trị cuối với thời gian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P14; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O14; SINGLE_ITEM_ID -->

**Bài 73.** Với \(v=3t^2\), \(s(0)=5\), tính s(2).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(s(2)=5+8=13\) m.

**Lời giải:** Vì \(v(t)=s'(t)=3t^2\), độ dời từ 0 tới 2 là \(\int_0^2 3t^2\,\mathrm dt=[t^3]_0^2=8\). Vị trí cuối \(s(2)=s(0)+8=5+8=13\) m. Không dùng \(v(2)\cdot2\) vì vận tốc không hằng.

**Nếu làm sai:** Phân biệt độ dời và vị trí cuối: vị trí cuối bằng vị trí đầu cộng độ dời.

</details>

## 3. Diện tích hình học và thay đổi dấu

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-W01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O15; SINGLE_ITEM_ID -->

**Bài 74.** Tính diện tích hình giới hạn bởi y=9−x², Ox, x=0 và x=3; kiểm dấu.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** 18 đơn vị².

**Lời giải:** 9−x²≥0 trên [0,3]; S=[9x−x³/3]_0³=27−9=18.

**Rubric tự luận /5:** 1đ chứng minh dấu; 1đ mô tả hình/cận; 2đ tích phân; 1đ đơn vị/kết luận.

**Nếu làm sai:** Hàm √x có miền x≥0, ∫√x dx=(2/3)x^(3/2)+C.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-A01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O15; SINGLE_ITEM_ID -->

**Bài 75.** Một mép đất có chiều cao y=2+x (m) trên x từ 0 tới 3 (m). Diện tích dưới mép?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 21/2 m².

**Lời giải:** \(\int_{0}^{3} (2+x)\,\mathrm dx\)=6+9/2=21/2. Giải thích chọn cách: Kiểm dấu, ghi miền hình, lập cận, tích phân và nêu đơn vị.

**Nếu làm sai:** Hàm √x có miền x≥0, ∫√x dx=(2/3)x^(3/2)+C.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-P01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O15; SINGLE_ITEM_ID -->

**Bài 76.** Diện tích dưới y=3x trên [0,2]?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 6 đơn vị².

**Lời giải:** S=[3x²/2]_0²=6. Giải thích chọn cách: Kiểm dấu, ghi miền hình, lập cận, tích phân và nêu đơn vị.

**Nếu làm sai:** Hàm √x có miền x≥0, ∫√x dx=(2/3)x^(3/2)+C.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-C01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O15; SINGLE_ITEM_ID -->

**Bài 77.** Diện tích dưới y=x² trên [0,2]?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 8/3 đơn vị².

**Lời giải:** S=\(\int_{0}^{2} x^{2}\,\mathrm dx\)=8/3. Giải thích chọn cách: Kiểm dấu, ghi miền hình, lập cận, tích phân và nêu đơn vị.

**Nếu làm sai:** Hàm √x có miền x≥0, ∫√x dx=(2/3)x^(3/2)+C.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P15; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O15; SINGLE_ITEM_ID -->

**Bài 78.** Tính diện tích dưới y=√x trên [0,4].

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 16/3 đơn vị².

**Lời giải:** √x=x^{1/2} liên tục, không âm trên [0,4]; S=∫₀⁴x^{1/2}dx=[(2/3)x^{3/2}]₀⁴=(2/3)·8=16/3 đơn vị².

**Nếu làm sai:** Nếu tính nhầm ∫√x, hãy tăng số mũ từ1/2 thành3/2 rồi chia3/2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-W02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O16; SINGLE_ITEM_ID -->

**Bài 79.** Diện tích giữa y=x²−4 và Ox trên [−3,3] là bao nhiêu?

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** 46/3 đơn vị².

**Lời giải:** Nghiệm ±2; ngoài [−3,−2],[2,3] mỗi phần7/3; giữa [−2,2] là32/3; tổng46/3.

**Rubric tự luận /5:** 1đ nghiệm/đổi dấu; 1đ chia ba đoạn; 2đ tích phân mỗi vùng; 1đ cộng kết quả đúng.

**Nếu làm sai:** Vùng dưới Ox vẫn góp diện tích dương, chia tại nghiệm đổi dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-A02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O16; SINGLE_ITEM_ID -->

**Bài 80.** Diện tích giữa y=2x−2 và Ox trên [0,2]?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 2 đơn vị².

**Lời giải:** Chia tại x=1: hai tam giác mỗi1.

**Nếu làm sai:** Vùng dưới Ox vẫn góp diện tích dương, chia tại nghiệm đổi dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-P02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O16; SINGLE_ITEM_ID -->

**Bài 81.** Tính diện tích giữa y=x−2 và Ox trên [0,4].

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 4 đơn vị².

**Lời giải:** Chia tại x=2, mỗi tam giác có diện tích2.

**Nếu làm sai:** Vùng dưới Ox vẫn góp diện tích dương, chia tại nghiệm đổi dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-C02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O16; SINGLE_ITEM_ID -->

**Bài 82.** Tính diện tích giữa y=x và Ox trên [−2,2].

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 4 đơn vị².

**Lời giải:** Hai tam giác hai bên mỗi diện tích2; tổng4.

**Nếu làm sai:** Vùng dưới Ox vẫn góp diện tích dương, chia tại nghiệm đổi dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P16; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O16; SINGLE_ITEM_ID -->

**Bài 83.** Tính S giữa y=|x| và Ox trên [−1,2].

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S=1/2+2=5/2.

**Lời giải:** y=|x| không âm. Trên [−1,0], |x|=−x cho S₁=\(\int_{-1}^{0} (-x)\,\mathrm dx\)=1/2; trên [0,2], |x|=x cho S₂=\(\int_{0}^{2} x\,\mathrm dx\)=2. Tổng S=5/2 đơn vị².

**Nếu làm sai:** Trị tuyệt đối đổi công thức tại x=0; chia đoạn để tích phân thành biểu thức đại số đơn giản.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-W03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O17; SINGLE_ITEM_ID -->

**Bài 84.** Diện tích giữa y=x+3 và y=x²+1 trên [0,2]?

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** 10/3 đơn vị².

**Lời giải:** Hiệu trên−dưới=−x²+x+2≥0 trong [0,2]; tích phân [−x³/3+x²/2+2x]_0²=10/3.

**Rubric tự luận /5:** 1đ nhận diện đường trên; 1đ kiểm hiệu≥0; 2đ tích phân; 1đ đơn vị/kết luận.

**Nếu làm sai:** Giải f−g, kiểm đường nào trên rồi mới lấy tích phân (trên−dưới).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-A03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O17; SINGLE_ITEM_ID -->

**Bài 85.** Hai biên y=3x+1 và y=x+1, x từ0 đến3. Tính diện tích giữa chúng.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 9 đơn vị².

**Lời giải:** Hiệu 2x≥0; \(\int_{0}^{3} 2x\,\mathrm dx\)=9. Giải thích chọn cách: Lấy hiệu độ cao (trên−dưới), tích phân theo x, kiểm S≥0.

**Nếu làm sai:** Giải f−g, kiểm đường nào trên rồi mới lấy tích phân (trên−dưới).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-P03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O17; SINGLE_ITEM_ID -->

**Bài 86.** Diện tích giữa y=4 và y=x² trên [−2,2]?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 32/3 đơn vị².

**Lời giải:** 4≥x², S=\(\int_{-2}^{2} (4-x^{2})\,\mathrm dx\)=16−16/3=32/3.

**Nếu làm sai:** Giải f−g, kiểm đường nào trên rồi mới lấy tích phân (trên−dưới).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-C03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O17; SINGLE_ITEM_ID -->

**Bài 87.** Diện tích giữa y=2x và y=x trên [0,2]?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 2 đơn vị².

**Lời giải:** Lấy trên−dưới=x; \(\int_{0}^{2} x\,\mathrm dx\)=2. Giải thích chọn cách: Lấy hiệu độ cao (trên−dưới), tích phân theo x, kiểm S≥0.

**Nếu làm sai:** Giải f−g, kiểm đường nào trên rồi mới lấy tích phân (trên−dưới).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P17; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O17; SINGLE_ITEM_ID -->

**Bài 88.** Tính diện tích giữa y=x+2 và y=x² trên [0,2].

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Vì x+2−x²=(2−x)(x+1)≥0, S=\(\int_{0}^{2} (x+2-x^{2})\,\mathrm dx\)=10/3.

**Lời giải:** Trên [0,2], f−g=(x+2)−x²=(2−x)(x+1)≥0 nên đường y=x+2 ở trên y=x². Diện tích S=\(\int_{0}^{2} (x+2-x^{2})\,\mathrm dx\)=[x²/2+2x−x³/3]₀²=2+4−8/3=10/3 đơn vị².

**Nếu làm sai:** Trước khi lấy hiệu, kiểm dấu f−g để xác định đường nào ở trên trên toàn khoảng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-W04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O18; SINGLE_ITEM_ID -->

**Bài 89.** Tính diện tích giữa y=x và y=x³ từ x=−1 đến1; chỉ rõ đoạn đổi thứ tự.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** 1/2 đơn vị².

**Lời giải:** Giao tại −1,0,1; trên [-1,0] x³≥x, trên [0,1] x≥x³; mỗi vùng1/4, tổng1/2.

**Rubric tự luận /5:** 1đ giao điểm; 1đ thứ tự theo đoạn; 2đ hai tích phân; 1đ tổng S.

**Nếu làm sai:** Giao điểm ở trong đoạn có thể đảo thứ tự; cần chia đoạn theo dấu f−g.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-A04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O18; SINGLE_ITEM_ID -->

**Bài 90.** Tính diện tích giữa y=x² và y=2−x² trên [−1,1].

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 8/3 đơn vị².

**Lời giải:** Hai đồ thị giao ở ±1, trên là 2−x²; S=\(\int_{-1}^{1} (2-2x^{2})\,\mathrm dx\)=8/3.

**Nếu làm sai:** Giao điểm ở trong đoạn có thể đảo thứ tự; cần chia đoạn theo dấu f−g.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-P04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O18; SINGLE_ITEM_ID -->

**Bài 91.** Diện tích giữa y=2x và y=x² trên [0,2]?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 4/3 đơn vị².

**Lời giải:** 2x≥x²; \(\int_{0}^{2} (2x-x^{2})\,\mathrm dx\)=4−8/3=4/3.

**Nếu làm sai:** Giao điểm ở trong đoạn có thể đảo thứ tự; cần chia đoạn theo dấu f−g.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-C04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O18; SINGLE_ITEM_ID -->

**Bài 92.** Diện tích giữa y=x và y=x² trên [0,1]?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 1/6 đơn vị².

**Lời giải:** S=\(\int_{0}^{1} (x-x^{2})\,\mathrm dx\)=1/6. Giải thích chọn cách: Giải giao điểm, sắp xếp cận, thử dấu từng khoảng rồi tích phân phần dương.

**Nếu làm sai:** Giao điểm ở trong đoạn có thể đảo thứ tự; cần chia đoạn theo dấu f−g.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P18; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O18; SINGLE_ITEM_ID -->

**Bài 93.** Tính S giữa y=x và y=x² trên [0,2].

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 1 đơn vị² (giao 0,1 và chia tại1).

**Lời giải:** Hai đường giao khi x=x² ⇔ x=0 hoặc1. Trên (0,1), x−x²>0; trên (1,2), x−x²<0. Diện tích S=\(\int_{0}^{1} (x-x^{2})\,\mathrm dx\)+\(\int_{1}^{2} (x^{2}-x)\,\mathrm dx\)=1/6+5/6=1 đơn vị².

**Nếu làm sai:** Nếu hai đường đổi thứ tự, phải chia tại giao điểm và cộng phần dương, không để diện tích triệt dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-W04; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O18; SINGLE_ITEM_ID -->

**Bài 94.** Tính diện tích giới hạn bởi hai đường y=x và y=x² trên đoạn [0,2]. (a) Giải giao điểm. (b) Xác định đường trên từng khoảng. (c) Thiết lập hai tích phân. (d) Tính diện tích và so với tích phân đại số \(\int_{0}^{2} (x-x^{2})\,\mathrm dx\).

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** Giao x=0,1. S=∫₀¹(x−x²)+∫₁²(x²−x)=1. Tích phân đại số ∫₀²(x−x²)=−2/3, không phải diện tích.

**Lời giải:** x=x² ⇒ x=0 hoặc1. Trên (0,1), x>x²; trên (1,2), x²>x. S=[x²/2−x³/3]₀¹+[x³/3−x²/2]₁²=(1/2−1/3)+(8/3−2−(1/3−1/2))=1/6+5/6=1. Trong khi \(\int_{0}^{2} (x-x^{2})\,\mathrm dx\)=[x²/2−x³/3]₀²=2−8/3=−2/3. Âm cho thấy không phải diện tích hình học.

**Rubric /7:**
1. Giải x=0,1 (1đ)
2. Nêu dấu trên (0,1) (1đ)
3. Nêu dấu trên (1,2) (1đ)
4. Viết đủ hai tích phân không âm (1đ)
5. Tính phần đầu1/6 (1đ)
6. Tính phần sau5/6 và S=1 (1đ)
7. So với tích phân đại số −2/3 đúng (1đ)

**Nếu làm sai:** Một dấu trừ duy nhất qua điểm giao làm mất diện tích; dùng tích phân trị tuyệt đối chia đoạn.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-W05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O19; SINGLE_ITEM_ID -->

**Bài 95.** Một đoạn đất có biên y=√x (m) từ x=0 đến4 (m). Tính diện tích, nêu công thức và đơn vị.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** 16/3 m².

**Lời giải:** h≥0; S=∫_0⁴√x dx=[(2/3)x^(3/2)]_0⁴=(2/3)·8=16/3 m².

**Rubric tự luận /5:** 1đ nêu biến/cận đơn vị; 1đ h≥0; 2đ nguyên hàm; 1đ kết luận m².

**Nếu làm sai:** Cận vùng kín phải lấy từ giao điểm hợp lệ, so sánh hai đồ thị trên từng mảnh.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-A05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O19; SINGLE_ITEM_ID -->

**Bài 96.** Độ cao bờ đất h(x)=100−10x m, 0≤x≤5 m. Diện tích mặt cắt?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 375 m².

**Lời giải:** S=\(\int_{0}^{5} (100-10x)\,\mathrm dx\)=[100x−5x²]_0⁵=500−125=375m².

**Nếu làm sai:** Cận vùng kín phải lấy từ giao điểm hợp lệ, so sánh hai đồ thị trên từng mảnh.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-P05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O19; SINGLE_ITEM_ID -->

**Bài 97.** Một miền có chiều cao y=2x−1 m và x từ0 tới1 m. Tính diện tích hình học (không phải tích phân có dấu).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 1/2 m².

**Lời giải:** Cắt trục ở x=1/2; hai tam giác mỗi có diện tích1/4, tổng1/2.

**Nếu làm sai:** Cận vùng kín phải lấy từ giao điểm hợp lệ, so sánh hai đồ thị trên từng mảnh.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-C05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O19; SINGLE_ITEM_ID -->

**Bài 98.** Độ cao y=x+1 cm, 0≤x≤2 cm. Diện tích dưới đồ thị?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 4 cm².

**Lời giải:** S=\(\int_{0}^{2} (x+1)\,\mathrm dx\)=4; đơn vị cm². Giải thích chọn cách: Nêu biến x và đơn vị, mô tả hai cận, xét h≥0, rồi tính số và thứ nguyên.

**Nếu làm sai:** Cận vùng kín phải lấy từ giao điểm hợp lệ, so sánh hai đồ thị trên từng mảnh.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P19; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O19; SINGLE_ITEM_ID -->

**Bài 99.** Tính S giữa y=2x và y=x² từ hai điểm giao.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 4/3 đơn vị².

**Lời giải:** Giao điểm y=2x và y=x² cho 2x=x²⇔x(x−2)=0, x=0 hoặc2. Trên [0,2], 2x−x²=x(2−x)≥0. Vậy diện tích giới hạn S=\(\int_{0}^{2} (2x-x^{2})\,\mathrm dx\)=[x²−x³/3]₀²=4−8/3=4/3 đơn vị².

**Nếu làm sai:** Cận của hình kín xuất phát từ giao điểm, không đoán trên nét vẽ.

</details>

## 4. Thiết diện và thể tích khối xoay

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-W06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O20; SINGLE_ITEM_ID -->

**Bài 100.** Các lát cắt vuông góc Ox là hình vuông cạnh (x+1) cm với x∈[0,2] cm. Tính V.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** 26/3 cm³.

**Lời giải:** S(x)=(x+1)² cm²; V=\(\int_{0}^{2} (x+1)^{2}\,\mathrm dx\)=[(x+1)³/3]_0²=(27−1)/3=26/3.

**Rubric tự luận /5:** 1đ mô tả lát cắt; 1đ biểu thức S đúng; 2đ tích phân; 1đ đơn vị/kết luận.

**Nếu làm sai:** Tiết diện vuông diện tích s², không π; tích phân A(x) theo độ dày dx.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-A06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O20; SINGLE_ITEM_ID -->

**Bài 101.** Vật có mặt cắt S(x)=4−x² cm², 0≤x≤2cm. Tính V.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 16/3 cm³.

**Lời giải:** S≥0; V=\(\int_{0}^{2} (4-x^{2})\,\mathrm dx\)=8−8/3=16/3.

**Nếu làm sai:** Tiết diện vuông diện tích s², không π; tích phân A(x) theo độ dày dx.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-P06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O20; SINGLE_ITEM_ID -->

**Bài 102.** Khối có mặt cắt S(x)=2+x m² từ0 tới2m. Thể tích?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 6 m³.

**Lời giải:** V=\(\int_{0}^{2} (2+x)\,\mathrm dx\)=4+2=6. Giải thích chọn cách: Xác định hình cắt, tính S(x) đúng hình học, tích phân theo chiều dài.

**Nếu làm sai:** Tiết diện vuông diện tích s², không π; tích phân A(x) theo độ dày dx.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-C06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O20; SINGLE_ITEM_ID -->

**Bài 103.** Khối có S(x)=x² cm², x∈[0,3] cm. Tính V.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 9 cm³.

**Lời giải:** V=\(\int_{0}^{3} x^{2}\,\mathrm dx\)=[x³/3]_0³=9. Giải thích chọn cách: Xác định hình cắt, tính S(x) đúng hình học, tích phân theo chiều dài.

**Nếu làm sai:** Tiết diện vuông diện tích s², không π; tích phân A(x) theo độ dày dx.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P20; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O20; SINGLE_ITEM_ID -->

**Bài 104.** Cho thiết diện hình vuông cạnh x+1 trên [0,1], tính V.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** V=7/3 đơn vị³.

**Lời giải:** Tiết diện vuông cạnh x+1 có diện tích A(x)=(x+1)²=x²+2x+1. Thể tích V=\(\int_{0}^{1} A(x)\,\mathrm dx\)=[x³/3+x²+x]₀¹=1/3+1+1=7/3 đơn vị³. Không nhân π vì không có hình tròn.

**Nếu làm sai:** Phân biệt cạnh dài (đơn vị) và diện tích lát cắt (đơn vị²) trước khi tích phân thành thể tích.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-W05; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O20; SINGLE_ITEM_ID -->

**Bài 105.** Một khối có thiết diện vuông góc Ox là hình vuông cạnh s(x)=x+1 cm với 0≤x≤2 cm. (a) Nêu diện tích mặt cắt. (b) Thiết lập thể tích. (c) Tính V. (d) Giải thích vì sao không nhân π.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** A=(x+1)² cm², V=\(\int_{0}^{2} (x+1)^{2}\,\mathrm dx\)=26/3 cm³; không nhân π.

**Lời giải:** Tiết diện vuông cạnh x+1 nên A=(x+1)²=x²+2x+1 cm². V=\(\int_{0}^{2} A\,\mathrm dx\)=[x³/3+x²+x]₀²=8/3+4+2=26/3 cm³. Hình vuông có diện tích s², còn πr² là thiết diện tròn nên nhân π sai.

**Rubric /7:**
1. Miền [0,2] và đơn vị cm (1đ)
2. A=(x+1)² cm² (1đ)
3. Khai triển chính xác (1đ)
4. Lập V=\(\int A\,\mathrm dx\) đúng cận (1đ)
5. Tính nguyên hàm (1đ)
6. Giá trị26/3 cm³ (1đ)
7. Nêu không có π vì mặt cắt vuông (1đ)

**Nếu làm sai:** Phải xác định loại thiết diện trước khi chọn công thức diện tích.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-W07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O21; SINGLE_ITEM_ID -->

**Bài 106.** Lát cắt có đường kính d(x)=2x+2 (cm), x∈[0,1] cm. Tính V, nêu kiểm tra đổi đường kính.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** 7π/3 cm³.

**Lời giải:** r=d/2=x+1; V=π\(\int_{0}^{1} (x+1)^{2}\,\mathrm dx\)=7π/3.

**Rubric tự luận /5:** 1đ đổi d thành r; 1đ S=πr²; 2đ tích phân; 1đ đơn vị/kết luận.

**Nếu làm sai:** Tiết diện tròn A=πr²; nhớ bình phương bán kính không phải πr.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-A07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O21; SINGLE_ITEM_ID -->

**Bài 107.** Khối có r(x)=√x cm, x∈[0,4]cm. Tính thể tích.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 8π cm³.

**Lời giải:** r²=x; V=π\(\int_{0}^{4} x\,\mathrm dx\)=8π. Giải thích chọn cách: Đổi đường kính→bán kính nếu cần, bình phương r trước khi tích phân; giữ π chính xác.

**Nếu làm sai:** Tiết diện tròn A=πr²; nhớ bình phương bán kính không phải πr.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-P07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O21; SINGLE_ITEM_ID -->

**Bài 108.** Lát cắt tròn có r=2x cm trên[0,2]cm. Tính V.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 32π/3 cm³.

**Lời giải:** V=π\(\int_{0}^{2} 4x^{2}\,\mathrm dx\)=4π·8/3=32π/3. Giải thích chọn cách: Đổi đường kính→bán kính nếu cần, bình phương r trước khi tích phân; giữ π chính xác.

**Nếu làm sai:** Tiết diện tròn A=πr²; nhớ bình phương bán kính không phải πr.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-C07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O21; SINGLE_ITEM_ID -->

**Bài 109.** Lát cắt tròn có r(x)=x (cm) với0≤x≤1. Tính V.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** π/3 cm³.

**Lời giải:** S=πx²; V=π[x³/3]_0¹=π/3. Giải thích chọn cách: Đổi đường kính→bán kính nếu cần, bình phương r trước khi tích phân; giữ π chính xác.

**Nếu làm sai:** Tiết diện tròn A=πr²; nhớ bình phương bán kính không phải πr.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P21; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O21; SINGLE_ITEM_ID -->

**Bài 110.** Cho r(x)=x trên [0,2], tính V hình tròn cắt vuông góc Ox.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** V=8π/3 đơn vị³.

**Lời giải:** Tiết diện hình tròn bán kính r(x)=x, diện tích A(x)=πx². V=\(\int_{0}^{2} \pi x^{2}\,\mathrm dx\)=π[x³/3]₀²=8π/3 đơn vị³. Điều kiện x≥0 trên [0,2] đảm bảo bán kính hợp lệ.

**Nếu làm sai:** Dùng diện tích đĩa πr², không dùng chu vi 2πr hoặc chỉ bán kính r.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-W08; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O22; SINGLE_ITEM_ID -->

**Bài 111.** Quay miền dưới y=√(4−x²) từ x=0 tới2 quanh Ox. Tính V và nêu ý nghĩa hình học.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** 16π/3 đơn vị³.

**Lời giải:** V=π\(\int_{0}^{2} (4-x^{2})\,\mathrm dx\)=π(8−8/3)=16π/3; là nửa thể tích khối cầu bán kính2.

**Rubric tự luận /5:** 1đ xác định r(x); 1đ công thức π∫r²; 2đ tích phân; 1đ nhận xét hình học và đơn vị.

**Nếu làm sai:** Vành khăn A=π(R²−r²), không π(R−r)²; kiểm 0≤r≤R.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-A08; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O22; SINGLE_ITEM_ID -->

**Bài 112.** Miền dưới y=2x trên[0,1] quay quanh Ox. Tính thể tích.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 4π/3 đơn vị³.

**Lời giải:** V=π\(\int_{0}^{1} 4x^{2}\,\mathrm dx\)=4π/3. Giải thích chọn cách: Xác định trục quay, bán kính tại x là |f(x)|, tính π∫f², kiểm thể tích không âm.

**Nếu làm sai:** Vành khăn A=π(R²−r²), không π(R−r)²; kiểm 0≤r≤R.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-P08; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O22; SINGLE_ITEM_ID -->

**Bài 113.** Quay miền dưới y=√x, x∈[0,4] quanh Ox. Tính V.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 8π đơn vị³.

**Lời giải:** V=π\(\int_{0}^{4} x\,\mathrm dx\)=8π. Giải thích chọn cách: Xác định trục quay, bán kính tại x là |f(x)|, tính π∫f², kiểm thể tích không âm.

**Nếu làm sai:** Vành khăn A=π(R²−r²), không π(R−r)²; kiểm 0≤r≤R.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-C08; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O22; SINGLE_ITEM_ID -->

**Bài 114.** Quay miền dưới y=x, x∈[0,2] quanh Ox. Tính V.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 8π/3 đơn vị³.

**Lời giải:** V=π\(\int_{0}^{2} x^{2}\,\mathrm dx\)=8π/3. Giải thích chọn cách: Xác định trục quay, bán kính tại x là |f(x)|, tính π∫f², kiểm thể tích không âm.

**Nếu làm sai:** Vành khăn A=π(R²−r²), không π(R−r)²; kiểm 0≤r≤R.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P22; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O22; SINGLE_ITEM_ID -->

**Bài 115.** Cho miền 0≤x≤2, 0≤y≤√x quay quanh Ox, V?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 2π đơn vị³.

**Lời giải:** Quay vùng 0≤y≤√x, 0≤x≤2 quanh Ox: tiết diện là đĩa bán kính √x. Diện tích A(x)=π(√x)²=πx; V=π\(\int_{0}^{2} x\,\mathrm dx\)=π[x²/2]₀²=2π đơn vị³.

**Nếu làm sai:** Nếu được 8π, em hãy kiểm lại cả diện tích lát cắt và bước thế cận: A(x)=π(√x)²=πx, nên V=π[x²/2]₀²=2π. Không dùng cận hay kết quả của ví dụ khác.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-W06; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O22; SINGLE_ITEM_ID -->

**Bài 116.** Miền 0≤x≤2, x≤y≤2 quay quanh trục Ox. (a) Mô tả bán kính ngoài, trong của tiết diện. (b) Thiết lập công thức vành khăn. (c) Tính thể tích. (d) Nêu vì sao không dùng π\(\int (2-x)^{2}\,\mathrm dx\).

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** R=2, r=x; V=π\(\int_{0}^{2} (4-x^{2})\,\mathrm dx\)=16π/3 đơn vị³.

**Lời giải:** Với x∈[0,2], y từ x tới2 nên quay quanh Ox cho vành khăn bán kính ngoài R=2, trong r=x. Diện tích A=π(R²−r²)=π(4−x²). V=π[x·4−x³/3]₀²=π(8−8/3)=16π/3. (R−r)²=4−4x+x² khác R²−r², không biểu diễn diện tích vành khăn; chỉ dùng π∫f² khi vùng chạm trục.

**Rubric /7:**
1. Xác định miền và trục Ox (1đ)
2. Bán kính ngoài R=2 (1đ)
3. Bán kính trong r=x (1đ)
4. Thiết lập π∫(4−x²) (1đ)
5. Nguyên hàm đúng (1đ)
6. V=16π/3 và đơn vị³ (1đ)
7. Giải thích sai khác giữa bình phương hiệu và hiệu bình phương (1đ)

**Nếu làm sai:** Nếu vùng không chạm trục, trừ diện tích hai đĩa: π(R²−r²), không bình phương (R−r).

</details>

<!-- AUTHORING_METADATA_ONLY_Q15_Q16: 22 P +6 W original canonical bodies. 88 old canonical IDs are separate references, never copied. PUBLIC Self Check 22 placements reuse P01–P22. Public Practice answer visibility makes it `CLIENT_SELF_CHECK_NO_MASTERY`, not held-out `TOPIC_READINESS`. No confidential source, private stem/key/solution/rubric or Skill Mastery. -->


# Tự kiểm tra

Bộ tự kiểm tra công khai này gồm 22 câu **đã xuất hiện trong Luyện tập**. Tự làm trước rồi mới quay lại đối chiếu lời giải ở phần Luyện tập. Các câu này giúp phát hiện lỗ hổng, **không phải bài kiểm tra độc lập**; không có gợi ý hay đáp án trong phần này.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP11-P01; NO_RD1; NO_MASTERY -->

**Câu 1.** Tìm họ nguyên hàm \(f(x)=6x-4\).

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP11-P02; NO_RD1; NO_MASTERY -->

**Câu 2.** \(F'=3x^2\), \(F(2)=9\); tìm F.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP11-P03; NO_RD1; NO_MASTERY -->

**Câu 3.** Tính \(\int (3x^{2}+4x-2)\,\mathrm dx\).

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP11-P04; NO_RD1; NO_MASTERY -->

**Câu 4.** Tìm nguyên hàm \(\frac2x\) trên \((-\infty;0)\) biết \(F(-1)=3\).

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP11-P05; NO_RD1; NO_MASTERY -->

**Câu 5.** Tính \(\int (2e^{2x}+3^x)\,\mathrm dx\).

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP11-P06; NO_RD1; NO_MASTERY -->

**Câu 6.** Tính \(\int (2\cos  x-3\sin  x)\,\mathrm dx\).

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP11-P07; NO_RD1; NO_MASTERY -->

**Câu 7.** Với \(v(t)=6t-4\), \(s(0)=3\), tìm s(2).

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP11-P08; NO_RD1; NO_MASTERY -->

**Câu 8.** Tính \(\int_{0}^{2} (3x^{2}+1)\,\mathrm dx\).

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP11-P09; NO_RD1; NO_MASTERY -->

**Câu 9.** Tính \(\int_{1}^{3} (2x+1)\,\mathrm dx\)−\(\int_{1}^{3} x\,\mathrm dx\).

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP11-P10; NO_RD1; NO_MASTERY -->

**Câu 10.** Tính \(\int_{3}^{1} x^{2}\,\mathrm dx\).

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP11-P11; NO_RD1; NO_MASTERY -->

**Câu 11.** Tính diện tích dưới y=x² trên [0,2].

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP11-P12; NO_RD1; NO_MASTERY -->

**Câu 12.** Với f=x trên [−2,1], tính tích phân có dấu và diện tích.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP11-P13; NO_RD1; NO_MASTERY -->

**Câu 13.** Tính \(\int_{0}^{\pi} 2\sin  x\,\mathrm dx\).

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP11-P14; NO_RD1; NO_MASTERY -->

**Câu 14.** Với v=3t², s(0)=5, tính s(2).

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP11-P15; NO_RD1; NO_MASTERY -->

**Câu 15.** Tính diện tích dưới y=√x trên [0,4].

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP11-P16; NO_RD1; NO_MASTERY -->

**Câu 16.** Tính S giữa y=|x| và Ox trên [−1,2].

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP11-P17; NO_RD1; NO_MASTERY -->

**Câu 17.** Tính diện tích giữa y=x+2 và y=x² trên [0,2].

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP11-P18; NO_RD1; NO_MASTERY -->

**Câu 18.** Tính S giữa y=x và y=x² trên [0,2].

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP11-P19; NO_RD1; NO_MASTERY -->

**Câu 19.** Tính S giữa y=2x và y=x² từ hai điểm giao.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP11-P20; NO_RD1; NO_MASTERY -->

**Câu 20.** Cho thiết diện hình vuông cạnh x+1 trên [0,1], tính V.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP11-P21; NO_RD1; NO_MASTERY -->

**Câu 21.** Cho r(x)=x trên [0,2], tính V hình tròn cắt vuông góc Ox.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP11-P22; NO_RD1; NO_MASTERY -->

**Câu 22.** Cho miền 0≤x≤2, 0≤y≤√x quay quanh Ox, V?

<details markdown="1"><summary>Đối chiếu</summary>

Sau khi tự giải **22 câu**, em có thể mở phần **Lời giải** ở đúng bài trong **Luyện tập** theo bảng dưới. Nếu chưa đúng, quay lại mục Kiến thức cùng dạng và làm thử lại trước khi xem lời giải.

| Câu tự kiểm tra | Bài có lời giải trong Luyện tập |
| --- | --- |
| Câu 1 – 2 – 3 – 4 – 5 – 6 | Bài 5 – 10 – 16 – 21 – 27 – 32 |
| Câu 7 – 8 – 9 – 10 – 11 – 12 | Bài 37 – 42 – 47 – 52 – 57 – 62 |
| Câu 13 – 14 – 15 – 16 – 17 – 18 | Bài 68 – 73 – 78 – 83 – 88 – 93 |
| Câu 19 – 20 – 21 – 22 | Bài 99 – 104 – 110 – 115 |

Nếu bài làm của em khác lời giải, hãy tìm bước sai đầu tiên, xem lại mục Kiến thức tương ứng rồi tự giải một lần nữa.

</details>

Nguồn: SGK Toán 12, Tập Hai, Chương IV, bộ Kết nối tri thức với cuộc sống.
