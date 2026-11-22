# Temp_ · SGK Toán 11 Chương VII B22–B27 · một gói review độc lập Delta-C

ROLE: REVIEW_COPY_NOT_LEARNER_SOURCE
BRANCH: authoring/sgk-g11-chvii-b22-b27-r02-20261122
Q18_RECEIPT_PATH: prototypes/thpt/ux795/G11_CHVII_B22_B27_SGK_AUTHORING_Q18_20261122.md
Q18_RECEIPT_BLOB: 736f5680b5d2ab32b30346832940d23cfcb068da
PRIVATE_RD1: NOT_INCLUDED
MODE: AUTHORING ONLY, no new independent verdict

## Prompt review (4 câu)

1. Phản biện độc lập phần DELTA_C của Bài 22–27, dùng đúng 5 Permanent Sources THPT v2.1 hiện hành và SGK/SBT KNTT Tập 2 S1; không sử dụng đồng thời bộ v2.0 hoặc coi bản Temp là chuẩn học thuật.
2. Kiểm từng mục SGK, outcome, câu Tự thử, lời giải và ví dụ theo Q01–Q18, D1–D6, PED1–PED6, đặc biệt điều kiện vuông góc hai đường/đường–mặt, tính duy nhất và mặt trung trực, định lí ba đường vuông góc, góc nhị diện, quan hệ hai mặt, dựng đoạn vuông góc chung, chiều cao và thể tích khối xiên/chóp cụt; kiểm hình gốc và phân biệt chứng minh với kiểm số.
3. Trả Academic/PED verdict riêng từng bài/outcome, P0/P1/P2 với ID, chứng cứ S1 trang in, lập luận độc lập và MINIMAL_DELTA; không thay nội dung bank/Written bất biến chỉ vì bản learner được nâng cấp.
4. Ghi SOURCE_RECEIPT đúng sáu Git learner blobs và Q18 receipt blob ở đây; phân biệt PASS lịch sử với bản DELTA_C mới, không tự cấp CONTENT_READY hoặc RELEASE chỉ từ số đếm và tự kiểm.

## Source SHA

| Lesson | Canonical path | Exact Git blob |
| --- | --- | --- |
| B22 | docs/thpt-preview/sgk/lop-11/chuong-vii/bai-22.md | 2051b302fc401ddef460e1e916b334de7fdc8da3 |
| B23 | docs/thpt-preview/sgk/lop-11/chuong-vii/bai-23.md | ccd934a633eb4f18b168b91a696181bebdf4f429 |
| B24 | docs/thpt-preview/sgk/lop-11/chuong-vii/bai-24.md | b80bd0110b9d507c7e35d3a637a2632e30921a75 |
| B25 | docs/thpt-preview/sgk/lop-11/chuong-vii/bai-25.md | e8a6e64fbe3d14acf5f83b83937fe1bbe92cf9be |
| B26 | docs/thpt-preview/sgk/lop-11/chuong-vii/bai-26.md | 10e9e36f1f31514cde634147af9d84c4c93900bc |
| B27 | docs/thpt-preview/sgk/lop-11/chuong-vii/bai-27.md | d2bc0113a3dbb2975b4229902dcd18f24222de54 |

Bản Temp này chỉ là bản sao cho NotebookLM. Sửa học liệu tại đúng canonical path rồi khóa SHA/receipt khi có MINIMAL_DELTA; không đưa bản Temp lên website.


---

## REVIEW SOURCE B22 BEGIN · 2051b302fc401ddef460e1e916b334de7fdc8da3

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


## REVIEW SOURCE B22 END

---

## REVIEW SOURCE B23 BEGIN · ccd934a633eb4f18b168b91a696181bebdf4f429

# Bài 23. Đường thẳng vuông góc với mặt phẳng

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VII · SGK KNTT TẬP 2</p><p class="thpt-r4-lead">Hiểu phương pháp kiểm hai đường cắt nhau, dựng mặt phẳng trung trực, liên hệ vuông góc và song song.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương VII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Một cột đứng phải vuông góc với cả mặt sàn, không chỉ một vạch sơn. Từ Bài 22 ta đã biết kiểm góc giữa hai phương, kể cả khi chúng không gặp. Bài này biến việc kiểm vô số phương trong một mặt thành kiểm hai phương thực sự độc lập.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B23-01_R00.svg" alt="Hai vạch AB và AD cùng ở mặt P và giao nhau tại A; cột AH vuông góc cả AB lẫn AD. Đó là dấu hiệu đủ, chứ không phải dấu vuông phối cảnh."><figcaption>Đọc hình: Hai vạch AB và AD cùng ở mặt P và giao nhau tại A; cột AH vuông góc cả AB lẫn AD. Đó là dấu hiệu đủ, chứ không phải dấu vuông phối cảnh. Không suy góc hoặc độ dài từ nét phối cảnh.</figcaption></figure>

    ### 1.1. Một đường chưa đại diện cho cả mặt phẳng

    Một mặt phẳng chứa nhiều phương khác nhau. Đường d vuông góc một phương trên mặt có thể vẫn nghiêng theo phương khác.

    **Vận dụng — Tự thử trước Core.** Trong hình chữ nhật ABCD, đường AB vuông góc AD. Có thể kết luận \(AB\perp(ABCD)\) không?

    <span data-ped-first-try="1" data-outcome-id="G11-B23-PERP_PLANE_DEF" data-thpt-first-try-id="THPT-G11-B23-TRY01" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Không. AB nằm trong (ABCD), nên không thể vuông góc mọi đường trong mặt, chẳng hạn chính phương AB. AB vuông góc AD chỉ kiểm một phương.

    <span data-thpt-help-id="HELP-G11-B23-TRY01" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Từ một góc vuông suy vuông góc cả mặt.

        **Tự sửa:** Kiểm định nghĩa mọi đường trong mặt. [Luyện lại câu B23-C01](../luyen-tap/?item=THPT-G11-CHVII-B23-C01).

    ### 1.2. Dấu hiệu hai đường cắt nhau

    Hai đường cắt nhau xác định hai phương khác nhau trong cùng một mặt. Phương vuông góc cả hai cũng vuông góc mọi phương của mặt đó. Hai đường song song chỉ kiểm lặp cùng phương.

    **Vận dụng — Tự thử trước Core.** Cho hình chóp S.ABCD, đáy hình thoi không suy biến. Biết \(SA\perp AB\) và \(SA\perp AD\). Chứng minh \(SA\perp BD\).

    <span data-ped-first-try="2" data-outcome-id="G11-B23-TWO_INTERSECT" data-thpt-first-try-id="THPT-G11-B23-TRY02" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** AB,AD cắt nhau ở A và thuộc mặt đáy. Dấu hiệu cho \(SA\perp(ABCD)\). Vì BD thuộc đáy, \(SA\perp BD\).

    <span data-thpt-help-id="HELP-G11-B23-TRY02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Nhảy thẳng sang BD mà chưa chứng minh đường–mặt.

        **Tự sửa:** Nêu hai đường, giao điểm, cùng mặt, dấu hiệu rồi suy hệ quả. [Luyện lại câu B23-C02](../luyen-tap/?item=THPT-G11-CHVII-B23-C02).

    ### 1.3. Phương pháp tuyến và tính chất duy nhất

    Qua một điểm, chỉ có một đường theo phương vuông góc một mặt cho trước. Tương tự chỉ có một mặt qua điểm đó vuông góc với một đường cho trước. Điều này giúp nhận ra mặt phẳng trung trực.

    **Vận dụng — Tự thử trước Core.** AB là đoạn dài 10 cm, I là trung điểm. Mặt (P) qua I vuông góc AB. Với M thuộc (P), \(IM=12\) cm, tính MA,MB.

    <span data-ped-first-try="3" data-outcome-id="G11-B23-PLANE_PROPERTY" data-thpt-first-try-id="THPT-G11-B23-TRY03" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(AI=BI=5\), \(IM\perp AB\). Hai tam giác AIM,BIM vuông tại I. \(MA=MB=\sqrt{5^2+12^2}=13\) cm. Đây là tính chất mặt phẳng trung trực.

    <span data-thpt-help-id="HELP-G11-B23-TRY03" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Dùng một điểm bất kì trên mặt qua I mà không kiểm mặt vuông góc AB.

        **Tự sửa:** Xác định trung điểm và phương vuông góc; kiểm hai tam giác vuông. [Luyện lại câu B23-C04](../luyen-tap/?item=THPT-G11-CHVII-B23-C04).

    ### 1.4. Chuyển quan hệ qua đường hoặc mặt song song

    Đường cùng phương với đường đứng cũng đứng đối với cùng mặt sàn. Hai mặt song song có các phương tương ứng giống nhau, nên pháp tuyến của mặt này cũng là pháp tuyến của mặt kia.

    **Vận dụng — Tự thử trước Core.** Cho \(d\perp(P)\), đường e song song d và hai mặt phân biệt (Q),(P) song song. Chứng minh \(e\perp(Q)\) qua hai bước.

    <span data-ped-first-try="4" data-outcome-id="G11-B23-PARALLEL_TRANSFER" data-thpt-first-try-id="THPT-G11-B23-TRY04" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Từ \(e\parallel d\) và \(d\perp(P)\), suy \(e\perp(P)\). Vì \((P)\parallel(Q)\), suy \(e\perp(Q)\). Không cần e đi qua cùng chân của d.

    <span data-thpt-help-id="HELP-G11-B23-TRY04" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Cho rằng phải dùng chung một chân vuông góc.

        **Tự sửa:** Tách chuyển song song đường và chuyển song song mặt. [Luyện lại câu B23-C03](../luyen-tap/?item=THPT-G11-CHVII-B23-C03).

    ### 1.5. Hai vạch kiểm tra phải đúng mặt và cắt nhau

    Một cột đặt ở sân có hai vạch kiểm tra vuông góc với cột. Cần xác nhận chúng cùng nằm trong mặt sân và có phương khác nhau.

    **Vận dụng — Tự thử trước Core.** Một thanh dựng vuông góc cả hai cạnh đối của một khung chữ nhật nằm trên nền. Người thợ muốn kiểm lại bằng một cạnh kề. Vì sao?

    <span data-ped-first-try="5" data-outcome-id="G11-B23-PRACTICAL_POST" data-thpt-first-try-id="THPT-G11-B23-TRY05" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Hai cạnh đối song song, nên chỉ xác nhận một phương. Một cạnh kề cùng thuộc khung và cắt cạnh đã kiểm; nếu thanh cũng vuông góc cạnh kề thì đủ kết luận nó vuông góc với mặt nền chứa khung.

    <span data-thpt-help-id="HELP-G11-B23-TRY05" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Đếm số vạch mà không kiểm phương.

        **Tự sửa:** Dùng cặp cạnh kề trong cùng mặt, xem 2.1. [Luyện lại câu B23-C05](../luyen-tap/?item=THPT-G11-CHVII-B23-C05).

=== "Kiến thức SGK"

    ### 2.1. Đường thẳng vuông góc với mặt phẳng

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa.</strong> Đường d vuông góc mặt (P), kí hiệu \(d\perp(P)\), nếu d vuông góc với mọi đường thẳng nằm trong (P). Khi đó d cắt (P) tại một điểm gọi là chân đường vuông góc.</div>
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Dấu hiệu.</strong> Nếu \(a,b\subset(P)\), a và b cắt nhau, \(d\perp a,\ d\perp b\), thì \(d\perp(P)\).</div>
    
    Hai phương khác nhau sinh ra mọi phương trong một mặt; một phương vuông góc cả hai là phương pháp tuyến. Hệ quả: một đường vuông góc hai cạnh của một tam giác thì vuông góc mặt tam giác, do đó vuông góc cạnh thứ ba. Không cần d đi qua giao điểm của a,b vì vuông góc được xét theo phương.

    ### 2.2. Tính chất

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất duy nhất.</strong> Qua một điểm cho trước, có đúng một mặt phẳng vuông góc với đường thẳng cho trước; qua một điểm cho trước, có đúng một đường thẳng vuông góc với mặt phẳng cho trước.</div>
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Mặt phẳng trung trực.</strong> Với đoạn AB có trung điểm I, mặt phẳng qua I và vuông góc AB gọi là mặt phẳng trung trực của AB.</div>
    
    Mọi M nằm trên mặt trung trực có MA=MB, do hai tam giác vuông MIA,MIB bằng nhau (M=I kiểm trực tiếp). Ngược lại, nếu MA=MB thì hoặc M=I hoặc trung tuyến MI của tam giác MAB cân tại M vuông góc AB. Nếu MI không nằm trong mặt trung trực, lấy một đường t qua I trong mặt ấy, không trùng MI. Cả MI và t vuông góc AB, nên mặt do MI,t xác định qua I và vuông góc AB. Theo tính duy nhất, mặt đó chính là mặt trung trực, suy MI nằm trong mặt ấy. Vì thế tập hợp điểm cách đều A,B chính là mặt phẳng trung trực.

    ### 2.3. Liên hệ giữa quan hệ song song và quan hệ vuông góc của đường thẳng và mặt phẳng

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Liên hệ.</strong> Hai đường song song: đường nào vuông góc (P) thì đường kia cũng vuông góc (P); hai đường phân biệt cùng vuông góc (P) thì song song. Hai mặt song song: đường vuông góc mặt này cũng vuông góc mặt kia; hai mặt phân biệt cùng vuông góc một đường thì song song.</div>
    
    Nếu \(a\parallel(P)\), \(d\perp(P)\) thì \(a\perp d\) (chọn đường thuộc (P) song song a). Ngược lại, nếu \(a\perp d\), \((P)\perp d\), và a không nằm trong (P), thì \(a\parallel(P)\): nếu a cắt mặt ở O, chọn một đường t qua O thuộc (P) không cùng phương a. Cả a và t vuông góc d; do đó mặt (a,t) qua O vuông góc d. Tính duy nhất cho (a,t)=(P), trái giả thiết a không nằm trong mặt. Vậy a không cắt (P), cũng không thuộc (P).
    
    **Phương pháp giải:** Chỉ rõ mặt đích → chọn hai đường cắt nhau trong mặt → chứng minh từng góc vuông hoặc dùng các tính chất song song đủ giả thiết → kết luận. Nếu hai đường cùng vuông góc một mặt, kiểm phân biệt trước khi gọi song song.

