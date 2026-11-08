# Bài 4. Hệ bất phương trình bậc nhất hai ẩn

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG II · KIẾN THỨC SGK KNTT</p><p class="thpt-r4-lead">Lý thuyết, ví dụ và sơ đồ nửa mặt phẳng/đa giác từ học liệu đã duyệt. Em tự luyện trước khi mở đáp án, không ghi điểm thành thạo.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương II</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra · chưa kích hoạt</a></nav></div>

<!-- G10_CHII_FULL_R03_ALL_BEGIN -->

## Tự khám phá trước công thức

Em hãy đọc tình huống, nhớ kiến thức đã học và **tự trả lời từng câu Tự thử** trước khi mở lời giải. Sau đó học phần Kiến thức SGK và luyện Core. Hoạt động Tự thử chỉ dùng để tự học, không chấm điểm hay ghi Mastery.

<!-- G10_CHII_R03_BEGIN:THPT-G10-CHII-TRY06 OUTCOME=G10-B04-SYSTEM -->

<span id="thpt-g10-chii-try06" data-thpt-first-try-id="THPT-G10-CHII-TRY06" data-outcome-id="G10-B04-SYSTEM" data-thpt-help-ref="HELP-G10-B04-01"></span>

### Nghiệm của hệ phải thỏa tất cả điều kiện

**Vì sao cần học:** Một phương án có thể đạt ngân sách nhưng vi phạm diện tích hoặc giờ làm; "đạt một điều kiện" không có nghĩa "đạt kế hoạch".

**Điều phải nhớ trước:** Đã học kiểm một điểm với một bất phương trình và phép giao tập hợp ở Chương I.

**Hình thành bản chất:** Hệ bất phương trình đặt nhiều điều kiện đồng thời. Tập nghiệm hệ là **giao** các tập nghiệm từng điều kiện, không phải hợp.

**Hướng dẫn đọc hình:** PED4: Khi nhiều điều kiện biểu diễn bằng các nửa mặt phẳng, chỉ phần nằm đồng thời trong tất cả các miền mới là nghiệm hệ; hình dùng chung FIG-G10-B04-01.

**Vì sao chọn phương pháp:** Thế tọa độ vào từng bất phương trình, chỉ giữ cặp làm tất cả đúng. Không dừng ở hàng đầu tiên đúng.

**Tự thử trước Core:** Xét hệ \(x\ge1,\ y\ge0,\ x+y\le5\). \((2,3)\) và \((0,4)\) có là nghiệm hệ không? Vì sao?

??? question "Đã tự làm? Tự mở đáp án và hướng khắc phục"

    **Đáp án canonical:** (2,3) là nghiệm; (0,4) không.



    **Giải thích và kiểm điều kiện:** (2,3) có \(2\ge1,3\ge0,2+3=5\le5\), tất cả đúng. (0,4) vi phạm \(x\ge1\), dù hai điều kiện còn lại đúng.



    **D6 · Tự khắc phục sau khi thử:** Nếu giữ (0,4), em đã lấy "hoặc" thay cho "và". Xem HELP-G10-B04-01.



    **Đường trở lại:** Đối chiếu EX-G10-B04-01 và HELP-G10-B04-01 trong R01 đã khóa, rồi mới làm Core/Practice.



<!-- G10_CHII_R03_END:THPT-G10-CHII-TRY06 -->

<!-- G10_CHII_R03_BEGIN:THPT-G10-CHII-TRY07 OUTCOME=G10-B04-REGION_INTERSECTION -->

<span id="thpt-g10-chii-try07" data-thpt-first-try-id="THPT-G10-CHII-TRY07" data-outcome-id="G10-B04-REGION_INTERSECTION" data-thpt-help-ref="HELP-G10-B04-01"></span>

### Tìm giao của các miền nghiệm

**Vì sao cần học:** Khi cả ba giới hạn cùng tác động, cần nhìn được tập hợp toàn bộ phương án hợp lệ, không chỉ thử từng phương án.

**Điều phải nhớ trước:** Biết trục tọa độ, phương trình đường thẳng, nửa mặt phẳng nghiệm và giao của các tập hợp.

**Hình thành bản chất:** Giao của \(x\ge0, y\ge0, x+2y\le6\) là một tam giác kín trong góc phần tư thứ nhất; các đỉnh được tạo từ giao điểm của các đường biên.

