# Bài 6. Hệ thức lượng trong tam giác

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG III · KIẾN THỨC SGK KNTT</p><p class="thpt-r4-lead">Học kiến thức và ví dụ theo Bài 6, sau đó tự luyện.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương III</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra</a></nav></div>

## Trước khi học — hiểu ý nghĩa trước khi nhớ quy tắc

Em hãy đọc tình huống, nhắc lại kiến thức đã học và tự trả lời từng câu **Tự thử** trước khi đọc phần công thức. Chỉ mở lời giải sau khi em đã tự làm. Nếu gặp khó khăn, xem mục hỗ trợ của bài rồi mới luyện Core/Luyện tập. Hoạt động này không chấm điểm hay ghi mức độ thành thạo.

### Định lí côsin

**Vì sao cần học?** Pitago chỉ cho tam giác vuông; với hai cạnh và góc xen giữa là góc tù, cạnh thứ ba có thể dài hơn nhiều. Làm sao tính đúng khi góc không vuông?

**Em đã biết gì?** Trong tam giác ABC không suy biến, a=BC đối diện A, b=CA đối diện B, c=AB đối diện C; mọi cạnh dương và a<b+c. Ôn Pitago và cos góc tù âm.

**Hiểu bản chất trước công thức** Chiếu một cạnh lên hướng cạnh kia: độ dài cạnh đối diện phụ thuộc cả hai cạnh và góc xen giữa. Hệ số điều chỉnh Pitago là −2bc cosA, từ đó a²=b²+c²−2bc cosA; A=90° thì cosA=0 và quay lại Pitago.

**Cách đọc hình và hình dung** Dùng hình minh họa bên dưới: chỉ A, hai cạnh b,c kề A và cạnh a đối diện; đối chiếu góc được sử dụng, không lấy nhầm góc B/C vào −2bc cos.

**Vì sao làm theo cách này?** Chọn định lí côsin trong trường hợp SAS (hai cạnh và góc xen giữa) hoặc SSS (tìm góc); không áp dụng công thức Pitago cho góc tù/nhọn không vuông.

**Tự thử trước Core** Trong tam giác có b=c=5 và A=120°, tính a. Tại sao cạnh a dài hơn mỗi cạnh kề 5?

<details class="thpt-r4-pedagogical-note" markdown="1" data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHIII-TRY06">
<summary>Em đã tự thử? Mở lời giải để đối chiếu</summary>

**Lời giải và giải thích.** a²=25+25−50cos120°=50+25=75, nên a=5√3. Vì cos120°<0, phần điều chỉnh khiến cạnh đối diện góc tù dài hơn 5.

**Nếu chưa đúng:** Xem lại mục Hỗ trợ khắc phục lỗi ở cuối bài, thử nhắc lại bản chất bằng lời của mình rồi làm câu liên kết câu Core/Luyện tập tương ứng; phần sau này là luyện tập tự nguyện, không là kiểm tra độc lập.

</details>

### Định lí sin

**Vì sao cần học?** Trong đo đạc, thường dễ đo góc từ hai điểm hơn là trực tiếp đo khoảng cách tới vật. Định lí sin giúp nối các góc với các cạnh đối diện mà không cần dựng đường cao rồi chia nhỏ tam giác.

**Em đã biết gì?** Tổng ba góc trong tam giác bằng 180°; cạnh a đối diện góc A, sin góc trong tam giác dương; R>0 là bán kính ngoại tiếp. Phân biệt một góc với cạnh đối diện của góc đó.

**Hiểu bản chất trước công thức** Định lí sin a/sinA=b/sinB=c/sinC=2R cho thấy cạnh lớn tương ứng sin góc lớn hơn trong cùng tam giác. Nó có ích cho ASA/AAS; với dữ liệu SSA có thể tồn tại hai tam giác khác nhau, không mặc định mọi kết quả arcsin là duy nhất.

