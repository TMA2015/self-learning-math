# Bài 15. Giới hạn của dãy số

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG V</p><p class="thpt-r4-lead">Từ trực giác tiến gần đến định nghĩa giới hạn, giới hạn vô cực, phép toán có điều kiện và tổng cấp số nhân lùi vô hạn.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương V</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Khi \(n\) tăng mãi, dãy số có thể tiến về một số, tăng ra vô cực, hoặc dao động không tiến đến đâu. Ta cần **nói rõ thế nào là “tiến gần”**, và kiểm được điều kiện trước khi thay công thức. Kiến thức tiền đề: dãy số, công thức số hạng tổng quát và tổng cấp số nhân ở Chương II.

    ### 1.1. Vì sao một dãy không có số hạng cuối vẫn có thể có giới hạn?

    Dãy \(1,\frac12,\frac13,\ldots,\frac1n,\ldots\) không có “số hạng cuối”, nhưng mọi số hạng đều dương và càng về sau càng sát \(0\). Giới hạn diễn tả **xu hướng khi chỉ số tăng mãi**, không phải giá trị của một phần tử đặc biệt. Số \(0\) vẫn có thể là giới hạn dù không số hạng nào bằng \(0\).

    **Vận dụng — Tự thử trước Core.** Với \(u_n=4+\frac{3}{n}\), hãy dự đoán giới hạn và giải thích vì sao số hạng thứ \(n\) không cần bằng chính xác giới hạn ấy.

    <span data-ped-first-try="1" data-outcome-id="G11-B15-FINITE_SEQUENCE" data-thpt-first-try-id="THPT-G11-B15-TRY01" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Vì \(\frac3n\to0\) khi \(n\to+\infty\), ta có \(u_n\to4\). Với mỗi \(n\ge1\), \(u_n=4+3/n>4\), nên không có số hạng nào đúng bằng \(4\); điều này **không mâu thuẫn với hội tụ**.

    <span data-thpt-help-id="HELP-G11-B15-TRY01" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Cho rằng không có số hạng nào bằng 4 thì dãy không hội tụ.

        **Tự sửa:** Phân biệt *giới hạn* và *giá trị từng số hạng*. Đọc mục 2.1, thử Core B15-C01 và Practice B15-P02 ở <a href="../luyen-tap/">Luyện tập</a>.

    ### 1.2. Từ “ngày càng gần” đến điều kiện mọi số hạng về sau

    Để nói một dãy tiến về \(a\), ta phải đáp ứng **mọi** độ chính xác \(\varepsilon>0\): sẽ có một mốc \(N\) để **tất cả** \(n\ge N\) thỏa \(|u_n-a|<\varepsilon\). Chọn vài chỉ số có vẻ gần \(a\) chưa đủ. Với \(u_n=2+\frac1n\), khoảng cách tới 2 là \(1/n\); ta chủ động chọn \(N>1/\varepsilon\).

    **Vận dụng — Tự thử trước Core.** Với \(u_n=2+\frac1n\), cần chọn \(N\) như thế nào để mọi \(n\ge N\) có \(|u_n-2|<0{,}01\)? Nêu một giá trị \(N\) hợp lệ.

    <span data-ped-first-try="2" data-outcome-id="G11-B15-FINITE_SEQUENCE" data-thpt-first-try-id="THPT-G11-B15-TRY02" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Cần \(\frac1n<0{,}01\), tức \(n>100\). Chọn \(N=101\), khi đó mọi \(n\ge101\) đều thỏa \(|u_n-2|=1/n\le1/101<0{,}01\). Không lấy \(N=100\) vì tại \(n=100\) chỉ có **bằng** \(0{,}01\), không phải nhỏ hơn.

    <span data-thpt-help-id="HELP-G11-B15-TRY02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Chọn N=100 vì ở đó khoảng cách bằng chính mức cho phép 0,01.

        **Tự sửa:** Chú ý bất đẳng thức **nghiêm ngặt**; dùng (N=101). Ôn mục 2.1 và làm lại phép chọn N với ngưỡng 0,001 trước khi vào Core B15-C01.

    ### 1.3. Dao động không phải lúc nào cũng ngăn hội tụ

    Hai dãy \(a_n=(-1)^n\) và \(b_n=\frac{(-1)^n}{n}\) đều đổi dấu. Nhưng \(a_n\) cứ nhảy giữa \(-1\) và \(1\), trong khi \(|b_n|=1/n\to0\), nên \(b_n\to0\). Điều cần xem là **biên độ dao động có thu nhỏ** hay không, thay vì chỉ thấy có dấu trừ.

    **Vận dụng — Tự thử trước Core.** Hai dãy \(a_n=(-1)^n\) và \(b_n=(-1)^n/n\) có giới hạn hữu hạn không? Giải thích qua dãy con hoặc bất đẳng thức.

    <span data-ped-first-try="3" data-outcome-id="G11-B15-FINITE_SEQUENCE" data-thpt-first-try-id="THPT-G11-B15-TRY03" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Dãy \(a_n\) **không có giới hạn**: số hạng chẵn bằng \(1\), lẻ bằng \(-1\), hai dãy con không thể cùng tiến về một giá trị. Dãy \(b_n\) có \(-1/n\le b_n\le1/n\); hai biên tiến về 0 nên theo nguyên lí kẹp \(b_n\to0\).

    <span data-thpt-help-id="HELP-G11-B15-TRY03" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Kết luận cả hai đều không hội tụ chỉ vì các số hạng đổi dấu.

        **Tự sửa:** So sánh **độ lớn** của phần đổi dấu và thử hai dãy con chẵn/lẻ. Ôn 2.1 và Ví dụ 3.2; luyện Practice B15-P05 ở <a href="../luyen-tap/">Core và Luyện tập</a>.

    ### 1.4. Tiến ra vô cực khác hẳn tiến đến một số hữu hạn

    Kí hiệu \(u_n\to+\infty\) nói rằng với **mọi** mốc \(M>0\) ta có \(u_n>M\) với mọi \(n\) đủ lớn; \(u_n\to-\infty\) tương tự với \(u_n<-M\). \(+\infty\) và \(-\infty\) không phải hai số thực để thế trực tiếp vào biểu thức. Dãy \(n(-1)^n\) lớn về độ lớn nhưng đổi dấu, nên không tiến về \(+\infty\) hoặc \(-\infty\).

    **Vận dụng — Tự thử trước Core.** Cho \(u_n=-3n+7\). Dãy tiến về \(+\infty\), \(-\infty\) hay có giới hạn hữu hạn? Dựa vào dấu và bậc của \(n\).

    <span data-ped-first-try="4" data-outcome-id="G11-B15-INFINITE_SEQUENCE" data-thpt-first-try-id="THPT-G11-B15-TRY04" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Khi \(n\to+\infty\), \(-3n+7\) giảm không bị chặn dưới nên \(u_n\to-\infty\). Với mọi \(M>0\), chọn \(N>(M+7)/3\), khi đó \(n\ge N\) cho \(-3n+7<-M\).

    <span data-thpt-help-id="HELP-G11-B15-TRY04" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Thấy có số 7 dương rồi cho rằng dãy tiến tới +∞.

        **Tự sửa:** Nhìn **hạng tử trội (-3n)** và chứng minh bằng một mốc tùy lớn. Ôn mục 2.2 và Core B15-C02 ở <a href="../luyen-tap/">Luyện tập</a>.

    ### 1.5. Muốn dùng phép toán giới hạn, phải kiểm mẫu và dạng chưa xác định

    Khi \(u_n\to a\), \(v_n\to b\) là **hai giới hạn hữu hạn**, phép cộng/trừ/nhân cho giới hạn tương ứng. Phép chia chỉ được phép khi \(b\ne0\) và mẫu thực sự khác 0 từ một chỉ số đủ lớn. Nếu trực tiếp thấy dạng \(0/0\) hoặc \(\infty/\infty\), đó **không phải kết quả**, mà là dấu hiệu cần biến đổi, thường chia tử mẫu cho lũy thừa lớn nhất.

    **Vận dụng — Tự thử trước Core.** Tính \(\lim_{n\to+\infty}\frac{5n^2+3n}{2n^2+1}\). Vì sao không thể viết đơn giản “\(\infty/\infty=5/2\)”?

    <span data-ped-first-try="5" data-outcome-id="G11-B15-LIMIT_ARITHMETIC" data-thpt-first-try-id="THPT-G11-B15-TRY05" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Với \(n\ge1\), chia cả tử và mẫu cho \(n^2\):

        \[
        \frac{5n^2+3n}{2n^2+1}=\frac{5+3/n}{2+1/n^2}\to\frac52.
        \]

        Mẫu tiến tới \(2\ne0\), nên phép lấy thương hợp lệ **sau khi biến đổi**. Vô cực không phải số để chia.

    <span data-thpt-help-id="HELP-G11-B15-TRY05" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Rút gọn dạng \\(\infty/\infty\\) như phân số hoặc bỏ kiểm mẫu giới hạn khác 0.

        **Tự sửa:** Chia theo bậc (n) cao nhất rồi kiểm mẫu. Ôn mục 2.3, làm Practice B15-P01/P04 ở <a href="../luyen-tap/">Luyện tập</a>.

    ### 1.6. Vì sao một tổng có vô hạn số hạng vẫn hữu hạn?

    Tổng vô hạn không phải phép cộng “hết vô hạn lần” trên giấy. Ta tính **tổng riêng \(S_n\)** rồi xét \(\lim S_n\). Với cấp số nhân \(a+aq+aq^2+\cdots\), nếu \(|q|<1\) thì \(q^n\to0\) và \(S_n=a(1-q^n)/(1-q)\to a/(1-q)\). Khi \(|q|\ge1\), không dùng công thức này như một tổng hội tụ (trừ trường hợp tất cả số hạng bằng 0).

    **Vận dụng — Tự thử trước Core.** Tính tổng \(8-4+2-1+\cdots\) và giải thích công bội âm có làm mất khả năng hội tụ không.

    <span data-ped-first-try="6" data-outcome-id="G11-B15-GEOMETRIC_APPLICATION" data-thpt-first-try-id="THPT-G11-B15-TRY06" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Đây là cấp số nhân với \(a=8\), \(q=-1/2\), \(|q|=1/2<1\). Tổng bằng

        \[
        S=\frac{8}{1-(-1/2)}=\frac{16}{3}.
        \]

        Các tổng riêng dao động quanh \(16/3\) nhưng tiến gần giá trị ấy vì \(q^n\to0\). Dấu công bội âm **không ngăn hội tụ** khi \(|q|<1\).

    <span data-thpt-help-id="HELP-G11-B15-TRY06" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Không cho phép q âm hoặc dùng công thức vô hạn khi q=-2.

        **Tự sửa:** Kiểm **giá trị tuyệt đối (|q|<1)**, không chỉ (q<1). Ôn mục 2.4; luyện Core B15-C03 và Practice B15-P06/P07 tại <a href="../luyen-tap/">Core và Luyện tập</a>.

