---
hide:
  - toc
---

<div class="thpt-r4-screen topic-w1-release-nav" data-thpt-r4 data-topic-w1="08" data-topic-w1-part="kien-thuc">
<p class="thpt-r4-eyebrow">HỌC THEO CHUYÊN ĐỀ · CĐ08 · TOÁN THPT</p>
<nav class="thpt-sgk-lesson-nav" aria-label="Điều hướng Chuyên đề 08">
<a href="../../cd07/kien-thuc/">← Chuyên đề trước</a>
<a href="../../cd09/kien-thuc/">Chuyên đề sau →</a>
<a href="../luyen-tap/">Luyện tập</a>
<a href="../tu-kiem-tra/">Tự kiểm tra</a>
</nav>
<p class="topic-w1-back"><a href="../../">← Tổng quan các Chuyên đề</a></p>

<p class="thpt-r4-lead topic-w1-source-intro" hidden aria-hidden="true"></p>
<p class="thpt-r4-knowledge-note topic-w2-model-link">Khám phá thêm: <a href="../../../math-lab/models/slm-top08-limit-01/">Mô hình trực quan Chuyên đề 08</a> (tùy chọn).</p>
</div>
<link rel="stylesheet" href="../../../../assets/stylesheets/thpt-topic-w1-golden-v1.css">
<script src="../../../../assets/javascripts/thpt-topic-w2-golden-v1.js" defer></script>
<div class="topic-w1-boot-status" role="status" aria-live="polite">Đang chuẩn bị kiến thức…</div>
<script>
(function(){var h=document.documentElement;h.classList.add("topic-w1-pending");
 document.addEventListener("DOMContentLoaded",function(){setTimeout(function(){
 if(!h.classList.contains("topic-w1-pending"))return;h.classList.remove("topic-w1-pending");h.classList.add("topic-w1-fallback");
 var status=document.querySelector(".topic-w1-boot-status");if(status)status.textContent="Giao diện tương tác chưa tải được. Nội dung gốc vẫn có thể đọc bên dưới.";
 },0)},{once:true});})();
</script>
<span data-topic-w1-source-start="kien-thuc" hidden></span>

<!-- TOPIC08_APPROVED_SOURCE_START -->
<!-- Q18 SOURCE_LEARNER_BLOB 64dc1d59c48e1f666c0f6b3f33155175724b078b; Q18_RECEIPT_BLOB 371a76f49383e5bca016627c01b8f1887f56cd0c; AUTHORING_PR #829; PUBLIC_PROJECTION_ONLY -->

# Kiến thức

## 1. Từ một điểm đến gần, đến sát và đến đúng

Khi muốn đo chính xác một độ dài, ta có thể thu nhỏ sai số đo mãi, dù chưa bao giờ ghi được giá trị hoàn toàn chính xác ở một lần thử. Một dãy số cũng có thể tiến sát giá trị đích mà không có số hạng nào bằng đích. Sau đó ta sẽ gặp hiện tượng tương tự ở hàm số: điều xảy ra **gần một điểm** không nhất thiết trùng giá trị của hàm tại chính điểm ấy. Hiểu sự khác biệt đó là chìa khóa để xét tính liên tục, phân biệt các kiểu gián đoạn và chứng minh sự tồn tại nghiệm bằng định lý giá trị trung gian.

Ta bắt đầu bằng câu hỏi đơn giản: muốn nói “càng ngày càng gần 2”, khoảng cách phải nhỏ đi như thế nào? Khi trả lời được bằng sai số, ta mới dùng quy tắc đại số để tính giới hạn và mở rộng sang đồ thị.

### 1.1. Giới hạn dãy số qua sai số

<!-- LESSON_ID: TOP08-M01; OUTCOME_ID: TOP08-O01 -->

Ta xét dãy \(u_n=2+\frac1n\) với \(n\) nguyên dương. Mọi số hạng đều lớn hơn 2, nên không số hạng nào bằng 2. Tuy vậy, khi \(n\) tăng, khoảng cách \(|u_n-2|=\frac1n\) nhỏ dần và có thể nhỏ hơn **bất kỳ độ sai lệch dương nào** nếu \(n\) đủ lớn. Đó là ý nghĩa của câu “dãy tiến tới giới hạn 2”: không đòi chạm giá trị đích ở một chỉ số hữu hạn.



> **ĐỊNH NGHĨA — Giới hạn hữu hạn của dãy số.** Viết \(\lim_{n\to\infty}u_n=L\) khi với **mọi** \(\varepsilon>0\) đều có một chỉ số \(N\) sao cho \(|u_n-L|&lt;\varepsilon\) với **mọi** \(n\ge N\) thuộc miền chỉ số. Không yêu cầu dãy có số hạng bằng \(L\).

 Trong ví dụ, chỉ cần chọn \(N>\frac1\varepsilon\) và \(n\ge N\), ta được \(\frac1n&lt;\varepsilon\). Ví dụ, nếu yêu cầu sai số nhỏ hơn \(0{,}01\), chọn \(N=101\): mọi \(n\ge101\) đều có \(\frac1n\le\frac1{101}&lt;0{,}01\). Nếu đổi yêu cầu thành \(0{,}001\), ta chọn \(N=1001\). Việc chứng minh bằng khoảng cách cho thấy công thức giới hạn không chỉ là phép thế \(n=\infty\), mà là một khẳng định về mọi mức sai số.

![Các điểm dãy số tiến gần đường giới hạn L](../../../assets/visuals/THPT_TOPIC08_SEQUENCE_LIMIT_R05.svg)

*Đọc hình:* Đồ thị gồm đúng **tám điểm** \((n;2+\frac1n)\) với \(n=1,\ldots,8\). Từng điểm đều nằm **phía trên** đường ngang \(L=2\) và không chạm đường này; chỉ số \(n\) là số nguyên. Chính khoảng cách \(\frac1n\) giảm dần mới giải thích giới hạn, không phải việc kéo dài nét vẽ thành một đường liên tục.

**Ví dụ**

**Đề bài.** Cho dãy \(v_n=4-\dfrac2n\), \(n\ge1\). Chứng minh \(\lim_{n\to\infty}v_n=4\) bằng sai số và xem dãy có nhận giá trị \(4\) không.

**Lời giải.** Khoảng cách \(|v_n-4|=\frac2n\). Với bất kỳ \(\varepsilon>0\), lấy \(N\) nguyên lớn hơn \(\frac2\varepsilon\); mọi \(n\ge N\) đều cho \(\frac2n&lt;\varepsilon\), nên \(v_n\to4\). Không số hạng nào bằng \(4\) vì \(\frac2n>0\) khi \(n\ge1\).

**Vận dụng** Với \(v_n=1+\frac3n\), \(n\ge1\), dãy tiến tới số nào? Giải thích bằng khoảng cách.

<details markdown="1"><summary>Đối chiếu</summary>

Giới hạn bằng 1 vì \(|v_n-1|=\frac3n\to0\). Nếu em cho rằng giới hạn phải là một số hạng, hãy thử giải \(1+\frac3n=1\) để thấy không có \(n\) hữu hạn nào thỏa, dù dãy vẫn tiến tới 1.


**Kiểm lỗi**

Nếu em cho rằng giới hạn phải là một số hạng của dãy, đọc lại **Kiến thức 1.1** rồi giải **Bài 1** và **Bài 3** trong Luyện tập. Tách điều kiện chỉ số nguyên dương khỏi việc khoảng cách tới giá trị giới hạn tiến về 0.

</details>

### 1.2. Dãy tiến vô cực và dãy dao động

<!-- LESSON_ID: TOP08-M02; OUTCOME_ID: TOP08-O02 -->

> **ĐỊNH NGHĨA — Dãy tiến vô cực và dãy dao động.** Một dãy không tiến gần số hữu hạn nào có thể tăng ra vô hạn hoặc dao động. Nếu các số hạng không tiến tới một số hữu hạn thì chắc chắn tiến \(+\infty\) hoặc \(-\infty\)? Ta đã biết dấu số, chỉ số \(n\) tăng, dãy chỉ số chẵn/lẻ. Có ba hành vi cần tách: hữu hạn, tiến vô cực có dấu, và không có giới hạn (dao động, có thể không bị chặn). \(u_n\to+\infty\) nếu với mỗi \(M>0\), mọi số hạng từ một chỉ số đủ lớn trở đi đều lớn hơn \(M\); \(u_n\to-\infty\) nếu cuối cùng mọi số hạng nhỏ hơn \(-M\). Dãy \((-1)^n\) dao động giữa \(\pm1\): không có giới hạn hữu hạn nhưng cũng không tiến đến vô cực; xem hai dãy con chẵn/lẻ.

Một quy tắc hữu ích khi một dãy hữu hạn được chia cho dãy tiến tới vô cực: nếu \(u_n\to A\) hữu hạn và \(v_n\to+\infty\) hoặc \(-\infty\), thì \(\frac{u_n}{v_n}\to0\). Khi \(u_n\to+\infty\) và \(v_n\to A>0\), tích \(u_nv_n\to+\infty\) (vì từ một chỉ số đủ lớn, \(v_n>\frac A2\)). Nếu \(u_n\to A>0\), \(v_n\to0\) và \(v_n>0\) từ một chỉ số đủ lớn, thương \(\frac{u_n}{v_n}\to+\infty\). Các trường hợp dấu âm xét tương tự. Chẳng hạn, \(n^2-2n=n^2(1-\frac2n)\to+\infty\), vì thừa số sau tiến tới 1 dương. Không thực hiện phép tính với \(\infty\) như một số thực.

