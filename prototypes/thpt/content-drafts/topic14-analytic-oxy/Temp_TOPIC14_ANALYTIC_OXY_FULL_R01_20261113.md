# CĐ14 — Phương pháp tọa độ trong mặt phẳng Oxy

**Tự học độc lập** qua đúng ba phần Kiến thức / Luyện tập / Tự kiểm tra. Em sẽ khởi đầu bằng điểm, vectơ hướng và pháp tuyến, rồi xác định đường thẳng, đường tròn, ba đường conic và cách chọn phương pháp. Trước khi mở **Đối chiếu**, hãy thử giải một bước nhỏ. Các câu đã có trong SGK được lấy lại từ ngân hàng chung; không sao chép đề/đáp án thành nguồn thứ hai.

# Kiến thức

**Tiền đề ôn ngay tại đây:** Điểm M(x,y) là vị trí trên hai trục vuông góc. Vectơ AB=(x_B−x_A,y_B−y_A) là độ dời từ A tới B. Độ dài vectơ u=(u₁,u₂) là √(u₁²+u₂²); tích vô hướng u·v=u₁v₁+u₂v₂ bằng 0 biểu thị vuông góc **khi cả hai vectơ khác không**. Các kí hiệu này được giải thích trong từng bài bên dưới; không bắt buộc mở CĐ13.

## Mạch A — Phương trình đường thẳng (Bài 19)

### 1. Vì sao một đường thẳng cần vectơ pháp tuyến hoặc chỉ phương?

**Vì sao cần học:** Muốn vẽ đường giao thông không chỉ biết một điểm nằm trên đường, mà còn phải biết đường đi theo hướng nào.

**Bản chất, điều kiện và cách chọn phương pháp:** Nhớ vectơ là một độ dời có hướng. Vectơ chỉ phương \(\vec u\ne\vec0\) song song đường thẳng; pháp tuyến \(\vec n\ne\vec0\) vuông góc đường thẳng. Với \(ax+by+c=0\), \((a,b)\ne(0,0)\), có thể chọn \(\vec n=(a,b)\) và \(\vec u=(-b,a)\). Hai vai trò khác nhau, không được tự hoán đổi.

**Ví dụ có giải thích:** Đường \(2x-y+3=0\) có pháp tuyến (2,−1), chỉ phương (1,2), vì tích vô hướng 2·1−1·2=0.

**Tự thử trước luyện tập:** Đường \(3x+2y-1=0\) có một vectơ chỉ phương nào?

<details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

Có thể chọn (−2,3), vì (3,2)·(−2,3)=0.

**Khắc phục nếu vướng:** Nếu lấy (3,2) làm chỉ phương, bạn đã nhầm với pháp tuyến; kiểm tích vô hướng.

</details>

### 2. Phương trình tổng quát hình thành từ một điểm và phương vuông góc

**Vì sao cần học:** Một điểm P và vectơ pháp tuyến đã đủ xác định đường thẳng, vì mọi vectơ từ P tới điểm khác trên đường đều vuông góc pháp tuyến.

**Bản chất, điều kiện và cách chọn phương pháp:** Nếu P(x₀,y₀), n=(a,b)≠0, điểm M(x,y) nằm trên đường khi n·PM=0. Do đó \(a(x-x_0)+b(y-y_0)=0\), rồi thu gọn thành \(ax+by+c=0\). Hệ số a,b không được đồng thời bằng 0.

**Ví dụ có giải thích:** Qua P(1,−2), n=(2,3): \(2(x-1)+3(y+2)=0\), hay \(2x+3y+4=0\). Thế P vào được 0.

**Tự thử trước luyện tập:** Qua P(2,3), có pháp tuyến n=(1,−2). Viết phương trình đường thẳng.

<details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

\(x-2-2(y-3)=0\), tức \(x-2y+4=0\).

**Khắc phục nếu vướng:** Nếu phương trình không đi qua P, thay tọa độ P để tìm sai dấu trước.

</details>

### 3. Phương trình tham số: đi từ điểm mốc theo đúng hướng

**Vì sao cần học:** Đường thẳng gồm các vị trí xuất phát từ A và dịch chuyển một lượng bất kỳ t theo vectơ chỉ phương u.

**Bản chất, điều kiện và cách chọn phương pháp:** Với A(x₀,y₀), u=(u₁,u₂)≠0, \((x,y)=(x_0,y_0)+t(u_1,u_2)\), t∈ℝ; nghĩa là \(x=x_0+u_1t\), \(y=y_0+u_2t\). Phương trình tham số không phải hai đường riêng rẽ; **một t chung** phải thỏa cả x và y.

**Ví dụ có giải thích:** A(−1,2), u=(3,−2) cho x=−1+3t, y=2−2t. Khi t=2, ta được (5,−2), thuộc đường.

**Tự thử trước luyện tập:** Qua A(1,−1), u=(2,3), tìm tọa độ điểm ứng với t=2.

<details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

M=(5,5). Dùng cùng t=2 ở cả hai tọa độ.

**Khắc phục nếu vướng:** Nếu thay t khác nhau cho x và y, bạn đã bỏ mất điều kiện một tham số chung.

</details>

### 4. Đường thẳng qua hai điểm phân biệt

**Vì sao cần học:** Khi biết hai vị trí A và B, chính vectơ AB là hướng của đường đi; không cần đo góc với trục.

**Bản chất, điều kiện và cách chọn phương pháp:** Với A≠B, u=AB=(x_B−x_A,y_B−y_A) là chỉ phương khác 0. Chọn n=(−u_y,u_x) hoặc (u_y,−u_x) để viết phương trình tổng quát. Nếu A=B, **một điểm không đủ** xác định duy nhất một đường thẳng.

**Ví dụ có giải thích:** A(1,1),B(3,5): u=(2,4), chọn n=(2,−1), từ A có \(2(x-1)-(y-1)=0\), tức \(2x-y-1=0\). Cả A và B cùng thỏa.

**Tự thử trước luyện tập:** Qua A(0,2), B(2,0), viết phương trình đường.

<details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

\(x+y-2=0\). Kiểm thế hai điểm đều cho 0.

**Khắc phục nếu vướng:** Nếu ra x−y−2=0, bạn chưa kiểm cả hai điểm thuộc đường.

</details>

### 5. Điểm nằm trên đường: thay tọa độ vào một điều kiện

**Vì sao cần học:** Không phải điểm nào vẽ gần nét thẳng cũng thuộc nó. Phương trình biến kiểm tra hình thành phép tính chính xác.

**Bản chất, điều kiện và cách chọn phương pháp:** Điểm M(x₀,y₀) thuộc \(ax+by+c=0\) khi và chỉ khi \(ax_0+by_0+c=0\). Với phương trình tham số, phải tồn tại **một** giá trị t chung thỏa cả hai tọa độ. Dùng thay số để kiểm nghiệm kết quả của mọi bài toán dựng đường.

