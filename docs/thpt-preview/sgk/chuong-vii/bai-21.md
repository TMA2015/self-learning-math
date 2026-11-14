# Bài 21. Đường tròn trong mặt phẳng tọa độ

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VII · KIẾN THỨC SGK KNTT</p>
<p class="thpt-r4-lead">Viết phương trình đường tròn, xác định tâm, bán kính và lập tiếp tuyến tại một điểm.</p>

</div>

=== "Khám phá kiến thức"

    ### Cùng tìm hiểu

    Một trạm phát sóng có tầm phủ lý tưởng 3 km. Nếu đứng cách trạm 1 km, em vẫn ở **trong vùng phủ**; vậy vì sao ranh giới vùng phủ lại chỉ gồm những điểm cách trạm **đúng 3 km**? Hãy phân biệt **cả hình tròn** với **đường biên** của nó trước khi dùng công thức khoảng cách để tự suy ra phương trình đường tròn.

    ### Ví dụ trực quan


    <span id="thpt-g10-chvii-try13" data-thpt-first-try-id="THPT-G10-CHVII-TRY13" data-outcome-id="G10-B21-CIRCLE_STANDARD" data-thpt-help-ref="HELP-G10-CHVII-TRY13"></span>

    Một trạm phát tín hiệu ở \(I\) có tầm xa lý tưởng \(R\). Nếu chỉ xét khoảng cách, **toàn bộ vùng phủ** gồm những vị trí \(M\) với \(IM\le R\): ở gần trạm vẫn nhận được tín hiệu. Nhưng **ranh giới ngoài** của vùng đó mới là đường tròn, gồm những vị trí cách trạm **đúng** \(R\), tức \(IM=R\).

    Gọi \(I(a,b)\) và \(M(x,y)\). Từ công thức khoảng cách hai điểm, \(IM^2=(x-a)^2+(y-b)^2\). Trên đường biên, \(IM=R>0\), nên
    \[
    (x-a)^2+(y-b)^2=R^2.
    \]
    Nếu \(IM<R\), điểm nằm **bên trong**, không nằm trên đường tròn; nếu \(IM>R\), điểm nằm **ngoài**. Nhờ vậy em biết rõ phương trình đang mô tả **đường biên**, không phải toàn bộ hình tròn. Đừng nhầm bán kính \(R\) với bình phương \(R^2\).

    <figure class="thpt-r4-plot thpt-r4-concept-figure" data-chvii-r02-diagram="TRY13"><img src="../../../../assets/images/thpt/G10_CHVII_R02_B21_TRY13_CIRCLE.svg" loading="lazy" alt="Phân biệt đường tròn biên IM bằng R và hình tròn chứa các điểm IM nhỏ hơn hoặc bằng R."><figcaption>Đường tròn là đường biên; hình tròn gồm cả phần bên trong.</figcaption></figure>

    **Em vận dụng.** Đường tròn có tâm I(-2,1) và bán kính 3 có phương trình nào?

    ??? question "Đối chiếu"

        **Đáp án:** (x+2)²+(y-1)²=9.

        **Lý do:** IM²=(x+2)²+(y-1)², và R²=3²=9. Cần R=3>0.






    <a href="../luyen-tap/?item=THPT-G10-B21-C01">Luyện tập thêm</a>


    <span id="thpt-g10-chvii-try14" data-thpt-first-try-id="THPT-G10-CHVII-TRY14" data-outcome-id="G10-B21-CIRCLE_GENERAL" data-thpt-help-ref="HELP-G10-CHVII-TRY14"></span>

    Có những phương trình nhìn ban đầu chẳng thấy tâm hay bán kính. Hãy nhớ \((x-a)^2=x^2-2ax+a^2\): ta có thể biến các hạng tử bậc hai và bậc nhất thành **bình phương khoảng cách tới một điểm**. Ví dụ, \(x^2+y^2-4x+2y+1=0\) viết lại thành
    \[
    (x^2-4x+4)+(y^2+2y+1)=4,
    \quad (x-2)^2+(y+1)^2=4.
    \]
    Bây giờ mới nhìn ra tâm \(I(2,-1)\) và bán kính \(R=2\).

    Tổng hai bình phương không thể âm. Vì vậy với dạng \(x^2+y^2-2ax-2by+c=0\), sau khi chuyển thành \((x-a)^2+(y-b)^2=a^2+b^2-c\), ta có một đường tròn thật sự chỉ khi **\(a^2+b^2-c>0\)**. Bằng 0 chỉ còn một điểm; âm thì không có điểm thực nào thỏa mãn. Đây là điều kiện hình học, không phải mẹo nhớ ba dấu.

    **Em vận dụng.** Phương trình x²+y²−6x+4y+8=0 biểu diễn đường tròn nào?

    ??? question "Đối chiếu"

        **Đáp án:** (x−3)²+(y+2)²=5, tâm I(3,−2), bán kính √5.

        **Lý do:** x²−6x=(x−3)²−9, y²+4y=(y+2)²−4. Suy ra tổng hai bình phương bằng −8+9+4=5>0.






    <a href="../luyen-tap/?item=THPT-G10-B21-C02">Luyện tập thêm</a>


    <span id="thpt-g10-chvii-try15" data-thpt-first-try-id="THPT-G10-CHVII-TRY15" data-outcome-id="G10-B21-CIRCLE_TANGENT" data-thpt-help-ref="HELP-G10-CHVII-TRY15"></span>

    Một tiếp tuyến chạm đường tròn tại điểm \(M\). Ngay tại điểm chạm, bán kính \(IM\) vuông góc với tiếp tuyến. Vì thế nếu biết \(I\) và \(M\), ta đã biết **một pháp tuyến của tiếp tuyến**: chính là \(\overrightarrow{IM}\). Nhưng trước hết phải kiểm \(M\) thực sự nằm trên đường tròn.

    Chẳng hạn, đường tròn tâm \(I(2,1)\), bán kính \(\sqrt5\), có điểm \(M(3,3)\) vì \(IM^2=1^2+2^2=5\). Vectơ \(\overrightarrow{IM}=(1,2)\) là pháp tuyến của tiếp tuyến tại \(M\), nên phương trình qua \(M\) là \((x-3)+2(y-3)=0\), tức \(x+2y-9=0\). Như vậy, ta chọn cách viết phương trình **qua điểm và pháp tuyến** vì biết rõ điểm chạm và hướng vuông góc, không phải vì học thuộc một công thức tiếp tuyến riêng.

    <figure class="thpt-r4-plot thpt-r4-concept-figure" data-chvii-r02-diagram="TRY15"><img src="../../../../assets/images/thpt/G10_CHVII_R02_B21_TRY15_TANGENT.svg" loading="lazy" alt="Bán kính IM0 vuông góc với tiếp tuyến tại điểm M0; pháp tuyến của tiếp tuyến là IM0."><figcaption>Tiếp tuyến đi qua tiếp điểm và nhận bán kính tại đó làm vectơ pháp tuyến.</figcaption></figure>

    **Em vận dụng.** Đường tròn tâm I(1,−1), bán kính 5; M(4,3). Viết tiếp tuyến tại M.

    ??? question "Đối chiếu"

        **Đáp án:** 3x+4y−24=0.

        **Lý do:** IM=(3,4), IM²=9+16=25=R² nên M thuộc đường. Tiếp tuyến: 3(x−4)+4(y−3)=0 ⇒ 3x+4y−24=0.






    <a href="../luyen-tap/?item=THPT-G10-B21-P02">Luyện tập thêm</a>


    <span id="thpt-g10-chvii-try16" data-thpt-first-try-id="THPT-G10-CHVII-TRY16" data-outcome-id="G10-B21-CIRCLE_THROUGH_POINTS" data-thpt-help-ref="HELP-G10-CHVII-TRY16"></span>

    Hai mốc A và B chưa đủ xác định một đường tròn, vì có nhiều vị trí tâm cùng cách đều hai mốc. Những tâm ấy nằm trên đường trung trực của đoạn AB. Nếu thêm mốc C không thẳng hàng với A,B, tâm phải đồng thời cách đều A,B và A,C; vì vậy nó là giao điểm của hai đường trung trực tương ứng.

    Hãy tưởng tượng tam giác ABC cùng hai đường trung trực của AB và AC: giao điểm I thỏa \(IA=IB=IC\), từ đó lấy \(R=IA\) để viết đường tròn. Trước khi dựng phải kiểm ba điểm không thẳng hàng. Nếu chúng thẳng hàng, không có đường tròn hữu hạn nào qua cả ba; nếu chỉ biết hai điểm, ta vẫn chưa chọn được tâm duy nhất.

    **Em vận dụng.** Đường tròn qua A(0,0), B(2,0), C(0,2) có tâm, bán kính và phương trình gì?

    ??? question "Đối chiếu"

        **Đáp án:** Tâm I(1,1), bán kính √2, phương trình (x−1)²+(y−1)²=2.

        **Lý do:** Trung trực AB là x=1; trung trực AC là y=1. IA²=1²+1²=2; thử B và C đều cho tổng bình phương bằng 2.






    <a href="../luyen-tap/?item=THPT-G10-B21-P04">Luyện tập thêm</a>


    <span id="thpt-g10-chvii-try17" data-thpt-first-try-id="THPT-G10-CHVII-TRY17" data-outcome-id="G10-B21-LINE_CIRCLE_POSITION" data-thpt-help-ref="HELP-G10-CHVII-TRY17" data-learning-role="interlesson-application"></span>

    **Vận dụng liên bài B20–B21.** Em sử dụng thêm công thức khoảng cách đã học ở Bài 20.

    Từ Bài 20, ta đã biết cách đo khoảng cách \(h=d(I,d)\) từ tâm \(I\) đến một đường thẳng \(d\). Từ Bài 21, ta biết mỗi điểm trên đường tròn cách \(I\) đúng bán kính \(R\). Hãy so sánh hai độ dài ấy: nếu \(h>R\), đường thẳng ở ngoài và không gặp đường tròn; nếu \(h=R\), có đúng một điểm chạm; nếu \(h<R\), có hai giao điểm.

    Em không cần giải hệ ngay để biết **số** giao điểm; nhưng muốn biết **tọa độ**, em vẫn phải giải hai phương trình. Đây là một vận dụng liên bài, không thay kiến thức bắt buộc về phương trình đường tròn và tiếp tuyến.

    **Em vận dụng.** Đường tròn tâm I(1,2), R=3 và đường d: y=−1 có quan hệ nào?

    ??? question "Đối chiếu"

        **Đáp án:** Tiếp xúc; tiếp điểm T(1,−1).

        **Lý do:** Khoảng cách từ I(1,2) đến y=−1 là |2−(−1)|=3=R. Chân đường vuông góc từ I xuống d là T(1,−1).






    <a href="../luyen-tap/?item=THPT-G10-B21-P03">Luyện tập thêm</a>

    ### Thuật ngữ, kiến thức và kỹ năng

    **Thuật ngữ:** Tâm, bán kính, phương trình đường tròn, dạng tổng quát, tiếp tuyến, tiếp điểm và vị trí tương đối.

    **Sau bài học, em cần làm được:** Tìm tâm/bán kính bằng hoàn thành bình phương; lập phương trình khi biết tâm/bán kính; kiểm điểm trên đường tròn; dùng bán kính làm pháp tuyến tiếp tuyến.

