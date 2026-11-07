# Bài 2. Tập hợp và các phép toán trên tập hợp

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG I · KIẾN THỨC SGK KNTT</p>
<p class="thpt-r4-lead">Học kiến thức, xem ví dụ và hình minh họa rồi tự luyện. Gợi ý/lời giải chỉ mở khi em chọn; không ghi điểm thành thạo.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Tổng quan chương</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

## Trước khi học — hiểu ý nghĩa trước khi nhớ quy tắc

Em hãy đọc tình huống, nhớ lại kiến thức cũ và tự trả lời từng câu **Tự thử**. Chỉ mở lời giải sau khi tự làm. Sau đó tiếp tục với **Kiến thức SGK**, **Ví dụ** rồi **Core/Luyện tập**. Hoạt động này không chấm điểm hay ghi mức độ thành thạo.



### Phần tử, tập con và tập bằng nhau

**Vì sao cần học?** Danh sách người tham gia và nhóm danh sách là hai loại đối tượng: nhầm một người với nhóm gồm người đó sẽ dẫn tới dùng sai ∈ và ⊆.

**Em đã biết gì?** Biết cách liệt kê tập hợp bằng ngoặc nhọn, một phần tử có thể là một số hoặc một tập.

**Hiểu bản chất trước công thức** x∈A nói “x là một phần tử”; B⊆A nói “mọi phần tử của tập B có trong A”. Cùng ký hiệu số 2 không đồng nhất với tập {2}.

**Quy tắc và điều kiện áp dụng** A⊆B ⇔ ∀x (x∈A⇒x∈B); A=B khi đồng thời A⊆B và B⊆A.

**Vì sao làm theo cách này?** Đọc kiểu đối tượng hai vế của mỗi ký hiệu trước khi kiểm phần tử. Đừng suy {2}∈A chỉ từ 2∈A.

**Tự thử trước Core** Cho A={2,4}. Đánh giá ba phát biểu: (a) 2∈A; (b) {2}⊆A; (c) {2}∈A.

<details class="thpt-r4-pedagogical-note" data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHI-TRY06" markdown="1">
<summary>Em đã tự thử? Mở lời giải để đối chiếu</summary>

(a) **đúng** vì 2 là phần tử của A. (b) **đúng** vì phần tử duy nhất 2 của {2} nằm trong A. (c) **sai** vì A gồm hai phần tử là các số 2 và 4, không có phần tử là tập {2}.

</details>

**Nếu chưa làm được:** Lẫn ∈ với ⊆. Ghi loại đối tượng từng vế rồi quay về phần hỗ trợ tự khắc phục ở cuối bài.

### Hợp và giao hai tập hợp

**Vì sao cần học?** Hai câu lạc bộ có người tham gia trùng nhau; cộng tổng người của hai nhóm sẽ đếm lặp nếu không xác định phần giao.

**Em đã biết gì?** Biết cách liệt kê tập hữu hạn; “hoặc” trong tập hợp có nghĩa “ít nhất một”, có thể cả hai.

**Hiểu bản chất trước công thức** Giao là nhóm chung; hợp là nhóm có mặt trong ít nhất một tập. Không đếm một phần tử hai lần khi viết hợp.

**Quy tắc và điều kiện áp dụng** A∩B={x|x∈A và x∈B}; A∪B={x|x∈A hoặc x∈B}.

**Vì sao làm theo cách này?** Lập phần chung trước, rồi hợp không lặp phần tử; dùng biểu đồ Venn để tự kiểm. Không suy giao là rỗng chỉ vì hai tập có tên khác nhau.

**Tự thử trước Core** Cho A={a,b,c}, B={b,c,d}. Hãy viết A∩B, A∪B và số phần tử của mỗi tập kết quả.

<details class="thpt-r4-pedagogical-note" data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHI-TRY07" markdown="1">
<summary>Em đã tự thử? Mở lời giải để đối chiếu</summary>

A∩B={b,c}, có 2 phần tử; A∪B={a,b,c,d}, có 4 phần tử, không đếm b,c hai lần.

</details>

**Nếu chưa làm được:** Ghi các phần tử b,c hai lần trong hợp. Phác hai vòng tròn có chồng lấn và quay về phần hỗ trợ tự khắc phục ở cuối bài.

### Hiệu hai tập và chiều phép toán

**Vì sao cần học?** Khi lập danh sách chỉ thuộc nhóm A mà không thuộc B, việc lấy A trừ B khác với lấy B trừ A.

**Em đã biết gì?** Phân biệt phần riêng và phần giao của hai tập; biết duyệt từng phần tử.

**Hiểu bản chất trước công thức** A\B giữ lại phần của A ở ngoài B; đổi thứ tự hai tập sẽ đổi kết quả.

