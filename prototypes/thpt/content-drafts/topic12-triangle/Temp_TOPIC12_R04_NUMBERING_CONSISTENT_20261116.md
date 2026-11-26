# Chuyên đề 12 — Hệ thức lượng trong tam giác và giải tam giác

<!-- AUTHORING_ONLY_NOT_FOR_STUDENT_VIEW: current one learner R04, immutable R02/R03 historic, Q18 source-locked separately; no website release. -->

# Kiến thức

## 1. Từ một góc đến hai con số có ý nghĩa

**Vì sao có thể đo độ dài không thể chạm tới?** Giả sử hai người đứng ở A và B trên bờ sông, biết khoảng cách AB và có thể ngắm một mốc C ở bờ bên kia. Không cần kéo thước qua sông: các góc nhìn và độ dài AB đã đủ để dựng nên một tam giác rồi suy ra các cạnh còn lại. Nhưng trước hết, ta phải hiểu sin và côsin của những góc lớn hơn 90° — điều mà tam giác vuông đơn lẻ không giải thích hết.

### 1.1. Giá trị lượng giác của góc 0°–180°
<!-- LESSON_ID: TOP12-M01; OUTCOME_ID: TOP12-O01 -->


Hãy tưởng tượng một kim dài đúng một đơn vị quay quanh gốc O từ trục ngang dương đến vị trí tạo góc \(\alpha\), với \(0^\circ\le\alpha\le180^\circ\). Đầu kim là điểm M nằm trên **nửa đường tròn phía trên**, nên nếu M có tọa độ \((x;y)\) thì \(x^2+y^2=1,\ y\ge0\). Ta gọi **côsin là hoành độ** \(\cos\alpha=x\), **sin là tung độ** \(\sin\alpha=y\). Định nghĩa này nối liền góc nhọn, góc vuông và góc tù, thay vì buộc ta học ba trường hợp rời rạc.

![Nửa đường tròn đơn vị: góc 120°, hoành độ âm và tung độ dương](../../visuals/THPT_G10_B05_SEMICIRCLE_120_D5_R01.svg)

**Cách đọc hình:** Đi từ O đến M theo bán kính 1. Tại góc \(120^\circ\), M nằm **bên trái** trục Oy và **bên trên** Ox, vì vậy \(\cos120^\circ=-\frac12\), \(\sin120^\circ=\frac{\sqrt3}2\). Nét đứt là hình chiếu tọa độ, *không phải cạnh của một tam giác cần tính*. Tại \(180^\circ\), điểm M nằm trên tia Ox âm: \(\sin180^\circ=0,\ \cos180^\circ=-1\).


> **ĐỊNH NGHĨA — Sin và côsin góc 0°–180°**
>
> Trên nửa đường tròn đơn vị \(0^\circ\le\alpha\le180^\circ\), điểm cuối \(M=(\cos\alpha;\sin\alpha)\). Côsin là hoành độ (có thể âm), sin là tung độ (không âm).

**Ví dụ**

**Đề bài:** Tìm tọa độ điểm trên nửa đường tròn đơn vị ứng với góc 135°.

**Lời giải:** Góc \(135^\circ\) bù với \(45^\circ\). Hai điểm tương ứng có cùng tung độ, hoành độ trái dấu, nên \(\cos135^\circ=-\frac{\sqrt2}2,\ \sin135^\circ=\frac{\sqrt2}2\). Điểm \(M=(-\frac{\sqrt2}2;\frac{\sqrt2}2)\), đúng ở góc phần tư II.

**Vận dụng** Không nhìn bảng, dự đoán dấu của \(\sin  150^{\circ}\) và \(\cos  150^{\circ}\) trước khi tính.

<details><summary>Đối chiếu</summary>\(150^\circ\) là góc tù: điểm trên nửa đường tròn phía trên bên trái, do đó sin dương và cos âm. Cụ thể \(\sin150^\circ=\frac12,\ \cos150^\circ=-\frac{\sqrt3}2\). Nếu viết cos dương, hãy quay lại hình chiếu M trên trục hoành rồi làm bài luyện về côsin góc tù.

**Kiểm lỗi**

Nếu em chọn \(\cos120^\circ\) dương, đọc hình nửa đường tròn ở **Kiến thức 1.1**: hoành độ bên trái trục Oy phải âm. Tự làm **Bài luyện 1** và **Bài luyện 3**.

</details>

### 1.2. Góc đặc biệt và góc bù
<!-- LESSON_ID: TOP12-M02; OUTCOME_ID: TOP12-O02 -->


Điểm trên nửa đường tròn tại hai góc \(\alpha\) và \(180^{\circ}-\alpha\) có **cùng chiều cao** nhưng hoành độ đối nhau. Bởi vậy:

\[
\sin(180^\circ-\alpha)=\sin\alpha,\qquad \cos(180^\circ-\alpha)=-\cos\alpha.
\]

| Góc | 0° | 30° | 45° | 60° | 90° | 120° | 135° | 150° | 180° |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| sin | 0 | \(\frac12\) | \(\frac{\sqrt2}2\) | \(\frac{\sqrt3}2\) | 1 | \(\frac{\sqrt3}2\) | \(\frac{\sqrt2}2\) | \(\frac12\) | 0 |
| cos | 1 | \(\frac{\sqrt3}2\) | \(\frac{\sqrt2}2\) | \(\frac12\) | 0 | \(-\frac12\) | \(-\frac{\sqrt2}2\) | \(-\frac{\sqrt3}2\) | −1 |

Hai góc **phụ nhau** trong \([0^\circ;90^\circ]\) cũng có quan hệ dễ đọc từ tam giác vuông: \(\sin(90^\circ-\alpha)=\cos\alpha\), \(\cos(90^\circ-\alpha)=\sin\alpha\). Chẳng hạn \(\sin30^\circ=\cos60^\circ=\frac12\). Với hai góc **bù nhau**, sin giữ nguyên còn cos đổi dấu. Kết hợp bảng dưới đây, em có thể tự suy ra giá trị tang và côtang mà không cần học thuộc hai bảng khác nhau.

| Góc | 0° | 30° | 45° | 60° | 90° | 120° | 135° | 150° | 180° |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| tan | 0 | \(\frac{\sqrt3}3\) | 1 | \(\sqrt3\) | Không xác định | \(-\sqrt3\) | −1 | \(-\frac{\sqrt3}3\) | 0 |
| cot | Không xác định | \(\sqrt3\) | 1 | \(\frac{\sqrt3}3\) | 0 | \(-\frac{\sqrt3}3\) | −1 | \(-\sqrt3\) | Không xác định |

Đây là **phần nối tiếp** bảng sin và cos phía trên, không phải một định nghĩa mới. Chẳng hạn \(\tan120^\circ=\frac{\sin120^\circ}{\cos120^\circ}=\frac{\frac{\sqrt3}2}{-\frac12}=-\sqrt3\). Phải ghi “không xác định” khi mẫu bằng 0; không thể thay bằng dấu vô cực.

Chẳng hạn, \(\sin135^\circ+\cos120^\circ=\frac{\sqrt2}2-\frac12=\frac{\sqrt2-1}2\). Ta nhận ra trước \(135^\circ=180^\circ-45^\circ,\ 120^\circ=180^\circ-60^\circ\) rồi mới tính, vì quy luật dấu mới là điều quan trọng.


> **TÍNH CHẤT — Góc bù và dấu**
>
> \(\sin(180^\circ-\alpha)=\sin\alpha,\quad\cos(180^\circ-\alpha)=-\cos\alpha\). Với góc tù, sin dương và cos âm; tại hai đầu mút \(0^\circ\) và \(180^\circ\), sin bằng 0.

**Ví dụ**

**Đề bài:** Tính \(\sin150^\circ-\cos120^\circ\) không dùng máy tính.

**Lời giải:** \(\sin150^\circ=\sin30^\circ=\frac12\) và \(\cos120^\circ=-\cos60^\circ=-\frac12\), nên kết quả bằng 1. Dấu âm của cos góc tù quyết định lời giải.

**Vận dụng** Tính \(\sin 150^{\circ}+\cos 120^{\circ}\) mà không dùng máy tính.

<details><summary>Đối chiếu</summary>\(\sin150^\circ=\frac12,\ \cos120^\circ=-\frac12\), tổng bằng **0**. Nếu nhầm dấu côsin, ôn lại cách đọc nửa đường tròn ở Kiến thức 1.1 và làm bài luyện về góc bù.

**Kiểm lỗi**

Nếu em nhầm sin của góc bù với cos, đọc **Kiến thức 1.2**. Tự đưa góc về góc nhọn trong **Bài luyện 5** và **Bài luyện 7** rồi kiểm dấu.

</details>

### 1.3. Tang và côtang
<!-- LESSON_ID: TOP12-M03; OUTCOME_ID: TOP12-O03 -->


Sin và cos là tọa độ nên đều xác định trên đoạn \(0^{\circ}\text{ đến }180^{\circ}\). Tang và côtang là **tỉ số tọa độ**:

\[
\tan\alpha=\frac{\sin\alpha}{\cos\alpha}\quad(\cos\alpha\ne0),\qquad \cot\alpha=\frac{\cos\alpha}{\sin\alpha}\quad(\sin\alpha\ne0).
\]

