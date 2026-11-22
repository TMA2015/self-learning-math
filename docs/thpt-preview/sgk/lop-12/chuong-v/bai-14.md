# Toán 12 · Bài 14. Phương trình mặt phẳng

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 12 · CHƯƠNG V · SGK KẾT NỐI TRI THỨC · TẬP HAI · TRANG 29–40</p><p class="thpt-r4-lead">Hiểu hình học, đọc hình, tự vận dụng và đối chiếu trước khi luyện tập.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương V</a><a href="../bai-15/">Bài 15</a></nav></div>

=== "Khám phá kiến thức"

    Một mặt bàn, tường hay mặt phẳng chứa quỹ đạo có thể được mô tả bằng một điểm và hướng vuông góc với nó. Ôn phép trừ tọa độ, tích vô hướng, hai vectơ cùng phương. Từ hai hướng không cùng phương dựng được hướng pháp tuyến; từ đó mọi câu lập phương trình đều quay về một điều kiện vuông góc.

    ### 1.1. Từ hai hướng đến pháp tuyến
    
    Một vectơ pháp tuyến khác 0 vuông góc với mọi hướng nằm trong mặt phẳng. Hai hướng không cùng phương đủ xác định hướng pháp tuyến bằng tích có hướng: kiểm tích vô hướng với cả hai bằng 0.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHV-B14-NORMAL-R02.svg" alt="Mặt phẳng đi qua O, hai hướng u,v nằm trong mặt; pháp tuyến n theo phương vuông góc."/><figcaption>Hai hướng không cùng phương tạo mặt phẳng; pháp tuyến vuông góc cả hai. Hình chiếu không dùng để đo góc.</figcaption></figure>
    
    **Vận dụng.** Cho $\vec u=(2,1,0),\vec v=(1,0,2)$. Tìm tích có hướng và kiểm.
    
    <span data-ped-first-try="1" data-outcome-id="G12-CHV-B14-O01" data-thpt-first-try-id="THPT-G12-B14-TRY01" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $\vec n=(2,-4,-1)$; $\vec n\cdot\vec u=4-4=0$, $\vec n\cdot\vec v=2-2=0$. n khác 0.
    
    <span data-thpt-help-id="HELP-G12-B14-TRY01" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Nhớ dấu hạng giữa và kiểm bằng hai tích vô hướng. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b14-c01); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b14-p01). Sau đó tự làm lại Vận dụng.

    ### 1.2. Điểm thuộc mặt phẳng bằng một tích vô hướng
    
    Qua M₀, mọi điểm M trên mặt có $\overrightarrow{M_0M}$ vuông góc pháp tuyến. Khai triển tích vô hướng bằng 0, ta được phương trình tổng quát.
    
    **Vận dụng.** Qua M₀(2,1,−1), n=(1,−3,2). Viết phương trình và kiểm điểm M₀.
    
    <span data-ped-first-try="2" data-outcome-id="G12-CHV-B14-O02" data-thpt-first-try-id="THPT-G12-B14-TRY02" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $(x-2)-3(y-1)+2(z+1)=0$, tức $x-3y+2z+3=0$. Thay M₀ được 0.
    
    <span data-thpt-help-id="HELP-G12-B14-TRY02" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Dùng hiệu tọa độ x−x₀; xác định D bằng điều kiện qua điểm. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b14-c02); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b14-p02). Sau đó tự làm lại Vận dụng.

    ### 1.3. Ba điểm dựng hai hướng
    
    Chọn một điểm A làm gốc; AB và AC không cùng phương nếu A,B,C không thẳng hàng. Lấy tích có hướng rồi dùng điều kiện qua A.
    
    **Vận dụng.** A(1,1,0), B(2,1,1), C(1,3,0). Lập (ABC).
    
    <span data-ped-first-try="3" data-outcome-id="G12-CHV-B14-O03" data-thpt-first-try-id="THPT-G12-B14-TRY03" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** AB=(1,0,1), AC=(0,2,0), n=(−2,0,2) có thể rút gọn (−1,0,1). Phương trình $-x+z+1=0$.
    
    <span data-thpt-help-id="HELP-G12-B14-TRY03" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Kiểm cả ba điểm; tích có hướng bằng 0 thì không có mặt phẳng duy nhất. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b14-c03); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b14-p03). Sau đó tự làm lại Vận dụng.

    ### 1.4. Ghép hai điều kiện hình học
    
    Mặt phẳng chứa hướng u và vuông góc một mặt phẳng Q có thể lấy u và pháp tuyến Q làm cặp chỉ phương (nếu không cùng phương). Tương tự khi biết hai hướng song song với mặt cần lập.
    
    **Vận dụng.** Qua A(0,2,1), chứa hướng (1,0,0) và vuông góc Q:y+z=0. Tìm P.
    
    <span data-ped-first-try="4" data-outcome-id="G12-CHV-B14-O04" data-thpt-first-try-id="THPT-G12-B14-TRY04" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Hai hướng (1,0,0),(0,1,1), pháp tuyến (0,−1,1). $-(y-2)+(z-1)=0$ hay $-y+z+1=0$.
    
    <span data-thpt-help-id="HELP-G12-B14-TRY04" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Kiểm pháp tuyến P vuông góc pháp tuyến Q; kiểm điểm A và hướng Ox. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b14-c04); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b14-p04). Sau đó tự làm lại Vận dụng.

    ### 1.5. Hai mặt phẳng: hướng và vị trí
    
    So hai pháp tuyến trước. Cùng phương chưa đủ phân biệt trùng hay song song phân biệt: phải so cả hằng số với cùng hệ số nhân. Vuông góc khi tích vô hướng hai pháp tuyến bằng 0.
    
    **Vận dụng.** P:2x−y+z−1=0; Q:−4x+2y−2z+2=0; R:x+2y=0. Xét P với Q và R.
    
    <span data-ped-first-try="5" data-outcome-id="G12-CHV-B14-O05" data-thpt-first-try-id="THPT-G12-B14-TRY05" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Q=−2P nên trùng. nP·nR=2−2=0, nên P vuông góc R.
    
    <span data-thpt-help-id="HELP-G12-B14-TRY05" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không chia từng hệ số nếu có số 0; tìm hệ số nhân khác 0. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b14-c05); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b14-p05). Sau đó tự làm lại Vận dụng.

    ### 1.6. Khoảng cách là độ dài đoạn chiếu vuông góc
    
    Đường ngắn nhất từ M tới P theo pháp tuyến. Hình chiếu H có $M-H$ cùng phương n. Tính độ dài thành phần của vectơ từ một điểm trên P đến M theo hướng pháp tuyến đơn vị.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHV-B14-DISTANCE-R02.svg" alt="H là hình chiếu M lên P, đoạn MH theo pháp tuyến."/><figcaption>Chỉ đoạn MH vuông góc có độ dài nhỏ nhất; đoạn xiên tới điểm khác không phải khoảng cách.</figcaption></figure>
    
    **Vận dụng.** M(2,−1,4), P:x+2y+2z−2=0. Tính khoảng cách.
    
    <span data-ped-first-try="6" data-outcome-id="G12-CHV-B14-O06" data-thpt-first-try-id="THPT-G12-B14-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Tử $|2-2+8-2|=6$, độ dài n là 3; d=2.
    
    <span data-thpt-help-id="HELP-G12-B14-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không quên trị tuyệt đối và mẫu độ dài n; khoảng cách không âm. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b14-c06); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b14-p06). Sau đó tự làm lại Vận dụng.

    ### 1.7. Quỹ đạo nằm trong một mặt phẳng cố định
    
    Không cần tìm từng điểm trên quỹ đạo. Có thể tìm một hệ thức tuyến tính giữa x(t), y(t), z(t) đúng với mọi t; nếu các hệ số x,y,z không đồng thời bằng 0 thì đó là mặt phẳng cố định.
    
    **Vận dụng.** M(t)=(2cos t+sin t, cos t−sin t, 3cos t). Tìm mặt phẳng cố định chứa quỹ đạo.
    
    <span data-ped-first-try="7" data-outcome-id="G12-CHV-B14-O08" data-thpt-first-try-id="THPT-G12-B14-TRY07" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $x+y=3\cos t=z$ với mọi t; vậy $x+y-z=0$. Tại t=0, π/2, π có ba điểm không thẳng hàng, nên đây là mặt phẳng duy nhất chứa cả quỹ đạo.
    
    <span data-thpt-help-id="HELP-G12-B14-TRY07" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Thế biểu thức theo t và kiểm đồng nhất, không chỉ thử một giá trị. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b14-c08); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b14-p08). Sau đó tự làm lại Vận dụng.

