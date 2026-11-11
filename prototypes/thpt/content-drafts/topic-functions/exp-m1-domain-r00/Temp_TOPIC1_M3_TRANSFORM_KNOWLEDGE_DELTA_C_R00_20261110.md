# Chuyên đề 1 · M3 — Từ parabol đến hai phép biến đổi đồ thị

**AUTHORING R00 · DELTA_C · CHƯA REVIEW.** Phần bổ sung cho mạch M3 của canonical R18; **không sửa hoặc sao chép đè** các định nghĩa, ví dụ và item đã PASS. Phạm vi mới tập trung vào hai phép biến đổi \(y=|f(x)|\), \(y=f(|x|)\), cách giải thích bằng hình và điều kiện \(a\ne0\). Mảng tối ưu chỉ thêm một tình huống làm cầu nối M1–M3.

**Nguồn S1:** SGK Toán 10 Kết nối tri thức tập hai, Bài 16 *Hàm số bậc hai*, trang in **11–18** / trang PDF **12–19** (Bài 16 đầy đủ; các hình và ví dụ trên trang 13–14 chỉ là một phần), đã đối chiếu số trang in và đồ thị. Hai phép biến đổi với trị tuyệt đối và tình huống vận dụng là nội dung bổ sung do AUTHORING biên soạn, **không tuyên bố là yêu cầu bắt buộc của bài SGK**.

---

## Vì sao một dấu giá trị tuyệt đối có thể đổi hẳn hình đồ thị?

Ở M1, em đã biết phải xem **đầu vào nào được nhận**. Ở M2, em học cách phân biệt **điểm đo được, đồ thị do công thức xác định** và điểm thuộc miền hay bị loại; em còn thấy hai đường khác nhau có thể cùng đi qua ba mốc. Bây giờ ta thử thay đổi vị trí **một dấu trị tuyệt đối** và xem nó tác động đến đầu vào, đầu ra và đồ thị như thế nào.

Xét hàm số

\[
f(x)=x^2-4x+3=(x-2)^2-1.
\]

Từ dạng bình phương, ta thấy đỉnh \(I(2;-1)\), trục đối xứng \(x=2\) và đồ thị mở lên. Hai nghiệm của \(f(x)=0\) là \(x=1\) và \(x=3\). Trong khoảng \(1<x<3\), đồ thị nằm **dưới** trục hoành vì \(f(x)<0\); ngoài khoảng ấy, \(f(x)\ge0\).

Trên nền này, chúng ta tạo hai đồ thị mới:

\[
g(x)=|f(x)|,\qquad h(x)=f(|x|).
\]

Hai công thức có cùng dấu gạch đứng, nhưng chúng yêu cầu hai hành động hoàn toàn khác nhau. Với \(g\), ta tính xong giá trị \(f(x)\) rồi mới lấy trị tuyệt đối của **đầu ra**. Với \(h\), ta lấy trị tuyệt đối của **đầu vào** trước rồi mới đưa vào quy tắc \(f\).

### Tự thử · Hai chiếc máy xử lý cùng một đầu vào

Em hãy hình dung có hai chiếc máy đều dùng **cùng công thức** \(f(x)=x^2-4x+3\), nhưng thứ tự xử lý khác nhau. Máy A nhận số \(x\), tính \(f(x)\), **sau cùng** mới lấy trị tuyệt đối kết quả. Máy B lấy trị tuyệt đối của \(x\) **ngay từ cửa vào**, rồi mới tính \(f\). Dấu \(|\ |\) nằm ở đâu sẽ quyết định máy đổi **đầu vào** hay **đầu ra**.

Cho \(x=-2\). Em đã biết \(f(-2)=15\) và \(f(2)=-1\). **Trước khi xem hình**, hãy tự trả lời hai câu: Máy A cho bao nhiêu? Máy B cho bao nhiêu? Máy nào có thể cho một đầu ra âm? Hãy thử viết đường đi của số \(-2\) qua từng máy.

<details>
<summary>Đối chiếu hai đường đi và xem sơ đồ</summary>

![Sơ đồ hai máy: trị tuyệt đối đặt ngoài hay trong f](Temp_FIG_TOPIC1_M3_INPUT_OUTPUT_TWO_MACHINES_R01.svg)

