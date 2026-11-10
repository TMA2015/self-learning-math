# Bài 18. Phương trình quy về phương trình bậc hai

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VI · BÀI 18</p>
<p class="thpt-r4-lead">Học cách giải phương trình chứa căn, xét điều kiện xác định và loại nghiệm không thỏa phương trình ban đầu.</p>
</div>

=== "Khám phá kiến thức"

    ### Cùng tìm hiểu

    Một phép biến đổi có thể giúp phương trình dễ giải hơn nhưng lại làm xuất hiện **nghiệm không thỏa phương trình ban đầu**. Điều này đặc biệt hay xảy ra khi **bình phương hai vế** của phương trình có căn thức.

    Chẳng hạn, từ \(\sqrt{x+1}=x-1\), nếu chỉ bình phương rồi giải phương trình bậc hai, em có thể tìm được một giá trị khiến vế phải âm. Nhưng căn bậc hai theo quy ước luôn **không âm**, nên giá trị ấy không thể là nghiệm. Vì vậy, **điều kiện xác định và dấu của vế không chứa căn** cần được viết trước phép bình phương.

    Trong bài này, em sẽ thấy quy trình ba bước: xác định điều kiện → biến đổi theo đúng giới hạn áp dụng → **thử lại từng nghiệm** vào phương trình ban đầu. Thử lại không phải công đoạn phụ, mà là cách bảo vệ tính đúng đắn của lời giải.

    ### Thuật ngữ, kiến thức và kỹ năng

    **Thuật ngữ:** Phương trình chứa căn, miền xác định, bình phương hai vế, biến đổi tương đương, nghiệm ngoại lai, thử lại nghiệm.

    **Sau bài học, em cần làm được:** Ghi điều kiện trước khi bình phương; giải phương trình bậc hai thu được; kiểm từng nghiệm trong phương trình gốc và loại nghiệm ngoại lai có lý do.

