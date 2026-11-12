<!-- AUTHORING R03 CANDIDATE: Continuous concept arcs, original R01 preserved, holistic Q18/owner verdict pending. -->
<!-- AUTHORING CANDIDATE R02 / DELTA_C_ACADEMIC_MATERIAL / NOT CONTENT_READY. R01 immutable; holistic source QA and owner learner UX review required before activation. -->
# CĐ04 — Lũy thừa, Mũ và Lôgarit · Biên tập liền mạch R02 (ứng viên)

**Hành trình học theo chuyên đề CĐ04/22 — độc lập với hành trình SGK.** Có đúng ba trang **Kiến thức / Luyện tập / Tự kiểm tra**, không sinh Topic Core riêng. Các mục tiêu xây từ ý nghĩa lũy thừa và logarit, liên hệ hàm số và mô hình, không phải thứ tự B18–B21 trong SGK lớp 11.

## Câu hỏi lớn: Một đại lượng được nhân lặp lại thì tìm 'bao nhiêu lần' như thế nào?

Cùng một số tiền hoặc số lượng nếu liên tục tăng theo tỉ lệ sẽ thay đổi theo **lũy thừa**. Muốn tìm số kỳ để đạt ngưỡng, ta cần phép **logarit** — thao tác tìm số mũ. Hai hàm mũ và logarit là hai mặt của cùng một quan hệ; đồ thị giải thích tính tăng giảm và vì sao bất phương trình có thể đổi chiều. Trong CĐ04, học sinh tự học từ khái niệm → điều kiện → suy luận → tự thử → luyện tập → tự đối chiếu.

**Cầu nối bắt buộc ngay trong chuyên đề:** số thực ℝ, phép nhân, phân số và số mũ nguyên; căn bậc chẵn không âm; giải phương trình bậc nhất/bậc hai và dấu tích; điểm trên trục tọa độ; phần trăm và đại lượng theo kỳ. Các tiền đề được nhắc và dùng lại ngay ở module liên quan, không bắt người học sang SGK để tiếp tục.

**Điều kiện nền:** Với lũy thừa số mũ thực và logarit trong CĐ04, dùng cơ số a>0; log_a b còn yêu cầu a≠1 và b>0. Riêng biểu thức có phép chia phải bảo đảm mẫu khác 0; phương trình/bất phương trình chứa log còn cần điều kiện từng đối số dương trước khi giải. Không suy rộng quy tắc a^x cho mọi cơ số âm với x thực.

## Sơ đồ mạch tư duy

**Lũy thừa:** số mũ nguyên → căn/số mũ hữu tỉ → số mũ thực → luật biến đổi. **Lôgarit:** tìm số mũ → miền xác định → quy tắc log → đổi cơ số. **Hàm và phương trình:** hàm mũ/log, đơn điệu và hàm ngược → phương trình → bất phương trình → mô hình tăng trưởng/suy giảm và bài tổng hợp. Các phần này tự đủ; các liên kết sang CĐ05 (hàm số tổng quát) và CĐ03 (phương trình nền) chỉ là hỗ trợ.

## Từ phép nhân lặp đến lũy thừa

Số mũ giúp diễn tả gọn việc nhân nhiều lần, nhưng các công thức chỉ dùng an toàn khi hiểu dấu, cơ số và miền. Ta mở rộng dần từ mũ nguyên sang căn, mũ hữu tỉ và thực để thấy điều kiện xuất hiện từ đâu.

<!-- LESSON_ID: TOP04-M01; OUTCOME_ID: TOP04-O01 -->

Ta biết \(2^3=2\cdot2\cdot2=8\): số mũ dương đếm số lần nhân cùng một cơ số. Nhưng khi giảm số mũ đi một đơn vị, kết quả phải **chia cho cơ số**, không phải đổi dấu. Vì thế với \(a\ne0\), quy tắc tiếp nối tự nhiên là \(a^0=1\) và \(a^{-n}=1/a^n\) khi \(n\) là số nguyên dương. Điều kiện \(a\ne0\) rất quan trọng: \(0^{-1}\) sẽ là \(1/0\), không xác định.

Lấy \((2/3)^{-2}\). Số mũ âm yêu cầu lấy nghịch đảo rồi bình phương: \((3/2)^2=9/4\), vẫn là một số **dương**. Tương tự, số rất nhỏ \(0{,}0000075\) có thể viết thành \(7{,}5\cdot10^{-6}\); dấu trừ thuộc **số mũ**, không phải dấu của số. Trong ký hiệu khoa học chuẩn, phần hệ số phải có trị tuyệt đối từ 1 đến dưới 10.

![Đồ thị số mũ âm, bằng không và dương](../../content-drafts/svg/FIG-G11-CHVI-B18-01_R00.svg)

*Quan sát hình:* Quan sát các giá trị 2^x ở x=−2,−1,0,1,2: số mũ âm cho số dương nhỏ hơn 1, không phải kết quả âm.

<!-- LESSON_ID: TOP04-M02; OUTCOME_ID: TOP04-O02 -->

Số mũ hữu tỉ tiếp tục ý tưởng ấy nhưng phải xét kỹ căn bậc chẵn và căn bậc lẻ. Một phương trình x⁴=c có thể có hai nghiệm, trong khi ký hiệu căn bậc bốn chỉ cho một giá trị không âm. Trước hết, ta xuất phát từ căn bậc hai số học, nhân lũy thừa số nguyên. Với a>0, a^(m/n)=(ⁿ√a)^m (n nguyên dương), a^(−m/n)=1/a^(m/n). Căn bậc **chẵn** của a≥0 lấy căn không âm; căn bậc lẻ của số âm tồn tại. Với cơ số âm, không áp dụng tùy tiện bộ luật **số mũ thực của cơ số dương** sang mọi phân số.

Một ví dụ giúp kiểm chứng điều đó. 81^(3/4)=(⁴√81)³=3³=27. Nhưng ⁴√16=2 còn x⁴=16 có x=±2; lý do là ký hiệu căn và tập nghiệm phương trình có vai trò khác nhau.

<!-- LESSON_ID: TOP04-M03; OUTCOME_ID: TOP04-O03 -->

Từ các số mũ hữu tỉ, ta có thể mở rộng sang số mũ thực khi cơ số phù hợp. Số mũ thực mô tả tăng trưởng theo thời gian không nguyên; không thể chỉ hiểu là ‘nhân số nguyên lần’. Điểm tựa cho suy luận là lũy thừa hữu tỉ của cơ số dương, ý niệm xấp xỉ số thực. Với a>0 và x vô tỉ, a^x được định nghĩa nhất quán từ các lũy thừa hữu tỉ a^r khi r xấp xỉ x, qua giới hạn. Điều này không có nghĩa nhân a đúng ‘√2 lần’. Tính đơn điệu phụ thuộc cơ số a>1 hay 0<a<1; cơ số âm không mặc nhiên có a^x trên mọi x thực.

