# Chuyên đề 18 — Phương pháp tọa độ trong không gian Oxyz

Ta bắt đầu từ những câu hỏi gần gũi: một vật chuyển động ra sao, mặt phẳng nghiêng thế nào, và một vùng không gian hình cầu có bao phủ một vị trí không? Tọa độ cho phép chuyển từng câu hỏi hình học thành suy luận có thể kiểm tra bằng phép tính. Mỗi khi dùng công thức, hãy nhận diện đối tượng và điều kiện trước.

<!-- AUTHORING_R04_LEARNER_CANDIDATE; EDITORIAL_R03_BLOB: 66df020c242cbbeb5c4bd50670e245a4d8c7f31f; FROZEN_R02_BLOB: f84dee296e2880c2d17fa2306c44458031c057cd; SGK_CHII_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; SGK_CHV_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; NOT_REVIEWED_INDEPENDENTLY; NO_PRIVATE_RD1 -->

# Kiến thức

## 1. Vectơ và phép toán hình học

![Quy tắc hình hộp: ba cạnh AB, AD, AA′ cộng thành đường chéo AC′](../../../../docs/assets/images/thpt/FIG-G12-CHII-B06-R00.svg)

**Đọc hình:** Hãy chỉ điểm A, theo lần lượt ba hướng AB, AD, AA′ và xác định C′. Đường chéo AC′ là độ dời tổng hợp; không dùng độ dài nét xiên trên màn hình để tính độ dài thật.

### 1.1. Vectơ và vectơ-không

<!-- LESSON_ID: TOP18-M01; OUTCOME_ID: TOP18-O01; S1_ORIGINAL_OUTCOME: G12-CHII-B06-O01 -->

Một vectơ biểu diễn độ dời có hướng từ điểm đầu đến điểm cuối. Ta có thể tịnh tiến mũi tên song song mà không đổi vectơ; vì thế vectơ không gắn với vị trí tuyệt đối. Vectơ-không có hai đầu trùng nhau, độ dài 0. Theo quy ước SGK, nó cùng hướng và cùng phương với mọi vectơ. Về hình học, nó không chỉ một hướng dịch chuyển riêng, nên không xác định góc giữa vectơ-không với vectơ khác.

> **Kiến thức cần ghi nhớ**
>
> Một vectơ biểu diễn độ dời từ điểm đầu đến điểm cuối. Vectơ-không có độ dài 0, cùng hướng và cùng phương với mọi vectơ theo quy ước; không dùng nó để xác định góc.


**Ví dụ**

**Đề bài:** Trong ba điểm A–B–C thẳng hàng theo thứ tự, ghép \(\overrightarrow{AB}\) với \(\overrightarrow{BC}\) thu được độ dời nào? Khi \(A=B\), \(\overrightarrow{AB}\) có cùng hướng với \(\overrightarrow{AC}\) theo quy ước không? Có xác định được góc giữa chúng không?

**Lời giải:** Nếu A,B,C thẳng hàng và \(\overrightarrow{AB},\overrightarrow{BC}\) cùng hướng thì khi đi A→B rồi B→C, ta thu được độ dời A→C. Khi A trùng B, vectơ \(\overrightarrow{AB}\) là vectơ-không dù hai điểm mang cùng vị trí. Theo quy ước, \(\overrightarrow{AB}=\vec 0\) cùng hướng và cùng phương với \(\overrightarrow{AC}\); tuy nhiên góc giữa chúng không xác định.

**Vận dụng**

A trùng B. Vectơ \(\overrightarrow{AB}\) có độ dài bao nhiêu? Theo quy ước, nó có cùng hướng và cùng phương với mọi vectơ không?

<!-- ITEM_ID: THPT-TOP18-T01; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O01 -->

<details markdown="1"><summary>Đối chiếu</summary>

Độ dài bằng 0; có, cùng hướng và cùng phương với mọi vectơ theo quy ước SGK. Vectơ-không không biểu diễn hướng dịch chuyển riêng, nên không xác định góc với vectơ khác.

**Kiểm lỗi**

Nếu hai đầu trùng nhau, độ dài bằng 0. Phân biệt quy ước cùng hướng, cùng phương với mọi vectơ và việc không có hướng dịch chuyển riêng; không suy ra góc bằng 0° từ quy ước ấy. Quay về **Kiến thức 1.1**, sau đó tự giải **Bài luyện 3** và **Bài luyện 5** trong Luyện tập.

</details>

### 1.2. Bằng nhau, đối nhau và cùng phương

<!-- LESSON_ID: TOP18-M02; OUTCOME_ID: TOP18-O02; S1_ORIGINAL_OUTCOME: G12-CHII-B06-O02 -->

Hai vectơ bằng nhau phải cùng hướng và cùng độ dài; chỉ cùng độ dài chưa đủ. Hai vectơ khác không đối nhau có cùng độ dài nhưng ngược hướng; vectơ đối của vectơ-không vẫn là vectơ-không. Với hai vectơ khác không, 'cùng phương' nói về giá song song hoặc trùng nhau, không tự khẳng định cùng hướng. Riêng vectơ-không cùng hướng và cùng phương với mọi vectơ theo quy ước.

> **Kiến thức cần ghi nhớ**
>
> Hai vectơ bằng nhau phải cùng hướng và cùng độ dài; chỉ cùng độ dài chưa đủ.


**Ví dụ**

**Đề bài:** Trong hình bình hành ABCD, so các vectơ \(\overrightarrow{AB},\overrightarrow{DC},\overrightarrow{CD}\): đâu là cặp bằng nhau, đâu là cặp đối?

**Lời giải:** Trên hình bình hành ABCD, \(\overrightarrow{AB}=\overrightarrow{DC}\); \(\overrightarrow{AB}=-\overrightarrow{CD}\). Cùng hai cạnh nhưng đổi thứ tự đầu–cuối thì đảo chiều, không đổi độ dài.

**Vận dụng**

Trong hình bình hành ABCD, vectơ \(\overrightarrow{AB}\) có bằng vectơ \(\overrightarrow{CD}\) không?

<!-- ITEM_ID: THPT-TOP18-T02; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O02 -->

<details markdown="1"><summary>Đối chiếu</summary>

Không. \(\overrightarrow{AB}\) và \(\overrightarrow{CD}\) đối nhau; \(\overrightarrow{AB}=\overrightarrow{DC}\).

**Kiểm lỗi**

Bằng nhau cần cả cùng hướng lẫn độ dài; hai độ dời dài bằng nhau mà ngược chiều thì đối nhau, không phải bằng nhau. Quay về **Kiến thức 1.2**, sau đó tự giải **Bài luyện 7** và **Bài luyện 10** trong Luyện tập.

</details>

### 1.3. Cộng vectơ theo đường đi

<!-- LESSON_ID: TOP18-M03; OUTCOME_ID: TOP18-O03; S1_ORIGINAL_OUTCOME: G12-CHII-B06-O03 -->

Cộng vectơ là ghép các độ dời, không cộng số đo chiều dài tùy ý. Quy tắc ba điểm \(\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}\) phản ánh đi liên tiếp; trong hình hộp, tổng ba cạnh kề ở A đưa đến đỉnh đối diện C′.

> **Kiến thức cần ghi nhớ**
>
> Cộng vectơ là ghép các độ dời, không cộng số đo chiều dài tùy ý.


**Ví dụ**

**Đề bài:** Trong hình hộp ABCD.A′B′C′D′, ba độ dời \(\overrightarrow{AB},\overrightarrow{AD},\overrightarrow{AA'}\) đưa ta tới đỉnh nào?

**Lời giải:** Trong hình hộp ABCD.A′B′C′D′, đi A→B, rồi B→C, rồi C→C′ có cùng độ dời với A→C′. Vì \(\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}\) và \(\overrightarrow{AC}+\overrightarrow{AA'}=\overrightarrow{AC'}\), suy ra \(\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA'}=\overrightarrow{AC'}\).

**Vận dụng**

Tính dạng rút gọn của \(\overrightarrow{PQ}+\overrightarrow{QR}\).

<!-- ITEM_ID: THPT-TOP18-T03; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O03 -->

<details markdown="1"><summary>Đối chiếu</summary>

Vectơ \(\overrightarrow{PR}\) theo quy tắc ba điểm, miễn các điểm được lấy đúng thứ tự.

**Kiểm lỗi**

Để cộng vectơ, đặt đuôi mũi tên sau vào đầu mũi tên trước; không cộng độ dài nếu các hướng khác nhau. Quay về **Kiến thức 1.3**, sau đó tự giải **Bài luyện 13** và **Bài luyện 15** trong Luyện tập.

</details>

### 1.4. Nhân vectơ với một số

<!-- LESSON_ID: TOP18-M04; OUTCOME_ID: TOP18-O04; S1_ORIGINAL_OUTCOME: G12-CHII-B06-O04 -->

Với vectơ \(\vec u\ne\vec0\), nhân vectơ với số k làm độ dài gấp \(\lvert k\rvert\) lần; cùng hướng nếu \(k>0\), ngược hướng nếu \(k<0\). Nếu \(k=0\) hoặc \(\vec u=\vec0\), kết quả là vectơ-không, cùng hướng và cùng phương với mọi vectơ theo quy ước. Điều này giải thích tại sao nhân 3 biểu thị ba lần độ dời cùng hướng, còn nhân −1 là đảo chiều.

> **Kiến thức cần ghi nhớ**
>
> Với vectơ \(\vec u\ne\vec0\), nhân vectơ với số k làm độ dài gấp \(\lvert k\rvert\) lần; cùng hướng nếu \(k>0\), ngược hướng nếu \(k<0\). Nếu \(k=0\) hoặc \(\vec u=\vec0\), kết quả là vectơ-không, cùng hướng và cùng phương với mọi vectơ theo quy ước.


**Ví dụ**

**Đề bài:** Vectơ u dài 2 m hướng Bắc. Xác định độ dài và hướng của \(-3\vec u\).

**Lời giải:** Nếu vectơ u dài 2 m về hướng Bắc, \(-3\vec u\) dài 6 m về hướng Nam. Không viết độ dài −6 m; độ dài luôn không âm.

**Vận dụng**

Cho \(\vec u\ne\vec0\). Theo quy ước SGK, \(0\vec u\) có cùng hướng với \(\vec u\) không? Có xác định góc giữa chúng không?

<!-- ITEM_ID: THPT-TOP18-T04; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O04 -->

<details markdown="1"><summary>Đối chiếu</summary>

Có. Vì \(0\vec u=\vec0\), theo quy ước SGK nó cùng hướng và cùng phương với \(\vec u\). Tuy nhiên góc giữa chúng không xác định.

**Kiểm lỗi**

Với vectơ khác không, dấu của k quyết định chiều khi \(k\ne0\). Khi \(k=0\), kết quả là vectơ-không: cùng hướng và cùng phương theo quy ước, nhưng không có góc xác định. Độ dài không âm. Quay về **Kiến thức 1.4**, sau đó tự giải **Bài luyện 16** và **Bài luyện 20** trong Luyện tập.

</details>

### 1.5. Góc và tích vô hướng

<!-- LESSON_ID: TOP18-M05; OUTCOME_ID: TOP18-O05; S1_ORIGINAL_OUTCOME: G12-CHII-B06-O05 -->

Tích vô hướng đo phần 'đi cùng phương' của hai vectơ; nó dương khi góc nhọn, âm khi góc tù và bằng 0 khi vuông góc. Khi hai vectơ khác không, tích vô hướng được tính bằng \(\vec u\cdot\vec v=\lVert\vec u\rVert\lVert\vec v\rVert\cos\theta\), với \(\theta\) là góc giữa chúng. Nếu một vectơ bằng vectơ-không, tích vô hướng bằng 0; không cần tính góc.

> **Kiến thức cần ghi nhớ**
>
> Hai vectơ khác không có tích vô hướng \(\vec u\cdot\vec v=\lVert\vec u\rVert\lVert\vec v\rVert\cos\theta\); tích bằng 0 khi chúng vuông góc. Không định nghĩa góc với vectơ-không.


**Ví dụ**

**Đề bài:** Hai vectơ lực khác 0 vuông góc nhau. Tích vô hướng bằng bao nhiêu? Có vectơ nào phải bằng 0 không?

**Lời giải:** Hai lực vuông góc có tích vô hướng 0 không có nghĩa chúng bằng vectơ-không. Chỉ là không có thành phần theo hướng của nhau. Hai vectơ vuông góc vẫn có thể cùng khác 0.

**Vận dụng**

Hai vectơ khác không vuông góc; tích vô hướng bằng bao nhiêu?

<!-- ITEM_ID: THPT-TOP18-T05; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O05 -->

<details markdown="1"><summary>Đối chiếu</summary>

Bằng 0 vì \(\cos90^\circ=0\).

**Kiểm lỗi**

Tích vô hướng dùng độ dài của hai vectơ và cos của góc; khi một vectơ bằng 0, không chia để tìm cos góc. Quay về **Kiến thức 1.5**, sau đó tự giải **Bài luyện 22** và **Bài luyện 25** trong Luyện tập.

</details>

### 1.6. Hợp lực và tổng vectơ

<!-- LESSON_ID: TOP18-M06; OUTCOME_ID: TOP18-O06; S1_ORIGINAL_OUTCOME: G12-CHII-B06-O06 -->

Bài lực ba chiều thường hỏi hợp lực, hình chiếu hay công sinh ra bởi một lực. Chọn phép cộng vectơ khi ghép các tác dụng, chọn tích vô hướng khi đo đóng góp của lực dọc theo chuyển dời; không cộng độ lớn nếu các lực khác hướng.

> **Kiến thức cần ghi nhớ**
>
> Hợp lực hai lực là tổng hai vectơ lực. Nếu chúng vuông góc, độ lớn hợp lực là \(\sqrt{F_1^2+F_2^2}\), không phải \(F_1+F_2\).


**Ví dụ**

**Đề bài:** Hai lực cùng điểm dài 3 N và 4 N vuông góc. Tính hợp lực và so với hai lực cùng hướng.

**Lời giải:** Hai lực cùng điểm có độ lớn 3 N và 4 N vuông góc thì hợp lực dài 5 N theo Pitago. Nếu cùng hướng, hợp lực 7 N; vì thế phải đọc hướng trước khi tính.

**Để phân biệt trước khi luyện:** Hợp lực của hai lực là tổng **vectơ lực**, có đơn vị N. **Công** của một lực là tích vô hướng với độ dời, đơn vị J: lực 10 N hợp với độ dời 2 m góc 60° sinh công \(10\cdot 2\cdot\cos60^\circ=10\) J. Bài luyện 13 giúp kiểm cộng vectơ, còn Bài luyện 30 rèn tính công. Hai kết quả không được dùng thay nhau.

**Vận dụng**

Hai lực 6 N và 8 N vuông góc, độ lớn hợp lực?

<!-- ITEM_ID: THPT-TOP18-T06; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O06 -->

<details markdown="1"><summary>Đối chiếu</summary>

10 N vì bình phương độ lớn tổng bằng \(6^2+8^2\).

**Kiểm lỗi**

Hợp lực dùng **cộng vectơ lực**, còn công dùng **tích vô hướng lực với độ dời**. Hai bài thử củng cố hai thao tác khác nhau, không coi công là độ lớn hợp lực. Quay về **Kiến thức 1.6**, sau đó tự giải **Bài luyện 13** và **Bài luyện 30** trong Luyện tập.

</details>

## 2. Làm quen hệ tọa độ Oxyz

**Từ mũi tên đến vị trí thật.** Hãy theo dõi một chiếc drone đang bay trong kho: nếu gốc O đặt ở một góc nhà, ta chọn Ox hướng Đông, Oy hướng Bắc, Oz hướng lên. Drone bắt đầu ở **\(A=(1;1;2)\)** (m). Thay vì mô tả “hơi lệch sang phải và khá cao”, ba tọa độ cho biết chính xác ba độ dời có dấu. Đến cuối chuyên đề, chính drone này sẽ giúp ta nối vectơ vận tốc, phương trình đường bay, mặt phẳng và hình cầu trong một bài toán.

**Tự quan sát trước công thức:** Trong mô hình công khai phía dưới, giữ x,y cố định và chỉ kéo z. Điểm M thay đổi độ cao nhưng chân H chiếu xuống mặt Oxy vẫn có tọa độ (x;y;0). Đây là ý nghĩa cụ thể của hình chiếu vuông góc, không phải một công thức cần thuộc lòng trước khi hiểu.

[Mở mô hình khám phá tọa độ và mặt cầu](Temp_THPT_TOPIC18_OXYZ_SPHERE_GEOMETRY_R00_20261114.html) — chọn phần **“Một điểm M có ba tọa độ”**. Mô hình chỉ giúp hình dung, không thay bước Vận dụng và không ghi điểm.

<!-- AUTHOR_INTERACTIVE_PLACEMENT: MODEL_ID=SLM-TOP18-OXYZ-GEOMETRY-R00; SCENE=XYZ_PROJECTION; OUTCOMES=TOP18-O07/TOP18-O08/TOP18-O15; PUBLIC_DISCOVERY_NO_MASTERY -->


![Ba trục Oxyz và điểm M(2;1;3) với đường dẫn hình chiếu](../../../../docs/assets/images/thpt/FIG-G12-CHII-B07-R00.svg)

**Đọc hình:** Tìm O và ba trục x,y,z, rồi đọc \(M(2;1;3)\). Các nét đứt chỉ dẫn từ M xuống mặt Oxy: tọa độ z là độ cao theo trục chứ không phải độ dài đo trên giấy.

### 2.1. Hệ trục và các mặt tọa độ

<!-- LESSON_ID: TOP18-M07; OUTCOME_ID: TOP18-O07; S1_ORIGINAL_OUTCOME: G12-CHII-B07-O01 -->

Ba trục Ox,Oy,Oz vuông góc đôi một giúp định vị một điểm trong phòng bằng ba số. Các mặt phẳng tọa độ Oxy, Oyz, Oxz là ba mặt khác nhau: \(z=0,\,x=0,\,y=0\). Hình phối cảnh không phải thước để đọc chiều sâu.

> **Kiến thức cần ghi nhớ**
>
> Trong hệ trực chuẩn Oxyz, điểm thuộc (Oxy) khi \(z=0\), thuộc (Oxz) khi \(y=0\), thuộc (Oyz) khi \(x=0\).


**Ví dụ**

**Đề bài:** Điểm thuộc (Oxy) và điểm thuộc trục Oz cần có những tọa độ nào bằng 0?

**Lời giải:** Điểm nằm ở mặt Oxy thì \(z=0\) dù hình vẽ giấy có thể cho cảm giác nó ở cao. Trục Oz có \(x=y=0\), không phải \(x=z=0\). Hình phối cảnh không thay điều kiện tọa độ \(z=0\).

**Vận dụng**

Điểm \(M=(2;-1;0)\) thuộc mặt phẳng tọa độ nào?

<!-- ITEM_ID: THPT-TOP18-T07; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O07 -->

<details markdown="1"><summary>Đối chiếu</summary>

Thuộc Oxy vì \(z=0\).

**Kiểm lỗi**

Mặt Oxy cần \(z=0\), Oyz cần \(x=0\); trục Oz cần \(x=y=0\). Không suy dấu tọa độ từ nét hình xiên. Quay về **Kiến thức 2.1**, sau đó tự giải **Bài luyện 31** và **Bài luyện 35** trong Luyện tập.

</details>

### 2.2. Tọa độ của điểm và vectơ

<!-- LESSON_ID: TOP18-M08; OUTCOME_ID: TOP18-O08; S1_ORIGINAL_OUTCOME: G12-CHII-B07-O02 -->

Tọa độ của một điểm là ba số xác định vị trí so với gốc O; tọa độ vectơ là ba thành phần dịch chuyển theo cùng trục. Cùng bộ ba số vẫn là hai đối tượng khác nhau, dù vectơ \(\overrightarrow{OM}\) có tọa độ trùng tọa độ của điểm M.

> **Kiến thức cần ghi nhớ**
>
> Tọa độ của một điểm là ba số xác định vị trí so với gốc O; tọa độ vectơ là ba thành phần dịch chuyển theo cùng trục.


**Ví dụ**

**Đề bài:** Điểm \(M(2;-1;3)\). Viết tọa độ \(\overrightarrow{OM}\) và giải thích ảnh hưởng của đổi gốc.

**Lời giải:** \(M=(2;-1;3)\) thì \(\overrightarrow{OM}=(2;-1;3)\). Nhưng chuyển gốc tọa độ sẽ đổi tọa độ điểm M, còn độ dời của một vectơ tự do không đổi trong các trục cùng hướng.

**Vận dụng**

Điểm \(M(1;2;3)\), tọa độ vectơ \(\overrightarrow{OM}\)?

<!-- ITEM_ID: THPT-TOP18-T08; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O08 -->

<details markdown="1"><summary>Đối chiếu</summary>

\((1;2;3)\) trong cùng hệ Oxyz.

**Kiểm lỗi**

Tọa độ \(\overrightarrow{OM}\) bằng tọa độ M chỉ khi O là gốc của cùng hệ; không tự đổi dấu các thành phần âm của vectơ. Quay về **Kiến thức 2.2**, sau đó tự giải **Bài luyện 37** và **Bài luyện 40** trong Luyện tập.

</details>

### 2.3. Chọn hệ quy chiếu thực tế

<!-- LESSON_ID: TOP18-M09; OUTCOME_ID: TOP18-O09; S1_ORIGINAL_OUTCOME: G12-CHII-B07-O03 -->

Ứng dụng Oxyz bắt đầu bằng chọn gốc, hướng dương và đơn vị. Một tọa độ âm không có nghĩa khoảng cách âm; nó chỉ nằm ở phía đối diện của trục. Bài radar, kho vận hoặc đồ họa đều cần tuyên bố hệ quy chiếu trước.

> **Kiến thức cần ghi nhớ**
>
> Ứng dụng Oxyz bắt đầu bằng chọn gốc, hướng dương và đơn vị.


**Ví dụ**

**Đề bài:** Chọn Ox Đông, Oy Bắc, Oz hướng lên. Đèn ở \((2;-1;3)\) m nằm về hướng nào?

**Lời giải:** Chọn O ở góc nhà, Ox hướng Đông, Oy hướng Bắc, Oz hướng lên. Một đèn ở \((2;-1;3)\) m nằm lệch 1 m về Nam và cao 3 m; không phải thấp hơn sàn.

**Vận dụng**

Trong hệ Ox Đông, Oy Bắc, Oz lên, \(N=(-4;3;2)\) m nằm về phía nào của O?

<!-- ITEM_ID: THPT-TOP18-T09; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O09 -->

<details markdown="1"><summary>Đối chiếu</summary>

4 m về Tây, 3 m về Bắc, cao 2 m.

**Kiểm lỗi**

Vị trí phụ thuộc gốc và chiều dương đã chọn; xác định hướng trục, mốc và đơn vị trước khi đọc tọa độ. Quay về **Kiến thức 2.3**, sau đó tự giải **Bài luyện 42** và **Bài luyện 45** trong Luyện tập.

</details>

### 2.4. Vectơ từ hai điểm

<!-- LESSON_ID: TOP18-M10; OUTCOME_ID: TOP18-O10; S1_ORIGINAL_OUTCOME: G12-CHII-B07-O04 -->

Vectơ từ A đến B được tính bằng cuối trừ đầu theo từng trục: \(\overrightarrow{AB}=(x_B-x_A;y_B-y_A;z_B-z_A)\). Công thức là bản dịch đại số của việc bắt đầu ở A rồi di chuyển tới B; đổi \(\overrightarrow{AB}\) thành \(\overrightarrow{BA}\) thì toàn bộ dấu đảo.

> **Kiến thức cần ghi nhớ**
>
> Vectơ từ A đến B được tính bằng cuối trừ đầu theo từng trục: \(\overrightarrow{AB}=(x_B-x_A;y_B-y_A;z_B-z_A)\).


**Ví dụ**

**Đề bài:** Cho hai điểm \(A(1;2;-1)\) và \(B(4;-2;3)\) trong cùng hệ Oxyz. Tính vectơ độ dời từ A đến B, rồi kiểm bằng cộng tọa độ.

**Lời giải:** \(A=(1;2;-1)\), \(B=(4;-2;3)\) cho \(\overrightarrow{AB}=(3;-4;4)\). Kiểm bằng \(\overrightarrow{OA}+\overrightarrow{AB}=\overrightarrow{OB}\) theo từng thành phần. Ta lấy từng tọa độ điểm cuối trừ điểm đầu: \((4-1;-2-2;3-(-1))=(3;-4;4)\). Lấy A cộng độ dời thu lại đúng B, nên không bị đảo dấu.

**Vận dụng**

\(A=(2;0;-1)\), \(B=(5;-2;3)\). Tính vectơ \(\overrightarrow{AB}\).

<!-- ITEM_ID: THPT-TOP18-T10; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O10 -->

<details markdown="1"><summary>Đối chiếu</summary>

\((3;-2;4)\).

**Kiểm lỗi**