=== "Kiến thức SGK"

    ### Vì sao phải kiểm tra nghiệm?

    Bình phương hai vế phương trình là phép biến đổi **không luôn tương đương** nếu không kiểm soát dấu. Ví dụ từ \(x=1\) suy ra \(x^2=1\), nhưng chiều ngược lại không đúng vì \(x=-1\) cũng thỏa \(x^2=1\).

    Để giải phương trình chứa căn, phải đặt điều kiện, biến đổi và **thử lại nghiệm trong phương trình ban đầu**.


    ### Hai căn bằng nhau phải có nghĩa trước khi bình phương


    Phép bình phương giúp bỏ căn nhưng căn bậc hai trong số thực chỉ xác định khi biểu thức dưới căn không âm; không thể coi nghiệm đại số là nghiệm thật nếu căn vô nghĩa.

    Để giải phương trình chứa căn, hãy nhớ rằng \(\sqrt u\) chỉ xác định khi u≥0 và luôn không âm; em sẽ cần cả kiến thức giải phương trình bậc nhất. Em có thể học các kiến thức tiền đề ngay trong bài.

    Với \(\sqrt{A(x)}=\sqrt{B(x)}\), đầu tiên yêu cầu \(A(x)\ge0\) và \(B(x)\ge0\). Sau đó hai căn không âm bằng nhau **khi và chỉ khi** \(A(x)=B(x)\) trong miền; đây là phép đổi tương đương *sau khi* đặt điều kiện.


    **Vì sao chọn phương pháp này?** Đặt điều kiện cho **cả hai** căn rồi mới giải phương trình; không được giữ nghiệm ngoài miền.

    **Em vận dụng.** Giải \(\sqrt{x+1}=\sqrt{2x-2}\) trong \(\mathbb R\).

    <span data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHVI-TRY16" data-outcome-id="B18_OUT_01" hidden></span>

    ??? question "Em đã tự thử? Mở đáp án để đối chiếu"

        <div class="thpt-r4-first-try-answer"><p><strong>Đáp án:</strong> Điều kiện <span class="arithmatex">\(x+1\ge0,\,2x-2\ge0\Rightarrow x\ge1\)</span>. Bình phương: <span class="arithmatex">\(x+1=2x-2\Rightarrow x=3\)</span>. Thử: hai vế đều bằng 2. Nghiệm duy nhất x=3.</p><p><strong>Vì sao:</strong> x=3 hợp miền x≥1, biểu thức dưới căn đều bằng 4; không có nghiệm nào khác vì phương trình tuyến tính A=B chỉ cho x=3.</p><p>Đây là câu tự luyện công khai, không chấm điểm thành thạo. Nếu chưa đúng, mở hướng dẫn tự sửa phía dưới.</p></div>



    ### Phương trình dạng \(\sqrt{A(x)}=\sqrt{B(x)}\)

    Phương trình tương đương với hệ điều kiện

    \[
    A(x)=B(x),\qquad A(x)\ge0,\quad B(x)\ge0.
    \]

    **Quy trình:** giải \(A(x)=B(x)\), giữ lại các nghiệm làm hai biểu thức dưới căn không âm, rồi kiểm tra trong phương trình ban đầu.

    **Ví dụ 1.**

    \[
    \sqrt{x^2-3x+4}=\sqrt{x+2}.
    \]

    Bình phương được \(x^2-3x+4=x+2\), suy ra \(x^2-4x+2=0\). Hai nghiệm ứng viên \(x=2\pm\sqrt2\). Vì cả hai đều lớn hơn \(-2\), biểu thức \(x+2\ge0\); thay trở lại cho thấy hai vế căn bằng nhau. Vậy \(\boxed{x=2-\sqrt2\text{ hoặc }x=2+\sqrt2}\).


    ### Một căn bằng biểu thức thường: vế phải phải không âm

    **Cách đọc hình.** Đọc sơ đồ theo thứ tự điều kiện của căn/vế phải, phép bình phương, giải phương trình, rồi thử lại. Mũi tên quay về kiểm tra cho thấy nghiệm phương trình sau bình phương chưa chắc là nghiệm ban đầu.

    <figure class="thpt-r4-plot thpt-r4-probability-figure"><img src="../../../../assets/images/thpt/THPT_G10_CHVI_B18_RADICAL_FLOW_D5_R03.svg" loading="lazy" alt="Sơ đồ điều kiện cho hai dạng phương trình căn và bước kiểm tra nghiệm gốc"><figcaption>Đọc từ điều kiện đến nghiệm ứng viên, rồi luôn kiểm lại trong phương trình gốc.</figcaption></figure>


    Một căn thức thực không bao giờ âm. Do đó nếu nó bằng một biểu thức \(B(x)\), bản thân \(B(x)\) phải không âm, điều thường bị mất khi bình phương.

    Biết \(\sqrt u\ge0\), giải phương trình bậc hai nhân tử và thử nghiệm. Em có thể học các kiến thức tiền đề ngay trong bài.

    Với \(\sqrt{A(x)}=B(x)\), phải có \(B(x)\ge0\) (và \(A(x)\ge0\)); sau đó bình phương \(A(x)=B(x)^2\), giải và kiểm. Bình phương tự nó không bảo đảm mọi nghiệm ứng viên có dấu đúng.


    <span data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-B18-C01" data-outcome-id="B18_OUT_02" hidden></span>

    ??? question "Em đã tự thử? Mở đáp án để đối chiếu"

        <div class="thpt-r4-first-try-answer"><p><strong>Đáp án:</strong> Phải có <span class="arithmatex">\(x-1\ge0\Rightarrow x\ge1\)</span>. Bình phương: <span class="arithmatex">\(x+5=(x-1)^2\Leftrightarrow x^2-3x-4=0\Rightarrow x=4\)</span> hoặc <span class="arithmatex">\(x=-1\)</span>. Chỉ x=4 hợp lệ, thử <span class="arithmatex">\(\sqrt9=3=4-1\)</span>.</p><p><strong>Vì sao:</strong> x=-1 bị loại vì vế phải −2 âm. Nghiệm duy nhất x=4 dù phương trình bình phương có hai nghiệm.</p><p>Đây là câu tự luyện công khai, không chấm điểm thành thạo. Nếu chưa đúng, mở hướng dẫn tự sửa phía dưới.</p></div>



    ### Phương trình dạng \(\sqrt{A(x)}=B(x)\)

    Vì vế trái không âm, phương trình tương đương với

    \[
    \begin{cases}
    A(x)=B(x)^2,\\
    B(x)\ge0.
    \end{cases}
    \]

    Khi hai điều kiện này thỏa, \(A(x)=B(x)^2\ge0\) cũng bảo đảm căn có nghĩa.

    **Quy trình 4 bước:** (1) đặt điều kiện \(B(x)\ge0\) và miền xác định nếu cần; (2) bình phương đưa về phương trình bậc hai (hoặc bậc nhất); (3) giải tìm nghiệm ứng viên; (4) **loại nghiệm không thỏa điều kiện và thử lại**.

    **Ví dụ 2.**

    \[
    \sqrt{2x+3}=x-1.
    \]

    Điều kiện \(x\ge1\). Bình phương: \(2x+3=(x-1)^2\), hay \(x^2-4x-2=0\). Nghiệm ứng viên \(x=2\pm\sqrt6\). Vì \(2-\sqrt6<1\), loại nghiệm này; \(2+\sqrt6\ge1\) thỏa phương trình gốc. Vậy \(\boxed{x=2+\sqrt6}\).


    ### Nghiệm ngoại lai xuất hiện từ phép không tương đương

    Biến đổi đại số đôi khi cho một nghiệm thỏa phương trình mới nhưng không thỏa phương trình ban đầu. Vì thế, em cần thử lại từng nghiệm trong phương trình gốc, thay vì tin ngay vào kết quả sau bình phương.

    Đặc biệt, \(\sqrt{u^2}=|u|\): sau khi bình phương, một nghiệm tìm được mới chỉ là ứng viên; phải xét điều kiện để xác định nghiệm hợp lệ. Em có thể học các kiến thức tiền đề ngay trong bài.

    Nếu \(A=B^2\) thì chỉ có \(|B|=\sqrt A\), chưa chắc \(\sqrt A=B\). Lý do có nghiệm ngoại lai là phép bình phương làm mất thông tin dấu. Một nghiệm cuối phải thỏa miền và phương trình gốc.


    <span data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHVI-TRY18" data-outcome-id="B18_OUT_03" hidden></span>

    ??? question "Em đã tự thử? Mở đáp án để đối chiếu"

        <div class="thpt-r4-first-try-answer"><p><strong>Đáp án:</strong> Điều kiện <span class="arithmatex">\(x\ge0\)</span>. Bình phương <span class="arithmatex">\(2x+3=x^2\Leftrightarrow(x-3)(x+1)=0\)</span>, ứng viên x=3,−1. Thử: x=3 cho <span class="arithmatex">\(\sqrt9=3\)</span>, x=−1 làm vế phải âm (và <span class="arithmatex">\(\sqrt1=1\ne-1\)</span>). Nghiệm duy nhất x=3; x=−1 ngoại lai.</p><p><strong>Vì sao:</strong> Bình phương tạo x=−1 dù hai vế gốc trái dấu. Chỉ x=3 thỏa toàn bộ.</p><p>Đây là câu tự luyện công khai, không chấm điểm thành thạo. Nếu chưa đúng, mở hướng dẫn tự sửa phía dưới.</p></div>



    ### Ví dụ 3 — Hai căn thức và nghiệm ngoại lai (tự soạn)

    Xét

    \[
    \sqrt{x^2+7x+11}=\sqrt{x+3}.
    \]

    Bình phương hai vế và rút gọn:

    \[
    x^2+7x+11=x+3 \iff x^2+6x+8=0
    \iff(x+2)(x+4)=0.
    \]

    Hai nghiệm ứng viên là \(x=-2\), \(x=-4\). Tuy nhiên, \(x=-4\) làm \(x+3=-1<0\), **không thuộc miền xác định**; còn \(x=-2\) cho cả hai vế bằng \(1\). Vì vậy \(\boxed{S=\{-2\}}\).

    *Bài học:* Không phải cứ bình phương rồi giải phương trình đại số là thu được các nghiệm của phương trình chứa căn.


    ### Độ dài hình học buộc nghiệm dương

    Bài toán đo chiều dài thang dựa vào định lí Pitago có thể dẫn tới phương trình chứa căn. Nghiệm âm từ bình phương tuy đúng đại số nhưng không là độ dài thực tế.

    Biết tam giác vuông, Pitago \(c^2=a^2+b^2\), độ dài phải dương và căn không âm. Em có thể học các kiến thức tiền đề ngay trong bài.

    Khi một cạnh góc vuông là h>0 và cạnh kia 5 m, cạnh huyền là \(\sqrt{h^2+25}\), phải phù hợp chiều dài thang cho trước. Giải căn rồi lọc h>0 không chỉ vì toán căn mà vì **ý nghĩa vật lý** của ẩn.


    **Vì sao chọn phương pháp này?** Chọn ẩn có đơn vị và miền h>0, lập \(\sqrt{h^2+25}=13\), giải và thử lại. Không chấp nhận h âm dù bình phương cho hai số đối nhau.

    **Em vận dụng.** Một thang dài 13 m dựa tường, chân thang cách tường 5 m. Đặt h>0 là độ cao đầu thang trên tường. Lập phương trình chứa căn và tính h.

    <span data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHVI-TRY19" data-outcome-id="B18_OUT_04" hidden></span>

    ??? question "Em đã tự thử? Mở đáp án để đối chiếu"

        <div class="thpt-r4-first-try-answer"><p><strong>Đáp án:</strong> <span class="arithmatex">\(\sqrt{h^2+5^2}=13\Rightarrow h^2=169-25=144\)</span>. Vì h&gt;0 nên h=12 m; thử <span class="arithmatex">\(\sqrt{12^2+5^2}=13\)</span>.</p><p><strong>Vì sao:</strong> Nghiệm h=−12 bị loại do không biểu diễn độ dài. Tam giác 5–12–13 kiểm chính xác và đơn vị là mét.</p><p>Đây là câu tự luyện công khai, không chấm điểm thành thạo. Nếu chưa đúng, mở hướng dẫn tự sửa phía dưới.</p></div>



    ### Ví dụ 4 — Ứng dụng độ dài trong hình học (tự soạn)

    Một tam giác vuông có hai cạnh góc vuông dài \(x\) m và \(4\) m, với \(x>0\). Tìm \(x\) nếu cạnh huyền dài \(2x-1\) m.

    Theo định lí Pythagore:

    \[
    \sqrt{x^2+16}=2x-1.
    \]

    Điều kiện cần là \(2x-1\ge0\), tức \(x\ge\frac12\). Bình phương được

    \[
    x^2+16=(2x-1)^2
    \iff 3x^2-4x-15=0
    \iff(3x+5)(x-3)=0.
    \]

    Hai nghiệm ứng viên là \(x=3\) và \(x=-\frac53\). Chỉ \(x=3\) đạt điều kiện. Thử lại: \(\sqrt{3^2+4^2}=5=2\cdot3-1\). Vậy cạnh góc vuông cần tìm dài \(\boxed{3\text{ m}}\).

    **Liên hệ SGK/SBT:** Những tình huống hình học ở trên giúp luyện cách đặt điều kiện cho căn thức và thử lại nghiệm ứng viên trong phương trình ban đầu.

    ### Vận dụng: hai hành trình gặp nhau cùng thời điểm

    **Vì sao cần bài này?** Khi hai người đi theo hai lộ trình khác nhau, khoảng cách chưa đủ để quyết định điểm gặp. Ta cần đổi từng khoảng cách thành **thời gian = quãng đường / vận tốc**. Đây cũng là lúc phương trình chứa căn xuất hiện tự nhiên: đường đi xiên là cạnh huyền của tam giác vuông.

    **Ví dụ tự biên soạn.** Hai người xuất phát cùng lúc và cần gặp nhau tại điểm \(M\) trên đoạn đường thẳng \(BC\) dài \(8\) km. Người thứ nhất xuất phát tại \(A\), cách \(B\) một đoạn vuông góc \(AB=3\) km, đi thẳng từ \(A\) tới \(M\) với vận tốc \(5\) km/h. Người thứ hai xuất phát tại \(C\), đi dọc đoạn \(CM\) với vận tốc \(4\) km/h. Hỏi phải chọn \(M\) cách \(B\) bao nhiêu kilômét để hai người đến cùng lúc?

    **Bước 1 — hình dung và đặt điều kiện.** Đặt \(x=BM\) (km), \(0\le x\le8\), vì \(M\) nằm trên đoạn \(BC\). Tam giác \(ABM\) vuông tại \(B\), nên \(AM=\sqrt{x^2+3^2}=\sqrt{x^2+9}\), còn \(CM=8-x\).

    <div class="thpt-g10-table-scroll"><table class="thpt-g10-knowledge-table">
    <thead><tr><th>Lộ trình</th><th>Quãng đường</th><th>Vận tốc</th><th>Thời gian</th></tr></thead>
    <tbody>
    <tr><td>\(A\to M\)</td><td>\(\sqrt{x^2+9}\) km</td><td>\(5\) km/h</td><td>\(\dfrac{\sqrt{x^2+9}}5\) giờ</td></tr>
    <tr><td>\(C\to M\)</td><td>\(8-x\) km</td><td>\(4\) km/h</td><td>\(\dfrac{8-x}4\) giờ</td></tr>
    </tbody></table></div>

    **Bước 2 — giải thích phương trình.** Vì cả hai cùng xuất phát và phải đến cùng lúc, ta **cho hai thời gian bằng nhau**:

    \[
    \frac{\sqrt{x^2+9}}5=\frac{8-x}4
    \iff4\sqrt{x^2+9}=5(8-x).
    \]

    Trong miền \(0\le x\le8\), hai vế đều không âm, nên có thể bình phương:

    \[
    16(x^2+9)=25(8-x)^2
    \iff9x^2-400x+1456=0
    \iff(x-4)(9x-364)=0.
    \]

    **Bước 3 — xét từng ứng viên.** Phương trình sau bình phương cho \(x=4\) hoặc \(x=\dfrac{364}{9}\). Giá trị \(\dfrac{364}{9}>8\) nằm ngoài đoạn \(BC\), khiến \(CM=8-x<0\), nên **không phải điểm gặp hợp lệ**.

    **Bước 4 — thử lại điều kiện gặp nhau.** Với \(x=4\), đường xiên \(AM=\sqrt{4^2+3^2}=5\) km; người thứ nhất đi \(5/5=1\) giờ. Người thứ hai đi \(CM=8-4=4\) km, cũng hết \(4/4=1\) giờ. Vậy **điểm gặp cách B đúng \(4\) km**.

    **Tự kiểm khi gặp bài tương tự:** Hãy kiểm lần lượt đoạn đường có tồn tại hay không, vế chứa căn có nghĩa hay không, thời gian có không âm hay không, rồi thay nghiệm vào **hai thời gian ban đầu**. Một nghiệm đúng sau bình phương chưa đủ để khẳng định hai người gặp nhau.
    
    ### Những sai lầm thường gặp

    - **Nhận hết nghiệm sau khi bình phương:** nghiệm ngoại lai có thể được sinh ra.
    - **Quên dấu của vế không chứa căn:** trong \(\sqrt{A(x)}=B(x)\) phải có \(B(x)\ge0\).
    - **Quên điều kiện của biến và việc thử lại:** nghiệm đại số có thể làm căn vô nghĩa.
    - **Rút gọn căn bậc hai sai:** với \(u\in\mathbb R\), ta có \(\sqrt{u^2}=|u|\), **không tự thay bằng \(u\)** khi chưa biết dấu của \(u\). Quy tắc này đặc biệt quan trọng nếu biểu thức dưới căn chứa bình phương của một đa thức.

    [Chuyển đến Luyện tập và Vận dụng Chương VI](luyen-tap.md) để làm bài củng cố. Bạn có thể mở gợi ý và lời giải sau khi tự làm.