Hãy theo dõi cách giải này. Vì √2<3/2 và 2>1, 2^(√2)<2^(3/2); còn vì 0<1/2<1, (1/2)^(√2)>(1/2)^(3/2). Cùng số mũ nhưng hai cơ số cho chiều ngược.

<!-- LESSON_ID: TOP04-M04; OUTCOME_ID: TOP04-O04 -->

Các quy tắc tính lũy thừa chỉ đáng tin khi đi kèm điều kiện của cơ số. Nén nhiều phép nhân/chia bằng quy tắc số mũ rất nhanh, nhưng rút gọn xong không được quên giá trị ban đầu vô nghĩa. Ta có thể bắt đầu bằng cộng/trừ số mũ hữu tỉ, mẫu số khác 0. Với a>0, a^r a^s=a^(r+s), a^r/a^s=a^(r−s), (a^r)^s=a^(rs). Với biểu thức gốc có chia/căn thì kiểm điều kiện trước; không có quy tắc a^r+a^s=a^(r+s).

Thử vận dụng vào một tình huống. E=a^(3/2)·a^(−1/2)/a=a^(3/2−1/2−1)=a^0=1 khi a>0. Không nhận a=0 dù kết quả rút gọn là 1, vì biểu thức gốc chia cho a.

### Vận dụng và tự đối chiếu

<!-- First Try TOP04-M01: knowledge, not canonical Readiness -->
**1.** Tính \(5^{-2}\cdot25\). Biểu thức \(0^{-1}\) có nghĩa không? Vì sao?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

\(5^{-2}\cdot25=\frac1{25}\cdot25=1\). \(0^{-1}\) không xác định vì dẫn tới phép chia cho 0. Nếu em nhầm dấu âm của số mũ thành dấu âm của giá trị, hãy so \(-2^2=-4\) với \(2^{-2}=1/4\).

</details>

<!-- First Try TOP04-M02: knowledge, not canonical Readiness -->
**2.** Tính 27^(2/3) và ³√(−27).

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

27^(2/3)=3²=9; ³√(−27)=−3 vì (−3)³=−27.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu chỉ nhận nghiệm dương khi giải x⁴=16, thử số đối; nếu đổi dấu căn bậc chẵn, nhớ căn số học ≥0.

</details>

<!-- First Try TOP04-M03: knowledge, not canonical Readiness -->
**3.** So sánh (1/3)^(√3) với (1/3)^2.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

√3<2; cơ số 1/3 làm hàm nghịch biến nên (1/3)^(√3)>(1/3)^2.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu đảo dấu sai, dùng x=0 và x=1 để quan sát 1 và cơ số a; quay M10 kiểm tính tăng/giảm.

</details>

<!-- First Try TOP04-M04: knowledge, not canonical Readiness -->
**4.** Với a>0, rút gọn a^(3/4)·a^(−1/4)/√a.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Bằng a^(3/4−1/4−1/2)=1; giữ a>0 để mẫu và mũ hữu tỉ được xác định.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu cộng số mũ cho phép **cộng** hai lũy thừa, thử 2²+2³=12 khác 2⁵=32.

</details>

## Logarit là câu hỏi ngược của lũy thừa

Với lũy thừa, ta biết số mũ và hỏi kết quả; với logarit, ta biết kết quả và hỏi số mũ. Cách nhìn ngược ấy dẫn tới điều kiện đối số dương, quy tắc log và đổi cơ số.

<!-- LESSON_ID: TOP04-M05; OUTCOME_ID: TOP04-O05 -->

Biết số ban đầu và số cuối, ta muốn biết cần bao nhiêu lần nhân theo tỉ lệ a. Những điều đã biết ở đây là hàm mũ cơ số dương, tính đơn ánh của a^x khi a≠1. Với a>0, a≠1 và b>0, log_a b là số y duy nhất sao cho a^y=b. Do đó log_a1=0, log_a a=1; log_a b có thể âm nhưng b **không** thể âm. Đừng học công thức log trước khi hiểu câu hỏi ‘số mũ nào?’.

Từ lập luận vừa rồi, ta xét: log₂(1/8)=−3 vì 2^(−3)=1/8. Dấu âm nằm ở **số mũ được tìm**, không phải ở đối số 1/8>0.

![Quan hệ ngược giữa lũy thừa và logarit](../../content-drafts/svg/FIG-G11-CHVI-B19-01_R00.svg)

*Quan sát hình:* So 2³=8 với log₂8=3, đồng thời ghi điều kiện cơ số dương, khác 1 và đối số logarit dương.

<!-- LESSON_ID: TOP04-M06; OUTCOME_ID: TOP04-O06 -->

Nhưng phép tính ngược ấy chỉ có nghĩa khi đối số và cơ số thỏa điều kiện. Nếu biến đổi log tích thành tổng log mà chưa xét miền, có thể đánh mất nghiệm hợp lệ. Để hiểu, ta dựa vào dấu tích hai nhân tử và bất phương trình bậc hai của tiền đề đã giải thích lại ở đây. Để log_a[F(x)] tồn tại trên ℝ cần a>0, a≠1 và F(x)>0. Quy tắc log_a(uv)=log_a u+log_a v đòi **u>0 và v>0**, mạnh hơn uv>0. Vì vậy với log_a[(x−1)(x−4)], miền x<1 hoặc x>4, nhưng chỉ tách thành tổng log thực trên x>4.

Chẳng hạn, Với x=0: (x−1)(x−4)=4>0 nên log₂4 có nghĩa, còn log₂(−1) và log₂(−4) không. Hình dung hai điểm âm nhân lại dương không làm log từng số âm có nghĩa.

<!-- LESSON_ID: TOP04-M07; OUTCOME_ID: TOP04-O07 -->

Ta suy các quy tắc logarit từ chính phép nhân và chia các lũy thừa. Làm việc với những số rất lớn sẽ dễ hơn khi tích biến thành tổng, nhưng phép biến đổi có điều kiện. Trước hết, ta xuất phát từ tính chất a^r·a^s=a^(r+s), b>0. Với a>0,a≠1,x>0,y>0: log_a(xy)=log_a x+log_a y, log_a(x/y)=log_a x−log_a y, log_a(x^r)=r log_a x (x>0). Chúng đúng vì lấy log hai vế của các tích lũy thừa dương, không phải công thức thuộc lòng không điều kiện.

Một ví dụ giúp kiểm chứng điều đó. log₃81−log₃3=log₃(81/3)=log₃27=3. Trừ hai log là log **thương**, không phải log(81−3).

<!-- LESSON_ID: TOP04-M08; OUTCOME_ID: TOP04-O08 -->

