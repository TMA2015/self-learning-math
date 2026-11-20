# CĐ18 · Gói phản biện NotebookLM độc lập — Mặt cầu/Khối cầu và thiết diện · 20/11/2026

PACKET_ID: THPT-TOPIC18-SPHERE-SURFACE-SOLID-W07-O38-O23-CANDIDATE-20261120
QUALITY_STANDARD: SLM-THPT-QUALITY-ONE v3.2.0, Q01–Q18
REVIEW_TYPE: TARGETED_DELTA_C_ACADEMIC_PED_INDEPENDENT
PERMANENT_SOURCES: đúng 5 Permanent Sources v2.1 THPT hiện hành; không thêm source thường trú mới
ACADEMIC_SCOPE: THPT-G12-B14-W07 v2 + TOP18-O38 + TOP18-O23 (O40 unchanged conceptual context)
LEARNER_BLOB: 1ad945ea583ce7ee91df64b58d3f31b31c202cd3
ORIGINAL_SHARED_CANONICAL_BLOB: a24abd682932e11761f7c85fa3a3d3cdd77b600e
PREVIOUS_LEARNER_BLOB: bcc7cb6c57ea3cddbfae312a1fe2d31c0791b3f4
PREVIOUS_CANONICAL_BLOB: 11eb2834cfdb4a24685157f84666c2bb0767970a
CANONICAL_ITEM: THPT-G12-B14-W07, same ITEM_ID CONTENT_VERSION=2
VERSION_PROMOTION: NOT_GRANTED_UNTIL_ACADEMIC_PED_PASS_AND_A1_V2_READY_REGISTER_CI

## A. Câu canonical mới: đề, đáp án, giải thích, rubric THẬT (đọc nguyên văn)

#### THPT-G12-B14-W07 — SGK_WRITTEN
- `ITEM_ID`: `THPT-G12-B14-W07` · `OUTCOME_ID`: `G12-CHV-B14-O07` · `SOURCE_ROLE`: `SGK_WRITTEN` · `DIFFICULTY`: 3 · `CONTENT_VERSION`: 2
- **Đề duy nhất:** Cho **mặt cầu** tâm I, bán kính R>0 và mặt phẳng (P) cách I một khoảng h≥0. Giải thích ba trường hợp giao của **mặt cầu** với (P), nêu rõ giao là đường tròn, một điểm hay không có điểm chung.
- **Đáp án canonical (chỉ mở khi được phép):** Với \(h<R\), giao của **mặt cầu** và mặt phẳng là **đường tròn** bán kính \(r=\sqrt{R^2-h^2}\), không phải hình tròn chứa phần bên trong; với \(h=R\), tiếp xúc tại một điểm; với \(h>R\), không có điểm chung.
- **Lời giải có suy luận:** Gọi H là hình chiếu vuông góc của I lên (P), IH=h. Khi 0≤h<R, với mọi M thuộc giao tuyến, tam giác IHM vuông tại H nên HM²=IM²−IH²=R²−h²>0: M nằm trên đường tròn tâm H, bán kính r=√(R²−h²), không phải cả đĩa tròn. Khi h=R, HM=0 nên chỉ H thuộc giao; h>R làm HM²<0 nên không có điểm chung.
- **Rubric Written /5 (chấm theo từng bước):** 2đ xác định h, R và phân loại đúng h<R, h=R, h>R; 1đ dựng H và giải thích tam giác vuông IHM; 1đ suy ra r²+h²=R² và bán kính khi h<R; 1đ phân biệt đường tròn thuộc **mặt cầu** với hình tròn (đĩa) thuộc **khối cầu**, đồng thời kết luận đúng trường hợp tiếp xúc/không giao.
- **Written:** học sinh tự đối chiếu, không được tự động ghi Mastery từ câu tự luận chưa chấm độc lập.

## B. Bản học sinh — Kiến thức O38: phân biệt điểm trên mặt và trong khối

### 7.3. Điểm ở đâu so với mặt cầu?

<!-- LESSON_ID: TOP18-M38; OUTCOME_ID: TOP18-O38; S1_ORIGINAL_OUTCOME: G12-CHV-B17-O03; SCOPE: G12_CHV -->

Với **mặt cầu** tâm C bán kính R>0, chỉ những điểm M có CM²=R² mới thuộc mặt cầu. Nếu CM²<R², M nằm **bên trong khối cầu**, không nằm trên mặt cầu; nếu CM²>R² thì M ở ngoài cả khối cầu. So các bình phương trước khi bấm căn để khỏi nhầm mặt cầu (lớp biên) với khối cầu (gồm lớp biên và phần bên trong). Hình phối cảnh không đủ để quyết định vị trí nếu chưa tính tọa độ.

