# Chuyên đề 03 · Phương trình đại số và kỹ thuật chuyển đổi dạng

Một phép giải đúng cần tìm đủ nghiệm mà không thêm nghiệm ngoại lai. Em sẽ học cách giữ tập nghiệm, nêu điều kiện trước khi khử mẫu hay bình phương, kiểm ứng viên và chuyển kết quả về ý nghĩa bài toán.

# Kiến thức

## 1. Giữ nguyên tập nghiệm khi biến đổi

Một bạn giải phương trình, thu được hai giá trị nhưng khi thay vào đề gốc thì chỉ một giá trị đúng. Sai sót không nhất thiết nằm ở phép tính: có thể bạn ấy đã dùng một bước **không tương đương**, như bình phương hai vế, hoặc quên điều kiện mẫu số khác 0. Vì vậy, muốn giải đúng một phương trình, ta luôn phải trả lời ba câu hỏi gắn với nhau: *Đang xét những giá trị nào? Bước biến đổi này có giữ nguyên tập nghiệm không? Nghiệm tìm được có thỏa bài toán gốc không?*

Trước hết, số thực được ký hiệu \(\mathbb R\), tập nghiệm là \(S\). Ta sẽ dùng tính chất \(ab=0\) khi và chỉ khi \(a=0\) hoặc \(b=0\); giá trị tuyệt đối \(|u|\) là khoảng cách đến 0; căn bậc hai số học \(\sqrt u\) chỉ xác định khi \(u\ge0\) và luôn không âm. Những tiền đề này sẽ được giải thích qua từng phép biến đổi, từ phương trình bậc nhất/bậc hai đến các trường hợp có phân thức và căn. Đặt ẩn phụ và mô hình thực tế được học sau cùng vì cả hai cũng phải quay lại miền giá trị ban đầu.

Để thấy khác nhau giữa biến đổi hai chiều và một chiều, hãy bắt đầu từ các phương trình đơn giản mà ta có thể tự kiểm nghiệm ngay.

<!-- LESSON_ID: TOP03-M01; OUTCOME_ID: TOP03-O01; PREVIOUS_SOURCE_BLOB: e94bbe37339f7002bd8e29bdf60e0c86fae0aa95 -->

### 1.1. Phép biến đổi tương đương

Vì sao từ x=3 suy ra x²=9 nhưng không được kết luận ngược lại?

Giải phương trình không chỉ là tìm một con số trông có vẻ đúng. Ta cần tìm **tất cả** giá trị trong miền xác định chung làm hai vế bằng nhau, đồng thời không để phép biến đổi nào làm mất hoặc sinh thêm nghiệm. Nếu hai phương trình có đúng cùng tập nghiệm, ta gọi chúng **tương đương** và viết dấu \(\Leftrightarrow\).

Với \(x+5=12\), trừ cùng 5 ở hai vế cho \(x=7\); làm ngược lại bằng cách cộng 5 sẽ khôi phục phương trình ban đầu, nên đây là biến đổi tương đương. Nhưng từ \(x=3\) suy ra \(x^2=9\) chỉ là một chiều: phương trình sau còn có \(x=-3\), vốn không thỏa câu đầu. Cùng lý do đó, khi giải phương trình chứa căn và phải bình phương, ta phải giữ điều kiện và **thử nghiệm trở lại đề gốc**.

**Ví dụ**

**Đề bài.** Giải phương trình \(5x-7=3\) và chứng tỏ phép biến đổi giữ tập nghiệm.

**Lời giải.** Cộng 7 vào hai vế được \(5x=10\), rồi chia cho \(5\ne0\) được \(x=2\). Cả hai thao tác đều có phép ngược, nên các phương trình tương đương. Thử \(5\cdot2-7=3\).

**Vận dụng**

Giải \(3x+2=11\). Vì sao hai bước chuyển vế và chia cho 3 không làm đổi tập nghiệm?

<details markdown="1"><summary>Đối chiếu</summary>

Trừ 2 ở hai vế được \(3x=9\); chia cho \(3\ne0\) được \(x=3\). Cả hai bước đều có phép ngược hợp lệ. Thử lại: \(3\cdot3+2=11\). Nếu em dùng dấu tương đương cho phép bình phương mà không kiểm điều kiện, hãy so trường hợp \(x=3\) và \(x=-3\) ở ví dụ trên.

</details>

<!-- LESSON_ID: TOP03-M02; OUTCOME_ID: TOP03-O02; PREVIOUS_SOURCE_BLOB: e94bbe37339f7002bd8e29bdf60e0c86fae0aa95 -->

### 1.2. Phương trình bậc nhất có tham số

Nếu hệ số của x là tham số có thể bằng 0, tại sao không được vội chia?

Ngay cả phương trình bậc nhất cũng có thể đổi bản chất khi hệ số của ẩn bằng không. Đôi khi phép chia mất cả một trường hợp vô số nghiệm; hiểu điều kiện chia quan trọng hơn thao tác máy. Điểm xuất phát là thu gọn, phân phối, tính chất số 0. Với ax=b: nếu a≠0 có nghiệm duy nhất x=b/a; nếu a=0,b≠0 thì vô nghiệm; nếu a=b=0 thì mọi x∈ℝ đều là nghiệm. Khi a có chứa tham số m, phải xét a=0 trước. Đây là kỹ thuật nền để tự học phép quy về bậc hai.

Chẳng hạn, Giải m(x−2)=0: m≠0 ⇒ x=2; m=0 ⇒ 0=0 cho mọi x. Không thể chia cả hai vế cho m khi chưa biết m≠0.

**Ví dụ**

**Đề bài.** Biện luận \(m(x-2)=m-1\) trên \(\mathbb R\).

**Lời giải.** Nếu \(m=0\) thì \(0=-1\), phương trình **vô nghiệm**. Nếu \(m\ne0\), chia cho m được \(x-2=1-\frac1m\), hay \(x=3-\frac1m\). Tách \(m=0\) trước để không chia cho 0.

**Vận dụng**

Giải a(x−1)=0 theo tham số a.

<details markdown="1"><summary>Đối chiếu</summary>

Nếu a≠0 thì x=1, nếu a=0 thì mọi x∈ℝ.

Nếu quên trường hợp hệ số 0, đặt a=0 và thử x=6; luyện ADD03, ADD04.

</details>

<!-- LESSON_ID: TOP03-M03; OUTCOME_ID: TOP03-O03; PREVIOUS_SOURCE_BLOB: e94bbe37339f7002bd8e29bdf60e0c86fae0aa95 -->

### 1.3. Tích bằng 0, tránh làm mất nghiệm

Chia cả hai vế cho x−2 có thể làm mất nghiệm nào?

