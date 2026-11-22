---
hide:
  - toc
---

<div class="thpt-r4-screen topic-w1-release-nav" data-thpt-r4 data-topic-w1="08" data-topic-w1-part="luyen-tap">
<p class="thpt-r4-eyebrow">HỌC THEO CHUYÊN ĐỀ · CĐ08 · TOÁN THPT</p>
<nav class="thpt-sgk-lesson-nav" aria-label="Điều hướng Chuyên đề 08">
<a href="../../cd07/kien-thuc/">← Chuyên đề trước</a>
<a href="../../cd09/kien-thuc/">Chuyên đề sau →</a>
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

<!-- TOPIC08_APPROVED_SOURCE_START -->
<!-- Q18 SOURCE_LEARNER_BLOB 0853a6de4be055d63a767b58dab20fa113e11098; Q18_RECEIPT_BLOB 9e80780f05096269b7cd1942c7006138d72d7ec9; AUTHORING_PR #829; PUBLIC_PROJECTION_ONLY -->

# Luyện tập

Em hãy tự giải từng bài, kiểm **điểm tiến tới, hướng tiếp cận và điều kiện miền** trước khi mở Lời giải. Với liên tục, đối chiếu giá trị tại điểm và giới hạn; với IVT, phải chứng minh liên tục rồi so dấu hai đầu. Khi sai, tìm lại đúng khái niệm và sửa cách lập luận trước khi tính lại.

## 1. Giới hạn của dãy số

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-P02; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O01; NOT_NEW_ID -->

**Bài 1.** Với uₙ=−4+9/n, hãy chỉ ra giới hạn và giải thích vì sao không phải −4+9.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** −4.

**Lời giải và lời giải thích:** Hiệu uₙ−(−4)=9/n→0; số 9 không giữ nguyên mà được chia cho n đang tăng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-C01; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O01; NOT_NEW_ID -->

**Bài 2.** Với uₙ=7+3/n, số 7 có ý nghĩa gì khi n tăng mãi?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Giới hạn của dãy là 7.

**Lời giải và lời giải thích:** Khoảng cách từ uₙ đến 7 bằng 3/n, tiến về 0. Như vậy 7 không cần là một số hạng của dãy.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P01; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O01; NOT_NEW_ID -->

**Bài 3.** Dãy u_n=5+4/n với n nguyên dương. Tìm giới hạn khi n→∞; số 5 có nhất thiết là số hạng nào đó của dãy không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** lim u_n=5; không số hạng nào bằng 5.

**Lời giải có suy luận:** Vì 4/n→0 nên 5+4/n→5. Với mọi n≥1, u_n−5=4/n>0 nên u_n không bao giờ bằng 5. Giới hạn nói về giá trị tiến tới, không yêu cầu dãy đạt giá trị đó.

**Nếu làm sai:** Nếu cho rằng giới hạn phải là số hạng, thử giải 4/n=0 với n hữu hạn.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-P05; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O02; NOT_NEW_ID -->

**Bài 4.** Dãy vₙ=(−1)ⁿ có giới hạn hữu hạn hoặc ±∞ không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Không có giới hạn theo các loại đã học.

**Lời giải và lời giải thích:** Các số hạng chẵn bằng 1 và lẻ bằng −1, nên không dần về một số hay vô cực có dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-C02; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O02; NOT_NEW_ID -->

**Bài 5.** Dãy uₙ=−2n có tiến đến −∞ hay không? Giải thích bằng lời.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có, uₙ→−∞.

**Lời giải và lời giải thích:** Với mọi M>0, từ n>M/2 thì −2n&lt;−M; các số hạng ngày càng nhỏ theo chiều âm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P02; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O02; NOT_NEW_ID -->

**Bài 6.** Xét v_n=(−1)^n+1/n, n≥1. Dãy có giới hạn hữu hạn hay giới hạn ±∞ không? Giải thích bằng hai dãy chỉ số chẵn/lẻ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Không có giới hạn hữu hạn hay ±∞.

**Lời giải có suy luận:** Với n=2k, v_{2k}=1+1/(2k)→1. Với n=2k+1, v_{2k+1}=−1+1/(2k+1)→−1. Hai dãy con tiến tới hai số khác nhau; không thể có giới hạn chung, và cũng không tiến tới vô cực cùng dấu.

**Nếu làm sai:** Đừng chỉ nhìn 1/n→0 rồi kết luận cả dãy về 0: thành phần (−1)^n vẫn dao động.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P03; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O03; NOT_NEW_ID -->

**Bài 7.** Tính lim(n→∞)(−2/5)^n và cho biết việc luân phiên dấu có ngăn dãy hội tụ không.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Giới hạn bằng 0; luân phiên dấu không ngăn hội tụ.

**Lời giải có suy luận:** Do |−2/5|=2/5&lt;1, trị tuyệt đối |(−2/5)^n|=(2/5)^n→0. Suy ra chính dãy tiến về 0 theo định lí kẹp; dấu có thể luân phiên nhưng độ lớn giảm về 0.

