<!-- AUTHORING CANDIDATE · R02 continuous student-first narrative · DELTA_C_ACADEMIC_MATERIAL. R01 remains immutable source-reviewed snapshot. This is NOT CONTENT_READY and must be math/PED reviewed as a whole unit, then owner UX review before replacing active source. -->
# CĐ01 — Mệnh đề, Tập hợp và Tư duy logic toán học · Liền mạch R02 — ứng viên phản biện

**LEARNING_PATH: TOPIC** · **OUTER_PAGES: Kiến thức / Luyện tập / Tự kiểm tra** · **STANDARD: SLM-THPT-QUALITY-ONE v3.0.1** · **CONTENT_VERSION: R01**.

Đây là một chuyên đề tự học độc lập theo danh mục CĐ01/22. Chuyên đề kết nối cách kiểm tra lời khẳng định với cách tổ chức tập hợp và đếm đúng; KHÔNG chia chương/bài SGK làm lộ trình học. Các mã kỹ thuật phía cuối là metadata dành cho AUTHORING/RELEASE, không hiển thị trong giao diện học sinh.

# Kiến thức

## Khám phá — Hai câu hỏi dẫn dắt

- Một bạn nói “mọi thành viên CLB Toán đều biết lập trình”. Chỉ một bạn không biết lập trình có đủ bác bỏ câu ấy không? → Em cần phân biệt “mọi”, “tồn tại” và phản ví dụ.
- Trong lớp có 23 bạn học Anh, 25 bạn học Toán, 12 bạn học cả hai. Cộng 23+25 có phải số bạn học ít nhất một môn không? → Em cần hiểu hợp, giao và mô hình Venn.

**Bản đồ hành trình:** mệnh đề → phủ định → kéo theo/đảo → tương đương → lượng từ → tập hợp/phần tử → hợp/giao → hiệu → phần bù → khoảng trên trục số → đếm tập hợp bằng Venn. Mỗi mảng có giải thích trước phương pháp, ví dụ có lý do, một Tự thử, phần Đối chiếu chỉ mở khi tự quyết định và đường sửa lỗi. Không phải học lại một chương SGK theo thứ tự bài.

**Kiến thức tiền đề đủ dùng tại chỗ:** số nguyên ℤ gồm ...,−2,−1,0,1,2,...; số thực ℝ chứa các số trên trục số; dấu ≤ nghĩa “nhỏ hơn hoặc bằng”; A={1,2} là một tập hợp có hai phần tử; phép chia hết n chia hết cho k khi n=kt với một số nguyên t. Nếu quên, đọc lại ngay ghi chú này trước khi sang ký hiệu logic.

## Từ câu nói đến suy luận chính xác

Để lập luận đúng, ta phải hiểu câu nào có thể xét đúng–sai, câu nào còn phụ thuộc vào biến và cách bác bỏ một nhận định. Những ý tưởng về phủ định, kéo theo, tương đương và lượng từ sẽ lần lượt xuất hiện từ chính câu hỏi ấy.

### Khi nào một câu có thể đúng hoặc sai?

<!-- LESSON_ID: TOP01-M01 · OUTCOME_ID: TOP01-O01 · R02 prose authored in connected paragraphs -->

Khi nghe một câu nói, không phải lúc nào ta cũng có thể kết luận ngay câu đó đúng hay sai. “13 là số nguyên tố” là một khẳng định đúng vì 13 chỉ có hai ước dương là 1 và 13; “13 là số chẵn” là khẳng định sai. Cả hai đều là **mệnh đề**, bởi mỗi câu có một giá trị đúng hoặc sai xác định. Câu hỏi “13 có phải số nguyên tố không?” thì khác: nó yêu cầu trả lời, chứ chưa khẳng định điều gì.

Bây giờ xét câu \(n+1=4\) với \(n\) là số nguyên. Nếu thay \(n=3\), đẳng thức đúng; thay \(n=4\), đẳng thức sai. Ta không thể gán cho phát biểu ban đầu một giá trị đúng–sai độc lập với \(n\). Đây là **mệnh đề chứa biến**. Để kiểm chứng một phát biểu như vậy, phải biết biến thuộc miền nào và đã được gán giá trị hay lượng từ nào chưa. Chính sự phân biệt này giúp việc chứng minh sau này không bị mơ hồ.

**Em tự thử:** “\(2k+1\) là số lẻ”, với \(k\in\mathbb Z\), là mệnh đề hay phát biểu chứa biến? Nếu viết “Với mọi \(k\in\mathbb Z\), \(2k+1\) là số lẻ”, em có thể kết luận gì?

<details class="slm-topic-first-try" markdown="1">
<summary>Em đã tự làm? Mở phần đối chiếu</summary>

