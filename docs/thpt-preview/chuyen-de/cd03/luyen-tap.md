---
hide:
  - toc
---

<div class="thpt-r4-screen topic-w1-release-nav" data-thpt-r4 data-topic-w1="03" data-topic-w1-part="luyen-tap">
<p class="thpt-r4-eyebrow">HỌC THEO CHUYÊN ĐỀ · CĐ03 · TOÁN THPT</p>
<nav class="thpt-sgk-lesson-nav" aria-label="Điều hướng Chuyên đề 03">
<a href="../../cd02/kien-thuc/">← Chuyên đề trước</a>
<a href="../../cd04/kien-thuc/">Chuyên đề sau →</a>
<a href="../kien-thuc/">Kiến thức</a>
<a href="../tu-kiem-tra/">Tự kiểm tra</a>
</nav>
<p class="topic-w1-back"><a href="../../">← Tổng quan các Chuyên đề</a></p>


</div>
<link rel="stylesheet" href="../../../../assets/stylesheets/thpt-topic-w1-golden-v1.css">
<script src="../../../../assets/javascripts/thpt-topic-w1-golden-v1.js" defer></script>
<div class="topic-w1-boot-status" role="status" aria-live="polite">Đang chuẩn bị các nhóm luyện tập…</div>
<script>
/* Gate before learner-visible Markdown: no raw source flash, safe fallback. */
(function(){
 var html=document.documentElement;
 html.classList.add("topic-w1-pending");
 document.addEventListener("DOMContentLoaded",function(){setTimeout(function(){
  if(!html.classList.contains("topic-w1-pending"))return;
  html.classList.remove("topic-w1-pending");
  html.classList.add("topic-w1-fallback");
  var status=document.querySelector(".topic-w1-boot-status");
  if(status)status.textContent="Giao diện tương tác chưa tải được. Nội dung gốc vẫn có thể đọc bên dưới.";
 },0)},{once:true});
})();
</script>

<span data-topic-w1-source-start="luyen-tap" hidden></span>

<!-- TOPIC03_APPROVED_SOURCE_START -->
<!-- Q18 SOURCE_LEARNER_BLOB bd3b88b635b203872a9afa5893cc1e3af3e7d7c6; Q18_RECEIPT_BLOB 28c43a014a015b1c81986e0b9c7b7127c3dfe55b; AUTHORING_PR #888; PUBLIC_PROJECTION_ONLY -->

# Luyện tập

Em hãy làm từng bài trước khi mở **Lời giải**. Khi bình phương hoặc khử mẫu, ghi điều kiện và kiểm từng nghiệm ứng viên bằng cách thay vào phương trình gốc. Với tự luận, tự so các bước theo rubric sau khi hoàn thành.

## 1. Phép biến đổi và phương trình cơ bản

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD01; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O01; NOT_NEW_SOURCE -->

**Bài 1.**

Giải \(2x+6=14\) và chỉ rõ phép biến đổi tương đương.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(S=\{4\}\).

Trừ 6 ở cả hai vế: \(2x=8\); chia \(2>0\) (với phương trình, chỉ cần chia số khác 0) được \(x=4\). Thay \(2\cdot4+6=14\). Cả hai bước đều đảo ngược được nên tập nghiệm giữ nguyên.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD02; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O01; NOT_NEW_SOURCE -->

**Bài 2.**

So sánh tập nghiệm của \(x=3\) và \(x^2=9\). Có được thay kí hiệu kéo theo bằng tương đương khi bình phương không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(x=3\) có \(S_1=\{3\}\); \(x^2=9\) có \(S_2=\{-3;3\}\); không tương đương.

Từ \(x=3\) suy ra \(x^2=9\), nhưng từ \(x^2=9\) chỉ suy ra \(x=\pm3\). Phép bình phương mất thông tin dấu; muốn biến đổi hai chiều phải thêm điều kiện \(x\ge0\) trong ví dụ này.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD03; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O02; NOT_NEW_SOURCE -->

**Bài 3.**

Giải \(3(x-2)=2x+5\) và thử lại nghiệm.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(S=\{11\}\).

