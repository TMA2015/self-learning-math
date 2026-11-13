**CĐ12 — Hệ thức lượng trong tam giác và giải tam giác**

> **Học theo Chuyên đề · Kiến thức / Luyện tập / Tự kiểm tra.** Em sẽ hiểu cách một góc tạo nên những tỉ số, lựa chọn định lí phù hợp, giải tam giác và tự đo khoảng cách khi không thể tiếp cận trực tiếp. Hãy thử giải trước khi mở **Đối chiếu**; các bài tự kiểm tra chỉ giúp em nhận ra phần cần ôn.

# Kiến thức

## Chặng 1 — Từ một góc đến hai con số có ý nghĩa

**Vì sao có thể đo độ dài không thể chạm tới?** Giả sử hai người đứng ở A và B trên bờ sông, biết khoảng cách AB và có thể ngắm một mốc C ở bờ bên kia. Không cần kéo thước qua sông: các góc nhìn và độ dài AB đã đủ để dựng nên một tam giác rồi suy ra các cạnh còn lại. Nhưng trước hết, ta phải hiểu sin và côsin của những góc lớn hơn 90° — điều mà tam giác vuông đơn lẻ không giải thích hết.

### 1. Góc 0°–180° được biểu diễn như thế nào?

Hãy tưởng tượng một kim dài đúng một đơn vị quay quanh gốc O từ trục ngang dương đến vị trí tạo góc α, với `0° ≤ α ≤ 180°`. Đầu kim là điểm M nằm trên **nửa đường tròn phía trên**, nên nếu M có tọa độ `(x,y)` thì `x²+y²=1`, `y≥0`. Ta gọi **côsin là hoành độ** `cos α=x`, **sin là tung độ** `sin α=y`. Định nghĩa này nối liền góc nhọn, góc vuông và góc tù, thay vì buộc ta học ba trường hợp rời rạc.

![Nửa đường tròn đơn vị: góc 120°, hoành độ âm và tung độ dương](../../visuals/THPT_G10_B05_SEMICIRCLE_120_D5_R01.svg)

**Cách đọc hình:** Đi từ O đến M theo bán kính 1. Tại góc 120°, M nằm **bên trái** trục Oy và **bên trên** Ox, vì vậy `cos 120°=-1/2`, `sin 120°=√3/2`. Nét đứt là hình chiếu tọa độ, *không phải cạnh của một tam giác cần tính*. Góc 180° nằm trên trục Ox âm: sin=0, cos=-1.

**Vận dụng:** Không nhìn bảng, dự đoán dấu của `sin 150°` và `cos 150°` trước khi tính.

<details><summary>Đối chiếu</summary>150° là góc tù: điểm trên nửa đường tròn phía trên bên trái, do đó sin dương và cos âm. Cụ thể sin150°=1/2, cos150°=-√3/2. Nếu viết cos dương, hãy quay lại vị trí hình chiếu M trên trục hoành rồi làm bài luyện về cosin góc tù.</details>

### 2. Giá trị đặc biệt và góc bù — nhìn thấy quy luật thay vì học thuộc mù

Điểm trên nửa đường tròn tại hai góc `α` và `180°−α` có **cùng chiều cao** nhưng hoành độ đối nhau. Bởi vậy:

\[\sin(180^\circ-\alpha)=\sin\alpha,\qquad \cos(180^\circ-\alpha)=-\cos\alpha.\]

| Góc | 0° | 30° | 45° | 60° | 90° | 120° | 135° | 150° | 180° |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| sin | 0 | 1/2 | √2/2 | √3/2 | 1 | √3/2 | √2/2 | 1/2 | 0 |
| cos | 1 | √3/2 | √2/2 | 1/2 | 0 | −1/2 | −√2/2 | −√3/2 | −1 |

**Ví dụ:** `sin135°+cos120°=√2/2−1/2=(√2−1)/2`. Ta nhận ra trước `135°=180°−45°`, `120°=180°−60°` rồi mới tính, vì quy luật dấu mới là điều quan trọng.

