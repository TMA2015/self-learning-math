# Temp_ · SGK Toán 11 Chương VI B18–B21 · một gói phản biện độc lập Delta-C
ROLE: REVIEW_COPY_NOT_LEARNER_SOURCE
BRANCH: authoring/sgk-g11-chvi-b18-b21-r02-20261122
Q18_RECEIPT_PATH: prototypes/thpt/review-packets/G11_CHVI_B18_B21_R04_AUTHOR_SELF_Q18_RECEIPT_20261122.md
Q18_RECEIPT_BLOB: 015e5a58c1a90a7f1c3bc23c7b6f8a4a98d3696e
SCOPE: R04 AUTHOR_SELF_VERIFIED CONTENT_READY academic source; REVIEW_COPY_ONLY, no independent verdict or RELEASE
PRIVATE_RD1: NOT_INCLUDED

## Prompt review (4 câu)

1. Phản biện độc lập phần DELTA_C của Bài 18–21, dùng **đúng 5 Permanent Sources THPT v2.1 hiện hành** và SGK/SBT KNTT Tập 2 S1, không sử dụng đồng thời bộ v2.0 hoặc lấy bản Temp làm chuẩn thẩm quyền.
2. Kiểm từng mục SGK, outcome, câu Tự thử và ví dụ theo Q01–Q18, D1–D6, PED1–PED6, đặc biệt giả thiết căn bậc n/lũy thừa, tách log trên miền đúng, lg/ln/e, đồ thị/chiều biến thiên, miền nghiệm, dấu bất phương trình và ngưỡng thực/nguyên.
3. Trả Academic/PED verdict theo từng bài/outcome với P0/P1/P2, ID và chứng cứ SGK trang in, giải độc lập mọi trường hợp nghi ngờ và đề xuất MINIMAL_DELTA; không yêu cầu sửa lại phần bank/Written cũ bất biến chỉ vì thay learner explanation.
4. Ghi SOURCE_RECEIPT đúng bốn Git learner blobs và Q18 receipt blob ở đây, phân biệt PASS lịch sử với bản mới, không cấp CONTENT_READY hoặc RELEASE PASS chỉ dựa vào tự kiểm/metadata.

## Source SHA
PACKET_ID: Temp_G11_CHVI_B18_B21_R04_INDEPENDENT_REVIEW_20261122
| Lesson | Canonical path | Exact Git blob |
| --- | --- | --- |
| B18 | docs/thpt-preview/sgk/lop-11/chuong-vi/bai-18.md | c2aa5bb21c9a6c7b0ba56eb7376f12ef5da75d4e |
| B19 | docs/thpt-preview/sgk/lop-11/chuong-vi/bai-19.md | 8de2716f1e388f365d7cccc6bf4a421fcf7bfbac |
| B20 | docs/thpt-preview/sgk/lop-11/chuong-vi/bai-20.md | 8f12059944f99c8665c2521418b6d7f07ae33ed6 |
| B21 | docs/thpt-preview/sgk/lop-11/chuong-vi/bai-21.md | 922d5fddc8131f5d999abfbfd610cdfb78a8083a |

Đây là bản sao phục vụ phản biện; chỉ sửa và khóa lại nguồn canonical ở đúng đường dẫn learner khi cần, không tích hợp bản Temp vào website. Nguồn PASS trước đây là bản immutable khác.


---

## REVIEW SOURCE B18 BEGIN · c2aa5bb21c9a6c7b0ba56eb7376f12ef5da75d4e

# Bài 18. Lũy thừa với số mũ thực

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VI · SGK KNTT TẬP 2</p><p class="thpt-r4-lead">Từ phép nhân lặp đến căn bậc n và số mũ thực: hiểu điều kiện cơ số, dùng đúng quy tắc, tính tăng trưởng.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương VI</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Nếu gửi tiết kiệm theo lãi kép, số dư mỗi kỳ là số dư kỳ trước nhân với cùng một hệ số. Lũy thừa giúp ghi ngắn phép nhân lặp. Nhưng số mũ có thể âm, phân số, thậm chí vô tỉ: khi đó cần mở rộng định nghĩa mà vẫn giữ được quy tắc tính. Nhớ kiến thức tiền đề: lũy thừa nguyên dương, nghịch đảo, căn bậc hai, giới hạn dãy số.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVI-B18-01_R00.svg" alt="Lũy thừa cơ số 2 tại số mũ âm, không và hữu tỉ"><figcaption>Đọc hình: trên cùng hệ trục, \(2^{-2}=1/4\), \(2^0=1\); điểm có hoành độ \(1/2\) biểu diễn \(\sqrt2\). Số mũ âm không làm cơ số dương cho giá trị âm; số mũ phân số không phải “nhân nửa lần”.</figcaption></figure>

    ### 1.1. Từ số mũ dương đến số mũ 0 và âm

    Với cơ số khác 0, giảm số mũ một đơn vị ứng với chia cho cơ số. Ví dụ \(5^2,5^1,5^0,5^{-1}\) lần lượt là \(25,5,1,1/5\). Số mũ âm nói về nghịch đảo, không đặt dấu trừ trước kết quả.

    **Vận dụng — Tự thử trước Core.** Tính \((3/7)^{-2}\). Vì sao không được định nghĩa \(0^{-3}\) bằng quy tắc ấy?

    <span data-ped-first-try="1" data-outcome-id="G11-B18-POWER_INTEGER" data-thpt-first-try-id="THPT-G11-B18-TRY01" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \((3/7)^{-2}=(7/3)^2=49/9\). \(0^{-3}\) sẽ đòi chia cho \(0^3=0\), không có nghĩa.

    <span data-thpt-help-id="HELP-G11-B18-TRY01" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Đổi dấu giá trị thay vì lấy nghịch đảo.

        **Tự sửa:** Viết lũy thừa âm thành phân thức trước khi tính. <a href="../luyen-tap/?item=THPT-G11-CHVI-B18-C01">Làm lại câu B18-C01</a>.

    ### 1.2. Căn bậc n và dấu của số dưới căn

    Một phương trình \(b^n=a\) có thể có một, hai hoặc không có nghiệm thực tùy tính chẵn/lẻ của \(n\). Ký hiệu căn bậc chẵn chỉ chọn nghiệm không âm.

    **Vận dụng — Tự thử trước Core.** Tính \(\sqrt[5]{-243}\), \(\sqrt[4]{81}\) và liệt kê các nghiệm thực của \(z^4=81\).

    <span data-ped-first-try="2" data-outcome-id="G11-B18-POWER_RATIONAL" data-thpt-first-try-id="THPT-G11-B18-TRY02" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \((-3)^5=-243\) nên căn bậc năm bằng \(-3\). \(\sqrt[4]{81}=3\), còn phương trình \(z^4=81\) có hai nghiệm \(-3,3\).

    <span data-thpt-help-id="HELP-G11-B18-TRY02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Viết căn bậc chẵn có hai giá trị.

        **Tự sửa:** Tách yêu cầu tính căn số học và giải phương trình; kiểm số mũ chẵn/lẻ. <a href="../luyen-tap/?item=THPT-G11-CHVI-B18-C05">Làm lại câu B18-C05</a>.

    ### 1.3. Số mũ hữu tỉ là phép lấy căn rồi nâng lũy thừa

    Để giữ \((a^{1/n})^n=a\) khi \(a\gt 0\), ta chọn căn bậc \(n\) dương. Số mũ \(m/n\) kết hợp căn bậc \(n\) với mũ \(m\), kể cả khi \(m\) âm.

    **Vận dụng — Tự thử trước Core.** Tính \(125^{-2/3}\) bằng cách lấy căn trước.

    <span data-ped-first-try="3" data-outcome-id="G11-B18-POWER_RATIONAL" data-thpt-first-try-id="THPT-G11-B18-TRY03" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(\sqrt[3]{125}=5\), do đó \(125^{-2/3}=5^{-2}=1/25\). Điều kiện cơ số dương thỏa mãn.

    <span data-thpt-help-id="HELP-G11-B18-TRY03" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Đảo tử mẫu của số mũ hoặc coi mũ âm là giá trị âm.

        **Tự sửa:** Đọc mẫu số của số mũ là bậc căn rồi xử lý mũ nguyên ở tử. <a href="../luyen-tap/?item=THPT-G11-CHVI-B18-P02">Làm lại câu B18-P02</a>.

    ### 1.4. Số mũ vô tỉ được hình thành thế nào?

    Chương V đã cho phép nói về giới hạn. Với cơ số dương, nếu các số hữu tỉ \(r_n\) tiến đến một số vô tỉ \(\alpha\), các giá trị \(a^{r_n}\) tiến đến một giá trị dương xác định, không phụ thuộc cách chọn dãy hữu tỉ. Đó là định nghĩa \(a^\alpha\); không cần hiểu \(\alpha\) là số lần nhân.

    **Vận dụng — Tự thử trước Core.** Vì \(2\lt \sqrt5\lt 3\), hãy kẹp \(3^{\sqrt5}\) giữa hai lũy thừa nguyên của 3; có thể thay cơ số 3 bằng \(-3\) trong cách định nghĩa chung không?

    <span data-ped-first-try="4" data-outcome-id="G11-B18-POWER_REAL" data-thpt-first-try-id="THPT-G11-B18-TRY04" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Cơ số \(3\gt 1\) nên \(9=3^2\lt 3^{\sqrt5}\lt 3^3=27\). Không thể dùng định nghĩa lũy thừa số mũ thực chung với cơ số âm, vì nhiều số mũ hữu tỉ không cho giá trị thực.

    <span data-thpt-help-id="HELP-G11-B18-TRY04" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Nghĩ chỉ số mũ nguyên mới có nghĩa, hoặc bỏ điều kiện a>0.

        **Tự sửa:** Ôn định nghĩa số mũ hữu tỉ và giới hạn ở mục 2.3; kiểm cơ số trước. <a href="../luyen-tap/?item=THPT-G11-CHVI-B18-C04">Làm lại câu B18-C04</a>.

    ### 1.5. Cùng cơ số thì cộng số mũ khi nhân, không phải khi cộng

    Từ \(a^2a^3=a^5\) vì ghép các thừa số, luật nhân mở rộng sang số mũ thực với cơ số dương. Cộng hai giá trị không phải ghép các thừa số, nên không có luật tương tự cho phép cộng.

    **Vận dụng — Tự thử trước Core.** Với \(t\gt 0\), rút gọn \(\dfrac{t^{3/4}t^{5/4}}{t^{1/3}}\).

    <span data-ped-first-try="5" data-outcome-id="G11-B18-POWER_LAWS" data-thpt-first-try-id="THPT-G11-B18-TRY05" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Cùng cơ số \(t\gt 0\): số mũ \(3/4+5/4-1/3=5/3\), vậy biểu thức bằng \(t^{5/3}\). Mẫu khác 0 vì \(t\gt 0\).

    <span data-thpt-help-id="HELP-G11-B18-TRY05" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Cộng số mũ tùy ý hoặc bỏ điều kiện cơ số.

        **Tự sửa:** Viết riêng phép nhân, chia, lũy thừa của lũy thừa; đối chiếu điều kiện. <a href="../luyen-tap/?item=THPT-G11-CHVI-B18-P01">Làm lại câu B18-P01</a>.

    ### 1.6. Lãi kép: nhân theo từng kỳ, không cộng mãi cùng số tiền

    Với vốn \(P\), lãi suất mỗi kỳ \(r\) không đổi và nhập lãi vào vốn, mỗi kỳ nhân \(1+r\); sau \(n\) kỳ số dư là \(P(1+r)^n\). Nếu cập nhật cuối kỳ, \(n\) là số nguyên không âm.

    **Vận dụng — Tự thử trước Core.** Gửi 200 triệu đồng, lãi kép 4%/năm, không phí và không rút. Sau 3 năm số dư là bao nhiêu?

    <span data-ped-first-try="6" data-outcome-id="G11-B18-GROWTH_MODEL" data-thpt-first-try-id="THPT-G11-B18-TRY06" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(200(1{,}04)^3=224{,}9728\) triệu đồng, xấp xỉ \(224{,}97\) triệu đồng. Hệ số \(1{,}04\) được nhân ba lần; tiền lãi năm sau tính trên số dư mới.

    <span data-thpt-help-id="HELP-G11-B18-TRY06" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Tính lãi đơn 200+3·8 rồi gọi là lãi kép.

        **Tự sửa:** Lập lần lượt số dư năm 0,1,2,3; nêu giả định mô hình. <a href="../luyen-tap/?item=THPT-G11-CHVI-B18-P05">Làm lại câu B18-P05</a>.

