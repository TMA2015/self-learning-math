# Bài 8. Mẫu số liệu ghép nhóm

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG III</p>
<p class="thpt-r4-lead">Từ những số đo riêng lẻ đến bảng phân bố: biết ghép nhóm, đọc tần số, xử lý điểm biên và nhận ra điều gì đã mất khi nén dữ liệu.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương III</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    Một khảo sát hỏi thời gian đến trường của hàng chục học sinh. Danh sách từng số phút rất chi tiết, nhưng thật khó nhìn ngay phần lớn học sinh đi khoảng bao lâu. Ta có thể đặt những số đo vào **các khoảng** rồi đếm xem mỗi khoảng có mấy số. Bảng mới dễ nhìn hơn, song không còn cho ta biết chính xác mỗi học sinh mất bao nhiêu phút. Đó là **đánh đổi giữa tính gọn và thông tin gốc** của mẫu số liệu ghép nhóm.

    Bài này dùng kiến thức bảng tần số ở lớp 10: một **tần số** vẫn là số lần xuất hiện, chỉ khác là giờ ta đếm **cả khoảng giá trị** thay vì từng số riêng. Bài 9 sẽ dùng chính những khoảng và tần số ấy để ước lượng các số đặc trưng.

    ### 1.1. Vì sao phải thống nhất điểm nằm ở ranh giới?

    Giả sử dùng hai nhóm \([2;6)\) và \([6;10)\): nhóm đầu **nhận 2 nhưng không nhận 6**; nhóm sau **nhận 6 nhưng không nhận 10**. Nhờ một đầu đóng, một đầu mở mà số liệu đúng ở ranh giới không bị đếm hai lần. Với một phép chia nhóm, phải nói rõ phạm vi dữ liệu được phủ và cách xử lý giá trị nằm đúng đầu mút cuối.

    **Vận dụng.** Trong các nhóm \([2;6),[6;10),[10;14)\), các số \(2,6,10,14\) lần lượt thuộc nhóm nào? Có số nào nằm ngoài hệ nhóm không?

    <span data-ped-first-try="1" data-outcome-id="G11-B08-CLASS-BOUNDARIES" data-thpt-first-try-id="THPT-G11-B08-TRY01" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(2\in[2;6)\); \(6\in[6;10)\); \(10\in[10;14)\). Số \(14\) **không thuộc nhóm nào**, vì nhóm cuối mở ở 14. Nếu mẫu thật có 14, phải sửa cách chia hoặc quy định rõ nhóm cuối nhận 14, không được im lặng bỏ số liệu.

    <span data-thpt-help-id="HELP-G11-B08-TRY01" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em đếm 6 trong cả hai nhóm hoặc tự thêm 14 vào nhóm cuối dù đề không cho.

        **Tự sửa:** Viết quy tắc \(a\le x<b\) cạnh mỗi khoảng và kiểm riêng hai đầu. Ôn mục 2.1; luyện Core xét biên bằng 10 và Practice ghép sáu số liệu tại <a href="../luyen-tap/">Bài 8 – Core và Luyện tập</a>.


    **Tự thử bổ sung — hiểu bản chất của mẫu ghép nhóm.** Một khảo sát ghi số người có tuổi trong hai khoảng \([18;24)\) và \([24;30)\), tương ứng là \(6\) và \(4\). Đây là bảng ghi từng tuổi chính xác hay bảng số liệu ghép nhóm? Có tất cả bao nhiêu người? Có thể khẳng định sáu người đầu đều 20 tuổi không?

    <span data-ped-first-try="7" data-outcome-id="G11-B08-GROUPED-DEFINITION" data-thpt-first-try-id="THPT-G11-B08-TRY07" hidden></span>

    ??? question "Đối chiếu — mẫu ghép nhóm"

        **Lời giải:** Đây là **bảng mẫu số liệu ghép nhóm**: mỗi khoảng tuổi đại diện một nhóm, các số \(6\) và \(4\) là **tần số nhóm**, không phải tuổi của từng người. Cỡ mẫu là \(n=6+4=10\). Không thể kết luận sáu người nhóm đầu đều 20 tuổi: chỉ biết tuổi của từng người trong khoảng \([18;24)\); những số đo gốc cụ thể đã không còn trong bảng. Hai nhóm không chồng lấn nên người đủ 24 tuổi thuộc nhóm thứ hai.

    <span data-thpt-help-id="HELP-G11-B08-TRY07" hidden></span>

    ??? tip "Kiểm lỗi — ý nghĩa ghép nhóm"

        **Dấu hiệu:** Em tưởng có \(2\) người vì bảng có hai hàng, hoặc xem trung điểm nhóm như tuổi chính xác của mọi người. **Tự sửa:** Phân biệt **số nhóm** với **tổng tần số**, ghi \(n=\sum_i m_i\), rồi chỉ ra một người thuộc khoảng nào theo dấu ngoặc. **Luyện lại:** Ôn mục 2.1, làm Core **THPT-G11-B08-C01** về cỡ mẫu và Practice **THPT-G11-B08-P08** về nhóm mở tại <a href="../luyen-tap/">Core và Luyện tập Bài 8</a>, sau đó tự thử lại.

    ### 1.2. Đếm từng quan sát và kiểm tổng tần số

    Một bảng ghép nhóm gồm **khoảng** và **tần số**. Quy trình chắc chắn là: xác định miền dữ liệu → chia nhóm không chồng lấn → đánh dấu mỗi số đúng một lần → cộng các dấu trong từng nhóm. Nếu mẫu có \(n\) quan sát và tất cả được phủ, tổng tần số phải bằng \(n\). Đó là phép kiểm quan trọng hơn việc nhìn bảng có vẻ hợp lý.

    **Vận dụng.** Ghép mười số \(2,4,6,8,9,11,14,14,16,19\) vào \([0;5),[5;10),[10;15),[15;20)\). Hãy lập bảng tần số và kiểm tổng.

    <span data-ped-first-try="2" data-outcome-id="G11-B08-FREQUENCY-TABLE" data-thpt-first-try-id="THPT-G11-B08-TRY02" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \([0;5)\) nhận \(2,4\): tần số 2. \([5;10)\) nhận \(6,8,9\): tần số 3. \([10;15)\) nhận \(11,14,14\): tần số 3. \([15;20)\) nhận \(16,19\): tần số 2. Vậy tần số **\(2,3,3,2\)** và \(2+3+3+2=10=n\).

    <span data-thpt-help-id="HELP-G11-B08-TRY02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em bỏ số 14 bị lặp, hoặc xếp số 19 sang một khoảng chưa tồn tại.

        **Tự sửa:** Đánh dấu lần lượt từng vị trí dữ liệu, **không xóa số trùng**; sau khi đếm, kiểm tổng bằng cỡ mẫu. Ôn mục 2.2 và luyện Practice ghép mười điểm trong <a href="../luyen-tap/">Core và Luyện tập Bài 8</a>.

    ### 1.3. Độ rộng nhóm giúp ta hiểu bảng đang so sánh điều gì

    Độ rộng của khoảng hữu hạn \([a;b)\) là \(h=b-a>0\). Nếu các khoảng có độ rộng khác nhau, nhóm rộng có thể chứa nhiều số chỉ vì bao trùm một vùng lớn hơn. Như vậy không nên so sánh độ tập trung chỉ qua **độ cao cột vẽ theo cùng một quy ước không rõ ràng**. Với biểu đồ cột tần số, cần kiểm xem nó biểu diễn tần số hay mật độ và độ rộng mỗi nhóm.

    **Vận dụng.** Ba nhóm \([0;3),[3;9),[9;13)\) có độ rộng lần lượt bằng bao nhiêu? Những khoảng ấy có chồng lấn không và có thể tính một “độ rộng chung” không?

    <span data-ped-first-try="3" data-outcome-id="G11-B08-GROUP-WIDTH" data-thpt-first-try-id="THPT-G11-B08-TRY03" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Độ rộng lần lượt là \(3,6,4\). Nhóm liền nhau và không chồng lấn nhờ cách đóng/mở đầu mút; **không có cùng một độ rộng \(h\)**. Không dùng máy móc công thức mốt nội suy nhóm đều rộng ở Bài 9 cho bảng như vậy.

    <span data-thpt-help-id="HELP-G11-B08-TRY03" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em xem ba nhóm đều rộng 3 vì chỉ xét số đầu, hoặc nghĩ mọi bảng ghép nhóm bắt buộc đều rộng.

        **Tự sửa:** Lấy **biên phải trừ biên trái** từng nhóm; ôn mục 2.1, thử Core độ rộng \([12;18)\) và Practice bốn khoảng cùng rộng 4 ở <a href="../luyen-tap/">Bài 8 – Luyện tập</a>.

    ### 1.4. Tần số và tần số tương đối trả lời hai câu hỏi khác nhau

    Tần số nhóm là **bao nhiêu quan sát** rơi vào khoảng; tần số tương đối là **bao nhiêu phần của mẫu** rơi vào đó. Nếu tổng \(n>0\), tần số tương đối nhóm \(i\) là \(m_i/n\); đổi ra phần trăm bằng cách nhân \(100\%\). Hai lớp có số người khác nhau nên khi so sánh tỉ lệ cần dùng tần số tương đối, không chỉ số đếm.

    **Vận dụng.** Ba nhóm có tần số \(3,5,2\). Nhóm thứ hai chiếm bao nhiêu phần trăm mẫu? Nếu lấy một người ngẫu nhiên trong mẫu, xác suất thực nghiệm thuộc nhóm đó là bao nhiêu?

    <span data-ped-first-try="4" data-outcome-id="G11-B08-INTERPRETATION" data-thpt-first-try-id="THPT-G11-B08-TRY04" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Cỡ mẫu \(n=3+5+2=10\). Tần số tương đối nhóm hai là \(5/10=0{,}5=50\%\). Nếu chọn ngẫu nhiên một trong 10 người đã khảo sát với cơ hội ngang nhau, xác suất thực nghiệm thuộc nhóm đó cũng là \(5/10\). Không nói mọi người trong nhóm có cùng giá trị đo.

    <span data-thpt-help-id="HELP-G11-B08-TRY04" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em tính \(5/3\) vì có ba nhóm, hoặc nhầm tỉ lệ nhóm với trung điểm.

        **Tự sửa:** Mẫu số phải là **tổng tần số \(n\)**. Ôn mục 2.3 và luyện Practice về tỉ lệ nhóm \([4;8)\) ở <a href="../luyen-tap/">Core và Luyện tập Bài 8</a>.

    ### 1.5. Một bảng ghép nhóm không giữ được tất cả số đo

    Hai mẫu thô **khác nhau** vẫn có thể cho cùng bảng nhóm. Chẳng hạn cả \(1,2,11,12\) và \(4,4,16,18\) đều có hai số ở \([0;10)\) và hai số ở \([10;20)\), nhưng những số đo cụ thể và trung bình chính xác của hai mẫu khác nhau. Vì vậy, điểm giữa mỗi nhóm chỉ dùng để **đại diện trong phép ước lượng**, không thay thế giá trị thô đã mất.

    **Vận dụng.** Hai mẫu trên có cùng bảng tần số ghép nhóm không? Tính trung bình chính xác của từng mẫu để kiểm nhận xét “cùng bảng nhóm thì trung bình gốc bằng nhau”.

    <span data-ped-first-try="5" data-outcome-id="G11-B08-INTERPRETATION" data-thpt-first-try-id="THPT-G11-B08-TRY05" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Cả hai mẫu đều có tần số \((2,2)\) ở hai nhóm, nên **cùng bảng ghép nhóm**. Mẫu A có trung bình \((1+2+11+12)/4=6{,}5\); mẫu B có trung bình \((4+4+16+18)/4=10{,}5\). Vậy cùng bảng nhóm **không** suy ra cùng trung bình gốc.

    <span data-thpt-help-id="HELP-G11-B08-TRY05" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em khẳng định mọi người của nhóm \([10;20)\) đều bằng \(15\), hoặc kết luận hai trung bình gốc bằng nhau.

        **Tự sửa:** Tách rõ **số gốc** và **giá trị đại diện**. Ôn mục 2.3; luyện Core giải thích mất thông tin và Practice về chiều cao có trung điểm 157,5 cm ở <a href="../luyen-tap/">Bài 8 – Luyện tập</a>.

    ### 1.6. Ứng dụng: phân nhóm thời gian chờ

    Một nhóm dịch vụ giả định ghi thời gian chờ (phút) \(7,9,10,10,17,18,24,29\). Họ muốn biết tỉ lệ người chờ từ 10 đến **dưới 20 phút**. Bảng ghép nhóm vừa thuận tiện để trả lời, vừa nhắc ta giới hạn: người trong một nhóm không nhất thiết chờ bằng nhau.

    **Vận dụng.** Ghép số liệu vào \([0;10),[10;20),[20;30)\), viết tần số và tần số tương đối nhóm thứ hai. Số 10 được tính mấy lần?

    <span data-ped-first-try="6" data-outcome-id="G11-B08-FREQUENCY-TABLE" data-thpt-first-try-id="THPT-G11-B08-TRY06" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Các nhóm lần lượt nhận \(7,9\); \(10,10,17,18\); \(24,29\), nên tần số \(2,4,2\), tổng \(8\). Nhóm thứ hai có tần số tương đối \(4/8=50\%\). Hai giá trị **10 xuất hiện ở hai quan sát khác nhau**, mỗi quan sát được đếm **đúng một lần trong nhóm thứ hai**.

    <span data-thpt-help-id="HELP-G11-B08-TRY06" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em chỉ đếm một trong hai giá trị 10, hoặc tính 10 thuộc \([0;10)\).

        **Tự sửa:** Đọc dữ liệu theo **từng phần tử**, kể cả số lặp, rồi kiểm tổng 8. Ôn mục 2.1–2.2, thử lại Practice ghép sáu điểm có ranh giới tại 10,20 ở <a href="../luyen-tap/">Bài 8 – Luyện tập</a>.

