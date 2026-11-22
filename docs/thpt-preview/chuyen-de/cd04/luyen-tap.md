---
hide:
  - toc
---

<div class="thpt-r4-screen topic-w1-release-nav" data-thpt-r4 data-topic-w1="04" data-topic-w1-part="luyen-tap">
<p class="thpt-r4-eyebrow">HỌC THEO CHUYÊN ĐỀ · CĐ04 · TOÁN THPT</p>
<nav class="thpt-sgk-lesson-nav" aria-label="Điều hướng Chuyên đề 04">
<a href="../../cd03/kien-thuc/">← Chuyên đề trước</a>
<a href="../../cd05/kien-thuc/">Chuyên đề sau →</a>
<a href="../kien-thuc/">Kiến thức</a>
<a href="../tu-kiem-tra/">Tự kiểm tra</a>
</nav>
<p class="topic-w1-back"><a href="../../">← Tổng quan các Chuyên đề</a></p>


</div>
<link rel="stylesheet" href="../../../../assets/stylesheets/thpt-topic-w1-golden-v1.css">
<script src="../../../../assets/javascripts/thpt-topic-w1-golden-v1.js" defer></script>
<div class="topic-w1-boot-status" role="status" aria-live="polite">Đang chuẩn bị các nhóm luyện tập…</div>
<script>
(function(){
 var html=document.documentElement;html.classList.add("topic-w1-pending");
 document.addEventListener("DOMContentLoaded",function(){setTimeout(function(){
  if(!html.classList.contains("topic-w1-pending"))return;
  html.classList.remove("topic-w1-pending");html.classList.add("topic-w1-fallback");
  var status=document.querySelector(".topic-w1-boot-status");
  if(status)status.textContent="Giao diện tương tác chưa tải được. Nội dung gốc vẫn có thể đọc bên dưới.";
 },0)},{once:true});
})();
</script>

<span data-topic-w1-source-start="luyen-tap" hidden></span>

<!-- TOPIC04_APPROVED_SOURCE_START -->
<!-- Q18 SOURCE_LEARNER_BLOB 4e8238e188204eefc060f18c88ef7a0a3c51a60e; Q18_RECEIPT_BLOB eba1e820c2544b54e3ff09b0c37ed780e18c3dd5; AUTHORING_PR #890; PUBLIC_PROJECTION_ONLY -->

# Luyện tập

Hãy giải từng bài trước khi mở lời giải. Với lôgarit, ghi rõ điều kiện cơ số và đối số; với bất phương trình, giải thích vì sao đổi hoặc giữ chiều; với mô hình tăng trưởng, kiểm số kỳ nguyên. Nếu sai, quay lại mảng Kiến thức tương ứng rồi thử bài mới.

## 1. Lũy thừa, căn và số mũ thực

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B18-C01; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O01; NOT_NEW_BANK -->

**Bài 1.**

Tại sao (2/5)^(-2) không phải số âm? Tính giá trị.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 25/4.

Số mũ âm nói lấy nghịch đảo, không phải dấu âm trước lũy thừa: (2/5)^(-2)=(5/2)^2=25/4.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B18-C02; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O02; NOT_NEW_BANK -->

**Bài 2.**

Giải thích ý nghĩa của 81^(3/4) và tính kết quả.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 27.

Cơ số dương, căn bậc 4 của 81 bằng 3; lấy lũy thừa bậc 3 được 27.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B18-C03; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O01; NOT_NEW_BANK -->

**Bài 3.**

0^(-2) có nghĩa trong tập số thực không? Vì sao?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Không.

Nếu dùng quy tắc số mũ âm sẽ là 1/0², phép chia cho 0 không xác định.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B18-C04; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O03; NOT_NEW_BANK -->

**Bài 4.**

Một bạn nói: “2^(√2) không có nghĩa, vì √2 không thể đếm số lần nhân 2”. Em giải thích bạn đang hiểu sai điều gì và mô tả cách số này được hình thành.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 2^(√2) có nghĩa vì cơ số 2>0; số mũ thực không còn được hiểu là số lần nhân nguyên. Nó được định nghĩa bằng giới hạn của dãy giá trị 2^r khi các số hữu tỉ r tiến đến √2.

Các số mũ hữu tỉ gần √2 như 1,4;1,41;1,414,… đã có định nghĩa bằng căn/lũy thừa. Khi các giá trị 2^r tiến đến một số xác định không phụ thuộc dãy xấp xỉ, ta gọi đó là 2^(√2). Đây là mở rộng nhất quán của khái niệm, không phải “nhân số 2 √2 lần”.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B18-C05; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O02; NOT_NEW_BANK -->

**Bài 5.**

Phân biệt hai yêu cầu: tìm \(\sqrt{25}\) và giải \(x^2=25\). Nếu chuyển sang \(\sqrt[3]{-27}\), kết quả ra sao? Giải thích vai trò của căn bậc chẵn/lẻ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\sqrt{25}=5\) là căn không âm; phương trình \(x^2=25\) có hai nghiệm \(x=5\) và \(x=-5\); \(\sqrt[3]{-27}=-3\).