**Vận dụng:** Tính `sin150°+cos120°` mà không dùng máy tính.

<details><summary>Đối chiếu</summary>`sin150°=1/2`, `cos120°=−1/2`, tổng bằng **0**. Nếu nhầm dấu côsin, ôn lại cách đọc nửa đường tròn ở mục 1 và làm bài luyện về góc bù.</details>

### 3. Tang, côtang có tồn tại với mọi góc không?

Sin và cos là tọa độ nên đều xác định trên đoạn `0°–180°`. Tang và côtang là **tỉ số tọa độ**:

\[\tan\alpha=\frac{\sin\alpha}{\cos\alpha}\quad(\cos\alpha\ne0),\qquad \cot\alpha=\frac{\cos\alpha}{\sin\alpha}\quad(\sin\alpha\ne0).\]

Vì vậy, `tan90°` không xác định; `cot0°` và `cot180°` không xác định; ngược lại `tan180°=0` *có* nghĩa. Đối với góc tù, sin dương và cos âm, nên tang/côtang khi xác định đều âm.

**Ví dụ:** Góc tù α có `tan α=−2`: từ `1+tan²α=1/cos²α` suy `cos²α=1/5`, chọn **cos âm** vì góc tù, nên `cosα=−1/√5`, `sinα=2/√5`, `cotα=−1/2`.

**Vận dụng:** Tại `α=90°`, đại lượng nào không xác định: `sinα`, `cosα`, `tanα`, hay cả ba?

<details><summary>Đối chiếu</summary>Chỉ **tanα** không xác định vì mẫu cos90°=0. Nếu nghĩ cos90° không xác định, quay lại định nghĩa hoành độ ở mục 1 và làm bài luyện về điều kiện của tang.</details>

### 4. Từ tọa độ đến hệ thức lượng giác; lựa chọn đúng dấu

Vì M luôn nằm trên đường tròn đơn vị nên `x²+y²=1`, tức là:

\[\sin^2\alpha+\cos^2\alpha=1.\]

Chia hai vế cho `cos²α` hoặc `sin²α` chỉ khi mẫu khác 0 mới được các hệ thức `1+tan²α=1/cos²α` và `1+cot²α=1/sin²α`. **Biết bình phương không tự cho biết dấu.** Với góc tù α và `sinα=3/5`, ta có `cos²α=16/25`, rồi chọn `cosα=−4/5`, không phải `+4/5`.

**Vận dụng:** Góc tù α thỏa `cosα=−5/13`. Hãy tính sinα và tanα.

<details><summary>Đối chiếu</summary>`sin²α=1−25/169=144/169`; vì 0°<α<180° nên sin không âm, ở đây sinα=12/13. Do đó tanα=(12/13)/(−5/13)=**−12/5**. Nếu chọn sin âm, hãy xem lại vị trí M ở mục 1 rồi làm bài luyện về dấu của sin và cosin.</details>

## Chặng 2 — Tam giác bất kỳ: tìm một cạnh từ hai cạnh và góc

### 5. Tại sao định lí côsin là sự tiếp nối của Pitago?

Trong một **tam giác không suy biến** ABC, đặt `a=BC`, `b=CA`, `c=AB`, lần lượt đối diện các góc A,B,C. Cả ba cạnh dương, `a+b>c`, `b+c>a`, `c+a>b`; ba góc đều trong `(0°,180°)` và có tổng 180°.

Nếu đặt A ở gốc tọa độ, B tại `(c,0)` và C tại `(b cos A,b sin A)`, độ dài BC bằng khoảng cách giữa hai điểm này. Bình phương hai tọa độ chênh lệch rồi dùng `sin²A+cos²A=1`, ta được:

\[a^2=(c-b\cos A)^2+(b\sin A)^2=b^2+c^2-2bc\cos A.\]

**Đó là định lí côsin**. Khi A vuông, cosA=0, nó chính là Pitago. Khi A tù, cosA âm nên `a²>b²+c²`, phản ánh cạnh đối diện góc tù dài hơn.