Câu đầu còn chứa biến \(k\) chưa được lượng hóa. Câu thứ hai là một mệnh đề đúng: mọi số nguyên \(k\) đều cho biểu thức \(2k+1\) có dạng số lẻ. Nếu em vẫn phân vân, thử \(k=0\) và \(k=2\), rồi phân biệt việc kiểm vài giá trị với một lời khẳng định cho **mọi** số nguyên.

</details>

### Phủ định là phát biểu chính xác phần ngược lại

<!-- LESSON_ID: TOP01-M02 · OUTCOME_ID: TOP01-O02 · R02 prose authored in connected paragraphs -->

Một mệnh đề có thể đúng hoặc sai; **phủ định** là phát biểu đổi giá trị đúng–sai ấy. Nếu \(P\) là “7 là số chẵn” thì \(\neg P\) là “7 không phải số chẵn”. Khi \(P\) sai, phủ định đúng, và ngược lại. Với bất đẳng thức, phải đảo đúng cả dấu bằng: phủ định của \(x\ge3\) là \(x<3\), chứ không phải \(x\le3\), bởi tại \(x=3\) hai câu sau không đối lập đúng–sai.

Điều này càng quan trọng khi câu chứa lượng từ. Xét \(P\): “Mọi số thực \(x\) đều thỏa \(x^2\ge0\)”. Để bác bỏ \(P\), ta cần **ít nhất một** số thực làm \(x^2<0\); vì không tồn tại số ấy, phủ định là sai và \(P\) đúng. Như vậy, phủ định của “mọi” không phải “mọi phần tử đều không”, mà là “tồn tại ít nhất một phần tử không”.

**Em tự thử:** Hãy phủ định hai phát biểu “\(t\ge5\)” và “\(t<-1\)”, với \(t\in\mathbb R\).

<details class="slm-topic-first-try" markdown="1">
<summary>Em đã tự làm? Mở phần đối chiếu</summary>

Hai phủ định lần lượt là \(t<5\) và \(t\ge-1\). Nếu em viết \(t\le5\), hãy thử ngay \(t=5\): cả phát biểu gốc và câu mới đều đúng, nên đó không thể là phép phủ định.

</details>

### Một chiều suy luận khác hai chiều

<!-- LESSON_ID: TOP01-M03 · OUTCOME_ID: TOP01-O03 · R02 prose authored in connected paragraphs -->

Giả sử một số nguyên chia hết cho 6. Vì số ấy viết được \(n=6k=3(2k)\), nó chắc chắn cũng chia hết cho 3. Ta diễn đạt: “Nếu \(n\) chia hết cho 6 thì \(n\) chia hết cho 3”, ký hiệu \(P\Rightarrow Q\). Khi đó \(P\) là **điều kiện đủ** để có \(Q\), còn \(Q\) là **điều kiện cần** để có \(P\).

Nhưng một kết luận đúng theo chiều thuận chưa cho phép đọc ngược. Số 3 chia hết cho 3 mà không chia hết cho 6, nên câu đảo \(Q\Rightarrow P\) sai. Một phản ví dụ đủ bác bỏ một mệnh đề kéo theo nếu tiền đề đúng mà kết luận sai. Về logic hình thức, \(P\Rightarrow Q\) chỉ sai khi \(P\) đúng và \(Q\) sai; quy tắc này không có nghĩa mọi câu “nếu...thì...” là một quan hệ nguyên nhân trong đời sống.

**Em tự thử:** Với \(n\in\mathbb Z\), “Nếu \(n\) chia hết cho 8 thì \(n\) chia hết cho 4” đúng không? Chiều đảo có đúng không?

<details class="slm-topic-first-try" markdown="1">
<summary>Em đã tự làm? Mở phần đối chiếu</summary>

Chiều thuận đúng vì \(n=8k=4(2k)\). Chiều đảo sai: \(n=4\) chia hết cho 4 nhưng không chia hết cho 8. Muốn chứng minh hai chiều, phải có hai lập luận riêng hoặc phép biến đổi tương đương hợp lệ.

</details>

### “Khi và chỉ khi” buộc chứng minh cả hai chiều

<!-- LESSON_ID: TOP01-M04 · OUTCOME_ID: TOP01-O04 · canonical details remain in old source-index and new-bank -->

Một đặc điểm đôi khi nhận ra được từ kết quả và cũng suy ra được kết quả ấy. Đó là quan hệ tương đương, mạnh hơn kéo theo một chiều. Trước hết, hãy nhớ đã phân biệt P⇒Q với Q⇒P. P⇔Q đúng khi P⇒Q và Q⇒P đều đúng. Khi làm bài chứng minh, có thể chứng minh lần lượt hai chiều hoặc chỉ ra các phép biến đổi tương đương hợp lệ. Một chiều đúng và chiều kia sai thì không có tương đương.