=== "Kiến thức SGK"

    ### 2.1. Mẫu số liệu ghép nhóm và khoảng nhóm

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa:</strong> Mẫu số liệu ghép nhóm biểu diễn việc phân loại các quan sát theo những nhóm (thường là các khoảng giá trị) và **tần số** của mỗi nhóm. Một cách thường gặp là các khoảng nửa kín \([a_i;a_{i+1})\). Tùy phạm vi dữ liệu, nhóm cuối có thể có quy ước riêng nhưng phải được nêu rõ.</div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Độ rộng và quy ước biên:</strong> Khoảng hữu hạn \([a;b)\) có độ rộng \(h=b-a>0\). Số \(a\) thuộc nhóm, \(b\) không thuộc nhóm. Các nhóm cần được quy định để mỗi quan sát thuộc **đúng một nhóm**. Độ rộng giữa các nhóm không nhất thiết bằng nhau.</div>

    **Vì sao cần lưu ý:** Nếu một số nằm đúng ở ranh giới chung, việc nhất quán đóng trái/mở phải tránh đếm trùng. Các nhóm phải phủ toàn bộ mẫu; nếu có giá trị ngoài khoảng cuối, bảng chưa hoàn thành.

    ### 2.2. Các bước ghép số liệu và lập bảng tần số

    **Quy trình:** (1) Xác định cỡ mẫu và khoảng giá trị; (2) chọn các mốc nhóm phù hợp, nêu đầu mút; (3) xếp **từng** quan sát vào một nhóm; (4) đếm tần số \(m_i\); (5) kiểm tổng.

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Bảng tần số:</strong> Gọi \(m_i\) là số quan sát thuộc nhóm \(i\), \(m_i\ge0\). Nếu bảng chia hết mẫu, cỡ mẫu là \(n=\sum_i m_i\). Với \(n>0\), tần số tương đối của nhóm \(i\) bằng \(f_i=m_i/n\) và \(\sum_i f_i=1\).</div>

    **Minh họa độc lập:** Bảng sau dùng Mẫu A giả định, gồm 20 quan sát được phân loại theo bốn nhóm.

    | Nhóm | \([0;10)\) | \([10;20)\) | \([20;30)\) | \([30;40)\) | Tổng |
    | --- | ---: | ---: | ---: | ---: | ---: |
    | Tần số \(m_i\) | 4 | 8 | 6 | 2 | 20 |
    | Tần số tương đối | 20% | 40% | 30% | 10% | 100% |

    <figure class="thpt-r4-plot"><img src="../../../../../assets/images/thpt/FIG-G11-B08-01_R01.svg" loading="lazy" alt="Bốn cột tần số của Mẫu A ở các nhóm từ 0 đến 40, cao tương ứng 4, 8, 6, 2"><figcaption>Đọc hình: chiều ngang ghi từng **khoảng**, chiều cao cột ghi **tần số**. Các nhóm minh họa bằng độ rộng, nên có thể so trực tiếp số đếm qua cột; hình không chứa các giá trị thô của 20 người.</figcaption></figure>

    ### 2.3. Đọc bảng, ý nghĩa của thông tin còn lại và thông tin đã mất

    Bảng nhóm trả lời được “có mấy quan sát trong khoảng này”, “chiếm bao nhiêu phần trăm” và “nhóm nào có tần số nhiều”. Nó **không** cho biết giá trị chính xác của từng quan sát. Hai mẫu khác nhau có thể tạo cùng một bảng nhóm.

    Khi biết cả hai đầu mút hữu hạn, **giá trị đại diện** \(x_i=(a_i+a_{i+1})/2\) thường là trung điểm nhóm. Đây là một giả định để **ước lượng** các đặc trưng ở Bài 9, không phải phép phục hồi số đo thật. Với khoảng không có đủ hai đầu mút hữu hạn, không tự tính trung điểm bằng công thức ấy.

    **Đọc đúng giới hạn:** Không kết luận “mọi người ở nhóm \([150;155)\) cao đúng 152,5 cm”. Với nhóm rộng khác nhau, cần xem phương pháp biểu diễn trước khi so sánh độ tập trung; công thức nội suy mốt dùng tần số nhóm bằng độ rộng của Bài 9 không áp dụng trực tiếp khi độ rộng khác nhau.

