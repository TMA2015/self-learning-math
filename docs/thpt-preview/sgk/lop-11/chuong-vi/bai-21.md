# Bài 21. Phương trình, bất phương trình mũ và lôgarit

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VI · SGK KNTT TẬP 2</p><p class="thpt-r4-lead">Giải bài toán tìm số mũ và vượt ngưỡng bằng tính đơn ánh, chiều biến thiên, điều kiện xác định và kiểm nghiệm.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương VI</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Khi biết số dư muốn đạt, tuổi của một vật theo mô hình suy giảm hoặc mức áp suất cần đạt, ta thường phải tìm biến nằm trong số mũ hoặc lôgarit. Bài 20 cho biết hàm nào tăng, hàm nào giảm, giải thích tại sao khi so sánh có lúc phải đảo chiều. Điều kiện xác định là bước đầu tiên, không phải ghi chú cuối bài.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVI-B21-01_R00.svg" alt="Hai đồ thị hàm mũ cơ số 2 và 1/2 biểu diễn chiều tăng và giảm"><figcaption>Đọc hình: khi cùng tăng hoành độ, \(y=2^x\) tăng nhưng \(y=(1/2)^x\) giảm; cả hai đi qua \((0;1)\) và luôn dương. Với hai số mũ khác nhau, nhìn chiều của đường cong để dự đoán thứ tự tung độ trước khi áp dụng bất đẳng thức.</figcaption></figure>

    ### 1.1. Phương trình mũ: tìm số mũ từ giá trị dương

    Một hàm mũ cơ số dương khác 1 nhận mỗi giá trị dương đúng một lần, vì tăng hoặc giảm nghiêm ngặt. Nếu hai vế đưa được về cùng cơ số hợp lệ, ta so số mũ; nếu không, dùng lôgarit. Vế phải không dương không thể bằng một lũy thừa cơ số dương.

    **Vận dụng — Tự thử trước Core.** Giải \(4^{x-2}=32\).

    <span data-ped-first-try="1" data-outcome-id="G11-B21-EXP_EQUATION" data-thpt-first-try-id="THPT-G11-B21-TRY01" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Đưa về cơ số 2: \(2^{2x-4}=2^5\). Vì \(2\gt 1\), hai số mũ bằng nhau: \(2x-4=5\), suy ra \(x=9/2\). Thế lại \(4^{5/2}=32\).

    <span data-thpt-help-id="HELP-G11-B21-TRY01" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Chia hai vế như một phương trình bậc nhất hoặc chỉ so hệ số.

        **Tự sửa:** Đưa cùng cơ số, tìm số mũ bằng tính đơn ánh. [Làm lại câu B21-C01](../luyen-tap/?item=THPT-G11-CHVI-B21-C01).

    ### 1.2. Phương trình lôgarit: điều kiện rồi đổi về lũy thừa

    \(\log_a U(x)=b\) có nghĩa khi \(a\gt 0,a\ne1,U(x)\gt 0\). Từ định nghĩa, điều đó tương đương \(U(x)=a^b\); giá trị a^b dương, nhưng vẫn phải kiểm miền của mọi biểu thức ban đầu.

    **Vận dụng — Tự thử trước Core.** Giải \(\log_5(2x+3)=-1\), kèm điều kiện xác định.

    <span data-ped-first-try="2" data-outcome-id="G11-B21-LOG_EQUATION" data-thpt-first-try-id="THPT-G11-B21-TRY02" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Điều kiện \(x\gt -3/2\). Đổi về lũy thừa: \(2x+3=1/5\), suy ra \(2x=-14/5\), \(x=-7/5\). Nghiệm thỏa điều kiện vì \(2x+3=1/5\gt 0\).

    <span data-thpt-help-id="HELP-G11-B21-TRY02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Bỏ điều kiện hoặc coi số mũ âm là đối số âm.

        **Tự sửa:** Tìm miền, đổi logarit sang lũy thừa rồi kiểm lại. [Làm lại câu B21-C02](../luyen-tap/?item=THPT-G11-CHVI-B21-C02).

    ### 1.3. Bất phương trình mũ và cơ số nhỏ hơn 1

    Khi so hai giá trị mũ cùng cơ số, cơ số lớn hơn 1 giữ thứ tự số mũ; cơ số trong (0,1) đảo thứ tự. Nếu so với một số không dương, dùng ngay tính dương của hàm mũ thay vì lấy lôgarit của số đó.

    **Vận dụng — Tự thử trước Core.** Giải \((1/5)^{3x+1}\ge(1/5)^7\). Vì sao dấu phải đảo?

    <span data-ped-first-try="3" data-outcome-id="G11-B21-EXP_INEQUALITY" data-thpt-first-try-id="THPT-G11-B21-TRY03" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Cơ số \(1/5\) thuộc (0,1) nên hàm nghịch biến. Bất phương trình tương đương \(3x+1\le7\), tức \(x\le2\). Dấu bằng vẫn được nhận vì đề cho \(\ge\).

    <span data-thpt-help-id="HELP-G11-B21-TRY03" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Giữ chiều như trường hợp cơ số lớn hơn 1.

        **Tự sửa:** Viết ngay bên cạnh cơ số chữ 'giảm', đảo chiều rồi kiểm điểm biên. [Làm lại câu B21-P03](../luyen-tap/?item=THPT-G11-CHVI-B21-P03).

    ### 1.4. Bất phương trình lôgarit: kết hợp miền và chiều

    Với cơ số \(0\lt a\lt 1\), \(\log_a U\gt \log_a V\) khi \(0\lt U\lt V\). Việc đảo chiều chỉ do hàm nghịch biến; tính dương của cả hai đối số vẫn là điều kiện bắt buộc.

    **Vận dụng — Tự thử trước Core.** Giải \(\log_{1/5}(3-x)\ge\log_{1/5}2\).

    <span data-ped-first-try="4" data-outcome-id="G11-B21-LOG_INEQUALITY" data-thpt-first-try-id="THPT-G11-B21-TRY04" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Điều kiện \(x\lt 3\). Cơ số \(1/5\lt 1\) nên \(3-x\le2\), tương đương \(x\ge1\). Giao điều kiện: \(x\in[1,3)\). Tại x=3, đối số bằng 0 nên bị loại.

    <span data-thpt-help-id="HELP-G11-B21-TRY04" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Chỉ giải bất đẳng thức mới mà quên giao miền logarit.

        **Tự sửa:** Viết hai dòng điều kiện và nghiệm đại số, lấy giao sau cùng. [Làm lại câu B21-P04](../luyen-tap/?item=THPT-G11-CHVI-B21-P04).

    ### 1.5. Điều kiện giao của nhiều đối số: nghiệm ngoại lai

    Hai logarit có thể chứa các biểu thức khác nhau. Phải tìm giao miền của tất cả logarit trước khi bỏ ký hiệu log; một nghiệm của phương trình đối số bằng nhau không tự động là nghiệm của phương trình ban đầu.

    **Vận dụng — Tự thử trước Core.** Giải \(\log_7(x-1)=\log_7(5-x)\). Sau đó giải cùng dạng nhưng thay 5-x bằng \(1-x\).

    <span data-ped-first-try="5" data-outcome-id="G11-B21-DOMAIN_CHECK" data-thpt-first-try-id="THPT-G11-B21-TRY05" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Trường hợp đầu: \(1\lt x\lt 5\), phương trình tương đương \(x-1=5-x\) nên \(x=3\), hợp lệ. Trường hợp sau cần \(x\gt 1\) đồng thời \(x\lt 1\), không có x, nên vô nghiệm trước khi biến đổi đại số.

    <span data-thpt-help-id="HELP-G11-B21-TRY05" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Giải hai đối số bằng nhau kể cả khi không tồn tại miền chung.

        **Tự sửa:** Lập giao điều kiện dương; nếu rỗng, dừng và kết luận vô nghiệm. [Làm lại câu B21-P05](../luyen-tap/?item=THPT-G11-CHVI-B21-P05).

    ### 1.6. Vượt ngưỡng khác vừa đạt ngưỡng

    Một mức tăng theo kỳ có thể được mô tả bằng \(P(n)=P_0(1+r)^n\) với n nguyên không âm. Nếu n là số kỳ cập nhật, nghiệm số thực của phương trình chỉ cho ngưỡng toán học; phải chọn đúng số kỳ nguyên theo dấu > hoặc ≥.

    **Vận dụng — Tự thử trước Core.** Vốn 50 triệu tăng 20% cuối mỗi năm, nhập lãi và không phí. Năm đầu tiên số dư vượt 72 triệu là năm nào?

    <span data-ped-first-try="6" data-outcome-id="G11-B21-REAL_CONTEXT" data-thpt-first-try-id="THPT-G11-B21-TRY06" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(50(1{,}2)^n\gt 72\) tương đương \(1{,}2^n\gt 1{,}44=(1{,}2)^2\). Vì cơ số lớn hơn 1, \(n\gt 2\); n nguyên không âm nên năm đầu vượt là \(n=3\). Sau 2 năm chỉ bằng 72 triệu.

    <span data-thpt-help-id="HELP-G11-B21-TRY06" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Làm tròn ngưỡng 2 thành năm đạt mục tiêu dù hỏi vượt.

        **Tự sửa:** Ghi dấu strict >, n nguyên; kiểm năm ngay trước và năm đã chọn. [Làm lại câu B21-P06](../luyen-tap/?item=THPT-G11-CHVI-B21-P06).