=== "Kiến thức SGK"

    ### 2.1. Phương trình đường tròn

    Đường tròn tâm \(I(a;b)\), bán kính \(R>0\) có phương trình:

    \[
    (x-a)^2+(y-b)^2=R^2.
    \]

    Phương trình tổng quát \(x^2+y^2+Dx+Ey+F=0\) biểu diễn **đường tròn thực có bán kính dương** khi

    \[
    I\left(-\frac D2;-\frac E2\right),\qquad R^2=\frac{D^2+E^2}{4}-F>0.
    \]

    Nếu \(R^2=0\), tập điểm chỉ có một điểm; nếu \(R^2<0\), không có điểm thực. Không gọi hai trường hợp này là đường tròn có bán kính dương.

    ### 2.2. Phương trình tiếp tuyến của đường tròn

    <figure class="thpt-r4-plot thpt-r4-concept-figure"><img src="../../../../assets/images/thpt/G10_B21_CIRCLE_TANGENT_R02.svg" loading="lazy" alt="Đường tròn (x-2)²+(y-1)²=9 tâm I(2,1), tiếp tuyến x=5 tại T(5,1)"><figcaption>Đường tròn \((x-2)^2+(y-1)^2=9\) có tâm \(I(2,1)\), bán kính 3. Điểm \(T(5,1)\) nằm trên đường tròn và tiếp tuyến tại \(T\) là \(x=5\).</figcaption></figure>



    **Cách đọc hình.** Chỉ I(2,1), đoạn IT dài 3 nằm ngang và tiếp tuyến tại T(5,1) thẳng đứng; bán kính vuông góc tiếp tuyến. Hình có cùng phương trình đường tròn được ghi ở chú thích.
    Tại điểm \(M(x_M;y_M)\) **thuộc đường tròn**, tiếp tuyến vuông góc với bán kính \(IM\):

    \[
    (x_M-a)(x-x_M)+(y_M-b)(y-y_M)=0.
    \]

