<!-- AUTHORING R04: R03 immutable blob aadc6923d5380407ea8bacaa513c68977b77c219; new Q18 source-locked author receipt and V2 ready hold source, NOT independent reviewer PASS or website release. -->
<!-- STANDARD_ID=SLM-THPT-QUALITY-ONE; STANDARD_VERSION=3.1.0; LEARNING_PATH=TOPIC; OUTER_PAGES=Kiến thức|Luyện tập|Tự kiểm tra; SOURCE_VERSION=R04_AUTHORING_READY; AUTHORING_ONLY_METADATA=prototypes/thpt/content-drafts/topic06-trigonometry/Temp_TOPIC06_R04_AUTHORING_ONLY_CUSTODY_METADATA_20261113.md -->
# CĐ06 — Lượng giác và phương trình lượng giác

# Kiến thức

## Từ một vòng quay đến hai tọa độ

Khi bánh xe quay, điều quan trọng không chỉ là nó đã quay một góc bao nhiêu độ mà còn là **theo chiều nào** và **bao nhiêu vòng**. Ta có thể đánh dấu một điểm trên vành bánh xe: trong quá trình quay, hoành độ và tung độ của điểm này thay đổi rồi lặp lại. Chính hai tọa độ ấy dẫn đến \(\cos\) và \(\sin\). Nếu hiểu góc có hướng và đường tròn trước, các dấu, công thức và đồ thị tuần hoàn về sau đều có lý do hình học.

Trước hết hãy xem tia cuối của một góc được xác định ra sao, vì sao hai góc khác nhau có thể cùng tia cuối và tại sao không thể bỏ qua số vòng khi tính quãng đường chuyển động.

<!-- LESSON_ID: TOP06-M01; OUTCOME_ID: TOP06-O01 -->

Khi quay một chiếc kim, ta có thể quay theo hoặc ngược chiều kim đồng hồ, quay chưa hết một vòng hay nhiều vòng. Một góc lượng giác vì thế không chỉ ghi **độ mở**, mà còn ghi **chiều quay**: chiều ngược kim đồng hồ được quy ước dương, chiều thuận kim đồng hồ là âm. Đơn vị radian giúp gắn góc với độ dài cung tròn: một vòng ứng với \(360^\circ=2\pi\) radian. Hai góc chênh nhau \(2k\pi\) có cùng tia cuối nhưng không nhất thiết cùng số vòng quay.

Chẳng hạn, quay \(-450^\circ\) nghĩa là quay một vòng và thêm \(90^\circ\) theo chiều âm. Đổi sang radian: \(-450\cdot\pi/180=-5\pi/2\). Điểm cuối của góc này trùng điểm cuối \(-\pi/2\), nhưng phép quay đầu tiên thực hiện thêm một vòng. Vì vậy khi gặp yêu cầu tính độ dài cung hoặc số vòng, không thể tùy ý thay mọi góc bằng góc cùng tia cuối nếu mất thông tin về chuyển động.

<!-- LESSON_ID: TOP06-M02; OUTCOME_ID: TOP06-O02 -->

Trên đường tròn đơn vị, dấu của sin và cos được đọc từ tọa độ. Làm sao biết dấu sin, cos trước khi tính giá trị chính xác? Ta đã biết đường tròn đơn vị, tọa độ (x,y). Điểm M ứng với góc α trên đường tròn đơn vị có M=(cosα,sinα). Cos là hoành độ, sin là tung độ, nên dấu đến từ góc phần tư; tanα=sinα/cosα chỉ tồn tại khi cosα≠0, cotα khi sinα≠0.

Chẳng hạn, tại góc \(135^\circ\) (góc phần tư II) trên hình, \(\cos135^\circ=-\sqrt2/2\) là **hoành độ âm**, còn \(\sin135^\circ=\sqrt2/2\) là **tung độ dương**. Một ví dụ không cần góc đặc biệt: nếu \(\sin\alpha=4/5\) và \(\alpha\) ở phần tư II, thì \(\cos\alpha=-\sqrt{1-16/25}=-3/5\), \(\tan\alpha=-4/3\). Cả hai trường hợp đều phải chọn dấu từ góc phần tư trước khi lấy căn.

