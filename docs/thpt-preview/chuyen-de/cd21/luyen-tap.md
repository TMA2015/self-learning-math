---
hide:
  - toc
---

<div class="thpt-r4-screen topic-w1-release-nav" data-thpt-r4 data-topic-w1="21" data-topic-w1-part="luyen-tap">
<p class="thpt-r4-eyebrow">HỌC THEO CHUYÊN ĐỀ · CĐ21 · TOÁN THPT</p>
<nav class="thpt-sgk-lesson-nav" aria-label="Điều hướng Chuyên đề 21">
<a href="../../cd20/kien-thuc/">← Chuyên đề trước</a>
<a href="../../cd22/kien-thuc/">Chuyên đề sau →</a>
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

<!-- TOPIC21_APPROVED_SOURCE_START -->
<!-- Q18 SOURCE_LEARNER_BLOB e526468f2452221e08070fc96e3a64d42ad5c8f9; Q18_RECEIPT_BLOB b0ba354f6edd5c2477aa121457570119928ccef1; AUTHORING_PR #885; PUBLIC_PROJECTION_ONLY -->
<!-- W5_LINK_EQUIVALENT: NONE; canonical source immutable -->

# Luyện tập

Hãy xác định rõ biến cố đã biết, giải thích vì sao chọn công thức và trình bày từng bước. Em hãy giải trước, sau đó mới mở Lời giải để đối chiếu.

## 1. Xác suất có điều kiện và quy tắc nhân

### 1.1. Biết thêm thông tin là đổi nhóm đang xét

**Bài luyện 1.**

<!-- ITEM_ID: THPT-TOP21-P01; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP21-O01; CONTENT_VERSION: TOP21-R03; PUBLIC_FORMATIVE_NO_MASTERY -->
Trong 40 thẻ vật lí khác nhau được chọn đều có 12 thẻ hình tam giác, trong đó đúng 5 thẻ đỏ. Biết đã chọn thẻ tam giác, tính xác suất thẻ đỏ và giải thích mẫu số.

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Khi chưa biết gì thêm, phép thử có 40 thẻ vật lí đồng khả năng. Nhưng đề đã cho biết **thẻ được chọn mang hình tam giác**, nên chỉ xét 12 thẻ tam giác. Trong nhóm này có đúng 5 thẻ đỏ, vì vậy \(P(\text{đỏ}\mid\text{tam giác})=5/12\). Mẫu số 12 là số kết quả còn phù hợp với điều kiện, không phải 40 thẻ ban đầu.

**Khi làm sai:** Nếu ra 5/40, hãy hỏi lại: đề đã cho biết thẻ mang hình gì? Mọi kết quả không phải tam giác đã bị loại khỏi nhóm xét.

</details>



### 1.2. Từ vùng giao đến công thức xác suất có điều kiện

**Bài luyện 2.**

<!-- ITEM_ID: THPT-TOP21-P02; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP21-O02; CONTENT_VERSION: TOP21-R03; PUBLIC_FORMATIVE_NO_MASTERY -->
Chọn đều một số trong 1,…,12. A: chia hết cho 4. B: lớn hơn 6. Tính P(A|B).

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Gọi \(B\) là biến cố đã biết “số lớn hơn 6”; khi chọn đều trong 1–12, \(B=\{7,8,9,10,11,12\}\) gồm 6 số. Biến cố \(A\) “chia hết cho 4” có các kết quả 4, 8, 12; giao \(A\cap B=\{8,12\}\) gồm 2 số. Vì \(P(B)=6/12>0\), xác suất điều kiện là \(P(A\mid B)=n(A\cap B)/n(B)=2/6=1/3\). Chỉ có các phần tử của \(B\) được đưa vào mẫu số.

**Khi làm sai:** Nếu dùng 3/12, em đang tính P(A), không phải P(A|B). Hãy viết trọn tập B trước.

</details>



### 1.3. Quy tắc nhân tổng quát cho các lượt phụ thuộc

**Bài luyện 3.**