=== "Ví dụ"

    ### 3.1. Chứng minh đường vuông góc một mặt bên

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B23-R02-01"><p><strong>Đề bài:</strong> Hình chóp S.ABCD đáy hình chữ nhật, \(SA\perp(ABCD)\). Chứng minh \(CD\perp(SAD)\).</p><p><strong>Phân tích:</strong> Chọn SA,AD là hai đường cắt nhau thuộc (SAD).</p><p><strong>Lời giải:</strong> \(CD\perp SA\) do SA vuông góc đáy. \(CD\perp AD\) do đáy hình chữ nhật. SA và AD cắt nhau tại A, suy \(CD\perp(SAD)\).</p><p><strong>Kiểm lại:</strong> CD không cần cắt SA; định nghĩa theo phương.</p></div>

    ### 3.2. Hai đường trong mặt nhưng song song

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B23-R02-02"><p><strong>Đề bài:</strong> Trong hình vuông ABCD, AD vuông góc AB và CD. Có suy \(AD\perp(ABCD)\) không?</p><p><strong>Phân tích:</strong> AB,CD song song, không thỏa dấu hiệu.</p><p><strong>Lời giải:</strong> Không. AD nằm trong đáy, nên chỉ kiểm một phương của mặt. Chính đường BC cùng phương AD cũng nằm trong mặt, không vuông góc AD.</p><p><strong>Kiểm lại:</strong> Phản ví dụ cụ thể loại bỏ cách suy thiếu điều kiện.</p></div>

    ### 3.3. Mặt phẳng trung trực

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B23-R02-03"><p><strong>Đề bài:</strong> EF dài 16 cm, I là trung điểm. M thuộc mặt phẳng trung trực EF, \(MI=15\) cm. Tính ME,MF.</p><p><strong>Phân tích:</strong> Dùng hai tam giác vuông với IE=IF=8.</p><p><strong>Lời giải:</strong> \(ME=MF=\sqrt{8^2+15^2}=17\) cm.</p><p><strong>Kiểm lại:</strong> Hai khoảng cách bằng nhau; không lấy 8+15.</p></div>

    ### 3.4. Chứng minh hai mặt song song bằng một đường chung phương vuông góc

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B23-R02-04"><p><strong>Đề bài:</strong> Trong hộp chữ nhật, lấy hai mặt bên đối diện (ABB'A') và (DCC'D'). Chứng minh song song bằng đường AD.</p><p><strong>Phân tích:</strong> Tìm hai đường cắt nhau trong mỗi mặt mà cùng vuông góc AD.</p><p><strong>Lời giải:</strong> \(AD\perp AB, AD\perp AA'\) nên \(AD\perp(ABB'A')\). Tương tự \(AD\perp DC, AD\perp DD'\) nên \(AD\perp(DCC'D')\). Hai mặt phân biệt cùng vuông góc AD, nên song song.</p><p><strong>Kiểm lại:</strong> Các mặt đối diện phân biệt; không kết luận hai mặt trùng là song song.</p></div>

    ### 3.5. Đường cùng phương đứng

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B23-R02-05"><p><strong>Đề bài:</strong> Cho lăng trụ \(ABC.A'B'C'\), biết \(AA'\perp(ABC)\). Chứng minh \(BB'\perp(A'B'C')\).</p><p><strong>Phân tích:</strong> Cạnh bên song song và hai mặt đáy song song.</p><p><strong>Lời giải:</strong> \(BB'\parallel AA'\), suy \(BB'\perp(ABC)\). Hai đáy song song, nên \(BB'\perp(A'B'C')\).</p><p><strong>Kiểm lại:</strong> Đúng cho lăng trụ thỏa giả thiết AA' vuông góc đáy, không cho mọi lăng trụ xiên.</p></div>

=== "Lỗi thường gặp"

    <span data-thpt-help-id="HELP-G11-CHVII-B23-01" hidden></span>

    ??? tip "4.1. Dùng hai đường song song để kết luận đường vuông góc mặt"

        **Vì sao sai:** Hai phương trùng nhau không đủ xác định phương vuông góc cả mặt.

        **Tự sửa:** Xem 2.1 và phản ví dụ 3.2. [Luyện lại câu B23-C02](../luyen-tap/?item=THPT-G11-CHVII-B23-C02).

    <span data-thpt-help-id="HELP-G11-CHVII-B23-02" hidden></span>

    ??? tip "4.2. Chỉ kiểm một đường"

        **Vì sao sai:** Định nghĩa yêu cầu mọi đường thuộc mặt.

        **Tự sửa:** Chọn thêm đường cắt nhau cùng trong mặt. [Luyện lại câu B23-C01](../luyen-tap/?item=THPT-G11-CHVII-B23-C01).

    <span data-thpt-help-id="HELP-G11-B23-03" hidden></span>

    ??? tip "4.3. Bỏ điều kiện phân biệt khi suy song song"

        **Vì sao sai:** Hai đường qua cùng điểm cùng vuông góc một mặt phải trùng.

        **Tự sửa:** Ôn tính chất duy nhất 2.2–2.3. [Luyện lại câu B23-P03](../luyen-tap/?item=THPT-G11-CHVII-B23-P03).

    <span data-thpt-help-id="HELP-G11-B23-04" hidden></span>

    ??? tip "4.4. Nhầm một mặt qua trung điểm với mặt trung trực"

        **Vì sao sai:** Mặt trung trực còn phải vuông góc đoạn.

        **Tự sửa:** Xác định I và đường AB, làm lại 3.3. [Luyện lại câu B23-C04](../luyen-tap/?item=THPT-G11-CHVII-B23-C04).

    **Học tiếp:** [Core và Luyện tập](../luyen-tap/) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/) · [Tự luận Chương VII](../../../../thu-vien/tu-luan-g11-chuong-vii/).

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập hai, Bài 23 (trang in 31–37).</p>


## REVIEW SOURCE B23 END

---

## REVIEW SOURCE B24 BEGIN · b80bd0110b9d507c7e35d3a637a2632e30921a75

# Bài 24. Phép chiếu vuông góc. Góc giữa đường thẳng và mặt phẳng

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VII · SGK KNTT TẬP 2</p><p class="thpt-r4-lead">Dựng chân hình chiếu, nhận diện ảnh suy biến, dùng định lí ba đường vuông góc và tính góc đường–mặt.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương VII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Một cầu thang có độ dài dốc, quãng dịch chuyển ngang và độ tăng cao khác nhau. Phép chiếu vuông góc giúp tách vị trí theo phương vuông góc với mặt nền và phần nằm trong mặt. Cần dùng dấu hiệu đường vuông góc mặt ở Bài 23, hình chiếu song song Bài 14 và lượng giác tam giác vuông.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B24-01_R00.svg" alt="Tam giác AHM vuông tại H. AH là đoạn theo phương vuông góc mặt P; MH là hình chiếu của đoạn AM lên P; góc AMH được đo trong tam giác đó, không lấy góc tại A."><figcaption>Đọc hình: Tam giác AHM vuông tại H. AH là đoạn theo phương vuông góc mặt P; MH là hình chiếu của đoạn AM lên P; góc AMH được đo trong tam giác đó, không lấy góc tại A. Không suy góc hoặc độ dài từ nét phối cảnh.</figcaption></figure>

    ### 1.1. Dựng chân hình chiếu đúng đối tượng

    Qua A có duy nhất một đường vuông góc mặt (P). Giao điểm H là hình chiếu của A. Một điểm có sẵn trong mặt giữ nguyên khi chiếu.

    **Vận dụng — Tự thử trước Core.** Trong hộp chữ nhật \(ABCD.A'B'C'D'\), xác định hình chiếu của D' và A trên (ABCD).

    <span data-ped-first-try="1" data-outcome-id="G11-B24-POINT_PROJECTION" data-thpt-first-try-id="THPT-G11-B24-TRY01" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(DD'\perp(ABCD)\) nên ảnh của D' là D; A nằm trong (ABCD) nên ảnh của A là A.

    <span data-thpt-help-id="HELP-G11-B24-TRY01" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Chiếu một điểm nằm sẵn trong mặt sang điểm khác.

        **Tự sửa:** Dựng đường qua chính điểm theo phương pháp tuyến, lấy giao duy nhất. [Luyện lại câu B24-C01](../luyen-tap/?item=THPT-G11-CHVII-B24-C01).

    ### 1.2. Hình chiếu đoạn, đường và tam giác có thể suy biến

    Hai chân chiếu phân biệt xác định hình chiếu của đường. Nếu cả đường theo phương vuông góc mặt, mọi điểm trên đường cùng chiếu vào một điểm. Khi chiếu một tam giác, chiếu từng đỉnh rồi lấy hình nối các ảnh.

    **Vận dụng — Tự thử trước Core.** Trong hộp chữ nhật, tìm hình chiếu trên (ABCD) của đoạn \(B'D\) và tam giác \(AA'B\).

    <span data-ped-first-try="2" data-outcome-id="G11-B24-LINE_PROJECTION" data-thpt-first-try-id="THPT-G11-B24-TRY02" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** B' chiếu thành B, D bất biến nên đoạn B'D chiếu thành BD. A,A' cùng chiếu thành A, B bất biến nên cả tam giác AA'B chiếu thành đoạn AB, không phải tam giác có diện tích dương.

    <span data-thpt-help-id="HELP-G11-B24-TRY02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Luôn vẽ ảnh đoạn/tam giác vẫn là đoạn/tam giác không suy biến.

        **Tự sửa:** Chiếu từng đỉnh; kiểm các ảnh có trùng hoặc thẳng hàng không. [Luyện lại câu B24-C02](../luyen-tap/?item=THPT-G11-CHVII-B24-C02).

    ### 1.3. Ba đường vuông góc: hình chiếu giúp chứng minh

    Nếu b không vuông góc mặt (P) và b' là hình chiếu của b, một đường a trong (P) vuông góc b khi và chỉ khi a vuông góc b'. Thành phần vuông góc mặt của b luôn vuông góc a; ta chỉ còn phải xét phương của b' trong mặt.

    **Vận dụng — Tự thử trước Core.** Hình chóp S.ABCD đáy chữ nhật, \(SA\perp(ABCD)\). Chứng minh \(SB\perp BC\) bằng hình chiếu SB.

    <span data-ped-first-try="3" data-outcome-id="G11-B24-THREE_PERP" data-thpt-first-try-id="THPT-G11-B24-TRY03" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** S chiếu thành A, B bất biến nên SB có hình chiếu AB. \(BC\perp AB\) theo đáy chữ nhật, suy \(BC\perp SB\) theo định lí ba đường vuông góc.

    <span data-thpt-help-id="HELP-G11-B24-TRY03" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Chọn sai hình chiếu của SB là SA.

        **Tự sửa:** Chiếu hai đầu S,B vào đáy; dùng đường trong mặt vuông góc ảnh. [Luyện lại câu B24-C03](../luyen-tap/?item=THPT-G11-CHVII-B24-C03).

    ### 1.4. Góc đường–mặt là góc với hình chiếu

    Với đường xiên cắt mặt tại M, chọn A ngoài mặt trên đường, H là hình chiếu A. Góc cần tìm là góc giữa AM và MH. Nếu đường vuông góc mặt ảnh là điểm, góc quy ước 90°; nếu nằm trong mặt hoặc song song mặt, góc 0°.

    **Vận dụng — Tự thử trước Core.** Cho \(AH\perp(P)\), \(M\in(P)\), H khác M. Nếu \(\angle MAH=28^\circ\), góc giữa AM và (P) là bao nhiêu?

    <span data-ped-first-try="4" data-outcome-id="G11-B24-LINE_PLANE_ANGLE" data-thpt-first-try-id="THPT-G11-B24-TRY04" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** AHM vuông tại H. Góc giữa AM và mặt là \(\angle AMH=90^\circ-28^\circ=62^\circ\), không phải 28°.

    <span data-thpt-help-id="HELP-G11-B24-TRY04" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Lấy góc với đường cao.

        **Tự sửa:** Đánh dấu góc tại M, dùng tổng hai góc nhọn trong tam giác vuông. [Luyện lại câu B24-C04](../luyen-tap/?item=THPT-G11-CHVII-B24-C04).

    ### 1.5. Độ dốc khác chiều dài dốc

    Trong tam giác vuông AHM, \(\tan\theta=AH/HM\), \(\sin\theta=AH/AM\). Độ dốc là tỉ số cao/ngang, không phải cao/dài dọc dốc.

    **Vận dụng — Tự thử trước Core.** Một lối dốc có chênh cao 0,9 m và quãng ngang 7,2 m. Tính độ dốc và góc với nền gần đúng đến 0,01°.

    <span data-ped-first-try="5" data-outcome-id="G11-B24-ANGLE_APPLICATION" data-thpt-first-try-id="THPT-G11-B24-TRY05" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(\tan\theta=0{,}9/7{,}2=1/8\), nên \(\theta=\arctan(1/8)\approx7{,}13^\circ\) (máy tính ở chế độ độ). Độ dốc 12,5% không bằng 12,5°.

    <span data-thpt-help-id="HELP-G11-B24-TRY05" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Đổi phần trăm độ dốc thành số độ.

        **Tự sửa:** Viết tang trước rồi dùng phím arctan ở chế độ DEG. [Luyện lại câu B24-C05](../luyen-tap/?item=THPT-G11-CHVII-B24-C05).

=== "Kiến thức SGK"

    ### 2.1. Phép chiếu vuông góc

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa.</strong> Phép chiếu song song lên (P) theo phương vuông góc (P) là phép chiếu vuông góc. Ảnh của điểm M là chân H của đường qua M vuông góc mặt (P); nếu M thuộc (P), H=M.</div>
    
    Ảnh của một hình là tập hợp ảnh các điểm của hình. Đường vuông góc (P) chiếu thành một điểm; đường không vuông góc (P) chiếu thành một đường. Đoạn và tam giác chiếu bằng cách lấy ảnh hai hoặc ba đỉnh; ảnh có thể suy biến. Ảnh của tam giác không suy biến là tam giác có ba đỉnh là ba ảnh tương ứng.
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Định lí ba đường vuông góc.</strong> Cho đường b không vuông góc với (P), b' là hình chiếu vuông góc của b trên (P). Với a nằm trong (P), \(a\perp b\) khi và chỉ khi \(a\perp b'\).</div>
    
    **Lập luận:** Nếu b nằm trong hoặc song song (P), b' cùng phương b nên tính chất B22 cho kết quả. Nếu b xiên cắt (P) ở M, lấy A trên b ngoài mặt, H là chân chiếu. Chọn a₀ qua M cùng phương a. Vì \(AH\perp(P)\), đường a₀ vuông góc AH. Nếu a₀ vuông góc MH thì vuông góc hai đường AH,MH cắt nhau trong (AHM), nên vuông góc AM. Ngược lại nếu a₀ vuông góc AM, nó cũng vuông góc AH; AM,AH cắt nhau tại A và thuộc (AHM), suy a₀ vuông góc MH. Thay trở lại phương a. Điều kiện b không vuông góc mặt bảo đảm hình chiếu là đường.

    ### 2.2. Góc giữa đường thẳng và mặt phẳng

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa.</strong> Nếu a vuông góc (P), góc giữa a và (P) bằng 90°. Nếu a không vuông góc (P), góc giữa a và (P) là góc giữa a và hình chiếu của a trên (P), thuộc [0°,90°]. Nếu a nằm trong (P) hoặc song song (P), góc bằng 0°.</div>
    
    Với đường xiên AM, M thuộc (P), H là hình chiếu A, H khác M, ta có \(\theta=\angle AMH\). Tam giác AHM vuông tại H.
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Các hệ thức.</strong>
    \[
    \sin\theta=\frac{AH}{AM},\quad
    \cos\theta=\frac{HM}{AM},\quad
    \tan\theta=\frac{AH}{HM}.
    \]
    </div>
    
    Muốn tính góc: dựng chân H, xác nhận M là giao điểm đường với mặt, chỉ rõ góc ở M, dùng tỉ số lượng giác phù hợp và đổi máy tính sang DEG nếu trả lời theo độ. Góc giữa đường xiên và phương vuông góc mặt là góc phụ với góc đường–mặt. Không dùng tang nếu hình chiếu đoạn có độ dài bằng 0.