![Đường tròn đơn vị và dấu sin cos theo góc](../../visuals/THPT_TOPIC06_UNIT_CIRCLE_QUADRANTS_R01.svg)

*Đọc hình:* Điểm \(M\) ở \(135^\circ\) có tọa độ \((-\sqrt2/2,\sqrt2/2)\). Hãy đọc dấu âm ở trục ngang và dấu dương ở trục đứng; chỉ sau đó mới gắn các giá trị \(\cos\), \(\sin\). Hình minh họa góc cụ thể, còn quy tắc đúng ở mọi góc phần tư.

<!-- LESSON_ID: TOP06-M03; OUTCOME_ID: TOP06-O03 -->

Các góc khác số đo vẫn có thể dẫn tới cùng vị trí trên đường tròn. Đo được quãng đường trên một vòng cung từ góc ở tâm bằng cách nào? Ta sử dụng định nghĩa radian và chu vi 2πr. Độ dài cung hình học s=r|θ| với θ radian, r>0; độ dời có hướng d=rθ giữ dấu. Góc chênh 2kπ có cùng tia cuối nhưng cung quét có thể khác nhiều vòng.

Xét ví dụ: Bánh xe bán kính 7 cm quay −120° tức −2π/3: độ dời cung theo chiều quay là −14π/3 cm, độ dài quãng đường là 14π/3 cm. Trước hết đổi radian để đơn vị đúng.

### Vận dụng và tự đối chiếu

<!-- First Try TOP06-M01: knowledge, not canonical Readiness -->
**1.** Đổi \(-150^\circ\) sang radian, rồi cho biết góc quay mang dấu gì.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

\(-150^\circ=-150\pi/180=-5\pi/6\) radian. Dấu âm cho biết chiều quay thuận kim đồng hồ. Nếu em làm mất dấu, hãy so vị trí cuối của \(+90^\circ\) và \(-90^\circ\) trên đường tròn.

</details>

<!-- First Try TOP06-M02: knowledge, not canonical Readiness -->
**2.** Sinα=−3/5, α thuộc góc phần tư IV; cosα bằng bao nhiêu?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

+4/5 vì cos dương ở góc IV.

Nếu ra −4/5, xem lại trục hoành phía phải; luyện THPT-G11-B01-C02 và THPT-TOP06-P02.

</details>

<!-- First Try TOP06-M03: knowledge, not canonical Readiness -->
**3.** Bán kính 3, quay 3π/2 rad: cung dài bao nhiêu?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

9π/2; góc đã ở radian.

Nếu dùng r×góc độ trực tiếp, đổi 270°=3π/2 rồi tính lại. Luyện THPT-G11-B01-P03 và THPT-TOP06-P03.

</details>

## Từ tọa độ đến các công thức lượng giác

Trên đường tròn bán kính 1, một điểm luôn thỏa \(x^2+y^2=1\). Thay \(x=\cos\alpha\), \(y=\sin\alpha\), ta hiểu được hệ thức nền tảng trước khi ghi nhớ. Khi đổi góc, các điểm trên đường tròn quay hoặc phản xạ; công thức cộng, trừ và góc nhân đôi là cách diễn tả những phép biến đổi hình học ấy bằng ký hiệu. Vì vậy cần kiểm đúng góc và dấu, không chỉ áp dụng công thức theo mẫu.

Các công thức không phải những dòng cần học thuộc riêng lẻ: chúng phát triển từ vị trí điểm trên đường tròn, điều kiện tan/cot và phép cộng hai góc. Ta sẽ lần lượt kiểm nghiệm chúng bằng những trường hợp cụ thể.

<!-- LESSON_ID: TOP06-M04; OUTCOME_ID: TOP06-O04 -->

Có thể tìm một giá trị lượng giác từ các giá trị còn lại không? Ta bắt đầu từ tam giác vuông; cos²+sin²=1 trên đường tròn đơn vị. Hệ thức sin²x+cos²x=1 đúng với mọi x thực; 1+tan²x=1/cos²x chỉ khi cosx≠0; 1+cot²x=1/sin²x chỉ khi sinx≠0. Không được chia cho sin hoặc cos tại nghiệm bằng 0.