![Tam giác ABC với b=6, c=8, A=60°: định lí côsin và diện tích](../../visuals/THPT_G10_B06_COSINE_AREA_TRIANGLE_D5_R01.svg)

**Cách đọc hình:** Góc 60° nằm ở A, *xen giữa* hai cạnh AB=c=8 và AC=b=6, không phải giữa b và a. Vì vậy `a²=6²+8²−2·6·8·cos60°=52`, `a=2√13`. Hình còn đánh dấu vùng diện tích; đừng đọc chiều cao ngoài tam giác thành cạnh BC.

**Vận dụng:** Cho `b=5, c=7, A=60°`. Hãy tìm a và giải thích vì sao không dùng Pitago trực tiếp.

<details><summary>Đối chiếu</summary>`a²=25+49−2·5·7·(1/2)=39`, nên **a=√39**. Pitago chỉ dùng trực tiếp khi góc xen giữa 90°. Nếu đặt nhầm cạnh đối diện, quay lại sơ đồ a=BC, b=CA, c=AB rồi làm bài luyện về định lí cosin.</details>

### 6. Vì sao định lí sin giúp nối cạnh và góc đối diện?

Diện tích cùng một tam giác có thể tính bằng `S=1/2 bc sinA=1/2 ca sinB=1/2 ab sinC`. Chia từng biểu thức cho `abc/2` (ba cạnh dương) thu được `sinA/a=sinB/b=sinC/c`. Định lí sin phát biểu đầy đủ:

\[\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C}=2R,\]

trong đó R là bán kính đường tròn **ngoại tiếp**. Trong tam giác không suy biến, các góc A,B,C thuộc `(0°,180°)` nên sin của chúng dương.

**Ví dụ:** Với `A=30°, B=45°, a=5`, góc `C=105°`, rồi `b=5·sin45°/sin30°=5√2`. Mặt khác `2R=a/sinA=10` nên `R=5`. Ta dùng định lí sin vì có sẵn một cặp cạnh–góc đối diện và cần cặp còn lại.

**Vận dụng:** `A=30°, B=60°, a=4`. Tìm b và R.

<details><summary>Đối chiếu</summary>`b=4 sin60°/sin30°=4√3`, `2R=4/sin30°=8`, nên **R=4**. Nếu lấy b/a=sinA/sinB, xem lại thứ tự đối diện rồi làm bài luyện về định lí sin.</details>

### 7. Nhìn dữ kiện để chọn phương pháp, không chọn công thức theo thói quen

| Đã biết | Tìm tiếp | Lý do chọn |
|---|---|---|
| **SSS:** ba cạnh | Góc | Dùng côsin: công thức nối đúng ba cạnh với góc đối diện |
| **SAS:** hai cạnh và góc xen giữa | Cạnh thứ ba | Dùng côsin trước, vì đã biết góc ở giữa hai cạnh |
| **ASA/AAS:** hai góc và một cạnh | Hai cạnh khác | Tính góc còn lại, rồi dùng sin |
| **SSA:** hai cạnh và góc **không xen giữa** | Số tam giác? | Phải kiểm tra *0, 1 hay 2 nghiệm* trước; không tự gán một tam giác |

**Ví dụ SSS:** Ba cạnh `7,8,9` tạo thành tam giác vì thỏa bất đẳng thức tam giác. Với `a=7,b=8,c=9`, `cos C=(a²+b²−c²)/(2ab)=(49+64−81)/112=2/7`. Định lí côsin chọn C vì biết cạnh c đối diện góc cần tìm.

**Vận dụng:** Tam giác có ba cạnh 6,8,10: góc đối diện cạnh 10 bằng bao nhiêu? Diện tích bao nhiêu?

