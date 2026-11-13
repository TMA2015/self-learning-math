# Bài 21. Đường tròn trong mặt phẳng tọa độ

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VII · KIẾN THỨC SGK KNTT</p>
<p class="thpt-r4-lead">Viết phương trình đường tròn, xác định tâm, bán kính và lập tiếp tuyến tại một điểm.</p>

</div>

=== "Khám phá kiến thức"

    ### Cùng tìm hiểu

    Một trạm phát sóng có vùng phủ được mô tả bằng mọi điểm cách trạm **đúng 3 km**. Trên bản đồ tọa độ, tập các điểm cách tâm \(I(2,1)\) đúng 3 đơn vị chính là một **đường tròn**.

    Nếu em đã biết khoảng cách giữa hai điểm, công thức đường tròn gần như tự xuất hiện: \(\sqrt{(x-2)^2+(y-1)^2}=3\). Bình phương hai vế (đều không âm) cho \((x-2)^2+(y-1)^2=9\). Thay vì học thuộc bốn chữ số, hãy đọc công thức như câu nói: “khoảng cách từ điểm \((x,y)\) đến tâm I bằng bán kính 3”.

    Một đường thẳng có thể không chạm, cắt tại hai điểm hoặc **tiếp xúc** đường tròn. Tại điểm tiếp xúc, **tiếp tuyến vuông góc bán kính**: đây là cách dựng phương trình tiếp tuyến từ hình học.

    ### Ví dụ trực quan


    <span id="thpt-g10-chvii-try13" data-thpt-first-try-id="THPT-G10-CHVII-TRY13" data-outcome-id="G10-B21-CIRCLE_STANDARD" data-thpt-help-ref="HELP-G10-CHVII-TRY13"></span>

    Một trạm phát sóng có tầm phủ cố định tạo ra một vùng hình tròn. Trên đường biên của vùng đó, mọi vị trí M cách trạm I đúng một khoảng R. Điều này gợi lại công thức khoảng cách giữa hai điểm: nếu I(a,b), thì \(IM^2=(x-a)^2+(y-b)^2\). Đặt \(IM=R\) và bình phương hai vế, ta có phương trình \((x-a)^2+(y-b)^2=R^2\), với \(R>0\).

    Hãy hình dung một đoạn bán kính từ tâm I đến điểm M trên đường tròn; khi M chạy quanh đường biên, độ dài đoạn đó luôn giữ nguyên. Chính điều kiện khoảng cách không đổi làm nên đường tròn, chứ không phải chỉ hình thức của một biểu thức chứa bình phương. Sau khi viết phương trình, cần phân biệt bán kính R với R²; nếu thay tọa độ tâm vào vế trái thì giá trị bằng 0, không phải R².

    **Em vận dụng.** Đường tròn có tâm I(-2,1) và bán kính 3 có phương trình nào?

    ??? question "Đối chiếu"

        **Đáp án:** (x+2)²+(y-1)²=9.

        **Lý do:** IM²=(x+2)²+(y-1)², và R²=3²=9. Cần R=3>0.

        **Nếu chưa đúng:** Mở hướng dẫn tự sửa ngay bên dưới, xem lại bước còn vướng rồi thử một câu cùng kiến thức.




    <a href="../luyen-tap/?item=THPT-G10-B21-C01">Mở câu luyện tập tương ứng để tự luyện</a>


    <span id="thpt-g10-chvii-try14" data-thpt-first-try-id="THPT-G10-CHVII-TRY14" data-outcome-id="G10-B21-CIRCLE_GENERAL" data-thpt-help-ref="HELP-G10-CHVII-TRY14"></span>

    Nếu phương trình đường tròn đã được khai triển thành các hạng tử \(x^2,y^2\), x và y, ta phải tìm ngược tâm và bán kính. Bí quyết nằm ở hằng đẳng thức \((x-a)^2=x^2-2ax+a^2\): gom các hạng tử theo x, theo y rồi thêm bớt bình phương nửa hệ số để đưa phương trình về tổng hai bình phương.

    Khi ấy phương trình đã cho trở thành điều kiện một điểm cách tâm một khoảng có bình phương \(R^2\). Nếu \(R^2>0\), đó là một đường tròn thực sự; nếu \(R^2=0\), tập nghiệm chỉ là một điểm; nếu \(R^2<0\), không có điểm thực nào thỏa mãn vì tổng hai bình phương không âm. Trên hình, vị trí của tâm được xác định bởi các hằng số sau khi hoàn thành bình phương, còn R quyết định kích thước đường biên.

    **Em vận dụng.** Phương trình x²+y²−6x+4y+8=0 biểu diễn đường tròn nào?

    ??? question "Đối chiếu"

        **Đáp án:** (x−3)²+(y+2)²=5, tâm I(3,−2), bán kính √5.

        **Lý do:** x²−6x=(x−3)²−9, y²+4y=(y+2)²−4. Suy ra tổng hai bình phương bằng −8+9+4=5>0.

        **Nếu chưa đúng:** Mở hướng dẫn tự sửa ngay bên dưới, xem lại bước còn vướng rồi thử một câu cùng kiến thức.




    <a href="../luyen-tap/?item=THPT-G10-B21-C02">Mở câu luyện tập tương ứng để tự luyện</a>


    <span id="thpt-g10-chvii-try15" data-thpt-first-try-id="THPT-G10-CHVII-TRY15" data-outcome-id="G10-B21-CIRCLE_TANGENT" data-thpt-help-ref="HELP-G10-CHVII-TRY15"></span>

    Từ đường tròn, ta có thể dựng đường thẳng chỉ chạm đường tròn tại một điểm M. Bán kính IM vuông góc với tiếp tuyến tại M; bởi vậy, IM đồng thời là một vectơ pháp tuyến của đường tiếp tuyến. Đây là lý do ta có thể dùng cách viết phương trình đường thẳng qua một điểm và có pháp tuyến đã học ở Bài 19.

    Điều kiện quan trọng phải kiểm trước là M thực sự nằm trên đường tròn, tức \(IM^2=R^2\) với \(R>0\). Khi đó IM khác vectơ không; đường tiếp tuyến qua M có điều kiện \(\overrightarrow{IM}\cdot\overrightarrow{MX}=0\). Trong hình vẽ, bán kính đi từ tâm ra điểm tiếp xúc, còn tiếp tuyến tạo với nó góc \(90^\circ\). Sau cùng có thể kiểm khoảng cách từ I đến tiếp tuyến bằng R.

    **Em vận dụng.** Đường tròn tâm I(1,−1), bán kính 5; M(4,3). Viết tiếp tuyến tại M.

    ??? question "Đối chiếu"

        **Đáp án:** 3x+4y−24=0.

        **Lý do:** IM=(3,4), IM²=9+16=25=R² nên M thuộc đường. Tiếp tuyến: 3(x−4)+4(y−3)=0 ⇒ 3x+4y−24=0.

        **Nếu chưa đúng:** Mở hướng dẫn tự sửa ngay bên dưới, xem lại bước còn vướng rồi thử một câu cùng kiến thức.




    <a href="../luyen-tap/?item=THPT-G10-B21-P02">Mở câu luyện tập tương ứng để tự luyện</a>


    <span id="thpt-g10-chvii-try16" data-thpt-first-try-id="THPT-G10-CHVII-TRY16" data-outcome-id="G10-B21-CIRCLE_THROUGH_POINTS" data-thpt-help-ref="HELP-G10-CHVII-TRY16"></span>

    Hai mốc A và B chưa đủ xác định một đường tròn, vì có nhiều vị trí tâm cùng cách đều hai mốc. Những tâm ấy nằm trên đường trung trực của đoạn AB. Nếu thêm mốc C không thẳng hàng với A,B, tâm phải đồng thời cách đều A,B và A,C; vì vậy nó là giao điểm của hai đường trung trực tương ứng.

    Hãy tưởng tượng tam giác ABC cùng hai đường trung trực của AB và AC: giao điểm I thỏa \(IA=IB=IC\), từ đó lấy \(R=IA\) để viết đường tròn. Trước khi dựng phải kiểm ba điểm không thẳng hàng. Nếu chúng thẳng hàng, không có đường tròn hữu hạn nào qua cả ba; nếu chỉ biết hai điểm, ta vẫn chưa chọn được tâm duy nhất.

    **Em vận dụng.** Đường tròn qua A(0,0), B(2,0), C(0,2) có tâm, bán kính và phương trình gì?

    ??? question "Đối chiếu"

        **Đáp án:** Tâm I(1,1), bán kính √2, phương trình (x−1)²+(y−1)²=2.

        **Lý do:** Trung trực AB là x=1; trung trực AC là y=1. IA²=1²+1²=2; thử B và C đều cho tổng bình phương bằng 2.

        **Nếu chưa đúng:** Mở hướng dẫn tự sửa ngay bên dưới, xem lại bước còn vướng rồi thử một câu cùng kiến thức.




    <a href="../luyen-tap/?item=THPT-G10-B21-P04">Mở câu luyện tập tương ứng để tự luyện</a>


    <span id="thpt-g10-chvii-try17" data-thpt-first-try-id="THPT-G10-CHVII-TRY17" data-outcome-id="G10-B21-LINE_CIRCLE_POSITION" data-thpt-help-ref="HELP-G10-CHVII-TRY17"></span>

    Để biết một đường thẳng d có cắt đường tròn tâm I bán kính R hay không, đôi khi không cần giải hệ phương trình. Hãy nhìn đoạn vuông góc ngắn nhất từ I đến d, có độ dài \(h=d(I,d)\). Nếu h lớn hơn R, toàn bộ đường nằm ngoài đường tròn; nếu h bằng R, d tiếp xúc tại một điểm; nếu h nhỏ hơn R, d cắt đường tròn tại hai điểm.

    Ba vị trí ấy có thể được hình dung bằng cách dịch chuyển một đường thẳng song song với chính nó về phía tâm. Với \(d:\ ax+by+c=0\) và \((a,b)\) khác vectơ không, ta tính \(h=\frac{|ax_I+by_I+c|}{\sqrt{a^2+b^2}}\) rồi so với \(R>0\). Phép so sánh khoảng cách giải thích trực tiếp số giao điểm, tránh các bước đại số không cần thiết.

    **Em vận dụng.** Đường tròn tâm I(1,2), R=3 và đường d: y=−1 có quan hệ nào?

    ??? question "Đối chiếu"

        **Đáp án:** Tiếp xúc; tiếp điểm T(1,−1).

        **Lý do:** Khoảng cách từ I(1,2) đến y=−1 là |2−(−1)|=3=R. Chân đường vuông góc từ I xuống d là T(1,−1).

        **Nếu chưa đúng:** Mở hướng dẫn tự sửa ngay bên dưới, xem lại bước còn vướng rồi thử một câu cùng kiến thức.




    <a href="../luyen-tap/?item=THPT-G10-B21-P03">Mở câu luyện tập tương ứng để tự luyện</a>

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

    Với đường thẳng \(d\), đặt \(h=d(I,d)\):

    - \(h<R\): hai giao điểm;
    - \(h=R\): tiếp xúc;
    - \(h>R\): không giao nhau.