Với \(\alpha\) và \(180^\circ-\alpha\), khi các tỉ số cùng xác định thì \(\tan(180^\circ-\alpha)=-\tan\alpha\) và \(\cot(180^\circ-\alpha)=-\cot\alpha\). Đó là hệ quả trực tiếp của việc sin giữ dấu và cos đổi dấu, chứ không phải hai công thức độc lập phải học máy móc.

Vì vậy, \(\tan 90^{\circ}\) không xác định; \(\cot 0^{\circ}\) và \(\cot 180^{\circ}\) không xác định; ngược lại \(\tan 180^{\circ}=0\) *có* nghĩa. Đối với góc tù, sin dương và cos âm, nên tang/côtang khi xác định đều âm.

Chẳng hạn, góc tù \(\alpha\) có \(\tan\alpha=-2\). Vì \(\sin^2\alpha+\cos^2\alpha=1\) (từ đường tròn đơn vị), chia cho \(\cos^2\alpha\ne0\) được \(1+\tan^2\alpha=\frac1{\cos^2\alpha}\), suy ra \(\cos^2\alpha=\frac15\). Chọn cos âm vì góc tù, nên \(\cos\alpha=-\frac1{\sqrt5},\ \sin\alpha=\frac2{\sqrt5},\ \cot\alpha=-\frac12\).


> **ĐỊNH NGHĨA — Tang và côtang**
>
> \(\tan\alpha=\frac{\sin\alpha}{\cos\alpha}\) khi \(\cos\alpha\ne0\); \(\cot\alpha=\frac{\cos\alpha}{\sin\alpha}\) khi \(\sin\alpha\ne0\). Phải kiểm mẫu số khác 0 trước khi tính.

**Ví dụ**

**Đề bài:** Tính \(\tan120^\circ\) và \(\cot120^\circ\); có đại lượng nào không xác định?

**Lời giải:** \(\sin120^\circ=\frac{\sqrt3}2,\ \cos120^\circ=-\frac12\) đều khác 0; \(\tan120^\circ=-\sqrt3,\ \cot120^\circ=-\frac1{\sqrt3}=-\frac{\sqrt3}3\). Hai tỉ số đều xác định.

**Vận dụng** Tại \(\alpha=90^{\circ}\), đại lượng nào không xác định: \(\sin \alpha\), \(\cos \alpha\), \(\tan \alpha\), hay cả ba?

<details><summary>Đối chiếu</summary>Chỉ \(\tan\alpha\) không xác định vì mẫu \(\cos90^\circ=0\). Nếu nghĩ \(\cos90^\circ\) không xác định, quay lại định nghĩa hoành độ ở Kiến thức 1.1 và làm bài luyện về điều kiện của tang.

**Kiểm lỗi**

Nếu em nghĩ \(\tan90^\circ\) có giá trị, xem điều kiện mẫu cos khác 0 ở **Kiến thức 1.3**. Làm **Bài luyện 2** và **Bài luyện 8** trước khi dùng phép chia.

</details>

### 1.4. Hệ thức lượng giác và dấu
<!-- LESSON_ID: TOP12-M04; OUTCOME_ID: TOP12-O04 -->


Vì M luôn nằm trên đường tròn đơn vị nên \(x^{2}+y^{2}=1\), tức là:

\[
\sin^2\alpha+\cos^2\alpha=1.
\]

Chia hai vế cho \(\cos^2\alpha\) hoặc \(\sin^2\alpha\) chỉ khi mẫu khác 0 mới được các hệ thức \(1+\tan^2\alpha=\frac1{\cos^2\alpha}\) và \(1+\cot^2\alpha=\frac1{\sin^2\alpha}\). **Biết bình phương không tự cho biết dấu.** Với góc tù \(\alpha\) và \(\sin\alpha=\frac35\), ta có \(\cos^2\alpha=\frac{16}{25}\), rồi chọn \(\cos\alpha=-\frac45\), không phải \(+\frac45\).


> **TÍNH CHẤT — Hệ thức lượng giác**
>
> \(\sin^2\alpha+\cos^2\alpha=1\). Khi lấy căn từ bình phương phải chọn dấu theo góc phần tư; không mặc định cos dương với góc tù.

**Ví dụ**

**Đề bài:** Góc tù \(\alpha\) có \(\sin\alpha=\frac5{13}\). Tính \(\cos\alpha\) và \(\tan\alpha\).

**Lời giải:** \(\cos^2\alpha=1-\frac{25}{169}=\frac{144}{169}\). Vì \(\alpha\) tù nên \(\cos\alpha=-\frac{12}{13},\ \tan\alpha=-\frac5{12}\), không tự chọn dấu dương khi lấy căn.

**Vận dụng** Góc tù \(\alpha\) thỏa \(\cos\alpha=-\frac5{13}\). Hãy tính \(\sin\alpha\) và \(\tan\alpha\).

<details><summary>Đối chiếu</summary>\(\sin^2\alpha=1-\frac{25}{169}=\frac{144}{169}\); vì \(0^\circ<\alpha<180^\circ\) nên sin dương, ở đây \(\sin\alpha=\frac{12}{13}\). Do đó \(\tan\alpha=\frac{\frac{12}{13}}{-\frac5{13}}=-\frac{12}5\). Nếu chọn sin âm, hãy xem lại vị trí M ở Kiến thức 1.1 rồi làm bài luyện về dấu của sin và côsin.

**Kiểm lỗi**

Nếu em lấy sin âm của góc tù sau khi tính \(\sin^2\alpha\), quay lại **Kiến thức 1.4** và nửa đường tròn. Làm **Bài luyện 4** và **Bài luyện 19**, kiểm dấu trước khi lấy căn.

</details>

## 2. Tam giác bất kỳ: tìm một cạnh từ hai cạnh và góc

### 2.1. Định lí côsin
<!-- LESSON_ID: TOP12-M05; OUTCOME_ID: TOP12-O05 -->


Trong một **tam giác không suy biến** ABC, đặt \(a=BC,\ b=CA,\ c=AB\), lần lượt đối diện các góc A, B, C. Cả ba cạnh dương, \(a+b>c,\ b+c>a,\ c+a>b\); ba góc đều trong \((0^\circ;180^\circ)\) và có tổng \(180^\circ\).

Nếu đặt A ở gốc tọa độ, B tại \((c;0)\) và C tại \((b\cos A;b\sin A)\), độ dài BC bằng khoảng cách giữa hai điểm này. Bình phương hai tọa độ chênh lệch rồi dùng \(\sin^2 A+\cos^2 A=1\), ta được:

\[
a^2=(c-b\cos A)^2+(b\sin A)^2=b^2+c^2-2bc\cos A.
\]

**Đó là định lí côsin**. Khi A vuông, \(\cos A=0\), nó chính là Pitago. Khi A tù, cos A âm nên \(a^2>b^2+c^2\), phản ánh cạnh đối diện góc tù dài hơn.

![Tam giác ABC với b=6, c=8, A=60°: định lí côsin và diện tích](../../visuals/THPT_G10_B06_COSINE_AREA_TRIANGLE_D5_R01.svg)

**Cách đọc hình:** Góc \(60^\circ\) nằm ở A, *xen giữa* hai cạnh \(AB=c=8\) và \(AC=b=6\), không phải giữa b và a. Vì vậy \(a^2=6^2+8^2-2\cdot6\cdot8\cdot\cos60^\circ=52,\ a=2\sqrt{13}\). Hình còn đánh dấu vùng diện tích; đừng đọc chiều cao ngoài tam giác thành cạnh BC.


> **ĐỊNH LÝ — Côsin**
>
> Trong tam giác không suy biến, với a đối diện A: \(a^2=b^2+c^2-2bc\cos A\). Dùng khi biết hai cạnh kẹp góc hoặc ba cạnh để xác định một góc, và nhớ \(\cos A<0\) nếu A tù.

**Ví dụ**

**Đề bài:** Tam giác có \(b=7,\ c=9,\ A=60^\circ\). Tính a.

**Lời giải:** Dùng côsin vì biết hai cạnh kẹp góc: \(a^2=49+81-2\cdot7\cdot9\cos60^\circ=67\). Cạnh dương nên \(a=\sqrt{67}\).

**Vận dụng** Cho \(b=5, c=7, A=60^{\circ}\). Hãy tìm a và giải thích vì sao không dùng Pitago trực tiếp.

<details><summary>Đối chiếu</summary>\(a^2=25+49-2\cdot5\cdot7\cdot\frac12=39\), nên \(a=\sqrt{39}\). Pitago chỉ dùng trực tiếp khi góc xen giữa \(90^\circ\). Nếu đặt nhầm cạnh đối diện, quay lại sơ đồ \(a=BC,\ b=CA,\ c=AB\) rồi làm bài luyện về định lí côsin.

**Kiểm lỗi**

Nếu em dùng Pitago khi góc kẹp 120° hoặc gán sai cạnh đối diện, đọc **Kiến thức 2.1**, làm **Bài luyện 10** và **Bài luyện 21** bằng định lí côsin.

</details>

### 2.2. Định lí sin
<!-- LESSON_ID: TOP12-M06; OUTCOME_ID: TOP12-O06 -->


Diện tích cùng một tam giác có thể tính bằng \(S=\frac12bc\sin A=\frac12ca\sin B=\frac12ab\sin C\). Chia từng biểu thức cho \(\frac{abc}2\) (ba cạnh dương) thu được \(\frac{\sin A}a=\frac{\sin B}b=\frac{\sin C}c\). Định lí sin phát biểu đầy đủ:

\[
\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C}=2R,
\]

trong đó R là bán kính đường tròn **ngoại tiếp**. Trong tam giác không suy biến, các góc A, B, C thuộc \((0^\circ;180^\circ)\) nên sin của chúng dương.

Chẳng hạn, với \(A=30^\circ,\ B=45^\circ,\ a=5\), góc \(C=105^\circ\), rồi \(b=\frac{5\sin45^\circ}{\sin30^\circ}=5\sqrt2\). Mặt khác \(2R=\frac a{\sin A}=10\) nên \(R=5\). Ta dùng định lí sin vì có sẵn một cặp cạnh–góc đối diện và cần cặp còn lại.


> **ĐỊNH LÝ — Sin**
>
> Với a, b, c đối diện A, B, C trong cùng tam giác: \(\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C}=2R\). Ba góc của tam giác dương và tổng \(180^\circ\), R là bán kính ngoại tiếp.

**Ví dụ**

**Đề bài:** Tam giác có \(A=45^\circ,\ B=60^\circ,\ a=\sqrt2\). Tính b và R ngoại tiếp.

**Lời giải:** \(C=75^\circ\). Theo định lí sin \(b=\frac{a\sin60^\circ}{\sin45^\circ}=\sqrt3;\ 2R=\frac a{\sin45^\circ}=2\), nên \(R=1\).

**Vận dụng** \(A=30^{\circ}, B=60^{\circ}, a=4\). Tìm b và R.

<details><summary>Đối chiếu</summary>\(b=\frac{4\sin60^\circ}{\sin30^\circ}=4\sqrt3,\ 2R=\frac4{\sin30^\circ}=8\), nên \(R=4\). Nếu lấy \(\frac ba=\frac{\sin A}{\sin B}\), xem lại thứ tự đối diện rồi làm bài luyện về định lí sin.

**Kiểm lỗi**

Nếu em đảo cạnh và góc đối diện trong định lí sin, đọc **Kiến thức 2.2**, tự tìm góc thứ ba trong **Bài luyện 12** và **Bài luyện 14**, kiểm lại từng cặp cạnh–góc.

</details>

### 2.3. Chọn phương pháp giải tam giác
<!-- LESSON_ID: TOP12-M07; OUTCOME_ID: TOP12-O07 -->


| Đã biết | Tìm tiếp | Lý do chọn |
|---|---|---|
| **SSS:** ba cạnh | Góc | Dùng côsin: công thức nối đúng ba cạnh với góc đối diện |
| **SAS:** hai cạnh và góc xen giữa | Cạnh thứ ba | Dùng côsin trước, vì đã biết góc ở giữa hai cạnh |
| **ASA/AAS:** hai góc và một cạnh | Hai cạnh khác | Tính góc còn lại, rồi dùng sin |
| **SSA:** hai cạnh và góc **không xen giữa** | Số tam giác? | Phải kiểm tra *0, 1 hay 2 nghiệm* trước; không tự gán một tam giác |

Chẳng hạn, ba cạnh 7, 8, 9 tạo thành tam giác vì thỏa bất đẳng thức tam giác. Với \(a=7,\ b=8,\ c=9\), \(\cos C=\frac{a^2+b^2-c^2}{2ab}=\frac{49+64-81}{112}=\frac27\). Định lí côsin chọn C vì biết cạnh c đối diện góc cần tìm.


> **PHƯƠNG PHÁP — Chọn công cụ theo dữ kiện**
>
> SAS/SSS thường bắt đầu từ định lý côsin; ASA/AAS thường chọn định lý sin sau khi tính góc thứ ba. Trường hợp SSA phải kiểm có 0/1/2 tam giác trước khi kết luận.

**Ví dụ**

**Đề bài:** Tam giác có \(a=4,\ b=5,\ c=6\). Muốn tìm C chọn phương pháp nào và tính \(\cos C\).

**Lời giải:** Vì \(4+5>6\), tam giác tồn tại. Biết ba cạnh nên dùng côsin: \(\cos C=\frac{a^2+b^2-c^2}{2ab}=\frac{16+25-36}{40}=\frac18\).

**Vận dụng** Tam giác có ba cạnh 6,8,10: góc đối diện cạnh 10 bằng bao nhiêu? Diện tích bao nhiêu?

<details><summary>Đối chiếu</summary>\(6^2+8^2=10^2\), nên góc đối diện cạnh 10 là \(90^\circ\). Diện tích bằng \(\frac12\cdot6\cdot8=24\) đơn vị vuông. Nếu chỉ biết ba cạnh mà áp dụng ngay định lí sin, quay lại bảng SSS rồi làm bài luyện về góc vuông từ ba cạnh.

**Kiểm lỗi**

Nếu em biết ba cạnh mà bắt đầu từ định lí sin, đọc bảng chọn phương pháp ở **Kiến thức 2.3**. Làm **Bài luyện 17** và **Bài luyện 23**, kiểm SSS và Pitago đảo/côsin.

</details>

### 2.4. Trường hợp hai cạnh và một góc không xen giữa (SSA)
<!-- LESSON_ID: TOP12-M08; OUTCOME_ID: TOP12-O08 -->


Giả sử biết \(A=30^\circ,\ a=5,\ b=8\). Định lí sin cho \(\sin B=\frac{b\sin A}a=\frac45\). Nhưng trên khoảng \((0^\circ;180^\circ)\), **hai góc bù nhau có cùng sin**. Vì vậy \(B_1\approx53{,}13^\circ,\ B_2\approx126{,}87^\circ\). Cả hai có \(A+B<180^\circ\), nên tồn tại **hai tam giác** khác nhau; tương ứng \(C_1\approx96{,}87^\circ\) hoặc \(C_2\approx23{,}13^\circ\).

Trên máy tính, trước khi bấm \(\sin^{-1}(t)\) hay \(\arcsin t\), phải đặt chế độ **DEG** vì các góc ở đây đo bằng độ. Phím \(\sin^{-1}\) thường chỉ cho nghiệm chính trong \([-90^\circ;90^\circ]\), nhưng một tam giác còn có thể dùng góc bù \(180^\circ-B_1\); đó là lý do **không dừng ngay sau khi máy hiện một góc**. Giữ nhiều chữ số khi tính và chỉ làm tròn ở đáp số cuối.

Muốn giải SSA an toàn, tính \(t=\frac{b\sin A}a\) trước: nếu \(t>1\), không có tam giác; nếu \(0<t\le1\), xét cả \(B=\arcsin t\) lẫn \(180^\circ-\arcsin t\) và kiểm tra \(A+B<180^\circ\) từng trường hợp. Với \(t=1\) hai giá trị B trùng nhau. Với A là góc trong và các cạnh dương, số nghiệm phụ thuộc cả góc A và điều kiện tổng góc; không kết luận hai nghiệm chỉ vì \(t<1\).


> **KIẾN THỨC CẦN GHI NHỚ — Trường hợp hai nghiệm SSA**
>
> Biết A, a đối diện A, b đối diện B: \(t=\frac{b\sin A}a\). Nếu \(t\notin(0;1]\), vô nghiệm; nếu \(0<t\le1\), xét cả \(B_1=\arcsin t\) và \(B_2=180^\circ-B_1\) (trùng nhau khi \(t=1\)), **chỉ giữ** nghiệm có \(A+B<180^\circ\). Không mặc định luôn có hai nghiệm.

**Ví dụ**

**Đề bài:** Dữ kiện SSA: \(A=30^\circ,\ a=8,\ b=6\). Có bao nhiêu tam giác?

**Lời giải:** \(\sin B=\frac38\). \(B_1=\arcsin(\frac38)<30^\circ\) hợp lệ; \(B_2=180^\circ-B_1>150^\circ\) khiến \(A+B_2>180^\circ\), phải loại. Vậy chỉ một tam giác.

**Vận dụng** \(A=30^{\circ}, a=4, b=10\). Tồn tại tam giác nào thỏa dữ kiện này không?

<details><summary>Đối chiếu</summary>\(\sin B=\frac{10\sin30^\circ}4=\frac54>1\) là vô lý, nên **không tồn tại tam giác**. Không dùng máy tính \(\arcsin(1{,}25)\); hãy kiểm điều kiện đầu vào. Ôn Định lí sin ở Kiến thức 2.2, đọc lại Kiến thức 2.4 rồi làm Bài luyện 25 về dữ kiện vô nghiệm.

**Kiểm lỗi**

Nếu em dừng ở một góc do arcsin trả về hoặc bỏ kiểm điều kiện, đọc **Kiến thức 2.4**. Làm **Bài luyện 24** (hai nghiệm) và **Bài luyện 25** (vô nghiệm), xét cả góc bù và tổng A+B nhỏ hơn 180°.

</details>

## 3. Diện tích, các bán kính và đo đạc thực tế

### 3.1. Diện tích theo góc xen giữa
<!-- LESSON_ID: TOP12-M09; OUTCOME_ID: TOP12-O09 -->


Cạnh c làm đáy; độ cao tương ứng bằng \(b \sin A\) nếu A nhọn, và vẫn có cùng độ dài dương nếu A tù (chân đường cao nằm trên phần kéo dài). Do đó:

\[
S=\frac12bc\sin A=\frac12ca\sin B=\frac12ab\sin C.
\]