Khi một biểu thức được tách thành tích, tính chất tích bằng không giúp nhìn thấy nhiều nghiệm. Đưa phương trình về tích làm lộ nhiều nghiệm, nhưng chia cho một nhân tử có thể làm mất nghiệm ngay tại nhân tử ấy. Ta bắt đầu từ tính chất ab=0 ⇔ a=0 hoặc b=0. Nếu biểu thức đã có nghĩa với x đang xét thì A(x)B(x)=0 ⇔ A=0 hoặc B=0. Nghiệm kép khác với hai nghiệm thực phân biệt. Chia cho A(x) chỉ hợp lệ khi A(x)≠0, nếu không phải tách trường hợp A=0.

Xét ví dụ: x²−x−6=0 ⇔ (x−3)(x+2)=0 ⇒ x∈{3,−2}. Nếu vội chia cho x−3 sẽ làm mất x=3; vì thế ưu tiên quy tắc tích bằng 0.

**Ví dụ**

**Đề bài.** Giải \((x+2)(3x-1)=0\).

**Lời giải.** Theo tính chất tích bằng 0, \(x+2=0\) hoặc \(3x-1=0\). Vậy \(S=\{-2,\frac13\}\). Không chia cho một thừa số chứa x, vì như vậy có thể loại mất nghiệm của chính thừa số ấy.

**Vận dụng**

Giải (x−5)(x+1)=0.

<details markdown="1"><summary>Đối chiếu</summary>

x=5 hoặc x=−1; thử vào từng thừa số.

Nếu tìm được một nghiệm mà không xét nhân tử còn lại, quay lại ab=0 và luyện ADD05, ADD06.

</details>

<!-- LESSON_ID: TOP03-M04; OUTCOME_ID: TOP03-O04; PREVIOUS_SOURCE_BLOB: e94bbe37339f7002bd8e29bdf60e0c86fae0aa95 -->

### 1.4. Phương trình bậc hai và biệt thức

Trường hợp biệt thức âm có nghĩa gì khi ta chỉ tìm nghiệm thực?

Nếu phép phân tích nhân tử chưa thuận lợi, biệt thức mở ra cách giải phương trình bậc hai. Bình phương hay khử mẫu thường đưa bài khó về phương trình bậc hai. Kết quả này tạo **ứng viên**, chưa bảo đảm thỏa điều kiện ban đầu. Trước hết, hãy nhớ hệ số a,b,c; công thức bình phương của tổng/hiệu. Với ax²+bx+c=0, a≠0, Δ=b²−4ac. Δ>0 có hai nghiệm thực x=(−b±√Δ)/(2a); Δ=0 một nghiệm kép; Δ<0 vô nghiệm trên ℝ. Dùng phân tích nhân tử nếu thấy dễ, dùng Δ khi không rõ nhân tử; phải xét lại miền của phương trình xuất phát nếu có mẫu/căn.

Hãy kiểm tra trường hợp sau: x²−4x+3=0: Δ=16−12=4>0 ⇒ x=(4±2)/2∈{1,3}; kiểm (x−1)(x−3). Hai cách giải tương đương cho chính phương trình bậc hai này.

**Ví dụ**

**Đề bài.** Giải \(2x^2-3x-2=0\) trên \(\mathbb R\).

**Lời giải.** Với \(a=2,b=-3,c=-2\), \(\Delta=b^2-4ac=9+16=25>0\). Hai nghiệm \((3\pm5)/4\) là \(2\) và \(-\frac12\). Có thể đối chiếu bằng \((2x+1)(x-2)=0\).

**Vận dụng**

Giải x²+4x+4=0.

<details markdown="1"><summary>Đối chiếu</summary>

(x+2)²=0 ⇒ x=−2 (nghiệm kép), không phải hai giá trị khác nhau.

Nếu Δ âm mà cho nghiệm thực, hoàn phương thành tổng số không âm để kiểm; luyện ADD07, ADD08.

</details>

## 2. Điều kiện xác định và phép biến đổi

Các phép cộng và trừ cùng một lượng ở hai vế thường có thể đi ngược trở lại, nhưng chia cho một biểu thức chỉ hợp lệ khi biểu thức ấy **khác 0**. Với giá trị tuyệt đối, một biểu thức dương hay âm có thể tạo ra cùng một kết quả, nên không thể tùy tiện bỏ hai vạch. Từ đây, ta thấy "đưa về phương trình quen thuộc" luôn phải đi cùng việc **giữ lại miền xác định**.

<!-- LESSON_ID: TOP03-M05; OUTCOME_ID: TOP03-O05; PREVIOUS_SOURCE_BLOB: e94bbe37339f7002bd8e29bdf60e0c86fae0aa95 -->

### 2.1. Giải phương trình phân thức

Tại sao rút gọn phân thức không được phép nhận một giá trị làm mẫu số bằng 0?

Khử mẫu rất nhanh nhưng chỉ đúng trên miền mẫu khác 0; một phép rút gọn có thể ‘lấp’ điểm biểu thức gốc vô nghĩa. Ta có thể sử dụng phân tích nhân tử, số hữu tỉ và mẫu số. Đầu tiên xét **mọi mẫu số khác 0**. Khi nhân hai vế với mẫu M(x), phép tương đương chỉ đúng **trên miền M(x)≠0**. Giải phương trình kết quả, loại các nghiệm làm mẫu bằng 0 và thay thử. Đây là cầu nối kỹ thuật cho CĐ03, không tự nhận mọi dạng phân thức là Core B18.

Chẳng hạn, (x+1)/(x−3)=2, x≠3. Nhân x−3 được x+1=2x−6 ⇒ x=7; thử (7+1)/(7−3)=8/4=2. Nếu nghiệm x=3 xuất hiện, phải loại chứ không được chia 0.

**Ví dụ**

**Đề bài.** Giải \(\frac{x^2-1}{x-1}=0\) trên \(\mathbb R\).

**Lời giải.** Điều kiện \(x\ne1\). Tử số \((x-1)(x+1)=0\) cho ứng viên \(1,-1\); loại \(1\) vì mẫu bằng 0. Thay \(x=-1\), tử bằng 0, mẫu bằng \(-2\ne0\). Vậy \(S=\{-1\}\).

**Vận dụng**

Giải (x²−9)/(x−3)=0.

<details markdown="1"><summary>Đối chiếu</summary>

Điều kiện x≠3. Tử (x−3)(x+3)=0 cho 3 hoặc −3; loại 3, nghiệm duy nhất −3.

Nếu rút gọn rồi kết luận nhận x=3, thay x=3 vào mẫu để thấy vô nghĩa; luyện ADD09/ADD10.

</details>

<!-- LESSON_ID: TOP03-M06; OUTCOME_ID: TOP03-O06; PREVIOUS_SOURCE_BLOB: e94bbe37339f7002bd8e29bdf60e0c86fae0aa95 -->

### 2.2. Phương trình có giá trị tuyệt đối