Khi đổi cơ số, hướng biến thiên của logarit cũng cần được xem lại. Máy tính thường chỉ có log thập phân hoặc ln; cần biết phép đổi cơ số và điều kiện. Điểm tựa cho suy luận là định nghĩa log, cơ số a>0,a≠1, đối số b>0. Đặt t=log_a b thì a^t=b. Lấy ln hai vế: t ln a=ln b ⇒ log_a b=(ln b)/(ln a); ln a≠0 do a≠1. Khi 0<a<1, ln a âm; log_a b vẫn có nghĩa với b>0 và có thể dương hoặc âm.

Hãy theo dõi cách giải này. log₄8=ln8/ln4=3/2; log_(1/9)3=−1/2 vì (1/9)^(−1/2)=3. Điều kiện từng cơ số và đối số đều đúng.

### Vận dụng và tự đối chiếu

<!-- First Try TOP04-M05: knowledge, not canonical Readiness -->
**1.** Tính log₄(1/8).

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Vì 4^(−3/2)=1/8 nên log₄(1/8)=−3/2.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu nhầm log_a(−b) với số âm, kiểm log có nghĩa chỉ khi đối số >0; luyện P06 và các câu B19-C01/C02.

</details>

<!-- First Try TOP04-M06: knowledge, not canonical Readiness -->
**2.** Tìm miền của log₂(x²−9); tách log₂(x−3)+log₂(x+3) trên mọi miền đó được không?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Miền x<−3 hoặc x>3, nhưng hai log riêng cùng có nghĩa chỉ khi x>3.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu mắc lỗi ‘log của tích’ trên toàn miền, lấy x=−4 làm phản ví dụ; luyện P07/P08 và câu Written nguồn B19.

</details>

<!-- First Try TOP04-M07: knowledge, not canonical Readiness -->
**3.** Tính log₂24−log₂3.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

log₂(24/3)=log₂8=3 vì hai đối số dương và 2³=8.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu viết log(x+y)=log x+log y, thử x=y=1: log2≠0; phân biệt tổng với tích.

</details>

<!-- First Try TOP04-M08: knowledge, not canonical Readiness -->
**4.** Tính log₈2 bằng đổi cơ số.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

ln2/ln8=1/3 (hoặc 8^(1/3)=2).

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu tính log_(1/9)3=+1/2, kiểm cơ số nhỏ 1 và thử lũy thừa.

</details>

## Hai hàm ngược và đồ thị của chúng

Hàm mũ diễn tả quá trình nhân theo bước, còn logarit giúp tìm số bước để đạt một mức. Đặt hai hàm cạnh nhau giúp hiểu tính đơn điệu, đồ thị và miền trước khi giải phương trình.

<!-- LESSON_ID: TOP04-M09; OUTCOME_ID: TOP04-O09 -->

Số lượng thay đổi theo tỉ lệ không đổi khác với tăng thêm số lượng tuyệt đối mỗi kỳ. Ta có thể bắt đầu bằng số mũ thực cơ số dương và vị trí các điểm trên mặt phẳng tọa độ. Với a>0,a≠1, f(x)=a^x có miền ℝ và giá trị (0,+∞), qua (0,1), (1,a), luôn dương. Khi a>1, f(x)→0 khi x→−∞; khi 0<a<1, f(x)→0 khi x→+∞. Trục Ox là tiệm cận ngang; hàm không cắt Ox.

Thử vận dụng vào một tình huống. f(x)=(1/3)^x: f(−1)=3, f(0)=1, f(1)=1/3; các điểm giảm khi x tăng. Chọn bảng ba điểm vì nó nối được đồ thị và mô hình giảm theo tỉ lệ.

<!-- LESSON_ID: TOP04-M10; OUTCOME_ID: TOP04-O10 -->

Cơ số lớn hơn 1 hay nằm giữa 0 và 1 làm thay đổi hướng đồ thị mũ. Đưa bất phương trình về so số mũ chỉ đúng nếu biết hàm tăng hay giảm. Những điều đã biết ở đây là các giá trị a^0=1,a^1=a và khái niệm hàm đơn điệu. Với a>1, a^x tăng nghiêm ngặt; với 0<a<1, a^x giảm nghiêm ngặt. Nếu a^u>a^v thì u>v khi a>1, nhưng u<v khi 0<a<1. Bản chất: tăng một đơn vị số mũ sẽ nhân giá trị với a; nhân số >1 làm lớn, nhân số nằm (0,1) làm nhỏ.

Từ lập luận vừa rồi, ta xét: Vì (1/4)^0=1 và (1/4)^1=1/4 nên cơ số 1/4 giảm theo số mũ. Do −1<2, (1/4)^(−1)=4>(1/4)^2=1/16.

<!-- LESSON_ID: TOP04-M11; OUTCOME_ID: TOP04-O11 -->

Nhìn ngược đồ thị ấy, ta hiểu vì sao hàm logarit có miền và tính chất đặc trưng. Nếu hàm mũ biến thời gian thành lượng, logarit giúp biến lượng thành thời gian cần thiết. Để hiểu, ta dựa vào định nghĩa log, cơ số a>0,a≠1 và đường thẳng x=0. Với a>0,a≠1, g(x)=log_a x có miền (0,+∞), giá trị ℝ, qua (1,0) và (a,1); x=0 là tiệm cận đứng. Hàm tăng nếu a>1, giảm nếu 0<a<1. Không có điểm đồ thị với x≤0.

Chẳng hạn, g(x)=log_(1/2)x: g(1/4)=2, g(4)=−2; từ x=1/4 sang x=4 giá trị giảm, phản ánh cơ số nhỏ hơn 1.

<!-- LESSON_ID: TOP04-M12; OUTCOME_ID: TOP04-O12 -->

Hai đồ thị tương ứng phản chiếu qua y=x khi thực sự là hai hàm ngược. Liên kết hai khái niệm thành một thao tác thuận và thao tác ngược để giải phương trình. Trước hết, ta xuất phát từ khái niệm hàm ngược, tọa độ điểm (x,y). Với a>0,a≠1, f(x)=a^x là một-một từ ℝ đến (0,+∞), g(x)=log_a x là hàm ngược từ (0,+∞) về ℝ. Nếu (u,v) trên f thì (v,u) trên g; đồ thị đối xứng qua y=x. g(f(x))=x với mọi x thực, còn f(g(x))=x chỉ với x>0.

Một ví dụ giúp kiểm chứng điều đó. 2^(−1)=1/2, nên f có (−1,1/2), g có (1/2,−1). Đây là hoán đổi chỗ input/output, không phải phép đổi dấu.

![Hai đồ thị hàm mũ và logarit đối xứng qua đường y=x](../../content-drafts/svg/FIG-G11-CHVI-B20-01_R00.svg)

