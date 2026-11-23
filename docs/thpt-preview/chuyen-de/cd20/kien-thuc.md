---
hide:
  - toc
---

<div class="thpt-r4-screen topic-w1-release-nav" data-thpt-r4 data-topic-w1="20" data-topic-w1-part="kien-thuc">
<p class="thpt-r4-eyebrow">HỌC THEO CHUYÊN ĐỀ · CĐ20 · TOÁN THPT</p>
<nav class="thpt-sgk-lesson-nav" aria-label="Điều hướng Chuyên đề 20">
<a href="../../cd19/kien-thuc/">← Chuyên đề trước</a>
<a href="../../cd21/kien-thuc/">Chuyên đề sau →</a>
<a href="../luyen-tap/">Luyện tập</a>
<a href="../tu-kiem-tra/">Tự kiểm tra</a>
</nav>
<p class="topic-w1-back"><a href="../../">← Tổng quan các Chuyên đề</a></p>
<p class="thpt-r4-lead topic-w1-source-intro" hidden aria-hidden="true"></p>
<p class="thpt-r4-knowledge-note topic-w5-model-link">Khám phá thêm: <a href="../../../math-lab/models/slm-top20-prob-events-r00/">Mô hình trực quan Chuyên đề 20</a> (tùy chọn).</p>
</div>
<link rel="stylesheet" href="../../../../assets/stylesheets/thpt-topic-w1-golden-v1.css">
<script src="../../../../assets/javascripts/thpt-topic-w5-golden-v1.js" defer></script>
<div class="topic-w1-boot-status" role="status" aria-live="polite">Đang chuẩn bị kiến thức…</div>
<script>
(function(){var h=document.documentElement;h.classList.add("topic-w1-pending");
 document.addEventListener("DOMContentLoaded",function(){setTimeout(function(){
 if(!h.classList.contains("topic-w1-pending"))return;h.classList.remove("topic-w1-pending");h.classList.add("topic-w1-fallback");
 var status=document.querySelector(".topic-w1-boot-status");if(status)status.textContent="Giao diện tương tác chưa tải được. Nội dung gốc vẫn có thể đọc bên dưới.";
 },0)},{once:true});})();
</script>
<span data-topic-w1-source-start="kien-thuc" hidden></span>

<!-- TOPIC20_APPROVED_SOURCE_START -->
<!-- Q18 SOURCE_LEARNER_BLOB b40b01cfbd89e3fd3cc4fe75adb599f55df2a3d9; Q18_RECEIPT_BLOB 00cfd99a633e993090bd1759437d975389c42c15; AUTHORING_PR #884; PUBLIC_PROJECTION_ONLY -->
<!-- W5_LINK_EQUIVALENT: source SVG path, optional model display link; canonical source immutable -->

# Kiến thức

Một lượt quay số tại hội chợ có những kết quả nào? Nếu kết quả nằm trong hai nhóm thưởng, có bị tính trùng không? Hai lượt chơi có thực sự độc lập? Em sẽ học cách mô tả đúng không gian mẫu và biến cố trước, rồi mới chọn phép đếm, quy tắc cộng hoặc nhân. Kiến thức về tập hợp, phân số và đếm theo bước được nhắc lại tại chỗ; không phải hoàn thành một chuyên đề khác mới học được.

**Cách học:** Em hãy tự làm từng câu Vận dụng trước, sau đó chủ động mở phần Đối chiếu để hiểu cách giải và nhận ra lỗi sai. Những bài đã xem lời giải giúp em ôn luyện; phần Tự kiểm tra công khai ở cuối chuyên đề cũng dùng lại câu đã học, nên không phải bài đánh giá độc lập.

## 1. Mô hình ngẫu nhiên



### 1.1. Phép thử, không gian mẫu và biến cố

Khi rút ngẫu nhiên một thẻ trong bảy thẻ được đánh số từ 1 đến 7, ta không biết trước sẽ rút được thẻ nào. Tuy vậy, ta hoàn toàn có thể liệt kê những kết quả có thể xảy ra. Nếu chỉ ghi số trên thẻ thì mỗi số là **một kết quả sơ cấp**; tập hợp gồm cả bảy số mới là **không gian mẫu**. Cần phân biệt một kết quả riêng lẻ với tập tất cả kết quả, bởi hai đối tượng này giữ vai trò khác nhau trong cách mô tả phép thử.

Bây giờ giả sử câu hỏi là “rút được số nguyên tố”. Ta không thực hiện một phép thử khác: vẫn rút một thẻ như trước, nhưng chỉ những kết quả 2, 3, 5 và 7 làm câu nói ấy đúng. Vì vậy, một biến cố được biểu diễn bằng **tập các kết quả thuận lợi** bên trong không gian mẫu. Nếu không có kết quả nào phù hợp thì biến cố không thể xảy ra; nếu mọi kết quả đều phù hợp thì biến cố chắc chắn xảy ra. Cách nhìn bằng tập hợp này giúp em hiểu rõ mình đang tính xác suất cho điều gì, trước khi dùng bất kỳ phép đếm hay công thức nào.

> **ĐỊNH NGHĨA — Phép thử, không gian mẫu và biến cố**
>
> **Không gian mẫu** \(\Omega\) là **tập hợp tất cả các kết quả có thể xảy ra** của một phép thử ngẫu nhiên; mỗi kết quả sơ cấp là một phần tử \(\omega\in\Omega\). **Biến cố** \(A\subseteq\Omega\) là tập các kết quả làm biến cố xảy ra; \(\varnothing\) là biến cố không thể và \(\Omega\) là biến cố chắc chắn.

**Ví dụ**

**Đề bài:** Một hộp có bảy thẻ khác nhau ghi các số từ 1 đến 7. Rút ngẫu nhiên đều một thẻ. Hãy viết không gian mẫu \(\Omega\), biến cố \(A\) “rút được số nguyên tố” và biến cố đối của \(A\).

**Lời giải:** Vì chỉ rút một thẻ và ghi số trên thẻ nên \(\Omega=\{1,2,3,4,5,6,7\}\). Các số nguyên tố trong tập này là 2, 3, 5, 7, do đó \(A=\{2,3,5,7\}\). Biến cố đối gồm những kết quả còn lại: \(\bar A=\{1,4,6\}\). Chú ý: \(A\) là **một tập các kết quả**, không phải một kết quả sơ cấp duy nhất.

**Kiến thức cần ghi nhớ**

Trước khi đếm kết quả thuận lợi, phải xác định đúng không gian mẫu \(\Omega\). Mỗi kết quả riêng lẻ là một phần tử của \(\Omega\), còn biến cố \(A\) là tập hợp những kết quả làm điều kiện của \(A\) đúng, tức \(A\subseteq\Omega\). Biến cố không thể là tập rỗng; biến cố chắc chắn chính là \(\Omega\).

**Vận dụng**

Gieo một xúc xắc 8 mặt đồng khả năng ghi các số 1–8. Viết Ω và biến cố “ra số chẵn”.

<!-- ITEM_ID: THPT-TOP20-T01; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O01; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details markdown="1"><summary>Đối chiếu</summary>

