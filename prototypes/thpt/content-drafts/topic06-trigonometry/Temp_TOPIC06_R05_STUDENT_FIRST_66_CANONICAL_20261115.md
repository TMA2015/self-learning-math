# Chuyên đề 06 · Lượng giác và phương trình lượng giác

Một bánh xe có thể quay nhiều vòng rồi lại về vị trí cũ. Đường tròn đơn vị giúp em hiểu dấu sin/cos, công thức và chu kỳ; khi giải phương trình, em phải viết **đủ họ nghiệm** và lọc đúng điểm loại, khoảng nghiệm. Đây là hành trình Chuyên đề tự đủ, không cần Core riêng.

## 1. Kiến thức

### 1. Góc quay và tọa độ trên đường tròn

**Khám phá kiến thức**

Khi bánh xe quay, điều quan trọng không chỉ là nó đã quay một góc bao nhiêu độ mà còn là **theo chiều nào** và **bao nhiêu vòng**. Ta có thể đánh dấu một điểm trên vành bánh xe: trong quá trình quay, hoành độ và tung độ của điểm này thay đổi rồi lặp lại. Chính hai tọa độ ấy dẫn đến \(\cos\) và \(\sin\). Nếu hiểu góc có hướng và đường tròn trước, các dấu, công thức và đồ thị tuần hoàn về sau đều có lý do hình học.

Trước hết hãy xem tia cuối của một góc được xác định ra sao, vì sao hai góc khác nhau có thể cùng tia cuối và tại sao không thể bỏ qua số vòng khi tính quãng đường chuyển động.

<!-- LESSON_ID: TOP06-M01; OUTCOME_ID: TOP06-O01; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

#### 1.1. Độ và radian của góc có hướng

Hai góc cùng tia cuối có kể cùng số vòng quay không?

Khi quay một chiếc kim, ta có thể quay theo hoặc ngược chiều kim đồng hồ, quay chưa hết một vòng hay nhiều vòng. Một góc lượng giác vì thế không chỉ ghi **độ mở**, mà còn ghi **chiều quay**: chiều ngược kim đồng hồ được quy ước dương, chiều thuận kim đồng hồ là âm. Đơn vị radian giúp gắn góc với độ dài cung tròn: một vòng ứng với \(360^\circ=2\pi\) radian. Hai góc chênh nhau \(2k\pi\) có cùng tia cuối nhưng không nhất thiết cùng số vòng quay.

Chẳng hạn, quay \(-450^\circ\) nghĩa là quay một vòng và thêm \(90^\circ\) theo chiều âm. Đổi sang radian: \(-450\cdot\pi/180=-5\pi/2\). Điểm cuối của góc này trùng điểm cuối \(-\pi/2\), nhưng phép quay đầu tiên thực hiện thêm một vòng. Vì vậy khi gặp yêu cầu tính độ dài cung hoặc số vòng, không thể tùy ý thay mọi góc bằng góc cùng tia cuối nếu mất thông tin về chuyển động.

**Ví dụ**

**Đề bài.** Quay \(585^\circ\) ngược chiều kim đồng hồ. Đổi sang radian và tìm góc cùng tia cuối trong \([0,2\pi)\).

**Lời giải.** \(585^\circ=585\pi/180=13\pi/4\). Trừ \(2\pi\) được \(5\pi/4\). Tia cuối trùng nhau, nhưng góc \(13\pi/4\) ghi cả một vòng nhiều hơn góc đại diện; không bỏ số vòng nếu bài hỏi chuyển động.

**Vận dụng**

Đổi \(-150^\circ\) sang radian, rồi cho biết góc quay mang dấu gì.

<details markdown="1"><summary>Đối chiếu</summary>

\(-150^\circ=-150\pi/180=-5\pi/6\) radian. Dấu âm cho biết chiều quay thuận kim đồng hồ. Nếu em làm mất dấu, hãy so vị trí cuối của \(+90^\circ\) và \(-90^\circ\) trên đường tròn.

</details>

<!-- LESSON_ID: TOP06-M02; OUTCOME_ID: TOP06-O02; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

#### 1.2. Sin/cos từ tọa độ đường tròn

Dấu sin và cos khác nhau ở hai phía của trục Oy vì sao?

Trên đường tròn đơn vị, dấu của sin và cos được đọc từ tọa độ. Làm sao biết dấu sin, cos trước khi tính giá trị chính xác? Ta đã biết đường tròn đơn vị, tọa độ (x,y). Điểm M ứng với góc α trên đường tròn đơn vị có M=(cosα,sinα). Cos là hoành độ, sin là tung độ, nên dấu đến từ góc phần tư; tanα=sinα/cosα chỉ tồn tại khi cosα≠0, cotα khi sinα≠0.

Chẳng hạn, tại góc \(135^\circ\) (góc phần tư II) trên hình, \(\cos135^\circ=-\sqrt2/2\) là **hoành độ âm**, còn \(\sin135^\circ=\sqrt2/2\) là **tung độ dương**. Một ví dụ không cần góc đặc biệt: nếu \(\sin\alpha=4/5\) và \(\alpha\) ở phần tư II, thì \(\cos\alpha=-\sqrt{1-16/25}=-3/5\), \(\tan\alpha=-4/3\). Cả hai trường hợp đều phải chọn dấu từ góc phần tư trước khi lấy căn.

![Đường tròn đơn vị và dấu sin cos theo góc](../../visuals/THPT_TOPIC06_UNIT_CIRCLE_QUADRANTS_R01.svg)

*Đọc hình:* Điểm \(M\) ở \(135^\circ\) có tọa độ \((-\sqrt2/2,\sqrt2/2)\). Hãy đọc dấu âm ở trục ngang và dấu dương ở trục đứng; chỉ sau đó mới gắn các giá trị \(\cos\), \(\sin\). Hình minh họa góc cụ thể, còn quy tắc đúng ở mọi góc phần tư.

**Ví dụ**

**Đề bài.** Biết \(\cos\alpha=-12/13\), góc \(\alpha\) thuộc phần tư II. Tính \(\sin\alpha,\tan\alpha\).

**Lời giải.** \(\sin^2\alpha=1-144/169=25/169\). Phần tư II sin dương nên \(\sin\alpha=5/13\); cos khác 0 nên \(\tan\alpha=-5/12\). Chọn dấu theo góc phần tư trước khi lấy căn.

**Vận dụng**

Sinα=−3/5, α thuộc góc phần tư IV; cosα bằng bao nhiêu?

<details markdown="1"><summary>Đối chiếu</summary>

+4/5 vì cos dương ở góc IV.

Nếu ra −4/5, xem lại trục hoành phía phải; luyện THPT-G11-B01-C02 và THPT-TOP06-P02.

</details>

<!-- LESSON_ID: TOP06-M03; OUTCOME_ID: TOP06-O03; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

#### 1.3. Cung hình học và độ dời có hướng

Quãng đường đi có âm khi kim quay thuận chiều không?

Các góc khác số đo vẫn có thể dẫn tới cùng vị trí trên đường tròn. Đo được quãng đường trên một vòng cung từ góc ở tâm bằng cách nào? Ta sử dụng định nghĩa radian và chu vi 2πr. Độ dài cung hình học s=r|θ| với θ radian, r>0; độ dời có hướng d=rθ giữ dấu. Góc chênh 2kπ có cùng tia cuối nhưng cung quét có thể khác nhiều vòng.

Xét ví dụ: Bánh xe bán kính 7 cm quay −120° tức −2π/3: độ dời cung theo chiều quay là −14π/3 cm, độ dài quãng đường là 14π/3 cm. Trước hết đổi radian để đơn vị đúng.

**Ví dụ**

**Đề bài.** Một bánh xe bán kính \(9\) cm quay \(-240^\circ\). Tìm độ dời cung có hướng và quãng đường trên vành.

**Lời giải.** \(-240^\circ=-4\pi/3\) rad. Độ dời \(d=r\theta=-12\pi\) cm, quãng đường \(s=r|\theta|=12\pi\) cm. Độ dài quãng đường phải không âm.

**Vận dụng**

Bán kính 3, quay 3π/2 rad: cung dài bao nhiêu?

<details markdown="1"><summary>Đối chiếu</summary>

9π/2; góc đã ở radian.

Nếu dùng r×góc độ trực tiếp, đổi 270°=3π/2 rồi tính lại. Luyện THPT-G11-B01-P03 và THPT-TOP06-P03.

</details>

### 2. Công thức lượng giác có điều kiện

**Khám phá kiến thức**

