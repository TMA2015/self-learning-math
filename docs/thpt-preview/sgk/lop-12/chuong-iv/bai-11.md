# Toán 12 · Bài 11. Nguyên hàm

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 12 · CHƯƠNG IV · SGK KẾT NỐI TRI THỨC · TẬP HAI · TRANG 4–11</p><p class="thpt-r4-lead">Hiểu bản chất, đọc hình, tự vận dụng và đối chiếu trước khi luyện tập.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương IV</a><a href="../bai-12/">Bài 12 · Học tiếp</a></nav></div>

=== "Khám phá kiến thức"

    Biết vận tốc, làm sao khôi phục vị trí? Đạo hàm mô tả tốc độ biến đổi; nguyên hàm đi theo chiều ngược lại. Ôn đạo hàm đa thức, hàm mũ, logarit, sin và cos; hằng số có đạo hàm bằng 0.

    ### 1.1. Đảo chiều từ đạo hàm
    
    Muốn tìm nguyên hàm của f, tìm F sao cho $F'=f$ tại mọi điểm trên miền xét. Không phải phép chia hay thay thử một điểm.
    
    **Vận dụng.** $G(x)=2x^4-3x+1$ có là nguyên hàm của $8x^3-3$ trên R không?
    
    <span data-ped-first-try="1" data-outcome-id="G12-CHIV-B11-O01" data-thpt-first-try-id="THPT-G12-B11-TRY01" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Có, vì $G'=8x^3-3$ trên R.
    
    <span data-thpt-help-id="HELP-G12-B11-TRY01" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Lấy đạo hàm hàm ứng viên, so toàn bộ biểu thức. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b11-c01); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b11-p01). Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.2. Họ nguyên hàm và điều kiện đầu
    
    Đồ thị $x^2+C$ tịnh tiến theo trục tung nhưng độ dốc tại cùng hoành độ không đổi. Nếu hai nguyên hàm có cùng đạo hàm trên một khoảng liên thông, hiệu có đạo hàm 0 nên là hằng số. Điều kiện đầu xác định C.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHIV-B11-PRIMITIVES-R02.svg" alt="Ba parabol y=x²−1, y=x², y=x²+1 cùng hình dạng, dịch theo trục tung."/><figcaption>Đọc cùng một x; các tiếp tuyến có cùng độ dốc 2x. Thay C chỉ đổi tung độ.</figcaption></figure>
    
    **Vận dụng.** Tìm F khi $F'=6x$, $F(1)=8$.
    
    <span data-ped-first-try="2" data-outcome-id="G12-CHIV-B11-O02" data-thpt-first-try-id="THPT-G12-B11-TRY02" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $F=3x^2+C$; $3+C=8$ nên $F=3x^2+5$. Kiểm $F'=6x$, $F(1)=8$.
    
    <span data-thpt-help-id="HELP-G12-B11-TRY02" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Chỉ xác định C sau khi lấy nguyên hàm; các khoảng tách rời có thể có C khác nhau. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b11-c02); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b11-p02). Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.3. Lũy thừa và tuyến tính
    
    Đạo hàm $x^{m+1}$ cho hệ số m+1, nên phải chia hệ số này khi đảo chiều. Tìm nguyên hàm từng hạng rồi gộp một hằng số.
    
    **Vận dụng.** Tính $\int(12x^3-6x+5)\,dx$.
    
    <span data-ped-first-try="3" data-outcome-id="G12-CHIV-B11-O03" data-thpt-first-try-id="THPT-G12-B11-TRY03" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $3x^4-3x^2+5x+C$. Lấy đạo hàm từng hạng thu đúng đề.
    
    <span data-thpt-help-id="HELP-G12-B11-TRY03" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Tăng số mũ một rồi chia; m=−1 là trường hợp khác. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b11-c03); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b11-p03). Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.4. Khi gặp 1/x
    
    Không thể chia cho m+1 khi m=−1. Trên khoảng không chứa 0, đạo hàm $\ln|x|$ bằng $1/x$. Hai nhánh âm và dương không bắt buộc chung C.
    
    **Vận dụng.** Tìm $\int(5/x-2)\,dx$ trên $(-\infty,0)$.
    
    <span data-ped-first-try="4" data-outcome-id="G12-CHIV-B11-O04" data-thpt-first-try-id="THPT-G12-B11-TRY04" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $5\ln(-x)-2x+C$ (cũng viết $5\ln|x|-2x+C$ trên miền này).
    
    <span data-thpt-help-id="HELP-G12-B11-TRY04" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không viết ln x trên nhánh âm; không nối qua điểm 0. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b11-c04); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b11-p04). Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.5. Hàm mũ và hệ số logarit
    
    Đạo hàm $a^x$ là $a^x\ln a$, với a>0, a≠1. Muốn đảo chiều, chia cho ln a; trường hợp e có ln e=1.
    
    **Vận dụng.** Tính $\int(2e^x+3^x)\,dx$.
    
    <span data-ped-first-try="5" data-outcome-id="G12-CHIV-B11-O05" data-thpt-first-try-id="THPT-G12-B11-TRY05" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $2e^x+3^x/\ln3+C$.
    
    <span data-thpt-help-id="HELP-G12-B11-TRY05" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Đạo hàm số hạng mũ phải triệt đúng ln a; a=1 là hàm hằng. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b11-c05); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b11-p05). Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.6. Lượng giác và miền liên tục
    
    Đạo hàm sin là cos, đạo hàm cos là −sin. Đạo hàm tan và cot lần lượt là $1/\cos^2 x$ và $-1/\sin^2 x$ tại nơi xác định. Góc tính bằng radian.
    
    **Vận dụng.** Tính $\int(3\sin x-5\cos x)\,dx$ và $\int 2/\cos^2x\,dx$ trên $(-\pi/2,\pi/2)$.
    
    <span data-ped-first-try="6" data-outcome-id="G12-CHIV-B11-O06" data-thpt-first-try-id="THPT-G12-B11-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $-3\cos x-5\sin x+C_1$; $2\tan x+C_2$.
    
    <span data-thpt-help-id="HELP-G12-B11-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Kiểm dấu của nguyên hàm sin, và tránh các điểm cos=0 hay sin=0. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b11-c06); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b11-p06). Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.7. Khôi phục đại lượng từ tốc độ
    
    Biết $q'(t)=r(t)$, lấy nguyên hàm rồi dùng q tại thời điểm đầu. Nếu biết gia tốc, phải khôi phục vận tốc trước, sau đó vị trí; mỗi lần dùng một điều kiện đầu.
    
    **Vận dụng.** Vật có $a(t)=4$, $v(0)=3$, $s(0)=2$. Tìm v và s.
    
    <span data-ped-first-try="7" data-outcome-id="G12-CHIV-B11-O07" data-thpt-first-try-id="THPT-G12-B11-TRY07" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $v=4t+3$, $s=2t^2+3t+2$. Kiểm v'=4, s'=v và hai giá trị tại 0.
    
    <span data-thpt-help-id="HELP-G12-B11-TRY07" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không lấy gia tốc làm vị trí; ghi đơn vị và miền thời gian. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b11-c07); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b11-p07). Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.8. Độ cao cực đại từ vận tốc
    
    Trong mô hình vật ném thẳng đứng, h'=v. Lấy nguyên hàm để tìm h, sau đó tìm thời điểm v=0 và xét dấu v trên miền vật còn ở trên mặt đất.
    
    **Vận dụng.** Vật xuất phát từ mặt đất, $v(t)=30-10t$ (m/s), t tính bằng giây. Tính h(2) và độ cao lớn nhất trước khi chạm đất.
    
    <span data-ped-first-try="8" data-outcome-id="G12-CHIV-B11-O07" data-thpt-first-try-id="THPT-G12-B11-TRY08" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $h=30t-5t^2$, h(2)=40 m. Miền bay [0,6]; v dương trước t=3, âm sau. $h(3)=45$ m là độ cao lớn nhất.
    
    <span data-thpt-help-id="HELP-G12-B11-TRY08" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Kiểm miền vật lý và dấu v, không chỉ giải v=0. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b11-c07); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b11-p07). Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