**Nếu làm sai:** So sánh q=−1 (không hội tụ) với q=−2/5 (hội tụ) bằng độ lớn |q|.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-W01; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O04; NOT_NEW_ID -->

**Bài 8.** (a) Tính lim(n→∞)(2n²+3n)/(n²+1). (b) Giải thích vì sao dãy vₙ=(−1)ⁿ không có giới hạn hữu hạn. (c) Tính 4+2+1+1/2+… và nêu điều kiện công bội.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải và lí do:** (a) Chia tử mẫu cho n²: (2+3/n)/(1+1/n²)→2. (b) Dãy con ở chỉ số chẵn bằng 1, ở chỉ số lẻ bằng −1, nên không thể tiến về một giá trị chung. (c) a=4, q=1/2 có |q|&lt;1; S=4/(1−1/2)=8.

**Rubric 4 điểm:**
1. Chia tử và mẫu đúng theo bậc n², kết luận giới hạn 2. — 1 điểm.
2. Giải thích hai dãy con chẵn/lẻ có giới hạn khác nhau. — 1 điểm.
3. Nhận diện a=4, q=1/2, kiểm tra |q|&lt;1. — 1 điểm.
4. Tính tổng vô hạn 8, giải thích do qⁿ→0. — 1 điểm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-P04; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O04; NOT_NEW_ID -->

**Bài 9.** Tính lim(n→∞) √(n²+2n)/n với n nguyên dương.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 1.

**Lời giải và lời giải thích:** Do n>0, chia trong căn cho n²: √(1+2/n)→1; không nhầm √(n²) với |n| cho n âm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-P03; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O04; NOT_NEW_ID -->

**Bài 10.** Tính lim(n→∞) (1−2/n)(4+1/n).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 4.

**Lời giải và lời giải thích:** Hai thừa số có giới hạn hữu hạn 1 và 4, nên giới hạn tích là 1×4.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-P01; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O04; NOT_NEW_ID -->

**Bài 11.** Tìm lim(n→∞) (5n²+2)/(2n²+n).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 5/2.

**Lời giải và lời giải thích:** Chia tử và mẫu cho n²; các phần 2/n² và 1/n tiến về 0; mẫu giới hạn 2 khác 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P04; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O04; NOT_NEW_ID -->

**Bài 12.** Tính lim(n→∞)(7n²−3n+1)/(2n²+n) với n≥1.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 7/2.

**Lời giải có suy luận:** Chia cả tử/mẫu cho n²: (7−3/n+1/n²)/(2+1/n)→7/2. Mẫu giới hạn bằng 2 khác 0 nên luật thương hợp lệ.

**Nếu làm sai:** Không cho rằng ∞/∞ là đáp số; đưa về biểu thức có giới hạn hữu hạn.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-W01; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O04; NOT_NEW_ID -->

**Bài 13.** Cho u_n=(4n+7)/(n+3), n≥1. (a) Biến đổi về 4−5/(n+3). (b) Tìm cận dưới đạt và cận trên không đạt. (c) Chứng minh tăng. (d) Tính lim u_n và lý giải giới hạn không phải số hạng.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** u_n=4−5/(n+3), tăng nghiêm ngặt, 11/4≤u_n&lt;4; u_1=11/4, lim=4, không đạt 4.

**Lời giải đầy đủ:** (a) (4n+7)/(n+3)=4−5/(n+3). (b) Với n≥1, 0&lt;5/(n+3)≤5/4 nên 11/4≤u_n&lt;4; dấu bằng trái tại n=1; 4 không đạt ở n hữu hạn. (c) u_{n+1}−u_n=5/(n+3)−5/(n+4)=5/[(n+3)(n+4)]>0. (d) Vì 5/(n+3)→0, giới hạn u_n là 4 mặc dù không có số hạng bằng 4.

**Rubric tự đối chiếu /7 điểm:**
1. Đổi đúng về 4−5/(n+3) (1đ)
2. Chứng minh 11/4≤u_n (1đ)
3. Chứng minh u_n&lt;4 và không đạt 4 (1đ)
4. Tính hiệu hai số hạng đúng (1đ)
5. Kết luận tăng cho mọi n≥1 (1đ)
6. Tính lim u_n=4 (1đ)
7. Phân biệt giá trị giới hạn và số hạng (1đ)

**Nếu làm sai:** Viết u_n=4−5/(n+3), kiểm phần bị trừ có dấu dương, rồi xét cận, hiệu và giới hạn.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-W02-ANCHOR; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O05; NOT_NEW_ID -->

**Bài 14.** Một thiết bị trong lần thử đầu tiêu thụ 1,2 đơn vị năng lượng. Mỗi lần thử tiếp theo tiêu thụ 3/4 lần liền trước. (a) Viết ba mức tiêu thụ đầu. (b) Thiết lập tổng n lần thử. (c) Tính tổng lý thuyết vô hạn. (d) Giải thích vì sao công thức không áp dụng với q=1.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải và lí do:** (a) 1,2; 0,9; 0,675. (b) Sₙ=1,2(1−(3/4)ⁿ)/(1−3/4). (c) Vì |3/4|&lt;1 nên (3/4)ⁿ→0, S=1,2/(1/4)=4,8. (d) Nếu q=1, mỗi số hạng bằng 1,2, tổng n lần là 1,2n tăng không bị chặn; không có tổng hữu hạn.