=== "Kiến thức SGK"

    ### 2.1. Lũy thừa với số mũ nguyên

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa.</strong> Với \(n\) nguyên dương, \(a^n\) là tích \(n\) thừa số \(a\). Nếu \(a\ne0\), \(a^0=1,\ a^{-n}=1/a^n\). Trong \(a^m\), \(a\) là cơ số, \(m\) là số mũ.</div>
    
    \(0^n=0\) với \(n\gt 0\); \(0^0\) và \(0^{-n}\) không được định nghĩa ở đây.
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất.</strong> Với \(a,b\ne0\), \(m,n\in\mathbb Z\):
    \[
    a^ma^n=a^{m+n},\quad \frac{a^m}{a^n}=a^{m-n},\quad (a^m)^n=a^{mn},
    \]
    \[
    (ab)^m=a^mb^m,\quad \left(\frac ab\right)^m=\frac{a^m}{b^m}.
    \]
    </div>
    
    Khi \(a\gt 1\), so sánh số mũ giữ chiều; khi \(0\lt a\lt 1\), so sánh số mũ đảo chiều. Không suy \(a^m+a^n=a^{m+n}\). Kí hiệu khoa học của số dương có dạng \(c\cdot10^k\), \(1\le c\lt 10,\ k\in\mathbb Z\).

    ### 2.2. Lũy thừa với số mũ hữu tỉ

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Căn bậc n.</strong> \(b\) là căn bậc \(n\) của \(a\) nếu \(b^n=a\), \(n\ge1\) nguyên. Khi \(n\) lẻ, mọi \(a\in\mathbb R\) có đúng một căn; khi \(n\) chẵn, \(a\gt 0\) có hai căn đối nhau, \(\sqrt[n]a\) chỉ căn dương; \(a=0\) có căn 0; \(a\lt 0\) không có căn thực bậc chẵn.</div>
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất căn.</strong> Với các biểu thức đều có nghĩa (mẫu khác 0), \(n,k\) nguyên dương, \(m\) nguyên:
    \[
    \sqrt[n]a\sqrt[n]b=\sqrt[n]{ab},\quad
    \frac{\sqrt[n]a}{\sqrt[n]b}=\sqrt[n]{a/b},
    \]
    \[
    (\sqrt[n]a)^m=\sqrt[n]{a^m},\quad
    \sqrt[n]{\sqrt[k]a}=\sqrt[nk]a.
    \]
    Đặc biệt \(\sqrt[n]{a^n}=a\) nếu \(n\) lẻ, bằng \(|a|\) nếu \(n\) chẵn.</div>
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa số mũ hữu tỉ.</strong> Với \(a\gt 0,\ m\in\mathbb Z,\ n\ge1\) nguyên,
    \[
    a^{m/n}=\sqrt[n]{a^m}=(\sqrt[n]a)^m.
    \]
    </div>
    
    Cơ số dương giúp định nghĩa nhất quán, không phụ thuộc cách biểu diễn phân số. Căn bậc lẻ của số âm có nghĩa không có nghĩa lũy thừa số mũ thực chung với cơ số âm luôn xác định.

    ### 2.3. Lũy thừa với số mũ thực

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa.</strong> Cho \(a\gt 0\), \(\alpha\) vô tỉ. Nếu \(r_n\) hữu tỉ và \(r_n\to\alpha\), giới hạn \(a^{r_n}\) tồn tại, dương và không phụ thuộc dãy đã chọn. Đặt \(a^\alpha=\lim_{n\to\infty}a^{r_n}\).</div>
    
    Với \(a,b\gt 0\) và số mũ thực, các luật nhân, chia, lũy thừa của lũy thừa và tích/thương ở mục 2.1 vẫn đúng. Nếu \(a\gt 1\) thì \(a^u\gt a^v\) tương đương \(u\gt v\); với \(0\lt a\lt 1\), tương đương \(u\lt v\). Trường hợp \(a=1\) luôn cho 1.
    
    **Máy tính:** nhập cơ số trong ngoặc nếu là phân thức, nhập số mũ đầy đủ (kể cả dấu ngoặc của phân số) rồi đọc kết quả. Ví dụ \(2^{1{,}3}\approx2{,}4623\) (làm tròn bốn chữ số thập phân). Không thay dấu bằng chính xác bằng dấu xấp xỉ.
    
    **Ứng dụng lãi kép:** \(A=P(1+r)^N\) với \(P\gt 0,\ 1+r\gt 0\), \(N\) số kỳ nhập lãi; mô hình thực tế phải nói rõ kỳ hạn và lãi suất.

=== "Ví dụ"

    ### 3.1. Số mũ âm

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B18-R02-01"><p><strong>Đề bài:</strong> Tính \((4/9)^{-2}\).</p><p><strong>Phân tích:</strong> Chuyển mũ âm về nghịch đảo của cơ số khác 0.</p><p><strong>Lời giải:</strong> \((4/9)^{-2}=(9/4)^2=81/16\).</p><p><strong>Kiểm lại:</strong> Kết quả dương và lớn hơn 1 vì cơ số ban đầu thuộc (0,1).</p></div>

    ### 3.2. Căn và điều kiện

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B18-R02-02"><p><strong>Đề bài:</strong> Tính \(\sqrt[3]{-216}\) và \(\sqrt{(-11)^2}\).</p><p><strong>Phân tích:</strong> Căn lẻ giữ dấu; căn chẵn của bình phương cho trị tuyệt đối.</p><p><strong>Lời giải:</strong> \(\sqrt[3]{-216}=-6\), còn \(\sqrt{(-11)^2}=|-11|=11\).</p><p><strong>Kiểm lại:</strong> Nâng -6 lên lũy thừa 3 được -216; căn bậc hai không âm.</p></div>

    ### 3.3. Nhân hai căn cùng bậc lẻ

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B18-R02-03"><p><strong>Đề bài:</strong> Tính \(\sqrt[3]{-16}\sqrt[3]4\).</p><p><strong>Phân tích:</strong> Hai căn bậc ba có nghĩa trên toàn bộ số thực, nên gộp tích.</p><p><strong>Lời giải:</strong> \(\sqrt[3]{-16\cdot4}=\sqrt[3]{-64}=-4\).</p><p><strong>Kiểm lại:</strong> Lập phương -4 bằng -64; không dùng máy móc cách gộp căn bậc chẵn của số âm.</p></div>

    ### 3.4. Số mũ hữu tỉ và điều kiện cơ số

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B18-R02-04"><p><strong>Đề bài:</strong> Tính \(32^{3/5}\) và \((1/81)^{-3/4}\).</p><p><strong>Phân tích:</strong> Hai cơ số dương. Lấy căn theo mẫu số rồi nâng lên mũ nguyên ở tử; với mũ âm dùng nghịch đảo.</p><p><strong>Lời giải:</strong> \(32^{3/5}=(\sqrt[5]{32})^3=2^3=8\). Tương tự, \((1/81)^{-3/4}=(1/3)^{-3}=27\).</p><p><strong>Kiểm lại:</strong> \(8^5=32^3\); căn bậc bốn của \(1/81\) là \(1/3\) và nghịch đảo mũ ba cho 27. Không áp dụng định nghĩa chung nếu cơ số không dương.</p></div>

    ### 3.5. Rút gọn số mũ thực

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B18-R02-05"><p><strong>Đề bài:</strong> Với \(a\gt 0\), rút gọn \(a^{\sqrt3+2}a^{1-\sqrt3}/(a^{1/2})^4\).</p><p><strong>Phân tích:</strong> Gộp số mũ ở tử; nhân số mũ ở mẫu.</p><p><strong>Lời giải:</strong> Tử \(a^3\), mẫu \(a^2\), nên bằng \(a\).</p><p><strong>Kiểm lại:</strong> Điều kiện a>0 đảm bảo các lũy thừa đều xác định.</p></div>

    ### 3.6. So sánh cùng cơ số nhỏ hơn 1

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B18-R02-06"><p><strong>Đề bài:</strong> So sánh \((1/4)^{\sqrt2}\) và \((1/4)^2\).</p><p><strong>Phân tích:</strong> Cơ số nằm giữa 0 và 1 nên thứ tự số mũ đảo khi chuyển thành giá trị.</p><p><strong>Lời giải:</strong> Vì \(\sqrt2\lt 2\), suy ra \((1/4)^{\sqrt2}\gt (1/4)^2=1/16\).</p><p><strong>Kiểm lại:</strong> Số mũ lớn hơn làm giá trị nhỏ hơn khi cơ số dưới 1.</p></div>

    ### 3.7. Kí hiệu khoa học

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B18-R02-07"><p><strong>Đề bài:</strong> Viết \(0{,}00000036\) m dưới dạng kí hiệu khoa học.</p><p><strong>Phân tích:</strong> Dịch dấu phẩy bảy vị trí sang phải được 3,6, rồi nhân ngược với \(10^{-7}\).</p><p><strong>Lời giải:</strong> \(0{,}00000036=3{,}6\cdot10^{-7}\) m.</p><p><strong>Kiểm lại:</strong> Hệ số thuộc \([1,10)\); dịch dấu phẩy ngược bảy vị trí khôi phục giá trị ban đầu.</p></div>

    ### 3.8. Tăng trưởng sau các kỳ nhập lãi

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B18-R02-08"><p><strong>Đề bài:</strong> Một mô hình có lượng ban đầu 80 đơn vị tăng 3% mỗi kỳ, tính lượng sau 4 kỳ.</p><p><strong>Phân tích:</strong> Sau mỗi kỳ nhân 1,03 với lượng hiện tại; tăng 3% không có nghĩa cộng mãi cùng một lượng.</p><p><strong>Lời giải:</strong> \(80(1{,}03)^4=90{,}0407048\), xấp xỉ 90,04 đơn vị.</p><p><strong>Kiểm lại:</strong> Giá trị lớn hơn 80, phép làm tròn được ghi rõ. Mô hình giả định hệ số tăng không đổi.</p></div>

=== "Lỗi thường gặp"

    <span data-thpt-help-id="HELP-G11-CHVI-B18-01" hidden></span>

    ??? tip "4.1. Nhầm số mũ âm thành số âm"

        **Vì sao sai:** Dấu trừ của số mũ làm lấy nghịch đảo.

        **Tự sửa:** Tính lại bằng 1/a^n, ôn 2.1. <a href="../luyen-tap/?item=THPT-G11-CHVI-B18-C01">Làm lại câu B18-C01</a>.

    <span data-thpt-help-id="HELP-G11-CHVI-B18-02" hidden></span>

    ??? tip "4.2. Không phân biệt căn chẵn và căn lẻ"

        **Vì sao sai:** Căn chẵn chọn giá trị không âm; định nghĩa căn hữu tỉ cần cơ số dương.

        **Tự sửa:** Ôn 2.2 và ví dụ 3.2. <a href="../luyen-tap/?item=THPT-G11-CHVI-B18-C02">Làm lại câu B18-C02</a>.

    <span data-thpt-help-id="HELP-G11-B18-03" hidden></span>

    ??? tip "4.3. Coi luật nhân cũng là luật cộng"

        **Vì sao sai:** Phép cộng không gộp số mũ.

        **Tự sửa:** Thử 3²+3³=36 khác 3⁵=243; ôn 2.1. <a href="../luyen-tap/?item=THPT-G11-CHVI-B18-P06">Làm lại câu B18-P06</a>.

    <span data-thpt-help-id="HELP-G11-B18-04" hidden></span>

    ??? tip "4.4. Nhầm lãi kép với lãi đơn"

        **Vì sao sai:** Lãi mỗi kỳ tính trên số dư đã nhập lãi.

        **Tự sửa:** Lập bảng số dư sau từng kỳ trước khi dùng công thức. <a href="../luyen-tap/?item=THPT-G11-CHVI-B18-P05">Làm lại câu B18-P05</a>.

    **Học tiếp:** <a href="../luyen-tap/">Core và Luyện tập</a> · <a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a> · <a href="../../../../thu-vien/tu-luan-g11-chuong-vi/">Tự luận Chương VI</a>.

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập hai, Bài 18 (trang in 4–9).</p>

## REVIEW SOURCE B18 END

---

## REVIEW SOURCE B19 BEGIN · 8de2716f1e388f365d7cccc6bf4a421fcf7bfbac