**Quy tắc và điều kiện áp dụng** A\B={x|x∈A và x∉B}. Không có công thức A\B=B\A nói chung.

**Vì sao làm theo cách này?** Lọc các phần tử thuộc tập đứng trước, loại những phần tử có ở tập đứng sau; kiểm một phần tử làm chứng nếu nghi hai hiệu bằng nhau.

**Tự thử trước Core** A={1,2,3,4}, B={2,4,6}. Tính A\B và B\A. Hai tập kết quả có bằng nhau không?

<details class="thpt-r4-pedagogical-note" data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHI-TRY08" markdown="1">
<summary>Em đã tự thử? Mở lời giải để đối chiếu</summary>

A\B={1,3}; B\A={6}. **Không bằng nhau**, vì chẳng hạn 1 nằm trong A\B nhưng không nằm trong B\A.

</details>

**Nếu chưa làm được:** Cho rằng hiệu là phép giao hoặc luôn đổi chỗ được. Dùng bảng ba cột “chỉ A / cả hai / chỉ B” rồi phần hỗ trợ tự khắc phục ở cuối bài.

### Phần bù phụ thuộc tập vũ trụ

**Vì sao cần học?** Muốn hỏi ai “không thuộc A” thì phải biết đang xét toàn trường hay một lớp; cùng nhóm A có thể có phần bù khác nhau tùy tập vũ trụ.

**Em đã biết gì?** Biết hiệu hai tập, tập vũ trụ U là phạm vi đang xét và A⊆U.

**Hiểu bản chất trước công thức** Phần bù của A là mọi phần tử trong U nhưng không thuộc A, không phải tất cả đối tượng của thế giới bên ngoài U.

**Quy tắc và điều kiện áp dụng** Nếu A⊆U thì phần bù của A trong U là U\A.

**Vì sao làm theo cách này?** Ghi U rõ ràng, sau đó dùng phép hiệu. Nếu chưa cho U thì phải yêu cầu xác định miền thay vì tự bổ sung vô hạn phần tử.

**Tự thử trước Core** Với U={0,1,2,3,4,5} và A={1,3,5}, tìm phần bù của A trong U. Vì sao cần ghi U?

<details class="thpt-r4-pedagogical-note" data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHI-TRY09" markdown="1">
<summary>Em đã tự thử? Mở lời giải để đối chiếu</summary>

U\A={0,2,4}. Cần U vì “không thuộc A” chỉ có nghĩa trong phạm vi được xét; thay U sẽ có thể thay phần bù.

</details>

**Nếu chưa làm được:** Lấy phần bù ngoài U hoặc quên số 0. Đối chiếu D1 phần bù và phần hỗ trợ tự khắc phục ở cuối bài.

### Khoảng, đoạn, đầu mút mở/đóng

**Vì sao cần học?** Một khoảng điều kiện x≥1 khác x>1 tại đúng giá trị 1; nếu không đánh dấu đầu mút sẽ loại nhầm nghiệm.

**Em đã biết gì?** Ôn bất đẳng thức x<a, x≤a, x>a, x≥a; biết trục số và phân biệt ≤ với <.

**Hiểu bản chất trước công thức** Giao giữ điểm thỏa đồng thời; hợp lấy điểm thỏa ít nhất một. Đầu mút được lấy nếu thỏa điều kiện của tập kết quả.

**Quy tắc và điều kiện áp dụng** [a,b] chứa cả hai đầu mút; (a,b) không chứa; nửa khoảng chứa đúng đầu có ngoặc vuông. ±∞ không là số thực để lấy làm đầu mút.

**Vì sao làm theo cách này?** Vẽ hoặc tưởng tượng hai đoạn trục số. Kiểm giá trị x ở mỗi biên rồi viết ngoặc; không suy ra dấu ngoặc chỉ từ hình dạng chữ viết.

**Tự thử trước Core** Cho X=(-2,4] và Y=[1,6). Tìm X∩Y và X∪Y. Với mỗi kết quả, cho biết 1, 4 và 6 có thuộc hay không.

<details class="thpt-r4-pedagogical-note" data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHI-TRY10" markdown="1">
<summary>Em đã tự thử? Mở lời giải để đối chiếu</summary>

X∩Y=[1,4], gồm 1 và 4 nhưng không có 6. X∪Y=(-2,6), gồm 1,4 nhưng không có 6 (cũng không có -2).

</details>

**Nếu chưa làm được:** Viết (1,4) vì quên 1 hoặc 4 được nhận, hoặc viết (-2,6] vì tưởng 6 thuộc Y. Xem phần hỗ trợ tự khắc phục ở cuối bài và ví dụ tương ứng bên dưới.

### Đếm bốn miền sơ đồ Venn

