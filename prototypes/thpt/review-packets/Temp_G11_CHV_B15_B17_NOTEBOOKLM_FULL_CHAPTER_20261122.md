# Temp_ · G11 SGK Chapter V B15–B17 · Full-chapter independent NotebookLM review source

PACKET_ID: Temp_G11_CHV_B15_B17_R04_INDEPENDENT_REVIEW_20261122
ROLE: REVIEW_COPY_ONLY_NOT_LEARNER_CANONICAL
CANONICAL_BRANCH: authoring/sgk-g11-chv-b15-b17-r02-20261122
Q18_RECEIPT_PATH: prototypes/thpt/review-packets/G11_CHV_B15_B17_R04_AUTHOR_SELF_Q18_RECEIPT_20261122.md
Q18_RECEIPT_GIT_BLOB: dabd519988409821fd8752371024bb6b6e815285
SOURCE_KIND: NEW_DELTA_C_NOT_INDEPENDENTLY_REVIEWED
PRIOR_R02_R03_PASS: HISTORICAL_BLOBS_ONLY
RD1_EXPOSURE: NONE; NEVER INCLUDE PRIVATE_RD1
REVIEW_PROMPT_SENTENCES: 4

## Prompt gửi NotebookLM (4 câu)

1. Chỉ sử dụng đúng **5 Permanent Sources THPT v2.1** hiện hành cùng SGK/SBT KNTT S1 làm chuẩn đối chiếu; không dùng lại Permanent Sources v2.0 hoặc coi file Temp là nguồn học thuật thẩm quyền.
2. Phản biện **độc lập từng Bài 15, 16, 17 và từng outcome/FirstTry** theo một chuẩn Q01–Q18 (đặc biệt D1–D6, PED1–PED6), kiểm tính đúng đắn và điều kiện giới hạn, dấu tại vô cực, tính liên tục/IVT, cùng độ sâu tự học.
3. Trả Academic/PED verdict riêng theo bài, nêu P0/P1/P2 bằng **ID, trích đúng đoạn, chứng cứ S1 trang in**, và `MINIMAL_DELTA` có thể sửa mà vẫn bảo toàn ngân hàng gốc.
4. Ghi `SOURCE_RECEIPT` với **ba Git blob learner chính xác**, phân biệt đây là DELTA_C bản mới với R02/R03 PASS lịch sử và không tự cấp `CONTENT_READY` hay nghiệm thu RELEASE.

## Khóa nguồn và phân định bản học liệu

| Bài | Canonical path | Git blob đang review |
| --- | --- | --- |
| B15 | `docs/thpt-preview/sgk/lop-11/chuong-v/bai-15.md` | `f4065659173d27ef3999f1b0ee42ff2982701267` |
| B16 | `docs/thpt-preview/sgk/lop-11/chuong-v/bai-16.md` | `687bb852f1b8465527902ead7dfeae9858584171` |
| B17 | `docs/thpt-preview/sgk/lop-11/chuong-v/bai-17.md` | `f0e6996f97216742c4b571d92c357485043795e8` |

**Bản sao bên dưới chỉ phục vụ review; không được tạo learner source thứ hai hoặc sửa trực tiếp trong gói này.** Giữ verdict của snapshot cũ, review lại Delta-C bị ảnh hưởng cho bản SHA mới.


---

## REVIEW SOURCE B15 BEGIN · f4065659173d27ef3999f1b0ee42ff2982701267

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

## REVIEW SOURCE B15 END


---

## REVIEW SOURCE B16 BEGIN · 687bb852f1b8465527902ead7dfeae9858584171

