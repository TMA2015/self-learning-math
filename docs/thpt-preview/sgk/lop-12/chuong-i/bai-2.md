# Toán 12 · Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 12 · CHƯƠNG I · SGK KẾT NỐI TRI THỨC · TẬP MỘT · TRANG 15–19</p>
<p class="thpt-r4-lead">Hiểu bản chất, tự vận dụng, đối chiếu sau khi làm, rồi luyện tập theo từng bài.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương I</a><a href="../bai-1/">Bài trước</a><a href="../bai-3/">Bài tiếp theo</a></nav></div>

=== "Khám phá kiến thức"

    Khi tối ưu một đại lượng, cần phân biệt đỉnh gần một điểm với giá trị lớn nhất trên toàn miền. Điều kiện đạt được tại một đầu vào hợp lệ mới tạo nên GTLN/GTNN. Ôn miền xác định, liên tục, đạo hàm và điểm biên.

    ### 1.1. So sánh trên toàn miền
    
    Cực đại chỉ so gần điểm, GTLN so với mọi giá trị trên miền. Với $f=x$ trên (0,1), 1 là cận trên nhưng không đạt.
    
    **Vận dụng.** $f(x)=x^2$ trên [−1,3]. Giá trị tại 0 có là GTNN? Giá trị 1 tại −1 có là GTLN?
    
    <span data-ped-first-try="1" data-outcome-id="G12-B02-EXTREMA_GLOBAL_MEANING" data-thpt-first-try-id="THPT-G12-B02-TRY01" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** GTNN=0; 1 không là GTLN vì f(3)=9.
    
    <span data-thpt-help-id="HELP-G12-B02-TRY01" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Tìm điểm làm phản ví dụ cho giá trị dự đoán. <a href="../luyen-tap/#thpt-g12-chi-b02-c01">Luyện lại câu tương ứng</a>

    ### 1.2. Vai trò của đoạn đóng
    
    Liên tục trên đoạn hữu hạn [a,b] bảo đảm đạt hai giá trị cực trị toàn cục. Điều kiện liên tục và đủ hai đầu mút rất quan trọng.
    
    **Vận dụng.** $f=1/x$ trên [0,2] có thỏa giả thiết định lý không?
    
    <span data-ped-first-try="2" data-outcome-id="G12-B02-CLOSED_INTERVAL_EXISTENCE" data-thpt-first-try-id="THPT-G12-B02-TRY02" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Không: hàm không xác định tại 0, nên không liên tục trên toàn đoạn.
    
    <span data-thpt-help-id="HELP-G12-B02-TRY02" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Kiểm miền trước khi viện dẫn định lý. <a href="../luyen-tap/#thpt-g12-chi-b02-c02">Luyện lại câu tương ứng</a>

    ### 1.3. Ứng viên phải được so sánh
    
    Trên đoạn đóng, nếu hàm liên tục, xét hai biên và các điểm nội có f′=0 hoặc không tồn tại. Khi danh sách hữu hạn, so giá trị hàm tại tất cả ứng viên.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/G12_B02_FIG01_GLOBAL_MIN_MAX_CLOSED_INTERVAL_R00.svg" alt="Parabol trên [0;5] với f(0)=1, f(2)=−3, f(5)=6."/><figcaption>So ba chấm đặc gồm hai đầu mút và đỉnh. Max 6 ở biên, min −3 ở đỉnh; nếu bỏ biên, phải xét lại khả năng đạt.</figcaption></figure>
    
    **Vận dụng.** Tìm GTLN, GTNN của $f=x^2-4x+2$ trên [1,5].
    
    <span data-ped-first-try="3" data-outcome-id="G12-B02-CRITICAL_END_POINTS" data-thpt-first-try-id="THPT-G12-B02-TRY03" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $f'=2x-4$; ứng viên 1,2,5 có giá trị −1,−2,7. GTNN −2 tại 2, GTLN 7 tại 5.
    
    <span data-thpt-help-id="HELP-G12-B02-TRY03" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không bỏ điểm biên. <a href="../luyen-tap/#thpt-g12-chi-b02-c03">Luyện lại câu tương ứng</a>

    ### 1.4. Giới hạn không phải giá trị đạt
    
    Trên miền mở, giá trị có thể tiến sát một số nhưng không chạm tới. Chỉ được gọi là min/max nếu đạt trong miền.
    
    **Vận dụng.** $g=x(4-x)$ trên (0,4). Có GTLN/GTNN không?
    
    <span data-ped-first-try="4" data-outcome-id="G12-B02-OPEN_DOMAIN_NONATTAINMENT" data-thpt-first-try-id="THPT-G12-B02-TRY04" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $g=4-(x-2)^2$, max=4 tại 2; luôn dương, tiến về 0 ở biên bị loại nên không có min.
    
    <span data-thpt-help-id="HELP-G12-B02-TRY04" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Phân biệt 0 là cận dưới và giá trị đạt. <a href="../luyen-tap/#thpt-g12-chi-b02-c04">Luyện lại câu tương ứng</a>

    ### 1.5. Miền nửa khoảng và vô hạn
    
    Khi x≥0, cần xét biên 0, điểm nội và giới hạn khi x→∞; giới hạn không là ứng viên đạt nếu không có điểm thật tương ứng.
    
    **Vận dụng.** Tìm GTLN/GTNN của $q=2x/(x^2+1)$ trên [0,+∞).
    
    <span data-ped-first-try="5" data-outcome-id="G12-B02-CONSTRAINED_DOMAIN" data-thpt-first-try-id="THPT-G12-B02-TRY05" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $q'=2(1-x^2)/(x^2+1)^2$, tăng đến 1 rồi giảm; max=1 tại 1, min=0 tại 0.
    
    <span data-thpt-help-id="HELP-G12-B02-TRY05" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Kiểm q≥0 và giới hạn 0 không tự tạo điểm ở vô hạn. <a href="../luyen-tap/#thpt-g12-chi-b02-p03">Luyện lại câu tương ứng</a>

    ### 1.6. Đặt biến từ hình học
    
    Hộp không nắp gấp từ tấm vuông cạnh L, cắt bốn góc cạnh x: đáy cạnh L−2x, cao x, $V=x(L-2x)^2$, $0<x<L/2$.
    
    **Vận dụng.** Tấm vuông cạnh 24 cm. Tìm x làm thể tích lớn nhất.
    
    <span data-ped-first-try="6" data-outcome-id="G12-B02-OPTIMIZATION_MODEL" data-thpt-first-try-id="THPT-G12-B02-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $V'= (24-2x)(24-6x)$; trên (0,12) dấu + rồi − quanh x=4. $V(4)=1024$ cm³.
    
    <span data-thpt-help-id="HELP-G12-B02-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Loại nghiệm 12 vì hộp suy biến. <a href="../luyen-tap/#thpt-g12-chi-b02-a01">Luyện lại câu tương ứng</a>

