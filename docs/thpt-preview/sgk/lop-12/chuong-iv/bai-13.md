# Toán 12 · Bài 13. Ứng dụng hình học của tích phân

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 12 · CHƯƠNG IV · SGK KẾT NỐI TRI THỨC · TẬP HAI · TRANG 19–26</p><p class="thpt-r4-lead">Hiểu bản chất, đọc hình, tự vận dụng và đối chiếu trước khi luyện tập.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương IV</a><a href="../bai-12/">Bài 12 · Ôn lại</a></nav></div>

=== "Khám phá kiến thức"

    Diện tích và thể tích của vật có biên cong được tính bằng cách cộng lát nhỏ. Việc quan trọng nhất là tự dựng chiều cao lát hoặc diện tích mặt cắt, rồi mới tìm nguyên hàm. Ôn giao điểm, dấu, đồng dạng, diện tích hình tròn và tích phân xác định.

    ### 1.1. Diện tích dưới đường cong dương
    
    Với f liên tục không âm, lát thẳng đứng có diện tích gần f(x)dx. Tổng cho diện tích trên [a,b].
    
    **Vận dụng.** Tính diện tích dưới $y=x^2+1$ từ 0 đến 1.
    
    <span data-ped-first-try="1" data-outcome-id="G12-CHIV-B13-O01" data-thpt-first-try-id="THPT-G12-B13-TRY01" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $S=[x^3/3+x]_0^1=4/3$.
    
    <span data-thpt-help-id="HELP-G12-B13-TRY01" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Xác định miền, f không âm và cận tăng. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b13-c01); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b13-p01). Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.2. Diện tích khi đồ thị qua Ox
    
    Lát có chiều cao |f|, không có diện tích âm. Tìm các nghiệm đổi dấu để chia tích phân.
    
    **Vận dụng.** Tính diện tích giữa $y=2x-4$ và Ox trên [0,3].
    
    <span data-ped-first-try="2" data-outcome-id="G12-CHIV-B13-O02" data-thpt-first-try-id="THPT-G12-B13-TRY02" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Nghiệm 2. Hai tam giác có diện tích $2\cdot4/2=4$ và $1\cdot2/2=1$, tổng 5.
    
    <span data-thpt-help-id="HELP-G12-B13-TRY02" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không lấy trị tuyệt đối của tích phân tổng. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b13-c02); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b13-p02). Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.3. Giữa hai đường: trên trừ dưới
    
    Chiều cao lát bằng hiệu tung độ hai đường tại cùng x. Nếu f≥g trên cả đoạn thì tích phân f−g.
    
    **Vận dụng.** Tính diện tích giữa y=x+4 và y=2x trên [0,2].
    
    <span data-ped-first-try="3" data-outcome-id="G12-CHIV-B13-O03" data-thpt-first-try-id="THPT-G12-B13-TRY03" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $x+4-2x=4-x>0$; $S=[4x-x^2/2]_0^2=6$.
    
    <span data-thpt-help-id="HELP-G12-B13-TRY03" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        So hai giá trị ở cùng x, không trừ diện tích ngoài miền. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b13-c03); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b13-p03). Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.4. Giao điểm làm đổi đường trên
    
    Giải f=g để chia khoảng; thử dấu f−g từng phần. Hai miền có thể triệt tiêu nếu bỏ trị tuyệt đối.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHIV-B13-CURVES-R02.svg" alt="Đồ thị y=x và y=x³ trên [−1,1], hai vùng đổi đường trên tại 0."/><figcaption>Giữa −1 và 0, đường x³ cao hơn; giữa 0 và 1, đường x cao hơn. Tô riêng hai phần.</figcaption></figure>
    
    **Vận dụng.** Tính diện tích giữa $y=x$ và $y=x^3$ trên [−1,1].
    
    <span data-ped-first-try="4" data-outcome-id="G12-CHIV-B13-O04" data-thpt-first-try-id="THPT-G12-B13-TRY04" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Giao tại −1,0,1. Trên [−1,0], $x^3\ge x$; trên [0,1], $x\ge x^3$. Mỗi phần có diện tích 1/4, tổng 1/2.
    
    <span data-thpt-help-id="HELP-G12-B13-TRY04" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Tìm cả giao điểm bên trong, kiểm dấu riêng từng khoảng. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b13-c04); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b13-p04). Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.5. Mô hình diện tích và đơn vị
    
    Nếu một dải đất có bề rộng h(x) mét và x đo bằng mét, h(x)dx có đơn vị m². Cận đến từ miền vật lý, không từ hình vẽ tùy ý.
    
    **Vận dụng.** Dải đất dài 6 m, rộng $w(x)=2+x/3$ m. Tính diện tích.
    
    <span data-ped-first-try="5" data-outcome-id="G12-CHIV-B13-O05" data-thpt-first-try-id="THPT-G12-B13-TRY05" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $S=[2x+x^2/6]_0^6=18$ m².
    
    <span data-thpt-help-id="HELP-G12-B13-TRY05" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Bề rộng dương; diện tích không phải m³. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b13-c05); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b13-p05). Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.6. Thể tích từ lát cắt
    
    Lát mỏng vuông góc với trục x có diện tích S(x), độ dày dx. Vì thế thể tích $V=\int S(x)dx$. Phải dựng S theo hình học, không tích phân trực tiếp độ dài cạnh.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHIV-B13-SLICES-R02.svg" alt="Các lát vuông khi cạnh tăng từ 2 đến 4; mặt cắt vuông góc chiều x."/><figcaption>Mỗi lát có cạnh 2+x, diện tích (2+x)²; hình phối cảnh chỉ diễn tả vị trí lát.</figcaption></figure>
    
    **Vận dụng.** Khối có mặt cắt vuông cạnh $2+x$ cm, $0\le x\le2$ cm. Tính V.
    
    <span data-ped-first-try="6" data-outcome-id="G12-CHIV-B13-O06" data-thpt-first-try-id="THPT-G12-B13-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $S(x)=(2+x)^2$ cm², $V=[(2+x)^3/3]_0^2=56/3$ cm³.
    
    <span data-thpt-help-id="HELP-G12-B13-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Bình phương cạnh trước khi tích phân. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b13-c06); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b13-p06). Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.7. Lát cắt tròn: bán kính hay đường kính?
    
    Diện tích đĩa là πr². Nếu đề cho đường kính d, bán kính bằng d/2. Mỗi lát cần cùng đơn vị với trục x.
    
    **Vận dụng.** Lát tròn có đường kính $d(x)=4+2x$ cm trên [0,1] cm. Tính V.
    
    <span data-ped-first-try="7" data-outcome-id="G12-CHIV-B13-O07" data-thpt-first-try-id="THPT-G12-B13-TRY07" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $r=2+x$, $V=\pi[(2+x)^3/3]_0^1=19\pi/3$ cm³.
    
    <span data-thpt-help-id="HELP-G12-B13-TRY07" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Dùng d/2; nhầm d làm r tăng thể tích gấp bốn. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b13-c07); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b13-p07). Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.8. Miền quay quanh Ox
    
    Quay miền giữa đồ thị liên tục y=f(x) và Ox, tại mỗi x có đĩa bán kính |f(x)|. Tích phân πf²; không áp dụng trực tiếp nếu miền không chạm trục quay.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHIV-B13-REVOLUTION-R02.svg" alt="Đường y=3x trên [0,1] quay quanh Ox sinh khối nón; bán kính tại x bằng 3x."/><figcaption>Quay đoạn đứng từ Ox tới đồ thị tạo đĩa, không phải đường tròn rỗng.</figcaption></figure>
    
    **Vận dụng.** Quay miền dưới $y=3x$ trên [0,1] quanh Ox. Tính V.
    
    <span data-ped-first-try="8" data-outcome-id="G12-CHIV-B13-O08" data-thpt-first-try-id="THPT-G12-B13-TRY08" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $V=\pi\int_0^1 9x^2 dx=3\pi$.
    
    <span data-thpt-help-id="HELP-G12-B13-TRY08" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Kiểm trục quay và bình phương bán kính. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b13-c08); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b13-p08). Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.9. Tự dựng mặt cắt của khối chóp
    
    Chọn x từ đỉnh đến đáy, chiều cao h. Do đồng dạng, tỉ số cạnh của lát song song đáy là x/h, tỉ số diện tích là $(x/h)^2$. Vì thế S(x)=S đáy nhân bình phương tỉ số.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHIV-B13-PYRAMID-R02.svg" alt="Mặt cắt trong chóp đáy vuông, tại x/h=1/2 có cạnh bằng nửa cạnh đáy."/><figcaption>Mặt cắt song song đáy, tỉ số diện tích 1/4; suy S(x)=B(x/h)².</figcaption></figure>
    
    **Vận dụng.** Chóp đáy vuông cạnh 6 cm, cao 9 cm. Từ đồng dạng, lập S(x) và tính V.
    
    <span data-ped-first-try="9" data-outcome-id="G12-CHIV-B13-O06" data-thpt-first-try-id="THPT-G12-B13-TRY09" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Cạnh lát là $6x/9=2x/3$, $S(x)=4x^2/9$. $V=[4x^3/27]_0^9=108$ cm³, đúng $36\cdot9/3$.
    
    <span data-thpt-help-id="HELP-G12-B13-TRY09" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không lấy tỉ số diện tích bằng tỉ số cạnh; chọn gốc ở đỉnh nhất quán. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b13-c06); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b13-p06). Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.10. Nón cụt: bán kính thay đổi tuyến tính
    
    Đặt x từ đáy nhỏ đến đáy lớn. Mặt cắt song song đáy có bán kính thay đổi tuyến tính theo x do đồng dạng, $r(x)=r+(R-r)x/h$.
    
    **Vận dụng.** Nón cụt cao 3 cm, hai bán kính đáy 1 và 4 cm. Tính thể tích bằng tích phân.
    
    <span data-ped-first-try="10" data-outcome-id="G12-CHIV-B13-O07" data-thpt-first-try-id="THPT-G12-B13-TRY10" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $r(x)=1+x$, $V=\pi[(1+x)^3/3]_0^3=21\pi$ cm³.
    
    <span data-thpt-help-id="HELP-G12-B13-TRY10" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Kiểm r(0)=1, r(3)=4; dùng bình phương bán kính. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b13-c07); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b13-p07). Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.11. Diện tích trong mô hình kinh tế
    
    Trong mô hình đơn giản, chênh lệch giá sẵn lòng trả với giá thị trường tại lượng q cho chiều cao vùng thặng dư tiêu dùng. Tổng diện tích có đơn vị tiền.
    
    **Vận dụng.** Giá sẵn lòng trả $p(q)=12-q$ nghìn đồng/đơn vị, giá thị trường 8, giao dịch từ q=0 đến q=4. Tính thặng dư tiêu dùng.
    
    <span data-ped-first-try="11" data-outcome-id="G12-CHIV-B13-O05" data-thpt-first-try-id="THPT-G12-B13-TRY11" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $S=\int_0^4(12-q-8)dq=[4q-q^2/2]_0^4=8$ nghìn đồng.
    
    <span data-thpt-help-id="HELP-G12-B13-TRY11" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Đặt đúng đường trên và cận lượng giao dịch; đây là mô hình lý tưởng. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b13-c05); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b13-p05). Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