Ω={1,2,3,4,5,6,7,8}; A={2,4,6,8}.

**Kiểm lỗi**

Nếu chỉ viết xác suất 1/2, em chưa mô tả biến cố; hãy ghi kết quả sơ cấp vào tập. Ôn lại mục Kiến thức 1.1. Phép thử, không gian mẫu và biến cố và Bài luyện 1 tại Luyện tập 1.1. Không gian mẫu và tập kết quả của biến cố.

</details>





**Vận dụng**

Một vòng quay cân đối có các kết quả ghi 1 đến 6. Biến cố A là “kết quả không lớn hơn 2”. Hãy viết A và nói khi nào A xảy ra.

<!-- ITEM_ID: THPT-TOP20-T10; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O02; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details markdown="1"><summary>Đối chiếu</summary>

**Lời giải:** A={1,2}; A xảy ra nếu lượt quay cho kết quả 1 hoặc 2.

**Kiểm lỗi**

Nếu viết A={2}, em đã bỏ kết quả 1 cũng không lớn hơn 2. Xem từng phần tử Ω={1,…,6}. Ôn lại mục Kiến thức 1.1. Phép thử, không gian mẫu và biến cố và Bài luyện 2 tại Luyện tập 1.2. Mô tả biến cố từ một điều kiện.

</details>

### 1.2. Đồng khả năng và cách tính xác suất

Giả sử một hộp có nhiều phiếu khác nhau nhưng các phiếu chỉ mang ba loại nhãn A, B và C. Nếu mỗi phiếu được rút với cơ hội như nhau, liệu ba nhãn có nhất thiết cùng cơ hội xuất hiện? Không: một nhãn có trên nhiều phiếu hơn sẽ dễ xuất hiện hơn. Điểm quyết định không phải là có bao nhiêu **loại nhãn**, mà là có bao nhiêu **kết quả sơ cấp thực sự đồng khả năng** tạo ra từng nhãn.

Khi không gian mẫu gồm hữu hạn kết quả đồng khả năng, mỗi kết quả đóng góp một phần bằng nhau vào xác suất. Muốn tính khả năng xảy ra của biến cố A, ta đếm số kết quả thuộc A rồi so với số kết quả của cả không gian mẫu. Từ cách suy luận đó mới hình thành công thức xác suất cổ điển. Nếu các kết quả ban đầu không đồng khả năng, tỉ số đếm đơn thuần không còn là cách tính hợp lệ; ta phải thay đổi cách mô hình hóa hoặc sử dụng thông tin xác suất thích hợp.

> **CÔNG THỨC — Xác suất cổ điển**
>
> \[P(A)=\frac{n(A)}{n(\Omega)},\quad n(\Omega)>0.\] Chỉ dùng khi các kết quả sơ cấp hữu hạn và đồng khả năng.

Từ cách đếm, em có thể tự kiểm tra ngay những giới hạn mà mọi xác suất cổ điển đều phải thỏa. Biến cố \(A\) là một tập con của không gian mẫu \(\Omega\), nên số kết quả thuận lợi không thể âm và không thể vượt quá tổng số kết quả. Tập rỗng không chứa kết quả nào, còn biến cố chắc chắn chứa toàn bộ kết quả. Chia các số đếm đó cho \(n(\Omega)>0\) ta được các tính chất sau, thay vì chỉ ghi nhớ chúng như ba công thức độc lập.

> **TÍNH CHẤT — Ba tính chất cơ bản của xác suất cổ điển.** Trong phép thử có không gian mẫu hữu hạn, không rỗng và các kết quả sơ cấp đồng khả năng, với mọi biến cố \(A\subseteq\Omega\): \(0\le P(A)\le1\); \(P(\Omega)=1\) (biến cố chắc chắn); \(P(\varnothing)=0\) (biến cố không thể). Điều này suy ra lần lượt từ \(0\le n(A)\le n(\Omega)\), \(n(\Omega)/n(\Omega)=1\) và \(n(\varnothing)=0\). Với một phép thử không thỏa giả thiết đồng khả năng, không được dùng tỉ số đếm đơn thuần để tính xác suất.

Chẳng hạn, với sáu thẻ vật lí đồng khả năng, biến cố “rút ra một trong cả sáu thẻ” có xác suất \(6/6=1\), còn “rút thẻ số 7” khi chỉ có các số từ 1 đến 6 có xác suất \(0/6=0\). Một biến cố có xác suất \(1/6\) tuy hiếm nhưng vẫn có thể xảy ra; đừng đồng nhất xác suất nhỏ với xác suất bằng 0.


**Vì sao phải đếm phiếu mà không đếm nhãn?** Với một hộp có 2 phiếu ghi A, 3 phiếu ghi B và 3 phiếu ghi C, nếu mỗi **phiếu** có khả năng được chọn như nhau thì không gian mẫu phù hợp gồm **8 phiếu vật lý phân biệt**, không phải 3 nhãn. Xác suất chọn nhãn A là \(2/8=1/4\), còn nhãn B hoặc C mỗi nhãn \(3/8\). Không thể áp dụng \(1/3\) bằng cách coi ba nhãn là ba kết quả sơ cấp đồng khả năng.

**Ví dụ bổ sung.** Gieo hai xúc xắc sáu mặt cân đối **phân biệt**. Không gian mẫu đồng khả năng là 36 cặp có thứ tự \((i,j)\), \(i,j\in\{1,\dots,6\}\). Tổng bằng 7 có sáu cặp \((1,6),(2,5),(3,4),(4,3),(5,2),(6,1)\), nên \(P(\text{tổng }7)=6/36=1/6\). Nếu mô hình chỉ ghi các giá trị tổng \(2,3,\dots,12\) rồi lấy \(1/11\), mẫu vừa tạo **không đồng khả năng** (tổng 2 chỉ có một cặp, tổng 7 có sáu cặp). Quy tắc trước phép tính: **mô hình hóa đúng kết quả đồng khả năng** rồi mới đếm biến cố.

**Ví dụ**

**Đề bài:** Một hộp có tám phiếu khác nhau: hai phiếu ghi A, ba phiếu ghi B và ba phiếu ghi C. Rút ngẫu nhiên đều một phiếu. Tính xác suất rút được nhãn B. Có thể chia đều xác suất cho ba loại nhãn không?

**Lời giải:** Tám **phiếu vật lí** là tám kết quả đồng khả năng. Ba phiếu mang nhãn B làm biến cố cần tìm xảy ra, vì thế \(P(B)=3/8\). Không thể lấy \(1/3\) chỉ vì có ba nhãn A, B, C: mỗi nhãn đại diện cho một số phiếu khác nhau, nên ba nhãn không đồng khả năng.

**Kiểm tra trước khi tính:** Có đang đếm nhóm không thứ tự trong khi mẫu gốc là chuỗi có thứ tự không? Các kết quả được đếm có thực sự đồng khả năng không? Nếu không, không được dùng công thức cổ điển theo tỉ số đơn giản.

**Kiến thức cần ghi nhớ**