Chẳng hạn, \(v_n=-n^2\) với \(n\ge1\) đi về \(-\infty\) vì với mọi \(M>0\), \(n>\sqrt M\) thì \(v_n&lt;-M\). Còn \(w_n=(-1)^n\) có dãy con chẵn bằng 1, lẻ bằng \(-1\), nên không thể có cùng giới hạn. Chọn kiểm dãy con thay vì dựa trên vài số hạng.

**Ví dụ**

**Đề bài.** Xét \(a_n=n+(-1)^n\) và \(b_n=(-1)^n\). Dãy nào tiến tới \(+\infty\), dãy nào dao động?

**Lời giải.** Với \(a_n\), luôn có \(a_n\ge n-1\); khi \(n\) đủ lớn thì \(a_n\) vượt mọi ngưỡng dương, vậy \(a_n\to+\infty\) dù có thành phần đổi dấu. Với \(b_n\), hai dãy con chẵn và lẻ bằng \(1\) và \(-1\), nên không có giới hạn chung hay giới hạn vô cực có dấu.

**Vận dụng** So sánh hành vi của \(u_n=n^2\) và \(w_n=(-1)^n n\), \(n\ge1\). Dãy nào tiến đến \(+\infty\)?

<details markdown="1"><summary>Đối chiếu</summary>

Dãy \(u_n\to+\infty\), vì với mỗi \(M>0\), mọi \(n>\sqrt M\) cho \(n^2>M\). Dãy \(w_n\) có các số hạng chẵn \(2,4,6,\ldots\) tiến tới \(+\infty\), còn các số hạng lẻ \(-1,-3,-5,\ldots\) tiến tới \(-\infty\); không có giới hạn chung. Không bị chặn không đồng nghĩa với tiến tới vô cực có một dấu.

Nếu viết 'vô hạn' cho \((-1)^n\), hãy liệt kê các số hạng chẵn và lẻ rồi xét giới hạn từng dãy con.


**Kiểm lỗi**

Nếu em cho rằng mọi dãy không hội tụ hữu hạn đều tiến ra vô cực có dấu, đọc lại **Kiến thức 1.2**, làm **Bài 4** (dao động chẵn/lẻ), **Bài 5** (tiến −∞) rồi **Bài 6** (dãy con có hai giới hạn khác nhau).

</details>

### 1.3. Giới hạn dãy lũy thừa

<!-- LESSON_ID: TOP08-M03; OUTCOME_ID: TOP08-O03 -->

> **TÍNH CHẤT — Giới hạn dãy lũy thừa.** Dãy \(q^n\) cho thấy điều kiện về trị tuyệt đối của \(q\) quyết định giới hạn. Số hạng đổi dấu luân phiên có nhất thiết không hội tụ? Ta sử dụng lũy thừa số thực và trị tuyệt đối. Khi \(|q|&lt;1\), \(|q^n|=|q|^n\to0\) nên \(q^n\to0\), kể cả \(q\) âm. Nếu \(q=1\) thì \(q^n=1\); \(q=-1\) dao động; nếu \(q>1\) thì \(q^n\to+\infty\); \(q&lt;-1\) cho các nhánh dấu luân phiên với độ lớn tăng, không có giới hạn vô cực có dấu. Trường hợp \(q=0\) cho \(0^n=0\) với \(n\ge1\).

Xét ví dụ: Với \(q=-\frac14\), số hạng \(q^n\) đổi dấu nhưng có độ lớn \(\frac1{4^n}\to0\), nên giới hạn là 0. Chọn trị tuyệt đối để nhìn thấy cơ chế hội tụ trước khi hỏi dấu.

Quy tắc kẹp về 0: nếu \(|u_n|\le v_n\) với mọi \(n\) đủ lớn và \(v_n\to0\), thì \(u_n\to0\). Khoảng cách \(|u_n|\) bị chặn trên bởi một số dương ngày càng nhỏ. Ví dụ \(\left|\frac{(-1)^n}{n^2}\right|=\frac1{n^2}\to0\), nên dãy \(\frac{(-1)^n}{n^2}\) tiến về 0 dù đổi dấu.

**Ví dụ**

**Đề bài.** Tính \(\lim_{n\to\infty}(-\frac35)^n\) và so với \((-1)^n\).

**Lời giải.** Vì \(|-\frac35|=\frac35&lt;1\), độ lớn \((\frac35)^n\to0\), nên \((-\frac35)^n\to0\) dù luân phiên dấu. Ngược lại \((-1)^n\) có độ lớn luôn bằng \(1\), hai dãy con trái dấu, không hội tụ.

**Vận dụng** \(\lim_{n\to\infty}(\frac32)^n\) là gì?

<details markdown="1"><summary>Đối chiếu</summary>

\(+\infty\) vì \(\frac32>1\) và lũy thừa tăng vượt mọi ngưỡng.

Nếu nhầm \(q\) âm với không hội tụ, so \((-\frac14)^n\) và \((-1)^n\) qua \(|q|\).


**Kiểm lỗi**

Nếu nhầm lũy thừa cơ số âm có độ lớn nhỏ hơn 1 với dãy dao động không hội tụ, đọc **Kiến thức 1.3** rồi giải **Bài 7** và so sánh **Bài 4**. Hãy xét \(|q|^n\) trước, sau đó mới xét dấu.

</details>

### 1.4. Tính giới hạn dãy phân thức

<!-- LESSON_ID: TOP08-M04; OUTCOME_ID: TOP08-O04 -->

> **PHƯƠNG PHÁP — Tính giới hạn dãy phân thức.** Ta tính giới hạn các tổng và tỉ số nhưng mẫu cần được kiểm soát. Tại sao ký hiệu \(\frac{\infty}{\infty}\) không giúp tính giới hạn dãy phân thức? Ta bắt đầu từ giới hạn của \(\frac1n\), phép cộng/nhân/chia với mẫu giới hạn khác 0. Quy tắc cộng, nhân, chia giới hạn hữu hạn chỉ dùng trực tiếp khi các giới hạn liên quan hữu hạn và mẫu giới hạn khác 0. Đối với tỉ số đa thức theo \(n\), chia tử và mẫu cho lũy thừa bậc cao nhất của mẫu để mẫu tiến đến hệ số khác 0. Nếu tử có bậc cao hơn mẫu, còn lại lũy thừa dương của \(n\) và cần xét dấu; các hạng \(\frac1{n^k}\) tiến 0. Nếu có căn chứa \(n^2\), nhớ \(n>0\) nên \(\sqrt{n^2}=n\), còn với biến thực \(x\) có thể âm phải giữ \(|x|\).

> **ĐỊNH LÍ — Phép toán với giới hạn hữu hạn của dãy số.** Giả sử \(u_n\to A\) và \(v_n\to B\), với \(A,B\) là các số thực. Khi đó

\[
\begin{aligned}
\lim_{n\to\infty}(u_n\pm v_n)&=A\pm B,\\
\lim_{n\to\infty}(u_nv_n)&=AB,\\
\lim_{n\to\infty}(cu_n)&=cA
\end{aligned}
\]

với hằng số \(c\in\mathbb R\). Nếu \(B\ne0\), thì \(v_n\ne0\) từ một chỉ số đủ lớn trở đi và \(\lim_{n\to\infty}\frac{u_n}{v_n}=\frac AB\). **Không** áp dụng trực tiếp công thức thương khi \(B=0\); cần biến đổi biểu thức hoặc xét dấu. Tất cả giới hạn trong định lí này đều là **giới hạn hữu hạn**; các ký hiệu \(\frac00,\frac{\infty}{\infty},\infty-\infty\) không phải những phép tính số thực.

Nếu \(u_n\ge0\) với mọi \(n\) đủ lớn và \(u_n\to A\) hữu hạn, thì \(A\ge0\) và \(\sqrt{u_n}\to\sqrt A\). Khi \(A=0\), từ \(0\le u_n&lt;\varepsilon^2\) suy ra \(0\le\sqrt{u_n}&lt;\varepsilon\). Khi \(A>0\), hiệu \(|\sqrt{u_n}-\sqrt A|=\frac{|u_n-A|}{\sqrt{u_n}+\sqrt A}\) tiến về 0. Ví dụ \(\sqrt{4+\frac1n}\to2\).

Vì sao được làm như vậy? Nếu \(u_n=A+\varepsilon_n\), \(v_n=B+\eta_n\) với \(\varepsilon_n,\eta_n\to0\), thì tổng và tích của chúng vẫn có phần sai lệch tiến về \(0\); với thương, cần \(B\ne0\) để mẫu không tiến sát \(0\). Định lí này là lý do toán học của phép tính giới hạn theo từng hạng, **không** chỉ là mẹo thay \(n=\infty\).

Chẳng hạn, \(\lim_{n\to\infty}\frac{3n^2+n}{n^2+7}=\lim_{n\to\infty}\frac{3+\frac1n}{1+\frac7{n^2}}=3\). Chọn bậc 2 vì đây là lũy thừa lớn nhất; sau chia mẫu tiến 1 khác 0.

