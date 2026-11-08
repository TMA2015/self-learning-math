# Bài 22. Ba đường conic

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VII · KIẾN THỨC SGK KNTT</p>
<p class="thpt-r4-lead">Tìm hiểu elip, hypebol và parabol; nhận biết công thức, tính chất và các điều kiện của ba đường conic.</p>
<nav class="thpt-r4-lesson-tabs" aria-label="Điều hướng học Toán 10 Chương VII"><a href="../">Tổng quan Chương VII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra chương · chưa kích hoạt</a></nav>
</div>

<!-- G10_CHVII_FULL_R03_ALL_BEGIN -->

## Tự khám phá trước khi học công thức

Đọc vì sao cần học, tự làm Tự thử trước khi mở đáp án và chỉ quay lại Core sau khi đã đối chiếu. Các câu này là luyện tập không ghi Mastery.

<!-- G10_CHVII_R03_BEGIN:THPT-G10-CHVII-TRY18 OUTCOME=G10-B22-ELLIPSE_PARAMETERS -->

<span id="thpt-g10-chvii-try18" data-thpt-first-try-id="THPT-G10-CHVII-TRY18" data-outcome-id="G10-B22-ELLIPSE_PARAMETERS" data-thpt-help-ref="HELP-G10-CHVII-TRY18"></span>

### Elip và ý nghĩa hai tiêu điểm

**Vì sao cần học:** Một số đường bao có đặc điểm tổng quãng đường đến hai địa điểm cố định không đổi; tập hợp đó là đường elip.

**Kiến thức tiền đề:** Nhắc phương trình khoảng cách hai điểm, điều kiện a>b>0 cho elip có trục lớn là Ox.

**Bản chất trước công thức:** Tổng MF1+MF2=2a tạo ra elip. Với dạng x²/a²+y²/b²=1 có a>b>0, hai tiêu điểm cách tâm c với c²=a²−b², nên c<a.

**Hướng dẫn đọc hình:** Vẽ elip dẹt theo trục Ox, đánh dấu hai đỉnh (±a,0), hai tiêu điểm (±c,0) nằm bên trong đường bao; phân biệt c và b.

**Chọn phương pháp và giới hạn:** Đọc mẫu lớn hơn là a² khi trục lớn nằm trên Ox, tìm b², tính c²=a²−b² rồi viết tiêu điểm. **Tâm sai e=c/a là phần nâng cao, không dùng làm Core thay cho mục tiêu tiêu điểm/trục.**

**Tự thử trước Core:** Với elip x²/25+y²/16=1, tìm a, b, c và hai tiêu điểm.

??? question "Tự mở đáp án sau khi đã tự làm"

    **Đáp án:** a=5, b=4, c=3; F1(−3,0), F2(3,0).

    **Lý do:** a²=25>b²=16, c²=25−16=9 ⇒ c=3; elip có trục lớn Ox.

    **Nếu chưa đúng:** xem hướng khắc phục `HELP-G10-CHVII-TRY18` bên dưới; quay lại câu canonical cũ `THPT-G10-B22-P01` khi đã hiểu kiến thức.

<span id="help-g10-chvii-try18" data-thpt-help-id="HELP-G10-CHVII-TRY18"></span>

??? tip "Tự khắc phục theo năm bước"

    1. **Nhận diện lỗi:** Nếu dùng c²=a²+b², em đã nhầm công thức hypebol; nếu chọn B22-C01 tâm sai làm Core, em đang lệch kỹ năng SGK.

    2. **Quay lại bản chất:** Tổng MF1+MF2=2a tạo ra elip. Với dạng x²/a²+y²/b²=1 có a>b>0, hai tiêu điểm cách tâm c với c²=a²−b², nên c<a.

    3. **Tự sửa:** Quan sát dấu cộng giữa hai phân thức và kiểm 0<c<a; luyện đúng bài elip Core B22-P01.

    4. **Tự đối chiếu:** xem lại lời giải trên chỉ sau khi đã làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.

    5. **Luyện tiếp cùng kỹ năng:** quay lại `THPT-G10-B22-P01` trong ngân hàng Core/Practice SGK đã có; không coi câu vừa mở lời giải là chứng cứ đánh giá độc lập.