**Rubric 4 điểm:**
1. Tính đúng ba mức đầu và công bội. — 1 điểm.
2. Thiết lập đúng tổng riêng Sₙ, ghi điều kiện. — 1 điểm.
3. Lấy giới hạn và kết luận 4,8 đơn vị. — 1 điểm.
4. Lí giải đúng q=1 làm tổng không hội tụ hữu hạn. — 1 điểm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-P07; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O05; NOT_NEW_ID -->

**Bài 15.** Bóng rơi từ độ cao 3 m, mỗi lần bật lên cao bằng 1/2 lần trước; mô hình vô hạn. Tổng quãng đường theo phương thẳng đứng là bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 9 m.

**Lời giải và lời giải thích:** Lần đầu đi xuống 3 m. Những lần sau gồm đi lên và xuống ở các độ cao 3/2,3/4,… nên tổng là 3+2×[(3/2)/(1−1/2)]=9 m. Nêu rõ đây là mô hình lí tưởng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-P06; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O05; NOT_NEW_ID -->

**Bài 16.** Tính tổng lý thuyết 8−4+2−1+…; vì sao tổng vẫn hữu hạn dù có vô hạn số hạng?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 16/3.

**Lời giải và lời giải thích:** Đây là cấp số nhân a=8, q=−1/2, |q|&lt;1; tổng bằng 8/(1+1/2)=16/3; số hạng và phần dư tiến về 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B15-C03; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O05; NOT_NEW_ID -->

**Bài 17.** Tổng vô hạn 3+3/5+3/25+… có thể dùng công thức cấp số nhân lùi vô hạn không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có; tổng bằng 15/4.

**Lời giải và lời giải thích:** Số hạng đầu 3, công bội 1/5 có trị tuyệt đối nhỏ hơn 1; tổng 3/(1−1/5)=15/4.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P05; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O05; NOT_NEW_ID -->

**Bài 18.** Tính tổng vô hạn 12+3+3/4+3/16+⋯, và nêu điều kiện dùng công thức.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 16; công bội q=1/4 thỏa |q|&lt;1.

**Lời giải có suy luận:** Đây là CSN a=12, q=3/12=1/4. S_n=12(1−(1/4)^n)/(1−1/4); khi n→∞ thì (1/4)^n→0 nên tổng vô hạn bằng 12/(3/4)=16.

**Nếu làm sai:** Nếu áp dụng khi |q|≥1 thì không được dùng công thức tổng lùi vô hạn; quay lại kiểm giới hạn số hạng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-W02; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O05; NOT_NEW_ID -->

**Bài 19.** CSN có u_1=15,q=−1/4. (a) Viết S_n và điều kiện tính tổng vô hạn. (b) Tính S_∞. (c) Tìm n nguyên dương nhỏ nhất để |S_∞−S_n|<3/64; vì sao n=4 không đủ?

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** S_n=12[1−(−1/4)^n], S_∞=12; n nhỏ nhất 5, n=4 sai số đúng 3/64.

**Lời giải đầy đủ:** S_n=15[1−(−1/4)^n]/(1+1/4)=12[1−(−1/4)^n]. Do |q|=1/4&lt;1, q^n→0 và S_∞=12. Sai số |S_∞−S_n|=12/4^n. Muốn 12/4^n&lt;3/64 ⇔ 4^n>256=4^4, nên n nguyên dương nhỏ nhất là 5. Khi n=4, sai số đúng 12/256=3/64, không thỏa dấu nhỏ hơn nghiêm ngặt.

**Rubric tự đối chiếu /7 điểm:**
1. Chỉ rõ q=−1/4 và |q|&lt;1 (1đ)
2. Lập S_n đúng dấu (1đ)
3. Tính S_∞=12 (1đ)
4. Viết đúng sai số 12/4^n (1đ)
5. Chuyển bất đẳng thức thành 4^n>256 (1đ)
6. Tìm n nhỏ nhất bằng 5 (1đ)
7. Chỉ rõ n=4 chỉ đạt bằng 3/64 (1đ)

**Nếu làm sai:** Nếu chọn n=4, hãy thay vào sai số và so dấu &lt; với =; luôn lấy trị tuyệt đối khi q âm.

</details>

## 2. Giới hạn hàm số và các phép biến đổi

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-W01; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O06; NOT_NEW_ID -->

**Bài 20.** Cho f(x)=(x²−25)/(x−5) khi x≠5, và f(5)=m. (a) Tìm lim(x→5)f(x). (b) Tìm m để f liên tục tại 5. (c) Tính lim(x→−1⁺)1/(x+1) và lim(x→−1⁻)1/(x+1).

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải và lí do:** (a) Với x≠5, (x²−25)/(x−5)=x+5, nên giới hạn bằng 10. (b) Cần f(5)=10, tức m=10. (c) Mẫu tiến đến 0 từ phía dương bên phải −1 nên giới hạn +∞; từ phía âm bên trái nên −∞.