=== "Ví dụ"



    ### Ví dụ — Từ tâm và tiếp điểm tìm tiếp tuyến

    **Đề bài.** Cho đường tròn \((x-2)^2+(y-1)^2=9\) và điểm \(T(5,1)\). Viết tiếp tuyến tại T.

    **Vì sao chọn cách này?** Bán kính tới tiếp điểm luôn **vuông góc** tiếp tuyến; vì vậy vectơ \(\overrightarrow{IT}=(3,0)\) là một pháp tuyến.

    **Lời giải.** \(I=(2,1)\), \(R=3\). \(IT=3\), nên T thuộc đường tròn. Tiếp tuyến qua T nhận pháp tuyến \((3,0)\): \(3(x-5)=0\), tức \(x=5\). 

    **Kiểm lại:** đường thẳng đứng vuông góc đoạn bán kính nằm ngang.

    ### Ví dụ 2 — Từ phương trình tổng quát tới tiếp tuyến

    **Đề bài.** Với \(x^2+y^2-4x+6y-12=0\), xác định tâm, bán kính của đường tròn và tiếp tuyến tại \(M(5;1)\).

    **Vì sao chọn cách này?** Hoàn thành bình phương để đọc tâm, bán kính; xác nhận tiếp điểm thuộc đường tròn trước khi dùng bán kính làm pháp tuyến.

    **Lời giải.** Hoàn thành bình phương:

    \[
    (x-2)^2+(y+3)^2=25.
    \]

    Vậy \(I(2;-3)\) và \(R=5\). Điểm \(M(5;1)\) thuộc đường tròn vì \(IM^2=3^2+4^2=25\). Vectơ \(IM=(3;4)\) là pháp tuyến của tiếp tuyến tại \(M\), nên:

    \[
    3(x-5)+4(y-1)=0\iff \boxed{3x+4y-19=0}.
    \]

    !!! tip "Nhớ kiểm tra"
        Để viết tiếp tuyến **tại một điểm**, phải xác nhận điểm đó thuộc đường tròn. Đừng nhầm bán kính \(R\) với \(R^2\).

