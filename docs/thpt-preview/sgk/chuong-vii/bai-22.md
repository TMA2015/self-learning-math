# Bài 22. Ba đường conic

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VII · KIẾN THỨC SGK KNTT</p>
<p class="thpt-r4-lead">Tìm hiểu elip, hypebol và parabol; nhận biết công thức, tính chất và các điều kiện của ba đường conic.</p>

</div>

=== "Khám phá kiến thức"

    ### Cùng tìm hiểu

    Một điểm di chuyển trên mặt phẳng có thể bị ràng buộc bởi **khoảng cách đến những điểm hoặc đường cố định**. Nếu tổng khoảng cách đến hai điểm cố định không đổi, ta có **elip**; nếu trị tuyệt đối hiệu hai khoảng cách ấy không đổi, ta gặp **hypebol**. Nếu khoảng cách đến một điểm cố định luôn bằng khoảng cách đến một đường thẳng cố định, ta có **parabol**.

    Ba đường đều có thể được mô tả bằng phương trình, nhưng **dấu và mẫu số trong phương trình không thể thay thế cho việc hiểu định nghĩa hình học**. Em cần nhận ra tiêu điểm, trục đối xứng, bán trục và điều kiện tham số trước khi tính. Khi gặp hình của một elip có trục lớn nằm ngang, ta không được tự dùng đúng công thức đó cho một elip quay hoặc đổi trục.

    Bài học sẽ đi từ đặc điểm hình học đến ba phương trình chính tắc đúng quy ước SGK. Các hình minh họa đi cạnh từng loại đường, không gom chung ở cuối để học sinh khỏi so nhầm tiêu điểm hay trục.

    ### Ví dụ trực quan


    <span id="thpt-g10-chvii-try18" data-thpt-first-try-id="THPT-G10-CHVII-TRY18" data-outcome-id="G10-B22-ELLIPSE_PARAMETERS" data-thpt-help-ref="HELP-G10-CHVII-TRY18"></span>

    Hãy cố định hai chiếc đinh tại \(F_1,F_2\), buộc hai đầu của một sợi dây lần lượt vào hai đinh, rồi dùng đầu bút kéo dây căng và di chuyển trên mặt giấy. Khi bút ở \(M\), hai đoạn từ bút đến đinh luôn có tổng độ dài bằng nhau: \(MF_1+MF_2=2a\). Vì thế đường bút vẽ ra là tập hợp các điểm có **tổng khoảng cách đến hai tiêu điểm không đổi**: một elip.

    Nếu hai đinh cách nhau \(2c>0\), muốn vẽ được **một elip không suy biến** thì độ dài dây cần thỏa \(2a>2c\): bút phải có chỗ di chuyển ngoài đoạn nối hai đinh. Ví dụ, hai tiêu điểm ở \((-5,0)\), \((5,0)\) và tổng dây \(26\) đơn vị, ta có \(a=13,\ c=5\), rồi \(b^2=a^2-c^2=144\), suy ra \(b=12\). Phương trình elip trục lớn Ox là
    \[
    \frac{x^2}{169}+\frac{y^2}{144}=1.
    \]
    Hãy nhìn vị trí hai tiêu điểm trong hình trước khi đọc hệ số. Nếu hai đinh trùng nhau hoặc chiều dài dây không lớn hơn khoảng cách giữa chúng, mô hình elip không suy biến cần được xét lại.

    <figure class="thpt-r4-plot thpt-r4-concept-figure" data-chvii-r02-diagram="TRY18"><img src="../../../../assets/images/thpt/G10_CHVII_R02_B22_TRY18_ELLIPSE.svg" loading="lazy" alt="Hai tiêu điểm và dây căng tạo elip, tổng hai khoảng cách bằng 2a lớn hơn 2c."><figcaption>Khi đầu bút kéo dây căng, tổng khoảng cách từ đầu bút đến hai tiêu điểm không đổi.</figcaption></figure>

    **Em vận dụng.** Với elip x²/25+y²/16=1, tìm a, b, c và hai tiêu điểm.

    ??? question "Đối chiếu"

        **Đáp án:** a=5, b=4, c=3; F1(−3,0), F2(3,0).

        **Lý do:** a²=25>b²=16, c²=25−16=9 ⇒ c=3; elip có trục lớn Ox.

        **Nếu chưa đúng:** Mở hướng dẫn tự sửa ngay bên dưới, xem lại bước còn vướng rồi thử một câu cùng kiến thức.




    <a href="../luyen-tap/?item=THPT-G10-B22-P01">Mở câu luyện tập tương ứng để tự luyện</a>


    <span id="thpt-g10-chvii-try19" data-thpt-first-try-id="THPT-G10-CHVII-TRY19" data-outcome-id="G10-B22-HYPERBOLA_PARAMETERS" data-thpt-help-ref="HELP-G10-CHVII-TRY19"></span>

    Nếu elip giữ **tổng** hai khoảng cách không đổi, hãy thử giữ **độ lớn của hiệu** không đổi: \(|MF_1-MF_2|=2a\), với hai tiêu điểm \(F_1,F_2\) cách nhau \(2c\) và \(0<a<c\). Tập điểm thu được chia thành **hai nhánh**: ở nhánh gần \(F_1\), khoảng cách đến \(F_1\) nhỏ hơn; ở nhánh gần \(F_2\), điều ngược lại xảy ra. Vì \(c>a\), quan hệ các thông số là \(b^2=c^2-a^2\), hay \(c^2=a^2+b^2\). Hình thành hai nhánh từ hiệu khoảng cách giúp em không nhầm với đường elip kín.

    **Em vận dụng.** Hypebol x²/16−y²/9=1 có các đỉnh và hai tiêu điểm tọa độ nào?

    ??? question "Đối chiếu"

        **Đáp án:** Đỉnh A1(−4,0), A2(4,0); tiêu điểm F1(−5,0), F2(5,0).

        **Lý do:** a=4, b=3, c²=a²+b²=16+9=25 ⇒ c=5; trục thực Ox.

        **Nếu chưa đúng:** Mở hướng dẫn tự sửa ngay bên dưới, xem lại bước còn vướng rồi thử một câu cùng kiến thức.




    <a href="../luyen-tap/?item=THPT-G10-B22-C02">Mở câu luyện tập tương ứng để tự luyện</a>


    <span id="thpt-g10-chvii-try20" data-thpt-first-try-id="THPT-G10-CHVII-TRY20" data-outcome-id="G10-B22-HYPERBOLA_ASYMPTOTES" data-thpt-help-ref="HELP-G10-CHVII-TRY20"></span>

    **Mở rộng có hướng dẫn · Không bắt buộc trong kiến thức SGK Bài 22.** Em có thể khám phá tiệm cận sau khi hiểu hai nhánh hypebol.

    Vẽ một hình chữ nhật tâm \(O\) có các đỉnh \((\pm a,\pm b)\). Hai đường chéo đi qua tâm của nó có phương trình \(y=\pm(b/a)x\). Với hypebol \(\frac{x^2}{a^2}-\frac{y^2}{b^2}=1\), khi \(|x|\) ngày càng lớn, hai nhánh tiến ngày càng gần hai hướng đường chéo ấy. Đó là lý do ta gọi chúng là **tiệm cận**. Ví dụ, nếu \(a=3,\ b=2\), hai đường chéo có hệ số góc \(\pm2/3\). Không thể suy tiệm cận chỉ bằng cách đổi dấu một phương trình elip; trước hết cần xác định đúng trục thực và hình chữ nhật cơ sở.

    <figure class="thpt-r4-plot thpt-r4-concept-figure" data-chvii-r02-diagram="TRY20"><img src="../../../../assets/images/thpt/G10_CHVII_R02_B22_TRY20_ASYMPTOTE.svg" loading="lazy" alt="Hypebol mở rộng với hình chữ nhật cơ sở 2a nhân 2b, hai đường chéo là tiệm cận."><figcaption>Mở rộng: hai nhánh hypebol tiến dần tới hai đường chéo của hình chữ nhật cơ sở.</figcaption></figure>

    **Em vận dụng.** Hypebol x²/25−y²/4=1 có hai đường tiệm cận nào?

    ??? question "Đối chiếu"

        **Đáp án:** y=(2/5)x và y=−(2/5)x.

        **Lý do:** a²=25 ⇒ a=5; b²=4 ⇒ b=2. Hệ số góc tiệm cận là ±b/a=±2/5.

        **Nếu chưa đúng:** Mở hướng dẫn tự sửa ngay bên dưới, xem lại bước còn vướng rồi thử một câu cùng kiến thức.




    <a href="../luyen-tap/?item=THPT-G10-B22-C02">Mở câu luyện tập tương ứng để tự luyện</a>


    <span id="thpt-g10-chvii-try21" data-thpt-first-try-id="THPT-G10-CHVII-TRY21" data-outcome-id="G10-B22-PARABOLA_FOCUS" data-thpt-help-ref="HELP-G10-CHVII-TRY21"></span>

    Một parabol gồm các điểm \(M\) có khoảng cách đến **tiêu điểm** \(F\) bằng khoảng cách vuông góc đến **đường chuẩn** \(\Delta\). Chọn đỉnh ở \(O(0,0)\), tiêu điểm \(F(p/2,0)\) và đường chuẩn \(x=-p/2\), với \(p>0\). Nếu \(M(x,y)\), ta có \(MF^2=(x-p/2)^2+y^2\), còn bình phương khoảng cách từ M đến đường chuẩn là \((x+p/2)^2\).

    Hai khoảng cách bằng nhau nên
    \[
    (x-p/2)^2+y^2=(x+p/2)^2
    \quad\Longrightarrow\quad y^2=2px.
    \]
    Vậy công thức không xuất hiện từ một phép đoán: nó là cách viết điều kiện **hai khoảng cách bằng nhau**. Với phương trình \(y^2=2px\), tiêu điểm ở \(p/2\), không phải \(p\). Khi đổi hướng mở sang Oy thì cần đặt lại trục và dùng dạng phương trình phù hợp.

    <figure class="thpt-r4-plot thpt-r4-concept-figure" data-chvii-r02-diagram="TRY21"><img src="../../../../assets/images/thpt/G10_CHVII_R02_B22_TRY21_PARABOLA.svg" loading="lazy" alt="Parabol có MF bằng MN, N là chân vuông góc từ M xuống đường chuẩn, F là tiêu điểm."><figcaption>Mỗi điểm M trên parabol cách đều tiêu điểm F và đường chuẩn.</figcaption></figure>

    **Em vận dụng.** Cho parabol y²=8x với x≥0. Xác định tiêu điểm, đường chuẩn; M(2,4) có thuộc parabol không?

    ??? question "Đối chiếu"

        **Đáp án:** p=4; F(2,0), đường chuẩn x=−2; M(2,4) thuộc vì 4²=8·2.

        **Lý do:** 2p=8 ⇒ p=4, F=(p/2,0)=(2,0), đường chuẩn x=−p/2=−2. M có MF=4 và khoảng cách đến x=−2 là 4.

        **Nếu chưa đúng:** Mở hướng dẫn tự sửa ngay bên dưới, xem lại bước còn vướng rồi thử một câu cùng kiến thức.




    <a href="../luyen-tap/?item=THPT-G10-B22-P03">Mở câu luyện tập tương ứng để tự luyện</a>


    <span id="thpt-g10-chvii-try22" data-thpt-first-try-id="THPT-G10-CHVII-TRY22" data-outcome-id="G10-B22-CONIC_INTERSECTION" data-thpt-help-ref="HELP-G10-CHVII-TRY22"></span>

    Khi một đường thẳng cắt đường elip, hypebol hoặc parabol, tọa độ mỗi giao điểm phải đồng thời thỏa hai phương trình. Ý tưởng giống tìm giao điểm hai đường ở Bài 20: giải hệ chứ không đoán theo hình. Ta có thể biểu diễn một biến từ phương trình đường thẳng, thế vào phương trình conic rồi giải phương trình còn lại.

    Hình vẽ cho biết điều gì có thể xảy ra: một đường qua elip có thể gặp nó tại hai điểm, tiếp xúc ở một điểm hoặc nằm ngoài không gặp điểm nào. Vì thế, chỉ giữ nghiệm thực và thế lại vào cả hai phương trình; không được mặc định giao điểm luôn có hai nghiệm. Cách giải phụ thuộc chính những điều kiện toán học của từng vị trí.

    **Em vận dụng.** Đường x=0 cắt elip x²/9+y²/4=1 tại những điểm nào?

    ??? question "Đối chiếu"

        **Đáp án:** (0,2) và (0,−2).

        **Lý do:** Thế x=0 được y²/4=1 ⇒ y²=4 ⇒ y=±2; cả hai tọa độ thỏa phương trình gốc.

        **Nếu chưa đúng:** Mở hướng dẫn tự sửa ngay bên dưới, xem lại bước còn vướng rồi thử một câu cùng kiến thức.




    <a href="../luyen-tap/?item=THPT-G10-B22-P05">Mở câu luyện tập tương ứng để tự luyện</a>


    <span id="thpt-g10-chvii-try23" data-thpt-first-try-id="THPT-G10-CHVII-TRY23" data-outcome-id="G10-B22-CONIC_MODEL" data-thpt-help-ref="HELP-G10-CHVII-TRY23"></span>

    Nếu mặt cắt của một máng có dạng \(y^2=12x\) (đơn vị cm), thì tại vị trí \(x=3\) ta có \(y^2=36\), nghĩa là **hai** điểm trên mặt cắt có tung độ \(y=6\) và \(y=-6\). Độ rộng giữa hai mép máng là \(6-(-6)=12\) cm, không phải 6 cm. Trên hình, đó là một đoạn thẳng vuông góc trục Ox nối cả hai nhánh. Khi dùng mô hình trong đời thực, phải kiểm đơn vị, vị trí đặt trục và việc mặt cắt có thực sự phù hợp với một parabol hay không.

    **Em vận dụng.** Mặt cắt một máng giả sử có dạng y²=20x (x,y tính bằng cm). Bề rộng của máng tại x=5 cm là bao nhiêu?

    ??? question "Đối chiếu"

        **Đáp án:** 20 cm.

        **Lý do:** Thế x=5 được y²=100 ⇒ y=±10 cm. Độ rộng là 10−(−10)=20 cm.

        **Nếu chưa đúng:** Mở hướng dẫn tự sửa ngay bên dưới, xem lại bước còn vướng rồi thử một câu cùng kiến thức.




    <a href="../luyen-tap/?item=THPT-G10-B22-P04">Mở câu luyện tập tương ứng để tự luyện</a>


    <span id="thpt-g10-chvii-try-ellipse-tr01" data-thpt-first-try-id="THPT-G10-CHVII-TRY-ELLIPSE-TR01" data-outcome-id="G10-B22-ELLIPSE_PARAMETERS" data-thpt-help-ref="HELP-G10-CHVII-ELLIPSE-TR01"></span>

    Một mái vòm hình nửa elip có thể đủ cao ở chính giữa nhưng vẫn quá thấp ở hai bên để một thiết bị rộng đi qua. Vì vậy, biết chiều cao tại tâm chưa đủ; ta cần kiểm chiều cao của mái tại cả hai mép thiết bị. Đặt O ở giữa nền, Ox theo mặt nền và Oy thẳng đứng. Với mái là nửa trên của elip \(\frac{x^2}{a_x^2}+\frac{y^2}{b_y^2}=1\), \(a_x,b_y>0\), bề rộng toàn phần của mái là \(2a_x\) còn chiều cao giữa mái là \(b_y\). Khi tính chiều cao, chỉ nhận nghiệm \(y\ge0\).

    Hãy hình dung mái đi từ hai chân \((-a_x,0)\), \((a_x,0)\) lên đỉnh \((0,b_y)\); một thiết bị hình chữ nhật đặt giữa có hai mép tại \(x=\pm w/2\) và chiều cao h. Vì độ cao của nửa elip giảm khi \(|x|\) tăng từ 0 đến aₓ, vị trí cần kiểm là hai góc trên của thiết bị, không chỉ tâm. Trước khi tính độ hở, phải kiểm \(|w/2|\le a_x\) và chọn đúng nửa elip; kết luận chỉ nói về mặt cắt phẳng, thiết bị đặt cân giữa, không tự suy ra an toàn không gian ba chiều.

    **Em vận dụng.** Mái nửa elip rộng **12 m**, cao **4 m** tại tâm. Đặt O ở giữa nền, Ox dọc nền. (a) Viết phương trình elip đầy đủ và điều kiện miền mái. (b) Tại x=3 m, mái cao bao nhiêu? Tự làm rồi mở kết quả.

    ??? question "Đối chiếu"

        Bán trục ngang 6, bán trục đứng 4: `x²/36+y²/16=1`, **y≥0**, |x|≤6. Tại x=3, `y=4√(1−9/36)=2√3≈3,464 m`. Không lấy y âm hoặc dùng a=12. Nếu sai, xem `HELP-G10-CHVII-ELLIPSE-TR01`.


    Ta có thể kiểm nghiệm thêm cách đọc hoành độ qua một mái che có số đo khác.

    **Tình huống tự vận dụng:** Một mái che nửa elip có bề rộng **30 m**, cao tại tâm **10 m**. Người đứng cách chân mái bên phải **6 m về phía trong**. Tính độ cao mái ở vị trí đó.

    1. **Vì sao chọn hệ trục này:** Đặt O ở giữa hai chân, Ox dọc mặt đất; khi đó bề rộng 30 m cho bán trục ngang `a_x=15`, cao 10 m cho bán trục đứng `b_y=10`.
    2. **Dựng mô hình:** `x²/225+y²/100=1`, chỉ xét **nửa trên y≥0**. Chân phải x=15, cách chân vào trong 6m ⇒ **x=15−6=9**, **không phải x=6**.
    3. **Tìm chiều cao:** `y=10√(1−81/225)=10√(144/225)=8 m`.
    4. **Kiểm:** y=8 m nằm giữa 0 và 10m; càng đi từ chân vào giữa, chiều cao phải tăng. Nếu ra chiều cao lớn hơn 10 thì đã đọc sai trục/công thức.

    Điều quan trọng nhất ở bài toán này là đổi đúng cụm “cách chân mái” thành hoành độ tính từ tâm, đồng thời chỉ xét nửa elip phía trên. Không thể bỏ qua bước đặt trục rồi áp dụng ngay công thức tìm tiêu điểm.



    <span id="thpt-g10-chvii-try-hyperbola-tr01" data-thpt-first-try-id="THPT-G10-CHVII-TRY-HYPERBOLA-TR01" data-outcome-id="G10-B22-HYPERBOLA_PARAMETERS" data-thpt-help-ref="HELP-G10-CHVII-HYPERBOLA-TR01"></span>

    Nếu hai trạm phát cách nhau \(AB=2c\), tín hiệu truyền với tốc độ \(v\) và tới máy thu lệch nhau một khoảng thời gian \(\Delta t\), thì độ chênh độ dài quãng đường là \(v|\Delta t|=|PA-PB|=2a\). Bất đẳng thức tam giác cho biết \(|PA-PB|\le AB\): chênh lệch hai quãng đường **không thể lớn hơn** khoảng cách giữa hai trạm. Để được một **hypebol không suy biến**, cần điều kiện chặt \(0<2a<2c\). Nếu \(2a>2c\) thì dữ kiện không thể xảy ra; nếu \(2a=2c\), quỹ tích suy biến thành các tia thẳng hàng chứ không phải hai nhánh hypebol; nếu \(2a=0\), các vị trí cách đều hai trạm nằm trên đường trung trực.

    Từ \(|PA-PB|\) ta mới biết **hai nhánh khả dĩ**. Chỉ khi biết tín hiệu nào tới sớm hơn mới chọn được một nhánh; một cặp trạm không xác định duy nhất vị trí người nhận. Khi tính, cần nhất quán đơn vị chiều dài, vận tốc và thời gian.

    **Em vận dụng.** Hai trạm cách nhau 60 km, phát tín hiệu đồng thời; sóng truyền 100.000 km/s. Chênh thời gian tới máy thu là 0,0002 s. Tính `2a`, `c`, `b²` cho hypebol tương ứng và kiểm điều kiện có nghiệm hình học, rồi mở đối chiếu.

    ??? question "Đối chiếu"

        Hiệu quãng đường `vΔt=100000·0,0002=20 km`, nên `2a=20`, `a=10 km`, `2c=60`, `c=30 km`, `b²=c²−a²=900−100=800 km²`. Vì `0<20<60`, dữ kiện hình học phù hợp hypebol. **Chưa đủ thông tin trạm nào nhận trước** nên chưa thể chọn nhánh. Nếu quên điều kiện này, xem `HELP-G10-CHVII-HYPERBOLA-TR01`.


    Tương tự, khi đã hiểu vì sao chênh lệch thời gian dẫn đến hypebol, ta xét thêm tình huống đủ dữ kiện để xác định nhánh của quỹ tích.

    **Tình huống tự vận dụng — Hai trạm tín hiệu:** Trạm A ở `(-40;0)` km, trạm B ở `(40;0)` km, đồng phát tín hiệu tốc độ **100.000 km/s**. Máy thu P nhận từ **A sớm hơn từ B** 0,0004 s. Xác định phương trình quỹ tích và nhánh.

    1. **Đặt nguồn c:** AB=80km ⇒ c=40km; kiểm đơn vị. Chênh quãng đường `vΔt=100000·0,0004=40 km` ⇒ `2a=40km`, a=20km.
    2. **Kiểm hợp lệ:** 0<40<80, nên tồn tại hypebol thật. `b²=c²−a²=1600−400=1200` km².
    3. **Phương trình toàn hypebol:** **`x²/400−y²/1200=1`**, gồm hai nhánh. Vì **A đến trước**, P gần A hơn ⇒ P phải ở **nhánh trái, x≤−20**.
    4. **Giới hạn:** Không thể suy một tọa độ P chính xác từ một chênh thời gian; còn vô số điểm trên nhánh này. Hai trạm phải **đồng bộ thời điểm phát** để suy hiệu khoảng cách chỉ từ hiệu thời gian nhận.

    ### Thuật ngữ, kiến thức và kỹ năng

    **Thuật ngữ:** Elip, hypebol, parabol, tiêu điểm, đường chuẩn, tâm, bán trục, trục thực, tiệm cận và phương trình chính tắc.

    **Sau bài học, em cần làm được:** Nhận diện loại conic từ điều kiện khoảng cách và phương trình; tìm tiêu điểm/trục đúng tham số; phân biệt c²=a²−b² với c²=a²+b²; đọc tiêu điểm và đường chuẩn parabol theo quy ước y²=2px.

