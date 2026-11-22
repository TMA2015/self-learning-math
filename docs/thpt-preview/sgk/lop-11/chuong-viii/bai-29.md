# Bài 29. Công thức cộng xác suất

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VIII · SGK KNTT TẬP 2</p><p class="thpt-r4-lead">Đếm đúng hợp của hai biến cố, biết khi nào cộng trực tiếp và khi nào trừ phần chung.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương VIII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Trong một khảo sát, cùng một người có thể chọn hai sở thích. Cộng số người mỗi nhóm dễ đếm một người hai lần. Trước khi dùng công thức, hãy chia kết quả thành các miền không trùng; khi lấy hai vật, có thể cần tổ hợp để đếm mỗi cặp đúng một lần.

    <figure class="thpt-r4-plot thpt-r4-probability-figure"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVIII-B29-01_R00.svg" alt="Sơ đồ 40 học sinh chia thành bốn miền: 9 chỉ A, 6 cả hai, 11 chỉ B, 14 ngoài cả hai; tổng 40."><figcaption>Đọc hình: Sơ đồ 40 học sinh chia thành bốn miền: 9 chỉ A, 6 cả hai, 11 chỉ B, 14 ngoài cả hai; tổng 40. Diện tích hình chỉ minh họa miền, không biểu thị tỉ lệ xác suất.</figcaption></figure>

    ### 1.1. Trừ phần chung
    
    Hai nhóm 13 và 11 có chung 4 người thì cộng nhóm đã đếm 4 người hai lần.
    
    **Vận dụng.** Chọn đều 1 trong 30 người, 13 thuộc A, 11 thuộc B, 4 thuộc cả hai. Tính P(A∪B).
    
    <span data-ped-first-try="1" data-outcome-id="G11-B29-ADDITION_OVERLAP" data-thpt-first-try-id="THPT-G11-B29-TRY01" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** (13+11−4)/30=2/3.
    
    <span data-thpt-help-id="HELP-G11-B29-TRY01" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Cộng hai tổng nhóm trực tiếp đếm phần giao hai lần; phải trừ đúng một lần.

        **Tự sửa:** Phải trừ 4, không trừ hai lần. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B29-C01">Luyện lại câu B29-C01</a>

    ### 1.2. Cộng khi không giao
    
    Chỉ khi hai sự kiện không thể cùng xảy ra mới cộng trực tiếp.
    
    **Vận dụng.** Gieo xúc xắc đều. A ra 1 hoặc 2, B ra 6. Tính xác suất A hoặc B.
    
    <span data-ped-first-try="2" data-outcome-id="G11-B29-ADDITION_DISJOINT" data-thpt-first-try-id="THPT-G11-B29-TRY02" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** 3/6=1/2, vì giao rỗng.
    
    <span data-thpt-help-id="HELP-G11-B29-TRY02" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Cộng trực tiếp chỉ khi giao rỗng; một kết quả trong giao không thể được đếm hai lần.

        **Tự sửa:** Kiểm tra giao trước khi cộng. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B29-C02">Luyện lại câu B29-C02</a>

    ### 1.3. Không biến cố nào
    
    Biến cố không A và không B là đối của A∪B, khác đối của giao.
    
    **Vận dụng.** Biết P(A∪B)=0,72. Tính cơ hội không A và không B.
    
    <span data-ped-first-try="3" data-outcome-id="G11-B29-COMPLEMENT_PROB" data-thpt-first-try-id="THPT-G11-B29-TRY03" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** 1−0,72=0,28.
    
    <span data-thpt-help-id="HELP-G11-B29-TRY03" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Không xảy ra cả A lẫn B là biến cố đối của hợp, không phải đối của giao.

        **Tự sửa:** Không dùng 1−P(AB) nếu muốn cả hai đều không xảy ra. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B29-C03">Luyện lại câu B29-C03</a>

    ### 1.4. Đọc bốn miền
    
    Tổng của bốn miền chính là kích thước mẫu.
    
    **Vận dụng.** Trong 50 người có 20 chọn A, 18 chọn B, 7 chọn cả hai. Tìm bốn miền.
    
    <span data-ped-first-try="4" data-outcome-id="G11-B29-VENN_COUNTS" data-thpt-first-try-id="THPT-G11-B29-TRY04" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** 13 chỉ A, 11 chỉ B, 7 cả hai, 19 không cái nào.
    
    <span data-thpt-help-id="HELP-G11-B29-TRY04" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Bốn miền không giao nhau phải khớp tổng mẫu; nếu thiếu miền ngoài cả hai, bảng chưa đủ.

        **Tự sửa:** Kiểm 13+11+7+19=50. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B29-C04">Luyện lại câu B29-C04</a>

    ### 1.5. Kiểm dữ kiện
    
    Giao không lớn hơn từng biến cố, hợp không lớn hơn 1.
    
    **Vận dụng.** P(A)=0,65, P(B)=0,6, P(AB)=0,1. Dữ kiện có thể đúng không?
    
    <span data-ped-first-try="5" data-outcome-id="G11-B29-PROBABILITY_BOUNDS" data-thpt-first-try-id="THPT-G11-B29-TRY05" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Không: hợp=1,15>1. Giao phải ít nhất 0,25.
    
    <span data-thpt-help-id="HELP-G11-B29-TRY05" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Độ lớn phần giao còn chịu giới hạn dưới do P(A∪B) ≤ 1, chứ không chỉ bị chặn trên.

        **Tự sửa:** Kiểm cả giới hạn dưới của giao, không chỉ giới hạn trên. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B29-C05">Luyện lại câu B29-C05</a>

    ### 1.6. Đếm bằng tổ hợp
    
    Chọn hai vật khác nhau không kể thứ tự, đều các cặp: mẫu có C(n,2) cặp. Đếm theo nhóm màu là các biến cố xung khắc.
    
    **Vận dụng.** Hộp có 5 bi đỏ, 4 xanh, lấy đều 2 bi không hoàn lại. Tính xác suất hai bi cùng màu.
    
    <span data-ped-first-try="6" data-outcome-id="G11-B29-REAL_APPLICATION" data-thpt-first-try-id="THPT-G11-B29-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** C(5,2)+C(4,2)=10+6=16 cặp; C(9,2)=36; P=4/9.
    
    <span data-thpt-help-id="HELP-G11-B29-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Đơn vị cơ bản là một cặp thẻ không thứ tự; đổi sang đếm từng thẻ riêng làm sai mẫu số.

        **Tự sửa:** Không lấy tổng 9 làm mẫu số; đơn vị kết quả là cặp. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B29-C06">Luyện lại câu B29-C06</a>