=== "Kiến thức SGK"

    ### 2.1. Diện tích hình phẳng
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Diện tích hình phẳng.</strong><p>Nếu f liên tục trên [a,b], a&lt;b, diện tích giới hạn bởi y=f(x), Ox và hai đường x=a,x=b là \(S=\int_a^b|f(x)|dx\). Với hai hàm liên tục f,g, diện tích giữa hai đồ thị trên [a,b] là \(S=\int_a^b|f(x)-g(x)|dx\). Chia tại điểm đổi dấu hiệu; nếu f≥g, lấy f−g. Đơn vị là tích hai đơn vị theo trục.</p></div>

    ### 2.2. Thể tích vật thể
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Thể tích vật thể.</strong><p>Nếu mặt cắt vuông góc với trục x có diện tích S(x) liên tục trên [a,b], a&lt;b, thì \(V=\int_a^b S(x)dx\). Tính S từ hình học trước. Lăng trụ có diện tích đáy B không đổi, \(V=Bh\). Chóp có S(x)=B(x/h)^2 từ đỉnh, suy \(V=Bh/3\).</p></div>

    ### 2.2.1. Thể tích khối tròn xoay
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Thể tích khối tròn xoay.</strong><p>Khi quay miền giữa đồ thị liên tục y=f(x), Ox, x=a,x=b quanh Ox, bán kính đĩa là |f(x)|, nên \(V=\pi\int_a^b f(x)^2dx\). Với các lớp tròn có bán kính r(x) không âm, \(S(x)=\pi r(x)^2\). Với nón cụt, \(r(x)=r+(R-r)x/h\), suy \(V=\pi h(r^2+rR+R^2)/3\). Đổi trục quay hay miền không chạm Ox phải dựng lại mặt cắt.</p></div>

