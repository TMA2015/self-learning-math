<!-- AUTHORING R03 CANDIDATE: Continuous concept arcs, original R01 preserved, holistic Q18/owner verdict pending. -->
<!-- AUTHORING CANDIDATE R02 / DELTA_C_ACADEMIC_MATERIAL / NOT CONTENT_READY. R01 immutable; holistic source QA and owner learner UX review required before activation. -->
# CĐ07/22 — Dãy số, Cấp số cộng và Cấp số nhân · Biên tập liền mạch R02 (ứng viên)

**LEARNING_PATH: TOPIC.** Ba trang độc lập **Kiến thức / Luyện tập / Tự kiểm tra**, không tạo Topic Core. Học liệu theo mạch khái niệm xuyên lớp, không phải bản sao Chương II SGK.

## Nguồn S1 và ranh giới

- **SGK Kết nối tri thức Toán 11 tập 1:** Chương II B05 Dãy số trang in **42–47**, B06 CSC **48–51**, B07 CSN **52–55**, cuối ChII **56–57**. Cộng tổng vô hạn học thêm phần Chương V B15 Giới hạn của dãy số trang in **104–110**. Đây là nội dung có biên bản nguồn lịch sử Git, không khẳng định lượt này quét lại PDF gốc hoặc tự phỏng đoán chỉ số trang PDF SGK.
- **SBT KNTT Toán 11 tập 1:** B05 trang in **31–34** (PDF 1-based 32–35), B06 **35–36** (PDF 36–37), B07 **37–39** (PDF 38–40), cuối ChII **40–43** (PDF 41–44) — biên bản quét bản gốc có SHA256 `fb5292103e5b682531ce37b5f30598393bba81b2943da9c1a374fdeb56557229`. B15 SBT trang in 75–78 theo biên bản G11 ChV R03; không suy ra index mới nếu không đối soát ảnh.
- **Nguồn tham chiếu 47 canonical PUBLIC:** 42 ID cũ từ G11 ChII R03 blob `2101e2a248e0cf53ee11847b913b937cebcd0806`, 5 ID B15 ChV R03 blob `7934757ed06de4ae4b63dbc351ef524fc054e0d0`, chỉ trỏ nguồn, không clone đề/đáp án/rubric. PASS SGK trước đây bảo toàn đúng snapshot, không chuyển thành PASS Topic.
- **Tách scope:** Số hạng, truy hồi, CSC/CSN, tổng hữu hạn là SGK ChII; tổng lùi vô hạn dựa phần kiến thức SGK ChV B15 nhưng nội dung giải thích tạo cầu nối ngay trong Topic; bài gửi góp/trả góp định kỳ là ví dụ Topic mở rộng, **không** gắn nhãn SGK Core hoặc tư vấn tài chính. Các giới hạn tổng quát thuộc CĐ08, không chuyển qua Topic07. Không cần sang SGK để học kiến thức bắt buộc ở đây.

## Vì sao cần học dãy số thay vì chỉ học công thức?

Đếm số khách theo ngày, theo dõi tiền tích lũy sau từng kỳ hoặc số ghế tăng theo hàng là những dữ liệu có **thứ tự theo chỉ số nguyên**. Ta bắt đầu bằng ý nghĩa của mỗi chỉ số, phân biệt cộng cùng lượng với nhân cùng tỷ lệ, rồi mới tính số hạng, tổng và ứng dụng. Mỗi mục gồm điều kiện, lý do chọn phương pháp, ví dụ giải, Tự thử và đường sửa lỗi ngay tại Chuyên đề.

## Dãy số và quy luật theo chỉ số

Dãy số mô tả điều gì xảy ra từ bước này sang bước khác. Trước khi suy công thức, ta phải biết chỉ số bắt đầu và kết thúc ở đâu, rồi phân biệt một quy luật được chứng minh với việc đoán vài số hạng đầu.

<!-- LESSON_ID: TOP07-M01; OUTCOME_ID: TOP07-O01 -->

Một danh sách như 1, 4, 9, 16 có thể được tạo ra từ quy luật \(u_n=n^2\), nhưng để gọi đó là một dãy **đã được xác định**, ta cần biết chỉ số \(n\) được phép nhận những giá trị nào. Có thể đây là dãy hữu hạn với \(n=1,2,3,4\), hoặc một dãy vô hạn với \(n\in\mathbb N^*\). Cùng công thức, hai miền chỉ số khác nhau cho hai dãy khác nhau. Vì thế dãy số là một hàm đặc biệt có đầu vào là những chỉ số nguyên được chỉ định.

Nếu đề cho \(u_n=n^2\) với \(n=1,\dots,4\), ta chỉ có bốn số hạng 1, 4, 9, 16. Biểu thức \(n^2\) vẫn tính được khi \(n=5\), nhưng \(u_5\) **không phải số hạng của dãy hữu hạn đã cho**. Kiểm miền chỉ số trước khi thay số giúp tránh tự kéo dài một quy luật ngoài phạm vi bài toán.

<!-- LESSON_ID: TOP07-M02; OUTCOME_ID: TOP07-O02 -->

