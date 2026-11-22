# Bài 20. Hàm số mũ và hàm số lôgarit

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VI · SGK KNTT TẬP 2</p><p class="thpt-r4-lead">Đọc đồ thị để hiểu miền xác định, tập giá trị, tính liên tục và chiều biến thiên của hai hàm ngược nhau.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương VI</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Đã biết lũy thừa và lôgarit ở Bài 18–19. Khi thời gian thay đổi, đại lượng tăng theo hệ số cố định có thể được mô tả bằng hàm số mũ. Nếu biết đại lượng muốn đạt và muốn tìm thời gian, ta dùng hàm số lôgarit. Vì thế cần biết toàn bộ quan hệ giữa đầu vào và đầu ra, chứ không chỉ tính một giá trị.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVI-B20-01_R00.svg" alt="Đồ thị hàm mũ cơ số 2 và logarit cơ số 2 đối xứng qua y=x"><figcaption>Đọc hình: đường mũ \(y=2^x\) có điểm \((0;1)\), đường logarit \(y=\log_2x\) có điểm \((1;0)\). Hoán đổi tọa độ từng điểm để chuyển qua hàm ngược; đường nét đứt \(y=x\) là trục đối xứng. Đường mũ luôn ở phía trên trục hoành, đường logarit ở bên phải trục tung.</figcaption></figure>

    ### 1.1. Biến nằm ở số mũ

    So sánh \(3^x\) với \(x^3\): trong biểu thức thứ nhất cơ số không đổi và biến ở số mũ; biểu thức thứ hai là lũy thừa của biến. Với \(a>0,a\ne1\), \(a^x\) xác định cho mọi x thực và luôn dương.

    **Vận dụng — Tự thử trước Core.** Hàm \(y=4^x\) có thể nhận giá trị 0 hoặc -1 không? Tính giá trị tại \(x=-1,0,1\).

    <span data-ped-first-try="1" data-outcome-id="G11-B20-EXP_FUNCTION" data-thpt-first-try-id="THPT-G11-B20-TRY01" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Không, vì \(4^x>0\) với mọi x thực. Ba giá trị lần lượt là \(1/4,1,4\). Cơ số dương cho phép cả mũ âm lẫn mũ không nguyên.

    <span data-thpt-help-id="HELP-G11-B20-TRY01" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Tưởng mũ âm làm kết quả âm.

        **Tự sửa:** Tính ba điểm mốc và kiểm miền giá trị ở mục 2.1. [Làm lại câu B20-C01](../luyen-tap/?item=THPT-G11-CHVI-B20-C01).

    ### 1.2. Hai cơ số ở hai phía của 1 dẫn tới hai chiều biến thiên

    Mỗi lần tăng x thêm 1, giá trị \(a^x\) được nhân a. Với \(a>1\), nhân a làm số dương tăng; với \(0<a<1\), nó giảm. Quy tắc so sánh lũy thừa ở Bài 18 mở rộng điều này cho mọi x thực.

    **Vận dụng — Tự thử trước Core.** Không dùng máy tính, so sánh \((2/3)^{\sqrt2}\) và \((2/3)^2\).

    <span data-ped-first-try="2" data-outcome-id="G11-B20-EXP_MONOTONIC" data-thpt-first-try-id="THPT-G11-B20-TRY02" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Vì \(0<2/3<1\), hàm số mũ nghịch biến. \(\sqrt2<2\) nên \((2/3)^{\sqrt2}>(2/3)^2=4/9\).

    <span data-thpt-help-id="HELP-G11-B20-TRY02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Chỉ so số mũ rồi giữ chiều bất kể cơ số.

        **Tự sửa:** Xác định a lớn hay nhỏ hơn 1 trước, đối chiếu mục 2.1. [Làm lại câu B20-C02](../luyen-tap/?item=THPT-G11-CHVI-B20-C02).

    ### 1.3. Logarit chỉ tiếp nhận đầu vào dương

    Với \(y=\log_a x\), ta hiểu \(a^y=x\). Mọi \(a^y\) dương, nên không nhận x bằng 0 hoặc âm. Nếu đầu vào logarit là một biểu thức, phải tìm nơi biểu thức đó dương chứ không luôn yêu cầu x>0.

    **Vận dụng — Tự thử trước Core.** Tìm tập xác định của \(f(x)=\log_4(7-2x)\).

    <span data-ped-first-try="3" data-outcome-id="G11-B20-LOG_FUNCTION" data-thpt-first-try-id="THPT-G11-B20-TRY03" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Cơ số 4 hợp lệ. \(7-2x>0\) tương đương \(x<7/2\). Tập xác định là \((-\infty,7/2)\). Không thêm x>0 vì đối số là 7-2x.

    <span data-thpt-help-id="HELP-G11-B20-TRY03" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Nhầm điều kiện biến x dương với điều kiện đối số dương.

        **Tự sửa:** Viết đúng đối số trên giấy rồi giải bất phương trình của nó. [Làm lại câu B20-C03](../luyen-tap/?item=THPT-G11-CHVI-B20-C03).

    ### 1.4. Chiều biến thiên của hàm lôgarit

    Hàm lôgarit đi ngược hàm mũ; nếu cơ số lớn hơn 1, đầu vào lớn hơn ứng với số mũ lớn hơn. Nếu cơ số giữa 0 và 1, đầu vào lớn hơn lại ứng với số mũ nhỏ hơn.

    **Vận dụng — Tự thử trước Core.** So sánh \(\log_{1/3} 2\) và \(\log_{1/3} 7\), không tính gần đúng.

    <span data-ped-first-try="4" data-outcome-id="G11-B20-LOG_MONOTONIC" data-thpt-first-try-id="THPT-G11-B20-TRY04" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Hai đối số đều dương. Vì \(2<7\) và cơ số \(1/3\) nằm giữa 0 và 1, hàm nghịch biến, nên \(\log_{1/3}2>\log_{1/3}7\).

    <span data-thpt-help-id="HELP-G11-B20-TRY04" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Tưởng mọi hàm logarit đều đồng biến.

        **Tự sửa:** Kiểm cơ số và miền trước khi so; ôn mục 2.2. [Làm lại câu B20-P03](../luyen-tap/?item=THPT-G11-CHVI-B20-P03).

    ### 1.5. Hàm ngược: đổi đầu vào và đầu ra

    Từ \(a^u=v\) suy ra \(\log_a v=u\). Vì vậy điểm \((u;v)\) của đồ thị mũ ứng với \((v;u)\) trên đồ thị logarit. Đây là phép hoán đổi, không phải đổi dấu hai tọa độ.

    **Vận dụng — Tự thử trước Core.** Đồ thị \(y=5^x\) chứa điểm \((-2;1/25)\). Hãy chỉ ra điểm tương ứng trên đồ thị \(y=\log_5x\), rồi kiểm bằng định nghĩa.

    <span data-ped-first-try="5" data-outcome-id="G11-B20-INVERSE_GRAPH" data-thpt-first-try-id="THPT-G11-B20-TRY05" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Điểm tương ứng là \((1/25;-2)\). Vì \(5^{-2}=1/25\), \(\log_5(1/25)=-2\). Đầu vào logarit dương đúng điều kiện.

    <span data-thpt-help-id="HELP-G11-B20-TRY05" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Đổi dấu tọa độ thay vì hoán đổi chúng.

        **Tự sửa:** Viết a^u=v rồi viết log_a v=u, kiểm hai điểm theo thứ tự. [Làm lại câu B20-C04](../luyen-tap/?item=THPT-G11-CHVI-B20-C04).