- **Máy A:** \(-2\longrightarrow f(-2)=15\longrightarrow |15|=15\). Ta chỉ can thiệp vào **kết quả** của \(f\); vì vậy \(|f(x)|\) không âm.
- **Máy B:** \(-2\longrightarrow |-2|=2\longrightarrow f(2)=-1\). Ta thay **số đem vào f**, nên \(f(|x|)\) vẫn có thể âm.

Cùng một đầu vào \(-2\), hai đường đi cho \(15\) và \(-1\). Đừng đổi chỗ hai thao tác: \(f(|x|)\) và \(|f(x)|\) không phải một công thức.

</details>

**Mang dự đoán sang đồ thị:** Máy A giữ nguyên hoành độ và chỉ lật những điểm có tung độ âm qua trục \(Ox\). Máy B sử dụng cùng giá trị \(|x|\) cho hai vị trí \(x\) và \(-x\), nên hình mới đối xứng qua trục \(Oy\) trên những đầu vào được phép. Em sẽ thấy và giải thích hai điều ấy ở mô hình ngay dưới đây; không cần học thuộc quy tắc vẽ trước khi hiểu thứ tự thao tác.

## 1. Giá trị tuyệt đối ở bên ngoài: \(y=|f(x)|\)

Nhớ rằng \(|u|=u\) khi \(u\ge0\), còn \(|u|=-u\) khi \(u<0\). Vì vậy,

\[
|f(x)|=\begin{cases}
f(x),&f(x)\ge0,\\
-f(x),&f(x)<0.
\end{cases}
\]

Đây chính là cách dựng đồ thị:

- Giữ nguyên mọi điểm nằm **trên hoặc ngay** trục \(Ox\).
- Lấy các điểm có tung độ âm rồi **đổi dấu tung độ**, tức phản chiếu phần nằm dưới \(Ox\) lên trên.
- Không đổi hoành độ của bất kỳ điểm nào.

Với ví dụ trên, đoạn cong giữa \(x=1\) và \(x=3\) vốn nằm dưới \(Ox\) được lật lên. Hai giao điểm \((1;0)\) và \((3;0)\) giữ nguyên; đỉnh cũ \((2;-1)\) trở thành điểm \((2;1)\) trên phần được lật.

Lấy \(x=2\): \(f(2)=-1\), nên \(|f(2)|=1\). Nếu em thấy điểm của \(g\) tại \(x=2\) vẫn có tung độ \(-1\), hình đã vẽ sai vì trị tuyệt đối **không thể âm**.

**Tập xác định:** \(g(x)=|f(x)|\) được tính ở đúng những \(x\) mà \(f(x)\) được xác định. Việc lấy trị tuyệt đối **đầu ra** không tự tạo ra đầu vào mới.

## 2. Giá trị tuyệt đối ở bên trong: \(y=f(|x|)\)

Lần này ta đổi **đầu vào**:

\[
f(|x|)=\begin{cases}
f(x),&x\ge0,\\
f(-x),&x<0.
\end{cases}
\]

Nếu \(f\) xác định trên \(\mathbb R\), hãy giữ nửa đồ thị của \(f\) ở phía **bên phải trục tung** (\(x\ge0\)); sau đó phản chiếu nửa đó sang phía trái. Lúc này hai vị trí \(x\) và \(-x\) luôn cho cùng đầu ra, vì \(|x|=|-x|\). Do đó đồ thị mới **đối xứng qua trục tung**.

Với \(f(x)=x^2-4x+3\), ta có \(h(x)=x^2-4|x|+3\). Đỉnh \((2;-1)\) của nửa bên phải được giữ lại, và có một điểm đối xứng \((-2;-1)\) bên trái. Đồ thị mới **không còn là đồ thị của một hàm bậc hai duy nhất** trên toàn \(\mathbb R\), dù từng phía của nó được vẽ từ một phần parabol.

Một cách kiểm nhanh:

\[
f(-2)=15,\qquad f(|-2|)=f(2)=-1,
\]
\[
|f(2)|=1,\qquad f(|2|)=f(2)=-1.
\]