<!-- ITEM_ID: THPT-TOP21-P03; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP21-O03; CONTENT_VERSION: TOP21-R03; PUBLIC_FORMATIVE_NO_MASTERY -->
Hộp có 5 thẻ đỏ, 2 thẻ vàng. Rút đều ba thẻ liên tiếp không hoàn lại. Tính xác suất màu theo đúng thứ tự đỏ–vàng–đỏ.

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Vì **không hoàn lại**, ta phải cập nhật thành phần hộp sau mỗi lượt. Xác suất đỏ đầu tiên là \(5/7\); khi đỏ đã rút, hộp còn 4 đỏ và 2 vàng trong 6 thẻ, nên xác suất vàng thứ hai là \(2/6\). Sau hai lượt đỏ–vàng, hộp còn 4 đỏ trong 5 thẻ, nên xác suất đỏ ở lượt ba là \(4/5\). Theo quy tắc nhân theo các điều kiện liên tiếp, \(P(\text{đỏ–vàng–đỏ})=\dfrac57\cdot\dfrac26\cdot\dfrac45=\dfrac4{21}\). Không nhân ba xác suất dựa trên hộp ban đầu.

**Khi làm sai:** Nếu giữ 5/7 cho lượt thứ ba, em chưa cập nhật trạng thái túi; hãy ghi 'còn 6' rồi 'còn 5' trên các cạnh cây.

</details>



### 1.4. Khi nào xác suất có điều kiện không thay đổi?

**Bài luyện 4.**

<!-- ITEM_ID: THPT-TOP21-P04; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP21-O04; CONTENT_VERSION: TOP21-R03; PUBLIC_FORMATIVE_NO_MASTERY -->
Gieo một xúc xắc cân đối. A: mặt chẵn; B: mặt lớn hơn 3. Hai biến cố độc lập không?

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Với một xúc xắc cân đối, \(A=\{2,4,6\}\), \(B=\{4,5,6\}\). Ta có \(P(A)=P(B)=3/6=1/2\) nhưng \(A\cap B=\{4,6\}\), nên \(P(A\cap B)=2/6=1/3\). Để kiểm **độc lập**, cần so sánh xác suất giao với tích: \(P(A)P(B)=(1/2)(1/2)=1/4\). Vì \(1/3\ne1/4\), hai biến cố **không độc lập**. Cùng có xác suất 1/2 không đủ để kết luận độc lập.

**Khi làm sai:** Nếu coi độc lập vì cả hai đều xác suất 1/2, em chưa kiểm phần giao. Khoanh {4,6} trên Ω.

</details>



## 2. Xác suất toàn phần và Bayes

### 2.1. Xác suất toàn phần: cộng các đường đi đến cùng kết quả

**Bài luyện 5.**

<!-- ITEM_ID: THPT-TOP21-P05; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP21-O05; CONTENT_VERSION: TOP21-R03; PUBLIC_FORMATIVE_NO_MASTERY -->
Kho hàng nhập 2/5 kiện từ X với tỉ lệ hỏng 1/20 và 3/5 từ Y với tỉ lệ hỏng 1/10. Lấy ngẫu nhiên một kiện. Tính tỉ lệ hỏng chung.

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Một kiện hàng được chọn có thể đến từ **X hoặc Y**, hai nguồn rời nhau và chiếm toàn bộ kho. Xác suất đi theo đường “X rồi hỏng” là \((2/5)(1/20)=1/50\); đường “Y rồi hỏng” là \((3/5)(1/10)=3/50\). Hai đường không chồng nhau nên cộng lại: \(P(\text{hỏng})=1/50+3/50=4/50=2/25\). Không tính trung bình cộng đơn giản của hai tỉ lệ hỏng vì hai nguồn đóng góp lượng hàng khác nhau.

**Khi làm sai:** Nếu lấy trung bình cộng 1/20 và 1/10, em ngầm giả định hai nguồn 50%–50%; thực tế là 2/5 và 3/5.

</details>



### 2.2. Bayes: đi từ kết quả quan sát ngược về nguồn

**Bài luyện 6.**

