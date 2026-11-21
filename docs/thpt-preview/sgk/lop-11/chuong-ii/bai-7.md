# Bài 7. Cấp số nhân

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG II</p>
<p class="thpt-r4-lead">Nhận ra quy luật nhân theo tỉ lệ, hiểu công bội và mũ n−1, chứng minh công thức tổng và áp dụng với điều kiện đúng.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương II</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    Ở Bài 6, nếu mỗi tháng thêm cùng **một lượng**, ta dùng cấp số cộng. Nhưng với một khoản tiền giả định tăng \(5\%\) mỗi kỳ, giá trị mới được tính theo **toàn bộ giá trị trước kỳ**: \(100\to105\to110{,}25\), chứ không phải \(100\to105\to110\). Ở đây, phép biến đổi lặp lại không phải cộng \(5\), mà là **nhân với \(1{,}05\)**. Đó là bản chất của **cấp số nhân**. Muốn học chắc, hãy luôn hỏi: “đại lượng nào được giữ không đổi — hiệu hay tỉ số?”

    ### 1.1. Công bội là phép nhân cố định qua từng bước

    Một cấp số nhân thỏa \(u_{n+1}=qu_n\) với một số thực \(q\) không đổi. Nếu \(q>1\) và số đầu dương, các giá trị tăng; với \(0<q<1\) **và số đầu dương**, các giá trị giảm dần về phía \(0\), còn khi số đầu âm thì chúng tăng dần về phía \(0\); nếu \(q<0\), dấu có thể **luân phiên**, nên không thể kết luận dãy tăng chỉ vì giá trị tuyệt đối lớn dần. Đặc biệt \(q=0\) vẫn tạo một cấp số nhân: sau số hạng đầu, các số hạng đều \(0\). Không được dùng thương \(u_{n+1}/u_n\) khi số chia bằng \(0\).

    **Vận dụng.** Cho \(u_n=4(-3)^{n-1}\), \(n\ge1\). Tìm \(u_1,u_2,u_3,u_4\), công bội \(q\) và cho biết có thể gọi dãy này tăng nghiêm ngặt hay không.

    <span data-ped-first-try="1" data-outcome-id="G11-B07-GP-DEFINITION" data-thpt-first-try-id="THPT-G11-B07-TRY01" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(u_1=4,u_2=-12,u_3=36,u_4=-108\). Vì \(u_{n+1}=-3u_n\) với mọi \(n\), đây là cấp số nhân có \(q=-3\). Dãy **không tăng nghiêm ngặt**, bởi \(u_1>u_2\) nhưng \(u_2<u_3\). Khi \(q<0\), dấu của số hạng luân phiên.

    <span data-thpt-help-id="HELP-G11-B07-TRY01" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em ghi \(q=3\) vì chỉ nhìn giá trị tuyệt đối, hoặc thấy \(|u_n|\) lớn dần rồi kết luận \(u_n\) tăng.

        **Tự sửa:** Kiểm \(u_{n+1}=qu_n\) **cả dấu** trước khi kết luận. Ôn mục 2.1; luyện Core dãy \(5,15,45,135,\ldots\) và Practice \(u_n=7(-2)^{n-1}\) tại [Bài 7 – Luyện tập](../luyen-tap/).

    ### 1.2. Vì sao số mũ ở vị trí thứ \(n\) là \(n-1\)?

    Từ \(u_1\) đến \(u_2\) phải nhân \(q\) một lần; đến \(u_3\) nhân hai lần; đến \(u_n\) nhân **\(n-1\) lần**. Vậy \(u_n=u_1q^{n-1}\). Nếu lấy mũ \(n\), em đã nhân thêm một lần trước khi tính số hạng đầu. Quy luật này cũng giúp thấy vì sao hai bài toán “sau 5 kỳ” và “số hạng thứ 5 kể từ kỳ đầu” không nhất thiết dùng cùng số mũ.

    **Vận dụng.** Cấp số nhân có \(u_1=5,q=2\). Tìm \(u_5\) mà không viết hết mọi số hạng.

    <span data-ped-first-try="2" data-outcome-id="G11-B07-GP-NTH" data-thpt-first-try-id="THPT-G11-B07-TRY02" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(u_5=u_1q^{5-1}=5\cdot2^4=80\). Có bốn bước nhân: \(5\to10\to20\to40\to80\). Thử \(n=1\) trong công thức được đúng \(u_1=5\).

    <span data-thpt-help-id="HELP-G11-B07-TRY02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em tính \(5\cdot2^5=160\) hoặc dùng dạng \(u_1+(n-1)d\) của cấp số cộng.

        **Tự sửa:** Đếm số mũ từ \(n=1\) bằng \(0\); ôn mục 2.2, luyện Core \(u_1=4,q=2\) tìm \(u_6\) và Practice tìm \(q,u_1\) từ hai vị trí của cấp số nhân tại [Bài 7 – Luyện tập](../luyen-tap/).

    ### 1.3. Ba số hạng liên tiếp và điều kiện về dấu

    Nếu \(a,b,c\) liên tiếp trong một cấp số nhân, thì \(b=qa,\ c=qb=q^2a\). Suy ra \(b^2=ac\). Với ba số **dương**, điều đó đưa về trung bình nhân; nhưng với số hạng âm cần xét dấu của \(q\). Đẳng thức \(b^2=ac\) của một bộ ba **chưa đủ** để kết luận cả dãy vô hạn là cấp số nhân và có thể gây nhầm nếu số hạng bằng \(0\).

    **Vận dụng.** Cho ba số liên tiếp \(-2,x,-18\) của một cấp số nhân có **công bội dương**. Tìm \(x\), chứng minh dấu của kết quả phù hợp điều kiện.

    <span data-ped-first-try="3" data-outcome-id="G11-B07-GP-THREE-TERMS" data-thpt-first-try-id="THPT-G11-B07-TRY03" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Điều kiện ba số hạng cho \(x^2=(-2)(-18)=36\), nên \(x=\pm6\). Nhưng \(q>0\) và \(u_1=-2\) nên \(u_2=x\) cũng âm; do đó **\(x=-6\)**. Kiểm \(q=(-6)/(-2)=3>0\) và \((-6)\cdot3=-18\). Không chọn \(x=+6\) khi đề quy định \(q>0\).

    <span data-thpt-help-id="HELP-G11-B07-TRY03" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em lấy ngay căn dương \(x=6\) hoặc quên điều kiện công bội \(q>0\).

        **Tự sửa:** Tìm hai khả năng từ \(x^2=ac\), rồi **thử tỉ số liên tiếp với dấu**. Ôn mục 2.2; luyện Core ba số hạng dương \(2,x,18\) và Practice \(9,x,1\) có điều kiện dương ở [Bài 7 – Luyện tập](../luyen-tap/).

    ### 1.4. Trừ hai tổng để thấy công thức tổng cấp số nhân

    Muốn tính \(S_n=u_1+u_1q+\cdots+u_1q^{n-1}\), hãy nhân toàn bộ tổng với \(q\) rồi lấy \(S_n-qS_n\). Các số hạng giữa triệt tiêu, để lại **đầu và cuối**: \((1-q)S_n=u_1(1-q^n)\). Chỉ được chia cho \(1-q\) nếu \(q\ne1\). Nếu \(q=1\), tổng có \(n\) số hạng đều bằng \(u_1\), nên \(S_n=nu_1\). Đây là hai trường hợp của cùng ý tưởng, không phải hai công thức học thuộc tùy ý.

    **Vận dụng.** Tính \(S_4\) của cấp số nhân \(u_1=3,q=-2\) bằng cả cách liệt kê và công thức tổng. Vì sao tổng có thể âm?

    <span data-ped-first-try="4" data-outcome-id="G11-B07-GP-SUM" data-thpt-first-try-id="THPT-G11-B07-TRY04" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Bốn số đầu \(3,-6,12,-24\), nên \(S_4=3-6+12-24=-15\). Công thức cho \(S_4=\frac{3[1-(-2)^4]}{1-(-2)}=3(1-16)/3=-15\). Tổng âm vì số hạng âm \(-24\) có độ lớn vượt những phần trước, dù số hạng đầu dương.

    <span data-thpt-help-id="HELP-G11-B07-TRY04" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em bỏ dấu âm trong \((-2)^4\), hoặc mặc định tổng của cấp số nhân phải dương.

        **Tự sửa:** Liệt kê ít nhất hai số đầu để giữ đúng dấu; ôn mục 2.3, luyện Core tổng \(u_1=3,q=2\) và Practice tổng với \(q=-2\) ở [Bài 7 – Luyện tập](../luyen-tap/).

    ### 1.5. Không được chia cho \(1-q\) khi \(q=1\)

    Với \(q=1\), dãy hằng \(u_1,u_1,u_1,\ldots\) vẫn là cấp số nhân. Mẫu \(1-q\) của công thức tổng thông thường bằng \(0\), nên cách an toàn là quay lại định nghĩa tổng. Với \(q=0\), dãy có số đầu \(u_1\), các số sau \(0\); công thức tổng khi \(q\ne1\) vẫn cho \(S_n=u_1\) với mọi \(n\ge1\).

    **Vận dụng.** Cấp số nhân \(u_1=6,q=1\). Tính \(S_7\), rồi giải thích vì sao không thể dùng công thức có mẫu \(1-q\).

    <span data-ped-first-try="5" data-outcome-id="G11-B07-GP-SUM" data-thpt-first-try-id="THPT-G11-B07-TRY05" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Mọi số hạng đều bằng \(6\), nên \(S_7=7\cdot6=42\). Công thức \(\frac{u_1(1-q^n)}{1-q}\) không được thế \(q=1\) vì cả tử và mẫu đều bằng \(0\), không phải một thương xác định.

    <span data-thpt-help-id="HELP-G11-B07-TRY05" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em kết luận tổng vô nghiệm, hoặc bấm \(0/0\) khi \(q=1\).

        **Tự sửa:** Đặt riêng trường hợp \(q=1\), dùng \(S_n=nu_1\). Ôn mục 2.3 và luyện Practice cấp số nhân \(u_1=8,q=1\) tính \(S_9\) tại [Bài 7 – Luyện tập](../luyen-tap/).

    ### 1.6. Ứng dụng: tổng của nhiều kỳ tăng trưởng

    Một quỹ giả định phân bổ \(150\) triệu đồng ở **năm đầu**, rồi mức phân bổ mỗi năm tăng \(4\%\) so với năm trước. Số tiền **năm thứ ba** khác tổng **ba năm đầu**; hãy phân biệt \(u_3\) và \(S_3\). Bài toán chỉ là mô hình cố định tỉ lệ, không khẳng định ngân sách thực tế.

    **Vận dụng.** Với \(u_1=150\) triệu đồng, \(q=1{,}04\), hãy tính \(u_3\) và \(S_3\). Cho biết đã có mấy lần tăng trước năm thứ ba.

    <span data-ped-first-try="6" data-outcome-id="G11-B07-GP-APPLICATION" data-thpt-first-try-id="THPT-G11-B07-TRY06" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(u_3=150(1{,}04)^2=162{,}24\) triệu đồng (hai lần tăng). Tổng ba năm:
        \[
        S_3=150+150(1{,}04)+150(1{,}04)^2
            =150+156+162{,}24=468{,}24
        \]
        triệu đồng. Dùng công thức cũng được \(S_3=\frac{150[1-(1{,}04)^3]}{1-1{,}04}=468{,}24\).

    <span data-thpt-help-id="HELP-G11-B07-TRY06" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em trả lời \(162{,}24\) cho cả tổng ba năm, hoặc dùng số mũ \(3\) cho năm thứ ba.

        **Tự sửa:** Ghi riêng \(u_n\) (một năm) và \(S_n\) (tổng từ năm 1 đến n); đánh dấu **hai khoảng tăng** đến năm thứ ba. Ôn mục 2.2–2.3, luyện Practice mô hình nhân đôi số lượng theo giờ ở [Bài 7 – Luyện tập](../luyen-tap/).

