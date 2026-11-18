<!-- AUTHORING CANDIDATE R02 / DELTA_C_ACADEMIC_MATERIAL / NOT CONTENT_READY. R01 immutable; holistic source QA and owner learner UX review required before activation. -->
# CĐ08/22 — Giới hạn và Tính liên tục · Biên tập liền mạch R02 (ứng viên)

**LEARNING_PATH: TOPIC** · Hành trình độc lập có đúng **Kiến thức / Luyện tập / Tự kiểm tra**, không tạo Core Topic. Nguồn SGK/G11 ChV chỉ để đối chiếu S1 và tham chiếu canonical; toàn bộ kiến thức cần thiết cho 18 outcome được giải thích ngay trong CĐ08.

## Nguồn chuẩn, ranh giới và trang in

- **SGK Toán 11 Kết nối tri thức tập 1 Chương V:** Bài 15 Giới hạn của dãy số **trang in 104–110**, Bài 16 Giới hạn của hàm số **111–118**, Bài 17 Hàm số liên tục **119–122**, bài tập cuối chương **123**. Đây là trang in đã ghi trong source G11 ChV R03, không suy từ PDF index SGK mới ở lượt này.
- **SBT Toán 11 KNTT Tập 1 (đã kiểm chứng trực tiếp ở receipt Git lịch sử):** B15 trang in **75–78**/PDF one-based **76–79**, B16 **79–83**/PDF **80–84**, B17 **84–86**/PDF **85–87**, cuối ChV **87–90**/PDF **88–91**; publisher PDF SHA256 `fb5292103e5b682531ce37b5f30598393bba81b2943da9c1a374fdeb56557229`. Đây là truy nguyên receipt đã khóa, **không tuyên bố quét lại PDF trong lượt AUTHORING này**.
- **SGK PUBLIC original canonical:** chính xác 36 `item_id` của G11 ChV R03 Git blob `7934757ed06de4ae4b63dbc351ef524fc054e0d0`, biên bản Academic/PED độc lập lịch sử `2fdc39c755f399b0df81e17a9c8978384612e2f1`; nguồn cũ giữ nguyên, không nhân đề/đáp án/rubric. PASS SGK ChV lịch sử **không cấp** Topic PASS mới.
- **Ranh giới:** tổng cấp số nhân lùi vô hạn học ở B15 và được giải từ giới hạn tổng riêng trong CĐ08; kỹ thuật dãy CSC/CSN tổng quát thuộc CĐ07. Đạo hàm và tiếp tuyến thuộc CĐ09; tiệm cận/khảo sát hàm số thuộc CĐ10. Có thể nhắc giới hạn vô cực để phân biệt nhưng không dạy khảo sát tiệm cận tại đây. Bisection chỉ là ứng dụng IVT, không giả định học sinh đã biết đạo hàm.

# Kiến thức

## Vì sao phải học giới hạn và liên tục?

Một dãy có thể tiến gần một số mãi dù chưa hề chạm nó; một hàm số có thể có giới hạn tại điểm mà chính điểm đó bị loại; một phương trình có thể chắc chắn có nghiệm dù ta chưa giải chính xác. Ba ý tưởng này cho phép phân biệt **hành vi gần điểm** với **giá trị tại điểm**, rồi dùng tính liên tục để suy luận về nghiệm. Người học đi từ hình ảnh và sai số tới quy tắc, tự thử trước khi tự mở đối chiếu.

## Tiến gần một giá trị không có nghĩa phải bằng nó

Một dãy số có thể không bao giờ chạm số đích mà vẫn tiến sát số đó. Từ trực giác khoảng cách, ta phân biệt giới hạn hữu hạn, xu hướng vô cực và dao động không có giới hạn.

### Giới hạn hữu hạn của dãy số và ý nghĩa tiến gần

<!-- LESSON_ID: TOP08-M01 · OUTCOME_ID: TOP08-O01 · connected prose R02 -->

Ta xét dãy \(u_n=2+1/n\) với \(n\) nguyên dương. Mọi số hạng đều lớn hơn 2, nên không số hạng nào bằng 2. Tuy vậy, khi \(n\) tăng, khoảng cách \(|u_n-2|=1/n\) nhỏ dần và có thể nhỏ hơn **bất kỳ độ sai lệch dương nào** nếu \(n\) đủ lớn. Đó là ý nghĩa của câu “dãy tiến tới giới hạn 2”: không đòi chạm giá trị đích ở một chỉ số hữu hạn.

Nói chính xác, \(u_n\to L\) nếu với mọi \(\varepsilon>0\), từ một chỉ số đủ lớn trở đi luôn có \(|u_n-L|<\varepsilon\). Trong ví dụ, chỉ cần chọn \(N>1/\varepsilon\) và \(n\ge N\), ta được \(1/n<\varepsilon\). Việc chứng minh bằng khoảng cách cho thấy công thức giới hạn không chỉ là phép thế \(n=\infty\), mà là một khẳng định về mọi mức sai số.

**Em tự thử:** Với \(v_n=1+3/n\), \(n\ge1\), dãy tiến tới số nào? Giải thích bằng khoảng cách.

<details class="slm-topic-first-try" markdown="1">
<summary>Em đã tự làm? Mở phần đối chiếu</summary>

Giới hạn bằng 1 vì \(|v_n-1|=3/n\to0\). Nếu em cho rằng giới hạn phải là một số hạng, hãy thử giải \(1+3/n=1\) để thấy không có \(n\) hữu hạn nào thỏa, dù dãy vẫn tiến tới 1.