=== "Kiến thức SGK"

    ### 2.1. Nguyên hàm của một hàm số
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Nguyên hàm của một hàm số.</strong><p>F là nguyên hàm của f trên khoảng, đoạn hoặc nửa khoảng K nếu \(F'(x)=f(x)\) trên K (ở đầu mút dùng đạo hàm một phía phù hợp). Trên một miền liên thông K, mọi nguyên hàm của f có dạng \(F(x)+C\), C thực. Kí hiệu \(\int f(x)\,dx=F(x)+C\). Hàm liên tục trên K có nguyên hàm trên K.</p></div>

    ### 2.2. Tính chất cơ bản của nguyên hàm
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất cơ bản của nguyên hàm.</strong><p>Nguyên hàm của tổng hoặc hiệu bằng tổng hoặc hiệu các nguyên hàm; \(\int kf(x)\,dx=k\int f(x)\,dx\) với k≠0. Hiểu các đẳng thức theo họ nguyên hàm, gộp thành một hằng số tùy ý. Với k=0, \(\int0\,dx=C\).</p></div>

    ### 2.3. Nguyên hàm của một số hàm số thường gặp
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Nguyên hàm của một số hàm số thường gặp.</strong><p>\(\int x^\alpha dx=\frac{x^{\alpha+1}}{\alpha+1}+C\) trên miền lũy thừa khả vi thích hợp, chẳng hạn x&gt;0 với số mũ thực \(\alpha\ne-1\). Theo quy ước sách: số mũ nguyên dương có miền R; số mũ nguyên âm hoặc bằng 0 có miền R bỏ 0; số mũ không nguyên dùng x&gt;0. Với hàm hằng, \(\int0\,dx=C,\ \int1\,dx=x+C\) trên R; \(\int 1/x\,dx=\ln|x|+C\) trên từng khoảng x≠0. \(\int e^x dx=e^x+C\); \(\int a^x dx=a^x/\ln a+C\) (a&gt;0, a≠1). \(\int\cos x dx=\sin x+C\), \(\int\sin x dx=-\cos x+C\), \(\int dx/\cos^2x=\tan x+C\), \(\int dx/\sin^2x=-\cot x+C\) trên các khoảng xác định. Các hàm lượng giác dùng radian.</p></div>

    **Chú ý:** Nếu F là một nguyên hàm của f thì vi phân $dF(x)=F'(x)dx=f(x)dx$. Khi đề không ghi miền, xét tập xác định và các khoảng liên thông thích hợp. Có thể biến đổi căn, tích, phân thức hoặc đồng nhất thức lượng giác thành tổng các hàm trong bảng; kiểm lại bằng đạo hàm.

=== "Ví dụ"

    ### 3.1. Kiểm bằng đạo hàm
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B11-01"><p><strong>Đề bài:</strong> Cho \(F=x^4-3x^2+2\). Tìm f sao cho F là nguyên hàm của f.</p><p><strong>Phân tích:</strong> Đạo hàm trực tiếp từng hạng.</p><p><strong>Lời giải:</strong> \(f=4x^3-6x\) trên R.</p><p><strong>Kiểm lại:</strong> Hằng số 2 biến mất; biểu thức đúng với mọi x.</p></div>

    ### 3.2. Xác định hằng số
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B11-02"><p><strong>Đề bài:</strong> \(f=2x\), \(F(2)=7\). Tìm F.</p><p><strong>Phân tích:</strong> Viết họ trước, dùng điều kiện sau.</p><p><strong>Lời giải:</strong> \(F=x^2+C\), \(4+C=7\), \(F=x^2+3\).</p><p><strong>Kiểm lại:</strong> F(2)=7 và đạo hàm bằng 2x.</p></div>

    ### 3.3. Tách đa thức
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B11-03"><p><strong>Đề bài:</strong> Tính \(\int(3x^2-4x+2)dx\).</p><p><strong>Phân tích:</strong> Áp dụng từng lũy thừa.</p><p><strong>Lời giải:</strong> \(x^3-2x^2+2x+C\).</p><p><strong>Kiểm lại:</strong> Đạo hàm cho đúng ba hạng.</p></div>

    ### 3.4. Nhận diện 1/x
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B11-04"><p><strong>Đề bài:</strong> Tính \(\int(3/x+2x)dx\) trên \((0,+\infty)\).</p><p><strong>Phân tích:</strong> Tách trường hợp log và đa thức.</p><p><strong>Lời giải:</strong> \(3\ln x+x^2+C\).</p><p><strong>Kiểm lại:</strong> Trên nhánh âm phải viết ln|x|.</p></div>

    ### 3.5. Hai hàm mũ
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B11-05"><p><strong>Đề bài:</strong> Tính \(\int(3e^x+4^x)dx\).</p><p><strong>Phân tích:</strong> Chia đúng ln cơ số.</p><p><strong>Lời giải:</strong> \(3e^x+4^x/\ln4+C\).</p><p><strong>Kiểm lại:</strong> Đạo hàm số hạng thứ hai đúng 4 mũ x.</p></div>

    ### 3.6. Dấu lượng giác
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B11-06"><p><strong>Đề bài:</strong> Tính \(\int(2\cos x+4\sin x)dx\).</p><p><strong>Phân tích:</strong> Dùng đạo hàm sin và cos.</p><p><strong>Lời giải:</strong> \(2\sin x-4\cos x+C\).</p><p><strong>Kiểm lại:</strong> Đạo hàm của −4cos là +4sin.</p></div>

    ### 3.7. Gia tốc đến vị trí
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B11-07"><p><strong>Đề bài:</strong> \(a=6t,v(0)=1,s(0)=2\). Tìm v,s.</p><p><strong>Phân tích:</strong> Tích phân hai lần, hai điều kiện đầu.</p><p><strong>Lời giải:</strong> \(v=3t^2+1\), \(s=t^3+t+2\).</p><p><strong>Kiểm lại:</strong> v'=6t, s'=v, cả hai điều kiện đúng.</p></div>

    ### 3.8. Độ cao tối đa với vị trí đầu khác 0
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B11-R02-08"><p><strong>Đề bài:</strong> \(v(t)=24-8t\) m/s, \(h(0)=4\) m. Tìm h(2) và độ cao cực đại trước khi chạm đất.</p><p><strong>Phân tích:</strong> Nguyên hàm v, rồi xét dấu v quanh nghiệm 3.</p><p><strong>Lời giải:</strong> \(h=4+24t-4t^2\), \(h(2)=36\) m. Nghiệm dương của h=0 là \(3+\sqrt{10}\); v đổi từ dương sang âm tại 3. \(h(3)=40\) m là cực đại trên miền bay.</p><p><strong>Kiểm lại:</strong> h(0)=4, h'=v, thời điểm 3 nằm trong miền bay.</p></div>

    ### 3.9. Doanh thu từ doanh thu biên
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B11-R02-09"><p><strong>Đề bài:</strong> \(R'(q)=80-q\) (nghìn đồng/sản phẩm), R(0)=0, \(0\le q\le60\). Tìm R(20).</p><p><strong>Phân tích:</strong> Nguyên hàm theo q, không theo thời gian.</p><p><strong>Lời giải:</strong> \(R(q)=80q-q^2/2\), \(R(20)=1400\) nghìn đồng.</p><p><strong>Kiểm lại:</strong> R'=80−q, R(0)=0; mô hình chỉ dùng trong miền đã cho.</p></div>

    ### 3.10. Đưa căn và phân thức về lũy thừa

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B11-R02-10"><p><strong>Đề bài:</strong> Tính \(\int(4\sqrt{x}-2/x^3)\,dx\) với x&gt;0.</p><p><strong>Phân tích:</strong> Viết \(\sqrt{x}=x^{1/2}\), \(1/x^3=x^{-3}\) rồi dùng bảng.</p><p><strong>Lời giải:</strong> \(\frac83x^{3/2}+x^{-2}+C\).</p><p><strong>Kiểm lại:</strong> Đạo hàm cho \(4x^{1/2}-2x^{-3}\); miền dương phù hợp với căn.</p></div>

    ### 3.11. Nhận dạng đạo hàm hàm hợp (SBT)

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B11-R02-11"><p><strong>Đề bài:</strong> Tính \(\int 3(3x+2)^4dx\) trên R.</p><p><strong>Phân tích:</strong> Nếu \(F'=f\) và u khả vi với u(x) thuộc miền của F, thì \((F(u(x)))'=f(u(x))u'(x)\). Nhìn thấy u'=3.</p><p><strong>Lời giải:</strong> \(\int3(3x+2)^4dx=(3x+2)^5/5+C\).</p><p><strong>Kiểm lại:</strong> Đạo hàm kết quả đúng \(3(3x+2)^4\). Đây là vận dụng quy tắc hàm hợp, không nhân/chia tùy ý khi u' không hằng.</p></div>

    ### 3.12. Biến đổi lượng giác trước khi tính (SBT)

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B11-R02-12"><p><strong>Đề bài:</strong> Tính \(\int(2\tan^2 x+1)dx\) trên \((-\pi/2,\pi/2)\).</p><p><strong>Phân tích:</strong> Dùng \(\tan^2x=1/\cos^2x-1\).</p><p><strong>Lời giải:</strong> \(\int(2/\cos^2x-1)dx=2\tan x-x+C\).</p><p><strong>Kiểm lại:</strong> Đạo hàm bằng \(2/\cos^2x-1=2\tan^2x+1\).</p></div>

    ### 3.13. Mũ có hệ số và mô hình bán rã (SBT)

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B11-R02-13"><p><strong>Đề bài:</strong> Một lượng chất có \(N'(t)=-0{,}2N_0e^{-0{,}2t}\), \(N(0)=N_0&gt;0\). Tìm thời điểm N còn một nửa.</p><p><strong>Phân tích:</strong> Dùng \(\int e^{kt}dt=e^{kt}/k+C\) với k≠0 do quy tắc hàm hợp.</p><p><strong>Lời giải:</strong> \(N(t)=N_0e^{-0{,}2t}+C\), từ điều kiện đầu C=0. \(e^{-0{,}2t}=1/2\) cho \(t=5\ln2\) (đơn vị thời gian).</p><p><strong>Kiểm lại:</strong> Đạo hàm N đúng tốc độ giảm; t&gt;0 và \(N(5\ln2)=N_0/2\).</p></div>

=== "Lỗi thường gặp"

    ### 4.1. Đảo chiều từ đạo hàm
    
    ??? tip "Cách tự sửa"
    
        Lấy đạo hàm hàm ứng viên, so toàn bộ biểu thức. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b11-c01); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b11-p01).

    ### 4.2. Họ nguyên hàm và điều kiện đầu
    
    ??? tip "Cách tự sửa"
    
        Chỉ xác định C sau khi lấy nguyên hàm; các khoảng tách rời có thể có C khác nhau. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b11-c02); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b11-p02).

    ### 4.3. Lũy thừa và tuyến tính
    
    ??? tip "Cách tự sửa"
    
        Tăng số mũ một rồi chia; m=−1 là trường hợp khác. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b11-c03); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b11-p03).

    ### 4.4. Khi gặp 1/x
    
    ??? tip "Cách tự sửa"
    
        Không viết ln x trên nhánh âm; không nối qua điểm 0. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b11-c04); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b11-p04).

    ### 4.5. Hàm mũ và hệ số logarit
    
    ??? tip "Cách tự sửa"
    
        Đạo hàm số hạng mũ phải triệt đúng ln a; a=1 là hàm hằng. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b11-c05); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b11-p05).

    ### 4.6. Lượng giác và miền liên tục
    
    ??? tip "Cách tự sửa"
    
        Kiểm dấu của nguyên hàm sin, và tránh các điểm cos=0 hay sin=0. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b11-c06); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b11-p06).

    ### 4.7. Khôi phục đại lượng từ tốc độ
    
    ??? tip "Cách tự sửa"
    
        Không lấy gia tốc làm vị trí; ghi đơn vị và miền thời gian. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b11-c07); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b11-p07).

    ### 4.8. Độ cao cực đại từ vận tốc
    
    ??? tip "Cách tự sửa"
    
        Kiểm miền vật lý và dấu v, không chỉ giải v=0. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b11-c07); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b11-p07).

    [Core Bài 11](../luyen-tap/#b11-core) · [Luyện tập và Tự luận](../luyen-tap/#b11-practice) · [Hỗ trợ khi gặp khó khăn](../luyen-tap/#b11-help) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/)

*Nguồn đối chiếu: SGK Toán 12 Kết nối tri thức, Tập hai, trang in 4–11; SBT Tập hai, trang in 3–8.*