**Rubric 4 điểm:**
1. Phân tích nhân tử và rút gọn đúng với x≠5. — 1 điểm.
2. Tính giới hạn bằng 10, không thay x=5 vào phân thức gốc. — 1 điểm.
3. Áp điều kiện liên tục, được m=10. — 1 điểm.
4. Giải thích dấu mẫu và hai giới hạn một phía đúng. — 1 điểm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-C01; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O06; NOT_NEW_ID -->

**Bài 21.** Hàm f(x)=(x²−9)/(x−3) (x≠3) không xác định ở x=3. Nó có giới hạn khi x→3 không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có, giới hạn bằng 6.

**Lời giải và lời giải thích:** Với x≠3, f(x)=x+3. Khi x tiến đến 3, f(x) tiến đến 6; giới hạn không yêu cầu f(3) tồn tại.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P06; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O06; NOT_NEW_ID -->

**Bài 22.** Với f(x)=(x²−6x+8)/(x−2), x≠2, tính lim(x→2)f(x). Hàm có cần định nghĩa tại x=2 để có giới hạn không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Giới hạn −2; f(2) không cần được định nghĩa.

**Lời giải có suy luận:** Tử=(x−2)(x−4). Với x≠2, f(x)=x−4, nên khi x→2 thì f(x)→−2. Phép rút gọn chỉ đúng trong lân cận loại điểm; giới hạn không xác nhận f(2).

**Nếu làm sai:** Nếu thế trực tiếp ra 0/0, đó là tín hiệu cần biến đổi, không phải kết quả.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-P03; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O07; NOT_NEW_ID -->

**Bài 23.** f(x)=x² khi x≤2 và f(x)=3x−2 khi x>2. Hai giới hạn một phía ở 2 có bằng nhau không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có, đều bằng 4.

**Lời giải và lời giải thích:** Từ trái x²→4; từ phải 3x−2→4, nên giới hạn hai phía bằng 4.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-C02; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O07; NOT_NEW_ID -->

**Bài 24.** Cho f(x)=x+2 nếu x<0 và f(x)=3−x nếu x≥0. Giới hạn hai phía tại 0 có tồn tại không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Không.

**Lời giải và lời giải thích:** Phía trái tiến đến 2, phía phải tiến đến 3. Hai giới hạn một phía khác nhau nên giới hạn hai phía không tồn tại.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P07; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O07; NOT_NEW_ID -->

**Bài 25.** Cho f(x)=x+1 nếu x<1, và f(x)=x²+3 nếu x≥1. Tính hai giới hạn một phía tại 1 và quyết định có lim(x→1)f(x) không.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Trái 2, phải 4; không tồn tại giới hạn hai phía hữu hạn.

**Lời giải có suy luận:** Khi x→1⁻ dùng nhánh x+1 nên được 2. Khi x→1⁺ dùng nhánh x²+3 nên được 4. Hai giới hạn một phía khác nhau thì giới hạn hai phía không tồn tại dù f(1)=4 xác định.

**Nếu làm sai:** Không lấy giá trị f(1) thay giới hạn bên trái; đọc điều kiện từng nhánh.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-W03; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O07; NOT_NEW_ID -->

**Bài 26.** Cho f(x)=(x²−4)/|x−2| với x≠2. (a) Viết f theo hai phía x<2 và x>2. (b) Tính giới hạn trái/phải tại 2. (c) Kết luận giới hạn hai phía, giải thích vì sao dạng 0/0 không cho phép thay bằng 0.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** x&lt;2: f=−(x+2), x>2: f=x+2; trái −4, phải 4, giới hạn hai phía không tồn tại.

**Lời giải đầy đủ:** Với x≠2, x²−4=(x−2)(x+2). Khi x&lt;2, |x−2|=−(x−2) ⇒ f=−(x+2), nên lim trái=−4. Khi x>2, |x−2|=x−2 ⇒ f=x+2, lim phải=4. Hai giới hạn một phía khác nhau nên giới hạn hai phía không tồn tại; 0/0 là dạng vô định tại điểm, không phải một số.

**Rubric tự đối chiếu /7 điểm:**
1. Nhân tử hóa x²−4 (1đ)
2. Phân trường hợp |x−2| đúng (1đ)
3. Rút nhánh x&lt;2 đúng (1đ)
4. Rút nhánh x>2 đúng (1đ)
5. Giới hạn trái −4 (1đ)
6. Giới hạn phải 4 (1đ)
7. Kết luận và nêu 0/0 vô định (1đ)

**Nếu làm sai:** Vẽ trục x với 2 là điểm loại, dấu của x−2 đổi khi qua 2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-P06; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O08; NOT_NEW_ID -->

**Bài 27.** Tính lim(x→2⁻) (x+1)/(2−x).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** +∞.

**Lời giải và lời giải thích:** Tử tiến tới 3>0, mẫu dương và tiến đến 0 khi x&lt;2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-C03; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O08; NOT_NEW_ID -->

**Bài 28.** Khi x→4⁺ và x→4⁻, f(x)=1/(x−4) có xu hướng như thế nào?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** +∞ ở bên phải và −∞ ở bên trái.

