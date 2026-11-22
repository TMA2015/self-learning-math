---
hide:
  - toc
---

<div class="thpt-r4-screen topic-w1-release-nav" data-thpt-r4 data-topic-w1="05" data-topic-w1-part="luyen-tap">
<p class="thpt-r4-eyebrow">HỌC THEO CHUYÊN ĐỀ · CĐ05 · TOÁN THPT</p>
<nav class="thpt-sgk-lesson-nav" aria-label="Điều hướng Chuyên đề 05">
<a href="../../cd04/kien-thuc/">← Chuyên đề trước</a>
<span class="thpt-sgk-nav-unavailable" aria-disabled="true">Chuyên đề sau →</span>
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

<!-- TOPIC05_APPROVED_SOURCE_START -->
<!-- Q18 SOURCE_LEARNER_BLOB 909f873c57e543b8f6d3c383d0b88df6900e334a; Q18_RECEIPT_BLOB 9c8c62a406e24af99efbdbe0bc081f1998c1f2ba; AUTHORING_PR #889; PUBLIC_PROJECTION_ONLY -->

# Luyện tập

Hãy tự giải trước khi mở **Lời giải**. Với câu hỏi về miền, kiểm điều kiện căn và mẫu; với đồ thị, theo dõi tọa độ trước/sau phép biến đổi và phân biệt chấm đặc – chấm rỗng. Với bài tối ưu, luôn kiểm miền khả thi. Nếu làm sai, trở lại bài Kiến thức tương ứng rồi thử một bài khác.

## 1. Hàm số, miền xác định và tập giá trị

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P01; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O01; NOT_CANONICAL -->

**Bài 1.**

Một bảng có các cặp (0,2),(1,4),(1,4),(2,5). Đây có phải một hàm số trên tập đầu vào {0,1,2} không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có; f(1)=4 được lặp nhất quán.

Mỗi đầu vào chỉ có đúng một đầu ra. Việc x=1 xuất hiện hai lần nhưng đều gắn y=4 không phá tính đơn trị.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P02; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O01; NOT_CANONICAL -->

**Bài 2.**

Một quan hệ có (0,1),(0,3),(2,4). Vì sao không phải hàm số y=f(x) trên {0,2}?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Không phải hàm số vì x=0 cho hai đầu ra 1 và 3 khác nhau.

Một hàm số phải gán mỗi x đúng một y; chỉ một đầu vào vi phạm đã đủ bác bỏ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P03; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O02; NOT_CANONICAL -->

**Bài 3.**

Tìm tập xác định f(x)=√(x+2)/(x−3).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** D=[−2,3)∪(3,+∞).

Cần x+2≥0 tức x≥−2; đồng thời x−3≠0 tức x≠3. Lấy giao và không loại x=−2 vì √0=0 hợp lệ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P04; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O02; NOT_CANONICAL -->

**Bài 4.**

Tìm tập xác định f(x)=√(4−x²)/(x+1).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** D=[−2,−1)∪(−1,2].

Điều kiện 4−x²≥0 ⇒ −2≤x≤2; đồng thời x≠−1 vì mẫu. Hai đầu x=±2 được phép.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P05; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O03; NOT_CANONICAL -->

**Bài 5.**

Cho f(x)=(x−2)²+1 với D=[−1,3]. Tìm tập giá trị thật của hàm số trên D.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** T=[1,10].

Bình phương nhỏ nhất 0 tại x=2∈D; khoảng cách |x−2| lớn nhất ở −1 bằng3, bình phương9 rồi cộng1 cho10. Hàm liên tục trên đoạn nên nhận mọi giá trị ở giữa.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P06; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O03; NOT_CANONICAL -->

**Bài 6.**

Mô hình số sản phẩm q∈{0,1,2,3}, f(q)=2q+1. Tìm tập giá trị.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** {1,3,5,7}.

Thế lần lượt đúng bốn đầu vào nguyên. Không thể nhận 4 vì phương trình 2q+1=4 cho q=1,5 không thuộc miền thực tế.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-W01; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O03; NOT_CANONICAL -->

**Bài 7.**

