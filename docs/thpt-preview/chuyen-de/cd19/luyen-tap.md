---
hide:
  - toc
---

<div class="thpt-r4-screen topic-w1-release-nav" data-thpt-r4 data-topic-w1="19" data-topic-w1-part="luyen-tap">
<p class="thpt-r4-eyebrow">HỌC THEO CHUYÊN ĐỀ · CĐ19 · TOÁN THPT</p>
<nav class="thpt-sgk-lesson-nav" aria-label="Điều hướng Chuyên đề 19">
<a href="../../cd18/kien-thuc/">← Chuyên đề trước</a>
<a href="../../cd20/kien-thuc/">Chuyên đề sau →</a>
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

<!-- TOPIC19_APPROVED_SOURCE_START -->
<!-- Q18 SOURCE_LEARNER_BLOB ba549932e8a56bb46ec2951171e999cc70d6f34f; Q18_RECEIPT_BLOB 3d83c951f5e4df94162271b107b079451f6cc544; AUTHORING_PR #897; PUBLIC_PROJECTION_ONLY -->
<!-- W5_LINK_EQUIVALENT: NONE; canonical source immutable -->

# Luyện tập

Luyện tập theo ba mạch toán: khi nào hai cách chọn khác nhau, có thứ tự hay không, và vì sao hệ số nhị thức là số cách chọn. Hãy tự giải, nêu lý do chọn phép đếm cùng các điều kiện trước khi mở **Lời giải**. Các bài của SGK được luyện xen kẽ với bài của chuyên đề.

## 1. Quy tắc đếm và chia trường hợp


<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B23-C01; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O01; SOURCE_ROLE: CORE; NO_NEW_ID -->
**Bài luyện 1.** Một cửa hàng có 4 loại bút mực và 3 loại bút chì khác nhau. Chọn đúng một cây bút. Có bao nhiêu cách chọn?

<details markdown="1"><summary>Lời giải</summary>

