---
hide:
  - toc
---

<div class="thpt-r4-screen topic-w1-release-nav" data-thpt-r4 data-topic-w1="20" data-topic-w1-part="luyen-tap">
<p class="thpt-r4-eyebrow">HỌC THEO CHUYÊN ĐỀ · CĐ20 · TOÁN THPT</p>
<nav class="thpt-sgk-lesson-nav" aria-label="Điều hướng Chuyên đề 20">
<a href="../../cd19/kien-thuc/">← Chuyên đề trước</a>
<a href="../../cd21/kien-thuc/">Chuyên đề sau →</a>
<a href="../kien-thuc/">Kiến thức</a>
<a href="../tu-kiem-tra/">Tự kiểm tra</a>
</nav>
<p class="topic-w1-back"><a href="../../">← Tổng quan các Chuyên đề</a></p>
</div>
<link rel="stylesheet" href="../../../../assets/stylesheets/thpt-topic-w1-golden-v1.css">
<script src="../../../../assets/javascripts/thpt-topic-w5-golden-v1.js" defer></script>
<div class="topic-w1-boot-status" role="status" aria-live="polite">Đang chuẩn bị luyện tập…</div>
<script>
(function(){var h=document.documentElement;h.classList.add("topic-w1-pending");
 document.addEventListener("DOMContentLoaded",function(){setTimeout(function(){
 if(!h.classList.contains("topic-w1-pending"))return;h.classList.remove("topic-w1-pending");h.classList.add("topic-w1-fallback");
 var status=document.querySelector(".topic-w1-boot-status");if(status)status.textContent="Giao diện tương tác chưa tải được. Nội dung gốc vẫn có thể đọc bên dưới.";
 },0)},{once:true});})();
</script>
<span data-topic-w1-source-start="luyen-tap" hidden></span>

<!-- TOPIC20_APPROVED_SOURCE_START -->
<!-- Q18 SOURCE_LEARNER_BLOB b40b01cfbd89e3fd3cc4fe75adb599f55df2a3d9; Q18_RECEIPT_BLOB 00cfd99a633e993090bd1759437d975389c42c15; AUTHORING_PR #884; PUBLIC_PROJECTION_ONLY -->
<!-- W5_LINK_EQUIVALENT: NONE; canonical source immutable -->

# Luyện tập

Mỗi bài bắt đầu từ một câu hỏi: **kết quả sơ cấp là gì, đồng khả năng không, các biến cố đang hợp hay giao, và hai phép thử có độc lập không?** Em hãy giải thích lựa chọn của mình trước khi mở Lời giải. Chỉ sử dụng quy tắc nhân khi đã kiểm tra giả thiết độc lập.

## 1. Phép thử và xác suất cổ điển

### 1.1. Không gian mẫu và tập kết quả của biến cố

<!-- ITEM_ID: THPT-TOP20-P01; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O01; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->

**Bài luyện 1.** Rút đều một thẻ trong 10 thẻ đánh số 0 đến 9. Viết Ω và biến cố A “số chẵn”.

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Vì phép thử rút đều một thẻ và chỉ ghi số trên thẻ nên không gian mẫu là \(\Omega=\{0,1,2,3,4,5,6,7,8,9\}\). Một số nguyên chẵn khi chia hết cho 2; số 0 cũng là số chẵn. Do đó biến cố cần viết là \(A=\{0,2,4,6,8\}\), gồm năm kết quả sơ cấp. Bài yêu cầu **mô tả biến cố**, không yêu cầu tính xác suất.

**Khi làm sai:** Nếu loại 0 vì không phải số chẵn, hãy nhớ 0 chia hết cho 2.

</details>

### 1.2. Mô tả biến cố từ một điều kiện

<!-- ITEM_ID: THPT-TOP20-P02; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O02; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->

**Bài luyện 2.** Gieo xúc xắc sáu mặt một lần. Biến cố “kết quả bé hơn 2” gồm những phần tử nào và có chắc chắn không?

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Không gian mẫu của một lần gieo xúc xắc sáu mặt là \(\Omega=\{1,2,3,4,5,6\}\). Điều kiện “bé hơn 2” chỉ thỏa với mặt số 1, nên \(A=\{1\}\). Biến cố chắc chắn phải chứa cả sáu kết quả, trong khi \(A\) chỉ chứa một kết quả; vì vậy \(A\) **không chắc chắn**. Trái lại, nó vẫn có thể xảy ra.