=== "Kiến thức SGK"

    ### 2.1. Vectơ pháp tuyến và cặp vectơ chỉ phương của mặt phẳng
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Vectơ pháp tuyến và cặp vectơ chỉ phương của mặt phẳng.</strong><p>Vectơ \(\vec n\ne\vec0\) có giá vuông góc P là pháp tuyến. Nếu \(\vec u=(a,b,c),\vec v=(a',b',c')\) không cùng phương và có giá nằm trong hoặc song song P thì chúng là cặp chỉ phương. Tích có hướng \([\vec u,\vec v]=(bc'-cb',ca'-ac',ab'-ba')\) khác 0, vuông góc cả hai, là một pháp tuyến P. Đổi thứ tự đổi dấu.</p></div>

    ### 2.2. Phương trình tổng quát của mặt phẳng
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Phương trình tổng quát của mặt phẳng.</strong><p>\(Ax+By+Cz+D=0\), \(A^2+B^2+C^2&gt;0\), nhận (A,B,C) làm pháp tuyến. Điểm thuộc khi thỏa phương trình. Nhân tất cả hệ số với cùng số khác 0 giữ nguyên mặt phẳng.</p></div>

    ### 2.3. Lập phương trình tổng quát của mặt phẳng
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Lập phương trình tổng quát của mặt phẳng.</strong><p>Qua \(M_0(x_0,y_0,z_0)\) với n=(A,B,C): \(A(x-x_0)+B(y-y_0)+C(z-z_0)=0\). Nếu biết hai hướng, lấy tích có hướng; qua ba điểm không thẳng hàng dùng AB, AC. Mặt phẳng cắt ba trục tại (a,0,0),(0,b,0),(0,0,c), abc≠0, có phương trình đoạn chắn \(x/a+y/b+z/c=1\). Với quỹ đạo cho bởi M(t), có thể chứng minh toàn bộ quỹ đạo nằm trong một mặt phẳng khi tìm được A,B,C,D không đồng thời A=B=C=0 sao cho \(Ax(t)+By(t)+Cz(t)+D=0\) với mọi t; nếu kết luận mặt phẳng duy nhất, cần kiểm quỹ đạo có ba điểm không thẳng hàng.</p></div>

    ### 2.4. Điều kiện để hai mặt phẳng vuông góc với nhau
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Điều kiện để hai mặt phẳng vuông góc với nhau.</strong><p>\(P\perp Q\Leftrightarrow\vec n_P\cdot\vec n_Q=0\). Nếu P vuông góc Q, pháp tuyến Q là một hướng nằm trong hoặc song song P.</p></div>

    ### 2.5. Điều kiện để hai mặt phẳng song song với nhau
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Điều kiện để hai mặt phẳng song song với nhau.</strong><p>Nếu \(\vec n_Q=k\vec n_P\) với k≠0 và \(D_Q\ne kD_P\) thì hai mặt phẳng song song phân biệt; nếu \(D_Q=kD_P\) thì trùng. Nếu pháp tuyến không cùng phương thì hai mặt phẳng cắt theo đường thẳng.</p></div>

    ### 2.6. Khoảng cách từ một điểm đến một mặt phẳng
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Khoảng cách từ một điểm đến một mặt phẳng.</strong><p>Với P: Ax+By+Cz+D=0 và M(x₀,y₀,z₀), \(d(M,P)=\frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}\). Hình chiếu \(H=M-\frac{Ax_0+By_0+Cz_0+D}{A^2+B^2+C^2}(A,B,C)\). Với hai mặt phẳng song song phân biệt, chuẩn hóa về cùng A,B,C rồi khoảng cách bằng \(|D_1-D_2|/\sqrt{A^2+B^2+C^2}\).</p></div>

=== "Ví dụ"

    ### 3.1. Tích có hướng
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B14-01"><p><strong>Đề bài:</strong> u=(1,0,1), v=(0,1,1). Tìm pháp tuyến.</p><p><strong>Phân tích:</strong> Dùng tích có hướng hai hướng không cùng phương.</p><p><strong>Lời giải:</strong> \(n=(-1,-1,1)\).</p><p><strong>Kiểm lại:</strong> Dot với cả hai bằng 0; n khác 0.</p></div>

    ### 3.2. Điểm và pháp tuyến
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B14-02"><p><strong>Đề bài:</strong> P(1,−2,3), n=(2,−1,1). Lập mặt phẳng.</p><p><strong>Phân tích:</strong> Lấy n·PM=0.</p><p><strong>Lời giải:</strong> \(2(x-1)-(y+2)+(z-3)=0\) hay \(2x-y+z-7=0\).</p><p><strong>Kiểm lại:</strong> Thay P cho 0.</p></div>

    ### 3.3. Qua ba điểm
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B14-03"><p><strong>Đề bài:</strong> A(0,0,1), B(1,0,1), C(0,1,1). Viết (ABC).</p><p><strong>Phân tích:</strong> AB, AC không cùng phương.</p><p><strong>Lời giải:</strong> \(n=(0,0,1)\), \(z=1\).</p><p><strong>Kiểm lại:</strong> Cả ba điểm có z=1.</p></div>

    ### 3.4. Hai hướng
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B14-04"><p><strong>Đề bài:</strong> Qua O chứa (1,0,2),(0,1,1). Tìm P.</p><p><strong>Phân tích:</strong> Tích có hướng.</p><p><strong>Lời giải:</strong> \(n=(-2,-1,1)\); \(-2x-y+z=0\).</p><p><strong>Kiểm lại:</strong> Dot với từng hướng bằng 0.</p></div>

    ### 3.5. Song song phân biệt
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B14-05"><p><strong>Đề bài:</strong> \(x+y+z-1=0\) và \(2x+2y+2z+4=0\).</p><p><strong>Phân tích:</strong> Chuẩn hóa hệ số Q.</p><p><strong>Lời giải:</strong> Q thành \(x+y+z+2=0\), khác hằng số P, nên song song phân biệt.</p><p><strong>Kiểm lại:</strong> Không trùng vì D không tỉ lệ.</p></div>

    ### 3.6. Khoảng cách
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B14-06"><p><strong>Đề bài:</strong> M(1,2,3), P: \(2x-y+2z-4=0\).</p><p><strong>Phân tích:</strong> Dùng pháp tuyến độ dài 3.</p><p><strong>Lời giải:</strong> \(d=|2-2+6-4|/3=2/3\).</p><p><strong>Kiểm lại:</strong> Không âm; M không thuộc P.</p></div>

    ### 3.7. Đồng nhất quỹ đạo
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B14-R02-07"><p><strong>Đề bài:</strong> M(t)=(cos t, sin t+cos t, 2sin t). Xác định mặt phẳng chứa mọi M(t).</p><p><strong>Phân tích:</strong> Loại sin t, cos t giữa các tọa độ.</p><p><strong>Lời giải:</strong> \(y-x=z/2\), nên \(2x-2y+z=0\) với mọi t. M(0)=(1,1,0), M(π/2)=(0,1,2), M(π)=(−1,−1,0) không thẳng hàng.</p><p><strong>Kiểm lại:</strong> Phương trình không phụ thuộc t.</p></div>

    ### 3.8. Phương trình đoạn chắn
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B14-R02-08"><p><strong>Đề bài:</strong> Mặt phẳng cắt Ox, Oy, Oz tại A(2,0,0),B(0,3,0),C(0,0,6).</p><p><strong>Phân tích:</strong> Ba đoạn chắn khác 0.</p><p><strong>Lời giải:</strong> \(x/2+y/3+z/6=1\), tương đương \(3x+2y+z-6=0\).</p><p><strong>Kiểm lại:</strong> Thay A,B,C đều được 0; không dùng nếu đoạn chắn bằng 0.</p></div>

    ### 3.9. Hai mặt phẳng song song và khoảng cách
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B14-R02-09"><p><strong>Đề bài:</strong> \(P:2x-y+2z=3\), \(Q:4x-2y+4z=18\). Tính khoảng cách.</p><p><strong>Phân tích:</strong> Chia Q cho 2; pháp tuyến có độ dài 3.</p><p><strong>Lời giải:</strong> Q: \(2x-y+2z=9\), nên \(d=|9-3|/3=2\).</p><p><strong>Kiểm lại:</strong> P và Q song song phân biệt.</p></div>

    ### 3.10. Mô hình camera vuông góc nền
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B14-R02-10"><p><strong>Đề bài:</strong> Camera C(0,0,4), quan sát theo trục vuông góc nền z=0, góc mở toàn phần 60°. Tìm bán kính vùng tròn.</p><p><strong>Phân tích:</strong> Khoảng cách đến nền bằng 4; nửa góc mở là 30°.</p><p><strong>Lời giải:</strong> \(r=4\tan30^\circ=4/\sqrt3\) m nếu tọa độ tính bằng m.</p><p><strong>Kiểm lại:</strong> Chỉ đúng khi trục quan sát vuông góc và góc mở đối xứng.</p></div>

    ### 3.11. Moment lực và tích có hướng
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B14-R02-11"><p><strong>Đề bài:</strong> OP=(2,0,0) m, lực F=(0,3,0) N. Tính moment M=OP×F.</p><p><strong>Phân tích:</strong> Tích có hướng vuông góc cả OP và F.</p><p><strong>Lời giải:</strong> \(M=(0,0,6)\) N·m. Nếu giữ F và nhân OP lên 2 thì moment nhân 2.</p><p><strong>Kiểm lại:</strong> Đổi thứ tự tích có hướng đổi dấu.</p></div>

    ### 3.12. Điểm cách đều hai mặt phẳng
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B14-R02-12"><p><strong>Đề bài:</strong> M thuộc Ox, cách đều P:x−y=0 và Q:x+y−4=0. Tìm M.</p><p><strong>Phân tích:</strong> M=(t,0,0); cùng mẫu √2.</p><p><strong>Lời giải:</strong> \(|t|=|t-4|\), bình phương hợp lệ cho \(t^2=(t-4)^2\), t=2; M(2,0,0).</p><p><strong>Kiểm lại:</strong> Thay cả hai khoảng cách bằng √2.</p></div>

=== "Lỗi thường gặp"

    ### 4.1. Từ hai hướng đến pháp tuyến
    
    ??? tip "Cách tự sửa"
    
        Nhớ dấu hạng giữa và kiểm bằng hai tích vô hướng. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b14-c01); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b14-p01). Sau đó tự làm lại Vận dụng.

    ### 4.2. Điểm thuộc mặt phẳng bằng một tích vô hướng
    
    ??? tip "Cách tự sửa"
    
        Dùng hiệu tọa độ x−x₀; xác định D bằng điều kiện qua điểm. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b14-c02); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b14-p02). Sau đó tự làm lại Vận dụng.

    ### 4.3. Ba điểm dựng hai hướng
    
    ??? tip "Cách tự sửa"
    
        Kiểm cả ba điểm; tích có hướng bằng 0 thì không có mặt phẳng duy nhất. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b14-c03); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b14-p03). Sau đó tự làm lại Vận dụng.

    ### 4.4. Ghép hai điều kiện hình học
    
    ??? tip "Cách tự sửa"
    
        Kiểm pháp tuyến P vuông góc pháp tuyến Q; kiểm điểm A và hướng Ox. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b14-c04); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b14-p04). Sau đó tự làm lại Vận dụng.

    ### 4.5. Hai mặt phẳng: hướng và vị trí
    
    ??? tip "Cách tự sửa"
    
        Không chia từng hệ số nếu có số 0; tìm hệ số nhân khác 0. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b14-c05); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b14-p05). Sau đó tự làm lại Vận dụng.

    ### 4.6. Khoảng cách là độ dài đoạn chiếu vuông góc
    
    ??? tip "Cách tự sửa"
    
        Không quên trị tuyệt đối và mẫu độ dài n; khoảng cách không âm. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b14-c06); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b14-p06). Sau đó tự làm lại Vận dụng.

    ### 4.7. Quỹ đạo nằm trong một mặt phẳng cố định
    
    ??? tip "Cách tự sửa"
    
        Thế biểu thức theo t và kiểm đồng nhất, không chỉ thử một giá trị. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b14-c08); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b14-p08). Sau đó tự làm lại Vận dụng.

    [Core Bài 14](../luyen-tap/#b14-core) · [Luyện tập và Tự luận](../luyen-tap/#b14-practice) · [Hỗ trợ khi gặp khó khăn](../luyen-tap/#b14-help) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/)

*Nguồn đối chiếu: SGK Toán 12 Kết nối tri thức, Tập hai, trang in 29–40; SBT trang in 21–24 đối chiếu trực tiếp. Trang in 25 SBT bị bỏ trong PDF quét; bài 5.6–5.7 đã đối chiếu họ dạng từ lời giải tham khảo, không xác nhận đã đọc trang gốc.*
