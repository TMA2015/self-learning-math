# Bài 6. Cấp số cộng

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG II</p>
<p class="thpt-r4-lead">Từ một dãy có hiệu không đổi tới công sai, số hạng tổng quát, trung bình cộng và tổng hữu hạn. Tự chứng minh công thức trước khi áp dụng.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương II</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    Trong Bài 5, ta biết cách cho một dãy số. Bây giờ xét số chỗ ngồi mỗi hàng: hàng đầu \(8\) chỗ, hàng thứ hai \(13\), hàng thứ ba \(18\). **Điều gì không đổi** giữa các hàng? Không phải tỉ số \(13/8\) và \(18/13\), mà là **hiệu** \(13-8=18-13=5\). Khi lượng được cộng thêm ở mỗi bước không đổi, ta gặp một **cấp số cộng**. Quy luật này giúp tìm hàng thứ xa hoặc tổng số chỗ mà không cộng từng hàng thủ công.

    ### 1.1. Công sai là hiệu cố định, không phải tỉ số

    Nếu dãy tăng hoặc giảm cùng một lượng \(d\) sau mỗi bước, ta có \(u_{n+1}=u_n+d\). Cùng một công sai có thể **dương, âm hoặc bằng không**: với \(d<0\), số hạng giảm đều; với \(d=0\), dãy hằng vẫn là cấp số cộng. Chỉ xem ba số đầu rồi đoán chưa đủ để chứng minh cả dãy; phải kiểm quy luật cho mọi chỉ số.

    **Vận dụng.** Cho \(u_n=4n+7\) với \(n\ge1\). Chứng minh đây là cấp số cộng và xác định \(u_1,d\), thay vì chỉ tính ba số hạng đầu.

    <span data-ped-first-try="1" data-outcome-id="G11-B06-AP-DEFINITION" data-thpt-first-try-id="THPT-G11-B06-TRY01" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(u_{n+1}-u_n=[4(n+1)+7]-(4n+7)=4\) với mọi \(n\ge1\). Vì hiệu không phụ thuộc \(n\), dãy là cấp số cộng, \(d=4\), \(u_1=11\). Các số đầu \(11,15,19\) chỉ là phép kiểm lại.

    <span data-thpt-help-id="HELP-G11-B06-TRY01" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em lấy \(u_2/u_1=15/11\) làm công sai hoặc chỉ quan sát vài số đầu.

        **Tự sửa:** Ghi \(u_{n+1}-u_n\) trước, rút gọn cho mọi \(n\), tìm hằng \(d\). Ôn mục 2.1; giải Core nhận diện dãy \(11,7,3,-1,\ldots\) rồi thử Practice \(u_n=3n^2+1\) ở [Bài 6 – Luyện tập](../luyen-tap/).

    ### 1.2. Vì sao công thức số hạng thứ \(n\) có \(n-1\)?

    Từ \(u_1\) đi đến \(u_2\) là **một lần** cộng \(d\), đến \(u_3\) là hai lần, và đến \(u_n\) là **\(n-1\) lần**. Bởi thế \(u_n=u_1+(n-1)d\). Nếu em viết \(u_1+nd\), ngay số hạng đầu đã bị cộng sai một lần.

    **Vận dụng.** Một cấp số cộng có \(u_1=13\), \(d=-2\). Tính \(u_7\). Dãy đã trải qua mấy bước từ số hạng đầu?

    <span data-ped-first-try="2" data-outcome-id="G11-B06-AP-NTH" data-thpt-first-try-id="THPT-G11-B06-TRY02" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(u_7=13+(7-1)(-2)=13-12=1\). Từ \(u_1\) đến \(u_7\) có **sáu bước**. Thử liệt kê: \(13,11,9,7,5,3,1\).

    <span data-thpt-help-id="HELP-G11-B06-TRY02" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em tính \(13-2\cdot7=-1\) hoặc đổi dấu khi \(d<0\).

        **Tự sửa:** Vẽ trục chỉ số \(1\to7\), đánh dấu sáu mũi tên; ôn mục 2.2, sau đó làm Core \(u_1=6,d=3\) tìm \(u_9\) và Practice tìm số hạng từ \(u_3,u_8\) ở [Bài 6 – Luyện tập](../luyen-tap/).

    ### 1.3. Số ở giữa bằng trung bình cộng hai số kề

    Ba số hạng liên tiếp là \(a,b,c\) có cùng hiệu, tức \(b-a=c-b\). Chuyển vế được \(2b=a+c\), hay \(b=(a+c)/2\). Đây là **hệ quả** của định nghĩa cấp số cộng, có ích khi thiếu một số hạng giữa. Nhưng một đẳng thức đúng cho **một bộ ba** chưa chứng minh một dãy vô hạn là cấp số cộng; cần kiểm mọi cặp liên tiếp.

    **Vận dụng.** Điền số giữa vào ba số \(4,x,20\) để chúng theo thứ tự là ba số hạng liên tiếp của một cấp số cộng.

    <span data-ped-first-try="3" data-outcome-id="G11-B06-AP-THREE-TERMS" data-thpt-first-try-id="THPT-G11-B06-TRY03" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(2x=4+20=24\) nên \(x=12\). Kiểm lại \(12-4=8\) và \(20-12=8\), đúng cùng một công sai.

    <span data-thpt-help-id="HELP-G11-B06-TRY03" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em chọn \(x=\sqrt{4\cdot20}\) như trung bình nhân hoặc lấy \(x=20-4\).

        **Tự sửa:** Xuất phát từ **hai hiệu bằng nhau** \(x-4=20-x\), không từ tỉ số. Ôn mục 2.1; thử Core \(6,x,14\) và Practice ba biểu thức chứa \(x\) ở [Bài 6 – Luyện tập](../luyen-tap/).

    ### 1.4. Ghép cặp hai đầu để hiểu công thức tổng

    Nếu cần cộng toàn bộ \(n\) số hạng đầu, tính từng số một rất dài. Hãy viết tổng \(S_n=u_1+u_2+\cdots+u_n\), rồi viết **ngược thứ tự**. Mỗi cột cho \(u_1+u_n\); cộng hai hàng được \(2S_n=n(u_1+u_n)\), suy ra \(S_n=n(u_1+u_n)/2\). Cách chứng minh này đúng cả khi \(d<0\) hoặc \(d=0\), không đòi mọi số hạng đều dương.

    | Vị trí | 1 | 2 | 3 | \(\cdots\) | \(n\) |
    | --- | ---: | ---: | ---: | :---: | ---: |
    | Tổng thuận | \(u_1\) | \(u_2\) | \(u_3\) | \(\cdots\) | \(u_n\) |
    | Tổng ngược | \(u_n\) | \(u_{n-1}\) | \(u_{n-2}\) | \(\cdots\) | \(u_1\) |

    **Hướng dẫn đọc bảng:** Mỗi cặp thẳng cột có tổng bằng \(u_1+u_n\), nên không phải nhớ riêng cách ghép số chẵn/lẻ. Đây là lý do có **hệ số \(1/2\)** trong công thức.

    **Vận dụng.** Cấp số cộng \(u_1=3,d=4\). Tính tổng tám số hạng đầu mà không cộng đủ tám số riêng lẻ.

    <span data-ped-first-try="4" data-outcome-id="G11-B06-AP-SUM" data-thpt-first-try-id="THPT-G11-B06-TRY04" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(u_8=3+7\cdot4=31\). Do đó \(S_8=\frac{8(3+31)}2=136\). Kiểm lại công thức khác: \(S_8=\frac82[2\cdot3+7\cdot4]=4(6+28)=136\).

    <span data-thpt-help-id="HELP-G11-B06-TRY04" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em dùng \(8\cdot31\) làm tổng hoặc chia hai lần.

        **Tự sửa:** Phân biệt \(u_n\) là **một số hạng**, \(S_n\) là **tổng**. Ôn mục 2.3 và bảng ghép cặp; luyện Core tổng \(2,4,6,8,10\) và Practice cấp số cộng có \(u_1=9,d=-2\) ở [Bài 6 – Luyện tập](../luyen-tap/).

    ### 1.5. Ứng dụng: công việc tăng đều theo từng tuần

    Một nhóm giả định hoàn thành \(7\) sản phẩm trong tuần đầu, rồi mỗi tuần sau làm nhiều hơn tuần trước \(3\) sản phẩm. Muốn tìm sản lượng **tuần thứ sáu** ta dùng \(u_6\); muốn tìm **cả sáu tuần** ta dùng \(S_6\). Hai câu hỏi này khác nhau về ý nghĩa và đơn vị dù dùng cùng một cấp số cộng.

    **Vận dụng.** Theo mô hình trên, tính số sản phẩm tuần thứ sáu và tổng số sản phẩm trong sáu tuần. Coi số sản phẩm là số nguyên không âm.

    <span data-ped-first-try="5" data-outcome-id="G11-B06-AP-APPLICATION" data-thpt-first-try-id="THPT-G11-B06-TRY05" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(u_6=7+(6-1)\cdot3=22\) sản phẩm. \(S_6=\frac{6(7+22)}2=87\) sản phẩm. Câu hỏi tổng phải tính **cả sáu tuần**, không chỉ lấy số tuần cuối.

    <span data-thpt-help-id="HELP-G11-B06-TRY05" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em trả lời \(22\) cho cả hai câu hoặc tính tổng đến tuần thứ bảy.

        **Tự sửa:** Ghi rõ \(u_6\) và \(S_6\) trước khi thay; ôn mục 2.2–2.3, rồi luyện Practice bài tiền thưởng tăng cố định qua 10 tháng tại [Bài 6 – Luyện tập](../luyen-tap/).

    ### 1.6. Khi chỉ biết hai số hạng cách xa nhau

    Nếu biết \(u_p,u_q\) ở hai chỉ số khác nhau \(p\ne q\), ta có \(u_q-u_p=(q-p)d\). Vì thế chỉ cần **hiệu hai số hạng chia cho số bước**, rồi tìm ngược \(u_1\). Điều kiện \(p\ne q\) là thiết yếu vì không thể chia cho \(q-p=0\).

    **Vận dụng.** Cho cấp số cộng có \(u_3=17\), \(u_7=37\). Tìm \(d,u_1,u_{10}\).

    <span data-ped-first-try="6" data-outcome-id="G11-B06-AP-NTH" data-thpt-first-try-id="THPT-G11-B06-TRY06" hidden></span>

    ??? question "Đối chiếu"

        **Lời giải:** \(u_7-u_3=(7-3)d\), nên \(20=4d\), \(d=5\). \(u_1=u_3-2d=17-10=7\). \(u_{10}=7+9\cdot5=52\). Kiểm lại \(u_7=7+6\cdot5=37\).

    <span data-thpt-help-id="HELP-G11-B06-TRY06" hidden></span>

    ??? tip "Kiểm lỗi"

        **Dấu hiệu:** Em dùng \(7-3=4\) như số bước nhưng lại chia cho \(7\), hoặc lấy \(u_1=u_3-3d\).

        **Tự sửa:** Vẽ các vị trí \(1,3,7,10\); từ \(u_1\) đến \(u_3\) chỉ có hai bước. Ôn mục 2.2 rồi luyện Practice bài \(u_3=10,u_8=30\) ở [Core và Luyện tập Bài 6](../luyen-tap/).