<!-- ITEM_ID: THPT-TOP21-P06; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP21-O06; CONTENT_VERSION: TOP21-R03; PUBLIC_FORMATIVE_NO_MASTERY -->
Một lô gồm 1/4 sản phẩm từ H, 3/4 từ K. Xác suất mang nhãn xanh là 3/5 nếu từ H, 1/5 nếu từ K. Biết đã thấy nhãn xanh, tính xác suất sản phẩm thuộc H.

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Biết sản phẩm có **nhãn xanh**, ta phải xét tất cả nguồn có thể tạo ra nhãn xanh. Đường “H rồi xanh” có xác suất \(P(H\cap\text{xanh})=(1/4)(3/5)=3/20\). Đường “K rồi xanh” có xác suất \((3/4)(1/5)=3/20\). Xác suất thấy nhãn xanh từ hai nguồn là \(P(\text{xanh})=3/20+3/20=6/20\). Vì vậy xác suất sản phẩm thuộc H **khi đã thấy xanh** là \(P(H\mid\text{xanh})=(3/20)/(6/20)=1/2\). Số \(3/5\) là xác suất xanh khi biết H, tức câu hỏi ngược chiều.

**Khi làm sai:** Nếu viết 3/5, em đã đảo câu hỏi. Muốn biết nguồn sau khi thấy nhãn, mẫu số gồm các cách có nhãn xanh từ cả H và K.

</details>



## 3. Sơ đồ cây, tỉ lệ nền và tự luận tổng hợp

### 3.1. Đọc sơ đồ cây: nhân trên đường, cộng tại đích

**Bài luyện 7.**

<!-- ITEM_ID: THPT-TOP21-P07; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP21-O07; CONTENT_VERSION: TOP21-R03; PUBLIC_FORMATIVE_NO_MASTERY -->
Chọn tuyến R xác suất 2/5, xác suất thành công khi đi R là 3/4. Chọn tuyến S xác suất 3/5, xác suất thành công khi đi S là 1/2. Tính P(S và thất bại) và P(thành công).

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Cây có hai nhánh gốc: R xác suất \(2/5\) và S xác suất \(3/5\). Sau khi chọn S, xác suất thất bại là \(1-1/2=1/2\), nên đường **S rồi thất bại** có xác suất \((3/5)(1/2)=3/10\). Muốn tính xác suất thành công, cộng hai lá thành công rời nhau: R thành công \((2/5)(3/4)=3/10\), S thành công \((3/5)(1/2)=3/10\), nên \(P(\text{thành công})=3/5\). Hai lá thất bại còn lại có xác suất R thất bại \(1/10\) và S thất bại \(3/10\); cả bốn lá cộng thành 1.

**Khi làm sai:** Nếu ra 1/2 cho S và thất bại, em dùng xác suất thất bại có điều kiện mà quên xác suất chọn S. Đọc từ gốc đến lá.

</details>



### 3.2. Tỉ lệ nền và bẫy kết luận từ một dấu hiệu

**Bài luyện 8.**

<!-- ITEM_ID: THPT-TOP21-P08; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP21-O08; CONTENT_VERSION: TOP21-R03; PUBLIC_FORMATIVE_NO_MASTERY -->
Trong mô hình kiểm tra 1.000 sản phẩm có đúng 20 sản phẩm lỗi. Thiết bị phát hiện 80% sản phẩm lỗi và báo nhầm 5% của 980 sản phẩm tốt. Nếu máy báo lỗi, xác suất sản phẩm thực sự lỗi là bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Trong 1.000 sản phẩm, có 20 sản phẩm lỗi và 980 sản phẩm tốt. Máy phát hiện \(80\%\) trong 20 sản phẩm lỗi nên báo đúng \(20\cdot0{,}8=16\) sản phẩm; đồng thời báo nhầm \(5\%\) trong 980 sản phẩm tốt, tức \(980\cdot0{,}05=49\) sản phẩm. Khi máy đã báo lỗi, nhóm đang xét có \(16+49=65\) sản phẩm bị báo, nhưng chỉ 16 thật sự lỗi. Xác suất cần tìm là \(16/65\approx24{,}62\%\). Mẫu số là tổng **mọi trường hợp bị báo**, không phải số sản phẩm thật sự lỗi.

**Khi làm sai:** Nếu trả lời 80%, em chỉ nêu khả năng phát hiện khi đồ đã lỗi. Hãy đếm toàn bộ 65 lượt báo, gồm cả 49 lượt báo nhầm.

