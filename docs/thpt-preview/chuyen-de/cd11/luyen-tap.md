---
hide:
  - toc
---

<div class="thpt-r4-screen topic-w1-release-nav" data-thpt-r4 data-topic-w1="11" data-topic-w1-part="luyen-tap">
<p class="thpt-r4-eyebrow">HỌC THEO CHUYÊN ĐỀ · CĐ11 · TOÁN THPT</p>
<nav class="thpt-sgk-lesson-nav" aria-label="Điều hướng Chuyên đề 11">
<a href="../../cd10/kien-thuc/">← Chuyên đề trước</a>
<a href="../../cd12/kien-thuc/">Chuyên đề sau →</a>
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

<!-- TOPIC11_APPROVED_SOURCE_START -->
<!-- Q18 SOURCE_LEARNER_BLOB 64688cf81991a432264c06a2ff0a908371ca1f21; Q18_RECEIPT_BLOB e63f9a5df598ea3c6d57efdbeb6808e86ad9f68f; AUTHORING_PR #887; PUBLIC_PROJECTION_ONLY -->

# Luyện tập

Làm từng bài trước khi mở **Lời giải**. Khi tính nguyên hàm, kiểm đạo hàm và miền; với tích phân, kiểm cận, dấu và đơn vị; với hình học, mô tả hình phẳng/tiết diện trước khi lập tích phân. Rubric đi kèm giúp em tự xem lại từng bước lập luận, không phải bảng điểm đánh giá độc lập.

## 1. Nguyên hàm và điều kiện đầu

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-W01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O01; SINGLE_ITEM_ID -->

**Bài 1.** Viết lời giải kiểm tra hai hàm \(F(x)=x^3-2x\) và \(G(x)=x^3-2x+6\) có cùng là nguyên hàm của \(f(x)=3x^2-2\) không.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** Cả hai đúng; \(G-F=6\).

**Lời giải:** \(F'=G'=3x^2-2\); cùng trên \(\mathbb R\); \(G-F=6\) là hằng số.

**Rubric tự luận /5:** 2đ tính đúng hai đạo hàm; 1đ đối chiếu f; 1đ xét chung khoảng \(\mathbb R\); 1đ kết luận hai hàm chênh hằng số.

**Nếu làm sai:** Muốn chứng minh nguyên hàm, hãy lấy đạo hàm F và so với f trên đúng khoảng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-A01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O01; SINGLE_ITEM_ID -->

**Bài 2.** Mô hình vị trí \(s(t)=t^3+2t\) (m) với \(t\ge0\). Viết vận tốc v(t).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(v(t)=3t^2+2\) (m/s).