Chẳng hạn, Nếu sinx=3/5 và x ở góc phần tư I: cosx=4/5; tanx=3/4. Nếu sinx=0 thì cotx không xác định, dù các hệ thức không có dấu chia sau biến đổi.

<!-- LESSON_ID: TOP06-M05; OUTCOME_ID: TOP06-O05 -->

Những góc đối xứng trên đường tròn tạo ra các quy luật về giá trị lượng giác. Vì sao hai góc khác nhau có thể có sin bằng nhau nhưng cos trái dấu? Cần nhớ phép đối xứng qua trục Oy trên đường tròn. Đối xứng của điểm (cosα,sinα) qua Oy biến α thành π−α; do đó sin(π−α)=sinα, cos(π−α)=−cosα. Với −α: cos chẵn, sin lẻ. Lý do hình học đi trước việc học thuộc dấu.

Chẳng hạn, α=π/6; góc 5π/6 đối xứng qua Oy nên sin(5π/6)=1/2, cos(5π/6)=−√3/2. Dùng điểm trên đường tròn thay vì nhớ hai bảng dấu.

<!-- LESSON_ID: TOP06-M06; OUTCOME_ID: TOP06-O06 -->

Hai góc cộng hoặc trừ nhau tạo ra công thức có thể suy từ hình học. Sin(u+v) có bằng sin u+sin v không? Để xác định điều đó, cần xét đường tròn đơn vị, tích vô hướng của hai vectơ đơn vị. Hiệu hai góc chi phối tích vô hướng: cos(u−v)=cosu cosv+sinu sinv. Thay v→−v suy ra cos(u+v)=cosu cosv−sinu sinv; các công thức sin tương ứng: sin(u±v)=sinu cosv±cosu sinv. Không tách sin một tổng bằng tổng các sin.

Chẳng hạn, Cos15°=cos(45°−30°)=√6/4+√2/4. Chọn phép trừ vì 15° không có trong bảng cơ bản nhưng 45°,30° thì có.

<!-- LESSON_ID: TOP06-M07; OUTCOME_ID: TOP06-O07 -->

Công thức góc đôi và tích–tổng gắn liền với công thức cộng. Một tổ hợp sin2x hoặc sinx cosx có thể biến đổi gọn hơn ra sao? Ta đã biết công thức cộng; phân phối biểu thức. Lấy u=v=x trong công thức cộng được sin2x=2sinx cosx và cos2x=cos²x−sin²x. Cộng/trừ các công thức cho u±v tạo biến đổi tích–tổng, tổng–tích. Chọn dạng đơn giản hóa theo mục tiêu, luôn giữ biểu thức xác định.

Chẳng hạn, sin3x+sinx=2sin2x cosx: đặt A=3x,B=x rồi dùng sinA+sinB=2sin((A+B)/2)cos((A−B)/2). Cách này phù hợp khi muốn đặt nhân tử hoặc xét nghiệm.

### Vận dụng và tự đối chiếu

<!-- First Try TOP06-M04: knowledge, not canonical Readiness -->
**1.** Với x=π/2, tanx tồn tại không?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

Không, cos(π/2)=0.

Ghi điều kiện trước khi áp dụng đẳng thức phân thức; luyện THPT-G11-B01-P01 và THPT-TOP06-P04.

</details>

<!-- First Try TOP06-M05: knowledge, not canonical Readiness -->
**2.** So sánh sin(−π/3) với sin(π/3).

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

sin(−π/3)=−√3/2 do sin là hàm lẻ.

Vẽ trục Ox và phản xạ trên đường tròn; luyện THPT-G11-B01-P05 và THPT-TOP06-P05.

</details>

<!-- First Try TOP06-M06: knowledge, not canonical Readiness -->
**3.** Tính sin75° từ 45°+30°.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

(√6+√2)/4.

Nếu ghi sin45°+sin30°, thử u=v=π/2 để tìm phản ví dụ. Luyện THPT-G11-B02-C01 và THPT-TOP06-P06.

</details>

<!-- First Try TOP06-M07: knowledge, not canonical Readiness -->
**4.** Viết 2sinx cosx thành hàm của 2x.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

sin2x.

Nếu nhầm hệ số 2, thay x=π/4 để kiểm. Luyện THPT-G11-B02-P04/P05 và THPT-TOP06-P07.

