# Chuyên đề 02 · Bất đẳng thức, dấu tam thức bậc hai và miền nghiệm

Một phương án hợp lệ cần thỏa mọi điều kiện, từ bất phương trình một ẩn tới miền khả thi hai ẩn. Hãy đọc lần lượt bốn mạch: kiểm ràng buộc, xét dấu tam thức, biểu diễn miền nghiệm và chọn phương án tốt nhất.

## 1. Kiến thức

### 1. Từ một ràng buộc đến tập nghiệm

Một xưởng chỉ được sử dụng tối đa một lượng vật liệu nhất định, nhưng vẫn phải làm ra đủ số sản phẩm. Mỗi phương án có thể đạt một mục tiêu mà vi phạm mục tiêu khác. Toán học giúp chúng ta đặt đúng các điều kiện “không quá”, “ít nhất”, “không âm” và tìm **tất cả** phương án hợp lệ, chứ không chỉ thử ngẫu nhiên vài phương án.

Nếu bài toán chỉ có một đại lượng chưa biết, ta giải bất phương trình để tìm một tập số. Khi biểu thức có dạng bậc hai, nghiệm của tam thức chia trục số thành những khoảng cần xét dấu. Khi phải quyết định đồng thời hai đại lượng, một nghiệm là một **điểm** trong mặt phẳng; nhiều ràng buộc tạo nên **miền khả thi**. Sau khi biết miền khả thi, ta mới có căn cứ chọn phương án tối ưu. Đó là một mạch suy luận liên tục từ điều kiện tới quyết định.

Trong chuyên đề này, \(\mathbb R\) chỉ các số thực; \(\mathbb Z_{\ge0}\) chỉ các số nguyên không âm; dấu \(\le\) nhận cả trường hợp bằng. Em sẽ gặp cặp tọa độ \((x,y)\), phép giao của các tập phương án, và biệt thức \(\Delta\) của tam thức bậc hai. Các ký hiệu được giải thích tại chỗ khi cần dùng.

Trước hết, mỗi bước biến đổi bất phương trình phải giữ **đúng tập các giá trị được phép chọn**. Đó là lý do ta cần hiểu bản chất của việc đổi chiều dấu khi chia cho số âm, thay vì chỉ nhớ một mẹo chuyển vế.

<!-- LESSON_ID: TOP02-M01; OUTCOME_ID: TOP02-O01; R04_BASE_BLOB: 907af796ff6f61dee518f7d25e5ff99cb23467f1 -->

#### 1.1. Biến đổi bất phương trình

Khi kiểm tra một phương án có hợp lệ hay không, ta thường phải biết một đại lượng **lớn hơn**, **nhỏ hơn** hoặc **ít nhất** một mức nào đó. Khác với phương trình tìm giá trị bằng nhau, bất phương trình chọn ra **tập các giá trị thỏa điều kiện**. Mỗi phép biến đổi vì thế phải giữ đúng tập này. Cộng cùng một số vào hai vế không đổi chiều bất đẳng thức; nhân hoặc chia cho một số dương cũng vậy, nhưng khi nhân hoặc chia cho **số âm**, ta phải đảo chiều. Nếu nhân một biểu thức chứa biến chưa biết dấu, cần xét dấu trước.

Chẳng hạn, từ \(-4x+1>9\) suy ra \(-4x>8\). Chia cho \(-4\) khiến dấu đổi thành \(x<-2\). Ta có thể tự kiểm bằng cách chọn \(x=-3\): vế trái \(13>9\) đúng; còn \(x=-1\) cho \(5>9\) sai. Phép thử không thay thế chứng minh, nhưng giúp phát hiện sai dấu ngay khi tính.

**Ví dụ**

**Đề bài.** Giải \(-5x+2>12\).

**Lời giải.** Trừ 2, được \(-5x>10\). Chia cho \(-5<0\) phải **đổi chiều**, nên \(x<-2\). Thử x=-3 thỏa, x=0 không thỏa.

**Vận dụng**

Giải \(-3(x-2)\ge6\). Hãy giải thích bước nào buộc đổi chiều dấu bất đẳng thức.

<details markdown="1"><summary>Đối chiếu</summary>

Khai triển \(-3x+6\ge6\), suy ra \(-3x\ge0\). Chia cho \(-3<0\), ta được \(x\le0\), kể cả \(x=0\) vì dấu ban đầu có bằng. Nếu em viết \(x\ge0\), hãy thử \(x=1\) trong đề gốc để thấy kết luận sai.

</details>

### 2. Tại sao nghiệm của tam thức chia trục số thành các khoảng?

Sau khi biết cách giữ nguyên tập nghiệm khi biến đổi, ta gặp một khó khăn mới: biểu thức \(ax^2+bx+c\) có thể **đổi dấu** khi \(x\) thay đổi. Để chọn đúng các giá trị làm nó dương hay âm, cần biết những điểm biểu thức bằng 0 và điều gì xảy ra ở hai phía các điểm ấy. Đồ thị parabol và phép phân tích nhân tử cho ta hai cách nhìn nhất quán; biệt thức \(\Delta\) giúp nhận diện liệu có không, một hay hai điểm cắt/chạm trục.

<!-- LESSON_ID: TOP02-M02; OUTCOME_ID: TOP02-O02; R04_BASE_BLOB: 907af796ff6f61dee518f7d25e5ff99cb23467f1 -->

#### 2.1. Biệt thức và nghiệm của tam thức

Muốn xét dấu tam thức cần biết nó bằng 0 ở đâu. Điểm xuất phát là hằng đẳng thức và công thức nghiệm phương trình bậc hai. f=ax²+bx+c, a≠0; Δ=b²−4ac. Δ<0 không có nghiệm thực, Δ=0 có nghiệm kép, Δ>0 có hai nghiệm thực. Nếu a biến thiên có thể bằng 0, phải xét riêng a=0 trước.

Chẳng hạn, x²−5x+6 có Δ=1 và hai nghiệm 2,3; f=(x−2)(x−3), nhân tử cho phép đọc dấu.

**Ví dụ**

**Đề bài.** Tìm nghiệm của \(2x^2-7x+3=0\).

**Lời giải.** \(a=2,b=-7,c=3\) cho \(\Delta=49-24=25\). Nghiệm \((7\pm5)/4\) là \(1/2,3\); do đó \(2x^2-7x+3=(2x-1)(x-3)\).

**Vận dụng**

x²+2x+1 có Δ và nghiệm nào?

<details markdown="1"><summary>Đối chiếu</summary>

Δ=0, nghiệm kép −1 vì (x+1)².

Quên 2a hoặc sai dấu b thì thử nhân tích để kiểm nghiệm.

</details>

<!-- LESSON_ID: TOP02-M03; OUTCOME_ID: TOP02-O03; R04_BASE_BLOB: 907af796ff6f61dee518f7d25e5ff99cb23467f1 -->

#### 2.2. Tam thức luôn cùng dấu

Nhưng biết nghiệm của tam thức vẫn chưa đủ: cần hiểu dấu của nó khi không có nghiệm thực. Có tam thức luôn dương hoặc luôn âm với mọi số thực. Ta bắt đầu từ tính không âm của bình phương và Δ. Với a≠0, Δ<0, tam thức không có nghiệm thực và luôn cùng dấu a. Điều đó không có nghĩa f>0 hay f<0 vô nghiệm.

Xét ví dụ: 2x²+2x+3 có Δ=−20<0, a=2>0 ⇒ luôn dương; hoàn phương thành 2(x+1/2)²+5/2>0 xác minh.

**Ví dụ**

**Đề bài.** Chứng minh \(x^2+2x+5>0\) với mọi \(x\in\mathbb R\).

**Lời giải.** Hoàn phương thành \((x+1)^2+4\ge4>0\). Cũng có \(a>0,\Delta=-16<0\), tam thức cùng dấu a.

**Vận dụng**

−x²+2x−3 có dấu gì?

<details markdown="1"><summary>Đối chiếu</summary>

−[(x−1)²+2]<0 mọi x.