> **PHƯƠNG PHÁP — Điểm trong, trên hay ngoài cầu**
>
> Với tâm C và R>0, so CM² với R²: bằng nhau là **trên mặt cầu**; nhỏ hơn là **trong khối cầu**; lớn hơn là **ngoài khối cầu**.


**Ví dụ**

**Đề bài:** Mặt cầu tâm O(0;0;0), bán kính R=5. Điểm nào thuộc **mặt cầu**, điểm nào chỉ nằm **trong khối cầu**: M(3;4;0) hay N(1;1;1)?

**Lời giải:** R²=25. Với M(3;4;0), OM²=9+16+0=25 nên M **thuộc mặt cầu**. Với N(1;1;1), ON²=3<25 nên N **nằm trong khối cầu nhưng không thuộc mặt cầu**. Dấu bằng là ranh giới quan trọng; chỉ kiểm hình vẽ hoặc nói chung chung “nằm trong mặt cầu” dễ gây nhầm lẫn.

**Vận dụng:** Với mặt cầu tâm O R=3, điểm (0,0,4) ở đâu?

<!-- ITEM_ID: THPT-TOP18-T38; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O38 -->

<details markdown="1"><summary>Đối chiếu</summary>

Ngoài mặt vì khoảng cách bình phương 16>9.

**D6 — Khi chưa đúng:** Viết rõ \(CM^2=(x-a)^2+(y-b)^2+(z-c)^2\), rồi so với \(R^2\), không so với R. Hãy tô vòng biên của một hình tròn trên giấy: điểm **trên biên** ứng với mặt cầu; điểm **bên trong biên** là trong khối cầu chứ không thuộc mặt cầu.

</details>

## C. Bản học sinh — Kiến thức O40: nguồn lý giải thiết diện, không sửa trong Delta C

### 7.5. Tiếp xúc và thiết diện mặt cầu

<!-- LESSON_ID: TOP18-M40; OUTCOME_ID: TOP18-O40; S1_ORIGINAL_OUTCOME: G12-CHV-B17-O05; SCOPE: G12_CHV -->

Giao của mặt cầu bán kính R với mặt phẳng phụ thuộc khoảng cách d từ tâm đến mặt: d>R không có giao, d=R tiếp xúc một điểm, d<R cắt theo đường tròn bán kính √(R²−d²). Tâm đường tròn là chân vuông góc từ tâm mặt cầu đến mặt phẳng.

> **CÔNG THỨC — Tiếp xúc và thiết diện mặt cầu**
>
> Giao của mặt cầu bán kính R với mặt phẳng phụ thuộc khoảng cách d từ tâm đến mặt: d>R không có giao, d=R tiếp xúc một điểm, d<R cắt theo đường tròn bán kính √(R²−d²).


**Lập phương trình tiếp diện tại một điểm của mặt cầu.** Cho mặt cầu tâm \(I(a;b;c)\), bán kính \(R>0\), điểm \(P(x_0;y_0;z_0)\) đã **kiểm tra thuộc mặt cầu**, nghĩa là \(IP=R\). Tại tiếp điểm \(P\), bán kính \(IP\) vuông góc với mọi hướng trên mặt phẳng tiếp xúc, nên \(\overrightarrow{IP}\ne\vec0\) chính là một vectơ pháp tuyến. Dùng điểm–pháp tuyến ta có:
\[
(x_0-a)(x-x_0)+(y_0-b)(y-y_0)+(z_0-c)(z-z_0)=0.
\]
Nếu \(P\) không nằm trên mặt cầu, mặt qua \(P\) với pháp tuyến \(IP\) **không phải tiếp diện tại P**. Cũng không nhầm mặt tiếp xúc với đường tròn thiết diện có vô số điểm: tiếp diện chỉ có **một điểm chung** với mặt cầu.

**Ví dụ minh họa.** Với mặt cầu tâm \(I(1;2;3)\), bán kính \(4\), xét \(P(5;2;3)\). Ta có \(IP=\sqrt{4^2}=4\), nên \(P\) thuộc mặt cầu; \(\overrightarrow{IP}=(4;0;0)\). Tiếp diện qua P là \(4(x-5)=0\), tức \(x=5\). Khoảng cách từ tâm I đến mặt \(x=5\) bằng \(|1-5|=4=R\), đúng tiêu chuẩn tiếp xúc. Nếu điểm chọn là \(Q(6;2;3)\), \(IQ=5\ne R\), không được gọi mặt qua Q là tiếp diện tại Q.