=== "Kiến thức SGK"

    ### 2.1. Elip

    #### Elip — trục lớn trùng \(Ox\)


    <figure class="thpt-r4-plot thpt-r4-probability-figure"><img src="../../../../assets/images/thpt/THPT_G10_CHVII_ELLIPSE_TRANSFER_D5_R00.svg" alt="Mái nửa elip rộng 20 m và khối rộng 14 m; độ hở nhỏ nhất hai mép khoảng 0,285 m, không đạt 0,8 m" loading="lazy"><figcaption>Hình minh họa độ hở theo phương đứng tại hai mép khối, không chỉ tại tâm.</figcaption></figure>



    **Cách đọc hình.** Đọc hai tiêu điểm và độ dài các bán trục trong hình elip; điểm trên elip có tổng khoảng cách đến hai tiêu điểm không đổi.
    Dạng chính tắc \(\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1\), với \(a>b>0\). Đặt \(c^2=a^2-b^2\), hai tiêu điểm là \((\pm c;0)\), các đỉnh \((\pm a;0)\) và \((0;\pm b)\).

    **Ví dụ:** \(\dfrac{x^2}{25}+\dfrac{y^2}{9}=1\) có \(a=5\), \(b=3\), \(c=4\), tiêu điểm \((\pm4;0)\); tổng khoảng cách từ một điểm trên elip đến hai tiêu điểm bằng \(2a=10\).

    ### 2.2. Hypebol

    #### Hypebol — trục thực trùng \(Ox\)


    <figure class="thpt-r4-plot thpt-r4-probability-figure"><img src="../../../../assets/images/thpt/THPT_G10_CHVII_HYPERBOLA_TRANSFER_D5_R00.svg" alt="Hypebol từ hai trạm A(-50;0), B(50;0), nhánh phải có B đến trước và PA trừ PB bằng 60 km" loading="lazy"><figcaption>Hình minh họa quỹ tích hai nhánh; B nhận trước chọn nhánh gần B, không phải một điểm duy nhất.</figcaption></figure>



    **Cách đọc hình.** Đọc hai nhánh hypebol, hai tiêu điểm và đường tiệm cận; đừng tráo công thức c²=a²+b² thành elip.
    Dạng chính tắc \(\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1\), \(a,b>0\). Khi đó \(c^2=a^2+b^2\), hai tiêu điểm \((\pm c;0)\), các đỉnh \((\pm a;0)\), các tiệm cận \(y=\pm\dfrac ba x\).

    **Ví dụ:** \(\dfrac{x^2}{9}-\dfrac{y^2}{16}=1\): \(a=3,b=4,c=5\), hai tiệm cận \(y=\pm4x/3\).

    ### 2.3. Parabol

    #### Parabol — quy ước \(y^2=2px,\ p>0\)


    <figure class="thpt-r4-plot thpt-r4-concept-figure"><img src="../../../../assets/images/thpt/G10_B22_PARABOLA_FOCUS_R02.svg" loading="lazy" alt="Parabol y bình phương bằng 4x, tiêu điểm F(1,0), đường chuẩn x=-1, đỉnh O(0,0)"><figcaption>Với \(y^2=4x\) và quy ước \(y^2=2px\), ta có \(p=2\), tiêu điểm \(F(1,0)\) và đường chuẩn \(x=-1\). Hình chỉ minh họa phương trình này.</figcaption></figure>



    **Cách đọc hình.** Trên parabol y²=4x, đỉnh là O, F(1,0), đường chuẩn x=-1; điểm trên đường cách đều tiêu điểm và đường chuẩn.
    Parabol có đỉnh \(O(0;0)\), tiêu điểm \(F(p/2;0)\), đường chuẩn \(x=-p/2\). Mọi điểm \(M\) trên parabol có khoảng cách đến tiêu điểm bằng khoảng cách đến đường chuẩn.

    **Ví dụ:** \(y^2=12x\), suy ra \(p=6\), \(F(3;0)\), đường chuẩn \(x=-3\). Điểm \(M(3;6)\) thuộc parabol vì \(36=12\cdot3\); hai khoảng cách đều bằng \(6\).

    ### 2.4. Một số ứng dụng của ba đường conic

    Các mô hình conic có thể mô tả **mái vòm elip**, **chênh lệch khoảng cách tới hai trạm tín hiệu (hypebol)** hoặc **bộ phận phản xạ parabol**. Khi vận dụng, phải chọn đúng dạng đường cong, đơn vị, miền tọa độ và điều kiện của bài toán; không suy kết quả chỉ từ hình minh họa.

    #### Phân biệt công thức và điều kiện sử dụng

    <div class="thpt-g10-table-scroll"><table class="thpt-g10-knowledge-table">
    <thead><tr><th>Đường conic</th><th>Công thức liên hệ</th><th>Chú ý</th></tr></thead>
    <tbody>
    <tr><td>Elip</td><td>\(c^2=a^2-b^2\)</td><td>\(a&gt;b&gt;0\) trong dạng trục lớn \(Ox\)</td></tr>
    <tr><td>Hypebol</td><td>\(c^2=a^2+b^2\)</td><td>Tiệm cận \(y=\pm bx/a\)</td></tr>
    <tr><td>Parabol</td><td>\(y^2=2px\)</td><td>Tiêu điểm \((p/2;0)\), không phải \((p;0)\)</td></tr>
    </tbody></table></div>