Nếu kết luận ‘không có nghiệm vì Δ<0’, thử x=0 trước khi quyết định.

</details>

<!-- LESSON_ID: TOP02-M04; OUTCOME_ID: TOP02-O04; R04_BASE_BLOB: 907af796ff6f61dee518f7d25e5ff99cb23467f1 -->

#### 2.3. Nghiệm kép và dấu bằng

Khi biệt thức bằng không, đồ thị vừa chạm trục tại nghiệm kép và quy tắc dấu thay đổi. Tại nghiệm kép giá trị bằng 0 nhưng hai phía có cùng dấu. Trước hết, hãy nhớ bình phương không âm; phân biệt < với ≤. Nếu Δ=0 thì f=a(x−x₀)², cùng dấu a ngoài x₀ và bằng 0 tại x₀. Dấu không nghiêm có thể nhận nghiệm kép, dấu nghiêm phải bỏ.

Hãy kiểm tra trường hợp sau: −2(x−3)²≤0 mọi x; bằng 0 khi x=3, âm khi x≠3. Muốn giải f≥0 chỉ nhận {3}.

**Ví dụ**

**Đề bài.** Giải \(-3(x-2)^2\ge0\).

**Lời giải.** Bình phương không âm, nên biểu thức \(\le0\). Để \(\ge0\) chỉ có thể bằng 0: \(x=2\).

**Vận dụng**

Giải (x+4)²≤0.

<details markdown="1"><summary>Đối chiếu</summary>

Chỉ x=−4 vì bình phương ≥0.

Nếu viết một khoảng, thử x=−3 để bác bỏ.

</details>

<!-- LESSON_ID: TOP02-M05; OUTCOME_ID: TOP02-O05; R04_BASE_BLOB: 907af796ff6f61dee518f7d25e5ff99cb23467f1 -->

#### 2.4. Ba khoảng của bảng dấu

Nếu biệt thức dương, hai nghiệm thực chia trục số thành ba miền xét dấu. Hai nghiệm chia trục số thành ba vùng, mỗi vùng giữ dấu ổn định. Ta có thể sử dụng dấu tích hai nhân tử. Với x₁<x₂, f=a(x−x₁)(x−x₂) cùng dấu a bên ngoài, trái dấu a ở giữa; bằng 0 ở x₁,x₂. Đây là lý do của bảng dấu chứ không phải quy tắc học thuộc.

Chẳng hạn, với \(f(x)=x^2-4x+3=(x-1)(x-3)\) như trên hình bên dưới, parabol cắt trục hoành tại \(1\) và \(3\). Do hệ số \(a=1>0\), \(f(x)>0\) khi \(x<1\) hoặc \(x>3\), còn \(f(x)<0\) khi \(1<x<3\). Đổi dấu toàn bộ tam thức sẽ đổi dấu hai miền này. Hình giúp quan sát, còn phép phân tích nhân tử giải thích vì sao dấu thay đổi.

![Đồ thị tam thức bậc hai và các khoảng dấu](../../visuals/THPT_TOPIC02_QUADRATIC_SIGN_R01.svg)

*Quan sát hình:* So vị trí nghiệm trên trục hoành với các khoảng đồ thị nằm trên và dưới trục; dấu nghiệm và dấu hệ số a phải được xét trước khi kết luận.

**Ví dụ**

**Đề bài.** Xét dấu \(x^2-5x+4\).

**Lời giải.** \(f=(x-1)(x-4)\), a>0; f dương ngoài đoạn [1,4], âm trong (1,4), bằng 0 tại 1,4. Hình trong bài dùng tam thức tương tự có nghiệm 1,3.

**Vận dụng**

Giải −(x+1)(x−4)>0.

<details markdown="1"><summary>Đối chiếu</summary>

−1<x<4, không lấy −1,4.

Nếu sai, thử một x nằm giữa nghiệm để đối chiếu dấu của hai thừa số.

</details>

<!-- LESSON_ID: TOP02-M06; OUTCOME_ID: TOP02-O06; R04_BASE_BLOB: 907af796ff6f61dee518f7d25e5ff99cb23467f1 -->

#### 2.5. Giải bất phương trình bậc hai

Từ ba trường hợp của biệt thức, ta có thể giải bất phương trình bậc hai một cách có căn cứ. Một điều kiện ≥ khác > chính ở các nghiệm biên. Để xác định điều đó, cần xét ba trường hợp Δ và khoảng, đoạn trên ℝ. Đưa về f(x)⋄0, kiểm a≠0, tìm nghiệm, chọn khoảng theo dấu, rồi xét dấu nghiêm/non-nghiêm để lấy/loại đầu mút. Với Δ<0 có thể được ℝ hoặc ∅.

Chẳng hạn, x²−5x+6≤0 ⇔ (x−2)(x−3)≤0 ⇒ x∈[2,3]. Chọn nhân tử vì nghiệm là số nguyên.

**Ví dụ**

**Đề bài.** Giải \(x^2-6x+8\ge0\).

**Lời giải.** Từ \((x-2)(x-4)\ge0\), hai thừa số cùng dấu khi \(x\le2\) hoặc \(x\ge4\). Nhận đầu mút vì \(\ge\).

**Vận dụng**

Giải −x²+4x−3>0.

<details markdown="1"><summary>Đối chiếu</summary>

1<x<3 vì −(x−1)(x−3)>0.

Nếu quên đầu mút ở ≤, thử x=2 trong biểu thức rồi sửa dấu ngoặc.

</details>

<!-- LESSON_ID: TOP02-M07; OUTCOME_ID: TOP02-O07; R04_BASE_BLOB: 907af796ff6f61dee518f7d25e5ff99cb23467f1 -->

#### 2.6. Bất phương trình đúng với mọi x

Nếu hệ số chứa tham số, kết luận 'đúng với mọi x' phải kiểm tra mọi trường hợp hợp lệ. Một vài phép thử x không chứng minh ‘đúng với mọi x’. Điểm xuất phát là biệt thức và nghiệm kép. Với a>0 **cố định**, f>0 mọi ℝ iff Δ<0; f≥0 mọi ℝ iff Δ≤0. Với a<0 cố định dùng điều kiện âm tương ứng. Không âm thầm áp dụng cho a(m) có thể bằng 0.

Chẳng hạn, x²+2(m−1)x+(m+1)>0 mọi x: Δ=4m(m−3)<0 ⇒ 0<m<3; hai biên làm tam thức chạm 0 nên bị loại.

**Ví dụ**

**Đề bài.** Tìm \(m\) để \(x^2+2(m-1)x+(m+1)>0\) với mọi x thực.

**Lời giải.** Vì a=1 cố định dương, điều kiện dương nghiêm trên \(\mathbb R\) là \(\Delta=4m(m-3)<0\), suy ra \(0<m<3\); hai biên có nghiệm kép nên loại.

**Vận dụng**

Tìm m để x²−2mx+1≥0 mọi x.

<details markdown="1"><summary>Đối chiếu</summary>

Δ=4(m²−1)≤0 ⇒ m∈[−1,1].

Nếu lấy cả biên trong bài >0, kiểm x tại nghiệm kép và loại; luyện Written W01.

</details>

<!-- LESSON_ID: TOP02-M08; OUTCOME_ID: TOP02-O08; R04_BASE_BLOB: 907af796ff6f61dee518f7d25e5ff99cb23467f1 -->

#### 2.7. Miền nghiệm có điều kiện vật lý

Một miền nghiệm đại số còn có thể bị thu hẹp bởi đơn vị và điều kiện vật lý của mô hình. Nghiệm đại số có thể không dùng được nếu độ dài âm, thời gian âm. Ta bắt đầu từ diện tích chữ nhật và phương trình bậc hai. Đặt biến, nêu miền vật lý, lập bất phương trình, giải, giao tập nghiệm với miền ban đầu rồi kiểm ý nghĩa. “Ít nhất” là ≥; “không quá” là ≤.

Xét ví dụ: 20m rào ba cạnh sát tường: 0<x<10, S=x(20−2x)≥32 ⇔ (x−2)(x−8)≤0 ⇒ x∈[2,8] m, đúng miền vật lý.