=== "Lỗi thường gặp"

    <span id="help-g10-chvii-try13" data-thpt-help-id="HELP-G10-CHVII-TRY13"></span>

    ??? tip "Phương trình đường tròn: nhầm tâm, bán kính"

        1. **Nhận diện lỗi:** Nếu viết vế phải 3 hoặc (x-2)², em nhầm bán kính với bình phương bán kính hoặc nhầm dấu tọa độ tâm.

        2. **Quay lại bản chất:** Phương trình đường tròn chỉ là phát biểu IM=R viết bằng tọa độ. Bình phương hai vế thu điều kiện khoảng cách, không phải công thức xuất hiện từ đâu đó.

        3. **Tự sửa:** Đặt M=I, vế trái phải bằng 0; chọn M=I+(3,0) thì vế trái bằng 9.

        4. **Tự đối chiếu:** mở tab Khám phá kiến thức, chọn Đối chiếu của câu Vận dụng vừa làm rồi kiểm lại dữ kiện và điều kiện áp dụng.

        5. **Luyện tiếp:** Dùng liên kết bên dưới để luyện câu cùng kiến thức. Nếu đã xem lời giải, hãy chọn thêm câu khác và tự làm mà không dựa vào gợi ý.

    <span id="help-g10-chvii-try14" data-thpt-help-id="HELP-G10-CHVII-TRY14"></span>

    ??? tip "Hoàn thành bình phương: sai dấu"

        1. **Nhận diện lỗi:** Nếu kết luận bán kính 5 hoặc tâm (−3,2), em chưa đọc đúng dấu trong bình phương.

        2. **Quay lại bản chất:** Hoàn thành bình phương chuyển điều kiện đại số thành khoảng cách tới một tâm. Nếu kết quả R²≤0 thì không tạo được đường tròn bán kính dương.

        3. **Tự sửa:** Khai triển lại hai bình phương và kiểm phương trình thu được trùng đúng phương trình gốc.

        4. **Tự đối chiếu:** mở tab Khám phá kiến thức, chọn Đối chiếu của câu Vận dụng vừa làm rồi kiểm lại dữ kiện và điều kiện áp dụng.

        5. **Luyện tiếp:** Dùng liên kết bên dưới để luyện câu cùng kiến thức. Nếu đã xem lời giải, hãy chọn thêm câu khác và tự làm mà không dựa vào gợi ý.

    <span id="help-g10-chvii-try15" data-thpt-help-id="HELP-G10-CHVII-TRY15"></span>

    ??? tip "Tiếp tuyến: thiếu điểm chạm hoặc pháp tuyến"

        1. **Nhận diện lỗi:** Nếu điểm chưa thuộc đường tròn hoặc dùng IM làm chỉ phương, cách dựng tiếp tuyến đã sai điều kiện.

        2. **Quay lại bản chất:** Tại M trên đường tròn, bán kính IM vuông góc tiếp tuyến; vì vậy chính IM là một pháp tuyến của tiếp tuyến. Điều kiện 'M nằm trên đường tròn' là bắt buộc.

        3. **Tự sửa:** Thử 3²+4²=5² và thế M vào 3x+4y−24=0; kiểm pháp tuyến (3,4).

        4. **Tự đối chiếu:** mở tab Khám phá kiến thức, chọn Đối chiếu của câu Vận dụng vừa làm rồi kiểm lại dữ kiện và điều kiện áp dụng.

        5. **Luyện tiếp:** Dùng liên kết bên dưới để luyện câu cùng kiến thức. Nếu đã xem lời giải, hãy chọn thêm câu khác và tự làm mà không dựa vào gợi ý.

    <span id="help-g10-chvii-try16" data-thpt-help-id="HELP-G10-CHVII-TRY16"></span>

    ??? tip "Tâm đường tròn qua ba điểm"

        1. **Nhận diện lỗi:** Nếu lấy trung điểm AB làm tâm, em mới dùng hai điểm và chưa bảo đảm cách đều C.

        2. **Quay lại bản chất:** Tâm đường tròn cách đều các điểm đã cho. Giao hai đường trung trực cho tâm nếu ba điểm không thẳng hàng; khi ba điểm thẳng hàng thì không có đường tròn đi qua cả ba.

        3. **Tự sửa:** Tìm cả hai trung trực rồi thử độ dài IA, IB, IC bằng nhau.

        4. **Tự đối chiếu:** mở tab Khám phá kiến thức, chọn Đối chiếu của câu Vận dụng vừa làm rồi kiểm lại dữ kiện và điều kiện áp dụng.

        5. **Luyện tiếp:** Dùng liên kết bên dưới để luyện câu cùng kiến thức. Nếu đã xem lời giải, hãy chọn thêm câu khác và tự làm mà không dựa vào gợi ý.

    <span id="help-g10-chvii-try17" data-thpt-help-id="HELP-G10-CHVII-TRY17"></span>

    ??? tip "Đường thẳng và đường tròn: nhầm tiếp xúc"

        1. **Nhận diện lỗi:** Nếu h=R mà nói 'cắt hai điểm', em nhầm trường hợp tiếp xúc với cát tuyến.

        2. **Quay lại bản chất:** Nếu h=d(I,d)>R thì lối đi ở ngoài vùng; h=R thì chạm một điểm; h<R thì cắt đường tròn tại hai điểm. Không cần giải hệ khi chỉ hỏi số giao điểm.

        3. **Tự sửa:** Vẽ đoạn IT vuông góc d dài 3; các điểm khác T trên d sẽ cách I xa hơn 3.

        4. **Tự đối chiếu:** mở tab Khám phá kiến thức, chọn Đối chiếu của câu Vận dụng vừa làm rồi kiểm lại dữ kiện và điều kiện áp dụng.

        5. **Luyện tiếp:** Dùng liên kết bên dưới để luyện câu cùng kiến thức. Nếu đã xem lời giải, hãy chọn thêm câu khác và tự làm mà không dựa vào gợi ý.

    <span data-thpt-help-id="D6-G10-B21-01" hidden></span>

    ??? tip "Nhầm R² với bán kính"

        <p><strong>Dấu hiệu:</strong> Hoàn thành bình phương ra R²≤0 nhưng vẫn coi là đường tròn có bán kính dương.</p>
        <p><strong>Bản chất toán:</strong> Chỉ R²&gt;0 mới cho đường tròn thực bán kính R&gt;0. R²=0 cho một điểm; R²&lt;0 không có điểm thực.</p>
        <p><strong>Tự sửa:</strong> Ôn B21 mục 1: chuyển về (x−a)²+(y−b)²=R² rồi kiểm R² trước khi lấy căn.</p>
        <p><strong>Kiến thức cần ôn:</strong> Hằng đẳng thức bình phương và bình phương không âm; B21 mục 1.</p>
        <p><strong>Luyện lại bài đã có:</strong> <a data-thpt-formative-id="THPT-G10-B21-C02" href="../luyen-tap/?item=THPT-G10-B21-C02">Luyện lại câu 21-C02</a> · <a data-thpt-formative-id="THPT-G10-B21-P05" href="../luyen-tap/?item=THPT-G10-B21-P05">Luyện lại câu 21-P05</a></p>


    <span data-thpt-help-id="D6-G10-B21-02" hidden></span>

    ??? tip "Viết tiếp tuyến khi M chưa thuộc đường tròn"

        <p><strong>Dấu hiệu:</strong> Dùng IM làm pháp tuyến nhưng chưa chứng minh IM²=R²; nhầm cắt nhau với tiếp xúc.</p>
        <p><strong>Bản chất toán:</strong> Công thức tiếp tuyến tại M áp dụng khi M thuộc đường tròn. Đường d bất kỳ tiếp xúc khi d(I,d)=R&gt;0.</p>
        <p><strong>Tự sửa:</strong> Ôn B21 mục 2 và B20 mục 3 (khoảng cách): xác minh \(M\in(C)\), tính \(\overrightarrow{IM}\), lập tiếp tuyến qua M vuông góc với \(\overrightarrow{IM}\), rồi kiểm lại \(d(I,d)=R\).</p>
        <p><strong>Kiến thức cần ôn:</strong> B19 pháp tuyến, B20 khoảng cách; B21 mục 2.</p>
        <p><strong>Luyện lại bài đã có:</strong> <a data-thpt-formative-id="THPT-G10-B21-P02" href="../luyen-tap/?item=THPT-G10-B21-P02">Luyện lại câu 21-P02</a> · <a data-thpt-formative-id="THPT-G10-B21-P03" href="../luyen-tap/?item=THPT-G10-B21-P03">Luyện lại câu 21-P03</a> · <a data-thpt-formative-id="THPT-G10-CHVII-W21-ANCHOR-01" href="../../../thu-vien/tu-luan-chuong-vii/#thpt-g10-chvii-w21-anchor-01">Bài tự luận liên quan</a></p>


    **Học tiếp:** [Core và Luyện tập](luyen-tap.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">Nguồn toán học: SGK Toán 10 Kết nối tri thức với cuộc sống và học liệu SLM hiện hành. Lời giảng được biên tập nhằm hỗ trợ tự học độc lập.</p>

<small>Nguồn đối chiếu: SGK KNTT tập 2, trang in 43–47; SBT trang 39–41. </small>