Phải dùng **góc xen giữa chính hai cạnh đang nhân**. Với \(b=8,\ c=5,\ A=30^\circ\), \(S=\frac12\cdot8\cdot5\cdot\frac12=10\). Trong tam giác, \(\sin A>0\); diện tích luôn dương.


> **CÔNG THỨC — Diện tích theo góc kẹp**
>
> \(S=\frac12bc\sin A=\frac12ca\sin B=\frac12ab\sin C\). Sử dụng đúng góc xen giữa hai cạnh; sin góc trong tam giác dương.

**Ví dụ**

**Đề bài:** Tam giác có \(b=5,\ c=7,\ A=120^\circ\). Tính diện tích.

**Lời giải:** \(\sin120^\circ=\frac{\sqrt3}2>0;\ S=\frac12\cdot5\cdot7\sin120^\circ=\frac{35\sqrt3}4\). Góc tù vẫn cho diện tích dương.

**Vận dụng** Cho \(b=6,c=8,A=60^{\circ}\). Tính diện tích; quan sát lại hình góc xen giữa ở Kiến thức 2.1 (Định lí côsin) để xác định đúng hai cạnh kề góc A.

<details><summary>Đối chiếu</summary>\(S=\frac12\cdot6\cdot8\sin60^\circ=12\sqrt3\) đơn vị diện tích. Nếu ra \(24\sqrt3\), em đã quên hệ số \(\frac12\). Luyện bài luyện cùng dạng.

**Kiểm lỗi**

Nếu em quên hệ số một phần hai hoặc cho rằng sin của góc tù âm, đọc **Kiến thức 3.1**. Giải **Bài luyện 11** và **Bài luyện 26**, chọn đúng góc xen giữa hai cạnh.

</details>

### 3.2. Công thức Heron và các bán kính
<!-- LESSON_ID: TOP12-M10; OUTCOME_ID: TOP12-O10 -->


Không biết góc cũng có thể tính diện tích: đặt nửa chu vi \(p=\frac{a+b+c}2\); với tam giác không suy biến,

\[
S=\sqrt{p(p-a)(p-b)(p-c)}.
\]

Nếu r là bán kính đường tròn **nội tiếp** và R là bán kính đường tròn **ngoại tiếp**, thì:

\[
S=pr,\qquad S=\frac{abc}{4R}.
\]

Công thức \(S=pr\) đến từ việc chia tam giác thành ba tam giác nhỏ chung chiều cao r (đường vuông góc từ tâm nội tiếp đến ba cạnh). Công thức \(S=\frac{abc}{4R}\) kết hợp diện tích qua sin với định lí sin. **Không hoán đổi r và R**, và trước khi dùng Heron phải kiểm \(a+b>c,\ b+c>a,\ c+a>b\).

Chẳng hạn, tam giác 13–14–15 có \(p=21,\ S=\sqrt{21\cdot8\cdot7\cdot6}=84,\ r=\frac{84}{21}=4,\ R=\frac{13\cdot14\cdot15}{4\cdot84}=\frac{65}8\).


> **CÔNG THỨC — Heron và bán kính**
>
> Với \(p=\frac{a+b+c}2\), tam giác không suy biến: \(S=\sqrt{p(p-a)(p-b)(p-c)},\ r=\frac Sp,\ R=\frac{abc}{4S}\). Kiểm bất đẳng thức tam giác và \(S>0\).

**Ví dụ**

**Đề bài:** Tam giác có ba cạnh 10,10,12. Tính S,r,R.

**Lời giải:** \(p=16;\ S=\sqrt{16\cdot6\cdot6\cdot4}=48\). Bán kính nội tiếp \(r=\frac{48}{16}=3\); bán kính ngoại tiếp \(R=\frac{10\cdot10\cdot12}{4\cdot48}=\frac{25}4\).

**Vận dụng** Với ba cạnh 5,5,6, tính S và r.

<details><summary>Đối chiếu</summary>\(p=8;\ S=\sqrt{8\cdot3\cdot3\cdot2}=12;\ r=\frac Sp=\frac32\). Nếu dùng \(\frac{abc}{4S}\) sẽ tìm **R**, không phải r. Luyện bài luyện về Heron.

**Kiểm lỗi**

Nếu em nhầm r nội tiếp với R ngoại tiếp, đọc **Kiến thức 3.2**. Làm **Bài luyện 13** và **Bài luyện 27** bằng Heron rồi đối chiếu \(r=\frac Sp\) và \(R=\frac{abc}{4S}\).

</details>

### 3.3. Giải tam giác trong đo đạc
<!-- LESSON_ID: TOP12-M11; OUTCOME_ID: TOP12-O11 -->


Khi khảo sát, đầu tiên hãy **vẽ lại điểm quan sát** và đánh dấu cạnh thực sự đo được. Với hai vị trí A,B cách nhau 100 m, cùng ngắm C và đo góc trong \(A=30^{\circ}\), \(B=60^{\circ}\), ta suy \(C=90^{\circ}\). Vì AB đối diện C, đây là cạnh huyền. Định lí sin cho:

\[
BC=\frac{100\sin30^\circ}{\sin90^\circ}=50\,\mathrm m,\qquad AC=\frac{100\sin60^\circ}{\sin90^\circ}=50\sqrt3\,\mathrm m.
\]

Tại sao không dùng góc 30° thay cho góc C khi chia AB? Vì **AB đối diện C**, không đối diện A. Kết quả cần ghi đơn vị mét và nên so sánh hợp lí với đoạn mốc ban đầu.


> **PHƯƠNG PHÁP — Đo đạc tam giác**
>
> Chọn hai vị trí quan sát A, B có khoảng cách AB đã biết và đo góc tới C. Tính \(C=180^\circ-A-B>0\) rồi suy cạnh bằng định lí sin, ghi đơn vị, không biến chiều dài hình phác thảo thành dữ kiện.

**Ví dụ**

**Đề bài:** Hai trạm A,B cách nhau 60 m, góc A=45°, B=60° khi ngắm C. Tìm BC.

**Lời giải:** \(C=180^\circ-45^\circ-60^\circ=75^\circ\). Vì AB đối diện C, còn BC đối diện A, định lí sin cho \(BC=\frac{60\sin45^\circ}{\sin75^\circ}\). Dùng máy ở chế độ DEG, \(\sin45^\circ\approx0{,}707107,\ \sin75^\circ\approx0{,}965926\), suy ra \(BC\approx43{,}92\,\mathrm m\). Nếu muốn giá trị chính xác, dùng công thức cộng \(\sin(45^\circ+30^\circ)=\sin45^\circ\cos30^\circ+\cos45^\circ\sin30^\circ=\frac{\sqrt6+\sqrt2}4\). Thay vào, \(BC=\frac{120}{\sqrt3+1}=60(\sqrt3-1)\,\mathrm m\).

**Vận dụng** Nếu \(AB=80\,\mathrm m\), góc \(A=B=45^\circ\), độ dài BC và AC có bằng nhau không? Bằng bao nhiêu?

<details><summary>Đối chiếu</summary>\(C=90^\circ,\ BC=\frac{80\sin45^\circ}{\sin90^\circ}=40\sqrt2\,\mathrm m,\ AC=40\sqrt2\,\mathrm m\). Bằng nhau vì \(A=B\). Nếu ra một cạnh khác, kiểm lại quan hệ đối diện trước khi bấm máy. Luyện bài luyện về đo đạc.

**Kiểm lỗi**

Nếu em ghép AB với góc A thay vì góc đối diện C, đọc **Kiến thức 3.3**. Vẽ lại vị trí quan sát rồi làm **Bài luyện 16** và **Bài luyện 28**, luôn ghi đơn vị chiều dài.

</details>

### 3.4. Kiểm tra điều kiện và kết quả
<!-- LESSON_ID: TOP12-M12; OUTCOME_ID: TOP12-O12 -->


Một phép tính đúng trên máy không cứu được dữ kiện sai: ba thanh dài 2,3,6 không tạo được tam giác (\(2+3<6\)); hai góc có tổng 190° không thể là góc trong của tam giác; trong bài toán thực tế, nhầm góc giữa đường ngắm với góc bên ngoài sẽ làm ra khoảng cách sai. Khi dùng máy tính lượng giác, kiểm chế độ **DEG (độ)** nếu đề dùng 30°,60°; muốn dùng radian phải đổi đơn vị nhất quán.

Thực hành một quy trình ổn định: (1) gọi tên cạnh/góc đối diện; (2) kiểm dữ kiện và bất đẳng thức tam giác; (3) quyết định SSS/SAS/ASA–AAS/SSA; (4) ghi điều kiện áp dụng trước khi thế; (5) kiểm tổng góc, tính dương, đơn vị và độ lớn kết quả. Đây là cách giúp một người tự học phát hiện lỗi mà chưa cần lời giải từ AI.


> **KIẾN THỨC CẦN GHI NHỚ — Điều kiện và kiểm nghiệm**
>
> Mỗi lời giải phải kiểm tam giác không suy biến, ba cạnh thỏa bất đẳng thức, tổng góc 180°, miền của căn, mẫu số và số nghiệm SSA. Giá trị lấy từ máy không thay thế điều kiện mô hình.

**Ví dụ**

**Đề bài:** Có thể dùng Heron cho ba cạnh 4,6,11 cm không?

**Lời giải:** Không: \(4+6=10<11\), không tồn tại tam giác không suy biến. Phải kiểm bất đẳng thức tam giác trước khi dùng Heron.