**Ví dụ**

**Đề bài.** Rào ba cạnh một vườn sát tường bằng 20 m dây; hai cạnh rộng x. Diện tích ít nhất \(32m^2\). Tìm x.

**Lời giải.** Chiều còn lại \(20-2x>0\) cho \(0<x<10\). \(x(20-2x)\ge32\) tương đương \((x-2)(x-8)\le0\). Vậy \(x\in[2,8]\) m, nằm đúng miền vật lý.

**Vận dụng**

h(t)=−t²+6t với t≥0; khi nào h≥8?

<details markdown="1"><summary>Đối chiếu</summary>

(t−2)(t−4)≤0 ⇒ t∈[2,4].

Nếu có nghiệm âm, kiểm lại điều kiện khi đặt biến thay vì nhận tất cả.

</details>

### 3. Từ khoảng nghiệm trên trục số đến miền khả thi trong mặt phẳng

Trên trục số, một số \(x\) hoặc thuộc tập nghiệm hoặc không. Với hai đại lượng \(x,y\), mỗi phương án là một điểm \((x,y)\); bất phương trình bậc nhất chia mặt phẳng bởi một **đường biên**. Ta chỉ giữ phía chứa các điểm thỏa điều kiện, rồi lấy **phần chung** khi có nhiều ràng buộc. Điểm nằm trên biên phải được xét riêng: dấu có bằng thì nhận biên, dấu nghiêm ngặt thì không.

<!-- LESSON_ID: TOP02-M09; OUTCOME_ID: TOP02-O09; R04_BASE_BLOB: 907af796ff6f61dee518f7d25e5ff99cb23467f1 -->

#### 3.1. Bất phương trình bậc nhất hai ẩn

Hai quyết định x,y cần mô tả tập cặp khả thi. Trước hết, hãy nhớ cặp tọa độ (x,y), thay số vào biểu thức. BPT bậc nhất hai ẩn có dạng ax+by⋄c, (a,b)≠(0,0); một hệ số bằng 0 vẫn hợp lệ. Một cặp (x,y) là nghiệm nếu thế vào làm bất phương trình đúng.

Hãy kiểm tra trường hợp sau: 0x+2y≥4 vẫn bậc nhất hai ẩn, tương đương y≥2; (10,3) hợp lệ, (0,1) sai.

**Ví dụ**

**Đề bài.** Xét \(0x+2y\ge4\). Kiểm hai cặp \((10,3)\) và \((0,1)\).

**Lời giải.** Hệ số (0,2) không đồng thời bằng 0 nên vẫn bậc nhất hai ẩn. (10,3) cho 6≥4 đúng; (0,1) cho 2≥4 sai.

**Vận dụng**

−x+0y<1 có hợp lệ và (0,5) thỏa không?

<details markdown="1"><summary>Đối chiếu</summary>

Hợp lệ, (a,b)=(−1,0)≠(0,0); 0<1 đúng.

Nếu nghĩ bắt buộc có cả x và y, kiểm điều kiện hệ số không đồng thời bằng 0.

</details>

<!-- LESSON_ID: TOP02-M10; OUTCOME_ID: TOP02-O10; R04_BASE_BLOB: 907af796ff6f61dee518f7d25e5ff99cb23467f1 -->

#### 3.2. Chọn điểm thử khác đường biên

Để nhận ra nửa mặt phẳng được chọn, hãy thử một điểm không nằm trên đường biên. Điểm O có thể ngay trên đường và không giúp chọn nửa mặt phẳng. Ta có thể sử dụng đường thẳng ax+by=c và thế cặp số. Để thử nghiệm, thay (x,y) vào BPT. Để chọn phía của đường biên, dùng điểm **không thuộc** đường biên; O chỉ phù hợp nếu c≠0. Một điểm ở biên thỏa ≤ nhưng không quyết định phía.

Chẳng hạn, với \(x-2y>3\), điểm \((4,0)\) thỏa vì \(4>3\); điểm \((1,-1)\) không thỏa vì \(3>3\) sai. Gốc \(O=(0,0)\) không nằm trên đường biên \(x-2y=3\) nên có thể dùng thử phía, nhưng chính \(O\) không thỏa điều kiện.

**Ví dụ**

**Đề bài.** Với \(x-2y>3\), thử \((4,0)\), \((1,-1)\) và O để chọn phía.

**Lời giải.** (4,0) cho 4>3 đúng. (1,-1) cho 3>3 sai, lại ở biên nên không chọn phía. O không ở biên và cho 0>3 sai, nên nửa phía O không phải nghiệm.

**Vận dụng**

(3,0) thỏa x+2y≥3 không; O thử phía được không?

<details markdown="1"><summary>Đối chiếu</summary>

(3,0) thỏa dấu bằng; O ngoài đường x+2y=3 nên thử phía được, nhưng O không thỏa BPT.

Nếu điểm thử ở biên, chọn (1,0) hoặc (0,1) khác và thế lại.

</details>

<!-- LESSON_ID: TOP02-M11; OUTCOME_ID: TOP02-O11; R04_BASE_BLOB: 907af796ff6f61dee518f7d25e5ff99cb23467f1 -->

#### 3.3. Đường biên được lấy hoặc loại

Bản thân đường biên có được lấy hay không phụ thuộc vào dấu bất đẳng thức. Hình vẽ sai nét đường làm kết luận sai với các điểm ở mép. Để xác định điều đó, cần xét bất đẳng thức một ẩn và đường thẳng. ≤/≥ nhận biên (nét liền), </> loại biên (nét đứt). Khi đưa về y⋄mx+n, chia cho hệ số âm phải đảo chiều. Chọn một điểm ngoài biên để xác định phía cần tô.

Trên hình, điều kiện \(x+2y\le4\) có đường biên **nét liền** và nhận gốc \(O=(0,0)\). Với điều kiện \(2x-y<1\), biến đổi tương đương thành \(y>2x-1\); đường biên phải vẽ **nét đứt**. Gốc \(O\) không nằm trên đường \(2x-y=1\) và thỏa \(0<1\), nên thuộc nửa mặt phẳng nghiệm. Như vậy, việc chọn phía và việc nhận biên là **hai quyết định khác nhau**.

![Đường thẳng biên và nửa mặt phẳng nghiệm](../../visuals/THPT_G10_B03_HALFPLANES_D5_R01.svg)

*Quan sát hình:* Hãy chọn một điểm không thuộc biên để quyết định phía thỏa. Biên nét liền/đứt tương ứng với điều kiện có/không có dấu bằng.

**Ví dụ**

**Đề bài.** Từ hình \(x+2y\le4\), \(2x-y<1\), tìm biên được nhận và kiểm O.

**Lời giải.** Với \(\le\), nhận biên \(x+2y=4\); với \(<\), loại biên \(2x-y=1\). O thỏa \(0\le4\) và \(0<1\). Khi chuyển vế thành \(y>2x-1\), nhớ đảo dấu.

**Vận dụng**

x+2y≥4 biên thế nào, O thỏa không?

<details markdown="1"><summary>Đối chiếu</summary>

Biên liền, O không thỏa 0≥4, tô phía y≥2−x/2.

Tô sai? Thử O hoặc một điểm ngoài biên để kiểm dấu và đổi chiều.

</details>

<!-- LESSON_ID: TOP02-M12; OUTCOME_ID: TOP02-O12; R04_BASE_BLOB: 907af796ff6f61dee518f7d25e5ff99cb23467f1 -->

#### 3.4. Lập ràng buộc hai ẩn

Khi diễn đạt một ràng buộc thực tế, phải biến câu chữ thành cả đường biên lẫn phía được chọn. Một phương án thỏa số tiền nhưng có 2,5 thùng không dùng được. Điểm xuất phát là phân biệt ≤ và ≥; đơn vị. Đặt x,y và đơn vị. Số vé/sản phẩm cần nguyên không âm, đại lượng đo có thể thực không âm. ‘Ít nhất’ → ≥, ‘không quá’ → ≤; kiểm từng phương án bằng thế số.

