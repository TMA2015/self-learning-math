<!-- AUTHORING CANDIDATE R03 · learner-first continuity at conceptual arc level, 16 source-locked lessons, First Try placed after arc explanation. NOT CONTENT_READY / Q18 pending / R01 immutable. -->
<!-- AUTHORING CANDIDATE · R02 continuous student-first narrative · DELTA_C_ACADEMIC_MATERIAL. R01 remains immutable source-reviewed snapshot. This is NOT CONTENT_READY and must be math/PED reviewed as a whole unit, then owner UX review before replacing active source. -->
# CĐ02 — Bất đẳng thức, Dấu tam thức bậc hai và Miền nghiệm · Liền mạch R02 — ứng viên phản biện

**Đây là chuyên đề độc lập thứ 02/22**, không phải một bản chép lại Chương II hoặc VI SGK. Học liệu có ba trang ngoài đúng chuẩn **Kiến thức / Luyện tập / Tự kiểm tra** và không có trang Core riêng. Mỗi outcome tự có giải thích, tiền đề, ví dụ, Tự thử, tự mở đối chiếu và đường D6; không buộc học sinh học theo nhánh SGK.

## Câu hỏi xuất phát: Một phương án có hợp lệ không?

Điều kiện “ít nhất”, “không quá” và “phải dương” tạo ra bất đẳng thức. Với một biến, nghiệm là tập số; với tam thức bậc hai, các mốc nghiệm chia trục số thành vùng dấu; với hai biến, mỗi điều kiện tạo nửa mặt phẳng, còn các điều kiện chung tạo miền khả thi. CĐ02 giúp học sinh **hiểu điều kiện → mô hình miền nghiệm → kiểm tính khả thi → tìm phương án tối ưu**, không chỉ học công thức.

**Cầu nối:** ℝ là tập số thực, ℤ≥0 là các số nguyên không âm; dấu ≤ có dấu bằng, còn < không; (x,y) là một điểm trong hệ tọa độ Oxy, A∩B là giao các tập phương án. Nếu quên phép biến đổi khi nhân số âm, đọc M01 trước; nếu chưa nhớ Δ, đọc M02 trước. Tất cả kiến thức bắt buộc đều có trong hành trình chuyên đề này.

## Giữ đúng điều kiện khi biến đổi

Một bất phương trình không chỉ hỏi một số bằng bao nhiêu mà hỏi những giá trị nào thỏa một điều kiện. Vì thế từng phép biến đổi phải bảo vệ đúng tập nghiệm, nhất là khi nhân hoặc chia cho một đại lượng âm.

<!-- LESSON_ID: TOP02-M01; OUTCOME_ID: TOP02-O01; source: candidate R02 -->

Khi kiểm tra một phương án có hợp lệ hay không, ta thường phải biết một đại lượng **lớn hơn**, **nhỏ hơn** hoặc **ít nhất** một mức nào đó. Khác với phương trình tìm giá trị bằng nhau, bất phương trình chọn ra **tập các giá trị thỏa điều kiện**. Mỗi phép biến đổi vì thế phải giữ đúng tập này. Cộng cùng một số vào hai vế không đổi chiều bất đẳng thức; nhân hoặc chia cho một số dương cũng vậy, nhưng khi nhân hoặc chia cho **số âm**, ta phải đảo chiều. Nếu nhân một biểu thức chứa biến chưa biết dấu, cần xét dấu trước.

Chẳng hạn, từ \(-4x+1>9\) suy ra \(-4x>8\). Chia cho \(-4\) khiến dấu đổi thành \(x<-2\). Ta có thể tự kiểm bằng cách chọn \(x=-3\): vế trái \(13>9\) đúng; còn \(x=-1\) cho \(5>9\) sai. Phép thử không thay thế chứng minh, nhưng giúp phát hiện sai dấu ngay khi tính.

### Vận dụng và tự đối chiếu

<!-- First Try for TOP02-M01; noncanonical knowledge question -->
**1.** Giải \(-3(x-2)\ge6\). Hãy giải thích bước nào buộc đổi chiều dấu bất đẳng thức.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Khai triển \(-3x+6\ge6\), suy ra \(-3x\ge0\). Chia cho \(-3<0\), ta được \(x\le0\), kể cả \(x=0\) vì dấu ban đầu có bằng. Nếu em viết \(x\ge0\), hãy thử \(x=1\) trong đề gốc để thấy kết luận sai.

</details>

## Từ tam thức bậc hai đến khoảng nghiệm

Tam thức có thể cắt hoặc không cắt trục hoành; vị trí nghiệm quyết định các khoảng mà dấu của biểu thức giữ nguyên. Từ ba tình huống của biệt thức, ta đi tới bảng dấu, bất phương trình và các giới hạn của mô hình.

<!-- LESSON_ID: TOP02-M02; OUTCOME_ID: TOP02-O02; source: candidate R02 -->

Muốn xét dấu tam thức cần biết nó bằng 0 ở đâu. Điểm xuất phát là hằng đẳng thức và công thức nghiệm phương trình bậc hai. f=ax²+bx+c, a≠0; Δ=b²−4ac. Δ<0 không có nghiệm thực, Δ=0 có nghiệm kép, Δ>0 có hai nghiệm thực. Nếu a biến thiên có thể bằng 0, phải xét riêng a=0 trước.

Chẳng hạn, x²−5x+6 có Δ=1 và hai nghiệm 2,3; f=(x−2)(x−3), nhân tử cho phép đọc dấu.