**Vận dụng** Có người nhập ba cạnh 2,3,6 vào công thức Heron và ra căn của số âm. Lỗi nằm ở máy tính hay dữ kiện?

<details><summary>Đối chiếu</summary>Dữ kiện **không tạo thành tam giác** vì \(2+3<6\). Cần kiểm điều kiện tồn tại *trước* công thức; luyện bài luyện về bất đẳng thức tam giác.

**Kiểm lỗi**

Nếu căn Heron báo lỗi, đừng bấm lại máy ngay: kiểm bất đẳng thức tam giác và góc trong ở **Kiến thức 3.4**. Làm **Bài luyện 29** và **Bài luyện 30**.

</details>

<!-- AUTHORING_ONLY_NOT_FOR_STUDENT_VIEW: historic R02 source/SVG evidence remains in author receipt, not learner content. -->

# Luyện tập

Tự làm từng bài và ghi rõ lí do chọn định lí cùng điều kiện áp dụng trước khi mở **Lời giải**. Nếu kết quả chưa đúng, hãy tìm bước sai đầu tiên rồi tự làm lại một bài cùng dạng.

## 1. Góc và hệ thức lượng trong tam giác

Bắt đầu từ dấu sin, cos và điều kiện của tan, cot; sau đó luyện giải tam giác, diện tích và đo đạc. Với bài tự luận, tự làm trước rồi so từng bước trong **Lời giải và rubric**.

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B05-C01; SOURCE_BLOB: 6320aeaa89bd51c514b07461e01fad5e3aca833f; OUTCOME: TOP12-O01; SINGLE_ITEM_ID -->

**Bài luyện 1.**

**Đề:** Giá trị của \(\cos120^\circ\) là bao nhiêu?

**Lựa chọn:** A. \(\tfrac12\) | B. \(-\tfrac12\) | C. \(\tfrac{\sqrt3}{2}\) | D. \(-\tfrac{\sqrt3}{2}\)

<details><summary>Lời giải</summary>

**Đáp án:** B

**Lời giải:** \(\cos120^\circ=\cos(180^\circ-60^\circ)=-\cos60^\circ=-\tfrac12\).

**Nếu làm sai:** Nếu mất dấu, vẽ nửa đường tròn và xem hoành/tung theo góc.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B05-C02; SOURCE_BLOB: 6320aeaa89bd51c514b07461e01fad5e3aca833f; OUTCOME: TOP12-O03; SINGLE_ITEM_ID -->

**Bài luyện 2.**

**Đề:** Trong đoạn từ 0° đến 180°, biểu thức nào sau đây **không xác định**?

**Lựa chọn:** A. \(\sin90^\circ\) | B. \(\cos180^\circ\) | C. \(\tan90^\circ\) | D. \(\tan180^\circ\)

<details><summary>Lời giải</summary>

**Đáp án:** C

**Lời giải:** Tại 90°, cos=0 nên tan không xác định. Tan180°=0 vì cos180°=−1 khác 0.

**Nếu làm sai:** Trước phép chia sin/cos, kiểm mẫu khác 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B05-P01; SOURCE_BLOB: 6320aeaa89bd51c514b07461e01fad5e3aca833f; OUTCOME: TOP12-O04; SINGLE_ITEM_ID -->

**Bài luyện 3.**

**Đề:** Cặp giá trị \((\sin150^\circ,\cos150^\circ)\) bằng bao nhiêu?

**Lựa chọn:** A. \((\tfrac12,\tfrac{\sqrt3}{2})\) | B. \((\tfrac12,-\tfrac{\sqrt3}{2})\) | C. \((-\tfrac12,-\tfrac{\sqrt3}{2})\) | D. \((\tfrac{\sqrt3}{2},-\tfrac12)\)

<details><summary>Lời giải</summary>

**Đáp án:** B

**Lời giải:** \(\sin150^\circ=\sin30^\circ=\tfrac12\); \(\cos150^\circ=-\cos30^\circ=-\tfrac{\sqrt3}{2}\).

**Nếu làm sai:** Từ sin²+cos²=1, chọn dấu căn theo vị trí góc; hai góc bù có sin bằng nhau, cos đối dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B05-P02; SOURCE_BLOB: 6320aeaa89bd51c514b07461e01fad5e3aca833f; OUTCOME: TOP12-O04; SINGLE_ITEM_ID -->

**Bài luyện 4.**

**Đề:** Cho góc tù α với \(\cos\alpha=-3/5\). Tính \(\sin\alpha\) và \(\tan\alpha\).

<details><summary>Lời giải</summary>

**Đáp án:** \(\sin\alpha=4/5,\ \tan\alpha=-4/3\).

**Lời giải:** \(\sin^2\alpha=1-9/25=16/25\). Góc tù có sin dương nên sin=4/5; tan=(4/5)/(−3/5)=−4/3.

**Nếu làm sai:** Từ sin²+cos²=1, chọn dấu căn theo vị trí góc; hai góc bù có sin bằng nhau, cos đối dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B05-P03; SOURCE_BLOB: 6320aeaa89bd51c514b07461e01fad5e3aca833f; OUTCOME: TOP12-O02; SINGLE_ITEM_ID -->

**Bài luyện 5.**

**Đề:** Tính chính xác \(T=\sin135^\circ+\cos120^\circ\).

<details><summary>Lời giải</summary>

**Đáp án:** \(T=(\sqrt2-1)/2\).

**Lời giải:** \(\sin135^\circ=\sin45^\circ=\sqrt2/2\), \(\cos120^\circ=-1/2\). Cộng lại được \((\sqrt2-1)/2\).

**Nếu làm sai:** Liên hệ góc cần tính với góc nhọn đặc biệt và kiểm dấu sau khi lấy giá trị.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B05-P04; SOURCE_BLOB: 6320aeaa89bd51c514b07461e01fad5e3aca833f; OUTCOME: TOP12-O04; SINGLE_ITEM_ID -->

**Bài luyện 6.**

**Đề:** Phát biểu nào đúng với **mọi** \(0^\circ\le\alpha\le180^\circ\)?

**Lựa chọn:** A. \(\tan\alpha\cdot\cot\alpha=1\) | B. \(\sin^2\alpha+\cos^2\alpha=1\) | C. \(\cos\alpha\ge0\) | D. \(\cot\alpha\) xác định với mọi α

<details><summary>Lời giải</summary>

**Đáp án:** B

**Lời giải:** \(\sin^2\alpha+\cos^2\alpha=1\) đúng trên toàn đoạn. Câu A không có nghĩa tại 0°,90°,180°; cos âm với góc tù; cot0° và cot180° không xác định.

**Nếu làm sai:** Từ sin²+cos²=1, chọn dấu căn theo vị trí góc; hai góc bù có sin bằng nhau, cos đối dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B05-P05; SOURCE_BLOB: 6320aeaa89bd51c514b07461e01fad5e3aca833f; OUTCOME: TOP12-O02; SINGLE_ITEM_ID -->

**Bài luyện 7.**

**Đề:** Trong \([0^\circ,180^\circ]\), có những góc nào thỏa \(\sin\alpha=\sqrt3/2\)?

**Lựa chọn:** A. Chỉ 60° | B. Chỉ 120° | C. 60° và 120° | D. 30° và 150°

<details><summary>Lời giải</summary>

**Đáp án:** C

**Lời giải:** \(\sin60^\circ=\sqrt3/2\); góc bù 120° có cùng sin. Trong đoạn đã cho chỉ có hai góc đó.

**Nếu làm sai:** Liên hệ góc cần tính với góc nhọn đặc biệt và kiểm dấu sau khi lấy giá trị.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B05-P06; SOURCE_BLOB: 6320aeaa89bd51c514b07461e01fad5e3aca833f; OUTCOME: TOP12-O03; SINGLE_ITEM_ID -->

**Bài luyện 8.**

**Đề:** Góc tù α thỏa \(\tan\alpha=-2\). Tính \(\sin\alpha,\cos\alpha,\cot\alpha\).

<details><summary>Lời giải</summary>

**Đáp án:** \(\sin\alpha=2/\sqrt5,\ \cos\alpha=-1/\sqrt5,\ \cot\alpha=-1/2\).

**Lời giải:** \(\cos^2\alpha=1/5\); góc tù nên cos=−1/√5. Sin=tan·cos=2/√5; cot=1/tan=−1/2.

**Nếu làm sai:** Trước phép chia sin/cos, kiểm mẫu khác 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-CHIII-W05; SOURCE_BLOB: 569466519ee9a653fa3bcdf874e06619424fbf7b; ORIGINAL_R01_REVIEWED_BLOB: 6320aeaa89bd51c514b07461e01fad5e3aca833f; OUTCOME: TOP12-O04; SINGLE_ITEM_ID -->

**Bài luyện 9.**

**Đề:** Một vòng quay có tâm O cao hơn mặt đất 12 m, bán kính 10 m. Xét vị trí M được xác định bởi góc 150° so với tia Ox hướng ngang sang phải, theo chiều dương, trên nửa đường tròn phía trên O. (a) Tính tọa độ của M trong hệ trục Oxy (mét). (b) Tìm độ cao M so với mặt đất. (c) Giải thích dấu của cos150° bằng hình học, không chỉ thuộc bảng số.

<details><summary>Lời giải và rubric</summary>

