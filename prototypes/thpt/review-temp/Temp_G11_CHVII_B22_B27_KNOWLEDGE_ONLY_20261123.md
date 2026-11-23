# G11 Chương VII (B22–B27) — Toàn bộ snapshot Kiến thức cần phản biện NotebookLM

PACKET_ID|G11_CHVII_B22_B27_KNOWLEDGE_ONLY_REVIEW_20261123
STANDARD_ID|SLM-THPT-QUALITY-ONE
STANDARD_VERSION|3.2.0
PERMANENT_SOURCES_VERSION|THPT-v2.1
REVIEW_SCOPE|ONLY_LEARNER_KNOWLEDGE_TABS_SGK_G11_CHVII_B22_B27
PACKET_STATUS|CANDIDATE_AUTHORING_SNAPSHOTS_AWAIT_INDEPENDENT_REVIEW
CONTENT_READY|NO
RELEASE_AUTHORIZATION|NO
MASTERY_ACTIVATION|NO

## Quy định độc lập

Đây là snapshot được trích **nguyên văn** từ sáu PR AUTHORING ở HEAD đã khóa. Bài 22–27 KHÔNG hợp nhất thành một version của website; mỗi bản thảo là PR độc lập, cùng dựa trên main và cần review đúng SHA. Đây **không** phải nghiệm thu phát hành, không tự cấp PASS. Phạm vi thay đổi chỉ trang Kiến thức (4 tab) và hình SVG minh họa, không đánh giá lại Core/Luyện tập, ngân hàng item, Rubric, RD1, tự kiểm tra cuối chương và Mastery đã khóa. Mỗi hình SVG thực tế được chèn trong các tab cần được đối chiếu với XML/ALT/figcaption; browser pixel QA chưa có và phải giữ P2. Nếu chưa có scan SGK/SBT gốc có đối chiếu trang in–PDF, giữ SOURCE_VISUAL_OFFSET_HOLD, không tự suy số chỉ mục PDF.

## Nguồn thẩm quyền phải có trong NotebookLM

Đúng **5 Permanent Sources Toán THPT v2.1** đã thay thế toàn bộ v2.0, cộng file Temp này và **SGK/SBT Toán 11 Kết nối tri thức tập hai S1**. Chỉ một chuẩn thống nhất Q01–Q18 `SLM-THPT-QUALITY-ONE` v3.2.0 trên GitHub main, không tạo chuẩn thứ hai. Nếu thiếu S1/SGK hoặc chưa đối chiếu được một công thức/hình, đánh dấu SOURCE_HOLD, KHÔNG cấp PASS bằng suy đoán. File này gồm learner Markdown nguyên văn; các SVG được bổ sung ở phụ lục (đang khóa theo từng bản SHA).

## Danh mục snapshot cố định (Git blob SHA là receipt của nội dung learner)

| Bài | PR DRAFT | HEAD | LEARNER_BLOB | File | SVG tham chiếu |
|---|---|---|---|---|---|
| B22 | #1048 | `5b40c5c8d03ad4e6fe02fbca2df4729bec51be9a` | `7e175e84c93e61ac554ef0c037a9e006b6852e69` | `docs/thpt-preview/sgk/lop-11/chuong-vii/bai-22.md` | 3 |
| B23 | #1049 | `fa5b96f9ae0eab840065033d4c0ce9e5d0059994` | `42446d25328308ed23e6c4e3b3444012e1662a38` | `docs/thpt-preview/sgk/lop-11/chuong-vii/bai-23.md` | 3 |
| B24 | #1050 | `f2a35940864abd6a8e76da5d5b6bfded89f44b6f` | `720079470b25e79ec122a52e1ec051beda01dba8` | `docs/thpt-preview/sgk/lop-11/chuong-vii/bai-24.md` | 3 |
| B25 | #1052 | `4b0e5f754e62d5a1178500f0ad53fa592cca9370` | `79f444209a0c88a4538ddb495adbac3e7726452c` | `docs/thpt-preview/sgk/lop-11/chuong-vii/bai-25.md` | 7 |
| B26 | #1054 | `771e01b2896d400b14ecdfaff44e8f76f54d4e13` | `25d0234f560c186b89286366e73ce80ce2ce603c` | `docs/thpt-preview/sgk/lop-11/chuong-vii/bai-26.md` | 10 |
| B27 | #1056 | `0a6aad2abda914b4afb2135d0e79f09ca0572045` | `e4678ec42ee3a7a38a784877adbb20c08d0f974a` | `docs/thpt-preview/sgk/lop-11/chuong-vii/bai-27.md` | 6 |

## Ma trận yêu cầu reviewer

Đối chiếu ĐÚNG SGK từng bài/outcome và hình thật, Q01–Q14; đặc biệt hình cắt/góc nhị diện và định lí đường–mặt B22–25, đoạn vuông góc chung/điều kiện B26, cao xiên/chóp cụt và công thức thể tích B27. Đánh giá độc lập nội dung hai tab Khám phá và Kiến thức SGK; với mỗi ví dụ, kiểm đề–phân tích–lời giải–kiểm lại;  Vận dụng phải được tự thử trước khi mở Đối chiếu; D6 nêu lỗ hổng và cách sửa. Kiểm no collision canonical ID (Q15) và an toàn không lộ RD1/ghi Mastery trước Final Submit (Q16) trong phạm vi diff; không đánh giá lại các phần nguồn đã khóa. Kiểm Q17 hai hành trình độc lập và Q18 SHA khớp. Chỉ ra từng phát hiện có `LESSON_ID`, `OUTCOME_ID`/đoạn, nguồn chứng cứ, mức P0/P1/P2, `MINIMAL_DELTA`; trả `ACADEMIC_VERDICT` + `PED_VERDICT` theo từng bài, `SOURCE_RECEIPT`, `EXPOSURE_SYSTEM_VERDICT`, `CONTENT_READY` (không tự cấp) và phạm vi `DELTA`.

## SNAPSHOT LEARNER MARKDOWN — NGUYÊN VĂN TỪ GITHUB

## === BEGIN G11-CHVII-B22 | PR#1048 | HEAD 5b40c5c8d03ad4e6fe02fbca2df4729bec51be9a | BLOB 7e175e84c93e61ac554ef0c037a9e006b6852e69 ===

# Bài 22. Hai đường thẳng vuông góc