**Ví dụ**

**Đề bài:** Cầu O, R=5: mặt z=3 tạo thiết diện gì và mặt z=5 có tiếp xúc không?

**Lời giải:** Mặt cầu tâm O R=5 với mặt z=3 có d=3 và thiết diện bán kính 4. Với mặt z=5 là tiếp xúc ở (0,0,5). Phân loại theo d so với R.

**Vận dụng:** Mặt cầu tâm O R=5, mặt z=6 có giao không?

<!-- ITEM_ID: THPT-TOP18-T40; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O40 -->

<details markdown="1"><summary>Đối chiếu</summary>

Không, vì khoảng cách tâm–mặt d=6>R.

**D6 — Khi chưa đúng:** Đầu tiên tính khoảng cách tâm–mặt chuẩn; không lấy trực tiếp số D của phương trình làm d nếu pháp tuyến chưa chuẩn hóa.

</details>

## D. Bản học sinh — Kiến thức O23 sau B17 & Tự thử/D6

### 8.1. Mặt cắt và khoảng cách đến mặt cầu

<!-- LESSON_ID: TOP18-M23; OUTCOME_ID: TOP18-O23; S1_ORIGINAL_OUTCOME: G12-CHV-B14-O07; SCOPE: OPTIONAL_AFTER_B17 -->

**Mở rộng sau khi đã học mặt cầu và cách tính khoảng cách điểm–mặt phẳng.** Khi cắt mặt cầu bằng mặt phẳng, chỉ cần so khoảng cách d từ tâm C đến mặt phẳng với bán kính R: d>R không cắt, d=R tiếp xúc, d<R cho đường tròn bán kính √(R²−d²). Đây là ứng dụng nối hình học mặt phẳng và hình học mặt cầu, không phải định lí mới thay SGK B14.

> **TÍNH CHẤT — Mặt cắt và khoảng cách đến mặt cầu**
>
> Chỉ dùng sau B17: với mặt cầu tâm C bán kính R>0 và mặt phẳng cách tâm d≥0, nếu d<R thiết diện là đường tròn bán kính \(\sqrt{R^2-d^2}\); d=R tiếp xúc một điểm; d>R không cắt.


**Ví dụ**

**Đề bài:** Sau khi học B17, cho mặt cầu tâm C(1;−2;3), bán kính 13 và mặt phẳng z=8. Xác định tâm, bán kính thiết diện và giải thích vì sao điều kiện d<R quan trọng.

**Lời giải:** Chân đường vuông góc từ tâm C xuống mặt z=8 là H(1;−2;8), nên d(C,(P))=5<13. Mặt cắt là đường tròn tâm H với bán kính r=√(13²−5²)=√144=12. Độ dài r không phải bán kính cầu 13, vì mặt phẳng không qua tâm. Bài này kết hợp hai kiến thức đã học: khoảng cách điểm–mặt phẳng và định nghĩa mặt cầu; hãy vẽ chân vuông góc H trước khi dùng Pitago.

**Vận dụng:** Mặt cầu tâm O R=4, mặt z=4 cắt theo hình gì?

<!-- ITEM_ID: THPT-TOP18-T23; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP18-O23 -->

<details markdown="1"><summary>Đối chiếu</summary>

Tiếp xúc một điểm (0,0,4), vì d=R.

**D6 — Khi chưa đúng:** Hãy vẽ tâm cầu, chân đường vuông góc từ tâm xuống mặt phẳng và một điểm trên giao tuyến. Tam giác vuông cho \(r^2+d^2=R^2\). So sánh \(d\) với \(R\) trước: \(d<R\) có đường tròn, \(d=R\) chỉ có một tiếp điểm, còn \(d>R\) không có giao. Nếu quên công thức, hãy tự dựng lại từ định lí Pythagore.

</details>

## E. Bản học sinh — W07 projection đối chiếu với canonical

**Tự luận SGK 40.** Cho **mặt cầu** tâm I, bán kính R>0 và mặt phẳng (P) cách I một khoảng h≥0. Giải thích ba trường hợp giao của **mặt cầu** với (P), nêu rõ giao là đường tròn, một điểm hay không có điểm chung.

<details markdown="1"><summary>Lời giải và rubric</summary>

