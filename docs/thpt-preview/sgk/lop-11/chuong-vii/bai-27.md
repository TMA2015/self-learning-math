# Bài 27. Thể tích

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VII · SGK KNTT TẬP 2</p><p class="thpt-r4-lead">Nhận diện khối, xác định đúng diện tích đáy và chiều cao vuông góc, tính thể tích kể cả khối xiên và chóp cụt đều.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương VII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Thể tích đo phần không gian vật chiếm chỗ. Hai khối cùng diện tích đáy và độ cao chưa chắc có cùng thể tích vì tiết diện giữa các đáy hoặc giữa đáy với đỉnh thay đổi khác nhau. Hãy dùng B25 để nhận dạng hình và B26 để xác định chiều cao, rồi mới thay số.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B27-01_R00.svg" alt="Ba sơ đồ phân biệt khối lăng trụ, khối chóp và khối chóp cụt đều. Mỗi h là chiều cao vuông góc, không phải cạnh xiên; S và S' là diện tích đáy, không phải độ dài cạnh. Chọn công thức theo loại khối."><figcaption>Đọc hình: Ba sơ đồ phân biệt khối lăng trụ, khối chóp và khối chóp cụt đều. Mỗi h là chiều cao vuông góc, không phải cạnh xiên; S và S' là diện tích đáy, không phải độ dài cạnh. Chọn công thức theo loại khối. Không suy góc hoặc độ dài từ nét phối cảnh.</figcaption></figure>

    ### 1.1. Lăng trụ: diện tích đáy nhân chiều cao

    Mọi thiết diện song song đáy của lăng trụ bằng đáy, ngay cả khi cạnh bên xiên. Chiều cao là khoảng cách giữa hai mặt đáy.

    **Vận dụng — Tự thử trước Core.** Lăng trụ xiên có diện tích đáy 20 cm², cạnh bên 12 cm tạo góc 30° với đáy. Tính thể tích.

    <span data-ped-first-try="1" data-outcome-id="G11-B27-PRISM_VOLUME" data-thpt-first-try-id="THPT-G11-B27-TRY01" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Chiều cao \(h=12\sin30^\circ=6\) cm. \(V=20\cdot6=120\) cm³. Không lấy cạnh bên dài 12 cm làm h.

    <span data-thpt-help-id="HELP-G11-B27-TRY01" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Nhân diện tích đáy với cạnh xiên.

        **Tự sửa:** Tính chiều cao từ hình chiếu và góc đường–mặt. <a href="../luyen-tap/?item=THPT-G11-CHVII-B27-C01">Luyện lại câu B27-C01</a>.

    ### 1.2. Khối chóp có hệ số một phần ba

    Khối chóp thu hẹp các thiết diện song song đáy dần tới đỉnh; công thức thể tích có hệ số 1/3, khác lăng trụ cùng đáy cùng cao.

    **Vận dụng — Tự thử trước Core.** Khối chóp có đáy tam giác vuông với hai cạnh góc vuông 9 cm, 12 cm và chiều cao 7 cm. Tính thể tích.

    <span data-ped-first-try="2" data-outcome-id="G11-B27-PYRAMID_VOLUME" data-thpt-first-try-id="THPT-G11-B27-TRY02" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Diện tích đáy \(S=9\cdot12/2=54\) cm², \(V=54\cdot7/3=126\) cm³. Hệ số 1/2 do diện tích tam giác, 1/3 do thể tích chóp.

    <span data-thpt-help-id="HELP-G11-B27-TRY02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Bỏ hệ số 1/3 hoặc lẫn hai hệ số.

        **Tự sửa:** Tính riêng S rồi dùng V=Sh/3. <a href="../luyen-tap/?item=THPT-G11-CHVII-B27-C02">Luyện lại câu B27-C02</a>.

    ### 1.3. Khối hộp: không phải cứ nhân ba cạnh

    Thể tích hộp bằng diện tích một mặt nhân chiều cao ứng với mặt ấy. Chỉ hộp chữ nhật mới có công thức tích ba cạnh đôi một vuông góc tại một đỉnh.

    **Vận dụng — Tự thử trước Core.** Khối hộp có đáy là hình bình hành cạnh 5 và 6 cm, góc giữa hai cạnh là 30°, chiều cao 9 cm. Tính thể tích.

    <span data-ped-first-try="3" data-outcome-id="G11-B27-BOX_VOLUME" data-thpt-first-try-id="THPT-G11-B27-TRY03" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(S=5\cdot6\sin30^\circ=15\) cm². \(V=15\cdot9=135\) cm³. Không lấy 5·6·9 vì đáy không vuông.

    <span data-thpt-help-id="HELP-G11-B27-TRY03" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Dùng tích ba cạnh khi đáy không phải hình chữ nhật.

        **Tự sửa:** Tính diện tích hình bình hành trước, rồi nhân chiều cao thật. <a href="../luyen-tap/?item=THPT-G11-CHVII-B27-C03">Luyện lại câu B27-C03</a>.

    ### 1.4. Khối chóp cụt đều là hiệu hai khối chóp

    Hai đáy song song, đồng dạng; nếu tỉ số cạnh là k thì tỉ số diện tích là k². Trừ thể tích chóp nhỏ khỏi chóp lớn cho công thức có thêm căn của tích hai diện tích đáy.

    **Vận dụng — Tự thử trước Core.** Chóp cụt đều có hai đáy vuông cạnh 10 cm và 4 cm, chiều cao 9 cm. Tính thể tích.

    <span data-ped-first-try="4" data-outcome-id="G11-B27-FRUSTUM_VOLUME" data-thpt-first-try-id="THPT-G11-B27-TRY04" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(S=100,S'=16\) cm², \(\sqrt{SS'}=40\) cm². \(V=9(100+16+40)/3=468\) cm³.

    <span data-thpt-help-id="HELP-G11-B27-TRY04" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Dùng trung bình cộng diện tích hai đáy nhân h.

        **Tự sửa:** Tính đủ ba hạng tử diện tích, kể cả căn tích. <a href="../luyen-tap/?item=THPT-G11-CHVII-B27-C04">Luyện lại câu B27-C04</a>.

    ### 1.5. Đơn vị thể tích và sức chứa

    Thể tích mang ba chiều. (1	ext{ dm}^3=1) lít, (1	ext{ m}^3=1000) lít; đổi các kích thước về cùng đơn vị trước khi tính.

    **Vận dụng — Tự thử trước Core.** Bể chữ nhật có kích thước trong lòng 1,5 m × 0,6 m × 0,4 m. Nếu chứa nước đến 3/4 chiều cao, có bao nhiêu lít nước?

    <span data-ped-first-try="5" data-outcome-id="G11-B27-VOLUME_APPLICATION" data-thpt-first-try-id="THPT-G11-B27-TRY05" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Chiều cao nước \(0{,}4\cdot3/4=0{,}3\) m. \(V=1{,}5\cdot0{,}6\cdot0{,}3=0{,}27\) m³ = 270 lít.

    <span data-thpt-help-id="HELP-G11-B27-TRY05" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Đổi m³ sang lít bằng 100 hoặc lấy cả chiều cao bể.

        **Tự sửa:** Tính khối nước thực tế, nhân 1000 để đổi m³ sang lít. <a href="../luyen-tap/?item=THPT-G11-CHVII-B27-C05">Luyện lại câu B27-C05</a>.

