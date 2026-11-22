# Bài 30. Công thức nhân xác suất cho hai biến cố độc lập

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VIII · SGK KNTT TẬP 2</p><p class="thpt-r4-lead">Tính giao khi độc lập, đọc cây xác suất và chọn đúng cách tính ít nhất một.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương VIII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Hai cảm biến có thể cùng phát hiện một vật hoặc chỉ một cảm biến phát hiện. Muốn tính cơ hội cả hai cùng thành công, phải biết cơ hội của cảm biến thứ hai có thay đổi khi cảm biến thứ nhất thành công hay không. Khi độc lập, tỉ lệ thành công thứ hai giữ nguyên trong từng nhánh; lúc ấy mới được nhân hai xác suất riêng.

    <figure class="thpt-r4-plot thpt-r4-probability-figure"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVIII-B30-01_R00.svg" alt="Cây hai bước độc lập: nhánh đầu 3/4 và 1/4, mỗi nút bước hai có nhánh 2/3 và 1/3; bốn lá 1/2, 1/4, 1/6, 1/12."><figcaption>Đọc hình: Cây hai bước độc lập: nhánh đầu 3/4 và 1/4, mỗi nút bước hai có nhánh 2/3 và 1/3; bốn lá 1/2, 1/4, 1/6, 1/12. Không nhân xác suất biên trên cây phụ thuộc.</figcaption></figure>

    ### 1.1. Nhân cho giao
    
    Nếu A xảy ra ở 3/4 trường hợp, và B có tỉ lệ 2/3 ngay trong nhóm ấy, phần chung là 3/4 của 2/3.
    
    **Vận dụng.** Hai máy độc lập, cơ hội đạt 5/6 và 3/5. Tính cả hai đạt.
    
    <span data-ped-first-try="1" data-outcome-id="G11-B30-MULTIPLY_INDEPENDENT" data-thpt-first-try-id="THPT-G11-B30-TRY01" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** 5/6·3/5=1/2.
    
    <span data-thpt-help-id="HELP-G11-B30-TRY01" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Quy tắc nhân xác suất biên chỉ đúng khi đã kiểm/được cho tính độc lập; chữ 'và' không tự cho phép nhân.

        **Tự sửa:** Chỉ nhân vì đã nêu độc lập. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B30-C01">Luyện lại câu B30-C01</a>

    ### 1.2. Kiểm tra bằng số liệu
    
    So xác suất giao thực tế với tích biên. Nếu khác nhau, không độc lập.
    
    **Vận dụng.** P(A)=0,4, P(B)=0,5, P(AB)=0,25. Độc lập không?
    
    <span data-ped-first-try="2" data-outcome-id="G11-B30-VERIFY_INDEPENDENCE" data-thpt-first-try-id="THPT-G11-B30-TRY02" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Không; tích=0,2 khác 0,25.
    
    <span data-thpt-help-id="HELP-G11-B30-TRY02" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Độc lập là điều kiện định lượng P(A∩B)=P(A)P(B), không suy từ tên hoặc bối cảnh nghe tách biệt.

        **Tự sửa:** Không suy luận từ tên A,B. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B30-C02">Luyện lại câu B30-C02</a>

    ### 1.3. Cây và các lần thử
    
    Trong cây hai phép thử độc lập, các nhánh bước hai có cùng xác suất dù bước một thế nào.
    
    **Vận dụng.** Hai lần độc lập, mỗi lần thành công 2/3. Tính xác suất cả hai thành công và cả hai thất bại.
    
    <span data-ped-first-try="3" data-outcome-id="G11-B30-REPEATED_TRIALS" data-thpt-first-try-id="THPT-G11-B30-TRY03" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** 4/9 và 1/9; hai trường hợp còn lại mỗi 2/9.
    
    <span data-thpt-help-id="HELP-G11-B30-TRY03" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Mỗi đường đi trên cây nhân xác suất nhánh; các lá rời nhau phải cộng thành toàn bộ 1.

        **Tự sửa:** Bốn lá phải cộng bằng 1. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B30-C03">Luyện lại câu B30-C03</a>

    ### 1.4. Dùng bù
    
    Ít nhất một thành công gồm cả hai thành công và chỉ một. Bù là cả hai thất bại.
    
    **Vận dụng.** Hai thiết bị độc lập, xác suất đạt 3/5 và 4/5. Tính ít nhất một đạt.
    
    <span data-ped-first-try="4" data-outcome-id="G11-B30-AT_LEAST_ONE" data-thpt-first-try-id="THPT-G11-B30-TRY04" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** 1−(2/5)(1/5)=23/25.
    
    <span data-thpt-help-id="HELP-G11-B30-TRY04" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Ít nhất một là biến cố đối của cả hai đều thất bại; không đồng nhất với cả hai cùng thành công.

        **Tự sửa:** Không nhầm với đúng một hay cả hai. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B30-C04">Luyện lại câu B30-C04</a>

    ### 1.5. Độc lập và xung khắc
    
    Nếu hai biến cố dương mà xung khắc, giao bằng 0 nhưng tích dương.
    
    **Vận dụng.** P(A)=1/4, P(B)=1/3, A,B xung khắc. Chúng độc lập không?
    
    <span data-ped-first-try="5" data-outcome-id="G11-B30-INDEPENDENT_VS_DISJOINT" data-thpt-first-try-id="THPT-G11-B30-TRY05" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** Không; P(AB)=0 ≠ 1/12.
    
    <span data-thpt-help-id="HELP-G11-B30-TRY05" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Khi xung khắc mà từng xác suất dương, tích xác suất riêng dương nhưng giao bằng 0; ngoại lệ 0 phải kiểm riêng.

        **Tự sửa:** Trường hợp xác suất 0 cần xét riêng bằng đẳng thức. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B30-C05">Luyện lại câu B30-C05</a>

    ### 1.6. Bảng số liệu hai chiều
    
    Chọn đều một người từ bảng. Tính ba tỉ lệ có cùng mẫu số; kiểm giao với tích biên. Không suy ra quan hệ nhân quả.
    
    **Vận dụng.** Trong 100 người, 30 chọn A, 40 chọn B, 12 chọn cả hai. Kiểm tra độc lập trong mô hình chọn người từ bảng.
    
    <span data-ped-first-try="6" data-outcome-id="G11-B30-REAL_CONTEXT" data-thpt-first-try-id="THPT-G11-B30-TRY06" hidden></span>
    
    ??? question "Đối chiếu"
    
        **Lời giải:** P(A)=0,3; P(B)=0,4; P(AB)=0,12=0,3·0,4; độc lập trong mô hình này.
    
    <span data-thpt-help-id="HELP-G11-B30-TRY06" hidden></span>
    
    ??? tip "Kiểm lỗi"
    
        **Vì sao dễ sai:** Từ một bảng chọn đều người ta suy được xác suất của phân bố đang khảo sát, không suy quan hệ nhân quả hoặc đại diện dân số.

        **Tự sửa:** Không suy rộng ra toàn dân nếu mẫu không đại diện. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B30-C06">Luyện lại câu B30-C06</a>

    ### 1.7. Tích hợp Chương VIII: giao, hợp, độc lập và biến cố đối

    Bài 28 phân biệt **giao** (cùng xảy ra), **hợp** (ít nhất một), xung khắc và độc lập. Bài 29 cho thấy xác suất hợp phải **trừ phần giao** để không đếm hai lần. Chỉ khi Bài 30 có giả thiết hoặc chứng cứ **độc lập** mới được nhân \(P(A)P(B)\) để tìm giao. Khi đề đã cho số liệu phần giao, hãy dùng chúng để *kiểm độc lập* chứ không tự giả định.

    **Vận dụng — Tự thử tích hợp trước Core.** Chọn ngẫu nhiên một trong **1 000 người** được khảo sát, tất cả có khả năng được chọn như nhau. Có 400 người thuộc nhóm \(A\), 300 người thuộc nhóm \(B\), và 120 người thuộc **cả hai**. (a) Tính \(P(A)\), \(P(B)\), \(P(A\cap B)\). (b) Kiểm tra \(A\) và \(B\) có độc lập không. (c) Tính xác suất thuộc **ít nhất một** nhóm, **đúng một** nhóm và **không thuộc nhóm nào**. Tự lập bảng bốn miền trước khi mở Đối chiếu.

    <span data-ped-first-try="7" data-outcome-id="G11-CHVIII-INTEGRATED" data-thpt-first-try-id="THPT-G11-B30-TRY07" hidden></span>

    ??? question "Đối chiếu — bốn miền và kiểm độc lập"

        **Đếm giao trước:** \(P(A)=400/1000=0{,}4\), \(P(B)=300/1000=0{,}3\), \(P(A\cap B)=120/1000=0{,}12\).

        **Kiểm điều kiện nhân:** \(P(A)P(B)=0{,}4\cdot0{,}3=0{,}12=P(A\cap B)\). Do đó \(A,B\) độc lập trong mô hình này, **nhưng không xung khắc** vì phần giao \(0{,}12>0\).

        **Bốn miền:** Chỉ \(A\): \(400-120=280\); chỉ \(B\): \(300-120=180\); cả hai: \(120\); không nhóm nào: \(1000-280-180-120=420\). Vì vậy \(P(A\cup B)=(400+300-120)/1000=0{,}58\), \(P(\text{đúng một})=(280+180)/1000=0{,}46\), \(P(\overline{A\cup B})=420/1000=0{,}42\).

        **Kiểm tổng:** \(280+180+120+420=1000\); xác suất hợp và xác suất đối cộng thành \(0{,}58+0{,}42=1\).

    <span data-thpt-help-id="HELP-G11-B30-TRY07" hidden></span>

    ??? tip "Kiểm lỗi — tự giả độc lập hay quên trừ phần giao"

        **Dấu hiệu:** Em lấy \(0{,}4\cdot0{,}3\) làm dữ liệu phần giao trước khi xem 120 người, hoặc cộng \(0{,}4+0{,}3\) thành xác suất hợp.

        **Vì sao sai:** Độc lập là điều cần **kiểm** từ giao và hai xác suất đã cho; công thức cộng hợp luôn trừ phần bị đếm hai lần.

        **Tự sửa:** Vẽ bốn miền *chỉ A / chỉ B / cả hai / không nhóm nào*, kiểm tổng 1 000; so sánh giao thực tế với tích để xác định độc lập. Ôn Bài 28–30 rồi tự giải câu Practice tích hợp `THPT-G11-CHVIII-CHVIII-P01` tại <a href="../luyen-tap/?item=THPT-G11-CHVIII-CHVIII-P01">Core và Luyện tập</a> sau khi thử.