Gộp các kết quả sơ cấp đồng khả năng thành vài nhãn có thể làm mất tính đồng khả năng. Khi tung hai đồng xu cân đối, độc lập, bốn chuỗi NN, NS, SN, SS đồng khả năng nhưng các nhãn “không ngửa”, “một ngửa”, “hai ngửa” tương ứng với 1, 2 và 1 chuỗi. Bởi vậy, xác suất đúng một lần ngửa là \(2/4=1/2\), không phải \(1/3\). Muốn dùng tỉ số đếm, hãy xác nhận các kết quả được đem ra đếm thực sự đồng khả năng.

**Vận dụng**

Hộp có 2 phiếu đỏ và 4 phiếu xanh khác nhau, rút đều một phiếu. P(đỏ) có phải 1/2 vì có hai màu không?

<!-- ITEM_ID: THPT-TOP20-T02; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O03; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details markdown="1"><summary>Đối chiếu</summary>

Không. Sáu phiếu vật lí đồng khả năng, P(đỏ)=2/6=1/3.

**Kiểm lỗi**

Nếu dùng 1/2, em đếm màu thay vì từng phiếu; hãy đặt tên cho sáu phiếu. Ôn lại mục Kiến thức 1.2. Đồng khả năng và cách tính xác suất và Bài luyện 3 tại Luyện tập 1.3. Xác suất cổ điển từ phiếu đồng khả năng.

</details>







**Vận dụng**

Tung hai đồng xu cân đối và độc lập. Nếu chỉ ghi số mặt ngửa 0, 1, 2 thì ba giá trị ấy có đồng khả năng không? Hãy viết các chuỗi sơ cấp và tính xác suất có đúng một mặt ngửa.

<!-- ITEM_ID: THPT-TOP20-T11; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O06; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details markdown="1"><summary>Đối chiếu</summary>

**Lời giải:** Không. Không gian mẫu gồm NN, NS, SN, SS, mỗi chuỗi có xác suất 1/4. Số ngửa 0 ứng với SS, số ngửa 1 ứng với NS và SN, số ngửa 2 ứng với NN. Vì vậy ba giá trị **không** đồng khả năng; xác suất đúng một ngửa là \(2/4=1/2\).

**Kiểm lỗi**

Nếu ra 1/3, em đã đếm ba **nhãn** thay vì bốn chuỗi sơ cấp. Liệt kê đủ NN, NS, SN, SS rồi ghép mỗi chuỗi với số mặt ngửa tương ứng. Ôn lại mục Kiến thức 1.2. Đồng khả năng và cách tính xác suất và Bài luyện 6 tại Luyện tập 1.6. Gộp kết quả không đồng khả năng.

</details>

### 1.3. Biến cố đối và xác suất bé

Có những câu hỏi hỏi một sự việc xảy ra, nhưng đếm trực tiếp các trường hợp thuận lợi lại khó. Chẳng hạn, khi gieo một đồng xu nhiều lần và hỏi “có ít nhất một lần ngửa”, ta phải tính tất cả các chuỗi chứa một, hai hoặc nhiều lần ngửa. Ngược lại, câu “không có lần ngửa nào” chỉ mô tả một kiểu kết quả: mọi lần đều sấp. Hai tình huống ấy phủ hết các khả năng và không thể đồng thời xảy ra.

Nếu gọi sự việc cần tìm là A, phần còn lại của không gian mẫu chính là **biến cố đối** của A. Vì tổng xác suất của tất cả khả năng là 1, xác suất của A và biến cố đối cộng lại bằng 1. Nhờ đó ta có thể tính gián tiếp qua trường hợp dễ đếm hơn. Cũng cần hiểu một khác biệt quan trọng: xác suất **rất nhỏ nhưng dương** vẫn có nghĩa là sự việc có thể xảy ra; trong mô hình hữu hạn đồng khả năng, biến cố không thể có xác suất 0; ngược lại, một biến cố có xác suất dương dù rất nhỏ vẫn có thể xảy ra.

> **TÍNH CHẤT — Biến cố đối**
>
> \[\bar A=\Omega\setminus A,\qquad P(\bar A)=1-P(A).\] A và đối A xung khắc, phủ hết mẫu.

**Ví dụ**

**Đề bài:** Một hộp có 20 phiếu khác nhau, trong đó đúng hai phiếu trúng thưởng. Chọn ngẫu nhiên đều một phiếu. Tính xác suất **không trúng thưởng** và xác suất **trúng thưởng**.

**Lời giải:** Có 18 phiếu không trúng trong 20 phiếu đồng khả năng, nên \(P(\text{không trúng})=18/20=9/10\). Biến cố “trúng thưởng” là biến cố đối của “không trúng thưởng”, do đó \(P(\text{trúng})=1-9/10=1/10\). Dùng biến cố đối giúp kiểm tra ngay hai xác suất cộng lại bằng 1.

**Nguyên lí xác suất bé:** Một biến cố có \(0<P(A)\ll 1\) vẫn có thể xảy ra. Không suy ra biến cố không thể và không khẳng định số lần xảy ra trong một số lượt thử bằng chính xác “số lượt × xác suất”.

**Kiến thức cần ghi nhớ**

Không được đồng nhất **hiếm** với **không thể**. Một vé trúng thưởng trong 50 vé đồng khả năng vẫn cho xác suất \(1/50>0\), còn một hộp không có vé trúng nào mới cho xác suất trúng bằng 0. Xác suất nhỏ cũng không có nghĩa rằng số lần xảy ra trong một số lượt thử ngắn phải bằng đúng tích số lượt với xác suất.

**Vận dụng**

Có 20 thẻ đồng khả năng, đúng 1 thẻ màu đen. Tính P(không đen). Biến cố đen có phải không thể?

<!-- ITEM_ID: THPT-TOP20-T03; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O04; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details markdown="1"><summary>Đối chiếu</summary>

P(không đen)=19/20; P(đen)=1/20>0 nên đen là hiếm, không phải không thể.

**Kiểm lỗi**

Nếu nói xác suất 0, em đã nhầm ít xảy ra với biến cố rỗng. Ôn lại mục Kiến thức 1.3. Biến cố đối và xác suất bé và Bài luyện 4 tại Luyện tập 1.4. Tính xác suất bằng biến cố đối.

</details>







**Vận dụng**

Trong 100 vé đồng khả năng chỉ có một vé trúng. Biến cố trúng vé là không thể hay hiếm? Viết xác suất.

<!-- ITEM_ID: THPT-TOP20-T12; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O05; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details markdown="1"><summary>Đối chiếu</summary>

**Lời giải:** P(trúng)=1/100>0; hiếm chứ không phải biến cố không thể.

**Kiểm lỗi**

Nếu P=0, em đã bỏ một vé trúng còn có mặt trong Ω. Đếm n(A)=1 và n(Ω)=100. Ôn lại mục Kiến thức 1.3. Biến cố đối và xác suất bé và Bài luyện 5 tại Luyện tập 1.5. Biến cố hiếm và biến cố không thể.

</details>

### 1.4. Đếm kết quả bằng tổ hợp và sơ đồ cây