# Bài 16. Giới hạn của hàm số

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG V</p><p class="thpt-r4-lead">Quan sát hành vi gần điểm trước khi tính: giới hạn hai phía/một phía, phương pháp khử dạng chưa xác định và giới hạn vô cực.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương V</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Ở Bài 15, khi chỉ số \(n\) tăng mãi thì dãy có thể tiến tới một số. Với **hàm số**, ta xét \(x\) tiến gần một điểm \(a\) (từ hai phía hoặc một phía) hoặc tiến ra vô cực. Giá trị **tại** \(a\) và xu hướng **gần** \(a\) có thể khác nhau. Cần nhớ phép phân tích đa thức, hằng đẳng thức và ý nghĩa của miền xác định.

    ### 1.1. Giới hạn tại điểm không nhất thiết là giá trị tại điểm

    Với \(f(x)=\frac{x^2-4}{x-2}\) chỉ xét \(x\ne2\), ta rút gọn thành \(x+2\). Ở gần \(2\), các giá trị tiến về **4** nhưng \(f(2)\) không có nghĩa. Giới hạn nói về những \(x\) **gần, khác điểm đang xét**; nó không đòi hàm phải được xác định tại điểm ấy. Cầu nối: giới hạn dãy số ở Bài 15 và các phép phân tích đa thức.

    **Vận dụng — Tự thử trước Core.** Hàm \(f(x)=\frac{x^2-9}{x-3}\) (\(x\ne3\)) có \(\lim_{x\to3}f(x)\) bằng bao nhiêu? \(f(3)\) có tồn tại không?

    <span data-ped-first-try="1" data-outcome-id="G11-B16-LIMIT_AT_POINT" data-thpt-first-try-id="THPT-G11-B16-TRY01" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Với \(x\ne3\), \((x^2-9)/(x-3)=x+3\). Vì vậy \(\lim_{x\to3}f(x)=6\). Tuy nhiên \(f(3)\) **không xác định**; rút gọn chỉ giữ giá trị khi \(x\ne3\), không tự tạo ra giá trị tại 3.

    <span data-thpt-help-id="HELP-G11-B16-TRY01" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Thế ngay x=3 thấy 0/0 rồi kết luận không có giới hạn.

        **Tự sửa:** Phân biệt miền xác định và xu hướng. Ôn mục 2.1; thử Core B16-C01, Practice B16-P02 trong <a href="../luyen-tap/">Luyện tập</a>.

    ### 1.2. Tại sao phải xét cả bên trái lẫn bên phải?

    Một con đường có thể có biển báo trước và sau mốc khác nhau. Với hàm \(f(x)=x+1\) khi \(x<0\) và \(f(x)=3-x\) khi \(x\ge0\), giới hạn trái tại 0 là **1**, giới hạn phải là **3**. Hai phía không đồng ý, nên không có giới hạn **hai phía hữu hạn**; giá trị \(f(0)=3\) không sửa được khác biệt ấy.

    **Vận dụng — Tự thử trước Core.** Với \(g(x)=2x+1\) khi \(x<1\), \(g(x)=x+2\) khi \(x\ge1\), hãy tính hai giới hạn một phía tại 1 và kết luận giới hạn hai phía.

    <span data-ped-first-try="2" data-outcome-id="G11-B16-ONE_SIDED" data-thpt-first-try-id="THPT-G11-B16-TRY02" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Khi \(x\to1^-\), \(g(x)=2x+1\to3\). Khi \(x\to1^+\), \(g(x)=x+2\to3\). Hai giới hạn hữu hạn **cùng bằng 3**, nên \(\lim_{x\to1}g(x)=3\); đồng thời \(g(1)=3\), dù điều cuối không phải điều kiện bắt buộc để giới hạn tồn tại.

    <span data-thpt-help-id="HELP-G11-B16-TRY02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Chỉ tính phía có dấu bằng trong công thức rồi coi đó là giới hạn hai phía.

        **Tự sửa:** Tính **riêng trái và phải** rồi so. Ôn mục 2.2, luyện Core B16-C02 và Practice B16-P03 tại <a href="../luyen-tap/">Luyện tập</a>.

    ### 1.3. Nhân liên hợp để biến dạng (0/0) thành phép tính hợp lệ

    Dạng \(0/0\) sau khi thay số **không phải giá trị giới hạn**. Với biểu thức căn \(\sqrt{x+4}-2\), nhân cả tử và mẫu với \(\sqrt{x+4}+2\) vì hai biểu thức liên hợp có tích bằng \(x\). Bước biến đổi chỉ đúng **khi mẫu và căn có nghĩa** trong miền đang xét, chẳng hạn \(x\ne0\), \(x\ge-4\).

    **Vận dụng — Tự thử trước Core.** Tính \(\lim_{x\to0}\frac{\sqrt{x+4}-2}{x}\). Hãy ghi rõ tại sao được rút gọn x.

    <span data-ped-first-try="3" data-outcome-id="G11-B16-ALGEBRAIC_TECHNIQUES" data-thpt-first-try-id="THPT-G11-B16-TRY03" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Với \(x\ne0\) đủ gần 0 và \(x\ge-4\),

        \[
        \frac{\sqrt{x+4}-2}{x}=\frac{(\sqrt{x+4}-2)(\sqrt{x+4}+2)}{x(\sqrt{x+4}+2)}=\frac1{\sqrt{x+4}+2}.
        \]

        Vậy giới hạn là \(1/(2+2)=\boxed{1/4}\). Chỉ rút gọn **với \(x\ne0\)**, không khẳng định phân thức gốc xác định tại 0.

    <span data-thpt-help-id="HELP-G11-B16-TRY03" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Lấy 0/0 bằng 0, hoặc nhân liên hợp nhưng quên nhân cả mẫu.

        **Tự sửa:** Viết hằng đẳng thức \((\sqrt A-b)(\sqrt A+b)=A-b^2\) với \(A\ge0\); ôn mục 2.3, luyện Practice B16-P01/P02.

    ### 1.4. Dấu của mẫu quyết định hướng giới hạn vô cực

    Khi tử tiến tới số dương khác 0 còn mẫu tiến tới 0, dấu của mẫu là then chốt. Ví dụ \(1/(x-2)\) tiến tới \(+\infty\) khi \(x\to2^+\) nhưng tới \(-\infty\) khi \(x\to2^-\). Vì vậy không được viết một “giới hạn bằng vô cực” hai phía nếu dấu không nhất quán.

    **Vận dụng — Tự thử trước Core.** Xét \(h(x)=\frac{x+1}{2-x}\). Hãy tìm xu hướng khi \(x\to2^-\) và khi \(x\to2^+\).

    <span data-ped-first-try="4" data-outcome-id="G11-B16-INFINITE_LIMIT" data-thpt-first-try-id="THPT-G11-B16-TRY04" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Tử \(x+1\to3>0\). Khi \(x\to2^-\), mẫu \(2-x>0\) rất nhỏ nên \(h(x)\to+\infty\); khi \(x\to2^+\), mẫu \(2-x<0\) rất nhỏ nên \(h(x)\to-\infty\). Hai phía khác nhau, không có giới hạn hai phía theo nghĩa thông thường.

    <span data-thpt-help-id="HELP-G11-B16-TRY04" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Bỏ dấu và ghi cả hai phía +∞, hoặc lấy trung bình hai vô cực.

        **Tự sửa:** Lập bảng dấu **tử/mẫu** cho từng phía, ôn mục 2.4; luyện Core B16-C03 và Practice B16-P06 tại <a href="../luyen-tap/">Core và Luyện tập</a>.

    ### 1.5. Ở (x	o-infty), vì sao (sqrt{x^2}=|x|) mà không phải x?

    Ta biết \(\sqrt{x^2}\) là căn bậc hai **không âm**, nên bằng \(|x|\). Khi \(x\) âm rất lớn về độ lớn, \(|x|=-x\). Đây là điểm quyết định dấu của các giới hạn có căn tại âm vô cực. Với phân thức hữu tỉ, hãy so bậc và chia cho lũy thừa trội; với căn, tách đúng \(|x|\).

    **Vận dụng — Tự thử trước Core.** Tính \(\lim_{x\to-\infty}\frac{\sqrt{x^2+9}}x\). Vì sao kết quả không phải \(1\)?

    <span data-ped-first-try="5" data-outcome-id="G11-B16-LIMIT_AT_INFINITY" data-thpt-first-try-id="THPT-G11-B16-TRY05" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Ta có

        \[
        \frac{\sqrt{x^2+9}}{x}=\frac{|x|}{x}\sqrt{1+\frac9{x^2}}.
        \]

        Khi \(x<0\), \(|x|/x=-1\). Thừa số căn tiến về 1 nên giới hạn là \(-1\), **không phải \(+1\)**.

    <span data-thpt-help-id="HELP-G11-B16-TRY05" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Rút (sqrt{x^2}=x) dù x âm.

        **Tự sửa:** Ghi rõ (|x|/x=-1) cho (x<0); ôn mục 2.4, luyện Practice B16-P04 và B16-P05 tại <a href="../luyen-tap/">Luyện tập</a>.

    ### 1.6. Một ngưỡng trong đời sống có thể tạo hai giới hạn khác nhau

    Một bãi gửi xe giả định tính phí \(10\) nghìn đồng khi \(0<t\le1\) giờ và \(20\) nghìn đồng khi \(t>1\). Giá đúng tại \(t=1\) là \(10\), nhưng trước và sau ngưỡng khách hàng thấy **hai xu hướng phí khác nhau**. Mô hình bước nhảy giúp phân biệt **giá tại ngưỡng** với **giới hạn**; đó không phải chỉ là kỹ thuật tính.

    **Vận dụng — Tự thử trước Core.** Với \(C(t)=10\) khi \(0<t\le1\), \(C(t)=20\) khi \(t>1\) (nghìn đồng), tính \(C(1)\), giới hạn trái và phải tại 1; có giới hạn hai phía không?

    <span data-ped-first-try="6" data-outcome-id="G11-B16-REAL_CONTEXT" data-thpt-first-try-id="THPT-G11-B16-TRY06" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Ta có \(C(1)=10\). Khi \(t\to1^-\), \(C(t)\to10\); khi \(t\to1^+\), \(C(t)\to20\). Do \(10\ne20\), **giới hạn hai phía tại 1 không tồn tại**, dù giá tại ngưỡng được xác định.

    <span data-thpt-help-id="HELP-G11-B16-TRY06" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Lấy trung bình 15 hoặc lấy C(1)=10 làm giới hạn hai phía.

        **Tự sửa:** Viết hai cột (t<1), (t>1), rồi so; ôn mục 2.2/2.4, luyện tình huống mô hình ở Practice B16-P07.

=== "Kiến thức SGK"

    ### 2.1. Giới hạn hữu hạn của hàm số tại một điểm

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Ý nghĩa:</strong> \(\lim_{x\to a}f(x)=L\) khi \(x\) thuộc miền xác định, <strong>khác \(a\)</strong> và tiến tới \(a\), thì \(f(x)\) tiến gần \(L\). Giới hạn phụ thuộc hành vi quanh điểm, <strong>không bắt buộc</strong> \(f(a)\) có nghĩa hoặc bằng \(L\).</div>

    **Chính xác hơn:** Điều kiện cần xem \(a\) là điểm có thể tiến gần từ các giá trị của miền xác định. Với mọi \(\varepsilon>0\) phải chọn được \(\delta>0\) để \(0<|x-a|<\delta\) (và \(x\) thuộc miền xác định) kéo theo \(|f(x)-L|<\varepsilon\). Khi chỉ có miền từ một phía, phải ghi rõ hướng tiến gần.

    <figure class="thpt-r4-plot"><img src="../../../../../assets/images/thpt/FIG-G11-B16-01_R01.svg" loading="lazy" alt="Đồ thị y=x+2 có lỗ rỗng tại tọa độ (2,4), thể hiện giới hạn bằng 4 dù hàm không xác định tại 2"><figcaption>Đọc hình: <strong>vòng tròn rỗng</strong> ở (2;4) chỉ hàm gốc không xác định tại điểm ấy; các điểm trên hai nhánh đường vẫn tiến gần mức 4. Không kết luận giới hạn không tồn tại chỉ vì có lỗ.</figcaption></figure>

    ### 2.2. Giới hạn một phía và điều kiện giới hạn hai phía

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Một phía:</strong> \(x\to a^-\) nghĩa là \(x<a\), \(x\to a^+\) nghĩa là \(x>a\). Khi miền xác định có điểm đủ gần ở <strong>cả hai phía</strong>, giới hạn hữu hạn hai phía \(\lim_{x\to a}f(x)=L\) tồn tại <strong>khi và chỉ khi</strong> hai giới hạn trái/phải đều bằng cùng \(L\).</div>

    **Không nhầm:** Hàm có thể có \(f(a)\) xác định nhưng vẫn không có giới hạn hai phía; ngược lại có thể có giới hạn nhưng \(f(a)\) không xác định. Giá trị tại ngưỡng cần xử lý riêng.

    ### 2.3. Phép toán và cách giải dạng \(0/0\)

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Điều kiện:</strong> Với các giới hạn hữu hạn, tổng/hiệu/tích tuân theo các phép toán thông thường; thương cần <strong>giới hạn mẫu khác 0</strong>. Nếu thay trực tiếp ra \(0/0\), cần <strong>biến đổi biểu thức đúng trên miền gần điểm</strong> (phân tích nhân tử, rút gọn khi \(x\ne a\), nhân liên hợp) rồi mới áp dụng quy tắc.</div>

    **Nhân liên hợp:** \((\sqrt A-\sqrt B)(\sqrt A+\sqrt B)=A-B\), với \(A,B\ge0\). Nhân cả tử và mẫu, kiểm mẫu mới khác 0 trong vùng đang xét. Không coi \(0/0\) là kết quả.

    ### 2.4. Giới hạn vô cực tại điểm và giới hạn ở vô cực

    Một hàm có thể tăng/giảm không bị chặn khi \(x\to a^-\) hoặc \(a^+\); ký hiệu \(+\infty,-\infty\) diễn tả xu hướng chứ không phải số thực để cộng/chia tùy tiện.

    Khi \(x\to\pm\infty\), ta phân tích bậc trội hoặc nhân liên hợp. **Bẫy dấu:** \(\sqrt{x^2}=|x|\). Khi \(x\to-\infty\), \(|x|=-x\), nên các giới hạn kiểu \(\sqrt{x^2+c}/x\) thường tiến đến \(-1\), không phải \(1\).

    **Ứng dụng:** Hàm bước phí gửi xe có giới hạn trái/phải khác nhau tại một ngưỡng; hàm hiệu suất \(100t/(t+5)\) tiến về mức 100 dù giá trị mô hình tại mọi \(t\) hữu hạn vẫn nhỏ hơn 100. Không dùng một điểm dữ liệu để suy cả xu hướng.