*Quan sát hình:* Đối chiếu tọa độ hai điểm bị hoán đổi và chú ý logarit chỉ nhận đầu vào dương; phép đối xứng không xóa miền.

### Vận dụng và tự đối chiếu

<!-- First Try TOP04-M09: knowledge, not canonical Readiness -->
**1.** Cho f(x)=2^x, có x thực nào để f(x)=0 không?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Không: 2^x>0 mọi x∈ℝ, chỉ tiến dần về 0 khi x→−∞.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu nhầm số rất nhỏ với 0, thử x=−10 và viết 2^(−10)=1/1024>0.

</details>

<!-- First Try TOP04-M10: knowledge, not canonical Readiness -->
**2.** So (1/5)^(−1) và (1/5)^2.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

5>1/25; số mũ −1 nhỏ hơn 2 nhưng cơ số giảm làm giá trị lớn hơn.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu luôn giữ dấu so sánh khi bỏ mũ, vẽ hai điểm 0,1 trên đồ thị để sửa.

</details>

<!-- First Try TOP04-M11: knowledge, not canonical Readiness -->
**3.** Với y=log₂x, giá trị tại x=1/8 và x=8 là gì?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

log₂(1/8)=−3, log₂8=3, hàm tăng vì cơ số 2>1.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu đặt điểm x=0 lên đồ thị log, hỏi cơ số nào lũy thừa ra 0 (không có).

</details>

<!-- First Try TOP04-M12: knowledge, not canonical Readiness -->
**4.** Cho f(x)=3^x. Điểm (1,3) trên f tương ứng điểm nào trên log₃x?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

(3,1) vì log₃3=1.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu dùng log₃(−3) để đảo hàm, kiểm miền log phải dương; luyện P16 và các Written cũ B20.

</details>

## Giải phương trình và bất phương trình có điều kiện

Việc đưa hai vế về cùng cơ số chỉ là một bước kỹ thuật. Miền xác định, tính một-một và chiều biến thiên mới quyết định phép suy luận có đúng và đủ hay không.

<!-- LESSON_ID: TOP04-M13; OUTCOME_ID: TOP04-O13 -->

Muốn tìm thời gian hoặc giá trị x khi lượng a^x đạt ngưỡng, cần giải phương trình mũ chứ không phỏng đoán. Điểm tựa cho suy luận là a>0,a≠1, hàm mũ đơn ánh, giải phương trình bậc hai. a^u=a^v ⇔ u=v với a>0,a≠1. Nếu phải đặt t=a^x, luôn ghi t>0; nghiệm t≤0 phải loại trước khi quay lại x. Đưa về cùng cơ số là phương pháp cơ bản SGK B21; đặt ẩn phụ là **mở rộng có điều kiện của CĐ04**, không gán cho bản SGK review cũ.

Hãy theo dõi cách giải này. 4^x=2^(x+3) ⇒ 2^(2x)=2^(x+3) ⇒ 2x=x+3 ⇒ x=3. Nếu có 9^x−4·3^x+3=0, t=3^x>0 cho t=1,3 ⇒ x=0,1.

<!-- LESSON_ID: TOP04-M14; OUTCOME_ID: TOP04-O14 -->

Nếu ẩn nằm trong logarit, xác định miền phải đi trước mọi bước biến đổi. Một phương trình đa thức sau gộp log có thể sinh nghiệm âm, nhưng log không có đối số âm. Ta có thể bắt đầu bằng miền F(x)>0 và tính đơn ánh log_a. log_a U=log_a V ⇔ U=V **trong miền U>0,V>0**, a>0,a≠1. Khi cộng các log, chỉ gộp nếu từng đối số dương. Giải phương trình đại số thu được ứng viên, kiểm vào miền/đề gốc, đặc biệt khi bình phương hay đưa về tích.

Thử vận dụng vào một tình huống. log₂(x−1)+log₂(x+1)=3: miền x>1. (x−1)(x+1)=8 ⇒ x=±3, chỉ x=3 thỏa. Kiểm log₂2+log₂4=1+2=3.

![Miền xác định và nghiệm của bất phương trình logarit giảm](../../visuals/THPT_TOPIC04_LOG_DOMAIN_AND_DECREASING_INEQUALITY_R01.svg)

*Quan sát hình:* Đọc vùng x>1 và x<5 trước; cơ số 1/2 làm chiều so sánh đảo, cho [3,5), không nhận 5 vì logarit 0 vô nghĩa.

<!-- LESSON_ID: TOP04-M15; OUTCOME_ID: TOP04-O15 -->

Từ phương trình sang bất phương trình, hướng biến thiên quyết định chiều nghiệm. Giải một bất phương trình mũ có thể nhanh bằng so số mũ, nhưng dấu so sánh sai làm đổi toàn bộ tập nghiệm. Những điều đã biết ở đây là tính đơn điệu a^x, chuyển vế bất phương trình bậc nhất. Với a>1, a^u≤a^v ⇔ u≤v; với 0<a<1, a^u≤a^v ⇔ u≥v. Không thể so trực tiếp hai số mũ nếu cơ số khác nhau mà chưa quy về cùng cơ số một cách hợp lệ.

Từ lập luận vừa rồi, ta xét: (1/2)^(x−2)<(1/2)^1 ⇔ x−2>1 (đảo chiều vì cơ số nhỏ hơn 1) ⇔ x>3. Thử x=4: (1/2)^2=1/4<1/2 đúng.

<!-- LESSON_ID: TOP04-M16; OUTCOME_ID: TOP04-O16 -->

Với bất phương trình logarit, kết luận cuối chỉ hợp lệ sau khi giao miền xác định. Dù đã đảo chiều bất phương trình đúng, vẫn có thể nhận điểm ngoài miền log nếu không giao tập nghiệm. Để hiểu, ta dựa vào điều kiện log U, log V dương; tính tăng/giảm log. Với a>1: log_a U≤log_a V ⇔ U≤V khi U,V>0. Với 0<a<1: log_a U≤log_a V ⇔ U≥V khi U,V>0. Kết luận là giao với điều kiện; các mốc khiến đối số bằng 0 luôn **loại**.

Chẳng hạn, log_(1/2)(x−1)≤log_(1/2)(5−x): miền 1<x<5; nghịch biến ⇒ x−1≥5−x ⇒ x≥3; giao được [3,5), không nhận 5.

### Vận dụng và tự đối chiếu

<!-- First Try TOP04-M13: knowledge, not canonical Readiness -->
**1.** Giải 2^(2x)=8·2^x.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

2^(2x)=2^(x+3) ⇒ x=3; 2^x>0 nên có thể chia cho 2^x nếu muốn.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu đặt t=3^x mà nhận t âm, kiểm t>0; luyện P17 và bài SGK B21-C01.