Chẳng hạn, mỗi thùng A giá 4 nghìn đồng, mỗi thùng B giá 7 nghìn đồng, ngân sách không quá 56 nghìn đồng. Nếu \(x,y\) lần lượt là số thùng A, B thì \(4x+7y\le56\), với \(x,y\) nguyên không âm. Phương án \((7,4)\) đúng ngân sách vì chi phí bằng 56; \((8,4)\) bị loại vì chi phí 60. Điều kiện **nguyên không âm** quan trọng không kém bất phương trình tiền.

**Ví dụ**

**Đề bài.** Hai loại thùng giá 4 và 7 nghìn; ngân sách 56 nghìn. Lập điều kiện cho số thùng nguyên x,y, kiểm (7,4).

**Lời giải.** Vì x,y là số thùng, \(x,y\in\mathbb Z_{\ge0}\). Điều kiện \(4x+7y\le56\) (nghìn). (7,4) cho 56 nên hợp lệ, (8,4) cho 60 nên không.

**Vận dụng**

Doanh thu mỗi loại 2 và 3 điểm, cần ít nhất 12. (3,2) đạt?

<details markdown="1"><summary>Đối chiếu</summary>

2x+3y≥12; 2·3+3·2=12 đúng.

Nhầm ít nhất với ≤ thì thử phương án bằng và thấp hơn ngưỡng để sửa.

</details>

<!-- LESSON_ID: TOP02-M13; OUTCOME_ID: TOP02-O13; R04_BASE_BLOB: 907af796ff6f61dee518f7d25e5ff99cb23467f1 -->

#### 3.5. Miền giao của hệ bất phương trình

Hai ràng buộc cùng đúng dẫn tới giao của hai miền nghiệm, không phải hợp. Đạt một điều kiện mà vi phạm điều kiện khác thì vẫn không khả thi. Ta bắt đầu từ giao của tập hợp và tọa độ. Miền nghiệm của hệ là giao của tất cả nửa mặt phẳng; có thể rỗng, bị chặn hoặc vô hạn. Mọi điểm phải thỏa đồng thời từng điều kiện, kể cả ràng buộc dấu x,y.

Xét ví dụ: x≥0,y≥0,x+y≤6 tạo tam giác kín (0,0),(6,0),(0,6). (2,3) đạt; (4,3) không đạt điều kiện tổng.

**Ví dụ**

**Đề bài.** Xét \(x,y\ge0,\ x+y\le6\). Tìm đỉnh và thử (2,3), (4,3).

**Lời giải.** Miền giao là tam giác đóng có các đỉnh (0,0),(6,0),(0,6). (2,3) tổng 5 thỏa; (4,3) tổng 7 không thỏa.

**Vận dụng**

x+y≤5 và x+y≥7 có nghiệm chung?

<details markdown="1"><summary>Đối chiếu</summary>

Không, vì một giá trị t=x+y không thể vừa ≤5 và ≥7.

Nếu nhầm giao thành hợp, lấy một điểm chỉ thỏa một điều kiện để bác bỏ.

</details>

<!-- LESSON_ID: TOP02-M14; OUTCOME_ID: TOP02-O14; R04_BASE_BLOB: 907af796ff6f61dee518f7d25e5ff99cb23467f1 -->

#### 3.6. Miền rỗng và không bị chặn

Miền chung ấy có thể rỗng, bị chặn hoặc kéo dài vô hạn; phải đọc tình trạng khả thi trước. Bài tối ưu không có nghĩa khi miền nghiệm rỗng. Trước hết, hãy nhớ miền giao và hàm tuyến tính F. Miền rỗng không có phương án. Trên đa giác đóng, không rỗng, bị chặn thì hàm tuyến tính đạt max/min tại ít nhất một đỉnh. Miền không bị chặn cần xét riêng; có thể có max nhưng không có min.

Hãy kiểm tra trường hợp sau: Trên x≥0,y≥0 không bị chặn, F=−x−y có max 0 tại O và không có min hữu hạn vì x→∞ thì F→−∞. Hệ x+y≤2,x+y≥5 thì rỗng.

**Ví dụ**

**Đề bài.** Trên \(x,y\ge0\) tìm max/min của \(F=-x-y\). Hệ \(x+y\le2,\ x+y\ge5\) có nghiệm?

**Lời giải.** \(F=-x-y\le0\), max bằng 0 tại O. Cho \(x=t\to\infty,y=0\) thì \(F\to-\infty\), không có min hữu hạn. Hệ hai điều kiện còn lại rỗng vì một tổng không thể đồng thời ≤2 và ≥5.

**Vận dụng**

Trên miền \(x\ge0,y\ge0\) không bị chặn, hàm mục tiêu \(F=-2x-y\) có giá trị lớn nhất và nhỏ nhất hữu hạn không? Giải thích bằng một điểm cụ thể và một dãy phương án.

<details markdown="1"><summary>Đối chiếu</summary>

Miền \(x,y\ge0\) không bị chặn, nhưng \(F=-2x-y\le0\) nên có **giá trị lớn nhất bằng 0** tại \(O=(0,0)\). Không có giá trị nhỏ nhất hữu hạn: lấy \(x=t\ge0,y=0\), ta được \(F=-2t\to-\infty\) khi \(t\to+\infty\). Đây là lý do không được suy từ “miền không bị chặn” ra “không có mọi cực trị”.

</details>

### 4. Từ phương án hợp lệ đến phương án tốt nhất

Một phương án có thể thỏa mọi ràng buộc mà vẫn chưa đem lại lợi nhuận cao nhất hoặc chi phí thấp nhất. Sau khi dựng miền khả thi, ta cần một **hàm mục tiêu** đo điều muốn tối ưu. Với hàm tuyến tính trên miền đa giác đóng, bị chặn, không rỗng, có thể đẩy đường mức song song của hàm mục tiêu đến khi chạm đỉnh cuối cùng; vì thế việc tính tại các đỉnh có cơ sở hình học. Nhưng nếu số sản phẩm buộc phải là số nguyên, điểm tối ưu liên tục chưa chắc là phương án thực hiện được.

<!-- LESSON_ID: TOP02-M15; OUTCOME_ID: TOP02-O15; R04_BASE_BLOB: 907af796ff6f61dee518f7d25e5ff99cb23467f1 -->

#### 4.1. Tối ưu tuyến tính trên đa giác

Cần chọn phương án tốt nhất trong số vô số điểm khả thi. Ta có thể sử dụng giao đường thẳng và hàm F=px+qy. Với đa giác đóng, bị chặn, không rỗng, cực trị tuyến tính đạt tại một đỉnh. Tìm đủ đỉnh, kiểm khả thi, tính F; khi cả hai đỉnh kề cùng tối ưu thì cả cạnh cùng tối ưu.

Chẳng hạn, với \(x,y\ge0\), \(x+y\le6\), \(2x+y\le8\), miền khả thi trong hình có bốn đỉnh \(O=(0,0)\), \(A=(4,0)\), \(B=(2,4)\), \(C=(0,6)\). Tại các đỉnh, \(F=3x+2y\) lần lượt bằng \(0,12,14,12\); giá trị lớn nhất **14** tại \(B\). Nếu bỏ bước kiểm tra đường biên, ta có thể tính nhầm một giao điểm không thuộc miền hoặc bỏ sót đỉnh tối ưu.

![Miền khả thi dạng đa giác và hàm mục tiêu](../../visuals/THPT_G10_B04_FEASIBLE_POLYGON_D5_R01.svg)

*Quan sát hình:* Đọc từng đỉnh \(O,A,B,C\), thế tọa độ vào **cả hai ràng buộc** rồi đối chiếu bốn giá trị \(F=0,12,14,12\). Hình minh họa **tối ưu liên tục**; nếu biến chỉ nhận số nguyên, phải quay lại kiểm tra các điểm lưới của miền.

**Ví dụ**

**Đề bài.** Trên \(x,y\ge0,\ x+y\le5,\ 2x+y\le6\), tối đa \(F=3x+2y\).