**Lời giải và lời giải thích:** Khi x>4 mẫu dương rất nhỏ; khi x&lt;4 mẫu âm rất nhỏ. Dấu mẫu quyết định dấu giới hạn vô cực.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P08; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O08; NOT_NEW_ID -->

**Bài 29.** Xét f(x)=(x+1)/(x−2). Khi x→2⁻ và x→2⁺, f(x) tiến tới đâu? Có giới hạn hữu hạn hai phía không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Giới hạn trái −∞, phải +∞; không có giới hạn hai phía hữu hạn.

**Lời giải có suy luận:** Gần x=2, tử x+1→3>0. Mẫu x−2 âm rất nhỏ từ trái ⇒ f→−∞; dương rất nhỏ từ phải ⇒ f→+∞. Không gộp hai vô cực khác dấu thành một giới hạn.

**Nếu làm sai:** Lập bảng dấu tử/mẫu trên hai phía trước khi viết ±∞.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-P07; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O09; NOT_NEW_ID -->

**Bài 30.** Mô hình hiệu suất H(t)=100t/(t+5) với t≥0. Khi t tăng vô hạn, H(t) tiến đến mức nào? Điều đó có nghĩa gì?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 100 (đơn vị hiệu suất của mô hình).

**Lời giải và lời giải thích:** Chia tử mẫu cho t: H(t)=100/(1+5/t)→100. Mô hình dự báo mức bão hòa, không khẳng định giá trị 100 đạt được ở thời gian hữu hạn.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-P05; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O09; NOT_NEW_ID -->

**Bài 31.** Tính lim(x→+∞) (3x²−x)/(x²+2).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 3.

**Lời giải và lời giải thích:** Chia cả tử và mẫu cho x²; tử→3 và mẫu→1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P09; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O09; NOT_NEW_ID -->

**Bài 32.** Tính lim(x→−∞)(4x²−3)/(2x²+x).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 2.

**Lời giải có suy luận:** Chia tử/mẫu cho x²≠0 khi |x| lớn: (4−3/x²)/(2+1/x)→4/2=2, dù x tiến −∞. Bậc tử và mẫu bằng nhau, giới hạn là tỉ số hệ số dẫn.

**Nếu làm sai:** Đừng coi dấu x âm quyết định dấu x²; x² dương ở cả hai phía.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-P02; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O10; NOT_NEW_ID -->

**Bài 33.** Tính lim(x→1) (x²−1)/(x²+x−2).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 2/3.

**Lời giải và lời giải thích:** Phân tích (x−1)(x+1)/[(x−1)(x+2)] khi x≠1, sau đó thế giới hạn 2/3.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P10; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O10; NOT_NEW_ID -->

**Bài 34.** Tính lim(x→3)(x²−x−6)/(x−3). Vì sao phép thế ban đầu chưa có giá trị?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 5.

**Lời giải có suy luận:** x²−x−6=(x−3)(x+2). Biểu thức không xác định tại x=3 và thế trực tiếp cho 0/0, nhưng với x≠3 ta khử nhân tử x−3, lấy lim(x+2)=5. Giới hạn khác việc định nghĩa f(3).

**Nếu làm sai:** Chỉ khử nhân tử sau khi phân tích và nêu x≠3; 0/0 là dạng vô định.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-P01; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O11; NOT_NEW_ID -->

**Bài 35.** Tính lim(x→0) (√(x+4)−2)/x.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 1/4.

**Lời giải và lời giải thích:** Với x≠0, nhân liên hợp: (√(x+4)−2)/x=1/(√(x+4)+2), rồi cho x→0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P11; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O11; NOT_NEW_ID -->

**Bài 36.** Tính lim(x→4)(√(x+5)−3)/(x−4).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 1/6.

**Lời giải có suy luận:** Nhân liên hợp tử: [(√(x+5)−3)(√(x+5)+3)]/[(x−4)(√(x+5)+3)] = (x−4)/[(x−4)(√(x+5)+3)]=1/(√(x+5)+3), x≠4 trong miền. Khi x→4, mẫu→6, lim=1/6.

**Nếu làm sai:** Không thay 0/0 bằng 0; kiểm x+5≥0 và mẫu liên hợp khác 0 gần 4.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-W02-ANCHOR; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O12; NOT_NEW_ID -->

**Bài 37.** (a) Tính L=lim(x→0)(√(x+9)−3)/x; chỉ ra vì sao cách thế trực tiếp chưa cho đáp số. (b) Tính M=lim(x→−∞)(√(x²+1)+x). Giải thích dấu của x khi biến đổi.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải và lí do:** (a) Thế trực tiếp cho dạng 0/0 không xác định. Với x≠0, nhân liên hợp: L=lim 1/(√(x+9)+3)=1/6. (b) Nhân liên hợp: √(x²+1)+x = 1/(√(x²+1)−x). Với x→−∞, mẫu = |x|√(1+1/x²)−x = −x(√(1+1/x²)+1)→+∞; do đó M=0 từ phía dương.

