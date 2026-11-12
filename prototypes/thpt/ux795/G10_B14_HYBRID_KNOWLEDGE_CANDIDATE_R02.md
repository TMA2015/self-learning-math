# Bài 14. Các số đặc trưng đo độ phân tán

## 1. Khám phá kiến thức

### Cùng tìm hiểu

Cả hai đội đều có điểm trung bình 7, nhưng đội A lần nào cũng quanh 7, còn đội B có lúc đạt 3, lúc đạt 10. Nếu muốn đánh giá **độ ổn định**, số trung bình không giúp phân biệt. Ta cần những số cho biết **dữ liệu trải rộng đến đâu**.

Khoảng biến thiên nhìn từ giá trị nhỏ nhất đến lớn nhất. Khoảng tứ phân vị nhìn phần dữ liệu ở giữa, ít bị tác động bởi các điểm cực đoan. Phương sai và độ lệch chuẩn đo mức xa trung bình của các quan sát. Vì các độ lệch có thể dương hoặc âm và triệt tiêu nhau, phương sai dùng **bình phương**; sau đó lấy căn để độ lệch chuẩn trở về cùng đơn vị với dữ liệu.

Khi gặp một giá trị bất thường, đừng loại nó theo cảm giác. Hãy so với quy tắc định lượng và đọc trong bối cảnh thực tế.

### Thuật ngữ, kiến thức và kỹ năng

**Thuật ngữ:** Khoảng biến thiên, khoảng tứ phân vị, phương sai, độ lệch chuẩn, giá trị bất thường, đơn vị đo.

**Sau bài học, em cần làm được:** So sánh độ phân tán của hai mẫu; tính trung bình và bình phương độ lệch; tìm IQR; xét ngoại lệ theo quy tắc; diễn giải đại lượng và đơn vị.

## 2. Kiến thức SGK

### Hai cách nhìn độ trải rộng của dữ liệu

Hai lớp có thể có trung bình gần nhau nhưng lớp có bạn quá cao hay quá thấp làm khoảng từ min đến max rộng hơn.

Đã biết min, max và \(Q_1,Q_3\) theo quy ước KNTT; phải sắp dữ liệu trước khi xác định tứ phân vị. 

Khoảng biến thiên nhìn hai biên xa nhất; khoảng tứ phân vị nhìn hai mốc ôm phần giữa của mẫu, vì thế ít bị riêng một cực trị chi phối hơn. Từ ý nghĩa 'độ rộng' mới đặt \(R=x_{\max}-x_{\min}\), \(\Delta_Q=Q_3-Q_1\).


Chọn R khi cần độ rộng toàn bộ, IQR khi quan tâm nửa giữa và mức ảnh hưởng của ngoại lệ; chúng không thay thế cho nhau.

**Em vận dụng.** Với mẫu đã sắp \(2,3,4,6,8,9,10\), tìm khoảng biến thiên R và khoảng tứ phân vị \(\Delta_Q\) theo KNTT.

<details class="thpt-r4-pedagogical-note" data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHV-TRY10">
<summary>Em đã tự thử? Mở lời giải để đối chiếu</summary>
<div class="thpt-r4-first-try-answer">
<p><strong>Đối chiếu kết quả:</strong> \(R=10-2=8\); \(Q_2=6\), \(Q_1=3\), \(Q_3=9\) nên \(\Delta_Q=9-3=6\).</p>
<p><strong>Giải thích vì sao:</strong> Với n=7 bỏ số giữa 6, nửa dưới 2,3,4 cho Q1=3 và nửa trên 8,9,10 cho Q3=9. R dùng min/max, IQR dùng Q1/Q3.</p>
<p><strong>Nếu chưa làm được:</strong> Xem lại mục Tự khắc phục lỗi thường gặp ở cuối bài, đọc lại phần Hiểu bản chất trước công thức và Vì sao làm theo cách này?, sau đó <a href="../luyen-tap/?item=THPT-G10-B14-P01">thử câu cùng kiến thức trong Core/Luyện tập</a>.</p>
</div>
</details>

### Độ lệch có thể bù dấu, nên phải bình phương

Các giá trị thấp hơn và cao hơn trung bình có độ lệch âm/dương bù nhau; cộng chênh lệch có dấu cho 0 dù dữ liệu rất phân tán.