Hãy kiểm chứng bằng một tình huống. Với n∈ℤ, “n chẵn ⇔ n² chẵn” đúng: n=2k ⇒ n²=4k² chẵn. Ngược lại, nếu n lẻ thì n=2k+1, n²=4k(k+1)+1 lẻ; vì thế n² chẵn buộc n chẵn. Hai chiều có lý do độc lập.

**Đến lượt em:** “n chia hết cho 4 ⇔ n² chia hết cho 4” đúng với mọi số nguyên n không?

<details class="slm-topic-first-try" markdown="1">
<summary>Đã tự thử? Mở lời giải và cách khắc phục</summary>

Sai: n=2 cho n²=4 chia hết cho 4 nhưng n=2 không chia hết cho 4. Chỉ chiều thuận chắc chắn đúng.

Nếu em vẫn còn phân vân, hãy quay lại điều kiện vừa dùng. Nếu chỉ chứng minh n=4k ⇒ n² chia hết cho 4, hãy tìm số n làm chiều đảo sai; luyện THPT-TOP01-ADD02.

</details>

### “Mọi” và “tồn tại” khác nhau ở lượng bằng chứng

<!-- LESSON_ID: TOP01-M05 · OUTCOME_ID: TOP01-O05 · canonical details remain in old source-index and new-bank -->

Một đánh giá “mọi học sinh đều ...” chỉ cần một trường hợp không đạt để bị bác bỏ; “có học sinh ...” chỉ cần một chứng cứ đúng. Nhầm hai lượng từ dễ dẫn đến kết luận sai. Các công cụ đã biết ở đây là mệnh đề chứa biến, miền xét và phủ định. ∀x∈D, P(x) đòi P đúng cho mọi x thuộc D; ∃x∈D, P(x) chỉ cần một giá trị thỏa. Phủ định của ∀ là ∃ kèm ¬P; phủ định của ∃ là ∀ kèm ¬P. Không được bỏ miền D; một phát biểu trên ℤ có thể khác trên ℝ.

Một ví dụ làm rõ bước suy luận: “∃n∈ℤ: n²=2” là sai vì không có số nguyên nào bình phương bằng 2. Phủ định đúng là “∀n∈ℤ: n²≠2”. Nếu đổi miền thành ℝ, phát biểu tồn tại lại đúng (n=√2). Vì thế miền xét là phần của nội dung mệnh đề.

**Đến lượt em:** “∀x∈ℝ, x²+1>0” đúng hay sai? Viết phủ định.

<details class="slm-topic-first-try" markdown="1">
<summary>Đã tự thử? Mở lời giải và cách khắc phục</summary>

Đúng vì x²+1≥1>0. Phủ định là “∃x∈ℝ, x²+1≤0”, sai.

Nếu em vẫn còn phân vân, hãy quay lại điều kiện vừa dùng. Nếu phủ định ∀ thành ∀¬, thử một phản ví dụ và so sánh điều kiện để bác bỏ câu “mọi”; luyện THPT-G10-B01-P01/P02.

</details>

## Những điều kiện trở thành tập hợp

Khi đã biết một đối tượng phải thỏa điều kiện nào, ta có thể gom các đối tượng lại thành một tập hợp. Phép giao, hợp, hiệu hay phần bù khi ấy mô tả cách ghép hoặc loại các điều kiện, thay vì chỉ là các ký hiệu để học thuộc.

### Tập hợp: phần tử không phải tập con

<!-- LESSON_ID: TOP01-M06 · OUTCOME_ID: TOP01-O06 · canonical details remain in old source-index and new-bank -->

Khi phân loại đồ vật hay học sinh, cần phân biệt một cá thể nằm trong nhóm và một nhóm nhỏ nằm trong nhóm lớn. Để hiểu, ta dựa vào đọc ký hiệu ∈, ∉, ⊆; biểu diễn liệt kê và tính chất. x∈A nói x là một phần tử của A; A⊆B nói mọi phần tử của A đều thuộc B. Hai tập bằng nhau khi và chỉ khi chứa đúng cùng các phần tử, tương đương A⊆B và B⊆A. Tập rỗng ∅ không có phần tử và là tập con mọi tập. Cần phân biệt 2 với {2}.

Xét một trường hợp cụ thể. Cho A={1,2} và B={x∈ℕ | 1≤x≤2}. Khi ℕ gồm các số tự nhiên, B={1,2}=A. Ta có 2∈A và {2}⊆A, nhưng “2⊆A” không phù hợp loại đối tượng khi 2 là một số, không phải tập. {2} không bằng 2.

**Đến lượt em:** A={2,4}. Xét 2∈A, {2}⊆A và {2}∈A: phát biểu nào đúng?

<details class="slm-topic-first-try" markdown="1">
<summary>Đã tự thử? Mở lời giải và cách khắc phục</summary>

Hai phát biểu đầu đúng; {2}∈A sai vì các phần tử của A là 2,4 chứ không phải tập {2}.

