# Toán 12 · Bài 12. Tích phân

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 12 · CHƯƠNG IV · SGK KẾT NỐI TRI THỨC · TẬP HAI · TRANG 12–18</p><p class="thpt-r4-lead">Hiểu bản chất, đọc hình, tự vận dụng và đối chiếu trước khi luyện tập.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương IV</a><a href="../bai-11/">Bài 11 · Ôn lại</a><a href="../bai-13/">Bài 13 · Học tiếp</a></nav></div>

=== "Khám phá kiến thức"

    Một tốc độ không đổi nhân thời gian cho lượng tích lũy. Khi tốc độ thay đổi, chia khoảng thành lát nhỏ, mỗi lát gần như tốc độ nhân độ dài, rồi cộng. Tích phân là kết quả chính xác của phép cộng dồn ấy. Ôn nguyên hàm, hàm liên tục và dấu.

    ### 1.1. Từ diện tích tích lũy đến nguyên hàm
    
    Với f liên tục và không âm, gọi S(t) là diện tích dưới f từ a tới t. Khi tăng t một lượng nhỏ h, diện tích tăng gần $f(t)h$; chia h rồi lấy giới hạn cho $S'(t)=f(t)$. Vì S(a)=0, nếu F'=f thì S(t)=F(t)-F(a). Đây là cầu nối tới Newton–Leibniz.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHIV-B12-NEWTON-R02.svg" alt="Đường y=x+2 với vùng từ 0 tới t và lát tăng thêm [t,t+h]."/><figcaption>Chiều cao lát gần f(t). Khi h nhỏ, phần diện tích tăng chia h tiến tới f(t); không đọc diện tích từ một điểm.</figcaption></figure>
    
    **Vận dụng.** Với $f(x)=x+2$ trên [0,4], viết S(t) từ 0 đến t bằng diện tích hình thang, kiểm S'(t).
    
    <span data-ped-first-try="1" data-outcome-id="G12-CHIV-B12-O01" data-thpt-first-try-id="THPT-G12-B12-TRY01" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $S(t)=t(2+t+2)/2=t^2/2+2t$. $S'=t+2=f(t)$. $S(4)=16$.
    
    <span data-thpt-help-id="HELP-G12-B12-TRY01" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Tích phân xác định đo lượng cộng dồn; tìm một nguyên hàm F rồi lấy F(b)−F(a), không để lại hằng số +C trong kết quả.

        **Tự sửa:** Phân biệt biến t trong hàm diện tích và cận cố định a. <a href="../luyen-tap/#thpt-g12-b12-c01">Ôn câu nền tảng</a>; <a href="../luyen-tap/#thpt-g12-b12-p01">thử câu luyện tập khác</a>. Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.2. Tuyến tính của lượng tích lũy
    
    Mỗi lát của tổng hai tốc độ bằng tổng hai lát; hệ số hằng đưa ra ngoài. Cùng cận và cùng miền liên tục.
    
    **Vận dụng.** Tính $\int_0^2(3x+4)dx$.
    
    <span data-ped-first-try="2" data-outcome-id="G12-CHIV-B12-O02" data-thpt-first-try-id="THPT-G12-B12-TRY02" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $[3x^2/2+4x]_0^2=6+8=14$.
    
    <span data-thpt-help-id="HELP-G12-B12-TRY02" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Tính tuyến tính cho phép tách các hạng dưới cùng một cặp cận; không được đổi cận của từng hạng tùy ý hoặc bỏ hệ số.

        **Tự sửa:** Giữ hệ số và dùng cận trên trừ cận dưới. <a href="../luyen-tap/#thpt-g12-b12-c02">Ôn câu nền tảng</a>; <a href="../luyen-tap/#thpt-g12-b12-p02">thử câu luyện tập khác</a>. Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.3. Ghép cận và đổi chiều
    
    Đi từ a tới c rồi c tới b cho cùng độ biến thiên có dấu như a tới b. Đổi hướng toàn hành trình làm đổi dấu; từ a tới a bằng 0.
    
    **Vận dụng.** Biết $\int_1^4 f=7$, $\int_4^6 f=-3$. Tính $\int_6^1 f$ và $\int_4^4 f$.
    
    <span data-ped-first-try="3" data-outcome-id="G12-CHIV-B12-O03" data-thpt-first-try-id="THPT-G12-B12-TRY03" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $\int_1^6 f=4$, nên $\int_6^1 f=-4$; tích phân từ 4 tới 4 bằng 0.
    
    <span data-thpt-help-id="HELP-G12-B12-TRY03" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Ghép hai khoảng đúng thứ tự và khi đảo cận phải đổi dấu; tích phân có thể âm dù tổng quãng đường hay diện tích luôn không âm.

        **Tự sửa:** Vẽ trục cận và mũi tên chiều đi. <a href="../luyen-tap/#thpt-g12-b12-c03">Ôn câu nền tảng</a>; <a href="../luyen-tap/#thpt-g12-b12-p03">thử câu luyện tập khác</a>. Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.4. Diện tích dưới hàm không âm
    
    Chiều cao f(x) không âm thì tổng lát mỏng bằng diện tích hình phẳng. Kiểm dấu và cận trước khi dùng tích phân.
    
    **Vận dụng.** Tính diện tích dưới $y=2x+1$ trên [1,3].
    
    <span data-ped-first-try="4" data-outcome-id="G12-CHIV-B12-O04" data-thpt-first-try-id="THPT-G12-B12-TRY04" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $f>0$; $\int_1^3(2x+1)dx=[x^2+x]_1^3=12-2=10$.
    
    <span data-thpt-help-id="HELP-G12-B12-TRY04" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Diện tích dưới f trên [a,b] chỉ bằng tích phân f nếu f≥0 toàn khoảng; nếu f âm phải xét trị tuyệt đối hoặc chia đoạn.

        **Tự sửa:** Kiểm bằng hình thang rộng 2, hai cạnh 3 và 7. <a href="../luyen-tap/#thpt-g12-b12-c04">Ôn câu nền tảng</a>; <a href="../luyen-tap/#thpt-g12-b12-p04">thử câu luyện tập khác</a>. Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.5. Tích phân có dấu và diện tích thật
    
    Lát nằm dưới trục hoành góp âm vào tích phân, nhưng diện tích vẫn dương. Khi hàm đổi dấu, chia ở điểm đổi dấu hoặc lấy tích phân trị tuyệt đối.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHIV-B12-SIGNED-R02.svg" alt="Đồ thị y=x−1 cắt Ox tại 1; phần âm trên [0,1] và phần dương trên [1,4]."/><figcaption>Đọc từng vùng theo dấu; diện tích là tổng hai độ lớn, tích phân là hiệu phần dương và phần âm.</figcaption></figure>
    
    **Vận dụng.** Với $f(x)=x-2$ trên [0,5], tính tích phân và diện tích giới hạn với Ox.
    
    <span data-ped-first-try="5" data-outcome-id="G12-CHIV-B12-O05" data-thpt-first-try-id="THPT-G12-B12-TRY05" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Tích phân $[x^2/2-2x]_0^5=5/2$. Hai tam giác có diện tích 2 và 9/2, tổng 13/2. Không lấy |5/2| làm diện tích.
    
    <span data-thpt-help-id="HELP-G12-B12-TRY05" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Tích phân có dấu có thể triệt tiêu hai miền trái dấu, còn diện tích hình phẳng là tổng độ lớn từng miền nên cần tách tại nghiệm đổi dấu.

        **Tự sửa:** Tìm nghiệm x=2; vẽ vùng âm và dương. <a href="../luyen-tap/#thpt-g12-b12-c05">Ôn câu nền tảng</a>; <a href="../luyen-tap/#thpt-g12-b12-p05">thử câu luyện tập khác</a>. Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.6. Tích phân hàm mũ và lượng giác
    
    Dùng bảng nguyên hàm B11, thế cận chính xác rồi trừ. Hàm phải liên tục trên cả đoạn, không chỉ tại hai đầu.
    
    **Vận dụng.** Tính $\int_0^\pi 2\sin x\,dx$ và giải thích vì sao không tính $\int_{-1}^1 dx/x$ theo Newton–Leibniz.
    
    <span data-ped-first-try="6" data-outcome-id="G12-CHIV-B12-O06" data-thpt-first-try-id="THPT-G12-B12-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $[-2\cos x]_0^\pi=4$. Hàm 1/x không xác định tại 0, không liên tục trên [−1,1]; không dùng công thức SGK trên đoạn này.
    
    <span data-thpt-help-id="HELP-G12-B12-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Đạo hàm của −cos x là sin x, của sin x là cos x; không được áp sai giá trị lượng giác đặc biệt ở hai cận.

        **Tự sửa:** Không lấy ln|1|−ln|−1| qua điểm gián đoạn. <a href="../luyen-tap/#thpt-g12-b12-c06">Ôn câu nền tảng</a>; <a href="../luyen-tap/#thpt-g12-b12-p06">thử câu luyện tập khác</a>. Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.7. Lượng tích lũy và vận tốc có dấu
    
    Độ dời là tích phân vận tốc; quãng đường là tích phân tốc độ |v|. Lưu lượng không âm nhân thời gian cho lượng thực nhận.
    
    **Vận dụng.** $v(t)=6-4t$ m/s trên [0,3]. Tính độ dời và quãng đường.
    
    <span data-ped-first-try="7" data-outcome-id="G12-CHIV-B12-O07" data-thpt-first-try-id="THPT-G12-B12-TRY07" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** v đổi dấu tại 1,5. Độ dời $[6t-2t^2]_0^3=0$; quãng đường là hai phần 4,5+4,5=9 m.
    
    <span data-thpt-help-id="HELP-G12-B12-TRY07" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Lượng nước/chuyển động là tích phân tốc độ biến thiên theo biến thời gian với đơn vị đồng nhất; nếu vận tốc đổi dấu thì độ dời khác quãng đường.

        **Tự sửa:** Giữ dấu cho độ dời, đổi dấu vùng âm cho quãng đường. <a href="../luyen-tap/#thpt-g12-b12-c07">Ôn câu nền tảng</a>; <a href="../luyen-tap/#thpt-g12-b12-p07">thử câu luyện tập khác</a>. Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.8. Giá trị trung bình của hàm
    
    Muốn một mức hằng tạo cùng tổng lượng trên [a,b], lấy tổng chia b−a. Giá trị trung bình của f liên tục là $\frac{1}{b-a}\int_a^b f(x)dx$, với a<b.
    
    **Vận dụng.** Nhiệt độ $T(t)=18+2t$ °C, t là số giờ từ 0 đến 4. Tìm nhiệt độ trung bình.
    
    <span data-ped-first-try="8" data-outcome-id="G12-CHIV-B12-O07" data-thpt-first-try-id="THPT-G12-B12-TRY08" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $\int_0^4 T(t)dt=72+16=88$ °C·giờ. Chia 4 giờ được 22°C.
    
    <span data-thpt-help-id="HELP-G12-B12-TRY08" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Giá trị trung bình của hàm liên tục trên [a,b] là tích phân chia b−a>0, không phải bản thân tích phân; nên kiểm nằm giữa min và max.

        **Tự sửa:** Đừng nhầm tích phân với trung bình; kiểm kết quả giữa min và max. <a href="../luyen-tap/#thpt-g12-b12-c07">Ôn câu nền tảng</a>; <a href="../luyen-tap/#thpt-g12-b12-p07">thử câu luyện tập khác</a>. Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