=== "Ví dụ"

    ### 3.1. Dưới parabol
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B13-01"><p><strong>Đề bài:</strong> Tính diện tích dưới y=x² trên [0,3].</p><p><strong>Phân tích:</strong> Kiểm không âm.</p><p><strong>Lời giải:</strong> \([x^3/3]_0^3=9\).</p><p><strong>Kiểm lại:</strong> Diện tích dương.</p></div>

    ### 3.2. Hai miền với trục Ox
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B13-02"><p><strong>Đề bài:</strong> Tính diện tích giữa y=x và Ox từ −3 tới 3.</p><p><strong>Phân tích:</strong> Tách tại 0.</p><p><strong>Lời giải:</strong> Hai tam giác diện tích 9/2 mỗi phần, tổng 9.</p><p><strong>Kiểm lại:</strong> Không dùng tích phân có dấu bằng 0.</p></div>

    ### 3.3. Hai đường thẳng
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B13-03"><p><strong>Đề bài:</strong> Tính diện tích giữa y=3x và y=x trên [0,2].</p><p><strong>Phân tích:</strong> Hiệu độ cao là 2x.</p><p><strong>Lời giải:</strong> \(\int_0^2 2x dx=4\).</p><p><strong>Kiểm lại:</strong> Hiệu không âm.</p></div>

    ### 3.4. Giao điểm ở hai đầu
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B13-04"><p><strong>Đề bài:</strong> Diện tích giữa y=x² và y=x trên [0,1].</p><p><strong>Phân tích:</strong> x≥x² trong đoạn.</p><p><strong>Lời giải:</strong> \(\int_0^1(x-x^2)dx=1/6\).</p><p><strong>Kiểm lại:</strong> Giao tại hai đầu, không đổi đường trên ở giữa.</p></div>

    ### 3.5. Bề rộng dải đất
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B13-05"><p><strong>Đề bài:</strong> \(w(x)=3-x/2\) m, x trong [0,4] m. Tính diện tích.</p><p><strong>Phân tích:</strong> w≥1, tích phân độ rộng.</p><p><strong>Lời giải:</strong> \([3x-x^2/4]_0^4=8\) m².</p><p><strong>Kiểm lại:</strong> Hình thang hai đầu rộng 3 và 1, dài 4.</p></div>

    ### 3.6. Mặt cắt đã biết
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B13-06"><p><strong>Đề bài:</strong> \(S(x)=3x^2\) cm², x∈[0,2] cm. Tính V.</p><p><strong>Phân tích:</strong> Tích phân diện tích.</p><p><strong>Lời giải:</strong> \(V=[x^3]_0^2=8\) cm³.</p><p><strong>Kiểm lại:</strong> Đơn vị lập phương.</p></div>

    ### 3.7. Mặt cắt tròn
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B13-07"><p><strong>Đề bài:</strong> r(x)=x+1 cm, x∈[0,1] cm. Tính V.</p><p><strong>Phân tích:</strong> Dùng πr².</p><p><strong>Lời giải:</strong> \(V=\pi[(x+1)^3/3]_0^1=7\pi/3\) cm³.</p><p><strong>Kiểm lại:</strong> Bán kính ở hai đầu bằng 1 và 2.</p></div>

    ### 3.8. Quay quanh Ox
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B13-08"><p><strong>Đề bài:</strong> Quay miền dưới y=2x, x∈[0,2] quanh Ox.</p><p><strong>Phân tích:</strong> Mặt cắt tròn r=2x.</p><p><strong>Lời giải:</strong> \(V=4\pi[x^3/3]_0^2=32\pi/3\).</p><p><strong>Kiểm lại:</strong> Khối nón cao 2, bán kính đáy 4, đúng công thức hình học.</p></div>

    ### 3.9. Chóp cụt vuông từ đồng dạng
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B13-R02-09"><p><strong>Đề bài:</strong> Chóp cụt cao 6 cm, hai đáy vuông cạnh 2 và 8 cm. Tìm V.</p><p><strong>Phân tích:</strong> Cạnh lát biến thiên tuyến tính theo x từ đáy nhỏ.</p><p><strong>Lời giải:</strong> \(l(x)=2+x\), \(S=l^2\). \(V=[(2+x)^3/3]_0^6=168\) cm³.</p><p><strong>Kiểm lại:</strong> Kiểm l(0)=2,l(6)=8; kết quả nằm giữa 24 và 384.</p></div>

    ### 3.10. Suy công thức thể tích nón cụt
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B13-R02-10"><p><strong>Đề bài:</strong> Hai đáy bán kính r,R, 0≤r≤R, cao h&gt;0. Tự suy công thức V.</p><p><strong>Phân tích:</strong> Đồng dạng cho bán kính tuyến tính theo x.</p><p><strong>Lời giải:</strong> \(V=\pi\int_0^h[r+(R-r)x/h]^2dx=\pi h[r^2+r(R-r)+(R-r)^2/3]=\pi h(r^2+rR+R^2)/3\).</p><p><strong>Kiểm lại:</strong> r=0 cho nón; r=R cho trụ.</p></div>

    ### 3.11. Khoảng cách đường Lorenz và đường bình đẳng
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B13-R02-11"><p><strong>Đề bài:</strong> Mô hình tỉ phần thu nhập tích lũy L(x)=x², 0≤x≤1; đường bình đẳng y=x. Tính diện tích chênh lệch.</p><p><strong>Phân tích:</strong> x−x² không âm trên [0,1].</p><p><strong>Lời giải:</strong> \(A=\int_0^1(x-x^2)dx=1/6\). Đây là diện tích không thứ nguyên với tỉ phần 0–1; chỉ mô tả mô hình, không phải mức thu nhập từng người.</p><p><strong>Kiểm lại:</strong> Không gọi 1/6 là tỷ lệ người nghèo.</p></div>

    ### 3.12. Chỏm cầu từ lát cắt tròn
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B13-R02-12"><p><strong>Đề bài:</strong> Mặt cầu bán kính R=5 cm, tâm O; chỏm phía x từ 3 đến 5 cm. Tính thể tích.</p><p><strong>Phân tích:</strong> Từ phương trình cầu, bán kính lát bình phương bằng 25−x².</p><p><strong>Lời giải:</strong> \(V=\pi\int_3^5(25-x^2)dx=\pi[25x-x^3/3]_3^5=52\pi/3\) cm³.</p><p><strong>Kiểm lại:</strong> Bán kính tại x=5 bằng 0; chỏm nhỏ hơn nửa cầu.</p></div>