=== "Kiến thức SGK"

    ### 2.1. Khái niệm giá trị lớn nhất, giá trị nhỏ nhất
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khái niệm giá trị lớn nhất, giá trị nhỏ nhất</strong><p>M là GTLN trên D khi tồn tại \(x_0\in D\) sao cho \(f(x_0)=M\) và \(f(x)\le M\) với mọi x∈D. m là GTNN nếu đạt tại một điểm và \(f(x)\ge m\) với mọi x∈D. Viết \(\max_D f\), \(\min_D f\) khi tồn tại.</p></div>

    ### 2.2. Tìm giá trị lớn nhất và giá trị nhỏ nhất bằng đạo hàm
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tìm giá trị lớn nhất và giá trị nhỏ nhất bằng đạo hàm</strong><p>Hàm liên tục trên đoạn [a,b] luôn đạt GTLN/GTNN. Khi tập điểm tới hạn nội hữu hạn, tính f ở a,b và tại mọi điểm nội nơi f′=0 hoặc không khả vi, rồi so giá trị. Nếu f không đổi trên một khoảng thì ghi giá trị chung; nếu không có danh sách hữu hạn, dùng tính đơn điệu hoặc lập luận toàn miền. Với khoảng mở/vô hạn, kết hợp dấu đạo hàm, giới hạn và kiểm tra đạt được. Không dùng định lý đoạn nếu thiếu liên tục hoặc đầu mút.</p></div>

