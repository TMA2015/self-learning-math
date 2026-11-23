# Bài 22. Hai đường thẳng vuông góc

<style>
/* Scoped authoring B22 only. Never change Golden CSS/JS shared by THPT or THCS. */
.md-typeset:has([data-g11-b22-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card{background:#e8f7f2;border:1px solid #a9dccc;border-left:4px solid #087d69;color:#174137}
.md-typeset:has([data-g11-b22-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card{background:#eaf1fc;border:1px solid #a5bee5;border-left:4px solid #4879c2;color:#193d66}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b22-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card{background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b22-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card{background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}
</style>

<div class="thpt-r4-screen" data-thpt-r4 data-g11-b22-knowledge-only>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VII · SGK KẾT NỐI TRI THỨC · TẬP HAI</p>
<p class="thpt-r4-lead">Từ nút giao khác mức đến hình hộp: chuyển các phương chéo nhau về cùng một điểm để đo góc, rồi chứng minh vuông góc bằng quan hệ song song thay vì nhìn phối cảnh.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương VII</a><a href="../luyen-tap/">Core/Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    **Vì sao học?** Hai nhánh đường ở hai tầng cầu vượt có thể không cắt nhau. Ta không thể đặt thước đo góc tại giao điểm không tồn tại, nhưng vẫn so sánh được **hướng** của chúng. Ở Chương IV, em đã biết các đường thẳng song song có cùng phương. Bài này dùng điều đó để đo góc giữa hai đường, kể cả khi chúng chéo nhau trong không gian.

    ### 1.1. Góc giữa hai đường thẳng

    **Hình thành bản chất theo HĐ1 SGK:** Hai đường \(m,n\) chéo nhau. Lấy điểm \(O\), dựng \(a\parallel m\), \(b\parallel n\) qua \(O\), rồi đo góc không tù giữa \(a,b\). Nếu thay \(O\) bằng \(O'\), vẫn dựng các đường theo **hai phương cũ**, kết quả góc không đổi. SGK minh họa việc đó qua các hình bình hành và định lí côsin: dời một phương song song không làm thay đổi góc. Vì vậy, **góc giữa hai đường thẳng** là góc của **hai phương**, không phụ thuộc vị trí đường trong không gian.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B22-01_R00.svg" alt="Sơ đồ dời hai phương của đường a và b tới hai đường song song a phẩy b phẩy qua O"><figcaption><strong>Hướng dẫn đọc hình:</strong> \(a,b\) là các phương ban đầu; \(a',b'\) nét đứt được dựng qua \(O\), song song tương ứng. Dấu góc vuông được đọc tại \(O\). Đây chỉ là sơ đồ **các phương**, không phải chứng minh rằng \(a,b\) trong hình thực tế chắc chắn chéo nhau; không đo độ dài/góc từ nét vẽ.</figcaption></figure>

    **Góc nào được chọn?** Hai đường không có hướng ưu tiên. Nếu hai **tia** tạo góc \(120^\circ\), góc giữa hai **đường thẳng chứa các tia** được lấy là \(60^\circ\), vì hai góc kề bù là \(120^\circ\) và \(60^\circ\). Nói chung \(0^\circ\le(m,n)\le90^\circ\). Với hai đường song song hoặc trùng nhau, góc bằng \(0^\circ\).

    **Cách chọn phương pháp:** Khi hai đường không gặp nhau, chọn một đường \(b'\parallel b\) đi qua điểm \(O\) thuộc đường \(a\) nếu thuận lợi. Sau đó tìm một **tam giác cụ thể** chứa hai phương đã đưa về một điểm; dùng góc đặc biệt, định lí côsin hoặc quan hệ vuông góc có chứng minh. Không được tự coi góc do hai nét vẽ cắt nhau trên giấy là góc thật trong không gian.

    **Tình huống hình hộp chữ nhật:** \(AB\) là cạnh đáy trước, \(CC'\) là cạnh đứng phía sau; chúng chéo nhau. Vì \(CC'\parallel AA'\) và \(AB\perp AA'\), nên \((AB,CC')=(AB,AA')=90^\circ\). Hình dưới cho thấy rõ cần **đưa phương đứng về cạnh \(AA'\)**, chứ không nối nhầm \(AB\) tới \(CC'\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B22_SKEW_PERP_RECTANGULAR_BOX_AUTHORING_20261123.svg" alt="Hình hộp chữ nhật AB song song mặt đáy và CC phẩy là cạnh đứng ở phía sau, dời CC phẩy đến AA phẩy để tính góc vuông"><figcaption><strong>Hướng dẫn đọc:</strong> đường xanh \(AB\) và đường cam \(CC'\) không cắt nhau, không song song; đường lục \(AA'\parallel CC'\). Dấu vuông tại \(A\) cho \(AB\perp AA'\), suy \(AB\perp CC'\). Không đo từ phối cảnh.</figcaption></figure>

    **Ví dụ ứng dụng SGK — Kim tự tháp Kheops:** Đáy \(ABCD\) là hình vuông cạnh khoảng \(230\) m, các cạnh bên \(SA,SB,SC,SD\) dài khoảng \(219\) m. Muốn tính góc giữa \(SC\) và \(AB\), thay **\(AB\parallel CD\)** để có \((SC,AB)=(SC,CD)=\angle SCD\). Trong tam giác cân \(SCD\), định lí côsin cho
    \[
    \cos\angle SCD=\frac{SC^2+CD^2-SD^2}{2SC\cdot CD}
    =\frac{230}{2\cdot219}.
    \]
    Vậy góc cần tìm xấp xỉ **\(58{,}3^\circ\)** theo dữ kiện, không phải đo bằng thước trên ảnh.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B22_KHEOPS_ANGLE_AUTHORING_20261123.svg" alt="Hình chóp đáy vuông cạnh 230 mét, cạnh bên 219 mét; cạnh AB song song CD và tam giác cân SCD để tính góc giữa SC và AB"><figcaption><strong>Hướng dẫn đọc:</strong> đường \(AB\) và \(CD\) tô xanh song song; xét tam giác \(SCD\) có \(SC=SD=219\) m, \(CD=230\) m. Góc tại \(C\) là góc không tù giữa \(SC,CD\), bằng góc cần tìm giữa \(SC,AB\).</figcaption></figure>

    **Vận dụng.** Trong lăng trụ \(ABC.A'B'C'\) có đáy \(ABC\) là tam giác đều, tính \((AB,B'C')\). Vì sao được thay \(B'C'\) bằng \(BC\)?

    ??? question "Đối chiếu"

        **Lời giải:** Các cạnh tương ứng của hai đáy lăng trụ song song, nên \(B'C'\parallel BC\). Do đó \((AB,B'C')=(AB,BC)=\angle ABC=60^\circ\), vì \(ABC\) đều. Hai đoạn ban đầu không cần gặp nhau.

    ??? tip "Kiểm lỗi"

        Đừng dùng góc \(120^\circ\) của các tia định hướng làm góc giữa hai **đường thẳng**; góc giữa đường luôn trong \([0^\circ,90^\circ]\).

    ### 1.2. Hai đường thẳng vuông góc

    **Điều bất ngờ của hình học không gian:** Vuông góc không bắt buộc đồng nghĩa “cắt nhau tại một điểm”. SGK định nghĩa hai đường \(a,b\) vuông góc khi **góc giữa hai phương bằng \(90^\circ\)**, kí hiệu \(a\perp b\). Nếu hai đường chéo nhau mà có phương vuông góc, chúng vẫn **vuông góc**. Cặp \(AB,CC'\) của hình hộp ở trên là một ví dụ cụ thể.

    **Tại sao thay đường song song được?** Vì góc giữa hai đường được định nghĩa bằng **phương**, nếu \(a\perp b\) và \(b'\parallel b\), thì \((a,b')=(a,b)=90^\circ\). Nhưng **không được đảo ngược suy luận** rằng nếu \(a\perp c\) và \(b\perp c\) thì \(a\parallel b\). Chẳng hạn hai trục \(Ox\) và \(Oy\) đều vuông góc \(Oz\), nhưng lại vuông góc nhau, không song song.

    **Ví dụ SGK — Hình hộp và hình thoi:** Cho hình hộp \(ABCD.A'B'C'D'\) có đáy \(ABCD\) là hình bình hành. Vì \(B'D'\parallel BD\), \((AC,B'D')=(AC,BD)\). Hai đường \(AC,B'D'\) chéo nhau, và **vuông góc khi và chỉ khi** \(AC\perp BD\). Trong hình bình hành, hai đường chéo vuông góc **khi và chỉ khi** hình đó là hình thoi. Vậy đây là điều kiện chính xác để \(AC\perp B'D'\); không suy từ giả thiết “hình bình hành” không thôi.

    **Vận dụng.** Một hình hộp có đáy là hình vuông. Hai đường \(AC\) và \(B'D'\) có giao nhau không? Chúng có vuông góc không?

    ??? question "Đối chiếu"

        **Lời giải:** Hai đường nằm ở hai mặt phẳng đáy và mặt trên song song, không có điểm chung. \(B'D'\parallel BD\), còn \(AC\) không song song \(BD\), nên chúng chéo nhau. Vì hai đường chéo của hình vuông \(AC\perp BD\), suy \(AC\perp B'D'\).

    ??? tip "Kiểm lỗi"

        Không kết luận “không cắt thì không vuông góc”. Đáy chỉ là hình bình hành chưa đủ: phải có hai đường chéo vuông góc, tương đương đáy là hình thoi.

=== "Kiến thức SGK"

    ### 2.1. Góc giữa hai đường thẳng

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Góc giữa hai đường thẳng</strong><p>Trong không gian, góc giữa hai đường thẳng \(m,n\), kí hiệu \((m,n)\), là góc không tù giữa hai đường \(a,b\) cùng đi qua một điểm \(O\) và tương ứng song song (cùng phương) với \(m,n\). Kết quả không phụ thuộc vị trí \(O\). Với hai đường bất kì, \(0^\circ\le(m,n)\le90^\circ\). Hai đường song song hoặc trùng nhau có góc \(0^\circ\).</p></div>

    **Cách xác định có lí do:** Chọn \(O\) trên một đường nếu tiện và kẻ đường qua \(O\) song song đường còn lại. Dùng góc không tù tại \(O\), hoặc góc bù của góc tù. Nếu không nhận ra góc đặc biệt, tìm tam giác chứa hai phương và dùng định lí côsin từ các độ dài đã biết. Tránh đo trực tiếp từ hình vẽ phối cảnh.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B22-01_R00.svg" alt="Sơ đồ góc giữa hai phương được thay bằng hai đường song song tương ứng gặp nhau tại O"><figcaption><strong>Tra sơ đồ:</strong> nét đứt xanh lục qua \(O\) thể hiện phương đã dời song song. Góc ở \(O\) là góc giữa hai phương; đây không phải hình không gian đầy đủ chứng minh hai đường \(a,b\) chéo nhau.</figcaption></figure>

    **Ví dụ SGK — Các góc trong hình lập phương:** Với \(ABCD.A'B'C'D'\) có tất cả mặt là hình vuông, \((AA',CD)=(AA',AB)=90^\circ\) vì \(CD\parallel AB\); \((A'C',BD)=(AC,BD)=90^\circ\) vì \(A'C'\parallel AC\); \((AC,DC')=(AC,AB')=60^\circ\) vì \(DC'\parallel AB'\) và \(AB'C\) là tam giác đều.

    **Ứng dụng với số đo:** Kim tự tháp đáy vuông cạnh \(230\) m, các cạnh bên \(219\) m: \((SC,AB)=(SC,CD)=\angle SCD\) vì \(AB\parallel CD\). Tam giác cân \(SCD\) cho \(\cos\angle SCD=230/(2\cdot219)\), nên góc gần \(58{,}3^\circ\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B22_KHEOPS_ANGLE_AUTHORING_20261123.svg" alt="Sơ đồ kim tự tháp Kheops và tam giác cân SCD tính góc giữa SC và cạnh AB song song CD"><figcaption><strong>Tra hình:</strong> chuyển \(AB\) sang cạnh song song \(CD\) ở đáy, rồi tính góc \(SCD\) bằng tam giác cân ở khung phải. Các độ dài và kết quả đều xuất phát từ dữ kiện, không từ tỉ lệ hình chiếu.</figcaption></figure>

    ### 2.2. Hai đường thẳng vuông góc

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Hai đường thẳng vuông góc</strong><p>Hai đường \(a,b\) trong không gian <strong>vuông góc</strong>, kí hiệu \(a\perp b\), khi <strong>\((a,b)=90^\circ\)</strong>. Hai đường vuông góc có thể cắt nhau hoặc chéo nhau; chúng không bắt buộc đồng phẳng.</p></div>

    **Nhận xét:** Nếu \(a\perp b\), \(b'\parallel b\), thì \(a\perp b'\), vì góc không đổi khi thay một đường bằng đường song song. Ngược lại, cùng vuông góc một đường thứ ba không có nghĩa hai đường song song trong không gian.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B22_SKEW_PERP_RECTANGULAR_BOX_AUTHORING_20261123.svg" alt="Hình hộp chữ nhật cho thấy AB và CC phẩy chéo nhau nhưng vuông góc do CC phẩy song song AA phẩy"><figcaption><strong>Tra hình:</strong> \(CC'\parallel AA'\), \(AB\perp AA'\) trong hình hộp chữ nhật; do đó \(AB\perp CC'\) dù hai cạnh không cắt nhau.</figcaption></figure>

    **Ví dụ SGK — Phân biệt hình bình hành và hình thoi:** Trong hình hộp \(ABCD.A'B'C'D'\), hai đường \(AC,B'D'\) chéo nhau, với \(B'D'\parallel BD\). Vì thế \(AC\perp B'D'\) **khi và chỉ khi** \(AC\perp BD\) **khi và chỉ khi** đáy \(ABCD\) là hình thoi.

    | Cặp đường | Góc giữa hai đường | Có thể vuông góc? |
    | :-- | :-- | :-- |
    | Song song/trùng | \(0^\circ\) | Không |
    | Cắt nhau | Góc nhỏ tại giao điểm | Có, nếu \(90^\circ\) |
    | Chéo nhau | Góc của hai phương dời qua một điểm | Có, nếu \(90^\circ\) |

    **Quy trình tự kiểm:** Tìm quan hệ song song thật, thay bằng đường qua điểm thuận lợi, tính góc qua tam giác hoặc hình đặc biệt, rồi so với \(90^\circ\). Không khẳng định vuông góc vì trông vuông trên giấy.