**Ví dụ có giải thích:** Với d:2x+y−5=0, M(2,1) thuộc d vì 4+1−5=0; N(1,1) không thuộc vì 2+1−5≠0.

**Tự thử trước luyện tập:** Điểm (−1,3) có thuộc \(x+2y-5=0\) không?

<details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

Có, vì −1+6−5=0.

**Khắc phục nếu vướng:** Nếu chỉ nhìn hình hoặc kiểm một tọa độ, hãy viết đầy đủ biểu thức bên trái.

</details>

### 6. Bài toán nhiều điều kiện: dựng đúng một đường

**Vì sao cần học:** Các yêu cầu 'qua giao điểm hai đường và song song một đường thứ ba' phải làm theo thứ tự: tìm điểm trước rồi xác định hướng.

**Bản chất, điều kiện và cách chọn phương pháp:** Nếu đường cần tìm đi qua P và song song \(a x+b y+c=0\), nó có phương trình \(ax+by+c'=0\), với c' chọn để P thuộc đường. Nếu cần qua giao điểm d₁,d₂, giải hệ để tìm P trước. Đừng lấy c' bằng c một cách máy móc.

**Ví dụ có giải thích:** Giao của x+y=4 và x−y=0 là (2,2); đường qua đó song song 2x−3y=0 có 2x−3y+2=0.

**Tự thử trước luyện tập:** Qua giao của x+y=6 và x−y=2, song song \(3x+y-1=0\). Tìm phương trình.

<details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

Giao là (4,2). Đường có 3x+y+c=0, nên c=−14, thu được \(3x+y-14=0\).

**Khắc phục nếu vướng:** Nếu thế điểm giao không thỏa, quay lại giải hệ trước khi đặt hằng số.

</details>

### 7. Phương trình tuyến tính là một mô hình có giả thiết

**Vì sao cần học:** Điều kiện thực nghiệm có thể tạo quan hệ gần tuyến tính; phương trình đường thẳng giúp dự đoán nhưng không bảo đảm kéo dài vô hạn.

**Bản chất, điều kiện và cách chọn phương pháp:** Với dữ liệu (t,y) ở hai thời điểm, mô hình y=mt+b có m là mức thay đổi trên một đơn vị t, b là giá trị ở t=0. Chỉ coi đó là mô hình phù hợp khi có **giả thiết biến đổi đều** hoặc dữ liệu hỗ trợ; dự đoán ngoài phạm vi đo là ngoại suy cần thận trọng.

**Ví dụ có giải thích:** Một bể có thể tích V(0)=3 lít, V(2)=7 lít khi đổ đều: m=(7−3)/2=2 lít/phút, V=2t+3 trong khoảng đổ hợp lệ.

**Tự thử trước luyện tập:** Ban đầu bể có 5 lít, sau 3 phút có 11 lít khi đổ đều. Sau 4 phút có mấy lít?

<details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

Mức tăng 2 lít/phút, V(t)=2t+5 nên V(4)=13 lít, nếu chưa tràn bể.

**Khắc phục nếu vướng:** Nếu chỉ lấy 11/3, bạn đã nhầm lượng tổng với lượng **tăng thêm**.

</details>

## Mạch B — Vị trí, góc và khoảng cách (Bài 20)

### 8. Song song, trùng nhau hay cắt nhau?

**Vì sao cần học:** Hai tuyến đường có thể không gặp nhau, đi đúng cùng tuyến, hoặc giao một điểm; phân biệt bằng hệ số là đáng tin hơn nhìn hình.

**Bản chất, điều kiện và cách chọn phương pháp:** Với d₁:a₁x+b₁y+c₁=0, d₂:a₂x+b₂y+c₂=0, cả hai cặp pháp tuyến khác 0. Nếu \(a_1b_2-a_2b_1\ne0\), chúng cắt tại một điểm. Nếu định thức bằng 0, chúng song song hoặc trùng: xét tiếp toàn bộ bộ ba (a,b,c) có tỉ lệ hay không. Không kết luận trùng chỉ vì hai vectơ pháp tuyến cùng phương.

**Ví dụ có giải thích:** 2x−y+1=0 và 4x−2y−3=0 có pháp tuyến cùng phương nhưng c không cùng tỉ lệ, nên song song khác nhau.

**Tự thử trước luyện tập:** Hai đường x+2y=3 và 2x+4y=6 có trùng không?

<details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

Trùng nhau: toàn bộ phương trình thứ hai bằng 2 lần thứ nhất.

**Khắc phục nếu vướng:** Nếu chỉ xét tỉ số a/b mà bỏ c, bạn sẽ nhầm trùng và song song.

</details>

### 9. Dựng đường vuông góc tại một điểm

**Vì sao cần học:** Vuông góc là ràng buộc về **hướng** chứ không phải chỉ về vị trí hai đường.

**Bản chất, điều kiện và cách chọn phương pháp:** Nếu d có pháp tuyến n=(a,b), vectơ chỉ phương của đường cần dựng vuông góc d có thể lấy n. Khi đó pháp tuyến của đường mới có thể lấy (−b,a) hoặc (b,−a). Với đường qua P, dùng phương trình qua điểm và pháp tuyến mới. Hai đường thật vuông góc nếu hướng của chúng có tích vô hướng bằng 0.

**Ví dụ có giải thích:** Qua P(2,−1), vuông góc d:2x+y−3=0. Dùng pháp tuyến mới (1,−2), được x−2y−4=0.

**Tự thử trước luyện tập:** Qua P(1,2), vuông góc \(x-3y+1=0\). Viết đường thẳng.

<details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

Phương trình \(3x+y-5=0\), vì có pháp tuyến (3,1) vuông góc với (1,−3) của d.

**Khắc phục nếu vướng:** Nếu chỉ sao chép a,b của đường cũ, bạn đang dựng đường song song chứ không phải vuông góc.

</details>

### 10. Giao điểm của hai đường thẳng bằng giải hệ

**Vì sao cần học:** Giao điểm là tọa độ cùng thỏa **hai** điều kiện đường thẳng, nên giải hệ là cách tự nhiên.

**Bản chất, điều kiện và cách chọn phương pháp:** Viết d₁ và d₂ thành hệ hai phương trình. Nếu định thức các pháp tuyến khác 0 có nghiệm duy nhất; nếu bằng 0 có thể vô số nghiệm hoặc vô nghiệm. Sau khi giải, thế cả hai phương trình để kiểm kết quả; không suy nghiệm chỉ từ hình vẽ.

![Hai đường thẳng và các giao điểm từ phương trình](../../../../docs/assets/images/thpt/THPT_G10_B19_LINE_INTERSECTION_DRAFT.svg)

**Cách đọc hình:** tọa độ giao chỉ hợp lệ khi đồng thời thỏa phương trình cả hai đường; phối màu/hình chiếu không thay phép giải hệ.

**Ví dụ có giải thích:** x+y=5, x−y=1 có nghiệm (3,2), thỏa tổng 5 và hiệu 1. Hai đường cắt nhau vì định thức khác 0.

**Tự thử trước luyện tập:** Tìm giao của x+2y=7 và x−y=1.

<details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

Từ x=y+1, thế được 3y=6, y=2,x=3. Giao (3,2).

**Khắc phục nếu vướng:** Nếu chỉ thế được một đường, hãy kiểm điều kiện thứ hai.

</details>

### 11. Khoảng cách từ điểm đến đường thẳng

**Vì sao cần học:** Khoảng cách ngắn nhất từ một điểm tới đường thẳng là đoạn vuông góc; khoảng cách theo trục x/y thường không phải ngắn nhất.

**Bản chất, điều kiện và cách chọn phương pháp:** Với d:ax+by+c=0, (a,b)≠(0,0), khoảng cách từ P(x₀,y₀) tới d là \(\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}\). Tử số đo sai lệch theo pháp tuyến, mẫu chuẩn hóa độ dài pháp tuyến; trị tuyệt đối bảo đảm khoảng cách không âm. Nếu P thuộc d thì khoảng cách bằng 0.