<a href="../luyen-tap/?item=THPT-G10-B22-P01">Mở câu luyện tập đã review để tự sửa</a>

<!-- G10_CHVII_R03_END:THPT-G10-CHVII-TRY18 -->

<!-- G10_CHVII_R03_BEGIN:THPT-G10-CHVII-TRY19 OUTCOME=G10-B22-HYPERBOLA_PARAMETERS -->

<span id="thpt-g10-chvii-try19" data-thpt-first-try-id="THPT-G10-CHVII-TRY19" data-outcome-id="G10-B22-HYPERBOLA_PARAMETERS" data-thpt-help-ref="HELP-G10-CHVII-TRY19"></span>

### Hypebol: chênh lệch khoảng cách và hai nhánh

**Vì sao cần học:** Đường có chênh lệch khoảng cách tới hai điểm cố định không đổi tạo hình khác elip: hai nhánh kéo ra vô hạn.

**Kiến thức tiền đề:** Nhắc c²=a²−b² của elip để thấy hypebol dùng dấu trừ và có c²=a²+b².

**Bản chất trước công thức:** Dạng x²/a²−y²/b²=1 có hai nhánh mở theo ±Ox; c²=a²+b² nên tiêu điểm xa tâm hơn các đỉnh (c>a).

**Hướng dẫn đọc hình:** Trên hình đánh dấu hai nhánh mở trái và phải, các đỉnh ±a và tiêu điểm ±c xa hơn; không nối hai nhánh thành oval như elip.

**Chọn phương pháp và giới hạn:** Đọc đúng dấu trừ và vị trí mẫu dưới x²: a² ở mẫu số hạng dương; b² mẫu số hạng âm; tìm c> a từ a²+b².

**Tự thử trước Core:** Hypebol x²/16−y²/9=1 có các đỉnh và hai tiêu điểm tọa độ nào?

??? question "Tự mở đáp án sau khi đã tự làm"

    **Đáp án:** Đỉnh A1(−4,0), A2(4,0); tiêu điểm F1(−5,0), F2(5,0).

    **Lý do:** a=4, b=3, c²=a²+b²=16+9=25 ⇒ c=5; trục thực Ox.

    **Nếu chưa đúng:** xem hướng khắc phục `HELP-G10-CHVII-TRY19` bên dưới; quay lại câu canonical cũ `THPT-G10-B22-C02` khi đã hiểu kiến thức.

<span id="help-g10-chvii-try19" data-thpt-help-id="HELP-G10-CHVII-TRY19"></span>

??? tip "Tự khắc phục theo năm bước"

    1. **Nhận diện lỗi:** Nếu lấy c=√7 hoặc vẽ oval kín, em đang áp dụng công thức và hình elip.

    2. **Quay lại bản chất:** Dạng x²/a²−y²/b²=1 có hai nhánh mở theo ±Ox; c²=a²+b² nên tiêu điểm xa tâm hơn các đỉnh (c>a).

    3. **Tự sửa:** Kiểm c>a và vẽ hai nhánh qua hai đỉnh ±4, không khép kín.

    4. **Tự đối chiếu:** xem lại lời giải trên chỉ sau khi đã làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.

    5. **Luyện tiếp cùng kỹ năng:** quay lại `THPT-G10-B22-C02` trong ngân hàng Core/Practice SGK đã có; không coi câu vừa mở lời giải là chứng cứ đánh giá độc lập.

<a href="../luyen-tap/?item=THPT-G10-B22-C02">Mở câu luyện tập đã review để tự sửa</a>

<!-- G10_CHVII_R03_END:THPT-G10-CHVII-TRY19 -->

<!-- G10_CHVII_R03_BEGIN:THPT-G10-CHVII-TRY20 OUTCOME=G10-B22-HYPERBOLA_ASYMPTOTES -->