=== "Ví dụ"

    Trước khi xem lời giải, hãy xác định dữ kiện, điều phải tìm và lý do chọn cách giải. Sau đó kiểm tra lại điều kiện áp dụng và kết quả, thay vì chỉ nhìn phép tính cuối cùng.

    ### Ví dụ 1 — Tính tiêu điểm của elip

    **Đề bài.** Cho \(\frac{x^2}{9}+\frac{y^2}{4}=1\). Tìm hai tiêu điểm.

    **Vì sao chọn cách này?** Hai phân thức cùng dấu cộng, mẫu số lớn hơn nằm dưới \(x^2\), phù hợp elip có trục lớn theo \(Ox\).

    **Lời giải.** \(a^2=9,\ b^2=4\), nên \(c^2=a^2-b^2=5\); hai tiêu điểm là \(F_1(-\sqrt5,0)\), \(F_2(\sqrt5,0)\).

    ### Ví dụ 2 — Tiệm cận của hypebol

    **Đề bài.** Cho \(\frac{x^2}{9}-\frac{y^2}{4}=1\). Tìm tiêu điểm và hai đường tiệm cận.

    **Vì sao chọn cách này?** Dấu trừ giữa hai bình phương cho hypebol đúng quy ước trục thực là \(Ox\), khác elip trong ví dụ trên.

    **Lời giải.** \(a=3,b=2,c=\sqrt{a^2+b^2}=\sqrt{13}\). Hai tiêu điểm \(F_1(-\sqrt{13},0)\), \(F_2(\sqrt{13},0)\); các tiệm cận \(y=\pm\frac23x\).

    ### Ví dụ 3 — Từ đường chuẩn đến phương trình parabol

    **Đề bài.** Với \(y^2=4x\) theo quy ước \(y^2=2px\), tìm tiêu điểm và đường chuẩn.

    **Vì sao chọn cách này?** Trong hệ quy ước hiện tại, hệ số \(2p\) đứng trước \(x\), không phải \(4p\). Cần đọc đúng quy ước rồi mới tìm tọa độ.

    **Lời giải.** \(2p=4\Rightarrow p=2\). Tiêu điểm \(F(\frac p2,0)=(1,0)\), đường chuẩn \(x=-\frac p2=-1\). 

    **Kiểm lại:** đỉnh \(O(0,0)\) cách F và đường chuẩn cùng một đơn vị.