=== "Ví dụ"

    Trước khi xem lời giải, hãy xác định dữ kiện, điều phải tìm và lý do chọn cách giải. Sau đó kiểm tra lại điều kiện áp dụng và kết quả, thay vì chỉ nhìn phép tính cuối cùng.

    ### Ví dụ — Vì sao phải kiểm nghiệm sau khi bình phương?

    **Đề bài.** Giải \(\sqrt{x+1}=x-1\).

    **Vì sao chọn cách này?** Căn thức không âm, nên trước hết cần \(x+1\ge0\) và **\(x-1\ge0\)**; khi đó mới bình phương hai vế an toàn.

    **Giải.** Điều kiện gộp \(x\ge1\). Bình phương: \(x+1=(x-1)^2=x^2-2x+1\), hay \(x^2-3x=0\), suy ra \(x=0\) hoặc \(x=3\). \(x=0\) không đạt điều kiện và không thỏa gốc. Với \(x=3\), \(\sqrt4=2=3-1\), nên nghiệm duy nhất là \(x=3\).

    **Tự kiểm:** Nếu chỉ ghi hai nghiệm \(\{0,3\}\), em đã giải phương trình sau bình phương chứ chưa giải xong phương trình ban đầu.

    1. Giải \(\sqrt{x+2}=x\).
    2. Giải \(\sqrt{x+5}=\sqrt{2x+1}\).
    3. Cho \(\sqrt{x^2+2x+5}=x+1\). Phương trình có nghiệm thực hay không? Giải thích.

    ??? question "Đáp án và kiểm tra nghiệm (chỉ mở sau khi tự làm)"

        <ol>
        <li><span class="arithmatex">\(x\ge0\)</span>. Bình phương <span class="arithmatex">\(x+2=x^2\iff (x-2)(x+1)=0\)</span>; chỉ <span class="arithmatex">\(x=2\)</span> đạt điều kiện.</li>
        <li><span class="arithmatex">\(x+5=2x+1\iff x=4\)</span>. Thay vào hai căn cho cùng <span class="arithmatex">\(\sqrt9=3\)</span>, vậy <span class="arithmatex">\(x=4\)</span>.</li>
        <li><span class="arithmatex">\(x+1\ge0\)</span>. Bình phương được <span class="arithmatex">\(x^2+2x+5=(x+1)^2=x^2+2x+1\)</span>, mâu thuẫn <span class="arithmatex">\(5=1\)</span>. Do đó vô nghiệm.</li>
        </ol>