Cùng phương pháp, \(\frac{2n+1}{n^2+1}\to0\), vì chia cho \(n^2\) cho tử tiến 0 và mẫu tiến 1. Ngược lại, \(\frac{n^2+1}{2n-1}=n\frac{1+\frac1{n^2}}{2-\frac1n}\to+\infty\), vì thừa số phân thức tiến \(\frac12>0\). Như vậy chỉ lấy tỉ số hệ số đầu khi bậc tử bằng bậc mẫu.

**Ví dụ**

**Đề bài.** Tính \(\lim_{n\to\infty}\dfrac{5n^2-n+2}{2n^2+3}\).

**Lời giải.** Chia cả tử và mẫu cho \(n^2\): \(\frac{5-\frac1n+\frac2{n^2}}{2+\frac3{n^2}}\to\frac52\). Mẫu mới tiến tới \(2\ne0\), nên quy tắc giới hạn của thương được phép áp dụng.

**Vận dụng** \(\lim_{n\to\infty}\frac{4n+3}{2n-1}\) bằng bao nhiêu?

<details markdown="1"><summary>Đối chiếu</summary>

2, vì chia cho \(n\) cho \(\frac{4+\frac3n}{2-\frac1n}\to2\).

Nếu thế '\(n=\infty\)', hãy thực hiện phép chia \(n^k\) để chuyển sang giới hạn có thể tính.


**Kiểm lỗi**

Nếu lấy các hệ số khác bậc hoặc thế máy móc \(n=\infty\), đọc lại **Kiến thức 1.4**, làm **Bài 11** và **Bài 12**: chia đúng lũy thừa bậc cao nhất và kiểm mẫu giới hạn khác 0.

</details>

### 1.5. Tổng cấp số nhân vô hạn

<!-- LESSON_ID: TOP08-M05; OUTCOME_ID: TOP08-O05 -->

Với cấp số nhân có số hạng đầu khác 0, tổng vô hạn chỉ hữu hạn khi trị tuyệt đối của công bội nhỏ hơn 1. Vô hạn số hạng có thể cộng thành hữu hạn như thế nào mà không mâu thuẫn? Cần nhớ CĐ07 định nghĩa cấp số nhân và tổng \(S_n\) hữu hạn, giới hạn \(q^n\). Số \(S=\sum_{k=0}^{\infty}aq^k\) được định nghĩa là giới hạn của các tổng riêng \(S_n\), không phải phép cộng xong vô hạn bước.

> **CÔNG THỨC — Tổng cấp số nhân vô hạn.** Với \(|q|&lt;1\), tổng \(\sum_{k=0}^{\infty}aq^k\) hội tụ và bằng \(\frac{a}{1-q}\), vì các tổng hữu hạn \(\frac{a(1-q^n)}{1-q}\) tiến đến giá trị ấy. Với \(|q|\ge1\) và \(a\ne0\), số hạng không tiến 0 nên tổng không hội tụ. Trường hợp \(a=0\), nếu xét dãy \(aq^k\) thì mọi số hạng đều bằng 0 và tổng bằng 0.

Với \(S_n\) là tổng \(n\) số hạng đầu, phần dư có dấu là \(R_n=S_\infty-S_n=\frac{aq^n}{1-q}\). Sai số tuyệt đối là \(|R_n|\), tiến về 0 khi \(|q|&lt;1\); nếu \(q&lt;0\), chính \(R_n\) có thể đổi dấu qua từng bước.

Chẳng hạn, \(10+5+2{,}5+\cdots\) có \(a=10,\ q=\frac12\); \(S_n=20(1-(\frac12)^n)\), phần dư \(\frac{20}{2^n}\) nên tổng tiến 20. Ta chọn xem \(S_n\) trước \(S_\infty\) để thấy nguồn gốc điều kiện hội tụ.

**Ví dụ**

**Đề bài.** Tính tổng vô hạn của \(8-4+2-1+\cdots\), và tính phần dư sau hai số hạng đầu.

**Lời giải.** Đây là cấp số nhân với \(a=8,\ q=-\frac12\) và \(|q|&lt;1\). Tổng vô hạn là \(S_\infty=\frac8{1+\frac12}=\frac{16}3\). Hai số hạng đầu có tổng \(S_2=8-4=4\); phần dư có dấu \(S_\infty-S_2=\frac43\), đúng công thức \(R_2=\frac{8(-\frac12)^2}{1+\frac12}=\frac43\).

**Vận dụng** \(6+2+\frac23+\cdots\) có tổng vô hạn bao nhiêu?

<details markdown="1"><summary>Đối chiếu</summary>

9, vì \(q=\frac13\) và \(S=\frac6{1-\frac13}=9\).

Nếu \(a\ne0\) và \(q=1\) hoặc \(q=-1\), hãy xét giới hạn của số hạng trước: nó không về 0.


**Kiểm lỗi**

Nếu áp dụng tổng cấp số nhân vô hạn khi \(|q|\ge1\) hoặc nhầm dấu phần dư, đọc lại **Kiến thức 1.5**, giải **Bài 16** và **Bài 18**; thử thêm **Bài 19** để kiểm điều kiện sai số nghiêm ngặt.

</details>

## 2. Từ dãy rời rạc tới hành vi của hàm số gần một điểm

Ở dãy số, ta tiến bằng những chỉ số nguyên ngày càng lớn. Với hàm số, ta có thể tiến tới cùng một hoành độ từ **bên trái hoặc bên phải** bằng các giá trị thực rất gần nhau. Đôi khi hàm bị khuyết ngay tại điểm đó, nhưng hai phía vẫn có thể cùng tiến tới một số. Ngược lại, khi hai phía tiến tới hai giá trị khác nhau, ta không thể gọi đó là một giới hạn hai phía. Nhìn lần lượt hai phía sẽ giúp em tự chọn đúng phép biến đổi khi gặp dạng chưa xác định.

### 2.1. Giới hạn hàm tại một điểm

<!-- LESSON_ID: TOP08-M06; OUTCOME_ID: TOP08-O06 -->

> **ĐỊNH NGHĨA — Giới hạn hàm tại một điểm.** Vì sao một hàm không được định nghĩa tại \(x=a\) mà vẫn có giới hạn ở \(a\)? Để xác định điều đó, cần xét hàm số và phép biến đổi trên miền xác định. \(\lim_{x\to a}f(x)=L\) hỏi giá trị \(f(x)\) khi \(x\) đủ gần \(a\) nhưng \(x\ne a\) và thuộc miền xác định. Giá trị \(f(a)\) có thể khác \(L\) hoặc không tồn tại. Để tính giới hạn của phân thức có dạng \(\frac00\), trước tiên nêu điều kiện loại điểm rồi biến đổi tương đương trên lân cận bỏ điểm, tuyệt đối không dùng kết quả để tự cho \(f(a)=L\).

> **ĐỊNH NGHĨA — Giới hạn hàm số qua dãy tiến tới điểm.** Giả sử \(a\) là điểm mà miền xác định \(D\) có các điểm khác \(a\) nằm gần tùy ý, và \(L\in\mathbb R\). Ta viết \(\lim_{x\to a}f(x)=L\) nếu **với mọi** dãy \(x_n\in D\setminus\{a\}\) thỏa \(x_n\to a\), ta đều có \(f(x_n)\to L\). Điều kiện \(x_n\ne a\) cho thấy **không cần biết** \(f(a)\). Khi \(a\) là điểm trong của miền, các dãy có thể tiến từ cả hai phía; nếu hai phía cho giới hạn khác nhau thì giới hạn hai phía không tồn tại.

Với hàm có giới hạn hữu hạn, các quy tắc cộng, trừ, nhân và chia cũng hoạt động tương tự như ở dãy số: nếu \(f(x)\to A\), \(g(x)\to B\) khi \(x\to a\), thì \(f\pm g\to A\pm B\), \(fg\to AB\), và \(\frac fg\to\frac AB\) **chỉ khi \(B\ne0\)** và thương có nghĩa trong lân cận đang xét. Khi gặp dạng \(\frac00\), không thể chia các giới hạn ngay mà phải phân tích nhân tử, liên hợp hoặc dùng phương pháp khác.

Chẳng hạn, \(f(x)=\frac{x^2-5x+6}{x-2}\) với \(x\ne2\). Tử là \((x-2)(x-3)\), rút còn \(x-3\) trên miền \(x\ne2\); \(\lim_{x\to2}f(x)=-1\) dù \(f(2)\) không xác định. Chọn phân tích nhân tử vì thế trực tiếp cho \(\frac00\).

**Ví dụ**

**Đề bài.** Với \(f(x)=\dfrac{x^2-49}{x-7}\), \(x\ne7\), tính \(\lim_{x\to7}f(x)\). Có tự suy ra \(f(7)=14\) được không?

**Lời giải.** Với \(x\ne7\), \(x^2-49=(x-7)(x+7)\), nên \(f(x)=x+7\). Do đó giới hạn tại \(7\) là \(14\). Tuy vậy \(f(7)\) vẫn không xác định trong hàm gốc, vì phép khử chỉ hợp lệ ở các \(x\ne7\).

**Vận dụng** \(\lim_{x\to0}\frac{x(x-4)}x\) (\(x\ne0\)) bằng bao nhiêu?

<details markdown="1"><summary>Đối chiếu</summary>