Trên đường tròn bán kính 1, một điểm luôn thỏa \(x^2+y^2=1\). Thay \(x=\cos\alpha\), \(y=\sin\alpha\), ta hiểu được hệ thức nền tảng trước khi ghi nhớ. Khi đổi góc, các điểm trên đường tròn quay hoặc phản xạ; công thức cộng, trừ và góc nhân đôi là cách diễn tả những phép biến đổi hình học ấy bằng ký hiệu. Vì vậy cần kiểm đúng góc và dấu, không chỉ áp dụng công thức theo mẫu.

Các công thức không phải những dòng cần học thuộc riêng lẻ: chúng phát triển từ vị trí điểm trên đường tròn, điều kiện tan/cot và phép cộng hai góc. Ta sẽ lần lượt kiểm nghiệm chúng bằng những trường hợp cụ thể.

<!-- LESSON_ID: TOP06-M04; OUTCOME_ID: TOP06-O04; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

#### 2.1. Hệ thức lượng giác cùng điều kiện

Khi nào các tỉ số tan/cot không được phép sử dụng?

Có thể tìm một giá trị lượng giác từ các giá trị còn lại không? Ta bắt đầu từ tam giác vuông; cos²+sin²=1 trên đường tròn đơn vị. Hệ thức sin²x+cos²x=1 đúng với mọi x thực; 1+tan²x=1/cos²x chỉ khi cosx≠0; 1+cot²x=1/sin²x chỉ khi sinx≠0. Không được chia cho sin hoặc cos tại nghiệm bằng 0.

Chẳng hạn, Nếu sinx=3/5 và x ở góc phần tư I: cosx=4/5; tanx=3/4. Nếu sinx=0 thì cotx không xác định, dù các hệ thức không có dấu chia sau biến đổi.

**Ví dụ**

**Đề bài.** Biết \(\sin\alpha=-8/17\), \(\alpha\) ở phần tư IV. Tìm cos và tan.

**Lời giải.** \(\cos^2\alpha=1-64/289=225/289\); cos dương ở phần tư IV nên \(\cos\alpha=15/17\). Vì cos khác 0, \(\tan\alpha=-8/15\). Không được chia cho cos tại góc mà cos bằng 0.

**Vận dụng**

Với x=π/2, tanx tồn tại không?

<details markdown="1"><summary>Đối chiếu</summary>

Không, cos(π/2)=0.

Ghi điều kiện trước khi áp dụng đẳng thức phân thức; luyện THPT-G11-B01-P01 và THPT-TOP06-P04.

</details>

<!-- LESSON_ID: TOP06-M05; OUTCOME_ID: TOP06-O05; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

#### 2.2. Góc liên quan và đối xứng

Phản xạ qua trục Oy đổi giá trị nào?

Những góc đối xứng trên đường tròn tạo ra các quy luật về giá trị lượng giác. Vì sao hai góc khác nhau có thể có sin bằng nhau nhưng cos trái dấu? Cần nhớ phép đối xứng qua trục Oy trên đường tròn. Đối xứng của điểm (cosα,sinα) qua Oy biến α thành π−α; do đó sin(π−α)=sinα, cos(π−α)=−cosα. Với −α: cos chẵn, sin lẻ. Lý do hình học đi trước việc học thuộc dấu.

Chẳng hạn, α=π/6; góc 5π/6 đối xứng qua Oy nên sin(5π/6)=1/2, cos(5π/6)=−√3/2. Dùng điểm trên đường tròn thay vì nhớ hai bảng dấu.

**Ví dụ**

**Đề bài.** Từ góc \(\pi/4\), tính \(\sin(3\pi/4)\) và \(\cos(3\pi/4)\) bằng đối xứng.

**Lời giải.** Vì \(3\pi/4=\pi-\pi/4\), đối xứng qua Oy giữ tung độ, đổi dấu hoành độ. Suy ra \(\sin(3\pi/4)=\sqrt2/2\), \(\cos(3\pi/4)=-\sqrt2/2\).

**Vận dụng**

So sánh sin(−π/3) với sin(π/3).

<details markdown="1"><summary>Đối chiếu</summary>

sin(−π/3)=−√3/2 do sin là hàm lẻ.

Vẽ trục Ox và phản xạ trên đường tròn; luyện THPT-G11-B01-P05 và THPT-TOP06-P05.

</details>

<!-- LESSON_ID: TOP06-M06; OUTCOME_ID: TOP06-O06; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

#### 2.3. Công thức cộng/trừ góc

Vì sao sin(u+v) không bằng sin u+sin v?

Hai góc cộng hoặc trừ nhau tạo ra công thức có thể suy từ hình học. Sin(u+v) có bằng sin u+sin v không? Để xác định điều đó, cần xét đường tròn đơn vị, tích vô hướng của hai vectơ đơn vị. Hiệu hai góc chi phối tích vô hướng: cos(u−v)=cosu cosv+sinu sinv. Thay v→−v suy ra cos(u+v)=cosu cosv−sinu sinv; các công thức sin tương ứng: sin(u±v)=sinu cosv±cosu sinv. Không tách sin một tổng bằng tổng các sin.

Chẳng hạn, Cos15°=cos(45°−30°)=√6/4+√2/4. Chọn phép trừ vì 15° không có trong bảng cơ bản nhưng 45°,30° thì có.

**Ví dụ**

**Đề bài.** Tính chính xác \(\cos105^\circ\) bằng công thức cộng.

**Lời giải.** Viết \(105^\circ=60^\circ+45^\circ\). \(\cos105^\circ=\cos60^\circ\cos45^\circ-\sin60^\circ\sin45^\circ=(\sqrt2-\sqrt6)/4\). Dấu âm hợp lý vì góc ở phần tư II.

**Vận dụng**

Tính sin75° từ 45°+30°.

<details markdown="1"><summary>Đối chiếu</summary>

(√6+√2)/4.

Nếu ghi sin45°+sin30°, thử u=v=π/2 để tìm phản ví dụ. Luyện THPT-G11-B02-C01 và THPT-TOP06-P06.

</details>

<!-- LESSON_ID: TOP06-M07; OUTCOME_ID: TOP06-O07; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

#### 2.4. Góc nhân đôi và đổi dạng

Có thể chọn dạng tích hay tổng để thuận lợi giải phương trình?

Công thức góc đôi và tích–tổng gắn liền với công thức cộng. Một tổ hợp sin2x hoặc sinx cosx có thể biến đổi gọn hơn ra sao? Ta đã biết công thức cộng; phân phối biểu thức. Lấy u=v=x trong công thức cộng được sin2x=2sinx cosx và cos2x=cos²x−sin²x. Cộng/trừ các công thức cho u±v tạo biến đổi tích–tổng, tổng–tích. Chọn dạng đơn giản hóa theo mục tiêu, luôn giữ biểu thức xác định.

Chẳng hạn, sin3x+sinx=2sin2x cosx: đặt A=3x,B=x rồi dùng sinA+sinB=2sin((A+B)/2)cos((A−B)/2). Cách này phù hợp khi muốn đặt nhân tử hoặc xét nghiệm.

**Ví dụ**

**Đề bài.** Cho \(\cos x=3/5\), \(\sin x=4/5\). Tính \(\sin2x,\cos2x\).

**Lời giải.** \(\sin2x=2(3/5)(4/5)=24/25\). \(\cos2x=(3/5)^2-(4/5)^2=-7/25\). Kiểm \((24/25)^2+(-7/25)^2=1\).

**Vận dụng**

Viết 2sinx cosx thành hàm của 2x.

<details markdown="1"><summary>Đối chiếu</summary>

sin2x.

Nếu nhầm hệ số 2, thay x=π/4 để kiểm. Luyện THPT-G11-B02-P04/P05 và THPT-TOP06-P07.

</details>

### 3. Hàm lượng giác và các đồ thị tuần hoàn

**Khám phá kiến thức**

Nếu góc tiếp tục tăng, hình chiếu của điểm trên đường tròn lúc đi lên, lúc đi xuống và trở về giá trị cũ sau một vòng. Đó là cách hàm \(y=\sin x\) xuất hiện: từ chuyển động tròn thành đường sóng. Các phép co giãn và dịch pha sẽ thay đổi biên độ, chu kỳ hoặc vị trí đỉnh nhưng không thay bản chất của một quy luật tuần hoàn.

Khi góc thay đổi liên tục, sin, cos, tan và cot trở thành hàm số có miền, chu kỳ, đối xứng và đồ thị. Quan sát sự lặp lại giúp hiểu vì sao một phương trình lượng giác thường có nhiều nghiệm.

<!-- LESSON_ID: TOP06-M08; OUTCOME_ID: TOP06-O08; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

#### 3.1. Miền xác định của biểu thức lượng giác

Khi biểu thức có căn và tan, phải giao những miền nào?