Ký hiệu căn bậc chẵn lấy giá trị không âm, còn phương trình \(x^2=25\) yêu cầu tìm **mọi** số bình phương bằng 25. Căn bậc lẻ của số âm tồn tại trong ℝ vì \((-3)^3=-27\). Không suy rộng cơ số âm sang mọi số mũ thực.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B18-P01; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O04; NOT_NEW_BANK -->

**Bài 6.**

Với a>0, rút gọn a^(-1/2)·a^(3/2).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** a.

Cộng các số mũ do cùng cơ số dương: a^((-1/2)+(3/2))=a^1=a.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B18-P02; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O02; NOT_NEW_BANK -->

**Bài 7.**

Tính 64^(-1/3).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 1/4.

Căn bậc ba của 64 là 4; số mũ âm lấy nghịch đảo.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B18-P03; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O02; NOT_NEW_BANK -->

**Bài 8.**

Tính 16^(3/4) theo căn bậc bốn.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 8.

Căn bậc 4 của 16 là 2, sau đó lấy 2³=8.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B18-P04; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O04; NOT_NEW_BANK -->

**Bài 9.**

Với a>0, rút gọn (a^(2/3))^(3/2).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** a.

Nhân số mũ 2/3·3/2=1 với cơ số dương để mọi phép tính hợp lệ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B18-P06; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O04; NOT_NEW_BANK -->

**Bài 10.**

Bạn viết 2²+2³=2⁵. Hãy nêu lỗi và kết quả đúng.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 12; quy tắc cộng số mũ không áp dụng cho tổng hai lũy thừa.

2²+2³=4+8=12; 2⁵=32 chỉ bằng 2²·2³.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B18-P07; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O01; NOT_NEW_BANK -->

**Bài 11.**

Viết \(0{,}0000075\) dưới dạng kí hiệu khoa học, rồi giải thích dấu của số mũ và vì sao không được viết \(75\times10^{-7}\) làm **dạng chuẩn** dù giá trị bằng nhau.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(7{,}5\times10^{-6}\). Biểu thức \(75\times10^{-7}\) cũng bằng cùng giá trị nhưng hệ số 75 không thuộc đoạn \([1,10)\) nên không phải dạng chuẩn.

Số rất nhỏ hơn 1 nên số mũ của 10 âm; chuyển dấu phẩy sáu chữ số để có phần hệ số 7,5, nhân \(10^{-6}\) để giữ đúng giá trị. Kí hiệu khoa học chuẩn có phần trị tuyệt đối hệ số từ 1 đến dưới 10.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B18-W01; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O04; NOT_NEW_BANK -->

**Bài 12.**

Với a>0: (a) rút gọn E=a^(3/2)·a^(−1/2)/a^(1/3); (b) tính 64^(2/3); (c) giải thích tại sao điều kiện a>0 được giữ trong E.

<details markdown="1"><summary>Lời giải và rubric</summary>

(a) E=a^(3/2−1/2−1/3)=a^(2/3); (b) ³√64=4, bình phương là 16; (c) cần a>0 để các lũy thừa có số mũ thực/hữu tỉ được dùng nhất quán và mẫu khác 0.

**Rubric 4 điểm:**

1. Kiểm đúng a>0 và nêu ý nghĩa hợp lệ phép chia — **1 điểm**.
2. Đưa E về một lũy thừa bằng cách cộng/trừ số mũ đúng — **1 điểm**.
3. Kết luận E=a^(2/3) không bỏ điều kiện — **1 điểm**.
4. Tính 64^(2/3)=16 và giải thích qua căn bậc ba — **1 điểm**.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-P01; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O01; NOT_NEW_BANK -->

**Bài 13.**

Giải thích tại sao 3^(-2)·9=1 nhưng 0^(-2) không xác định.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 3^(-2)·9=1; 0^(-2) không xác định.

3^(-2)=1/9 vì 3≠0; nhân 9 cho 1. Nếu thay cơ số bằng 0 thì số mũ −2 đòi lấy 1/0², là phép chia cho 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-P02; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O02; NOT_NEW_BANK -->

**Bài 14.**

Phân biệt ⁴√16 với nghiệm của x⁴=16; tính thêm ³√(−8).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** ⁴√16=2; x⁴=16 có x=±2; ³√(−8)=−2.

Căn số học bậc chẵn chỉ nhận giá trị không âm; phương trình bậc chẵn có thể có hai nghiệm đối nhau. Căn bậc lẻ của số âm có nghĩa vì (−2)³=−8.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-P03; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O03; NOT_NEW_BANK -->

**Bài 15.**

So sánh 2^(√2) và 2^(3/2) mà không dùng máy tính; nêu điều kiện cơ số.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 2^(√2) &lt; 2^(3/2).

√2&lt;3/2 vì 2&lt;9/4, và y=2^x tăng nghiêm ngặt. Cơ số 2>0 nên lũy thừa với số mũ vô tỉ xác định.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-P04; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O03; NOT_NEW_BANK -->

**Bài 16.**

So sánh (1/2)^(√3) với (1/2)^2, giải thích dấu so sánh.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** (1/2)^(√3) > (1/2)^2.

√3&lt;2, nhưng cơ số 1/2 nằm giữa 0 và 1 nên hàm lũy thừa theo số mũ giảm: số mũ nhỏ cho giá trị lớn. Không được dùng quy tắc so sánh cơ số >1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-P05; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O04; NOT_NEW_BANK -->