Từ |x−1|=3, tại sao phải xét cả hai nhánh?

Giá trị tuyệt đối cũng yêu cầu chia trường hợp, bởi nó xóa dấu của biểu thức bên trong. Giá trị tuyệt đối luôn không âm; bỏ dấu bằng mắt có thể tạo nghiệm không có trong phương trình gốc. Để xác định điều đó, cần xét giá trị tuyệt đối |u| là khoảng cách đến 0 trên trục số. Nếu |A|=c hằng số: c<0 vô nghiệm; c≥0 giải A=±c (c=0 hai nhánh trùng). Nếu |A(x)|=B(x), cần B(x)≥0 rồi tách A=B hoặc A=−B, **kiểm lại điều kiện trên từng nhánh**. Đây là cầu nối đại số của Topic, không tự nâng thành Core SGK B18.

Chẳng hạn, |x−1|=3 ⇒ x−1=3 hoặc −3 ⇒ x=4 hoặc −2; thử khoảng cách đến 1 đều là 3. Không thể chỉ lấy nghiệm x=4 vì giá trị tuyệt đối xóa dấu.

**Ví dụ**

**Đề bài.** Giải \(|x+2|=4\).

**Lời giải.** Vì \(4\ge0\), ta xét \(x+2=4\) hoặc \(x+2=-4\), được \(x=2\) hoặc \(x=-6\). Thử lại cả hai đều cho khoảng cách đến \(-2\) bằng 4. Không chỉ chọn nhánh dương.

**Vận dụng**

Giải |x+3|=x+3.

<details markdown="1"><summary>Đối chiếu</summary>

Vì |u|=u khi u≥0, ta có x+3≥0 ⇒ x≥−3. Thử x=−4 cho |−1|=1 khác −1.

Nếu quên điều kiện B≥0, thử một x làm B âm; luyện ADD11/ADD12.

</details>

## 3. Kiểm nghiệm ứng viên sau bình phương

Ở phương trình chứa căn, bình phương giúp bỏ ký hiệu căn để đưa bài toán về phương trình đại số, nhưng phép bình phương **không giữ lại thông tin về dấu**: từ \(A=B\) suy ra \(A^2=B^2\), chiều ngược không luôn đúng. Vì vậy nghiệm sau bình phương mới chỉ là **ứng viên**. Ta sẽ so sánh hai căn bằng nhau với một căn bằng biểu thức, giải thích điều kiện của từng dạng, rồi lọc nghiệm qua miền và phép thay trực tiếp.

<!-- LESSON_ID: TOP03-M07; OUTCOME_ID: TOP03-O07; PREVIOUS_SOURCE_BLOB: e94bbe37339f7002bd8e29bdf60e0c86fae0aa95 -->

### 3.1. Bình phương có thể sinh nghiệm ngoại lai

Vì sao nghiệm của phương trình bình phương chưa chắc là nghiệm phương trình chứa căn?

Đây là nguyên nhân chính của nghiệm ngoại lai khi giải phương trình chứa căn. Điểm xuất phát là dấu không âm của √A, bình phương hai vế. Từ A=B suy ra A²=B²; chiều đảo không đúng nếu A,B có thể trái dấu. Với √A(x)=B(x), **phải có B≥0**; sau đó A=B² và điều kiện có thể đủ. Nếu chỉ giải A=B² rồi bỏ B≥0 thì đang giải một phương trình rộng hơn. Cần thử từng nghiệm vào gốc.

Chẳng hạn, √(x+3)=x−1 ⇒ điều kiện x≥1; bình phương x+3=(x−1)² ⇒ x²−3x−2=0 ⇒ x=(3±√17)/2. Chỉ x=(3+√17)/2≥1 thỏa; nghiệm còn lại cho vế phải âm nên ngoại lai.

![Sơ đồ biến đổi tương đương và bước bình phương một chiều](../../visuals/THPT_TOPIC03_EQUIVALENCE_VS_SQUARING_R01.svg)

*Quan sát hình:* Phân biệt mũi tên hai chiều khi giữ nguyên tập nghiệm với mũi tên một chiều khi bình phương có thể sinh nghiệm ngoại lai; luôn thử vào phương trình đầu.

**Ví dụ**

**Đề bài.** Giải \(\sqrt{x+4}=x-2\) trên \(\mathbb R\).

**Lời giải.** Điều kiện cần là \(x-2\ge0\), tức \(x\ge2\). Bình phương được \(x+4=(x-2)^2\), hay \(x(x-5)=0\), cho ứng viên \(0,5\). Loại 0 vì vế phải âm; với 5, \(\sqrt9=3=5-2\). Vậy \(S=\{5\}\).

**Vận dụng**

Giải √(x+1)=x.

<details markdown="1"><summary>Đối chiếu</summary>

Điều kiện x≥0; bình phương x+1=x² ⇒ x=(1±√5)/2. Chỉ x=(1+√5)/2≥0 được nhận.

Nếu hai nghiệm sau bình phương đều được nhận, thử nghiệm âm và so dấu hai vế; luyện ADD13/ADD14.

</details>

<!-- LESSON_ID: TOP03-M08; OUTCOME_ID: TOP03-O08; PREVIOUS_SOURCE_BLOB: e94bbe37339f7002bd8e29bdf60e0c86fae0aa95 -->

### 3.2. Hai căn bậc hai và điều kiện đồng thời

Với hai căn cùng bằng nhau, phải kiểm điều kiện của những biểu thức nào?

Hai căn bậc hai bằng nhau chỉ khi các biểu thức bên trong thỏa những điều kiện cần thiết. Một căn không xác định có thể tạo nghiệm ảo tưởng sau phép bình phương. Ta bắt đầu từ điều kiện √u xác định khi u≥0. Với √A(x)=√B(x) trên ℝ, tương đương với **A=B và A≥0** (khi A=B, B≥0 tự theo). Có thể ghi riêng A≥0, B≥0 để dễ kiểm. Tìm nghiệm ứng viên từ A=B, lọc miền trước khi thế. Không suy ra |A|=|B|.

Xét ví dụ sát hình trục số: \(\sqrt{x^2+7x+11}=\sqrt{x+3}\). Hai vế đều là căn số học nên, **sau khi ghi điều kiện xác định**, ta giải \(x^2+7x+11=x+3\), hay \((x+2)(x+4)=0\), được các ứng viên \(x=-2,-4\). Điều kiện từ căn phải đòi \(x\ge-3\): loại \(-4\); với \(-2\), cả hai biểu thức dưới căn bằng 1, nên hai vế đều bằng 1. Do đó nghiệm duy nhất là \(x=-2\). Việc kiểm căn trái và thay lại cho thấy không bỏ sót điều kiện ẩn.

![Hai ứng viên và miền xác định của hai căn](../../visuals/THPT_TOPIC03_RADICAL_DOMAIN_NUMBERLINE_R01.svg)