<span id="thpt-g10-chvii-try20" data-thpt-first-try-id="THPT-G10-CHVII-TRY20" data-outcome-id="G10-B22-HYPERBOLA_ASYMPTOTES" data-thpt-help-ref="HELP-G10-CHVII-TRY20"></span>

### Tiệm cận của hypebol biểu diễn hướng hai nhánh ở xa

**Vì sao cần học:** Hai nhánh hypebol càng đi xa càng gần những đường thẳng cố định; chúng cho hướng hình học khi không thể vẽ toàn bộ đường cong.

**Kiến thức tiền đề:** Ôn tỉ số b/a từ dạng x²/a²−y²/b²=1 và tính chất đường thẳng đi qua gốc.

**Bản chất trước công thức:** Khi |x| lớn, hệ thức y²=(b²/a²)(x²−a²) cho |y/x| tiến gần b/a. Hai đường y=±(b/a)x là tiệm cận, không phải các nhánh thực của hypebol.

**Hướng dẫn đọc hình:** Vẽ hai đường chéo qua O và hai nhánh hypebol tiến sát chúng nhưng không chạm ở vùng xa; nhấn mạnh tiệm cận không phải trục đối xứng x/y.

**Chọn phương pháp và giới hạn:** Chỉ áp dụng công thức y=±(b/a)x cho dạng chính tắc tâm O, trục thực Ox. Trường hợp tịnh tiến/đổi trục cần biến đổi trước.

**Tự thử trước Core:** Hypebol x²/25−y²/4=1 có hai đường tiệm cận nào?

??? question "Tự mở đáp án sau khi đã tự làm"

    **Đáp án:** y=(2/5)x và y=−(2/5)x.

    **Lý do:** a²=25 ⇒ a=5; b²=4 ⇒ b=2. Hệ số góc tiệm cận là ±b/a=±2/5.

    **Nếu chưa đúng:** xem hướng khắc phục `HELP-G10-CHVII-TRY20` bên dưới; quay lại câu canonical cũ `THPT-G10-B22-C02` khi đã hiểu kiến thức.

<span id="help-g10-chvii-try20" data-thpt-help-id="HELP-G10-CHVII-TRY20"></span>

??? tip "Tự khắc phục theo năm bước"

    1. **Nhận diện lỗi:** Nếu lấy hệ số ±5/2, em đã đảo tỉ số a/b; nếu vẽ thẳng là đồ thị hypebol, em nhầm tiệm cận với đường cong.

    2. **Quay lại bản chất:** Khi |x| lớn, hệ thức y²=(b²/a²)(x²−a²) cho |y/x| tiến gần b/a. Hai đường y=±(b/a)x là tiệm cận, không phải các nhánh thực của hypebol.

    3. **Tự sửa:** Đánh dấu hai giao điểm với Ox (±5,0) của hypebol và hai đường chéo có hệ số ±0,4.

    4. **Tự đối chiếu:** xem lại lời giải trên chỉ sau khi đã làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.

    5. **Luyện tiếp cùng kỹ năng:** quay lại `THPT-G10-B22-C02` trong ngân hàng Core/Practice SGK đã có; không coi câu vừa mở lời giải là chứng cứ đánh giá độc lập.

<a href="../luyen-tap/?item=THPT-G10-B22-C02">Mở câu luyện tập đã review để tự sửa</a>

<!-- G10_CHVII_R03_END:THPT-G10-CHVII-TRY20 -->

<!-- G10_CHVII_R03_BEGIN:THPT-G10-CHVII-TRY21 OUTCOME=G10-B22-PARABOLA_FOCUS -->

<span id="thpt-g10-chvii-try21" data-thpt-first-try-id="THPT-G10-CHVII-TRY21" data-outcome-id="G10-B22-PARABOLA_FOCUS" data-thpt-help-ref="HELP-G10-CHVII-TRY21"></span>

### Parabol và quan hệ tiêu điểm – đường chuẩn

