# Toán 12 · Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề liên quan đến thực tiễn

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 12 · CHƯƠNG I · SGK KẾT NỐI TRI THỨC · TẬP MỘT · TRANG 33–41</p>
<p class="thpt-r4-lead">Hiểu bản chất, tự vận dụng, đối chiếu sau khi làm, rồi luyện tập theo từng bài.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương I</a><a href="../bai-4/">Bài trước</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra</a></nav></div>

=== "Khám phá kiến thức"

    Trong ứng dụng, đạo hàm mô tả độ nhạy hoặc cho ta phương án tốt nhất trong miền thực tế. Ôn đạo hàm, đơn vị, diện tích/thể tích hình trụ và hộp, bảng dấu; mục tiêu tối ưu phải được biểu diễn theo một biến sau khi dùng ràng buộc.

    ### 1.1. Tốc độ thay đổi tức thời
    
    Với đầu vào tăng h nhỏ, thương $[f(x+h)-f(x)]/h$ là tốc độ trung bình. Giới hạn khi h→0 là f′(x). Đạo hàm mang đơn vị đầu ra chia đầu vào.
    
    **Vận dụng.** $Q(t)=3t^2+1$ L với t phút. Tính tốc độ thay đổi tại t=2.
    
    <span data-ped-first-try="1" data-outcome-id="G12-B05-RATE_INTERPRETATION" data-thpt-first-try-id="THPT-G12-B05-TRY01" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $Q'=6t$, $Q'(2)=12$ L/phút.
    
    <span data-thpt-help-id="HELP-G12-B05-TRY01" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không gọi 12 L hay vận tốc. [Luyện lại câu tương ứng](../luyen-tap/#thpt-g12-chi-b05-c01)

    ### 1.2. Vận tốc, tốc độ, gia tốc
    
    Với s(t), $v=s'$, $a=s''$; chiều theo dấu v. Khi v≠0, tốc độ |v| tăng nếu va>0, giảm nếu va<0. Tại v=0 cần xét lân cận.
    
    **Vận dụng.** $s=t^2-6t+10$ m. Tại t=2 s, tìm v, a và nhận xét tốc độ.
    
    <span data-ped-first-try="2" data-outcome-id="G12-B05-MOTION_SPEED_ACCELERATION" data-thpt-first-try-id="THPT-G12-B05-TRY02" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $v=2t-6=-2$ m/s, a=2 m/s². Đi chiều âm, tốc độ 2 m/s đang giảm.
    
    <span data-thpt-help-id="HELP-G12-B05-TRY02" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Xét đồng thời v,a. [Luyện lại câu tương ứng](../luyen-tap/#thpt-g12-chi-b05-c02)

    ### 1.3. Chi phí cận biên
    
    $C'(q)$ đo tốc độ biến thiên chi phí theo q. Với bước một sản phẩm đủ nhỏ, $C(q+1)-C(q)$ xấp xỉ $C'(q)$ nhân 1 sản phẩm, không luôn bằng.
    
    **Vận dụng.** $C(q)=q^2+3q+20$ nghìn đồng. So C′(4) với C(5)−C(4).
    
    <span data-ped-first-try="3" data-outcome-id="G12-B05-MARGINAL_COST" data-thpt-first-try-id="THPT-G12-B05-TRY03" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** C′(4)=11 nghìn đồng/sp; C(5)−C(4)=12 nghìn đồng.
    
    <span data-thpt-help-id="HELP-G12-B05-TRY03" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Đạo hàm không phải tổng chi phí hoặc sai phân chính xác. [Luyện lại câu tương ứng](../luyen-tap/#thpt-g12-chi-b05-c03)

    ### 1.4. Ràng buộc hình học và miền
    
    Mỗi cạnh, chiều cao phải dương; hộp cắt góc cạnh x từ tấm bìa a×b đòi $0<x<\min(a,b)/2$. Mô hình phải có đơn vị.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/G12_B05_FIG01_BOX_VOLUME_R00.svg" alt="Thể tích hộp không nắp từ tấm 30×20, miền 0&lt;x&lt;10, cực đại x≈3,924 cm."/><figcaption>Hai vòng tròn rỗng tại biên không phải hộp hợp lệ; đọc x tối ưu trên trục ngang và V trên trục dọc.</figcaption></figure>
    
    **Vận dụng.** Tấm 40×24 cm, cắt cạnh x. Tìm miền và thể tích.
    
    <span data-ped-first-try="4" data-outcome-id="G12-B05-MODEL_VARIABLE_DOMAIN" data-thpt-first-try-id="THPT-G12-B05-TRY04" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $0<x<12$; $V=x(40-2x)(24-2x)$ cm³.
    
    <span data-thpt-help-id="HELP-G12-B05-TRY04" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Kiểm cả hai chiều đáy. [Luyện lại câu tương ứng](../luyen-tap/#thpt-g12-chi-b05-c04)

    ### 1.5. Tối ưu trên miền khả thi
    
    Sau khi lập hàm một biến, xét đạo hàm và mọi biên hợp lệ hoặc giới hạn; chỉ nghiệm thỏa ràng buộc mới có ý nghĩa.
    
    **Vận dụng.** Có 48 m hàng rào quây ba cạnh sát tường. Tìm diện tích lớn nhất.
    
    <span data-ped-first-try="5" data-outcome-id="G12-B05-OPTIMIZATION_DERIVATIVE" data-thpt-first-try-id="THPT-G12-B05-TRY05" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $A=x(48-2x)$, 0<x<24. $A'=48-4x$ đổi + sang − tại 12; cạnh kia 24, max 288 m².
    
    <span data-thpt-help-id="HELP-G12-B05-TRY05" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không tính hàng rào cạnh sát tường. [Luyện lại câu tương ứng](../luyen-tap/#thpt-g12-chi-b05-p04)

    ### 1.6. Không nhận hộp suy biến
    
    Khi x tới 0 hoặc nửa cạnh ngắn, hộp có thể tích 0 nhưng không được tính là hộp thật nếu ràng buộc dương.
    
    **Vận dụng.** Tấm vuông cạnh 20 cm: x=10 có tạo hộp hợp lệ?
    
    <span data-ped-first-try="6" data-outcome-id="G12-B05-BOUNDARY_FEASIBILITY" data-thpt-first-try-id="THPT-G12-B05-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Không, đáy cạnh 0. Miền (0,10); V tiến 0 ở biên nhưng không đạt 0.
    
    <span data-thpt-help-id="HELP-G12-B05-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Phân biệt giới hạn với điểm khả thi. [Luyện lại câu tương ứng](../luyen-tap/#thpt-g12-chi-b05-p05)

    ### 1.7. Kiểm đơn vị và tính rời rạc
    
    Nếu mục tiêu là A (m²), x (m), A′ có đơn vị m. Nếu q là số sản phẩm, miền thật có thể là số nguyên; so hai số nguyên kề nghiệm tối ưu liên tục khi hàm tăng rồi giảm.
    
    **Vận dụng.** $P(q)=20-(q-4,4)^2$ nghìn đồng, q nguyên từ 0 đến 9. Chọn q.
    
    <span data-ped-first-try="7" data-outcome-id="G12-B05-UNIT_ASSUMPTION_CHECK" data-thpt-first-try-id="THPT-G12-B05-TRY07" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** So q=4 và 5: $P(4)=19,84$, $P(5)=19,64$ nghìn đồng; chọn 4.
    
    <span data-thpt-help-id="HELP-G12-B05-TRY07" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không tự làm tròn mọi nghiệm nếu chưa kiểm hai ứng viên. [Luyện lại câu tương ứng](../luyen-tap/#thpt-g12-chi-b05-p06)

    ### 1.8. Cực tiểu vật liệu với thể tích cố định
    
    Hình trụ kín bán kính r, cao h, V cố định: $h=V/(\pi r^2)$, diện tích $S=2\pi r^2+2V/r$, r>0. $S'=4\pi r-2V/r^2$; đổi dấu từ − sang + tại $r^3=V/(2\pi)$, h=2r.
    
    **Vận dụng.** Hộp trụ kín có V=54π cm³. Tìm r,h để dùng ít vật liệu nhất.
    
    <span data-ped-first-try="8" data-outcome-id="G12-B05-OPTIMIZATION_DERIVATIVE" data-thpt-first-try-id="THPT-G12-B05-TRY08" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $r^3=27$, r=3 cm, $h=54/9=6$ cm. $S=54\pi$ cm². Hai đầu r→0+ và r→∞ cho S→∞; nghiệm là min.
    
    <span data-thpt-help-id="HELP-G12-B05-TRY08" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Kiểm có hai nắp và đơn vị; không lẫn bài hộp không nắp. [Luyện lại câu tương ứng](../luyen-tap/#thpt-g12-chi-b05-p04)

=== "Kiến thức SGK"

    ### 2.1. Tốc độ thay đổi của một đại lượng
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Tốc độ thay đổi của một đại lượng</strong><p>Tốc độ tức thời của y=f(x) tại x là \(f'(x)\) nếu tồn tại. Với tọa độ s(t), \(v=s'(t)\) và \(a=s''(t)\); tốc độ \(|v|\). Đơn vị đạo hàm là đơn vị y trên đơn vị x; nếu x là thời gian, v có đơn vị độ dài/thời gian. Với chi phí C(q), C′(q) là chi phí cận biên; xấp xỉ \(\Delta C\approx C'(q)\Delta q\) chỉ hữu ích khi bước đủ nhỏ.</p></div>

    ### 2.2. Một vài bài toán tối ưu hóa đơn giản
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Một vài bài toán tối ưu hóa đơn giản</strong><p>Đặt biến và đơn vị → dùng ràng buộc để lập hàm mục tiêu một biến → xác định miền khả thi → tính đạo hàm và xét dấu/bảng biến thiên → so sánh biên hợp lệ hoặc giới hạn → trả lời và kiểm mô hình. Nếu có giá p theo lượng q, doanh thu R=qp(q), lợi nhuận P=R−C; có thể phải giải quan hệ cầu q=q(p) thành p=p(q) trước. Không tối ưu ngoài miền giá không âm, sản lượng không âm hoặc miền thực nghiệm.</p></div>

=== "Ví dụ"

    ### 3.1. Chuyển động
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B05-R02-01"><p><strong>Đề bài:</strong> \(s(t)=t^3-3t^2+4\) m, t≥0. Tìm chiều đi và gia tốc tại t=1.</p><p><strong>Phân tích:</strong> Tính v trước rồi a.</p><p><strong>Lời giải:</strong> \(v=3t(t-2)\), âm (0,2), dương (2,+∞); tại 1, v=−3 m/s, a=6t−6=0.</p><p><strong>Kiểm lại:</strong> Vị trí dương không quyết định chiều đi.</p></div>

    ### 3.2. Cận biên
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B05-R02-02"><p><strong>Đề bài:</strong> \(C=0,03q^2+4q+500\) nghìn đồng. So C′(50) với chênh lệch khi tăng 1 sp.</p><p><strong>Phân tích:</strong> Đạo hàm và sai phân là hai phép khác nhau.</p><p><strong>Lời giải:</strong> \(C'=0,06q+4\), tại 50 bằng 7 nghìn đồng/sp; chênh lệch \(0,03(101)+4=7,03\) nghìn đồng.</p><p><strong>Kiểm lại:</strong> Xấp xỉ hợp lý ở quy mô mô hình, không bằng hẳn.</p></div>

    ### 3.3. Vườn sát tường
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B05-R02-03"><p><strong>Đề bài:</strong> Có 64 m rào cho ba cạnh.</p><p><strong>Phân tích:</strong> Hai cạnh vuông góc x, cạnh kia 64−2x.</p><p><strong>Lời giải:</strong> \(A=x(64-2x)\), 0&lt;x&lt;32; \(A'=64-4x\). Max tại 16, cạnh kia 32, A=512 m².</p><p><strong>Kiểm lại:</strong> Rào 16+16+32=64.</p></div>

    ### 3.4. Gấp hộp chữ nhật
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B05-R02-04"><p><strong>Đề bài:</strong> Tấm 30×20 cm, cắt x ở bốn góc.</p><p><strong>Phân tích:</strong> Lập hàm theo kích thước còn lại.</p><p><strong>Lời giải:</strong> \(V=600x-100x^2+4x^3\), 0&lt;x&lt;10; \(V'=600-200x+12x^2\). Nghiệm hợp lệ \((25-5\sqrt7)/3\approx3,924\); nghiệm kia &gt;10 bị loại. Dấu + rồi −, đạt max tại nghiệm hợp lệ.</p><p><strong>Kiểm lại:</strong> Xem hình; thể tích 0 ở biên không phải min đạt. Câu ôn Written dùng lại mô hình này, không gọi là chưa xem.</p></div>

    ### 3.5. Lợi nhuận từ quan hệ cầu
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B05-R02-05"><p><strong>Đề bài:</strong> Lượng cầu q=240−6p với p nghìn đồng/sp, C=8q+300 nghìn đồng. Tối đa lợi nhuận.</p><p><strong>Phân tích:</strong> Giải p theo q trước; yêu cầu p,q≥0.</p><p><strong>Lời giải:</strong> \(p=40-q/6\), \(0\le q\le240\). \(P=32q-q^2/6-300\); \(P'=32-q/3\) đổi +→− tại q=96. \(p=24\), \(P(96)=1236\) nghìn đồng.</p><p><strong>Kiểm lại:</strong> q=96 nguyên, giá dương; P(0)=−300, P(240)=−2220.</p></div>

    ### 3.6. Hình trụ kín dùng ít vật liệu
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B05-R02-06"><p><strong>Đề bài:</strong> Thể tích 128π cm³, bán kính r, cao h. Tìm kích thước làm diện tích toàn phần nhỏ nhất.</p><p><strong>Phân tích:</strong> Cố định V, loại h bằng r.</p><p><strong>Lời giải:</strong> \(h=128/r^2\), \(S=2\pi r^2+256\pi/r\). \(S'=4\pi(r^3-64)/r^2\) đổi −→+ tại r=4; h=8 cm, \(S=96\pi\) cm². Hai biên vô hạn nên đây là min toàn miền.</p><p><strong>Kiểm lại:</strong> π·4²·8=128π; hai nắp và mặt bên đầy đủ.</p></div>

    ### 3.7. Hình trụ không nắp: kiểm giả định
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B05-R02-07"><p><strong>Đề bài:</strong> Thể tích 16π cm³, hình trụ chỉ có đáy và mặt bên.</p><p><strong>Phân tích:</strong> Công thức diện tích khác với hình trụ kín.</p><p><strong>Lời giải:</strong> \(h=16/r^2\), \(S=\pi r^2+32\pi/r\); \(S'=2\pi(r^3-16)/r^2\) đổi −→+ tại \(r=\sqrt[3]{16}\), khi đó h=r.</p><p><strong>Kiểm lại:</strong> Không dùng kết luận h=2r của hình trụ kín.</p></div>

=== "Lỗi thường gặp"

    ### 4.1. Tốc độ thay đổi tức thời
    
    ??? tip "Cách tự sửa"
    
        Không gọi 12 L hay vận tốc. Sau khi kiểm lại lý do, tự giải một câu khác trong [Core/Luyện tập](../luyen-tap/#thpt-g12-chi-b05-c01).

    ### 4.2. Vận tốc, tốc độ, gia tốc
    
    ??? tip "Cách tự sửa"
    
        Xét đồng thời v,a. Sau khi kiểm lại lý do, tự giải một câu khác trong [Core/Luyện tập](../luyen-tap/#thpt-g12-chi-b05-c02).

    ### 4.3. Chi phí cận biên
    
    ??? tip "Cách tự sửa"
    
        Đạo hàm không phải tổng chi phí hoặc sai phân chính xác. Sau khi kiểm lại lý do, tự giải một câu khác trong [Core/Luyện tập](../luyen-tap/#thpt-g12-chi-b05-c03).

    ### 4.4. Ràng buộc hình học và miền
    
    ??? tip "Cách tự sửa"
    
        Kiểm cả hai chiều đáy. Sau khi kiểm lại lý do, tự giải một câu khác trong [Core/Luyện tập](../luyen-tap/#thpt-g12-chi-b05-c04).

    ### 4.5. Tối ưu trên miền khả thi
    
    ??? tip "Cách tự sửa"
    
        Không tính hàng rào cạnh sát tường. Sau khi kiểm lại lý do, tự giải một câu khác trong [Core/Luyện tập](../luyen-tap/#thpt-g12-chi-b05-p04).

    ### 4.6. Không nhận hộp suy biến
    
    ??? tip "Cách tự sửa"
    
        Phân biệt giới hạn với điểm khả thi. Sau khi kiểm lại lý do, tự giải một câu khác trong [Core/Luyện tập](../luyen-tap/#thpt-g12-chi-b05-p05).

    ### 4.7. Kiểm đơn vị và tính rời rạc
    
    ??? tip "Cách tự sửa"
    
        Không tự làm tròn mọi nghiệm nếu chưa kiểm hai ứng viên. Sau khi kiểm lại lý do, tự giải một câu khác trong [Core/Luyện tập](../luyen-tap/#thpt-g12-chi-b05-p06).

    ### 4.8. Cực tiểu vật liệu với thể tích cố định
    
    ??? tip "Cách tự sửa"
    
        Kiểm có hai nắp và đơn vị; không lẫn bài hộp không nắp. Sau khi kiểm lại lý do, tự giải một câu khác trong [Core/Luyện tập](../luyen-tap/#thpt-g12-chi-b05-p04).

    [Core Bài 5](../luyen-tap/#b05-core) · [Luyện tập, Vận dụng, Tự luận](../luyen-tap/#b05-practice) · [Hỗ trợ khi gặp khó khăn](../luyen-tap/#b05-help) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md)

*Nguồn đối chiếu: SGK Toán 12 Kết nối tri thức, Tập một, trang in 33–41.*