Khi tung một đồng xu cân đối hai lần, kết quả “lần đầu ngửa, lần sau sấp” khác với “lần đầu sấp, lần sau ngửa”. Vì phép thử diễn ra theo từng bước, cách tự nhiên để không bỏ sót kết quả là vẽ một **sơ đồ cây**: từ mỗi khả năng ở lượt đầu, ta tiếp tục xét những khả năng ở lượt hai. Mỗi đường đi từ gốc đến lá mô tả một kết quả có thứ tự, chứ không chỉ một nhóm ký hiệu.

Quan sát hình dưới đây trước khi tính: sau mỗi nhánh N (ngửa) hoặc S (sấp), cây lại tách thành N và S. Ta nhận được bốn đường đi NN, NS, SN, SS. Trong phép tung đồng xu cân đối và độc lập, bốn đường đi ấy đồng khả năng. Tuy nhiên, nếu cơ chế ở lượt sau phụ thuộc lượt trước, các lá trên cây không nhất thiết còn có xác suất bằng nhau; cây giúp **liệt kê** các kết quả, không tự bảo đảm đồng khả năng.

![Sơ đồ cây hai lần tung đồng xu cân đối với bốn kết quả đồng khả năng](../../../assets/images/thpt/FIG-TOP20-G10-B27_TWO_TOSSES_TREE_WHITE_R00.svg)

**Hướng dẫn đọc hình:** Theo một đường đi từ trái sang phải để biết thứ tự hai lần tung. Muốn có đúng một lần ngửa, em chỉ chọn hai lá NS và SN, không gộp chúng thành một kết quả. Trong mô hình đồng xu cân đối, đó là hai trong bốn kết quả đồng khả năng, nên xác suất bằng \(2/4\).

Với bài toán **chọn đồng thời** một nhóm \(k\) vật từ \(n\) vật phân biệt và không phân vai, thứ tự chọn không tạo ra kết quả mới: ta cần đếm các **nhóm** khác nhau chứ không đếm mọi cách sắp xếp của từng nhóm. Còn với việc **thực hiện tuần tự**, thứ tự thường quan trọng và ta đếm bằng quy tắc nhân hoặc sơ đồ cây. Vì vậy, trước khi tính xác suất, phải xác định đúng mình đang đếm **nhóm không thứ tự** hay **chuỗi có thứ tự**, và dùng cùng một kiểu kết quả ở tử số lẫn mẫu số.

> **PHƯƠNG PHÁP — Đếm và đọc sơ đồ cây**
>
> Đếm chuỗi có thứ tự khác nhóm không thứ tự; dùng \(\binom nk\) khi chọn nhóm không phân vai. Không suy mọi lá của cây đồng khả năng nếu chưa kiểm.

**Có hoàn lại hay không hoàn lại thay đổi cả xác suất ở bước sau.** Khi chọn **đồng thời** \(k\) vật phân biệt trong \(n\) vật và mọi nhóm kích thước \(k\) đồng khả năng, mẫu có \(\binom nk\) nhóm. Khi **rút liên tiếp có ghi thứ tự**, phải kể từng đường đi trong cây; nếu rút không hoàn lại thì sau mỗi lần số vật còn lại giảm. Đừng tự xem hai lượt là độc lập chỉ vì thao tác rút tương tự nhau.

**Ví dụ bổ sung.** Hộp có 3 bi đỏ và 2 bi xanh, tất cả **5 viên bi vật lý phân biệt**, rút ngẫu nhiên **2 viên không hoàn lại**. Xác suất cả hai đỏ có thể tính theo các **cặp không thứ tự**: số cặp đỏ \(\binom32=3\), tổng \(\binom52=10\), nên \(P=3/10\). Cũng có thể đếm **hai lượt có thứ tự**: 3 cách chọn bi đỏ đầu, 2 cách chọn bi đỏ sau, tổng có \(5\cdot4=20\) cặp có thứ tự đồng khả năng; \(P=(3\cdot2)/(5\cdot4)=3/10\). Hai mẫu khác nhau nhưng kết quả bằng nhau vì dùng **cùng cách xét thứ tự** ở tử và mẫu. Không nhân \((3/5)\cdot(3/5)\), vì sau viên đỏ thứ nhất chỉ còn 2 viên đỏ trong 4 viên.

**Ví dụ**

**Đề bài:** Có tám lá phiếu khác nhau ghi các số từ 1 đến 8, trong đó bốn số chẵn. Rút đồng thời ngẫu nhiên ba phiếu, các nhóm ba phiếu đồng khả năng. Tính xác suất cả ba phiếu đều ghi số chẵn.

**Lời giải:** Vì rút đồng thời và không phân vai ba vị trí, mỗi kết quả là một **nhóm không thứ tự**. Số nhóm có thể rút là \(\binom83=56\). Có bốn phiếu mang số chẵn, nên số nhóm ba phiếu đều chẵn là \(\binom43=4\). Xác suất cần tìm là \(P=4/56=1/14\). Tử và mẫu đều đếm nhóm không thứ tự.

**Ví dụ**

**Đề bài:** Có bốn thẻ khác nhau. So sánh số kết quả khi (a) rút liên tiếp hai thẻ không hoàn lại, ghi thứ tự rút; (b) lấy đồng thời hai thẻ không xét thứ tự. Mỗi trường hợp cần dùng cách đếm nào?

**Lời giải:** Ở (a), lượt đầu có bốn cách chọn, lượt sau còn ba cách, nên có \(4\cdot3=12\) **cặp có thứ tự**. Ở (b), chỉ xét nhóm hai thẻ, nên có \(\binom42=6\) **nhóm không thứ tự**. Hai phép thử có cách mô tả kết quả khác nhau; khi tính xác suất, không được trộn tử số đếm nhóm với mẫu số đếm cặp.

**Kiến thức cần ghi nhớ**

Với câu hỏi “ít nhất một”, biến cố đối thường là “không có lần nào”. Khi chọn đều hai phiếu trong năm phiếu khác nhau (hai đỏ, ba xanh), xác suất có ít nhất một phiếu đỏ là \(1-\binom32/\binom52=7/10\). Phải lấy biến cố đối là **cả hai phiếu xanh**, không phải “đúng một phiếu đỏ”, và đếm cùng một kiểu nhóm ở cả tử số lẫn mẫu số.

**Vận dụng**

Từ 6 học sinh chọn một nhóm 2 người không phân vai; so với chọn trưởng rồi phó, có bao nhiêu kết quả mỗi loại?

<!-- ITEM_ID: THPT-TOP20-T04; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O07; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details markdown="1"><summary>Đối chiếu</summary>

Không phân vai có C(6,2)=15 nhóm; phân hai vai có 6×5=30 cặp có thứ tự.

**Kiểm lỗi**

Nếu có cả hai bằng 30, nhóm AB và BA đã bị đếm hai lần ở trường hợp không phân vai. Ôn lại mục Kiến thức 1.4. Đếm kết quả bằng tổ hợp và sơ đồ cây và Bài luyện 7 tại Luyện tập 1.7. Chọn nhóm không xét thứ tự.

</details>





**Vận dụng**

Từ 5 phiếu khác nhau (1 đỏ, 4 xanh), chọn đều **hai phiếu không xét thứ tự**. Xác suất ít nhất một phiếu đỏ?