**Bài 17.**

Với a>0, rút gọn E=a^(3/4)·a^(−1/4)/√a. Điều kiện nào bảo đảm phép tính có nghĩa?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** E=1 với a>0.

√a=a^(1/2)>0 vì a>0. E=a^(3/4−1/4−1/2)=a^0=1. Với a=0 phép chia cho √a không xác định; với a âm không dùng nhất quán mũ thực theo định nghĩa SGK.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-W01; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O04; NOT_NEW_BANK -->

**Bài 18.**

Với a>0, đặt E=a^(3/4)·a^(−5/4)/a^(−1/2). (a) Rút gọn E và giải thích tại sao phải giữ a>0. (b) Viết 0,0000075 dưới dạng kí hiệu khoa học chuẩn. (c) Vì sao 75·10^(−7) không là dạng chuẩn mặc dù bằng cùng số?

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** E=1 (a>0); 0,0000075=7,5·10^(−6); 75·10^(−7) bằng cùng giá trị nhưng hệ số không thuộc [1,10).

Vì a>0 nên mọi lũy thừa thực và phép chia đều có nghĩa; E=a^(3/4−5/4+1/2)=a^0=1. Số 0,0000075=7,5·10^(−6). Kí hiệu khoa học chuẩn yêu cầu 1≤|k|&lt;10, nên hệ số 75 của 75·10^(−7) là sai **dạng chuẩn**, không sai giá trị.

**Rubric tự đối chiếu:**

7 điểm: nhận diện điều kiện a>0 và mẫu không bằng 0 (1đ); cộng/trừ đúng ba số mũ (2đ); kết luận E=1 (1đ); viết 7,5·10^(−6) (2đ); phân biệt đúng giá trị và dạng chuẩn của 75·10^(−7) (1đ).

</details>

## 2. Lôgarit và phép đổi cơ số

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B19-C01; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O05; NOT_NEW_BANK -->

**Bài 19.**

log₅125 là số nào và vì sao?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 3.

5³=125, logarit là số mũ cần tìm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B19-C02; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O05; NOT_NEW_BANK -->

**Bài 20.**

Giải thích log₂(1/8)=-3 bằng lũy thừa.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** −3.

2^(−3)=1/8. Giá trị logarit có thể âm dù đối số phải dương.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B19-C03; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O06; NOT_NEW_BANK -->

**Bài 21.**

log₂(−4) có nghĩa trong ℝ không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Không.

Với cơ số 2>0, 2^x luôn dương nên không thể bằng −4.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B19-P01; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O07; NOT_NEW_BANK -->

**Bài 22.**

Tính log₃(81/3), chỉ rõ điều kiện dùng quy tắc thương.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 3.

81/3=27 và log₃27=3; hoặc log₃81−log₃3=4−1=3, các đối số đều dương.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B19-P02; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O07; NOT_NEW_BANK -->

**Bài 23.**

Tính log₂8+log₂4 và diễn giải bằng quy tắc tích.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 5.

log₂8=3, log₂4=2; tổng là log₂(8·4)=log₂32=5.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B19-P03; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O05; NOT_NEW_BANK -->

**Bài 24.**

Tính log₄64 và log₄(√4).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 3 và 1/2.

4³=64 và 4^(1/2)=√4=2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B19-P04; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O06; NOT_NEW_BANK -->

**Bài 25.**

Tìm điều kiện xác định của log₂((x−1)(x+2)); có luôn tách thành tổng hai log không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x&lt;−2 hoặc x>1; không tách được trên toàn miền.

Tích dương khi hai thừa số cùng dấu. Trên x&lt;−2, từng thừa số âm nên hai log riêng không có nghĩa.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B19-P05; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O08; NOT_NEW_BANK -->

**Bài 26.**

Viết log₂7 theo lôgarit tự nhiên và nêu điều kiện cơ số.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** ln7/ln2.

Đổi cơ số: log₂7=(ln7)/(ln2); 2>0,2≠1,7>0 và ln2≠0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B19-W01; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O06; NOT_NEW_BANK -->

**Bài 27.**

Giải phương trình log₂(x−1)+log₂(x+1)=3. Viết rõ miền xác định, vì sao được gộp log, các nghiệm đại số và nghiệm nhận.

<details markdown="1"><summary>Lời giải và rubric</summary>

Điều kiện x−1>0 và x+1>0, tức x>1. Quy tắc tổng cho log₂((x−1)(x+1))=3, suy ra x²−1=8 ⇒ x=±3; chỉ x=3 thỏa x>1.

**Rubric 4 điểm:**

1. Tìm đúng điều kiện x>1 trước biến đổi — **1 điểm**.
2. Chỉ ra vì sao phép gộp log hợp lệ khi hai đối số dương — **1 điểm**.
3. Suy ra x²=9 và xét x=±3 — **1 điểm**.
4. Loại −3, chốt x=3 và thế kiểm tra — **1 điểm**.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B19-W02-ANCHOR; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O07; NOT_NEW_BANK -->

**Bài 28.**

(a) Tính A=log₃81−2log₃3. (b) Tìm miền xác định của log₂((x−2)(x+3)) và giải thích vì sao tách thành log₂(x−2)+log₂(x+3) chỉ đúng trên một phần miền.