</details>

<!-- First Try TOP04-M14: knowledge, not canonical Readiness -->
**2.** Giải log₂(x−2)+log₂(x+2)=3.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Điều kiện x>2. x²−4=8 ⇒ x=±2√3, chỉ +2√3 thỏa vì >2.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu dùng x âm từ phương trình bình phương, thay vào từng đối số; luyện P18/W03 và Written nguồn B19.

</details>

<!-- First Try TOP04-M15: knowledge, not canonical Readiness -->
**3.** Giải (1/3)^(2x−1)≥(1/3)^(x+2).

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Nghịch biến nên 2x−1≤x+2 ⇒ x≤3, lấy dấu bằng tại x=3.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu giữ chiều khi cơ số nhỏ hơn 1, kiểm x=4; luyện P19 và 2 câu gốc B21 bất phương trình mũ.

</details>

<!-- First Try TOP04-M16: knowledge, not canonical Readiness -->
**4.** Giải log_(1/3)(x+1)>log_(1/3)4.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Miền x>−1; log giảm nên x+1<4 ⇒ x<3; S=(−1,3).

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu không loại 5 trong ví dụ, kiểm log(0) vô nghĩa; xem SVG miền mới và luyện P20.

</details>

## Mô hình tăng trưởng và lựa chọn có cơ sở

Lũy thừa và logarit giúp mô hình hóa lãi theo kỳ hay thời gian tới ngưỡng. Đáp án cần khớp miền, đơn vị và giả thiết của mô hình thay vì chỉ đẹp về đại số.

<!-- LESSON_ID: TOP04-M17; OUTCOME_ID: TOP04-O17 -->

Bài toán lãi kép, giá trị giảm dần hay số lượng quần thể đều liên quan nhân theo tỉ lệ, không cộng lượng cố định. Trước hết, ta xuất phát từ phần trăm, lũy thừa, logarit và n nguyên không âm cho số kỳ. Nếu mỗi kỳ nhân q>0 và ban đầu A₀>0 thì A(n)=A₀q^n, n nguyên≥0; q>1 tăng, 0<q<1 giảm. Để tìm kỳ đầu tiên đạt ngưỡng dùng log với đúng dấu của ln q, sau đó kiểm các kỳ nguyên kề nhau. Mô hình giả định q không đổi và n nguyên, không tự chứng minh thực tế sẽ tuân chính xác.

Một ví dụ giúp kiểm chứng điều đó. 200 triệu đồng lãi gộp 5%/năm, sau 2 năm có 200·1,05²=220,5 triệu. Nếu 100 triệu tăng 8%/năm và muốn vượt 125 triệu: n>ln1,25/ln1,08≈2,8994, nên năm nguyên nhỏ nhất n=3.

<!-- LESSON_ID: TOP04-M18; OUTCOME_ID: TOP04-O18 -->

Trong bài toán tổng hợp, lỗi thường đến từ một điều kiện bị quên. Đề tổng hợp không nói sẵn dùng luật nào; học sinh cần tự phát hiện miền, biến đổi và kiểm nghiệm. Điểm tựa cho suy luận là quy tắc lũy thừa, log domain, so số mũ và giải bậc hai. Đọc bài theo chuỗi: xác định a>0,a≠1; từng log đối số>0; chọn quy tắc/hàm đơn ánh; giải ứng viên; giao mọi miền; thử nghiệm. Không trộn điều kiện của mô hình lãi kép với điều kiện log, hoặc cho rằng tự kiểm tra công khai thay cho Readiness độc lập.

Hãy theo dõi cách giải này. log₂(x²−1)=log₂(3x+3): miền x²−1>0 và 3x+3>0 ⇒ x>1. Đồng nhất đối số cho x²−3x−4=0 ⇒ x=4 hoặc −1; x=−1 sai miền. Nghiệm x=4, thử hai đối số bằng 15.

### Vận dụng và tự đối chiếu

<!-- First Try TOP04-M17: knowledge, not canonical Readiness -->
**1.** Với số lượng 500 giảm 20% mỗi kỳ, tính sau 3 kỳ theo mô hình.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

N(3)=500·0,8³=256. Giảm 20% trên số còn lại mỗi kỳ, không trừ 100 cố định mỗi lần.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu tăng/giảm tuyến tính theo số cộng, kiểm tỷ lệ thực mỗi năm; luyện P21/W04 và câu SGK B18-P05.

</details>

<!-- First Try TOP04-M18: knowledge, not canonical Readiness -->
**2.** Giải log₂(x−2)+log₂(x+2)=3 và kiểm miền.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Miền x>2, bình phương cho x=±2√3; chỉ nhận x=2√3. Thử tích (x−2)(x+2)=8.

Nếu cách làm của em chưa đúng, hãy kiểm tra lại điều kiện và lý do chọn phương pháp. Nếu mắc lỗi gộp log tích không có điều kiện, quay M06; nếu đảo dấu sai, quay M10/M16; dùng câu P22 khác để luyện.

</details>

## Hình và cách đọc đúng (5 SVG thật, không thay chứng minh)

- [Số mũ chuyển từ âm qua 0 sang dương](../../content-drafts/svg/FIG-G11-CHVI-B18-01_R00.svg) — Git blob `79528bcd2c87eb40b1b54f18c697b0ae3458e642`. Đọc 2^x ở các mốc x=−2,−1,0,1,2; thấy x tăng và đồ thị tăng, 2^x luôn dương; điểm x=1/2 cho √2.
- [Logarit là phép tìm ngược số mũ](../../content-drafts/svg/FIG-G11-CHVI-B19-01_R00.svg) — Git blob `fe2895ac101dcc4cf4046d57428181ad0f448dc8`. Theo hai chiều 2³=8 ↔ log₂8=3; ghi điều kiện a>0, a≠1, b>0 trước khi áp dụng.
- [Hai đồ thị hàm ngược](../../content-drafts/svg/FIG-G11-CHVI-B20-01_R00.svg) — Git blob `64bcb465bd6d809095a4ca2b910555e314badb69`. Hoán đổi tọa độ điểm (x,y)↔(y,x), đối xứng qua y=x; không bỏ miền x>0 của log.
- [Hàm mũ tăng và giảm khi đổi cơ số](../../content-drafts/svg/FIG-G11-CHVI-B21-01_R00.svg) — Git blob `6d43f842d096b974eb70af21e6751f1ec70eea00`. Đọc đường 2^x và (1/2)^x, thử hai mốc 0,1; giải thích quy tắc đổi chiều khi so số mũ.
- [Miền log và nghiệm của bất phương trình](../../visuals/THPT_TOPIC04_LOG_DOMAIN_AND_DECREASING_INEQUALITY_R01.svg) — Git blob `7fe8a2d2faf325f3ee9b0876929402b733138f96`. Trước tiên đánh dấu 1<x<5, rồi chọn x≥3 do cơ số 1/2 làm log giảm; nhận [3,5), **không** lấy 5 vì log 0 vô nghĩa.

