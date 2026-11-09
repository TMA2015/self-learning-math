# Toán 10 · Bài 2. Tập hợp và các phép toán trên tập hợp

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG I · KIẾN THỨC SGK KNTT</p>
<p class="thpt-r4-lead">Học kiến thức, xem ví dụ và hình minh họa rồi tự luyện. Gợi ý/lời giải chỉ mở khi em chọn; không ghi điểm thành thạo.</p>

</div>

=== "Khám phá kiến thức"

    ### Cùng tìm hiểu

    Em hãy tưởng tượng trên bàn có một chiếc hộp ghi chữ \(A\), trong hộp là hai tấm thẻ mang số **2** và **4**. Nếu một bạn hỏi “Số 2 có ở trong hộp \(A\) không?”, câu trả lời rất dễ: có. Trong toán học, ta gọi \(A=\{2,4\}\) là **một tập hợp**; số 2 và số 4 là **những phần tử** của tập đó. Ta viết \(2\in A\), đọc là “2 thuộc A”.

    Bây giờ, em lấy riêng thẻ số 2 đặt vào chiếc hộp nhỏ \(B\). Hộp nhỏ ấy biểu diễn tập \(B=\{2\}\). Lúc này có hai đối tượng cần phân biệt: **số 2** là một phần tử, còn **\(\{2\}\)** là một tập hợp có đúng một phần tử. Vì mọi phần tử của \(B\) đều nằm trong \(A\), ta nói \(B\) là **tập con của \(A\)** và viết \(B\subseteq A\).

    <figure class="thpt-r4-plot thpt-r4-concept-figure">
    <img src="../../../../assets/images/thpt/G10_B02_MEMBERSHIP_SUBSET_R01.svg" loading="lazy" alt="Tập A chứa số 2 và 4; tập B chỉ chứa số 2, nằm bên trong A; B là tập con của A nhưng không là phần tử của A">
    <figcaption>Quan sát: cả hai số 2, 4 đều thuộc A; số 2 đồng thời thuộc B. Vì mọi phần tử của B đều thuộc A nên B là tập con của A. Riêng tập {2} không phải phần tử của A trong ví dụ này.</figcaption>
    </figure>

    Cách nghĩ này giải thích vì sao \(2\in A\) và \(\{2\}\subseteq A\) đều đúng, nhưng \(\{2\}\in A\) lại sai **trong ví dụ đang xét**: hai phần tử của \(A\) là *các số* 2 và 4, không có phần tử nào là tập \(\{2\}\). Trong toán học, bản thân một tập cũng có thể là phần tử của một tập lớn hơn; điều quyết định là tập đó thực sự chứa **những đối tượng nào**.

    Khi học phần này, em sẽ gặp cả trường hợp không có phần tử nào: đó là **tập rỗng** \(\varnothing\). Em cũng sẽ gặp những tập được viết theo một điều kiện, chẳng hạn tập các số tự nhiên nhỏ hơn 5, thay vì phải kể tên từng số. Nhờ vậy, tập hợp trở thành một cách ghi rõ **ta đang xét những đối tượng nào**.

    Tập hợp còn giúp trả lời những câu hỏi đời thường. Ví dụ, trong một lớp học có hai câu lạc bộ Toán và Tiếng Anh, có bạn chỉ tham gia một câu lạc bộ, có bạn tham gia cả hai, cũng có bạn không tham gia câu lạc bộ nào. Muốn đếm chính xác, ta cần phân biệt **phần chung**, **tất cả những người tham gia**, và **phần chỉ thuộc một nhóm**. Đó chính là ý tưởng đằng sau các phép giao, hợp và hiệu của tập hợp.

    ### Ví dụ trực quan

    Cho \(A=\{2,4\}\) và \(B=\{2\}\). Ta đọc được ngay: \(2\in A\), \(B\subseteq A\), \(A\ne B\). Dù \(B\) nằm trong \(A\), hai tập không bằng nhau vì \(A\) còn chứa số 4.

    Với hai câu lạc bộ, giả sử An và Bình tham gia CLB Toán, Bình và Chi tham gia CLB Tiếng Anh. **Bạn Bình** thuộc cả hai nhóm nên nằm ở *phần giao*. Ba bạn An, Bình, Chi hợp lại là *phần hợp*; khi viết danh sách, Bình chỉ được ghi **một lần**, không phải hai.

    ### Thuật ngữ và kiến thức, kỹ năng

    **Thuật ngữ cần biết:** tập hợp, phần tử, tập con, tập bằng nhau, tập rỗng, giao, hợp, hiệu, phần bù, tập vũ trụ, khoảng, đoạn, nửa khoảng và sơ đồ Venn.

    **Sau bài học, em cần làm được:** đọc và viết đúng ký hiệu \(\in,\notin,\subseteq\); mô tả tập bằng cách liệt kê hoặc nêu điều kiện; thực hiện giao, hợp, hiệu, phần bù; đọc đầu mút trên trục số; và dùng sơ đồ Venn để đếm mà không trùng lặp.

