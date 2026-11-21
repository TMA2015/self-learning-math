# Temp_ · G11 SGK Chapter V B15–B17 · Full-chapter independent NotebookLM review source

PACKET_ID: Temp_G11_CHV_B15_B17_Q18_INDEPENDENT_20261122
ROLE: REVIEW_COPY_ONLY_NOT_LEARNER_CANONICAL
CANONICAL_BRANCH: authoring/sgk-g11-chv-b15-b17-r02-20261122
Q18_RECEIPT_PATH: prototypes/thpt/ux795/G11_CHV_B15_B17_SGK_AUTHORING_Q18_20261122.md
Q18_RECEIPT_GIT_BLOB: 909f19a2c2216129f67b50fe2ede3dc81646167d
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
| B15 | `docs/thpt-preview/sgk/lop-11/chuong-v/bai-15.md` | `2dc6509c170da4b1f8ac17eeebd4ef9da96b0487` |
| B16 | `docs/thpt-preview/sgk/lop-11/chuong-v/bai-16.md` | `e25d6493544159692c080808cdc11402848c6eb1` |
| B17 | `docs/thpt-preview/sgk/lop-11/chuong-v/bai-17.md` | `02a7108c041a3eb42460c760334f7c05ae7f8dca` |

**Bản sao bên dưới chỉ phục vụ review; không được tạo learner source thứ hai hoặc sửa trực tiếp trong gói này.** Giữ verdict của snapshot cũ, review lại Delta-C bị ảnh hưởng cho bản SHA mới.


---

## REVIEW SOURCE B15 BEGIN · 2dc6509c170da4b1f8ac17eeebd4ef9da96b0487

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

        **Tự sửa:** Phân biệt *giới hạn* và *giá trị từng số hạng*. Đọc mục 2.1, thử Core B15-C01 và Practice B15-P02 ở [Luyện tập](../luyen-tap/).

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

        **Tự sửa:** So sánh **độ lớn** của phần đổi dấu và thử hai dãy con chẵn/lẻ. Ôn 2.1 và Ví dụ 3.2; luyện Practice B15-P05 ở [Core và Luyện tập](../luyen-tap/).

    ### 1.4. Tiến ra vô cực khác hẳn tiến đến một số hữu hạn

    Kí hiệu \(u_n\to+\infty\) nói rằng với **mọi** mốc \(M>0\) ta có \(u_n>M\) với mọi \(n\) đủ lớn; \(u_n\to-\infty\) tương tự với \(u_n<-M\). \(+\infty\) và \(-\infty\) không phải hai số thực để thế trực tiếp vào biểu thức. Dãy \(n(-1)^n\) lớn về độ lớn nhưng đổi dấu, nên không tiến về \(+\infty\) hoặc \(-\infty\).

    **Vận dụng — Tự thử trước Core.** Cho \(u_n=-3n+7\). Dãy tiến về \(+\infty\), \(-\infty\) hay có giới hạn hữu hạn? Dựa vào dấu và bậc của \(n\).

    <span data-ped-first-try="4" data-outcome-id="G11-B15-INFINITE_SEQUENCE" data-thpt-first-try-id="THPT-G11-B15-TRY04" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Khi \(n\to+\infty\), \(-3n+7\) giảm không bị chặn dưới nên \(u_n\to-\infty\). Với mọi \(M>0\), chọn \(N>(M+7)/3\), khi đó \(n\ge N\) cho \(-3n+7<-M\).

    <span data-thpt-help-id="HELP-G11-B15-TRY04" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Thấy có số 7 dương rồi cho rằng dãy tiến tới +∞.

        **Tự sửa:** Nhìn **hạng tử trội (-3n)** và chứng minh bằng một mốc tùy lớn. Ôn mục 2.2 và Core B15-C02 ở [Luyện tập](../luyen-tap/).

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

        **Dấu hiệu:** Rút gọn (infty/infty) như phân số hoặc bỏ kiểm mẫu giới hạn khác 0.

        **Tự sửa:** Chia theo bậc (n) cao nhất rồi kiểm mẫu. Ôn mục 2.3, làm Practice B15-P01/P04 ở [Luyện tập](../luyen-tap/).

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

        **Tự sửa:** Kiểm **giá trị tuyệt đối (|q|<1)**, không chỉ (q<1). Ôn mục 2.4; luyện Core B15-C03 và Practice B15-P06/P07 tại [Core và Luyện tập](../luyen-tap/).