**Khi làm sai:** Phân biệt “bé hơn” với “bé hơn hoặc bằng”; A là một tập con chứ không phải số 1/6.

</details>

### 1.3. Xác suất cổ điển từ phiếu đồng khả năng

<!-- ITEM_ID: THPT-TOP20-P03; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O03; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->

**Bài luyện 3.** Túi chứa 10 phiếu khác nhau, đúng 3 phiếu có thưởng, rút đều một phiếu. Tính P(trúng).

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Mười phiếu là mười kết quả sơ cấp đồng khả năng vì mỗi phiếu được chọn đều, không phụ thuộc phiếu có ghi giải thưởng gì. Trong đó ba phiếu thuận lợi cho biến cố “trúng”. Áp dụng tỉ số đếm cho các kết quả đồng khả năng, \(P(\text{trúng})=\dfrac{3}{10}\). Không chia theo số loại nhãn vì các nhãn có thể xuất hiện trên số phiếu khác nhau.

**Khi làm sai:** Nếu dùng tỷ số số loại giải thưởng, em đã chọn sai đơn vị kết quả sơ cấp.

</details>

### 1.4. Tính xác suất bằng biến cố đối

<!-- ITEM_ID: THPT-TOP20-P04; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O04; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->

**Bài luyện 4.** Trong 12 thẻ khác nhau, có 4 thẻ bị lỗi. Rút đều một thẻ. Tính P(không lỗi) bằng biến cố đối.

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Gọi \(B\) là biến cố “rút được thẻ lỗi”. Vì có 4 thẻ lỗi trong 12 thẻ được rút đều, \(P(B)=4/12=1/3\). Biến cố “không lỗi” chính là \(\bar B\), nên \(P(\bar B)=1-P(B)=1-\dfrac{4}{12}=\dfrac{8}{12}=\dfrac23\). Kiểm lại: tám thẻ còn lại đều không lỗi, khớp với xác suất vừa tìm.

**Khi làm sai:** Kiểm A và A̅ phủ hết 12 thẻ, không tính 4/12 là không lỗi.

</details>

### 1.5. Biến cố hiếm và biến cố không thể

<!-- ITEM_ID: THPT-TOP20-P05; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O05; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->

**Bài luyện 5.** Trong 40 vé khác nhau có một vé trúng. Phân biệt xác suất trúng với trường hợp không có vé trúng.

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Khi có đúng một vé trúng trong 40 vé được chọn đều, biến cố “trúng” chứa một kết quả thuận lợi, nên \(P(\text{trúng})=\dfrac1{40}>0\). Đó là một biến cố **hiếm nhưng có thể xảy ra**. Nếu trong cùng mô hình 40 vé không có vé nào trúng, biến cố “trúng” không chứa kết quả sơ cấp nào và có xác suất \(0\), tức **không thể xảy ra**. Không được suy từ “rất khó” thành “không thể”.

**Khi làm sai:** Đừng dùng chữ “rất khó” thay cho “bằng 0”.

</details>

### 1.6. Gộp kết quả không đồng khả năng

<!-- ITEM_ID: THPT-TOP20-P06; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O06; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->

**Bài luyện 6.** Bốn thẻ phân biệt được ghi 1, 2, 3, 4. Rút lần lượt hai thẻ **không hoàn lại**, mỗi lượt chọn đều trong các thẻ còn lại; chỉ ghi **tổng hai số**. So sánh xác suất tổng bằng 5 và tổng bằng 7. Có được xem các tổng có thể xuất hiện là đồng khả năng không?

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Vì rút **lần lượt và không hoàn lại**, mỗi kết quả sơ cấp là một cặp có thứ tự \((a,b)\) với \(a\ne b\). Có \(4\cdot3=12\) cặp đồng khả năng. Tổng bằng 5 khi rút các cặp \((1,4),(4,1),(2,3),(3,2)\), nên \(P(S=5)=\dfrac4{12}=\dfrac13\). Tổng bằng 7 chỉ có \((3,4),(4,3)\), nên \(P(S=7)=\dfrac2{12}=\dfrac16\). Vì hai xác suất khác nhau, các giá trị tổng **không đồng khả năng**, dù từng cặp có thứ tự đồng khả năng.