</details>

## Từ một điểm quay đến đường sóng tuần hoàn

Nếu góc tiếp tục tăng, hình chiếu của điểm trên đường tròn lúc đi lên, lúc đi xuống và trở về giá trị cũ sau một vòng. Đó là cách hàm \(y=\sin x\) xuất hiện: từ chuyển động tròn thành đường sóng. Các phép co giãn và dịch pha sẽ thay đổi biên độ, chu kỳ hoặc vị trí đỉnh nhưng không thay bản chất của một quy luật tuần hoàn.

Khi góc thay đổi liên tục, sin, cos, tan và cot trở thành hàm số có miền, chu kỳ, đối xứng và đồ thị. Quan sát sự lặp lại giúp hiểu vì sao một phương trình lượng giác thường có nhiều nghiệm.

<!-- LESSON_ID: TOP06-M08; OUTCOME_ID: TOP06-O08 -->

Vì sao không phải mọi hàm lượng giác đều có miền xác định ℝ? Ta sử dụng khái niệm hàm số và mẫu số khác 0. Sin, cos xác định trên ℝ, nhận giá trị trong [−1,1]. Tanx không xác định tại x=π/2+kπ; cotx không xác định tại x=kπ. Với biểu thức ghép như √(2sinx−1), thêm điều kiện trong căn ≥0; đây là mở rộng bài toán theo mô hình, không mạo nhận Core của B03.

Xét ví dụ: Tìm D của f(x)=√(2sinx−1): cần sinx≥1/2, nên x∈[π/6+2kπ,5π/6+2kπ], k∈ℤ. Chọn hình đường tròn hoặc đồ thị sin để xác định các cung đủ điều kiện.

<!-- LESSON_ID: TOP06-M09; OUTCOME_ID: TOP06-O09 -->

Chu kỳ và đối xứng giúp đọc hàm lượng giác trên cả miền, không chỉ vài điểm. Làm thế nào dự đoán khi nào một dạng sóng lặp lại? Ta bắt đầu từ hàm số trên miền xác định; giá trị sin,cos trên vòng tròn. f có chu kỳ T>0 khi x±T đều thuộc miền nếu x thuộc miền và f(x+T)=f(x) với mọi x. Sin,cos có chu kỳ cơ bản 2π; tan,cot có chu kỳ π. Sin lẻ, cos chẵn; đổi biến và nhân hệ số có thể làm chu kỳ khác. Tránh kết luận chu kỳ chỉ nhờ vài điểm trùng nhau.

Chẳng hạn, y=sin(3x) có chu kỳ cơ bản 2π/3 vì tăng x lên 2π/3 làm góc tăng 2π. y=cos2x+sin3x có chu kỳ 2π; hai thành phần có tần số khác nhau và chu kỳ chung phù hợp.

<!-- LESSON_ID: TOP06-M10; OUTCOME_ID: TOP06-O10 -->

Với sin và cos, dịch pha làm đổi vị trí đỉnh nhưng giữ tính tuần hoàn. Đồ thị giúp đọc điều gì ngoài một bảng giá trị? Cần nhớ mỗi điểm đồ thị là (x,f(x)); chuyển dịch ngang/đứng. y=A sin(ωx+φ)+d (A,ω≠0) có biên độ |A|, chu kỳ 2π/|ω|, trục giữa y=d và tập giá trị [d−|A|,d+|A|]. Pha dịch ngang −φ/ω; không nhầm chiều dấu. Nếu ω=0, hàm hằng và không có chu kỳ cơ bản.

Trước hết, hình bên dưới vẽ \(y=\sin x\) trên một chu kỳ \([0,2\pi]\): đi qua \((0,0)\), cực đại 1 ở \(x=\pi/2\), về 0 ở \(\pi\), cực tiểu −1 ở \(3\pi/2\), rồi về 0 ở \(2\pi\). Khi kết hợp các phép biến đổi, ví dụ \(y=-2\sin(3x-\pi/2)+1\) có biên độ 2, chu kỳ \(2\pi/3\), đường giữa \(y=1\), tập giá trị \([-1,3]\), dịch pha phải \(\pi/6\) trước khi lật và co giãn đứng. Hình gốc giải thích chu kỳ, **không phải hình của hàm đã biến đổi**.