=== "Kiến thức SGK"

    ### 2.1. Công thức nhân xác suất cho hai biến cố độc lập
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Công thức nhân xác suất cho hai biến cố độc lập.</strong>
    
    Nếu A, B độc lập thì tỉ lệ B trong nhóm A không đổi so với toàn thể. Vì vậy phần chung bằng tỉ lệ nhóm A nhân tỉ lệ B.
    \[
    P(AB)=P(A)P(B).
    \]
    Trong mô hình hữu hạn, đẳng thức này cũng là tiêu chí kiểm tra độc lập, kể cả các trường hợp xác suất 0 hoặc 1. Khi \(P(AB)\ne P(A)P(B)\), hai biến cố không độc lập. Với hai biến cố xung khắc có xác suất dương, giao bằng 0 trong khi tích lớn hơn 0. Nếu một xác suất bằng 0, không được dùng kết luận 'xung khắc thì không độc lập'. Không nhân hai xác suất biên chỉ vì đề nói 'và'; rút không hoàn lại có thể làm thay đổi tỉ lệ.
    
    </div>

    ### 2.2. Vận dụng
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Vận dụng.</strong>
    
    Nhờ tính độc lập của các cặp biến cố đối ở B28, nếu \(P(A)=a,P(B)=b\) và A,B độc lập, ta có \(P(\overline A\,\overline B)=(1-a)(1-b)\). Do đó \(P(A\cup B)=1-(1-a)(1-b)\). Đúng một bằng \(a(1-b)+(1-a)b\); lúc tính hợp cũng có thể dùng a+b−ab. Cây độc lập có hai nhánh tại mỗi nút cộng bằng 1; nhân dọc một đường, cộng các lá rời nhau ứng với câu hỏi. Với nhiều phép thử, nhân toàn bộ chỉ khi độc lập đồng thời, không suy từ độc lập từng cặp. Trong bảng hai chiều, chia tổng hàng, tổng cột và ô giao cho cùng tổng N, so sánh tích biên với giao; kết luận chỉ cho phân bố được mô tả, không khẳng định quan hệ nhân quả.
    
    </div>