<details markdown="1"><summary>Lời giải và rubric</summary>

(a) A=4−2=2. (b) (x−2)(x+3)>0 ⇔ x&lt;−3 hoặc x>2. Trên x>2 cả hai thừa số dương nên tách hợp lệ. Trên x&lt;−3 cả hai thừa số âm, log riêng không xác định dù log tích có nghĩa.

**Rubric 4 điểm:**

1. Tính đúng A=2 — **1 điểm**.
2. Giải đúng bất phương trình tích, được hai khoảng — **1 điểm**.
3. Chỉ ra trên x>2 tách log hợp lệ — **1 điểm**.
4. Giải thích trên x&lt;−3 không thể tách log vì đối số âm — **1 điểm**.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-P06; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O05; NOT_NEW_BANK -->

**Bài 29.**

Tính log₄(1/8) và giải thích số âm xuất hiện ở đâu.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** log₄(1/8)=−3/2.

4^(−3/2)=1/(√4)^3=1/8. Logarit là số mũ cần đặt lên cơ số 4 để nhận 1/8, không phải đối số âm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-P07; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O06; NOT_NEW_BANK -->

**Bài 30.**

Tìm miền xác định của log₃[(x−1)(x−4)]. Ở miền nào có thể tách thành log₃(x−1)+log₃(x−4)?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Miền x&lt;1 hoặc x>4; chỉ tách thành tổng log thực khi x>4.

Điều kiện (x−1)(x−4)>0 ⇒ x&lt;1 hoặc x>4. Để tách, **từng** đối số x−1 và x−4 phải dương ⇒ x>4; x&lt;1 cho tích dương nhưng hai thừa số âm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-P08; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O06; NOT_NEW_BANK -->

**Bài 31.**

Tìm miền của log₂(x²−9), rồi xét tính hợp lệ của log₂(x−3)+log₂(x+3) trên toàn miền đó.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** TXĐ x&lt;−3 hoặc x>3; tách thành tổng log thực chỉ trên x>3.

x²−9=(x−3)(x+3)>0 khi |x|>3. Muốn log của từng thừa số có nghĩa phải có x−3>0 và x+3>0 ⇒ x>3.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-P09; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O07; NOT_NEW_BANK -->

**Bài 32.**

Tính log₂24−log₂3. Vì sao không cần tính riêng hai số thập phân?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 3.

Hai đối số 24,3 đều dương. Quy tắc log thương cho log₂(24/3)=log₂8=3 vì 2³=8. Quy tắc chỉ hợp khi cả hai log được xác định.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-P10; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O08; NOT_NEW_BANK -->

**Bài 33.**

Tính log₄8 bằng hai cách: tìm số mũ và đổi cơ số log₂.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 3/2.

4^(3/2)=(√4)^3=8. Mặt khác log₄8=log₂8/log₂4=3/2, mẫu ≠0 do cơ số 4≠1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-P11; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O08; NOT_NEW_BANK -->

**Bài 34.**

Tính log_(1/9)3. Giá trị này dương hay âm?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** −1/2.

(1/9)^(−1/2)=1/√(1/9)=3; do cơ số 1/9&lt;1, số mũ âm có thể cho giá trị >1. Cơ số vẫn hợp lệ vì >0, ≠1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-W02; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O08; NOT_NEW_BANK -->

**Bài 35.**

Đặt L=log₄8+log_(1/2)4−log₉3. (a) Tính L chính xác bằng cách đổi cơ số/nhận diện lũy thừa. (b) Nêu các điều kiện để log_a b tồn tại trên ℝ và giải thích log₄(−8) không có nghĩa.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** L=−1. Điều kiện a>0, a≠1, b>0; log₄(−8) không tồn tại trên ℝ.

log₄8=3/2 vì 4^(3/2)=8; log_(1/2)4=−2 vì (1/2)^(−2)=4; log₉3=1/2 vì 9^(1/2)=3. Tổng L=3/2−2−1/2=−1. Với log_a b thực, cơ số a>0 và a≠1, đối số b>0; đối số −8 sai điều kiện.

**Rubric tự đối chiếu:**

7 điểm: viết điều kiện cơ số/đối số (1đ); tính đúng log₄8 (1đ), log_(1/2)4 (1đ), log₉3 (1đ); tổng L=−1 (1đ); giải thích một cách đổi cơ số hợp lệ (1đ); giải thích log₄(−8) vô nghĩa (1đ).

</details>

## 3. Hàm mũ, hàm lôgarit và đồ thị

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B20-C01; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O09; NOT_NEW_BANK -->

**Bài 36.**

Hàm f(x)=5^x có TXĐ, tập giá trị và điểm cắt trục tung là gì?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** TXĐ ℝ; tập giá trị (0,+∞); đi qua (0,1).

Số mũ x được nhận mọi số thực; 5^x luôn dương; f(0)=1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B20-C02; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O10; NOT_NEW_BANK -->

**Bài 37.**

Hàm (1/5)^x đồng biến hay nghịch biến và tại sao?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Nghịch biến trên ℝ.

Mỗi khi x tăng 1, giá trị hàm nhân 1/5, tức giảm; 0&lt;1/5&lt;1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B20-C03; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O11; NOT_NEW_BANK -->