Vectơ từ A tới B là \(\overrightarrow{OB}-\overrightarrow{OA}\), không phải \(\overrightarrow{OA}-\overrightarrow{OB}\); kiểm lại bằng phép cộng \(\overrightarrow{OA}+\overrightarrow{AB}=\overrightarrow{OB}\). Quay về **Kiến thức 2.4**, sau đó tự giải **Bài luyện 46** và **Bài luyện 50** trong Luyện tập.

</details>

## 3. Phép toán tọa độ và khoảng cách

**Khi điểm bắt đầu chuyển động.** Drone từ \(A=(1;1;2)\) m, mỗi giây tiến **1 m theo Ox, 0 m theo Oy và 1 m theo Oz**. Ta ghi vectơ vận tốc \(\vec v=(1;0;1)\) m/s: cùng một vectơ cho biết *hướng và tốc độ theo từng trục*. Sau t giây, vị trí trở thành \(M(t)=(1+t;1;2+t)\). Chỉ cần thử \(t=0\) và \(t=1\) là kiểm được: drone từ A tới \((2;1;3)\), thay đổi \((1;0;1)\). Nhờ vậy, phép cộng vectơ không còn là một bảng quy tắc rời rạc.


![Độ dời từ A đến B phân tích theo Δx, Δy, Δz](../../../../docs/assets/images/thpt/FIG-G12-CHII-B08-R00.svg)

**Đọc hình:** Đọc ba nhãn \(\Delta x,\Delta y,\Delta z\) từ A sang B; từng thành phần là tọa độ B trừ tọa độ A. Đừng lấy tổng ba thành phần làm độ dài AB: còn phải áp dụng Pitago 3D.

### 3.1. Phép toán theo từng tọa độ

<!-- LESSON_ID: TOP18-M11; OUTCOME_ID: TOP18-O11; S1_ORIGINAL_OUTCOME: G12-CHII-B08-O01 -->

Phép cộng, trừ và nhân số trên vectơ trong ba trục vuông góc thực hiện theo từng thành phần. Đây là phép cộng độ dời độc lập trên Ox,Oy,Oz chứ không cộng ba độ dài của vectơ.

> **Kiến thức cần ghi nhớ**
>
> Phép cộng, trừ và nhân số trên vectơ trong ba trục vuông góc thực hiện theo từng thành phần.


**Ví dụ**

**Đề bài:** Hai vectơ \(\vec u=(1;2;-1)\), \(\vec v=(-2;0;3)\) được cho theo ba trục Oxyz. Tính \(\vec u+\vec v\) và tổ hợp \(2\vec u-\vec v\).

**Lời giải:** \(\vec u=(1;2;-1)\), \(\vec v=(-2;0;3)\) thì \(\vec u+\vec v=(-1;2;2)\); \(2\vec u-\vec v=(4;4;-5)\). Mỗi phép cộng và trừ xử lý từng thành phần. Cộng theo tọa độ cho \((1-2;2+0;-1+3)=(-1;2;2)\). Với \(2\vec u-\vec v\), tính \(2\vec u=(2;4;-2)\) rồi trừ v được \((4;4;-5)\).

**Vận dụng**

\(\vec u=(1;-2;3)\), \(\vec v=(2;0;-1)\); \(\vec u+\vec v\)?

<!-- ITEM_ID: THPT-TOP18-T11; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O11 -->

<details markdown="1"><summary>Đối chiếu</summary>

\((3;-2;2)\).

**Kiểm lỗi**

Cộng/trừ/nhân vectơ theo từng thành phần, không nhân chéo tọa độ; cẩn thận khi trừ số âm. Quay về **Kiến thức 3.1**, sau đó tự giải **Bài luyện 51** và **Bài luyện 55** trong Luyện tập.

</details>

### 3.2. Kiểm hai vectơ cùng phương

<!-- LESSON_ID: TOP18-M12; OUTCOME_ID: TOP18-O12; S1_ORIGINAL_OUTCOME: G12-CHII-B08-O02 -->

Hai vectơ khác không cùng phương nếu một vectơ là bội của vectơ kia. Đừng chia các tọa độ tùy tiện khi có thành phần bằng 0; cách chắc chắn là thử k sao cho \(\vec u=k\vec v\) ở *tất cả* ba vị trí. Nếu một vectơ là vectơ-không, hai vectơ cùng phương và cùng hướng theo quy ước; không cần chia để tìm tỉ số.

> **Kiến thức cần ghi nhớ**
>
> Hai vectơ khác không cùng phương nếu một vectơ là bội của vectơ kia. Vectơ-không cùng phương và cùng hướng với mọi vectơ theo quy ước.


**Ví dụ**

**Đề bài:** Với \(\vec u=(2;-4;0)\), \(\vec v=(-1;2;0)\), hai vectơ cùng phương/hướng thế nào? Nếu \(v_z=1\)?

**Lời giải:** \(\vec u=(2;-4;0)\),\(\vec v=(-1;2;0)\), ta có \(\vec u=-2\vec v\) nên cùng phương ngược hướng. Nếu \(\vec v=(-1;2;1)\), quan hệ vỡ ở tọa độ thứ ba.

**Vận dụng**

\(\vec u=(3;6;0)\), \(\vec v=(1;2;0)\) có cùng phương không?

<!-- ITEM_ID: THPT-TOP18-T12; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O12 -->

<details markdown="1"><summary>Đối chiếu</summary>

Có, \(\vec u=3\vec v\) và đều khác không.

**Kiểm lỗi**

Hai vectơ cùng phương cần một hệ số k áp dụng cho đủ ba thành phần; không bỏ qua trục z hoặc chia cho 0. Quay về **Kiến thức 3.2**, sau đó tự giải **Bài luyện 58** và **Bài luyện 60** trong Luyện tập.

</details>

### 3.3. Trung điểm và trọng tâm

<!-- LESSON_ID: TOP18-M13; OUTCOME_ID: TOP18-O13; S1_ORIGINAL_OUTCOME: G12-CHII-B08-O03 -->

Trung điểm và trọng tâm của tam giác là trung bình *tọa độ*, không phải trung bình khoảng cách tới gốc. Gọi O là gốc tọa độ. Với trung điểm M của AB, hai độ dời từ A tới M và từ M tới B bằng nhau, nên \(\overrightarrow{OM}=\frac{\overrightarrow{OA}+\overrightarrow{OB}}2\). Với trọng tâm G của tam giác ABC, nếu N là trung điểm BC thì \(\overrightarrow{AG}=\frac23\overrightarrow{AN}\). Thay biểu thức trung điểm N vào hệ thức này, ta được \(\overrightarrow{OG}=\frac{\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}}3\). Vì vậy lấy trung bình theo từng thành phần.

> **Kiến thức cần ghi nhớ**
>
> Với \(A(x_A;y_A;z_A)\), \(B(x_B;y_B;z_B)\), \(C(x_C;y_C;z_C)\), trung điểm AB là \(M\left(\frac{x_A+x_B}2;\frac{y_A+y_B}2;\frac{z_A+z_B}2\right)\); trọng tâm tam giác ABC là \(G\left(\frac{x_A+x_B+x_C}3;\frac{y_A+y_B+y_C}3;\frac{z_A+z_B+z_C}3\right)\).


**Ví dụ**

**Đề bài:** Trong hệ Oxyz, cho tam giác \(A(0;2;4),\ B(2;0;0),\ C(4;4;2)\). Tìm trung điểm M của AB và trọng tâm G của tam giác ABC.

**Lời giải:** Trung điểm \(M\left(\frac{0+2}2;\frac{2+0}2;\frac{4+0}2\right)\), tức \(M(1;1;2)\). Trọng tâm lấy trung bình tọa độ **ba** đỉnh: \(G\left(\frac{0+2+4}3;\frac{2+0+4}3;\frac{4+0+2}3\right)\), tức \(G(2;2;2)\). Kiểm lại bằng trung tuyến CM: \(\overrightarrow{CM}=(-3;-3;0)\), \(\overrightarrow{CG}=(-2;-2;0)=\frac23\overrightarrow{CM}\). Không lấy trung bình độ dài OA, OB, OC.

**Vận dụng**

Cho tam giác ABC với \(A(0;0;2),\ B(2;4;0),\ C(4;2;4)\). Tìm trung điểm M của AB và trọng tâm G của tam giác ABC.

<!-- ITEM_ID: THPT-TOP18-T13; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O13 -->

<details markdown="1"><summary>Đối chiếu</summary>

\(M(1;2;1)\) là trung bình tọa độ của A và B. Trọng tâm G có tọa độ trung bình của cả ba đỉnh: \(G(2;2;2)\), vì \(\frac{0+2+4}3=2\), \(\frac{0+4+2}3=2\) và \(\frac{2+0+4}3=2\).

**Kiểm lỗi**

Trung điểm lấy trung bình của hai điểm; trọng tâm tam giác là trung bình tọa độ ba đỉnh, không lấy hiệu. Quay về **Kiến thức 3.3**, sau đó tự giải **Bài luyện 61** và **Bài luyện 65** trong Luyện tập.

</details>

### 3.4. Tích vô hướng trong tọa độ

<!-- LESSON_ID: TOP18-M14; OUTCOME_ID: TOP18-O14; S1_ORIGINAL_OUTCOME: G12-CHII-B08-O04 -->

Tích vô hướng trong hệ trực chuẩn Oxyz là \(\vec u\cdot\vec v=u_xv_x+u_yv_y+u_zv_z\); chia cho \(\lVert\vec u\rVert\lVert\vec v\rVert\) chỉ khi hai vectơ khác không mới suy góc. Vuông góc nghĩa tích bằng 0; góc giữa các vectơ có thể tù, khác góc không tù giữa hai đường thẳng.

> **Kiến thức cần ghi nhớ**
>
> Tích vô hướng trong hệ trực chuẩn Oxyz là \(\vec u\cdot\vec v=u_xv_x+u_yv_y+u_zv_z\); chia cho \(\lVert\vec u\rVert\lVert\vec v\rVert\) chỉ khi hai vectơ khác không mới suy góc.


**Ví dụ**

**Đề bài:** Cho \(\vec u=(1;2;0)\), \(\vec v=(2;-1;0)\). Dùng tích vô hướng kiểm vuông góc.

**Lời giải:** \(\vec u=(1;2;0)\),\(\vec v=(2;-1;0)\), tích \(1\cdot2+2\cdot(-1)+0=0\), nên hai vectơ khác không vuông góc. Trước khi kết luận vuông góc, kiểm cả hai vectơ đều khác 0; ở đây u và v đều có thành phần không bằng 0. Tích vô hướng bằng 0 nên góc giữa chúng là 90°.

**Vận dụng**

\(\vec u=(1;1;0)\),\(\vec v=(1;-1;0)\). Góc giữa chúng?

<!-- ITEM_ID: THPT-TOP18-T14; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O14 -->

<details markdown="1"><summary>Đối chiếu</summary>

90° vì tích vô hướng \(1-1=0\) và cả hai khác không.

**Kiểm lỗi**

Để tính góc, hai vectơ phải khác 0 và \(\cos\theta=\frac{\vec u\cdot\vec v}{\lVert\vec u\rVert\lVert\vec v\rVert}\). Tích vô hướng 0 với hai vectơ khác 0 là vuông góc. Quay về **Kiến thức 3.4**, sau đó tự giải **Bài luyện 67** và **Bài luyện 70** trong Luyện tập.

</details>

### 3.5. Độ dài và khoảng cách hai điểm

<!-- LESSON_ID: TOP18-M15; OUTCOME_ID: TOP18-O15; S1_ORIGINAL_OUTCOME: G12-CHII-B08-O05 -->

Độ dài vectơ dùng căn tổng bình phương ba thành phần; khoảng cách giữa hai điểm A và B là độ dài của vectơ \(\overrightarrow{AB}\). Điều này nối Pitago phẳng thành ba phương vuông góc, kết quả luôn không âm. Vectơ có ba tọa độ, còn độ dài là một số.

> **Kiến thức cần ghi nhớ**
>
> Độ dài \(|\vec u|=\sqrt{u_x^2+u_y^2+u_z^2}\). Với \(A(x_A;y_A;z_A)\), \(B(x_B;y_B;z_B)\), ta có \(\overrightarrow{AB}=(x_B-x_A;y_B-y_A;z_B-z_A)\), còn \(AB=|\overrightarrow{AB}|=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2+(z_B-z_A)^2}\).


**Ví dụ**

**Đề bài:** Cho hai điểm \(A(1;2;3)\) và \(B(4;6;3)\) trong hệ Oxyz. Tính tọa độ vectơ \(\overrightarrow{AB}\) và độ dài đoạn thẳng AB.

**Lời giải:** Dùng cuối trừ đầu: \(\overrightarrow{AB}=(4-1;6-2;3-3)=(3;4;0)\). Độ dài đoạn thẳng là \(AB=|\overrightarrow{AB}|=\sqrt{3^2+4^2+0^2}=5\). Phân biệt vectơ (ba tọa độ) với độ dài (một số không âm).

**Vận dụng**

Độ dài vectơ \(\vec u=(2;-1;2)\) bằng bao nhiêu?

<!-- ITEM_ID: THPT-TOP18-T15; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O15 -->

<details markdown="1"><summary>Đối chiếu</summary>

\(|\vec u|=\sqrt{4+1+4}=3\).

**Kiểm lỗi**

Độ dài là căn tổng **bình phương cả ba** độ chênh, không phải tổng các chênh lệch. Quay về **Kiến thức 3.5**, sau đó tự giải **Bài luyện 74** và **Bài luyện 75** trong Luyện tập.

</details>

### 3.6. Mô hình chuyển động

<!-- LESSON_ID: TOP18-M16; OUTCOME_ID: TOP18-O16; S1_ORIGINAL_OUTCOME: G12-CHII-B08-O06 -->

Mô hình chuyển động thẳng đều có vị trí \(M(t)=M_0+t\vec v\), ba tọa độ thay đổi độc lập theo tốc độ trên từng trục. Đơn vị tốc độ và thời gian phải tương thích; kiểm \(t\ge0\) nếu bài chỉ nói chuyển động sau khi xuất phát.

> **Kiến thức cần ghi nhớ**
>
> Mô hình chuyển động thẳng đều có vị trí \(M(t)=M_0+t\vec v\), ba tọa độ thay đổi độc lập theo tốc độ trên từng trục.


**Ví dụ**

**Đề bài:** Drone tại \(A=(0;0;5)\) m bay theo \(\vec v=(2;-1;0)\) m/s. Sau 3 giây ở đâu?

**Lời giải:** Drone xuất phát \(A=(0;0;5)\) m, \(\vec v=(2;-1;0)\) m/s. Sau 3 s, ở \((6;-3;5)\) m: cao độ không đổi. Theo công thức vị trí \(A+t\vec v\), ba thành phần là \((0+3\cdot2;0+3\cdot(-1);5+3\cdot0)=(6;-3;5)\). Đơn vị mét khớp vì v tính bằng m/s và thời gian tính bằng giây.

**Vận dụng**

\(M_0=(1;0;2)\), \(\vec v=(0;3;-1)\), \(t=2\). Tọa độ \(M(2)\)?

<!-- ITEM_ID: THPT-TOP18-T16; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O16 -->

<details markdown="1"><summary>Đối chiếu</summary>

\((1;6;0)\).

**Kiểm lỗi**

Vị trí \(M(t)=M_0+t\vec v\) chỉ đúng khi đơn vị thời gian phù hợp với đơn vị vận tốc; kiểm mốc t và miền thời gian vật lí. Quay về **Kiến thức 3.6**, sau đó tự giải **Bài luyện 79** và **Bài luyện 81** trong Luyện tập.

</details>


## 4. Mặt phẳng trong Oxyz

**Từ vị trí một vật đến cả một bức tường.** Ở chặng trước, ta biết drone sau t giây ở \(M(t)=(1+t;1;2+t)\). Bây giờ xét tấm chắn có phương trình **\((P):x+y+z=6\)**. Phương trình không cho một điểm đơn lẻ: bất cứ điểm nào có tổng ba tọa độ bằng 6 đều nằm trên tấm chắn ấy. Vectơ \(\vec n=(1;1;1)\) vuông góc với mặt, nên được gọi là *pháp tuyến*. Hãy thử thế \(M(0)=(1;1;2)\): tổng là 4, chưa thuộc tấm chắn. Bao giờ tổng đạt 6? Ta sẽ tìm ngay khi học phương trình đường thẳng.


![Mặt phẳng P: M₀, hai hướng u,v và pháp tuyến n](../../../../docs/assets/images/thpt/FIG-TOP18-B14-NORMAL-WHITE-R00.svg)

**Đọc hình:** Chỉ \(M_0\) thuộc (P), hai vectơ u,v không cùng phương và pháp tuyến n khác 0. Kiểm \(\vec n\cdot\vec u=\vec n\cdot\vec v=0\); hình phối cảnh không dùng để đo góc.

<!-- AUTHOR_TOPIC18_WHITE_SVG: docs/assets/images/thpt/FIG-TOP18-B14-NORMAL-WHITE-R00.svg; NEW_SOURCE_BLOB: 353ab2fb6f070c03e7895706fd68362c73904fc7; WHITE_BACKGROUND=YES; ORIGINAL_SGK_PNG_REFERENCE_ONLY=Temp_FIG-G12-CHV-B14-R00.png; ORIGINAL_PNG_BLOB=5763cbd3c555a40e2644e9666611a7b4ecaa4070; ORIGINAL_PNG_NOT_VISUALLY_QA_VERIFIED -->

### 4.1. Dựng vectơ pháp tuyến

<!-- LESSON_ID: TOP18-M17; OUTCOME_ID: TOP18-O17; S1_ORIGINAL_OUTCOME: G12-CHV-B14-O01; SCOPE: G12_CHV -->

Một mặt phẳng có vô số hướng nằm trong nó; một vectơ pháp tuyến n khác 0 phải vuông góc với mọi hướng đó. Nếu đã biết hai vectơ chỉ phương u,v **không cùng phương**, tích có hướng \(\vec u\times\vec v\) là một cách dựng n. Tích có hướng bằng 0 khi u,v cùng phương, khi ấy chưa xác định được pháp tuyến mặt bằng cặp vectơ ấy.

> **Kiến thức cần ghi nhớ**
>
> Nếu u,v không cùng phương, một pháp tuyến mặt phẳng là \(\vec n=\vec u\times\vec v\ne\vec0\), vuông góc với cả hai hướng u,v.


**Cách thực sự tính được pháp tuyến (không cần học thuộc ngay):** Nếu hai hướng là \(\vec u=(u_1;u_2;u_3)\), \(\vec v=(v_1;v_2;v_3)\) thì có thể tìm \(\vec n=(a;b;c)\) bằng cách giải hai điều kiện **\(a u_1+b u_2+c u_3=0\)** và **\(a v_1+b v_2+c v_3=0\)**, rồi chọn một nghiệm n khác 0. Một cách gọn hơn là công thức tích có hướng

\[
\vec u\times\vec v=(u_2v_3-u_3v_2;\;u_3v_1-u_1v_3;\;u_1v_2-u_2v_1).
\]

Từng thành phần được tạo để khi nhân vô hướng lại với u hay v, các hạng tử triệt tiêu nhau, nên \(\vec n\cdot\vec u=\vec n\cdot\vec v=0\). **Điều kiện quan trọng:** u và v phải không cùng phương, nếu không tích có hướng trở thành vectơ-không và không xác định được một pháp tuyến khác 0. Tính xong hãy **thử lại hai tích vô hướng**, không chỉ chép công thức.

**Ví dụ**

**Đề bài:** \(\vec u=(1;0;1)\), \(\vec v=(0;1;1)\) là hai hướng độc lập trong mặt. Hãy dựng và kiểm pháp tuyến.

**Lời giải:** \(\vec u=(1;0;1)\), \(\vec v=(0;1;1)\) độc lập. Theo công thức tích có hướng, \(\vec n=\vec u\times\vec v=(-1;-1;1)\). Kiểm \(\vec n\cdot\vec u=-1+1=0\) và \(\vec n\cdot\vec v=-1+1=0\); vì \(\vec n\ne\vec0\), có thể dùng n làm pháp tuyến. Hai hướng không cùng phương làm tích có hướng khác vectơ-không.

**Vận dụng**

\(\vec u=(1;0;0)\),\(\vec v=(0;1;0)\) có pháp tuyến đơn giản nào?

<!-- ITEM_ID: THPT-TOP18-T17; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O17 -->

<details markdown="1"><summary>Đối chiếu</summary>

\(\vec n=(0;0;1)\), vì vuông góc cả u lẫn v.

**Kiểm lỗi**

Nếu hai hướng trong mặt cùng phương thì tích có hướng bằng 0, **không** được chọn vectơ đó làm pháp tuyến. Quay về **Kiến thức 4.1**, sau đó tự giải **Bài luyện 83** và **Bài luyện 86** trong Luyện tập.

</details>

### 4.2. Mặt phẳng qua một điểm

<!-- LESSON_ID: TOP18-M18; OUTCOME_ID: TOP18-O18; S1_ORIGINAL_OUTCOME: G12-CHV-B14-O02; SCOPE: G12_CHV -->

Một mặt phẳng là tập các điểm M có độ dời từ điểm \(M_0\) nằm vuông góc với một pháp tuyến n khác 0. Điều kiện \(\vec n\cdot\overrightarrow{M_0M}=0\) dẫn đến \(A(x-x_0)+B(y-y_0)+C(z-z_0)=0\). Vì vậy cần một điểm đi qua và một hướng pháp tuyến, không thể chỉ biết n để xác định vị trí duy nhất.

> **Kiến thức cần ghi nhớ**
>
> Một mặt phẳng là tập các điểm M có độ dời từ điểm \(M_0\) nằm vuông góc với một pháp tuyến n khác 0.


**Ví dụ**

**Đề bài:** Qua \(M_0=(1;0;-1)\) có \(\vec n=(2;-1;3)\). Viết phương trình mặt và kiểm \(M_0\).

**Lời giải:** \(M_0=(1;0;-1)\),\(\vec n=(2;-1;3)\). Thay vào \(2(x-1)-(y-0)+3(z+1)=0\), thu \(2x-y+3z+1=0\). Thử điểm \(M_0\): \(2-3+1=0\). Thử lại điểm \(M_0\) giúp phát hiện lỗi hệ số tự do.

**Vận dụng**

\(M_0=(0;0;2)\), \(\vec n=(0;0;1)\). Viết mặt phẳng.

<!-- ITEM_ID: THPT-TOP18-T18; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O18 -->

<details markdown="1"><summary>Đối chiếu</summary>

\(z-2=0\), tức \(z=2\).

**Kiểm lỗi**

Mặt có pháp tuyến khác 0 phải đi qua đúng điểm \(M_0\); thay \(M_0\) vào phương trình để kiểm dấu. Quay về **Kiến thức 4.2**, sau đó tự giải **Bài luyện 87** và **Bài luyện 91** trong Luyện tập.

</details>

### 4.3. Mặt phẳng qua ba điểm

<!-- LESSON_ID: TOP18-M19; OUTCOME_ID: TOP18-O19; S1_ORIGINAL_OUTCOME: G12-CHV-B14-O03; SCOPE: G12_CHV -->

Ba điểm phân biệt chưa đủ xác định một mặt: chúng phải **không thẳng hàng**. Lấy \(\overrightarrow{AB}\) và \(\overrightarrow{AC}\) không cùng phương, dựng \(\vec n=\overrightarrow{AB}\times\overrightarrow{AC}\) rồi áp dụng phương trình mặt qua A. Nếu ba điểm thẳng hàng, tích có hướng bằng 0 và tồn tại vô số mặt phẳng qua đường đó.

> **Kiến thức cần ghi nhớ**
>
> Ba điểm phân biệt chưa đủ xác định một mặt: chúng phải **không thẳng hàng**.


**Ví dụ**

**Đề bài:** Qua \(A=(1;0;0)\), \(B=(0;1;0)\), \(C=(0;0;1)\), lập phương trình mặt.

**Lời giải:** \(A=(1;0;0)\), \(B=(0;1;0)\), \(C=(0;0;1)\) cho \(\overrightarrow{AB}=(-1;1;0)\), \(\overrightarrow{AC}=(-1;0;1)\). Một \(\vec n=(1;1;1)\) vuông cả hai; mặt phẳng qua A là \(x+y+z-1=0\). Ba điểm phải không thẳng hàng.

**Vận dụng**

Ba giao điểm trục \(A=(2;0;0)\),\(B=(0;2;0)\),\(C=(0;0;2)\). Mặt phẳng?

<!-- ITEM_ID: THPT-TOP18-T19; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O19 -->

<details markdown="1"><summary>Đối chiếu</summary>

\(x+y+z=2\). Ba điểm không thẳng hàng.

**Kiểm lỗi**

Ba điểm không thẳng hàng mới xác định một mặt duy nhất; kiểm \(\overrightarrow{AB}\times\overrightarrow{AC}\ne\vec0\) và thế lại đủ ba điểm. Quay về **Kiến thức 4.3**, sau đó tự giải **Bài luyện 93** và **Bài luyện 96** trong Luyện tập.