## Mô hình tương tác — đặc tả cần xây dựng, KHÔNG phải tính năng đang chạy

- `TOP04_EXP_BASE_SLIDER_SPEC_ONLY`: thanh chọn cơ số a>0,a≠1 và số mũ x, hiển thị các điểm (x,a^x), sự thay đổi khi a vượt qua 1 và điều kiện không cắt trục hoành; có bảng điểm và văn bản thay đồ thị cho bàn phím/screen reader. **Chưa triển khai/kiểm thử trình duyệt**.
- `TOP04_LOG_DOMAIN_INVERSE_LAB_SPEC_ONLY`: nhập U(x), chọn a, tự thử miền U>0 rồi so log_a U với phép mũ đảo; khi a<1 bắt buộc học sinh tự chọn chiều bất phương trình trước khi xem minh họa. **Chưa triển khai/kiểm thử trình duyệt**.

# Luyện tập

**75 câu canonical PUBLIC duy nhất = 49 câu nguồn gốc KNTT đã review theo snapshot (41 Practice/Core/Application +8 Written/Anchor) và 26 câu tự biên soạn (22 Practice +4 Written).** Mỗi ID có đúng **một** stem/key/solution/rubric ở nguồn canonical; bảng dưới đây chỉ đặt placement cho chuyên đề, không sao chép câu cũ. **12 bài Written** gồm 8 gốc có rubric 4 điểm và 4 mới có rubric 7 điểm; Anchor chỉ là nhãn, không sinh ID khác. Không lấy tổng số câu thay cho độ sâu từng outcome; 18 outcome đều có nhiều câu khác họ dạng và lý do chọn cách làm.

| Mục tiêu chuyên đề | Phương pháp / họ dạng | Câu canonical PUBLIC |
|---|---|---|
| `TOP04-O01` | Giải thích a^0 và a^(−n), phân biệt số âm với số mũ âm · `POWER-INTEGER-ZERO-NEGATIVE` | `THPT-G11-CHVI-B18-C01`; `THPT-G11-CHVI-B18-C03`; `THPT-G11-CHVI-B18-P07`; `THPT-TOP04-P01` |
| `TOP04-O02` | Phân biệt căn số học và nghiệm phương trình lũy thừa · `ROOT-PARITY-RATIONAL` | `THPT-G11-CHVI-B18-C02`; `THPT-G11-CHVI-B18-C05`; `THPT-G11-CHVI-B18-P02`; `THPT-G11-CHVI-B18-P03`; `THPT-TOP04-P02` |
| `TOP04-O03` | Hiểu vì sao 2^(√2) xác định và so sánh khi số mũ không hữu tỉ · `REAL-EXPONENT-INTERPOLATION` | `THPT-G11-CHVI-B18-C04`; `THPT-TOP04-P03`; `THPT-TOP04-P04` |
| `TOP04-O04` | Rút gọn biểu thức lũy thừa không làm mất điều kiện · `POWER-LAW-CAVEATS` | `THPT-G11-CHVI-B18-P01`; `THPT-G11-CHVI-B18-P04`; `THPT-G11-CHVI-B18-P06`; `THPT-G11-CHVI-B18-W01`; `THPT-TOP04-P05`; `THPT-TOP04-W01` |
| `TOP04-O05` | Giải thích log_a b như thao tác ngược của a^x · `LOG-DEFINITION` | `THPT-G11-CHVI-B19-C01`; `THPT-G11-CHVI-B19-C02`; `THPT-G11-CHVI-B19-P03`; `THPT-TOP04-P06` |
| `TOP04-O06` | Một tích dương không bảo đảm từng thừa số dương · `LOG-DOMAIN-AND-SPLITTING` | `THPT-G11-CHVI-B19-C03`; `THPT-G11-CHVI-B19-P04`; `THPT-G11-CHVI-B19-W01`; `THPT-TOP04-P07`; `THPT-TOP04-P08` |
| `TOP04-O07` | Dùng đúng log của tích, thương, lũy thừa · `LOG-ALGEBRA-RULES` | `THPT-G11-CHVI-B19-P01`; `THPT-G11-CHVI-B19-P02`; `THPT-G11-CHVI-B19-W02-ANCHOR`; `THPT-TOP04-P09` |
| `TOP04-O08` | Chuyển một log lạ về cơ số quen mà không sai dấu · `BASE-CHANGE` | `THPT-G11-CHVI-B19-P05`; `THPT-TOP04-P10`; `THPT-TOP04-P11`; `THPT-TOP04-W02` |
| `TOP04-O09` | Đọc tập xác định, giá trị, điểm, tiệm cận qua ý nghĩa lũy thừa · `EXP-DOMAIN-RANGE-GRAPH` | `THPT-G11-CHVI-B20-C01`; `THPT-TOP04-P12`; `THPT-TOP04-P13` |
| `TOP04-O10` | So sánh số mũ và giải thích khi nào đảo chiều · `EXP-MONOTONIC` | `THPT-G11-CHVI-B20-C02`; `THPT-G11-CHVI-B20-P02`; `THPT-TOP04-P14` |
| `TOP04-O11` | Đọc miền, tập giá trị, đồ thị và tính tăng giảm của log · `LOG-FUNCTION-MONOTONIC` | `THPT-G11-CHVI-B20-C03`; `THPT-G11-CHVI-B20-P01`; `THPT-G11-CHVI-B20-P03`; `THPT-TOP04-P15` |
| `TOP04-O12` | Đọc đồ thị đối xứng qua y=x, không nhầm hoán đổi miền · `INVERSE-GRAPH` | `THPT-G11-CHVI-B20-C04`; `THPT-G11-CHVI-B20-P04`; `THPT-G11-CHVI-B20-W01`; `THPT-G11-CHVI-B20-W02-ANCHOR`; `THPT-TOP04-P16` |
| `TOP04-O13` | Giải bằng đưa về cùng cơ số, nêu giới hạn của đặt t=a^x · `EXP-EQUATIONS` | `THPT-G11-CHVI-B21-C01`; `THPT-G11-CHVI-B21-P01`; `THPT-G11-CHVI-B21-P07`; `THPT-TOP04-P17` |
| `TOP04-O14` | Loại nghiệm đại số không thuộc miền log · `LOG-EQUATIONS-DOMAIN` | `THPT-G11-CHVI-B21-C02`; `THPT-G11-CHVI-B21-P02`; `THPT-TOP04-P18`; `THPT-TOP04-W03` |
| `TOP04-O15` | Chọn chiều của bất phương trình dựa trên cơ số · `EXP-INEQUALITIES` | `THPT-G11-CHVI-B21-C03`; `THPT-G11-CHVI-B21-P03`; `THPT-TOP04-P19` |
| `TOP04-O16` | Giải đủ tập giao của điều kiện log và phép so đối số · `LOG-INEQUALITIES` | `THPT-G11-CHVI-B21-C04`; `THPT-G11-CHVI-B21-P04`; `THPT-TOP04-P20` |
| `TOP04-O17` | Lập A(n)=A₀q^n, phân biệt tăng, giảm và nghiệm nguyên · `EXP-LOG-MODELS` | `THPT-G11-CHVI-B18-P05`; `THPT-G11-CHVI-B19-P06`; `THPT-G11-CHVI-B21-P06`; `THPT-G11-CHVI-B18-W02-ANCHOR`; `THPT-G11-CHVI-B21-W02-ANCHOR`; `THPT-TOP04-P21`; `THPT-TOP04-W04` |
| `TOP04-O18` | Chọn đúng phương pháp theo dấu/miền và đánh giá nghiệm · `INTEGRATED-CONDITION-CHECK` | `THPT-G11-CHVI-B21-P05`; `THPT-G11-CHVI-B21-P08`; `THPT-G11-CHVI-B21-W01`; `THPT-TOP04-P22` |