Cho f(x)=√(4−x²) trên số thực. (a) Tìm D; (b) tìm tập giá trị; (c) xác định chẵn/lẻ; (d) xác minh các điểm (−2,0), (0,2), (2,0) thuộc đồ thị.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** D=[−2,2], T=[0,2], hàm chẵn; cả ba điểm thuộc.

4−x²≥0 ⇒ x∈[−2,2]. Căn không âm; max√4=2 tại x=0, min0 ở ±2, giá trị trung gian đều có bởi tính liên tục của căn. f(−x)=f(x), miền đối xứng nên chẵn. Thay ba x cho các y tương ứng.

**Rubric tự đối chiếu:** 7 điểm: D và điều kiện căn (2đ), tập giá trị đủ đầu mút (2đ), chẵn với chứng minh miền đối xứng (1đ), kiểm đủ ba điểm (2đ).

</details>

## 2. Đồ thị, biến thiên và đối xứng

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P07; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O04; NOT_CANONICAL -->

**Bài 8.**

Trên đồ thị y=|x−1|+2, điểm A(0,3) và B(2,4) có thuộc đồ thị không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** A thuộc, B không thuộc.

Tính f(0)=|−1|+2=3 nên A thuộc; f(2)=|1|+2=3 khác 4 nên B không thuộc.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P08; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O04; NOT_CANONICAL -->

**Bài 9.**

Vì sao đường tròn x²+y²=4 không biểu diễn một hàm số y=f(x) trên toàn khoảng [−2,2]?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Vì x=0 cho y=2 và y=−2, vi phạm một x chỉ có một y.

Thay x=0 được y²=4. Hai giao điểm trên đường x=0 chứng minh quan hệ không đơn trị.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P09; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O05; NOT_CANONICAL -->

**Bài 10.**

Cho f(x)=x² trên D=[−4,−1]. Hàm tăng hay giảm trên D? Tìm giá trị lớn nhất và nhỏ nhất.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Giảm; lớn nhất 16 ở −4, nhỏ nhất 1 ở −1.

Với −4≤x<y≤−1 đều âm, |x|>|y| nên x²>y². Hàm giảm trên chính đoạn D; hai đầu mút lần lượt cho 16 và 1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P10; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O05; NOT_CANONICAL -->

**Bài 11.**

Chứng minh f(x)=−2x+7 nghịch biến trên ℝ mà không dùng đạo hàm.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Nghịch biến nghiêm ngặt.

Với x₁<x₂, f(x₂)−f(x₁)=−2(x₂−x₁)<0, suy ra f(x₂)<f(x₁). Đây là chứng minh cho mọi cặp, không chỉ hai điểm thử.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P11; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O06; NOT_CANONICAL -->

**Bài 12.**

f(x)=−(x−2)²+9 trên [0,5]. Tìm giá trị lớn nhất và nhỏ nhất trên đoạn.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Max 9 tại x=2; min 0 tại x=5.

Khoảng cách tới 2 nhỏ nhất 0 cho 9; lớn nhất 3 tại x=5 cho 9−9=0. Ở x=0 được5 nên không phải min.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P12; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O06; NOT_CANONICAL -->

**Bài 13.**

f(x)=2(x+1)²−3 trên [−2,2]. Tìm min/max.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Min −3 tại x=−1; max 15 tại x=2.

Đỉnh x=−1 trong đoạn cho min −3. Các đầu mút: f(−2)=−1, f(2)=15 nên max15.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P13; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O07; NOT_CANONICAL -->

**Bài 14.**

Xét f(x)=x³−x trên ℝ. Hàm chẵn, lẻ hay không loại nào? Nêu đối xứng.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Hàm lẻ, đối xứng qua gốc tọa độ.

f(−x)=−x³+x=−(x³−x)=−f(x); miền ℝ đối xứng qua 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P14; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O07; NOT_CANONICAL -->

**Bài 15.**

Xét g(x)=x²+x trên ℝ. G chẵn hay lẻ?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Không chẵn cũng không lẻ.

g(−x)=x²−x, khác g(x)=x²+x và khác −g(x)=−x²−x (chọn x=1). Miền đối xứng nhưng tính chất công thức không đạt.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P15; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O08; NOT_CANONICAL -->