=== "Ví dụ"

    Mỗi Ví dụ nêu phương pháp trước, rồi giải và kiểm miền/điều kiện.

    ### 3.1. Khử dạng (0/0) bằng phân tích nhân tử

    <div class="thpt-g10-example-solution">
    <p><strong>Đề bài:</strong> Tính \(\lim_{x\to2}\frac{x^2-4}{x-2}\).</p>
    <p><strong>Chọn phương pháp:</strong> Thế trực tiếp ra \(0/0\), cần phân tích tử.</p>
    <p><strong>Lời giải:</strong> Với \(x\ne2\), \((x-2)(x+2)/(x-2)=x+2\), do đó giới hạn bằng \(4\).</p>
    <p><strong>Kiểm lại:</strong> Hàm gốc không xác định tại 2 nhưng tiến gần 4 khi \(x\) gần 2.</p>
    </div>

    ### 3.2. Hai phía có dấu mẫu trái nhau

    <div class="thpt-g10-example-solution">
    <p><strong>Đề bài:</strong> Tính \(\lim_{x\to1^-}1/(x-1)\) và \(\lim_{x\to1^+}1/(x-1)\).</p>
    <p><strong>Chọn phương pháp:</strong> Tử dương; dấu mẫu khác phía.</p>
    <p><strong>Lời giải:</strong> Bên trái mẫu âm rất nhỏ → \(-\infty\); bên phải mẫu dương rất nhỏ → \(+\infty\).</p>
    <p><strong>Kiểm lại:</strong> Không kết luận có giới hạn hai phía hữu hạn.</p>
    </div>

    ### 3.3. Giới hạn chứa căn ở dương vô cực

    <div class="thpt-g10-example-solution">
    <p><strong>Đề bài:</strong> Tính \(\lim_{x\to+\infty}(\sqrt{x^2+x}-x)\).</p>
    <p><strong>Chọn phương pháp:</strong> Hiệu hai số lớn gây dạng \(\infty-\infty\), dùng liên hợp.</p>
    <p><strong>Lời giải:</strong> \(\sqrt{x^2+x}-x=\frac{x}{\sqrt{x^2+x}+x}=\frac1{\sqrt{1+1/x}+1}\) khi \(x>0\) đủ lớn, nên giới hạn \(=1/2\).</p>
    <p><strong>Kiểm lại:</strong> \(x>0\) cho phép \(\sqrt{x^2}=x\).</p>
    </div>

    ### 3.4. Âm vô cực cần giữ đúng trị tuyệt đối

    <div class="thpt-g10-example-solution">
    <p><strong>Đề bài:</strong> Tính \(\lim_{x\to-\infty}\frac{\sqrt{x^2+1}}x\).</p>
    <p><strong>Chọn phương pháp:</strong> Tách \(|x|\), không tách x tùy tiện.</p>
    <p><strong>Lời giải:</strong> \(\frac{|x|}{x}\sqrt{1+1/x^2}\to(-1)\cdot1=-1\).</p>
    <p><strong>Kiểm lại:</strong> Biểu thức gốc âm với mọi \(x<0\) đủ xa, không thể có giới hạn \(+1\).</p>
    </div>

    ### 3.5. Hai phía khớp dù biểu thức thay đổi

    <div class="thpt-g10-example-solution">
    <p><strong>Đề bài:</strong> Cho \(f(x)=x^2\) nếu \(x\le2\), \(f(x)=3x-2\) nếu \(x>2\). Tìm \(\lim_{x\to2}f(x)\).</p>
    <p><strong>Chọn phương pháp:</strong> Xét trái và phải độc lập.</p>
    <p><strong>Lời giải:</strong> \(\lim_{x\to2^-}x^2=4\); \(\lim_{x\to2^+}(3x-2)=4\); nên giới hạn hai phía bằng \(4\).</p>
    <p><strong>Kiểm lại:</strong> Giá \(f(2)=4\) khớp nhưng không thay cho bước so hai phía.</p>
    </div>

    ### 3.6. Mô hình hiệu suất có mức bão hòa

    <div class="thpt-g10-example-solution">
    <p><strong>Đề bài:</strong> \(H(t)=\frac{100t}{t+5}\) với \(t\ge0\). Mức hiệu suất mô hình tiến đến đâu khi \(t\to+\infty\)?</p>
    <p><strong>Chọn phương pháp:</strong> Chia cả tử/mẫu cho t, kiểm miền t>0.</p>
    <p><strong>Lời giải:</strong> \(H(t)=100/(1+5/t)\to100\).</p>
    <p><strong>Kiểm lại:</strong> Với mọi \(t\ge0\), \(H(t)<100\) và tăng về mức 100; mô hình không bảo đảm thiết bị thực đạt đúng 100.</p>
    </div>

=== "Lỗi thường gặp"

    Mỗi sai lầm có hướng sửa liên kết về mạch lý thuyết và câu luyện tập khác số liệu.

    <span data-thpt-help-id="HELP-G11-B16-01" hidden></span>

    ??? tip "4.1. Nhầm giá trị tại điểm với giới hạn"

        **Vì sao sai:** Bỏ điều kiện hoặc hiểu sai ý nghĩa giới hạn.

        **Tự sửa:** Phân biệt (f(a)) và xu hướng (x	o a); ôn mục 2.1, giải Core B16-C01.

    <span data-thpt-help-id="HELP-G11-B16-02" hidden></span>

    ??? tip "4.2. Chỉ tính giới hạn từ một phía"

        **Vì sao sai:** Bỏ điều kiện hoặc hiểu sai ý nghĩa giới hạn.

        **Tự sửa:** Tách (x	o a^-) và (x	o a^+), so kết quả; ôn 2.2 và Practice B16-P03.

    <span data-thpt-help-id="HELP-G11-B16-03" hidden></span>

    ??? tip "4.3. Lấy (0/0) làm đáp số hoặc nhân liên hợp sai"

        **Vì sao sai:** Bỏ điều kiện hoặc hiểu sai ý nghĩa giới hạn.

        **Tự sửa:** Kiểm điều kiện \(x\ne a\) khi rút gọn quanh mốc lấy giới hạn; phân tích hoặc dùng liên hợp, rồi luyện B16-P01.

    <span data-thpt-help-id="HELP-G11-B16-04" hidden></span>

    ??? tip "4.4. Bỏ dấu của mẫu hoặc căn khi (x	o-infty)"

        **Vì sao sai:** Bỏ điều kiện hoặc hiểu sai ý nghĩa giới hạn.

        **Tự sửa:** Bảng dấu từng phía, (sqrt{x^2}=|x|); ôn mục 2.4, giải Practice B16-P04/P06.

    **Học tiếp:** <a href="../luyen-tap/">Core và Luyện tập</a> · <a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a> · <a href="../../../../thu-vien/tu-luan-g11-chuong-v/">Tự luận Chương V</a>.

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập một, Bài 16 (trang in 111–118).</p>

## REVIEW SOURCE B16 END


---

## REVIEW SOURCE B17 BEGIN · f0e6996f97216742c4b571d92c357485043795e8

# Bài 17. Hàm số liên tục

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG V</p><p class="thpt-r4-lead">Giá trị tại điểm phải khớp với giới hạn: kiểm liên tục tại điểm và trên đoạn, chọn đúng miền, vận dụng định lý tồn tại nghiệm.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương V</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav></div>