</details>

### Giới hạn vô cực và không tồn tại do dao động

<!-- LESSON_ID=TOP08-M02; OUTCOME_ID=TOP08-O02 -->

Nếu các số hạng không tiến tới một số hữu hạn thì chắc chắn tiến +∞ hoặc −∞? Trước hết, ta xuất phát từ dấu số, n tăng, dãy chỉ số chẵn/lẻ. Có ba hành vi cần tách: hữu hạn, tiến vô cực có dấu, và không có giới hạn (dao động, có thể không bị chặn). u_n→+∞ nếu cuối cùng vượt mọi ngưỡng M, u_n→−∞ nếu cuối cùng nhỏ hơn −M. Dãy (−1)^n dao động giữa ±1: không có giới hạn hữu hạn nhưng cũng không tiến đến vô cực; xem hai dãy con chẵn/lẻ.

Một ví dụ giúp kiểm chứng điều đó. v_n=−n² với n≥1 đi về −∞ vì với mọi M>0, n>√M thì v_n<−M. Còn w_n=(−1)^n có dãy con chẵn=1, lẻ=−1, nên không thể có cùng giới hạn. Chọn kiểm dãy con thay vì dựa trên vài số hạng.

**Em tự thử:** u_n=n², n≥1, giới hạn là gì?

<details class="slm-topic-first-try" markdown="1">
<summary>Em đã thử? Mở lời giải và đường khắc phục</summary>

+∞, vì n vượt mọi căn của ngưỡng dương.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu viết 'vô hạn' cho (−1)^n, hãy liệt kê các số hạng chẵn và lẻ rồi xét giới hạn từng dãy con.

</details>

### Dãy q^n: điều kiện về trị tuyệt đối

<!-- LESSON_ID=TOP08-M03; OUTCOME_ID=TOP08-O03 -->

Số hạng đổi dấu luân phiên có nhất thiết không hội tụ? Điểm tựa cho suy luận là lũy thừa số thực và trị tuyệt đối. Khi |q|<1, |q^n|=|q|^n→0 nên q^n→0, kể cả q âm. Nếu q=1 thì q^n=1; q=−1 dao động; nếu q>1 thì q^n→+∞; q<−1 cho các nhánh dấu luân phiên với độ lớn tăng, không có giới hạn vô cực có dấu. Trường hợp q=0 cho 0^n=0 với n≥1.

Hãy theo dõi cách giải này. Với q=−1/4, số hạng q^n đổi dấu nhưng có độ lớn 1/4^n→0, nên giới hạn là 0. Chọn trị tuyệt đối để nhìn thấy cơ chế hội tụ trước khi hỏi dấu.

**Em tự thử:** lim(n→∞)(3/2)^n là gì?

<details class="slm-topic-first-try" markdown="1">
<summary>Em đã thử? Mở lời giải và đường khắc phục</summary>

+∞ vì 3/2>1 và lũy thừa tăng không bị chặn.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu nhầm q âm với không hội tụ, so (−1/4)^n và (−1)^n qua |q|.

</details>

### Quy tắc giới hạn hữu hạn và chia lũy thừa n

<!-- LESSON_ID=TOP08-M04; OUTCOME_ID=TOP08-O04 -->

Tại sao ký hiệu ∞/∞ không giúp tính giới hạn dãy phân thức? Ta có thể bắt đầu bằng giới hạn của 1/n, phép cộng/nhân/chia với mẫu giới hạn khác 0. Quy tắc cộng, nhân, chia giới hạn hữu hạn chỉ dùng trực tiếp khi các giới hạn liên quan hữu hạn và mẫu giới hạn khác 0. Đối với tỉ số đa thức theo n, chia cho lũy thừa cao nhất để các hạng 1/n^k tiến 0. Nếu có căn chứa n², nhớ n>0 nên √(n²)=n, còn với biến thực x có thể âm phải giữ |x|.

Thử vận dụng vào một tình huống. lim(n→∞)(3n²+n)/(n²+7)=lim(3+1/n)/(1+7/n²)=3. Chọn bậc 2 vì đây là lũy thừa lớn nhất; sau chia mẫu tiến 1 khác 0.

**Em tự thử:** lim(n→∞)(4n+3)/(2n−1) bằng bao nhiêu?

<details class="slm-topic-first-try" markdown="1">
<summary>Em đã thử? Mở lời giải và đường khắc phục</summary>

2, vì chia cho n cho (4+3/n)/(2−1/n)→2.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu thế 'n=∞', hãy thực hiện phép chia n^k để chuyển sang giới hạn có thể tính.

</details>

### Tổng CSN lùi vô hạn và điều kiện hội tụ

<!-- LESSON_ID=TOP08-M05; OUTCOME_ID=TOP08-O05 -->

Vô hạn số hạng có thể cộng thành hữu hạn như thế nào mà không mâu thuẫn? Những điều đã biết ở đây là cĐ07 định nghĩa CSN và tổng S_n hữu hạn, giới hạn q^n. Số S=∑_{k=0}^∞ a q^k được định nghĩa là giới hạn của các tổng riêng S_n, không phải phép cộng xong vô hạn bước. Nếu |q|<1, q^n→0 và S_n=a(1−q^n)/(1−q)→a/(1−q). Nếu |q|≥1 với a≠0 thì số hạng không tiến 0 nên tổng riêng không thể hội tụ. Phần dư R_n=a q^n/(1−q) quyết định sai số.