Từ miền chỉ số, câu hỏi tiếp theo là làm sao nhận ra công thức tổng quát.

Làm sao tìm u_100 mà không viết đủ 99 số trước? Trước hết, ta xuất phát từ phép thế và tìm quy luật số; phân biệt vài giá trị đầu với định nghĩa. Công thức tường minh u_n=f(n) cho phép tính một số hạng bằng một phép thế; một vài giá trị đầu KHÔNG xác định duy nhất dãy nếu chưa nói quy luật. Muốn kết luận công thức phải có định nghĩa, giả thiết hoặc chứng minh, không chỉ khớp ba số đầu.

Một ví dụ giúp kiểm chứng điều đó. u_n=2n+1, n≥1 cho u_1=3,u_2=5,u_3=7 và u_10=21. Nhưng thêm một biểu thức bội (n−1)(n−2)(n−3) vẫn giữ ba số đầu mà đổi các số sau; do đó suy từ ba số không đủ duy nhất.

<!-- LESSON_ID: TOP07-M03; OUTCOME_ID: TOP07-O03 -->

Không phải dãy nào cũng có công thức trực tiếp; có khi bước sau phụ thuộc bước trước.

Một dãy mô tả 'năm sau phụ thuộc năm trước' có cần công thức trực tiếp không? Điểm tựa cho suy luận là thế số và biến đổi đại số; điều kiện số hạng đầu. Truy hồi cho u_{n+1} qua u_n (hoặc nhiều số trước) phải kèm đủ giá trị khởi tạo. Có thể đổi biến v_n=u_n−c để nhận ra quy luật nhân đều; không bao giờ bỏ điều kiện đầu. Cùng một công thức truy hồi với hai số đầu khác nhau tạo hai dãy khác nhau.

Hãy theo dõi cách giải này. u_1=3, u_{n+1}=2u_n+1. Đặt v_n=u_n+1, v_{n+1}=2v_n và v_1=4, nên v_n=4·2^{n−1}, u_n=4·2^{n−1}−1. Thử u_2=7 khớp 2·3+1; chọn đổi biến vì dấu +1 được hấp thụ.

<!-- LESSON_ID: TOP07-M04; OUTCOME_ID: TOP07-O04 -->

Muốn khẳng định tăng hay giảm, phải chứng minh cho mọi chỉ số hợp lệ.

Thấy ba số đầu đang tăng có đủ để nói dãy luôn tăng không? Ta có thể bắt đầu bằng bất đẳng thức số thực và n≥1. Dãy tăng nghiêm ngặt nếu u_{n+1}>u_n với mọi n hợp lệ; giảm nếu ngược. Dùng hiệu u_{n+1}−u_n, hoặc tỉ số chỉ khi có dấu thích hợp và số hạng khác 0. Đừng dùng vài giá trị quan sát thay chứng minh trên mọi n.

Thử vận dụng vào một tình huống. u_n=n/(n+1) với n≥1. u_{n+1}−u_n=(n+1)/(n+2)−n/(n+1)=[(n+1)²−n(n+2)]/[(n+1)(n+2)]=1/[(n+1)(n+2)]>0. Chọn hiệu vì không cần chia số hạng.

<!-- LESSON_ID: TOP07-M05; OUTCOME_ID: TOP07-O05 -->

Một dãy có thể bị chặn bởi giá trị mà nó không bao giờ đạt.

Một dãy có thể tiến gần 1 mãi mà không bao giờ bằng 1 không? Những điều đã biết ở đây là dấu phân thức dương, bất đẳng thức. Bị chặn trên nếu tồn tại M sao cho u_n≤M cho mọi n, bị chặn dưới tương tự; chặn không đồng nghĩa giá trị đạt. Dãy tăng và có chặn trên không tự nói giá trị giới hạn bằng cận khi chưa chứng minh; ở đây chỉ xây dựng ranh giới trực giác, giới hạn chi tiết sang CĐ08.

Từ lập luận vừa rồi, ta xét: u_n=1−1/(n+1), n≥1. Vì 0<1/(n+1)≤1/2 nên 1/2≤u_n<1. u_1=1/2 là cận dưới đạt, còn 1 không là một số hạng của dãy. Chọn tách thành 1 trừ số dương để nhìn cận.

### Vận dụng và tự đối chiếu

<!-- First Try TOP07-M01: knowledge, not canonical Readiness -->
**1.** Dãy \(u_n=3n\) được cho với \(n\in\{1,2,3\}\). Dãy có các số hạng nào? Có \(u_0\) không?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Dãy gồm 3, 6, 9 và **không có \(u_0\)** vì 0 không thuộc miền chỉ số. Nếu em tính \(u_0=0\), hãy phân biệt giá trị của biểu thức đại số tại 0 với số hạng thực sự thuộc dãy.

</details>

<!-- First Try TOP07-M02: knowledge, not canonical Readiness -->
**2.** Với u_n=4n−1, tính u_6.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

23; n bắt đầu từ 1 nhưng số hạng thứ sáu thế n=6, không phải 5.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu dùng n−1 vô cớ, phân biệt chỉ số của biểu thức với số lần tăng trong cấp số.