**Khi làm sai:** Nếu chia cho 5 vì thấy các tổng 3,4,5,6,7, em đang coi các **nhãn tổng** là kết quả đồng khả năng. Hãy lập bảng cặp có thứ tự \((a,b)\) với \(a\ne b\), khoanh bốn cặp tổng 5 và hai cặp tổng 7. Không tính cặp \((a,a)\) vì rút không hoàn lại.

</details>

### 1.7. Chọn nhóm không xét thứ tự

<!-- ITEM_ID: THPT-TOP20-P07; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O07; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->

**Bài luyện 7.** Từ 7 thẻ khác nhau, trong đó có 3 thẻ ghi sao, lấy đều 2 thẻ cùng lúc (không xét thứ tự). Tính P(cả hai sao).

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Hai thẻ được lấy **cùng lúc**, không phân biệt thẻ nào được chọn trước. Do đó một kết quả sơ cấp là một nhóm hai thẻ, có \(\binom72=21\) nhóm đồng khả năng. Muốn cả hai đều ghi sao, ta phải chọn cả hai trong ba thẻ sao, nên có \(\binom32=3\) nhóm thuận lợi. Xác suất là \(P=\dfrac{\binom32}{\binom72}=\dfrac3{21}=\dfrac17\). Cả tử và mẫu đều đếm nhóm **không có thứ tự**.

**Khi làm sai:** Nếu dùng 7×6 ở mẫu mà C(3,2) ở tử, em đã trộn có và không xét thứ tự.

</details>

### 1.8. Ít nhất một và biến cố đối

<!-- ITEM_ID: THPT-TOP20-P08; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O08; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->

**Bài luyện 8.** Túi có 2 bóng đỏ và 4 bóng xanh khác nhau. Chọn đều 2 bóng cùng lúc. Tính P(ít nhất một bóng đỏ).

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Có sáu bóng khác nhau và mọi nhóm hai bóng được chọn đều, nên tổng số kết quả là \(\binom62=15\). Thay vì đếm riêng trường hợp đúng một đỏ và hai đỏ, ta xét **biến cố đối** của “ít nhất một đỏ”: đó là “không có bóng đỏ”, tức chọn cả hai trong bốn bóng xanh. Có \(\binom42=6\) nhóm như vậy. Vì thế \(P(\text{ít nhất một đỏ})=1-\dfrac{\binom42}{\binom62}=1-\dfrac6{15}=\dfrac35\).

**Khi làm sai:** Biến cố đối là “không có đỏ”, tức cả hai xanh, không phải “đúng một đỏ”.

</details>

### 1.9. Chuỗi có thứ tự trên sơ đồ cây

<!-- ITEM_ID: THPT-TOP20-P09; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O09; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->

**Bài luyện 9.** Tung một đồng xu cân đối ba lần độc lập. Vẽ cây ba tầng hoặc liệt kê chuỗi có thứ tự để tính xác suất **lượt đầu và lượt cuối đều ngửa**, không giới hạn lượt ở giữa.

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Ba lần tung đồng xu cân đối, độc lập tạo \(2^3=8\) chuỗi có thứ tự đồng khả năng. Đề chỉ ràng buộc **lượt đầu và lượt cuối ngửa**; lượt giữa có thể ngửa hoặc sấp. Vì vậy có đúng hai chuỗi thuận lợi: **NNN** và **NSN**. Xác suất cần tìm là \(P=\dfrac28=\dfrac14\). Khi lập cây, phải giữ vị trí của ba lượt trên từng đường đi; đếm theo tổng số mặt ngửa sẽ làm mất thông tin đề yêu cầu.

**Khi làm sai:** Nếu chỉ đếm NNN, em đã tự áp thêm điều kiện “lượt giữa cũng ngửa”. Nếu gộp chuỗi theo số lần ngửa, em mất thông tin về vị trí; hãy giữ cả ba lượt trên mỗi lá cây.

</details>

### 1.10. Rút không hoàn lại theo từng bước

<!-- ITEM_ID: THPT-TOP20-P10; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O10; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->