</details>

### 4.4. Mặt phẳng chứa trục

<!-- LESSON_ID: TOP18-M20; OUTCOME_ID: TOP18-O20; S1_ORIGINAL_OUTCOME: G12-CHV-B14-O04; SCOPE: G12_CHV -->

Khi mặt phẳng chứa một đường hoặc trục, mọi vectơ chỉ phương của đường ấy phải vuông góc với pháp tuyến của mặt. Nếu mặt chứa Ox và điểm P ngoài Ox, dùng \(\vec e_1=(1;0;0)\) và \(\overrightarrow{OP}\) làm hai hướng độc lập. Điều kiện 'chứa trục' mạnh hơn 'song song trục' vì mặt còn phải đi qua mọi điểm trên trục.

> **Kiến thức cần ghi nhớ**
>
> Khi mặt phẳng chứa một đường hoặc trục, mọi vectơ chỉ phương của đường ấy phải vuông góc với pháp tuyến của mặt.


**Ví dụ**

**Đề bài:** Mặt phẳng cần đi qua toàn bộ trục Ox và điểm \(P(0;1;1)\) nằm ngoài trục. Hãy tìm một phương trình đơn giản của mặt phẳng.

**Lời giải:** Mặt chứa Ox và \(P=(0;1;1)\). Hai hướng \(\vec e_1=(1;0;0)\), \(\overrightarrow{OP}=(0;1;1)\) nên một pháp tuyến \(\vec n=(0;-1;1)\); mặt qua O là \(y-z=0\). Mặt phải chứa cả trục và điểm đã cho. Chọn hai vectơ độc lập trong mặt: \(\vec e_1=(1;0;0)\) và \(\overrightarrow{OP}=(0;1;1)\). Một pháp tuyến là \((0;-1;1)\), do đó mặt qua O có phương trình \(y-z=0\).

**Vận dụng**

Mặt chứa trục Oz và điểm \((1;1;0)\). Tìm phương trình đơn giản.

<!-- ITEM_ID: THPT-TOP18-T20; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O20 -->

<details markdown="1"><summary>Đối chiếu</summary>

\(x-y=0\), vì mọi điểm Oz có \(x=y=0\) và điểm thêm cũng thỏa.

**Kiểm lỗi**

Mặt chứa cả trục phải nhận **mọi** điểm trên trục, không chỉ qua gốc; cần kiểm cả điểm ngoài trục đã cho. Quay về **Kiến thức 4.4**, sau đó tự giải **Bài luyện 99** và **Bài luyện 102** trong Luyện tập.

</details>

### 4.5. Hai mặt phẳng: song song hay vuông góc?

<!-- LESSON_ID: TOP18-M21; OUTCOME_ID: TOP18-O21; S1_ORIGINAL_OUTCOME: G12-CHV-B14-O05; SCOPE: G12_CHV -->

Hai mặt có pháp tuyến tỉ lệ có cùng phương, nhưng có thể **trùng nhau** hoặc **song song phân biệt**; phải kiểm thêm hằng số hoặc một điểm. Hai mặt vuông góc khi hai pháp tuyến khác không có tích vô hướng bằng 0. Góc giữa mặt là góc nhỏ, không phụ thuộc dấu chọn của pháp tuyến.

> **Kiến thức cần ghi nhớ**
>
> Hai mặt có pháp tuyến tỉ lệ có cùng phương, nhưng có thể **trùng nhau** hoặc **song song phân biệt**; phải kiểm thêm hằng số hoặc một điểm.


**Ví dụ**

**Đề bài:** \((P):x+2y-z=0\) và \((Q):2x+4y-2z+3=0\): trùng hay song song phân biệt?

**Lời giải:** \((P):x+2y-z=0\) và \((Q):2x+4y-2z+3=0\) có pháp tuyến tỉ lệ nhưng không trùng vì các hệ số cả phương trình không tỉ lệ; chúng song song phân biệt. Pháp tuyến cùng phương chưa đủ để hai mặt trùng.

**Vận dụng**

\((P):x+y+z=1\), \((Q):2x+2y+2z=2\). Hai mặt trùng hay song song phân biệt?

<!-- ITEM_ID: THPT-TOP18-T21; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O21 -->

<details markdown="1"><summary>Đối chiếu</summary>

Trùng nhau do chia phương trình Q cho 2 thu đúng P.

**Kiểm lỗi**

Pháp tuyến tỉ lệ chưa đủ phân biệt hai mặt trùng hay song song; kiểm cả hệ số tự do, còn vuông góc dùng tích vô hướng. Quay về **Kiến thức 4.5**, sau đó tự giải **Bài luyện 103** và **Bài luyện 107** trong Luyện tập.

</details>

### 4.6. Khoảng cách điểm đến mặt phẳng

<!-- LESSON_ID: TOP18-M22; OUTCOME_ID: TOP18-O22; S1_ORIGINAL_OUTCOME: G12-CHV-B14-O06; SCOPE: G12_CHV -->

Khoảng cách từ điểm M đến mặt P là độ dài đường vuông góc ngắn nhất, không phải khoảng cách đến một điểm tùy ý của P. Với \((P):Ax+By+Cz+D=0\) có \(\vec n=(A;B;C)\) khác không, lấy trị tuyệt đối của vế trái tại M và chia độ dài pháp tuyến \(\sqrt{A^2+B^2+C^2}\).

> **Kiến thức cần ghi nhớ**
>
> Với \((P):Ax+By+Cz+D=0\) có \((A;B;C)\ne(0;0;0)\), khoảng cách \(d(M,(P))=\frac{|Ax_M+By_M+Cz_M+D|}{\sqrt{A^2+B^2+C^2}}\).


**Ví dụ**

**Đề bài:** Cho mặt phẳng \((P):x+2y+2z-6=0\) và điểm \(O(0;0;0)\). Hãy tính khoảng cách từ O đến (P) và nêu điều kiện áp dụng công thức.

**Lời giải:** \(M=O\), \((P):x+2y+2z-6=0\) có độ dài pháp tuyến \(\lVert\vec n\rVert=3\), trị tuyệt đối −6 là 6, nên \(d=\frac63=2\). Mẫu số là độ dài pháp tuyến, phải khác 0. Pháp tuyến \(\vec n=(1;2;2)\) khác 0 có độ dài \(\sqrt{1+4+4}=3\). Tại O, trị tuyệt đối của vế trái là 6 nên \(d=\frac63=2\); giá trị không âm vì đây là độ dài đoạn vuông góc.

**Vận dụng**

Khoảng cách từ O đến mặt \(z=-5\)?

<!-- ITEM_ID: THPT-TOP18-T22; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O22 -->

<details markdown="1"><summary>Đối chiếu</summary>

5 đơn vị, bởi pháp tuyến \((0;0;1)\), độ chênh z là 5.

**Kiểm lỗi**

Khoảng cách điểm–mặt phải lấy trị tuyệt đối tử và chia độ dài pháp tuyến khác 0, không thể âm. Quay về **Kiến thức 4.6**, sau đó tự giải **Bài luyện 108** và **Bài luyện 112** trong Luyện tập.

</details>

## 5. Đường thẳng và giao điểm

**Tiếp tục chuyến bay đã biết.** Drone có điểm xuất phát \(A=(1;1;2)\) và hướng \(\vec v=(1;0;1)\), do đó đường bay là \(M(t)=(1+t;1;2+t)\). Thế vào \((P):x+y+z=6\), ta được \((1+t)+1+(2+t)=6\), tức **\(4+2t=6\)**; suy ra **\(t=1\) giây**, vị trí gặp tấm chắn **\(M(1)=(2;1;3)\)**. Kiểm lại: \(2+1+3=6\). Một tham số chung cho đủ ba tọa độ chính là cách giữ cho ba phép tính đang nói về *cùng một điểm trên đường bay*.


![Đường thẳng qua M₀ với hướng u và điểm M(t)](../../../../docs/assets/images/thpt/FIG-TOP18-B15-LINE-WHITE-R00.svg)

**Đọc hình:** Xác định \(M_0\), hướng u khác 0; \(M(t)=M_0+t\vec u\) có cùng tham số t ở đủ ba tọa độ. Tại \(t=0\) là \(M_0\), tại \(t=1\) là \(M_0+\vec u\).

<!-- AUTHOR_TOPIC18_WHITE_SVG: docs/assets/images/thpt/FIG-TOP18-B15-LINE-WHITE-R00.svg; NEW_SOURCE_BLOB: d99c0dd13170111f1b72aededc843d64c3ada4d8; WHITE_BACKGROUND=YES; ORIGINAL_SGK_PNG_REFERENCE_ONLY=Temp_FIG-G12-CHV-B15-R00.png; ORIGINAL_PNG_BLOB=8991b0aaa4e532c0b7b8284608462b2286035733; ORIGINAL_PNG_NOT_VISUALLY_QA_VERIFIED -->


![Hai đường giao hình chiếu Oxy nhưng khác cao độ z](../../../../docs/assets/images/thpt/FIG-TOP18-B15-SKEW-WHITE-R00.svg)

**Đọc hình:** Khung trái chiếu lên Oxy trông có giao; khung phải \(d_1\) có \(z=0\), \(d_2\) có \(z=2\) nên không giao trong không gian. Hai hướng không cùng phương thì chúng chéo nhau.

<!-- AUTHOR_TOPIC18_WHITE_SVG: docs/assets/images/thpt/FIG-TOP18-B15-SKEW-WHITE-R00.svg; NEW_SOURCE_BLOB: 1683f44f7d159081caca47152c1bf75c16440488; WHITE_BACKGROUND=YES; ORIGINAL_SGK_PNG_REFERENCE_ONLY=Temp_FIG-G12-CHV-B151-R00.png; ORIGINAL_PNG_BLOB=447205394c355531845746ccf3a2474a2e910974; ORIGINAL_PNG_NOT_VISUALLY_QA_VERIFIED -->

### 5.1. Phương trình tham số đường thẳng

<!-- LESSON_ID: TOP18-M24; OUTCOME_ID: TOP18-O24; S1_ORIGINAL_OUTCOME: G12-CHV-B15-O01; SCOPE: G12_CHV -->

Một đường thẳng vô hạn được mô tả bằng một điểm \(M_0\) nó đi qua và một vectơ chỉ phương u khác không. Mọi điểm trên đường có \(M=M_0+t\vec u\) với t thực. Ba tọa độ phải dùng **cùng một tham số t**; nếu mỗi tọa độ có một t khác, đó không còn là phương trình một đường cụ thể.

> **Kiến thức cần ghi nhớ**
>
> Đường qua \(M_0\) có hướng \(\vec u\ne\vec0\) có phương trình tham số \(M(t)=M_0+t\vec u\) với cùng một tham số thực t ở cả ba tọa độ.


**Ví dụ**

**Đề bài:** Đường qua \(M_0=(1;2;3)\) có hướng \(\vec u=(2;-1;0)\). Viết tham số.

**Lời giải:** \(M_0=(1;2;3)\),\(\vec u=(2;-1;0)\): \(x=1+2t,\ y=2-t,\ z=3\). Độ cao không đổi vì thành phần chỉ phương z bằng 0. Cả ba tọa độ đều dùng một tham số t.

**Vận dụng**

Đường qua O hướng \(\vec u=(1;0;2)\). Viết dạng tham số.

<!-- ITEM_ID: THPT-TOP18-T24; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O24 -->

<details markdown="1"><summary>Đối chiếu</summary>

\(x=t,\ y=0,\ z=2t,\ t\in\mathbb R\).

**Kiểm lỗi**

Vectơ chỉ phương phải khác 0; khi một thành phần bằng 0, tọa độ tương ứng là hằng theo t. Quay về **Kiến thức 5.1**, sau đó tự giải **Bài luyện 114** và **Bài luyện 118** trong Luyện tập.

</details>

### 5.2. Đường thẳng qua hai điểm

<!-- LESSON_ID: TOP18-M25; OUTCOME_ID: TOP18-O25; S1_ORIGINAL_OUTCOME: G12-CHV-B15-O02; SCOPE: G12_CHV -->

Hai điểm phân biệt A,B xác định một đường và cho vectơ chỉ phương \(\overrightarrow{AB}=\overrightarrow{OB}-\overrightarrow{OA}\) khác 0. Lấy A làm điểm \(t=0\); không cần pháp tuyến như phương trình mặt. Nếu \(A=B\), không có hướng \(\overrightarrow{AB}\) khác không để xác định duy nhất một đường.

> **Kiến thức cần ghi nhớ**
>
> Hai điểm phân biệt A,B xác định một đường và cho vectơ chỉ phương \(\overrightarrow{AB}=\overrightarrow{OB}-\overrightarrow{OA}\) khác 0.


**Ví dụ**

**Đề bài:** Đường qua \(A=(0;1;2)\), \(B=(2;3;2)\). Viết tham số và kiểm B.

**Lời giải:** \(A=(0;1;2)\),\(B=(2;3;2)\), \(\overrightarrow{AB}=(2;2;0)\); đường AB có \(x=2t,\ y=1+2t,\ z=2\). Thay \(t=1\) cho B, nên phương trình phù hợp.

**Vận dụng**

Đường qua \(A=(0;0;0)\), \(B=(1;2;3)\) có một dạng tham số?

<!-- ITEM_ID: THPT-TOP18-T25; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O25 -->

<details markdown="1"><summary>Đối chiếu</summary>

\(x=t,\ y=2t,\ z=3t\).

**Kiểm lỗi**

Đường qua A,B cần \(A\ne B\), hướng \(\overrightarrow{OB}-\overrightarrow{OA}\); thử hai giá trị tham số để lấy lại đúng cả hai điểm. Quay về **Kiến thức 5.2**, sau đó tự giải **Bài luyện 119** và **Bài luyện 123** trong Luyện tập.

</details>

### 5.3. Khi một tọa độ hướng bằng không

<!-- LESSON_ID: TOP18-M26; OUTCOME_ID: TOP18-O26; S1_ORIGINAL_OUTCOME: G12-CHV-B15-O03; SCOPE: G12_CHV -->

Phương trình chính tắc của đường thẳng cần cẩn thận khi một thành phần vectơ chỉ phương bằng 0. Chỉ những tỉ số có mẫu khác 0 mới xuất hiện; thành phần bằng 0 thành phương trình tọa độ cố định. Không bao giờ viết phép chia cho 0.

> **Kiến thức cần ghi nhớ**
>
> Dạng chính tắc chỉ viết tỉ số ở tọa độ có thành phần hướng khác 0; thành phần hướng bằng 0 phải viết thành tọa độ cố định, không chia cho 0.


**Ví dụ**

**Đề bài:** Đường \(x=1+2t,\ y=3,\ z=4-t\). Viết dạng chính tắc mà không chia cho 0.

**Lời giải:** \(x=1+2t,\ y=3,\ z=4-t\). Với thành phần \(y=0\) của hướng, giữ \(y=3\) và viết \(\frac{x-1}{2}=\frac{z-4}{-1}\). Tọa độ chỉ phương bằng 0 tương ứng tọa độ cố định.

**Vận dụng**

Đường \(x=2+t,\ y=-1,\ z=3+2t\). Dạng chính tắc an toàn?

<!-- ITEM_ID: THPT-TOP18-T26; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O26 -->

<details markdown="1"><summary>Đối chiếu</summary>

\(\frac{x-2}{1}=\frac{z-3}{2}\); \(y=-1\).

**Kiểm lỗi**

Không viết tỉ số có mẫu 0 trong dạng chính tắc; giữ một phương trình tọa độ hằng ở thành phần hướng bằng 0. Quay về **Kiến thức 5.3**, sau đó tự giải **Bài luyện 125** và **Bài luyện 128** trong Luyện tập.

</details>

### 5.4. Kiểm điểm thuộc đường thẳng

<!-- LESSON_ID: TOP18-M27; OUTCOME_ID: TOP18-O27; S1_ORIGINAL_OUTCOME: G12-CHV-B15-O04; SCOPE: G12_CHV -->

Kiểm tra điểm M thuộc đường bằng cách tìm **một** giá trị t đồng thời thỏa cả ba phương trình tham số. Nếu tọa độ x cho \(t_1\) nhưng y cho \(t_2\) khác, điểm không thuộc đường, dù hai tọa độ trông khớp.

> **Kiến thức cần ghi nhớ**
>
> Kiểm tra điểm M thuộc đường bằng cách tìm **một** giá trị t đồng thời thỏa cả ba phương trình tham số.


**Ví dụ**

**Đề bài:** \(d:x=1+t,\ y=2-2t,\ z=t\). Kiểm \(M=(3;-2;2)\) có thuộc không.

**Lời giải:** Đường \(x=1+t,\ y=2-2t,\ z=t\). \(M=(3;-2;2)\) cho \(t=2\) theo x; \(y=2-4=-2\) và \(z=2\) đều đúng nên M thuộc đường. Không được dùng ba tham số khác nhau cho ba tọa độ.

**Vận dụng**

Điểm \(N=(0;2;0)\) có thuộc \(d:x=t,\ y=2-t,\ z=0\) không?

<!-- ITEM_ID: THPT-TOP18-T27; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O27 -->

<details markdown="1"><summary>Đối chiếu</summary>

Có, chọn \(t=0\) thỏa cả ba.

**Kiểm lỗi**

Điểm thuộc đường phải thỏa **cùng một t** trong cả ba tọa độ, không được chọn ba tham số độc lập. Quay về **Kiến thức 5.4**, sau đó tự giải **Bài luyện 129** và **Bài luyện 133** trong Luyện tập.

</details>

### 5.5. Hai đường có cùng phương

<!-- LESSON_ID: TOP18-M28; OUTCOME_ID: TOP18-O28; S1_ORIGINAL_OUTCOME: G12-CHV-B15-O05; SCOPE: G12_CHV -->

Hai đường có vectơ chỉ phương cùng phương có thể song song phân biệt hoặc trùng nhau; vị trí quyết định bằng một điểm của đường này có thuộc đường kia không. Khi hai hướng khác phương, chúng hoặc cắt nhau hoặc chéo nhau; phải kiểm nghiệm hệ tham số tiếp.

> **Kiến thức cần ghi nhớ**
>
> Hai đường có vectơ chỉ phương cùng phương có thể song song phân biệt hoặc trùng nhau; vị trí quyết định bằng một điểm của đường này có thuộc đường kia không.


**Ví dụ**

**Đề bài:** \(\vec u=(1;2;0)\), \(\vec v=(2;4;0)\). Hai đường trùng khi cùng qua O? Nếu đường thứ hai qua \((0;0;1)\)?

**Lời giải:** \(\vec u=(1;2;0)\) và \(\vec v=(2;4;0)\) cùng phương. Nếu cả hai qua O thì trùng; nếu đường thứ hai qua \((0;0;1)\) thì chúng song song phân biệt. Cùng phương chưa kết luận trùng, phải kiểm vị trí.

**Vận dụng**

Hai đường qua \(A=(0;0;0)\) và \(B=(0;0;1)\), cùng hướng \((1;0;0)\). Quan hệ?

<!-- ITEM_ID: THPT-TOP18-T28; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O28 -->

<details markdown="1"><summary>Đối chiếu</summary>

Song song phân biệt; A không thuộc đường qua B vì z khác.

**Kiểm lỗi**

Hai hướng cùng phương vẫn có thể cho đường trùng hoặc song song phân biệt; kiểm thêm một điểm thuộc nhau. Quay về **Kiến thức 5.5**, sau đó tự giải **Bài luyện 134** và **Bài luyện 138** trong Luyện tập.

</details>

### 5.6. Hai đường cắt hay chéo nhau?

<!-- LESSON_ID: TOP18-M29; OUTCOME_ID: TOP18-O29; S1_ORIGINAL_OUTCOME: G12-CHV-B15-O06; SCOPE: G12_CHV -->

Trong không gian, hai đường không cùng phương **chưa chắc cắt**: chúng còn có thể chéo nhau. Đặt phương trình tham số hai đường \(d_1(t),d_2(s)\), giải hệ ba tọa độ với chỉ hai ẩn t,s; nếu hệ vô nghiệm và hướng không song song, đó là hai đường chéo nhau.

> **Kiến thức cần ghi nhớ**
>
> Trong không gian, hai đường không cùng phương **chưa chắc cắt**: chúng còn có thể chéo nhau.


**Ví dụ**

**Đề bài:** \(d_1(t)=(t;0;0)\), \(d_2(s)=(0;s;1)\): hai đường cắt hay chéo?

**Lời giải:** \(d_1(t)=(t;0;0)\) và \(d_2(s)=(0;s;1)\). Nếu cắt, tọa độ z phải đồng thời 0 và 1, bất khả; hai hướng \((1;0;0),(0;1;0)\) khác phương nên chéo nhau. Trong không gian, hai hướng khác nhau có thể chéo nhau.

**Vận dụng**

\(d_1(t)=(t;0;0)\),\(d_2(s)=(0;s;0)\). Chúng cắt tại đâu?

<!-- ITEM_ID: THPT-TOP18-T29; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O29 -->

<details markdown="1"><summary>Đối chiếu</summary>

Tại \(O=(0;0;0)\) với \(t=s=0\).

**Kiểm lỗi**

Muốn chứng minh hai đường cắt nhau phải giải đủ ba tọa độ với hai tham số; hình chiếu giao nhau không đủ, hai đường có thể chéo. Quay về **Kiến thức 5.6**, sau đó tự giải **Bài luyện 140** và **Bài luyện 143** trong Luyện tập.

</details>

### 5.7. Tìm giao giữa đường và mặt

<!-- LESSON_ID: TOP18-M30; OUTCOME_ID: TOP18-O30; S1_ORIGINAL_OUTCOME: G12-CHV-B15-O07; SCOPE: G12_CHV -->

Giao điểm của đường với mặt tìm bằng thay \(M(t)=M_0+t\vec u\) vào \(Ax+By+Cz+D=0\). Nếu hệ số t là \(\vec n\cdot\vec u\) khác 0 thì có một giao điểm; nếu \(\vec n\cdot\vec u=0\), kiểm hằng số: bằng 0 thì đường nằm trong mặt, khác 0 thì song song phân biệt.

> **Kiến thức cần ghi nhớ**
>
> Giao điểm của đường với mặt tìm bằng thay \(M(t)=M_0+t\vec u\) vào \(Ax+By+Cz+D=0\).


**Ví dụ**

**Đề bài:** \(d(t)=(1+t;0;2-t)\), \((P):x=0\), \((Q):x+z=4\). Tìm giao d với (P) và quan hệ d với (Q).

**Lời giải:** \(d(t)=(1+t;0;2-t)\), \((P):x=0\). Thay \(x=1+t=0\) suy \(t=-1\), điểm giao \((0;0;3)\). Với \((Q):x+z=4\), vế trái luôn 3 nên đường song song Q nhưng không nằm trong Q. Thay tham số vào mặt giúp phân biệt cắt, nằm trong và song song.

**Vận dụng**

\(d(t)=(t;1;2)\), \((P):z=2\). Quan hệ?

<!-- ITEM_ID: THPT-TOP18-T30; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O30 -->

<details markdown="1"><summary>Đối chiếu</summary>

Đường nằm trong P vì mọi t đều \(z=2\).

**Kiểm lỗi**

Nếu \(\vec n\cdot\vec u=0\) thì không chia để tìm giao: thử một điểm gốc để phân biệt đường nằm trong mặt và song song phân biệt. Quay về **Kiến thức 5.7**, sau đó tự giải **Bài luyện 145** và **Bài luyện 148** trong Luyện tập.

</details>

## 6. Góc và quan hệ vị trí

**Vì sao độ dốc không phải góc với pháp tuyến?** Hướng drone \(\vec v=(1;0;1)\) có độ tăng cao 1 m cho mỗi 1 m chuyển dời theo Ox, nên góc giữa đường bay và mặt phẳng sàn Oxy bằng \(45^\circ\). Nếu chuyển sang bức tường \((P):x+y+z=6\), phải dùng pháp tuyến \(\vec n=(1;1;1)\): vì \(\vec v\cdot\vec n=2,\ |\vec v|=\sqrt2,\ |\vec n|=\sqrt3\) nên \(\sin\theta=\frac2{\sqrt6}\). Góc đổi vì mặt dùng để so đã đổi. Không được dùng cùng một góc chỉ vì mũi tên bay không thay đổi.


![Góc đường d với hình chiếu d′ lên mặt phẳng P](../../../../docs/assets/images/thpt/FIG-TOP18-B16-LINE-PLANE-ANGLE-WHITE-R00.svg)

**Đọc hình:** Đọc d, d' trong \((P)\), pháp tuyến \(\vec n\) và góc \(\theta\). Khi hình chiếu là một đường thẳng, góc đường–mặt là góc với hình chiếu. Nếu đường vuông góc mặt thì hình chiếu co thành điểm, góc đường–mặt bằng \(90^\circ\). Với vectơ chỉ phương \(\vec u\) và pháp tuyến \(\vec n\) đều khác không, dùng \(\sin\theta=\frac{|\vec u\cdot\vec n|}{|\vec u||\vec n|}\), không phải cos của góc trực tiếp với pháp tuyến.