=== "Kiến thức SGK"

    ### 2.1. Giới hạn hữu hạn của dãy số

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khái niệm:</strong> \(\lim_{n\to+\infty}u_n=a\) nếu với mọi \(\varepsilon>0\) tồn tại số tự nhiên \(N\) để mọi \(n\ge N\) đều có \(|u_n-a|<\varepsilon\). Riêng \(a=0\), điều kiện là \(|u_n|<\varepsilon\). **Giới hạn không yêu cầu số hạng nào bằng a.**</div>

    **Giới hạn cơ bản:** Với \(p>0\), \(\lim 1/n^p=0\). Nếu \(|q|<1\) thì \(\lim q^n=0\). Với \(u_n=(-1)^n/n\), có \(|u_n|\le1/n\), nên giới hạn bằng 0 nhờ nguyên lí kẹp.

    <figure class="thpt-r4-plot"><img src="../../../../../assets/images/thpt/FIG-G11-B15-01_R01.svg" loading="lazy" alt="Các điểm rời rạc u_n=1/n tiến sát trục hoành khi chỉ số n tăng, không có số hạng cuối"><figcaption>Đọc hình: mỗi điểm ứng với **một chỉ số nguyên dương**. Khoảng cách đến trục \(u_n=0\) giảm dần; không nối chấm thành đường liên tục hay kết luận có một “điểm cuối” bằng 0.</figcaption></figure>

    ### 2.2. Giới hạn vô cực và dãy không có giới hạn

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Vô cực:</strong> \(u_n\to+\infty\) nghĩa là với mọi \(M>0\), cuối cùng **mọi** \(u_n>M\). Tương tự \(u_n\to-\infty\) nếu cuối cùng \(u_n<-M\). Đây không phải giới hạn bằng một số thực. Một dãy có thể **không có giới hạn** kiểu nào, như \((-1)^n\) hoặc \(n(-1)^n\).</div>

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

    <div class="thpt-g10-example-solution"><p>**Đề bài:** Tính \(\lim_{n\to\infty}\frac{3n+1}{n+4}\). **Chọn cách:** Cả tử, mẫu đều bậc nhất; chia cho \(n\) để lộ các giới hạn hữu hạn. **Giải:** \(\frac{3+1/n}{1+4/n}\to3\). **Kiểm:** Mẫu giới hạn \(1\ne0\), đúng điều kiện phép chia.</p></div>

    ### 3.2. Đổi dấu nhưng biên độ thu về 0

    <div class="thpt-g10-example-solution"><p>**Đề bài:** Chứng minh \(u_n=(-1)^n/(n+1)\to0\). **Chọn cách:** Không xét dấu riêng từng số; dùng bất đẳng thức kẹp. **Giải:** \(-1/(n+1)\le u_n\le1/(n+1)\); cả hai biên tiến về 0, suy ra \(u_n\to0\). **Kiểm:** Dãy không đơn điệu nhưng vẫn hội tụ.</p></div>

    ### 3.3. Một giới hạn vô cực có dấu

    <div class="thpt-g10-example-solution"><p>**Đề bài:** Xét \(u_n=2-5n\). **Chọn cách:** Hạng tử \(-5n\) quyết định khi \(n\) lớn. **Giải:** Với bất kỳ \(M>0\), chọn \(N>(M+2)/5\). Khi \(n\ge N\), \(2-5n<-M\), nên \(\lim u_n=-\infty\). **Kiểm:** Không viết \(-\infty\) như một số hạng của dãy.</p></div>

    ### 3.4. Tổng của một cấp số nhân lùi vô hạn

    <div class="thpt-g10-example-solution"><p>**Đề bài:** Tính \(5+5/4+5/16+\cdots\). **Chọn cách:** Kiểm đây là cấp số nhân \(|q|<1\) rồi xét tổng riêng. **Giải:** \(a=5,q=1/4\), nên \(S=5/(1-1/4)=20/3\). **Kiểm:** Tổng ba số đầu \(5+5/4+5/16=105/16\), nhỏ hơn \(20/3\), phù hợp vì các số hạng dương.</p></div>

    ### 3.5. Quả bóng nảy: tổng các đoạn đi lên và đi xuống

    <div class="thpt-g10-example-solution"><p>**Đề bài:** Quả bóng thả từ độ cao \(3\) m, sau mỗi lần chạm đất bật lên bằng nửa độ cao vừa rơi. Theo mô hình lý tưởng vô hạn, tổng quãng đường thẳng đứng là bao nhiêu? **Chọn cách:** Cú rơi đầu chỉ xảy ra **một lần**; mỗi độ cao bật lên sau đó được đi **lên và xuống**. **Giải:** \(L=3+2(3/2+3/4+\cdots)=3+2\cdot(3/2)/(1-1/2)=9\) m. **Kiểm:** Bỏ cú rơi đầu hoặc nhân đôi cú đầu đều đếm sai quãng đường; mô hình không khẳng định quả bóng thực nảy vô hạn.</p></div>

    ### 3.6. Trường hợp công bội không hội tụ

    <div class="thpt-g10-example-solution"><p>**Đề bài:** Có thể áp \(S=a/(1-q)\) cho \(2+2+2+\cdots\) không? **Chọn cách:** Kiểm điều kiện **trước công thức**. **Giải:** \(a=2,q=1\), \(|q|=1\) không thỏa. Tổng riêng \(S_n=2n\to+\infty\), nên không có tổng vô hạn hữu hạn. **Kiểm:** Thế \(q=1\) vào biểu thức sẽ chia cho \(0\), vô nghĩa.</p></div>

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

        **Tự sửa:** Kiểm mẫu giới hạn (
e0); với cấp số nhân vô hạn cần (|q|<1). Ôn mục 2.3–2.4 rồi luyện B15-P01/P06.

    **Học tiếp:** [Core và Luyện tập](../luyen-tap/) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/) · [Tự luận Chương V](../../../../thu-vien/tu-luan-g11-chuong-v/).

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập một, Bài 15 (trang in 104–110).</p>


## REVIEW SOURCE B15 END


---

## REVIEW SOURCE B16 BEGIN · e25d6493544159692c080808cdc11402848c6eb1

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

        **Tự sửa:** Phân biệt miền xác định và xu hướng. Ôn mục 2.1; thử Core B16-C01, Practice B16-P02 trong [Luyện tập](../luyen-tap/).

    ### 1.2. Tại sao phải xét cả bên trái lẫn bên phải?

    Một con đường có thể có biển báo trước và sau mốc khác nhau. Với hàm \(f(x)=x+1\) khi \(x<0\) và \(f(x)=3-x\) khi \(x\ge0\), giới hạn trái tại 0 là **1**, giới hạn phải là **3**. Hai phía không đồng ý, nên không có giới hạn **hai phía hữu hạn**; giá trị \(f(0)=3\) không sửa được khác biệt ấy.

    **Vận dụng — Tự thử trước Core.** Với \(g(x)=2x+1\) khi \(x<1\), \(g(x)=x+2\) khi \(x\ge1\), hãy tính hai giới hạn một phía tại 1 và kết luận giới hạn hai phía.

    <span data-ped-first-try="2" data-outcome-id="G11-B16-ONE_SIDED" data-thpt-first-try-id="THPT-G11-B16-TRY02" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Khi \(x\to1^-\), \(g(x)=2x+1\to3\). Khi \(x\to1^+\), \(g(x)=x+2\to3\). Hai giới hạn hữu hạn **cùng bằng 3**, nên \(\lim_{x\to1}g(x)=3\); đồng thời \(g(1)=3\), dù điều cuối không phải điều kiện bắt buộc để giới hạn tồn tại.

    <span data-thpt-help-id="HELP-G11-B16-TRY02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Chỉ tính phía có dấu bằng trong công thức rồi coi đó là giới hạn hai phía.

        **Tự sửa:** Tính **riêng trái và phải** rồi so. Ôn mục 2.2, luyện Core B16-C02 và Practice B16-P03 tại [Luyện tập](../luyen-tap/).

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

        **Tự sửa:** Viết hằng đẳng thức ((sqrt A-b)(sqrt A+b)=A-b^2); ôn mục 2.3, luyện Practice B16-P01/P02.

    ### 1.4. Dấu của mẫu quyết định hướng giới hạn vô cực

    Khi tử tiến tới số dương khác 0 còn mẫu tiến tới 0, dấu của mẫu là then chốt. Ví dụ \(1/(x-2)\) tiến tới \(+\infty\) khi \(x\to2^+\) nhưng tới \(-\infty\) khi \(x\to2^-\). Vì vậy không được viết một “giới hạn bằng vô cực” hai phía nếu dấu không nhất quán.

    **Vận dụng — Tự thử trước Core.** Xét \(h(x)=\frac{x+1}{2-x}\). Hãy tìm xu hướng khi \(x\to2^-\) và khi \(x\to2^+\).

    <span data-ped-first-try="4" data-outcome-id="G11-B16-INFINITE_LIMIT" data-thpt-first-try-id="THPT-G11-B16-TRY04" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Tử \(x+1\to3>0\). Khi \(x\to2^-\), mẫu \(2-x>0\) rất nhỏ nên \(h(x)\to+\infty\); khi \(x\to2^+\), mẫu \(2-x<0\) rất nhỏ nên \(h(x)\to-\infty\). Hai phía khác nhau, không có giới hạn hai phía theo nghĩa thông thường.

    <span data-thpt-help-id="HELP-G11-B16-TRY04" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Bỏ dấu và ghi cả hai phía +∞, hoặc lấy trung bình hai vô cực.

        **Tự sửa:** Lập bảng dấu **tử/mẫu** cho từng phía, ôn mục 2.4; luyện Core B16-C03 và Practice B16-P06 tại [Core và Luyện tập](../luyen-tap/).

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

        **Tự sửa:** Ghi rõ (|x|/x=-1) cho (x<0); ôn mục 2.5, luyện Practice B16-P04 và B16-P05 tại [Luyện tập](../luyen-tap/).

    ### 1.6. Một ngưỡng trong đời sống có thể tạo hai giới hạn khác nhau

    Một bãi gửi xe giả định tính phí \(10\) nghìn đồng khi \(0<t\le1\) giờ và \(20\) nghìn đồng khi \(t>1\). Giá đúng tại \(t=1\) là \(10\), nhưng trước và sau ngưỡng khách hàng thấy **hai xu hướng phí khác nhau**. Mô hình bước nhảy giúp phân biệt **giá tại ngưỡng** với **giới hạn**; đó không phải chỉ là kỹ thuật tính.

    **Vận dụng — Tự thử trước Core.** Với \(C(t)=10\) khi \(0<t\le1\), \(C(t)=20\) khi \(t>1\) (nghìn đồng), tính \(C(1)\), giới hạn trái và phải tại 1; có giới hạn hai phía không?

    <span data-ped-first-try="6" data-outcome-id="G11-B16-REAL_CONTEXT" data-thpt-first-try-id="THPT-G11-B16-TRY06" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Ta có \(C(1)=10\). Khi \(t\to1^-\), \(C(t)\to10\); khi \(t\to1^+\), \(C(t)\to20\). Do \(10\ne20\), **giới hạn hai phía tại 1 không tồn tại**, dù giá tại ngưỡng được xác định.

    <span data-thpt-help-id="HELP-G11-B16-TRY06" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Lấy trung bình 15 hoặc lấy C(1)=10 làm giới hạn hai phía.

        **Tự sửa:** Viết hai cột (t<1), (t>1), rồi so; ôn mục 2.2/2.6, luyện tình huống mô hình ở Practice B16-P07.