=== "Ví dụ"

    ### 3.1. Hình chiếu một tam giác không suy biến

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B24-R02-01"><p><strong>Đề bài:</strong> Cho lăng trụ \(ABC.A'B'C'\) với \(AA'\perp(ABC)\). Tìm hình chiếu của tam giác \(A'BC'\) xuống đáy (ABC).</p><p><strong>Phân tích:</strong> Các cạnh bên song song AA', nên đều vuông góc đáy. Chiếu từng đỉnh theo các phương ấy.</p><p><strong>Lời giải:</strong> A' chiếu về A, C' về C và B giữ nguyên. Phép chiếu song song đưa các đoạn nối và phần tam giác về tam giác ABC (ba ảnh không thẳng hàng).</p><p><strong>Kiểm lại:</strong> Không nhầm A'B với cạnh bên; ảnh của A'B là AB.</p></div>

    ### 3.2. Chứng minh ba đường vuông góc

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B24-R02-02"><p><strong>Đề bài:</strong> Trong hình chóp S.ABC, \(SA\perp(ABC)\), tam giác ABC vuông tại A. Chứng minh \(SB\perp AC\).</p><p><strong>Phân tích:</strong> Hình chiếu của SB là AB; AC thuộc đáy.</p><p><strong>Lời giải:</strong> Do \(AC\perp AB\), theo định lí ba đường vuông góc, \(AC\perp SB\).</p><p><strong>Kiểm lại:</strong> SB không vuông góc đáy vì hình chiếu AB có độ dài khác 0.</p></div>

    ### 3.3. Tính góc từ cạnh đứng và ngang

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B24-R02-03"><p><strong>Đề bài:</strong> Cho \(AH\perp(P)\), \(M\in(P)\), \(AH=7\) cm, \(HM=24\) cm. Tính AM và sin góc AM với mặt.</p><p><strong>Phân tích:</strong> Tam giác AHM vuông tại H; góc cần tìm ở M.</p><p><strong>Lời giải:</strong> \(AM=\sqrt{7^2+24^2}=25\) cm. \(\sin\theta=7/25\).</p><p><strong>Kiểm lại:</strong> AM dài hơn cả AH và HM; sin thuộc (0,1).</p></div>

    ### 3.4. Góc đường chéo khối với đáy

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B24-R02-04"><p><strong>Đề bài:</strong> Hộp chữ nhật \(ABCD.A'B'C'D'\) có \(AB=6,AD=8,AA'=10\). Tính góc của \(AC'\) với đáy (ABCD).</p><p><strong>Phân tích:</strong> Chiếu C' về C, dùng tam giác ACC' vuông tại C.</p><p><strong>Lời giải:</strong> \(AC=\sqrt{6^2+8^2}=10\). \(\tan\angle C'AC=CC'/AC=10/10=1\); góc là \(45^\circ\).</p><p><strong>Kiểm lại:</strong> Hình chiếu là AC, không phải AB. Góc nằm tại A.</p></div>

    ### 3.5. Độ dốc và chiều dài

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B24-R02-05"><p><strong>Đề bài:</strong> Đường dốc tăng cao 2,4 m trên quãng ngang 10 m. Tính góc dốc gần đúng đến 0,01° và chiều dài dốc.</p><p><strong>Phân tích:</strong> Dùng tang cho cao/ngang, Pythagore cho chiều dài.</p><p><strong>Lời giải:</strong> \(\theta=\arctan(2{,}4/10)\approx13{,}50^\circ\). Chiều dài \(\sqrt{10^2+2{,}4^2}\approx10{,}28\) m.</p><p><strong>Kiểm lại:</strong> Góc nhỏ hơn 45° vì cao nhỏ hơn ngang.</p></div>

    ### 3.6. Trường hợp suy biến của hình chiếu

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B24-R02-06"><p><strong>Đề bài:</strong> Đường thẳng d vuông góc (P) tại H; e đi qua H và nằm trong (P). Góc d–mặt và góc d–e bằng bao nhiêu?</p><p><strong>Phân tích:</strong> Dùng riêng quy ước đường vuông góc mặt và định nghĩa đường–mặt.</p><p><strong>Lời giải:</strong> Hình chiếu d là điểm H; góc \((d,(P))=90^\circ\). Vì e nằm trong (P), \(d\perp e\) nên góc d–e bằng 90°.</p><p><strong>Kiểm lại:</strong> Không áp công thức góc giữa đường và hình chiếu nếu ảnh chỉ là điểm.</p></div>

=== "Lỗi thường gặp"

    <span data-thpt-help-id="HELP-G11-CHVII-B24-01" hidden></span>

    ??? tip "4.1. Đo góc với đường cao thay cho mặt"

        **Vì sao sai:** Góc đường–mặt đo với hình chiếu trên mặt (hoặc quy ước 90°).

        **Tự sửa:** Ôn 2.2 và ví dụ 3.3. [Luyện lại câu B24-C04](../luyen-tap/?item=THPT-G11-CHVII-B24-C04).

    <span data-thpt-help-id="HELP-G11-CHVII-B24-02" hidden></span>

    ??? tip "4.2. Nhầm vai ba đường vuông góc"

        **Vì sao sai:** Đường a ở trong mặt, b' là hình chiếu của đường b không vuông góc mặt.

        **Tự sửa:** Chiếu hai điểm của b, rồi dùng định lí ở 2.1. [Luyện lại câu B24-C03](../luyen-tap/?item=THPT-G11-CHVII-B24-C03).

    <span data-thpt-help-id="HELP-G11-B24-03" hidden></span>

    ??? tip "4.3. Coi ảnh mọi đường là đường"

        **Vì sao sai:** Đường theo phương pháp tuyến co thành một điểm.

        **Tự sửa:** Xem hình chiếu điểm và ví dụ 3.6. [Luyện lại câu B24-C02](../luyen-tap/?item=THPT-G11-CHVII-B24-C02).

    <span data-thpt-help-id="HELP-G11-B24-04" hidden></span>

    ??? tip "4.4. Nhầm độ dốc với số đo góc"

        **Vì sao sai:** Độ dốc bằng tang, phải tính góc ngược với đơn vị độ.

        **Tự sửa:** Ôn 3.5, kiểm cao/ngang. [Luyện lại câu B24-C05](../luyen-tap/?item=THPT-G11-CHVII-B24-C05).

    **Học tiếp:** [Core và Luyện tập](../luyen-tap/) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/) · [Tự luận Chương VII](../../../../thu-vien/tu-luan-g11-chuong-vii/).

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập hai, Bài 24 (trang in 38–43).</p>


## REVIEW SOURCE B24 END

---

## REVIEW SOURCE B25 BEGIN · e8a6e64fbe3d14acf5f83b83937fe1bbe92cf9be