**Bài 16.**

Hàm f xác định trên ℝ có chu kỳ 4: f(x+4)=f(x) với mọi x. Nếu f(1)=2, tính f(9).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** f(9)=2.

Vì 9=1+2·4, lặp quan hệ hai lần. Không cần biết công thức lượng giác.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P16; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O08; NOT_CANONICAL -->

**Bài 17.**

Bốn giá trị f(0)=1,f(1)=0,f(2)=1,f(3)=0 có đủ chứng minh f có chu kỳ 2 trên ℝ không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Không đủ.

Dữ liệu ở bốn điểm không chứng minh f(x+2)=f(x) với mọi x trong miền. Chẳng hạn hàm đa thức nội suy qua bốn điểm có thể khác nhau ở những x khác.

</details>

## 3. Tịnh tiến, phản xạ và co giãn

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P17; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O09; NOT_CANONICAL -->

**Bài 18.**

Từ f(x)=x², cho g(x)=f(x)−3. Đỉnh g ở đâu và đồ thị dịch theo hướng nào?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Dịch xuống 3; đỉnh (0,−3).

Trừ 3 khỏi mọi tung độ giữ hoành độ không đổi, (0,0)→(0,−3).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P18; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O09; NOT_CANONICAL -->

**Bài 19.**

Từ f(x)=|x|, cho g(x)=f(x)+2. Giá trị nhỏ nhất và vị trí đạt được?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Min2 tại x=0; đồ thị dịch lên2.

|x|≥0 với dấu bằng tại x=0; cộng2 vào giá trị y nên min tăng từ0 lên2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P19; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O10; NOT_CANONICAL -->

**Bài 20.**

Từ y=x², đồ thị g(x)=(x+3)² được tịnh tiến bao nhiêu đơn vị theo chiều nào?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Sang trái3; đỉnh (−3,0).

g(x)=f(x−(−3)); điểm g bằng0 tại x=−3. Dấu trong ngoặc ngược với chiều dịch của điểm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P20; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O10; NOT_CANONICAL -->

**Bài 21.**

Từ f(x)=√x (D=[0,+∞)), cho g(x)=√(x−4). Tìm D_g và chiều dịch.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** D_g=[4,+∞), dịch phải4.

Điều kiện x−4≥0 ⇒ x≥4; hình g được từ hình f bằng dịch mỗi điểm sang phải4.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P21; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O11; NOT_CANONICAL -->

**Bài 22.**

Với f(x)=x²+x, h(x)=−f(x). Đối xứng qua trục nào? Tính h(1).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Qua Ox, h(1)=−2.

Phép y↦−y giữ x, đổi dấu tung độ; f(1)=2 nên h(1)=−2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P22; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O11; NOT_CANONICAL -->

**Bài 23.**

Với f(x)=x²+x, k(x)=f(−x). Viết k và tính k(1).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** k(x)=x²−x, k(1)=0; đối xứng qua Oy.

Thay −x ở đối số: (−x)²+(−x)=x²−x. Đổi dấu x giữ tung độ tạo đối xứng Oy.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P23; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O12; NOT_CANONICAL -->

**Bài 24.**

Cho f(x)=|x|, g(x)=3f(x). Tính g(−2), xét min và mô tả biến đổi.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** g(−2)=6; min0; kéo dãn đứng hệ số3.

Mọi tung độ y nhân3, nên ở x=−2 từ2 lên6; giá trị min0 vẫn ở x=0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P24; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O12; NOT_CANONICAL -->

**Bài 25.**

f(x)=x², g(x)=−(1/2)f(x). Mô tả phép biến đổi và tính g(2).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Đối xứng qua Ox và co chiều đứng hệ số1/2; g(2)=−2.

Từ f(2)=4, nhân −1/2 được −2. Hệ số âm phản xạ qua Ox; độ lớn 1/2 thu nhỏ mọi tung độ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P25; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O13; NOT_CANONICAL -->

**Bài 26.**

f(x)=x² và g(x)=f(2x)=4x². So độ rộng hai đồ thị và tìm g(1).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** g co ngang hệ số1/2; g(1)=4.