- **Đáp án:** Với \(h<R\), giao của **mặt cầu** và mặt phẳng là **đường tròn** bán kính \(r=\sqrt{R^2-h^2}\), không phải hình tròn chứa phần bên trong; với \(h=R\), tiếp xúc tại một điểm; với \(h>R\), không có điểm chung.
- **Lời giải có suy luận:** Gọi H là hình chiếu vuông góc của I lên (P), IH=h. Khi 0≤h<R, với mọi M thuộc giao tuyến, tam giác IHM vuông tại H nên HM²=IM²−IH²=R²−h²>0: M nằm trên đường tròn tâm H, bán kính r=√(R²−h²), không phải cả đĩa tròn. Khi h=R, HM=0 nên chỉ H thuộc giao; h>R làm HM²<0 nên không có điểm chung.
- **Thang tự đối chiếu /5 (theo từng bước):** 2đ xác định h, R và phân loại đúng h<R, h=R, h>R; 1đ dựng H và giải thích tam giác vuông IHM; 1đ suy ra r²+h²=R² và bán kính khi h<R; 1đ phân biệt đường tròn thuộc **mặt cầu** với hình tròn (đĩa) thuộc **khối cầu**, đồng thời kết luận đúng trường hợp tiếp xúc/không giao.

</details>

## F. Bản học sinh — Luyện tập P23 cùng D6

<!-- CANONICAL_ITEM_ID: THPT-TOP18-P23; PRIMARY_OUTCOME: TOP18-O23; ROLE: TOPIC_PRACTICE; ORIGINAL_R03_ANSWER_UNCHANGED -->
**Bài luyện 40.** Mặt cầu tâm O R=10, mặt phẳng z=6. Tính bán kính đường tròn cắt.

<details markdown="1"><summary>Lời giải và tự đối chiếu</summary>

r=√(100−36)=8. Nếu mặt ở z=11 thì d>R nên không có giao.

**Đường khắc phục D6:** Nếu ra bán kính bằng 10 thay vì 8, em đã lấy nhầm bán kính **mặt cầu** làm bán kính đường tròn **giao tuyến**. Hãy tính d=6 từ tâm đến mặt z=6, rồi dùng r²+d²=R² để tìm r. Kiểm r<R khi mặt phẳng không qua tâm.</details>

## G. Toán cần phản biện độc lập

Định nghĩa: **mặt cầu** S = {X:|X−I|=R}, còn **khối cầu** B = {X:|X−I|≤R}. Mặt phẳng cách I h≥0. H chân vuông góc từ I xuống mặt phẳng: |X−I|²=h²+|X−H|². Khi h<R giao S∩P là **đường tròn** r=√(R²−h²), B∩P mới là **đĩa tròn**. Khi h=R giao là 1 điểm; khi h>R không giao. Kiểm cả h=0, h=R, h>R, R>0. Tình huống bổ trợ I=(1,2,1),R=2,z=0 r=√3. Cần kiểm chính xác toán lẫn mức độ học sinh tự xây lại cách làm.

## H. Prompt review NotebookLM (5 câu)

1. Theo đúng năm Permanent Sources v2.1 và snapshot học liệu trên, kiểm độc lập từng bước định nghĩa **mặt cầu/khối cầu**, **đường tròn/đĩa tròn**, chứng minh r²+h²=R² và các biên h=0, h=R, h>R; phát hiện mọi điều kiện/bước suy luận thiếu.
2. Kiểm câu W07 v2 theo **cùng ITEM_ID**: đề có rõ đối tượng không, đáp án và lời giải có khớp, rubric **2+1+1+1=5** có chấm đúng điều đề yêu cầu và không tự đòi ý nghĩa vật lý ngoài đề không.
3. Phản biện sư phạm từng outcome O38, O40, O23: học sinh có hiểu trước khi gặp công thức, thấy cách đọc hình, Tự thử trước Đối chiếu, nhận chỉ dẫn D6 thực sự sửa được lỗi và không gặp bài mặt cầu trước kiến thức B17 không?
4. Trả Academic và PED verdict **riêng**, P0/P1/P2 theo đúng outcome/item và MINIMAL_DELTA; tuyệt đối không suy rộng verdict này thành toàn Topic 18, không nhầm việc thiếu ảnh SBT p25 với tính đúng toán.
5. Ghi SOURCE_RECEIPT đúng hai Git blob learner/canonical ở trên và chỉ chấp nhận `Academic PASS + PED PASS` trên phạm vi ảnh hưởng; nếu có lỗi thực sự, cho phương án thay đổi tối thiểu, không sửa 246 item khác.

### Lưu ý phản biện

Không có trang in 25 SBT bản quét là thiếu chứng cứ trích dẫn nguyên văn bài sách, **không là điều kiện kiểm chứng các đẳng thức hình học này**. Các ví dụ được kiểm bằng biến đổi toán độc lập. Chưa có verdict NotebookLM thực tế cho snapshot này; chỉ là gói yêu cầu phản biện.