**Vì sao cần học:** Một chảo phản xạ có mặt cắt parabol vì vị trí của các điểm trên đường cong có quan hệ hình học đặc biệt với tiêu điểm và đường chuẩn.

**Kiến thức tiền đề:** Ôn khoảng cách điểm đến điểm, điểm đến đường thẳng; lưu ý dự án dùng quy ước y²=2px với p>0.

**Bản chất trước công thức:** Điểm M trên parabol có MF bằng khoảng cách vuông góc từ M đến đường chuẩn. Với y²=2px, p>0, tiêu điểm F(p/2,0) và đường chuẩn x=−p/2; **không** lấy F(p,0).

**Hướng dẫn đọc hình:** Vẽ đỉnh O, tiêu điểm F ở bên phải và đường chuẩn ở bên trái cách O cùng p/2; từ M trên đường cong, so hai đoạn dài bằng nhau.

**Chọn phương pháp và giới hạn:** Từ hệ số của x suy 2p, tính p rồi lấy p/2 cho tiêu điểm và đường chuẩn. Phải dùng đúng một quy ước công thức cho cả hai.

**Tự thử trước Core:** Cho parabol y²=8x với x≥0. Xác định tiêu điểm, đường chuẩn; M(2,4) có thuộc parabol không?

??? question "Tự mở đáp án sau khi đã tự làm"

    **Đáp án:** p=4; F(2,0), đường chuẩn x=−2; M(2,4) thuộc vì 4²=8·2.

    **Lý do:** 2p=8 ⇒ p=4, F=(p/2,0)=(2,0), đường chuẩn x=−p/2=−2. M có MF=4 và khoảng cách đến x=−2 là 4.

    **Nếu chưa đúng:** xem hướng khắc phục `HELP-G10-CHVII-TRY21` bên dưới; quay lại câu canonical cũ `THPT-G10-B22-P03` khi đã hiểu kiến thức.

<span id="help-g10-chvii-try21" data-thpt-help-id="HELP-G10-CHVII-TRY21"></span>

??? tip "Tự khắc phục theo năm bước"

    1. **Nhận diện lỗi:** Nếu đặt F=(4,0), em đã nhầm p với p/2; nếu không thử M, em chỉ kiểm công thức chứ chưa đọc đồ thị.

    2. **Quay lại bản chất:** Điểm M trên parabol có MF bằng khoảng cách vuông góc từ M đến đường chuẩn. Với y²=2px, p>0, tiêu điểm F(p/2,0) và đường chuẩn x=−p/2; **không** lấy F(p,0).

    3. **Tự sửa:** Thử ngay y²=8x ở M và so MF với khoảng cách ngang từ M đến x=−2.

    4. **Tự đối chiếu:** xem lại lời giải trên chỉ sau khi đã làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.

    5. **Luyện tiếp cùng kỹ năng:** quay lại `THPT-G10-B22-P03` trong ngân hàng Core/Practice SGK đã có; không coi câu vừa mở lời giải là chứng cứ đánh giá độc lập.

<a href="../luyen-tap/?item=THPT-G10-B22-P03">Mở câu luyện tập đã review để tự sửa</a>

<!-- G10_CHVII_R03_END:THPT-G10-CHVII-TRY21 -->

<!-- G10_CHVII_R03_BEGIN:THPT-G10-CHVII-TRY22 OUTCOME=G10-B22-CONIC_INTERSECTION -->

<span id="thpt-g10-chvii-try22" data-thpt-first-try-id="THPT-G10-CHVII-TRY22" data-outcome-id="G10-B22-CONIC_INTERSECTION" data-thpt-help-ref="HELP-G10-CHVII-TRY22"></span>

### Điểm và đường thẳng cắt conic

**Vì sao cần học:** Để xác định chỗ một tuyến đường thẳng đi qua một đường bao conic, ta tìm các tọa độ thỏa cả hai điều kiện.

**Kiến thức tiền đề:** Ôn giải hệ và thế phương trình đường thẳng vào công thức elip/hypebol/parabol.