=== "Khám phá kiến thức"

    Ở Bài 16, một hàm có thể tiến đến một số khi \(x\) gần \(a\) nhưng có “lỗ” hoặc giá trị khác tại \(a\). **Liên tục** mô tả sự khớp giữa **giá trị tại điểm** và **giới hạn gần điểm**. Muốn học chắc, cần hiểu giới hạn trái/phải, miền xác định và cách đọc đồ thị trước khi dùng công thức.

    ### 1.1. Giới hạn khớp giá trị hàm: vì sao là liên tục?

    Ở Bài 16, hàm \(g(x)=\frac{x^2-1}{x-1}\) với \(x\ne1\) tiến đến \(2\) khi \(x\to1\), nhưng có “lỗ” tại \(x=1\). Nếu đặt \(g(1)=2\), lỗ được lấp đúng xu hướng; nếu đặt \(g(1)=0\), một điểm đơn lẻ lệch khỏi xu hướng. Tính **liên tục tại điểm** yêu cầu giá trị tại điểm có nghĩa, có giới hạn hữu hạn và **hai giá trị bằng nhau**.

    **Vận dụng — Tự thử trước Core.** Đặt \(f(x)=\frac{x^2-1}{x-1}\) khi \(x\ne1\) và \(f(1)=m\). Tìm \(m\) để f liên tục tại 1.

    <span data-ped-first-try="1" data-outcome-id="G11-B17-CONTINUITY_POINT" data-thpt-first-try-id="THPT-G11-B17-TRY01" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Với \(x\ne1\), \(f(x)=x+1\) nên \(\lim_{x\to1}f(x)=2\). Điều kiện liên tục là \(f(1)=m=2\). Nếu \(m\ne2\), giới hạn vẫn bằng 2 nhưng hàm **gián đoạn tại 1**.

    <span data-thpt-help-id="HELP-G11-B17-TRY01" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Chỉ thấy giới hạn bằng 2 rồi kết luận liên tục bất kể f(1).

        **Tự sửa:** Kiểm đủ ba bước: f(a) có nghĩa, giới hạn hữu hạn tồn tại, chúng bằng nhau. Ôn mục 2.1; luyện Core B17-C01/C02 ở <a href="../luyen-tap/">Luyện tập</a>.

    ### 1.2. Tại điểm nối của hàm từng đoạn, phải kiểm hai phía và giá trị thật

    Nếu quy tắc tính thay đổi tại \(x=a\), ta không thể tự dùng một công thức duy nhất. Hãy tính \(\lim_{x\to a^-}f(x)\), \(\lim_{x\to a^+}f(x)\), và \(f(a)\). Ba giá trị phải khớp mới liên tục. Câu hỏi “tham số bao nhiêu?” chính là bài toán **ép ba giá trị khớp**.

    **Vận dụng — Tự thử trước Core.** Cho \(f(x)=mx+1\) khi \(x<2\) và \(f(x)=x^2-1\) khi \(x\ge2\). Tìm \(m\) để f liên tục tại 2.

    <span data-ped-first-try="2" data-outcome-id="G11-B17-CONTINUITY_POINT" data-thpt-first-try-id="THPT-G11-B17-TRY02" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Giới hạn trái là \(2m+1\), giới hạn phải là \(2^2-1=3\); \(f(2)=3\). Liên tục khi \(2m+1=3\), suy ra \(\boxed{m=1}\). Phải dùng **nhánh phải** để xác định giá trị tại 2 vì dấu \(\ge\).

    <span data-thpt-help-id="HELP-G11-B17-TRY02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Cho x=2 vào nhánh có dấu < hoặc chỉ so hai biểu thức mà quên f(2).

        **Tự sửa:** Đánh dấu nhánh chứa dấu bằng để lấy f(a), rồi so trái/phải. Ôn mục 2.1; luyện Practice B17-P02/P06 trong <a href="../luyen-tap/">Core và Luyện tập</a>.

    ### 1.3. Liên tục trên đoạn cần kiểm hai đầu mút theo đúng phía

    Liên tục trên khoảng \((a,b)\) nghĩa là liên tục ở mọi điểm bên trong. Với đoạn **đóng** \([a,b]\), còn phải kiểm \(\lim_{x\to a^+}f(x)=f(a)\) và \(\lim_{x\to b^-}f(x)=f(b)\). Không đòi xét giá trị từ bên **ngoài đoạn**; ví dụ \(\sqrt x\) có nghĩa cho \(x\ge0\) mà vẫn liên tục trên \([0,9]\).

    **Vận dụng — Tự thử trước Core.** Hàm \(f(x)=\sqrt{x}\) liên tục trên \([0,4]\) không? Tại \(x=0\) phải xét giới hạn từ phía nào?

    <span data-ped-first-try="3" data-outcome-id="G11-B17-CONTINUITY_INTERVAL" data-thpt-first-try-id="THPT-G11-B17-TRY03" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Có. Trên \((0,4)\), căn bậc hai liên tục. Tại 0, xét \(\lim_{x\to0^+}\sqrt x=0=f(0)\); tại 4, xét \(\lim_{x\to4^-}\sqrt x=2=f(4)\). Vì vậy f liên tục trên **đoạn \([0,4]\)**; không cần giới hạn trái tại 0.

    <span data-thpt-help-id="HELP-G11-B17-TRY03" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Cho rằng không liên tục vì \(\sqrt x\) không định nghĩa với \(x<0\).

        **Tự sửa:** Phân biệt **điểm trong** và **đầu mút** đoạn. Ôn mục 2.2; luyện Core B17-C03 và Practice B17-P05.

    ### 1.4. Các hàm thường gặp liên tục ở đâu?

    Hàm đa thức liên tục tại mọi số thực. Hàm phân thức hữu tỉ liên tục **trên miền mà mẫu khác 0**, không nhất thiết trên toàn trục thực. Căn bậc hai liên tục ở miền xác định (kiểm một phía tại đầu mút). Vì thế trước khi tuyên bố “hàm liên tục”, phải nêu rõ **miền hoặc khoảng đang xét**.

    **Vận dụng — Tự thử trước Core.** Cho \(h(x)=\frac{x+3}{x-2}\). Hãy nêu các khoảng mà h liên tục và lý do không được ghi “liên tục trên \(\mathbb R\)”.

    <span data-ped-first-try="4" data-outcome-id="G11-B17-ELEMENTARY_CONTINUITY" data-thpt-first-try-id="THPT-G11-B17-TRY04" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Mẫu bằng 0 khi \(x=2\), nên h không xác định tại 2. Là phân thức, h liên tục trên mỗi khoảng \((-\infty,2)\) và \((2,+\infty)\). Không thể liên tục tại điểm **không thuộc tập xác định**.

    <span data-thpt-help-id="HELP-G11-B17-TRY04" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Bỏ điều kiện mẫu khác 0.

        **Tự sửa:** Tìm miền xác định trước, sau đó áp dụng định lý hàm sơ cấp. Ôn mục 2.3; luyện Practice B17-P01 trong <a href="../luyen-tap/">Luyện tập</a>.

    ### 1.5. Tổng, tích và thương các hàm liên tục vẫn cần điều kiện

    Nếu \(f,g\) liên tục tại \(a\), tổng, hiệu, tích cũng liên tục tại \(a\). Thương \(f/g\) chỉ liên tục nếu **\(g(a)\ne0\)**. Đây chính là điều kiện phép chia của giới hạn Bài 16. Những quy tắc ấy không cho phép bỏ qua miền xác định hoặc lấy giá trị tại chỗ phân thức có mẫu bằng 0.

    **Vận dụng — Tự thử trước Core.** Hai hàm \(f(x)=x+1\), \(g(x)=x-3\) liên tục mọi nơi. Thương \(f/g\) có liên tục tại \(x=3\) không?

    <span data-ped-first-try="5" data-outcome-id="G11-B17-CONTINUITY_OPERATIONS" data-thpt-first-try-id="THPT-G11-B17-TRY05" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Không. Tại \(x=3\), \(g(3)=0\) nên \((f/g)(3)\) **không xác định**. Thương \((x+1)/(x-3)\) liên tục ở mọi \(x\ne3\), nhưng không thể gọi liên tục tại 3 dù từng hàm f,g đều liên tục.

    <span data-thpt-help-id="HELP-G11-B17-TRY05" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Cho rằng thương hai hàm liên tục luôn liên tục ở mọi số thực.

        **Tự sửa:** Kiểm \(g(a)\ne0\) trước quy tắc thương; ôn mục 2.3 và luyện B17-P01/P04.

    ### 1.6. Đổi dấu và liên tục: vì sao bảo đảm ít nhất một nghiệm?

    Nếu một hàm **liên tục trên cả đoạn \([a,b]\)** và \(f(a)f(b)<0\), nó phải đi qua giá trị 0 tại **ít nhất một** điểm trong \((a,b)\). Đây là ứng dụng định lý giá trị trung gian. Nhưng **đổi dấu không tự chứng minh nghiệm duy nhất**: một đường liên tục có thể đi qua trục hoành nhiều lần.

    **Vận dụng — Tự thử trước Core.** Cho \(p(x)=x^3-5\) trên \([1,2]\). Chứng minh tồn tại nghiệm trong \((1,2)\). Có được kết luận ngay “nghiệm duy nhất” chỉ từ hai giá trị ở đầu đoạn không?

    <span data-ped-first-try="6" data-outcome-id="G11-B17-ZERO_EXISTENCE" data-thpt-first-try-id="THPT-G11-B17-TRY06" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Đa thức liên tục trên \([1,2]\). \(p(1)=-4<0\), \(p(2)=3>0\), nên theo định lý giá trị trung gian tồn tại **ít nhất một** \(c\in(1,2)\) với \(p(c)=0\). Chỉ từ điều kiện liên tục và đổi dấu chưa thể khẳng định **duy nhất**; nếu muốn chứng minh riêng tính duy nhất của bài này, cần thêm lập luận đơn điệu \(x^3-5\) tăng nghiêm ngặt.

    <span data-thpt-help-id="HELP-G11-B17-TRY06" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Viết “đổi dấu nên có đúng một nghiệm” mà không xét thêm tính đơn điệu.

        **Tự sửa:** Chỉ kết luận **ít nhất một**, sau đó nêu yêu cầu riêng để chứng minh duy nhất. Ôn mục 2.4; làm Practice B17-P03/P07 tại <a href="../luyen-tap/">Luyện tập</a>.