Nếu em vẫn còn phân vân, hãy quay lại điều kiện vừa dùng. Nếu lẫn ∈ và ⊆, khoanh đối tượng phía trái là số hay tập rồi kiểm từng phần tử; luyện THPT-G10-B02-C01/P06.

</details>

### Giao là “cùng có”; hợp là “có ít nhất một”

<!-- LESSON_ID: TOP01-M07 · OUTCOME_ID: TOP01-O07 · canonical details remain in old source-index and new-bank -->

Một học sinh có thể tham gia cả hai nhóm. Chọn “hoặc” trong toán học không có nghĩa bắt buộc chỉ được tham gia một. Điểm xuất phát là phần tử và tập hợp; đọc sơ đồ Venn cơ bản. A∩B gồm các phần tử thuộc cả A và B; A∪B gồm phần tử thuộc ít nhất một trong hai. Chữ “hoặc” trong hợp là hoặc bao hàm. Mỗi phần tử tập hợp chỉ xuất hiện một lần trong kết quả, dù có mặt ở cả hai tập.

Thử áp dụng vào ví dụ sau. A={1,2,3,4}; B={3,4,5}. Phần chung là 3,4 nên A∩B={3,4}. Ghép mọi phần tử không lặp lại được A∪B={1,2,3,4,5}. Nếu gọi 'hoặc' là chỉ một trong hai thì sẽ bỏ nhầm 3,4 khỏi hợp.

**Đến lượt em:** A={−1,0,1,2}, B={0,2,4}. Hãy tìm hợp và giao.

<details class="slm-topic-first-try" markdown="1">
<summary>Đã tự thử? Mở lời giải và cách khắc phục</summary>

A∩B={0,2}; A∪B={−1,0,1,2,4}.

Nếu em vẫn còn phân vân, hãy quay lại điều kiện vừa dùng. Đặt mỗi phần tử vào miền Venn và tự hỏi phần tử ở cả hai nhóm có được tính trong hợp không; luyện THPT-G10-B02-C02/ADD03.

</details>

### Hiệu tập hợp phụ thuộc chiều lấy

<!-- LESSON_ID: TOP01-M08 · OUTCOME_ID: TOP01-O08 · canonical details remain in old source-index and new-bank -->

“Có trong A nhưng không có trong B” khác với “có trong B nhưng không có trong A”. Khác biệt ấy quyết định kết quả trong các bài lọc dữ liệu. Ta bắt đầu từ hiểu phần giao và hợp. A\B={x∈A | x∉B}; B\A={x∈B | x∉A}. Hiệu thường không giao hoán. Có thể xem A\B là phần riêng của vòng A sau khi bỏ phần giao.

Từ đó, ta giải thích được ví dụ này. A={1,2,3,4}; B={3,4,5}. A\B={1,2}; B\A={5}. Nếu viết A\B={5} ta đã đổi nhầm thứ tự. Phần giao {3,4} không thuộc một trong hai hiệu.

**Đến lượt em:** A={1,3,5}, B={3,4,5}. Tính A\B và B\A.

<details class="slm-topic-first-try" markdown="1">
<summary>Đã tự thử? Mở lời giải và cách khắc phục</summary>

A\B={1}, B\A={4}.

Nếu em vẫn còn phân vân, hãy quay lại điều kiện vừa dùng. Đọc tên tập đứng trước dấu \ như tập đang được giữ; luyện THPT-G10-B02-P01/ADD04.

</details>

### Phần bù chỉ có nghĩa khi đã chọn vũ trụ

<!-- LESSON_ID: TOP01-M09 · OUTCOME_ID: TOP01-O09 · canonical details remain in old source-index and new-bank -->

Đếm “người không tham gia CLB A” chỉ có ý nghĩa nếu biết đang xét toàn trường hay chỉ một lớp. Trước hết, hãy nhớ khái niệm tập con U; hiệu tập hợp. Nếu A⊆U thì phần bù của A trong U là U\A. Thay U có thể đổi kết quả phần bù ngay cả khi A không thay. Khi U là ℝ, phần bù của một khoảng phải xét kỹ đầu mút.

Hãy kiểm chứng bằng một tình huống. U={1,2,3,4,5,6}, A={2,4,6}. U\A={1,3,5}. Nếu U là {0,1,2,3,4,5,6} thì phần bù có thêm 0. Đây là lý do phải ghi U trước khi tính.

**Đến lượt em:** U={1,2,3,4,5,6,7,8}, A={2,3,5,7}. Tìm U\A.

<details class="slm-topic-first-try" markdown="1">
<summary>Đã tự thử? Mở lời giải và cách khắc phục</summary>

U\A={1,4,6,8}.