Cùng mức y=4, f đạt x=±2 còn g đạt x=±1, nên hình g hẹp theo Ox gấp đôi. g(1)=(2)²=4.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P26; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O13; NOT_CANONICAL -->

**Bài 27.**

f(x)=|x| và h(x)=f(x/3). Đây là co hay giãn ngang? h(−6)=?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Giãn ngang hệ số3; h(−6)=2.

Để đạt mức y=2, f cần |x|=2 còn h cần |x/3|=2 tức |x|=6. h(−6)=|−2|=2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P27; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O14; NOT_CANONICAL -->

**Bài 28.**

Từ f(x)=x−2, g(x)=|f(x)|. Đỉnh hình chữ V ở đâu? Nửa dưới trục Ox biến đi đâu?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Đỉnh (2,0); phần f<0 phản xạ lên phía trên Ox.

Lấy |y| giữ y≥0 và đổi dấu y<0; đồ thị y=|x−2| không có tung độ âm, nghiệm bằng0 tại x=2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P28; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O14; NOT_CANONICAL -->

**Bài 29.**

Từ f(x)=x²−4, g(x)=|x²−4|. Tìm nghiệm g(x)=0 và tính g(0).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x=−2 hoặc 2; g(0)=4.

|u|=0 ⇔ u=0 ⇒ x²=4. f(0)=−4 được phản xạ thành g(0)=4. Không được kết luận g(x)=x²−4 mọi x.

</details>

## 4. Phép biến đổi kết hợp và mô hình thực tế

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P29; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O15; NOT_CANONICAL -->

**Bài 30.**

f(x)=x², g(x)=f(x−2)+1. Nêu chuỗi dịch và tính g(0).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Dịch phải2 rồi lên1; g(0)=5.

g(x)=(x−2)²+1. Đỉnh từ (0,0) đến (2,1), g(0)=4+1=5. Dịch ngang dùng đối số, dịch đứng dùng số ngoài.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P30; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O15; NOT_CANONICAL -->

**Bài 31.**

f(x)=x², h(x)=−2f(x+1)+3. Tìm đỉnh, chiều parabol và tính h(0).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Đỉnh (−1,3), parabol quay xuống, h(0)=1.

h(x)=−2(x+1)²+3: dịch trái1, kéo giãn đứng2 và phản xạ Ox, rồi lên3. Đỉnh tại x=−1, h(0)=−2+3=1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P31; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O16; NOT_CANONICAL -->

**Bài 32.**

f(x)=x+1 khi x<0 và f(x)=x²+1 khi x≥0. Tính f(0) và giải thích hai nhánh có nối nhau tại x=0 không.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** f(0)=1; hai nhánh gặp nhau tại (0,1) không nhảy.

Tại x=0 dùng nhánh ≥0 nên f(0)=1. Giá trị nhánh trái khi x gần0 là gần1, nhánh phải cũng gần1; điểm thuộc nhánh phải là chấm đặc.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P32; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O16; NOT_CANONICAL -->

**Bài 33.**

f(x)=2 nếu x≤1 và f(x)=x+3 nếu x>1. Xác định chấm đặc/rỗng tại x=1 và có bước nhảy không.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Chấm đặc (1,2), chấm rỗng (1,4), có bước nhảy.

Tại x=1 quy tắc đầu cho f(1)=2. Nhánh thứ hai chỉ nhận x>1, lúc x đến gần1 từ phải tung độ gần4 nhưng (1,4) không thuộc đồ thị.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P33; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O17; NOT_CANONICAL -->

**Bài 34.**

Lợi nhuận giả định R(q)=−(q−5)²+25 (triệu đồng), q∈{0,1,...,8} là số sản phẩm. Tìm giá trị lớn nhất hợp lệ và q tương ứng.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Max25 triệu tại q=5.

R(q)≤25 do trừ một bình phương, q=5 nằm trong miền nguyên cho R(5)=25. Không dùng đạo hàm; đỉnh và miền thực tế đã đủ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-P34; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O17; NOT_CANONICAL -->

**Bài 35.**