=== "Kiến thức SGK"

    ### 2.1. Hàm số liên tục tại một điểm

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa:</strong> Hàm \(f\) liên tục tại \(a\) nếu <strong>\(f(a)\) xác định</strong>, giới hạn hữu hạn \(\lim_{x\to a}f(x)\) tồn tại (theo các phía phù hợp của miền xác định) và
    \[
      \lim_{x\to a}f(x)=f(a).
    \]
    Với điểm trong miền có hai phía, phải khớp cả giới hạn trái và phải. Không sử dụng một hình vẽ “liền nét” thay cho ba điều kiện toán học.</div>

    <figure class="thpt-r4-plot"><img src="../../../../../assets/images/thpt/FIG-G11-B17-01_R01.svg" loading="lazy" alt="Đồ thị có lỗ rỗng tại (1,2) và chấm đặc tại (1,0) cho thấy giới hạn là 2 nhưng f(1)=0"><figcaption>Đọc hình: <strong>vòng tròn rỗng</strong> tại \((1;2)\) mô tả giá trị được tiến gần; <strong>chấm đặc</strong> tại \((1;0)\) là \(f(1)\) thật. Hai độ cao không khớp ⇒ hàm <strong>không liên tục tại 1</strong>.</figcaption></figure>

    ### 2.2. Liên tục trên khoảng và trên đoạn

    Hàm liên tục trên \((a,b)\) nếu liên tục ở mọi điểm thuộc khoảng. Hàm liên tục trên **đoạn \([a,b]\)** nếu liên tục trên \((a,b)\), và
    \[
    \lim_{x\to a^+}f(x)=f(a),\qquad \lim_{x\to b^-}f(x)=f(b).
    \]
    **Ở hai đầu mút** chỉ xét phía thuộc đoạn. Điều kiện còn cần mọi điểm trên đoạn đều thuộc miền xác định.

    ### 2.3. Hàm sơ cấp và phép toán với hàm liên tục

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Quy tắc:</strong> Hàm đa thức liên tục trên \(\mathbb R\). Hàm phân thức liên tục tại nơi mẫu khác \(0\). Hàm căn liên tục trên miền xác định (đầu mút xét một phía). Tổng, hiệu, tích của hai hàm liên tục tại a cũng liên tục; thương cần thêm <strong>mẫu tại a khác 0</strong>.</div>

    Với hàm từng phần, **tính hai giới hạn một phía và giá trị tại điểm ghép**; không chỉ xét công thức có dấu bằng rồi kết luận.

    ### 2.4. Định lý giá trị trung gian và hệ quả về nghiệm

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Định lý và hệ quả:</strong> Nếu \(f\) <strong>liên tục trên đoạn \([a,b]\)</strong> thì với mọi số \(L\) nằm giữa \(f(a)\) và \(f(b)\), tồn tại \(c\in[a,b]\) sao cho \(f(c)=L\). Đặc biệt, nếu \(f(a)f(b)<0\), tồn tại <strong>ít nhất một</strong> \(c\in(a,b)\) có \(f(c)=0\).</div>

    **Giới hạn suy luận:** Không khẳng định nghiệm duy nhất từ đổi dấu. Nếu muốn kết luận duy nhất còn cần cơ sở khác, chẳng hạn chứng minh hàm **tăng/giảm nghiêm ngặt** trên đoạn.

=== "Ví dụ"

    Mỗi Ví dụ có lí do chọn phương pháp và bước kiểm điều kiện.

    ### 3.1. Lấp lỗ bằng giá trị đúng giới hạn

    <div class="thpt-g10-example-solution">
    <p><strong>Đề bài:</strong> Với \(f(x)=\frac{x^2-16}{x-4}\) khi \(x\ne4\) và \(f(4)=m\), tìm m để liên tục tại 4.</p>
    <p><strong>Chọn phương pháp:</strong> Tính giới hạn quanh 4 trước.</p>
    <p><strong>Lời giải:</strong> Với \(x\ne4\), \(f(x)=x+4\); giới hạn bằng 8. Do đó \(m=8\).</p>
    <p><strong>Kiểm lại:</strong> Khi đặt m=8, giá trị tại 4 khớp giới hạn.</p>
    </div>

    ### 3.2. Nối hai công thức với tham số

    <div class="thpt-g10-example-solution">
    <p><strong>Đề bài:</strong> \(f(x)=x+1\) nếu \(x<1\), \(f(x)=m\) nếu \(x\ge1\).</p>
    <p><strong>Chọn phương pháp:</strong> So trái, phải và giá trị tại điểm nối.</p>
    <p><strong>Lời giải:</strong> Giới hạn trái bằng 2, giới hạn phải bằng m, \(f(1)=m\). Liên tục tại 1 khi và chỉ khi \(m=2\).</p>
    <p><strong>Kiểm lại:</strong> Khi m khác 2, hàm bị nhảy tại 1.</p>
    </div>

    ### 3.3. Hàm căn trên đoạn đóng

    <div class="thpt-g10-example-solution">
    <p><strong>Đề bài:</strong> Chứng minh \(f(x)=\sqrt x\) liên tục trên \([0,9]\).</p>
    <p><strong>Chọn phương pháp:</strong> Kiểm trong khoảng và <strong>hai giới hạn một phía</strong> ở đầu.</p>
    <p><strong>Lời giải:</strong> Căn liên tục trên \((0,9)\); \(\lim_{x\to0^+}\sqrt x=0=f(0)\); \(\lim_{x\to9^-}\sqrt x=3=f(9)\).</p>
    <p><strong>Kiểm lại:</strong> Không đòi giá trị với \(x<0\).</p>
    </div>

    ### 3.4. Miền liên tục của phân thức

    <div class="thpt-g10-example-solution">
    <p><strong>Đề bài:</strong> \(h(x)=\frac{x+1}{x-2}\) liên tục ở đâu?</p>
    <p><strong>Chọn phương pháp:</strong> Tìm miền xác định trước.</p>
    <p><strong>Lời giải:</strong> Hàm phân thức liên tục khi mẫu khác 0, tức trên \((-\infty,2)\) và \((2,\infty)\).</p>
    <p><strong>Kiểm lại:</strong> Tại 2, mẫu 0 và h không xác định.</p>
    </div>

    ### 3.5. Tồn tại nghiệm nhưng chưa đủ để nói duy nhất

    <div class="thpt-g10-example-solution">
    <p><strong>Đề bài:</strong> Chứng minh \(g(x)=x^3+x-1\) có nghiệm trong \((0,1)\).</p>
    <p><strong>Chọn phương pháp:</strong> Dùng định lý giá trị trung gian.</p>
    <p><strong>Lời giải:</strong> g là đa thức nên liên tục trên \([0,1]\); \(g(0)=-1<0\), \(g(1)=1>0\), suy ra tồn tại \(c\in(0,1)\) với \(g(c)=0\).</p>
    <p><strong>Kiểm lại:</strong> Lập luận này <strong>chỉ xác nhận ít nhất một nghiệm</strong>; nếu cần duy nhất, chứng minh thêm g tăng nghiêm ngặt.</p>
    </div>

    ### 3.6. Phản ví dụ: đổi dấu vẫn có thể có ba nghiệm

    <div class="thpt-g10-example-solution">
    <p><strong>Đề bài:</strong> Xét \(p(x)=x(x-1)(x+1)\) trên \([-2,2]\). Hai đầu có trái dấu không, và p có bao nhiêu nghiệm phân biệt?</p>
    <p><strong>Chọn phương pháp:</strong> Tính hai đầu và phân tích nhân tử, không suy duy nhất từ đổi dấu.</p>
    <p><strong>Lời giải:</strong> \(p(-2)=(-2)(-3)(-1)=-6<0\), \(p(2)=2\cdot1\cdot3=6>0\). Nhưng p có <strong>ba nghiệm</strong> \(-1,0,1\) nằm trong đoạn.</p>
    <p><strong>Kiểm lại:</strong> Ví dụ bác bỏ kết luận “trái dấu ⇒ đúng một nghiệm”.</p>
    </div>

    ### 3.7. Ứng dụng: kiểm tính liên tục của bảng cước taxi theo quãng đường

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Trong một <strong>mô hình giả định tính cước liên tục theo kilômét</strong>, khách trả 10.000 đồng cho \(0<x\le0{,}5\) km; phần quãng đường vượt \(0{,}5\) đến \(30\) km tính 13.500 đồng/km; phần <strong>vượt 30</strong> km tính 11.000 đồng/km. Viết hàm cước \(C(x)\) và kiểm tính liên tục tại \(x=0{,}5\) và \(x=30\).</p>
    <p><strong>Chọn phương pháp:</strong> Mỗi mức giá theo kilomet chỉ áp cho <strong>phần vượt ngưỡng</strong>, nên sau ngưỡng phải cộng số tiền tích lũy ở ngưỡng trước. Sau đó so giới hạn trái/phải với giá tại ngưỡng, không lấy giá 13.500 làm toàn bộ cước của km sau.</p>
    <p><strong>Lời giải:</strong> Với \(x>0\), đơn vị đồng:
    \[
    C(x)=\begin{cases}
    10000,&0<x\le0{,}5,\\
    10000+13500(x-0{,}5),&0{,}5<x\le30,\\
    10000+13500(30-0{,}5)+11000(x-30),&x>30.
    \end{cases}
    \]
    Khi \(x\to0{,}5^-\) và \(x\to0{,}5^+\), hai phía đều tiến tới 10.000 đồng, đúng \(C(0{,}5)\). Tại \(x=30\), hai phía đều tiến tới \(10000+13500\cdot29{,}5=408250\) đồng, đúng \(C(30)\). Vì vậy mô hình liên tục ở <strong>hai điểm ghép</strong>.</p>
    <p><strong>Kiểm lại:</strong> Mỗi nhánh là hàm liên tục trên khoảng của nó. Đây là <strong>mô hình cước lũy tiến giả định</strong> giúp học điều kiện liên tục, không khẳng định biểu phí thực tế hay cơ chế làm tròn từng km của hãng taxi.</p></div>