</details>

<!-- First Try TOP07-M03: knowledge, not canonical Readiness -->
**3.** Cho u_1=2,u_{n+1}=u_n+4. Tính u_3.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

u_2=6,u_3=10; cần chạy truy hồi hai lần.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu nhảy trực tiếp từ u_1 đến u_3, ghi hai mũi tên n=1→2→3 và kiểm chênh lệch.

</details>

<!-- First Try TOP07-M04: knowledge, not canonical Readiness -->
**4.** Dãy u_n=1/n (n≥1) tăng hay giảm?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Giảm nghiêm ngặt vì 1/(n+1)<1/n với mẫu dương.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu chỉ nhìn 1,1/2,1/3 thì đó mới là gợi ý; chứng minh dấu cho mọi n.

</details>

<!-- First Try TOP07-M05: knowledge, not canonical Readiness -->
**5.** u_n=2−1/n (n≥1) có đạt 2 không?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Không; 1/n>0 nên u_n<2 với mọi n nguyên dương.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Phân biệt ký hiệu '≤' và '<'; thử giải u_n=2 bằng phương trình.

</details>

## Cấp số cộng: mỗi lần thêm một lượng như nhau

Nếu độ tăng giữa hai kỳ giữ nguyên, dãy có cấu trúc cấp số cộng. Từ công sai, số hạng thứ n đến tổng nhiều số hạng, các công thức cùng xuất phát từ một ý tưởng cộng đều.

<!-- LESSON_ID: TOP07-M06; OUTCOME_ID: TOP07-O06 -->

Mỗi kỳ tăng thêm 5 đơn vị và mỗi kỳ tăng 5% có phải cùng một quy luật? Để hiểu, ta dựa vào hiệu hai số thực. Cấp số cộng (CSC) có u_{n+1}=u_n+d với d hằng; hiệu liên tiếp luôn bằng d. d=0 cho dãy hằng, d<0 là giảm. Một phần trăm cố định thường cho cấp số nhân chứ không phải CSC (trừ trường hợp suy biến đặc biệt).

Chẳng hạn, Dãy 14,11,8,5 có các hiệu −3; là CSC với d=−3. Dãy 10,20,40 có hiệu 10,20 nên không CSC. Chọn kiểm hiệu trước khi áp công thức.

<!-- LESSON_ID: TOP07-M07; OUTCOME_ID: TOP07-O07 -->

Khi mỗi bước cộng cùng một lượng, ta suy được số hạng bất kỳ.

Vì sao ở số hạng thứ n lại xuất hiện n−1? Trước hết, ta xuất phát từ truy hồi cộng d và số đếm bước. Từ u_1 đến u_n thực hiện đúng n−1 lần cộng công sai, nên u_n=u_1+(n−1)d. Nếu d=0 công thức vẫn đúng; nếu cho u_k thì u_n=u_k+(n−k)d với cả n<k.

Một ví dụ giúp kiểm chứng điều đó. u_1=7,d=−2, u_6=7+5(−2)=−3. Ta chọn công thức tổng quát thay vì cộng năm bước riêng lẻ; thử u_2=5 để kiểm chiều âm.

<!-- LESSON_ID: TOP07-M08; OUTCOME_ID: TOP07-O08 -->

Ngược lại, hai số hạng cách xa nhau có thể cho biết công sai.

Có thể tìm cả u_1 và d khi chỉ biết u_5,u_9 không? Điểm tựa cho suy luận là hiệu hai phương trình tuyến tính. Vì u_m−u_k=(m−k)d, khi m≠k ta tìm d=(u_m−u_k)/(m−k), sau đó u_1=u_k−(k−1)d. Hai giá trị theo hai chỉ số khác nhau đủ xác định một CSC; kiểm điều kiện m≠k.

Hãy theo dõi cách giải này. u_3=5,u_7=21 ⇒ d=(21−5)/(7−3)=4, u_1=5−2·4=−3. Thử u_7=−3+6·4=21. Chọn phép trừ để khử u_1.

<!-- LESSON_ID: TOP07-M09; OUTCOME_ID: TOP07-O09 -->

Cộng nhiều số hạng bằng ghép cặp dẫn tới công thức tổng.

Tại sao tổng các số 1 đến n tính nhanh được mà không cộng từng số? Ta có thể bắt đầu bằng cộng giao hoán và công thức u_n. Ghép u_1+u_n, u_2+u_{n−1},… mỗi cặp có cùng tổng 2u_1+(n−1)d, cho 2S_n=n(u_1+u_n); do đó S_n=n[2u_1+(n−1)d]/2. Đếm đúng n số hạng; công thức dùng cả n lẻ vì số ở giữa ghép với chính nó khi nhân 2.

Thử vận dụng vào một tình huống. CSC u_1=2,d=3,n=6 có u_6=17 và S_6=6(2+17)/2=57. Chọn ghép đầu/cuối để nhìn cấu trúc đối xứng.

<!-- LESSON_ID: TOP07-M10; OUTCOME_ID: TOP07-O10 -->