<details><summary>Đối chiếu</summary>`6²+8²=10²`, nên góc đối diện cạnh 10 là **90°**. Diện tích bằng `1/2·6·8=24` đơn vị vuông. Nếu chỉ biết ba cạnh mà áp dụng ngay định lí sin, quay lại bảng SSS rồi làm bài luyện về góc vuông từ ba cạnh.</details>

### 8. Một bộ dữ kiện SSA có thể tạo thành hai tam giác

Giả sử biết `A=30°, a=5, b=8`. Định lí sin cho `sinB=b sinA/a=4/5`. Nhưng trên đoạn `(0°,180°)`, **hai góc bù nhau có cùng sin**. Vì vậy `B₁≈53,13°`, `B₂≈126,87°`. Cả hai có `A+B<180°`, nên tồn tại **hai tam giác** khác nhau; tương ứng `C₁≈96,87°` hoặc `C₂≈23,13°`.

Muốn giải SSA an toàn, tính `t=b sinA/a` trước: nếu `t>1`, không có tam giác; nếu `0<t≤1`, phải xét cả `B=arcsin t` lẫn `180°−arcsin t` và kiểm tra `A+B<180°` từng trường hợp. Với t=1 hai giá trị B trùng nhau. Với A và các cạnh dương, số nghiệm phụ thuộc cả góc A và điều kiện tổng góc; không kết luận hai nghiệm chỉ vì t<1.

**Vận dụng:** `A=30°, a=4, b=10`. Tồn tại tam giác nào thỏa dữ kiện này không?

<details><summary>Đối chiếu</summary>`sinB=(10·sin30°)/4=5/4>1` là vô lý, nên **không tồn tại tam giác**. Không dùng máy tính `arcsin(1,25)`; hãy kiểm điều kiện đầu vào. Luyện lại mục 6 rồi làm bài luyện về dữ kiện vô nghiệm.</details>

## Chặng 3 — Diện tích, các bán kính và đo đạc thực tế

### 9. Diện tích dùng hai cạnh và góc xen giữa

Cạnh c làm đáy; độ cao tương ứng bằng `b sinA` nếu A nhọn, và vẫn có cùng độ dài dương nếu A tù (chân đường cao nằm trên phần kéo dài). Do đó:

\[S=\frac12bc\sin A=\frac12ca\sin B=\frac12ab\sin C.\]

Phải dùng **góc xen giữa chính hai cạnh đang nhân**. Với `b=8,c=5,A=30°`, `S=(1/2)·8·5·(1/2)=10`. Trong tam giác, `sinA>0`; diện tích luôn dương.

**Vận dụng:** Cho `b=6,c=8,A=60°`. Tính diện tích, rồi đối chiếu với vùng tô trên hình ở mục 5.

<details><summary>Đối chiếu</summary>`S=(1/2)·6·8·sin60°=12√3` đơn vị diện tích. Nếu ra 24√3, em đã quên hệ số 1/2. Luyện bài luyện cùng dạng.</details>

### 10. Chỉ có ba cạnh: Heron, bán kính nội tiếp và ngoại tiếp

Không biết góc cũng có thể tính diện tích: đặt nửa chu vi `p=(a+b+c)/2`; với tam giác không suy biến,

\[S=\sqrt{p(p-a)(p-b)(p-c)}.\]

Nếu r là bán kính đường tròn **nội tiếp** và R là bán kính đường tròn **ngoại tiếp**, thì:

\[S=pr,\qquad S=\frac{abc}{4R}.\]

Công thức `S=pr` đến từ việc chia tam giác thành ba tam giác nhỏ chung chiều cao r (đường vuông góc từ tâm nội tiếp đến ba cạnh). Công thức `S=abc/(4R)` kết hợp diện tích qua sin với định lí sin. **Không hoán đổi r và R**, và trước khi dùng Heron phải kiểm `a+b>c`, `b+c>a`, `c+a>b`.

**Ví dụ:** Tam giác 13–14–15 có `p=21`, `S=√(21·8·7·6)=84`, `r=84/21=4`, `R=13·14·15/(4·84)=65/8`.

**Vận dụng:** Với ba cạnh 5,5,6, tính S và r.