=== "Kiến thức SGK"

    ### 2.1. Giới hạn hữu hạn của hàm số tại một điểm

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Ý nghĩa:</strong> \(\lim_{x\to a}f(x)=L\) khi \(x\) thuộc miền xác định, **khác \(a\)** và tiến tới \(a\), thì \(f(x)\) tiến gần \(L\). Giới hạn phụ thuộc hành vi quanh điểm, **không bắt buộc** \(f(a)\) có nghĩa hoặc bằng \(L\).</div>

    **Chính xác hơn:** Điều kiện cần xem \(a\) là điểm có thể tiến gần từ các giá trị của miền xác định. Với mọi \(\varepsilon>0\) phải chọn được \(\delta>0\) để \(0<|x-a|<\delta\) (và \(x\) thuộc miền xác định) kéo theo \(|f(x)-L|<\varepsilon\). Khi chỉ có miền từ một phía, phải ghi rõ hướng tiến gần.

    <figure class="thpt-r4-plot"><img src="../../../../../assets/images/thpt/FIG-G11-B16-01_R01.svg" loading="lazy" alt="Đồ thị y=x+2 có lỗ rỗng tại tọa độ (2,4), thể hiện giới hạn bằng 4 dù hàm không xác định tại 2"><figcaption>Đọc hình: **vòng tròn rỗng** ở (2;4) chỉ hàm gốc không xác định tại điểm ấy; các điểm trên hai nhánh đường vẫn tiến gần mức 4. Không kết luận giới hạn không tồn tại chỉ vì có lỗ.</figcaption></figure>

    ### 2.2. Giới hạn một phía và điều kiện giới hạn hai phía

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Một phía:</strong> \(x\to a^-\) nghĩa là \(x<a\), \(x\to a^+\) nghĩa là \(x>a\). Khi miền xác định có điểm đủ gần ở **cả hai phía**, giới hạn hữu hạn hai phía \(\lim_{x\to a}f(x)=L\) tồn tại **khi và chỉ khi** hai giới hạn trái/phải đều bằng cùng \(L\).</div>

    **Không nhầm:** Hàm có thể có \(f(a)\) xác định nhưng vẫn không có giới hạn hai phía; ngược lại có thể có giới hạn nhưng \(f(a)\) không xác định. Giá trị tại ngưỡng cần xử lý riêng.

    ### 2.3. Phép toán và cách giải dạng \(0/0\)

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Điều kiện:</strong> Với các giới hạn hữu hạn, tổng/hiệu/tích tuân theo các phép toán thông thường; thương cần **giới hạn mẫu khác 0**. Nếu thay trực tiếp ra \(0/0\), cần **biến đổi biểu thức đúng trên miền gần điểm** (phân tích nhân tử, rút gọn khi \(x\ne a\), nhân liên hợp) rồi mới áp dụng quy tắc.</div>

    **Nhân liên hợp:** \((\sqrt A-\sqrt B)(\sqrt A+\sqrt B)=A-B\), với \(A,B\ge0\). Nhân cả tử và mẫu, kiểm mẫu mới khác 0 trong vùng đang xét. Không coi \(0/0\) là kết quả.

    ### 2.4. Giới hạn vô cực tại điểm và giới hạn ở vô cực

    Một hàm có thể tăng/giảm không bị chặn khi \(x\to a^-\) hoặc \(a^+\); ký hiệu \(+\infty,-\infty\) diễn tả xu hướng chứ không phải số thực để cộng/chia tùy tiện.

    Khi \(x\to\pm\infty\), ta phân tích bậc trội hoặc nhân liên hợp. **Bẫy dấu:** \(\sqrt{x^2}=|x|\). Khi \(x\to-\infty\), \(|x|=-x\), nên các giới hạn kiểu \(\sqrt{x^2+c}/x\) thường tiến đến \(-1\), không phải \(1\).

    **Ứng dụng:** Hàm bước phí gửi xe có giới hạn trái/phải khác nhau tại một ngưỡng; hàm hiệu suất \(100t/(t+5)\) tiến về mức 100 dù giá trị mô hình tại mọi \(t\) hữu hạn vẫn nhỏ hơn 100. Không dùng một điểm dữ liệu để suy cả xu hướng.