<!-- LESSON_ID: TOP02-M03; OUTCOME_ID: TOP02-O03; source: candidate R02 -->

Nhưng biết nghiệm của tam thức vẫn chưa đủ: cần hiểu dấu của nó khi không có nghiệm thực.

Có tam thức luôn dương hoặc luôn âm với mọi số thực. Ta bắt đầu từ tính không âm của bình phương và Δ. Với a≠0, Δ<0, tam thức không có nghiệm thực và luôn cùng dấu a. Điều đó không có nghĩa f>0 hay f<0 vô nghiệm.

Xét ví dụ: 2x²+2x+3 có Δ=−20<0, a=2>0 ⇒ luôn dương; hoàn phương thành 2(x+1/2)²+5/2>0 xác minh.

<!-- LESSON_ID: TOP02-M04; OUTCOME_ID: TOP02-O04; source: candidate R02 -->

Khi biệt thức bằng không, đồ thị vừa chạm trục tại nghiệm kép và quy tắc dấu thay đổi.

Tại nghiệm kép giá trị bằng 0 nhưng hai phía có cùng dấu. Trước hết, hãy nhớ bình phương không âm; phân biệt < với ≤. Nếu Δ=0 thì f=a(x−x₀)², cùng dấu a ngoài x₀ và bằng 0 tại x₀. Dấu không nghiêm có thể nhận nghiệm kép, dấu nghiêm phải bỏ.

Hãy kiểm tra trường hợp sau: −2(x−3)²≤0 mọi x; bằng 0 khi x=3, âm khi x≠3. Muốn giải f≥0 chỉ nhận {3}.

<!-- LESSON_ID: TOP02-M05; OUTCOME_ID: TOP02-O05; source: candidate R02 -->

Nếu biệt thức dương, hai nghiệm thực chia trục số thành ba miền xét dấu.

Hai nghiệm chia trục số thành ba vùng, mỗi vùng giữ dấu ổn định. Ta có thể sử dụng dấu tích hai nhân tử. Với x₁<x₂, f=a(x−x₁)(x−x₂) cùng dấu a bên ngoài, trái dấu a ở giữa; bằng 0 ở x₁,x₂. Đây là lý do của bảng dấu chứ không phải quy tắc học thuộc.

Chẳng hạn, (x−2)(x−5)>0 khi x<2 hoặc x>5, <0 khi 2<x<5; đổi a thành âm sẽ đảo dấu.

<!-- LESSON_ID: TOP02-M06; OUTCOME_ID: TOP02-O06; source: candidate R02 -->

Từ ba trường hợp của biệt thức, ta có thể giải bất phương trình bậc hai một cách có căn cứ.

Một điều kiện ≥ khác > chính ở các nghiệm biên. Để hiểu, ta dựa vào ba trường hợp Δ và khoảng, đoạn trên ℝ. Đưa về f(x)⋄0, kiểm a≠0, tìm nghiệm, chọn khoảng theo dấu, rồi xét dấu nghiêm/non-nghiêm để lấy/loại đầu mút. Với Δ<0 có thể được ℝ hoặc ∅.

Xét một trường hợp cụ thể. x²−5x+6≤0 ⇔ (x−2)(x−3)≤0 ⇒ x∈[2,3]. Chọn nhân tử vì nghiệm là số nguyên.

<!-- LESSON_ID: TOP02-M07; OUTCOME_ID: TOP02-O07; source: candidate R02 -->

Nếu hệ số chứa tham số, kết luận 'đúng với mọi x' phải kiểm tra mọi trường hợp hợp lệ.

Một vài phép thử x không chứng minh ‘đúng với mọi x’. Điểm xuất phát là biệt thức và nghiệm kép. Với a>0 **cố định**, f>0 mọi ℝ iff Δ<0; f≥0 mọi ℝ iff Δ≤0. Với a<0 cố định dùng điều kiện âm tương ứng. Không âm thầm áp dụng cho a(m) có thể bằng 0.

Chẳng hạn, x²+2(m−1)x+(m+1)>0 mọi x: Δ=4m(m−3)<0 ⇒ 0<m<3; hai biên làm tam thức chạm 0 nên bị loại.

<!-- LESSON_ID: TOP02-M08; OUTCOME_ID: TOP02-O08; source: candidate R02 -->

Một miền nghiệm đại số còn có thể bị thu hẹp bởi đơn vị và điều kiện vật lý của mô hình.

Nghiệm đại số có thể không dùng được nếu độ dài âm, thời gian âm. Ta bắt đầu từ diện tích chữ nhật và phương trình bậc hai. Đặt biến, nêu miền vật lý, lập bất phương trình, giải, giao tập nghiệm với miền ban đầu rồi kiểm ý nghĩa. “Ít nhất” là ≥; “không quá” là ≤.

Xét ví dụ: 20m rào ba cạnh sát tường: 0<x<10, S=x(20−2x)≥32 ⇔ (x−2)(x−8)≤0 ⇒ x∈[2,8] m, đúng miền vật lý.

### Vận dụng và tự đối chiếu

<!-- First Try for TOP02-M02; noncanonical knowledge question -->
**1.** x²+2x+1 có Δ và nghiệm nào?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Δ=0, nghiệm kép −1 vì (x+1)².

Nếu em vẫn còn phân vân, hãy quay lại điều kiện vừa dùng. Quên 2a hoặc sai dấu b thì thử nhân tích để kiểm nghiệm.

</details>

<!-- First Try for TOP02-M03; noncanonical knowledge question -->
**2.** −x²+2x−3 có dấu gì?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