**Bài luyện 10.** Hộp 5 thẻ khác nhau (2 đỏ, 3 xanh), rút đều liên tiếp 2 thẻ không hoàn lại. Tính P(cả hai đỏ) bằng đếm chuỗi.

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Mỗi cặp có thứ tự gồm hai thẻ **khác nhau**, vì rút không hoàn lại. Lượt đầu có năm lựa chọn, lượt sau còn bốn, nên có \(5\cdot4=20\) cặp đồng khả năng. Muốn cả hai đều đỏ, lượt đầu có hai thẻ đỏ có thể chọn và lượt sau chỉ còn một thẻ đỏ: có \(2\cdot1=2\) cặp thuận lợi. Do đó \(P(\text{cả hai đỏ})=\dfrac2{20}=\dfrac1{10}\). Không thể dùng \((2/5)^2\), bởi lần rút sau hộp đã thay đổi.

**Khi làm sai:** Nếu dùng (2/5)², em đã giả sử lượt sau vẫn có 2 đỏ trong 5 thẻ.

</details>

## 2. Hợp, giao và các quy tắc tính xác suất

### 2.1. Hợp và giao hai biến cố

<!-- ITEM_ID: THPT-TOP20-P11; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O11; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->

**Bài luyện 11.** Gieo xúc xắc: A=ra số lẻ, B=ra số không nhỏ hơn 5. Viết A∩B và A∪B.

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Trên không gian mẫu \(\Omega=\{1,2,3,4,5,6\}\), biến cố lẻ là \(A=\{1,3,5\}\), còn “không nhỏ hơn 5” nghĩa là **lớn hơn hoặc bằng 5**, nên \(B=\{5,6\}\). Giao gồm những kết quả thỏa **đồng thời** hai điều kiện: \(A\cap B=\{5\}\). Hợp gồm những kết quả thỏa **ít nhất một** điều kiện: \(A\cup B=\{1,3,5,6\}\). Trong hợp, số 5 chỉ được viết một lần.

**Khi làm sai:** Nếu gộp kết quả 5 hai lần trong hợp, em chưa coi hợp là tập hợp.

</details>

### 2.2. Xác suất giao của hai biến cố độc lập

<!-- ITEM_ID: THPT-TOP20-P12; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O12; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->

**Bài luyện 12.** Hai xúc xắc cân đối độc lập. A: con thứ nhất ra số lớn hơn 4; B: con thứ hai ra số chẵn. Tính P(A∩B).

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Gọi \(A\) là biến cố con xúc xắc thứ nhất ra 5 hoặc 6, nên \(P(A)=2/6=1/3\). Gọi \(B\) là biến cố con thứ hai ra số chẵn 2, 4 hoặc 6, nên \(P(B)=3/6=1/2\). Vì hai xúc xắc được gieo độc lập, ta dùng **quy tắc nhân cho giao**: \(P(A\cap B)=P(A)P(B)=\dfrac13\cdot\dfrac12=\dfrac16\).

**Khi làm sai:** Nếu ra 5/6, em đang cộng hai biến cố thay vì lấy giao.

</details>

### 2.3. Phân biệt xung khắc và độc lập

<!-- ITEM_ID: THPT-TOP20-P13; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O13; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->

**Bài luyện 13.** Một xúc xắc: A={1,2}, B={3,4}. Chúng có xung khắc và độc lập không?

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Hai biến cố \(A=\{1,2\}\) và \(B=\{3,4\}\) **xung khắc** vì \(A\cap B=\varnothing\). Nhưng để xét **độc lập**, phải kiểm tra đẳng thức \(P(A\cap B)=P(A)P(B)\). Ở đây \(P(A\cap B)=0\), trong khi \(P(A)P(B)=\dfrac26\cdot\dfrac26=\dfrac19>0\). Hai vế khác nhau, nên \(A\) và \(B\) **không độc lập**. Không đánh đồng hai khái niệm.

**Khi làm sai:** Hai biến cố không cùng xảy ra có xác suất dương thì không độc lập.

</details>

### 2.4. Áp dụng quy tắc cộng xác suất

<!-- ITEM_ID: THPT-TOP20-P14; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O14; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->

