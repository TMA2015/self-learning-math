# Bài 22. Hai đường thẳng vuông góc

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VII · SGK KNTT TẬP 2</p><p class="thpt-r4-lead">Chuyển hai phương về chung một điểm, đọc góc không tù và chứng minh vuông góc kể cả khi hai đường chéo nhau.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương VII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Hai thanh của một khung nhà có thể không gặp nhau nhưng phương của chúng vẫn tạo góc vuông. Muốn kiểm tra, ta không kéo dài hai đường đến một giao điểm tưởng tượng: ta chuyển song song các phương về một điểm chung. Ôn quan hệ song song ở Chương IV, góc giữa hai đường trong mặt phẳng và định lí côsin.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B22-01_R00.svg" alt="Hai đường chéo nhau được chuyển về chung điểm O; dấu vuông ở O là quan hệ giữa hai phương, không phải giao điểm của hai đường gốc."><figcaption>Đọc hình: Hai đường chéo nhau được chuyển về chung điểm O; dấu vuông ở O là quan hệ giữa hai phương, không phải giao điểm của hai đường gốc. Không suy góc hoặc độ dài từ nét phối cảnh.</figcaption></figure>

    ### 1.1. Góc giữa hai phương không phụ thuộc vị trí

    Qua O, dựng hai đường cùng phương với a,b. Hai tia đã chọn có thể tạo góc tù; đảo một tia cho góc bù. Góc giữa **đường thẳng** lấy góc không tù.

    **Vận dụng — Tự thử trước Core.** Hai tia biểu diễn phương của hai đường chéo nhau tạo góc \(162^\circ\). Tính góc giữa hai đường và nêu cách chọn lại tia.

    <span data-ped-first-try="1" data-outcome-id="G11-B22-ANGLE_LINES" data-thpt-first-try-id="THPT-G11-B22-TRY01" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Góc giữa hai đường là \(180^\circ-162^\circ=18^\circ\). Đổi hướng một tia sẽ cho góc 18°, nhưng đường chứa tia không đổi.

    <span data-thpt-help-id="HELP-G11-B22-TRY01" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Lấy luôn góc tù giữa hai tia.

        **Tự sửa:** Lấy góc nhỏ trong hai góc bù. Ôn mục 2.1. [Luyện lại câu B22-C01](../luyen-tap/?item=THPT-G11-CHVII-B22-C01).

    ### 1.2. Vuông góc theo phương không bắt buộc giao nhau

    Trong lập phương \(ABCD.A'B'C'D'\), đường chéo đáy AC và cạnh bên \(BB'\) không đồng phẳng. Ta có thể chuyển \(BB'\) về \(AA'\) cùng phương rồi xét góc tại A.

    **Vận dụng — Tự thử trước Core.** Trong lập phương, xác định quan hệ giữa \(AC\) và \(BB'\), giải thích tại sao không cần giao điểm.

    <span data-ped-first-try="2" data-outcome-id="G11-B22-PERP_SKEW" data-thpt-first-try-id="THPT-G11-B22-TRY02" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(BB'\parallel AA'\). Mặt \(AA'CC'\) là hình chữ nhật (do các cạnh đứng vuông góc đáy), nên \(AC\perp AA'\); suy ra \((AC,BB')=90^\circ\). Hai đường gốc chéo nhau vẫn vuông góc theo định nghĩa.

    <span data-thpt-help-id="HELP-G11-B22-TRY02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Đòi hai đường vuông góc phải cắt nhau.

        **Tự sửa:** Dựng đường song song tới một điểm trên AC và dùng góc tại đó. [Luyện lại câu B22-C02](../luyen-tap/?item=THPT-G11-CHVII-B22-C02).

    ### 1.3. Thay một đường bằng đường cùng phương

    Trong hình hộp, cạnh song song có cùng phương. Góc giữa hai đường không đổi nếu thay một đường bằng đường song song hoặc trùng với nó. Đây là công cụ biến bài toán không gian thành tam giác phẳng.

    **Vận dụng — Tự thử trước Core.** Trong lập phương \(ABCD.A'B'C'D'\), tính góc giữa \(A'C'\) và \(CD\).

    <span data-ped-first-try="3" data-outcome-id="G11-B22-PARALLEL_DIRECTION" data-thpt-first-try-id="THPT-G11-B22-TRY03" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(A'C'\parallel AC\), \(CD\parallel AB\). Vậy góc cần tìm bằng góc giữa AC và AB. Vì ABCD là hình vuông, \(\angle CAB=45^\circ\).

    <span data-thpt-help-id="HELP-G11-B22-TRY03" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** So ngay góc ở hai cạnh khác mặt bằng mắt.

        **Tự sửa:** Tìm cạnh tương ứng cùng phương rồi chỉ rõ tam giác chứa góc. [Luyện lại câu B22-C03](../luyen-tap/?item=THPT-G11-CHVII-B22-C03).

    ### 1.4. Chứng minh thay vì đo hình phối cảnh

    Ở hình chiếu song song Chương IV, góc và độ dài có thể biến dạng. Muốn chứng minh vuông góc, cần giả thiết hình học: tam giác vuông, hình chữ nhật, đường trung bình hoặc định lý đã học.

    **Vận dụng — Tự thử trước Core.** Tứ diện ABCD có tam giác ABC vuông tại A. M,N là trung điểm BD,CD. Một bạn kết luận \(AB\perp MN\) vì tam giác ABC vuông tại A. Hãy kiểm kết luận ấy bằng cách xác định phương của MN.

    <span data-ped-first-try="4" data-outcome-id="G11-B22-PROOF_CONTEXT" data-thpt-first-try-id="THPT-G11-B22-TRY04" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Trong tam giác BCD, \(MN\parallel BC\) vì M,N là trung điểm BD,CD. Do đó \((AB,MN)=(AB,BC)\). Tam giác ABC vuông tại A, nên góc ABC nhọn và không bằng 90°. Vậy AB không vuông góc MN. Giả thiết chỉ cho \(AB\perp AC\), không cho AB vuông góc cạnh huyền BC.

    <span data-thpt-help-id="HELP-G11-B22-TRY04" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Nhầm cạnh huyền với cạnh góc vuông.

        **Tự sửa:** Chỉ đánh dấu vuông góc đúng đỉnh và dùng đường trung bình đúng tam giác. [Luyện lại câu B22-C04](../luyen-tap/?item=THPT-G11-CHVII-B22-C04).

=== "Kiến thức SGK"

    ### 2.1. Góc giữa hai đường thẳng

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khái niệm.</strong> Cho hai đường thẳng a,b trong không gian. Qua điểm O bất kì kẻ a',b' lần lượt song song hoặc trùng với a,b. Góc giữa a,b, kí hiệu \((a,b)\), là góc không tù giữa a',b'. Nếu hai đường cùng phương, góc bằng 0°.</div>
    
    Góc luôn thỏa \(0^\circ\le(a,b)\le90^\circ\). Tịnh tiến cả hai phương từ O đến O' không đổi góc: có thể chọn các đoạn cùng hướng và cùng độ dài trên hai cặp đường song song; tam giác tạo bởi hai đoạn và đoạn nối đầu mút có ba cạnh tương ứng bằng nhau (phép tịnh tiến), nên góc không đổi.
    
    **Cách dựng:** Nếu a,b cắt nhau thì lấy góc nhỏ tại giao điểm. Nếu chéo nhau, chọn một điểm trên a, dựng đường b' qua đó cùng phương b rồi tính góc trong mặt phẳng chứa a và b'. Nếu hai tia tạo góc \(\alpha\), góc đường là \(\min(\alpha,180^\circ-\alpha)\). Dùng giả thiết hình phẳng, định lí côsin hoặc tam giác vuông, không đo hình phối cảnh.

    ### 2.2. Hai đường thẳng vuông góc

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa.</strong> Hai đường thẳng a,b vuông góc, kí hiệu \(a\perp b\), khi \((a,b)=90^\circ\).</div>
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất.</strong> Nếu a' song song hoặc trùng a, b' song song hoặc trùng b thì \((a,b)=(a',b')\). Đặc biệt \(a\perp b\) và a' cùng phương a suy ra \(a'\perp b\).</div>
    
    Hai đường vuông góc có thể cắt nhau hoặc chéo nhau. Hai đường cùng vuông góc với một đường thứ ba không nhất thiết song song: ngay trong một mặt phẳng ngang, hai hướng vuông góc với phương đứng có thể vuông góc nhau. Phải có chứng cứ cùng phương mới kết luận song song.