**Rubric 4 điểm:**
1. Nêu được 0/0 là dạng chưa kết luận, kiểm tra miền x+9≥0. — 1 điểm.
2. Nhân liên hợp và tìm L=1/6 chính xác. — 1 điểm.
3. Biến đổi M bằng liên hợp, không nhầm √(x²)=x khi x&lt;0. — 1 điểm.
4. Giải thích mẫu →+∞ nên M→0⁺. — 1 điểm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B16-P04; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O12; NOT_NEW_ID -->

**Bài 38.** Tính lim(x→−∞) √(x²+4)/x.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** −1.

**Lời giải và lời giải thích:** Vì x âm đủ lớn, √(x²)=|x|=−x; biểu thức bằng −√(1+4/x²)→−1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P12; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O12; NOT_NEW_ID -->

**Bài 39.** Tính lim(x→+∞)(√(x²+2x)−x).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 1.

**Lời giải có suy luận:** Trực tiếp là dạng ∞−∞. Nhân liên hợp: (2x)/(√(x²+2x)+x). Với x>0 chia cho x được 2/[√(1+2/x)+1]→2/(1+1)=1. Cần x→+∞ để |x|=x; không áp cùng cách chia cho x>0 khi x→−∞.

**Nếu làm sai:** Trước khi tách √(x²), viết √(x²)=|x|, không mặc định bằng x trên toàn trục.

</details>

## 3. Tính liên tục

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-P06; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O13; NOT_NEW_ID -->

**Bài 40.** f(x)=x+1 với x<0, f(x)=x²+1 với x≥0. Liên tục tại 0 không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có.

**Lời giải và lời giải thích:** Giới hạn trái và phải cùng bằng 1, giá trị f(0)=1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-P02; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O13; NOT_NEW_ID -->

**Bài 41.** Cho f(x)=ax+1 nếu x<2, và f(x)=x²−1 nếu x≥2. Tìm a để liên tục tại 2.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** a=1.

**Lời giải và lời giải thích:** Giới hạn trái 2a+1; giới hạn phải và f(2) đều bằng 3. Điều kiện khớp 2a+1=3.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-C01; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O13; NOT_NEW_ID -->

**Bài 42.** Cho f(x)=(x²−1)/(x−1) khi x≠1 và f(1)=2. Hàm có liên tục ở 1 không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có.

**Lời giải và lời giải thích:** Giới hạn khi x→1 bằng lim(x+1)=2, khớp với giá trị f(1)=2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P13; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O13; NOT_NEW_ID -->

**Bài 43.** f(x)=(x²−4)/(x−2) với x≠2, f(2)=k. Tìm k để f liên tục tại 2.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** k=4.

**Lời giải có suy luận:** Trong lân cận x≠2, f=x+2 ⇒ lim(x→2)f=4. Liên tục tại 2 đòi f(2) được định nghĩa và bằng giới hạn, nên k=4; các k khác tạo gián đoạn có thể sửa được.

**Nếu làm sai:** Nhớ kiểm đủ: giá trị tại điểm, giới hạn hai phía, sự bằng nhau.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-P04; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O14; NOT_NEW_ID -->

**Bài 44.** Đặt f(x)=(x²−16)/(x−4) khi x≠4 và f(4)=m. Tìm m để liên tục ở 4.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** m=8.

**Lời giải và lời giải thích:** Với x≠4 rút gọn thành x+4; giới hạn khi x→4 bằng 8, nên cần f(4)=8.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-C02; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O14; NOT_NEW_ID -->

**Bài 45.** Cùng biểu thức (x²−1)/(x−1) khi x≠1 nhưng đặt f(1)=0. Hàm có liên tục ở 1 không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Không.

**Lời giải và lời giải thích:** Giới hạn bằng 2 nhưng giá trị ở điểm lại bằng 0. Thiếu điều kiện giới hạn bằng giá trị hàm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P14; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O14; NOT_NEW_ID -->

**Bài 46.** Với f(x)=(x²−4x+3)/(x−1) khi x≠1 và f(1)=9, hãy phân loại gián đoạn tại 1 và tìm giá trị thay thế để liên tục.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Gián đoạn có thể khử; thay f(1)=−2.

**Lời giải có suy luận:** Tử=(x−1)(x−3). Khi x≠1, f=x−3 nên giới hạn tại 1 là −2; hiện f(1)=9 khác giới hạn. Đổi riêng giá trị ở điểm thành −2 sẽ làm liên tục; đây không phải gián đoạn nhảy hay vô cực.

**Nếu làm sai:** Nếu thấy mẫu ban đầu bằng 0 rồi gọi 'vô cực', trước hết thử phân tích tử và xem có triệt tiêu không.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-W02-ANCHOR; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O15; NOT_NEW_ID -->