Vì sao không phải mọi hàm lượng giác đều có miền xác định ℝ? Ta sử dụng khái niệm hàm số và mẫu số khác 0. Sin, cos xác định trên ℝ, nhận giá trị trong [−1,1]. Tanx không xác định tại x=π/2+kπ; cotx không xác định tại x=kπ. Với biểu thức ghép như √(2sinx−1), thêm điều kiện trong căn ≥0; đây là mở rộng bài toán theo mô hình, không mạo nhận Core của B03.

Xét ví dụ: Tìm D của f(x)=√(2sinx−1): cần sinx≥1/2, nên x∈[π/6+2kπ,5π/6+2kπ], k∈ℤ. Chọn hình đường tròn hoặc đồ thị sin để xác định các cung đủ điều kiện.

**Ví dụ**

**Đề bài.** Tìm miền xác định của \(f(x)=\sqrt{1-2\cos x}\).

**Lời giải.** Cần \(1-2\cos x\ge0\), tức \(\cos x\le1/2\). Trong mỗi vòng điều này đúng trên \([\pi/3,5\pi/3]\); vậy \(D=\bigcup_{k\in\mathbb Z}[\pi/3+2k\pi,5\pi/3+2k\pi]\). Hai biên được nhận vì căn 0 có nghĩa.

**Vận dụng**

Tập giá trị của y=2cosx−3 là gì?

<details markdown="1"><summary>Đối chiếu</summary>

[−5,−1] do cosx∈[−1,1].

Nếu bỏ mất miền xác định của tan, đặt cosx=0 làm thử phản ví dụ. Luyện THPT-G11-B03-C01 và THPT-TOP06-P08.

</details>

<!-- LESSON_ID: TOP06-M09; OUTCOME_ID: TOP06-O09; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

#### 3.2. Chu kỳ cơ bản và đối xứng

Hai điểm cùng độ cao đã đủ chứng minh chu kỳ chưa?

Chu kỳ và đối xứng giúp đọc hàm lượng giác trên cả miền, không chỉ vài điểm. Làm thế nào dự đoán khi nào một dạng sóng lặp lại? Ta bắt đầu từ hàm số trên miền xác định; giá trị sin,cos trên vòng tròn. f có chu kỳ T>0 khi x±T đều thuộc miền nếu x thuộc miền và f(x+T)=f(x) với mọi x. Sin,cos có chu kỳ cơ bản 2π; tan,cot có chu kỳ π. Sin lẻ, cos chẵn; đổi biến và nhân hệ số có thể làm chu kỳ khác. Tránh kết luận chu kỳ chỉ nhờ vài điểm trùng nhau.

Chẳng hạn, y=sin(3x) có chu kỳ cơ bản 2π/3 vì tăng x lên 2π/3 làm góc tăng 2π. y=cos2x+sin3x có chu kỳ 2π; hai thành phần có tần số khác nhau và chu kỳ chung phù hợp.

**Ví dụ**

**Đề bài.** Tìm chu kỳ cơ bản của \(f(x)=\sin(5x)\).

**Lời giải.** Tăng \(x\) thêm \(2\pi/5\) làm đối số tăng \(2\pi\), nên lặp với mọi \(x\). Chu kỳ dương nhỏ nhất của sin theo đối số là \(2\pi\), vì thế \(5T=2\pi\) nhỏ nhất, tức \(T=2\pi/5\). Hai điểm có cùng tung độ chưa đủ chứng minh chu kỳ.

**Vận dụng**

Chu kỳ cơ bản của y=cos(4x) là gì?

<details markdown="1"><summary>Đối chiếu</summary>

π/2.

Nếu đo chu kỳ bằng cách nhìn một đỉnh, kiểm đỉnh tiếp theo và điều kiện trên mọi x. Luyện THPT-G11-B03-C03 và THPT-TOP06-P09.

</details>

<!-- LESSON_ID: TOP06-M10; OUTCOME_ID: TOP06-O10; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

#### 3.3. Biên độ, pha và trục giữa

Biên độ khác dịch pha và trục giữa ra sao?

Với sin và cos, dịch pha làm đổi vị trí đỉnh nhưng giữ tính tuần hoàn. Đồ thị giúp đọc điều gì ngoài một bảng giá trị? Cần nhớ mỗi điểm đồ thị là (x,f(x)); chuyển dịch ngang/đứng. y=A sin(ωx+φ)+d (A,ω≠0) có biên độ |A|, chu kỳ 2π/|ω|, trục giữa y=d và tập giá trị [d−|A|,d+|A|]. Pha dịch ngang −φ/ω; không nhầm chiều dấu. Nếu ω=0, hàm hằng và không có chu kỳ cơ bản.

Trước hết, hình bên dưới vẽ \(y=\sin x\) trên một chu kỳ \([0,2\pi]\): đi qua \((0,0)\), cực đại 1 ở \(x=\pi/2\), về 0 ở \(\pi\), cực tiểu −1 ở \(3\pi/2\), rồi về 0 ở \(2\pi\). Khi kết hợp các phép biến đổi, ví dụ \(y=-2\sin(3x-\pi/2)+1\) có biên độ 2, chu kỳ \(2\pi/3\), đường giữa \(y=1\), tập giá trị \([-1,3]\), dịch pha phải \(\pi/6\) trước khi lật và co giãn đứng. Hình gốc giải thích chu kỳ, **không phải hình của hàm đã biến đổi**.

![Đồ thị sin lặp sau một chu kỳ](../../visuals/THPT_TOPIC06_SINE_PERIOD_R01.svg)

*Đọc hình:* Đồ thị đang vẽ \(y=\sin x\) trên \([0,2\pi]\), đánh dấu các mốc 0, \(\pi/2\), \(\pi\), \(3\pi/2\), \(2\pi\) với tung độ lần lượt 0,1,0,−1,0. Đó là chu kỳ gốc; khi học hàm \(\sin(3x-\pi/2)\), phải **tính lại** chu kỳ và pha chứ không đo thẳng trên hình này.

**Ví dụ**

**Đề bài.** Với \(y=1+3\cos(2x+\pi/3)\), tìm biên độ, chu kỳ, trục giữa, tập giá trị và dịch pha.

**Lời giải.** Biên độ 3, chu kỳ \(\pi\), trục giữa \(y=1\), tập giá trị \([-2,4]\). Do \(2x+\pi/3=2(x+\pi/6)\), dịch pha trái \(\pi/6\) so với \(\cos2x\). Hình cạnh bài là \(\sin x\) gốc, không phải đồ thị hàm này.

**Vận dụng**

y=3cos(2x)+4 có giá trị lớn nhất, nhỏ nhất là bao nhiêu?

<details markdown="1"><summary>Đối chiếu</summary>

7 và 1.

Đánh dấu trục giữa/điểm cực trị; nếu nhầm tịnh tiến ngang, giải 3x−π/2=0. Luyện THPT-G11-B03-P02/P04/P05 và THPT-TOP06-P10.

</details>

<!-- LESSON_ID: TOP06-M11; OUTCOME_ID: TOP06-O11; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

#### 3.4. Nhánh tan/cot và tiệm cận đứng

Có thể nối hai nhánh tan qua tiệm cận không?

Đồ thị tan và cot có điểm cấm, nên phải tách thành từng nhánh. Tại sao đồ thị tan không nối liền qua x=π/2? Để xác định điều đó, cần xét tan là sin/cos, cot là cos/sin. Tan có miền ℝ trừ π/2+kπ, chu kỳ π và tiệm cận đứng ở điểm loại. Cot có miền ℝ trừ kπ, chu kỳ π. Đồ thị chia nhánh, không được nối đường qua tiệm cận; tính tăng/giảm chỉ xét trên mỗi khoảng liên thông miền.

Trên hình, \(y=\tan x\) không xác định tại \(x=\pm\pi/2\) (và nói chung \(\pi/2+k\pi\)), vì \(\cos x=0\). Những đường này là **tiệm cận đứng**, không phải điểm để nối các nhánh. Nếu thay đối số thành \(2x\), hàm \(y=\tan(2x)\) sẽ có điểm loại tại \(x=\pi/4+k\pi/2\) và chu kỳ cơ bản \(\pi/2\). Hình đang minh họa \(\tan x\), không vẽ phiên bản \(\tan(2x)\).

![Đồ thị tan với tiệm cận đứng](../../visuals/THPT_TOPIC06_TAN_ASYMPTOTES_R01.svg)

*Đọc hình:* Các nhánh của \(y=\tan x\) tăng giữa hai tiệm cận \(x=-\pi/2\), \(x=\pi/2\). Đường tiệm cận bị loại khỏi miền; không thể nối nhánh qua vạch đứt hoặc đánh dấu tại đó một giá trị hàm hữu hạn.