\(-4\) do biểu thức rút còn \(x-4\) trên miền \(x\ne0\).

Nếu gọi \(\frac00\) là giới hạn, xem hai hàm \(\frac{x-2}{x-2}\) và \(\frac{2(x-2)}{x-2}\), cùng thế \(\frac00\) nhưng có giới hạn 1 và 2.


**Kiểm lỗi**

Nếu coi dạng \(\frac00\) là đáp số hoặc tự gán giá trị của hàm tại điểm cấm, đọc **Kiến thức 2.1**, làm **Bài 21** và **Bài 22**. Chỉ rút gọn trên lân cận bỏ điểm rồi mới tính giới hạn.

</details>

### 2.2. Giới hạn trái và phải

<!-- LESSON_ID: TOP08-M07; OUTCOME_ID: TOP08-O07 -->

> **ĐỊNH NGHĨA — Giới hạn trái và phải.** Tiến đến điểm từ trái và phải có thể cho hai kết quả khác nhau. Hàm có thể tiến đến hai giá trị khác nhau khi ta lại gần từ trái và từ phải không? Ta đã biết bất đẳng thức \(x&lt;a\) hoặc \(x>a\), hàm xác định từng phần. Giới hạn trái \(\lim_{x\to a^-}f(x)\) xét \(x&lt;a\), phải \(\lim_{x\to a^+}f(x)\) xét \(x>a\), đều đi trong miền xác định. Khi miền có điểm tiến tới \(a\) từ cả hai phía, giới hạn hai phía hữu hạn tồn tại và bằng \(L\) khi và chỉ khi hai giới hạn một phía cùng bằng \(L\). Nếu miền chỉ có một phía, xét giới hạn từ phía đó. \(f(a)\) không quyết định hai giới hạn này; đọc điều kiện từng nhánh trước khi thế.

Chẳng hạn, \(f(x)=x+2\) nếu \(x&lt;0\); \(f(x)=2x+1\) nếu \(x\ge0\). Khi \(x\to0^-\), \(f(x)\to2\); khi \(x\to0^+\), \(f(x)\to1\). Hai giá trị khác nên không có giới hạn hai phía, mặc dù \(f(0)=1\). Chọn phương pháp tách nhánh vì hàm từng phần.

**Ví dụ**

**Đề bài.** Cho \(f(x)=x+3\) khi \(x&lt;1\), \(f(x)=x^2+1\) khi \(x\ge1\). Tính hai giới hạn một phía ở \(1\).

**Lời giải.** Từ trái dùng nhánh \(x+3\), được \(4\); từ phải dùng \(x^2+1\), được \(2\). Hai phía khác nhau nên giới hạn hai phía tại \(1\) không tồn tại, dù \(f(1)=2\) xác định. Hình nhảy ở bài sau có điểm nhảy ở \(0\), không phải ví dụ này.

**Vận dụng** \(\lim_{x\to0^-}\frac{|x|}{x}\) và \(\lim_{x\to0^+}\frac{|x|}{x}\) bằng gì?

<details markdown="1"><summary>Đối chiếu</summary>

−1 và +1, nên giới hạn hai phía không tồn tại.

Nếu chỉ thế nhánh \(x\ge0\) tại 0, hãy vẽ hai mũi tên tiến vào 0 từ hai phía.


**Kiểm lỗi**

Nếu dùng cùng một nhánh của hàm cho cả trái và phải, đọc lại **Kiến thức 2.2**, làm **Bài 24** rồi **Bài 25**. Tính hai giới hạn một phía riêng; chỉ ghép thành giới hạn hai phía khi chúng bằng nhau.

</details>

### 2.3. Giới hạn vô cực gần điểm

<!-- LESSON_ID: TOP08-M08; OUTCOME_ID: TOP08-O08 -->

> **ĐỊNH NGHĨA — Giới hạn vô cực gần điểm.** Một phân thức có mẫu tiến đến 0 có luôn tiến tới \(+\infty\) không? Hãy phân biệt giá trị rất lớn ở vài điểm với việc vượt mọi ngưỡng ở **tất cả** các điểm đủ gần.

Giả sử miền xác định có các điểm lớn hơn \(a\) và gần \(a\) tùy ý. Theo cách định nghĩa bằng dãy số đã dùng ở mục 2.1, \(\lim_{x\to a^+}f(x)=+\infty\) tương đương với việc mọi dãy \(x_n>a\) thuộc miền, \(x_n\to a\), đều cho \(f(x_n)\to+\infty\). Đổi phía hoặc dấu thì thay điều kiện tương ứng; nếu miền không có điểm tiến tới từ một phía thì không đặt giới hạn theo phía đó.

> Viết \(\lim_{x\to a^+}f(x)=+\infty\) nếu với mỗi \(M>0\), có \(\delta>0\) sao cho mọi \(x\) thuộc miền xác định thỏa \(0&lt;x-a&lt;\delta\) đều có \(f(x)>M\). Với giới hạn trái, dùng \(0&lt;a-x&lt;\delta\). Giới hạn \(-\infty\) được định nghĩa tương tự, nhưng yêu cầu \(f(x)&lt;-M\). Khi miền có điểm tiến tới từ cả hai phía, nếu cả hai phía cùng tiến tới một vô cực có dấu, ta có giới hạn hai phía tương ứng; trái dấu thì không.

Chẳng hạn, \(f(x)=\frac{\sin^2(\frac1x)}{x^2}\) với \(x\ne0\) không bị chặn gần 0: tại \(x=\frac1{\frac\pi2+k\pi}\), \(f(x)=\frac1{x^2}\to+\infty\) khi \(k\to+\infty\) qua các số nguyên dương. Nhưng tại \(x=\frac1{k\pi}\), \(k\) nguyên dương, \(f(x)=0\). Vì thế hàm không tiến tới \(+\infty\) ngay cả từ bên phải. Không được thay điều kiện “mọi \(x\) đủ gần” bằng “không bị chặn”.

Khi tử tiến đến một số khác 0 và mẫu tiến 0, xét dấu tử và mẫu theo từng phía để xác định giới hạn \(+\infty\) hoặc \(-\infty\).

Xét ví dụ: \(f(x)=\frac1{x-5}\): \(x\to5^-\) thì mẫu âm nhỏ về độ lớn, nên \(f(x)\to-\infty\); \(x\to5^+\) thì mẫu dương nhỏ về độ lớn, nên \(f(x)\to+\infty\). Chọn bảng dấu mẫu vì tử dương không đổi.

**Ví dụ**

**Đề bài.** Xét \(f(x)=\dfrac{x-4}{x-3}\). Nêu giới hạn khi \(x\to3^-\) và \(x\to3^+\).

**Lời giải.** Gần \(3\), tử \(x-4\) âm và gần \(-1\). Từ trái, mẫu \(x-3&lt;0\) rất nhỏ nên \(f(x)\to+\infty\); từ phải, mẫu dương rất nhỏ nên \(f(x)\to-\infty\). Không nhập hai giới hạn khác dấu thành một kết quả hữu hạn.

**Vận dụng** \(\lim_{x\to3^-}\frac1{3-x}\) là gì?

<details markdown="1"><summary>Đối chiếu</summary>

\(+\infty\) vì \(3-x\) tiến 0 từ phía dương.

Nếu cứ thấy mẫu tiến tới 0 là tự kết luận \(+\infty\), thử \(x=2{,}99\) (từ trái 3) và \(x=3{,}01\) (từ phải 3) để kiểm: \(3-x\) lần lượt dương và âm, nên hai phía có dấu giới hạn khác nhau.


**Kiểm lỗi**

Nếu thấy mẫu về 0 rồi tự kết luận \(+\infty\), đọc **Kiến thức 2.3**, làm **Bài 27** và **Bài 29**. Lập bảng dấu tử/mẫu theo từng phía; đừng kết luận theo mẫu số bằng 0 ở đúng điểm.

</details>

### 2.4. Giới hạn khi x tiến vô cực

<!-- LESSON_ID: TOP08-M09; OUTCOME_ID: TOP08-O09 -->

> **ĐỊNH NGHĨA — Giới hạn khi x tiến vô cực.** Ra xa trên trục hoành, ta hỏi giá trị hàm có tiến sát một số \(L\) hay không. Viết \(\lim_{x\to+\infty}f(x)=L\) nếu với mỗi \(\varepsilon>0\), có \(R>0\) sao cho mọi \(x>R\) thuộc miền xác định đều có \(|f(x)-L|&lt;\varepsilon\); với \(x\to-\infty\), thay bằng \(x&lt;-R\) (miền có các giá trị ra xa theo phía đang xét). Ví dụ \(2+\frac1x\) tiến tới 2 ở cả hai phía: nếu \(|x|>100\), sai số nhỏ hơn \(0{,}01\).

Cũng có thể diễn đạt theo cách SGK dùng dãy số: trên miền ra vô cực về phía đang xét, với mọi dãy \(x_n\to+\infty\) (hoặc \(-\infty\)), ta có \(f(x_n)\to L\). Nếu giá trị hàm tiến tới vô cực có dấu, thay yêu cầu sai số bằng yêu cầu vượt mọi ngưỡng dương (hoặc nhỏ hơn mọi ngưỡng âm) khi \(x\) đủ xa về phía đó.

