# Bài 18. Lũy thừa với số mũ thực

<style>
/* Chỉ learner B18: 3+1 theo ngữ nghĩa; giữ nguyên Golden/UI dùng chung. */
.md-typeset:has([data-g11-b18-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#e8f7f2;border:1px solid #a9dccc;border-left:4px solid #087d69;color:#174137}
.md-typeset:has([data-g11-b18-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#eaf1fc;border:1px solid #a5bee5;border-left:4px solid #4879c2;color:#193d66}
.md-typeset:has([data-g11-b18-knowledge-only]) .thpt-r4-key-formula {background:transparent;border:1px solid #8c9ab0;border-left:4px solid #64748b;border-radius:10px;padding:.75rem 1rem;margin:.7rem 0;line-height:1.7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b18-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b18-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b18-knowledge-only]) .thpt-r4-key-formula {background:transparent;color:inherit;border-color:#8c9ab0;border-left-color:#bdc8d8}
</style>

<div class="thpt-r4-screen" data-thpt-r4 data-g11-b18-knowledge-only>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VI · KẾT NỐI TRI THỨC · TẬP HAI</p>
<p class="thpt-r4-lead">Hiểu vì sao số mũ được mở rộng từ nguyên → hữu tỉ → thực, đọc đúng căn bậc n, giữ điều kiện cơ số và vận dụng vào biến đổi, so sánh, lãi kép.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương VI</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    Em đã quen với \(2^3=8\): số mũ 3 nói có ba thừa số 2. Nhưng kí hiệu \(2^{-1}\), \(2^{1/2}\), \(2^{\sqrt2}\) có còn ý nghĩa “nhân lặp” không? Không. Ta phải mở rộng phép lũy thừa theo cách **giữ được những quy tắc nhất quán**, đồng thời không làm phép tính vô nghĩa. Đây là cầu nối từ căn thức tới hàm số mũ và lôgarit; biết bản chất sẽ giúp em không nhầm dấu trừ của số mũ với dấu âm của kết quả.

    ### 1.1. Lũy thừa với số mũ nguyên

    **Vì sao có số mũ 0 và âm?** Với cơ số 2, dãy giá trị \(2^3=8\), \(2^2=4\), \(2^1=2\) giảm một nửa mỗi khi giảm số mũ 1. Nếu tiếp tục cùng quy luật, \(2^0=1\), \(2^{-1}=\frac12\), \(2^{-2}=\frac14\). Số mũ âm không biến lũy thừa thành một số âm: nó nói **lấy nghịch đảo** của lũy thừa dương.

    | Số mũ \(n\) | \(-2\) | \(-1\) | \(0\) | \(1\) | \(2\) |
    | :-- | --: | --: | --: | --: | --: |
    | \(2^n\) | \(\frac14\) | \(\frac12\) | \(1\) | \(2\) | \(4\) |

    Khi \(a\ne0\), ta định nghĩa \(a^0=1\) và \(a^{-n}=\frac1{a^n}\) với \(n\) nguyên dương. Điều kiện \(a\ne0\) là thật sự cần: \(0^{-1}=\frac10\) không có nghĩa. Trong phạm vi bài này \(0^0\) cũng không định nghĩa, trong khi \(0^n=0\) với \(n\) nguyên dương.

    Các quy tắc quen thuộc \(a^ma^n=a^{m+n}\), \(a^m/a^n=a^{m-n}\) tiếp tục đúng cho số mũ nguyên khi các cơ số khác 0 và phép chia có nghĩa. **Đừng áp quy tắc nhân cho phép cộng**: \(2^2+2^3=12\ne2^5\). Với cơ số \(a>1\), số mũ tăng thì \(a^n\) tăng; với \(0<a<1\), thứ tự đảo chiều.

    Lũy thừa mũ nguyên còn giúp viết số liệu rất lớn hoặc rất nhỏ: \(0{,}0000042=4{,}2\cdot10^{-6}\) m. Trong kí hiệu khoa học, hệ số dương nằm trong khoảng từ 1 đến dưới 10; số mũ là số nguyên cho biết dịch dấu phẩy bao nhiêu bậc. Đây là cách viết giá trị, không phải phép làm tròn tùy tiện.

    **Vận dụng.** Hãy tính \(3^{-2}\), \((-\frac12)^{-3}\) và giải thích vì sao \(0^{-2}\) không xác định.

    ??? question "Đối chiếu"

        **Lời giải:** \(3^{-2}=\frac1{3^2}=\frac19\). Với cơ số \(-\frac12\ne0\), \((-\frac12)^{-3}=\frac1{(-1/2)^3}=-8\). Còn \(0^{-2}=\frac1{0^2}=\frac10\) vô nghĩa. Kết quả âm của biểu thức thứ hai đến từ **cơ số âm và số mũ lẻ**, không phải vì số mũ âm.

    ??? tip "Kiểm lỗi"

        Nếu tính \(3^{-2}=-9\), em đã nhầm dấu trừ trước số mũ với dấu trừ trước cả lũy thừa. Hãy đọc \(a^{-n}\) thành “nghịch đảo của \(a^n\)” rồi mới thay cơ số.

    ### 1.2. Lũy thừa với số mũ hữu tỉ

    **Vì sao lũy thừa phân số lại liên quan căn?** Giả sử muốn giữ \((a^{1/2})^2=a\) với \(a>0\). Số **dương** có bình phương bằng \(a\) là \(\sqrt a\), nên cần đặt \(a^{1/2}=\sqrt a\). Tương tự, \(a^{1/3}=\sqrt[3]a\), và \(a^{m/n}=\sqrt[n]{a^m}\) cho \(a>0\), \(n\) nguyên dương, \(m\) nguyên. Định nghĩa này không mang nghĩa “nhân \(a\) với nhau \(m/n\) lần”.

    Trước khi dùng định nghĩa ấy, phải phân biệt **căn bậc \(n\)** của một số thực và **căn số học**:

    | Bài toán | Số thực có thể nhận được | Điều kiện chính |
    | :-- | :-- | :-- |
    | \(x^3=-8\) | \(x=-2\) | Căn bậc lẻ của số âm tồn tại duy nhất |
    | \(x^2=9\) | \(x=-3\) hoặc \(x=3\) | Số dương có hai căn bậc chẵn đối nhau |
    | \(\sqrt9\) | \(3\) | Kí hiệu căn bậc hai **lấy giá trị không âm** |
    | \(\sqrt{-9}\) | Không có số thực | Số âm không có căn bậc chẵn thực |

    Đó là lí do \(\sqrt{x^2}=|x|\), không luôn bằng \(x\). Ví dụ \(x=-5\) thì \(\sqrt{(-5)^2}=\sqrt{25}=5\ne-5\). Với căn bậc lẻ, \(\sqrt[3]{x^3}=x\) cho cả \(x<0\).

    **Một hình có sẵn giúp đọc liên hệ:** Quan sát đồ thị \(2^x\) ở dưới. Điểm có hoành độ \(x=\frac12\) ứng với tung độ \(\sqrt2\): vì \((2^{1/2})^2=2\). Các điểm \(x=-1,0,1\) lần lượt ứng với \(\frac12,1,2\). Hình diễn tả cùng quy luật khi ta mở rộng tập hợp các số mũ, chứ không chứng minh được mọi công thức chỉ bằng đo hình.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVI-B18-01_R00.svg" alt="Đồ thị lũy thừa 2 mũ x có các điểm âm, không, một phần hai và dương đúng giá trị"><figcaption><strong>Hướng dẫn đọc:</strong> xem điểm màu cam tại \(x=\frac12\) có tung độ \(\sqrt2\); xem các mốc \((-2,\frac14)\), \((-1,\frac12)\), \((0,1)\), \((1,2)\), \((2,4)\). Cơ số 2 dương và lớn hơn 1, nên giá trị tăng khi số mũ tăng.</figcaption></figure>

    **Giới hạn áp dụng quan trọng:** SGK định nghĩa lũy thừa số mũ hữu tỉ tổng quát trong bài này với **cơ số \(a>0\)**. Căn bậc lẻ của số âm vẫn có nghĩa, ví dụ \(\sqrt[3]{-8}=-2\); nhưng không được từ trường hợp căn bậc lẻ suy ra một **cơ số âm** có lũy thừa với **mọi** số mũ thực. Nếu bỏ điều kiện \(a>0\), các phép biến đổi nâng lũy thừa thành lũy thừa khác có thể sai hoặc vô nghĩa.

    **Vận dụng.** Tính \(27^{2/3}\), \(\left(\frac1{16}\right)^{-3/4}\) và giải thích tại sao \(\sqrt{x^2}=|x|\).

    ??? question "Đối chiếu"

        **Lời giải:** \(27^{2/3}=(\sqrt[3]{27})^2=3^2=9\); \((\frac1{16})^{-3/4}=(16)^{3/4}=(\sqrt[4]{16})^3=2^3=8\). \(\sqrt{x^2}\) là căn không âm của số \(x^2\ge0\), nên bằng \(|x|\).

    ??? tip "Kiểm lỗi"

        Nếu được \(-5\) từ \(\sqrt{(-5)^2}\), em đang dùng căn như phép “triệt tiêu bình phương” mà quên điều kiện căn số học không âm. Với số mũ phân số, luôn ghi **cơ số dương** trước khi dùng luật.

    ### 1.3. Lũy thừa với số mũ thực

    **Vì sao còn phải định nghĩa \(a^{\sqrt2}\)?** \(\sqrt2\) không phải phân số, nên công thức số mũ hữu tỉ chưa áp trực tiếp. Ta có thể chọn các phân số ngày càng gần \(\sqrt2\): \(1{,}4;1{,}41;1{,}414;1{,}4142;\ldots\). Với \(a>0\), các giá trị \(a^{1{,}4}\), \(a^{1{,}41}\), ... tiến đến **một giá trị dương xác định**, không phụ thuộc vào cách chọn dãy phân số xấp xỉ. Giá trị đó là \(a^{\sqrt2}\). Chính Chương V về **giới hạn dãy số** giúp ta hiểu cách tạo nghĩa cho số mũ vô tỉ.

    Sự mở rộng này giữ nguyên các quy tắc với \(a,b>0\) và \(x,y\in\mathbb R\): nhân cùng cơ số thì cộng số mũ, chia cùng cơ số thì trừ số mũ, lũy thừa của lũy thừa thì nhân hai số mũ, và các quy tắc cho tích/thương cơ số dương. Nhưng không được tự phân phối lũy thừa qua **phép cộng**: \((a+b)^x\ne a^x+b^x\) nói chung.

    **So sánh cần để ý cơ số:** Nếu \(a>1\), từ \(x<y\) suy \(a^x<a^y\). Nếu \(0<a<1\), từ \(x<y\) lại suy \(a^x>a^y\). Khi so sánh \(8^{\sqrt3}\) và \(4^{2\sqrt3}\), đưa cả hai về cơ số \(2>1\): \(8^{\sqrt3}=2^{3\sqrt3}\), \(4^{2\sqrt3}=2^{4\sqrt3}\), nên biểu thức đầu nhỏ hơn biểu thức sau. Không so sánh riêng hai cơ số khi hai số mũ khác nhau.

    **Máy tính cho giá trị gần đúng**, ví dụ \(2^{\sqrt2}\) không thể ghi bằng một số thập phân hữu hạn chính xác. Ta nhập đầy đủ số mũ có dấu ngoặc (hoặc phím lũy thừa tùy máy), rồi làm tròn theo yêu cầu. Hãy phân biệt kí hiệu \(=\) với \(\approx\): \(8^{2/3}=4\) chính xác, còn \(2^{\sqrt2}\approx2{,}6651\) khi làm tròn bốn chữ số thập phân.

    **Mô hình lãi kép:** Gửi \(P\) triệu đồng, lãi suất \(r\) mỗi kì, sau \(N\) kì nếu lãi nhập gốc ta có \(A=P(1+r)^N\). Nếu chỉ cập nhật sau từng kì trọn vẹn, \(N\) là số nguyên không âm; dùng \(N\) thực cần một **giả thiết mô hình bổ sung**, không tự coi mọi khoản gửi thực tế được tính theo số mũ không nguyên. Chính cách lũy thừa mô tả tăng trưởng theo tỉ lệ giúp môn học có ứng dụng.

    **Vận dụng.** Không dùng máy tính, so sánh \(8^{\sqrt3}\) và \(4^{2\sqrt3}\). Với máy tính, ước lượng \(2^{\sqrt2}\) đến bốn chữ số sau dấu phẩy; phần nào là chính xác, phần nào gần đúng?

    ??? question "Đối chiếu"

        **Lời giải:** \(8^{\sqrt3}=2^{3\sqrt3}\), \(4^{2\sqrt3}=2^{4\sqrt3}\). Vì \(3\sqrt3<4\sqrt3\) và \(2>1\), nên \(8^{\sqrt3}<4^{2\sqrt3}\) là kết luận **chính xác**. Máy tính cho \(2^{\sqrt2}\approx2{,}6651\): kết quả thập phân là **gần đúng** sau làm tròn.

    ??? tip "Kiểm lỗi"

        Không so sánh hai biểu thức có cả cơ số lẫn số mũ khác nhau chỉ bằng cách nhìn cơ số. Đưa về cùng cơ số và kiểm cơ số đó **lớn hơn 1 hay nhỏ hơn 1** trước khi so số mũ.

=== "Kiến thức SGK"

    ### 2.1. Lũy thừa với số mũ nguyên

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Lũy thừa với số mũ nguyên</strong><p>Với số nguyên dương \(n\) và \(a\in\mathbb R\), \(a^n\) là tích \(n\) thừa số đều bằng \(a\). Với <strong>\(a\ne0\)</strong>, \(a^0=1\) và \(a^{-n}=1/a^n\). \(a\) là cơ số, \(n\) là số mũ. \(0^n=0\) nếu \(n>0\); \(0^0\) và \(0^{-n}\) không xác định trong bài này.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Các phép tính lũy thừa với số mũ nguyên</strong><p>Với \(a,b\ne0\) và \(m,n\in\mathbb Z\): \(a^ma^n=a^{m+n}\); \(\dfrac{a^m}{a^n}=a^{m-n}\); \((a^m)^n=a^{mn}\); \((ab)^n=a^nb^n\); \(\left(\dfrac ab\right)^n=\dfrac{a^n}{b^n}\). Quy tắc chỉ đúng khi các biểu thức trong đó có nghĩa.</p></div>

    **Phương pháp đọc số mũ âm:** \(a^{-n}=\dfrac1{a^n}\) là **nghịch đảo**, không phải \(-a^n\). Ví dụ \((-2)^{-3}=\frac1{(-2)^3}=-\frac18\), còn \(2^{-3}=\frac18\).

    **So sánh với cơ số dương:** \(a>1\) thì \(m>n\Leftrightarrow a^m>a^n\); \(0<a<1\) thì \(m>n\Leftrightarrow a^m<a^n\). Với cơ số âm, các mệnh đề đơn điệu này **không tự áp dụng**.

    **Ứng dụng kí hiệu khoa học:** \(c\cdot10^k\), với \(1\le|c|<10\), \(k\in\mathbb Z\), dùng để ghi số liệu rất lớn/nhỏ (ở bài SGK xét số dương \(c>0\)). Ví dụ \(0{,}0000042=4{,}2\cdot10^{-6}\).

    ### 2.2. Lũy thừa với số mũ hữu tỉ

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Căn bậc \(n\) của một số thực</strong><p>Cho \(a\in\mathbb R\), \(n\in\mathbb N^*\). Số thực \(b\) là <strong>căn bậc \(n\)</strong> của \(a\) nếu \(b^n=a\). Khi \(n\) lẻ, mỗi \(a\) có một căn bậc \(n\) thực. Khi \(n\) chẵn, \(a>0\) có hai căn đối nhau; \(\sqrt[n]a\) chỉ <strong>căn số học không âm</strong>. Nếu \(a<0\), không có căn bậc chẵn thực; căn bậc \(n\) của 0 là 0.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Căn bậc \(n\) (khi các biểu thức có nghĩa)</strong><p>Với cùng bậc \(n\), \(\sqrt[n]a\sqrt[n]b=\sqrt[n]{ab}\); \(\dfrac{\sqrt[n]a}{\sqrt[n]b}=\sqrt[n]{a/b}\) khi mẫu khác 0 và mọi căn xác định. Với lũy thừa, \(\sqrt[n]{a^n}=a\) nếu \(n\) lẻ, còn \(\sqrt[n]{a^n}=|a|\) nếu \(n\) chẵn. Không bỏ điều kiện dấu ở căn bậc chẵn.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Lũy thừa với số mũ hữu tỉ</strong><p>Với <strong>\(a>0\)</strong>, số hữu tỉ \(r=\dfrac mn\), \(m\in\mathbb Z\), \(n\in\mathbb N^*\), đặt \(a^r=a^{m/n}=\sqrt[n]{a^m}=(\sqrt[n]a)^m\). Giá trị không phụ thuộc cách biểu diễn cùng một số hữu tỉ \(r\). Các tính chất lũy thừa mũ nguyên mở rộng cho trường hợp này khi cơ số dương.</p></div>

    <div class="thpt-r4-key-formula" role="note"><strong>Công thức — Liên hệ căn và số mũ hữu tỉ</strong><p>Với \(a>0,\ n\in\mathbb N^*,\ m\in\mathbb Z\): \(\displaystyle a^{m/n}=\sqrt[n]{a^m}=(\sqrt[n]a)^m\). Đặc biệt \(a^{1/2}=\sqrt a\), \(a^{1/3}=\sqrt[3]a\), \(a^{-1/2}=1/\sqrt a\).</p></div>

    **Hạn chế:** Căn bậc lẻ của số âm có nghĩa, nhưng không tự suy quy tắc lũy thừa với **mọi số mũ thực** cho cơ số âm. Khi biến đổi các số mũ phân số theo định nghĩa chung của SGK, phải ghi \(a>0\). \(\sqrt{x^2}=|x|\).

    ### 2.3. Lũy thừa với số mũ thực

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Lũy thừa số mũ vô tỉ và số mũ thực</strong><p>Cho <strong>\(a>0\)</strong>, số vô tỉ \(\alpha\) và một dãy số hữu tỉ \(r_n\to\alpha\). Khi đó dãy \(a^{r_n}\) có một giới hạn dương, <strong>không phụ thuộc dãy hữu tỉ xấp xỉ</strong> đã chọn; giới hạn đó gọi là \(a^\alpha\). Cùng với số mũ hữu tỉ đã định nghĩa, ta có \(a^x\) cho mọi \(x\in\mathbb R\) khi \(a>0\).</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Lũy thừa với số mũ thực</strong><p>Với \(a,b>0\), \(x,y\in\mathbb R\): \(a^xa^y=a^{x+y}\), \(a^x/a^y=a^{x-y}\), \((a^x)^y=a^{xy}\), \((ab)^x=a^xb^x\), \((a/b)^x=a^x/b^x\). <strong>Điều kiện cơ số dương là bắt buộc</strong> cho bộ tính chất số mũ thực tổng quát.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — So sánh lũy thừa cùng cơ số dương</strong><p>Nếu \(a>1\), từ \(x<y\) suy \(a^x<a^y\). Nếu \(0<a<1\), từ \(x<y\) suy \(a^x>a^y\). Nếu \(a=1\), mọi \(1^x=1\); không có chiều bất đẳng thức nghiêm ngặt.</p></div>

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVI-B18-01_R00.svg" alt="Đồ thị hai mũ x với các điểm x bằng âm hai âm một không một phần hai một và hai"><figcaption><strong>Tra hình:</strong> biểu diễn \(2^{-2}=\frac14\), \(2^{-1}=\frac12\), \(2^0=1\), \(2^{1/2}=\sqrt2\), \(2^1=2\), \(2^2=4\). Đây là **minh họa** cho cơ số \(2>1\), không đại diện cho quan hệ so sánh khi \(0<a<1\).</figcaption></figure>

    **Cách chọn phép biến đổi:** Muốn tính chính xác, đưa các lũy thừa về cùng cơ số và dùng quy tắc số mũ khi cơ số dương. Muốn so sánh, trước tiên xét cơ số lớn hơn 1 hay nằm giữa 0 và 1. Muốn tính gần đúng \(a^\alpha\) với \(\alpha\) vô tỉ, dùng máy tính và ghi dấu \(\approx\) kèm mức làm tròn.

    | Dạng | Kết quả và điều kiện |
    | :-- | :-- |
    | Giá trị chính xác | \(27^{2/3}=9\), \(16^{3/4}=8\) |
    | Giá trị gần đúng | \(2^{\sqrt2}\approx2{,}6651\) (4 chữ số thập phân) |
    | Lãi kép từng kì | \(A=P(1+r)^N\), \(1+r>0\), \(N\) là số kì trọn vẹn |

    **Kiểm máy tính:** Ví dụ \(2^{\sqrt2}\) cần nhập cơ số 2 và số mũ \(\sqrt2\) trong cùng một phép lũy thừa; số thập phân trên màn hình là kết quả gần đúng. Cần đọc đúng dấu âm và dấu ngoặc với cơ số âm trong **bài số mũ nguyên**, không lạm dụng máy để “hợp thức hóa” biểu thức cơ số âm mũ vô tỉ.