=== "Kiến thức SGK"

    ### 2.1. Phương trình mũ

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Phương trình cơ bản.</strong> \(a^x=b\) với \(a\gt 0,a\ne1\). Nếu \(b\gt 0\), có nghiệm duy nhất \(x=\log_a b\); nếu \(b\le0\), vô nghiệm.</div>
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Phương pháp đưa về cùng cơ số.</strong> Với \(a\gt 0,a\ne1\),
    \[
    a^{u(x)}=a^{v(x)}\Longleftrightarrow u(x)=v(x)
    \]
    trên miền các biểu thức xác định.</div>
    
    Nếu không đưa được cùng cơ số thuận tiện, cô lập lũy thừa và lấy logarit khi vế còn lại dương. Tính đơn ánh của hàm mũ là lý do biến đổi tương đương, không phải quy tắc hủy ký hiệu tùy ý.

    ### 2.2. Phương trình lôgarit

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Phương trình cơ bản.</strong> \(\log_a x=b\), \(a\gt 0,a\ne1,\ b\in\mathbb R\), có nghiệm duy nhất \(x=a^b\), luôn dương.</div>
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Đưa về cùng cơ số.</strong> Với \(u,v\gt 0,\ a\gt 0,a\ne1\), \(\log_a u=\log_a v\) tương đương \(u=v\).</div>
    
    **Quy trình:** tìm miền dương của từng đối số, sau đó biến đổi về dạng cơ bản bằng quy tắc logarit có điều kiện. Giải đại số và giao với miền gốc; thế lại nếu biến đổi có thể sinh nghiệm ngoại lai. Với \(\log_a u+\log_a v\), chỉ gộp thành logarit của tích trên miền \(u\gt 0,v\gt 0\).

    ### 2.3. Bất phương trình mũ

    Với \(a\gt 0,a\ne1\), các bất phương trình cơ bản có dạng \(a^x\gt b,\ a^x\ge b,\ a^x\lt b,\ a^x\le b\).
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất so sánh.</strong> Nếu \(a\gt 1\), \(a^u\gt a^v\Longleftrightarrow u\gt v\). Nếu \(0\lt a\lt 1\), \(a^u\gt a^v\Longleftrightarrow u\lt v\). Các dấu \(\ge,\lt ,\le\) được xử lý theo cùng nguyên lý.</div>
    
    Nếu \(b\gt 0\), đặt \(k=\log_a b\). Tập nghiệm của bốn dạng cơ bản:
    
    | Điều kiện | \(a^x\gt b\) | \(a^x\ge b\) | \(a^x\lt b\) | \(a^x\le b\) |
    | --- | --- | --- | --- | --- |
    | \(a\gt 1\) | \(x\gt k\) | \(x\ge k\) | \(x\lt k\) | \(x\le k\) |
    | \(0\lt a\lt 1\) | \(x\lt k\) | \(x\le k\) | \(x\gt k\) | \(x\ge k\) |
    
    Nếu \(b\le0\), \(a^x\gt 0\) nên hai dạng \(\gt ,\ge\) có nghiệm mọi x thực; hai dạng \(\lt ,\le\) vô nghiệm. Không lấy \(\log_a b\) trong trường hợp này. Với số mũ u(x), tiếp tục xét miền xác định của u.

    ### 2.4. Bất phương trình lôgarit

    Mọi bất phương trình \(\log_a x\gt b,\ge b,\lt b,\le b\) đều yêu cầu \(a\gt 0,a\ne1,x\gt 0\).
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất.</strong> Với \(u,v\gt 0\), nếu \(a\gt 1\) thì \(\log_a u\gt \log_a v\Longleftrightarrow u\gt v\); nếu \(0\lt a\lt 1\) thì \(\log_a u\gt \log_a v\Longleftrightarrow u\lt v\). Đảo hoặc giữ chiều đồng thời bảo toàn điều kiện dương của các đối số.</div>
    
    Đặt \(k=a^b\gt 0\), ta có:
    
    | Điều kiện | \(\log_a x\gt b\) | \(\log_a x\ge b\) | \(\log_a x\lt b\) | \(\log_a x\le b\) |
    | --- | --- | --- | --- | --- |
    | \(a\gt 1\) | \(x\gt k\) | \(x\ge k\) | \(0\lt x\lt k\) | \(0\lt x\le k\) |
    | \(0\lt a\lt 1\) | \(0\lt x\lt k\) | \(0\lt x\le k\) | \(x\gt k\) | \(x\ge k\) |
    
    Với đối số chứa biến, thay x bằng biểu thức và giải cùng điều kiện miền gốc. Với mô hình thực tiễn, thêm điều kiện thời gian, đơn vị, dấu ngưỡng nghiêm ngặt và việc biến thời gian là thực hay nguyên. Không biến kết quả gần đúng thành kết luận nguyên mà chưa kiểm kỳ liền trước.