**Ví dụ có giải thích:** P(1,2), d:3x+4y−10=0 ⇒ d(P,d)=|3+8−10|/5=1/5.

**Tự thử trước luyện tập:** P(2,1), d:3x+4y−20=0. Tính khoảng cách.

<details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

|6+4−20|/5=2 đơn vị.

**Khắc phục nếu vướng:** Nếu ra −2, bạn quên trị tuyệt đối; nếu ra 10, bạn quên chia độ dài pháp tuyến.

</details>

### 12. Góc nhỏ giữa hai đường không giống góc tù giữa hai vectơ

**Vì sao cần học:** Một đường thẳng không có mũi tên cố định; đổi chiều vectơ chỉ phương không được làm đổi 'góc nhỏ giữa hai đường'.

**Bản chất, điều kiện và cách chọn phương pháp:** Với d₁,d₂ có pháp tuyến n₁=(a₁,b₁),n₂=(a₂,b₂), góc nhỏ θ giữa hai đường thuộc [0°,90°] có \(\cos\theta=\frac{|a_1a_2+b_1b_2|}{\sqrt{a_1^2+b_1^2}\sqrt{a_2^2+b_2^2}}\). Có thể thay pháp tuyến bằng hai vectơ chỉ phương. Để đo góc định hướng giữa hai vectơ, **không** tự lấy trị tuyệt đối; phân biệt hai khái niệm.

**Ví dụ có giải thích:** d₁:x−y=0,d₂:x+y=0 có pháp tuyến (1,−1),(1,1), tích 0 ⇒ góc nhỏ 90°.

**Tự thử trước luyện tập:** Góc nhỏ giữa trục Oy (x=0) và đường y=x là bao nhiêu?

<details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

45°, vì pháp tuyến (1,0) và (1,−1) có cos góc nhỏ 1/√2.

**Khắc phục nếu vướng:** Nếu dùng góc 135° do đổi chiều vectơ, hãy nhớ đường thẳng không có chiều cố định.

</details>

## Mạch C — Đường tròn (Bài 21)

### 13. Đường tròn là mọi điểm cách tâm một bán kính

**Vì sao cần học:** Một trạm phủ sóng trong bán kính 3 km tạo nên một tập hợp vị trí: không phải hình đĩa nếu chỉ xét biên.

**Bản chất, điều kiện và cách chọn phương pháp:** Đường tròn tâm I(a,b), bán kính R>0 là tập điểm M có IM=R: \((x-a)^2+(y-b)^2=R^2\). Tâm I và bán kính R khác với khoảng cách của một điểm bất kỳ; \(IM<R\) là **bên trong**, không nằm trên đường tròn. R=0 cho điểm suy biến, không gọi đường tròn thường.

**Ví dụ có giải thích:** I(2,−1),R=3 ⇒ (x−2)²+(y+1)²=9. M(5,−1) thuộc vì IM=3.

**Tự thử trước luyện tập:** Viết đường tròn tâm (−1,3), bán kính 2.

<details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

\((x+1)^2+(y-3)^2=4\).

**Khắc phục nếu vướng:** Nếu dấu trước hoành độ tâm nhầm, thay trực tiếp điểm cách tâm đúng R vào phương trình.

</details>

### 14. Phương trình tổng quát đường tròn có điều kiện tồn tại

**Vì sao cần học:** Cùng một hình tròn có thể viết dưới dạng bình phương hoàn chỉnh hoặc dạng đa thức; không phải mọi phương trình bậc hai đều mô tả đường tròn thực.

**Bản chất, điều kiện và cách chọn phương pháp:** Phương trình \(x^2+y^2+Dx+Ey+F=0\) đưa về \((x+D/2)^2+(y+E/2)^2=(D^2+E^2)/4-F\). Tâm \((-D/2,-E/2)\); bán kính thực **dương** khi vế phải >0. Nếu bằng 0 chỉ có một điểm; nếu âm thì không có điểm thực. Hai hệ số x²,y² phải bằng nhau và không có xy trong dạng tổng quát chuẩn.

**Ví dụ có giải thích:** x²+y²−4x+6y−12=0 ⇒ (x−2)²+(y+3)²=25, tâm (2,−3), R=5.

**Tự thử trước luyện tập:** x²+y²+2x−4y+1=0 là đường tròn tâm nào, bán kính bao nhiêu?

<details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

(x+1)²+(y−2)²=4, tâm (−1,2), R=2.

**Khắc phục nếu vướng:** Nếu đọc R=4, bạn đã nhầm bán kính với **bình phương** bán kính.

</details>

### 15. Tiếp tuyến tại điểm trên đường tròn

**Vì sao cần học:** Một đường chạm đường tròn tại P và không xuyên qua nó: bán kính IP vuông góc với tiếp tuyến ở P.

**Bản chất, điều kiện và cách chọn phương pháp:** Với tâm I(a,b), điểm P(x₀,y₀) **phải thỏa phương trình đường tròn**. Vectơ IP=(x₀−a,y₀−b) là pháp tuyến của tiếp tuyến: \((x_0-a)(x-x_0)+(y_0-b)(y-y_0)=0\). Nếu P không ở trên đường tròn, đây chỉ là đường vuông góc IP qua P, không được gọi là tiếp tuyến tại P.

![Hình minh họa cho tiếp tuyến tại điểm trên đường tròn](../../../../docs/assets/images/thpt/THPT_G10_B21_CIRCLE_TANGENT_DRAFT.svg)

