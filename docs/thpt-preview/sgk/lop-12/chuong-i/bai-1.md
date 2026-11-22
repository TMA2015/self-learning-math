# Toán 12 · Bài 1. Tính đơn điệu và cực trị của hàm số

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 12 · CHƯƠNG I · SGK KẾT NỐI TRI THỨC · TẬP MỘT · TRANG 5–14</p>
<p class="thpt-r4-lead">Hiểu bản chất, tự vận dụng, đối chiếu sau khi làm, rồi luyện tập theo từng bài.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương I</a><a href="../">Tổng quan chương</a><a href="../bai-2/">Bài tiếp theo</a></nav></div>

=== "Khám phá kiến thức"

    Đạo hàm giúp trả lời một câu hỏi mà giá trị của hàm không trả lời được: khi đầu vào tăng, đầu ra đang tăng hay giảm? Vị trí dương không có nghĩa vận tốc dương. Ôn đạo hàm đa thức và phân thức, miền xác định, so sánh hai số và cách đọc trục tọa độ.

    ### 1.1. So sánh hai giá trị
    
    Đồng biến nghĩa là khi chọn hai đầu vào trong cùng miền đang xét, đầu vào lớn hơn cho đầu ra lớn hơn. Nghịch biến thì ngược lại. Không cần giá trị hàm phải dương.
    
    **Vận dụng.** Hàm $f(x)=-x$ trên $[-2,2]$ tăng hay giảm?
    
    <span data-ped-first-try="1" data-outcome-id="G12-B01-MONOTONICITY_MEANING" data-thpt-first-try-id="THPT-G12-B01-TRY01" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Với $x_1<x_2$, $-x_1>-x_2$, nên nghịch biến trên đoạn.
    
    <span data-thpt-help-id="HELP-G12-B01-TRY01" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        So sánh hai đầu vào theo thứ tự, không nhìn dấu của f. [Luyện lại câu tương ứng](../luyen-tap/#thpt-g12-chi-b01-c01)

    ### 1.2. Đọc dấu đạo hàm
    
    Đạo hàm dương trên một khoảng cho hướng tăng, âm cho hướng giảm. Nếu đạo hàm không âm và chỉ bằng 0 tại hữu hạn điểm, hàm vẫn đồng biến; trường hợp không dương tương tự.
    
    **Vận dụng.** Cho $f'(x)=(x-1)(x-4)$ trên $\mathbb R$. Tìm các khoảng đơn điệu.
    
    <span data-ped-first-try="2" data-outcome-id="G12-B01-DERIVATIVE_SIGN" data-thpt-first-try-id="THPT-G12-B01-TRY02" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Dấu lần lượt +,−,+; đồng biến trên $(-\infty,1),(4,+\infty)$, nghịch biến trên $(1,4)$.
    
    <span data-thpt-help-id="HELP-G12-B01-TRY02" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Chọn một giá trị thử ở mỗi khoảng, không chỉ giải phương trình. [Luyện lại câu tương ứng](../luyen-tap/#thpt-g12-chi-b01-p02)

    ### 1.3. Không nối qua điểm loại
    
    Nếu biểu thức không xác định tại một điểm, dấu đạo hàm chỉ cho phép kết luận trên từng khoảng liên thông. Ví dụ $1/x$ giảm từng phía của 0 nhưng $f(-1)=-1<f(1)=1$.
    
    **Vận dụng.** Với $f(x)=2/(x-3)$, tìm miền và các khoảng nghịch biến.
    
    <span data-ped-first-try="3" data-outcome-id="G12-B01-DOMAIN_INTERVALS" data-thpt-first-try-id="THPT-G12-B01-TRY03" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $D=\mathbb R\setminus\{3\}$; $f'=-2/(x-3)^2<0$ trên $(-\infty,3)$ và $(3,+\infty)$.
    
    <span data-thpt-help-id="HELP-G12-B01-TRY03" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không gộp hai khoảng; thử x=2,4 để phát hiện sai. [Luyện lại câu tương ứng](../luyen-tap/#thpt-g12-chi-b01-p01)

    ### 1.4. Đỉnh và đáy
    
    Điểm cực đại có giá trị lớn hơn các điểm đủ gần hai phía; cực tiểu ngược lại. Khi đạo hàm đổi dấu + sang − hoặc − sang + tại điểm liên tục, đồ thị đổi hướng.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/G12_B01_FIG01_DERIVATIVE_SIGN_R00.svg" alt="Đồ thị bậc ba có cực đại (−1;2), cực tiểu (1;−2), dấu đạo hàm +,−,+."/><figcaption>Đọc từ trái sang phải: x=−1 và x=1 chia ba khoảng. Đồ thị tăng rồi giảm rồi tăng; hai giá trị cực trị lần lượt 2 và −2.</figcaption></figure>
    
    **Vận dụng.** Một hàm liên tục có $f'$ đổi từ − sang + ở x=2 và + sang − ở x=5. Loại cực trị?
    
    <span data-ped-first-try="4" data-outcome-id="G12-B01-EXTREMA_SIGN_CHANGE" data-thpt-first-try-id="THPT-G12-B01-TRY04" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Cực tiểu tại 2, cực đại tại 5. Chưa biết giá trị cực trị nếu thiếu f(2), f(5).
    
    <span data-thpt-help-id="HELP-G12-B01-TRY04" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Đọc dấu theo chiều x tăng. [Luyện lại câu tương ứng](../luyen-tap/#thpt-g12-chi-b01-c03)

    ### 1.5. Điểm dừng chưa chắc cực trị
    
    Với $f=x^3$, $f'=3x^2$ chỉ bằng 0 tại 0, không đổi dấu. Hàm $|x|$ lại có cực tiểu dù không khả vi ở 0.
    
    **Vận dụng.** $g(x)=(x-2)^3$ có cực trị tại 2 không?
    
    <span data-ped-first-try="5" data-outcome-id="G12-B01-ZERO_DERIVATIVE_NOT_SUFFICIENT" data-thpt-first-try-id="THPT-G12-B01-TRY05" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $g'=3(x-2)^2\ge0$, chỉ bằng 0 ở 2; hàm đồng biến, không cực trị.
    
    <span data-thpt-help-id="HELP-G12-B01-TRY05" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không kết luận chỉ từ f′=0; kiểm hai phía. [Luyện lại câu tương ứng](../luyen-tap/#thpt-g12-chi-b01-c04)

    ### 1.6. Từ dấu vận tốc đến chiều đi
    
    Với tọa độ $s(t)$, vận tốc $v=s'$ (m/s) dương là đi theo chiều dương, âm là chiều ngược. Tốc độ là $|v|$.
    
    **Vận dụng.** $s(t)=t^2-4t+7$ m, t≥0 giây. Vật đi theo chiều nào trước và sau t=2?
    
    <span data-ped-first-try="6" data-outcome-id="G12-B01-MOTION_CONTEXT" data-thpt-first-try-id="THPT-G12-B01-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $v=2t-4$: âm trên (0,2), dương trên $(2,+\infty)$; t=2 đứng yên tức thời rồi đổi chiều.
    
    <span data-thpt-help-id="HELP-G12-B01-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Giới hạn t≥0, không nhầm vị trí với vận tốc. [Luyện lại câu tương ứng](../luyen-tap/#thpt-g12-chi-b01-a01)

=== "Kiến thức SGK"

    ### 2.1. Tính đơn điệu của hàm số
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Tính đơn điệu của hàm số</strong><p>Cho K là khoảng, đoạn hoặc nửa khoảng thuộc D. Hàm đồng biến trên K nếu mọi \(x_1,x_2\in K\) với \(x_1&lt;x_2\) đều thỏa \(f(x_1)&lt;f(x_2)\); nghịch biến nếu \(f(x_1)&gt;f(x_2)\).</p></div>

    ### 2.1.1. Tính đơn điệu — dấu đạo hàm
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính đơn điệu — dấu đạo hàm</strong><p>Trên khoảng I, nếu f khả vi và \(f'(x)&gt;0\) (tương ứng \(&lt;0\)) mọi x trong I thì hàm đồng biến (nghịch biến). Mở rộng: \(f'\ge0\) (hoặc \(\le0\)) và chỉ bằng 0 tại hữu hạn điểm vẫn cho đồng biến (hoặc nghịch biến). Nếu \(f'=0\) mọi x trong I thì f không đổi trên I. Kết luận có thể mở rộng đến đầu mút thuộc miền nếu f liên tục tại đó. Không ghép qua điểm gián đoạn.</p></div>

    ### 2.2. Cực trị của hàm số
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Cực trị của hàm số</strong><p>Hàm có cực đại tại \(x_0\) nếu \(f(x)&lt;f(x_0)\) với mọi x khác \(x_0\) trong khoảng đủ nhỏ chứa \(x_0\); cực tiểu nếu \(f(x)&gt;f(x_0)\). Hoành độ điểm cực trị khác giá trị cực trị. Nếu hàm khả vi tại điểm cực trị nội thì \(f'(x_0)=0\), nhưng chiều đảo sai.</p></div>

    ### 2.2.1. Cực trị — điều kiện đủ
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Cực trị — điều kiện đủ</strong><p>Nếu f liên tục tại \(x_0\), khả vi hai phía trong lân cận, đạo hàm đổi + sang − thì cực đại, − sang + thì cực tiểu. Không đổi dấu thì không có cực trị trong các tình huống dấu nghiêm ngặt ở cả hai phía. Quy trình: D → f′ → nghiệm và điểm không khả vi trong D → bảng dấu → kết luận và tính f tại điểm cực trị.</p></div>

=== "Ví dụ"

    ### 3.1. Parabol
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B01-R02-01"><p><strong>Đề bài:</strong> Xét \(f(x)=x^2-6x+5\).</p><p><strong>Phân tích:</strong> Đa thức khả vi toàn trục; dùng dấu f′.</p><p><strong>Lời giải:</strong> \(f'=2x-6\). Với x&lt;3 dấu −, x&gt;3 dấu +. Hàm giảm rồi tăng; cực tiểu tại 3, \(f(3)=-4\).</p><p><strong>Kiểm lại:</strong> \(f=(x-3)^2-4\) xác nhận đáy.</p></div>

    ### 3.2. Bậc ba hai cực trị
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B01-R02-02"><p><strong>Đề bài:</strong> Xét \(f=x^3-12x\).</p><p><strong>Phân tích:</strong> Nghiệm đạo hàm chia ba khoảng.</p><p><strong>Lời giải:</strong> \(f'=3(x-2)(x+2)\); dấu +,−,+. Tăng trên \((-\infty,-2),(2,+\infty)\), giảm \((-2,2)\). Cực đại (−2;16), cực tiểu (2;−16).</p><p><strong>Kiểm lại:</strong> Thế −2,2 vào hàm gốc.</p></div>

    ### 3.3. Phân thức tách khoảng
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B01-R02-03"><p><strong>Đề bài:</strong> Xét \(f=1/(x-1)\).</p><p><strong>Phân tích:</strong> Miền loại 1.</p><p><strong>Lời giải:</strong> \(f'=-1/(x-1)^2&lt;0\) trên từng khoảng \((-\infty,1),(1,+\infty)\).</p><p><strong>Kiểm lại:</strong> f(0)=−1&lt;f(2)=1: không gộp.</p></div>

    ### 3.4. Chuyển động
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B01-R02-04"><p><strong>Đề bài:</strong> \(s(t)=t^3-9t^2+24t\) m với t≥0.</p><p><strong>Phân tích:</strong> Tính v và xét dấu trong miền vật lý.</p><p><strong>Lời giải:</strong> \(v=3(t-2)(t-4)\). Đi chiều dương trên (0,2) và \((4,+\infty)\); chiều âm (2,4).</p><p><strong>Kiểm lại:</strong> Tại 2 và 4, v=0 và đổi dấu.</p></div>

    ### 3.5. Điểm dừng đơn lẻ và hàm hằng
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B01-R02-05"><p><strong>Đề bài:</strong> So sánh \(f=x^5\) và \(g=7\) trên \(\mathbb R\).</p><p><strong>Phân tích:</strong> Áp dụng hai trường hợp khác nhau của định lí.</p><p><strong>Lời giải:</strong> \(f'=5x^4\ge0\), chỉ bằng 0 ở 0, nên đồng biến; \(g'=0\) khắp trục nên g không đổi.</p><p><strong>Kiểm lại:</strong> Không coi một điểm f′=0 là cả một khoảng hàm hằng.</p></div>

=== "Lỗi thường gặp"

    ### 4.1. So sánh hai giá trị
    
    ??? tip "Cách tự sửa"
    
        So sánh hai đầu vào theo thứ tự, không nhìn dấu của f. Sau khi kiểm lại lý do, tự giải một câu khác trong [Core/Luyện tập](../luyen-tap/#thpt-g12-chi-b01-c01).

    ### 4.2. Đọc dấu đạo hàm
    
    ??? tip "Cách tự sửa"
    
        Chọn một giá trị thử ở mỗi khoảng, không chỉ giải phương trình. Sau khi kiểm lại lý do, tự giải một câu khác trong [Core/Luyện tập](../luyen-tap/#thpt-g12-chi-b01-p02).

    ### 4.3. Không nối qua điểm loại
    
    ??? tip "Cách tự sửa"
    
        Không gộp hai khoảng; thử x=2,4 để phát hiện sai. Sau khi kiểm lại lý do, tự giải một câu khác trong [Core/Luyện tập](../luyen-tap/#thpt-g12-chi-b01-p01).

    ### 4.4. Đỉnh và đáy
    
    ??? tip "Cách tự sửa"
    
        Đọc dấu theo chiều x tăng. Sau khi kiểm lại lý do, tự giải một câu khác trong [Core/Luyện tập](../luyen-tap/#thpt-g12-chi-b01-c03).

    ### 4.5. Điểm dừng chưa chắc cực trị
    
    ??? tip "Cách tự sửa"
    
        Không kết luận chỉ từ f′=0; kiểm hai phía. Sau khi kiểm lại lý do, tự giải một câu khác trong [Core/Luyện tập](../luyen-tap/#thpt-g12-chi-b01-c04).

    ### 4.6. Từ dấu vận tốc đến chiều đi
    
    ??? tip "Cách tự sửa"
    
        Giới hạn t≥0, không nhầm vị trí với vận tốc. Sau khi kiểm lại lý do, tự giải một câu khác trong [Core/Luyện tập](../luyen-tap/#thpt-g12-chi-b01-a01).

    [Core Bài 1](../luyen-tap/#b01-core) · [Luyện tập, Vận dụng, Tự luận](../luyen-tap/#b01-practice) · [Hỗ trợ khi gặp khó khăn](../luyen-tap/#b01-help) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md)

*Nguồn đối chiếu: SGK Toán 12 Kết nối tri thức, Tập một, trang in 5–14.*