# Bài 25. Hai mặt phẳng vuông góc

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VII · SGK KNTT TẬP 2</p><p class="thpt-r4-lead">Dựng góc hai mặt và góc nhị diện, chứng minh mặt vuông góc, nhận diện các hình đứng và hình đều.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương VII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Một cánh cửa quay quanh bản lề, hai mái nhà gặp nhau ở đường nóc, một cột đứng trên sàn: các tình huống ấy đòi hỏi phân biệt góc giữa hai mặt với góc mở theo hai phía cụ thể. Ôn B22 về góc không tù, B23 về đường vuông góc mặt và B24 về hình chiếu.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B25-01_R00.svg" alt="Hai nửa mặt cùng bờ Delta. Tại O trên bờ, OU và OV lần lượt nằm trong hai nửa mặt và vuông góc bờ; góc UOV là góc phẳng nhị diện, còn góc hai mặt là góc nhỏ giữa hai đường chứa hai tia."><figcaption>Đọc hình: Hai nửa mặt cùng bờ Delta. Tại O trên bờ, OU và OV lần lượt nằm trong hai nửa mặt và vuông góc bờ; góc UOV là góc phẳng nhị diện, còn góc hai mặt là góc nhỏ giữa hai đường chứa hai tia. Không suy góc hoặc độ dài từ nét phối cảnh.</figcaption></figure>

    ### 1.1. Vì sao góc hai mặt không vượt 90°?

    Hai mặt phẳng không chọn phía, nên góc giữa chúng được đo bằng góc không tù giữa các đường pháp tuyến. Khi chúng cắt nhau, cũng có thể đo bằng hai đường trong hai mặt cùng vuông góc giao tuyến.

    **Vận dụng — Tự thử trước Core.** Hai tia trong một tiết diện vuông góc giao tuyến của hai mặt tạo góc \(146^\circ\). Tính góc giữa hai mặt.

    <span data-ped-first-try="1" data-outcome-id="G11-B25-PLANE_ANGLE" data-thpt-first-try-id="THPT-G11-B25-TRY01" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Góc tạo bởi hai đường chứa hai tia là góc không tù, bằng \(180^\circ-146^\circ=34^\circ\). Không gọi 146° là góc giữa hai mặt.

    <span data-thpt-help-id="HELP-G11-B25-TRY01" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Lấy góc mở tù làm góc giữa hai mặt.

        **Tự sửa:** Xác định hai đường vuông góc giao tuyến và góc nhỏ. [Luyện lại câu B25-C01](../luyen-tap/?item=THPT-G11-CHVII-B25-C01).

    ### 1.2. Một đường nằm trong mặt và vuông góc mặt kia

    Chỉ cần mặt thứ nhất chứa một đường thật sự vuông góc mặt thứ hai. Hai đường vuông góc tùy ý, mỗi đường trong một mặt, chưa đủ.

    **Vận dụng — Tự thử trước Core.** Hộp chữ nhật \(ABCD.A'B'C'D'\). Chứng minh mặt \((ACC'A')\) vuông góc mặt đáy.

    <span data-ped-first-try="2" data-outcome-id="G11-B25-PERP_PLANES" data-thpt-first-try-id="THPT-G11-B25-TRY02" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(AA'\perp(ABCD)\) và \(AA'\subset(ACC'A')\). Theo dấu hiệu, \((ACC'A')\perp(ABCD)\).

    <span data-thpt-help-id="HELP-G11-B25-TRY02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Dùng hai cạnh vuông góc ở hai mặt mà chưa có đường vuông góc mặt.

        **Tự sửa:** Tìm đường vuông góc mặt đích rồi chỉ ra nó thuộc mặt cần xét. [Luyện lại câu B25-C03](../luyen-tap/?item=THPT-G11-CHVII-B25-C03).

    ### 1.3. Từ hai mặt vuông góc suy một đường vuông góc mặt

    Hai mặt vuông góc có giao tuyến d. Một đường trong mặt thứ nhất chỉ vuông góc mặt thứ hai khi có phương vuông góc d. Không phải mọi đường trong mặt thứ nhất đều vuông góc mặt thứ hai.

    **Vận dụng — Tự thử trước Core.** Hai mặt (P),(Q) vuông góc theo giao tuyến d. Đường m nằm trong (P), m song song d. Có suy \(m\perp(Q)\) không?

    <span data-ped-first-try="3" data-outcome-id="G11-B25-PERP_PLANE_RULE" data-thpt-first-try-id="THPT-G11-B25-TRY03" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Không. d nằm trong (Q) và m cùng phương d, nên m không vuông góc d. Để m vuông góc (Q), m phải vuông góc mọi đường trong (Q), điều kiện này bị vi phạm.

    <span data-thpt-help-id="HELP-G11-B25-TRY03" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Cho mọi đường trong hai mặt vuông góc đều vuông góc mặt kia.

        **Tự sửa:** Kiểm đường trong mặt và vuông góc giao tuyến. [Luyện lại câu B25-C04](../luyen-tap/?item=THPT-G11-CHVII-B25-C04).

    ### 1.4. Góc nhị diện chọn hai nửa mặt

    Khác với góc giữa hai mặt, góc nhị diện chọn hai nửa mặt chung bờ. Hai tia đo góc phải hướng vào đúng hai nửa mặt đó, không tùy ý đảo tia để lấy góc nhỏ.

    **Vận dụng — Tự thử trước Core.** Một mái gấp có tiết diện vuông góc đường nóc tạo hai tia có góc \(138^\circ\). Số đo góc nhị diện phía đã chọn và góc giữa hai mặt lần lượt là bao nhiêu?

    <span data-ped-first-try="4" data-outcome-id="G11-B25-DIHEDRAL" data-thpt-first-try-id="THPT-G11-B25-TRY04" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Góc nhị diện phía đã chọn bằng \(138^\circ\); góc giữa hai mặt bằng \(42^\circ\). Hai đáp số khác nhau vì hai đối tượng góc khác nhau.

    <span data-thpt-help-id="HELP-G11-B25-TRY04" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Tự động lấy góc nhị diện nhỏ hơn 90°.

        **Tự sửa:** Đánh dấu hai nửa mặt, dựng hai tia đúng phía. [Luyện lại câu B25-C02](../luyen-tap/?item=THPT-G11-CHVII-B25-C02).

    ### 1.5. Hình đứng và hình đều khác nhau

    Lăng trụ đứng có cạnh bên vuông góc đáy. Lăng trụ đều còn phải có đáy đa giác đều. Hộp đứng có đáy hình bình hành, hộp chữ nhật là trường hợp các mặt là hình chữ nhật.

    **Vận dụng — Tự thử trước Core.** Một lăng trụ đứng có đáy hình chữ nhật kích thước 3 m và 7 m. Nó có là lăng trụ đều không? Cạnh bên có bằng chiều cao không?

    <span data-ped-first-try="5" data-outcome-id="G11-B25-RIGHT_PRISM" data-thpt-first-try-id="THPT-G11-B25-TRY05" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Không là lăng trụ đều vì đáy hình chữ nhật không vuông không phải đa giác đều. Cạnh bên vuông góc hai đáy nên độ dài cạnh bên bằng chiều cao.

    <span data-thpt-help-id="HELP-G11-B25-TRY05" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Gọi mọi lăng trụ đứng là lăng trụ đều.

        **Tự sửa:** Kiểm cả điều kiện đứng lẫn đáy đều. [Luyện lại câu B25-C05](../luyen-tap/?item=THPT-G11-CHVII-B25-C05).

    ### 1.6. Chân đường cao của chóp đều nằm tại tâm đáy

    Chóp đều có đáy đa giác đều và các cạnh bên bằng nhau (tương đương chân đường cao ở tâm đáy). Cạnh bên thường xiên, không phải chiều cao.

    **Vận dụng — Tự thử trước Core.** Chóp đều S.ABCD đáy vuông cạnh 10 cm, SO=12 cm với O là tâm. Tính SA.

    <span data-ped-first-try="6" data-outcome-id="G11-B25-REGULAR_PYRAMID" data-thpt-first-try-id="THPT-G11-B25-TRY06" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(OA=5\sqrt2\) cm (nửa đường chéo đáy). Tam giác SOA vuông tại O, \(SA=\sqrt{12^2+50}=\sqrt{194}\) cm.

    <span data-thpt-help-id="HELP-G11-B25-TRY06" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Lấy nửa cạnh 5 làm OA.

        **Tự sửa:** Tìm bán kính đường tròn ngoại tiếp đáy; dùng tam giác SOA. [Luyện lại câu B25-C06](../luyen-tap/?item=THPT-G11-CHVII-B25-C06).

    ### 1.7. Hai chóp đồng dạng tạo chóp cụt đều

    Cắt chóp đều bằng mặt phẳng song song đáy, cắt các cạnh bên ở giữa đỉnh và đáy. Chóp nhỏ còn lại đồng dạng chóp ban đầu; hai đa giác đáy của chóp cụt song song và đồng dạng.

    **Vận dụng — Tự thử trước Core.** Chóp đều đáy vuông cạnh 15 cm, chiều cao 20 cm. Cắt bằng mặt song song đáy cách đỉnh 8 cm. Cạnh đáy nhỏ và chiều cao chóp cụt là bao nhiêu?

    <span data-ped-first-try="7" data-outcome-id="G11-B25-REGULAR_FRUSTUM" data-thpt-first-try-id="THPT-G11-B25-TRY07" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Tỉ số chóp nhỏ/chóp lớn \(k=8/20=2/5\). Cạnh đáy nhỏ là \(15\cdot2/5=6\) cm. Chiều cao chóp cụt là \(20-8=12\) cm.

    <span data-thpt-help-id="HELP-G11-B25-TRY07" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Lấy độ cao chóp cụt làm chiều cao chóp nhỏ trong tỉ số.

        **Tự sửa:** Vẽ đoạn cao từ đỉnh qua hai tâm đáy, dùng tỉ số đồng dạng. [Luyện lại câu B25-C07](../luyen-tap/?item=THPT-G11-CHVII-B25-C07).

=== "Kiến thức SGK"

    ### 2.1. Góc giữa hai mặt phẳng, hai mặt phẳng vuông góc

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa.</strong> Lấy a,b lần lượt vuông góc với (P),(Q). Góc giữa (P),(Q) là \((a,b)\), không phụ thuộc vị trí của a,b. Nếu góc đó bằng 90° thì hai mặt vuông góc, kí hiệu \((P)\perp(Q)\).</div>
    
    Góc nằm trong [0°,90°], bằng 0° khi hai mặt song song hoặc trùng. Khi (P),(Q) cắt nhau theo d, qua O thuộc d dựng u trong (P) và v trong (Q), cùng vuông góc d. Góc hai mặt bằng \((u,v)\). Thật vậy, mặt phẳng qua O vuông góc d chứa u,v và các đường qua O lần lượt vuông góc (P),(Q); trong mặt phẳng đó, hai pháp tuyến vuông góc u,v tương ứng, nên góc giữa hai pháp tuyến bằng góc giữa u,v.

    ### 2.2. Điều kiện hai mặt phẳng vuông góc

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Dấu hiệu.</strong> Nếu một mặt chứa đường thẳng vuông góc mặt kia, thì hai mặt vuông góc: \(a\subset(P),\ a\perp(Q)\Rightarrow(P)\perp(Q)\).</div>
    
    Lấy b vuông góc (P). Vì a thuộc (P), b vuông góc a. Mà a,b là hai pháp tuyến tương ứng của (Q),(P), nên góc hai mặt bằng 90°. Phải chứng minh đường vuông góc **mặt**, không chỉ một đường nằm trong mặt kia.

    ### 2.3. Tính chất hai mặt phẳng vuông góc

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất 1.</strong> Nếu (P),(Q) vuông góc, giao tuyến d, đường a thuộc (P) và vuông góc d thì \(a\perp(Q)\).</div>
    
    Qua một điểm O thuộc d, lấy u thuộc (P) và v thuộc (Q) cùng vuông góc d. Hai mặt vuông góc cho u vuông góc v. Do u vuông góc d và v là hai đường cắt nhau trong (Q), u vuông góc (Q). Đường a cùng phương u nên cũng vuông góc (Q).
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất 2.</strong> Nếu hai mặt (P),(Q) cắt nhau và cùng vuông góc mặt (R), giao tuyến của (P),(Q) vuông góc (R).</div>
    
    Lấy O trên giao tuyến. Đường duy nhất qua O vuông góc (R) nằm trong cả (P),(Q) theo tính chất 1: trong từng mặt lấy đường qua O vuông góc giao tuyến của mặt đó với (R). Bởi vậy đường ấy là giao tuyến của (P),(Q).

    ### 2.4. Góc nhị diện

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khái niệm.</strong> Góc nhị diện là hình gồm hai nửa mặt phẳng chung bờ d. Lấy O trên d, dựng tia Ou và Ov lần lượt trong hai nửa mặt, cùng vuông góc d tại O. Góc uOv là góc phẳng của góc nhị diện; số đo của nó không phụ thuộc O và là số đo góc nhị diện.</div>
    
    Kí hiệu \([A,d,B]\) dùng hai điểm A,B thuộc các nửa mặt phía tương ứng, ngoài d. Số đo có thể nằm từ 0° đến 180° (hai mặt cắt theo d thì giữa 0° và 180°); góc giữa hai mặt chứa hai nửa mặt bằng số đo nhỏ hơn trong hai góc bù. Muốn dựng góc phẳng trong bài chóp/mái nhà, chọn tiết diện vuông góc bờ, dựng hai tia vào đúng phía đã chọn, dùng tam giác và định lí côsin hoặc lượng giác để tính.

    ### 2.5. Một số hình lăng trụ đặc biệt

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa.</strong> Lăng trụ đứng có cạnh bên vuông góc mặt đáy; lăng trụ đều là lăng trụ đứng có đáy đa giác đều. Hình hộp đứng là lăng trụ đứng có đáy hình bình hành; hình hộp chữ nhật có đáy hình chữ nhật và cạnh bên vuông góc đáy. Hình lập phương là hình hộp chữ nhật có tất cả cạnh bằng nhau.</div>
    
    Lăng trụ đứng có các mặt bên là hình chữ nhật vuông góc đáy; chiều cao bằng cạnh bên. Lăng trụ đều có các mặt bên là hình chữ nhật bằng nhau. Không suy lăng trụ đều phải có mọi cạnh bằng nhau: chiều cao có thể khác cạnh đáy.

    ### 2.6. Hình chóp đều và hình chóp cụt đều

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Hình chóp đều.</strong> Hình chóp có đáy là đa giác đều và chân đường cao trùng tâm đáy. Các cạnh bên bằng nhau; các mặt bên là những tam giác cân bằng nhau.</div>
    
    Gọi O là tâm đáy, M là trung điểm cạnh đáy AB. Vì \(SO\perp\) mặt đáy và OA là bán kính ngoại tiếp, \(SA^2=SO^2+OA^2\). Do OM vuông góc AB và SO vuông góc AB, suy SM vuông góc AB. Góc phẳng nhị diện giữa mặt bên SAB và đáy theo AB (phía S và O) là \(\angle SMO\); dùng \(\tan\angle SMO=SO/OM\) nếu OM khác 0.
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Hình chóp cụt đều.</strong> Phần hình chóp đều nằm giữa mặt đáy và mặt phẳng song song đáy cắt các cạnh bên ở bên trong chúng. Hai đáy là hai đa giác đều song song, đồng dạng; các cạnh bên bằng nhau, mặt bên là các hình thang cân bằng nhau. Đoạn nối hai tâm đáy vuông góc hai mặt đáy, độ dài là chiều cao.</div>
    
    Tỉ số các cạnh tương ứng của hai đáy bằng tỉ số khoảng cách từ đỉnh chóp ban đầu đến hai mặt đáy; tỉ số diện tích bằng bình phương tỉ số đó. Phân biệt cạnh bên, đường cao mặt bên và chiều cao của khối.