<!-- ITEM_ID: THPT-TOP20-T13; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O08; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details markdown="1"><summary>Đối chiếu</summary>

**Lời giải:** P=1−P(cả hai xanh)=1−C(4,2)/C(5,2)=1−6/10=2/5.

**Kiểm lỗi**

Nếu dùng 1−4/5 thì em đang xét một phiếu. Mẫu này là **nhóm hai phiếu**, phải đếm C(5,2). Ôn lại mục Kiến thức 1.4. Đếm kết quả bằng tổ hợp và sơ đồ cây và Bài luyện 8 tại Luyện tập 1.8. Ít nhất một và biến cố đối.

</details>

### 1.5. Chọn đúng mô hình trước khi tính

Một lời giải có thể tính toán hoàn toàn chính xác mà vẫn cho xác suất sai nếu ngay từ đầu ta lựa chọn sai mô hình. Chẳng hạn, khi gieo hai xúc xắc, các cặp \((1,6)\) và \((6,1)\) là hai kết quả khác nhau nếu ghi riêng số chấm của từng con. Nhưng nếu chỉ nhìn vào tổng số chấm thì cả hai đều được ghi thành 7. Số **nhãn tổng** ít hơn số **cặp kết quả**, và các nhãn tổng lại không đồng khả năng.

Vì thế, trước khi chọn công thức, ta cần hiểu chính xác một kết quả sơ cấp gồm những thông tin gì; các kết quả ấy có đồng khả năng không; thứ tự hoặc việc hoàn lại có làm thay đổi tập kết quả không. Sau đó mới xác định tập kết quả thuận lợi và quyết định nên đếm trực tiếp, dùng biến cố đối hay lập sơ đồ cây. Làm theo thứ tự này giúp em kiểm tra tính đúng đắn của mô hình trước khi kiểm tra phép tính, thay vì chỉ dựa vào việc đáp số cuối cùng nằm giữa 0 và 1.

> **KIẾN THỨC CẦN GHI NHỚ — Kiểm mô hình trước phép tính**
>
> Xác định kết quả sơ cấp, tính đồng khả năng, thứ tự, có/không hoàn lại, tập kết quả thuận lợi và điều kiện dùng công thức.

**Ví dụ**

**Đề bài:** Gieo hai xúc xắc cân đối, phân biệt. Tính xác suất tổng số chấm bằng 5 và giải thích vì sao không thể lấy \(1/11\) chỉ vì tổng số chấm có 11 giá trị từ 2 đến 12.

**Lời giải:** Một kết quả sơ cấp là cặp có thứ tự \((a,b)\), với \(a,b\in\{1,2,3,4,5,6\}\), nên có \(6\cdot6=36\) cặp đồng khả năng. Tổng bằng 5 khi rơi vào một trong bốn cặp \((1,4),(2,3),(3,2),(4,1)\), do đó \(P(\text{tổng}=5)=4/36=1/9\). Mười một giá trị tổng không đồng khả năng vì mỗi tổng có số cặp tạo thành khác nhau; vì vậy \(1/11\) không phải xác suất cần tìm.

**Lỗi thường gặp**

Khi gieo hai xúc xắc phân biệt, có 36 **cặp có thứ tự** đồng khả năng, nhưng 11 **giá trị tổng** từ 2 đến 12 không đồng khả năng. Tổng bằng 2 chỉ xuất hiện ở cặp \((1,1)\), trong khi tổng bằng 7 xuất hiện ở sáu cặp. Nếu đếm 11 giá trị tổng như 11 kết quả đồng khả năng, lời giải sẽ sai dù phép chia được tính đúng.

Đáp số nằm trong khoảng \([0,1]\) chưa đủ bảo đảm mô hình đúng. Trước khi sử dụng tỉ số đếm, hãy kiểm tra và giải thích vì sao các kết quả sơ cấp mình chọn thực sự đồng khả năng.

**Vận dụng**

Gieo hai xúc xắc phân biệt, cân đối. Có bao nhiêu cặp sơ cấp đồng khả năng và P(tổng số chấm bằng 12)?

<!-- ITEM_ID: THPT-TOP20-T05; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O10; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details markdown="1"><summary>Đối chiếu</summary>

Có 36 cặp có thứ tự; chỉ (6,6) có tổng12 nên P=1/36.

**Kiểm lỗi**

Không coi 11 tổng số chấm từ 2 đến12 là đồng khả năng; tổng12 chỉ có một cặp. Ôn lại Kiến thức 1.5, rồi làm Bài luyện 6 (Luyện tập 1.6) để lập các cặp sơ cấp đồng khả năng trước khi đếm mỗi giá trị tổng. Nếu vẫn nhầm thứ tự rút, luyện thêm Bài luyện 10 (Luyện tập 1.10).

</details>



**Vận dụng**

Tung một đồng xu cân đối ba lần, coi chuỗi có thứ tự. Có mấy kết quả đồng khả năng và xác suất đúng hai mặt ngửa?

<!-- ITEM_ID: THPT-TOP20-T14; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O09; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details markdown="1"><summary>Đối chiếu</summary>

**Lời giải:** Có 2³=8 chuỗi; đúng hai ngửa là NNS, NSN, SNN (3 chuỗi), P=3/8.

**Kiểm lỗi**

Nếu đếm ba loại “0/1/2/3 ngửa” là 4 kết quả đồng khả năng, em đã gộp các chuỗi khác nhau. Vẽ cây ba tầng. Ôn lại mục Kiến thức 1.5. Chọn đúng mô hình trước khi tính và Bài luyện 9 tại Luyện tập 1.9. Chuỗi có thứ tự trên sơ đồ cây.

</details>

## 2. Kết hợp các biến cố



### 2.1. Hợp, giao và xung khắc

Trong một lớp học, có bạn thích bóng đá, có bạn thích bóng rổ và có bạn thích cả hai. Nếu cần đếm những bạn thích **ít nhất một** môn, ta phải gộp hai nhóm nhưng chỉ tính mỗi người một lần. Nếu cần đếm những bạn thích **cả hai** môn, ta chỉ giữ phần chung của hai nhóm. Trong xác suất, hai cách chọn kết quả ấy dẫn đến hai khái niệm khác nhau: **hợp** và **giao** của các biến cố.

Hãy xét một lần gieo xúc xắc, với A là biến cố ra số chẵn và B là biến cố ra số từ 4 trở lên. Khi biểu diễn trên hình, A chứa các số 2, 4, 6 còn B chứa các số 4, 5, 6. Phần chồng nhau gồm 4 và 6 — đó là kết quả làm **cả A và B** xảy ra. Phần nằm trong ít nhất một vùng gồm 2, 4, 5, 6 — đó là kết quả làm **A hoặc B** xảy ra. Nếu hai vùng không có kết quả chung, ta gọi hai biến cố là **xung khắc**; khi ấy chúng không thể đồng thời xảy ra trong một lần thử.

![Đọc phần giao và phần hợp của hai biến cố khi gieo xúc xắc](../../../assets/images/thpt/FIG-TOP20-G11-B28-B29_VENN_WHITE_R00.svg)