**Lời giải:** Lấy đạo hàm vị trí theo thời gian; \(v(t)=s'(t)=3t^2+2\), \(t\ge0\).

**Nếu làm sai:** Muốn chứng minh nguyên hàm, hãy lấy đạo hàm F và so với f trên đúng khoảng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-P01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O01; SINGLE_ITEM_ID -->

**Bài 3.** Kiểm tra \(G(x)=\frac{x^3}{3}+x\) có phải nguyên hàm của \(g(x)=x^2+1\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có.

**Lời giải:** \(G'(x)=x^2+1\) trên \(\mathbb R\). Giải thích chọn cách: Đạo hàm đáp án ứng viên để kiểm đúng f; không kiểm bằng cách thay một giá trị x.

**Nếu làm sai:** Muốn chứng minh nguyên hàm, hãy lấy đạo hàm F và so với f trên đúng khoảng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-C01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O01; SINGLE_ITEM_ID -->

**Bài 4.** \(F(x)=2x^3-5x+7\) có là nguyên hàm của \(f(x)=6x^2-5\) trên \(\mathbb R\) không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có.

**Lời giải:** \(F'(x)=6x^2-5=f(x)\) trên \(\mathbb R\). Giải thích chọn cách: Đạo hàm đáp án ứng viên để kiểm đúng f; không kiểm bằng cách thay một giá trị x.

**Nếu làm sai:** Muốn chứng minh nguyên hàm, hãy lấy đạo hàm F và so với f trên đúng khoảng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P01; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O01; SINGLE_ITEM_ID -->

**Bài 5.** Tìm họ nguyên hàm \(f(x)=6x-4\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(F(x)=3x^2-4x+C\) trên \(\mathbb R\).

**Lời giải:** Muốn \(F'=6x-4\), chọn \(F=3x^2-4x+C\) vì \((3x^2)'=6x\) và \((-4x)'=-4\). Hai nguyên hàm trên khoảng \(\mathbb R\) khác nhau hằng số C; kiểm ngược \(F'=6x-4\).

**Nếu làm sai:** Nếu quên +C, nhớ đạo hàm mọi hằng số đều bằng 0, nên có cả một họ nguyên hàm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-W02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O02; SINGLE_ITEM_ID -->

**Bài 6.** Tìm F nếu \(F'(x)=6x\) và \(F(-1)=1\); kiểm lại đầy đủ.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(F(x)=3x^2-2\).

**Lời giải:** \(F=3x^2+C\); \(F(-1)=3+C=1\) nên \(C=-2\); đạo hàm 6x và giá trị tại -1 bằng 1.

**Rubric tự luận /5:** 2đ lấy đúng họ nguyên hàm; 1đ lập điều kiện; 1đ giải C; 1đ kiểm lại cả hai điều kiện.

**Nếu làm sai:** Viết \(F_0+C\) rồi thay \(F(a)=b\) vào \(F\), đừng thay vào đạo hàm \(F'\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-A02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O02; SINGLE_ITEM_ID -->

**Bài 7.** Một vật có \(v(t)=4t\) (m/s), \(s(0)=6\) m. Viết vị trí s(t) cho \(t\ge0\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(s(t)=2t^2+6\).

**Lời giải:** Từ \(s'=4t\) có \(s=2t^2+C\); điều kiện \(s(0)=6\) cho \(C=6\).

**Nếu làm sai:** Viết \(F_0+C\) rồi thay \(F(a)=b\) vào \(F\), đừng thay vào đạo hàm \(F'\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-P02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O02; SINGLE_ITEM_ID -->

**Bài 8.** \(F'(x)=2x\), \(F(2)=9\). Tìm F.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(F(x)=x^2+5\).

**Lời giải:** \(F=x^2+C\); \(4+C=9\) nên \(C=5\). Giải thích chọn cách: Tích phân được F+C; thay \(x_0\) vào F+C; giải C; kiểm lại đạo hàm và điều kiện đầu.

**Nếu làm sai:** Viết \(F_0+C\) rồi thay \(F(a)=b\) vào \(F\), đừng thay vào đạo hàm \(F'\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-C02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O02; SINGLE_ITEM_ID -->

**Bài 9.** Viết họ nguyên hàm của 4x trên \(\mathbb R\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(2x^2+C\).

**Lời giải:** Vì \((2x^2)'=4x\) nên họ là \(2x^2+C\).

**Nếu làm sai:** Viết \(F_0+C\) rồi thay \(F(a)=b\) vào \(F\), đừng thay vào đạo hàm \(F'\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P02; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O02; SINGLE_ITEM_ID -->

**Bài 10.** \(F'=3x^2\), \(F(2)=9\); tìm F.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(F=x^3+C\), \(C=9-8=1\); \(F=x^3+1\).

**Lời giải:** Từ \(F'=3x^2\) suy \(F=x^3+C\). Điều kiện \(F(2)=9\) cho \(8+C=9\Rightarrow C=1\); vậy \(F=x^3+1\). Kiểm \(F'=3x^2\) và \(F(2)=9\).

**Nếu làm sai:** Thay điều kiện giá trị đầu vào F, không vào F'; C chỉ xuất hiện khi nguyên hàm xong.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-W01; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O02; SINGLE_ITEM_ID -->

**Bài 11.** Cho \(F'(x)=3x^2-4x+1\) trên \(\mathbb R\) và \(F(1)=2\). (a) Viết họ nguyên hàm. (b) Tìm C. (c) Tính \(F(2)\). (d) Chứng minh nghiệm là duy nhất trên \(\mathbb R\) trong họ nguyên hàm.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(F=x^3-2x^2+x+2\); \(F(2)=8-8+2+2=4\); \(C=2\).

**Lời giải:** Nguyên hàm \(F=x^3-2x^2+x+C\); \(F(1)=1-2+1+C=C=2\). \(F(2)=8-8+2+2=4\). Kiểm \(F'=3x^2-4x+1\). Hai nguyên hàm của cùng đạo hàm trên khoảng \(\mathbb R\) chỉ khác nhau hằng; dữ kiện \(F(1)=2\) xác định C duy nhất.

**Rubric /7:**
1. Viết nguyên hàm \(x^3\) đúng (1đ)
2. Viết \(-2x^2\) đúng (1đ)
3. Viết \(+x\) và +C đúng (1đ)
4. Thay \(F(1)\) chính xác (1đ)
5. Giải \(C=2\) (1đ)
6. Tính \(F(2)=4\) (1đ)
7. Kiểm đạo hàm/giải thích duy nhất trên \(\mathbb R\) (1đ)

**Nếu làm sai:** Đặt \(F=F_0+C\) rồi thay điều kiện vào F, không phải vào F'.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-W03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O03; SINGLE_ITEM_ID -->

**Bài 12.** Giải đầy đủ \(\int (2x^3+6x-2)\,\mathrm dx\) và kiểm bằng đạo hàm.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(\frac{x^4}{2}+3x^2-2x+C\).

**Lời giải:** Từng hạng tử cho \(\frac{x^4}2,3x^2,-2x\); lấy đạo hàm khôi phục \(2x^3+6x-2\).

**Rubric tự luận /5:** 1đ nêu tuyến tính; 2đ tính ba hạng tử; 1đ +C; 1đ kiểm đạo hàm.

**Nếu làm sai:** Nhớ chia cho \(n+1\) khi \(n\ne-1\), giữ \(+C\) và kiểm đạo hàm ngược.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-A03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O03; SINGLE_ITEM_ID -->

**Bài 13.** Một đại lượng có \(q'(t)=3t^2+2\), \(q(0)=4\). Viết q(t).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(q(t)=t^3+2t+4\).

**Lời giải:** Nguyên hàm \(t^3+2t+C\), từ \(q(0)=4\) được \(C=4\).

**Nếu làm sai:** Nhớ chia cho \(n+1\) khi \(n\ne-1\), giữ \(+C\) và kiểm đạo hàm ngược.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-P03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O03; SINGLE_ITEM_ID -->

**Bài 14.** Tính \(\int (5x^4-4x+3)\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(x^5-2x^2+3x+C\).

**Lời giải:** Tách ba hạng tử, áp công thức lũy thừa và tuyến tính.

**Nếu làm sai:** Nhớ chia cho \(n+1\) khi \(n\ne-1\), giữ \(+C\) và kiểm đạo hàm ngược.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-C03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O03; SINGLE_ITEM_ID -->

**Bài 15.** Tính \(\int 6x^2\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(2x^3+C\).

**Lời giải:** Dùng \(n=2\): \(6\cdot\frac{x^3}3=2x^3\). Giải thích chọn cách: Tách đa thức thành các hạng tử, nâng số mũ một đơn vị, chia số mũ mới, rồi lấy đạo hàm kiểm.

**Nếu làm sai:** Nhớ chia cho \(n+1\) khi \(n\ne-1\), giữ \(+C\) và kiểm đạo hàm ngược.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P03; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O03; SINGLE_ITEM_ID -->

**Bài 16.** Tính \(\int (3x^{2}+4x-2)\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(x^3+2x^2-2x+C\).

**Lời giải:** Chọn nguyên hàm lần lượt của \(3x^2,4x,-2\) là \(x^3,2x^2,-2x\). Cộng lại được \(x^3+2x^2-2x+C\); đạo hàm ngược trả đúng \(3x^2+4x-2\).

**Nếu làm sai:** Quy tắc lũy thừa tăng số mũ thêm1 rồi chia hệ số mới; kiểm bằng đạo hàm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-W04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O04; SINGLE_ITEM_ID -->

**Bài 17.** Tính \(\int(\frac4x-x^{-2})\,\mathrm dx\) trên mỗi khoảng không chứa 0; kiểm đạo hàm.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(4\ln|x|+\frac1x+C\).

**Lời giải:** Một nguyên hàm của \(-x^{-2}\) là \(\frac1x\); đạo hàm của \(\frac1x\) là \(-\frac1{x^2}\).

**Rubric tự luận /5:** 1đ điều kiện \(x\ne0\); 2đ log và lũy thừa; 1đ +C; 1đ đạo hàm kiểm.

**Nếu làm sai:** Trên \(x&lt;0\) dùng \(\ln(-x)\), trên \(x>0\) dùng \(\ln x\); mỗi khoảng có hằng số riêng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-A04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O04; SINGLE_ITEM_ID -->

**Bài 18.** Biết \(F'(x)=\frac3x\) trên \(x>0\), \(F(1)=2\). Tính F(x).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(3\ln x+2\).

**Lời giải:** \(F=3\ln x+C\); \(\ln1=0\Rightarrow C=2\). Giải thích chọn cách: Nhận diện \(\frac1x\), tách tuyến tính các hạng khác, ghi điều kiện \(x\ne0\) và lấy đạo hàm kiểm.

**Nếu làm sai:** Trên \(x&lt;0\) dùng \(\ln(-x)\), trên \(x>0\) dùng \(\ln x\); mỗi khoảng có hằng số riêng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-P04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O04; SINGLE_ITEM_ID -->

**Bài 19.** Tính \(\int(\frac1x+2x)\,\mathrm dx\) trên \(x>0\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\ln x+x^2+C\).

**Lời giải:** Tính từng phần và ghi \(x>0\). Giải thích chọn cách: Nhận diện \(\frac1x\), tách tuyến tính các hạng khác, ghi điều kiện \(x\ne0\) và lấy đạo hàm kiểm.

**Nếu làm sai:** Trên \(x&lt;0\) dùng \(\ln(-x)\), trên \(x>0\) dùng \(\ln x\); mỗi khoảng có hằng số riêng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-C04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O04; SINGLE_ITEM_ID -->

**Bài 20.** Tính \(\int\frac2x\,\mathrm dx\) trên \(x&lt;0\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(2\ln|x|+C\).

**Lời giải:** Dùng nguyên hàm \(\ln|x|\) hợp lệ trên \((-\infty;0)\).

**Nếu làm sai:** Trên \(x&lt;0\) dùng \(\ln(-x)\), trên \(x>0\) dùng \(\ln x\); mỗi khoảng có hằng số riêng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P04; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O04; SINGLE_ITEM_ID -->

**Bài 21.** Tìm nguyên hàm \(\frac2x\) trên \((-\infty;0)\) biết \(F(-1)=3\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(F=2\ln(-x)+3\) trên \(x&lt;0\).

**Lời giải:** Trên \(x&lt;0\), \(\ln|x|=\ln(-x)\) hợp lệ. Họ nguyên hàm \(F=2\ln(-x)+C\), và \(F(-1)=2\ln1+C=C=3\). Vậy \(F=2\ln(-x)+3\). Kiểm \(F'=\frac2x\) trên nhánh âm.

**Nếu làm sai:** Không dùng \(\ln x\) cho \(x\) âm; phép đổi \(\ln|x|\) thành \(\ln(-x)\) chỉ hợp lệ trên \(x&lt;0\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-W02; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O04; SINGLE_ITEM_ID -->

**Bài 22.** Trên khoảng \((-\infty;0)\), cho \(F'(x)=\frac2x+\cos x\) và \(F(-1)=4\). (a) Tìm họ nguyên hàm. (b) Xác định F đúng miền với hằng C. (c) Kiểm đạo hàm và giá trị đầu. (d) Nêu vì sao không dùng \(\ln x\) trên khoảng âm.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(F(x)=2\ln(-x)+\sin x+4+\sin1\) (\(x&lt;0\)).

**Lời giải:** Vì \(x&lt;0\) nên \(\int\frac2x\,\mathrm dx=2\ln(-x)+C_1\), và \(\int\cos x\,\mathrm dx=\sin x+C_2\). Do đó \(F=2\ln(-x)+\sin x+C\). \(F(-1)=0-\sin1+C=4\Rightarrow C=4+\sin1\). Đạo hàm \(\ln(-x)\) là \(\frac{-1}{-x}=\frac1x\), nên \(F'=\frac2x+\cos x\); \(F(-1)=4\). \(\ln x\) không xác định thực nếu \(x&lt;0\).

**Rubric /7:**
1. Giữ miền \(x&lt;0\) (1đ)
2. Nguyên hàm \(\frac2x\) thành \(2\ln(-x)\) (1đ)
3. Nguyên hàm \(\cos x\) đúng (1đ)
4. Lập \(F=\ldots+C\) (1đ)
5. Tính \(C=4+\sin1\) (1đ)
6. Kiểm F' và \(F(-1)\) (1đ)
7. Giải thích \(\ln x\) không hợp lệ \(x&lt;0\) (1đ)

**Nếu làm sai:** Ghi \(\ln|x|\) trên mỗi khoảng không chứa0, sau mới dùng giá trị đầu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-W05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O05; SINGLE_ITEM_ID -->

**Bài 23.** Giải \(\int (2^x+3e^x)\,\mathrm dx\) và kiểm đạo hàm.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(\frac{2^x}{\ln2}+3e^x+C\).

**Lời giải:** Tách tuyến tính, phần \(2^x\) phải chia \(\ln2\); kiểm bằng đạo hàm.

**Rubric tự luận /5:** 1đ nêu \(a>0,a\ne1\); 2đ hai nguyên hàm đúng; 1đ hằng số; 1đ kiểm đạo hàm.

**Nếu làm sai:** Kiểm hệ số của đạo hàm hàm mũ bên trong: \(\int e^{kx}\,\mathrm dx=\frac{e^{kx}}k+C\) (với \(k\ne0\)).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-A05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O05; SINGLE_ITEM_ID -->

**Bài 24.** Lượng chất có \(q'(t)=3e^t\) và \(q(0)=5\). Viết q(t).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(q(t)=3e^t+2\).

**Lời giải:** \(q=3e^t+C\); \(3+C=5\Rightarrow C=2\). Giải thích chọn cách: Tách hệ số rồi chia \(\ln a\) nếu cơ số a không phải e.

**Nếu làm sai:** Kiểm hệ số của đạo hàm hàm mũ bên trong: \(\int e^{kx}\,\mathrm dx=\frac{e^{kx}}k+C\) (với \(k\ne0\)).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-P05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O05; SINGLE_ITEM_ID -->

**Bài 25.** Tính \(\int 2^x\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\frac{2^x}{\ln2}+C\).

**Lời giải:** \((2^x)'=2^x\ln2\), vì vậy chia \(\ln2\).

**Nếu làm sai:** Kiểm hệ số của đạo hàm hàm mũ bên trong: \(\int e^{kx}\,\mathrm dx=\frac{e^{kx}}k+C\) (với \(k\ne0\)).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-C05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O05; SINGLE_ITEM_ID -->

**Bài 26.** Tính \(\int e^x\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(e^x+C\).

**Lời giải:** Vì đạo hàm \(e^x\) là \(e^x\). Giải thích chọn cách: Tách hệ số rồi chia \(\ln a\) nếu cơ số a không phải e.

**Nếu làm sai:** Kiểm hệ số của đạo hàm hàm mũ bên trong: \(\int e^{kx}\,\mathrm dx=\frac{e^{kx}}k+C\) (với \(k\ne0\)).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P05; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O05; SINGLE_ITEM_ID -->

**Bài 27.** Tính \(\int (2e^{2x}+3^x)\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(e^{2x}+\frac{3^x}{\ln3}+C\).

**Lời giải:** Một nguyên hàm của \(2e^{2x}\) là \(e^{2x}\) vì đạo hàm của \(e^{2x}\) là \(2e^{2x}\). Một nguyên hàm của \(3^x\) là \(\frac{3^x}{\ln3}\) vì đạo hàm \(3^x\) bằng \(3^x\ln3\). Cộng được \(F=e^{2x}+\frac{3^x}{\ln3}+C\).

**Nếu làm sai:** Không áp quy tắc nguyên hàm \(x^n\) cho hàm có x ở số mũ; dùng đạo hàm mũ ngược.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-W06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O06; SINGLE_ITEM_ID -->

**Bài 28.** Tính \(\int(\frac1{\cos^2 x}+2\sin x)\,\mathrm dx\) trên khoảng \(\cos x\ne0\); kiểm bằng đạo hàm.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(\tan x-2\cos x+C\).

**Lời giải:** Dùng \((\tan x)'=\frac1{\cos^2 x}\) và \((-2\cos x)'=2\sin x\).

**Rubric tự luận /5:** 1đ điều kiện \(\cos x\ne0\); 2đ hai nguyên hàm; 1đ +C; 1đ kiểm đạo hàm.

**Nếu làm sai:** Nguyên hàm sin có dấu trừ, cos thành sin; góc phải là radian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-A06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O06; SINGLE_ITEM_ID -->

**Bài 29.** Vận tốc \(v(t)=2\cos t\), \(0\le t\le\frac{\pi}2\), vị trí \(s(0)=0\). Viết s(t).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(s(t)=2\sin t\).

**Lời giải:** \(s=2\sin t+C\); \(s(0)=0\Rightarrow C=0\). Giải thích chọn cách: Tách hệ số, ghi dấu âm chính xác ở nguyên hàm sin, kiểm bằng đạo hàm lượng giác.

**Nếu làm sai:** Nguyên hàm sin có dấu trừ, cos thành sin; góc phải là radian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-P06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O06; SINGLE_ITEM_ID -->

**Bài 30.** Tính \(\int (3\sin  x-2\cos  x)\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(-3\cos x-2\sin x+C\).

**Lời giải:** Từng hạng tử; đạo hàm của \(-3\cos x\) là \(+3\sin x\).

**Nếu làm sai:** Nguyên hàm sin có dấu trừ, cos thành sin; góc phải là radian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-C06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O06; SINGLE_ITEM_ID -->

**Bài 31.** Tính \(\int 2\cos  x\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(2\sin x+C\).

**Lời giải:** \((2\sin x)'=2\cos x\). Giải thích chọn cách: Tách hệ số, ghi dấu âm chính xác ở nguyên hàm sin, kiểm bằng đạo hàm lượng giác.

**Nếu làm sai:** Nguyên hàm sin có dấu trừ, cos thành sin; góc phải là radian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P06; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O06; SINGLE_ITEM_ID -->

**Bài 32.** Tính \(\int (2\cos  x-3\sin  x)\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(2\sin x+3\cos x+C\) (x radian).

**Lời giải:** Với \(x\) đo radian, một nguyên hàm của \(2\cos x\) là \(2\sin x\); một nguyên hàm của \(-3\sin x\) là \(3\cos x\) do \((\cos x)'=-\sin x\). Họ nguyên hàm là \(2\sin x+3\cos x+C\); kiểm ngược cả hai dấu.

**Nếu làm sai:** Quên dấu âm của đạo hàm cos dễ gây sai nguyên hàm sin; luôn đạo hàm kết quả để kiểm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-W07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O07; SINGLE_ITEM_ID -->

**Bài 33.** Lợi nhuận biên \(P'(x)=12x^2-4\), \(P(0)=100\). Tìm P(x), nêu đơn vị phù hợp nếu P tính bằng nghìn đồng.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(P(x)=4x^3-4x+100\) (nghìn đồng).

**Lời giải:** \(P=4x^3-4x+C\); \(C=100\); P' đúng, \(P(0)=100\).

**Rubric tự luận /5:** 1đ đọc P' đúng; 2đ nguyên hàm; 1đ điều kiện đầu; 1đ kiểm đơn vị và đạo hàm.

**Nếu làm sai:** Điều kiện đầu tìm C trong vị trí s; \(\int v\,\mathrm dt\) trên khoảng cho độ dời trên khoảng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-A07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O07; SINGLE_ITEM_ID -->

**Bài 34.** Một vật có \(a(t)=6t\), \(v(0)=2\), \(s(0)=1\). Viết v(t), s(t).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(v(t)=3t^2+2\); \(s(t)=t^3+2t+1\).

**Lời giải:** Hai lần nguyên hàm; mỗi lần dùng điều kiện đầu riêng.

**Nếu làm sai:** Điều kiện đầu tìm C trong vị trí s; \(\int v\,\mathrm dt\) trên khoảng cho độ dời trên khoảng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-P07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O07; SINGLE_ITEM_ID -->

**Bài 35.** Cho \(v(t)=4t^3\) và \(s(1)=5\). Tìm s(t).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(s(t)=t^4+4\).

**Lời giải:** \(s=t^4+C\); \(1+C=5\Rightarrow C=4\). Giải thích chọn cách: Đọc đúng đạo hàm, nguyên hàm, chọn C theo trạng thái ban đầu, kiểm thứ nguyên.

**Nếu làm sai:** Điều kiện đầu tìm C trong vị trí s; \(\int v\,\mathrm dt\) trên khoảng cho độ dời trên khoảng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B11-C07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O07; SINGLE_ITEM_ID -->

**Bài 36.** Cho \(s'(t)=6t\) và \(s(0)=3\), tìm s(t).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(s(t)=3t^2+3\).

**Lời giải:** Nguyên hàm 6t là \(3t^2+C\), \(C=3\). Giải thích chọn cách: Đọc đúng đạo hàm, nguyên hàm, chọn C theo trạng thái ban đầu, kiểm thứ nguyên.

**Nếu làm sai:** Điều kiện đầu tìm C trong vị trí s; \(\int v\,\mathrm dt\) trên khoảng cho độ dời trên khoảng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P07; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O07; SINGLE_ITEM_ID -->

**Bài 37.** Với \(v(t)=6t-4\), \(s(0)=3\), tìm s(2).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(s(2)=12-8+3=7\) m.

**Lời giải:** Vì \(s'=v=6t-4\), tích phân được \(s=3t^2-4t+C\). Dùng \(s(0)=3\Rightarrow C=3\); thế \(t=2\) cho \(s(2)=12-8+3=7\) m. Đây là vị trí, không phải quãng đường.

**Nếu làm sai:** Nếu chỉ tích phân v trên \([0;2]\), bạn tính độ dời rồi còn phải cộng vị trí đầu để tìm s(2).

</details>

## 2. Tích phân xác định và ý nghĩa tích lũy

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-W01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O08; SINGLE_ITEM_ID -->

**Bài 38.** Tính \(\int_{-1}^{2} (2x+1)\,\mathrm dx\) và giải thích vì sao kết quả không có +C.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** 6.

**Lời giải:** \(F=x^2+x\); \(F(2)=6\); \(F(-1)=0\); tích phân xác định là số 6.

**Rubric tự luận /5:** 1đ chọn F đúng; 1đ ghi \(F(b)-F(a)\); 2đ thế cận và tính; 1đ nêu không có +C.

**Nếu làm sai:** Kiểm nguyên hàm \(F\) và thay đúng \(F(b)-F(a)\), không thêm \(+C\) vào tích phân xác định.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-A01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O08; SINGLE_ITEM_ID -->

**Bài 39.** Vận tốc \(v(t)=3t^2\) m/s, \(0\le t\le2\). Tính độ dời.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 8 m.

**Lời giải:** \(\int_0^2 3t^2\,\mathrm dt=[t^3]_0^2=8\) m; vận tốc không âm nên bằng quãng đường.

**Nếu làm sai:** Kiểm nguyên hàm \(F\) và thay đúng \(F(b)-F(a)\), không thêm \(+C\) vào tích phân xác định.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-P01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O08; SINGLE_ITEM_ID -->

**Bài 40.** Tính \(\int_{1}^{3} x^{2}\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\frac{26}3\).

**Lời giải:** \(F=\frac{x^3}3\); \(F(3)-F(1)=9-\frac13=\frac{26}3\). Giải thích chọn cách: Tìm nguyên hàm F, thế cận b trước a, rút gọn; kiểm bằng ước lượng dấu.

**Nếu làm sai:** Kiểm nguyên hàm \(F\) và thay đúng \(F(b)-F(a)\), không thêm \(+C\) vào tích phân xác định.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-C01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O08; SINGLE_ITEM_ID -->

**Bài 41.** Tính \(\int_{0}^{2} 2x\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 4.

**Lời giải:** \(F=x^2\); \(F(2)-F(0)=4\). Giải thích chọn cách: Tìm nguyên hàm F, thế cận b trước a, rút gọn; kiểm bằng ước lượng dấu.

**Nếu làm sai:** Kiểm nguyên hàm \(F\) và thay đúng \(F(b)-F(a)\), không thêm \(+C\) vào tích phân xác định.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P08; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O08; SINGLE_ITEM_ID -->

**Bài 42.** Tính \(\int_{0}^{2} (3x^{2}+1)\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \([x^3+x]_0^2=8+2=10\).

**Lời giải:** Lấy \(F=x^3+x\) vì \(F'=3x^2+1\). Theo Newton–Leibniz, \(\int_0^2(3x^2+1)\,\mathrm dx=F(2)-F(0)=(8+2)-0=10\). Tích phân xác định là số, không cộng \(+C\).

**Nếu làm sai:** Ghi hai cận rõ ràng và luôn trừ giá trị tại cận dưới.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-W02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O09; SINGLE_ITEM_ID -->

**Bài 43.** Giải \(\int_{1}^{2} (6x^{2}-4x+1)\,\mathrm dx\) bằng tính tuyến tính; kiểm kết quả.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** 9.

**Lời giải:** \(F=2x^3-2x^2+x\), \(F(2)=10\) và \(F(1)=1\Rightarrow10-1=9\).

**Rubric tự luận /5:** 1đ nêu tính tuyến tính; 2đ F đúng; 1đ thế hai cận; 1đ kiểm phép tính.

**Nếu làm sai:** Tách các hạng tử phải giữ cùng cận và hệ số, rồi tính hiệu tại hai đầu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-A02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O09; SINGLE_ITEM_ID -->

**Bài 44.** Nhu cầu \(r(t)=4+2t\) đơn vị/giờ, \(0\le t\le1\). Lượng tích lũy?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 5 đơn vị.

**Lời giải:** \(\int_0^1(4+2t)\,\mathrm dt=[4t+t^2]_0^1=5\). Giải thích chọn cách: Phân phối rồi dùng nguyên hàm từng hạng tử, chỉ thế cận một lần khi đã tổng hợp \(F\).

**Nếu làm sai:** Tách các hạng tử phải giữ cùng cận và hệ số, rồi tính hiệu tại hai đầu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-P02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O09; SINGLE_ITEM_ID -->

**Bài 45.** Tính \(\int_{0}^{2} (3x^{2}-2)\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 4.

**Lời giải:** \(F=x^3-2x\); tại 2 cho \(8-4=4\). Giải thích chọn cách: Phân phối rồi dùng nguyên hàm từng hạng tử, chỉ thế cận một lần khi đã tổng hợp F.

**Nếu làm sai:** Tách các hạng tử phải giữ cùng cận và hệ số, rồi tính hiệu tại hai đầu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-C02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O09; SINGLE_ITEM_ID -->

**Bài 46.** Tính \(\int_{0}^{1} (2x+3)\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 4.

**Lời giải:** \(F=x^2+3x\); \(F(1)-F(0)=4\). Giải thích chọn cách: Phân phối rồi dùng nguyên hàm từng hạng tử, chỉ thế cận một lần khi đã tổng hợp F.

**Nếu làm sai:** Tách các hạng tử phải giữ cùng cận và hệ số, rồi tính hiệu tại hai đầu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P09; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O09; SINGLE_ITEM_ID -->

**Bài 47.** Tính \(\int_1^3(2x+1)\,\mathrm dx-\int_1^3 x\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\int_1^3(x+1)\,\mathrm dx=\left[\frac{x^2}2+x\right]_1^3=(\frac92+3)-(\frac12+1)=6\).

**Lời giải:** Hai tích phân cùng cận, nên gộp \(\int_1^3[(2x+1)-x]\,\mathrm dx=\int_1^3(x+1)\,\mathrm dx\). Nguyên hàm \(F=\frac{x^2}2+x\), hiệu \(F(3)-F(1)=(\frac92+3)-(\frac12+1)=6\).

**Nếu làm sai:** Nếu cận khác nhau, không gộp trực tiếp. Kiểm dấu của dấu trừ trước khi cộng hạng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-W03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O10; SINGLE_ITEM_ID -->

**Bài 48.** Cho \(\int_{-1}^1 f(x)\,\mathrm dx=5\) và \(\int_1^4 f(x)\,\mathrm dx=-3\). Tính \(\int_4^{-1} f(x)\,\mathrm dx\).

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(-2\).

**Lời giải:** \(\int_{-1}^4 f(x)\,\mathrm dx=5-3=2\); đảo cận được \(-2\).

**Rubric tự luận /5:** 1đ ghép hai đoạn; 1đ cộng đúng dấu; 1đ dùng đảo cận; 1đ kết quả; 1đ giải thích dấu.

**Nếu làm sai:** Đảo cận đổi dấu; tích phân có cận trùng nhau bằng 0, không là diện tích âm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-A03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O10; SINGLE_ITEM_ID -->

**Bài 49.** Độ dời 0–2 s là 4 m, 2–4 s là −6 m. Tính độ dời tổng và ý nghĩa dấu.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** −2 m.

**Lời giải:** Cộng đại số \(4-6=-2\): vị trí cuối lùi 2m so với đầu.

**Nếu làm sai:** Đảo cận đổi dấu; tích phân có cận trùng nhau bằng 0, không là diện tích âm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-P03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O10; SINGLE_ITEM_ID -->

**Bài 50.** Biết \(\int_0^2 f(x)\,\mathrm dx=7\) và \(\int_0^5 f(x)\,\mathrm dx=9\). Tính \(\int_2^5 f(x)\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 2.

**Lời giải:** \(\int_2^5 f(x)\,\mathrm dx=\int_0^5 f(x)\,\mathrm dx-\int_0^2 f(x)\,\mathrm dx=9-7=2\). Giải thích chọn cách: Vẽ trục cận theo thứ tự, ghép hoặc trừ đúng lượng, kiểm chiều dấu.

**Nếu làm sai:** Đảo cận đổi dấu; tích phân có cận trùng nhau bằng 0, không là diện tích âm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-C03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O10; SINGLE_ITEM_ID -->

**Bài 51.** Biết \(\int_1^3 f(x)\,\mathrm dx=5\) và \(\int_3^5 f(x)\,\mathrm dx=-2\). Tính \(\int_1^5 f(x)\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 3.

**Lời giải:** Ghép đoạn: \(5+(-2)=3\). Giải thích chọn cách: Vẽ trục cận theo thứ tự, ghép hoặc trừ đúng lượng, kiểm chiều dấu.

**Nếu làm sai:** Đảo cận đổi dấu; tích phân có cận trùng nhau bằng 0, không là diện tích âm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P10; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O10; SINGLE_ITEM_ID -->

**Bài 52.** Tính \(\int_{3}^{1} x^{2}\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(-\frac{26}3\).

**Lời giải:** Dùng đảo cận: \(\int_3^1 x^2\,\mathrm dx=-\int_1^3 x^2\,\mathrm dx=-\left[\frac{x^3}3\right]_1^3=-\frac{27-1}3=-\frac{26}3\). Giá trị âm do chiều lấy tích phân, không phải diện tích âm.

**Nếu làm sai:** Khi cận trên nhỏ hơn cận dưới, đổi chỗ và đặt dấu trừ một lần.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-W04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O11; SINGLE_ITEM_ID -->

**Bài 53.** Tính diện tích giữa \(y=4-x^2\) và Ox từ \(x=0\) đến \(x=2\), kèm kiểm dấu.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(\frac{16}3\) đơn vị².

**Lời giải:** \(4-x^2\ge0\) trên \([0;2]\), \(S=\left[4x-\frac{x^3}3\right]_0^2=8-\frac83=\frac{16}3\).

**Rubric tự luận /5:** 1đ chứng minh không âm; 1đ viết tích phân; 2đ nguyên hàm và cận; 1đ đơn vị/kết luận.

**Nếu làm sai:** Diện tích bằng \(\int_a^b f(x)\,\mathrm dx\) chỉ khi \(f\ge0\) trên \([a;b]\); nhớ đơn vị bình phương.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-A04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O11; SINGLE_ITEM_ID -->

**Bài 54.** Độ cao \(y=1+x\) (m) và bề rộng biến \(x\in[0;2]\) (m). Tính diện tích phần dưới đồ thị.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 4 m².

**Lời giải:** \(S=\int_0^2(1+x)\,\mathrm dx=\left[x+\frac{x^2}2\right]_0^2=4\). Giải thích chọn cách: Kiểm dấu hàm trước khi tích phân; dựng hình/thấy giao điểm với \(Ox\), lấy cận đúng.

**Nếu làm sai:** Diện tích bằng \(\int_a^b f(x)\,\mathrm dx\) chỉ khi \(f\ge0\) trên \([a;b]\); nhớ đơn vị bình phương.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-P04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O11; SINGLE_ITEM_ID -->

**Bài 55.** Tính diện tích dưới \(y=2-x\) trên \([0;2]\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 2 đơn vị².

**Lời giải:** \(2-x\ge0\), \(S=\left[2x-\frac{x^2}2\right]_0^2=4-2=2\). Giải thích chọn cách: Kiểm dấu hàm trước khi tích phân; dựng hình/thấy giao điểm với Ox, lấy cận đúng.

**Nếu làm sai:** Diện tích bằng \(\int_a^b f(x)\,\mathrm dx\) chỉ khi \(f\ge0\) trên \([a;b]\); nhớ đơn vị bình phương.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-C04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O11; SINGLE_ITEM_ID -->

**Bài 56.** Diện tích dưới \(y=x\) trên \([0;2]\) là bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 2 đơn vị².

**Lời giải:** Hàm không âm; \(S=\int_0^2 x\,\mathrm dx=\left[\frac{x^2}2\right]_0^2=2\).

**Nếu làm sai:** Diện tích bằng \(\int_a^b f(x)\,\mathrm dx\) chỉ khi \(f\ge0\) trên \([a;b]\); nhớ đơn vị bình phương.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P11; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O11; SINGLE_ITEM_ID -->

**Bài 57.** Tính diện tích dưới \(y=x^2\) trên \([0;2]\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(S=\frac83\) đơn vị diện tích.

**Lời giải:** Vì \(x^2\ge0\) và hàm liên tục trên \([0;2]\), diện tích đúng bằng tích phân \(\int_0^2 x^2\,\mathrm dx=\left[\frac{x^3}3\right]_0^2=\frac83\) đơn vị². Nếu \(f\) đổi dấu, công thức diện tích phải dùng \(|f|\).

**Nếu làm sai:** Đừng quên xác nhận \(f\ge0\) trên đoạn trước khi gọi tích phân là diện tích hình học.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-W05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O12; SINGLE_ITEM_ID -->

**Bài 58.** Diện tích giữa \(y=x^2-1\) và Ox trên \([-2;2]\) là bao nhiêu?

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** 4 đơn vị².

**Lời giải:** Nghiệm \(\pm1\); hai vùng ngoài tổng \(\frac83\), vùng giữa \(\frac43\); \(S=4\).

**Rubric tự luận /5:** 1đ nghiệm và bảng dấu; 1đ chia tích phân; 2đ tính từng phần; 1đ cộng và phân biệt tích phân có dấu.

**Nếu làm sai:** Chia tại nghiệm \(f=0\) rồi cộng độ lớn từng phần: \(\int_a^b|f(x)|\,\mathrm dx\), không lấy \(\left|\int_a^b f(x)\,\mathrm dx\right|\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-A05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O12; SINGLE_ITEM_ID -->

**Bài 59.** Vật có \(v(t)=t-2\) m/s, \(t\in[0;4]\). Tính độ dời và quãng đường.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Độ dời 0 m; quãng đường 4 m.

**Lời giải:** \(\int_0^4(t-2)\,\mathrm dt=0\); chia tại \(t=2\), \(\int_0^4|t-2|\,\mathrm dt=2+2=4\).

**Nếu làm sai:** Chia tại nghiệm \(f=0\) rồi cộng độ lớn từng phần: \(\int_a^b|f(x)|\,\mathrm dx\), không lấy \(\left|\int_a^b f(x)\,\mathrm dx\right|\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-P05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O12; SINGLE_ITEM_ID -->

**Bài 60.** Diện tích giữa \(y=x-1\) và Ox trên \([0;2]\)?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 1 đơn vị².

**Lời giải:** Chia tại \(x=1\): hai tam giác mỗi diện tích \(\frac12\), tổng 1.

**Nếu làm sai:** Chia tại nghiệm \(f=0\) rồi cộng độ lớn từng phần: \(\int_a^b|f(x)|\,\mathrm dx\), không lấy \(\left|\int_a^b f(x)\,\mathrm dx\right|\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-C05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O12; SINGLE_ITEM_ID -->

**Bài 61.** Tính diện tích giữa \(y=x\) và trục Ox trên \([-2;2]\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 4 đơn vị².

**Lời giải:** Chia tại \(x=0\): \(\int_{-2}^0(-x)\,\mathrm dx+\int_0^2 x\,\mathrm dx=2+2=4\).

**Nếu làm sai:** Chia tại nghiệm \(f=0\) rồi cộng độ lớn từng phần: \(\int_a^b|f(x)|\,\mathrm dx\), không lấy \(\left|\int_a^b f(x)\,\mathrm dx\right|\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P12; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O12; SINGLE_ITEM_ID -->

**Bài 62.** Với \(f=x\) trên \([-2;1]\), tính tích phân có dấu và diện tích.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\int_{-2}^1 x\,\mathrm dx=\frac{1-4}2=-\frac32\); diện tích \(2+\frac12=\frac52\).

**Lời giải:** Tích phân có dấu \(I=\int_{-2}^1 x\,\mathrm dx=\left[\frac{x^2}2\right]_{-2}^1=\frac12-2=-\frac32\). Để tính diện tích, chia tại \(x=0\): \(S=\int_{-2}^0(-x)\,\mathrm dx+\int_0^1 x\,\mathrm dx=2+\frac12=\frac52\) đơn vị². \(|I|=\frac32\) khác \(S\).

**Nếu làm sai:** Tìm nghiệm làm f đổi dấu rồi lấy trị tuyệt đối từng phần; không lấy \(\left|\int_a^b f(x)\,\mathrm dx\right|\) thay \(\int_a^b|f(x)|\,\mathrm dx\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-W03; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O12; SINGLE_ITEM_ID -->

**Bài 63.** Một vật có vận tốc \(v(t)=t-1\) (m/s) trong \(0\le t\le2\) s. (a) Tính độ dời bằng tích phân. (b) Xác định thời điểm đổi chiều. (c) Tính tổng quãng đường. (d) Giải thích vì sao không dùng trị tuyệt đối độ dời làm quãng đường.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** Độ dời bằng 0 m, đổi chiều ở \(t=1\) s, quãng đường bằng 1 m.

**Lời giải:** \(\int_0^2(t-1)\,\mathrm dt=\left[\frac{t^2}2-t\right]_0^2=2-2=0\). \(v&lt;0\) trên \((0;1)\), \(v>0\) trên \((1;2)\), nên đổi chiều tại 1. Quãng đường \(\int_0^1(1-t)\,\mathrm dt+\int_1^2(t-1)\,\mathrm dt=\frac12+\frac12=1\) m. \(\left|\int_0^2 v\,\mathrm dt\right|=0\) khác \(\int_0^2|v|\,\mathrm dt=1\) vì hai đoạn đối chiều triệt trong độ dời.

**Rubric /7:**
1. Đặt đúng tích phân v(t) (1đ)
2. Tính độ dời0 (1đ)
3. Giải \(v(t)=0\) tại1 (1đ)
4. Xét dấu v hai bên (1đ)
5. Lập hai tích phân trị tuyệt đối (1đ)
6. Tính quãng đường1m (1đ)
7. Giải thích độ dời và quãng đường khác nhau (1đ)

**Nếu làm sai:** Thấy v đổi dấu phải tách khoảng để tính \(\int_a^b|v(t)|\,\mathrm dt\), không lấy trị tuyệt đối toàn tổng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-W06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O13; SINGLE_ITEM_ID -->

**Bài 64.** Tính \(\int_{0}^{\frac{\pi}{2}} (2\cos  x+\sin  x)\,\mathrm dx\) bằng nguyên hàm; giải rõ cận.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** 3.

**Lời giải:** \(F=2\sin x-\cos x\); \(F(\frac{\pi}2)=2\), \(F(0)=-1\Rightarrow2-(-1)=3\).

**Rubric tự luận /5:** 1đ nêu điều kiện liên tục; 2đ nguyên hàm; 1đ thế cận; 1đ kết quả/chính xác.

**Nếu làm sai:** Thử đạo hàm của \(\sin x,\cos x,e^x\) và so cận trong radian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-A06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O13; SINGLE_ITEM_ID -->

**Bài 65.** Tốc độ \(r(t)=2e^t\) đơn vị/giờ trên \([0;\ln2]\). Lượng tăng?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 2 đơn vị.

**Lời giải:** \(\int_0^{\ln2}2e^t\,\mathrm dt=2(2-1)=2\). Giải thích chọn cách: Giữ \(\pi,e,\ln2\) dạng chính xác đến kết quả cuối; không tự quy đổi radian thành độ.

**Nếu làm sai:** Thử đạo hàm của \(\sin x,\cos x,e^x\) và so cận trong radian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-P06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O13; SINGLE_ITEM_ID -->

**Bài 66.** Tính \(\int_{0}^{\pi} \cos  x\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 0.

**Lời giải:** \([\sin x]_0^\pi=0\). Giải thích chọn cách: Giữ \(\pi,e,\ln2\) dạng chính xác đến kết quả cuối; không tự quy đổi radian thành độ.

**Nếu làm sai:** Thử đạo hàm của \(\sin x,\cos x,e^x\) và so cận trong radian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-C06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O13; SINGLE_ITEM_ID -->

**Bài 67.** Tính \(\int_{0}^{\ln  2} e^x\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 1.

**Lời giải:** \([e^x]_0^{\ln2}=2-1=1\). Giải thích chọn cách: Giữ \(\pi,e,\ln2\) dạng chính xác đến kết quả cuối; không tự quy đổi radian thành độ.

**Nếu làm sai:** Thử đạo hàm của \(\sin x,\cos x,e^x\) và so cận trong radian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P13; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O13; SINGLE_ITEM_ID -->

**Bài 68.** Tính \(\int_{0}^{\pi} 2\sin  x\,\mathrm dx\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \([-2\cos x]_0^\pi=2-(-2)=4\).

**Lời giải:** Góc đo radian; \(F=-2\cos x\) vì \(F'=2\sin x\). Thế cận: \(\int_0^\pi 2\sin x\,\mathrm dx=-2\cos\pi-(-2\cos0)=2-(-2)=4\). Vì \(\sin x\ge0\) trên \([0;\pi]\), giá trị này cũng là diện tích dưới đồ thị.

**Nếu làm sai:** Nếu ra 0, kiểm lại \(\cos\pi=-1\) và dấu trừ trước F(0).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-W07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O14; SINGLE_ITEM_ID -->

**Bài 69.** \(a(t)=4\) m/s², \(v(0)=-3\) m/s, \(s(0)=2\) m. Tìm độ dời trong \([0;2]\) s, giải thích tại sao không được coi là quãng đường.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** Độ dời 2m.

**Lời giải:** \(v(t)=4t-3\); \(\int_0^2 v\,\mathrm dt=[2t^2-3t]_0^2=8-6=2\) m. Vì \(v\) đổi dấu ở \(t=\frac34\) nên quãng đường lớn hơn độ lớn của độ dời (2 m).

**Rubric tự luận /5:** 1đ tìm v(t); 1đ tìm thời điểm đổi dấu; 2đ tính tích phân; 1đ nêu phân biệt độ dời và quãng đường.

**Nếu làm sai:** Tốc độ biến thiên không hằng phải tích phân; không dùng tích của giá trị cuối với thời gian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-A07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O14; SINGLE_ITEM_ID -->

**Bài 70.** Sản lượng tăng với \(q'(t)=4+3t^2\) (sản phẩm/giờ), \(t\in[0;2]\) giờ. Lượng tăng?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 16 sản phẩm.

**Lời giải:** \(\int_0^2(4+3t^2)\,\mathrm dt=[4t+t^3]_0^2=8+8=16\).

**Nếu làm sai:** Tốc độ biến thiên không hằng phải tích phân; không dùng tích của giá trị cuối với thời gian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-P07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O14; SINGLE_ITEM_ID -->

**Bài 71.** Vận tốc \(v=t^2\) trên \([1;2]\) s. Tính quãng đường.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\frac73\) m (nếu v đo m/s).

**Lời giải:** \(v\ge0\) nên \(\int_1^2 t^2\,\mathrm dt=\frac{8-1}3=\frac73\).

**Nếu làm sai:** Tốc độ biến thiên không hằng phải tích phân; không dùng tích của giá trị cuối với thời gian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B12-C07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O14; SINGLE_ITEM_ID -->

**Bài 72.** Vận tốc \(v(t)=2t+1\) m/s trong \(0\le t\le3\). Tính độ dời.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 12 m.

**Lời giải:** \(\int_0^3(2t+1)\,\mathrm dt=[t^2+t]_0^3=9+3=12\).

**Nếu làm sai:** Tốc độ biến thiên không hằng phải tích phân; không dùng tích của giá trị cuối với thời gian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P14; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O14; SINGLE_ITEM_ID -->

**Bài 73.** Với \(v=3t^2\), \(s(0)=5\), tính s(2).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(s(2)=5+8=13\) m.

**Lời giải:** Vì \(v(t)=s'(t)=3t^2\), độ dời từ 0 tới 2 là \(\int_0^2 3t^2\,\mathrm dt=[t^3]_0^2=8\). Vị trí cuối \(s(2)=s(0)+8=5+8=13\) m. Không dùng \(v(2)\cdot2\) vì vận tốc không hằng.

**Nếu làm sai:** Phân biệt độ dời và vị trí cuối: vị trí cuối bằng vị trí đầu cộng độ dời.

</details>

## 3. Diện tích hình học và thay đổi dấu

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-W01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O15; SINGLE_ITEM_ID -->

**Bài 74.** Tính diện tích hình giới hạn bởi \(y=9-x^2\), Ox, \(x=0\) và \(x=3\); kiểm dấu.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** 18 đơn vị².

**Lời giải:** \(9-x^2\ge0\) trên \([0;3]\); \(S=\left[9x-\frac{x^3}3\right]_0^3=27-9=18\).

**Rubric tự luận /5:** 1đ chứng minh dấu; 1đ mô tả hình/cận; 2đ tích phân; 1đ đơn vị/kết luận.

**Nếu làm sai:** Hàm \(\sqrt x\) có miền \(x\ge0\), \(\int\sqrt x\,\mathrm dx=\frac23x^{3/2}+C\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-A01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O15; SINGLE_ITEM_ID -->

**Bài 75.** Một mép đất có chiều cao \(y=2+x\) (m) trên x từ 0 tới 3 (m). Diện tích dưới mép?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\frac{21}2\) m².

**Lời giải:** \(\int_0^3(2+x)\,\mathrm dx=6+\frac92=\frac{21}2\). Giải thích chọn cách: Kiểm dấu, ghi miền hình, lập cận, tích phân và nêu đơn vị.

**Nếu làm sai:** Hàm \(\sqrt x\) có miền \(x\ge0\), \(\int\sqrt x\,\mathrm dx=\frac23x^{3/2}+C\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-P01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O15; SINGLE_ITEM_ID -->

**Bài 76.** Diện tích dưới \(y=3x\) trên \([0;2]\)?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 6 đơn vị².

**Lời giải:** \(S=\left[\frac{3x^2}2\right]_0^2=6\). Giải thích chọn cách: Kiểm dấu, ghi miền hình, lập cận, tích phân và nêu đơn vị.

**Nếu làm sai:** Hàm \(\sqrt x\) có miền \(x\ge0\), \(\int\sqrt x\,\mathrm dx=\frac23x^{3/2}+C\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-C01; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O15; SINGLE_ITEM_ID -->

**Bài 77.** Diện tích dưới \(y=x^2\) trên \([0;2]\)?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\frac83\) đơn vị².

**Lời giải:** \(S=\int_0^2 x^2\,\mathrm dx=\frac83\). Giải thích chọn cách: Kiểm dấu, ghi miền hình, lập cận, tích phân và nêu đơn vị.

**Nếu làm sai:** Hàm \(\sqrt x\) có miền \(x\ge0\), \(\int\sqrt x\,\mathrm dx=\frac23x^{3/2}+C\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P15; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O15; SINGLE_ITEM_ID -->

**Bài 78.** Tính diện tích dưới \(y=\sqrt x\) trên \([0;4]\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\frac{16}3\) đơn vị².

**Lời giải:** \(\sqrt x=x^{1/2}\) liên tục, không âm trên \([0;4]\); \(S=\int_0^4 x^{1/2}\,\mathrm dx=\left[\frac23x^{3/2}\right]_0^4=\frac23\cdot8=\frac{16}3\) đơn vị².

**Nếu làm sai:** Nếu tính nhầm \(\int\sqrt x\,\mathrm dx\), hãy tăng số mũ từ \(\frac12\) thành \(\frac32\) rồi chia \(\frac32\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-W02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O16; SINGLE_ITEM_ID -->

**Bài 79.** Diện tích giữa \(y=x^2-4\) và Ox trên \([-3;3]\) là bao nhiêu?

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(\frac{46}3\) đơn vị².

**Lời giải:** Nghiệm \(\pm2\); ngoài \([-3;-2]\),\([2;3]\) mỗi phần \(\frac73\); giữa \([-2;2]\) là \(\frac{32}3\); tổng \(\frac{46}3\).

**Rubric tự luận /5:** 1đ nghiệm/đổi dấu; 1đ chia ba đoạn; 2đ tích phân mỗi vùng; 1đ cộng kết quả đúng.

**Nếu làm sai:** Vùng dưới Ox vẫn góp diện tích dương, chia tại nghiệm đổi dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-A02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O16; SINGLE_ITEM_ID -->

**Bài 80.** Diện tích giữa \(y=2x-2\) và Ox trên \([0;2]\)?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 2 đơn vị².

**Lời giải:** Chia tại \(x=1\): hai tam giác mỗi1.

**Nếu làm sai:** Vùng dưới Ox vẫn góp diện tích dương, chia tại nghiệm đổi dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-P02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O16; SINGLE_ITEM_ID -->

**Bài 81.** Tính diện tích giữa \(y=x-2\) và Ox trên \([0;4]\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 4 đơn vị².

**Lời giải:** Chia tại \(x=2\), mỗi tam giác có diện tích2.

**Nếu làm sai:** Vùng dưới Ox vẫn góp diện tích dương, chia tại nghiệm đổi dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-C02; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O16; SINGLE_ITEM_ID -->

**Bài 82.** Tính diện tích giữa \(y=x\) và Ox trên \([-2;2]\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 4 đơn vị².

**Lời giải:** Hai tam giác hai bên mỗi diện tích2; tổng4.

**Nếu làm sai:** Vùng dưới Ox vẫn góp diện tích dương, chia tại nghiệm đổi dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P16; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O16; SINGLE_ITEM_ID -->

**Bài 83.** Tính S giữa \(y=|x|\) và Ox trên \([-1;2]\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(S=\frac12+2=\frac52\).

**Lời giải:** \(y=|x|\) không âm. Trên \([-1;0]\), \(|x|=-x\) cho \(S_1=\int_{-1}^0(-x)\,\mathrm dx=\frac12\); trên \([0;2]\), \(|x|=x\) cho \(S_2=\int_0^2 x\,\mathrm dx=2\). Tổng \(S=\frac52\) đơn vị².

**Nếu làm sai:** Trị tuyệt đối đổi công thức tại \(x=0\); chia đoạn để tích phân thành biểu thức đại số đơn giản.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-W03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O17; SINGLE_ITEM_ID -->

**Bài 84.** Diện tích giữa \(y=x+3\) và \(y=x^2+1\) trên \([0;2]\)?

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(\frac{10}3\) đơn vị².

**Lời giải:** Hiệu trên trừ dưới là \(-x^2+x+2\ge0\) trong \([0;2]\); tích phân \(\left[-\frac{x^3}3+\frac{x^2}2+2x\right]_0^2=\frac{10}3\).

**Rubric tự luận /5:** 1đ nhận diện đường trên; 1đ kiểm hiệu không âm; 2đ tích phân; 1đ đơn vị/kết luận.

**Nếu làm sai:** Giải \(f-g=0\), kiểm đường nào trên rồi mới lấy tích phân (trên trừ dưới).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-A03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O17; SINGLE_ITEM_ID -->

**Bài 85.** Hai biên \(y=3x+1\) và \(y=x+1\), x từ0 đến3. Tính diện tích giữa chúng.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 9 đơn vị².

**Lời giải:** Hiệu \(2x\ge0\); \(\int_0^3 2x\,\mathrm dx=9\). Giải thích chọn cách: Lấy hiệu độ cao (trên trừ dưới), tích phân theo \(x\), kiểm \(S\ge0\).

**Nếu làm sai:** Giải \(f-g=0\), kiểm đường nào trên rồi mới lấy tích phân (trên trừ dưới).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-P03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O17; SINGLE_ITEM_ID -->

**Bài 86.** Diện tích giữa \(y=4\) và \(y=x^2\) trên \([-2;2]\)?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\frac{32}3\) đơn vị².

**Lời giải:** \(4\ge x^2\), \(S=\int_{-2}^2(4-x^2)\,\mathrm dx=16-\frac{16}3=\frac{32}3\).

**Nếu làm sai:** Giải \(f-g=0\), kiểm đường nào trên rồi mới lấy tích phân (trên trừ dưới).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-C03; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O17; SINGLE_ITEM_ID -->

**Bài 87.** Diện tích giữa \(y=2x\) và \(y=x\) trên \([0;2]\)?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 2 đơn vị².

**Lời giải:** Lấy trên trừ dưới được \(x\); \(\int_0^2 x\,\mathrm dx=2\). Giải thích chọn cách: Lấy hiệu độ cao (trên trừ dưới), tích phân theo \(x\), kiểm \(S\ge0\).

**Nếu làm sai:** Giải \(f-g=0\), kiểm đường nào trên rồi mới lấy tích phân (trên trừ dưới).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P17; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O17; SINGLE_ITEM_ID -->

**Bài 88.** Tính diện tích giữa \(y=x+2\) và \(y=x^2\) trên \([0;2]\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Vì \(x+2-x^2=(2-x)(x+1)\ge0\), \(S=\int_0^2(x+2-x^2)\,\mathrm dx=\frac{10}3\).

**Lời giải:** Trên \([0;2]\), \(f-g=(x+2)-x^2=(2-x)(x+1)\ge0\) nên đường \(y=x+2\) ở trên \(y=x^2\). Diện tích \(S=\int_0^2(x+2-x^2)\,\mathrm dx=\left[\frac{x^2}2+2x-\frac{x^3}3\right]_0^2=2+4-\frac83=\frac{10}3\) đơn vị².

**Nếu làm sai:** Trước khi lấy hiệu, kiểm dấu \(f-g\) để xác định đường nào ở trên trên toàn khoảng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-W04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O18; SINGLE_ITEM_ID -->

**Bài 89.** Tính diện tích giữa \(y=x\) và \(y=x^3\) từ \(x=-1\) đến1; chỉ rõ đoạn đổi thứ tự.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(\frac12\) đơn vị².

**Lời giải:** Giao tại −1,0,1; trên \([-1;0]\) \(x^3\ge x\), trên \([0;1]\) \(x\ge x^3\); mỗi vùng \(\frac14\), tổng \(\frac12\).

**Rubric tự luận /5:** 1đ giao điểm; 1đ thứ tự theo đoạn; 2đ hai tích phân; 1đ tổng S.

**Nếu làm sai:** Giao điểm ở trong đoạn có thể đảo thứ tự; cần chia đoạn theo dấu \(f-g\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-A04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O18; SINGLE_ITEM_ID -->

**Bài 90.** Tính diện tích giữa \(y=x^2\) và \(y=2-x^2\) trên \([-1;1]\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\frac83\) đơn vị².

**Lời giải:** Hai đồ thị giao ở \(\pm1\), trên là \(2-x^2\); \(S=\int_{-1}^1(2-2x^2)\,\mathrm dx=\frac83\).

**Nếu làm sai:** Giao điểm ở trong đoạn có thể đảo thứ tự; cần chia đoạn theo dấu \(f-g\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-P04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O18; SINGLE_ITEM_ID -->

**Bài 91.** Diện tích giữa \(y=2x\) và \(y=x^2\) trên \([0;2]\)?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\frac43\) đơn vị².

**Lời giải:** \(2x\ge x^2\); \(\int_0^2(2x-x^2)\,\mathrm dx=4-\frac83=\frac43\).

**Nếu làm sai:** Giao điểm ở trong đoạn có thể đảo thứ tự; cần chia đoạn theo dấu \(f-g\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-C04; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O18; SINGLE_ITEM_ID -->

**Bài 92.** Diện tích giữa \(y=x\) và \(y=x^2\) trên \([0;1]\)?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\frac16\) đơn vị².

**Lời giải:** \(S=\int_0^1(x-x^2)\,\mathrm dx=\frac16\). Giải thích chọn cách: Giải giao điểm, sắp xếp cận, thử dấu từng khoảng rồi tích phân phần dương.

**Nếu làm sai:** Giao điểm ở trong đoạn có thể đảo thứ tự; cần chia đoạn theo dấu \(f-g\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P18; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O18; SINGLE_ITEM_ID -->

**Bài 93.** Tính S giữa \(y=x\) và \(y=x^2\) trên \([0;2]\).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 1 đơn vị² (giao 0,1 và chia tại1).

**Lời giải:** Hai đường giao khi \(x=x^2\Leftrightarrow x=0\) hoặc \(1\). Trên \((0;1)\), \(x-x^2>0\); trên \((1;2)\), \(x-x^2&lt;0\). Diện tích \(S=\int_0^1(x-x^2)\,\mathrm dx+\int_1^2(x^2-x)\,\mathrm dx=\frac16+\frac56=1\) đơn vị².

**Nếu làm sai:** Nếu hai đường đổi thứ tự, phải chia tại giao điểm và cộng phần dương, không để diện tích triệt dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-W04; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O18; SINGLE_ITEM_ID -->

**Bài 94.** Tính diện tích giới hạn bởi hai đường \(y=x\) và \(y=x^2\) trên đoạn \([0;2]\). (a) Giải giao điểm. (b) Xác định đường trên từng khoảng. (c) Thiết lập hai tích phân. (d) Tính diện tích và so với tích phân đại số \(\int_{0}^{2} (x-x^{2})\,\mathrm dx\).

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** Giao \(x=0,1\). \(S=\int_0^1(x-x^2)\,\mathrm dx+\int_1^2(x^2-x)\,\mathrm dx=1\). Tích phân đại số \(\int_0^2(x-x^2)\,\mathrm dx=-\frac23\), không phải diện tích.

**Lời giải:** \(x=x^2\Rightarrow x=0\) hoặc \(1\). Trên \((0;1)\), \(x>x^2\); trên \((1;2)\), \(x^2>x\). \(S=\left[\frac{x^2}2-\frac{x^3}3\right]_0^1+\left[\frac{x^3}3-\frac{x^2}2\right]_1^2=(\frac12-\frac13)+(\frac83-2-(\frac13-\frac12))=\frac16+\frac56=1\). Trong khi \(\int_0^2(x-x^2)\,\mathrm dx=\left[\frac{x^2}2-\frac{x^3}3\right]_0^2=2-\frac83=-\frac23\). Âm cho thấy không phải diện tích hình học.

**Rubric /7:**
1. Giải \(x=0,1\) (1đ)
2. Nêu dấu trên \((0;1)\) (1đ)
3. Nêu dấu trên \((1;2)\) (1đ)
4. Viết đủ hai tích phân không âm (1đ)
5. Tính phần đầu \(\frac16\) (1đ)
6. Tính phần sau \(\frac56\) và \(S=1\) (1đ)
7. So với tích phân đại số \(-\frac23\) đúng (1đ)

**Nếu làm sai:** Một dấu trừ duy nhất qua điểm giao làm mất diện tích; dùng tích phân trị tuyệt đối chia đoạn.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-W05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O19; SINGLE_ITEM_ID -->

**Bài 95.** Một đoạn đất có biên \(y=\sqrt x\) (m) từ \(x=0\) đến4 (m). Tính diện tích, nêu công thức và đơn vị.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(\frac{16}3\) m².

**Lời giải:** \(h\ge0\); \(S=\int_0^4\sqrt x\,\mathrm dx=\left[\frac23x^{3/2}\right]_0^4=\frac23\cdot8=\frac{16}3\) m².

**Rubric tự luận /5:** 1đ nêu biến/cận đơn vị; 1đ \(h\ge0\); 2đ nguyên hàm; 1đ kết luận m².

**Nếu làm sai:** Cận vùng kín phải lấy từ giao điểm hợp lệ, so sánh hai đồ thị trên từng mảnh.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-A05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O19; SINGLE_ITEM_ID -->

**Bài 96.** Độ cao bờ đất \(h(x)=100-10x\) m, \(0\le x\le5\) m. Diện tích mặt cắt?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 375 m².

**Lời giải:** \(S=\int_0^5(100-10x)\,\mathrm dx=[100x-5x^2]_0^5=500-125=375\) m².

**Nếu làm sai:** Cận vùng kín phải lấy từ giao điểm hợp lệ, so sánh hai đồ thị trên từng mảnh.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-P05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O19; SINGLE_ITEM_ID -->

**Bài 97.** Một miền có chiều cao \(y=2x-1\) m và x từ0 tới1 m. Tính diện tích hình học (không phải tích phân có dấu).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\frac12\) m².

**Lời giải:** Cắt trục ở \(x=\frac12\); hai tam giác mỗi có diện tích \(\frac14\), tổng \(\frac12\).

**Nếu làm sai:** Cận vùng kín phải lấy từ giao điểm hợp lệ, so sánh hai đồ thị trên từng mảnh.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-C05; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O19; SINGLE_ITEM_ID -->

**Bài 98.** Độ cao \(y=x+1\) cm, \(0\le x\le2\) cm. Diện tích dưới đồ thị?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 4 cm².

**Lời giải:** \(S=\int_0^2(x+1)\,\mathrm dx=4\); đơn vị cm². Giải thích chọn cách: Nêu biến \(x\) và đơn vị, mô tả hai cận, xét \(h\ge0\), rồi tính số và thứ nguyên.

**Nếu làm sai:** Cận vùng kín phải lấy từ giao điểm hợp lệ, so sánh hai đồ thị trên từng mảnh.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P19; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O19; SINGLE_ITEM_ID -->

**Bài 99.** Tính S giữa \(y=2x\) và \(y=x^2\) từ hai điểm giao.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\frac43\) đơn vị².

**Lời giải:** Giao điểm \(y=2x\) và \(y=x^2\) cho \(2x=x^2\Leftrightarrow x(x-2)=0\), \(x=0\) hoặc \(2\). Trên \([0;2]\), \(2x-x^2=x(2-x)\ge0\). Vậy diện tích giới hạn \(S=\int_0^2(2x-x^2)\,\mathrm dx=\left[x^2-\frac{x^3}3\right]_0^2=4-\frac83=\frac43\) đơn vị².

**Nếu làm sai:** Cận của hình kín xuất phát từ giao điểm, không đoán trên nét vẽ.

</details>

## 4. Thiết diện và thể tích khối xoay

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-W06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O20; SINGLE_ITEM_ID -->

**Bài 100.** Các lát cắt vuông góc Ox là hình vuông cạnh \(x+1\) cm với \(x\in[0;2]\) cm. Tính V.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(\frac{26}3\) cm³.

**Lời giải:** \(S(x)=(x+1)^2\) cm²; \(V=\int_0^2(x+1)^2\,\mathrm dx=\left[\frac{(x+1)^3}3\right]_0^2=\frac{27-1}3=\frac{26}3\).

**Rubric tự luận /5:** 1đ mô tả lát cắt; 1đ biểu thức S đúng; 2đ tích phân; 1đ đơn vị/kết luận.

**Nếu làm sai:** Tiết diện vuông diện tích \(s^2\), không \(\pi\); tích phân \(A(x)\) theo độ dày \(\mathrm dx\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-A06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O20; SINGLE_ITEM_ID -->

**Bài 101.** Vật có mặt cắt \(S(x)=4-x^2\) cm², \(0\le x\le2\) cm. Tính V.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\frac{16}3\) cm³.

**Lời giải:** \(S\ge0\); \(V=\int_0^2(4-x^2)\,\mathrm dx=8-\frac83=\frac{16}3\).

**Nếu làm sai:** Tiết diện vuông diện tích \(s^2\), không \(\pi\); tích phân \(A(x)\) theo độ dày \(\mathrm dx\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-P06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O20; SINGLE_ITEM_ID -->

**Bài 102.** Khối có mặt cắt \(S(x)=2+x\) m² từ0 tới2m. Thể tích?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 6 m³.

**Lời giải:** \(V=\int_0^2(2+x)\,\mathrm dx=4+2=6\). Giải thích chọn cách: Xác định hình cắt, tính \(S(x)\) đúng hình học, tích phân theo chiều dài.

**Nếu làm sai:** Tiết diện vuông diện tích \(s^2\), không \(\pi\); tích phân \(A(x)\) theo độ dày \(\mathrm dx\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-C06; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O20; SINGLE_ITEM_ID -->

**Bài 103.** Khối có \(S(x)=x^2\) cm², \(x\in[0;3]\) cm. Tính V.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 9 cm³.

**Lời giải:** \(V=\int_0^3 x^2\,\mathrm dx=\left[\frac{x^3}3\right]_0^3=9\). Giải thích chọn cách: Xác định hình cắt, tính \(S(x)\) đúng hình học, tích phân theo chiều dài.

**Nếu làm sai:** Tiết diện vuông diện tích \(s^2\), không \(\pi\); tích phân \(A(x)\) theo độ dày \(\mathrm dx\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P20; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O20; SINGLE_ITEM_ID -->

**Bài 104.** Cho thiết diện hình vuông cạnh \(x+1\) trên \([0;1]\), tính V.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(V=\frac73\) đơn vị³.

**Lời giải:** Tiết diện vuông cạnh \(x+1\) có diện tích \(A(x)=(x+1)^2=x^2+2x+1\). Thể tích \(V=\int_0^1 A(x)\,\mathrm dx=\left[\frac{x^3}3+x^2+x\right]_0^1=\frac13+1+1=\frac73\) đơn vị³. Không nhân \(\pi\) vì không có hình tròn.

**Nếu làm sai:** Phân biệt cạnh dài (đơn vị) và diện tích lát cắt (đơn vị²) trước khi tích phân thành thể tích.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-W05; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O20; SINGLE_ITEM_ID -->

**Bài 105.** Một khối có thiết diện vuông góc Ox là hình vuông cạnh \(s(x)=x+1\) cm với \(0\le x\le2\) cm. (a) Nêu diện tích mặt cắt. (b) Thiết lập thể tích. (c) Tính V. (d) Giải thích vì sao không nhân \(\pi\).

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(A=(x+1)^2\) cm², \(V=\int_0^2(x+1)^2\,\mathrm dx=\frac{26}3\) cm³; không nhân \(\pi\).

**Lời giải:** Tiết diện vuông cạnh \(x+1\) nên \(A=(x+1)^2=x^2+2x+1\) cm². \(V=\int_0^2 A\,\mathrm dx=\left[\frac{x^3}3+x^2+x\right]_0^2=\frac83+4+2=\frac{26}3\) cm³. Hình vuông có diện tích \(s^2\), còn \(\pi r^2\) là diện tích thiết diện tròn nên nhân \(\pi\) sai.

**Rubric /7:**
1. Miền \([0;2]\) và đơn vị cm (1đ)
2. \(A=(x+1)^2\) cm² (1đ)
3. Khai triển chính xác (1đ)
4. Lập \(V=\int A\,\mathrm dx\) đúng cận (1đ)
5. Tính nguyên hàm (1đ)
6. Giá trị \(\frac{26}3\) cm³ (1đ)
7. Nêu không có \(\pi\) vì mặt cắt vuông (1đ)

**Nếu làm sai:** Phải xác định loại thiết diện trước khi chọn công thức diện tích.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-W07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O21; SINGLE_ITEM_ID -->

**Bài 106.** Lát cắt có đường kính \(d(x)=2x+2\) (cm), \(x\in[0;1]\) cm. Tính V, nêu kiểm tra đổi đường kính.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(\frac{7\pi}3\) cm³.

**Lời giải:** \(r=\frac d2=x+1\); \(V=\pi\int_0^1(x+1)^2\,\mathrm dx=\frac{7\pi}3\).

**Rubric tự luận /5:** 1đ đổi d thành r; 1đ \(S=\pi r^2\); 2đ tích phân; 1đ đơn vị/kết luận.

**Nếu làm sai:** Tiết diện tròn \(A=\pi r^2\); nhớ bình phương bán kính, không phải \(\pi r\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-A07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O21; SINGLE_ITEM_ID -->

**Bài 107.** Khối có \(r(x)=\sqrt x\) cm, \(x\in[0;4]\) cm. Tính thể tích.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(8\pi\) cm³.

**Lời giải:** \(r^2=x\); \(V=\pi\int_0^4 x\,\mathrm dx=8\pi\). Giải thích chọn cách: Đổi đường kính thành bán kính nếu cần, bình phương \(r\) trước khi tích phân; giữ \(\pi\) chính xác.

**Nếu làm sai:** Tiết diện tròn \(A=\pi r^2\); nhớ bình phương bán kính, không phải \(\pi r\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-P07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O21; SINGLE_ITEM_ID -->

**Bài 108.** Lát cắt tròn có \(r=2x\) cm trên \([0;2]\) cm. Tính V.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\frac{32\pi}3\) cm³.

**Lời giải:** \(V=\pi\int_0^2 4x^2\,\mathrm dx=4\pi\cdot\frac83=\frac{32\pi}3\). Giải thích chọn cách: Đổi đường kính thành bán kính nếu cần, bình phương \(r\) trước khi tích phân; giữ \(\pi\) chính xác.

**Nếu làm sai:** Tiết diện tròn \(A=\pi r^2\); nhớ bình phương bán kính, không phải \(\pi r\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-C07; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O21; SINGLE_ITEM_ID -->

**Bài 109.** Lát cắt tròn có \(r(x)=x\) (cm) với \(0\le x\le1\). Tính V.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\frac{\pi}3\) cm³.

**Lời giải:** \(S=\pi x^2\); \(V=\pi\left[\frac{x^3}3\right]_0^1=\frac\pi3\). Giải thích chọn cách: Đổi đường kính thành bán kính nếu cần, bình phương \(r\) trước khi tích phân; giữ \(\pi\) chính xác.

**Nếu làm sai:** Tiết diện tròn \(A=\pi r^2\); nhớ bình phương bán kính, không phải \(\pi r\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P21; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O21; SINGLE_ITEM_ID -->

**Bài 110.** Cho \(r(x)=x\) trên \([0;2]\), tính V hình tròn cắt vuông góc Ox.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(V=\frac{8\pi}3\) đơn vị³.

**Lời giải:** Tiết diện hình tròn bán kính \(r(x)=x\), diện tích \(A(x)=\pi x^2\). \(V=\int_0^2\pi x^2\,\mathrm dx=\pi\left[\frac{x^3}3\right]_0^2=\frac{8\pi}3\) đơn vị³. Điều kiện \(x\ge0\) trên \([0;2]\) đảm bảo bán kính hợp lệ.

**Nếu làm sai:** Dùng diện tích đĩa \(\pi r^2\), không dùng chu vi \(2\pi r\) hoặc chỉ bán kính r.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-W08; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O22; SINGLE_ITEM_ID -->

**Bài 111.** Quay miền dưới \(y=\sqrt{4-x^2}\) từ \(x=0\) tới2 quanh Ox. Tính V và nêu ý nghĩa hình học.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(\frac{16\pi}3\) đơn vị³.

**Lời giải:** \(V=\pi\int_0^2(4-x^2)\,\mathrm dx=\pi(8-\frac83)=\frac{16\pi}3\); là nửa thể tích khối cầu bán kính 2.

**Rubric tự luận /5:** 1đ xác định r(x); 1đ công thức \(\pi\int r^2\,\mathrm dx\); 2đ tích phân; 1đ nhận xét hình học và đơn vị.

**Nếu làm sai:** Vành khăn \(A=\pi(R^2-r^2)\), không \(\pi(R-r)^2\); kiểm \(0\le r\le R\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-A08; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O22; SINGLE_ITEM_ID -->

**Bài 112.** Miền dưới \(y=2x\) trên \([0;1]\) quay quanh Ox. Tính thể tích.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\frac{4\pi}3\) đơn vị³.

**Lời giải:** \(V=\pi\int_0^1 4x^2\,\mathrm dx=\frac{4\pi}3\). Giải thích chọn cách: Xác định trục quay, bán kính tại \(x\) là \(|f(x)|\), tính \(\pi\int_a^b f(x)^2\,\mathrm dx\), kiểm thể tích không âm.

**Nếu làm sai:** Vành khăn \(A=\pi(R^2-r^2)\), không \(\pi(R-r)^2\); kiểm \(0\le r\le R\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-P08; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O22; SINGLE_ITEM_ID -->

**Bài 113.** Quay miền dưới \(y=\sqrt x\), \(x\in[0;4]\) quanh Ox. Tính V.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(8\pi\) đơn vị³.

**Lời giải:** \(V=\pi\int_0^4 x\,\mathrm dx=8\pi\). Giải thích chọn cách: Xác định trục quay, bán kính tại \(x\) là \(|f(x)|\), tính \(\pi\int_a^b f(x)^2\,\mathrm dx\), kiểm thể tích không âm.

**Nếu làm sai:** Vành khăn \(A=\pi(R^2-r^2)\), không \(\pi(R-r)^2\); kiểm \(0\le r\le R\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B13-C08; SOURCE_BLOB: 45722cd386a498f3e0e96a09928c85565af56d1b; OUTCOME: TOP11-O22; SINGLE_ITEM_ID -->

**Bài 114.** Quay miền dưới \(y=x\), \(x\in[0;2]\) quanh Ox. Tính V.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(\frac{8\pi}3\) đơn vị³.

**Lời giải:** \(V=\pi\int_0^2 x^2\,\mathrm dx=\frac{8\pi}3\). Giải thích chọn cách: Xác định trục quay, bán kính tại \(x\) là \(|f(x)|\), tính \(\pi\int_a^b f(x)^2\,\mathrm dx\), kiểm thể tích không âm.

**Nếu làm sai:** Vành khăn \(A=\pi(R^2-r^2)\), không \(\pi(R-r)^2\); kiểm \(0\le r\le R\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-P22; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O22; SINGLE_ITEM_ID -->

**Bài 115.** Cho miền \(0\le x\le2\), \(0\le y\le\sqrt x\) quay quanh Ox, V?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** \(2\pi\) đơn vị³.

**Lời giải:** Quay vùng \(0\le y\le\sqrt x,\ 0\le x\le2\) quanh \(Ox\): tiết diện là đĩa bán kính \(\sqrt x\). Diện tích \(A(x)=\pi(\sqrt x)^2=\pi x\); \(V=\pi\int_0^2 x\,\mathrm dx=\pi\left[\frac{x^2}2\right]_0^2=2\pi\) đơn vị³.

**Nếu làm sai:** Nếu được \(8\pi\), em hãy kiểm lại cả diện tích lát cắt và bước thế cận: \(A(x)=\pi(\sqrt x)^2=\pi x\), nên \(V=\pi\left[\frac{x^2}2\right]_0^2=2\pi\). Không dùng cận hay kết quả của ví dụ khác.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP11-W06; SOURCE_BLOB: 6cee7cbfc89d503ce3102b5a1d693a15b9cce8c0; OUTCOME: TOP11-O22; SINGLE_ITEM_ID -->

**Bài 116.** Miền \(0\le x\le2\), \(x\le y\le2\) quay quanh trục Ox. (a) Mô tả bán kính ngoài, trong của tiết diện. (b) Thiết lập công thức vành khăn. (c) Tính thể tích. (d) Nêu vì sao không dùng \(\pi\int_0^2 (2-x)^2\,\mathrm dx\).

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** \(R=2,\ r=x\); \(V=\pi\int_0^2(4-x^2)\,\mathrm dx=\frac{16\pi}3\) đơn vị³.

**Lời giải:** Với \(x\in[0;2]\), \(y\) từ \(x\) tới 2 nên quay quanh \(Ox\) cho vành khăn bán kính ngoài \(R=2\), trong \(r=x\). Diện tích \(A=\pi(R^2-r^2)=\pi(4-x^2)\). \(V=\pi\left[4x-\frac{x^3}3\right]_0^2=\pi(8-\frac83)=\frac{16\pi}3\). \((R-r)^2=4-4x+x^2\) khác \(R^2-r^2\), không biểu diễn diện tích vành khăn; chỉ dùng \(\pi\int_a^b f(x)^2\,\mathrm dx\) khi vùng chạm trục.

**Rubric /7:**
1. Xác định miền và trục Ox (1đ)
2. Bán kính ngoài \(R=2\) (1đ)
3. Bán kính trong \(r=x\) (1đ)
4. Thiết lập \(\pi\int_0^2(4-x^2)\,\mathrm dx\) (1đ)
5. Nguyên hàm đúng (1đ)
6. \(V=\frac{16\pi}3\) và đơn vị³ (1đ)
7. Giải thích sai khác giữa bình phương hiệu và hiệu bình phương (1đ)

**Nếu làm sai:** Nếu vùng không chạm trục, trừ diện tích hai đĩa: \(\pi(R^2-r^2)\), không bình phương \(R-r\).

</details>

<!-- AUTHORING_METADATA_ONLY_Q15_Q16: 22 P +6 W original canonical bodies. 88 old canonical IDs are separate references, never copied. PUBLIC Self Check 22 placements reuse P01–P22. Public Practice answer visibility makes it `CLIENT_SELF_CHECK_NO_MASTERY`, not held-out `TOPIC_READINESS`. No confidential source, private stem/key/solution/rubric or Skill Mastery. -->

<!-- TOPIC11_APPROVED_SOURCE_END -->
<span data-topic-w1-source-end="luyen-tap" hidden></span>
<p class="topic-w1-end-nav"><a href="../../">← Tổng quan các Chuyên đề</a></p>