Nếu em vẫn còn phân vân, hãy quay lại điều kiện vừa dùng. Nếu viết phần bù không kèm U, hãy dừng và bổ sung tập vũ trụ; luyện THPT-G10-B02-P02/ADD05.

</details>

## Đọc điều kiện bằng hình và đếm không trùng

Trục số cho thấy một giá trị ở trong hay ngoài khoảng, còn biểu đồ Ven làm rõ các nhóm đối tượng có thể giao nhau. Hai hình thức biểu diễn này đưa phép lập luận về điều kiện trở lại một bài toán trực quan.

### Khoảng và đoạn là cách viết điều kiện của số thực

<!-- LESSON_ID: TOP01-M10 · OUTCOME_ID: TOP01-O10 · canonical details remain in old source-index and new-bank -->

“Từ 1 đến 3” thiếu thông tin có tính cả 1 và 3 hay không. Trong nghiệm bất phương trình, sai một đầu mút sẽ làm sai tập nghiệm. Các công cụ đã biết ở đây là trục số, bất đẳng thức chặt/không chặt. (a,b) nghĩa a<x<b; [a,b] là a≤x≤b; (a,b] là a<x≤b. Với ±∞ luôn dùng ngoặc tròn. Giao của hai khoảng giữ phần thỏa cả hai điều kiện; hợp giữ phần thỏa ít nhất một.

Một ví dụ làm rõ bước suy luận: X=(−∞,3], Y=(1,+∞). Để thuộc giao, x≤3 đồng thời x>1, vậy X∩Y=(1,3]. Để thuộc hợp, mọi x≤3 đã ở X và mọi x>3 ở Y, nên X∪Y=ℝ. Tại x=1: thuộc X nhưng không thuộc Y; tại x=3: thuộc cả hai.

**Đến lượt em:** X=[−2,2), Y=(0,4]. Tìm giao và hợp.

<details class="slm-topic-first-try" markdown="1">
<summary>Đã tự thử? Mở lời giải và cách khắc phục</summary>

X∩Y=(0,2), X∪Y=[−2,4].

Nếu em vẫn còn phân vân, hãy quay lại điều kiện vừa dùng. Nếu nhầm dấu ngoặc, thử từng đầu mút 0,2,4 bằng điều kiện bất đẳng thức; luyện THPT-G10-B02-P03/P04.

</details>

### Bốn miền Venn để không đếm trùng

<!-- LESSON_ID: TOP01-M11 · OUTCOME_ID: TOP01-O11 · canonical details remain in old source-index and new-bank -->

Khi một người tham gia hai câu lạc bộ, phép cộng số lượng hai nhóm đã đếm người ấy hai lần. Mô hình bốn miền giúp giữ nguyên tổng cộng. Để hiểu, ta dựa vào giao, hợp, hiệu và tập vũ trụ hữu hạn. Với tập hữu hạn, |A∪B|=|A|+|B|−|A∩B|. Venn hai nhóm có đúng bốn vùng: chỉ A, cả hai, chỉ B, ngoài cả hai. Điền số vùng giao trước; sau đó lấy số mỗi nhóm trừ giao; cuối cùng lấy tổng vũ trụ trừ hợp.

Xét một trường hợp cụ thể. Lớp có 40 bạn; 23 học Anh (A), 25 học Toán (B), 12 học cả hai. Chỉ Anh=23−12=11; chỉ Toán=25−12=13; giao=12; hợp=11+12+13=36; ngoài=40−36=4. Kiểm tổng 11+12+13+4=40. Hình Venn minh họa đúng bốn vùng, không thay phép tính.

**Đến lượt em:** Trong 60 học sinh: 32 chơi bóng đá, 28 chơi bóng rổ, 10 chơi cả hai. Tính chỉ bóng đá, chỉ bóng rổ, ít nhất một, không chơi môn nào.

<details class="slm-topic-first-try" markdown="1">
<summary>Đã tự thử? Mở lời giải và cách khắc phục</summary>

Chỉ bóng đá=22; chỉ bóng rổ=18; hợp=50; ngoài=10. Tổng 22+10+18+10=60.

Nếu em vẫn còn phân vân, hãy quay lại điều kiện vừa dùng. Nếu tính hợp bằng 32+28=60, chỉ ra 10 bạn bị đếm hai lần và trừ giao; luyện THPT-G10-B02-P05, W02 hoặc ADD06.

</details>


## Đọc hình — hai hình toán học gốc đã kiểm chứng