Từ lập luận vừa rồi, ta xét: 10+5+2,5+… có a=10,q=1/2; S_n=20(1−(1/2)^n), phần dư=20/2^n nên tổng tiến 20. Ta chọn xem S_n trước S∞ để thấy nguồn gốc điều kiện hội tụ.

**Em tự thử:** 6+2+2/3+… có tổng vô hạn bao nhiêu?

<details class="slm-topic-first-try" markdown="1">
<summary>Em đã thử? Mở lời giải và đường khắc phục</summary>

9, vì q=1/3 và S=6/(1−1/3)=9.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu dùng công thức khi q=1 hoặc −1, hãy xét giới hạn của số hạng trước: nó không về 0.

</details>

## Quan sát hàm số trong lân cận một điểm

Với hàm số, điều quan trọng là giá trị khi x tiến tới điểm, không phải chỉ giá trị ngay tại điểm. Giới hạn một phía, giới hạn vô cực và các phép khử dạng chưa xác định sẽ trở nên rõ ràng từ cách nhìn ấy.

### Giới hạn hàm số tại một điểm: xét lân cận bỏ điểm

<!-- LESSON_ID=TOP08-M06; OUTCOME_ID=TOP08-O06 -->

Vì sao một hàm không được định nghĩa tại x=a mà vẫn có giới hạn ở a? Để hiểu, ta dựa vào hàm số và phép biến đổi trên miền xác định. lim(x→a)f(x)=L hỏi giá trị f(x) khi x đủ gần a nhưng x≠a và thuộc miền xác định. Giá trị f(a) có thể khác L hoặc không tồn tại. Để tính giới hạn của phân thức có dạng 0/0, trước tiên nêu điều kiện loại điểm rồi biến đổi tương đương trên lân cận bỏ điểm, tuyệt đối không dùng kết quả để tự cho f(a) bằng L.

Xét trường hợp sau. f(x)=(x²−5x+6)/(x−2) với x≠2. Tử=(x−2)(x−3), rút còn x−3 trên miền x≠2; lim(x→2)f(x)=−1 dù f(2) không xác định. Chọn phân tích nhân tử vì thế trực tiếp cho 0/0.

**Em tự thử:** lim(x→0) [x(x−4)]/x (x≠0) bằng bao nhiêu?

<details class="slm-topic-first-try" markdown="1">
<summary>Em đã thử? Mở lời giải và đường khắc phục</summary>

−4 do biểu thức rút còn x−4 trên miền x≠0.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu gọi 0/0 là giới hạn, xem hai hàm (x−2)/(x−2) và 2(x−2)/(x−2), cùng thế 0/0 nhưng có giới hạn 1 và 2.

</details>

### Giới hạn một phía và điều kiện tồn tại giới hạn hai phía

<!-- LESSON_ID=TOP08-M07; OUTCOME_ID=TOP08-O07 -->

Hàm có thể tiến đến hai giá trị khác nhau khi ta lại gần từ trái và từ phải không? Trước hết, ta xuất phát từ bất đẳng thức x<a/x>a, hàm xác định từng phần. Giới hạn trái lim(x→a⁻) xét x<a, phải lim(x→a⁺) xét x>a, đều đi trong miền xác định. Giới hạn hai phía hữu hạn tồn tại và bằng L khi và chỉ khi cả hai giới hạn một phía cùng tồn tại và bằng L. f(a) không quyết định hai giới hạn này; đọc điều kiện từng nhánh trước khi thế.

Một ví dụ giúp kiểm chứng điều đó. f(x)=x+2 nếu x<0; f(x)=2x+1 nếu x≥0. Khi x→0⁻, f→2; khi x→0⁺, f→1. Hai giá trị khác nên không có giới hạn hai phía, mặc dù f(0)=1. Chọn phương pháp tách nhánh vì hàm từng phần.

**Em tự thử:** lim(x→0⁻)|x|/x và lim(x→0⁺)|x|/x bằng gì?

<details class="slm-topic-first-try" markdown="1">
<summary>Em đã thử? Mở lời giải và đường khắc phục</summary>

−1 và +1, nên giới hạn hai phía không tồn tại.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu chỉ thế nhánh x≥0 tại 0, hãy vẽ hai mũi tên tiến vào 0 từ hai phía.

</details>

### Giới hạn vô cực tại điểm hữu hạn và dấu một phía

<!-- LESSON_ID=TOP08-M08; OUTCOME_ID=TOP08-O08 -->

Một phân thức có mẫu tiến đến 0 thì luôn tiến +∞ không? Điểm tựa cho suy luận là bảng dấu, 0⁺ và 0⁻, tử khác 0 gần điểm. Khi tử tiến đến một số khác 0 và mẫu tiến 0, giới hạn có thể là +∞ hoặc −∞ tùy dấu tử/mẫu trên từng phía. Kí hiệu f(x)→+∞ hay −∞ mô tả không bị chặn theo dấu, không phải giới hạn hữu hạn. Nếu trái và phải vô cực khác dấu thì không thể nói có giới hạn vô cực chung có một dấu.

Hãy theo dõi cách giải này. f(x)=1/(x−5): x→5⁻ thì mẫu âm nhỏ ⇒ f→−∞; x→5⁺ thì mẫu dương nhỏ ⇒ f→+∞. Chọn bảng dấu mẫu vì tử dương không đổi.