<details><summary>Đối chiếu</summary>`p=8`; `S=√(8·3·3·2)=12`; `r=S/p=3/2`. Nếu dùng `abc/(4S)` sẽ tìm **R**, không phải r. Luyện bài luyện về Heron.</details>

### 11. Giải tam giác để đo khoảng cách không đi tới được

Khi khảo sát, đầu tiên hãy **vẽ lại điểm quan sát** và đánh dấu cạnh thực sự đo được. Với hai vị trí A,B cách nhau 100 m, cùng ngắm C và đo góc trong `A=30°`, `B=60°`, ta suy `C=90°`. Vì AB đối diện C, đây là cạnh huyền. Định lí sin cho:

\[BC=100\frac{\sin30^\circ}{\sin90^\circ}=50\text{ m},\qquad AC=100\frac{\sin60^\circ}{\sin90^\circ}=50\sqrt3\text{ m}.\]

Tại sao không dùng góc 30° thay cho góc C khi chia AB? Vì **AB đối diện C**, không đối diện A. Kết quả cần ghi đơn vị mét và nên so sánh hợp lí với đoạn mốc ban đầu.

**Vận dụng:** Nếu `AB=80 m`, góc A=B=45°, độ dài BC và AC có bằng nhau không? Bằng bao nhiêu?

<details><summary>Đối chiếu</summary>`C=90°`, `BC=80 sin45°/sin90°=40√2 m`, `AC=40√2 m`. Bằng nhau vì A=B. Nếu ra một cạnh khác, kiểm lại quan hệ đối diện trước khi bấm máy. Luyện bài luyện về đo đạc.</details>

### 12. Kiểm tra mô hình trước khi tin đáp số

Một phép tính đúng trên máy không cứu được dữ kiện sai: ba thanh dài 2,3,6 không tạo được tam giác (`2+3<6`); hai góc có tổng 190° không thể là góc trong của tam giác; trong bài toán thực tế, nhầm góc giữa đường ngắm với góc bên ngoài sẽ làm ra khoảng cách sai. Khi dùng máy tính lượng giác, kiểm chế độ **DEG (độ)** nếu đề dùng 30°,60°; muốn dùng radian phải đổi đơn vị nhất quán.

Thực hành một quy trình ổn định: (1) gọi tên cạnh/góc đối diện; (2) kiểm dữ kiện và bất đẳng thức tam giác; (3) quyết định SSS/SAS/ASA–AAS/SSA; (4) ghi điều kiện áp dụng trước khi thế; (5) kiểm tổng góc, tính dương, đơn vị và độ lớn kết quả. Đây là cách giúp một người tự học phát hiện lỗi mà chưa cần lời giải từ AI.

**Vận dụng:** Có người nhập ba cạnh 2,3,6 vào công thức Heron và ra căn của số âm. Lỗi nằm ở máy tính hay dữ kiện?

<details><summary>Đối chiếu</summary>Dữ kiện **không tạo thành tam giác** vì 2+3 không lớn hơn 6. Cần kiểm điều kiện tồn tại *trước* công thức; luyện bài luyện về bất đẳng thức tam giác.</details>

# Luyện tập

Em luyện từng chặng sau khi hiểu cách chọn định lí và điều kiện áp dụng. Các câu SGK đã học sẽ hiện lại ở phần này từ cùng ngân hàng; bài bổ sung có lời giải tự mở **Đối chiếu**. Đây là hoạt động giúp em tự sửa sai, không phải bài thi chấm năng lực độc lập.

## Ôn luyện theo nội dung

Có hai nhóm câu SGK đã học: **giá trị lượng giác của góc 0°–180°** (9 câu, gồm một bài tự luận) và **hệ thức lượng/giải tam giác** (9 câu, gồm một bài tự luận). Khi trang học được tích hợp, các câu sẽ hiển thị từ ngân hàng gốc; đề và lời giải không bị nhân bản.

## Bài tập bổ sung CĐ12 — tự tính và tự đối chiếu