**Cách đọc hình và hình dung** Trong hình tam giác minh họa ở phần kiến thức bên dưới, đánh dấu cặp A–a, B–b, C–c; đặt hai cạnh đối diện cạnh nhau rồi so sánh. Hình bên dưới chỉ minh họa nhãn cạnh và góc, không phải một hình riêng chứng minh định lí sin.

**Vì sao làm theo cách này?** Khi biết hai góc và một cạnh, tìm góc thứ ba rồi ghép đúng cặp cạnh–sin góc; dùng a/sinA=2R nếu cần bán kính. Không thể khôi phục cả tam giác từ một cặp A,a duy nhất.

**Tự thử trước Core** Trong tam giác có A=30° và a=5, tính bán kính ngoại tiếp R. Chỉ với hai dữ kiện này có xác định duy nhất các góc B,C không? Vì sao?

<details class="thpt-r4-pedagogical-note" markdown="1" data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHIII-TRY07">
<summary>Em đã tự thử? Mở lời giải để đối chiếu</summary>

**Lời giải và giải thích.** 2R=a/sinA=5/(1/2)=10 nên R=5. Không xác định duy nhất B,C: cần thêm dữ kiện độc lập; chỉ biết B+C=150°.

**Nếu chưa đúng:** Xem lại mục Hỗ trợ khắc phục lỗi ở cuối bài, thử nhắc lại bản chất bằng lời của mình rồi làm câu liên kết câu Core/Luyện tập tương ứng; phần sau này là luyện tập tự nguyện, không là kiểm tra độc lập.

</details>

### Diện tích tam giác theo sin

**Vì sao cần học?** Nếu hai cạnh và góc xen giữa đã biết nhưng chưa biết đường cao, liệu tính được diện tích mà không cần dựng và đo đường cao trực tiếp?

**Em đã biết gì?** Diện tích tam giác S=1/2×đáy×chiều cao. Với một cạnh c làm đáy, chiều cao từ đầu cạnh b tạo góc A có độ lớn b sinA; góc trong nằm (0°,180°) nên sinA>0.

**Hiểu bản chất trước công thức** Từ chiều cao h=b sinA, suy S=(1/2)bc sinA. Điều này giải thích cả việc hai góc bù có cùng sin nên khi giữ nguyên hai cạnh kề, diện tích có thể bằng nhau dù cạnh đối diện đổi chiều dài.

**Cách đọc hình và hình dung** Trong hình minh họa bên dưới, xem góc A giữa b và c, hình chiếu vuông góc cho chiều cao của đỉnh C xuống đường chứa cạnh c. Nếu A tù, chân đường cao nằm trên phần kéo dài của đáy; diện tích vẫn dương.

**Vì sao làm theo cách này?** Chọn công thức diện tích theo sin cho SAS; khi biết cả ba cạnh mà không biết góc, Heron thuận tiện hơn. Không thay nhầm góc không xen giữa b,c.

**Tự thử trước Core** Hai tam giác đều có hai cạnh kề b=6, c=8, nhưng góc xen giữa lần lượt A=30° và A=150°. Tính diện tích của từng tam giác và giải thích tại sao bằng nhau.

<details class="thpt-r4-pedagogical-note" markdown="1" data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHIII-TRY08">
<summary>Em đã tự thử? Mở lời giải để đối chiếu</summary>

**Lời giải và giải thích.** Cả hai có S=(1/2)·6·8·sin30°=(1/2)·6·8·sin150°=12 đơn vị diện tích, do sin150°=sin30°. Chúng không nhất thiết có cùng cạnh thứ ba.

**Nếu chưa đúng:** Xem lại mục Hỗ trợ khắc phục lỗi ở cuối bài, thử nhắc lại bản chất bằng lời của mình rồi làm câu liên kết câu Core/Luyện tập tương ứng; phần sau này là luyện tập tự nguyện, không là kiểm tra độc lập.