=== "Kiến thức SGK"

    ### 2.1. Giới hạn hữu hạn của dãy số

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khái niệm:</strong> \(\lim_{n\to+\infty}u_n=a\) nếu với mọi \(\varepsilon>0\) tồn tại số tự nhiên \(N\) để mọi \(n\ge N\) đều có \(|u_n-a|<\varepsilon\). Riêng \(a=0\), điều kiện là \(|u_n|<\varepsilon\). <strong>Giới hạn không yêu cầu số hạng nào bằng a.</strong></div>

    **Giới hạn cơ bản:** Với \(p>0\), \(\lim 1/n^p=0\). Nếu \(|q|<1\) thì \(\lim q^n=0\). Với \(u_n=(-1)^n/n\), có \(|u_n|\le1/n\), nên giới hạn bằng 0 nhờ nguyên lí kẹp.

    <figure class="thpt-r4-plot"><img src="../../../../../assets/images/thpt/FIG-G11-B15-01_R01.svg" loading="lazy" alt="Các điểm rời rạc u_n=1/n tiến sát trục hoành khi chỉ số n tăng, không có số hạng cuối"><figcaption>Đọc hình: mỗi điểm ứng với <strong>một chỉ số nguyên dương</strong>. Khoảng cách đến trục \(u_n=0\) giảm dần; không nối chấm thành đường liên tục hay kết luận có một “điểm cuối” bằng 0.</figcaption></figure>

    ### 2.2. Giới hạn vô cực và dãy không có giới hạn

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Vô cực:</strong> \(u_n\to+\infty\) nghĩa là với mọi \(M>0\), cuối cùng <strong>mọi</strong> \(u_n>M\). Tương tự \(u_n\to-\infty\) nếu cuối cùng \(u_n<-M\). Đây không phải giới hạn bằng một số thực. Một dãy có thể <strong>không có giới hạn</strong> kiểu nào, như \((-1)^n\) hoặc \(n(-1)^n\).</div>

    ### 2.3. Các phép toán giới hạn và phương pháp tính

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Phép toán:</strong> Nếu \(u_n\to a\), \(v_n\to b\) đều hữu hạn, thì \(u_n\pm v_n\to a\pm b\), \(u_nv_n\to ab\); thương \(u_n/v_n\to a/b\) khi \(b\ne0\) (và mẫu xác định đủ muộn).</div>

    **Chọn phương pháp:** Phân thức theo \(n\) → chia cho lũy thừa cao nhất của \(n\); căn → phân tích \(n^2\) và nhớ \(n>0\); biểu thức đổi dấu → xét trị tuyệt đối hoặc kẹp; dạng \(0/0,\infty/\infty\) là dấu hiệu cần biến đổi, **không phải phép chia hai “số vô cực”**.

    ### 2.4. Tổng cấp số nhân lùi vô hạn

    Xét các tổng riêng \(S_n=a+aq+\cdots+aq^{n-1}\). Với \(|q|<1\), \(q^n\to0\), nên \(S_n=a(1-q^n)/(1-q)\to a/(1-q)\).

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Công thức có điều kiện:</strong>
    \[
    S=a+aq+aq^2+\cdots=\frac{a}{1-q},\qquad |q|<1.
    \]
    Với \(|q|\ge1\) và \(a\ne0\), tổng các số hạng của cấp số nhân thường không hội tụ hữu hạn; không tự thay vào công thức trên. Đặc biệt \(q=-1\) làm các tổng riêng luân phiên.</div>