Khai triển \(3x-6=2x+5\Leftrightarrow x=11\). Thay: \(3\cdot9=27\) và \(2\cdot11+5=27\). Phép chuyển vế, thu gọn là tương đương trên \(\mathbb R\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD04; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O02; NOT_NEW_SOURCE -->

**Bài 4.**

Biện luận phương trình \(mx=2m\) theo tham số thực m.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Nếu \(m\ne0\) thì \(S=\{2\}\); nếu \(m=0\) thì \(S=\mathbb R\).

Với \(m\ne0\), chia cả hai vế cho m được \(x=2\). Với \(m=0\), phương trình là \(0=0\), mọi số thực đều thỏa. Không được chia cho biểu thức có thể bằng 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD05; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O03; NOT_NEW_SOURCE -->

**Bài 5.**

Giải \((x-2)(2x+3)=0\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(S=\{2;-\frac32\}\).

Tích bằng 0 khi ít nhất một thừa số bằng 0. \(x-2=0\Rightarrow x=2\); \(2x+3=0\Rightarrow x=-\frac32\). Cả hai làm tích bằng 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD06; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O03; NOT_NEW_SOURCE -->

**Bài 6.**

Giải \((x-1)^2(x+4)=0\); nghiệm kép có đếm là hai nghiệm phân biệt không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(S=\{1;-4\}\); chỉ 2 giá trị phân biệt.

\((x-1)^2=0\Leftrightarrow x=1\); \(x+4=0\Leftrightarrow x=-4\). Bội của nghiệm 1 là 2 nhưng tập nghiệm chỉ ghi mỗi giá trị một lần.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD07; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O04; NOT_NEW_SOURCE -->

**Bài 7.**

Giải \(2x^2-5x-3=0\) bằng biệt thức hoặc phân tích nhân tử.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(S=\{-\frac12;3\}\).

\(\Delta=(-5)^2-4\cdot2\cdot(-3)=49\). \(x=\frac{5\pm7}{4}\) cho 3 và \(-\frac12\). Đồng thời \((2x+1)(x-3)=0\); hai cách đối chiếu nhau.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD08; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O04; NOT_NEW_SOURCE -->

**Bài 8.**

Tìm tập nghiệm thực của \(x^2+2x+5=0\); giải thích vì sao vô nghiệm.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(S=\varnothing\) trên \(\mathbb R\).

\(\Delta=2^2-4\cdot1\cdot5=-16&lt;0\), nên không có nghiệm thực; hoặc \((x+1)^2+4=0\) là bất khả thi vì vế trái ≥4.

</details>

## 2. Miền xác định của phân thức và giá trị tuyệt đối

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD09; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O05; NOT_NEW_SOURCE -->

**Bài 9.**

Giải \(\frac{x^2-4}{x-2}=0\). Giải thích vì sao \(x=2\) bị loại.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(S=\{-2\}\).

Điều kiện \(x\ne2\). Tử \((x-2)(x+2)=0\) cho \(x=2\) hoặc \(x=-2\); chỉ −2 hợp miền. Rút gọn thành \(x+2=0\) chỉ được dùng trên miền \(x\ne2\), không tự lấp lỗ \(x=2\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD10; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O05; NOT_NEW_SOURCE -->

**Bài 10.**

Giải \(\frac1{x-1}+\frac1{x+1}=1\) trong \(\mathbb R\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(S=\{1-\sqrt2;1+\sqrt2\}\).

Điều kiện \(x\ne\pm1\). Quy đồng thành \(\frac{2x}{x^2-1}=1\); nhân với mẫu khác 0 cho \(2x=x^2-1\Rightarrow x^2-2x-1=0\Rightarrow x=1\pm\sqrt2\). Hai nghiệm đều khác ±1 nên được nhận.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD11; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O06; NOT_NEW_SOURCE -->

**Bài 11.**

Giải \(\lvert2x-3\rvert=5\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(S=\{-1;4\}\).

Vì \(5\ge0\), \(\lvert2x-3\rvert=5\) khi và chỉ khi \(2x-3=5\) hoặc \(2x-3=-5\). Hai nhánh cho \(x=4\) và \(x=-1\); thử lại cả hai có giá trị tuyệt đối 5.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD12; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O06; NOT_NEW_SOURCE -->

**Bài 12.**

Giải \(\lvert x-2\rvert=x\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(S=\{1\}\).

Vế trái ≥0 nên \(x\ge0\). Nếu \(x\ge2\) thì \(\lvert x-2\rvert=x-2\), không thể bằng x; nếu \(0\le x&lt;2\) thì \(\lvert x-2\rvert=2-x=x\Rightarrow x=1\) hợp miền. Thử \(\lvert-1\rvert=1\).

</details>

## 3. Phương trình chứa căn và kiểm nghiệm

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B18-C01; ORIGINAL_BLOB: 1223d4c2b574433479c5d222dbeff363718ee4bb; OUTCOME: TOP03-O09; NOT_NEW_SOURCE -->

**Bài 13.**

Giải \(\sqrt{x+5}=x-1\) trong \(\mathbb R\).

<details markdown="1"><summary>Lời giải</summary>

\(S=\{4\}\). Điều kiện \(x\ge1\); bình phương \(x+5=(x-1)^2\Leftrightarrow (x-4)(x+1)=0\). Loại −1; thử \(x=4\) được \(3=3\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B18-C02; ORIGINAL_BLOB: 1223d4c2b574433479c5d222dbeff363718ee4bb; OUTCOME: TOP03-O08; NOT_NEW_SOURCE -->

**Bài 14.**

Giải \(\sqrt{(x+4)^2}=\sqrt{x+4}\) trong \(\mathbb R\).

<details markdown="1"><summary>Lời giải</summary>

\(S=\{-4;-3\}\). Điều kiện \(x+4\ge0\). Đặt \(u=x+4\ge0\): \(u^2=u\) cho \(u=0\) hoặc \(u=1\); hai giá trị đều thỏa.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B18-P01; ORIGINAL_BLOB: 1223d4c2b574433479c5d222dbeff363718ee4bb; OUTCOME: TOP03-O09; NOT_NEW_SOURCE -->

**Bài 15.**

Giải \(\sqrt{3x+4}=x\).

<details markdown="1"><summary>Lời giải</summary>

\(S=\{4\}\). Điều kiện \(x\ge0\), bình phương được \((x-4)(x+1)=0\); loại −1, thử \(x=4\): \(\sqrt{16}=4\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B18-P02; ORIGINAL_BLOB: 1223d4c2b574433479c5d222dbeff363718ee4bb; OUTCOME: TOP03-O09; NOT_NEW_SOURCE -->

**Bài 16.**

Giải \(\sqrt{2x^2+9}=x+3\).

<details markdown="1"><summary>Lời giải</summary>

\(S=\{0;6\}\). Điều kiện \(x\ge-3\); bình phương được \(x(x-6)=0\); thử \(x=0\) và \(x=6\) đều đúng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B18-P03; ORIGINAL_BLOB: 1223d4c2b574433479c5d222dbeff363718ee4bb; OUTCOME: TOP03-O10; NOT_NEW_SOURCE -->

**Bài 17.**

Giải trên \(\mathbb R\): \(\sqrt{x^2+7x+11}=\sqrt{x+3}\).

<details markdown="1"><summary>Lời giải</summary>

\(S=\{-2\}\). Bình phương được \((x+2)(x+4)=0\); ứng viên −4 làm căn \(\sqrt{x+3}\) có biểu thức dưới căn bằng −1, loại; \(x=-2\) thỏa cả hai vế bằng 1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: HPT-G10-CHVI-WRI-18-01; ORIGINAL_BLOB: 4da918f36d30c9b7110099e81fc88943e5b7705b; OUTCOME: TOP03-O08; NOT_NEW_SOURCE -->

**Bài 18.**

Giải trong \(\mathbb R\) phương trình \(\sqrt{x^2+4x+4}=\sqrt{2x+4}\). Nêu điều kiện và kiểm tra nghiệm.

<details markdown="1"><summary>Lời giải và rubric</summary>

Điều kiện \(x\ge-2\). Bình phương \((x+2)^2=2x+4\Leftrightarrow x^2+2x=0\Leftrightarrow x(x+2)=0\); ứng viên \(x=0\) và \(x=-2\) đều đạt điều kiện và thay lại lần lượt được \(2=2\) và \(0=0\). \(S=\{-2;0\}\).
&lt;table>&lt;thead>&lt;tr>&lt;th>Tiêu chí&lt;/th>&lt;th>Điểm&lt;/th>&lt;/tr>&lt;/thead>&lt;tbody>&lt;tr>&lt;td>Điều kiện xác định&lt;/td>&lt;td>1&lt;/td>&lt;/tr>&lt;tr>&lt;td>Bình phương đúng&lt;/td>&lt;td>1&lt;/td>&lt;/tr>&lt;tr>&lt;td>Tìm nghiệm ứng viên&lt;/td>&lt;td>1&lt;/td>&lt;/tr>&lt;tr>&lt;td>Thử lại hai nghiệm&lt;/td>&lt;td>1&lt;/td>&lt;/tr>&lt;tr>&lt;td>Tập nghiệm và kết luận&lt;/td>&lt;td>1&lt;/td>&lt;/tr>&lt;/tbody>&lt;/table>

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD13; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O07; NOT_NEW_SOURCE -->

**Bài 19.**

Giải \(\sqrt{x+2}=x\); chỉ rõ nghiệm ngoại lai sau bình phương.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(S=\{2\}\). Nghiệm ứng viên −1 bị loại.

Vế phải là x nên bắt buộc \(x\ge0\). Bình phương \(x+2=x^2\Leftrightarrow (x-2)(x+1)=0\), suy ra \(x=2\) hoặc \(x=-1\); chỉ \(x=2\) hợp dấu vế phải, thử \(\sqrt4=2\). Với −1, \(\sqrt1=1\ne-1\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD14; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O07; NOT_NEW_SOURCE -->

**Bài 20.**

Giải \(\sqrt{x^2}=x\) trong \(\mathbb R\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(S=[0;+\infty)\).

\(\sqrt{x^2}=\lvert x\rvert\), không tự bằng x khi x âm. Điều kiện \(\lvert x\rvert=x\Leftrightarrow x\ge0\). Với \(x=-2\), vế trái 2 còn vế phải −2, không bằng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD15; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O08; NOT_NEW_SOURCE -->

**Bài 21.**

Giải \(\sqrt{3x+1}=\sqrt{x+7}\) trong \(\mathbb R\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(S=\{3\}\).

Điều kiện \(3x+1\ge0\) và \(x+7\ge0\), suy ra \(x\ge-\frac13\). Hai căn không âm bằng nhau khi và chỉ khi \(3x+1=x+7\Rightarrow x=3\). Thử hai vế \(\sqrt{10}\) bằng nhau.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD16; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O09; NOT_NEW_SOURCE -->

**Bài 22.**

Giải \(\sqrt{5x+4}=x+2\). Phương trình có thể có hai nghiệm hay không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(S=\{0;1\}\).

Điều kiện \(x+2\ge0\) và \(5x+4\ge0\). Bình phương \(5x+4=(x+2)^2\Rightarrow x^2-x=0\), suy ra \(x=0\) hoặc \(x=1\). Cả hai thỏa: \(\sqrt4=2=0+2\), \(\sqrt9=3=1+2\). Không được mặc định một căn có đúng một nghiệm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD17; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O10; NOT_NEW_SOURCE -->

**Bài 23.**

Giải \(\sqrt{x+4}=\sqrt{x^2+5x+2}\) trong \(\mathbb R\) và xác định nghiệm ứng viên không hợp lệ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(S=\{-2+\sqrt6\}\); \(-2-\sqrt6\) bị loại.

Điều kiện \(x+4\ge0\) và \(x^2+5x+2\ge0\). Bình phương \(x+4=x^2+5x+2\Leftrightarrow x^2+4x-2=0\Rightarrow x=-2\pm\sqrt6\). Với \(-2-\sqrt6&lt;-4\), \(x+4&lt;0\), không có căn thực. Với \(-2+\sqrt6>-4\), hai biểu thức dưới căn cùng bằng \(x+4=2+\sqrt6>0\) nên nhận.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD18; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O10; NOT_NEW_SOURCE -->

**Bài 24.**

Giải \(\sqrt{x^2+9}=x-1\); vì sao phương trình đại số sau bình phương có nghiệm mà phương trình gốc vô nghiệm?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(S=\varnothing\).

Bên phải \(x-1\) phải không âm, nên \(x\ge1\). Bình phương \(x^2+9=(x-1)^2\Rightarrow 9=-2x+1\Rightarrow x=-4\), trái \(x\ge1\). Trực tiếp tại −4: căn \(\sqrt{25}=5\) còn \(-4-1=-5\). Không có nghiệm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-W01; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O10; NOT_NEW_SOURCE -->

**Bài 25.**

So sánh tập nghiệm thực của (A) \(\sqrt{x+7}=x-1\) và (B) \(\sqrt{x+7}=\lvert x-1\rvert\). (a) Viết miền xác định và điều kiện dấu cho mỗi phương trình. (b) Bình phương và giải phương trình chung. (c) Lọc nghiệm của từng phương trình bằng phép thế và giải thích tại sao hai tập nghiệm khác nhau.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** Đặt \(r_-=\frac{3-\sqrt{33}}2\), \(r_+=\frac{3+\sqrt{33}}2\). \(S_A=\{r_+\}\); \(S_B=\{r_-;r_+\}\).

Hai phương trình đều cần \(x+7\ge0\). (A) còn cần \(x-1\ge0\Rightarrow x\ge1\); (B) có vế phải \(\lvert x-1\rvert\ge0\) tự động. Bình phương cho \(x+7=(x-1)^2\Leftrightarrow x^2-3x-6=0\), thu được \(r_-\), \(r_+\). Vì \(\sqrt{33}>5\) nên \(r_-=\frac{3-\sqrt{33}}2&lt;-1&lt;1\), nhưng \(r_->-7\) (do \(\sqrt{33}&lt;17\)) nên chỉ (B) nhận \(r_-\); \(r_+>1\) nhận cả hai. Tại mỗi nghiệm, \(x+7=(x-1)^2\ge0\) nên \(\sqrt{x+7}=\lvert x-1\rvert\). Với (A), \(r_-\) sai vì \(x-1\) âm; \(r_+\) đúng.

**Rubric tự đối chiếu:** 7 điểm: miền \(x\ge-7\) và điều kiện \(x\ge1\) riêng (A) (2đ); bình phương và nghiệm \(r_-\), \(r_+\) đúng (2đ); \(S_A\) có đúng một nghiệm với lập luận dấu (1đ); \(S_B\) có hai nghiệm, kiểm (B) (1đ); giải thích phép bình phương không tương đương nếu bỏ điều kiện dấu (1đ).

</details>

## 4. Đổi biến và mô hình hóa

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B18-P04; ORIGINAL_BLOB: 1223d4c2b574433479c5d222dbeff363718ee4bb; OUTCOME: TOP03-O12; NOT_NEW_SOURCE -->

**Bài 26.**

Tam giác vuông có hai cạnh góc vuông dài \(x>0\) mét và 3 mét; cạnh huyền dài \(x+1\) mét. Tìm x.

<details markdown="1"><summary>Lời giải</summary>

\(x=4\,\mathrm m\). Từ Pythagore: \(\sqrt{x^2+9}=x+1\), bình phương được \(x^2+9=x^2+2x+1\Rightarrow x=4\); kiểm \(\sqrt{25}=5\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: HPT-G10-CHVI-WRI-18-02; ORIGINAL_BLOB: 4da918f36d30c9b7110099e81fc88943e5b7705b; OUTCOME: TOP03-O12; NOT_NEW_SOURCE -->

**Bài 27.**

Tam giác vuông có hai cạnh góc vuông \(x>0\) m và 5 m, cạnh huyền \(x+1\) m. (a) Lập phương trình chứa căn; (b) giải và kiểm nghiệm; (c) nêu độ dài ba cạnh.

<details markdown="1"><summary>Lời giải và rubric</summary>

\(\sqrt{x^2+25}=x+1\). Bình phương được \(x^2+25=x^2+2x+1\Rightarrow x=12\). Thử lại \(\sqrt{169}=13=12+1\). Ba cạnh là 12 m, 5 m, 13 m.
&lt;table>&lt;thead>&lt;tr>&lt;th>Tiêu chí&lt;/th>&lt;th>Điểm&lt;/th>&lt;/tr>&lt;/thead>&lt;tbody>&lt;tr>&lt;td>Dựng điều kiện và đại lượng&lt;/td>&lt;td>1&lt;/td>&lt;/tr>&lt;tr>&lt;td>Lập phương trình&lt;/td>&lt;td>2&lt;/td>&lt;/tr>&lt;tr>&lt;td>Giải x&lt;/td>&lt;td>1&lt;/td>&lt;/tr>&lt;tr>&lt;td>Thử nghiệm&lt;/td>&lt;td>1&lt;/td>&lt;/tr>&lt;tr>&lt;td>Kết luận 3 cạnh, đơn vị&lt;/td>&lt;td>1&lt;/td>&lt;/tr>&lt;/tbody>&lt;/table>

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD19; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O11; NOT_NEW_SOURCE -->

**Bài 28.**

Giải phương trình \(x^4-5x^2+4=0\) trong \(\mathbb R\) bằng ẩn phụ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(S=\{-2;-1;1;2\}\).

Đặt \(t=x^2\ge0\); khi đó \(t^2-5t+4=(t-1)(t-4)=0\Rightarrow t\in\{1;4\}\), đều không âm. Quay lại \(x^2=1\Rightarrow x=\pm1\); \(x^2=4\Rightarrow x=\pm2\). Thử bằng cách thay t vào phương trình.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD20; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O11; NOT_NEW_SOURCE -->

**Bài 29.**

Giải \(x^4+3x^2-4=0\) bằng \(t=x^2\); giải thích vì sao một giá trị t bị loại.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(S=\{-1;1\}\).

Đặt \(t=x^2\ge0\), giải \(t^2+3t-4=(t+4)(t-1)=0\) cho \(t=1\) hoặc \(t=-4\). Vì \(t\ge0\), loại −4; từ \(x^2=1\) được \(x=\pm1\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD21; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O12; NOT_NEW_SOURCE -->

**Bài 30.**

Một thang dài 10 m tựa tường, chân thang cách tường \(x>0\) m, độ cao đầu thang là \(x+2\) m. Tìm x và độ cao.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(x=6\,\mathrm m\); độ cao 8 m.

Pythagore: \(\sqrt{x^2+(x+2)^2}=10\), \(x>0\). Bình phương \(x^2+(x+2)^2=100\Rightarrow 2x^2+4x-96=0\Rightarrow (x+8)(x-6)=0\). Chỉ \(x=6\) hợp chiều dài dương; thử \(\sqrt{36+64}=10\). Độ cao 8 m.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-W02; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O12; NOT_NEW_SOURCE -->

**Bài 31.**

Một xe dự định chạy 120 km với vận tốc không đổi \(v>0\) km/h. Nếu tăng vận tốc thêm 20 km/h, xe đến sớm hơn 1 giờ. (a) Lập phương trình theo v và ghi điều kiện. (b) Giải phương trình, loại nghiệm không hợp thực tế. (c) Tính hai thời gian và thử điều kiện sớm hơn 1 giờ.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(v=40\,\mathrm{km/h}\), sau tăng là 60 km/h; thời gian lần lượt 3 giờ và 2 giờ.

Điều kiện \(v>0\), \(v+20>0\); thời gian \(t_1=\frac{120}{v}\), \(t_2=\frac{120}{v+20}\). \(t_1-t_2=1\Rightarrow \frac{2400}{v(v+20)}=1\Rightarrow v^2+20v-2400=0\Rightarrow (v-40)(v+60)=0\). Ứng viên 40, −60; chỉ 40 phù hợp \(v>0\). Thử \(\frac{120}{40}=3\), \(\frac{120}{60}=2\), chênh đúng 1 giờ. −60 có nghĩa vận tốc âm nên loại.

**Rubric tự đối chiếu:** 7 điểm: ghi \(v>0\) và đơn vị (1đ); lập \(t_1,t_2\) đúng (1đ); lập phương trình thời gian đúng (2đ); giải nghiệm ứng viên 40, −60 (1đ); lọc −60 và lý do (1đ); kiểm \(3-2=1\), kết luận (1đ).

</details>

<!-- TOPIC03_APPROVED_SOURCE_END -->
<span data-topic-w1-source-end="luyen-tap" hidden></span>

<p class="topic-w1-end-nav"><a href="../../">← Tổng quan các Chuyên đề</a></p>