=== "Ví dụ"

    Đọc đề trước, dự đoán lý do chọn cách đếm, rồi theo dõi từng bước giải và kiểm.

    ### 3.1. Đếm biên và số lặp

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Ghép dữ liệu \(3,5,5,9,10,12\) vào \([0;5),[5;10),[10;15)\), lập bảng tần số.</p>
    <p><strong>Phân tích:</strong> Dữ liệu 5 lặp hai lần nhưng mỗi quan sát vẫn phải được đếm. Số đúng biên 5,10 thuộc nhóm bên phải.</p>
    <p><strong>Lời giải:</strong> Nhóm thứ nhất chứa \(3\) (1); thứ hai chứa \(5,5,9\) (3); thứ ba chứa \(10,12\) (2). Tần số \((1,3,2)\), cỡ mẫu \(6\).</p>
    <p><strong>Kiểm lại:</strong> \(1+3+2=6\), bằng số quan sát ban đầu; không nhóm nào nhận cùng một quan sát hai lần.</p></div>

    ### 3.2. Từ dữ liệu thô đến bảng nhiều khoảng

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Với dữ liệu \(1,2,4,7,8,9,11,12,15,18,19,21\), ghép vào \([0;5),[5;10),[10;15),[15;20),[20;25)\).</p>
    <p><strong>Phân tích:</strong> Đi từ trái sang phải, đếm mỗi phần tử đúng một lần; có năm nhóm nhưng cỡ mẫu là số **quan sát**, không phải số nhóm.</p>
    <p><strong>Lời giải:</strong> Các nhóm nhận lần lượt \((1,2,4)\); \((7,8,9)\); \((11,12)\); \((15,18,19)\); \((21)\), nên tần số \((3,3,2,3,1)\).</p>
    <p><strong>Kiểm lại:</strong> \(3+3+2+3+1=12\), đúng số phần tử gốc; không có giá trị ngoài hệ nhóm.</p></div>

    ### 3.3. Tần số tương đối không phụ thuộc cách đặt tên nhóm

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Bốn nhóm có tần số \(2,5,8,5\). Tính tần số tương đối của nhóm thứ ba và phần trăm của hai nhóm cuối gộp lại.</p>
    <p><strong>Phân tích:</strong> Tính **cỡ mẫu** \(n\) trước; tần số tương đối là phần trên toàn bộ mẫu.</p>
    <p><strong>Lời giải:</strong> \(n=2+5+8+5=20\). Nhóm ba: \(8/20=40\%\). Hai nhóm cuối có \(8+5=13\) quan sát, tần số tương đối \(13/20=65\%\).</p>
    <p><strong>Kiểm lại:</strong> Hai nhóm đầu có \(7/20=35\%\), cộng \(65\%\) được \(100\%\).</p></div>

    ### 3.4. Khoảng có độ rộng khác nhau

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Cho các nhóm \([0;4),[4;10),[10;22)\). Tìm độ rộng từng nhóm và nhận xét có được áp công thức nội suy mốt dành cho nhóm bằng nhau không.</p>
    <p><strong>Phân tích:</strong> Độ rộng là **hiệu hai đầu mút**, phải tính riêng từng nhóm; độ rộng khác nhau không làm bảng trở thành vô nghĩa.</p>
    <p><strong>Lời giải:</strong> Các độ rộng là \(4,6,12\), không bằng nhau. Bảng nhóm vẫn có thể được dùng để đếm, nhưng **không được áp trực tiếp** công thức mốt nhóm đều rộng của Bài 9.</p>
    <p><strong>Kiểm lại:</strong> Ba khoảng không chồng lấn và phủ đoạn \([0;22)\) theo quy ước nửa kín.</p></div>

    ### 3.5. Hai dữ liệu thô khác nhau có cùng bảng nhóm

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> So sánh hai mẫu \(A=(2,7,12,18)\), \(B=(4,9,10,19)\) khi ghép vào \([0;10),[10;20)\). Có thể phục hồi trung bình gốc từ bảng không?</p>
    <p><strong>Phân tích:</strong> Lập bảng nhóm của mỗi mẫu rồi tính riêng số trung bình từ dữ liệu thô, chỉ để chứng minh giới hạn của bảng.</p>
    <p><strong>Lời giải:</strong> Cả hai mẫu cho tần số \((2,2)\), nhưng \(\overline x_A=(2+7+12+18)/4=9{,}75\), còn \(\overline x_B=(4+9+10+19)/4=10{,}5\). Không thể suy ra trung bình gốc chính xác chỉ từ bảng nhóm.</p>
    <p><strong>Kiểm lại:</strong> Bốn quan sát mỗi mẫu và phân nhóm đều đúng. Nếu dùng trung điểm 5,15, cả hai cho ước lượng \((2\cdot5+2\cdot15)/4=10\), nhưng đó **không phải** trung bình gốc của cả hai.</p></div>

    ### 3.6. Chọn nhóm phù hợp với dữ liệu thực

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Một khảo sát giả định có thời gian (phút): \(4,9,12,15,16,21,26,31\). Có thể dùng các nhóm \([0;10),[10;20),[20;30)\) để biểu diễn đủ mẫu không? Cần sửa ra sao?</p>
    <p><strong>Phân tích:</strong> Trước khi đếm, phải kiểm **đủ phạm vi** số liệu. Nếu bỏ một phần tử, tổng tần số nhỏ hơn cỡ mẫu.</p>
    <p><strong>Lời giải:</strong> Nhóm đã cho bỏ sót 31. Thêm \([30;40)\), rồi đếm các nhóm được \(2,3,2,1\). Tổng \(2+3+2+1=8\) bằng cỡ mẫu.</p>
    <p><strong>Kiểm lại:</strong> 31 thuộc \([30;40)\), không một số nào ngoài miền đã mở rộng.</p></div>