=== "Kiến thức SGK"

    ### 2.1. Hàm số mũ

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa.</strong> Với \(a>0,a\ne1\), hàm số \(y=a^x\) gọi là hàm số mũ cơ số a.</div>
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất.</strong> Tập xác định \(\mathbb R\), tập giá trị \((0,+\infty)\); liên tục trên \(\mathbb R\); đồng biến khi \(a>1\), nghịch biến khi \(0<a<1\). Đồ thị qua \((0;1),(1;a)\), luôn nằm phía trên trục hoành.</div>
    
    Để vẽ đồ thị, lập bảng các x như \(-2,-1,0,1,2\), tính a^x rồi biểu diễn điểm và nối thành đường cong theo tính liên tục/biến thiên. Với \(a>1\), đồ thị tiến sát \(y=0\) khi \(x\to-\infty\); với \(0<a<1\), tiến sát khi \(x\to+\infty\). Đồ thị không cắt trục hoành.
    
    | \(x\) | -2 | -1 | 0 | 1 | 2 |
    | --- | ---: | ---: | ---: | ---: | ---: |
    | \(3^x\) | \(1/9\) | \(1/3\) | 1 | 3 | 9 |
    | \((1/3)^x\) | 9 | 3 | 1 | \(1/3\) | \(1/9\) |
    
    Đọc bảng từ trái sang phải để thấy mẫu tăng/giảm. Không nối các điểm bằng đoạn thẳng và gọi đó là đồ thị chính xác.

    ### 2.2. Hàm số lôgarit

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa.</strong> Với \(a>0,a\ne1\), hàm số \(y=\log_a x\) là hàm lôgarit cơ số a.</div>
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất.</strong> Tập xác định \((0,+\infty)\), tập giá trị \(\mathbb R\); liên tục trên \((0,+\infty)\); đồng biến nếu \(a>1\), nghịch biến nếu \(0<a<1\). Đồ thị qua \((1;0),(a;1)\), luôn nằm bên phải trục tung.</div>
    
    Lập bảng từ \(x=a^k\) với một số k nguyên, giá trị \(y=k\). Khi \(x\to0^+\), đồ thị tiến sát đường thẳng \(x=0\), với \(a>1\) thì y tiến về \(-\infty\), với \(0<a<1\) thì y tiến về \(+\infty\).
    
    | \(x\) | \(1/9\) | \(1/3\) | 1 | 3 | 9 |
    | --- | ---: | ---: | ---: | ---: | ---: |
    | \(\log_3 x\) | -2 | -1 | 0 | 1 | 2 |
    | \(\log_{1/3} x\) | 2 | 1 | 0 | -1 | -2 |
    
    **Liên hệ hai hàm:** \(y=a^x\) và \(y=\log_a x\) là hai hàm ngược, đối xứng qua \(y=x\). Các tọa độ hoán đổi, miền xác định của hàm này là tập giá trị của hàm kia. Với biểu thức logarit có đối số \(g(x)\), phải kiểm \(g(x)>0\) trước khi áp dụng tính chất.