=== "Kiến thức SGK"

    ### 2.1. Công thức cộng cho hai biến cố xung khắc
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Công thức cộng cho hai biến cố xung khắc.</strong>
    
    Hai biến cố xung khắc khi \(AB=\varnothing\). Các trường hợp của A, B khi đó không trùng nhau, nên \(P(A\cup B)=P(A)+P(B)\). A và biến cố đối của A xung khắc, hợp bằng Ω, suy ra \(P(\overline A)=1-P(A)\). Khi lấy đều k vật trong n vật phân biệt không xét thứ tự, số cách là \(\binom nk=n!/[k!(n-k)!]\), với 0≤k≤n. Các cặp cùng đỏ/cùng xanh là xung khắc; đếm mỗi cặp một lần, không dùng tổ hợp nếu mô hình kết quả có thứ tự mà chưa quy đổi.
    
    </div>

    ### 2.2. Công thức cộng cho hai biến cố bất kì
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Công thức cộng cho hai biến cố bất kì.</strong>
    
    Chia hợp thành chỉ A, giao, chỉ B. Hai tổng P(A),P(B) đã tính giao hai lần; trừ một lần để mỗi miền được tính đúng một lần.
    \[
    P(A\cup B)=P(A)+P(B)-P(AB).
    \]
    Không cần độc lập. Đối của hợp là cả hai không xảy ra: \(P(\overline{A\cup B})=1-P(A\cup B)\). Điều kiện dữ kiện: \(\max(0,P(A)+P(B)-1)\le P(AB)\le\min(P(A),P(B))\); hợp phải nằm từ xác suất lớn hơn của hai biến cố đến 1. Với dữ kiện người/phiếu, chỉ dùng tần số chia tổng như xác suất khi chọn đều một đơn vị. Nếu chưa biết giao, không tự đặt giao bằng tích.
    
    </div>