**Bản chất trước công thức:** Giao điểm là nghiệm chung; số nghiệm thực phụ thuộc vị trí, chứ không được kết luận luôn có hai giao điểm.

**Hướng dẫn đọc hình:** Vẽ elip và trục Oy đi qua hai điểm trên và dưới; so với đường ngoài elip có thể không có giao điểm.

**Chọn phương pháp và giới hạn:** Thế phương trình đường vào conic, giải phương trình còn lại và kiểm từng nghiệm thực. Nghiệm hình học phải thỏa tất cả điều kiện.

**Tự thử trước Core:** Đường x=0 cắt elip x²/9+y²/4=1 tại những điểm nào?

??? question "Tự mở đáp án sau khi đã tự làm"

    **Đáp án:** (0,2) và (0,−2).

    **Lý do:** Thế x=0 được y²/4=1 ⇒ y²=4 ⇒ y=±2; cả hai tọa độ thỏa phương trình gốc.

    **Nếu chưa đúng:** xem hướng khắc phục `HELP-G10-CHVII-TRY22` bên dưới; quay lại câu canonical cũ `THPT-G10-B22-P05` khi đã hiểu kiến thức.

<span id="help-g10-chvii-try22" data-thpt-help-id="HELP-G10-CHVII-TRY22"></span>

??? tip "Tự khắc phục theo năm bước"

    1. **Nhận diện lỗi:** Nếu chỉ ghi y=2, em bỏ mất nghiệm âm vì căn của bình phương; nếu kết luận hai điểm theo hình mà không tính, chứng cứ chưa đủ.

    2. **Quay lại bản chất:** Giao điểm là nghiệm chung; số nghiệm thực phụ thuộc vị trí, chứ không được kết luận luôn có hai giao điểm.

    3. **Tự sửa:** Giải đủ hai dấu của y rồi thay lại từng cặp tọa độ.

    4. **Tự đối chiếu:** xem lại lời giải trên chỉ sau khi đã làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.

    5. **Luyện tiếp cùng kỹ năng:** quay lại `THPT-G10-B22-P05` trong ngân hàng Core/Practice SGK đã có; không coi câu vừa mở lời giải là chứng cứ đánh giá độc lập.

<a href="../luyen-tap/?item=THPT-G10-B22-P05">Mở câu luyện tập đã review để tự sửa</a>

<!-- G10_CHVII_R03_END:THPT-G10-CHVII-TRY22 -->

<!-- G10_CHVII_R03_BEGIN:THPT-G10-CHVII-TRY23 OUTCOME=G10-B22-CONIC_MODEL -->

<span id="thpt-g10-chvii-try23" data-thpt-first-try-id="THPT-G10-CHVII-TRY23" data-outcome-id="G10-B22-CONIC_MODEL" data-thpt-help-ref="HELP-G10-CHVII-TRY23"></span>

### Ứng dụng kích thước của parabol

**Vì sao cần học:** Trong thiết kế máng phản xạ hoặc cổng cong, bản vẽ có thể dùng parabol để tính độ rộng tại một vị trí đã định.

**Kiến thức tiền đề:** Nhắc phương trình y²=2px; trục đối xứng là Ox, tại x cố định các giá trị y đối xứng nhau.

**Bản chất trước công thức:** Tại một hoành độ x≥0, hai điểm biên của parabol có tung độ ±√(2px); độ rộng theo phương vuông góc trục là hiệu hai tung độ, bằng 2√(2px).

**Hướng dẫn đọc hình:** Vẽ parabol mở phải, đoạn thẳng đứng tại x=5 giao hai nhánh; chiều rộng là khoảng cách từ y âm đến y dương, không phải chỉ một tung độ.

**Chọn phương pháp và giới hạn:** Giải y²=2px tại x cụ thể, lấy cả ±y rồi trừ hai tung độ. Gắn đơn vị và chỉ dùng trong phạm vi mô hình thực tế phù hợp.

**Tự thử trước Core:** Mặt cắt một máng giả sử có dạng y²=20x (x,y tính bằng cm). Bề rộng của máng tại x=5 cm là bao nhiêu?