=== "Ví dụ"

    ### 3.1. Đưa đường chéo nhau về tam giác phẳng

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B22-R02-01"><p><strong>Đề bài:</strong> Trong hình lập phương \(ABCD.A'B'C'D'\), tính \((AB',DC)\).</p><p><strong>Phân tích:</strong> Dùng DC cùng phương AB. Tam giác ABB' vuông cân tại B.</p><p><strong>Lời giải:</strong> \(DC\parallel AB\), nên \((AB',DC)=(AB',AB)=\angle B'AB\). Vì \(AB=BB'\) và \(AB\perp BB'\), góc bằng \(45^\circ\).</p><p><strong>Kiểm lại:</strong> AB' và DC không cần cắt nhau; ta đã dựng được góc đúng phương.</p></div>

    ### 3.2. Góc giữa hai tia và hai đường

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B22-R02-02"><p><strong>Đề bài:</strong> Hai phương được biểu diễn bằng hai tia tạo góc \(107^\circ\). Tính góc giữa đường.</p><p><strong>Phân tích:</strong> Góc đường không vượt 90°.</p><p><strong>Lời giải:</strong> \(180^\circ-107^\circ=73^\circ\).</p><p><strong>Kiểm lại:</strong> 73° nằm trong đoạn [0°,90°].</p></div>

    ### 3.3. Đường trung bình trong tứ diện

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B22-R02-03"><p><strong>Đề bài:</strong> Tứ diện đều ABCD, E,F là trung điểm AB,AC. Tính góc EF với CD.</p><p><strong>Phân tích:</strong> Trong ABC, EF là đường trung bình; đưa góc về mặt BCD.</p><p><strong>Lời giải:</strong> \(EF\parallel BC\), nên \((EF,CD)=(BC,CD)=60^\circ\) vì BCD đều.</p><p><strong>Kiểm lại:</strong> Tứ diện đều bảo đảm tất cả các tam giác mặt đều; không dùng giả thiết đó cho tứ diện tùy ý.</p></div>

    ### 3.4. Hai đường chéo mặt ở các mặt song song

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B22-R02-04"><p><strong>Đề bài:</strong> Trong lập phương, chứng minh \(AC\perp B'D'\).</p><p><strong>Phân tích:</strong> Chuyển đường chéo mặt trên về đường chéo mặt dưới.</p><p><strong>Lời giải:</strong> \(B'D'\parallel BD\). Hai đường chéo AC,BD của đáy hình vuông vuông góc, nên \(AC\perp B'D'\).</p><p><strong>Kiểm lại:</strong> Hai đường ở hai mặt song song khác nhau, không giao nhau, nhưng quan hệ theo phương đúng.</p></div>

    ### 3.5. Phản ví dụ về đường thứ ba

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B22-R02-05"><p><strong>Đề bài:</strong> Trong lập phương, AB và AD cùng vuông góc AA'. Chúng có song song không?</p><p><strong>Phân tích:</strong> Kiểm chính đáy hình vuông.</p><p><strong>Lời giải:</strong> \(AB\perp AA'\), \(AD\perp AA'\); tuy nhiên \(AB\perp AD\) và cắt nhau tại A, không song song.</p><p><strong>Kiểm lại:</strong> Đây là phản ví dụ ngay cả khi hai đường cùng nằm trong một mặt vuông góc phương đứng.</p></div>