<style>
/* Scoped authoring B22 only. Never change Golden CSS/JS shared by THPT or THCS. */
.md-typeset:has([data-g11-b22-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card{background:#e8f7f2;border:1px solid #a9dccc;border-left:4px solid #087d69;color:#174137}
.md-typeset:has([data-g11-b22-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card{background:#eaf1fc;border:1px solid #a5bee5;border-left:4px solid #4879c2;color:#193d66}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b22-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card{background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b22-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card{background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}
</style>

<div class="thpt-r4-screen" data-thpt-r4 data-g11-b22-knowledge-only>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VII · SGK KẾT NỐI TRI THỨC · TẬP HAI</p>
<p class="thpt-r4-lead">Từ nút giao khác mức đến hình hộp: chuyển các phương chéo nhau về cùng một điểm để đo góc, rồi chứng minh vuông góc bằng quan hệ song song thay vì nhìn phối cảnh.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương VII</a><a href="../luyen-tap/">Core/Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    **Vì sao học?** Hai nhánh đường ở hai tầng cầu vượt có thể không cắt nhau. Ta không thể đặt thước đo góc tại giao điểm không tồn tại, nhưng vẫn so sánh được **hướng** của chúng. Ở Chương IV, em đã biết các đường thẳng song song có cùng phương. Bài này dùng điều đó để đo góc giữa hai đường, kể cả khi chúng chéo nhau trong không gian.

    ### 1.1. Góc giữa hai đường thẳng

    **Hình thành bản chất theo HĐ1 SGK:** Hai đường \(m,n\) chéo nhau. Lấy điểm \(O\), dựng \(a\parallel m\), \(b\parallel n\) qua \(O\), rồi đo góc không tù giữa \(a,b\). Nếu thay \(O\) bằng \(O'\), vẫn dựng các đường theo **hai phương cũ**, kết quả góc không đổi. SGK minh họa việc đó qua các hình bình hành và định lí côsin: dời một phương song song không làm thay đổi góc. Vì vậy, **góc giữa hai đường thẳng** là góc của **hai phương**, không phụ thuộc vị trí đường trong không gian.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B22-01_R00.svg" alt="Sơ đồ dời hai phương của đường a và b tới hai đường song song a phẩy b phẩy qua O"><figcaption><strong>Hướng dẫn đọc hình:</strong> \(a,b\) là các phương ban đầu; \(a',b'\) nét đứt được dựng qua \(O\), song song tương ứng. Dấu góc vuông được đọc tại \(O\). Đây chỉ là sơ đồ **các phương**, không phải chứng minh rằng \(a,b\) trong hình thực tế chắc chắn chéo nhau; không đo độ dài/góc từ nét vẽ.</figcaption></figure>

    **Góc nào được chọn?** Hai đường không có hướng ưu tiên. Nếu hai **tia** tạo góc \(120^\circ\), góc giữa hai **đường thẳng chứa các tia** được lấy là \(60^\circ\), vì hai góc kề bù là \(120^\circ\) và \(60^\circ\). Nói chung \(0^\circ\le(m,n)\le90^\circ\). Với hai đường song song hoặc trùng nhau, góc bằng \(0^\circ\).

    **Cách chọn phương pháp:** Khi hai đường không gặp nhau, chọn một đường \(b'\parallel b\) đi qua điểm \(O\) thuộc đường \(a\) nếu thuận lợi. Sau đó tìm một **tam giác cụ thể** chứa hai phương đã đưa về một điểm; dùng góc đặc biệt, định lí côsin hoặc quan hệ vuông góc có chứng minh. Không được tự coi góc do hai nét vẽ cắt nhau trên giấy là góc thật trong không gian.

    **Tình huống hình hộp chữ nhật:** \(AB\) là cạnh đáy trước, \(CC'\) là cạnh đứng phía sau; chúng chéo nhau. Vì \(CC'\parallel AA'\) và \(AB\perp AA'\), nên \((AB,CC')=(AB,AA')=90^\circ\). Hình dưới cho thấy rõ cần **đưa phương đứng về cạnh \(AA'\)**, chứ không nối nhầm \(AB\) tới \(CC'\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B22_SKEW_PERP_RECTANGULAR_BOX_AUTHORING_20261123.svg" alt="Hình hộp chữ nhật AB song song mặt đáy và CC phẩy là cạnh đứng ở phía sau, dời CC phẩy đến AA phẩy để tính góc vuông"><figcaption><strong>Hướng dẫn đọc:</strong> đường xanh \(AB\) và đường cam \(CC'\) không cắt nhau, không song song; đường lục \(AA'\parallel CC'\). Dấu vuông tại \(A\) cho \(AB\perp AA'\), suy \(AB\perp CC'\). Không đo từ phối cảnh.</figcaption></figure>

    **Ví dụ ứng dụng SGK — Kim tự tháp Kheops:** Đáy \(ABCD\) là hình vuông cạnh khoảng \(230\) m, các cạnh bên \(SA,SB,SC,SD\) dài khoảng \(219\) m. Muốn tính góc giữa \(SC\) và \(AB\), thay **\(AB\parallel CD\)** để có \((SC,AB)=(SC,CD)=\angle SCD\). Trong tam giác cân \(SCD\), định lí côsin cho
    \[
    \cos\angle SCD=\frac{SC^2+CD^2-SD^2}{2SC\cdot CD}
    =\frac{230}{2\cdot219}.
    \]
    Vậy góc cần tìm xấp xỉ **\(58{,}3^\circ\)** theo dữ kiện, không phải đo bằng thước trên ảnh.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B22_KHEOPS_ANGLE_AUTHORING_20261123.svg" alt="Hình chóp đáy vuông cạnh 230 mét, cạnh bên 219 mét; cạnh AB song song CD và tam giác cân SCD để tính góc giữa SC và AB"><figcaption><strong>Hướng dẫn đọc:</strong> đường \(AB\) và \(CD\) tô xanh song song; xét tam giác \(SCD\) có \(SC=SD=219\) m, \(CD=230\) m. Góc tại \(C\) là góc không tù giữa \(SC,CD\), bằng góc cần tìm giữa \(SC,AB\).</figcaption></figure>

    **Vận dụng.** Trong lăng trụ \(ABC.A'B'C'\) có đáy \(ABC\) là tam giác đều, tính \((AB,B'C')\). Vì sao được thay \(B'C'\) bằng \(BC\)?

    ??? question "Đối chiếu"

        **Lời giải:** Các cạnh tương ứng của hai đáy lăng trụ song song, nên \(B'C'\parallel BC\). Do đó \((AB,B'C')=(AB,BC)=\angle ABC=60^\circ\), vì \(ABC\) đều. Hai đoạn ban đầu không cần gặp nhau.

    ??? tip "Kiểm lỗi"

        Đừng dùng góc \(120^\circ\) của các tia định hướng làm góc giữa hai **đường thẳng**; góc giữa đường luôn trong \([0^\circ,90^\circ]\).

    ### 1.2. Hai đường thẳng vuông góc

    **Điều bất ngờ của hình học không gian:** Vuông góc không bắt buộc đồng nghĩa “cắt nhau tại một điểm”. SGK định nghĩa hai đường \(a,b\) vuông góc khi **góc giữa hai phương bằng \(90^\circ\)**, kí hiệu \(a\perp b\). Nếu hai đường chéo nhau mà có phương vuông góc, chúng vẫn **vuông góc**. Cặp \(AB,CC'\) của hình hộp ở trên là một ví dụ cụ thể.

    **Tại sao thay đường song song được?** Vì góc giữa hai đường được định nghĩa bằng **phương**, nếu \(a\perp b\) và \(b'\parallel b\), thì \((a,b')=(a,b)=90^\circ\). Nhưng **không được đảo ngược suy luận** rằng nếu \(a\perp c\) và \(b\perp c\) thì \(a\parallel b\). Chẳng hạn hai trục \(Ox\) và \(Oy\) đều vuông góc \(Oz\), nhưng lại vuông góc nhau, không song song.

    **Ví dụ SGK — Hình hộp và hình thoi:** Cho hình hộp \(ABCD.A'B'C'D'\) có đáy \(ABCD\) là hình bình hành. Vì \(B'D'\parallel BD\), \((AC,B'D')=(AC,BD)\). Hai đường \(AC,B'D'\) chéo nhau, và **vuông góc khi và chỉ khi** \(AC\perp BD\). Trong hình bình hành, hai đường chéo vuông góc **khi và chỉ khi** hình đó là hình thoi. Vậy đây là điều kiện chính xác để \(AC\perp B'D'\); không suy từ giả thiết “hình bình hành” không thôi.

    **Vận dụng.** Một hình hộp có đáy là hình vuông. Hai đường \(AC\) và \(B'D'\) có giao nhau không? Chúng có vuông góc không?

    ??? question "Đối chiếu"

        **Lời giải:** Hai đường nằm ở hai mặt phẳng đáy và mặt trên song song, không có điểm chung. \(B'D'\parallel BD\), còn \(AC\) không song song \(BD\), nên chúng chéo nhau. Vì hai đường chéo của hình vuông \(AC\perp BD\), suy \(AC\perp B'D'\).

    ??? tip "Kiểm lỗi"

        Không kết luận “không cắt thì không vuông góc”. Đáy chỉ là hình bình hành chưa đủ: phải có hai đường chéo vuông góc, tương đương đáy là hình thoi.

=== "Kiến thức SGK"

    ### 2.1. Góc giữa hai đường thẳng

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Góc giữa hai đường thẳng</strong><p>Trong không gian, góc giữa hai đường thẳng \(m,n\), kí hiệu \((m,n)\), là góc không tù giữa hai đường \(a,b\) cùng đi qua một điểm \(O\) và tương ứng song song (cùng phương) với \(m,n\). Kết quả không phụ thuộc vị trí \(O\). Với hai đường bất kì, \(0^\circ\le(m,n)\le90^\circ\). Hai đường song song hoặc trùng nhau có góc \(0^\circ\).</p></div>

    **Cách xác định có lí do:** Chọn \(O\) trên một đường nếu tiện và kẻ đường qua \(O\) song song đường còn lại. Dùng góc không tù tại \(O\), hoặc góc bù của góc tù. Nếu không nhận ra góc đặc biệt, tìm tam giác chứa hai phương và dùng định lí côsin từ các độ dài đã biết. Tránh đo trực tiếp từ hình vẽ phối cảnh.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B22-01_R00.svg" alt="Sơ đồ góc giữa hai phương được thay bằng hai đường song song tương ứng gặp nhau tại O"><figcaption><strong>Tra sơ đồ:</strong> nét đứt xanh lục qua \(O\) thể hiện phương đã dời song song. Góc ở \(O\) là góc giữa hai phương; đây không phải hình không gian đầy đủ chứng minh hai đường \(a,b\) chéo nhau.</figcaption></figure>

    **Ví dụ SGK — Các góc trong hình lập phương:** Với \(ABCD.A'B'C'D'\) có tất cả mặt là hình vuông, \((AA',CD)=(AA',AB)=90^\circ\) vì \(CD\parallel AB\); \((A'C',BD)=(AC,BD)=90^\circ\) vì \(A'C'\parallel AC\); \((AC,DC')=(AC,AB')=60^\circ\) vì \(DC'\parallel AB'\) và \(AB'C\) là tam giác đều.

    **Ứng dụng với số đo:** Kim tự tháp đáy vuông cạnh \(230\) m, các cạnh bên \(219\) m: \((SC,AB)=(SC,CD)=\angle SCD\) vì \(AB\parallel CD\). Tam giác cân \(SCD\) cho \(\cos\angle SCD=230/(2\cdot219)\), nên góc gần \(58{,}3^\circ\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B22_KHEOPS_ANGLE_AUTHORING_20261123.svg" alt="Sơ đồ kim tự tháp Kheops và tam giác cân SCD tính góc giữa SC và cạnh AB song song CD"><figcaption><strong>Tra hình:</strong> chuyển \(AB\) sang cạnh song song \(CD\) ở đáy, rồi tính góc \(SCD\) bằng tam giác cân ở khung phải. Các độ dài và kết quả đều xuất phát từ dữ kiện, không từ tỉ lệ hình chiếu.</figcaption></figure>

    ### 2.2. Hai đường thẳng vuông góc

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Hai đường thẳng vuông góc</strong><p>Hai đường \(a,b\) trong không gian <strong>vuông góc</strong>, kí hiệu \(a\perp b\), khi <strong>\((a,b)=90^\circ\)</strong>. Hai đường vuông góc có thể cắt nhau hoặc chéo nhau; chúng không bắt buộc đồng phẳng.</p></div>

    **Nhận xét:** Nếu \(a\perp b\), \(b'\parallel b\), thì \(a\perp b'\), vì góc không đổi khi thay một đường bằng đường song song. Ngược lại, cùng vuông góc một đường thứ ba không có nghĩa hai đường song song trong không gian.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B22_SKEW_PERP_RECTANGULAR_BOX_AUTHORING_20261123.svg" alt="Hình hộp chữ nhật cho thấy AB và CC phẩy chéo nhau nhưng vuông góc do CC phẩy song song AA phẩy"><figcaption><strong>Tra hình:</strong> \(CC'\parallel AA'\), \(AB\perp AA'\) trong hình hộp chữ nhật; do đó \(AB\perp CC'\) dù hai cạnh không cắt nhau.</figcaption></figure>

    **Ví dụ SGK — Phân biệt hình bình hành và hình thoi:** Trong hình hộp \(ABCD.A'B'C'D'\), hai đường \(AC,B'D'\) chéo nhau, với \(B'D'\parallel BD\). Vì thế \(AC\perp B'D'\) **khi và chỉ khi** \(AC\perp BD\) **khi và chỉ khi** đáy \(ABCD\) là hình thoi.

    | Cặp đường | Góc giữa hai đường | Có thể vuông góc? |
    | :-- | :-- | :-- |
    | Song song/trùng | \(0^\circ\) | Không |
    | Cắt nhau | Góc nhỏ tại giao điểm | Có, nếu \(90^\circ\) |
    | Chéo nhau | Góc của hai phương dời qua một điểm | Có, nếu \(90^\circ\) |

    **Quy trình tự kiểm:** Tìm quan hệ song song thật, thay bằng đường qua điểm thuận lợi, tính góc qua tam giác hoặc hình đặc biệt, rồi so với \(90^\circ\). Không khẳng định vuông góc vì trông vuông trên giấy.

=== "Ví dụ"

    ### 3.1. Phân biệt góc của hai tia và hai đường

    **Đề bài.** Hai tia có chung gốc tạo góc \(125^\circ\). Tính góc giữa hai đường thẳng chứa hai tia đó và giải thích tại sao không lấy \(125^\circ\).

    **Phân tích:** Góc giữa các **đường** là góc không tù; một đường không có chiều, nên có thể thay một tia bằng tia đối và lấy góc bù.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.1"><p><strong>Lời giải.</strong> Hai góc kề bù là \(125^\circ\) và \(180^\circ-125^\circ=55^\circ\). Góc giữa hai đường thẳng phải thuộc \([0^\circ,90^\circ]\), vì vậy kết quả là \(55^\circ\).</p></div>

    **Kiểm lại:** \(55^\circ\) không tù; nếu hai tia tạo góc \(90^\circ\) thì góc hai đường vẫn là \(90^\circ\).

    ### 3.2. Cạnh đứng và cạnh đáy của hình lập phương

    **Đề bài.** Trong hình lập phương \(ABCD.A'B'C'D'\), tính góc \((AA',CD)\).

    **Phân tích:** Hai đường không gặp nhau. Đáy là hình vuông nên \(CD\parallel AB\); cạnh đứng \(AA'\) vuông góc với \(AB\). Đây là đường thay thế hợp lệ qua \(A\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.2"><p><strong>Lời giải.</strong> Vì \(CD\parallel AB\), \((AA',CD)=(AA',AB)\). Hai cạnh \(AA'\) và \(AB\) của hình lập phương gặp nhau tại \(A\) và vuông góc, nên \((AA',CD)=90^\circ\).</p></div>

    **Kiểm lại:** Kết luận từ hai **phương song song và cạnh vuông góc**, không phải từ việc hai nét trông vuông trên bản vẽ.

    ### 3.3. Hai đường chéo mặt khác nhau của hình lập phương

    **Đề bài.** Trong hình lập phương \(ABCD.A'B'C'D'\), tính \((A'C',BD)\).

    **Phân tích:** \(A'C'\) là đường chéo mặt trên, song song đường chéo \(AC\) tương ứng của mặt đáy. Đáy hình vuông có hai đường chéo \(AC,BD\) vuông góc.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.3"><p><strong>Lời giải.</strong> Do hai mặt đáy song song và tương ứng, \(A'C'\parallel AC\). Vì \(ABCD\) là hình vuông nên \(AC\perp BD\). Suy ra \((A'C',BD)=(AC,BD)=90^\circ\).</p></div>

    **Kiểm lại:** \(A'C'\) và \(BD\) thuộc hai mặt phẳng song song nên không cắt nhau; vẫn vuông góc theo góc giữa hai phương.

    ### 3.4. Góc 60 độ trong hình lập phương

    **Đề bài.** Với hình lập phương \(ABCD.A'B'C'D'\) cạnh \(a>0\), tính góc giữa \(AC\) và \(DC'\).

    **Phân tích:** \(DC'\parallel AB'\) vì các đoạn này cùng có hướng theo một cạnh đáy và một cạnh đứng. Do đó bài toán đưa về \((AC,AB')\). Chọn tam giác \(AB'C\) để tính góc tại \(A\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.4"><p><strong>Lời giải.</strong> Trong hình lập phương, \(DC'\parallel AB'\). Ba cạnh \(AC,AB',B'C\) đều là đường chéo của các hình vuông cạnh \(a\), nên cùng dài \(a\sqrt2\). Tam giác \(AB'C\) đều, vì vậy \(\angle CAB'=60^\circ\). Suy ra \((AC,DC')=(AC,AB')=60^\circ\).</p></div>

    **Kiểm lại:** Ba đoạn cùng dài \(a\sqrt2\) là **cạnh của tam giác trong không gian**; không phải cứ thấy ba đoạn vẽ tương đương mới được kết luận đều. Dấu góc không vượt \(90^\circ\).

    ### 3.5. Vuông góc nhưng hai đường chéo nhau

    **Đề bài.** Hình hộp chữ nhật \(ABCD.A'B'C'D'\): chứng minh \(AB\perp CC'\), xác định vị trí tương đối của hai đường.

    **Phân tích:** \(AB\) là cạnh nằm trong đáy, \(CC'\) là cạnh đứng khác đỉnh; thay \(CC'\) bằng \(AA'\parallel CC'\) để có hai đường chung điểm \(A\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.5"><p><strong>Lời giải.</strong> Vì hình hộp chữ nhật, \(AB\perp AA'\) và \(CC'\parallel AA'\). Do đó \((AB,CC')=(AB,AA')=90^\circ\), tức \(AB\perp CC'\). Hai đường \(AB,CC'\) không song song, không cắt nhau, nên <strong>chéo nhau</strong>.</p></div>

    **Kiểm lại:** Không được nói “hai đường vuông góc nên chúng cắt tại một điểm”: trong không gian, quan hệ vuông góc là quan hệ giữa hai phương.

    ### 3.6. Khi nào hai đường chéo ở hai mặt song song vuông góc?

    **Đề bài.** Cho hình hộp \(ABCD.A'B'C'D'\) có đáy \(ABCD\) là hình bình hành không suy biến. Chứng minh \(AC\perp B'D'\) khi và chỉ khi đáy là hình thoi.

    **Phân tích:** \(B'D'\parallel BD\); do đó cần chứng minh điều kiện vuông góc của hai đường chéo \(AC,BD\) của **hình bình hành**. Với hình bình hành, hai đường chéo cắt nhau tại trung điểm \(O\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.6"><p><strong>Lời giải.</strong> Vì \(B'D'\parallel BD\), \(AC\perp B'D'\iff AC\perp BD\). Nếu đáy là hình thoi thì hai đường chéo vuông góc. Ngược lại, nếu \(AC\perp BD\), giao điểm \(O\) là trung điểm cả hai đường chéo, nên trong hai tam giác vuông \(AOB,AOD\) ta có \(OA\) chung và \(OB=OD\); do đó \(AB=AD\). Hình bình hành có hai cạnh kề bằng nhau là hình thoi. Vậy điều kiện là cần và đủ.</p></div>

    **Kiểm lại:** Không nhầm **hình bình hành** với **hình thoi**. Nếu đáy chỉ là hình chữ nhật không vuông, hai đường chéo thường không vuông góc.

    ### 3.7. Hai cạnh tương ứng của lăng trụ tam giác đều

    **Đề bài.** Lăng trụ \(ABC.A'B'C'\) có hai đáy là tam giác đều. Tính \((AB,B'C')\).

    **Phân tích:** Chọn một cạnh tại đáy song song \(B'C'\): theo tính chất lăng trụ, \(B'C'\parallel BC\). Khi đó góc giữa hai đường được tính trên tam giác đều \(ABC\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.7"><p><strong>Lời giải.</strong> \((AB,B'C')=(AB,BC)\). Vì \(ABC\) là tam giác đều, góc giữa hai **đường thẳng** \(AB,BC\) bằng góc nhọn \(\angle ABC=60^\circ\). Vậy kết quả \(60^\circ\).</p></div>

    **Kiểm lại:** Nếu xét vectơ \(\overrightarrow{AB}\) và \(\overrightarrow{BC}\) có thể gặp góc \(120^\circ\); góc **hai đường** được lấy \(60^\circ\).

    ### 3.8. Góc cạnh bên kim tự tháp Kheops (SGK)

    **Đề bài.** Mô hình kim tự tháp \(S.ABCD\) có đáy vuông cạnh \(230\) m và các cạnh bên \(219\) m. Tính gần đúng góc giữa đường \(SC\) và đường \(AB\), làm tròn đến \(0{,}1^\circ\).

    **Phân tích:** Hai đường ban đầu không nhất thiết cắt. Thay \(AB\) bằng \(CD\parallel AB\), rồi xét tam giác cân \(SCD\) biết ba cạnh. Sử dụng định lí côsin cho góc ở \(C\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.8"><p><strong>Lời giải.</strong> \((SC,AB)=(SC,CD)=\angle SCD\). Theo định lí côsin trong tam giác \(SCD\), \(\cos\angle SCD=\dfrac{SC^2+CD^2-SD^2}{2SC\cdot CD}=\dfrac{230}{2\cdot219}=\dfrac{115}{219}\). Do đó \((SC,AB)=\arccos(115/219)\approx58{,}3^\circ\).</p></div>

    **Kiểm lại:** \(115/219\) nằm trong \((0,1)\), phù hợp góc nhọn. Dùng \(230/219>1\) làm cos sẽ vô lí; luôn kiểm công thức và các cạnh trong định lí côsin.

=== "Lỗi thường gặp"

    ### 4.1. Cứ vuông góc thì phải cắt nhau

    **Dấu hiệu:** Không chấp nhận \(AB\perp CC'\) trong hình hộp vì hai cạnh không gặp nhau.

    **Vì sao sai:** Góc hai đường trong không gian xác định từ **hai phương song song được đưa về một điểm**, nên hai đường vuông góc có thể chéo nhau.

    **Cách sửa:** Thay \(CC'\) bằng \(AA'\parallel CC'\), rồi kiểm \(AB\perp AA'\). Phân biệt “vuông góc” và “cắt nhau”.

    ### 4.2. Lấy góc tù giữa các tia thay cho góc hai đường

    **Dấu hiệu:** Trả \(125^\circ\) là góc giữa hai đường thẳng.

    **Vì sao sai:** Góc giữa đường được quy ước không tù: từ \(0^\circ\) đến \(90^\circ\).

    **Cách sửa:** Nếu góc từ hai tia đã chọn là \(125^\circ\), lấy góc bù \(55^\circ\); kiểm kết quả không vượt \(90^\circ\).

    ### 4.3. Thấy hai đoạn song song trên giấy là đủ để suy góc

    **Dấu hiệu:** Đo đường trên hình phối cảnh, dùng kết quả như góc thật của khối.

    **Vì sao sai:** Hình chiếu làm thay đổi độ dài/góc; chỉ các quan hệ song song/vuông góc có căn cứ hình học mới cho phép chuyển phương.

    **Cách sửa:** Ghi rõ \(CD\parallel AB\), \(CC'\parallel AA'\) hoặc định lí hình hộp, rồi tính trên tam giác có độ dài đã biết.

    ### 4.4. Hai đường cùng vuông góc đường thứ ba thì song song

    **Dấu hiệu:** Từ \(a\perp c,b\perp c\), kết luận \(a\parallel b\) trong không gian.

    **Vì sao sai:** Ví dụ trục \(Ox\perp Oz,Oy\perp Oz\), nhưng \(Ox\perp Oy\). Các đường cùng vuông góc một phương có thể có nhiều hướng.

    **Cách sửa:** Muốn kết luận song song phải có quan hệ riêng đủ chứng minh; không áp máy móc tính chất hình học phẳng khi thiếu giả thiết.

    ### 4.5. Hình bình hành nào cũng có đường chéo vuông góc

    **Dấu hiệu:** Với đáy hình bình hành bất kì, kết luận ngay \(AC\perp B'D'\).

    **Vì sao sai:** \(B'D'\parallel BD\), nên điều kiện cần là \(AC\perp BD\); với hình bình hành, điều này đúng **khi và chỉ khi** đáy là hình thoi.

    **Cách sửa:** Kiểm cạnh kề bằng nhau hoặc chứng minh trực tiếp hai đường chéo đáy vuông góc, rồi mới chuyển qua \(B'D'\).

    ### 4.6. Dùng sai tam giác hoặc mẫu số trong định lí côsin

    **Dấu hiệu:** Tính góc kim tự tháp bằng \(230/219\) như cos góc cạnh bên–cạnh đáy.

    **Vì sao sai:** \(230/219>1\) không thể là cos một góc. Chỉ biết hai cạnh là chưa đủ nếu bỏ cạnh thứ ba và không dựng đúng tam giác \(SCD\).

    **Cách sửa:** Viết \((SC,AB)=(SC,CD)=\angle SCD\), xác định \(SC=SD=219,CD=230\), dùng \(\cos\angle SCD=(SC^2+CD^2-SD^2)/(2SC\cdot CD)=230/438\).

    **Học tiếp:** [Core/Luyện tập Bài 22](luyen-tap.md) · [Tự luận Chương VII](../../../thu-vien/tu-luan-g11-chuong-vii.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">Nguồn S1: SGK Toán 11 Kết nối tri thức với cuộc sống, tập hai, Bài 22 “Hai đường thẳng vuông góc”, trang in 27–30, đúng hai mục chính: “Góc giữa hai đường thẳng” và “Hai đường thẳng vuông góc”; bản PDF số hóa có văn bản về HĐ1/HĐ2, Ví dụ 1–2, vận dụng Kheops. Đã đọc SGK số hóa, nhưng kiểm screenshot ảnh trang PDF và offset trang in↔chỉ số PDF vẫn SOURCE_VISUAL_HOLD. Hình dời phương cũ đã được tái sử dụng nguyên vẹn; bổ sung hình hộp và mô hình kim tự tháp khi thiếu minh họa cụ thể, đặt sát hướng dẫn đọc hình ở hai tab đầu. Không sửa Core/Luyện tập, Tự kiểm tra hoặc dữ liệu đánh giá.</p>


## === END G11-CHVII-B22 ===

## === BEGIN G11-CHVII-B23 | PR#1049 | HEAD fa5b96f9ae0eab840065033d4c0ce9e5d0059994 | BLOB 42446d25328308ed23e6c4e3b3444012e1662a38 ===

# Bài 23. Đường thẳng vuông góc với mặt phẳng

<style>
/* Scope only this B23 learner page; keep Golden UI, Core and shared runtime frozen. */
.md-typeset:has([data-g11-b23-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card{background:#e8f7f2;border:1px solid #a9dccc;border-left:4px solid #087d69;color:#174137}
.md-typeset:has([data-g11-b23-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card{background:#eaf1fc;border:1px solid #a5bee5;border-left:4px solid #4879c2;color:#193d66}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b23-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card{background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b23-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card{background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}
</style>

<div class="thpt-r4-screen" data-thpt-r4 data-g11-b23-knowledge-only>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VII · KẾT NỐI TRI THỨC · TẬP HAI</p>
<p class="thpt-r4-lead">Từ cột dựng trên sàn đến pháp tuyến: hiểu đường thẳng vuông góc cả mặt phẳng, vì sao kiểm hai đường cắt nhau là đủ, tính chất mặt phẳng trung trực và liên hệ với các quan hệ song song.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương VII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    **Vì sao cần học?** Một cột treo đồ phải **đứng vuông góc với mặt sàn**, không chỉ vuông góc với một vạch kẻ trên sàn. Ở Bài 22, em đã biết hai đường thẳng vuông góc nếu phương chúng tạo góc \(90^\circ\); hai đường có thể chéo nhau. Nhưng một mặt phẳng chứa vô số đường, nên phát biểu “đường vuông góc với cả mặt phẳng” cần ý nghĩa rõ ràng và một cách kiểm thực hiện được. Bài này tiến từ định nghĩa đến tính chất, rồi tới quan hệ song song.

    ### 1.1. Đường thẳng vuông góc với mặt phẳng

    **Hình thành theo hoạt động cánh cửa của SGK:** Cạnh bản lề đứng của cánh cửa vuông góc với sàn theo mọi hướng nằm ngang, không chỉ với mép dưới cửa. Ta gọi một đường \(\Delta\) **vuông góc với mặt phẳng \((P)\)** khi \(\Delta\) vuông góc với **mọi đường** nằm trong \((P)\). Đường \(\Delta\) cắt mặt phẳng tại một điểm gọi là **chân đường vuông góc**. Bằng cách diễn đạt từ **mọi đường**, ta tránh nhầm “vuông góc với một đường trong mặt phẳng” thành “vuông góc với cả mặt phẳng”.

    **Tại sao không phải kiểm vô số đường?** Trong một mặt phẳng, nếu biết hai **phương cắt nhau**, ta xác định được các hướng của mặt phẳng đó. Một đường vuông góc với **cả hai đường cắt nhau** nằm trong \((P)\) thì vuông góc với **toàn bộ mặt phẳng \((P)\)**. Đây là tiêu chuẩn chứng minh quan trọng của SGK. Hai đường dùng để kiểm phải **cắt nhau**, không được chỉ song song: hai đường song song chỉ cho **một hướng**.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B23-01_R00.svg" alt="Mặt phẳng P có AB AD cắt nhau tại A và cạnh AH vuông góc cả hai đường nên vuông góc với mặt phẳng"><figcaption><strong>Hướng dẫn đọc:</strong> \(AB\) màu xanh và \(AD\) màu lục thuộc \((P)\), **cắt nhau tại \(A\)**. Cạnh đỏ \(AH\) vuông góc cả hai nên \(AH\perp(P)\). Hình là sơ đồ quan hệ; dấu góc vuông phải có căn cứ từ giả thiết, không đo bằng mắt từ phối cảnh.</figcaption></figure>

    **Ví dụ SGK:** Hình chóp \(S.ABC\) có tam giác đáy \(ABC\) vuông tại \(B\) và \(SA\perp AB,\,SA\perp AC\). Vì \(AB,AC\) cắt tại \(A\) và thuộc \((ABC)\), suy \(SA\perp(ABC)\); do đó \(SA\perp BC\). Lại có \(BC\perp BA\) vì tam giác đáy vuông tại \(B\). Hai đường \(SA,BA\) cắt nhau tại \(A\) và cùng nằm trong \((SAB)\), vậy **\(BC\perp(SAB)\)**. Lập luận này có **hai lần dùng tiêu chuẩn hai đường cắt nhau**, chứ không phải vuông góc với một đường là đủ.

    **Vận dụng.** Trên một mặt sàn \((P)\), hai thanh gỗ \(a,b\) cắt nhau tại \(O\). Một cột \(d\) vuông góc cả \(a,b\). Có thể kết luận gì? Nếu \(a\parallel b\) thì kết luận đó còn được bảo đảm không?

    ??? question "Đối chiếu"

        **Lời giải:** Nếu \(a,b\) **cắt nhau trong \((P)\)** và \(d\perp a,d\perp b\), tiêu chuẩn hai đường cắt nhau cho \(d\perp(P)\). Nếu chỉ \(a\parallel b\), hai điều kiện trên mới kiểm **một phương**, nên **chưa đủ** kết luận \(d\perp(P)\).

    ??? tip "Kiểm lỗi"

        Không đổi điều kiện “hai đường cắt nhau trong cùng mặt phẳng” thành “hai đường bất kì cùng mặt phẳng”. Song song không tạo ra hai phương độc lập để kiểm toàn mặt phẳng.

    ### 1.2. Tính chất

    **Từ một đường pháp tuyến đến cả một mặt phẳng:** SGK cho biết qua mỗi điểm \(O\) có duy nhất **một mặt phẳng** vuông góc một đường \(\Delta\) cho trước; và qua mỗi điểm \(A\) có duy nhất **một đường thẳng** vuông góc một mặt phẳng \((P)\) cho trước. Hai phát biểu khác nhau ở **đối tượng được xác định**. Phải đọc rõ “qua một điểm, có duy nhất cái gì?” trước khi vận dụng.

    **Mặt phẳng trung trực của đoạn \(AB\):** Gọi \(I\) là trung điểm \(AB\). Mặt phẳng \((\alpha)\) đi qua \(I\), vuông góc \(AB\), được gọi là mặt phẳng trung trực của đoạn \(AB\). Một điểm \(M\) thuộc mặt phẳng này khi và chỉ khi **\(MA=MB\)**. Vì sao? Nếu \(M\in(\alpha)\), đường \(MI\) nằm trong \((\alpha)\) nên \(MI\perp AB\). Hai tam giác vuông \(MIA,MIB\) có \(MI\) chung và \(IA=IB\), nên \(MA=MB\). Ngược lại, nếu \(MA=MB\), trong tam giác cân \(MAB\), đường nối đỉnh \(M\) tới trung điểm \(I\) vuông góc \(AB\), nên \(M\) thuộc mặt phẳng qua \(I\) vuông góc \(AB\) (trường hợp \(M=I\) cũng đúng).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B23_PERPENDICULAR_BISECTOR_PLANE_AUTHORING_20261123.svg" alt="Đoạn AB có trung điểm I; mặt phẳng alpha vuông góc AB tại I; điểm M trong alpha cách đều A và B"><figcaption><strong>Hướng dẫn đọc:</strong> điểm \(I\) ở giữa \(A,B\); mặt phẳng \((\alpha)\) dựng vuông góc với đường \(AB\) tại \(I\). Điểm \(M\) nằm trên \((\alpha)\), hai đoạn \(MA,MB\) bằng nhau. Đọc \(AI=IB\) và \(MI\perp AB\) trước khi áp định lí Pythagore; không kết luận từ độ dài nét vẽ.</figcaption></figure>

    **Chân đường vuông góc cũng là duy nhất.** Cho \(A\) nằm ngoài \((P)\), có duy nhất đường qua \(A\) vuông góc \((P)\); giao điểm của đường với \((P)\) là điểm \(H\). Nếu có \(H'\ne H\) cũng làm \(AH'\perp(P)\), ta có **hai** đường qua \(A\) cùng vuông góc \((P)\), trái với tính duy nhất. Vì vậy hình chiếu vuông góc của một điểm lên mặt phẳng là xác định duy nhất.

    **Vận dụng.** Cho \(AB=10\) cm, \(I\) là trung điểm. Điểm \(M\) thuộc mặt phẳng trung trực \((\alpha)\) của \(AB\) và \(MI=12\) cm. Tính \(MA,MB\).

    ??? question "Đối chiếu"

        **Lời giải:** \(AI=BI=5\) cm; \(MI\perp AB\) vì \(MI\) thuộc mặt phẳng vuông góc \(AB\). Theo Pythagore: \(MA^2=MI^2+IA^2=12^2+5^2=169\), nên **\(MA=MB=13\) cm**.

    ??? tip "Kiểm lỗi"

        Mặt phẳng trung trực không phải chỉ có **một điểm \(I\)**; nó là tập hợp vô số điểm cách đều \(A,B\). Không tự lấy \(MA=12\) vì 12 là độ dài \(MI\).

    ### 1.3. Liên hệ giữa quan hệ song song và quan hệ vuông góc của đường thẳng và mặt phẳng

    **Cầu nối từ Bài 22:** Nếu \(a\perp(P)\) và \(b\parallel a\), thì \(b\perp(P)\), bởi với mọi đường \(m\subset(P)\), \((b,m)=(a,m)=90^\circ\). Do đó, hai đường **phân biệt** cùng vuông góc với **một mặt phẳng** thì **song song với nhau**. Chú ý sự khác biệt: **hai đường cùng vuông góc một đường thứ ba** trong không gian thì *không nhất thiết song song* (Bài 22), nhưng cùng vuông góc **cả một mặt phẳng** thì có cùng phương pháp tuyến.

    **Hai mặt phẳng song song:** Nếu \((P)\parallel(Q)\) và \(\Delta\perp(P)\), thì \(\Delta\perp(Q)\). Có thể lấy một đường \(b\) bất kì trong \((Q)\), chọn \(a\subset(P)\) song song với \(b\); do \(\Delta\perp a\), ta có \(\Delta\perp b\), nên vuông góc cả \((Q)\). Đảo lại, nếu hai mặt phẳng **phân biệt** cùng vuông góc với một đường \(\Delta\), chúng **song song nhau**.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B23_PARALLEL_PLANES_NORMAL_AUTHORING_20261123.svg" alt="Hai mặt phẳng P và Q song song có cùng một đường delta vuông góc với cả hai"><figcaption><strong>Hướng dẫn đọc:</strong> hai tấm phẳng \((P)\), \((Q)\) ở hai độ cao **song song**; đường đỏ \(\Delta\) là phương vuông góc \((P)\), nên cũng vuông góc \((Q)\). Hình không chứng minh từ nét vẽ rằng hai mặt phẳng song song: điều đó phải thuộc giả thiết hoặc được suy từ định lí.</figcaption></figure>

    **Hai quan hệ với đường song song mặt phẳng:** Nếu \(\Delta\perp(P)\) và \(a\parallel(P)\), thì \(\Delta\perp a\). Ngược lại, nếu cả **đường \(a\)** lẫn **mặt phẳng \((P)\)** đều vuông góc cùng một đường \(\Delta\), thì \(a\) **nằm trong \((P)\) hoặc song song \((P)\)**; không thể khẳng định chỉ song song, vì \(a\) có thể thuộc \((P)\).

    **Ví dụ SGK — Tứ diện và trọng tâm:** Trong tứ diện \(OABC\) có \(OA,OB,OC\) đôi một vuông góc, \(OA\perp(OBC)\). Gọi \(M,N\) lần lượt là trọng tâm tam giác \(ABC\), \(OBC\). Vì hai trọng tâm chia các trung tuyến tương ứng theo tỉ số \(2:1\), đường \(MN\parallel OA\). Suy ra \(MN\perp(OBC)\) theo tính chất thay đường song song. Ta phải chứng minh **đúng \(MN\parallel OA\)** trước khi kết luận, không đo hình.

    **Vận dụng.** Hai mặt phẳng \((P)\ne(Q)\) đều vuông góc cùng đường \(\Delta\). Hỏi quan hệ của \((P),(Q)\)? Nếu \(a\) là đường cũng vuông góc \(\Delta\), có thể kết luận \(a\parallel(P)\) không?

    ??? question "Đối chiếu"

        **Lời giải:** Hai mặt phẳng **phân biệt** cùng vuông góc một đường nên **\((P)\parallel(Q)\)**. Nếu chỉ \(a\perp\Delta\), trong khi \((P)\perp\Delta\), thì \(a\) có phương nằm trong \((P)\), nhưng \(a\) có thể **nằm trong \((P)\)** hoặc **song song \((P)\)**. Không kết luận chỉ song song.

    ??? tip "Kiểm lỗi"

        Phải phân biệt **đường vuông góc đường**, **đường vuông góc mặt phẳng** và **mặt phẳng vuông góc đường**; mỗi quy tắc có điều kiện khác nhau.

=== "Kiến thức SGK"

    ### 2.1. Đường thẳng vuông góc với mặt phẳng

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Đường thẳng vuông góc với mặt phẳng</strong><p>Đường \(\Delta\) được gọi là <strong>vuông góc với mặt phẳng \((P)\)</strong>, kí hiệu \(\Delta\perp(P)\), nếu \(\Delta\) vuông góc với <strong>mọi đường thẳng</strong> nằm trong \((P)\). Khi đó \(\Delta\) cắt \((P)\) tại một điểm gọi là chân đường vuông góc.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Định lí — Tiêu chuẩn hai đường thẳng cắt nhau</strong><p>Nếu \(\Delta\perp a\), \(\Delta\perp b\), trong đó \(a,b\) là <strong>hai đường cắt nhau và cùng nằm trong mặt phẳng \((P)\)</strong>, thì \(\Delta\perp(P)\). Hai đường chỉ song song với nhau không đủ để dùng tiêu chuẩn này.</p></div>

    **Cách chứng minh:** (1) chỉ rõ \(a,b\subset(P)\); (2) chứng minh \(a\cap b\) có một điểm; (3) chứng minh \(\Delta\perp a\) và \(\Delta\perp b\); (4) kết luận. Không suy \(d\perp(P)\) từ duy nhất một góc vuông.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B23-01_R00.svg" alt="Cạnh AH vuông góc AB và AD cắt nhau trong mặt phẳng P, nên vuông góc P"><figcaption><strong>Tra hình:</strong> \(AB,AD\) nằm trong \((P)\) và **cắt nhau ở \(A\)**; \(AH\perp AB\), \(AH\perp AD\), vì thế \(AH\perp(P)\). Không được thay \(AD\) bằng một đường song song \(AB\) rồi vẫn áp tiêu chuẩn.</figcaption></figure>

    **Ví dụ SGK:** Cho \(S.ABC\) đáy \(ABC\) vuông tại \(B\), \(SA\perp AB\), \(SA\perp AC\). Vì \(AB,AC\) cắt nhau trong \((ABC)\), suy \(SA\perp(ABC)\), nên \(SA\perp BC\). Mặt khác \(BA\perp BC\), với \(SA,BA\) cắt tại \(A\) thuộc \((SAB)\), suy \(BC\perp(SAB)\).

    ### 2.2. Tính chất

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Tính duy nhất</strong><p>Qua một điểm cho trước có duy nhất <strong>một mặt phẳng</strong> vuông góc với một đường thẳng cho trước. Qua một điểm cho trước cũng có duy nhất <strong>một đường thẳng</strong> vuông góc với một mặt phẳng cho trước. Hai tính duy nhất này có đối tượng khác nhau.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khái niệm — Mặt phẳng trung trực của đoạn thẳng</strong><p>Cho đoạn \(AB\) với trung điểm \(I\). Mặt phẳng \((\alpha)\) đi qua \(I\) và vuông góc đường \(AB\) là <strong>mặt phẳng trung trực</strong> của đoạn \(AB\). Nó chính là <strong>tập hợp các điểm \(M\)</strong> thỏa \(MA=MB\). Hình chiếu vuông góc từ một điểm xuống một mặt phẳng cũng duy nhất.</p></div>

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B23_PERPENDICULAR_BISECTOR_PLANE_AUTHORING_20261123.svg" alt="Mặt phẳng trung trực alpha của AB vuông góc tại trung điểm I, các điểm M thuộc mặt phẳng đều cách đều A và B"><figcaption><strong>Tra hình:</strong> \(I\) là trung điểm \(AB\). Với \(M\ne I\), đoạn \(MI\) nằm trong mặt phẳng vuông góc \(AB\), nên hai tam giác vuông \(MIA,MIB\) có \(MI\) chung, \(IA=IB\) và suy ra \(MA=MB\). Nếu \(M=I\), đẳng thức hiển nhiên \(MA=MB\). Chiều ngược cũng đúng.</figcaption></figure>

    **Cách tìm chân \(H\):** Từ \(A\) dựng đường duy nhất vuông góc \((P)\); giao điểm với \((P)\) là \(H\). Không có chân vuông góc thứ hai vì đường vuông góc qua \(A\) là duy nhất.

    ### 2.3. Liên hệ giữa quan hệ song song và quan hệ vuông góc của đường thẳng và mặt phẳng

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Hai đường thẳng và một mặt phẳng</strong><p>Nếu \(a\perp(P)\) và \(b\parallel a\), thì \(b\perp(P)\). Hai đường thẳng <strong>phân biệt</strong> cùng vuông góc một mặt phẳng thì <strong>song song</strong> với nhau.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Hai mặt phẳng và một đường thẳng</strong><p>Nếu \((P)\parallel(Q)\) và \(\Delta\perp(P)\), thì \(\Delta\perp(Q)\). Hai mặt phẳng <strong>phân biệt</strong> cùng vuông góc với một đường \(\Delta\) thì <strong>song song</strong> với nhau.</p></div>

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B23_PARALLEL_PLANES_NORMAL_AUTHORING_20261123.svg" alt="Hai mặt phẳng P và Q song song cùng vuông góc với một đường Delta"><figcaption><strong>Tra hình:</strong> nếu hai mặt phẳng song song, một pháp tuyến \(\Delta\) của \((P)\) cũng là pháp tuyến của \((Q)\). Hình chỉ minh họa quan hệ từ giả thiết, không thay chứng minh.</figcaption></figure>

    **Các quan hệ bổ sung trong SGK:** Nếu \(\Delta\perp(P)\), thì \(\Delta\) vuông góc mọi đường \(a\parallel(P)\). Nếu cả đường \(a\) và mặt phẳng \((P)\) đều vuông góc một đường \(\Delta\), thì **\(a\subset(P)\) hoặc \(a\parallel(P)\)**. Hai trường hợp này không được bỏ đi một cách tùy ý.

    **Ví dụ:** Tứ diện \(OABC\) có \(OA,OB,OC\) đôi một vuông góc, \(M,N\) lần lượt là trọng tâm tam giác \(ABC,OBC\). \(OA\perp(OBC)\); từ tính chất trọng tâm có \(MN\parallel OA\), do đó \(MN\perp(OBC)\).

    | Giả thiết | Kết luận hợp lệ |
    | :-- | :-- |
    | \(a\perp(P)\), \(b\parallel a\) | \(b\perp(P)\) |
    | \(a\ne b\), \(a\perp(P)\), \(b\perp(P)\) | \(a\parallel b\) |
    | \((P)\parallel(Q)\), \(\Delta\perp(P)\) | \(\Delta\perp(Q)\) |
    | \((P)\ne(Q)\), cả hai vuông góc \(\Delta\) | \((P)\parallel(Q)\) |
    | \(a\perp\Delta\), \((P)\perp\Delta\) | \(a\subset(P)\) **hoặc** \(a\parallel(P)\) |

=== "Ví dụ"

    ### 3.1. Hai lần áp dụng tiêu chuẩn hai đường cắt nhau

    **Đề bài.** Hình chóp \(S.ABC\) có đáy \(ABC\) vuông tại \(B\), \(SA\perp AB\) và \(SA\perp AC\). Chứng minh \(BC\perp(SAB)\).

    **Phân tích:** Không thể suy ngay \(BC\perp(SAB)\) từ \(BC\perp BA\). Đầu tiên chứng minh \(SA\perp(ABC)\) bằng **hai đường \(AB,AC\) cắt tại \(A\)**; từ đó mới có vuông góc thứ hai cần thiết.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.1"><p><strong>Lời giải.</strong> Vì \(SA\perp AB\), \(SA\perp AC\) và \(AB,AC\subset(ABC)\) cắt tại \(A\), nên \(SA\perp(ABC)\). Suy ra \(SA\perp BC\). Tam giác \(ABC\) vuông tại \(B\), nên \(BC\perp BA\). Vì \(SA,BA\subset(SAB)\) cắt tại \(A\), ta có \(BC\perp(SAB)\).</p></div>

    **Kiểm lại:** Hai lần áp tiêu chuẩn đều nêu rõ **hai đường trong mặt phẳng và giao điểm**; không đổi “cắt nhau” thành “song song”.

    ### 3.2. Cột treo đồ có chân đế chữ thập

    **Đề bài.** Hai thanh chân đế \(a,b\) cắt nhau tại \(O\) và nằm trong mặt sàn \((P)\). Một cột \(d\) thỏa \(d\perp a\), \(d\perp b\). Chứng minh cột vuông góc sàn và nêu giả thiết thiết yếu.

    **Phân tích:** Một cột thẳng đứng không được xác định bằng việc vuông góc duy nhất một thanh. Cần **hai phương khác nhau** của mặt sàn.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.2"><p><strong>Lời giải.</strong> Vì \(a,b\) cùng nằm trong \((P)\) và cắt nhau tại \(O\), đồng thời \(d\perp a\), \(d\perp b\), theo tiêu chuẩn hai đường cắt nhau, \(d\perp(P)\). Điều kiện thiết yếu là \(a,b\) cắt nhau, không chỉ song song.</p></div>

    **Kiểm lại:** Nếu \(a\parallel b\), một đường có thể vuông góc cả hai nhưng **không** vuông góc với mọi phương khác trên sàn.

    ### 3.3. Khoảng cách bằng nhau và mặt phẳng trung trực

    **Đề bài.** Cho \(AB=10\) cm, \(I\) trung điểm. Điểm \(M\) thuộc mặt phẳng trung trực của \(AB\), \(MI=12\) cm. Tính \(MA,MB\) và giải thích tính bằng nhau.

    **Phân tích:** \(AB\perp(\alpha)\) tại \(I\) nên \(MI\perp AB\). Sử dụng Pythagore trong hai tam giác vuông \(MIA,MIB\) có \(IA=IB=5\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.3"><p><strong>Lời giải.</strong> \(IA=IB=5\) cm. Vì \(M,I\in(\alpha)\) và \(AB\perp(\alpha)\), \(MI\perp AB\). Suy ra \(MA^2=MI^2+IA^2=12^2+5^2=169\), \(MB^2=MI^2+IB^2=169\). Do đó \(MA=MB=13\) cm.</p></div>

    **Kiểm lại:** \(MI=12>0\) nên \(M\ne I\), tam giác Pythagore ở đây không suy biến. Mặt phẳng trung trực có **vô số điểm** như \(M\), không chỉ điểm giữa \(I\).

    ### 3.4. Vì sao chân vuông góc xuống mặt phẳng là duy nhất?

    **Đề bài.** Cho điểm \(A\notin(P)\). Chứng minh không thể tồn tại hai điểm \(H,K\) khác nhau trong \((P)\) sao cho \(AH\perp(P)\) và \(AK\perp(P)\).

    **Phân tích:** SGK có tính duy nhất đường vuông góc với mặt phẳng qua một điểm. Nếu có hai chân, hai đường cùng qua \(A\) đều là pháp tuyến của \((P)\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.4"><p><strong>Lời giải.</strong> Giả sử \(H\ne K\) thỏa điều kiện. Khi đó \(AH,AK\) là hai đường phân biệt cùng đi qua \(A\), và đều vuông góc \((P)\), trái với tính duy nhất đường vuông góc \((P)\) qua \(A\). Do đó chỉ có một điểm \(H\) như vậy, là giao điểm của đường duy nhất qua \(A\) vuông góc \((P)\) với mặt phẳng.</p></div>

    **Kiểm lại:** Sự tồn tại của chân là nhờ có duy nhất pháp tuyến qua \(A\) **và pháp tuyến cắt \((P)\)**; không phải suy chỉ từ “ít nhất một điểm ở gần nhất”.

    ### 3.5. Chứng minh đường nối hai trọng tâm vuông góc mặt phẳng

    **Đề bài.** Tứ diện \(OABC\) có \(OA,OB,OC\) đôi một vuông góc. \(M,N\) là trọng tâm của tam giác \(ABC\), \(OBC\). Chứng minh \(MN\perp(OBC)\).

    **Phân tích:** \(OA\perp OB\), \(OA\perp OC\); hai đường \(OB,OC\) cắt tại \(O\) thuộc \((OBC)\), nên \(OA\perp(OBC)\). Cần chứng minh **\(MN\parallel OA\)** bằng tính chất trọng tâm trước khi thay pháp tuyến.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.5"><p><strong>Lời giải.</strong> Lấy \(D\) là trung điểm \(BC\). Hai trọng tâm \(M\in AD\), \(N\in OD\) thỏa \(DM/DA=DN/DO=1/3\). Trong tam giác \(DAO\), theo định lí Ta-lét đảo, \(MN\parallel AO\). Vì \(OA\perp OB\), \(OA\perp OC\) và \(OB,OC\) cắt trong \((OBC)\), \(OA\perp(OBC)\). Do \(MN\parallel OA\), suy \(MN\perp(OBC)\).</p></div>

    **Kiểm lại:** Tỉ lệ trọng tâm tính từ **điểm \(D\)** là \(1/3\), không phải \(2/3\); nếu lấy từ đỉnh \(A,O\) mới là \(2/3\).

    ### 3.6. Pháp tuyến của hai mặt phẳng song song

    **Đề bài.** Cho \((P)\parallel(Q)\) và \(\Delta\perp(P)\). Chứng minh \(\Delta\perp(Q)\). Nêu kết luận ngược khi hai mặt phẳng phân biệt cùng vuông góc \(\Delta\).

    **Phân tích:** Mọi phương trong \((Q)\) đều song song với một phương tương ứng trong \((P)\). Góc giữa đường và mặt phẳng có thể kiểm qua **mọi đường trong mặt phẳng**, không đo từ hai hình bình hành vẽ trên giấy.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.6"><p><strong>Lời giải.</strong> Lấy \(b\subset(Q)\) bất kì. Vì \((P)\parallel(Q)\), tồn tại \(a\subset(P)\) với \(a\parallel b\). Từ \(\Delta\perp(P)\) suy \(\Delta\perp a\); vì \(a\parallel b\), \(\Delta\perp b\). Do \(b\) tùy ý, \(\Delta\perp(Q)\). Ngược lại, hai mặt phẳng **phân biệt** cùng vuông góc một đường thì song song.</p></div>

    **Kiểm lại:** Điều kiện \((P)\ne(Q)\) cần khi phát biểu kết luận hai mặt phẳng song song theo nghĩa phân biệt; không coi một mặt phẳng song song với chính nó trong phát biểu SGK.

    ### 3.7. Đường thẳng và mặt phẳng cùng vuông góc đường thứ ba

    **Đề bài.** Cho \(\Delta\perp(P)\) và đường \(a\perp\Delta\). Chứng minh \(a\) không nhất thiết song song với \((P)\), đồng thời cho biết đầy đủ các trường hợp có thể.

    **Phân tích:** \(a\) có phương song song với các phương thuộc \((P)\), nhưng vị trí của \(a\) có thể ngay **trong mặt phẳng** hoặc ở ngoài mặt phẳng.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.7"><p><strong>Lời giải.</strong> Vì \(a\perp\Delta\) và \((P)\perp\Delta\), đường \(a\) có phương nằm trong \((P)\). Nếu \(a\) có một điểm thuộc \((P)\), toàn bộ \(a\subset(P)\). Nếu \(a\) không có điểm chung với \((P)\), \(a\parallel(P)\). Do đó kết luận đúng là \(a\subset(P)\) **hoặc** \(a\parallel(P)\), không chỉ một vế.</p></div>

    **Kiểm lại:** Một đường trong mặt phẳng cũng vuông góc với pháp tuyến của mặt phẳng, nên là phản ví dụ cho khẳng định chỉ “song song”.

    ### 3.8. Bài toán SGK: trung điểm trong hình chóp đáy vuông

    **Đề bài.** Cho hình chóp \(S.ABCD\) có đáy là hình vuông, \(SA\perp(ABCD)\). Gọi \(M\) trung điểm \(SB\), \(N\) trung điểm \(BC\). Chứng minh \(BD\perp MN\).

    **Phân tích:** Vì \(M,N\) là trung điểm hai cạnh của tam giác \(SBC\), \(MN\parallel SC\). Để chứng minh \(BD\perp SC\), tìm mặt phẳng chứa \(SC\) mà \(BD\) vuông góc.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.8"><p><strong>Lời giải.</strong> Từ \(SA\perp(ABCD)\) suy \(SA\perp BD\). Đáy hình vuông có hai đường chéo \(AC\perp BD\), với \(SA,AC\subset(SAC)\) cắt tại \(A\). Vì vậy \(BD\perp(SAC)\), nên \(BD\perp SC\). Trong tam giác \(SBC\), \(M,N\) là trung điểm \(SB,BC\), suy \(MN\parallel SC\). Do đó \(BD\perp MN\).</p></div>

    **Kiểm lại:** \(BD\) không nằm trong \((SAC)\) nhưng vuông góc với **hai đường cắt nhau** \(SA,AC\) của mặt phẳng ấy; kết luận được phép dùng. \(MN\parallel SC\) do đường trung bình, không phải vì nét vẽ.

=== "Lỗi thường gặp"

    ### 4.1. Vuông góc một đường trên mặt phẳng là vuông góc cả mặt phẳng

    **Dấu hiệu:** Chỉ từ \(d\perp a\) với \(a\subset(P)\), kết luận \(d\perp(P)\).

    **Vì sao sai:** Mặt phẳng có nhiều phương; một điều kiện vuông góc chỉ kiểm một phương, chưa đủ định hướng pháp tuyến.

    **Cách sửa:** Cần thêm \(d\perp b\) với **\(a,b\) cắt nhau và cùng nằm trong \((P)\)**, hoặc một căn cứ tương đương mạnh hơn.

    ### 4.2. Kiểm hai đường song song rồi áp tiêu chuẩn

    **Dấu hiệu:** Có \(d\perp a\), \(d\perp b\), nhưng \(a\parallel b\) trong \((P)\), vẫn kết luận \(d\perp(P)\).

    **Vì sao sai:** Hai đường song song chỉ biểu thị một phương của mặt phẳng, không thỏa giả thiết **hai đường cắt nhau**.

    **Cách sửa:** Dựng thêm một đường thứ hai thuộc \((P)\) cắt đường thứ nhất, rồi chứng minh vuông góc đường ấy.

    ### 4.3. Nhầm vuông góc cùng đường và cùng mặt phẳng

    **Dấu hiệu:** Nghĩ hai đường cùng vuông góc một **đường thứ ba** thì chắc chắn song song, như hai đường cùng vuông góc một **mặt phẳng**.

    **Vì sao sai:** Trong không gian, \(Ox,Oy\) đều vuông góc \(Oz\) nhưng không song song; còn các pháp tuyến cùng một mặt phẳng phải cùng phương.

    **Cách sửa:** Đọc đúng đối tượng: \(a\perp(P),b\perp(P)\Rightarrow a\parallel b\) nếu \(a\ne b\); \(a\perp c,b\perp c\) không đủ để suy song song.

    ### 4.4. Mặt phẳng trung trực chỉ gồm trung điểm

    **Dấu hiệu:** Cho rằng chỉ điểm \(I\) cách đều hai đầu \(A,B\) nên “mặt phẳng trung trực” là điểm \(I\).

    **Vì sao sai:** Mọi điểm trên mặt phẳng qua \(I\) vuông góc \(AB\) đều có cùng khoảng cách tới \(A,B\).

    **Cách sửa:** Dùng \(AI=BI\), \(MI\perp AB\) để thấy \(MA^2=MI^2+AI^2=MI^2+BI^2=MB^2\) khi \(M\ne I\); \(M=I\) trực tiếp thỏa.

    ### 4.5. Quên chữ duy nhất hoặc đổi đối tượng của định lí

    **Dấu hiệu:** Nói qua một điểm có nhiều đường vuông góc cùng một mặt phẳng, hoặc lẫn với “qua một điểm có một mặt phẳng vuông góc một đường”.

    **Vì sao sai:** Cả hai là kết quả duy nhất nhưng **đối tượng được dựng khác nhau** (đường hoặc mặt phẳng).

    **Cách sửa:** Viết đầy đủ “điểm O + mặt phẳng P → duy nhất đường d⊥P” và “điểm O + đường Δ → duy nhất mặt phẳng α⊥Δ”.

    ### 4.6. Bỏ một trường hợp khi đường và mặt phẳng cùng vuông góc một đường

    **Dấu hiệu:** Từ \(a\perp\Delta\), \((P)\perp\Delta\) chỉ kết luận \(a\parallel(P)\).

    **Vì sao sai:** \(a\) cũng có thể **nằm trong \((P)\)**; cả hai cùng có phương vuông góc với pháp tuyến \(\Delta\).

    **Cách sửa:** Ghi đầy đủ **\(a\subset(P)\) hoặc \(a\parallel(P)\)**. Khi muốn chọn một kết luận, cần thêm điều kiện \(a\) có/không có điểm chung với \((P)\).

    **Học tiếp:** [Core/Luyện tập Bài 23](luyen-tap.md) · [Tự luận Chương VII](../../../thu-vien/tu-luan-g11-chuong-vii.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">Nguồn S1: SGK Toán 11 Kết nối tri thức, tập hai, Bài 23 “Đường thẳng vuông góc với mặt phẳng”, trang in 31–37. Ba mục SGK: “Đường thẳng vuông góc với mặt phẳng”; “Tính chất”; “Liên hệ giữa quan hệ song song và quan hệ vuông góc của đường thẳng và mặt phẳng”. Đối chiếu nội dung văn bản PDF số hóa về HĐ1–HĐ10, ví dụ và tính chất, nhưng PDF screenshot trang in↔index chưa kiểm được (SOURCE_VISUAL_HOLD). Hình kiểm hai đường cắt nhau dùng lại từ thư viện gốc; bổ sung hình mặt phẳng trung trực và hai mặt phẳng song song với cùng pháp tuyến tại đúng đoạn giảng thiếu hình. Không sửa Core/Luyện tập, Tự kiểm tra hoặc ngân hàng đánh giá.</p>


## === END G11-CHVII-B23 ===

## === BEGIN G11-CHVII-B24 | PR#1050 | HEAD f2a35940864abd6a8e76da5d5b6bfded89f44b6f | BLOB 720079470b25e79ec122a52e1ec051beda01dba8 ===

# Bài 24. Phép chiếu vuông góc. Góc giữa đường thẳng và mặt phẳng

<style>
/* Scoped to this knowledge page. Shared Golden UI/Core/RD1 remains frozen. */
.md-typeset:has([data-g11-b24-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card{background:#e8f7f2;border:1px solid #a9dccc;border-left:4px solid #087d69;color:#174137}
.md-typeset:has([data-g11-b24-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card{background:#eaf1fc;border:1px solid #a5bee5;border-left:4px solid #4879c2;color:#193d66}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b24-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card{background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b24-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card{background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}
</style>

<div class="thpt-r4-screen" data-thpt-r4 data-g11-b24-knowledge-only>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VII · SGK KẾT NỐI TRI THỨC · TẬP HAI</p>
<p class="thpt-r4-lead">Tách độ dài xiên, hình chiếu trên nền và độ cao; đọc đúng định lí ba đường vuông góc và góc giữa đường với mặt phẳng.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương VII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    **Vì sao cần học?** Quãng đường máy bay vừa bay không phải độ cao so với mặt đất. Một đoạn dốc cũng có ba đại lượng khác nhau: độ dài xiên, phần chiếu trên nền và chiều cao. Bài 23 đã cho em đường vuông góc duy nhất từ một điểm tới mặt phẳng; bài này dùng nó để xác định **hình chiếu** và **góc nghiêng** thay vì đo từ hình phối cảnh.

    ### 1.1. Phép chiếu vuông góc

    **Khởi động đúng theo HĐ1 SGK:** Bóng cột thẳng đứng dưới tia nắng xiên là phép chiếu **song song theo phương tia sáng**. Chưa chắc đó là phép chiếu **vuông góc**. Khi phương chiếu \(\Delta\) vuông góc với mặt sân \((P)\), phép chiếu song song theo \(\Delta\) mới gọi là phép chiếu vuông góc. Bản thân cột vuông góc sân khi chiếu vuông góc xuống sân chỉ còn **một điểm chân cột**, không phải một đoạn dài.

    **Từ điểm đến đường:** Nếu \(A\notin(P)\), kẻ \(AH\perp(P)\), thì \(H\in(P)\) là hình chiếu vuông góc của \(A\). Với đường \(a\not\perp(P)\), chọn hai điểm phân biệt \(M,N\in a\), chiếu chúng thành \(M',N'\in(P)\); khi ấy \(M'N'\) là hình chiếu của \(a\). Nếu \(a\perp(P)\), mọi điểm thuộc \(a\) chiếu về cùng một chân, nên hình chiếu là **một điểm**. Chiếu tam giác bằng cách chiếu từng đỉnh, sau đó nối các đỉnh ảnh; kết quả có thể suy biến thành đoạn khi hai đỉnh cùng chiếu về một điểm.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B24-01_R00.svg" alt="Đường xiên AM chiếu vuông góc xuống HM trên mặt P; AH là chiều cao vuông góc mặt"><figcaption><strong>Hướng dẫn đọc hình:</strong> \(A\) ngoài mặt phẳng, \(H\) là chân \(AH\perp(P)\), \(M\in(P)\). \(AM\) là đoạn xiên, \(HM\) là đoạn chiếu (khi \(H\ne M\)), \(AH\) là độ cao. Trong tam giác \(AHM\), góc vuông ở \(H\); không đo độ dài từ phối cảnh.</figcaption></figure>

    **Định lí ba đường vuông góc — vì sao đúng?** Với đường xiên \(a\) **không vuông góc \((P)\)**, \(a'\subset(P)\) là hình chiếu của \(a\), và \(b\subset(P)\), ta có
    \[
    b\perp a\quad\Longleftrightarrow\quad b\perp a'.
    \]
    Đây là vuông góc giữa **đường thẳng** theo Bài 22; hai đường đang xét có thể chéo nhau. Vì \(b\) nằm trong \((P)\), nó đã vuông góc với mọi thành phần theo phương pháp tuyến. Do đó việc \(b\) vuông góc đường xiên chỉ phụ thuộc thành phần chiếu theo \(a'\). Không dùng định lí theo dạng ấy nếu \(a\perp(P)\), vì hình chiếu \(a'\) lúc đó không phải đường.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B24_THREE_PERPENDICULAR_LINES_AUTHORING_20261123.svg" alt="Đường xiên a có hình chiếu a phẩy xác định từ M phẩy và N phẩy; b trong mặt P vuông góc a phẩy"><figcaption><strong>Hướng dẫn đọc định lí:</strong> đường cam \(a\) có hai điểm \(M,N\), đường chiếu xanh \(a'\) đi qua \(M',N'\), còn đường lục \(b\) nằm trong \((P)\). **Nếu chứng minh được** \(b\perp a'\), được kết luận \(b\perp a\), và ngược lại. Nét vuông tại \(T\) minh họa giả thiết chứ không thay chứng minh.</figcaption></figure>

    **Ví dụ 1 SGK — Bốn cột đứng trên sân:** Gọi chân của các cột \(AM,BN,CP,DQ\) lần lượt là \(A,B,C,D\), bốn đỉnh ở trên là \(M,N,P,Q\). Vì cột vuông góc mặt sân, hình chiếu của **dây \(MP\)** là **\(AC\)**, của \(NQ\) là \(BD\). Nếu \(BD\perp AC\) thì \(BD\perp MP\) theo định lí ba đường vuông góc. Nếu \(ABCD\) là hình bình hành, \(AC,BD\) có chung trung điểm \(O\); vì phép chiếu song song bảo toàn trung điểm, trung điểm \(E\) của \(MP\) và trung điểm \(F\) của \(NQ\) có cùng hình chiếu \(O\).

    **Hình chiếu của tam giác cũng có thể suy biến:** Trong hình chóp \(S.ABC\), giả sử \(SA\perp(ABC)\). Khi chiếu xuống \((ABC)\): \(S\mapsto A\), còn \(A,B,C\) giữ nguyên. Vì vậy \(SBC\mapsto ABC\), nhưng \(SAB\mapsto\) **đoạn \(AB\)**; không được gọi kết quả là tam giác có diện tích dương.

    **Vận dụng.** Cho hình chóp \(S.ABC\) với \(SA\perp(ABC)\). Hãy nêu hình chiếu của \(SC\), tam giác \(SBC\) và tam giác \(SAB\) lên đáy. Nếu \(AC\perp BC\), có suy được \(SC\perp BC\) không?

    ??? question "Đối chiếu"

        **Lời giải:** Hình chiếu \(S=A\), \(A=A\), \(B=B\), \(C=C\). Do đó \(SC\mapsto AC\), tam giác \(SBC\mapsto ABC\), tam giác \(SAB\mapsto AB\) (đoạn). Vì \(BC\subset(ABC)\), \(BC\perp AC\) và \(AC\) là hình chiếu đường \(SC\), định lí ba đường vuông góc cho \(BC\perp SC\).

    ??? tip "Kiểm lỗi"

        Không coi hình chiếu \(SAB\) là tam giác không suy biến; hai đỉnh \(S,A\) cùng chiếu về \(A\). Khi áp định lí ba đường phải chỉ rõ **mặt phẳng**, **đường xiên**, **hình chiếu**, **đường trong mặt**.

    ### 1.2. Góc giữa đường thẳng và mặt phẳng

    **Câu hỏi HĐ3 SGK:** Máy bay bay thẳng với tốc độ \(240\) km/h trong một phút thì quãng đường bay là \(4\) km. Thông tin ấy **không đủ** tìm độ cao vì chưa biết hướng bay hay góc cất cánh so với mặt đất. Để tìm độ cao, cần phân tích độ dài xiên thành phần vuông góc với mặt phẳng.

    **Định nghĩa:** Nếu \(a\not\perp(P)\), góc giữa \(a\) và \((P)\) là góc giữa \(a\) và **hình chiếu \(a'\)** của nó lên \((P)\). Nếu \(a\perp(P)\), góc đường–mặt được quy ước **\(90^\circ\)** vì hình chiếu chỉ là một điểm. Nếu \(a\subset(P)\) hoặc \(a\parallel(P)\), góc bằng \(0^\circ\). Mọi góc đường–mặt thuộc \([0^\circ,90^\circ]\).

    **Nhìn đúng tam giác vuông:** Với \(A\notin(P)\), chân \(H\), điểm \(M\in(P)\) và \(M\ne H\), góc giữa \(AM\) và mặt là **góc \(\angle AMH\)** tại \(M\). Trong tam giác vuông \(AHM\),
    \[
    \sin\alpha=\frac{AH}{AM},\qquad
    \cos\alpha=\frac{HM}{AM},\qquad
    \tan\alpha=\frac{AH}{HM}.
    \]
    Tỉ số \(\tan\alpha\) cần \(HM>0\). Góc giữa đường xiên và phương đứng \(AH\) là **góc phụ** với góc đường–mặt, không phải chính góc đó.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B24-01_R00.svg" alt="Góc AMH ở M là góc đường AM với mặt P, AH là cạnh đối và HM là cạnh kề"><figcaption><strong>Hướng dẫn đọc góc:</strong> góc cần tính ở **\(M\)** giữa đoạn xanh \(MA\) và đoạn chiếu lục \(MH\), không phải góc ở \(A\) giữa đường xiên và đường đứng đỏ \(AH\). Tại \(M\), \(AH\) là cạnh đối, \(HM\) là cạnh kề và \(AM\) là cạnh huyền.</figcaption></figure>

    **Ví dụ 2 SGK — thay đúng mặt phẳng chiếu:** Cho chóp \(S.ABC\), \(SA\perp(ABC)\), \(SA=a\), \(CA=CB=a\sqrt7\), \(AB=2a\), với \(a>0\). Góc giữa \(SB\) và đáy là \(\angle SBA\), nên \(\tan\angle SBA=SA/AB=1/2\). Nhưng muốn tìm góc giữa \(SC\) với **mặt phẳng \((SAB)\)** phải tìm hình chiếu của \(C\) lên chính mặt ấy. Gọi \(M\) là trung điểm \(AB\). Vì \(CA=CB\), có \(CM\perp AB\); mặt khác \(SA\perp(ABC)\) nên \(CM\perp SA\). Hai đường \(AB,SA\) cắt nhau tại \(A\) trong \((SAB)\), suy \(CM\perp(SAB)\). Vì vậy **\(SC\) chiếu lên \((SAB)\) thành \(SM\)**. Từ \(SM=a\sqrt2\), \(SC=a\sqrt8\),
    \[
    \cos\angle CSM=\frac{SM}{SC}=\frac12,
    \]
    nên \(\angle CSM=60^\circ\). Không được lấy \(AC\) làm hình chiếu khi đề hỏi mặt \((SAB)\), vì \(AC\) nằm trong **mặt đáy khác**.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B24_SABC_PROJECTION_EXAMPLE_AUTHORING_20261123.svg" alt="Hình chóp SABC có CM vuông góc SAB, hình chiếu của SC lên SAB là SM và góc CSM bằng 60 độ"><figcaption><strong>Hướng dẫn đọc hình SGK:</strong> \(M\) là trung điểm \(AB\); \(CM\perp AB\) do \(CA=CB\), và \(CM\perp SA\) do \(SA\perp(ABC)\). Suy \(CM\perp(SAB)\) nên \(SM\) là hình chiếu của \(SC\). Khung phải có tam giác \(SMC\) vuông tại \(M\): \(\cos\angle CSM=SM/SC=1/2\), suy góc \(60^\circ\).</figcaption></figure>

    **Phân biệt tỉ số:** \(\sin\alpha\) = cao/xiên, \(\tan\alpha\) = cao/ngang. “Độ dốc 1:12” nghĩa là \(\tan\alpha=1/12\), **không** có nghĩa \(\alpha=1/12^\circ\). Trong bài toán thực tế, cần giữ đơn vị và điều kiện mô hình.

    **Vận dụng.** Máy bay bay thẳng trong phút đầu với tốc độ \(240\) km/h và góc cất cánh không đổi \(30^\circ\) so với mặt đất phẳng. Tìm độ cao sau một phút. Nếu chỉ biết tốc độ có xác định được độ cao không?

    ??? question "Đối chiếu"

        **Lời giải:** Quãng đường bay thẳng trong một phút \(s=240/60=4\) km. Độ cao \(h=s\sin30^\circ=4/2=2\) km. Nếu không biết góc cất cánh hoặc dữ kiện hình học tương đương, không xác định được độ cao duy nhất.

    ??? tip "Kiểm lỗi"

        \(4\) km là **quãng đường xiên**, không phải độ cao. \(\tan30^\circ\) nhân với quãng **ngang**, không nhân với quãng xiên.

=== "Kiến thức SGK"

    ### 2.1. Phép chiếu vuông góc

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Phép chiếu vuông góc</strong><p>Phép chiếu song song lên mặt phẳng \((P)\) theo phương \(\Delta\perp(P)\) được gọi là <strong>phép chiếu vuông góc</strong> lên \((P)\). Với điểm \(A\), hình chiếu \(H\in(P)\) là chân của đường \(AH\perp(P)\); với \(A\in(P)\), hình chiếu là chính \(A\). Đây là trường hợp đặc biệt của phép chiếu song song.</p></div>

    **Cách dựng và điều kiện:** Chiếu từng điểm theo phương vuông góc. Hình chiếu của đường \(a\not\perp(P)\) là đường qua hai hình chiếu phân biệt của điểm trên \(a\); hình chiếu của đường \(a\perp(P)\) **chỉ là một điểm**. Đoạn thẳng chiếu thành đoạn nối ảnh hai đầu mút, tam giác chiếu các đỉnh và **có thể suy biến**.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B24-01_R00.svg" alt="Từ điểm A chiếu xuống H, đoạn xiên AM chiếu thành HM và AH vuông góc mặt P"><figcaption><strong>Tra hình chiếu:</strong> \(AH\perp(P)\) nên \(H\) là hình chiếu của \(A\). Với \(M\in(P),M\ne H\), đoạn \(AM\) chiếu thành \(HM\), còn đoạn \(AH\) chiếu thành **một điểm \(H\)**.</figcaption></figure>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Định lí — Ba đường vuông góc</strong><p>Cho đường \(a\) <strong>không vuông góc</strong> với mặt phẳng \((P)\), gọi \(a'\) là hình chiếu vuông góc của \(a\) lên \((P)\). Với đường \(b\subset(P)\), ta có <strong>\(b\perp a\Longleftrightarrow b\perp a'\)</strong>. Vuông góc được hiểu là góc giữa các đường thẳng, kể cả hai đường có thể chéo nhau.</p></div>

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B24_THREE_PERPENDICULAR_LINES_AUTHORING_20261123.svg" alt="Định lí ba đường vuông góc: đường a xiên có hình chiếu a phẩy và đường b trong mặt P vuông góc a phẩy"><figcaption><strong>Tra định lí:</strong> \(a\) cam, \(a'\) xanh qua hai chân \(M',N'\), \(b\) lục thuộc \((P)\). Kiểm \(b\perp a'\) trước, rồi suy \(b\perp a\), hoặc đi chiều ngược. Khi \(a\perp(P)\), hình chiếu chỉ là một điểm nên không sử dụng công thức này.</figcaption></figure>

    **Ví dụ SGK:** Bốn cột \(AM,BN,CP,DQ\) vuông góc sân nên hình chiếu hai dây \(MP,NQ\) lần lượt là \(AC,BD\). Với \(BD\perp AC\), suy \(BD\perp MP\). Nếu \(ABCD\) là hình bình hành, hai trung điểm của \(MP,NQ\) cùng chiếu về giao điểm hai đường chéo đáy.

    **Chiếu tam giác:** Nếu \(SA\perp(ABC)\), hình chiếu của tam giác \(SBC\) là tam giác \(ABC\), còn hình chiếu của tam giác \(SAB\) là đoạn \(AB\). Phải xét ảnh của **mỗi đỉnh**, không mặc định hình không suy biến.

    ### 2.2. Góc giữa đường thẳng và mặt phẳng

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Góc giữa đường thẳng và mặt phẳng</strong><p>Nếu \(a\perp(P)\), góc đường–mặt bằng <strong>\(90^\circ\)</strong>. Nếu \(a\not\perp(P)\), góc là góc giữa \(a\) và <strong>hình chiếu \(a'\)</strong> của \(a\) lên \((P)\). Luôn \(0^\circ\le\alpha\le90^\circ\); với \(a\subset(P)\) hoặc \(a\parallel(P)\), góc bằng \(0^\circ\).</p></div>

    **Tỉ số trong tam giác vuông:** Với \(AH\perp(P)\), \(M\in(P)\), \(M\ne H\), góc \(\alpha=\angle AMH\). Khi đó \(\sin\alpha=AH/AM\), \(\cos\alpha=HM/AM\), \(\tan\alpha=AH/HM\), với \(HM>0\). Đường vuông góc \((P)\) dùng quy ước góc \(90^\circ\), không tính \(\tan90^\circ\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B24-01_R00.svg" alt="Góc tại M của tam giác vuông AMH giữa đường xiên AM và hình chiếu HM là góc đường với mặt"><figcaption><strong>Tra góc:</strong> chọn **\(\angle AMH\) tại \(M\)** giữa \(MA\) và \(MH\), không phải góc tại \(A\) giữa \(AM\) và phương đứng \(AH\). Hai góc nhọn của tam giác vuông **phụ nhau**, có tổng \(90^\circ\).</figcaption></figure>

    **Nhận dạng mặt phẳng chiếu:** Khi đề hỏi góc của đường \(SC\) với \((SAB)\), hãy tìm chân vuông góc của \(C\) lên \((SAB)\), không mặc định chiếu xuống đáy \((ABC)\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B24_SABC_PROJECTION_EXAMPLE_AUTHORING_20261123.svg" alt="Ví dụ SGK hình chóp SABC: CM vuông góc SAB, SC chiếu lên SAB thành SM, góc CSM bằng 60 độ"><figcaption><strong>Tra Ví dụ 2 SGK:</strong> \(M\) là trung điểm \(AB\); vì \(CA=CB\) nên \(CM\perp AB\); vì \(SA\perp(ABC)\) nên \(CM\perp SA\). Vậy \(CM\perp(SAB)\), hình chiếu của \(SC\) là \(SM\). Khung phải: \(SM=a\sqrt2\), \(SC=a\sqrt8\), \(\cos\angle CSM=1/2\), suy góc \(60^\circ\).</figcaption></figure>

    **Ví dụ 2 SGK — Hai mặt phẳng chiếu khác nhau:** Trong chóp \(S.ABC\), \(SA\perp(ABC)\), \(SA=a\), \(CA=CB=a\sqrt7\), \(AB=2a\) (\(a>0\)), góc giữa \(SB\) và đáy có \(\tan\angle SBA=1/2\). Mặt khác \(CM\perp(SAB)\), nên góc giữa \(SC\) và \((SAB)\) là \(\angle CSM=60^\circ\), không phải góc giữa \(SC\) và đáy.

    | Vị trí của đường \(a\) | Hình chiếu vuông góc lên \((P)\) | Góc đường–mặt |
    | :-- | :-- | :-- |
    | \(a\subset(P)\) | \(a\) | \(0^\circ\) |
    | \(a\parallel(P)\) | Một đường trong \((P)\) cùng phương \(a\) | \(0^\circ\) |
    | \(a\) cắt xiên \((P)\) | Một đường \(a'\subset(P)\) | \(0^\circ<\alpha<90^\circ\) |
    | \(a\perp(P)\) | Một điểm | \(90^\circ\) |

    **Áp dụng đúng giới hạn:** Nếu máy bay bay thẳng, tốc độ không đổi, quãng bay xiên \(s\) và góc cất cánh \(\alpha\) không đổi so với mặt đất phẳng, độ cao mô hình là \(h=s\sin\alpha\). Nếu thiếu góc (hoặc một dữ kiện tương đương), biết tốc độ không đủ để tính độ cao.

=== "Ví dụ"

    ### 3.1. Chiếu điểm và đường vuông góc mặt phẳng

    **Đề bài.** Điểm \(A\notin(P)\), \(H\) là chân đường vuông góc từ \(A\) xuống \((P)\), \(M\in(P)\) và \(M\ne H\). Xác định hình chiếu của điểm \(A\), đoạn \(AH\) và đoạn \(AM\) lên \((P)\).

    **Phân tích:** Hình chiếu của **một điểm** là chân pháp tuyến; hình chiếu **đoạn** có hai đầu mút là hai điểm ảnh, nhưng có thể **co thành một điểm** khi hai đầu mút trùng ảnh.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.1"><p><strong>Lời giải.</strong> Vì \(AH\perp(P)\), hình chiếu của \(A\) là \(H\). Điểm \(H\in(P)\) tự chiếu thành \(H\), nên hình chiếu đoạn \(AH\) chỉ là điểm \(H\). Điểm \(M\in(P)\) tự chiếu thành \(M\), nên đoạn \(AM\) chiếu thành đoạn \(HM\).</p></div>

    **Kiểm lại:** Không gọi điểm \(H\) là **một đường thẳng**. Điều kiện \(M\ne H\) làm đoạn chiếu \(HM\) không suy biến.

    ### 3.2. Bóng nắng và phép chiếu vuông góc

    **Đề bài.** Một cột đứng \(AH\perp(P)\) trên sân. Bóng của cột dưới các tia sáng xiên được tạo bởi phép chiếu song song theo phương tia sáng. Có thể gọi đó là phép chiếu vuông góc không? Nếu nắng chiếu theo phương vuông góc sân thì bóng hình học của cột có dạng gì?

    **Phân tích:** Phép chiếu vuông góc là **phép chiếu song song có phương chiếu vuông góc mặt sân**. Hướng các tia sáng, không phải sự đứng thẳng của cột, quyết định tên phép chiếu.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.2"><p><strong>Lời giải.</strong> Khi tia sáng xiên, phương chiếu không vuông góc \((P)\), nên bóng cột là hình chiếu song song **không phải hình chiếu vuông góc**. Nếu các tia sáng vuông góc sân, cột \(AH\) cũng song song phương chiếu và toàn bộ cột chiếu về chân \(H\); bóng hình học chỉ còn **một điểm \(H\)**.</p></div>

    **Kiểm lại:** Không suy “cột vuông góc sân thì mọi cái bóng đều là hình chiếu vuông góc”. Phải kiểm **phương chiếu**.

    ### 3.3. Dùng định lí ba đường vuông góc

    **Đề bài.** Trên mặt sân \((P)\), bốn cột \(AM,BN,CP,DQ\) vuông góc sân tại \(A,B,C,D\). Chứng minh nếu \(BD\perp AC\) thì \(BD\perp MP\), với \(M,P\) là đỉnh của hai cột tại \(A,C\).

    **Phân tích:** Xác định **hình chiếu của đường xiên \(MP\)**: hai đầu mút \(M,P\) chiếu về \(A,C\), nên hình chiếu là \(AC\) (với \(A\ne C\)). Sau đó dùng một đường **nằm trong sân** là \(BD\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.3"><p><strong>Lời giải.</strong> Vì các cột \(AM,CP\) vuông góc \((P)\), \(M\mapsto A\), \(P\mapsto C\); do đó hình chiếu của \(MP\) lên \((P)\) là \(AC\). Đường \(BD\subset(P)\) và \(BD\perp AC\). Theo định lí ba đường vuông góc, \(BD\perp MP\).</p></div>

    **Kiểm lại:** Nếu \(MP\perp(P)\) thì hình chiếu sẽ là **một điểm**; ở đây \(A\ne C\) nên hình chiếu đúng là đường \(AC\). Không nhầm \(BD\perp MP\) với “BD cắt MP”.

    ### 3.4. Hình chiếu tam giác có thể suy biến

    **Đề bài.** Trong chóp \(S.ABC\), \(SA\perp(ABC)\). Xác định hình chiếu của các tam giác \(SBC,SCA,SAB\) lên mặt đáy.

    **Phân tích:** Chiếu **từng đỉnh** rồi nối các điểm ảnh; vì \(S\mapsto A\), một số hình ban đầu có hai đỉnh trùng nhau sau chiếu.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.4"><p><strong>Lời giải.</strong> Trên \((ABC)\), các điểm \(A,B,C\) tự chiếu thành chính chúng và \(S\mapsto A\). Do đó \(SBC\mapsto ABC\) (tam giác), \(SCA\mapsto AC\) (đoạn thẳng), \(SAB\mapsto AB\) (đoạn thẳng).</p></div>

    **Kiểm lại:** Hình \(SCA\) không thành một tam giác khác, vì \(S\) và \(A\) có **cùng hình chiếu \(A\)**. Sự suy biến này đúng với phép chiếu song song nói chung.

    ### 3.5. Đọc góc đường–mặt từ tam giác 6–8–10

    **Đề bài.** Một đoạn dốc dài 10 m, cao hơn nền 6 m. Tính độ dài hình chiếu trên nền và \(\sin\alpha,\tan\alpha\), với \(\alpha\) là góc giữa đoạn dốc và mặt nền.

    **Phân tích:** Độ dài 10 là **cạnh huyền**, 6 là **độ cao vuông góc**; hình chiếu là cạnh ngang chưa biết. Dùng Pythagore trước, tỉ số lượng giác sau.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.5"><p><strong>Lời giải.</strong> Đoạn chiếu \(d=\sqrt{10^2-6^2}=8\) m. Vì góc đường–mặt là góc ở đầu đoạn dốc trên nền, \(\sin\alpha=6/10=3/5\), \(\tan\alpha=6/8=3/4\). Góc \(\alpha=\arcsin(3/5)\approx36{,}9^\circ\).</p></div>

    **Kiểm lại:** \(\tan\alpha=3/4\), **không** phải \(6/10\); vì mẫu số của tang là đoạn **chiếu ngang** 8 m.

    ### 3.6. Ví dụ 2 SGK — Hai góc với hai mặt phẳng khác nhau

    **Đề bài.** Cho chóp \(S.ABC\) với \(SA\perp(ABC)\), \(SA=a\), \(CA=CB=a\sqrt7\), \(AB=2a\) (\(a>0\)). a) Tính tang góc giữa \(SB\) và \((ABC)\). b) Tính góc giữa \(SC\) và \((SAB)\).

    **Phân tích:** Phần a, hình chiếu \(SB\) xuống đáy là \(AB\). Phần b, mặt phẳng yêu cầu **đổi thành \((SAB)\)**, nên phải tìm hình chiếu của \(C\) lên mặt này. Lấy trung điểm \(M\) của \(AB\) để chứng minh \(CM\perp(SAB)\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B24_SABC_PROJECTION_EXAMPLE_AUTHORING_20261123.svg" alt="Hình chóp SABC theo dữ kiện SGK, trung điểm M của AB và CM vuông góc SAB để SC chiếu thành SM"><figcaption><strong>Đọc hình trước lời giải:</strong> \(SA\) vuông góc **đáy** tại \(A\). Với phần b phải tìm hình chiếu lên mặt \((SAB)\): đường \(CM\) vuông góc **hai đường cắt nhau** \(AB,SA\) trong mặt ấy; kết luận \(SM\) là hình chiếu \(SC\) trên \((SAB)\). Góc cuối cùng nằm ở \(S\) trong tam giác vuông \(SMC\).</figcaption></figure>

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.6"><p><strong>Lời giải.</strong> a) \(SB\) chiếu xuống \((ABC)\) thành \(AB\); góc cần tìm là \(\angle SBA\). Vì tam giác \(SAB\) vuông tại \(A\), \(\tan\angle SBA=SA/AB=a/(2a)=1/2\). b) Lấy \(M\) là trung điểm \(AB\). Tam giác \(ABC\) cân tại \(C\) nên \(CM\perp AB\); vì \(SA\perp(ABC)\), \(CM\perp SA\). Hai đường \(AB,SA\subset(SAB)\) cắt nhau, nên \(CM\perp(SAB)\). Hình chiếu \(SC\) lên \((SAB)\) là \(SM\). \(SM=\sqrt{SA^2+AM^2}=a\sqrt2\); \(SC=\sqrt{SA^2+AC^2}=a\sqrt8\), nên \(\cos\angle CSM=SM/SC=1/2\); góc cần tìm bằng \(60^\circ\).</p></div>

    **Kiểm lại:** \(a>0\) nên được rút gọn \(a\) trong tỉ số. Hai phần xét **hai mặt phẳng khác nhau**; không dùng \(\angle SBA\) cho phần b.

    ### 3.7. Máy bay: quãng đường bay và độ cao

    **Đề bài.** Máy bay bay thẳng với tốc độ không đổi \(240\) km/h, góc cất cánh \(30^\circ\) so với nền ngang. Tính quãng đường và độ cao sau đúng một phút.

    **Phân tích:** Đổi \(1\) phút \(=1/60\) giờ. Quãng bay là cạnh xiên; độ cao là cạnh đối của góc cất cánh, nên phải nhân với \(\sin30^\circ\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.7"><p><strong>Lời giải.</strong> Quãng bay thẳng \(s=240\cdot1/60=4\) km. Theo mô hình tam giác vuông, độ cao \(h=s\sin30^\circ=4\cdot1/2=2\) km. Quãng chiếu trên mặt đất bằng \(4\cos30^\circ=2\sqrt3\) km.</p></div>

    **Kiểm lại:** Nếu không có góc \(30^\circ\), dữ kiện tốc độ chỉ đủ tính **4 km quãng đường**, chưa đủ tính độ cao. Mô hình không tính giai đoạn thay đổi góc/tốc độ.

    ### 3.8. Góc đường chéo của hình lập phương với mặt đáy

    **Đề bài.** Cho hình lập phương \(ABCD.A'B'C'D'\) cạnh \(a>0\). Xác định góc giữa \(A'C\) và đáy \((ABCD)\); tính \(\tan\alpha\) và số đo gần đúng của góc.

    **Phân tích:** \(A'\) chiếu xuống mặt đáy tại \(A\), \(C\) nằm trong đáy. Vậy hình chiếu \(A'C\) là đường \(AC\); góc cần tìm ở **\(C\)** giữa \(CA'\) và \(CA\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.8"><p><strong>Lời giải.</strong> Tam giác \(A'AC\) vuông tại \(A\). Vì \(A'A=a\), \(AC=a\sqrt2\), \(\tan\alpha=A'A/AC=1/\sqrt2=\sqrt2/2\). Do đó \(\alpha=\arctan(1/\sqrt2)\approx35{,}3^\circ\).</p></div>

    **Kiểm lại:** Góc giữa đường với đáy không phải \(90^\circ\): \(A'C\) là đường **xiên**, không vuông góc đáy. Độ dài \(AC=a\sqrt2\) là đường chéo đáy, không phải cạnh \(a\).

=== "Lỗi thường gặp"

    ### 4.1. Gọi mọi cái bóng là phép chiếu vuông góc

    **Dấu hiệu:** Cột vuông góc sân nên cho rằng bóng dưới tia nắng xiên là hình chiếu vuông góc.

    **Vì sao sai:** Tên phép chiếu phụ thuộc **phương chiếu**, không phụ thuộc riêng phương của vật. Tia nắng xiên cho phép chiếu song song nhưng không theo pháp tuyến sân.

    **Cách sửa:** Kiểm \(\Delta\perp(P)\). Chỉ khi phương chiếu vuông góc mặt phẳng mới gọi là phép chiếu vuông góc.

    ### 4.2. Chiếu đường vuông góc thành một đường

    **Dấu hiệu:** Với \(a\perp(P)\), vẽ hình chiếu \(a'\) như một đường trên \((P)\).

    **Vì sao sai:** Mọi điểm trên \(a\) nằm cùng một phương chiếu và cùng cho **một chân** trên \((P)\).

    **Cách sửa:** Hình chiếu của \(a\perp(P)\) chỉ là **một điểm**; không áp định lí ba đường vuông góc với hình chiếu suy biến.

    ### 4.3. Đổi vai của ba đường trong định lí

    **Dấu hiệu:** Có \(b\subset(P)\), đường xiên \(a\), nhưng lấy hình chiếu của \(b\) rồi suy vuông góc tùy ý.

    **Vì sao sai:** Định lí yêu cầu đường xiên \(a\not\perp(P)\) và **hình chiếu của chính nó** là \(a'\), còn \(b\) nằm sẵn trong mặt.

    **Cách sửa:** Xác định đúng bốn vai: mặt \((P)\), đường xiên \(a\), đường chiếu \(a'\), đường \(b\subset(P)\). Dùng \(b\perp a\iff b\perp a'\).

    ### 4.4. Chiếu xuống sai mặt phẳng rồi lấy nhầm góc

    **Dấu hiệu:** Bài hỏi góc \(SC\) với \((SAB)\), nhưng dùng \(AC\) là hình chiếu trên \((ABC)\).

    **Vì sao sai:** Một đường có thể có **hình chiếu khác nhau lên các mặt phẳng khác nhau**. \(AC\) chỉ là hình chiếu \(SC\) lên đáy khi \(SA\perp(ABC)\).

    **Cách sửa:** Chứng minh \(CM\perp(SAB)\) trong Ví dụ 3.6, xác định \(SM\) là hình chiếu cần dùng và đọc góc \(\angle CSM\).

    ### 4.5. Đánh tráo sin, cos, tan hoặc góc với phương đứng

    **Dấu hiệu:** Dốc 10 m và cao 6 m mà cho \(\tan\alpha=6/10\), hoặc lấy góc tại đỉnh trên của dây.

    **Vì sao sai:** Tang dùng **cao/ngang**, sin dùng **cao/xiên**. Góc giữa đường xiên và phương đứng là góc **phụ** với góc đường–mặt.

    **Cách sửa:** Vẽ tam giác vuông, đánh dấu góc ở đầu đường xiên thuộc nền, tìm đoạn chiếu bằng Pythagore rồi mới chọn tỉ số.

    ### 4.6. Lấy quãng bay làm độ cao, quên điều kiện mô hình

    **Dấu hiệu:** Bay \(240\) km/h trong một phút nên kết luận độ cao bằng 4 km hoặc tính \(\tan30^\circ\) nhân quãng bay xiên.

    **Vì sao sai:** Quãng bay xiên \(s=4\) km, độ cao \(h=s\sin\alpha\) chỉ xác định khi đã biết góc và mô hình bay thẳng thích hợp.

    **Cách sửa:** Đổi phút sang giờ, xác định đúng cạnh xiên và cạnh cao; lấy \(h=4\sin30^\circ=2\) km. Nếu đề thiếu góc, nói rõ **không đủ dữ kiện**.

    **Học tiếp:** [Core và Luyện tập Bài 24](luyen-tap.md) · [Tự luận Chương VII](../../../thu-vien/tu-luan-g11-chuong-vii.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">Nguồn S1: SGK Toán 11 Kết nối tri thức với cuộc sống, tập hai, Bài 24 trang in 38–43. Hai mục SGK: “Phép chiếu vuông góc”; “Góc giữa đường thẳng và mặt phẳng”. HĐ1, HĐ2, HĐ3, Ví dụ 1–2 và các trường hợp suy biến đã được đối chiếu với văn bản bản số hóa của SGK. Trang PDF screenshot và offset trang in↔chỉ số PDF chưa xác minh được do lỗi truy xuất ảnh, giữ SOURCE_VISUAL_OFFSET_HOLD. SVG tam giác dốc gốc được tái dùng nguyên file; bổ sung hai SVG cho định lí ba đường vuông góc và ví dụ hình chóp với mặt phẳng chiếu đổi. Mọi hình có ALT và hướng dẫn đọc tại chỗ. Chỉ sửa trang Kiến thức; Core/Luyện tập, Tự kiểm tra, ngân hàng và đánh giá giữ nguyên.</p>


## === END G11-CHVII-B24 ===

## === BEGIN G11-CHVII-B25 | PR#1052 | HEAD 4b0e5f754e62d5a1178500f0ad53fa592cca9370 | BLOB 79f444209a0c88a4538ddb495adbac3e7726452c ===

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

    ### 1.3. Tính chất của hai mặt phẳng vuông góc

    **Vì sao phải kiểm giao tuyến?** Nếu \((P)\perp(Q)\) và giao tuyến là \(\Delta\), một đường \(a\subset(P)\) **vuông góc \(\Delta\)** sẽ vuông góc **toàn mặt \((Q)\)**. Thật vậy, chọn \(O=a\cap\Delta\), lấy trong \((Q)\) đường \(b\) qua \(O\) vuông góc \(\Delta\). Do hai mặt vuông góc, \(a\perp b\); mà \(a\perp\Delta\). Hai đường \(b,\Delta\) cắt nhau trong \((Q)\), suy \(a\perp(Q)\). Điều kiện \(a\perp\Delta\) không thể bỏ: chính \(\Delta\subset(P)\) vẫn nằm trong \((Q)\), nên không vuông góc \((Q)\).

    **Tính chất của hai mặt cùng vuông góc một mặt thứ ba:** Nếu hai mặt \((P),(Q)\) **cắt nhau** theo \(d\) và đều vuông góc với \((R)\), thì \(d\perp(R)\). Vì qua mỗi điểm \(O\in d\) chỉ có một đường vuông góc \((R)\), mà đường ấy phải thuộc từng mặt \((P),(Q)\), nên nó trùng giao tuyến \(d\). Nếu hai mặt **song song**, chúng không có giao tuyến; không áp kết luận về \(d\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B25_PERPENDICULAR_PLANES_AUTHORING_20261123.svg" alt="Mô hình tính chất mặt P vuông góc Q, và hai mặt P Q cùng vuông góc nền R có giao tuyến d vuông góc R"><figcaption><strong>Hướng dẫn đọc:</strong> khung trái, với **giả thiết** hai mặt vuông góc, đường \(a\subset(P)\) vuông góc giao tuyến \(\Delta\) sẽ vuông góc \((Q)\). Khung phải, hai mặt đứng \((P),(Q)\) **cắt nhau theo \(d\)** và cùng vuông góc nền \((R)\), vì thế \(d\perp(R)\). Các dấu vuông góc là quan hệ được chứng minh, không suy từ nét nghiêng trên hình.</figcaption></figure>

    **Ví dụ 3 SGK — Hai lần dùng định lí:** Cho hình chóp \(S.ABCD\) đáy là hình chữ nhật, \(SA\perp(ABCD)\); gọi \(B',C',D'\) lần lượt là hình chiếu của \(A\) trên \(SB,SC,SD\). Do \(BC\perp AB\) và \(BC\perp SA\), suy \(BC\perp(SAB)\), mà \(BC\subset(SBC)\), vậy \((SBC)\perp(SAB)\). Đường \(AB'\subset(SAB)\) và \(AB'\perp SB\), với \(SB\) là giao tuyến \((SBC)\cap(SAB)\), nên theo tính chất vừa học \(AB'\perp(SBC)\). Suy \(AB'\perp SC\); tương tự \(AD'\perp SC\), còn \(AC'\perp SC\) do định nghĩa hình chiếu. Vậy \(B',C',D'\) cùng nằm trên mặt phẳng qua \(A\) vuông góc \(SC\). Điểm cốt lõi là **không** kết luận từ một góc vuông đơn lẻ.

    **Vận dụng.** Hai mặt phẳng \((P),(Q)\) khác nhau, cắt theo \(d\), cùng vuông góc nền \((R)\). Kết luận quan hệ \(d\) với \((R)\), và giải thích vì sao không làm vậy nếu \((P)\parallel(Q)\).

    ??? question "Đối chiếu"

        **Lời giải:** Theo tính chất, \(d\perp(R)\). Nếu \((P)\parallel(Q)\) thì **không tồn tại giao tuyến \(d\)** để kết luận; yêu cầu hai mặt cắt nhau là thiết yếu.

    ??? tip "Kiểm lỗi"

        Đừng viết “hai mặt cùng vuông góc mặt thứ ba thì giao tuyến vuông góc” khi chưa xác nhận chúng **cắt nhau**.

    ### 1.4. Góc nhị diện

    **Một góc \(105^\circ\) của lưng ghế có mâu thuẫn với góc hai mặt luôn không tù?** Không. Đối tượng đang đo khác nhau. Hai **nửa mặt phẳng** có chung bờ \(\Delta\) xác định một **góc nhị diện** \([P,\Delta,Q]\). Qua một điểm \(O\) trên \(\Delta\), dựng hai tia \(Ox,Oy\) lần lượt thuộc **hai nửa mặt đã chọn** và đều vuông góc \(\Delta\); góc \(\angle xOy\) gọi là **góc phẳng nhị diện**. Số đo của nó từ \(0^\circ\) đến \(180^\circ\), có thể nhọn, vuông hoặc tù. Ngược lại, góc giữa **hai mặt phẳng không định hướng** luôn chọn góc không tù giữa hai đường chứa các tia.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B25-01_R00.svg" alt="Hai nửa mặt chung cạnh Delta, các tia OU OV nằm trong hai nửa mặt tạo góc phẳng nhị diện"><figcaption><strong>Hướng dẫn đọc:</strong> \(\Delta\) là cạnh chung của hai nửa mặt, \(O\) là điểm dựng tiết diện; \(OU,OV\) vuông góc \(\Delta\) và hướng **vào đúng hai nửa mặt đề cho**. Giữ \(\angle UOV\) khi hỏi góc nhị diện; khi hỏi góc hai mặt, xét góc không tù giữa hai đường chứa các tia.</figcaption></figure>

    **HĐ5 SGK — Mặt ghế và lưng ghế:** Một hướng dẫn thiết kế cho góc phẳng nhị diện khoảng \(100^\circ\) đến \(105^\circ\) về phía người ngồi. Khi đó góc giữa các **mặt phẳng chứa ghế và lưng ghế** bằng \(180^\circ-\theta\), tức trong khoảng \(75^\circ\) đến \(80^\circ\). Đây là ví dụ cần đọc **hai nửa mặt đã chọn** chứ không lấy một góc bất kì ở bản lề.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B25_DIHEDRAL_CHAIR_AUTHORING_20261123.svg" alt="Sơ đồ tiết diện qua bản lề ghế, góc phẳng nhị diện 105 độ và góc hai mặt là 75 độ"><figcaption><strong>Hướng dẫn đọc:</strong> tia \(Ox\) theo mặt ghế và \(Oy\) theo lưng ghế làm góc **\(105^\circ\)** ở phía người ngồi; đó là **góc nhị diện**. Góc nhỏ giữa **hai đường** chứa các tia bằng \(75^\circ\), là góc giữa **hai mặt phẳng**. Đây là sơ đồ giải thích, không phải phép đo một chiếc ghế cụ thể.</figcaption></figure>

    **Ví dụ 4 SGK — Chọn đúng nửa mặt:** Cho chóp \(S.ABCD\), \(SA\perp(ABCD)\), đáy hình thoi cạnh \(a\) có \(AC=a\) và \(SA=a/2\). Hai tam giác \(ABC,ACD\) đều nên \(\angle BAD=120^\circ\); đó là góc nhị diện \([B,SA,D]\). Gọi \(O\) là giao hai đường chéo; \(AO=a/2=SA\), \(SOA\) vuông tại \(A\), nên \([S,BD,A]\) có góc phẳng \(45^\circ\), còn \([S,BD,C]\) có góc phẳng \(135^\circ\). Cả hai nhị diện cùng chung giao tuyến \(BD\) nhưng có **hai nửa đáy khác phía**, không được cho cùng số đo.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B25_RHOMBUS_PYRAMID_DIHEDRAL_AUTHORING_20261123.svg" alt="Chóp đáy hình thoi với tam giác SAO vuông, các góc BAD 120 độ AOS 45 độ COS 135 độ"><figcaption><strong>Hướng dẫn đọc:</strong> Trái: đáy \(ABCD\) có \(AC=a\), nên \(\angle BAD=120^\circ\). Phải: \(SA=AO=a/2\), tam giác \(SAO\) vuông tại \(A\), nên \(\angle AOS=45^\circ\), và hai tia \(OA,OC\) đối nhau cho \(\angle COS=135^\circ\).</figcaption></figure>


    **Vận dụng.** Tiết diện vuông góc bản lề ghế có góc giữa hai tia mặt ghế và lưng ghế (phía người ngồi) bằng \(102^\circ\). Tính góc nhị diện và góc giữa hai mặt phẳng chứa hai phần ghế.

    ??? question "Đối chiếu"

        **Lời giải:** Góc nhị diện của **hai nửa mặt đã chọn** bằng \(102^\circ\); góc không tù giữa **hai mặt phẳng** bằng \(180^\circ-102^\circ=78^\circ\).

    ??? tip "Kiểm lỗi"

        Không thay ngay \(102^\circ\) bằng \(78^\circ\) khi đề hỏi **góc nhị diện**. Ngược lại, không lấy góc tù làm **góc giữa hai mặt**.

    ### 1.5. Một số hình lăng trụ đặc biệt

    **Thứ tự nhận biết phải rõ:** Hình **lăng trụ đứng** là lăng trụ có **các cạnh bên vuông góc với mặt đáy**. Do đó các mặt bên là **hình chữ nhật** và các cạnh bên đúng bằng **chiều cao**. Hình **lăng trụ đều** là lăng trụ đứng có **đáy là đa giác đều**. Vì mọi cạnh của đa giác đều bằng nhau, các mặt bên của lăng trụ đều là các hình chữ nhật **cùng kích thước**. Một lăng trụ đứng đáy tam giác \(3,4,5\) **không** phải lăng trụ đều.

    **Trong họ hình hộp:** Hình hộp đứng có đáy là **hình bình hành** và cạnh bên vuông góc mặt đáy. Khi đáy thành hình chữ nhật, đó là **hình hộp chữ nhật**, có sáu mặt chữ nhật. Nếu mọi cạnh hình hộp chữ nhật **bằng nhau**, ta được **hình lập phương** với sáu mặt vuông. Hình hộp đứng có thể có đáy hình bình hành không vuông, nên không phải toàn bộ sáu mặt đều chữ nhật.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B25_SPECIAL_PRISMS_AUTHORING_20261123.svg" alt="Ba hình minh họa: lăng trụ đứng đáy không đều, lăng trụ đều đáy tam giác đều, hình lập phương"><figcaption><strong>Hướng dẫn đọc trái sang phải:</strong> khối thứ nhất chỉ cần **cạnh bên vuông góc đáy**; khối thứ hai còn có **đáy đa giác đều**; khối thứ ba là **hộp chữ nhật mọi cạnh bằng nhau**. Hình dùng minh họa kiểu khối, không cho phép kết luận các đoạn bằng nhau chỉ bằng tỉ lệ ảnh.</figcaption></figure>

    **Đọc theo HĐ6–HĐ10 SGK:** Lăng trụ đứng có mặt bên chữ nhật và vuông góc đáy vì chứa cạnh bên vuông góc đáy. Lăng trụ đều có các mặt bên chữ nhật bằng nhau. Hình hộp đứng có **ít nhất bốn mặt bên** là chữ nhật; hình hộp chữ nhật có cả sáu mặt chữ nhật, hình lập phương có sáu mặt vuông. Đối với hình hộp chữ nhật, bốn đường chéo không gian bằng nhau và gặp nhau ở trung điểm chung. Không nhầm **đường chéo mặt** với **đường chéo không gian**.

    **Ví dụ 6 SGK:** Trong hình lập phương cạnh \(a>0\), tam giác \(A'BD\) có ba cạnh \(A'B,A'D,BD\) đều là đường chéo của các hình vuông cạnh \(a\), nên đều bằng \(a\sqrt2\). Do đó **tam giác \(A'BD\) đều**. Điều này cần chứng minh bằng độ dài, không dựa vào hình khối có vẻ đối xứng.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B25_CUBE_EQUILATERAL_DIAGONALS_AUTHORING_20261123.svg" alt="Tam giác A phẩy BD trong hình lập phương được tạo bởi ba đường chéo mặt A phẩy B, A phẩy D, BD"><figcaption><strong>Hướng dẫn đọc:</strong> Ba đường tô màu \(A'B,A'D,BD\) là đường chéo của các mặt vuông cạnh \(a\), nên mỗi đoạn dài \(a\sqrt2\). Tam giác \(A'BD\) đều vì ba cạnh bằng nhau.</figcaption></figure>


    **Vận dụng.** Một lăng trụ có các cạnh bên vuông góc đáy, dài \(6\) cm, đáy là tam giác có cạnh \(3,4,5\) cm. Đây có phải lăng trụ đều không? Tính diện tích mặt bên dựa trên cạnh đáy dài \(3\) cm.

    ??? question "Đối chiếu"

        **Lời giải:** Đây là **lăng trụ đứng** nhưng không phải lăng trụ đều vì tam giác đáy \(3,4,5\) không đều. Mặt bên ứng với cạnh đáy \(3\) cm là hình chữ nhật cao \(6\) cm, diện tích \(3\cdot6=18\) cm².

    ??? tip "Kiểm lỗi"

        Không dùng từ “đều” chỉ vì lăng trụ **đứng**; cần thêm điều kiện đáy là **đa giác đều**.

    ### 1.6. Hình chóp đều và hình chóp cụt đều

    **Từ tháp kính Louvre đến định nghĩa:** Hình chóp đều là hình chóp có **đáy là đa giác đều** và **các cạnh bên bằng nhau**. Gọi \(O\) là chân đường vuông góc từ đỉnh \(S\) xuống đáy. Khi các cạnh bên bằng nhau, với \(SO\) chung, những tam giác vuông \(SOA_i\) cho \(OA_1=\dots=OA_n\), nên \(O\) là **tâm đa giác đáy đều**. Ngược lại, nếu đáy đều và \(O\) là tâm đáy thì các cạnh bên \(SA_i\) bằng nhau theo Pythagore. Vì vậy SGK có tiêu chuẩn tương đương: **đáy đều và chân đường cao ở tâm đáy**.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B25_REGULAR_PYRAMID_FRUSTUM_AUTHORING_20261123.svg" alt="Hình chóp đều có đường cao SO tới tâm O của đáy; hình chóp cụt đều hai đáy song song có đường cao HK"><figcaption><strong>Hướng dẫn đọc hình trái:</strong> \(ABCD\) là hình vuông, \(O\) là tâm đáy; đoạn đỏ nét đứt \(SO\perp(ABCD)\) là **đường cao**, còn cạnh nghiêng \(SA\) là **cạnh bên**, không phải chiều cao. Hình phải là phần chóp cụt được giải thích ngay dưới đây.</figcaption></figure>

    **Tính ví dụ thực tế theo dữ kiện SGK:** Tháp kính Louvre được mô tả bằng chóp đáy vuông cạnh \(34\) m, cạnh bên khoảng \(32{,}3\) m. Tâm \(O\) đáy cách mỗi đỉnh \(A\) một đoạn \(OA=17\sqrt2\) m. Trong tam giác vuông \(SOA\), chiều cao mô hình \(SO=\sqrt{32{,}3^2-(17\sqrt2)^2}\approx21{,}57\) m. Đây là tính theo mô hình hình chóp đều với số liệu **xấp xỉ**, không phải khẳng định chiều cao đo thực tế chính xác.

    **Cắt chóp đều bằng mặt song song với đáy:** Mặt cắt không qua đỉnh tạo chóp đều nhỏ hơn, đồng dạng với chóp ban đầu. Phần nằm **giữa hai mặt đáy** gọi là **hình chóp cụt đều**, có hai đáy là đa giác đều song song, đồng dạng; các mặt bên là hình **thang cân**. Đường thẳng qua **hai tâm đáy** vuông góc với mỗi đáy; đoạn nối hai tâm \(HK\) là **đường cao** và độ dài \(HK\) là **chiều cao**. Cạnh bên nghiêng dài hơn đường cao nếu hai đáy khác cỡ.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B25_REGULAR_PYRAMID_FRUSTUM_AUTHORING_20261123.svg" alt="Hình chóp cụt đều với hai đáy vuông song song, đoạn HK nối tâm hai đáy là đường cao"><figcaption><strong>Hướng dẫn đọc khung phải:</strong> đáy dưới \(ABCD\) lớn, đáy trên \(A'B'C'D'\) nhỏ, cả hai song song và có tâm \(H,K\). Đoạn đỏ nét đứt \(HK\) vuông góc cả hai đáy là **đường cao**; đoạn \(AA'\) là **cạnh bên xiên**, không thay được chiều cao.</figcaption></figure>

    **Ví dụ 8 SGK — cạnh bên chóp cụt tam giác đều:** Hai đáy tam giác đều có cạnh \(a>a'>0\), khoảng cách hai mặt đáy \(h>0\). Khoảng cách từ tâm đáy đến đỉnh tương ứng của hai tam giác lần lượt là \(a/\sqrt3\), \(a'/\sqrt3\). Độ lệch theo mặt đáy của hai đỉnh tương ứng là \((a-a')/\sqrt3\). Bởi vậy độ dài **cạnh bên** bằng
    \[
    \ell=\sqrt{h^2+\frac{(a-a')^2}{3}}.
    \]
    Lỗi thường gặp là dùng \(a-a'\) thay trực tiếp cho độ lệch ngang, quên rằng bán kính ngoại tiếp **tam giác đều** bằng cạnh chia \(\sqrt3\).

    **Vận dụng.** Chóp tứ giác đều \(S.ABCD\) có cạnh đáy \(6\) cm, đường cao \(SO=4\) cm. Tính cạnh bên \(SA\); nếu cắt chóp theo một mặt phẳng song song đáy, đâu là đường cao của phần chóp cụt?

    ??? question "Đối chiếu"

        **Lời giải:** Tâm hình vuông có \(OA=6\sqrt2/2=3\sqrt2\) cm. Tam giác \(SOA\) vuông tại \(O\), suy \(SA=\sqrt{SO^2+OA^2}=\sqrt{16+18}=\sqrt{34}\) cm. Với chóp cụt đều, đường cao là đoạn nối **hai tâm đáy**, vuông góc hai mặt đáy, không phải cạnh bên xiên.

    ??? tip "Kiểm lỗi"

        Không trả \(SA=SO=4\) cm; cạnh bên là **cạnh huyền** của tam giác \(SOA\). Cũng đừng định nghĩa chóp đều là hình chóp mà “mọi cạnh bên vuông góc đáy”.

=== "Kiến thức SGK"

    ### 2.1. Góc giữa hai mặt phẳng, hai mặt phẳng vuông góc

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Góc giữa hai mặt phẳng</strong><p>Cho hai mặt phẳng \((P),(Q)\). Lấy các đường \(a\perp(P)\), \(b\perp(Q)\); <strong>góc giữa hai mặt phẳng</strong> được định nghĩa là góc không tù giữa \(a,b\), không phụ thuộc cách chọn hai pháp tuyến. Góc \(\varphi\) thỏa \(0^\circ\le\varphi\le90^\circ\). Hai mặt gọi là <strong>vuông góc</strong> khi \(\varphi=90^\circ\).</p></div>

    **Đo bằng tiết diện qua giao tuyến:** Nếu \((P)\cap(Q)=d\), lấy \(O\in d\), các đường \(m\subset(P)\), \(n\subset(Q)\) cùng qua \(O\), \(m\perp d,n\perp d\), thì \(((P),(Q))=(m,n)\), lấy góc không tù. Không áp công thức cho hai đường bất kì trên hai mặt.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B25-01_R00.svg" alt="Mặt phẳng cắt theo Delta, hai tia OU OV vuông góc Delta để đọc tiết diện"><figcaption><strong>Tra hình:</strong> từ giao tuyến \(\Delta\) và điểm \(O\), dựng hai phương đều vuông góc \(\Delta\). Hình cho **góc phẳng của hai nửa mặt đã chọn**; khi tìm góc **hai mặt phẳng**, lấy góc không tù giữa hai đường chứa \(OU,OV\).</figcaption></figure>

    **Ví dụ SGK:** Với chóp \(S.ABCD\), đáy hình chữ nhật, \(SO\perp(ABCD)\) tại giao điểm đường chéo \(O\): \(((SAC),(SBD))=(AC,BD)\). Hai mặt vuông góc khi và chỉ khi đáy hình chữ nhật là hình vuông.

    ### 2.2. Điều kiện để hai mặt phẳng vuông góc

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Định lí — Tiêu chuẩn mặt phẳng vuông góc</strong><p>Nếu mặt phẳng \((P)\) <strong>chứa một đường \(a\)</strong> vuông góc mặt phẳng \((Q)\), thì <strong>\((P)\perp(Q)\)</strong>. Muốn chứng minh \(a\perp(Q)\), có thể chứng minh \(a\perp b\) và \(a\perp c\) với \(b,c\) là <strong>hai đường cắt nhau nằm trong \((Q)\)</strong>.</p></div>

    **Chọn đúng đối tượng:** Không đủ để chứng minh \(a\subset(P),b\subset(Q)\) và chỉ có \(a\perp b\); điều đó mới là vuông góc của **hai đường**, chưa xác định góc hai mặt.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B25_PERPENDICULAR_PLANES_AUTHORING_20261123.svg" alt="Hai mặt P Q vuông góc và một đường a trong P vuông góc mặt Q"><figcaption><strong>Tra khung trái:</strong> phải có **đường \(a\subset(P)\) vuông góc cả \((Q)\)** để kết luận \((P)\perp(Q)\). Dấu \(\Delta\) giúp xác định giao tuyến; không kết luận chỉ từ nét vẽ \(a\perp\Delta\) khi chưa có giả thiết hai mặt vuông góc.</figcaption></figure>

    **Ví dụ 2 SGK:** \(OA\perp OB\), \(OA\perp OC\), \(OB\cap OC=\{O\}\) nên \(OA\perp(OBC)\). Mỗi mặt \((OAB),(OAC)\) chứa \(OA\) và vì vậy đều vuông góc \((OBC)\).

    ### 2.3. Tính chất của hai mặt phẳng vuông góc

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Đường nằm trong một mặt vuông góc</strong><p>Nếu \((P)\perp(Q)\) và \(d=(P)\cap(Q)\), mọi đường \(a\subset(P)\) <strong>vuông góc \(d\)</strong> đều <strong>vuông góc \((Q)\)</strong>. Phải có đủ hai điều kiện \(a\subset(P)\) và \(a\perp d\).</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Giao tuyến của hai mặt cùng vuông góc mặt thứ ba</strong><p>Nếu hai mặt phẳng <strong>cắt nhau</strong> theo \(d\) và cùng vuông góc \((R)\), thì <strong>\(d\perp(R)\)</strong>. Nếu hai mặt song song thì không tồn tại giao tuyến \(d\), nên không dùng được kết luận này.</p></div>

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B25_PERPENDICULAR_PLANES_AUTHORING_20261123.svg" alt="Điều kiện đường a vuông góc giao tuyến Delta, hai mặt đứng P Q cắt theo d vuông góc sàn R"><figcaption><strong>Tra hai khung:</strong> trái, đường \(a\) nằm trong mặt này và vuông góc **giao tuyến** khi hai mặt đã vuông góc; phải, \((P),(Q)\) **cắt nhau** cùng vuông góc \((R)\), suy đường đỏ \(d\perp(R)\). Không bỏ giả thiết cắt nhau.</figcaption></figure>

    **Ví dụ 3 SGK:** Nếu đáy \(ABCD\) hình chữ nhật và \(SA\perp(ABCD)\), thì \(BC\perp(SAB)\) vì \(BC\perp AB,BC\perp SA\); từ \(BC\subset(SBC)\) suy \((SBC)\perp(SAB)\). Với \(B'\) chân từ \(A\) trên \(SB\), \(AB'\perp SB\) và \(AB'\subset(SAB)\), nên \(AB'\perp(SBC)\), từ đó \(AB'\perp SC\). Không quên kiểm vị trí đường \(AB'\) và giao tuyến \(SB\).

    ### 2.4. Góc nhị diện

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khái niệm — Góc nhị diện</strong><p>Hai <strong>nửa mặt phẳng có chung bờ \(d\)</strong> tạo một góc nhị diện, kí hiệu \([P,d,Q]\); \(d\) là cạnh nhị diện. Qua \(O\in d\), lấy hai tia \(Ox,Oy\) thuộc hai nửa mặt tương ứng và <strong>cùng vuông góc \(d\)</strong>. Khi đó \(\angle xOy\) là một <strong>góc phẳng nhị diện</strong>; số đo nhị diện thuộc \([0^\circ,180^\circ]\) và không phụ thuộc chọn \(O\).</p></div>

    **Khác biệt không thể bỏ:** Góc nhị diện giữ đúng **hai phía được chỉ định** nên có thể tù. Góc hai mặt phẳng lấy góc **không tù** giữa các đường và không vượt \(90^\circ\). Hai mặt phẳng cắt nhau tạo bốn góc nhị diện; góc đối đỉnh bằng nhau, góc kề bù nhau.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B25-01_R00.svg" alt="Hai nửa mặt có cạnh Delta và góc phẳng giữa các tia OU OV vuông góc cạnh"><figcaption><strong>Tra hình nhị diện:</strong> để đo, chọn \(O\) trên cạnh \(\Delta\), kẻ hai tia nằm **trong nửa mặt đề cho**, cùng vuông góc \(\Delta\), rồi đo \(\angle UOV\). Không thay tia bằng tia đối khi đề hỏi nhị diện cụ thể.</figcaption></figure>

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B25_DIHEDRAL_CHAIR_AUTHORING_20261123.svg" alt="Góc nhị diện 105 độ ở mặt ghế và lưng ghế ứng với góc giữa hai mặt 75 độ"><figcaption><strong>Tra HĐ5 SGK:</strong> \(\angle xOy=105^\circ\) của hai nửa mặt đã chọn là góc **nhị diện**, còn góc không tù giữa hai mặt chứa chúng bằng \(75^\circ\). Với khoảng \(100^\circ\)–\(105^\circ\), góc hai mặt tương ứng \(80^\circ\)–\(75^\circ\).</figcaption></figure>

    **Ví dụ 4 SGK:** Trong chóp có đáy hình thoi cạnh \(a\), \(AC=a\), \(SA=a/2\perp(ABCD)\), các nhị diện \([B,SA,D]\), \([S,BD,A]\), \([S,BD,C]\) lần lượt bằng \(120^\circ,45^\circ,135^\circ\). Các góc được tính qua những tia **vuông góc với cạnh nhị diện** ở đúng hai nửa mặt tương ứng.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B25_RHOMBUS_PYRAMID_DIHEDRAL_AUTHORING_20261123.svg" alt="Chóp đáy hình thoi với tam giác SAO vuông, các góc BAD 120 độ AOS 45 độ COS 135 độ"><figcaption><strong>Hướng dẫn đọc:</strong> Trái: đáy \(ABCD\) có \(AC=a\), nên \(\angle BAD=120^\circ\). Phải: \(SA=AO=a/2\), tam giác \(SAO\) vuông tại \(A\), nên \(\angle AOS=45^\circ\), và hai tia \(OA,OC\) đối nhau cho \(\angle COS=135^\circ\).</figcaption></figure>


    ### 2.5. Một số hình lăng trụ đặc biệt

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Lăng trụ đứng và lăng trụ đều</strong><p><strong>Lăng trụ đứng:</strong> các cạnh bên vuông góc với mặt đáy; mặt bên là hình chữ nhật và cạnh bên bằng chiều cao. <strong>Lăng trụ đều:</strong> lăng trụ đứng có đáy là đa giác đều; các mặt bên là những hình chữ nhật cùng kích thước.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Họ hình hộp</strong><p><strong>Hình hộp đứng:</strong> lăng trụ đứng có đáy hình bình hành. <strong>Hình hộp chữ nhật:</strong> hình hộp đứng đáy chữ nhật, cả sáu mặt là chữ nhật. <strong>Hình lập phương:</strong> hình hộp chữ nhật có tất cả cạnh bằng nhau, cả sáu mặt là hình vuông.</p></div>

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B25_SPECIAL_PRISMS_AUTHORING_20261123.svg" alt="Ba khối minh họa lăng trụ đứng, lăng trụ đều và hình lập phương"><figcaption><strong>Tra hình:</strong> trái chỉ có điều kiện cạnh bên vuông góc đáy; giữa thêm điều kiện đáy đa giác đều; phải là hộp chữ nhật có tất cả cạnh bằng nhau. Hình không thay cho kiểm giả thiết cạnh và góc.</figcaption></figure>

    | Khối | Điều kiện nhận dạng | Điều cần nhớ |
    | :-- | :-- | :-- |
    | Lăng trụ đứng | Cạnh bên \(\perp\) đáy | Mặt bên hình chữ nhật |
    | Lăng trụ đều | Lăng trụ đứng, đáy đa giác đều | Mặt bên hình chữ nhật bằng nhau |
    | Hình hộp đứng | Lăng trụ đứng, đáy hình bình hành | Ít nhất 4 mặt bên chữ nhật |
    | Hình hộp chữ nhật | Hộp đứng, đáy hình chữ nhật | 6 mặt chữ nhật |
    | Hình lập phương | Hộp chữ nhật, mọi cạnh bằng | 6 mặt vuông |

    **Ví dụ 6 SGK:** Trong hình lập phương cạnh \(a\), tam giác \(A'BD\) đều vì \(A'B=A'D=BD=a\sqrt2\); ba cạnh này lần lượt là các đường chéo của những mặt vuông.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B25_CUBE_EQUILATERAL_DIAGONALS_AUTHORING_20261123.svg" alt="Tam giác A phẩy BD trong hình lập phương được tạo bởi ba đường chéo mặt A phẩy B, A phẩy D, BD"><figcaption><strong>Hướng dẫn đọc:</strong> Ba đường tô màu \(A'B,A'D,BD\) là đường chéo của các mặt vuông cạnh \(a\), nên mỗi đoạn dài \(a\sqrt2\). Tam giác \(A'BD\) đều vì ba cạnh bằng nhau.</figcaption></figure>


    ### 2.6. Hình chóp đều và hình chóp cụt đều

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Hình chóp đều</strong><p>Hình chóp có <strong>đáy là đa giác đều</strong> và <strong>các cạnh bên bằng nhau</strong> gọi là hình chóp đều. Tương đương: đáy là đa giác đều và <strong>hình chiếu vuông góc của đỉnh nằm đúng tại tâm đáy</strong>. Đường nối đỉnh với tâm đáy là đường cao, không phải cạnh bên nghiêng.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Hình chóp cụt đều</strong><p>Cắt hình chóp đều bằng một mặt phẳng <strong>song song đáy, không qua đỉnh</strong>, phần nằm giữa hai mặt phẳng đáy là hình chóp cụt đều. Hai đáy là đa giác đều song song, đồng dạng; các mặt bên là <strong>hình thang cân</strong>. Đường cao là đoạn <strong>nối hai tâm đáy</strong> vuông góc hai đáy.</p></div>

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B25_REGULAR_PYRAMID_FRUSTUM_AUTHORING_20261123.svg" alt="Hình chóp đều có SO là đường cao qua tâm đáy, chóp cụt đều có HK là đường cao nối hai tâm đáy"><figcaption><strong>Tra hình:</strong> trái \(SO\perp(ABCD)\) tại tâm \(O\), còn \(SA\) là cạnh bên xiên; phải \(HK\) nối tâm hai đáy song song và là chiều cao chóp cụt, còn \(AA'\) là cạnh bên. Không dùng cạnh bên thay chiều cao.</figcaption></figure>

    **Ứng dụng SGK:** Tháp Louvre là mô hình chóp tứ giác đều; chân đường cao là tâm hình vuông đáy. Với chóp cụt tam giác đều, chiều cao \(h\), cạnh đáy \(a>a'\), độ dài các cạnh bên bằng
    \[
    \sqrt{h^2+\frac{(a-a')^2}{3}}.
    \]
    Công thức này đến từ tam giác vuông với độ lệch ngang \((a-a')/\sqrt3\), không phải lấy chênh hai cạnh đáy làm độ lệch trực tiếp.

=== "Ví dụ"

    ### 3.1. Khi hai tia tạo góc tù, góc hai mặt bằng bao nhiêu?

    **Đề bài.** Hai mặt \((P),(Q)\) cắt nhau theo \(d\). Qua \(O\in d\), các đường \(m\subset(P)\), \(n\subset(Q)\) cùng vuông góc \(d\). Hai tia đã chọn trên \(m,n\) tạo góc \(125^\circ\). Tính góc giữa hai mặt.

    **Phân tích:** Chúng ta đã có **tiết diện đúng phương**, nên không cần dựng pháp tuyến. Nhưng hai mặt không có phía chọn, góc cần lấy là góc **không tù giữa hai đường**.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.1"><p><strong>Lời giải.</strong> Vì \(m,n\) cùng qua \(O\) và vuông góc giao tuyến \(d\), góc giữa \((P),(Q)\) bằng góc không tù giữa \(m,n\). Hai tia đã cho tạo \(125^\circ\), nên góc hai đường là \(180^\circ-125^\circ=55^\circ\). Vậy góc hai mặt bằng \(55^\circ\).</p></div>

    **Kiểm lại:** \(55^\circ\in[0^\circ,90^\circ]\), đúng phạm vi góc hai mặt; \(125^\circ\) có thể là góc phẳng nhị diện nhưng không phải góc hai mặt.

    ### 3.2. Hai mặt của hình chóp vuông góc khi nào?

    **Đề bài.** Cho chóp \(S.ABCD\) có đáy hình chữ nhật \(ABCD\), tâm \(O\) và \(SO\perp(ABCD)\). Chứng minh \((SAC)\perp(SBD)\) khi và chỉ khi hình chữ nhật \(ABCD\) là hình vuông.

    **Phân tích:** Hai mặt \((SAC),(SBD)\) cùng chứa \(S,O\), nên giao tuyến là \(SO\). Cả hai đường chéo đáy \(AC,BD\) đều vuông góc \(SO\), vì thế có thể dùng chúng để tính góc hai mặt.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.2"><p><strong>Lời giải.</strong> Vì \(AC\subset(SAC)\), \(BD\subset(SBD)\) cùng đi qua \(O\) và \(SO\perp(ABCD)\), ta có \(((SAC),(SBD))=(AC,BD)\). Do đó \((SAC)\perp(SBD)\iff AC\perp BD\). Với hình chữ nhật, hai đường chéo vuông góc khi và chỉ khi nó cũng là hình thoi, tức khi và chỉ khi <strong>nó là hình vuông</strong>.</p></div>

    **Kiểm lại:** Hình chữ nhật bất kì không nhất thiết có hai đường chéo vuông góc; điều kiện “hình vuông” không được bỏ.

    ### 3.3. Một đường vuông góc một mặt chứng minh hai mặt vuông góc

    **Đề bài.** Trong tứ diện \(OABC\), \(OA\perp OB\), \(OA\perp OC\). Chứng minh \((OAB)\perp(OBC)\), \((OAC)\perp(OBC)\). Có suy ngay \((OAB)\perp(OAC)\) không?

    **Phân tích:** Cần chứng minh \(OA\perp(OBC)\) bằng **hai đường cắt nhau** rồi dùng mặt chứa đường \(OA\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.3"><p><strong>Lời giải.</strong> \(OB,OC\subset(OBC)\) cắt tại \(O\); vì \(OA\perp OB\), \(OA\perp OC\), theo tiêu chuẩn suy \(OA\perp(OBC)\). Cả \((OAB)\), \((OAC)\) chứa \(OA\), nên đều vuông góc \((OBC)\). <strong>Không đủ</strong> để suy \((OAB)\perp(OAC)\): góc giữa hai mặt này phụ thuộc vào góc giữa \(OB,OC\).</p></div>

    **Kiểm lại:** Hai mặt cùng vuông góc **một mặt thứ ba** không nhất thiết vuông góc với nhau; khác với mệnh đề giao tuyến của hai mặt cắt nhau cùng vuông góc mặt thứ ba.

    ### 3.4. Vì sao cửa quay mà vẫn vuông góc sàn?

    **Đề bài.** Trục bản lề \(d\) của một cánh cửa luôn vuông góc sàn \((P)\). Khi cửa mở một góc bất kì, hãy giải thích vì sao mặt phẳng cánh cửa \((Q)\) vẫn vuông góc \((P)\).

    **Phân tích:** Không phải xét góc giữa **cánh cửa và tường**, vì góc đó đổi theo quá trình quay. Tính chất duy nhất cần là mặt cánh cửa luôn **chứa trục bản lề**.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.4"><p><strong>Lời giải.</strong> Mỗi vị trí mặt cánh cửa \((Q)\) đều chứa \(d\), còn \(d\perp(P)\) không đổi. Áp tiêu chuẩn “một mặt chứa đường vuông góc mặt kia” suy \((Q)\perp(P)\) ở mọi vị trí của cánh cửa.</p></div>

    **Kiểm lại:** Kết luận không phụ thuộc cửa đang mở bao nhiêu độ so với tường; mặt sàn là đối tượng phải giữ cố định.

    ### 3.5. Từ hai mặt vuông góc sang đường vuông góc mặt

    **Đề bài.** Hai mặt \((P)\perp(Q)\) cắt nhau theo \(\Delta\). Một đường \(a\subset(P)\) qua \(O\in\Delta\) và \(a\perp\Delta\). Chứng minh \(a\perp(Q)\).

    **Phân tích:** Chỉ biết \(a\perp\Delta\) chưa đủ cho \(a\perp(Q)\); điều kiện then chốt là \((P)\perp(Q)\). Dựng thêm một đường \(b\subset(Q)\) qua \(O\), \(b\perp\Delta\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B25_PERPENDICULAR_PLANES_AUTHORING_20261123.svg" alt="Hai mặt P Q vuông góc theo Delta, đường a trong P vuông góc Delta và vuông góc cả mặt Q"><figcaption><strong>Đọc khung trái trước lời giải:</strong> \(\Delta\) là giao tuyến, \(a\subset(P)\) vuông góc \(\Delta\) tại \(O\). Vì **đã biết** hai mặt vuông góc, đường \(a\) là pháp tuyến của \((Q)\), chứ không chỉ vuông góc một đường trên \((Q)\).</figcaption></figure>

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.5"><p><strong>Lời giải.</strong> Trong \((Q)\), kẻ \(b\) qua \(O\) với \(b\perp\Delta\). Vì \((P)\perp(Q)\), góc giữa \(a,b\) bằng \(90^\circ\), nên \(a\perp b\). Ta cũng có \(a\perp\Delta\); hai đường \(b,\Delta\) cắt nhau trong \((Q)\), do đó \(a\perp(Q)\).</p></div>

    **Kiểm lại:** Đã nêu đủ hai đường \(b,\Delta\subset(Q)\) cắt nhau. Không tráo giả thiết “hai mặt vuông góc” thành điều chỉ thấy trên hình.

    ### 3.6. Giao tuyến của hai mặt cùng vuông góc mặt nền

    **Đề bài.** Hai mặt phẳng \((P),(Q)\) khác nhau, cắt nhau theo \(d\), và cả hai đều vuông góc \((R)\). Chứng minh \(d\perp(R)\). Nếu \((P)\parallel(Q)\), điều gì thay đổi?

    **Phân tích:** Ta cần tính chất SGK về **hai mặt cắt nhau**. Với hai mặt song song, không có \(d\), nên đừng phát biểu một kết luận về đường không tồn tại.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.6"><p><strong>Lời giải.</strong> Theo định lí, hai mặt phẳng cắt nhau và cùng vuông góc với mặt phẳng thứ ba thì giao tuyến của chúng vuông góc với mặt đó. Vậy \(d\perp(R)\). Nếu \((P)\parallel(Q)\), hai mặt không cắt nhau nên **không tồn tại giao tuyến \(d\)** để áp dụng.</p></div>

    **Kiểm lại:** Không được bỏ từ “cắt nhau”; tính chất không xác định giao tuyến của hai mặt song song.

    ### 3.7. Lưng ghế: góc nhị diện khác góc hai mặt

    **Đề bài.** Hai nửa mặt chứa mặt ghế và lưng ghế tạo góc phẳng nhị diện \(105^\circ\) về phía người ngồi. Tính góc giữa hai mặt phẳng chứa hai phần ghế.

    **Phân tích:** Cần phân biệt **hai phía đã chọn** của góc nhị diện và **hai mặt không định hướng**. Góc nhị diện có thể tù, góc hai mặt bắt buộc không tù.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B25_DIHEDRAL_CHAIR_AUTHORING_20261123.svg" alt="Tiết diện ghế cho góc nhị diện 105 độ và góc hai mặt 75 độ"><figcaption><strong>Hướng dẫn đọc:</strong> Tia theo mặt ghế và tia theo lưng ghế tạo \(105^\circ\) ở phía được chọn; góc nhỏ giữa hai đường chứa các tia là \(75^\circ\).</figcaption></figure>


    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.7"><p><strong>Lời giải.</strong> Theo đề, góc phẳng nhị diện là \(105^\circ\). Hai đường chứa hai tia tạo thêm góc kề bù \(180^\circ-105^\circ=75^\circ\); đây là góc không tù. Vì thế góc giữa hai mặt phẳng bằng \(75^\circ\).</p></div>

    **Kiểm lại:** \(105^\circ\) đúng cho **góc nhị diện**, \(75^\circ\) đúng cho **góc hai mặt**; hai câu hỏi không có cùng đáp số.

    ### 3.8. Ví dụ 4 SGK — Ba góc nhị diện của chóp đáy thoi

    **Đề bài.** Cho hình chóp \(S.ABCD\) có \(SA\perp(ABCD)\), đáy \(ABCD\) là hình thoi cạnh \(a>0\), \(AC=a\), \(SA=a/2\). Gọi \(O\) là giao điểm hai đường chéo. Tìm các góc nhị diện \([B,SA,D]\), \([S,BD,A]\), \([S,BD,C]\).

    **Phân tích:** Phải chọn **góc phẳng nhị diện theo hai nửa mặt được nêu trong kí hiệu**. Với cạnh \(SA\), lấy các tia \(AB,AD\perp SA\). Với cạnh \(BD\), vì \(BD\perp(SAC)\), chọn các tia \(OS,OA,OC\) trong mặt \((SAC)\), cùng vuông góc \(BD\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B25_RHOMBUS_PYRAMID_DIHEDRAL_AUTHORING_20261123.svg" alt="Hình chóp SABCD có đáy hình thoi và tiết diện vuông SAO với góc AOS 45 độ, COS 135 độ"><figcaption><strong>Đọc trước lời giải:</strong> khung trái \(ABCD\) là hình thoi có \(AC=a\), các tam giác \(ABC,ACD\) đều; góc ở \(A\) giữa \(AB,AD\) là \(120^\circ\). Khung phải \(SA\perp AO\), \(SA=AO=a/2\), nên \(\angle AOS=45^\circ\). Hai tia \(OA,OC\) đối nhau, do đó \(\angle COS=135^\circ\).</figcaption></figure>

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.8"><p><strong>Lời giải.</strong> Vì đáy là hình thoi cạnh \(a\) và \(AC=a\), các tam giác \(ABC,ACD\) đều, nên \(\angle BAD=120^\circ\). Do \(SA\perp(ABCD)\), hai tia \(AB,AD\) cùng vuông góc \(SA\); vậy \([B,SA,D]=120^\circ\). Hai đường chéo hình thoi vuông góc và \(SA\perp BD\), suy \(BD\perp(SAC)\). Vì \(AO=AC/2=a/2=SA\), tam giác \(SAO\) vuông cân tại \(A\), nên \(\angle AOS=45^\circ\). Do \(OA,OC\) là hai tia đối, \(\angle COS=135^\circ\). Vậy \([S,BD,A]=45^\circ\) và \([S,BD,C]=135^\circ\).</p></div>

    **Kiểm lại:** \(45^\circ+135^\circ=180^\circ\), đúng hai nhị diện kề nhau có chung cạnh \(BD\) nhưng chọn hai phía đáy khác nhau. Không thay cả hai bằng góc \(45^\circ\) chỉ vì góc hai mặt không tù.

    ### 3.9. Nhận diện lăng trụ đứng nhưng không đều

    **Đề bài.** Lăng trụ \(ABC.A'B'C'\) có cạnh bên vuông góc mặt đáy, cao \(6\) cm; đáy \(ABC\) có độ dài ba cạnh \(3,4,5\) cm. Phân loại khối và tính diện tích mặt bên dựa trên cạnh đáy dài \(3\) cm.

    **Phân tích:** Đứng/đều là hai yêu cầu **khác nhau**. Chỉ khi đáy là đa giác đều mới được nói lăng trụ đều.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B25_SPECIAL_PRISMS_AUTHORING_20261123.svg" alt="Phân biệt lăng trụ đứng, đều và lập phương trong sơ đồ ba khối"><figcaption><strong>Hướng dẫn đọc:</strong> Khung trái cho thấy lăng trụ **đứng** không yêu cầu đáy đều; khung giữa cần thêm đa giác đáy đều, khung phải là hình lập phương.</figcaption></figure>


    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.9"><p><strong>Lời giải.</strong> Cạnh bên vuông góc đáy nên đây là <strong>lăng trụ đứng</strong>. Tam giác đáy có các cạnh \(3,4,5\) không bằng nhau nên <strong>không phải lăng trụ đều</strong>. Mặt bên tương ứng với cạnh đáy \(3\) cm là hình chữ nhật có chiều cao \(6\) cm, diện tích \(3\cdot6=18\text{ cm}^2\).</p></div>

    **Kiểm lại:** Lăng trụ đứng có mặt bên chữ nhật; lăng trụ đều cần thêm đa giác đáy đều, không suy bằng quan sát bề ngoài.

    ### 3.10. Tam giác đều ẩn trong hình lập phương

    **Đề bài.** Trong hình lập phương \(ABCD.A'B'C'D'\) cạnh \(a>0\), chứng minh tam giác \(A'BD\) đều.

    **Phân tích:** Ba đoạn \(A'B,A'D,BD\) không phải là **cạnh của khối**, mà là **đường chéo của ba mặt vuông**; cần tính ba độ dài bằng Pythagore trước khi kết luận tam giác đều.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B25_CUBE_EQUILATERAL_DIAGONALS_AUTHORING_20261123.svg" alt="Ba đường chéo mặt A phẩy B A phẩy D BD tạo tam giác đều"><figcaption><strong>Hướng dẫn đọc:</strong> Ba đoạn \(A'B,A'D,BD\) là đường chéo của **ba mặt vuông**, đều dài \(a\sqrt2\), tạo tam giác đều.</figcaption></figure>


    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.10"><p><strong>Lời giải.</strong> Mỗi mặt hình lập phương là hình vuông cạnh \(a\). Trong các tam giác vuông \(A'AB,A'AD,ABD\), ta được \(A'B=\sqrt{AA'^2+AB^2}=a\sqrt2\), \(A'D=a\sqrt2\), \(BD=\sqrt{AB^2+AD^2}=a\sqrt2\). Ba cạnh tam giác \(A'BD\) bằng nhau nên tam giác <strong>đều</strong>.</p></div>

    **Kiểm lại:** \(A'B, A'D, BD\) cùng dài \(a\sqrt2\), không phải dài \(a\). Suy luận dựa trên ba mặt vuông của hình lập phương, không dựa vào ba nét trông bằng nhau.

    ### 3.11. Hình chóp đều và chiều cao của mô hình tháp Louvre

    **Đề bài.** Mô hình chóp tứ giác đều có cạnh đáy \(34\) m, cạnh bên \(32{,}3\) m. Tính gần đúng chiều cao từ đỉnh \(S\) tới tâm \(O\) đáy.

    **Phân tích:** Vì là chóp đều, chân đường cao ở **tâm hình vuông**. Bán kính từ tâm đến đỉnh đáy là **nửa đường chéo**, không phải nửa cạnh đáy.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B25_REGULAR_PYRAMID_FRUSTUM_AUTHORING_20261123.svg" alt="Chóp đều có SO là đường cao và SA là cạnh bên để tính chiều cao tháp Louvre"><figcaption><strong>Hướng dẫn đọc:</strong> Khung trái: \(O\) là tâm đáy vuông, \(SO\perp(ABCD)\); tam giác \(SOA\) vuông tại \(O\), có cạnh huyền \(SA=32{,}3\) m và \(OA=17\sqrt2\) m.</figcaption></figure>


    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.11"><p><strong>Lời giải.</strong> Với cạnh đáy \(34\) m, đường chéo hình vuông \(34\sqrt2\), suy \(OA=17\sqrt2\) m. Tam giác \(SOA\) vuông tại \(O\), nên \(SO=\sqrt{SA^2-OA^2}=\sqrt{32{,}3^2-(17\sqrt2)^2}=\sqrt{465{,}29}\approx21{,}57\) m. Đây là chiều cao <strong>theo mô hình và số liệu gần đúng</strong>.</p></div>

    **Kiểm lại:** \(SO<SA=32{,}3\) m vì \(SA\) là cạnh huyền. Không dùng \(OA=17\) m vì đó là nửa **cạnh** chứ không phải nửa **đường chéo** đáy.

    ### 3.12. Độ dài cạnh bên chóp cụt tam giác đều

    **Đề bài.** Một chóp cụt tam giác đều có chiều cao \(h=4\) cm, cạnh đáy lớn \(a=6\) cm và đáy nhỏ \(a'=3\) cm. Tính độ dài mỗi cạnh bên.

    **Phân tích:** Hai đáy đều là tam giác đều, tâm hai đáy nối bởi đường **vuông góc chung**. Độ lệch ngang của hai đỉnh tương ứng là hiệu bán kính ngoại tiếp, bằng \((a-a')/\sqrt3\), không bằng \(a-a'\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B25_REGULAR_PYRAMID_FRUSTUM_AUTHORING_20261123.svg" alt="Chóp cụt đều có chiều cao HK nối hai tâm và cạnh bên xiên AA phẩy"><figcaption><strong>Hướng dẫn đọc:</strong> Khung phải: \(HK=h\) là đường cao nối tâm hai đáy; với **hai đáy tam giác đều**, độ lệch ngang đỉnh tương ứng bằng \((a-a')/\sqrt3\), không phải \(a-a'\).</figcaption></figure>


    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.12"><p><strong>Lời giải.</strong> Bán kính ngoại tiếp hai đáy là \(6/\sqrt3\) và \(3/\sqrt3\); độ lệch ngang bằng \(3/\sqrt3=\sqrt3\) cm. Áp Pythagore cho một cạnh bên: \(\ell=\sqrt{h^2+(\sqrt3)^2}=\sqrt{16+3}=\sqrt{19}\approx4{,}36\) cm. Các cạnh bên bằng nhau vì đây là chóp cụt đều.</p></div>

    **Kiểm lại:** Cạnh bên \(\ell>h=4\) cm là hợp lí vì xiên. Dùng \(\sqrt{16+9}=5\) cm sẽ sai do đã lấy chênh **cạnh đáy** thay cho độ lệch ngang.

=== "Lỗi thường gặp"

    ### 4.1. Dùng góc nhị diện để trả lời góc giữa hai mặt

    **Dấu hiệu:** Hai tia ở hai nửa mặt tạo \(105^\circ\), em kết luận góc giữa hai **mặt phẳng** bằng \(105^\circ\).

    **Vì sao sai:** Góc giữa hai mặt phẳng là góc **không tù** của hai phương pháp tuyến; góc nhị diện có hai nửa mặt xác định nên có thể tù.

    **Cách sửa:** Phân biệt đề hỏi **góc nhị diện** hay **góc hai mặt**. Ví dụ góc nhị diện \(105^\circ\) ứng với góc hai mặt \(75^\circ\), không thay thế đáp số của hai câu hỏi cho nhau.

    ### 4.2. Đo hai đường bất kì trên hai mặt thay vì dựng tiết diện chuẩn

    **Dấu hiệu:** Chọn hai cạnh bất kì có vẻ cắt nhau trên giấy rồi coi góc ấy là góc hai mặt.

    **Vì sao sai:** Góc giữa hai mặt cắt nhau phải đo qua hai phương **cùng vuông góc giao tuyến** tại một điểm, hoặc qua hai pháp tuyến của hai mặt.

    **Cách sửa:** Xác định giao tuyến \(d\), chọn \(O\in d\), dựng \(m\subset(P)\), \(n\subset(Q)\) cùng qua \(O\), \(m\perp d,n\perp d\), rồi chọn góc không tù.

    ### 4.3. Từ một cặp đường vuông góc kết luận hai mặt vuông góc

    **Dấu hiệu:** Có \(a\subset(P)\), \(b\subset(Q)\), \(a\perp b\) nên ghi ngay \((P)\perp(Q)\).

    **Vì sao sai:** Vuông góc của **hai đường** không chứng minh rằng một đường là pháp tuyến của **cả mặt** bên kia.

    **Cách sửa:** Chứng minh tồn tại \(a\subset(P)\) với \(a\perp(Q)\), thường bằng tiêu chuẩn vuông góc **hai đường cắt nhau** trong \((Q)\), rồi mới suy \((P)\perp(Q)\).

    ### 4.4. Bỏ điều kiện vuông góc giao tuyến trong tính chất hai mặt

    **Dấu hiệu:** Từ \((P)\perp(Q)\), cho rằng mọi đường \(a\subset(P)\) đều vuông góc \((Q)\).

    **Vì sao sai:** Giao tuyến \(d=(P)\cap(Q)\) nằm trong cả hai mặt, nhưng không phải đường vuông góc \((Q)\). Tính chất chỉ áp dụng với \(a\perp d\).

    **Cách sửa:** Ghi đủ \((P)\perp(Q)\), \(a\subset(P)\), **\(a\perp d\)** trước khi kết luận \(a\perp(Q)\).

    ### 4.5. Suy giao tuyến khi hai mặt không cắt nhau

    **Dấu hiệu:** Hai mặt đều vuông góc mặt nền \((R)\), chưa xác định vị trí của chúng đã nói “giao tuyến của chúng vuông góc \((R)\)”.

    **Vì sao sai:** Hai mặt cùng vuông góc \((R)\) có thể **song song**; trong trường hợp đó không có giao tuyến.

    **Cách sửa:** Chỉ áp định lí nếu \((P)\) và \((Q)\) **cắt nhau** theo đường \(d\); lúc đó mới kết luận \(d\perp(R)\).

    ### 4.6. Đồng nhất lăng trụ đứng với lăng trụ đều

    **Dấu hiệu:** Gọi một lăng trụ đứng đáy tam giác \(3,4,5\) là lăng trụ đều.

    **Vì sao sai:** Lăng trụ đều là lăng trụ **đứng và có đáy là đa giác đều**. Chỉ có cạnh bên vuông góc đáy chưa chứng minh đáy đều.

    **Cách sửa:** Kiểm **hai điều kiện** theo thứ tự: cạnh bên vuông góc đáy và đáy là đa giác đều. Phân biệt thêm hình hộp đứng, hộp chữ nhật và lập phương.

    ### 4.7. Lấy cạnh bên làm chiều cao của chóp đều

    **Dấu hiệu:** Chóp đều có \(SO=4\) cm, \(SA=\sqrt{34}\) cm mà ghi chiều cao bằng \(\sqrt{34}\) cm.

    **Vì sao sai:** Đường cao của chóp đều là đoạn **từ đỉnh vuông góc đáy tại tâm**, không phải cạnh bên xiên.

    **Cách sửa:** Xác định đúng tâm đáy \(O\) và kiểm \(SO\perp\) đáy; dùng tam giác vuông \(SOA\) để tính cạnh bên nếu cần, không đổi vai hai đoạn.

    ### 4.8. Dùng chênh cạnh đáy làm độ lệch ngang của chóp cụt

    **Dấu hiệu:** Chóp cụt tam giác đều có \(a=6,a'=3,h=4\) mà tính cạnh bên \(\sqrt{4^2+(6-3)^2}=5\).

    **Vì sao sai:** Độ lệch ngang giữa hai đỉnh tương ứng là hiệu **bán kính ngoại tiếp** hai tam giác đều: \((a-a')/\sqrt3\), không phải \(a-a'\).

    **Cách sửa:** Với chóp cụt tam giác đều, dùng \(\ell=\sqrt{h^2+(a-a')^2/3}\). Với dữ kiện trên, \(\ell=\sqrt{19}\approx4{,}36\), không phải 5.

    **Học tiếp:** [Core và Luyện tập Bài 25](luyen-tap.md) · [Tự luận Chương VII](../../../thu-vien/tu-luan-g11-chuong-vii.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">Nguồn S1: SGK Toán 11 Kết nối tri thức với cuộc sống, tập hai, Bài 25 “Hai mặt phẳng vuông góc”, trang in 44–53. Sáu mục SGK: 1. Góc giữa hai mặt phẳng, hai mặt phẳng vuông góc; 2. Điều kiện để hai mặt phẳng vuông góc; 3. Tính chất của hai mặt phẳng vuông góc; 4. Góc nhị diện; 5. Một số hình lăng trụ đặc biệt; 6. Hình chóp đều và hình chóp cụt đều. Đã đối chiếu văn bản SGK số hóa, thuật ngữ, HĐ1–HĐ13 và các ví dụ liên quan, chưa xác minh trực quan ảnh trang in và offset PDF nên SOURCE_VISUAL_OFFSET_HOLD. Hình nhị diện canonical dùng lại nguyên file; các hình mới chỉ phục vụ nội dung cần minh họa và đặt cạnh lời giảng/đọc hình. Core/Luyện tập, Tự kiểm tra và đánh giá không thay đổi.</p>


## === END G11-CHVII-B25 ===

## === BEGIN G11-CHVII-B26 | PR#1054 | HEAD 771e01b2896d400b14ecdfaff44e8f76f54d4e13 | BLOB 25d0234f560c186b89286366e73ce80ce2ce603c ===

# Bài 26. Khoảng cách

<style>
/* Scope CSS to B26 only; do not alter Golden UI/shared runtime. */
.md-typeset:has([data-g11-b26-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card{background:#e8f7f2;border:1px solid #a9dccc;border-left:4px solid #087d69;color:#174137}
.md-typeset:has([data-g11-b26-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card{background:#eaf1fc;border:1px solid #a5bee5;border-left:4px solid #4879c2;color:#193d66}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b26-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card{background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b26-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card{background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}
</style>

<div class="thpt-r4-screen" data-thpt-r4 data-g11-b26-knowledge-only>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VII · SGK KẾT NỐI TRI THỨC · TẬP HAI</p>
<p class="thpt-r4-lead">Khoảng cách là độ dài ngắn nhất: biết khi nào hạ chân vuông góc, khi nào đo giữa các đối tượng song song, và khi nào phải dựng đường vuông góc chung giữa hai đường chéo nhau.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương VII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    **Vì sao cần học?** Đầu phun chữa cháy phải đặt cách trần một khoảng an toàn, chiều cao xe phải đủ thấp để đi qua khung trên dốc, và các thanh kết cấu không gian có thể chéo nhau dù trên hình nhìn như cắt. Khoảng cách không phải một đoạn nối tùy ý: ta muốn **độ dài ngắn nhất** giữa các đối tượng. Trước khi học, em cần biết hình chiếu vuông góc (Bài 24), đường vuông góc mặt phẳng (Bài 23) và quan hệ đường chéo nhau (Bài 22).

    ### 1.1. Khoảng cách từ một điểm đến một đường thẳng, đến một mặt phẳng

    **Khám phá HĐ1 — vì sao chân vuông góc ngắn nhất?** Cho điểm \(M\) ngoài đường thẳng \(a\), gọi \(H\) là hình chiếu vuông góc của \(M\) lên \(a\). Với mọi \(K\in a\) khác \(H\), tam giác \(MHK\) vuông tại \(H\), nên
    \[
    MK^2=MH^2+HK^2>MH^2\quad\Rightarrow\quad MK>MH.
    \]
    Tương tự, nếu \(H\) là chân vuông góc của \(M\) xuống mặt \((P)\), thì \(MH\perp HK\) với mọi \(K\in(P)\). Bởi vậy đoạn \(MH\) là **đoạn ngắn nhất** từ \(M\) tới đường hoặc mặt. Khi \(K=H\), độ dài bằng đúng \(MH\).

    **Định nghĩa theo hình chiếu:** Khoảng cách \(d(M,a)=MH\) khi \(H\in a\), \(MH\perp a\); khoảng cách \(d(M,(P))=MH\) khi \(H\in(P)\), \(MH\perp(P)\). Khoảng cách **không âm** và bằng \(0\) khi \(M\) đã nằm trên đối tượng. Ta không gọi một đoạn xiên dài hơn là “khoảng cách”. Nếu đề cho nhiều đường trong mặt phẳng mà chưa chứng minh pháp tuyến, phải dùng tiêu chuẩn **hai đường cắt nhau** của Bài 23.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B26-01_R00.svg" alt="Điểm M ngoài mặt P, H chân vuông góc và K là điểm khác trên P, đoạn MH là khoảng cách ngắn nhất so với đoạn xiên MK"><figcaption><strong>Hướng dẫn đọc:</strong> từ \(M\), đoạn đỏ \(MH\) tới chân \(H\) vuông góc **cả mặt \((P)\)**; đoạn xanh \(MK\) tới điểm \(K\) khác \(H\) là đoạn xiên. So sánh bằng \(MK^2=MH^2+HK^2\), không đo từ hình vẽ phối cảnh. Với đường \(a\), thay \((P)\) bằng \(a\) và giữ lập luận tương tự.</figcaption></figure>

    **Một phép thử cụ thể cho khoảng cách điểm–đường:** Trong mặt tọa độ, chọn \(M(0;0)\) và \(a:2x+y-6=0\). Chân \(H\) trên \(a\) là \((12/5;6/5)\), vì \(2(12/5)+6/5-6=0\) và \(\overrightarrow{MH}=(12/5;6/5)\) cùng phương với pháp tuyến \((2;1)\) của đường. Vậy \(d(M,a)=MH=\sqrt{(12/5)^2+(6/5)^2}=6/\sqrt5\). Đây là cách kiểm được **chân H**, chứ không cần ước lượng bằng mắt.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G10_B20_POINT_LINE_DISTANCE_R02.svg" alt="M gốc tọa độ và đường 2x cộng y bằng 6, chân H bằng 12 phần 5 và 6 phần 5, khoảng cách MH bằng 6 chia căn 5"><figcaption><strong>Hướng dẫn đọc hình Toán 10 dùng lại:</strong> đường \(2x+y=6\) cắt hai trục, \(M(0,0)\) nằm ngoài đường và \(H(12/5,6/5)\) nằm trên đường. Đoạn \(MH\) vuông góc \(a\) do cùng phương vectơ pháp tuyến; đây là **minh họa có tọa độ cụ thể**, không phải công thức chung cần học thuộc ở Bài 26.</figcaption></figure>

    **Chiều cao hình chóp từ khái niệm khoảng cách:** Hình chóp có đỉnh \(S\), đáy thuộc \((P)\). Chiều cao là \(d(S,(P))\), tức chiều dài đường \(SH\perp(P)\). Cạnh bên \(SA\) thường là đường **xiên**, dài hơn đường cao. Với hình chóp đều \(S.ABC\), đáy tam giác đều cạnh \(a>0\), cạnh bên \(b>0\), chân cao \(O\) là tâm đáy và \(AO=a/\sqrt3\). Suy ra
    \[
    SO=\sqrt{b^2-\frac{a^2}{3}},\qquad b>\frac{a}{\sqrt3}
    \]
    đối với chóp không suy biến. Điều kiện dưới căn phản ánh chiều cao phải thực và dương.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B26_PYRAMID_HEIGHT_AUTHORING_20261123.svg" alt="Chóp đều SABC có SO vuông góc đáy tại tâm O, SA cạnh bên b và OA bằng a chia căn ba"><figcaption><strong>Hướng dẫn đọc Ví dụ 1 SGK:</strong> \(O\) là tâm **tam giác đều** \(ABC\), không phải một đỉnh đáy; \(SO\) đỏ nét đứt là đường cao, \(SA=b\) là cạnh huyền của tam giác vuông \(SOA\), \(OA=a/\sqrt3\). Chỉ dùng Pythagore khi đã xác minh \(SO\perp(ABC)\).</figcaption></figure>

    **Vận dụng.** Chóp tam giác đều có cạnh đáy \(a=6\) cm và cạnh bên \(b=5\) cm. Tính chiều cao. Vì sao không lấy \(5\) cm làm chiều cao?

    ??? question "Đối chiếu"

        **Lời giải:** Tâm đáy có \(AO=a/\sqrt3=2\sqrt3\) cm. \(SO=\sqrt{SA^2-AO^2}=\sqrt{25-12}=\sqrt{13}\) cm. Cạnh \(SA=5\) cm là **cạnh bên xiên** (cạnh huyền), không phải đoạn vuông góc xuống đáy.

    ??? tip "Kiểm lỗi"

        Chỉ lấy cạnh bên làm chiều cao nếu chính nó vuông góc mặt đáy. Trong chóp đều, chân đường cao nằm ở **tâm** đáy, không tự đồng nhất với đỉnh \(A\).

    ### 1.2. Khoảng cách giữa các đường thẳng và mặt phẳng song song, giữa hai mặt phẳng song song

    **Một ý chung cho các trường hợp song song:** Nếu đường \(a\parallel(P)\), lấy hai điểm \(M,N\in a\), hình chiếu \(A,B\) xuống \((P)\). Vì \(MA\parallel NB\), \(MN\parallel AB\) và các đoạn chiếu vuông góc mặt phẳng, \(ABNM\) là hình chữ nhật; do đó \(MA=NB\). Điều này chứng minh **khoảng cách từ mọi điểm của \(a\) đến \((P)\) bằng nhau**. Vì thế được phép chọn **một điểm thuận lợi** trên \(a\), không phải tìm một điểm “đặc biệt” rồi giả định khoảng cách luôn bằng nhau.

    **Ba loại khoảng cách:** Nếu \(a\parallel(P)\), \(d(a,(P))=d(M,(P))\) với bất kì \(M\in a\). Với \((P)\parallel(Q)\), \(d((P),(Q))=d(M,(Q))\) với bất kì \(M\in(P)\). Với hai đường \(m\parallel n\), \(d(m,n)=d(M,n)\) với \(M\in m\). Cả ba dùng đoạn **vuông góc**. Nếu đường nằm **ngay trên** mặt, hoặc hai mặt **trùng nhau**, khoảng cách bằng \(0\); không áp máy móc trường hợp “song song phân biệt” có khoảng cách dương.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B26_PARALLEL_DISTANCES_AUTHORING_20261123.svg" alt="Ba trường hợp khoảng cách không đổi: đường a song song mặt P, hai mặt P Q song song và hai đường m n song song"><figcaption><strong>Hướng dẫn đọc từ trái sang phải:</strong> hai chân \(A,B\) từ \(M,N\in a\) tạo các đoạn vuông góc **bằng nhau**; hai mặt song song được đo bởi đoạn vuông góc nối hai mặt; hai đường song song đo theo đoạn vuông góc giữa chúng. Không dùng đoạn chéo dù trông ngắn trên hình.</figcaption></figure>

    **Ví dụ 2 SGK — Hình hộp đứng đáy thoi:** Cho \(ABCD.A'B'C'D'\) là hình hộp đứng, đáy hình thoi cạnh \(a\), \(\angle BAD=120^\circ\), cạnh đứng \(AA'=h\). Muốn tính \(d(A'C',(ABCD))\), vì \(A'C'\) nằm trong mặt trên song song đáy, chỉ cần đo \(AA'=h\). Với \(d(AA',(BDD'B'))\), ta cần một đoạn vuông góc mặt \((BDD'B')\). Gọi \(O\) là giao hai đường chéo của hình thoi: \(AO\perp BD\), đồng thời \(AO\perp BB'\) vì \(BB'\perp(ABCD)\). Hai đường \(BD,BB'\) cắt nhau trong mặt \((BDD'B')\), nên \(AO\perp(BDD'B')\). Từ hình thoi có góc \(A=120^\circ\), \(AO=a/2\). Kết quả là **\(h\)** và **\(a/2\)** tương ứng, không được đánh tráo hai khoảng cách.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B26_RHOMBUS_PRISM_DISTANCES_AUTHORING_20261123.svg" alt="Hình hộp đứng đáy thoi ABCD, hai khoảng cách cần đo là AA phẩy bằng h và AO bằng a chia hai vuông góc mặt BDD phẩy B phẩy"><figcaption><strong>Hướng dẫn đọc:</strong> khối có cạnh đứng \(AA'=h\perp\) đáy, nên cho khoảng cách của **đường \(A'C'\) tới đáy**. Đoạn \(AO\) màu đỏ từ đỉnh \(A\) tới tâm hình thoi \(O\) vuông góc cả \(BD\) và \(BB'\), nên đo khoảng cách từ **đường \(AA'\)** tới mặt bên \((BDD'B')\). Góc \(120^\circ\) là giả thiết, không đo từ phối cảnh.</figcaption></figure>

    **Chiều cao lăng trụ:** Hai mặt đáy lăng trụ song song; khoảng cách giữa chúng là **chiều cao**. Chỉ với lăng trụ **đứng** mới được lấy độ dài cạnh bên làm chiều cao. Lăng trụ xiên có cạnh bên khác chiều cao vì cạnh bên không vuông góc đáy.

    **Vận dụng SGK – Khung khống chế chiều cao trên đường dốc:** Hai cột thẳng đứng cao \(2{,}28\) m giữ thanh ngang; mặt đường nghiêng \(15^\circ\) so với mặt nằm ngang. Ta cần độ dài **pháp tuyến từ thanh ngang đến mặt đường**, không lấy \(2{,}28\) m là khoảng cách tới mặt đường. Trong tiết diện dọc dốc, góc giữa phương đứng và pháp tuyến mặt đường là \(15^\circ\), nên
    \[
    d(\text{thanh ngang},\text{mặt dốc})=2{,}28\cos15^\circ\approx2{,}20\text{ m}.
    \]
    Vì \(2{,}21>2{,}20\), mô hình không cho phép xe cao \(2{,}21\) m qua khung. Cần nhớ đây là tính trong **mô hình hình học**, chưa xét các sai số lắp đặt và biên an toàn thực tế.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B26_SLOPE_CLEARANCE_AUTHORING_20261123.svg" alt="Tiết diện đường dốc nghiêng 15 độ, cột đứng TF cao 2,28 mét, đoạn TH vuông góc dốc ngắn hơn và gần 2,20 mét"><figcaption><strong>Hướng dẫn đọc ứng dụng:</strong> \(TF\) là chiều dài cột **thẳng đứng** \(2{,}28\) m; \(TH\) màu đỏ là khoảng cách **vuông góc dốc**. Góc giữa pháp tuyến dốc và phương đứng bằng góc dốc \(15^\circ\), nên \(TH=TF\cos15^\circ\). Không lấy \(2{,}28\) để so với \(2{,}21\) mà bỏ độ nghiêng.</figcaption></figure>

    **Vận dụng.** Trong hình hộp đứng đáy thoi cạnh \(a=8\) cm, \(\angle BAD=120^\circ\), chiều cao \(h=6\) cm, tính \(d(A'C',(ABCD))\) và \(d(AA',(BDD'B'))\).

    ??? question "Đối chiếu"

        **Lời giải:** Vì hai đáy song song và \(AA'\perp(ABCD)\), \(d(A'C',(ABCD))=h=6\) cm. Gọi \(O\) là tâm hình thoi. Từ \(AO\perp BD\) và \(AO\perp BB'\) suy \(AO\perp(BDD'B')\); do đó \(d(AA',(BDD'B'))=AO=a/2=4\) cm.

    ??? tip "Kiểm lỗi"

        Không lấy \(h\) cho khoảng cách từ \(AA'\) đến mặt bên. Đường \(AA'\) nằm **song song** mặt bên, khoảng cách được đo theo **\(AO\)** trong mặt đáy.

    ### 1.3. Khoảng cách giữa hai đường thẳng chéo nhau

    **Khó khăn mới:** Hai đường chéo nhau không song song cũng không gặp nhau, nên không thể lấy tùy tiện một đầu trên mỗi đường rồi gọi đoạn nối là “khoảng cách”. Đường \(\Delta\) được gọi là **đường vuông góc chung** của \(a,b\) nếu \(\Delta\) **cắt cả hai** và **vuông góc với cả hai**. Nếu \(\Delta\cap a=\{M\}\), \(\Delta\cap b=\{N\}\), thì \(d(a,b)=MN\). Phải kiểm đủ **bốn điều kiện**: \(M\in a\), \(N\in b\), \(MN\perp a\), \(MN\perp b\).

    **Vì sao HĐ4 SGK dùng mặt phẳng song song?** Chọn \((Q)\) chứa \(b\) và **song song đường \(a\)**. Chiếu vuông góc \(a\) xuống \((Q)\) thành đường \(a'\), rồi tìm \(N=a'\cap b\). Dựng đoạn pháp tuyến từ \(N\) lên \(a\), được \(M\). Vì \(a\parallel(Q)\), đường \(MN\) vuông góc \((Q)\), nên đồng thời vuông góc \(b\subset(Q)\) và \(a\parallel a'\subset(Q)\). Do đó \(MN\) là đoạn vuông góc chung. Phương pháp này chuyển **bài toán hai đường chéo nhau** về **khoảng cách đường–mặt song song**:
    \[
    d(a,b)=d(a,(Q))=MN.
    \]
    Cũng có thể chọn hai mặt **song song tương ứng chứa** \(a,b\), rồi tính khoảng cách giữa hai mặt.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B26_SKEW_COMMON_PERPENDICULAR_AUTHORING_20261123.svg" alt="Đường a ở trên mặt Q chứa b, hình chiếu a phẩy cắt b ở N; MN đi từ a đến b vuông góc chung"><figcaption><strong>Hướng dẫn đọc HĐ4:</strong> đường xanh trên \(a\) được chiếu xuống đường nét đứt \(a'\) trong \((Q)\), cắt đường lục \(b\) tại **\(N\)**. Đi theo đường đỏ \(MN\) **vuông góc mặt \((Q)\)** từ \(N\) đến **\(M\in a\)**. Vì \(a,b\) cùng có phương nằm trong \((Q)\), đoạn đỏ vuông góc cả hai. Phải xác minh \(a\parallel(Q)\) trước khi dùng.</figcaption></figure>

    **Ví dụ 3 SGK — Chóp có cạnh đứng:** Trong chóp \(S.ABC\), \(SA\perp(ABC)\), \(AB=a\) và \(\angle ABC=60^\circ\). Dựng \(H\) là chân vuông góc từ \(A\) xuống \(BC\). Khi đó \(AH\perp BC\), lại \(AH\subset(ABC)\) nên \(AH\perp SA\). Vì \(A\in SA\), \(H\in BC\), đoạn \(AH\) chính là **đoạn vuông góc chung**, và
    \[
    d(SA,BC)=AH=AB\sin60^\circ=\frac{a\sqrt3}{2}.
    \]
    Điểm mạnh của cách dựng này là không cần tạo mặt phẳng phụ khi đã có **một đường vuông góc mặt đáy**.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B26_SABC_COMMON_PERPENDICULAR_AUTHORING_20261123.svg" alt="Chóp SABC có SA vuông góc mặt đáy, H chân từ A tới BC, AH vuông góc cả SA và BC"><figcaption><strong>Hướng dẫn đọc Ví dụ 3:</strong> \(A\) thuộc đường \(SA\), \(H\) thuộc \(BC\); \(AH\) đỏ **vuông góc \(BC\)** do dựng chân, đồng thời vuông góc **\(SA\)** vì \(SA\perp(ABC)\). Lúc ấy mới tính \(AH\) bằng tam giác \(ABH\) vuông tại \(H\) với góc \(60^\circ\) ở \(B\).</figcaption></figure>

    **Vì sao là khoảng cách nhỏ nhất?** Với mọi \(X\in a\), \(Y\in b\), phép dời các điểm dọc theo hai đường không thể làm đoạn nối ngắn hơn **đoạn vuông góc chung**; phần độ dài nằm theo các phương \(a,b\) sẽ làm tăng bình phương độ dài theo định lí Pythagore trong hệ phương thích hợp. Trong phạm vi những đối tượng SGK đang xét, khoảng cách chính là độ dài ngắn nhất giữa hai điểm thuộc hai hình.

    **Vận dụng.** Với chóp \(S.ABC\), \(SA\perp(ABC)\), \(AB=8\) cm và \(\angle ABC=60^\circ\). Dựng \(H\) là chân từ \(A\) xuống \(BC\). Tính \(d(SA,BC)\) và nêu đủ điều kiện của đoạn vuông góc chung.

    ??? question "Đối chiếu"

        **Lời giải:** \(A\in SA\), \(H\in BC\); \(AH\perp BC\) theo cách dựng, \(AH\perp SA\) vì \(AH\subset(ABC)\) và \(SA\perp(ABC)\). Vậy \(AH\) là đoạn vuông góc chung, \(d(SA,BC)=AH=8\sin60^\circ=4\sqrt3\) cm.

    ??? tip "Kiểm lỗi"

        Không chọn \(SB\) hay \(SC\) làm khoảng cách giữa \(SA\) và \(BC\): chúng không phải đoạn vuông góc **đồng thời** với cả hai đường. Kiểm rõ hai đầu và hai góc vuông trước khi tính.

=== "Kiến thức SGK"

    ### 2.1. Khoảng cách từ một điểm đến một đường thẳng, đến một mặt phẳng

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Khoảng cách từ điểm đến đường thẳng</strong><p>Với điểm \(M\) và đường \(a\), gọi \(H\) là hình chiếu vuông góc của \(M\) trên \(a\). <strong>\(d(M,a)=MH\)</strong>. Nếu \(M\in a\) thì \(H=M\) và \(d(M,a)=0\).</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Khoảng cách từ điểm đến mặt phẳng</strong><p>Với điểm \(M\) và mặt phẳng \((P)\), gọi \(H\) là chân đường vuông góc từ \(M\) xuống \((P)\). <strong>\(d(M,(P))=MH\)</strong>. Khoảng cách bằng \(0\) khi và chỉ khi \(M\in(P)\).</p></div>

    **Vì sao là đoạn ngắn nhất?** Với \(K\) thuộc đường hoặc mặt tương ứng, \(MK^2=MH^2+HK^2\ge MH^2\), nên \(MK\ge MH\), đẳng thức chỉ tại \(K=H\). Khi hình chiếu là \(M\) (điểm thuộc đối tượng), độ dài bằng \(0\). Không lấy chiều dài đoạn xiên tùy ý.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B26-01_R00.svg" alt="Đoạn MH vuông góc mặt P ngắn hơn đoạn xiên MK theo định lí Pythagore"><figcaption><strong>Tra hình:</strong> \(H\) là chân của \(M\) trên mặt \((P)\), \(K\) là một điểm khác trong \((P)\). \(MH\perp HK\) nên \(MK\ge MH\). Tương tự nếu \((P)\) được thay bởi một đường \(a\), với \(H,K\in a\).</figcaption></figure>

    **Chiều cao chóp:** Nếu đỉnh \(S\) của chóp không thuộc mặt đáy \((P)\), chiều cao là \(d(S,(P))\), không mặc định bằng một cạnh bên. Với chóp đều đáy tam giác đều cạnh \(a\), cạnh bên \(b\), \(O\) là tâm đáy, \(AO=a/\sqrt3\), vì vậy \(SO=\sqrt{b^2-a^2/3}\); điều kiện hình chóp không suy biến là \(b>a/\sqrt3\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B26_PYRAMID_HEIGHT_AUTHORING_20261123.svg" alt="Chóp tam giác đều đỉnh S chiếu xuống tâm O, đường cao SO là căn b bình phương trừ a bình phương chia ba"><figcaption><strong>Tra Ví dụ 1:</strong> đỉnh \(S\) chiếu xuống **tâm \(O\)** của tam giác đều đáy. Độ cao \(SO\) là cạnh góc vuông của tam giác \(SOA\), còn \(SA=b\) là cạnh huyền, nên trừ \(AO^2=a^2/3\) khi tính.</figcaption></figure>

    ### 2.2. Khoảng cách giữa các đường thẳng và mặt phẳng song song, giữa hai mặt phẳng song song

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Các khoảng cách giữa đối tượng song song</strong><p>Nếu đường \(a\) song song với mặt \((P)\), khoảng cách \(d(a,(P))=d(M,(P))\) với một điểm <strong>bất kì</strong> \(M\in a\). Nếu \((P)\parallel(Q)\), khoảng cách \(d((P),(Q))=d(M,(Q))\) với \(M\in(P)\). Nếu \(m\parallel n\), khoảng cách \(d(m,n)=d(M,n)\) với \(M\in m\). Các khoảng cách không phụ thuộc lựa chọn điểm trên đối tượng thứ nhất.</p></div>

    **Lý do điểm nào cũng được:** Với đường \(a\parallel(P)\), hai chân vuông góc \(A,B\) của \(M,N\in a\) tạo hình chữ nhật \(ABNM\); vì vậy \(MA=NB\). Hai mặt phẳng song song có cùng phương pháp tuyến nên các đoạn vuông góc nối hai mặt dài bằng nhau. Hai đường song song cũng có chiều rộng vuông góc không đổi.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B26_PARALLEL_DISTANCES_AUTHORING_20261123.svg" alt="Bảng hình ba trường hợp khoảng cách song song: đường và mặt, hai mặt, hai đường"><figcaption><strong>Tra ba khung:</strong> **trái** đo các đoạn \(MA=NB\) từ đường \(a\) xuống \((P)\); **giữa** đo đoạn vuông góc giữa hai mặt \((P),(Q)\); **phải** đo đoạn vuông góc giữa hai đường \(m,n\). Không dùng độ dài của một đường nối xiên.</figcaption></figure>

    **Chiều cao lăng trụ:** Khoảng cách giữa hai mặt phẳng đáy song song là chiều cao lăng trụ. Nếu lăng trụ đứng, chiều cao bằng cạnh bên; với lăng trụ xiên, hai độ dài này khác nhau.

    **Ví dụ 2 SGK:** Hình hộp đứng đáy thoi cạnh \(a\), \(\angle BAD=120^\circ\), cạnh bên \(h\). Đường \(A'C'\parallel(ABCD)\), suy \(d(A'C',(ABCD))=AA'=h\). Đường \(AA'\parallel(BDD'B')\). Gọi \(O=AC\cap BD\): \(AO\perp BD\) do đáy là hình thoi, \(AO\perp BB'\) vì \(BB'\perp(ABCD)\); vậy \(AO\perp(BDD'B')\). Tam giác \(ABO\) vuông tại \(O\) có \(\angle ABO=30^\circ\), suy \(AO=a/2\). Vì thế \(d(AA',(BDD'B'))=a/2\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B26_RHOMBUS_PRISM_DISTANCES_AUTHORING_20261123.svg" alt="Đọc hình hộp đáy thoi có AA phẩy vuông góc đáy bằng h, AO vuông góc mặt BDD phẩy B phẩy bằng a trên hai"><figcaption><strong>Tra ví dụ:</strong> cạnh đứng \(AA'=h\) đo từ mặt trên xuống đáy; đoạn \(AO\) nằm trong đáy, vuông góc **hai đường cắt nhau \(BD,BB'\)** của mặt bên và có độ dài \(a/2\). Không dùng \(AA'\) để đo khoảng cách **đường–mặt bên**.</figcaption></figure>

    **Ứng dụng SGK — Dốc nghiêng:** Thanh ngang đặt trên cột đứng cao \(2{,}28\) m, mặt dốc nghiêng \(15^\circ\). Khoảng cách vuông góc tới mặt dốc là \(2{,}28\cos15^\circ\approx2{,}20\) m (làm tròn hai chữ số). Vì \(2{,}21>2{,}20\), trong mô hình bài toán xe cao \(2{,}21\) m không được qua.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B26_SLOPE_CLEARANCE_AUTHORING_20261123.svg" alt="Mặt cắt đường dốc 15 độ với cột cao 2,28 mét, khoảng cách pháp tuyến đến mặt dốc chỉ khoảng 2,20 mét"><figcaption><strong>Tra mặt cắt:</strong> đoạn đứng \(TF=2{,}28\) m không phải khoảng cách tới dốc, đoạn đỏ \(TH\perp\) mặt dốc mới là khoảng cách cần đo. Góc giữa chúng bằng \(15^\circ\) trong tiết diện, nên dùng **cos**, không dùng sin.</figcaption></figure>

    ### 2.3. Khoảng cách giữa hai đường thẳng chéo nhau

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Đường vuông góc chung và khoảng cách</strong><p>Cho hai đường thẳng \(a,b\) <strong>chéo nhau</strong>. Một đường \(\Delta\) <strong>cắt cả \(a,b\) và vuông góc với cả hai</strong> gọi là đường vuông góc chung. Nếu \(\Delta\cap a=\{M\}\), \(\Delta\cap b=\{N\}\), thì <strong>\(d(a,b)=MN\)</strong>. Phải kiểm \(M\in a\), \(N\in b\), \(MN\perp a\) và \(MN\perp b\).</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Nhận xét — Chuyển về khoảng cách song song</strong><p>Với hai đường \(a,b\) chéo nhau, chọn \((Q)\) <strong>chứa \(b\) và song song \(a\)</strong>. Khi đó <strong>\(d(a,b)=d(a,(Q))\)</strong>. Cũng có thể chọn hai mặt phẳng song song lần lượt chứa \(a\) và \(b\), rồi đo khoảng cách giữa hai mặt ấy.</p></div>

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B26_SKEW_COMMON_PERPENDICULAR_AUTHORING_20261123.svg" alt="Đường a nằm trên mặt Q chứa b, a phẩy hình chiếu a cắt b ở N, đoạn MN vuông góc chung"><figcaption><strong>Tra HĐ4 SGK:</strong> \((Q)\) chứa \(b\) và song song \(a\); \(a'\) nét đứt là ảnh vuông góc của \(a\) xuống \((Q)\). Chọn \(N=a'\cap b\); dựng đường pháp tuyến qua \(N\) gặp \(a\) tại \(M\). \(MN\) đỏ cắt đúng hai đường và vuông góc cả hai, nên là khoảng cách.</figcaption></figure>

    **Trường hợp dựng nhanh khi một đường vuông góc mặt phẳng:** Nếu \(a\perp(P)\) tại \(O\), còn \(b\subset(P)\) và \(O\notin b\), thì hạ \(OH\perp b\) trong \((P)\). Vì \(OH\subset(P)\), \(OH\perp a\), đồng thời \(OH\perp b\), nên \(d(a,b)=OH=d(O,b)\). Không cần dựng mặt phẳng phụ.

    **Ví dụ 3 SGK:** Trong chóp \(S.ABC\), \(SA\perp(ABC)\), \(AB=a\), \(\angle ABC=60^\circ\). Lấy \(H\) là chân từ \(A\) xuống \(BC\). Vì \(AH\perp BC\) và \(AH\subset(ABC)\) nên \(AH\perp SA\); vậy \(AH\) là đoạn vuông góc chung. \(d(SA,BC)=AH=AB\sin60^\circ=a\sqrt3/2\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B26_SABC_COMMON_PERPENDICULAR_AUTHORING_20261123.svg" alt="Chóp SABC, SA vuông góc đáy, AH từ A đến H trên BC là đoạn vuông góc chung"><figcaption><strong>Tra Ví dụ 3:</strong> kiểm \(A\in SA\), \(H\in BC\); \(AH\perp BC\) do chân chiếu và \(AH\perp SA\) do \(SA\perp\) đáy. Tam giác vuông \(ABH\) với góc \(B=60^\circ\) cho \(AH=a\sqrt3/2\).</figcaption></figure>

    | Tình huống | Đoạn cần tìm | Điều kiện quyết định |
    | :-- | :-- | :-- |
    | Điểm – đường/mặt | Đoạn từ điểm đến chân chiếu | Vuông góc đường/mặt |
    | Hai đối tượng song song | Đoạn vuông góc giữa hai đối tượng | Xác minh **song song** |
    | Hai đường chéo nhau | Đoạn vuông góc chung | Hai đầu thuộc đúng đường, vuông góc cả hai |

=== "Ví dụ"

    ### 3.1. Chứng minh đoạn vuông góc là đoạn ngắn nhất

    **Đề bài.** Cho \(M\notin(P)\), \(MH\perp(P)\), \(MH=3\) cm. Một điểm \(K\in(P)\) thỏa \(HK=4\) cm. Tính \(MK\); chứng minh mọi đoạn nối \(M\) với \((P)\) đều dài ít nhất \(3\) cm.

    **Phân tích:** Muốn so sánh mọi đoạn, dùng hình chiếu \(H\) và Pythagore trong tam giác \(MHK\); điều kiện \(MH\perp(P)\) mạnh hơn chỉ vuông góc một đường vẽ trong mặt.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.1"><p><strong>Lời giải.</strong> Vì \(MH\perp(P)\) và \(HK\subset(P)\), \(MH\perp HK\), nên \(MK=\sqrt{3^2+4^2}=5\) cm. Với điểm \(X\in(P)\) bất kì, \(MX^2=MH^2+HX^2\ge MH^2=9\). Do các độ dài không âm, \(MX\ge3\) cm; đẳng thức khi \(X=H\). Vậy \(d(M,(P))=MH=3\) cm.</p></div>

    **Kiểm lại:** \(5\ge3\) đúng; 3 cm là **cực tiểu**, không phải chiều dài của mọi đoạn xiên.

    ### 3.2. Từ điểm đến đường thẳng — xác định được cả chân

    **Đề bài.** Trong mặt phẳng tọa độ, với \(M(0;0)\) và đường \(a:2x+y-6=0\), chứng minh \(H(12/5;6/5)\) là hình chiếu của \(M\) lên \(a\), rồi tính \(d(M,a)\).

    **Phân tích:** Muốn được dùng \(MH\) làm khoảng cách, phải kiểm **\(H\in a\)** và **\(MH\perp a\)**, chứ không chỉ thay số vào một công thức thuộc lòng.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G10_B20_POINT_LINE_DISTANCE_R02.svg" alt="Điểm M không không và chân H mười hai phần năm sáu phần năm trên đường 2x cộng y bằng 6"><figcaption><strong>Đọc hình trước lời giải:</strong> \(M\) là gốc tọa độ, \(H(12/5;6/5)\) ở trên đường xanh \(2x+y=6\). Đoạn \(MH\) cùng phương pháp tuyến \((2;1)\), nên vuông góc đường; khoảng cách chính là độ dài \(MH\).</figcaption></figure>

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.2"><p><strong>Lời giải.</strong> Thế tọa độ \(H\) vào \(a\): \(2(12/5)+6/5-6=0\), nên \(H\in a\). Vectơ \(\overrightarrow{MH}=(12/5;6/5)=(6/5)(2;1)\) cùng phương vectơ pháp tuyến của \(a\), suy \(MH\perp a\). Do đó \(d(M,a)=MH=\sqrt{(12/5)^2+(6/5)^2}=\sqrt{180}/5=6/\sqrt5\).</p></div>

    **Kiểm lại:** \(d(M,a)>0\) vì \(M\notin a\). Kết quả cũng bằng \(|2\cdot0+0-6|/\sqrt{2^2+1^2}=6/\sqrt5\), nhưng kiểm chân mới làm rõ bản chất.

    ### 3.3. Ví dụ 1 SGK — Chiều cao hình chóp đều tam giác

    **Đề bài.** Chóp tam giác đều \(S.ABC\) có cạnh đáy \(a>0\), cạnh bên \(b\), với \(b>a/\sqrt3\). Tính chiều cao. Áp dụng khi \(a=6\) cm, \(b=5\) cm.

    **Phân tích:** Chóp đều có chân cao \(O\) ở **tâm tam giác đều**. Đáy cạnh \(a\) cho \(AO=a/\sqrt3\), nên tam giác \(SAO\) vuông tại \(O\) là đủ; không nhầm \(SA=b\) với chiều cao.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B26_PYRAMID_HEIGHT_AUTHORING_20261123.svg" alt="Chóp đều SABC, SO là chiều cao tới tâm O của tam giác đều, SA là cạnh bên b"><figcaption><strong>Đọc trước lời giải:</strong> \(O\) là tâm đáy đều và là chân \(SO\perp(ABC)\); \(SO\) đỏ là đoạn ngắn nhất từ \(S\) đến đáy, còn \(SA=b\) là cạnh huyền tam giác vuông \(SOA\). Từ \(AO=a/\sqrt3\) mới dùng Pythagore.</figcaption></figure>

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.3"><p><strong>Lời giải.</strong> Vì \(O\) là tâm tam giác đều \(ABC\), \(AO=a/\sqrt3\). Trong tam giác vuông \(SOA\), \(SO^2=SA^2-OA^2=b^2-a^2/3\), nên \(SO=\sqrt{b^2-a^2/3}\). Với \(a=6,b=5\): \(SO=\sqrt{25-12}=\sqrt{13}\) cm.</p></div>

    **Kiểm lại:** Điều kiện \(b>a/\sqrt3\) bảo đảm căn có giá trị dương và chóp không suy biến. Với số đã cho, \(\sqrt{13}<5=b\), phù hợp chiều cao ngắn hơn cạnh bên.

    ### 3.4. Luyện tập 1 SGK — Hai khoảng cách khác nhau trong lăng trụ đứng

    **Đề bài.** Lăng trụ đứng \(ABC.A'B'C'\) có tam giác \(ABC\) vuông cân tại \(A\), \(AB=AC=a>0\), cạnh bên \(AA'=h>0\). a) Tính \(d(A,(BCC'B'))\). b) Chứng minh \(ABC'\) vuông ở \(A\) và tính \(d(A,BC')\).

    **Phân tích:** **Khoảng cách điểm–mặt** cần hạ \(AH\) vuông góc mặt bên. **Khoảng cách điểm–đường \(BC'\)** cần đường cao của **tam giác \(ABC'\)**. Hai chân chiếu này không nhất thiết trùng; nhầm chúng sẽ cho hai kết quả sai giống nhau.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B26_RIGHT_TRIANGULAR_PRISM_AUTHORING_20261123.svg" alt="Lăng trụ đứng tam giác vuông cân ABC có mặt bên BCC phẩy B phẩy và đường chéo BC phẩy nổi bật"><figcaption><strong>Đọc hình trước khi tính:</strong> mặt xanh \((BCC'B')\) chứa đường \(BC\) và cạnh đứng \(BB'\); chân \(H\) từ \(A\) xuống \(BC\) làm \(AH\perp\) mặt bên. Đường đỏ \(BC'\) là **một đường nằm trong mặt**, nhưng \(H\) không nằm trên \(BC'\); muốn đo tới \(BC'\) phải dựng chân khác trong tam giác \(ABC'\).</figcaption></figure>

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.4"><p><strong>Lời giải.</strong> a) Gọi \(H\) là chân từ \(A\) xuống \(BC\). Vì \(ABC\) vuông cân tại \(A\), \(BC=a\sqrt2\) và đường cao \(AH=AB\cdot AC/BC=a/\sqrt2\). Lại \(AH\subset(ABC)\) và \(BB'\perp(ABC)\), nên \(AH\perp BB'\). Vì \(AH\perp BC\) và \(BC,BB'\) cắt nhau trong \((BCC'B')\), \(AH\perp(BCC'B')\), do đó \(d(A,(BCC'B'))=a/\sqrt2\). b) Do \(AB\perp AC\) và \(AB\perp AA'\), suy \(AB\perp(ACC'A')\), nên \(AB\perp AC'\): tam giác \(ABC'\) vuông tại \(A\). \(AC'=\sqrt{a^2+h^2}\), \(BC'=\sqrt{2a^2+h^2}\), vì vậy độ dài đường cao từ \(A\) xuống \(BC'\) là \(AB\cdot AC'/BC'=a\sqrt{a^2+h^2}/\sqrt{2a^2+h^2}\).</p></div>

    **Kiểm lại:** Khoảng cách đến **đường \(BC'\)** không nhỏ hơn khoảng cách đến **mặt chứa đường ấy**: \(a\sqrt{a^2+h^2}/\sqrt{2a^2+h^2}\ge a/\sqrt2\) vì \(2(a^2+h^2)\ge2a^2+h^2\). Với \(h>0\), bất đẳng thức nghiêm.

    ### 3.5. Ví dụ 2 SGK — Hình hộp đứng đáy thoi

    **Đề bài.** Hình hộp đứng \(ABCD.A'B'C'D'\) có đáy hình thoi cạnh \(a>0\), \(\angle BAD=120^\circ\), \(AA'=h>0\). Tính \(d(A'C',(ABCD))\) và \(d(AA',(BDD'B'))\).

    **Phân tích:** Câu thứ nhất dùng **hai đáy song song** và đoạn đứng. Câu thứ hai cần **một đoạn trong đáy vuông góc mặt bên**, nên chọn \(O\) là giao hai đường chéo hình thoi.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B26_RHOMBUS_PRISM_DISTANCES_AUTHORING_20261123.svg" alt="Hình hộp đứng đáy thoi, AA phẩy đo h tới mặt đáy, AO đo a chia hai tới mặt bên BDD phẩy B phẩy"><figcaption><strong>Đọc hình trước lời giải:</strong> đường \(A'C'\) ở mặt trên song song mặt đáy nên khoảng cách bằng cạnh đứng \(h\). Đường \(AA'\) song song mặt bên \((BDD'B')\); đoạn \(AO\) màu đỏ vuông góc với \(BD\) và cạnh đứng \(BB'\), là pháp tuyến mặt ấy.</figcaption></figure>

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.5"><p><strong>Lời giải.</strong> Vì \(A'C'\subset(A'B'C'D')\parallel(ABCD)\) và \(AA'\perp(ABCD)\), \(d(A'C',(ABCD))=AA'=h\). Gọi \(O\) là giao hai đường chéo đáy. Hình thoi cho \(AO\perp BD\); hình hộp đứng cho \(AO\perp BB'\). Do \(BD,BB'\) cắt nhau trong \((BDD'B')\), \(AO\perp(BDD'B')\), suy \(d(AA',(BDD'B'))=AO\). Tam giác \(BAD\) cân tại \(A\), có \(\angle BAD=120^\circ\) nên \(\angle ABO=30^\circ\); tam giác \(ABO\) vuông tại \(O\) cho \(AO=AB\sin30^\circ=a/2\).</p></div>

    **Kiểm lại:** Hai khoảng cách \(h\) và \(a/2\) đo theo hai **phương khác nhau**; không mặc định chúng bằng nhau. Đã kiểm \(AO\perp\) cả hai đường cắt nhau của mặt bên.

    ### 3.6. Đường nằm trong một trong hai mặt phẳng song song

    **Đề bài.** Hai mặt phẳng \((P),(Q)\) song song và cách nhau \(6\) cm. Đường \(a\subset(P)\) song song với \((Q)\). Tính \(d(a,(Q))\) và giải thích vì sao kết quả không phụ thuộc điểm chọn trên \(a\).

    **Phân tích:** Không cần xác định chân đặc biệt trên \(a\). Đường \(a\) nằm trong mặt \((P)\) song song với \((Q)\), nên mọi điểm của \((P)\) có cùng khoảng cách tới \((Q)\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.6"><p><strong>Lời giải.</strong> Lấy \(M\in a\subset(P)\). Vì \((P)\parallel(Q)\), \(d(M,(Q))=d((P),(Q))=6\) cm; do \(a\parallel(Q)\), \(d(a,(Q))=d(M,(Q))=6\) cm. Với mọi \(N\in a\), \(d(N,(Q))\) cũng bằng khoảng cách hai mặt song song nên không đổi.</p></div>

    **Kiểm lại:** Cần \((P)\parallel(Q)\) **và** \(a\subset(P)\); không áp kết luận cho hai mặt cắt nhau.

    ### 3.7. Vận dụng SGK — Khung hạn chế chiều cao trên dốc

    **Đề bài.** Một khung có hai cột đứng dài \(2{,}28\) m và thanh ngang nối đỉnh cột. Mặt đường nghiêng \(15^\circ\) so với phương ngang, phương thanh ngang song song mặt dốc. Tính khoảng cách từ thanh ngang đến mặt đường, làm tròn \(0{,}01\) m. Xe cao \(2{,}21\) m có đi qua được theo mô hình này không?

    **Phân tích:** Khoảng cách tới mặt nghiêng phải đo theo **pháp tuyến của mặt dốc**, không theo chiều thẳng đứng của cột. Trong mặt cắt dọc dốc, phương đứng và pháp tuyến tạo góc \(15^\circ\), nên hình chiếu của đoạn đứng lên pháp tuyến là **cạnh kề** \(2{,}28\cos15^\circ\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B26_SLOPE_CLEARANCE_AUTHORING_20261123.svg" alt="Cột đứng 2,28 mét trên mặt dốc 15 độ và khoảng cách vuông góc đường dốc khoảng 2,20 mét"><figcaption><strong>Đọc mặt cắt:</strong> \(TF\) xanh là cột **đứng** \(2{,}28\) m, \(TH\) đỏ là đoạn **vuông góc đường dốc**. Góc dốc \(15^\circ\) bằng góc giữa cột đứng và pháp tuyến dốc; dùng \(TH=TF\cos15^\circ\), không thay bằng \(TF\).</figcaption></figure>

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.7"><p><strong>Lời giải.</strong> Trong tiết diện vuông góc thanh ngang, gọi \(d\) là khoảng cách từ thanh tới mặt dốc. Theo hình chiếu lên pháp tuyến \(d=2{,}28\cos15^\circ\approx2{,}2023\) m, làm tròn \(d\approx2{,}20\) m. Vì \(2{,}21>2{,}2023\), trong mô hình hình học xe cao \(2{,}21\) m <strong>không</strong> lọt khoảng không tại khung.</p></div>

    **Kiểm lại:** \(d<2{,}28\) m đúng vì khoảng cách pháp tuyến ngắn hơn đoạn đứng. Bài không xét khoảng dự phòng, hệ thống treo xe, sai số đo hoặc các yếu tố giao thông thực tế.

    ### 3.8. Ví dụ 3 SGK — Dựng đoạn vuông góc chung SA và BC

    **Đề bài.** Hình chóp \(S.ABC\) có \(SA\perp(ABC)\), \(AB=a>0\), \(\angle ABC=60^\circ\). Dựng đoạn vuông góc chung của \(SA\) và \(BC\), rồi tính khoảng cách.

    **Phân tích:** Vì \(SA\perp(ABC)\) tại \(A\), mọi đường trong đáy qua \(A\) đều vuông góc \(SA\). Chỉ cần dựng thêm đường qua \(A\) vuông góc \(BC\) để được **đoạn vuông góc chung**.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B26_SABC_COMMON_PERPENDICULAR_AUTHORING_20261123.svg" alt="Hình chóp SA vuông góc đáy, H chân từ A xuống BC, đoạn AH vuông góc chung SA BC"><figcaption><strong>Đọc hình trước lời giải:</strong> kiểm đủ \(A\in SA\), \(H\in BC\), \(AH\perp BC\) từ cách dựng và \(AH\perp SA\) vì \(SA\perp(ABC)\). Chỉ khi đủ bốn điều kiện mới gọi \(AH\) là đoạn vuông góc chung.</figcaption></figure>

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.8"><p><strong>Lời giải.</strong> Gọi \(H\) là hình chiếu của \(A\) trên đường \(BC\). Khi đó \(H\in BC\), \(AH\perp BC\). Mặt khác \(AH\subset(ABC)\) nên \(AH\perp SA\). Vì \(A\in SA\), đoạn \(AH\) cắt đúng hai đường và vuông góc cả hai, nên \(d(SA,BC)=AH\). Trong tam giác \(ABH\) vuông tại \(H\), \(\angle ABH=\angle ABC=60^\circ\), do đó \(AH=AB\sin60^\circ=a\sqrt3/2\).</p></div>

    **Kiểm lại:** \(AH<a=AB\), hợp lí. Kết quả dùng góc ở \(B\) và độ dài \(AB\), không cần biết \(SA\); nếu chọn đoạn \(SB\), không đủ hai vuông góc.

    ### 3.9. Luyện tập 3 SGK — Khoảng cách BD đến SC trong chóp đáy vuông

    **Đề bài.** Hình chóp \(S.ABCD\) có đáy hình vuông cạnh \(a>0\), \(SA\perp(ABCD)\), \(SA=a\sqrt2\). a) Tính \(d(A,SC)\). b) Chứng minh \(BD\perp(SAC)\). c) Tính \(d(BD,SC)\) và dựng đoạn vuông góc chung.

    **Phân tích:** a) Trong tam giác \(SAC\), \(SA\perp AC\), nên \(d(A,SC)\) là đường cao từ góc vuông xuống cạnh huyền. b) Dùng **hai đường cắt nhau \(SA,AC\)** để chứng minh vuông góc mặt. c) Giao \(O=BD\cap AC\) nằm trong mặt \((SAC)\), dựng chân \(H\) từ \(O\) xuống \(SC\); khi đó \(OH\perp BD\) nhờ \(BD\perp(SAC)\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B26_SQUARE_PYRAMID_SKEW_DISTANCE_AUTHORING_20261123.svg" alt="Chóp đáy vuông, đường BD vuông góc mặt SAC tại O, OH tới SC là đoạn vuông góc chung dài a trên hai"><figcaption><strong>Đọc hình trước lời giải:</strong> \(O\) là giao \(BD,AC\); đường \(BD\) xanh vuông góc cả \(SA,AC\), nên vuông góc mặt \((SAC)\). Đoạn đỏ \(OH\) nằm trong \((SAC)\), đi từ \(O\in BD\) tới \(H\in SC\) và được dựng vuông góc \(SC\). Vì \(BD\perp(SAC)\), \(OH\perp BD\) nữa.</figcaption></figure>

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.9"><p><strong>Lời giải.</strong> a) Vì \(SA\perp(ABCD)\), \(SA\perp AC\). Đáy hình vuông cho \(AC=a\sqrt2\), nên tam giác \(SAC\) vuông cân tại \(A\), \(SC=\sqrt{SA^2+AC^2}=2a\). Đường cao từ \(A\) xuống \(SC\) có độ dài \(SA\cdot AC/SC=a\), vậy \(d(A,SC)=a\). b) Hình vuông có \(BD\perp AC\); đồng thời \(BD\perp SA\) vì \(SA\perp(ABCD)\). Hai đường \(SA,AC\) cắt tại \(A\) trong \((SAC)\), suy \(BD\perp(SAC)\). c) Gọi \(O=AC\cap BD\), \(H\) là chân từ \(O\) xuống \(SC\). Khi đó \(OH\perp SC\), và \(OH\subset(SAC)\) nên \(OH\perp BD\). Vậy \(OH\) là đoạn vuông góc chung. Diện tích tam giác \(SOC\) theo đáy \(OC=AC/2=a/\sqrt2\) và đường cao \(SA=a\sqrt2\) bằng \(a^2/2\). Mặt khác \(S_{SOC}=SC\cdot OH/2\), nên \(OH=a^2/(2a)=a/2\). Do đó \(d(BD,SC)=a/2\).</p></div>

    **Kiểm lại:** \(d(BD,SC)=a/2\le d(A,SC)=a\) là hợp lí vì \(A\) là một điểm khác \(O\) trên mặt \((SAC)\), không phải điểm thuộc \(BD\). Đã kiểm \(OH\) có **cả hai đầu thuộc đúng đường**, và vuông góc cả hai đường.

    ### 3.10. Dựng khoảng cách hai đường chéo nhau qua mặt phẳng phụ

    **Đề bài.** Hai đường \(a,b\) chéo nhau. Dựng mặt \((Q)\) chứa \(b\), song song \(a\); gọi \(a'\) là hình chiếu vuông góc của \(a\) trên \((Q)\). Giả sử \(N=a'\cap b\), \(M\) là điểm thuộc \(a\) chiếu xuống \(N\). Chứng minh đoạn \(MN\) là đoạn vuông góc chung và \(d(a,b)=d(a,(Q))\).

    **Phân tích:** Mục tiêu là chuyển khoảng cách **hai đường** về đoạn vuông góc **đường–mặt**. Mặt phẳng phụ phải chứa đúng \(b\), song song đúng \(a\); điểm \(N\) phải nằm trên cả \(a'\) và \(b\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B26_SKEW_COMMON_PERPENDICULAR_AUTHORING_20261123.svg" alt="M nằm trên đường a và N trên b ở mặt Q, MN vuông góc chung nhờ hình chiếu a phẩy"><figcaption><strong>Đọc trước lời giải:</strong> đường \(a'\) nét đứt là hình chiếu của \(a\) trên \((Q)\), giao \(b\) tại \(N\). Đường đỏ qua \(N\) **vuông góc mặt \((Q)\)** gặp \(a\) tại \(M\). Đây là cách dựng thỏa đồng thời hai điều kiện vuông góc, không phải đoạn nối ngẫu nhiên.</figcaption></figure>

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.10"><p><strong>Lời giải.</strong> Theo cách dựng, \(N\in b\subset(Q)\), \(M\in a\), và \(MN\perp(Q)\). Do \(b\subset(Q)\), \(MN\perp b\). Vì \(a\parallel(Q)\), phương của \(a\) song song một phương thuộc \((Q)\), nên \(MN\perp a\). Vì vậy đường \(MN\) cắt cả \(a,b\) tại \(M,N\) và vuông góc cả hai: đó là đường vuông góc chung. Độ dài \(MN\) chính là khoảng cách \(a\) tới \((Q)\) và là \(d(a,b)\).</p></div>

    **Kiểm lại:** Nếu mặt \((Q)\) không chứa \(b\) hoặc không song song \(a\), phép chuyển chưa hợp lệ. Nếu hai đường không chéo nhau thì phải xét trường hợp song song/cắt nhau riêng.

=== "Lỗi thường gặp"

    ### 4.1. Lấy một đoạn xiên làm khoảng cách

    **Dấu hiệu:** Từ \(M\) tới \((P)\), chọn điểm \(K\in(P)\) tùy ý rồi nói \(d(M,(P))=MK\).

    **Vì sao sai:** Khoảng cách là **đoạn ngắn nhất**, đi theo đường vuông góc tại chân \(H\), còn \(MK^2=MH^2+HK^2\ge MH^2\).

    **Cách sửa:** Dựng và chứng minh \(MH\perp(P)\), sau đó viết \(d(M,(P))=MH\); nếu \(M\in(P)\), khoảng cách bằng \(0\).

    ### 4.2. Chứng minh vuông góc một đường nhưng kết luận vuông góc cả mặt

    **Dấu hiệu:** Muốn dùng \(AH=d(A,(Q))\), em chỉ có \(AH\perp b\) với \(b\subset(Q)\), chưa kiểm phương còn lại.

    **Vì sao sai:** Vuông góc **một đường** trong mặt không đủ để vuông góc **toàn mặt**; đây là thiếu giả thiết của định lí ở Bài 23.

    **Cách sửa:** Chỉ rõ hai đường \(b,c\subset(Q)\) **cắt nhau**, cùng vuông góc với \(AH\). Trong hình hộp đáy thoi, cần kiểm \(AO\perp BD\) **và** \(AO\perp BB'\).

    ### 4.3. Dùng cạnh bên làm chiều cao hình chóp

    **Dấu hiệu:** Chóp đều có \(SA=b\) thì ghi luôn chiều cao bằng \(b\).

    **Vì sao sai:** Chóp đều có chân cao tại **tâm \(O\)** đáy. Cạnh bên \(SA\) là cạnh **xiên** và thường dài hơn \(SO\).

    **Cách sửa:** Dùng tam giác \(SOA\) vuông tại \(O\): \(SO=\sqrt{b^2-a^2/3}\) nếu đáy tam giác đều cạnh \(a\). Kiểm điều kiện \(b>a/\sqrt3\).

    ### 4.4. Áp công thức khoảng cách song song khi chưa chứng minh song song

    **Dấu hiệu:** Từ hai đối tượng bất kì trong không gian, lấy một điểm của đối tượng thứ nhất và giả định khoảng cách đến đối tượng kia không đổi.

    **Vì sao sai:** Tính độc lập với điểm chọn đúng khi **hai đường song song**, **hai mặt song song**, hoặc **đường song song mặt**. Với đường xiên cắt mặt, khoảng cách tại các điểm có thể khác nhau.

    **Cách sửa:** Trước khi dùng \(d(a,(P))=d(M,(P))\), phải xác minh \(a\parallel(P)\); trước khi lấy khoảng cách từ một mặt đến mặt kia, xác minh hai mặt song song.

    ### 4.5. Đồng nhất khoảng cách tới mặt với khoảng cách tới một đường trong mặt

    **Dấu hiệu:** Trong lăng trụ \(ABC.A'B'C'\), lấy chân \(H\) từ \(A\) xuống \(BC\), rồi dùng ngay \(AH\) làm \(d(A,BC')\).

    **Vì sao sai:** \(H\) thuộc \(BC\) và mặt bên \((BCC'B')\), nhưng không nhất thiết thuộc **đường \(BC'\)**. Khoảng cách tới mặt \(\le\) khoảng cách tới một đường nằm trong mặt.

    **Cách sửa:** Dùng \(AH\) khi đo tới **mặt** nếu đã chứng minh vuông góc mặt; khi đo tới **đường \(BC'\)**, dựng đường cao từ \(A\) của tam giác \(ABC'\).

    ### 4.6. Đánh tráo khoảng cách h và a/2 trong hình hộp đáy thoi

    **Dấu hiệu:** Trong Ví dụ 2 SGK, trả \(d(AA',(BDD'B'))=h\) vì \(AA'\) là cạnh đứng.

    **Vì sao sai:** \(AA'\) song song mặt bên \((BDD'B')\); đoạn đứng **không** vuông góc mặt ấy. Khoảng cách đúng là đoạn \(AO\) trong đáy và bằng \(a/2\).

    **Cách sửa:** Vẽ \(O=AC\cap BD\), chứng minh \(AO\perp BD\) và \(AO\perp BB'\), rồi suy \(AO\perp(BDD'B')\). Cạnh \(AA'=h\) chỉ đo khoảng cách từ **đường ở mặt trên xuống đáy**.

    ### 4.7. Chọn một đoạn nối hai đường chéo nhau nhưng thiếu vuông góc

    **Dấu hiệu:** Chọn đoạn \(XY\) với \(X\in a,Y\in b\) và nói \(d(a,b)=XY\) dù chỉ biết \(XY\perp a\), không biết \(XY\perp b\).

    **Vì sao sai:** Đường vuông góc chung phải **cắt cả hai đường** và **vuông góc cả hai**. Một đoạn nối xiên vẫn có thể dài hơn khoảng cách.

    **Cách sửa:** Kiểm lần lượt \(X\in a\), \(Y\in b\), \(XY\perp a\), \(XY\perp b\). Trong chóp \(SA\perp(ABC)\), lấy \(AH\perp BC\) với \(H\in BC\) để chứng minh \(AH\) là đoạn chung của \(SA,BC\).

    ### 4.8. Lấy chiều dài cột đứng làm khoảng cách vuông góc tới mặt dốc

    **Dấu hiệu:** Cột cao \(2{,}28\) m, dốc nghiêng \(15^\circ\), em so trực tiếp \(2{,}28\) với chiều cao xe \(2{,}21\) và kết luận xe qua được.

    **Vì sao sai:** Khoảng cách tới **mặt dốc** đo theo pháp tuyến của mặt, không phải phương đứng. Khi dốc nghiêng, đoạn pháp tuyến ngắn hơn đoạn đứng.

    **Cách sửa:** Chiếu độ dài cột lên pháp tuyến: \(d=2{,}28\cos15^\circ\approx2{,}20\) m. So đúng \(2{,}20<2{,}21\), xe không đủ khoảng trống trong mô hình bài toán.

    **Học tiếp:** [Core và Luyện tập Bài 26](luyen-tap.md) · [Tự luận Chương VII](../../../thu-vien/tu-luan-g11-chuong-vii.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">Nguồn S1: SGK Toán 11 Kết nối tri thức với cuộc sống, tập hai, Bài 26 “Khoảng cách”, trang in 54–58; gồm ba mục “Khoảng cách từ một điểm đến một đường thẳng, đến một mặt phẳng”, “Khoảng cách giữa các đường thẳng và mặt phẳng song song, giữa hai mặt phẳng song song”, “Khoảng cách giữa hai đường thẳng chéo nhau”. Đã đối chiếu văn bản S1 số hóa về HĐ1–4, Ví dụ 1–3, Luyện tập 1–3 và Vận dụng về khung khống chế chiều cao; ảnh trang PDF gốc và offset trang in↔chỉ số PDF chưa xác minh được (SOURCE_VISUAL_OFFSET_HOLD). Tái sử dụng nguyên SVG điểm–mặt của B26 và SVG điểm–đường Toán 10; bổ sung các hình đúng chỗ còn thiếu. Không sửa Core/Luyện tập, Tự kiểm tra, ngân hàng câu hỏi và hệ thống đánh giá.</p>


## === END G11-CHVII-B26 ===

## === BEGIN G11-CHVII-B27 | PR#1056 | HEAD 0a6aad2abda914b4afb2135d0e79f09ca0572045 | BLOB e4678ec42ee3a7a38a784877adbb20c08d0f974a ===

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

=== "Kiến thức SGK"

    **Lưu ý cấu trúc S1:** Bài 27 trên trang in 61–63 trình bày **khái niệm khối hình, ba công thức thể tích và các ví dụ liền mạch**, không đánh số ba mục lớn. Ba tiểu mục 2.1–2.3 dưới đây là **nhóm học tập tương ứng 1.1–1.3**, không phải tiêu đề tự nhận là nguyên văn SGK.

    ### 2.1. Khối hình, thể tích khối chóp và vai trò của chiều cao

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khối đa diện và thể tích</strong><p>Phần không gian giới hạn bởi hình chóp, chóp cụt đều, lăng trụ, hộp gọi tương ứng là <strong>khối chóp, khối chóp cụt đều, khối lăng trụ, khối hộp</strong>. Thể tích đo phần không gian, đơn vị có số mũ <strong>3</strong>; chiều cao là <strong>đoạn vuông góc</strong> từ đỉnh tới mặt đáy hoặc khoảng cách giữa hai đáy song song.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Công thức SGK — Khối chóp</strong><p>Với diện tích đáy \(S>0\) và chiều cao \(h>0\), <strong>\(V_{\text{chóp}}=\frac13 Sh\)</strong>. Tứ diện là trường hợp hình chóp có đáy tam giác; chọn bất cứ mặt làm đáy đều được, nhưng chiều cao phải ứng với <strong>đúng mặt đáy ấy</strong>.</p></div>

    **Vì sao không dùng \(Sh\)?** Khối chóp có những tiết diện song song đáy **thu nhỏ về đỉnh**, nên bằng một phần ba khối lăng trụ cùng diện tích đáy và cùng chiều cao. Khi đổi \(S\) nhưng giữ \(h\), thể tích thay đổi cùng tỉ lệ \(S\); khi đổi \(h\) nhưng giữ \(S\), thể tích thay đổi cùng tỉ lệ \(h\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B27-01_R00.svg" alt="Hình chóp có thể tích Sh trên ba, khác lăng trụ Sh khi cùng đáy và chiều cao"><figcaption><strong>Tra hình 7.93:</strong> giữa là khối chóp thu về đỉnh, trái là lăng trụ có hai đáy bằng nhau. Mẫu số 3 chỉ áp cho **chóp**; \(h\) luôn là khoảng cách vuông góc, không phải cạnh bên xiên.</figcaption></figure>

    **Ví dụ 1 SGK:** Tứ diện \(OABC\) có \(OA=a,OB=b,OC=c\) đôi một vuông góc. Chọn \(OBC\) làm đáy, \(S_{OBC}=bc/2\), \(OA\perp(OBC)\) nên \(V_{OABC}=\frac13\cdot\frac{bc}2\cdot a=abc/6\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B27_TETRAHEDRON_ORTHOGONAL_AUTHORING_20261123.svg" alt="Tứ diện vuông OABC, đáy tam giác OBC diện tích bc trên hai, chiều cao OA bằng a"><figcaption><strong>Tra Ví dụ 1:</strong> hai đường \(OB,OC\) cắt tại \(O\), cùng vuông góc \(OA\), nên \(OA\perp(OBC)\). Đáy tam giác vuông có diện tích \(bc/2\), rồi mới nhân **\(a/3\)**.</figcaption></figure>

    **Luyện tập 1 SGK:** Chóp tứ giác đều đáy vuông cạnh \(a\), cạnh bên \(b>a/\sqrt2\) có chân cao tại tâm đáy, đường cao \(\sqrt{b^2-a^2/2}\), do đó \(V=\frac{a^2}3\sqrt{b^2-a^2/2}\). Nếu chưa tìm được đường cao thì chưa thể thay \(b\) vào chỗ \(h\).

    **HĐ1 SGK:** Phòng hộp chữ nhật \(4\) m × \(5\) m × \(3\) m có \(60\text{ m}^3\). Với **hệ số giả định trong đề** \(200\) BTU/\(\text{m}^3\), công suất tương ứng \(12\,000\) BTU. Không coi đây là định mức chọn thiết bị ngoài thực tế.

    ### 2.2. Khối chóp cụt đều: vì sao có căn của tích diện tích hai đáy?

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Công thức SGK — Khối chóp cụt đều</strong><p>Với diện tích đáy lớn \(S\), đáy nhỏ \(S'\) và chiều cao \(h\), thể tích là <strong>\(V_{\text{cụt}}=\frac h3\left(S+S'+\sqrt{SS'}\right)\)</strong>. Hai đáy phải là các đa giác đều <strong>song song, đồng dạng</strong> của một hình chóp cụt đều; <strong>không</strong> áp cho hai đáy tùy ý cùng có diện tích \(S,S'\).</p></div>

    **Nguồn gốc công thức:** Cắt chóp đều lớn bằng mặt song song đáy; gọi \(k=\sqrt{S'/S}\in(0,1)\) là tỉ số đồng dạng độ dài, \(H\) là chiều cao chóp lớn. Chóp nhỏ cao \(kH\), chóp cụt cao \(h=(1-k)H\). Trừ thể tích chóp nhỏ khỏi chóp lớn:
    \[
    V=\frac{S H-S' kH}{3}
     =\frac{hS(1-k^3)}{3(1-k)}
     =\frac h3(S+\sqrt{SS'}+S').
    \]
    Với số liệu \(S=36,S'=9,h=4\), \(V=84\), không phải \((36+9)h/2=90\). Khi đổi đơn vị, nhớ \(S\) theo \(\text{cm}^2\) và \(h\) theo cm thì \(V\) theo \(\text{cm}^3\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B27_FRUSTUM_SIMILARITY_AUTHORING_20261123.svg" alt="Chóp lớn cao H, chóp nhỏ phía trên cao kH, phần chóp cụt cao h, đáy diện tích S và S phẩy"><figcaption><strong>Tra hình:</strong> đáy lớn \(S\) dưới, đáy nhỏ \(S'\) nằm ở mặt cắt song song. Mũi hình chóp nhỏ có chiều cao \(kH\), phần còn lại cao \(h=H-kH\). Phân biệt diện tích \(k^2\), thể tích \(k^3\), độ dài \(k\).</figcaption></figure>

    **Luyện tập 2 SGK:** Chóp cụt tam giác đều có cạnh đáy lớn \(2a\), đáy nhỏ \(a\), cao \(h\). Diện tích hai đáy \(\sqrt3a^2\) và \(\sqrt3a^2/4\) cho \(V_{\text{cụt}}=7\sqrt3a^2h/12\). Lăng trụ \(AB_1C_1.A'B'C'\) (với \(B_1,C_1\) là trung điểm \(AB,AC\)) có diện tích đáy \(\sqrt3a^2/4\), cao \(h\), nên \(V_{\text{lăng trụ}}=\sqrt3a^2h/4\). Muốn kết luận là lăng trụ phải chứng minh \(AA'\parallel B_1B'\parallel C_1C'\) và hai đáy song song, bằng nhau, không chỉ từ hình vẽ.

    **Vận dụng SGK — sọt đựng đồ:** Đáy vuông cạnh \(30\) cm, miệng vuông cạnh \(60\) cm, cạnh bên \(50\) cm. Độ lệch ngang giữa các đỉnh tương ứng là \((60-30)\sqrt2/2=15\sqrt2\) cm. Do đó \(h=\sqrt{50^2-(15\sqrt2)^2}=\sqrt{2050}\) cm. \(S=3600,S'=900\), \(\sqrt{SS'}=1800\), nên \(V=2100\sqrt{2050}\text{ cm}^3\approx95{,}1\) lít. Không mặc định cạnh bên nghiêng là \(h\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B27_FRUSTUM_BASKET_AUTHORING_20261123.svg" alt="Sọt chóp cụt đều miệng cạnh 60, đáy cạnh 30 và cạnh bên nghiêng 50, chiều cao nối hai tâm đáy"><figcaption><strong>Tra Vận dụng:</strong> hình trên là **miệng rộng** 60 cm, hình dưới **đáy nhỏ** 30 cm, chiều cao là đoạn vuông góc nối tâm hai hình vuông. Cạnh bên 50 cm là cạnh huyền của tam giác cần dựng, không được thay cho \(h\).</figcaption></figure>

    ### 2.3. Khối lăng trụ, khối hộp: diện tích đáy nhân chiều cao thật

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Công thức SGK — Lăng trụ và hình hộp</strong><p>Khối lăng trụ và khối hộp có diện tích đáy \(S\), chiều cao <strong>vuông góc</strong> \(h\), nên <strong>\(V=Sh\)</strong>. Hộp chữ nhật ba kích thước vuông góc \(x,y,z\) có \(V=xyz\). Lăng trụ/hộp <strong>xiên</strong> không được dùng độ dài cạnh bên thay cho \(h\).</p></div>

    **Cách tìm đáy và cao theo Bài 24–26:** Với tam giác đều cạnh \(a\), \(S=a^2\sqrt3/4\); với hình bình hành cạnh \(u,v\) góc kẹp \(\theta\), \(S=uv\sin\theta\). Chiều cao của khối là khoảng cách **hai mặt đáy song song**, có thể tìm bằng hình chiếu vuông góc. Góc cạnh bên–mặt đáy \(\alpha\) cho \(h=\ell\sin\alpha\), với \(\ell\) là độ dài cạnh bên xiên. Không dùng \(\ell\cos\alpha\) trong tình huống này.

    **Ví dụ 2 SGK — mặt bên vuông góc đáy:** Trong lăng trụ đáy tam giác đều cạnh \(a\), mặt \((ACC'A')\perp(ABC)\), tam giác \(A'AC\) cân tại \(A'\) và \(AA'=A'C=b\) (\(a<2b\)), lấy \(H\) trung điểm \(AC\). \(A'H\perp AC\), và \(A'H\subset(ACC'A')\), nên định lí hai mặt vuông góc cho \(A'H\perp(ABC)\). Thể tích \(V=\frac{a^2\sqrt3}{4}\sqrt{b^2-a^2/4}=\frac{a^2\sqrt{3(4b^2-a^2)}}{8}\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B27_PRISM_INCLINED_HEIGHT_AUTHORING_20261123.svg" alt="Chiều cao A phẩy H hạ từ đỉnh A phẩy vuông góc đáy, dựa trên mặt ACC phẩy A phẩy vuông góc đáy"><figcaption><strong>Tra Hình 7.95:</strong> \(A'H\perp AC\) trong mặt bên vuông góc đáy, nên \(A'H\perp\) đáy. Cạnh bên \(AA'=b\) **không phải chiều cao**. Điều kiện \(a<2b\) bảo đảm tam giác cân tồn tại với chiều cao dương.</figcaption></figure>

    **Ví dụ 3 SGK — hộp xiên:** Hình hộp có \(AB=8\), \(AD=5\), \(\angle BAD=30^\circ\), \(AA'=6\) cm và góc \(AA'\) với đáy \(45^\circ\). \(S_{\text{đáy}}=8\cdot5\sin30^\circ=20\text{ cm}^2\), \(h=6\sin45^\circ=3\sqrt2\) cm, nên \(V=60\sqrt2\text{ cm}^3\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B27_PARALLELEPIPED_OBLIQUE_AUTHORING_20261123.svg" alt="Hộp xiên đáy góc 30 độ và cạnh bên tạo góc 45 độ với đáy, chiều cao vuông góc A phẩy H"><figcaption><strong>Tra Hình 7.97:</strong> đáy hình bình hành có góc \(BAD=30^\circ\) nên dùng **sin30°** để tính diện tích. Cạnh bên \(AA'\) tạo góc \(45^\circ\) với mặt, nên đường cao \(A'H=AA'\sin45^\circ\). Hai phép dùng sin giải quyết **hai bước khác nhau**.</figcaption></figure>

    | Loại khối | Thể tích | Cần tìm trước |
    | :-- | :-- | :-- |
    | Chóp hoặc tứ diện | \(Sh/3\) | Đáy và đường cao đỉnh–mặt |
    | Chóp cụt đều | \(h(S+S'+\sqrt{SS'})/3\) | Hai đáy đồng dạng song song và đường cao |
    | Lăng trụ, hộp | \(Sh\) | Diện tích đáy và khoảng cách hai đáy |
    | Hộp chữ nhật | \(xyz\) | Ba kích thước vuông góc |

    **Đơn vị và mô hình thực tế:** Nếu \(S\) tính theo \(\text{cm}^2\), \(h\) theo cm thì \(V\) theo \(\text{cm}^3\). \(1\text{ dm}^3=1\) lít, \(1000\text{ cm}^3=1\) lít, \(1\text{ m}^3=1000\) lít. Khi đề cho kích thước **ngoài** của bình, không được tự coi đó là dung tích bên trong nếu có độ dày thành.

=== "Ví dụ"

    ### 3.1. HĐ1 SGK — Công suất điều hòa từ thể tích phòng

    **Đề bài.** Phòng hình hộp chữ nhật dài \(5\) m, rộng \(4\) m, cao \(3\) m. Trong mô hình đề bài, mỗi \(1\text{ m}^3\) cần công suất \(200\) BTU. Tính công suất dự kiến.

    **Phân tích:** Muốn tính theo BTU cho một **mét khối**, phải tính **thể tích phòng** trước, không dùng diện tích sàn \(5\cdot4\) m².

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.1"><p><strong>Lời giải.</strong> Thể tích phòng \(V=5\cdot4\cdot3=60\text{ m}^3\). Theo hệ số trong đề, công suất \(P=60\cdot200=12\,000\) BTU.</p></div>

    **Kiểm lại:** Phép tính đúng **mô hình của SGK**; không coi 200 BTU/m³ là định mức tư vấn máy điều hòa thật vì còn nhiều điều kiện thực tế.

    ### 3.2. Chóp và lăng trụ cùng đáy, cùng cao

    **Đề bài.** Hai khối có diện tích đáy \(24\text{ cm}^2\) và chiều cao \(9\text{ cm}\), một khối lăng trụ, một khối chóp. Tính mỗi thể tích và tỉ số.

    **Phân tích:** Cần **nhận dạng khối** trước: lăng trụ giữ diện tích lát cắt, chóp thu dần về đỉnh; cùng \(S,h\) không có nghĩa cùng thể tích.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVII-B27-01_R00.svg" alt="So sánh chóp và lăng trụ có cùng diện tích đáy và chiều cao nhưng thể tích khác hệ số một phần ba"><figcaption><strong>Đọc trước khi tính:</strong> lăng trụ bên trái có \(V=Sh\), chóp ở giữa có \(V=Sh/3\). Chiều cao phải đo vuông góc mặt đáy ở cả hai hình, không lấy nét xiên.</figcaption></figure>

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.2"><p><strong>Lời giải.</strong> Lăng trụ: \(V_1=24\cdot9=216\text{ cm}^3\). Chóp: \(V_2=\frac13\cdot24\cdot9=72\text{ cm}^3\). Tỉ số \(V_2/V_1=1/3\).</p></div>

    **Kiểm lại:** Đơn vị **cm³** vì \(S\) cm² và \(h\) cm. Chóp nhỏ hơn lăng trụ đúng hệ số 3, không phải chỉ “nhỏ hơn vì hình trông nhỏ”.

    ### 3.3. Ví dụ 1 SGK — Tứ diện có ba cạnh vuông góc đôi một

    **Đề bài.** Tứ diện \(OABC\) có \(OA=a\), \(OB=b\), \(OC=c\) đôi một vuông góc (\(a,b,c>0\)). Tính thể tích.

    **Phân tích:** Chọn mặt \(OBC\) làm đáy có \(OB\perp OC\); chứng minh \(OA\perp(OBC)\) nhờ **hai đường cắt nhau \(OB,OC\)**, không chỉ một.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B27_TETRAHEDRON_ORTHOGONAL_AUTHORING_20261123.svg" alt="Tứ diện vuông OABC có đáy OBC vuông tại O và chiều cao OA vuông góc mặt OBC"><figcaption><strong>Đọc hình:</strong> tam giác đáy \(OBC\) có diện tích \(bc/2\); cạnh đỏ \(OA\) vuông góc cả \(OB,OC\), nên chính là chiều cao từ \(A\) tới mặt \(OBC\). Tính diện tích đáy trước khi lấy một phần ba.</figcaption></figure>

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.3"><p><strong>Lời giải.</strong> \(S_{OBC}=\frac12OB\cdot OC=bc/2\). Vì \(OA\perp OB\), \(OA\perp OC\) và hai đường \(OB,OC\) cắt nhau tại \(O\) trong \((OBC)\), suy \(OA\perp(OBC)\). Vậy \(V=\frac13S_{OBC}\cdot OA=\frac13\cdot\frac{bc}{2}\cdot a=\frac{abc}{6}\).</p></div>

    **Kiểm lại:** Nếu \(a=3,b=4,c=5\), \(V=3\cdot4\cdot5/6=10\) đơn vị³. Không quên hệ số **1/2 diện tích tam giác** lẫn **1/3 thể tích chóp**.

    ### 3.4. Luyện tập 1 SGK — Chóp tứ giác đều cho cạnh bên

    **Đề bài.** Chóp tứ giác đều \(S.ABCD\) có đáy vuông cạnh \(a>0\), cạnh bên \(b>a/\sqrt2\). Tính thể tích. Áp dụng \(a=6\) cm, \(b=5\) cm.

    **Phân tích:** Chân đường cao là **tâm \(O\) đáy vuông**, \(OA=a/\sqrt2\). Phải tính \(SO\) bằng Pythagore rồi mới dùng công thức chóp \(Sh/3\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.4"><p><strong>Lời giải.</strong> Vì \(O\) là tâm hình vuông cạnh \(a\), \(OA=a\sqrt2/2=a/\sqrt2\). Tam giác \(SOA\) vuông tại \(O\) có \(SA=b\), nên \(SO=\sqrt{b^2-a^2/2}\). Thể tích \(V=\frac13a^2\sqrt{b^2-a^2/2}\). Với \(a=6,b=5\), \(SO=\sqrt{25-18}=\sqrt7\) cm, \(V=36\sqrt7/3=12\sqrt7\text{ cm}^3\).</p></div>

    **Kiểm lại:** \(b>a/\sqrt2\) bảo đảm chiều cao dương. Không lấy \(b\) là chiều cao; mặt đáy là **hình vuông**, diện tích \(a^2\).

    ### 3.5. Chóp cụt đều không dùng trung bình diện tích hai đáy

    **Đề bài.** Chóp cụt đều có \(S=36\text{ cm}^2\), \(S'=9\text{ cm}^2\), chiều cao \(h=4\) cm. Tính thể tích, đối chiếu cách lấy trung bình hai diện tích đáy nhân cao.

    **Phân tích:** Vì hai đáy đồng dạng song song của một chóp cụt đều, chọn công thức \(h(S+S'+\sqrt{SS'})/3\), không dùng công thức diện tích **hình thang phẳng**.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B27_FRUSTUM_SIMILARITY_AUTHORING_20261123.svg" alt="Chóp cụt đều là hiệu chóp lớn và chóp nhỏ đồng dạng nên công thức có căn tích diện tích hai đáy"><figcaption><strong>Đọc trước lời giải:</strong> chóp nhỏ và chóp lớn có các đáy đồng dạng, tỉ số diện tích \(S'/S\) bằng bình phương tỉ số độ dài. Từ đó chóp cụt có hạng \(\sqrt{SS'}\), không chỉ \(S+S'\).</figcaption></figure>

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.5"><p><strong>Lời giải.</strong> \(\sqrt{SS'}=\sqrt{36\cdot9}=18\). Vì vậy \(V=\frac43(36+9+18)=84\text{ cm}^3\). Nếu lấy trung bình diện tích đáy, được \(4(36+9)/2=90\text{ cm}^3\), không đúng.</p></div>

    **Kiểm lại:** \(V\) nằm giữa thể tích chóp \(\frac13Sh=48\) và lăng trụ \(Sh=144\) với cùng \(S,h\), hợp lí. Chênh \(90-84=6\text{ cm}^3\) minh họa lỗi phương pháp.

    ### 3.6. Luyện tập 2 SGK — Chóp cụt tam giác đều và lăng trụ bên trong

    **Đề bài.** Chóp cụt đều \(ABC.A'B'C'\) có cạnh đáy lớn \(2a\), đáy nhỏ \(a\), đường cao \(h\) (\(a,h>0\)). a) Tính \(V_{\text{cụt}}\). b) Gọi \(B_1,C_1\) là trung điểm \(AB,AC\); chứng minh \(AB_1C_1.A'B'C'\) là lăng trụ và tính thể tích.

    **Phân tích:** a) Dùng diện tích tam giác đều của hai đáy. b) Vì chóp cụt xuất phát từ chóp lớn bằng phép vị tự tâm đỉnh, các đoạn nối **đỉnh tương ứng** từ tam giác \(AB_1C_1\) đến \(A'B'C'\) song song, bằng nhau. Không chỉ nhìn ảnh mà kết luận là lăng trụ.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.6"><p><strong>Lời giải.</strong> a) Hai diện tích \(S=\sqrt3a^2\), \(S'=\sqrt3a^2/4\), \(\sqrt{SS'}=\sqrt3a^2/2\). Do đó \(V_{\text{cụt}}=\frac h3\bigl(\sqrt3a^2+\sqrt3a^2/4+\sqrt3a^2/2\bigr)=7\sqrt3a^2h/12\). b) Gọi \(T\) là đỉnh chóp lớn, \(A'=(T+A)/2\), \(B'=(T+B)/2\), \(C'=(T+C)/2\) theo quan hệ chia đôi trên các cạnh bên (hiểu các điểm như vectơ vị trí). Vì \(B_1=(A+B)/2\), \(C_1=(A+C)/2\), nên \(\overrightarrow{AA'}=\overrightarrow{B_1B'}=\overrightarrow{C_1C'}=(\overrightarrow{AT})/2\). Hai tam giác \(AB_1C_1\) và \(A'B'C'\) bằng nhau và song song; do đó đó là lăng trụ cao \(h\) với đáy đều cạnh \(a\), thể tích \(V_{\text{lăng trụ}}=a^2\sqrt3h/4\).</p></div>

    **Kiểm lại:** \(V_{\text{cụt}}/V_{\text{lăng trụ}}=(7/12)/(1/4)=7/3\). Đáy \(AB_1C_1\) có cạnh **\(a\)**, không phải \(2a\). Các đoạn nối đỉnh tương ứng song song **và bằng nhau** mới đủ nhận dạng lăng trụ.

    ### 3.7. Ví dụ 2 SGK — Lăng trụ xiên có mặt bên vuông góc đáy

    **Đề bài.** Lăng trụ \(ABC.A'B'C'\) có đáy tam giác đều cạnh \(a>0\), mặt \((ACC'A')\perp(ABC)\), tam giác \(A'AC\) cân tại \(A'\) với \(AA'=A'C=b\) và \(a<2b\). Tính thể tích.

    **Phân tích:** Không có giả thiết lăng trụ đứng; phải **dựng đường cao**. Tam giác cân có đường cao \(A'H\) tới trung điểm \(H\) của \(AC\); tính chất hai mặt vuông góc sẽ biến \(A'H\) thành đường vuông góc mặt đáy.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B27_PRISM_INCLINED_HEIGHT_AUTHORING_20261123.svg" alt="Lăng trụ xiên có mặt ACC phẩy A phẩy vuông góc đáy, đường cao A phẩy H tới trung điểm H của AC"><figcaption><strong>Đọc hình trước lời giải:</strong> mặt bên \((ACC'A')\) được cho vuông góc đáy, \(A'H\perp AC\) từ tam giác cân; vì \(H\in AC\), tính chất hai mặt vuông góc cho \(A'H\perp(ABC)\). Đây là chiều cao, **không** phải cạnh \(AA'=b\).</figcaption></figure>

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.7"><p><strong>Lời giải.</strong> \(H\) là trung điểm \(AC\), \(AH=a/2\). Tam giác \(A'AC\) cân tại \(A'\), nên \(A'H\perp AC\). Vì \(A'H\subset(ACC'A')\) và \((ACC'A')\perp(ABC)\) theo giao tuyến \(AC\), suy \(A'H\perp(ABC)\). Từ tam giác vuông \(A'HA\), \(A'H=\sqrt{b^2-a^2/4}\). Diện tích đáy \(S_{ABC}=a^2\sqrt3/4\). Do đó \(V=\frac{a^2\sqrt3}{4}\sqrt{b^2-a^2/4}=\frac{a^2\sqrt{3(4b^2-a^2)}}8\).</p></div>

    **Kiểm lại:** Điều kiện \(a<2b\) tương đương \(b>a/2\), bảo đảm chiều cao thực và dương. Không gọi **lăng trụ đứng** khi SGK chỉ cho **mặt bên vuông góc đáy**.

    ### 3.8. Ví dụ 3 SGK — Khối hộp xiên có hai góc khác vai trò

    **Đề bài.** Hình hộp \(ABCD.A'B'C'D'\) có \(AB=8\) cm, \(AD=5\) cm, \(AA'=6\) cm, \(\angle BAD=30^\circ\), góc cạnh \(AA'\) với đáy \((ABCD)\) là \(45^\circ\). Tính thể tích.

    **Phân tích:** Đáy **hình bình hành** nên \(S=AB\cdot AD\sin30^\circ\). Cạnh \(AA'\) **xiên với đáy** nên đường cao là \(AA'\sin45^\circ\). Không lấy \(8\cdot5\cdot6\) như hình hộp chữ nhật.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B27_PARALLELEPIPED_OBLIQUE_AUTHORING_20261123.svg" alt="Hộp xiên có góc BAD 30 độ ở đáy, cạnh AA phẩy tạo góc 45 độ với đáy, chiều cao A phẩy H"><figcaption><strong>Đọc trước lời giải:</strong> \(30^\circ\) ở **đáy** dùng để tìm diện tích hình bình hành; \(45^\circ\) giữa **cạnh bên với đáy** dùng để tìm hình chiếu vuông góc \(A'H\). Phải làm hai phép chiếu khác nhau.</figcaption></figure>

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.8"><p><strong>Lời giải.</strong> \(S_{ABCD}=AB\cdot AD\sin30^\circ=8\cdot5\cdot(1/2)=20\text{ cm}^2\). Gọi \(H\) là chân hình chiếu \(A'\) lên đáy, \(AA'\) tạo góc \(45^\circ\) với đáy nên \(A'H=AA'\sin45^\circ=6\cdot\sqrt2/2=3\sqrt2\) cm. Vậy \(V=S_{ABCD}\cdot A'H=20\cdot3\sqrt2=60\sqrt2\text{ cm}^3\).</p></div>

    **Kiểm lại:** \(60\sqrt2\approx84{,}85\text{ cm}^3\), nhỏ hơn \(20\cdot6=120\text{ cm}^3\) vì cạnh bên nghiêng. Không dùng \(30^\circ\) để tính cao hoặc \(45^\circ\) để tính diện tích đáy.

    ### 3.9. Vận dụng SGK — Sọt vuông cụt đều có cạnh bên 50 cm

    **Đề bài.** Một sọt có dạng chóp cụt đều, đáy vuông cạnh \(30\) cm, miệng vuông cạnh \(60\) cm, cạnh bên dài \(50\) cm. Tính gần đúng thể tích chứa hình học theo lít.

    **Phân tích:** Chưa có \(h\); lấy **hiệu bán kính tâm–đỉnh** hai hình vuông để tìm độ lệch ngang \((60-30)/\sqrt2=15\sqrt2\) cm, dùng cạnh bên 50 làm cạnh huyền, rồi mới áp công thức chóp cụt.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B27_FRUSTUM_BASKET_AUTHORING_20261123.svg" alt="Sọt chóp cụt đều có hai đáy vuông cạnh 30 và 60, cạnh xiên 50 và đường cao h nối tâm hai đáy"><figcaption><strong>Đọc hình:</strong> miệng **60 cm** lớn hơn đáy **30 cm**, nên chênh tâm–đỉnh là \(30\sqrt2-15\sqrt2=15\sqrt2\) cm. Hạ đường vuông góc tâm hai đáy để lấy \(h\), không thay trực tiếp 50 cm vào công thức.</figcaption></figure>

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.9"><p><strong>Lời giải.</strong> Độ lệch ngang hai đỉnh tương ứng \(d=(60-30)/\sqrt2=15\sqrt2\) cm. Chiều cao \(h=\sqrt{50^2-d^2}=\sqrt{2500-450}=\sqrt{2050}\) cm. Diện tích đáy lớn \(S=60^2=3600\text{ cm}^2\), đáy nhỏ \(S'=30^2=900\text{ cm}^2\). \(\sqrt{SS'}=1800\text{ cm}^2\). Vậy \(V=\frac{\sqrt{2050}}3(3600+900+1800)=2100\sqrt{2050}\text{ cm}^3\approx95\,082\text{ cm}^3\approx95{,}1\) lít.</p></div>

    **Kiểm lại:** \(h\approx45{,}28\text{ cm}<50\) cm (cạnh huyền). Dung tích là **mô hình rỗng không độ dày thành**; nếu sọt có lớp lót/thành dày, lượng chứa thực tế nhỏ hơn.

    ### 3.10. Bài 7.29 SGK — Lăng trụ đứng với góc đáy 150°

    **Đề bài.** Lăng trụ đứng \(ABC.A'B'C'\) có \(AA'=5\) cm, \(AB=6\) cm, \(BC=2\) cm, \(\angle ABC=150^\circ\). Tính thể tích.

    **Phân tích:** Đáy là tam giác **không vuông** nên diện tích \(S=\frac12AB\cdot BC\sin150^\circ\), không lấy \(6\cdot2/2\) nếu không xét góc. Lăng trụ đứng nên cạnh bên \(AA'\) là chiều cao.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.10"><p><strong>Lời giải.</strong> \(S_{ABC}=\frac12AB\cdot BC\sin150^\circ=\frac12\cdot6\cdot2\cdot\frac12=3\text{ cm}^2\). Vì lăng trụ đứng, \(h=AA'=5\) cm. Vậy \(V=S_{ABC}\cdot h=3\cdot5=15\text{ cm}^3\).</p></div>

    **Kiểm lại:** \(\sin150^\circ=\sin30^\circ=1/2\), diện tích đáy phải bằng \(3\), không bằng \(6\).

    ### 3.11. Bài 7.28 SGK — Thể tích tứ diện đều cạnh a

    **Đề bài.** Khối tứ diện đều có tất cả cạnh bằng \(a>0\). Tính thể tích theo \(a\) bằng việc tìm chiều cao của chóp tam giác đều.

    **Phân tích:** Đáy là tam giác đều cạnh \(a\), chân từ đỉnh còn lại tại **tâm đáy**, cách mỗi đỉnh đáy \(a/\sqrt3\); cạnh bên cũng bằng \(a\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.11"><p><strong>Lời giải.</strong> Diện tích tam giác đều đáy \(S=a^2\sqrt3/4\). Tâm đáy \(O\) cách đỉnh đáy \(A\) một đoạn \(AO=a/\sqrt3\). Với đỉnh \(S\) của tứ diện, tam giác \(SAO\) vuông tại \(O\) có \(SA=a\), nên \(SO=\sqrt{a^2-a^2/3}=a\sqrt{2/3}\). Suy \(V=\frac13\cdot(a^2\sqrt3/4)\cdot a\sqrt{2/3}=a^3\sqrt2/12\).</p></div>

    **Kiểm lại:** Lũy thừa \(a^3\) đúng đơn vị thể tích, hệ số \(\sqrt2/12>0\). Không nhầm chiều cao tứ diện đều với chính cạnh \(a\).

    ### 3.12. Bài 7.30 SGK — Cùng đáy vuông nhưng góc cạnh bên và góc mặt bên khác nhau

    **Đề bài.** Chóp tứ giác đều \(S.ABCD\) có cạnh đáy \(6\) cm. a) Cạnh bên tạo góc \(60^\circ\) với đáy. b) Mặt bên tạo góc \(45^\circ\) với đáy. Tính thể tích mỗi trường hợp.

    **Phân tích:** Hai góc khác nhau nên phải dựng **hai tam giác vuông khác nhau**. a) Dùng \(O\) tâm đáy và \(OA=3\sqrt2\) để tính \(SO=OA\tan60^\circ\). b) Gọi \(M\) trung điểm cạnh đáy \(AB\), \(OM=3\), dựng tiết diện \((SOM)\) vuông góc \(AB\); góc mặt bên–đáy là \(\angle SMO=45^\circ\), nên \(SO=OM\tan45^\circ\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.12"><p><strong>Lời giải.</strong> Cả hai trường hợp \(S_{\text{đáy}}=6^2=36\text{ cm}^2\), nên \(V=36\,SO/3=12\,SO\). a) \(OA=6\sqrt2/2=3\sqrt2\) cm. Vì cạnh \(SA\) tạo góc \(60^\circ\) với đáy, \(\angle SAO=60^\circ\); \(SO=OA\tan60^\circ=3\sqrt2\cdot\sqrt3=3\sqrt6\). Suy \(V_a=36\sqrt6\text{ cm}^3\). b) Với \(M\) trung điểm \(AB\), \(OM=3\) cm, \(SM\perp AB\) trong mặt bên do tam giác \(SAB\) cân, còn \(OM\perp AB\) trong đáy, nên góc mặt bên–đáy là \(\angle SMO=45^\circ\). \(SO=OM\tan45^\circ=3\) cm; \(V_b=12\cdot3=36\text{ cm}^3\).</p></div>

    **Kiểm lại:** a) \(V_a=36\sqrt6\) và b) \(V_b=36\) khác nhau vì **góc cạnh bên–đáy** không phải **góc mặt bên–đáy**. Cả hai chiều cao đều dương và vuông góc đáy.

=== "Lỗi thường gặp"

    ### 4.1. Nhầm vật thể chứa không gian với mặt bao ngoài

    **Dấu hiệu:** Tính “thể tích” bằng cách cộng diện tích các mặt bao quanh rồi ghi đơn vị \(\text{cm}^2\).

    **Vì sao sai:** Thể tích đo **không gian ba chiều** của khối, không phải diện tích toàn phần của các mặt. Đại lượng và đơn vị khác nhau.

    **Cách sửa:** Nêu rõ “khối chóp / khối hộp / khối lăng trụ / khối chóp cụt”, chọn công thức thể tích và ghi đơn vị \(\text{cm}^3\), \(\text{m}^3\) hoặc lít sau đổi.

    ### 4.2. Dùng V = Sh cho mọi khối, quên hệ số một phần ba

    **Dấu hiệu:** Chóp cùng diện tích đáy \(24\text{ cm}^2\), cao \(9\) cm mà tính \(216\text{ cm}^3\).

    **Vì sao sai:** \(V=Sh\) dùng cho **lăng trụ/hộp**; chóp thu dần các thiết diện về đỉnh nên chỉ bằng **\(Sh/3\)**.

    **Cách sửa:** Phân loại trước: lăng trụ \(216\text{ cm}^3\), chóp \(\frac13\cdot216=72\text{ cm}^3\).

    ### 4.3. Quên 1/2 diện tích đáy tam giác hoặc dùng cạnh bên làm cao

    **Dấu hiệu:** Tứ diện có \(OA=a,OB=b,OC=c\) vuông góc đôi một mà ghi \(V=abc/3\).

    **Vì sao sai:** Diện tích đáy tam giác vuông \(OBC\) phải là \(bc/2\), còn chiều cao vuông góc mặt \(OBC\) mới là \(OA=a\).

    **Cách sửa:** Viết rõ \(S_{OBC}=bc/2\), \(OA\perp(OBC)\) do vuông góc **hai đường cắt nhau**, rồi \(V=(bc/2)\cdot a/3=abc/6\).

    ### 4.4. Dùng trung bình cộng diện tích hai đáy cho chóp cụt đều

    **Dấu hiệu:** \(S=36,S'=9,h=4\) mà tính \(V=h(S+S')/2=90\).

    **Vì sao sai:** Đây là cách ngoại suy sai từ **hình thang phẳng**; diện tích lát cắt của chóp cụt biến đổi theo **bình phương tỉ số độ dài**.

    **Cách sửa:** Chỉ với chóp cụt đều đủ điều kiện, dùng \(V=h(S+S'+\sqrt{SS'})/3=84\), có hạng \(\sqrt{SS'}=18\).

    ### 4.5. Bỏ điều kiện đồng dạng và song song khi dùng công thức chóp cụt

    **Dấu hiệu:** Hai mặt bất kì có diện tích \(S,S'\) và “khoảng cách \(h\)” là áp ngay \(h(S+S'+\sqrt{SS'})/3\).

    **Vì sao sai:** Công thức được suy từ **hai chóp đồng dạng** do mặt cắt song song đáy; không áp dụng cho hai mặt tùy ý hoặc một khối không phải chóp cụt thích hợp.

    **Cách sửa:** Kiểm khối là **chóp cụt đều**, hai đáy đồng dạng song song, đường cao vuông góc cả hai đáy trước khi dùng công thức.

    ### 4.6. Coi cạnh bên xiên là chiều cao lăng trụ hoặc hình hộp

    **Dấu hiệu:** Lăng trụ SGK có \(AA'=b\) mà thay luôn \(h=b\) dù chỉ biết mặt \((ACC'A')\perp(ABC)\).

    **Vì sao sai:** Điều kiện **một mặt bên vuông góc đáy** chưa có nghĩa **mọi cạnh bên vuông góc đáy**; cần dựng \(A'H\perp AC\) trong mặt ấy để có \(A'H\perp(ABC)\).

    **Cách sửa:** Trong Ví dụ 2 SGK, \(H\) trung điểm \(AC\) và \(A'H=\sqrt{b^2-a^2/4}\) mới là chiều cao. Với hình hộp xiên Ví dụ 3, \(h=AA'\sin45^\circ\), không phải \(AA'\).

    ### 4.7. Đổi nhầm góc khi tính diện tích đáy và đường cao

    **Dấu hiệu:** Với hình hộp xiên SGK, dùng \(30^\circ\) tính chiều cao hoặc lấy \(45^\circ\) làm góc kẹp của hai cạnh đáy.

    **Vì sao sai:** \(\angle BAD=30^\circ\) là góc **trong mặt đáy** để tìm diện tích hình bình hành; góc \(AA'\) với đáy \(45^\circ\) mới dùng để chiếu độ dài cạnh bên lên phương pháp tuyến.

    **Cách sửa:** Tách hai bước: \(S_{\text{đáy}}=8\cdot5\sin30^\circ=20\text{ cm}^2\), \(h=6\sin45^\circ=3\sqrt2\) cm, \(V=60\sqrt2\text{ cm}^3\).

    ### 4.8. Lấy cạnh bên của sọt chóp cụt làm cao hoặc đổi sai lít

    **Dấu hiệu:** Sọt có cạnh bên \(50\) cm, đáy vuông \(30\) cm, miệng vuông \(60\) cm, em tính \(h=50\) cm và dùng kết quả \(\text{cm}^3\) như lít.

    **Vì sao sai:** Đoạn 50 cm là **cạnh xiên**; hai đỉnh tương ứng lệch ngang \(15\sqrt2\) cm. Ngoài ra \(1000\text{ cm}^3=1\) lít, không phải \(1\text{ cm}^3=1\) lít.

    **Cách sửa:** Dùng \(h=\sqrt{50^2-(15\sqrt2)^2}=\sqrt{2050}\) cm, rồi \(V=2100\sqrt{2050}\text{ cm}^3\approx95{,}1\) lít theo mô hình, chưa xét độ dày thành sọt.

    **Học tiếp:** [Core và Luyện tập Bài 27](luyen-tap.md) · [Tự luận Chương VII](../../../thu-vien/tu-luan-g11-chuong-vii.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">Nguồn S1: SGK Toán 11 Kết nối tri thức với cuộc sống, tập hai, Bài 27 “Thể tích”, trang in **61–63**, hoạt động HĐ1 về phòng 4×5×3 m và 200 BTU/m³, khối đa diện, các công thức thể tích, SGK Ví dụ 1–3, Luyện tập 1–2, Vận dụng sọt chóp cụt đều và Bài 7.28–7.32. SGK trình bày liền mạch, không đánh số ba mục lớn: các nhóm 1.1–1.3/2.1–2.3 trong học liệu là phân nhóm sư phạm, không giả làm tiêu đề SGK. Đã đối chiếu nội dung văn bản S1 PDF trực tiếp; chưa xác minh ảnh trang in và offset chỉ số trang PDF vì screenshot nguồn bị cache miss, giữ SOURCE_VISUAL_OFFSET_HOLD. Giữ nguyên canonical FIG-G11-CHVII-B27-01_R00.svg, thêm năm hình giảng giải chuyên biệt. Không thay Core/Luyện tập, Tự kiểm tra cuối chương, item bank/RD1/rubric, Mastery hay runtime chung.</p>


## === END G11-CHVII-B27 ===


## DANH MỤC HÌNH SVG ĐƯỢC DÙNG TRONG TỪNG BÀI

### B22 | HEAD 5b40c5c8d03ad4e6fe02fbca2df4729bec51be9a

- `docs/assets/images/thpt/FIG-G11-CHVII-B22-01_R00.svg`
- `docs/assets/images/thpt/G11_B22_SKEW_PERP_RECTANGULAR_BOX_AUTHORING_20261123.svg`
- `docs/assets/images/thpt/G11_B22_KHEOPS_ANGLE_AUTHORING_20261123.svg`

### B23 | HEAD fa5b96f9ae0eab840065033d4c0ce9e5d0059994

- `docs/assets/images/thpt/FIG-G11-CHVII-B23-01_R00.svg`
- `docs/assets/images/thpt/G11_B23_PERPENDICULAR_BISECTOR_PLANE_AUTHORING_20261123.svg`
- `docs/assets/images/thpt/G11_B23_PARALLEL_PLANES_NORMAL_AUTHORING_20261123.svg`

### B24 | HEAD f2a35940864abd6a8e76da5d5b6bfded89f44b6f

- `docs/assets/images/thpt/FIG-G11-CHVII-B24-01_R00.svg`
- `docs/assets/images/thpt/G11_B24_THREE_PERPENDICULAR_LINES_AUTHORING_20261123.svg`
- `docs/assets/images/thpt/G11_B24_SABC_PROJECTION_EXAMPLE_AUTHORING_20261123.svg`

### B25 | HEAD 4b0e5f754e62d5a1178500f0ad53fa592cca9370

- `docs/assets/images/thpt/FIG-G11-CHVII-B25-01_R00.svg`
- `docs/assets/images/thpt/G11_B25_PERPENDICULAR_PLANES_AUTHORING_20261123.svg`
- `docs/assets/images/thpt/G11_B25_DIHEDRAL_CHAIR_AUTHORING_20261123.svg`
- `docs/assets/images/thpt/G11_B25_RHOMBUS_PYRAMID_DIHEDRAL_AUTHORING_20261123.svg`
- `docs/assets/images/thpt/G11_B25_SPECIAL_PRISMS_AUTHORING_20261123.svg`
- `docs/assets/images/thpt/G11_B25_CUBE_EQUILATERAL_DIAGONALS_AUTHORING_20261123.svg`
- `docs/assets/images/thpt/G11_B25_REGULAR_PYRAMID_FRUSTUM_AUTHORING_20261123.svg`

### B26 | HEAD 771e01b2896d400b14ecdfaff44e8f76f54d4e13

- `docs/assets/images/thpt/FIG-G11-CHVII-B26-01_R00.svg`
- `docs/assets/images/thpt/G10_B20_POINT_LINE_DISTANCE_R02.svg`
- `docs/assets/images/thpt/G11_B26_PYRAMID_HEIGHT_AUTHORING_20261123.svg`
- `docs/assets/images/thpt/G11_B26_PARALLEL_DISTANCES_AUTHORING_20261123.svg`
- `docs/assets/images/thpt/G11_B26_RHOMBUS_PRISM_DISTANCES_AUTHORING_20261123.svg`
- `docs/assets/images/thpt/G11_B26_SLOPE_CLEARANCE_AUTHORING_20261123.svg`
- `docs/assets/images/thpt/G11_B26_SKEW_COMMON_PERPENDICULAR_AUTHORING_20261123.svg`
- `docs/assets/images/thpt/G11_B26_SABC_COMMON_PERPENDICULAR_AUTHORING_20261123.svg`
- `docs/assets/images/thpt/G11_B26_RIGHT_TRIANGULAR_PRISM_AUTHORING_20261123.svg`
- `docs/assets/images/thpt/G11_B26_SQUARE_PYRAMID_SKEW_DISTANCE_AUTHORING_20261123.svg`

### B27 | HEAD 0a6aad2abda914b4afb2135d0e79f09ca0572045

- `docs/assets/images/thpt/FIG-G11-CHVII-B27-01_R00.svg`
- `docs/assets/images/thpt/G11_B27_TETRAHEDRON_ORTHOGONAL_AUTHORING_20261123.svg`
- `docs/assets/images/thpt/G11_B27_FRUSTUM_SIMILARITY_AUTHORING_20261123.svg`
- `docs/assets/images/thpt/G11_B27_PRISM_INCLINED_HEIGHT_AUTHORING_20261123.svg`
- `docs/assets/images/thpt/G11_B27_PARALLELEPIPED_OBLIQUE_AUTHORING_20261123.svg`
- `docs/assets/images/thpt/G11_B27_FRUSTUM_BASKET_AUTHORING_20261123.svg`

## PHỤ LỤC SVG XML

Phụ lục sẽ được chèn dưới đây với nguồn SVG đúng HEAD mỗi PR. Nếu phụ lục thiếu, reviewer đánh dấu SVG_SOURCE_HOLD chứ không tự kết luận đúng hình.

## SVG PACKET PART 1 — B22–B24

### B22 SVG `FIG-G11-CHVII-B22-01_R00.svg`

ASSET_REF|`docs/assets/images/thpt/FIG-G11-CHVII-B22-01_R00.svg`

ASSET_BLOB|`5f2d23adb6f947064312d04d67ce5a5bb2d1ff48`

ASSET_SOURCE_PR_HEAD|`5b40c5c8d03ad4e6fe02fbca2df4729bec51be9a`

~~~xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 500" role="img" aria-labelledby="title desc" width="900" height="500">
<title id="title">FIG-G11-CHVII-B22-01: Góc hai đường chéo nhau: dời song song</title><desc id="desc">Hai đường a và b không cắt nhau được biểu diễn cùng phương trên các cặp song song; tại O hai phương vuông góc, dù đường thật chéo nhau.</desc>
<rect width="900" height="500" fill="#f8fafc" rx="18"/>
<text x="450" y="42" text-anchor="middle" font-family="Arial,sans-serif" font-size="25" font-weight="700" fill="#0f172a">Góc hai đường chéo nhau: dời song song</text>
<path d="M155 325 L465 325" stroke="#1d4ed8" stroke-width="7" stroke-linecap="round"/><text x="170" y="305" font-size="22" fill="#1d4ed8">a</text><path d="M590 145 L590 390" stroke="#ea580c" stroke-width="7" stroke-linecap="round"/><text x="612" y="181" font-size="22" fill="#9a3412">b</text><path d="M375 150 L375 335 L705 335" stroke="#059669" stroke-width="4" fill="none" stroke-dasharray="10 6"/><text x="338" y="139" font-size="19">b′</text><text x="703" y="356" font-size="19">a′</text><rect x="375" y="312" width="22" height="23" fill="none" stroke="#059669" stroke-width="3"/><circle cx="375" cy="335" r="5" fill="#059669"/><text x="330" y="352" font-size="19">O</text><text x="450" y="414" font-size="19">a′ // a; b′ // b; góc(a,b) = 90°</text>
<text x="450" y="476" text-anchor="middle" font-family="Arial,sans-serif" font-size="15" fill="#475569">Sơ đồ phương và quan hệ; không suy độ dài/góc từ phối cảnh.</text>
</svg>
~~~

### B22 SVG `G11_B22_SKEW_PERP_RECTANGULAR_BOX_AUTHORING_20261123.svg`

ASSET_REF|`docs/assets/images/thpt/G11_B22_SKEW_PERP_RECTANGULAR_BOX_AUTHORING_20261123.svg`

ASSET_BLOB|`95c942955c6a4499378b90260eb37a3116791854`

ASSET_SOURCE_PR_HEAD|`5b40c5c8d03ad4e6fe02fbca2df4729bec51be9a`

~~~xml
<svg xmlns="http://www.w3.org/2000/svg" width="920" height="470" viewBox="0 0 920 470" role="img" aria-labelledby="title desc">
<title id="title">Hai cạnh AB và CC phẩy của hình hộp chữ nhật vuông góc dù chéo nhau</title>
<desc id="desc">Hình hộp chữ nhật ABCD.A phẩy B phẩy C phẩy D phẩy. Cạnh AB màu xanh nằm ở đáy trước; cạnh CC phẩy màu cam đứng ở phía sau; cạnh AA phẩy màu lục song song CC phẩy và vuông góc AB tại A. Suy ra góc giữa AB và CC phẩy bằng góc AB và AA phẩy, bằng 90 độ, dù AB không giao CC phẩy.</desc>
<rect width="920" height="470" rx="18" fill="#fff"/>
<text x="460" y="35" font-family="Arial,sans-serif" font-size="24" font-weight="700" text-anchor="middle" fill="#193954">Vuông góc theo phương không đòi hai đường cắt nhau</text>
<g stroke="#697b8e" stroke-width="3.2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path d="M160 348 L455 348 L580 250 L285 250 Z" />
<path d="M160 142 L455 142 L580 44 L285 44 Z" />
<path d="M160 142 L160 348 M455 142 L455 348 M580 44 L580 250 M285 44 L285 250"/>
</g>
<g stroke-linecap="round" stroke-width="7.5" fill="none">
<path d="M160 348 L455 348" stroke="#2369a1"/>
<path d="M160 348 L160 142" stroke="#228266"/>
<path d="M580 250 L580 44" stroke="#c65b36"/>
</g>
<path d="M180 348 L180 328 L160 328" fill="none" stroke="#2369a1" stroke-width="3.2"/>
<g font-family="Arial,sans-serif" font-size="21" fill="#253a55">
<text x="138" y="370">A</text><text x="463" y="371">B</text><text x="591" y="267">C</text><text x="271" y="278">D</text>
<text x="131" y="136">A′</text><text x="463" y="137">B′</text><text x="593" y="43">C′</text><text x="271" y="43">D′</text>
</g>
<rect x="638" y="93" width="243" height="236" rx="13" fill="#f8fafc" stroke="#d9e1e9"/>
<g font-family="Arial,sans-serif" font-size="18" fill="#27425d">
<text x="661" y="130" font-weight="700">Đọc theo ba bước</text>
<line x1="664" y1="156" x2="700" y2="156" stroke="#2369a1" stroke-width="6" stroke-linecap="round"/>
<text x="711" y="162">AB (đáy trước)</text>
<line x1="664" y1="191" x2="700" y2="191" stroke="#c65b36" stroke-width="6" stroke-linecap="round"/>
<text x="711" y="197">CC′ (phía sau)</text>
<line x1="664" y1="225" x2="700" y2="225" stroke="#228266" stroke-width="6" stroke-linecap="round"/>
<text x="711" y="231">AA′ ∥ CC′</text>
<text x="661" y="272">AB ⟂ AA′ tại A</text>
<text x="661" y="301" font-weight="700">⇒ AB ⟂ CC′</text>
</g>
<text x="460" y="416" font-family="Arial,sans-serif" text-anchor="middle" fill="#475569" font-size="17">Hình hộp chữ nhật: AB và CC′ chéo nhau, nhưng có góc giữa hai phương bằng 90°.</text>
<text x="460" y="443" font-family="Arial,sans-serif" text-anchor="middle" fill="#64748b" font-size="15">Không suy góc từ độ nghiêng phối cảnh; kết luận dựa trên cạnh song song và tính vuông góc ở hình hộp.</text>
</svg>
~~~

### B22 SVG `G11_B22_KHEOPS_ANGLE_AUTHORING_20261123.svg`

ASSET_REF|`docs/assets/images/thpt/G11_B22_KHEOPS_ANGLE_AUTHORING_20261123.svg`

ASSET_BLOB|`9e3820f228b9c0733378736e4cd24636572b5c83`

ASSET_SOURCE_PR_HEAD|`5b40c5c8d03ad4e6fe02fbca2df4729bec51be9a`

~~~xml
<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="470" viewBox="0 0 1000 470" role="img" aria-labelledby="title desc">
<title id="title">Tính góc cạnh bên với cạnh đáy của mô hình kim tự tháp đáy vuông</title>
<desc id="desc">Hình chóp S.ABCD đáy ABCD vuông, AB song song CD. Hai cạnh bên SC và SD dài 219 mét, cạnh đáy CD 230 mét. Để tính góc giữa SC và AB, thay AB bằng CD song song rồi xét góc SCD của tam giác cân SCD; cos góc SCD bằng 230 chia cho 438, góc xấp xỉ 58,3 độ.</desc>
<rect width="1000" height="470" rx="18" fill="#fff"/>
<text x="500" y="35" text-anchor="middle" font-family="Arial,sans-serif" font-size="23" font-weight="700" fill="#193954">Tính góc (SC, AB): chuyển AB ∥ CD</text>
<g stroke="#687b8e" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path d="M130 335 L420 335 L545 248 L255 248 Z" />
<path d="M345 76 L130 335 M345 76 L420 335 M345 76 L545 248 M345 76 L255 248"/>
</g>
<g stroke-width="7" fill="none" stroke-linecap="round">
<path d="M130 335 L420 335" stroke="#246da7"/>
<path d="M255 248 L545 248" stroke="#246da7" stroke-dasharray="11 7"/>
<path d="M345 76 L545 248" stroke="#c65a36"/>
<path d="M345 76 L255 248" stroke="#41826b"/>
</g>
<g font-family="Arial,sans-serif" font-size="20" fill="#263d58">
<text x="106" y="359">A</text><text x="426" y="359">B</text><text x="553" y="257">C</text><text x="238" y="272">D</text><text x="338" y="68">S</text>
<text x="270" y="369" font-size="17" fill="#246da7">230 m</text>
<text x="470" y="160" fill="#b64a2c" font-size="18">219 m</text>
<text x="270" y="163" fill="#27755f" font-size="18">219 m</text>
<text x="350" y="239" fill="#246da7" font-size="16">CD ∥ AB</text>
</g>
<rect x="620" y="81" width="353" height="282" rx="14" fill="#f7fafc" stroke="#d6e3ed"/>
<text x="796" y="113" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" font-weight="700" fill="#244a67">Tam giác cân SCD</text>
<path d="M794 139 L674 294 L920 294 Z" fill="#e9f4f1" stroke="#427e74" stroke-width="2.8"/>
<path d="M794 139 L920 294" stroke="#c65a36" stroke-width="5"/>
<path d="M674 294 L920 294" stroke="#246da7" stroke-width="5"/>
<path d="M904 294 Q906 272 892 259" fill="none" stroke="#c65a36" stroke-width="2.3"/>
<g font-family="Arial,sans-serif" font-size="17" fill="#253f58">
<text x="790" y="132">S</text><text x="655" y="312">D</text><text x="929" y="312">C</text>
<text x="701" y="220">219</text><text x="869" y="210">219</text><text x="788" y="319" text-anchor="middle">230</text>
<text x="873" y="285" fill="#b54c35" font-weight="700">α</text>
<text x="796" y="345" text-anchor="middle">cos α = CD/(2·SC)</text>
</g>
<text x="500" y="403" font-family="Arial,sans-serif" text-anchor="middle" font-size="19" fill="#2a4057">cos α = 230/(2·219) ⇒ α ≈ 58,3°</text>
<text x="500" y="442" font-family="Arial,sans-serif" text-anchor="middle" font-size="15" fill="#627184">Hình sơ đồ minh họa theo dữ kiện SGK; độ dài và góc được tính, không đo từ hình phối cảnh.</text>
</svg>
~~~

### B23 SVG `FIG-G11-CHVII-B23-01_R00.svg`

ASSET_REF|`docs/assets/images/thpt/FIG-G11-CHVII-B23-01_R00.svg`

ASSET_BLOB|`b53b65704f9830e1c97b533bac0e79a0b56761b6`

ASSET_SOURCE_PR_HEAD|`fa5b96f9ae0eab840065033d4c0ce9e5d0059994`

~~~xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 500" role="img" aria-labelledby="title desc" width="900" height="500">
<title id="title">FIG-G11-CHVII-B23-01: Hai đường cắt nhau đủ xác định pháp tuyến</title><desc id="desc">Cột AH vuông góc hai đường AB và AD cắt nhau ở A trong mặt P, nên AH vuông góc cả mặt P.</desc>
<rect width="900" height="500" fill="#f8fafc" rx="18"/>
<text x="450" y="42" text-anchor="middle" font-family="Arial,sans-serif" font-size="25" font-weight="700" fill="#0f172a">Hai đường cắt nhau đủ xác định pháp tuyến</text>
<polygon points="210,355 590,355 710,225 330,225" fill="#dbeafe" fill-opacity="0.75" stroke="#64748b" stroke-width="3"/><text x="650" y="340" font-family="Arial" font-size="24" fill="#1d4ed8">(P)</text><path d="M335 275 L335 88" stroke="#dc2626" stroke-width="7"/><circle cx="335" cy="275" r="6" fill="#111827"/><text x="319" y="82" font-size="21">H</text><text x="310" y="302" font-size="21">A</text><path d="M335 275 L572 275" stroke="#1d4ed8" stroke-width="6"/><path d="M335 275 L255 344" stroke="#059669" stroke-width="6"/><text x="578" y="282" font-size="19">B</text><text x="236" y="360" font-size="19">D</text><path d="M350 276 V259 H335" fill="none" stroke="#dc2626" stroke-width="3"/><text x="82" y="406" font-size="19">AH ⟂ AB và AH ⟂ AD</text>
<text x="450" y="476" text-anchor="middle" font-family="Arial,sans-serif" font-size="15" fill="#475569">Sơ đồ phương và quan hệ; không suy độ dài/góc từ phối cảnh.</text>
</svg>
~~~

### B23 SVG `G11_B23_PERPENDICULAR_BISECTOR_PLANE_AUTHORING_20261123.svg`

ASSET_REF|`docs/assets/images/thpt/G11_B23_PERPENDICULAR_BISECTOR_PLANE_AUTHORING_20261123.svg`

ASSET_BLOB|`bca2dd8689c5edb1a19bb1e6fe11eeb24d40df52`

ASSET_SOURCE_PR_HEAD|`fa5b96f9ae0eab840065033d4c0ce9e5d0059994`

~~~xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 450" width="920" height="450" role="img" aria-labelledby="t d">
<title id="t">Mặt phẳng trung trực của đoạn thẳng AB</title>
<desc id="d">Đoạn AB màu xanh cắt mặt phẳng alpha tại trung điểm I. Mặt phẳng alpha vuông góc đường AB tại I. Mọi điểm M của mặt phẳng alpha đều cách đều A và B, minh họa bằng hai đoạn MA và MB bằng nhau; chiều ngược lại cũng đúng.</desc>
<rect width="920" height="450" rx="18" fill="#fff"/><text x="460" y="34" text-anchor="middle" font-family="Arial" font-weight="700" font-size="24" fill="#1f3f5a">M thuộc mặt phẳng trung trực ⇔ MA = MB</text>
<path d="M325 350 L490 275 L490 74 L325 149 Z" stroke="#327c76" fill="#dcf3ee" fill-opacity=".83" stroke-width="3.5"/>
<line x1="132" y1="277" x2="680" y2="277" stroke="#276ca6" stroke-width="6" stroke-linecap="round"/>
<line x1="406" y1="277" x2="413" y2="100" stroke="#24785c" stroke-width="2.8" stroke-dasharray="8 5"/>
<line x1="132" y1="277" x2="413" y2="100" stroke="#bd5940" stroke-width="3.8"/><line x1="680" y1="277" x2="413" y2="100" stroke="#bd5940" stroke-width="3.8"/>
<circle cx="132" cy="277" r="6" fill="#276ca6"/><circle cx="680" cy="277" r="6" fill="#276ca6"/><circle cx="406" cy="277" r="7" fill="#24785c"/><circle cx="413" cy="100" r="7" fill="#24785c"/>
<path d="M406 254 L430 254 L430 277" stroke="#24785c" stroke-width="2.6" fill="none"/>
<g font-family="Arial,sans-serif" font-size="21" fill="#263c56">
<text x="109" y="305">A</text><text x="684" y="304">B</text><text x="387" y="309">I</text><text x="418" y="94">M</text>
<text x="500" y="161" fill="#24785c">(α)</text>
<text x="232" y="168" fill="#aa4b37">MA</text><text x="570" y="168" fill="#aa4b37">MB</text>
<text x="460" y="393" text-anchor="middle">I là trung điểm AB · AB ⟂ (α)</text>
<text x="460" y="422" text-anchor="middle" font-size="17">AI = IB; MI ⟂ AB ⇒ MA² = MI²+AI² = MB²</text>
</g></svg>
~~~

### B23 SVG `G11_B23_PARALLEL_PLANES_NORMAL_AUTHORING_20261123.svg`

ASSET_REF|`docs/assets/images/thpt/G11_B23_PARALLEL_PLANES_NORMAL_AUTHORING_20261123.svg`

ASSET_BLOB|`d8264650f25a1dc885cab77a6ba9900829fb2ee1`

ASSET_SOURCE_PR_HEAD|`fa5b96f9ae0eab840065033d4c0ce9e5d0059994`

~~~xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 470" width="920" height="470" role="img" aria-labelledby="t d">
<title id="t">Một đường thẳng vuông góc hai mặt phẳng song song</title>
<desc id="d">Hai mặt phẳng P và Q song song, biểu diễn bằng hai hình bình hành cùng hướng tại hai độ cao khác nhau. Đường thẳng delta màu đỏ đi qua cả hai và vuông góc với P, do đó cũng vuông góc Q. Hai mặt phẳng khác nhau cùng vuông góc delta thì song song nhau.</desc>
<rect width="920" height="470" rx="18" fill="#fff"/>
<text x="460" y="34" text-anchor="middle" font-family="Arial,sans-serif" font-weight="700" font-size="23" fill="#193954">Mặt phẳng song song giữ cùng phương pháp tuyến</text>
<path d="M135 326 L567 326 L720 243 L288 243 Z" fill="#e3f0fa" stroke="#437ba4" stroke-width="3"/>
<path d="M135 192 L567 192 L720 109 L288 109 Z" fill="#dff3ec" fill-opacity=".9" stroke="#399073" stroke-width="3"/>
<line x1="424" y1="407" x2="424" y2="64" stroke="#c95637" stroke-width="7" stroke-linecap="round"/>
<rect x="424" y="181" width="19" height="17" fill="none" stroke="#c95637" stroke-width="3"/>
<rect x="424" y="315" width="19" height="17" fill="none" stroke="#c95637" stroke-width="3"/>
<g font-family="Arial,sans-serif" font-size="21" fill="#213f57">
<text x="741" y="137" fill="#236a52">(Q)</text><text x="742" y="280" fill="#296b9c">(P)</text>
<text x="443" y="84" fill="#b54c30">Δ</text>
<text x="460" y="443" text-anchor="middle">Nếu (P) ∥ (Q) và Δ ⟂ (P) thì Δ ⟂ (Q)</text>
</g></svg>
~~~

### B24 SVG `FIG-G11-CHVII-B24-01_R00.svg`

ASSET_REF|`docs/assets/images/thpt/FIG-G11-CHVII-B24-01_R00.svg`

ASSET_BLOB|`c98d7df30b87c339336636e00322816a4099681b`

ASSET_SOURCE_PR_HEAD|`f2a35940864abd6a8e76da5d5b6bfded89f44b6f`

~~~xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 500" role="img" aria-labelledby="title desc" width="900" height="500">
<title id="title">FIG-G11-CHVII-B24-01: Chiếu đoạn dốc: AH cao, MH ngang</title><desc id="desc">A ở cao, H là chân vuông góc trên mặt P, M nằm trên mặt P; góc AMH là góc đường AM với mặt P, tam giác AHM vuông tại H.</desc>
<rect width="900" height="500" fill="#f8fafc" rx="18"/>
<text x="450" y="42" text-anchor="middle" font-family="Arial,sans-serif" font-size="25" font-weight="700" fill="#0f172a">Chiếu đoạn dốc: AH cao, MH ngang</text>
<polygon points="210,355 590,355 710,225 330,225" fill="#dbeafe" fill-opacity="0.75" stroke="#64748b" stroke-width="3"/><text x="650" y="340" font-family="Arial" font-size="24" fill="#1d4ed8">(P)</text><path d="M337 265 L337 112" stroke="#dc2626" stroke-width="6"/><path d="M337 265 L577 265" stroke="#059669" stroke-width="6"/><path d="M337 112 L577 265" stroke="#1d4ed8" stroke-width="6"/><path d="M337 246 H356 V265" fill="none" stroke="#dc2626" stroke-width="3"/><text x="316" y="103" font-size="21">A</text><text x="310" y="288" font-size="21">H</text><text x="586" y="278" font-size="21">M</text><text x="365" y="181" font-size="18" fill="#dc2626">h</text><text x="452" y="291" font-size="18" fill="#059669">hình chiếu</text><text x="505" y="178" font-size="18" fill="#1d4ed8">đoạn xiên</text><text x="110" y="421" font-size="20">sin(góc AMH) = AH / AM</text>
<text x="450" y="476" text-anchor="middle" font-family="Arial,sans-serif" font-size="15" fill="#475569">Sơ đồ phương và quan hệ; không suy độ dài/góc từ phối cảnh.</text>
</svg>
~~~

### B24 SVG `G11_B24_THREE_PERPENDICULAR_LINES_AUTHORING_20261123.svg`

ASSET_REF|`docs/assets/images/thpt/G11_B24_THREE_PERPENDICULAR_LINES_AUTHORING_20261123.svg`

ASSET_BLOB|`ccfeff10568475186750ae735dfc8edc4bca7658`

ASSET_SOURCE_PR_HEAD|`f2a35940864abd6a8e76da5d5b6bfded89f44b6f`

~~~xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 460" width="1000" height="460" role="img" aria-labelledby="t d">
<title id="t">Định lí ba đường vuông góc qua hình chiếu của đường xiên</title>
<desc id="d">Mặt phẳng P có đường b và hình chiếu a phẩy của đường xiên a, vuông góc tại T. Hai điểm M, N trên đường a được chiếu theo phương vuông góc xuống M phẩy, N phẩy trên mặt P. Nếu b vuông góc a phẩy, thì b cũng vuông góc a, và ngược lại. Đường xiên a không vuông góc mặt phẳng P, nên hình chiếu là đường chứ không phải điểm.</desc>
<rect width="1000" height="460" rx="18" fill="#fff"/>
<text x="500" y="38" text-anchor="middle" font-family="Arial,sans-serif" font-size="23" font-weight="700" fill="#193954">Định lí ba đường vuông góc: kiểm đường xiên qua hình chiếu</text>
<polygon points="126,286 696,286 808,410 236,410" fill="#e9f4fa" stroke="#7c98ae" stroke-width="3"/>
<path d="M270 345 L600 345" stroke="#276e9e" stroke-width="6" stroke-linecap="round"/>
<path d="M435 303 L435 388" stroke="#238568" stroke-width="6" stroke-linecap="round"/>
<path d="M274 345 L274 160 M597 345 L597 196" stroke="#ce6b47" stroke-width="2.8" stroke-dasharray="9 6" fill="none"/>
<path d="M274 160 L597 196" stroke="#c65c38" stroke-width="6" stroke-linecap="round"/>
<path d="M435 345 L435 325 L454 325" stroke="#238568" stroke-width="2.8" fill="none"/>
<g font-family="Arial,sans-serif" fill="#1f3a57" font-size="19">
<text x="256" y="151">M</text><text x="604" y="190">N</text><text x="250" y="370">M′</text><text x="596" y="370">N′</text>
<text x="445" y="369">T</text><text x="619" y="343" fill="#276e9e">a′</text><text x="446" y="308" fill="#238568">b</text>
<text x="516" y="155" fill="#b84f2f">a</text><text x="739" y="342">(P)</text>
</g>
<rect x="95" y="420" width="810" height="30" rx="8" fill="#f1f7f3"/>
<text x="500" y="440" text-anchor="middle" font-family="Arial,sans-serif" font-size="17" fill="#215d4c">b nằm trong (P); a′ là hình chiếu của a; b ⟂ a′ ⇔ b ⟂ a</text>
</svg>
~~~

### B24 SVG `G11_B24_SABC_PROJECTION_EXAMPLE_AUTHORING_20261123.svg`

ASSET_REF|`docs/assets/images/thpt/G11_B24_SABC_PROJECTION_EXAMPLE_AUTHORING_20261123.svg`

ASSET_BLOB|`f05beae8d637098a296c4e52e2a6ff4913d145f7`

ASSET_SOURCE_PR_HEAD|`f2a35940864abd6a8e76da5d5b6bfded89f44b6f`

~~~xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1020 480" width="1020" height="480" role="img" aria-labelledby="t d">
<title id="t">Ví dụ SGK góc giữa SC và mặt phẳng SAB bằng 60 độ</title>
<desc id="d">Hình chóp S.ABC có SA vuông góc đáy ABC, SA bằng a, AB bằng 2a, CA và CB bằng a căn bảy. M là trung điểm AB, CM vuông góc AB và SA, suy CM vuông góc mặt phẳng SAB. Hình chiếu của SC lên SAB là SM. Tam giác SMC vuông tại M, có SM bằng a căn hai và SC bằng a căn tám, nên góc CSM bằng 60 độ.</desc>
<rect width="1020" height="480" rx="18" fill="#fff"/>
<text x="510" y="36" text-anchor="middle" font-family="Arial,sans-serif" font-size="23" font-weight="700" fill="#173a55">Góc giữa SC và (SAB): xác định đúng hình chiếu SM</text>
<polygon points="110,344 450,344 286,229" fill="#e7f1fa" stroke="#7394ac" stroke-width="3"/>
<path d="M110 344 L110 95 L450 344 L286 229 L110 95" stroke="#687e91" stroke-width="3.3" fill="none" stroke-linejoin="round"/>
<path d="M110 95 L286 229" stroke="#ba5937" stroke-width="6" stroke-linecap="round"/>
<path d="M286 229 L280 344" stroke="#267f62" stroke-width="5.5" stroke-linecap="round"/>
<path d="M110 95 L280 344" stroke="#246c9f" stroke-width="5.5" stroke-linecap="round"/>
<path d="M280 344 L280 328 L296 328" stroke="#267f62" fill="none" stroke-width="2.5"/>
<path d="M110 344 L127 344 L127 327" stroke="#ba5937" fill="none" stroke-width="2.5"/>
<g font-family="Arial,sans-serif" font-size="19" fill="#203954">
<text x="90" y="92">S</text><text x="92" y="367">A</text><text x="457" y="366">B</text><text x="292" y="221">C</text><text x="280" y="367">M</text>
<text x="74" y="231">SA = a</text><text x="169" y="380">AM = a</text><text x="348" y="380">MB = a</text>
<text x="317" y="281" fill="#267f62">CM ⟂ (SAB)</text><text x="158" y="202" fill="#246c9f">SM</text>
</g>
<rect x="540" y="70" width="445" height="345" rx="15" fill="#f7fafc" stroke="#dde6ef"/>
<text x="763" y="100" text-anchor="middle" font-family="Arial,sans-serif" font-size="19" font-weight="700" fill="#1e567b">Tam giác vuông SMC (vuông tại M)</text>
<path d="M635 139 L635 346 L934 346 Z" stroke="#3e6c85" stroke-width="3.5" fill="#eef8f2"/>
<path d="M635 139 L934 346" stroke="#ba5937" stroke-width="5.2"/>
<path d="M635 139 L635 346" stroke="#246c9f" stroke-width="5.2"/>
<path d="M635 346 L635 327 L654 327" stroke="#267f62" stroke-width="2.5" fill="none"/>
<path d="M635 172 Q659 169 661 159" stroke="#ba5937" stroke-width="2.4" fill="none"/>
<g font-family="Arial,sans-serif" font-size="19" fill="#254057">
<text x="620" y="132">S</text><text x="617" y="368">M</text><text x="938" y="368">C</text>
<text x="568" y="238">SM = a√2</text><text x="836" y="198">SC = a√8</text>
<text x="676" y="315">CM = a√6</text><text x="662" y="185" fill="#ad4a32">60°</text>
<text x="766" y="399" text-anchor="middle">cos ∠CSM = SM/SC = 1/2</text>
</g>
<text x="510" y="453" text-anchor="middle" font-family="Arial,sans-serif" font-size="17" fill="#536a7c">Hình minh họa quan hệ; dùng số liệu SGK và vuông góc, không đo từ phối cảnh.</text>
</svg>
~~~