Đáp án: 7 cách
Lời giải: Hai loại lựa chọn loại trừ nhau nên áp dụng quy tắc cộng: \(4+3=7\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B23-P03; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O01; SOURCE_ROLE: PRACTICE; NO_NEW_ID -->
**Bài luyện 2.** Học sinh chọn tham gia đúng một câu lạc bộ: 5 CLB khoa học hoặc 4 CLB thể thao, danh sách hai nhóm không trùng nhau. Có bao nhiêu cách?

<details markdown="1"><summary>Lời giải</summary>

Đáp án: 9 cách
Lời giải: Hai nhóm lựa chọn rời nhau, cộng \(5+4=9\).

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP19-P01; PRIMARY_OUTCOME: TOP19-O01; ROLE: TOPIC_PRACTICE; ORIGINAL_R08_KEY_UNCHANGED -->
**Bài luyện 3.** Trong quầy có 6 loại nước trà và 4 loại nước trái cây khác nhau, các loại không trùng nhau. Khách chọn đúng một loại. Có bao nhiêu cách?

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Một kết quả là **một** loại nước uống. Sáu loại trà và bốn loại nước trái cây không trùng nhau, nên đây là hai trường hợp **rời nhau**. Áp dụng quy tắc cộng, có \(6+4=10\) cách. Không dùng phép nhân vì khách không chọn đồng thời một loại ở mỗi nhóm.

**Khi làm sai:** Nếu cộng hai danh sách vẫn bị trùng một sản phẩm, phải tách/loại giao trước. Bài này đã nêu rõ không trùng.

</details>


<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B23-C02; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O02; SOURCE_ROLE: CORE; NO_NEW_ID -->
**Bài luyện 4.** Có 3 áo khác màu và 2 quần khác màu. Mỗi bộ gồm đúng một áo và một quần. Có bao nhiêu bộ?

<details markdown="1"><summary>Lời giải</summary>

Đáp án: 6 bộ
Lời giải: Mỗi lựa chọn áo kết hợp được với 2 quần: \(3\cdot2=6\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B23-P02; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O02; SOURCE_ROLE: PRACTICE; NO_NEW_ID -->
**Bài luyện 5.** Từ A đến B có 3 tuyến đường, từ B đến C có 4 tuyến. Mọi hành trình A→C bắt buộc qua B và chọn một tuyến ở mỗi đoạn. Có bao nhiêu hành trình?

<details markdown="1"><summary>Lời giải</summary>

Đáp án: 12 hành trình
Lời giải: Quy tắc nhân cho hai chặng: \(3\cdot4=12\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B23-P04; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O02; SOURCE_ROLE: APPLICATION; NO_NEW_ID -->
**Bài luyện 6.** Một thực đơn có 2 món khai vị, 3 món chính, 2 món tráng miệng. Suất ăn gồm đúng một món mỗi nhóm. Có bao nhiêu thực đơn khác nhau?

<details markdown="1"><summary>Lời giải</summary>

Đáp án: 12 thực đơn
Lời giải: Quy tắc nhân ba bước: \(2\cdot3\cdot2=12\).

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP19-P02; PRIMARY_OUTCOME: TOP19-O02; ROLE: TOPIC_PRACTICE; ORIGINAL_R08_KEY_UNCHANGED -->
**Bài luyện 7.** Một suất ăn gồm đúng một món khai vị từ 2 món, một món chính từ 3 món và một đồ uống từ 4 món. Có bao nhiêu suất ăn?

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Một suất ăn phải gồm **đủ ba phần**: khai vị, món chính và nước uống. Mỗi khai vị ghép được với 3 món chính; mỗi cặp đó ghép được với 4 đồ uống. Theo quy tắc nhân, có \(2\cdot3\cdot4=24\) suất. Không bỏ sót bước nước uống.

**Khi làm sai:** Nếu chỉ nhân \(2\cdot3\), em quên bước đồ uống. Viết rõ ba vị trí của một suất trước khi đếm.

</details>


<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B23-P01; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O03; SOURCE_ROLE: PRACTICE; NO_NEW_ID -->
**Bài luyện 8.** Mã gồm hai chữ cái lấy từ \(\{A,B,C\}\), được lặp, tiếp theo một chữ số từ 0 đến 9. Có bao nhiêu mã?

<details markdown="1"><summary>Lời giải</summary>

Đáp án: 90 mã
Lời giải: Có \(3\cdot3\cdot10=90\) mã; mỗi vị trí là một bước độc lập, có lặp chữ cái.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP19-P03; PRIMARY_OUTCOME: TOP19-O03; ROLE: TOPIC_PRACTICE; ORIGINAL_R08_KEY_UNCHANGED -->
**Bài luyện 9.** Từ \(\{0,1,2,3,4\}\) lập số tự nhiên ba chữ số đôi một khác nhau. Có bao nhiêu số?

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Hàng trăm của **số có ba chữ số** không thể là 0, nên có 4 cách chọn từ \(\{1,2,3,4\}\). Hàng chục có thể là 0 nhưng không được lặp hàng trăm: còn 4 cách. Hàng đơn vị khác cả hai chữ số trước: còn 3 cách. Vậy \(4\cdot4\cdot3=48\) số. Không tính các chuỗi bắt đầu bằng 0.

**Khi làm sai:** Vẽ các ô hàng trăm/chục/đơn vị; chỉ ô đầu cấm 0. Sau mỗi lựa chọn xóa chữ số đã dùng.

</details>


<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B23-P05; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O04; SOURCE_ROLE: PRACTICE; NO_NEW_ID -->
**Bài luyện 10.** Từ các chữ số \(0,1,2,3,4\), lập số tự nhiên có ba chữ số khác nhau và là số chẵn. Có bao nhiêu số?

<details markdown="1"><summary>Lời giải</summary>

Đáp án: \(30\) số.
Lời giải: Chia hai trường hợp rời nhau. (i) Hàng đơn vị bằng 0: hàng trăm có 4 lựa chọn, hàng chục còn 3, được \(4\cdot3=12\). (ii) Hàng đơn vị là 2 hoặc 4: có 2 lựa chọn; hàng trăm chọn trong ba chữ số khác 0 và khác chữ số đơn vị; hàng chục còn 3 lựa chọn (có thể là 0). Được \(2\cdot3\cdot3=18\). Tổng \(12+18=30\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B23-P06; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O04; SOURCE_ROLE: PRACTICE; NO_NEW_ID -->
**Bài luyện 11.** Một khách có thể chọn đúng một cách đi lại: 3 tuyến xe đạp khác nhau hoặc 2 tuyến xe buýt khác nhau. Nếu đi xe buýt, mỗi tuyến có 2 loại vé. Nếu đi xe đạp thì không chọn vé. Có bao nhiêu phương án hoàn chỉnh?

<details markdown="1"><summary>Lời giải</summary>

Đáp án: \(7\) phương án.
Lời giải: Phương án xe đạp: 3. Phương án xe buýt: \(2\) tuyến nhân \(2\) loại vé bằng \(4\). Hai nhóm lựa chọn loại trừ nhau, tổng \(3+4=7\).

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP19-P04; PRIMARY_OUTCOME: TOP19-O04; ROLE: TOPIC_PRACTICE; ORIGINAL_R08_KEY_UNCHANGED -->
**Bài luyện 12.** Từ \(\{0,1,2,3,4,5\}\) lập số chẵn có ba chữ số khác nhau. Có bao nhiêu số?

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Số chẵn phải có hàng đơn vị là 0, 2 hoặc 4. Vì số 0 bị cấm ở đầu số, chia hai trường hợp **rời nhau**. **Cuối 0:** chọn hàng trăm trong 5 chữ số khác 0, hàng chục còn 4; được \(5\cdot4=20\). **Cuối 2 hoặc 4:** có 2 cách chọn cuối; hàng trăm có 4 lựa chọn khác 0 và chữ số cuối, hàng chục còn 4, được \(2\cdot4\cdot4=32\). Tổng \(20+32=52\) số.

**Khi làm sai:** Không gộp các chữ số cuối thành một nhánh trước khi xét 0. Kiểm \(20+32=52\), tránh thiếu điều kiện khác nhau.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP19-W01; PRIMARY_OUTCOME: TOP19-O04; ROLE: TOPIC_WRITTEN; RUBRIC_ORIGINAL_R08_UNCHANGED -->
**Bài luyện 13.** Dùng các chữ số \(\{0,1,2,3,4\}\), lập số tự nhiên **ba chữ số lẻ**, các chữ số không lặp. Hãy đếm bằng chia trường hợp và giải thích vì sao không đếm cả chuỗi bắt đầu 0.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải:** Chọn hàng đơn vị lẻ 1 hoặc 3: 2 cách. Hàng trăm khác 0 và khác hàng đơn vị: còn 3 cách; hàng chục còn 3 cách (có thể là 0). Theo quy tắc nhân **\(2\cdot3\cdot3=18\)** số.

**Rubric:**
- Nhận ra đơn vị thuộc \(\{1,3\}\): 2 cách — **1 điểm**.
- Hàng trăm còn 3 lựa chọn hợp lệ khác 0 — **1 điểm**.
- Hàng chục còn 3 lựa chọn và không lặp — **1 điểm**.
- Nhân \(2\cdot3\cdot3=18\), nêu đây là số có ba chữ số — **1 điểm**.

**Khi làm sai:** Nếu ra 24, em đang đếm cả chữ số 0 ở hàng trăm hoặc không cố định hàng đơn vị lẻ. Viết ba ô [trăm][chục][đơn vị], đặt đơn vị trước (1 hoặc 3), rồi loại 0 và chữ số đã dùng ở hàng trăm. Làm lại bài Vận dụng ở Kiến thức 1.4 (đuôi 0/2 và giới hạn chữ số đầu) trước khi giải lại bài tự luận 1. Đáp án đã xem không được dùng làm chứng cứ Tự kiểm tra độc lập.

</details>

## 2. Hoán vị, chỉnh hợp, tổ hợp và công cụ tính


<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B24-C01; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O05; SOURCE_ROLE: CORE; NO_NEW_ID -->
**Bài luyện 14.** Có 5 người khác nhau đứng thành một hàng. Có bao nhiêu thứ tự xếp?

<details markdown="1"><summary>Lời giải</summary>

Đáp án: 120 cách
Lời giải: Số hoán vị \(5!=120\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B24-P03; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O05; SOURCE_ROLE: PRACTICE; NO_NEW_ID -->
**Bài luyện 15.** Các chữ T, O, A, N khác nhau được sắp thành một dãy 4 chữ. Có bao nhiêu dãy?

<details markdown="1"><summary>Lời giải</summary>

Đáp án: 24 dãy
Lời giải: Hoán vị của 4 chữ khác nhau: \(4!=24\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B24-P06; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O05; SOURCE_ROLE: PRACTICE; NO_NEW_ID -->
**Bài luyện 16.** Xếp 5 học sinh khác nhau thành một hàng, biết hai bạn A và B phải đứng cạnh nhau. Có bao nhiêu cách?

<details markdown="1"><summary>Lời giải</summary>

Đáp án: \(48\) cách.
Lời giải: Gộp A và B thành một khối, cùng 3 học sinh còn lại là 4 đối tượng phân biệt, có \(4!=24\) cách. Trong khối A/B có 2 thứ tự, tổng \(24\cdot2=48\).

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP19-P05; PRIMARY_OUTCOME: TOP19-O05; ROLE: TOPIC_PRACTICE; ORIGINAL_R08_KEY_UNCHANGED -->
**Bài luyện 17.** Có 6 quyển sách phân biệt xếp vào 6 vị trí liên tiếp. Có bao nhiêu cách?

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Vì xếp **tất cả** sáu quyển sách phân biệt và mỗi thứ tự là một kết quả khác, đây là hoán vị. Các vị trí lần lượt có 6, 5, 4, 3, 2, 1 cách chọn, nên \(6!=6\cdot5\cdot4\cdot3\cdot2\cdot1=720\). Không dùng tổ hợp vì tổ hợp không phân biệt thứ tự.

**Khi làm sai:** Kiểm từng ô nhận lần lượt 6,5,4,3,2,1 lựa chọn. Không cộng \(6+5+\cdots+1\).

</details>


<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B24-C02; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O06; SOURCE_ROLE: CORE; NO_NEW_ID -->
**Bài luyện 18.** Từ 7 học sinh khác nhau, chọn 3 người vào ba vị trí có tên A, B, C. Có bao nhiêu cách?

<details markdown="1"><summary>Lời giải</summary>

Đáp án: 210 cách
Lời giải: Chỉnh hợp chập 3 của 7: \(A_7^3=7\cdot6\cdot5=210\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B24-P02; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O06; SOURCE_ROLE: PRACTICE; NO_NEW_ID -->
**Bài luyện 19.** Một lớp có 6 ứng viên, chọn một lớp trưởng và một lớp phó (hai người khác nhau). Có bao nhiêu cách?

<details markdown="1"><summary>Lời giải</summary>

Đáp án: 30 cách
Lời giải: Có 6 lựa chọn lớp trưởng, sau đó 5 lựa chọn lớp phó: \(6\cdot5=30\).

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP19-P06; PRIMARY_OUTCOME: TOP19-O06; ROLE: TOPIC_PRACTICE; ORIGINAL_R08_KEY_UNCHANGED -->
**Bài luyện 20.** Có 7 vận động viên phân biệt, trao huy chương vàng, bạc, đồng cho 3 người khác nhau. Có bao nhiêu kết quả?

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Vàng, bạc, đồng là **ba vị trí phân biệt**; một người không nhận hai huy chương. Chọn người nhận vàng có 7 cách, bạc còn 6, đồng còn 5. Do đó chỉnh hợp \(A_7^3=7\cdot6\cdot5=210\) kết quả. Đổi người giữa vàng và bạc làm kết quả thay đổi nên không dùng \(C_7^3\).

**Khi làm sai:** Chọn 3 người chưa xong vì còn phân vai vàng/bạc/đồng. Kiểm vai nào được chọn đầu tiên.

</details>


<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B24-P01; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O07; SOURCE_ROLE: PRACTICE; NO_NEW_ID -->
**Bài luyện 21.** Chọn một nhóm gồm 3 học sinh từ 8 học sinh khác nhau, không phân vai. Có bao nhiêu nhóm?

<details markdown="1"><summary>Lời giải</summary>

Đáp án: 56 nhóm
Lời giải: \(\binom83=\frac{8\cdot7\cdot6}{3\cdot2\cdot1}=56\).

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP19-P07; PRIMARY_OUTCOME: TOP19-O07; ROLE: TOPIC_PRACTICE; ORIGINAL_R08_KEY_UNCHANGED -->
**Bài luyện 22.** Chọn nhóm 4 người từ 7 người khác nhau, không phân vai. Có bao nhiêu nhóm?

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Nhóm bốn người **không phân vai**, nên đổi thứ tự ghi tên không tạo nhóm mới. Chọn bốn từ bảy bằng tổ hợp \(C_7^4=\frac{7!}{4!3!}=\frac{7\cdot6\cdot5}{3\cdot2\cdot1}=35\). Kiểm bằng việc chọn ba người không có mặt: \(C_7^3=35\), cho cùng kết quả.

**Khi làm sai:** Không dùng \(7\cdot6\cdot5\cdot4\) vì thứ tự của thành viên không quan trọng; mỗi nhóm bị lặp \(4!\) lần.

</details>


<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B24-P04; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O08; SOURCE_ROLE: APPLICATION; NO_NEW_ID -->
**Bài luyện 23.** Chọn đội gồm 2 bạn nữ từ 5 nữ và 3 bạn nam từ 7 nam, không phân vai. Có bao nhiêu đội?

<details markdown="1"><summary>Lời giải</summary>

Đáp án: 350 đội
Lời giải: \(\binom52\binom73=10\cdot35=350\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B24-P05; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O08; SOURCE_ROLE: PRACTICE; NO_NEW_ID -->
**Bài luyện 24.** Chọn nhóm 3 người từ 6 người khác nhau, trong đó có hai người được chỉ định A và B. Có bao nhiêu nhóm chứa ít nhất một trong hai người A, B?

<details markdown="1"><summary>Lời giải</summary>

Đáp án: \(16\) nhóm.
Lời giải: Tổng số nhóm \(\binom63=20\). Nhóm không có A lẫn B chỉ chọn 3 trong 4 người còn lại: \(\binom43=4\). Vậy \(20-4=16\).

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP19-P08; PRIMARY_OUTCOME: TOP19-O08; ROLE: TOPIC_PRACTICE; ORIGINAL_R08_KEY_UNCHANGED -->
**Bài luyện 25.** Một lớp có 6 bạn nam và 5 bạn nữ. Chọn nhóm 4 người gồm đúng 2 nam, 2 nữ, không phân vai. Có bao nhiêu nhóm?

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Cần chọn **đúng hai nam, hai nữ**, không có vai. Chọn hai trong sáu nam: \(C_6^2=15\); chọn hai trong năm nữ: \(C_5^2=10\). Mỗi nhóm hợp lệ cần cả hai lựa chọn, nên nhân \(15\cdot10=150\) nhóm. Không nhân thêm \(4!\) vì đề không có thứ tự hay vị trí.

**Khi làm sai:** Nếu nhân thêm 4! khi chưa phân vai, em sẽ đếm lặp mỗi nhóm. Không thêm điều kiện mà đề không nêu.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP19-W02; PRIMARY_OUTCOME: TOP19-O08; ROLE: TOPIC_WRITTEN; RUBRIC_ORIGINAL_R08_UNCHANGED -->
**Bài luyện 26.** Có 5 học sinh nữ và 4 học sinh nam. Chọn một nhóm gồm đúng 2 nữ và 2 nam không phân vai. Sau đó chọn đúng **một đội trưởng từ nhóm đã chọn**. Có bao nhiêu cách lập nhóm **có đội trưởng**?

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải:** Chọn 2 nữ: \(C_5^2=10\); chọn 2 nam: \(C_4^2=6\). Có **60 nhóm không phân vai**. Mỗi nhóm có 4 người để chọn một trưởng, nên có **\(60\cdot4=240\)** kết quả nhóm có trưởng. Nếu chỉ hỏi số nhóm thì đáp án phải dừng ở 60.

**Rubric:**
- Chọn 2 nữ bằng tổ hợp \(C_5^2=10\) — **1 điểm**.
- Chọn 2 nam bằng tổ hợp \(C_4^2=6\) — **1 điểm**.
- Tính \(10\cdot6=60\) nhóm không phân vai — **1 điểm**.
- Chọn trưởng trong nhóm 4 cách, ra 240 và phân biệt 60 với 240 — **1 điểm**.

**Khi làm sai:** Nếu ra 60, em mới chọn nhóm và quên phân vai trưởng; nếu ra 240 ngay khi chỉ hỏi số nhóm, em đã thêm vai không có trong đề. Tách câu trả lời thành hai hàng: \(10\cdot6=60\) nhóm và **mỗi nhóm 4 chọn trưởng**. Luyện lại Vận dụng ở Kiến thức 2.4 và Luyện tập 2.8 để nhớ chỉ dùng tổ hợp khi không phân vai; sau đó giải lại bài tự luận 2. Đáp án đã xem không được dùng làm chứng cứ Tự kiểm tra độc lập.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP19-P14; PRIMARY_OUTCOME: TOP19-O14; ROLE: TOPIC_PRACTICE; ORIGINAL_R08_KEY_UNCHANGED -->
**Bài luyện 27.** Từ 9 người khác nhau: (a) chỉ chọn nhóm 3 người không phân vai, (b) chọn 3 người giữ ba chức danh phân biệt. Hãy nêu phép tính trên máy (nCr hay nPr), cho đáp án và kiểm quan hệ giữa hai kết quả mà không cần máy.

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** (a) Chỉ chọn **nhóm** ba người nên dùng nCr: \(C_9^3=\frac{9\cdot8\cdot7}{3\cdot2\cdot1}=84\) nhóm. (b) Chọn **ba chức danh khác nhau** nên dùng nPr: \(A_9^3=9\cdot8\cdot7=504\). Kiểm tay: một nhóm ba người có \(3!=6\) cách phân vai, \(84\cdot6=504\). Phải quyết định phép tính trước khi bấm máy.

**Khi làm sai:** Nếu dùng nPr ở câu (a), hãy đổi chỗ ba người mà không phân vai: đó vẫn là cùng một nhóm. Nếu cả hai câu cùng ra 84, hãy nêu ba chức danh và nhân \(3!\) số cách phân vai. Kiểm cặp \((n,k)=(9,3)\) nhập đúng thứ tự, không dùng nCr khi cần nPr.

</details>

## 3. Nhị thức Newton và ứng dụng


<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B25-C01; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O09; SOURCE_ROLE: CORE; NO_NEW_ID -->
**Bài luyện 28.** Hệ số của \(a^2b^2\) trong \((a+b)^4\) là bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

Đáp án: 6
Lời giải: Trong khai triển Newton, hệ số là \(\binom42=6\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B25-C02; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O09; SOURCE_ROLE: CORE; NO_NEW_ID -->
**Bài luyện 29.** Hệ số của \(x^2\) trong \((1+x)^5\) bằng bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

Đáp án: 10
Lời giải: \(\binom52=10\).

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP19-P09; PRIMARY_OUTCOME: TOP19-O09; ROLE: TOPIC_PRACTICE; ORIGINAL_R08_KEY_UNCHANGED -->
**Bài luyện 30.** Hãy khai triển đầy đủ \((x+2)^4\) và cho biết hệ số \(x^2\).

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Trong \((x+2)^4\), chọn số \(2\) trong \(k\) vị trí trong bốn thừa số. Với \(k=0,1,2,3,4\), hệ số tổ hợp là \(1,4,6,4,1\). Vậy \((x+2)^4=x^4+4\cdot2x^3+6\cdot2^2x^2+4\cdot2^3x+2^4=x^4+8x^3+24x^2+32x+16\). Hệ số \(x^2\) là \(6\cdot2^2=24\), không chỉ là 6.

**Khi làm sai:** Nếu viết hệ số \(x^2\) chỉ là 6, em quên chọn hạng tử 2 ở hai vị trí, nên còn nhân \(2^2\).

</details>


<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B25-P01; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O10; SOURCE_ROLE: PRACTICE; NO_NEW_ID -->
**Bài luyện 31.** Tìm hệ số của \(x^3\) trong \((2x-1)^4\).

<details markdown="1"><summary>Lời giải</summary>

Đáp án: -32
Lời giải: Chọn 3 lần \(2x\), một lần \(-1\): \(\binom43(2)^3(-1)=-32\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B25-P03; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O10; SOURCE_ROLE: PRACTICE; NO_NEW_ID -->
**Bài luyện 32.** Tìm hệ số của \(x^2\) trong \((1+3x)^4\).

<details markdown="1"><summary>Lời giải</summary>

Đáp án: 54
Lời giải: \(\binom42(3)^2=6\cdot9=54\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B25-P04; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O10; SOURCE_ROLE: APPLICATION; NO_NEW_ID -->
**Bài luyện 33.** Tìm hệ số của \(x^4\) trong \((x-2)^5\).

<details markdown="1"><summary>Lời giải</summary>

Đáp án: -10
Lời giải: Lấy 4 thừa số x và 1 thừa số \(-2\): \(\binom51(-2)=-10\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B25-P05; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O10; SOURCE_ROLE: SUPPORT_EXTENSION; NO_NEW_ID -->
**Bài luyện 34.** Tìm hệ số của \(x^3\) trong \((2-x)^6\). Bài tham khảo/mở rộng tự chọn, không dùng làm Core bắt buộc.

<details markdown="1"><summary>Lời giải</summary>

Đáp án: \(-160\).
Lời giải: Chọn 3 thừa số \((-x)\) và 3 thừa số \(2\): hệ số \(\binom63(-1)^3 2^3=20\cdot(-1)\cdot8=-160\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B25-P07; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O10; SOURCE_ROLE: PRACTICE; NO_NEW_ID -->
**Bài luyện 35.** Trong khai triển nhị thức \((4x-3)^5\), hãy tìm số hạng không chứa \(x\) mà không cần khai triển toàn bộ. Giải thích vì sao chỉ có đúng một số hạng như vậy.

<details markdown="1"><summary>Lời giải</summary>

Đáp án: \(-243\), tức số hạng tự do bằng \(-243\) (không phải số mũ hoặc hệ số đi kèm \(x\)).
Lời giải: Theo nhị thức Newton, số hạng tương ứng với chọn \(k\) thừa số \(4x\) là

\[
T_k=\binom{5}{k}(4x)^k(-3)^{5-k},\qquad k=0,1,2,3,4,5.
\]

Số mũ của \(x\) bằng \(k\); vì \(k\geq 0\), điều kiện số hạng không chứa \(x\) là \(k=0\), và đây là giá trị duy nhất. Số hạng tự do:

\[
T_0=\binom50 (4x)^0 (-3)^5=\boxed{-243}.
\]

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP19-P10; PRIMARY_OUTCOME: TOP19-O10; ROLE: TOPIC_PRACTICE; ORIGINAL_R08_KEY_UNCHANGED -->
**Bài luyện 36.** Tìm hệ số của \(x^4\) trong \((3x-2)^5\).

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Trong \((3x-2)^5\), để nhận \(x^4\) phải chọn \(3x\) ở **bốn** vị trí và \(-2\) ở vị trí còn lại. Có \(C_5^1=5\) cách chọn vị trí của \(-2\). Mỗi tích có hệ số \(3^4(-2)=81(-2)\), nên hệ số cần tìm là \(5\cdot81\cdot(-2)=-810\). Dấu âm do chọn \(-2\) **một lần**.

**Khi làm sai:** Nếu ra +810, hãy viết riêng thừa số −2 trước khi nhân; số lần chọn nó là \(k=1\) lẻ.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP19-W03; PRIMARY_OUTCOME: TOP19-O10; ROLE: TOPIC_WRITTEN; RUBRIC_ORIGINAL_R08_UNCHANGED -->
**Bài luyện 37.** Với đa thức \(P(x)=(x-2)^5\), hãy **(a)** tìm hệ số của \(x^2\), **(b)** tính tổng tất cả hệ số của P mà không cần khai triển đủ. Giải thích vì sao dấu âm xuất hiện.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Lời giải:** (a) Muốn \(x^2\) phải chọn hạng tử −2 đúng 3 trong 5 vị trí: \(k=3\). Hệ số \(C_5^3(-2)^3=10\cdot(-8)=-80\). Dấu âm vì k lẻ. (b) Vì \(P(x)\) là đa thức nên tổng hệ số bằng \(P(1)=(1-2)^5=-1\).

**Rubric:**
- Nêu đúng \(k=3\) để được \(x^2\) từ năm thừa số — **1 điểm**.
- Tính \(C_5^3=10\) và \((-2)^3=-8\) — **1 điểm**.
- Kết luận hệ số \(x^2\) là −80, giải thích dấu âm — **1 điểm**.
- Tính \(P(1)=-1\) và nêu lý do tổng hệ số — **1 điểm**.

**Khi làm sai:** Nếu hệ số \(x^2\) là +80, em đã bỏ dấu của \((-2)^3\). Trước khi thế số, giải **\(5-k=2\Rightarrow k=3\)**, sau đó ghi ba lần nhân hạng tử âm nên hệ số âm. Nếu tổng hệ số không bằng −1, hãy thay \(x=1\) vào **cả đa thức \(P(x)\)** chứ không cộng dấu từng hạng theo cảm tính. Luyện lại Vận dụng ở Kiến thức 3.2 và Luyện tập 2.11 về số lần chọn hạng tử âm; tiếp đó kiểm \(P(1)\) như Kiến thức 3.5 rồi giải lại bài tự luận 3. Đáp án đã xem không được dùng làm chứng cứ Tự kiểm tra độc lập.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP19-P13; PRIMARY_OUTCOME: TOP19-O13; ROLE: TOPIC_PRACTICE; ORIGINAL_R08_KEY_UNCHANGED -->
**Bài luyện 38.** Một kho ban đầu có 2 000 sản phẩm. Số sản phẩm tăng theo hệ số 2% mỗi năm trong 5 năm. **(a)** Dùng hai số hạng đầu của \((1+0{,}02)^5\) để ước lượng số sản phẩm. **(b)** Tính giá trị mô hình chính xác bằng máy (làm tròn đến 2 chữ số thập phân) và nhận xét ước lượng cao hay thấp.

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Đổi \(2\%\) thành \(r=0{,}02\). Sau năm năm có \(2000(1+r)^5\). (a) Lấy **hai số hạng đầu** \((1+r)^5\approx1+5r\), được \(2000(1+5\cdot0{,}02)=2200\) sản phẩm. (b) Tính đầy đủ \(2000(1{,}02)^5=2208{,}1616064\approx2208{,}16\), lớn hơn ước lượng khoảng \(8{,}16\). Các số hạng bỏ qua \(10r^2+10r^3+5r^4+r^5>0\), nên ước lượng **không chính xác tuyệt đối**.

**Khi làm sai:** Nếu ra 2040, em chỉ tính 1 năm, cần hệ số \(5r\) cho 5 năm. Nếu trừ 8,16 ra số khác, hãy xác định rõ “ước lượng thấp hơn” nghĩa là 2 200 nhỏ hơn 2 208,16.

</details>


<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B25-P02; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O11; SOURCE_ROLE: SUPPORT_EXTENSION; NO_NEW_ID -->
**Bài luyện 39.** Tìm số hạng không chứa \(x\) trong \((x+\frac1x)^6\) với \(x\ne0\). Bài tham khảo/mở rộng tự chọn, không dùng làm Core bắt buộc.

<details markdown="1"><summary>Lời giải</summary>

Đáp án: 20
Lời giải: Số hạng thứ \(k+1\) có lũy thừa \(x^{6-2k}\). Bằng \(x^0\) khi \(k=3\), hệ số \(\binom63=20\).

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP19-P11; PRIMARY_OUTCOME: TOP19-O11; ROLE: TOPIC_PRACTICE; ORIGINAL_R08_KEY_UNCHANGED -->
**Bài luyện 40.** **Tự chọn mở rộng SBT (sau phần đa thức):** Tìm số hạng không chứa x trong \((2x+\frac1x)^4\), \(x\ne0\).

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Phải có \(x\ne0\) để \(\frac1x\) xác định. Chọn \(\frac1x\) ở \(k\) vị trí trong bốn thừa số của \((2x+\frac1x)^4\), còn \(4-k\) vị trí chọn \(2x\). Số mũ của \(x\) là \(4-2k\). Số hạng không chứa \(x\) cần \(4-2k=0\), tức \(k=2\). Hệ số bằng \(C_4^2\cdot2^{4-2}=6\cdot4=24\). Đây là bài mở rộng, không phải kiến thức bắt buộc của SGK B25.

**Khi làm sai:** Dù chọn phần \(\frac1x\) hai lần, còn hai phần 2x nên phải nhân \(2^2\); đừng bỏ hệ số 2.

</details>


<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B25-P06; ORIGINAL_BANK_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232; OUTCOME_ID: TOP19-O12; SOURCE_ROLE: OPTIONAL_SPECIALIZED; NO_NEW_ID -->
**Bài luyện 41.** Tính tổng các hệ số của những số hạng có số mũ lẻ của \(x\) trong khai triển \((1+x)^7\). Bài tham khảo/mở rộng tự chọn, không dùng làm Core bắt buộc.

<details markdown="1"><summary>Lời giải</summary>

Đáp án: \(64\).
Lời giải: Đặt \(f(x)=(1+x)^7\). Tổng hệ số bậc chẵn trừ tổng hệ số bậc lẻ là \(f(-1)=0\); tổng tất cả hệ số là \(f(1)=2^7=128\). Vậy tổng hệ số bậc lẻ bằng \(\frac{128-0}{2}=64\).

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP19-P12; PRIMARY_OUTCOME: TOP19-O12; ROLE: TOPIC_PRACTICE; ORIGINAL_R08_KEY_UNCHANGED -->
**Bài luyện 42.** Tổng hệ số của đa thức \((2x+1)^4\) bằng bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

**Lời giải:** Nếu \(P(x)=a_0+a_1x+\cdots+a_nx^n\) là đa thức, thay \(x=1\) được \(P(1)=a_0+a_1+\cdots+a_n\), tức **tổng hệ số**. Với \(P(x)=(2x+1)^4\), \(P(1)=(2\cdot1+1)^4=3^4=81\). Không cần khai triển đầy đủ; không áp dụng máy móc cho biểu thức có lũy thừa âm của \(x\).

**Khi làm sai:** Nếu ra 16, em đã bỏ hạng tử +1. Thay toàn bộ nhị thức tại \(x=1\) trước khi nâng lũy thừa.

</details>

<!-- TOPIC19_APPROVED_SOURCE_END -->
<span data-topic-w1-source-end="luyen-tap" hidden></span>
<p class="topic-w1-end-nav"><a href="../../">← Tổng quan các Chuyên đề</a></p>