=== "Ví dụ"

    ### 3.1. So sánh trên đoạn
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B02-R02-01"><p><strong>Đề bài:</strong> \(f=x^2-4x+1\) trên [0,5].</p><p><strong>Phân tích:</strong> Liên tục trên đoạn, xét biên và nghiệm đạo hàm.</p><p><strong>Lời giải:</strong> \(f'=2x-4=0\) tại 2. Ba giá trị 1,−3,6. Max 6 tại 5, min −3 tại 2.</p><p><strong>Kiểm lại:</strong> Khớp ba điểm trên hình.</p></div>

    ### 3.2. Khoảng mở
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B02-R02-02"><p><strong>Đề bài:</strong> \(f=2x\) trên (0,1).</p><p><strong>Phân tích:</strong> Hàm tăng nhưng hai biên bị loại.</p><p><strong>Lời giải:</strong> Không max/min; tiến về 0 và 2 nhưng không đạt.</p><p><strong>Kiểm lại:</strong> Với mỗi x trong miền có điểm nhỏ/lớn hơn.</p></div>

    ### 3.3. Parabol quay xuống
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B02-R02-03"><p><strong>Đề bài:</strong> \(h=-x^2+6x-1\) trên [0,4].</p><p><strong>Phân tích:</strong> Xét x=3 và hai biên.</p><p><strong>Lời giải:</strong> \(h'=-2x+6\). Các giá trị −1,8,7. Max 8 tại 3, min −1 tại 0.</p><p><strong>Kiểm lại:</strong> Giá trị biên 4 không nhỏ nhất.</p></div>

    ### 3.4. Miền vô hạn
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B02-R02-04"><p><strong>Đề bài:</strong> \(f=x/(x^2+4)\) trên [0,+∞).</p><p><strong>Phân tích:</strong> Xét dấu đạo hàm và giá trị biên.</p><p><strong>Lời giải:</strong> \(f'=(4-x^2)/(x^2+4)^2\), tăng đến x=2 rồi giảm; max=1/4 tại 2, min=0 tại 0.</p><p><strong>Kiểm lại:</strong> f không âm, giới hạn 0 ở vô hạn.</p></div>

    ### 3.5. Vườn chữ nhật
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B02-R02-05"><p><strong>Đề bài:</strong> Chu vi 32 m, hai cạnh dương.</p><p><strong>Phân tích:</strong> Đặt chiều rộng x, chiều dài 16−x.</p><p><strong>Lời giải:</strong> \(A=x(16-x)\) trên (0,16); \(A'=16-2x\). Max 64 m² tại x=8. Không min vì A&gt;0, tiến 0 ở biên.</p><p><strong>Kiểm lại:</strong> Hai cạnh 8 m, chu vi 32 m.</p></div>

    ### 3.6. Gấp hộp vuông
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B02-R02-06"><p><strong>Đề bài:</strong> Tấm vuông 36 cm, cắt góc cạnh x để gấp hộp không nắp.</p><p><strong>Phân tích:</strong> Từ hình tạo miền và hàm mục tiêu.</p><p><strong>Lời giải:</strong> \(V=x(36-2x)^2\), \(0&lt;x&lt;18\); \(V'=(36-2x)(36-6x)\) đổi + sang − ở 6. \(V(6)=3456\) cm³ là max.</p><p><strong>Kiểm lại:</strong> Nghiệm 18 bị loại, thể tích tiến 0 ở hai biên.</p></div>