=== "Ví dụ"

    Mỗi Ví dụ nêu phương pháp trước, rồi giải và kiểm miền/điều kiện.

    ### 3.1. Khử dạng (0/0) bằng phân tích nhân tử

    <div class="thpt-g10-example-solution"><p>**Đề:** Tính \(\lim_{x\to2}\frac{x^2-4}{x-2}\). **Chọn phương pháp:** Thế trực tiếp ra \(0/0\), cần phân tích tử. **Giải:** Với \(x\ne2\), \((x-2)(x+2)/(x-2)=x+2\), do đó giới hạn bằng \(4\). **Kiểm:** Hàm gốc không xác định tại 2 nhưng tiến gần 4 khi \(x\) gần 2.</p></div>

    ### 3.2. Hai phía có dấu mẫu trái nhau

    <div class="thpt-g10-example-solution"><p>**Đề:** Tính \(\lim_{x\to1^-}1/(x-1)\) và \(\lim_{x\to1^+}1/(x-1)\). **Chọn phương pháp:** Tử dương; dấu mẫu khác phía. **Giải:** Bên trái mẫu âm rất nhỏ → \(-\infty\); bên phải mẫu dương rất nhỏ → \(+\infty\). **Kiểm:** Không kết luận có giới hạn hai phía hữu hạn.</p></div>

    ### 3.3. Giới hạn chứa căn ở dương vô cực

    <div class="thpt-g10-example-solution"><p>**Đề:** Tính \(\lim_{x\to+\infty}(\sqrt{x^2+x}-x)\). **Chọn phương pháp:** Hiệu hai số lớn gây dạng \(\infty-\infty\), dùng liên hợp. **Giải:** \(\sqrt{x^2+x}-x=\frac{x}{\sqrt{x^2+x}+x}=\frac1{\sqrt{1+1/x}+1}\) khi \(x>0\) đủ lớn, nên giới hạn \(=1/2\). **Kiểm:** \(x>0\) cho phép \(\sqrt{x^2}=x\).</p></div>

    ### 3.4. Âm vô cực cần giữ đúng trị tuyệt đối

    <div class="thpt-g10-example-solution"><p>**Đề:** Tính \(\lim_{x\to-\infty}\frac{\sqrt{x^2+1}}x\). **Chọn phương pháp:** Tách \(|x|\), không tách x tùy tiện. **Giải:** \(\frac{|x|}{x}\sqrt{1+1/x^2}\to(-1)\cdot1=-1\). **Kiểm:** Biểu thức gốc âm với mọi \(x<0\) đủ xa, không thể có giới hạn \(+1\).</p></div>

    ### 3.5. Hai phía khớp dù biểu thức thay đổi

    <div class="thpt-g10-example-solution"><p>**Đề:** Cho \(f(x)=x^2\) nếu \(x\le2\), \(f(x)=3x-2\) nếu \(x>2\). Tìm \(\lim_{x\to2}f(x)\). **Chọn phương pháp:** Xét trái và phải độc lập. **Giải:** \(\lim_{x\to2^-}x^2=4\); \(\lim_{x\to2^+}(3x-2)=4\); nên giới hạn hai phía bằng \(4\). **Kiểm:** Giá \(f(2)=4\) khớp nhưng không thay cho bước so hai phía.</p></div>

    ### 3.6. Mô hình hiệu suất có mức bão hòa

    <div class="thpt-g10-example-solution"><p>**Đề:** \(H(t)=\frac{100t}{t+5}\) với \(t\ge0\). Mức hiệu suất mô hình tiến đến đâu khi \(t\to+\infty\)? **Chọn phương pháp:** Chia cả tử/mẫu cho t, kiểm miền t>0. **Giải:** \(H(t)=100/(1+5/t)\to100\). **Kiểm:** Với mọi \(t\ge0\), \(H(t)<100\) và tăng về mức 100; mô hình không bảo đảm thiết bị thực đạt đúng 100.</p></div>

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

        **Tự sửa:** Giữ miền (x
e a); phân tích/rút gọn hoặc nhân cả tử và mẫu với liên hợp; Practice B16-P01.

    <span data-thpt-help-id="HELP-G11-B16-04" hidden></span>

    ??? tip "4.4. Bỏ dấu của mẫu hoặc căn khi (x	o-infty)"

        **Vì sao sai:** Bỏ điều kiện hoặc hiểu sai ý nghĩa giới hạn.

        **Tự sửa:** Bảng dấu từng phía, (sqrt{x^2}=|x|); ôn 2.4–2.5, giải Practice B16-P04/P06.

    **Học tiếp:** [Core và Luyện tập](../luyen-tap/) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/) · [Tự luận Chương V](../../../../thu-vien/tu-luan-g11-chuong-v/).

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập một, Bài 16 (trang in 111–118).</p>


## REVIEW SOURCE B16 END


---

## REVIEW SOURCE B17 BEGIN · 02a7108c041a3eb42460c760334f7c05ae7f8dca

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

        **Tự sửa:** Kiểm đủ ba bước: f(a) có nghĩa, giới hạn hữu hạn tồn tại, chúng bằng nhau. Ôn mục 2.1; luyện Core B17-C01/C02 ở [Luyện tập](../luyen-tap/).

    ### 1.2. Tại điểm nối của hàm từng đoạn, phải kiểm hai phía và giá trị thật

    Nếu quy tắc tính thay đổi tại \(x=a\), ta không thể tự dùng một công thức duy nhất. Hãy tính \(\lim_{x\to a^-}f(x)\), \(\lim_{x\to a^+}f(x)\), và \(f(a)\). Ba giá trị phải khớp mới liên tục. Câu hỏi “tham số bao nhiêu?” chính là bài toán **ép ba giá trị khớp**.

    **Vận dụng — Tự thử trước Core.** Cho \(f(x)=mx+1\) khi \(x<2\) và \(f(x)=x^2-1\) khi \(x\ge2\). Tìm \(m\) để f liên tục tại 2.

    <span data-ped-first-try="2" data-outcome-id="G11-B17-CONTINUITY_POINT" data-thpt-first-try-id="THPT-G11-B17-TRY02" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Giới hạn trái là \(2m+1\), giới hạn phải là \(2^2-1=3\); \(f(2)=3\). Liên tục khi \(2m+1=3\), suy ra \(\boxed{m=1}\). Phải dùng **nhánh phải** để xác định giá trị tại 2 vì dấu \(\ge\).

    <span data-thpt-help-id="HELP-G11-B17-TRY02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Cho x=2 vào nhánh có dấu < hoặc chỉ so hai biểu thức mà quên f(2).

        **Tự sửa:** Đánh dấu nhánh chứa dấu bằng để lấy f(a), rồi so trái/phải. Ôn mục 2.1; luyện Practice B17-P02/P06 trong [Core và Luyện tập](../luyen-tap/).

    ### 1.3. Liên tục trên đoạn cần kiểm hai đầu mút theo đúng phía

    Liên tục trên khoảng \((a,b)\) nghĩa là liên tục ở mọi điểm bên trong. Với đoạn **đóng** \([a,b]\), còn phải kiểm \(\lim_{x\to a^+}f(x)=f(a)\) và \(\lim_{x\to b^-}f(x)=f(b)\). Không đòi xét giá trị từ bên **ngoài đoạn**; ví dụ \(\sqrt x\) có nghĩa cho \(x\ge0\) mà vẫn liên tục trên \([0,9]\).

    **Vận dụng — Tự thử trước Core.** Hàm \(f(x)=\sqrt{x}\) liên tục trên \([0,4]\) không? Tại \(x=0\) phải xét giới hạn từ phía nào?

    <span data-ped-first-try="3" data-outcome-id="G11-B17-CONTINUITY_INTERVAL" data-thpt-first-try-id="THPT-G11-B17-TRY03" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Có. Trên \((0,4)\), căn bậc hai liên tục. Tại 0, xét \(\lim_{x\to0^+}\sqrt x=0=f(0)\); tại 4, xét \(\lim_{x\to4^-}\sqrt x=2=f(4)\). Vì vậy f liên tục trên **đoạn \([0,4]\)**; không cần giới hạn trái tại 0.

    <span data-thpt-help-id="HELP-G11-B17-TRY03" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Cho rằng không liên tục vì (sqrt x) không định nghĩa với (x<0).

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

        **Tự sửa:** Tìm miền xác định trước, sau đó áp dụng định lý hàm sơ cấp. Ôn mục 2.3; luyện Practice B17-P01 trong [Luyện tập](../luyen-tap/).

    ### 1.5. Tổng, tích và thương các hàm liên tục vẫn cần điều kiện

    Nếu \(f,g\) liên tục tại \(a\), tổng, hiệu, tích cũng liên tục tại \(a\). Thương \(f/g\) chỉ liên tục nếu **\(g(a)\ne0\)**. Đây chính là điều kiện phép chia của giới hạn Bài 16. Những quy tắc ấy không cho phép bỏ qua miền xác định hoặc lấy giá trị tại chỗ phân thức có mẫu bằng 0.

    **Vận dụng — Tự thử trước Core.** Hai hàm \(f(x)=x+1\), \(g(x)=x-3\) liên tục mọi nơi. Thương \(f/g\) có liên tục tại \(x=3\) không?

    <span data-ped-first-try="5" data-outcome-id="G11-B17-CONTINUITY_OPERATIONS" data-thpt-first-try-id="THPT-G11-B17-TRY05" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Không. Tại \(x=3\), \(g(3)=0\) nên \((f/g)(3)\) **không xác định**. Thương \((x+1)/(x-3)\) liên tục ở mọi \(x\ne3\), nhưng không thể gọi liên tục tại 3 dù từng hàm f,g đều liên tục.

    <span data-thpt-help-id="HELP-G11-B17-TRY05" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Cho rằng thương hai hàm liên tục luôn liên tục ở mọi số thực.

        **Tự sửa:** Thêm kiểm (g(a)
e0) trước khi dùng quy tắc. Ôn mục 2.3, luyện Practice B17-P01/P04.

    ### 1.6. Đổi dấu và liên tục: vì sao bảo đảm ít nhất một nghiệm?

    Nếu một hàm **liên tục trên cả đoạn \([a,b]\)** và \(f(a)f(b)<0\), nó phải đi qua giá trị 0 tại **ít nhất một** điểm trong \((a,b)\). Đây là ứng dụng định lý giá trị trung gian. Nhưng **đổi dấu không tự chứng minh nghiệm duy nhất**: một đường liên tục có thể đi qua trục hoành nhiều lần.

    **Vận dụng — Tự thử trước Core.** Cho \(p(x)=x^3-5\) trên \([1,2]\). Chứng minh tồn tại nghiệm trong \((1,2)\). Có được kết luận ngay “nghiệm duy nhất” chỉ từ hai giá trị ở đầu đoạn không?

    <span data-ped-first-try="6" data-outcome-id="G11-B17-ZERO_EXISTENCE" data-thpt-first-try-id="THPT-G11-B17-TRY06" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** Đa thức liên tục trên \([1,2]\). \(p(1)=-4<0\), \(p(2)=3>0\), nên theo định lý giá trị trung gian tồn tại **ít nhất một** \(c\in(1,2)\) với \(p(c)=0\). Chỉ từ điều kiện liên tục và đổi dấu chưa thể khẳng định **duy nhất**; nếu muốn chứng minh riêng tính duy nhất của bài này, cần thêm lập luận đơn điệu \(x^3-5\) tăng nghiêm ngặt.

    <span data-thpt-help-id="HELP-G11-B17-TRY06" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Viết “đổi dấu nên có đúng một nghiệm” mà không xét thêm tính đơn điệu.

        **Tự sửa:** Chỉ kết luận **ít nhất một**, sau đó nêu yêu cầu riêng để chứng minh duy nhất. Ôn mục 2.4; làm Practice B17-P03/P07 tại [Luyện tập](../luyen-tap/).

