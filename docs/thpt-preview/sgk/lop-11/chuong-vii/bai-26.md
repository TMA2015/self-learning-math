# Bài 26. Khoảng cách

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VII · SGK KNTT TẬP 2</p><p class="thpt-r4-lead">Dựng đoạn ngắn nhất giữa các đối tượng, tính đường cao và đoạn vuông góc chung bằng hình học đã học.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương VII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Muốn đo khoảng cách từ đèn đến nền hoặc giữa hai thanh thép chéo nhau, phải tìm đoạn nối ngắn nhất, không tùy chọn một đoạn xiên. Ôn B23 về chân vuông góc, B24 về hình chiếu và B25 về các mặt vuông góc. Dùng định lí Pythagore để giải thích vì sao đoạn đúng là ngắn nhất.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B26-01_R00.svg" alt="M nằm ngoài mặt P; H là chân vuông góc, K là điểm khác trong P. Tam giác MHK vuông tại H nên đoạn MH ngắn hơn MK. Hình minh họa khoảng cách điểm–mặt, chưa đủ để chứng minh một đoạn vuông góc chung của hai đường chéo nhau."><figcaption>Đọc hình: M nằm ngoài mặt P; H là chân vuông góc, K là điểm khác trong P. Tam giác MHK vuông tại H nên đoạn MH ngắn hơn MK. Hình minh họa khoảng cách điểm–mặt, chưa đủ để chứng minh một đoạn vuông góc chung của hai đường chéo nhau. Không suy góc hoặc độ dài từ nét phối cảnh.</figcaption></figure>

    ### 1.1. Khoảng cách điểm–đường là độ dài đến chân chiếu

    Trong mặt phẳng chứa điểm M và đường a, dựng H trên a với MH vuông góc a. Với K khác H trên a, Pythagore cho \(MK^2=MH^2+HK^2\), nên MH ngắn nhất.

    **Vận dụng — Tự thử trước Core.** Điểm M ngoài đường a, H là chân chiếu; MH=9 cm, HK=40 cm với K trên a. Tính MK và d(M,a).

    <span data-ped-first-try="1" data-outcome-id="G11-B26-POINT_LINE" data-thpt-first-try-id="THPT-G11-B26-TRY01" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(MK=\sqrt{9^2+40^2}=41\) cm. Khoảng cách d(M,a)=9 cm; MK là đoạn xiên không phải khoảng cách.

    <span data-thpt-help-id="HELP-G11-B26-TRY01" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Lấy đoạn nối bất kì làm khoảng cách.

        **Tự sửa:** Kiểm chân H thuộc a và MH vuông góc a. [Luyện lại câu B26-C01](../luyen-tap/?item=THPT-G11-CHVII-B26-C01).

    ### 1.2. Khoảng cách điểm–mặt

    Chân H phải nằm trên mặt và đường MH vuông góc cả mặt. Nếu M thuộc mặt, ảnh của M là M, khoảng cách bằng 0.

    **Vận dụng — Tự thử trước Core.** Trong lập phương cạnh 5 cm, tính khoảng cách từ A' và C đến mặt đáy (ABCD).

    <span data-ped-first-try="2" data-outcome-id="G11-B26-POINT_PLANE" data-thpt-first-try-id="THPT-G11-B26-TRY02" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** AA' vuông góc đáy nên d(A',(ABCD))=AA'=5 cm. C thuộc đáy nên d(C,(ABCD))=0.

    <span data-thpt-help-id="HELP-G11-B26-TRY02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Đo từ C đến một đỉnh khác dù C nằm trên mặt.

        **Tự sửa:** Kiểm điểm đã thuộc đối tượng trước khi dựng chân. [Luyện lại câu B26-C02](../luyen-tap/?item=THPT-G11-CHVII-B26-C02).

    ### 1.3. Đường thẳng song song mặt

    Các điểm trên đường song song mặt có các chân chiếu tạo một đường cùng phương. Các đoạn nối điểm và ảnh song song, bằng nhau; chọn điểm có chân dễ dựng nhất.

    **Vận dụng — Tự thử trước Core.** Hộp chữ nhật có chiều cao 11 cm. Xác định d(A'B',(ABCD)) và giải thích vì sao dùng A'.

    <span data-ped-first-try="3" data-outcome-id="G11-B26-PARALLEL_LINE_PLANE" data-thpt-first-try-id="THPT-G11-B26-TRY03" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** A'B' song song đáy, A'B' nằm ở mặt trên khác đáy. Chân A' là A, \(AA'=11\) cm. Mọi điểm trên đường A'B' có cùng khoảng cách đến đáy, nên đáp số 11 cm.

    <span data-thpt-help-id="HELP-G11-B26-TRY03" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Coi đường song song mặt phải nằm trong mặt.

        **Tự sửa:** Kiểm không có điểm chung; chọn một điểm bất kì trên đường. [Luyện lại câu B26-C03](../luyen-tap/?item=THPT-G11-CHVII-B26-C03).

    ### 1.4. Hai mặt song song: chiều cao đo theo pháp tuyến

    Hai mặt song song không cắt nhau và có cùng phương pháp tuyến. Khoảng cách giữa chúng bằng khoảng cách từ bất kì điểm nào trên mặt thứ nhất tới mặt thứ hai.

    **Vận dụng — Tự thử trước Core.** Trong lăng trụ xiên, cạnh bên dài 10 cm và tạo góc 30° với mặt đáy. Hai mặt đáy cách nhau bao nhiêu?

    <span data-ped-first-try="4" data-outcome-id="G11-B26-PARALLEL_PLANES" data-thpt-first-try-id="THPT-G11-B26-TRY04" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Hình chiếu cạnh bên tạo tam giác vuông; chiều cao bằng \(10\sin30^\circ=5\) cm. Đây là khoảng cách giữa hai mặt đáy, không phải cạnh bên 10 cm.

    <span data-thpt-help-id="HELP-G11-B26-TRY04" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Dùng cạnh bên xiên như đường cao.

        **Tự sửa:** Dựng hình chiếu rồi dùng sin góc đường–mặt. [Luyện lại câu B26-C04](../luyen-tap/?item=THPT-G11-CHVII-B26-C04).

    ### 1.5. Đoạn vuông góc chung của hai đường chéo nhau

    Đoạn chung phải có một đầu thuộc mỗi đường và vuông góc cả hai. Chỉ vuông góc một đường hoặc chỉ đo hai điểm tùy ý không đủ.

    **Vận dụng — Tự thử trước Core.** Trong hộp chữ nhật ABCD.A'B'C'D', AB=4, AD=7, AA'=9 cm. Tìm đoạn vuông góc chung của AB và CC'.

    <span data-ped-first-try="5" data-outcome-id="G11-B26-SKEW_COMMON_PERP" data-thpt-first-try-id="THPT-G11-B26-TRY05" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** B thuộc AB, C thuộc CC'. BC vuông góc AB vì đáy chữ nhật; BC vuông góc CC' vì CC' vuông góc đáy. Hai đường AB,CC' chéo nhau nên BC là đoạn vuông góc chung, khoảng cách \(BC=AD=7\) cm.

    <span data-thpt-help-id="HELP-G11-B26-TRY05" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Lấy AC hoặc cạnh đứng làm khoảng cách giữa AB và CC'.

        **Tự sửa:** Kiểm hai đầu và hai quan hệ vuông góc. [Luyện lại câu B26-C05](../luyen-tap/?item=THPT-G11-CHVII-B26-C05).

    ### 1.6. Chiều cao hình chóp và chân nằm trong mặt đáy

    Chiều cao hình chóp là khoảng cách từ đỉnh đến mặt phẳng chứa đáy, kể cả khi chân nằm ngoài đa giác đáy. Không phụ thuộc việc cạnh bên nào được vẽ đứng.

    **Vận dụng — Tự thử trước Core.** Hình chóp S.ABC có hình chiếu S trên (ABC) là H, SH chưa biết, SA=26 cm, AH=10 cm. Tính chiều cao.

    <span data-ped-first-try="6" data-outcome-id="G11-B26-HEIGHT_APPLICATION" data-thpt-first-try-id="THPT-G11-B26-TRY06" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Tam giác SAH vuông tại H, \(SH=\sqrt{26^2-10^2}=24\) cm. Chiều cao là 24 cm, kể cả khi H nằm ngoài tam giác ABC.

    <span data-thpt-help-id="HELP-G11-B26-TRY06" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Cho rằng cạnh bên luôn là chiều cao hoặc chân phải thuộc đa giác.

        **Tự sửa:** Kiểm chân thuộc mặt phẳng chứa đáy và dùng Pythagore. [Luyện lại câu B26-C06](../luyen-tap/?item=THPT-G11-CHVII-B26-C06).