<!-- CANONICAL_ITEM_ID: THPT-TOP12-P01 -->
### Bài luyện 1 · Dấu và hệ thức lượng
**Đề:** Góc tù α có `cosα=−5/13`. Tính sinα và tanα; giải thích việc chọn dấu.
<details><summary>Đối chiếu</summary>`sin²α=144/169`; vì góc tù nên sin dương, sin=12/13 và tan=−12/5. Nhớ xét dấu trước khi lấy căn. Nếu sai: mục 1,3,4 → bài luyện về dấu của sin và cosin.</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP12-P02 -->
### Bài luyện 2 · Hai góc bù
**Đề:** Tính chính xác `sin150°+cos120°` và giải thích quy luật được dùng.
<details><summary>Đối chiếu</summary>Sin giữ nguyên, cos đổi dấu khi chuyển về góc bù: `1/2−1/2=0`. Nếu sai: mục 2 → bài luyện về góc bù.</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP12-P03 -->
### Bài luyện 3 · Góc tù và định lí côsin
**Đề:** Trong tam giác ABC có `b=4, c=7, A=120°`. Tính a.
<details><summary>Đối chiếu</summary>`a²=16+49−2·4·7·(−1/2)=93`, nên `a=√93`. Góc tù khiến cạnh a lớn hơn cả b và c. Nếu sai: mục 5 → bài luyện về định lí cosin.</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP12-P04 -->
### Bài luyện 4 · Hai góc và một cạnh
**Đề:** Trong tam giác ABC có `A=30°, B=75°, a=6`. Tính b,c.
<details><summary>Đối chiếu</summary>`C=75°`, nên `b=c=6 sin75°/sin30°=12 sin75°=3(√6+√2)`. Nếu sai: mục 6–7 → bài luyện về hai góc và một cạnh.</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP12-P05 -->
### Bài luyện 5 · Ba cạnh và tam giác vuông
**Đề:** Ba cạnh 6,8,10 tạo thành tam giác ABC. Xác định góc đối diện cạnh 10, diện tích S, r và R.
<details><summary>Đối chiếu</summary>Vì `6²+8²=10²`, góc đối diện 10 là 90°. `S=24`, `p=12`, `r=24/12=2`, `R=6·8·10/(4·24)=5`. Nếu sai: mục 7,9–10 → bài luyện về Heron.</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP12-P06 -->
### Bài luyện 6 · Dữ kiện SSA có thể có hai nghiệm
**Đề:** Biết `A=30°, a=6, b=10`. Có bao nhiêu tam giác khác nhau thỏa dữ kiện? Nêu hai giá trị khả dĩ của B theo biểu thức arcsin.
<details><summary>Đối chiếu</summary>`sinB=(10 sin30°)/6=5/6`. Hai giá trị `B=arcsin(5/6)` và `B=180°−arcsin(5/6)` đều cho A+B<180° (vì arcsin(5/6)>30°); **hai tam giác**. Nếu chỉ lấy B nhọn: mục 8 → bài luyện về dữ kiện vô nghiệm.</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP12-P07 -->
### Bài luyện 7 · Dữ kiện SSA vô nghiệm
**Đề:** `A=30°, a=3, b=7`. Hãy kiểm chứng có tồn tại tam giác ABC hay không.
<details><summary>Đối chiếu</summary>`sinB=7·sin30°/3=7/6>1`, vô lý. **Không tồn tại tam giác**. Nếu bấm arcsin trực tiếp và bị lỗi: mục 8 kiểm điều kiện trước.</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP12-P08 -->
### Bài luyện 8 · Diện tích qua góc tù
**Đề:** `b=6, c=10, A=150°`. Tính diện tích S, nêu vì sao S dương.
<details><summary>Đối chiếu</summary>`S=(1/2)·6·10·sin150°=15`. Góc tù trong tam giác vẫn có sin dương; độ cao đến phần kéo dài của đáy vẫn là độ dài dương. Nếu sai: mục 9 → bài luyện cùng dạng.</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP12-P09 -->
### Bài luyện 9 · Heron và hai bán kính
**Đề:** Tam giác có cạnh 7,8,9. Tìm S,r,R.
<details><summary>Đối chiếu</summary>`p=12`, `S=√(12·5·4·3)=12√5`, `r=S/p=√5`, `R=7·8·9/(4·12√5)=21√5/10`. Nếu nhầm r/R: mục 10 → bài luyện về diện tích từ ba cạnh.</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP12-P10 -->
### Bài luyện 10 · Bài toán đo đạc
**Đề:** Hai điểm A,B cách nhau 80 m; cùng nhìn C sao cho `A=30°,B=45°` là các góc **trong** của tam giác ABC. Tìm BC và AC dưới dạng căn thức chính xác.
<details><summary>Đối chiếu</summary>`C=105°`; `sin105°=(√6+√2)/4`. Vì AB=c=80, `BC=a=80 sin30°/sin105°=40(√6−√2) m`; `AC=b=80 sin45°/sin105°=80(√3−1) m`. Nếu sai: mục 6,11 → bài luyện về đo đạc.</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP12-P11 -->
### Bài luyện 11 · Bất đẳng thức tam giác
**Đề:** Ba thanh dài 2 cm, 3 cm, 6 cm có ghép thành tam giác không? Giải thích vì sao chưa được dùng Heron.
<details><summary>Đối chiếu</summary>Không, vì `2+3=5<6`. Heron chỉ được áp dụng cho tam giác không suy biến; mục 12 → xem lại điều kiện đầu mục 5.</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP12-P12 -->
### Bài luyện 12 · Biên của công thức
**Đề:** Một người đặt `A=0°, b=5, c=7` và gọi đó là tam giác ABC không suy biến. Chỉ ra sự mâu thuẫn với điều kiện áp dụng định lí sin/côsin trong tam giác.
<details><summary>Đối chiếu</summary>Mọi góc trong tam giác không suy biến phải thuộc `(0°,180°)`; A=0° tạo cấu hình suy biến, dù có thể tính đại số `a=|7−5|=2` bằng biểu thức côsin. Không có tam giác không suy biến để dùng định lí sin hoặc Heron. Nếu sai: mục 5,6,12.</details>