**Hướng dẫn đọc hình:** Khung \(\Omega\) biểu diễn sáu kết quả của phép gieo xúc xắc. Quan sát riêng phần giao chứa 4, 6; phần chỉ thuộc A chứa 2; phần chỉ thuộc B chứa 5. Kết quả 1 và 3 nằm ngoài cả hai biến cố. Các vòng tròn giúp nhìn quan hệ tập hợp, **không** có nghĩa là diện tích các vùng tỉ lệ với xác suất.

**Tương tác khám phá:** [Thay đổi các kết quả thuộc A và B trên mô hình](../../../math-lab/models/slm-top20-prob-events-r00/) để tự kiểm tra sự khác nhau giữa “hoặc”, “và” và “không xảy ra cùng nhau”.

> **ĐỊNH NGHĨA — Hợp, giao, xung khắc**
>
> \(A\cup B\) là ít nhất một; \(A\cap B\) là cả hai; xung khắc khi \(A\cap B=\varnothing\). Hợp đếm mỗi kết quả ở giao chỉ một lần.

**Ví dụ**

**Đề bài:** Gieo một xúc xắc sáu mặt cân đối. Gọi \(A\) là biến cố “ra số chẵn” và \(B\) là biến cố “ra số lớn hơn 3”. Dựa vào hình Venn ngay phía trên, hãy viết \(A\cap B\), \(A\cup B\), tính \(P(A\cup B)\) và cho biết hai biến cố có xung khắc không.

**Lời giải:** Ta có \(A=\{2,4,6\}\) và \(B=\{4,5,6\}\), nên \(A\cap B=\{4,6\}\). Hợp của hai tập là \(A\cup B=\{2,4,5,6\}\), gồm bốn kết quả. Vì sáu mặt xúc xắc đồng khả năng, \(P(A\cup B)=4/6=2/3\); cũng có thể kiểm bằng quy tắc cộng: \(3/6+3/6-2/6=4/6\). Hai biến cố **không xung khắc**, bởi 4 và 6 thuộc cả hai tập. Các tập kết quả và xác suất đều khớp với hình minh họa.

**Hướng dẫn đọc hình:** Nhìn vùng chỉ thuộc A, chỉ thuộc B, vùng chồng nhau và vùng ở ngoài cả hai. Đếm vùng chồng **một lần** khi tìm hợp.

**Vận dụng**

Gieo một xúc xắc sáu mặt cân đối. A=ra số chẵn, B=ra số không lớn hơn 2. Viết A∩B và A∪B.

<!-- ITEM_ID: THPT-TOP20-T06; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O11; CONTENT_VERSION: TOP20-R12-20261121-T06; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details markdown="1"><summary>Đối chiếu</summary>

A={2,4,6}, B={1,2}; giao={2}, hợp={1,2,4,6}.

**Kiểm lỗi**

Nếu lấy B={4,5,6} thì em đã chép điều kiện “lớn hơn 3” của hình minh họa, không phải điều kiện “không lớn hơn 2” trong đề này. Viết B={1,2} trước; giao chỉ lấy phần chung {2}, còn hợp chứa {1,2,4,6} và mỗi số được ghi đúng một lần. Ôn lại Kiến thức 2.1 và giải lại Bài luyện 11.

</details>







### 2.2. Độc lập không phải xung khắc

Giả sử ta tung hai đồng xu cân đối và việc tung đồng xu thứ nhất không ảnh hưởng đến đồng xu thứ hai. Biết đồng xu đầu tiên ra ngửa không làm kết quả ngửa của đồng xu thứ hai dễ hay khó hơn. Đó là trực giác của **hai biến cố độc lập**: thông tin rằng biến cố này xảy ra không làm thay đổi xác suất của biến cố kia (khi xác suất có điều kiện được xác định).

Bây giờ hãy so sánh với hai biến cố “lần tung đầu ra ngửa” và “lần tung đầu ra sấp”. Chúng không thể cùng xảy ra, nên **xung khắc**; nhưng khi đã biết biến cố thứ nhất xảy ra, biến cố thứ hai chắc chắn không xảy ra. Với hai biến cố đều có xác suất dương, xung khắc và độc lập vì thế không thể là cùng một tính chất. Tiêu chuẩn toán học để kiểm tra độc lập là so sánh xác suất của **giao** với **tích hai xác suất riêng**. Đây là điều kiện phải được kiểm tra, không phải công thức được phép áp dụng cho mọi cặp biến cố.

> **TÍNH CHẤT — Độc lập**
>
> \[P(A\cap B)=P(A)P(B).\] Đây là tiêu chuẩn độc lập; không suy từ việc hai biến cố không xung khắc.

**Phản ví dụ giúp kiểm khái niệm.** Trên một xúc xắc sáu mặt cân đối, xét \(A=\{2,4,6\}\) là biến cố chẵn và \(B=\{1,2,3\}\) là biến cố không lớn hơn 3. Ta có \(P(A)=P(B)=1/2\), \(A\cap B=\{2\}\), \(P(A\cap B)=1/6\) khác \(P(A)P(B)=1/4\). Vậy hai biến cố **không độc lập**, dù vẫn có thể cùng xảy ra và do đó **không xung khắc**. Muốn quyết định độc lập, luôn xét **cùng một không gian mẫu** và so đúng \(P(A\cap B)\) với \(P(A)P(B)\).

> **LƯU Ý — Xung khắc khác độc lập.** Với \(P(A)>0\) và \(P(B)>0\), nếu \(A\cap B=\varnothing\) thì \(P(A\cap B)=0\), không thể bằng tích \(P(A)P(B)>0\); hai biến cố xung khắc có xác suất dương không thể độc lập. Trong trường hợp có biến cố xác suất \(0\), cần dùng định nghĩa xác suất, không áp suy luận “đều dương” này.

**Ví dụ**

**Đề bài:** Tung hai đồng xu cân đối, độc lập; ghi kết quả theo thứ tự. (a) Xét \(A\): “xu đầu ngửa” và \(B\): “xu sau ngửa”. Kiểm tra xem \(A,B\) có độc lập không. (b) Xét \(C\): “cả hai xu ngửa” và \(D\): “xu đầu sấp”. Hai biến cố \(C,D\) có xung khắc và độc lập không?

**Lời giải:** Không gian mẫu là \(\{NN,NS,SN,SS\}\), gồm bốn kết quả đồng khả năng. (a) \(P(A)=P(B)=1/2\) và \(P(A\cap B)=1/4=P(A)P(B)\), nên \(A,B\) độc lập. (b) \(C=\{NN\}\), \(D=\{SN,SS\}\), do đó \(C\cap D=\varnothing\): hai biến cố **xung khắc**. Nhưng \(P(C\cap D)=0\), còn \(P(C)P(D)=(1/4)(1/2)=1/8\), nên chúng **không độc lập**. Xung khắc và độc lập là hai tính chất khác nhau.

**Giới hạn:** Không suy độc lập chỉ vì hai biến cố có thể đồng thời xảy ra; phải xem mô hình hoặc kiểm công thức.

**Kiến thức cần ghi nhớ**

