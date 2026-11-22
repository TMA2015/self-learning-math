# Bài 33. Đạo hàm cấp hai

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG IX · SGK KNTT TẬP HAI</p><p class="thpt-r4-lead">Đạo hàm lần hai đo sự thay đổi của đạo hàm lần một; dùng để tính gia tốc và giải bài toán ngược.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương IX</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Một vật đang vận động không nhất thiết giữ vận tốc cố định. Đạo hàm lần một mô tả vận tốc; khi vận tốc cũng thay đổi, ta cần thêm một lần đạo hàm để đo gia tốc. Hai dấu phẩy không có nghĩa là bình phương.

    ### 1.1. Đạo hàm của đạo hàm
    
    Trước tiên coi f′ là một hàm mới. Nếu chính f′ có đạo hàm tại điểm đang xét thì đó là f″. Có f′ không đủ để suy f″ tồn tại.
    
    **Vận dụng.** Với $f(x)=x^2+3x$, tính $f'$, $f''$ và $(f')^2$.
    
    <span data-ped-first-try="1" data-outcome-id="G11-B33-SECOND_DEF" data-thpt-first-try-id="THPT-G11-B33-TRY01" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $f'=2x+3$, $f''=2$, $(f')^2=(2x+3)^2$.
    
    <span data-thpt-help-id="HELP-G11-B33-TRY01" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Đạo hàm cấp hai là đạo hàm của hàm f', không phải bình phương giá trị f'.

        **Tự sửa:** Không bình phương đạo hàm; đạo hàm tiếp một lần. <a href="../luyen-tap/?item=THPT-G11-CHIX-B33-C01">Luyện lại B33-C01</a>

    ### 1.2. Hai lần đạo hàm của đa thức
    
    Mỗi lần áp dụng quy tắc lũy thừa và đạo hàm hằng. Nếu đề cho điều kiện f′, f″, có thể lập phương trình tìm hệ số ngược.
    
    **Vận dụng.** Tính $f''(2)$ với $f=3x^3-2x^2+4$.
    
    <span data-ped-first-try="2" data-outcome-id="G11-B33-POLYNOMIAL" data-thpt-first-try-id="THPT-G11-B33-TRY02" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $f'=9x^2-4x$, $f''=18x-4$, $f''(2)=32$.
    
    <span data-thpt-help-id="HELP-G11-B33-TRY02" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Thay x vào f' trước khi lấy đạo hàm sẽ làm mất thông tin hàm và cho đạo hàm sai.

        **Tự sửa:** Tìm cả hàm f″ trước khi thay x=2. <a href="../luyen-tap/?item=THPT-G11-CHIX-B33-C02">Luyện lại B33-C02</a>

    ### 1.3. Hàm hợp ở cả hai lượt
    
    Nếu lần đầu dùng quy tắc hàm hợp, lần sau cũng phải xét lại cấu trúc biểu thức. Ví dụ hệ số trong sin và cos xuất hiện ở mỗi lượt đạo hàm.
    
    **Vận dụng.** Tìm f″ của $f(x)=\cos(3x)+e^{2x}$.
    
    <span data-ped-first-try="3" data-outcome-id="G11-B33-TRIG_EXP" data-thpt-first-try-id="THPT-G11-B33-TRY03" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $f'=-3\sin(3x)+2e^{2x}$; $f''=-9\cos(3x)+4e^{2x}$.
    
    <span data-thpt-help-id="HELP-G11-B33-TRY03" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Quy tắc hàm hợp được áp dụng ở cả hai lần đạo hàm, bao gồm hệ số pha và dấu.

        **Tự sửa:** Hai lượt đều nhân đạo hàm hàm trong. <a href="../luyen-tap/?item=THPT-G11-CHIX-B33-C03">Luyện lại B33-C03</a>

    ### 1.4. Đọc vận tốc và gia tốc
    
    Nếu tọa độ là s(t) (m) và t (s), $v=s'$ mang m/s, $a=v'=s''$ mang m/s². Đồ thị vận tốc và gia tốc mô tả hai đại lượng khác nhau.
    
    <figure class="thpt-r4-plot thpt-r4-calculus-figure"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHIX-B33-01_R00.svg" alt="Hai đồ thị cùng trục thời gian, đơn vị tung độ khác nhau; tại t=1 vận tốc −1 và gia tốc 0."/><figcaption>Đọc hình: Cùng hàm vị trí \(s=t^3-3t^2+2t\) (m), đồ thị vận tốc \(v=3t^2-6t+2\) (m/s) là parabol, đồ thị gia tốc \(a=6t-6\) (m/s²) là đường thẳng. Cùng đọc tại t=1: v=−1, a=0. Đỉnh đồ thị v ứng với a=0, không phải v=0.</figcaption></figure>
    
    **Vận dụng.** $s(t)=2t^3-5t^2$ m, t≥0. Tính v(1), a(1) và đơn vị.
    
    <span data-ped-first-try="4" data-outcome-id="G11-B33-ACCELERATION" data-thpt-first-try-id="THPT-G11-B33-TRY04" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $v=6t^2-10t$, $a=12t-10$; v(1)=−4 m/s, a(1)=2 m/s².
    
    <span data-thpt-help-id="HELP-G11-B33-TRY04" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Gia tốc là đạo hàm của hàm vận tốc, không phải đạo hàm của một vận tốc đã thế số.

        **Tự sửa:** Không thay t vào s′ rồi đạo hàm hằng số đó. <a href="../luyen-tap/?item=THPT-G11-CHIX-B33-C04">Luyện lại B33-C04</a>

    ### 1.5. Dấu không đồng nghĩa nhanh hay chậm
    
    Nếu v≠0, tốc độ là |v|. Vận tốc và gia tốc cùng dấu thì tốc độ tăng cục bộ nếu a≠0; trái dấu thì giảm. Tại v=0 cần xét lân cận, không tự dùng quy tắc dấu.
    
    **Vận dụng.** Một vật tại một thời điểm có v=−3 cm/s và a=−4 cm/s². Nhận xét chiều chuyển động, chiều gia tốc và tốc độ.
    
    <span data-ped-first-try="5" data-outcome-id="G11-B33-SIGN_INTERPRET" data-thpt-first-try-id="THPT-G11-B33-TRY05" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Vật đi theo chiều âm, gia tốc hướng âm, độ lớn vận tốc đang tăng tại thời điểm đó.
    
    <span data-thpt-help-id="HELP-G11-B33-TRY05" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Gia tốc âm chỉ nói về hướng thay đổi vận tốc; nhanh/chậm dần còn tùy dấu vận tốc.

        **Tự sửa:** Gia tốc âm không tự có nghĩa chậm dần. <a href="../luyen-tap/?item=THPT-G11-CHIX-B33-C05">Luyện lại B33-C05</a>

    ### 1.6. Tìm hệ số ngược
    
    Vận dụng kiến thức vào một tình huống mới. Xác định điều kiện và phương pháp trước khi tính.
    
    **Vận dụng.** $f(x)=ax^2+bx+2$ có $f'(1)=5,f''(1)=6$. Tìm a,b.
    
    <span data-ped-first-try="6" data-outcome-id="G11-B33-POLYNOMIAL" data-thpt-first-try-id="THPT-G11-B33-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $2a=6$ nên a=3; $6+b=5$ nên b=−1.
    
    <span data-thpt-help-id="HELP-G11-B33-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Hai ràng buộc f'(a) và f''(a) phải thành hai phương trình đạo hàm khác nhau.

        **Tự sửa:** Lập riêng hai điều kiện, không sử dụng giá trị f thay cho f′. <a href="../luyen-tap/?item=THPT-G11-CHIX-B33-C02">Luyện lại B33-C02</a>

    ### 1.7. Chặn độ lớn đạo hàm cấp hai
    
    Vận dụng kiến thức vào một tình huống mới. Xác định điều kiện và phương pháp trước khi tính.
    
    **Vận dụng.** Chứng minh $|g''(x)|\le8$ với $g(x)=2\cos(2x)+3$.
    
    <span data-ped-first-try="7" data-outcome-id="G11-B33-TRIG_EXP" data-thpt-first-try-id="THPT-G11-B33-TRY07" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $g'=-4\sin2x$, $g''=-8\cos2x$. Vì $|\cos2x|\le1$, suy ra cận 8; đạt tại x=0.
    
    <span data-thpt-help-id="HELP-G11-B33-TRY07" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Kiểm vài giá trị không chứng minh được một cận cho mọi x; cần bất đẳng thức tổng quát.

        **Tự sửa:** Không kết luận từ việc thử một vài điểm. <a href="../luyen-tap/?item=THPT-G11-CHIX-B33-C03">Luyện lại B33-C03</a>

    ### 1.8. Gia tốc dao động
    
    Vận dụng kiến thức vào một tình huống mới. Xác định điều kiện và phương pháp trước khi tính.
    
    **Vận dụng.** $s(t)=7+\sin(2\pi t)$ cm. Tính gia tốc tại t=1/4 s.
    
    <span data-ped-first-try="8" data-outcome-id="G11-B33-ACCELERATION" data-thpt-first-try-id="THPT-G11-B33-TRY08" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $a(t)=-4\pi^2\sin(2\pi t)$ cm/s²; $a(1/4)=-4\pi^2$ cm/s².
    
    <span data-thpt-help-id="HELP-G11-B33-TRY08" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Đạo hàm pha lượng giác tính theo radian; mỗi lần đều nhân đạo hàm của pha.

        **Tự sửa:** Mỗi lần đạo hàm nhân 2π; không dùng độ đo góc theo độ. <a href="../luyen-tap/?item=THPT-G11-CHIX-B33-P04">Luyện lại B33-P04</a>