<!-- AUTHOR_TOPIC18_WHITE_SVG: docs/assets/images/thpt/FIG-TOP18-B16-LINE-PLANE-ANGLE-WHITE-R00.svg; NEW_SOURCE_BLOB: dafbebf04cbe7cc740eb6d718bf22b6724411737; WHITE_BACKGROUND=YES; ORIGINAL_SGK_PNG_REFERENCE_ONLY=Temp_FIG-G12-CHV-B16-R00.png; ORIGINAL_PNG_BLOB=4dbe38abdc36744cedf69e4e411c8449d7f0b31d; ORIGINAL_PNG_NOT_VISUALLY_QA_VERIFIED -->


![Hai mặt P,Q với pháp tuyến n₁,n₂ khác 0](../../../../docs/assets/images/thpt/FIG-TOP18-B16-TWO-PLANES-WHITE-R00.svg)

**Đọc hình:** Chỉ hai mặt (P),(Q) và hai pháp tuyến \(\vec n_1,\vec n_2\) khác 0. Góc hai mặt lấy góc nhỏ nhờ trị tuyệt đối của tích vô hướng chia tích chuẩn; đổi chiều n không đổi kết quả.

<!-- AUTHOR_TOPIC18_WHITE_SVG: docs/assets/images/thpt/FIG-TOP18-B16-TWO-PLANES-WHITE-R00.svg; NEW_SOURCE_BLOB: 5eac9686ebce6bef48556067a61dfa71fa41b7a3; WHITE_BACKGROUND=YES; ORIGINAL_SGK_PNG_REFERENCE_ONLY=Temp_FIG-G12-CHV-B161-R00.png; ORIGINAL_PNG_BLOB=a6d03ef5310ad93ce2cb8cebc03ff6e54bed55fb; ORIGINAL_PNG_NOT_VISUALLY_QA_VERIFIED -->

### 6.1. Góc giữa hai đường

<!-- LESSON_ID: TOP18-M31; OUTCOME_ID: TOP18-O31; S1_ORIGINAL_OUTCOME: G12-CHV-B16-O01; SCOPE: G12_CHV -->

Góc giữa hai đường thẳng không định hướng được lấy là góc nhỏ 0°–90°. Nếu u,v là hai vectơ chỉ phương khác 0 thì \(\cos\theta=\frac{\lvert\vec u\cdot\vec v\rvert}{\lVert\vec u\rVert\lVert\vec v\rVert}\). Trị tuyệt đối cần thiết: đảo hướng vectơ không đổi góc hai đường.

> **Kiến thức cần ghi nhớ**
>
> Với hai vectơ chỉ phương u,v khác 0, góc nhỏ giữa hai đường thẳng thỏa \(\cos\theta=\frac{\lvert\vec u\cdot\vec v\rvert}{\lVert\vec u\rVert\lVert\vec v\rVert}\), \(0^\circ\le\theta\le90^\circ\).


**Ví dụ**

**Đề bài:** Góc nhỏ giữa hai đường có hướng \(\vec u=(1;0;0)\), \(\vec v=(1;1;0)\) là bao nhiêu?

**Lời giải:** \(\vec u=(1;0;0)\),\(\vec v=(1;1;0)\), tích 1 và độ dài 1,\(\sqrt2\), nên \(\cos\theta=\frac1{\sqrt2}\Rightarrow\theta=45^\circ\). Góc hai đường dùng trị tuyệt đối để không phụ thuộc chiều vectơ.

**Vận dụng**

\(\vec u=(1;0;0)\),\(\vec v=(-1;0;0)\), góc giữa hai đường?

<!-- ITEM_ID: THPT-TOP18-T31; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O31 -->

<details markdown="1"><summary>Đối chiếu</summary>

0°, không phải 180°, vì hai phương cùng đường dù mũi tên ngược.

**Kiểm lỗi**

Góc giữa hai **đường** là góc không tù; dùng trị tuyệt đối tích vô hướng và hai hướng khác 0. Quay về **Kiến thức 6.1**, sau đó tự giải **Bài luyện 151** và **Bài luyện 154** trong Luyện tập.

</details>

### 6.2. Góc giữa đường và mặt

<!-- LESSON_ID: TOP18-M32; OUTCOME_ID: TOP18-O32; S1_ORIGINAL_OUTCOME: G12-CHV-B16-O02; SCOPE: G12_CHV -->

Nếu đường d không vuông góc mặt \((P)\), góc \(\theta\) giữa chúng là góc không tù giữa d và hình chiếu vuông góc của nó trên \((P)\). Nếu \(d\perp(P)\), hình chiếu chỉ là một điểm; khi đó góc đường–mặt bằng \(90^\circ\). Do đó \(\theta\in[0^\circ;90^\circ]\). Với vectơ chỉ phương \(\vec u\ne\vec0\) và pháp tuyến \(\vec n\ne\vec0\), góc đường–mặt phụ với góc không tù giữa hai phương của \(\vec u,\vec n\).

> **Kiến thức cần ghi nhớ**
>
> Với \(\vec u,\vec n\) đều khác không, góc đường–mặt thỏa \(\sin\theta=\frac{|\vec u\cdot\vec n|}{|\vec u||\vec n|}\), \(0^\circ\le\theta\le90^\circ\). Công thức áp dụng cả khi hình chiếu co thành điểm.


**Ví dụ**

**Đề bài:** Cho đường có vectơ chỉ phương \(\vec u=(3;0;4)\) và mặt có pháp tuyến \(\vec n=(0;0;1)\). Tính góc đường–mặt.

**Lời giải:** \(\vec u\cdot\vec n=4,\ |\vec u|=5,\ |\vec n|=1\), nên \(\sin\theta=\frac45\), suy ra \(\theta\approx53{,}13^\circ\). Nếu dùng cos bằng \(\frac45\) thì được \(36{,}87^\circ\), là góc không tù với phương pháp tuyến, không phải góc đường–mặt. Nếu \(\vec u\cdot\vec n=0\) thì \(\theta=0^\circ\) (đường song song hoặc nằm trong mặt).

**Vận dụng**

Đường có hướng \((0;0;1)\), mặt \(z=0\). Góc đường–mặt bằng bao nhiêu?

<!-- ITEM_ID: THPT-TOP18-T32; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O32 -->

<details markdown="1"><summary>Đối chiếu</summary>

\(90^\circ\) vì hướng đường trùng phương pháp tuyến, nên hình chiếu của đường co thành một điểm. Công thức cho \(\sin\theta=1\).

**Kiểm lỗi**

Góc giữa đường và mặt **phụ** với góc không tù giữa hướng đường và phương pháp tuyến; dùng \(\sin\theta=\frac{|\vec u\cdot\vec n|}{|\vec u||\vec n|}\). Quay về **Kiến thức 6.2**, sau đó tự giải **Bài luyện 156** và **Bài luyện 159** trong Luyện tập.

</details>

### 6.3. Góc giữa hai mặt

<!-- LESSON_ID: TOP18-M33; OUTCOME_ID: TOP18-O33; S1_ORIGINAL_OUTCOME: G12-CHV-B16-O03; SCOPE: G12_CHV -->

Góc nhỏ giữa hai mặt P,Q phụ thuộc pháp tuyến \(\vec n_1,\vec n_2\) khác 0; \(\cos\theta=\frac{\lvert\vec n_1\cdot\vec n_2\rvert}{\lVert\vec n_1\rVert\lVert\vec n_2\rVert}\). Khi pháp tuyến vuông góc, hai mặt vuông góc; khi pháp tuyến cùng phương, hai mặt song song hoặc trùng và góc 0. Đừng lấy góc nhị diện tù làm góc giữa hai mặt.

> **Kiến thức cần ghi nhớ**
>
> Góc nhỏ giữa hai mặt P,Q phụ thuộc pháp tuyến \(\vec n_1,\vec n_2\) khác 0; \(\cos\theta=\frac{\lvert\vec n_1\cdot\vec n_2\rvert}{\lVert\vec n_1\rVert\lVert\vec n_2\rVert}\).


**Ví dụ**

**Đề bài:** Hai mặt có pháp tuyến \(\vec n_1=(1;0;0)\), \(\vec n_2=(1;1;0)\). Tính góc và thử đổi dấu \(\vec n_2\).

**Lời giải:** \(\vec n_1=(1;0;0)\),\(\vec n_2=(1;1;0)\), \(\cos\theta=\frac1{\sqrt2}\Rightarrow\theta=45^\circ\). Thay \(\vec n_2\) bằng \((-1;-1;0)\), kết quả vẫn 45° vì trị tuyệt đối. Đổi dấu pháp tuyến không đổi góc hai mặt.

**Vận dụng**

Hai mặt \((P):x=0\),\((Q):y=0\) có góc bao nhiêu?

<!-- ITEM_ID: THPT-TOP18-T33; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O33 -->

<details markdown="1"><summary>Đối chiếu</summary>

90°, vì \(\vec n_P=(1;0;0)\),\(\vec n_Q=(0;1;0)\) vuông góc.

**Kiểm lỗi**

Góc hai mặt dùng hai pháp tuyến khác 0 và góc không tù; đổi dấu pháp tuyến không đổi góc. Quay về **Kiến thức 6.3**, sau đó tự giải **Bài luyện 162** và **Bài luyện 165** trong Luyện tập.

</details>

### 6.4. Nhận diện đường–mặt song song

<!-- LESSON_ID: TOP18-M34; OUTCOME_ID: TOP18-O34; S1_ORIGINAL_OUTCOME: G12-CHV-B16-O04; SCOPE: G12_CHV -->

Cùng chữ 'song song' và 'vuông góc' nhưng các cặp đối tượng cần điều kiện khác nhau. Đường–mặt: \(\vec n\cdot\vec u=0\) chỉ khẳng định hướng song song mặt, còn phải thử điểm để phân biệt đường nằm trong mặt hay song song phân biệt. Mặt–mặt: \(\vec n_1,\vec n_2\) cùng phương, cũng phải so hệ số tự do để loại trùng.

> **Kiến thức cần ghi nhớ**
>
> Đường d có hướng u khác 0, mặt (P) có pháp tuyến n khác 0: \(\vec u\cdot\vec n=0\) chỉ cho biết phương của d song song (P); kiểm điểm trên d để phân biệt d nằm trong (P) hay song song phân biệt.


**Ví dụ**

**Đề bài:** Đường \(d(t)=(t;1;2)\), mặt \(z=0\). Đường nằm trong hay song song phân biệt?

**Lời giải:** Mặt \(z=0\) và đường \(d(t)=(t;1;2)\) có \(\vec u=(1;0;0)\), \(\vec n=(0;0;1)\), \(\vec u\cdot\vec n=0\); vì \(z=2\) mọi t nên đường song song phân biệt, không nằm trong mặt. Phải kiểm một điểm thuộc mặt.

**Vận dụng**

Đường \(d(t)=(t;0;0)\), mặt \(z=0\). Quan hệ?

<!-- ITEM_ID: THPT-TOP18-T34; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O34 -->

<details markdown="1"><summary>Đối chiếu</summary>

Đường nằm trong mặt vì \(z=0\) với mọi t.

**Kiểm lỗi**

\(\vec u\cdot\vec n=0\) mới chỉ xác định hướng song song mặt; kiểm điểm thuộc mặt để phân biệt nằm trong và song song phân biệt. Quay về **Kiến thức 6.4**, sau đó tự giải **Bài luyện 169** và **Bài luyện 170** trong Luyện tập.

</details>

### 6.5. Góc dốc và độ nghiêng

<!-- LESSON_ID: TOP18-M35; OUTCOME_ID: TOP18-O35; S1_ORIGINAL_OUTCOME: G12-CHV-B16-O05; SCOPE: G12_CHV -->

Trong thiết kế đường dốc hoặc băng chuyền, độ nghiêng đối với nền ngang là góc đường–mặt, được tính từ tỉ số **độ tăng cao / chiều dài dốc** khi dùng sin, hoặc **độ tăng cao / quãng ngang** khi dùng tan. Hai tỉ số không giống nhau, và đơn vị chiều dài phải thống nhất.

> **Kiến thức cần ghi nhớ**
>
> Đường dốc có độ tăng cao h, khoảng ngang \(d>0\), chiều dài \(L>0\): \(\tan\theta=\frac hd\), \(\sin\theta=\frac hL\).


**Ví dụ**

**Đề bài:** Dốc cao 5 m, ngang 12 m. Tính chiều dài, sin và tan góc dốc.

**Lời giải:** Đường dốc nâng cao 5 m trên quãng ngang 12 m thì chiều dài dốc 13 m theo Pitago; \(\sin\theta=\frac5{13}\), \(\tan\theta=\frac5{12}\). Không lấy θ sao cho \(\sin\theta=\frac5{12}\). Độ dài dốc là cạnh huyền, không phải khoảng ngang.

**Vận dụng**

Một dốc cao 3 m trên nền ngang 4 m, chiều dài dốc 5 m. \(\sin\theta\)?

<!-- ITEM_ID: THPT-TOP18-T35; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O35 -->

<details markdown="1"><summary>Đối chiếu</summary>

\(\frac35\), còn \(\tan\theta=\frac34\).

**Kiểm lỗi**

Đừng lấy độ dài ngang làm cạnh huyền; cần tam giác vuông có cao, ngang và đoạn cáp để phân biệt sin với tan. Quay về **Kiến thức 6.5**, sau đó tự giải **Bài luyện 174** và **Bài luyện 175** trong Luyện tập.

</details>

## 7. Mặt cầu và thiết diện

**Từ đường bay đến vùng bao phủ.** Giả sử tại điểm gặp tấm chắn \(C=(2;1;3)\), thiết bị phát sóng có vùng phủ dạng cầu bán kính **\(R=5\,\mathrm m\)**. Mặt sàn có \(z=0\) nên cách tâm C một đoạn **\(d=3\,\mathrm m\)**. Tam giác vuông tạo bởi tâm C, chân \(H=(2;1;0)\) và một điểm trên đường tròn giao cho \(r^2+d^2=R^2\), tức \(r=\sqrt{25-9}=4\) m. Đây là lí do bán kính vòng phủ trên sàn nhỏ hơn bán kính hình cầu, dù hình minh họa trông gần bằng nhau.

[Mở mô hình mặt phẳng cắt mặt cầu](Temp_THPT_TOPIC18_OXYZ_SPHERE_GEOMETRY_R00_20261114.html) — chọn phần **“Mặt phẳng cắt mặt cầu”**, đặt \(R=5\) và \(d=3\) rồi thử lần lượt \(d=5\) và \(d=6\). Suy đoán kết quả trước khi kéo thanh trượt.

<!-- AUTHOR_INTERACTIVE_PLACEMENT: MODEL_ID=SLM-TOP18-OXYZ-GEOMETRY-R00; SCENE=SPHERE_PLANE; OUTCOMES=TOP18-O40/TOP18-O23; PUBLIC_DISCOVERY_NO_MASTERY -->


![Mặt cắt kinh tuyến R=5, d=3, r=4 của cầu và mặt phẳng](../../../../docs/assets/images/thpt/FIG-TOP18-B17-SPHERE-SECTION-WHITE-R00.svg)

**Đọc hình:** Chỉ tâm I, khoảng cách vuông góc \(d=3\) từ I tới (P), bán kính cầu \(R=5\), bán kính thiết diện \(r=4\). Pitago \(r^2+d^2=R^2\); \(d=R\) tiếp xúc, \(d>R\) không có giao.

<!-- AUTHOR_TOPIC18_WHITE_SVG: docs/assets/images/thpt/FIG-TOP18-B17-SPHERE-SECTION-WHITE-R00.svg; NEW_SOURCE_BLOB: 258d0059806bdc840e9c5200ca8944168aa62f67; WHITE_BACKGROUND=YES; ORIGINAL_SGK_PNG_REFERENCE_ONLY=Temp_FIG-G12-CHV-B17-R00.png; ORIGINAL_PNG_BLOB=3a87aa63ef68d3c12c170a213f7ea6a4ab719532; ORIGINAL_PNG_NOT_VISUALLY_QA_VERIFIED -->

### 7.1. Mặt cầu từ tâm và bán kính

<!-- LESSON_ID: TOP18-M36; OUTCOME_ID: TOP18-O36; S1_ORIGINAL_OUTCOME: G12-CHV-B17-O01; SCOPE: G12_CHV -->

Mặt cầu tâm C bán kính \(R>0\) gồm các điểm M có \(CM=R\). Bình phương khoảng cách giúp viết phương trình \((x-a)^2+(y-b)^2+(z-c)^2=R^2\), không phải một mặt phẳng vì có các số hạng bậc hai.

> **Kiến thức cần ghi nhớ**
>
> Mặt cầu tâm C bán kính \(R>0\) gồm các điểm M có \(CM=R\).


**Ví dụ**

**Đề bài:** Lập mặt cầu \(C=(1;-2;3)\), \(R=4\) và thử điểm \(M=(5;-2;3)\).

**Lời giải:** Tâm \(C=(1;-2;3)\), \(R=4\) cho \((x-1)^2+(y+2)^2+(z-3)^2=16\). Kiểm \(M=(5;-2;3)\) thỏa. Kiểm bằng bình phương khoảng cách bằng \(R^2\).

**Vận dụng**

Mặt cầu tâm O bán kính 5 có phương trình nào?

<!-- ITEM_ID: THPT-TOP18-T36; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O36 -->

<details markdown="1"><summary>Đối chiếu</summary>

\(x^2+y^2+z^2=25\).

**Kiểm lỗi**

Phương trình mặt cầu phải dùng dấu trừ tọa độ tâm trong ngoặc bình phương và bán kính \(R>0\). Quay về **Kiến thức 7.1**, sau đó tự giải **Bài luyện 177** và **Bài luyện 180** trong Luyện tập.

</details>

### 7.2. Hoàn thành bình phương tìm mặt cầu

<!-- LESSON_ID: TOP18-M37; OUTCOME_ID: TOP18-O37; S1_ORIGINAL_OUTCOME: G12-CHV-B17-O02; SCOPE: G12_CHV -->

Từ phương trình \(x^2+y^2+z^2+Dx+Ey+Fz+G=0\), hoàn thành bình phương từng biến để tìm tâm \((-\frac D2;-\frac E2;-\frac F2)\) và \(R^2=\frac{D^2+E^2+F^2}{4}-G\). Chỉ có mặt cầu thực bán kính dương nếu \(R^2>0\); \(R^2=0\) chỉ cho một điểm.

> **Kiến thức cần ghi nhớ**
>
> Từ phương trình \(x^2+y^2+z^2+Dx+Ey+Fz+G=0\), hoàn thành bình phương từng biến để tìm tâm \((-\frac D2;-\frac E2;-\frac F2)\) và \(R^2=\frac{D^2+E^2+F^2}{4}-G\).


**Ví dụ**

**Đề bài:** Cho phương trình \(x^2+y^2+z^2-2x+4y-6z+5=0\). Hãy hoàn thành bình phương để tìm tâm và bán kính nếu là mặt cầu.

**Lời giải:** \(x^2+y^2+z^2-2x+4y-6z+5=0\) thành \((x-1)^2+(y+2)^2+(z-3)^2=9\), nên tâm \((1;-2;3)\), \(R=3\). Hoàn thành bình phương đúng cả hằng số. Nhóm ba bình phương: \((x-1)^2+(y+2)^2+(z-3)^2=1+4+9-5=9\). Vì \(R^2=9>0\), đây là mặt cầu tâm \((1;-2;3)\) và bán kính \(R=3\).

**Vận dụng**

\(x^2+y^2+z^2-4x=0\) có tâm, bán kính?

<!-- ITEM_ID: THPT-TOP18-T37; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O37 -->

<details markdown="1"><summary>Đối chiếu</summary>

\((2;0;0)\), \(R=2\) vì \((x-2)^2+y^2+z^2=4\).

**Kiểm lỗi**

Hoàn thành bình phương phải điều chỉnh hằng số cùng lúc; xem \(R^2\) trước khi lấy căn, nếu âm không có cầu thực. Quay về **Kiến thức 7.2**, sau đó tự giải **Bài luyện 182** và **Bài luyện 185** trong Luyện tập.

</details>

### 7.3. Điểm trong, trên hay ngoài cầu

<!-- LESSON_ID: TOP18-M38; OUTCOME_ID: TOP18-O38; S1_ORIGINAL_OUTCOME: G12-CHV-B17-O03; SCOPE: G12_CHV -->

Muốn biết điểm nằm trong/trên/ngoài mặt cầu, so \(CM^2\) với \(R^2\) thay vì bấm căn. Nếu nhỏ hơn là nằm trong, bằng là trên, lớn hơn là ngoài. Điều này là bài kiểm tra vị trí tương đối, không tự cho biết điểm có 'phía trước' trên hình phối cảnh.

> **Kiến thức cần ghi nhớ**
>
> Muốn biết điểm nằm trong/trên/ngoài mặt cầu, so \(CM^2\) với \(R^2\) thay vì bấm căn.


**Ví dụ**

**Đề bài:** Trong hệ Oxyz, mặt cầu có tâm \(O(0;0;0)\) và bán kính \(R=5\). Hãy xác định \(M(3;4;0)\) và \(N(1;1;1)\) nằm trong, trên hay ngoài mặt cầu.

**Lời giải:** Mặt cầu tâm O, \(R=5\); \(M=(3;4;0)\) có \(OM^2=9+16=25\) nên nằm trên. \(N=(1;1;1)\) có \(ON^2=3<25\) nên nằm trong. So \(CM^2\) với \(R^2\) tránh bấm căn không cần thiết.

**Vận dụng**

Với mặt cầu tâm O \(R=3\), điểm \((0;0;4)\) ở đâu?

<!-- ITEM_ID: THPT-TOP18-T38; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O38 -->

<details markdown="1"><summary>Đối chiếu</summary>

Ngoài mặt vì khoảng cách bình phương \(16>9\).

**Kiểm lỗi**

So bình phương khoảng cách từ điểm đến **tâm C** với \(R^2\): nhỏ hơn nằm trong, bằng trên, lớn hơn ngoài. Quay về **Kiến thức 7.3**, sau đó tự giải **Bài luyện 186** và **Bài luyện 190** trong Luyện tập.

</details>

### 7.4. Mặt cầu qua hai đầu đường kính

<!-- LESSON_ID: TOP18-M39; OUTCOME_ID: TOP18-O39; S1_ORIGINAL_OUTCOME: G12-CHV-B17-O04; SCOPE: G12_CHV -->

Nếu hai điểm A,B là hai đầu đường kính của mặt cầu, tâm C là trung điểm AB, bán kính \(R=\frac{AB}{2}\). Không nhầm độ dài đường kính với bán kính; tính trung điểm và độ dài phải theo ba tọa độ.

> **Kiến thức cần ghi nhớ**
>
> Nếu hai điểm A,B là hai đầu đường kính của mặt cầu, tâm C là trung điểm AB, bán kính \(R=\frac{AB}{2}\).


**Ví dụ**

**Đề bài:** Cầu có đường kính \(A=(0;0;0)\), \(B=(2;4;0)\). Tìm tâm, bán kính, phương trình.

**Lời giải:** \(A=(0;0;0)\),\(B=(2;4;0)\) cho \(C=(1;2;0)\), \(AB=\sqrt{20}=2\sqrt5\), \(R=\sqrt5\); phương trình \((x-1)^2+(y-2)^2+z^2=5\). Bán kính bằng nửa đường kính.

**Vận dụng**

\(A=(-2;0;0)\),\(B=(2;0;0)\). Viết phương trình mặt cầu đường kính AB.

<!-- ITEM_ID: THPT-TOP18-T39; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O39 -->

<details markdown="1"><summary>Đối chiếu</summary>

Tâm O và bán kính 2 nên \(x^2+y^2+z^2=4\).

**Kiểm lỗi**

Mặt cầu đường kính AB có tâm trung điểm AB, bán kính \(\frac{AB}{2}\), không phải lấy đầu mút làm tâm. Quay về **Kiến thức 7.4**, sau đó tự giải **Bài luyện 194** và **Bài luyện 195** trong Luyện tập.

</details>

### 7.5. Tiếp xúc và thiết diện mặt cầu

<!-- LESSON_ID: TOP18-M40; OUTCOME_ID: TOP18-O40; S1_ORIGINAL_OUTCOME: G12-CHV-B17-O05; SCOPE: G12_CHV -->

Giao của mặt cầu bán kính R với mặt phẳng phụ thuộc khoảng cách d từ tâm đến mặt: \(d>R\) không có giao, \(d=R\) tiếp xúc một điểm, \(d<R\) cắt theo đường tròn bán kính \(\sqrt{R^2-d^2}\). Tâm đường tròn là chân vuông góc từ tâm mặt cầu đến mặt phẳng.