**Bài 47.** (a) Xét tính liên tục của f(x)=√(x+1) trên [−1,3], kể cả hai đầu mút. (b) Cho h(x)=x²+1 nếu x<0, và h(x)=3x+1 nếu x≥0. Chứng minh h liên tục tại 0. (c) Nếu đổi nhánh x≥0 thành 3x+2, điều gì thay đổi?

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải và lí do:** (a) f có miền xác định x≥−1; liên tục trên (−1,3), lim bên phải ở −1 bằng f(−1)=0 và lim bên trái ở 3 bằng f(3)=2, nên liên tục trên [−1,3]. (b) Lim trái h=1, lim phải h=1, h(0)=1, nên liên tục. (c) Lim trái vẫn 1 nhưng lim phải và h(0)=2: hai giới hạn một phía không khớp, nên gián đoạn tại 0.

**Rubric 4 điểm:**
1. Xác định đúng miền và tính liên tục bên trong đoạn. — 1 điểm.
2. Kiểm tra giới hạn một phía đúng tại −1 và 3. — 1 điểm.
3. So sánh hai giới hạn một phía và giá trị h(0), kết luận liên tục. — 1 điểm.
4. Phân tích nhánh thay đổi và lí giải gián đoạn, không chỉ nói 'không'. — 1 điểm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-P05; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O15; NOT_NEW_ID -->

**Bài 48.** Hàm f(x)=√(9−x²) có liên tục trên đoạn [−3,3] không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có.

**Lời giải và lời giải thích:** Miền xác định là [−3,3]. Hàm liên tục ở bên trong và có giới hạn một phía tại hai đầu mút bằng giá trị hàm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-C03; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O15; NOT_NEW_ID -->

**Bài 49.** Hàm h(x)=√(x+2) có liên tục tại đầu mút x=−2 trên miền xác định không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có, liên tục từ bên phải tại −2.

**Lời giải và lời giải thích:** Hàm xác định với x≥−2; lim(x→−2⁺)√(x+2)=0=h(−2). Không kiểm tra từ phía trái ngoài miền xác định.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P15; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O15; NOT_NEW_ID -->

**Bài 50.** Xét f(x)=√(x(4−x)) trên miền [0,4]. Hàm có liên tục trên đoạn [0,4] theo nghĩa tương đối không? Giá trị ở hai đầu là gì?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có; f(0)=f(4)=0.

**Lời giải có suy luận:** Biểu thức x(4−x)≥0 đúng trên [0,4]; đa thức và căn bậc hai liên tục trên miền thích hợp, nên hàm liên tục bên trong. Tại 0 dùng giới hạn phải bằng f(0)=0; tại 4 dùng giới hạn trái bằng f(4)=0. Không cần giới hạn từ ngoài miền.

**Nếu làm sai:** Ở đầu mút, dùng đúng giới hạn một phía phía trong miền thay vì đòi hai phía ngoài miền.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-P01; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O16; NOT_NEW_ID -->

**Bài 51.** Hàm g(x)=(x+2)/(x−1) liên tục trên những khoảng nào?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** (−∞,1) và (1,+∞).

**Lời giải và lời giải thích:** Tử và mẫu là đa thức liên tục, thương liên tục khi mẫu khác 0; phải loại x=1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P16; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O16; NOT_NEW_ID -->

**Bài 52.** Tìm miền xác định và các khoảng/đoạn liên tục theo miền cho f(x)=√(x−1)/(x−3).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** D=[1,3)∪(3,+∞); liên tục trên mỗi thành phần theo nghĩa tương đối, tại x=1 liên tục phải.

**Lời giải có suy luận:** Cần x−1≥0 ⇒ x≥1, đồng thời x−3≠0 ⇒ x≠3. Căn và phép chia liên tục nơi xác định; tại x=1, f(1)=0/(−2)=0 và giới hạn phải cùng bằng 0. Không nói f liên tục xuyên điểm loại 3.

**Nếu làm sai:** Ghi đồng thời điều kiện căn và mẫu; tại 1 chỉ xét từ phải.

</details>

## 4. Định lí giá trị trung gian, chia đôi

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-W01; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O17; NOT_NEW_ID -->

**Bài 53.** Cho f(x)=2x+k nếu x<1, và f(x)=x²+3 nếu x≥1. (a) Tìm k để f liên tục tại 1. (b) Với g(x)=x³−x−1, chứng minh có ít nhất một nghiệm của g(x)=0 trong (1,2); nói rõ điều gì chưa thể kết luận bằng định lí đổi dấu.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải và lí do:** (a) lim trái tại 1 bằng 2+k; lim phải và f(1) bằng 4, nên 2+k=4→k=2. (b) g liên tục trên [1,2] vì là đa thức; g(1)=−1, g(2)=5 trái dấu, nên tồn tại ít nhất một c∈(1,2) có g(c)=0. Chỉ từ đổi dấu chưa suy nghiệm duy nhất.

**Rubric 4 điểm:**
1. Tìm và so sánh giới hạn trái, phải và f(1). — 1 điểm.
2. Giải phương trình điều kiện liên tục k=2. — 1 điểm.
3. Kiểm tra tính liên tục của g và dấu tại hai đầu mút. — 1 điểm.
4. Kết luận tồn tại nghiệm, không tự suy tính duy nhất. — 1 điểm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-P07; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O17; NOT_NEW_ID -->