=== "Lỗi thường gặp"

    ### 4.1. So sánh trên toàn miền
    
    ??? tip "Cách tự sửa"
    
        **Vì sao dễ sai:** GTLN/GTNN phải được so sánh trên toàn miền được hỏi, khác cực trị chỉ ở lân cận một điểm.

        **Tự sửa:** Tìm điểm làm phản ví dụ cho giá trị dự đoán. Sau khi kiểm lại lý do, tự giải một câu khác trong <a href="../luyen-tap/#thpt-g12-chi-b02-c01">Core/Luyện tập</a>.

    ### 4.2. Vai trò của đoạn đóng
    
    ??? tip "Cách tự sửa"
    
        **Vì sao dễ sai:** Định lí đạt cực trị toàn cục áp dụng cho hàm liên tục trên đoạn đóng và bị chặn; đổi sang khoảng mở phải kiểm khả năng không đạt biên.

        **Tự sửa:** Kiểm miền trước khi viện dẫn định lý. Sau khi kiểm lại lý do, tự giải một câu khác trong <a href="../luyen-tap/#thpt-g12-chi-b02-c02">Core/Luyện tập</a>.

    ### 4.3. Ứng viên phải được so sánh
    
    ??? tip "Cách tự sửa"
    
        **Vì sao dễ sai:** Nghiệm f'=0 là một trong các ứng viên, không thể bỏ qua hai đầu mút được phép hoặc điểm hàm không khả vi mà vẫn xác định.

        **Tự sửa:** Không bỏ điểm biên. Sau khi kiểm lại lý do, tự giải một câu khác trong <a href="../luyen-tap/#thpt-g12-chi-b02-c03">Core/Luyện tập</a>.

    ### 4.4. Giới hạn không phải giá trị đạt
    
    ??? tip "Cách tự sửa"
    
        **Vì sao dễ sai:** Giới hạn ở đầu mút không thuộc miền chỉ là giá trị có thể tiến gần, không phải giá trị hàm đạt tại một x hợp lệ.

        **Tự sửa:** Phân biệt 0 là cận dưới và giá trị đạt. Sau khi kiểm lại lý do, tự giải một câu khác trong <a href="../luyen-tap/#thpt-g12-chi-b02-c04">Core/Luyện tập</a>.

    ### 4.5. Miền nửa khoảng và vô hạn
    
    ??? tip "Cách tự sửa"
    
        **Vì sao dễ sai:** Miền nửa khoảng/vô hạn cần kiểm điểm được lấy và giới hạn ở vô cùng; không tự thêm ∞ như một giá trị x.

        **Tự sửa:** Kiểm q≥0 và giới hạn 0 không tự tạo điểm ở vô hạn. Sau khi kiểm lại lý do, tự giải một câu khác trong <a href="../luyen-tap/#thpt-g12-chi-b02-p03">Core/Luyện tập</a>.

    ### 4.6. Đặt biến từ hình học
    
    ??? tip "Cách tự sửa"
    
        **Vì sao dễ sai:** Biến hình học chỉ khả thi khi mọi cạnh/thể tích dương; nghiệm biên khiến hộp suy biến không được nhận dù phương trình đạo hàm cho nghiệm.

        **Tự sửa:** Loại nghiệm 12 vì hộp suy biến. Sau khi kiểm lại lý do, tự giải một câu khác trong <a href="../luyen-tap/#thpt-g12-chi-b02-a01">Core/Luyện tập</a>.

    **Học tiếp:** <a href="../luyen-tap/#b02-core">Core Bài 2</a> · <a href="../luyen-tap/#b02-practice">Luyện tập, Vận dụng, Tự luận</a> · <a href="../luyen-tap/#b02-help">Hỗ trợ khi gặp khó khăn</a> · <a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a>.

    <p class="thpt-r4-footnote">Nguồn học thuật S1: SGK Toán 12 – Kết nối tri thức với cuộc sống, tập một, Bài 2 (trang in 15–19). SBT cùng bộ được đối chiếu ở gói nguồn lịch sử; trang in khác chỉ số trang PDF.</p>