=== "Kiến thức SGK"

    ### 2.1. Định nghĩa cấp số nhân và công bội

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa:</strong> Một dãy \((u_n)\), hữu hạn hoặc vô hạn, gọi là <em>cấp số nhân</em> nếu có số \(q\) không đổi sao cho
    \[
       u_{n+1}=q\,u_n
    \]
    với mọi cặp số hạng liên tiếp được xác định. Số \(q\) được gọi là <em>công bội</em>.</div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Nhận biết và điều kiện:</strong> Nếu \(u_n\ne0\), có thể kiểm \(u_{n+1}/u_n=q\) không đổi. **Không chia khi \(u_n=0\)**; hãy dùng phương trình nhân \(u_{n+1}=qu_n\). Công bội có thể âm, \(0\), dương hoặc \(1\). Với \(q=0\), từ \(u_2\) trở đi dãy có các số hạng \(0\); khi \(q<0\), dấu luân phiên nếu \(u_1\ne0\).</div>

    **Phân biệt với Bài 6:** Cấp số cộng có hiệu liên tiếp \(d\) cố định, cấp số nhân có hệ số nhân \(q\) cố định. Không có quy tắc nói rằng cứ một dãy tăng là cấp số nhân.

    ### 2.2. Công thức số hạng tổng quát và hệ quả ba số hạng

    Từ \(u_1\) đến \(u_n\) ta thực hiện \(n-1\) phép nhân với \(q\), nên

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Số hạng thứ n:</strong>
    \[
       u_n=u_1q^{\,n-1},\qquad n\in\mathbb N^*.
    \]
    </div>

    **Trường hợp công bội bằng 0:** Khi \(q=0\), hiểu riêng \(u_1\) là số hạng đã cho và \(u_n=0\) với \(n\ge2\); không cần tính biểu thức không xác định \(0^0\) tại \(n=1\). Công thức \(u_n=u_1q^{n-1}\) áp dụng thông thường với \(q\ne0\); với \(q=0\) dùng trực tiếp hệ thức truy hồi.

    **Hệ quả ba số hạng:** Với các số hạng liên tiếp tồn tại \(u_{n-1},u_n,u_{n+1}\) (\(n\ge2\)),
    \[
       u_n^2=u_{n-1}u_{n+1}.
    \]
    Thật vậy, nếu \(u_n=qu_{n-1}\) và \(u_{n+1}=qu_n\) thì hai vế đều bằng \(q^2u_{n-1}^2\). Khi dùng ngược để xác định ba số hạng, phải **xem dấu và các số hạng bằng \(0\)**; một đẳng thức đúng tại một bộ ba không tự chứng minh toàn bộ dãy là cấp số nhân.

    ### 2.3. Tổng \(n\) số hạng đầu của một cấp số nhân

    Đặt \(S_n=u_1+u_2+\cdots+u_n\). Khi \(q\ne1\),
    \[
    \begin{aligned}
      S_n&=u_1+u_1q+\cdots+u_1q^{n-1},\\
      qS_n&=u_1q+u_1q^2+\cdots+u_1q^n.
    \end{aligned}
    \]
    Trừ hai hàng được \((1-q)S_n=u_1(1-q^n)\). Chỉ lúc này mới chia cho \(1-q\).

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tổng hữu hạn:</strong>
    \[
      S_n=
      \begin{cases}
         \dfrac{u_1(1-q^n)}{1-q},&q\ne1,\\
         nu_1,&q=1,
      \end{cases}\qquad n\in\mathbb N^*.
    \]
    </div>

    **Trường hợp đặc biệt:** Nếu \(q=0\), dãy có dạng \(u_1,0,0,\ldots\) và \(S_n=u_1\). Nếu \(q=-1\), dấu luân phiên; tổng \(S_n=0\) khi \(n\) chẵn, bằng \(u_1\) khi \(n\) lẻ. Không suy từ \(u_1>0\) rằng mọi \(u_n\) hay mọi \(S_n\) đều dương.

    **Bảng đọc số hạng/tổng:**

    | \(n\) | 1 | 2 | 3 | 4 |
    | --- | ---: | ---: | ---: | ---: |
    | \(u_n\) khi \(u_1=2,q=3\) | 2 | 6 | 18 | 54 |
    | \(S_n\) tương ứng | 2 | 8 | 26 | 80 |

    **Đọc bảng:** Cột \(n=4\) có \(u_4=54\) nhưng \(S_4=80\). Một số hạng và tổng các số hạng là hai đại lượng khác nhau.