**PHƯƠNG PHÁP — Phân thức đa thức.** Hai đa thức đều rất lớn thì tỉ số có luôn tiến đến 1? Ta bắt đầu từ \(\frac1{x^k}\to0\) với \(k\) nguyên dương, và xét dấu khi \(x\) âm. Với phân thức đa thức, so bậc tử/mẫu và chia cho lũy thừa x thích hợp. Nếu bậc bằng nhau thì giới hạn là tỉ số hệ số đầu (mẫu đầu khác 0); nếu bậc tử nhỏ hơn, giới hạn 0. Nếu bậc tử lớn hơn, cần xét dấu và bậc của phần còn lại, không tự viết ∞. Khi \(x\to-\infty\), \(x\) lũy thừa chẵn dương, lẻ âm.

Chẳng hạn, \(\lim_{x\to-\infty}\frac{2x^2+5x}{5x^2-1}=\lim_{x\to-\infty}\frac{2+\frac5x}{5-\frac1{x^2}}=\frac25\). Chọn chia \(x^2\) vì hai đa thức cùng bậc; \(-\infty\) không đổi dấu \(x^2\).

**Ví dụ**

**Đề bài.** Tính \(\lim_{x\to-\infty}\dfrac{3x^2-2x}{x^2+1}\).

**Lời giải.** Chia tử và mẫu cho \(x^2\ne0\) với \(|x|\) lớn: \(\frac{3-\frac2x}{1+\frac1{x^2}}\to3\). Dù \(x\) âm khi tiến về \(-\infty\), \(x^2\) vẫn dương; mẫu mới tiến về \(1\ne0\).

Nếu tử thấp bậc hơn mẫu, chẳng hạn \(\frac{x+2}{x^2+1}\), chia cho \(x^2\) cho giới hạn 0. Nếu tử cao hơn mẫu, \(\frac{x^3}{x^2+1}=\frac{x}{1+\frac1{x^2}}\) tiến tới \(+\infty\) khi \(x\to+\infty\), nhưng tới \(-\infty\) khi \(x\to-\infty\).

**Vận dụng** Tính \(\lim_{x\to+\infty}\frac{-3x^3+1}{x^3+4}\) và \(\lim_{x\to-\infty}\frac{2x^3}{x^2+1}\).

<details markdown="1"><summary>Đối chiếu</summary>

Giới hạn thứ nhất bằng \(-3\) khi chia cả tử và mẫu cho \(x^3\). Giới hạn thứ hai bằng \(-\infty\), vì \(\frac{2x^3}{x^2+1}=\frac{2x}{1+\frac1{x^2}}\), mẫu tiến tới 1 còn tử tiến tới \(-\infty\).

Nếu giữ dấu 'x âm' ở mọi hạng, tách \(x^2\) và \(x^3\) ra để so dấu của từng lũy thừa.


**Kiểm lỗi**

Nếu dùng dấu của x thay cho dấu của \(x^2\), hoặc chọn sai bậc chia, đọc lại **Kiến thức 2.4**, làm **Bài 31** và **Bài 32**; kiểm riêng x tiến \(+\infty\) và \(-\infty\).

</details>

### 2.5. Khử dạng 0/0 bằng nhân tử

<!-- LESSON_ID: TOP08-M10; OUTCOME_ID: TOP08-O10 -->

> **PHƯƠNG PHÁP — Khử dạng 0/0 bằng nhân tử.** Thế trực tiếp cho dạng \(\frac00\) đòi hỏi biến đổi có thể khử hợp lệ. Làm sao biến một biểu thức 'không xác định ở điểm' thành giới hạn tính được? Cần nhớ hằng đẳng thức và nhân tử được khử và mẫu số khác 0 ở lân cận bỏ điểm. \(\frac00\) là dạng vô định khi thế thử, không phải kết quả. Tìm nhân tử chung và khử chỉ trên các x khác điểm cấm; biểu thức sau khử giúp tính giới hạn nhưng không mở rộng miền của hàm gốc. Khi nhân tử không triệt tiêu hoặc hàm từng nhánh khác, phải kiểm lại một phía.

Chẳng hạn, \(\frac{x^2-7x+12}{x-3}\) có tử \((x-3)(x-4)\); với \(x\ne3\) rút thành \(x-4\), giới hạn tại 3 là \(-1\). Chọn phân tích nhân tử vì nghiệm tử trùng nghiệm mẫu.

**Ví dụ**

**Đề bài.** Tính \(\lim_{x\to-2}\dfrac{x^2+5x+6}{x+2}\).

**Lời giải.** Tử \((x+2)(x+3)\). Với \(x\ne-2\), phân thức bằng \(x+3\), do đó giới hạn tại \(-2\) là \(1\). Dạng \(\frac00\) ban đầu chỉ báo cần biến đổi, không phải đáp án.

**Vận dụng** \(\lim_{x\to6}\frac{x^2-36}{x-6}\) bằng gì?

<details markdown="1"><summary>Đối chiếu</summary>

12, vì tử là \((x-6)(x+6)\) và \(x\ne6\).

Nếu viết \(\frac00\) như đáp số hoặc nhầm giới hạn với giá trị hàm tại \(x=6\), hãy trở lại lân cận bỏ điểm \(x=6\); phân thức gốc không xác định ở đúng điểm ấy.


**Kiểm lỗi**

Nếu khử nhân tử chung ngay tại điểm cấm rồi kết luận hàm gốc được định nghĩa ở đó, đọc **Kiến thức 2.5**, làm **Bài 33** và **Bài 34**. Phép khử chỉ đúng trên lân cận bỏ điểm; giới hạn không phải giá trị hàm tại điểm ấy.

</details>

### 2.6. Khử dạng 0/0 bằng liên hợp

<!-- LESSON_ID: TOP08-M11; OUTCOME_ID: TOP08-O11 -->

> **PHƯƠNG PHÁP — Khử dạng 0/0 bằng liên hợp.** Với căn thức, nhân liên hợp làm lộ nhân tử chung. Khi tử chứa \(\sqrt{x+a}-b\), vì sao nhân liên hợp giúp thay dạng \(\frac00\) bằng một phân thức có giới hạn? Để xác định điều đó, cần xét \((A-B)(A+B)=A^2-B^2\), miền căn. Với phân thức chứa \(\sqrt{x+c}-d\) và điểm thế cho tử/mẫu đều 0, nhân cả tử và mẫu với liên hợp \(\sqrt{x+c}+d\) để trừ hai bình phương, lộ nhân tử khử. Phép biến đổi chỉ hợp lệ trên miền gốc, khi mẫu liên hợp khác 0; sau khử mới thế giới hạn. Không dùng phép nhân liên hợp để 'thay' điều kiện căn.

Chẳng hạn, \(\lim_{x\to0}\frac{\sqrt{x+16}-4}{x}\): nhân liên hợp \(\sqrt{x+16}+4\), được \(\frac1{\sqrt{x+16}+4}\) với \(x\ne0\) nên giới hạn \(\frac18\). Chọn liên hợp vì bình phương sẽ tạo \(x\) để khử.

**Ví dụ**

**Đề bài.** Tính \(\lim_{x\to1}\dfrac{\sqrt{x+3}-2}{x-1}\).

**Lời giải.** Trong miền \(x+3\ge0\) và \(x\ne1\), nhân liên hợp: \(\dfrac{(\sqrt{x+3}-2)(\sqrt{x+3}+2)}{(x-1)(\sqrt{x+3}+2)}=\dfrac{(x+3)-4}{(x-1)(\sqrt{x+3}+2)}=\dfrac1{\sqrt{x+3}+2}\). Khi \(x\to1\), mẫu tiến tới \(4\), nên giới hạn bằng \(\frac14\).

**Vận dụng** \(\lim_{x\to0}\frac{\sqrt{x+25}-5}{x}\) bằng bao nhiêu?

<details markdown="1"><summary>Đối chiếu</summary>

\(\frac1{10}\), vì phân thức bằng \(\frac1{\sqrt{x+25}+5}\) gần \(x=0\) (với \(x\ne0\)).

Nếu căn khiến bạn 'bình phương cả phân thức', thử nhân liên hợp đúng dạng và giữ điều kiện \(x+c\ge0\).


**Kiểm lỗi**

Nếu biến đổi căn bằng cách bình phương tùy ý hoặc bỏ điều kiện trong căn, đọc **Kiến thức 2.6**, làm **Bài 35** và **Bài 36**: nhân **liên hợp** đúng cả tử/mẫu và kiểm miền xác định.

</details>

### 2.7. Biến đổi dạng vô cực trừ vô cực

<!-- LESSON_ID: TOP08-M12; OUTCOME_ID: TOP08-O12 -->

> **PHƯƠNG PHÁP — Biến đổi dạng vô cực trừ vô cực.** Dạng vô cực trừ vô cực cần biến đổi mà không được bỏ dấu. Tại sao \(\sqrt{x^2}\) không luôn bằng \(x\)? Ta đã biết trị tuyệt đối \(|x|\), nhân liên hợp, giới hạn \(\frac1x\). Khi \(x\to+\infty\), \(\sqrt{x^2}=x\) vì \(x>0\); khi \(x\to-\infty\), \(\sqrt{x^2}=-x\). Với \(\sqrt{x^2+ax}-x\) ở \(+\infty\), nhân liên hợp để biến hiệu hai lượng lớn thành phân thức có giới hạn. Ở \(-\infty\) không được chia bằng cùng giả thiết \(x>0\). Giới hạn có thể hữu hạn dù hai thành phần đều vô hạn.