![Đồ thị sin lặp sau một chu kỳ](../../visuals/THPT_TOPIC06_SINE_PERIOD_R01.svg)

*Đọc hình:* Đồ thị đang vẽ \(y=\sin x\) trên \([0,2\pi]\), đánh dấu các mốc 0, \(\pi/2\), \(\pi\), \(3\pi/2\), \(2\pi\) với tung độ lần lượt 0,1,0,−1,0. Đó là chu kỳ gốc; khi học hàm \(\sin(3x-\pi/2)\), phải **tính lại** chu kỳ và pha chứ không đo thẳng trên hình này.

<!-- LESSON_ID: TOP06-M11; OUTCOME_ID: TOP06-O11 -->

Đồ thị tan và cot có điểm cấm, nên phải tách thành từng nhánh. Tại sao đồ thị tan không nối liền qua x=π/2? Để xác định điều đó, cần xét tan là sin/cos, cot là cos/sin. Tan có miền ℝ trừ π/2+kπ, chu kỳ π và tiệm cận đứng ở điểm loại. Cot có miền ℝ trừ kπ, chu kỳ π. Đồ thị chia nhánh, không được nối đường qua tiệm cận; tính tăng/giảm chỉ xét trên mỗi khoảng liên thông miền.

Trên hình, \(y=\tan x\) không xác định tại \(x=\pm\pi/2\) (và nói chung \(\pi/2+k\pi\)), vì \(\cos x=0\). Những đường này là **tiệm cận đứng**, không phải điểm để nối các nhánh. Nếu thay đối số thành \(2x\), hàm \(y=\tan(2x)\) sẽ có điểm loại tại \(x=\pi/4+k\pi/2\) và chu kỳ cơ bản \(\pi/2\). Hình đang minh họa \(\tan x\), không vẽ phiên bản \(\tan(2x)\).

![Đồ thị tan với tiệm cận đứng](../../visuals/THPT_TOPIC06_TAN_ASYMPTOTES_R01.svg)

*Đọc hình:* Các nhánh của \(y=\tan x\) tăng giữa hai tiệm cận \(x=-\pi/2\), \(x=\pi/2\). Đường tiệm cận bị loại khỏi miền; không thể nối nhánh qua vạch đứt hoặc đánh dấu tại đó một giá trị hàm hữu hạn.

### Vận dụng và tự đối chiếu

<!-- First Try TOP06-M08: knowledge, not canonical Readiness -->
**1.** Tập giá trị của y=2cosx−3 là gì?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

[−5,−1] do cosx∈[−1,1].

Nếu bỏ mất miền xác định của tan, đặt cosx=0 làm thử phản ví dụ. Luyện THPT-G11-B03-C01 và THPT-TOP06-P08.

</details>

<!-- First Try TOP06-M09: knowledge, not canonical Readiness -->
**2.** Chu kỳ cơ bản của y=cos(4x) là gì?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

π/2.

Nếu đo chu kỳ bằng cách nhìn một đỉnh, kiểm đỉnh tiếp theo và điều kiện trên mọi x. Luyện THPT-G11-B03-C03 và THPT-TOP06-P09.

</details>

<!-- First Try TOP06-M10: knowledge, not canonical Readiness -->
**3.** y=3cos(2x)+4 có giá trị lớn nhất, nhỏ nhất là bao nhiêu?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

7 và 1.

Đánh dấu trục giữa/điểm cực trị; nếu nhầm tịnh tiến ngang, giải 3x−π/2=0. Luyện THPT-G11-B03-P02/P04/P05 và THPT-TOP06-P10.

</details>

<!-- First Try TOP06-M11: knowledge, not canonical Readiness -->
**4.** Tanx xác định tại x=π không?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

Có, tanπ=0; cotπ mới không xác định.

Ghi bảng điểm loại trước khi nối hình; luyện THPT-G11-B03-P06/P07 và THPT-TOP06-P11.

</details>

## Tìm đủ mọi thời điểm hoặc góc thỏa điều kiện