=== "Ví dụ"

    ### 3.1. Tính góc giữa hai mặt qua pháp tuyến

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B25-R02-01"><p><strong>Đề bài:</strong> Hai pháp tuyến biểu diễn bằng hai tia tạo góc \(118^\circ\). Tìm góc giữa hai mặt.</p><p><strong>Phân tích:</strong> Hai mặt không chọn phía; lấy góc giữa đường chứa hai tia.</p><p><strong>Lời giải:</strong> \(180^\circ-118^\circ=62^\circ\).</p><p><strong>Kiểm lại:</strong> Góc thuộc [0°,90°].</p></div>

    ### 3.2. Mặt bên chứa cạnh vuông góc đáy

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B25-R02-02"><p><strong>Đề bài:</strong> Cho hình chóp S.ABC có \(SB\perp(ABC)\). Chứng minh (SBC) vuông góc (ABC).</p><p><strong>Phân tích:</strong> SB nằm trong mặt bên cần chứng minh.</p><p><strong>Lời giải:</strong> \(SB\subset(SBC)\) và \(SB\perp(ABC)\), nên \((SBC)\perp(ABC)\).</p><p><strong>Kiểm lại:</strong> Không suy mặt (SAC) cũng vuông góc đáy nếu thiếu giả thiết.</p></div>

    ### 3.3. Giao tuyến của hai mặt cùng vuông góc mặt thứ ba

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B25-R02-03"><p><strong>Đề bài:</strong> Hai tấm vách phẳng (P),(Q) ghép theo một đường m. Vách (P) chứa thanh a dựng vuông góc sàn phẳng (R), vách (Q) chứa một thanh b khác cũng vuông góc sàn. Không biết trước phương của đường ghép m. Chứng minh m vuông góc sàn.</p><p><strong>Phân tích:</strong> Dùng dấu hiệu đường thuộc một mặt và vuông góc mặt kia để kiểm từng vách; sau đó dùng tính chất giao tuyến của hai mặt cùng vuông góc mặt thứ ba.</p><p><strong>Lời giải:</strong> Vì \(a\subset(P)\) và \(a\perp(R)\), suy \((P)\perp(R)\). Tương tự \(b\subset(Q)\) và \(b\perp(R)\) cho \((Q)\perp(R)\). Hai mặt (P),(Q) cắt nhau theo m, nên \(m\perp(R)\).</p><p><strong>Kiểm lại:</strong> Không cần giả thiết a hay b nằm trên đường ghép. Điều kiện hai vách cắt nhau là thiết yếu; không nói tới giao tuyến của hai vách song song.</p></div>

    ### 3.4. Góc phẳng nhị diện của hình chóp đều

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B25-R02-04"><p><strong>Đề bài:</strong> Chóp đều S.ABCD đáy vuông cạnh 8 cm, SO=4 cm. M là trung điểm AB. Tính số đo nhị diện [S,AB,O].</p><p><strong>Phân tích:</strong> Dựng tiết diện vuông góc AB: OM vuông góc AB, SM vuông góc AB như mục 2.6.</p><p><strong>Lời giải:</strong> \(OM=4\) cm, SO vuông góc OM. Hai tia MS,MO nằm đúng hai nửa mặt nên góc phẳng là \(\angle SMO\). Tang bằng \(4/4=1\), góc \(45^\circ\).</p><p><strong>Kiểm lại:</strong> Hai đường MS,MO phải cùng vuông góc AB, không lấy trực tiếp góc SBA.</p></div>

    ### 3.5. Mái nhà và góc nhị diện tù

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B25-R02-05"><p><strong>Đề bài:</strong> Tiết diện vuông góc nóc mái gồm hai đoạn OU,OV dài 5 m và UV=8 m. Tính góc mở nhị diện giữa hai nửa mái.</p><p><strong>Phân tích:</strong> Dùng định lí côsin trong tiết diện đúng phương.</p><p><strong>Lời giải:</strong> \(\cos\angle UOV=(25+25-64)/(2\cdot5\cdot5)=-7/25\). Vậy góc nhị diện \(\arccos(-7/25)\approx106{,}26^\circ\). Góc hai mặt chứa mái xấp xỉ 73,74°.</p><p><strong>Kiểm lại:</strong> Cos âm phù hợp góc tù; không tự thay góc mở bằng góc bù.</p></div>

    ### 3.6. Từ lăng trụ đứng đến lăng trụ đều

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B25-R02-06"><p><strong>Đề bài:</strong> Lăng trụ đứng có đáy lục giác đều cạnh 4 cm, cạnh bên 9 cm. Gọi tên hình, tính diện tích một mặt bên.</p><p><strong>Phân tích:</strong> Đáy đều và cạnh bên vuông góc đáy, mỗi mặt bên chữ nhật.</p><p><strong>Lời giải:</strong> Đây là lăng trụ đều; chiều cao 9 cm. Mỗi mặt bên có diện tích \(4\cdot9=36\) cm².</p><p><strong>Kiểm lại:</strong> 6 mặt bên bằng nhau, chiều cao khác cạnh đáy vẫn là lăng trụ đều.</p></div>

    ### 3.7. Chiều cao của chóp từ cạnh bên

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B25-R02-07"><p><strong>Đề bài:</strong> Chóp đều S.ABC đáy tam giác đều cạnh \(6\sqrt3\) cm, cạnh bên 10 cm. Tính SO.</p><p><strong>Phân tích:</strong> Tính bán kính ngoại tiếp tam giác đều (OA=a/sqrt3).</p><p><strong>Lời giải:</strong> \(OA=6\) cm; tam giác SOA vuông tại O. \(SO=\sqrt{100-36}=8\) cm.</p><p><strong>Kiểm lại:</strong> SO nhỏ hơn SA, chân O nằm ở tâm tam giác.</p></div>

    ### 3.8. Các cạnh của chóp cụt đều

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B25-R02-08"><p><strong>Đề bài:</strong> Chóp đều đáy vuông cạnh 12 cm, chiều cao 18 cm. Mặt cắt song song đáy tạo chóp nhỏ cao 6 cm. Tính diện tích đáy nhỏ và chiều cao phần cụt.</p><p><strong>Phân tích:</strong> Tỉ số đồng dạng k=1/3, diện tích biến đổi theo k².</p><p><strong>Lời giải:</strong> Cạnh đáy nhỏ \(12/3=4\) cm, diện tích \(16\) cm². Chiều cao phần cụt \(18-6=12\) cm.</p><p><strong>Kiểm lại:</strong> Không dùng tỉ số 1/3 trực tiếp cho diện tích; đáy nhỏ bằng 1/9 diện tích đáy lớn.</p></div>

=== "Lỗi thường gặp"

    <span data-thpt-help-id="HELP-G11-CHVII-B25-01" hidden></span>

    ??? tip "4.1. Nhầm góc nhị diện với góc hai mặt"

        **Vì sao sai:** Góc nhị diện chọn phía; góc giữa hai mặt không tù.

        **Tự sửa:** Dựng hai tia đúng phía, rồi mới lấy góc bù nếu cần góc hai mặt. [Luyện lại câu B25-C02](../luyen-tap/?item=THPT-G11-CHVII-B25-C02).

    <span data-thpt-help-id="HELP-G11-CHVII-B25-02" hidden></span>

    ??? tip "4.2. Lấy cạnh bên chóp đều làm chiều cao"

        **Vì sao sai:** Chân cao ở tâm đáy, phải tính từ tam giác SOA.

        **Tự sửa:** Ôn 2.6, làm 3.7. [Luyện lại câu B25-C06](../luyen-tap/?item=THPT-G11-CHVII-B25-C06).

    <span data-thpt-help-id="HELP-G11-B25-03" hidden></span>

    ??? tip "4.3. Quên điều kiện vuông góc giao tuyến"

        **Vì sao sai:** Đường trong một mặt chưa đủ để vuông góc mặt kia.

        **Tự sửa:** Kiểm thêm đường vuông góc giao tuyến ở 2.3. [Luyện lại câu B25-C04](../luyen-tap/?item=THPT-G11-CHVII-B25-C04).

    <span data-thpt-help-id="HELP-G11-B25-04" hidden></span>

    ??? tip "4.4. Nhầm hình đứng, hình đều và chóp cụt"

        **Vì sao sai:** Đứng yêu cầu cạnh bên vuông góc đáy; đều thêm đáy đa giác đều; chóp cụt có hai đáy đồng dạng.

        **Tự sửa:** Đối chiếu các định nghĩa 2.5–2.6 và tỉ số đồng dạng. [Luyện lại câu B25-C07](../luyen-tap/?item=THPT-G11-CHVII-B25-C07).

    **Học tiếp:** [Core và Luyện tập](../luyen-tap/) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/) · [Tự luận Chương VII](../../../../thu-vien/tu-luan-g11-chuong-vii/).

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập hai, Bài 25 (trang in 44–53).</p>


## REVIEW SOURCE B25 END

---

## REVIEW SOURCE B26 BEGIN · 10e9e36f1f31514cde634147af9d84c4c93900bc

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

    ### 3.5. Khoảng cách giữa hai đường song song trong hình hộp

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


## REVIEW SOURCE B26 END

---

## REVIEW SOURCE B27 BEGIN · d2bc0113a3dbb2975b4229902dcd18f24222de54