=== "Lỗi thường gặp"

    Khi sai một Vận dụng, mở **Kiểm lỗi** ngay sau Đối chiếu của câu ấy. Các nhóm dưới đây là lỗi quy tắc có thể xảy ra ở nhiều bài khác nhau.

    <span data-thpt-help-id="HELP-G11-B08-01" hidden></span>

    ??? tip "4.1. Đếm trùng hoặc bỏ số nằm đúng biên"

        **Dấu hiệu:** Điểm 10 được tính trong cả \([0;10)\) lẫn \([10;20)\), hoặc số ở biên cuối bị bỏ mà không phát hiện.

        **Vì sao sai:** Nhóm nửa kín chỉ nhận đầu trái; muốn ghép hết mẫu phải có hệ nhóm phủ toàn bộ quan sát.

        **Tự sửa:** Vẽ các khoảng và viết \(a\le x<b\); ôn mục 2.1 và Ví dụ 3.1, sau đó luyện Core về ranh giới 10, Practice bảng số 5,10,10,19,20,29 ở <a href="../luyen-tap/">Bài 8 – Luyện tập</a>.

    <span data-thpt-help-id="HELP-G11-B08-02" hidden></span>

    ??? tip "4.2. Đếm tần số không bằng cỡ mẫu"

        **Dấu hiệu:** Tổng tần số nhỏ hơn số số liệu gốc, hoặc em coi số nhóm là cỡ mẫu.

        **Vì sao sai:** Mọi quan sát cần được đếm đúng một lần, kể cả hai số trùng giá trị.

        **Tự sửa:** Đánh dấu từng số vào các nhóm, cộng lại \(n=\sum m_i\). Ôn mục 2.2, Ví dụ 3.2 và 3.6, rồi luyện Core cộng tần số và Practice điền tần số còn thiếu ở <a href="../luyen-tap/">Bài 8 – Luyện tập</a>.

    <span data-thpt-help-id="HELP-G11-B08-03" hidden></span>

    ??? tip "4.3. Hiểu trung điểm nhóm là giá trị đo thật"

        **Dấu hiệu:** Em khẳng định mười người thuộc \([155;160)\) đều cao \(157{,}5\) cm.

        **Vì sao sai:** Trung điểm chỉ là giá trị đại diện, bảng nhóm đã xóa chi tiết dữ liệu gốc.

        **Tự sửa:** Ôn mục 2.3 và Ví dụ 3.5, luyện Core câu hỏi thông tin đã mất và Practice nhóm chiều cao ở <a href="../luyen-tap/">Bài 8 – Luyện tập</a>.

    <span data-thpt-help-id="HELP-G11-B08-04" hidden></span>

    ??? tip "4.4. Coi mọi nhóm có độ rộng bằng nhau"

        **Dấu hiệu:** Em dùng cùng một \(h\) cho các khoảng \([0;4),[4;10),[10;22)\), hoặc áp mốt nội suy đều rộng khi chưa kiểm độ rộng.

        **Vì sao sai:** Độ rộng được tính **từng nhóm**; không phải bảng ghép nhóm nào cũng đều rộng.

        **Tự sửa:** Tính \(h_i=b_i-a_i\), ghi cạnh bảng, ôn mục 2.1 và Ví dụ 3.4; luyện Core độ rộng nhóm và Practice kiểm bốn nhóm cùng độ rộng tại <a href="../luyen-tap/">Bài 8 – Luyện tập</a>.

    **Học tiếp:** <a href="../luyen-tap/">Core và Luyện tập</a> · <a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a> · <a href="../../../../thu-vien/tu-luan-g11-chuong-iii/">Tự luận Chương III</a>.

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập một, Bài 8 (trang in 58–61).</p>