**Bài 38.**

Hàm g(x)=log₃(x−2) xác định khi nào?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x>2.

Đối số của logarit phải dương: x−2>0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B20-C04; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O12; NOT_NEW_BANK -->

**Bài 39.**

Nếu y=3^x đi qua (3,27), đồ thị y=log₃x có điểm nào tương ứng?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** (27,3).

Hai hàm ngược nhau, hoán đổi tọa độ x và y.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B20-P01; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O11; NOT_NEW_BANK -->

**Bài 40.**

Tìm x>0 sao cho log₂x=−1.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x=1/2.

Chuyển về lũy thừa x=2^(−1)=1/2 >0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B20-P02; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O10; NOT_NEW_BANK -->

**Bài 41.**

So sánh 3^(1/2) và 3^1 mà không dùng máy tính.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 3^(1/2)&lt;3.

Hàm 3^x tăng vì 3>1; số mũ 1/2&lt;1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B20-P03; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O11; NOT_NEW_BANK -->

**Bài 42.**

Tính log_(1/2)2 và giải thích dấu.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** −1.

(1/2)^(−1)=2, nên log_(1/2)2=−1. Cơ số thuộc (0,1) hợp lệ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B20-P04; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O12; NOT_NEW_BANK -->

**Bài 43.**

Mô hình N(t)=20·(3/2)^t, t≥0 (kỳ). Tính N(2) và giải thích tại sao theo t tăng thì N tăng.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 45; N tăng vì cơ số 3/2>1.

20·(3/2)²=45; mỗi kỳ lượng tăng theo hệ số 1,5 của kỳ trước (mô hình lý tưởng).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B20-W01; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O12; NOT_NEW_BANK -->

**Bài 44.**

Lập bảng ba điểm của f(x)=2^x ứng với x=0,1,2 và ba điểm tương ứng của g(x)=log₂x; nêu TXĐ/TGT, sự đối xứng đồ thị và cách đọc ý nghĩa hai hàm.

<details markdown="1"><summary>Lời giải và rubric</summary>

f có (0,1),(1,2),(2,4); g có (1,0),(2,1),(4,2). f: TXĐ ℝ, TGT (0,+∞); g: TXĐ (0,+∞), TGT ℝ. Mỗi điểm (x,y) hoán đổi thành (y,x) khi lấy hàm ngược, nên đồ thị đối xứng qua y=x.

**Rubric 4 điểm:**

1. Lập đúng ba tọa độ của f — **1 điểm**.
2. Lập đúng ba tọa độ của g — **1 điểm**.
3. Nêu đủ TXĐ/TGT mỗi hàm — **1 điểm**.
4. Giải thích ngược nhau/đối xứng qua y=x bằng hoán đổi vai trò — **1 điểm**.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B20-W02-ANCHOR; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O12; NOT_NEW_BANK -->

**Bài 45.**

Một mẫu giảm còn một nửa sau mỗi kỳ: N(t)=80(1/2)^t với t≥0. (a) Tính N(3); (b) tìm t để N(t)=5; (c) giải thích ý nghĩa logarit và lý do hàm giảm.

<details markdown="1"><summary>Lời giải và rubric</summary>

N(3)=80/8=10. N(t)=5 ⇒ (1/2)^t=1/16=(1/2)^4 ⇒ t=4; hoặc t=log_(1/2)(1/16)=4. Vì cơ số giữa 0 và 1, mỗi kỳ nhân một số nhỏ hơn 1 nên hàm giảm. Mô hình lý tưởng liên tục nếu t được cho phép thực.

**Rubric 4 điểm:**

1. Tính N(3)=10 kèm đơn vị mô hình — **1 điểm**.
2. Lập đúng phương trình N(t)=5 và tìm t=4 — **1 điểm**.
3. Giải thích log là số mũ cần tìm — **1 điểm**.
4. Nêu cơ số 1/2 làm hàm giảm và phạm vi t≥0 — **1 điểm**.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-P12; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O09; NOT_NEW_BANK -->

**Bài 46.**

Cho f(x)=(1/3)^x. Nêu tập xác định, tập giá trị và tính f(0), f(−1).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** D=ℝ, T=(0,+∞), f(0)=1, f(−1)=3.

Với cơ số 1/3>0 khác 1, hàm mũ xác định mọi x thực, luôn dương. (1/3)^0=1, (1/3)^(−1)=3; không có nghiệm f(x)=0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-P13; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O09; NOT_NEW_BANK -->

**Bài 47.**

Hàm y=2^x có thể cắt trục hoành không? Khi x→−∞ thì y tiến về số nào?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Không cắt Ox; y>0 mọi x và tiến về 0 từ phía dương khi x→−∞.

Mọi lũy thừa thực của cơ số 2>0 đều dương, nên không có nghiệm 2^x=0. Nếu x giảm không giới hạn, 2^x=1/2^(−x) tiến về 0 nhưng không bằng 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-P14; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O10; NOT_NEW_BANK -->

**Bài 48.**

Sắp xếp theo thứ tự giảm dần các giá trị (1/5)^(−1), (1/5)^0 và (1/5)^2.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 5 > 1 > 1/25, tương ứng các số mũ −1,0,2.