# Bài 27. Thể tích

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VII · SGK KNTT TẬP 2</p><p class="thpt-r4-lead">Nhận diện khối, xác định đúng diện tích đáy và chiều cao vuông góc, tính thể tích kể cả khối xiên và chóp cụt đều.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương VII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Thể tích đo phần không gian vật chiếm chỗ. Hai khối cùng diện tích đáy và độ cao chưa chắc có cùng thể tích vì tiết diện giữa các đáy hoặc giữa đáy với đỉnh thay đổi khác nhau. Hãy dùng B25 để nhận dạng hình và B26 để xác định chiều cao, rồi mới thay số.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B27-01_R00.svg" alt="Ba sơ đồ phân biệt khối lăng trụ, khối chóp và khối chóp cụt đều. Mỗi h là chiều cao vuông góc, không phải cạnh xiên; S và S' là diện tích đáy, không phải độ dài cạnh. Chọn công thức theo loại khối."><figcaption>Đọc hình: Ba sơ đồ phân biệt khối lăng trụ, khối chóp và khối chóp cụt đều. Mỗi h là chiều cao vuông góc, không phải cạnh xiên; S và S' là diện tích đáy, không phải độ dài cạnh. Chọn công thức theo loại khối. Không suy góc hoặc độ dài từ nét phối cảnh.</figcaption></figure>

    ### 1.1. Lăng trụ: diện tích đáy nhân chiều cao

    Mọi thiết diện song song đáy của lăng trụ bằng đáy, ngay cả khi cạnh bên xiên. Chiều cao là khoảng cách giữa hai mặt đáy.

    **Vận dụng — Tự thử trước Core.** Lăng trụ xiên có diện tích đáy 20 cm², cạnh bên 12 cm tạo góc 30° với đáy. Tính thể tích.

    <span data-ped-first-try="1" data-outcome-id="G11-B27-PRISM_VOLUME" data-thpt-first-try-id="THPT-G11-B27-TRY01" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Chiều cao \(h=12\sin30^\circ=6\) cm. \(V=20\cdot6=120\) cm³. Không lấy cạnh bên dài 12 cm làm h.

    <span data-thpt-help-id="HELP-G11-B27-TRY01" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Nhân diện tích đáy với cạnh xiên.

        **Tự sửa:** Tính chiều cao từ hình chiếu và góc đường–mặt. [Luyện lại câu B27-C01](../luyen-tap/?item=THPT-G11-CHVII-B27-C01).

    ### 1.2. Khối chóp có hệ số một phần ba

    Khối chóp thu hẹp các thiết diện song song đáy dần tới đỉnh; công thức thể tích có hệ số 1/3, khác lăng trụ cùng đáy cùng cao.

    **Vận dụng — Tự thử trước Core.** Khối chóp có đáy tam giác vuông với hai cạnh góc vuông 9 cm, 12 cm và chiều cao 7 cm. Tính thể tích.

    <span data-ped-first-try="2" data-outcome-id="G11-B27-PYRAMID_VOLUME" data-thpt-first-try-id="THPT-G11-B27-TRY02" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Diện tích đáy \(S=9\cdot12/2=54\) cm², \(V=54\cdot7/3=126\) cm³. Hệ số 1/2 do diện tích tam giác, 1/3 do thể tích chóp.

    <span data-thpt-help-id="HELP-G11-B27-TRY02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Bỏ hệ số 1/3 hoặc lẫn hai hệ số.

        **Tự sửa:** Tính riêng S rồi dùng V=Sh/3. [Luyện lại câu B27-C02](../luyen-tap/?item=THPT-G11-CHVII-B27-C02).

    ### 1.3. Khối hộp: không phải cứ nhân ba cạnh

    Thể tích hộp bằng diện tích một mặt nhân chiều cao ứng với mặt ấy. Chỉ hộp chữ nhật mới có công thức tích ba cạnh đôi một vuông góc tại một đỉnh.

    **Vận dụng — Tự thử trước Core.** Khối hộp có đáy là hình bình hành cạnh 5 và 6 cm, góc giữa hai cạnh là 30°, chiều cao 9 cm. Tính thể tích.

    <span data-ped-first-try="3" data-outcome-id="G11-B27-BOX_VOLUME" data-thpt-first-try-id="THPT-G11-B27-TRY03" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(S=5\cdot6\sin30^\circ=15\) cm². \(V=15\cdot9=135\) cm³. Không lấy 5·6·9 vì đáy không vuông.

    <span data-thpt-help-id="HELP-G11-B27-TRY03" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Dùng tích ba cạnh khi đáy không phải hình chữ nhật.

        **Tự sửa:** Tính diện tích hình bình hành trước, rồi nhân chiều cao thật. [Luyện lại câu B27-C03](../luyen-tap/?item=THPT-G11-CHVII-B27-C03).

    ### 1.4. Khối chóp cụt đều là hiệu hai khối chóp

    Hai đáy song song, đồng dạng; nếu tỉ số cạnh là k thì tỉ số diện tích là k². Trừ thể tích chóp nhỏ khỏi chóp lớn cho công thức có thêm căn của tích hai diện tích đáy.

    **Vận dụng — Tự thử trước Core.** Chóp cụt đều có hai đáy vuông cạnh 10 cm và 4 cm, chiều cao 9 cm. Tính thể tích.

    <span data-ped-first-try="4" data-outcome-id="G11-B27-FRUSTUM_VOLUME" data-thpt-first-try-id="THPT-G11-B27-TRY04" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(S=100,S'=16\) cm², \(\sqrt{SS'}=40\) cm². \(V=9(100+16+40)/3=468\) cm³.

    <span data-thpt-help-id="HELP-G11-B27-TRY04" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Dùng trung bình cộng diện tích hai đáy nhân h.

        **Tự sửa:** Tính đủ ba hạng tử diện tích, kể cả căn tích. [Luyện lại câu B27-C04](../luyen-tap/?item=THPT-G11-CHVII-B27-C04).

    ### 1.5. Đơn vị thể tích và sức chứa

    Thể tích mang ba chiều. (1	ext{ dm}^3=1) lít, (1	ext{ m}^3=1000) lít; đổi các kích thước về cùng đơn vị trước khi tính.

    **Vận dụng — Tự thử trước Core.** Bể chữ nhật có kích thước trong lòng 1,5 m × 0,6 m × 0,4 m. Nếu chứa nước đến 3/4 chiều cao, có bao nhiêu lít nước?

    <span data-ped-first-try="5" data-outcome-id="G11-B27-VOLUME_APPLICATION" data-thpt-first-try-id="THPT-G11-B27-TRY05" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Chiều cao nước \(0{,}4\cdot3/4=0{,}3\) m. \(V=1{,}5\cdot0{,}6\cdot0{,}3=0{,}27\) m³ = 270 lít.

    <span data-thpt-help-id="HELP-G11-B27-TRY05" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Đổi m³ sang lít bằng 100 hoặc lấy cả chiều cao bể.

        **Tự sửa:** Tính khối nước thực tế, nhân 1000 để đổi m³ sang lít. [Luyện lại câu B27-C05](../luyen-tap/?item=THPT-G11-CHVII-B27-C05).