Hai biến cố **xung khắc** không cùng xảy ra, còn hai biến cố **độc lập** phải thỏa \(P(A\cap B)=P(A)P(B)\). Trên một lần gieo xúc xắc cân đối, “ra số chẵn” và “ra số lẻ” đều có xác suất \(1/2\) nhưng giao rỗng, nên không độc lập. Kết luận “xung khắc thì không độc lập” cần điều kiện **cả hai xác suất đều dương**; trường hợp có xác suất bằng 0 là ngoại lệ phải xét riêng.

**Vận dụng**

Tung một đồng xu cân đối và gieo xúc xắc cân đối độc lập. Xác suất đồng xu ngửa và xúc xắc chẵn là bao nhiêu?

<!-- ITEM_ID: THPT-TOP20-T07; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O12; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details markdown="1"><summary>Đối chiếu</summary>

P=1/2×3/6=1/4. Hai phép thử độc lập nên số cặp thuận lợi=1×3 trong 12 cặp.

**Kiểm lỗi**

Nếu tính 1/2+1/2, em đang cộng xác suất mà đề yêu cầu cùng xảy ra. Ôn lại mục Kiến thức 2.2. Độc lập không phải xung khắc và Bài luyện 12 tại Luyện tập 2.2. Xác suất giao của hai biến cố độc lập.

</details>





**Vận dụng**

Gieo một xúc xắc: A=ra 1 và B=ra 6. A,B có xung khắc không? Có độc lập không?

<!-- ITEM_ID: THPT-TOP20-T15; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O13; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details markdown="1"><summary>Đối chiếu</summary>

**Lời giải:** A∩B=∅ nên xung khắc; P(A)P(B)=1/36>0 nhưng P(A∩B)=0 nên **không độc lập**.

**Kiểm lỗi**

Nếu viết “vì không xảy ra cùng nên độc lập”, em đã đảo khái niệm. Xung khắc là giao rỗng, độc lập cần kiểm tích xác suất. Ôn lại mục Kiến thức 2.2. Độc lập không phải xung khắc và Bài luyện 13 tại Luyện tập 2.3. Phân biệt xung khắc và độc lập.

</details>

### 2.3. Quy tắc cộng xác suất

Khi đếm số người tham gia ít nhất một trong hai câu lạc bộ, cách cộng số người của từng câu lạc bộ có thể đếm trùng những người tham gia cả hai. Cụ thể, mỗi người ở phần giao đã xuất hiện một lần trong nhóm A và thêm một lần trong nhóm B. Muốn đếm đúng hợp, ta phải **trừ phần giao một lần**.

Lập luận ấy cũng áp dụng cho xác suất: cộng xác suất của A và B rồi trừ xác suất của phần xảy ra đồng thời. Ta không cần giả thiết hai biến cố độc lập, bởi đây là quy tắc về việc phân chia và đếm những kết quả thuộc hợp. Trường hợp hai biến cố xung khắc thì phần giao không có kết quả nào, số hạng cần trừ bằng 0 và công thức tự rút gọn thành phép cộng hai xác suất.

> **CÔNG THỨC — Quy tắc cộng**
>
> \[P(A\cup B)=P(A)+P(B)-P(A\cap B).\] Nếu giao rỗng thì bỏ số hạng giao.

**Kiểm ràng buộc xác suất trước khi tính.** Vì \(A\cap B\subseteq A\) và \(A\cap B\subseteq B\), ta phải có \(0\le P(A\cap B)\le\min(P(A),P(B))\). Công thức cộng xác suất sau khi trừ phần giao còn phải nằm trong \([0,1]\). Nếu phép cộng dẫn đến kết quả lớn hơn \(1\), em chắc chắn đang **đếm trùng** hoặc dùng sai số liệu.

**Ví dụ bổ sung.** Trên xúc xắc cân đối, \(A=\{2,4,6\}\) (chẵn), \(B=\{4,5,6\}\) (ít nhất 4). Từ mẫu sáu mặt: \(P(A)=3/6\), \(P(B)=3/6\), \(P(A\cap B)=2/6\). Vậy \(P(A\cup B)=3/6+3/6-2/6=4/6=2/3\), tương ứng đúng các mặt \(\{2,4,5,6\}\). Nếu cộng thành \(6/6\), hai mặt 4 và 6 đã bị tính **hai lần**. Không cần và cũng không có giả thiết hai biến cố độc lập.

**Ví dụ**

**Đề bài:** Trong một nhóm 50 người, có 30 người thích hoạt động A, 25 người thích hoạt động B và 10 người thích cả hai. Chọn ngẫu nhiên đều một người. Tính xác suất người đó thích **ít nhất một** trong hai hoạt động.

**Lời giải:** Cộng 30 và 25 sẽ đếm hai lần 10 người thích cả hai. Số người thích ít nhất một hoạt động là \(30+25-10=45\), nên xác suất cần tìm bằng \(45/50=9/10\). Không cần giả thiết hai sở thích độc lập; chỉ cần dùng quy tắc cộng trừ phần giao. Kiểm tra: 45 không vượt 50.

**Lỗi thường gặp:** Cộng \(P(A)+P(B)\) mà quên trừ giao, dẫn tới xác suất có thể vượt 1.

**Kiến thức cần ghi nhớ**

Nếu \(A\cap B=\varnothing\) thì không có phần chung bị đếm hai lần, vì vậy \(P(A\cup B)=P(A)+P(B)\). Chẳng hạn, trên một lần gieo xúc xắc, \(A=\{1\}\) và \(B=\{4\}\) xung khắc nên \(P(A\cup B)=2/6=1/3\). Nếu có kết quả chung, phải trở lại công thức đầy đủ và trừ \(P(A\cap B)\).

**Vận dụng**

Gieo xúc xắc cân đối. A=lẻ, B=lớn hơn 3. Tính P(A∪B) bằng quy tắc cộng.

<!-- ITEM_ID: THPT-TOP20-T08; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O14; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details markdown="1"><summary>Đối chiếu</summary>

A={1,3,5}, B={4,5,6}, giao={5}; P(hợp)=3/6+3/6−1/6=5/6.

**Kiểm lỗi**

Nếu ra 1, em đã cộng mà quên trừ kết quả 5 được đếm hai lần. Ôn lại mục Kiến thức 2.3. Quy tắc cộng xác suất và Bài luyện 14 tại Luyện tập 2.4. Áp dụng quy tắc cộng xác suất.

</details>





**Vận dụng**

Gieo xúc xắc cân đối. A={1,2}, B={5,6}. Tính P(A∪B) và nêu vì sao cộng trực tiếp.

<!-- ITEM_ID: THPT-TOP20-T16; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O15; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details markdown="1"><summary>Đối chiếu</summary>

**Lời giải:** Hai tập rời nhau nên P(A∩B)=0, P(A∪B)=2/6+2/6=4/6=2/3.

**Kiểm lỗi**

Nếu nhân 2/6×2/6, em đã tính giao của biến cố độc lập; ở đây A,B xung khắc và đề hỏi hợp. Ôn lại mục Kiến thức 2.3. Quy tắc cộng xác suất và Bài luyện 15 tại Luyện tập 2.5. Quy tắc cộng khi hai biến cố xung khắc.