=== "Ví dụ"

    Mỗi Ví dụ có đề riêng, nêu lý do chọn phương pháp, giải đầy đủ và kiểm kết quả/điều kiện.

    ### 3.1. Chứng minh một dãy là cấp số nhân

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Với \(u_n=5\cdot2^{n-1}\), \(n\ge1\), chứng minh dãy là cấp số nhân, tìm \(u_1,q\) và \(u_4\).</p>
    <p><strong>Phân tích:</strong> Phải chứng minh hệ thức nhân \(u_{n+1}=qu_n\) đúng với mọi \(n\).</p>
    <p><strong>Lời giải:</strong> \(u_{n+1}=5\cdot2^n=2\cdot[5\cdot2^{n-1}]=2u_n\). Vì vậy \(q=2,u_1=5\), và \(u_4=5\cdot2^3=40\).</p>
    <p><strong>Kiểm lại:</strong> \(5,10,20,40\) có cùng tỉ số \(2\) giữa các số liên tiếp.</p></div>

    ### 3.2. Hai công bội có thể thỏa dữ kiện cách nhau hai bước

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Cấp số nhân thực có các số hạng khác \(0\), biết \(u_2=12,u_4=108\). Tìm tất cả cặp \(q,u_1\) có thể xảy ra.</p>
    <p><strong>Phân tích:</strong> Từ \(u_2\) đến \(u_4\) có **hai** phép nhân \(q\), nên \(u_4/u_2=q^2\), cần xét cả hai dấu của căn.</p>
    <p><strong>Lời giải:</strong> \(q^2=108/12=9\), nên \(q=3\) hoặc \(q=-3\). Nếu \(q=3\), \(u_1=u_2/q=4\). Nếu \(q=-3\), \(u_1=-4\). Hai cặp \((q,u_1)=(3,4)\) và \((-3,-4)\) đều hợp lệ.</p>
    <p><strong>Kiểm lại:</strong> Với \(q=3\): \(4,12,36,108\). Với \(q=-3\): \(-4,12,-36,108\), đều đúng hai dữ kiện.</p></div>

    ### 3.3. Công bội bằng không không làm mất cấp số nhân

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Cho \(u_1=7,q=0\). Viết năm số đầu và tính \(S_5\).</p>
    <p><strong>Phân tích:</strong> Dùng định nghĩa \(u_{n+1}=0\cdot u_n\) thay vì chia cho \(u_n\), vì từ số hạng thứ hai mẫu đã bằng \(0\).</p>
    <p><strong>Lời giải:</strong> Dãy là \(7,0,0,0,0,\ldots\); \(S_5=7\). Công thức tổng khi \(q\ne1\) cũng cho \(7(1-0^5)/(1-0)=7\).</p>
    <p><strong>Kiểm lại:</strong> Mọi số hạng từ \(u_2\) đều bằng \(0\), nên không có phần cộng thêm vào \(u_1\).</p></div>

    ### 3.4. Tổng cấp số nhân với công bội âm

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Cấp số nhân có \(u_1=4,q=-2\). Tính \(S_5\).</p>
    <p><strong>Phân tích:</strong> Số hạng đổi dấu qua mỗi bước; dùng công thức với dấu ngoặc để không mất dấu âm.</p>
    <p><strong>Lời giải:</strong> \(S_5=\dfrac{4[1-(-2)^5]}{1-(-2)}=\dfrac{4(1+32)}3=44\).</p>
    <p><strong>Kiểm lại:</strong> \(4-8+16-32+64=44\).</p></div>

    ### 3.5. Kiểm hệ thức ba số hạng khi công bội âm

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Ba số liên tiếp \(-3,6,-12\) có tạo thành một cấp số nhân không? Hãy kiểm cả hệ quả ba số hạng và công bội.</p>
    <p><strong>Phân tích:</strong> Đẳng thức \(b^2=ac\) là điều kiện cần; ở bộ ba không có số hạng \(0\), kiểm tiếp tỉ số để xác định công bội.</p>
    <p><strong>Lời giải:</strong> \(6^2=36=(-3)(-12)\). Hai tỉ số \(6/(-3)=-2\), \((-12)/6=-2\) bằng nhau. Vậy đây là ba số liên tiếp của cấp số nhân với \(q=-2\).</p>
    <p><strong>Kiểm lại:</strong> \(u_2=(-2)u_1=6\), \(u_3=(-2)u_2=-12\).</p></div>

    ### 3.6. Tổng nhiều kỳ của mô hình tăng trưởng

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Theo một mô hình giả định, ngân sách phân bổ năm đầu \(120\) triệu đồng và tăng \(10\%\) mỗi năm so với năm trước. Tìm mức phân bổ năm thứ tư và tổng bốn năm.</p>
    <p><strong>Phân tích:</strong> Tăng \(10\%\) nghĩa là nhân \(q=1{,}1\) ở mỗi năm. Số hạng thứ tư và tổng bốn số đầu là hai đại lượng khác nhau.</p>
    <p><strong>Lời giải:</strong> \(u_4=120(1{,}1)^3=159{,}72\) triệu đồng; \(S_4=\frac{120[1-(1{,}1)^4]}{1-1{,}1}=556{,}92\) triệu đồng.</p>
    <p><strong>Kiểm lại:</strong> \(u_1=120,u_2=132,u_3=145{,}2,u_4=159{,}72\); cộng bốn số được \(556{,}92\). Mô hình không tự dự báo được dữ liệu thực tế nếu tỉ lệ thay đổi.</p></div>