Đã học trung bình, bình phương số và chia cho số quan sát n. Ở đây mô tả chính mẫu số liệu đang cho, không ước lượng tổng thể từ một mẫu ngẫu nhiên. 

Muốn đo 'xa trung bình bao nhiêu', hãy bình phương các khoảng lệch để không bị bù dấu rồi lấy trung bình các bình phương. **Theo SGK KNTT ở mục này chia cho n**, không tự dùng mẫu số n−1; kết quả là phương sai và có đơn vị bình phương.


<details class="thpt-r4-pedagogical-note" data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHV-TRY11">
<summary>Em đã tự thử? Mở lời giải để đối chiếu</summary>
<div class="thpt-r4-first-try-answer">
<p><strong>Đối chiếu kết quả:</strong> \(\bar x=4\); \(s^2=[(2-4)^2+(4-4)^2+(6-4)^2]/3=8/3\).</p>
<p><strong>Giải thích vì sao:</strong> Hai độ lệch −2 và +2 có tổng 0 nhưng bình phương đều 4; tổng bình phương 8 chia 3 phần tử.</p>
<p><strong>Nếu chưa làm được:</strong> Xem lại mục Tự khắc phục lỗi thường gặp ở cuối bài, đọc lại phần Hiểu bản chất trước công thức và Vì sao làm theo cách này?, sau đó <a href="../luyen-tap/?item=THPT-G10-B14-C02">thử câu cùng kiến thức trong Core/Luyện tập</a>.</p>
</div>
</details>

### Vì sao độ lệch chuẩn dễ đọc hơn phương sai?

Nếu đo chiều dài bằng cm thì phương sai mang đơn vị cm², khó so trực tiếp với chiều dài vài cm; cần số đo trở lại cùng đơn vị.

Biết phương sai không âm, căn bậc hai số không âm, trung bình mẫu và đơn vị cm. 

Lấy căn bậc hai phương sai giúp đưa mức phân tán về **cùng đơn vị với dữ liệu gốc**. Độ lệch chuẩn không cho biết từng quan sát lệch đúng bằng s, mà tóm tắt mức lệch điển hình.


<details class="thpt-r4-pedagogical-note" data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHV-TRY12">
<summary>Em đã tự thử? Mở lời giải để đối chiếu</summary>
<div class="thpt-r4-first-try-answer">
<p><strong>Đối chiếu kết quả:</strong> Trung bình 4 cm; \(s^2=[4+4+4+4]/4=4\,\mathrm{cm}^2\), \(s=2\,\mathrm{cm}\).</p>
<p><strong>Giải thích vì sao:</strong> Mỗi độ lệch với 4 là ±2 cm, bình phương 4 cm²; căn 4 cm² cho 2 cm.</p>
<p><strong>Nếu chưa làm được:</strong> Xem lại mục Tự khắc phục lỗi thường gặp ở cuối bài, đọc lại phần Hiểu bản chất trước công thức và Vì sao làm theo cách này?, sau đó <a href="../luyen-tap/?item=THPT-G10-B14-P05">thử câu cùng kiến thức trong Core/Luyện tập</a>.</p>
</div>
</details>

### Một giá trị xa trung tâm cần được nhận diện bằng quy tắc

Một ngày ghi doanh số quá lớn có thể là thật hoặc nhập sai. Trước khi kết luận, ta cần tiêu chí định lượng để đánh dấu giá trị khác xa số còn lại.

Biết tứ phân vị theo KNTT, IQR=Q3−Q1 và cách kiểm bất đẳng thức nghiêm ngặt. Không đồng nhất giá trị bất thường với dữ liệu chắc chắn sai. 

Đặt hai hàng rào quanh phần giữa: dưới \(Q_1-1{,}5\Delta_Q\) và trên \(Q_3+1{,}5\Delta_Q\). Giá trị **nhỏ hơn** rào dưới hoặc **lớn hơn** rào trên được gắn cờ bất thường; bằng rào không bị gắn theo dấu chặt.