**Hướng dẫn đọc hình:** PED4: Trên FIG-G10-B04-01 xác định từng đường biên, các giao điểm đỉnh, rồi chỉ giữ phần cùng nằm trong ba nửa mặt phẳng. Phân biệt hình tam giác kín với các miền riêng.

**Vì sao chọn phương pháp:** Vẽ ba đường biên, quyết định phía đúng cho mỗi bất phương trình, tìm giao và đỉnh bằng giải hệ hai phương trình. Đừng mặc định miền nào cũng là đa giác bị chặn.

**Tự thử trước Core:** Hệ \(x\ge0,\ y\ge0,\ x+2y\le6\) có các đỉnh miền nghiệm nào? Có nhận các cạnh không?

??? question "Đã tự làm? Tự mở đáp án và hướng khắc phục"

    **Đáp án canonical:** \((0,0),(6,0),(0,3)\); các cạnh đều thuộc miền nghiệm.



    **Giải thích và kiểm điều kiện:** Giao \(x=0,y=0\) cho (0,0); \(y=0,x+2y=6\) cho (6,0); \(x=0,x+2y=6\) cho (0,3). Dấu \(\ge,\le\) đều có bằng.



    **D6 · Tự khắc phục sau khi thử:** Nếu thấy hình có cả phần bên ngoài, em đã lấy hợp thay giao. Nếu bỏ cạnh, em đã bỏ mất dấu bằng. Xem HELP-G10-B04-01 và FIG-G10-B04-01.



    **Đường trở lại:** Đối chiếu EX-G10-B04-01 và HELP-G10-B04-01 trong R01 đã khóa, rồi mới làm Core/Practice.



<!-- G10_CHII_R03_END:THPT-G10-CHII-TRY07 -->

<!-- G10_CHII_R03_BEGIN:THPT-G10-CHII-TRY08 OUTCOME=G10-B04-FEASIBILITY -->

<span id="thpt-g10-chii-try08" data-thpt-first-try-id="THPT-G10-CHII-TRY08" data-outcome-id="G10-B04-FEASIBILITY" data-thpt-help-ref="HELP-G10-B04-01"></span>

### Nhận biết miền nghiệm rỗng

**Vì sao cần học:** Trước khi tìm phương án tối ưu phải biết có phương án nào thỏa tất cả điều kiện hay không.

**Điều phải nhớ trước:** Biết so sánh \(x+y\) với x khi \(y\ge0\); biết nghiệm hệ là giao các điều kiện.

**Hình thành bản chất:** Miền khả thi rỗng khi các ràng buộc mâu thuẫn, dù từng bất phương trình riêng lẻ có nhiều nghiệm. Miền không rỗng có thể bị chặn hoặc không bị chặn.

**Hướng dẫn đọc hình:** PED4: Một miền rỗng không có điểm giao; nếu vẽ x≥3 trong góc phần tư thứ nhất và x+y≤2, hai miền không chồng nhau.

**Vì sao chọn phương pháp:** Tìm mâu thuẫn ngắn gọn trong các điều kiện trước khi vẽ hay tối ưu; không mặc định cứ có các đường thẳng là có đa giác nghiệm.

**Tự thử trước Core:** Hệ \(x\ge3,\ y\ge0,\ x+y\le2\) có nghiệm không? Giải thích mà không cần vẽ đồ thị.

??? question "Đã tự làm? Tự mở đáp án và hướng khắc phục"

    **Đáp án canonical:** Không có nghiệm.



    **Giải thích và kiểm điều kiện:** Từ \(x\ge3\) và \(y\ge0\) suy \(x+y\ge3\); điều này mâu thuẫn với \(x+y\le2\).



    **D6 · Tự khắc phục sau khi thử:** Nếu nghĩ có nghiệm, thử dùng một cặp x≥3,y≥0 sẽ thấy tổng luôn ≥3; đọc HELP-G10-B04-01.



    **Đường trở lại:** Đối chiếu EX-G10-B04-02 và HELP-G10-B04-01 trong R01 đã khóa, rồi mới làm Core/Practice.



<!-- G10_CHII_R03_END:THPT-G10-CHII-TRY08 -->

<!-- G10_CHII_R03_BEGIN:THPT-G10-CHII-TRY09 OUTCOME=G10-B04-LINEAR_OBJECTIVE -->

<span id="thpt-g10-chii-try09" data-thpt-first-try-id="THPT-G10-CHII-TRY09" data-outcome-id="G10-B04-LINEAR_OBJECTIVE" data-thpt-help-ref="HELP-G10-B04-02"></span>