1. **FIG-G10-B01-01:** [Các bội của 6 nằm trong các bội của 3](../../visuals/THPT_G10_B01_IMPLICATION_DIVISIBILITY_D5_R01.svg). Đọc vòng lớn “chia hết cho 3”, vùng nằm trong “chia hết cho 6”, rồi chỉ ra số 3 ở vùng lớn nhưng ngoài vùng nhỏ. Hình chỉ cho trực giác về chiều đảo sai, không phải chứng minh hết số nguyên. Source SVG Git blob `40b53b26deb48a7cfdff91be5fe01d12a67bebeb`.
2. **FIG-G10-B02-01:** [Sơ đồ Venn của 40 học sinh](../../visuals/THPT_G10_B02_VENN_TWO_CLUBS_D5_R01.svg). Đọc bốn vùng 11, 12, 13, 4 và kiểm tổng 40; xác định 12 là vùng giao cần trừ khi cộng 23+25. Source SVG Git blob `ea84ee68187e83aa4bc6b14e49a965b3d7da5a11`.

## Mô hình tương tác khám phá — đặc tả học thuật, KHÔNG phải mã đã chạy

- **Thẻ logic:** người học lần lượt chọn giá trị Đúng/Sai cho P,Q; mô hình cần hiển thị bốn trường hợp và giá trị P⇒Q, đánh dấu riêng P đúng/Q sai là duy nhất làm kéo theo sai. Sau mỗi lần chọn, giải thích tại sao bảng chân lý không đồng nghĩa nhân quả.
- **Sơ đồ Venn bốn vùng:** cho người học điền giao trước, sau đó chỉ A, chỉ B, ngoài U; không cho tổng bốn vùng vượt số toàn thể. Ví dụ dữ liệu 40/23/25/12; quy tắc kiểm 11+12+13+4=40. Điều khiển phải dùng được bằng phím, cảm ứng, có văn bản tương đương và không phụ thuộc màu.
- Đây là **CONCEPT_INTERACTION_SPEC_ONLY** để nhánh RELEASE xem xét theo Golden UI; chưa triển khai, chưa nhận QA trình duyệt, không được dùng trong đề kín hoặc tuyên bố là chức năng hoạt động.

# Luyện tập

**Cách học:** Tự giải từng mục tiêu trước khi mở gợi ý và lời giải trong ngân hàng câu hỏi; mỗi câu giữ nguyên một bản canonical. Các câu trắc nghiệm/tự luận cũ được tham chiếu theo ID chứ không sao chép đề/đáp án; sáu câu mới chỉ có một bản tại thư viện extension. Nếu sai, quay lại M01–M11 đúng với đường sửa lỗi. Không yêu cầu học phần Core SGK như điều kiện bắt buộc.

| Mục tiêu của CĐ01 | Câu luyện tập / tự luận canonical |
|---|---|
| TOP01-O01 — Nhận diện mệnh đề và biến | `THPT-G10-B01-C01`, `THPT-TOP01-ADD01` |
| TOP01-O02 — Phủ định | `THPT-G10-B01-C02`, `THPT-G10-B01-P05` |
| TOP01-O03 — Kéo theo, đảo, đủ–cần | `THPT-G10-B01-P03`, `THPT-G10-B01-P06`, `THPT-G10-CHI-W01` |
| TOP01-O04 — Tương đương hai chiều | `THPT-G10-B01-P04`, `THPT-TOP01-ADD02` |
| TOP01-O05 — Lượng từ ∀/∃ | `THPT-G10-B01-P01`, `THPT-G10-B01-P02` |
| TOP01-O06 — Phần tử, tập con, tập bằng nhau | `THPT-G10-B02-C01`, `THPT-G10-B02-P06` |
| TOP01-O07 — Hợp và giao | `THPT-G10-B02-C02`, `THPT-TOP01-ADD03` |
| TOP01-O08 — Hiệu hai tập | `THPT-G10-B02-P01`, `THPT-TOP01-ADD04` |
| TOP01-O09 — Phần bù trong U | `THPT-G10-B02-P02`, `THPT-TOP01-ADD05` |
| TOP01-O10 — Khoảng/đoạn trên ℝ | `THPT-G10-B02-P03`, `THPT-G10-B02-P04` |
| TOP01-O11 — Đếm tập hợp bằng Venn | `THPT-G10-B02-P05`, `THPT-G10-CHI-W02-ANCHOR`, `THPT-TOP01-ADD06` |

**Tự luận có rubric chuẩn một nguồn:** `THPT-G10-CHI-W01` (chứng minh, mệnh đề đảo và lượng từ, 7 điểm) và `THPT-G10-CHI-W02-ANCHOR` (đếm bốn miền Venn, 7 điểm). Anchor chỉ là nhãn cho Written; không chép một bản riêng. Lời giải và rubric gốc trong source immutable `95a554e31a613b8e215679fe6790738473d598df`. Không tự động ghi điểm năng lực từ học viên tự đối chiếu.

**Hướng dẫn chọn dạng:** Câu có “mọi/tồn tại” → M05; câu “nếu ... thì” → M03; “khi và chỉ khi” → M04; số lượng hai CLB → M11; tập nghiệm bất phương trình → M10. Lý do chọn phương pháp phải được viết thành lời, không chỉ chọn một phép tính.