−[(x−1)²+2]<0 mọi x.

Nếu em vẫn còn phân vân, hãy quay lại điều kiện vừa dùng. Nếu kết luận ‘không có nghiệm vì Δ<0’, thử x=0 trước khi quyết định.

</details>

<!-- First Try for TOP02-M04; noncanonical knowledge question -->
**3.** Giải (x+4)²≤0.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Chỉ x=−4 vì bình phương ≥0.

Nếu em vẫn còn phân vân, hãy quay lại điều kiện vừa dùng. Nếu viết một khoảng, thử x=−3 để bác bỏ.

</details>

<!-- First Try for TOP02-M05; noncanonical knowledge question -->
**4.** Giải −(x+1)(x−4)>0.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

−1<x<4, không lấy −1,4.

Nếu em vẫn còn phân vân, hãy quay lại điều kiện vừa dùng. Nếu sai, thử một x nằm giữa nghiệm để đối chiếu dấu của hai thừa số.

</details>

<!-- First Try for TOP02-M06; noncanonical knowledge question -->
**5.** Giải −x²+4x−3>0.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

1<x<3 vì −(x−1)(x−3)>0.

Nếu em vẫn còn phân vân, hãy quay lại điều kiện vừa dùng. Nếu quên đầu mút ở ≤, thử x=2 trong biểu thức rồi sửa dấu ngoặc.

</details>

<!-- First Try for TOP02-M07; noncanonical knowledge question -->
**6.** Tìm m để x²−2mx+1≥0 mọi x.

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Δ=4(m²−1)≤0 ⇒ m∈[−1,1].

Nếu em vẫn còn phân vân, hãy quay lại điều kiện vừa dùng. Nếu lấy cả biên trong bài >0, kiểm x tại nghiệm kép và loại; luyện Written W01.

</details>

<!-- First Try for TOP02-M08; noncanonical knowledge question -->
**7.** h(t)=−t²+6t với t≥0; khi nào h≥8?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

(t−2)(t−4)≤0 ⇒ t∈[2,4].

Nếu em vẫn còn phân vân, hãy quay lại điều kiện vừa dùng. Nếu có nghiệm âm, kiểm lại điều kiện khi đặt biến thay vì nhận tất cả.

</details>

## Từ trục số đến miền trong mặt phẳng

Khi có hai ẩn, nghiệm không còn là một khoảng trên trục số mà là những điểm trong mặt phẳng. Cách đọc đường biên và thử một phía sẽ mở đường cho việc ghép nhiều ràng buộc thành miền khả thi.

<!-- LESSON_ID: TOP02-M09; OUTCOME_ID: TOP02-O09; source: candidate R02 -->

Hai quyết định x,y cần mô tả tập cặp khả thi. Trước hết, hãy nhớ cặp tọa độ (x,y), thay số vào biểu thức. BPT bậc nhất hai ẩn có dạng ax+by⋄c, (a,b)≠(0,0); một hệ số bằng 0 vẫn hợp lệ. Một cặp (x,y) là nghiệm nếu thế vào làm bất phương trình đúng.

Hãy kiểm tra trường hợp sau: 0x+2y≥4 vẫn bậc nhất hai ẩn, tương đương y≥2; (10,3) hợp lệ, (0,1) sai.

<!-- LESSON_ID: TOP02-M10; OUTCOME_ID: TOP02-O10; source: candidate R02 -->

Để nhận ra nửa mặt phẳng được chọn, hãy thử một điểm không nằm trên đường biên.

Điểm O có thể ngay trên đường và không giúp chọn nửa mặt phẳng. Ta có thể sử dụng đường thẳng ax+by=c và thế cặp số. Để thử nghiệm, thay (x,y) vào BPT. Để chọn phía của đường biên, dùng điểm **không thuộc** đường biên; O chỉ phù hợp nếu c≠0. Một điểm ở biên thỏa ≤ nhưng không quyết định phía.

Chẳng hạn, Với x−2y>3, (4,0) cho 4>3 đúng; (1,−1) cho 3>3 sai. O cho 0>3 sai và không ở trên đường nên dùng làm điểm thử phía được.

<!-- LESSON_ID: TOP02-M11; OUTCOME_ID: TOP02-O11; source: candidate R02 -->

Bản thân đường biên có được lấy hay không phụ thuộc vào dấu bất đẳng thức.

Hình vẽ sai nét đường làm kết luận sai với các điểm ở mép. Để hiểu, ta dựa vào bất đẳng thức một ẩn và đường thẳng. ≤/≥ nhận biên (nét liền), </> loại biên (nét đứt). Khi đưa về y⋄mx+n, chia cho hệ số âm phải đảo chiều. Chọn một điểm ngoài biên để xác định phía cần tô.

Xét một trường hợp cụ thể. 2x−y<4 ⇔ y>2x−4; phía trên đường nét đứt. O=(0,0) thỏa vì 0<4 và nằm phía tương ứng.

<!-- LESSON_ID: TOP02-M12; OUTCOME_ID: TOP02-O12; source: candidate R02 -->

Khi diễn đạt một ràng buộc thực tế, phải biến câu chữ thành cả đường biên lẫn phía được chọn.

Một phương án thỏa số tiền nhưng có 2,5 thùng không dùng được. Điểm xuất phát là phân biệt ≤ và ≥; đơn vị. Đặt x,y và đơn vị. Số vé/sản phẩm cần nguyên không âm, đại lượng đo có thể thực không âm. ‘Ít nhất’ → ≥, ‘không quá’ → ≤; kiểm từng phương án bằng thế số.