> **Kiến thức cần ghi nhớ**
>
> Giao của mặt cầu bán kính R với mặt phẳng phụ thuộc khoảng cách d từ tâm đến mặt: \(d>R\) không có giao, \(d=R\) tiếp xúc một điểm, \(d<R\) cắt theo đường tròn bán kính \(\sqrt{R^2-d^2}\).


**Ví dụ**

**Đề bài:** Cầu O, \(R=5\): mặt \(z=3\) tạo thiết diện gì và mặt \(z=5\) có tiếp xúc không?

**Lời giải:** Mặt cầu tâm O \(R=5\) với mặt \(z=3\) có \(d=3\) và thiết diện bán kính 4. Với mặt \(z=5\) là tiếp xúc ở \((0;0;5)\). Phân loại theo d so với R.

**Vận dụng**

Mặt cầu tâm O \(R=5\), mặt \(z=6\) có giao không?

<!-- ITEM_ID: THPT-TOP18-T40; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O40 -->

<details markdown="1"><summary>Đối chiếu</summary>

Không, vì khoảng cách tâm–mặt \(d=6>R\).

**Kiểm lỗi**

Bán kính thiết diện không luôn bằng R; trước hết lấy d từ tâm tới mặt, phân ba trường hợp \(d<R\), \(d=R\), \(d>R\). Quay về **Kiến thức 7.5**, sau đó tự giải **Bài luyện 197** và **Bài luyện 201** trong Luyện tập.

</details>

## 8. Vận dụng tích hợp sau B17 (tự chọn)

**Khép lại hành trình của một bài toán.** Câu chuyện drone ban đầu có thể được giải mà không học rời rạc sáu công thức: (1) chọn hệ trục và định vị \(A=(1;1;2)\); (2) đọc vectơ \(\vec v=(1;0;1)\) để viết M(t); (3) tìm lúc M(t) thuộc mặt \(x+y+z=6\), được \(t=1\) và \(C=(2;1;3)\); (4) với cầu tâm C bán kính 5, tìm \(d(C,(Oxy))=3\) và vòng giao mặt sàn bán kính 4. Mỗi bước chỉ sử dụng một ý nghĩa đã hình thành ở các chặng trước. Đây là ví dụ xuyên suốt, **không phải một câu kiểm tra có ID riêng**, và phần kết nối mặt cầu–mặt phẳng chỉ học sau kiến thức B17.

### 8.1. Mặt cắt và khoảng cách đến mặt cầu

<!-- LESSON_ID: TOP18-M23; OUTCOME_ID: TOP18-O23; S1_ORIGINAL_OUTCOME: G12-CHV-B14-O07; SCOPE: OPTIONAL_AFTER_B17 -->

**Mở rộng sau khi đã học mặt cầu.** Khi cắt mặt cầu bằng mặt phẳng, chỉ cần so khoảng cách d từ tâm C đến mặt phẳng với bán kính R: \(d>R\) không cắt, \(d=R\) tiếp xúc, \(d<R\) cho đường tròn bán kính \(\sqrt{R^2-d^2}\). Đây là ứng dụng kết hợp khoảng cách điểm–mặt với tính chất mặt cầu.

> **Kiến thức cần ghi nhớ**
>
> Với mặt cầu tâm C bán kính \(R>0\) và mặt phẳng cách tâm \(d\ge0\), nếu \(d<R\), thiết diện là đường tròn bán kính \(\sqrt{R^2-d^2}\); \(d=R\) tiếp xúc một điểm; \(d>R\) không cắt.


**Ví dụ**

**Đề bài:** Cho mặt cầu tâm \(C(1;-2;3)\), bán kính 13 và mặt phẳng \((P):z=8\). Xác định tâm, bán kính thiết diện và giải thích vì sao điều kiện \(d<R\) quan trọng.

**Lời giải:** Chân đường vuông góc từ tâm C xuống mặt \((P)\) là \(H(1;-2;8)\), nên \(d(C,(P))=5<13\). Mặt cắt là đường tròn tâm H với bán kính \(r=\sqrt{13^2-5^2}=\sqrt{144}=12\). Độ dài r không phải bán kính cầu 13, vì mặt phẳng không qua tâm.

**Vận dụng**

Mặt cầu tâm O, \(R=4\), mặt \(z=4\) cắt theo hình gì?

<!-- ITEM_ID: THPT-TOP18-T23; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O23 -->

<details markdown="1"><summary>Đối chiếu</summary>

Tiếp xúc tại một điểm \((0;0;4)\), vì \(d=R\).

**Kiểm lỗi**

Chỉ dùng cách so sánh d với R khi có mặt cầu với \(R>0\) và khoảng cách \(d\ge0\); \(d=R\) là tiếp xúc một điểm. Quay về **Kiến thức 8.1**, sau đó tự giải **Bài luyện 203** và **Bài luyện 207** trong Luyện tập.

</details>

# Luyện tập

Hãy đọc đề, thử giải vào vở rồi tự mở lời giải. Khi chọn vectơ pháp tuyến hay chỉ phương, hãy viết rõ điều kiện khác 0; khi tìm góc, chú ý trị tuyệt đối và công thức sin/cos; khi kiểm vị trí, đừng bỏ qua nghiệm tham số và trường hợp suy biến.

## 1. Vectơ và phép toán hình học

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-C01; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 1.** Trong hình lập phương cạnh 4 cm, độ dài vectơ đi dọc một cạnh bằng bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 4 cm
- **Lời giải/suy luận:** Độ dài vectơ bằng khoảng cách hai đầu cạnh, bằng đúng độ dài cạnh.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-P01; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 2.** Hình hộp chữ nhật có các cạnh theo ba phương vuông góc dài 3, 4, 12 cm. Độ dài vectơ nối hai đỉnh đối diện?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 13 cm
- **Lời giải/suy luận:** Đường chéo không gian dài \(\sqrt{3^2+4^2+12^2}=13\) cm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-P02; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 3.** Với hai điểm phân biệt A, B, vectơ \(\overrightarrow{AA}\) có độ dài bao nhiêu? Theo quy ước, nó có cùng hướng và cùng phương với \(\overrightarrow{AB}\) không?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** Độ dài 0; có, cùng hướng và cùng phương theo quy ước.
- **Lời giải/suy luận:** Hai đầu của \(\overrightarrow{AA}\) trùng nhau nên đây là vectơ-không. Theo quy ước SGK, vectơ-không cùng hướng và cùng phương với mọi vectơ, kể cả \(\overrightarrow{AB}\). Nó không biểu diễn một hướng dịch chuyển riêng; không xác định góc giữa vectơ-không và vectơ khác.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-W01; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 4.** Hình hộp chữ nhật có ba kích thước 2, 3, 6 cm. Giải thích vì sao vectơ nối hai đỉnh đối diện có độ dài 7 cm, không phải 11 cm.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** 7 cm
- **Lời giải/suy luận:** Chọn ba cạnh vuông góc, áp dụng Pythagore không gian: \(\sqrt{2^2+3^2+6^2}=7\). Tổng \(2+3+6\) là độ dài đường đi theo ba cạnh, không phải độ dời.

- **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm lập mô hình ba phương vuông góc; 2 điểm tính căn tổng bình phương; 1 điểm phân biệt đường đi với độ dời.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P01; PRIMARY_OUTCOME: TOP18-O01; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 5.** Cho ba điểm P, Q, R thẳng hàng **theo thứ tự P–Q–R** (Q nằm giữa P và R), \(PQ=3\) cm và \(QR=2\) cm. Tính PR. Trong trường hợp riêng \(P=Q\), vectơ \(\overrightarrow{PQ}\) có phải vectơ đơn vị không?

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

Vì Q nằm giữa P và R nên \(PR=PQ+QR=3+2=5\) cm. Ở trường hợp riêng \(P=Q\) thì vectơ \(\overrightarrow{PQ}\) là vectơ-không, độ dài bằng 0 nên không phải vectơ đơn vị.

**D6:** Không suy hướng từ nét vẽ, kiểm điểm đầu/cuối; vectơ-không không được đưa vào công thức góc.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-C02; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 6.** Trong hình bình hành ABCD, vectơ nào bằng \(\overrightarrow{AB}\)?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \(\overrightarrow{DC}\)
- **Lời giải/suy luận:** Hai vectơ cùng chiều và cùng độ dài trên hai cạnh đối.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-P03; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 7.** Trong hình bình hành ABCD, vectơ nào đối với \(\overrightarrow{AB}\)?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \(\overrightarrow{BA}\) hoặc \(\overrightarrow{CD}\)
- **Lời giải/suy luận:** Đều cùng độ dài và ngược chiều so với \(\overrightarrow{AB}\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-P04; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 8.** Hai vectơ không bằng 0 cùng phương, một vectơ dài 2 cm, vectơ kia dài 5 cm. Chúng có thể bằng nhau không?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** Không
- **Lời giải/suy luận:** Hai vectơ bằng nhau phải cùng hướng và cùng độ dài; 2 khác 5.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-W02; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 9.** Trong hình hộp \(ABCD.A\prime B\prime C\prime D\prime\), liệt kê hai vectơ khác vị trí bằng \(\overrightarrow{AB}\) và một vectơ đối với nó; giải thích dựa vào hướng và độ dài.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** \(\overrightarrow{DC}\) và \(\overrightarrow{A\prime B\prime}\) bằng \(\overrightarrow{AB}\); \(\overrightarrow{BA}\) là vectơ đối.
- **Lời giải/suy luận:** Các cạnh song song đồng hướng tương ứng trong hình hộp có độ dài bằng nhau; đảo đầu-cuối đổi hướng.

- **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm tìm hai vectơ bằng; 1 điểm vectơ đối; 2 điểm giải thích chiều/độ dài.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P02; PRIMARY_OUTCOME: TOP18-O02; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 10.** Một con đường đi 4 km về phía Đông, một đường khác dài 4 km về Tây. Hai vectơ độ dời bằng nhau hay đối nhau?

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

Đối nhau: độ dài bằng nhau nhưng hai hướng ngược nhau. Vị trí đặt mũi tên không làm đổi kết luận.

**D6:** Hãy vẽ mũi tên đầu/cuối thay vì so sánh riêng độ dài.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-C03; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 11.** Với A,B,C bất kì, \(\overrightarrow{AB}+\overrightarrow{BC}\) bằng gì?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \(\overrightarrow{AC}\)
- **Lời giải/suy luận:** Ghép đường đi đầu–đuôi A→B→C.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-P05; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 12.** Trong hình bình hành ABCD, \(\overrightarrow{AB}+\overrightarrow{AD}\) bằng gì?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \(\overrightarrow{AC}\)
- **Lời giải/suy luận:** Quy tắc đường chéo hình bình hành.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-P06; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 13.** Trong hình hộp \(ABCD.A\prime B\prime C\prime D\prime\), \(\overrightarrow{AB}+\overrightarrow{AD}+\overrightarrow{AA\prime}\) bằng gì?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \(\overrightarrow{AC\prime}\)
- **Lời giải/suy luận:** Hai cạnh đáy cho \(\overrightarrow{AC}\), vectơ cạnh đứng bằng \(\overrightarrow{CC'}\); nối thành \(\overrightarrow{AC'}\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-W03; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 14.** Cho tứ diện ABCD. Rút gọn \(\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}\) theo hai cách: nối đường đi và nhóm đại số.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** \(\overrightarrow{AD}\)
- **Lời giải/suy luận:** Nối A→B→C→D được \(\overrightarrow{AD}\). Hoặc \(\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}\), \(\overrightarrow{AC}+\overrightarrow{CD}=\overrightarrow{AD}\).

- **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm mô tả đường đi; 2 điểm nhóm đúng; 1 điểm kết luận AD.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P03; PRIMARY_OUTCOME: TOP18-O03; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 15.** Trong tam giác ABC, viết \(\overrightarrow{AB}+\overrightarrow{BC}-\overrightarrow{AC}\) dưới dạng đơn giản.

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

Bằng vectơ-không vì \(\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}\), nên hiệu với \(\overrightarrow{AC}\) bằng \(\vec 0\).

**D6:** Nếu không ghép được đầu của mũi tên thứ hai vào cuối mũi tên thứ nhất, hãy tịnh tiến vectơ rồi mới cộng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-C04; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 16.** Nếu \(|\vec a|=3\) và \(k=-2\), độ dài \(k\vec a\) bằng bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 6
- **Lời giải/suy luận:** \(|-2|\cdot 3=6\); hướng đổi do k âm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-P07; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 17.** Điểm M là trung điểm đoạn AB. Biểu diễn \(\overrightarrow{AM}\) qua \(\overrightarrow{AB}\).

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \(\frac12\overrightarrow{AB}\)
- **Lời giải/suy luận:** Cùng hướng và độ dài bằng một nửa.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-P08; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 18.** Điểm N ở tia đối của AB, \(AN=3AB\). Viết \(\overrightarrow{AN}\) qua \(\overrightarrow{AB}\).

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \(-3\overrightarrow{AB}\)
- **Lời giải/suy luận:** Ngược hướng, độ dài gấp ba.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-W04; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 19.** Cho \(\vec a\ne\vec0\). Hai vectơ \(\vec b=-\frac32\vec a\) và \(\vec c=\frac12\vec a\) có cùng phương không? Hướng và tỉ số độ dài?

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** Có; b ngược hướng a, c cùng hướng a; \(\lVert\vec b\rVert:\lVert\vec c\rVert=3:1\).
- **Lời giải/suy luận:** b,c là bội số của a; dấu hệ số xác định chiều, độ lớn xác định tỉ lệ.

- **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm chứng minh cùng phương; 2 điểm giải thích hướng; 1 điểm tỉ số.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P04; PRIMARY_OUTCOME: TOP18-O04; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 20.** Cho độ dời u có độ dài 5 cm và \(k=-2\). Tính độ dài \(k\vec u\) và so sánh hướng với u.

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

Độ dài \(\lvert-2\rvert\cdot5=10\) cm; vì k âm nên ngược hướng u.