=== "Ví dụ"

    Mỗi ví dụ có đề, lý do chọn cách giải, các bước và điều kiện kiểm lại.

    ### 3.1. Giới hạn của một phân thức bậc nhất

    <div class="thpt-g10-example-solution">
    <p><strong>Đề bài:</strong> Tính \(\lim_{n\to\infty}\frac{3n+1}{n+4}\).</p>
    <p><strong>Chọn phương pháp:</strong> Cả tử, mẫu đều bậc nhất; chia cho \(n\) để lộ các giới hạn hữu hạn.</p>
    <p><strong>Lời giải:</strong> \(\frac{3+1/n}{1+4/n}\to3\).</p>
    <p><strong>Kiểm lại:</strong> Mẫu giới hạn \(1\ne0\), đúng điều kiện phép chia.</p>
    </div>

    ### 3.2. Đổi dấu nhưng biên độ thu về 0

    <div class="thpt-g10-example-solution">
    <p><strong>Đề bài:</strong> Chứng minh \(u_n=(-1)^n/(n+1)\to0\).</p>
    <p><strong>Chọn phương pháp:</strong> Không xét dấu riêng từng số; dùng bất đẳng thức kẹp.</p>
    <p><strong>Lời giải:</strong> \(-1/(n+1)\le u_n\le1/(n+1)\); cả hai biên tiến về 0, suy ra \(u_n\to0\).</p>
    <p><strong>Kiểm lại:</strong> Dãy không đơn điệu nhưng vẫn hội tụ.</p>
    </div>

    ### 3.3. Một giới hạn vô cực có dấu

    <div class="thpt-g10-example-solution">
    <p><strong>Đề bài:</strong> Xét \(u_n=2-5n\).</p>
    <p><strong>Chọn phương pháp:</strong> Hạng tử \(-5n\) quyết định khi \(n\) lớn.</p>
    <p><strong>Lời giải:</strong> Với bất kỳ \(M>0\), chọn \(N>(M+2)/5\). Khi \(n\ge N\), \(2-5n<-M\), nên \(\lim u_n=-\infty\).</p>
    <p><strong>Kiểm lại:</strong> Không viết \(-\infty\) như một số hạng của dãy.</p>
    </div>

    ### 3.4. Tổng của một cấp số nhân lùi vô hạn

    <div class="thpt-g10-example-solution">
    <p><strong>Đề bài:</strong> Tính \(5+5/4+5/16+\cdots\).</p>
    <p><strong>Chọn phương pháp:</strong> Kiểm đây là cấp số nhân \(|q|<1\) rồi xét tổng riêng.</p>
    <p><strong>Lời giải:</strong> \(a=5,q=1/4\), nên \(S=5/(1-1/4)=20/3\).</p>
    <p><strong>Kiểm lại:</strong> Tổng ba số đầu \(5+5/4+5/16=105/16\), nhỏ hơn \(20/3\), phù hợp vì các số hạng dương.</p>
    </div>

    ### 3.5. Quả bóng nảy: tổng các đoạn đi lên và đi xuống

    <div class="thpt-g10-example-solution">
    <p><strong>Đề bài:</strong> Quả bóng thả từ độ cao \(3\) m, sau mỗi lần chạm đất bật lên bằng nửa độ cao vừa rơi. Theo mô hình lý tưởng vô hạn, tổng quãng đường thẳng đứng là bao nhiêu?</p>
    <p><strong>Chọn phương pháp:</strong> Cú rơi đầu chỉ xảy ra <strong>một lần</strong>; mỗi độ cao bật lên sau đó được đi <strong>lên và xuống</strong>.</p>
    <p><strong>Lời giải:</strong> \(L=3+2(3/2+3/4+\cdots)=3+2\cdot(3/2)/(1-1/2)=9\) m.</p>
    <p><strong>Kiểm lại:</strong> Bỏ cú rơi đầu hoặc nhân đôi cú đầu đều đếm sai quãng đường; mô hình không khẳng định quả bóng thực nảy vô hạn.</p>
    </div>

    ### 3.6. Trường hợp công bội không hội tụ

    <div class="thpt-g10-example-solution">
    <p><strong>Đề bài:</strong> Có thể áp \(S=a/(1-q)\) cho \(2+2+2+\cdots\) không?</p>
    <p><strong>Chọn phương pháp:</strong> Kiểm điều kiện <strong>trước công thức</strong>.</p>
    <p><strong>Lời giải:</strong> \(a=2,q=1\), \(|q|=1\) không thỏa. Tổng riêng \(S_n=2n\to+\infty\), nên không có tổng vô hạn hữu hạn.</p>
    <p><strong>Kiểm lại:</strong> Thế \(q=1\) vào biểu thức sẽ chia cho \(0\), vô nghĩa.</p>
    </div>

