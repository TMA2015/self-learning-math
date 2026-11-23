# Bài 27. Thể tích

<style>
/* B27 Knowledge-only; do not alter shared Golden CSS/JS or Core. */
.md-typeset:has([data-g11-b27-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card{background:#e8f7f2;border:1px solid #a9dccc;border-left:4px solid #087d69;color:#174137}
.md-typeset:has([data-g11-b27-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card{background:#eaf1fc;border:1px solid #a5bee5;border-left:4px solid #4879c2;color:#193d66}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b27-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card{background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b27-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card{background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}
</style>

<div class="thpt-r4-screen" data-thpt-r4 data-g11-b27-knowledge-only>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VII · KẾT NỐI TRI THỨC · TẬP HAI</p>
<p class="thpt-r4-lead">Vì sao cùng diện tích đáy và chiều cao mà thể tích chóp khác lăng trụ? Cách tìm chiều cao thực, công thức chóp cụt và chọn đúng dữ kiện trong các mô hình thực tế.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương VII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    **Vì sao cần học?** Không thể chọn máy điều hòa chỉ bằng diện tích sàn: phòng có trần cao hơn chứa nhiều không khí hơn. Tương tự, đáy chóp và đáy lăng trụ có thể giống nhau nhưng thể tích lại khác. Bài học cần kiến thức tiền đề từ Bài 23 về đường vuông góc mặt phẳng, Bài 25 về chóp đều/chóp cụt đều và Bài 26 về **chiều cao là khoảng cách vuông góc**. SGK Bài 27 **không chia thành các mục chính đánh số**; dưới đây là **ba nhóm học tập do tác giả sắp xếp** theo các công thức và hoạt động SGK, không phải tên mục chính thức trong sách.

    ### 1.1. Khối hình, thể tích khối chóp và vai trò của chiều cao

    **HĐ1 SGK — Chọn công suất điều hòa:** Phòng hình hộp chữ nhật rộng \(4\) m, dài \(5\) m, cao \(3\) m có thể tích \(4\cdot5\cdot3=60\text{ m}^3\). Giả sử mỗi mét khối cần khoảng **200 BTU** theo hướng dẫn của bài toán, tổng công suất ước tính \(60\cdot200=12\,000\) BTU. Đây là bài toán **mô hình**; lựa chọn thiết bị thực tế còn phụ thuộc nhiệt độ, diện tích kính, cách nhiệt, số người và nhiều yếu tố. SGK dùng tình huống để cho thấy thể tích đo **phần không gian chiếm chỗ**, không phải chỉ diện tích bề mặt.

    **Nhận dạng phần không gian cần tính:** Hình chóp, hình lăng trụ, hình hộp là các **hình bao bởi mặt và cạnh**. Phần không gian được chúng giới hạn lần lượt gọi là **khối chóp, khối lăng trụ, khối hộp**. Với đáy diện tích \(S>0\) và chiều cao vuông góc \(h>0\), lăng trụ có thể tích \(Sh\), nhưng chóp cùng đáy và cùng chiều cao có thể tích **\(Sh/3\)**. Tại sao xuất hiện một phần ba? Các thiết diện song song đáy của chóp **thu nhỏ về đỉnh**, khác với lăng trụ có các thiết diện song song đáy bằng nhau. Có thể chia/ghép những chóp phù hợp thành một lăng trụ hoặc dùng nguyên lí chia lát để chứng minh tỉ số \(1/3\); đây là hệ số hình học, không phải chọn tùy ý.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B27-01_R00.svg" alt="Ba khối lăng trụ, hình chóp, chóp cụt với công thức thể tích và cách đo chiều cao vuông góc"><figcaption><strong>Hướng dẫn đọc:</strong> hình trái lăng trụ có hai đáy bằng nhau, nên \(V=Sh\); hình giữa chóp thu về **một đỉnh**, nên \(V=Sh/3\); hình phải chóp cụt có **hai đáy khác diện tích**, công thức riêng. Các đoạn cao phải vuông góc đáy; không so thể tích bằng bề rộng biểu kiến trên hình.</figcaption></figure>

    **Ví dụ 1 SGK — Tứ diện vuông tại O:** Nếu \(OA=a\), \(OB=b\), \(OC=c\) đôi một vuông góc (\(a,b,c>0\)), lấy **tam giác \(OBC\)** làm đáy: \(S_{OBC}=bc/2\); đường \(OA\) vuông góc **cả \(OB\) và \(OC\)** nên vuông góc mặt \((OBC)\). Do đó
    \[
    V_{OABC}=\frac13\cdot\frac{bc}{2}\cdot a=\frac{abc}{6}.
    \]
    Không dùng \(abc/3\), vì còn phải tính **nửa tích hai cạnh** cho diện tích tam giác đáy.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B27_TETRAHEDRON_ORTHOGONAL_AUTHORING_20261123.svg" alt="Tứ diện OABC có OA OB OC đôi một vuông góc, mặt đáy OBC diện tích bc trên 2 và chiều cao OA bằng a"><figcaption><strong>Hướng dẫn đọc:</strong> chọn vùng xanh tam giác \(OBC\), hai cạnh \(OB,OC\) vuông góc cho diện tích \(bc/2\); đoạn đỏ \(OA\) vuông góc **mặt \((OBC)\)**, dùng làm chiều cao. Hệ số thể tích chóp \(1/3\) đi sau việc tính diện tích đáy.</figcaption></figure>

    **Luyện tập 1 SGK — Chóp tứ giác đều:** Chóp \(S.ABCD\) có đáy vuông cạnh \(a>0\), cạnh bên \(b>a/\sqrt2\). Chân chiều cao là tâm \(O\), \(AO=a/\sqrt2\). Trong tam giác vuông \(SOA\), \(SO=\sqrt{b^2-a^2/2}\); vì \(S_{ABCD}=a^2\), thể tích
    \[
    V=\frac{a^2}{3}\sqrt{b^2-\frac{a^2}{2}}.
    \]
    Điều kiện \(b>a/\sqrt2\) bảo đảm hình chóp không suy biến. Không dùng \(b\) trực tiếp thay cho chiều cao.

    **Vận dụng.** Hai khối có cùng diện tích đáy \(S=24\text{ cm}^2\), chiều cao \(h=9\text{ cm}\): một lăng trụ, một chóp. Tính thể tích và giải thích vì sao khác nhau.

    ??? question "Đối chiếu"

        **Lời giải:** Lăng trụ: \(V_1=24\cdot9=216\text{ cm}^3\). Chóp: \(V_2=\frac13\cdot24\cdot9=72\text{ cm}^3\). Các tiết diện lăng trụ song song đáy có diện tích không đổi, còn chóp thu dần về đỉnh; nên dù cùng \(S,h\), chóp chỉ bằng một phần ba thể tích lăng trụ.

    ??? tip "Kiểm lỗi"

        Đừng dùng \(V=Sh\) cho mọi khối; phải **nhận dạng hình** trước, rồi xác minh \(h\) là đoạn vuông góc đáy.

    ### 1.2. Khối chóp cụt đều: vì sao có căn của tích diện tích hai đáy?

    **Khám phá nguồn gốc công thức:** Chóp cụt đều được tạo khi cắt một chóp đều bởi mặt phẳng **song song đáy**, bỏ phần chóp nhỏ phía đỉnh. Gọi diện tích đáy lớn \(S>0\), đáy nhỏ \(0<S'<S\), chiều cao của phần cụt \(h>0\). Nếu chóp ban đầu cao \(H\), chóp nhỏ phía đỉnh cao \(kH\), hai đáy đồng dạng với **tỉ số độ dài \(k\)**, nên tỉ số diện tích \(S'/S=k^2\). Vì vậy \(k=\sqrt{S'/S}\) và \(h=(1-k)H\).

    **Trừ hai thể tích chóp:** 
    \[
    V=\frac{SH-S'(kH)}{3}
    =\frac{SH(1-k^3)}{3}
    =\frac{hS(1+k+k^2)}3
    =\frac h3\left(S+S'+\sqrt{SS'}\right).
    \]
    Hệ số \(\sqrt{SS'}\) là do **đồng dạng bình phương diện tích**; không phải “lấy trung bình diện tích” như hình thang phẳng. Hai biên kiểm lý thuyết: nếu \(S'\to0\) công thức về chóp \(Sh/3\); nếu \(S'\to S\) (giới hạn) công thức về lăng trụ \(Sh\). Các phép giới hạn này giải thích công thức nhưng **không thay định nghĩa chóp cụt đều** cần hai đáy phân biệt.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B27_FRUSTUM_SIMILARITY_AUTHORING_20261123.svg" alt="Chóp cụt đều từ chóp lớn cao H trừ chóp nhỏ cao kH, hai đáy diện tích S và S phẩy, phần còn lại cao h"><figcaption><strong>Hướng dẫn đọc:</strong> đỉnh \(T\) phía trên phần chóp nhỏ; cắt theo mặt **song song đáy** được đáy nhỏ \(S'\) và đáy lớn \(S\). Đường cao tổng \(H\) gồm \(kH\) của chóp trên và \(h\) của chóp cụt. Từ \(S'/S=k^2\), trừ hai thể tích để xuất hiện \(\sqrt{SS'}\).</figcaption></figure>

    **Luyện tập 2 SGK — Hai đáy tam giác đều \(2a,a\):** Với \(a,h>0\), đáy lớn diện tích \(S=\frac{\sqrt3}{4}(2a)^2=\sqrt3a^2\), đáy nhỏ \(S'=\frac{\sqrt3}{4}a^2\), nên
    \[
    V_{\text{cụt}}=\frac h3\left(\sqrt3a^2+\frac{\sqrt3a^2}{4}+\frac{\sqrt3a^2}{2}\right)
    =\frac{7\sqrt3}{12}a^2h.
    \]
    Gọi \(B_1,C_1\) là trung điểm \(AB,AC\); ba đoạn \(AA'\), \(B_1B'\), \(C_1C'\) song song và bằng nhau vì mặt cắt tạo bởi phép vị tự từ đỉnh chóp lớn. Do đó \(AB_1C_1.A'B'C'\) là lăng trụ có đáy tam giác đều cạnh \(a\), cao \(h\), thể tích \(V_{\text{lăng trụ}}=\frac{\sqrt3}{4}a^2h\). Tỉ số hai thể tích bằng \(7/3\), khác hẳn một hình chóp thường.

    **Vận dụng.** Chóp cụt đều có \(S=36\text{ cm}^2\), \(S'=9\text{ cm}^2\) và \(h=4\text{ cm}\). Tính \(V\), so với phép tính sai lấy trung bình hai diện tích đáy rồi nhân chiều cao.

    ??? question "Đối chiếu"

        **Lời giải:** \(V=\frac43(36+9+\sqrt{36\cdot9})=\frac43(36+9+18)=84\text{ cm}^3\). Lấy trung bình hai diện tích cho \(V_{\text{sai}}=4(36+9)/2=90\text{ cm}^3\) là sai vì chóp cụt là khối **ba chiều** có tiết diện biến thiên theo bình phương tỉ lệ độ dài.

    ??? tip "Kiểm lỗi"

        Không áp công thức chóp cụt cho hai đáy tùy ý không đồng dạng/sóng song; cũng không bỏ \(\sqrt{SS'}\) khi đã đủ điều kiện của chóp cụt đều.

    ### 1.3. Khối lăng trụ, khối hộp: diện tích đáy nhân chiều cao thật

    **Hình thành thể tích khối lăng trụ:** Các thiết diện song song đáy của lăng trụ bằng nhau, nên sau khi tịnh tiến/cắt ghép giữ diện tích và chiều cao, thể tích bằng
    \[
    V_{\text{lăng trụ}}=S_{\text{đáy}}h.
    \]
    Với hình hộp chữ nhật có ba kích thước vuông góc \(x,y,z>0\), \(V=xyz\). Nhưng **hình hộp xiên** chỉ có \(V=S_{\text{đáy}}h\); không mặc định cạnh bên là \(h\). Hình bình hành đáy cạnh \(u,v\), góc xen giữa \(\theta\in(0^\circ,180^\circ)\) có \(S_{\text{đáy}}=uv\sin\theta\).

    **Ví dụ 2 SGK — Lăng trụ không mặc định đứng:** Lăng trụ \(ABC.A'B'C'\) có đáy tam giác đều cạnh \(a\), mặt \((ACC'A')\perp(ABC)\), và tam giác \(A'AC\) cân tại \(A'\), \(AA'=A'C=b\), \(a<2b\). Gọi \(H\) là trung điểm \(AC\). Vì tam giác cân \(A'AC\), \(A'H\perp AC\); kết hợp hai mặt **vuông góc** theo Bài 25 và \(A'H\subset(ACC'A')\) cho \(A'H\perp(ABC)\). Đây mới là **chiều cao thật**:
    \[
    A'H=\sqrt{b^2-\frac{a^2}{4}},\qquad
    V=\frac{a^2\sqrt3}{4}\sqrt{b^2-\frac{a^2}{4}}
    =\frac{a^2\sqrt{3(4b^2-a^2)}}8.
    \]
    Nếu lấy \(AA'=b\) làm chiều cao sẽ sai, trừ trường hợp riêng cạnh bên vốn vuông góc đáy.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B27_PRISM_INCLINED_HEIGHT_AUTHORING_20261123.svg" alt="Lăng trụ xiên có mặt bên ACC phẩy A phẩy vuông góc đáy, A phẩy H là chiều cao tới trung điểm H của AC"><figcaption><strong>Hướng dẫn đọc Hình 7.95:</strong> mặt bên màu tím chứa tam giác \(A'AC\). Điểm \(H\) là trung điểm **\(AC\)**, nên \(A'H\perp AC\). Vì hai mặt \((ACC'A')\) và đáy vuông góc, \(A'H\perp\) đáy; đoạn đỏ là chiều cao, không phải \(AA'=b\) xiên.</figcaption></figure>

    **Ví dụ 3 SGK — Hình hộp đáy bình hành xiên:** \(AB=8\) cm, \(AD=5\) cm, \(AA'=6\) cm, \(\angle BAD=30^\circ\), cạnh \(AA'\) tạo góc \(45^\circ\) với đáy. Đáy có diện tích \(S=8\cdot5\sin30^\circ=20\text{ cm}^2\). Chiều cao là hình chiếu **vuông góc** của \(AA'\) theo pháp tuyến đáy, \(h=6\sin45^\circ=3\sqrt2\) cm. Vậy \(V=20\cdot3\sqrt2=60\sqrt2\text{ cm}^3\). Chọn sin chứ không dùng cos vì góc \(45^\circ\) là góc **đường–mặt**.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B27_PARALLELEPIPED_OBLIQUE_AUTHORING_20261123.svg" alt="Hình hộp xiên có đáy hình bình hành AB 8 AD 5 góc BAD 30 độ, cạnh bên AA phẩy 6 tạo góc 45 độ với đáy"><figcaption><strong>Hướng dẫn đọc Hình 7.97:</strong> diện tích đáy dùng **góc giữa hai cạnh đáy \(30^\circ\)**, còn đường cao \(A'H\) đỏ nét đứt dùng **góc cạnh bên với mặt đáy \(45^\circ\)**. Hai góc khác vai trò; chỉ nhân \(S\cdot A'H\), không nhân \(S\cdot AA'\).</figcaption></figure>

    **Vận dụng SGK — Sọt chóp cụt đều:** Sọt có miệng vuông cạnh \(60\) cm, đáy vuông cạnh \(30\) cm, cạnh bên \(50\) cm. Bán kính tâm–đỉnh hai hình vuông lần lượt \(30\sqrt2\) và \(15\sqrt2\) cm, nên độ lệch ngang hai đỉnh tương ứng \(15\sqrt2\) cm. Tam giác vuông chứa cạnh bên cho
    \[
    h=\sqrt{50^2-(15\sqrt2)^2}=\sqrt{2050}\text{ cm}.
    \]
    \(S=3600\text{ cm}^2\), \(S'=900\text{ cm}^2\), nên \(V=\frac{\sqrt{2050}}3(3600+900+1800)=2100\sqrt{2050}\text{ cm}^3\). Vì \(1000\text{ cm}^3=1\) lít, \(V\approx95{,}1\) lít (mô hình không tính độ dày thành sọt và phần trống). Đây là ví dụ **phải tìm chiều cao trước công thức**, không dùng \(50\) cm là \(h\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B27_FRUSTUM_BASKET_AUTHORING_20261123.svg" alt="Sọt chóp cụt đều đáy nhỏ cạnh 30, miệng cạnh 60, cạnh bên 50, độ cao h tính từ lệch ngang 15 căn hai"><figcaption><strong>Hướng dẫn đọc Hình 7.98:</strong> miệng xanh lục là hình vuông cạnh **60 cm**, đáy dưới xanh nhạt cạnh **30 cm**; cạnh bên màu xanh đậm dài 50 cm là **cạnh xiên**. Đường cao \(h\) nối tâm hai đáy, vuông góc cả hai. Độ lệch ngang của hai đỉnh cùng phía là **\(15\sqrt2\)**, không phải \(60-30\).</figcaption></figure>

    **Vận dụng.** Một bể hình hộp chữ nhật dài \(1{,}2\) m, rộng \(0{,}8\) m và cao \(0{,}5\) m. Tính thể tích tính theo mét khối và lít; giải thích điều kiện để coi đó là lượng nước tối đa.

    ??? question "Đối chiếu"

        **Lời giải:** \(V=1{,}2\cdot0{,}8\cdot0{,}5=0{,}48\text{ m}^3=480\) lít. Kết quả là **dung tích hình học bên trong** nếu ba số là kích thước lòng bể, chưa trừ vật bên trong và giả định bể chứa tới độ cao \(0{,}5\) m.

    ??? tip "Kiểm lỗi"

        Không đổi \(0{,}48\text{ m}^3\) thành \(48\) lít; \(1\text{ m}^3=1000\) lít. Nếu là kích thước ngoài, còn phải trừ độ dày thành bể trước khi gọi là dung tích.