**Ví dụ**

**Đề bài.** Cho \(g(x)=\tan(x-\pi/4)\). Tìm miền xác định và chu kỳ.

**Lời giải.** Cần \(\cos(x-\pi/4)\ne0\), tức \(x\ne3\pi/4+k\pi\), \(k\in\mathbb Z\). Chu kỳ cơ bản \(\pi\). Tiệm cận của \(\tan x\) trong hình chuyển sang phải \(\pi/4\), không nối nhánh qua tiệm cận.

**Vận dụng**

Tanx xác định tại x=π không?

<details markdown="1"><summary>Đối chiếu</summary>

Có, tanπ=0; cotπ mới không xác định.

Ghi bảng điểm loại trước khi nối hình; luyện THPT-G11-B03-P06/P07 và THPT-TOP06-P11.

</details>

### 4. Họ nghiệm, khoảng nghiệm và mô hình chu kỳ

**Khám phá kiến thức**

Một giá trị sin có thể đạt được ở nhiều góc trong cùng một vòng và lặp vô hạn lần qua các vòng tiếp theo. Khi giải phương trình lượng giác, đáp số vì thế thường là **họ góc**, không chỉ một góc chính. Chọn đúng các họ rồi lọc theo đoạn yêu cầu và điểm bị loại bởi \(\tan\) hoặc \(\cot\) là bước quyết định để không bỏ sót hay nhận nhầm nghiệm.

Một nghiệm trên đường tròn có thể lặp lại sau những chu kỳ, nhưng bài toán thực tế hoặc một khoảng cụ thể chỉ cho phép vài giá trị. Ta phải xử lý điều kiện, công thức và phép lọc nghiệm cùng lúc.

<!-- LESSON_ID: TOP06-M12; OUTCOME_ID: TOP06-O12; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

#### 4.1. Nghiệm của sin/cos

Vì sao sin/cos thường phải ghi hai họ nghiệm?

Giải sinx=a khác giải đa thức chỗ nào? Ta đã biết đường tròn đơn vị, nghiệm cùng vị trí theo chu kỳ. Sinx=a có nghiệm thực khi |a|≤1; nếu sinα=a thì x=α+2kπ hoặc x=π−α+2kπ. Cosx=a có x=±arccos(a)+2kπ khi |a|≤1. Trong công thức này arccos(a)∈[0,π], còn α phải là góc đã biết thỏa sinα=a.

Chẳng hạn, Sin(2x)=√3/2: 2x=π/3+2kπ hoặc 2π/3+2kπ ⇒ x=π/6+kπ hoặc π/3+kπ, k∈ℤ. Có hai họ vì đường ngang cắt đường tròn tại hai điểm.

**Ví dụ**

**Đề bài.** Giải \(\cos(2x)=\sqrt2/2\) trên \(\mathbb R\).

**Lời giải.** \(\cos\theta=\sqrt2/2\) khi \(\theta=\pm\pi/4+2k\pi\). Đặt \(\theta=2x\) và chia hai vế cho 2, được \(x=\pm\pi/8+k\pi\), \(k\in\mathbb Z\). Hai dấu cho hai họ; kiểm lại bằng \(\cos(\pm\pi/4+2k\pi)=\sqrt2/2\).

**Vận dụng**

Giải cosx=0 trên ℝ.

<details markdown="1"><summary>Đối chiếu</summary>

x=π/2+kπ (k∈ℤ).

Nếu chỉ viết một nghiệm, quay thêm chu kỳ; nếu |a|>1 thì vô nghiệm. Luyện THPT-G11-B04-C01/C02 và THPT-TOP06-P12.

</details>

<!-- LESSON_ID: TOP06-M13; OUTCOME_ID: TOP06-O13; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

#### 4.2. Nghiệm của tan/cot

Vì sao tan/cot chỉ có một họ nghiệm mỗi chu kỳ?

Khi giải phương trình tan hoặc cot, miền xác định thuộc về lời giải. Tại sao tanx=a chỉ cần một họ nghiệm? Ta sử dụng tan xác định khi cosx≠0; tính chu kỳ π. Tan là tỉ số với cos không bằng 0; tanx=a ⇔ x=arctan(a)+kπ, k∈ℤ. Cotx=a ⇔ x=arccot(a)+kπ với arccot chọn trong (0,π), k∈ℤ; cách viết khác phải định rõ nhánh arccot. Luôn xét điều kiện ban đầu khi có biểu thức ghép.

Xét ví dụ: Tan(x+π/4)=−1 ⇒ x+π/4=−π/4+kπ ⇒ x=−π/2+kπ. Thế lại: góc tan bằng −π/4+kπ, không chạm điểm loại.

**Ví dụ**

**Đề bài.** Giải \(\tan(3x)=\sqrt3\) trên \(\mathbb R\).

**Lời giải.** Điều kiện \(\cos(3x)\ne0\). Từ \(\tan\theta=\sqrt3\) suy ra \(\theta=\pi/3+k\pi\), nên \(x=\pi/9+k\pi/3\), \(k\in\mathbb Z\). Tại mọi nghiệm \(\cos(3x)=\pm1/2\ne0\), các nghiệm đều hợp lệ.

**Vận dụng**

Giải tan(2x)=0.

<details markdown="1"><summary>Đối chiếu</summary>

x=kπ/2, k∈ℤ; mọi nghiệm nằm trong miền tan.

Không nhân chéo cho cos=0; luyện THPT-G11-B04-C03/C04 và THPT-TOP06-P13.

</details>

<!-- LESSON_ID: TOP06-M14; OUTCOME_ID: TOP06-O14; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

#### 4.3. Biến đổi không làm mất nghiệm

Chia cho sin/cos có thể làm mất nghiệm nào?

Biến đổi phương trình lượng giác có thể sinh nghiệm ngoài điều kiện. Rút gọn có thể vô tình tạo nghiệm mới như thế nào? Ta bắt đầu từ hệ thức cơ bản và quy tắc biến đổi tương đương. Phân tích thành tích chỉ tương đương nếu không chia cho biểu thức có thể bằng 0. Nếu khử mẫu/biến đổi căn cần giữ điều kiện ban đầu rồi thử lại. Một tích bằng 0 cho hợp các họ nghiệm của từng thừa số; không vứt một nhánh.

Chẳng hạn, Sinx(2cosx−1)=0 ⇒ sinx=0 hoặc cosx=1/2, nên x=kπ hoặc x=±π/3+2kπ. Không được chia cả hai vế cho sinx vì mất x=kπ.

**Ví dụ**

**Đề bài.** Giải \(2\sin x\cos x=\cos x\) mà không chia cho cos.

**Lời giải.** \(\cos x(2\sin x-1)=0\). Do đó \(x=\pi/2+k\pi\) hoặc \(x=\pi/6+2k\pi\) hoặc \(x=5\pi/6+2k\pi\), \(k\in\mathbb Z\). Chia cho cos sẽ làm mất cả họ đầu.

**Vận dụng**

Giải 2sinx cosx=0.

<details markdown="1"><summary>Đối chiếu</summary>

x=kπ/2, k∈ℤ; hoặc sinx=0 (kπ) hoặc cosx=0 (π/2+kπ).

Nếu đang muốn chia cho sinx, tách trường hợp sinx=0 trước. Luyện THPT-G11-B04-P01/P02/P08 và THPT-TOP06-P14.

</details>

<!-- LESSON_ID: TOP06-M15; OUTCOME_ID: TOP06-O15; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

#### 4.4. Lọc nghiệm theo khoảng

Đoạn [0,2π) có lấy góc 2π không?

Nghiệm tổng quát cần lọc khi chỉ xét một khoảng hữu hạn. Một họ nghiệm có vô hạn số nguyên k, nhưng bài toán chỉ chọn khoảng nhất định. Cần nhớ bất đẳng thức, khoảng mở/đóng và hàm lượng giác. Giải trên ℝ trước, sau đó lọc k theo khoảng hoặc xét trực tiếp các góc trên đường tròn trong [a,b]. Với [a,b) chỉ lấy a nếu thỏa, loại b; tránh đếm hai góc 0 và 2π là hai nghiệm khác nhau khi khoảng nửa mở.

Chẳng hạn, 2sin²x−3sinx+1=0 ⇒ (2sinx−1)(sinx−1)=0. Với [0,2π): x=π/6,5π/6,π/2, tổng 3 nghiệm. Không thêm 2π vì không thuộc khoảng.

**Ví dụ**

**Đề bài.** Giải \(\cos2x=1/2\) trên \([0,2\pi)\).