Chẳng hạn,

\[
\begin{aligned}
\lim_{x\to+\infty}(\sqrt{x^2+6x}-x)
&=\lim_{x\to+\infty}\frac{6x}{\sqrt{x^2+6x}+x}\\
&=\lim_{x\to+\infty}\frac6{\sqrt{1+\frac6x}+1}=3.
\end{aligned}
\]

Chọn nhân liên hợp thay cho viết '\(\infty-\infty\)'.

**Ví dụ**

**Đề bài.** Tính \(\lim_{x\to+\infty}\left(\sqrt{x^2+8x}-x\right)\).

**Lời giải.** Nhân liên hợp được \(\dfrac{8x}{\sqrt{x^2+8x}+x}\). Vì \(x>0\) khi đủ lớn, chia cho \(x\) được \(\frac8{\sqrt{1+\frac8x}+1}\to4\). Không dùng \(\sqrt{x^2}=x\) nếu biến tiến về \(-\infty\).

**Vận dụng** Tính \(\lim_{x\to-\infty}\bigl(\sqrt{x^2+6x}+x\bigr)\). Vì sao không thể thay \(\sqrt{x^2}\) bằng x trong bước biến đổi?

<details markdown="1"><summary>Đối chiếu</summary>

Với x đủ âm, biểu thức trong căn không âm. Nhân liên hợp: \(\sqrt{x^2+6x}+x=\dfrac{6x}{\sqrt{x^2+6x}-x}\). Do \(x&lt;0\), ta có \(\sqrt{x^2+6x}=(-x)\sqrt{1+\frac6x}\). Bởi vậy phân thức bằng \(\frac{-6}{\sqrt{1+\frac6x}+1}\to-3\). Nếu thay sai \(\sqrt{x^2}=x\), em sẽ đánh mất dấu khi chia cho x âm. Chỉ dùng công thức trong miền xác định và ở phía \(x\to-\infty\).


**Kiểm lỗi**

Nếu thay \(\sqrt{x^2}=x\) cả khi x âm, đọc **Kiến thức 2.7**, làm **Bài 37** và **Bài 38** trước khi đối chiếu **Bài 39**. Với \(x\to-\infty\), phải dùng \(\sqrt{x^2}=|x|=-x\), không tự bỏ dấu.

</details>

## 3. Khi giới hạn gần điểm khớp với chính giá trị tại điểm

Một đường cong có thể đi sát tới cùng một độ cao từ hai phía, nhưng điểm được tô đặc trên đồ thị lại nằm ở nơi khác. Tại điểm trong một khoảng, ta chỉ gọi hàm **liên tục tại điểm** nếu giá trị được xác định ở điểm đó và bằng giới hạn hai phía; ở đầu mút đoạn sẽ xét từ phía trong. Nhờ vậy, hình vẽ không phải dấu hiệu để đoán bằng mắt: ta có thể kiểm chính xác một lỗ thủng, một bước nhảy hay một tiệm cận vô cực.

Tính liên tục nối giới hạn với giá trị hàm. Ta sẽ thấy sự khác biệt giữa một lỗ có thể vá, một bước nhảy và một nhánh lao ra vô cực trước khi dùng quy tắc liên tục.

### 3.1. Liên tục tại một điểm

<!-- LESSON_ID: TOP08-M13; OUTCOME_ID: TOP08-O13 -->

Giới hạn có thể tồn tại nhưng hàm vẫn 'đứt' tại đúng điểm không? Ta sử dụng giới hạn hai phía, giá trị hàm và đẳng thức. 

> **ĐỊNH NGHĨA — Liên tục tại một điểm.** Khi \(a\) nằm trong khoảng đang xét và thuộc miền xác định của \(f\), hàm \(f\) liên tục tại \(a\) nếu \(\lim_{x\to a}f(x)=f(a)\) là một giá trị hữu hạn. Tại đầu mút của đoạn chỉ cần giới hạn **một phía bên trong miền**, như mục 3.3.

 Hàm có thể sửa bằng gán lại \(f(a)\) nếu giới hạn hữu hạn tồn tại; không thể sửa một cú nhảy với hai giới hạn một phía khác nhau chỉ bằng đổi một giá trị.

Xét ví dụ: Đặt \(f(x)=\frac{x^2-5x+6}{x-2}\) khi \(x\ne2\) và \(f(2)=k\). Với \(x\ne2\), rút gọn được \(f(x)=x-3\), nên \(\lim_{x\to2}f(x)=-1\). Vì tính liên tục đòi giá trị tại điểm đúng bằng giới hạn, chỉ \(k=-1\) làm hàm liên tục. Không thế trực tiếp \(x=2\) vào phân thức gốc vì mẫu bằng 0.

**Ví dụ**

**Đề bài.** Cho \(f(x)=\dfrac{x^2-64}{x-8}\) khi \(x\ne8\) và \(f(8)=k\). Tìm \(k\) để liên tục tại \(8\).

**Lời giải.** Khi \(x\ne8\), ta có \(f(x)=x+8\). Do đó \(\lim_{x\to8}f(x)=16\), và liên tục tại \(8\) đòi \(f(8)=k=16\). Nếu \(k\ne16\), đó là gián đoạn có thể khử bằng một giá trị đúng tại điểm.

**Vận dụng** Cho \(f(x)=\sin x\) khi \(x\ne0\) và \(f(0)=c\); cần \(c\) bằng gì để liên tục?

<details markdown="1"><summary>Đối chiếu</summary>

\(c=0\) vì \(\lim_{x\to0}\sin x=0\), bằng giá trị ở điểm.

Nếu quên hàm phải được định nghĩa tại \(a\), hãy phân biệt chấm rỗng biểu thị điểm bị khuyết với chấm đặc biểu thị giá trị thực \(f(a)\). Ví dụ đồ thị \(y=x+8\) với \(x\ne8\) có chấm rỗng tại \((8;16)\); gán \(f(8)=16\) mới lấp đúng chỗ khuyết.


**Kiểm lỗi**

Nếu tính được giới hạn nhưng quên điều kiện giá trị hàm phải bằng giới hạn tại điểm, đọc **Kiến thức 3.1**, làm **Bài 42** và **Bài 43**. Kiểm đủ: có \(f(a)\), có giới hạn khi \(x\to a\) và chúng bằng nhau.

</details>

### 3.2. Ba kiểu gián đoạn thường gặp

<!-- LESSON_ID: TOP08-M14; OUTCOME_ID: TOP08-O14 -->

Giới hạn và giá trị tại điểm có thể lệch nhau theo những cách rất khác. Đồ thị 'đứt' có phải lúc nào cũng vá được bằng một điểm mới? Ta bắt đầu từ giới hạn trái/phải và miền xác định. Gián đoạn khử được khi giới hạn hai phía hữu hạn tồn tại nhưng giá trị tại điểm thiếu/khác; có thể đặt lại \(f(a)=L\). Gián đoạn nhảy khi hai giới hạn hữu hạn một phía khác nhau, không thể vá bằng một giá trị. Gián đoạn vô cực khi ít nhất một giới hạn một phía bằng \(+\infty\) hoặc \(-\infty\) theo định nghĩa mọi ngưỡng ở mục 2.3; chỉ không bị chặn thì chưa đủ. Nhận dạng dựa vào giới hạn, không chỉ nét đồ thị.

Chẳng hạn, \(f(x)=\frac{|x|}{x}\) (\(x\ne0\)) có giới hạn trái \(-1\), phải \(+1\), nên gián đoạn nhảy tại 0. \(g(x)=\frac1x\) có giới hạn trái \(-\infty\), phải \(+\infty\), nên gián đoạn vô cực tại 0. \(h(x)=\frac{x^2-36}{x-6}\) khi \(x\ne6\) rút thành \(x+6\), nên \(\lim_{x\to6}h(x)=12\): gián đoạn có thể khử ở 6. Chọn so một phía trước khi kết luận.

> **TÍNH CHẤT — Ba kiểu gián đoạn thường gặp.** Xét hàm từng đoạn \(f(x)=x+2\) khi \(x&lt;0\), còn \(f(x)=2x+1\) khi \(x\ge0\), được minh họa bằng hình ngay bên dưới. Khi \(x\to0^-\), nhánh trái tiến tới 2 nhưng **không lấy** \((0;2)\); khi \(x\to0^+\), nhánh phải tiến tới 1 và có điểm đặc \((0;1)\), nên \(f(0)=1\). Vì 2 khác 1, hàm **không có giới hạn hai phía** ở 0 và không liên tục tại 0. Đây cũng là gián đoạn nhảy như \(\frac{|x|}x\), nhưng cặp giới hạn một phía của \(\frac{|x|}x\) là \((-1;1)\), còn ở hình này là \((2;1)\).

![Hai phía của điểm nhảy có giới hạn khác nhau](../../../assets/visuals/THPT_TOPIC08_ONE_SIDED_JUMP_R01.svg)

*Đọc hình:* Nhánh trái \(y=x+2\) có chấm rỗng \((0;2)\); nhánh phải \(y=2x+1\) có chấm đặc \((0;1)\). Chấm đặc cho biết giá trị **tại** 0, còn độ cao khi tiến tới 0 từ hai phía là hai giới hạn riêng, khác nhau.