=== "Kiến thức SGK"

    ### 2.1. Khái niệm tích phân
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khái niệm tích phân.</strong><p>Cho f liên tục trên đoạn [a,b], a&lt;b. Với nguyên hàm F của f, \(\int_a^b f(x)\,dx=F(b)-F(a)=[F(x)]_a^b\). Tích phân là một số, không phụ thuộc chọn hằng số C của F. Khi f không âm, tích phân bằng diện tích hình thang cong dưới đồ thị trên [a,b]. Biến lấy tích phân chỉ là biến giả: \(\int_a^b f(x)dx=\int_a^b f(t)dt\).</p></div>

    ### 2.2. Tính chất của tích phân
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất của tích phân.</strong><p>\(\int_a^a fdx=0;\ \int_a^b fdx=-\int_b^a fdx;\ \int_a^b fdx=\int_a^c fdx+\int_c^b fdx\) khi f liên tục trên khoảng chứa các cận. \(\int_a^b(\alpha f+\beta g)dx=\alpha\int_a^b fdx+\beta\int_a^b gdx\) với f,g liên tục trên đoạn xét. Khi a&lt;b, f≤g thì tích phân f≤ tích phân g.</p></div>

    **Vận dụng:** Độ biến thiên của đại lượng $Q$ khả vi với đạo hàm liên tục là $Q(b)-Q(a)=\int_a^b Q'(t)dt$. Giá trị trung bình của f liên tục trên [a,b] là $\bar f=\frac1{b-a}\int_a^b f(x)dx$ với a<b. Khi tính quãng đường trên [a,b], dùng $\int_a^b|v(t)|dt$, không dùng trị tuyệt đối của độ dời nếu đổi chiều.