**Em tự thử:** lim(x→3⁻) 1/(3−x) là gì?

<details class="slm-topic-first-try" markdown="1">
<summary>Em đã thử? Mở lời giải và đường khắc phục</summary>

+∞ vì 3−x tiến 0 từ phía dương.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu cứ thấy mẫu 0 là +∞, đặt x=4,99 và 5,01 để kiểm dấu mẫu.

</details>

### Giới hạn hàm số khi x→±∞: tỉ số bậc đa thức

<!-- LESSON_ID=TOP08-M09; OUTCOME_ID=TOP08-O09 -->

Hai đa thức đều rất lớn thì tỉ số sẽ luôn tiến đến 1? Ta có thể bắt đầu bằng quy tắc giới hạn 1/x^k→0 và dấu x âm. Với phân thức đa thức, so bậc tử/mẫu và chia cho lũy thừa x thích hợp. Nếu bậc bằng nhau thì giới hạn là tỉ số hệ số đầu (mẫu đầu khác 0); nếu bậc tử nhỏ hơn, giới hạn 0. Nếu bậc tử lớn hơn, cần xét dấu và bậc của phần còn lại, không tự viết ∞. Khi x→−∞, x lũy thừa chẵn dương, lẻ âm.

Thử vận dụng vào một tình huống. lim(x→−∞)(2x²+5x)/(5x²−1) = lim(2+5/x)/(5−1/x²)=2/5. Chọn chia x² vì hai đa thức cùng bậc; −∞ không đổi dấu x².

**Em tự thử:** lim(x→+∞)(−3x³+1)/(x³+4) bằng bao nhiêu?

<details class="slm-topic-first-try" markdown="1">
<summary>Em đã thử? Mở lời giải và đường khắc phục</summary>

−3; chia cả tử/mẫu cho x³.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu giữ dấu 'x âm' ở mọi hạng, tách x² và x³ ra để so dấu của từng lũy thừa.

</details>

### Dạng 0/0: phân tích nhân tử và điều kiện khử

<!-- LESSON_ID=TOP08-M10; OUTCOME_ID=TOP08-O10 -->

Làm sao biến một biểu thức 'không xác định ở điểm' thành giới hạn tính được? Những điều đã biết ở đây là hằng đẳng thức và phân thức khác 0 ở lân cận bỏ điểm. 0/0 là dạng vô định khi thế thử, không phải kết quả. Tìm nhân tử chung và khử chỉ trên các x khác điểm cấm; biểu thức sau khử giúp tính giới hạn nhưng không mở rộng miền của hàm gốc. Khi nhân tử không triệt tiêu hoặc hàm từng nhánh khác, phải kiểm lại một phía.

Từ lập luận vừa rồi, ta xét: (x²−7x+12)/(x−3) có tử (x−3)(x−4); với x≠3 rút thành x−4, giới hạn tại 3 là −1. Chọn phân tích nhân tử vì nghiệm tử trùng nghiệm mẫu.

**Em tự thử:** lim(x→6)(x²−36)/(x−6) bằng gì?

<details class="slm-topic-first-try" markdown="1">
<summary>Em đã thử? Mở lời giải và đường khắc phục</summary>

12, vì tử=(x−6)(x+6) và x≠6.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu viết 0/0 hoặc giá trị hàm tại x=3, trở lại định nghĩa lân cận loại điểm.

</details>

### Dạng 0/0 có căn: nhân liên hợp

<!-- LESSON_ID=TOP08-M11; OUTCOME_ID=TOP08-O11 -->

Khi tử chứa √(x+a)−b, vì sao nhân liên hợp giúp thay dạng 0/0 bằng một phân thức có giới hạn? Để hiểu, ta dựa vào (A−B)(A+B)=A²−B², miền căn. Với phân thức chứa √(x+c)−d và điểm thế cho tử/mẫu đều 0, nhân cả tử và mẫu với liên hợp √(x+c)+d để trừ hai bình phương, lộ nhân tử khử. Phép biến đổi chỉ hợp lệ trên miền gốc, khi mẫu liên hợp khác 0; sau khử mới thế giới hạn. Không dùng phép nhân liên hợp để 'thay' điều kiện căn.

Xét trường hợp sau. lim(x→0)(√(x+16)−4)/x: nhân liên hợp (√(x+16)+4), được 1/(√(x+16)+4) với x≠0 nên giới hạn 1/8. Chọn liên hợp vì bình phương sẽ tạo x để khử.

**Em tự thử:** lim(x→0)(√(x+25)−5)/x bằng bao nhiêu?

<details class="slm-topic-first-try" markdown="1">
<summary>Em đã thử? Mở lời giải và đường khắc phục</summary>

1/10, vì bằng 1/(√(x+25)+5) gần x=0.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu căn khiến bạn 'bình phương cả phân thức', thử nhân liên hợp đúng dạng và giữ điều kiện x+c≥0.

</details>

### Dạng ∞−∞ và dấu khi tách căn x²

<!-- LESSON_ID=TOP08-M12; OUTCOME_ID=TOP08-O12 -->

Tại sao √(x²) không luôn bằng x? Trước hết, ta xuất phát từ trị tuyệt đối |x|, nhân liên hợp, giới hạn 1/x. Khi x→+∞, √(x²)=x vì x>0; khi x→−∞, √(x²)=−x. Với √(x²+a x)−x ở +∞, nhân liên hợp để biến hiệu hai lượng lớn thành phân thức có giới hạn. Ở −∞ không được chia bằng cùng giả thiết x>0. Giới hạn có thể hữu hạn dù hai thành phần đều vô hạn.