=== "Kiến thức SGK"

    ### 2.1. Thể tích các khối lăng trụ, khối hộp, khối chóp và khối chóp cụt đều

    Phần không gian được giới hạn bởi hình lăng trụ, hình hộp, hình chóp hay hình chóp cụt đều gọi tương ứng là khối lăng trụ, khối hộp, khối chóp, khối chóp cụt đều. Đỉnh, cạnh, mặt, chiều cao ứng với hình giới hạn. Trong SGK Bài 27, các công thức được trình bày liên tiếp trong một mạch kiến thức, không chia bốn bài riêng.
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Thể tích khối lăng trụ.</strong> Với diện tích đáy S và chiều cao vuông góc h,
    \[
    V=Sh.
    \]
    Khối hộp là lăng trụ có đáy hình bình hành; công thức đúng với một mặt bất kì được chọn làm đáy và chiều cao ứng với mặt ấy. Hộp chữ nhật kích thước a,b,c có \(V=abc\); lập phương cạnh a có \(V=a^3\).</div>
    
    Lăng trụ xiên vẫn dùng Sh vì các thiết diện song song đáy bằng nhau. Nếu cạnh bên dài l tạo góc \(\theta\) với đáy thì \(h=l\sin\theta\), không lấy l trừ khi cạnh đứng.
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Thể tích khối chóp.</strong> Với diện tích đáy S và chiều cao h từ đỉnh tới mặt phẳng đáy,
    \[
    V=\frac{1}{3}Sh.
    \]
    Khối tứ diện là khối chóp tam giác: chọn bất kì mặt tam giác làm đáy và đường cao từ đỉnh đối diện.</div>
    
    Chóp cùng S,h với lăng trụ có thể tích bằng 1/3; hệ số này là định lí thể tích, không suy ra chỉ từ việc nhìn hình. Tại một độ cao bằng tỉ phần k tính từ đỉnh, tiết diện song song đáy có diện tích k²S, nên càng gần đỉnh càng nhỏ. Công thức phù hợp sự thu nhỏ theo bình phương. Khi ba cạnh OA,OB,OC đôi một vuông góc, đáy OBC là tam giác vuông, OA vuông góc đáy; thể tích tứ diện OABC bằng \(OA\cdot OB\cdot OC/6\).
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Thể tích khối chóp cụt đều.</strong> Hai đáy có diện tích S,S' và chiều cao vuông góc h:
    \[
    V=\frac h3(S+S'+\sqrt{SS'}).
    \]
    </div>
    
    **Vì sao xuất hiện căn tích?** Gọi \(S\gt S'\gt0\); tỉ số chóp nhỏ/chóp lớn \(k=\sqrt{S'/S}\), với \(0\lt k\lt1\). Nếu chóp lớn cao H thì chóp nhỏ cao kH, suy \(h=(1-k)H\). Hiệu thể tích là
    \[
    V=\frac{SH-S'kH}{3}
    =\frac{SH(1-k^3)}3
    =\frac{Sh(1+k+k^2)}3
    =\frac h3(S+\sqrt{SS'}+S').
    \]
    Nếu đáy nhỏ co về 0, công thức tiến về chóp; nếu hai diện tích tiến tới bằng nhau với chiều cao giữ cố định, giá trị tiến về thể tích lăng trụ. Đây là trường hợp giới hạn, không phải hai trường hợp chóp cụt đều không suy biến. Không áp công thức cho mọi khối có hai mặt đáy tùy ý.
    
    **Đơn vị và quy trình:** Đổi mọi độ dài về cùng đơn vị, tìm diện tích đáy (m² hoặc cm²), dựng chiều cao vuông góc ứng với đáy đã chọn, tính thể tích theo loại khối (m³ hoặc cm³). \(1\text{ m}^3=1000\) L, \(1\text{ dm}^3=1\) L, \(1000\text{ cm}^3=1\) L. Chỉ làm tròn sau khi tính. Sức chứa thực tế cần kích thước trong lòng và các giả định về thành, nắp, phần rỗng hoặc mực chất lỏng.

=== "Ví dụ"

    ### 3.1. Chọn đúng loại khối và hệ số

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B27-R02-01"><p><strong>Đề bài:</strong> Lăng trụ và chóp cùng đáy diện tích 35 cm², chiều cao 12 cm. Tính hai thể tích.</p><p><strong>Phân tích:</strong> Dùng cùng S,h nhưng phân biệt hệ số.</p><p><strong>Lời giải:</strong> \(V_{\text{lăng trụ}}=35\cdot12=420\) cm³, \(V_{\text{chóp}}=420/3=140\) cm³.</p><p><strong>Kiểm lại:</strong> Chóp bằng một phần ba lăng trụ, không phải một phần hai.</p></div>

    ### 3.2. Thể tích chóp có đáy tam giác vuông

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B27-R02-02"><p><strong>Đề bài:</strong> Tứ diện MABC có MA, MB, MC đôi một vuông góc, dài 6,8,9 cm. Tính thể tích.</p><p><strong>Phân tích:</strong> Chọn đáy MBC vuông tại M. MA vuông góc MB,MC cắt nhau nên vuông góc (MBC).</p><p><strong>Lời giải:</strong> \(S_{MBC}=8\cdot9/2=36\) cm²; chiều cao MA=6 cm. \(V=36\cdot6/3=72\) cm³.</p><p><strong>Kiểm lại:</strong> Diện tích và chiều cao thuộc đúng một cách chọn đáy.</p></div>

    ### 3.3. Khối hộp xiên có đáy hình bình hành

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B27-R02-03"><p><strong>Đề bài:</strong> Hộp có các cạnh đáy dài 10 cm, 6 cm, góc xen giữa 60°, cạnh bên dài 8 cm tạo góc 30° với đáy. Tính thể tích.</p><p><strong>Phân tích:</strong> Tính S bằng tích hai cạnh và sin góc xen; dựng chiều cao h bằng thành phần vuông góc.</p><p><strong>Lời giải:</strong> \(S=60\sin60^\circ=30\sqrt3\) cm², \(h=8\sin30^\circ=4\) cm. \(V=120\sqrt3\) cm³.</p><p><strong>Kiểm lại:</strong> h khác cạnh xiên 8 cm, không dùng abc.</p></div>

    ### 3.4. Khối lăng trụ xiên từ mặt bên vuông góc đáy

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B27-R02-04"><p><strong>Đề bài:</strong> Lăng trụ ABC.A'B'C' đáy tam giác đều cạnh 10 cm. Mặt (ABB'A') vuông góc đáy, tam giác A'AB cân tại A', \(A'A=A'B=13\) cm. Tính thể tích.</p><p><strong>Phân tích:</strong> Dựng A'H là đường cao của tam giác cân, H là trung điểm AB; A'H nằm trong mặt bên và vuông góc giao tuyến AB.</p><p><strong>Lời giải:</strong> \(AH=5\), \(A'H=\sqrt{169-25}=12\) cm. Vì hai mặt vuông góc, \(A'H\perp(ABC)\). Diện tích đáy \(S=10^2\sqrt3/4=25\sqrt3\) cm². \(V=300\sqrt3\) cm³.</p><p><strong>Kiểm lại:</strong> Chiều cao h=12, nhỏ hơn cạnh bên 13; áp đúng điều kiện B25.</p></div>

    ### 3.5. Chóp đều từ cạnh đáy và cạnh bên

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B27-R02-05"><p><strong>Đề bài:</strong> Chóp đều S.ABCD có đáy vuông cạnh \(8\sqrt2\) cm, cạnh bên SA=17 cm. Tính thể tích.</p><p><strong>Phân tích:</strong> Tìm bán kính ngoại tiếp đáy và chiều cao từ tam giác SOA.</p><p><strong>Lời giải:</strong> \(OA=(8\sqrt2)\sqrt2/2=8\) cm, \(SO=\sqrt{17^2-8^2}=15\) cm. \(S_{\text{đáy}}=(8\sqrt2)^2=128\) cm². \(V=128\cdot15/3=640\) cm³.</p><p><strong>Kiểm lại:</strong> Chiều cao 15 cm nhỏ hơn cạnh bên 17 cm, đúng tam giác vuông; đáy phải dùng diện tích 128.</p></div>

    ### 3.6. Chóp cụt đều khi biết hai diện tích

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B27-R02-06"><p><strong>Đề bài:</strong> Chóp cụt đều có S=81 cm², S'=25 cm², h=12 cm. Tính thể tích.</p><p><strong>Phân tích:</strong> Tính căn tích hai diện tích.</p><p><strong>Lời giải:</strong> \(\sqrt{81\cdot25}=45\) cm². \(V=12(81+25+45)/3=604\) cm³.</p><p><strong>Kiểm lại:</strong> Nằm giữa (hS'=300) và (hS=972) cm³; không dùng trung bình cộng hai diện tích.</p></div>

    ### 3.7. Chóp cụt đều khi biết cạnh bên

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B27-R02-07"><p><strong>Đề bài:</strong> Sọt lý tưởng dạng chóp cụt đều có hai đáy vuông cạnh 54 cm và 30 cm, cạnh bên 22 cm. Tính thể tích.</p><p><strong>Phân tích:</strong> Hai tâm đáy cùng nằm trên đường cao. Chiếu đỉnh đáy nhỏ xuống đáy lớn, độ lệch ngang của hai đỉnh tương ứng bằng nửa hiệu đường chéo, tức \(12\sqrt2\) cm.</p><p><strong>Lời giải:</strong> \(h=\sqrt{22^2-(12\sqrt2)^2}=\sqrt{196}=14\) cm. \(S=2916,S'=900,\sqrt{SS'}=1620\) cm². \(V=\frac{14}3(2916+900+1620)=25368\) cm³ =25,368 lít.</p><p><strong>Kiểm lại:</strong> Chiều cao 14 khác cạnh bên 22, tính dung tích theo kích thước trong lòng lý tưởng.</p></div>

    ### 3.8. Ứng dụng ước lượng thể tích phòng

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B27-R02-08"><p><strong>Đề bài:</strong> Một phòng dạng hộp chữ nhật dài 6 m, rộng 3,5 m, cao 2,8 m. Tính thể tích; theo giả định yêu cầu công suất lạnh 180 BTU/h cho mỗi m³, ước lượng công suất.</p><p><strong>Phân tích:</strong> Tính thể tích trước; đây chỉ là mô hình hệ số được cho, không là tư vấn chọn thiết bị thực tế.</p><p><strong>Lời giải:</strong> \(V=6\cdot3{,}5\cdot2{,}8=58{,}8\) m³. Công suất theo giả định \(58{,}8\cdot180=10584\) BTU/h.</p><p><strong>Kiểm lại:</strong> Phải phân biệt m³ và BTU/h, kết quả phụ thuộc giả định cách nhiệt và môi trường.</p></div>

=== "Lỗi thường gặp"

    <span data-thpt-help-id="HELP-G11-CHVII-B27-01" hidden></span>

    ??? tip "4.1. Lấy trung bình cộng hai diện tích đáy để tính chóp cụt"

        **Vì sao sai:** Diện tích thiết diện thay đổi theo bình phương tỉ số đồng dạng; công thức có căn tích.

        **Tự sửa:** Ôn phép trừ hai chóp và ví dụ 3.6. <a href="../luyen-tap/?item=THPT-G11-CHVII-B27-C04">Luyện lại câu B27-C04</a>.

    <span data-thpt-help-id="HELP-G11-B27-02" hidden></span>

    ??? tip "4.2. Dùng cạnh xiên làm chiều cao"

        **Vì sao sai:** Chiều cao vuông góc đáy, phải dựng trước khi thay số.

        **Tự sửa:** Xem 3.3–3.4 và B26. <a href="../luyen-tap/?item=THPT-G11-CHVII-B27-P03">Luyện lại câu B27-P03</a>.

    <span data-thpt-help-id="HELP-G11-B27-03" hidden></span>

    ??? tip "4.3. Quên hệ số một phần ba của chóp"

        **Vì sao sai:** Khối chóp khác lăng trụ cùng S,h.

        **Tự sửa:** Kiểm lại công thức theo loại khối, làm 3.1. <a href="../luyen-tap/?item=THPT-G11-CHVII-B27-C02">Luyện lại câu B27-C02</a>.

    <span data-thpt-help-id="HELP-G11-B27-04" hidden></span>

    ??? tip "4.4. Đổi đơn vị theo chiều dài thay cho thể tích"

        **Vì sao sai:** Một m³ bằng 1000 dm³ hay 1000 lít.

        **Tự sửa:** Ghi đơn vị ở từng bước; ôn 3.7. <a href="../luyen-tap/?item=THPT-G11-CHVII-B27-C05">Luyện lại câu B27-C05</a>.

    **Học tiếp:** <a href="../luyen-tap/">Core và Luyện tập</a> · <a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a> · <a href="../../../../thu-vien/tu-luan-g11-chuong-vii/">Tự luận Chương VII</a>.

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập hai, Bài 27 (trang in 61–63).</p>