</details>


**Bài tự luận tổng hợp:** Hãy trình bày lời giải và giải thích ý nghĩa xác suất trước khi tự kiểm rubric.

### 3.3. Bảng hai chiều và xác suất có điều kiện

**Bài luyện 9.**

Một tập hợp 60 học sinh được chọn đều một học sinh: có 24 bạn thuộc câu lạc bộ C, trong đó 15 bạn đeo kính; trong 36 bạn không thuộc C có 18 bạn đeo kính. Hãy lập bảng 2×2, tính P(kính|C), P(C|kính), P(C∩kính) và giải thích vì sao hai xác suất có điều kiện không bằng nhau.

<!-- ITEM_ID: THPT-TOP21-W01; ROLE: TOPIC_WRITTEN; PRIMARY_OUTCOME: TOP21-O02; SECONDARY_OUTCOME: TOP21-O01; CONTENT_VERSION: TOP21-R06; PUBLIC_SELF_SCORED_NO_MASTERY -->
<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải:**

(a) Có 24 học sinh thuộc câu lạc bộ C, trong đó 15 đeo kính và \(24-15=9\) không kính. Ngoài C có 36 học sinh, trong đó 18 đeo kính và \(36-18=18\) không kính. Bảng hai chiều là:

| | Đeo kính | Không đeo kính | Tổng |
|---|---:|---:|---:|
| Thuộc C | 15 | 9 | 24 |
| Không thuộc C | 18 | 18 | 36 |
| Tổng | 33 | 27 | 60 |

(b) Khi **biết thuộc C**, ta chỉ xét 24 học sinh thuộc C; có 15 đeo kính nên \(P(\text{kính}\mid C)=15/24=5/8\).

(c) Khi **biết đeo kính**, nhóm xét gồm 33 học sinh đeo kính; 15 trong số đó thuộc C nên \(P(C\mid\text{kính})=15/33=5/11\).

(d) Trên toàn bộ 60 học sinh, giao “thuộc C và đeo kính” có 15 học sinh, nên \(P(C\cap\text{kính})=15/60=1/4\). Hai xác suất có điều kiện ở (b), (c) khác nhau vì **hai nhóm đã biết khác nhau**, dẫn tới mẫu số 24 và 33 khác nhau.

**Rubric:** Bảng đủ bốn ô và tổng=60 (1); đúng P(kính|C)=5/8 (1); đúng P(C|kính)=5/11 (1); đúng xác suất giao 1/4 và giải thích khác mẫu số (1).

**Khi làm sai:** Nếu đảo 5/8 và 5/11, hãy gạch dưới từ **“biết”**, xem lại Kiến thức 1.1–1.2 và làm lại Bài luyện 1–2 (Luyện tập 1.1–1.2).

</details>


### 3.4. Xác suất toàn phần và Bayes

**Bài luyện 10.**

Sản phẩm từ nguồn X chiếm 1/3, tỉ lệ lỗi 1/5; nguồn Y chiếm 2/3, tỉ lệ lỗi 1/10. Một sản phẩm được lấy ngẫu nhiên. (a) Vẽ hoặc mô tả bốn đường đi lỗi/không lỗi. (b) Tính P(lỗi). (c) Biết sản phẩm lỗi, tính P(X|lỗi).

<!-- ITEM_ID: THPT-TOP21-W02; ROLE: TOPIC_WRITTEN; PRIMARY_OUTCOME: TOP21-O06; SECONDARY_OUTCOME: TOP21-O05,TOP21-O07; CONTENT_VERSION: TOP21-R06; PUBLIC_SELF_SCORED_NO_MASTERY -->
<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải:**

(a) Vì hai nguồn X, Y phân chia toàn bộ sản phẩm, từ mỗi nguồn tách thành “lỗi” và “không lỗi”. Bốn lá có xác suất:
- X và lỗi: \((1/3)(1/5)=1/15\).
- X và không lỗi: \((1/3)(4/5)=4/15\).
- Y và lỗi: \((2/3)(1/10)=1/15\).
- Y và không lỗi: \((2/3)(9/10)=3/5\).

