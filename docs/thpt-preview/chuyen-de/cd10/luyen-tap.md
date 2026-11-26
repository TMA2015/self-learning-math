---
hide:
  - toc
---

<div class="thpt-r4-screen topic-w1-release-nav" data-thpt-r4 data-topic-w1="10" data-topic-w1-part="luyen-tap">
<p class="thpt-r4-eyebrow">HỌC THEO CHUYÊN ĐỀ · CĐ10 · TOÁN THPT</p>
<nav class="thpt-sgk-lesson-nav" aria-label="Điều hướng Chuyên đề 10">
<a href="../../cd09/kien-thuc/">← Chuyên đề trước</a>
<a href="../../cd11/kien-thuc/">Chuyên đề sau →</a>
<a href="../kien-thuc/">Kiến thức</a>
<a href="../tu-kiem-tra/">Tự kiểm tra</a>
</nav>
<p class="topic-w1-back"><a href="../../">← Tổng quan các Chuyên đề</a></p>


</div>
<link rel="stylesheet" href="../../../../assets/stylesheets/thpt-topic-w1-golden-v1.css">
<script src="../../../../assets/javascripts/thpt-topic-w2-golden-v1.js" defer></script>
<div class="topic-w1-boot-status" role="status" aria-live="polite">Đang chuẩn bị luyện tập…</div>
<script>
(function(){var h=document.documentElement;h.classList.add("topic-w1-pending");
 document.addEventListener("DOMContentLoaded",function(){setTimeout(function(){
 if(!h.classList.contains("topic-w1-pending"))return;h.classList.remove("topic-w1-pending");h.classList.add("topic-w1-fallback");
 var status=document.querySelector(".topic-w1-boot-status");if(status)status.textContent="Giao diện tương tác chưa tải được. Nội dung gốc vẫn có thể đọc bên dưới.";
 },0)},{once:true});})();
</script>
<span data-topic-w1-source-start="luyen-tap" hidden></span>

<!-- TOPIC10_APPROVED_SOURCE_START -->
<!-- Q18 SOURCE_LEARNER_BLOB 952ce21e99953348068b6499449dae75d4490d10; Q18_RECEIPT_BLOB 74ecc58ea5c86f83b5549732a2dde769ad5696a8; AUTHORING_PR #886; PUBLIC_PROJECTION_ONLY -->

# Luyện tập

Hãy tự giải trước khi mở **Lời giải**. Ghi rõ miền, mốc đạo hàm, dấu/biên và đơn vị; với tự luận, đối chiếu rubric theo lập luận. Các câu ở đây để tự luyện và tự đối chiếu, không phải bài đánh giá độc lập.

## 1. Chiều biến thiên và cực trị

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B01-C01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O01; SINGLE_ITEM_ID -->

**Bài 1.** Hàm \(f(x)=x^2\) giảm trên khoảng nào trong \((-\infty;0)\), \((0;+\infty)\)?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án/lí do chỉ mở sau khi làm:** \((-\infty;0)\): khi x tiến về 0 từ bên trái, giá trị \(x^2\) giảm; trên \((0;+\infty)\) hàm tăng.

**Nếu làm sai:** Với \(x_1&lt;x_2\), hãy xét hiệu \(f(x_2)-f(x_1)\) cho mọi cặp, không chỉ hai ví dụ số.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P01; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O01; SINGLE_ITEM_ID -->

**Bài 2.** \(f(x)=7-3x\) trên \([-2;4]\), chứng minh hướng biến thiên.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Nghịch biến vì \(f(x_2)-f(x_1)=-3(x_2-x_1)&lt;0\) với mọi \(x_1&lt;x_2\).

**Lời giải có suy luận và điều kiện:** Với mọi \(x_1&lt;x_2\) thuộc \([-2;4]\), \(f(x_2)-f(x_1)=(7-3x_2)-(7-3x_1)=-3(x_2-x_1)&lt;0\). Theo định nghĩa, f nghịch biến trên cả đoạn; không cần đạo hàm.