=== "Kiến thức SGK"

    ### 2.1. Định nghĩa cấp số cộng và hệ quả trung bình cộng

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa:</strong> Một dãy \((u_n)\), hữu hạn hoặc vô hạn, là <em>cấp số cộng</em> nếu có số \(d\) không đổi sao cho
    \[
       u_{n+1}=u_n+d
    \]
    với mọi cặp số hạng liên tiếp được xác định. Số \(d\) gọi là <em>công sai</em>.</div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Dấu hiệu nhận biết:</strong> \(u_{n+1}-u_n=d\) không phụ thuộc vào \(n\). Nếu \(d>0\), cấp số cộng tăng; nếu \(d<0\), cấp số cộng giảm; nếu \(d=0\), cấp số cộng **không đổi**. Dãy \(u_n=n^2\) không phải cấp số cộng vì \(u_{n+1}-u_n=2n+1\) phụ thuộc \(n\).</div>

    **Hệ quả ba số hạng:** Với ba số hạng liên tiếp \(u_{n-1},u_n,u_{n+1}\) (\(n\ge2\) và các số hạng đều có), ta có
    \[
      2u_n=u_{n-1}+u_{n+1}.
    \]
    Nghĩa là số ở giữa bằng **trung bình cộng** hai số kề, không phải trung bình nhân. Với cả một dãy, phải kiểm quan hệ ấy ở **mọi bộ ba liên tiếp** chứ không chỉ một bộ ba.

    ### 2.2. Công thức số hạng tổng quát

    Từ \(u_1\), ta cộng \(d\) đúng \(n-1\) lần để đến \(u_n\). Do đó:

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Số hạng thứ \(n\):</strong>
    \[
       u_n=u_1+(n-1)d,\qquad n\in\mathbb N^*.
    \]
    </div>

    **Biến thể để suy ngược:** Nếu biết \(u_p,u_q\) với \(p\ne q\), thì
    \[
    d=\frac{u_q-u_p}{q-p},\qquad
    u_1=u_p-(p-1)d.
    \]
    Khi hỏi có số hạng bằng một giá trị cho trước, giải \(u_1+(n-1)d=M\), rồi kiểm \(n\) có là **chỉ số nguyên dương** trong miền không. Với \(d=0\), dãy hằng nên phương trình này có thể đúng cho mọi \(n\) hoặc không có \(n\) nào.

    ### 2.3. Tổng \(n\) số hạng đầu của cấp số cộng

    Đặt \(S_n=u_1+u_2+\cdots+u_n\). Viết tổng theo hai chiều:
    \[
    \begin{aligned}
    S_n&=u_1+u_2+\cdots+u_n,\\
    S_n&=u_n+u_{n-1}+\cdots+u_1.
    \end{aligned}
    \]
    Mỗi cột cộng lại bằng \(u_1+u_n\), nên \(2S_n=n(u_1+u_n)\).

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tổng hữu hạn:</strong>
    \[
    S_n=\frac{n(u_1+u_n)}2
        =\frac{n[2u_1+(n-1)d]}2,\qquad n\in\mathbb N^*.
    \]
    </div>

    **Lưu ý:** Công thức đúng với \(d\) âm, dương hoặc \(0\); nếu \(d=0\) thì \(S_n=nu_1\). Không nhầm \(S_n\) với \(u_n\), hoặc dùng công thức tổng cấp số nhân ở Bài 7 cho một cấp số cộng.