Tổng cấp số cộng mô tả lượng tích lũy trong các bài toán theo kỳ.

Khi số sản phẩm mỗi tuần tăng cố định, cần phân biệt tuần cuối với tổng cả giai đoạn. Những điều đã biết ở đây là đơn vị đếm, CSC, tổng hữu hạn. Nếu sản lượng tuần n là a+(n−1)d, tổng n tuần là S_n. Trong mô hình thực tế phải đặt rõ tuần đầu, số tuần, mức tăng và tính hợp lệ (không có số lượng âm). Không suy từ CSC sang lãi kép vì lãi kép nhân theo tỷ lệ.

Từ lập luận vừa rồi, ta xét: Xưởng tuần đầu làm 20 sản phẩm, mỗi tuần thêm 4 sản phẩm, trong 5 tuần: tuần 5 làm 36, tổng 20+24+28+32+36=140; cũng S_5=5(20+36)/2=140. Chọn tổng vì bài hỏi toàn giai đoạn.

### Vận dụng và tự đối chiếu

<!-- First Try TOP07-M06: knowledge, not canonical Readiness -->
**1.** Dãy 2,2,2,2 có phải CSC không?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Có, công sai d=0.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu thấy 'không tăng' rồi loại, nhớ CSC cho phép công sai 0.

</details>

<!-- First Try TOP07-M07: knowledge, not canonical Readiness -->
**2.** CSC u_1=10,d=−3: tính u_4.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

u_4=10+3(−3)=1.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu tính thành −2, xem lại từ số hạng 1 đến 4 chỉ có 3 khoảng.

</details>

<!-- First Try TOP07-M08: knowledge, not canonical Readiness -->
**3.** u_2=7,u_5=16 thì d bằng bao nhiêu?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

d=(16−7)/(5−2)=3.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Không chia cho số thứ tự lớn hơn; chia chênh chỉ số.

</details>

<!-- First Try TOP07-M09: knowledge, not canonical Readiness -->
**4.** Tính 1+3+5+7+9.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

25; đây là CSC 5 số, đầu1 cuối9, S=5(1+9)/2.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu lấy n bằng số cuối 9, viết rõ có bao nhiêu số được cộng.

</details>

<!-- First Try TOP07-M10: knowledge, not canonical Readiness -->
**5.** Hàng 1 có 8 ghế, mỗi hàng thêm 2 ghế, 4 hàng có bao nhiêu ghế?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

8+10+12+14=44 ghế.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu chỉ trả số ghế hàng cuối, phân biệt 'mỗi hàng' và 'tổng toàn bộ'.

</details>

## Cấp số nhân: mỗi lần nhân theo cùng tỉ lệ

Không phải mọi tăng trưởng đều cộng đều. Khi mỗi bước nhân với cùng một hệ số, dấu, số 0, công bội, số hạng và tổng phải được hiểu trong một cấu trúc khác.

<!-- LESSON_ID: TOP07-M11; OUTCOME_ID: TOP07-O11 -->

Tăng gấp đôi nhưng có kỳ đổi dấu: vẫn là cấp số nhân chứ? Để hiểu, ta dựa vào phép nhân số thực, số hạng khác 0 khi chia tỉ số. Cấp số nhân (CSN) thỏa u_{n+1}=qu_n với công bội q cố định. Khi các số hạng khác 0 có thể kiểm tỉ số u_{n+1}/u_n=q. q=0 là trường hợp hợp lệ nếu u_1≠0: từ u_2 trở đi bằng 0; không chia cho 0. q<0 làm dấu luân phiên nếu u_1 khác 0.

Chẳng hạn, Dãy 2,−6,18,−54 là CSN q=−3. Dãy 5,0,0,… là CSN q=0; tỉ số 0/0 không có nghĩa nhưng truy hồi u_{n+1}=0·u_n vẫn đúng. Chọn kiểm phép nhân thay chia khi xuất hiện 0.

<!-- LESSON_ID: TOP07-M12; OUTCOME_ID: TOP07-O12 -->

Từ công bội cố định, ta tìm số hạng ở bất kỳ vị trí nào.

Sau nhiều lần nhân cùng một số, số mũ là n hay n−1? Trước hết, ta xuất phát từ lũy thừa và thứ tự số hạng. CSN u_n=u_1q^{n−1}; khi q âm, dấu do số mũ chẵn/lẻ; q=1 cho dãy hằng, q=0 cho u_1 ban đầu rồi từ số 2 bằng 0 (đối với n=1 quy ước q^0=1, riêng 0^0 trong biểu thức tính toán cần tránh thay máy móc). Khi q=0 dùng truy hồi cho trường hợp n=1 và n≥2 thay công thức lũy thừa tại n=1.

Một ví dụ giúp kiểm chứng điều đó. u_1=−2, q=3, u_4=−2·3³=−54. Chọn số mũ 3 vì từ số 1 đến 4 chỉ nhân 3 lần; thử u_2=−6 để kiểm.

<!-- LESSON_ID: TOP07-M13; OUTCOME_ID: TOP07-O13 -->

Hai số hạng được biết giúp suy công bội, nhưng dấu và điều kiện cần kiểm.