Như vậy, không được viết \(f(|x|)=|f(x)|\) nếu chưa có lý do đặc biệt: chỉ tại \(x=2\), hai giá trị đã khác nhau.

**Nếu miền của \(f\) không phải toàn bộ \(\mathbb R\):** với \(h(x)=f(|x|)\), đầu vào \(x\) chỉ hợp lệ khi **\(|x|\) thuộc tập xác định của \(f\)**. Quy tắc phản chiếu này luôn cần kiểm miền. Ví dụ, nếu \(f\) chỉ được định nghĩa trên \([1,3]\), thì \(f(|x|)\) được định nghĩa trên \([-3,-1]\cup[1,3]\), không phải toàn bộ \(\mathbb R\).

![So sánh hai phép biến đổi đồ thị](Temp_FIG_TOPIC1_M3_ABSOLUTE_GRAPH_COMPARE_R00.svg)

**Hướng đọc hình:** cả hai khung dùng trục và màu nhất quán. Đường xám nét đứt là \(f(x)\) gốc, đường màu là phép biến đổi được nêu ở tiêu đề. Ở khung \(|f(x)|\), quan sát phần âm được lật qua \(Ox\); ở khung \(f(|x|)\), quan sát nửa bên phải được sao đối xứng sang trái. Nếu hai đường trùng một đoạn, chúng vẫn là hai quy tắc cần phân biệt.