=== "Kiến thức SGK"

    ### 2.1. Tập hợp, phần tử, tập con và hai tập bằng nhau

    Một tập hợp được xác định bởi các phần tử của nó. Có thể viết tập bằng **cách liệt kê**, ví dụ \(A=\{2,4\}\), hoặc **cách nêu tính chất đặc trưng**, chẳng hạn \(C=\{x\in\mathbb N\mid x<5\}\); khi dùng cách thứ hai phải nói rõ miền xét và quy ước về \(\mathbb N\) nếu cần.

    - \(x\in A\): \(x\) là một **phần tử** của \(A\). \(x\notin A\): \(x\) không là phần tử của \(A\).
    - \(A\subseteq B\): **mọi** phần tử thuộc \(A\) đều thuộc \(B\). Để kiểm tra, em xét lần lượt các phần tử của tập đứng trước.
    - \(A=B\) khi \(A\subseteq B\) **và** \(B\subseteq A\). Một chiều chưa đủ để kết luận hai tập bằng nhau.
    - \(\varnothing\) là tập không chứa phần tử nào; \(\varnothing\subseteq A\) và \(A\subseteq A\) với mọi tập \(A\).

    <div class="thpt-r4-knowledge-conclusion" role="note"><strong>Kiến thức cần nhớ:</strong> “Thuộc” (\(\in\)) dùng để nói về <em>phần tử</em>; “là tập con” (\(\subseteq\)) dùng để nói về <em>quan hệ giữa hai tập</em>. Hai tập bằng nhau phải có đúng các phần tử như nhau.</div>

    <div class="thpt-g10-table-scroll"><table class="thpt-g10-knowledge-table">
    <thead><tr><th>Em muốn diễn đạt</th><th>Ký hiệu</th><th>Ví dụ đúng với \(A=\{2,4\}\)</th></tr></thead>
    <tbody>
    <tr><td>Một <strong>phần tử</strong> nằm trong tập</td><td>\(\in\)</td><td>\(2\in A\)</td></tr>
    <tr><td>Một <strong>tập</strong> có toàn bộ phần tử thuộc tập khác</td><td>\(\subseteq\)</td><td>\(\{2\}\subseteq A\)</td></tr>
    <tr><td>Một <strong>tập</strong> cũng là phần tử của tập lớn?</td><td>Phải kiểm phần tử thực tế</td><td>\(\{2\}\notin A\) trong ví dụ này</td></tr>
    </tbody></table></div>

    **Em vận dụng.** Với \(A=\{2,4\}\), hãy tự xét ba phát biểu: (a) \(2\in A\); (b) \(\{2\}\subseteq A\); (c) \(\{2\}\in A\). Nghĩ xem hai vế của ký hiệu đang nói về *số* hay *tập* trước khi mở đối chiếu.

    <span data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHI-TRY06" hidden></span>

    ??? question "Em đã suy nghĩ? Mở lời giải để đối chiếu"

        (a) **Đúng** vì 2 là phần tử của A. (b) **Đúng** vì phần tử duy nhất 2 của \(\{2\}\) nằm trong A. (c) **Sai** vì A chỉ có hai phần tử là các **số** 2 và 4, không chứa tập \(\{2\}\) như một phần tử.


    ### 2.2. Giao, hợp, hiệu và phần bù

    Hãy nhớ lại hai câu lạc bộ. Nếu hỏi “ai tham gia **cả hai** câu lạc bộ?”, ta lấy **giao**. Nếu hỏi “ai tham gia **ít nhất một** câu lạc bộ?”, ta lấy **hợp**. Nếu hỏi “ai chỉ thuộc nhóm Toán mà không thuộc nhóm Tiếng Anh?”, ta lấy **hiệu** theo đúng thứ tự hai tập.

    Với hai tập \(A,B\), các định nghĩa chuẩn là:

    \[
    A\cap B=\{x\mid x\in A\ \text{và}\ x\in B\},
    \]

    \[
    A\cup B=\{x\mid x\in A\ \text{hoặc}\ x\in B\},
    \]

    \[
    A\setminus B=\{x\mid x\in A\ \text{và}\ x\notin B\}.
    \]

    Chữ **hoặc** trong phép hợp có nghĩa là *ít nhất một trong hai*, kể cả khi \(x\) thuộc cả hai tập. Phép hiệu không đổi chỗ được tùy ý: \(A\setminus B\) và \(B\setminus A\) có thể khác nhau.

    Một câu hỏi khác là “ai **không** thuộc nhóm \(A\)?”. Để trả lời, phải biết đang xét trong **cả lớp**, **cả trường** hay một phạm vi khác. Gọi phạm vi đó là tập vũ trụ \(U\), với \(A\subseteq U\), thì **phần bù** của \(A\) trong \(U\) chính là \(U\setminus A\). Không có \(U\), câu “không thuộc A” chưa xác định đủ phạm vi để liệt kê phần bù.

    <div class="thpt-r4-knowledge-conclusion" role="note"><strong>Kiến thức cần nhớ:</strong> Giao là “và”, hợp là “hoặc”, hiệu là “thuộc tập trước nhưng không thuộc tập sau”. Phần bù là hiệu so với một tập vũ trụ đã xác định.</div>

    **Em vận dụng — giao và hợp.** Cho \(A=\{a,b,c\}\), \(B=\{b,c,d\}\). Tự viết \(A\cap B\), \(A\cup B\) và đếm số phần tử của từng tập kết quả.

    <span data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHI-TRY07" hidden></span>

    ??? question "Mở đối chiếu sau khi tự làm"

        \(A\cap B=\{b,c\}\), có 2 phần tử. \(A\cup B=\{a,b,c,d\}\), có 4 phần tử. Trong phép hợp, \(b,c\) chỉ được viết mỗi phần tử một lần.


    **Em vận dụng — hiệu.** Với \(A=\{1,2,3,4\}\), \(B=\{2,4,6\}\), em hãy tính \(A\setminus B\) và \(B\setminus A\). Kết quả có giống nhau không?

    <span data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHI-TRY08" hidden></span>

    ??? question "Mở đối chiếu sau khi tự làm"

        \(A\setminus B=\{1,3\}\); \(B\setminus A=\{6\}\). Hai tập **khác nhau**. Chẳng hạn, 1 thuộc \(A\setminus B\) nhưng không thuộc \(B\setminus A\).


    **Em vận dụng — phần bù.** Cho \(U=\{0,1,2,3,4,5\}\) và \(A=\{1,3,5\}\). Phần bù của \(A\) trong \(U\) là tập nào? Vì sao phải ghi rõ \(U\)?

    <span data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHI-TRY09" hidden></span>

    ??? question "Mở đối chiếu sau khi tự làm"

        \(U\setminus A=\{0,2,4\}\). Phải ghi U vì chỉ những phần tử trong **phạm vi U** mới được xét; nếu thay U, phần bù có thể thay đổi.


    ### 2.3. Khoảng, đoạn và nửa khoảng trên trục số

    Khi tập hợp chứa vô số số thực, liệt kê từng số là không thể. Ta dùng **khoảng** hoặc **đoạn** để viết ngắn gọn. Ví dụ: \([1,4]\) là tất cả các số thực \(x\) thỏa \(1\le x\le4\); còn \((1,4)\) là những số thỏa \(1<x<4\).

    - Ngoặc vuông **[ ]** tại một đầu mút nghĩa là **lấy** đầu mút đó.
    - Ngoặc tròn **( )** nghĩa là **không lấy** đầu mút.
    - \([a,b)\) chỉ lấy \(a\), không lấy \(b\); \((a,b]\) chỉ lấy \(b\).
    - Khi có \(+\infty\) hoặc \(-\infty\), luôn dùng ngoặc tròn ở phía vô cực vì vô cực **không phải một số thực** để lấy làm đầu mút.

    Để tìm giao hoặc hợp hai khoảng, em hãy hình dung cả hai trên **cùng một trục số**. Giao là phần được tô ở cả hai tập; hợp là những điểm được tô ở ít nhất một tập. Cẩn thận kiểm riêng từng đầu mút: một sai khác giữa \(<\) và \(\le\) có thể làm kết quả thay đổi.

    <div class="thpt-r4-knowledge-conclusion" role="note"><strong>Kiến thức cần nhớ:</strong> Đừng chọn ngoặc bằng cảm giác. Tại mỗi đầu mút, hãy hỏi: “Giá trị này có thỏa điều kiện của tập kết quả không?”</div>

    **Em vận dụng.** Cho \(X=(-2,4]\), \(Y=[1,6)\). Tìm \(X\cap Y\), \(X\cup Y\); kiểm xem các số 1, 4 và 6 có thuộc từng kết quả không.

    <span data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHI-TRY10" hidden></span>

    ??? question "Mở đối chiếu sau khi tự làm"

        \(X\cap Y=[1,4]\), gồm 1 và 4 nhưng không có 6. \(X\cup Y=(-2,6)\), gồm 1 và 4 nhưng không có 6; cũng không có \(-2\).


    ### 2.4. Sơ đồ Venn: nhìn thấy phần chung và tránh đếm trùng

    Khi số lượng phần tử lớn, sơ đồ Venn giúp em **nhìn rõ bốn vùng không chồng lấn**: chỉ thuộc \(A\), thuộc cả \(A\) và \(B\), chỉ thuộc \(B\), và ở ngoài cả hai trong tập vũ trụ \(U\). Đây không phải bốn tập luôn có phần tử; có vùng có thể rỗng.

    Với hai tập hữu hạn, nếu cộng \(n(A)+n(B)\), mọi phần tử thuộc giao đã bị đếm **hai lần**. Vì vậy, muốn biết số phần tử của hợp, phải trừ đi một lần số phần tử ở giao:

    \[
    n(A\cup B)=n(A)+n(B)-n(A\cap B).
    \]

    **Đọc hình bằng số liệu cụ thể.** Một lớp có 40 học sinh. Có 23 bạn học Tiếng Anh, 25 bạn học Toán, trong đó 12 bạn học cả hai. Trong hình, em tìm vùng chung ở chính giữa trước (12); vùng chỉ Anh là \(23-12=11\), vùng chỉ Toán là \(25-12=13\); vùng ngoài cả hai là \(40-(11+12+13)=4\).

    <figure class="thpt-r4-plot thpt-r4-probability-figure"><img src="../../../../assets/images/thpt/THPT_G10_B02_VENN_TWO_CLUBS_D5_R01.svg" loading="lazy" alt="Sơ đồ Venn: lớp 40 học sinh gồm 11 chỉ học Tiếng Anh, 12 học cả hai, 13 chỉ học Toán và 4 không học môn nào"><figcaption>Sơ đồ Venn cho lớp 40 học sinh: đọc giao 12 ở giữa, rồi lần lượt xác định hai phần riêng 11 và 13, cuối cùng 4 học sinh ngoài cả hai. Hình ứng với đúng bài toán 40 học sinh này, không dùng cho dữ liệu khác.</figcaption></figure>

    <div class="thpt-r4-knowledge-conclusion" role="note"><strong>Kiến thức cần nhớ:</strong> Với sơ đồ Venn có hai tập, hãy điền <em>phần giao trước</em>, rồi tính phần riêng của mỗi tập, cuối cùng lấy phần ngoài từ tổng \(U\).</div>

    **Em vận dụng.** Một lớp khác có 32 học sinh; 18 bạn tham gia CLB Âm nhạc, 15 bạn tham gia CLB Thể thao, 6 bạn tham gia cả hai. Hỏi chỉ tham gia từng CLB có bao nhiêu bạn, và không tham gia CLB nào có bao nhiêu bạn? **Không** dùng lại các số của hình 40 học sinh phía trên.

    <span data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHI-TRY11" hidden></span>

    ??? question "Mở đối chiếu sau khi tự làm"

        Chỉ Âm nhạc: \(18-6=12\); chỉ Thể thao: \(15-6=9\). Tham gia ít nhất một CLB: \(12+6+9=27\). Không tham gia CLB nào: \(32-27=5\). Kiểm tra \(12+6+9+5=32\).