**Lời giải.** Trên toàn trục \(x=\pm\pi/6+k\pi\). Chọn \(0\le x<2\pi\) cho bốn nghiệm \(\pi/6,5\pi/6,7\pi/6,11\pi/6\). Không tự thêm điểm mút bị loại.

**Vận dụng**

Giải sinx=0 trên [0,2π).

<details markdown="1"><summary>Đối chiếu</summary>

x=0,π; loại 2π.

Vẽ dãy nghiệm trên trục số và đánh dấu đầu mút; luyện THPT-G11-B04-P06/P07 và THPT-TOP06-P15.

</details>

<!-- LESSON_ID: TOP06-M16; OUTCOME_ID: TOP06-O16; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

#### 4.5. Chu kỳ trong mô hình có giới hạn

Nghiệm của mô hình ngoài miền thời gian có hợp lệ không?

Mô hình tuần hoàn thực tế còn có giới hạn thời gian và đơn vị phải kiểm. Sóng, thủy triều và nhiệt độ thay đổi trong thời gian hữu hạn có thể mô tả bằng công thức nào? Để xác định điều đó, cần xét đồ thị sin/cos, chu kỳ, đơn vị thời gian. Mô hình h(t)=d+Acos(ωt+φ) có điều kiện miền t thực tế, mức nền d, biên độ |A|, chu kỳ 2π/|ω| khi ω≠0. Dữ liệu thực không nhất thiết đúng sinus lý tưởng; phải phân biệt mô hình giả định với kết luận về thế giới.

Chẳng hạn, Mực nước giả định h(t)=3+1,2cos(πt/6) (m), 0≤t≤24 h. Chu kỳ 12 h; h(0)=4,2 m; h(6)=1,8 m; lần đầu đạt mức nền h=3 m khi t=3 h. Đây chỉ là mô hình luyện toán, không phải dự báo thật.

**Ví dụ**

**Đề bài.** Mô hình \(h(t)=2+0{,}5\cos(\pi t/4)\) m, \(0\le t\le12\) giờ. Tính chu kỳ, cực đại/cực tiểu trong miền.

**Lời giải.** Chu kỳ \(T=2\pi/(\pi/4)=8\) giờ. Cực đại \(2{,}5\) m tại \(t=0,8\); cực tiểu \(1{,}5\) m tại \(t=4,12\). Những thời điểm ngoài miền không được nhận; đây là mô hình giả định.

**Vận dụng**

Trong mô hình đó, h(12) bằng bao nhiêu?

<details markdown="1"><summary>Đối chiếu</summary>

4,2 m, vì cos2π=1.

Nếu đếm chu kỳ sai, so pha ở t=0 và t=12; nếu viết t<0 ngoài phạm vi thì đọc miền. Luyện THPT-G11-B03-P08, THPT-G11-B04-P09 và THPT-TOP06-P16.

</details>

## 2. Luyện tập

Hãy làm trước khi mở **Lời giải**. Nhớ phân biệt tia cuối và số vòng, kiểm điều kiện tan/cot, viết đủ họ nghiệm và lọc mút khoảng. Với tự luận, tự chấm theo rubric sau khi hoàn thành.

### Góc có hướng và đường tròn đơn vị

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B01-C01; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O01; NOT_NEW_BANK -->

#### Bài 1

Đổi góc 135° sang radian và xác định góc nằm ở góc phần tư nào trong [0,2π).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 3π/4 rad; góc phần tư II.

135°×π/180°=3π/4. Vì π/2<3π/4<π nên góc ở góc phần tư II.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B01-C02; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O02; NOT_NEW_BANK -->

#### Bài 2

Tính sin(5π/6), cos(5π/6), tan(5π/6) và cot(5π/6).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 1/2; −√3/2; −√3/3; −√3.

sin(5π/6)=1/2, cos(5π/6)=−√3/2. Vì cos và sin đều khác 0, tan=(1/2)/(−√3/2)=−√3/3; cot=−√3.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B01-P02; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O03; NOT_NEW_BANK -->

#### Bài 3

Rút gọn góc 765° về góc cùng phương trong [0°,360°), rồi tính sin 765°.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 45°; sin 765°=√2/2.

765°−2×360°=45°. sin(765°)=sin(45°)=√2/2 do chu kì 360°.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B01-P03; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O03; NOT_NEW_BANK -->

#### Bài 4

Một cung của đường tròn có bán kính 12 cm chắn góc ở tâm 5π/6 rad. Tính độ dài cung.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 10π cm.

s=12×5π/6=10π cm. Góc theo radian nên không cần nhân thêm π/180.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHI-W01; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O03; NOT_NEW_BANK -->

#### Bài 5

Một điểm M xuất phát tại A=(20;0) trên đường tròn tâm O bán kính 20 cm, chuyển động ngược chiều kim đồng hồ một góc 5π/3 rad. (a) Tính độ dài cung đã đi. (b) Tìm tọa độ M và giải thích dấu tung độ. (c) Tính khoảng cách thẳng AM để so sánh với độ dài đường đi.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** s=100π/3 cm; M=(10;−10√3) cm; AM=20 cm.

s=Rα=20·5π/3=100π/3 cm. cos5π/3=1/2; sin5π/3=−√3/2 nên M=(10;−10√3). AM=√[(10−20)²+(−10√3)²]=20 cm. Độ dài cung lớn hơn dây.

**Rubric tự đối chiếu:**

7 điểm: góc và đơn vị rad 1; công thức cung 1; tính s đúng 1; hoành độ 1; tung độ và dấu 1; AM=20 đúng 1; giải thích cung vs dây 1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP06-P01; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O01; NOT_NEW_BANK -->

#### Bài 6

Một góc quay −450°. Đổi sang radian, xác định tọa độ tia cuối.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** −5π/2; (0,−1).

−450×π/180=−5π/2; cộng 2π được −π/2, tia cuối tại (0,−1). Không thay góc quay ban đầu bằng góc đại diện nếu bài hỏi số vòng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP06-P02; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O02; NOT_NEW_BANK -->

#### Bài 7

Sinα=4/5, α thuộc góc phần tư II. Tìm cosα, tanα.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** −3/5; −4/3.

cos²α=1−16/25=9/25; cos âm ở góc II nên cos=−3/5; tan=sin/cos=−4/3 vì cos khác 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP06-P03; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O03; NOT_NEW_BANK -->

#### Bài 8

Bánh xe bán kính 7 cm quay −120°. Độ dời cung có hướng và quãng đường trên vành bánh?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** −14π/3 cm; 14π/3 cm.

−120°=−2π/3 rad. rθ=−14π/3, r|θ|=14π/3. Độ dài quãng đường không âm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP06-W01; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O02; NOT_NEW_BANK -->

#### Bài 9

α thuộc góc phần tư II và cosα=−5/13. (a) Tìm sinα, tanα kèm dấu. (b) Với β=π−α, tìm sinβ,cosβ và giải thích đối xứng. (c) Nêu điểm loại của tan và cot nói chung.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** sinα=12/13; tanα=−12/5; sinβ=12/13; cosβ=5/13; tan loại cos=0, cot loại sin=0.

Vì α ở II, sinα>0. sin²α=1−25/169=144/169 ⇒ sinα=12/13; tanα=(12/13)/(−5/13)=−12/5. β phản xạ α qua Oy nên giữ sin và đổi dấu cos. Tan/cot chỉ là thương khi mẫu khác 0.

**Rubric tự đối chiếu:**

1. Dấu góc phần tư (1đ)
2. Tính sin đúng (1đ)
3. Tính tan và điều kiện (1đ)
4. Giải thích đối xứng (1đ)
5. Tính sinβ (1đ)
6. Tính cosβ (1đ)
7. Nêu đúng cả hai miền loại (1đ)

</details>

### Công thức lượng giác

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B01-P01; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O04; NOT_NEW_BANK -->

#### Bài 10

Biết sin α=3/5 và π/2<α<π. Tính cos α và tan α.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** cos α=−4/5; tan α=−3/4.

cos²α=1−9/25=16/25. α ở góc phần tư II nên cos α=−4/5. tan α=sin α/cos α=−3/4.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B01-P04; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O04; NOT_NEW_BANK -->

#### Bài 11

Biết tan α=−2 và cos α>0. Tính sin α, cos α và cot α.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** sin α=−2√5/5; cos α=√5/5; cot α=−1/2.

1+tan²α=5 ⇒ cos²α=1/5. cos α=1/√5, sin α=tan α·cos α=−2/√5, cot α=1/tan α=−1/2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B02-C01; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O06; NOT_NEW_BANK -->

#### Bài 12