# Bài 19. Lôgarit

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VI · SGK KNTT TẬP 2</p><p class="thpt-r4-lead">Tìm số mũ bằng lôgarit; hiểu điều kiện, công thức đổi cơ số, lôgarit thập phân và tự nhiên trong mô hình.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương VI</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Bài 18 trả lời câu hỏi “nâng cơ số lên số mũ đã biết thì được bao nhiêu?”. Bây giờ, biết kết quả mà chưa biết số mũ, chẳng hạn muốn biết một khoản đầu tư cần bao nhiêu kỳ để tăng gấp ba, ta cần phép tính ngược. Lôgarit giải quyết đúng câu hỏi đó. Kiến thức tiền đề: lũy thừa số mũ thực, tính dương và quy tắc nhân lũy thừa.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVI-B19-01_R00.svg" alt="Sơ đồ hai chiều giữa lũy thừa và lôgarit cơ số 2"><figcaption>Đọc hình: đi từ trái sang phải để đọc \(2^3=8\). Đọc ngược: \(\log_2 8=3\). Mũ là kết quả của phép lôgarit, không phải thương hai số. Kiểm cơ số dương khác 1 và đối số dương trước khi đọc.</figcaption></figure>

    ### 1.1. Lôgarit trả về số mũ

    Nếu \(4^2=16\), phép ngược hỏi số mũ nào biến cơ số 4 thành 16. Vì hàm lũy thừa với cơ số dương khác 1 tăng hoặc giảm nghiêm ngặt, đáp án số mũ là duy nhất.

    **Vận dụng — Tự thử trước Core.** Tính \(\log_7(1/49)\) và kiểm lại bằng một đẳng thức lũy thừa.

    <span data-ped-first-try="1" data-outcome-id="G11-B19-LOG_DEFINITION" data-thpt-first-try-id="THPT-G11-B19-TRY01" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(\log_7(1/49)=-2\) vì \(7^{-2}=1/49\). Logarit có thể âm dù đối số bắt buộc dương.

    <span data-thpt-help-id="HELP-G11-B19-TRY01" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Chia đối số cho cơ số.

        **Tự sửa:** Đổi câu hỏi sang dạng a mũ x bằng M. <a href="../luyen-tap/?item=THPT-G11-CHVI-B19-C01">Làm lại câu B19-C01</a>.

    ### 1.2. Vì sao hai thừa số phải dương riêng rẽ khi tách tích?

    Cơ số phải dương khác 1; đối số phải dương. Tích hai số âm có thể dương, nhưng logarit riêng của từng số âm không xác định. Vì thế miền xác định của một tích trong logarit và miền của tổng hai logarit không nhất thiết giống nhau.

    **Vận dụng — Tự thử trước Core.** Cho \(F(x)=\log_5((x+3)(x-4))\). Tìm tập xác định và cho biết có được tách thành hai logarit trên toàn tập đó không.

    <span data-ped-first-try="2" data-outcome-id="G11-B19-LOG_DOMAIN" data-thpt-first-try-id="THPT-G11-B19-TRY02" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Điều kiện \((x+3)(x-4)\gt 0\) cho \(x\lt -3\) hoặc \(x\gt 4\). Chỉ khi \(x\gt 4\) cả \(x+3\) và \(x-4\) đều dương mới viết được \(\log_5(x+3)+\log_5(x-4)\).

    <span data-thpt-help-id="HELP-G11-B19-TRY02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Tách tích ngay sau khi kiểm tích dương.

        **Tự sửa:** Kiểm từng đối số sau biến đổi; dùng bảng dấu. <a href="../luyen-tap/?item=THPT-G11-CHVI-B19-P04">Làm lại câu B19-P04</a>.

    ### 1.3. Nhân, chia và nâng lũy thừa chuyển thành cộng, trừ và nhân số mũ

    Nếu \(M=a^u,N=a^v\) với \(M,N\gt 0\), thì \(MN=a^{u+v}\). Bởi logarit đọc ra số mũ, logarit của tích bằng tổng logarit. Tương tự với thương và lũy thừa. Không có công thức cộng cho logarit của một tổng.

    **Vận dụng — Tự thử trước Core.** Tính \(\log_5 125+\log_5(1/25)-\log_5 5\).

    <span data-ped-first-try="3" data-outcome-id="G11-B19-LOG_LAWS" data-thpt-first-try-id="THPT-G11-B19-TRY03" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Các đối số đều dương. Giá trị là \(3+(-2)-1=0\). Kiểm bằng gộp thành \(\log_5(125/(25\cdot5))=\log_5 1=0\).

    <span data-thpt-help-id="HELP-G11-B19-TRY03" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Nhầm dấu trừ hoặc logarit của tổng.

        **Tự sửa:** Viết từng số thành lũy thừa cơ số 5 rồi kiểm lại phép gộp. <a href="../luyen-tap/?item=THPT-G11-CHVI-B19-P01">Làm lại câu B19-P01</a>.

    ### 1.4. Đổi cơ số để dùng máy tính hoặc lũy thừa dễ nhận biết

    Đặt \(x=\log_a M\), tức \(a^x=M\). Lấy logarit cơ số \(c\) hợp lệ hai vế, ta được \(x\log_c a=\log_c M\). Vì \(a\ne1\), \(\log_c a\ne0\); chia được để tìm x.

    **Vận dụng — Tự thử trước Core.** Viết \(\log_8 4\) bằng logarit cơ số 2, rồi tính chính xác.

    <span data-ped-first-try="4" data-outcome-id="G11-B19-LOG_BASE_CHANGE" data-thpt-first-try-id="THPT-G11-B19-TRY04" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(\log_8 4=\log_2 4/\log_2 8=2/3\). Kiểm \(8^{2/3}=4\).

    <span data-thpt-help-id="HELP-G11-B19-TRY04" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Đổi cơ số bằng logarit của thương.

        **Tự sửa:** Dùng thương của hai logarit cùng một cơ số, không dùng logarit của thương. <a href="../luyen-tap/?item=THPT-G11-CHVI-B19-P05">Làm lại câu B19-P05</a>.

    ### 1.5. Lôgarit thập phân: đọc số mũ trong thang đo

    Lôgarit thập phân \(\lg M=\log_{10}M\) biến nhân 10 thành tăng 1 đơn vị lôgarit. Trong mô hình hóa học thường dùng \(\mathrm{pH}=-\lg c\) với \(c\gt 0\) là giá trị số của nồng độ ion hydrogen theo mol/L; dấu trừ làm nồng độ nhỏ tương ứng pH lớn hơn.

    **Vận dụng — Tự thử trước Core.** Theo mô hình trên, nếu \(c=10^{-5}\) mol/L, tính pH. Nếu nồng độ giảm 100 lần, pH thay đổi bao nhiêu?

    <span data-ped-first-try="5" data-outcome-id="G11-B19-LOG_APPLICATION" data-thpt-first-try-id="THPT-G11-B19-TRY05" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(\mathrm{pH}=-(-5)=5\). Sau giảm 100 lần, \(c'=10^{-7}\) và pH mới là 7, tăng 2 đơn vị. Đây là tính toán theo mô hình đã cho.

    <span data-thpt-help-id="HELP-G11-B19-TRY05" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Cho rằng giảm nồng độ làm pH giảm cùng tỷ lệ.

        **Tự sửa:** Đổi nồng độ thành lũy thừa 10; chú ý dấu trừ. <a href="../luyen-tap/?item=THPT-G11-CHVI-B19-P06">Làm lại câu B19-P06</a>.

    ### 1.6. Số e, lôgarit tự nhiên và tăng trưởng liên tục

    Nếu chia mỗi năm thành \(m\) kỳ nhập lãi, mô hình số tiền sau \(t\) năm là \(P(1+r/m)^{mt}\). Khi số kỳ chia tăng không giới hạn, số tiền tiến đến \(Pe^{rt}\). Đây là một mô hình **lãi kép liên tục**, khác cập nhật cuối từng kỳ. Lấy lôgarit tự nhiên \(\ln\) giúp tìm \(t\).

    **Vận dụng — Tự thử trước Core.** Mô hình liên tục \(A(t)=300e^{0{,}04t}\) (triệu đồng, t tính bằng năm). Viết thời gian đạt 600 triệu dưới dạng chính xác và gần đúng đến một chữ số thập phân.

    <span data-ped-first-try="6" data-outcome-id="G11-B19-LOG_APPLICATION" data-thpt-first-try-id="THPT-G11-B19-TRY06" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(e^{0{,}04t}=2\), nên \(t=\ln 2/0{,}04\approx17{,}3\) năm. Vì cho phép thời gian thực trong mô hình, không tự làm tròn lên số năm nguyên.

    <span data-thpt-help-id="HELP-G11-B19-TRY06" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Dùng số lần nhân nguyên cho mô hình thời gian liên tục.

        **Tự sửa:** Phân biệt cập nhật theo kỳ với công thức liên tục; ghi đơn vị của t. <a href="../luyen-tap/?item=THPT-G11-CHVI-B19-P06">Làm lại câu B19-P06</a>.

=== "Kiến thức SGK"

    ### 2.1. Khái niệm lôgarit

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa.</strong> Với \(a\gt 0,\ a\ne1,\ M\gt 0\), lôgarit cơ số a của M là số thực \(\alpha\) duy nhất thỏa
    \[
    \alpha=\log_a M\Longleftrightarrow a^\alpha=M.
    \]
    </div>
    
    Nếu \(a=1\), mọi số mũ cho 1 nên không tìm được số mũ duy nhất; cơ số không dương không cho định nghĩa mũ thực chung; đối số không dương không là giá trị của lũy thừa cơ số dương.
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất trực tiếp.</strong> Với cơ số và đối số hợp lệ:
    \[
    \log_a1=0,\quad\log_a a=1,\quad a^{\log_a M}=M,\quad \log_a(a^u)=u\ (u\in\mathbb R).
    \]
    </div>

    ### 2.2. Tính chất của lôgarit

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Quy tắc tính.</strong> Với \(a\gt 0,a\ne1,M,N\gt 0,\ r\in\mathbb R\):
    \[
    \log_a(MN)=\log_a M+\log_a N,\quad
    \log_a(M/N)=\log_a M-\log_a N,
    \]
    \[
    \log_a(M^r)=r\log_a M.
    \]
    </div>
    
    Đặt \(M=a^u,N=a^v\) để suy các quy tắc từ luật số mũ. Muốn tách logarit của tích hay thương, phải kiểm từng thừa số/đối số dương; nếu chứa \(\log_a(x^2)\) với \(x\ne0\), có thể viết \(2\log_a|x|\), không viết \(2\log_a x\) khi x âm. Không có luật \(\log_a(M+N)=\log_a M+\log_a N\).
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Đổi cơ số.</strong> Với \(a,c\gt 0,\ a,c\ne1,\ M\gt 0\):
    \[
    \log_a M=\frac{\log_c M}{\log_c a}.
    \]
    </div>
    
    Hệ quả: \(\log_a c=1/\log_c a\); với \(r\ne0\), \(\log_{a^r} M=(1/r)\log_a M\).

    ### 2.3. Lôgarit thập phân và lôgarit tự nhiên

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Hai cơ số thường dùng.</strong> \(\lg M=\log_{10}M\) (cũng viết \(\log M\) theo quy ước thập phân); \(\ln M=\log_e M\), \(M\gt 0\), trong đó \(e=\lim_{x\to+\infty}(1+1/x)^x\approx2{,}71828\).</div>
    
    **Lãi kép liên tục:** chia năm thành \(m\) kỳ với lãi suất năm \(r\gt 0\), \(P(1+r/m)^{mt}\to Pe^{rt}\) khi \(m\to+\infty\) (mô hình cho \(t\ge0\)). Khi biết mức \(A\gt P\), có thể tìm \(t=\ln(A/P)/r\). Công thức này không đồng nhất với lãi kép cuối từng năm.
    
    **Máy tính:** tính \(\log_a M\) bằng đổi cơ số \(\ln M/\ln a\) hoặc phím log cơ số tùy máy. Nhập đầy đủ ngoặc, kiểm miền, làm tròn ở bước cuối. Ví dụ \(\log_3 11\approx2{,}1827\).

=== "Ví dụ"

    ### 3.1. Đọc số mũ âm

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B19-R02-01"><p><strong>Đề bài:</strong> Tính \(\log_6(1/216)\).</p><p><strong>Phân tích:</strong> Nhận ra đối số là lũy thừa nguyên của 6.</p><p><strong>Lời giải:</strong> \(216=6^3\), nên \(1/216=6^{-3}\) và logarit bằng \(-3\).</p><p><strong>Kiểm lại:</strong> Lấy 6 nâng lên -3 đúng bằng đối số.</p></div>

    ### 3.2. Điều kiện với bình phương

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B19-R02-02"><p><strong>Đề bài:</strong> Tìm tập xác định của \(\log_4((x-2)^2)\) và viết biểu thức theo logarit của trị tuyệt đối.</p><p><strong>Phân tích:</strong> Đối số phải dương, bình phương bằng 0 đúng khi x=2.</p><p><strong>Lời giải:</strong> Miền \(\mathbb R\setminus\{2\}\). Vì \(|x-2|\gt 0\), \(\log_4((x-2)^2)=2\log_4|x-2|\).</p><p><strong>Kiểm lại:</strong> Với \(x<2\), lôgarit của \(x-2\) không có nghĩa nhưng lôgarit của \(|x-2|\) có nghĩa.</p></div>

    ### 3.3. Gộp thương và tích

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B19-R02-03"><p><strong>Đề bài:</strong> Tính \(\log_3 54-\log_3 2+\log_3 9\).</p><p><strong>Phân tích:</strong> Các đối số dương cho phép gộp.</p><p><strong>Lời giải:</strong> \(=\log_3(54\cdot9/2)=\log_3 243=5\).</p><p><strong>Kiểm lại:</strong> \(3^5=243\); đúng chiều tính ngược.</p></div>

    ### 3.4. Đổi cơ số và tính gần đúng

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B19-R02-04"><p><strong>Đề bài:</strong> Tính \(\log_7 13\) đến ba chữ số thập phân.</p><p><strong>Phân tích:</strong> 7 và 13 dương, 7 khác 1; dùng cơ số e.</p><p><strong>Lời giải:</strong> \(\log_7 13=\ln13/\ln7\approx1{,}318\).</p><p><strong>Kiểm lại:</strong> Vì \(7<13<49\), kết quả nằm giữa \(1\) và \(2\).</p></div>

    ### 3.5. Ứng dụng thang lôgarit thập phân

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B19-R02-05"><p><strong>Đề bài:</strong> Theo \(\mathrm{pH}=-\lg c\), một mẫu có pH=4,5. Viết giá trị nồng độ \(c\) dưới dạng lũy thừa của 10.</p><p><strong>Phân tích:</strong> Đưa logarit về số mũ; c phải dương.</p><p><strong>Lời giải:</strong> \(\lg c=-4{,}5\), nên \(c=10^{-4{,}5}\) mol/L.</p><p><strong>Kiểm lại:</strong> Thế ngược vào công thức pH cho 4,5.</p></div>

    ### 3.6. Thời gian trong mô hình liên tục

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B19-R02-06"><p><strong>Đề bài:</strong> Một mô hình lượng chất tăng \(Q(t)=60e^{0{,}08t}\), t tính bằng giờ. Khi nào đạt 180 đơn vị?</p><p><strong>Phân tích:</strong> Chia theo mức đầu và lấy ln vì cơ số e.</p><p><strong>Lời giải:</strong> \(e^{0{,}08t}=3\) nên \(t=\ln3/0{,}08\approx13{,}73\) giờ.</p><p><strong>Kiểm lại:</strong> Thế giá trị chính xác cho Q(t)=180; không kết luận đây là số giờ nguyên.</p></div>

=== "Lỗi thường gặp"

    <span data-thpt-help-id="HELP-G11-CHVI-B19-01" hidden></span>

    ??? tip "4.1. Nhầm lôgarit với phép chia hoặc căn"

        **Vì sao sai:** Logarit trả về số mũ trong a^x=M.

        **Tự sửa:** Chuyển về lũy thừa rồi thế ngược. <a href="../luyen-tap/?item=THPT-G11-CHVI-B19-C01">Làm lại câu B19-C01</a>.

    <span data-thpt-help-id="HELP-G11-CHVI-B19-02" hidden></span>

    ??? tip "4.2. Tách logarit khi các đối số riêng âm"

        **Vì sao sai:** Tích dương chưa đảm bảo mỗi thừa số dương.

        **Tự sửa:** Lập bảng dấu từng biểu thức ở mục 2.2. <a href="../luyen-tap/?item=THPT-G11-CHVI-B19-P04">Làm lại câu B19-P04</a>.

    <span data-thpt-help-id="HELP-G11-B19-03" hidden></span>

    ??? tip "4.3. Dùng công thức tích cho tổng"

        **Vì sao sai:** Logarit chỉ biến tích thành cộng, không biến tổng thành cộng.

        **Tự sửa:** Thử M=N=1, so log_a2 với 0. <a href="../luyen-tap/?item=THPT-G11-CHVI-B19-P02">Làm lại câu B19-P02</a>.

    <span data-thpt-help-id="HELP-G11-B19-04" hidden></span>

    ??? tip "4.4. Đổi sai cơ số hoặc lẫn ln với lg"

        **Vì sao sai:** Mẫu đổi cơ số là logarit của cơ số a; ln cơ số e, lg cơ số 10.

        **Tự sửa:** Viết công thức đổi cơ số trước khi bấm máy. <a href="../luyen-tap/?item=THPT-G11-CHVI-B19-P05">Làm lại câu B19-P05</a>.

    **Học tiếp:** <a href="../luyen-tap/">Core và Luyện tập</a> · <a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a> · <a href="../../../../thu-vien/tu-luan-g11-chuong-vi/">Tự luận Chương VI</a>.

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập hai, Bài 19 (trang in 10–15).</p>

## REVIEW SOURCE B19 END

---

## REVIEW SOURCE B20 BEGIN · 8f12059944f99c8665c2521418b6d7f07ae33ed6

# Bài 20. Hàm số mũ và hàm số lôgarit

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VI · SGK KNTT TẬP 2</p><p class="thpt-r4-lead">Đọc đồ thị để hiểu miền xác định, tập giá trị, tính liên tục và chiều biến thiên của hai hàm ngược nhau.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương VI</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Đã biết lũy thừa và lôgarit ở Bài 18–19. Khi thời gian thay đổi, đại lượng tăng theo hệ số cố định có thể được mô tả bằng hàm số mũ. Nếu biết đại lượng muốn đạt và muốn tìm thời gian, ta dùng hàm số lôgarit. Vì thế cần biết toàn bộ quan hệ giữa đầu vào và đầu ra, chứ không chỉ tính một giá trị.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVI-B20-01_R00.svg" alt="Đồ thị hàm mũ cơ số 2 và logarit cơ số 2 đối xứng qua y=x"><figcaption>Đọc hình: đường mũ \(y=2^x\) có điểm \((0;1)\), đường logarit \(y=\log_2x\) có điểm \((1;0)\). Hoán đổi tọa độ từng điểm để chuyển qua hàm ngược; đường nét đứt \(y=x\) là trục đối xứng. Đường mũ luôn ở phía trên trục hoành, đường logarit ở bên phải trục tung.</figcaption></figure>

    ### 1.1. Biến nằm ở số mũ

    So sánh \(3^x\) với \(x^3\): trong biểu thức thứ nhất cơ số không đổi và biến ở số mũ; biểu thức thứ hai là lũy thừa của biến. Với \(a\gt 0,a\ne1\), \(a^x\) xác định cho mọi x thực và luôn dương.

    **Vận dụng — Tự thử trước Core.** Hàm \(y=4^x\) có thể nhận giá trị 0 hoặc -1 không? Tính giá trị tại \(x=-1,0,1\).

    <span data-ped-first-try="1" data-outcome-id="G11-B20-EXP_FUNCTION" data-thpt-first-try-id="THPT-G11-B20-TRY01" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Không, vì \(4^x\gt 0\) với mọi x thực. Ba giá trị lần lượt là \(1/4,1,4\). Cơ số dương cho phép cả mũ âm lẫn mũ không nguyên.

    <span data-thpt-help-id="HELP-G11-B20-TRY01" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Tưởng mũ âm làm kết quả âm.

        **Tự sửa:** Tính ba điểm mốc và kiểm miền giá trị ở mục 2.1. <a href="../luyen-tap/?item=THPT-G11-CHVI-B20-C01">Làm lại câu B20-C01</a>.

    ### 1.2. Hai cơ số ở hai phía của 1 dẫn tới hai chiều biến thiên

    Mỗi lần tăng x thêm 1, giá trị \(a^x\) được nhân a. Với \(a\gt 1\), nhân a làm số dương tăng; với \(0\lt a\lt 1\), nó giảm. Quy tắc so sánh lũy thừa ở Bài 18 mở rộng điều này cho mọi x thực.

    **Vận dụng — Tự thử trước Core.** Không dùng máy tính, so sánh \((2/3)^{\sqrt2}\) và \((2/3)^2\).

    <span data-ped-first-try="2" data-outcome-id="G11-B20-EXP_MONOTONIC" data-thpt-first-try-id="THPT-G11-B20-TRY02" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Vì \(0\lt 2/3\lt 1\), hàm số mũ nghịch biến. \(\sqrt2\lt 2\) nên \((2/3)^{\sqrt2}\gt (2/3)^2=4/9\).

    <span data-thpt-help-id="HELP-G11-B20-TRY02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Chỉ so số mũ rồi giữ chiều bất kể cơ số.

        **Tự sửa:** Xác định a lớn hay nhỏ hơn 1 trước, đối chiếu mục 2.1. <a href="../luyen-tap/?item=THPT-G11-CHVI-B20-C02">Làm lại câu B20-C02</a>.

    ### 1.3. Logarit chỉ tiếp nhận đầu vào dương

    Với \(y=\log_a x\), ta hiểu \(a^y=x\). Mọi \(a^y\) dương, nên không nhận x bằng 0 hoặc âm. Nếu đầu vào logarit là một biểu thức, phải tìm nơi biểu thức đó dương chứ không luôn yêu cầu x>0.

    **Vận dụng — Tự thử trước Core.** Tìm tập xác định của \(f(x)=\log_4(7-2x)\).

    <span data-ped-first-try="3" data-outcome-id="G11-B20-LOG_FUNCTION" data-thpt-first-try-id="THPT-G11-B20-TRY03" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Cơ số 4 hợp lệ. \(7-2x\gt 0\) tương đương \(x\lt 7/2\). Tập xác định là \((-\infty,7/2)\). Không thêm x>0 vì đối số là 7-2x.

    <span data-thpt-help-id="HELP-G11-B20-TRY03" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Nhầm điều kiện biến x dương với điều kiện đối số dương.

        **Tự sửa:** Viết đúng đối số trên giấy rồi giải bất phương trình của nó. <a href="../luyen-tap/?item=THPT-G11-CHVI-B20-C03">Làm lại câu B20-C03</a>.

    ### 1.4. Chiều biến thiên của hàm lôgarit

    Hàm lôgarit đi ngược hàm mũ; nếu cơ số lớn hơn 1, đầu vào lớn hơn ứng với số mũ lớn hơn. Nếu cơ số giữa 0 và 1, đầu vào lớn hơn lại ứng với số mũ nhỏ hơn.

    **Vận dụng — Tự thử trước Core.** So sánh \(\log_{1/3} 2\) và \(\log_{1/3} 7\), không tính gần đúng.

    <span data-ped-first-try="4" data-outcome-id="G11-B20-LOG_MONOTONIC" data-thpt-first-try-id="THPT-G11-B20-TRY04" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Hai đối số đều dương. Vì \(2\lt 7\) và cơ số \(1/3\) nằm giữa 0 và 1, hàm nghịch biến, nên \(\log_{1/3}2\gt \log_{1/3}7\).

    <span data-thpt-help-id="HELP-G11-B20-TRY04" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Tưởng mọi hàm logarit đều đồng biến.

        **Tự sửa:** Kiểm cơ số và miền trước khi so; ôn mục 2.2. <a href="../luyen-tap/?item=THPT-G11-CHVI-B20-P03">Làm lại câu B20-P03</a>.

    ### 1.5. Hàm ngược: đổi đầu vào và đầu ra

    Từ \(a^u=v\) suy ra \(\log_a v=u\). Vì vậy điểm \((u;v)\) của đồ thị mũ ứng với \((v;u)\) trên đồ thị logarit. Đây là phép hoán đổi, không phải đổi dấu hai tọa độ.

    **Vận dụng — Tự thử trước Core.** Đồ thị \(y=5^x\) chứa điểm \((-2;1/25)\). Hãy chỉ ra điểm tương ứng trên đồ thị \(y=\log_5x\), rồi kiểm bằng định nghĩa.

    <span data-ped-first-try="5" data-outcome-id="G11-B20-INVERSE_GRAPH" data-thpt-first-try-id="THPT-G11-B20-TRY05" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Điểm tương ứng là \((1/25;-2)\). Vì \(5^{-2}=1/25\), \(\log_5(1/25)=-2\). Đầu vào logarit dương đúng điều kiện.

    <span data-thpt-help-id="HELP-G11-B20-TRY05" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Đổi dấu tọa độ thay vì hoán đổi chúng.

        **Tự sửa:** Viết a^u=v rồi viết log_a v=u, kiểm hai điểm theo thứ tự. <a href="../luyen-tap/?item=THPT-G11-CHVI-B20-C04">Làm lại câu B20-C04</a>.

=== "Kiến thức SGK"

    ### 2.1. Hàm số mũ

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa.</strong> Với \(a\gt 0,a\ne1\), hàm số \(y=a^x\) gọi là hàm số mũ cơ số a.</div>
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất.</strong> Tập xác định \(\mathbb R\), tập giá trị \((0,+\infty)\); liên tục trên \(\mathbb R\); đồng biến khi \(a\gt 1\), nghịch biến khi \(0\lt a\lt 1\). Đồ thị qua \((0;1),(1;a)\), luôn nằm phía trên trục hoành.</div>
    
    Để vẽ đồ thị, lập bảng các x như \(-2,-1,0,1,2\), tính a^x rồi biểu diễn điểm và nối thành đường cong theo tính liên tục/biến thiên. Với \(a\gt 1\), đồ thị tiến sát \(y=0\) khi \(x\to-\infty\); với \(0\lt a\lt 1\), tiến sát khi \(x\to+\infty\). Đồ thị không cắt trục hoành.
    
    | \(x\) | -2 | -1 | 0 | 1 | 2 |
    | --- | ---: | ---: | ---: | ---: | ---: |
    | \(3^x\) | \(1/9\) | \(1/3\) | 1 | 3 | 9 |
    | \((1/3)^x\) | 9 | 3 | 1 | \(1/3\) | \(1/9\) |
    
    Đọc bảng từ trái sang phải để thấy mẫu tăng/giảm. Không nối các điểm bằng đoạn thẳng và gọi đó là đồ thị chính xác.

    ### 2.2. Hàm số lôgarit

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa.</strong> Với \(a\gt 0,a\ne1\), hàm số \(y=\log_a x\) là hàm lôgarit cơ số a.</div>
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất.</strong> Tập xác định \((0,+\infty)\), tập giá trị \(\mathbb R\); liên tục trên \((0,+\infty)\); đồng biến nếu \(a\gt 1\), nghịch biến nếu \(0\lt a\lt 1\). Đồ thị qua \((1;0),(a;1)\), luôn nằm bên phải trục tung.</div>
    
    Lập bảng từ \(x=a^k\) với một số k nguyên, giá trị \(y=k\). Khi \(x\to0^+\), đồ thị tiến sát đường thẳng \(x=0\), với \(a\gt 1\) thì y tiến về \(-\infty\), với \(0\lt a\lt 1\) thì y tiến về \(+\infty\).
    
    | \(x\) | \(1/9\) | \(1/3\) | 1 | 3 | 9 |
    | --- | ---: | ---: | ---: | ---: | ---: |
    | \(\log_3 x\) | -2 | -1 | 0 | 1 | 2 |
    | \(\log_{1/3} x\) | 2 | 1 | 0 | -1 | -2 |
    
    **Liên hệ hai hàm:** \(y=a^x\) và \(y=\log_a x\) là hai hàm ngược, đối xứng qua \(y=x\). Các tọa độ hoán đổi, miền xác định của hàm này là tập giá trị của hàm kia. Với biểu thức logarit có đối số \(g(x)\), phải kiểm \(g(x)\gt 0\) trước khi áp dụng tính chất.

=== "Ví dụ"

    ### 3.1. Phân biệt hàm mũ và lũy thừa của biến

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B20-R02-01"><p><strong>Đề bài:</strong> Trong \(y=7^x\) và \(y=x^7\), đâu là hàm số mũ? Nêu miền và tập giá trị của hàm mũ.</p><p><strong>Phân tích:</strong> Cơ số cố định, biến ở số mũ mới là hàm mũ.</p><p><strong>Lời giải:</strong> \(y=7^x\) là hàm mũ, xác định trên \(\mathbb R\), nhận mọi giá trị dương; đồng biến, qua \((0;1)\) và \((1;7)\). \(x^7\) là hàm lũy thừa của biến.</p><p><strong>Kiểm lại:</strong> \(x^7\) có thể âm, nên không gán tập giá trị dương của hàm mũ cho nó.</p></div>

    ### 3.2. Lập điểm để vẽ một hàm mũ giảm

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B20-R02-02"><p><strong>Đề bài:</strong> Phác đồ thị \(y=(1/4)^x\) bằng năm điểm ứng với x=-2,-1,0,1,2.</p><p><strong>Phân tích:</strong> Tính giá trị, xác định chiều trước khi vẽ.</p><p><strong>Lời giải:</strong> Các tung độ là \(16,4,1,1/4,1/16\). Đồ thị đi qua năm điểm đó, là đường liên tục giảm, ở trên trục hoành và tiến sát trục hoành về bên phải.</p><p><strong>Kiểm lại:</strong> Kiểm điểm (0;1) và mỗi bước sang phải chia 4; hai đầu không tự nối thẳng.</p></div>

    ### 3.3. Tìm miền xác định có căn và logarit

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B20-R02-03"><p><strong>Đề bài:</strong> Tìm miền xác định của \(y=\ln(16-x^2)\).</p><p><strong>Phân tích:</strong> Logarit tự nhiên có cơ số e hợp lệ; đối số phải thật sự dương.</p><p><strong>Lời giải:</strong> \(16-x^2\gt 0\) tương đương \(-4\lt x\lt 4\), nên \(D=(-4,4)\).</p><p><strong>Kiểm lại:</strong> Không lấy ±4 vì tại đó đối số bằng 0.</p></div>

    ### 3.4. Lập điểm để vẽ một hàm logarit giảm

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B20-R02-04"><p><strong>Đề bài:</strong> Phác đồ thị \(y=\log_{1/4}x\) từ các đầu vào \(1/16,1/4,1,4,16\).</p><p><strong>Phân tích:</strong> Viết từng đầu vào là lũy thừa của 1/4.</p><p><strong>Lời giải:</strong> Các giá trị lần lượt \(2,1,0,-1,-2\). Đồ thị liên tục giảm trên x>0, qua (1;0),(1/4;1); tiến sát trục tung khi x tiến về 0 từ bên phải.</p><p><strong>Kiểm lại:</strong> Không vẽ điểm ở x=0 hoặc x âm.</p></div>

    ### 3.5. Đọc quan hệ ngược

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B20-R02-05"><p><strong>Đề bài:</strong> Đồ thị \(y=4^x\) có điểm \((3/2;8)\). Hãy tìm điểm trên đồ thị \(y=\log_4x\).</p><p><strong>Phân tích:</strong> Hoán đổi hai vai trò, không lấy nghịch đảo tọa độ.</p><p><strong>Lời giải:</strong> \(4^{3/2}=8\) nên \(\log_4 8=3/2\); điểm cần tìm là \((8;3/2)\).</p><p><strong>Kiểm lại:</strong> Hai điểm đối xứng qua y=x.</p></div>

    ### 3.6. Mô hình suy giảm và thời điểm đạt một mức

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B20-R02-06"><p><strong>Đề bài:</strong> Khối lượng một chất theo mô hình \(Q(t)=160(1/2)^{t/6}\) gam, \(t\ge0\) tính bằng giờ. Tính Q(12), rồi tìm t khi Q(t)=20.</p><p><strong>Phân tích:</strong> Số mũ t/6 là số chu kỳ bán rã; dùng mũ để tính lượng và logarit để tìm thời gian.</p><p><strong>Lời giải:</strong> \(Q(12)=160/4=40\) gam. Khi \(Q(t)=20\), \((1/2)^{t/6}=1/8=(1/2)^3\), vậy \(t=18\) giờ.</p><p><strong>Kiểm lại:</strong> Q giảm nghiêm ngặt nên chỉ có một thời điểm này trên miền mô hình.</p></div>

=== "Lỗi thường gặp"

    <span data-thpt-help-id="HELP-G11-CHVI-B20-01" hidden></span>

    ??? tip "4.1. Cho rằng mọi hàm mũ đều tăng"

        **Vì sao sai:** Cơ số giữa 0 và 1 làm giá trị giảm khi số mũ tăng.

        **Tự sửa:** Ôn bảng ở mục 2.1 và thử hai số mũ khác nhau. <a href="../luyen-tap/?item=THPT-G11-CHVI-B20-C02">Làm lại câu B20-C02</a>.

    <span data-thpt-help-id="HELP-G11-CHVI-B20-02" hidden></span>

    ??? tip "4.2. Đọc đồ thị hàm ngược thành đổi dấu"

        **Vì sao sai:** Hàm mũ và logarit hoán đổi đầu vào, đầu ra, không đổi dấu.

        **Tự sửa:** Dùng đẳng thức a^u=v, rồi log_a v=u. <a href="../luyen-tap/?item=THPT-G11-CHVI-B20-C04">Làm lại câu B20-C04</a>.

    <span data-thpt-help-id="HELP-G11-B20-03" hidden></span>

    ??? tip "4.3. Cho rằng logarit nhận mọi x thực"

        **Vì sao sai:** Đối số logarit phải dương; logarit có thể âm nhưng không nhận đối số âm.

        **Tự sửa:** Giải điều kiện của đối số, ôn mục 2.2. <a href="../luyen-tap/?item=THPT-G11-CHVI-B20-C03">Làm lại câu B20-C03</a>.

    <span data-thpt-help-id="HELP-G11-B20-04" hidden></span>

    ??? tip "4.4. Đoán điểm và chiều của đồ thị"

        **Vì sao sai:** Phải dùng điểm mốc đúng và tính đơn điệu theo cơ số.

        **Tự sửa:** Kiểm (0;1) cho hàm mũ, (1;0) cho logarit rồi lập bảng. <a href="../luyen-tap/?item=THPT-G11-CHVI-B20-P03">Làm lại câu B20-P03</a>.

    **Học tiếp:** <a href="../luyen-tap/">Core và Luyện tập</a> · <a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a> · <a href="../../../../thu-vien/tu-luan-g11-chuong-vi/">Tự luận Chương VI</a>.

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập hai, Bài 20 (trang in 16–19).</p>

## REVIEW SOURCE B20 END

---

## REVIEW SOURCE B21 BEGIN · 922d5fddc8131f5d999abfbfd610cdfb78a8083a

# Bài 21. Phương trình, bất phương trình mũ và lôgarit

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VI · SGK KNTT TẬP 2</p><p class="thpt-r4-lead">Giải bài toán tìm số mũ và vượt ngưỡng bằng tính đơn ánh, chiều biến thiên, điều kiện xác định và kiểm nghiệm.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương VI</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Khi biết số dư muốn đạt, tuổi của một vật theo mô hình suy giảm hoặc mức áp suất cần đạt, ta thường phải tìm biến nằm trong số mũ hoặc lôgarit. Bài 20 cho biết hàm nào tăng, hàm nào giảm, giải thích tại sao khi so sánh có lúc phải đảo chiều. Điều kiện xác định là bước đầu tiên, không phải ghi chú cuối bài.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVI-B21-01_R00.svg" alt="Hai đồ thị hàm mũ cơ số 2 và 1/2 biểu diễn chiều tăng và giảm"><figcaption>Đọc hình: khi cùng tăng hoành độ, \(y=2^x\) tăng nhưng \(y=(1/2)^x\) giảm; cả hai đi qua \((0;1)\) và luôn dương. Với hai số mũ khác nhau, nhìn chiều của đường cong để dự đoán thứ tự tung độ trước khi áp dụng bất đẳng thức.</figcaption></figure>

    ### 1.1. Phương trình mũ: tìm số mũ từ giá trị dương

    Một hàm mũ cơ số dương khác 1 nhận mỗi giá trị dương đúng một lần, vì tăng hoặc giảm nghiêm ngặt. Nếu hai vế đưa được về cùng cơ số hợp lệ, ta so số mũ; nếu không, dùng lôgarit. Vế phải không dương không thể bằng một lũy thừa cơ số dương.

    **Vận dụng — Tự thử trước Core.** Giải \(4^{x-2}=32\).

    <span data-ped-first-try="1" data-outcome-id="G11-B21-EXP_EQUATION" data-thpt-first-try-id="THPT-G11-B21-TRY01" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Đưa về cơ số 2: \(2^{2x-4}=2^5\). Vì \(2\gt 1\), hai số mũ bằng nhau: \(2x-4=5\), suy ra \(x=9/2\). Thế lại \(4^{5/2}=32\).

    <span data-thpt-help-id="HELP-G11-B21-TRY01" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Chia hai vế như một phương trình bậc nhất hoặc chỉ so hệ số.

        **Tự sửa:** Đưa cùng cơ số, tìm số mũ bằng tính đơn ánh. <a href="../luyen-tap/?item=THPT-G11-CHVI-B21-C01">Làm lại câu B21-C01</a>.

    ### 1.2. Phương trình lôgarit: điều kiện rồi đổi về lũy thừa

    \(\log_a U(x)=b\) có nghĩa khi \(a\gt 0,a\ne1,U(x)\gt 0\). Từ định nghĩa, điều đó tương đương \(U(x)=a^b\); giá trị a^b dương, nhưng vẫn phải kiểm miền của mọi biểu thức ban đầu.

    **Vận dụng — Tự thử trước Core.** Giải \(\log_5(2x+3)=-1\), kèm điều kiện xác định.

    <span data-ped-first-try="2" data-outcome-id="G11-B21-LOG_EQUATION" data-thpt-first-try-id="THPT-G11-B21-TRY02" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Điều kiện \(x\gt -3/2\). Đổi về lũy thừa: \(2x+3=1/5\), suy ra \(2x=-14/5\), \(x=-7/5\). Nghiệm thỏa điều kiện vì \(2x+3=1/5\gt 0\).

    <span data-thpt-help-id="HELP-G11-B21-TRY02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Bỏ điều kiện hoặc coi số mũ âm là đối số âm.

        **Tự sửa:** Tìm miền, đổi logarit sang lũy thừa rồi kiểm lại. <a href="../luyen-tap/?item=THPT-G11-CHVI-B21-C02">Làm lại câu B21-C02</a>.

    ### 1.3. Bất phương trình mũ và cơ số nhỏ hơn 1

    Khi so hai giá trị mũ cùng cơ số, cơ số lớn hơn 1 giữ thứ tự số mũ; cơ số trong (0,1) đảo thứ tự. Nếu so với một số không dương, dùng ngay tính dương của hàm mũ thay vì lấy lôgarit của số đó.

    **Vận dụng — Tự thử trước Core.** Giải \((1/5)^{3x+1}\ge(1/5)^7\). Vì sao dấu phải đảo?

    <span data-ped-first-try="3" data-outcome-id="G11-B21-EXP_INEQUALITY" data-thpt-first-try-id="THPT-G11-B21-TRY03" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Cơ số \(1/5\) thuộc (0,1) nên hàm nghịch biến. Bất phương trình tương đương \(3x+1\le7\), tức \(x\le2\). Dấu bằng vẫn được nhận vì đề cho \(\ge\).

    <span data-thpt-help-id="HELP-G11-B21-TRY03" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Giữ chiều như trường hợp cơ số lớn hơn 1.

        **Tự sửa:** Viết ngay bên cạnh cơ số chữ 'giảm', đảo chiều rồi kiểm điểm biên. <a href="../luyen-tap/?item=THPT-G11-CHVI-B21-P03">Làm lại câu B21-P03</a>.

    ### 1.4. Bất phương trình lôgarit: kết hợp miền và chiều

    Với cơ số \(0\lt a\lt 1\), \(\log_a U\gt \log_a V\) khi \(0\lt U\lt V\). Việc đảo chiều chỉ do hàm nghịch biến; tính dương của cả hai đối số vẫn là điều kiện bắt buộc.

    **Vận dụng — Tự thử trước Core.** Giải \(\log_{1/5}(3-x)\ge\log_{1/5}2\).

    <span data-ped-first-try="4" data-outcome-id="G11-B21-LOG_INEQUALITY" data-thpt-first-try-id="THPT-G11-B21-TRY04" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Điều kiện \(x\lt 3\). Cơ số \(1/5\lt 1\) nên \(3-x\le2\), tương đương \(x\ge1\). Giao điều kiện: \(x\in[1,3)\). Tại x=3, đối số bằng 0 nên bị loại.

    <span data-thpt-help-id="HELP-G11-B21-TRY04" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Chỉ giải bất đẳng thức mới mà quên giao miền logarit.

        **Tự sửa:** Viết hai dòng điều kiện và nghiệm đại số, lấy giao sau cùng. <a href="../luyen-tap/?item=THPT-G11-CHVI-B21-P04">Làm lại câu B21-P04</a>.

    ### 1.5. Điều kiện giao của nhiều đối số: nghiệm ngoại lai

    Hai logarit có thể chứa các biểu thức khác nhau. Phải tìm giao miền của tất cả logarit trước khi bỏ ký hiệu log; một nghiệm của phương trình đối số bằng nhau không tự động là nghiệm của phương trình ban đầu.

    **Vận dụng — Tự thử trước Core.** Giải \(\log_7(x-1)=\log_7(5-x)\). Sau đó giải cùng dạng nhưng thay 5-x bằng \(1-x\).

    <span data-ped-first-try="5" data-outcome-id="G11-B21-DOMAIN_CHECK" data-thpt-first-try-id="THPT-G11-B21-TRY05" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Trường hợp đầu: \(1\lt x\lt 5\), phương trình tương đương \(x-1=5-x\) nên \(x=3\), hợp lệ. Trường hợp sau cần \(x\gt 1\) đồng thời \(x\lt 1\), không có x, nên vô nghiệm trước khi biến đổi đại số.

    <span data-thpt-help-id="HELP-G11-B21-TRY05" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Giải hai đối số bằng nhau kể cả khi không tồn tại miền chung.

        **Tự sửa:** Lập giao điều kiện dương; nếu rỗng, dừng và kết luận vô nghiệm. <a href="../luyen-tap/?item=THPT-G11-CHVI-B21-P05">Làm lại câu B21-P05</a>.

    ### 1.6. Vượt ngưỡng khác vừa đạt ngưỡng

    Một mức tăng theo kỳ có thể được mô tả bằng \(P(n)=P_0(1+r)^n\) với n nguyên không âm. Nếu n là số kỳ cập nhật, nghiệm số thực của phương trình chỉ cho ngưỡng toán học; phải chọn đúng số kỳ nguyên theo dấu > hoặc ≥.

    **Vận dụng — Tự thử trước Core.** Vốn 50 triệu tăng 20% cuối mỗi năm, nhập lãi và không phí. Năm đầu tiên số dư vượt 72 triệu là năm nào?

    <span data-ped-first-try="6" data-outcome-id="G11-B21-REAL_CONTEXT" data-thpt-first-try-id="THPT-G11-B21-TRY06" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(50(1{,}2)^n\gt 72\) tương đương \(1{,}2^n\gt 1{,}44=(1{,}2)^2\). Vì cơ số lớn hơn 1, \(n\gt 2\); n nguyên không âm nên năm đầu vượt là \(n=3\). Sau 2 năm chỉ bằng 72 triệu.

    <span data-thpt-help-id="HELP-G11-B21-TRY06" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Làm tròn ngưỡng 2 thành năm đạt mục tiêu dù hỏi vượt.

        **Tự sửa:** Ghi dấu strict >, n nguyên; kiểm năm ngay trước và năm đã chọn. <a href="../luyen-tap/?item=THPT-G11-CHVI-B21-P06">Làm lại câu B21-P06</a>.

=== "Kiến thức SGK"

    ### 2.1. Phương trình mũ

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Phương trình cơ bản.</strong> \(a^x=b\) với \(a\gt 0,a\ne1\). Nếu \(b\gt 0\), có nghiệm duy nhất \(x=\log_a b\); nếu \(b\le0\), vô nghiệm.</div>
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Phương pháp đưa về cùng cơ số.</strong> Với \(a\gt 0,a\ne1\),
    \[
    a^{u(x)}=a^{v(x)}\Longleftrightarrow u(x)=v(x)
    \]
    trên miền các biểu thức xác định.</div>
    
    Nếu không đưa được cùng cơ số thuận tiện, cô lập lũy thừa và lấy logarit khi vế còn lại dương. Tính đơn ánh của hàm mũ là lý do biến đổi tương đương, không phải quy tắc hủy ký hiệu tùy ý.

    ### 2.2. Phương trình lôgarit

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Phương trình cơ bản.</strong> \(\log_a x=b\), \(a\gt 0,a\ne1,\ b\in\mathbb R\), có nghiệm duy nhất \(x=a^b\), luôn dương.</div>
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Đưa về cùng cơ số.</strong> Với \(u,v\gt 0,\ a\gt 0,a\ne1\), \(\log_a u=\log_a v\) tương đương \(u=v\).</div>
    
    **Quy trình:** tìm miền dương của từng đối số, sau đó biến đổi về dạng cơ bản bằng quy tắc logarit có điều kiện. Giải đại số và giao với miền gốc; thế lại nếu biến đổi có thể sinh nghiệm ngoại lai. Với \(\log_a u+\log_a v\), chỉ gộp thành logarit của tích trên miền \(u\gt 0,v\gt 0\).

    ### 2.3. Bất phương trình mũ

    Với \(a\gt 0,a\ne1\), các bất phương trình cơ bản có dạng \(a^x\gt b,\ a^x\ge b,\ a^x\lt b,\ a^x\le b\).
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất so sánh.</strong> Nếu \(a\gt 1\), \(a^u\gt a^v\Longleftrightarrow u\gt v\). Nếu \(0\lt a\lt 1\), \(a^u\gt a^v\Longleftrightarrow u\lt v\). Các dấu \(\ge,\lt ,\le\) được xử lý theo cùng nguyên lý.</div>
    
    Nếu \(b\gt 0\), đặt \(k=\log_a b\). Tập nghiệm của bốn dạng cơ bản:
    
    | Điều kiện | \(a^x\gt b\) | \(a^x\ge b\) | \(a^x\lt b\) | \(a^x\le b\) |
    | --- | --- | --- | --- | --- |
    | \(a\gt 1\) | \(x\gt k\) | \(x\ge k\) | \(x\lt k\) | \(x\le k\) |
    | \(0\lt a\lt 1\) | \(x\lt k\) | \(x\le k\) | \(x\gt k\) | \(x\ge k\) |
    
    Nếu \(b\le0\), \(a^x\gt 0\) nên hai dạng \(\gt ,\ge\) có nghiệm mọi x thực; hai dạng \(\lt ,\le\) vô nghiệm. Không lấy \(\log_a b\) trong trường hợp này. Với số mũ u(x), tiếp tục xét miền xác định của u.

    ### 2.4. Bất phương trình lôgarit

    Mọi bất phương trình \(\log_a x\gt b,\ge b,\lt b,\le b\) đều yêu cầu \(a\gt 0,a\ne1,x\gt 0\).
    
    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất.</strong> Với \(u,v\gt 0\), nếu \(a\gt 1\) thì \(\log_a u\gt \log_a v\Longleftrightarrow u\gt v\); nếu \(0\lt a\lt 1\) thì \(\log_a u\gt \log_a v\Longleftrightarrow u\lt v\). Đảo hoặc giữ chiều đồng thời bảo toàn điều kiện dương của các đối số.</div>
    
    Đặt \(k=a^b\gt 0\), ta có:
    
    | Điều kiện | \(\log_a x\gt b\) | \(\log_a x\ge b\) | \(\log_a x\lt b\) | \(\log_a x\le b\) |
    | --- | --- | --- | --- | --- |
    | \(a\gt 1\) | \(x\gt k\) | \(x\ge k\) | \(0\lt x\lt k\) | \(0\lt x\le k\) |
    | \(0\lt a\lt 1\) | \(0\lt x\lt k\) | \(0\lt x\le k\) | \(x\gt k\) | \(x\ge k\) |
    
    Với đối số chứa biến, thay x bằng biểu thức và giải cùng điều kiện miền gốc. Với mô hình thực tiễn, thêm điều kiện thời gian, đơn vị, dấu ngưỡng nghiêm ngặt và việc biến thời gian là thực hay nguyên. Không biến kết quả gần đúng thành kết luận nguyên mà chưa kiểm kỳ liền trước.

=== "Ví dụ"

    ### 3.1. Phương trình mũ không cùng cơ số dễ nhận

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B21-R02-01"><p><strong>Đề bài:</strong> Giải \(6^{2x-1}=11\).</p><p><strong>Phân tích:</strong> Vế phải dương nhưng không dễ viết thành lũy thừa nguyên của 6; lấy logarit cơ số 6.</p><p><strong>Lời giải:</strong> \(2x-1=\log_6 11\), suy ra \(x=(1+\log_6 11)/2\).</p><p><strong>Kiểm lại:</strong> Thế số mũ \(\log_6 11\) cho giá trị \(11\); nghiệm duy nhất vì hàm mũ cơ số \(6\) đơn ánh.</p></div>

    ### 3.2. Phương trình logarit ghép tích

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B21-R02-02"><p><strong>Đề bài:</strong> Giải \(\log_2(x-2)+\log_2(x+1)=2\).</p><p><strong>Phân tích:</strong> Tìm giao điều kiện rồi gộp tích.</p><p><strong>Lời giải:</strong> Điều kiện \(x\gt 2\). Khi đó \((x-2)(x+1)=4\), tức \(x^2-x-6=0\), có \(x=3,-2\). Chỉ \(x=3\) thỏa miền. Tập nghiệm \(\{3\}\).</p><p><strong>Kiểm lại:</strong> Tại 3, đối số 1 và 4 đều dương, tổng logarit bằng 0+2=2.</p></div>

    ### 3.3. Bất phương trình mũ với vế phải không dương

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B21-R02-03"><p><strong>Đề bài:</strong> Giải \(3^{2x+1}\le-2\) và \(3^{2x+1}\gt -2\).</p><p><strong>Phân tích:</strong> Dùng trực tiếp tính dương; không lấy logarit số âm.</p><p><strong>Lời giải:</strong> Vì \(3^{2x+1}\gt 0\) với mọi x thực, bất phương trình thứ nhất vô nghiệm; bất phương trình thứ hai có tập nghiệm \(\mathbb R\).</p><p><strong>Kiểm lại:</strong> Mọi giá trị đều dương nên luôn lớn hơn -2.</p></div>

    ### 3.4. Bất phương trình mũ giảm, có biên

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B21-R02-04"><p><strong>Đề bài:</strong> Giải \((1/4)^{2x-3}\lt (1/4)^{-1}\).</p><p><strong>Phân tích:</strong> Cơ số trong (0,1) nên đảo chiều khi so số mũ.</p><p><strong>Lời giải:</strong> \(2x-3\gt -1\) tương đương \(x\gt 1\). Tập nghiệm \((1,+\infty)\).</p><p><strong>Kiểm lại:</strong> Tại x=1 hai vế bằng nhau nên không lấy điểm biên.</p></div>

    ### 3.5. Bất phương trình lôgarit hai đối số

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B21-R02-05"><p><strong>Đề bài:</strong> Giải \(\log_{1/2}(x+4)\lt \log_{1/2}(2x-1)\).</p><p><strong>Phân tích:</strong> Hai đối số dương cho x>1/2; hàm giảm đảo chiều.</p><p><strong>Lời giải:</strong> \(x+4\gt 2x-1\), tức \(x\lt 5\). Giao miền được \((1/2,5)\).</p><p><strong>Kiểm lại:</strong> Tại \(x=1/2\), lôgarit thứ hai không xác định; tại \(x=5\), hai giá trị bằng nhau. Vì bất phương trình nghiêm ngặt, cả hai biên đều bị loại.</p></div>

    ### 3.6. Mô hình suy giảm giá trị

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B21-R02-06"><p><strong>Đề bài:</strong> Giá trị tài sản theo mô hình cuối năm \(V(n)=240(0{,}8)^n\) triệu đồng, n nguyên không âm. Năm đầu giá trị không quá 100 triệu là năm nào?</p><p><strong>Phân tích:</strong> Vì cơ số nhỏ hơn 1, bất phương trình đảo chiều. Phải kiểm số nguyên.</p><p><strong>Lời giải:</strong> Ta cần \((0{,}8)^n\le5/12\), tương đương \(n\ge \ln(5/12)/\ln(0{,}8)\approx3{,}923\). Năm đầu là n=4.</p><p><strong>Kiểm lại:</strong> \(V(3)=122{,}88>100\), còn \(V(4)=98{,}304\le100\) (triệu đồng). Vì giá trị giảm theo \(n\), năm \(4\) là năm nguyên đầu tiên đạt mức không quá \(100\) triệu.</p></div>

    ### 3.7. Ứng dụng lôgarit tự nhiên cho áp suất

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B21-R02-07"><p><strong>Đề bài:</strong> Một mô hình \(p(h)=100e^{-h/7}\) kPa, \(h\ge0\) tính bằng km. Tìm độ cao để áp suất không quá 60 kPa.</p><p><strong>Phân tích:</strong> Chuyển tỷ số về mũ hoặc logarit; thời gian/độ cao cho phép nhận số thực.</p><p><strong>Lời giải:</strong> \(e^{-h/7}\le0{,}6\), lấy ln tăng được \(-h/7\le\ln0{,}6\). Nhân với -7 đảo dấu: \(h\ge-7\ln0{,}6\approx3{,}576\) km.</p><p><strong>Kiểm lại:</strong> Thế ngưỡng chính xác cho 60 kPa; số gần đúng chỉ để diễn giải, không đổi tập nghiệm chính xác.</p></div>

    ### 3.8. Đưa hai cơ số nghịch đảo về cùng cơ số

    <div class="thpt-g10-example-solution" data-thpt-example-id="EX-G11-B21-R02-08"><p><strong>Đề bài:</strong> Giải \(\log_{1/2}(x+1)\ge\log_2(3-x)-\log_2 3\).</p><p><strong>Phân tích:</strong> Tìm giao điều kiện dương của hai đối số chứa biến. Dùng đổi cơ số ở Bài 19: \(\log_{1/2}u=-\log_2 u\) khi \(u\gt0\); quy về logarit cùng cơ số 2 để so sánh.</p><p><strong>Lời giải:</strong> Điều kiện \(-1\lt x\lt3\). Bất phương trình tương đương \(\log_2(x+1)+\log_2(3-x)\le\log_2 3\), rồi \((x+1)(3-x)\le3\) vì cơ số 2 lớn hơn 1. Khai triển được \(-x^2+2x+3\le3\), tức \(x(x-2)\ge0\). Nghiệm đại số là \(x\le0\) hoặc \(x\ge2\). Giao điều kiện, tập nghiệm là \((-1,0]\cup[2,3)\).</p><p><strong>Kiểm lại:</strong> Tại x=0 và x=2, tích hai đối số bằng 3 nên nhận dấu bằng. x=-1 và x=3 làm một đối số bằng 0, phải loại.</p></div>

=== "Lỗi thường gặp"

    <span data-thpt-help-id="HELP-G11-CHVI-B21-01" hidden></span>

    ??? tip "4.1. Bỏ điều kiện khi giải phương trình logarit"

        **Vì sao sai:** Mỗi đối số phải dương trước mọi phép bỏ log hoặc gộp tích.

        **Tự sửa:** Lập miền và giao nghiệm; ôn mục 2.2. <a href="../luyen-tap/?item=THPT-G11-CHVI-B21-P05">Làm lại câu B21-P05</a>.

    <span data-thpt-help-id="HELP-G11-CHVI-B21-02" hidden></span>

    ??? tip "4.2. Quên đảo chiều với cơ số trong (0,1)"

        **Vì sao sai:** Hàm mũ và logarit cơ số này đều nghịch biến.

        **Tự sửa:** Quan sát hình và kiểm chiều bằng hai số mũ cụ thể. <a href="../luyen-tap/?item=THPT-G11-CHVI-B21-P04">Làm lại câu B21-P04</a>.

    <span data-thpt-help-id="HELP-G11-B21-03" hidden></span>

    ??? tip "4.3. Lấy lôgarit của vế phải không dương"

        **Vì sao sai:** Giá trị lũy thừa cơ số dương luôn dương; phải phân loại vế phải.

        **Tự sửa:** Ôn mục 2.1, 2.3 và ví dụ 3.3. <a href="../luyen-tap/?item=THPT-G11-CHVI-B21-P07">Làm lại câu B21-P07</a>.

    <span data-thpt-help-id="HELP-G11-B21-04" hidden></span>

    ??? tip "4.4. Nhầm vừa đạt với vượt và bỏ miền nguyên"

        **Vì sao sai:** Một nghiệm ngưỡng thực không tự cho kỳ đầu vượt.

        **Tự sửa:** Ghi dấu > hoặc ≥; kiểm hai kỳ liền kề. <a href="../luyen-tap/?item=THPT-G11-CHVI-B21-P06">Làm lại câu B21-P06</a>.

    **Học tiếp:** <a href="../luyen-tap/">Core và Luyện tập</a> · <a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a> · <a href="../../../../thu-vien/tu-luan-g11-chuong-vi/">Tự luận Chương VI</a>.

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập hai, Bài 21 (trang in 20–24).</p>

## REVIEW SOURCE B21 END

---

## AUTHOR Q18 RECEIPT BEGIN · 015e5a58c1a90a7f1c3bc23c7b6f8a4a98d3696e

# G11 SGK Chapter VI B18–B21 R04 · Current author-self Q18 academic/PED receipt

PACKET_ID: G11-SGK-CHVI-B18-B21-R04
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.2.0
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
LEARNING_PATH: SGK_CHAPTER
RELEASE_SCOPE: FULL_LEARNING_PATH
SOURCE_PATH: prototypes/thpt/content-drafts/G11_CHVI_B18_B21_R04_CANONICAL_SOURCE_BUNDLE_LOCK_20261122.md
SOURCE_BLOB: be26ddd1e3e93ff250333e6f378cfffff83a8394
ACADEMIC_VERDICT: SELF_VERIFIED_ON_LOCKED_R04
PEDAGOGICAL_VERDICT: SELF_VERIFIED_ON_LOCKED_R04
INDEPENDENT_NOTEBOOKLM_NEW_R04: NOT_CLAIMED
HISTORICAL_INDEPENDENT_R01_SOURCE_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872
HISTORICAL_INDEPENDENT_R01_REVIEW_BLOB: 1badeeaf12462da1b0e2778213ce8a8dbf92e14b
P0: 0
P1: 0
P2: 0
PRIVATE_RD1_COUNT: 22
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
MASTERY_ACTIVATION: NO
RELEASE_AUTHORIZATION: NO

## Exact canonical source proof and S1

One SHA-lock bundle `be26ddd1e3e93ff250333e6f378cfffff83a8394` enumerates thirteen original current components, no second learner. Learner Git blobs: B18 `c2aa5bb21c9a6c7b0ba56eb7376f12ef5da75d4e`, B19 `8de2716f1e388f365d7cccc6bf4a421fcf7bfbac`, B20 `8f12059944f99c8665c2521418b6d7f07ae33ed6`, B21 `922d5fddc8131f5d999abfbfd610cdfb78a8083a`. Original 41 public formative JS blob `33cf4229baa63ac70b4ca1b640a5be8414ed54c1`, 8 Written/Anchor library blob `dba16473909e60d1dc186f41dfc2e270f06a104e` remain immutable. Historic original SGK Toán 11 KNTT tập hai PDF 114 pages SHA256 `14ec0da7fa3d7c7365ed7f64599fc1e26484eccf1557301c57012ae64338e491`; original SBT 126 pages SHA256 `a7c3d5ee9770377e16d7df97c531a2bc081fa47c8266fd4ad3438cba0d04e189`. Direct page-image source receipt previously signed at `prototypes/thpt/review-packets/G11_T2_OWNER_DRIVE_S1_PDF_VISUAL_SHA_RECEIPT_20261102.md`, and historical independently reviewed old R01 original source/reviewer remained SHA-specific. This turn read the original receipt and current four learner articles; public PDF URL returned too-large document, so **no fresh original publisher print-page visual rescan** and no current new NotebookLM review are claimed.

## Student-facing math, outcome and pedagogy audit

**B18 (five lesson outcomes):** Integers, even/odd roots, rational/irrational exponents, exponent laws and compound growth are explained concept-first. Six first tries and eight worked examples checked: `(3/7)^(-2)=49/9`, 5th root of -243=-3, `125^(-2/3)=1/25`, `9<3^(√5)<27`, power combine `t^(5/3)`, `200*(1.04)^3=224.9728` million, and scientific `0.00000036=3.6*10^(-7)`. Original even-root sign and a>0 caveats retained. Different-example arithmetic 80*1.03^4=90.0407048 and 32^(3/5)=8 checked.

**B19 (five lesson outcomes):** Logarithm is unique exponent; base a>0,a≠1, positive arguments. `log_5[(x+3)(x-4)]` permits x<-3 or x>4 but split into two real log terms only x>4. Base change `log_8 4=2/3`; pH=-lg c with c numerical mol/L model, c=10^-5 gives pH5, decrease c 100-fold gives pH7. Natural log for continuous model t=ln2/.04≈17.3yr. Six worked with distinct domains and correct log_7 13≈1.318123 and ln3/.08≈13.73265; all 6 first tries hidden and locally correctable.

**B20 (five lesson outcomes):** Exponential positive range and all-real domain; log positive-argument domain, monotonicity for bases <1 and >1; five TRY cover reversible coordinates `(-2;1/25) ↔ (1/25;-2)` for base5. Six worked include correct y=(1/4)^x declining table, log_{1/4}x declining table and decay 160*(1/2)^(t/6), Q(12)=40, Q(18)=20. Typography of `x^7` and graph coordinates restored to inline TeX on current learner source.

**B21 (six lesson outcomes; integrated outcome originally B21-P08):** Exponential/log equations preserve positive domains; decreasing base reverses inequalities, no log of nonpositive RHS, strict endpoints retained. `4^(x-2)=32` gives x=9/2; log_5(2x+3)=-1 gives x=-7/5 in x>-3/2; base1/5 example log_{1/5}(3-x)≥log_{1/5}2 gives [1,3); two-log disjoint domains yield no solution. Compound 50*(1.2)^n>72 gives first integer n=3 not 2. Eight worked: original model V(n)=240*(0.8)^n at n=3 is 122.88>100, at n=4 is **98.304≤100**, correctly restoring the previously broken printed operator `98{,}304le100`; continuous pressure model h≥-7ln0.6≈3.575779km and log inverse two-domain solution (-1,0]∪[2,3) checked. No original public question solutions/rubrics changed.

**QA executed on exact R04 learner Git blobs:** 4/4 four ordered Golden tabs; 23/23 distinct Knowledge FirstTry and 23 opt-in hidden compare (no unindented math), 23 matching local D6, 16 general prior help =39; 28/28 stable distinct worked example IDs (8/6/6/8), 4 original unchanged SVG and read cues; TeX delimiters balanced, no nonexistent Knowledge §2 references, no cloned original item/answers. 51 original Markdown relative links normalized to HTML anchors with href/label preserved, current B21 mathematical threshold corrected. Seven numerical expression spots rechecked in this pass. The 54 checks claimed in older candidate pre-R04 are historical and not silently declared rerun on current R04. This is math/PED/source QA, **not browser AP or independent academic reviewer**.

## ITEM_OUTCOME_ROLE_MATRIX — 72 distinct student teaching questions

Exactly 41 unchanged original public C/P/Application, 8 unchanged original Written/Anchor (shared library) and 23 source-owned unscored Knowledge FirstTry. Each teaching question has exactly one item ID. The 28 worked examples retain distinct source `data-thpt-example-id` identifiers, not treated as duplicate public exam items. `G11-CHVI-INTEGRATED` has original canonical B21-P08 and is not forged by reuse of public selfcheck.

| ITEM_ID | OUTCOME_ID | PLACEMENT | ROLE |
|---|---|---|---|
| THPT-G11-CHVI-B18-C01 | G11-B18-POWER_INTEGER | SGK_CORE | SGK_CORE |
| THPT-G11-CHVI-B18-C02 | G11-B18-POWER_RATIONAL | SGK_CORE | SGK_CORE |
| THPT-G11-CHVI-B18-C03 | G11-B18-POWER_INTEGER | SGK_CORE | SGK_CORE |
| THPT-G11-CHVI-B18-C04 | G11-B18-POWER_REAL | SGK_CORE | SGK_CORE |
| THPT-G11-CHVI-B18-C05 | G11-B18-POWER_RATIONAL | SGK_CORE | SGK_CORE |
| THPT-G11-CHVI-B18-P01 | G11-B18-POWER_LAWS | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVI-B18-P02 | G11-B18-POWER_RATIONAL | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVI-B18-P03 | G11-B18-POWER_RATIONAL | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVI-B18-P04 | G11-B18-POWER_LAWS | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVI-B18-P05 | G11-B18-GROWTH_MODEL | SGK_APPLICATION | SGK_APPLICATION |
| THPT-G11-CHVI-B18-P06 | G11-B18-POWER_LAWS | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVI-B18-P07 | G11-B18-POWER_INTEGER | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVI-B19-C01 | G11-B19-LOG_DEFINITION | SGK_CORE | SGK_CORE |
| THPT-G11-CHVI-B19-C02 | G11-B19-LOG_DEFINITION | SGK_CORE | SGK_CORE |
| THPT-G11-CHVI-B19-C03 | G11-B19-LOG_DOMAIN | SGK_CORE | SGK_CORE |
| THPT-G11-CHVI-B19-P01 | G11-B19-LOG_LAWS | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVI-B19-P02 | G11-B19-LOG_LAWS | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVI-B19-P03 | G11-B19-LOG_DEFINITION | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVI-B19-P04 | G11-B19-LOG_DOMAIN | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVI-B19-P05 | G11-B19-LOG_BASE_CHANGE | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVI-B19-P06 | G11-B19-LOG_APPLICATION | SGK_APPLICATION | SGK_APPLICATION |
| THPT-G11-CHVI-B20-C01 | G11-B20-EXP_FUNCTION | SGK_CORE | SGK_CORE |
| THPT-G11-CHVI-B20-C02 | G11-B20-EXP_MONOTONIC | SGK_CORE | SGK_CORE |
| THPT-G11-CHVI-B20-C03 | G11-B20-LOG_FUNCTION | SGK_CORE | SGK_CORE |
| THPT-G11-CHVI-B20-C04 | G11-B20-INVERSE_GRAPH | SGK_CORE | SGK_CORE |
| THPT-G11-CHVI-B20-P01 | G11-B20-LOG_FUNCTION | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVI-B20-P02 | G11-B20-EXP_MONOTONIC | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVI-B20-P03 | G11-B20-LOG_MONOTONIC | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVI-B20-P04 | G11-B20-INVERSE_GRAPH | SGK_APPLICATION | SGK_APPLICATION |
| THPT-G11-CHVI-B21-C01 | G11-B21-EXP_EQUATION | SGK_CORE | SGK_CORE |
| THPT-G11-CHVI-B21-C02 | G11-B21-LOG_EQUATION | SGK_CORE | SGK_CORE |
| THPT-G11-CHVI-B21-C03 | G11-B21-EXP_INEQUALITY | SGK_CORE | SGK_CORE |
| THPT-G11-CHVI-B21-C04 | G11-B21-LOG_INEQUALITY | SGK_CORE | SGK_CORE |
| THPT-G11-CHVI-B21-P01 | G11-B21-EXP_EQUATION | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVI-B21-P02 | G11-B21-LOG_EQUATION | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVI-B21-P03 | G11-B21-EXP_INEQUALITY | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVI-B21-P04 | G11-B21-LOG_INEQUALITY | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVI-B21-P05 | G11-B21-DOMAIN_CHECK | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVI-B21-P06 | G11-B21-REAL_CONTEXT | SGK_APPLICATION | SGK_APPLICATION |
| THPT-G11-CHVI-B21-P07 | G11-B21-EXP_EQUATION | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVI-B21-P08 | G11-CHVI-INTEGRATED | SGK_PRACTICE | SGK_PRACTICE |
| THPT-G11-CHVI-B18-W01 | G11-B18-POWER_LAWS | SGK_WRITTEN | WRITTEN |
| THPT-G11-CHVI-B18-W02-ANCHOR | G11-B18-GROWTH_MODEL | SGK_WRITTEN | ANCHOR_TAG |
| THPT-G11-CHVI-B19-W01 | G11-B19-LOG_DOMAIN | SGK_WRITTEN | WRITTEN |
| THPT-G11-CHVI-B19-W02-ANCHOR | G11-B19-LOG_LAWS | SGK_WRITTEN | ANCHOR_TAG |
| THPT-G11-CHVI-B20-W01 | G11-B20-INVERSE_GRAPH | SGK_WRITTEN | WRITTEN |
| THPT-G11-CHVI-B20-W02-ANCHOR | G11-B20-INVERSE_GRAPH | SGK_WRITTEN | ANCHOR_TAG |
| THPT-G11-CHVI-B21-W01 | G11-B21-DOMAIN_CHECK | SGK_WRITTEN | WRITTEN |
| THPT-G11-CHVI-B21-W02-ANCHOR | G11-B21-REAL_CONTEXT | SGK_WRITTEN | ANCHOR_TAG |
| THPT-G11-B18-TRY01 | G11-B18-POWER_INTEGER | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B18-TRY02 | G11-B18-POWER_RATIONAL | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B18-TRY03 | G11-B18-POWER_RATIONAL | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B18-TRY04 | G11-B18-POWER_REAL | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B18-TRY05 | G11-B18-POWER_LAWS | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B18-TRY06 | G11-B18-GROWTH_MODEL | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B19-TRY01 | G11-B19-LOG_DEFINITION | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B19-TRY02 | G11-B19-LOG_DOMAIN | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B19-TRY03 | G11-B19-LOG_LAWS | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B19-TRY04 | G11-B19-LOG_BASE_CHANGE | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B19-TRY05 | G11-B19-LOG_APPLICATION | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B19-TRY06 | G11-B19-LOG_APPLICATION | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B20-TRY01 | G11-B20-EXP_FUNCTION | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B20-TRY02 | G11-B20-EXP_MONOTONIC | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B20-TRY03 | G11-B20-LOG_FUNCTION | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B20-TRY04 | G11-B20-LOG_MONOTONIC | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B20-TRY05 | G11-B20-INVERSE_GRAPH | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B21-TRY01 | G11-B21-EXP_EQUATION | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B21-TRY02 | G11-B21-LOG_EQUATION | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B21-TRY03 | G11-B21-EXP_INEQUALITY | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B21-TRY04 | G11-B21-LOG_INEQUALITY | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B21-TRY05 | G11-B21-DOMAIN_CHECK | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |
| THPT-G11-B21-TRY06 | G11-B21-REAL_CONTEXT | SGK_KNOWLEDGE | UNSCORED_FIRST_TRY |

## QUALITY_Q01_Q18_EVIDENCE

One normative standard `SLM-THPT-QUALITY-ONE v3.2.0` at `prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md`, with D1–D6/PED1–PED6/A1–A7 all as evidence dimensions of the same Q criteria.

| Criterion | Current author source verdict | Factual evidence / limitation |
|---|---|---|
| Q01 | AUTHOR_SELF_VERIFIED | ChVI SGK/SBT KNTT T2 original owner direct PDF page/SHA receipt verified historically: SGK B18 pp4–9 B19 10–15 B20 16–19 B21 20–24 end25–26, SBT B18 4–7 B19 8–10 B20 11–15 B21 16–19 end20–23; no new publisher scan this pass |
| Q02 | AUTHOR_SELF_VERIFIED | 22 registered outcomes: five B18, five B19, five B20, six B21, one chapter integrated, 72 item/outcome/role mappings |
| Q03 | AUTHOR_SELF_VERIFIED | Complete D1 for integer/rational/real powers, logarithm base and argument, exponential/log domains and monotonicity, exp/log equations and inequalities with all exceptional cases |
| Q04 | AUTHOR_SELF_VERIFIED | 28 concept-reasoned examples 8+6+6+8 with mathematical method, solution and sign/domain check, correctly scoped one current learner source per lesson |
| Q05 | AUTHOR_SELF_VERIFIED | Original 41 canonical immutable public Core/Practice/Application question/answer/solution records, link back from Knowledge, no change in bank blob |
| Q06 | AUTHOR_SELF_VERIFIED | Eight immutable Written/Anchor questions with /4 rubric and original single shared library, Anchor only tag |
| Q07 | AUTHOR_SELF_VERIFIED | Four original preserved SVG figures with student-facing caption/read-figure prompts; no browser raster PASS claimed |
| Q08 | AUTHOR_SELF_VERIFIED | 23 targeted HELP for each FirstTry plus original 16 general HELP; cause→fix→return to original canonical item |
| Q09 | AUTHOR_SELF_VERIFIED | Motivation through compound interest, logarithmic pH model, inverse exponential/log graphs, decay and real/integer thresholds |
| Q10 | AUTHOR_SELF_VERIFIED | Prerequisites root parity, exponent laws, limits, function domain, reciprocal, inequalities, graphical increasing/decreasing |
| Q11 | AUTHOR_SELF_VERIFIED | Conceptual explanation of why extend exponents, log as the unique exponent, inverse functions before equations/formulas |
| Q12 | AUTHOR_SELF_VERIFIED | Figures decoded before applying geometric comparisons, inverse graph coordinate swap and decreasing-base inequality direction |
| Q13 | AUTHOR_SELF_VERIFIED | Check a>0 for real powers, positive log arguments/base ≠1, base less than 1 reversal, no log of nonpositive RHS, strict vs non-strict integer threshold |
| Q14 | AUTHOR_SELF_VERIFIED | 23 source-owned first tries precede original Core and have 23 voluntary hidden answers, none leaked through malformed indentation |
| Q15 | AUTHOR_SELF_VERIFIED | 41 old C/P/Application+8 old Written+23 new formative TRY =72 unique item IDs; worked examples are not duplicate item IDs |
| Q16 | AUTHOR_SELF_VERIFIED | 22 original private held-out RD1 owner-held not in public GitHub; 20 exposed end replay not independent readiness and no Mastery |
| Q17 | AUTHOR_SELF_VERIFIED | Single complete SGK learner journey distinct from self-contained Topic journey, original core/exercises/end and shared Written not replaced by topic links |
| Q18 | AUTHOR_SELF_VERIFIED | 13 exact component blob inventory, current signed AUTHOR_SELF_VERIFIED Q18 on three? actually four current learners, original frozen historical R01 review and S1 receipt preserved without inherited new independent PASS |

## Protect Q15/Q16 source/assessment and prior review

Private RD1: 22 original held-out independent owner-held questions are not on public GitHub, not in this packet and not included in NotebookLM Temp review; no private keys/rubrics/exposure. Original 20 public end replay questions are `CLIENT_SELF_CHECK_NO_MASTERY`, not official held-out `SGK_CHAPTER_READINESS`; student may compare answers only after public selfcheck submit, cannot generate Skill Mastery. Original bank/Written/answers and Golden shared runtime/Auth/Firebase/student records are unchanged. Historic independent Academic/PED v2.0 R01 PASS remains bound to original R01 source and original primary SGK/SBT receipt, not inherited as new R04 independent PASS.

## Signed author on exact source

AUTHOR_SIGNOFF: Q01_Q18_A1_A7_CURRENT_SOURCE_be26ddd1e3e93ff250333e6f378cfffff83a8394_AUTHOR_SELF_VERIFIED
P0_P1_AUTHORING: 0_0_IN_SCOPE
SOURCE_STATE: AUTHORING_PASS_ELIGIBLE_FOR_ONE_V2_READY_REGISTER
RELEASE_STATE: NOT_AUTHORIZED_NOT_DEPLOYED

## AUTHOR Q18 RECEIPT END