*Đọc trục số:* Đầu mút \(-3\) là ranh giới miền \(x\ge-3\), không phải nghiệm. Điểm \(-4\) bị loại vì nằm ngoài miền; \(-2\) được giữ vì hai căn đều bằng 1 khi thay lại. Trục số **minh họa cho chính ví dụ hai căn phía trên**, không thay phép kiểm biểu thức dưới căn trái.

**Ví dụ**

**Đề bài.** Giải \(\sqrt{x^2+4x+5}=\sqrt{x+5}\) trên \(\mathbb R\).

**Lời giải.** Hai căn xác định khi \(x+5\ge0\) và \(x^2+4x+5\ge0\); điều kiện thứ hai luôn đúng vì \((x+2)^2+1>0\). Bình phương hai căn được \(x^2+3x=0\), nên \(x=0\) hoặc \(x=-3\). Cả hai thỏa \(x\ge-5\) và khi thế vào thì hai biểu thức dưới căn bằng nhau, không âm. Vậy \(S=\{-3,0\}\). Hình trục số phía trên minh họa một trường hợp *khác*, có ứng viên \(-4\) bị loại.

**Vận dụng**

Giải √(x²+5)=√(4x+2).

<details markdown="1"><summary>Đối chiếu</summary>

Miền x≥−1/2. Bình phương x²+5=4x+2 ⇒ (x−1)(x−3)=0, x=1 hoặc 3; cả hai hợp miền, thử được √6 và √14 tương ứng ở mỗi vế.

Nếu quên một miền căn, thay nghiệm âm khiến radicand âm để tự bác; luyện ADD15 và C02/W18-01.

</details>

<!-- LESSON_ID: TOP03-M09; OUTCOME_ID: TOP03-O09; PREVIOUS_SOURCE_BLOB: e94bbe37339f7002bd8e29bdf60e0c86fae0aa95 -->

### 3.3. Một căn bằng một biểu thức

Vì sao vế phải của phương trình √A=B phải không âm?

Nếu chỉ một vế chứa căn, điều kiện không âm của vế kia trở nên đặc biệt quan trọng. Căn số học không âm, nên không thể bằng số âm dù phương trình sau bình phương thỏa. Trước hết, hãy nhớ căn √u không âm và công thức giải PT bậc hai. √A=B tương đương với **B≥0 và A=B²** trên ℝ; khi A=B²≥0 thì căn cũng xác định. Có thể ghi thêm A≥0 để học sinh kiểm, nhưng đó không phải điều kiện độc lập mới. Giải ứng viên từ A=B² rồi lọc dấu B và thử gốc.

Hãy kiểm tra trường hợp sau: √(3x+1)=x−1: x≥1. Bình phương 3x+1=(x−1)² ⇒ x²−5x=0 ⇒ x=0 hoặc 5. Loại 0, nhận 5 vì √16=4=5−1.

**Ví dụ**

**Đề bài.** Giải \(\sqrt{2x+7}=x+1\).

**Lời giải.** Vế phải cần không âm nên \(x\ge-1\); khi đó \(2x+7\ge5>0\). Bình phương được \(2x+7=(x+1)^2\), tức \(x^2=6\). Ứng viên \(\pm\sqrt6\); chỉ \(+\sqrt6\ge-1\). Với nghiệm này, hai vế không âm và có bình phương bằng nhau, nên đúng. Vậy \(S=\{\sqrt6\}\).

**Vận dụng**

Giải √(2x+7)=x+1.

<details markdown="1"><summary>Đối chiếu</summary>

Cần x≥−1. Bình phương x²−6=0 ⇒ x=±√6; chỉ +√6≥−1 đạt, âm bị loại. Thử căn bằng √6+1.

Nếu chỉ dùng điều kiện A≥0 rồi giữ nghiệm B âm, thử gốc sẽ sai; luyện ADD16,C01,P01,P02.

</details>

<!-- LESSON_ID: TOP03-M10; OUTCOME_ID: TOP03-O10; PREVIOUS_SOURCE_BLOB: e94bbe37339f7002bd8e29bdf60e0c86fae0aa95 -->

### 3.4. Lọc ứng viên bằng điều kiện và thế ngược

Muốn chắc một nghiệm không ngoại lai, phép kiểm cuối cùng phải dùng phương trình nào?

Như vậy, một nghiệm xuất hiện sau bình phương mới là ứng viên, chưa hẳn nghiệm thật. Một phương trình bình phương có nghiệm không có nghĩa phương trình gốc có nghiệm. Ta có thể sử dụng quy trình √A=√B và √A=B, ĐKXĐ. Lập **bảng ứng viên**: nghiệm của phương trình biến đổi → điều kiện miền → điều kiện dấu của vế phải → thay thử gốc. Đặc biệt với hai căn, ứng viên có thể nằm ngoài miền xác định; với một căn bằng biểu thức, có thể sai do dấu. Phương trình vẫn có thể vô nghiệm sau khi lọc.

Chẳng hạn, √(x+6)=x−2: điều kiện x≥2. Bình phương x+6=(x−2)² ⇒ x²−5x−2=0, nghiệm (5±√33)/2. Chỉ nghiệm dương lớn hơn 2 hợp lệ; nghiệm âm là ngoại lai do vế phải âm. Kiểm x=(5+√33)/2 làm hai vế bằng nhau.

![Hai nhánh giải phương trình chứa căn: kiểm điều kiện → giải ứng viên → thử gốc](../../../../docs/assets/images/thpt/THPT_G10_CHVI_B18_RADICAL_FLOW_D5_R03.svg)

*Đọc sơ đồ:* Nhánh \(\sqrt A=\sqrt B\) cần hai biểu thức dưới căn không âm; nhánh \(\sqrt A=B\) còn cần \(B\ge0\). Cả hai đều phải kiểm nghiệm ứng viên trở lại phương trình ban đầu. Hình là nguồn SGK đã xác thực, không phải mô hình tương tác mới.

**Ví dụ**

**Đề bài.** Giải \(\sqrt{x+1}=x-3\).

**Lời giải.** Phải có \(x\ge3\). Bình phương cho \(x+1=(x-3)^2\), tức \(x^2-7x+8=0\), nên \(x=(7\pm\sqrt{17})/2\). Ứng viên \((7-\sqrt{17})/2<3\) bị loại; ứng viên \((7+\sqrt{17})/2>3\) nhận sau khi thế lại vào phương trình gốc. Đọc sơ đồ để phân biệt bước tạo ứng viên và bước kiểm nghiệm.

**Vận dụng**

Giải √(x²+5)=x−2 trong ℝ.

<details markdown="1"><summary>Đối chiếu</summary>

Điều kiện x≥2. Bình phương x²+5=x²−4x+4 ⇒ x=−1/4, trái miền. Vậy S=∅, không nhận ứng viên.