**Lời giải.** Đỉnh O=(0,0), A=(3,0), B=(1,4), C=(0,5). F tương ứng 0,9,11,10, nên max 11 tại B. Hình kèm theo minh họa đa giác khác với max 14 tại (2,4).

**Vận dụng**

x,y≥0,x+y≤4, F=x+y tối đa ở đâu?

<details markdown="1"><summary>Đối chiếu</summary>

Mọi điểm trên cạnh x+y=4 đều đạt 4, không chỉ một đỉnh.

Nếu bỏ một đỉnh, vẽ từng đường và kiểm giao có thỏa tất cả ràng buộc.

</details>

<!-- LESSON_ID: TOP02-M16; OUTCOME_ID: TOP02-O16; R04_BASE_BLOB: 907af796ff6f61dee518f7d25e5ff99cb23467f1 -->

#### 4.2. Tối ưu với biến nguyên

Nếu đề yêu cầu các biến nguyên, đỉnh tối ưu theo mô hình liên tục chỉ là điểm xuất phát. 2,67 chiếc máy không thể thực hiện nguyên trạng. Để xác định điều đó, cần xét số nguyên không âm và tìm điểm lưới khả thi. Nếu x,y là sản phẩm, chỉ các điểm nguyên trong miền nghiệm mới hợp lệ. Tối ưu liên tục là cận/gợi ý; phải liệt kê hoặc lập luận theo y nguyên để tìm tối ưu nguyên.

Chẳng hạn, x+2y≤8,2x+y≤8, x,y nguyên≥0, P=3x+2y. Liên tục max 40/3 ở (8/3,8/3). y nguyên 0..4 cho các max P=12,11,13,12,8 ⇒ tối ưu nguyên 13 ở (3,2).

**Ví dụ**

**Đề bài.** Với \(x+2y\le8,\ 2x+y\le8,\ x,y\in\mathbb Z_{\ge0}\), tối đa \(P=3x+2y\).

**Lời giải.** Miền liên tục có giao (8/3,8/3), max \(P=40/3\). Với y nguyên từ 0 đến 4, max P lần lượt 12,11,13,12,8. Vậy max nguyên 13 tại (3,2); không được làm tròn nghiệm liên tục.

**Vận dụng**

x+2y≤4,2x+y≤4, x,y nguyên≥0, max F=x+y?

<details markdown="1"><summary>Đối chiếu</summary>

Max nguyên 2 tại (2,0),(1,1),(0,2), dù liên tục có thể đạt 8/3.

Nếu làm tròn tọa độ mà bỏ điều kiện, liệt kê từng y và x lớn nhất hợp lệ.

</details>

## 2. Luyện tập

Tự giải và kiểm điều kiện trước khi mở lời giải; với trắc nghiệm, giải thích vì sao đáp án đúng; với tự luận, trình bày từng bước rồi tự đối chiếu rubric. Sai ở dấu, điểm biên hay tính nguyên thì trở lại mục Kiến thức tương ứng.

### Bất phương trình một ẩn

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP02-ADD01; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; OUTCOME: TOP02-O01; NO_NEW_BANK -->

#### Bài 1

-2(3x−1)≤8. Giải bất phương trình và giải thích bước đảo chiều.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x≥−1.

−6x+2≤8 ⇒ −6x≤6. Chia cả hai vế cho −6 (âm) phải đổi ≤ thành ≥, nên x≥−1; thử x=−1 cho bằng, x=0 cho 2≤8.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP02-ADD02; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; OUTCOME: TOP02-O01; NO_NEW_BANK -->

#### Bài 2

Chứng minh x²−6x+9≥0 với mọi số thực x; khi nào xảy ra dấu bằng?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Đúng với mọi x∈ℝ; bằng 0 khi x=3.

x²−6x+9=(x−3)²≥0 do bình phương số thực không âm; dấu bằng ⇔ x−3=0 ⇔ x=3. Đây là chứng minh bất đẳng thức bằng biểu diễn dạng bình phương.

</details>

### Dấu tam thức bậc hai và mô hình

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP02-ADD03; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; OUTCOME: TOP02-O02; NO_NEW_BANK -->

#### Bài 3

Cho f(x)=2x²−5x+2. Tìm a, Δ, nghiệm và dạng phân tích thành nhân tử.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** a=2, Δ=9, nghiệm 1/2 và 2; f(x)=(2x−1)(x−2).

a=2,b=−5,c=2 nên Δ=b²−4ac=25−16=9; x=(5±3)/4 ∈{1/2,2}. Nhân (2x−1)(x−2)=2x²−5x+2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP02-ADD04; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; OUTCOME: TOP02-O02; NO_NEW_BANK -->

#### Bài 4

f(x)=x²+6x+9 có bao nhiêu nghiệm phân biệt và Δ bằng bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Δ=0; một nghiệm kép x=−3.

Δ=36−4·1·9=0; f(x)=(x+3)². Tam thức chạm trục Ox tại −3, không đi xuyên qua trục.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP02-ADD05; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; OUTCOME: TOP02-O03; NO_NEW_BANK -->

#### Bài 5

Xét dấu f(x)=x²−2x+5 trên ℝ mà không cần tìm nghiệm.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** f(x)>0 với mọi x∈ℝ.

Hoàn phương f(x)=(x−1)²+4>0; tương đương a=1>0, Δ=4−20=−16<0, luôn cùng dấu a.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP02-ADD06; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; OUTCOME: TOP02-O03; NO_NEW_BANK -->

#### Bài 6

Chứng minh g(x)=−2x²+4x−5 âm với mọi x∈ℝ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** g(x)<0 với mọi x∈ℝ.

g(x)=−2(x−1)²−3 ≤−3<0. Hệ số đầu âm và Δ<0 nên không đổi dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP02-ADD07; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; OUTCOME: TOP02-O04; NO_NEW_BANK -->

#### Bài 7

Xác định nơi f(x)=3(x−2)² bằng 0, dương và âm.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Bằng 0 tại x=2; dương với x≠2; không âm tại mọi x, không âm có dấu bằng.

Hệ số 3>0 và bình phương không âm; bằng 0 duy nhất khi x=2. Với x≠2 bình phương dương, không có miền âm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP02-ADD08; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; OUTCOME: TOP02-O04; NO_NEW_BANK -->

#### Bài 8

Xác định nơi g(x)=−(x+1)² bằng 0, âm và dương.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Bằng 0 tại x=−1; âm với x≠−1; không bao giờ dương.

Bình phương ≥0; đổi dấu bằng trừ làm g≤0. Chỉ khi x+1=0 thì g=0. Đi qua không? Không, đồ thị tiếp xúc Ox.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP02-ADD09; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; OUTCOME: TOP02-O05; NO_NEW_BANK -->

#### Bài 9

Lập bảng dấu của f(x)=x²−4x+3.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Nghiệm 1,3; f>0 trên (−∞,1)∪(3,+∞), f<0 trên (1,3), f=0 ở 1,3.

f(x)=(x−1)(x−3), hệ số đầu dương. Ngoài hai nghiệm hai thừa số cùng dấu nên tích dương; trong hai nghiệm trái dấu nên tích âm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP02-ADD10; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; OUTCOME: TOP02-O05; NO_NEW_BANK -->

#### Bài 10

Tìm các x làm −x²+x+6>0.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x∈(−2,3).

−x²+x+6=−(x−3)(x+2); hai nghiệm −2,3, hệ số đầu âm nên tam thức dương giữa hai nghiệm, không lấy biên do >0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP02-ADD11; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; OUTCOME: TOP02-O06; NO_NEW_BANK -->

#### Bài 11

Giải x²−7x+12<0, ghi tập nghiệm bằng khoảng.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** (3,4).

x²−7x+12=(x−3)(x−4). Tích âm khi 3<x<4. Dấu < nghiêm ngặt nên bỏ hai đầu mút.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP02-ADD12; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; OUTCOME: TOP02-O06; NO_NEW_BANK -->

#### Bài 12

Giải −x²+5x−6≥0.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** [2,3].