??? question "Tự mở đáp án sau khi đã tự làm"

    **Đáp án:** 20 cm.

    **Lý do:** Thế x=5 được y²=100 ⇒ y=±10 cm. Độ rộng là 10−(−10)=20 cm.

    **Nếu chưa đúng:** xem hướng khắc phục `HELP-G10-CHVII-TRY23` bên dưới; quay lại câu canonical cũ `THPT-G10-B22-P04` khi đã hiểu kiến thức.

<span id="help-g10-chvii-try23" data-thpt-help-id="HELP-G10-CHVII-TRY23"></span>

??? tip "Tự khắc phục theo năm bước"

    1. **Nhận diện lỗi:** Nếu đáp 10 cm, em chỉ lấy khoảng cách từ trục đối xứng đến một bên mép mà quên cả hai nhánh.

    2. **Quay lại bản chất:** Tại một hoành độ x≥0, hai điểm biên của parabol có tung độ ±√(2px); độ rộng theo phương vuông góc trục là hiệu hai tung độ, bằng 2√(2px).

    3. **Tự sửa:** Vẽ đoạn thẳng đứng từ (5,−10) tới (5,10) và tính hiệu hai tung độ.

    4. **Tự đối chiếu:** xem lại lời giải trên chỉ sau khi đã làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.

    5. **Luyện tiếp cùng kỹ năng:** quay lại `THPT-G10-B22-P04` trong ngân hàng Core/Practice SGK đã có; không coi câu vừa mở lời giải là chứng cứ đánh giá độc lập.

<a href="../luyen-tap/?item=THPT-G10-B22-P04">Mở câu luyện tập đã review để tự sửa</a>

<!-- G10_CHVII_R03_END:THPT-G10-CHVII-TRY23 -->

<!-- G10_CHVII_FULL_R03_ALL_END -->

## 1. Elip — trục lớn trùng \(Ox\)

Dạng chính tắc \(\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1\), với \(a>b>0\). Đặt \(c^2=a^2-b^2\), hai tiêu điểm là \((\pm c;0)\), các đỉnh \((\pm a;0)\) và \((0;\pm b)\).

**Ví dụ:** \(\dfrac{x^2}{25}+\dfrac{y^2}{9}=1\) có \(a=5\), \(b=3\), \(c=4\), tiêu điểm \((\pm4;0)\); tổng khoảng cách từ một điểm trên elip đến hai tiêu điểm bằng \(2a=10\).

## 2. Hypebol — trục thực trùng \(Ox\)

Dạng chính tắc \(\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1\), \(a,b>0\). Khi đó \(c^2=a^2+b^2\), hai tiêu điểm \((\pm c;0)\), các đỉnh \((\pm a;0)\), các tiệm cận \(y=\pm\dfrac ba x\).

**Ví dụ:** \(\dfrac{x^2}{9}-\dfrac{y^2}{16}=1\): \(a=3,b=4,c=5\), hai tiệm cận \(y=\pm4x/3\).

## 3. Parabol — quy ước \(y^2=2px,\ p>0\)

Parabol có đỉnh \(O(0;0)\), tiêu điểm \(F(p/2;0)\), đường chuẩn \(x=-p/2\). Mọi điểm \(M\) trên parabol có khoảng cách đến tiêu điểm bằng khoảng cách đến đường chuẩn.

**Ví dụ:** \(y^2=12x\), suy ra \(p=6\), \(F(3;0)\), đường chuẩn \(x=-3\). Điểm \(M(3;6)\) thuộc parabol vì \(36=12\cdot3\); hai khoảng cách đều bằng \(6\).

## 4. Phân biệt công thức và phạm vi

| Đường conic | Công thức liên hệ | Chú ý |
|---|---|---|
| Elip | \(c^2=a^2-b^2\) | \(a>b>0\) trong dạng trục lớn \(Ox\) |
| Hypebol | \(c^2=a^2+b^2\) | Tiệm cận \(y=\pm bx/a\) |
| Parabol | \(y^2=2px\) | Tiêu điểm \((p/2;0)\), không phải \((p;0)\) |

