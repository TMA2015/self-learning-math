# Toán 12 · Bài 19. Công thức xác suất toàn phần và công thức Bayes

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 12 · CHƯƠNG VI · SGK KẾT NỐI TRI THỨC · TẬP HAI</p><p class="thpt-r4-lead">Hiểu nhóm điều kiện, đọc hình, tự vận dụng và đối chiếu trước khi luyện tập.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương VI</a><a href="../bai-18/">Bài 18</a><a href="../luyen-tap/#b19-core">Core</a><a href="../luyen-tap/#b19-practice">Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra</a></nav></div>

=== "Khám phá kiến thức"

    Một kết quả có thể xuất phát từ nhiều nhóm. Muốn biết xác suất chung, phải tính theo tỉ trọng từng nhóm. Khi quan sát kết quả, ta lại muốn suy khả năng thuộc nhóm nào: Bayes chuẩn hóa các nhánh đi tới kết quả đã biết. Ôn biến cố đối, giao, công thức nhân và xác suất có điều kiện B18.

    ### 1.1. Phân hoạch: không thiếu, không đếm trùng
    
    A và biến cố đối $\overline A$ loại trừ nhau và phủ hết không gian. B gồm hai phần $A\cap B$ và $\overline A\cap B$. Cộng hai xác suất giao cho P(B); đây là lý do của công thức toàn phần.
    
    **Vận dụng.** $P(A)=0{,}45$. Một kết quả E có thể xảy ra ở A hoặc không A. Viết P(không A) và phép phân chia E.
    
    <span data-ped-first-try="1" data-outcome-id="G12-CHVI-B19-O01" data-thpt-first-try-id="THPT-G12-B19-TRY01" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $P(\overline A)=0{,}55$; $E=(E\cap A)\cup(E\cap\overline A)$, hai phần xung khắc. $P(E)=P(E\cap A)+P(E\cap\overline A)$.
    
    <span data-thpt-help-id="HELP-G12-B19-TRY01" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Kiểm các nhóm không giao nhau và tổng tỉ trọng bằng 1. [Ôn phương pháp nền tảng](../luyen-tap/#thpt-g12-b19-c01); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b19-p01). Sau đó tự làm lại Vận dụng.

    ### 1.2. Toàn phần là trung bình theo trọng số
    
    Xác suất kết quả chung là tổng tỉ trọng nhóm nhân xác suất kết quả trong nhóm. Nhóm lớn đóng góp nhiều hơn nếu xác suất điều kiện như nhau. Không lấy trung bình cộng khi nhóm có tỉ trọng khác.
    
    **Vận dụng.** Nhóm A chiếm 20%, 90% đạt; nhóm còn lại chiếm 80%, 60% đạt. Tính xác suất đạt chung.
    
    <span data-ped-first-try="2" data-outcome-id="G12-CHVI-B19-O02" data-thpt-first-try-id="THPT-G12-B19-TRY02" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $0{,}2\cdot0{,}9+0{,}8\cdot0{,}6=0{,}66=33/50$.
    
    <span data-thpt-help-id="HELP-G12-B19-TRY02" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Kiểm kết quả giữa 0,6 và 0,9. [Ôn phương pháp nền tảng](../luyen-tap/#thpt-g12-b19-c02); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b19-p02). Sau đó tự làm lại Vận dụng.

    ### 1.3. Đọc sơ đồ cây đúng loại xác suất
    
    Mỗi cạnh tầng hai là xác suất có điều kiện theo nút cha. Nhân dọc đường mới ra xác suất giao ở lá; tổng các lá B cho P(B). Kiểm tổng mọi lá bằng 1.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHVI-B19-TOTAL-R02.svg" alt="Cây nguồn A 60% lỗi 2%, nguồn B 40% lỗi 5%; lá lỗi 0,012 và 0,020."/><figcaption>Nhân tỉ trọng với xác suất điều kiện; cộng hai lá lỗi thành 0,032.</figcaption></figure>
    
    **Vận dụng.** $P(A)=0{,}3$, $P(E\mid A)=0{,}8$, $P(E\mid\overline A)=0{,}1$. Tính bốn lá và P(E).
    
    <span data-ped-first-try="3" data-outcome-id="G12-CHVI-B19-O03" data-thpt-first-try-id="THPT-G12-B19-TRY03" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Các lá AE, A không E, không AE, không A không E lần lượt 0,24;0,06;0,07;0,63. Tổng 1. $P(E)=0{,}31$.
    
    <span data-thpt-help-id="HELP-G12-B19-TRY03" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Ghi cả nhánh đối ở mỗi nút; chỉ cộng hai lá E. [Ôn phương pháp nền tảng](../luyen-tap/#thpt-g12-b19-c03); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b19-p03). Sau đó tự làm lại Vận dụng.

    ### 1.4. Bayes: chọn phần trong các lá được quan sát
    
    Khi biết E xảy ra, chỉ các lá E còn trong mẫu. Phần lá AE có trọng số $P(A)P(E\mid A)$; chia cho tổng mọi lá E. Không đổi P(E|A) thành P(A|E) một cách máy móc.
    
    **Vận dụng.** Nguồn A chiếm 30%, tỷ lệ lỗi 4%; nguồn còn lại 70%, lỗi 2%. Biết sản phẩm lỗi, tính P(A|lỗi).
    
    <span data-ped-first-try="4" data-outcome-id="G12-CHVI-B19-O04" data-thpt-first-try-id="THPT-G12-B19-TRY04" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Tử $0{,}3\cdot0{,}04=0{,}012$. Mẫu $0{,}012+0{,}7\cdot0{,}02=0{,}026$. Kết quả $6/13$.
    
    <span data-thpt-help-id="HELP-G12-B19-TRY04" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Cần tỉ trọng ban đầu, hai xác suất điều kiện và mẫu dương. [Ôn phương pháp nền tảng](../luyen-tap/#thpt-g12-b19-c04); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b19-p04). Sau đó tự làm lại Vận dụng.

    ### 1.5. Dương tính và tỷ lệ nền
    
    Trong mô hình xét nghiệm giả định, độ nhạy s=P(+|A), độ đặc hiệu c=P(−|không A), giả dương f=1−c. Nhóm có đặc điểm hiếm có thể cho ít dương thật hơn dương giả trong nhóm đông. Đây là mô hình xác suất, không phải chẩn đoán cá nhân.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHVI-B19-BAYES-R02.svg" alt="10.000 bản ghi giả định: 90 dương thật,495 dương giả,10 âm giả,9405 âm thật."/><figcaption>Mẫu dương 585; mẫu âm 9415. Khi biết dương hoặc âm, chọn đúng cột tương ứng.</figcaption></figure>
    
    **Vận dụng.** Trong 1000 phép thử giả định: 5% có đặc điểm, độ nhạy 80%, đặc hiệu 90%. Tính P(có đặc điểm|dương).
    
    <span data-ped-first-try="5" data-outcome-id="G12-CHVI-B19-O05" data-thpt-first-try-id="THPT-G12-B19-TRY05" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** 50 có đặc điểm →40 dương thật; 950 không →95 dương giả. $40/(40+95)=8/27$.
    
    <span data-thpt-help-id="HELP-G12-B19-TRY05" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không đọc thẳng 80%; mẫu là mọi phép thử dương. [Ôn phương pháp nền tảng](../luyen-tap/#thpt-g12-b19-c05); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b19-p05). Sau đó tự làm lại Vận dụng.

    ### 1.6. Âm tính: dùng đúng các nhánh đối
    
    Độ nhạy s cho âm giả 1−s trong nhóm A. Độ đặc hiệu c là âm thật trong nhóm không A. Khi biết kết quả âm, mẫu gồm cả hai nhóm âm. Với p=P(A), $P(\overline A\mid -)=\frac{(1-p)c}{p(1-s)+(1-p)c}$ nếu mẫu dương.
    
    **Vận dụng.** Mô hình bộ lọc có 10% vật lỗi; phát hiện 80% vật lỗi, nhận đúng 95% vật tốt. Biết bộ lọc báo tốt, xác suất vật thực sự tốt?
    
    <span data-ped-first-try="6" data-outcome-id="G12-CHVI-B19-O05" data-thpt-first-try-id="THPT-G12-B19-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Âm giả $0{,}1\cdot0{,}2=0{,}02$; âm thật $0{,}9\cdot0{,}95=0{,}855$. Kết quả $0{,}855/0{,}875=171/175$.
    
    <span data-thpt-help-id="HELP-G12-B19-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không dùng độ nhạy làm xác suất đã biết âm; dùng đúng nhánh bổ sung. [Ôn phương pháp nền tảng](../luyen-tap/#thpt-g12-b19-c05); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b19-p05). Sau đó tự làm lại Vận dụng.

    ### 1.7. Nhiều nguồn: mở rộng phân hoạch
    
    Với các nhóm Aᵢ đôi một xung khắc, phủ hết không gian, nhân tỷ trọng từng nguồn với xác suất E theo nguồn rồi cộng. Nếu quan sát E, Bayes chọn đúng một lá nguồn E.
    
    **Vận dụng.** Ba nguồn chiếm 20%,50%,30%; xác suất thành công tương ứng 50%,80%,90%. Tính xác suất thành công và P(nguồn 3|thành công).
    
    <span data-ped-first-try="7" data-outcome-id="G12-CHVI-B19-O06" data-thpt-first-try-id="THPT-G12-B19-TRY07" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $P(E)=0{,}1+0{,}4+0{,}27=0{,}77$. $P(A_3\mid E)=27/77$.
    
    <span data-thpt-help-id="HELP-G12-B19-TRY07" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Tổng tỷ trọng bằng 1; nếu nhóm xác suất 0, bỏ giao bằng 0 thay vì tính điều kiện. [Ôn phương pháp nền tảng](../luyen-tap/#thpt-g12-b19-c06); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b19-p06). Sau đó tự làm lại Vận dụng.

    ### 1.8. Lời giải tổng hợp có kiểm tra
    
    Gọi tên nhóm và kết quả; tính giao theo nhánh; cộng tổng kết quả; nếu đề hỏi ngược thì chia Bayes. Khi có nhiều yêu cầu, phân biệt xác suất trước và sau quan sát; không biến tương quan thành quan hệ nhân quả.
    
    **Vận dụng.** Ca sáng chiếm 40%, 75% hoàn thành; ca tối chiếm 60%, 50% hoàn thành. Tính P(hoàn thành), P(ca tối|hoàn thành).
    
    <span data-ped-first-try="8" data-outcome-id="G12-CHVI-B19-O07" data-thpt-first-try-id="THPT-G12-B19-TRY08" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $P(E)=0{,}4\cdot0{,}75+0{,}6\cdot0{,}5=0{,}6$. $P(tối\mid E)=0{,}3/0{,}6=1/2$.
    
    <span data-thpt-help-id="HELP-G12-B19-TRY08" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Nêu rõ tử giao, mẫu toàn phần và kiểm 0≤kết quả≤1. [Ôn phương pháp nền tảng](../luyen-tap/#thpt-g12-b19-c07); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b19-p07). Sau đó tự làm lại Vận dụng.

    ### 1.9. Chuyển trạng thái qua hai ngày
    
    Khi hôm nay đã biết trạng thái, dự báo ngày mai bằng xác suất chuyển có điều kiện. Đến ngày kia, phải phân hoạch theo ngày mai: tính cả hai đường đi đến trạng thái cần hỏi. Không giả thiết hai ngày độc lập; mô hình ở đây xác suất ngày tiếp phụ thuộc trạng thái ngay trước.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHVI-B19-TRANSITION-R02.svg" alt="Cây minh họa chuyển trạng thái ngày mai và ngày kia, hai đường đến xe đạp."/><figcaption>Gồm cả đường đi xe đạp rồi xe đạp và đi bộ rồi xe đạp; không bỏ nhánh qua đi bộ.</figcaption></figure>
    
    **Vận dụng.** Hôm nay đi xe buýt. Nếu hôm trước đi buýt, hôm sau đi xe máy với xác suất 0,3; nếu hôm trước đi máy, hôm sau đi máy với xác suất 0,6. Tính xác suất đi máy ngày kia.
    
    <span data-ped-first-try="9" data-outcome-id="G12-CHVI-B19-O03" data-thpt-first-try-id="THPT-G12-B19-TRY09" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Ngày mai máy 0,3, buýt 0,7. Ngày kia máy: $0{,}3\cdot0{,}6+0{,}7\cdot0{,}3=0{,}39$.
    
    <span data-thpt-help-id="HELP-G12-B19-TRY09" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Phân nhánh theo ngày ở giữa; không lặp một xác suất hai lần khi điều kiện thay đổi. [Ôn phương pháp nền tảng](../luyen-tap/#thpt-g12-b19-c03); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b19-p03). Sau đó tự làm lại Vận dụng.

    ### 1.10. Di truyền: toàn phần trước, nhân độc lập sau
    
    Mô hình SGK: mỗi cây bố hoặc mẹ trao một trong hai gene với cơ hội như nhau. Cây bb truyền b chắc chắn, Bb truyền b xác suất 1/2. Tính xác suất gene b của từng bên bằng toàn phần rồi nhân khi hai lần nhận gene độc lập theo giả thiết.
    
    **Vận dụng.** Bố/mẹ được chọn độc lập từ quần thể gồm 20% bb,80% Bb. Hai gene được nhận độc lập. Tính xác suất con bb và BB.
    
    <span data-ped-first-try="10" data-outcome-id="G12-CHVI-B19-O02" data-thpt-first-try-id="THPT-G12-B19-TRY10" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Mỗi bên truyền b với $q=0{,}2+0{,}8/2=0{,}6$. Truyền B với 0,4. $P(bb)=0{,}36$, $P(BB)=0{,}16$, $P(Bb)=2(0{,}6)(0{,}4)=0{,}48$.
    
    <span data-thpt-help-id="HELP-G12-B19-TRY10" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Kiểm tổng ba kiểu gene bằng 1; không nhân tỷ lệ cây bb trực tiếp. [Ôn phương pháp nền tảng](../luyen-tap/#thpt-g12-b19-c02); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b19-p02). Sau đó tự làm lại Vận dụng.

    ### 1.11. Chuyển vật giữa hai túi
    
    Kết quả từ túi thứ nhất quyết định thành phần túi thứ hai. Xét từng màu chuyển như một nhánh phân hoạch trước khi tính xác suất rút sau.
    
    **Vận dụng.** Túi I có 2 đỏ,3 xanh; túi II có 4 đỏ,2 xanh. Chuyển đều một bi từ I sang II, rồi rút đều một bi II. Tính xác suất bi rút xanh.
    
    <span data-ped-first-try="11" data-outcome-id="G12-CHVI-B19-O07" data-thpt-first-try-id="THPT-G12-B19-TRY11" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Chuyển đỏ: xác suất 2/5, II còn 2 xanh trên 7. Chuyển xanh: 3/5, II có 3 xanh trên 7. $P(xanh)=(2/5)(2/7)+(3/5)(3/7)=13/35$.
    
    <span data-thpt-help-id="HELP-G12-B19-TRY11" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Tổng vật túi II tăng 1 ở mọi nhánh; số xanh tùy vật được chuyển. [Ôn phương pháp nền tảng](../luyen-tap/#thpt-g12-b19-c07); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b19-p07). Sau đó tự làm lại Vận dụng.

=== "Kiến thức SGK"

    ### 2.1. Công thức xác suất toàn phần
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Công thức xác suất toàn phần.</strong><p>Phân hoạch A và \(\overline A\): \(B=(A\cap B)\cup(\overline A\cap B)\), hai phần xung khắc. Nếu hai nhóm đều có xác suất dương, \(P(B)=P(A)P(B\mid A)+P(\overline A)P(B\mid\overline A)\). Nếu nhóm xác suất 0 thì giao tương ứng bằng 0; không lấy điều kiện 0/0. Sơ đồ cây ghi xác suất cạnh, nhân dọc đường, cộng lá cùng kết quả. Mở rộng với phân hoạch hữu hạn \(A_1,\ldots,A_n\), các nhóm xác suất dương: \(P(B)=\sum_i P(A_i)P(B\mid A_i)\). Tỉ trọng tổng bằng 1.</p></div>

    ### 2.2. Công thức Bayes
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Công thức Bayes.</strong><p>Khi \(P(B)&gt;0\) và P(A)&gt;0, \(P(A\mid B)=\frac{P(A)P(B\mid A)}{P(B)}\). Dùng toàn phần cho mẫu: \(\frac{P(A)P(B\mid A)}{P(A)P(B\mid A)+P(\overline A)P(B\mid\overline A)}\) khi cả hai nhóm xác suất dương. Trường hợp P(A)=0 thì P(A|B)=0; P(A)=1 thì P(A|B)=1, không tính điều kiện của nhóm rỗng. Với phân hoạch nhiều nguồn, \(P(A_j\mid B)=P(A_j\cap B)/P(B)\). Tỷ lệ nền p, độ nhạy s, đặc hiệu c: \(P(A\mid +)=\frac{ps}{ps+(1-p)(1-c)}\), \(P(\overline A\mid -)=\frac{(1-p)c}{p(1-s)+(1-p)c}\) nếu mẫu tương ứng dương và các xác suất nhóm được xác định. Dương/âm là hai kết quả đối nhau trong mô hình nhị phân. Không suy kết luận y khoa cá nhân từ mô hình giả định.</p></div>

=== "Ví dụ"

    ### 3.1. Hai nhánh phủ hết
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B19-O01"><p><strong>Đề bài:</strong> Kho có 70% loại A, 30% không A. Giải thích vì sao hàng hỏng H phải cộng hai nhánh.</p><p><strong>Phân tích:</strong> A và không A là phân hoạch.</p><p><strong>Lời giải:</strong> \(H=(A\cap H)\cup(\overline A\cap H)\), hai phần xung khắc. Cộng xác suất hai phần.</p><p><strong>Kiểm lại:</strong> Không bỏ trường hợp hỏng từ nhóm còn lại.</p></div>

    ### 3.2. Tỷ lệ lỗi chung
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B19-O02"><p><strong>Đề bài:</strong> A sản xuất 60%, lỗi 2%; còn lại 40%, lỗi 5%.</p><p><strong>Phân tích:</strong> Dùng tỉ trọng.</p><p><strong>Lời giải:</strong> \(0{,}6\cdot0{,}02+0{,}4\cdot0{,}05=0{,}032=4/125\).</p><p><strong>Kiểm lại:</strong> Nằm giữa 2% và 5%.</p></div>

    ### 3.3. Cây hai tầng
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B19-O03"><p><strong>Đề bài:</strong> \(P(A)=0{,}4\), \(P(B\mid A)=0{,}3\), \(P(B\mid\overline A)=0{,}4\).</p><p><strong>Phân tích:</strong> Nhân trên mỗi đường B.</p><p><strong>Lời giải:</strong> \(0{,}12+0{,}24=0{,}36=9/25\).</p><p><strong>Kiểm lại:</strong> Hai lá đối là 0,28 và 0,36, tổng bốn lá 1.</p></div>

    ### 3.4. Bayes với nhóm nguồn
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B19-O04"><p><strong>Đề bài:</strong> A chiếm 60%, lỗi 2%; còn lại 40%, lỗi 5%. Biết lỗi, xác suất do A?</p><p><strong>Phân tích:</strong> Tử giao A-lỗi, mẫu mọi lỗi.</p><p><strong>Lời giải:</strong> \(P(A\mid H)=0{,}012/0{,}032=3/8\).</p><p><strong>Kiểm lại:</strong> Không phải 2% hoặc 60%.</p></div>

    ### 3.5. Dương thật và dương giả
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B19-O05"><p><strong>Đề bài:</strong> Giả định 10.000 phép thử, tỷ lệ nền 1%, nhạy 90%, đặc hiệu 95%. Tính hậu nghiệm khi dương.</p><p><strong>Phân tích:</strong> Trong nhóm 100 có đặc điểm, 90 dương; trong 9900 không, 495 dương.</p><p><strong>Lời giải:</strong> \(90/(90+495)=2/13\).</p><p><strong>Kiểm lại:</strong> Kết quả ≈15,38%, không phải 90%. Bài minh họa tỷ lệ nền, không phải đánh giá y khoa; khi gặp câu tương tự trong ngân hàng hãy tự giải lại.</p></div>

    ### 3.6. Ba nguồn
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B19-O06"><p><strong>Đề bài:</strong> Ba xưởng 50%,30%,20%; lỗi 1%,2%,4%.</p><p><strong>Phân tích:</strong> Nhân từng cặp tỷ trọng × lỗi.</p><p><strong>Lời giải:</strong> \(0{,}005+0{,}006+0{,}008=0{,}019=19/1000\).</p><p><strong>Kiểm lại:</strong> Tổng trọng số 1.</p></div>

    ### 3.7. Toàn phần rồi Bayes
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B19-O07"><p><strong>Đề bài:</strong> Lớp A chiếm 60%, đạt 90%; lớp B chiếm 40%, đạt 70%.</p><p><strong>Phân tích:</strong> Tính P(E) trước, sau đó chọn lá AE.</p><p><strong>Lời giải:</strong> \(P(E)=0{,}82=41/50\); \(P(A\mid E)=0{,}54/0{,}82=27/41\).</p><p><strong>Kiểm lại:</strong> Hai kết quả khác mẫu số và ý nghĩa.</p></div>

    ### 3.8. Xét nghiệm âm tính (mô hình giả định)
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B19-R02-08"><p><strong>Đề bài:</strong> Tỷ lệ nền 4%, độ nhạy 85%, đặc hiệu 95%. Biết âm, xác suất không có đặc điểm?</p><p><strong>Phân tích:</strong> Âm giả 15% trong nhóm có đặc điểm, âm thật 95% trong nhóm không.</p><p><strong>Lời giải:</strong> \(P(\overline A\cap -)=0{,}96\cdot0{,}95=0{,}912\), \(P(A\cap -)=0{,}04\cdot0{,}15=0{,}006\). Hậu nghiệm \(0{,}912/0{,}918=152/153\).</p><p><strong>Kiểm lại:</strong> P(có đặc điểm|âm)=1/153; đây là mô hình giả định.</p></div>

    ### 3.9. Chuyển trạng thái ngày kế tiếp
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B19-R02-09"><p><strong>Đề bài:</strong> Hôm nay đi bộ. Nếu hôm trước đi bộ, hôm sau đi xe đạp với xác suất 0,4; nếu hôm trước đi xe đạp, hôm sau tiếp tục đi xe đạp với xác suất 0,7. Tính xác suất đi xe đạp sau hai ngày.</p><p><strong>Phân tích:</strong> Phân hoạch theo ngày mai đi xe đạp (0,4) hoặc đi bộ (0,6).</p><p><strong>Lời giải:</strong> \(0{,}4\cdot0{,}7+0{,}6\cdot0{,}4=0{,}52\).</p><p><strong>Kiểm lại:</strong> Không chỉ tính đường đi xe đạp cả hai ngày.</p></div>

    ### 3.10. Di truyền bằng phân hoạch
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B19-R02-10"><p><strong>Đề bài:</strong> Hai cây bố/mẹ được chọn độc lập: mỗi cây thuộc 60% bb,40% Bb. Hai lần truyền gene độc lập; tính ba kiểu gene con.</p><p><strong>Phân tích:</strong> Mỗi bên nhận b với q=0,6+0,4/2=0,8; nhận B với 0,2.</p><p><strong>Lời giải:</strong> \(P(bb)=0{,}64\), \(P(BB)=0{,}04\), \(P(Bb)=2\cdot0{,}8\cdot0{,}2=0{,}32\).</p><p><strong>Kiểm lại:</strong> Tổng bằng 1; Bb có hai thứ tự.</p></div>

    ### 3.11. Thêm vật tùy kết quả (SBT)
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B19-R02-11"><p><strong>Đề bài:</strong> Túi I 2 trắng,1 đen. Túi II 3 trắng,4 đen. Rút một vật I và thêm 2 vật cùng màu đó vào II, rồi rút một vật II. Tính xác suất trắng.</p><p><strong>Phân tích:</strong> Nếu I trắng, II có 5 trắng/9; nếu I đen, II có 3 trắng/9.</p><p><strong>Lời giải:</strong> \((2/3)(5/9)+(1/3)(3/9)=13/27\).</p><p><strong>Kiểm lại:</strong> Túi II luôn có 9 vật, tử thay đổi.</p></div>

    ### 3.12. Chọn ngăn bằng xúc xắc (SBT)
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B19-R02-12"><p><strong>Đề bài:</strong> Gieo xúc xắc cân đối, nếu ra 1–3 chọn ngăn I (2 sách ngoại văn,3 sách khác), còn lại chọn ngăn II (1 ngoại văn,4 sách khác). Chọn đều 1 sách từ ngăn đã chọn. Biết sách ngoại văn, xác suất từ I?</p><p><strong>Phân tích:</strong> Tỷ trọng ngăn bằng 1/2 mỗi ngăn, không chọn đều mọi sách một cách tùy ý.</p><p><strong>Lời giải:</strong> \(P(E)=(1/2)(2/5)+(1/2)(1/5)=3/10\). \(P(I\mid E)=(1/5)/(3/10)=2/3\).</p><p><strong>Kiểm lại:</strong> Mẫu 3/10 dương, E xảy ra ở cả hai ngăn.</p></div>

    ### 3.13. Tìm tỷ trọng ngược từ kết quả chung
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B19-R02-13"><p><strong>Đề bài:</strong> A và không A; P(đạt|A)=0,9, P(đạt|không A)=0,5, P(đạt)=0,62. Tìm P(A).</p><p><strong>Phân tích:</strong> Đặt p=P(A); lập phương trình toàn phần.</p><p><strong>Lời giải:</strong> \(0{,}9p+0{,}5(1-p)=0{,}62\) ⇒ p=0,3.</p><p><strong>Kiểm lại:</strong> 0≤p≤1 và thay lại cho 0,62.</p></div>

    ### 3.14. Bộ lọc thư: cả nhánh chặn và không chặn
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B19-R02-14"><p><strong>Đề bài:</strong> Thư rác 4%; lọc chặn 90% thư rác và chặn nhầm 5% thư thường. Tính xác suất thư rác khi bị chặn; thư thường khi không bị chặn.</p><p><strong>Phân tích:</strong> Dương là chặn, âm là không chặn.</p><p><strong>Lời giải:</strong> Chặn: \(0{,}036+0{,}048=0{,}084\), rác khi chặn \(3/7\). Không chặn: \(0{,}004+0{,}912=0{,}916\), thư thường khi không chặn \(228/229\).</p><p><strong>Kiểm lại:</strong> Hai mẫu số cộng bằng 1; hậu nghiệm từng mẫu nằm trong [0,1].</p></div>

=== "Lỗi thường gặp"

    ### 4.1. Phân hoạch: không thiếu, không đếm trùng
    
    ??? tip "Cách tự sửa"
    
        Kiểm các nhóm không giao nhau và tổng tỉ trọng bằng 1. [Ôn câu Core](../luyen-tap/#thpt-g12-b19-c01); [làm câu luyện tập rồi quay lại](../luyen-tap/#thpt-g12-b19-p01).

    ### 4.2. Toàn phần là trung bình theo trọng số
    
    ??? tip "Cách tự sửa"
    
        Kiểm kết quả giữa 0,6 và 0,9. [Ôn câu Core](../luyen-tap/#thpt-g12-b19-c02); [làm câu luyện tập rồi quay lại](../luyen-tap/#thpt-g12-b19-p02).

    ### 4.3. Đọc sơ đồ cây đúng loại xác suất
    
    ??? tip "Cách tự sửa"
    
        Ghi cả nhánh đối ở mỗi nút; chỉ cộng hai lá E. [Ôn câu Core](../luyen-tap/#thpt-g12-b19-c03); [làm câu luyện tập rồi quay lại](../luyen-tap/#thpt-g12-b19-p03).

    ### 4.4. Bayes: chọn phần trong các lá được quan sát
    
    ??? tip "Cách tự sửa"
    
        Cần tỉ trọng ban đầu, hai xác suất điều kiện và mẫu dương. [Ôn câu Core](../luyen-tap/#thpt-g12-b19-c04); [làm câu luyện tập rồi quay lại](../luyen-tap/#thpt-g12-b19-p04).

    ### 4.5. Dương tính và tỷ lệ nền
    
    ??? tip "Cách tự sửa"
    
        Không đọc thẳng 80%; mẫu là mọi phép thử dương. [Ôn câu Core](../luyen-tap/#thpt-g12-b19-c05); [làm câu luyện tập rồi quay lại](../luyen-tap/#thpt-g12-b19-p05).

    ### 4.6. Âm tính: dùng đúng các nhánh đối
    
    ??? tip "Cách tự sửa"
    
        Không dùng độ nhạy làm xác suất đã biết âm; dùng đúng nhánh bổ sung. [Ôn câu Core](../luyen-tap/#thpt-g12-b19-c05); [làm câu luyện tập rồi quay lại](../luyen-tap/#thpt-g12-b19-p05).

    ### 4.7. Nhiều nguồn: mở rộng phân hoạch
    
    ??? tip "Cách tự sửa"
    
        Tổng tỷ trọng bằng 1; nếu nhóm xác suất 0, bỏ giao bằng 0 thay vì tính điều kiện. [Ôn câu Core](../luyen-tap/#thpt-g12-b19-c06); [làm câu luyện tập rồi quay lại](../luyen-tap/#thpt-g12-b19-p06).

    ### 4.8. Lời giải tổng hợp có kiểm tra
    
    ??? tip "Cách tự sửa"
    
        Nêu rõ tử giao, mẫu toàn phần và kiểm 0≤kết quả≤1. [Ôn câu Core](../luyen-tap/#thpt-g12-b19-c07); [làm câu luyện tập rồi quay lại](../luyen-tap/#thpt-g12-b19-p07).

    ### 4.9. Chuyển trạng thái qua hai ngày
    
    ??? tip "Cách tự sửa"
    
        Phân nhánh theo ngày ở giữa; không lặp một xác suất hai lần khi điều kiện thay đổi. [Ôn câu Core](../luyen-tap/#thpt-g12-b19-c03); [làm câu luyện tập rồi quay lại](../luyen-tap/#thpt-g12-b19-p03).

    ### 4.10. Di truyền: toàn phần trước, nhân độc lập sau
    
    ??? tip "Cách tự sửa"
    
        Kiểm tổng ba kiểu gene bằng 1; không nhân tỷ lệ cây bb trực tiếp. [Ôn câu Core](../luyen-tap/#thpt-g12-b19-c02); [làm câu luyện tập rồi quay lại](../luyen-tap/#thpt-g12-b19-p02).

    ### 4.11. Chuyển vật giữa hai túi
    
    ??? tip "Cách tự sửa"
    
        Tổng vật túi II tăng 1 ở mọi nhánh; số xanh tùy vật được chuyển. [Ôn câu Core](../luyen-tap/#thpt-g12-b19-c07); [làm câu luyện tập rồi quay lại](../luyen-tap/#thpt-g12-b19-p07).

    [Core Bài 19](../luyen-tap/#b19-core) · [Luyện tập và Tự luận](../luyen-tap/#b19-practice) · [Hỗ trợ khi gặp khó khăn](../luyen-tap/#b19-help) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/)

*Nguồn đối chiếu: SGK Toán 12 Kết nối tri thức, Tập hai, trang in 72–78; SBT trang in 43–45.*