**Ví dụ**

**Đề bài.** Xét \(g(x)=\dfrac1{(x-3)^2}\) khi \(x\ne3\). Phân loại hành vi tại \(x=3\); có thể làm liên tục bằng cách bổ sung duy nhất \(g(3)\) không?

**Lời giải.** Khi \(x\to3^-\) hoặc \(x\to3^+\), mẫu \((x-3)^2\) luôn dương và tiến \(0^+\), nên cả hai phía \(g(x)\to+\infty\). Đây là gián đoạn vô cực: không có giới hạn hữu hạn ở \(3\), vì vậy không thể sửa tính liên tục chỉ bằng gán một giá trị tại \(3\).

**Vận dụng** Nếu \(g(x)=\frac{x^2-1}{x-1}\) với \(x\ne1\) và \(g(1)=3\), thuộc kiểu gián đoạn nào?

<details markdown="1"><summary>Đối chiếu</summary>

Khử được: \(\lim_{x\to1}g(x)=2\) nhưng \(g(1)=3\); đổi \(g(1)=2\) thì liên tục.

Nếu gọi tất cả lỗ bằng vô cực, kiểm có khử được nhân tử chung hay không.


**Kiểm lỗi**

Nếu thấy mẫu số bằng 0 rồi gọi tất cả là gián đoạn vô cực, đọc **Kiến thức 3.2**, làm **Bài 45** và **Bài 46**: xét giới hạn trái/phải và xem có thể sửa bằng một giá trị tại điểm hay không.

</details>

### 3.3. Liên tục trên khoảng và đoạn

<!-- LESSON_ID: TOP08-M15; OUTCOME_ID: TOP08-O15 -->

> **ĐỊNH NGHĨA — Liên tục trên khoảng và đoạn.** Chỉ kiểm tính liên tục tại các điểm thuộc khoảng hoặc đoạn đang xét; nếu đầu mút được lấy, xét giới hạn từ phía bên trong. Hàm \(\sqrt x\) có thiếu 'giới hạn trái' tại \(x=0\) trong miền của nó, vậy có thể liên tục trên \([0;9]\) không? Cần nhớ miền căn không âm, giới hạn một phía. Hàm liên tục trên \((a;b)\) khi liên tục tại từng điểm bên trong; liên tục trên \([a;b]\) còn yêu cầu liên tục từ phải tại \(a\) và từ trái tại \(b\), theo miền xác định. Ở đầu mút không yêu cầu xét bên ngoài miền. Nếu miền là tập hợp nhiều khoảng rời, không tuyên bố 'liên tục qua lỗ' ở điểm ngoài miền.

Với **nửa khoảng**, ta áp dụng cùng ý tưởng nhưng chỉ kiểm đầu mút **được lấy**. Trên \([a;+\infty)\), hàm phải liên tục tại mọi \(x>a\) và có giới hạn phải ở \(a\) bằng \(f(a)\); trên \((a;b]\), hàm liên tục trong \((a;b)\) và giới hạn trái ở \(b\) bằng \(f(b)\). Không cần kiểm phía của đầu mút bị loại khỏi miền. Chẳng hạn, \(g(x)=x^2\) liên tục trên \((-\infty;2]\), bởi đa thức liên tục ở mọi điểm trong khoảng và khi \(x\to2^-\), giới hạn bằng \(g(2)=4\).

Chẳng hạn, \(f(x)=\sqrt x\) trên \([0;9]\) liên tục bên trong vì căn liên tục trên \([0;+\infty)\), tại 0 giới hạn phải bằng \(0=f(0)\) và tại 9 giới hạn trái bằng \(3=f(9)\). Chọn kiểm đầu mút theo đúng phía trong đoạn.

**Ví dụ**

**Đề bài.** Xét \(f(x)=\sqrt{16-(x-2)^2}\). Tìm miền xác định và giải thích tính liên tục tại hai đầu mút.

**Lời giải.** Điều kiện \(16-(x-2)^2\ge0\) tương đương \(|x-2|\le4\), nên miền xác định là \([-2;6]\). Hàm là hợp của đa thức và căn không âm, liên tục bên trong. Tại \(-2\) dùng giới hạn phải và tại \(6\) giới hạn trái, đều bằng \(0\), đúng các giá trị \(f(-2)=f(6)=0\).

**Vận dụng** Hàm \(g(x)=\frac1x\) có liên tục trên \((0;1)\) không? Có thể kết luận như vậy trên \([0;1]\) không? Vì sao?

<details markdown="1"><summary>Đối chiếu</summary>

Có trên \((0;1)\), vì tại mọi điểm của khoảng, mẫu khác 0. Không thể liên tục trên \([0;1]\), vì \(g(0)\) không xác định. Điểm 0 không thuộc khoảng mở, nên khi xét \((0;1)\) không phải kiểm liên tục tại 0.

Nếu hỏi giới hạn trái của \(\sqrt x\) ở 0 trong \(\mathbb R\) và nói 'không liên tục', hãy trở về định nghĩa liên tục trên miền \([0;9]\).


**Kiểm lỗi**

Nếu cho rằng đầu mút không liên tục vì thiếu một phía nằm ngoài miền xác định, đọc **Kiến thức 3.3**, làm **Bài 48** và **Bài 50**. Tại đầu đoạn dùng giới hạn từ phía **trong miền**, không yêu cầu một phía không có giá trị.

</details>

### 3.4. Miền xác định và phép toán liên tục

<!-- LESSON_ID: TOP08-M16; OUTCOME_ID: TOP08-O16 -->

> **TÍNH CHẤT — Miền xác định và phép toán liên tục.** Phép toán giữ tính liên tục khi miền và điều kiện phù hợp. Nếu mỗi phép tính trong hàm trông quen thuộc, có thể bỏ qua miền xác định khi kết luận liên tục? Để xác định điều đó, cần xét đa thức, căn, mẫu khác 0, hợp hàm. Đa thức, \(\sin x\) và \(\cos x\) liên tục trên toàn \(\mathbb R\); căn liên tục nơi đối số không âm; phân thức liên tục tại điểm có mẫu khác \(0\). Vì \(\tan x=\frac{\sin x}{\cos x}\) và \(\cot x=\frac{\cos x}{\sin x}\), \(\tan x\) liên tục tại các điểm \(\cos x\ne0\), còn \(\cot x\) liên tục tại các điểm \(\sin x\ne0\); không được kết luận qua điểm cấm mẫu. Tổng, hiệu, tích, thương (khi mẫu khác \(0\)) và hợp các hàm liên tục vẫn liên tục khi giữ đúng điều kiện miền. Luôn tìm miền chung của căn và mẫu trước khi viết khoảng liên tục. Tại đầu mút của miền liên tục tương đối có thể chỉ xét một phía.

Chẳng hạn, \(f(x)=\frac{x^2+1}{x-1}\) có miền \(\mathbb R\setminus\{1\}\) nên liên tục trên \((-\infty;1)\) và \((1;+\infty)\), không thể nói liên tục trên toàn \(\mathbb R\). Phép chia thất bại tại 1 dù tử vẫn có nghĩa.

**Ví dụ**

**Đề bài.** Tìm miền xác định và các phần liên tục của \(g(x)=\dfrac{\sqrt{(x-1)(x-4)}}{x-3}\).

**Lời giải.** Điều kiện căn: \((x-1)(x-4)\ge0\) nên \(x\le1\) hoặc \(x\ge4\). Điều kiện mẫu \(x\ne3\) tự thỏa trong miền vừa tìm. Vậy \(D=(-\infty;1]\cup[4;+\infty)\), và hàm liên tục trên từng thành phần; ở \(1\), \(4\) dùng giới hạn một phía trong miền. Không kết luận liên tục xuyên khoảng trống \((1;4)\).

**Vận dụng** \(h(x)=\frac{\sqrt{x+2}}{x+1}\): miền xác định là gì?

<details markdown="1"><summary>Đối chiếu</summary>

\(x\ge-2\) và \(x\ne-1\); liên tục trên \([-2;-1)\) và \((-1;+\infty)\) theo miền.

Nếu kiểm căn \(x+2\ge0\) nhưng bỏ mẫu \(x+1\ne0\), hãy ghi hai điều kiện bằng dấu 'và'.


**Kiểm lỗi**

Nếu xét mỗi điều kiện căn nhưng quên mẫu khác 0, hoặc nói liên tục xuyên khoảng bị loại, đọc **Kiến thức 3.4**, làm **Bài 51** và **Bài 52**; giao tất cả điều kiện miền trước khi kết luận các thành phần liên tục.

</details>

## 4. Từ đường cong không đứt tới khẳng định có nghiệm

Nếu một hàm liên tục trên đoạn và nhận giá trị âm ở đầu này, dương ở đầu kia, nó buộc phải đi qua mức 0 ở một vị trí giữa hai đầu. Đây không phải suy đoán từ vài điểm trên đồ thị mà là định lý giá trị trung gian. Từ bảo đảm **tồn tại** ấy, ta có thể dùng phép chia đôi để tìm khoảng ngày càng nhỏ chứa nghiệm, dù chưa biết công thức nghiệm chính xác.

### 4.1. Định lí giá trị trung gian

<!-- LESSON_ID: TOP08-M17; OUTCOME_ID: TOP08-O17 -->