=== "Lỗi thường gặp"

    Nếu sai một câu Tự thử, mở Kiểm lỗi tại câu đó rồi làm lại một bài Core/Practice khác số liệu.

    <span data-thpt-help-id="HELP-G11-B15-01" hidden></span>

    ??? tip "4.1. Nhầm giới hạn với một số hạng cuối"

        **Vì sao sai:** Nhầm giới hạn với một số hạng cuối làm mất điều kiện hoặc ý nghĩa của giới hạn.

        **Tự sửa:** Đọc lại mục 2.1, kiểm mọi số hạng (4+3/n>4) vẫn có giới hạn 4; quay về Core B15-C01.

    <span data-thpt-help-id="HELP-G11-B15-02" hidden></span>

    ??? tip "4.2. Ghi giới hạn khi chỉ một vài số hạng gần"

        **Vì sao sai:** Ghi giới hạn khi chỉ một vài số hạng gần làm mất điều kiện hoặc ý nghĩa của giới hạn.

        **Tự sửa:** Dùng đúng định nghĩa: **mọi** (nge N); thử sai số 0,01 và N=101 trong mục 1.2.

    <span data-thpt-help-id="HELP-G11-B15-03" hidden></span>

    ??? tip "4.3. Thấy dao động rồi loại mọi hội tụ"

        **Vì sao sai:** Thấy dao động rồi loại mọi hội tụ làm mất điều kiện hoặc ý nghĩa của giới hạn.

        **Tự sửa:** So ((-1)^n) với ((-1)^n/n) theo biên độ; ôn Ví dụ 3.2 và Practice B15-P05.

    <span data-thpt-help-id="HELP-G11-B15-04" hidden></span>

    ??? tip "4.4. Tự ý tính thương vô cực hoặc tổng hình học"

        **Vì sao sai:** Tự ý tính thương vô cực hoặc tổng hình học làm mất điều kiện hoặc ý nghĩa của giới hạn.

        **Tự sửa:** Kiểm mẫu có giới hạn khác \(0\); với cấp số nhân lùi vô hạn phải có \(|q|<1\). Ôn mục 2.3–2.4, luyện B15-P01/P06.

    **Học tiếp:** <a href="../luyen-tap/">Core và Luyện tập</a> · <a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a> · <a href="../../../../thu-vien/tu-luan-g11-chuong-v/">Tự luận Chương V</a>.

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập một, Bài 15 (trang in 104–110).</p>