**Lời giải:** (a) \(x_M=10\cos150^\circ=-5\sqrt3\) (m), \(y_M=10\sin150^\circ=5\) (m). (b) Độ cao M là \(12+5=17\) m. (c) Góc 150° nằm phía trái trục Oy nên hình chiếu xuống trục Ox âm, từ đó cos150°<0.

**Rubric /7:** (1) Nêu đúng quy chiếu tâm O, bán kính và góc (1đ); (2) viết đúng \(x=R\cos\alpha\), \(y=R\sin\alpha\) với \(\alpha=150^\circ\) (2đ); (3) thay giá trị góc bù tính đủ tọa độ (2đ); (4) tính độ cao mặt đất 17 m (1đ); (5) giải thích hình học dấu cos (1đ). Không trừ điểm hai lần cho cùng một lỗi số ở những bước phụ thuộc khi cách làm và lập luận đúng.

**Nếu làm sai:** Từ sin²+cos²=1, chọn dấu căn theo vị trí góc; hai góc bù có sin bằng nhau, cos đối dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B06-C01; SOURCE_BLOB: 6320aeaa89bd51c514b07461e01fad5e3aca833f; OUTCOME: TOP12-O05; SINGLE_ITEM_ID -->

**Bài luyện 10.**

**Đề:** Trong tam giác ABC có \(b=5,c=7,A=60^\circ\). Tính \(a\).

**Lựa chọn:** A. \(\sqrt{39}\) | B. \(\sqrt{74}\) | C. \(\sqrt{109}\) | D. \(\sqrt{14}\)

<details><summary>Lời giải</summary>

**Đáp án:** A

**Lời giải:** \(a^2=25+49-2\cdot5\cdot7\cdot\tfrac12=39\), a=√39.

**Nếu làm sai:** Đặt a đối diện A; nếu biết hai cạnh kẹp góc, dùng côsin rồi kiểm a>0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B06-C02; SOURCE_BLOB: 6320aeaa89bd51c514b07461e01fad5e3aca833f; OUTCOME: TOP12-O09; SINGLE_ITEM_ID -->

**Bài luyện 11.**

**Đề:** Tam giác có \(b=8,c=5,A=30^\circ\). Diện tích \(S\) bằng bao nhiêu?

**Lựa chọn:** A. 20 | B. 10 | C. 40 | D. 5

<details><summary>Lời giải</summary>

**Đáp án:** B

**Lời giải:** \(S=\tfrac12\cdot8\cdot5\cdot\sin30^\circ=10\).

**Nếu làm sai:** Diện tích dùng góc giữa đúng hai cạnh và hệ số 1/2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B06-P01; SOURCE_BLOB: 6320aeaa89bd51c514b07461e01fad5e3aca833f; OUTCOME: TOP12-O06; SINGLE_ITEM_ID -->

**Bài luyện 12.**

**Đề:** Cho tam giác ABC có \(A=30^\circ,B=60^\circ,a=4\). Tính \(b\) và \(R\).

<details><summary>Lời giải</summary>

**Đáp án:** \(b=4\sqrt3,\ R=4\).

**Lời giải:** \(b=4(\sqrt3/2)/(1/2)=4\sqrt3\); \(2R=4/(1/2)=8\), R=4.

**Nếu làm sai:** Dùng định lí sin theo cặp cạnh và góc đối diện, không hoán đổi tử/mẫu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B06-P02; SOURCE_BLOB: 6320aeaa89bd51c514b07461e01fad5e3aca833f; OUTCOME: TOP12-O10; SINGLE_ITEM_ID -->

**Bài luyện 13.**

**Đề:** Tam giác cân có các cạnh 5,5,6. Tính \(S\) và bán kính nội tiếp \(r\).

<details><summary>Lời giải</summary>

**Đáp án:** \(S=12,\ r=3/2\).

**Lời giải:** \(p=8\); \(S=\sqrt{8\cdot3\cdot3\cdot2}=12\); \(r=S/p=3/2\).

**Nếu làm sai:** Trước Heron kiểm tam giác hợp lệ; tính p, rồi r=S/p và R=abc/(4S).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B06-P03; SOURCE_BLOB: 6320aeaa89bd51c514b07461e01fad5e3aca833f; OUTCOME: TOP12-O06; SINGLE_ITEM_ID -->

**Bài luyện 14.**

**Đề:** Tam giác ABC có \(A=30^\circ,B=60^\circ,c=8\). Tính \(a,b\).

<details><summary>Lời giải</summary>

**Đáp án:** \(a=4,\ b=4\sqrt3\).

**Lời giải:** \(C=90^\circ\), c/sinC=8. Vậy \(a=8\sin30^\circ=4\), \(b=8\sin60^\circ=4\sqrt3\).

**Nếu làm sai:** Dùng định lí sin theo cặp cạnh và góc đối diện, không hoán đổi tử/mẫu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B06-P04; SOURCE_BLOB: 6320aeaa89bd51c514b07461e01fad5e3aca833f; OUTCOME: TOP12-O10; SINGLE_ITEM_ID -->

**Bài luyện 15.**

**Đề:** Tam giác có ba cạnh \(a=7,b=8,c=9\). Tính \(\cos C\) và diện tích \(S\).

<details><summary>Lời giải</summary>

**Đáp án:** \(\cos C=2/7,\ S=12\sqrt5\).

**Lời giải:** \(\cos C=(a^2+b^2-c^2)/(2ab)=(49+64-81)/(112)=2/7\). p=12; \(S=\sqrt{12\cdot5\cdot4\cdot3}=12\sqrt5\).

**Nếu làm sai:** Trước Heron kiểm tam giác hợp lệ; tính p, rồi r=S/p và R=abc/(4S).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B06-P05; SOURCE_BLOB: 6320aeaa89bd51c514b07461e01fad5e3aca833f; OUTCOME: TOP12-O11; SINGLE_ITEM_ID -->

**Bài luyện 16.**

**Đề:** Đo khoảng cách qua một khu vực khó tiếp cận: người khảo sát đứng ở A và B cách nhau 100 m, ngắm điểm C sao cho \(\angle A=30^\circ,\angle B=60^\circ\) trong tam giác ABC. Tính BC và AC.

<details><summary>Lời giải</summary>

**Đáp án:** \(BC=50\text{ m},\ AC=50\sqrt3\text{ m}\).

**Lời giải:** \(C=90^\circ\), \(AB=100\) là cạnh huyền. \(BC=AB\sin A=50\) m, \(AC=AB\sin B=50\sqrt3\) m.

**Nếu làm sai:** Vẽ lại điểm quan sát, đánh dấu góc trong và cạnh đo được, ghi đơn vị.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-B06-P06; SOURCE_BLOB: 6320aeaa89bd51c514b07461e01fad5e3aca833f; OUTCOME: TOP12-O07; SINGLE_ITEM_ID -->

**Bài luyện 17.**

**Đề:** Tam giác ABC có \(a=\sqrt{61},b=5,c=6\). Hãy xác định góc A và diện tích \(S\).

<details><summary>Lời giải</summary>

**Đáp án:** \(A=90^\circ,\ S=15\).

**Lời giải:** \(a^2=61=b^2+c^2=25+36\) nên \(\cos A=0\), A=90°. \(S=\tfrac12 bc=15\).

**Nếu làm sai:** Ba cạnh cần thỏa bất đẳng thức tam giác; chọn định lí côsin khi tìm góc.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G10-CHIII-W06-ANCHOR; SOURCE_BLOB: 6320aeaa89bd51c514b07461e01fad5e3aca833f; OUTCOME: TOP12-O11; SINGLE_ITEM_ID -->

**Bài luyện 18.**

**Đề:** Một mảnh đất hình tam giác ABC có AB=9 m, AC=10 m và BC=17 m. (a) Chứng minh ba cạnh tạo thành tam giác. Tính \(\cos A\) và cho biết góc A nhọn hay tù. (b) Tính diện tích S bằng công thức Heron. (c) Tính bán kính đường tròn nội tiếp r và ngoại tiếp R. (d) Nếu trải cỏ toàn bộ mảnh đất, giá 120.000 đồng/m², tính chi phí chưa gồm công.

<details><summary>Lời giải và rubric</summary>

**Lời giải:** (a) Vì \(9+10=19>17\) nên ba độ dài lập thành một tam giác. Với a=17,b=10,c=9, \(\cos A=(b^2+c^2-a^2)/(2bc)=(100+81-289)/(180)=-3/5\), nên A **tù**. (b) \(p=18\), \(S=\sqrt{18\cdot(18-17)\cdot(18-10)\cdot(18-9)}=\sqrt{18\cdot1\cdot8\cdot9}=36\text{ m}^2\). (c) \(r=S/p=36/18=2\text{ m}\), \(R=abc/(4S)=17\cdot10\cdot9/(4\cdot36)=85/8\text{ m}\). (d) Chi phí \(36\cdot120000=4\,320\,000\) đồng.

**Rubric /7:** kiểm tra bất đẳng thức tam giác (1đ); sử dụng đúng định lí côsin và tính cos A (1.5đ); suy góc A tù (0.5đ); tính p và S đúng kèm m² (2đ); suy r và R đúng đơn vị (1.5đ); chi phí cỏ đúng (0.5đ). Em tự kiểm lại từng tiêu chí của lời giải để tìm phần cần ôn thêm.

**Nếu làm sai:** Vẽ lại điểm quan sát, đánh dấu góc trong và cạnh đo được, ghi đơn vị.

</details>