**Phân tầng:** Câu nhận biết về số mũ, định nghĩa và miền log; câu thông hiểu về vì sao không tách log tích, vì sao đồ thị ngược/đảo dấu; câu vận dụng về đổi cơ số, phương trình và bất phương trình; bài tự luận tích hợp về điều kiện, biến đổi và mô hình năm nguyên. P17 đặt t=3^x>0 là **vận dụng mở rộng tự chọn**; không đánh tráo thành Core bắt buộc SGK đã được review.

**Một thư viện Written:** 8 câu nguồn đã có rubric 4 điểm, lưu nguyên ở nguồn SGK canonical. 4 câu mới `THPT-TOP04-W01` (lũy thừa+khoa học), `W02` (đổi cơ số và điều kiện), `W03` (phương trình log), `W04` (ngưỡng lãi kép) với rubric 7 điểm trong extension. Không để nhãn Anchor tự biến thành bản sao hoặc bài tự luận chấm Mastery máy.

# Tự kiểm tra

**18 placement PUBLIC reuse-only — một outcome một câu đã có trong Luyện tập.** Đây là `CLIENT_SELF_CHECK_NO_MASTERY`, chỉ để học sinh tự đối chiếu sau khi nộp; **không** là `TOPIC_READINESS` độc lập, không ghi Skill Mastery. 22 private RD1 của SGK tuyệt đối **không** sao chép sang Topic; không đặt câu/chìa khóa/đáp án kín lên GitHub.

**Hợp đồng thực thi Q16 cho nhánh RELEASE:** Trước **Final Submit** phải khóa gợi ý, AI Tutor, key, lời giải, phản hồi đúng/sai và rubric. Chỉ sau Final Submit mới hiển thị đối chiếu/đường sửa D6. Việc mô tả trong Markdown **không** chứng minh website hiện đã khóa, đã có đánh giá chính thức hoặc có model tương tác chạy.

| Lượt | Outcome | PUBLIC item_id tái sử dụng | Khi sai quay lại |
|---:|---|---|---|
| 1 | `TOP04-O01` | `THPT-G11-CHVI-B18-C01` | `TOP04-M01` |
| 2 | `TOP04-O02` | `THPT-G11-CHVI-B18-C02` | `TOP04-M02` |
| 3 | `TOP04-O03` | `THPT-G11-CHVI-B18-C04` | `TOP04-M03` |
| 4 | `TOP04-O04` | `THPT-G11-CHVI-B18-P01` | `TOP04-M04` |
| 5 | `TOP04-O05` | `THPT-G11-CHVI-B19-C01` | `TOP04-M05` |
| 6 | `TOP04-O06` | `THPT-G11-CHVI-B19-C03` | `TOP04-M06` |
| 7 | `TOP04-O07` | `THPT-G11-CHVI-B19-P01` | `TOP04-M07` |
| 8 | `TOP04-O08` | `THPT-G11-CHVI-B19-P05` | `TOP04-M08` |
| 9 | `TOP04-O09` | `THPT-G11-CHVI-B20-C01` | `TOP04-M09` |
| 10 | `TOP04-O10` | `THPT-G11-CHVI-B20-C02` | `TOP04-M10` |
| 11 | `TOP04-O11` | `THPT-G11-CHVI-B20-C03` | `TOP04-M11` |
| 12 | `TOP04-O12` | `THPT-G11-CHVI-B20-C04` | `TOP04-M12` |
| 13 | `TOP04-O13` | `THPT-G11-CHVI-B21-C01` | `TOP04-M13` |
| 14 | `TOP04-O14` | `THPT-G11-CHVI-B21-C02` | `TOP04-M14` |
| 15 | `TOP04-O15` | `THPT-G11-CHVI-B21-C03` | `TOP04-M15` |
| 16 | `TOP04-O16` | `THPT-G11-CHVI-B21-C04` | `TOP04-M16` |
| 17 | `TOP04-O17` | `THPT-G11-CHVI-B18-P05` | `TOP04-M17` |
| 18 | `TOP04-O18` | `THPT-G11-CHVI-B21-P05` | `TOP04-M18` |

**Phân loại lỗi sau nộp:** nhầm số mũ âm/căn bậc chẵn; thiếu điều kiện cơ số và đối số; tách log tích trên phần miền sai; đổi cơ số sai; đọc đồ thị ngược; đảo chiều khi cơ số nhỏ hơn 1; lấy nghiệm ngoài miền; làm tròn/nhận năm không nguyên. Dẫn về module tương ứng và luyện một ID khác đã có nguồn.

## Phụ lục AUTHORING — không hiển thị cho học sinh