**Bài 54.** f(x)=x³−5 liên tục trên [1,2]; f(1) và f(2) trái dấu. Kết luận nào chắc chắn đúng, và có được suy ngay nghiệm duy nhất không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có ít nhất một nghiệm trong (1,2); chưa thể suy duy nhất chỉ từ định lí đổi dấu.

**Lời giải và lời giải thích:** f(1)=−4&lt;0, f(2)=3>0. Định lí cho sự tồn tại, còn tính duy nhất cần luận cứ khác.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHV-B17-P03; SOURCE_BLOB: 7934757ed06de4ae4b63dbc351ef524fc054e0d0; OUTCOME: TOP08-O17; NOT_NEW_ID -->

**Bài 55.** Chứng minh f(x)=x²−2 có ít nhất một nghiệm trong (1,2).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có ít nhất một nghiệm.

**Lời giải và lời giải thích:** Đa thức liên tục trên [1,2], f(1)=−1&lt;0, f(2)=2>0. Theo định lí giá trị trung gian, tồn tại c∈(1,2) với f(c)=0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P17; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O17; NOT_NEW_ID -->

**Bài 56.** Chứng minh x³+x−1=0 có ít nhất một nghiệm trong (0,1). Định lí giá trị trung gian đã chứng minh tính duy nhất chưa?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Ít nhất một nghiệm ở (0,1); chưa suy ra duy nhất chỉ từ IVT.

**Lời giải có suy luận:** g(x)=x³+x−1 là đa thức nên liên tục trên [0,1]. g(0)=−1&lt;0, g(1)=1>0. Theo định lí giá trị trung gian, có c∈(0,1) với g(c)=0. Muốn kết luận duy nhất phải dùng lập luận thêm (chẳng hạn g tăng do x³ và x đều tăng).

**Nếu làm sai:** Không viết 'nghiệm duy nhất theo IVT'; IVT chỉ cho tồn tại khi có liên tục và trái dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-P18; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O18; NOT_NEW_ID -->

**Bài 57.** Mô hình giả định g(t)=t²+t−3, t∈[1,2]. Chứng minh có thời điểm g(t)=0; sau hai bước chia đôi nêu một khoảng dài 1/4 chứa nghiệm.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có nghiệm; khoảng [5/4,3/2] sau 2 bước chia đôi.

**Lời giải có suy luận:** g là đa thức nên liên tục; g(1)=−1&lt;0,g(2)=3>0. Giữa [1,2] tại 3/2: g(3/2)=3/4>0 nên giữ [1,3/2]; giữa khoảng đó tại 5/4: g(5/4)=25/16+5/4−3=−3/16&lt;0 nên giữ [5/4,3/2] dài 1/4. Đây là một mô hình toán giả định, không tự suy diễn dữ liệu thực tế.

**Nếu làm sai:** Nếu đổi dấu không đúng khi chia đôi, lập bảng g(đầu),g(giữa),g(cuối), giữ cặp trái dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP08-W04; SOURCE_BLOB: 2e93db80384de53e208248eaa0396a7f487302ac; OUTCOME: TOP08-O18; NOT_NEW_ID -->

**Bài 58.** Cho f(x)=2−x² khi x≤1, và f(x)=a x+3 khi x>1. (a) Tìm a để f liên tục tại x=1. (b) Với a đó, chứng minh có nghiệm f(x)=0 trong (0,2). (c) Tìm nghiệm và giải thích vì sao duy nhất trên [0,2] (không chỉ viện dẫn IVT).

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** a=−2, f(0)=2>0, f(2)=−1&lt;0, nghiệm duy nhất x=3/2.

**Lời giải đầy đủ:** Tại 1: f(1)=2−1=1, giới hạn trái=1, giới hạn phải=a+3 ⇒ a+3=1, a=−2. Khi đó f liên tục trên [0,2] vì mỗi nhánh là đa thức và khớp tại 1. f(0)=2>0,f(2)=−4+3=−1&lt;0 nên theo IVT có c∈(0,2) với f(c)=0. Với 0≤x≤1, 2−x²≥1>0 nên không có nghiệm; với 1&lt;x≤2, f=−2x+3=0 ⇒ x=3/2 là nghiệm duy nhất. IVT bảo đảm tồn tại, tính duy nhất cần xét hai nhánh.

**Rubric tự đối chiếu /7 điểm:**
1. Tính f(1)=1 (1đ)
2. Tính giới hạn phải a+3 (1đ)
3. Tìm a=−2 (1đ)
4. Chứng minh f liên tục trên đoạn (1đ)
5. Kiểm hai đầu trái dấu và áp IVT (1đ)
6. Giải x=3/2 ở nhánh phải (1đ)
7. Loại nghiệm nhánh trái, kết luận duy nhất (1đ)

**Nếu làm sai:** Đừng kết luận duy nhất nhờ IVT; xét dấu trên [0,1] và giải phương trình tuyến tính trên (1,2].

</details>

<!-- TOPIC08_APPROVED_SOURCE_END -->
<span data-topic-w1-source-end="luyen-tap" hidden></span>
<p class="topic-w1-end-nav"><a href="../../">← Tổng quan các Chuyên đề</a></p>