Nếu kết luận nghiệm chỉ bằng giải phương trình sau bình phương, hãy lập bảng ‘ứng viên→miền→dấu→gốc’; luyện ADD17,ADD18 và W01.

</details>

## 4. Đổi biến và kiểm ý nghĩa thực tế

Khi một phương trình quá phức tạp, ta có thể đặt ẩn phụ để nhìn cấu trúc quen thuộc hơn. Nhưng sau khi giải theo ẩn mới, phải kiểm miền của ẩn ấy rồi **đổi trở lại** biến ban đầu. Điều tương tự xảy ra với bài toán thực tế: ẩn đại diện cho chiều dài, thời gian hoặc vận tốc phải mang đúng đơn vị và điều kiện, nên không thể lấy mọi nghiệm đại số làm đáp số.

<!-- LESSON_ID: TOP03-M11; OUTCOME_ID: TOP03-O11; PREVIOUS_SOURCE_BLOB: e94bbe37339f7002bd8e29bdf60e0c86fae0aa95 -->

### 4.1. Đặt t=x², nhớ t không âm

Khi đặt t=x², một nghiệm t âm phải xử lí ra sao?

Một phương trình bậc bốn đôi khi trở thành bậc hai nhưng nghiệm ẩn phụ âm không có nghĩa trên ℝ. Để xác định điều đó, cần xét bình phương ≥0 và nghiệm PT bậc hai. Với x⁴+px²+q=0, đặt t=x²≥0. Giải t²+pt+q=0, **lọc t≥0**, rồi giải x²=t: t=0 cho x=0, t>0 cho x=±√t. Đây là *luyện tập mở rộng tự chọn* để hiểu kỹ thuật đổi dạng, không coi là Core bắt buộc của SGK B18.

Chẳng hạn, x⁴−10x²+9=0 ⇒ t²−10t+9=(t−1)(t−9)=0 ⇒ t=1 hoặc 9, x=±1 hoặc ±3. Không nhận t âm.

**Ví dụ**

**Đề bài.** Giải \(x^4-13x^2+36=0\) trên \(\mathbb R\).

**Lời giải.** Đặt \(t=x^2\ge0\), ta có \(t^2-13t+36=(t-4)(t-9)=0\). Hai giá trị \(t=4,9\) đều không âm; quay về ẩn gốc cho \(x=\pm2,\pm3\). Nếu \(t<0\), phải loại vì bình phương số thực không âm.

**Vận dụng**

Giải x⁴−2x²−3=0.

<details markdown="1"><summary>Đối chiếu</summary>

t=x²≥0; t²−2t−3=(t−3)(t+1)=0. Chỉ t=3 hợp lệ ⇒ x=±√3.

Nếu suy x²=−1 có nghiệm thực, kiểm tính không âm của bình phương; luyện ADD19,ADD20.

</details>

<!-- LESSON_ID: TOP03-M12; OUTCOME_ID: TOP03-O12; PREVIOUS_SOURCE_BLOB: e94bbe37339f7002bd8e29bdf60e0c86fae0aa95 -->

### 4.2. Mô hình hóa và giữ đơn vị

Vì sao nghiệm âm có thể đúng đại số nhưng sai với chiều dài hoặc vận tốc?

Cuối cùng, nghiệm đại số phải quay về đúng đại lượng và đơn vị của tình huống thực tế. Trong hình học và chuyển động, một nghiệm âm hay thời gian vô nghĩa không thể dùng làm đáp án. Điểm xuất phát là pythagore, quãng đường/vận tốc=thời gian, đơn vị đo. Ghi biến, đơn vị và điều kiện **trước** phương trình. Chọn mô hình căn độ dài nếu cạnh huyền, phân thức nếu thời gian; giải thành phương trình đại số, lọc điều kiện, kiểm tính đúng của cả số lẫn đơn vị. Dạng mô hình xe là tự biên soạn bổ trợ, không nói là bài SGK B18 bắt buộc.

Chẳng hạn, Tam giác vuông có hai cạnh góc vuông x>0 và x+7 mét, cạnh huyền 13 mét: √[x²+(x+7)²]=13. Bình phương 2x²+14x+49=169 ⇒ x²+7x−60=0 ⇒ (x+12)(x−5)=0. Nhận x=5, loại −12; ba cạnh 5,12,13 m, thử 25+144=169.

**Ví dụ**

**Đề bài.** Một tam giác vuông có hai cạnh góc vuông dài \(x>0\) mét và \(x+17\) mét, cạnh huyền 25 mét. Tìm các cạnh góc vuông.

**Lời giải.** Đặt điều kiện \(x>0\); theo Pythagore, \(x^2+(x+17)^2=25^2\). Suy ra \(x^2+17x-168=(x+24)(x-7)=0\), nên \(x=-24\) hoặc \(7\). Loại số âm; với \(x=7\), cạnh còn lại 24 m và \(7^2+24^2=25^2\).

**Vận dụng**

Một xe đi 90 km với tốc độ v>0; nếu tăng 15 km/h thì nhanh hơn 1 giờ. Tìm v.

<details markdown="1"><summary>Đối chiếu</summary>

90/v−90/(v+15)=1 ⇒ v²+15v−1350=0 ⇒ (v−30)(v+45)=0. Lọc v>0 ⇒ v=30 km/h; thời gian 3 giờ và 2 giờ.

Nếu quên miền vật lý hoặc mẫu v(v+15)≠0, đặt biến/đơn vị lại rồi thử số; luyện ADD21,P04,W18-02,W02.

</details>

# Luyện tập

Em hãy làm từng bài trước khi mở **Lời giải**. Khi bình phương hoặc khử mẫu, ghi điều kiện và kiểm từng nghiệm ứng viên bằng cách thay vào phương trình gốc. Với tự luận, tự so các bước theo rubric sau khi hoàn thành.

## 1. Phép biến đổi và phương trình cơ bản

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD01; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O01; NOT_NEW_SOURCE -->

**Bài 1.**

Giải 2x+6=14 và chỉ rõ phép biến đổi tương đương.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S={4}.

Trừ 6 ở cả hai vế: 2x=8; chia 2>0 (với phương trình, chỉ cần chia số khác 0) được x=4. Thay 2·4+6=14. Cả hai bước đều đảo ngược được nên tập nghiệm giữ nguyên.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD02; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O01; NOT_NEW_SOURCE -->

**Bài 2.**

So sánh tập nghiệm của x=3 và x²=9. Có được thay kí hiệu kéo theo bằng tương đương khi bình phương không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x=3 có S₁={3}; x²=9 có S₂={−3,3}; không tương đương.

Từ x=3 suy ra x²=9, nhưng từ x²=9 chỉ suy ra x=±3. Phép bình phương mất thông tin dấu; muốn biến đổi hai chiều phải thêm điều kiện x≥0 trong ví dụ này.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD03; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O02; NOT_NEW_SOURCE -->