PACKET_ID: THPT-TOPIC04-POWERS-EXP-LOG-FULL-R01
CATALOG_TOPIC_ID: CD04
LEARNING_PATH: TOPIC
OUTER_PAGES: KIEN_THUC / LUYEN_TAP / TU_KIEM_TRA
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.0.1
RUNTIME_TOPIC_ID: UNASSIGNED_OWNER_DECISION
SGK_SOURCE_ROLE: S1_REFERENCE_ONLY_NOT_SGK_CHAPTER_ROUTE
SGK_G11_T2_KNTT: B18 printed4–9/PDF5–10; B19 printed10–15/PDF11–16; B20 printed16–19/PDF17–20; B21 printed20–24/PDF21–25; chapter-end printed25–26/PDF26–27
SBT_G11_T2_KNTT: B18 printed4–7/PDF5–8; B19 printed8–10/PDF9–11; B20 printed11–15/PDF12–16; B21 printed16–19/PDF17–20; chapter-end printed20–23/PDF21–24; SBT ChVI solutions printed73–85/PDF74–86
S1_PAGINATION_AUDIT: historic owner visual PDF receipt with original private source SHA; this authoring turn independently reads citation receipt, not original scanned page image
ORIGINAL_G11_CHVI_PUBLIC_SOURCE_BLOB: 17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872
ORIGINAL_49_INDEX_PATH: prototypes/thpt/shared-items/Temp_TOPIC04_POWERS_LOG_ORIGINAL49_INDEX_R01_20261112.md
ORIGINAL_49_INDEX_BLOB: 7d257edda0a2d29ba063987a51c61980558dbab6
NEW_26_BANK_PATH: prototypes/thpt/shared-items/Temp_TOPIC04_POWERS_LOG_NEW26_PUBLIC_CANONICAL_R01_20261112.md
NEW_26_BANK_BLOB: 004692a2d996b5ba955318a087f4d58dcdb2df04
SVG_B18_ORIGINAL_BLOB: 79528bcd2c87eb40b1b54f18c697b0ae3458e642
SVG_B19_ORIGINAL_BLOB: fe2895ac101dcc4cf4046d57428181ad0f448dc8
SVG_B20_ORIGINAL_BLOB: 64bcb465bd6d809095a4ca2b910555e314badb69
SVG_B21_ORIGINAL_BLOB: 6d43f842d096b974eb70af21e6751f1ec70eea00
SVG_TOPIC_NEW_BLOB: 7fe8a2d2faf325f3ee9b0876929402b733138f96
TOPIC_OUTCOMES: 18
KNOWLEDGE_MODULES: 18
FIRST_TRY_REVEAL_D6: 18_EACH
PUBLIC_CANONICAL_IDS: 75
PUBLIC_REUSE_ORIGINAL: 49
PUBLIC_NEW_ORIGINAL: 26
PUBLIC_WRITTEN_IDS: 12
PUBLIC_SELF_CHECK_REUSE: 18
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
OFFICIAL_TOPIC_READINESS: NOT_CLAIMED
PRIVATE_RD1_IMPORTED: 0
INTERACTION_MODELS_IMPLEMENTED: NO
RELEASE_AUTHORIZATION: NO

| canonical item_id | primary Topic outcome | role | one source Git blob |
|---|---|---|---|
| `THPT-G11-CHVI-B18-C01` | `TOP04-O01` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-C02` | `TOP04-O02` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-C03` | `TOP04-O01` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-C04` | `TOP04-O03` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-C05` | `TOP04-O02` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-P01` | `TOP04-O04` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-P02` | `TOP04-O02` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-P03` | `TOP04-O02` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-P04` | `TOP04-O04` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-P05` | `TOP04-O17` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-P06` | `TOP04-O04` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-P07` | `TOP04-O01` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B19-C01` | `TOP04-O05` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B19-C02` | `TOP04-O05` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B19-C03` | `TOP04-O06` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B19-P01` | `TOP04-O07` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B19-P02` | `TOP04-O07` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B19-P03` | `TOP04-O05` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B19-P04` | `TOP04-O06` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B19-P05` | `TOP04-O08` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B19-P06` | `TOP04-O17` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B20-C01` | `TOP04-O09` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B20-C02` | `TOP04-O10` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B20-C03` | `TOP04-O11` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B20-C04` | `TOP04-O12` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B20-P01` | `TOP04-O11` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B20-P02` | `TOP04-O10` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B20-P03` | `TOP04-O11` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B20-P04` | `TOP04-O12` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-C01` | `TOP04-O13` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-C02` | `TOP04-O14` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-C03` | `TOP04-O15` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-C04` | `TOP04-O16` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-P01` | `TOP04-O13` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-P02` | `TOP04-O14` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-P03` | `TOP04-O15` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-P04` | `TOP04-O16` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-P05` | `TOP04-O18` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-P06` | `TOP04-O17` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-P07` | `TOP04-O13` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-P08` | `TOP04-O18` | TOPIC_PRACTICE | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-W01` | `TOP04-O04` | TOPIC_WRITTEN | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B18-W02-ANCHOR` | `TOP04-O17` | TOPIC_WRITTEN | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B19-W01` | `TOP04-O06` | TOPIC_WRITTEN | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B19-W02-ANCHOR` | `TOP04-O07` | TOPIC_WRITTEN | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B20-W01` | `TOP04-O12` | TOPIC_WRITTEN | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B20-W02-ANCHOR` | `TOP04-O12` | TOPIC_WRITTEN | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-W01` | `TOP04-O18` | TOPIC_WRITTEN | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-G11-CHVI-B21-W02-ANCHOR` | `TOP04-O17` | TOPIC_WRITTEN | `17d6fe73d8f3ac0e378dabf53c3e5d2e69e71872` |
| `THPT-TOP04-P01` | `TOP04-O01` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P02` | `TOP04-O02` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P03` | `TOP04-O03` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P04` | `TOP04-O03` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P05` | `TOP04-O04` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P06` | `TOP04-O05` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P07` | `TOP04-O06` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P08` | `TOP04-O06` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P09` | `TOP04-O07` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P10` | `TOP04-O08` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P11` | `TOP04-O08` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P12` | `TOP04-O09` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P13` | `TOP04-O09` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P14` | `TOP04-O10` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P15` | `TOP04-O11` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P16` | `TOP04-O12` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P17` | `TOP04-O13` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P18` | `TOP04-O14` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P19` | `TOP04-O15` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P20` | `TOP04-O16` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P21` | `TOP04-O17` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-P22` | `TOP04-O18` | TOPIC_PRACTICE | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-W01` | `TOP04-O04` | TOPIC_WRITTEN | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-W02` | `TOP04-O08` | TOPIC_WRITTEN | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-W03` | `TOP04-O14` | TOPIC_WRITTEN | `004692a2d996b5ba955318a087f4d58dcdb2df04` |
| `THPT-TOP04-W04` | `TOP04-O17` | TOPIC_WRITTEN | `004692a2d996b5ba955318a087f4d58dcdb2df04` |

**Review boundary:** 49 câu nguồn lấy từ snapshot SGK đã có độc lập Academic/PED PASS và chứng cứ DELTA_B cho hai số thập phân; không sao chép câu/đáp án/rubric. Bộ CĐ04 với 18 module, 26 bài mới, SVG mới là `DELTA_C_ACADEMIC_MATERIAL` tự kiểm tra `Q18_AUTHOR_SELF_VERIFIED` theo owner v3.0.1. Không gán NotebookLM PASS cũ sang CĐ04, không giả model tương tác đã chạy, không tuyên bố assessment chính thức.