Hai số hạng cách hai vị trí có cho biết duy nhất công bội? Điểm tựa cho suy luận là căn bậc hai, dấu dương/âm, phép chia hợp lệ. Nếu u_k≠0 và u_m=u_k q^{m−k}, chênh chỉ số chẵn có thể dẫn q=±c, không tự chọn q dương. Với ba số liên tiếp khác 0, b²=ac là điều kiện cần cho CSN; nếu a,b,c phù hợp và a,b khác 0 thì b/a=c/b. Với a,c dương, b có thể ±√(ac), phải nêu ràng buộc dấu nếu muốn duy nhất.

Hãy theo dõi cách giải này. u_2=6,u_4=24 ⇒ q²=4 nên q=±2. Với q=2 thì u_1=3; q=−2 thì u_1=−3. Chọn xét bình phương trước rồi giải đủ hai dấu.

<!-- LESSON_ID: TOP07-M14; OUTCOME_ID: TOP07-O14 -->

Tổng của các số hạng nhân lặp khác hẳn tổng cấp số cộng.

Có thể ghép đầu–cuối như cấp số cộng để tính tổng cấp số nhân không? Ta có thể bắt đầu bằng nhân phân phối và khử vế. S_n=u_1+u_1q+...+u_1q^{n−1}. Nhân q và trừ: (1−q)S_n=u_1(1−q^n), nên nếu q≠1 thì S_n=u_1(1−q^n)/(1−q). Nếu q=1 thì S_n=nu_1. q=0 vẫn cho S_n=u_1 khi n≥1, tránh công thức u_1q^{n−1} tại n=1 của trường hợp q=0.

Thử vận dụng vào một tình huống. Với u_1=2,q=3,n=4: S_4=2(1−3^4)/(1−3)=2·40=80. Thử bằng cộng 2+6+18+54=80. Chọn nhân trừ để rút gọn n phần tử.

<!-- LESSON_ID: TOP07-M15; OUTCOME_ID: TOP07-O15 -->

Nếu trị tuyệt đối công bội nhỏ hơn 1, phần dư của tổng giảm dần.

Vì sao có thể cộng vô hạn số hạng mà được một số hữu hạn? Những điều đã biết ở đây là tổng n số hạng CSN và dãy q^n; phần Giới hạn G11 B15. Với |q|<1, q^n→0; lấy giới hạn của S_n=u_1(1−q^n)/(1−q) được S_∞=u_1/(1−q). Điều kiện |q|<1 là bắt buộc cho cấp số nhân có u_1≠0; q=−1 làm tổng riêng dao động, |q|>1 thường không hội tụ. Phần dư S_∞−S_n=u_1q^n/(1−q); trị tuyệt đối đo sai số.

Từ lập luận vừa rồi, ta xét: Với u_1=6,q=1/2, S_n=12[1−(1/2)^n], S_∞=12; sau n=4 phần dư=12/16=3/4. Chọn công thức phần dư khi muốn biết phải cộng bao nhiêu số hạng để đủ chính xác.

### Vận dụng và tự đối chiếu

<!-- First Try TOP07-M11: knowledge, not canonical Readiness -->
**1.** Dãy 4,0,0,0,… có là CSN không?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Có, với q=0.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu loại vì phép chia 0/0, hãy quay lại định nghĩa u_{n+1}=qu_n.

</details>

<!-- First Try TOP07-M12: knowledge, not canonical Readiness -->
**2.** CSN u_1=5,q=−2: tính u_4.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

5(−2)³=−40.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Đặt dấu âm trong ngoặc của lũy thừa; không tính −2³ như (−2)³ mà không xét ngữ cảnh.

</details>

<!-- First Try TOP07-M13: knowledge, not canonical Readiness -->
**3.** Ba số 2,b,18 là CSN với b≠0: b có thể bằng bao nhiêu?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

b²=36 ⇒ b=±6; q=b/2 là ±3.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu chỉ ra b=6, xem lại phép lấy căn bình phương.

</details>

<!-- First Try TOP07-M14: knowledge, not canonical Readiness -->
**4.** Tính S_5 nếu u_1=−4, q=1.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

S_5=5(−4)=−20; không chia cho 1−q=0.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu gặp 0 ở mẫu, tách q=1 trước.

</details>

<!-- First Try TOP07-M15: knowledge, not canonical Readiness -->
**5.** Với u_1=4,q=−1, tổng vô hạn có giá trị theo công thức trên không?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Không; |q|=1, tổng riêng lần lượt 4,0,4,0,… không hội tụ.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu tự thay q=−1 vào biểu thức u_1/(1−q) được 2, đó là lạm dụng công thức ngoài miền |q|<1.

</details>

## Hai mô hình tăng trưởng và dòng tiền

Tăng đều về lượng và tăng đều theo phần trăm dẫn đến kết quả rất khác khi số kỳ lớn. Mô hình lãi kép hay gửi góp chỉ có nghĩa khi biết thời điểm tiền vào, lãi suất kỳ và giới hạn giả định.

<!-- LESSON_ID: TOP07-M16; OUTCOME_ID: TOP07-O16 -->