=== "Ví dụ"

    ### 3.1. Hai cận
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B12-01"><p><strong>Đề bài:</strong> Tính \(\int_0^3 2x\,dx\).</p><p><strong>Phân tích:</strong> Tìm nguyên hàm x².</p><p><strong>Lời giải:</strong> \([x^2]_0^3=9\).</p><p><strong>Kiểm lại:</strong> Kết quả không có +C.</p></div>

    ### 3.2. Tuyến tính
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B12-02"><p><strong>Đề bài:</strong> Tính \(\int_0^1(4x+2)dx\).</p><p><strong>Phân tích:</strong> Nguyên hàm từng hạng.</p><p><strong>Lời giải:</strong> \([2x^2+2x]_0^1=4\).</p><p><strong>Kiểm lại:</strong> Hàm dương, kết quả dương.</p></div>

    ### 3.3. Ghép và đảo cận
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B12-03"><p><strong>Đề bài:</strong> \(\int_0^2 f=4,\int_2^5 f=-1\). Tìm \(\int_5^0 f\).</p><p><strong>Phân tích:</strong> Ghép theo chiều tăng trước.</p><p><strong>Lời giải:</strong> \(\int_0^5f=3\), nên \(\int_5^0f=-3\).</p><p><strong>Kiểm lại:</strong> Đảo chiều đúng một dấu trừ.</p></div>

    ### 3.4. Diện tích tam giác
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B12-04"><p><strong>Đề bài:</strong> Tính diện tích dưới y=3x trên [0,2].</p><p><strong>Phân tích:</strong> Hàm không âm.</p><p><strong>Lời giải:</strong> \([3x^2/2]_0^2=6\).</p><p><strong>Kiểm lại:</strong> Tam giác đáy 2 cao 6 cho 6.</p></div>

    ### 3.5. Hai phần trái dấu
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B12-05"><p><strong>Đề bài:</strong> Tính \(\int_{-1}^1 xdx\) và \(\int_{-1}^1|x|dx\).</p><p><strong>Phân tích:</strong> Phân hai phía của 0.</p><p><strong>Lời giải:</strong> Tích phân có dấu bằng 0; diện tích là 1/2+1/2=1.</p><p><strong>Kiểm lại:</strong> Không lấy |0| thay diện tích.</p></div>

    ### 3.6. Cận lượng giác
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B12-06"><p><strong>Đề bài:</strong> Tính \(\int_0^{\pi/2}(\sin x+\cos x)dx\).</p><p><strong>Phân tích:</strong> Nguyên hàm −cos+sin.</p><p><strong>Lời giải:</strong> \([-\cos x+\sin x]_0^{\pi/2}=1-(-1)=2\).</p><p><strong>Kiểm lại:</strong> Đúng giá trị đặc biệt ở cận.</p></div>

    ### 3.7. Dòng chảy
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B12-07"><p><strong>Đề bài:</strong> \(q(t)=5+2t\) lít/phút, trong [0,3]. Tính lượng nước.</p><p><strong>Phân tích:</strong> Lưu lượng dương, tích phân theo phút.</p><p><strong>Lời giải:</strong> \([5t+t^2]_0^3=24\) lít.</p><p><strong>Kiểm lại:</strong> Đơn vị lít/phút nhân phút.</p></div>

    ### 3.8. Giá trị trung bình nhiệt độ
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B12-R02-08"><p><strong>Đề bài:</strong> \(T(t)=20+t^2/2\) °C, t là số giờ kể từ 6h. Tìm trung bình 6h–10h.</p><p><strong>Phân tích:</strong> Cận [0,4], chia độ dài khoảng.</p><p><strong>Lời giải:</strong> \(\bar T=\frac14[20t+t^3/6]_0^4=68/3\) °C (≈22,67).</p><p><strong>Kiểm lại:</strong> Nằm giữa 20 và 28°C.</p></div>

    ### 3.9. Quãng đường hãm đến lúc dừng
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B12-R02-09"><p><strong>Đề bài:</strong> Xe đang chạy với \(v(t)=18-6t\) m/s đến khi dừng. Tìm thời gian và quãng đường hãm.</p><p><strong>Phân tích:</strong> Tìm lúc v=0, chỉ tích phân trong miền hãm.</p><p><strong>Lời giải:</strong> t=3 s; \(\int_0^3(18-6t)dt=[18t-3t^2]_0^3=27\) m.</p><p><strong>Kiểm lại:</strong> Tam giác đáy 3 cao 18 có diện tích 27; không kéo dài v sang âm.</p></div>

    ### 3.10. Ý nghĩa hình học: một phần tư hình tròn

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B12-R02-10"><p><strong>Đề bài:</strong> Tính \(\int_0^5\sqrt{25-x^2}\,dx\) bằng hình học.</p><p><strong>Phân tích:</strong> Đồ thị là cung tròn \(x^2+y^2=25\) ở góc phần tư thứ nhất, y≥0. Bảng nguyên hàm cơ bản không cần xử lý trực tiếp căn này.</p><p><strong>Lời giải:</strong> Tích phân là diện tích một phần tư hình tròn bán kính 5: \(25\pi/4\).</p><p><strong>Kiểm lại:</strong> Cận [0,5] và y≥0; không nhầm với toàn hình tròn.</p></div>

    ### 3.11. Lợi nhuận thay đổi trong một khoảng

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B12-R02-11"><p><strong>Đề bài:</strong> Lợi nhuận biên \(P'(q)=40-0{,}2q\) nghìn đồng/sản phẩm. Tính mức tăng lợi nhuận khi q từ 10 đến 30.</p><p><strong>Phân tích:</strong> Cần hiệu P(30)−P(10), không cần biết P(0).</p><p><strong>Lời giải:</strong> \(\int_{10}^{30}(40-0{,}2q)dq=[40q-0{,}1q^2]_{10}^{30}=720\) nghìn đồng.</p><p><strong>Kiểm lại:</strong> Lợi nhuận biên từ 38 xuống 34, trung bình 36 nhân 20 bằng 720.</p></div>

    ### 3.12. Giá trị trung bình trên một miền không gian

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B12-R02-12"><p><strong>Đề bài:</strong> Mô hình tốc độ dòng chảy \(v(r)=k(9-r^2)\), 0≤r≤3, k&gt;0. Tính trung bình của v theo biến r.</p><p><strong>Phân tích:</strong> Đây là trung bình theo bán kính r, không phải bình quân có trọng số theo diện tích tiết diện.</p><p><strong>Lời giải:</strong> \(\bar v=\frac13\int_0^3 k(9-r^2)dr=6k\), trong khi \(v_{\max}=9k\).</p><p><strong>Kiểm lại:</strong> \(0\le6k\le9k\); không dùng kết quả này cho trung bình diện tích nếu đề khác.</p></div>