### Tìm giá trị hàm mục tiêu trên miền nghiệm

**Vì sao cần học:** Có nhiều phương án thỏa ràng buộc, nhưng nếu cần kết quả cao nhất ta phải chọn trong **miền hợp lệ**, không chọn giá trị lớn tùy ý.

**Điều phải nhớ trước:** Biết tính biểu thức \(F(x,y)\) tại một điểm và đọc đỉnh đa giác khả thi.

**Hình thành bản chất:** Trên một đa giác kín, bị chặn, không rỗng, hàm mục tiêu tuyến tính đạt giá trị lớn/nhỏ ở ít nhất một đỉnh; đôi khi cả một cạnh cùng tối ưu.

**Hướng dẫn đọc hình:** PED4: Tam giác \(x\ge0,y\ge0,2x+y\le6\) có các đỉnh \((0,0),(3,0),(0,6)\); đánh dấu từng đỉnh trước khi so hàm mục tiêu.

**Vì sao chọn phương pháp:** Trước hết xác nhận miền là đa giác kín bị chặn; tính F tại **mọi** đỉnh rồi so. Với miền rỗng/không bị chặn phải xét riêng, không áp máy móc quy tắc đỉnh.

**Tự thử trước Core:** Tam giác nghiệm của \(x\ge0,y\ge0,2x+y\le6\) có các đỉnh \((0,0),(3,0),(0,6)\). Tính \(F=x+2y\) tại các đỉnh và chọn giá trị lớn nhất.

??? question "Đã tự làm? Tự mở đáp án và hướng khắc phục"

    **Đáp án canonical:** \(F_{\max}=12\) tại (0,6).



    **Giải thích và kiểm điều kiện:** \(F(0,0)=0; F(3,0)=3; F(0,6)=12\). Đỉnh (0,6) thỏa điều kiện biên \(2\cdot0+6=6\).



    **D6 · Tự khắc phục sau khi thử:** Nếu chọn (3,0), em đã so vị trí trên trục x thay vì giá trị F; xem HELP-G10-B04-02.



    **Đường trở lại:** Đối chiếu EX-G10-B04-02 và HELP-G10-B04-02 trong R01 đã khóa, rồi mới làm Core/Practice.



<!-- G10_CHII_R03_END:THPT-G10-CHII-TRY09 -->

<!-- G10_CHII_R03_BEGIN:THPT-G10-CHII-TRY10 OUTCOME=G10-B04-INTEGER_MODELS -->

<span id="thpt-g10-chii-try10" data-thpt-first-try-id="THPT-G10-CHII-TRY10" data-outcome-id="G10-B04-INTEGER_MODELS" data-thpt-help-ref="HELP-G10-B04-02"></span>

### Tôn trọng điều kiện nghiệm nguyên

**Vì sao cần học:** Máy móc làm tròn 2,33 sản phẩm lên 2 hoặc 3 có thể làm phương án vi phạm ngân sách; bài toán đếm phải kiểm điều kiện nguyên.

**Điều phải nhớ trước:** Biết phân số và số nguyên không âm; biết thay cặp điểm vào hai bất phương trình.

**Hình thành bản chất:** Đỉnh tối ưu liên tục có thể có tọa độ phân số, nhưng phương án sản xuất chỉ khả thi khi \(x,y\in\mathbb Z_{\ge0}\); không được xem nghiệm liên tục là lời giải bài toán nguyên.

**Hướng dẫn đọc hình:** PED4: Miền liên tục gồm các điểm trên mặt phẳng, còn bài toán đếm sản phẩm chỉ nhận điểm lưới có cả hai tọa độ nguyên; không suy đáp án từ một điểm lẻ trên cạnh.

**Vì sao chọn phương pháp:** Kiểm điều kiện nguyên **trước** khi tính mục tiêu; liệt kê một số điểm nguyên hợp lệ và so F. Không kết luận cực trị toàn cục chỉ từ hai điểm nếu chưa chứng minh.

**Tự thử trước Core:** Cho \(x+2y\le7, 2x+y\le7, x,y\in\mathbb Z_{\ge0}\), xét \(F=3x+2y\). Điểm \((7/3,7/3)\) có là phương án hợp lệ không? So F tại hai điểm (2,2) và (3,1).