=== "Ví dụ"

    Mỗi Ví dụ dưới đây có đề đầy đủ, lý do chọn phương pháp, lời giải và cách kiểm kết quả.

    ### 3.1. Chứng minh dãy không phải cấp số cộng

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Xét dãy \(u_n=(n+1)^2\) với \(n\ge1\). Dãy có phải cấp số cộng không?</p>
    <p><strong>Phân tích:</strong> Công sai của cấp số cộng phải là hiệu không đổi. Ta kiểm \(u_{n+1}-u_n\) trên mọi \(n\).</p>
    <p><strong>Lời giải:</strong> \(u_{n+1}-u_n=(n+2)^2-(n+1)^2=2n+3\), phụ thuộc vào \(n\), nên dãy **không phải cấp số cộng**.</p>
    <p><strong>Kiểm lại:</strong> Ba số đầu \(4,9,16\) có các hiệu \(5\) và \(7\), không bằng nhau.</p></div>

    ### 3.2. Tìm số hạng đầu và công sai từ hai vị trí

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Một cấp số cộng có \(u_3=11\) và \(u_{10}=39\). Tìm \(u_1,d\) và \(u_{20}\).</p>
    <p><strong>Phân tích:</strong> Số bước từ vị trí \(3\) đến vị trí \(10\) là \(7\), không phải \(10\).</p>
    <p><strong>Lời giải:</strong> \(7d=u_{10}-u_3=28\) nên \(d=4\). \(u_1=11-2d=3\), và \(u_{20}=3+19\cdot4=79\).</p>
    <p><strong>Kiểm lại:</strong> \(u_3=3+2\cdot4=11\), \(u_{10}=3+9\cdot4=39\), đúng cả hai dữ kiện.</p></div>

    ### 3.3. Hệ quả trung bình cộng

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Cấp số cộng có \(u_1=12,d=-3\). Kiểm trực tiếp rằng ba số hạng thứ \(3,4,5\) thỏa hệ thức trung bình cộng.</p>
    <p><strong>Phân tích:</strong> Đây là ba vị trí liên tiếp, nên dùng \(2u_4=u_3+u_5\) và chứng minh bằng số.</p>
    <p><strong>Lời giải:</strong> \(u_3=12-6=6,\ u_4=12-9=3,\ u_5=12-12=0\). Vậy \(2u_4=6=u_3+u_5\).</p>
    <p><strong>Kiểm lại:</strong> Hai công sai \(u_4-u_3=-3\) và \(u_5-u_4=-3\) bằng nhau.</p></div>

    ### 3.4. Tính tổng khi công sai âm

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Tính tổng chín số hạng đầu của cấp số cộng \(u_1=5,d=-1\).</p>
    <p><strong>Phân tích:</strong> Tìm số cuối \(u_9\), rồi dùng công thức ghép cặp thay vì cộng chín số.</p>
    <p><strong>Lời giải:</strong> \(u_9=5+8(-1)=-3\), nên \(S_9=9(5-3)/2=9\).</p>
    <p><strong>Kiểm lại:</strong> \(5+4+3+2+1+0-1-2-3=9\). Công thức vẫn đúng khi một số hạng âm.</p></div>

    ### 3.5. Tổng tiền thưởng theo mô hình tăng đều

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Theo một mô hình giả định, tiền thưởng tháng đầu là \(2\) triệu đồng, mỗi tháng sau thêm \(0{,}15\) triệu. Tính tổng thưởng trong \(12\) tháng.</p>
    <p><strong>Phân tích:</strong> Thưởng từng tháng có hiệu cố định; hỏi **cả năm** nên phải tính \(S_{12}\), không phải \(u_{12}\).</p>
    <p><strong>Lời giải:</strong> \(u_{12}=2+11\cdot0{,}15=3{,}65\) triệu; \(S_{12}=12(2+3{,}65)/2=33{,}9\) triệu đồng.</p>
    <p><strong>Kiểm lại:</strong> Tháng đầu \(2\), tháng cuối \(3{,}65\); mức trung bình hai đầu \(2{,}825\) triệu, nhân \(12\) được \(33{,}9\) triệu.</p></div>

    ### 3.6. Tìm chỉ số nguyên dương từ giá trị số hạng

    <div class="thpt-g10-example-solution"><p><strong>Đề bài:</strong> Cấp số cộng có \(u_1=1\), \(d=6\). Tìm \(n\) để \(u_n=85\).</p>
    <p><strong>Phân tích:</strong> Giải phương trình theo \(n\), nhưng không dừng trước khi kiểm \(n\in\mathbb N^*\).</p>
    <p><strong>Lời giải:</strong> \(1+6(n-1)=85\) dẫn đến \(6(n-1)=84\), \(n-1=14\), \(n=15\). Đây là chỉ số nguyên dương hợp lệ.</p>
    <p><strong>Kiểm lại:</strong> \(u_{15}=1+14\cdot6=85\).</p></div>