=== "Lỗi thường gặp"

    Khi sai một Vận dụng, hãy mở Kiểm lỗi của câu đó. Các lỗi dưới đây liên quan đến nguyên tắc chung và nên được ôn lại trước khi làm Practice.

    <span data-thpt-help-id="HELP-G11-B07-01" hidden></span>

    ??? tip "4.1. Nhầm công bội với công sai hoặc bỏ dấu âm"

        **Dấu hiệu:** Dùng hiệu liên tiếp để kết luận cấp số nhân, hoặc lấy \(|q|\) thay cho \(q\) khi \(q<0\).

        **Vì sao sai:** Cấp số nhân có phép nhân không đổi. Công bội âm làm đổi dấu số hạng và có thể khiến dãy không đơn điệu.

        **Tự sửa:** Ôn mục 2.1, kiểm \(u_{n+1}=qu_n\) với dấu nguyên vẹn; luyện Core \(5,15,45,135\) rồi Practice \(7(-2)^{n-1}\) ở [Bài 7 – Luyện tập](../luyen-tap/).

    <span data-thpt-help-id="HELP-G11-B07-02" hidden></span>

    ??? tip "4.2. Dùng thương khi một số hạng bằng không"

        **Dấu hiệu:** Với \(3,0,0,\ldots\), em tính \(q=0/0\) ở cặp sau rồi nói dãy không phải cấp số nhân.

        **Vì sao sai:** Định nghĩa gốc là **nhân** \(u_{n+1}=qu_n\), không phải chia bắt buộc. Công bội \(q=0\) vẫn hợp lệ.

        **Tự sửa:** Ôn mục 2.1, dùng \(u_{n+1}=0u_n\) và giải lại Practice dãy \(3,0,0,\ldots\) ở [Bài 7 – Luyện tập](../luyen-tap/).

    <span data-thpt-help-id="HELP-G11-B07-03" hidden></span>

    ??? tip "4.3. Nhầm \(n-1\) và số bước tăng trưởng"

        **Dấu hiệu:** Tính số hạng thứ năm là \(u_1q^5\) hoặc lấy tăng \(10\%\) thành cộng cố định \(10\) mỗi năm.

        **Vì sao sai:** Trong cấp số nhân, mỗi kỳ nhân với **giá trị kỳ trước**; từ vị trí \(1\) đến \(n\) có \(n-1\) phép nhân.

        **Tự sửa:** Ôn mục 2.2, liệt kê ba bước đầu và giải Core \(u_1=4,q=2\) tìm \(u_6\) ở [Bài 7 – Luyện tập](../luyen-tap/).

    <span data-thpt-help-id="HELP-G11-B07-04" hidden></span>

    ??? tip "4.4. Chia cho \(1-q=0\) hoặc tính \(S_n\) thành \(u_n\)"

        **Dấu hiệu:** Thế \(q=1\) vào công thức có mẫu \(1-q\), hoặc trả số hạng cuối khi đề hỏi tổng.

        **Vì sao sai:** Công thức thương chỉ được dùng khi \(q\ne1\). Với \(q=1\), mọi số hạng bằng \(u_1\), tổng bằng \(nu_1\).

        **Tự sửa:** Ôn mục 2.3 và Ví dụ 3.3–3.4; luyện Practice \(u_1=8,q=1\) tính \(S_9\) rồi \(u_1=2,q=-2\) tính \(S_5\) ở [Luyện tập Bài 7](../luyen-tap/).

    <span data-thpt-help-id="HELP-G11-B07-05" hidden></span>

    ??? tip "4.5. Dùng hệ thức ba số mà quên điều kiện dấu"

        **Dấu hiệu:** Thấy \(x^2=ac\) rồi chỉ lấy căn dương, hoặc kết luận cả một dãy là cấp số nhân chỉ từ một bộ ba.

        **Vì sao sai:** Công bội có thể âm; một phương trình bình phương chỉ chứng minh điều kiện cần của bộ ba. Với số \(0\), phải kiểm định nghĩa nhân trực tiếp.

        **Tự sửa:** Ôn mục 2.2, Ví dụ 3.5 rồi luyện Core ba số dương \(2,x,18\) và Practice \(9,x,1\) có ràng buộc dương ở [Bài 7 – Luyện tập](../luyen-tap/).

    **Học tiếp:** [Core và Luyện tập](../luyen-tap/) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/) · [Tự luận Chương II](../../../../thu-vien/tu-luan-g11-chuong-ii/).

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập một, Bài 7 (trang in 52–55).</p>