=== "Lỗi thường gặp"

    Nếu sai Vận dụng, hãy mở Kiểm lỗi tương ứng và giải lại Core/Practice khác số liệu.

    <span data-thpt-help-id="HELP-G11-B17-01" hidden></span>

    ??? tip "4.1. Biết giới hạn nhưng quên kiểm (f(a))"

        **Vì sao sai:** Kết luận chưa đủ điều kiện để áp định nghĩa hoặc định lý.

        **Tự sửa:** Kiểm đủ 3 điều kiện liên tục tại a; ôn 2.1, làm Core B17-C01/C02.

    <span data-thpt-help-id="HELP-G11-B17-02" hidden></span>

    ??? tip "4.2. Chọn nhầm nhánh tại điểm ghép"

        **Vì sao sai:** Kết luận chưa đủ điều kiện để áp định nghĩa hoặc định lý.

        **Tự sửa:** Đọc dấu (<,le,ge) để lấy f(a), so trái/phải; ôn 2.1 và Practice B17-P02/P06.

    <span data-thpt-help-id="HELP-G11-B17-03" hidden></span>

    ??? tip "4.3. Đòi giới hạn hai phía tại đầu mút đoạn"

        **Vì sao sai:** Kết luận chưa đủ điều kiện để áp định nghĩa hoặc định lý.

        **Tự sửa:** Ở đầu trái xét giới hạn phải, ở đầu phải xét giới hạn trái; ôn 2.2, Practice B17-P05.

    <span data-thpt-help-id="HELP-G11-B17-04" hidden></span>

    ??? tip "4.4. Quên miền xác định hoặc kết luận duy nhất từ đổi dấu"

        **Vì sao sai:** Kết luận chưa đủ điều kiện để áp định nghĩa hoặc định lý.

        **Tự sửa:** Thương yêu cầu mẫu khác 0; định lý giá trị trung gian chỉ đảm bảo **ít nhất một nghiệm**; luyện B17-P01/P07.

    **Học tiếp:** <a href="../luyen-tap/">Core và Luyện tập</a> · <a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a> · <a href="../../../../thu-vien/tu-luan-g11-chuong-v/">Tự luận Chương V</a>.

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập một, Bài 17 (trang in 119–122).</p>

## REVIEW SOURCE B17 END


---

## Q18 AUTHORING SOURCE RECEIPT BEGIN · dabd519988409821fd8752371024bb6b6e815285

# G11 SGK Chương V B15–B17 · R04 academic and pedagogic author self-Q18 · 22/11/2026

PACKET_ID: G11-SGK-CHV-B15-B17-R04
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.2.0
LEARNING_PATH: SGK_CHAPTER
RELEASE_SCOPE: FULL_LEARNING_PATH
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
AUTHOR_SELF_QA_RECEIPT: YES_CURRENT_G11_CHV_R04_ON_THREE_CANONICAL_LEARNER_BLOBS
SOURCE_PATH: prototypes/thpt/content-drafts/G11_CHV_B15_B17_R04_CANONICAL_SOURCE_BUNDLE_LOCK_20261122.md
SOURCE_BLOB: abe13e1c6cae16ce905adfdf89b1f467ca82e5ae
S1_RECEIPT: HISTORICAL_SBT_PRIMARY_PDF_SHA256_FB529210_AND_CURRENT_SGK_PDF_TEXT_SCOPE_VERIFIED_FINAL_PRINT_PDF_VISUAL_RESCAN_NOT_CLAIMED
OUTCOME_AUDIT: 17_REGISTERED_16_PER_LESSON_PLUS_ONE_INTEGRATED
MATH_VERIFICATION: 19_CURRENT_WORKED_18_FIRSTTRY_30_ORIGINAL_BANK_6_ORIGINAL_WRITTEN_RECHECKED_CONDITIONS
PED_VERIFICATION: THREE_FOUR_TAB_GOLDEN_18_TRY_18_HIDDEN_COMPARISONS_18_LOCAL_D6_19_WORKED_3_UNCHANGED_SVG
CANONICAL_Q15: 54_DISTINCT_IDS_30_PUBLIC_CP_APPLICATION_6_WRITTEN_18_SOURCE_TRY
ASSESSMENT_Q16: PUBLIC_END_13_REUSED_SELF_CHECK_NO_MASTERY_17_RD1_OWNER_HELD_PRIVATE
AUTHOR_SIGNOFF: AUTHOR_SELF_VERIFIED_ON_CURRENT_R04_EXACT_GIT_SOURCE_Q01_Q18_A1_A7
ACADEMIC_VERDICT: SELF_VERIFIED_ON_LOCKED_SNAPSHOT
PEDAGOGICAL_VERDICT: SELF_VERIFIED_ON_LOCKED_SNAPSHOT
P0: 0
P1: 0
P2: 0
INDEPENDENT_NOTEBOOKLM_CURRENT_R04: NOT_CLAIMED
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO

## Current source truth and prior independent review

**Current source Git blob `abe13e1c6cae16ce905adfdf89b1f467ca82e5ae`** is a manifest for 11 original source components including three student Knowledge articles, original unchanged 30-item formative bank, 6-item Written/Anchor library and 3 original SVG. B15 learner SHA `f4065659173d27ef3999f1b0ee42ff2982701267`, B16 `687bb852f1b8465527902ead7dfeae9858584171`, B17 `f0e6996f97216742c4b571d92c357485043795e8`. Historic primary S1 SBT Toán 11 KNTT T1 PDF SHA256 `fb5292103e5b682531ce37b5f30598393bba81b2943da9c1a374fdeb56557229` printed B15 75–78, B16 79–83, B17 84–86 and chapter end 87–90. Original SGK KNTT T1 chapter printed B15 104–110, B16 111–118, B17 119–122, final p123. Current session checked online SGK source PDF text (actual sections B15–B17 and original examples) but web visual screenshot failed and original publisher final-print PDF bytes were not rescanned. **No new printed-image receipt is claimed**.