Làm sao biết một phương trình có nghiệm dù chưa tìm được công thức nghiệm? Ta đã biết liên tục trên đoạn đóng, dấu âm/dương. 

> **ĐỊNH LÝ — Trường hợp đổi dấu của định lý giá trị trung gian.** Nếu \(f\) **liên tục trên đoạn** \([a;b]\), \(a&lt;b\), và \(f(a)f(b)&lt;0\), thì tồn tại **ít nhất một** \(c\in(a;b)\) sao cho \(f(c)=0\). Kết luận tồn tại không tự khẳng định nghiệm duy nhất.

Vì sao đổi dấu có tác dụng? Một hàm liên tục trên đoạn nhận mọi giá trị nằm giữa hai giá trị ở đầu đoạn. Khi một giá trị âm, một giá trị dương, số 0 nằm giữa chúng. Đây chính là trường hợp đổi dấu của định lí giá trị trung gian.

Định lí cho tồn tại, không tự cho duy nhất; nếu \(f(a)f(b)>0\) cũng không đủ kết luận vô nghiệm. Muốn duy nhất cần lý do độc lập (đơn điệu, v.v.). IVT là viết tắt của định lý giá trị trung gian (Intermediate Value Theorem). Không dùng IVT khi hàm không liên tục trên cả đoạn. Chẳng hạn, \(f(x)=\frac1x\) có \(f(-1)=-1\), \(f(1)=1\), nhưng không xác định tại 0 và không có nghiệm \(f(x)=0\). Đổi dấu hai đầu không đủ nếu thiếu điều kiện liên tục.

Chẳng hạn, \(g(x)=x^3-2\) liên tục trên \([1;2]\); \(g(1)=-1\), \(g(2)=6\), nên tồn tại \(c\in(1;2)\) với \(g(c)=0\). Có nghiệm thực \(\sqrt[3]2\), nhưng IVT chỉ khẳng định tồn tại; ta chọn IVT để làm chứng cứ không cần tính căn chính xác.

**Ví dụ**

**Đề bài.** Dùng định lí giá trị trung gian chứng minh \(x^3-7=0\) có ít nhất một nghiệm trong \((1;2)\).

**Lời giải.** Đặt \(g(x)=x^3-7\), là đa thức liên tục trên \([1;2]\). Vì \(g(1)=-6&lt;0\), \(g(2)=1>0\), IVT đảm bảo có \(c\in(1;2)\) sao cho \(g(c)=0\). Kết luận **ít nhất một**, không tự nhận duy nhất nếu chưa chứng minh thêm.

**Vận dụng** \(x^2-3\) có nghiệm trong \((1;2)\) theo IVT không?

<details markdown="1"><summary>Đối chiếu</summary>

Có. Đặt \(f(x)=x^2-3\); hàm đa thức liên tục trên \([1;2]\), \(f(1)=-2&lt;0\), \(f(2)=1>0\), nên có ít nhất một nghiệm trong \((1;2)\).

Nếu viết 'duy nhất do IVT', thử \(g(x)=x(x-1)(x+1)\) trên \([-2;2]\) có nhiều nghiệm mặc dù đổi dấu hai đầu.


**Kiểm lỗi**

Nếu suy ngay nghiệm **duy nhất** chỉ từ trái dấu ở hai đầu, đọc **Kiến thức 4.1**, làm **Bài 54** và **Bài 56**. Định lí giá trị trung gian cho tồn tại **ít nhất một** nghiệm trên đoạn liên tục; tính duy nhất cần lập luận riêng.

</details>

### 4.2. Chia đôi khoảng để khoanh nghiệm

<!-- LESSON_ID: TOP08-M18; OUTCOME_ID: TOP08-O18 -->

> **PHƯƠNG PHÁP — Chia đôi khoảng để khoanh nghiệm.** Sau kết luận tồn tại nghiệm, chia đôi giúp khoanh nghiệm bằng phép tính. Sau khi biết có nghiệm, làm thế nào khoanh vùng được nó mà chưa dùng máy tính? Ta sử dụng IVT, giá trị tại trung điểm, dấu trái/phải. Chia đôi đoạn \([a;b]\) có \(f\) liên tục và hai đầu trái dấu: tại \(m=\frac{a+b}{2}\), nếu \(f(m)=0\) thì tìm xong; nếu không, giữ nửa đoạn có hai giá trị đầu trái dấu. Nếu chưa gặp trung điểm là nghiệm, lặp lại. Sau \(k\) lần chia và giữ lại một nửa, đoạn còn lại dài \(\frac{b-a}{2^k}\).

Xét ví dụ \(g(x)=x^2-2\) trên \([1;2]\), với \(g(1)=-1\), \(g(2)=2\). Theo dõi từng bước:

| Bước | Đoạn trước khi chia | Trung điểm \(m\) | \(g(m)\) | Đoạn giữ lại |
|---|---|---|---|---|
| 1 | \([1;2]\) | \(1{,}5\) | \(0{,}25>0\) | \([1;1{,}5]\) |
| 2 | \([1;1{,}5]\) | \(1{,}25\) | \(-0{,}4375&lt;0\) | \([1{,}25;1{,}5]\) |

Sau mỗi bước, hai đầu đoạn giữ lại vẫn trái dấu. Nghiệm \(\sqrt2\) nằm trong đoạn cuối dài \(0{,}25\).

![Định lý giá trị trung gian và chia đôi đoạn](../../../assets/visuals/THPT_TOPIC08_IVT_BISECTION_R01.svg)

*Đọc hình:* Với \(f(x)=x^2-2\), đầu \(x=1\) có \(f=-1\) và \(x=2\) có \(f=2\), nên có ít nhất một nghiệm giữa chúng. Tại trung điểm \(1{,}5\), \(f=0{,}25>0\), vì thế bước đầu giữ \([1;1{,}5]\). Định lý bảo đảm **tồn tại**, còn tính duy nhất cần lập luận riêng.

**Ví dụ**

**Đề bài.** Dùng hai bước chia đôi để khoanh nghiệm của \(x^2-5=0\) trong \([2;3]\).

**Lời giải.** Đặt \(g(x)=x^2-5\), liên tục trên \([2;3]\). Vì \(g(2)=-1&lt;0\), \(g(3)=4>0\), bước 1 lấy \(m=2{,}5\) có \(g(m)=1{,}25>0\), giữ \([2;2{,}5]\). Bước 2 có \(m=2{,}25\), \(g(m)=0{,}0625>0\), giữ \([2;2{,}25]\), dài \(0{,}25\). Các đầu đoạn luôn trái dấu; hình phía trên dùng \(x^2-2\), không phải phương trình này.

**Vận dụng** Với \(x^2-3\) trên \([1;2]\), sau một bước chia đôi giữ nửa nào?

<details markdown="1"><summary>Đối chiếu</summary>

Đặt \(g(x)=x^2-3\). Vì \(g(1)=-2&lt;0\), \(g(1{,}5)=-0{,}75\) và \(g(2)=1>0\), nên giữ \([1{,}5;2]\); \(g\) vẫn đổi dấu.

Nếu chọn nửa không trái dấu, viết bảng \(f(a),f(m),f(b)\) và tìm cặp tích âm trước khi loại nửa còn lại.


**Kiểm lỗi**

Nếu chọn nửa khoảng không còn đổi dấu hoặc đếm sai độ dài sau mỗi bước, đọc **Kiến thức 4.2**, làm **Bài 57** và **Bài 58**; lập bảng dấu \(g(a),g(m),g(b)\), mỗi lần chỉ giữ nửa có hai đầu trái dấu.

</details>

<!-- AUTHORING_ONLY: source-locked figure custody and interaction SPEC_ONLY notes preserved in original R02 blob ef118d499f0c6bb4828f5f2db169e3135b187169. The learner text already places verified SVG inline. -->

> **Kiến thức cần ghi nhớ**
>
> - **Giới hạn:** một dãy có thể tiến đến \(L\) mà không bao giờ bằng \(L\). Khi tính giới hạn hàm tại \(a\), xét \(x\) tiến gần \(a\) trong miền, không tự gán giá trị \(f(a)\).
> - **Cấp số nhân vô hạn:** công thức \(S=\frac a{1-q}\) dùng khi \(|q|&lt;1\); phải hiểu tổng là giới hạn các tổng riêng. Với \(a\ne0\), nếu \(|q|\ge1\) thì không có tổng hữu hạn.
> - **Liên tục:** ở điểm trong miền, cần \(\lim_{x\to a}f(x)=f(a)\); ở đầu mút đoạn chỉ kiểm phía thuộc miền. Một điểm mất hoặc sai giá trị có thể khử gián đoạn nếu giới hạn hữu hạn tồn tại.
> - **Hệ quả đổi dấu:** nếu hàm liên tục trên **cả đoạn** và hai đầu trái dấu, chắc chắn **tồn tại** ít nhất một nghiệm ở giữa. Đây là điều kiện đủ, không phải điều kiện cần; không suy nghiệm duy nhất nếu thiếu lập luận thêm.

<!-- TOPIC08_APPROVED_SOURCE_END -->
<span data-topic-w1-source-end="kien-thuc" hidden></span>
<p class="topic-w1-end-nav"><a href="../../">← Tổng quan các Chuyên đề</a></p>
