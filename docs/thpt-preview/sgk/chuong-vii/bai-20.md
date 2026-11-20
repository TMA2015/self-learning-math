# Bài 20. Vị trí tương đối, góc và khoảng cách

<style>
/* B20-only Golden semantic colors, shared CSS/runtime and other lesson snapshots untouched. */
.md-typeset:has([data-thpt-first-try-id^="THPT-G10-CHVII-TRY08"]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#e8f7f2;border-color:#a9dccc;border-left-color:#087d69;color:#174137}
.md-typeset:has([data-thpt-first-try-id^="THPT-G10-CHVII-TRY08"]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#eaf1fc;border-color:#a5bee5;border-left-color:#4879c2;color:#193d66}
[data-md-color-scheme="slate"] .md-typeset:has([data-thpt-first-try-id^="THPT-G10-CHVII-TRY08"]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-thpt-first-try-id^="THPT-G10-CHVII-TRY08"]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}
</style>

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VII · KIẾN THỨC SGK KNTT</p>
<p class="thpt-r4-lead">Xác định vị trí tương đối, góc và khoảng cách trong mặt phẳng tọa độ.</p>

</div>

=== "Khám phá kiến thức"

    ### Cùng tìm hiểu

    Trong Bài 19, em đã dùng phương trình để xác định một đường thẳng. Nhưng trên bản đồ, chúng ta còn muốn biết **hai con đường có gặp nhau không**, chúng tạo với nhau một góc bao nhiêu và **từ một vị trí đến con đường gần nhất là bao xa**. Chỉ nhìn hình phác thảo sẽ khó có kết quả chính xác; tọa độ giúp trả lời cả ba câu hỏi.

    Ba ý tưởng sẽ đi cùng em trong bài này: **giao điểm** phải thuộc cả hai đường; **góc** phụ thuộc hướng của hai đường, không phụ thuộc chiều mũi tên; còn **khoảng cách** từ điểm đến đường là độ dài đoạn vuông góc, chứ không phải một đoạn nối tùy ý. Ta sẽ giải thích vì sao trước khi dùng công thức.

    Nếu quên kiến thức Bài 19, em chỉ cần nhắc lại cách tìm pháp tuyến từ phương trình tổng quát \(ax+by+c=0\), cách tính tích vô hướng và cách giải hệ hai phương trình bậc nhất. Với các công thức có căn, mẫu số là độ dài pháp tuyến nên không được bằng 0.

    ### Ví dụ trực quan

    #### 1.2.1. Hai đường cùng hướng có thể trùng nhau hoặc cách nhau

    Hai con đường chạy cùng hướng chưa chắc nằm đè lên nhau. Trong mặt phẳng tọa độ, mỗi đường được mô tả bằng một phương trình: để tìm điểm chung, ta phải tìm cặp tọa độ thỏa **đồng thời cả hai phương trình**.

    Nếu hai pháp tuyến không cùng phương, hai đường có hướng khác nhau và cắt nhau tại đúng một điểm. Nếu các pháp tuyến cùng phương, hai đường không thể cắt nhau ở đúng một điểm: lúc đó còn phải hỏi **hai phương trình có thực sự cùng mô tả một tập hợp điểm không?** Để trả lời, so sánh cả hệ số tự do, không chỉ hai hệ số của \(x,y\).

    Cách chắc chắn là xét hệ phương trình: hệ có một nghiệm thì hai đường cắt nhau; vô nghiệm thì song song phân biệt; vô số nghiệm thì trùng nhau. Không chia tỉ số hệ số khi có nguy cơ chia cho 0.

    <span id="thpt-g10-chvii-try08" data-thpt-first-try-id="THPT-G10-CHVII-TRY08" data-outcome-id="G10-B20-RELATIVE_POSITION" data-thpt-help-ref="HELP-G10-CHVII-TRY08"></span>

    **Vận dụng.** Cho \(d_1:2x-y+1=0\), \(d_2:4x-2y+3=0\). Hai đường này song song phân biệt hay trùng nhau? Hãy kiểm cả ba hệ số, không kết luận chỉ từ pháp tuyến.

    ??? question "Đối chiếu"

        **Đáp án:** Song song phân biệt.

        **Lý do:** Hai pháp tuyến (2,-1) và (4,-2) tỉ lệ 2 lần, nhưng nhân toàn phương trình d1 với 2 cho hằng số 2, không phải 3 của d2.

        **Nếu chưa đúng:** Mở hướng dẫn tự sửa ngay bên dưới, xem lại bước còn vướng rồi thử một câu cùng kiến thức.

    #### 1.2.2. Dựng một đường vuông góc đi qua điểm đã cho

    Nếu cần làm con đường mới vuông góc với đường cũ, ta biết **hướng** của đường mới, nhưng chưa biết nó đi qua đâu. Điều kiện đi qua điểm P chính là mảnh thông tin thứ hai để xác định đường mới.

    Với phương trình tổng quát, pháp tuyến của đường cũ vuông góc với **pháp tuyến của đường mới** khi hai đường vuông góc. Vì thế ta chọn một pháp tuyến mới có tích vô hướng bằng 0 với pháp tuyến cũ, rồi dùng tọa độ P lập phương trình qua điểm. Sau khi biến đổi, luôn thế lại P để kiểm.

    <span id="thpt-g10-chvii-try09" data-thpt-first-try-id="THPT-G10-CHVII-TRY09" data-outcome-id="G10-B20-PERPENDICULAR" data-thpt-help-ref="HELP-G10-CHVII-TRY09"></span>

    **Vận dụng.** Viết phương trình đường thẳng đi qua \(P(1;-2)\) và vuông góc với \(d:x+2y-5=0\). Em hãy xác định pháp tuyến mới trước rồi mới lập phương trình qua P.

    ??? question "Đối chiếu"

        **Đáp án:** 2x-y-4=0.

        **Lý do:** n=(1,2) của d, chọn n'=(2,-1) có tích vô hướng 0. Qua P: 2(x-1)-(y+2)=0 ⇒ 2x-y-4=0.

        **Nếu chưa đúng:** Mở hướng dẫn tự sửa ngay bên dưới, xem lại bước còn vướng rồi thử một câu cùng kiến thức.

    #### 1.2.3. Giao điểm là nghiệm chung của hai phương trình

    Hai đường cắt nhau tại I có nghĩa là **tọa độ I thỏa cả hai phương trình**. Vì vậy, tìm giao điểm thực chất là giải một hệ hai phương trình bậc nhất theo \(x,y\), rồi kiểm kết quả ở cả hai phương trình.

    Nếu chỉ giải một phương trình, ta mới biết điểm nằm trên một đường, chưa thể khẳng định nó ở giao điểm. Nếu hệ vô nghiệm, hai đường song song phân biệt; nếu vô số nghiệm, hai đường trùng nhau và không có giao điểm duy nhất.

    <span id="thpt-g10-chvii-try10" data-thpt-first-try-id="THPT-G10-CHVII-TRY10" data-outcome-id="G10-B20-INTERSECTION" data-thpt-help-ref="HELP-G10-CHVII-TRY10"></span>

    **Vận dụng.** Tìm giao điểm của hai đường \(x+2y=8\) và \(2x-y=1\). Sau khi giải hệ, thế cặp tọa độ vào cả hai phương trình để tự kiểm.

    ??? question "Đối chiếu"

        **Đáp án:** I(2,3).

        **Lý do:** Từ 2x-y=1 ⇒ y=2x-1. Thế vào x+2(2x-1)=8 ⇒ x=2, y=3; kiểm 2+6=8, 4-3=1.

        **Nếu chưa đúng:** Mở hướng dẫn tự sửa ngay bên dưới, xem lại bước còn vướng rồi thử một câu cùng kiến thức.

    #### 1.2.4. Khoảng cách ngắn nhất phải theo đường vuông góc

    Giả sử em đứng ở điểm M và muốn đi đến một con đường thẳng d. Có thể nối M tới vô số điểm trên d, nhưng đoạn **ngắn nhất** chính là đoạn vuông góc từ M tới d. Đó là khoảng cách từ điểm đến đường thẳng.

    <figure class="thpt-r4-plot thpt-r4-concept-figure"><img src="../../../../assets/images/thpt/G10_B20_POINT_LINE_DISTANCE_R02.svg" loading="lazy" alt="Khoảng cách từ M(0,0) đến 2x+y=6 theo đường vuông góc là 6 chia căn 5"><figcaption>Với đường \(2x+y-6=0\) và \(M(0,0)\), khoảng cách \(d(M,\Delta)=\dfrac{|{-6}|}{\sqrt{2^2+1^2}}=\dfrac6{\sqrt5}\). Đo theo đoạn vuông góc, không theo đường xiên bất kỳ.</figcaption></figure>

    **Cách đọc hình:** Điểm \(M(0;0)\) ở ngoài đường \(2x+y-6=0\). Hãy tìm đoạn \(MH\) có dấu góc vuông tại H và so sánh với một đoạn xiên nối M tới điểm khác của đường. Phần nằm dưới dấu trị tuyệt đối trong công thức đo độ lệch có dấu; chia cho độ dài pháp tuyến để được độ dài thực và không âm.

    Một cách tự kiểm trước khi tính là hỏi: nếu M nằm ngay trên d, khoảng cách phải bằng bao nhiêu? Đáp án là 0. Còn nếu đổi tất cả hệ số phương trình bằng cùng một bội khác 0, đường không đổi nên khoảng cách cũng không được đổi.

    <span id="thpt-g10-chvii-try11" data-thpt-first-try-id="THPT-G10-CHVII-TRY11" data-outcome-id="G10-B20-DISTANCE" data-thpt-help-ref="HELP-G10-CHVII-TRY11"></span>

    **Vận dụng.** Tính khoảng cách từ \(M(1;2)\) đến \(d:3x+4y-1=0\). Hãy xác định tử số có trị tuyệt đối và mẫu số là độ dài pháp tuyến rồi mới tính.

    ??? question "Đối chiếu"

        **Đáp án:** d(M,d)=2.

        **Lý do:** Tử |3·1+4·2−1|=10, mẫu √(3²+4²)=5, nên khoảng cách bằng 10/5=2.

        **Nếu chưa đúng:** Mở hướng dẫn tự sửa ngay bên dưới, xem lại bước còn vướng rồi thử một câu cùng kiến thức.

    #### 1.2.5. Góc giữa hai đường không phụ thuộc chiều mũi tên

    Trên hai đường thẳng cắt nhau, có thể vẽ các mũi tên theo hai chiều ngược nhau. Đổi chiều mũi tên sẽ thay góc giữa hai vectơ thành góc bù, nhưng **hai đường thẳng vẫn giữ nguyên**. Vì vậy, khi nói góc nhỏ giữa hai đường, ta chọn giá trị từ \(0^\circ\) đến \(90^\circ\), không lấy góc tù chỉ vì đã đổi chiều một mũi tên.

    Ta có thể dùng pháp tuyến của hai đường: tính tích vô hướng, lấy **giá trị tuyệt đối** để kết quả không phụ thuộc chiều vectơ, rồi chia cho tích độ dài hai pháp tuyến. Nếu hai pháp tuyến vuông góc, hai đường cũng vuông góc; nếu cùng phương, góc nhỏ bằng 0.

    <span id="thpt-g10-chvii-try12" data-thpt-first-try-id="THPT-G10-CHVII-TRY12" data-outcome-id="G10-B20-ANGLE" data-thpt-help-ref="HELP-G10-CHVII-TRY12"></span>

    **Vận dụng.** Tính góc nhỏ giữa \(d_1:x=0\) và \(d_2:x-y=0\). Hãy tìm hai pháp tuyến khác 0 rồi dùng công thức cosin.

    ??? question "Đối chiếu"

        **Đáp án:** 45°.

        **Lý do:** Pháp tuyến n1=(1,0), n2=(1,-1). cosφ=|1|/(1·√2)=1/√2 nên φ=45°.

        **Nếu chưa đúng:** Mở hướng dẫn tự sửa ngay bên dưới, xem lại bước còn vướng rồi thử một câu cùng kiến thức.

    ### Thuật ngữ, kiến thức và kỹ năng

    **Thuật ngữ:** Hai đường cắt nhau, song song phân biệt, trùng nhau; giao điểm, pháp tuyến, góc giữa hai đường và khoảng cách từ điểm đến đường thẳng.

    **Sau bài học, em cần:** Dùng phương trình để nhận biết vị trí tương đối; dựng đường vuông góc qua điểm; giải hệ tìm giao; xác định góc nhỏ không phụ thuộc chiều vectơ; tính độ dài đoạn vuông góc từ điểm đến đường, giải thích được điều kiện áp dụng.

=== "Kiến thức SGK"

    ### 2.1. Vị trí tương đối giữa hai đường thẳng

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khái niệm — Vị trí tương đối:</strong> Hai đường thẳng cắt nhau khi có đúng <strong>một</strong> điểm chung, song song phân biệt khi không có điểm chung, và trùng nhau khi có <strong>vô số</strong> điểm chung. Ta nhận biết ba tình huống ấy bằng nghiệm chung của hai phương trình.</div>

    Với \(d_1:a_1x+b_1y+c_1=0\) và \(d_2:a_2x+b_2y+c_2=0\), mỗi cặp \((a_i;b_i)\ne(0;0)\):

    - Nếu \(a_1b_2-a_2b_1\ne0\): hai đường **cắt nhau tại một điểm**.
    - Nếu \(a_1b_2-a_2b_1=0\): cần so sánh **cả ba hệ số** để phân biệt hai đường trùng nhau hay song song phân biệt.

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Quy tắc — Xét hai đường:</strong> Pháp tuyến không cùng phương thì hai đường cắt nhau. Nếu pháp tuyến cùng phương, phải so sánh thêm hệ số tự do: toàn bộ ba hệ số tỉ lệ cùng một số khác 0 thì trùng; nếu không, chúng song song phân biệt. Không chia cho một hệ số có thể bằng 0.</div>

    Hai đường **vuông góc** nếu \(a_1a_2+b_1b_2=0\). Điều này kiểm bằng tích vô hướng của hai pháp tuyến <strong>khác vectơ không</strong>, không suy ra chỉ vì hai đường cắt nhau.

    ### 2.2. Góc giữa hai đường thẳng

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khái niệm — Góc giữa hai đường:</strong> Góc giữa hai đường thẳng là <strong>góc nhỏ</strong> mà chúng tạo thành, từ 0° tới 90°. Hai đường song song hoặc trùng nhau có góc 0°; hai đường vuông góc có góc 90°. Đổi chiều mũi tên chỉ hướng không làm đổi góc giữa hai đường.</div>

    Góc nhỏ \(\varphi\) giữa hai đường thẳng thỏa \(0^\circ\le\varphi\le90^\circ\):

    \[
    \cos\varphi=\frac{|a_1a_2+b_1b_2|}
    {\sqrt{a_1^2+b_1^2}\sqrt{a_2^2+b_2^2}}.
    \]

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Quy tắc — Tính góc nhỏ:</strong> Chọn hai pháp tuyến khác 0; lấy <strong>trị tuyệt đối của tích vô hướng</strong>, chia cho tích hai độ dài pháp tuyến rồi suy ra góc. Thương cosin phải nằm từ 0 đến 1. Không giữ góc tù giữa hai mũi tên làm góc giữa hai đường.</div>

    ### 2.3. Khoảng cách từ một điểm đến một đường thẳng

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khái niệm — Khoảng cách từ điểm đến đường:</strong> Đây là độ dài <strong>đoạn vuông góc</strong> kẻ từ điểm đến đường, luôn không âm. Nếu điểm thuộc đường, khoảng cách bằng 0; một đoạn xiên bất kỳ không phải khoảng cách ngắn nhất.</div>





    **Cách đọc hình.** Xuất phát từ \(M(0;0)\), hãy theo đoạn \(MH\) vuông góc với đường thẳng \(2x+y=6\). Chân đường vuông góc là \(H\left(\frac{12}{5};\frac65\right)\), vì thế khoảng cách ngắn nhất là \(MH=\frac6{\sqrt5}\). Không đo theo đoạn xiên tùy ý.


    Khoảng cách từ điểm \(M(x_M;y_M)\) đến \(d:ax+by+c=0\):

    \[
    d(M,d)=\frac{|ax_M+by_M+c|}{\sqrt{a^2+b^2}}.
    \]

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Quy tắc — Khoảng cách:</strong> Với pháp tuyến (a;b) khác 0, thế tọa độ điểm vào vế trái phương trình tổng quát, lấy <strong>trị tuyệt đối</strong> rồi chia cho độ dài dương của pháp tuyến. Kết quả là độ dài thật, không phụ thuộc cách nhân bội phương trình đường thẳng.</div>

    Dấu giá trị tuyệt đối giúp khoảng cách không âm và góc nhỏ không phụ thuộc chiều chọn vectơ pháp tuyến.

=== "Ví dụ"

    Trước khi xem lời giải, hãy xác định dữ kiện, điều phải tìm và lý do chọn cách giải. Sau đó kiểm tra lại điều kiện áp dụng và kết quả, thay vì chỉ nhìn phép tính cuối cùng.

    ### Ví dụ — Khoảng cách không phải độ dài một đoạn nối tùy ý

    **Đề bài.** Tìm khoảng cách từ \(M(0,0)\) đến \(\Delta:2x+y-6=0\).

    **Vì sao chọn cách này?** Đường đã ở dạng tổng quát, nên có thể dùng trực tiếp công thức khoảng cách thay vì tự đo trên hình.

    **Lời giải.** \(d=\frac{|2\cdot0+0-6|}{\sqrt{2^2+1^2}}=\frac6{\sqrt5}\). Mẫu \(\sqrt5>0\) là độ dài pháp tuyến. Hình bên cạnh minh họa đoạn vuông góc từ M đến đường. 

    **Kiểm lại:** khoảng cách không âm và có đơn vị độ dài.

    ### Ví dụ 2 — Giao điểm, vuông góc và khoảng cách của hai đường thẳng

    **Đề bài.** Xét \(d_1:x-y-1=0\) và \(d_2:x+y-5=0\). Hãy xác định vị trí tương đối, giao điểm, quan hệ vuông góc và khoảng cách từ \(O(0;0)\) tới \(d_1\).

    **Vì sao chọn cách này?** Dùng định thức của hai vectơ pháp tuyến để nhận biết hai đường cắt nhau, giải hệ tìm giao điểm và dùng tích vô hướng kiểm tra vuông góc.

    **Lời giải.**

    1. Định thức hệ số bằng \(1\cdot1-1\cdot(-1)=2\ne0\), vậy hai đường cắt nhau.
    2. Giải hệ \(x-y=1,\ x+y=5\) được \(I(3;2)\).
    3. Pháp tuyến \((1;-1)\) và \((1;1)\) có tích vô hướng \(0\), vậy hai đường vuông góc.
    4. Khoảng cách từ \(O(0;0)\) đến \(d_1\) bằng \(1/\sqrt2\).

    !!! tip "Lỗi dễ mắc"
        Hai **pháp tuyến tỉ lệ** chỉ cho biết hai đường song song **hoặc trùng nhau**; không tự kết luận trùng. Khi dùng phương trình chứa tham số, kiểm tra các hệ số có thể đồng thời bằng 0.

=== "Lỗi thường gặp"

    <span id="help-g10-chvii-try08" data-thpt-help-id="HELP-G10-CHVII-TRY08"></span>

    ??? tip "Tự khắc phục theo năm bước"

        1. **Nhận diện lỗi:** Nếu kết luận trùng ngay khi pháp tuyến tỉ lệ, em đã bỏ quên hệ số tự do.

        2. **Quay lại bản chất:** Định thức a1b2-a2b1 khác 0 thì hai đường cắt nhau. Bằng 0 chỉ nói cùng hướng: xét thêm c để phân biệt song song khác nhau và trùng nhau.

        3. **Tự sửa:** Nhân hẳn d1 với hệ số 2 rồi đối chiếu cả ba hệ số của d2.

        4. **Tự đối chiếu:** xem lại lời giải trên sau khi em tự làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.

        5. **Luyện tiếp:** Dùng liên kết bên dưới để luyện câu cùng kiến thức. Nếu đã xem lời giải, hãy chọn thêm câu khác và tự làm mà không dựa vào gợi ý.

    <span id="help-g10-chvii-try09" data-thpt-help-id="HELP-G10-CHVII-TRY09"></span>

    ??? tip "Tự khắc phục theo năm bước"

        1. **Nhận diện lỗi:** Nếu chỉ lấy lại n=(1,2), em sẽ viết đường song song với d chứ không vuông góc.

        2. **Quay lại bản chất:** Nếu hai đường vuông góc thì hai pháp tuyến của chúng cũng vuông góc (đều bị quay cùng 90 độ so với đường). Điểm quyết định tịnh tiến đường mới.

        3. **Tự sửa:** Thử n·n'=0 và thay P vào phương trình vừa viết.

        4. **Tự đối chiếu:** xem lại lời giải trên sau khi em tự làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.

        5. **Luyện tiếp:** Dùng liên kết bên dưới để luyện câu cùng kiến thức. Nếu đã xem lời giải, hãy chọn thêm câu khác và tự làm mà không dựa vào gợi ý.

    <span id="help-g10-chvii-try10" data-thpt-help-id="HELP-G10-CHVII-TRY10"></span>

    ??? tip "Tự khắc phục theo năm bước"

        1. **Nhận diện lỗi:** Nếu ra một điểm chỉ thỏa một đường, em đã dừng trước bước thử.

        2. **Quay lại bản chất:** Một giao điểm là nghiệm chung của hai phương trình; giải từng phương trình riêng không đủ.

        3. **Tự sửa:** Ghi thành hai dòng kiểm thế tọa độ vào từng phương trình.

        4. **Tự đối chiếu:** xem lại lời giải trên sau khi em tự làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.

        5. **Luyện tiếp:** Dùng liên kết bên dưới để luyện câu cùng kiến thức. Nếu đã xem lời giải, hãy chọn thêm câu khác và tự làm mà không dựa vào gợi ý.

    <span id="help-g10-chvii-try11" data-thpt-help-id="HELP-G10-CHVII-TRY11"></span>

    ??? tip "Tự khắc phục theo năm bước"

        1. **Nhận diện lỗi:** Nếu cho kết quả 10 hoặc -2, em đã quên chuẩn hóa pháp tuyến hoặc trị tuyệt đối.

        2. **Quay lại bản chất:** Biểu thức axM+byM+c đo độ lệch có dấu theo pháp tuyến chưa chuẩn hóa; chia √(a²+b²) đổi thành độ dài thật và lấy trị tuyệt đối.

        3. **Tự sửa:** Tách tính tử và mẫu, kiểm mẫu khác 0, kết luận độ dài không âm.

        4. **Tự đối chiếu:** xem lại lời giải trên sau khi em tự làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.

        5. **Luyện tiếp:** Dùng liên kết bên dưới để luyện câu cùng kiến thức. Nếu đã xem lời giải, hãy chọn thêm câu khác và tự làm mà không dựa vào gợi ý.

    <span id="help-g10-chvii-try12" data-thpt-help-id="HELP-G10-CHVII-TRY12"></span>

    ??? tip "Tự khắc phục theo năm bước"

        1. **Nhận diện lỗi:** Nếu kết luận 135°, em đã lấy góc tù theo hướng pháp tuyến thay vì góc nhỏ giữa hai đường.

        2. **Quay lại bản chất:** Góc nhỏ giữa hai đường nằm từ 0 đến 90 độ; đổi hướng một pháp tuyến không làm đổi góc nhỏ nên lấy trị tuyệt đối tích vô hướng.

        3. **Tự sửa:** Lấy trị tuyệt đối tích vô hướng, kiểm φ không vượt 90°.

        4. **Tự đối chiếu:** xem lại lời giải trên sau khi em tự làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.

        5. **Luyện tiếp:** Dùng liên kết bên dưới để luyện câu cùng kiến thức. Nếu đã xem lời giải, hãy chọn thêm câu khác và tự làm mà không dựa vào gợi ý.

    <span data-thpt-help-id="D6-G10-B20-01" hidden></span>

    ??? tip "Nhầm song song với trùng nhau"

        <p><strong>Dấu hiệu:</strong> Thấy a1b2−a2b1=0 thì kết luận hai đường trùng.</p>
        <p><strong>Bản chất toán:</strong> Điều kiện này chỉ nói hai pháp tuyến cùng phương. Hai phương trình trùng nhau nếu toàn bộ bộ ba (a,b,c) tỉ lệ theo cùng một λ≠0; nếu không chúng song song phân biệt.</p>
        <p><strong>Tự sửa:</strong> Ôn B19 mục 2 và B20 mục 1: kiểm định thức, rồi so sánh cả hằng số; tránh chia cho một hệ số bằng 0.</p>
        <p><strong>Kiến thức cần ôn:</strong> Phương trình tổng quát B19; tỉ lệ các hệ số; B20 mục 1.</p>
        <p><strong>Luyện lại bài đã có:</strong> <a data-thpt-formative-id="THPT-G10-B20-C01" href="../luyen-tap/?item=THPT-G10-B20-C01">Luyện lại câu 20-C01</a> · <a data-thpt-formative-id="THPT-G10-B20-P05" href="../luyen-tap/?item=THPT-G10-B20-P05">Luyện lại câu 20-P05</a></p>


    <span data-thpt-help-id="D6-G10-B20-02" hidden></span>

    ??? tip "Góc hoặc khoảng cách ra giá trị âm"

        <p><strong>Dấu hiệu:</strong> Bỏ giá trị tuyệt đối hoặc thiếu độ dài vectơ pháp tuyến ở mẫu.</p>
        <p><strong>Bản chất toán:</strong> Khoảng cách là |axM+byM+c|/√(a²+b²)≥0. Với góc nhỏ 0°≤φ≤90°, cosφ=|n1·n2|/(||n1||||n2||)∈[0,1].</p>
        <p><strong>Tự sửa:</strong> Ôn B20 mục 2 (góc) và mục 3 (khoảng cách): xác nhận pháp tuyến khác vectơ không, đặt trị tuyệt đối ở tử và chia đúng độ dài pháp tuyến; kiểm \(\cos\varphi\in[0;1]\) cho góc nhỏ, \(d\ge0\) cho khoảng cách.</p>
        <p><strong>Kiến thức cần ôn:</strong> Chuẩn vectơ, tích vô hướng; B20 mục 2.</p>
        <p><strong>Luyện lại bài đã có:</strong> <a data-thpt-formative-id="THPT-G10-B20-P02" href="../luyen-tap/?item=THPT-G10-B20-P02">Luyện lại câu 20-P02</a> · <a data-thpt-formative-id="THPT-G10-B20-P03" href="../luyen-tap/?item=THPT-G10-B20-P03">Luyện lại câu 20-P03</a> · <a data-thpt-formative-id="THPT-G10-B20-P06" href="../luyen-tap/?item=THPT-G10-B20-P06">Luyện lại câu 20-P06</a> · <a data-thpt-formative-id="THPT-G10-CHVII-W20-01" href="../../../thu-vien/tu-luan-chuong-vii/#thpt-g10-chvii-w20-01">Bài tự luận liên quan</a></p>


    **Học tiếp:** [Core và Luyện tập](luyen-tap.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">Nguồn toán học: SGK Toán 10 Kết nối tri thức với cuộc sống và học liệu SLM hiện hành. Lời giảng được biên tập nhằm hỗ trợ tự học độc lập.</p>

<small>Nguồn đối chiếu: SGK Toán 10 KNTT tập 2, trang in 36–42; SBT trang 32–38. </small>