Một báo cáo ghi 'tăng 10' và 'tăng 10%' khác nhau ra sao qua nhiều kỳ? Để hiểu, ta dựa vào đơn vị phần trăm, CSC và CSN. Tăng cố định d mỗi kỳ: u_n=u_1+(n−1)d (CSC). Tăng cố định r theo tỷ lệ kỳ trước: v_n=v_1(1+r)^{n−1} (CSN với q=1+r). Nói '10%' phải xác định 10% của giá trị kỳ nào; số phần trăm tăng đều khác số tuyệt đối tăng đều. Mô hình có thể lệch dữ liệu thực và chỉ hợp lệ trong miền giả định.

Chẳng hạn, Khởi đầu 100: cộng 5 đơn vị mỗi kỳ sau ba lần tăng được 115; tăng 5% mỗi kỳ sau ba lần là 100·1,05³=115,7625. Chọn phân loại dựa trên câu chữ 'đơn vị' hay 'phần trăm của số dư'.

<!-- LESSON_ID: TOP07-M17; OUTCOME_ID: TOP07-O17 -->

Trong lãi kép, tỷ lệ theo kỳ làm số kỳ và đơn vị trở nên quan trọng.

Vì sao gửi 5%/năm qua nhiều năm không chỉ lấy 5% nhân số năm? Trước hết, ta xuất phát từ phần trăm, lũy thừa, hợp đồng kỳ hạn. Nếu lãi gộp vào vốn mỗi kỳ với lãi suất r *theo chính kỳ đó*, không nộp/rút/phí, số dư sau n kỳ là P(1+r)^n, P≥0, 1+r>0 (thực tế thường r≥0). Nếu lãi theo tháng thì n phải là số tháng, không dùng lãi năm như lãi tháng; lãi hiệu dụng khác lãi danh nghĩa. KNTT ChII cung cấp CSN; ví dụ tài chính ở đây là mô hình toán tự biên soạn, không phải báo giá.

Một ví dụ giúp kiểm chứng điều đó. P=10 triệu, r=6%/năm, hai năm: 10·1,06²=11,236 triệu. Chọn lũy thừa vì tiền lãi năm đầu đã nằm trong số dư sinh lãi năm hai.

<!-- LESSON_ID: TOP07-M18; OUTCOME_ID: TOP07-O18 -->

Gửi góp khác gửi một lần vì mỗi khoản tiền sinh lãi trong số kỳ khác nhau.

Cùng gọi là 'trả mỗi tháng', vì sao một bài tính tổng tương lai, bài kia tính tiền trả nợ hiện tại? Điểm tựa cho suy luận là tổng CSN hữu hạn, số kỳ và phân biệt đầu/cuối kỳ. Gửi a vào CUỐI mỗi kỳ với lãi r/kỳ, r≠0, số dư NGAY CUỐI kỳ n: FV=a[(1+r)^n−1]/r; nếu r=0 thì FV=na. Vay V tại đầu, trả a vào CUỐI mỗi kỳ, dư B_k=(1+r)B_{k−1}−a, B_0=V; tất toán sau n kỳ cho V=a[1−(1+r)^{-n}]/r khi r≠0 và 1+r>0; nếu r=0 thì V=na. Các công thức là tổng CSN hữu hạn, không phải tổng vô hạn và phải đánh dấu thời điểm dòng tiền.

Hãy theo dõi cách giải này. Gửi 50 vào cuối ba kỳ, r=10%/kỳ: FV=50(1,1²+1,1+1)=165,5, không có lãi trên khoản mới gửi cuối kỳ 3. Với trả nợ, dùng B_{k+1}=(1+r)B_k−a; chọn phương pháp dư nợ vì khoản trả giảm số dư.

### Vận dụng và tự đối chiếu

<!-- First Try TOP07-M16: knowledge, not canonical Readiness -->
**1.** Khởi đầu 50, tăng 10% mỗi kỳ sau hai lần tăng có phải 60 không?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Không, 50·1,1²=60,5.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu ghi 60, bạn đã cộng 5 cố định và vô tình dùng CSC thay CSN.

</details>

<!-- First Try TOP07-M17: knowledge, not canonical Readiness -->
**2.** P=1 triệu, r=10% mỗi kỳ, hai kỳ còn bao nhiêu?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

1·1,1²=1,21 triệu.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu làm thành 1,2 triệu, bạn đã dùng lãi đơn thay lãi kép; ghi rõ 'không nộp/rút'.

</details>

<!-- First Try TOP07-M18: knowledge, not canonical Readiness -->
**3.** Gửi 20 vào cuối hai kỳ với r=10%/kỳ, số dư cuối kỳ 2 là bao nhiêu?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

20·1,1+20=42; khoản gửi cuối kỳ 2 chưa sinh lãi.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu nhân cả hai khoản với 1,1², vẽ trục kỳ 0–1–2 và đánh dấu ngay sau khi nộp.

</details>

## Hình minh họa (3 SVG nguồn, hướng dẫn cách đọc)