</details>

### Công thức Heron

**Vì sao cần học?** Chỉ biết ba cạnh mảnh đất hình tam giác mà chưa biết góc hoặc đường cao, vẫn có thể tính diện tích được hay không? Và ba số đo nào thực sự lập được một tam giác?

**Em đã biết gì?** Ba cạnh dương của tam giác phải thỏa tổng hai cạnh lớn hơn cạnh còn lại; nửa chu vi p=(a+b+c)/2. Diện tích S>0, r là bán kính nội tiếp và R là ngoại tiếp, không tráo hai ký hiệu.

**Hiểu bản chất trước công thức** Heron dùng dữ liệu SSS: S=√[p(p−a)(p−b)(p−c)], nhưng điều kiện tam giác phải được kiểm trước. Khi đã có S, công thức S=pr cho bán kính nội tiếp; công thức S=abc/(4R) cho ngoại tiếp.

**Cách đọc hình và hình dung** Vẽ thử tam giác cạnh 3,4,5 so với bộ 2,3,6. Bộ thứ hai không thể khép cạnh thành tam giác vì 2+3<6. Một hình chữ V không khép kín không có “diện tích tam giác” để Heron tính.

**Vì sao làm theo cách này?** Với ba cạnh SSS, kiểm bất đẳng thức tam giác, tính p rồi Heron; nếu dữ kiện đã cho góc xen giữa, cân nhắc công thức theo sin để giảm biến đổi. Không tự lấy căn một biểu thức âm và gọi là diện tích thực.

**Tự thử trước Core** Bộ ba cạnh (3,4,5) cho diện tích S và bán kính nội tiếp r bao nhiêu? Bộ ba (2,3,6) có áp dụng Heron cho một tam giác được không? Giải thích.

<details class="thpt-r4-pedagogical-note" markdown="1" data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHIII-TRY09">
<summary>Em đã tự thử? Mở lời giải để đối chiếu</summary>

**Lời giải và giải thích.** Với 3,4,5: p=6, S=√(6·3·2·1)=6, r=S/p=1. Với 2,3,6: 2+3<6, không lập thành tam giác nên không có diện tích tam giác hợp lệ.

**Nếu chưa đúng:** Xem lại mục Hỗ trợ khắc phục lỗi ở cuối bài, thử nhắc lại bản chất bằng lời của mình rồi làm câu liên kết câu Core/Luyện tập tương ứng; phần sau này là luyện tập tự nguyện, không là kiểm tra độc lập.

</details>

### Bài toán đo đạc thực tế

**Vì sao cần học?** Không thể sang trực tiếp một điểm C bên kia vật cản để đo đoạn đường tới đó. Chỉ cần một đường chuẩn AB và các góc ngắm A,B, ta có thể dựng tam giác và tính những khoảng cách chưa đo trực tiếp.

**Em đã biết gì?** Mô tả chính xác tam giác khảo sát ABC, biết đoạn chuẩn AB=c, các góc A,B là góc trong tam giác, A+B<180°. Nhớ tổng ba góc, định lí sin và diện tích=1/2×đáy×chiều cao. Đơn vị độ dài phải thống nhất.

**Hiểu bản chất trước công thức** Bài đo đạc gồm hai tầng: chuyển tình huống thực thành tam giác đúng, rồi chọn quan hệ lượng. Tính các cạnh bằng định lí sin khi biết hai góc và cạnh chuẩn; nếu cần khoảng cách vuông góc từ C tới AB thì dùng chiều cao, không nhầm với AC hay BC.

**Cách đọc hình và hình dung** Vẽ AB là đoạn chuẩn nằm ngang, C ở một phía đường AB; ghi góc tại A,B và điểm hạ vuông góc H từ C xuống AB. Đọc kỹ đại lượng đề hỏi là AC, BC hay CH; chúng không tự bằng nhau.