# Tự kiểm tra

**Mục đích:** Tự nhận biết phần kiến thức cần ôn sau khi học trọn CĐ01. Đây là một lượt **công khai, tự đối chiếu** `CLIENT_SELF_CHECK_NO_MASTERY`, **KHÔNG phải** bộ `TOPIC_READINESS` kín/độc lập. Một số câu đã có ở Luyện tập nên không được dùng làm bằng chứng đánh giá chính thức.

**Cách thực hiện:** Làm tất cả câu trước; chọn **Nộp bài cuối cùng / Final Submit** cho toàn lượt rồi mới được đối chiếu. Khi chưa Final Submit: **không gợi ý, không AI Tutor, không đáp án, không phản hồi đúng/sai, không hiện lời giải hay rubric**. Sau khi nộp mới hiện đối chiếu và các liên kết sửa lỗi M01–M11. WEBSITE phải thực thi khóa này bằng cơ chế thật; source Markdown không chứng minh đã an toàn trình duyệt.

| Thứ tự | Outcome kiểm tra | Placement trỏ về item công khai có sẵn | Quay lại |
|---|---|---|---|
| 1 | TOP01-O01 | `THPT-G10-B01-C01` | TOP01-M01 |
| 2 | TOP01-O02 | `THPT-G10-B01-C02` | TOP01-M02 |
| 3 | TOP01-O03 | `THPT-G10-B01-P03` | TOP01-M03 |
| 4 | TOP01-O04 | `THPT-G10-B01-P04` | TOP01-M04 |
| 5 | TOP01-O05 | `THPT-G10-B01-P01` | TOP01-M05 |
| 6 | TOP01-O06 | `THPT-G10-B02-C01` | TOP01-M06 |
| 7 | TOP01-O07 | `THPT-G10-B02-C02` | TOP01-M07 |
| 8 | TOP01-O08 | `THPT-G10-B02-P01` | TOP01-M08 |
| 9 | TOP01-O09 | `THPT-G10-B02-P02` | TOP01-M09 |
| 10 | TOP01-O10 | `THPT-G10-B02-P03` | TOP01-M10 |
| 11 | TOP01-O11 | `THPT-G10-B02-P05` | TOP01-M11 |

**Sau khi nộp:** Tự ghi 1) câu còn chưa hiểu, 2) sai ở mệnh đề hay phép tập hợp, 3) mục tiêu tương ứng, 4) một câu luyện lại **khác** theo ID còn lại trong từng dòng. Không tạo Skill Mastery từ điểm tự đối chiếu. Đề đánh giá năng lực độc lập chính thức chỉ có thể dùng ngân hàng kín chưa lộ và phải được kiểm Q16/RD1 riêng.

## Phụ lục kỹ thuật AUTHORING (không hiện cho học viên)

PACKET_ID: THPT-TOPIC01-LOGIC-SETS-FULL-R01
CATALOG_TOPIC: CĐ01 / 22 (OWNER-CATALOG-ORDER)
RUNTIME_TOPIC_ID: UNASSIGNED_OWNER_DECISION
ORIGINAL_SGK_REFERENCE: Toán 10 KNTT tập 1 B01 in 5–11, B02 in 12–19, cuối 20–21; SBT tập 1 B01 in 5–7, B02 in 8–11, cuối 12–15 theo receipt original; không dùng SGK làm cấu trúc Topic.
ORIGINAL_CANONICAL_SNAPSHOT: prototypes/thpt/content-drafts/THPT_G10_CHI_B01_B02_D1D6_AUTHORING_R01_SNAPSHOT.md
ORIGINAL_CANONICAL_BLOB: 95a554e31a613b8e215679fe6790738473d598df
ORIGINAL_REVIEW_SNAPSHOT: prototypes/thpt/content-drafts/THPT_G10_CHI_B01_B02_NOTEBOOKLM_D1D6_R01_PASS_RECEIPT_20261029.md
ORIGINAL_REVIEW_BLOB: fece80dcb4b0e17d369e2ecbe12e8d13b672281a
PUBLIC_SOURCE_INDEX_BLOB: 09d36b0d289ebc54cc4ee51805503cf7f6e714f2
PUBLIC_EXTENSION_BLOB: 89ae1cd2338f2c5c48b9af874a8b52b1306c8acd
ASSET_IMPLICATION_BLOB: 40b53b26deb48a7cfdff91be5fe01d12a67bebeb
ASSET_VENN_BLOB: ea84ee68187e83aa4bc6b14e49a965b3d7da5a11
TOPIC_OUTCOMES: 11
KNOWLEDGE_MODULES: 11
FIRST_TRY_REVEAL_REMEDIATION: 11 EACH
UNIQUE_CANONICAL_PUBLIC_ITEM_IDS: 24 (18 unchanged original +6 new)
PUBLIC_SELF_CHECK_PLACEMENTS: 11 (reuse existing IDs, NO_MASTERY)
ORIGINAL_WRITTEN_IDS: 2 (one rubric each)
PRIVATE_RD1_IMPORTED: 0
OFFICIAL_TOPIC_READINESS: NOT_CLAIMED
RELEASE_AUTHORIZATION: NO