Giá thuê dịch vụ F(k)=12000+9000·max(k−2,0) (đồng), k≥0 tính bằng giờ. Tính F(1), F(4) và giải thích vai trò ngưỡng 2 giờ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** F(1)=12000 đồng, F(4)=30000 đồng; trước hoặc bằng2 giờ chỉ trả phí nền.

max(k−2,0) bằng0 với k≤2 và bằng k−2 khi k>2. Khi k=4, F=12000+9000·2=30000. Quy tắc theo từng khoảng tạo điểm đổi dốc ở k=2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-W02; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O15; NOT_CANONICAL -->

**Bài 36.**

Từ f(x)=x², cho g(x)=−2f(x+3)+4. (a) Mô tả phép biến đổi; (b) tìm đỉnh và GTLN trên ℝ; (c) tính g(0); (d) giải g(x)=0.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** Trái3, phản xạ Ox/kéo đứng2, lên4; đỉnh(−3,4), max4; g(0)=−14; nghiệm x=−3±√2.

g(x)=−2(x+3)²+4. Hệ số bình phương âm nên đạt max4 tại x=−3. g(0)=−2·9+4=−14. Giải -2(x+3)²+4=0 ⇒ (x+3)²=2 ⇒ x=−3±√2.

**Rubric tự đối chiếu:** 7 điểm: mô tả dịch ngang/đứng (1đ), phản xạ và tỉ lệ đứng (1đ), đỉnh và max có lí do (2đ), g(0) (1đ), hai nghiệm đúng và giải thích (2đ).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-W03; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O16; NOT_CANONICAL -->

**Bài 37.**

Cho f(x)=(x+2)² nếu x<−1, và f(x)=3−x nếu x≥−1. Tính f(−2), f(−1), mô tả hai chấm tại x=−1 và xác định đồ thị có bị nhảy tại đó không.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** f(−2)=0, f(−1)=4; chấm rỗng(−1,1), chấm đặc(−1,4); có bước nhảy.

Nhánh trái x<−1 cho f(−2)=0 và khi tiến tới −1 thì (x+2)² tiến đến1, nhưng không lấy điểm(−1,1). Nhánh phải có dấu ≥ nên f(−1)=3−(−1)=4 là điểm đặc. Hai nhánh không nối tại cùng y nên bị nhảy.

**Rubric tự đối chiếu:** 7 điểm: chọn đúng nhánh ở −2 (1đ), tính 0 (1đ), chọn đúng nhánh tại −1 và tính 4 (2đ), nêu đúng điểm mở (1đ), điểm đóng (1đ), giải thích bước nhảy (1đ).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP05-W04; ORIGINAL_BLOB: ab878f1a18dea87872449a79c27b75a612d81b39; OUTCOME: TOP05-O17; NOT_CANONICAL -->

**Bài 38.**

Một mô hình lợi nhuận R(q)=−(q−4)²+16 (triệu đồng), q là số sản phẩm nguyên không âm và chỉ được sản xuất q∈{0,1,2,3,4,5,6}. (a) Tìm phương án tối ưu ban đầu; (b) nếu chỉ còn lựa chọn q=5 hoặc 6, tìm phương án mới; (c) giải thích vì sao đỉnh không tự là đáp án khi miền khả thi đổi.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** Ban đầu q=4, lợi nhuận16; nếu chỉ q∈{5,6}, chọn q=5 với R(5)=15 thay vì R(6)=12.

R(q)=16−(q−4)²≤16 và q=4 khả thi, nên tối ưu toàn miền ban đầu. Khi miền còn {5,6}, q=4 không khả thi: R(5)=15, R(6)=12; chọn 5. Cần tối ưu trên miền quyết định, không trên ℝ không ràng buộc.

**Rubric tự đối chiếu:** 7 điểm: hiểu miền nguyên q và đơn vị (1đ), nhận đỉnh q4 và giá trị16 (2đ), tính R(5)=15 và R(6)=12 (2đ), chọn tối ưu q5 (1đ), giải thích thay miền thay quyết định (1đ).

</details>

<!-- TOPIC05_APPROVED_SOURCE_END -->
<span data-topic-w1-source-end="luyen-tap" hidden></span>
<p class="topic-w1-end-nav"><a href="../../">← Tổng quan các Chuyên đề</a></p>