Một giá trị sin có thể đạt được ở nhiều góc trong cùng một vòng và lặp vô hạn lần qua các vòng tiếp theo. Khi giải phương trình lượng giác, đáp số vì thế thường là **họ góc**, không chỉ một góc chính. Chọn đúng các họ rồi lọc theo đoạn yêu cầu và điểm bị loại bởi \(\tan\) hoặc \(\cot\) là bước quyết định để không bỏ sót hay nhận nhầm nghiệm.

Một nghiệm trên đường tròn có thể lặp lại sau những chu kỳ, nhưng bài toán thực tế hoặc một khoảng cụ thể chỉ cho phép vài giá trị. Ta phải xử lý điều kiện, công thức và phép lọc nghiệm cùng lúc.

<!-- LESSON_ID: TOP06-M12; OUTCOME_ID: TOP06-O12 -->

Giải sinx=a khác giải đa thức chỗ nào? Ta đã biết đường tròn đơn vị, nghiệm cùng vị trí theo chu kỳ. Sinx=a có nghiệm thực khi |a|≤1; nếu sinα=a thì x=α+2kπ hoặc x=π−α+2kπ. Cosx=a có x=±arccos(a)+2kπ khi |a|≤1. Trong công thức này arccos(a)∈[0,π], còn α phải là góc đã biết thỏa sinα=a.

Chẳng hạn, Sin(2x)=√3/2: 2x=π/3+2kπ hoặc 2π/3+2kπ ⇒ x=π/6+kπ hoặc π/3+kπ, k∈ℤ. Có hai họ vì đường ngang cắt đường tròn tại hai điểm.

<!-- LESSON_ID: TOP06-M13; OUTCOME_ID: TOP06-O13 -->

Khi giải phương trình tan hoặc cot, miền xác định thuộc về lời giải. Tại sao tanx=a chỉ cần một họ nghiệm? Ta sử dụng tan xác định khi cosx≠0; tính chu kỳ π. Tan là tỉ số với cos không bằng 0; tanx=a ⇔ x=arctan(a)+kπ, k∈ℤ. Cotx=a ⇔ x=arccot(a)+kπ với arccot chọn trong (0,π), k∈ℤ; cách viết khác phải định rõ nhánh arccot. Luôn xét điều kiện ban đầu khi có biểu thức ghép.

Xét ví dụ: Tan(x+π/4)=−1 ⇒ x+π/4=−π/4+kπ ⇒ x=−π/2+kπ. Thế lại: góc tan bằng −π/4+kπ, không chạm điểm loại.

<!-- LESSON_ID: TOP06-M14; OUTCOME_ID: TOP06-O14 -->

Biến đổi phương trình lượng giác có thể sinh nghiệm ngoài điều kiện. Rút gọn có thể vô tình tạo nghiệm mới như thế nào? Ta bắt đầu từ hệ thức cơ bản và quy tắc biến đổi tương đương. Phân tích thành tích chỉ tương đương nếu không chia cho biểu thức có thể bằng 0. Nếu khử mẫu/biến đổi căn cần giữ điều kiện ban đầu rồi thử lại. Một tích bằng 0 cho hợp các họ nghiệm của từng thừa số; không vứt một nhánh.

Chẳng hạn, Sinx(2cosx−1)=0 ⇒ sinx=0 hoặc cosx=1/2, nên x=kπ hoặc x=±π/3+2kπ. Không được chia cả hai vế cho sinx vì mất x=kπ.

<!-- LESSON_ID: TOP06-M15; OUTCOME_ID: TOP06-O15 -->

Nghiệm tổng quát cần lọc khi chỉ xét một khoảng hữu hạn. Một họ nghiệm có vô hạn số nguyên k, nhưng bài toán chỉ chọn khoảng nhất định. Cần nhớ bất đẳng thức, khoảng mở/đóng và hàm lượng giác. Giải trên ℝ trước, sau đó lọc k theo khoảng hoặc xét trực tiếp các góc trên đường tròn trong [a,b]. Với [a,b) chỉ lấy a nếu thỏa, loại b; tránh đếm hai góc 0 và 2π là hai nghiệm khác nhau khi khoảng nửa mở.

Chẳng hạn, 2sin²x−3sinx+1=0 ⇒ (2sinx−1)(sinx−1)=0. Với [0,2π): x=π/6,5π/6,π/2, tổng 3 nghiệm. Không thêm 2π vì không thuộc khoảng.