**Bài 3.**

Giải 3(x−2)=2x+5 và thử lại nghiệm.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S={11}.

Khai triển 3x−6=2x+5 ⇔ x=11. Thay: 3·9=27 và 2·11+5=27. Phép chuyển vế, thu gọn là tương đương trên ℝ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD04; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O02; NOT_NEW_SOURCE -->

**Bài 4.**

Biện luận phương trình mx=2m theo tham số thực m.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Nếu m≠0 thì S={2}; nếu m=0 thì S=ℝ.

Với m≠0, chia cả hai vế cho m được x=2. Với m=0, phương trình là 0=0, mọi số thực đều thỏa. Không được chia cho biểu thức có thể bằng 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD05; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O03; NOT_NEW_SOURCE -->

**Bài 5.**

Giải (x−2)(2x+3)=0.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S={2,−3/2}.

Tích bằng 0 khi ít nhất một thừa số bằng 0. x−2=0 ⇒ x=2; 2x+3=0 ⇒ x=−3/2. Cả hai làm tích bằng 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD06; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O03; NOT_NEW_SOURCE -->

**Bài 6.**

Giải (x−1)²(x+4)=0; nghiệm kép có đếm là hai nghiệm phân biệt không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S={1,−4}; chỉ 2 giá trị phân biệt.

(x−1)²=0 ⇔ x=1; x+4=0 ⇔ x=−4. Bội của nghiệm 1 là 2 nhưng tập nghiệm chỉ ghi mỗi giá trị một lần.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD07; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O04; NOT_NEW_SOURCE -->

**Bài 7.**

Giải 2x²−5x−3=0 bằng biệt thức hoặc phân tích nhân tử.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S={−1/2,3}.

Δ=(−5)²−4·2·(−3)=49. x=(5±7)/4 cho 3 và −1/2. Đồng thời (2x+1)(x−3)=0; hai cách đối chiếu nhau.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD08; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O04; NOT_NEW_SOURCE -->

**Bài 8.**

Tìm tập nghiệm thực của x²+2x+5=0; giải thích vì sao vô nghiệm.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S=∅ trên ℝ.

Δ=2²−4·1·5=−16<0, nên không có nghiệm thực; hoặc (x+1)²+4=0 là bất khả thi vì vế trái ≥4.

</details>

## 2. Miền xác định của phân thức và giá trị tuyệt đối

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD09; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O05; NOT_NEW_SOURCE -->

**Bài 9.**

Giải (x²−4)/(x−2)=0. Giải thích vì sao x=2 bị loại.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S={−2}.

Điều kiện x≠2. Tử (x−2)(x+2)=0 cho x=2 hoặc −2; chỉ −2 hợp miền. Rút gọn thành x+2=0 chỉ được dùng trên miền x≠2, không tự lấp lỗ x=2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD10; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O05; NOT_NEW_SOURCE -->

**Bài 10.**

Giải 1/(x−1)+1/(x+1)=1 trong ℝ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S={1−√2,1+√2}.

Điều kiện x≠±1. Quy đồng thành 2x/(x²−1)=1; nhân với mẫu khác 0 cho 2x=x²−1 ⇒ x²−2x−1=0 ⇒ x=1±√2. Hai nghiệm đều khác ±1 nên được nhận.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD11; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O06; NOT_NEW_SOURCE -->

**Bài 11.**

Giải |2x−3|=5.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S={−1,4}.

Vì 5≥0, |2x−3|=5 ⇔ 2x−3=5 hoặc 2x−3=−5. Hai nhánh cho x=4 và x=−1; thử lại cả hai có giá trị tuyệt đối 5.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD12; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O06; NOT_NEW_SOURCE -->

**Bài 12.**

Giải |x−2|=x.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S={1}.

Vế trái ≥0 nên x≥0. Nếu x≥2 thì |x−2|=x−2, không thể bằng x; nếu 0≤x<2 thì |x−2|=2−x=x ⇒ x=1 hợp miền. Thử |−1|=1.

</details>

## 3. Phương trình chứa căn và kiểm nghiệm

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B18-C01; ORIGINAL_BLOB: 1223d4c2b574433479c5d222dbeff363718ee4bb; OUTCOME: TOP03-O09; NOT_NEW_SOURCE -->

**Bài 13.**

Giải √(x+5)=x−1 trong ℝ.

<details markdown="1"><summary>Lời giải</summary>

S={4}. Điều kiện x≥1; bình phương x+5=(x−1)² ⇔ (x−4)(x+1)=0. Loại −1; thử x=4 được 3=3.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B18-C02; ORIGINAL_BLOB: 1223d4c2b574433479c5d222dbeff363718ee4bb; OUTCOME: TOP03-O08; NOT_NEW_SOURCE -->

**Bài 14.**

Giải √((x+4)²)=√(x+4) trong ℝ.

<details markdown="1"><summary>Lời giải</summary>

S={−4;−3}. Điều kiện x+4≥0. Đặt u=x+4≥0: u²=u ⇒ u=0 hoặc 1; hai giá trị đều thỏa.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B18-P01; ORIGINAL_BLOB: 1223d4c2b574433479c5d222dbeff363718ee4bb; OUTCOME: TOP03-O09; NOT_NEW_SOURCE -->

**Bài 15.**

Giải √(3x+4)=x.

<details markdown="1"><summary>Lời giải</summary>

S={4}. Điều kiện x≥0, bình phương được (x−4)(x+1)=0; loại −1, thử x=4: √16=4.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B18-P02; ORIGINAL_BLOB: 1223d4c2b574433479c5d222dbeff363718ee4bb; OUTCOME: TOP03-O09; NOT_NEW_SOURCE -->

**Bài 16.**

Giải √(2x²+9)=x+3.

<details markdown="1"><summary>Lời giải</summary>

S={0;6}. Điều kiện x≥−3; bình phương được x(x−6)=0; thử x=0 và x=6 đều đúng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B18-P03; ORIGINAL_BLOB: 1223d4c2b574433479c5d222dbeff363718ee4bb; OUTCOME: TOP03-O10; NOT_NEW_SOURCE -->

**Bài 17.**

Giải trên ℝ: √(x²+7x+11)=√(x+3).

<details markdown="1"><summary>Lời giải</summary>

S={−2}. Bình phương được (x+2)(x+4)=0; ứng viên −4 làm căn x+3 có radicand −1, loại; x=−2 thỏa cả hai vế bằng 1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: HPT-G10-CHVI-WRI-18-01; ORIGINAL_BLOB: 4da918f36d30c9b7110099e81fc88943e5b7705b; OUTCOME: TOP03-O08; NOT_NEW_SOURCE -->

**Bài 18.**

Giải trong ℝ phương trình √(x²+4x+4)=√(2x+4). Nêu điều kiện và kiểm tra nghiệm.