Dùng công thức hiệu để tính sin(π/3−π/6).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 1/2.

sin(π/3−π/6)= (√3/2)(√3/2)−(1/2)(1/2)=3/4−1/4=1/2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B02-C02; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O07; NOT_NEW_BANK -->

#### Bài 13

Dùng công thức góc nhân đôi để tính cos(2π/3) từ cos(π/3).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** −1/2.

cos(2π/3)=2(1/2)²−1=−1/2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B02-P01; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O06; NOT_NEW_BANK -->

#### Bài 14

Tính chính xác sin 75° mà không dùng máy tính.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** (√6+√2)/4.

sin75°=sin45°cos30°+cos45°sin30°=√2/2·√3/2+√2/2·1/2=(√6+√2)/4.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B02-P02; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O06; NOT_NEW_BANK -->

#### Bài 15

Tính chính xác cos 75° bằng công thức cộng.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** (√6−√2)/4.

cos75°=√2/2·√3/2−√2/2·1/2=(√6−√2)/4.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B02-P03; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O06; NOT_NEW_BANK -->

#### Bài 16

Không tính riêng các góc, rút gọn E=sin20°cos40°+cos20°sin40°.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** √3/2.

E=sin(20°+40°)=sin60°=√3/2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B02-P04; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O07; NOT_NEW_BANK -->

#### Bài 17

Dùng công thức biến đổi tích thành tổng để tính 2sin75°sin15°.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 1/2.

2sin75°sin15°=cos60°−cos90°=1/2−0=1/2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B02-P05; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O07; NOT_NEW_BANK -->

#### Bài 18

Dùng công thức biến đổi tổng thành tích để tính sin75°+sin15°.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** √6/2.

sin75°+sin15°=2sin45°cos30°=2·√2/2·√3/2=√6/2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B02-P06; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O07; NOT_NEW_BANK -->

#### Bài 19

Cho góc α có sin α=3/5 và cos α=4/5. Tính sin2α và cos2α.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** sin2α=24/25; cos2α=7/25.

sin2α=2·3/5·4/5=24/25; cos2α=16/25−9/25=7/25.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B01-P05; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O05; NOT_NEW_BANK -->

#### Bài 20

Cho góc θ ở góc phần tư II có sin θ=4/5 và cos θ=−3/5. Không tìm θ, hãy tính sin(π−θ), cos(π+θ), sin(−θ).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 4/5; 3/5; −4/5.

sin(π−θ)=sin θ=4/5; cos(π+θ)=−cos θ=3/5; sin(−θ)=−sin θ=−4/5.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B02-P07; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O06; NOT_NEW_BANK -->

#### Bài 21

Biết tan u=1/2 và tan v=1/3, trong đó tan u và tan v đều xác định. Tính tan(u+v) nếu biểu thức xác định.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 1.

1−(1/2)(1/3)=5/6≠0 nên tan(u+v) xác định. tan(u+v)=(1/2+1/3)/(1−1/6)=(5/6)/(5/6)=1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHI-W02-ANCHOR; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O07; NOT_NEW_BANK -->

#### Bài 22

Với các góc u,v bất kỳ, chứng minh sin(u+v)sin(u−v)=sin²u−sin²v. Sau đó áp dụng u=π/4, v=π/12 để tính sin(π/3)sin(π/6) bằng hai cách và giải thích vì sao hai cách trùng nhau.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** Đẳng thức đúng; sin(π/3)sin(π/6)=√3/4.

Theo biến đổi tích thành tổng: sin(u+v)sin(u−v)=[cos(2v)−cos(2u)]/2=(1−2sin²v−1+2sin²u)/2=sin²u−sin²v. Với u=π/4, v=π/12, vế trái=sinπ/3·sinπ/6=√3/4. Vế phải=sin²π/4−sin²π/12=1/2−(2−√3)/4=√3/4. Hai cách bằng nhau do đẳng thức tổng quát.

**Rubric tự đối chiếu:**

7 điểm: đổi A=u+v B=u−v đúng 1; áp dụng công thức đúng 2; rút gọn đẳng thức 1; tính trực tiếp √3/4 1; tính sin²π/12 đúng 1; giải thích nhất quán 1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP06-P04; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O04; NOT_NEW_BANK -->

#### Bài 23

F(x)=sinx/(1+cosx). Tìm miền ban đầu và biểu thức rút gọn.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x≠(2k+1)π; F=tan(x/2) trên miền đó.

Dùng sinx=2sin(x/2)cos(x/2), 1+cosx=2cos²(x/2), rút gọn chỉ khi cos(x/2) khác 0. Miền ban đầu loại x=(2k+1)π.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP06-P05; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O05; NOT_NEW_BANK -->

#### Bài 24

α=π/3. Tìm sin(π−α), cos(π−α) và giải thích dấu.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** √3/2; −1/2.

π−α=2π/3; đối xứng qua Oy giữ tung độ, đổi dấu hoành độ: sin=√3/2, cos=−1/2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP06-P06; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O06; NOT_NEW_BANK -->

#### Bài 25

Chứng minh sin(u+v)−sin(u−v)=2cosu sinv.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 2cosu sinv.

Khai triển cả hai công thức cộng/trừ: sinucosv+cosusinv −(sinucosv−cosusinv)=2cosusinv.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP06-P07; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O07; NOT_NEW_BANK -->

#### Bài 26

Đưa cos(5x)−cos(x) về tích.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** −2sin3x sin2x.

cosA−cosB=−2sin((A+B)/2)sin((A−B)/2); dùng A=5x,B=x cho nửa tổng 3x, nửa hiệu 2x.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP06-W02; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O07; NOT_NEW_BANK -->

#### Bài 27

Giải cos3x+cosx=0 trên [0,2π). Lý giải vì sao dùng tổng–tích, liệt kê nghiệm hai nhánh và kiểm biên.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** {π/4,π/2,3π/4,5π/4,3π/2,7π/4}.

cos3x+cosx=2cos2x cosx. Nhánh cos2x=0 cho x=π/4+kπ/2, trong khoảng có π/4,3π/4,5π/4,7π/4. Nhánh cosx=0 cho π/2,3π/2. Sáu nghiệm không trùng và thuộc [0,2π).

**Rubric tự đối chiếu:**

1. Nêu lý do chọn tổng–tích (1đ)
2. Biến đổi đúng (1đ)
3. Giải họ cos2x (1đ)
4. Lọc đủ 4 nghiệm họ 1 (1đ)
5. Giải họ cosx (1đ)
6. Lọc 2 nghiệm họ 2 (1đ)
7. Kiểm biên/trùng và thế lại (1đ)

</details>

### Hàm lượng giác và đồ thị

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B03-C01; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O08; NOT_NEW_BANK -->

#### Bài 28

TXĐ của y=tan x là gì?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** ℝ \ {π/2+kπ:k∈ℤ}.

tan x chỉ xác định khi cos x≠0; cos x=0 tại π/2+kπ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B03-C02; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O09; NOT_NEW_BANK -->

#### Bài 29

Cho bốn hàm sin x, cos x, tan x, cot x. Hàm nào chẵn, hàm nào lẻ trên TXĐ?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** cos x chẵn; sin x, tan x, cot x lẻ.

Dùng sin(-x)=-sinx, cos(-x)=cosx, tan(-x)=-tanx, cot(-x)=-cotx; các TXĐ đối xứng qua 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B03-C03; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O09; NOT_NEW_BANK -->

#### Bài 30

Chu kỳ cơ bản của y=sin x và y=tan x là bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** sin: 2π; tan: π.

sin(x+2π)=sinx; tan(x+π)=tanx và hai số lần lượt là chu kỳ dương nhỏ nhất.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B03-C04; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O10; NOT_NEW_BANK -->

#### Bài 31

Tìm tập giá trị và các điểm cực đại của y=sin x.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** TGT [-1,1]; max 1 tại x=π/2+2kπ, k∈ℤ.

Đọc đồ thị sin và tính tuần hoàn: sin x≤1, bằng 1 tại π/2+2kπ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B03-P01; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O08; NOT_NEW_BANK -->

#### Bài 32

Tìm TXĐ của y=cot(2x).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** ℝ \ {kπ/2:k∈ℤ}.

cot(2x) chỉ xác định nếu sin(2x)≠0, nên 2x≠kπ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B03-P02; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O10; NOT_NEW_BANK -->

#### Bài 33

Tìm tập giá trị của f(x)=1+2sin x.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** [-1,3].

-1≤sinx≤1; nhân 2 cộng 1 cho -1≤f≤3. Hai cận đều đạt.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B03-P03; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O09; NOT_NEW_BANK -->

#### Bài 34