</details>

### 2.4. Quy tắc nhân độc lập và biến cố đối

Giả sử một hệ thống có hai thiết bị hoạt động độc lập. Nếu câu hỏi là “**cả hai** thiết bị cùng hoạt động”, ta xét giao của hai biến cố. Vì các kết quả hoạt động không ảnh hưởng nhau, xác suất cả hai cùng hoạt động bằng tích các xác suất riêng. Nhưng nếu câu hỏi đổi thành “**ít nhất một** thiết bị hoạt động”, việc cộng ngay hai xác suất hoạt động sẽ đếm trùng trường hợp cả hai đều hoạt động.

Cách suy nghĩ gọn hơn là xét tình huống ngược lại: “không có thiết bị nào hoạt động”, tức là **cả hai đều hỏng**. Đây là biến cố đối của “ít nhất một hoạt động”. Khi hai thiết bị độc lập, sự cố hỏng của chúng cũng độc lập, nên có thể nhân hai xác suất hỏng rồi lấy 1 trừ kết quả đó. Lập luận này **không được tự động áp dụng** cho hai thiết bị có chung nguồn điện hoặc một phép rút thẻ không hoàn lại: những tình huống ấy có thể làm các biến cố phụ thuộc nhau.

> **CÔNG THỨC — Nhân độc lập và biến cố đối**
>
> Nếu A,B độc lập: \[P(A\cap B)=P(A)P(B),\quad P(A\cup B)=1-P(\bar A)P(\bar B).\] Không nhân xác suất biên cho biến cố phụ thuộc.

**Trước khi nhân: kiểm tính độc lập.** Với hai biến cố bất kỳ, xác suất cùng xảy ra không thể được tự động thay bằng \(P(A)P(B)\). Nếu biết rõ các phép thử độc lập (chẳng hạn hai lượt tung đồng xu độc lập) thì được nhân. Nếu cùng một quá trình rút **không hoàn lại**, kết quả lần đầu thay đổi tỉ lệ còn lại nên phải tính theo nhánh có điều kiện, hoặc đếm trực tiếp các kết quả đồng khả năng như trong mục 1.4.

**Ví dụ bổ sung.** Rút hai bi không hoàn lại từ hộp 3 đỏ, 2 xanh. Xác suất **ít nhất một viên xanh** là \(1-P(\text{cả hai đỏ})=1-3/10=7/10\). Không dùng \(1-(3/5)^2=16/25\) vì hai lần rút **không độc lập**. Nếu rút **có hoàn lại** và trộn đều trước lượt sau, hai lượt mới độc lập và \(P(\text{ít nhất một xanh})=1-(3/5)^2=16/25\). Hai kết quả khác nhau không có nghĩa công thức biến cố đối sai: sai ở việc **chọn mô hình phép thử**.

**Ví dụ**

**Đề bài:** Hai thiết bị hoạt động độc lập. Xác suất thiết bị thứ nhất hoạt động là \(3/4\), thiết bị thứ hai là \(4/5\). Tính xác suất của ba biến cố: (a) **cả hai** cùng hoạt động; (b) **cả hai** cùng hỏng; (c) **ít nhất một** thiết bị hoạt động.

**Lời giải:** (a) Vì hoạt động độc lập, xác suất cả hai chạy là \((3/4)(4/5)=3/5\). (b) Xác suất hỏng riêng lần lượt là \(1/4\) và \(1/5\). Hai trạng thái hỏng cũng độc lập, nên xác suất cả hai hỏng là \((1/4)(1/5)=1/20\). (c) “Ít nhất một hoạt động” là biến cố đối của “cả hai cùng hỏng”, vì vậy xác suất bằng \(1-1/20=19/20\). **Cách chọn phương pháp:** dùng quy tắc nhân khi xét hai biến cố độc lập cùng xảy ra và dùng biến cố đối khi câu hỏi là “ít nhất một”.

**Giới hạn:** Khi rút liên tiếp không hoàn lại hoặc hai biến cố phụ thuộc, không nhân hai xác suất ban đầu như thể độc lập. Trong chuyên đề này, em vẫn có thể **đếm các chuỗi kết quả đồng khả năng** để giải tình huống cụ thể; công thức xác suất có điều kiện sẽ được học ở chuyên đề khác, không phải tiền đề bắt buộc ở đây.

**Kiến thức cần ghi nhớ**

Đối với hai phép thử độc lập, muốn tính xác suất **cả hai** biến cố cùng xảy ra ta dùng tích các xác suất; muốn tính **ít nhất một** xảy ra, ta có thể dùng quy tắc cộng trừ phần giao hoặc lấy biến cố đối. Khi tung đồng xu cân đối và gieo xúc xắc cân đối độc lập, xác suất “xu ngửa hoặc xúc xắc ra số lớn hơn 4” là \(1/2+1/3-1/6=2/3\). Không dùng phép nhân như công thức độc lập khi chưa có căn cứ về tính độc lập.

**Vận dụng**

Hai thiết bị hoạt động độc lập, xác suất hỏng lần lượt 1/5 và 1/4. Xác suất có ít nhất một thiết bị hoạt động là bao nhiêu?

<!-- ITEM_ID: THPT-TOP20-T09; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O16; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details markdown="1"><summary>Đối chiếu</summary>

P=1−P(cả hai hỏng)=1−(1/5)(1/4)=19/20.

**Kiểm lỗi**

Nếu nhân hai xác suất hoạt động 4/5×3/4, em đang tính cả hai hoạt động, không phải ít nhất một. Ôn lại mục Kiến thức 2.4. Quy tắc nhân độc lập và biến cố đối và Bài luyện 16 tại Luyện tập 2.6. Quy tắc nhân cho hai phép thử độc lập.

</details>







**Vận dụng**

Tung đồng xu cân đối và gieo xúc xắc cân đối độc lập. A=đồng xu ngửa, B=xúc xắc chẵn. Tính P(A∪B).

<!-- ITEM_ID: THPT-TOP20-T17; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP20-O17; CONTENT_VERSION: TOP20-R02; Q15_CANONICAL_NEW_ONLY; ASSESSMENT: PUBLIC_FORMATIVE_NO_MASTERY -->
<details markdown="1"><summary>Đối chiếu</summary>

**Lời giải:** P(A)=1/2, P(B)=1/2, P(A∩B)=1/4. Vậy P(A∪B)=1/2+1/2−1/4=3/4.

**Kiểm lỗi**

Nếu được 1, em đã cộng mà chưa trừ phần **cả hai cùng xảy ra**; nếu được 1/4 đó là giao, không phải hợp. Ôn lại mục Kiến thức 2.4. Quy tắc nhân độc lập và biến cố đối và Bài luyện 17 tại Luyện tập 2.7. Tính xác suất hợp bằng cộng và trừ giao.

</details>

<!-- TOPIC20_APPROVED_SOURCE_END -->
<span data-topic-w1-source-end="kien-thuc" hidden></span>
<p class="topic-w1-end-nav"><a href="../../">← Tổng quan các Chuyên đề</a></p>