Một ví dụ giúp kiểm chứng điều đó. lim(x→+∞)[√(x²+6x)−x] = lim(6x)/[√(x²+6x)+x]=lim 6/[√(1+6/x)+1]=3. Chọn nhân liên hợp thay cho viết '∞−∞'.

**Em tự thử:** lim(x→+∞)[√(x²+8x)−x] bằng bao nhiêu?

<details class="slm-topic-first-try" markdown="1">
<summary>Em đã thử? Mở lời giải và đường khắc phục</summary>

4, bằng 8/[√(1+8/x)+1]→4.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu quên dấu x, thay x=−10 để thấy √(x²)=10 chứ không phải −10.

</details>

## Khi nào đồ thị đi qua điểm mà không đứt?

Tính liên tục nối giới hạn với giá trị hàm. Ta sẽ thấy sự khác biệt giữa một lỗ có thể vá, một bước nhảy và một nhánh lao ra vô cực trước khi dùng quy tắc liên tục.

### Liên tục tại điểm: ba điều kiện và nối đúng giá trị

<!-- LESSON_ID=TOP08-M13; OUTCOME_ID=TOP08-O13 -->

Giới hạn có thể tồn tại nhưng hàm vẫn 'đứt' tại đúng điểm không? Điểm tựa cho suy luận là giới hạn hai phía, giá trị hàm và đẳng thức. f liên tục tại a khi a thuộc miền xác định, lim(x→a)f(x) tồn tại hữu hạn và bằng f(a). Chỉ một trong ba điều không đủ. Hàm có thể sửa bằng gán lại f(a) nếu giới hạn hữu hạn tồn tại; không thể sửa một cú nhảy với hai giới hạn một phía khác nhau chỉ bằng đổi một giá trị.

Hãy theo dõi cách giải này. Đặt f(x)=(x²−5x+6)/(x−2) nếu x≠2 và f(2)=k. Như M06, lim tại 2 là −1 nên chỉ k=−1 cho liên tục. Chọn so giới hạn đã tính với điểm thay vì giả định thế được phân thức gốc.

**Em tự thử:** Cho f(x)=sin x khi x≠0 và f(0)=c; cần c bằng gì để liên tục?

<details class="slm-topic-first-try" markdown="1">
<summary>Em đã thử? Mở lời giải và đường khắc phục</summary>

c=0 vì lim(x→0)sin x=0, bằng giá trị ở điểm.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu quên hàm phải được định nghĩa tại a, so 'hole' và 'point f(a)=...' trên đồ thị.

</details>

### Ba kiểu gián đoạn: khử được, nhảy, vô cực

<!-- LESSON_ID=TOP08-M14; OUTCOME_ID=TOP08-O14 -->

Đồ thị 'đứt' có phải lúc nào cũng vá được bằng một điểm mới? Ta có thể bắt đầu bằng giới hạn trái/phải và miền xác định. Gián đoạn khử được khi giới hạn hai phía hữu hạn tồn tại nhưng giá trị tại điểm thiếu/khác; có thể đặt lại f(a)=L. Gián đoạn nhảy khi hai giới hạn hữu hạn một phía khác nhau, không thể vá bằng một giá trị. Gián đoạn vô cực khi ít nhất một phía tăng không bị chặn; cần xem chiều và dấu. Nhận dạng dựa vào giới hạn, không chỉ nét đồ thị.

Thử vận dụng vào một tình huống. f=|x|/x (x≠0) có giới hạn trái −1, phải +1 ⇒ gián đoạn nhảy tại 0. g=1/x có hai phía ±∞ ⇒ gián đoạn vô cực tại 0. h=(x²−4)/(x−2) nếu x≠2 rút x+2, lim=4 ⇒ hole khử được ở 2. Chọn so một phía trước khi kết luận.

**Em tự thử:** Nếu g(x)=(x²−1)/(x−1) với x≠1 và g(1)=3, thuộc kiểu gián đoạn nào?

<details class="slm-topic-first-try" markdown="1">
<summary>Em đã thử? Mở lời giải và đường khắc phục</summary>

Khử được: lim(x→1)g(x)=2 nhưng g(1)=3; đổi g(1)=2 thì liên tục.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu gọi tất cả lỗ bằng vô cực, kiểm có khử được nhân tử chung hay không.

</details>

### Liên tục trên khoảng, đoạn và kiểm đúng đầu mút

<!-- LESSON_ID=TOP08-M15; OUTCOME_ID=TOP08-O15 -->

Hàm √x có thiếu 'giới hạn trái' tại x=0 trong miền của nó, vậy có thể liên tục trên [0,9] không? Những điều đã biết ở đây là miền căn không âm, giới hạn một phía. Hàm liên tục trên (a,b) khi liên tục tại từng điểm bên trong; liên tục trên [a,b] còn yêu cầu liên tục từ phải tại a và từ trái tại b, theo miền xác định. Ở đầu mút không yêu cầu xét bên ngoài miền. Nếu miền là tập hợp nhiều khoảng rời, không tuyên bố 'liên tục qua lỗ' ở điểm ngoài miền.