<!-- LESSON_ID: TOP06-M16; OUTCOME_ID: TOP06-O16 -->

Mô hình tuần hoàn thực tế còn có giới hạn thời gian và đơn vị phải kiểm. Sóng, thủy triều và nhiệt độ thay đổi trong thời gian hữu hạn có thể mô tả bằng công thức nào? Để xác định điều đó, cần xét đồ thị sin/cos, chu kỳ, đơn vị thời gian. Mô hình h(t)=d+Acos(ωt+φ) có điều kiện miền t thực tế, mức nền d, biên độ |A|, chu kỳ 2π/|ω| khi ω≠0. Dữ liệu thực không nhất thiết đúng sinus lý tưởng; phải phân biệt mô hình giả định với kết luận về thế giới.

Chẳng hạn, Mực nước giả định h(t)=3+1,2cos(πt/6) (m), 0≤t≤24 h. Chu kỳ 12 h; h(0)=4,2 m; h(6)=1,8 m; lần đầu đạt mức nền h=3 m khi t=3 h. Đây chỉ là mô hình luyện toán, không phải dự báo thật.

### Vận dụng và tự đối chiếu

<!-- First Try TOP06-M12: knowledge, not canonical Readiness -->
**1.** Giải cosx=0 trên ℝ.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

x=π/2+kπ (k∈ℤ).

Nếu chỉ viết một nghiệm, quay thêm chu kỳ; nếu |a|>1 thì vô nghiệm. Luyện THPT-G11-B04-C01/C02 và THPT-TOP06-P12.

</details>

<!-- First Try TOP06-M13: knowledge, not canonical Readiness -->
**2.** Giải tan(2x)=0.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

x=kπ/2, k∈ℤ; mọi nghiệm nằm trong miền tan.

Không nhân chéo cho cos=0; luyện THPT-G11-B04-C03/C04 và THPT-TOP06-P13.

</details>

<!-- First Try TOP06-M14: knowledge, not canonical Readiness -->
**3.** Giải 2sinx cosx=0.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

x=kπ/2, k∈ℤ; hoặc sinx=0 (kπ) hoặc cosx=0 (π/2+kπ).

Nếu đang muốn chia cho sinx, tách trường hợp sinx=0 trước. Luyện THPT-G11-B04-P01/P02/P08 và THPT-TOP06-P14.

</details>

<!-- First Try TOP06-M15: knowledge, not canonical Readiness -->
**4.** Giải sinx=0 trên [0,2π).

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

x=0,π; loại 2π.

Vẽ dãy nghiệm trên trục số và đánh dấu đầu mút; luyện THPT-G11-B04-P06/P07 và THPT-TOP06-P15.

</details>

<!-- First Try TOP06-M16: knowledge, not canonical Readiness -->
**5.** Trong mô hình đó, h(12) bằng bao nhiêu?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu</summary>

4,2 m, vì cos2π=1.

Nếu đếm chu kỳ sai, so pha ở t=0 và t=12; nếu viết t<0 ngoài phạm vi thì đọc miền. Luyện THPT-G11-B03-P08, THPT-G11-B04-P09 và THPT-TOP06-P16.

</details>


<!-- AUTHORING MEDIA/SPEC NOTES: This R03 puts verified figures in the teaching flow. Complete historical SVG custody and SPEC_ONLY interaction notes are preserved in R02 Git blob b169d5af2059862f7a331cb1e076791e4789b366; no live model feature is claimed. -->


# Luyện tập

Em hãy bắt đầu với bài tập **góc và đường tròn**: đổi radian, xác định góc phần tư và giải thích dấu của sin, cos trước khi bấm máy. Sau đó chuyển sang **công thức**: chứng minh một đẳng thức, đổi tổng thành tích và kiểm điều kiện xác định thay vì chỉ thay số vào công thức. Khi đã quen, luyện **đọc hàm tuần hoàn và đồ thị** để tìm chu kỳ, biên độ, các điểm cấm và ảnh hưởng của phép dịch pha. Cuối cùng, luyện **phương trình lượng giác**: viết đủ các họ nghiệm theo \(k\in\mathbb Z\), rồi lọc đúng khoảng, biên và các điểm không xác định; bài tự luận yêu cầu trình bày đầy đủ lý do chọn cách giải.