| item_id | topic outcome | role | original canonical or extension |
|---|---|---|---|
| `THPT-G10-B01-C01` | `TOP01-O01` | TOPIC_PRACTICE | 95a554e31a613b8e215679fe6790738473d598df |
| `THPT-TOP01-ADD01` | `TOP01-O01` | TOPIC_PRACTICE | 89ae1cd2338f2c5c48b9af874a8b52b1306c8acd |
| `THPT-G10-B01-C02` | `TOP01-O02` | TOPIC_PRACTICE | 95a554e31a613b8e215679fe6790738473d598df |
| `THPT-G10-B01-P05` | `TOP01-O02` | TOPIC_PRACTICE | 95a554e31a613b8e215679fe6790738473d598df |
| `THPT-G10-B01-P03` | `TOP01-O03` | TOPIC_PRACTICE | 95a554e31a613b8e215679fe6790738473d598df |
| `THPT-G10-B01-P06` | `TOP01-O03` | TOPIC_PRACTICE | 95a554e31a613b8e215679fe6790738473d598df |
| `THPT-G10-CHI-W01` | `TOP01-O03` | TOPIC_WRITTEN | 95a554e31a613b8e215679fe6790738473d598df |
| `THPT-G10-B01-P04` | `TOP01-O04` | TOPIC_PRACTICE | 95a554e31a613b8e215679fe6790738473d598df |
| `THPT-TOP01-ADD02` | `TOP01-O04` | TOPIC_PRACTICE | 89ae1cd2338f2c5c48b9af874a8b52b1306c8acd |
| `THPT-G10-B01-P01` | `TOP01-O05` | TOPIC_PRACTICE | 95a554e31a613b8e215679fe6790738473d598df |
| `THPT-G10-B01-P02` | `TOP01-O05` | TOPIC_PRACTICE | 95a554e31a613b8e215679fe6790738473d598df |
| `THPT-G10-B02-C01` | `TOP01-O06` | TOPIC_PRACTICE | 95a554e31a613b8e215679fe6790738473d598df |
| `THPT-G10-B02-P06` | `TOP01-O06` | TOPIC_PRACTICE | 95a554e31a613b8e215679fe6790738473d598df |
| `THPT-G10-B02-C02` | `TOP01-O07` | TOPIC_PRACTICE | 95a554e31a613b8e215679fe6790738473d598df |
| `THPT-TOP01-ADD03` | `TOP01-O07` | TOPIC_PRACTICE | 89ae1cd2338f2c5c48b9af874a8b52b1306c8acd |
| `THPT-G10-B02-P01` | `TOP01-O08` | TOPIC_PRACTICE | 95a554e31a613b8e215679fe6790738473d598df |
| `THPT-TOP01-ADD04` | `TOP01-O08` | TOPIC_PRACTICE | 89ae1cd2338f2c5c48b9af874a8b52b1306c8acd |
| `THPT-G10-B02-P02` | `TOP01-O09` | TOPIC_PRACTICE | 95a554e31a613b8e215679fe6790738473d598df |
| `THPT-TOP01-ADD05` | `TOP01-O09` | TOPIC_PRACTICE | 89ae1cd2338f2c5c48b9af874a8b52b1306c8acd |
| `THPT-G10-B02-P03` | `TOP01-O10` | TOPIC_PRACTICE | 95a554e31a613b8e215679fe6790738473d598df |
| `THPT-G10-B02-P04` | `TOP01-O10` | TOPIC_PRACTICE | 95a554e31a613b8e215679fe6790738473d598df |
| `THPT-G10-B02-P05` | `TOP01-O11` | TOPIC_PRACTICE | 95a554e31a613b8e215679fe6790738473d598df |
| `THPT-G10-CHI-W02-ANCHOR` | `TOP01-O11` | TOPIC_WRITTEN | 95a554e31a613b8e215679fe6790738473d598df |
| `THPT-TOP01-ADD06` | `TOP01-O11` | TOPIC_PRACTICE | 89ae1cd2338f2c5c48b9af874a8b52b1306c8acd |

**Source-lock và review:** 18 historical SGK original item + 2 SVG đã được independent reviewer PASS trong phạm vi SGK nguyên gốc; 11 Topic mô-đun, cách dẫn dắt và 6 item mới là Delta C tự QA theo Q18 v3.0.1, **không** tự ghi “NotebookLM PASS chuyên đề”. 0 câu đề kín được nhập. Bài Topic là hành trình độc lập, không có Topic Core.