Từ lập luận vừa rồi, ta xét: f(x)=√x trên [0,9] liên tục bên trong vì căn liên tục trên [0,+∞), tại 0 giới hạn phải=0=f(0) và tại 9 giới hạn trái=3=f(9). Chọn kiểm đầu mút theo đúng phía trong đoạn.

**Em tự thử:** g(x)=√(16−x²) có liên tục trên [−4,4] không?

<details class="slm-topic-first-try" markdown="1">
<summary>Em đã thử? Mở lời giải và đường khắc phục</summary>

Có; trong đoạn biểu thức trong căn không âm và liên tục, tại −4 chỉ cần giới hạn phải, tại 4 chỉ cần trái.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu hỏi giới hạn trái của √x ở 0 trong ℝ và nói 'không liên tục', hãy trở về định nghĩa liên tục trên miền [0,9].

</details>

### Phép toán liên tục và miền xác định của hàm hợp

<!-- LESSON_ID=TOP08-M16; OUTCOME_ID=TOP08-O16 -->

Nếu mỗi phép tính trong hàm trông quen thuộc, có thể bỏ qua miền xác định khi kết luận liên tục? Để hiểu, ta dựa vào đa thức, căn, mẫu khác 0, hợp hàm. Đa thức liên tục trên ℝ; căn liên tục nơi đối số không âm; phân thức liên tục tại điểm có mẫu khác 0, và tổng/tích/hợp các hàm liên tục vẫn liên tục khi các điều kiện miền được giữ. Luôn tìm miền chung của căn và mẫu trước khi viết khoảng liên tục. Tại đầu mút của miền liên tục tương đối có thể chỉ xét một phía.

Xét trường hợp sau. f(x)=(x²+1)/(x−1) có miền ℝ\{1} nên liên tục trên (−∞,1) và (1,∞), không thể nói liên tục trên toàn ℝ. Phép chia thất bại tại 1 dù tử vẫn có nghĩa.

**Em tự thử:** h(x)=√(x+2)/(x+1): miền xác định là gì?

<details class="slm-topic-first-try" markdown="1">
<summary>Em đã thử? Mở lời giải và đường khắc phục</summary>

x≥−2 và x≠−1; liên tục trên [−2,−1) và (−1,∞) theo miền.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu kiểm căn x+2≥0 nhưng bỏ mẫu x+1≠0, hãy ghi hai điều kiện bằng dấu 'và'.

</details>

## Dùng tính liên tục để đảm bảo có nghiệm

Biết đồ thị không đứt và hai đầu một khoảng có dấu trái nhau, ta có thể kết luận có điểm cắt trục ngay cả khi chưa giải phương trình chính xác. Phương pháp chia đôi biến kết luận tồn tại ấy thành cách tìm xấp xỉ.

### Định lí giá trị trung gian (IVT): chứng minh sự tồn tại

<!-- LESSON_ID=TOP08-M17; OUTCOME_ID=TOP08-O17 -->

Làm sao biết một phương trình có nghiệm dù chưa tìm được công thức nghiệm? Trước hết, ta xuất phát từ liên tục trên đoạn đóng, dấu âm/dương. Nếu f liên tục trên [a,b] và f(a)f(b)<0 thì theo định lí giá trị trung gian có ít nhất một c∈(a,b) với f(c)=0. Định lí cho tồn tại, không tự cho duy nhất; nếu f(a)f(b)>0 cũng không đủ kết luận vô nghiệm. Muốn duy nhất cần lý do độc lập (đơn điệu, v.v.). Không dùng IVT khi có điểm gián đoạn trong đoạn.

Một ví dụ giúp kiểm chứng điều đó. g(x)=x³−2 liên tục trên [1,2]; g(1)=−1, g(2)=6, nên tồn tại c∈(1,2) với g(c)=0. Có nghiệm thực ∛2, nhưng IVT chỉ khẳng định tồn tại; ta chọn IVT để làm chứng cứ không cần tính căn chính xác.

**Em tự thử:** x²−3 có nghiệm trong (1,2) theo IVT không?

<details class="slm-topic-first-try" markdown="1">
<summary>Em đã thử? Mở lời giải và đường khắc phục</summary>

Có; f(1)=−2<0, f(2)=1>0 và đa thức liên tục.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu viết 'duy nhất do IVT', thử g(x)=x(x−1)(x+1) trên [−2,2] có nhiều nghiệm mặc dù đổi dấu hai đầu.

</details>

### Chia đôi và diễn giải một nghiệm mô hình

<!-- LESSON_ID=TOP08-M18; OUTCOME_ID=TOP08-O18 -->

Sau khi biết có nghiệm, làm thế nào khoanh vùng được nó mà chưa dùng máy tính? Điểm tựa cho suy luận là iVT, giá trị tại trung điểm, dấu trái/phải. Chia đôi đoạn [a,b] có f liên tục và hai đầu trái dấu: tại m=(a+b)/2, nếu f(m)=0 thì tìm xong; nếu không, giữ nửa đoạn có hai giá trị đầu trái dấu. Lặp lại, độ dài đoạn sau k bước bằng (b−a)/2^k. Phải nói rõ mô hình toán có miền t và đơn vị; nghiệm mô hình không tự là kết luận thực nghiệm.

Hãy theo dõi cách giải này. Với g(x)=x²−2 trên [1,2], g(1)=−1,g(2)=2. Bước 1 m=1,5: g=0,25>0 giữ [1,1,5]. Bước 2 m=1,25: g=−0,4375<0 giữ [1,25,1,5]; nghiệm √2 vẫn trong khoảng dài 0,25. Chọn dấu bảo toàn điều kiện IVT sau mỗi bước.