=== "Lỗi thường gặp"

    ### 4.1. Diện tích dưới đường cong dương
    
    ??? tip "Cách tự sửa"
    
        Xác định miền, f không âm và cận tăng. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b13-c01); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b13-p01).

    ### 4.2. Diện tích khi đồ thị qua Ox
    
    ??? tip "Cách tự sửa"
    
        Không lấy trị tuyệt đối của tích phân tổng. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b13-c02); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b13-p02).

    ### 4.3. Giữa hai đường: trên trừ dưới
    
    ??? tip "Cách tự sửa"
    
        So hai giá trị ở cùng x, không trừ diện tích ngoài miền. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b13-c03); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b13-p03).

    ### 4.4. Giao điểm làm đổi đường trên
    
    ??? tip "Cách tự sửa"
    
        Tìm cả giao điểm bên trong, kiểm dấu riêng từng khoảng. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b13-c04); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b13-p04).

    ### 4.5. Mô hình diện tích và đơn vị
    
    ??? tip "Cách tự sửa"
    
        Bề rộng dương; diện tích không phải m³. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b13-c05); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b13-p05).

    ### 4.6. Thể tích từ lát cắt
    
    ??? tip "Cách tự sửa"
    
        Bình phương cạnh trước khi tích phân. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b13-c06); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b13-p06).

    ### 4.7. Lát cắt tròn: bán kính hay đường kính?
    
    ??? tip "Cách tự sửa"
    
        Dùng d/2; nhầm d làm r tăng thể tích gấp bốn. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b13-c07); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b13-p07).

    ### 4.8. Miền quay quanh Ox
    
    ??? tip "Cách tự sửa"
    
        Kiểm trục quay và bình phương bán kính. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b13-c08); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b13-p08).

    ### 4.9. Tự dựng mặt cắt của khối chóp
    
    ??? tip "Cách tự sửa"
    
        Không lấy tỉ số diện tích bằng tỉ số cạnh; chọn gốc ở đỉnh nhất quán. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b13-c06); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b13-p06).

    ### 4.10. Nón cụt: bán kính thay đổi tuyến tính
    
    ??? tip "Cách tự sửa"
    
        Kiểm r(0)=1, r(3)=4; dùng bình phương bán kính. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b13-c07); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b13-p07).

    ### 4.11. Diện tích trong mô hình kinh tế
    
    ??? tip "Cách tự sửa"
    
        Đặt đúng đường trên và cận lượng giao dịch; đây là mô hình lý tưởng. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b13-c05); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b13-p05).

    [Core Bài 13](../luyen-tap/#b13-core) · [Luyện tập và Tự luận](../luyen-tap/#b13-practice) · [Hỗ trợ khi gặp khó khăn](../luyen-tap/#b13-help) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/)

*Nguồn đối chiếu: SGK Toán 12 Kết nối tri thức, Tập hai, trang in 19–26.*