**Cách đọc hình:** Xác định tâm, bán kính nối tới tiếp điểm, rồi nhìn góc vuông giữa bán kính và tiếp tuyến; không tự đọc tọa độ từ hình minh họa không theo tỉ lệ.

**Ví dụ có giải thích:** Đường tròn tâm (1,2), R=3 có P(4,2) trên đường tròn; tiếp tuyến tại P là x=4.

**Tự thử trước luyện tập:** Đường tròn tâm O, R=5, P(3,4). Viết tiếp tuyến tại P.

<details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

\(3x+4y=25\), vì OP=(3,4) là pháp tuyến.

**Khắc phục nếu vướng:** Nếu dùng vectơ tiếp tuyến làm pháp tuyến, hãy vẽ IP vuông góc với tiếp tuyến rồi kiểm P thực sự thuộc đường tròn.

</details>

### 16. Đường tròn qua ba điểm: cần không thẳng hàng

**Vì sao cần học:** Ba điểm không thẳng hàng xác định duy nhất đường tròn; nếu cùng một đường thì không có đường tròn hữu hạn qua cả ba điểm phân biệt.

**Bản chất, điều kiện và cách chọn phương pháp:** Dùng phương trình tổng quát \(x^2+y^2+Dx+Ey+F=0\), thế ba điểm để giải hệ ba ẩn; hoặc lấy giao hai đường trung trực. **Điều kiện** ba điểm phân biệt, không thẳng hàng quyết định tính duy nhất. Sau khi tìm tâm, đối chiếu khoảng cách tâm tới cả ba điểm phải bằng nhau.

**Ví dụ có giải thích:** A(0,0),B(4,0),C(0,6) tạo tam giác vuông tại A, tâm ngoại tiếp là trung điểm BC=(2,3), R=√13.

**Tự thử trước luyện tập:** Qua A(0,0),B(6,0),C(0,8), tìm tâm và bán kính.

<details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

Tâm trung điểm cạnh huyền BC=(3,4), R=5.

**Khắc phục nếu vướng:** Nếu một điểm không cách tâm đúng R, kiểm lại dấu ở tọa độ trung điểm.

</details>

### 17. Đường thẳng cắt, tiếp xúc hay ở ngoài đường tròn?

**Vì sao cần học:** Không cần giải một phương trình bậc hai ngay để biết có bao nhiêu giao điểm.

**Bản chất, điều kiện và cách chọn phương pháp:** Với đường tròn tâm I, R>0 và đường d, đặt δ=d(I,d): nếu δ>R thì 0 giao; δ=R có 1 tiếp điểm; δ<R có 2 giao điểm. Khi cần **tọa độ giao**, thế phương trình đường vào phương trình đường tròn và giải; số nghiệm thực tương ứng 0/1/2 điểm. Không dùng δ để suy tọa độ cụ thể.

**Ví dụ có giải thích:** Đường tròn x²+y²=25 và đường y=3: δ=3<5, giao tại (−4,3),(4,3).

**Tự thử trước luyện tập:** Đường tròn x²+y²=25 và x=5 có mấy điểm chung? Điểm nào?

<details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

δ=5=R, tiếp xúc tại (5,0).

**Khắc phục nếu vướng:** Nếu đếm hai nghiệm bằng nhau là hai tiếp điểm, nhớ nghiệm bội chỉ cho **một** điểm.

</details>

## Mạch D — Ba đường conic (Bài 22)

### 18. Elip: tổng khoảng cách đến hai tiêu điểm không đổi

**Vì sao cần học:** Một sợi dây căng qua hai chốt tạo đường cong có tổng khoảng cách đến hai chốt cố định.

**Bản chất, điều kiện và cách chọn phương pháp:** Ở dạng chuẩn có trục lớn trùng Ox, elip \(x^2/a^2+y^2/b^2=1\), \(a>b>0\), \(c^2=a^2-b^2\), tiêu điểm F₁(−c,0),F₂(c,0). Tổng MF₁+MF₂=2a. Nếu b=a thì đường tròn là trường hợp biên, không còn hai tiêu điểm phân biệt. Kiến thức về **tâm sai** được xếp mở rộng theo S1, không tự biến thành Core bắt buộc.

**Ví dụ có giải thích:** x²/25+y²/9=1 có a=5,b=3,c=4; hai tiêu điểm (−4,0),(4,0), trục lớn dài 10.

**Tự thử trước luyện tập:** Với elip x²/25+y²/16=1, tìm hai tiêu điểm.

<details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

c²=25−16=9⇒c=3, F₁(−3,0),F₂(3,0).

**Khắc phục nếu vướng:** Nếu lấy c²=a²+b², bạn đang dùng công thức của **hypebol** chứ không phải elip.

</details>

### 19. Hypebol: hiệu khoảng cách và hai nhánh

**Vì sao cần học:** Một quỹ tích có **hiệu tuyệt đối** khoảng cách đến hai tiêu điểm cố định không đổi tạo đường hai nhánh, khác elip khép kín.

**Bản chất, điều kiện và cách chọn phương pháp:** Với \(x^2/a^2-y^2/b^2=1\), a,b>0, \(c^2=a^2+b^2\). Hai tiêu điểm (±c,0), hai đỉnh (±a,0), trục thực nằm ngang. Các dấu + và − trong phương trình không được đảo tùy tiện nếu giữ trục thực Ox. Với mọi điểm trên hypebol, \(|MF_1-MF_2|=2a\).

**Ví dụ có giải thích:** x²/9−y²/16=1 có a=3,b=4,c=5, tiêu điểm (±5,0). Trục thực dài 6.

**Tự thử trước luyện tập:** Với x²/16−y²/9=1, hai tiêu điểm ở đâu?

<details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

c²=16+9=25, c=5, tiêu điểm (−5,0),(5,0).

**Khắc phục nếu vướng:** Nếu tính c=√7, bạn đã dùng nhầm phép trừ của elip.

</details>

### 20. Tiệm cận hypebol là đường tiến gần, không phải trục

**Vì sao cần học:** Hai nhánh hypebol khi ra xa gần với hai đường xiên; điều đó giúp phác thảo mà không chấm nhầm điểm trên đường tiệm cận.

**Bản chất, điều kiện và cách chọn phương pháp:** Dạng \(x^2/a^2-y^2/b^2=1\) có tiệm cận \(y=\pm(b/a)x\). Chúng đi qua gốc, không phải hai đường x=±a. Trên hypebol tiêu chuẩn, tiệm cận không giao hypebol tại điểm hữu hạn; xét phương trình để biết dấu và độ nghiêng, không lấy tiệm cận làm kết quả giao.

**Ví dụ có giải thích:** x²/9−y²/4=1, a=3,b=2 ⇒ tiệm cận y=±(2/3)x.