## Tự luận có lập luận, tự đối chiếu rubric

<!-- CANONICAL_ITEM_ID: THPT-TOP12-W01 -->
### Tự luận 1 · Tam giác 5–12–13
**Đề:** Với tam giác có cạnh 5,12,13, hãy (a) xác định loại tam giác; (b) tính diện tích S; (c) tính r và R; (d) giải thích vì sao R lớn hơn r.
<details><summary>Đối chiếu và rubric 7 điểm</summary>(a) `5²+12²=13²`, tam giác vuông (1đ); (b) `S=5·12/2=30` (2đ); (c) `p=15`, `r=30/15=2`, `R=5·12·13/(4·30)=13/2` (3đ); (d) `13/2>2`, R thuộc đường tròn đi qua ba đỉnh, r thuộc đường tròn tiếp xúc ba cạnh (1đ). Nếu sai: mục 7,9,10 → bài luyện về Heron.</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP12-W02 -->
### Tự luận 2 · Định vị điểm từ hai hướng nhìn
**Đề:** AB dài 120 m; A,B đo được các góc trong `A=45°,B=75°` đến C. Tính C, BC, AC; nêu đơn vị và vì sao dùng định lí sin.
<details><summary>Đối chiếu và rubric 7 điểm</summary>`C=60°` (1đ); vì biết hai góc một cạnh, chọn sin (1đ); `BC=120 sin45°/sin60°=40√6 m` (2đ); `AC=120 sin75°/sin60°=60(√6+√2)/√3 m` (2đ); ghi đơn vị và kiểm hợp lí (1đ). Nếu sai: mục 6,7,11 → bài luyện về đo đạc.</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP12-W03 -->
### Tự luận 3 · Giải thích hiện tượng hai nghiệm
**Đề:** Trong tam giác ABC, biết `A=30°, a=8,b=10`. Chứng minh rằng dữ kiện cho hai tam giác khác nhau; mô tả cách tìm C cho mỗi tam giác.
<details><summary>Đối chiếu và rubric 7 điểm</summary>Viết `sinB=b sinA/a=5/8` (2đ); tìm hai giá trị `B₁=arcsin(5/8)`, `B₂=180°−arcsin(5/8)` (2đ); chỉ ra cả `A+B₁<180°` và `A+B₂<180°` vì `B₁>30°` (2đ); đặt `C_i=180°−A−B_i` với C_i>0 (1đ). Lưu ý arcsin là góc nhọn chuẩn. Nếu sai: mục 8 → bài luyện về hai tam giác có thể thỏa dữ kiện.</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP12-W04 -->
### Tự luận 4 · Tam giác có góc tù
**Đề:** Tam giác ABC có `b=5,c=6,A=120°`. Tính a, diện tích S và bán kính ngoại tiếp R; giải thích việc chọn dấu trong định lí côsin.
<details><summary>Đối chiếu và rubric 7 điểm</summary>`cos120°=−1/2` (1đ); `a²=25+36−60·(−1/2)=91`, `a=√91` (2đ); `S=(1/2)·5·6·sin120°=15√3/2` (2đ); `R=abc/(4S)=√91/√3=√273/3` (2đ). Nếu sai: mục 2,5,9–10 → bài luyện về góc tù và định lí cosin.</details>