Tổng bốn lá bằng \(1/15+4/15+1/15+3/5=1\), nên không bỏ sót trường hợp.

(b) “Lỗi” xảy ra theo **hai đường rời nhau**: X–lỗi và Y–lỗi. Do đó \(P(\text{lỗi})=1/15+1/15=2/15\).

(c) Khi **biết đã lỗi**, chỉ còn hai lá lỗi; trong đó đường đến từ X có xác suất \(1/15\). Vì vậy \(P(X\mid\text{lỗi})=(1/15)/(2/15)=1/2\). Không dùng \(1/5\) vì đó là tỉ lệ lỗi **khi đã biết X**, trái chiều với câu hỏi.

**Rubric:** Nêu hai nhánh X,Y đầy đủ và các điều kiện (1); tính đúng bốn xác suất lá/tổng 1 (1); cộng phần lỗi được 2/15 (1); đảo điều kiện Bayes được 1/2 và diễn giải nhóm đã biết lỗi (1).

**Khi làm sai:** Nếu cho 1/5 ở (c), em vẫn đang trả lời lỗi khi X, không phải X khi lỗi; viết hai nhánh lỗi, ôn Kiến thức 2.1–2.2 rồi làm lại Bài luyện 5–6 (Luyện tập 2.1–2.2).

</details>


### 3.5. Tỉ lệ nền và phản biện kết luận

**Bài luyện 11.**

Trong một hệ thống giả định 10.000 hồ sơ có 1% hồ sơ thuộc nhóm H. Bộ lọc nhận ra 80% hồ sơ H và báo nhầm 5% hồ sơ không H. (a) Tính số lần báo đúng và báo nhầm. (b) Tính P(H|báo). (c) Phản biện nhận định “máy chính xác 80%, vậy 80% hồ sơ bị báo thuộc H”.

<!-- ITEM_ID: THPT-TOP21-W03; ROLE: TOPIC_WRITTEN; PRIMARY_OUTCOME: TOP21-O08; SECONDARY_OUTCOME: TOP21-O06; CONTENT_VERSION: TOP21-R06; PUBLIC_SELF_SCORED_NO_MASTERY -->
<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải:**

(a) Trong 10.000 hồ sơ, nhóm H chiếm \(1\%\) nên có 100 hồ sơ H và 9.900 hồ sơ không thuộc H. Bộ lọc nhận biết \(80\%\) của nhóm H, tức **80 hồ sơ báo đúng**; đồng thời báo nhầm \(5\%\) của 9.900 hồ sơ ngoài H, tức **495 hồ sơ báo nhầm**.

(b) Như vậy tổng số hồ sơ bị báo là \(80+495=575\), nhưng chỉ 80 thuộc H. Xác suất một hồ sơ thật sự thuộc H **khi đã bị báo** là \(P(H\mid\text{báo})=80/575=16/115\approx13{,}91\%\).

(c) Nhận định “80% hồ sơ bị báo thuộc H” là sai. **80%** ở đề bài là xác suất bộ lọc báo khi hồ sơ đã thuộc H, còn câu hỏi yêu cầu xác suất hồ sơ thuộc H khi đã bị báo. Nhóm không H đông gấp nhiều lần nên dù báo nhầm ở tỉ lệ 5%, vẫn tạo ra 495 lượt báo nhầm, nhiều hơn 80 lượt báo đúng.

**Rubric:** Phân nhóm nền 100/9.900 (1); báo đúng 80, báo nhầm 495 (1); P(H|báo)=16/115 (1); giải thích đảo điều kiện và tỷ lệ nền (1).

**Khi làm sai:** Nếu ra 80%, hãy lập bảng 2×2 rồi nhìn mẫu số là **tổng hồ sơ đã bị báo =575**, không phải tổng hồ sơ H=100; xem lại mục Kiến thức 3.2 (tỉ lệ nền) và Bài luyện 8 (Luyện tập 3.2).

</details>

<!-- TOPIC21_APPROVED_SOURCE_END -->
<span data-topic-w1-source-end="luyen-tap" hidden></span>
<p class="topic-w1-end-nav"><a href="../../">← Tổng quan các Chuyên đề</a></p>