Với 0&lt;a=1/5&lt;1, a^x nghịch biến. Tính trực tiếp: a^(−1)=5, a^0=1, a²=1/25.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-P15; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O11; NOT_NEW_BANK -->

**Bài 49.**

Cho g(x)=log_(1/2)x. Nêu miền, tính g(1/4), g(4) và nhận xét biến thiên.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** D=(0,+∞), g(1/4)=2, g(4)=−2, hàm nghịch biến.

(1/2)^2=1/4 và (1/2)^(−2)=4. Cơ số nằm giữa 0 và 1 nên logarit giảm; trục Oy (x=0) là tiệm cận đứng, không có log cho x≤0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-P16; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O12; NOT_NEW_BANK -->

**Bài 50.**

Với f(x)=2^x, g(x)=log₂x, tìm điểm tương ứng trên g nếu (−1;1/2) nằm trên f; nói rõ miền của g(f(x)) và f(g(x)).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Điểm (1/2;−1). g(f(x))=x với mọi x∈ℝ; f(g(x))=x chỉ khi x>0.

Hai hàm ngược nhau nên tọa độ đổi chỗ qua y=x. f(x)>0 với mọi x nên g(f(x)) có nghĩa; g(x) chỉ tồn tại x>0, do đó f(g(x)) chỉ xét x>0.

</details>

## 4. Phương trình và bất phương trình

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B21-C01; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O13; NOT_NEW_BANK -->

**Bài 51.**

Giải 2^(x+1)=16.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x=3.

16=2⁴, hàm 2^t đơn ánh nên x+1=4.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B21-C02; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O14; NOT_NEW_BANK -->

**Bài 52.**

Giải log₃(x−2)=2 kèm điều kiện xác định.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x=11.

Điều kiện x>2; x−2=3²=9 ⇒ x=11, hợp lệ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B21-C03; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O15; NOT_NEW_BANK -->

**Bài 53.**

Giải (1/2)^x>(1/2)^2.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x&lt;2.

Hàm cơ số 1/2 nghịch biến: đảo chiều khi so sánh số mũ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B21-C04; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O16; NOT_NEW_BANK -->

**Bài 54.**

Giải log₂(x−1)≥log₂3.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x≥4.

Điều kiện x>1; cơ số 2>1 tăng, suy ra x−1≥3 ⇒ x≥4.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B21-P01; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O13; NOT_NEW_BANK -->

**Bài 55.**

Giải 5^(2x−1)=1/25.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x=−1/2.

1/25=5^(−2), nên 2x−1=−2 ⇒ x=−1/2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B21-P02; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O14; NOT_NEW_BANK -->

**Bài 56.**

Giải log_(1/2)(x+2)=−2.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x=2.

x+2>0; x+2=(1/2)^(−2)=4 ⇒ x=2 hợp lệ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B21-P03; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O15; NOT_NEW_BANK -->

**Bài 57.**

Giải (1/3)^(2x−1)≤(1/3)^3.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x≥2.

Vì 0&lt;1/3&lt;1, đảo chiều số mũ: 2x−1≥3 ⇒ x≥2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B21-P04; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O16; NOT_NEW_BANK -->

**Bài 58.**

Giải log_(1/4)(x−1)>log_(1/4)4.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 1&lt;x&lt;5.

Điều kiện x>1; hàm log cơ số 1/4 giảm, nên 0&lt;x−1&lt;4 ⇒ 1&lt;x&lt;5.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B21-P07; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O13; NOT_NEW_BANK -->

**Bài 59.**

Phương trình 2^x=−1 có nghiệm thực không? Vì sao?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Không có.

2^x>0 với mọi x thực; không thể bằng −1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-P17; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O13; NOT_NEW_BANK -->

**Bài 60.**

Giải 9^x−4·3^x+3=0 trong ℝ bằng đặt ẩn t=3^x>0; ghi rõ vì sao không thể nhận t≤0.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S={0,1}.

9^x=(3^x)². Đặt t=3^x>0, phương trình t²−4t+3=(t−1)(t−3)=0. Hai t=1,3 đều dương, tương ứng x=0,1. Đây là kỹ thuật vận dụng mở rộng CĐ04, không mạo nhận là phương pháp đã giải thích trong SGK B21 cũ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-P18; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O14; NOT_NEW_BANK -->

**Bài 61.**

Giải log₂(x−1)+log₂(x−3)=3, ghi điều kiện và nghiệm bị loại.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S={5}.

ĐK x−1>0 và x−3>0 ⇒ x>3. Gộp log: (x−1)(x−3)=2³=8 ⇒ x²−4x−5=(x−5)(x+1)=0. Ứng viên 5,−1; chỉ 5 hợp miền. Thử log₂4+log₂2=3.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-P19; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O15; NOT_NEW_BANK -->

**Bài 62.**

Giải (1/3)^(2x−1) ≥ (1/3)^(x+2) trên ℝ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S=(−∞,3].

Vì 0&lt;1/3&lt;1, hàm mũ nghịch biến; bất phương trình tương đương 2x−1≤x+2 ⇒ x≤3. x=3 cho dấu bằng nên lấy mốc.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-P20; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O16; NOT_NEW_BANK -->

**Bài 63.**

Giải log_(1/2)(x−1) ≤ log_(1/2)(5−x) trong ℝ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S=[3,5).

