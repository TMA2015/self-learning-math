# Bài 25. Hai mặt phẳng vuông góc

<style>
/* Chỉ trang B25; không sửa Golden CSS/JS dùng chung. */
.md-typeset:has([data-g11-b25-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card{background:#e8f7f2;border:1px solid #a9dccc;border-left:4px solid #087d69;color:#174137}
.md-typeset:has([data-g11-b25-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card{background:#eaf1fc;border:1px solid #a5bee5;border-left:4px solid #4879c2;color:#193d66}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b25-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card{background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b25-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card{background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}
</style>

<div class="thpt-r4-screen" data-thpt-r4 data-g11-b25-knowledge-only>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VII · KẾT NỐI TRI THỨC · TẬP HAI</p>
<p class="thpt-r4-lead">Hiểu góc giữa hai mặt phẳng, góc nhị diện, điều kiện vuông góc, rồi nhận dạng đúng các lăng trụ, chóp đều và chóp cụt đều.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương VII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    **Vì sao học?** Mặt ghế và lưng ghế, hai mái nhà hoặc cánh cửa và sàn đều tạo thành các góc trong không gian. Đo một góc nhìn thấy trên ảnh chưa đủ: cần biết góc của **hai mặt phẳng không định hướng** hay của **hai nửa mặt phẳng đã chọn**. Dùng kiến thức Bài 22–24 về góc hai đường, pháp tuyến và hình chiếu, ta sẽ hiểu các định nghĩa trước rồi mới tính toán.

    ### 1.1. Góc giữa hai mặt phẳng, hai mặt phẳng vuông góc

    **Bắt đầu từ phương pháp tuyến.** Với hai mặt \((P),(Q)\), chọn các đường \(a\perp(P)\) và \(b\perp(Q)\). Góc **không tù** giữa \(a,b\) gọi là góc giữa hai mặt. Vì mọi đường vuông góc với cùng một mặt đều cùng phương, việc thay vị trí \(a,b\) không làm thay đổi góc. Giá trị nằm trong \([0^\circ,90^\circ]\): hai mặt song song hoặc trùng nhau có góc \(0^\circ\), hai mặt được gọi là **vuông góc** nếu góc bằng \(90^\circ\).

    **Đo bằng giao tuyến:** Khi hai mặt cắt nhau theo \(\Delta\), chọn \(O\in\Delta\); trong \((P)\) lấy đường \(m\) qua \(O\) vuông góc \(\Delta\), trong \((Q)\) lấy đường \(n\) qua \(O\) vuông góc \(\Delta\). Góc giữa hai mặt là góc **không tù** giữa \(m,n\). Hai điều kiện \(m\perp\Delta,n\perp\Delta\) rất quan trọng: lấy tùy tiện hai đường thuộc hai mặt sẽ đo sai góc.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B25-01_R00.svg" alt="Giao tuyến Delta của hai nửa mặt và hai tia OU OV trong tiết diện vuông góc Delta"><figcaption><strong>Hướng dẫn đọc:</strong> đường đậm \(\Delta\) là giao tuyến; \(OU,OV\) cùng xuất phát ở \(O\) và nằm theo hai hướng vuông góc \(\Delta\). Hình giải thích **tiết diện vuông góc giao tuyến**. Góc nhị diện giữ hai tia đã chọn, còn góc giữa hai mặt phải chọn **góc không tù giữa các đường chứa chúng**.</figcaption></figure>

    **Luyện tập 1 SGK — điều kiện đáy là hình vuông:** Chóp \(S.ABCD\) có đáy **hình chữ nhật**, hai đường chéo cắt tại \(O\), \(SO\perp(ABCD)\). Hai mặt \((SAC),(SBD)\) gặp nhau theo \(SO\). Vì \(AC,BD\) đều nằm trong đáy nên cùng vuông góc \(SO\); do đó góc giữa hai mặt bằng \((AC,BD)\). Trong hình chữ nhật, hai đường chéo vuông góc **khi và chỉ khi** hình chữ nhật là hình vuông. Không suy vuông góc từ hình chữ nhật nói chung.

    **Vận dụng.** Hai đường \(m,n\) thuộc hai mặt phẳng cắt theo \(d\), cùng qua \(O\in d\) và vuông góc \(d\). Hai tia được chọn trên \(m,n\) tạo góc \(125^\circ\). Tính góc giữa hai mặt.

    ??? question "Đối chiếu"

        **Lời giải:** Hai đường \(m,n\) có góc không tù \(180^\circ-125^\circ=55^\circ\). Vì đều vuông góc giao tuyến tại \(O\), góc giữa hai mặt cũng bằng \(55^\circ\).

    ??? tip "Kiểm lỗi"

        Không trả \(125^\circ\) cho góc **hai mặt**. Phải kiểm hai phương đều vuông góc giao tuyến và chọn góc không tù.

    ### 1.2. Điều kiện để hai mặt phẳng vuông góc

    **Chứng minh không cần đo góc:** Nếu mặt \((P)\) chứa một đường \(a\) vuông góc với mặt \((Q)\), suy ngay \((P)\perp(Q)\). Điều kiện mạnh ở đây là **\(a\perp(Q)\)**, nghĩa là \(a\) vuông góc **mọi đường trong \((Q)\)**, không chỉ một đường \(b\subset(Q)\). Khi chưa biết \(a\perp(Q)\), có thể chứng minh bằng **hai đường cắt nhau trong \((Q)\)** theo Bài 23.

    **Ví dụ 2 SGK:** Tứ diện \(OABC\) có \(OA\perp OB\) và \(OA\perp OC\). Do \(OB,OC\subset(OBC)\) cắt tại \(O\), suy \(OA\perp(OBC)\). Cả \((OAB)\) lẫn \((OAC)\) đều chứa \(OA\); vậy \((OAB)\perp(OBC)\) và \((OAC)\perp(OBC)\). Không tự kết luận \((OAB)\perp(OAC)\): góc giữa chúng còn phụ thuộc \(\angle BOC\).

    **Cánh cửa và sàn:** Trục bản lề của cánh cửa vuông góc mặt sàn. Mặt phẳng cánh cửa ở mọi vị trí đóng–mở đều chứa trục bản lề, nên **luôn vuông góc với sàn**, cho dù góc giữa cánh cửa và mặt tường thay đổi.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B25_PERPENDICULAR_PLANES_AUTHORING_20261123.svg" alt="Hai mô hình minh họa mặt phẳng vuông góc và giao tuyến thẳng đứng của hai mặt vuông góc nền"><figcaption><strong>Hướng dẫn đọc khung trái:</strong> hai mặt \((P),(Q)\) có giao tuyến \(\Delta\), đường \(a\subset(P)\) vuông góc \(\Delta\). **Khi đã có** \((P)\perp(Q)\), suy \(a\perp(Q)\); chiều chứng minh ngược lại phải chứng minh \(a\perp(Q)\) trước. Khung phải minh họa một tính chất ở mục 1.3, không dùng góc phối cảnh để kết luận.</figcaption></figure>

    **Vận dụng.** Cho \(SA\perp(ABCD)\) trong hình chóp \(S.ABCD\). Chứng minh \((SAB)\perp(ABCD)\). Có suy được mọi mặt bên đều vuông góc đáy không?

    ??? question "Đối chiếu"

        **Lời giải:** Vì \(SA\subset(SAB)\), \(SA\perp(ABCD)\) nên \((SAB)\perp(ABCD)\). Không có căn cứ để suy mọi mặt bên, chẳng hạn \((SBC)\), đều chứa đường vuông góc đáy.

    ??? tip "Kiểm lỗi"

        Không chuyển kết luận đúng cho mặt \((SAB)\) thành kết luận cho **mọi** mặt bên. Đường dùng để chứng minh phải **nằm trong chính mặt đang xét**.