**Tự thử trước luyện tập:** Với x²/25−y²/9=1, viết phương trình hai tiệm cận.

<details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

\(y=\pm\frac35 x\).

**Khắc phục nếu vướng:** Nếu ra x=±5, bạn đã nhầm tọa độ đỉnh với tiệm cận.

</details>

### 21. Parabol: cách đều tiêu điểm và đường chuẩn

**Vì sao cần học:** Một gương phản xạ có dạng parabol được mô tả từ các điểm có cùng khoảng cách tới một chốt và một đường thẳng.

**Bản chất, điều kiện và cách chọn phương pháp:** Theo quy ước **S1 đang dùng**: \(y^2=2px\), p>0, có đỉnh O, tiêu điểm F(p/2,0), đường chuẩn x=−p/2; mở sang phải. Một số sách dùng \(y^2=4ax\), khi đó a=p/2; không trộn hai ký hiệu. Nếu p≤0 thì không còn dạng chuẩn **p>0** này (dù parabol quay trái có thể có dạng khác).

![Hình minh họa cho parabol: cách đều tiêu điểm và đường chuẩn](../../../../docs/assets/images/thpt/THPT_G10_B22_PARABOLA_FOCUS_DIRECTRIX_DRAFT.svg)

**Cách đọc hình:** Tiêu điểm nằm trên trục Ox và đường chuẩn ở phía đối diện đỉnh; kiểm khoảng cách tới tiêu điểm và đường thẳng, đừng nhầm khoảng cách ngang với khoảng cách vuông góc.

**Ví dụ có giải thích:** y²=8x ⇒ 2p=8, p=4, F(2,0), đường chuẩn x=−2.

**Tự thử trước luyện tập:** y²=6x có tiêu điểm và đường chuẩn nào?

<details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

p=3, F(3/2,0), đường chuẩn x=−3/2.

**Khắc phục nếu vướng:** Nếu lấy F(3,0), bạn đã nhầm p với p/2.

</details>

### 22. Giao đường thẳng và conic: thế rồi kiểm nghiệm

**Vì sao cần học:** Giao điểm là điểm cùng nằm trên hai quỹ tích. Chỉ nhìn hình có thể bỏ sót điểm thứ hai hoặc đếm nghiệm ảo.

**Bản chất, điều kiện và cách chọn phương pháp:** Khi một đường thẳng d có thể giải y theo x (hoặc x theo y), thế biểu thức đó vào phương trình conic để thu phương trình một ẩn. Giải trong **số thực**, thế ngược để có cặp (x,y), kiểm đúng hai phương trình. Nếu phương trình bậc hai có Δ<0 thì không giao thực; Δ=0 tiếp xúc (khi không suy biến); Δ>0 có hai giao phân biệt.

**Ví dụ có giải thích:** Elip x²/9+y²/4=1 gặp x=0 tại y=±2, hai giao (0,2),(0,−2).

**Tự thử trước luyện tập:** Parabol y²=4x và đường x=1 có bao nhiêu giao điểm?

<details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

Có hai giao (1,2),(1,−2).

**Khắc phục nếu vướng:** Nếu chỉ lấy y=2 vì quên dấu ± khi căn, quay lại hình parabol đối xứng qua Ox.

</details>

### 23. Mô hình parabol chỉ đúng với giả thiết hướng và đơn vị

**Vì sao cần học:** Một ăng-ten dùng mặt cắt parabol đặt nguồn thu tại tiêu điểm; lựa chọn tọa độ ảnh hưởng trực tiếp hệ số phương trình.

**Bản chất, điều kiện và cách chọn phương pháp:** Nếu mặt cắt có đỉnh O và trục đối xứng theo Ox, mở phải, có thể mô tả bởi \(y^2=2px\), p>0; khi khoảng cách từ đỉnh đến tiêu điểm là f>0 thì p=2f và \(y^2=4fx\). Trục đặt sai sẽ đổi phương trình, nhưng tính chất cách đều tiêu điểm–đường chuẩn vẫn đúng. Ghi đơn vị x,y,f nhất quán.

**Ví dụ có giải thích:** Nếu nguồn thu ở tiêu điểm cách đỉnh 2 cm, f=2 cm nên phương trình theo cm là y²=8x, đường chuẩn x=−2 cm.

**Tự thử trước luyện tập:** Nguồn thu ở tiêu điểm cách đỉnh 3 cm; với trục Ox và đơn vị cm, phương trình mặt cắt?

<details markdown="1"><summary>Đối chiếu sau khi tự thử</summary>

f=3 ⇒ y²=4fx=12x (cùng đơn vị cm); đường chuẩn x=−3 cm.

**Khắc phục nếu vướng:** Nếu viết y²=6x, bạn đã quên rằng f=p/2.

</details>

# Luyện tập

Em luyện theo từng mạch: dựng đường thẳng từ dữ kiện, tìm giao/khoảng cách, nhận dạng đường tròn, xác định tiêu điểm và giải giao điểm với conic. Những câu SGK đã học được liên kết từ **một ngân hàng canonical** chung; các bài mới bên dưới có đề và đối chiếu riêng. Mọi luyện tập là cơ hội học, không phải điểm Mastery.

## Câu nguồn SGK dùng chung

Có **59 câu public** từ SGK Toán 10 Kết nối tri thức Chương VII, bao gồm 32 Core/Practice/Application đã được review, 4 Written/Anchor chung và 23 lượt Tự thử đã được review theo snapshot SGK. Các câu này chỉ được tham chiếu theo ID quản trị, không chép đề hoặc đáp án vào bản CĐ14.

## Bài luyện và tự luận CĐ14

<!-- CANONICAL_ITEM_ID: THPT-TOP14-P01; PRIMARY_OUTCOME: TOP14-O01; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_PRACTICE -->
### Bài luyện 1 · Từ pháp tuyến sang chỉ phương

**Đề:** Đường thẳng d:−2x+5y+4=0. Nêu một vectơ pháp tuyến và một vectơ chỉ phương, rồi kiểm chúng vuông góc.

<details markdown="1"><summary>Đối chiếu lời giải</summary>

n=(−2,5), u=(5,2). n·u=−10+10=0, n≠0, u≠0.

**Đường sửa lỗi:** Quay về mục Kiến thức 1 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-P02; PRIMARY_OUTCOME: TOP14-O02; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_PRACTICE -->
### Bài luyện 2 · Qua điểm theo pháp tuyến

**Đề:** Viết đường thẳng qua P(−1,2), có vectơ pháp tuyến n=(3,−2).

<details markdown="1"><summary>Đối chiếu lời giải</summary>

3(x+1)−2(y−2)=0 ⇒ 3x−2y+7=0. Kiểm P: −3−4+7=0.