=== "Kiến thức SGK"

    ### 2.1. Thể tích các khối lăng trụ, khối hộp, khối chóp và khối chóp cụt đều

    Phần không gian được giới hạn bởi hình lăng trụ, hình hộp, hình chóp hay hình chóp cụt đều gọi tương ứng là khối lăng trụ, khối hộp, khối chóp, khối chóp cụt đều. Đỉnh, cạnh, mặt, chiều cao ứng với hình giới hạn. Trong SGK Bài 27, các công thức được trình bày liên tiếp trong một mạch kiến thức, không chia bốn bài riêng.
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Thể tích khối lăng trụ.</strong> Với diện tích đáy S và chiều cao vuông góc h,
    \[
    V=Sh.
    \]
    Khối hộp là lăng trụ có đáy hình bình hành; công thức đúng với một mặt bất kì được chọn làm đáy và chiều cao ứng với mặt ấy. Hộp chữ nhật kích thước a,b,c có \(V=abc\); lập phương cạnh a có \(V=a^3\).</div>
    
    Lăng trụ xiên vẫn dùng Sh vì các thiết diện song song đáy bằng nhau. Nếu cạnh bên dài l tạo góc \(\theta\) với đáy thì \(h=l\sin\theta\), không lấy l trừ khi cạnh đứng.
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Thể tích khối chóp.</strong> Với diện tích đáy S và chiều cao h từ đỉnh tới mặt phẳng đáy,
    \[
    V=\frac{1}{3}Sh.
    \]
    Khối tứ diện là khối chóp tam giác: chọn bất kì mặt tam giác làm đáy và đường cao từ đỉnh đối diện.</div>
    
    Chóp cùng S,h với lăng trụ có thể tích bằng 1/3; hệ số này là định lí thể tích, không suy ra chỉ từ việc nhìn hình. Tại một độ cao bằng tỉ phần k tính từ đỉnh, tiết diện song song đáy có diện tích k²S, nên càng gần đỉnh càng nhỏ. Công thức phù hợp sự thu nhỏ theo bình phương. Khi ba cạnh OA,OB,OC đôi một vuông góc, đáy OBC là tam giác vuông, OA vuông góc đáy; thể tích tứ diện OABC bằng \(OA\cdot OB\cdot OC/6\).
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Thể tích khối chóp cụt đều.</strong> Hai đáy có diện tích S,S' và chiều cao vuông góc h:
    \[
    V=\frac h3(S+S'+\sqrt{SS'}).
    \]
    </div>
    
    **Vì sao xuất hiện căn tích?** Gọi \(S\gt S'\gt0\); tỉ số chóp nhỏ/chóp lớn \(k=\sqrt{S'/S}\), với \(0\lt k\lt1\). Nếu chóp lớn cao H thì chóp nhỏ cao kH, suy \(h=(1-k)H\). Hiệu thể tích là
    \[
    V=\frac{SH-S'kH}{3}
    =\frac{SH(1-k^3)}3
    =\frac{Sh(1+k+k^2)}3
    =\frac h3(S+\sqrt{SS'}+S').
    \]
    Nếu đáy nhỏ co về 0, công thức tiến về chóp; nếu hai diện tích tiến tới bằng nhau với chiều cao giữ cố định, giá trị tiến về thể tích lăng trụ. Đây là trường hợp giới hạn, không phải hai trường hợp chóp cụt đều không suy biến. Không áp công thức cho mọi khối có hai mặt đáy tùy ý.
    
    **Đơn vị và quy trình:** Đổi mọi độ dài về cùng đơn vị, tìm diện tích đáy (m² hoặc cm²), dựng chiều cao vuông góc ứng với đáy đã chọn, tính thể tích theo loại khối (m³ hoặc cm³). \(1\text{ m}^3=1000\) L, \(1\text{ dm}^3=1\) L, \(1000\text{ cm}^3=1\) L. Chỉ làm tròn sau khi tính. Sức chứa thực tế cần kích thước trong lòng và các giả định về thành, nắp, phần rỗng hoặc mực chất lỏng.

=== "Ví dụ"

    ### 3.1. Chọn đúng loại khối và hệ số

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B27-R02-01"><p><strong>Đề bài:</strong> Lăng trụ và chóp cùng đáy diện tích 35 cm², chiều cao 12 cm. Tính hai thể tích.</p><p><strong>Phân tích:</strong> Dùng cùng S,h nhưng phân biệt hệ số.</p><p><strong>Lời giải:</strong> \(V_{\text{lăng trụ}}=35\cdot12=420\) cm³, \(V_{\text{chóp}}=420/3=140\) cm³.</p><p><strong>Kiểm lại:</strong> Chóp bằng một phần ba lăng trụ, không phải một phần hai.</p></div>

    ### 3.2. Thể tích chóp có đáy tam giác vuông

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B27-R02-02"><p><strong>Đề bài:</strong> Tứ diện MABC có MA, MB, MC đôi một vuông góc, dài 6,8,9 cm. Tính thể tích.</p><p><strong>Phân tích:</strong> Chọn đáy MBC vuông tại M. MA vuông góc MB,MC cắt nhau nên vuông góc (MBC).</p><p><strong>Lời giải:</strong> \(S_{MBC}=8\cdot9/2=36\) cm²; chiều cao MA=6 cm. \(V=36\cdot6/3=72\) cm³.</p><p><strong>Kiểm lại:</strong> Diện tích và chiều cao thuộc đúng một cách chọn đáy.</p></div>

    ### 3.3. Khối hộp xiên có đáy hình bình hành

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B27-R02-03"><p><strong>Đề bài:</strong> Hộp có các cạnh đáy dài 10 cm, 6 cm, góc xen giữa 60°, cạnh bên dài 8 cm tạo góc 30° với đáy. Tính thể tích.</p><p><strong>Phân tích:</strong> Tính S bằng tích hai cạnh và sin góc xen; dựng chiều cao h bằng thành phần vuông góc.</p><p><strong>Lời giải:</strong> \(S=60\sin60^\circ=30\sqrt3\) cm², \(h=8\sin30^\circ=4\) cm. \(V=120\sqrt3\) cm³.</p><p><strong>Kiểm lại:</strong> h khác cạnh xiên 8 cm, không dùng abc.</p></div>

    ### 3.4. Khối lăng trụ xiên từ mặt bên vuông góc đáy

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B27-R02-04"><p><strong>Đề bài:</strong> Lăng trụ ABC.A'B'C' đáy tam giác đều cạnh 10 cm. Mặt (ABB'A') vuông góc đáy, tam giác A'AB cân tại A', \(A'A=A'B=13\) cm. Tính thể tích.</p><p><strong>Phân tích:</strong> Dựng A'H là đường cao của tam giác cân, H là trung điểm AB; A'H nằm trong mặt bên và vuông góc giao tuyến AB.</p><p><strong>Lời giải:</strong> \(AH=5\), \(A'H=\sqrt{169-25}=12\) cm. Vì hai mặt vuông góc, \(A'H\perp(ABC)\). Diện tích đáy \(S=10^2\sqrt3/4=25\sqrt3\) cm². \(V=300\sqrt3\) cm³.</p><p><strong>Kiểm lại:</strong> Chiều cao h=12, nhỏ hơn cạnh bên 13; áp đúng điều kiện B25.</p></div>

    ### 3.5. Chóp đều từ cạnh đáy và cạnh bên

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B27-R02-05"><p><strong>Đề bài:</strong> Chóp đều S.ABCD có đáy vuông cạnh \(8\sqrt2\) cm, cạnh bên SA=17 cm. Tính thể tích.</p><p><strong>Phân tích:</strong> Tìm bán kính ngoại tiếp đáy và chiều cao từ tam giác SOA.</p><p><strong>Lời giải:</strong> \(OA=(8\sqrt2)\sqrt2/2=8\) cm, \(SO=\sqrt{17^2-8^2}=15\) cm. \(S_{\text{đáy}}=(8\sqrt2)^2=128\) cm². \(V=128\cdot15/3=640\) cm³.</p><p><strong>Kiểm lại:</strong> Chiều cao 15 cm nhỏ hơn cạnh bên 17 cm, đúng tam giác vuông; đáy phải dùng diện tích 128.</p></div>

    ### 3.6. Chóp cụt đều khi biết hai diện tích

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B27-R02-06"><p><strong>Đề bài:</strong> Chóp cụt đều có S=81 cm², S'=25 cm², h=12 cm. Tính thể tích.</p><p><strong>Phân tích:</strong> Tính căn tích hai diện tích.</p><p><strong>Lời giải:</strong> \(\sqrt{81\cdot25}=45\) cm². \(V=12(81+25+45)/3=604\) cm³.</p><p><strong>Kiểm lại:</strong> Nằm giữa (hS'=300) và (hS=972) cm³; không dùng trung bình cộng hai diện tích.</p></div>

    ### 3.7. Chóp cụt đều khi biết cạnh bên

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B27-R02-07"><p><strong>Đề bài:</strong> Sọt lý tưởng dạng chóp cụt đều có hai đáy vuông cạnh 54 cm và 30 cm, cạnh bên 22 cm. Tính thể tích.</p><p><strong>Phân tích:</strong> Hai tâm đáy cùng nằm trên đường cao. Chiếu đỉnh đáy nhỏ xuống đáy lớn, độ lệch ngang của hai đỉnh tương ứng bằng nửa hiệu đường chéo, tức (12sqrt2) cm.</p><p><strong>Lời giải:</strong> \(h=\sqrt{22^2-(12\sqrt2)^2}=\sqrt{196}=14\) cm. \(S=2916,S'=900,\sqrt{SS'}=1620\) cm². \(V=\frac{14}3(2916+900+1620)=25368\) cm³ =25,368 lít.</p><p><strong>Kiểm lại:</strong> Chiều cao 14 khác cạnh bên 22, tính dung tích theo kích thước trong lòng lý tưởng.</p></div>

    ### 3.8. Ứng dụng ước lượng thể tích phòng

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B27-R02-08"><p><strong>Đề bài:</strong> Một phòng dạng hộp chữ nhật dài 6 m, rộng 3,5 m, cao 2,8 m. Tính thể tích; theo giả định yêu cầu công suất lạnh 180 BTU/h cho mỗi m³, ước lượng công suất.</p><p><strong>Phân tích:</strong> Tính thể tích trước; đây chỉ là mô hình hệ số được cho, không là tư vấn chọn thiết bị thực tế.</p><p><strong>Lời giải:</strong> \(V=6\cdot3{,}5\cdot2{,}8=58{,}8\) m³. Công suất theo giả định \(58{,}8\cdot180=10584\) BTU/h.</p><p><strong>Kiểm lại:</strong> Phải phân biệt m³ và BTU/h, kết quả phụ thuộc giả định cách nhiệt và môi trường.</p></div>

=== "Lỗi thường gặp"

    <span data-thpt-help-id="HELP-G11-CHVII-B27-01" hidden></span>

    ??? tip "4.1. Lấy trung bình cộng hai diện tích đáy để tính chóp cụt"

        **Vì sao sai:** Diện tích thiết diện thay đổi theo bình phương tỉ số đồng dạng; công thức có căn tích.

        **Tự sửa:** Ôn phép trừ hai chóp và ví dụ 3.6. [Luyện lại câu B27-C04](../luyen-tap/?item=THPT-G11-CHVII-B27-C04).

    <span data-thpt-help-id="HELP-G11-B27-02" hidden></span>

    ??? tip "4.2. Dùng cạnh xiên làm chiều cao"

        **Vì sao sai:** Chiều cao vuông góc đáy, phải dựng trước khi thay số.

        **Tự sửa:** Xem 3.3–3.4 và B26. [Luyện lại câu B27-P03](../luyen-tap/?item=THPT-G11-CHVII-B27-P03).

    <span data-thpt-help-id="HELP-G11-B27-03" hidden></span>

    ??? tip "4.3. Quên hệ số một phần ba của chóp"

        **Vì sao sai:** Khối chóp khác lăng trụ cùng S,h.

        **Tự sửa:** Kiểm lại công thức theo loại khối, làm 3.1. [Luyện lại câu B27-C02](../luyen-tap/?item=THPT-G11-CHVII-B27-C02).

    <span data-thpt-help-id="HELP-G11-B27-04" hidden></span>

    ??? tip "4.4. Đổi đơn vị theo chiều dài thay cho thể tích"

        **Vì sao sai:** Một m³ bằng 1000 dm³ hay 1000 lít.

        **Tự sửa:** Ghi đơn vị ở từng bước; ôn 3.7. [Luyện lại câu B27-C05](../luyen-tap/?item=THPT-G11-CHVII-B27-C05).

    **Học tiếp:** [Core và Luyện tập](../luyen-tap/) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/) · [Tự luận Chương VII](../../../../thu-vien/tu-luan-g11-chuong-vii/).

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập hai, Bài 27 (trang in 61–63).</p>


## REVIEW SOURCE B27 END

---

## AUTHOR Q18 RECEIPT BEGIN · 736f5680b5d2ab32b30346832940d23cfcb068da

# Toán 11 KNTT Tập 2 · Chương VII B22–B27 · Q18 author source receipt · 22/11/2026

MASTER_TASK: #987 (only master/checkpoint)
SCOPE: SGK G11 B02–B33, then G12 B01–B19, this chapter B22–B27
STANDARD: SLM-THPT-QUALITY-ONE v3.2.0 Q01–Q18, main standard Git blob 488afe2908e0b471320e1d55f775391578d88bba, X-C/X-D/X-E/X-F
BRANCH: authoring/sgk-g11-chvii-b22-b27-r02-20261122
DELTA_CLASS: DELTA_C_ACADEMIC_MATERIAL plus scoped source-presentation changes
Q18_VERIFICATION_MODE: Q18_AUTHOR_SELF_VERIFIED
STATUS: AUTHORING_SOURCE_CANDIDATE_READY (source-scoped author signoff, not new CONTENT_READY, not independent reviewer PASS, not RELEASE)
RELEASE_AUTHORIZATION: NO

## 1. Exact new canonical learner source lock

| Lesson | Existing learner path | Original main Git blob | QA-tested new Git blob |
| --- | --- | --- | --- |
| B22 | docs/thpt-preview/sgk/lop-11/chuong-vii/bai-22.md | d8a679897dde1d2fa25e12df56772eb54be29ff4 | 2051b302fc401ddef460e1e916b334de7fdc8da3 |
| B23 | docs/thpt-preview/sgk/lop-11/chuong-vii/bai-23.md | ad1ce1335b2c4dcef36edff8f8ad5378b8f63cad | ccd934a633eb4f18b168b91a696181bebdf4f429 |
| B24 | docs/thpt-preview/sgk/lop-11/chuong-vii/bai-24.md | 0bd7550087f455264e2b5e5d3214078e063ccb1c | b80bd0110b9d507c7e35d3a637a2632e30921a75 |
| B25 | docs/thpt-preview/sgk/lop-11/chuong-vii/bai-25.md | c6ba455035041fbe16ee66f346cb78477ceaaa73 | e8a6e64fbe3d14acf5f83b83937fe1bbe92cf9be |
| B26 | docs/thpt-preview/sgk/lop-11/chuong-vii/bai-26.md | 417ce70fc81b8a656e803855d0594dfa9db945b2 | 10e9e36f1f31514cde634147af9d84c4c93900bc |
| B27 | docs/thpt-preview/sgk/lop-11/chuong-vii/bai-27.md | abd417ddb6d89528eaa8da28c132a126a26738e0 | d2bc0113a3dbb2975b4229902dcd18f24222de54 |

Every lesson retains its one existing canonical learner path. The source is re-read after final edits; this is **one** chapter receipt, not an alternate academic standard. Review copies are not learner sources. No merge, website deployment, UI/runtime file change or new readiness bank.

## 2. Q01–Q02: S1 source authority and audited chapter coverage

**Original historical evidence read directly from repo:** 25e7be8637cdd9cfe021fbc70537e44bbdec04e2 at `prototypes/thpt/review-packets/G11_CHVII_B22_B27_V2_COMPOSITE_HISTORIC_REVIEW_AND_OWNER_S1_RECEIPT_20261102.md`, historical author PDF visual receipt `prototypes/thpt/review-packets/G11_T2_OWNER_DRIVE_S1_PDF_VISUAL_SHA_RECEIPT_20261102.md`, original public R01 source `afc8ec039213b87b4930f2d34d48c28d1fc6277f` at `prototypes/thpt/content-drafts/G11_CHVII_B22_B27_PUBLIC_CANONICAL_R01_SOURCE_LOCK.md`, historical source-fidelity addendum `e2367c3b8ef730ca02e42982c85852c8889d65f4`. Old Academic/PED PASS belongs to original locked R01 and old **five v2.0 Permanent Sources**, not to these Delta-C blobs.

Historical directly inspected owner SGK Tập Hai original 114 PDF pages, SHA256 14ec0da7fa3d7c7365ed7f64599fc1e26484eccf1557301c57012ae64338e491; SBT Tập Hai original 126 PDF pages, SHA256 a7c3d5ee9770377e16d7df97c531a2bc081fa47c8266fd4ad3438cba0d04e189. Historical one-based PDF index = printed page + 1. Exact printed ranges:

| Lesson | SGK Tập 2 print | SBT Tập 2 print | S1 formal-sequence mapping |
| --- | --- | --- | --- |
| B22 | 27–30 | 24–25 | Góc giữa hai đường thẳng; Hai đường thẳng vuông góc |
| B23 | 31–37 | 26–28 | Đường thẳng vuông góc với mặt phẳng; Tính chất; Liên hệ giữa quan hệ song song và quan hệ vuông góc của đường thẳng và mặt phẳng |
| B24 | 38–43 | 29–30 | Phép chiếu vuông góc; Góc giữa đường thẳng và mặt phẳng |
| B25 | 44–53 | 31–34 | Góc giữa hai mặt phẳng, hai mặt phẳng vuông góc; Điều kiện hai mặt phẳng vuông góc; Tính chất hai mặt phẳng vuông góc; Góc nhị diện; Một số hình lăng trụ đặc biệt; Hình chóp đều và hình chóp cụt đều |
| B26 | 54–60 | 35–37 | Khoảng cách từ một điểm đến một đường thẳng, đến một mặt phẳng; Khoảng cách giữa các đường thẳng và mặt phẳng song song, giữa hai mặt phẳng song song; Khoảng cách giữa hai đường thẳng chéo nhau |
| B27 | 61–63 | 38–40 | SGK presents the four volume formulas in one continuous unnumbered knowledge passage, not four official numbered sections; learner uses one editorial 2.1 heading to preserve Golden numbering |
| ChVII exercises | 64–65 | 41–43 | Existing separate chapter practice/readiness preserved |

Original SBT chapter VII answers pp86–102 in historical owner receipt. **New-turn scope:** canonical original R01/learner sources, existing formative/Written/outcome register, historical exact S1 receipt, accessible online lesson contents/search excerpts and their headings were examined. B23/B24/B25/B26/B27 SGK online excerpts: 
- https://www.sgkvn.com/lop-11-14/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vii-quan-he-vuong-goc-trong-khong-gian-3477/bai-23-duong-thang-vuong-goc-voi-mat-phang-12753.html
- https://www.sgkvn.com/lop-11-14/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vii-quan-he-vuong-goc-trong-khong-gian-3477/bai-24-phep-chieu-vuong-goc-goc-giua-duong-thang-va-mat-phang-12758.html
- https://www.sgkvn.com/lop-11-14/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vii-quan-he-vuong-goc-trong-khong-gian-3477/bai-25-hai-mat-phang-vuong-goc-12759.html
- https://sgkvn.com/lop-11-14/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vii-quan-he-vuong-goc-trong-khong-gian-3477/bai-26-khoang-cach-12766.html
- https://www.sgkvn.com/lop-11-14/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-vii-quan-he-vuong-goc-trong-khong-gian-3477/bai-27-the-tich-12769.html
B22 heading and knowledge checked from matching public textbook exercise text and historical S1 source. Full SGK PDF https://thuvienhoclieu.com/wp-content/uploads/2026/05/thuvienhoclieu.com-SGK-Toan-11-tu-nam-2026-Tap-2.pdf could not be opened due to size; direct full HTML fetch for B23/B26 also failed; only returned search excerpts were used. **No new original owner PDF image/print/PDF-offset audit, no fresh SBT re-scan, no new reviewer verdict.** Printed-page ranges above derive from immutable historical owner inspection and R01 scope, not current screenshots.

## 3. Q03–Q14: per-lesson author math/PED evidence

All six use exactly four Golden tabs, 2.1 starts directly with knowledge, explicit concept before formula, condition-bearing concept/rule boxes, one original SVG with immediate role-specific read instruction and alt, new unscored FirstTry with optional compare and targeted D6, separately solved examples (question, analysis, reasoning, verification), four general error groups, one official book footer; no direct answer ahead of the optional comparison for that exact new stem. Figures do not prove angles from perspective. The six new bundles preserve all 32 registered per-lesson outcomes plus the original chapter-level integrated outcome remaining in the existing chapter bank.

| Lesson | FirstTry/Outcome coverage | Worked examples | Mathematical focus, conditions and proof/counterexample |
| --- | ---: | ---: | --- |
| B22 | 4/4 | 5 | Angle by same-direction translation, proof invariance, min(alpha,180-alpha), 90-degree skew lines; no false implication from two lines perpendicular to third. TRY04 corrected during author QA: midpoint parallel BC, ABC right at A implies angle ABC acute; AB NOT perpendicular BC or MN. Cube diagonal/regular tetrahedron midpoint examples. |
| B23 | 5/5 | 5 | Definition all lines; two intersecting lines criterion; unique perpendicular plane and unique perpendicular line; perpendicular bisector locus in both directions; parallel transfer and converse require distinctness/outside plane. Middle-plane converse and line parallel-plane implication tightened by constructing a unique plane through point perpendicular to given line. |
| B24 | 5/5 | 6 | Point/line/segment/triangle projections with degeneracy, proof of both iff directions for theorem of three perpendiculars (b not perpendicular plane), projection of segment and actual triangle, angle 0/90 boundary, sin/cos/tan and slope. Example projection uses given AA' perpendicular base, not a future prerequisite. |
| B25 | 7/7 | 8 | Plane angles vs oriented chosen half-planes of dihedral; construction by section perpendicular intersection; both perpendicular-plane properties, independent noncircular proof of intersection of two walls perpendicular floor; right/regular prisms, right boxes, regular pyramid/frustum with altitude and similar bases; dihedral in regular pyramid and obtuse roof. |
| B26 | 6/6 | 8 | Minimum distance Pythagorean argument; projected foot membership; line/plane and two parallel planes invariant distance; common perpendicular both endpoints and both angles; simple perpendicular-skew case and general projection-to-parallel-plane construction; parallel-plane equivalent distance and distinction from intersecting/parallel lines; exact heights. |
| B27 | 5/5 | 8 | Region/solid and Sh vs Sh/3; correct base area and perpendicular height, oblique prism/box, triangular/right tetrahedron, regular pyramid, frustum derivation by difference of similar pyramids, limit cases distinguished from valid nondegenerate frustum, volume/units and modeled capacity. No invented extra official SGK sections. |

Specific author math consistency audit: **72/72** scenario-level checks (all 32 FirstTry and 40 worked examples), per lesson 9/9, 10/10, 11/11, 15/15, 14/14, 13/13. Independently computed numeric answers/rounding and coordinate witnesses using dot/cross products for skew/coplanarity/parallel/perpendicular and projection; vector coordinates were QA-only, not required methods for students. Important checks:
- B22 cube angle =45°, regular-tetrahedron midpoint→60°, selected-ray 162°→18°, 107°→73°, right-at-A counterexample tested.
- B23 perpendicular bisectors (5,12,13) and (8,15,17), rectangle plane criterion and common normal for distinct parallel planes.
- B24 slope 1/8→7.13°, 2.4/10→13.50° and length 10.28, 7–24–25 triangle, box angle 45°, projection of triangle and collapse.
- B25 146°→34°, dihedral 138°/plane 42°, cosine -7/25→106.26°/73.74°, regular square pyramid SA=sqrt194, regular triangular pyramid altitude 8, two different vertical supports → intersection by cross of plane normals, frustum lengths/area ratios.
- B26 9–40–41, 8–15–17 altitude 120/17, 26–10–24, parallel-line distance 2sqrt13; skew line endpoints and dot/cross checks, plane distance a, 3–4–5 model.
- B27 V=120,126,135,468,270L for FirstTry; 420 vs 140, right tetrahedron 72, oblique box 120sqrt3, oblique prism 300sqrt3, pyramid 640, frustum 604 and 25368cm3=25.368L, model room 58.8 m3 and 10584 BTU/h. Derive formulas in learner; sample checks do not replace mathematical proof, S1 verification or academic reviewer.

**126/126 per-lesson source checks (21 × 6) on exact source blobs:** tab count/order, numbering, formal groups, 2.1 direct, example numbering/4 parts/unique versioned EX IDs, FirstTry IDs vs public bank/Written, skill registration complete, voluntary compare count, local and general D6, unique HELP plus original legacy IDs, all D6 item target IDs exist, exact original SVG SHA and read cue/alt, one footer, balanced MathJax delimiters, comparisons safe inside math spans, no local script/CSS/admin tokens, actual Written route and preserved bank/library. 32 new Try IDs, 40 EX IDs and 56 HELP IDs distinct within chapter; **10 legacy HELP IDs retained**, no duplicated canonical bank or Written ID. No claim that these counts prove browser display, all-branch unique historical ID search, actual assessment or formal independent review. No detected P0/P1 in checked academic/PED source scope.

Original SVG identities exact in branch (not newly rendered):
B22 5f2d23adb6f947064312d04d67ce5a5bb2d1ff48; B23 b53b65704f9830e1c97b533bac0e79a0b56761b6; B24 c98d7df30b87c339336636e00322816a4099681b; B25 3f6112a7b12f1829ee2249b979d45f1f5370fc66; B26 26fb51f3af65ba7d86a2907f0eaff808d2d87532; B27 a7bec7a20295d09ca6f32aae0e8910cef7bed9dc. B26 original figure only illustrates point-plane distance; explanation does not falsely claim it illustrates skew lines.

## 4. Q15 / new formative source-owned item–outcome–role matrix

| ITEM_ID | OUTCOME_ID | ROLE / PLACEMENT |
| --- | --- | --- |
| THPT-G11-B22-TRY01 | G11-B22-ANGLE_LINES | SGK_KNOWLEDGE_FIRST_TRY / B22 |
| THPT-G11-B22-TRY02 | G11-B22-PERP_SKEW | SGK_KNOWLEDGE_FIRST_TRY / B22 |
| THPT-G11-B22-TRY03 | G11-B22-PARALLEL_DIRECTION | SGK_KNOWLEDGE_FIRST_TRY / B22 |
| THPT-G11-B22-TRY04 | G11-B22-PROOF_CONTEXT | SGK_KNOWLEDGE_FIRST_TRY / B22 |
| THPT-G11-B23-TRY01 | G11-B23-PERP_PLANE_DEF | SGK_KNOWLEDGE_FIRST_TRY / B23 |
| THPT-G11-B23-TRY02 | G11-B23-TWO_INTERSECT | SGK_KNOWLEDGE_FIRST_TRY / B23 |
| THPT-G11-B23-TRY03 | G11-B23-PLANE_PROPERTY | SGK_KNOWLEDGE_FIRST_TRY / B23 |
| THPT-G11-B23-TRY04 | G11-B23-PARALLEL_TRANSFER | SGK_KNOWLEDGE_FIRST_TRY / B23 |
| THPT-G11-B23-TRY05 | G11-B23-PRACTICAL_POST | SGK_KNOWLEDGE_FIRST_TRY / B23 |
| THPT-G11-B24-TRY01 | G11-B24-POINT_PROJECTION | SGK_KNOWLEDGE_FIRST_TRY / B24 |
| THPT-G11-B24-TRY02 | G11-B24-LINE_PROJECTION | SGK_KNOWLEDGE_FIRST_TRY / B24 |
| THPT-G11-B24-TRY03 | G11-B24-THREE_PERP | SGK_KNOWLEDGE_FIRST_TRY / B24 |
| THPT-G11-B24-TRY04 | G11-B24-LINE_PLANE_ANGLE | SGK_KNOWLEDGE_FIRST_TRY / B24 |
| THPT-G11-B24-TRY05 | G11-B24-ANGLE_APPLICATION | SGK_KNOWLEDGE_FIRST_TRY / B24 |
| THPT-G11-B25-TRY01 | G11-B25-PLANE_ANGLE | SGK_KNOWLEDGE_FIRST_TRY / B25 |
| THPT-G11-B25-TRY02 | G11-B25-PERP_PLANES | SGK_KNOWLEDGE_FIRST_TRY / B25 |
| THPT-G11-B25-TRY03 | G11-B25-PERP_PLANE_RULE | SGK_KNOWLEDGE_FIRST_TRY / B25 |
| THPT-G11-B25-TRY04 | G11-B25-DIHEDRAL | SGK_KNOWLEDGE_FIRST_TRY / B25 |
| THPT-G11-B25-TRY05 | G11-B25-RIGHT_PRISM | SGK_KNOWLEDGE_FIRST_TRY / B25 |
| THPT-G11-B25-TRY06 | G11-B25-REGULAR_PYRAMID | SGK_KNOWLEDGE_FIRST_TRY / B25 |
| THPT-G11-B25-TRY07 | G11-B25-REGULAR_FRUSTUM | SGK_KNOWLEDGE_FIRST_TRY / B25 |
| THPT-G11-B26-TRY01 | G11-B26-POINT_LINE | SGK_KNOWLEDGE_FIRST_TRY / B26 |
| THPT-G11-B26-TRY02 | G11-B26-POINT_PLANE | SGK_KNOWLEDGE_FIRST_TRY / B26 |
| THPT-G11-B26-TRY03 | G11-B26-PARALLEL_LINE_PLANE | SGK_KNOWLEDGE_FIRST_TRY / B26 |
| THPT-G11-B26-TRY04 | G11-B26-PARALLEL_PLANES | SGK_KNOWLEDGE_FIRST_TRY / B26 |
| THPT-G11-B26-TRY05 | G11-B26-SKEW_COMMON_PERP | SGK_KNOWLEDGE_FIRST_TRY / B26 |
| THPT-G11-B26-TRY06 | G11-B26-HEIGHT_APPLICATION | SGK_KNOWLEDGE_FIRST_TRY / B26 |
| THPT-G11-B27-TRY01 | G11-B27-PRISM_VOLUME | SGK_KNOWLEDGE_FIRST_TRY / B27 |
| THPT-G11-B27-TRY02 | G11-B27-PYRAMID_VOLUME | SGK_KNOWLEDGE_FIRST_TRY / B27 |
| THPT-G11-B27-TRY03 | G11-B27-BOX_VOLUME | SGK_KNOWLEDGE_FIRST_TRY / B27 |
| THPT-G11-B27-TRY04 | G11-B27-FRUSTUM_VOLUME | SGK_KNOWLEDGE_FIRST_TRY / B27 |
| THPT-G11-B27-TRY05 | G11-B27-VOLUME_APPLICATION | SGK_KNOWLEDGE_FIRST_TRY / B27 |

Each new Try is one unscored voluntary knowledge item, one stem and solution in same canonical file. 40 new examples identify source revision with EX-G11-Bnn-R02-xx; old R01 27 EX remain in immutable historical academic source, not relabeled as reviewed new items. Crosswalk of earlier families: B22 directional perpendicular/angle/diagonal/counterexample; B23 two-intersecting criterion/parallel invalid/plane conclusion/transfer; B24 projection/three perpendicular/geometric angle/slope; B25 plane-angle/criterion/dihedral/prism/pyramid; B26 point/m-planes parallel/common perpendicular/height; B27 prism/pyramid/tetrahedron/frustum/units. New examples use different data/context and preserve coverage; neither Try nor EX becomes a held-out assessment. All public bank and Written stems inspected for overlapping families and exact IDs; no exhaustive semantic duplicate assessment of private RD1, which remains protected.

**Unchanged public:** bank `docs/assets/javascripts/thpt-g11-chvii-b22-b27-source-locked-formative-r01.js` Git blob `4d656f2b8d952a2ad0be1c4298d065e0b8c95c88`, 51 canonical formative records; unified Written `docs/thpt-preview/thu-vien/tu-luan-g11-chuong-vii.md` Git blob `ef20f074dcd3972877f852c2bb075f6aa5362b9a`, 12 canonical Written IDs including six Anchor labels. Total original public 63. Original 33 skill IDs: 32 lesson-specific + G11-CHVII-INTEGRATED. All preserved in bank. New remediation links point to existing public item IDs at original chapter practice path; actual browser routing not tested.

## 5. Q16–Q18: protection, blocked new handoff, no RELEASE

Original 33 held-out private RD1 (historical receipt SHA256 1e6e7c552738c7fee55aff5b38036eef27cd415746049aae85718d51cb8f3db3) preserved outside public source; not accessed or copied. Private stems, keys, proofs and rubrics never committed. No changes to grading, official Final Submit, learner Mastery, Firebase/auth, records, public bank/Written, Topic, CSS/JS or site. SGK and Topic readiness remain independent. Historical PASS remains attached to previous R01 material only.

**Scoped AUTHOR_SIGNOFF:** Q18_AUTHOR_SELF_VERIFIED on the six exact learner blobs above, 126/126 structure and 72/72 case checks, 32/32 lesson outcomes. Candidate only. Current handoff V2 + ready manifest + REGISTER parity for new Delta-C SHA **not attested**; fresh SGK print-image/SBT review incomplete, independent review not done. Standard v3.2 permits self-verification when evidence is sufficient, not mandatory external review for all changes; if uncertain or owner requires, review only affected academic material with exactly five current THPT Permanent Sources v2.1 plus SGK/SBT S1, never transfer old PASS. Source copy for external review optional/ready, not reviewer verdict. 
Legacy release integration script `scripts/test-thpt-g11-chvii-release-integration.cjs` blob `be1c2a2c3e1139675fda048718f38410ecb588ce`: historical test source inspected, not executed against new structure. Relevant existing assertions/lines:
```text
 assert.equal((page.match(/data-thpt-help-id=/g)||[]).length,H,"Exact D6 count B"+n);
 assert(page.includes('data-ped-first-try="1"'),"Opt-in before Core B"+n);
 assert(page.includes("Hướng dẫn đọc hình"),"Original SVG interpretation B"+n);
 for(const x of helps.filter(x=>Number(x[2])===n)){assert(page.includes('data-thpt-help-id="'+x[1]+'"'),"Original HELP "+x[1]);assert(page.includes("?item="+x[4]),"Original D6 return canonical ID "+x[4]);}
 assert(page.includes(filename)&&page.includes("Hướng dẫn đọc hình"),"SVG rendered with reading guide B"+n);
```
Reconcile test compatibility in separate RELEASE when authorized, not within this learner authoring PR. No AP1–AP5/R1–R5/CI exact HEAD/browser/device/P1/P2 verification. No merge or deploy. **NEXT** G11-B28, Chapter VIII, only after sole checkpoint #987 updated with this chapter Draft PR and source evidence.


## AUTHOR Q18 RECEIPT END