=== "Kiến thức SGK"

    ### 2.1. Khoảng cách từ một điểm đến một đường thẳng, đến một mặt phẳng

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa.</strong> Khoảng cách từ điểm M tới đường a (hoặc mặt (P)) bằng độ dài MH, trong đó H là hình chiếu vuông góc của M trên a (hoặc (P)). Kí hiệu \(d(M,a)\), \(d(M,(P))\).</div>
    
    Nếu M nằm trên đường/mặt thì khoảng cách bằng 0; ngược lại khoảng cách bằng 0 chỉ khi M thuộc đối tượng. Với M ngoài đối tượng và K thuộc đối tượng, K khác H, tam giác MHK vuông tại H nên \(MK^2=MH^2+HK^2\), do đó \(MK\gt MH\). Khoảng cách là độ dài nhỏ nhất trong các đoạn nối M đến đối tượng.
    
    **Chiều cao:** Chiều cao hình chóp là khoảng cách từ đỉnh đến mặt phẳng chứa đáy. Chiều cao lăng trụ là khoảng cách giữa hai mặt phẳng đáy. Với hình xiên, phải dựng đường cao vuông góc, không lấy cạnh bên.

    ### 2.2. Khoảng cách giữa các đường thẳng và mặt phẳng song song, giữa hai mặt phẳng song song

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa.</strong> Nếu đường a song song (P), \(d(a,(P))=d(M,(P))\) với M bất kì trên a. Nếu (P) song song (Q), \(d((P),(Q))=d(M,(Q))\) với M bất kì thuộc (P).</div>
    
    Các khoảng cách này không phụ thuộc điểm M vì các đường chiếu vuông góc cùng phương và các chân chiếu tương ứng tạo các đoạn bằng nhau trong hình bình hành. Với hai đường thẳng song song, khoảng cách bằng khoảng cách từ một điểm trên đường này tới đường kia. Nếu đường nằm trong mặt hoặc cắt mặt, khoảng cách nhỏ nhất là 0, không áp dụng giả thiết song song phân biệt của định nghĩa trên.

    ### 2.3. Khoảng cách giữa hai đường thẳng chéo nhau

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa.</strong> Với hai đường a,b chéo nhau, đoạn AB có A thuộc a, B thuộc b, \(AB\perp a,\ AB\perp b\) gọi là đoạn vuông góc chung; đường AB là đường vuông góc chung. Khoảng cách \(d(a,b)=AB\).</div>
    
    **Cách dựng 1 khi hai đường vuông góc:** Dựng mặt chứa b và vuông góc a (vì b vuông góc a); mặt đó cắt a tại A. Trong mặt vừa dựng, hạ AB vuông góc b, B thuộc b. AB cũng vuông góc a vì thuộc mặt vuông góc a.
    
    **Cách dựng 2 tổng quát:** Qua một điểm của b, dựng đường song song a; cùng b xác định mặt (P) chứa b và song song a. Chiếu a xuống (P) thành a' song song a. Vì a,b chéo nhau nên a' và b không cùng phương, cắt nhau tại B. Qua B dựng đường vuông góc (P) cắt a tại A (B thuộc ảnh a'). AB vuông góc b; a song song (P) nên AB cũng vuông góc a. Độ dài AB chính là \(d(a,(P))\). Dựng tương tự mặt chứa a song song b, hoặc hai mặt song song chứa hai đường, cho cùng khoảng cách.
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Nhận xét.</strong> Độ dài đoạn vuông góc chung bằng khoảng cách nhỏ nhất giữa một điểm trên a và một điểm trên b; bằng khoảng cách từ a đến mặt chứa b song song a, và bằng khoảng cách giữa hai mặt song song lần lượt chứa a,b.</div>
    
    Thật vậy, mọi M trên a đều cách (P) một khoảng AB; mọi N trên b thuộc (P) nên MN không ngắn hơn AB. Hai chân A,B đạt đúng khoảng cách này. Không cần dùng công thức tọa độ không gian; dùng quan hệ vuông góc đã học để dựng.

=== "Ví dụ"

    ### 3.1. Khoảng cách điểm đến đường trong đáy

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B26-R02-01"><p><strong>Đề bài:</strong> Tam giác ABC vuông tại A, AB=8 cm, AC=15 cm. Tính d(A,BC).</p><p><strong>Phân tích:</strong> Dùng đường cao từ A tới BC và tính diện tích theo hai cách.</p><p><strong>Lời giải:</strong> \(BC=\sqrt{8^2+15^2}=17\) cm. Nếu H là chân chiếu A trên BC thì \(AB\cdot AC/2=BC\cdot AH/2\), suy \(AH=120/17\) cm.</p><p><strong>Kiểm lại:</strong> Khoảng cách nhỏ hơn 8 và 15, hợp lý với đường cao tới cạnh huyền.</p></div>

    ### 3.2. Khoảng cách từ một điểm tới mặt

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B26-R02-02"><p><strong>Đề bài:</strong> Cho hình chóp S.ABCD có \(SA\perp(ABCD)\), SA=12 cm, AC=16 cm. Tính SC và d(S,(ABCD)).</p><p><strong>Phân tích:</strong> A là chân chiếu, tam giác SAC vuông tại A.</p><p><strong>Lời giải:</strong> \(SC=\sqrt{12^2+16^2}=20\) cm; \(d(S,(ABCD))=SA=12\) cm.</p><p><strong>Kiểm lại:</strong> SC là cạnh xiên và lớn hơn 12.</p></div>

    ### 3.3. Khoảng cách từ đường song song mặt

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B26-R02-03"><p><strong>Đề bài:</strong> Lăng trụ đứng ABC.A'B'C' có chiều cao 14 cm. Tìm khoảng cách từ đường B'C' đến (ABC).</p><p><strong>Phân tích:</strong> B'C' song song BC thuộc đáy, không có điểm chung với mặt đáy.</p><p><strong>Lời giải:</strong> Chân B' là B. Vì B'C' song song (ABC), khoảng cách bằng \(B'B=14\) cm.</p><p><strong>Kiểm lại:</strong> Có thể thay B' bằng C' cũng nhận 14 cm.</p></div>

    ### 3.4. Khoảng cách hai mặt song song từ cạnh xiên

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B26-R02-04"><p><strong>Đề bài:</strong> Lăng trụ xiên có cạnh bên 13 cm, hình chiếu cạnh ấy trên đáy dài 5 cm. Tính khoảng cách hai mặt đáy.</p><p><strong>Phân tích:</strong> Dùng tam giác vuông từ một đỉnh trên xuống đáy.</p><p><strong>Lời giải:</strong> \(h=\sqrt{13^2-5^2}=12\) cm; khoảng cách hai mặt đáy là 12 cm.</p><p><strong>Kiểm lại:</strong> Chiều cao nhỏ hơn cạnh xiên 13 cm.</p></div>

    ### 3.5. Dựng đoạn vuông góc chung trong hình hộp

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B26-R02-05"><p><strong>Đề bài:</strong> Hộp chữ nhật ABCD.A'B'C'D' có AB=6, BC=10, AA'=4 cm. Tính d(AD, B'C').</p><p><strong>Phân tích:</strong> AD và B'C' cùng phương, đây là hai đường song song chứ không chéo nhau. Chọn A thuộc AD và B' thuộc B'C'.</p><p><strong>Lời giải:</strong> \(AB'\perp AD\) vì AD vuông góc AB,AA' cắt nhau trong (ABB'A'); AD cũng song song B'C', nên \(AB'\perp B'C'\). Khoảng cách bằng \(AB'=\sqrt{6^2+4^2}=2\sqrt{13}\) cm.</p><p><strong>Kiểm lại:</strong> Đã phân loại đúng: hai đường song song; không cần gọi là chéo nhau.</p></div>

    ### 3.6. Hai đường chéo nhau qua mặt song song

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B26-R02-06"><p><strong>Đề bài:</strong> Trong hộp chữ nhật AB=8 cm, AD=15 cm, AA'=6 cm, tìm d(AB,A'D').</p><p><strong>Phân tích:</strong> Mặt trên (A'B'C'D') chứa A'D' và song song AB; dùng khoảng cách đường–mặt.</p><p><strong>Lời giải:</strong> AA' nối A trên AB với A' trên A'D' và vuông góc cả hai vì AA' vuông góc hai đáy song song. Hai đường AB,A'D' khác phương và thuộc hai đáy phân biệt, nên chéo nhau. Khoảng cách bằng 6 cm.</p><p><strong>Kiểm lại:</strong> Cặp chân đúng hai đường, điều kiện cả hai vuông góc được chứng minh.</p></div>

    ### 3.7. Khoảng cách chéo không cần đoạn vuông góc chung ngay từ đầu

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B26-R02-07"><p><strong>Đề bài:</strong> Trong lập phương cạnh a, tính d(AB, C'D) bằng cách chọn mặt chứa C'D song song AB, nếu có.</p><p><strong>Phân tích:</strong> Mặt (DCC'D') chứa C'D, đồng thời CD song song AB và mặt này không chứa AB.</p><p><strong>Lời giải:</strong> AB song song mặt (DCC'D'). Vì \(AD\perp DC\) và \(AD\perp DD'\), \(AD\perp(DCC'D')\). Khoảng cách từ AB đến mặt ấy bằng AD=a. AB và C'D chéo nhau (không cùng phương, nằm ở hai mặt đối diện), nên d(AB,C'D)=a.</p><p><strong>Kiểm lại:</strong> D không nằm trên AB nhưng đoạn AD nối đúng mặt song song; tại D, AD cũng vuông góc C'D, nên phép dựng nhất quán.</p></div>

    ### 3.8. Chiều cao trong mô hình thực tế

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B26-R02-08"><p><strong>Đề bài:</strong> Một thanh giằng dài 5 m nối hai điểm ở hai sàn song song, độ dịch chuyển ngang 3 m. Tính độ chênh hai sàn.</p><p><strong>Phân tích:</strong> Hai sàn nằm ngang, đường cao là thành phần thẳng đứng của giằng.</p><p><strong>Lời giải:</strong> \(h=\sqrt{5^2-3^2}=4\) m.</p><p><strong>Kiểm lại:</strong> Không lấy 5 m làm khoảng cách giữa hai sàn; đơn vị chiều dài.</p></div>

=== "Lỗi thường gặp"

    <span data-thpt-help-id="HELP-G11-CHVII-B26-01" hidden></span>

    ??? tip "4.1. Nhầm cạnh bên xiên với chiều cao"

        **Vì sao sai:** Chiều cao là khoảng cách vuông góc tới mặt đáy.

        **Tự sửa:** Dựng chân H và dùng 2.1. [Luyện lại câu B26-C06](../luyen-tap/?item=THPT-G11-CHVII-B26-C06).

    <span data-thpt-help-id="HELP-G11-B26-02" hidden></span>

    ??? tip "4.2. Chỉ kiểm vuông góc một đường"

        **Vì sao sai:** Đoạn vuông góc chung phải nối đúng hai đường và vuông góc cả hai.

        **Tự sửa:** Xem cách dựng trong 2.3 và kiểm hai đầu. [Luyện lại câu B26-C05](../luyen-tap/?item=THPT-G11-CHVII-B26-C05).

    <span data-thpt-help-id="HELP-G11-B26-03" hidden></span>

    ??? tip "4.3. Suy khoảng cách đường–mặt từ điểm không nằm trên đường"

        **Vì sao sai:** Chỉ điểm thuộc đường song song mặt mới cho khoảng cách ấy.

        **Tự sửa:** Ôn định nghĩa 2.2. [Luyện lại câu B26-C03](../luyen-tap/?item=THPT-G11-CHVII-B26-C03).

    <span data-thpt-help-id="HELP-G11-B26-04" hidden></span>

    ??? tip "4.4. Nhầm đường chéo nhau với đường song song hoặc cắt nhau"

        **Vì sao sai:** Mỗi vị trí tương đối có phương pháp khác nhau; hai đường chéo nhau có khoảng cách dương.

        **Tự sửa:** Phân loại trước khi dựng như 3.5–3.7. [Luyện lại câu B26-P03](../luyen-tap/?item=THPT-G11-CHVII-B26-P03).

    **Học tiếp:** [Core và Luyện tập](../luyen-tap/) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/) · [Tự luận Chương VII](../../../../thu-vien/tu-luan-g11-chuong-vii/).

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập hai, Bài 26 (trang in 54–60).</p>