=== "Kiến thức SGK"

    ### 2.1. Hàm số liên tục tại một điểm

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa:</strong> Hàm \(f\) liên tục tại \(a\) nếu **\(f(a)\) xác định**, giới hạn hữu hạn \(\lim_{x\to a}f(x)\) tồn tại (theo các phía phù hợp của miền xác định) và
    \[
      \lim_{x\to a}f(x)=f(a).
    \]
    Với điểm trong miền có hai phía, phải khớp cả giới hạn trái và phải. Không sử dụng một hình vẽ “liền nét” thay cho ba điều kiện toán học.</div>

    <figure class="thpt-r4-plot"><img src="../../../../../assets/images/thpt/FIG-G11-B17-01_R01.svg" loading="lazy" alt="Đồ thị có lỗ rỗng tại (1,2) và chấm đặc tại (1,0) cho thấy giới hạn là 2 nhưng f(1)=0"><figcaption>Đọc hình: **vòng tròn rỗng** tại \((1;2)\) mô tả giá trị được tiến gần; **chấm đặc** tại \((1;0)\) là \(f(1)\) thật. Hai độ cao không khớp ⇒ hàm **không liên tục tại 1**.</figcaption></figure>

    ### 2.2. Liên tục trên khoảng và trên đoạn

    Hàm liên tục trên \((a,b)\) nếu liên tục ở mọi điểm thuộc khoảng. Hàm liên tục trên **đoạn \([a,b]\)** nếu liên tục trên \((a,b)\), và
    \[
    \lim_{x\to a^+}f(x)=f(a),\qquad \lim_{x\to b^-}f(x)=f(b).
    \]
    **Ở hai đầu mút** chỉ xét phía thuộc đoạn. Điều kiện còn cần mọi điểm trên đoạn đều thuộc miền xác định.

    ### 2.3. Hàm sơ cấp và phép toán với hàm liên tục

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Quy tắc:</strong> Hàm đa thức liên tục trên \(\mathbb R\). Hàm phân thức liên tục tại nơi mẫu khác \(0\). Hàm căn liên tục trên miền xác định (đầu mút xét một phía). Tổng, hiệu, tích của hai hàm liên tục tại a cũng liên tục; thương cần thêm **mẫu tại a khác 0**.</div>

    Với hàm từng phần, **tính hai giới hạn một phía và giá trị tại điểm ghép**; không chỉ xét công thức có dấu bằng rồi kết luận.

    ### 2.4. Định lý giá trị trung gian và hệ quả về nghiệm

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Định lý và hệ quả:</strong> Nếu \(f\) **liên tục trên đoạn \([a,b]\)** thì với mọi số \(L\) nằm giữa \(f(a)\) và \(f(b)\), tồn tại \(c\in[a,b]\) sao cho \(f(c)=L\). Đặc biệt, nếu \(f(a)f(b)<0\), tồn tại **ít nhất một** \(c\in(a,b)\) có \(f(c)=0\).</div>

    **Giới hạn suy luận:** Không khẳng định nghiệm duy nhất từ đổi dấu. Nếu muốn kết luận duy nhất còn cần cơ sở khác, chẳng hạn chứng minh hàm **tăng/giảm nghiêm ngặt** trên đoạn.