??? question "Đã tự làm? Tự mở đáp án và hướng khắc phục"

    **Đáp án canonical:** \((7/3,7/3)\) không hợp lệ vì không nguyên; (2,2) và (3,1) đều hợp lệ, F tương ứng 10 và 11 nên (3,1) tốt hơn trong hai điểm.



    **Giải thích và kiểm điều kiện:** \(7/3+2(7/3)=7\) và \(2(7/3)+7/3=7\), nhưng \(7/3\notin\mathbb Z\). Với (2,2): ràng buộc bằng 6 và 6, F=10. Với (3,1): ràng buộc bằng 5 và 7, F=11. Chưa khẳng định đây là tối ưu toàn cục.



    **D6 · Tự khắc phục sau khi thử:** Nếu nhận (7/3,7/3), em chỉ kiểm bất phương trình mà quên điều kiện nguyên; nếu kết luận (3,1) tối ưu toàn cục từ hai điểm, hãy xem lại HELP-G10-B04-02.



    **Đường trở lại:** Đối chiếu EX-G10-B04-03 và HELP-G10-B04-02 trong R01 đã khóa, rồi mới làm Core/Practice.



<!-- G10_CHII_R03_END:THPT-G10-CHII-TRY10 -->

<!-- G10_CHII_FULL_R03_ALL_END -->

## 1. Kiến thức SGK

**Hệ và miền chung:** Cặp \((x,y)\) là nghiệm hệ khi thỏa **đồng thời từng bất phương trình**. Miền nghiệm là **giao** các nửa mặt phẳng (không phải hợp), có thể rỗng, bị chặn hoặc không bị chặn. Phần đường biên của từng ràng buộc được lấy tùy dấu của bất phương trình; các nét liền/đứt trên hình phải tương ứng chính xác.

**Giá trị lớn nhất/nhỏ nhất của hàm bậc nhất:** Với hàm \(F(x,y)=px+qy\) trên một **đa giác nghiệm không rỗng, đóng và bị chặn**, tồn tại giá trị lớn nhất, nhỏ nhất và có thể tìm chúng bằng các **đỉnh**. Trường hợp \(F\) song song một cạnh, có thể có cả cạnh cùng tối ưu. Nếu miền rỗng thì không tối ưu; nếu miền không bị chặn, vẫn có thể tồn tại *một* cực trị hữu hạn, phải xét riêng, không mặc định.

**Bài toán đếm sản phẩm:** Trước tiên có thể tối ưu trên miền liên tục để tìm chặn trên. Nếu điểm tối ưu liên tục có tọa độ nguyên thì đạt tối ưu cả bài toán nguyên; nếu tọa độ phân số thì phải tối ưu lại trên các điểm nguyên khả thi, không tự làm tròn từng tọa độ hoặc dùng giá trị phân số làm đáp án sản phẩm nguyên.

**Tự học 5 bước:** đặt biến và điều kiện → lập các ràng buộc/đơn vị → xác định miền giao → nhận diện mục tiêu và thử các đỉnh phù hợp → đối chiếu đơn vị, nghiệm nguyên, ý nghĩa thực tế và trường hợp rỗng/không bị chặn.

## 2. Ví dụ

**EX-G10-B04-01 — Giao nửa mặt phẳng và cực trị.** Hệ \(x\ge0,y\ge0,x+y\le6,2x+y\le8\) cho các đỉnh \(O(0,0),A(4,0),B(2,4),C(0,6)\). Xét \(F=3x+2y\): giá trị \(0,12,14,12\) → cực đại \(14\) tại B, cực tiểu \(0\) tại O. Kiểm tra B: \(2+4=6, 2\cdot2+4=8\).

**EX-G10-B04-02 — Hệ vô nghiệm.** Hai điều kiện \(x+y\le1\) và \(x+y\ge3\) không thể đồng thời đúng → miền nghiệm chung rỗng. Vẽ hợp hai miền sẽ cho kết luận sai.

**EX-G10-B04-03 — Tối ưu doanh nghiệp có nghiệm nguyên.** Sản phẩm A/B mua lần lượt 20/10 triệu mỗi chiếc; vốn không quá 1200 triệu và sức chứa không quá 100 chiếc. \(x,y\in\mathbb Z_{\ge0}\), \(20x+10y\le1200, x+y\le100\). Lợi nhuận \(F=3{,}5x+2y\) triệu đồng; miền liên tục có đỉnh \((0,0),(60,0),(20,80),(0,100)\). Lợi nhuận tại đỉnh tương ứng \(0,210,230,200\). Cực đại 230 tại \((20,80)\) có tọa độ nguyên nên đạt tối ưu cả mô hình nguyên. Đơn vị và điều kiện không âm không được bỏ.