=== "Lỗi thường gặp"

    <span id="help-g10-chvii-try18" data-thpt-help-id="HELP-G10-CHVII-TRY18"></span>

    ??? tip "Tự khắc phục theo năm bước"

        1. **Nhận diện lỗi:** Nếu dùng c²=a²+b², em đã nhầm công thức hypebol; hãy ưu tiên xác định đúng các tiêu điểm trước khi tìm hiểu tâm sai.

        2. **Quay lại bản chất:** Tổng MF1+MF2=2a tạo ra elip. Với dạng x²/a²+y²/b²=1 có a>b>0, hai tiêu điểm cách tâm c với c²=a²−b², nên c<a.

        3. **Tự sửa:** Quan sát dấu cộng giữa hai phân thức và kiểm 0<c<a; thử lại bài elip B22-P01.

        4. **Tự đối chiếu:** xem lại lời giải trên sau khi em tự làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.

        5. **Luyện tiếp:** Dùng liên kết bên dưới để luyện câu cùng kiến thức. Nếu đã xem lời giải, hãy chọn thêm câu khác và tự làm mà không dựa vào gợi ý.

    <span id="help-g10-chvii-try19" data-thpt-help-id="HELP-G10-CHVII-TRY19"></span>

    ??? tip "Tự khắc phục theo năm bước"

        1. **Nhận diện lỗi:** Nếu lấy c=√7 hoặc vẽ oval kín, em đang áp dụng công thức và hình elip.

        2. **Quay lại bản chất:** Dạng x²/a²−y²/b²=1 có hai nhánh mở theo ±Ox; c²=a²+b² nên tiêu điểm xa tâm hơn các đỉnh (c>a).

        3. **Tự sửa:** Kiểm c>a và vẽ hai nhánh qua hai đỉnh ±4, không khép kín.

        4. **Tự đối chiếu:** xem lại lời giải trên sau khi em tự làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.

        5. **Luyện tiếp:** Dùng liên kết bên dưới để luyện câu cùng kiến thức. Nếu đã xem lời giải, hãy chọn thêm câu khác và tự làm mà không dựa vào gợi ý.

    <span id="help-g10-chvii-try20" data-thpt-help-id="HELP-G10-CHVII-TRY20"></span>

    ??? tip "Tự khắc phục theo năm bước"

        1. **Nhận diện lỗi:** Nếu lấy hệ số ±5/2, em đã đảo tỉ số a/b; nếu vẽ thẳng là đồ thị hypebol, em nhầm tiệm cận với đường cong.

        2. **Quay lại bản chất:** Khi |x| lớn, hệ thức y²=(b²/a²)(x²−a²) cho |y/x| tiến gần b/a. Hai đường y=±(b/a)x là tiệm cận, không phải các nhánh thực của hypebol.

        3. **Tự sửa:** Đánh dấu hai giao điểm với Ox (±5,0) của hypebol và hai đường chéo có hệ số ±0,4.

        4. **Tự đối chiếu:** xem lại lời giải trên sau khi em tự làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.

        5. **Luyện tiếp:** Dùng liên kết bên dưới để luyện câu cùng kiến thức. Nếu đã xem lời giải, hãy chọn thêm câu khác và tự làm mà không dựa vào gợi ý.

    <span id="help-g10-chvii-try21" data-thpt-help-id="HELP-G10-CHVII-TRY21"></span>

    ??? tip "Tự khắc phục theo năm bước"

        1. **Nhận diện lỗi:** Nếu đặt F=(4,0), em đã nhầm p với p/2; nếu không thử M, em chỉ kiểm công thức chứ chưa đọc đồ thị.

        2. **Quay lại bản chất:** Điểm M trên parabol có MF bằng khoảng cách vuông góc từ M đến đường chuẩn. Với y²=2px, p>0, tiêu điểm F(p/2,0) và đường chuẩn x=−p/2; **không** lấy F(p,0).

        3. **Tự sửa:** Thử ngay y²=8x ở M và so MF với khoảng cách ngang từ M đến x=−2.

        4. **Tự đối chiếu:** xem lại lời giải trên sau khi em tự làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.

        5. **Luyện tiếp:** Dùng liên kết bên dưới để luyện câu cùng kiến thức. Nếu đã xem lời giải, hãy chọn thêm câu khác và tự làm mà không dựa vào gợi ý.

    <span id="help-g10-chvii-try22" data-thpt-help-id="HELP-G10-CHVII-TRY22"></span>

    ??? tip "Tự khắc phục theo năm bước"

        1. **Nhận diện lỗi:** Nếu chỉ ghi y=2, em bỏ mất nghiệm âm vì căn của bình phương; nếu kết luận hai điểm theo hình mà không tính, chứng cứ chưa đủ.

        2. **Quay lại bản chất:** Giao điểm là nghiệm chung; số nghiệm thực phụ thuộc vị trí, chứ không được kết luận luôn có hai giao điểm.

        3. **Tự sửa:** Giải đủ hai dấu của y rồi thay lại từng cặp tọa độ.

        4. **Tự đối chiếu:** xem lại lời giải trên sau khi em tự làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.

        5. **Luyện tiếp:** Dùng liên kết bên dưới để luyện câu cùng kiến thức. Nếu đã xem lời giải, hãy chọn thêm câu khác và tự làm mà không dựa vào gợi ý.

    <span id="help-g10-chvii-try23" data-thpt-help-id="HELP-G10-CHVII-TRY23"></span>

    ??? tip "Tự khắc phục theo năm bước"

        1. **Nhận diện lỗi:** Nếu đáp 10 cm, em chỉ lấy khoảng cách từ trục đối xứng đến một bên mép mà quên cả hai nhánh.

        2. **Quay lại bản chất:** Tại một hoành độ x≥0, hai điểm biên của parabol có tung độ ±√(2px); độ rộng theo phương vuông góc trục là hiệu hai tung độ, bằng 2√(2px).

        3. **Tự sửa:** Vẽ đoạn thẳng đứng từ (5,−10) tới (5,10) và tính hiệu hai tung độ.

        4. **Tự đối chiếu:** xem lại lời giải trên sau khi em tự làm; kiểm các điều kiện và dữ kiện của bài vừa Tự thử.

        5. **Luyện tiếp:** Dùng liên kết bên dưới để luyện câu cùng kiến thức. Nếu đã xem lời giải, hãy chọn thêm câu khác và tự làm mà không dựa vào gợi ý.

    <span id="help-g10-chvii-ellipse-tr01" data-thpt-help-id="HELP-G10-CHVII-ELLIPSE-TR01"></span>

    ??? tip "Tự khắc phục theo năm bước"

        1. **Nhận diện:** sai bán trục, sai x mép, quên nửa elip, hay quên yêu cầu an toàn?  

        2. **Chẩn đoán:** đánh dấu −10, −7, 0, 7, 10 trên Ox; khoanh hai góc trên khối và khoảng hở thẳng đứng cần kiểm.  

        3. **Lấp nền:** elip chính tắc theo **bán trục ngang/dọc**, hình đối xứng; điểm trên mái thỏa `y≥0`.  

        4. **Tự sửa:** thay x=7 vào phương trình; so `y(7)−4` với **0,8**, sau đó giải ngược điều kiện độ hở theo w.  

        5. **Luyện đúng nguồn:** bài elip cơ bản → bài vận dụng độ hở mới; nếu đã xem lời giải, hãy tự giải một câu mới mà không nhìn gợi ý.

    <span id="help-g10-chvii-hyperbola-tr01" data-thpt-help-id="HELP-G10-CHVII-HYPERBOLA-TR01"></span>

    ??? tip "Tự khắc phục theo năm bước"

        1. **Nhận diện:** nhầm c với a, quên vΔt, sai nhánh hay cố lập hypebol từ chênh quãng đường quá lớn?  

        2. **Chẩn đoán:** vẽ A trái/B phải; chọn điểm P bên B, kiểm ai gần hơn, viết `PA−PB` với dấu dương.  

        3. **Lấp nền:** ôn định nghĩa giá trị tuyệt đối hiệu khoảng cách bằng `2a`, trục thực và quan hệ hypebol **`c²=a²+b²`**; nhắc bất đẳng thức tam giác `|PA−PB|≤AB`.  

        4. **Tự sửa:** ghi bảng `2c=AB`, `2a=vΔt`, `b²=c²−a²`, `0<2a<2c`; sau đó mới dùng thông tin trạm đến trước để chọn nhánh.  

        5. **Luyện đúng nguồn:** bài hypebol cơ bản → một câu Tự thử mới → bài vận dụng mới; nếu đã xem đáp án, hãy chọn bài mới để tự kiểm tra độc lập.

    <span data-thpt-help-id="D6-G10-B22-01" hidden></span>

    ??? tip "Đảo dấu quan hệ c² của conic"

        <p><strong>Dấu hiệu:</strong> Dùng c²=a²+b² cho elip hoặc c²=a²−b² cho hypebol.</p>
        <p><strong>Bản chất toán:</strong> Trong dạng chính tắc trục Ox: elip x²/a²+y²/b²=1, a&gt;b&gt;0: c²=a²−b²; hypebol x²/a²−y²/b²=1, a,b&gt;0: c²=a²+b².</p>
        <p><strong>Tự sửa:</strong> Ôn B22 mục 1–2: đọc dấu trước y² rồi mới xác định a²,b²,c²; elip có c&lt;a, hypebol có c&gt;a.</p>
        <p><strong>Kiến thức cần ôn:</strong> Phương trình chính tắc; B22 mục 1–2.</p>
        <p><strong>Luyện lại bài đã có:</strong> <a data-thpt-formative-id="THPT-G10-B22-C02" href="../luyen-tap/?item=THPT-G10-B22-C02">Luyện lại câu 22-C02</a> · <a data-thpt-formative-id="THPT-G10-B22-P01" href="../luyen-tap/?item=THPT-G10-B22-P01">Luyện lại câu 22-P01</a> · <a data-thpt-formative-id="THPT-G10-B22-P02" href="../luyen-tap/?item=THPT-G10-B22-P02">Luyện lại câu 22-P02</a> · <a data-thpt-formative-id="THPT-G10-CHVII-W22-01" href="../../../thu-vien/tu-luan-chuong-vii/#thpt-g10-chvii-w22-01">Bài tự luận liên quan</a></p>


    <span data-thpt-help-id="D6-G10-B22-02" hidden></span>

    ??? tip "Nhầm p với tọa độ tiêu điểm parabol"

        <p><strong>Dấu hiệu:</strong> Từ y²=2px ghi tiêu điểm F(p;0), đường chuẩn x=−p.</p>
        <p><strong>Bản chất toán:</strong> Theo quy ước B22 mục 3 (p&gt;0): F(p/2;0), đường chuẩn x=−p/2. Với y²=Kx, phải giải 2p=K.</p>
        <p><strong>Tự sửa:</strong> Ôn B22 mục 3: tính p từ hệ số 2p, xác nhận khoảng cách từ điểm thuộc parabol tới tiêu điểm và đường chuẩn bằng nhau.</p>
        <p><strong>Kiến thức cần ôn:</strong> B20 khoảng cách điểm–đường, B22 mục 3.</p>
        <p><strong>Luyện lại bài đã có:</strong> <a data-thpt-formative-id="THPT-G10-B22-P03" href="../luyen-tap/?item=THPT-G10-B22-P03">Luyện lại câu 22-P03</a> · <a data-thpt-formative-id="THPT-G10-B22-P04" href="../luyen-tap/?item=THPT-G10-B22-P04">Luyện lại câu 22-P04</a> · <a data-thpt-formative-id="THPT-G10-B22-P06" href="../luyen-tap/?item=THPT-G10-B22-P06">Luyện lại câu 22-P06</a></p>


    **Học tiếp:** [Core và Luyện tập](luyen-tap.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">Nguồn toán học: SGK Toán 10 Kết nối tri thức với cuộc sống và học liệu SLM hiện hành. Lời giảng được biên tập nhằm hỗ trợ tự học độc lập.</p>

<small>Nguồn đối chiếu: SGK KNTT tập 2, trang in 48–57; SBT trang 42–46. Không dùng đạo hàm hoặc nội dung trục quay ngoài phạm vi đã kiểm chứng.</small>