<details class="thpt-r4-pedagogical-note" data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHV-TRY13">
<summary>Em đã tự thử? Mở lời giải để đối chiếu</summary>
<div class="thpt-r4-first-try-answer">
<p><strong>Đối chiếu kết quả:</strong> \(Q_2=4\), \(Q_1=2\), \(Q_3=6\), \(\Delta_Q=4\); hàng rào dưới −4, hàng rào trên 12. Chỉ giá trị 20 là bất thường.</p>
<p><strong>Giải thích vì sao:</strong> Với n=7, bỏ số giữa 4. Hai hàng rào =2−1,5·4=−4 và 6+1,5·4=12; 20&gt;12, các giá trị 1..6 trong khoảng.</p>
<p><strong>Nếu chưa làm được:</strong> Xem lại mục Tự khắc phục lỗi thường gặp ở cuối bài, đọc lại phần Hiểu bản chất trước công thức và Vì sao làm theo cách này?, sau đó <a href="../luyen-tap/?item=THPT-G10-B14-P03">thử câu cùng kiến thức trong Core/Luyện tập</a>.</p>
</div>
</details>

### Cùng trung bình không có nghĩa phân tán giống nhau

Hai nhóm đều đạt trung bình 4 điểm, nhưng một nhóm tập trung quanh 4, nhóm khác có điểm rất thấp và rất cao. Chỉ trung bình không đủ mô tả chất lượng phân bố.

Đã biết trung bình và cách đo độ lệch bằng phương sai chia n, mỗi nhóm có cùng số quan sát trong ví dụ. 

So hai nhóm cùng trung bình bằng mức lệch của từng quan sát: nhóm có bình phương lệch lớn hơn sẽ có phương sai lớn hơn; điều đó cho biết **độ phân tán**, không tự kết luận nhóm nào tốt hơn về mọi mặt.


Với hai nhóm cùng trung bình, dùng phương sai/độ lệch chuẩn để so độ trải; không chọn chỉ vì trung bình bằng nhau, cũng không suy độ lệch chuẩn cao là kết quả học tập kém về mọi mặt.

**Em vận dụng.** Nhóm A có \(2,4,6\), nhóm B có \(0,4,8\). Trung bình của hai nhóm và phương sai mô tả từng nhóm bằng bao nhiêu? Nhóm nào phân tán hơn?

<details class="thpt-r4-pedagogical-note" data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHV-TRY14">
<summary>Em đã tự thử? Mở lời giải để đối chiếu</summary>
<div class="thpt-r4-first-try-answer">
<p><strong>Đối chiếu kết quả:</strong> Cả hai trung bình 4; \(s_A^2=8/3\), \(s_B^2=32/3\), nên B phân tán hơn.</p>
<p><strong>Giải thích vì sao:</strong> A lệch −2,0,2; B lệch −4,0,4. Bình phương độ lệch nhóm B gấp bốn lần nên phương sai B lớn hơn.</p>
<p><strong>Nếu chưa làm được:</strong> Xem lại mục Tự khắc phục lỗi thường gặp ở cuối bài, đọc lại phần Hiểu bản chất trước công thức và Vì sao làm theo cách này?, sau đó <a href="../luyen-tap/?item=THPT-G10-B14-P04">thử câu cùng kiến thức trong Core/Luyện tập</a>.</p>
</div>
</details>

### Kiến thức SGK

### Khoảng biến thiên và khoảng tứ phân vị

**Cách đọc hình.** Quan sát hai tập dữ liệu có thể cùng trung bình nhưng độ trải rộng và vùng giữa khác nhau. Nhìn trục và các mốc tứ phân vị trước khi đánh giá mức phân tán.

<figure class="thpt-r4-plot thpt-r4-probability-figure"><img src="../../../docs/assets/images/thpt/THPT_G10_B14_DISPERSION_D5_R01.svg" loading="lazy" alt="Hai mẫu có cùng trung bình nhưng mức phân tán khác nhau"><figcaption>Hai mẫu có cùng trung bình nhưng mức phân tán khác nhau.</figcaption></figure>

Khoảng biến thiên \(R=x_{\max}-x_{\min}\ge0\). Khoảng tứ phân vị \(\Delta_Q=Q_3-Q_1\ge0\), được xác định từ **cách lấy tứ phân vị của SGK**. R rất nhạy với giá trị quá lớn/quá nhỏ, \(\Delta_Q\) nhìn vào phần 50% số liệu giữa.

### Phương sai / độ lệch chuẩn theo dãy đang mô tả
\(s^2=\frac1n\sum_{i=1}^{n}(x_i-\bar x)^2\), **chia cho n** như SGK chứ không tự thay bằng \(n-1\). \(s=\sqrt{s^2}\). Nếu dữ liệu gốc tính bằng kg thì phương sai tính kg² và độ lệch chuẩn tính kg. Với bảng tần số, tính \(\sum m_i(x_i-\bar x)^2/n\).