Tìm chu kỳ cơ bản của f(x)=3cos(4x-π/3).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** π/2.

Hàm cos theo đối số có chu kỳ 2π; 4T=2π nên T=π/2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B03-P04; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O10; NOT_NEW_BANK -->

#### Bài 35

y=sinx đồng biến trên đoạn nào: [-π/2,π/2] hay [0,π]?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** [-π/2,π/2].

sin tăng trên [-π/2,π/2]; trên [0,π] tăng rồi giảm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B03-P05; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O10; NOT_NEW_BANK -->

#### Bài 36

Trên [0,2π], nghiệm cos x=0 gồm những hoành độ nào?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** π/2 và 3π/2.

Đồ thị cos cắt trục Ox tại π/2+kπ; chỉ giữ k=0,1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B03-P06; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O11; NOT_NEW_BANK -->

#### Bài 37

Nêu hai tiệm cận đứng của y=tanx kề trục tung.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x=-π/2 và x=π/2.

Tại cosx=0, tan không xác định và giá trị một phía không bị chặn.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B03-P07; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O11; NOT_NEW_BANK -->

#### Bài 38

Trên (0,π), y=cot x đồng biến hay nghịch biến?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Nghịch biến.

Trên (0,π), đồ thị cot đi liên tục từ +∞ xuống -∞; tương tự trên (kπ,(k+1)π). Không cần dùng đạo hàm (học ở chương sau).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP06-P08; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O08; NOT_NEW_BANK -->

#### Bài 39

Tìm miền của y=1/(1−2sinx).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** ℝ trừ các điểm π/6+2kπ và 5π/6+2kπ.

Mẫu khác 0 ⇔ sinx≠1/2. Hai họ nghiệm sinx=1/2 bị loại; mọi giá trị khác hợp lệ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP06-P09; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O09; NOT_NEW_BANK -->

#### Bài 40

Tìm chu kỳ dương cơ bản của f(x)=sin2x+sin4x.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** π.

Tăng x thêm π khiến hai thành phần có góc tăng 2π,4π. Đặt y=2x: siny+sin2y có tần số 1 không triệt tiêu nên chu kỳ cơ bản theo y là 2π, theo x là π.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP06-P10; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O10; NOT_NEW_BANK -->

#### Bài 41

h(t)=3−2cos(πt/4). Tìm chu kỳ, tập giá trị, h(0),h(4).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** 8; [1,5]; 1; 5.

ω=π/4 nên T=8. Vì cos∈[−1,1], h∈[1,5]. Thế t=0: h=1; t=4: cosπ=−1 nên h=5.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP06-P11; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O11; NOT_NEW_BANK -->

#### Bài 42

y=tan(3x): miền xác định và chu kỳ cơ bản?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x≠π/6+kπ/3; T=π/3.

Không xác định khi cos3x=0 ⇒ 3x=π/2+kπ. Chu kỳ theo đối số là π nên theo x là π/3.

</details>

### Giải phương trình và mô hình theo thời gian

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B03-P08; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O16; NOT_NEW_BANK -->

#### Bài 43

T(t)=24+3cos(πt/6) (°C, t giờ). Chu kỳ, cao nhất và thấp nhất?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** T=12 giờ; max 27°C; min 21°C.

ω=π/6 nên T=2π/(π/6)=12; vì cos∈[-1,1], T(t)∈[21,27].

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B04-C01; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O12; NOT_NEW_BANK -->

#### Bài 44

Giải sin x=-1/2 trên ℝ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x=-π/6+2kπ hoặc x=7π/6+2kπ, k∈ℤ.

sin(-π/6)=-1/2, sin(7π/6)=-1/2; đó là hai nhánh trong một vòng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B04-C02; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O12; NOT_NEW_BANK -->

#### Bài 45

Giải cos x=1/2 trên ℝ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x=±π/3+2kπ, k∈ℤ.

cos(±π/3)=1/2, chu kỳ 2π.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B04-C03; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O13; NOT_NEW_BANK -->

#### Bài 46

Giải tan x=-1 trên ℝ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x=-π/4+kπ, k∈ℤ.

tan(-π/4)=-1; tan có chu kỳ π, mọi nghiệm hợp lệ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B04-C04; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O13; NOT_NEW_BANK -->

#### Bài 47

Giải cot x=1 trên ℝ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x=π/4+kπ, k∈ℤ.

cot(π/4)=1; chu kỳ π và sin khác 0 tại các nghiệm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B04-P01; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O14; NOT_NEW_BANK -->

#### Bài 48

Giải sin(2x)=1/2 trên ℝ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x=π/12+kπ hoặc x=5π/12+kπ, k∈ℤ.

Đặt t=2x: t=π/6+2kπ hoặc 5π/6+2kπ. Chia cả hai họ cho 2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B04-P02; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O14; NOT_NEW_BANK -->

#### Bài 49

Giải 2cos(x-π/6)=√3 trên ℝ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x=2kπ hoặc x=π/3+2kπ, k∈ℤ.

cos(x-π/6)=√3/2 nên x-π/6=±π/6+2kπ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B04-P03; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O14; NOT_NEW_BANK -->

#### Bài 50

Giải tan(3x)=√3 trên ℝ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x=π/9+kπ/3, k∈ℤ.

3x=π/3+kπ, sau đó chia 3.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B04-P04; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O14; NOT_NEW_BANK -->

#### Bài 51

Giải cos(2x)=cosx trên ℝ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x=2kπ/3, k∈ℤ.

2cos²x-cosx-1=(2cosx+1)(cosx-1)=0; x=2kπ hoặc ±2π/3+2kπ; hợp hai tập bằng 2kπ/3.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B04-P05; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O14; NOT_NEW_BANK -->

#### Bài 52

Giải sinx=sin(3x) trên ℝ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x=kπ hoặc x=π/4+kπ/2, k∈ℤ.

sin A=sin B khi A=B+2kπ hoặc A=π-B+2kπ. Nhánh x=3x+2kπ cho x=-kπ, tức mọi kπ. Nhánh x=π-3x+2kπ cho 4x=π+2kπ, tức x=π/4+kπ/2. Không chia hai vế cho sinx.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B04-P06; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O15; NOT_NEW_BANK -->

#### Bài 53

Giải sinx=1/2 trên [0,2π).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** {π/6,5π/6}.

Nghiệm tổng quát π/6+2kπ hoặc 5π/6+2kπ; chỉ k=0 cho nghiệm thuộc khoảng yêu cầu, 2π bị loại.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B04-P07; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O15; NOT_NEW_BANK -->

#### Bài 54

Giải cos(2x)=0 trên [0,π].

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** {π/4,3π/4}.

2x=π/2+kπ, nên x=π/4+kπ/2; k=0,1 thỏa đoạn đóng [0,π].

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B04-P08; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O14; NOT_NEW_BANK -->

#### Bài 55

Giải tanx=tan(2x) trên ℝ, ghi rõ TXĐ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x=kπ, k∈ℤ.

Phải có cosx≠0 và cos2x≠0. Khi đó tanA=tanB ⇔ A=B+kπ; x=2x+kπ ⇔ x=-kπ. Các x=kπ đều thuộc TXĐ và thế lại hai vế cùng bằng 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B04-P09; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O16; NOT_NEW_BANK -->

#### Bài 56

Mực nước H(t)=10+2sin(πt/6), với 0≤t<12 (giờ), bằng 11 lúc mấy giờ?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** t=1 và t=5 (giờ).

sin(πt/6)=1/2; đối số trong [0,2π). Hai nghiệm πt/6=π/6 hoặc 5π/6, nên t=1 hoặc 5.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-B04-P10; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O12; NOT_NEW_BANK -->

#### Bài 57

Với m∈ℝ, điều kiện nào để sinx=m có nghiệm thực?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** -1≤m≤1.

Giá trị sinx thuộc [-1,1] nên điều kiện cần |m|≤1; ngược lại mọi m trong đoạn đều đạt được trên đường tròn lượng giác.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHI-W03; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O16; NOT_NEW_BANK -->

#### Bài 58

Với y=2sin(3x+π/6)-1, xác định chu kỳ cơ bản, tập giá trị, mọi điểm đạt cực đại và cực tiểu trên ℝ.

<details markdown="1"><summary>Lời giải và rubric</summary>

Biên độ 2, đường trung bình -1. Chu kỳ T=2π/3, giá trị từ -3 đến 1. Cực đại y=1 khi 3x+π/6=π/2+2kπ, tức x=π/9+2kπ/3; cực tiểu y=-3 khi 3x+π/6=3π/2+2kπ, tức x=4π/9+2kπ/3; k∈ℤ.

**Rubric tự đối chiếu:**