**Bài luyện 14.** Gieo xúc xắc. A={1,2,3,4}, B={2,4,6}. Tính P(A∪B) theo quy tắc cộng.

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Ta có \(A=\{1,2,3,4\}\), \(B=\{2,4,6\}\), nên \(A\cap B=\{2,4\}\). Vì kết quả 2 và 4 nằm trong **cả hai** biến cố, khi cộng xác suất phải trừ phần giao: \(P(A\cup B)=\dfrac46+\dfrac36-\dfrac26=\dfrac56\). Kiểm lại bằng cách liệt kê hợp \(A\cup B=\{1,2,3,4,6\}\), đúng năm trong sáu kết quả đồng khả năng.

**Khi làm sai:** Nếu ra 7/6>1, phép cộng đã đếm trùng 2,4.

</details>

### 2.5. Quy tắc cộng khi hai biến cố xung khắc

<!-- ITEM_ID: THPT-TOP20-P15; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O15; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->

**Bài luyện 15.** Gieo xúc xắc, A=ra 1 và B=ra 6. Tính P(A∪B) và giải thích vì sao cộng trực tiếp.

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Trên một lần gieo xúc xắc, \(A=\{1\}\) và \(B=\{6\}\). Hai biến cố này **xung khắc** vì không có kết quả nào vừa là 1 vừa là 6, tức \(A\cap B=\varnothing\). Do đó áp dụng **quy tắc cộng cho biến cố xung khắc**: \(P(A\cup B)=P(A)+P(B)=\dfrac16+\dfrac16=\dfrac13\). Không cần và cũng không được suy rằng hai biến cố độc lập.

**Khi làm sai:** Nếu gọi A,B độc lập, thử kiểm P(A)P(B)=1/36 khác 0.

</details>

### 2.6. Quy tắc nhân cho hai phép thử độc lập

<!-- ITEM_ID: THPT-TOP20-P16; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O16; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->

**Bài luyện 16.** Tung đồng xu cân đối và gieo xúc xắc cân đối độc lập. P(ngửa và mặt xúc xắc chia hết cho 3)?

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Đồng xu cân đối có xác suất ngửa \(1/2\). Với xúc xắc cân đối, các mặt chia hết cho 3 là 3 và 6, nên xác suất của biến cố đó bằng \(2/6=1/3\). Hai phép thử độc lập và đề hỏi **cả hai điều kiện cùng xảy ra**, nên dùng quy tắc nhân: \(P=\dfrac12\cdot\dfrac26=\dfrac16\). Nếu dùng phép cộng, em đang tính một dạng hợp chứ không phải giao.

**Khi làm sai:** Đừng lấy 1/2+2/6 vì câu hỏi yêu cầu cùng xuất hiện.

</details>

### 2.7. Tính xác suất hợp bằng cộng và trừ giao

<!-- ITEM_ID: THPT-TOP20-P17; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP20-O17; CONTENT_VERSION: TOP20-R09; PUBLIC_FORMATIVE_NO_MASTERY -->

**Bài luyện 17.** Gieo hai xúc xắc cân đối độc lập. A: con thứ nhất ra số lẻ, B: con thứ hai không lớn hơn 2. Tính P(A∪B).

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Đặt \(A\): “xúc xắc thứ nhất ra số lẻ” và \(B\): “xúc xắc thứ hai ra số không lớn hơn 2”. Khi đó \(P(A)=3/6=1/2\), \(P(B)=2/6=1/3\). Vì hai xúc xắc độc lập, \(P(A\cap B)=P(A)P(B)=1/6\). Đề hỏi **\(A\) hoặc \(B\)**, tức hợp; áp dụng quy tắc cộng, \(P(A\cup B)=\dfrac12+\dfrac13-\dfrac16=\dfrac23\). Trừ phần giao để không đếm các cặp cùng thỏa hai điều kiện hai lần.

**Khi làm sai:** Nếu kết quả 5/6, em quên trừ phần giao; nếu 1/6 đó là giao chứ không phải hợp.

</details>

## 3. Tự luận tổng hợp

Ba bài tự luận dưới đây yêu cầu trình bày lời giải và giải thích. Rubric giúp em tự kiểm tra cách trình bày sau khi đã làm xong; kết quả này không phải điểm đánh giá chính thức.

### 3.1. Chọn nhóm hai phiếu và dùng biến cố đối

