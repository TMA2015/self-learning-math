# Toán 12 · Bài 15. Phương trình đường thẳng trong không gian

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 12 · CHƯƠNG V · SGK KẾT NỐI TRI THỨC · TẬP HAI · TRANG 41–49</p><p class="thpt-r4-lead">Hiểu hình học, đọc hình, tự vận dụng và đối chiếu trước khi luyện tập.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương V</a><a href="../bai-14/">Bài 14</a><a href="../bai-16/">Bài 16</a></nav></div>

=== "Khám phá kiến thức"

    Biết một vị trí xuất phát và hướng chuyển động, ta mô tả đường thẳng bằng một tham số. Đường thẳng vô hạn, đoạn thẳng và chuyển động thực tế khác miền tham số. Ôn vectơ khác 0, tích vô hướng/có hướng và giải hệ hai ẩn.

    ### 1.1. Điểm gốc và một tham số
    
    M chạy trên đường qua A theo hướng u≠0 khi $\overrightarrow{AM}=t\vec u$, t chạy toàn R. Như vậy ba tọa độ cùng dùng một t.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHV-B15-LINE-R02.svg" alt="Đường qua A, vectơ u và các điểm A+tu ứng với t âm, 0 và dương."/><figcaption>Đọc điểm gốc, hướng, tham số. Đổi t làm đổi vị trí trên một đường.</figcaption></figure>
    
    **Vận dụng.** Qua A(−1,2,0), u=(3,0,−2). Viết tham số và điểm ứng với t=2.
    
    <span data-ped-first-try="1" data-outcome-id="G12-CHV-B15-O01" data-thpt-first-try-id="THPT-G12-B15-TRY01" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $(x,y,z)=(-1+3t,2,-2t)$; t=2 cho (5,2,−4).
    
    <span data-thpt-help-id="HELP-G12-B15-TRY01" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Điểm gốc tại t=0; giữ đúng tọa độ cố định. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b15-c01); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b15-p01). Sau đó tự làm lại Vận dụng.

    ### 1.2. Qua hai điểm: hướng là hiệu tọa độ
    
    Nếu A≠B thì AB khác 0. Đường thẳng AB lấy A+t(B−A); đoạn AB đúng khi 0≤t≤1 với cách chọn hướng B−A.
    
    **Vận dụng.** A(2,1,−1), B(−1,4,2). Viết tham số đoạn AB và trung điểm.
    
    <span data-ped-first-try="2" data-outcome-id="G12-CHV-B15-O02" data-thpt-first-try-id="THPT-G12-B15-TRY02" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $(2-3t,1+3t,-1+3t)$, $0\le t\le1$; t=1/2 cho (1/2,5/2,1/2).
    
    <span data-thpt-help-id="HELP-G12-B15-TRY02" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không áp miền [0,1] nếu đã tùy ý rút gọn hướng mà không đổi thang tham số. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b15-c02); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b15-p02). Sau đó tự làm lại Vận dụng.

    ### 1.3. Chính tắc và thành phần hướng bằng 0
    
    Chia từng hiệu tọa độ cho thành phần u để tìm t chỉ khi mẫu khác 0. Nếu một thành phần bằng 0 thì giữ tọa độ cố định và dùng tham số, không viết phân thức chia 0.
    
    **Vận dụng.** Qua A(1,3,−2), u=(2,0,4). Có phương trình chính tắc ba phân thức theo SGK không?
    
    <span data-ped-first-try="3" data-outcome-id="G12-CHV-B15-O03" data-thpt-first-try-id="THPT-G12-B15-TRY03" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Không, vì b=0. Dùng $(x,y,z)=(1+2t,3,-2+4t)$ hoặc hệ tương đương y=3 và $(x-1)/2=(z+2)/4$.
    
    <span data-thpt-help-id="HELP-G12-B15-TRY03" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không ghi (y−3)/0; hệ hai phân thức là dạng tương đương, không phải chính tắc đầy đủ SGK. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b15-c03); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b15-p03). Sau đó tự làm lại Vận dụng.

    ### 1.4. Kiểm một điểm với cùng tham số
    
    Điểm M thuộc d nếu tồn tại duy nhất một t thỏa cả ba tọa độ. Chọn tọa độ có hệ số khác 0 để tìm t, kiểm hai tọa độ còn lại.
    
    **Vận dụng.** d=(2+t,−1+2t,4−t). Xét M(5,5,0).
    
    <span data-ped-first-try="4" data-outcome-id="G12-CHV-B15-O04" data-thpt-first-try-id="THPT-G12-B15-TRY04" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Từ x suy t=3; y=5 đúng nhưng z=1≠0. M không thuộc d.
    
    <span data-thpt-help-id="HELP-G12-B15-TRY04" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Một tọa độ sai đủ bác bỏ; không chọn t khác nhau. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b15-c04); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b15-p04). Sau đó tự làm lại Vận dụng.

    ### 1.5. Vuông góc không đồng nghĩa với cắt nhau
    
    Trong không gian, góc giữa hai đường thẳng là góc giữa hai đường song song với chúng qua cùng một điểm (góc nhỏ hơn hoặc bằng 90°). Hai đường vuông góc khi u·v=0, kể cả khi chúng chéo nhau.
    
    **Vận dụng.** d₁=(t,0,0), d₂=(0,s,3). Hai đường có vuông góc không? Có giao không?
    
    <span data-ped-first-try="5" data-outcome-id="G12-CHV-B15-O05" data-thpt-first-try-id="THPT-G12-B15-TRY05" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** u=(1,0,0), v=(0,1,0), dot=0; hai đường vuông góc. z lần lượt 0 và 3 nên không giao; chúng chéo nhau.
    
    <span data-thpt-help-id="HELP-G12-B15-TRY05" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Tách hai câu hỏi: góc giữa hướng và vị trí tương đối. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b15-c05); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b15-p05). Sau đó tự làm lại Vận dụng.

    ### 1.6. Bốn vị trí tương đối
    
    Nếu u,v cùng phương, kiểm một điểm để phân biệt trùng và song song. Nếu không cùng phương, hai đường cắt khi đồng phẳng: $(B-A)\cdot[u,v]=0$; khác 0 thì chéo. Cũng có thể giải hệ hai tham số và kiểm tọa độ thứ ba.
    
    **Vận dụng.** d₁=(1+t,2t,0), d₂=(2,s,1−s). Phân loại.
    
    <span data-ped-first-try="6" data-outcome-id="G12-CHV-B15-O06" data-thpt-first-try-id="THPT-G12-B15-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Từ x, t=1; y cho s=2; z₂=−1≠0. u=(1,2,0),v=(0,1,−1) không cùng phương, nên chéo.
    
    <span data-thpt-help-id="HELP-G12-B15-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không kết luận cắt chỉ khi hai phương trình đầu thỏa. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b15-c06); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b15-p06). Sau đó tự làm lại Vận dụng.

    ### 1.7. Giao đường–mặt và miền tham số
    
    Thế A+tu vào phương trình P cho phương trình bậc nhất theo t. Hệ số là n·u; nếu khác 0 có giao duy nhất; bằng 0 thì kiểm hằng số phân biệt nằm trong và song song.
    
    **Vận dụng.** d=(1+t,2−t,−2+3t), P:z=4. Tìm giao, điểm đó có nằm trên đoạn từ t=0 đến t=1 không?
    
    <span data-ped-first-try="7" data-outcome-id="G12-CHV-B15-O07" data-thpt-first-try-id="THPT-G12-B15-TRY07" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** −2+3t=4 ⇒ t=2; giao (3,0,4) nhưng không thuộc đoạn.
    
    <span data-thpt-help-id="HELP-G12-B15-TRY07" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Sau khi giải t, kiểm miền thời gian/đoạn theo mô hình. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b15-c07); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b15-p07). Sau đó tự làm lại Vận dụng.

    ### 1.8. Tầm nhìn bị che bởi đĩa tròn
    
    Để tia nhìn từ A đến B bị tấm đĩa phẳng che, điểm giao phải nằm trên đoạn AB (thường kiểm 0<t<1 nếu A,B không nằm trên màn), và trong đĩa kể cả biên. Chỉ giải giao với mặt phẳng chưa đủ.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHV-B15-OCCLUSION-R02.svg" alt="Đoạn AB xuyên mặt phẳng, điểm H có thể nằm ngoài đĩa."/><figcaption>H phải thuộc cả đoạn và đĩa; phần kéo dài vô hạn không đủ kết luận che khuất.</figcaption></figure>
    
    **Vận dụng.** A(0,0,−4), B(6,2,4). Tấm đĩa tâm O, bán kính 3, nằm trong z=0. Có che khuất B không?
    
    <span data-ped-first-try="8" data-outcome-id="G12-CHV-B15-O08" data-thpt-first-try-id="THPT-G12-B15-TRY08" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** A+t(B−A)=(6t,2t,−4+8t). z=0 cho t=1/2, H(3,1,0). OH²=10>9, H ngoài đĩa; không che.
    
    <span data-thpt-help-id="HELP-G12-B15-TRY08" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Kiểm cả t lẫn bình phương khoảng cách đến tâm đĩa. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b15-c08); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b15-p08). Sau đó tự làm lại Vận dụng.