**Vì sao cần học?** Nếu hỏi có bao nhiêu bạn không vào hai câu lạc bộ, chỉ nhìn số đăng kí từng câu lạc bộ là chưa đủ vì một bạn có thể tham gia cả hai.

**Em đã biết gì?** Nắm giao, hợp, hiệu và phần bù trong tập U là cả lớp; biết công thức trừ phần giao để không đếm trùng.

**Hiểu bản chất trước công thức** Bốn miền không chồng lấn là: chỉ A, A∩B, chỉ B, ngoài cả hai; tổng bằng sĩ số lớp.

**Quy tắc và điều kiện áp dụng** Với tập hữu hạn: |A∪B|=|A|+|B|−|A∩B|; số ngoài hai tập là |U|−|A∪B|.

**Vì sao làm theo cách này?** Đặt số phần giao vào giữa sơ đồ trước, trừ giao khỏi từng CLB, rồi lấy tổng 4 miền để kiểm lại. Hình R01 với 40 bạn là ví dụ khác; không tái dùng các số của hình cho bài 32 bạn.

**Tự thử trước Core** Một lớp có 32 học sinh; 18 bạn tham gia CLB Âm nhạc, 15 bạn tham gia CLB Thể thao và 6 bạn tham gia cả hai. Hãy tính số bạn chỉ tham gia mỗi CLB và số bạn không tham gia CLB nào.

<details class="thpt-r4-pedagogical-note" data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHI-TRY11" markdown="1">
<summary>Em đã tự thử? Mở lời giải để đối chiếu</summary>

Chỉ Âm nhạc: 18−6=12; chỉ Thể thao: 15−6=9; tham gia ít nhất một CLB: 12+6+9=27; không tham gia CLB nào: 32−27=5. Bốn miền 12+6+9+5=32, khớp sĩ số.

</details>

**Nếu chưa làm được:** Đếm 6 bạn trong giao hai lần: 18+15=33>32. Điền giao trước rồi đối chiếu phần hỗ trợ tự khắc phục ở cuối bài/ví dụ tương ứng bên dưới.

---

## 1. Kiến thức SGK

### 1.1. Phần tử, tập hợp, tập con và tập bằng nhau
- `x∈A` phát biểu x là phần tử của tập A. `A⊆B` khi **mọi** phần tử của A đều nằm trong B. Hai tập bằng nhau A=B khi A⊆B và B⊆A. Tập rỗng `∅` không có phần tử và là tập con của mọi tập.
- Phải phân biệt `x∈A` (phần tử) với `A⊆B` (tập con); tập `{1}` và phần tử `1` là hai đối tượng khác nhau. Biểu diễn tập qua liệt kê hoặc tính chất đặc trưng kèm miền xét.
### 1.2. Hợp, giao, hiệu và phần bù
- `A∪B={x|x∈A hoặc x∈B}` (“hoặc” có thể đồng thời). `A∩B={x|x∈A và x∈B}`; `A\B={x∈A|x∉B}`. Nếu A⊆U, **phần bù** của A trong U là `U\A`; phải biết U để tính phần bù.
- Với tập hữu hạn, `n(A∪B)=n(A)+n(B)−n(A∩B)`. Không cộng hai tập khi có phần chung mà không trừ giao.
### 1.3. Khoảng, đoạn, nửa khoảng trên ℝ
- `(a,b)`, `[a,b]`, `(a,b]`, `[a,b)` lần lượt biểu thị điều kiện nghiêm ngặt hoặc bao gồm đầu mút. Với vô cực luôn dùng ngoặc tròn; `(-∞,b]` có x≤b, `(a,+∞)` có x>a. Dùng trục số để xem hợp (một trong hai) và giao (cả hai).
### 1.4. Ứng dụng — sơ đồ Venn
- Đếm bốn miền **chỉ A**, **A∩B**, **chỉ B**, **ngoài cả hai**. Tổng bốn miền bằng số phần tử U. Đây là mô hình tập hợp; không suy năng lực xác suất, không nhầm số phần tử với điểm Mastery.



## 2. Ví dụ

**Ví dụ 01.** A={1,2,3,4}, B={3,4,5}. A∩B={3,4}; A∪B={1,2,3,4,5}; A\B={1,2}; B\A={5}. Nêu rõ hiệu không giao hoán.

**Ví dụ 02.** X=(-∞,3], Y=(1,+∞). X∩Y=(1,3], X∪Y=ℝ. Xét riêng 1 không thuộc Y và 3 thuộc cả hai.

**Ví dụ 03.** Trong lớp 40 học sinh, 23 học Anh, 25 học Toán, 12 học cả hai: chỉ Anh=11, chỉ Toán=13, hợp=36, không học môn nào=4. Hình FIG-G10-B02-01 minh họa bốn miền.

