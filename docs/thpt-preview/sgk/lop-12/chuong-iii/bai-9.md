# Toán 12 · Bài 9. Khoảng biến thiên và khoảng tứ phân vị

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 12 · CHƯƠNG III · SGK KẾT NỐI TRI THỨC · TẬP MỘT · TRANG 75–79</p><p class="thpt-r4-lead">Hiểu số liệu, đọc hình, tự làm và đối chiếu trước khi luyện tập.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương III</a><a href="../bai-10/">Bài 10 · Học tiếp</a></nav></div>

=== "Khám phá kiến thức"

    Hai mẫu có thể cùng trung bình nhưng rất khác về độ trải rộng. Khoảng biến thiên trả lời câu hỏi về hai đầu, khoảng tứ phân vị mô tả nửa giữa. Trước khi tính, ôn cách sắp xếp mẫu thô, trung vị, tần số và khoảng nửa kín [a;b). Chẳng hạn 10 thuộc [10;20), không thuộc [0;10).

    ### 1.1. Từ số liệu thô đến bảng nhóm
    
    Khi nhiều quan sát được gộp vào lớp, ta giữ số lần xuất hiện trong mỗi lớp nhưng mất vị trí chính xác bên trong lớp. Tổng tần số phải bằng cỡ mẫu. Nhóm tần số 0 không chứa dữ liệu.
    
    **Vận dụng.** Cho 8 số đo: 11, 16, 19, 20, 22, 27, 28, 31. Lập tần số các nhóm [10;20), [20;30), [30;40).
    
    <span data-ped-first-try="1" data-outcome-id="G12-CHIII-B09-O01" data-thpt-first-try-id="THPT-G12-B09-TRY01" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Tần số lần lượt 3, 4, 1; tổng 8. Số 20 thuộc nhóm thứ hai.
    
    <span data-thpt-help-id="HELP-G12-B09-TRY01" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Gạch từng quan sát đã đếm, kiểm tổng tần số và đầu mút. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b09-c01); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b09-p01). Sau đó tự làm lại Vận dụng không nhìn lời giải.

    ### 1.2. Khoảng biến thiên dùng hai cận
    
    Với mẫu thô, khoảng biến thiên bằng giá trị lớn nhất trừ nhỏ nhất. Với mẫu nhóm, chỉ biết hai lớp ngoài có dữ liệu: lấy cận trên lớp cuối trừ cận dưới lớp đầu. Cận lớp không nhất thiết là quan sát thật.
    
    **Vận dụng.** Các lớp [0;4), [4;8), [8;12), [12;16), [16;20) có tần số 0,3,5,2,0. Tính R nhóm.
    
    <span data-ped-first-try="2" data-outcome-id="G12-CHIII-B09-O02" data-thpt-first-try-id="THPT-G12-B09-TRY02" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Lớp đầu có dữ liệu [4;8), cuối [12;16). $R=16-4=12$ (đơn vị gốc).
    
    <span data-thpt-help-id="HELP-G12-B09-TRY02" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Bỏ lớp rỗng ở hai đầu; không dùng trung điểm. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b09-c02); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b09-p03). Sau đó tự làm lại Vận dụng không nhìn lời giải.

    ### 1.3. Biên nhạy với một quan sát xa
    
    Chỉ một quan sát xa có thể làm R tăng mạnh mà phần giữa gần như không đổi. Cách chia lớp cũng ảnh hưởng R nhóm. Vì vậy R không phản ánh hết mức phân tán của cả mẫu.
    
    **Vận dụng.** Ba lớp liên tiếp [10;20),[20;30),[30;40) đều có dữ liệu. Thêm một quan sát ở [70;80). R nhóm thay đổi bao nhiêu?
    
    <span data-ped-first-try="3" data-outcome-id="G12-CHIII-B09-O03" data-thpt-first-try-id="THPT-G12-B09-TRY03" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** R từ 30 thành 70, tăng 40 đơn vị. Không đủ thông tin để kết luận IQR tăng 40.
    
    <span data-thpt-help-id="HELP-G12-B09-TRY03" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        So cận ngoài trước và sau, phân biệt một ngoại lệ với toàn bộ mẫu. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b09-c03); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b09-p05). Sau đó tự làm lại Vận dụng không nhìn lời giải.

    ### 1.4. Vị trí tứ phân vị và cộng dồn
    
    Nếu xếp các quan sát theo thứ tự không giảm, Q₁ và Q₃ nằm gần vị trí một phần tư và ba phần tư. Với bảng nhóm, mốc $n/4$ và $3n/4$ được đặt trên cột cộng dồn. Tìm lớp có tần số dương đầu tiên mà cộng dồn đạt hoặc vượt mốc.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHIII-B09-QUARTILES-R00.svg" alt="Biểu đồ tần số tích lũy bốn nhóm: 6, 20, 32, 40; đường ngang tại 10 và 30."/><figcaption>Đọc trục đứng theo thang 0–40: mốc 10 giữa 6 và 20, mốc 30 giữa 20 và 32. Chọn lớp 2 và lớp 3, sau đó mới nội suy trên độ rộng lớp.</figcaption></figure>
    
    **Vận dụng.** Tần số bốn lớp liên tiếp là 4, 8, 12, 8. Tìm n, mốc Q₁, Q₃ và lớp tương ứng.
    
    <span data-ped-first-try="4" data-outcome-id="G12-CHIII-B09-O04" data-thpt-first-try-id="THPT-G12-B09-TRY04" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $n=32$; mốc 8 và 24. Cộng dồn 4,12,24,32. Q₁ ở lớp 2; Q₃ ở cận trên lớp 3 theo quy ước chọn lớp đạt mốc trước.
    
    <span data-thpt-help-id="HELP-G12-B09-TRY04" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không chọn lớp đông nhất; tại đúng biên, không nội suy tùy tiện qua lớp rỗng. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b09-c04); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b09-p07). Sau đó tự làm lại Vận dụng không nhìn lời giải.

    ### 1.5. Nội suy: phần nào của bề rộng lớp?
    
    Giả sử trong lớp chứa tứ phân vị, có f quan sát và C quan sát thuộc các lớp trước. Nếu mốc cần đạt là t thì còn t−C quan sát trong lớp, tức phần $(t-C)/f$ của lớp trong mô hình phân bố đều. Nhân bề rộng h rồi cộng cận dưới L.
    
    **Vận dụng.** Với n=24, lớp chứa Q₁ là [12;18), C=2, f=8. Ước lượng Q₁.
    
    <span data-ped-first-try="5" data-outcome-id="G12-CHIII-B09-O05" data-thpt-first-try-id="THPT-G12-B09-TRY05" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $t=6$, phần cần đi $(6-2)/8=1/2$. $Q_1=12+6/2=15$.
    
    <span data-thpt-help-id="HELP-G12-B09-TRY05" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Kiểm phần nội suy từ 0 đến 1; không lấy tổng cộng dồn hết lớp làm C. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b09-c05); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b09-p09). Sau đó tự làm lại Vận dụng không nhìn lời giải.

    ### 1.6. Chọn đại lượng theo câu hỏi
    
    R nhìn hai đầu, khoảng tứ phân vị $\Delta_Q=Q_3-Q_1$ nhìn nửa giữa. Hai mẫu có thể cùng IQR mà R khác nhau hoặc ngược lại. So sánh cùng đơn vị và cách ghép nhóm tương thích.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHIII-B09-RANGE-IQR-R00.svg" alt="Miền cận 0–50, Q1≈17,78, Q3≈32,22; khoảng tứ phân vị≈14,44."/><figcaption>Đoạn ngoài thể hiện cận nhóm có dữ liệu, đoạn giữa từ Q₁ tới Q₃. Không nhầm 50 là IQR.</figcaption></figure>
    
    **Vận dụng.** Hai bảng cùng đơn vị: A có R=40, IQR≈12; B có R=60, IQR≈10. Mẫu nào trải rộng toàn miền hơn, mẫu nào tập trung ở giữa hơn?
    
    <span data-ped-first-try="6" data-outcome-id="G12-CHIII-B09-O06" data-thpt-first-try-id="THPT-G12-B09-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** B có biên rộng hơn (60>40), đồng thời nửa giữa hẹp hơn (10<12). Không có một kết luận duy nhất về mọi khía cạnh độ phân tán.
    
    <span data-thpt-help-id="HELP-G12-B09-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Đọc kỹ đề hỏi biên hay phần giữa; nêu cả hai nhận xét nếu cần. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b09-c06); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b09-p11). Sau đó tự làm lại Vận dụng không nhìn lời giải.

    ### 1.7. Thực hành cả hai cách: mẫu thô và ghép nhóm
    
    Với 8 quan sát thô đã sắp xếp, Q₁ là trung vị 4 số đầu, Q₃ là trung vị 4 số cuối. Với bảng ghép, phải dùng mốc n/4, 3n/4 và nội suy; hai cách không nhất thiết trùng nhau.
    
    **Vận dụng.** Dữ liệu 6,7,8,9,12,13,14,18. Tính R và IQR gốc, rồi ghép theo [5;10),[10;15),[15;20) và tính R, IQR nhóm.
    
    <span data-ped-first-try="7" data-outcome-id="G12-CHIII-B09-O05" data-thpt-first-try-id="THPT-G12-B09-TRY07" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Gốc: $R=18-6=12$; $Q_1=(7+8)/2=7{,}5$, $Q_3=(13+14)/2=13{,}5$, IQR=6. Nhóm: f=(4,3,1), cộng dồn 4,7,8; $R=20-5=15$, $Q_1=5+2\cdot5/4=7{,}5$, $Q_3=10+(6-4)\cdot5/3=40/3$, IQR $=35/6\approx5{,}83$. Giá trị trùng ở Q₁ chỉ là tình cờ.
    
    <span data-thpt-help-id="HELP-G12-B09-TRY07" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Giữ nguyên mẫu gốc để tính chính xác, không dùng trung điểm lớp thay từng quan sát. [Ôn câu nền tảng](../luyen-tap/#thpt-g12-b09-c05); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b09-p09). Sau đó tự làm lại Vận dụng không nhìn lời giải.

=== "Kiến thức SGK"

    ### 2.1. Khoảng biến thiên của mẫu số liệu ghép nhóm
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khoảng biến thiên của mẫu số liệu ghép nhóm.</strong><p>Mẫu số liệu ghép nhóm có các lớp nửa kín, hữu hạn, không chồng lấn, tần số \(f_i\ge0\), \(n=\sum_i f_i&gt;0\). Khoảng biến thiên R của mẫu ghép nhóm là cận trên lớp cuối có tần số dương trừ cận dưới lớp đầu có tần số dương. Nó là độ rộng phủ theo các nhóm, không phải khoảng biến thiên chính xác của mẫu gốc. Với mẫu nằm trong các khoảng nửa kín, \(R_{\rm gốc}\le R\).</p></div>

    ### 2.1.1. Ý nghĩa và giới hạn
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Ý nghĩa và giới hạn.</strong><p>R có cùng đơn vị dữ liệu, nhạy với quan sát xa ở hai đầu và cách chia lớp. R không xác định IQR hay phương sai. Chỉ so các mẫu cùng đơn vị, phạm vi và cách ghép đủ tương thích.</p></div>

    ### 2.2. Khoảng tứ phân vị của mẫu số liệu ghép nhóm
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khoảng tứ phân vị của mẫu số liệu ghép nhóm.</strong><p>Khoảng tứ phân vị là \(\Delta_Q=Q_3-Q_1\) (còn gọi IQR), mô tả độ rộng nửa giữa theo các tứ phân vị. Với dữ liệu nhóm, các tứ phân vị được ước lượng bằng nội suy, không nhất thiết bằng tứ phân vị mẫu gốc.</p></div>

    ### 2.2.1. Xác định lớp và nội suy
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Xác định lớp và nội suy.</strong><p>Đặt \(t_r=rn/4\) với r=1 hoặc 3. Chọn lớp có tần số dương đầu tiên chứa mốc theo cộng dồn đạt hoặc vượt t_r. Gọi L là cận dưới, h là bề rộng dương, f&gt;0 là tần số lớp, C là tổng tần số trước lớp. Công thức \(Q_r=L+\frac{t_r-C}{f}h\). Kiểm \(0\le(t_r-C)/f\le1\). Nếu đúng mốc cộng dồn ở biên lớp thì theo quy ước chọn lớp đạt mốc trước; hai lớp kề cùng biên cho cùng giá trị nếu không có khoảng rỗng. Không chia f=0. Giữ số chính xác đến phép trừ cuối; khi so với mẫu thô thì ghi rõ xấp xỉ.</p></div>

=== "Ví dụ"

    ### 3.1. Nhận diện nhóm rỗng
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B09-01"><p><strong>Đề bài:</strong> Bảng [0;10), [10;20), [20;30) có f=(0,5,7). Tìm cỡ mẫu và lớp đầu có dữ liệu.</p><p><strong>Phân tích:</strong> Cộng các tần số, tìm lớp đầu có f dương.</p><p><strong>Lời giải:</strong> n=0+5+7=12; lớp đầu [10;20).</p><p><strong>Kiểm lại:</strong> Tổng đúng 12; không có quan sát trong [0;10).</p></div>

    ### 3.2. Khoảng biến thiên nhóm
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B09-02"><p><strong>Đề bài:</strong> Các nhóm [0;5),[5;10),[10;15),[15;20), f=(0,5,10,0). Tính R.</p><p><strong>Phân tích:</strong> Hai nhóm rỗng ngoài cùng không tham gia xác định cận.</p><p><strong>Lời giải:</strong> \(R=15-5=10\).</p><p><strong>Kiểm lại:</strong> Không lấy 20−0 hay hai trung điểm.</p></div>

    ### 3.3. Tác động ngoại lệ
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B09-03"><p><strong>Đề bài:</strong> Lớp đầu [10;20), lớp cuối [30;40). Thêm quan sát ở [60;70).</p><p><strong>Phân tích:</strong> Chỉ cận trên thay đổi.</p><p><strong>Lời giải:</strong> R từ 40−10=30 thành 70−10=60.</p><p><strong>Kiểm lại:</strong> Tăng 30 nhưng không biết IQR đổi bao nhiêu.</p></div>

    ### 3.4. Định vị Q₁ và Q₃
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B09-04"><p><strong>Đề bài:</strong> Bốn lớp liền nhau có f=(6,14,12,8). Tìm lớp chứa các tứ phân vị.</p><p><strong>Phân tích:</strong> Lập cộng dồn trước khi nội suy.</p><p><strong>Lời giải:</strong> \(n=40\), t₁=10,t₃=30; cộng dồn 6,20,32,40. Mốc 10 ở lớp 2, mốc 30 ở lớp 3.</p><p><strong>Kiểm lại:</strong> Đối chiếu hình; 6&lt;10≤20 và 20&lt;30≤32.</p></div>

    ### 3.5. Nội suy và trừ hai tứ phân vị
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B09-05"><p><strong>Đề bài:</strong> Các lớp [10;15),[15;20),[20;25),[25;30), f=(6,14,12,8). Tính IQR.</p><p><strong>Phân tích:</strong> Dựa vào lớp ở ví dụ trước, dùng từng bộ L,h,C,f.</p><p><strong>Lời giải:</strong> \(Q_1=15+\frac{10-6}{14}5=115/7\approx16{,}43\). \(Q_3=20+\frac{30-20}{12}5=145/6\approx24{,}17\). \(\Delta_Q=325/42\approx7{,}74\).</p><p><strong>Kiểm lại:</strong> Hai Q nằm trong lớp đã chọn; làm tròn sau khi trừ.</p></div>

    ### 3.6. Hai mẫu ghép nhóm
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B09-06"><p><strong>Đề bài:</strong> Năm lớp [0;10),[10;20),[20;30),[30;40),[40;50). A có f=(1,9,12,9,1); B có f=(0,7,18,7,0). So sánh R và IQR.</p><p><strong>Phân tích:</strong> Cả hai n=32; so mốc 8 và 24 theo cộng dồn từng bảng.</p><p><strong>Lời giải:</strong> A: \(R=50\), \(Q_1=10+70/9=160/9\), \(Q_3=30+20/9=290/9\), IQR=130/9≈14,44. B: \(R=30\), \(Q_1=20+10/18=185/9\), \(Q_3=20+170/18=265/9\), IQR=80/9≈8,89. B tập trung hơn theo cả hai thước đo.</p><p><strong>Kiểm lại:</strong> Kiểm lớp rỗng B; kết luận giới hạn ở mẫu và cách ghép này.</p></div>

    ### 3.7. Dữ liệu thô, bảng ghép và sai khác
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B09-R02-07"><p><strong>Đề bài:</strong> 12 thời gian (phút): 21,12,19,13,26,38,17,31,28,16,22,24. Ghép lớp [10;20),[20;30),[30;40), so R và IQR gốc/nhóm.</p><p><strong>Phân tích:</strong> Sắp xếp và tính tứ phân vị gốc trước, rồi đếm lớp và nội suy riêng.</p><p><strong>Lời giải:</strong> Mẫu đã xếp: 12,13,16,17,19,21,22,24,26,28,31,38. Gốc: R=26, \(Q_1=(16+17)/2=16{,}5\), \(Q_3=(26+28)/2=27\), IQR=10,5. Nhóm f=(5,5,2), cộng dồn 5,10,12; R=30. Mốc 3 và 9; \(Q_1=10+3\cdot10/5=16\), \(Q_3=20+(9-5)\cdot10/5=28\), IQR=12 phút.</p><p><strong>Kiểm lại:</strong> Tổng tần số 12; R nhóm lớn hơn R gốc, IQR nhóm lệch 1,5 phút. Không suy rằng sai khác luôn cùng dấu.</p></div>

    ### 3.8. Mốc đúng biên và lớp rỗng
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B09-R02-08"><p><strong>Đề bài:</strong> Các lớp [0;10),[10;20),[20;30),[30;40) có f=(4,0,8,4). Tìm Q₁, Q₃ và IQR.</p><p><strong>Phân tích:</strong> Mốc n/4=4, 3n/4=12 đúng tại hai cộng dồn; chọn lớp đạt mốc trước có tần số dương.</p><p><strong>Lời giải:</strong> \(Q_1=0+4\cdot10/4=10\), \(Q_3=20+(12-4)\cdot10/8=30\); IQR=20.</p><p><strong>Kiểm lại:</strong> Không chia cho tần số lớp rỗng. Đây là quy ước nội suy nhóm, không khẳng định tứ phân vị gốc bằng 10 và 30.</p></div>

=== "Lỗi thường gặp"

    ### 4.1. Từ số liệu thô đến bảng nhóm
    
    ??? tip "Cách tự sửa"
    
        Gạch từng quan sát đã đếm, kiểm tổng tần số và đầu mút. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b09-c01); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b09-p01).

    ### 4.2. Khoảng biến thiên dùng hai cận
    
    ??? tip "Cách tự sửa"
    
        Bỏ lớp rỗng ở hai đầu; không dùng trung điểm. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b09-c02); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b09-p03).

    ### 4.3. Biên nhạy với một quan sát xa
    
    ??? tip "Cách tự sửa"
    
        So cận ngoài trước và sau, phân biệt một ngoại lệ với toàn bộ mẫu. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b09-c03); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b09-p05).

    ### 4.4. Vị trí tứ phân vị và cộng dồn
    
    ??? tip "Cách tự sửa"
    
        Không chọn lớp đông nhất; tại đúng biên, không nội suy tùy tiện qua lớp rỗng. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b09-c04); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b09-p07).

    ### 4.5. Nội suy: phần nào của bề rộng lớp?
    
    ??? tip "Cách tự sửa"
    
        Kiểm phần nội suy từ 0 đến 1; không lấy tổng cộng dồn hết lớp làm C. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b09-c05); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b09-p09).

    ### 4.6. Chọn đại lượng theo câu hỏi
    
    ??? tip "Cách tự sửa"
    
        Đọc kỹ đề hỏi biên hay phần giữa; nêu cả hai nhận xét nếu cần. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b09-c06); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b09-p11).

    ### 4.7. Thực hành cả hai cách: mẫu thô và ghép nhóm
    
    ??? tip "Cách tự sửa"
    
        Giữ nguyên mẫu gốc để tính chính xác, không dùng trung điểm lớp thay từng quan sát. [Ôn lại câu Core](../luyen-tap/#thpt-g12-b09-c05); [luyện câu khác rồi quay lại](../luyen-tap/#thpt-g12-b09-p09).

    [Core Bài 9](../luyen-tap/#b09-core) · [Luyện tập và Tự luận](../luyen-tap/#b09-practice) · [Hỗ trợ khi gặp khó khăn](../luyen-tap/#b09-help) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/)

*Nguồn đối chiếu: SGK Toán 12 Kết nối tri thức, Tập một, trang in 75–79.*