Bộ bài thực hành của bốn nhóm lấy từ cùng một ngân hàng câu hỏi đã kiểm toán: các câu nền tảng SGK được sử dụng lại theo vai trò luyện tập, cùng các câu vận dụng và tự luận mới. Khi học trên website, các đề, hình và lời giải của ngân hàng canonical phải được **hiển thị tại đây** theo nhóm, không buộc em chuyển sang đường học SGK hay đi tìm tệp kỹ thuật. Sau khi làm, em tự mở phần Đối chiếu, xác định sai ở góc, miền, công thức hay họ nghiệm rồi quay về đoạn Kiến thức tương ứng.

# Tự kiểm tra

**Tự kiểm tra công khai:** gồm 16 câu lấy từ chính ngân hàng đã luyện, phân bố trên toàn bộ 16 mục tiêu của chuyên đề. Bộ này dùng để tự đối chiếu sau khi nộp, không phải bài đánh giá độc lập. Toàn bộ đề phải được hiển thị và người học bấm **Final Submit** trước khi có đúng/sai, đáp án, gợi ý hoặc lời giải; sự bảo vệ thật sự trên website thuộc RELEASE. Phần này chỉ giúp em phát hiện chỗ cần ôn; kết quả không phải bằng chứng chấm năng lực độc lập hay điểm thành thạo chính thức. Đề tự kiểm tra chính thức nếu được triển khai sẽ là một hệ thống riêng.

Sau khi nộp: người học tự so lời giải và rubric, xác định outcome mắc lỗi, quay lại mục kiến thức/D6 và làm câu khác. Không suy ra một điểm kiểm tra độc lập từ các câu đã có thể xem trong Practice.

<!-- SOURCE-LOCK-ONLY canonical public item ID references; render stems/solutions from one shared bank by placement, do not show metadata to learner.
- THPT-G11-B01-C01
- THPT-G11-B01-C02
- THPT-G11-B01-P01
- THPT-G11-B01-P02
- THPT-G11-B01-P03
- THPT-G11-B01-P04
- THPT-G11-B02-C01
- THPT-G11-B02-C02
- THPT-G11-B02-P01
- THPT-G11-B02-P02
- THPT-G11-B02-P03
- THPT-G11-B02-P04
- THPT-G11-B02-P05
- THPT-G11-B02-P06
- THPT-G11-B01-P05
- THPT-G11-B02-P07
- THPT-G11-CHI-W01
- THPT-G11-CHI-W02-ANCHOR
- THPT-G11-B03-C01
- THPT-G11-B03-C02
- THPT-G11-B03-C03
- THPT-G11-B03-C04
- THPT-G11-B03-P01
- THPT-G11-B03-P02
- THPT-G11-B03-P03
- THPT-G11-B03-P04
- THPT-G11-B03-P05
- THPT-G11-B03-P06
- THPT-G11-B03-P07
- THPT-G11-B03-P08
- THPT-G11-B04-C01
- THPT-G11-B04-C02
- THPT-G11-B04-C03
- THPT-G11-B04-C04
- THPT-G11-B04-P01
- THPT-G11-B04-P02
- THPT-G11-B04-P03
- THPT-G11-B04-P04
- THPT-G11-B04-P05
- THPT-G11-B04-P06
- THPT-G11-B04-P07
- THPT-G11-B04-P08
- THPT-G11-B04-P09
- THPT-G11-B04-P10
- THPT-G11-CHI-W03
- THPT-G11-CHI-W04-ANCHOR
- THPT-TOP06-P01
- THPT-TOP06-P02
- THPT-TOP06-P03
- THPT-TOP06-P04
- THPT-TOP06-P05
- THPT-TOP06-P06
- THPT-TOP06-P07
- THPT-TOP06-P08
- THPT-TOP06-P09
- THPT-TOP06-P10
- THPT-TOP06-P11
- THPT-TOP06-P12
- THPT-TOP06-P13
- THPT-TOP06-P14
- THPT-TOP06-P15
- THPT-TOP06-P16
- THPT-TOP06-W01
- THPT-TOP06-W02
- THPT-TOP06-W03
- THPT-TOP06-W04
-->