<!-- ITEM_ID: THPT-TOP20-W01; ROLE: TOPIC_WRITTEN; PRIMARY_OUTCOME: TOP20-O08; CONTENT_VERSION: TOP20-R12; PUBLIC_SELF_SCORED_NO_MASTERY; NOT_PROTECTED_RD1 -->

**Bài luyện 18.** Có 8 phiếu phân biệt, 3 phiếu đỏ và 5 phiếu xanh. Chọn đều một nhóm 2 phiếu không xét thứ tự. (a) Có bao nhiêu nhóm kết quả? (b) Tính P(cả hai đỏ). (c) Tính P(ít nhất một đỏ) bằng biến cố đối.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải:**

(a) Chọn đồng thời hai trong tám phiếu phân biệt, không xét thứ tự, nên tổng số nhóm đồng khả năng là \(\binom82=28\).

(b) Muốn cả hai phiếu đều đỏ, ta chọn hai trong ba phiếu đỏ. Có \(\binom32=3\) nhóm, do đó \(P(\text{hai đỏ})=\dfrac3{28}\).

(c) Muốn có **ít nhất một phiếu đỏ**, xét biến cố đối là “cả hai phiếu xanh”. Có \(\binom52=10\) nhóm toàn xanh, vì vậy \(P(\text{ít nhất một đỏ})=1-\dfrac{10}{28}=\dfrac{18}{28}=\dfrac9{14}\).

Ba câu đều đếm bằng **nhóm không thứ tự**, nên cách lập tỉ số nhất quán.

**Rubric:**
- Xác định đúng kết quả sơ cấp là nhóm không thứ tự và C(8,2)=28 — **1 điểm**.
- Đếm nhóm toàn đỏ C(3,2)=3, tính 3/28 — **1 điểm**.
- Chọn biến cố đối hai phiếu xanh với C(5,2)=10 — **1 điểm**.
- Tính 1−10/28=9/14 và diễn giải ít nhất một đỏ — **1 điểm**.

**Khi làm sai:** Nếu dùng 3 nhóm đỏ thuận lợi nhưng chia cho 56 cặp có thứ tự, em đã trộn hai cách đếm. Đếm nhất quán theo **nhóm không thứ tự** cho \(3/28\); nếu đếm theo **cặp có thứ tự**, phải dùng \(6/56\), vẫn bằng \(3/28\). Hãy xem lại mục Kiến thức 1.4 và Bài luyện 7 (mục Luyện tập 1.7 — Chọn nhóm không xét thứ tự). Với câu “ít nhất một đỏ”, biến cố đối là **cả hai phiếu xanh**, không phải “đúng một đỏ”; xem lại mục Kiến thức 1.3 và Bài luyện 8 (mục Luyện tập 1.8 — Ít nhất một và biến cố đối).

</details>

### 3.2. Hợp, giao và kiểm tra tính độc lập

<!-- ITEM_ID: THPT-TOP20-W02; ROLE: TOPIC_WRITTEN; PRIMARY_OUTCOME: TOP20-O14; CONTENT_VERSION: TOP20-R12; PUBLIC_SELF_SCORED_NO_MASTERY; NOT_PROTECTED_RD1 -->

**Bài luyện 19.** Một lần gieo xúc xắc cân đối. A={2,4,6}, B={2,3,5}. (a) Tìm giao và hợp. (b) Tính xác suất hợp bằng quy tắc cộng. (c) Hai biến cố có độc lập không?

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải:**

(a) Từ \(A=\{2,4,6\}\), \(B=\{2,3,5\}\), ta có \(A\cap B=\{2\}\) và \(A\cup B=\{2,3,4,5,6\}\).

(b) Trên sáu mặt xúc xắc đồng khả năng, \(P(A)=P(B)=3/6=1/2\), còn \(P(A\cap B)=1/6\). Áp dụng quy tắc cộng tổng quát: \(P(A\cup B)=\dfrac36+\dfrac36-\dfrac16=\dfrac56\).

(c) Để kiểm tra độc lập, không chỉ nhìn xem hai biến cố có giao hay không. Ta so sánh \(P(A\cap B)=1/6\) với \(P(A)P(B)=(1/2)(1/2)=1/4\). Vì \(1/6\ne1/4\), \(A\) và \(B\) **không độc lập**.