=== "Ví dụ"

    ### 3.1. Phương trình mũ không cùng cơ số dễ nhận

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Giải \(6^{2x-1}=11\).</p><p><strong>Phân tích:</strong> Vế phải dương nhưng không dễ viết thành lũy thừa nguyên của 6; lấy logarit cơ số 6.</p><p><strong>Lời giải:</strong> \(2x-1=\log_6 11\), suy ra \(x=(1+\log_6 11)/2\).</p><p><strong>Kiểm lại:</strong> Thế số mũ bằng log_6 11 cho giá trị 11, nghiệm duy nhất vì hàm mũ đơn ánh.</p></div>

    ### 3.2. Phương trình logarit ghép tích

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Giải \(\log_2(x-2)+\log_2(x+1)=2\).</p><p><strong>Phân tích:</strong> Tìm giao điều kiện rồi gộp tích.</p><p><strong>Lời giải:</strong> Điều kiện \(x\gt 2\). Khi đó \((x-2)(x+1)=4\), tức \(x^2-x-6=0\), có \(x=3,-2\). Chỉ \(x=3\) thỏa miền. Tập nghiệm \(\{3\}\).</p><p><strong>Kiểm lại:</strong> Tại 3, đối số 1 và 4 đều dương, tổng logarit bằng 0+2=2.</p></div>

    ### 3.3. Bất phương trình mũ với vế phải không dương

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Giải \(3^{2x+1}\le-2\) và \(3^{2x+1}\gt -2\).</p><p><strong>Phân tích:</strong> Dùng trực tiếp tính dương; không lấy logarit số âm.</p><p><strong>Lời giải:</strong> Vì \(3^{2x+1}\gt 0\) với mọi x thực, bất phương trình thứ nhất vô nghiệm; bất phương trình thứ hai có tập nghiệm \(\mathbb R\).</p><p><strong>Kiểm lại:</strong> Mọi giá trị đều dương nên luôn lớn hơn -2.</p></div>

    ### 3.4. Bất phương trình mũ giảm, có biên

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Giải \((1/4)^{2x-3}\lt (1/4)^{-1}\).</p><p><strong>Phân tích:</strong> Cơ số trong (0,1) nên đảo chiều khi so số mũ.</p><p><strong>Lời giải:</strong> \(2x-3\gt -1\) tương đương \(x\gt 1\). Tập nghiệm \((1,+\infty)\).</p><p><strong>Kiểm lại:</strong> Tại x=1 hai vế bằng nhau nên không lấy điểm biên.</p></div>

    ### 3.5. Bất phương trình lôgarit hai đối số

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Giải \(\log_{1/2}(x+4)\lt \log_{1/2}(2x-1)\).</p><p><strong>Phân tích:</strong> Hai đối số dương cho x>1/2; hàm giảm đảo chiều.</p><p><strong>Lời giải:</strong> \(x+4\gt 2x-1\), tức \(x\lt 5\). Giao miền được \((1/2,5)\).</p><p><strong>Kiểm lại:</strong> Tại x=1/2, logarit thứ hai không xác định; tại x=5 hai giá trị bằng nhau, cả hai biên đều loại.</p></div>

    ### 3.6. Mô hình suy giảm giá trị

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Giá trị tài sản theo mô hình cuối năm \(V(n)=240(0{,}8)^n\) triệu đồng, n nguyên không âm. Năm đầu giá trị không quá 100 triệu là năm nào?</p><p><strong>Phân tích:</strong> Vì cơ số nhỏ hơn 1, bất phương trình đảo chiều. Phải kiểm số nguyên.</p><p><strong>Lời giải:</strong> Ta cần \((0{,}8)^n\le5/12\), tương đương \(n\ge \ln(5/12)/\ln(0{,}8)\approx3{,}923\). Năm đầu là n=4.</p><p><strong>Kiểm lại:</strong> (V(3)=122{,}88>100), (V(4)=98{,}304le100); hợp lệ.</p></div>

    ### 3.7. Ứng dụng lôgarit tự nhiên cho áp suất

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Một mô hình \(p(h)=100e^{-h/7}\) kPa, \(h\ge0\) tính bằng km. Tìm độ cao để áp suất không quá 60 kPa.</p><p><strong>Phân tích:</strong> Chuyển tỷ số về mũ hoặc logarit; thời gian/độ cao cho phép nhận số thực.</p><p><strong>Lời giải:</strong> \(e^{-h/7}\le0{,}6\), lấy ln tăng được \(-h/7\le\ln0{,}6\). Nhân với -7 đảo dấu: \(h\ge-7\ln0{,}6\approx3{,}576\) km.</p><p><strong>Kiểm lại:</strong> Thế ngưỡng chính xác cho 60 kPa; số gần đúng chỉ để diễn giải, không đổi tập nghiệm chính xác.</p></div>