=== "Ví dụ"

    Mỗi Ví dụ có lí do chọn phương pháp và bước kiểm điều kiện.

    ### 3.1. Lấp lỗ bằng giá trị đúng giới hạn

    <div class="thpt-g10-example-solution"><p>**Đề:** Với \(f(x)=\frac{x^2-16}{x-4}\) khi \(x\ne4\) và \(f(4)=m\), tìm m để liên tục tại 4. **Chọn phương pháp:** Tính giới hạn quanh 4 trước. **Giải:** Với \(x\ne4\), \(f(x)=x+4\); giới hạn bằng 8. Do đó \(m=8\). **Kiểm:** Khi đặt m=8, giá trị tại 4 khớp giới hạn.</p></div>

    ### 3.2. Nối hai công thức với tham số

    <div class="thpt-g10-example-solution"><p>**Đề:** \(f(x)=x+1\) nếu \(x<1\), \(f(x)=m\) nếu \(x\ge1\). **Chọn phương pháp:** So trái, phải và giá trị tại điểm nối. **Giải:** Giới hạn trái bằng 2, giới hạn phải bằng m, \(f(1)=m\). Liên tục tại 1 khi và chỉ khi \(m=2\). **Kiểm:** Khi m khác 2, hàm bị nhảy tại 1.</p></div>

    ### 3.3. Hàm căn trên đoạn đóng

    <div class="thpt-g10-example-solution"><p>**Đề:** Chứng minh \(f(x)=\sqrt x\) liên tục trên \([0,9]\). **Chọn phương pháp:** Kiểm trong khoảng và **hai giới hạn một phía** ở đầu. **Giải:** Căn liên tục trên \((0,9)\); \(\lim_{x\to0^+}\sqrt x=0=f(0)\); \(\lim_{x\to9^-}\sqrt x=3=f(9)\). **Kiểm:** Không đòi giá trị với \(x<0\).</p></div>

    ### 3.4. Miền liên tục của phân thức

    <div class="thpt-g10-example-solution"><p>**Đề:** \(h(x)=\frac{x+1}{x-2}\) liên tục ở đâu? **Chọn phương pháp:** Tìm miền xác định trước. **Giải:** Hàm phân thức liên tục khi mẫu khác 0, tức trên \((-\infty,2)\) và \((2,\infty)\). **Kiểm:** Tại 2, mẫu 0 và h không xác định.</p></div>

    ### 3.5. Tồn tại nghiệm nhưng chưa đủ để nói duy nhất

    <div class="thpt-g10-example-solution"><p>**Đề:** Chứng minh \(g(x)=x^3+x-1\) có nghiệm trong \((0,1)\). **Chọn phương pháp:** Dùng định lý giá trị trung gian. **Giải:** g là đa thức nên liên tục trên \([0,1]\); \(g(0)=-1<0\), \(g(1)=1>0\), suy ra tồn tại \(c\in(0,1)\) với \(g(c)=0\). **Kiểm:** Lập luận này **chỉ xác nhận ít nhất một nghiệm**; nếu cần duy nhất, chứng minh thêm g tăng nghiêm ngặt.</p></div>

    ### 3.6. Phản ví dụ: đổi dấu vẫn có thể có ba nghiệm

    <div class="thpt-g10-example-solution"><p>**Đề:** Xét \(p(x)=x(x-1)(x+1)\) trên \([-2,2]\). Hai đầu có trái dấu không, và p có bao nhiêu nghiệm phân biệt? **Chọn phương pháp:** Tính hai đầu và phân tích nhân tử, không suy duy nhất từ đổi dấu. **Giải:** \(p(-2)=(-2)(-3)(-1)=-6<0\), \(p(2)=2\cdot1\cdot3=6>0\). Nhưng p có **ba nghiệm** \(-1,0,1\) nằm trong đoạn. **Kiểm:** Ví dụ bác bỏ kết luận “trái dấu ⇒ đúng một nghiệm”.</p></div>

    ### 3.7. Ứng dụng: kiểm tính liên tục của bảng cước taxi theo quãng đường

    <div class="thpt-g10-example-solution"><p><strong>Đề:</strong> Trong một **mô hình giả định tính cước liên tục theo kilômét**, khách trả 10.000 đồng cho \(0<x\le0{,}5\) km; phần quãng đường vượt \(0{,}5\) đến \(30\) km tính 13.500 đồng/km; phần **vượt 30** km tính 11.000 đồng/km. Viết hàm cước \(C(x)\) và kiểm tính liên tục tại \(x=0{,}5\) và \(x=30\).</p>
    <p><strong>Chọn phương pháp:</strong> Mỗi mức giá theo kilomet chỉ áp cho **phần vượt ngưỡng**, nên sau ngưỡng phải cộng số tiền tích lũy ở ngưỡng trước. Sau đó so giới hạn trái/phải với giá tại ngưỡng, không lấy giá 13.500 làm toàn bộ cước của km sau.</p>
    <p><strong>Lời giải:</strong> Với \(x>0\), đơn vị đồng:
    \[
    C(x)=\begin{cases}
    10000,&0<x\le0{,}5,\\
    10000+13500(x-0{,}5),&0{,}5<x\le30,\\
    10000+13500(30-0{,}5)+11000(x-30),&x>30.
    \end{cases}
    \]
    Khi \(x\to0{,}5^-\) và \(x\to0{,}5^+\), hai phía đều tiến tới 10.000 đồng, đúng \(C(0{,}5)\). Tại \(x=30\), hai phía đều tiến tới \(10000+13500\cdot29{,}5=408250\) đồng, đúng \(C(30)\). Vì vậy mô hình liên tục ở **hai điểm ghép**.</p>
    <p><strong>Kiểm lại:</strong> Mỗi nhánh là hàm liên tục trên khoảng của nó. Đây là **mô hình cước lũy tiến giả định** giúp học điều kiện liên tục, không khẳng định biểu phí thực tế hay cơ chế làm tròn từng km của hãng taxi.</p></div>

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

    **Học tiếp:** [Core và Luyện tập](../luyen-tap/) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/) · [Tự luận Chương V](../../../../thu-vien/tu-luan-g11-chuong-v/).

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập một, Bài 17 (trang in 119–122).</p>


## REVIEW SOURCE B17 END


---

## Q18 AUTHORING SOURCE RECEIPT BEGIN · 909f19a2c2216129f67b50fe2ede3dc81646167d

# G11 Chương V · Giới hạn — Hàm số liên tục · Q18 AUTHORING source-lock 2026-11-22