=== "Lỗi thường gặp"

    <span data-thpt-help-id="HELP-G11-CHVII-B22-01" hidden></span>

    ??? tip "4.1. Cho rằng vuông góc phải cắt nhau"

        **Vì sao sai:** Vuông góc là quan hệ góc giữa hai phương; đường chéo nhau vẫn có thể vuông góc.

        **Tự sửa:** Dựng đường cùng phương qua một điểm và dùng định nghĩa 2.2. [Luyện lại câu B22-C02](../luyen-tap/?item=THPT-G11-CHVII-B22-C02).

    <span data-thpt-help-id="HELP-G11-CHVII-B22-02" hidden></span>

    ??? tip "4.2. Lấy góc tù"

        **Vì sao sai:** Góc đường là góc không tù giữa hai đường cùng phương.

        **Tự sửa:** Ôn 2.1, thử lấy góc bù của 156°. [Luyện lại câu B22-C01](../luyen-tap/?item=THPT-G11-CHVII-B22-C01).

    <span data-thpt-help-id="HELP-G11-B22-03" hidden></span>

    ??? tip "4.3. Tin nét vẽ phối cảnh"

        **Vì sao sai:** Hình biểu diễn không bảo toàn tổng quát góc.

        **Tự sửa:** Dùng cạnh song song hoặc định lý hình phẳng, xem 3.1, 3.3. [Luyện lại câu B22-C03](../luyen-tap/?item=THPT-G11-CHVII-B22-C03).

    <span data-thpt-help-id="HELP-G11-B22-04" hidden></span>

    ??? tip "4.4. Hai đường cùng vuông góc đường thứ ba rồi suy song song"

        **Vì sao sai:** Không có tính chất này trong không gian.

        **Tự sửa:** Xem phản ví dụ 3.5 và kiểm cùng phương. [Luyện lại câu B22-P03](../luyen-tap/?item=THPT-G11-CHVII-B22-P03).

    **Học tiếp:** [Core và Luyện tập](../luyen-tap/) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/) · [Tự luận Chương VII](../../../../thu-vien/tu-luan-g11-chuong-vii/).

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập hai, Bài 22 (trang in 27–30).</p>
