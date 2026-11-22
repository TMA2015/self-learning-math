# Toán 12 · Bài 6. Vectơ trong không gian

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 12 · CHƯƠNG II · SGK KẾT NỐI TRI THỨC · TẬP MỘT · TRANG 45–59</p>
<p class="thpt-r4-lead">Hiểu bản chất, đọc hình, tự vận dụng rồi đối chiếu và luyện tập.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương II</a><a href="../bai-7/">Bài tiếp theo</a></nav>
</div>

=== "Khám phá kiến thức"

    Trong không gian, một mũi tên biểu diễn cả độ dài và hướng: lực, độ dời, hoặc cạnh một hình hộp. Ôn vectơ phẳng, hình bình hành, định lí Pythagore và cosin. Hình phối cảnh chỉ giúp nhìn quan hệ, không dùng thước trên hình để đo cạnh thật.

    ### 1.1. Vectơ và vectơ-không
    
    Một vectơ $\overrightarrow{AB}$ ghi cả điểm đầu A và điểm cuối B; độ dài bằng AB. Nếu hai đầu trùng nhau, độ dài 0. Không có hướng hình học riêng để đo, nhưng SGK quy ước vectơ-không cùng hướng và cùng phương với mọi vectơ.
    
    **Vận dụng.** Hình hộp chữ nhật có ba cạnh chung đỉnh dài 2, 3, 6 cm. Tính đường chéo không gian. Nếu đi từ A rồi trở lại A, vectơ độ dời là gì?
    
    <span data-ped-first-try="1" data-outcome-id="G12-CHII-B06-O01" data-thpt-first-try-id="THPT-G12-B06-TRY01" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Đường chéo dài $\sqrt{4+9+36}=7$ cm. Độ dời $\overrightarrow{AA}=\vec0$, dài 0, cùng hướng với mọi vectơ theo quy ước.
    
    <span data-thpt-help-id="HELP-G12-B06-TRY01" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Độ dài vectơ là độ dài đoạn nối hai đầu trong không gian; ba kích thước phải ghép bằng Pythagore, còn hành trình quay về điểm đầu có độ dời vectơ-không dù quãng đường không bằng 0.

        **Tự sửa:** Phân biệt quãng đường với độ dời; dùng ba cạnh vuông góc thật. <a href="../luyen-tap/#thpt-g12-b06-c01">Ôn câu nền tảng</a>; <a href="../luyen-tap/#thpt-g12-b06-p01">thử câu luyện tập khác</a>. Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.2. Bằng nhau không chỉ song song
    
    Hai vectơ khác không bằng nhau khi cùng hướng và cùng độ dài. Dời một mũi tên song song không làm thay đổi vectơ. Với mỗi điểm O và vectơ cho trước có duy nhất một điểm M sao cho $\overrightarrow{OM}$ bằng vectơ đó.
    
    **Vận dụng.** Trong hình lăng trụ ABC.A′B′C′, so sánh $\overrightarrow{BB'}$, $\overrightarrow{CC'}$, $\overrightarrow{B'B}$.
    
    <span data-ped-first-try="2" data-outcome-id="G12-CHII-B06-O02" data-thpt-first-try-id="THPT-G12-B06-TRY02" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $\overrightarrow{BB'}=\overrightarrow{CC'}=-\overrightarrow{B'B}$ vì các cạnh bên song song, bằng nhau và chiều B→B′, C→C′ giống nhau.
    
    <span data-thpt-help-id="HELP-G12-B06-TRY02" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Hai vectơ song song có thể ngược chiều hoặc khác độ dài, nên không đủ căn cứ kết luận bằng nhau; phải kiểm cả chiều lẫn độ dài.

        **Tự sửa:** So chiều mũi tên trước khi so độ dài. <a href="../luyen-tap/#thpt-g12-b06-c02">Ôn câu nền tảng</a>; <a href="../luyen-tap/#thpt-g12-b06-p03">thử câu luyện tập khác</a>. Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.3. Ghép hành trình và tìm hiệu
    
    Tổng là độ dời khi nối đầu–đuôi: $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$. Trong hình bình hành, hai cạnh chung đầu cho đường chéo. Trong hình hộp ghép ba cạnh chung đầu bằng cách dời hai cạnh sau đến cuối của bước trước. Hiệu $\vec a-\vec b$ là cộng vectơ đối; nếu cùng đầu O thì $\overrightarrow{OB}-\overrightarrow{OA}=\overrightarrow{AB}$.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHII-B06-R00.svg" alt="Hình hộp với ba mũi tên AB, AD, AA′ chung đầu A và đường chéo AC′."/><figcaption>Dời AD đến BC và AA′ đến CC′; nối A→B→C→C′ cho tổng AC′.</figcaption></figure>
    
    **Vận dụng.** Trong hình hộp ABCD.A′B′C′D′, tính $\overrightarrow{AC'}-\overrightarrow{AA'}$ và $\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CC'}$.
    
    <span data-ped-first-try="3" data-outcome-id="G12-CHII-B06-O03" data-thpt-first-try-id="THPT-G12-B06-TRY03" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Hiệu là $\overrightarrow{AC}$ vì $\overrightarrow{CC'}=\overrightarrow{AA'}$. Tổng là $\overrightarrow{AC'}$ theo hành trình A→B→C→C′.
    
    <span data-thpt-help-id="HELP-G12-B06-TRY03" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Quy tắc cộng vectơ đòi nối đầu–đuôi hoặc chuyển vectơ bằng nhau về các cạnh thích hợp; trừ vectơ tương đương cộng vectơ đối, không phải lấy tổng độ dài.

        **Tự sửa:** Dùng các vectơ cạnh bằng nhau để nối; không cộng tên điểm. <a href="../luyen-tap/#thpt-g12-b06-c03">Ôn câu nền tảng</a>; <a href="../luyen-tap/#thpt-g12-b06-p05">thử câu luyện tập khác</a>. Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.4. Nhân một số với vectơ
    
    Kéo dài hay thu ngắn vectơ $\vec a$ theo hệ số |k|; với $\vec a\ne\vec0$ và k khác 0, k dương giữ chiều, k âm đổi chiều. Nếu k=0 hoặc $\vec a=\vec0$, tích bằng $\vec0$.
    
    **Vận dụng.** Vectơ $\vec a$ dài 5 cm, $\vec b=-3\vec a$. So chiều, độ dài.
    
    <span data-ped-first-try="4" data-outcome-id="G12-CHII-B06-O04" data-thpt-first-try-id="THPT-G12-B06-TRY04" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $\vec b$ ngược hướng $\vec a$, dài 15 cm.
    
    <span data-thpt-help-id="HELP-G12-B06-TRY04" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Độ dài của k a nhân |k|, nhưng chiều phụ thuộc dấu k; hệ số 0 cho vectơ-không, không nên nói nó có một hướng hình học xác định.

        **Tự sửa:** Tách dấu k và trị tuyệt đối của k. <a href="../luyen-tap/#thpt-g12-b06-c04">Ôn câu nền tảng</a>; <a href="../luyen-tap/#thpt-g12-b06-p07">thử câu luyện tập khác</a>. Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.5. Trung điểm, trọng tâm và tứ diện
    
    Nếu G là trọng tâm tam giác BCD, $\overrightarrow{AB}+\overrightarrow{AC}+\overrightarrow{AD}=3\overrightarrow{AG}$. Đặt I trên AG với AI=3AG/4. Khi đó $\overrightarrow{IA}+\overrightarrow{IB}+\overrightarrow{IC}+\overrightarrow{ID}=-4\overrightarrow{AI}+3\overrightarrow{AG}=\vec0$. I là trọng tâm tứ diện.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHII-B06-CENTROID-R02.svg" alt="Tứ diện ABCD với G là trọng tâm đáy BCD và I nằm trên AG, AI bằng ba phần tư AG."/><figcaption>Đọc đường trung tuyến AG; I gần G hơn, IG=AG/4. Nét phụ cho thấy G là trọng tâm tam giác đáy.</figcaption></figure>
    
    **Vận dụng.** Tứ diện có đỉnh A cao 12 cm so với mặt BCD; G là trọng tâm BCD. I trên AG với AI=3AG/4. Tính khoảng cách I đến (BCD).
    
    <span data-ped-first-try="5" data-outcome-id="G12-CHII-B06-O04" data-thpt-first-try-id="THPT-G12-B06-TRY05" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** I đi 3/4 đoạn từ A xuống G nên độ cao còn 1/4: 3 cm. Khoảng cách thay đổi tuyến tính dọc AG, dù AG không nhất thiết vuông góc mặt đáy.
    
    <span data-thpt-help-id="HELP-G12-B06-TRY05" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Trọng tâm tứ diện nằm trên trung tuyến từ đỉnh đến trọng tâm tam giác đáy theo tỉ lệ AI/AG=3/4; khoảng cách đến đáy không bằng đoạn IG nếu AG không vuông góc đáy.

        **Tự sửa:** Không lấy 3/4 chiều cao tính từ đáy; I gần G hơn A. <a href="../luyen-tap/#thpt-g12-b06-c04">Ôn câu nền tảng</a>; <a href="../luyen-tap/#thpt-g12-b06-p07">thử câu luyện tập khác</a>. Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.6. Góc và tích vô hướng
    
    Dời hai vectơ khác không về chung đầu, đọc góc giữa hai tia trong [0°,180°]. Tích vô hướng là độ dài một vectơ nhân hình chiếu có dấu của vectơ kia: $\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta$. Góc tù cho tích âm. Với vectơ-không, SGK cho phép quy ước góc tùy ý trong khoảng trên; không có góc duy nhất để tính bằng cos, tích vô hướng luôn bằng 0.
    
    **Vận dụng.** Hai vectơ dài 6 và 4, góc 120°. Tính tích vô hướng; tích với $\vec0$ bằng bao nhiêu?
    
    <span data-ped-first-try="6" data-outcome-id="G12-CHII-B06-O05" data-thpt-first-try-id="THPT-G12-B06-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $6\cdot4\cdot(-1/2)=-12$; tích với $\vec0$ bằng 0, không suy một góc duy nhất.
    
    <span data-thpt-help-id="HELP-G12-B06-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Góc giữa hai vectơ khác không lấy từ 0° đến 180°, không rút về góc nhọn như góc giữa hai đường thẳng; tích với vectơ-không bằng 0 không đòi một góc duy nhất.

        **Tự sửa:** Không đổi góc tù thành góc nhọn; không chia cho độ dài 0. <a href="../luyen-tap/#thpt-g12-b06-c05">Ôn câu nền tảng</a>; <a href="../luyen-tap/#thpt-g12-b06-p09">thử câu luyện tập khác</a>. Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.7. Tính góc từ hình khối
    
    Trong hình lập phương, đường chéo mặt bằng cạnh nhân $\sqrt2$, góc giữa cạnh và đường chéo trên cùng mặt là 45°. Khi hai vectơ có đầu khác nhau, dời song song về chung đầu.
    
    **Vận dụng.** Hình lập phương cạnh 4 cm. Tính $\overrightarrow{AB}\cdot\overrightarrow{AC}$ trong mặt đáy ABCD.
    
    <span data-ped-first-try="7" data-outcome-id="G12-CHII-B06-O05" data-thpt-first-try-id="THPT-G12-B06-TRY07" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $\widehat{BAC}=45^\circ$, $AB=4$, $AC=4\sqrt2$ nên tích $4\cdot4\sqrt2\cdot\sqrt2/2=16$ cm².
    
    <span data-thpt-help-id="HELP-G12-B06-TRY07" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Đường chéo mặt và cạnh hình vuông tạo góc 45°; chọn nhầm đường chéo không gian hoặc góc bù sẽ đổi giá trị tích vô hướng.

        **Tự sửa:** Xác định tam giác thật, không đo góc chiếu trên trang. <a href="../luyen-tap/#thpt-g12-b06-c05">Ôn câu nền tảng</a>; <a href="../luyen-tap/#thpt-g12-b06-p09">thử câu luyện tập khác</a>. Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

    ### 1.8. Công của lực và mô hình
    
    Lực không đổi $\vec F$ trong một độ dời $\vec s$ sinh công $W=\vec F\cdot\vec s$. Nếu lực cùng chiều thì công dương, ngược chiều âm; lực vuông góc không sinh công theo mô hình này.
    
    **Vận dụng.** Lực 12 N tạo góc 60° với độ dời thẳng 5 m. Tính công.
    
    <span data-ped-first-try="8" data-outcome-id="G12-CHII-B06-O06" data-thpt-first-try-id="THPT-G12-B06-TRY08" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $W=12\cdot5\cdot1/2=30$ J.
    
    <span data-thpt-help-id="HELP-G12-B06-TRY08" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Công của lực không đổi bằng tích vô hướng lực với độ dời, không phải với quãng đường vô hướng; góc và đơn vị N·m=J đều phải phù hợp mô hình.

        **Tự sửa:** Đọc đúng hướng lực và độ dời; không áp dụng máy móc cho lực biến thiên. <a href="../luyen-tap/#thpt-g12-b06-c06">Ôn câu nền tảng</a>; <a href="../luyen-tap/#thpt-g12-b06-p11">thử câu luyện tập khác</a>. Sau đó tự làm lại Vận dụng mà không nhìn lời giải.

=== "Kiến thức SGK"

    ### 2.1. Vectơ trong không gian
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Vectơ trong không gian.</strong><p>Vectơ là đoạn thẳng có hướng, kí hiệu \(\overrightarrow{AB}\) với đầu A, cuối B; độ dài \(|\overrightarrow{AB}|=AB\). Với vectơ khác không, giá là đường thẳng qua hai đầu. Hai vectơ khác không cùng phương nếu giá trùng hoặc song song; hai vectơ bằng nhau nếu cùng hướng và độ dài. Vectơ-không có độ dài 0, theo quy ước cùng hướng và cùng phương với mọi vectơ. Nó không biểu thị một hướng hình học duy nhất.</p></div>

    ### 2.2. Tổng và hiệu của hai vectơ
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Tổng và hiệu của hai vectơ.</strong><p>Tổng hai vectơ \(\vec a,\vec b\) được xác định bằng cách đặt \(\overrightarrow{AB}=\vec a\), \(\overrightarrow{BC}=\vec b\), khi đó \(\vec a+\vec b=\overrightarrow{AC}\). Vectơ đối \(-\vec a\) có cùng độ dài và ngược hướng nếu \(\vec a\ne\vec0\); \(-\vec0=\vec0\). Hiệu \(\vec a-\vec b=\vec a+(-\vec b)\).</p></div>

    ### 2.2.1. Các quy tắc cộng, trừ
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Các quy tắc cộng, trừ.</strong><p>Quy tắc ba điểm \(\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}\); hình bình hành \(\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}\); hình hộp \(\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{AC'}\). Quy tắc hiệu \(\overrightarrow{OB}-\overrightarrow{OA}=\overrightarrow{AB}\). Phép cộng giao hoán, kết hợp, \(\vec a+\vec0=\vec a\).</p></div>

    ### 2.3. Tích của vectơ với một số
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Tích của vectơ với một số.</strong><p>Với k thực, nếu k≠0 và \(\vec a\ne\vec0\), vectơ \(k\vec a\) có độ dài \(|k||\vec a|\), cùng hướng khi k&gt;0, ngược khi k&lt;0. Quy ước \(0\vec a=k\vec0=\vec0\).</p></div>

    ### 2.3.1. Tính chất và hệ thức trọng tâm
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất và hệ thức trọng tâm.</strong><p>\(k(\vec a+\vec b)=k\vec a+k\vec b\), \((k+m)\vec a=k\vec a+m\vec a\), \(k(m\vec a)=(km)\vec a\), \(1\vec a=\vec a\). Với \(\vec b\ne\vec0\), \(\vec a,\vec b\) cùng phương khi và chỉ khi \(\vec a=k\vec b\) với k thực. I là trung điểm AB khi \(\overrightarrow{IA}+\overrightarrow{IB}=\vec0\); G trọng tâm tam giác ABC khi \(\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0\). Tứ diện ABCD: I là trọng tâm khi \(\overrightarrow{IA}+\overrightarrow{IB}+\overrightarrow{IC}+\overrightarrow{ID}=\vec0\); với G là trọng tâm BCD, \(\overrightarrow{AI}=\tfrac34\overrightarrow{AG}\).</p></div>

    ### 2.4. Góc giữa hai vectơ và tích vô hướng
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Góc giữa hai vectơ và tích vô hướng.</strong><p>Với hai vectơ khác không, đặt \(\overrightarrow{OA}=\vec a,\overrightarrow{OB}=\vec b\), góc là góc giữa hai tia OA, OB trong [0°,180°], gồm 0° và 180° với hai tia trùng hoặc đối. Tích vô hướng \(\vec a\cdot\vec b=|\vec a||\vec b|\cos(\vec a,\vec b)\) là một số. Theo quy ước SGK, góc với vectơ-không có thể nhận giá trị tùy ý từ 0° đến 180°; tích luôn bằng 0, không dùng phép chia để tìm góc duy nhất.</p></div>

    ### 2.4.1. Tính chất tích vô hướng
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất tích vô hướng.</strong><p>\(\vec a\cdot\vec b=\vec b\cdot\vec a\); \(\vec a\cdot(\vec b+\vec c)=\vec a\cdot\vec b+\vec a\cdot\vec c\); \((k\vec a)\cdot\vec b=k(\vec a\cdot\vec b)\); \(\vec a\cdot\vec a=|\vec a|^2\). Với hai vectơ khác không, tích bằng 0 khi và chỉ khi góc bằng 90°. Công của lực không đổi là \(\vec F\cdot\vec s\).</p></div>

=== "Ví dụ"

    ### 3.1. Hình lập phương
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B06-01"><p><strong>Đề bài:</strong> Trong hình lập phương cạnh 3 cm, các vectơ \(\overrightarrow{AB}\) và \(\overrightarrow{AC'}\) có cùng độ dài không?</p><p><strong>Phân tích:</strong> cần phân biệt mũi tên trên ảnh 2D với độ dài thật trong 3D; dùng Pythagore không gian, không đo trực tiếp hình vẽ.</p><p><strong>Lời giải:</strong> \(|\overrightarrow{AB}|=3\) cm. Đường chéo không gian \(AC'\) đi qua ba chiều vuông góc nên \(AC'=\sqrt{3^2+3^2+3^2}=3\sqrt3\) cm.</p><p><strong>Kiểm lại:</strong> Bình phương đường chéo bằng 27 cm², khác 9 cm² của cạnh.</p></div>

    ### 3.2. So sánh vectơ
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B06-02"><p><strong>Đề bài:</strong> Với hình bình hành \(ABCD\), hãy so sánh \(\overrightarrow{AB}\), \(\overrightarrow{DC}\) và \(\overrightarrow{BA}\).</p><p><strong>Phân tích:</strong> \(\overrightarrow{CD}\) ngược chiều \(\overrightarrow{AB}\); đừng chỉ nhìn hai cạnh song song.</p><p><strong>Lời giải:</strong> \(\overrightarrow{AB}=\overrightarrow{DC}\) do cùng hướng, cùng độ dài; \(\overrightarrow{BA}=-\overrightarrow{AB}\).</p><p><strong>Kiểm lại:</strong> Đảo chiều AB cho BA; DC đi theo đúng chiều AB.</p></div>

    ### 3.3. Tổng trong hình hộp
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B06-03"><p><strong>Đề bài:</strong> Đưa \(\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}\) về một vectơ duy nhất.</p><p><strong>Phân tích:</strong> dùng vectơ bằng nhau để nối đầu–đuôi; không đòi hình hộp vuông.</p><p><strong>Lời giải:</strong> trong đáy \(\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}\); tiếp theo \(\overrightarrow{AC}+\overrightarrow{CC'}=\overrightarrow{AC'}\), và \(\overrightarrow{CC'}=\overrightarrow{AA'}\).</p><p><strong>Kiểm lại:</strong> Kiểm cả hai điểm đầu và cuối của đường đi A→C→C′.</p></div>

    ### 3.4. Trung điểm
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B06-04"><p><strong>Đề bài:</strong> \(M\) là trung điểm \(AB\), \(N\) trên tia đối của \(AB\) sao cho \(AN=2AB\). Tìm \(\overrightarrow{AM}\) và \(\overrightarrow{AN}\) theo \(\overrightarrow{AB}\).</p><p><strong>Phân tích:</strong> tỉ số độ dài chỉ cho \(|k|\); muốn xác định \(k\) phải xét chiều.</p><p><strong>Lời giải:</strong> \(\overrightarrow{AM}=\tfrac12\overrightarrow{AB}\), \(\overrightarrow{AN}=-2\overrightarrow{AB}\).</p><p><strong>Kiểm lại:</strong> Vì M nằm giữa A,B nên hệ số 1/2 dương; N nằm tia đối nên hệ số −2.</p></div>

    ### 3.5. Tích vô hướng
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B06-05"><p><strong>Đề bài:</strong> \(|\vec u|=4\), \(|\vec v|=6\), \((\vec u,\vec v)=120^\circ\). Tính \(\vec u\cdot\vec v\).</p><p><strong>Phân tích:</strong> góc tù làm hình chiếu có dấu âm. Không đổi góc thành \(60^\circ\) vì ảnh vẽ có thể khiến em nhầm góc giữa vectơ và đường thẳng.</p><p><strong>Lời giải:</strong> \(4\cdot6\cdot(-\tfrac12)=-12\).</p><p><strong>Kiểm lại:</strong> Dấu âm đúng với góc tù; độ lớn 12 không vượt tích độ dài 24.</p></div>

    ### 3.6. Công của lực
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B06-06"><p><strong>Đề bài:</strong> Một lực không đổi \(20\) N hợp với hướng dịch chuyển 3 m góc \(60^\circ\). Tính công lực đó.</p><p><strong>Phân tích:</strong> đây là mô hình lực không đổi và độ dời thẳng; không tính công cho lực biến thiên tùy ý theo cùng một công thức đơn giản.</p><p><strong>Lời giải:</strong> công theo hướng dịch chuyển là \(W=\vec F\cdot\vec s=20\cdot3\cdot\tfrac12=30\) J. Nếu lực vuông góc chuyển động, công bằng 0.</p><p><strong>Kiểm lại:</strong> Kiểm đơn vị N·m=J; góc 60° cho công dương.</p></div>

    ### 3.7. Trọng tâm tứ diện và khoảng cách
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B06-R02-07"><p><strong>Đề bài:</strong> Tứ diện ABCD có chiều cao từ A bằng 16 cm; H là trọng tâm tam giác BCD. Tìm I thỏa \(\overrightarrow{IA}+\overrightarrow{IB}+\overrightarrow{IC}+\overrightarrow{ID}=\vec0\), tính AI/AH và khoảng cách đến đáy.</p><p><strong>Phân tích:</strong> Đưa bốn vectơ về cùng gốc A để dùng hệ thức trọng tâm tam giác đáy.</p><p><strong>Lời giải:</strong> Đưa các vectơ về gốc A. Tổng bằng \(-4\overrightarrow{AI}+\overrightarrow{AB}+\overrightarrow{AC}+\overrightarrow{AD}=-4\overrightarrow{AI}+3\overrightarrow{AH}\). Do đó \(\overrightarrow{AI}=3\overrightarrow{AH}/4\). I duy nhất, nằm giữa A và H; khoảng cách đáy bằng \(16/4=4\) cm.</p><p><strong>Kiểm lại:</strong> Thay AI/AH=3/4 vào tổng vectơ cho 0; I cách đáy 4 cm, không cần AH vuông góc.</p></div>

    ### 3.8. Góc giữa hai cạnh lệch trong hình lập phương
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B06-R02-08"><p><strong>Đề bài:</strong> Hình lập phương cạnh 3 cm. Tính \(\overrightarrow{AB}\cdot\overrightarrow{D'C'}\) và \(\overrightarrow{AB}\cdot\overrightarrow{B'C'}\).</p><p><strong>Phân tích:</strong> Dời mũi tên song song về cùng đầu rồi chọn góc theo hình khối.</p><p><strong>Lời giải:</strong> \(\overrightarrow{D'C'}=\overrightarrow{AB}\) nên góc 0°, tích 9 cm². \(\overrightarrow{B'C'}=\overrightarrow{AD}\), vuông góc AB nên tích 0.</p><p><strong>Kiểm lại:</strong> Một cặp cùng hướng, cặp kia vuông góc; đơn vị cm².</p></div>

    ### 3.9. Lực cản và tỉ lệ bình phương tốc độ
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B06-R02-09"><p><strong>Đề bài:</strong> Giả sử độ lớn lực cản \(F=cv^2\) với c không đổi, tốc độ tăng từ 80 lên 100 m/s, hướng lực cản luôn ngược hướng vận tốc. Tính tỉ số lực cản mới/cũ.</p><p><strong>Phân tích:</strong> Lấy tỉ số hai công thức F để khử hằng số c.</p><p><strong>Lời giải:</strong> \(F_2/F_1=(100/80)^2=25/16=1{,}5625\). Lực tăng 56,25%; vectơ lực cản vẫn hướng ngược chuyển động.</p><p><strong>Kiểm lại:</strong> 100/80=1,25; bình phương bằng 1,5625, khác 1,25.</p></div>

=== "Lỗi thường gặp"

    ### 4.1. Vectơ và vectơ-không
    
    ??? tip "Cách tự sửa"
    
        Phân biệt quãng đường với độ dời; dùng ba cạnh vuông góc thật. <a href="../luyen-tap/#thpt-g12-b06-c01">Ôn lại câu Core</a>; <a href="../luyen-tap/#thpt-g12-b06-p01">luyện câu khác rồi quay lại</a>.

    ### 4.2. Bằng nhau không chỉ song song
    
    ??? tip "Cách tự sửa"
    
        So chiều mũi tên trước khi so độ dài. <a href="../luyen-tap/#thpt-g12-b06-c02">Ôn lại câu Core</a>; <a href="../luyen-tap/#thpt-g12-b06-p03">luyện câu khác rồi quay lại</a>.

    ### 4.3. Ghép hành trình và tìm hiệu
    
    ??? tip "Cách tự sửa"
    
        Dùng các vectơ cạnh bằng nhau để nối; không cộng tên điểm. <a href="../luyen-tap/#thpt-g12-b06-c03">Ôn lại câu Core</a>; <a href="../luyen-tap/#thpt-g12-b06-p05">luyện câu khác rồi quay lại</a>.

    ### 4.4. Nhân một số với vectơ
    
    ??? tip "Cách tự sửa"
    
        Tách dấu k và trị tuyệt đối của k. <a href="../luyen-tap/#thpt-g12-b06-c04">Ôn lại câu Core</a>; <a href="../luyen-tap/#thpt-g12-b06-p07">luyện câu khác rồi quay lại</a>.

    ### 4.5. Trung điểm, trọng tâm và tứ diện
    
    ??? tip "Cách tự sửa"
    
        Không lấy 3/4 chiều cao tính từ đáy; I gần G hơn A. <a href="../luyen-tap/#thpt-g12-b06-c04">Ôn lại câu Core</a>; <a href="../luyen-tap/#thpt-g12-b06-p07">luyện câu khác rồi quay lại</a>.

    ### 4.6. Góc và tích vô hướng
    
    ??? tip "Cách tự sửa"
    
        Không đổi góc tù thành góc nhọn; không chia cho độ dài 0. <a href="../luyen-tap/#thpt-g12-b06-c05">Ôn lại câu Core</a>; <a href="../luyen-tap/#thpt-g12-b06-p09">luyện câu khác rồi quay lại</a>.

    ### 4.7. Tính góc từ hình khối
    
    ??? tip "Cách tự sửa"
    
        Xác định tam giác thật, không đo góc chiếu trên trang. <a href="../luyen-tap/#thpt-g12-b06-c05">Ôn lại câu Core</a>; <a href="../luyen-tap/#thpt-g12-b06-p09">luyện câu khác rồi quay lại</a>.

    ### 4.8. Công của lực và mô hình
    
    ??? tip "Cách tự sửa"
    
        Đọc đúng hướng lực và độ dời; không áp dụng máy móc cho lực biến thiên. <a href="../luyen-tap/#thpt-g12-b06-c06">Ôn lại câu Core</a>; <a href="../luyen-tap/#thpt-g12-b06-p11">luyện câu khác rồi quay lại</a>.

    <a href="../luyen-tap/#b06-core">Core Bài 6</a> · <a href="../luyen-tap/#b06-practice">Luyện tập và Tự luận</a> · <a href="../luyen-tap/#b06-help">Hỗ trợ khi gặp khó khăn</a> · <a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a>

    <p class="thpt-r4-footnote">Nguồn học thuật S1: SGK Toán 12 – Kết nối tri thức với cuộc sống, tập một, Bài 6 (trang in 45–59). SBT cùng bộ được kiểm qua biên bản nguồn lịch sử; trang in không đồng nhất chỉ số PDF.</p>