- **D5-01:** `prototypes/thpt/visuals/THPT_TOPIC07_SEQUENCE_DISCRETE_VS_CONTINUOUS_R01.svg`. Đọc từng điểm rời rạc (n,u_n) ở n nguyên và không nối thành đồ thị liên tục để ngộ nhận mọi n thực đều hợp lệ. Chú ý dãy hữu hạn 1–6.
- **D5-02:** `prototypes/thpt/visuals/THPT_TOPIC07_AP_VS_GP_GROWTH_R01.svg`. Ở cùng giá trị đầu 100, đường tăng cộng đều 10 mỗi kỳ là các điểm 100,110,120,130; tăng 10% mỗi kỳ cho 100,110,121,133,1. Đọc chênh từng khoảng so với tỷ số các kỳ.
- **D5-03:** `prototypes/thpt/visuals/THPT_TOPIC07_END_PERIOD_CASHFLOW_R01.svg`. Trục thời gian 0,1,2,3; ba khoản gửi CUỐI mỗi kỳ đều 100, lãi 10%, giá trị tại cuối kỳ 3 lần lượt 121,110,100 → tổng 331. Các mũi tên không biểu thị cam kết ngân hàng thực.

## Mô hình học tương tác — SPEC_ONLY

1. **Cộng đều / nhân đều:** chọn d,q và kéo chỉ số n; hiện bảng u_n, hiệu và tỉ số (không cho phép chia 0). Kiểm q âm/0, n=1, d=0; có chế độ xem lời giải từng bước và fallback bảng tĩnh. Đây chỉ là đặc tả, chưa triển khai runtime.
2. **Trục dòng tiền cuối kỳ:** lựa chọn gửi góp hoặc trả nợ, r theo cùng đơn vị thời gian với kỳ n, vẽ từng khoản và dư nợ. Bắt buộc xử lý r=0, n nguyên dương, loại P<0 ngoài mô hình và không hiển thị 'lãi' trước khi nộp cuối kỳ. SPEC_ONLY, chưa QA trình duyệt.

# Luyện tập

18 câu tự biên soạn `THPT-TOP07-P01…P18`, 4 Written `THPT-TOP07-W01…W04` (rubric 7 điểm/câu) có **duy nhất** đề, đáp án, lời giải và D6 tại `prototypes/thpt/shared-items/Temp_TOPIC07_SEQUENCES_NEW22_PUBLIC_CANONICAL_R01_20261112.md`. 47 item nguồn G11 ChII/B15 chỉ được dẫn bằng `item_id` tại chỉ mục `prototypes/thpt/shared-items/Temp_TOPIC07_SEQUENCES_ORIGINAL47_SGK_CANONICAL_INDEX_R01_20261112.md`. Không tạo một ngân hàng đáp án thứ hai.

**Thứ tự tự học:** làm ví dụ → tự thử → chọn 1–2 bài luyện trên outcome → mở đối chiếu sau khi làm → quay lại D6 nếu sai; luyện tập và Written có thể sử dụng hint theo phạm vi PUBLIC nhưng không ghi Skill Mastery.

| Outcome | Chủ đề | Câu mới | Written có rubric |
|---|---|---|---|
| TOP07-O01 | Khái niệm dãy và miền chỉ số | THPT-TOP07-P01 | — |
| TOP07-O02 | Số hạng tổng quát và sự khác nhau giữa quy luật/đoán mò | THPT-TOP07-P02 | — |
| TOP07-O03 | Hệ thức truy hồi và cách đổi biến | THPT-TOP07-P03 | THPT-TOP07-W01 |
| TOP07-O04 | Tính tăng, giảm: chứng minh trên mọi n | THPT-TOP07-P04 | — |
| TOP07-O05 | Bị chặn và giá trị không đạt | THPT-TOP07-P05 | — |
| TOP07-O06 | Nhận diện cấp số cộng từ cùng một lượng tăng | THPT-TOP07-P06 | — |
| TOP07-O07 | Số hạng n của cấp số cộng | THPT-TOP07-P07 | — |
| TOP07-O08 | Suy ngược công sai từ hai số hạng | THPT-TOP07-P08 | — |
| TOP07-O09 | Tổng hữu hạn của cấp số cộng và ghép cặp | THPT-TOP07-P09 | THPT-TOP07-W02 |
| TOP07-O10 | Mô hình tăng đều và tổng theo kỳ | THPT-TOP07-P10 | — |
| TOP07-O11 | Nhận diện cấp số nhân, dấu và số 0 | THPT-TOP07-P11 | — |
| TOP07-O12 | Số hạng thứ n của cấp số nhân | THPT-TOP07-P12 | — |
| TOP07-O13 | Suy ngược công bội và trung bình nhân | THPT-TOP07-P13 | — |
| TOP07-O14 | Tổng n số hạng cấp số nhân và trường hợp q=1 | THPT-TOP07-P14 | — |
| TOP07-O15 | Tổng cấp số nhân lùi vô hạn và sai số phần dư | THPT-TOP07-P15 | THPT-TOP07-W03 |
| TOP07-O16 | Nhận diện tăng cộng đều và tăng theo phần trăm | THPT-TOP07-P16 | — |
| TOP07-O17 | Lãi kép: số kỳ, lãi suất kỳ và giới hạn mô hình | THPT-TOP07-P17 | — |
| TOP07-O18 | Gửi góp cuối kỳ, trả góp cuối kỳ và dòng tiền | THPT-TOP07-P18 | THPT-TOP07-W04 |