=== "Kiến thức SGK"

    ### 2.1. Phương trình đường thẳng
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Phương trình đường thẳng.</strong><p>Vectơ u=(a,b,c)≠0 có giá song song hoặc trùng d là chỉ phương. Qua A(x₀,y₀,z₀), \(x=x_0+at,y=y_0+bt,z=z_0+ct\), \(t\in\mathbb R\). Nếu abc≠0 thì chính tắc \((x-x_0)/a=(y-y_0)/b=(z-z_0)/c\). Nếu có thành phần 0, dùng tham số. Qua hai điểm phân biệt chọn u=B−A. Đường qua A vuông góc P nhận pháp tuyến P làm chỉ phương.</p></div>

    ### 2.2. Hai đường thẳng vuông góc
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Hai đường thẳng vuông góc.</strong><p>\(d_1\perp d_2\Leftrightarrow\vec u_1\cdot\vec u_2=0\). Điều kiện không yêu cầu giao điểm: SGK có ví dụ vuông góc và chéo nhau. Góc đường thẳng không phụ thuộc đổi dấu vectơ chỉ phương.</p></div>

    ### 2.3. Vị trí tương đối giữa hai đường thẳng
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Vị trí tương đối giữa hai đường thẳng.</strong><p>Cho d₁ qua A hướng u, d₂ qua B hướng v. Nếu \([u,v]=0\) thì cùng phương: A thuộc d₂ ⇒ trùng, nếu không ⇒ song song phân biệt. Nếu \([u,v]\ne0\): \((B-A)\cdot[u,v]=0\) ⇒ cắt, khác 0 ⇒ chéo. Hoặc giải hệ \(A+tu=B+sv\); với khác hướng, nghiệm duy nhất ⇒ cắt, vô nghiệm ⇒ chéo. Giao đường–mặt: thế A+tu vào P, kiểm hệ số \(n\cdot u\) và hằng số. Với đoạn AB dùng u=B−A và \(0\le t\le1\).</p></div>

