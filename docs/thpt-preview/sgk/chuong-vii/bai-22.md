# Bài 22. Ba đường conic

<style>
/* B22-only Golden semantic colors, no shared UI/runtime, B19–B21 unchanged */
.md-typeset:has([data-thpt-first-try-id="THPT-G10-CHVII-TRY18"]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#e8f7f2;border-color:#a9dccc;border-left-color:#087d69;color:#174137}
.md-typeset:has([data-thpt-first-try-id="THPT-G10-CHVII-TRY18"]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#eaf1fc;border-color:#a5bee5;border-left-color:#4879c2;color:#193d66}
[data-md-color-scheme="slate"] .md-typeset:has([data-thpt-first-try-id="THPT-G10-CHVII-TRY18"]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-thpt-first-try-id="THPT-G10-CHVII-TRY18"]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}
</style>

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VII · KIẾN THỨC SGK KNTT</p>
<p class="thpt-r4-lead">Tìm hiểu elip, hypebol và parabol; nhận biết công thức, tính chất và các điều kiện của ba đường conic.</p>

</div>

=== "Khám phá kiến thức"

    ### Cùng tìm hiểu

    Ở những bài trước, tọa độ giúp em đo khoảng cách và xác định đường thẳng, đường tròn. Có những đường cong khác cũng bắt đầu từ **một điều kiện về khoảng cách**: elip dùng **tổng** khoảng cách đến hai tiêu điểm, hypebol dùng **giá trị tuyệt đối hiệu** hai khoảng cách ấy, còn parabol so khoảng cách đến **một điểm** với khoảng cách đến **một đường thẳng**. Từ điều kiện hình học, ta chọn hệ trục phù hợp rồi mới có phương trình chính tắc.

    Một công thức chỉ đúng với **cách đặt trục và điều kiện tham số** của nó. Vì vậy, em sẽ hiểu lý do dùng dấu cộng/trừ, biết đọc đúng tiêu điểm và áp dụng vào các bài toán đo đạc. Mỗi đoạn kiến thức có một câu **Vận dụng** kèm phần **Đối chiếu** tự mở; không cần học thuộc bảng công thức trước khi hiểu đường cong.

    ### Ví dụ trực quan

    <span id="thpt-g10-chvii-try18" data-thpt-first-try-id="THPT-G10-CHVII-TRY18" data-outcome-id="G10-B22-ELLIPSE_PARAMETERS" data-thpt-help-ref="HELP-G10-CHVII-TRY18"></span>

    #### 1.2.1. Elip: tổng khoảng cách không đổi

    Hãy tưởng tượng buộc hai đầu một sợi dây vào hai điểm cố định \(F_1,F_2\) và dùng đầu bút M kéo căng sợi dây. Khi đầu bút di chuyển, **tổng hai đoạn** từ M đến hai đầu dây không đổi. Quỹ tích đó là elip, chứ không phải một đường tròn vì có **hai tiêu điểm** khác nhau. Tổng bằng 2a phải lớn hơn khoảng cách hai tiêu điểm 2c: nếu không, sợi dây không thể kéo căng thành đường cong elip thông thường.

    Đặt gốc O ở trung điểm hai tiêu điểm và cho trục lớn trùng Ox, khi ấy tiêu điểm có tọa độ \((\pm c;0)\). Dạng chính tắc có mẫu dưới x² lớn hơn mẫu dưới y²: \(a>b>0\). Mối liên hệ là \(c^2=a^2-b^2\); vì thế \(c<a\), nghĩa là hai tiêu điểm **ở bên trong hai đỉnh** trên trục lớn. Nếu elip xoay trục hoặc trục lớn đổi hướng, phải đổi cách đọc; không áp máy móc tọa độ tiêu điểm trên Ox.

    **Vận dụng.** Elip x²/25+y²/16=1 có hai tiêu điểm nào? Trước khi tính c, hãy xác định rõ a, b và trục lớn.

    ??? question "Đối chiếu"

        **Đáp án:** a=5, b=4, c=3; F1(−3,0), F2(3,0).

        **Lý do:** a²=25>b²=16, c²=25−16=9 ⇒ c=3; elip có trục lớn Ox.

        **Nếu chưa đúng:** Mở hướng dẫn tự sửa ngay bên dưới, xem lại bước còn vướng rồi thử một câu cùng kiến thức.

    <span id="thpt-g10-chvii-try19" data-thpt-first-try-id="THPT-G10-CHVII-TRY19" data-outcome-id="G10-B22-HYPERBOLA_PARAMETERS" data-thpt-help-ref="HELP-G10-CHVII-TRY19"></span>

    #### 1.2.2. Hypebol: độ chênh khoảng cách và hai nhánh

    Nếu với elip ta cộng hai khoảng cách thì với hypebol ta giữ **giá trị tuyệt đối của hiệu** hai khoảng cách đến các tiêu điểm bằng 2a. Điểm ở gần tiêu điểm bên trái và điểm ở gần tiêu điểm bên phải tạo thành **hai nhánh khác nhau**, không thể nối thành đường oval kín. Sự chênh lệch này phải nhỏ hơn khoảng cách giữa hai tiêu điểm, tức \(0<a<c\).

    Với hypebol chính tắc có số hạng x² dương, trục thực nằm trên Ox: \(x^2/a^2-y^2/b^2=1\), trong đó a,b đều dương. Khác elip, hai khoảng cách thỏa \(c^2=a^2+b^2\), nên \(c>a\): hai tiêu điểm nằm **xa tâm hơn** hai đỉnh (±a;0). Nhìn dấu trừ giúp phân biệt hypebol với elip; nhìn dấu số hạng dương giúp biết hai nhánh mở theo hướng nào.

    **Vận dụng.** Từ x²/16−y²/9=1, hãy tìm hai đỉnh và hai tiêu điểm. Kết quả c phải lớn hơn a hay nhỏ hơn a?

    ??? question "Đối chiếu"

        **Đáp án:** Đỉnh A1(−4,0), A2(4,0); tiêu điểm F1(−5,0), F2(5,0).

        **Lý do:** a=4, b=3, c²=a²+b²=16+9=25 ⇒ c=5; trục thực Ox.

        **Nếu chưa đúng:** Mở hướng dẫn tự sửa ngay bên dưới, xem lại bước còn vướng rồi thử một câu cùng kiến thức.

    <span id="thpt-g10-chvii-try20" data-thpt-first-try-id="THPT-G10-CHVII-TRY20" data-outcome-id="G10-B22-HYPERBOLA_ASYMPTOTES" data-thpt-help-ref="HELP-G10-CHVII-TRY20"></span>

    #### 1.2.3. Vì sao hypebol có hai đường tiệm cận?

    Khi một điểm đi xa dọc nhánh hypebol, đường cong càng gần hai đường thẳng chéo đi qua tâm, gọi là **tiệm cận**. Chúng giúp ta phác đúng hình dạng khi không thể vẽ nhánh dài vô hạn; chúng **không phải** hai nhánh của hypebol và không được nhầm với hai trục tọa độ.

    Từ \(x^2/a^2-y^2/b^2=1\), biến đổi cho \(y^2=\frac{b^2}{a^2}(x^2-a^2)\). Khi trị tuyệt đối của x rất lớn, phần a² trở nên nhỏ so với x², nên độ dốc hai nhánh tiến gần \(\pm b/a\). Vì vậy hai tiệm cận là y=±(b/a)x **chỉ với dạng chính tắc đang xét** (tâm O, trục thực Ox). Đừng đảo thành a/b hoặc dùng nguyên công thức cho đường đã tịnh tiến.

    **Vận dụng.** Hypebol x²/25−y²/4=1 có hai tiệm cận nào? Hãy nhận a,b từ mẫu số trước khi viết hệ số góc.

    ??? question "Đối chiếu"

        **Đáp án:** y=(2/5)x và y=−(2/5)x.

        **Lý do:** a²=25 ⇒ a=5; b²=4 ⇒ b=2. Hệ số góc tiệm cận là ±b/a=±2/5.

        **Nếu chưa đúng:** Mở hướng dẫn tự sửa ngay bên dưới, xem lại bước còn vướng rồi thử một câu cùng kiến thức.

    <span id="thpt-g10-chvii-try21" data-thpt-first-try-id="THPT-G10-CHVII-TRY21" data-outcome-id="G10-B22-PARABOLA_FOCUS" data-thpt-help-ref="HELP-G10-CHVII-TRY21"></span>

    #### 1.2.4. Parabol: cách đều tiêu điểm và đường chuẩn

    Với parabol, ta không cần hai tiêu điểm. Hãy chọn **một điểm cố định F** và **một đường thẳng cố định Δ không đi qua F**. Mọi điểm M trên parabol đều cách F một khoảng bằng **khoảng cách vuông góc** từ M đến Δ. Chính điều kiện bằng nhau ấy tạo thành đường cong mở về phía tiêu điểm.

    Trong quy ước SGK tại đây, đỉnh ở O, trục đối xứng là Ox, tham số tiêu p>0 và \(y^2=2px\). Tiêu điểm ở \(F(p/2;0)\), đường chuẩn \(x=-p/2\); chúng nằm hai phía của O và cách O cùng p/2. Chú ý hệ số của x là **2p**, không phải trực tiếp tọa độ tiêu điểm. Hình dưới dùng hệ số 4 để đọc p=2; câu Vận dụng tiếp theo có hệ số 8 nên **sẽ có tiêu điểm khác hình**.


    <figure class="thpt-r4-plot thpt-r4-concept-figure"><img src="../../../../assets/images/thpt/G10_B22_PARABOLA_FOCUS_R02.svg" loading="lazy" alt="Parabol y bình phương bằng 4x, tiêu điểm F(1,0), đường chuẩn x=-1, đỉnh O(0,0)"><figcaption>Với \(y^2=4x\) và quy ước \(y^2=2px\), ta có \(p=2\), tiêu điểm \(F(1,0)\) và đường chuẩn \(x=-1\). Hình chỉ minh họa phương trình này.</figcaption></figure>

    **Cách đọc hình:** Hình minh họa riêng đường (y^2=4x): tiêu điểm F(1;0), đường chuẩn x=−1 và O ở giữa. Đường chuẩn thẳng đứng nằm bên trái O; từ một điểm trên cong, khoảng cách đến F bằng khoảng cách vuông góc tới đường chuẩn. Đó là cơ sở hình học của công thức, không phải hình cho câu y²=8x.

    **Vận dụng.** Cho parabol y²=8x với x≥0. Hãy đọc p từ 2p=8, xác định tiêu điểm, đường chuẩn và kiểm M(2;4) có thuộc đường cong không.

    ??? question "Đối chiếu"

        **Đáp án:** p=4; F(2,0), đường chuẩn x=−2; M(2,4) thuộc vì 4²=8·2.

        **Lý do:** 2p=8 ⇒ p=4, F=(p/2,0)=(2,0), đường chuẩn x=−p/2=−2. M có MF=4 và khoảng cách đến x=−2 là 4.

        **Nếu chưa đúng:** Mở hướng dẫn tự sửa ngay bên dưới, xem lại bước còn vướng rồi thử một câu cùng kiến thức.

    <span id="thpt-g10-chvii-try22" data-thpt-first-try-id="THPT-G10-CHVII-TRY22" data-outcome-id="G10-B22-CONIC_INTERSECTION" data-thpt-help-ref="HELP-G10-CHVII-TRY22"></span>

    #### 1.2.5. Giao điểm của đường thẳng và conic phải là nghiệm chung

    Hình vẽ một đường thẳng đi qua conic có thể gợi ý có hai giao điểm, nhưng hình phác không chứng minh được tọa độ chính xác hay số điểm chung. Một điểm chỉ là giao điểm khi **thỏa đồng thời phương trình đường thẳng và phương trình conic**. Vì vậy ta thế phương trình đường vào phương trình conic, giải phương trình còn lại rồi thử lại mọi nghiệm trong dữ kiện ban đầu.

    Với elip x²/9+y²/4=1 và đường x=0, phần theo x biến mất, phương trình chỉ còn theo y. Khi giải y²=4, cần lấy **cả hai dấu**; bỏ một nghiệm âm sẽ làm mất một giao điểm. Đường ngoài elip có thể không có nghiệm thực, còn đường tiếp xúc có đúng một nghiệm phân biệt.

    **Vận dụng.** Đường x=0 cắt elip x²/9+y²/4=1 ở đâu? Tự kiểm cả hai tọa độ thu được bằng cách thế vào phương trình elip.

    ??? question "Đối chiếu"

        **Đáp án:** (0,2) và (0,−2).

        **Lý do:** Thế x=0 được y²/4=1 ⇒ y²=4 ⇒ y=±2; cả hai tọa độ thỏa phương trình gốc.

        **Nếu chưa đúng:** Mở hướng dẫn tự sửa ngay bên dưới, xem lại bước còn vướng rồi thử một câu cùng kiến thức.

    <span id="thpt-g10-chvii-try23" data-thpt-first-try-id="THPT-G10-CHVII-TRY23" data-outcome-id="G10-B22-CONIC_MODEL" data-thpt-help-ref="HELP-G10-CHVII-TRY23"></span>

    #### 1.2.6. Dùng parabol để tính bề rộng mặt cắt

    Trong thiết kế một máng hoặc cổng cong, phương trình parabol giúp tính **bề rộng ở một vị trí xác định**. Giả sử mặt cắt có dạng y²=2px và p>0. Ở một hoành độ x≥0, hai mép đối xứng qua trục Ox có tung độ dương và âm. Bề rộng vuông góc với trục là **hiệu hai tung độ**, không phải độ cao chỉ một nửa.

    Chẳng hạn, y²=20x là một mô hình tính bằng centimét. Tại x=5 cm, ta tính y²=100 nên hai mép là y=10 và y=−10 cm; bề rộng là 10−(−10)=20 cm. Kết quả có đơn vị **cm**; số đo là của **mặt cắt phẳng theo mô hình**, không khẳng định mọi máng ngoài thực tế đều có đúng biên dạng ấy.

    **Vận dụng.** Với mặt cắt y²=20x (x,y tính bằng cm), hãy tự tìm bề rộng tại x=5 cm và giải thích vì sao phải dùng cả hai dấu của y.

    ??? question "Đối chiếu"

        **Đáp án:** 20 cm.

        **Lý do:** Thế x=5 được y²=100 ⇒ y=±10 cm. Độ rộng là 10−(−10)=20 cm.

        **Nếu chưa đúng:** Mở hướng dẫn tự sửa ngay bên dưới, xem lại bước còn vướng rồi thử một câu cùng kiến thức.

    <span id="thpt-g10-chvii-try-ellipse-tr01" data-thpt-first-try-id="THPT-G10-CHVII-TRY-ELLIPSE-TR01" data-outcome-id="G10-B22-ELLIPSE_PARAMETERS" data-thpt-help-ref="HELP-G10-CHVII-ELLIPSE-TR01"></span>

    #### 1.2.7. Chuyển giao: mái nửa elip và độ hở

    Một mái che có thể có **mặt cắt nửa trên elip**. Khi đó ta đặt O ở giữa nền, Ox nằm ngang, Oy thẳng đứng: bề rộng toàn phần là hai lần bán trục ngang, chiều cao tại tâm là bán trục đứng. Chỉ lấy **nửa trên y≥0** và chỉ xét các vị trí trong khoảng giữa hai chân mái.

    Với mái hình nửa elip rộng 12 m và cao 4 m ở tâm, bán trục ngang là 6 m, bán trục đứng 4 m. Để biết mái cao bao nhiêu tại một vị trí x, ta thế hoành độ vào phương trình rồi lấy **nghiệm y không âm**. Nếu kiểm một thiết bị hình chữ nhật có bề rộng, không chỉ xem độ cao tại tâm mà phải xem **hai mép trên**: mái thấp dần khi |x| tăng trong phạm vi nửa mái.

    **Vận dụng.** Mái nửa elip rộng **12 m**, cao **4 m** tại tâm. Đặt O ở giữa nền, Ox dọc nền. (a) Viết phương trình elip đầy đủ và điều kiện miền mái. (b) Tại x=3 m, mái cao bao nhiêu?
    <figure class="thpt-r4-plot thpt-r4-probability-figure"><img src="../../../../assets/images/thpt/THPT_G10_CHVII_ELLIPSE_TRANSFER_D5_R00.svg" alt="Mái nửa elip rộng 20 m và khối rộng 14 m; độ hở nhỏ nhất hai mép khoảng 0,285 m, không đạt 0,8 m" loading="lazy"><figcaption>Hình minh họa độ hở theo phương đứng tại hai mép khối, không chỉ tại tâm.</figcaption></figure>

    **Lưu ý khi đọc hình:** Hình **minh họa độc lập** một mái nửa elip rộng 20 m và một khối rộng 14 m, yêu cầu độ hở tối thiểu 0,8 m. **Không thay** bộ số liệu ấy vào câu mái rộng 12 m và cao 4 m ở trên. Hình cho thấy phải đo khoảng cách theo phương đứng tại **hai mép vật**, không lấy riêng độ cao mái ở đỉnh.

    #### Minh họa có lời giải — Tính chiều cao tại vị trí tính từ chân mái

    Một mái nửa elip khác rộng 30 m, cao 10 m ở tâm. Người đứng ở vị trí **cách chân phải 6 m vào trong**. Chân phải có x=15, nên người đứng tại x=15−6=9 m, **không phải x=6**. Từ phương trình x²/225+y²/100=1, nửa trên y≥0, suy ra y=10√(1−81/225)=8 m. Độ cao phải nằm trong đoạn 0–10 m; đây là kết quả kiểm độc lập cho tình huống **30 m**, không phải hình minh họa **20 m**.

    ??? question "Đối chiếu"

        Bán trục ngang 6, bán trục đứng 4: `x²/36+y²/16=1`, **y≥0**, |x|≤6. Tại x=3, `y=4√(1−9/36)=2√3≈3,464 m`. Không lấy y âm hoặc dùng a=12. Nếu sai, xem `HELP-G10-CHVII-ELLIPSE-TR01`.

    <span id="thpt-g10-chvii-try-hyperbola-tr01" data-thpt-first-try-id="THPT-G10-CHVII-TRY-HYPERBOLA-TR01" data-outcome-id="G10-B22-HYPERBOLA_PARAMETERS" data-thpt-help-ref="HELP-G10-CHVII-HYPERBOLA-TR01"></span>

    #### 1.2.8. Chuyển giao: hai trạm tín hiệu và nhánh hypebol

    Khi hai trạm A và B phát tín hiệu **đồng thời**, cùng tốc độ v, máy thu P cách hai trạm những quãng đường khác nhau thì thời gian tín hiệu tới P cũng khác nhau. Lấy độ chênh thời gian Δt>0 nhân v sẽ được **trị tuyệt đối hiệu quãng đường**: \(|PA-PB|=v\Delta t=2a\). Điều kiện để có hypebol không suy biến là \(0<v\Delta t<AB=2c\); khi ấy \(b^2=c^2-a^2>0\).

    Chỉ biết **độ lớn** của chênh lệch thời gian thì chưa biết P ở nhánh nào. Nếu **tín hiệu B đến trước A**, P gần B hơn nên \(PA-PB>0\) và P ở nhánh phía B. Nếu A đến trước thì P ở nhánh phía A. Một cặp trạm và một độ lệch thời gian chỉ cho **một nhánh quỹ tích**, chưa cho tọa độ duy nhất của máy thu.

    **Vận dụng.** Hai trạm cách nhau **60 km**, phát đồng thời; tốc độ truyền **100.000 km/s**, chênh thời gian nhận **0,0002 s**. Hãy tính 2a, c, b² và kiểm điều kiện có hypebol thực. Dữ kiện chưa nói trạm nào đến trước: có thể chọn nhánh không?
    <figure class="thpt-r4-plot thpt-r4-probability-figure"><img src="../../../../assets/images/thpt/THPT_G10_CHVII_HYPERBOLA_TRANSFER_D5_R00.svg" alt="Hypebol từ hai trạm A(-50;0), B(50;0), nhánh phải có B đến trước và PA trừ PB bằng 60 km" loading="lazy"><figcaption>Hình minh họa quỹ tích hai nhánh; B nhận trước chọn nhánh gần B, không phải một điểm duy nhất.</figcaption></figure>

    **Lưu ý khi đọc hình:** SVG này minh họa **một bộ số liệu khác**: các trạm ở x=±50 km và **B nhận trước A**, nên nhánh phải gần B. Trong tình huống 60 km ở trên, chưa biết trạm nào trước; không được dùng màu/nhánh của hình để tự suy dấu.

    #### Minh họa có lời giải — Khi biết trạm nào đến trước

    Với **bộ số liệu thứ ba**, hai trạm A(−40;0), B(40;0) km, sóng truyền 100.000 km/s, tín hiệu **A đến trước** 0,0004 s. Hai trạm cách nhau 80 km nên c=40; độ lệch quãng đường là 40 km nên 2a=40, a=20. Ta có b²=40²−20²=1200 và phương trình **toàn hypebol** x²/400−y²/1200=1. Vì A đến trước, P gần A hơn và phải nằm trên **nhánh trái x≤−20**. Không có đủ dữ kiện để xác định một tọa độ P duy nhất; việc hai trạm phát đồng thời là điều kiện cần để biến chênh thời gian thành chênh quãng đường.

    ??? question "Đối chiếu"

        Hiệu quãng đường `vΔt=100000·0,0002=20 km`, nên `2a=20`, `a=10 km`, `2c=60`, `c=30 km`, `b²=c²−a²=900−100=800 km²`. Vì `0<20<60`, dữ kiện hình học phù hợp hypebol. **Chưa đủ thông tin trạm nào nhận trước** nên chưa thể chọn nhánh. Nếu quên điều kiện này, xem `HELP-G10-CHVII-HYPERBOLA-TR01`.

    ### Thuật ngữ, kiến thức và kỹ năng

    **Thuật ngữ:** Elip, hypebol, parabol, tiêu điểm, tiêu cự, bán trục, tiệm cận, đường chuẩn, tham số tiêu và phương trình chính tắc.

    **Sau bài học, em cần:** Phân biệt ba quỹ tích bằng điều kiện khoảng cách; tìm đúng tham số và tiêu điểm theo từng quy ước; nhận ra đường tiệm cận, tiêu điểm/đường chuẩn; giải giao điểm và vận dụng đúng miền, đơn vị, dấu nhánh vào mô hình mái hoặc tín hiệu.

=== "Kiến thức SGK"

    ### 2.1. Elip

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Elip:</strong> Cho hai tiêu điểm F₁, F₂ phân biệt, cách nhau 2c. Elip là tập hợp những điểm M có <strong>tổng MF₁ + MF₂ = 2a không đổi</strong>, với <strong>a &gt; c &gt; 0</strong>. Như vậy tổng hai khoảng cách luôn lớn hơn đoạn thẳng nối hai tiêu điểm.</div>

    #### Elip — trục lớn trùng \(Ox\)






    Ở dạng chính tắc dưới đây, chọn gốc O là trung điểm hai tiêu điểm và cho trục lớn trùng Ox. Điểm trên elip có tổng khoảng cách đến hai tiêu điểm không đổi. Hai tiêu điểm nằm trên trục lớn, giữa hai đỉnh; **bán trục b không phải khoảng cách từ tâm đến tiêu điểm**.
    Dạng chính tắc \(\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1\), với \(a>b>0\). Đặt \(c^2=a^2-b^2\), hai tiêu điểm là \((\pm c;0)\), các đỉnh \((\pm a;0)\) và \((0;\pm b)\).

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Quy tắc — Tìm tiêu điểm elip trục lớn Ox:</strong> Mẫu lớn hơn dưới x² cho bình phương bán trục lớn a²; mẫu dưới y² cho b². Lấy <strong>c² = a² − b²</strong> và căn dương để tìm c, sau đó đặt hai tiêu điểm tại (−c;0), (c;0). Không áp nguyên tọa độ này cho elip quay hay đổi trục lớn.</div>

    **Ví dụ:** \(\dfrac{x^2}{25}+\dfrac{y^2}{9}=1\) có \(a=5\), \(b=3\), \(c=4\), tiêu điểm \((\pm4;0)\); tổng khoảng cách từ một điểm trên elip đến hai tiêu điểm bằng \(2a=10\).

    ### 2.2. Hypebol

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Hypebol:</strong> Cho hai tiêu điểm F₁, F₂ cách nhau 2c. Hypebol là tập hợp những điểm M có <strong>giá trị tuyệt đối hiệu hai khoảng cách |MF₁ − MF₂| = 2a không đổi</strong>, với <strong>0 &lt; a &lt; c</strong>. Các điểm tạo thành hai nhánh không khép kín.</div>

    #### Hypebol — trục thực trùng \(Ox\)






    Với trục thực trùng Ox, hai nhánh mở sang trái và phải, các đỉnh ở gần tâm hơn hai tiêu điểm. Hai đường tiệm cận chéo biểu thị hướng các nhánh khi đi xa; chúng **không phải chính hai nhánh**. Hình trạm tín hiệu trong tab Khám phá là một tình huống có số liệu riêng, không phải hình chính tắc để đọc a,b của mọi ví dụ.
    Dạng chính tắc \(\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1\), \(a,b>0\). Khi đó \(c^2=a^2+b^2\), hai tiêu điểm \((\pm c;0)\), các đỉnh \((\pm a;0)\), các tiệm cận \(y=\pm\dfrac ba x\).

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Quy tắc — Tiêu điểm và tiệm cận hypebol:</strong> Dấu trừ phân biệt hypebol với elip. Với số hạng x² dương, chọn a² ở mẫu dương, b² ở mẫu âm; <strong>c² = a² + b²</strong>, nên c &gt; a. Hai tiệm cận qua O có hệ số góc <strong>±b/a</strong>. Nếu đổi tâm hoặc đổi trục phải biến đổi phương trình trước.</div>

    **Ví dụ:** \(\dfrac{x^2}{9}-\dfrac{y^2}{16}=1\): \(a=3,b=4,c=5\), hai tiệm cận \(y=\pm4x/3\).

    ### 2.3. Parabol

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Parabol:</strong> Cho một tiêu điểm F và một đường thẳng cố định Δ <strong>không đi qua F</strong> (đường chuẩn). Parabol là tập hợp những điểm M có <strong>khoảng cách MF bằng khoảng cách vuông góc từ M đến Δ</strong>. Khoảng cách từ F tới Δ là tham số tiêu, phải dương.</div>

    #### Parabol — quy ước \(y^2=2px,\ p>0\)






    Hình thật của đường y²=4x đã đặt cạnh phần Khám phá: O là đỉnh, F(1,0) ở bên phải, đường chuẩn x=−1 ở bên trái; điểm trên đường cách đều F và đường chuẩn. Đường cong mở về phía tiêu điểm. Không lấy hình này làm số liệu của phương trình y²=8x trong câu Vận dụng.
    Parabol có đỉnh \(O(0;0)\), tiêu điểm \(F(p/2;0)\), đường chuẩn \(x=-p/2\). Mọi điểm \(M\) trên parabol có khoảng cách đến tiêu điểm bằng khoảng cách đến đường chuẩn.

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Quy tắc — Phương trình chính tắc parabol:</strong> Với <strong>p &gt; 0</strong> trong quy ước y² = 2px, hệ số x bằng 2p, nên <strong>tiêu điểm là (p/2;0)</strong> và <strong>đường chuẩn x = −p/2</strong>. Không dùng một quy ước hệ số 4p khác rồi giữ nguyên công thức tiêu điểm.</div>

    **Ví dụ:** \(y^2=12x\), suy ra \(p=6\), \(F(3;0)\), đường chuẩn \(x=-3\). Điểm \(M(3;6)\) thuộc parabol vì \(36=12\cdot3\); hai khoảng cách đều bằng \(6\).

    ### 2.4. Một số ứng dụng của ba đường conic

    Các mô hình conic có thể mô tả **mái vòm elip**, **chênh lệch khoảng cách tới hai trạm tín hiệu (hypebol)** hoặc **bộ phận phản xạ parabol**. Khi vận dụng, phải chọn đúng dạng đường cong, đơn vị, miền tọa độ và điều kiện của bài toán; không suy kết quả chỉ từ hình minh họa.

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Quy tắc — Chọn đúng mô hình trước khi tính:</strong> Mái nửa elip dùng <strong>bán trục theo phương ngang/đứng</strong>, chỉ xét nửa trên và độ cao tại mép; không tùy tiện áp điều kiện a&gt;b của elip trục lớn Ox vào một mái có thể cao hơn chiều ngang. Tín hiệu hypebol đòi hỏi trạm phát đồng thời, cùng vận tốc và độ lệch quãng đường <strong>nhỏ hơn khoảng cách hai trạm</strong>; phải biết trạm đến trước mới chọn được nhánh. Mặt cắt parabol chỉ cho số đo trong miền thực tế đã mô hình hóa.</div>

    Tính chất quang học trong SGK cũng cho thấy **parabol** có khả năng biến các tia tới song song trục thành các tia phản xạ đi qua tiêu điểm (với bề mặt phản xạ và hình học phù hợp). Vì vậy chảo thu tín hiệu, đèn pha có dạng phản xạ parabol. Đây là <strong>ứng dụng hình học được giới thiệu</strong>, không dùng công thức tọa độ để suy ra định luật phản xạ hay tuyên bố mọi mặt cắt thực tế đều là parabol chính xác.

    #### Phân biệt công thức và điều kiện sử dụng

    <div class="thpt-g10-table-scroll"><table class="thpt-g10-knowledge-table">
    <thead><tr><th>Đường conic</th><th>Công thức liên hệ</th><th>Chú ý</th></tr></thead>
    <tbody>
    <tr><td>Elip</td><td>\(c^2=a^2-b^2\)</td><td>\(a&gt;b&gt;0\) trong dạng trục lớn \(Ox\)</td></tr>
    <tr><td>Hypebol</td><td>\(c^2=a^2+b^2\)</td><td>Tiệm cận \(y=\pm bx/a\)</td></tr>
    <tr><td>Parabol</td><td>\(y^2=2px\)</td><td>Tiêu điểm \((p/2;0)\), không phải \((p;0)\)</td></tr>
    </tbody></table></div>

=== "Ví dụ"

    ### 3.1. Ví dụ — Tìm tiêu điểm elip từ mẫu số

    **Đề bài.** Cho \(\frac{x^2}{9}+\frac{y^2}{4}=1\). Tìm hai tiêu điểm.

    **Phân tích:** Hai phân thức cùng dấu cộng, mẫu lớn hơn dưới \(x^2\), nên đây là elip có trục lớn theo \(Ox\). Ta đọc a² và b² từ hai mẫu, sau đó dùng **hiệu** a²−b² để tìm c² (khác với hypebol). Chỉ khi nhận đúng dạng và điều kiện a>b>0 mới đặt hai tiêu điểm trên Ox.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.1">
    <p><strong>Lời giải.</strong> \(a^2=9,\ b^2=4\), nên \(c^2=a^2-b^2=5\); hai tiêu điểm là \(F_1(-\sqrt5,0)\), \(F_2(\sqrt5,0)\).</p>
    </div>

    **Kiểm lại:** Vì c=√5 nhỏ hơn a=3, cả hai tiêu điểm nằm giữa hai đỉnh trên trục Ox. Tổng khoảng cách từ mọi điểm trên elip đến hai tiêu điểm là 2a=6, phù hợp định nghĩa elip.

    ### 3.2. Ví dụ — Tiêu điểm và tiệm cận hypebol

    **Đề bài.** Cho \(\frac{x^2}{9}-\frac{y^2}{4}=1\). Tìm tiêu điểm và hai đường tiệm cận.

    **Phân tích:** Dấu trừ và số hạng x² dương cho hypebol trục thực \(Ox\), **khác elip** ở ví dụ trước. Đọc a và b từ mẫu dương/âm, tính c theo **tổng** a²+b²; muốn tìm tiệm cận qua O phải lấy hệ số góc ±b/a. Không hoán đổi hai mẫu hoặc kết luận tiệm cận là hai nhánh.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.2">
    <p><strong>Lời giải.</strong> \(a=3,b=2,c=\sqrt{a^2+b^2}=\sqrt{13}\). Hai tiêu điểm \(F_1(-\sqrt{13},0)\), \(F_2(\sqrt{13},0)\); các tiệm cận \(y=\pm\frac23x\).</p>
    </div>

    **Kiểm lại:** √13>3 nên hai tiêu điểm ở ngoài hai đỉnh ±3. Hệ số góc tiệm cận có độ lớn 2/3, không phải 3/2; hai nhánh đi gần các tiệm cận ở xa mà không trùng với chúng.

    ### 3.3. Ví dụ — Đọc tiêu điểm và đường chuẩn parabol

    **Đề bài.** Với \(y^2=4x\) theo quy ước \(y^2=2px\), tìm tiêu điểm và đường chuẩn.

    **Phân tích:** Theo quy ước của bài, hệ số của \(x\) là \(2p\), **không phải \(4p\)**. Ta tìm p từ hệ số trước, rồi đặt tiêu điểm và đường chuẩn cách O cùng p/2 nhưng nằm hai phía. Cách này xuất phát từ định nghĩa các điểm cách đều tiêu điểm và đường chuẩn, không phải ghi nhớ hai tọa độ rời nhau.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.3">
    <p><strong>Lời giải.</strong> \(2p=4\Rightarrow p=2\). Tiêu điểm \(F(\frac p2,0)=(1,0)\), đường chuẩn \(x=-\frac p2=-1\).</p>
    </div>

    **Kiểm lại:** Đỉnh \(O(0,0)\) cách F và đường chuẩn cùng một đơn vị; với M(1;2) trên y²=4x, khoảng cách MF=2 và khoảng cách tới x=−1 cũng bằng 2. Hai phép đo bằng nhau, đúng định nghĩa.

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
