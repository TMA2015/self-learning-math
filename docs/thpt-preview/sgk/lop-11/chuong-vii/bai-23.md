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