## 3. Hình minh họa và tự khắc phục lỗi

<figure class="thpt-r4-plot thpt-r4-probability-figure"><img src="../../../../assets/images/thpt/THPT_G10_B04_FEASIBLE_POLYGON_D5_R01.svg" loading="lazy" alt="Miền giao đa giác nghiệm và các đỉnh xét hàm mục tiêu"><figcaption>Miền giao và bài toán tối ưu: cần xét đầy đủ ràng buộc và điều kiện nguyên nếu có.</figcaption></figure>

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="HELP-G10-B04-01"><summary>Nhầm hợp với giao trong hệ</summary>
<p><strong>Trigger:</strong> B04-C01, B04-C02, B04-P01, B04-P04. <strong>Sai lầm:</strong> chỉ cần đúng một bất phương trình nên tô hợp các miền.</p>
<p><strong>Nguyên lí:</strong> Nghiệm hệ phải thỏa đồng thời toàn bộ điều kiện, tức lấy giao; miền có thể rỗng.</p>
<p><strong>Tự sửa:</strong> Bắt đầu từ một cặp cụ thể, thế vào từng hàng; loại ngay khi một hàng sai. Vẽ từng miền, chỉ giữ phần không bị loại bởi bất cứ điều kiện nào.</p>
<p><strong>Tiền đề:</strong> phép giao tập hợp, biểu diễn nửa mặt phẳng.</p>
<p><strong>Luyện lại:</strong> `THPT-G10-B04-C01` → `THPT-G10-B04-P04`.</p>
<p><strong>Mở câu đã có:</strong> <a data-thpt-formative-id="THPT-G10-B04-C01" href="../luyen-tap/?item=THPT-G10-B04-C01">Luyện lại B04-C01</a> · <a data-thpt-formative-id="THPT-G10-B04-P04" href="../luyen-tap/?item=THPT-G10-B04-P04">Luyện lại B04-P04</a></p></details>

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="HELP-G10-B04-02"><summary>Tối ưu sai miền hoặc bỏ điều kiện nguyên</summary>
<p><strong>Trigger:</strong> B04-P02, B04-P03, B04-P05, B04-P06, W04. <strong>Sai lầm:</strong> chỉ kiểm một đỉnh, giả định nghiệm tối ưu duy nhất, hoặc làm tròn đỉnh phân số để trả bài nguyên.</p>
<p><strong>Nguyên lí:</strong> Trên đa giác kín, bị chặn, không rỗng, so F tại <strong>mọi</strong> đỉnh; có thể đồng tối ưu trên cả cạnh. Với miền không bị chặn xét riêng cực trị. Sản phẩm nguyên bắt buộc nghiệm nguyên.</p>
<p><strong>Tự sửa:</strong> Lập bảng đỉnh → F → chọn giá trị phù hợp. Với B04-P06, đỉnh liên tục (5/3,5/3) không nguyên; duyệt x∈{0,1,2}, tìm y nguyên tối ưu: (2,1) cho F=8, không dùng 25/3 làm đáp án sản phẩm.</p>
<p><strong>Tiền đề:</strong> giải hệ hai phương trình; miền nghiệm; số nguyên; hàm mục tiêu.</p>
<p><strong>Luyện lại:</strong> `THPT-G10-B04-P06` → `THPT-G10-B04-P03` (trường hợp cả cạnh cùng tối ưu).</p>
<p><strong>Mở câu đã có:</strong> <a data-thpt-formative-id="THPT-G10-B04-P06" href="../luyen-tap/?item=THPT-G10-B04-P06">Luyện lại B04-P06</a> · <a data-thpt-formative-id="THPT-G10-B04-P03" href="../luyen-tap/?item=THPT-G10-B04-P03">Luyện lại B04-P03</a></p></details>

## 4. Tiếp tục

[Luyện tập Bài 4](luyen-tap.md) · [Tự luận Chương II](../../thu-vien/tu-luan-chuong-ii.md)

<p class="thpt-r4-footnote">Nguồn: SGK Toán 10 KNTT tập 1 Bài 4 trang 26–30; SBT Bài 4 trang 19–23. Luyện tập tự đối chiếu không phải Tự kiểm tra độc lập.</p>