**Em tự thử:** Với x²−3 trên [1,2], sau một bước chia đôi giữ nửa nào?

<details class="slm-topic-first-try" markdown="1">
<summary>Em đã thử? Mở lời giải và đường khắc phục</summary>

g(1,5)=−0,75, g(2)=1 nên giữ [1,5; 2]; g vẫn đổi dấu.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu chọn nửa không trái dấu, viết bảng f(a),f(m),f(b) và tìm cặp tích âm trước khi loại nửa còn lại.

</details>


## D5 — Ba hình học toán nguồn (không thay thế lý thuyết)

- **SVG 01, dãy số tiến gần giới hạn:** `prototypes/thpt/visuals/THPT_TOPIC08_SEQUENCE_LIMIT_R01.svg`; đọc chấm ở chỉ số n nguyên rồi so khoảng cách dọc với đường gạch L=2, không xem nét gạch là số hạng đã đạt.
- **SVG 02, giới hạn một phía tại điểm nhảy:** `prototypes/thpt/visuals/THPT_TOPIC08_ONE_SIDED_JUMP_R01.svg`; bên trái gần x=0 có y→2 và chấm trống ở (0,2), bên phải gần x=0 có y→1 và chấm đặc ở (0,1). Vì hai mũi tên tiến gần không gặp cùng cao độ nên không có giới hạn hai phía.
- **SVG 03, IVT + chia đôi:** `prototypes/thpt/visuals/THPT_TOPIC08_IVT_BISECTION_R01.svg`; đọc f(1)=−1 và f(2)=2, đường cong liên tục cắt trục x giữa 1 và 2. Đánh dấu điểm chia đôi 1,5 có f>0, vùng giữ lại [1,1,5]; không hiểu 'cắt' là bảo đảm duy nhất nếu chưa có lập luận thêm.

## Thư viện mô hình tương tác (SPEC_ONLY, không runtime)

1. **Giới hạn dãy số và sai số ε:** cho nhập L,c,n nguyên dương, quan sát |u_n−L| và ngưỡng ε; vạch liên tục chỉ là mức so sánh, dãy luôn là các điểm rời rạc. Phải xử lý c=0, ε>0, n≥1, phần hiển thị sai số không thành điểm đánh giá.
2. **Chia đôi nghiệm IVT:** chỉ cho chạy khi hàm liên tục trên đoạn và đầu đoạn trái dấu; hiển thị m, dấu f(m), đoạn mới sau mỗi bước. Nếu f(m)=0 dừng, nếu f(a)f(b)≥0 không suy vô nghiệm và không tự chạy. Cả hai chỉ là đặc tả, chưa có browser/API.

# Luyện tập

Ngân hàng mới `prototypes/thpt/shared-items/Temp_TOPIC08_LIMITS_CONTINUITY_NEW22_PUBLIC_CANONICAL_R01_20261112.md` chứa **18 Practice** P01–P18 và **4 Written** W01–W04 (mỗi bài có rubric 7 điểm, một nguồn answer/rubric). 36 SGK gốc tham chiếu đúng `item_id` qua `prototypes/thpt/shared-items/Temp_TOPIC08_LIMITS_CONTINUITY_ORIGINAL36_SGK_CANONICAL_INDEX_R01_20261112.md`; không sao chép stem/key/solution. Tự học: giải tự thử, luyện đúng outcome, so lời giải khi chủ động, quay lại D6 rồi làm bài cùng họ dạng.

| outcome | Kiến thức trọng tâm | câu mới | Written cùng nguồn |
|---|---|---|---|
| TOP08-O01 | Giới hạn hữu hạn của dãy số và ý nghĩa tiến gần | THPT-TOP08-P01 | — |
| TOP08-O02 | Giới hạn vô cực và không tồn tại do dao động | THPT-TOP08-P02 | — |
| TOP08-O03 | Dãy q^n: điều kiện về trị tuyệt đối | THPT-TOP08-P03 | — |
| TOP08-O04 | Quy tắc giới hạn hữu hạn và chia lũy thừa n | THPT-TOP08-P04 | THPT-TOP08-W01 |
| TOP08-O05 | Tổng CSN lùi vô hạn và điều kiện hội tụ | THPT-TOP08-P05 | THPT-TOP08-W02 |
| TOP08-O06 | Giới hạn hàm số tại một điểm: xét lân cận bỏ điểm | THPT-TOP08-P06 | — |
| TOP08-O07 | Giới hạn một phía và điều kiện tồn tại giới hạn hai phía | THPT-TOP08-P07 | THPT-TOP08-W03 |
| TOP08-O08 | Giới hạn vô cực tại điểm hữu hạn và dấu một phía | THPT-TOP08-P08 | — |
| TOP08-O09 | Giới hạn hàm số khi x→±∞: tỉ số bậc đa thức | THPT-TOP08-P09 | — |
| TOP08-O10 | Dạng 0/0: phân tích nhân tử và điều kiện khử | THPT-TOP08-P10 | — |
| TOP08-O11 | Dạng 0/0 có căn: nhân liên hợp | THPT-TOP08-P11 | — |
| TOP08-O12 | Dạng ∞−∞ và dấu khi tách căn x² | THPT-TOP08-P12 | — |
| TOP08-O13 | Liên tục tại điểm: ba điều kiện và nối đúng giá trị | THPT-TOP08-P13 | — |
| TOP08-O14 | Ba kiểu gián đoạn: khử được, nhảy, vô cực | THPT-TOP08-P14 | — |
| TOP08-O15 | Liên tục trên khoảng, đoạn và kiểm đúng đầu mút | THPT-TOP08-P15 | — |
| TOP08-O16 | Phép toán liên tục và miền xác định của hàm hợp | THPT-TOP08-P16 | — |
| TOP08-O17 | Định lí giá trị trung gian (IVT): chứng minh sự tồn tại | THPT-TOP08-P17 | — |
| TOP08-O18 | Chia đôi và diễn giải một nghiệm mô hình | THPT-TOP08-P18 | THPT-TOP08-W04 |