Chẳng hạn, Thùng A giá 4, B giá 7, ngân sách 56 ⇒ 4x+7y≤56, x,y nguyên≥0. (7,4) cho 56 đúng; (8,4) cho 60 sai.

<!-- LESSON_ID: TOP02-M13; OUTCOME_ID: TOP02-O13; source: candidate R02 -->

Hai ràng buộc cùng đúng dẫn tới giao của hai miền nghiệm, không phải hợp.

Đạt một điều kiện mà vi phạm điều kiện khác thì vẫn không khả thi. Ta bắt đầu từ giao của tập hợp và tọa độ. Miền nghiệm của hệ là giao của tất cả nửa mặt phẳng; có thể rỗng, bị chặn hoặc vô hạn. Mọi điểm phải thỏa đồng thời từng điều kiện, kể cả ràng buộc dấu x,y.

Xét ví dụ: x≥0,y≥0,x+y≤6 tạo tam giác kín (0,0),(6,0),(0,6). (2,3) đạt; (4,3) không đạt điều kiện tổng.

<!-- LESSON_ID: TOP02-M14; OUTCOME_ID: TOP02-O14; source: candidate R02 -->

Miền chung ấy có thể rỗng, bị chặn hoặc kéo dài vô hạn; phải đọc tình trạng khả thi trước.

Bài tối ưu không có nghĩa khi miền nghiệm rỗng. Trước hết, hãy nhớ miền giao và hàm tuyến tính F. Miền rỗng không có phương án. Trên đa giác đóng, không rỗng, bị chặn thì hàm tuyến tính đạt max/min tại ít nhất một đỉnh. Miền không bị chặn cần xét riêng; có thể có max nhưng không có min.

Hãy kiểm tra trường hợp sau: Trên x≥0,y≥0 không bị chặn, F=−x−y có max 0 tại O và không có min hữu hạn vì x→∞ thì F→−∞. Hệ x+y≤2,x+y≥5 thì rỗng.

### Vận dụng và tự đối chiếu

<!-- First Try for TOP02-M09; noncanonical knowledge question -->
**1.** −x+0y<1 có hợp lệ và (0,5) thỏa không?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Hợp lệ, (a,b)=(−1,0)≠(0,0); 0<1 đúng.

Nếu em vẫn còn phân vân, hãy quay lại điều kiện vừa dùng. Nếu nghĩ bắt buộc có cả x và y, kiểm điều kiện hệ số không đồng thời bằng 0.

</details>

<!-- First Try for TOP02-M10; noncanonical knowledge question -->
**2.** (3,0) thỏa x+2y≥3 không; O thử phía được không?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

(3,0) thỏa dấu bằng; O ngoài đường x+2y=3 nên thử phía được, nhưng O không thỏa BPT.

Nếu em vẫn còn phân vân, hãy quay lại điều kiện vừa dùng. Nếu điểm thử ở biên, chọn (1,0) hoặc (0,1) khác và thế lại.

</details>

<!-- First Try for TOP02-M11; noncanonical knowledge question -->
**3.** x+2y≥4 biên thế nào, O thỏa không?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Biên liền, O không thỏa 0≥4, tô phía y≥2−x/2.

Nếu em vẫn còn phân vân, hãy quay lại điều kiện vừa dùng. Tô sai? Thử O hoặc một điểm ngoài biên để kiểm dấu và đổi chiều.

</details>

<!-- First Try for TOP02-M12; noncanonical knowledge question -->
**4.** Doanh thu mỗi loại 2 và 3 điểm, cần ít nhất 12. (3,2) đạt?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

2x+3y≥12; 2·3+3·2=12 đúng.

Nếu em vẫn còn phân vân, hãy quay lại điều kiện vừa dùng. Nhầm ít nhất với ≤ thì thử phương án bằng và thấp hơn ngưỡng để sửa.

</details>

<!-- First Try for TOP02-M13; noncanonical knowledge question -->
**5.** x+y≤5 và x+y≥7 có nghiệm chung?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Không, vì một giá trị t=x+y không thể vừa ≤5 và ≥7.

Nếu em vẫn còn phân vân, hãy quay lại điều kiện vừa dùng. Nếu nhầm giao thành hợp, lấy một điểm chỉ thỏa một điều kiện để bác bỏ.

</details>

<!-- First Try for TOP02-M14; noncanonical knowledge question -->
**6.** y≥1,y≤0 có miền nghiệm và cực trị không?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Miền rỗng, không có bài toán tối ưu trên miền đó.

Nếu em vẫn còn phân vân, hãy quay lại điều kiện vừa dùng. Nếu khẳng định miền không bị chặn không có max, thử F=−x−y và O.

</details>

## Chọn phương án tốt nhất trong miền khả thi

Đã tìm thấy miền nghiệm chưa phải đã tối ưu. Ta cần xét đại lượng mục tiêu, các đỉnh và trường hợp giá trị nguyên để hiểu vì sao một nghiệm đại số có thể không phải phương án áp dụng được.

<!-- LESSON_ID: TOP02-M15; OUTCOME_ID: TOP02-O15; source: candidate R02 -->

Cần chọn phương án tốt nhất trong số vô số điểm khả thi. Ta có thể sử dụng giao đường thẳng và hàm F=px+qy. Với đa giác đóng, bị chặn, không rỗng, cực trị tuyến tính đạt tại một đỉnh. Tìm đủ đỉnh, kiểm khả thi, tính F; khi cả hai đỉnh kề cùng tối ưu thì cả cạnh cùng tối ưu.