−x²+5x−6=−(x−2)(x−3)≥0 ⇔ (x−2)(x−3)≤0. Nghiệm [2,3], gồm hai đầu mút vì ≥0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP02-ADD13; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; OUTCOME: TOP02-O07; NO_NEW_BANK -->

#### Bài 13

Tìm các tham số thực m để x²−2mx+9>0 với mọi x∈ℝ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** −3<m<3.

a=1>0 cố định; điều kiện dương nghiêm ngặt trên ℝ là Δ<0. Δ=(−2m)²−36=4(m²−9)<0 ⇔ m²<9 ⇔ −3<m<3. Ở |m|=3 đồ thị chạm 0 nên không thỏa >.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP02-ADD14; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; OUTCOME: TOP02-O07; NO_NEW_BANK -->

#### Bài 14

Tìm các m thực để x²−2mx+4≥0 với mọi x∈ℝ.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** −2≤m≤2.

a=1>0; không âm trên ℝ ⇔ Δ≤0. Δ=4(m²−4)≤0 ⇔ |m|≤2. Ở m=±2 tam thức là bình phương, có thể bằng 0 nên vẫn đạt ≥.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP02-ADD15; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; OUTCOME: TOP02-O08; NO_NEW_BANK -->

#### Bài 15

Một khu vườn hình chữ nhật có hai cạnh dài x và 12−x mét, 0<x<12. Tìm x để diện tích ít nhất 35 m².

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** x∈[5,7] mét.

S=x(12−x)≥35 ⇔ −x²+12x−35≥0 ⇔ (x−5)(x−7)≤0. Suy ra 5≤x≤7, đều nằm trong miền độ dài 0<x<12.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP02-ADD16; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; OUTCOME: TOP02-O08; NO_NEW_BANK -->

#### Bài 16

Mô hình độ cao (mét) theo thời gian t≥0 (giây): h(t)=−5t²+20t+1. Trong khoảng thời gian nào h(t)≥16?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** t∈[1,3] giây.

−5t²+20t+1≥16 ⇔ −5(t²−4t+3)≥0 ⇔ (t−1)(t−3)≤0 ⇔ t∈[1,3]. Điều kiện t≥0 được đáp ứng; chỉ diễn giải trong mô hình.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP02-W01; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; OUTCOME: TOP02-O07; NO_NEW_BANK -->

#### Bài 17

(a) Giải x²−4x+3≤0. (b) Tìm m∈ℝ để x²−2mx+4>0 với mọi số thực x. (c) Giải thích cụ thể vì sao m=2 bị loại ở (b).

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** (a) [1,3]. (b) −2<m<2. (c) m=2 cho (x−2)² và bằng 0 tại x=2 nên sai dấu >0.

(a) (x−1)(x−3)≤0 nên [1,3]. (b) a=1>0 cố định, cần Δ=(−2m)²−16=4(m²−4)<0 ⇒ |m|<2. (c) Khi m=2, f(2)=0. Điều kiện Δ≤0 chỉ đủ cho ≥0 toàn miền, không phải >0 toàn miền.

**Rubric tự đối chiếu:** 7 điểm: xác định hai nghiệm và bảng dấu đúng (2đ); thiết lập a>0, Δ<0 và biến đổi m (3đ); kiểm tra trường hợp m=2 kèm giải thích dấu nghiêm (2đ).

</details>

### Miền nghiệm hai ẩn

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B03-C01; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; OUTCOME: TOP02-O09; NO_NEW_BANK -->

#### Bài 18

Biểu thức nào sau đây là bất phương trình bậc nhất hai ẩn?

**Các phương án:** A. 2x²+y≤3 | B. 0x−3y>1 | C. xy<2 | D. 0x+0y≤2

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** `B`

0x−3y>1 đúng dạng ax+by>c với (a,b)=(0,−3) ≠ (0,0). Các lựa chọn khác bậc cao hoặc hệ số x,y đồng thời bằng 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B03-C02; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; OUTCOME: TOP02-O10; NO_NEW_BANK -->

#### Bài 19

Cặp (2,−1) có là nghiệm của 2x−y≤5 hay không?

**Các phương án:** A. Có, vì vế trái bằng 5 | B. Không, vì vế trái bằng 5 | C. Có, vì vế trái bằng 3 | D. Không, vì y âm

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** `A`

2·2−(−1)=5, thỏa 5≤5. Dấu bằng được lấy.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B03-P01; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; OUTCOME: TOP02-O11; NO_NEW_BANK -->

#### Bài 20

Đường biên của x+3y≥6 được xử lí thế nào?

**Các phương án:** A. Không lấy đường thẳng x+3y=6 | B. Lấy đường thẳng x+3y=6 | C. Chỉ lấy hai giao điểm với trục | D. Lấy toàn mặt phẳng

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** `B`

Biên x+3y=6 thuộc miền nghiệm của x+3y≥6 vì các cặp trên biên làm hai vế bằng nhau.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B03-P02; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; OUTCOME: TOP02-O11; NO_NEW_BANK -->

#### Bài 21

Miền nghiệm của 3x−y<2 nằm ở đâu so với y=3x−2?

**Các phương án:** A. Trên đường thẳng, không gồm biên | B. Dưới đường thẳng, không gồm biên | C. Trên đường thẳng, gồm biên | D. Dưới đường thẳng, gồm biên

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** `A`

3x−y<2 ⇔ −y<2−3x ⇔ y>3x−2. Nằm phía trên đường biên nét đứt, không lấy biên.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B03-P03; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; OUTCOME: TOP02-O10; NO_NEW_BANK -->

#### Bài 22

Khi vẽ 2x+y≥0, kết luận nào đúng về điểm thử O(0,0)?

**Các phương án:** A. O hợp lệ để xác định phía vì thỏa bất phương trình | B. O không hợp lệ vì nằm trên đường biên | C. O không hợp lệ vì y=0 | D. Không cần đường biên

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** `B`

O nằm trên đường 2x+y=0 nên không giúp chọn một phía. Có thể dùng (1,0): 2>0, phía chứa (1,0) thỏa ≥.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B03-P04; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; OUTCOME: TOP02-O12; NO_NEW_BANK -->

#### Bài 23

Rạp bán vé loại A 60 nghìn đồng/vé (x vé), loại B 90 nghìn đồng/vé (y vé). Để thu ít nhất 18 triệu đồng, điều kiện nào đúng?

**Các phương án:** A. 2x+3y≥600, x,y là số nguyên không âm | B. 2x+3y≤600, x,y là số nguyên không âm | C. 3x+2y≥600, x,y số thực bất kỳ | D. x+y≥200, không cần điều kiện nguyên

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** `A`

60x+90y≥18 000 ⇔ 2x+3y≥600, đồng thời x,y∈Z≥0. Chỉ số tiền không quyết định tính nguyên và không âm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B03-P05; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; OUTCOME: TOP02-O11; NO_NEW_BANK -->

#### Bài 24

Điểm nào chắc chắn nằm trong miền nghiệm 2x+3y>0?

**Các phương án:** A. (0,0) | B. (−3,2) | C. (0,1) | D. (3,−2)

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** `C`

Tại (0,1) biểu thức bằng 3>0. Tại (0,0), (−3,2), (3,−2) bằng 0 nên đều nằm trên biên và không thỏa dấu >.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B03-P06; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; OUTCOME: TOP02-O12; NO_NEW_BANK -->

#### Bài 25

Cửa hàng mua x thùng loại A giá 35 nghìn/thùng, y thùng loại B giá 20 nghìn/thùng, ngân sách không quá 700 nghìn; x,y∈Z≥0. Cặp nào khả thi?

**Các phương án:** A. (10,15) | B. (15,10) | C. (20,1) | D. (0,36)

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** `A`

(10,15): 350+300=650≤700; (15,10):725; (20,1):720; (0,36):720 đều vượt 700.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B04-C01; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; OUTCOME: TOP02-O13; NO_NEW_BANK -->

#### Bài 26

Cặp nào thỏa đồng thời x≥0, y≥0 và x+y≤5?