Historical independent Academic/PED source `7934757ed06de4ae4b63dbc351ef524fc054e0d0` and review receipt `2fdc39c755f399b0df81e17a9c8978384612e2f1` are immutable history only. R04 pedagogic rewrites are `DELTA_C_ACADEMIC_MATERIAL` and current signoff is a new Q18 author self-verification **under owner-effective v3.2.0**, not fabricated NotebookLM PASS. Source-scoped prior 100k randomized probes from previous source blobs are historical and **not rerun or claimed as current**.

## Verified mathematical content and Q02 per lesson

**B15** (5 registered outcomes) — exact meaning of n→+∞ and ε-N (N=101 for 1/n<0.01), alternating (-1)^n versus (-1)^n/n, signed divergent -3n+7, quotient limit 5/2 after dividing by n² and checking denominator 2≠0, geometric sum with negative q=-1/2 gives 16/3, bounce model 3+2*(3/2)/(1-1/2)=9 metres. Worked 3.4: 5+5/4+5/16+…=20/3, checked 105/16<20/3. `G11-B15-GEOMETRIC` is original C03 and formal §2.4, not fabricated a new TRY primary skill.

**B16** (6 outcomes) — removable x²−9 over x−3 has limit 6 while f(3) undefined; one-sided case agrees at x=1 with 3 on both sides; multiplying conjugate of (√(x+4)-2)/x gives 1/4 valid x≠0; (x+1)/(2-x) diverges by one-sided signs; √(x²+9)/x at x→−∞ tends −1 from |x|/x; parking fee at t=1 has left 10 and right 20 thousand and no two-sided limit; saturation H(t)=100t/(t+5) tends 100 without finite attainment. P0 mathematical errors not found within reviewed source.

**B17** (5 outcomes) — removable f(1)=m continuous iff m=2; piecewise mx+1 (x<2) and x²−1 (x≥2) continuous iff m=1; √x continuous on [0,4] with right limit at 0, left limit at 4; rational domain exception; continuous polynomial x³−5 has opposite signs at 1 and 2 guaranteeing at least one root by IVT, not uniqueness. Polynomial x(x-1)(x+1) verifies three zeros despite opposite-sign endpoints. Hypothetical taxi model 0.5 and 30 km cumulative fare matches both sides; value at 30km = 10000 + 13500·29.5 = 408250 VND; source clearly labels an illustrative continuous-km model rather than a real taxi tariff.

**Source-level presentation/PED repairs on the exact three new blobs:** originally four `\[...\]` math blocks (B15 two, B16 two) lay outside the indented collapsed `??? question "Đối chiếu"` and could become visible prematurely; now all inside the *opt-in* comparison block. Three previously broken `\ne` line splits in HELP/diagnoses fixed, B16 false §2.5/2.6 return links corrected; all 19 `Ví dụ` now use semantic HTML `Đề bài / Chọn phương pháp / Lời giải / Kiểm lại` and preserve original mathematical hypotheses, answers and diagrams. 22 Markdown relative links normalized to equivalent HTML anchors with href/text unchanged.

**Executed source structural QA:** Three 4-tab ordered Golden; 6+6+6 unique TRY, 18/18 hidden comparisons each with correctly indented answer and 18/18 matching local HELP; 6+6+7 complete worked; 3/3 exact original SVG, balanced inline and display MathJax delimiters, no script injection, no remaining bad B16 section references, no changed bank/Writer blob. Source QA is not browser/MathJax/SVG raster nor official Final Submit validation.

## ITEM_OUTCOME_ROLE_MATRIX — 54 distinct public educational IDs

`SGK_KNOWLEDGE_FIRST_TRY_UNSCORED` is formative Knowledge placement and a canonical ID, not official chapter assessment. Original RD1 question stems, keys, rubrics are kept out of GitHub.

| ITEM_ID | OUTCOME_ID | PLACEMENT_ROLE |
|---|---|---|
| `THPT-G11-CHV-B15-C01` | `G11-B15-FINITE_SEQUENCE` | SGK_CORE |
| `THPT-G11-CHV-B15-C02` | `G11-B15-INFINITE_SEQUENCE` | SGK_CORE |
| `THPT-G11-CHV-B15-C03` | `G11-B15-GEOMETRIC` | SGK_CORE |
| `THPT-G11-CHV-B15-P01` | `G11-B15-LIMIT_ARITHMETIC` | SGK_PRACTICE |
| `THPT-G11-CHV-B15-P02` | `G11-B15-FINITE_SEQUENCE` | SGK_PRACTICE |
| `THPT-G11-CHV-B15-P03` | `G11-B15-LIMIT_ARITHMETIC` | SGK_PRACTICE |
| `THPT-G11-CHV-B15-P04` | `G11-B15-LIMIT_ARITHMETIC` | SGK_PRACTICE |
| `THPT-G11-CHV-B15-P05` | `G11-B15-INFINITE_SEQUENCE` | SGK_PRACTICE |
| `THPT-G11-CHV-B15-P06` | `G11-B15-GEOMETRIC_APPLICATION` | SGK_APPLICATION |
| `THPT-G11-CHV-B15-P07` | `G11-B15-GEOMETRIC_APPLICATION` | SGK_APPLICATION |
| `THPT-G11-CHV-B16-C01` | `G11-B16-LIMIT_AT_POINT` | SGK_CORE |
| `THPT-G11-CHV-B16-C02` | `G11-B16-ONE_SIDED` | SGK_CORE |
| `THPT-G11-CHV-B16-C03` | `G11-B16-INFINITE_LIMIT` | SGK_CORE |
| `THPT-G11-CHV-B16-P01` | `G11-B16-ALGEBRAIC_TECHNIQUES` | SGK_PRACTICE |
| `THPT-G11-CHV-B16-P02` | `G11-B16-ALGEBRAIC_TECHNIQUES` | SGK_PRACTICE |
| `THPT-G11-CHV-B16-P03` | `G11-B16-ONE_SIDED` | SGK_PRACTICE |
| `THPT-G11-CHV-B16-P04` | `G11-B16-LIMIT_AT_INFINITY` | SGK_PRACTICE |
| `THPT-G11-CHV-B16-P05` | `G11-B16-LIMIT_AT_INFINITY` | SGK_PRACTICE |
| `THPT-G11-CHV-B16-P06` | `G11-B16-INFINITE_LIMIT` | SGK_PRACTICE |
| `THPT-G11-CHV-B16-P07` | `G11-B16-REAL_CONTEXT` | SGK_APPLICATION |
| `THPT-G11-CHV-B17-C01` | `G11-B17-CONTINUITY_POINT` | SGK_CORE |
| `THPT-G11-CHV-B17-C02` | `G11-B17-CONTINUITY_POINT` | SGK_CORE |
| `THPT-G11-CHV-B17-C03` | `G11-B17-ELEMENTARY_CONTINUITY` | SGK_CORE |
| `THPT-G11-CHV-B17-P01` | `G11-B17-CONTINUITY_OPERATIONS` | SGK_PRACTICE |
| `THPT-G11-CHV-B17-P02` | `G11-B17-CONTINUITY_POINT` | SGK_PRACTICE |
| `THPT-G11-CHV-B17-P03` | `G11-B17-ZERO_EXISTENCE` | SGK_PRACTICE |
| `THPT-G11-CHV-B17-P04` | `G11-B17-CONTINUITY_POINT` | SGK_PRACTICE |
| `THPT-G11-CHV-B17-P05` | `G11-B17-CONTINUITY_INTERVAL` | SGK_PRACTICE |
| `THPT-G11-CHV-B17-P06` | `G11-B17-CONTINUITY_INTERVAL` | SGK_PRACTICE |
| `THPT-G11-CHV-B17-P07` | `G11-B17-ZERO_EXISTENCE` | SGK_APPLICATION |
| `THPT-G11-CHV-B15-W01` | `G11-B15-LIMIT_ARITHMETIC` | SGK_WRITTEN |
| `THPT-G11-CHV-B15-W02-ANCHOR` | `G11-B15-GEOMETRIC_APPLICATION` | SGK_WRITTEN_ANCHOR_LABEL |
| `THPT-G11-CHV-B16-W01` | `G11-B16-LIMIT_AT_POINT` | SGK_WRITTEN |
| `THPT-G11-CHV-B16-W02-ANCHOR` | `G11-B16-ALGEBRAIC_TECHNIQUES` | SGK_WRITTEN_ANCHOR_LABEL |
| `THPT-G11-CHV-B17-W01` | `G11-B17-CONTINUITY_POINT` | SGK_WRITTEN |
| `THPT-G11-CHV-B17-W02-ANCHOR` | `G11-B17-CONTINUITY_INTERVAL` | SGK_WRITTEN_ANCHOR_LABEL |
| `THPT-G11-B15-TRY01` | `G11-B15-FINITE_SEQUENCE` | SGK_KNOWLEDGE_FIRST_TRY_UNSCORED |
| `THPT-G11-B15-TRY02` | `G11-B15-FINITE_SEQUENCE` | SGK_KNOWLEDGE_FIRST_TRY_UNSCORED |
| `THPT-G11-B15-TRY03` | `G11-B15-FINITE_SEQUENCE` | SGK_KNOWLEDGE_FIRST_TRY_UNSCORED |
| `THPT-G11-B15-TRY04` | `G11-B15-INFINITE_SEQUENCE` | SGK_KNOWLEDGE_FIRST_TRY_UNSCORED |
| `THPT-G11-B15-TRY05` | `G11-B15-LIMIT_ARITHMETIC` | SGK_KNOWLEDGE_FIRST_TRY_UNSCORED |
| `THPT-G11-B15-TRY06` | `G11-B15-GEOMETRIC_APPLICATION` | SGK_KNOWLEDGE_FIRST_TRY_UNSCORED |
| `THPT-G11-B16-TRY01` | `G11-B16-LIMIT_AT_POINT` | SGK_KNOWLEDGE_FIRST_TRY_UNSCORED |
| `THPT-G11-B16-TRY02` | `G11-B16-ONE_SIDED` | SGK_KNOWLEDGE_FIRST_TRY_UNSCORED |
| `THPT-G11-B16-TRY03` | `G11-B16-ALGEBRAIC_TECHNIQUES` | SGK_KNOWLEDGE_FIRST_TRY_UNSCORED |
| `THPT-G11-B16-TRY04` | `G11-B16-INFINITE_LIMIT` | SGK_KNOWLEDGE_FIRST_TRY_UNSCORED |
| `THPT-G11-B16-TRY05` | `G11-B16-LIMIT_AT_INFINITY` | SGK_KNOWLEDGE_FIRST_TRY_UNSCORED |
| `THPT-G11-B16-TRY06` | `G11-B16-REAL_CONTEXT` | SGK_KNOWLEDGE_FIRST_TRY_UNSCORED |
| `THPT-G11-B17-TRY01` | `G11-B17-CONTINUITY_POINT` | SGK_KNOWLEDGE_FIRST_TRY_UNSCORED |
| `THPT-G11-B17-TRY02` | `G11-B17-CONTINUITY_POINT` | SGK_KNOWLEDGE_FIRST_TRY_UNSCORED |
| `THPT-G11-B17-TRY03` | `G11-B17-CONTINUITY_INTERVAL` | SGK_KNOWLEDGE_FIRST_TRY_UNSCORED |
| `THPT-G11-B17-TRY04` | `G11-B17-ELEMENTARY_CONTINUITY` | SGK_KNOWLEDGE_FIRST_TRY_UNSCORED |
| `THPT-G11-B17-TRY05` | `G11-B17-CONTINUITY_OPERATIONS` | SGK_KNOWLEDGE_FIRST_TRY_UNSCORED |
| `THPT-G11-B17-TRY06` | `G11-B17-ZERO_EXISTENCE` | SGK_KNOWLEDGE_FIRST_TRY_UNSCORED |

