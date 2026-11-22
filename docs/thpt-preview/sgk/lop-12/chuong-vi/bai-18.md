# Toán 12 · Bài 18. Xác suất có điều kiện

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 12 · CHƯƠNG VI · SGK KẾT NỐI TRI THỨC · TẬP HAI</p><p class="thpt-r4-lead">Hiểu nhóm điều kiện, đọc hình, tự vận dụng và đối chiếu trước khi luyện tập.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương VI</a><a href="../bai-19/">Bài 19</a><a href="../luyen-tap/#b18-core">Core</a><a href="../luyen-tap/#b18-practice">Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra</a></nav></div>

=== "Khám phá kiến thức"

    Khi biết một thông tin mới, ta không còn xét mọi kết quả như lúc đầu. Điều cần học là chọn đúng nhóm điều kiện, tìm phần giao trong nhóm ấy và tính xác suất của những bước liên tiếp. Ôn không gian mẫu, biến cố đối, giao, hợp, đếm đồng khả năng và xác suất độc lập.

    ### 1.1. Thông tin mới thu hẹp không gian xét
    
    Gieo xúc xắc cân đối, biết B là mặt chẵn. Chỉ ba kết quả 2,4,6 còn được xét; A là mặt lớn hơn 3 thì phần giao có 4,6. Vì các kết quả trong B vẫn đồng khả năng, xác suất điều kiện là 2/3. Nếu kết quả không đồng khả năng, phải dùng trọng số xác suất, không chỉ đếm.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHVI-B18-SET-R02.svg" alt="Sáu mặt xúc xắc: B là 2,4,6; giao A và B là 4,6."/><figcaption>Đọc mẫu số là ba kết quả trong B; vùng tô đậm có hai kết quả.</figcaption></figure>
    
    **Vận dụng.** Chọn đều số nguyên từ 1 đến 15. Biết số chia hết cho 3, tính xác suất số đó lớn hơn 8.
    
    <span data-ped-first-try="1" data-outcome-id="G12-CHVI-B18-O01" data-thpt-first-try-id="THPT-G12-B18-TRY01" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** B={3,6,9,12,15}; A∩B={9,12,15}. $P(A\mid B)=3/5$.
    
    <span data-thpt-help-id="HELP-G12-B18-TRY01" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Liệt kê nhóm B trước, rồi lọc A trong B. Không dùng 15 làm mẫu. [Ôn phương pháp nền tảng](../luyen-tap/#thpt-g12-b18-c01); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b18-p01). Sau đó tự làm lại Vận dụng.

    ### 1.2. Từ giao biến cố đến tỉ số xác suất
    
    Phần giao A∩B nằm trong B. Chia xác suất phần giao cho xác suất nhóm B sẽ chuẩn hóa nhóm B thành 1. Điều kiện $P(B)>0$ là bắt buộc; nếu B không thể xảy ra, xác suất có điều kiện theo công thức SGK không xác định.
    
    **Vận dụng.** $P(B)=0{,}8$, $P(A\cap B)=0{,}28$. Tính $P(A\mid B)$ và $P(\overline A\mid B)$.
    
    <span data-ped-first-try="2" data-outcome-id="G12-CHVI-B18-O02" data-thpt-first-try-id="THPT-G12-B18-TRY02" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $P(A\mid B)=0{,}28/0{,}8=0{,}35$; $P(\overline A\mid B)=1-0{,}35=0{,}65$.
    
    <span data-thpt-help-id="HELP-G12-B18-TRY02" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Kiểm giao không lớn hơn B và hai kết quả đối nhau có tổng 1. [Ôn phương pháp nền tảng](../luyen-tap/#thpt-g12-b18-c02); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b18-p02). Sau đó tự làm lại Vận dụng.

    ### 1.3. Đổi chiều điều kiện là đổi mẫu số
    
    P(A|B) hỏi A trong nhóm B, còn P(B|A) hỏi B trong nhóm A. Cùng một giao nhưng hai tổng nhóm có thể khác nhau.
    
    **Vận dụng.** Có 24 học sinh thích đọc truyện, 36 thích vẽ, 12 thích cả hai. Chọn đều một học sinh. So sánh P(đọc|vẽ) và P(vẽ|đọc).
    
    <span data-ped-first-try="3" data-outcome-id="G12-CHVI-B18-O03" data-thpt-first-try-id="THPT-G12-B18-TRY03" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $12/36=1/3$ và $12/24=1/2$. Giao là 12, nhưng mẫu khác nhau.
    
    <span data-thpt-help-id="HELP-G12-B18-TRY03" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Gạch chân cụm 'biết rằng'; chọn mẫu ấy chứ không chọn biến cố đang hỏi. [Ôn phương pháp nền tảng](../luyen-tap/#thpt-g12-b18-c03); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b18-p03). Sau đó tự làm lại Vận dụng.

    ### 1.4. Độc lập không phải xung khắc
    
    Hai biến cố độc lập khi $P(A\cap B)=P(A)P(B)$. Với P(B)>0, điều này tương đương P(A|B)=P(A). Nếu A,B xung khắc và đều có xác suất dương, giao bằng 0 nhưng tích dương nên không độc lập.
    
    **Vận dụng.** $P(A)=0{,}6$, $P(B)=0{,}5$, $P(A\cap B)=0{,}24$. Hai biến cố độc lập không?
    
    <span data-ped-first-try="4" data-outcome-id="G12-CHVI-B18-O04" data-thpt-first-try-id="THPT-G12-B18-TRY04" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Tích $0{,}6\cdot0{,}5=0{,}3\ne0{,}24$. Không độc lập; $P(A\mid B)=0{,}48\ne0{,}6$.
    
    <span data-thpt-help-id="HELP-G12-B18-TRY04" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Đừng suy độc lập chỉ từ tên gọi hai biến cố; so tích và giao. [Ôn phương pháp nền tảng](../luyen-tap/#thpt-g12-b18-c04); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b18-p04). Sau đó tự làm lại Vận dụng.

    ### 1.5. Đọc bảng 2×2 theo hàng hoặc cột
    
    Ô giao chứa cả hai thuộc tính. Khi chọn trong một nhóm, lấy tổng đúng hàng/cột làm mẫu. Số quan sát là xác suất thực nghiệm nếu chọn đều bản ghi; không tự suy quan hệ nhân quả.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHVI-B18-TABLE-R02.svg" alt="Bảng 120 học sinh với hàng xe buýt 24 đạt,16 chưa và không xe buýt 50 đạt,30 chưa, kèm tổng hàng/cột."/><figcaption>Chọn hàng xe buýt tổng 40 nếu điều kiện là xe buýt; chọn cột đạt tổng 74 nếu điều kiện là đạt.</figcaption></figure>
    
    **Vận dụng.** Một nhóm 20 người học theo cách X gồm 14 đạt và 6 chưa đạt. Nhóm Y có 30 người gồm 18 đạt và 12 chưa. Tính P(đạt|X), P(X|đạt).
    
    <span data-ped-first-try="5" data-outcome-id="G12-CHVI-B18-O05" data-thpt-first-try-id="THPT-G12-B18-TRY05" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $14/20=7/10$, $14/(14+18)=7/16$.
    
    <span data-thpt-help-id="HELP-G12-B18-TRY05" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Cộng hết hàng X và cột đạt trước khi chia. [Ôn phương pháp nền tảng](../luyen-tap/#thpt-g12-b18-c05); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b18-p05). Sau đó tự làm lại Vận dụng.

    ### 1.6. Công thức nhân: từ điều kiện đến giao
    
    Từ $P(B\mid A)=P(A\cap B)/P(A)$ khi P(A)>0, nhân hai vế với P(A). Không cần giả thiết độc lập. Nếu P(A)=0 thì giao bằng 0, không tính điều kiện với mẫu 0.
    
    **Vận dụng.** Một quy trình: bước một thành công với xác suất 0,75; nếu bước một thành công, bước hai thành công với xác suất 0,8. Tính xác suất cả hai thành công.
    
    <span data-ped-first-try="6" data-outcome-id="G12-CHVI-B18-O06" data-thpt-first-try-id="THPT-G12-B18-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $0{,}75\cdot0{,}8=0{,}6$.
    
    <span data-thpt-help-id="HELP-G12-B18-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Dùng xác suất bước hai trong điều kiện bước một, không tự coi hai bước độc lập. [Ôn phương pháp nền tảng](../luyen-tap/#thpt-g12-b18-c06); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b18-p06). Sau đó tự làm lại Vận dụng.

    ### 1.7. Rút không hoàn lại: cập nhật nhánh
    
    Sau lượt đầu, tổng số vật và số vật từng loại thay đổi. Mỗi lá của cây là một đường có thứ tự; nhân cạnh trên cùng đường, cộng xác suất các đường xung khắc.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHVI-B18-TREE-R02.svg" alt="Cây rút hai bi từ 5 đỏ,3 xanh, không hoàn lại; bốn đường và tích xác suất."/><figcaption>Sau đỏ còn 4 đỏ,3 xanh; sau xanh còn 5 đỏ,2 xanh; tổng xác suất bốn lá bằng 1.</figcaption></figure>
    
    **Vận dụng.** Túi có 4 bi đỏ, 3 xanh; rút hai bi đều ngẫu nhiên, không hoàn lại. Tính xác suất hai bi khác màu.
    
    <span data-ped-first-try="7" data-outcome-id="G12-CHVI-B18-O07" data-thpt-first-try-id="THPT-G12-B18-TRY07" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Đỏ–xanh: $(4/7)(3/6)=2/7$; xanh–đỏ: $(3/7)(4/6)=2/7$. Tổng $4/7$.
    
    <span data-thpt-help-id="HELP-G12-B18-TRY07" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không dùng mẫu 7 cho lượt hai và không bỏ một thứ tự. [Ôn phương pháp nền tảng](../luyen-tap/#thpt-g12-b18-c07); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b18-p07). Sau đó tự làm lại Vận dụng.

    ### 1.8. Hai xúc xắc: tránh đếm trùng
    
    Với hai xúc xắc cân đối độc lập, kết quả là cặp có thứ tự (i,j). 'Ít nhất một mặt k' có 6+6−1=11 cặp vì (k,k) nằm trong cả hai nhóm.
    
    **Vận dụng.** Gieo hai xúc xắc độc lập. Biết ít nhất một con ra 4, tính xác suất tổng bằng 9.
    
    <span data-ped-first-try="8" data-outcome-id="G12-CHVI-B18-O01" data-thpt-first-try-id="THPT-G12-B18-TRY08" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Có 11 cặp điều kiện. Thuận lợi (4,5),(5,4), nên $2/11$.
    
    <span data-thpt-help-id="HELP-G12-B18-TRY08" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không đếm (4,4) hai lần; viết cặp có thứ tự. [Ôn phương pháp nền tảng](../luyen-tap/#thpt-g12-b18-c01); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b18-p01). Sau đó tự làm lại Vận dụng.

    ### 1.9. Tìm số vật ban đầu từ xác suất
    
    Nếu có m vật thuận lợi trong tổng n và rút hai lần không hoàn lại, xác suất cả hai thuận lợi là $m(m-1)/[n(n-1)]$. Từ xác suất cho trước, giải n rồi kiểm n nguyên, n≥m.
    
    **Vận dụng.** Có 4 bi đỏ, còn lại xanh. Xác suất rút hai đỏ không hoàn lại là 1/6. Tìm tổng số bi.
    
    <span data-ped-first-try="9" data-outcome-id="G12-CHVI-B18-O07" data-thpt-first-try-id="THPT-G12-B18-TRY09" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** $12/[n(n-1)]=1/6$ ⇒ $n(n-1)=72$ ⇒ n=9 hoặc −8. Chọn n=9; còn 5 bi xanh.
    
    <span data-thpt-help-id="HELP-G12-B18-TRY09" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Không lấy căn của n(n−1) như n²; loại nghiệm âm hoặc không nguyên. [Ôn phương pháp nền tảng](../luyen-tap/#thpt-g12-b18-c07); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b18-p07). Sau đó tự làm lại Vận dụng.

    ### 1.10. Ô cửa bí mật: thông tin do quản trò tạo ra
    
    Giả sử xe được đặt đều sau ba cửa, người chơi chọn cửa 1. Quản trò biết vị trí xe, luôn mở một cửa chưa chọn có con lừa, nếu có hai cửa hợp lệ thì chọn đều, luôn cho đổi. H là biến cố mở cửa 3. Gọi Eᵢ là xe ở cửa i. $P(H\mid E_1)=1/2$, $P(H\mid E_2)=1$, $P(H\mid E_3)=0$. Tỉ lệ các giao Eᵢ∩H lần lượt 1/6,1/3,0; tổng P(H)=1/2. Sau khi biết H, giữ thắng 1/3, đổi thắng 2/3. Không chia đều cho hai cửa chỉ vì còn hai cửa.
    
    <figure class="thpt-r4-plot g12-chi-figure"><img loading="lazy" decoding="async" src="../../../../../assets/images/thpt/FIG-G12-CHVI-B18-DOORS-R02.svg" alt="Ba vị trí xe và xác suất quản trò mở cửa 3 theo quy tắc chọn đều giữa cửa hợp lệ."/><figcaption>Xét từng vị trí xe; xe sau cửa 3 làm H không thể xảy ra. Các trọng số 1/6 và 1/3 được chuẩn hóa trong H.</figcaption></figure>
    
    **Vận dụng.** Xe vẫn đặt đều, quản trò luôn mở cửa có lừa chưa chọn và cho đổi. Khi có hai cửa hợp lệ, quản trò mở cửa 2 với xác suất 1/4, cửa 3 với 3/4. Biết quản trò mở cửa 2, tính xác suất xe ở cửa 1 và cửa 3.
    
    <span data-ped-first-try="10" data-outcome-id="G12-CHVI-B18-O06" data-thpt-first-try-id="THPT-G12-B18-TRY10" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Ba xác suất mở cửa 2 theo E₁,E₂,E₃ lần lượt 1/4,0,1. Giao là 1/12,0,1/3; tổng 5/12. $P(E_1\mid H_2)=(1/12)/(5/12)=1/5$, $P(E_3\mid H_2)=(1/3)/(5/12)=4/5$; nên đổi cửa.
    
    <span data-thpt-help-id="HELP-G12-B18-TRY10" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Liệt kê quản trò được phép mở cửa nào trong từng vị trí xe; kết luận phụ thuộc quy tắc đã nêu. [Ôn phương pháp nền tảng](../luyen-tap/#thpt-g12-b18-c06); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b18-p06). Sau đó tự làm lại Vận dụng.

    ### 1.11. Thông tin đã trượt vòng thi (SBT)
    
    Một người có thể thất bại chung ở vòng một hoặc qua vòng một rồi trượt vòng hai. Hai đường ấy không trùng; khi được báo trượt, mẫu số là xác suất trượt chung, không phải xác suất qua vòng một.
    
    **Vận dụng.** Xác suất qua vòng 1 là 0,8; nếu qua vòng 1, xác suất qua vòng 2 là 0,75. Biết thí sinh trượt chung, xác suất đã qua vòng 1 là bao nhiêu?
    
    <span data-ped-first-try="11" data-outcome-id="G12-CHVI-B18-O02" data-thpt-first-try-id="THPT-G12-B18-TRY11" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Qua cả hai: 0,6; trượt chung: 0,4. Qua vòng 1 nhưng trượt 2: $0{,}8\cdot0{,}25=0{,}2$. Chia $0{,}2/0{,}4=1/2$.
    
    <span data-thpt-help-id="HELP-G12-B18-TRY11" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        Phân biệt trượt vòng hai trong số người đã qua vòng một với trượt chung. [Ôn phương pháp nền tảng](../luyen-tap/#thpt-g12-b18-c02); [thử câu luyện tập khác](../luyen-tap/#thpt-g12-b18-p02). Sau đó tự làm lại Vận dụng.

=== "Kiến thức SGK"

    ### 2.1. Xác suất có điều kiện
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Xác suất có điều kiện.</strong><p>Với hai biến cố A,B, khi \(P(B)&gt;0\), \(P(A\mid B)=\frac{P(A\cap B)}{P(B)}\). SGK viết AB cho \(A\cap B\). Nếu các kết quả đồng khả năng thì \(P(A\mid B)=n(A\cap B)/n(B)\). \(0\le P(A\mid B)\le1\) và \(P(\overline A\mid B)=1-P(A\mid B)\). Khi P(A)&gt;0, P(B)&gt;0 và A,B độc lập, \(P(A\mid B)=P(A)\), \(P(B\mid A)=P(B)\). Độc lập tương đương \(P(A\cap B)=P(A)P(B)\), kể cả xác suất 0; xung khắc với xác suất dương thì không độc lập. Bảng 2×2: lấy ô giao chia tổng nhóm điều kiện (nếu chọn đều các bản ghi).</p></div>

    ### 2.2. Công thức nhân xác suất
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Công thức nhân xác suất.</strong><p>Với P(A)&gt;0, \(P(A\cap B)=P(A)P(B\mid A)\). Với P(B)&gt;0, \(P(A\cap B)=P(B)P(A\mid B)\). Nếu biến cố điều kiện có xác suất 0 thì giao có xác suất 0; không tính tỉ số điều kiện 0/0 (SGK dùng quy ước tích nhánh bằng 0). Khi A,B độc lập, giao bằng P(A)P(B). Sơ đồ cây: tại nút có xác suất dương, xác suất các nhánh con cộng bằng 1; nhân dọc đường và cộng lá xung khắc thích hợp. Nếu rút không hoàn lại, cập nhật cả số vật thuận lợi lẫn tổng số vật.</p></div>

=== "Ví dụ"

    ### 3.1. Không gian điều kiện
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B18-O01"><p><strong>Đề bài:</strong> Xúc xắc cân đối, B ra chẵn, A ra số lớn hơn 3.</p><p><strong>Phân tích:</strong> Đếm bên trong B.</p><p><strong>Lời giải:</strong> \(B=\{2,4,6\}\), \(A\cap B=\{4,6\}\), \(P(A\mid B)=2/3\).</p><p><strong>Kiểm lại:</strong> Mẫu 3, không phải 6.</p></div>

    ### 3.2. Chia đúng mẫu
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B18-O02"><p><strong>Đề bài:</strong> \(P(B)=0{,}5\), \(P(A\cap B)=0{,}2\).</p><p><strong>Phân tích:</strong> Giao chia B.</p><p><strong>Lời giải:</strong> \(P(A\mid B)=0{,}2/0{,}5=2/5\).</p><p><strong>Kiểm lại:</strong> Giao ≤ B, mẫu dương.</p></div>

    ### 3.3. Hai chiều điều kiện
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B18-O03"><p><strong>Đề bài:</strong> 100 học sinh: 30 CLB nhạc, 40 thể thao, 12 cả hai.</p><p><strong>Phân tích:</strong> Cùng tử 12, hai mẫu.</p><p><strong>Lời giải:</strong> \(P(\text{nhạc}\mid\text{thể thao})=12/40=3/10\); \(P(\text{thể thao}\mid\text{nhạc})=12/30=2/5\).</p><p><strong>Kiểm lại:</strong> Không cộng hai xác suất này vì mẫu khác nhau.</p></div>

    ### 3.4. Phép thử độc lập
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B18-O04"><p><strong>Đề bài:</strong> Tung đồng xu và xúc xắc cân đối độc lập. A: ngửa, B: chẵn.</p><p><strong>Phân tích:</strong> Biết mặt chẵn không ảnh hưởng đồng xu.</p><p><strong>Lời giải:</strong> \(P(A\mid B)=P(A)=1/2\).</p><p><strong>Kiểm lại:</strong> P(B)=1/2&gt;0.</p></div>

    ### 3.5. Bảng tần suất
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B18-O05"><p><strong>Đề bài:</strong> 120 học sinh: xe buýt 24 đạt,16 chưa; không xe buýt 50 đạt,30 chưa. Tính P(đạt|xe buýt).</p><p><strong>Phân tích:</strong> Hàng xe buýt có 40.</p><p><strong>Lời giải:</strong> \(24/(24+16)=3/5\).</p><p><strong>Kiểm lại:</strong> Không chia tổng 120 hoặc tổng cột 74.</p></div>

    ### 3.6. Tính giao
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B18-O06"><p><strong>Đề bài:</strong> \(P(A)=0{,}4\), \(P(B\mid A)=0{,}7\).</p><p><strong>Phân tích:</strong> Nhân theo chiều dữ kiện.</p><p><strong>Lời giải:</strong> \(P(A\cap B)=0{,}4\cdot0{,}7=7/25\).</p><p><strong>Kiểm lại:</strong> Giao không lớn hơn P(A).</p></div>

    ### 3.7. Hai lượt không hoàn lại
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B18-O07"><p><strong>Đề bài:</strong> 5 đỏ,3 xanh; rút hai không hoàn lại. Cả hai đỏ?</p><p><strong>Phân tích:</strong> Đỏ đầu, cập nhật đỏ còn lại.</p><p><strong>Lời giải:</strong> \((5/8)(4/7)=5/14\).</p><p><strong>Kiểm lại:</strong> Lượt hai còn 7 vật, 4 đỏ.</p></div>

    ### 3.8. Hai xúc xắc và hai chiều điều kiện
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B18-R02-08"><p><strong>Đề bài:</strong> A: tổng bằng 8, B: ít nhất một con ra 3. Tính hai chiều.</p><p><strong>Phân tích:</strong> Không gian đều gồm 36 cặp; B có 11, A có 5.</p><p><strong>Lời giải:</strong> \(A=\{(2,6),(3,5),(4,4),(5,3),(6,2)\}\), giao có (3,5),(5,3). \(P(A\mid B)=2/11\), \(P(B\mid A)=2/5\).</p><p><strong>Kiểm lại:</strong> Cặp (3,3) chỉ tính một lần trong B.</p></div>

    ### 3.9. Tìm tổng ban đầu
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B18-R02-09"><p><strong>Đề bài:</strong> Có 5 bi trắng, còn lại đen. Rút hai không hoàn lại, xác suất hai trắng là 2/9. Tìm tổng n.</p><p><strong>Phân tích:</strong> Dùng công thức nhân theo số lượng nguyên.</p><p><strong>Lời giải:</strong> \(20/[n(n-1)]=2/9\), \(n(n-1)=90\), n=10 hoặc −9. Chọn n=10.</p><p><strong>Kiểm lại:</strong> (5/10)(4/9)=2/9; 5 bi đen.</p></div>

    ### 3.10. Quy tắc quản trò thay đổi kết quả điều kiện
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B18-R02-10"><p><strong>Đề bài:</strong> Ba cửa, chọn cửa 1, quản trò luôn mở cửa có lừa chưa chọn. Nếu có hai lựa chọn thì luôn mở cửa 3. Biết cửa 3 được mở, nên giữ hay đổi?</p><p><strong>Phân tích:</strong> Khác trò chơi chọn ngẫu nhiên: xác suất H khi E₁,E₂,E₃ là 1,1,0.</p><p><strong>Lời giải:</strong> Giao E₁∩H và E₂∩H đều 1/3. \(P(H)=2/3\). Vì thế \(P(E_1\mid H)=P(E_2\mid H)=1/2\). Nếu đổi cửa trong mọi ván (trước khi biết cửa được mở), xác suất thắng vẫn 2/3 vì thắng khi chọn sai ban đầu.</p><p><strong>Kiểm lại:</strong> Phân biệt xác suất theo quan sát cụ thể và chiến lược trên mọi ván.</p></div>

    ### 3.11. Từ hợp đến giao (SBT)
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B18-R02-11"><p><strong>Đề bài:</strong> \(P(A)=2/5\), \(P(B)=1/2\), \(P(A\cup B)=3/5\). Tính \(P(A\mid B)\) và \(P(B\mid A)\).</p><p><strong>Phân tích:</strong> Dùng cộng trừ phần giao.</p><p><strong>Lời giải:</strong> \(P(A\cap B)=2/5+1/2-3/5=3/10\). Hai xác suất là \(3/5\) và \(3/4\).</p><p><strong>Kiểm lại:</strong> Giao ≤ cả hai biến cố; mẫu dương.</p></div>

    ### 3.12. Hai vòng tuyển chọn (SBT)
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B18-R02-12"><p><strong>Đề bài:</strong> Qua vòng 1: 0,9; qua vòng 2 nếu đã qua vòng 1: 0,6. Biết không đỗ chung, xác suất đã qua vòng 1?</p><p><strong>Phân tích:</strong> Đỗ chung cần cả hai; sự kiện qua vòng 1 mà trượt vòng 2 nằm trong trượt chung.</p><p><strong>Lời giải:</strong> P(đỗ)=0,54; P(trượt)=0,46; P(qua 1, trượt 2)=0,36. Cần \(0{,}36/0{,}46=18/23\).</p><p><strong>Kiểm lại:</strong> 0,36≤0,46; không dùng 0,9 làm mẫu.</p></div>

    ### 3.13. Độc lập từng đôi không phải độc lập đồng thời (SBT, mở rộng)
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G12-B18-R02-13"><p><strong>Đề bài:</strong> Hai lần gieo xúc xắc độc lập. A: lần đầu 2; B: lần sau 5; C: tổng 7. Xét từng đôi.</p><p><strong>Phân tích:</strong> Trong 36 cặp, A,B,C mỗi biến cố có 6 cặp; mỗi giao đôi chỉ (2,5).</p><p><strong>Lời giải:</strong> Mỗi xác suất đơn 1/6, mỗi giao đôi 1/36, bằng tích. Nhưng \(P(A\cap B\cap C)=1/36\ne1/216\).</p><p><strong>Kiểm lại:</strong> SGK yêu cầu độc lập hai biến cố; nhận xét ba biến cố chỉ là mở rộng, không gán Core mới.</p></div>

=== "Lỗi thường gặp"

    ### 4.1. Thông tin mới thu hẹp không gian xét
    
    ??? tip "Cách tự sửa"
    
        Liệt kê nhóm B trước, rồi lọc A trong B. Không dùng 15 làm mẫu. [Ôn câu Core](../luyen-tap/#thpt-g12-b18-c01); [làm câu luyện tập rồi quay lại](../luyen-tap/#thpt-g12-b18-p01).

    ### 4.2. Từ giao biến cố đến tỉ số xác suất
    
    ??? tip "Cách tự sửa"
    
        Kiểm giao không lớn hơn B và hai kết quả đối nhau có tổng 1. [Ôn câu Core](../luyen-tap/#thpt-g12-b18-c02); [làm câu luyện tập rồi quay lại](../luyen-tap/#thpt-g12-b18-p02).

    ### 4.3. Đổi chiều điều kiện là đổi mẫu số
    
    ??? tip "Cách tự sửa"
    
        Gạch chân cụm 'biết rằng'; chọn mẫu ấy chứ không chọn biến cố đang hỏi. [Ôn câu Core](../luyen-tap/#thpt-g12-b18-c03); [làm câu luyện tập rồi quay lại](../luyen-tap/#thpt-g12-b18-p03).

    ### 4.4. Độc lập không phải xung khắc
    
    ??? tip "Cách tự sửa"
    
        Đừng suy độc lập chỉ từ tên gọi hai biến cố; so tích và giao. [Ôn câu Core](../luyen-tap/#thpt-g12-b18-c04); [làm câu luyện tập rồi quay lại](../luyen-tap/#thpt-g12-b18-p04).

    ### 4.5. Đọc bảng 2×2 theo hàng hoặc cột
    
    ??? tip "Cách tự sửa"
    
        Cộng hết hàng X và cột đạt trước khi chia. [Ôn câu Core](../luyen-tap/#thpt-g12-b18-c05); [làm câu luyện tập rồi quay lại](../luyen-tap/#thpt-g12-b18-p05).

    ### 4.6. Công thức nhân: từ điều kiện đến giao
    
    ??? tip "Cách tự sửa"
    
        Dùng xác suất bước hai trong điều kiện bước một, không tự coi hai bước độc lập. [Ôn câu Core](../luyen-tap/#thpt-g12-b18-c06); [làm câu luyện tập rồi quay lại](../luyen-tap/#thpt-g12-b18-p06).

    ### 4.7. Rút không hoàn lại: cập nhật nhánh
    
    ??? tip "Cách tự sửa"
    
        Không dùng mẫu 7 cho lượt hai và không bỏ một thứ tự. [Ôn câu Core](../luyen-tap/#thpt-g12-b18-c07); [làm câu luyện tập rồi quay lại](../luyen-tap/#thpt-g12-b18-p07).

    ### 4.8. Hai xúc xắc: tránh đếm trùng
    
    ??? tip "Cách tự sửa"
    
        Không đếm (4,4) hai lần; viết cặp có thứ tự. [Ôn câu Core](../luyen-tap/#thpt-g12-b18-c01); [làm câu luyện tập rồi quay lại](../luyen-tap/#thpt-g12-b18-p01).

    ### 4.9. Tìm số vật ban đầu từ xác suất
    
    ??? tip "Cách tự sửa"
    
        Không lấy căn của n(n−1) như n²; loại nghiệm âm hoặc không nguyên. [Ôn câu Core](../luyen-tap/#thpt-g12-b18-c07); [làm câu luyện tập rồi quay lại](../luyen-tap/#thpt-g12-b18-p07).

    ### 4.10. Ô cửa bí mật: thông tin do quản trò tạo ra
    
    ??? tip "Cách tự sửa"
    
        Liệt kê quản trò được phép mở cửa nào trong từng vị trí xe; kết luận phụ thuộc quy tắc đã nêu. [Ôn câu Core](../luyen-tap/#thpt-g12-b18-c06); [làm câu luyện tập rồi quay lại](../luyen-tap/#thpt-g12-b18-p06).

    ### 4.11. Thông tin đã trượt vòng thi (SBT)
    
    ??? tip "Cách tự sửa"
    
        Phân biệt trượt vòng hai trong số người đã qua vòng một với trượt chung. [Ôn câu Core](../luyen-tap/#thpt-g12-b18-c02); [làm câu luyện tập rồi quay lại](../luyen-tap/#thpt-g12-b18-p02).

    [Core Bài 18](../luyen-tap/#b18-core) · [Luyện tập và Tự luận](../luyen-tap/#b18-practice) · [Hỗ trợ khi gặp khó khăn](../luyen-tap/#b18-help) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/)

*Nguồn đối chiếu: SGK Toán 12 Kết nối tri thức, Tập hai, trang in 64–71; SBT trang in 40–43.*