Chẳng hạn, Miền x,y≥0,x+y≤5,2x+y≤7 có đỉnh O,(7/2,0),(2,3),(0,5). F=3x+2y lần lượt 0,21/2,12,10 ⇒ max 12 tại (2,3).

<!-- LESSON_ID: TOP02-M16; OUTCOME_ID: TOP02-O16; source: candidate R02 -->

Nếu đề yêu cầu các biến nguyên, đỉnh tối ưu theo mô hình liên tục chỉ là điểm xuất phát.

2,67 chiếc máy không thể thực hiện nguyên trạng. Để hiểu, ta dựa vào số nguyên không âm và tìm điểm lưới khả thi. Nếu x,y là sản phẩm, chỉ các điểm nguyên trong miền nghiệm mới hợp lệ. Tối ưu liên tục là cận/gợi ý; phải liệt kê hoặc lập luận theo y nguyên để tìm tối ưu nguyên.

Xét một trường hợp cụ thể. x+2y≤8,2x+y≤8, x,y nguyên≥0, P=3x+2y. Liên tục max 40/3 ở (8/3,8/3). y nguyên 0..4 cho các max P=12,11,13,12,8 ⇒ tối ưu nguyên 13 ở (3,2).

### Vận dụng và tự đối chiếu

<!-- First Try for TOP02-M15; noncanonical knowledge question -->
**1.** x,y≥0,x+y≤4, F=x+y tối đa ở đâu?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Mọi điểm trên cạnh x+y=4 đều đạt 4, không chỉ một đỉnh.

Nếu em vẫn còn phân vân, hãy quay lại điều kiện vừa dùng. Nếu bỏ một đỉnh, vẽ từng đường và kiểm giao có thỏa tất cả ràng buộc.

</details>

<!-- First Try for TOP02-M16; noncanonical knowledge question -->
**2.** x+2y≤4,2x+y≤4, x,y nguyên≥0, max F=x+y?

<details class="slm-topic-first-try" markdown="1">
<summary>Đối chiếu sau khi tự làm</summary>

Max nguyên 2 tại (2,0),(1,1),(0,2), dù liên tục có thể đạt 8/3.

Nếu em vẫn còn phân vân, hãy quay lại điều kiện vừa dùng. Nếu làm tròn tọa độ mà bỏ điều kiện, liệt kê từng y và x lớn nhất hợp lệ.

</details>

## Đọc hình có suy luận (3 hình thật, có title/desc)

- [Đồ thị x²−4x+3 và bảng dấu Δ>0](../../visuals/THPT_TOPIC02_QUADRATIC_SIGN_R01.svg): blob `809ee7091849592e8312548fb8d916f1f461a77f`. Đọc hai nghiệm 1,3 và đỉnh (2,−1); giải thích dấu tích (x−1)(x−3), không coi hình thay chứng minh.
- [Nửa mặt phẳng, biên liền/đứt](../../visuals/THPT_G10_B03_HALFPLANES_D5_R01.svg): blob `a69e5ffabce6c77787ba3829471be7da97e21578`. Đọc điểm thử nằm ngoài đường biên, xác định phía tô và dấu nhận/loại biên.
- [Miền nghiệm đa giác và hàm mục tiêu](../../visuals/THPT_G10_B04_FEASIBLE_POLYGON_D5_R01.svg): blob `64b0ca1142f9cbcb1edebbb220e5bb7a0752ec61`. Ghi các đỉnh O,A,B,C và so sánh F ở đỉnh; ví dụ trên hình là độc lập với M15.

## Mô hình tương tác (chỉ đặc tả, KHÔNG phải tính năng đang chạy)

- `TOP02_QUADRATIC_SIGN_INTERACTION_SPEC`: chọn a≠0, b,c, hiển thị Δ, nghiệm, đường cong và khoảng f>0/f<0; kiểm đủ Δ<0/=0/>0 và a âm/dương; có phiên bản chữ và hỗ trợ bàn phím. Chưa có runtime/browser QA.
- `TOP02_HALFPLANE_INTERACTION_SPEC`: kéo điểm (x,y), chọn điều kiện và dấu, tô giao ràng buộc, chuyển chế độ điểm nguyên; trả lời vì sao điểm nằm trên/ngoài biên. Chỉ mô tả thuật toán/đòi hỏi sư phạm, không tuyên bố đã tích hợp.

# Luyện tập

**38 câu canonical PUBLIC:** 18 câu gốc đã review độc lập đúng snapshot về miền nghiệm, 20 câu CĐ02 mới biên soạn và tự kiểm toán (18 luyện tập, 2 tự luận), tổng 4 bài Written có một rubric/câu. Tất cả câu có duy nhất một bản đề/đáp án/lời giải, tài liệu này **chỉ trỏ ID**, không nhân bản. Câu tái sử dụng không được coi là câu mới. Gợi ý/lời giải ở Practice chỉ mở tự nguyện; mỗi lỗi có D6 dẫn trở lại module.