Mô hình tương tác D5 \`Temp_TOPIC1_M3_GRAPH_TRANSFORM_LAB_D5_R00.html\` cho phép bật từng phép biến đổi. Hãy thử với \(a=1,b=-4,c=3\), sau đó đổi dấu hoặc độ lớn của \(a\) và quan sát. Đừng bật tất cả ngay: nên dự đoán hình dạng trước rồi mới so sánh.

## 3. Dấu trừ ở bên trong lại làm đồ thị dịch sang phải?

Một ý tưởng có giá trị từ bộ Notebook 22 chuyên đề là **đọc phép tịnh tiến bằng đầu vào và đầu ra**, thay vì bắt học sinh thuộc lòng câu “trừ là sang phải, cộng là sang trái”. Ta có thể tự suy ra điều đó.

**Nối với M2:** Em còn nhớ ba điểm \((0;1)\), \((1;0)\), \((2;1)\) cùng nằm trên parabol và đồ thị chữ V không? Nếu đề chỉ cho ba điểm, em **chưa được tự chọn** đường nào để dịch. Nhưng khi đề xác định rõ hàm \(f(u)=(u-1)^2\) trên \(D=[0,2]\), ta đã biết **chính xác đoạn parabol phải dịch**. Ví dụ ở mục này dùng lại hàm \(f\) ấy của M2; đây là **hàm mới so với \(f(x)=x^2-4x+3\)** trong hai phép trị tuyệt đối ở phía trên.

Giả sử em đã biết một điểm \(A(u;f(u))\) thuộc đồ thị gốc \(y=f(x)\). Bây giờ xét hàm

\[
g(x)=f(x-2)+3.
\]

Để phần \(f(x-2)\) sử dụng **đúng đầu vào cũ \(u\)**, ta phải chọn \(x-2=u\), tức \(x=u+2\). Khi ấy đầu ra bằng \(f(u)+3\). Như vậy điểm \(A(u;f(u))\) chuyển thành

\[
A'(u+2;f(u)+3).
\]

Điều này giải thích được cả hai chiều: **dịch sang phải 2 đơn vị** vì hoành độ mới lớn hơn 2; **dịch lên trên 3 đơn vị** vì tung độ mới lớn hơn 3. Nếu chỉ nhìn thấy dấu trừ trước số 2 rồi đoán “dịch trái”, em đã nhầm giữa giá trị **đưa vào máy tính** và vị trí **điểm trên đồ thị mới**.

### Ví dụ · Miền của đồ thị cũng phải dịch

Ta xét đúng \(f(u)=(u-1)^2\) của M2, **với tập xác định \(D_f=[0,2]\)**. Đồ thị gốc là **một đoạn parabol** từ \(A(0;1)\), qua đỉnh \(I(1;0)\) đến \(B(2;1)\); đừng vẽ kéo dài toàn bộ hai nhánh vì miền đầu vào đã được giới hạn.

Đặt \(g(x)=f(x-2)+3\). Muốn \(g(x)\) có nghĩa, phải có \(x-2\in[0,2]\), tức

\[
\boxed{D_g=[2,4].}
\]

Từ ba điểm gốc, ta nhận \(A'(2;4)\), \(I'(3;3)\), \(B'(4;4)\). Trên miền mới, \(g(x)\) nhận tất cả giá trị từ 3 đến 4, tức \(T_g=[3,4]\). **Đồ thị, tập xác định và tập giá trị đều được xét đúng trong miền được cho**; phép tịnh tiến không làm xuất hiện vô hạn điểm mới ở ngoài đoạn.

![Điểm và miền thay đổi khi tịnh tiến đồ thị](Temp_FIG_TOPIC1_M3_TRANSLATION_AND_DOMAIN_R00.svg)

**Cách đọc hình:** đường xanh dương là **đoạn đồ thị gốc**, đường xanh lá là **đoạn sau khi dịch**. Mũi tên nét đứt chỉ sự chuyển từ đỉnh \(I\) đến \(I'\). Hãy đọc cả các mốc \(x=0,2,4\) trên trục hoành; chỉ nhìn hai đỉnh thôi thì chưa đủ nhận ra miền mới.

### Vận dụng · Tự chuyển một hàm không phải parabol

Giả sử \(f(x)=\sqrt{x}\) chỉ xét trên \([0,4]\). Hãy dự đoán tập xác định và tập giá trị của \(h(x)=f(x+1)-2\) trước khi nhìn phần đối chiếu.

<details><summary>Đối chiếu</summary>

Để \(f(x+1)\) có nghĩa, cần \(x+1\in[0,4]\), nên \(-1\le x\le3\). Vậy \(D_h=[-1,3]\). Vì \(f\) nhận tất cả giá trị trong \([0,2]\) trên miền gốc, sau khi trừ 2 vào **đầu ra**, \(h\) nhận các giá trị \([-2,0]\). Đồ thị dịch **sang trái 1** và **xuống 2**; cách đọc dấu vẫn được giải thích bằng phép thế \(x+1=u\), không cần học thuộc máy móc.

</details>

**Điều kiện quan trọng:** công thức \(f(x-a)+b\) không cho phép bỏ qua tập xác định gốc. Nếu \(f\) chỉ có nghĩa với \(u\in D_f\), miền mới phải là \(\{x:x-a\in D_f\}\), dù hình vẽ được tịnh tiến bằng cách nào. Các phép tịnh tiến này là phần **mở rộng trực quan** của M3; không tự ghi thành Core bắt buộc của SGK Bài 16.

## 4. Vì sao \(a=0\) không còn là parabol?

Hàm bậc hai có dạng \(f(x)=ax^2+bx+c\) với điều kiện bắt buộc **\(a\ne0\)**. Khi \(a=0\), ta chỉ còn \(f(x)=bx+c\): đó là hàm bậc nhất nếu \(b\ne0\), hoặc hàm hằng nếu \(b=0\).

Công thức hoành độ đỉnh \(x=-b/(2a)\) **không áp dụng** khi \(a=0\), vì lúc đó mẫu số bằng 0. Một mô hình đồ thị tốt phải nhận ra trường hợp này; không được âm thầm thay \(a=0\) thành một số nhỏ khác 0 để tiếp tục vẽ parabol.

Nếu \(a\ne0\), viết

\[
f(x)=a\left(x+\frac{b}{2a}\right)^2+c-\frac{b^2}{4a}
\]

giúp ta tìm trục và đỉnh bằng suy luận từ bình phương. Nếu cần đếm nghiệm của \(f(x)=0\), dùng biệt thức \(\Delta=b^2-4ac\) khi **đúng là** phương trình bậc hai. Đỉnh và nghiệm là hai câu hỏi khác nhau: **đỉnh** nói đến vị trí thấp nhất/cao nhất của parabol trên \(\mathbb R\); **nghiệm** nói tới nơi đồ thị gặp trục \(Ox\).

## 5. Đỉnh đẹp chưa chắc là đáp án đúng của bài toán

Giả sử độ cao (m) của một vật theo thời gian \(t\) (giây) được mô phỏng bởi

\[
H(t)=-(t-3)^2+9,
\]

nhưng ta chỉ quan sát trong **hai giây đầu**, tức \(t\in[0,2]\).

Trên toàn \(\mathbb R\), biểu thức có giá trị lớn nhất 9 tại \(t=3\). Tuy nhiên **\(t=3\) không thuộc khoảng quan sát**. Trong đoạn \([0,2]\), khi \(t\) tăng thì khoảng cách \(|t-3|\) giảm, nên \(H(t)\) tăng. Ta có \(H(0)=0\) và \(H(2)=8\). Vì vậy, trong hai giây được hỏi, độ cao lớn nhất là **8 m tại \(t=2\)**, không phải 9 m.

Đây là một bài toán **khác** với việc tìm cực đại trên toàn \(\mathbb R\). Ta phải quyết định miền đầu vào từ đề bài **trước** khi sử dụng thông tin về đỉnh. Điều này nối trực tiếp với M1, và là thói quen quan trọng khi học khảo sát hàm bằng đạo hàm ở các lớp sau.

### Cầu nối · Từ đỉnh parabol đến câu hỏi “đạt ít nhất một mức”

Một bài toán tối ưu không phải lúc nào cũng chỉ hỏi **giá trị lớn nhất**. Đôi khi người ta hỏi: *Những phương án nào đạt ít nhất một mức lợi nhuận hoặc diện tích cho trước?* Bài toán ấy vẫn xuất phát từ chính **dạng đỉnh** em vừa học, không cần đoán nghiệm từ hình.

Giả sử \(F(x)=k-c(x-h)^2\) với \(c>0\), chỉ xét các \(x\) thuộc **miền hợp lệ \(D\)**. Vì \(c(x-h)^2\ge0\), ta đã biết \(F(x)\le k\). Với một ngưỡng \(m\), muốn \(F(x)\ge m\), ta biến đổi:

\[
k-c(x-h)^2\ge m
\quad\Longleftrightarrow\quad
(x-h)^2\le\frac{k-m}{c}.
\]

- **Nếu \(m>k\):** vế phải âm, còn bình phương không âm ⇒ **không có phương án nào** đạt ngưỡng.
- **Nếu \(m=k\):** chỉ có ứng viên \(x=h\); nó chỉ là phương án thật khi \(h\in D\).
- **Nếu \(m<k\):** đặt \(r=\sqrt{(k-m)/c}>0\), bất đẳng thức trở thành \(|x-h|\le r\), hay \(h-r\le x\le h+r\). **Bước cuối cùng** phải lấy giao đoạn này với \(D\); nếu bài đòi số lượng nguyên, chỉ chọn các số nguyên trong giao ấy.

**Tự thử trước khi mở Đối chiếu.** Một mô hình giả định \(Q(t)=16-(t-3)^2\), nhưng chỉ xét \(0\le t\le5\). Trong những thời điểm nào mô hình dự báo \(Q(t)\ge12\)? Hãy dự đoán bằng khoảng cách tới \(t=3\), không cần vẽ hình hoặc học thuộc bảng dấu.

<details><summary>Đối chiếu · Từ ngưỡng quay về miền</summary>

\(16-(t-3)^2\ge12\) tương đương \((t-3)^2\le4\), tức \(|t-3|\le2\), hay \(1\le t\le5\). Giao với miền cho trước \([0,5]\) vẫn là **\([1,5]\)**. Nếu mô hình chỉ được xét đến \(t=4\), đáp án phải đổi thành \([1,4]\). Đó là lý do **miền hợp lệ** luôn đi cùng mỗi kết luận, dù công thức đã biến đổi đúng.

</details>

**Em dùng kiến thức này ở đâu?** Khi gặp bài ứng dụng tính diện tích, chi phí hoặc lợi nhuận có câu “không nhỏ hơn một mức”, hãy thực hiện ba bước: lập hàm và miền → dùng dạng đỉnh để chuyển điều kiện ngưỡng thành \(|x-h|\le r\) (nếu có nghiệm) → **giao với miền và diễn đạt kèm đơn vị**. Cách giải này giúp tự học được bài vận dụng tích hợp; không phải một quy tắc chỉ áp dụng cho mọi parabol ở mọi miền.

## Vận dụng

**Vận dụng 1.** Với \(f(x)=x^2-4x+3\), hãy tự tính \(|f(2)|\), \(f(|2|)\), \(f(|-2|)\). Từ kết quả, giải thích hai phép biến đổi có tạo cùng đồ thị không.

<details><summary>Đối chiếu</summary>

\(f(2)=-1\), nên \(|f(2)|=1\); \(f(|2|)=f(2)=-1\); \(f(|-2|)=f(2)=-1\). Hai hàm \(g(x)=|f(x)|\) và \(h(x)=f(|x|)\) đã khác giá trị ở \(x=2\), nên không cùng đồ thị.

</details>

**Vận dụng 2.** Một bạn nói: “Vì \(a=0\) cũng vẽ được đồ thị, nên \(ax^2+bx+c\) vẫn là parabol và dùng được công thức đỉnh.” Em hãy chỉ ra lỗi.

<details><summary>Đối chiếu</summary>

Khi \(a=0\), biểu thức chỉ còn \(bx+c\), là đường thẳng nếu \(b\ne0\) hoặc hàm hằng nếu \(b=0\). Đồ thị vẫn tồn tại, nhưng **không phải parabol**, và công thức \(-b/(2a)\) không xác định.

</details>

**Vận dụng 3.** Từ biểu thức \(H(t)=-(t-3)^2+9\), tìm độ cao lớn nhất khi chỉ xét \(0\le t\le2\). Giải thích vì sao không chọn điểm đỉnh.

<details><summary>Đối chiếu</summary>

Tại \(t=0\), \(H=0\); tại \(t=2\), \(H=8\). Trên \([0,2]\), bình phương \((t-3)^2\) giảm khi \(t\) tăng nên \(H\) tăng, do đó lớn nhất tại \(t=2\), bằng 8. Đỉnh \(t=3\) ở ngoài miền được hỏi.

</details>

## Ghi nhớ

Phép \(f(x-a)+b\) thay đổi vị trí **đầu vào** và **đầu ra**: khi có điều kiện miền, cả tập xác định cũng phải đổi tương ứng. Trị tuyệt đối **ngoài** dấu hàm thay đổi **đầu ra** và lật phần đồ thị nằm dưới \(Ox\). Trị tuyệt đối **trong** dấu hàm thay đổi **đầu vào**, dùng nửa bên phải để tạo đối xứng qua \(Oy\) khi miền phù hợp. Cả hai phép biến đổi đều phải tôn trọng tập xác định. Khi có tham số \(a\), cần phân biệt rõ hàm bậc hai với trường hợp \(a=0\). Và khi làm một bài toán thực tế, không được lấy giá trị cực trị trên toàn trục số thay cho cực trị trên miền đề bài.

---

### AUTHORING CONTROL — KHÔNG RENDER CHO HỌC SINH

- S1: SGK Toán 10 KNTT T2, B16 trang in 11–18/PDF12–19. S1 xác nhận hàm bậc hai và tính chất parabol; phép biến đổi có trị tuyệt đối và phép tịnh tiến trên miền giới hạn là phần minh họa mở rộng, không tự coi là Core S1.
- Canonical preserved: R18 \`Temp_TOPIC_FUNCTIONS_FULL_PUBLIC_CANONICAL_SOURCE_R18_20261108.md\`, blob \`2340ea4975b37a457363eea59dd617070934983c\`, Draft PR #782.
- Proposed outcomes: đọc và biến đổi đồ thị; phân biệt trị tuyệt đối đầu vào/đầu ra; kiểm miền; biện luận \(a=0\), đọc miền cực trị. Đối chiếu R18 mapping trước khi chính thức gắn \`OUTCOME_ID\`.
- FIG D5 mới phải review đúng toán. HTML lab chưa được tự tuyên bố AP/Academic PASS. Các câu Vận dụng ở đây là công khai, không thay ngân hàng RD1 độc lập.
- \`DELTA_C_ACADEMIC_MATERIAL\`, cần NotebookLM targeted review đúng 5 Permanent Sources v2.1 + S1, sau Q01–Q18 và Q15 duplication review. Không \`CONTENT_READY\`.