**SINGLE MASTER/CHECKPOINT:** [#987](https://github.com/TMA2015/self-learning-math/issues/987) · 51 SGK lessons sequentially G11 B02–B33 → G12 B01–B19, chapter authoring when feasible, each lesson verified separately. **PACKET:** G11-SGK-CHV-B15-B17-GOLDEN-20261122. **STANDARD:** \`SLM-THPT-QUALITY-ONE v3.2.0\`, Q01–Q18, approved R02 SGK checklist A1–A6, Project Sources 05–08. **BRANCH:** \`authoring/sgk-g11-chv-b15-b17-r02-20261122\`. **ROLE:** AUTHORING_ONLY, no RELEASE changes. **CHANGE_CLASS:** \`DELTA_C_ACADEMIC_MATERIAL\` for newly rewritten pedagogy, question stems, solutions and worked examples; additionally presentational Golden source changes. **Q18_MODE:** AUTHOR_SELF_VERIFIED 2026-11-22 (not independent reviewer). **DISPOSITION:** \`AUTHORING_SOURCE_CANDIDATE_READY\`, **NOT_NEW_CONTENT_READY_V2**, **NOT_RELEASE**.

## Q18 · One learner canonical per lesson and exact source SHA

All learner paths are **existing** canonical files, no duplicate “R02 learner” copied to a second website path. After editing, all three source bytes were fetched again from the same branch and source-locked here.

| Lesson | Learner canonical path | original main Git blob | new authoring candidate Git blob |
| --- | --- | --- | --- |
| G11-B15 | \`docs/thpt-preview/sgk/lop-11/chuong-v/bai-15.md\` | \`95bbe5ecdd73b92f88176ae0245e11b1098d8e6e\` | \`2dc6509c170da4b1f8ac17eeebd4ef9da96b0487\` |
| G11-B16 | \`docs/thpt-preview/sgk/lop-11/chuong-v/bai-16.md\` | \`a2242eeb50ae0f02643182bf10c315c41ce05c3b\` | \`e25d6493544159692c080808cdc11402848c6eb1\` |
| G11-B17 | \`docs/thpt-preview/sgk/lop-11/chuong-v/bai-17.md\` | \`36a7c21f3ae2474318c1e857acbcb640680e1326\` | \`02a7108c041a3eb42460c760334f7c05ae7f8dca\` |

**This is the only new Q18 authoring receipt for the chapter**, distinct from the immutable original R03 source \`prototypes/thpt/content-drafts/G11_CHV_B15_B17_S1_PAGINATION_EQUIVALENT_R03_SOURCE_20261102.md\` Git blob \`7934757ed06de4ae4b63dbc351ef524fc054e0d0\` and historical independent R02/R03 receipt \`prototypes/thpt/review-packets/G11_CHV_R03_COMBINED_INDEPENDENT_R02_ACADEMIC_PED_AND_AUTHOR_S1_RECEIPT_20261102.md\` Git blob \`2fdc39c755f399b0df81e17a9c8978384612e2f1\`. Prior independent Academic+PED PASS **belongs only to original R02 immutable content**, then R03 Delta B equivalent metadata correction, and is NOT inherited by this new Delta C learner revision.

## Q01–Q02 · Primary source status and 17 registered outcomes

**Compulsory S1 scope:** *SGK Toán 11 — Kết nối tri thức với cuộc sống, tập một*, Chương V \`Giới hạn. Hàm số liên tục\`, B15 **printed pp104–110**, B16 **111–118**, B17 **119–122**, end ChV exercises **p123**. Previous owner R03 academic source contains exact reviewed 17-outcome mapping (16 per-lesson + one chapter synthesis) and the three prior SVGs. In this authoring turn the accessible public text of B17 SGK pp119–122 was directly examined (headings: continuous at a point, on an interval, properties, application taxi fares); B15/B16 book indexes, public source descriptions and R03 were checked, **but no new final-print SGK page-image direct screenshot or full original SGK volume pagination audit was performed**. Do not mark **NEW_SGK_FINAL_PRINT_PAGE_IMAGE_PASS**.

**SBT primary source provenance:** Original SBT Toán 11 KNTT Tập một scan receipt \`prototypes/thpt/review-packets/G11_CHV_SBT_TAP1_PRIMARY_PDF_S1_PAGINATION_CORRECTION_20261102.md\`, immutable Git blob \`4d409171aa69ef9b30aae4756959ec1e325a13d3\`; original SBT PDF **154 pages**, SHA256 \`fb5292103e5b682531ce37b5f30598393bba81b2943da9c1a374fdeb56557229\`. The direct original scan **historically** verified SBT printed B15 pp75–78, B16 79–83, B17 84–86, final ChV 87–90, solutions pp145–153. The historical NotebookLM SBT p96–116 cited in its initial report is incorrect for that original PDF and was superseded by author-only source metadata correction. No **fresh** original SBT PDF rescan during this work. The SBT guides exercise forms and cannot replace SGK Core mathematics.

**Q02 outcome families exactly from original canonical skill register:**
- B15 \`G11-B15-FINITE_SEQUENCE\` (finite limit and its meaning, including zero), \`INFINITE_SEQUENCE\` (±∞ and oscillation), \`LIMIT_ARITHMETIC\` (rules/denominator condition), \`GEOMETRIC\` (|q|<1 infinite geometric progression), \`GEOMETRIC_APPLICATION\` (summed model);
- B16 \`G11-B16-LIMIT_AT_POINT\` (finite limit independent of f(a)), \`ONE_SIDED\`, \`ALGEBRAIC_TECHNIQUES\` (factor/rationalize), \`LIMIT_AT_INFINITY\` (dominant degree and |x| at negative infinity), \`INFINITE_LIMIT\` (left/right signed infinite behavior), \`REAL_CONTEXT\` (fees or saturation);
- B17 \`G11-B17-CONTINUITY_POINT\`, \`CONTINUITY_INTERVAL\`, \`ELEMENTARY_CONTINUITY\`, \`CONTINUITY_OPERATIONS\`, \`ZERO_EXISTENCE\` (IVT existence, no automatic uniqueness).
- One additional **chapter synthesis outcome** remains in historical register/chapter hub; SGK Chapter Readiness stays independent from Topic. No invented new official skill or grading bank.

## Q03–Q14 · Academic/PED evidence per lesson

**G11-B15 — sequence limits:** Four Golden tabs; **six** concept-first Why→Try→opened comparison→D6 remediation pathways; **four** formal SGK knowledge sections on finite/ε-N limit, infinity and divergence, arithmetic/conditions and infinite geometric sum, with original SVG \`FIG-G11-B15-01_R01.svg\` Git blob \`632bef51196757f9c71f54c53bb3c7639ce158e0\` and explicit discrete-axis reading cue; **six** worked examples explaining choice, mathematical steps and checks; **four** general misconceptions. The |q|<1 condition is explicit, q<0 can converge, infinite sum is a limit of partial sums, no last-term misconception. Includes bouncing ball model with first drop counted once.

**G11-B16 — function limits:** Four tabs, six voluntarily attempted cases and local D6; four Knowledge sections (at-point, one-sided, algebraic techniques/denominator, signed infinity and \(\pm\infty\)); six self-contained worked examples; four general misconception groups. Original hole-at-(2,4) SVG Git blob \`d623e8a96c6d5f9723aafb9c62bffe57bdc9aa73\` retained and described. Builds rationalization from \((\sqrt A-b)(\sqrt A+b)\), controls x≠a, two-sided vs one-sided and \(\sqrt{x^2}=|x|\) at \(x\to-\infty\). Includes parking fee jump and modeled efficiency saturation.

**G11-B17 — continuity:** Four tabs, six voluntary D6 paths, four Knowledge sections (at point, on closed intervals/endpoints, elementary/operations, intermediate value property), **seven** fully solved independent examples, four general mistakes; original removable-discontinuity SVG Git blob \`0cc06960b371bca72ee78da414a04aa56f5e5fbe\` with cue distinguishing open circle at the limit from solid \(f(a)\). Covers 3 continuity conditions, left/right branches, endpoints, denominator nonzero and IVT **at least one zero** (unique only with extra reasoning). Worked example 3.7 uses a **clearly hypothetical continuous tariff model**, shows cumulative cost and checks both thresholds \(.5\) and 30 km, consistent with the B17 SGK theme without asserting real commercial prices or kilometer rounding.

**Per-lesson static learner-source QA on these exact blobs**: **20/20 ×3 = 60/60 PASS**. Asserts four tabs in Golden order; six distinct concept arcs/FirstTry/optional answer/local D6; four formal sections; six/six/seven independently structured examples; four general errors; 10 unique HELP IDs each; FirstTry unique and no cloning original bank; registered outcome skills; exact original SVG/caption; one final SGK footer; correct actual Written URL; balanced MathJax delimiters; no inline CSS/JS or student-facing admin tokens; no duplicated Written canonical. All 18 FirstTry IDs are unique **across the chapter**. These source-static counts **do not prove browser MathJax/SVG/mobile rendering**.

**Math verification independently recalculated in same author session:** **37/37** concrete example/FirstTry assertions PASS; **100,000** seeded randomized algebra consistency assertions PASS over 10,000 generated samples, including geometric partial sum identity and its remainder, epsilon-N calculation, rational factorization, rationalization equality, negative-root sign, positive-infinite conjugation, and both taxi tariff boundary levels/increments. Worst relative numerical residual \(2.14\cdot10^{-12}\), below specified tolerance; numerical consistency complements rather than substitutes for explanations, eligibility conditions and original SGK verification. The 3.7 taxi example was inserted **before** final 60/60 source QA and bound to final B17 Git SHA.

## Q15/Q16 · Canonical question safety and item–outcome–role mapping

Existing unchanged PUBLIC canonical Core/Practice/Application bank \`docs/assets/javascripts/thpt-g11-chv-b15-b17-source-locked-formative-r03.js\` original Git blob \`cbe3608a8551b85440e955835706f7046d88ef7d\` = **30 records**, 10 each B15/B16/B17 (original 9 Core, 17 Practice, 4 Application across chapter per original hub), untouched. New learner-first-try entries are **18 different unscored pedagogic items**, each exactly one source-owned stem and its opt-in answer + help on the same canonical learner file, not an official item in old bank or a new grading database:

| ITEM_ID | OUTCOME_ID | ROLE / PLACEMENT |
| --- | --- | --- |
| `THPT-G11-B15-TRY01` | `G11-B15-FINITE_SEQUENCE` | SGK_KNOWLEDGE_FIRST_TRY · G11-B15 |
| `THPT-G11-B15-TRY02` | `G11-B15-FINITE_SEQUENCE` | SGK_KNOWLEDGE_FIRST_TRY · G11-B15 |
| `THPT-G11-B15-TRY03` | `G11-B15-FINITE_SEQUENCE` | SGK_KNOWLEDGE_FIRST_TRY · G11-B15 |
| `THPT-G11-B15-TRY04` | `G11-B15-INFINITE_SEQUENCE` | SGK_KNOWLEDGE_FIRST_TRY · G11-B15 |
| `THPT-G11-B15-TRY05` | `G11-B15-LIMIT_ARITHMETIC` | SGK_KNOWLEDGE_FIRST_TRY · G11-B15 |
| `THPT-G11-B15-TRY06` | `G11-B15-GEOMETRIC_APPLICATION` | SGK_KNOWLEDGE_FIRST_TRY · G11-B15 |
| `THPT-G11-B16-TRY01` | `G11-B16-LIMIT_AT_POINT` | SGK_KNOWLEDGE_FIRST_TRY · G11-B16 |
| `THPT-G11-B16-TRY02` | `G11-B16-ONE_SIDED` | SGK_KNOWLEDGE_FIRST_TRY · G11-B16 |
| `THPT-G11-B16-TRY03` | `G11-B16-ALGEBRAIC_TECHNIQUES` | SGK_KNOWLEDGE_FIRST_TRY · G11-B16 |
| `THPT-G11-B16-TRY04` | `G11-B16-INFINITE_LIMIT` | SGK_KNOWLEDGE_FIRST_TRY · G11-B16 |
| `THPT-G11-B16-TRY05` | `G11-B16-LIMIT_AT_INFINITY` | SGK_KNOWLEDGE_FIRST_TRY · G11-B16 |
| `THPT-G11-B16-TRY06` | `G11-B16-REAL_CONTEXT` | SGK_KNOWLEDGE_FIRST_TRY · G11-B16 |
| `THPT-G11-B17-TRY01` | `G11-B17-CONTINUITY_POINT` | SGK_KNOWLEDGE_FIRST_TRY · G11-B17 |
| `THPT-G11-B17-TRY02` | `G11-B17-CONTINUITY_POINT` | SGK_KNOWLEDGE_FIRST_TRY · G11-B17 |
| `THPT-G11-B17-TRY03` | `G11-B17-CONTINUITY_INTERVAL` | SGK_KNOWLEDGE_FIRST_TRY · G11-B17 |
| `THPT-G11-B17-TRY04` | `G11-B17-ELEMENTARY_CONTINUITY` | SGK_KNOWLEDGE_FIRST_TRY · G11-B17 |
| `THPT-G11-B17-TRY05` | `G11-B17-CONTINUITY_OPERATIONS` | SGK_KNOWLEDGE_FIRST_TRY · G11-B17 |
| `THPT-G11-B17-TRY06` | `G11-B17-ZERO_EXISTENCE` | SGK_KNOWLEDGE_FIRST_TRY · G11-B17 |

Original Written/Anchor unified library \`docs/thpt-preview/thu-vien/tu-luan-g11-chuong-v.md\` Git blob \`047f42f1d3cd241d1d5155e6f7ebc3c5bdd20aff\`, **six** canonical Written, unchanged, one library URL reused by all lessons. Original **17 private RD1** protected items and hashes kept out of public GitHub. No answer/key/rubric mutation to original student bank, no new Mastery, student data, official Final Submit/Readiness exposure, scoring engine, Firebase, Gemini or authentication changes. \`CLIENT_SELF_CHECK_NO_MASTERY\` remains the visible self-check rule. No exhaustive historical-branch duplicate ID search is claimed.

## Q17/Q18 · disposition, blockers and boundaries

**SOURCE_SCOPED_AUTHOR_SELF_VERIFIED** for these exact three Git blobs; no observed P0/P1 in examined math/structure/pedagogic scope. No fresh independent NotebookLM review was run: historical R02 used **five Permanent Sources v2.0**, new Delta-C review requires **current exactly five Permanent Sources v2.1** and must assess **affected outcomes and text**, not retroactively re-label old PASS. New source-matched V2 handoff, \`ready/\` manifest, REGISTER parity and independent reviewer verdict are **NOT** completed for these rewritten learner SHA; cannot infer new \`CONTENT_READY\` from prior R03 old-source receipts.

**RELEASE not in scope:** no integration, browser QA AP1–AP5, CI on current HEAD, R1–R5, P1/P2 real-device Safari, official RD1/Final Submit readiness, merge, deploy, owner authorization or live production claims. Release priority remains separate Math Lab 25 → Topics 22. Next AUTHORING task can start at G11 B18, Chapter VI **only after sole checkpoint Issue #987 is updated with this chapter's exact Git blobs, Q18 receipt SHA and blockers**.


## Q18 AUTHORING SOURCE RECEIPT END