=== "Ví dụ"

    ### 3.1. Nhân hai xác suất
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B30-01"><p><strong>Đề bài:</strong> Hai máy hoạt động độc lập, xác suất tốt 7/8 và 4/7. Tính cả hai tốt.</p><p><strong>Phân tích:</strong> Giao, có giả thiết độc lập.</p><p><strong>Lời giải:</strong> 7/8·4/7=1/2.</p><p><strong>Kiểm lại:</strong> Không lớn hơn mỗi xác suất riêng.</p></div>

    ### 3.2. Xác nhận độc lập
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B30-02"><p><strong>Đề bài:</strong> P(A)=3/5, P(B)=1/3, P(AB)=1/5. Kiểm tra.</p><p><strong>Phân tích:</strong> So tích biên với giao.</p><p><strong>Lời giải:</strong> 3/5·1/3=1/5, bằng giao nên độc lập.</p><p><strong>Kiểm lại:</strong> Giao dương không mâu thuẫn độc lập.</p></div>

    ### 3.3. Phát hiện phụ thuộc
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B30-03"><p><strong>Đề bài:</strong> P(A)=1/2, P(B)=2/3, P(AB)=1/4. Kiểm tra.</p><p><strong>Phân tích:</strong> Giao phải bằng tích nếu độc lập.</p><p><strong>Lời giải:</strong> Tích=1/3 khác 1/4 nên không độc lập.</p><p><strong>Kiểm lại:</strong> Dữ kiện vẫn hợp lệ: hợp=11/12.</p></div>

    ### 3.4. Ít nhất một
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B30-04"><p><strong>Đề bài:</strong> Hai lần thử độc lập, mỗi lần đạt 3/5. Tính ít nhất một đạt.</p><p><strong>Phân tích:</strong> Lấy bù cả hai trượt.</p><p><strong>Lời giải:</strong> 1−(2/5)^2=21/25.</p><p><strong>Kiểm lại:</strong> Cách khác: 3/5+3/5−9/25=21/25.</p></div>

    ### 3.5. Ba lần thử độc lập đồng thời
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B30-05"><p><strong>Đề bài:</strong> Ba phép thử độc lập đồng thời, xác suất đạt 1/3, 3/4, 4/5. Tính cả ba đạt.</p><p><strong>Phân tích:</strong> Mở rộng tích cho mô hình độc lập đồng thời.</p><p><strong>Lời giải:</strong> 1/3·3/4·4/5=1/5.</p><p><strong>Kiểm lại:</strong> Không dùng kết quả này chỉ từ độc lập từng cặp.</p></div>

    ### 3.6. Không hoàn lại
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-CHVIII-B30-06"><p><strong>Đề bài:</strong> Hộp 4 đỏ, 3 xanh. Rút đều 2 bi liên tiếp không hoàn lại. A: đầu xanh, B: sau xanh. Hai biến cố độc lập không?</p><p><strong>Phân tích:</strong> Khi đầu xanh, còn 2 xanh/6; khi đầu đỏ, còn 3 xanh/6.</p><p><strong>Lời giải:</strong> 1/3 khác 1/2 nên phụ thuộc; không nhân (3/7)^2.</p><p><strong>Kiểm lại:</strong> Không cần công thức xác suất có điều kiện tổng quát.</p></div>

    ### 3.7. Kiểm tra độc lập bằng bảng
    
    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B30-R02-07"><p><strong>Đề bài:</strong> Khảo sát 200 người: trong 80 người dùng xe buýt có 24 người mang ô; trong 120 người không dùng xe buýt có 56 người mang ô. Chọn đều một người. Hai biến cố dùng xe buýt và mang ô có độc lập không?</p><p><strong>Phân tích:</strong> Lập bảng hai chiều. Mỗi ô trong thân bảng đếm đúng một nhóm; đọc giao ở ô 24, xác suất biên từ hàng/cột tổng.</p><table><thead><tr><th scope="col">Phương tiện</th><th scope="col">Mang ô</th><th scope="col">Không mang ô</th><th scope="col">Tổng</th></tr></thead><tbody><tr><th scope="row">Xe buýt</th><td>24</td><td>56</td><td>80</td></tr><tr><th scope="row">Không đi xe buýt</th><td>56</td><td>64</td><td>120</td></tr><tr><th scope="row">Tổng</th><td>80</td><td>120</td><td>200</td></tr></tbody></table><p><strong>Lời giải:</strong> P(A)=80/200=0,4; P(B)=80/200=0,4; P(AB)=24/200=0,12 ≠ 0,16. Không độc lập trong phân bố khảo sát.</p><p><strong>Kiểm lại:</strong> Hàng tổng 80,120; cột tổng 80,120; tổng 200. Không kết luận xe buýt gây ảnh hưởng đến việc mang ô.</p></div>

    ### 3.8. Tích hợp hai phép thử độc lập, giao và đúng một

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B30-R04-INTEGRATED">
    <p><strong>Đề bài:</strong> Hai thiết bị hoạt động độc lập. Xác suất thiết bị thứ nhất tốt là \(3/4\), thứ hai tốt là \(2/3\). Tính xác suất cả hai tốt, ít nhất một tốt và đúng một tốt.</p>
    <p><strong>Chọn phương pháp:</strong> Giả thiết xác nhận độc lập, nên có thể nhân để tính giao. “Ít nhất một” dùng biến cố đối cả hai hỏng; “đúng một” chia thành hai trường hợp xung khắc.</p>
    <p><strong>Lời giải:</strong> Gọi \(A,B\) lần lượt là hai thiết bị tốt. \(P(A\cap B)=\frac34\frac23=\frac12\). Vì hai biến cố đối cũng độc lập, \(P(A\cup B)=1-P(\overline A\cap\overline B)=1-\frac14\frac13=\frac{11}{12}\). Xác suất đúng một tốt là \(P(A\cap\overline B)+P(\overline A\cap B)=\frac34\frac13+\frac14\frac23=\frac14+\frac16=\frac5{12}\).</p>
    <p><strong>Kiểm lại:</strong> Cả hai tốt \(6/12\), đúng một tốt \(5/12\), cả hai hỏng \(1/12\), tổng \(12/12=1\). Hai biến cố tốt **không xung khắc**: xác suất cả hai tốt là \(1/2\) khác 0.</p>
    </div>