The original `G11-CHV-INTEGRATED` registered outcome has old protected RD1 chapter evidence and self-study B15→B16→B17 conceptual transition; do not invent a new public independent item to fill a mastery ID.

## Q01–Q18 AUTHOR_SELF_QA_EVIDENCE

| Criterion | Scoped verdict | Reasoned evidence on source |
|---|---|---|
| Q01 | AUTHOR_SELF_VERIFIED | SGK KNTT T1 ChV B15 pp104–110, B16 pp111–118, B17 pp119–122, end p123; original SBT historical scanned by SHA; this pass checked PDF text but did not verify publisher print-final page images |
| Q02 | AUTHOR_SELF_VERIFIED | 17 registered outcomes, 16 per-lesson plus one cross-chapter integrated; all backed by concept, examples, public bank or owner-held original RD1; B15 GEOMETRIC no new FirstTry but C03 + formal 2.4 + worked |
| Q03 | AUTHOR_SELF_VERIFIED | Three complete Golden Knowledge sections; definitions, domain, inequality and limit conditions before formulas |
| Q04 | AUTHOR_SELF_VERIFIED | 19 worked examples with explicit complete task, selection reason, mathematical proof, check; source-refactored into semantic four-step cards |
| Q05 | AUTHOR_SELF_VERIFIED | 30 frozen original Core/Practice/Application answer/skill IDs; public attempt is exposure and does not claim independent depth only from raw count |
| Q06 | AUTHOR_SELF_VERIFIED | 6 frozen shared Written/Anchor with original full solutions and /4 rubric; Anchor only tag |
| Q07 | AUTHOR_SELF_VERIFIED | 3 original SVG unchanged by SHA; each has learner-facing caption and how-to-read instruction; no browser-render PASS claimed |
| Q08 | AUTHOR_SELF_VERIFIED | 18 local actual Kiểm lỗi/HELP with same lesson revisit, plus four general error groups per lesson; 3 unindented math answer defects fixed |
| Q09 | AUTHOR_SELF_VERIFIED | Why learn limits, one-sided behavior, continuity, models from finite/infinite processes |
| Q10 | AUTHOR_SELF_VERIFIED | Prerequisites dãy số, lũy thừa, nhân liên hợp, xác định hàm, căn bậc hai, piecewise and sign tables explained |
| Q11 | AUTHOR_SELF_VERIFIED | Concept of convergent distance/sequence first; function limits do not require value at point; continuity matches point value to limits |
| Q12 | AUTHOR_SELF_VERIFIED | SVG reading explains isolated sequence points, removable holes, point-vs-limit mismatch and projection/read limits |
| Q13 | AUTHOR_SELF_VERIFIED | Method rationale divide leading power, squeeze, conjugate, left/right sign, sqrt(x²)=|x|, IVT existence not uniqueness; math checked per example |
| Q14 | AUTHOR_SELF_VERIFIED | 18 learner FirstTry prior to any original Core; 18 opt-in hidden question comparisons; four originally leaked display math blocks now nested |
| Q15 | AUTHOR_SELF_VERIFIED | 54/54 distinct IDs scoped: 30 original C/P/APPLICATION +6 original Written +18 pedagogic TRY, no reused stem copied into another bank |
| Q16 | AUTHOR_SELF_VERIFIED | 13 publicly exposed chapter replay items self-check CLIENT_SELF_CHECK_NO_MASTERY; private 17 RD1 untouched, Final Submit/mastery runtime unchanged |
| Q17 | AUTHOR_SELF_VERIFIED | SGK Knowledge + existing Core/Practice hub + public end + shared Written is self-contained; Topic remains independent 3-page and no new Topic Core |
| Q18 | AUTHOR_SELF_VERIFIED | One source bundle immutable exact blob plus author signed receipt; old R03 independent PASS is historical only, not inherited by this Delta C |

## A1–A7 summary and protected boundary

A1: source `abe13e1c6cae16ce905adfdf89b1f467ca82e5ae` contains 11 original component Git blob locks; A2: direct S1 PDF *text* read with historical original SBT primary scan reference and no new page-image claim; A3: 18-Q author-signed current review on exact SHA, independent NotebookLM not falsely claimed; A4: 17 original outcomes and 54 distinct teaching item roles map 1:1; A5: D1–D6 + PED1–PED6 verified per lesson and exact math, not solely totals; A6: `DELTA_C_ACADEMIC_MATERIAL` corrected in original B15–B17 + `DELTA_A_UI` exact label/href change, no original bank or assessments modified; A7: 17 private RD1 owner-held, public end is `CLIENT_SELF_CHECK_NO_MASTERY`, no student data/Firebase/Auth/Mastery changed.

AUTHOR_SIGNOFF: Q01_Q18_A1_A7_AUTHOR_SELF_VERIFIED_SOURCE_abe13e1c6cae16ce905adfdf89b1f467ca82e5ae
P0_P1_AUTHORING: 0_0_IN_SCOPE
SOURCE_STATE: AUTHORING_PASS_READY_FOR_SINGLE_V2_READY_REGISTER
RELEASE_STATE: NO_WEBSITE_APPROVAL_OR_DEPLOYMENT

## Q18 AUTHORING SOURCE RECEIPT END