=== "Lỗi thường gặp"

    <span data-thpt-help-id="HELP-G11-CHVI-B21-01" hidden></span>

    ??? tip "4.1. Bỏ điều kiện khi giải phương trình logarit"

        **Vì sao sai:** Mỗi đối số phải dương trước mọi phép bỏ log hoặc gộp tích.

        **Tự sửa:** Lập miền và giao nghiệm; ôn mục 2.2. [Làm lại câu B21-P05](../luyen-tap/?item=THPT-G11-CHVI-B21-P05).

    <span data-thpt-help-id="HELP-G11-CHVI-B21-02" hidden></span>

    ??? tip "4.2. Quên đảo chiều với cơ số trong (0,1)"

        **Vì sao sai:** Hàm mũ và logarit cơ số này đều nghịch biến.

        **Tự sửa:** Quan sát hình và kiểm chiều bằng hai số mũ cụ thể. [Làm lại câu B21-P04](../luyen-tap/?item=THPT-G11-CHVI-B21-P04).

    <span data-thpt-help-id="HELP-G11-B21-03" hidden></span>

    ??? tip "4.3. Lấy lôgarit của vế phải không dương"

        **Vì sao sai:** Giá trị lũy thừa cơ số dương luôn dương; phải phân loại vế phải.

        **Tự sửa:** Ôn mục 2.1, 2.3 và ví dụ 3.3. [Làm lại câu B21-P07](../luyen-tap/?item=THPT-G11-CHVI-B21-P07).

    <span data-thpt-help-id="HELP-G11-B21-04" hidden></span>

    ??? tip "4.4. Nhầm vừa đạt với vượt và bỏ miền nguyên"

        **Vì sao sai:** Một nghiệm ngưỡng thực không tự cho kỳ đầu vượt.

        **Tự sửa:** Ghi dấu > hoặc ≥; kiểm hai kỳ liền kề. [Làm lại câu B21-P06](../luyen-tap/?item=THPT-G11-CHVI-B21-P06).

    **Học tiếp:** [Core và Luyện tập](../luyen-tap/) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/) · [Tự luận Chương VI](../../../../thu-vien/tu-luan-g11-chuong-vi/).

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập hai, Bài 21 (trang in 20–24).</p>