=== "Lỗi thường gặp"

    <span data-thpt-help-id="HELP-G11-CHVIII-B30-01" hidden></span>
    
    ??? tip "4.1. Nhân khi chưa biết độc lập"
    
        Kiểm tiêu chí tích bằng giao hoặc giả thiết, xem 2.1. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B30-C01">Luyện lại câu B30-C01</a>

    <span data-thpt-help-id="HELP-G11-CHVIII-B30-02" hidden></span>
    
    ??? tip "4.2. Lấy giao thay cho ít nhất một"
    
        Dùng bù cả hai thất bại, xem 2.2. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B30-C04">Luyện lại câu B30-C04</a>

    <span data-thpt-help-id="HELP-G11-CHVIII-B30-03" hidden></span>
    
    ??? tip "4.3. Suy độc lập từ tên biến cố"
    
        Tính ba xác suất rồi so tích, xem 2.1. <a href="../luyen-tap/?item=THPT-G11-CHVIII-B30-P02">Luyện lại câu B30-P02</a>

    <span data-thpt-help-id="HELP-G11-B30-INTEGRATED" hidden></span>

    ??? tip "4.4. Lẫn lộn độc lập, xung khắc và biến cố đối"

        **Dấu hiệu:** Em gọi hai biến cố độc lập là không thể xảy ra cùng lúc hoặc bỏ phần giao khi cộng hợp.

        **Vì sao sai:** Độc lập liên quan điều kiện \(P(A\cap B)=P(A)P(B)\); xung khắc đòi \(P(A\cap B)=0\). Hai khái niệm khác nhau.

        **Tự sửa:** Ôn §1.7 và Ví dụ 3.8, đếm bốn miền rồi quay về <a href="../luyen-tap/?item=THPT-G11-CHVIII-CHVIII-P01">Practice tích hợp gốc</a> trước khi mở lời giải.

    [Core và Luyện tập Bài 30](luyen-tap.md) · <a href="../../../thu-vien/tu-luan-g11-chuong-viii.md">Tự luận Chương VIII</a> · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md)

*Nguồn đối chiếu: SGK Toán 11 Kết nối tri thức với cuộc sống, Tập hai, Bài 30, trang in 76–78.*

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập hai, Bài 30 (trang in 76–78); đối chiếu SBT cùng bộ (tài liệu tham khảo luyện tập).</p>