**D6:** Nếu lẫn dấu và độ dài, tách riêng: độ dài nhân \(\lvert k\rvert\), chiều quyết định theo dấu k.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-C05; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 21.** Hai vectơ khác 0 dài 2 và 3, tạo góc 60°. Tính tích vô hướng.

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 3
- **Lời giải/suy luận:** \(2\cdot3\cdot\cos60^\circ=3\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-P09; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 22.** Hai vectơ khác 0 dài 5 và 4 vuông góc. Tích vô hướng bằng bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 0
- **Lời giải/suy luận:** \(\cos90^\circ=0\) nên tích bằng 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-P10; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 23.** Hai vectơ khác 0 dài 3 và 8 tạo góc 120°. Tích vô hướng bằng bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** -12
- **Lời giải/suy luận:** \(3\cdot8\cdot\cos120^\circ=-12\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-W05; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 24.** Giả sử \(|\vec u|=2\), \(|\vec v|=5\) và \(\vec u\cdot\vec v=-5\). Hãy tìm góc và giải thích dấu âm.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** 120°
- **Lời giải/suy luận:** \(\cos\theta=\frac{-5}{2\cdot5}=-\frac12\) nên \(\theta=120^\circ\); hình chiếu ngược hướng.

- **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 1 điểm kiểm hai độ dài dương; 2 điểm thiết lập cos; 1 điểm tìm góc; 1 điểm giải thích dấu.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P05; PRIMARY_OUTCOME: TOP18-O05; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 25.** Hai vectơ độ dài 3 và 4, góc giữa chúng 60°. Tính tích vô hướng.

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

\(3\cdot4\cdot\cos60^\circ=6\). Cần biết cả độ dài và góc; không nhân \(3\cdot4\) trực tiếp.

**D6:** Nếu một vectơ bằng 0, tích vô hướng vẫn bằng 0 nhưng không dùng phép chia cho tích độ dài để tìm cos góc.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-C06; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 26.** Lực 10 N cùng hướng với độ dời 4 m. Công của lực là bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 40 J
- **Lời giải/suy luận:** Góc 0°, \(W=10\cdot4\cdot\cos0^\circ=40\) J.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-P11; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 27.** Lực 12 N vuông góc với độ dời 5 m. Công bằng bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 0 J
- **Lời giải/suy luận:** Góc 90° nên thành phần lực theo độ dời bằng 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-P12; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 28.** Lực 8 N tạo góc 120° với độ dời 3 m. Công bằng bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** -12 J
- **Lời giải/suy luận:** \(W=8\cdot3\cdot(-\frac12)=-12\) J; công âm do lực chống chuyển động.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B06-W06; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 29.** Hai lực không đổi \(\vec F_1,\vec F_2\) lần lượt 10 N, 20 N, cùng tạo góc 60° với cùng độ dời 2 m. Tính tổng công và nêu vì sao có thể cộng.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** 30 J
- **Lời giải/suy luận:** Theo tính phân phối của tích vô hướng, \(W=W_1+W_2=10\cdot2\cdot\frac12+20\cdot2\cdot\frac12=10+20=30\) J.

- **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm công mỗi lực; 2 điểm cộng hợp lí bằng phân phối; 1 điểm đơn vị và giả thiết.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P06; PRIMARY_OUTCOME: TOP18-O06; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 30.** Một lực 10 N tạo góc 60° với độ dời dài 2 m. Công của lực theo hướng độ dời?

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

\(W=10\cdot2\cdot\cos60^\circ=10\) J, vì chỉ thành phần lực dọc chuyển dời sinh công.

**D6:** D6: phân loại bài hỏi tổng vectơ hay hình chiếu; luôn có sơ đồ phương và đơn vị.

</details>

## 2. Làm quen hệ tọa độ Oxyz

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B07-C01; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 31.** Trong hệ Oxyz, điểm \(P(4;2;0)\) nằm trên mặt phẳng tọa độ nào?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** (Oxy)
- **Lời giải/suy luận:** Mặt phẳng Oxy đặc trưng bởi \(z=0\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B07-P01; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 32.** Một điểm Q thuộc trục Oz. Hai tọa độ nào bắt buộc bằng 0?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \(x=0\) và \(y=0\)
- **Lời giải/suy luận:** Trên trục Oz chỉ có thành phần z.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B07-P02; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 33.** Điểm \(M(-1;0;3)\) thuộc mặt phẳng tọa độ nào?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** (Oxz)
- **Lời giải/suy luận:** \(y=0\) nên M thuộc mặt phẳng Oxz.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B07-W01; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 34.** Phân loại \(A(0;2;-1)\), \(B(0;0;5)\), \(C(3;-2;0)\) theo mặt phẳng tọa độ hoặc trục tọa độ; giải thích.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** A thuộc Oyz; B thuộc Oz và cả Oxz, Oyz; C thuộc Oxy.
- **Lời giải/suy luận:** Xét các tọa độ bằng 0 cho từng điểm. Đừng nhầm điều kiện 1 tọa độ bằng 0 của mặt phẳng với 2 tọa độ bằng 0 của trục.

- **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 3 điểm xác định đúng A/B/C; 2 điểm giải thích điều kiện các tọa độ 0.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P07; PRIMARY_OUTCOME: TOP18-O07; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 35.** Điểm \(A=(0;4;-3)\) thuộc mặt phẳng Oyz không? Vì sao?

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

Có, vì \(x=0\). Không bắt buộc y,z dương để thuộc mặt tọa độ.

**D6:** Gắn điều kiện bằng 0 với tên của tọa độ bị thiếu, không suy vị trí chỉ từ hình xiên.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B07-C02; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 36.** Cho \(\vec a=3\vec i-2\vec j+\vec k\). Tọa độ \(\vec a\) là gì?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((3;-2;1)\)
- **Lời giải/suy luận:** Hệ số theo \(\vec i,\vec j,\vec k\) tạo thành ba tọa độ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B07-P03; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 37.** Nếu \(M(-2;4;1)\), tọa độ vectơ \(\overrightarrow{OM}\) bằng gì?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((-2;4;1)\)
- **Lời giải/suy luận:** Theo định nghĩa tọa độ điểm từ vectơ vị trí.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B07-P04; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 38.** Vectơ \(\vec u=(0;0;-5)\) viết dưới dạng \(\vec i,\vec j,\vec k\) thế nào?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \(-5\vec k\)
- **Lời giải/suy luận:** Hai tọa độ x,y bằng 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B07-W02; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 39.** Cho \(P(1;-2;3)\). Viết vectơ vị trí \(\overrightarrow{OP}\) và giải thích vì sao vectơ bằng \(\overrightarrow{OP}\) đặt ở một điểm khác vẫn có tọa độ tương tự.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** \(\overrightarrow{OP}=\vec i-2\vec j+3\vec k\); tọa độ phụ thuộc hướng và độ dài vectơ trong cùng hệ, không phụ thuộc nơi dời song song.
- **Lời giải/suy luận:** Theo định nghĩa tọa độ điểm, \(P(1;-2;3)\) nghĩa là \(\overrightarrow{OP}=\vec i-2\vec j+3\vec k\). Vectơ có thể dời song song mà không đổi tọa độ trong cùng hệ, nhưng điểm cuối sẽ đổi nếu đổi điểm đầu.

- **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm phân tích đúng; 2 điểm giải thích vectơ tự do; 1 điểm phân biệt điểm/tọa độ.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P08; PRIMARY_OUTCOME: TOP18-O08; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 40.** Vectơ \(\vec u=-2\vec i+3\vec j+\vec k\). Viết bộ ba tọa độ của u và của điểm N sao cho \(\overrightarrow{ON}=\vec u\).

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

\(\vec u=(-2;3;1)\) và \(N(-2;3;1)\) khi gốc là O và ba trục chuẩn.

**D6:** Nhắc lại điểm cần gốc, vectơ cần thành phần dịch chuyển; không tự đổi dấu khi đọc thành phần âm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B07-C03; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 41.** Trong phòng lấy O góc sàn và ba trục dọc dài/rộng/cao. Vật cách O lần lượt 2,3,4 m theo ba chiều dương có tọa độ gì?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((2;3;4)\) m
- **Lời giải/suy luận:** Ba chuyển động độc lập theo ba trục từ O.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B07-P05; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 42.** Một cảm biến ở trần trong phòng cao 3 m, chọn Oz hướng lên từ sàn. Tọa độ z của cảm biến là gì?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 3 m
- **Lời giải/suy luận:** Độ cao được đo từ mặt sàn \(z=0\) theo chiều dương.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B07-P06; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 43.** Khi lấy gốc ở góc trần và Oz hướng xuống, sàn cách gốc 3 m có tọa độ z gì?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 3 m
- **Lời giải/suy luận:** Trục dương đã đổi hướng; do chọn Oz xuống nên sàn có z dương.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B07-W03; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 44.** Phòng \(5\times4\times3\) m; lấy O ở góc sàn, Ox dài, Oy rộng, Oz cao. Điểm \(A(5;4;3)\) là vị trí nào? Nếu gốc thay thành điểm trần đối diện và trục Oz vẫn hướng lên, z của O cũ bằng bao nhiêu?

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** A là góc trần đối diện O; z của O cũ bằng -3 m trong hệ mới.
- **Lời giải/suy luận:** Nêu rõ gốc mới; điểm sàn thấp hơn gốc trần 3 m.

- **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm mô tả A; 2 điểm trục mới và dấu; 1 điểm giải thích tính tương đối.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P09; PRIMARY_OUTCOME: TOP18-O09; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 45.** Drone ở \(A=(1;-2;5)\) m; chuyển sang \(B=(1;2;5)\) m. Sự thay đổi theo Oy là bao nhiêu, theo chiều nào?

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

Tăng 4 m về Bắc; chiều cao z không đổi.

**D6:** Nếu quên quy ước dấu, vẽ ba trục và ghi rõ đơn vị trước khi giải.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B07-C04; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 46.** \(A(1;2;3)\), \(B(5;2;1)\). Tọa độ \(\overrightarrow{AB}\)?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((4;0;-2)\)
- **Lời giải/suy luận:** \(\overrightarrow{OB}-\overrightarrow{OA}\) theo từng tọa độ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B07-P07; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 47.** \(A(-2;3;4)\), \(B(1;-1;2)\). Tọa độ \(\overrightarrow{BA}\)?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((-3;4;2)\)
- **Lời giải/suy luận:** \(\overrightarrow{OA}-\overrightarrow{OB}\) vì điểm đầu B, cuối A.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B07-P08; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 48.** \(A(0;0;0)\), \(B(-3;2;5)\). Tọa độ \(\overrightarrow{AB}\)?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((-3;2;5)\)
- **Lời giải/suy luận:** Lấy vị trí B trừ vị trí gốc A.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B07-W04; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 49.** Cho \(A(2;-3;1)\), \(B(-4;5;0)\). Tính tọa độ \(\overrightarrow{AB}\) và \(\overrightarrow{BA}\), rồi giải thích quan hệ.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** \(\overrightarrow{AB}=(-6;8;-1)\) và \(\overrightarrow{BA}=(6;-8;1)\); đối nhau.
- **Lời giải/suy luận:** \(\overrightarrow{OB}-\overrightarrow{OA}\) và \(\overrightarrow{OA}-\overrightarrow{OB}\) có dấu ngược nhau ở cả 3 thành phần.

- **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm \(\overrightarrow{AB}\); 2 điểm \(\overrightarrow{BA}\); 1 điểm quan hệ vectơ đối.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P10; PRIMARY_OUTCOME: TOP18-O10; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 50.** Cho \(C=(-1;3;2)\), \(D=(2;3;-2)\). Tính \(\overrightarrow{CD}\) và \(\overrightarrow{DC}\); có đối nhau không?

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

\(\overrightarrow{CD}=(3;0;-4)\), \(\overrightarrow{DC}=(-3;0;4)=-\overrightarrow{CD}\).

**D6:** Thường xuyên thử lấy tọa độ A cộng tọa độ \(\overrightarrow{AB}\) để xem có trở về B không.

</details>

## 3. Phép toán tọa độ và khoảng cách

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-C01; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 51.** Với \(\vec a=(1;2;3)\), \(\vec b=(3;-1;2)\), tính \(\vec a+\vec b\).

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((4;1;5)\)
- **Lời giải/suy luận:** Cộng ba tọa độ tương ứng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-P01; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 52.** Với \(\vec a=(2;-3;1)\), \(\vec b=(-1;4;0)\), tính \(\vec a-\vec b\).

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((3;-7;1)\)
- **Lời giải/suy luận:** Trừ ba tọa độ tương ứng; \(-3-4=-7\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-P02; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 53.** Với \(\vec a=(1;-2;4)\), tính \(-3\vec a\).

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((-3;6;-12)\)
- **Lời giải/suy luận:** Nhân từng tọa độ với -3.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-W01; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 54.** Với \(\vec a=(2;1;-1)\), \(\vec b=(-1;3;2)\), hãy tính \(2\vec a-3\vec b\) và mô tả vì sao mỗi thành phần được tính riêng.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** \((7;-7;-8)\)
- **Lời giải/suy luận:** \(2\vec a=(4;2;-2)\), \(3\vec b=(-3;9;6)\), lấy hiệu \((7;-7;-8)\); tính duy nhất cơ sở trực giao.

- **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 3 điểm tính đúng ba tọa độ; 2 điểm lý giải phép toán theo trục.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P11; PRIMARY_OUTCOME: TOP18-O11; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 55.** Cho \(\vec u=(-1;2;4)\), \(\vec v=(3;-2;1)\). Tính \(2\vec u-\vec v\).

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

\(2\vec u-\vec v=(-2;4;8)-(3;-2;1)=(-5;6;7)\).

**D6:** Không nhân chéo tọa độ khi cộng; làm theo từng trục và kiểm dấu số âm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-C02; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 56.** \(\vec a=(2;4;6)\) và \(\vec b=(1;2;3)\) có cùng phương không?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** Có; \(\vec a=2\vec b\)
- **Lời giải/suy luận:** Một hệ số 2 khớp cả ba tọa độ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-P03; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 57.** \(\vec u=(3;0;-6)\) và \(\vec v=(-1;0;2)\) có cùng phương không?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** Có; \(\vec u=-3\vec v\)
- **Lời giải/suy luận:** Kiểm thành phần x,z và \(0=-3\cdot0\); không lấy tỉ số \(\frac00\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-P04; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 58.** \(\vec a=(1;2;3)\) và \(\vec b=(2;4;7)\) có cùng phương không?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** Không
- **Lời giải/suy luận:** Tỉ lệ x,y là 2 nhưng z phải là 6, không phải 7.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-W02; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 59.** Cho \(\vec u=(t;2;4)\), \(\vec v=(3;1;2)\). Tìm t để u, v cùng phương; chỉ ra hướng của chúng.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** \(t=6\); cùng hướng
- **Lời giải/suy luận:** Từ tọa độ y: \(\vec u=2\vec v\), kiểm z: \(4=2\cdot2\), suy \(t=2\cdot3=6\); \(k=2>0\).

- **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm xác định hệ số; 2 điểm suy t và kiểm z; 1 điểm giải thích hướng.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P12; PRIMARY_OUTCOME: TOP18-O12; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 60.** Kiểm tra cùng phương của \(\vec u=(2;4;1)\) và \(\vec v=(1;2;0)\).

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

Không: từ hai thành phần đầu \(k=2\) nhưng thành phần z yêu cầu \(1=2\cdot0\) sai.

**D6:** Không chia cho 0; kiểm cả ba thành phần, nếu một vectơ là vectơ-không thì nói rõ trường hợp riêng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-C03; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 61.** Trung điểm \(A(1;3;5)\), \(B(3;1;7)\) có tọa độ?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((2;2;6)\)
- **Lời giải/suy luận:** Trung bình từng thành phần.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-P05; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 62.** Trọng tâm tam giác \(A(0;0;0)\), \(B(3;0;0)\), \(C(0;6;0)\) là?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((1;2;0)\)
- **Lời giải/suy luận:** Lấy tổng ba tọa độ rồi chia 3.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-P06; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 63.** Trung điểm đoạn AB với \(A(-2;4;0)\) \(B(4;-2;6)\) là?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((1;1;3)\)
- **Lời giải/suy luận:** Trung bình theo trục x,y,z.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-W03; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 64.** Cho \(A(1;2;3)\), \(B(3;4;5)\), \(C(5;0;1)\). Tìm trọng tâm G và kiểm tra tọa độ của trung điểm M của AB.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** \(G=(3;2;3)\); \(M=(2;3;4)\).
- **Lời giải/suy luận:** \(G=(\frac{1+3+5}3;\frac{2+4+0}3;\frac{3+5+1}3)=(3;2;3)\). Trung điểm là \((2;3;4)\).

- **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 3 điểm G; 2 điểm M và cách tính từng tọa độ.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P13; PRIMARY_OUTCOME: TOP18-O13; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 65.** Tìm trọng tâm tam giác \(A=(0;0;0)\), \(B=(3;0;3)\), \(C=(0;6;0)\).

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

\(G=(1;2;1)\) vì cộng ba tọa độ từng trục rồi chia 3.

**D6:** Nếu kết quả bất ngờ, kiểm \(2\overrightarrow{OM}-\overrightarrow{OA}=\overrightarrow{OB}\); với trọng tâm \(G\), kiểm \(3\overrightarrow{OG}=\overrightarrow{OA}+\overrightarrow{OB}+\overrightarrow{OC}\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-C04; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 66.** \(\vec a=(1;2;3)\), \(\vec b=(2;0;-1)\). Tính tích vô hướng \(\vec a\cdot\vec b\).

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** -1
- **Lời giải/suy luận:** \(1\cdot 2+2\cdot 0+3\cdot (-1)=-1\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-P07; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 67.** \(\vec u=(1;1;0)\), \(\vec v=(1;-1;0)\) có vuông góc không?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** Có
- **Lời giải/suy luận:** Tích vô hướng \(1-1+0=0\), cả hai vectơ khác 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-P08; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 68.** \(\vec a=(1;0;0)\), \(\vec b=(1;1;0)\). Góc giữa hai vectơ?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \(45^\circ\)
- **Lời giải/suy luận:** \(\cos\theta=\frac1{1\cdot\sqrt2}=\frac1{\sqrt2}\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-W04; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 69.** Cho \(\vec a=(1;2;2)\), \(\vec b=(2;-1;0)\). Chứng minh chúng vuông góc và nêu điều kiện để sử dụng tiêu chuẩn tích vô hướng bằng 0.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** \(\vec a\cdot\vec b=2-2+0=0\), hai vectơ khác 0 nên vuông góc.
- **Lời giải/suy luận:** Không được suy vuông góc giữa vectơ-không và vectơ bất kì chỉ từ tích 0.

- **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm tính tích; 1 điểm kiểm khác 0; 2 điểm kết luận và điều kiện.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P14; PRIMARY_OUTCOME: TOP18-O14; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 70.** \(\vec u=(1;0;0)\), \(\vec v=(1;1;0)\). Tính cos góc giữa hai vectơ.

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

\(\cos\theta=\frac1{1\cdot\sqrt2}=\frac1{\sqrt2}\) nên góc \(45^\circ\).

**D6:** Khi tìm cos, kiểm \(\lVert\vec u\rVert,\lVert\vec v\rVert>0\); nếu làm tròn dữ liệu máy, cos chỉ nằm trong \([-1;1]\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-C05; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 71.** Tính độ dài vectơ \(\vec u=(3;4;0)\).

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 5
- **Lời giải/suy luận:** \(\sqrt{9+16+0}=5\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-P09; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 72.** Khoảng cách \(A(1;2;3)\), \(B(1;2;7)\) bằng?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 4
- **Lời giải/suy luận:** Độ chênh tọa độ \((0;0;4)\) có độ dài 4.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-P10; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 73.** Độ dài vectơ \(\vec v=(-2;3;6)\) bằng?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 7
- **Lời giải/suy luận:** \(\sqrt{4+9+36}=7\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-W05; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 74.** Cho \(A(-1;2;3)\), \(B(2;-2;15)\). Tính AB. Nêu vì sao không thể lấy tổng trị tuyệt đối ba độ chênh.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** 13
- **Lời giải/suy luận:** \(\overrightarrow{AB}=(3;-4;12)\), \(AB=\sqrt{9+16+144}=13\). Tổng trị tuyệt đối là độ dài đi theo ba trục, không phải khoảng cách thẳng.

- **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm vectơ \(\overrightarrow{AB}\); 2 điểm độ dài; 1 điểm giải thích hình học.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P15; PRIMARY_OUTCOME: TOP18-O15; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 75.** Khoảng cách giữa \(A=(0;1;-2)\) và \(B=(2;-2;4)\)?

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

\(\overrightarrow{AB}=(2;-3;6)\), nên khoảng cách \(\sqrt{4+9+36}=7\).

**D6:** Nếu căn ra số âm hoặc thiếu tọa độ z, quay lại định lí Pitago ba chiều.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-W01; PRIMARY_OUTCOME: TOP18-O15; ROLE: TOPIC_WRITTEN; RUBRIC_ORIGINAL_UNCHANGED -->
**Bài luyện 76.** Cho \(A=(1;2;3)\), \(B=(4;6;3)\). Hãy tìm vectơ \(\overrightarrow{AB}\), độ dài \(AB\) và trung điểm I của AB, giải thích vì sao không lấy khoảng cách bằng tổng ba biến thiên tọa độ.

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

\(\overrightarrow{AB}=\overrightarrow{OB}-\overrightarrow{OA}=(3;4;0)\). Bởi ba trục vuông góc, \(AB=\sqrt{3^2+4^2+0^2}=5\). Trung điểm \(I=\left(\frac{1+4}2;\frac{2+6}2;\frac{3+3}2\right)=\left(\frac52;4;3\right)\), không phải tổng \(3+4+0\).

**Rubric 4 điểm (mỗi tiêu chí 1 điểm):**
- Tính đúng ba tọa độ vectơ \(\overrightarrow{AB}=(3;4;0)\) — **1 điểm**.
- Giải thích và dùng Pitago ba chiều — **1 điểm**.
- Kết luận đúng độ dài \(AB=5\) — **1 điểm**.
- Tính trung điểm \(I=\left(\frac52;4;3\right)\) và loại ngộ nhận cộng tọa độ — **1 điểm**.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-C06; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 77.** Robot đi thẳng từ \(A(0;0;0)\) tới \(B(3;4;0)\), tọa độ mét. Quãng đường đi thẳng là bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 5 m
- **Lời giải/suy luận:** Độ dài đoạn AB là 5 m.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-P11; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 78.** Drone đi thẳng 10 m trong 2 s. Tốc độ không đổi?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 5 m/s
- **Lời giải/suy luận:** Lấy độ dài đường đi chia thời gian dương.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-P12; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 79.** Máy bay \(A(1;2;3)\) tới \(B(4;6;15)\) theo đường thẳng; độ dời dài bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 13 đơn vị
- **Lời giải/suy luận:** Hiệu \((3;4;12)\), độ dài 13.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B08-W06; ORIGINAL_SOURCE_BLOB: 43d93a7d0d070a288251c34ff411c7de3206dc85; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHII_SOURCE -->
**Bài luyện 80.** Một thiết bị chuyển động thẳng từ \(A(2;0;5)\) đến \(B(8;-8;11)\) trong 4 s (tọa độ mét). Tìm vectơ độ dời, độ dài và tốc độ. Khi nào độ dài độ dời khác quãng đường?

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** Độ dời \((6;-8;6)\) m, độ dài \(\sqrt{136}=2\sqrt{34}\) m, tốc độ \(\frac{\sqrt{34}}2\) m/s.
- **Lời giải/suy luận:** 4 s là khoảng thời gian dương; nếu đường đi cong hoặc vòng lại thì độ dài độ dời nhỏ hơn hoặc bằng quãng đường thực.

- **Rubric tự luận (tổng 5 điểm, tự đối chiếu sau khi làm):** 2 điểm độ dời; 1 điểm độ dài; 1 điểm tốc độ; 1 điểm điều kiện đường thẳng.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P16; PRIMARY_OUTCOME: TOP18-O16; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 81.** Máy bay mô hình \(M_0=(2;-1;4)\) km, \(\vec v=(1;2;-1)\) km/h. Sau 2 h ở đâu?

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

\(M=(2;-1;4)+2(1;2;-1)=(4;3;2)\) km.

**D6:** Nếu thấy độ cao âm mà vật không được dưới mặt đất, kiểm mốc t hoặc chiều dương và giới hạn vật lí.

</details>

## 4. Mặt phẳng trong Oxyz

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-C01; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 82.** Mặt phẳng \(x-2y+3z-4=0\) có pháp tuyến nào?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((1;-2;3)\)
- **Lời giải có suy luận:** Đọc hệ số x,y,z; \((1;-2;3)\) khác 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-P01; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 83.** Tìm một \(\vec n\) vuông góc với \(\vec u=(1;2;0)\),\(\vec v=(0;1;2)\).

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((4;-2;1)\)
- **Lời giải có suy luận:** \(\vec u\times\vec v=(4;-2;1)\); hai tích vô hướng lần lượt \(4-4\) và \(-2+2\) đều 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-A01; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 84.** Hai mép mái có hướng \((1;0;1)\) và \((0;2;1)\). Tìm hướng vuông góc mái.

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((-2;-1;2)\)
- **Lời giải có suy luận:** Tích có hướng \((-2;-1;2)\), kiểm trực giao với cả hai mép.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-W01; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 85.** Giải thích vì sao \(\vec u=(1;1;0)\),\(\vec v=(2;2;0)\) không đủ để xác định pháp tuyến duy nhất bằng tích có hướng.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** \(\vec u\times\vec v=\vec 0\), vì u và v cùng phương.
- **Lời giải có suy luận:** \(\vec v=2\vec u\) nên tích có hướng bằng 0. Cần hướng thứ hai không cùng phương; không được lấy \(\vec n=\vec0\) làm pháp tuyến.
- **Rubric Written /5 (chấm theo từng bước) — R01 đã review DELTA_C:** 2đ chỉ ra \(\vec v=2\vec u\), hai vectơ cùng phương/phụ thuộc tuyến tính nên không tạo cặp hướng độc lập; 1đ tính hoặc chứng minh \(\vec u\times\vec v=(0;0;0)\); 1đ giải thích vectơ không không được dùng làm vectơ pháp tuyến; 1đ nêu cách khắc phục: chọn hướng thứ hai không cùng phương với u rồi mới tính tích có hướng.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P17; PRIMARY_OUTCOME: TOP18-O17; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 86.** \(\vec u=(1;1;0)\), \(\vec v=(0;1;1)\). Tìm một pháp tuyến khác không bằng tích có hướng.

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

\(\vec u\times\vec v=(1;-1;1)\). Kiểm \(\vec n\cdot\vec u=1-1=0\), \(\vec n\cdot\vec v=-1+1=0\). Hai vectơ đã cho độc lập nên \(\vec n\ne\vec0\).

**Đường khắc phục D6:** Nếu tích có hướng 0, phải kiểm hai hướng có cùng phương hay không; không dùng vectơ 0 làm pháp tuyến.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-C02; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 87.** Qua \(M(0;1;-1)\), \(\vec n=(1;2;3)\) viết mặt phẳng.

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \(x+2y+3z+1=0\)
- **Lời giải có suy luận:** \(x+2(y-1)+3(z+1)=0\Rightarrow x+2y+3z+1=0\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-P02; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 88.** Qua \(M(2;0;1)\), \(\vec n=(1;-2;2)\), viết (P).

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \(x-2y+2z-4=0\)
- **Lời giải có suy luận:** \((x-2)-2y+2(z-1)=0\Rightarrow x-2y+2z-4=0\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-A02; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 89.** Mặt sàn ngang qua điểm \(A(1;2;4)\). Viết phương trình của sàn.

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \(z=4\)
- **Lời giải có suy luận:** Mặt ngang có pháp tuyến \((0;0;1)\); đi qua \(z=4\) nên \(z-4=0\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-W02; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 90.** Qua \(M(-1;2;0)\) có pháp tuyến \(\vec n=(2;3;-1)\). Viết phương trình và kiểm tại M.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** \(2x+3y-z-4=0\)
- **Lời giải có suy luận:** \(2(x+1)+3(y-2)-z=0\Rightarrow2x+3y-z-4=0\); tại M: \(-2+6-4=0\).
- **Rubric Written /5 (chấm theo từng bước):** 2đ lập đúng dạng điểm–pháp tuyến; 1đ triển khai hệ số tự do; 1đ thử lại điểm M; 1đ ghi điều kiện n khác 0.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P18; PRIMARY_OUTCOME: TOP18-O18; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 91.** \(M_0=(-1;2;0)\), \(\vec n=(1;2;-1)\). Viết phương trình mặt phẳng và thử lại \(M_0\).

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

\((x+1)+2(y-2)-z=0\), suy \(x+2y-z-3=0\). Thay \((-1;2;0)\) được \(-1+4-3=0\).

**Đường khắc phục D6:** Không để pháp tuyến \(\vec n=\vec0\); thay tọa độ điểm đã cho vào phương trình để phát hiện lỗi dấu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-C03; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 92.** \(A(1;0;0)\),\(B(1;1;0)\),\(C(1;0;1)\). Viết (ABC).

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \(x=1\)
- **Lời giải có suy luận:** \(\overrightarrow{AB}=(0;1;0),\ \overrightarrow{AC}=(0;0;1)\Rightarrow\vec n=(1;0;0)\); qua A ⇒ \(x-1=0\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-P03; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 93.** \(A(0;0;0)\),\(B(1;1;0)\),\(C(0;0;1)\). Tìm mặt phẳng.

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \(x-y=0\)
- **Lời giải có suy luận:** \(\overrightarrow{AB}=(1;1;0)\), \(\overrightarrow{AC}=(0;0;1)\), \(\vec n=(1;-1;0)\) theo hệ số khác 0; qua O ⇒ \(x-y=0\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-A03; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 94.** Ba đỉnh tường \((4;0;0)\),\((0;4;0)\),\((4;0;2)\). Viết mặt phẳng tường.

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \(x+y-4=0\)
- **Lời giải có suy luận:** Hai vectơ trong tường \((-4;4;0)\),\((0;0;2)\) có pháp tuyến cùng phương \((1;1;0)\); qua \((4;0;0)\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-W03; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 95.** Viết mặt phẳng qua \(A(1;0;0)\),\(B(0;1;0)\),\(C(0;0;1)\) và chứng minh ba điểm không thẳng hàng.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** \(x+y+z-1=0\)
- **Lời giải có suy luận:** \(\overrightarrow{AB}=(-1;1;0)\), \(\overrightarrow{AC}=(-1;0;1)\), tích có hướng khác 0; ba điểm đều thỏa \(x+y+z=1\).
- **Rubric Written /5 (chấm theo từng bước):** 2đ lập \(\overrightarrow{AB},\overrightarrow{AC}\) và kiểm không thẳng hàng; 1đ xác định pháp tuyến; 1đ viết phương trình và thử đủ ba điểm; 1đ nêu tính duy nhất.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P19; PRIMARY_OUTCOME: TOP18-O19; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 96.** Lập mặt phẳng qua \(A=(0;0;0)\),\(B=(1;0;1)\),\(C=(0;1;1)\).

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

\(\overrightarrow{AB}=(1;0;1)\),\(\overrightarrow{AC}=(0;1;1)\), \(\vec n=(-1;-1;1)\) nên mặt phẳng \(-x-y+z=0\), hoặc \(z=x+y\).

**Đường khắc phục D6:** Kiểm \(\overrightarrow{AB},\overrightarrow{AC}\) có cùng phương không trước khi dựng n, và thay đủ ba điểm vào đáp án.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-W02; PRIMARY_OUTCOME: TOP18-O19; ROLE: TOPIC_WRITTEN; RUBRIC_ORIGINAL_UNCHANGED -->
**Bài luyện 97.** Trong Oxyz, cho \(A=(1;0;0)\), \(B=(0;1;0)\), \(C=(0;0;1)\). Chứng minh ba điểm không thẳng hàng, lập phương trình mặt phẳng (ABC) và kiểm lại cả ba điểm.

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

\(\overrightarrow{AB}=(-1;1;0)\), \(\overrightarrow{AC}=(-1;0;1)\) không cùng phương (chẳng hạn vì thành phần y). Pháp tuyến \(\vec n=(1;1;1)\) vuông góc cả hai. Qua A: \((x-1)+y+z=0\Rightarrow x+y+z=1\). Thay A,B,C đều có tổng tọa độ bằng 1.

**Rubric 4 điểm (mỗi tiêu chí 1 điểm):**
- Tính đúng \(\overrightarrow{AB},\overrightarrow{AC}\) và chứng minh chúng không cùng phương — **1 điểm**.
- Dựng một pháp tuyến khác không của (ABC) — **1 điểm**.
- Viết đúng \(x+y+z=1\) — **1 điểm**.
- Thử lại cả A,B,C và giải thích điều kiện qua ba điểm — **1 điểm**.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-C04; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 98.** Qua \((2;1;0)\) song song Ox và Oz. Viết mặt phẳng.

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \(y=1\)
- **Lời giải có suy luận:** Có 2 hướng \((1;0;0),(0;0;1)\), pháp tuyến \((0;1;0)\); qua điểm cho trước ⇒ \(y=1\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-P04; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 99.** Mặt phẳng chứa trục Oy và điểm \((1;0;2)\). Viết phương trình.

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \(2x-z=0\)
- **Lời giải có suy luận:** Hai hướng \(\vec j=(0;1;0)\) theo trục \(Oy\) và \((1;0;2)\), \(\vec n=(2;0;-1)\); qua O.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-A04; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 100.** Mái qua \(P(0;0;2)\), song song hai hướng \((1;1;0)\),\((0;1;1)\). Viết mặt mái.

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \(x-y+z-2=0\)
- **Lời giải có suy luận:** \(\vec n=(1;-1;1)\); qua P ⇒ \(x-y+z-2=0\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-W04; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 101.** Mặt phẳng qua O chứa Ox và điểm \(B(0;2;1)\); lập phương trình.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** \(y-2z=0\)
- **Lời giải có suy luận:** Hai hướng Ox và \(\overrightarrow{OB}=(0;2;1)\), \(\vec n=(0;-1;2)\) hay \((0;1;-2)\); thay B được 0.
- **Rubric Written /5 (chấm theo từng bước):** 2đ nhận đúng hai hướng của mặt; 1đ tìm pháp tuyến; 1đ lập và thử phương trình; 1đ giải thích điều kiện chứa trục so với song song trục.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P20; PRIMARY_OUTCOME: TOP18-O20; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 102.** Tìm mặt phẳng chứa Oy và \(A=(2;0;-1)\).

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

Dùng \(\vec j=(0;1;0)\) và \(\overrightarrow{OA}=(2;0;-1)\); pháp tuyến \(\vec n=(1;0;2)\), nên \(x+2z=0\); Oy và A đều thỏa.

**Đường khắc phục D6:** Không bỏ điều kiện chứa điểm/đường; một mặt chỉ có pháp tuyến đúng nhưng lệch vị trí vẫn sai.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-C05; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 103.** \(x-2y+z=1\) và \(2x-4y+2z=5\) có vị trí gì?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** Song song phân biệt
- **Lời giải có suy luận:** Hai pháp tuyến tỉ lệ 2, nhưng nếu nhân cả phương trình đầu với 2 có vế phải 2 khác 5.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-P05; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 104.** Hai mặt \(2x+y-z=0\) và \(x-2y=0\) có vuông góc?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** Có
- **Lời giải có suy luận:** \(\vec n_1=(2;1;-1)\), \(\vec n_2=(1;-2;0)\), \(\vec n_1\cdot\vec n_2=2-2+0=0\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-A05; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 105.** Mặt sàn \(z=0\) và tường \(x=0\) có vuông góc?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** Có
- **Lời giải có suy luận:** Pháp tuyến \((0;0;1)\) và \((1;0;0)\) có tích vô hướng bằng 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-W05; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 106.** Chứng minh \((P):x+y-z=0\) song song \((Q):2x+2y-2z+1=0\) và vuông góc \((R):x-y=0\).

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** \((P)\parallel(Q)\) phân biệt; \((P)\perp(R)\)
- **Lời giải có suy luận:** \(\vec n_Q=2\vec n_P\) nhưng hai phương trình không trùng; \(\vec n_P\cdot\vec n_R=1-1=0\).
- **Rubric Written /5 (chấm theo từng bước):** 2đ xác định hai cặp pháp tuyến; 1đ so sánh tỉ lệ và tích vô hướng; 1đ kiểm hằng số để phân biệt trùng/song song; 1đ kết luận hai quan hệ rõ ràng.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P21; PRIMARY_OUTCOME: TOP18-O21; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 107.** \((P):x-y=0\), \((Q):x+y=0\). Chúng vuông góc không?

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

Pháp tuyến \(\vec n_1=(1;-1;0)\),\(\vec n_2=(1;1;0)\); tích \(\vec n_1\cdot\vec n_2=0\) và cả hai khác không nên hai mặt vuông góc.

**Đường khắc phục D6:** Nếu \(\vec n_1\parallel\vec n_2\), kiểm tỉ lệ cả hệ số tự do trước khi nói 'hai mặt song song phân biệt'.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-C06; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 108.** Khoảng cách O tới \(x+2y+2z-3=0\)?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 1
- **Lời giải có suy luận:** Tử \(|-3|=3\), mẫu \(\sqrt9=3\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-P06; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 109.** \(M(2;-1;1)\), \((P):2x+y+2z-1=0\). Tính d.

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \(\frac43\)
- **Lời giải có suy luận:** Tử \(|4-1+2-1|=4\), mẫu 3.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-A06; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 110.** Hai mặt sàn \(z=0\) và trần \(z=3\) có khoảng cách bao nhiêu mét nếu tọa độ mét?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 3m
- **Lời giải có suy luận:** Chọn điểm O thuộc sàn, \(d(O,(z-3=0))=3\) m.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-W06; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 111.** Tính khoảng cách \(M(1;1;2)\) đến \(2x-2y+z-4=0\). Viết đủ tử, mẫu và kết luận.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** \(\frac23\)
- **Lời giải có suy luận:** Tử \(|2-2+2-4|=2\); mẫu \(\sqrt{4+4+1}=3\) nên \(d=\frac23\).
- **Rubric Written /5 (chấm theo từng bước):** 2đ thế tọa độ vào tử số và tính chuẩn n; 1đ sử dụng trị tuyệt đối; 1đ kết quả khoảng cách đúng; 1đ giải thích đơn vị và không âm.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P22; PRIMARY_OUTCOME: TOP18-O22; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 112.** Tính khoảng cách \(M=(1;1;1)\) đến \((P):2x-y+2z-6=0\).

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

Thay M: \(2-1+2-6=-3\), \(|-3|=3\), \(\lVert\vec n\rVert=\sqrt{4+1+4}=3\) nên \(d=1\).

**Đường khắc phục D6:** Đừng quên trị tuyệt đối và chuẩn hóa pháp tuyến; đáp án khoảng cách phải không âm.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-W06; PRIMARY_OUTCOME: TOP18-O22; ROLE: TOPIC_WRITTEN; RUBRIC_ORIGINAL_UNCHANGED -->
**Bài luyện 113.** Một đường bay được mô tả bởi \(d(t)=(2+t;-1;t)\), t thực; nó cắt mặt phẳng \((P):x+y+z=3\). Tìm giao điểm và tính khoảng cách từ điểm \(M=(0;0;0)\) đến P.

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

Thay d(t) vào P: \((2+t)-1+t=1+2t=3\Rightarrow t=1\), giao điểm \((3;-1;1)\). Pháp tuyến P là \((1;1;1)\), khoảng cách từ O đến P bằng \(\frac{|-3|}{\sqrt3}=\sqrt3\); đây là khoảng cách vuông góc, không phải khoảng cách O đến giao điểm.

**Rubric 4 điểm (mỗi tiêu chí 1 điểm):**
- Thế đúng d vào P và giải \(t=1\) — **1 điểm**.
- Kết luận giao điểm \((3;-1;1)\), kiểm thuộc P — **1 điểm**.
- Xác định pháp tuyến \((1;1;1)\) và tính \(d(O,(P))=\sqrt3\) — **1 điểm**.
- Phân biệt khoảng cách O–mặt với đoạn nối O–giao điểm — **1 điểm**.

</details>

## 5. Đường thẳng và giao điểm

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-C01; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 114.** Đường thẳng qua O hướng \((1;0;2)\)?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((t;0;2t)\)
- **Lời giải có suy luận:** \(M(t)=(0;0;0)+t(1;0;2)\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-P01; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 115.** Qua \((-1;0;4)\), hướng \((3;2;-1)\), viết tham số.

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((-1+3t;2t;4-t)\)
- **Lời giải có suy luận:** Cùng một t nhân từng thành phần của u.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-A01; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 116.** Drone xuất phát \((0;2;1)\), bay thẳng theo tốc độ \((1;-1;2)\) m/s. Vị trí sau t giây?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((t;2-t;1+2t)\)
- **Lời giải có suy luận:** Tọa độ vị trí bằng tọa độ điểm đầu cộng \(t\vec v\), điều kiện vật lý \(t\ge0\); đường thẳng hình học có \(t\in\mathbb R\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-W01; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 117.** Qua \(P(2;1;-1)\), hướng \((-1;3;2)\). Viết tham số và tìm tọa độ khi \(t=2\).

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** \((2-t;1+3t;-1+2t)\); khi \(t=2\) là \((0;7;3)\)
- **Lời giải có suy luận:** Thay \(t=0\) thu P; cùng \(t=2\) vào cả ba dòng: \((0;7;3)\).
- **Rubric Written /5 (chấm theo từng bước):** 2đ xác định \(M_0\) và hướng u khác 0; 1đ viết một tham số chung t; 1đ tính tọa độ kiểm theo t; 1đ phân biệt đường thẳng \(t\in\mathbb R\) với chuyển động \(t\ge0\).

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P24; PRIMARY_OUTCOME: TOP18-O24; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 118.** Đường qua \(P=(-1;2;0)\) hướng \(\vec v=(0;3;-2)\). Viết phương trình tham số.

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

\(x=-1,\ y=2+3t,\ z=-2t\) (\(t\in\mathbb R\)). Tại \(t=0\) trở về P; vectơ v khác 0.

**Đường khắc phục D6:** Nếu thành phần hướng bằng 0, tọa độ tương ứng là hằng, không tùy tiện bỏ phương trình đó.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-C02; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 119.** Qua \(A(0;0;0)\), \(B(2;0;1)\).

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((2t;0;t)\)
- **Lời giải có suy luận:** \(\overrightarrow{AB}=(2;0;1)\), \(t=0\to A,\ t=1\to B\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-P02; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 120.** Qua \(A(1;2;0)\),\(B(1;5;3)\).

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((1;2+3t;3t)\)
- **Lời giải có suy luận:** \(\overrightarrow{AB}=(0;3;3)\) không phải vectơ 0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-A02; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 121.** Cáp căng từ \((0;0;4)\) tới \((4;2;0)\). Viết quỹ đạo cáp.

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((4t;2t;4-4t)\)
- **Lời giải có suy luận:** \(\overrightarrow{AB}=(4;2;-4)\), đoạn vật lý \(0\le t\le1\); đường thẳng kéo dài \(t\in\mathbb R\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-W02; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 122.** Viết tham số qua \(P(2;-1;0)\),\(Q(0;3;2)\) và kiểm Q.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** \((2-2t;-1+4t;2t)\)
- **Lời giải có suy luận:** \(\overrightarrow{PQ}=(-2;4;2)\). \(t=1\) cho Q; P khác Q nên đường thẳng xác định.
- **Rubric Written /5 (chấm theo từng bước):** 2đ lấy đúng hiệu \(\overrightarrow{AB}\) khác 0; 1đ viết đủ ba phương trình cùng t; 1đ kiểm \(t=0,1\); 1đ giải thích đoạn thẳng \(0\le t\le1\).

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P25; PRIMARY_OUTCOME: TOP18-O25; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 123.** Tìm đường qua \(C=(1;-1;0)\),\(D=(1;1;4)\).

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

\(\overrightarrow{CD}=(0;2;4)\), nên \(x=1,\ y=-1+2t,\ z=4t\); \(t=0\) cho C, \(t=1\) cho D.

**Đường khắc phục D6:** Nhớ \(A\ne B\), lấy đúng \(\overrightarrow{AB}\) và thử lại tọa độ cả hai điểm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-C03; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 124.** Qua O, hướng \((1;2;3)\). Viết chính tắc.

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \(\frac{x}{1}=\frac y2=\frac z3\)
- **Lời giải có suy luận:** Khử tham số từ \((t;2t;3t)\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-P03; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 125.** Qua \((1;2;0)\), hướng \((0;1;-2)\). Viết dạng không chia cho 0.

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \(x=1;\ y-2=\frac z{-2}\)
- **Lời giải có suy luận:** x là hằng, chỉ khử tham số từ \(y=2+t\) và \(z=-2t\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-A03; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 126.** Đường trục thẳng đứng qua \((2;3;0)\) theo hướng Oz có phương trình?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \(x=2,\ y=3,\ z=t\)
- **Lời giải có suy luận:** Hướng \((0;0;1)\); không tạo \(\frac x0\) hoặc \(\frac y0\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-W03; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 127.** Qua \((-1;1;2)\),\(\vec u=(2;0;3)\). Viết cả tham số và dạng chính tắc đúng.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** \((-1+2t;1;2+3t)\); \(y=1,\ \frac{x+1}{2}=\frac{z-2}{3}\)
- **Lời giải có suy luận:** Do thành phần y của hướng bằng 0 nên y phải cố định bằng 1; kiểm ngược bằng t.
- **Rubric Written /5 (chấm theo từng bước):** 2đ xét chính xác thành phần hướng bằng 0; 1đ viết dạng chính tắc/chuyển đúng; 1đ kiểm dạng tham số; 1đ nói rõ vì sao không chia 0.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P26; PRIMARY_OUTCOME: TOP18-O26; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 128.** Cho đường \(x=2,\ y=-1+3t,\ z=5-t\). Viết chính tắc.

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

\(x=2\) và \(\frac{y+1}{3}=\frac{z-5}{-1}\). Không ghi \(\frac{x-2}{0}\).

**Đường khắc phục D6:** D6: nhận từng thành phần hướng bằng 0 rồi giữ phương trình hằng; tỉ số có mẫu 0 là vô nghĩa.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-C04; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 129.** \(d:(x;y;z)=(t;2t;3)\). Điểm \(M(2;4;3)\) thuộc d?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** Có
- **Lời giải có suy luận:** \(t=2\) thỏa \(x=2,\ y=4\),z cố định 3.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-P04; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 130.** \(d:(x;y;z)=(1+2t;3-t;0)\). \(M(5;1;0)\) thuộc d?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** Có
- **Lời giải có suy luận:** \(t=2\) thỏa \(x=5,\ y=1,\ z=0\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-A04; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 131.** Vị trí \(p(t)=(1+t;2+t;3-t)\). Tại \(t=3\) drone ở đâu?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((4;5;0)\)
- **Lời giải có suy luận:** Thay cùng \(t=3\) cho ba tọa độ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-W04; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 132.** \(d:(x;y;z)=(2-t;1+2t;3t)\). Kiểm \(M(0;5;6)\) và \(N(0;5;5)\).

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** M thuộc d, N không
- **Lời giải có suy luận:** M yêu cầu \(t=2\): \(x=0,\ y=5,\ z=6\); N cùng x,y đòi \(t=2\) nhưng z phải là 6 khác 5.
- **Rubric Written /5 (chấm theo từng bước):** 2đ giải tham số t từ tọa độ có hệ số khác 0; 1đ kiểm tọa độ thứ hai; 1đ kiểm tọa độ thứ ba và kết luận; 1đ nêu quy tắc cùng một t.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P27; PRIMARY_OUTCOME: TOP18-O27; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 133.** Điểm \(P=(2;0;2)\) có thuộc \(d:x=1+t,\ y=t,\ z=t\) không?

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

Không. Từ \(x=2\) suy \(t=1\); khi đó \(y=z=1\), khác \(y=0,\ z=2\) của P.

**Đường khắc phục D6:** Không dùng ba tham số khác nhau cho ba tọa độ; kiểm tất cả với một t chung.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-C05; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 134.** \(\vec u=(1;2;0),\ \vec v=(2;4;0)\). Hai hướng?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** Cùng phương
- **Lời giải có suy luận:** \(\vec v=2\vec u\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-P05; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 135.** \(\vec u=(1;0;1),\ \vec v=(1;0;-1)\). Hai hướng?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** Vuông góc
- **Lời giải có suy luận:** \(\vec u\cdot\vec v=1-1=0\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-A05; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 136.** Hai hành lang có hướng \((2;1;0)\),\((-1;2;0)\). Các hướng vuông góc?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** Có
- **Lời giải có suy luận:** Tích vô hướng \(-2+2=0\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-W05; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 137.** Chứng minh \(\vec u=(1;2;-1)\) vuông góc \(\vec v=(2;-1;0)\) và song song \(\vec w=(3;6;-3)\).

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** \(\vec u\cdot\vec v=0\) và \(\vec w=3\vec u\)
- **Lời giải có suy luận:** \(\vec u\cdot\vec v=2-2+0=0\); \(\vec w=3\vec u\). Cần thêm giao điểm để gọi hai đường thẳng vuông góc hình học.
- **Rubric Written /5 (chấm theo từng bước):** 2đ tính tích vô hướng và kiểm cùng phương đúng; 1đ kết luận hướng vuông góc; 1đ kết luận hướng song song; 1đ phân biệt hướng với quan hệ giao nhau hình học.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P28; PRIMARY_OUTCOME: TOP18-O28; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 138.** \(d_1\) qua \((1;1;0)\) hướng \((2;0;0)\), \(d_2\) qua \((3;1;0)\) hướng \((1;0;0)\). Trùng hay song song phân biệt?

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

Trùng: hướng cùng phương và điểm \((3;1;0)\) nằm trên \(d_1\) khi \(t=1\).

**Đường khắc phục D6:** Khi đã có hướng tỉ lệ, đừng kết luận song song phân biệt trước khi kiểm một điểm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-C06; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 139.** \(d_1(t)=(t;0;0)\), \(d_2(s)=(0;s;0)\). Có giao?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** Cắt tại O
- **Lời giải có suy luận:** x,y buộc \(t=s=0\), z đều 0; hai hướng không cùng phương.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-P06; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 140.** \(d_1(t)=(t;1;0)\), \(d_2(s)=(0;s;1)\). Quan hệ?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** Chéo nhau
- **Lời giải có suy luận:** Không thể giao vì z luôn là 0 và 1; hai hướng độc lập.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-A06; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 141.** Hai cáp \(d_1(t)=(t;0;2)\),\(d_2(s)=(0;s;2)\). Chúng giao đâu?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((0;0;2)\)
- **Lời giải có suy luận:** Từ \(x=y=0,\ t=s=0\); cùng cao độ \(z=2\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-W06; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 142.** Chứng minh \(d_1(t)=(1+t;t;0)\), \(d_2(s)=(0;s;1)\) chéo nhau.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** Không giao và khác hướng
- **Lời giải có suy luận:** Mọi điểm \(d_1\) có \(z=0\), \(d_2\) có \(z=1\) nên không giao; hướng \((1;1;0)\) và \((0;1;0)\) không cùng phương.
- **Rubric Written /5 (chấm theo từng bước):** 2đ lập hệ giao với hai tham số t,s; 1đ xét hai tọa độ; 1đ kiểm tọa độ còn lại và khác hướng; 1đ kết luận chéo/giao có căn cứ.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P29; PRIMARY_OUTCOME: TOP18-O29; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 143.** Phân loại \(d_1(t)=(t;0;0)\), \(d_2(s)=(0;s;2)\).

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

Khác phương, z luôn 0 ở \(d_1\) nhưng luôn 2 ở \(d_2\), hệ vô nghiệm nên chéo nhau.

**Đường khắc phục D6:** D6: giải đủ ba tọa độ; hình chiếu lên giấy giao nhau không chứng minh hai đường trong không gian cắt nhau.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-C07; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 144.** \(d:(x;y;z)=(1+t;0;1)\), \((P):x=3\). Tìm giao.

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((3;0;1)\)
- **Lời giải có suy luận:** \(1+t=3\Rightarrow t=2\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-P07; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 145.** \(d:(x;y;z)=(1+2t;t;3-t)\), \((P):x+y+z=8\). Tìm giao.

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((5;2;1)\)
- **Lời giải có suy luận:** Tổng \(4+2t=8\Rightarrow t=2\); điểm \((5;2;1)\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-A07; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 146.** Quỹ đạo drone \((2t;0;5-t)\), \(t\ge0\), chạm mặt đất \(z=0\) ở đâu?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** \((10;0;0)\) khi \(t=5\)
- **Lời giải có suy luận:** Giải \(5-t=0\Rightarrow t=5\); tọa độ \((10;0;0)\).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B15-W07; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 147.** Tìm giao \(d:(x;y;z)=(1+t;2-t;3+2t)\) với \((P):x-2y+z=10\), kiểm kết quả.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** \((3;0;7)\)
- **Lời giải có suy luận:** Thế vào vế trái: \(1+t-2(2-t)+3+2t=5t\Rightarrow t=2\), điểm \((3;0;7)\), \(3+0+7=10\).
- **Rubric Written /5 (chấm theo từng bước):** 2đ thế đúng ba tham số vào phương trình mặt phẳng; 1đ giải t; 1đ viết và kiểm giao điểm; 1đ nêu trường hợp 0/1/vô số nghiệm.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P30; PRIMARY_OUTCOME: TOP18-O30; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 148.** Tìm giao của \(d(t)=(2+t;-1;t)\) với mặt \((P):x+y+z=3\).

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

Thay: \((2+t)-1+t=3\Rightarrow 2t=2\Rightarrow t=1\), điểm \((3;-1;1)\).

**Đường khắc phục D6:** Khi \(\vec n\cdot\vec u=0\), không chia cho 0; so sánh hằng số để phân biệt nằm trong/song song.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-W03; PRIMARY_OUTCOME: TOP18-O30; ROLE: TOPIC_WRITTEN; RUBRIC_ORIGINAL_UNCHANGED -->
**Bài luyện 149.** Máy bay đi theo đường \(d(t)=(1+t;2-t;t)\), t đo bằng giờ. Nó đi qua mặt phẳng \((P):x+y+z=4\) tại thời điểm nào và tọa độ nào? Tại sao phải dùng chung một t?

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

Thay tọa độ vào P: \((1+t)+(2-t)+t=3+t=4\Rightarrow t=1\). Khi ấy \(M(1)=(2;1;1)\); kiểm \(2+1+1=4\). Nếu mỗi tọa độ một tham số, đó không còn là cùng một điểm trên quỹ đạo.

**Rubric 4 điểm (mỗi tiêu chí 1 điểm):**
- Viết đúng điều kiện \(3+t=4\) khi thế d vào mặt — **1 điểm**.
- Giải đúng \(t=1\) giờ — **1 điểm**.
- Tính tọa độ \((2;1;1)\) và thế kiểm lại P — **1 điểm**.
- Giải thích cùng một t trong ba tọa độ và đơn vị thời gian — **1 điểm**.

</details>

## 6. Góc và quan hệ vị trí

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B16-C01; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 150.** u=(1,0,0),v=(0,1,0). Góc?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 90°
- **Lời giải có suy luận:** Dot=0 nên cosθ=0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B16-P01; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 151.** u=(1,1,0),v=(1,-1,0). Góc?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 90°
- **Lời giải có suy luận:** Dot=1−1=0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B16-A01; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 152.** Hai hướng \((1;0;0)\) và \((1;1;0)\) tạo góc mấy độ?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 45°
- **Lời giải có suy luận:** Cosθ=1/√2, góc45°.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B16-W01; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 153.** Góc giữa u=(1,1,1) và v=(1,1,-1). Tính cos góc, giải thích trị tuyệt đối.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** cosθ=1/3; θ=arccos(1/3)
- **Lời giải có suy luận:** dot=1+1−1=1; hai chuẩn √3, cos=|1|/3. Đảo chiều v không đổi góc đường thẳng.
- **Rubric Written /5 (chấm theo từng bước):** 2đ tìm đúng hai vectơ hướng và tích vô hướng; 1đ tính hai chuẩn; 1đ lấy trị tuyệt đối và kết luận cos/góc; 1đ giải thích góc đường thẳng không tù.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P31; PRIMARY_OUTCOME: TOP18-O31; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 154.** u=(1,1,0),v=(1,−1,0). Tính góc giữa hai đường.

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

Tích vô hướng 0, nên góc 90°. Hai hướng đều khác không.

**Đường khắc phục D6:** Nếu ra góc tù từ cos âm, nhớ góc giữa **đường** lấy giá trị không tù bằng trị tuyệt đối.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B16-C02; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 155.** u=(1,0,0) và mặt z=0 tạo góc?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 0°
- **Lời giải có suy luận:** u·n=0 nên sinθ=0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B16-P02; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 156.** u=(0,0,1) và mặt z=0 tạo góc?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 90°
- **Lời giải có suy luận:** |u·n|/(|u||n|)=1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B16-A02; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 157.** Đường dốc hướng (3,0,4) so với nền z=0 có góc?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** arcsin(4/5) ≈53.13°
- **Lời giải có suy luận:** Độ tăng theo pháp tuyến z là4 trên quãng dài5, sinθ=4/5.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B16-W02; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 158.** u=(1,2,2), (P):z=0. Tìm sin và góc đường–mặt.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** sinθ=2/3; θ=arcsin(2/3)
- **Lời giải có suy luận:** n=(0,0,1), |u|=3, dot=2 nên sinθ=2/3.
- **Rubric Written /5 (chấm theo từng bước):** 2đ nhận hướng u và pháp tuyến n; 1đ tính tích vô hướng và chuẩn; 1đ dùng đúng sin để tìm góc; 1đ kiểm trường hợp song song/vuông góc.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P32; PRIMARY_OUTCOME: TOP18-O32; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 159.** Đường có hướng u=(3,4,0), mặt z=0. Góc giữa đường và mặt?

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

0°, do n=(0,0,1), u·n=0. Chưa biết đường nằm trong hay song song phân biệt nếu chưa kiểm điểm gốc.

**Đường khắc phục D6:** Không nhầm góc pháp tuyến–đường với góc đường–mặt; trường hợp suy biến hình chiếu khi θ=90° vẫn xác định góc 90°.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-W04; PRIMARY_OUTCOME: TOP18-O32; ROLE: TOPIC_WRITTEN; RUBRIC_ORIGINAL_UNCHANGED -->
**Bài luyện 160.** Một đường d có vectơ chỉ phương u=(1,0,√3); mặt phẳng P:z=0. Tính góc giữa d và P. So sánh với góc giữa u và pháp tuyến n=(0,0,1), giải thích vì sao hai góc khác nhau.

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

u·n=√3, |u|=2, |n|=1 ⇒ sinθ=√3/2, nên góc đường–mặt θ=60°. Góc nhọn giữa u và pháp tuyến là arccos(√3/2)=30°, tức hai góc phụ nhau. Nếu dùng cos của u,n để gọi trực tiếp góc đường–mặt thì sai.

**Rubric 4 điểm (mỗi tiêu chí 1 điểm):**
- Nhận diện pháp tuyến n=(0,0,1) và hướng u khác không — **1 điểm**.
- Viết đúng sinθ=|u·n|/(|u||n|) — **1 điểm**.
- Tính được θ=60° và góc với pháp tuyến 30° — **1 điểm**.
- Giải thích vì sao dùng sin/hình chiếu và nêu giới hạn công thức — **1 điểm**.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B16-C03; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 161.** Hai mặt z=0 và x=0 tạo góc?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 90°
- **Lời giải có suy luận:** Pháp tuyến vuông góc.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B16-P03; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 162.** Hai mặt x+y=0 và x−y=0 tạo góc?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 90°
- **Lời giải có suy luận:** n1·n2=1−1=0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B16-A03; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 163.** Mái z=x và nền z=0 tạo góc?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 45°
- **Lời giải có suy luận:** n_mái=(-1,0,1),n_nền=(0,0,1), cos=1/√2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B16-W03; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 164.** Góc giữa P:x+2y+2z=0 và Q:z=0?

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** cosθ=2/3, θ=arccos(2/3)
- **Lời giải có suy luận:** nP=(1,2,2), |nP|=3, nQ=(0,0,1), cos=2/3.
- **Rubric Written /5 (chấm theo từng bước):** 2đ tìm đúng pháp tuyến của cả hai mặt; 1đ tính dot/chuẩn; 1đ dùng cos trị tuyệt đối; 1đ so sánh với công thức góc đường–mặt.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P33; PRIMARY_OUTCOME: TOP18-O33; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 165.** P:x+y=0,Q:x−y=1. Tính góc hai mặt.

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

Pháp tuyến n1=(1,1,0),n2=(1,−1,0), dot=0 nên góc 90°.

**Đường khắc phục D6:** Kiểm chọn n≠0; nhớ góc giữa hai mặt là góc nhỏ, không lệ thuộc hướng n.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B16-C04; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 166.** u=(0,0,1), mặt z=0. Quan hệ hướng?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** Đường vuông góc mặt
- **Lời giải có suy luận:** u cùng phương n=(0,0,1), góc90°.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B16-P04; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 167.** u=(1,0,0), mặt z=0. Góc?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 0°
- **Lời giải có suy luận:** u·n=0, hướng song song mặt.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B16-A04; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 168.** Thang máy đi theo hướng Oz; sàn nằm z=2. Góc đường với sàn?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 90°
- **Lời giải có suy luận:** Oz cùng phương pháp tuyến mặt sàn.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B16-W04; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 169.** u=(1,1,0) và P:x−y=0. Chứng minh góc0 và cho biết điều kiện để đường nằm trọn trong P.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** u·n=0; phải có điểm xuất phát nằm trong P
- **Lời giải có suy luận:** n=(1,-1,0); u·n=1−1=0. Nếu M0∈P thì mọi M0+t u∈P, ngược lại song song phân biệt.
- **Rubric Written /5 (chấm theo từng bước):** 2đ tính dot u·n; 1đ phân biệt u·n=0 và u∥n; 1đ kiểm điểm gốc để nói nằm trong hay song song; 1đ kết luận góc đúng.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P34; PRIMARY_OUTCOME: TOP18-O34; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 170.** Mặt x=0 và đường d(t)=(1,t,0). Quan hệ?

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

n=(1,0,0),u=(0,1,0), n·u=0 và điểm (1,0,0) không thuộc x=0, nên song song phân biệt.

**Đường khắc phục D6:** Một đẳng thức hướng không quyết định vị trí; kiểm điểm/đường thuộc nhau.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B16-C05; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 171.** Đường có hướng \((1;0;1)\) so với nền ngang?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 45°
- **Lời giải có suy luận:** Độ cao1 trên độ dài√2.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B16-P05; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 172.** Pháp tuyến mái n=(0,3,4); mặt đất n0=(0,0,1). Góc hai mặt?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** arccos(4/5) ≈36.87°
- **Lời giải có suy luận:** Cos góc giữa pháp tuyến =4/5.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B16-A05; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 173.** Một mái có n=(0,3,4) và nền z=0; độ nghiêng?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** ≈36.87°
- **Lời giải có suy luận:** Lấy arccos(|n·n0|/(|n||n0|))=arccos(4/5).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B16-W05; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 174.** Một thanh chống có hướng \((6;0;8)\) dài 10m. Tính sin góc với nền và độ cao tăng sau đoạn đó.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** sinθ=4/5, độ cao8m
- **Lời giải có suy luận:** Chuẩn u=10, thành phần z=8; sinθ=8/10=4/5, độ cao tăng8m.
- **Rubric Written /5 (chấm theo từng bước):** 2đ xác định độ dài dốc và thành phần độ cao; 1đ thiết lập sinθ=Δh/L; 1đ kết quả góc/độ cao; 1đ kiểm đơn vị và ý nghĩa thực tiễn.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P35; PRIMARY_OUTCOME: TOP18-O35; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 175.** Một dây cáp có độ dời ngang 8 m, tăng cao 6 m. Tính sin góc cáp với nền và độ dài cáp.

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

Độ dài cáp √(8²+6²)=10 m, sinθ=6/10=3/5.

**Đường khắc phục D6:** Phân biệt quãng ngang và chiều dài đường xiên; nếu có thể hãy kiểm bằng tam giác vuông.

</details>

## 7. Mặt cầu và thiết diện

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B17-C01; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 176.** Tâm O, bán kính2, phương trình?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** x²+y²+z²=4
- **Lời giải có suy luận:** M cách O đúng2 nên OM²=4.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B17-P01; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 177.** C(2,0,-1),R=3. Viết phương trình.

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** (x−2)²+y²+(z+1)²=9
- **Lời giải có suy luận:** Trừ đúng tọa độ tâm, R²=9.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B17-A01; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 178.** Bộ phát sóng tâm \((0;0;5)\), bán kính 10m. Biên phủ 3D?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** x²+y²+(z−5)²=100
- **Lời giải có suy luận:** Mặt cầu bán kính10m quanh tâm; vùng phủ là bất đẳng thức ≤100 chứ không phải phương trình bề mặt.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B17-W01; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 179.** C(-1,2,0), R=√5. Lập phương trình mặt cầu và chứng minh R>0.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** (x+1)²+(y−2)²+z²=5
- **Lời giải có suy luận:** Thế tâm cho vế trái0; R²=5 dương, dùng công thức chuẩn.
- **Rubric Written /5 (chấm theo từng bước):** 2đ xác định tâm C và bán kính R>0; 1đ lập ba hiệu bình phương; 1đ ghi chính xác R²; 1đ phân biệt bề mặt cầu với khối cầu.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P36; PRIMARY_OUTCOME: TOP18-O36; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 180.** Viết mặt cầu tâm \((-1;2;0)\), bán kính 3.

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

(x+1)²+(y−2)²+z²=9. Các dấu trong ngoặc đối với tọa độ tâm.

**Đường khắc phục D6:** Bán kính phải dương; phương trình không có điểm nếu tổng bình phương bằng số âm.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B17-C02; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 181.** x²+y²+z²−2x=0 có tâm và bán kính?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** C(1,0,0), R=1
- **Lời giải có suy luận:** (x−1)²+y²+z²=1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B17-P02; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 182.** x²+y²+z²+2x−4y+6z+5=0 có tâm, R?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** C(-1,2,-3), R=3
- **Lời giải có suy luận:** Hoàn chỉnh: (x+1)²+(y−2)²+(z+3)²=1+4+9−5=9.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B17-A02; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 183.** x²+y²+z²+4=0 có là mặt cầu thực?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** Không
- **Lời giải có suy luận:** Tổng ba bình phương ≥0 nên không thể bằng −4; R²<0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B17-W02; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 184.** Hoàn chỉnh và phân loại x²+y²+z²−4x+2y−2z+1=0.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** C(2,-1,1), R=√5
- **Lời giải có suy luận:** Chuyển về (x−2)²+(y+1)²+(z−1)²=5; R²=4+1+1−1=5>0.
- **Rubric Written /5 (chấm theo từng bước):** 2đ hoàn chỉnh ba bình phương; 1đ tìm đúng tâm; 1đ tính R² và R; 1đ xét điều kiện R²>0 và trường hợp suy biến.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P37; PRIMARY_OUTCOME: TOP18-O37; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 185.** Viết tâm và bán kính của x²+y²+z²+2x−4y+4=0.

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

Hoàn bình phương: (x+1)²+(y−2)²+z²=1; tâm (−1,2,0), R=1.

**Đường khắc phục D6:** Không quên chuyển hằng số khi hoàn bình phương; tính R² trước khi lấy căn, kiểm >0.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B17-C03; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 186.** C=O,R=3,P(1,1,1). Vị trí?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** Trong khối cầu
- **Lời giải có suy luận:** OP²=3<9.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B17-P03; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 187.** C(1,0,0),R=2,P(4,0,0). Vị trí?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** Ngoài khối cầu
- **Lời giải có suy luận:** CP²=(4−1)²=9>4.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B17-A03; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 188.** Mặt cầu tâm (0,0,3), R=5 cắt nền z=0 theo vòng tròn bán kính?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 4m
- **Lời giải có suy luận:** Khoảng cách tâm-nền3; r²=25−9=16 nên r=4.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B17-W03; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 189.** C(1,2,2),R=3. Phân loại P(4,2,2), Q(1,2,0), Z(1,2,6).

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** P trên; Q trong; Z ngoài
- **Lời giải có suy luận:** CP²=9, CQ²=4, CZ²=16, so với R²=9.
- **Rubric Written /5 (chấm theo từng bước):** 2đ tính ba khoảng cách bình phương so với tâm; 1đ so với R²; 1đ phân loại đủ từng điểm; 1đ phân biệt trong khối cầu và trên mặt cầu.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P38; PRIMARY_OUTCOME: TOP18-O38; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 190.** Mặt cầu tâm C=(1,1,1) R=2, xét P=(1,1,3) và Q=(2,2,2).

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

CP²=4=R² nên P trên; CQ²=3<R² nên Q trong.

**Đường khắc phục D6:** So bình phương khoảng cách và bán kính; nếu nhầm tâm, thay hệ tọa độ dịch chuyển M−C.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B17-C04; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 191.** \(A=(0;0;0)\),\(B=(2;0;0)\). Mặt cầu?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** (x−1)²+y²+z²=1
- **Lời giải có suy luận:** Tâm (1,0,0), R=1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B17-P04; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 192.** \(A(1;1;1)\), \(B(3;1;1)\). Mặt cầu?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** (x−2)²+(y−1)²+(z−1)²=1
- **Lời giải có suy luận:** Trung điểm(2,1,1), R=1.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B17-A04; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 193.** Cáp đối diện \(A(0;0;0)\),\(B(0;6;8)\). Tâm và bán kính mặt cầu đường kính AB?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** C(0,3,4), R=5
- **Lời giải có suy luận:** AB=10, trung điểm (0,3,4), R=5.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B17-W04; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 194.** \(A(-1;0;2)\),\(B(3;2;0)\) là hai đầu đường kính. Viết mặt cầu và kiểm A,B.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** (x−1)²+(y−1)²+(z−1)²=6
- **Lời giải có suy luận:** C=(1,1,1), AB²=4²+2²+(−2)²=24 nên R²=6. CA²=CB²=6.
- **Rubric Written /5 (chấm theo từng bước):** 2đ tính đúng trung điểm AB; 1đ tính AB² và chia 4; 1đ lập phương trình; 1đ kiểm cả A và B trên mặt cầu.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P39; PRIMARY_OUTCOME: TOP18-O39; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 195.** \(A=(0;2;0)\),\(B=(0;2;6)\). Xác định tâm, bán kính và phương trình mặt cầu.

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

Tâm C=(0,2,3), AB=6, R=3, phương trình x²+(y−2)²+(z−3)²=9.

**Đường khắc phục D6:** Tính trung điểm trước; đường kính là AB, bán kính nửa AB, không dùng AB trực tiếp làm R.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-W05; PRIMARY_OUTCOME: TOP18-O39; ROLE: TOPIC_WRITTEN; RUBRIC_ORIGINAL_UNCHANGED -->
**Bài luyện 196.** Mặt cầu có đường kính AB với A=(0,0,0), B=(2,4,0). Tìm tâm, bán kính và phương trình; tính bán kính đường tròn khi mặt phẳng z=1 cắt mặt cầu.

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

Tâm C=(1,2,0), AB=√(4+16)=2√5, R=√5. Phương trình (x−1)²+(y−2)²+z²=5. Mặt z=1 cách tâm d=1<R, nên tiết diện có bán kính √(5−1)=2.

**Rubric 4 điểm (mỗi tiêu chí 1 điểm):**
- Tính đúng tâm \(C=(1;2;0)\) — **1 điểm**.
- Tính đúng bán kính R=√5 và phương trình mặt cầu — **1 điểm**.
- Xác định d=1 đến mặt phẳng z=1, kiểm d<R — **1 điểm**.
- Tính đúng bán kính tiết diện 2 và phân biệt với R — **1 điểm**.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B17-C05; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 197.** C=O, R=3, mặt z=3 phân loại?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** Tiếp xúc
- **Lời giải có suy luận:** h=3=R.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B17-P05; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 198.** C(0,0,1),R=5, mặt z=0 cắt theo vòng tròn bán kính?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 2√6
- **Lời giải có suy luận:** h=1<5, r=√(25−1)=√24=2√6.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B17-A05; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 199.** Vùng phát sóng tâm (0,0,10),R=6m có chạm nền z=0 không?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** Không
- **Lời giải có suy luận:** h=10>R=6, không có điểm chung.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B17-W05; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 200.** C(1,-2,3), R=4, P:2x−y+2z+2=0. Chứng minh tiếp xúc và tìm tiếp điểm.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** Tiếp xúc tại H(-5/3,-2/3,1/3)
- **Lời giải có suy luận:** h=|2+2+6+2|/3=12/3=4; pháp tuyến n=(2,-1,2); H=C−(12/9)n=(-5/3,-2/3,1/3), H∈P.
- **Rubric Written /5 (chấm theo từng bước):** 2đ tính khoảng cách h từ tâm tới mặt phẳng; 1đ so với R; 1đ tìm bán kính thiết diện hoặc tiếp điểm; 1đ kiểm kết luận và điều kiện h<R/h=R/h>R.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P40; PRIMARY_OUTCOME: TOP18-O40; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 201.** Mặt cầu tâm \(C=(0;0;1)\) bán kính 5, mặt \(z=4\). Tính bán kính đường tròn thiết diện.

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

Khoảng cách d=|4−1|=3, r=√(25−9)=4; hình tròn có tâm (0,0,4).

**Đường khắc phục D6:** Đầu tiên tính khoảng cách tâm–mặt chuẩn; không lấy trực tiếp số D của phương trình làm d nếu pháp tuyến chưa chuẩn hóa.

</details>

**Vận dụng tổng hợp — radar và hành trình bay**





**Bối cảnh liên thông.** Một radar đặt tại O=(0;0;0), vùng phủ bán kính 5 km. Máy bay tại A=(6;4;0) km và bay theo hướng u=(−1;0;0) km/giờ, chỉ xét thời gian t≥0. Ta muốn biết **nó có đi vào vùng phủ hay không, và vào–ra lúc nào**. Đây là bài vận dụng tổng hợp: em cần kết hợp tọa độ, tham số thời gian, khoảng cách và phương trình mặt cầu.

<!-- CANONICAL_ITEM_ID: THPT-TOP18-W07; PRIMARY_OUTCOME: TOP18-O38; ROLE: TOPIC_WRITTEN; APPLICATION_ONLY_AFTER_B17; ORIGINAL_R03_RUBRIC_UNCHANGED -->
**Bài luyện 202.** Một radar đặt tại O=(0;0;0) km, vùng phủ là khối cầu bán kính 5 km. Máy bay xuất phát từ A=(6;4;0) km, bay thẳng đều với vectơ vận tốc u=(−1;0;0) km/giờ; chỉ xét thời gian t≥0 giờ. (a) Viết tọa độ M(t). (b) Tính khoảng cách ngắn nhất từ radar đến đường bay trong khoảng t≥0. (c) Tìm thời điểm máy bay nằm trên biên vùng phủ và khoảng thời gian nó nằm trong vùng.

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

**Bước 1 – biểu diễn hành trình:** M(t)=A+t u=(6−t;4;0), t≥0. Ta không dùng một tham số riêng cho mỗi tọa độ.

**Bước 2 – xác định điểm gần nhất:** OM(t)²=(6−t)²+4²+0²=(t−6)²+16. Vì (t−6)²≥0 và t=6 thỏa t≥0, khoảng cách nhỏ nhất bằng **4 km**, đạt khi M(6)=(0;4;0). Khoảng cách 4<5 nên máy bay có đi vào vùng phủ.

**Bước 3 – tìm hai thời điểm qua biên:** Biên cầu thỏa OM(t)²=5² nên (t−6)²+16=25, tức (t−6)²=9. Suy ra **t=3 giờ** và **t=9 giờ**, lần lượt tại M(3)=(3;4;0) và M(9)=(−3;4;0). Kiểm cả hai điểm: 3²+4²=5².

**Bước 4 – kết luận có điều kiện:** Với **3<t<9**, OM(t)<5, máy bay ở trong vùng cầu; t=3 hoặc t=9 ở đúng biên; t<3 hay t>9 ngoài vùng. Bài giả định máy bay đi đều với đơn vị km/giờ và radar có vùng phủ hình cầu cố định.

**Đối chiếu bằng hình sau khi tự giải:**

![Radar tâm O và đường bay qua vùng cầu: vào tại t=3, gần nhất t=6, ra tại t=9](../../../../docs/assets/images/thpt/FIG-TOP18-RADAR-TRAJECTORY-OXYZ-R00.svg)

**Đọc hình nền trắng:** Xem thiết diện Oxy (z=0): đường tròn tâm O bán kính 5, đường bay có tung độ y=4. Mũi tên chỉ chiều bay từ A=(6;4) sang phía x giảm. Hai chấm xanh ở t=3 và t=9 là **giao với biên**; chấm cam ở t=6 là vị trí gần radar nhất, cách O đúng 4 km. Hình biểu diễn đúng tỉ lệ trong mặt phẳng Oxy nhưng **không** thay phép chứng minh bằng bình phương khoảng cách.

**Rubric 4 điểm, mỗi tiêu chí 1 điểm:**
- Viết đúng M(t)=(6−t;4;0), nêu t≥0 — **1 điểm**.
- Lập OM(t)²=(t−6)²+16 và tìm đúng khoảng cách nhỏ nhất 4 km tại t=6 — **1 điểm**.
- Giải đúng phương trình giao biên t=3 và t=9, kiểm lại tọa độ — **1 điểm**.
- Phân loại trong/ngoài/biên theo t, nêu rõ điều kiện thời gian và đơn vị — **1 điểm**.

</details>

## 8. Vận dụng tích hợp sau B17 (tự chọn)

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-C07; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 203.** C(0,0,2),R=3; sàn z=0. Bán kính giao?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** √5
- **Lời giải có suy luận:** r=√(3²−2²)=√5.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-P07; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 204.** C(1,2,1),R=2; sàn z=0. Bán kính giao?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** √3
- **Lời giải có suy luận:** h=1, r=√(4−1)=√3.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-A07; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 205.** Bóng phủ của nguồn cầu đặt cao 6m, bán kính 10m trên nền ngang có bán kính?

<details markdown="1"><summary>Lời giải</summary>

- **Đáp án:** 8m
- **Lời giải có suy luận:** h=6<R=10 nên r=√(100−36)=8m.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G12-B14-W07; ORIGINAL_SOURCE_BLOB: ad4165de0a2c3442b50d7f3d0019a99b5bbdef39; ORIGINAL_OWNER: SGK; NO_NEW_ITEM_ID; CHV_SOURCE -->
**Bài luyện 206.** Giải thích ba trường hợp giao của cầu tâm cách mặt phẳng h và bán kính R.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** h<R: hình tròn; h=R: tiếp xúc; h>R: không giao.
- **Lời giải có suy luận:** Dùng vuông góc tâm–mặt phẳng và r²=R²−h² khi vế phải không âm.
- **Rubric Written /5 (chấm theo từng bước):** 2đ xác định khoảng cách tâm–mặt và điều kiện h so R; 1đ lập r²+h²=R²; 1đ tính bán kính/3 trường hợp; 1đ giải thích ý nghĩa vật lý.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P23; PRIMARY_OUTCOME: TOP18-O23; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 207.** Mặt cầu tâm O R=10, mặt phẳng z=6. Tính bán kính đường tròn cắt.

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

r=√(100−36)=8. Nếu mặt ở z=11 thì d>R nên không có giao.

**Đường khắc phục D6:** Cần học khái niệm mặt cầu B17 trước; không cho O23 làm outcome Core bắt buộc của B14 hay SGK-ChII.

</details>

# Tự kiểm tra

Những câu dưới đây là bài tự ôn đã có trong Luyện tập, không phải đề độc lập để cấp điểm năng lực. Hãy tự làm trên giấy, ghi rõ giả thiết và phép tính trước khi quay về phần Luyện tập để tự đối chiếu; không có đáp án hay gợi ý trên trang này.

## 1. Câu hỏi tự ôn

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP18-P03; PLACEMENT: PUBLIC_SELF_CHECK_QUESTION_ONLY; ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY; NEVER_OFFICIAL_RD1; NO_PRE_SUBMIT_KEY_RUBRIC_AI -->
**Câu 1.** Trong tam giác ABC, viết \(\overrightarrow{AB}+\overrightarrow{BC}-\overrightarrow{AC}\) dưới dạng đơn giản.

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP18-P07; PLACEMENT: PUBLIC_SELF_CHECK_QUESTION_ONLY; ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY; NEVER_OFFICIAL_RD1; NO_PRE_SUBMIT_KEY_RUBRIC_AI -->
**Câu 2.** Điểm \(A=(0;4;-3)\) thuộc mặt phẳng Oyz không? Vì sao?

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP18-P10; PLACEMENT: PUBLIC_SELF_CHECK_QUESTION_ONLY; ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY; NEVER_OFFICIAL_RD1; NO_PRE_SUBMIT_KEY_RUBRIC_AI -->
**Câu 3.** Cho \(C=(-1;3;2)\), \(D=(2;3;-2)\). Tính \(\overrightarrow{CD}\) và \(\overrightarrow{DC}\); có đối nhau không?

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP18-P14; PLACEMENT: PUBLIC_SELF_CHECK_QUESTION_ONLY; ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY; NEVER_OFFICIAL_RD1; NO_PRE_SUBMIT_KEY_RUBRIC_AI -->
**Câu 4.** \(\vec u=(1;0;0)\), \(\vec v=(1;1;0)\). Tính cos góc giữa hai vectơ.

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP18-P16; PLACEMENT: PUBLIC_SELF_CHECK_QUESTION_ONLY; ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY; NEVER_OFFICIAL_RD1; NO_PRE_SUBMIT_KEY_RUBRIC_AI -->
**Câu 5.** Máy bay mô hình \(M_0=(2;-1;4)\) km, \(\vec v=(1;2;-1)\) km/h. Sau 2 h ở đâu?

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP18-P17; PLACEMENT: PUBLIC_SELF_CHECK_QUESTION_ONLY; ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY; NEVER_OFFICIAL_RD1; NO_PRE_SUBMIT_KEY_RUBRIC_AI -->
**Câu 6.** \(\vec u=(1;1;0)\), \(\vec v=(0;1;1)\). Tìm một pháp tuyến khác không bằng tích có hướng.

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP18-P19; PLACEMENT: PUBLIC_SELF_CHECK_QUESTION_ONLY; ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY; NEVER_OFFICIAL_RD1; NO_PRE_SUBMIT_KEY_RUBRIC_AI -->
**Câu 7.** Lập mặt phẳng qua \(A=(0;0;0)\),\(B=(1;0;1)\),\(C=(0;1;1)\).

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP18-P22; PLACEMENT: PUBLIC_SELF_CHECK_QUESTION_ONLY; ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY; NEVER_OFFICIAL_RD1; NO_PRE_SUBMIT_KEY_RUBRIC_AI -->
**Câu 8.** Tính khoảng cách \(M=(1;1;1)\) đến \((P):2x-y+2z-6=0\).

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP18-P24; PLACEMENT: PUBLIC_SELF_CHECK_QUESTION_ONLY; ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY; NEVER_OFFICIAL_RD1; NO_PRE_SUBMIT_KEY_RUBRIC_AI -->
**Câu 9.** Đường qua \(P=(-1;2;0)\) hướng \(\vec v=(0;3;-2)\). Viết phương trình tham số.

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP18-P29; PLACEMENT: PUBLIC_SELF_CHECK_QUESTION_ONLY; ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY; NEVER_OFFICIAL_RD1; NO_PRE_SUBMIT_KEY_RUBRIC_AI -->
**Câu 10.** Phân loại \(d_1(t)=(t;0;0)\), \(d_2(s)=(0;s;2)\).

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP18-P35; PLACEMENT: PUBLIC_SELF_CHECK_QUESTION_ONLY; ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY; NEVER_OFFICIAL_RD1; NO_PRE_SUBMIT_KEY_RUBRIC_AI -->
**Câu 11.** Một dây cáp có độ dời ngang 8 m, tăng cao 6 m. Tính sin góc cáp với nền và độ dài cáp.

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP18-P40; PLACEMENT: PUBLIC_SELF_CHECK_QUESTION_ONLY; ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY; NEVER_OFFICIAL_RD1; NO_PRE_SUBMIT_KEY_RUBRIC_AI -->
**Câu 12.** Mặt cầu tâm \(C=(0;0;1)\) bán kính 5, mặt \(z=4\). Tính bán kính đường tròn thiết diện.

<details markdown="1"><summary>Đối chiếu</summary>

Sau khi tự giải đủ **12 câu**, hãy tìm đúng bài ở **Luyện tập**, tự mở **Lời giải** rồi ghi chỗ sai đầu tiên. Mỗi câu sử dụng lại đúng `item_id` của bài đã có, không phải chứng cứ đánh giá độc lập.

| Câu tự kiểm tra | Bài luyện có lời giải |
| --- | --- |
| Câu 1 – 2 – 3 – 4 | Bài luyện 15 – 35 – 50 – 70 |
| Câu 5 – 6 – 7 – 8 | Bài luyện 81 – 86 – 96 – 112 |
| Câu 9 – 10 – 11 – 12 | Bài luyện 118 – 143 – 175 – 201 |

</details>

Nguồn: SGK Toán 12, Kết nối tri thức với cuộc sống, Tập Một Chương II Bài 6–8 và Tập Hai Chương V Bài 14–17.