=== "Lỗi thường gặp"

    ### 4.1. Từ diện tích tích lũy đến nguyên hàm
    
    ??? tip "Cách tự sửa"
    
        Phân biệt biến t trong hàm diện tích và cận cố định a. <a href="../luyen-tap/#thpt-g12-b12-c01">Ôn lại câu Core</a>; <a href="../luyen-tap/#thpt-g12-b12-p01">luyện câu khác rồi quay lại</a>.

    ### 4.2. Tuyến tính của lượng tích lũy
    
    ??? tip "Cách tự sửa"
    
        Giữ hệ số và dùng cận trên trừ cận dưới. <a href="../luyen-tap/#thpt-g12-b12-c02">Ôn lại câu Core</a>; <a href="../luyen-tap/#thpt-g12-b12-p02">luyện câu khác rồi quay lại</a>.

    ### 4.3. Ghép cận và đổi chiều
    
    ??? tip "Cách tự sửa"
    
        Vẽ trục cận và mũi tên chiều đi. <a href="../luyen-tap/#thpt-g12-b12-c03">Ôn lại câu Core</a>; <a href="../luyen-tap/#thpt-g12-b12-p03">luyện câu khác rồi quay lại</a>.

    ### 4.4. Diện tích dưới hàm không âm
    
    ??? tip "Cách tự sửa"
    
        Kiểm bằng hình thang rộng 2, hai cạnh 3 và 7. <a href="../luyen-tap/#thpt-g12-b12-c04">Ôn lại câu Core</a>; <a href="../luyen-tap/#thpt-g12-b12-p04">luyện câu khác rồi quay lại</a>.

    ### 4.5. Tích phân có dấu và diện tích thật
    
    ??? tip "Cách tự sửa"
    
        Tìm nghiệm x=2; vẽ vùng âm và dương. <a href="../luyen-tap/#thpt-g12-b12-c05">Ôn lại câu Core</a>; <a href="../luyen-tap/#thpt-g12-b12-p05">luyện câu khác rồi quay lại</a>.

    ### 4.6. Tích phân hàm mũ và lượng giác
    
    ??? tip "Cách tự sửa"
    
        Không lấy ln|1|−ln|−1| qua điểm gián đoạn. <a href="../luyen-tap/#thpt-g12-b12-c06">Ôn lại câu Core</a>; <a href="../luyen-tap/#thpt-g12-b12-p06">luyện câu khác rồi quay lại</a>.

    ### 4.7. Lượng tích lũy và vận tốc có dấu
    
    ??? tip "Cách tự sửa"
    
        Giữ dấu cho độ dời, đổi dấu vùng âm cho quãng đường. <a href="../luyen-tap/#thpt-g12-b12-c07">Ôn lại câu Core</a>; <a href="../luyen-tap/#thpt-g12-b12-p07">luyện câu khác rồi quay lại</a>.

    ### 4.8. Giá trị trung bình của hàm
    
    ??? tip "Cách tự sửa"
    
        Đừng nhầm tích phân với trung bình; kiểm kết quả giữa min và max. <a href="../luyen-tap/#thpt-g12-b12-c07">Ôn lại câu Core</a>; <a href="../luyen-tap/#thpt-g12-b12-p07">luyện câu khác rồi quay lại</a>.

    <a href="../luyen-tap/#b12-core">Core Bài 12</a> · <a href="../luyen-tap/#b12-practice">Luyện tập và Tự luận</a> · <a href="../luyen-tap/#b12-help">Hỗ trợ khi gặp khó khăn</a> · <a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a>

    <p class="thpt-r4-footnote">Nguồn học thuật S1: SGK Toán 12 Kết nối tri thức với cuộc sống, Tập hai, Bài 12, trang in 12–18; SBT cùng bộ, trang in 9–13. Đối chiếu số trang theo biên bản PDF gốc đã kiểm; không đồng nhất chỉ số trang PDF với trang in khi bị đảo.</p>