=== "Ví dụ"

    Trước khi xem lời giải, hãy xác định dữ kiện, điều phải tìm và lý do chọn cách giải. Sau đó kiểm tra lại điều kiện áp dụng và kết quả, thay vì chỉ nhìn phép tính cuối cùng.

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

    ??? tip "Tự khắc phục theo năm bước"

        1. **Nhận diện lỗi:** Nếu viết vế phải 3 hoặc (x-2)², em nhầm bán kính với bình phương bán kính hoặc nhầm dấu tọa độ tâm.

        2. **Quay lại bản chất:** Phương trình đường tròn chỉ là phát biểu IM=R viết bằng tọa độ. Bình phương hai vế thu điều kiện khoảng cách, không phải công thức xuất hiện từ đâu đó.

        3. **Tự sửa:** Đặt M=I, vế trái phải bằng 0; chọn M=I+(3,0) thì vế trái bằng 9.

        4. **Tự đối chiếu:** xem lại lời giải trên sau khi em tự làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.

        5. **Luyện tiếp:** Dùng liên kết bên dưới để luyện câu cùng kiến thức. Nếu đã xem lời giải, hãy chọn thêm câu khác và tự làm mà không dựa vào gợi ý.

    <span id="help-g10-chvii-try14" data-thpt-help-id="HELP-G10-CHVII-TRY14"></span>

    ??? tip "Tự khắc phục theo năm bước"

        1. **Nhận diện lỗi:** Nếu kết luận bán kính 5 hoặc tâm (−3,2), em chưa đọc đúng dấu trong bình phương.

        2. **Quay lại bản chất:** Hoàn thành bình phương chuyển điều kiện đại số thành khoảng cách tới một tâm. Nếu kết quả R²≤0 thì không tạo được đường tròn bán kính dương.

        3. **Tự sửa:** Khai triển lại hai bình phương và kiểm phương trình thu được trùng đúng phương trình gốc.

        4. **Tự đối chiếu:** xem lại lời giải trên sau khi em tự làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.

        5. **Luyện tiếp:** Dùng liên kết bên dưới để luyện câu cùng kiến thức. Nếu đã xem lời giải, hãy chọn thêm câu khác và tự làm mà không dựa vào gợi ý.

    <span id="help-g10-chvii-try15" data-thpt-help-id="HELP-G10-CHVII-TRY15"></span>

    ??? tip "Tự khắc phục theo năm bước"

        1. **Nhận diện lỗi:** Nếu điểm chưa thuộc đường tròn hoặc dùng IM làm chỉ phương, cách dựng tiếp tuyến đã sai điều kiện.

        2. **Quay lại bản chất:** Tại M trên đường tròn, bán kính IM vuông góc tiếp tuyến; vì vậy chính IM là một pháp tuyến của tiếp tuyến. Điều kiện 'M nằm trên đường tròn' là bắt buộc.

        3. **Tự sửa:** Thử 3²+4²=5² và thế M vào 3x+4y−24=0; kiểm pháp tuyến (3,4).

        4. **Tự đối chiếu:** xem lại lời giải trên sau khi em tự làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.

        5. **Luyện tiếp:** Dùng liên kết bên dưới để luyện câu cùng kiến thức. Nếu đã xem lời giải, hãy chọn thêm câu khác và tự làm mà không dựa vào gợi ý.

    <span id="help-g10-chvii-try16" data-thpt-help-id="HELP-G10-CHVII-TRY16"></span>

    ??? tip "Tự khắc phục theo năm bước"

        1. **Nhận diện lỗi:** Nếu lấy trung điểm AB làm tâm, em mới dùng hai điểm và chưa bảo đảm cách đều C.

        2. **Quay lại bản chất:** Tâm đường tròn cách đều các điểm đã cho. Giao hai đường trung trực cho tâm nếu ba điểm không thẳng hàng; khi ba điểm thẳng hàng thì không có đường tròn đi qua cả ba.

        3. **Tự sửa:** Tìm cả hai trung trực rồi thử độ dài IA, IB, IC bằng nhau.

        4. **Tự đối chiếu:** xem lại lời giải trên sau khi em tự làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.

        5. **Luyện tiếp:** Dùng liên kết bên dưới để luyện câu cùng kiến thức. Nếu đã xem lời giải, hãy chọn thêm câu khác và tự làm mà không dựa vào gợi ý.

    <span id="help-g10-chvii-try17" data-thpt-help-id="HELP-G10-CHVII-TRY17"></span>

    ??? tip "Tự khắc phục theo năm bước"

        1. **Nhận diện lỗi:** Nếu h=R mà nói 'cắt hai điểm', em nhầm trường hợp tiếp xúc với cát tuyến.

        2. **Quay lại bản chất:** Nếu h=d(I,d)>R thì lối đi ở ngoài vùng; h=R thì chạm một điểm; h<R thì cắt đường tròn tại hai điểm. Không cần giải hệ khi chỉ hỏi số giao điểm.

        3. **Tự sửa:** Vẽ đoạn IT vuông góc d dài 3; các điểm khác T trên d sẽ cách I xa hơn 3.

        4. **Tự đối chiếu:** xem lại lời giải trên sau khi em tự làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.

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