## 2. Vận dụng với dữ kiện mới

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP12-P01; SOURCE_BLOB: 8f05b5556d83675649451dec76a8c1ffa5e1098d; OUTCOME: TOP12-O04; SINGLE_ITEM_ID -->
**Bài luyện 19. Dấu và hệ thức lượng**
**Đề:** Góc tù α có \(\cos \alpha=-5/13\). Tính sinα và tanα; giải thích việc chọn dấu.
<details><summary>Lời giải</summary>\(\sin^{2}\alpha=144/169\); vì góc tù nên sin dương, sin=12/13 và tan=−12/5. Nhớ xét dấu trước khi lấy căn. Nếu sai: mục 1,3,4 → bài luyện về dấu của sin và cosin.</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP12-P02; SOURCE_BLOB: 8f05b5556d83675649451dec76a8c1ffa5e1098d; OUTCOME: TOP12-O02; SINGLE_ITEM_ID -->
**Bài luyện 20. Hai góc bù**
**Đề:** Tính chính xác \(\sin 150^{\circ}+\cos 120^{\circ}\) và giải thích quy luật được dùng.
<details><summary>Lời giải</summary>Sin giữ nguyên, cos đổi dấu khi chuyển về góc bù: \(1/2-1/2=0\). Nếu sai: mục 2 → bài luyện về góc bù.</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP12-P03; SOURCE_BLOB: 8f05b5556d83675649451dec76a8c1ffa5e1098d; OUTCOME: TOP12-O05; SINGLE_ITEM_ID -->
**Bài luyện 21. Góc tù và định lí côsin**
**Đề:** Trong tam giác ABC có \(b=4, c=7, A=120^{\circ}\). Tính a.
<details><summary>Lời giải</summary>\(a^{2}=16+49-2\cdot 4\cdot 7\cdot (-1/2)=93\), nên \(a=\sqrt{93}\). Góc tù khiến cạnh a lớn hơn cả b và c. Nếu sai: mục 5 → bài luyện về định lí cosin.</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP12-P04; SOURCE_BLOB: 8f05b5556d83675649451dec76a8c1ffa5e1098d; OUTCOME: TOP12-O06; SINGLE_ITEM_ID -->
**Bài luyện 22. Hai góc và một cạnh**
**Đề:** Trong tam giác ABC có \(A=30^{\circ}, B=75^{\circ}, a=6\). Tính b,c.
<details><summary>Lời giải</summary>\(C=75^{\circ}\), nên \(b=c=6 \sin 75^{\circ}/\sin 30^{\circ}=12 \sin 75^{\circ}=3(\sqrt{6}+\sqrt{2})\). Nếu sai: mục 6–7 → bài luyện về hai góc và một cạnh.</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP12-P05; SOURCE_BLOB: 8f05b5556d83675649451dec76a8c1ffa5e1098d; OUTCOME: TOP12-O07; SINGLE_ITEM_ID -->
**Bài luyện 23. Ba cạnh và tam giác vuông**
**Đề:** Ba cạnh 6,8,10 tạo thành tam giác ABC. Xác định góc đối diện cạnh 10, diện tích S, r và R.
<details><summary>Lời giải</summary>Vì \(6^{2}+8^{2}=10^{2}\), góc đối diện 10 là 90°. \(S=24\), \(p=12\), \(r=24/12=2\), \(R=6\cdot 8\cdot 10/(4\cdot 24)=5\). Nếu sai: mục 7,9–10 → bài luyện về Heron.</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP12-P06; SOURCE_BLOB: 8f05b5556d83675649451dec76a8c1ffa5e1098d; OUTCOME: TOP12-O08; SINGLE_ITEM_ID -->
**Bài luyện 24. Dữ kiện SSA có thể có hai nghiệm**
**Đề:** Biết \(A=30^{\circ}, a=6, b=10\). Có bao nhiêu tam giác khác nhau thỏa dữ kiện? Nêu hai giá trị khả dĩ của B theo biểu thức arcsin.
<details><summary>Lời giải</summary>\(\sin B=(10 \sin 30^{\circ})/6=5/6\). Hai giá trị \(B=\arcsin (5/6)\) và \(B=180^{\circ}-\arcsin (5/6)\) đều cho A+B<180° (vì arcsin(5/6)>30°); **hai tam giác**. Nếu chỉ lấy B nhọn: mục 8 → bài luyện về dữ kiện vô nghiệm.</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP12-P07; SOURCE_BLOB: 8f05b5556d83675649451dec76a8c1ffa5e1098d; OUTCOME: TOP12-O08; SINGLE_ITEM_ID -->
**Bài luyện 25. Dữ kiện SSA vô nghiệm**
**Đề:** \(A=30^{\circ}, a=3, b=7\). Hãy kiểm chứng có tồn tại tam giác ABC hay không.
<details><summary>Lời giải</summary>\(\sin B=7\cdot \sin 30^{\circ}/3=7/6>1\), vô lý. **Không tồn tại tam giác**. Nếu bấm arcsin trực tiếp và bị lỗi: mục 8 kiểm điều kiện trước.</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP12-P08; SOURCE_BLOB: 8f05b5556d83675649451dec76a8c1ffa5e1098d; OUTCOME: TOP12-O09; SINGLE_ITEM_ID -->
**Bài luyện 26. Diện tích qua góc tù**
**Đề:** \(b=6, c=10, A=150^{\circ}\). Tính diện tích S, nêu vì sao S dương.
<details><summary>Lời giải</summary>\(S=(1/2)\cdot 6\cdot 10\cdot \sin 150^{\circ}=15\). Góc tù trong tam giác vẫn có sin dương; độ cao đến phần kéo dài của đáy vẫn là độ dài dương. Nếu sai: mục 9 → bài luyện cùng dạng.</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP12-P09; SOURCE_BLOB: 8f05b5556d83675649451dec76a8c1ffa5e1098d; OUTCOME: TOP12-O10; SINGLE_ITEM_ID -->
**Bài luyện 27. Heron và hai bán kính**
**Đề:** Tam giác có cạnh 7,8,9. Tìm S,r,R.
<details><summary>Lời giải</summary>\(p=12\), \(S=\sqrt{12\cdot 5\cdot 4\cdot 3}=12\sqrt{5}\), \(r=S/p=\sqrt{5}\), \(R=7\cdot 8\cdot 9/(4\cdot 12\sqrt{5})=21\sqrt{5}/10\). Nếu nhầm r/R: mục 10 → bài luyện về diện tích từ ba cạnh.</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP12-P10; SOURCE_BLOB: 8f05b5556d83675649451dec76a8c1ffa5e1098d; OUTCOME: TOP12-O11; SINGLE_ITEM_ID -->
**Bài luyện 28. Bài toán đo đạc**
**Đề:** Hai điểm A,B cách nhau 80 m; cùng nhìn C sao cho \(A=30^{\circ},B=45^{\circ}\) là các góc **trong** của tam giác ABC. Tìm BC và AC dưới dạng căn thức chính xác.
<details><summary>Lời giải</summary>\(C=105^{\circ}\); \(\sin 105^{\circ}=(\sqrt{6}+\sqrt{2})/4\). Vì AB=c=80, \(BC=a=80 \sin 30^{\circ}/\sin 105^{\circ}=40(\sqrt{6}-\sqrt{2})\,\mathrm{m}\); \(AC=b=80 \sin 45^{\circ}/\sin 105^{\circ}=80(\sqrt{3}-1)\,\mathrm{m}\). Nếu sai: mục 6,11 → bài luyện về đo đạc.</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP12-P11; SOURCE_BLOB: 8f05b5556d83675649451dec76a8c1ffa5e1098d; OUTCOME: TOP12-O12; SINGLE_ITEM_ID -->
**Bài luyện 29. Bất đẳng thức tam giác**
**Đề:** Ba thanh dài 2 cm, 3 cm, 6 cm có ghép thành tam giác không? Giải thích vì sao chưa được dùng Heron.
<details><summary>Lời giải</summary>Không, vì \(2+3=5<6\). Heron chỉ được áp dụng cho tam giác không suy biến; mục 12 → xem lại điều kiện đầu mục 5.</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP12-P12; SOURCE_BLOB: 8f05b5556d83675649451dec76a8c1ffa5e1098d; OUTCOME: TOP12-O12; SINGLE_ITEM_ID -->
**Bài luyện 30. Biên của công thức**
**Đề:** Một người đặt \(A=0^{\circ}, b=5, c=7\) và gọi đó là tam giác ABC không suy biến. Chỉ ra sự mâu thuẫn với điều kiện áp dụng định lí sin/côsin trong tam giác.
<details><summary>Lời giải</summary>Mọi góc trong tam giác không suy biến phải thuộc \((0^{\circ},180^{\circ})\); A=0° tạo cấu hình suy biến, dù có thể tính đại số \(a=|7-5|=2\) bằng biểu thức côsin. Không có tam giác không suy biến để dùng định lí sin hoặc Heron. Nếu sai: mục 5,6,12.</details>