=== "Ví dụ"

    ### 3.1. Tham số
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B15-01"><p><strong>Đề bài:</strong> M₀=(1,2,3),u=(2,−1,1). Viết phương trình.</p><p><strong>Phân tích:</strong> M=M₀+tu.</p><p><strong>Lời giải:</strong> \((x,y,z)=(1+2t,2-t,3+t)\).</p><p><strong>Kiểm lại:</strong> t=0 cho M₀, t=1 cho (3,1,4).</p></div>

    ### 3.2. Qua hai điểm
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B15-02"><p><strong>Đề bài:</strong> A(1,0,−1),B(3,2,1). Lập AB.</p><p><strong>Phân tích:</strong> Chọn u=B−A=(2,2,2).</p><p><strong>Lời giải:</strong> \((1+2t,2t,-1+2t)\).</p><p><strong>Kiểm lại:</strong> t=1 cho B.</p></div>

    ### 3.3. Dạng chính tắc
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B15-03"><p><strong>Đề bài:</strong> Qua (1,−2,3),u=(2,1,−1).</p><p><strong>Phân tích:</strong> Cả ba thành phần khác 0.</p><p><strong>Lời giải:</strong> \((x-1)/2=(y+2)/1=(z-3)/(-1)\).</p><p><strong>Kiểm lại:</strong> Các phân thức cùng một tham số.</p></div>

    ### 3.4. Kiểm điểm
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B15-04"><p><strong>Đề bài:</strong> d=(1+t,2−2t,3+t), M(3,−2,5).</p><p><strong>Phân tích:</strong> Từ x tìm t.</p><p><strong>Lời giải:</strong> t=2 cho y=−2,z=5; M thuộc d.</p><p><strong>Kiểm lại:</strong> Dùng cùng t.</p></div>

    ### 3.5. Vuông góc theo hướng
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B15-05"><p><strong>Đề bài:</strong> u=(1,1,0),v=(1,−1,0).</p><p><strong>Phân tích:</strong> Tích vô hướng.</p><p><strong>Lời giải:</strong> \(u\cdot v=1-1=0\), hai đường nhận chúng làm hướng là vuông góc.</p><p><strong>Kiểm lại:</strong> Chưa biết cắt hay chéo nếu không biết điểm gốc.</p></div>

    ### 3.6. Chéo nhau
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B15-06"><p><strong>Đề bài:</strong> d₁=(t,0,t), d₂=(0,s,1−s).</p><p><strong>Phân tích:</strong> Xét hệ giao.</p><p><strong>Lời giải:</strong> t=s=0 từ x,y nhưng z khác nhau; u và v không cùng phương, nên chéo.</p><p><strong>Kiểm lại:</strong> Không nhầm chéo với song song.</p></div>

    ### 3.7. Giao đường–mặt
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B15-07"><p><strong>Đề bài:</strong> d=(t,1,2t), P:x+z−6=0.</p><p><strong>Phân tích:</strong> Thế tọa độ tham số.</p><p><strong>Lời giải:</strong> \(3t=6\), t=2, giao (2,1,4).</p><p><strong>Kiểm lại:</strong> Thay vào cả d và P.</p></div>

    ### 3.8. Tấm đĩa chắn tầm nhìn
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B15-R02-08"><p><strong>Đề bài:</strong> A(1,1,−2), B(3,−1,2), đĩa tâm O bán kính 3 trong z=0.</p><p><strong>Phân tích:</strong> Dùng đoạn A+t(B−A), không chỉ đường vô hạn.</p><p><strong>Lời giải:</strong> t=1/2 cho H(2,0,0), \(OH^2=4&lt;9\), t nằm trong (0,1), nên chắn.</p><p><strong>Kiểm lại:</strong> Nếu H ngoài đĩa hoặc t nằm ngoài đoạn thì không chắn.</p></div>

    ### 3.9. Hai vật có va chạm không?
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B15-R02-09"><p><strong>Đề bài:</strong> A=(0,0,0) chuyển động u=(2,0,0), B=(4,−3,0) chuyển động v=(0,1,0), cùng xuất phát t=0.</p><p><strong>Phân tích:</strong> Giao quỹ đạo chưa đủ, phải đến cùng thời điểm.</p><p><strong>Lời giải:</strong> Giao tại (4,0,0) khi vật A t=2, vật B t=3; không va chạm.</p><p><strong>Kiểm lại:</strong> Cả hai thời gian không âm nhưng khác nhau.</p></div>

    ### 3.10. Mặt phẳng chứa hai đường cắt
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B15-R02-10"><p><strong>Đề bài:</strong> d₁ qua (1,1,0) hướng (1,0,1), d₂ qua cùng điểm hướng (0,2,1).</p><p><strong>Phân tích:</strong> Hai hướng không cùng phương.</p><p><strong>Lời giải:</strong> \(n=(-2,-1,2)\), \(-2(x-1)-(y-1)+2z=0\), hay \(-2x-y+2z+3=0\).</p><p><strong>Kiểm lại:</strong> Thỏa điểm chung, dot với mỗi hướng bằng 0.</p></div>

    ### 3.11. Đường qua M cắt và vuông góc d
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B15-R02-11"><p><strong>Đề bài:</strong> M(2,3,1), d=(t,0,1). Tìm đường qua M, cắt d vuông góc.</p><p><strong>Phân tích:</strong> Gọi H(t,0,1) thuộc d; MH·u=0.</p><p><strong>Lời giải:</strong> \((t-2,-3,0)\cdot(1,0,0)=0\) ⇒ t=2, H(2,0,1). Đường \((2,3+s,1)\), s∈R.</p><p><strong>Kiểm lại:</strong> M khác H, hướng vuông góc và giao tại H.</p></div>

    ### 3.12. Đường nằm trên mặt phẳng và vuông góc đường khác
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B15-R02-12"><p><strong>Đề bài:</strong> P:z=0, d=(1+t,2+t,t). Tìm đường trong P cắt và vuông góc d.</p><p><strong>Phân tích:</strong> Giao d,P tại t=0; hướng w phải vuông góc nP và u.</p><p><strong>Lời giải:</strong> w=(1,-1,0), đường \((1+s,2-s,0)\), vì w·(1,1,1)=0.</p><p><strong>Kiểm lại:</strong> Mọi điểm nằm P; giao tại (1,2,0).</p></div>