**Đường sửa lỗi:** Quay về mục Kiến thức 2 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-P03; PRIMARY_OUTCOME: TOP14-O03; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_PRACTICE -->
### Bài luyện 3 · Một tham số dùng cho hai tọa độ

**Đề:** Đường qua A(2,−3), chỉ phương u=(−1,4). Viết tham số và tìm điểm ứng với t=−2.

<details markdown="1"><summary>Đối chiếu lời giải</summary>

x=2−t, y=−3+4t (t∈ℝ); tại t=−2 có (4,−11).

**Đường sửa lỗi:** Quay về mục Kiến thức 3 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-P04; PRIMARY_OUTCOME: TOP14-O04; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_PRACTICE -->
### Bài luyện 4 · Đường đi qua hai vị trí

**Đề:** Dựng phương trình tổng quát đường thẳng qua A(−2,1), B(2,3).

<details markdown="1"><summary>Đối chiếu lời giải</summary>

AB=(4,2), chọn n=(1,−2). Qua A: (x+2)−2(y−1)=0 ⇒ x−2y+4=0; thử cả hai điểm.

**Đường sửa lỗi:** Quay về mục Kiến thức 4 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-P05; PRIMARY_OUTCOME: TOP14-O05; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_PRACTICE -->
### Bài luyện 5 · Kiểm điểm thuộc đường

**Đề:** Đường d:x−3y−7=0. Điểm M(4,−1) và N(3,0) có thuộc d không?

<details markdown="1"><summary>Đối chiếu lời giải</summary>

M:4+3−7=0 nên thuộc; N:3−0−7=−4 nên không thuộc.

**Đường sửa lỗi:** Quay về mục Kiến thức 5 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-P06; PRIMARY_OUTCOME: TOP14-O06; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_PRACTICE -->
### Bài luyện 6 · Qua giao điểm và song song đường khác

**Đề:** Tìm đường thẳng qua giao của 2x+y=7 và x−y=2, song song 3x−y+2=0.

<details markdown="1"><summary>Đối chiếu lời giải</summary>

Giao (3,1). Đường cần tìm 3x−y+c=0, thế (3,1) ⇒c=−8. Kết quả 3x−y−8=0.

**Đường sửa lỗi:** Quay về mục Kiến thức 6 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-P07; PRIMARY_OUTCOME: TOP14-O07; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_PRACTICE -->
### Bài luyện 7 · Tốc độ thay đổi và điều kiện mô hình

**Đề:** Bể có 10 lít lúc t=0 và 26 lít lúc t=4 phút, được đổ đều. Viết V(t) và tính V(6), nếu bể chưa tràn.

<details markdown="1"><summary>Đối chiếu lời giải</summary>

Độ tăng 16/4=4 lít/phút; V(t)=10+4t, V(6)=34 lít. Mô hình chỉ đúng trong thời gian đổ đều và chưa tràn.

**Đường sửa lỗi:** Quay về mục Kiến thức 7 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-P08; PRIMARY_OUTCOME: TOP14-O08; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_PRACTICE -->
### Bài luyện 8 · Song song hay trùng nhau?

**Đề:** Phân loại d₁:x−2y+1=0 và d₂:2x−4y+3=0.

<details markdown="1"><summary>Đối chiếu lời giải</summary>

Pháp tuyến cùng phương, nhưng hệ số tự do không tỉ lệ (2·1≠3), nên hai đường song song **phân biệt**.

**Đường sửa lỗi:** Quay về mục Kiến thức 8 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-P09; PRIMARY_OUTCOME: TOP14-O09; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_PRACTICE -->
### Bài luyện 9 · Dựng đường vuông góc

**Đề:** Qua P(−2,3), dựng đường vuông góc d:2x−3y+1=0.

<details markdown="1"><summary>Đối chiếu lời giải</summary>

Đường cần có chỉ phương (2,−3), chọn pháp tuyến (3,2). Qua P:3(x+2)+2(y−3)=0 ⇒3x+2y=0.

**Đường sửa lỗi:** Quay về mục Kiến thức 9 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-P10; PRIMARY_OUTCOME: TOP14-O10; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_PRACTICE -->
### Bài luyện 10 · Giải giao điểm và thử lại

**Đề:** Tìm giao hai đường 3x+y=7, x−y=1.

<details markdown="1"><summary>Đối chiếu lời giải</summary>

Từ y=x−1, thế 3x+x−1=7 ⇒x=2,y=1. Kiểm 3·2+1=7,2−1=1.

**Đường sửa lỗi:** Quay về mục Kiến thức 10 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-P11; PRIMARY_OUTCOME: TOP14-O11; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_PRACTICE -->
### Bài luyện 11 · Khoảng cách điểm đến đường

**Đề:** Cho P(−1,2) và d:5x+12y−6=0. Tính d(P,d).

<details markdown="1"><summary>Đối chiếu lời giải</summary>

|5(−1)+12·2−6|/√(5²+12²)=|13|/13=1.

**Đường sửa lỗi:** Quay về mục Kiến thức 11 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-P12; PRIMARY_OUTCOME: TOP14-O12; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_PRACTICE -->
### Bài luyện 12 · Góc nhỏ giữa hai đường

**Đề:** Tính góc nhỏ giữa d₁:x=0 và d₂:x+√3 y=0.

<details markdown="1"><summary>Đối chiếu lời giải</summary>

Pháp tuyến n₁=(1,0), n₂=(1,√3). cosθ=|1|/(1·2)=1/2 ⇒θ=60°.

**Đường sửa lỗi:** Quay về mục Kiến thức 12 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-P13; PRIMARY_OUTCOME: TOP14-O13; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_PRACTICE -->
### Bài luyện 13 · Dựng đường tròn từ tâm, bán kính

**Đề:** Viết phương trình đường tròn tâm I(−2,1), R=4. Kiểm P(2,1) có nằm trên đường tròn không.

<details markdown="1"><summary>Đối chiếu lời giải</summary>

(x+2)²+(y−1)²=16; tại P có (2+2)²=16 nên P thuộc đường tròn.

**Đường sửa lỗi:** Quay về mục Kiến thức 13 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-P14; PRIMARY_OUTCOME: TOP14-O14; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_PRACTICE -->
### Bài luyện 14 · Hoàn chỉnh bình phương

**Đề:** Xác định tâm, bán kính của x²+y²−6x+2y+1=0.

<details markdown="1"><summary>Đối chiếu lời giải</summary>

(x−3)²+(y+1)²=9. Tâm I(3,−1), R=3>0 nên là đường tròn thực.

**Đường sửa lỗi:** Quay về mục Kiến thức 14 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-P15; PRIMARY_OUTCOME: TOP14-O15; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_PRACTICE -->
### Bài luyện 15 · Tiếp tuyến theo bán kính