=== "Lỗi thường gặp"

    Khi sai một Vận dụng, em nên xem Kiểm lỗi ngay dưới phần Đối chiếu. Các nhóm lỗi sau giúp nhận diện sai lầm có thể lặp lại trong nhiều bài khác.

    <span data-thpt-help-id="HELP-G11-B06-01" hidden></span>

    ??? tip "4.1. Nhầm công sai với công bội"

        **Dấu hiệu:** Em lấy \(u_{n+1}/u_n\) để xác định cấp số cộng hoặc cho rằng \(n^2\) là cấp số cộng vì các giá trị đều tăng.

        **Vì sao sai:** Cấp số cộng có **hiệu** liên tiếp không đổi, không chỉ tăng. Tăng là tính đơn điệu; cấp số cộng là một quy luật chặt hơn.

        **Tự sửa:** Ôn mục 2.1, tính \(u_{n+1}-u_n\) rồi thử Core dãy \(11,7,3,-1\) và Practice dãy \(3n^2+1\) ở [Core và Luyện tập Bài 6](../luyen-tap/).

    <span data-thpt-help-id="HELP-G11-B06-02" hidden></span>

    ??? tip "4.2. Cộng sai \(n\) lần thay vì \(n-1\) lần"

        **Dấu hiệu:** Em dùng \(u_n=u_1+nd\), khiến \(u_1\) tính lại thành \(u_1+d\).

        **Vì sao sai:** Từ số hạng đầu đến thứ \(n\) chỉ đi qua \(n-1\) khoảng.

        **Tự sửa:** Thử công thức tại \(n=1\) để phát hiện lỗi; ôn mục 2.2 và Ví dụ 3.2, rồi luyện Core tìm \(u_9\) khi biết \(u_1,d\) ở [Bài 6 – Luyện tập](../luyen-tap/).

    <span data-thpt-help-id="HELP-G11-B06-03" hidden></span>

    ??? tip "4.3. Nhầm số hạng thứ \(n\) với tổng \(n\) số hạng"

        **Dấu hiệu:** Đề hỏi tổng nhưng em trả lời \(u_n\), hoặc nhân \(n\) với số hạng cuối.

        **Vì sao sai:** \(u_n\) là một lượng ở một vị trí; \(S_n\) cộng mọi số hạng từ \(1\) tới \(n\).

        **Tự sửa:** Viết kí hiệu trước khi thế; ôn mục 2.3/ bảng ghép cặp, luyện Core tính \(S_5\) và Practice \(S_8\) công sai âm tại [Bài 6 – Luyện tập](../luyen-tap/).

    <span data-thpt-help-id="HELP-G11-B06-04" hidden></span>

    ??? tip "4.4. Dùng trung bình nhân cho ba số hạng liên tiếp"

        **Dấu hiệu:** Em dùng \(u_n^2=u_{n-1}u_{n+1}\) thay vì \(2u_n=u_{n-1}+u_{n+1}\).

        **Vì sao sai:** Trung bình **cộng** đến từ hai hiệu liên tiếp bằng nhau; trung bình nhân thuộc cấu trúc nhân ở Bài 7 và còn có điều kiện.

        **Tự sửa:** Xuất phát từ \(u_n-u_{n-1}=u_{n+1}-u_n\). Ôn mục 2.1, thử Core ba số \(6,x,14\) hoặc Practice ba biểu thức \(2x-1,x+5,3x+1\) tại [Luyện tập Bài 6](../luyen-tap/).

    **Học tiếp:** [Core và Luyện tập](../luyen-tap/) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/) · [Tự luận Chương II](../../../../thu-vien/tu-luan-g11-chuong-ii/).

    <p class="thpt-r4-footnote">Nguồn tham khảo: SGK Toán 11 – Kết nối tri thức với cuộc sống, tập một, Bài 6 (trang in 48–51).</p>