### Giá trị bất thường
Theo quy tắc của SGK, giá trị \(x<Q_1-1{,}5\Delta_Q\) hoặc \(x>Q_3+1{,}5\Delta_Q\) được coi là giá trị bất thường. Dấu ở đây **nghiêm ngặt** (<, >); bằng ngưỡng không bị liệt kê. Không tự động loại những giá trị đó khỏi dữ liệu khi tính toán nếu đề bài không yêu cầu.

## 3. Ví dụ giải toán

Trước khi xem lời giải, hãy xác định dữ kiện, điều phải tìm và lý do chọn cách giải. Sau đó kiểm tra lại điều kiện áp dụng và kết quả, thay vì chỉ nhìn phép tính cuối cùng.

### Ví dụ 1. R, IQR, phương sai
Mẫu \(2,4,6,8\): \(\bar x=5\), \(R=6\), \(Q_1=3,Q_3=7,\Delta_Q=4\); \(s^2=(9+1+1+9)/4=5\), \(s=\sqrt5\approx2{,}236\).

### Ví dụ 2. cùng trung bình, khác độ phân tán
\(A=(4,5,6)\), \(B=(1,5,9)\) đều có \(\bar x=5\), nhưng \(s_A^2=2/3\), \(s_B^2=32/3\); B biến động hơn, không thể dùng duy nhất trung bình.

### Ví dụ 3. nhận diện giá trị bất thường
Mẫu \(1,2,2,3,3,4,4,20\): \(Q_1=2\), \(Q_3=4\), \(\Delta_Q=2\), ngưỡng trên \(4+1{,}5(2)=7\), nên 20 là giá trị bất thường. Không gọi tất cả giá trị lớn hơn trung bình là ngoại lệ.

## 4. Lỗi thường gặp và cách tự khắc phục

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="HELP-G10-B14-01"><summary>Sai mẫu số phương sai và đơn vị</summary><ol><li><strong>Nhận diện lỗi:</strong> Sai mẫu số phương sai và đơn vị.</li><li><strong>Dấu hiệu / tự chẩn đoán:</strong> Dùng n−1 và viết s có đơn vị bình phương. Đang mô tả dãy số liệu SGK hay ước lượng suy luận mẫu?</li><li><strong>Kiến thức gốc:</strong> SGK dùng s²=Σ(x−x̄)²/n; s căn của s², cùng đơn vị dữ liệu.</li><li><strong>Tự sửa:</strong> Tính lại các bình phương rồi chia n và ghi đơn vị.</li><li><strong>Luyện lại bằng ID sẵn có:</strong> THPT-G10-B14-P05.</li></ol><p><a href="../luyen-tap/?item=THPT-G10-B14-P05">Luyện lại bằng câu hỏi đã có</a></p></details>
<details class="thpt-r4-pedagogical-note" data-thpt-help-id="HELP-G10-B14-02"><summary>Nhầm hàng rào ngoại lệ và phân tán</summary><ol><li><strong>Nhận diện lỗi:</strong> Nhầm hàng rào ngoại lệ và phân tán.</li><li><strong>Dấu hiệu / tự chẩn đoán:</strong> So giá trị với trung bình hoặc đánh dấu giá trị bằng ngưỡng là ngoại lệ. Em đã lấy Q1, Q3 đúng quy tắc chưa?</li><li><strong>Kiến thức gốc:</strong> Bất thường khi x&lt;Q1−1,5 IQR hoặc x&gt;Q3+1,5 IQR; dùng dấu nghiêm ngặt.</li><li><strong>Tự sửa:</strong> Tính Q1/Q3, viết ngưỡng và kiểm từng giá trị.</li><li><strong>Luyện lại bằng ID sẵn có:</strong> THPT-G10-B14-P03.</li></ol><p><a href="../luyen-tap/?item=THPT-G10-B14-P03">Luyện lại bằng câu hỏi đã có</a></p></details>

**Học tiếp:** [Core và Luyện tập](../luyen-tap/) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/).

<p class="thpt-r4-footnote">Nguồn toán học: SGK Toán 10 Kết nối tri thức với cuộc sống và học liệu SLM hiện hành. Lời giảng được biên tập nhằm hỗ trợ tự học độc lập.</p>