=== "Ví dụ"

    ### 3.1. Phân biệt hàm mũ và lũy thừa của biến

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Trong \(y=7^x\) và \(y=x^7\), đâu là hàm số mũ? Nêu miền và tập giá trị của hàm mũ.</p><p><strong>Phân tích:</strong> Cơ số cố định, biến ở số mũ mới là hàm mũ.</p><p><strong>Lời giải:</strong> \(y=7^x\) là hàm mũ, xác định trên \(\mathbb R\), nhận mọi giá trị dương; tăng và đi qua (0;1),(1;7). \(x^7\) là hàm lũy thừa của biến.</p><p><strong>Kiểm lại:</strong> x^7 có thể âm, nên không gán tập giá trị dương của hàm mũ cho nó.</p></div>

    ### 3.2. Lập điểm để vẽ một hàm mũ giảm

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Phác đồ thị \(y=(1/4)^x\) bằng năm điểm ứng với x=-2,-1,0,1,2.</p><p><strong>Phân tích:</strong> Tính giá trị, xác định chiều trước khi vẽ.</p><p><strong>Lời giải:</strong> Các tung độ là \(16,4,1,1/4,1/16\). Đồ thị đi qua năm điểm đó, là đường liên tục giảm, ở trên trục hoành và tiến sát trục hoành về bên phải.</p><p><strong>Kiểm lại:</strong> Kiểm điểm (0;1) và mỗi bước sang phải chia 4; hai đầu không tự nối thẳng.</p></div>

    ### 3.3. Tìm miền xác định có căn và logarit

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Tìm miền xác định của \(y=\ln(16-x^2)\).</p><p><strong>Phân tích:</strong> Logarit tự nhiên có cơ số e hợp lệ; đối số phải thật sự dương.</p><p><strong>Lời giải:</strong> \(16-x^2>0\) tương đương \(-4<x<4\), nên \(D=(-4,4)\).</p><p><strong>Kiểm lại:</strong> Không lấy ±4 vì tại đó đối số bằng 0.</p></div>

    ### 3.4. Lập điểm để vẽ một hàm logarit giảm

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Phác đồ thị \(y=\log_{1/4}x\) từ các đầu vào \(1/16,1/4,1,4,16\).</p><p><strong>Phân tích:</strong> Viết từng đầu vào là lũy thừa của 1/4.</p><p><strong>Lời giải:</strong> Các giá trị lần lượt \(2,1,0,-1,-2\). Đồ thị liên tục giảm trên x>0, qua (1;0),(1/4;1); tiến sát trục tung khi x tiến về 0 từ bên phải.</p><p><strong>Kiểm lại:</strong> Không vẽ điểm ở x=0 hoặc x âm.</p></div>

    ### 3.5. Đọc quan hệ ngược

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Đồ thị \(y=4^x\) có điểm \((3/2;8)\). Hãy tìm điểm trên đồ thị \(y=\log_4x\).</p><p><strong>Phân tích:</strong> Hoán đổi hai vai trò, không lấy nghịch đảo tọa độ.</p><p><strong>Lời giải:</strong> \(4^{3/2}=8\) nên \(\log_4 8=3/2\); điểm cần tìm là \((8;3/2)\).</p><p><strong>Kiểm lại:</strong> Hai điểm đối xứng qua y=x.</p></div>

    ### 3.6. Mô hình suy giảm và thời điểm đạt một mức

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Khối lượng một chất theo mô hình \(Q(t)=160(1/2)^{t/6}\) gam, \(t\ge0\) tính bằng giờ. Tính Q(12), rồi tìm t khi Q(t)=20.</p><p><strong>Phân tích:</strong> Số mũ t/6 là số chu kỳ bán rã; dùng mũ để tính lượng và logarit để tìm thời gian.</p><p><strong>Lời giải:</strong> \(Q(12)=160/4=40\) gam. Khi \(Q(t)=20\), \((1/2)^{t/6}=1/8=(1/2)^3\), vậy \(t=18\) giờ.</p><p><strong>Kiểm lại:</strong> Q giảm nghiêm ngặt nên chỉ có một thời điểm này trên miền mô hình.</p></div>