# Tự kiểm tra

**Public Self Check (18 lượt đặt câu):** đúng 18 `item_id` P01–P18 được đặt lại từ luyện tập, không tạo đề mới. `ASSESSMENT_MODE=CLIENT_SELF_CHECK_NO_MASTERY`; đây là demo/tự đối chiếu không có bằng chứng độc lập và không chấm Skill Mastery. Không thêm RD1 kín vào public GitHub.

Trong giao diện thực tế, người học phải nhấn **Final Submit** rồi mới được thấy đúng/sai, lời giải, gợi ý hay đáp án; kiểm thử hành vi đó thuộc RELEASE, học liệu Markdown này **không** chứng nhận runtime. Sau tự đối chiếu, người học xem outcome mắc lỗi và quay về giải thích/D6, không được dùng câu đã thấy đáp án để tuyên bố độc lập TOPIC_READINESS.

## Phụ lục AUTHORING — không đưa học sinh xem

PACKET_ID: THPT-TOPIC07-SEQUENCES-AP-GP-FULL-R01
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.1.0
CATALOG_TOPIC_ID: CD07
LESSON_IDS: TOP07-M01..TOP07-M18
OUTCOME_IDS: TOP07-O01..TOP07-O18
PUBLIC_ORIGINAL_ID_COUNT: 47
PUBLIC_NEW_ID_COUNT: 22
PUBLIC_CANONICAL_UNIQUE: 69
PUBLIC_SELF_CHECK_REUSE: 18
PRIVATE_RD1_IMPORTED: 0
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
OFFICIAL_READINESS: NOT_CLAIMED
MASTERY_ACTIVATION: NO
RELEASE_AUTHORIZATION: NO
RUNTIME_TOPIC_ID: UNASSIGNED_OWNER_DECISION
ORIGINAL_SGK_INDEX_BLOB: 6500dc26b7ae21eb99b964f675023babdd881663
NEW22_BANK_BLOB: 3bf3ab77d89497b39ae50ac54f71b81eccddc14c

### 47 original canonical SGK IDs (INDEX pointers only)
- THPT-G11-B05-C01
- THPT-G11-B05-C02
- THPT-G11-B05-C03
- THPT-G11-B05-C04
- THPT-G11-B05-P01
- THPT-G11-B05-P02
- THPT-G11-B05-P03
- THPT-G11-B05-P04
- THPT-G11-B05-P05
- THPT-G11-B05-P06
- THPT-G11-B05-P07
- THPT-G11-B05-P08
- THPT-G11-B06-C01
- THPT-G11-B06-C02
- THPT-G11-B06-C03
- THPT-G11-B06-C04
- THPT-G11-B06-P01
- THPT-G11-B06-P02
- THPT-G11-B06-P03
- THPT-G11-B06-P04
- THPT-G11-B06-P05
- THPT-G11-B06-P06
- THPT-G11-B06-P07
- THPT-G11-B06-P08
- THPT-G11-B07-C01
- THPT-G11-B07-C02
- THPT-G11-B07-C03
- THPT-G11-B07-C04
- THPT-G11-B07-P01
- THPT-G11-B07-P02
- THPT-G11-B07-P03
- THPT-G11-B07-P04
- THPT-G11-B07-P05
- THPT-G11-B07-P06
- THPT-G11-B07-P07
- THPT-G11-B07-P08
- THPT-G11-CHII-W05-01
- THPT-G11-CHII-W05-02-ANCHOR
- THPT-G11-CHII-W06-01
- THPT-G11-CHII-W06-02-ANCHOR
- THPT-G11-CHII-W07-01
- THPT-G11-CHII-W07-02-ANCHOR
- THPT-G11-CHV-B15-C03
- THPT-G11-CHV-B15-P05
- THPT-G11-CHV-B15-P06
- THPT-G11-CHV-B15-P07
- THPT-G11-CHV-B15-W02-ANCHOR

### 22 new canonical Topic IDs (bank pointers only)
- THPT-TOP07-P01
- THPT-TOP07-P02
- THPT-TOP07-P03
- THPT-TOP07-P04
- THPT-TOP07-P05
- THPT-TOP07-P06
- THPT-TOP07-P07
- THPT-TOP07-P08
- THPT-TOP07-P09
- THPT-TOP07-P10
- THPT-TOP07-P11
- THPT-TOP07-P12
- THPT-TOP07-P13
- THPT-TOP07-P14
- THPT-TOP07-P15
- THPT-TOP07-P16
- THPT-TOP07-P17
- THPT-TOP07-P18
- THPT-TOP07-W01
- THPT-TOP07-W02
- THPT-TOP07-W03
- THPT-TOP07-W04

END_AUTHOR_SOURCE: CANONICAL_SOURCE_R01_LOCKED_FOR_Q18