## 3. Tự luận: trình bày lập luận

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP12-W01; SOURCE_BLOB: 8f05b5556d83675649451dec76a8c1ffa5e1098d; OUTCOME: TOP12-O10; SINGLE_ITEM_ID -->
**Bài luyện 31. Tam giác 5–12–13**
**Đề:** Với tam giác có cạnh 5,12,13, hãy (a) xác định loại tam giác; (b) tính diện tích S; (c) tính r và R; (d) giải thích vì sao R lớn hơn r.
<details><summary>Lời giải và rubric</summary>(a) \(5^{2}+12^{2}=13^{2}\), tam giác vuông (1đ); (b) \(S=5\cdot 12/2=30\) (2đ); (c) \(p=15\), \(r=30/15=2\), \(R=5\cdot 12\cdot 13/(4\cdot 30)=13/2\) (3đ); (d) \(13/2>2\), R thuộc đường tròn đi qua ba đỉnh, r thuộc đường tròn tiếp xúc ba cạnh (1đ). Nếu sai: mục 7,9,10 → bài luyện về Heron.</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP12-W02; SOURCE_BLOB: 8f05b5556d83675649451dec76a8c1ffa5e1098d; OUTCOME: TOP12-O11; SINGLE_ITEM_ID -->
**Bài luyện 32. Định vị điểm từ hai hướng nhìn**
**Đề:** AB dài 120 m; A,B đo được các góc trong \(A=45^{\circ},B=75^{\circ}\) đến C. Tính C, BC, AC; nêu đơn vị và vì sao dùng định lí sin.
<details><summary>Lời giải và rubric</summary>\(C=60^{\circ}\) (1đ); vì biết hai góc một cạnh, chọn sin (1đ); \(BC=120 \sin 45^{\circ}/\sin 60^{\circ}=40\sqrt{6}\,\mathrm{m}\) (2đ); \(AC=120 \sin 75^{\circ}/\sin 60^{\circ}=60(\sqrt{6}+\sqrt{2})/\sqrt{3}\,\mathrm{m}\) (2đ); ghi đơn vị và kiểm hợp lí (1đ). Nếu sai: mục 6,7,11 → bài luyện về đo đạc.</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP12-W03; SOURCE_BLOB: 8f05b5556d83675649451dec76a8c1ffa5e1098d; OUTCOME: TOP12-O08; SINGLE_ITEM_ID -->
**Bài luyện 33. Giải thích hiện tượng hai nghiệm**
**Đề:** Trong tam giác ABC, biết \(A=30^{\circ}, a=8,b=10\). Chứng minh rằng dữ kiện cho hai tam giác khác nhau; mô tả cách tìm C cho mỗi tam giác.
<details><summary>Lời giải và rubric</summary>Viết \(\sin B=b \sin A/a=5/8\) (2đ); tìm hai giá trị \(B_{1}=\arcsin (5/8)\), \(B_{2}=180^{\circ}-\arcsin (5/8)\) (2đ); chỉ ra cả \(A+B_{1}<180^{\circ}\) và \(A+B_{2}<180^{\circ}\) vì \(B_{1}>30^{\circ}\) (2đ); đặt \(C_i=180^{\circ}-A-B_i\) với C_i>0 (1đ). Lưu ý arcsin là góc nhọn chuẩn. Nếu sai: mục 8 → bài luyện về hai tam giác có thể thỏa dữ kiện.</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP12-W04; SOURCE_BLOB: 8f05b5556d83675649451dec76a8c1ffa5e1098d; OUTCOME: TOP12-O05; SINGLE_ITEM_ID -->
**Bài luyện 34. Tam giác có góc tù**
**Đề:** Tam giác ABC có \(b=5,c=6,A=120^{\circ}\). Tính a, diện tích S và bán kính ngoại tiếp R; giải thích việc chọn dấu trong định lí côsin.
<details><summary>Lời giải và rubric</summary>\(\cos 120^{\circ}=-1/2\) (1đ); \(a^{2}=25+36-60\cdot (-1/2)=91\), \(a=\sqrt{91}\) (2đ); \(S=(1/2)\cdot 5\cdot 6\cdot \sin 120^{\circ}=15\sqrt{3}/2\) (2đ); \(R=abc/(4S)=\sqrt{91}/\sqrt{3}=\sqrt{273}/3\) (2đ). Nếu sai: mục 2,5,9–10 → bài luyện về góc tù và định lí cosin.</details>

# Tự kiểm tra

Hãy tự giải đủ **12 câu** trước khi mở phần **Đối chiếu** ở cuối. Với câu tự luận, viết rõ cách chọn định lí, điều kiện và từng bước giải, không chỉ đáp số.

<!-- PUBLIC_REPLAY_ONLY: THPT-G10-B05-C01; OUTCOME: TOP12-O01; NO_RD1; NO_MASTERY -->

**Câu 1.** Giá trị của \(\cos120^\circ\) là bao nhiêu?

**Lựa chọn:** A. \(\tfrac12\) | B. \(-\tfrac12\) | C. \(\tfrac{\sqrt3}{2}\) | D. \(-\tfrac{\sqrt3}{2}\)

<!-- PUBLIC_REPLAY_ONLY: THPT-G10-B05-P02; OUTCOME: TOP12-O04; NO_RD1; NO_MASTERY -->

**Câu 2.** Cho góc tù α với \(\cos\alpha=-3/5\). Tính \(\sin\alpha\) và \(\tan\alpha\).

<!-- PUBLIC_REPLAY_ONLY: THPT-G10-B05-P05; OUTCOME: TOP12-O02; NO_RD1; NO_MASTERY -->

**Câu 3.** Trong \([0^\circ,180^\circ]\), có những góc nào thỏa \(\sin\alpha=\sqrt3/2\)?

**Lựa chọn:** A. Chỉ 60° | B. Chỉ 120° | C. 60° và 120° | D. 30° và 150°

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP12-P01; OUTCOME: TOP12-O04; NO_RD1; NO_MASTERY -->

**Câu 4.** Góc tù α có \(\cos \alpha=-5/13\). Tính sinα và tanα; giải thích việc chọn dấu.

<!-- PUBLIC_REPLAY_ONLY: THPT-G10-B06-C01; OUTCOME: TOP12-O05; NO_RD1; NO_MASTERY -->

**Câu 5.** Trong tam giác ABC có \(b=5,c=7,A=60^\circ\). Tính \(a\).

**Lựa chọn:** A. \(\sqrt{39}\) | B. \(\sqrt{74}\) | C. \(\sqrt{109}\) | D. \(\sqrt{14}\)

<!-- PUBLIC_REPLAY_ONLY: THPT-G10-B06-P03; OUTCOME: TOP12-O06; NO_RD1; NO_MASTERY -->

**Câu 6.** Tam giác ABC có \(A=30^\circ,B=60^\circ,c=8\). Tính \(a,b\).

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP12-P06; OUTCOME: TOP12-O08; NO_RD1; NO_MASTERY -->

**Câu 7.** Biết \(A=30^{\circ}, a=6, b=10\). Có bao nhiêu tam giác khác nhau thỏa dữ kiện? Nêu hai giá trị khả dĩ của B theo biểu thức arcsin.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP12-P07; OUTCOME: TOP12-O08; NO_RD1; NO_MASTERY -->

**Câu 8.** \(A=30^{\circ}, a=3, b=7\). Hãy kiểm chứng có tồn tại tam giác ABC hay không.

<!-- PUBLIC_REPLAY_ONLY: THPT-G10-B06-P04; OUTCOME: TOP12-O10; NO_RD1; NO_MASTERY -->

**Câu 9.** Tam giác có ba cạnh \(a=7,b=8,c=9\). Tính \(\cos C\) và diện tích \(S\).

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP12-P10; OUTCOME: TOP12-O11; NO_RD1; NO_MASTERY -->

**Câu 10.** Hai điểm A,B cách nhau 80 m; cùng nhìn C sao cho \(A=30^{\circ},B=45^{\circ}\) là các góc **trong** của tam giác ABC. Tìm BC và AC dưới dạng căn thức chính xác.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP12-W02; OUTCOME: TOP12-O11; NO_RD1; NO_MASTERY -->

**Câu 11.** AB dài 120 m; A,B đo được các góc trong \(A=45^{\circ},B=75^{\circ}\) đến C. Tính C, BC, AC; nêu đơn vị và vì sao dùng định lí sin.

<!-- PUBLIC_REPLAY_ONLY: THPT-TOP12-W03; OUTCOME: TOP12-O08; NO_RD1; NO_MASTERY -->

**Câu 12.** Trong tam giác ABC, biết \(A=30^{\circ}, a=8,b=10\). Chứng minh rằng dữ kiện cho hai tam giác khác nhau; mô tả cách tìm C cho mỗi tam giác.

<!-- AUTHORING_ONLY_NOT_FOR_STUDENT_VIEW: public selfcheck reuses canonical item IDs; answers remain in voluntary Practice reveals; no RD1. -->


<details markdown="1"><summary>Đối chiếu</summary>

Sau khi giải đủ 12 câu, tìm đúng **Bài luyện** trong bảng và tự mở **Lời giải** ở phần Luyện tập. Nếu chưa đúng, đọc lại phần kiến thức liên quan rồi làm lại một bài cùng dạng.

| Câu tự kiểm tra | Bài luyện chứa lời giải |
| --- | --- |
| Câu 1 – 2 – 3 – 4 | Bài luyện 1 – 4 – 7 – 19 |
| Câu 5 – 6 – 7 – 8 | Bài luyện 10 – 14 – 24 – 25 |
| Câu 9 – 10 – 11 – 12 | Bài luyện 15 – 28 – 32 – 33 |

</details>

Nguồn: SGK Toán 10, Tập Một, Chương III (Bài 5–6), bộ Kết nối tri thức với cuộc sống.