=== "Lỗi thường gặp"

    <span data-thpt-help-id="HELP-G11-CHVI-B20-01" hidden></span>

    ??? tip "4.1. Cho rằng mọi hàm mũ đều tăng"

        **Vì sao sai:** Cơ số giữa 0 và 1 làm giá trị giảm khi số mũ tăng.

        **Tự sửa:** Ôn bảng ở mục 2.1 và thử hai số mũ khác nhau. [Làm lại câu B20-C02](../luyen-tap/?item=THPT-G11-CHVI-B20-C02).

    <span data-thpt-help-id="HELP-G11-CHVI-B20-02" hidden></span>

    ??? tip "4.2. Đọc đồ thị hàm ngược thành đổi dấu"

        **Vì sao sai:** Hàm mũ và logarit hoán đổi đầu vào, đầu ra, không đổi dấu.

        **Tự sửa:** Dùng đẳng thức a^u=v, rồi log_a v=u. [Làm lại câu B20-C04](../luyen-tap/?item=THPT-G11-CHVI-B20-C04).

    <span data-thpt-help-id="HELP-G11-B20-03" hidden></span>

    ??? tip "4.3. Cho rằng logarit nhận mọi x thực"

        **Vì sao sai:** Đối số logarit phải dương; logarit có thể âm nhưng không nhận đối số âm.

        **Tự sửa:** Giải điều kiện của đối số, ôn mục 2.2. [Làm lại câu B20-C03](../luyen-tap/?item=THPT-G11-CHVI-B20-C03).

    <span data-thpt-help-id="HELP-G11-B20-04" hidden></span>

    ??? tip "4.4. Đoán điểm và chiều của đồ thị"

        **Vì sao sai:** Phải dùng điểm mốc đúng và tính đơn điệu theo cơ số.

        **Tự sửa:** Kiểm (0;1) cho hàm mũ, (1;0) cho logarit rồi lập bảng. [Làm lại câu B20-P03](../luyen-tap/?item=THPT-G11-CHVI-B20-P03).

    **Học tiếp:** [Core và Luyện tập](../luyen-tap/) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/) · [Tự luận Chương VI](../../../../thu-vien/tu-luan-g11-chuong-vi/).

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập hai, Bài 20 (trang in 16–19).</p>