=== "Lỗi thường gặp"

    <span data-thpt-help-id="HELP-G10-CHVI-TRY16" hidden></span>

    ??? tip "Gợi ý khắc phục khi chưa làm được — 5 bước"

        <ol><li><strong>Nhận diện lỗi:</strong> Chỉ đặt điều kiện một căn hoặc giải A=B rồi không kiểm miền.</li>
        <li><strong>Tự chẩn đoán:</strong> Em có đang mắc đúng lỗi này trong lời giải bài vừa thử không? Hãy khoanh bước đầu tiên chuyển từ dữ kiện sang kết luận mà em chưa chứng minh được.</li>
        <li><strong>Kiến thức gốc:</strong> Với <span class="arithmatex">\(\sqrt{A(x)}=\sqrt{B(x)}\)</span>, đầu tiên yêu cầu <span class="arithmatex">\(A(x)\ge0\)</span> và <span class="arithmatex">\(B(x)\ge0\)</span>. Sau đó hai căn không âm bằng nhau <strong>khi và chỉ khi</strong> <span class="arithmatex">\(A(x)=B(x)\)</span> trong miền; đây là phép đổi tương đương *sau khi* đặt điều kiện.</li>
        <li><strong>Tự sửa:</strong> Khoanh cả A(x),B(x), lập hai dấu ≥0, giao miền rồi mới biến đổi và thử. Chỉ mở lại đáp án ở trên sau khi đã thử giải một lần không xem gợi ý.</li>
        <li><strong>Luyện lại (không nhân bản câu):</strong> Em có thể <a href="../luyen-tap/?item=THPT-G10-B18-C02">luyện lại một câu Core/Luyện tập cùng kiến thức</a>, rồi tự giải thích bằng lời của mình.</li></ol>


    <span data-thpt-help-id="HELP-G10-CHVI-TRY17" hidden></span>

    ??? tip "Gợi ý khắc phục khi chưa làm được — 5 bước"

        <ol><li><strong>Nhận diện lỗi:</strong> Giữ nghiệm x=−1 chỉ vì nghiệm phương trình sau bình phương.</li>
        <li><strong>Tự chẩn đoán:</strong> Em có đang mắc đúng lỗi này trong lời giải bài vừa thử không? Hãy khoanh bước đầu tiên chuyển từ dữ kiện sang kết luận mà em chưa chứng minh được.</li>
        <li><strong>Kiến thức gốc:</strong> Với <span class="arithmatex">\(\sqrt{A(x)}=B(x)\)</span>, phải có <span class="arithmatex">\(B(x)\ge0\)</span> (và <span class="arithmatex">\(A(x)\ge0\)</span>); sau đó bình phương <span class="arithmatex">\(A(x)=B(x)^2\)</span>, giải và kiểm. Bình phương tự nó không bảo đảm mọi nghiệm ứng viên có dấu đúng.</li>
        <li><strong>Tự sửa:</strong> Kiểm vế phải x−1≥0 trước khi xét nghiệm; thử tất cả ứng viên vào hai vế phương trình gốc. Chỉ mở lại đáp án ở trên sau khi đã thử giải một lần không xem gợi ý.</li>
        <li><strong>Luyện lại (không nhân bản câu):</strong> Em có thể <a href="../luyen-tap/?item=THPT-G10-B18-P01">luyện lại một câu Core/Luyện tập cùng kiến thức</a>, rồi tự giải thích bằng lời của mình.</li></ol>


    <span data-thpt-help-id="HELP-G10-CHVI-TRY18" hidden></span>

    ??? tip "Gợi ý khắc phục khi chưa làm được — 5 bước"

        <ol><li><strong>Nhận diện lỗi:</strong> Cho cả hai nghiệm từ phương trình bình phương mà không thử lại.</li>
        <li><strong>Tự chẩn đoán:</strong> Em có đang mắc đúng lỗi này trong lời giải bài vừa thử không? Hãy khoanh bước đầu tiên chuyển từ dữ kiện sang kết luận mà em chưa chứng minh được.</li>
        <li><strong>Kiến thức gốc:</strong> Nếu <span class="arithmatex">\(A=B^2\)</span> thì chỉ có <span class="arithmatex">\(|B|=\sqrt A\)</span>, chưa chắc <span class="arithmatex">\(\sqrt A=B\)</span>. Lý do có nghiệm ngoại lai là phép bình phương làm mất thông tin dấu. Một nghiệm cuối phải thỏa miền và phương trình gốc.</li>
        <li><strong>Tự sửa:</strong> Tạo bảng hai cột ứng viên/kiểm gốc: từng x tính căn thật và vế phải có dấu đúng hay không. Chỉ mở lại đáp án ở trên sau khi đã thử giải một lần không xem gợi ý.</li>
        <li><strong>Luyện lại (không nhân bản câu):</strong> Em có thể <a href="../luyen-tap/?item=THPT-G10-B18-P01">luyện lại một câu Core/Luyện tập cùng kiến thức</a>, rồi tự giải thích bằng lời của mình.</li></ol>


    <span data-thpt-help-id="HELP-G10-CHVI-TRY19" hidden></span>

    ??? tip "Gợi ý khắc phục khi chưa làm được — 5 bước"

        <ol><li><strong>Nhận diện lỗi:</strong> Bỏ điều kiện h&gt;0, nhầm cạnh huyền thành h hoặc nhận nghiệm −12 m.</li>
        <li><strong>Tự chẩn đoán:</strong> Em có đang mắc đúng lỗi này trong lời giải bài vừa thử không? Hãy khoanh bước đầu tiên chuyển từ dữ kiện sang kết luận mà em chưa chứng minh được.</li>
        <li><strong>Kiến thức gốc:</strong> Khi một cạnh góc vuông là h&gt;0 và cạnh kia 5 m, cạnh huyền là <span class="arithmatex">\(\sqrt{h^2+25}\)</span>, phải phù hợp chiều dài thang cho trước. Giải căn rồi lọc h&gt;0 không chỉ vì toán căn mà vì <strong>ý nghĩa vật lý</strong> của ẩn.</li>
        <li><strong>Tự sửa:</strong> Vẽ hình và đánh dấu <strong>cạnh huyền 13 m</strong> và <strong>cạnh góc vuông 5 m</strong>, viết h&gt;0, rồi thử lại định lí Pitago với nghiệm tìm được. Chỉ mở lại đáp án ở trên sau khi đã thử giải một lần không xem gợi ý.</li>
        <li><strong>Luyện lại (không nhân bản câu):</strong> Em có thể <a href="../luyen-tap/?item=THPT-G10-B18-P04">luyện lại một câu Core/Luyện tập cùng kiến thức</a>, rồi tự giải thích bằng lời của mình.</li></ol>


    **Học tiếp:** [Core và Luyện tập](luyen-tap.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">Nguồn toán học: SGK Toán 10 Kết nối tri thức với cuộc sống và học liệu SLM hiện hành. Lời giảng được biên tập nhằm hỗ trợ tự học độc lập.</p>