| Outcome | Các họ dạng và kỹ năng | Canonical ID luyện tập và tự luận |
|---|---|---|
| `TOP02-O01` | Bất đẳng thức và phép đổi chiều — Quy tắc biến đổi tương đương | `THPT-TOP02-ADD01`; `THPT-TOP02-ADD02` |
| `TOP02-O02` | Tam thức, biệt thức và nghiệm — Δ chỉ ra số nghiệm thực | `THPT-TOP02-ADD03`; `THPT-TOP02-ADD04` |
| `TOP02-O03` | Δ<0 và dấu không đổi — Luôn cùng dấu a, không phải vô nghiệm mọi BPT | `THPT-TOP02-ADD05`; `THPT-TOP02-ADD06` |
| `TOP02-O04` | Δ=0 và nghiệm kép — Tiếp xúc trục, không đổi dấu | `THPT-TOP02-ADD07`; `THPT-TOP02-ADD08` |
| `TOP02-O05` | Δ>0 và bảng dấu hai nghiệm — Trong/ngoài hai nghiệm | `THPT-TOP02-ADD09`; `THPT-TOP02-ADD10` |
| `TOP02-O06` | Giải bất phương trình bậc hai — Không bỏ nhầm dấu bằng | `THPT-TOP02-ADD11`; `THPT-TOP02-ADD12` |
| `TOP02-O07` | Tham số và điều kiện đúng với mọi x — Phân biệt Δ<0 và Δ≤0 | `THPT-TOP02-ADD13`; `THPT-TOP02-ADD14`; `THPT-TOP02-W01` |
| `TOP02-O08` | Mô hình bậc hai và miền vật lý — Điều kiện độ dài và thời gian | `THPT-TOP02-ADD15`; `THPT-TOP02-ADD16` |
| `TOP02-O09` | Bậc nhất hai ẩn và nghiệm cặp — Miền điểm trên mặt phẳng | `THPT-G10-B03-C01`; `THPT-TOP02-ADD17` |
| `TOP02-O10` | Thử điểm và thử phía — Không dùng điểm nằm trên biên để xác định phía | `THPT-G10-B03-C02`; `THPT-G10-B03-P03` |
| `TOP02-O11` | Biên và nửa mặt phẳng — Nét đứt/đặc quyết định nhận nghiệm biên | `THPT-G10-B03-P01`; `THPT-G10-B03-P02`; `THPT-G10-B03-P05` |
| `TOP02-O12` | Mô hình một ràng buộc hai ẩn — Không âm, nguyên và đơn vị tiền | `THPT-G10-B03-P04`; `THPT-G10-B03-P06`; `THPT-G10-CHII-W03` |
| `TOP02-O13` | Hệ bất phương trình — Miền giao, không phải hợp | `THPT-G10-B04-C01`; `THPT-G10-B04-C02`; `THPT-G10-B04-P01` |
| `TOP02-O14` | Khả thi, rỗng và không bị chặn — Không bị chặn chưa chắc mất mọi cực trị | `THPT-G10-B04-P04`; `THPT-G10-B04-P05` |
| `TOP02-O15` | Tối ưu tuyến tính trên đa giác — Các đỉnh và cạnh đồng tối ưu | `THPT-G10-B04-P02`; `THPT-G10-B04-P03`; `THPT-G10-CHII-W04-ANCHOR` |
| `TOP02-O16` | Tối ưu khi x,y nguyên — Không làm tròn nghiệm thực máy móc | `THPT-G10-B04-P06`; `THPT-TOP02-ADD18`; `THPT-TOP02-W02` |

**Tự luận Written:** nguồn gốc `THPT-G10-CHII-W03`, `THPT-G10-CHII-W04-ANCHOR` có rubric gốc /7, Anchor chỉ là nhãn. Câu mới `THPT-TOP02-W01` (dấu/tham số), `THPT-TOP02-W02` (tối ưu nguyên) có rubric /7 tại thư viện extension. Không tự chấm Writing chính thức hay ghi Skill Mastery dựa trên rubric tự đối chiếu.

**Lý do chọn phương pháp:** M01 dùng quy tắc đổi chiều; M02–M06 dựa Δ/nhân tử; M07 toàn miền; M08 kết hợp miền vật lý; M09–M12 dùng tọa độ/điểm thử; M13–M16 dùng giao miền/đỉnh/liệt kê điểm nguyên. Phải xét điều kiện a≠0, dấu nghiêm, biên và tính nguyên thay vì chỉ thay số.

# Tự kiểm tra

**16 placement PUBLIC reuse-only, `CLIENT_SELF_CHECK_NO_MASTERY`.** Mỗi outcome chọn đúng một câu đã có trong Luyện tập; đây là tự đối chiếu, **không phải TOPIC_READINESS độc lập** và không tạo Mastery. Không nhập bất kỳ câu ngân hàng RD1 kín vào GitHub.

**Hợp đồng an toàn RELEASE:** Trước **Final Submit / Nộp bài cuối cùng**, không hiện gợi ý, AI Tutor, key, lời giải, rubric hay phản hồi đúng/sai. Chỉ sau khi nộp mới tự mở đối chiếu và liên kết D6. Chức năng bảo vệ phải được kiểm thử trên website thật; Markdown không phải bằng chứng đã tích hợp UI.