**Các phương án:** A. (2,3) | B. (4,2) | C. (−1,4) | D. (3,3)

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** `A`

(2,3) không âm và có tổng 5≤5; B/D tổng 6>5; C có x<0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B04-C02; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; OUTCOME: TOP02-O13; NO_NEW_BANK -->

#### Bài 27

Miền nghiệm của hệ x≥0, y≥0, x+y≤4 là hình nào?

**Các phương án:** A. Tam giác kín có đỉnh (0,0),(4,0),(0,4) | B. Nửa mặt phẳng x+y≤4 | C. Mọi điểm góc phần tư thứ nhất | D. Tam giác mở không lấy ba cạnh

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** `A`

Ba điều kiện xác định tam giác kín gồm hai đoạn trên trục không âm và đoạn x+y=4, vì các dấu đều không nghiêm ngặt.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B04-P01; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; OUTCOME: TOP02-O13; NO_NEW_BANK -->

#### Bài 28

Cho hệ x≥0, y≥0, x+y≤7, 2x+y≤10. Trong các điểm sau, điểm nào thuộc miền nghiệm?

**Các phương án:** A. (3,4) | B. (5,3) | C. (−1,3) | D. (6,0)

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** `A`

(3,4): 3+4=7≤7 và 2·3+4=10≤10. (5,3): 8>7; C âm x; (6,0): 12>10.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B04-P04; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; OUTCOME: TOP02-O14; NO_NEW_BANK -->

#### Bài 29

Hệ x+y≤2 và x+y≥5 có miền nghiệm như thế nào?

**Các phương án:** A. Miền nghiệm là giao của hai đường thẳng | B. Vô nghiệm | C. Có nghiệm (0,0) | D. Miền nghiệm là toàn mặt phẳng

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** `B`

Không có t thực vừa ≤2 vừa ≥5, do đó hệ không có điểm thỏa mãn.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B04-P05; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; OUTCOME: TOP02-O14; NO_NEW_BANK -->

#### Bài 30

Với miền x≥0, y≥0 không bị chặn, F=−x−y có đặc điểm nào?

**Các phương án:** A. Không có cực đại vì miền không bị chặn | B. Cực đại bằng 0 tại (0,0), không có cực tiểu hữu hạn | C. Cực tiểu bằng 0 tại (0,0) | D. Cả cực đại và cực tiểu đều bằng 0

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** `B`

Vì x+y≥0, F=−x−y≤0; tại (0,0), F=0 là giá trị lớn nhất. Cho x→∞, F→−∞ nên không có giá trị nhỏ nhất hữu hạn.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-CHII-W03; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; OUTCOME: TOP02-O12; NO_NEW_BANK -->

#### Bài 31

Một nhóm gây quỹ bán x phần ăn A giá 40 nghìn đồng và y phần ăn B giá 65 nghìn đồng; tổng bán không quá 55 phần, mục tiêu thu ít nhất 2 600 nghìn đồng. (a) Lập các điều kiện toán học nếu x,y là số phần ăn bán được. (b) Kiểm tra hai phương án (30,25) và (40,10). (c) Giải thích vì sao (0,0) không đáp ứng mục tiêu.

<details markdown="1"><summary>Lời giải và rubric</summary>

x,y∈Z≥0; x+y≤55; 40x+65y≥2600. (30,25): 30+25=55, thu 1200+1625=2825≥2600 nên khả thi. (40,10): 50 phần, thu 1600+650=2250<2600 nên không khả thi. (0,0) thu 0<2600.

**Rubric tự đối chiếu:** 7 điểm: (1) không âm+nguyên 1đ; (2) số phần ≤55 1đ; (3) mục tiêu doanh thu đúng đơn vị 2đ; (4) phương án (30,25) 1đ; (5) phương án (40,10) 1đ; (6) giải thích (0,0) 1đ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP02-ADD17; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; OUTCOME: TOP02-O09; NO_NEW_BANK -->

#### Bài 32

Bất phương trình 0x+5y≥10 có phải bậc nhất hai ẩn không? Cho một nghiệm và một điểm không thỏa.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Có (a,b)=(0,5)≠(0,0). (9,3) thỏa, (0,1) không thỏa.

Bậc nhất hai ẩn cho phép một hệ số bằng 0, miễn không đồng thời bằng 0. Thế (9,3): 15≥10 đúng; (0,1):5≥10 sai.

</details>

### Tối ưu liên tục và nguyên

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B04-P02; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; OUTCOME: TOP02-O15; NO_NEW_BANK -->

#### Bài 33

Trên miền x≥0, y≥0, x+y≤7, 2x+y≤10, giá trị lớn nhất của F=4x+3y là bao nhiêu?

**Các phương án:** A. 20 | B. 21 | C. 24 | D. 28

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** `C`

Các đỉnh (0,0),(5,0),(3,4),(0,7). F lần lượt 0,20,24,21. Cực đại 24 tại (3,4).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B04-P03; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; OUTCOME: TOP02-O15; NO_NEW_BANK -->

#### Bài 34

Cho x≥0, y≥0, x+y≤8; tối đa hóa F=x+y. Mệnh đề nào đúng?

**Các phương án:** A. Chỉ (8,0) tối ưu | B. Chỉ (0,8) tối ưu | C. Mọi điểm của cạnh x+y=8 trong góc phần tư I đều tối ưu | D. Không tồn tại giá trị lớn nhất

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** `C`

F≤8, đạt bằng 8 tại mọi điểm không âm trên cạnh nối (8,0) và (0,8); có vô số nghiệm tối ưu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B04-P06; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; OUTCOME: TOP02-O16; NO_NEW_BANK -->

#### Bài 35

Với x,y là số nguyên không âm, x+2y≤5, 2x+y≤5, giá trị lớn nhất của 3x+2y là bao nhiêu?

**Các phương án:** A. 7 | B. 8 | C. 25/3 | D. 9

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** `B`

Từ 2x+y≤5 suy ra x=0,1,2. Nếu x=0 thì y≤2, F≤4; x=1 thì y≤2, F≤7; x=2 thì y≤1, F≤8, đạt tại (2,1). Bài toán liên tục tại giao x=y=5/3 cho F=25/3>8 nhưng không nguyên.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-CHII-W04-ANCHOR; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; OUTCOME: TOP02-O15; NO_NEW_BANK -->

#### Bài 36

Một xưởng làm x món A và y món B, x,y là số nguyên không âm; các ràng buộc x+2y≤10, 3x+y≤15. Lợi nhuận tính theo đơn vị quy ước là P=5x+4y. (a) Lập miền nghiệm liên tục và tìm các đỉnh. (b) Tìm lợi nhuận lớn nhất, giải thích việc áp dụng đáp án vào mô hình số nguyên. (c) Nếu cả một cạnh cho cùng lợi nhuận tối ưu, cần lưu ý điều gì?

<details markdown="1"><summary>Lời giải và rubric</summary>

Các đường biên cắt trục: x+2y=10 có (10,0),(0,5); 3x+y=15 có (5,0),(0,15). Giao hai đường thẳng là (4,3). Miền chung trong góc phần tư I là tứ giác có đỉnh (0,0),(5,0),(4,3),(0,5). P tương ứng 0,25,32,20; cực đại liên tục 32 tại (4,3). Vì (4,3) nguyên, đây cũng là cực đại mô hình sản phẩm nguyên. Nếu F hằng trên cả một cạnh, tối ưu có thể không duy nhất; phải xét nghiệm phù hợp thêm điều kiện thực tế.

**Rubric tự đối chiếu:** 7 điểm: (1) điều kiện không âm/nguyên 1đ; (2) biểu diễn chính xác từng biên và miền giao 1đ; (3) bốn đỉnh đúng 2đ; (4) giá trị P tại từng đỉnh 1đ; (5) cực đại 32 ở (4,3) và tính nguyên 1đ; (6) giải thích trường hợp cả cạnh tối ưu 1đ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP02-ADD18; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; OUTCOME: TOP02-O16; NO_NEW_BANK -->