# Tự kiểm tra

**Chế độ công khai hỗ trợ tự học:** `CLIENT_SELF_CHECK_NO_MASTERY`, **không phải** `TOPIC_READINESS` độc lập. Mỗi lượt chọn các câu public đã có trong ngân hàng, dùng lại **cùng item_id** ở placement khác; không tạo câu mới hoặc ngân hàng bí mật giả. Trong giao diện triển khai, nút **Final Submit** là ranh giới: *không hiển thị gợi ý, lời giải, đáp án, đúng/sai hoặc AI Tutor trước khi học sinh bấm nộp cuối*. Sau Final Submit có thể tự đối chiếu đáp án public, nhưng **không ghi Skill Mastery, không tự chấm rubric free-text**.

Một lượt ôn tự kiểm có 12 nhiệm vụ: dấu góc tù, miền xác định, cạnh/góc đối diện, hai nghiệm SSA, dữ kiện vô nghiệm, diện tích, bán kính và khoảng cách. Các câu lấy từ bài công khai đã học, nên đây là lượt **tự đối chiếu**, không phải đề thi độc lập.


<!-- AUTHORING ONLY · canonical SGK source-pointer roster; not learner-visible
- THPT-G10-B05-C01
- THPT-G10-B05-C02
- THPT-G10-B05-P01
- THPT-G10-B05-P02
- THPT-G10-B05-P03
- THPT-G10-B05-P04
- THPT-G10-B05-P05
- THPT-G10-B05-P06
- THPT-G10-CHIII-W05
- THPT-G10-B06-C01
- THPT-G10-B06-C02
- THPT-G10-B06-P01
- THPT-G10-B06-P02
- THPT-G10-B06-P03
- THPT-G10-B06-P04
- THPT-G10-B06-P05
- THPT-G10-B06-P06
- THPT-G10-CHIII-W06-ANCHOR
-->
<!-- AUTHORING ONLY · 12 public self-check placements; no new independent IDs
- THPT-G10-B05-C01
- THPT-G10-B05-P02
- THPT-G10-B05-P05
- THPT-TOP12-P01
- THPT-G10-B06-C01
- THPT-G10-B06-P03
- THPT-TOP12-P06
- THPT-TOP12-P07
- THPT-G10-B06-P04
- THPT-TOP12-P10
- THPT-TOP12-W02
- THPT-TOP12-W03
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
-->