**Nếu làm sai:** Đừng nhầm hệ số góc âm với giá trị hàm âm. Nếu còn lẫn, chọn hai điểm trong đoạn và so \(f(x_1)\), \(f(x_2)\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B01-P02; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O02; SINGLE_ITEM_ID -->

**Bài 3.** Cho \(f'(x)=(x+1)(x-2)\) trên ℝ. Hãy nêu các khoảng tăng/giảm của f.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án/lí do chỉ mở sau khi làm:** \(f'>0\) khi \(x&lt;-1\) hoặc x>2, \(f'&lt;0\) khi −1&lt;x&lt;2 ⇒ tăng, giảm, tăng theo ba khoảng.

**Nếu làm sai:** Viết \(f'\) rồi lập bảng dấu tại mọi nghiệm, kiểm tính khả vi trước kết luận.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B01-C02; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O02; SINGLE_ITEM_ID -->

**Bài 4.** Cho \(f(x)=x^2-4x+1\). Xác định dấu \(f'\) và khoảng tăng/giảm.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án/lí do chỉ mở sau khi làm:** \(f'=2x-4\), âm x&lt;2, dương x>2 ⇒ giảm \((-\infty;2)\), tăng \((2;+\infty)\).

**Nếu làm sai:** Viết \(f'\) rồi lập bảng dấu tại mọi nghiệm, kiểm tính khả vi trước kết luận.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P02; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O02; SINGLE_ITEM_ID -->

**Bài 5.** \(f=x^2-4x\), tìm khoảng tăng giảm.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(f'=2x-4\): giảm \((-\infty;2)\), tăng \((2;\infty)\).

**Lời giải có suy luận và điều kiện:** Đa thức xác định trên ℝ. \(f'(x)=2x-4=2(x-2)\), âm với x&lt;2, bằng 0 ở 2 và dương với x>2. Vì thế f giảm trên \((-\infty;2)\), tăng trên \((2;\infty)\), đạt cực tiểu tại \(x=2\).

**Nếu làm sai:** Nếu giải \(f'=0\) nhưng bỏ bảng dấu, hãy thử \(x=1\) và \(x=3\) để nhận ra sự đổi chiều.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B01-W02; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O03; SINGLE_ITEM_ID -->

**Bài 6.** Xét \(f(x)=\frac1{x-2}\). Chứng minh f nghịch biến trên mỗi thành phần khoảng của miền xác định; nêu một cặp x1&lt;x2 ở hai phía \(x=2\) cho thấy không thể gộp các khoảng vào một phát biểu \"nghịch biến trên D\".

<details markdown="1"><summary>Lời giải và rubric</summary>

**Rubric tự đối chiếu /4:** 1 điểm \(D=\mathbb R\setminus\{2\}\); 1 điểm \(f'=-\frac1{(x-2)^2}&lt;0\); 1 điểm hai khoảng \((-\infty;2)\),\((2;+\infty)\); 1 điểm phản ví dụ f(1)=−1, f(3)=1 với 1&lt;3 nhưng f(1)&lt;f(3), nên không nghịch biến trên D theo định nghĩa toàn miền.


**Nếu làm sai:** Khoanh tròn điểm cấm và xét riêng từng khoảng của miền xác định.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B01-P01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O03; SINGLE_ITEM_ID -->

**Bài 7.** Với \(f(x)=\frac1{x-2}\), nêu miền xác định và tất cả khoảng nghịch biến, giải thích tại sao phải tách.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án/lí do chỉ mở sau khi làm:** \(D=\mathbb R\setminus\{2\}\), \(f'=-\frac1{(x-2)^2}&lt;0\). Giảm trên \((-\infty;2)\) và \((2;+\infty)\), không nối qua \(x=2\) không thuộc D.

**Nếu làm sai:** Khoanh tròn điểm cấm và xét riêng từng khoảng của miền xác định.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P03; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O03; SINGLE_ITEM_ID -->

**Bài 8.** \(f(x)=\frac1{x+1}\): tìm các khoảng nghịch biến.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \((-\infty;-1)\), \((-1;+\infty)\), không gộp qua \(x=-1\).

**Lời giải có suy luận và điều kiện:** Miền xác định \(D=\mathbb R\setminus\{-1\}\). \(f'(x)=-\frac1{(x+1)^2}&lt;0\) cho mọi x≠−1, nên f nghịch biến riêng trên \((-\infty;-1)\) và \((-1;+\infty)\). Không thể ghép qua \(x=-1\) vì tại đó không có giá trị hàm.

**Nếu làm sai:** Nếu gọi f giảm trên toàn D, thử \(x_1=-2\) và \(x_2=0\): f(−2)=−1&lt;f(0)=1, trái điều kiện giảm cho hai điểm ở hai nhánh.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B01-W01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O04; SINGLE_ITEM_ID -->

**Bài 9.** Khảo sát sự đồng biến, nghịch biến và cực trị của \(f(x)=x^3-3x\), tự vẽ phác thảo bảng dấu. Trình bày vì sao \(f'=0\) riêng lẻ chưa phải kết luận.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Rubric tự đối chiếu /4 (chỉ sau khi làm):** 1 điểm xác định \(D=\mathbb R\) và \(f'=3(x^2-1)\); 1 điểm tìm đúng −1,1 và dấu +,−,+; 1 điểm nêu đúng các khoảng tăng/giảm; 1 điểm tính đúng cực đại \((-1;2)\), cực tiểu \((1;-2)\) và giải thích đổi dấu.

**Nếu làm sai:** Xét \(f'\) ở ngay hai phía điểm tới hạn để xác định dấu đổi như thế nào.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B01-P03; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O04; SINGLE_ITEM_ID -->

**Bài 10.** \(f(x)=x^3-3x\). Tìm hoành độ và giá trị của các cực trị.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án/lí do chỉ mở sau khi làm:** \(f'=3(x+1)(x-1)\); cực đại tại −1, giá trị 2; cực tiểu tại 1, giá trị −2.

**Nếu làm sai:** Xét \(f'\) ở ngay hai phía điểm tới hạn để xác định dấu đổi như thế nào.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B01-C03; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O04; SINGLE_ITEM_ID -->

**Bài 11.** \(f'\) đổi dấu + sang − tại \(x=-1\) và − sang + tại \(x=1\). Xác định loại cực trị tại mỗi điểm nếu f liên tục và khả vi quanh chúng.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án/lí do chỉ mở sau khi làm:** Cực đại tại −1, cực tiểu tại 1; dấu đổi mới quyết định loại cực trị.

**Nếu làm sai:** Xét \(f'\) ở ngay hai phía điểm tới hạn để xác định dấu đổi như thế nào.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P04; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O04; SINGLE_ITEM_ID -->

**Bài 12.** \(f=x^3-12x\), tìm điểm cực trị.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(f'=3x^2-12\); cực đại tại −2 f=16, cực tiểu tại 2 f=−16.

**Lời giải có suy luận và điều kiện:** \(f'=3x^2-12=3(x-2)(x+2)\), bằng 0 tại \(x=-2\) hoặc \(x=2\). Dấu + trên \((-\infty;-2)\), − trên \((-2;2)\), + trên \((2;\infty)\). Do +→− tại −2, f(−2)=16 là cực đại địa phương; do −→+ tại 2, f(2)=−16 là cực tiểu địa phương.

**Nếu làm sai:** Nếu chỉ nêu x=±2, hãy thêm bảng dấu f' để phân loại; nhớ kiểm giá trị của chính f tại các điểm đó.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-W01; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O04; SINGLE_ITEM_ID -->

**Bài 13.** Cho \(f(x)=x^3-3x\) trên \([-2;2]\). (a) Tính f' và lập bảng dấu ở các điểm −1,1. (b) Xác định hai cực trị địa phương. (c) Tính giá trị ở hai đầu và mọi điểm tới hạn rồi kết luận GTLN/GTNN trên \([-2;2]\). (d) Có được dùng kết luận đó cho toàn ℝ không?

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(f'=3(x^2-1)\); cực đại tại −1 (2), cực tiểu tại 1 (−2); trên đoạn max2 tại −1 và2, min−2 tại −2 và1; trên ℝ không có max/min toàn cục.

**Lời giải đầy đủ:** \(f'=3x^2-3\): dấu + trên \(x&lt;-1\), − trên \(-1&lt;x&lt;1\),+ trên \(x>1\). \(f(-1)=2\) là cực đại địa phương; \(f(1)=-2\) là cực tiểu. Đầu đoạn \(f(-2)=-8+6=-2\), \(f(2)=8-6=2\), vậy GTLN2 tại \(x=-1\ \text{hoặc}\ x=2\) và GTNN−2 tại \(x=-2\ \text{hoặc}\ x=1\). Trên ℝ, \(f\to\pm\infty\) theo x nên không có GTLN/GTNN.

**Rubric /7 điểm:**
1. Tính f' đúng (1đ)
2. Tìm hai nghiệm −1,1 và xét dấu (1đ)
3. Phân loại hai cực trị địa phương (1đ)
4. Tính f(−2),f(2) chính xác (1đ)
5. Tính f(−1),f(1) (1đ)
6. Chỉ ra cả hai vị trí đạt max và min (1đ)
7. Nêu không suy kết luận sang ℝ không bị chặn (1đ)

**Nếu làm sai:** Khác biệt giữa cực trị địa phương và GTLN/GTNN toàn cục: luôn so hai biên đoạn đóng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B01-P04; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O05; SINGLE_ITEM_ID -->

**Bài 14.** Hàm \(f(x)=|x|\) có cực tiểu tại 0 không, mặc dù \(f'(0)\) không tồn tại?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án/lí do chỉ mở sau khi làm:** Có, \(f(x)\ge f(0)=0\); điều kiện \(f'(0)=0\) chỉ là điều kiện cần đối với cực trị nội tại điểm có đạo hàm.

**Nếu làm sai:** Cho một phản ví dụ f′(c)=0 nhưng \(f'\) cùng dấu hai phía để tránh học mẹo.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B01-C04; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O05; SINGLE_ITEM_ID -->

**Bài 15.** \(f(x)=x^3\) có \(f'(0)=0\). \(x=0\) có là điểm cực trị không, vì sao?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án/lí do chỉ mở sau khi làm:** Không; \(f'=3x^2>0\) ở hai phía (trừ x=0), nên hàm vẫn tăng qua \(x=0\).

**Nếu làm sai:** Cho một phản ví dụ f′(c)=0 nhưng \(f'\) cùng dấu hai phía để tránh học mẹo.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P05; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O05; SINGLE_ITEM_ID -->

**Bài 16.** \(f=x^5\) tại 0 có cực trị không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Không, \(f'=5x^4\ge0\) và f tăng qua0.

**Lời giải có suy luận và điều kiện:** \(f'(x)=5x^4\ge0\) trên ℝ và f'(0)=0. Với \(x_1&lt;x_2\) luôn \(x_1^5&lt;x_2^5\), hàm tăng nghiêm ngặt trên ℝ; qua \(x=0\) không đổi từ tăng sang giảm hoặc ngược lại. Do đó 0 là điểm dừng nhưng không phải cực trị.

**Nếu làm sai:** Trường hợp \(f'(c)=0\) mới là ứng viên. Hãy đối chiếu dấu f' hai phía c hoặc định nghĩa cực trị trong lân cận.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B01-A01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O06; SINGLE_ITEM_ID -->

**Bài 17.** Vật có vị trí \(s(t)=t^3-6t^2+9t\) m, \(t\ge0\) s. Xác định các khoảng thời gian vật chuyển động theo chiều dương và âm.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án/lí do chỉ mở sau khi làm:** v(t)=3(t−1)(t−3). Chiều dương khi 0&lt;t&lt;1 và t>3; chiều âm khi 1&lt;t&lt;3; t=1,3 dừng tức thời.

**Nếu làm sai:** Viết riêng v=s′, a=s″, tốc độ \(|v|\); dùng dấu v·a để xét nhanh/chậm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P06; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O06; SINGLE_ITEM_ID -->

**Bài 18.** \(s(t)=t^2-6t\), \(t\ge0\), khi nào đổi chiều?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** v=2t−6 đổi dấu tại t=3, từ âm sang dương.

**Lời giải có suy luận và điều kiện:** Vận tốc có hướng v(t)=s'(t)=2t−6. Trên 0≤t&lt;3 thì \(v&lt;0\) nên vật chuyển động theo chiều âm; tại t=3 thì \(v=0\); với t>3 thì \(v>0\), vật theo chiều dương. Vậy đổi chiều ở t=3, không phụ thuộc dấu s(t).

**Nếu làm sai:** Nếu dùng dấu tọa độ s để kết luận chiều, hãy nhớ chiều chuyển động do \(v=s'\) quyết định.

</details>

## 2. Giá trị lớn nhất/nhỏ nhất

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B02-P04; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O07; SINGLE_ITEM_ID -->

**Bài 19.** Trên \([-2;2]\), \(f(x)=x^3\) có GTLN, GTNN và cực trị nội không?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** max=8 tại2; min=−8 tại−2; không có cực trị nội dù f'(0)=0.

**Nếu làm sai:** So cực trị địa phương với giới hạn ±∞; GTLN/GTNN phải bao quát toàn miền.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B02-C01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O07; SINGLE_ITEM_ID -->

**Bài 20.** f(x)=x trên \((0;1)\) có GTLN bằng 1 không? Giải thích.

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu sau tự làm:** Không; với mọi x&lt;1 tồn tại \(y=\frac{x+1}2\) trong (x,1), nên f(y)>f(x). 1 chỉ là supremum.

**Nếu làm sai:** So cực trị địa phương với giới hạn ±∞; GTLN/GTNN phải bao quát toàn miền.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P07; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O07; SINGLE_ITEM_ID -->

**Bài 21.** \(f=x^3-3x\) trên \([-2;2]\) GTLN/GTNN là gì?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** So f(−2)=−2,\(f(-1)=2\),\(f(1)=-2\),\(f(2)=2\); GTLN2, GTNN−2, đạt tại nhiều điểm.

**Lời giải có suy luận và điều kiện:** Đạo hàm \(f'=3(x^2-1)=0\) tại ±1. Vì f liên tục trên \([-2;2]\), liệt kê hai đầu và hai điểm tới hạn: f(−2)=−2, \(f(-1)=2\), \(f(1)=-2\), \(f(2)=2\). Do đó GTLN bằng 2 tại −1 và 2; GTNN bằng −2 tại −2 và 1.

**Nếu làm sai:** Cực đại địa phương chưa chắc là max toàn cục. Trên đoạn đóng phải so cả hai đầu mút.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B02-P05; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O08; SINGLE_ITEM_ID -->

**Bài 22.** Vì sao \(f(x)=\frac1x\) trên \([-1;1]\setminus\{0\}\) không được áp dụng định lý liên tục trên đoạn \([-1;1]\)?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** Không xác định tại0, miền xét không phải toàn đoạn đóng \([-1;1]\); f không bị chặn gần 0 nên cũng không có min/max toàn miền.

**Nếu làm sai:** Định lí đạt min/max cần liên tục trên \([a;b]\) đóng hữu hạn; phân biệt tồn tại và tính được.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B02-C02; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O08; SINGLE_ITEM_ID -->

**Bài 23.** Hàm liên tục trên \([-1;3]\) có chắc đạt GTNN và GTLN không?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** Có, bởi định lý giá trị cực trị trên đoạn đóng hữu hạn; chưa cần biết chúng ở điểm nào.

**Nếu làm sai:** Định lí đạt min/max cần liên tục trên \([a;b]\) đóng hữu hạn; phân biệt tồn tại và tính được.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P08; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O08; SINGLE_ITEM_ID -->

**Bài 24.** \(f=x^2+1\) trên \([-2;1]\) tìm GTLN/GTNN.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** GTLN5 tại−2, GTNN1 tại0.

**Lời giải có suy luận và điều kiện:** \(f=x^2+1\) liên tục trên \([-2;1]\), f'=2x=0 tại \(x=0\). Tính f(−2)=5, f(0)=1, f(1)=2; so ba giá trị cho GTLN=5 tại −2 và GTNN=1 tại 0.

**Nếu làm sai:** Nếu chỉ xét \(f'=0\), hãy bổ sung ngay hai đầu đoạn \([-2;1]\) vào danh sách ứng viên.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B02-W01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O09; SINGLE_ITEM_ID -->

**Bài 25.** Tìm max/min \(f(x)=x^3-3x\) trên \([-2;2]\). Phân biệt cực trị nội với GTLN/GTNN.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải tự mở:** f'=3(x+1)(x−1). Ứng viên −2,−1,1,2; f lần lượt −2,2,−2,2. GTLN=2 đạt tại \(x=-1\) và2, GTNN=−2 đạt tại \(x=-2\) và1. Cực đại nội \(x=-1\), cực tiểu nội \(x=1\), không vì thế bỏ qua hai biên.

**Rubric /4:** 1 D+f'; 1 các điểm tới hạn và biên; 1 bốn giá trị; 1 max/min đúng cả điểm đạt và phân biệt cực trị nội.

**Nếu làm sai:** Liệt kê hai đầu và mọi điểm tới hạn thuộc đoạn trước khi so giá trị.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B02-P01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O09; SINGLE_ITEM_ID -->

**Bài 26.** Tìm max/min \(g(x)=-x^2+4x+2\) trên \([0;5]\), ghi cả điểm đạt.

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** g'=−2x+4, c=2; g(0)=2, g(2)=6, g(5)=−3. Max=6 tại2, min=−3 tại5.

**Nếu làm sai:** Liệt kê hai đầu và mọi điểm tới hạn thuộc đoạn trước khi so giá trị.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B02-C03; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O09; SINGLE_ITEM_ID -->

**Bài 27.** Tìm GTLN/GTNN \(f(x)=x^2-2x\) trên \([0;4]\).

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** f'=2x−2, ứng viên x=0,1,4, lần lượt f=0,−1,8; GTNN=−1, GTLN=8.

**Nếu làm sai:** Liệt kê hai đầu và mọi điểm tới hạn thuộc đoạn trước khi so giá trị.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P09; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O09; SINGLE_ITEM_ID -->

**Bài 28.** \(f=x^2-2x\) trên \([-1;3]\), so điểm nào?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x=−1,1,3; f lần lượt3,−1,3 nên max3,min−1.

**Lời giải có suy luận và điều kiện:** \(f=x^2-2x\) liên tục trên \([-1;3]\); f'=2x−2=0 khi \(x=1\) nằm trong đoạn. Cần so f(−1)=3, f(1)=−1 và f(3)=3. GTLN=3 ở x=−1,3; GTNN=−1 ở \(x=1\).

**Nếu làm sai:** Đạo hàm tại đầu đoạn không cần bằng 0 để đầu đoạn đạt max/min.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-W02; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O09; SINGLE_ITEM_ID -->

**Bài 29.** Cho \(f(x)=|x-1|\) trên \([0;3]\). (a) Chỉ ra f không khả vi tại \(x=1\) nhưng vẫn là ứng viên. (b) Tìm GTLN/GTNN trên đoạn. (c) Xét lại trên miền mở \((0;3)\) và cho biết có GTLN không, có GTNN không.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \([0;3]\): max2 tại3, min0 tại1; \((0;3)\): không có GTLN (sup2 không đạt), min0 tại1.

**Lời giải đầy đủ:** \(f(x)=|x-1|\) có góc nhọn \(x=1\) trong miền, tại đó đạo hàm trái −1, phải +1. Trên \([0;3]\), so \(f(0)=1,\ f(1)=0,\ f(3)=2\) nên max2 tại3,min0 tại1. Trên \((0;3)\), \(x=3\) bị loại và \(f(x)&lt;2\) với mọi x trong miền nhưng có thể tiến sát2 khi \(x\to3^-\), nên không có GTLN; \(x=1\) thuộc miền và \(f(1)=0\), có GTNN0.

**Rubric /7 điểm:**
1. Xác định điểm không khả vi1 (1đ)
2. So giới hạn thương trái/phải đúng (1đ)
3. Tính f(0)=1 (1đ)
4. Tính \(f(1)=0\),f(3)=2 (1đ)
5. GTLN/GTNN trên \([0;3]\) đúng (1đ)
6. Miền \((0;3)\) không đạt sup2 (1đ)
7. Min0 vẫn đạt ở1 (1đ)

**Nếu làm sai:** Điểm không khả vi vẫn là ứng viên; kiểm dấu ngoặc miền khi kết luận 'đạt'.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B02-P02; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O10; SINGLE_ITEM_ID -->

**Bài 30.** \(f(x)=x^2\) trên \((-1;1)\) có GTNN? GTLN? Chứng minh.

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** min=0 tại \(x=0\); không có max, vì \(x^2&lt;1\) với mọi |x|&lt;1 dù sup=1.

**Nếu làm sai:** Phân biệt cận trên với GTLN: phải tìm được điểm thuộc miền làm hàm bằng cận.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B02-C04; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O10; SINGLE_ITEM_ID -->

**Bài 31.** Trên miền \((0;+\infty)\), \(f(x)=\frac1x\) có giá trị nhỏ nhất bằng 0 không?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** Không; mọi \(\frac1x>0\), lim∞=0 không đạt được; cũng không có GTLN vì không bị chặn trên gần 0+.

**Nếu làm sai:** Phân biệt cận trên với GTLN: phải tìm được điểm thuộc miền làm hàm bằng cận.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P10; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O10; SINGLE_ITEM_ID -->

**Bài 32.** \(f=x^2\) trên \((0;1)\) có max/min không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Không có GTLN (sup1), không có GTNN (inf0), vì cả hai đầu bị loại.

**Lời giải có suy luận và điều kiện:** Trên \((0;1)\), \(f=x^2\) tăng vì \(f'=2x>0\). Khi \(x\to1^-\), \(f\to1\) nhưng điểm \(x=1\) không thuộc miền, nên không có GTLN. Khi \(x\to0^+\), \(f\to0\) nhưng \(x=0\) bị loại, nên không có GTNN. Cận trên đúng nhỏ nhất là 1, cận dưới đúng lớn nhất là 0.

**Nếu làm sai:** Để gọi một số là GTLN/GTNN, phải tìm được x thuộc miền đạt đúng số đó; đừng thay giới hạn bằng giá trị hàm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B02-P03; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O11; SINGLE_ITEM_ID -->

**Bài 33.** Xét \(f(x)=\frac{x}{x^2+1}\), x≥0. Tìm GTLN, GTNN.

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** \(f'=\frac{1-x^2}{(x^2+1)^2}\); max \(\frac12\) tại1, min0 tại0. Mệnh đề \(f\to0\) khi \(x\to+\infty\) không tự chứng minh GTNN nếu quên \(x=0\).

**Nếu làm sai:** Thay lại x vào ràng buộc; nghiệm tối ưu ngoài miền phải bị loại.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P11; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O11; SINGLE_ITEM_ID -->

**Bài 34.** \(f=-(x-6)^2+20\), \(x\in[0;4]\), GTLN?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** f(4)=16 tại \(x=4\), không lấy 20 ở \(x=6\).

**Lời giải có suy luận và điều kiện:** Với \(x\in[0;4]\), \(f=20-(x-6)^2\), f'(x)=−2(x−6)>0 vì x&lt;6. Vậy f tăng trên toàn miền khả thi, đạt GTLN ở đầu phải \(x=4\): f(4)=20−4=16. Đỉnh \(x=6\) nằm ngoài miền.

**Nếu làm sai:** Nếu nghiệm \(f'=0\) ngoài miền, loại nó trước khi so; tối ưu luôn gắn với điều kiện khả thi.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B02-W02; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O12; SINGLE_ITEM_ID -->

**Bài 35.** Từ 28 m dây quây khu chữ nhật không suy biến, tìm diện tích lớn nhất; giải thích có đạt diện tích nhỏ nhất không.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải tự mở:** x+y=14, 0&lt;x&lt;14; A=x(14−x), A'=14−2x; max49 m² khi x=y=7. A>0 và tiến về0 khi \(x\to0^+\), nhưng 0 không đạt nên không có min.

**Rubric /4:** 1 xác lập đúng miền/biến; 1 công thức diện tích; 1 tìm tối ưu và đơn vị; 1 xử lý biên mở, giải thích min không tồn tại.

**Nếu làm sai:** Vẽ hình, chọn biến và viết tổng ba cạnh hàng rào trước khi lập A(x).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B02-A01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O12; SINGLE_ITEM_ID -->

**Bài 36.** Mảnh vườn chữ nhật chu vi 24 m, hai cạnh dương. Diện tích lớn nhất và có GTNN dương không?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** \(x\in(0;12)\), \(A=x(12-x)\le36\) m² (dấu bằng x=6); không có GTNN vì \(A\to0^+\) khi \(x\to0^+\).

**Nếu làm sai:** Vẽ hình, chọn biến và viết tổng ba cạnh hàng rào trước khi lập A(x).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P12; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O12; SINGLE_ITEM_ID -->

**Bài 37.** Hình chữ nhật tổng hai cạnh 9 m, diện tích tối đa?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Hai cạnh 4,5 m và4,5 m, diện tích20,25 m².

**Lời giải có suy luận và điều kiện:** Đặt hai cạnh x và y>0 (m), ràng buộc x+y=9 nên y=9−x và 0&lt;x&lt;9. Diện tích \(S=x(9-x)=\frac{81}4-(x-\frac92)^2\le\frac{81}4\); đẳng thức khi \(x=y=\frac92=4{,}5\) m. Vậy diện tích lớn nhất 20,25 m².

**Nếu làm sai:** Đừng nhầm 'tổng hai cạnh bằng 9' với 'chu vi 9'; trước tiên viết ràng buộc từ câu chữ.

</details>

## 3. Tiệm cận và giới hạn

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B03-P07; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O13; SINGLE_ITEM_ID -->

**Bài 38.** \(f=\frac{x}{\sqrt{x^2+1}}\) có bao nhiêu đường tiệm cận ngang? Phía nào?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** Hai: \(y=1\) khi \(x\to+\infty\), y=−1 khi \(x\to-\infty\), dùng \(\sqrt{x^2}=|x|\).

**Nếu làm sai:** Tính giới hạn f(x) ở +∞ và −∞, không suy bằng hình ảnh một mình.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B03-P01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O13; SINGLE_ITEM_ID -->

**Bài 39.** \(f=\frac{2x-1}{x+2}\). Tìm tiệm cận ngang.

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** Chia \(2-\frac5{x+2}\) nên \(y=2\).

**Nếu làm sai:** Tính giới hạn f(x) ở +∞ và −∞, không suy bằng hình ảnh một mình.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B03-C01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O13; SINGLE_ITEM_ID -->

**Bài 40.** \(\lim_{x\to+\infty}\left[5+\frac2{x-1}\right]\) và phương trình tiệm cận ngang?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** Giới hạn 5; y=5.

**Nếu làm sai:** Tính giới hạn f(x) ở +∞ và −∞, không suy bằng hình ảnh một mình.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P13; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O13; SINGLE_ITEM_ID -->

**Bài 41.** \(f=\frac{5x+2}{x-7}\), TCN?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** y=5.

**Lời giải có suy luận và điều kiện:** Chia cả tử và mẫu cho x (khi |x| lớn): \(f(x)=\frac{5+\frac2x}{1-\frac7x}\to5\) khi \(x\to+\infty\) hoặc −∞. Bởi vậy tiệm cận ngang là đường y=5. Điểm x=7 loại miền, không ảnh hưởng kết luận ngang.

**Nếu làm sai:** Nếu lấy 2 hoặc −7 làm tiệm cận ngang, hãy chia đa thức theo bậc lớn nhất ở tử và mẫu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B03-P02; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O14; SINGLE_ITEM_ID -->

**Bài 42.** \(g=\frac{x+1}{x-2}\). Tính giới hạn một bên khi x→2±.

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** Tử gần3>0, mẫu âm/dương nên lim 2−=−∞, 2+=+∞; \(x=2\) tiệm cận đứng.

**Nếu làm sai:** Mẫu bằng 0 chưa đủ: tính ít nhất một giới hạn một phía vô cực.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B03-C02; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O14; SINGLE_ITEM_ID -->

**Bài 43.** \(f=\frac1{x+3}\). Điểm \(x=-3\) có là tiệm cận đứng? Nêu giới hạn hai phía.

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** lim x→−3− f=−∞, lim x→−3+ f=+∞; \(x=-3\) là tiệm cận đứng.

**Nếu làm sai:** Mẫu bằng 0 chưa đủ: tính ít nhất một giới hạn một phía vô cực.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P14; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O14; SINGLE_ITEM_ID -->

**Bài 44.** \(f=-\frac2{x-3}\), giới hạn hai phía quanh3?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Trái +∞, phải−∞; TCD \(x=3\).

**Lời giải có suy luận và điều kiện:** Khi \(x\to3^-\), mẫu x−3 âm và tiến 0, tử −2 âm nên \(\frac{-2}{x-3}\to+\infty\). Khi \(x\to3^+\), mẫu dương rất nhỏ nên phân thức→−∞. Vậy \(x=3\) là tiệm cận đứng với hai nhánh ngược dấu.

**Nếu làm sai:** Kiểm riêng dấu tử và mẫu ở mỗi phía điểm cấm; không viết '∞' không kèm dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B03-W02; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O15; SINGLE_ITEM_ID -->

**Bài 45.** Với \(g=\frac{x^2+1}{x-1}\), tìm tiệm cận xiên và đứng, giải thích không có ngang.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đối chiếu:** \(D=\mathbb R\setminus\{1\}\); \(g=x+1+\frac2{x-1}\); y=x+1 xiên; \(x=1\) đứng; vì g lớn theo x khi \(|x|\to\infty\) nên không có tiệm cận ngang.

**Rubric /4:** 1 D; 1 chia đa thức đúng; 1 đứng và giới hạn; 1 xiên, chứng minh phần dư→0 và bác ngang.

**Nếu làm sai:** Chia đa thức rồi xét hiệu f(x)−(ax+b) ở vô cực để kiểm tiệm cận xiên.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B03-P03; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O15; SINGLE_ITEM_ID -->

**Bài 46.** \(h=\frac{x^2+2x+3}{x+1}\). Tìm tiệm cận xiên và đứng.

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** \(h=x+1+\frac2{x+1}\); xiên y=x+1, đứng \(x=-1\).

**Nếu làm sai:** Chia đa thức rồi xét hiệu f(x)−(ax+b) ở vô cực để kiểm tiệm cận xiên.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B03-C03; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O15; SINGLE_ITEM_ID -->

**Bài 47.** \(g(x)=x-2+\frac3{x+1}\). Tiệm cận xiên khi \(x\to+\infty\)?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** y=x−2, vì phần dư →0; g=x−2 không phải y=x+1.

**Nếu làm sai:** Chia đa thức rồi xét hiệu f(x)−(ax+b) ở vô cực để kiểm tiệm cận xiên.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P15; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O15; SINGLE_ITEM_ID -->

**Bài 48.** \(f=\frac{x^2+3x+1}{x+1}\), TC xiên?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Chia được \(x+2-\frac1{x+1}\), nên y=x+2.

**Lời giải có suy luận và điều kiện:** Chia đa thức: \(x^2+3x+1=(x+1)(x+2)-1\), nên \(f=x+2-\frac1{x+1}\), x≠−1. Khi \(x\to\pm\infty\), hiệu \(f-(x+2)=-\frac1{x+1}\to0\). Do đó tiệm cận xiên là y=x+2.

**Nếu làm sai:** Tiệm cận xiên không chỉ là thương của phép chia: phải xác nhận phần dư chia mẫu tiến 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-W03; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O15; SINGLE_ITEM_ID -->

**Bài 49.** Cho \(f(x)=\frac{x^2+1}{x-1}\). (a) Nêu miền. (b) Chia đa thức thành đường xiên + phần dư. (c) Chứng minh TCD \(x=1\) qua hai giới hạn một phía. (d) Chứng minh TC xiên và nêu vì sao \(x=1\) không là lỗ.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(D=\mathbb R\setminus\{1\}\); \(f=x+1+\frac2{x-1}\); TCD \(x=1\) (trái −∞, phải +∞); TC xiên y=x+1 ở ±∞.

**Lời giải đầy đủ:** \(D=\mathbb R\setminus\{1\}\). Chia \(x^2+1=(x-1)(x+1)+2\) nên \(f=x+1+\frac2{x-1}\). Khi \(x\to1^-\), \(\frac2{x-1}\to-\infty\), khi \(x\to1^+\) thì \(f\to+\infty\) nên \(x=1\) là TCD. Khi \(x\to\pm\infty\), \(f-(x+1)=\frac2{x-1}\to0\) nên y=x+1 là TC xiên. Vì tử tại1 bằng2≠0, không có nhân tử chung khử, đây không phải lỗ.

**Rubric /7 điểm:**
1. Nêu D loại1 (1đ)
2. Chia được \(f=x+1+\frac2{x-1}\) (1đ)
3. Giới hạn trái −∞ (1đ)
4. Giới hạn phải+∞ (1đ)
5. Kết luận TCD \(x=1\) (1đ)
6. Chứng minh phần dư→0, xiên y=x+1 (1đ)
7. Phân biệt TCD với lỗ bằng tử tại1 (1đ)

**Nếu làm sai:** Một TCD phải có giới hạn vô cực một phía; một xiên cần hiệu f−đường→0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B03-P05; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O16; SINGLE_ITEM_ID -->

**Bài 50.** \(k=\frac{x^2-4}{x-2}\), \(x\ne2\). Vẽ mô tả đồ thị có nên vẽ chấm đặc tại \((2;4)\)?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** Không. k=x+2 chỉ khi \(x\ne2\); \((2;4)\) là lỗ, không có tiệm cận đứng.

**Nếu làm sai:** Rút gọn chỉ trên miền gốc, kiểm giới hạn hữu hạn để phân biệt lỗ với TCD.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B03-C04; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O16; SINGLE_ITEM_ID -->

**Bài 51.** \(f=\frac{x^2-9}{x-3}\) có tiệm cận đứng \(x=3\) không?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** Không; \(x\ne3\), f=x+3; lim x→3 f=6, chỉ là lỗ tại \((3;6)\).

**Nếu làm sai:** Rút gọn chỉ trên miền gốc, kiểm giới hạn hữu hạn để phân biệt lỗ với TCD.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P16; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O16; SINGLE_ITEM_ID -->

**Bài 52.** \(f=\frac{x^2-1}{x-1}\), \(x\ne1\), loại gián đoạn?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Khử được, lim2; không TCD \(x=1\).

**Lời giải có suy luận và điều kiện:** \(D=\mathbb R\setminus\{1\}\). Với \(x\ne1\), \(f=\frac{(x-1)(x+1)}{x-1}=x+1\). Vì \(\lim_{x\to1}f=2\) hữu hạn, \(x=1\) là điểm khuyết khử được, không phải tiệm cận đứng. Không được tự bổ sung f(1)=2 vào hàm gốc.

**Nếu làm sai:** Nếu thấy mẫu bằng0, hãy thử phân tích tử thành nhân tử và xét giới hạn sau rút trên miền hợp lệ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B03-A01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O17; SINGLE_ITEM_ID -->

**Bài 53.** Chi phí trung bình đơn vị C(q)=20+120/q (nghìn đồng/sp), q>0. Phân tích q→+∞ và q→0+, chỉ ra tiệm cận; ý nghĩa mô hình.

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** y=20 khi \(q\to+\infty\), q=0 là tiệm cận đứng từ phải (C→∞). q=0 không thể là mức sản lượng có chi phí trung bình xác định.

**Nếu làm sai:** Chỉ lấy giới hạn từ những điểm thực thuộc miền gần biên.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B03-P04; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O17; SINGLE_ITEM_ID -->

**Bài 54.** \(f(x)=\frac1{\sqrt{x-1}}\), \(D=(1;+\infty)\). \(x=1\) có là tiệm cận đứng dù không thể xét từ bên trái?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** Có, lim x→1+=+∞ đủ để kết luận; chỉ dùng giới hạn trong D.

**Nếu làm sai:** Chỉ lấy giới hạn từ những điểm thực thuộc miền gần biên.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P17; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O17; SINGLE_ITEM_ID -->

**Bài 55.** \(f=\frac1{\sqrt{x-2}}\), miền và tiệm cận?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(D=(2;+\infty)\), TCD \(x=2\) từ bên phải.

**Lời giải có suy luận và điều kiện:** Biểu thức \(\frac1{\sqrt{x-2}}\) yêu cầu x−2>0 vì căn nằm ở mẫu, nên \(D=(2;+\infty)\). Khi \(x\to2^+\), mẫu dương tiến 0 và \(f\to+\infty\), do đó \(x=2\) là tiệm cận đứng một phía; không có giá trị thực ở x&lt;2.

**Nếu làm sai:** Căn ở tử cho điều kiện ≥0, nhưng căn ở mẫu phải >0. Không tính giới hạn từ phía ngoài miền.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B03-W01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O18; SINGLE_ITEM_ID -->

**Bài 56.** Khảo sát tiệm cận và vị trí hai nhánh của \(f=\frac{3x+1}{x-2}\) so với các tiệm cận.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đối chiếu:** \(D=\mathbb R\setminus\{2\}\); \(f=3+\frac7{x-2}\), \(y=3\) ngang, \(x=2\) đứng; x&lt;2 dưới \(y=3\) và xuống −∞ khi x→2−, x>2 trên \(y=3\) và lên +∞ khi x→2+.

**Rubric /4:** 1 D+biến đổi; 1 tiệm cận ngang; 1 đứng với dấu một bên; 1 mô tả nhánh tương ứng.

**Nếu làm sai:** Nhận diện TCD x=a, TCN y=L, TC xiên y=ax+b bằng giới hạn tương ứng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B03-P06; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O18; SINGLE_ITEM_ID -->

**Bài 57.** Với \(f=3+\frac7{x-2}\), nhánh phải x>2 nằm trên hay dưới \(y=3\)? Nhánh trái?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** x>2 ⇒ \(\frac7{x-2}>0\) ⇒ trên; x&lt;2 ⇒ dưới. Không cần vẽ thêm đường sai.

**Nếu làm sai:** Nhận diện TCD x=a, TCN y=L, TC xiên y=ax+b bằng giới hạn tương ứng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P18; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O18; SINGLE_ITEM_ID -->

**Bài 58.** \(f=x+\frac1x\), có TCN không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Không vì \(f\to\pm\infty\) theo x; có tiệm cận xiên \(y=x\).

**Lời giải có suy luận và điều kiện:** Với \(x\ne0\), \(f=x+\frac1x\). Khi \(x\to+\infty\), \(f\to+\infty\); khi \(x\to-\infty\), \(f\to-\infty\), nên không có tiệm cận ngang hữu hạn. Tuy nhiên \(f-x=\frac1x\to0\) ở cả hai phía vô cực nên \(y=x\) là tiệm cận xiên.

**Nếu làm sai:** Để tìm tiệm cận ngang, xét giới hạn chính f; để tìm xiên, xét hiệu với đường ax+b.

</details>

## 4. Khảo sát đồ thị

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B04-A02; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O19; SINGLE_ITEM_ID -->

**Bài 59.** Người học vẽ \(y=x^3-3x^2\) đi từ +∞ ở \(x\to-\infty\) và tăng liên tục tới +∞. Chỉ ra hai lỗi từ dữ liệu khảo sát.

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** lim \(x\to-\infty\) =−∞ (không phải +∞); y'&lt;0 trên \((0;2)\) nên không tăng liên tục.

**Nếu làm sai:** Đi từng bước: miền → f′/bảng dấu → giới hạn → giao trục → phác nhánh.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B04-C01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O19; SINGLE_ITEM_ID -->

**Bài 60.** Khi khảo sát \(f=\frac{x+1}{x-2}\), cần xác định D trước hay giao Ox trước, vì sao?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** \(D=\mathbb R\setminus\{2\}\) trước; điểm không thuộc D không thể vẽ thành điểm trên đồ thị hoặc cực trị.

**Nếu làm sai:** Đi từng bước: miền → f′/bảng dấu → giới hạn → giao trục → phác nhánh.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P19; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O19; SINGLE_ITEM_ID -->

**Bài 61.** \(f=(x-2)^2\), cực tiểu và giao Oy?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Min tại \(x=2\) \(y=0\); Oy tại(0,4).

**Lời giải có suy luận và điều kiện:** \(f=(x-2)^2\ge0\) và bằng0 khi \(x=2\), nên cực tiểu (cũng là GTNN trên ℝ) tại \((2;0)\). Giao trục Oy lấy \(x=0\): f(0)=4 nên là \((0;4)\). Có thể kiểm f'=2(x−2) đổi dấu âm sang dương tại 2.

**Nếu làm sai:** Đọc 'giao Oy' nghĩa là \(x=0\), không phải nghiệm f=0 (giao Ox).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B04-W01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O20; SINGLE_ITEM_ID -->

**Bài 62.** Lập đầy đủ bảng biến thiên và mô tả đồ thị \(f=x^3-3x^2\) (D, y', cực trị, giới hạn, giao Ox và tâm).

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải tự mở:** \(D=\mathbb R\), f'=3x(x−2), tăng/giảm/tăng ba khoảng, max cục bộ \((0;0)\), min cục bộ \((2;-4)\), lim hai đầu −∞/+∞; nghiệm \(x=0\) bội2 và \(x=3\) đơn; tâm \((1;-2)\).

**Rubric /4:** 1 miền+đạo hàm+dấu; 1 cực trị+bảng; 1 giới hạn+giao trục; 1 tâm và đồ thị khớp chứng cứ.

**Nếu làm sai:** Đạo hàm bậc ba là tam thức, nghiệm kép không nhất thiết sinh hai cực trị.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B04-P04; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O20; SINGLE_ITEM_ID -->

**Bài 63.** \(h=-x^3+3x\), tìm các khoảng tăng/giảm và cực trị.

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** \(h'=3(1-x^2)\), tăng \((-1;1)\), giảm \((-\infty;-1)\),\((1;\infty)\); min \((-1;-2)\), max \((1;2)\) là **cực trị cục bộ**, không GTLN/GTNN toàn ℝ.

**Nếu làm sai:** Đạo hàm bậc ba là tam thức, nghiệm kép không nhất thiết sinh hai cực trị.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B04-C02; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O20; SINGLE_ITEM_ID -->

**Bài 64.** \(f=x^3-3x^2\) có mấy cực trị và ở đâu?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** f'=3x(x−2), cực đại \((0;0)\), cực tiểu \((2;-4)\).

**Nếu làm sai:** Đạo hàm bậc ba là tam thức, nghiệm kép không nhất thiết sinh hai cực trị.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P20; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O20; SINGLE_ITEM_ID -->

**Bài 65.** Khảo sát hai cực trị của \(f(x)=x^3-3x\) trên ℝ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Cực đại địa phương \((-1;2)\), cực tiểu địa phương \((1;-2)\).

**Lời giải có suy luận và điều kiện:** Với \(f(x)=x^3-3x\), \(f'=3(x-1)(x+1)\). Dấu + trên \((-\infty;-1)\), − trên \((-1;1)\), + trên \((1;+\infty)\); vì vậy cực đại địa phương tại \((-1;2)\), cực tiểu địa phương tại \((1;-2)\). Đường cong bậc ba vẫn không bị chặn trên ℝ.

**Nếu làm sai:** Giải nghiệm \(f'=0\) không đủ; dùng dấu để xác định +→− là cực đại, −→+ là cực tiểu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-W04; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O20; SINGLE_ITEM_ID -->

**Bài 66.** Khảo sát \(f(x)=x^3-3x\) trên ℝ: (a) D, f'. (b) khoảng tăng/giảm và cực trị. (c) giới hạn ở ±∞ và giao Ox. (d) phác thảo cấu trúc đồ thị theo bảng biến thiên, chỉ rõ có hay không GTLN/GTNN trên ℝ.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(D=\mathbb R\); \(f'=3(x^2-1)\), tăng \((-\infty;-1)\),\((1;\infty)\), giảm \((-1;1)\); max cục bộ2 tại−1, min cục bộ−2 tại1; giao Ox \(-\sqrt3;\ 0;\ \sqrt3\); không GTLN/GTNN.

**Lời giải đầy đủ:** \(D=\mathbb R\). \(f'=3(x-1)(x+1)\), + ngoài \([-1;1]\), − bên trong. Cực đại \((-1;2)\), cực tiểu \((1;-2)\). \(f=x(x^2-3)=0\) tại \(x=0,\ \pm\sqrt3\). Khi \(x\to-\infty\) \(f\to-\infty\) và \(x\to+\infty\) \(f\to+\infty\) nên đồ thị đi lên, xuống, lại lên theo bảng biến thiên, không có max/min toàn ℝ. Điểm đối xứng tâm \((0;0)\) vì f lẻ, có thể dùng kiểm hình.

**Rubric /7 điểm:**
1. \(D=\mathbb R\) và đạo hàm (1đ)
2. Giải nghiệm \(f'=0\) ±1 (1đ)
3. Xét dấu và khoảng tăng/giảm (1đ)
4. Cực đại \((-1;2)\), cực tiểu \((1;-2)\) (1đ)
5. Giới hạn ở ±∞ (1đ)
6. Giao Ox chính xác (1đ)
7. Kết luận đồ thị và không max/min toàn ℝ (1đ)

**Nếu làm sai:** Đủ miền/dấu/cực trị/biên/giao trục, không chỉ phương trình \(f'=0\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B04-A01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O21; SINGLE_ITEM_ID -->

**Bài 67.** Chi phí bình quân \(f(q)=4+\frac{200}{q-10}\) cho \(q>10\) đơn vị. Tính giới hạn \(q\to10^+\), \(q\to+\infty\) và nhận định chi phí theo q.

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** \(f\to+\infty\) khi \(q\to10^+\), \(f\to4\) khi \(q\to+\infty\), \(f'&lt;0\); trên \((10;\infty)\) chi phí giảm dần và tiệm cận \(y=4\). Không mở rộng sang \(q\le10\) nếu mô hình quy định \(q>10\).

**Nếu làm sai:** Với phân thức, ghi nghiệm mẫu và xét \(f'\) trên từng thành phần miền.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B04-C03; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O21; SINGLE_ITEM_ID -->

**Bài 68.** \(g=\frac{x+2}{x-1}\), xác định các khoảng giảm.

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** \(g'=-\frac3{(x-1)^2}&lt;0\); giảm riêng trên \((-\infty;1)\) và \((1;+\infty)\).

**Nếu làm sai:** Với phân thức, ghi nghiệm mẫu và xét \(f'\) trên từng thành phần miền.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P21; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O21; SINGLE_ITEM_ID -->

**Bài 69.** \(f=\frac{3x-2}{x+1}\), TCD,TCN?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(x=-1\) (tử ở−1 là−5 khác0), \(y=3\).

**Lời giải có suy luận và điều kiện:** \(D=\mathbb R\setminus\{-1\}\). Với \(f=\frac{3x-2}{x+1}\), tử tại \(x=-1\) bằng −5 khác0 nên \(x=-1\) là tiệm cận đứng (trái +∞, phải −∞). Chia \(f=3-\frac5{x+1}\), phần dư→0 ở ±∞ nên \(y=3\) là tiệm cận ngang.

**Nếu làm sai:** Nếu muốn biết hướng nhánh gần TCD, thay số sát −1 ở từng phía, không chỉ ghi vị trí mẫu bằng0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B04-P05; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O22; SINGLE_ITEM_ID -->

**Bài 70.** \(y=x^3-3x^2\) cắt hay tiếp xúc Ox tại \(x=0\) và tại \(x=3\)?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** \(x=0\) nghiệm kép, tiếp xúc Ox tại \((0;0)\); \(x=3\) nghiệm đơn, cắt Ox tại \((3;0)\).

**Nếu làm sai:** Nghiệm tử chỉ cho giao Ox khi không bị mẫu triệt tiêu; giao Oy cần 0 thuộc miền.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B04-C04; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O22; SINGLE_ITEM_ID -->

**Bài 71.** \(f=\frac{x+2}{x-1}\) cắt trục Ox và Oy ở đâu?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** Ox: \(x=-2\) ⇒ \((-2;0)\); Oy: \(x=0\) ⇒ \((0;-2)\).

**Nếu làm sai:** Nghiệm tử chỉ cho giao Ox khi không bị mẫu triệt tiêu; giao Oy cần 0 thuộc miền.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P22; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O22; SINGLE_ITEM_ID -->

**Bài 72.** \(f=\frac{x^2-4}{x-2}\), \(x\ne2\), giao Ox?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** f=x+2 trên D nên giao tại \(x=-2\); \(x=2\) là lỗ, không giao.

**Lời giải có suy luận và điều kiện:** \(f=\frac{x^2-4}{x-2}\), \(D=\mathbb R\setminus\{2\}\); rút trên D thành f=x+2. Giao Ox giải x+2=0 được \(x=-2\) thuộc D, nên điểm giao là \((-2;0)\). Điểm \((2;4)\) bị khuyết, không phải giao trục hay điểm trên đồ thị.

**Nếu làm sai:** Rút gọn biểu thức không mở rộng miền của hàm; luôn đối chiếu nghiệm với mẫu ban đầu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B04-P06; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O23; SINGLE_ITEM_ID -->

**Bài 73.** Tâm đối xứng đồ thị \(y=x^3-3x^2\)?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** \((1;-2)\), vì hoành độ điểm uốn \(x=-\frac b{3a}=1\) và \(f(1)=-2\); không phải \((0;0)\).

**Nếu làm sai:** Tách \(y=b+\frac{k}{x-a}\) và kiểm cặp điểm (a±h) đối xứng qua \((a;b)\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B04-P01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O23; SINGLE_ITEM_ID -->

**Bài 74.** Tâm đối xứng của \(y=2+\frac5{x-4}\)?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** \((4;2)\), giao hai tiệm cận \(x=4\), \(y=2\).

**Nếu làm sai:** Tách \(y=b+\frac{k}{x-a}\) và kiểm cặp điểm (a±h) đối xứng qua \((a;b)\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P23; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O23; SINGLE_ITEM_ID -->

**Bài 75.** \(f=3-\frac2{x+4}\), tâm?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(I(-4;3)\).

**Lời giải có suy luận và điều kiện:** \(f=3-\frac2{x+4}\) có TCD \(x=-4\) vì mẫu tiến0, TCN \(y=3\) vì phần phân thức→0 khi \(|x|\to\infty\). Phép tịnh tiến u=x+4,v=y−3 cho \(v=-\frac2u\) đối xứng qua gốc, nên tâm đối xứng của đồ thị gốc là \(I(-4;3)\).

**Nếu làm sai:** Tâm phân thức dạng \(b+\frac k{x-a}\) là giao hai tiệm cận \((a;b)\), không phải giao trục tọa độ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B04-P02; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O24; SINGLE_ITEM_ID -->

**Bài 76.** Nếu bảng dấu y' trên ℝ là + trên \((-\infty;-1)\), − trên \((-1;3)\), + trên \((3;\infty)\), loại cực trị tại −1 và 3?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** Cực đại ở −1; cực tiểu ở3. Muốn biết giá trị phải thay vào hàm.

**Nếu làm sai:** Bảng biến thiên cho cực trị địa phương; kiểm điểm đạt và biên để suy toàn cục.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P24; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O24; SINGLE_ITEM_ID -->

**Bài 77.** Cho f liên tục trên một khoảng chứa 0, khả vi ở các điểm khác 0 gần 0, f'(x)&lt;0 với x&lt;0 và f'(x)>0 với \(x>0\), f(0)=4. Xác định cực trị tại \(x=0\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Cực tiểu địa phương tại \((0;4)\).

**Lời giải có suy luận và điều kiện:** Theo giả thiết f' âm khi x&lt;0 và dương khi \(x>0\); vì f liên tục tại 0 và f(0)=4, hàm giảm tới 0 rồi tăng, nên \((0;4)\) là điểm cực tiểu địa phương. Không đủ dữ kiện khẳng định đây là GTNN của toàn miền nếu còn nhánh khác.

**Nếu làm sai:** Bảng dấu âm→dương nghĩa là đồ thị đi xuống rồi đi lên. Kiểm giả thiết liên tục ở điểm chuyển dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B04-W02; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O25; SINGLE_ITEM_ID -->

**Bài 78.** Khảo sát \(y=\frac{x+2}{x-1}\) và thuyết minh vì sao hai nhánh không nối.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải tự mở:** \(D=\mathbb R\setminus\{1\}\), \(y'=-\frac3{(x-1)^2}\), giảm từng nhánh; \(x=1\), \(y=1\) tiệm cận; tâm \((1;1)\); Ox \((-2;0)\), Oy \((0;-2)\), hai nhánh tách tại tiệm cận đứng.

**Rubric /4:** 1 D+đạo hàm; 1 đơn điệu từng khoảng; 1 giới hạn/tiệm cận; 1 giao trục+đúng hai nhánh.

**Nếu làm sai:** Thử hai điểm ở hai nhánh để thấy dấu \(f'\) âm riêng từng nhánh chưa đủ cho toàn D.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B04-P03; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O25; SINGLE_ITEM_ID -->

**Bài 79.** Với \(y=1+\frac2{x+1}\), có nên nối hai nhánh qua \(x=-1\)?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** Không; \(x=-1\) bị loại khỏi D và là tiệm cận đứng.

**Nếu làm sai:** Thử hai điểm ở hai nhánh để thấy dấu \(f'\) âm riêng từng nhánh chưa đủ cho toàn D.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P25; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O25; SINGLE_ITEM_ID -->

**Bài 80.** \(f=\frac1{x+2}\), có giảm trên D như một tập không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Không theo định nghĩa so mọi cặp; chỉ trên hai khoảng tách bởi −2.

**Lời giải có suy luận và điều kiện:** \(D=\mathbb R\setminus\{-2\}\) và \(f'=-\frac1{(x+2)^2}&lt;0\) trên từng khoảng \((-\infty;-2)\), \((-2;+\infty)\). Nhưng lấy \(x_1=-3&lt;x_2=-1\) thì \(f(x_1)=-1&lt;f(x_2)=1\), trái điều kiện giảm trên cả tập D theo mọi cặp. Vậy chỉ được nói nghịch biến trên hai khoảng riêng.

**Nếu làm sai:** Đạo hàm một dấu trên miền rời không cho phép gộp các khoảng; thử hai điểm ở hai phía tiệm cận.

</details>

## 5. Mô hình vận tốc và tối ưu

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B05-P01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O26; SINGLE_ITEM_ID -->

**Bài 81.** Từ \(f(x)=x^3\) cm với x phút, f'(2) và ý nghĩa x tăng rất nhỏ?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** \(3x^2\) ⇒ f'(2)=12 cm/phút, thay đổi tức thời của f khi x ở gần2 phút.

**Nếu làm sai:** Chi phí C có đơn vị tiền, C′ có đơn vị tiền/sản phẩm: phải ghi riêng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B05-C01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O26; SINGLE_ITEM_ID -->

**Bài 82.** \(f(x)=2x^2+3\), x là s, f là m. f'(2) và đơn vị?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** f'=4x, f'(2)=8 m/s. Không gọi đây là gia tốc.

**Nếu làm sai:** Chi phí C có đơn vị tiền, C′ có đơn vị tiền/sản phẩm: phải ghi riêng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P26; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O26; SINGLE_ITEM_ID -->

**Bài 83.** \(C(q)=80+4q+q^2\), C'(2)?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** C'=4+2q⇒8 (đơn vị chi phí/đơn vị sản phẩm).

**Lời giải có suy luận và điều kiện:** \(C(q)=80+4q+q^2\), nên C'(q)=4+2q và C'(2)=8. Nếu C đo bằng nghìn đồng và q theo sản phẩm thì kết quả là 8 nghìn đồng trên một sản phẩm, không phải tổng chi phí C(2)=92.

**Nếu làm sai:** Nếu đáp án vẫn chứa q, hãy thế q=2 sau khi đạo hàm; luôn ghi đơn vị của tốc độ cận biên.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B05-P02; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O27; SINGLE_ITEM_ID -->

**Bài 84.** Vật có \(v(t)=t-3\) m/s, a=1 m/s². Ở t=2 tốc độ đang tăng hay giảm? Tại t=3 có thể kết luận chỉ bằng dấu a?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** t=2, v=−1 nên \(v\cdot a&lt;0\), tốc độ giảm; tại t=3 \(v=0\), phải xét lân cận, không suy chỉ từ a.

**Nếu làm sai:** Tại \(v\ne0\) dùng dấu v·a, không chỉ dấu a, để kết luận tốc độ đang tăng hay giảm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B05-C02; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O27; SINGLE_ITEM_ID -->

**Bài 85.** \(s(t)=t^2-4t+5\) m, \(t\ge0\) s. Vận tốc/tốc độ tại t=1?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** \(v=2t-4\), v(1)=−2 m/s; tốc độ 2 m/s, chiều âm.

**Nếu làm sai:** Tại \(v\ne0\) dùng dấu v·a, không chỉ dấu a, để kết luận tốc độ đang tăng hay giảm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P27; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O27; SINGLE_ITEM_ID -->

**Bài 86.** Cho v=3,a=−2, tốc độ thay đổi?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Giảm vì \(v\cdot a&lt;0\).

**Lời giải có suy luận và điều kiện:** Tại thời điểm xét có v=3>0 và \(a=-2&lt;0\). Vì v·a=−6&lt;0, đạo hàm tốc độ \(|v|\) bằng a=−2 (khi v>0), nên tốc độ đang giảm. Gia tốc âm không luôn đồng nghĩa chậm dần nếu v cũng âm.

**Nếu làm sai:** Để đánh giá tốc độ tăng/giảm, kiểm dấu v và a cùng lúc, không dùng riêng dấu gia tốc.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B05-W02; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O28; SINGLE_ITEM_ID -->

**Bài 87.** Chi phí \(C(q)=0{,}01q^2+4q+200\) (nghìn đồng) với \(q\ge0\). Tính C'(50), C(51)−C(50), nêu ý nghĩa, đơn vị và giới hạn dùng xấp xỉ đạo hàm.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải tự mở:** C'=0.02q+4; C'(50)=5 nghìn đồng/sp; C(51)−C(50)=0.01·101+4=5.01 nghìn đồng; sai số 0.01 nghìn đồng do bước rời rạc.

**Rubric /4:** 1 đạo hàm; 1 giá trị C'(50); 1 sai phân; 1 diễn giải đúng đơn vị và "xấp xỉ".

**Nếu làm sai:** C′(q) là cận biên, ΔC=C(q+1)−C(q) là chênh thực; tính cả hai để so.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B05-P03; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O28; SINGLE_ITEM_ID -->

**Bài 88.** \(C(q)=0{,}02q^2+5q+1200\). So C'(100) với C(101)−C(100).

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** 9 so với 9.02 nghìn đồng; sai phân hữu hạn không luôn bằng đạo hàm.

**Nếu làm sai:** C′(q) là cận biên, ΔC=C(q+1)−C(q) là chênh thực; tính cả hai để so.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B05-C03; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O28; SINGLE_ITEM_ID -->

**Bài 89.** \(C(q)=q^2+10q+100\) (nghìn đồng). Chi phí cận biên tại q=5?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** C'=2q+10, C'(5)=20 nghìn đồng/sản phẩm; không phải C(5).

**Nếu làm sai:** C′(q) là cận biên, ΔC=C(q+1)−C(q) là chênh thực; tính cả hai để so.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P28; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O28; SINGLE_ITEM_ID -->

**Bài 90.** \(C(q)=2q^2+q+5\), C'(2)?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 9 (đơn vị chi phí/sản phẩm); C(3)−C(2)=11.

**Lời giải có suy luận và điều kiện:** C'(q)=4q+1 nên C'(2)=9. Nếu q tính theo sản phẩm, chênh thật một sản phẩm C(3)−C(2)=[18+3+5]−[8+2+5]=26−15=11, khác9. Đạo hàm là tốc độ cận biên tức thời, không phải luôn bằng sai phân hữu hạn bước1.

**Nếu làm sai:** Nếu ra 11 thay cho C'(2), bạn đã tính ΔC với Δq=1, không phải đạo hàm tại q=2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B05-A02; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O29; SINGLE_ITEM_ID -->

**Bài 91.** Mô hình giá p(q)=30−0.1q, \(q\ge0\) và không cho giá âm. Miền q nào hợp lệ?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** \(0\le q\le300\), đơn vị sản phẩm theo mô hình liên tục; nếu cần q nguyên thì lấy giao với ℤ.

**Nếu làm sai:** Độ dài đáy và chiều cao phải dương; xác định miền vật lý trước tối ưu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B05-C04; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O29; SINGLE_ITEM_ID -->

**Bài 92.** Tấm bìa 30×20, cắt vuông góc x ở bốn góc làm hộp không nắp. Miền x hợp lệ?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** \(0&lt;x&lt;10\) cm, vì 30−2x>0, 20−2x>0 và \(x>0\).

**Nếu làm sai:** Độ dài đáy và chiều cao phải dương; xác định miền vật lý trước tối ưu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P29; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O29; SINGLE_ITEM_ID -->

**Bài 93.** Hình chữ nhật chu vi24m, một cạnh x có miền?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(0&lt;x&lt;12\); cạnh kia 12−x.

**Lời giải có suy luận và điều kiện:** Hình chữ nhật chu vi24 m có 2(x+y)=24⇒x+y=12. Với hai cạnh đều dương, y=12−x>0 và \(x>0\) nên miền \(0&lt;x&lt;12\). Các đầu x=0,12 cho hình suy biến, không hợp lệ.

**Nếu làm sai:** Nếu cho 0≤x≤24, hãy chia chu vi cho2 và ghi điều kiện cạnh còn lại dương.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B05-A01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O30; SINGLE_ITEM_ID -->

**Bài 94.** Quây vườn sát tường bằng 40 m hàng rào chỉ cho ba cạnh; hai kích thước tối ưu?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** 10 m cạnh vuông góc tường, 20 m song song; Amax=200 m².

**Nếu làm sai:** Nghiệm \(f'=0\) chỉ là ứng viên nội miền; hãy so các biên có trong miền.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B05-P04; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O30; SINGLE_ITEM_ID -->

**Bài 95.** Tối đa hóa \(f(x)=-x^2+8x-3\), \(0\le x\le6\).

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** f'=−2x+8, \(x=4\) cho f=13; f(0)=−3, f(6)=9; max13 tại4.

**Nếu làm sai:** Nghiệm \(f'=0\) chỉ là ứng viên nội miền; hãy so các biên có trong miền.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P30; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O30; SINGLE_ITEM_ID -->

**Bài 96.** \(P(x)=-(x-3)^2+7\), \(x\in[0;2]\), GTLN?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(x=2\), P=6; đỉnh3 không hợp lệ.

**Lời giải có suy luận và điều kiện:** \(f(x)=7-(x-3)^2\), \(x\in[0;2]\). Vì f'(x)=−2(x−3)>0 trên \([0;2)\), hàm tăng đến \(x=2\) và đạt GTLN f(2)=7−1=6. Đỉnh \(x=3\) cho giá trị7 nhưng nằm ngoài miền, không là phương án.

**Nếu làm sai:** Khi tối ưu có ràng buộc, hãy xét ứng viên \(f'=0\) có thực sự nằm trong miền hay không.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-W05; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O30; SINGLE_ITEM_ID -->

**Bài 97.** Tấm bìa hình vuông cạnh 12 cm. Cắt bốn hình vuông cạnh x cm (0&lt;x&lt;6) ở bốn góc và gấp hộp không nắp. (a) Lập V(x) và miền. (b) Tính V'. (c) Tìm x làm thể tích lớn nhất, tính Vmax. (d) Kiểm hai biên \(x\to0^+\),\(x\to6^-\) và giải thích vì sao không nhận các biên.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(V=x(12-2x)^2\) cm³; \(V'=12(x-2)(x-6)\); \(x=2\) cm, Vmax128 cm³; hai biên thể tích→0 nhưng không thuộc miền.

**Lời giải đầy đủ:** Đáy có cạnh \(12-2x>0\) và chiều cao \(x>0\) ⇒ \(0&lt;x&lt;6\). \(V=x(12-2x)^2=144x-48x^2+4x^3\); \(V'=144-96x+12x^2=12(x-2)(x-6)\). Trên \((0;2)\), \(V'>0\); \((2;6)\), \(V'&lt;0\) ⇒ max tại \(x=2\). \(V(2)=2\cdot8^2=128\) cm³. Khi \(x\to0^+\) hoặc6⁻, thể tích→0, biên không cho hộp hợp lệ. Không lấy nghiệm6 làm cực trị trong miền, vì \(x=6\) làm đáy0.

**Rubric /7 điểm:**
1. Miền \(0&lt;x&lt;6\) và lý do (1đ)
2. \(V=x(12-2x)^2\) và đơn vị (1đ)
3. Tính V' chính xác (1đ)
4. Giải nghiệm x=2,6 và loại6 (1đ)
5. Bảng dấu V' và max \(x=2\) (1đ)
6. Tính Vmax128 cm³ (1đ)
7. Kiểm hai giới hạn biên và giả thiết hộp (1đ)

**Nếu làm sai:** Đừng bỏ điều kiện đáy dương, và chỉ chọn điểm nội miền \(x=2\) làm tối ưu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B05-W01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O31; SINGLE_ITEM_ID -->

**Bài 98.** Từ giấy 30×20 cm, cắt bốn góc vuông cạnh x để gấp hộp không nắp. Tìm miền x và kích thước tạo thể tích lớn nhất; giải thích tại sao không chọn nghiệm \(f'=0\) ngoài miền.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải tự mở:** \(0&lt;x&lt;10\), \(V=600x-100x^2+4x^3\), \(V'=600-200x+12x^2\). Nghiệm \(x_*=\frac{25-5\sqrt7}3\approx3{,}9237\) hợp lệ, nghiệm còn lại >10; đạo hàm + sang − tại x*, hai biên cho V→0 nhưng hộp không hợp lệ; chiều dài đáy 30−2x*, rộng20−2x*, cao x*.

**Rubric /4:** 1 biến+miền; 1 mô hình V+đạo hàm; 1 nghiệm và dấu; 1 loại nghiệm ngoài miền, kích thước và đơn vị.

**Nếu làm sai:** Điểm |x| gãy không khả vi nhưng vẫn có thể cho GTNN: kiểm cả điểm gãy.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B05-P05; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O31; SINGLE_ITEM_ID -->

**Bài 99.** Với V=x(30−2x)(20−2x), tại x=10 có thể gọi V=0 là thể tích nhỏ nhất của một **hộp** tạo được không?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** Không, x=10 làm chiều rộng đáy 0, hộp suy biến; miền \((0;10)\), inf V=0 nhưng không có min.

**Nếu làm sai:** Điểm |x| gãy không khả vi nhưng vẫn có thể cho GTNN: kiểm cả điểm gãy.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P31; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O31; SINGLE_ITEM_ID -->

**Bài 100.** \(f=x^2\) trên \([1;3]\), min/max?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Min1 tại1, max9 tại3.

**Lời giải có suy luận và điều kiện:** Trên \([1;3]\), \(f=x^2\) liên tục và \(f'=2x>0\); vì thế hàm tăng, GTNN=f(1)=1 và GTLN=f(3)=9. Cả hai đạt tại đầu đoạn, không có điểm nội miền \(f'=0\).

**Nếu làm sai:** Không bắt buộc tìm nghiệm \(f'=0\) nếu đạo hàm luôn dương trên đoạn; hai đầu đoạn vẫn quyết định cực trị toàn cục.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B05-A03; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O32; SINGLE_ITEM_ID -->

**Bài 101.** Lợi nhuận \(P(q)=20q-0{,}1q^2-400\) (nghìn đồng), \(0\le q\le300\). Nếu tính được q=100, lợi nhuận tối đa là bao nhiêu và với đơn vị nào?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** P(100)=600 nghìn đồng, không phải 600 sản phẩm; q=100 sản phẩm tối ưu trong mô hình.

**Nếu làm sai:** Số sản phẩm là nguyên; so các nguyên hợp lệ sát đỉnh liên tục.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-B05-P06; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O32; SINGLE_ITEM_ID -->

**Bài 102.** Nếu diện tích A(x) đo bằng m² và x bằng m, đơn vị A'(x) là gì? Có được gọi A' là vận tốc không?

<details markdown="1"><summary>Lời giải</summary>

**Đối chiếu:** m²/m=m; đó là độ nhạy diện tích theo độ dài, **không** là vận tốc nếu x không phải thời gian.

**Nếu làm sai:** Số sản phẩm là nguyên; so các nguyên hợp lệ sát đỉnh liên tục.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P32; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O32; SINGLE_ITEM_ID -->

**Bài 103.** Chiều dài tối ưu x=2,5m, có phải làm tròn?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Không nếu chiều dài có thể đo liên tục; làm tròn chỉ khi biến thực tế rời rạc.

**Lời giải có suy luận và điều kiện:** Nếu chiều dài có thể thay đổi liên tục thì x=2,5 m là giá trị hợp lệ và không cần làm tròn. Nếu mô hình quy định x theo số đoạn/viên gạch nguyên hoặc bội số đo cố định, phải so các giá trị khả thi gần2,5 và nêu sai số do làm tròn. Không thể quyết định chỉ từ kết quả toán mà bỏ loại biến.

**Nếu làm sai:** Đọc rõ đơn vị và biến liên tục hay rời rạc trước khi làm tròn; không tự làm tròn mọi kết quả.

</details>

## 6. Tổng hợp

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-END-A01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O33; SINGLE_ITEM_ID -->

**Bài 104.** f=x(2−x) trên \((0;2)\). GTLN/GTNN?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** max1 tại1; không min, vì \(f>0\) nhưng →0 ở hai biên bị loại.

**Nếu làm sai:** Đừng dùng cực đại địa phương làm GTLN khi f không bị chặn phía trên.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-END-P01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O33; SINGLE_ITEM_ID -->

**Bài 105.** \(f=x^2-4x+5\) trên \([0;4]\). GTLN/GTNN và tất cả điểm đạt?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** min1 tại2; max5 tại cả \(x=0\) và4.

**Nếu làm sai:** Đừng dùng cực đại địa phương làm GTLN khi f không bị chặn phía trên.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-END-C01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O33; SINGLE_ITEM_ID -->

**Bài 106.** \(f=x^3-6x^2+9x\) trên ℝ. Khoảng tăng/giảm và cực trị?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** f'=3(x−1)(x−3), tăng \((-\infty;1)\),\((3;+\infty)\), giảm \((1;3)\); cực đại \((1;4)\), cực tiểu \((3;0)\).

**Nếu làm sai:** Đừng dùng cực đại địa phương làm GTLN khi f không bị chặn phía trên.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P33; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O33; SINGLE_ITEM_ID -->

**Bài 107.** \(f=-x^2+6x\), max trên ℝ?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** GTLN9 tại \(x=3\); không có GTNN.

**Lời giải có suy luận và điều kiện:** \(f=-x^2+6x=9-(x-3)^2\le9\) với mọi x∈ℝ, bằng9 tại \(x=3\). Vậy GTLN=9. Khi \(|x|\to\infty\), \(f\to-\infty\) nên không có GTNN trên toàn ℝ; điều này phù hợp parabol mở xuống.

**Nếu làm sai:** Chứng minh GTLN bằng bình phương không âm; để phủ nhận GTNN, chỉ ra hàm không bị chặn dưới.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-END-W01; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O34; SINGLE_ITEM_ID -->

**Bài 108.** \(g=\frac{x^2+2x+5}{x+1}\). Tìm D, các tiệm cận, dấu đạo hàm, cực trị và vì sao không nối hai nhánh.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(D=\mathbb R\setminus\{-1\}\), \(g=x+1+\frac4{x+1}\), đứng \(x=-1\), xiên y=x+1. \(g'=1-\frac4{(x+1)^2}=\frac{(x-1)(x+3)}{(x+1)^2}\). Dấu + trên \((-\infty;-3)\),\((1;\infty)\); − trên \((-3;-1)\), \((-1;1)\). Cực đại cục bộ \((-3;-4)\), cực tiểu cục bộ \((1;4)\).

**Rubric tự đối chiếu /4:** 1 D/chia; 1 tiệm cận; 1 đạo hàm/dấu; 1 cực trị và nhánh không nối.

**Nếu làm sai:** TCD cần giới hạn vô cực, tiệm cận xiên cần hiệu tiến0; kiểm đạo hàm theo từng nhánh.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-END-P02; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O34; SINGLE_ITEM_ID -->

**Bài 109.** \(g=\frac{x^2+4}{x-2}\). Tiệm cận đứng và xiên?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(g=x+2+\frac8{x-2}\), đứng \(x=2\), xiên y=x+2.

**Nếu làm sai:** TCD cần giới hạn vô cực, tiệm cận xiên cần hiệu tiến0; kiểm đạo hàm theo từng nhánh.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-END-C02; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O34; SINGLE_ITEM_ID -->

**Bài 110.** \(g=\frac{2x+1}{x-3}\): các tiệm cận và tâm đồ thị?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(g=2+\frac7{x-3}\), đứng \(x=3\), ngang \(y=2\), tâm \((3;2)\).

**Nếu làm sai:** TCD cần giới hạn vô cực, tiệm cận xiên cần hiệu tiến0; kiểm đạo hàm theo từng nhánh.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P34; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O34; SINGLE_ITEM_ID -->

**Bài 111.** \(f=\frac{x^2-4}{x-2}\), TCD ở \(x=2\)?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Không; chỉ lỗ. Nếu \(x\ne2\), f=x+2, có đường xiên y=x+2 ở vô cực (thực tế đồ thị trùng đường này trừ một điểm).

**Lời giải có suy luận và điều kiện:** \(f=\frac{x^2-4}{x-2}\) với \(x\ne2\) bằng x+2 trên miền D. Giới hạn khi x→2 bằng4 hữu hạn, nên \(x=2\) không là TCD mà chỉ là lỗ \((2;4)\). Vì f(x)−(x+2)=0 với mọi \(x\in D\), đường y=x+2 thỏa định nghĩa tiệm cận xiên ở vô cực (đồ thị trùng đường ấy trừ lỗ).

**Nếu làm sai:** Đừng mặc định mẫu bằng0 là TCD; phân tích nhân tử và tính giới hạn một phía trước.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-END-W02; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O35; SINGLE_ITEM_ID -->

**Bài 112.** \(P(q)=-0{,}2q^2+16q-100\) nghìn đồng, \(0\le q\le80\). Tìm lợi nhuận lớn nhất, so biên và giải thích miền.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** P'=16−0.4q=0 ⇒ q=40, P(0)=P(80)=−100, P(40)=220 nghìn đồng, tối ưu ở q=40 sản phẩm.

**Rubric tự đối chiếu /4:** 1 miền+đơn vị; 1 đạo hàm; 1 so ba giá trị; 1 kết luận thực tế.

**Nếu làm sai:** Đặt lợi nhuận P=R−C rồi tối ưu P, không tối ưu riêng C hay R.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-END-P04; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O35; SINGLE_ITEM_ID -->

**Bài 113.** Quây ba cạnh khu vườn sát tường bằng 36m rào, chiều rộng vuông góc x. Diện tích lớn nhất?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 2x+y=36, 0&lt;x&lt;18; \(A=x(36-2x)\), x=9,y=18, Amax162m².

**Nếu làm sai:** Đặt lợi nhuận P=R−C rồi tối ưu P, không tối ưu riêng C hay R.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-END-C04; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O35; SINGLE_ITEM_ID -->

**Bài 114.** \(s(t)=2t^2-8t+7\) (m), \(t\ge0\) (s). Tại t=1 chiều chuyển động và tốc độ?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** v=4t−8, v(1)=−4m/s, đi chiều âm, tốc độ 4m/s.

**Nếu làm sai:** Đặt lợi nhuận P=R−C rồi tối ưu P, không tối ưu riêng C hay R.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P35; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O35; SINGLE_ITEM_ID -->

**Bài 115.** \(P=-q^2+6q-2\), \(q\in[0;4]\), max ở đâu?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** q=3, P=7; hai biên−2 và6 nhỏ hơn.

**Lời giải có suy luận và điều kiện:** \(P(q)=-q^2+6q-2=7-(q-3)^2\le7\) cho \(q\in[0;4]\). Vì q=3 thuộc miền nên GTLN=7 tại q=3. Kiểm hai biên P(0)=−2,P(4)=6 đều thấp hơn. Nếu q là số lượng nguyên thì q=3 cũng hợp lệ.

**Nếu làm sai:** Để kết luận max, phải vừa có chặn trên vừa có điểm đạt trong miền; so các biên để tự kiểm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-W06; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O35; SINGLE_ITEM_ID -->

**Bài 116.** Giả sử doanh thu R(q)=12q và chi phí \(C(q)=q^2+2q+5\) (nghìn đồng) với q số sản phẩm nguyên, 0≤q≤8. (a) Lập lợi nhuận P. (b) Tối ưu bản liên tục trên \([0;8]\), kiểm biên. (c) Quyết định q nguyên tối ưu. (d) Diễn giải chi phí cận biên C'(q) không bằng ngay tối ưu P.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(P=-q^2+10q-5\); tối đa20 nghìn đồng tại q=5; C'(5)=12 nghìn đồng/sản phẩm và không bằng0.

**Lời giải đầy đủ:** \(P=R-C=12q-(q^2+2q+5)=-q^2+10q-5\), P'=−2q+10=0⇒q=5, P''=−2&lt;0. P(0)=−5, P(5)=20, P(8)=11, nên GTLN20 ở5. Vì q=5 là số nguyên hợp lệ, vẫn tối ưu trong tập q nguyên. C'(q)=2q+2, C'(5)=12 khác0: mục tiêu tối ưu là lợi nhuận, không tối ưu riêng chi phí. Mô hình số liệu là giả định, không phải dữ liệu thực đo.

**Rubric /7 điểm:**
1. Lập P=R−C đúng (1đ)
2. Tính P' và nghiệm5 (1đ)
3. Nêu P'' âm hoặc dấu đổi (1đ)
4. So P tại 0,5,8 (1đ)
5. Quyết định q=5 nguyên khả thi (1đ)
6. Tính C'(5)=12 và phân biệt mục tiêu (1đ)
7. Nêu đơn vị và giả định mô hình (1đ)

**Nếu làm sai:** Không tối ưu C thay cho P và không chọn q không nguyên khi q là số sản phẩm.

</details>

<!-- AUTHORING_METADATA_ONLY_Q15_Q16: 36 Practice +6 Written=42 new IDs. 78 SGK refs from separate original index. Public self-check 36 placements reference the same P01–P36; these are pre-exposed formative and NOT independent TOPIC_READINESS. No private RD1 bank or protected answer key on GitHub; CLIENT_SELF_CHECK_NO_MASTERY. -->


<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-END-A02; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O36; SINGLE_ITEM_ID -->

**Bài 117.** "\(f=1+\frac2{x+1}\), \(f'&lt;0\) mọi \(x\in D\) nên f nghịch biến trên cả D." Phản biện bằng hai điểm.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Chỉ giảm mỗi khoảng \((-\infty;-1)\), \((-1;\infty)\). Chọn x1=−2, x2=0: f(x1)=−1&lt;f(x2)=3; không giảm trên toàn hợp.

**Nếu làm sai:** Kiểm lại miền, điểm cấm, giới hạn một phía, biên và đơn vị trước kết luận.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-END-P03; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O36; SINGLE_ITEM_ID -->

**Bài 118.** \(h=\frac{x^2-4}{x-2}\), \(x\ne2\). "Có tiệm cận đứng \(x=2\) vì mẫu bằng 0." Giải thích.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Sai; h=x+2 trên D, lim x→2 h=4 hữu hạn, có lỗ \((2;4)\).

**Nếu làm sai:** Kiểm lại miền, điểm cấm, giới hạn một phía, biên và đơn vị trước kết luận.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-CHI-END-C03; SOURCE_BLOB: f0862dcdab21dec136e43969f45c42638e7c7574; OUTCOME: TOP10-O36; SINGLE_ITEM_ID -->

**Bài 119.** "f'(0)=0 với \(f=x^3\) nên \(x=0\) là cực tiểu." Đúng hay sai?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Sai, \(f'=3x^2\) không đổi dấu, f tăng qua0; không có cực trị tại0.

**Nếu làm sai:** Kiểm lại miền, điểm cấm, giới hạn một phía, biên và đơn vị trước kết luận.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP10-P36; SOURCE_BLOB: 5f6ab764df6541ada9b4d4475403d29984d8e7da; OUTCOME: TOP10-O36; SINGLE_ITEM_ID -->

**Bài 120.** \(g(x)=1-(x-2)^2\) trên miền \((0;3)\) có đạt GTLN/GTNN không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** GTLN=1 tại \(x=2\); không có GTNN (infimum −3 không đạt).

**Lời giải có suy luận và điều kiện:** Trên \((0;3)\), \(g(x)=1-(x-2)^2\le1\) và bằng1 tại \(x=2\) thuộc miền, nên GTLN=1 đạt ở \(x=2\). Nhưng khi \(x\to0^+\), \(g\to-3\), và mọi \(x\in(0;3)\) đều có g(x)>−3, nên không có GTNN (infimum −3). Miền mở vẫn có thể đạt max ở nội miền.

**Nếu làm sai:** Đừng kết luận mọi hàm trên miền mở đều không có GTLN. Kiểm liệu điểm cực trị nội miền có đạt chặn trên hay không.

</details>

<!-- TOPIC10_APPROVED_SOURCE_END -->
<span data-topic-w1-source-end="luyen-tap" hidden></span>
<p class="topic-w1-end-nav"><a href="../../">← Tổng quan các Chuyên đề</a></p>