=== "Lỗi thường gặp"

    ### 4.1. Điểm gốc và một tham số
    
    ??? tip "Cách tự sửa"
    
        Điểm gốc tại t=0; giữ đúng tọa độ cố định. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b15-c01); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b15-p01). Sau đó tự làm lại Vận dụng.

    ### 4.2. Qua hai điểm: hướng là hiệu tọa độ
    
    ??? tip "Cách tự sửa"
    
        Không áp miền [0,1] nếu đã tùy ý rút gọn hướng mà không đổi thang tham số. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b15-c02); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b15-p02). Sau đó tự làm lại Vận dụng.

    ### 4.3. Chính tắc và thành phần hướng bằng 0
    
    ??? tip "Cách tự sửa"
    
        Không ghi (y−3)/0; hệ hai phân thức là dạng tương đương, không phải chính tắc đầy đủ SGK. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b15-c03); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b15-p03). Sau đó tự làm lại Vận dụng.

    ### 4.4. Kiểm một điểm với cùng tham số
    
    ??? tip "Cách tự sửa"
    
        Một tọa độ sai đủ bác bỏ; không chọn t khác nhau. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b15-c04); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b15-p04). Sau đó tự làm lại Vận dụng.

    ### 4.5. Vuông góc không đồng nghĩa với cắt nhau
    
    ??? tip "Cách tự sửa"
    
        Tách hai câu hỏi: góc giữa hướng và vị trí tương đối. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b15-c05); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b15-p05). Sau đó tự làm lại Vận dụng.

    ### 4.6. Bốn vị trí tương đối
    
    ??? tip "Cách tự sửa"
    
        Không kết luận cắt chỉ khi hai phương trình đầu thỏa. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b15-c06); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b15-p06). Sau đó tự làm lại Vận dụng.

    ### 4.7. Giao đường–mặt và miền tham số
    
    ??? tip "Cách tự sửa"
    
        Sau khi giải t, kiểm miền thời gian/đoạn theo mô hình. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b15-c07); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b15-p07). Sau đó tự làm lại Vận dụng.

    ### 4.8. Tầm nhìn bị che bởi đĩa tròn
    
    ??? tip "Cách tự sửa"
    
        Kiểm cả t lẫn bình phương khoảng cách đến tâm đĩa. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b15-c08); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b15-p08). Sau đó tự làm lại Vận dụng.

    [Core Bài 15](../luyen-tap/#b15-core) · [Luyện tập và Tự luận](../luyen-tap/#b15-practice) · [Hỗ trợ khi gặp khó khăn](../luyen-tap/#b15-help) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/)

*Nguồn đối chiếu: SGK Toán 12 Kết nối tri thức, Tập hai, trang in 41–49; SBT trang in 26–29 (đã đọc; trang 25 chưa định vị).*
