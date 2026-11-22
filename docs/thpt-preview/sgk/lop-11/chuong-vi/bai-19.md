# Bài 19. Lôgarit

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VI · SGK KNTT TẬP 2</p><p class="thpt-r4-lead">Tìm số mũ bằng lôgarit; hiểu điều kiện, công thức đổi cơ số, lôgarit thập phân và tự nhiên trong mô hình.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương VI</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Bài 18 trả lời câu hỏi “nâng cơ số lên số mũ đã biết thì được bao nhiêu?”. Bây giờ, biết kết quả mà chưa biết số mũ, chẳng hạn muốn biết một khoản đầu tư cần bao nhiêu kỳ để tăng gấp ba, ta cần phép tính ngược. Lôgarit giải quyết đúng câu hỏi đó. Kiến thức tiền đề: lũy thừa số mũ thực, tính dương và quy tắc nhân lũy thừa.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVI-B19-01_R00.svg" alt="Sơ đồ hai chiều giữa lũy thừa và lôgarit cơ số 2"><figcaption>Đọc hình: đi từ trái sang phải để đọc \(2^3=8\). Đọc ngược: \(\log_2 8=3\). Mũ là kết quả của phép lôgarit, không phải thương hai số. Kiểm cơ số dương khác 1 và đối số dương trước khi đọc.</figcaption></figure>

    ### 1.1. Lôgarit trả về số mũ

    Nếu \(4^2=16\), phép ngược hỏi số mũ nào biến cơ số 4 thành 16. Vì hàm lũy thừa với cơ số dương khác 1 tăng hoặc giảm nghiêm ngặt, đáp án số mũ là duy nhất.

    **Vận dụng — Tự thử trước Core.** Tính \(\log_7(1/49)\) và kiểm lại bằng một đẳng thức lũy thừa.

    <span data-ped-first-try="1" data-outcome-id="G11-B19-LOG_DEFINITION" data-thpt-first-try-id="THPT-G11-B19-TRY01" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(\log_7(1/49)=-2\) vì \(7^{-2}=1/49\). Logarit có thể âm dù đối số bắt buộc dương.

    <span data-thpt-help-id="HELP-G11-B19-TRY01" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Chia đối số cho cơ số.

        **Tự sửa:** Đổi câu hỏi sang dạng a mũ x bằng M. [Làm lại câu B19-C01](../luyen-tap/?item=THPT-G11-CHVI-B19-C01).

    ### 1.2. Vì sao hai thừa số phải dương riêng rẽ khi tách tích?

    Cơ số phải dương khác 1; đối số phải dương. Tích hai số âm có thể dương, nhưng logarit riêng của từng số âm không xác định. Vì thế miền xác định của một tích trong logarit và miền của tổng hai logarit không nhất thiết giống nhau.

    **Vận dụng — Tự thử trước Core.** Cho \(F(x)=\log_5((x+3)(x-4))\). Tìm tập xác định và cho biết có được tách thành hai logarit trên toàn tập đó không.

    <span data-ped-first-try="2" data-outcome-id="G11-B19-LOG_DOMAIN" data-thpt-first-try-id="THPT-G11-B19-TRY02" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Điều kiện \((x+3)(x-4)\gt 0\) cho \(x\lt -3\) hoặc \(x\gt 4\). Chỉ khi \(x\gt 4\) cả \(x+3\) và \(x-4\) đều dương mới viết được \(\log_5(x+3)+\log_5(x-4)\).

    <span data-thpt-help-id="HELP-G11-B19-TRY02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Tách tích ngay sau khi kiểm tích dương.

        **Tự sửa:** Kiểm từng đối số sau biến đổi; dùng bảng dấu. [Làm lại câu B19-P04](../luyen-tap/?item=THPT-G11-CHVI-B19-P04).

    ### 1.3. Nhân, chia và nâng lũy thừa chuyển thành cộng, trừ và nhân số mũ

    Nếu \(M=a^u,N=a^v\) với \(M,N\gt 0\), thì \(MN=a^{u+v}\). Bởi logarit đọc ra số mũ, logarit của tích bằng tổng logarit. Tương tự với thương và lũy thừa. Không có công thức cộng cho logarit của một tổng.

    **Vận dụng — Tự thử trước Core.** Tính \(\log_5 125+\log_5(1/25)-\log_5 5\).

    <span data-ped-first-try="3" data-outcome-id="G11-B19-LOG_LAWS" data-thpt-first-try-id="THPT-G11-B19-TRY03" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Các đối số đều dương. Giá trị là \(3+(-2)-1=0\). Kiểm bằng gộp thành \(\log_5(125/(25\cdot5))=\log_5 1=0\).

    <span data-thpt-help-id="HELP-G11-B19-TRY03" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Nhầm dấu trừ hoặc logarit của tổng.

        **Tự sửa:** Viết từng số thành lũy thừa cơ số 5 rồi kiểm lại phép gộp. [Làm lại câu B19-P01](../luyen-tap/?item=THPT-G11-CHVI-B19-P01).

    ### 1.4. Đổi cơ số để dùng máy tính hoặc lũy thừa dễ nhận biết

    Đặt \(x=\log_a M\), tức \(a^x=M\). Lấy logarit cơ số \(c\) hợp lệ hai vế, ta được \(x\log_c a=\log_c M\). Vì \(a\ne1\), \(\log_c a\ne0\); chia được để tìm x.

    **Vận dụng — Tự thử trước Core.** Viết \(\log_8 4\) bằng logarit cơ số 2, rồi tính chính xác.

    <span data-ped-first-try="4" data-outcome-id="G11-B19-LOG_BASE_CHANGE" data-thpt-first-try-id="THPT-G11-B19-TRY04" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(\log_8 4=\log_2 4/\log_2 8=2/3\). Kiểm \(8^{2/3}=4\).

    <span data-thpt-help-id="HELP-G11-B19-TRY04" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Đổi cơ số bằng logarit của thương.

        **Tự sửa:** Dùng thương của hai logarit cùng một cơ số, không dùng logarit của thương. [Làm lại câu B19-P05](../luyen-tap/?item=THPT-G11-CHVI-B19-P05).

    ### 1.5. Lôgarit thập phân: đọc số mũ trong thang đo

    Lôgarit thập phân \(\lg M=\log_{10}M\) biến nhân 10 thành tăng 1 đơn vị lôgarit. Trong mô hình hóa học thường dùng \(\mathrm{pH}=-\lg c\) với \(c\gt 0\) là giá trị số của nồng độ ion hydrogen theo mol/L; dấu trừ làm nồng độ nhỏ tương ứng pH lớn hơn.

    **Vận dụng — Tự thử trước Core.** Theo mô hình trên, nếu \(c=10^{-5}\) mol/L, tính pH. Nếu nồng độ giảm 100 lần, pH thay đổi bao nhiêu?

    <span data-ped-first-try="5" data-outcome-id="G11-B19-LOG_APPLICATION" data-thpt-first-try-id="THPT-G11-B19-TRY05" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(\mathrm{pH}=-(-5)=5\). Sau giảm 100 lần, \(c'=10^{-7}\) và pH mới là 7, tăng 2 đơn vị. Đây là tính toán theo mô hình đã cho.

    <span data-thpt-help-id="HELP-G11-B19-TRY05" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Cho rằng giảm nồng độ làm pH giảm cùng tỷ lệ.

        **Tự sửa:** Đổi nồng độ thành lũy thừa 10; chú ý dấu trừ. [Làm lại câu B19-P06](../luyen-tap/?item=THPT-G11-CHVI-B19-P06).

    ### 1.6. Số e, lôgarit tự nhiên và tăng trưởng liên tục

    Nếu chia mỗi năm thành \(m\) kỳ nhập lãi, mô hình số tiền sau \(t\) năm là \(P(1+r/m)^{mt}\). Khi số kỳ chia tăng không giới hạn, số tiền tiến đến \(Pe^{rt}\). Đây là một mô hình **lãi kép liên tục**, khác cập nhật cuối từng kỳ. Lấy lôgarit tự nhiên \(\ln\) giúp tìm \(t\).

    **Vận dụng — Tự thử trước Core.** Mô hình liên tục \(A(t)=300e^{0{,}04t}\) (triệu đồng, t tính bằng năm). Viết thời gian đạt 600 triệu dưới dạng chính xác và gần đúng đến một chữ số thập phân.

    <span data-ped-first-try="6" data-outcome-id="G11-B19-LOG_APPLICATION" data-thpt-first-try-id="THPT-G11-B19-TRY06" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(e^{0{,}04t}=2\), nên \(t=\ln 2/0{,}04\approx17{,}3\) năm. Vì cho phép thời gian thực trong mô hình, không tự làm tròn lên số năm nguyên.

    <span data-thpt-help-id="HELP-G11-B19-TRY06" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Dùng số lần nhân nguyên cho mô hình thời gian liên tục.

        **Tự sửa:** Phân biệt cập nhật theo kỳ với công thức liên tục; ghi đơn vị của t. [Làm lại câu B19-P06](../luyen-tap/?item=THPT-G11-CHVI-B19-P06).

=== "Kiến thức SGK"

    ### 2.1. Khái niệm lôgarit

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa.</strong> Với \(a\gt 0,\ a\ne1,\ M\gt 0\), lôgarit cơ số a của M là số thực \(\alpha\) duy nhất thỏa
    \[
    \alpha=\log_a M\Longleftrightarrow a^\alpha=M.
    \]
    </div>
    
    Nếu \(a=1\), mọi số mũ cho 1 nên không tìm được số mũ duy nhất; cơ số không dương không cho định nghĩa mũ thực chung; đối số không dương không là giá trị của lũy thừa cơ số dương.
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất trực tiếp.</strong> Với cơ số và đối số hợp lệ:
    \[
    \log_a1=0,\quad\log_a a=1,\quad a^{\log_a M}=M,\quad \log_a(a^u)=u\ (u\in\mathbb R).
    \]
    </div>

    ### 2.2. Tính chất của lôgarit

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Quy tắc tính.</strong> Với \(a\gt 0,a\ne1,M,N\gt 0,\ r\in\mathbb R\):
    \[
    \log_a(MN)=\log_a M+\log_a N,\quad
    \log_a(M/N)=\log_a M-\log_a N,
    \]
    \[
    \log_a(M^r)=r\log_a M.
    \]
    </div>
    
    Đặt \(M=a^u,N=a^v\) để suy các quy tắc từ luật số mũ. Muốn tách logarit của tích hay thương, phải kiểm từng thừa số/đối số dương; nếu chứa \(\log_a(x^2)\) với \(x\ne0\), có thể viết \(2\log_a|x|\), không viết \(2\log_a x\) khi x âm. Không có luật \(\log_a(M+N)=\log_a M+\log_a N\).
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Đổi cơ số.</strong> Với \(a,c\gt 0,\ a,c\ne1,\ M\gt 0\):
    \[
    \log_a M=\frac{\log_c M}{\log_c a}.
    \]
    </div>
    
    Hệ quả: \(\log_a c=1/\log_c a\); với \(r\ne0\), \(\log_{a^r} M=(1/r)\log_a M\).

    ### 2.3. Lôgarit thập phân và lôgarit tự nhiên

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Hai cơ số thường dùng.</strong> \(\lg M=\log_{10}M\) (cũng viết \(\log M\) theo quy ước thập phân); \(\ln M=\log_e M\), \(M\gt 0\), trong đó \(e=\lim_{x\to+\infty}(1+1/x)^x\approx2{,}71828\).</div>
    
    **Lãi kép liên tục:** chia năm thành \(m\) kỳ với lãi suất năm \(r\gt 0\), \(P(1+r/m)^{mt}\to Pe^{rt}\) khi \(m\to+\infty\) (mô hình cho \(t\ge0\)). Khi biết mức \(A\gt P\), có thể tìm \(t=\ln(A/P)/r\). Công thức này không đồng nhất với lãi kép cuối từng năm.
    
    **Máy tính:** tính \(\log_a M\) bằng đổi cơ số \(\ln M/\ln a\) hoặc phím log cơ số tùy máy. Nhập đầy đủ ngoặc, kiểm miền, làm tròn ở bước cuối. Ví dụ \(\log_3 11\approx2{,}1827\).

=== "Ví dụ"

    ### 3.1. Đọc số mũ âm

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Tính \(\log_6(1/216)\).</p><p><strong>Phân tích:</strong> Nhận ra đối số là lũy thừa nguyên của 6.</p><p><strong>Lời giải:</strong> \(216=6^3\), nên \(1/216=6^{-3}\) và logarit bằng \(-3\).</p><p><strong>Kiểm lại:</strong> Lấy 6 nâng lên -3 đúng bằng đối số.</p></div>

    ### 3.2. Điều kiện với bình phương

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Tìm tập xác định của \(\log_4((x-2)^2)\) và viết biểu thức theo logarit của trị tuyệt đối.</p><p><strong>Phân tích:</strong> Đối số phải dương, bình phương bằng 0 đúng khi x=2.</p><p><strong>Lời giải:</strong> Miền \(\mathbb R\setminus\{2\}\). Vì \(|x-2|\gt 0\), \(\log_4((x-2)^2)=2\log_4|x-2|\).</p><p><strong>Kiểm lại:</strong> Với x<2, logarit của x-2 không có nghĩa nhưng logarit của trị tuyệt đối có nghĩa.</p></div>

    ### 3.3. Gộp thương và tích

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Tính \(\log_3 54-\log_3 2+\log_3 9\).</p><p><strong>Phân tích:</strong> Các đối số dương cho phép gộp.</p><p><strong>Lời giải:</strong> \(=\log_3(54\cdot9/2)=\log_3 243=5\).</p><p><strong>Kiểm lại:</strong> (3^5=243); đúng chiều tính ngược.</p></div>

    ### 3.4. Đổi cơ số và tính gần đúng

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Tính \(\log_7 13\) đến ba chữ số thập phân.</p><p><strong>Phân tích:</strong> 7 và 13 dương, 7 khác 1; dùng cơ số e.</p><p><strong>Lời giải:</strong> \(\log_7 13=\ln13/\ln7\approx1{,}318\).</p><p><strong>Kiểm lại:</strong> Vì 7<13<49, kết quả nằm giữa 1 và 2.</p></div>

    ### 3.5. Ứng dụng thang lôgarit thập phân

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Theo \(\mathrm{pH}=-\lg c\), một mẫu có pH=4,5. Viết giá trị nồng độ \(c\) dưới dạng lũy thừa của 10.</p><p><strong>Phân tích:</strong> Đưa logarit về số mũ; c phải dương.</p><p><strong>Lời giải:</strong> \(\lg c=-4{,}5\), nên \(c=10^{-4{,}5}\) mol/L.</p><p><strong>Kiểm lại:</strong> Thế ngược vào công thức pH cho 4,5.</p></div>

    ### 3.6. Thời gian trong mô hình liên tục

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Một mô hình lượng chất tăng \(Q(t)=60e^{0{,}08t}\), t tính bằng giờ. Khi nào đạt 180 đơn vị?</p><p><strong>Phân tích:</strong> Chia theo mức đầu và lấy ln vì cơ số e.</p><p><strong>Lời giải:</strong> \(e^{0{,}08t}=3\) nên \(t=\ln3/0{,}08\approx13{,}73\) giờ.</p><p><strong>Kiểm lại:</strong> Thế giá trị chính xác cho Q(t)=180; không kết luận đây là số giờ nguyên.</p></div>

=== "Lỗi thường gặp"

    <span data-thpt-help-id="HELP-G11-CHVI-B19-01" hidden></span>

    ??? tip "4.1. Nhầm lôgarit với phép chia hoặc căn"

        **Vì sao sai:** Logarit trả về số mũ trong a^x=M.

        **Tự sửa:** Chuyển về lũy thừa rồi thế ngược. [Làm lại câu B19-C01](../luyen-tap/?item=THPT-G11-CHVI-B19-C01).

    <span data-thpt-help-id="HELP-G11-CHVI-B19-02" hidden></span>

    ??? tip "4.2. Tách logarit khi các đối số riêng âm"

        **Vì sao sai:** Tích dương chưa đảm bảo mỗi thừa số dương.

        **Tự sửa:** Lập bảng dấu từng biểu thức ở mục 2.2. [Làm lại câu B19-P04](../luyen-tap/?item=THPT-G11-CHVI-B19-P04).

    <span data-thpt-help-id="HELP-G11-B19-03" hidden></span>

    ??? tip "4.3. Dùng công thức tích cho tổng"

        **Vì sao sai:** Logarit chỉ biến tích thành cộng, không biến tổng thành cộng.

        **Tự sửa:** Thử M=N=1, so log_a2 với 0. [Làm lại câu B19-P02](../luyen-tap/?item=THPT-G11-CHVI-B19-P02).

    <span data-thpt-help-id="HELP-G11-B19-04" hidden></span>

    ??? tip "4.4. Đổi sai cơ số hoặc lẫn ln với lg"

        **Vì sao sai:** Mẫu đổi cơ số là logarit của cơ số a; ln cơ số e, lg cơ số 10.

        **Tự sửa:** Viết công thức đổi cơ số trước khi bấm máy. [Làm lại câu B19-P05](../luyen-tap/?item=THPT-G11-CHVI-B19-P05).

    **Học tiếp:** [Core và Luyện tập](../luyen-tap/) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/) · [Tự luận Chương VI](../../../../thu-vien/tu-luan-g11-chuong-vi/).

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập hai, Bài 19 (trang in 10–15).</p>