đúng chu kỳ (1đ); biên độ/đường trung bình (1đ); tập giá trị (1đ); đặt phương trình cho cực đại (1đ); nghiệm cực đại đủ họ (1đ); đặt phương trình cực tiểu (1đ); nghiệm cực tiểu đủ họ (1đ).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHI-W04-ANCHOR; ORIGINAL_BLOB: 256ceb5edc5e02aec320e83e99c8e08e035654f3; OUTCOME: TOP06-O14; NOT_NEW_BANK -->

#### Bài 59

Giải cos(2x)=sin x trên đoạn [0,2π) bằng công thức cos(2x) và kiểm tra tất cả nghiệm.

<details markdown="1"><summary>Lời giải và rubric</summary>

Đặt s=sin x. 1-2s²=s ⇔ 2s²+s-1=0 ⇔ s=1/2 hoặc s=-1. Với s=1/2 được x=π/6,5π/6; với s=-1 được x=3π/2, tất cả trong [0,2π) và đều thỏa phương trình ban đầu.

**Rubric tự đối chiếu:**

biến đổi cos2x đúng (1đ), lập phương trình theo s (1đ), phân tích & tìm s=1/2 (1đ), tìm s=-1 (1đ), hai nghiệm sinx=1/2 trên đoạn (1đ), nghiệm sinx=-1 (1đ), thử lại & kết luận tập ba nghiệm (1đ). Anchor chỉ là nhãn của Written này, không tạo ngân hàng Anchor riêng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP06-P12; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O12; NOT_NEW_BANK -->

#### Bài 60

Giải cos(3x)=−1/2 trên ℝ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x=±2π/9+2kπ/3.

3x=±2π/3+2kπ ⇒ chia 3 cả hai vế và kπ để được hai họ nghiệm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP06-P13; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O13; NOT_NEW_BANK -->

#### Bài 61

Giải cot(2x)=1 và kiểm điều kiện.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x=π/8+kπ/2.

Cotθ=1 ⇔ θ=π/4+kπ, nên x=π/8+kπ/2. Tại nghiệm sin2x=±√2/2 khác 0, cot xác định.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP06-P14; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O14; NOT_NEW_BANK -->

#### Bài 62

Giải sinx/(1−cosx)=0 trên ℝ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x=(2k+1)π.

Miền x≠2kπ vì mẫu bằng 0 ở đó. Tử sinx=0 tại kπ; giao miền chỉ còn các k lẻ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP06-P15; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O15; NOT_NEW_BANK -->

#### Bài 63

Giải cosx=−1/2 trên [−π,π).

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** −2π/3; 2π/3.

Trong một vòng cosx=−1/2 tại ±2π/3; cả hai thuộc khoảng. ±π không thỏa.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP06-P16; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O16; NOT_NEW_BANK -->

#### Bài 64

Mô hình h(t)=20+6sin(πt/12) với 0≤t≤24. Tìm chu kỳ, max/min và khoảng h>20.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** T=24; max26 tại t=6; min14 tại t=18; h>20 khi 0<t<12.

ω=π/12 ⇒ T=24. Pha đạt π/2 ở t=6, 3π/2 ở t=18. Sin dương trên (0,π) tương ứng t∈(0,12).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP06-W03; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O14; NOT_NEW_BANK -->

#### Bài 65

Giải cos2x=sinx trên [0,2π). Đặt t=sinx, giải đa thức, liệt kê và kiểm nghiệm.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** {π/6,5π/6,3π/2}.

cos2x=1−2sin²x, t=sinx∈[−1,1]. 1−2t²=t ⇔ 2t²+t−1=0 ⇔ (2t−1)(t+1)=0. t=1/2 cho π/6,5π/6; t=−1 cho 3π/2. Cả ba thỏa phương trình gốc, không có π/2.

**Rubric tự đối chiếu:**

1. Biến đổi cos2x (1đ)
2. Đặt t và miền (1đ)
3. Giải t đúng (1đ)
4. Hai nghiệm sin=1/2 (1đ)
5. Một nghiệm sin=−1 (1đ)
6. Lọc [0,2π) (1đ)
7. Thử lại phương trình gốc (1đ)

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP06-W04; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O16; NOT_NEW_BANK -->

#### Bài 66

Nhiệt độ giả định h(t)=10+2sin(π(t−6)/12) °C, 0≤t≤24 giờ. Tìm nền, biên độ, chu kỳ, max/min và t khi h=10; nêu giới hạn của mô hình.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** Nền10°C, biên độ2°C,T24h; max12°C t12; min8°C t0,24; h=10 tại t6,18.

T=2π/(π/12)=24. Sin bằng 1 khi t=12, bằng −1 khi t=0 hoặc24. Sin=0 khi t=6+12k; trong miền k=0,1 nên t=6,18. Đây là mô hình giả định, không phải phép đo hoặc dự báo chắc chắn.

**Rubric tự đối chiếu:**

1. Nền và biên độ (1đ)
2. T và đơn vị (1đ)
3. Max và thời điểm (1đ)
4. Min đủ 2 biên (1đ)
5. Nghiệm h=10 (1đ)
6. Lọc đúng miền (1đ)
7. Giới hạn ứng dụng (1đ)

</details>

## 3. Tự kiểm tra

Hãy tự giải đủ 16 câu sau, trước khi trở lại phần Luyện tập để đối chiếu. Đây là các câu công khai đã gặp, để em phát hiện sai sót chứ **không phải** bài đánh giá năng lực độc lập. Hoàn thành rồi hãy kiểm dấu, miền, chu kỳ, nghiệm biên và quay về phần Kiến thức có liên quan để luyện lại.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP06-P01; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O01; NO_MASTERY; NOT_RD1 -->

**Câu 1.** Một góc quay −450°. Đổi sang radian, xác định tọa độ tia cuối.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP06-P02; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O02; NO_MASTERY; NOT_RD1 -->

**Câu 2.** Sinα=4/5, α thuộc góc phần tư II. Tìm cosα, tanα.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP06-P03; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O03; NO_MASTERY; NOT_RD1 -->

**Câu 3.** Bánh xe bán kính 7 cm quay −120°. Độ dời cung có hướng và quãng đường trên vành bánh?

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP06-P04; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O04; NO_MASTERY; NOT_RD1 -->

**Câu 4.** F(x)=sinx/(1+cosx). Tìm miền ban đầu và biểu thức rút gọn.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP06-P05; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O05; NO_MASTERY; NOT_RD1 -->

**Câu 5.** α=π/3. Tìm sin(π−α), cos(π−α) và giải thích dấu.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP06-P06; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O06; NO_MASTERY; NOT_RD1 -->

**Câu 6.** Chứng minh sin(u+v)−sin(u−v)=2cosu sinv.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP06-P07; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O07; NO_MASTERY; NOT_RD1 -->

**Câu 7.** Đưa cos(5x)−cos(x) về tích.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP06-P08; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O08; NO_MASTERY; NOT_RD1 -->

**Câu 8.** Tìm miền của y=1/(1−2sinx).

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP06-P09; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O09; NO_MASTERY; NOT_RD1 -->

**Câu 9.** Tìm chu kỳ dương cơ bản của f(x)=sin2x+sin4x.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP06-P10; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O10; NO_MASTERY; NOT_RD1 -->

**Câu 10.** h(t)=3−2cos(πt/4). Tìm chu kỳ, tập giá trị, h(0),h(4).

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP06-P11; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O11; NO_MASTERY; NOT_RD1 -->

**Câu 11.** y=tan(3x): miền xác định và chu kỳ cơ bản?

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP06-P12; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O12; NO_MASTERY; NOT_RD1 -->

**Câu 12.** Giải cos(3x)=−1/2 trên ℝ.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP06-P13; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O13; NO_MASTERY; NOT_RD1 -->

**Câu 13.** Giải cot(2x)=1 và kiểm điều kiện.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP06-P14; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O14; NO_MASTERY; NOT_RD1 -->

**Câu 14.** Giải sinx/(1−cosx)=0 trên ℝ.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP06-P15; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O15; NO_MASTERY; NOT_RD1 -->

**Câu 15.** Giải cosx=−1/2 trên [−π,π).

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP06-P16; ORIGINAL_BLOB: f83b285ff0c8f4e45b724cf06248935e5d618b65; OUTCOME: TOP06-O16; NO_MASTERY; NOT_RD1 -->

**Câu 16.** Mô hình h(t)=20+6sin(πt/12) với 0≤t≤24. Tìm chu kỳ, max/min và khoảng h>20.

Học liệu tham khảo SGK Toán 11, Tập Một, Chương I (Bài 1–4), bộ Kết nối tri thức với cuộc sống.