#### Bài 37

Với x,y nguyên không âm thỏa x+2y≤7, 2x+y≤7, tối đa hóa P=3x+2y. So sánh với tối ưu liên tục.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án:** Tối ưu nguyên P=11 tại (x,y)=(3,1); tối ưu liên tục 35/3 tại (7/3,7/3).

Trong miền liên tục, các đỉnh (0,0),(7/2,0),(7/3,7/3),(0,7/2); P lần lượt 0,21/2,35/3,7 nên max 35/3. Với nguyên: y=0→x≤3 nên P≤9; y=1→x≤3 cho P≤11 đạt (3,1); y=2→x≤2 cho P≤10; y=3→x≤1 cho P≤9. Do đó max nguyên=11. Không làm tròn 35/3 mà bỏ kiểm khả thi.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP02-W02; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; OUTCOME: TOP02-O16; NO_NEW_BANK -->

#### Bài 38

Một xưởng làm x,y sản phẩm, số nguyên không âm; cần x+2y≤7 và 3x+y≤8; lợi nhuận P=4x+3y. (a) Viết miền khả thi liên tục và các đỉnh. (b) Tìm P lớn nhất nếu x,y được phép thực không âm. (c) Tìm P lớn nhất khi x,y là số nguyên và giải thích tại sao hai kết quả khác nhau.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Đáp án:** Đỉnh liên tục: (0,0),(8/3,0),(9/5,13/5),(0,7/2). Tối ưu thực P=15 tại (9/5,13/5); tối ưu nguyên P=14 tại (2,2).

Giao hai đường biên x+2y=7, 3x+y=8 là x=9/5,y=13/5. P tại bốn đỉnh lần lượt 0,32/3,15,21/2 nên max thực 15. Khi nguyên, y=0,1,2,3; x lớn nhất lần lượt 2,2,2,1, suy ra P lớn nhất theo y tương ứng 8,11,14,13; đạt (2,2) và không thể lấy đỉnh (9/5,13/5) vì tọa độ phân số.

**Rubric tự đối chiếu:** 7 điểm: đúng ràng buộc và miền không âm (1đ); tìm đủ bốn đỉnh, đặc biệt giao chính xác (2đ); xét P ở đỉnh và kết luận thực (1đ); kiểm các trường hợp nguyên và cực đại 14 (2đ); giải thích khác biệt thực/nguyên (1đ).

</details>

## 3. Tự kiểm tra

Em hãy làm đủ 16 câu công khai dưới đây trước khi xem lại lời giải ở phần Luyện tập. Đây là lượt tự ôn với những câu đã học, không phải đánh giá năng lực độc lập. Sau khi làm xong, hãy tự đối chiếu, ghi rõ lỗi và quay lại đúng mục Kiến thức để luyện thêm.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP02-ADD01; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; NO_MASTERY; NOT_RD1 -->

**Câu 1.** -2(3x−1)≤8. Giải bất phương trình và giải thích bước đảo chiều.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP02-ADD03; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; NO_MASTERY; NOT_RD1 -->

**Câu 2.** Cho f(x)=2x²−5x+2. Tìm a, Δ, nghiệm và dạng phân tích thành nhân tử.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP02-ADD05; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; NO_MASTERY; NOT_RD1 -->

**Câu 3.** Xét dấu f(x)=x²−2x+5 trên ℝ mà không cần tìm nghiệm.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP02-ADD07; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; NO_MASTERY; NOT_RD1 -->

**Câu 4.** Xác định nơi f(x)=3(x−2)² bằng 0, dương và âm.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP02-ADD09; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; NO_MASTERY; NOT_RD1 -->

**Câu 5.** Lập bảng dấu của f(x)=x²−4x+3.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP02-ADD11; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; NO_MASTERY; NOT_RD1 -->

**Câu 6.** Giải x²−7x+12<0, ghi tập nghiệm bằng khoảng.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP02-ADD13; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; NO_MASTERY; NOT_RD1 -->

**Câu 7.** Tìm các tham số thực m để x²−2mx+9>0 với mọi x∈ℝ.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP02-ADD15; ORIGINAL_BLOB: e10e57d7684497b0dfa9325af766a75b7cfa239f; NO_MASTERY; NOT_RD1 -->

**Câu 8.** Một khu vườn hình chữ nhật có hai cạnh dài x và 12−x mét, 0<x<12. Tìm x để diện tích ít nhất 35 m².

<!-- PUBLIC_REPLAY_ONLY: THPT-G10-B03-C01; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; NO_MASTERY; NOT_RD1 -->

**Câu 9.** Biểu thức nào sau đây là bất phương trình bậc nhất hai ẩn?

**Các phương án:** A. 2x²+y≤3 | B. 0x−3y>1 | C. xy<2 | D. 0x+0y≤2

<!-- PUBLIC_REPLAY_ONLY: THPT-G10-B03-C02; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; NO_MASTERY; NOT_RD1 -->

**Câu 10.** Cặp (2,−1) có là nghiệm của 2x−y≤5 hay không?

**Các phương án:** A. Có, vì vế trái bằng 5 | B. Không, vì vế trái bằng 5 | C. Có, vì vế trái bằng 3 | D. Không, vì y âm

<!-- PUBLIC_REPLAY_ONLY: THPT-G10-B03-P01; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; NO_MASTERY; NOT_RD1 -->

**Câu 11.** Đường biên của x+3y≥6 được xử lí thế nào?

**Các phương án:** A. Không lấy đường thẳng x+3y=6 | B. Lấy đường thẳng x+3y=6 | C. Chỉ lấy hai giao điểm với trục | D. Lấy toàn mặt phẳng

<!-- PUBLIC_REPLAY_ONLY: THPT-G10-B03-P04; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; NO_MASTERY; NOT_RD1 -->

**Câu 12.** Rạp bán vé loại A 60 nghìn đồng/vé (x vé), loại B 90 nghìn đồng/vé (y vé). Để thu ít nhất 18 triệu đồng, điều kiện nào đúng?

**Các phương án:** A. 2x+3y≥600, x,y là số nguyên không âm | B. 2x+3y≤600, x,y là số nguyên không âm | C. 3x+2y≥600, x,y số thực bất kỳ | D. x+y≥200, không cần điều kiện nguyên

<!-- PUBLIC_REPLAY_ONLY: THPT-G10-B04-C01; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; NO_MASTERY; NOT_RD1 -->

**Câu 13.** Cặp nào thỏa đồng thời x≥0, y≥0 và x+y≤5?

**Các phương án:** A. (2,3) | B. (4,2) | C. (−1,4) | D. (3,3)

<!-- PUBLIC_REPLAY_ONLY: THPT-G10-B04-P04; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; NO_MASTERY; NOT_RD1 -->

**Câu 14.** Hệ x+y≤2 và x+y≥5 có miền nghiệm như thế nào?

**Các phương án:** A. Miền nghiệm là giao của hai đường thẳng | B. Vô nghiệm | C. Có nghiệm (0,0) | D. Miền nghiệm là toàn mặt phẳng

<!-- PUBLIC_REPLAY_ONLY: THPT-G10-B04-P02; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; NO_MASTERY; NOT_RD1 -->

**Câu 15.** Trên miền x≥0, y≥0, x+y≤7, 2x+y≤10, giá trị lớn nhất của F=4x+3y là bao nhiêu?

**Các phương án:** A. 20 | B. 21 | C. 24 | D. 28

<!-- PUBLIC_REPLAY_ONLY: THPT-G10-B04-P06; ORIGINAL_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122; NO_MASTERY; NOT_RD1 -->

**Câu 16.** Với x,y là số nguyên không âm, x+2y≤5, 2x+y≤5, giá trị lớn nhất của 3x+2y là bao nhiêu?

**Các phương án:** A. 7 | B. 8 | C. 25/3 | D. 9

Học liệu tham khảo SGK Toán 10 Kết nối tri thức với cuộc sống, Tập Một Chương II (Bài 3–4) và phần dấu tam thức bậc hai liên quan trong Tập Hai (Bài 17).
