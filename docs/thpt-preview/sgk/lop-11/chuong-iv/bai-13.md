# Bài 13. Hai mặt phẳng song song

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG IV</p>
<p class="thpt-r4-lead">Chứng minh hai mặt phẳng không giao nhau, dùng hai đường cắt nhau, hiểu Thalès trong không gian và liên hệ hình lăng trụ, hình hộp.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương IV</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    Mặt trên và mặt dưới một chiếc hộp lý tưởng nằm trên **hai mặt phẳng song song**. Nhưng nếu chỉ chứng minh một cạnh của mặt trên song song mặt đáy, liệu cả mặt trên đã song song mặt đáy? **Chưa**: một mặt phẳng nghiêng vẫn có thể chứa một đường song song mặt khác mà hai mặt vẫn giao nhau. Bài này đi từ điều kiện đủ hai đường **cắt nhau** tới hệ quả giao tuyến, rồi định lí **Thalès trong không gian** và cấu tạo lăng trụ/hình hộp.

    ### 1.1. Phân biệt hai mặt cắt nhau, trùng nhau và song song

    Hai mặt phẳng có thể trùng nhau, cắt theo một đường, hoặc **phân biệt và không có điểm chung**. Định nghĩa song song yêu cầu hai mặt không có điểm chung; không thể chỉ nhìn hình hai mặt “nghiêng giống nhau” hoặc một vài cạnh song song để kết luận.

    **Vận dụng.** Cho hai mặt \((P),(Q)\) phân biệt và có chung hai điểm \(A,B\) với \(A\ne B\). Hai mặt có thể song song nhau không? Nếu không, giao tuyến là gì?

    <span data-ped-first-try="1" data-outcome-id="G11-B13-PLANE_POSITIONS" data-thpt-first-try-id="THPT-G11-B13-TRY01" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Hai mặt **không song song** vì có điểm chung. Theo tính chất không gian, khi hai mặt phân biệt có điểm chung, giao của chúng là một đường. Vì A,B đều thuộc cả hai mặt và phân biệt, giao tuyến là **\(AB\)**.

    <span data-thpt-help-id="HELP-G11-B13-TRY01" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em vẫn ghi \((P)\parallel(Q)\) dù đã thấy hai điểm chung.

        **Tự sửa:** Kiểm ngay điều kiện **không có điểm chung**; ôn mục 2.1 và luyện Core B13-C01 trong [Bài 13 – Luyện tập](../luyen-tap/).

    ### 1.2. Vì sao phải dùng hai đường cắt nhau?

    Trong \((P)\), nếu có hai đường **cắt nhau** a,b và cả hai đều song song \((Q)\), thì không có phần nào của \((P)\) “nghiêng tới” cắt \((Q)\). Một đường a đơn độc chưa đủ. Hai đường a,b song song nhau trong P cũng chưa đủ: chúng chỉ kiểm soát một phương, không phải toàn bộ mặt.

    **Vận dụng.** Trong tứ diện \(S.ABC\), M,N,K là trung điểm \(SA,SB,SC\). Chỉ ra **hai đường cắt nhau** trong \((MNK)\) và hai đường tương ứng ở đáy để chứng minh \((MNK)\parallel(ABC)\).

    <span data-ped-first-try="2" data-outcome-id="G11-B13-PLANE_TEST" data-thpt-first-try-id="THPT-G11-B13-TRY02" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Trong tam giác SAB, \(MN\parallel AB\subset(ABC)\); trong SAC, \(MK\parallel AC\subset(ABC)\). Các đường **MN và MK cắt nhau tại M** trong \((MNK)\), đồng thời từng đường không nằm trong đáy vì M ngoài đáy. Theo dấu hiệu, \((MNK)\parallel(ABC)\).

    <span data-thpt-help-id="HELP-G11-B13-TRY02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em chỉ chứng minh MN∥AB rồi kết luận cả mặt cắt song song đáy.

        **Tự sửa:** Tìm **thêm MK∥AC** và nêu MN,MK cắt nhau tại M. Ôn mục 2.2, luyện Core B13-C02 và Practice B13-P02 tại [Bài 13 – Luyện tập](../luyen-tap/).

    ### 1.3. Hai mặt song song bị một mặt cắt sẽ cho hai giao tuyến song song

    Khi \((P)\parallel(Q)\) và mặt thứ ba \((R)\) thực sự cắt cả hai theo \(d,e\), thì hai đường này cùng nằm trong R và không cắt nhau: nếu cắt tại T, T sẽ thuộc cả P và Q, vô lý. Vì vậy **\(d\parallel e\)**. Đây là lý do các đường cắt của hai tầng song song trong một mặt bên lại song song.

    **Vận dụng.** Hai mặt phẳng song song \((P),(Q)\) bị một mặt \((R)\) cắt theo \(d,e\). Một bạn cho rằng d và e có thể chéo nhau. Bạn đúng không? Nêu lý do từ tính đồng phẳng.

    <span data-ped-first-try="3" data-outcome-id="G11-B13-TRANSVERSAL" data-thpt-first-try-id="THPT-G11-B13-TRY03" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** **Không đúng.** d,e đều thuộc mặt \((R)\), tức đồng phẳng. Nếu chúng có điểm chung, điểm đó thuộc cả P và Q, trái \(P\parallel Q\). Hai đường **phân biệt, đồng phẳng, không cắt** nên \(d\parallel e\), không phải chéo nhau.

    <span data-thpt-help-id="HELP-G11-B13-TRY03" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em gọi hai giao tuyến chéo nhau dù đã biết cùng thuộc R.

        **Tự sửa:** Đưa cả hai giao tuyến về **mặt phẳng thứ ba R**, rồi xét giao điểm. Ôn mục 2.3 và luyện Practice B13-P01 tại [Luyện tập Bài 13](../luyen-tap/).

    ### 1.4. Thalès trong không gian: ba mặt song song chắn tỉ số trên hai cát tuyến

    Hãy tưởng tượng ba tầng mặt phẳng song song cắt hai thanh nghiêng ở các điểm A,B,C và A',B',C' theo cùng thứ tự. Các khoảng cách đo **dọc theo thanh** có thể khác nhau, nhưng **tỉ số đoạn giữa hai tầng liên tiếp** là giống nhau. Chứng minh đưa về các đường song song do một mặt phụ chứa hai thanh cắt ra, rồi áp dụng Thalès trong hình học phẳng.

    **Vận dụng.** Ba mặt phẳng song song lần lượt cắt hai cát tuyến tại \(A,B,C\) và \(A',B',C'\). Nếu \(AB=6\) cm, \(BC=9\) cm, \(A'B'=8\) cm, hãy tìm \(B'C'\), giả sử các điểm theo thứ tự đã nêu.

    <span data-ped-first-try="4" data-outcome-id="G11-B13-PRISM_RATIO" data-thpt-first-try-id="THPT-G11-B13-TRY04" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Theo Thalès trong không gian,
        \[
        \frac{AB}{BC}=\frac{A'B'}{B'C'}.
        \]
        Suy ra \(6/9=8/B'C'\) và \(B'C'=12\) cm. Tỉ số không nói hai đoạn dài bằng nhau; chỉ nói **tương ứng tỉ lệ** trên hai cát tuyến.

    <span data-thpt-help-id="HELP-G11-B13-TRY04" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em cho \(B'C'=9\) vì nghĩ ba mặt song song giữ nguyên mọi độ dài.

        **Tự sửa:** Viết **hai tỉ số tương ứng** trước, kiểm thứ tự cát tuyến; ôn mục 2.4 rồi luyện ứng dụng tỉ số với các mặt cắt song song ở [Core và Luyện tập Bài 13](../luyen-tap/).

    ### 1.5. Thiết diện song song đáy của hình chóp có tỉ số đồng dạng

    Trong tứ diện \(S.ABC\), nếu M,N,K nằm trên các tia SA,SB,SC **cùng tỉ số từ S** \(t\) với \(0<t<1\), tam giác MNK đồng dạng ABC với tỉ số cạnh \(t\). Chu vi vì thế nhân \(t\); **diện tích nhân \(t^2\)**. Đây là hệ quả của những mặt cắt song song đáy, không phải áp dụng một công thức thể tích chưa học.

    **Vận dụng.** Mặt phẳng \((MNK)\parallel(ABC)\) cắt ba cạnh tứ diện theo tỉ số \(SM/SA=SN/SB=SK/SC=3/5\). Tỉ số chu vi và diện tích tam giác MNK so với ABC là bao nhiêu?

    <span data-ped-first-try="5" data-outcome-id="G11-B13-PRISM_RATIO" data-thpt-first-try-id="THPT-G11-B13-TRY05" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Hai tam giác đồng dạng tỉ số \(3/5\). Do đó
        \[
        \frac{P_{MNK}}{P_{ABC}}=\frac35,\qquad
        \frac{S_{MNK}}{S_{ABC}}=\left(\frac35\right)^2=\frac9{25}.
        \]
        Không nhầm **tỉ số diện tích** với tỉ số cạnh.

    <span data-thpt-help-id="HELP-G11-B13-TRY05" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em ghi diện tích cũng bằng \(3/5\) diện tích đáy.

        **Tự sửa:** Với tam giác đồng dạng, **chu vi tỉ lệ \(t\), diện tích tỉ lệ \(t^2\)**. Ôn mục 2.4 và Ví dụ 3.4; luyện Practice B13-P04 trong [Bài 13 – Luyện tập](../luyen-tap/).

    ### 1.6. Hình lăng trụ, hình hộp và những mặt tương ứng

    Trong hình lăng trụ, hai đáy là các đa giác tương ứng nằm trên hai mặt phẳng song song; các cạnh bên **cùng phương và cùng độ dài**, các mặt bên là hình bình hành. Hình hộp là một hình lăng trụ có đáy hình bình hành. Nhờ vậy ta có thể đọc các tầng, các cạnh và những thiết diện có quan hệ song song mà không chỉ dựa vào vẻ ngoài mô hình.

    **Vận dụng.** Trong lăng trụ tam giác \(ABC.A'B'C'\), chỉ ra hai mặt phẳng song song và hai cặp cạnh bên có cùng độ dài. Tại sao mặt bên \(ABB'A'\) là hình bình hành?

    <span data-ped-first-try="6" data-outcome-id="G11-B13-PRISM_RATIO" data-thpt-first-try-id="THPT-G11-B13-TRY06" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \((ABC)\parallel(A'B'C')\). Các cạnh bên \(AA',BB',CC'\) đôi một song song và **bằng nhau**. Trong tứ giác ABB'A', ta có \(AA'\parallel BB'\) và \(AB\parallel A'B'\); vì hai cặp cạnh đối song song nên đó là **hình bình hành**.

    <span data-thpt-help-id="HELP-G11-B13-TRY06" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em chỉ vẽ hai hình tam giác giống nhau rồi khẳng định mọi cạnh nhìn thấy dài bằng nhau.

        **Tự sửa:** Dùng định nghĩa/cấu tạo **đáy song song và cạnh bên cùng hướng**, sau đó nhận diện mặt bên bình hành. Ôn mục 2.5, luyện Practice về lăng trụ/hình hộp ở [Luyện tập Bài 13](../luyen-tap/).

=== "Kiến thức SGK"

    ### 2.1. Định nghĩa và quan hệ hai mặt phẳng

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa:</strong> Hai mặt phẳng \((P),(Q)\) **song song** nếu chúng không có điểm chung, kí hiệu \((P)\parallel(Q)\). Hai mặt trùng nhau hoặc hai mặt cắt nhau không phải song song. Hai mặt phẳng phân biệt có điểm chung thì giao nhau theo một đường.</div>

    ### 2.2. Dấu hiệu và tính chất hai mặt phẳng song song

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Dấu hiệu:</strong> Nếu mặt \((P)\) chứa **hai đường cắt nhau** \(a,b\) và \(a\parallel(Q)\), \(b\parallel(Q)\), thì \((P)\parallel(Q)\).</div>

    **Giới hạn áp dụng:** Chỉ một đường trong P song song Q là chưa đủ; hai đường **song song nhau** trong P cũng chưa phải dấu hiệu. Nếu các đường a,b nằm trong Q thì không thỏa điều kiện \(a\parallel(Q)\) theo nghĩa không có điểm chung.

    **Tính chất:** Qua một điểm M ở ngoài \((P)\) có đúng một mặt phẳng song song với \((P)\). Nếu \((P)\parallel(Q)\) và mặt \((R)\) cắt cả hai theo hai đường d,e thì \(d\parallel e\). Hai mặt phẳng phân biệt cùng song song với mặt thứ ba cũng song song với nhau; nếu không phân biệt có thể trùng nhau.

    ### 2.3. Định lí Thalès trong không gian

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Định lí:</strong> Ba mặt phẳng đôi một song song, lần lượt cắt hai đường thẳng ở \(A,B,C\) và \(A',B',C'\) (các điểm theo cùng thứ tự) thì các đoạn bị chắn tương ứng tỉ lệ:
    \[
      \frac{AB}{BC}=\frac{A'B'}{B'C'}.
    \]
    Các đoạn trong mẫu khác \(0\); các cát tuyến không cần song song nhau.</div>

    **Vì sao:** Nếu hai cát tuyến đồng phẳng, dùng các giao tuyến song song và định lí Thalès trong mặt phẳng. Nếu chúng **chéo nhau**, phải dựng cát tuyến phụ thích hợp rồi liên hệ tỉ số qua các mặt phẳng phụ; **không được mặc nhiên cho hai cát tuyến cùng nằm trong một mặt**. Điều quan trọng là ba mặt **đôi một song song** và ghép đúng các đoạn tương ứng, không phải các khoảng cách bằng nhau.

    **Ứng dụng mặt cắt:** Với \((MNK)\parallel(ABC)\) trong tứ diện \(S.ABC\), các tỉ số \(SM/SA=SN/SB=SK/SC=t\) bằng nhau khi ba giao điểm trên các tia cạnh phù hợp. Các tam giác đồng dạng có tỉ số chu vi \(t\), diện tích \(t^2\).

    ### 2.4. Hình lăng trụ, hình hộp

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Hình lăng trụ:</strong> Hai đa giác đáy tương ứng nằm trong hai mặt phẳng song song, các cạnh bên qua các đỉnh tương ứng cùng phương; các mặt bên là hình bình hành. Các cạnh bên **song song và có độ dài bằng nhau**. <em>Hình hộp</em> là lăng trụ có đáy hình bình hành, gồm các mặt bên và hai đáy đều là những hình bình hành.</div>

    <figure class="thpt-r4-plot"><img src="../../../../../assets/images/thpt/FIG-G11-B13-01_R01.svg" loading="lazy" alt="Hình hộp ABCD.A'B'C'D' với hai đáy ở hai mặt phẳng song song và các cạnh bên tương ứng"><figcaption>Đọc hình: các mặt đáy \((ABCD),(A'B'C'D')\) không có điểm chung và song song; mỗi mặt bên như \(ABB'A'\) là hình bình hành. Hình phối cảnh không cho phép đo trực tiếp góc/độ dài.</figcaption></figure>

    **Phân biệt:** Cạnh bên của lăng trụ **không nhất thiết vuông góc đáy**. Hình hộp chữ nhật chỉ là trường hợp đặc biệt có các góc vuông, không được suy từ hình vẽ chung.

=== "Ví dụ"

    ### 3.1. Một cặp đường song song chưa đủ kết luận song song hai mặt

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Hai mặt P,Q cùng chứa đường a và có hai đường b⊂P, c⊂Q với b∥c. Có suy P∥Q không?</p>
    <p><strong>Phân tích:</strong> Vì hai mặt cùng chứa a, chúng đã có vô số điểm chung; không thể song song theo định nghĩa.</p>
    <p><strong>Lời giải:</strong> Không. Chúng có đường a chung. Một cặp b∥c nằm trong các mặt chưa xóa được điểm chung đó; hai mặt P,Q có thể trùng hoặc cắt nhau theo a.</p>
    <p><strong>Kiểm lại:</strong> Điều kiện định nghĩa “không có điểm chung” bị vi phạm ngay bởi a.</p></div>

    ### 3.2. Chứng minh hai mặt song song bằng hai đường cắt nhau

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Trong tứ diện \(S.ABC\), M,N,K lần lượt là trung điểm SA,SB,SC. Chứng minh \((MNK)\parallel(ABC)\).</p>
    <p><strong>Phân tích:</strong> Dùng hai đường trung bình từ M trong hai tam giác SAB và SAC; chúng cắt nhau tại M.</p>
    <p><strong>Lời giải:</strong> \(MN\parallel AB\subset(ABC)\) và \(MK\parallel AC\subset(ABC)\). Vì M ngoài đáy, MN,MK không nằm trong đáy, suy ra từng đường song song mặt đáy. Hai đường cắt nhau tại M trong \((MNK)\); vậy \((MNK)\parallel(ABC)\).</p>
    <p><strong>Kiểm lại:</strong> Đã dùng **hai** đường cắt nhau, không chỉ một đoạn song song đáy.</p></div>

    ### 3.3. Tỉ số Thalès giữa ba mặt song song

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Ba mặt song song cắt hai cát tuyến tại A,B,C và A',B',C' theo thứ tự. Biết AB=4, BC=5, A'B'=12 (cm). Tìm B'C'.</p>
    <p><strong>Phân tích:</strong> Dùng Thalès trong không gian trên các **đoạn tương ứng**, không dùng giả định chúng bằng nhau.</p>
    <p><strong>Lời giải:</strong> \(AB/BC=A'B'/B'C'\) nên \(4/5=12/B'C'\). Suy ra \(B'C'=15\) cm.</p>
    <p><strong>Kiểm lại:</strong> \(4/5=12/15\). Hai tỉ số bằng nhau như định lí yêu cầu.</p></div>

    ### 3.4. Tỉ số cạnh, chu vi, diện tích của thiết diện

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Trong tứ diện \(S.ABC\), M,N,K nằm trong SA,SB,SC sao cho \(SM/SA=SN/SB=SK/SC=2/5\). Tính tỉ số chu vi và diện tích của MNK so với ABC.</p>
    <p><strong>Phân tích:</strong> Hai mặt tương ứng song song, tam giác thiết diện đồng dạng đáy với hệ số \(t=2/5\).</p>
    <p><strong>Lời giải:</strong> Chu vi tỉ lệ \(2/5\), diện tích tỉ lệ \(t^2=(2/5)^2=4/25\).</p>
    <p><strong>Kiểm lại:</strong> Công thức diện tích dùng **bình phương** tỉ số cạnh, không phải tỉ số cạnh.</p></div>

    ### 3.5. Đọc tính chất mặt bên của lăng trụ

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Trong lăng trụ tam giác ABC.A'B'C', biết AB=7 cm, AA'=5 cm. Nêu tính chất và độ dài các cạnh tương ứng ở mặt bên ABB'A'.</p>
    <p><strong>Phân tích:</strong> Mặt bên là hình bình hành, các cạnh đối bằng nhau.</p>
    <p><strong>Lời giải:</strong> \(A'B'=AB=7\) cm; \(BB'=AA'=5\) cm; hai cặp cạnh đối song song. Không tự kết luận góc ABB' vuông.</p>
    <p><strong>Kiểm lại:</strong> Cấu trúc đúng hình bình hành, không cần giả sử lăng trụ đứng.</p></div>

    ### 3.6. Ứng dụng đo mực nước bằng thanh chéo

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Đáy, mặt nước và mặt nắp của bể mô hình là ba mặt phẳng đôi một song song. Thanh chéo cắt chúng lần lượt tại A,B,C, với AC=150 cm, AB=60 cm. Một thanh đo thẳng đứng cắt ba mặt đó tại A',B',C', với A'C'=100 cm. Tìm chiều cao A'B' từ đáy đến mặt nước.</p>
    <p><strong>Phân tích:</strong> Các đoạn chắn giữa cùng ba mặt song song có tỉ số tương ứng, dù hai thanh có hướng khác nhau.</p>
    <p><strong>Lời giải:</strong> \(AB/AC=A'B'/A'C'\). Vì thế \(60/150=A'B'/100\), suy ra \(A'B'=40\) cm.</p>
    <p><strong>Kiểm lại:</strong> Mặt nước nằm giữa đáy và nắp nên độ cao 40 cm nằm trong khoảng 0–100 cm, đúng mô hình.</p></div>

=== "Lỗi thường gặp"

    <span data-thpt-help-id="HELP-G11-B13-01" hidden></span>

    ??? tip "4.1. Dùng một đường để chứng minh hai mặt song song"

        **Dấu hiệu:** Em chỉ có MN∥đáy nhưng kết luận cả mặt (MNK)∥đáy.

        **Vì sao sai:** Cần **hai đường cắt nhau trong mặt đang xét**, mỗi đường song song mặt kia.

        **Tự sửa:** Ôn mục 2.2 và Ví dụ 3.2, luyện Core B13-C02/Practice B13-P02 tại [Bài 13 – Luyện tập](../luyen-tap/).

    <span data-thpt-help-id="HELP-G11-B13-02" hidden></span>

    ??? tip "4.2. Nhầm giao tuyến của hai mặt song song"

        **Dấu hiệu:** Em vẽ P∩Q là đường d dù P∥Q.

        **Vì sao sai:** Hai mặt song song không có điểm chung nên **không có giao tuyến**; giao tuyến song song chỉ xuất hiện khi mặt thứ ba **cắt riêng cả hai**.

        **Tự sửa:** Ôn mục 2.1–2.2, xét ba mặt đúng vai, luyện Practice B13-P01.

    <span data-thpt-help-id="HELP-G11-B13-03" hidden></span>

    ??? tip "4.3. Nhầm Thalès với bằng nhau về độ dài"

        **Dấu hiệu:** Em cho AB=A'B' chỉ vì ba tầng song song.

        **Vì sao sai:** Thalès cho **tỉ số các đoạn tương ứng**, không khẳng định độ dài từng đoạn trên hai cát tuyến bằng nhau.

        **Tự sửa:** Ôn mục 2.3 và Ví dụ 3.3, lập bảng tỉ số; thử lại một bài tỉ số ở [Core và Luyện tập](../luyen-tap/).

    <span data-thpt-help-id="HELP-G11-B13-04" hidden></span>

    ??? tip "4.4. Quên bình phương hệ số đồng dạng khi tính diện tích"

        **Dấu hiệu:** Em dùng tỉ số cạnh 2/5 làm tỉ số diện tích.

        **Vì sao sai:** Diện tích của tam giác đồng dạng biến đổi theo **bình phương** hệ số cạnh.

        **Tự sửa:** Ôn mục 2.3, Ví dụ 3.4, luyện Practice B13-P04 tại [Bài 13 – Luyện tập](../luyen-tap/).

    **Học tiếp:** [Core và Luyện tập](../luyen-tap/) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/) · [Tự luận Chương IV](../../../../thu-vien/tu-luan-g11-chuong-iv/).

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập một, Bài 13 (trang in 88–94).</p>