**Vì sao làm theo cách này?** Với ASA/AAS chọn định lí sin; nếu cần chiều cao sau khi biết hai cạnh thì dùng diện tích hoặc lượng giác trong tam giác vuông; kiểm điều kiện hợp lí và đơn vị ở từng bước. Không dùng công thức Heron nếu chưa biết ba cạnh.

**Tự thử trước Core** Người khảo sát đo AB=20√2 m và các góc trong tam giác tại A,B đều 45°, còn C bên kia vật cản. Tính AC, BC và khoảng cách vuông góc CH từ C đến đường AB.

<details class="thpt-r4-pedagogical-note" markdown="1" data-ped-first-try="1" data-thpt-first-try-id="THPT-G10-CHIII-TRY10">
<summary>Em đã tự thử? Mở lời giải để đối chiếu</summary>

**Lời giải và giải thích.** C=90°, tam giác vuông cân tại C nên AC=BC=20 m (AB là cạnh huyền 20√2 m). Diện tích S=1/2·20·20=200 m²; CH=2S/AB=400/(20√2)=10√2 m.

**Nếu chưa đúng:** Xem lại các mục Hỗ trợ khắc phục lỗi ở cuối bài, thử nhắc lại bản chất bằng lời của mình rồi làm câu liên kết câu Core/Luyện tập tương ứng; phần sau này là luyện tập tự nguyện, không là kiểm tra độc lập.

</details>

---

## 1. Kiến thức

### Kí hiệu và định lí côsin

Trong tam giác **không suy biến** ABC, đặt `a=BC`, `b=CA`, `c=AB`, với các góc đối diện tương ứng A,B,C; các cạnh `a,b,c>0`, thỏa bất đẳng thức tam giác nghiêm ngặt.

\[
\begin{aligned}
a^2&=b^2+c^2-2bc\cos A,\\
b^2&=a^2+c^2-2ac\cos B,\\
c^2&=a^2+b^2-2ab\cos C.
\end{aligned}
\]

Từ đó \(\cos A=(b^2+c^2-a^2)/(2bc)\), tương tự cho B,C. Nếu `A=90°`, định lí trở thành Pitago. Không chọn nhầm góc B trong công thức liên quan `b,c`.

### Định lí sin

Với `R>0` là bán kính ngoại tiếp:

\[
\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C}=2R.
\]

Mọi góc trong của tam giác nằm trong `(0°,180°)` nên các sin dương. Nếu đã biết hai góc, góc thứ ba bằng `180°−A−B`; trước khi dùng cần `A+B<180°`. Trường hợp chỉ biết `A,a,b` có thể có hai góc B thỏa phương trình sin, nên không mặc định phép lấy arcsin trả một tam giác duy nhất.

### Diện tích, Heron và bán kính

Với `p=(a+b+c)/2` và diện tích `S>0`:

\[
S=\tfrac12bc\sin A=\tfrac12ca\sin B=\tfrac12ab\sin C,\qquad
S=\sqrt{p(p-a)(p-b)(p-c)},
\]

\[
S=pr,\qquad S=\frac{abc}{4R}.
\]

Trong đó r là bán kính đường tròn **nội tiếp**, R là bán kính **ngoại tiếp**. Đơn vị diện tích là đơn vị độ dài bình phương; không dùng Heron khi ba cạnh không tạo thành tam giác.

### Giải tam giác và ứng dụng S1

Khi biết đủ ba cạnh (SSS), thường dùng định lí côsin tìm góc; khi biết hai cạnh và góc xen giữa (SAS), tìm cạnh còn lại bằng côsin; khi biết hai góc và một cạnh (ASA/AAS), dùng định lí sin. Với đo đạc thực tế, phải khai báo đoạn mốc, góc quan sát là **góc trong của tam giác nào**, độ dài cần tìm, đơn vị và độ chính xác hợp lý. Nếu cần bán kính ngoại tiếp, dùng `2R=a/sin A` hoặc `S=abc/(4R)`.