=== "Ví dụ"

    Các câu “Em vận dụng” phía trên chỉ giúp em kiểm tra một bước hiểu bài. Trong phần này, em xem cách giải **một bài toán hoàn chỉnh**, đặc biệt chú ý **vì sao chọn cách làm** và cách tự kiểm kết quả.

    ### Ví dụ 1 — Giao, hợp, hiệu của hai tập hữu hạn

    **Đề bài.** Cho \(A=\{1,2,3,4\}\), \(B=\{3,4,5\}\). Tìm \(A\cap B\), \(A\cup B\), \(A\setminus B\) và \(B\setminus A\).

    **Vì sao chọn cách giải này?** Hai tập có ít phần tử và đã được liệt kê đầy đủ. Ta kiểm trực tiếp từng số, không cần lập công thức dài hay vẽ hình phức tạp.

    **Lời giải.** Số 3 và 4 thuộc cả hai tập nên \(A\cap B=\{3,4\}\). Lấy tất cả các số xuất hiện ở ít nhất một tập, mỗi số ghi một lần, được \(A\cup B=\{1,2,3,4,5\}\). Bỏ 3,4 khỏi A còn \(A\setminus B=\{1,2\}\); bỏ 3,4 khỏi B còn \(B\setminus A=\{5\}\).

    **Kiểm lại.** Hợp có 5 phần tử và \(n(A)+n(B)-n(A\cap B)=4+3-2=5\). Hai hiệu khác nhau như đã dự đoán.

    ### Ví dụ 2 — Giao, hợp và hiệu của hai khoảng (chọn lọc NotebookLM v1)

    **Đề bài.** Cho \(A=(-3,2]\), \(B=[0,5)\). Tìm \(A\cap B\), \(A\cup B\) và \(A\setminus B\).

    **Vì sao chọn cách giải này?** Mỗi tập là một khoảng trên trục số, nên ta xác định phần **chồng lên nhau**, phần **được phủ bởi ít nhất một tập** và phần **chỉ còn lại trong A**. Quyết định lấy hay bỏ đầu mút sau khi kiểm điều kiện, không đoán qua dấu ngoặc.

    **Lời giải.** Những số nằm đồng thời trong A và B là các số thỏa \(0\le x\le2\), nên \(A\cap B=[0,2]\). Vì hai khoảng có chung phần \([0,2]\), lấy tất cả phần thuộc ít nhất một khoảng cho \(A\cup B=(-3,5)\). Cuối cùng, từ A bỏ các số có trong B, tức bỏ đoạn \([0,2]\), ta còn \(A\setminus B=(-3,0)\).

    **Kiểm lại.** Số \(0\) thuộc B nên **không** thuộc \(A\setminus B\). Số \(2\) nằm trong giao vì cả A và B đều chứa 2. Hai đầu mút \(-3\) và \(5\) đều không nằm trong hợp.

    ### Ví dụ 3 — Giải bài toán đếm bằng sơ đồ Venn

    **Đề bài.** Lớp có 40 học sinh; 23 học Tiếng Anh, 25 học Toán, 12 học cả hai. Hỏi có bao nhiêu bạn chỉ học một môn và bao nhiêu bạn không học môn nào?

    **Vì sao chọn cách giải này?** Cộng \(23+25\) sẽ đếm 12 bạn học cả hai **hai lần**. Sơ đồ Venn ở phần 2.4 cho thấy ngay phần phải trừ.

    **Lời giải theo vùng.** Chỉ Anh: \(23-12=11\). Chỉ Toán: \(25-12=13\). Học đúng một môn: \(11+13=24\). Học ít nhất một môn: \(11+12+13=36\). Không học môn nào: \(40-36=4\).

    **Kiểm lại.** Bốn miền \(11+12+13+4=40\), khớp sĩ số ban đầu. Đây chính là các giá trị trong **hình ở phần 2.4**, không phải lời giải của bài 32 học sinh ở trên.