=== "Kiến thức SGK"

    ### 2.1. Khái niệm đạo hàm cấp hai
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khái niệm đạo hàm cấp hai.</strong><p>Cho f có đạo hàm f′ trên một khoảng. Nếu f′ có đạo hàm tại x, đạo hàm ấy gọi là đạo hàm cấp hai của f tại x:
    
    \[f''(x)=(f'(x))'.\]
    
    Nếu tồn tại ở mọi x của khoảng, đó là hàm đạo hàm cấp hai. Dùng quy tắc B32 cho f′, không lấy bình phương hoặc thay số trước lần đạo hàm tiếp theo. Hàm \(f(x)=x|x|\) có \(f'(x)=2|x|\) trên \(\mathbb R\) (tại 0, dùng thương sai phân \(|h|\to0\)), nhưng f′ không khả vi tại 0 nên f″(0) không tồn tại. Các hàm logarit, thương, tan/cot phải giữ miền gốc và điều kiện đạo hàm; ví dụ \((\ln u)''\) khi u&gt;0 và u khả vi cấp hai có thể tính bằng đạo hàm của \(u'/u\). Không tự kết luận dấu f″ cho tính đơn điệu của f.</p></div>

    ### 2.2. Ý nghĩa cơ học của đạo hàm cấp hai
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Gia tốc tức thời.</strong><p>Nếu s(t) là tọa độ trên đường thẳng, v(t)=s′(t). Gia tốc tức thời là tốc độ biến đổi của vận tốc:
    
    \[a(t)=v'(t)=s''(t).\]
    
    Nếu s tính bằng m, t bằng s, v tính m/s và a tính m/s². Khi v≠0, đạo hàm của |v| bằng a nếu v&gt;0 và −a nếu v&lt;0; từ đó xét cùng/trái dấu. Tại v=0 cần xét hai phía và khoảng mô hình; a=0 tại một thời điểm chưa có nghĩa vận tốc luôn không đổi. Với dao động \(s(t)=c+A\sin(\omega t+\phi)\) (hoặc cos), mỗi lần đạo hàm nhân thêm \(\omega\). Tính a(t) trước rồi thế thời điểm, góc radian, giữ đơn vị. Không ngoại suy công thức sau khi vật rời miền thời gian mô tả.</p></div>

=== "Ví dụ"

    ### 3.1. Hai lần đa thức
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHIX-B33-01"><p><strong>Đề bài:</strong> \(f(x)=2x^4-3x^2+6\); tìm f''.</p><p><strong>Phân tích:</strong> Lấy đạo hàm hai lần, không bình phương f'.</p><p><strong>Lời giải:</strong> \(f'=8x^3-6x\), \(f''=24x^2-6\).</p><p><strong>Kiểm lại:</strong> Lấy đạo hàm từng hệ số; đạo hàm cấp hai không phải bình phương.</p></div>

    ### 3.2. Hàm sin bậc hai
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHIX-B33-02"><p><strong>Đề bài:</strong> \(f(x)=\sin(2x)\); tìm f''.</p><p><strong>Phân tích:</strong> Quy tắc hàm hợp áp dụng ở cả hai lượt; đạo hàm cos mang dấu âm.</p><p><strong>Lời giải:</strong> \(f'=2\cos(2x)\), \(f''=-4\sin(2x)\).</p><p><strong>Kiểm lại:</strong> Hệ số 2 xuất hiện ở cả hai lượt, dấu âm đến từ cos.</p></div>

    ### 3.3. Mũ bậc hai
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHIX-B33-03"><p><strong>Đề bài:</strong> \(f(x)=e^{3x}\); tìm f''.</p><p><strong>Phân tích:</strong> Nhân 3 ở mỗi lần lấy đạo hàm.</p><p><strong>Lời giải:</strong> \(f'=3e^{3x}\), \(f''=9e^{3x}\).</p><p><strong>Kiểm lại:</strong> Hai lượt đều nhân 3.</p></div>

    ### 3.4. Gia tốc từ vị trí
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHIX-B33-04"><p><strong>Đề bài:</strong> \(s(t)=t^3-2t^2+1\) m; gia tốc t=1.</p><p><strong>Phân tích:</strong> Không nhầm vận tốc v(1)=-1 với a(1)=2.</p><p><strong>Lời giải:</strong> \(v=3t^2-4t\) m/s; \(a=6t-4\) m/s², \(a(1)=2\) m/s².</p><p><strong>Kiểm lại:</strong> v(1)=−1 m/s, a(1)=2 m/s²; tốc độ đang giảm.</p></div>

    ### 3.5. Vận tốc và gia tốc cùng dấu
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHIX-B33-05"><p><strong>Đề bài:</strong> Vật có v=-5 m/s, a=-2 m/s² tại t0; đang nhanh hay chậm dần?</p><p><strong>Phân tích:</strong> Gia tốc âm không đồng nghĩa chậm dần.</p><p><strong>Lời giải:</strong> Vì v và a cùng âm, tốc độ |v| đang tăng tại thời điểm đó (nhanh dần theo chiều âm).</p><p><strong>Kiểm lại:</strong> Vật đang đi chiều âm; vận tốc và gia tốc cùng dấu.</p></div>

    ### 3.6. Mô hình bóng bay
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHIX-B33-06"><p><strong>Đề bài:</strong> \(h(t)=8t-2t^2\) m trong 0≤t≤4; tìm h'' và đơn vị.</p><p><strong>Phân tích:</strong> Đối chiếu h(0)=h(4)=0 trước suy chuyển động.</p><p><strong>Lời giải:</strong> \(v=8-4t\) m/s, \(a=-4\) m/s²; chỉ diễn giải trong khoảng thời gian mô hình đang áp dụng.</p><p><strong>Kiểm lại:</strong> Tại t=2, v=0 nhưng a=−4; không suy mô hình ngoài khoảng.</p></div>

    ### 3.7. Đạo hàm cấp hai của tích với hàm mũ
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B33-R02-07"><p><strong>Đề bài:</strong> Tìm \(f''(0)\) nếu \(f(x)=(x^2+x)e^x\).</p><p><strong>Phân tích:</strong> Quy tắc tích dùng ở cả hai lượt; chưa thay 0 vào f′.</p><p><strong>Lời giải:</strong> \(f'=(x^2+3x+1)e^x\); \(f''=(2x+3+x^2+3x+1)e^x=(x^2+5x+4)e^x\). Suy ra \(f''(0)=4\).</p><p><strong>Kiểm lại:</strong> Tại 0, e⁰=1.</p></div>

    ### 3.8. Đạo hàm cấp hai của logarit và tan
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B33-R02-08"><p><strong>Đề bài:</strong> Tìm đạo hàm cấp hai của \(p(x)=\ln(3x+2)\) và \(q(x)=\tan(3x)\), nêu miền.</p><p><strong>Phân tích:</strong> Tính trước đạo hàm lần một; dùng quy tắc hợp khi lấy lần hai.</p><p><strong>Lời giải:</strong> \(p'=3/(3x+2)\), \(p''=-9/(3x+2)^2\) với x&gt;−2/3. \(q'=3/\cos^2(3x)\); \(q''=18\sin(3x)/\cos^3(3x)\) khi \(\cos(3x)\ne0\).</p><p><strong>Kiểm lại:</strong> Không mở rộng miền của logarit sang đối số âm.</p></div>

    ### 3.9. Tìm hệ số từ hai điều kiện đạo hàm
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B33-R02-09"><p><strong>Đề bài:</strong> Cho \(P(x)=ax^2+bx+5\) và \(P'(2)=3\), \(P''(2)=-4\). Tìm a,b.</p><p><strong>Phân tích:</strong> Biểu diễn đạo hàm theo tham số, giải điều kiện lần hai trước.</p><p><strong>Lời giải:</strong> \(P'=2ax+b\), \(P''=2a\). Từ 2a=−4 suy a=−2. Điều kiện \(4a+b=3\) cho b=11.</p><p><strong>Kiểm lại:</strong> Kiểm \(P'(2)=-8+11=3\), \(P''(2)=-4\).</p></div>

    ### 3.10. Chứng minh một cận đạo hàm cấp hai
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B33-R02-10"><p><strong>Đề bài:</strong> Cho \(f(x)=3\sin^2 x+1\). Chứng minh \(|f''(x)|\le6\) với mọi x.</p><p><strong>Phân tích:</strong> Dùng \(\sin^2 x=(1-\cos2x)/2\) để giảm tích hàm hợp.</p><p><strong>Lời giải:</strong> \(f=(5-3\cos2x)/2\), \(f'=3\sin2x\), \(f''=6\cos2x\). Vì \(|\cos2x|\le1\), suy ra \(|f''(x)|\le6\).</p><p><strong>Kiểm lại:</strong> Cận đạt tại x=0; không chỉ kiểm vài giá trị.</p></div>

    ### 3.11. Gia tốc của dao động có pha
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B33-R02-11"><p><strong>Đề bài:</strong> Một vật dao động với tọa độ \(s(t)=5+2\cos(\pi t+\pi/3)\) cm, t≥0. Tính vận tốc, gia tốc và gia tốc lúc t=2/3 s.</p><p><strong>Phân tích:</strong> Góc đo radian; đạo hàm tầng trong là \(\pi\) ở cả hai lượt.</p><p><strong>Lời giải:</strong> \(v=-2\pi\sin(\pi t+\pi/3)\) cm/s; \(a=-2\pi^2\cos(\pi t+\pi/3)\) cm/s². Tại t=2/3 góc bằng \(\pi\), nên \(a=2\pi^2\) cm/s².</p><p><strong>Kiểm lại:</strong> Vận tốc tại thời điểm đó bằng 0 nhưng gia tốc khác 0.</p></div>

=== "Lỗi thường gặp"

    <span data-thpt-help-id="HELP-G11-CHIX-B33-01" hidden></span>
    
    ??? tip "4.1. Nhầm đạo hàm cấp hai với bình phương"
    
        Với $f=x^2$, $f''=2$ trong khi $(f')^2=4x^2$. <a href="../luyen-tap/?item=THPT-G11-CHIX-B33-C01">Luyện lại B33-C01</a>

    <span data-thpt-help-id="HELP-G11-CHIX-B33-02" hidden></span>
    
    ??? tip "4.2. Cứ gia tốc âm là chậm dần"
    
        Nếu v=−2 và a=−1 thì vật đi chiều âm và tốc độ tăng tại điểm đó; phải xét đồng thời dấu v,a. <a href="../luyen-tap/?item=THPT-G11-CHIX-B33-P05">Luyện lại B33-P05</a>

    <span data-thpt-help-id="HELP-G11-CHIX-B33-03" hidden></span>
    
    ??? tip "4.3. Nhầm đơn vị hoặc miền thời gian"
    
        $s(t)=6t-2t^2$ m trên [0,3], a=−4 m/s² trong khoảng mô hình. Không suy diễn quá t=3. <a href="../luyen-tap/?item=THPT-G11-CHIX-B33-P04">Luyện lại B33-P04</a>

    **Học tiếp:** <a href="../luyen-tap/">Core và Luyện tập Bài 33</a> · <a href="../../../../thu-vien/tu-luan-g11-chuong-ix/">Tự luận Chương IX</a> · <a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a>.

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập hai, Bài 33 (trang in 95–96). SBT cùng bộ hỗ trợ luyện tập; SGK S1 quyết định kiến thức chính thức.</p>