## 2. Ví dụ

**Ví dụ 1 — Côsin và diện tích:** `b=6,c=8,A=60°`. 
\(a^2=36+64-2\cdot6\cdot8\cdot\tfrac12=52\), nên \(a=2\sqrt{13}\). Đồng thời \(S=\tfrac12\cdot6\cdot8\cdot\sin60^\circ=12\sqrt3\). Nêu đúng góc xen giữa và cạnh đối diện.

**Ví dụ 2 — Định lí sin:** `A=30°,B=45°,a=5`; vậy `C=105°`. 
\(b=5\sin45^\circ/\sin30^\circ=5\sqrt2\), \(2R=5/\sin30^\circ=10\), nên `R=5`. Các góc đều hợp lệ.

**Ví dụ 3 — Heron và hai bán kính:** Ba cạnh 13,14,15 thỏa bất đẳng thức tam giác. Nửa chu vi `p=21`, 
\(S=\sqrt{21\cdot8\cdot7\cdot6}=84\), bán kính nội tiếp `r=S/p=4`, bán kính ngoại tiếp 
\(R=13\cdot14\cdot15/(4\cdot84)=65/8\). Không nhầm r và R.

## 3. Hình minh họa

<figure class="thpt-r4-plot thpt-r4-probability-figure"><img src="../../../../assets/images/thpt/THPT_G10_B06_COSINE_AREA_TRIANGLE_D5_R01.svg" loading="lazy" alt="Hệ thức lượng trong tam giác, định lí côsin và công thức diện tích"><figcaption>Hệ thức lượng trong tam giác, định lí côsin và công thức diện tích.</figcaption></figure>

## 4. Tự khắc phục lỗi thường gặp

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="HELP-G10-B06-01"><summary>Sai góc xen giữa / nhầm định lí sin và côsin</summary><ol><li><strong>Dấu hiệu:</strong> Lấy `a²=b²+c²−2bc cos B` hoặc dùng sin để tìm cạnh trong tình huống chỉ biết hai cạnh và góc xen giữa.</li>
<li><strong>Chẩn đoán:</strong> Không chỉ rõ cạnh đối diện góc A và hai cạnh kề góc A.</li>
<li><strong>Bản chất:</strong> Với kí hiệu chuẩn a đối diện A; hệ thức đúng là `a²=b²+c²−2bc cos A`. Định lí sin liên hệ các <strong>cặp cạnh–góc đối diện</strong>.</li>
<li><strong>Tự sửa:</strong> Ghi a,b,c lên FIG-G10-B06-01, kiểm tra góc A=60°, tính lại 52 và căn dương.</li></ol><p><a href="../luyen-tap/">Luyện lại các câu liên quan</a></p></details>

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="HELP-G10-B06-02"><summary>Nhầm diện tích, Heron, r/R và đơn vị</summary><ol><li><strong>Dấu hiệu:</strong> Dùng `S=1/2 bc cos A`, tính r từ `abc/(4S)`, hoặc ghi m thay vì m².</li>
<li><strong>Chẩn đoán:</strong> Nhớ công thức rời rạc, không phân biệt tâm nội/ngoại tiếp và góc xen giữa.</li>
<li><strong>Bản chất:</strong> `S=1/2 bc sin A`, `S=sqrt[p(p−a)(p−b)(p−c)]`, `S=pr`, `S=abc/(4R)`.</li>
<li><strong>Tự sửa:</strong> Làm tam giác 13–14–15: p=21, S=84, r=4, R=65/8; kiểm tra thứ nguyên.</li></ol><p><a href="../luyen-tap/">Luyện lại các câu liên quan</a></p></details>

## 5. Luyện tập

[Luyện tập Bài 6](luyen-tap.md) · [Bài tự luận Chương III](../../thu-vien/tu-luan-chuong-iii.md)