| Lượt | Outcome | ID công khai tái sử dụng | Ôn lại |
|---:|---|---|---|
| 1 | `TOP02-O01` | `THPT-TOP02-ADD01` | TOP02-M01 |
| 2 | `TOP02-O02` | `THPT-TOP02-ADD03` | TOP02-M02 |
| 3 | `TOP02-O03` | `THPT-TOP02-ADD05` | TOP02-M03 |
| 4 | `TOP02-O04` | `THPT-TOP02-ADD07` | TOP02-M04 |
| 5 | `TOP02-O05` | `THPT-TOP02-ADD09` | TOP02-M05 |
| 6 | `TOP02-O06` | `THPT-TOP02-ADD11` | TOP02-M06 |
| 7 | `TOP02-O07` | `THPT-TOP02-ADD13` | TOP02-M07 |
| 8 | `TOP02-O08` | `THPT-TOP02-ADD15` | TOP02-M08 |
| 9 | `TOP02-O09` | `THPT-G10-B03-C01` | TOP02-M09 |
| 10 | `TOP02-O10` | `THPT-G10-B03-C02` | TOP02-M10 |
| 11 | `TOP02-O11` | `THPT-G10-B03-P01` | TOP02-M11 |
| 12 | `TOP02-O12` | `THPT-G10-B03-P04` | TOP02-M12 |
| 13 | `TOP02-O13` | `THPT-G10-B04-C01` | TOP02-M13 |
| 14 | `TOP02-O14` | `THPT-G10-B04-P04` | TOP02-M14 |
| 15 | `TOP02-O15` | `THPT-G10-B04-P02` | TOP02-M15 |
| 16 | `TOP02-O16` | `THPT-G10-B04-P06` | TOP02-M16 |

**Sau nộp:** Đối chiếu từng outcome, phân loại sai vì đổi dấu/Δ/đầu mút/điểm thử/miền giao/tối ưu nguyên, rồi luyện tiếp một ID khác chưa dùng ở lượt kiểm. Không lấy selfcheck làm chứng cứ chấm độc lập.

## Phụ lục tác giả (không hiển thị cho học sinh)

PACKET_ID: THPT-TOPIC02-INEQ-QUAD-REGION-FULL-R01
CATALOG_TOPIC: CD02/22
LEARNING_PATH: TOPIC
OUTER_PAGES: KIEN_THUC / LUYEN_TAP / TU_KIEM_TRA
STANDARD_VERSION: 3.0.1
RUNTIME_TOPIC_ID: UNASSIGNED_OWNER_DECISION
SGK_SOURCE_ROLE: ACADEMIC_VERIFICATION_ONLY
SGK_G10_T1_S1: B03 SGK printed22–25/SBT16–18; B04 SGK26–30/SBT19–23; end SGK31–32/SBT24–28 (historical original reviewer)
SGK_G10_T2_B17_S1: SGK printed19–24/SBT16–18; fixed-a parameter SGK p24 ex6.17 and SBT p17–18 confirmed by historic targeted original S1 receipt
SGK_G10_B18_RADICAL: EXCLUDED_BELONGS_TO_CD03
UNREVIEWED_B17_B18_CANDIDATE_ITEMS: NOT_IMPORTED
ORIGINAL_18_CANONICAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122
ORIGINAL_18_NOTEBOOKLM_RECEIPT_BLOB: 47eab8185d431045ab202d58fe4f2fbc3e99628b
TOPIC_ORIGINAL18_INDEX_BLOB: 6412d01a5d2c9b04c6f97d5b6a41c43e85d1c2df
TOPIC_NEW20_EXTENSION_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f
SVG_HALFPLANES_BLOB: a69e5ffabce6c77787ba3829471be7da97e21578
SVG_POLYGON_BLOB: 64b0ca1142f9cbcb1edebbb220e5bb7a0752ec61
SVG_QUADRATIC_SIGN_BLOB: 809ee7091849592e8312548fb8d916f1f461a77f
TOPIC_OUTCOMES: 16
KNOWLEDGE_MODULES: 16
FIRST_TRY_REVEAL_D6: 16_EACH
UNIQUE_PUBLIC_CANONICAL_ITEMS: 38
REUSED_ORIGINAL_PUBLIC: 18
NEW_PUBLIC: 20
PUBLIC_WRITTEN: 4
SELF_CHECK_PUBLIC_PLACEMENTS: 16
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
OFFICIAL_TOPIC_READINESS: NOT_CLAIMED
PRIVATE_RD1_IMPORTED: 0
INTERACTIVE_MODELS_IMPLEMENTED: NO
RELEASE_AUTHORIZATION: NO