## 3. Hình minh họa và hỗ trợ tự khắc phục

<figure class="thpt-r4-plot thpt-r4-probability-figure"><img src="../../../../assets/images/thpt/THPT_G10_B02_VENN_TWO_CLUBS_D5_R01.svg" loading="lazy" alt="Sơ đồ Venn bốn miền của 40 học sinh"><figcaption>Sơ đồ Venn minh họa cách tránh đếm trùng ở giao hai tập.</figcaption></figure>

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="HELP-G10-B02-01">
<summary>Nhầm phần tử và tập con</summary>
<p><strong>Dấu hiệu:</strong> Viết 1⊆A thay vì 1∈A, hoặc cho rằng A=B khi chỉ kiểm một chiều A⊆B.</p>
<p><strong>Bản chất:</strong> Một số là phần tử; một tập được so bằng quan hệ tập con. Để kết luận hai tập bằng nhau cần đủ hai chiều.</p>
<p><strong>Tự sửa:</strong> Ghi loại đối tượng mỗi vế. Khi là tập, liệt kê phần tử; kiểm mọi phần tử A trong B và mọi phần tử B trong A.</p>
<p><strong>Tiền đề:</strong> EX-G10-B02-01</p>
<p><strong>Luyện lại:</strong> <a data-thpt-formative-id="THPT-G10-B02-C01" href="../luyen-tap/?item=THPT-G10-B02-C01">B02-C01</a> · <a data-thpt-formative-id="THPT-G10-B02-P06" href="../luyen-tap/?item=THPT-G10-B02-P06">B02-P06</a></p>
</details>

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="HELP-G10-B02-02">
<summary>Nhầm giao, hợp, phần bù và đếm trùng</summary>
<p><strong>Dấu hiệu:</strong> Khi có 12 người ở giao, cộng 23+25 không trừ; hoặc tìm U\A mà quên U.</p>
<p><strong>Bản chất:</strong> Giao là “và”, hợp là “hoặc”; tổng hai tập đếm giao hai lần. Phần bù phụ thuộc tập vũ trụ.</p>
<p><strong>Tự sửa:</strong> Vẽ bốn miền Venn; điền giao trước, trừ ra hai miền chỉ một tập, cuối cùng lấy tổng U trừ hợp. Với khoảng, tô đúng đầu mút và dùng giao/hợp.</p>
<p><strong>Tiền đề:</strong> EX-G10-B02-03</p>
<p><strong>Luyện lại:</strong> <a data-thpt-formative-id="THPT-G10-B02-C02" href="../luyen-tap/?item=THPT-G10-B02-C02">B02-C02</a> · <a data-thpt-formative-id="THPT-G10-B02-P02" href="../luyen-tap/?item=THPT-G10-B02-P02">B02-P02</a> · <a data-thpt-formative-id="THPT-G10-B02-P05" href="../luyen-tap/?item=THPT-G10-B02-P05">B02-P05</a></p>
</details>

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="HELP-G10-B02-03" markdown="1">
<summary>Khi nhầm khoảng, đoạn và dấu ngoặc ở đầu mút</summary>

1. **Nhận biết dấu hiệu sai:** Em viết sai ngoặc ở 1,4 hoặc 6 khi tìm hợp/giao hai khoảng.

2. **Nhớ lại tiền đề:** Hỏi “1 có thuộc X? thuộc Y?”; đọc đúng dấu ≤/< và ý nghĩa ngoặc vuông/tròn. Luôn tách từng điều kiện.

3. **Xem ví dụ đã duyệt:** Quay về Kiến thức SGK Bài 2 “Khoảng/đoạn/nửa khoảng” và Ví dụ 2 (X=(-∞,3], Y=(1,+∞)); giải thích vì sao 1 bị loại, 3 được lấy trong giao.

4. **Tự sửa câu ngắn:** X=(-2,4], Y=[1,6). Thử từng giá trị -2,1,4,6 và xác định có ở hợp/giao; chỉ sau đó viết khoảng.

5. **Quay lại & tự đối chiếu:** Làm lại câu Tự thử về khoảng/đoạn ở phía trên và hai item R01 các câu Core/Luyện tập về khoảng và đoạn, tự mở đối chiếu; không dùng kết quả làm Mastery hay xác nhận official Readiness.

</details>

## 4. Tiếp tục học

[Luyện tập Bài 2](luyen-tap.md) · [Tự luận Chương I](../../thu-vien/tu-luan-chuong-i.md)

<p class="thpt-r4-footnote">Nguồn: SGK Toán 10 KNTT tập 1, Bài 2 trang 12–19; SBT Bài 2 trang 8–11. Học liệu tự luyện không dùng làm bài đánh giá độc lập.</p>