Điều kiện x−1>0 và 5−x>0 ⇒ 1&lt;x&lt;5. Cơ số 1/2 làm log giảm, nên x−1≥5−x ⇒ x≥3. Lấy giao với miền: [3,5), 5 bị loại vì log 0 vô nghĩa.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-W03; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O14; NOT_NEW_BANK -->

**Bài 64.**

Giải trong ℝ: log₂(x−2)+log₂(x+2)=3. Trình bày miền xác định trước khi gộp log; nêu mọi nghiệm đại số và lí do giữ/loại.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** S={2√3}.

Điều kiện x−2>0 và x+2>0 ⇒ x>2. Gộp log₂[(x−2)(x+2)]=3 ⇔ x²−4=8 ⇔ x²=12, được x=±2√3. Vì 2√3>2 còn −2√3&lt;2, chỉ nhận 2√3. Thử (2√3−2)(2√3+2)=8 ⇒ tổng log=3.

**Rubric tự đối chiếu:**

7 điểm: xác định cả hai đối số dương và x>2 (2đ); gộp log có điều kiện (1đ); giải được hai nghiệm đại số (2đ); loại nghiệm âm đúng (1đ); thử lại và kết luận tập nghiệm (1đ).

</details>

## 5. Tăng trưởng theo kỳ và bài toán tổng hợp

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B18-P05; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O17; NOT_NEW_BANK -->

**Bài 65.**

Vốn 400 triệu tăng 5% mỗi năm, lãi nhập gốc. Sau 2 năm có bao nhiêu triệu đồng (bỏ qua phí)?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 441 triệu đồng.

400·1,05²=441. Năm thứ hai tính lãi trên số vốn đã tăng sau năm đầu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B19-P06; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O17; NOT_NEW_BANK -->

**Bài 66.**

50 đơn vị tăng gấp đôi mỗi kỳ. Sau bao nhiêu kỳ (cho phép thời gian thực) thì đạt 800 đơn vị?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 4 kỳ.

50·2^t=800 ⇒ 2^t=16 ⇒ t=log₂16=4; t≥0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B21-P05; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O18; NOT_NEW_BANK -->

**Bài 67.**

Giải log₃(x−4)=log₃(2−x) trên ℝ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Vô nghiệm.

Điều kiện x−4>0 tức x>4 và 2−x>0 tức x&lt;2 đồng thời; bất khả. Không giải x−4=2−x rồi nhận x=3.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B21-P06; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O17; NOT_NEW_BANK -->

**Bài 68.**

Vốn 100 triệu tăng 10% cuối mỗi năm; n nguyên không âm. Năm đầu tiên vốn **vượt** 121 triệu là năm nào?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Cuối năm 3.

100·1,1²=121 nên năm 2 mới bằng, chưa vượt; n>2 ⇒ n nguyên đầu tiên bằng 3.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B21-P08; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O18; NOT_NEW_BANK -->

**Bài 69.**

Một bạn phát biểu: “log₂(2^x)=2x và y=log₂x xác định với mọi x thực vì hàm y=2^x có TXĐ ℝ”. Hãy tìm và sửa **hai lỗi khái niệm**, sau đó giải thích hàm nào thực hiện phép ngược của hàm nào.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** log₂(2^x)=x với mọi x thực, không phải 2x. Hàm y=log₂x chỉ xác định với x>0. Hai hàm y=2^x và y=log₂x là hai hàm ngược: đầu ra của hàm mũ là đầu vào hợp lệ của hàm logarit.

Logarit trả lại **số mũ** đã tạo ra kết quả, không nhân cơ số với số mũ. Hàm 2^x nhận mọi x thực nhưng **cho ra số dương**; chính tập giá trị (0,+∞) đó trở thành TXĐ của hàm ngược log₂x. Nhầm TXĐ của hàm gốc với TXĐ của hàm ngược là lỗi bản chất.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B18-W02-ANCHOR; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O17; NOT_NEW_BANK -->

**Bài 70.**

Vốn 200 triệu đồng gửi lãi gộp 8%/năm, không có phí và rút cuối năm thứ 3. (a) Lập công thức P(n); (b) tính P(3); (c) so với mô hình lãi đơn 8%/năm; (d) giải thích bản chất khác biệt.

<details markdown="1"><summary>Lời giải và rubric</summary>

P(n)=200(1,08)^n triệu; P(3)=200·1,259712=251,9424 triệu. Lãi đơn sau 3 năm 200(1+0,08·3)=248 triệu. Chênh 3,9424 triệu. Khác biệt do lãi gộp trên cả phần lãi đã sinh từ các năm trước.

**Rubric 4 điểm:**

1. Xác định đúng tỉ lệ nhân 1,08 và công thức lãi kép — **1 điểm**.
2. Tính P(3)=251,9424 triệu kèm đơn vị — **1 điểm**.
3. Tính đúng vốn lãi đơn 248 triệu, chênh 3,9424 — **1 điểm**.
4. Giải thích cơ chế nhập lãi, phạm vi mô hình không phí — **1 điểm**.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B21-W01; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O18; NOT_NEW_BANK -->

**Bài 71.**