| item_id | primary outcome | role | canonical source blob |
|---|---|---|---|
| `THPT-G10-B03-C01` | `TOP02-O09` | TOPIC_PRACTICE | `acea9776d1c7534a4cd0cd28e98db26dedf0c122` |
| `THPT-G10-B03-C02` | `TOP02-O10` | TOPIC_PRACTICE | `acea9776d1c7534a4cd0cd28e98db26dedf0c122` |
| `THPT-G10-B03-P01` | `TOP02-O11` | TOPIC_PRACTICE | `acea9776d1c7534a4cd0cd28e98db26dedf0c122` |
| `THPT-G10-B03-P02` | `TOP02-O11` | TOPIC_PRACTICE | `acea9776d1c7534a4cd0cd28e98db26dedf0c122` |
| `THPT-G10-B03-P03` | `TOP02-O10` | TOPIC_PRACTICE | `acea9776d1c7534a4cd0cd28e98db26dedf0c122` |
| `THPT-G10-B03-P04` | `TOP02-O12` | TOPIC_PRACTICE | `acea9776d1c7534a4cd0cd28e98db26dedf0c122` |
| `THPT-G10-B03-P05` | `TOP02-O11` | TOPIC_PRACTICE | `acea9776d1c7534a4cd0cd28e98db26dedf0c122` |
| `THPT-G10-B03-P06` | `TOP02-O12` | TOPIC_PRACTICE | `acea9776d1c7534a4cd0cd28e98db26dedf0c122` |
| `THPT-G10-B04-C01` | `TOP02-O13` | TOPIC_PRACTICE | `acea9776d1c7534a4cd0cd28e98db26dedf0c122` |
| `THPT-G10-B04-C02` | `TOP02-O13` | TOPIC_PRACTICE | `acea9776d1c7534a4cd0cd28e98db26dedf0c122` |
| `THPT-G10-B04-P01` | `TOP02-O13` | TOPIC_PRACTICE | `acea9776d1c7534a4cd0cd28e98db26dedf0c122` |
| `THPT-G10-B04-P02` | `TOP02-O15` | TOPIC_PRACTICE | `acea9776d1c7534a4cd0cd28e98db26dedf0c122` |
| `THPT-G10-B04-P03` | `TOP02-O15` | TOPIC_PRACTICE | `acea9776d1c7534a4cd0cd28e98db26dedf0c122` |
| `THPT-G10-B04-P04` | `TOP02-O14` | TOPIC_PRACTICE | `acea9776d1c7534a4cd0cd28e98db26dedf0c122` |
| `THPT-G10-B04-P05` | `TOP02-O14` | TOPIC_PRACTICE | `acea9776d1c7534a4cd0cd28e98db26dedf0c122` |
| `THPT-G10-B04-P06` | `TOP02-O16` | TOPIC_PRACTICE | `acea9776d1c7534a4cd0cd28e98db26dedf0c122` |
| `THPT-G10-CHII-W03` | `TOP02-O12` | TOPIC_WRITTEN | `acea9776d1c7534a4cd0cd28e98db26dedf0c122` |
| `THPT-G10-CHII-W04-ANCHOR` | `TOP02-O15` | TOPIC_WRITTEN | `acea9776d1c7534a4cd0cd28e98db26dedf0c122` |
| `THPT-TOP02-ADD01` | `TOP02-O01` | TOPIC_PRACTICE | `e10e57d7684497b0dfa9325af766a75b7cfa239f` |
| `THPT-TOP02-ADD02` | `TOP02-O01` | TOPIC_PRACTICE | `e10e57d7684497b0dfa9325af766a75b7cfa239f` |
| `THPT-TOP02-ADD03` | `TOP02-O02` | TOPIC_PRACTICE | `e10e57d7684497b0dfa9325af766a75b7cfa239f` |
| `THPT-TOP02-ADD04` | `TOP02-O02` | TOPIC_PRACTICE | `e10e57d7684497b0dfa9325af766a75b7cfa239f` |
| `THPT-TOP02-ADD05` | `TOP02-O03` | TOPIC_PRACTICE | `e10e57d7684497b0dfa9325af766a75b7cfa239f` |
| `THPT-TOP02-ADD06` | `TOP02-O03` | TOPIC_PRACTICE | `e10e57d7684497b0dfa9325af766a75b7cfa239f` |
| `THPT-TOP02-ADD07` | `TOP02-O04` | TOPIC_PRACTICE | `e10e57d7684497b0dfa9325af766a75b7cfa239f` |
| `THPT-TOP02-ADD08` | `TOP02-O04` | TOPIC_PRACTICE | `e10e57d7684497b0dfa9325af766a75b7cfa239f` |
| `THPT-TOP02-ADD09` | `TOP02-O05` | TOPIC_PRACTICE | `e10e57d7684497b0dfa9325af766a75b7cfa239f` |
| `THPT-TOP02-ADD10` | `TOP02-O05` | TOPIC_PRACTICE | `e10e57d7684497b0dfa9325af766a75b7cfa239f` |
| `THPT-TOP02-ADD11` | `TOP02-O06` | TOPIC_PRACTICE | `e10e57d7684497b0dfa9325af766a75b7cfa239f` |
| `THPT-TOP02-ADD12` | `TOP02-O06` | TOPIC_PRACTICE | `e10e57d7684497b0dfa9325af766a75b7cfa239f` |
| `THPT-TOP02-ADD13` | `TOP02-O07` | TOPIC_PRACTICE | `e10e57d7684497b0dfa9325af766a75b7cfa239f` |
| `THPT-TOP02-ADD14` | `TOP02-O07` | TOPIC_PRACTICE | `e10e57d7684497b0dfa9325af766a75b7cfa239f` |
| `THPT-TOP02-ADD15` | `TOP02-O08` | TOPIC_PRACTICE | `e10e57d7684497b0dfa9325af766a75b7cfa239f` |
| `THPT-TOP02-ADD16` | `TOP02-O08` | TOPIC_PRACTICE | `e10e57d7684497b0dfa9325af766a75b7cfa239f` |
| `THPT-TOP02-ADD17` | `TOP02-O09` | TOPIC_PRACTICE | `e10e57d7684497b0dfa9325af766a75b7cfa239f` |
| `THPT-TOP02-ADD18` | `TOP02-O16` | TOPIC_PRACTICE | `e10e57d7684497b0dfa9325af766a75b7cfa239f` |
| `THPT-TOP02-W01` | `TOP02-O07` | TOPIC_WRITTEN | `e10e57d7684497b0dfa9325af766a75b7cfa239f` |
| `THPT-TOP02-W02` | `TOP02-O16` | TOPIC_WRITTEN | `e10e57d7684497b0dfa9325af766a75b7cfa239f` |

**Review boundary:** Original 18 questions and two SVGs independently reviewed only on immutable old SGK source; B17 parameter original targeted PASS only for original fixed-a note. Newly authored Topic modules, 20 PUBLIC items and one SVG are Delta C, author-self-verified under owner-effective Q18 v3.0.1; **không mạo nhận NotebookLM PASS cho CĐ02**.