# Tự kiểm tra

**18 public Self Check placements** tham chiếu lại đúng 18 `item_id` P01–P18 ở Luyện tập, không nhân bản thành item khác. `ASSESSMENT_MODE=CLIENT_SELF_CHECK_NO_MASTERY`; câu PUBLIC đã có thể xem lời giải trong Practice nên không thể là held-out độc lập. Không cấp `TOPIC_READINESS` hay Skill Mastery và không nhập RD1 private lên GitHub.

Luồng khi tích hợp: người học trả lời toàn bộ → **Final Submit** → sau đó mới thấy đúng/sai, hint, đáp án, lời giải và tự đối chiếu rubric; trước Final Submit không lộ đáp án/hint/AI Tutor/correctness. Đây là yêu cầu bảo vệ Q16 cho **RELEASE QA**, không phải chứng nhận website đã chạy. Sau Submit quay về outcome mắc lỗi và đường D6 để khắc phục.

## Phụ lục AUTHORING — metadata, không xuất lên giao diện học sinh

PACKET_ID: THPT-TOPIC08-LIMITS-CONTINUITY-FULL-R01
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
CATALOG_TOPIC_ID: CD08
LESSON_IDS: TOP08-M01..TOP08-M18
OUTCOME_IDS: TOP08-O01..TOP08-O18
PUBLIC_ORIGINAL_SGK_ID_COUNT: 36
PUBLIC_NEW_CANONICAL_ID_COUNT: 22
PUBLIC_UNIQUE_CANONICAL_ID_COUNT: 58
PUBLIC_SELF_CHECK_REUSE_PLACEMENTS: 18
PRIVATE_RD1_IMPORTED: 0
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
OFFICIAL_READINESS: NOT_CLAIMED
MASTERY_ACTIVATION: NO
RELEASE_AUTHORIZATION: NO
RUNTIME_TOPIC_ID: UNASSIGNED_OWNER_DECISION
ORIGINAL36_SGK_INDEX_BLOB: 7ac532a2c6d9368bf4f991c90092d327c07ea842
NEW22_BANK_BLOB: 53351f63ad8dbc7bc18f2f519eb731e773c33a62

### 36 SGK original item IDs (reference-only)
- THPT-G11-CHV-B15-C01
- THPT-G11-CHV-B15-C02
- THPT-G11-CHV-B15-C03
- THPT-G11-CHV-B15-P01
- THPT-G11-CHV-B15-P02
- THPT-G11-CHV-B15-P03
- THPT-G11-CHV-B15-P04
- THPT-G11-CHV-B15-P05
- THPT-G11-CHV-B15-P06
- THPT-G11-CHV-B15-P07
- THPT-G11-CHV-B16-C01
- THPT-G11-CHV-B16-C02
- THPT-G11-CHV-B16-C03
- THPT-G11-CHV-B16-P01
- THPT-G11-CHV-B16-P02
- THPT-G11-CHV-B16-P03
- THPT-G11-CHV-B16-P04
- THPT-G11-CHV-B16-P05
- THPT-G11-CHV-B16-P06
- THPT-G11-CHV-B16-P07
- THPT-G11-CHV-B17-C01
- THPT-G11-CHV-B17-C02
- THPT-G11-CHV-B17-C03
- THPT-G11-CHV-B17-P01
- THPT-G11-CHV-B17-P02
- THPT-G11-CHV-B17-P03
- THPT-G11-CHV-B17-P04
- THPT-G11-CHV-B17-P05
- THPT-G11-CHV-B17-P06
- THPT-G11-CHV-B17-P07
- THPT-G11-CHV-B15-W01
- THPT-G11-CHV-B15-W02-ANCHOR
- THPT-G11-CHV-B16-W01
- THPT-G11-CHV-B16-W02-ANCHOR
- THPT-G11-CHV-B17-W01
- THPT-G11-CHV-B17-W02-ANCHOR

### 22 new Topic item IDs (one canonical bank)
- THPT-TOP08-P01
- THPT-TOP08-P02
- THPT-TOP08-P03
- THPT-TOP08-P04
- THPT-TOP08-P05
- THPT-TOP08-P06
- THPT-TOP08-P07
- THPT-TOP08-P08
- THPT-TOP08-P09
- THPT-TOP08-P10
- THPT-TOP08-P11
- THPT-TOP08-P12
- THPT-TOP08-P13
- THPT-TOP08-P14
- THPT-TOP08-P15
- THPT-TOP08-P16
- THPT-TOP08-P17
- THPT-TOP08-P18
- THPT-TOP08-W01
- THPT-TOP08-W02
- THPT-TOP08-W03
- THPT-TOP08-W04

END_AUTHOR_SOURCE: SOURCE_LOCKED_R01