**Đề:** Đường tròn tâm I(−1,2) đi qua P(1,6). Viết phương trình tiếp tuyến tại P.

<details markdown="1"><summary>Đối chiếu lời giải</summary>

IP=(2,4) là pháp tuyến; 2(x−1)+4(y−6)=0 ⇒x+2y−13=0. P thật sự thuộc đường tròn bán kính √20.

**Đường sửa lỗi:** Quay về mục Kiến thức 15 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-P16; PRIMARY_OUTCOME: TOP14-O16; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_PRACTICE -->
### Bài luyện 16 · Đường tròn qua ba đỉnh

**Đề:** Cho A(0,0),B(8,0),C(0,6). Xác định tâm và bán kính đường tròn ngoại tiếp tam giác.

<details markdown="1"><summary>Đối chiếu lời giải</summary>

Tam giác vuông tại A, tâm là trung điểm BC=(4,3), R=√(4²+3²)=5.

**Đường sửa lỗi:** Quay về mục Kiến thức 16 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-P17; PRIMARY_OUTCOME: TOP14-O17; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_PRACTICE -->
### Bài luyện 17 · Đường thẳng và đường tròn

**Đề:** Đường tròn (x−1)²+(y+2)²=9 và đường y=1 có bao nhiêu giao điểm? Nêu tọa độ.

<details markdown="1"><summary>Đối chiếu lời giải</summary>

I(1,−2),R=3; khoảng cách tới y=1 bằng3 nên tiếp xúc tại (1,1), đúng một giao điểm.

**Đường sửa lỗi:** Quay về mục Kiến thức 17 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-P18; PRIMARY_OUTCOME: TOP14-O18; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_PRACTICE -->
### Bài luyện 18 · Tìm tiêu điểm elip

**Đề:** Elip x²/36+y²/20=1 có hai tiêu điểm nào?

<details markdown="1"><summary>Đối chiếu lời giải</summary>

a²=36,b²=20,c²=36−20=16 ⇒ c=4; F₁(−4,0),F₂(4,0).

**Đường sửa lỗi:** Quay về mục Kiến thức 18 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-P19; PRIMARY_OUTCOME: TOP14-O19; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_PRACTICE -->
### Bài luyện 19 · Tìm tiêu điểm hypebol

**Đề:** Hypebol x²/25−y²/24=1 có tiêu điểm nào?

<details markdown="1"><summary>Đối chiếu lời giải</summary>

a²=25,b²=24,c²=25+24=49 ⇒ c=7, F₁(−7,0),F₂(7,0).

**Đường sửa lỗi:** Quay về mục Kiến thức 19 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-P20; PRIMARY_OUTCOME: TOP14-O20; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_PRACTICE -->
### Bài luyện 20 · Tiệm cận không phải đường đỉnh

**Đề:** Tìm hai tiệm cận của x²/16−y²/25=1.

<details markdown="1"><summary>Đối chiếu lời giải</summary>

a=4,b=5 ⇒ y=±(5/4)x. Hai đường x=±4 là vị trí đỉnh, không phải tiệm cận.

**Đường sửa lỗi:** Quay về mục Kiến thức 20 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-P21; PRIMARY_OUTCOME: TOP14-O21; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_PRACTICE -->
### Bài luyện 21 · Nhận dạng quy ước parabol

**Đề:** Parabol y²=10x có tiêu điểm và đường chuẩn nào theo y²=2px (p>0)?

<details markdown="1"><summary>Đối chiếu lời giải</summary>

2p=10,p=5 ⇒ F(5/2,0), đường chuẩn x=−5/2.

**Đường sửa lỗi:** Quay về mục Kiến thức 21 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-P22; PRIMARY_OUTCOME: TOP14-O22; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_PRACTICE -->
### Bài luyện 22 · Giao đường thẳng với elip

**Đề:** Tìm các giao điểm của elip x²/16+y²/9=1 và đường y=0.

<details markdown="1"><summary>Đối chiếu lời giải</summary>

Đặt y=0 ⇒x²/16=1 ⇒x=±4; giao (−4,0),(4,0).

**Đường sửa lỗi:** Quay về mục Kiến thức 22 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-P23; PRIMARY_OUTCOME: TOP14-O23; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_PRACTICE -->
### Bài luyện 23 · Ước lượng miệng ăng-ten parabol

**Đề:** Mặt cắt ăng-ten có trục Ox, đỉnh O, tiêu điểm cách đỉnh 4 cm. Viết phương trình; tại độ sâu x=9 cm, khoảng cách giữa hai mép theo phương y bao nhiêu?

<details markdown="1"><summary>Đối chiếu lời giải</summary>

f=4 ⇒ y²=4fx=16x (tọa độ cm). Tại x=9, y²=144 nên y=±12 cm; bề rộng miệng là 24 cm.

**Đường sửa lỗi:** Quay về mục Kiến thức 23 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-W01; PRIMARY_OUTCOME: TOP14-O04; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_WRITTEN -->
### Tự luận 1 · Lập phương trình đường theo hai dạng

**Đề:** Qua A(−1,2),B(3,4): (a) tìm chỉ phương; (b) lập tổng quát; (c) lập tham số; (d) kiểm P(1,3) có thuộc đường không.

<details markdown="1"><summary>Đối chiếu lời giải và rubric 7 điểm</summary>

AB=(4,2) (2đ); chọn n=(1,−2), x−2y+5=0 (2đ); x=−1+4t,y=2+2t (2đ); P(1,3) thỏa 1−6+5=0, hoặc t=1/2 (1đ). Tổng 7đ.

**Đường sửa lỗi:** Quay về mục Kiến thức 4 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-W02; PRIMARY_OUTCOME: TOP14-O10; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_WRITTEN -->
### Tự luận 2 · Giao, khoảng cách và phân loại

**Đề:** Cho d₁:2x+y−7=0, d₂:x−y−2=0, d₃:3x+4y−10=0. (a) tìm giao d₁,d₂; (b) tính khoảng cách giao điểm tới d₃; (c) giải thích vì sao d₁,d₂ cắt nhau duy nhất.

<details markdown="1"><summary>Đối chiếu lời giải và rubric 7 điểm</summary>

Giải hệ được M(3,1) (3đ); d(M,d₃)=|9+4−10|/5=3/5 (3đ); định thức pháp tuyến 2·(−1)−1·1=−3≠0 (1đ). Tổng 7đ.

**Đường sửa lỗi:** Quay về mục Kiến thức 10 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-W03; PRIMARY_OUTCOME: TOP14-O16; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_WRITTEN -->
### Tự luận 3 · Đường tròn qua ba điểm và tiếp tuyến

**Đề:** Cho A(0,0),B(6,0),C(0,8). (a) tìm tâm; (b) bán kính và phương trình; (c) tiếp tuyến tại A; (d) kiểm A thuộc đường tròn.