=== "Ví dụ"

    ### 3.1. Hai nhóm chồng nhau
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B29-01"><p><strong>Đề bài:</strong> Trong 60 vé, 29 chọn X, 21 chọn Y, 9 chọn cả hai. Chọn đều một vé. Tính P(X∪Y).</p><p><strong>Phân tích:</strong> Trừ số vé chung trước khi chia.</p><p><strong>Lời giải:</strong> (29+21−9)/60=41/60.</p><p><strong>Kiểm lại:</strong> 41 không vượt 60 và không nhỏ hơn 29.</p></div>

    ### 3.2. Hai nhóm xung khắc
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B29-02"><p><strong>Đề bài:</strong> Gieo xúc xắc đều: A ra số 2, B ra số 3 hoặc 5. Tính P(A∪B).</p><p><strong>Phân tích:</strong> Giao rỗng, dùng công thức cộng rút gọn.</p><p><strong>Lời giải:</strong> 1/6+2/6=1/2.</p><p><strong>Kiểm lại:</strong> Đếm trực tiếp ba kết quả trong sáu.</p></div>

    ### 3.3. Tính biến cố đối
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B29-03"><p><strong>Đề bài:</strong> Một thẻ thuộc A với xác suất 11/25. Tính xác suất không thuộc A.</p><p><strong>Phân tích:</strong> A và đối A phủ Ω, không giao.</p><p><strong>Lời giải:</strong> 1−11/25=14/25.</p><p><strong>Kiểm lại:</strong> Hai xác suất cộng bằng 1.</p></div>

    ### 3.4. Tìm giao từ hợp
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B29-04"><p><strong>Đề bài:</strong> P(A)=0,55, P(B)=0,45, P(A∪B)=0,75. Tính P(AB).</p><p><strong>Phân tích:</strong> Biến đổi công thức cộng.</p><p><strong>Lời giải:</strong> 0,55+0,45−0,75=0,25.</p><p><strong>Kiểm lại:</strong> Giao nằm giữa 0 và 0,45.</p></div>

    ### 3.5. Phát hiện dữ kiện sai
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B29-05"><p><strong>Đề bài:</strong> P(A)=0,8, P(B)=0,7, P(AB)=0,4. Có tồn tại mô hình này không?</p><p><strong>Phân tích:</strong> Kiểm tra hợp không vượt 1.</p><p><strong>Lời giải:</strong> Hợp=1,1>1 nên không thể.</p><p><strong>Kiểm lại:</strong> Giao phải ít nhất 0,5.</p></div>

    ### 3.6. Phương pháp tổ hợp và cộng
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B29-R02-06"><p><strong>Đề bài:</strong> Có 6 thẻ đỏ, 4 thẻ xanh, lấy đều 2 thẻ không hoàn lại. Tính xác suất cùng màu.</p><p><strong>Phân tích:</strong> Mỗi cặp không thứ tự đồng khả năng. Hai trường hợp cùng đỏ hoặc cùng xanh xung khắc.</p><p><strong>Lời giải:</strong> Mẫu C(10,2)=45; số thuận lợi C(6,2)+C(4,2)=15+6=21; P=7/15.</p><p><strong>Kiểm lại:</strong> Khác màu có 6·4=24 cặp, 21+24=45.</p></div>

    ### 3.7. Tổ hợp với phần giao khác rỗng
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B29-R02-07"><p><strong>Đề bài:</strong> Từ các thẻ 1 đến 7 lấy đều hai thẻ, không hoàn lại. A là có thẻ 1, B là có thẻ 7. Tính P(A∪B).</p><p><strong>Phân tích:</strong> Cặp {1,7} nằm ở cả hai biến cố.</p><p><strong>Lời giải:</strong> Có 21 cặp; mỗi A và B có 6 cặp; giao có 1. P=(6+6−1)/21=11/21.</p><p><strong>Kiểm lại:</strong> Đối là lấy 2 trong 5 thẻ giữa: 10/21; tổng 1.</p></div>

=== "Lỗi thường gặp"

    <span data-thpt-help-id="HELP-G11-CHVIII-B29-01" hidden></span>
    
    ??? tip "4.1. Cộng quên trừ giao"
    
        Đếm từng miền riêng, xem 2.2. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B29-C01">Luyện lại câu B29-C01</a>

    <span data-thpt-help-id="HELP-G11-CHVIII-B29-02" hidden></span>
    
    ??? tip "4.2. Chấp nhận xác suất lớn hơn 1"
    
        So giới hạn giao và hợp, xem 2.2. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B29-C05">Luyện lại câu B29-C05</a>

    [Core và Luyện tập Bài 29](luyen-tap.md) · <a href="../../../thu-vien/tu-luan-g11-chuong-viii.md">Tự luận Chương VIII</a> · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md)

*Nguồn đối chiếu: SGK Toán 11 Kết nối tri thức với cuộc sống, Tập hai, Bài 29, trang in 72–75.*

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập hai, Bài 29 (trang in 72–75); đối chiếu SBT cùng bộ (tài liệu tham khảo luyện tập).</p>
