# Bài 19. Lôgarit

<style>
/* Scoped to the B19 learner page only; Golden CSS/JS chung được giữ nguyên. */
.md-typeset:has([data-g11-b19-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#e8f7f2;border:1px solid #a9dccc;border-left:4px solid #087d69;color:#174137}
.md-typeset:has([data-g11-b19-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#eaf1fc;border:1px solid #a5bee5;border-left:4px solid #4879c2;color:#193d66}
.md-typeset:has([data-g11-b19-knowledge-only]) .thpt-r4-key-formula {background:transparent;border:1px solid #8c9ab0;border-left:4px solid #64748b;border-radius:10px;padding:.75rem 1rem;margin:.7rem 0;line-height:1.7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b19-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b19-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b19-knowledge-only]) .thpt-r4-key-formula {background:transparent;color:inherit;border-color:#8c9ab0;border-left-color:#bdc8d8}
</style>

<div class="thpt-r4-screen" data-thpt-r4 data-g11-b19-knowledge-only>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VI · KẾT NỐI TRI THỨC · TẬP HAI</p>
<p class="thpt-r4-lead">Lôgarit trả lời câu hỏi “cần số mũ nào?”. Từ định nghĩa và điều kiện, hình thành quy tắc nhân–chia–lũy thừa, đổi cơ số, log thập phân và ln tự nhiên.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương VI</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    Bài 18 giúp em tính \(2^3=8\), tức là biết cơ số 2 và số mũ 3 thì tìm được kết quả. Nếu đảo câu hỏi thành **\(2^x=8\), tìm \(x\)**, ta đã biết kết quả là 8 nhưng chưa biết số mũ. Lôgarit chính là cách gọi tên **số mũ cần tìm**. Đây cũng là lí do nó giúp giải bài toán lãi kép: biết số vốn và số tiền mục tiêu, muốn tìm **bao nhiêu năm** phải tăng trưởng để đạt mức ấy.

    ### 1.1. Khái niệm lôgarit

    Hãy thử ba bài toán: \(2^x=8\) cho \(x=3\); \(2^x=\frac14\) cho \(x=-2\); \(2^x=\sqrt2\) cho \(x=\frac12\). Mỗi lần, ta không tính “đầu ra của lũy thừa” mà đi ngược tìm **số mũ**. Kí hiệu \(\log_2 8=3\), \(\log_2\frac14=-2\), \(\log_2\sqrt2=\frac12\) ghi lại đúng việc đó.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVI-B19-01_R00.svg" alt="Sơ đồ hai chiều từ hai mũ ba bằng tám sang lôgarit cơ số hai của tám bằng ba"><figcaption><strong>Hướng dẫn đọc:</strong> ô trái cho \(2^3=8\): biết cơ số 2 và mũ 3, tính được 8. Đi theo mũi tên ngược về ô phải để đọc \(\log_2 8=3\): biết cơ số 2 và kết quả 8, tìm lại số mũ 3. Bên dưới hình ghi rõ điều kiện \(a>0,\ a\ne1,\ b>0\).</figcaption></figure>

    **Định nghĩa có điều kiện:** Với \(a>0,\ a\ne1\) và \(M>0\), \(\log_a M\) là **số thực duy nhất \(\alpha\)** sao cho \(a^\alpha=M\). Vì \(a=1\) sẽ cho \(1^\alpha=1\) với **mọi \(\alpha\)**, không xác định được một số mũ duy nhất; còn cơ số không dương không có phép lũy thừa với mọi mũ thực như đã học. Đối số phải dương vì \(a^\alpha>0\) nếu \(a>0\).

    Lấy \(M=1\) thì số mũ bằng 0, nên \(\log_a1=0\). Lấy \(M=a\) thì số mũ bằng 1, nên \(\log_a a=1\). Hai phép tính “đi rồi quay lại” cũng đúng: \(a^{\log_a M}=M\) nếu \(M>0\), và \(\log_a(a^t)=t\) nếu \(t\in\mathbb R\). Các công thức ấy chỉ hợp lệ khi **cơ số lôgarit hợp lệ**.

    **Vận dụng.** Không dùng máy tính, tìm \(\log_3 81\), \(\log_{\frac12}8\) và xét \(\log_2(-4)\) có nghĩa thực không.

    ??? question "Đối chiếu"

        **Lời giải:** Vì \(3^4=81\), \(\log_3 81=4\). Vì \((\frac12)^{-3}=8\), \(\log_{\frac12}8=-3\). \(\log_2(-4)\) **không có nghĩa thực** vì đối số âm, trong khi \(2^\alpha>0\) với mọi \(\alpha\in\mathbb R\).

    ??? tip "Kiểm lỗi"

        Nếu \(\log_{\frac12}8\) bị ghi là \(3\), hãy thử nâng \((\frac12)^3=\frac18\), không bằng 8. Đừng nhầm **đối số** với **cơ số**, hoặc bỏ điều kiện đối số dương.

    ### 1.2. Tính chất của lôgarit

    **Vì sao lôgarit của tích lại thành tổng?** Giả sử \(M=a^u\), \(N=a^v\), với \(a>0,\ a\ne1\). Vì \(MN=a^{u+v}\) theo Bài 18, nên “số mũ cần tạo ra \(MN\)” bằng \(u+v\). Viết bằng lôgarit:
    \[
    \log_a(MN)=\log_aM+\log_aN.
    \]
    Đây là suy luận **từ phép nhân lũy thừa**, không phải một quy tắc được nhớ theo dáng chữ.

    Tương tự, \(M/N=a^{u-v}\) nên \(\log_a(M/N)=\log_aM-\log_aN\), và \(M^t=a^{ut}\) nên \(\log_a(M^t)=t\log_aM\). Trong cả ba công thức, **\(M,N>0\)**. Nếu trong một bài toán biểu thức như \(x-1\) có thể âm, em phải xét miền xác định **trước** khi tách lôgarit, không được biến đổi tùy ý.

    **Đổi cơ số có mục đích gì?** Máy tính thường có phím \(\log\) cơ số 10 và \(\ln\) cơ số \(e\), nhưng SGK có thể hỏi \(\log_4 8\). Đặt \(u=\log_a M\), nghĩa là \(M=a^u\). Lấy lôgarit cơ số \(b>0,b\ne1\) hai vế: \(\log_bM=u\log_ba\), nên
    \[
    \log_a M=\frac{\log_b M}{\log_b a}.
    \]
    Mẫu \(\log_ba\ne0\) vì \(a\ne1\). Như vậy đổi cơ số là cách **chuyển một câu hỏi số mũ sang cơ số có thể tính được**, không phải đổi bừa khi chưa kiểm cơ số.

    **Dấu và thứ tự:** Nếu \(a>1\), \(a^x\) tăng nên \(\log_a M\) cũng tăng theo \(M>0\). Nếu \(0<a<1\), điều ngược lại xảy ra: đối số lớn hơn có **lôgarit nhỏ hơn**. Chẳng hạn \(\log_{\frac12}4=-2\), \(\log_{\frac12}8=-3\), nên dù \(4<8\) thì \(-2>-3\). Không dùng quy tắc so sánh của cơ số lớn hơn 1 cho mọi cơ số hợp lệ.

    **Vận dụng.** Với \(x>1\), rút gọn \(A=\log_2(x^2-1)-\log_2(x-1)\). Sau đó tính \(\log_4 8\) bằng đổi cơ số.

    ??? question "Đối chiếu"

        **Lời giải:** Vì \(x>1\), \(x^2-1>0\) và \(x-1>0\), nên được trừ hai lôgarit: \(A=\log_2\frac{x^2-1}{x-1}=\log_2(x+1)\). Đổi cơ số 2: \(\log_4 8=\frac{\log_2 8}{\log_2 4}=\frac32\).

    ??? tip "Kiểm lỗi"

        Không thể thay \(\log_2(x^2-1)-\log_2(x-1)\) bằng \(\log_2(x^2-x)\). Quy tắc hiệu lôgarit tương ứng **phép chia** hai đối số, không phải phép trừ đối số.

    ### 1.3. Lôgarit thập phân và lôgarit tự nhiên

    Khi ghi dân số, khối lượng rất lớn hoặc nồng độ rất nhỏ, cơ số **10** đặc biệt thuận tiện vì trùng hệ thập phân. Lôgarit cơ số 10 được gọi là **lôgarit thập phân**, viết \(\log M\) hoặc \(\lg M\). Chẳng hạn \(\log1000=3\) vì \(10^3=1000\), \(\log0{,}001=-3\) vì \(10^{-3}=0{,}001\). Hai cách viết \(\log M\) và \(\log_{10}M\) là cùng một giá trị trong SGK.

    Trong mô hình lãi kép chia năm thành các kì càng ngắn, một số đặc biệt xuất hiện:
    \[
    e=\lim_{t\to+\infty}\left(1+\frac1t\right)^t\approx2{,}71828.
    \]
    Số \(e\) là số dương lớn hơn 1, nên hoàn toàn có thể làm **cơ số lôgarit**. Ta gọi \(\log_e M\) là **lôgarit tự nhiên**, viết \(\ln M\). Từ đó \(\ln e=1\), \(\ln1=0\), \(\ln(e^2)=2\). Những kết quả này đều theo định nghĩa lôgarit, không phải do phím bấm máy tính đặt ra.

    **Vì sao dùng ln cho lãi liên tục?** Gửi vốn \(P\), lãi suất năm \(r\), lãi ghép \(m\) kì/năm trong \(t\) năm cho mô hình \(P(1+r/m)^{mt}\). Khi tăng số kì ghép không giới hạn, giới hạn dẫn tới \(A=Pe^{rt}\). Muốn biết thời gian \(t\) để số tiền **gấp đôi**, giải \(2P=Pe^{rt}\) thành \(e^{rt}=2\), rồi lấy \(\ln\) hai vế: \(rt=\ln2\), nên \(t=\frac{\ln2}{r}\) (với \(r>0\)). Lôgarit lúc này chính là phép đảo **tìm thời gian trong số mũ**.

    **Về máy tính:** Phím \(\log\) và \(\ln\) cho kết quả **gần đúng** khi giá trị không biểu diễn bằng số thập phân hữu hạn; lôgarit cơ số khác tính qua \(\log_aM=\ln M/\ln a\). Ví dụ \(\log_4 8=\frac32\) là chính xác, còn \(\ln2\approx0{,}6931\) là làm tròn. Dù bấm máy, vẫn phải kiểm đối số dương và cơ số hợp lệ.

    **Một ứng dụng hóa học:** Trong mô hình pH, với nồng độ \([\mathrm H^+]>0\) (mol/lít), \(\mathrm{pH}=-\log[\mathrm H^+]\). Nếu nồng độ là \(10^{-3}\) mol/lít, pH bằng 3. Đây là ví dụ vì sao lôgarit hữu ích với các thang đo trải dài nhiều bậc 10; không cần học thêm hóa học để áp dụng quy tắc số mũ.

    **Vận dụng.** Một khoản tiền tăng liên tục theo mô hình \(A=Pe^{0{,}06t}\) (với \(t\) là số năm). Tìm thời gian để tăng gấp đôi, làm tròn đến một chữ số thập phân. Đồng thời tính pH nếu \([\mathrm H^+]=10^{-4}\) mol/lít.

    ??? question "Đối chiếu"

        **Lời giải:** \(2P=Pe^{0{,}06t}\), với \(P>0\), nên \(e^{0{,}06t}=2\). Lấy \(\ln\): \(0{,}06t=\ln2\); \(t=\frac{\ln2}{0{,}06}\approx11{,}6\) năm. Với \([\mathrm H^+]=10^{-4}\), \(\mathrm{pH}=-\log10^{-4}=-(-4)=4\).

    ??? tip "Kiểm lỗi"

        Nếu thấy \(\ln2/0{,}06\) là 11,55... thì phải **làm tròn 11,6** theo yêu cầu, không ghi bằng dấu \(=\). Công thức pH dùng **log cơ số 10** và đối số nồng độ phải dương.

=== "Kiến thức SGK"

    ### 2.1. Khái niệm lôgarit

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Lôgarit cơ số \(a\) của \(M\)</strong><p>Cho <strong>\(a>0,\ a\ne1,\ M>0\)</strong>. Số thực \(\alpha\) duy nhất thỏa \(a^\alpha=M\) được gọi là <strong>lôgarit cơ số \(a\) của \(M\)</strong>, kí hiệu \(\log_a M\). Khi đó \(\alpha=\log_a M\Leftrightarrow a^\alpha=M\). Không có lôgarit thực của 0 hay số âm; cơ số không được bằng 1.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Hệ quả trực tiếp từ định nghĩa</strong><p>Với \(a>0,\ a\ne1,\ M>0,\ t\in\mathbb R\): \(\log_a1=0\), \(\log_aa=1\), \(a^{\log_aM}=M\), và \(\log_a(a^t)=t\). Số mũ cần tìm có thể âm, 0, phân số hoặc vô tỉ; điều kiện cơ số/đối số vẫn phải giữ.</p></div>

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVI-B19-01_R00.svg" alt="Biến đổi qua lại giữa hai mũ ba bằng tám và lôgarit cơ số hai của tám bằng ba"><figcaption><strong>Tra hình:</strong> \(2^3=8\Longleftrightarrow\log_2 8=3\). Hai mũi tên là hai cách đọc **cùng một đẳng thức**; xem hàng điều kiện \(a>0,\ a\ne1,\ b>0\), không thay đối số 8 bằng số âm.</figcaption></figure>

    **Tự tra điều kiện:** Trong \(\log_{x-1}(x+2)\), phải đồng thời có \(x-1>0\), \(x-1\ne1\) và \(x+2>0\), tức \(x>1,\ x\ne2\). Không chỉ xét đối số.

    ### 2.2. Tính chất của lôgarit

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Quy tắc — Tích, thương và lũy thừa</strong><p>Với \(a>0,\ a\ne1,\ M,N>0,\ t\in\mathbb R\): \(\log_a(MN)=\log_aM+\log_aN\); \(\log_a(M/N)=\log_aM-\log_aN\); \(\log_a(M^t)=t\log_aM\). Mọi lôgarit trong phép biến đổi đều phải có đối số dương.</p></div>

    <div class="thpt-r4-key-formula" role="note"><strong>Công thức — Đổi cơ số</strong><p>Nếu \(a,b>0,\ a\ne1,\ b\ne1,\ M>0\), thì \(\displaystyle\log_aM=\frac{\log_bM}{\log_ba}\). Mẫu \(\log_ba\ne0\) nhờ \(a\ne1\). Có thể dùng \(\log\) hoặc \(\ln\) trên máy tính làm cơ số trung gian.</p></div>

    **Các hệ quả của đổi cơ số:** Nếu \(a,b>0\), \(a,b\ne1\), thì \(\log_ab=\frac1{\log_ba}\). Với \(t\ne0\), cơ số \(a^t>0,\ a^t\ne1\), nên \(\log_{a^t}M=\frac1t\log_aM\) với \(M>0\).

    **So sánh:** Cơ số \(a>1\) thì \(M>N>0\Rightarrow\log_aM>\log_aN\). Cơ số \(0<a<1\) thì bất đẳng thức **đảo chiều**; đây là điều cần nhớ khi suy từ các lũy thừa ở Bài 18.

    **Phương pháp:** Kiểm miền xác định → nếu gặp tích/thương/lũy thừa của các đối số dương thì dùng quy tắc phù hợp → nếu hai cơ số khác nhau, dùng đổi cơ số → kiểm lại các giá trị và dấu.

    ### 2.3. Lôgarit thập phân và lôgarit tự nhiên

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Lôgarit thập phân</strong><p>Với <strong>\(M>0\)</strong>, \(\log M=\log_{10}M\), còn viết \(\lg M\), là <strong>lôgarit thập phân</strong> của \(M\). Ví dụ \(\log100=2\), \(\log0{,}01=-2\).</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khái niệm — Số \(e\) và lôgarit tự nhiên</strong><p>Số \(e=\lim_{x\to+\infty}(1+1/x)^x\approx2{,}71828\) là cơ số dương khác 1. Với <strong>\(M>0\)</strong>, <strong>lôgarit tự nhiên</strong> của \(M\) là \(\ln M=\log_eM\). Do đó \(\ln1=0\), \(\ln e=1\), \(\ln(e^t)=t\).</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Công thức ứng dụng — Lãi kép liên tục</strong><p>Trong mô hình lãi kép liên tục với vốn đầu \(P>0\), lãi suất năm không đổi \(r\) và thời gian \(t\), số tiền là \(A=Pe^{rt}\). Nếu \(r>0\) và cần thời gian tăng gấp đôi, \(t=\ln2/r\). Đây là mô hình tính lãi lý tưởng, không phải quy tắc mọi ngân hàng luôn áp dụng.</p></div>

    | Dạng lôgarit | Cơ số | Ví dụ |
    | :-- | :-- | :-- |
    | \(\log M\) hoặc \(\lg M\) | \(10\) | \(\log1000=3\) |
    | \(\ln M\) | \(e\approx2{,}71828\) | \(\ln e^2=2\) |
    | \(\log_a M\) | \(a>0,\ a\ne1\) | \(\log_4 8=\frac32\) |

    **Máy tính:** Với \(a>0,\ a\ne1,\ M>0\), tính \(\log_a M\) bằng \(\ln M/\ln a\) hoặc \(\log M/\log a\); ghi \(\approx\) khi làm tròn. Dùng \(\log\) trong công thức pH, \(\ln\) trong công thức giải số mũ có cơ số \(e\). Kí hiệu gần đúng không thay thế một kết quả chính xác khi rút gọn được.

    **Ứng dụng có điều kiện:** \(\mathrm{pH}=-\log[\mathrm H^+]\) với \([\mathrm H^+]>0\) tính theo mol/lít trong mô hình SGK. Không đưa nồng độ âm hoặc 0 vào log.