(a) Giải log₂(x−1)=log₂(7−x); (b) giải log_(1/2)(x+1)≥log_(1/2)4; kiểm điều kiện log ở cả hai ý.

<details markdown="1"><summary>Lời giải và rubric</summary>

(a) Điều kiện x>1, x&lt;7; x−1=7−x ⇒ x=4 hợp lệ. (b) Điều kiện x+1>0 ⇒ x>−1. Do log cơ số 1/2 nghịch biến, x+1≤4 ⇒ x≤3, kết hợp −1&lt;x≤3.

**Rubric 4 điểm:**

1. Viết đủ miền (1,7) ý a, tìm nghiệm x=4 — **1 điểm**.
2. Kiểm x=4 hợp lệ và giải thích tính đơn ánh — **1 điểm**.
3. Viết điều kiện x>−1 và lý do đảo chiều ý b — **1 điểm**.
4. Kết luận −1&lt;x≤3 không lấy x=−1 — **1 điểm**.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVI-B21-W02-ANCHOR; ORIGINAL_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872; OUTCOME: TOP04-O17; NOT_NEW_BANK -->

**Bài 72.**

Mô hình P(n)=60(1,2)^n triệu đồng, n nguyên không âm. (a) Năm đầu tiên đạt ít nhất 103,68 triệu? (b) năm đầu tiên **vượt** 103,68 triệu? (c) giải thích sự khác biệt ≥ và > ở mốc n nguyên.

<details markdown="1"><summary>Lời giải và rubric</summary>

1,2³=1,728 nên P(3)=103,68. Do cơ số >1, P(n) tăng; lần đầu đạt mức ≥ là n=3, lần đầu vượt nghiêm ngặt là n=4. n chỉ nhận 0,1,2,… nên không chọn số thực tùy ý để làm kết luận thời điểm cuối năm.

**Rubric 4 điểm:**

1. Thiết lập đúng bất đẳng thức với ngưỡng 103,68 — **1 điểm**.
2. Tính đúng 1,2³=1,728 và P(3)=103,68 — **1 điểm**.
3. Kết luận lần đầu ≥ ở n=3 và > ở n=4 — **1 điểm**.
4. Giải thích cơ số tăng, dấu chặt và n nguyên không âm — **1 điểm**.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-P21; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O17; NOT_NEW_BANK -->

**Bài 73.**

Một quần thể giả định có 500 cá thể và giảm 20% sau mỗi chu kỳ, không có sinh nhập cư. Mô hình N(n)=500·0,8^n. Tính N(3) và diễn giải phạm vi mô hình.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** N(3)=256 cá thể **theo mô hình giảm cố định 20% mỗi chu kỳ**; đây là kết quả của công thức đã cho, không phải một kỳ vọng xác suất. Số lượng ngoài thực tế có thể khác khi các giả thiết của mô hình không còn đúng.

Mỗi chu kỳ nhân 1−0,2=0,8; ba chu kỳ 500·(4/5)³=500·64/125=256. Mô hình nhân cố định chỉ là giả thiết, không tính các biến cố ngẫu nhiên.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-P22; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O18; NOT_NEW_BANK -->

**Bài 74.**

Giải log₂(x²−1)=log₂(3x+3), bắt buộc ghi miền hai đối số trước khi biến đổi.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S={4}.

ĐK x²−1>0 (x&lt;−1 hoặc x>1) và 3x+3>0 (x>−1), giao là x>1. Vì log₂ đơn ánh, x²−1=3x+3 ⇒ x²−3x−4=(x−4)(x+1)=0. Chỉ x=4 hợp miền, kiểm log₂15=log₂15.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP04-W04; ORIGINAL_BLOB: 377de2e2e9fb6771f02270e8d85e950559669895; OUTCOME: TOP04-O17; NOT_NEW_BANK -->

**Bài 75.**

Một khoản vốn giả định 100 triệu đồng tăng 8% mỗi năm, nhập lãi vào gốc, không phí, n là số năm nguyên không âm. Tìm năm đầu tiên số tiền **lớn hơn** 125 triệu đồng. Giải thích vì sao phải kiểm hai năm liên tiếp.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** Năm đầu tiên là n=3; n=2 có 116,64 triệu, n=3 có 125,9712 triệu.

P(n)=100·(1,08)^n triệu. Cần (1,08)^n>1,25 ⇒ n>ln(1,25)/ln(1,08)≈2,8994 vì ln(1,08)>0. Do n nguyên không âm, nhỏ nhất n=3. Kiểm P(2)=100·1,1664=116,64&lt;125, P(3)=100·1,259712=125,9712>125. Mô hình cố định 8%, bỏ qua phí/rủi ro.

**Rubric tự đối chiếu:**

7 điểm: mô hình tăng trưởng và đơn vị đúng (2đ); lập bất đẳng thức ‘lớn hơn’ đúng (1đ); dùng log đổi chiều đúng và tính ngưỡng n>2,899… (2đ); chọn n=3 là năm nguyên nhỏ nhất (1đ); kiểm P(2), P(3) và kết luận (1đ).

</details>

<!-- TOPIC04_APPROVED_SOURCE_END -->
<span data-topic-w1-source-end="luyen-tap" hidden></span>
<p class="topic-w1-end-nav"><a href="../../">← Tổng quan các Chuyên đề</a></p>