<details markdown="1"><summary>Lời giải và rubric</summary>

<p>Điều kiện x≥−2. Bình phương (x+2)²=2x+4 ⇔ x²+2x=0 ⇔ x(x+2)=0; ứng viên x=0 và x=−2 đều đạt điều kiện và thay lại lần lượt được 2=2 và 0=0. S={−2;0}.</p>
<table><thead><tr><th>Tiêu chí</th><th>Điểm</th></tr></thead><tbody><tr><td>Điều kiện xác định</td><td>1</td></tr><tr><td>Bình phương đúng</td><td>1</td></tr><tr><td>Tìm nghiệm ứng viên</td><td>1</td></tr><tr><td>Thử lại hai nghiệm</td><td>1</td></tr><tr><td>Tập nghiệm và kết luận</td><td>1</td></tr></tbody></table>

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD13; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O07; NOT_NEW_SOURCE -->

**Bài 19.**

Giải √(x+2)=x; chỉ rõ nghiệm ngoại lai sau bình phương.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S={2}. Nghiệm ứng viên −1 bị loại.

Vế phải là x nên bắt buộc x≥0. Bình phương x+2=x² ⇔ (x−2)(x+1)=0 ⇒ x=2 hoặc −1; chỉ x=2 hợp dấu vế phải, thử √4=2. −1 cho √1=1≠−1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD14; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O07; NOT_NEW_SOURCE -->

**Bài 20.**

Giải √(x²)=x trong ℝ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S=[0,+∞).

√(x²)=|x|, không tự bằng x khi x âm. Điều kiện |x|=x ⇔ x≥0. Với x=−2, vế trái 2 còn vế phải −2, không bằng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD15; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O08; NOT_NEW_SOURCE -->

**Bài 21.**

Giải √(3x+1)=√(x+7) trong ℝ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S={3}.

Điều kiện 3x+1≥0 và x+7≥0 ⇒ x≥−1/3. Hai căn không âm bằng nhau iff 3x+1=x+7 ⇒ x=3. Thử hai vế √10 bằng nhau.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD16; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O09; NOT_NEW_SOURCE -->

**Bài 22.**

Giải √(5x+4)=x+2. Phương trình có thể có hai nghiệm hay không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S={0,1}.

Điều kiện x+2≥0 và 5x+4≥0. Bình phương 5x+4=(x+2)² ⇒ x²−x=0 ⇒ x=0 hoặc 1. Cả hai thỏa: √4=2=0+2, √9=3=1+2. Không được mặc định một căn có đúng một nghiệm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD17; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O10; NOT_NEW_SOURCE -->

**Bài 23.**

Giải √(x+4)=√(x²+5x+2) trong ℝ và xác định nghiệm ứng viên không hợp lệ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S={−2+√6}; −2−√6 bị loại.

Điều kiện x+4≥0 và x²+5x+2≥0. Bình phương x+4=x²+5x+2 ⇔ x²+4x−2=0 ⇒ x=−2±√6. Với −2−√6<−4, x+4<0, không có căn thực. Với −2+√6>−4, hai radicand cùng bằng x+4=2+√6>0 nên nhận.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD18; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O10; NOT_NEW_SOURCE -->

**Bài 24.**

Giải √(x²+9)=x−1; vì sao phương trình đại số sau bình phương có nghiệm mà phương trình gốc vô nghiệm?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S=∅.

Bên phải x−1 phải ≥0 ⇒ x≥1. Bình phương x²+9=(x−1)² ⇒ 9=−2x+1 ⇒ x=−4, trái x≥1. Trực tiếp tại −4: căn √25=5 còn −4−1=−5. Không có nghiệm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-W01; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O10; NOT_NEW_SOURCE -->

**Bài 25.**

So sánh tập nghiệm thực của (A) √(x+7)=x−1 và (B) √(x+7)=|x−1|. (a) Viết miền xác định và điều kiện dấu cho mỗi phương trình. (b) Bình phương và giải phương trình chung. (c) Lọc nghiệm của từng phương trình bằng phép thế và giải thích tại sao hai tập nghiệm khác nhau.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** Đặt r₋=(3−√33)/2, r₊=(3+√33)/2. S_A={r₊}; S_B={r₋,r₊}.

Hai phương trình đều cần x+7≥0. (A) còn cần x−1≥0 ⇒ x≥1; (B) có vế phải |x−1|≥0 tự động. Bình phương cho x+7=(x−1)² ⇔ x²−3x−6=0 ⇒ r₋,r₊. Vì √33>5 nên r₋=(3−√33)/2<−1<1, nhưng r₋>−7 (do √33<17) nên chỉ (B) nhận r₋; r₊>1 nhận cả hai. Tại mỗi nghiệm, x+7=(x−1)²≥0 nên √(x+7)=|x−1|. Với (A) r₋ sai vì x−1 âm; r₊ đúng.

**Rubric tự đối chiếu:** 7 điểm: miền x≥−7 và điều kiện x≥1 riêng (A) (2đ); bình phương và nghiệm r₋,r₊ đúng (2đ); S_A có đúng một nghiệm với lập luận dấu (1đ); S_B có hai nghiệm, kiểm (B) (1đ); giải thích phép bình phương không tương đương nếu bỏ điều kiện dấu (1đ).

</details>

## 4. Đổi biến và mô hình hóa

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B18-P04; ORIGINAL_BLOB: 1223d4c2b574433479c5d222dbeff363718ee4bb; OUTCOME: TOP03-O12; NOT_NEW_SOURCE -->

**Bài 26.**

Tam giác vuông có hai cạnh góc vuông dài x>0 mét và 3 mét; cạnh huyền dài x+1 mét. Tìm x.

<details markdown="1"><summary>Lời giải</summary>

x=4 m. Từ Pythagore: √(x²+9)=x+1, bình phương được x²+9=x²+2x+1 ⇒ x=4; kiểm √25=5.

</details>

<!-- DISPLAY_ONLY_CANONICAL: HPT-G10-CHVI-WRI-18-02; ORIGINAL_BLOB: 4da918f36d30c9b7110099e81fc88943e5b7705b; OUTCOME: TOP03-O12; NOT_NEW_SOURCE -->

**Bài 27.**

Tam giác vuông có hai cạnh góc vuông x&gt;0 m và 5 m, cạnh huyền x+1 m. (a) Lập phương trình chứa căn; (b) giải và kiểm nghiệm; (c) nêu độ dài ba cạnh.

<details markdown="1"><summary>Lời giải và rubric</summary>