=== "Lỗi thường gặp"

    <span data-thpt-help-id="HELP-G10-B02-01" hidden></span>

    ??? tip "Nhầm phần tử với tập con hoặc kết luận hai tập bằng nhau quá sớm"

        **Dấu hiệu:** Viết \(1\subseteq A\) khi muốn nói số 1 thuộc A; hoặc mới kiểm \(A\subseteq B\) đã kết luận \(A=B\).

        **Tự sửa:** Đọc lại ý nghĩa \(\in\) và \(\subseteq\) tại 2.1. Nếu hai vế là hai tập, muốn chứng minh bằng nhau phải kiểm **cả hai chiều** tập con.

        **Luyện tiếp:** [Câu Core về tập hợp](../luyen-tap/?item=THPT-G10-B02-C01) · [Bài luyện về tập con](../luyen-tap/?item=THPT-G10-B02-P06).


    <span data-thpt-help-id="HELP-G10-B02-02" hidden></span>

    ??? tip "Nhầm giao với hợp, quên phần bù hoặc đếm một người hai lần"

        **Dấu hiệu:** Lấy \(23+25=48\) làm số học sinh tham gia ít nhất một môn trong lớp 40 bạn; hoặc tìm phần bù mà chưa biết tập vũ trụ.

        **Tự sửa:** Trở lại 2.2 và 2.4. Xác định nhóm chung trước, trừ giao đúng một lần, nêu rõ U trước khi tính phần bù. Kiểm tổng các vùng phải bằng số người được khảo sát.

        **Luyện tiếp:** [Core giao/hợp](../luyen-tap/?item=THPT-G10-B02-C02) · [Luyện vận dụng](../luyen-tap/?item=THPT-G10-B02-P02) · [Đếm Venn](../luyen-tap/?item=THPT-G10-B02-P05).


    <span data-thpt-help-id="HELP-G10-B02-03" hidden></span>

    ??? tip "Sai ngoặc tròn/vuông ở đầu mút của khoảng và đoạn"

        **Dấu hiệu:** Viết \((1,4)\) thay cho \([1,4]\), hoặc lấy \(6\) vào \((-2,6)\).

        **Tự sửa:** Trở lại 2.3, chuyển từng khoảng thành điều kiện \(<,\le,>,\ge\). Kiểm riêng 1, 4, 6 trên từng tập trước khi viết ký hiệu khoảng. Sau đó làm lại câu “Em vận dụng” tại 2.3 bằng cách tự mở đối chiếu.


    **Tiếp tục tự học:** [Core và Luyện tập Chương I](../luyen-tap/) · [Tự kiểm tra cuối chương](../tu-kiem-tra-chuong/) · [Tự luận Chương I](../../thu-vien/tu-luan-chuong-i.md).

    <p class="thpt-r4-footnote">Nguồn kiến thức: SGK Toán 10 · Kết nối tri thức với cuộc sống · tập một · Bài 2. Phần giải thích và ví dụ hỗ trợ tự học do SLM biên tập.</p>