**Rubric:**
- Liệt kê giao {2} và hợp {2,3,4,5,6} — **1 điểm**.
- Tính đúng P(A)=P(B)=3/6 và P(A∩B)=1/6 — **1 điểm**.
- Áp dụng cộng tổng quát để được 5/6 — **1 điểm**.
- So 1/6 với 1/4, kết luận không độc lập và nêu lý do — **1 điểm**.

**Khi làm sai:** Nếu tính \(P(A\cup B)=1\), em đã quên trừ phần giao \(\{2\}\) được đếm hai lần. Hãy xem lại hình Venn ở mục Kiến thức 2.1 và làm lại Bài luyện 14 (mục Luyện tập 2.4 — Quy tắc cộng xác suất). Nếu kết luận hai biến cố độc lập chỉ vì chúng có kết quả chung, hãy kiểm lại \(P(A\cap B)=1/6\) và \(P(A)P(B)=1/4\): hai giá trị khác nhau. Xem thêm mục Kiến thức 2.2 và Bài luyện 13 (mục Luyện tập 2.3 — Phân biệt xung khắc và độc lập).

</details>

### 3.3. Ghép biến cố độc lập và xét phần bù

<!-- ITEM_ID: THPT-TOP20-W03; ROLE: TOPIC_WRITTEN; PRIMARY_OUTCOME: TOP20-O17; CONTENT_VERSION: TOP20-R12; PUBLIC_SELF_SCORED_NO_MASTERY; NOT_PROTECTED_RD1 -->

**Bài luyện 20.** Tung đồng xu cân đối và gieo một xúc xắc cân đối, hai phép thử độc lập. A: xu ngửa; B: xúc xắc lớn hơn 4. (a) Tính P(A∩B). (b) Tính P(A∪B). (c) Tính xác suất cả A và B đều không xảy ra.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải:**

Trước hết, đồng xu cân đối có xác suất ngửa \(P(A)=1/2\). Xúc xắc cân đối có hai mặt lớn hơn 4 là 5, 6, nên \(P(B)=2/6=1/3\).

(a) Hai phép thử độc lập và đề hỏi **cả A và B**, nên \(P(A\cap B)=P(A)P(B)=\dfrac12\cdot\dfrac13=\dfrac16\).

(b) Đề hỏi **A hoặc B**, tức hợp. Áp dụng quy tắc cộng và trừ phần giao: \(P(A\cup B)=\dfrac12+\dfrac13-\dfrac16=\dfrac23\).

(c) “Cả A và B đều không xảy ra” là biến cố đối của “ít nhất một trong hai xảy ra”, nên xác suất là \(1-P(A\cup B)=1-\dfrac23=\dfrac13\).

**Rubric:**
- Nhận đúng P(A)=1/2, P(B)=1/3 và tính độc lập — **1 điểm**.
- Tính giao bằng phép nhân là 1/6 — **1 điểm**.
- Tính hợp 1/2+1/3−1/6=2/3 — **1 điểm**.
- Lấy biến cố đối để được 1/3, giải thích cả hai đều không xảy ra — **1 điểm**.

**Khi làm sai:** Nếu câu (a) ra \(5/6\), em đã tính hợp thay cho giao. Với yêu cầu “cả A và B”, hãy xem lại phép nhân cho hai biến cố độc lập ở mục Kiến thức 2.4 và Bài luyện 16 (mục Luyện tập 2.6 — Quy tắc nhân cho hai phép thử độc lập). Nếu câu (b) ra \(1/6\), em mới tính giao, chưa tính hợp; trở lại quy tắc cộng ở mục Kiến thức 2.3 và Bài luyện 14 (mục Luyện tập 2.4 — Áp dụng quy tắc cộng xác suất). Nếu câu (c) ra \(2/3\), em quên lấy biến cố đối của hợp: “cả A và B đều không xảy ra” chính là phần còn lại sau “ít nhất một trong hai xảy ra”.

</details>

<!-- TOPIC20_APPROVED_SOURCE_END -->
<span data-topic-w1-source-end="luyen-tap" hidden></span>
<p class="topic-w1-end-nav"><a href="../../">← Tổng quan các Chuyên đề</a></p>