<details markdown="1"><summary>Đối chiếu lời giải và rubric 7 điểm</summary>

Tâm I(3,4) (2đ); R=5, (x−3)²+(y−4)²=25 (2đ); IA=(−3,−4), tiếp tuyến 3x+4y=0 (2đ); A thỏa 9+16=25 (1đ). Tổng 7đ.

**Đường sửa lỗi:** Quay về mục Kiến thức 16 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-W04; PRIMARY_OUTCOME: TOP14-O20; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_WRITTEN -->
### Tự luận 4 · So sánh elip và hypebol

**Đề:** Xét (E):x²/25+y²/9=1 và (H):x²/9−y²/16=1. (a) tiêu điểm E; (b) tiêu điểm H; (c) hai tiệm cận H; (d) giải thích vì sao không dùng một công thức c² cho cả hai.

<details markdown="1"><summary>Đối chiếu lời giải và rubric 7 điểm</summary>

E: c²=25−9=16, tiêu điểm (±4,0) (2đ); H: c²=9+16=25, tiêu điểm (±5,0) (2đ); tiệm cận y=±(4/3)x (2đ); E là tổng khoảng cách không đổi còn H là hiệu trị tuyệt đối, hai dạng dẫn đến dấu khác nhau trong c² (1đ). Tổng 7đ.

**Đường sửa lỗi:** Quay về mục Kiến thức 20 rồi thử một lượt không xem đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP14-W05; PRIMARY_OUTCOME: TOP14-O23; SOURCE_TYPE: TOPIC_NEW_CANDIDATE; ROLE: TOPIC_WRITTEN -->
### Tự luận 5 · Mặt cắt parabol và giao đường

**Đề:** Mặt cắt parabol y²=12x (đơn vị cm). (a) tìm tiêu điểm và đường chuẩn; (b) tìm giao với đường x=3; (c) độ rộng mặt cắt tại x=3 và giải thích ý nghĩa.

<details markdown="1"><summary>Đối chiếu lời giải và rubric 7 điểm</summary>

2p=12⇒p=6,F(3,0), đường chuẩn x=−3 (2đ); x=3⇒y²=36, giao (3,−6),(3,6) (2đ); bề rộng=12 cm (2đ); đây là độ rộng mặt cắt tại x=3, không phải tiêu cự/chiều sâu (1đ). Tổng 7đ.

**Đường sửa lỗi:** Quay về mục Kiến thức 23 rồi thử một lượt không xem đáp án.

</details>



# Tự kiểm tra

Hãy giải một lượt câu đã học về phương trình đường thẳng, giao điểm/khoảng cách, đường tròn, elip, hypebol, parabol và mô hình. Đây là **tự đối chiếu câu công khai**, không phải đánh giá độc lập. Trước **Nộp bài cuối**, không thấy gợi ý, kết quả đúng/sai, đáp án, lời giải hay AI Tutor; sau nộp mới được tự mở đối chiếu và xem cần quay lại bài nào. Không tự động ghi điểm thành thạo.

<!-- AUTHORING: PUBLIC replay only, CLIENT_SELF_CHECK_NO_MASTERY; no independent RD1, no official readiness. -->

<!-- AUTHORING ONLY: original G10 ChVII full R02 reviewed SGK canonical 59 IDs, pointer-only; no duplicated stem/key/rubric.
SOURCE_GIT_BLOB: c5c222af88b0e932f9b60df059d8ffd4da5f0f26
- THPT-G10-B19-C01
- THPT-G10-B19-C02
- THPT-G10-B19-P01
- THPT-G10-B19-P02
- THPT-G10-B19-P03
- THPT-G10-B19-P04
- THPT-G10-B20-C01
- THPT-G10-B20-C02
- THPT-G10-B20-P01
- THPT-G10-B20-P02
- THPT-G10-B20-P03
- THPT-G10-B20-P04
- THPT-G10-B21-C01
- THPT-G10-B21-C02
- THPT-G10-B21-P01
- THPT-G10-B21-P02
- THPT-G10-B21-P03
- THPT-G10-B21-P04
- THPT-G10-B22-C01
- THPT-G10-B22-C02
- THPT-G10-B22-P01
- THPT-G10-B22-P02
- THPT-G10-B22-P03
- THPT-G10-B22-P04
- THPT-G10-B19-P05
- THPT-G10-B19-P06
- THPT-G10-B20-P05
- THPT-G10-B20-P06
- THPT-G10-B21-P05
- THPT-G10-B21-P06
- THPT-G10-B22-P05
- THPT-G10-B22-P06
- THPT-G10-CHVII-W19-01
- THPT-G10-CHVII-W20-01
- THPT-G10-CHVII-W21-ANCHOR-01
- THPT-G10-CHVII-W22-01
- THPT-G10-CHVII-TRY01
- THPT-G10-CHVII-TRY02
- THPT-G10-CHVII-TRY03
- THPT-G10-CHVII-TRY04
- THPT-G10-CHVII-TRY05
- THPT-G10-CHVII-TRY06
- THPT-G10-CHVII-TRY07
- THPT-G10-CHVII-TRY08
- THPT-G10-CHVII-TRY09
- THPT-G10-CHVII-TRY10
- THPT-G10-CHVII-TRY11
- THPT-G10-CHVII-TRY12
- THPT-G10-CHVII-TRY13
- THPT-G10-CHVII-TRY14
- THPT-G10-CHVII-TRY15
- THPT-G10-CHVII-TRY16
- THPT-G10-CHVII-TRY17
- THPT-G10-CHVII-TRY18
- THPT-G10-CHVII-TRY19
- THPT-G10-CHVII-TRY20
- THPT-G10-CHVII-TRY21
- THPT-G10-CHVII-TRY22
- THPT-G10-CHVII-TRY23
-->
<!-- AUTHORING ONLY: optional 23 public-replay selfcheck placement IDs, no independent hidden test
- THPT-TOP14-P01
- THPT-TOP14-P02
- THPT-TOP14-P03
- THPT-TOP14-P04
- THPT-TOP14-P05
- THPT-TOP14-P06
- THPT-TOP14-P07
- THPT-TOP14-P08
- THPT-TOP14-P09
- THPT-TOP14-P10
- THPT-TOP14-P11
- THPT-TOP14-P12
- THPT-TOP14-P13
- THPT-TOP14-P14
- THPT-TOP14-P15
- THPT-TOP14-P16
- THPT-TOP14-P17
- THPT-TOP14-P18
- THPT-TOP14-P19
- THPT-TOP14-P20
- THPT-TOP14-P21
- THPT-TOP14-P22
- THPT-TOP14-P23
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
OFFICIAL_READINESS: NOT_CLAIMED
PRIVATE_RD1_COUNT: 0
MASTERY_ACTIVATION: NO
-->