<p>√(x²+25)=x+1. Bình phương được x²+25=x²+2x+1 ⇒ x=12. Thử lại √169=13=12+1. Ba cạnh là 12 m, 5 m, 13 m.</p>
<table><thead><tr><th>Tiêu chí</th><th>Điểm</th></tr></thead><tbody><tr><td>Dựng điều kiện và đại lượng</td><td>1</td></tr><tr><td>Lập phương trình</td><td>2</td></tr><tr><td>Giải x</td><td>1</td></tr><tr><td>Thử nghiệm</td><td>1</td></tr><tr><td>Kết luận 3 cạnh, đơn vị</td><td>1</td></tr></tbody></table>

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD19; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O11; NOT_NEW_SOURCE -->

**Bài 28.**

Giải phương trình x⁴−5x²+4=0 trong ℝ bằng ẩn phụ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S={−2,−1,1,2}.

Đặt t=x²≥0; khi đó t²−5t+4=(t−1)(t−4)=0 ⇒ t∈{1,4} đều ≥0. Quay lại x²=1 ⇒ x=±1; x²=4 ⇒ x=±2. Thử bằng cách thay t vào phương trình.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD20; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O11; NOT_NEW_SOURCE -->

**Bài 29.**

Giải x⁴+3x²−4=0 bằng t=x²; giải thích vì sao một giá trị t bị loại.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** S={−1,1}.

Đặt t=x²≥0, giải t²+3t−4=(t+4)(t−1)=0 cho t=1 hoặc t=−4. Vì t≥0, loại −4; từ x²=1 được x=±1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-ADD21; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O12; NOT_NEW_SOURCE -->

**Bài 30.**

Một thang dài 10 m tựa tường, chân thang cách tường x>0 m, độ cao đầu thang là x+2 m. Tìm x và độ cao.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x=6 m; độ cao 8 m.

Pythagore: √[x²+(x+2)²]=10, x>0. Bình phương x²+(x+2)²=100 ⇒ 2x²+4x−96=0 ⇒ (x+8)(x−6)=0. Chỉ x=6 hợp chiều dài dương; thử √(36+64)=10. Độ cao 8 m.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP03-W02; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; OUTCOME: TOP03-O12; NOT_NEW_SOURCE -->

**Bài 31.**

Một xe dự định chạy 120 km với vận tốc không đổi v>0 km/h. Nếu tăng vận tốc thêm 20 km/h, xe đến sớm hơn 1 giờ. (a) Lập phương trình theo v và ghi điều kiện. (b) Giải phương trình, loại nghiệm không hợp thực tế. (c) Tính hai thời gian và thử điều kiện sớm hơn 1 giờ.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** v=40 km/h, sau tăng là 60 km/h; thời gian lần lượt 3 giờ và 2 giờ.

Điều kiện v>0, v+20>0; thời gian t₁=120/v, t₂=120/(v+20). t₁−t₂=1 ⇒ 2400/[v(v+20)]=1 ⇒ v²+20v−2400=0 ⇒ (v−40)(v+60)=0. Ứng viên 40,−60; chỉ 40 phù hợp v>0. Thử 120/40=3, 120/60=2, chênh đúng 1 giờ. −60 có nghĩa vận tốc âm nên loại.

**Rubric tự đối chiếu:** 7 điểm: ghi v>0 và đơn vị (1đ); lập t₁,t₂ đúng (1đ); lập phương trình thời gian đúng (2đ); giải nghiệm ứng viên 40,−60 (1đ); lọc −60 và lý do (1đ); kiểm 3−2=1, kết luận (1đ).

</details>

# Tự kiểm tra

Hãy tự làm trọn 12 câu trước khi xem lại lời giải. Các câu dưới đây là bài công khai đã gặp trong Luyện tập: mục đích là giúp em tự nhận ra phần nào cần ôn, **không phải** một bài đánh giá năng lực độc lập. Sau khi làm xong tất cả, hãy tự đối chiếu ở Luyện tập và quay lại Kiến thức nếu nhầm điều kiện, làm mất nghiệm hoặc nhận nghiệm ngoại lai.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP03-ADD01; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; NO_MASTERY; NOT_RD1 -->

**Câu 1.** Giải 2x+6=14 và chỉ rõ phép biến đổi tương đương.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP03-ADD03; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; NO_MASTERY; NOT_RD1 -->

**Câu 2.** Giải 3(x−2)=2x+5 và thử lại nghiệm.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP03-ADD05; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; NO_MASTERY; NOT_RD1 -->

**Câu 3.** Giải (x−2)(2x+3)=0.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP03-ADD07; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; NO_MASTERY; NOT_RD1 -->

**Câu 4.** Giải 2x²−5x−3=0 bằng biệt thức hoặc phân tích nhân tử.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP03-ADD09; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; NO_MASTERY; NOT_RD1 -->

**Câu 5.** Giải (x²−4)/(x−2)=0. Giải thích vì sao x=2 bị loại.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP03-ADD11; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; NO_MASTERY; NOT_RD1 -->

**Câu 6.** Giải |2x−3|=5.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP03-ADD13; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; NO_MASTERY; NOT_RD1 -->

**Câu 7.** Giải √(x+2)=x; chỉ rõ nghiệm ngoại lai sau bình phương.

<!-- PUBLIC_REPLAY_ONLY: THPT-G10-B18-C02; ORIGINAL_BLOB: 1223d4c2b574433479c5d222dbeff363718ee4bb; NO_MASTERY; NOT_RD1 -->

**Câu 8.** Giải √((x+4)²)=√(x+4) trong ℝ.

<!-- PUBLIC_REPLAY_ONLY: THPT-G10-B18-C01; ORIGINAL_BLOB: 1223d4c2b574433479c5d222dbeff363718ee4bb; NO_MASTERY; NOT_RD1 -->

**Câu 9.** Giải √(x+5)=x−1 trong ℝ.

<!-- PUBLIC_REPLAY_ONLY: THPT-G10-B18-P03; ORIGINAL_BLOB: 1223d4c2b574433479c5d222dbeff363718ee4bb; NO_MASTERY; NOT_RD1 -->

**Câu 10.** Giải trên ℝ: √(x²+7x+11)=√(x+3).

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP03-ADD19; ORIGINAL_BLOB: fd85d7056f3b934f4599727f8c6da173cf05cd65; NO_MASTERY; NOT_RD1 -->

**Câu 11.** Giải phương trình x⁴−5x²+4=0 trong ℝ bằng ẩn phụ.

<!-- PUBLIC_REPLAY_ONLY: THPT-G10-B18-P04; ORIGINAL_BLOB: 1223d4c2b574433479c5d222dbeff363718ee4bb; NO_MASTERY; NOT_RD1 -->

**Câu 12.** Tam giác vuông có hai cạnh góc vuông dài x>0 mét và 3 mét; cạnh huyền dài x+1 mét. Tìm x.

Học liệu tham khảo SGK Toán 10 Kết nối tri thức với cuộc sống, Tập Hai, Chương VI, Bài 18; các kiến thức phương trình cơ bản được giải thích đầy đủ tại đây.