<details class="thpt-r4-pedagogical-note">
<summary>Kiến thức mở rộng: tâm sai</summary>
<p>Tâm sai là kiến thức nâng cao tự chọn, không thuộc phần Core bắt buộc. Hãy học vững phương trình chính tắc trước khi luyện thêm.</p>
</details>

## Khi gặp khó khăn — tự tìm lỗi và học lại

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="D6-G10-B22-01">
<summary>Đảo dấu quan hệ c² của conic</summary>
<p><strong>Dấu hiệu:</strong> Dùng c²=a²+b² cho elip hoặc c²=a²−b² cho hypebol.</p>
<p><strong>Bản chất toán:</strong> Trong dạng chính tắc trục Ox: elip x²/a²+y²/b²=1, a&gt;b&gt;0: c²=a²−b²; hypebol x²/a²−y²/b²=1, a,b&gt;0: c²=a²+b².</p>
<p><strong>Tự sửa:</strong> Ôn B22 mục 1–2: đọc dấu trước y² rồi mới xác định a²,b²,c²; elip có c&lt;a, hypebol có c&gt;a.</p>
<p><strong>Kiến thức cần ôn:</strong> Phương trình chính tắc; B22 mục 1–2.</p>
<p><strong>Luyện lại bài đã có:</strong> <a data-thpt-formative-id="THPT-G10-B22-C02" href="../luyen-tap/?item=THPT-G10-B22-C02">Luyện lại câu 22-C02</a> · <a data-thpt-formative-id="THPT-G10-B22-P01" href="../luyen-tap/?item=THPT-G10-B22-P01">Luyện lại câu 22-P01</a> · <a data-thpt-formative-id="THPT-G10-B22-P02" href="../luyen-tap/?item=THPT-G10-B22-P02">Luyện lại câu 22-P02</a> · <a data-thpt-formative-id="THPT-G10-CHVII-W22-01" href="../../../thu-vien/tu-luan-chuong-vii/#thpt-g10-chvii-w22-01">Bài tự luận liên quan</a></p>
</details>

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="D6-G10-B22-02">
<summary>Nhầm p với tọa độ tiêu điểm parabol</summary>
<p><strong>Dấu hiệu:</strong> Từ y²=2px ghi tiêu điểm F(p;0), đường chuẩn x=−p.</p>
<p><strong>Bản chất toán:</strong> Theo quy ước B22 mục 3 (p&gt;0): F(p/2;0), đường chuẩn x=−p/2. Với y²=Kx, phải giải 2p=K.</p>
<p><strong>Tự sửa:</strong> Ôn B22 mục 3: tính p từ hệ số 2p, xác nhận khoảng cách từ điểm thuộc parabol tới tiêu điểm và đường chuẩn bằng nhau.</p>
<p><strong>Kiến thức cần ôn:</strong> B20 khoảng cách điểm–đường, B22 mục 3.</p>
<p><strong>Luyện lại bài đã có:</strong> <a data-thpt-formative-id="THPT-G10-B22-P03" href="../luyen-tap/?item=THPT-G10-B22-P03">Luyện lại câu 22-P03</a> · <a data-thpt-formative-id="THPT-G10-B22-P04" href="../luyen-tap/?item=THPT-G10-B22-P04">Luyện lại câu 22-P04</a> · <a data-thpt-formative-id="THPT-G10-B22-P06" href="../luyen-tap/?item=THPT-G10-B22-P06">Luyện lại câu 22-P06</a></p>
</details>

## 5. Tiếp tục học

- [Core và Luyện tập/Vận dụng Chương VII](luyen-tap.md).
- [Tổng quan Chương VII](../chuong-vii.md).

<small>Nguồn đối chiếu: SGK KNTT tập 2, trang in 48–57; SBT trang 42–46. Không dùng đạo hàm hoặc nội dung trục quay ngoài phạm vi đã kiểm chứng.</small>
