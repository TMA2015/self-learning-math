# Chuyên đề 16 — Quan hệ vuông góc và góc trong không gian

Quan sát các cạnh của căn phòng, cột và mái dốc, em sẽ học cách chứng minh quan hệ vuông góc bằng phương và mặt phẳng thay vì đo theo nét phối cảnh.

<!-- AUTHORING_R03_CANDIDATE; PRIOR_R02_BLOB: 60f69d43bfa3f4508e8c7a787bad517141f9b2b2; FROZEN_R01_BLOB: 0e934389ebfe239ace19cc23c5dedf9c23d8ebdc; ORIGINAL_SGK_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; NO_PRIVATE_RD1; AUTHOR_ONLY -->

# Kiến thức

**Mạch mở đầu — Từ quan sát đến lập luận.** Hãy tưởng tượng một căn phòng: các cạnh tường giao nhau ở những chỗ nhìn thấy được, nhưng nhiều thanh ngang và thanh đứng ở hai phía phòng không hề chạm nhau. Chúng ta vẫn muốn trả lời chúng có vuông góc hay không. Điểm khởi đầu không phải là đo góc trên bức hình phối cảnh: hãy tìm hai **phương** và đưa chúng về cùng một điểm. Khi đã làm được việc đó, quan hệ hai đường vuông góc trở thành một cách nhìn xuyên suốt các bài toán cột, sàn, mái và góc.

**Lời dẫn học sinh:** Ở mỗi bước, đừng học một định lí rời rạc. Hãy tự hỏi: *Mình cần kiểm tra điều gì? Kiểm tra ít hơn có đủ không? Giả thiết nào làm cho kết luận đúng?* Bốn chặng dưới đây dẫn từ góc giữa hai đường, sang pháp tuyến mặt, rồi hình chiếu và góc giữa hai mặt.

## 1. B22 · Hai đường thẳng vuông góc

![Hai đường a,b chéo nhau; tại O dựng a′ song song a và b′ song song b, góc giữa hai phương bằng 90°](../../../../docs/assets/images/thpt/FIG-G11-CHVII-B22-01_R00.svg)

**Đọc hình — B22:**

Quan sát đường **a** và **b** ở hai vị trí không cắt nhau; đừng cố nối đầu mút để lấy góc. Theo các dấu **a′∥a**, **b′∥b**, đưa hai phương về điểm **O** và đọc góc tại O. Nếu thay O bằng điểm khác thì hai phương không đổi, nên góc không đổi.

*Nếu không hiển thị hình, hãy đọc lại mô tả bằng lời ở trên và tự dựng quan hệ theo giả thiết; không suy góc hay độ dài từ nét phối cảnh.*

### 1.1. Góc giữa hai đường

<!-- LESSON_ID: TOP16-M01; OUTCOME_ID: TOP16-O01; S1_ORIGINAL_OUTCOME: G11-B22-ANGLE_LINES -->

Muốn đo góc hai thanh ở xa nhau, hãy dời hai phương đến cùng một điểm. Góc nhỏ giữa các hướng mới phản ánh hình thật, không phải góc do phối cảnh tạo ra.

> **ĐỊNH NGHĨA**
>
> Góc giữa hai đường trong không gian là góc nhỏ giữa hai đường cùng đi qua một điểm và lần lượt song song với hai đường đã cho; vì thế góc luôn trong [0°,90°]. Việc dời phương là để đo được ngay cả khi hai đường chéo nhau.

**Ví dụ**

**Đề bài:** Trong hộp chữ nhật ABCD.A′B′C′D′, xác định góc giữa AB và CC′, biết cạnh bên vuông góc đáy.

**Lời giải:** CC′∥AA′, trong khi AA′⊥(ABCD) nên AA′⊥AB. Dời phương CC′ về AA′ qua A; góc giữa AB và CC′ bằng góc BAA′=90°, dù AB không cắt CC′.

**Vận dụng**

Trong hình hộp chữ nhật, góc giữa AB và A′B′ bằng bao nhiêu?

<!-- ITEM_ID: THPT-TOP16-T01; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O01 -->

<details markdown="1"><summary>Đối chiếu</summary>

0° vì AB và A′B′ song song.

**Nếu làm sai:** Đừng dùng góc tù hoặc kết luận không có góc chỉ vì hai đường không gặp nhau. Tự dựng lại quan hệ trên hình hoặc viết một phản ví dụ kiểm tra đúng điều kiện, rồi thử câu tương tự.

</details>

### 1.2. Hai đường chéo nhau có thể vuông góc

<!-- LESSON_ID: TOP16-M02; OUTCOME_ID: TOP16-O02; S1_ORIGINAL_OUTCOME: G11-B22-PERP_SKEW -->

Hai thanh ở hai góc hộp có thể không cắt và cũng không đồng phẳng, nhưng vẫn vuông góc về phương. Vì vậy, hãy tách phép thử 'chéo nhau' khỏi phép thử 'góc 90°'.

> **ĐỊNH NGHĨA**
>
> Vuông góc giữa hai đường là quan hệ **phương**: hai đường chéo nhau vẫn vuông góc nếu hai phương tạo góc 90°. Điều kiện cắt nhau không phải thành phần của định nghĩa này.

**Ví dụ**

**Đề bài:** Trong hình lập phương ABCD.A′B′C′D′, chứng minh AD và BB′ chéo nhau nhưng vuông góc.

**Lời giải:** Nếu AD và BB′ đồng phẳng thì mặt ấy chứa A,D,B, do đó là đáy, nhưng B′ nằm ngoài đáy; suy hai đường chéo nhau. BB′∥AA′ và AA′⊥AD nên góc hai phương là 90°.

**Vận dụng**

AB và DD′ ở hộp chữ nhật có phải là hai đường vuông góc không?

<!-- ITEM_ID: THPT-TOP16-T02; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O02 -->

<details markdown="1"><summary>Đối chiếu</summary>

Có. Chúng chéo nhau nhưng cùng phương với hai cạnh vuông góc AB, AA′.

**Nếu làm sai:** Phân biệt “vuông góc theo phương” với “hai đường cắt nhau tại góc vuông”. Tự dựng lại quan hệ trên hình hoặc viết một phản ví dụ kiểm tra đúng điều kiện, rồi thử câu tương tự.

</details>

### 1.3. Chuyển phương bằng đường song song

<!-- LESSON_ID: TOP16-M03; OUTCOME_ID: TOP16-O03; S1_ORIGINAL_OUTCOME: G11-B22-PARALLEL_DIRECTION -->

Một cạnh khuất có thể thay bằng cạnh nhìn thấy song song với nó. Do hai đường song song cùng phương, kết luận về góc vuông được giữ nguyên.

> **ĐỊNH LÝ**
>
> Thay một đường bằng đường song song bảo toàn góc giữa các phương. Nếu a⊥b và b∥c thì a⊥c, dù a,c có thể chéo nhau.

**Ví dụ**

**Đề bài:** Trong hình hộp chữ nhật, AD⊥AA′ và CC′∥AA′. Chứng minh AD⊥CC′.

**Lời giải:** Do CC′∥AA′ trong hình hộp nên chúng có cùng phương; AD⊥AA′ là góc vuông đã biết ở một đỉnh. Khi dời đường CC′ về đường AA′ qua A, ta đo đúng cùng một góc giữa các phương. Vì vậy AD⊥CC′, dù hai đường ban đầu không gặp nhau.

**Vận dụng**

Nếu a⊥b và c∥b thì kết luận gì về a,c?

<!-- ITEM_ID: THPT-TOP16-T03; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O03 -->

<details markdown="1"><summary>Đối chiếu</summary>

a⊥c theo tính bất biến của góc khi thay đường bằng đường song song.

**Nếu làm sai:** Không suy hai đường cùng vuông góc một đường thứ ba thì chúng song song trong không gian. Tự dựng lại quan hệ trên hình hoặc viết một phản ví dụ kiểm tra đúng điều kiện, rồi thử câu tương tự.

</details>

### 1.4. Không đo góc từ hình phối cảnh

<!-- LESSON_ID: TOP16-M04; OUTCOME_ID: TOP16-O04; S1_ORIGINAL_OUTCOME: G11-B22-PROOF_CONTEXT -->

Nếu trên giấy hai nét vuông góc, ta vẫn chưa chứng minh hai thanh thật vuông góc. Phải tìm hình chữ nhật hoặc đường song song đã được bảo đảm bởi giả thiết.

> **PHƯƠNG PHÁP**
>
> Hình chiếu trên giấy có thể làm hai cạnh dường như cắt hoặc vuông góc. Bằng chứng thật phải là một góc trong mặt phẳng xác định hoặc phép chuyển phương hợp lệ.

**Ví dụ**

**Đề bài:** Trong hộp chữ nhật, chứng minh AB⊥B′C′ bằng tính chất hình, không dùng thước đo nét vẽ.

**Lời giải:** Trong đáy hình chữ nhật, AB⊥BC. Vì B′C′∥BC, hai hướng của B′C′ và BC trùng nhau, do đó AB⊥B′C′.

**Vận dụng**

Nét vẽ có hai đoạn tạo góc 90° trên giấy, đủ kết luận hai thanh trong không gian vuông góc chưa?

<!-- ITEM_ID: THPT-TOP16-T04; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O04 -->

<details markdown="1"><summary>Đối chiếu</summary>

Chưa; cần chứng cứ hình học về phương hoặc góc thật.

**Nếu làm sai:** Khi lời giải viết “nhìn hình thấy”, hãy thay bằng quan hệ song song/vuông góc có giả thiết. Tự dựng lại quan hệ trên hình hoặc viết một phản ví dụ kiểm tra đúng điều kiện, rồi thử câu tương tự.

</details>


**Từ hai đường đến cả mặt phẳng.** Một chiếc cột nhìn có vẻ đứng thẳng vẫn có thể bị nghiêng về một phía mà ảnh chụp không nhận ra. Nếu chỉ kiểm tra cột vuông góc với **một** đường trên sàn, ta chưa loại trừ được hướng nghiêng khác. Chọn **hai đường cắt nhau** trên cùng mặt sàn thì hai phương độc lập mới đủ kiểm tra cột có vuông góc với toàn bộ sàn hay không. Đây là ý nghĩa của định lí, không phải mẹo ghi nhớ.

**Ví dụ kết nối:** Cho chóp S.ABC, tam giác ABC vuông tại B và SA⊥(ABC). Vì SA⊥BC và AB⊥BC; hai đường SA,AB cắt nhau ở A cùng thuộc (SAB), nên BC⊥(SAB), do đó BC⊥SB. Một kết luận từ “vô số phương” được đưa về hai điều kiện có thể chứng minh.

## 2. B23 · Đường thẳng vuông góc mặt phẳng

![Cột AH vuông góc hai đường AB,AD cắt tại A trong mặt P nên AH vuông góc mặt P](../../../../docs/assets/images/thpt/FIG-G11-CHVII-B23-01_R00.svg)

**Đọc hình — B23:**

Chỉ hai cạnh **AB** và **AD** trong mặt **(P)**, chúng cắt nhau tại **A**. Cột **AH** vuông góc với cả hai: không phải “hai góc vuông là đủ” một cách máy móc, mà vì AB,AD tạo hai hướng không song song cùng nằm trong một mặt. Nếu hai cạnh kiểm tra song song thì không được suy AH⊥(P).

*Nếu không hiển thị hình, hãy đọc lại mô tả bằng lời ở trên và tự dựng quan hệ theo giả thiết; không suy góc hay độ dài từ nét phối cảnh.*

### 2.1. Đường vuông góc mặt phẳng

<!-- LESSON_ID: TOP16-M05; OUTCOME_ID: TOP16-O05; S1_ORIGINAL_OUTCOME: G11-B23-PERP_PLANE_DEF -->

Mặt sàn có vô số hướng. Một cột chỉ vuông góc một vạch sàn chưa chắc đứng thẳng; điều cần chứng minh là vuông góc cả mặt phẳng.

> **ĐỊNH NGHĨA**
>
> Đường d vuông góc mặt phẳng (P) nghĩa là d vuông góc **mọi đường thẳng** nằm trong (P). Chứng minh vuông góc một đường là chưa đủ.

**Ví dụ**

**Đề bài:** Xét mặt (P):z=0 và đường d:(0,0,t) với t thực. Chứng minh d⊥(P) theo định nghĩa.

**Lời giải:** Mọi đường của z=0 có hướng (u,v,0) khác vectơ không. Hướng d là (0,0,1), tích vô hướng bằng 0 với (u,v,0). Do đó d vuông góc mọi đường của (P), tức d⊥(P).

**Vận dụng**

d vuông góc chỉ một đường a thuộc (P). Đủ kết luận d⊥(P) không?

<!-- ITEM_ID: THPT-TOP16-T05; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O05 -->

<details markdown="1"><summary>Đối chiếu</summary>

Không; cần thêm dữ kiện, thường là d vuông góc hai đường cắt nhau trong (P).

**Nếu làm sai:** Một đường không đại diện cho tất cả các phương trong một mặt phẳng. Tự dựng lại quan hệ trên hình hoặc viết một phản ví dụ kiểm tra đúng điều kiện, rồi thử câu tương tự.

</details>

### 2.2. Dấu hiệu hai đường cắt nhau

<!-- LESSON_ID: TOP16-M06; OUTCOME_ID: TOP16-O06; S1_ORIGINAL_OUTCOME: G11-B23-TWO_INTERSECT -->

Không ai có thể kiểm vô số đường nằm trong một mặt. Hai đường cắt nhau đã xác định hai hướng độc lập, đủ kiểm phương vuông góc mặt ấy.

> **ĐỊNH LÝ**
>
> Hai đường a,b **cắt nhau** trong (P) tạo hai hướng độc lập. Nếu d⊥a và d⊥b thì d vuông góc cả mặt phẳng; điều kiện cắt nhau không thể bỏ.

**Ví dụ**

**Đề bài:** Trong đáy hình bình hành ABCD, d qua A và d⊥AB, d⊥AD. Chứng minh d⊥(ABCD).

**Lời giải:** AB,AD thuộc (ABCD), cắt nhau tại A và không song song. Vì d vuông góc cả AB và AD, theo dấu hiệu hai đường cắt trong mặt, d⊥(ABCD).

**Vận dụng**

Nếu a∥b trong (P), d⊥a và d⊥b đã đủ d⊥(P) chưa?

<!-- ITEM_ID: THPT-TOP16-T06; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O06 -->

<details markdown="1"><summary>Đối chiếu</summary>

Chưa, vì hai phương song song chỉ kiểm tra một hướng.

**Nếu làm sai:** Dừng lại khi hai đường kiểm tra song song, trùng nhau hoặc không cùng mặt phẳng. Tự dựng lại quan hệ trên hình hoặc viết một phản ví dụ kiểm tra đúng điều kiện, rồi thử câu tương tự.

</details>

### 2.3. Chuyển vuông góc qua đường/mặt song song

<!-- LESSON_ID: TOP16-M07; OUTCOME_ID: TOP16-O07; S1_ORIGINAL_OUTCOME: G11-B23-PARALLEL_TRANSFER -->

Nhiều cạnh bên của hình hộp ở vị trí khác nhau nhưng cùng hướng. Nếu một cạnh vuông góc đáy thì cạnh song song với nó cũng vuông góc đáy.

> **ĐỊNH LÝ**
>
> Vuông góc mặt phẳng được bảo toàn khi thay đường bởi đường song song hoặc thay mặt phẳng bởi mặt phẳng song song phân biệt. Cần xác nhận đúng các quan hệ song song.

**Ví dụ**

**Đề bài:** Trong hình hộp chữ nhật, AA′⊥(ABCD). Chứng minh DD′⊥(ABCD).

**Lời giải:** DD′∥AA′ trong hình hộp. Một đường song song với đường vuông góc mặt phẳng cũng vuông góc mặt ấy, nên DD′⊥(ABCD).

**Vận dụng**

Nếu a⊥(P) và b∥a thì b có vuông góc (P) không?

<!-- ITEM_ID: THPT-TOP16-T07; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O07 -->

<details markdown="1"><summary>Đối chiếu</summary>

Có; mọi đường của (P) vẫn vuông góc phương b.

**Nếu làm sai:** Không lấy việc hai mặt phẳng nhìn cùng hướng trên giấy làm chứng cứ song song. Tự dựng lại quan hệ trên hình hoặc viết một phản ví dụ kiểm tra đúng điều kiện, rồi thử câu tương tự.

</details>

### 2.4. Pháp tuyến duy nhất qua một điểm

<!-- LESSON_ID: TOP16-M08; OUTCOME_ID: TOP16-O08; S1_ORIGINAL_OUTCOME: G11-B23-PLANE_PROPERTY -->

Qua mỗi điểm chỉ có một phương pháp tuyến đối với một mặt phẳng. Dựng hai đường khác nhau cùng qua một điểm và cùng vuông góc mặt ấy là điều không thể.

> **ĐỊNH LÝ**
>
> Qua mỗi điểm có một đường duy nhất vuông góc mặt phẳng cho trước. Hai đường cùng vuông góc một mặt phẳng thì song song hoặc trùng nhau.

**Ví dụ**

**Đề bài:** Với (P):z=0 và M(2,−1,3), tìm đường qua M vuông góc (P) và giải thích duy nhất.

**Lời giải:** Pháp tuyến mặt z=0 có hướng (0,0,1), nên đường d=(2,−1,3)+t(0,0,1) đi qua M và vuông góc mặt. Mọi đường khác qua M vuông góc mặt phải cùng hướng này, do đó trùng d.

**Vận dụng**

Qua điểm M có thể có hai đường phân biệt cùng vuông góc (P) không?

<!-- ITEM_ID: THPT-TOP16-T08; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O08 -->

<details markdown="1"><summary>Đối chiếu</summary>

Không; pháp tuyến qua M xác định duy nhất.

**Nếu làm sai:** Không lẫn tính duy nhất theo phương pháp tuyến với tính duy nhất mọi đường qua M. Tự dựng lại quan hệ trên hình hoặc viết một phản ví dụ kiểm tra đúng điều kiện, rồi thử câu tương tự.

</details>

### 2.5. Kiểm cột đứng bằng hai hướng sàn

<!-- LESSON_ID: TOP16-M09; OUTCOME_ID: TOP16-O09; S1_ORIGINAL_OUTCOME: G11-B23-PRACTICAL_POST -->

Chỉ dùng một thước vuông với một vạch trên nền vẫn cho phép cột nghiêng theo hướng ngang còn lại. Thêm vạch cắt vạch đầu giúp khóa phương cột.

> **PHƯƠNG PHÁP**
>
> Kiểm tra cột vuông góc nền cần hai hướng không song song trên nền, tương ứng kiểm tra hai mặt đứng giao nhau; đo theo một cạnh nền chỉ xác định một điều kiện.

**Ví dụ**

**Đề bài:** Nền z=0 có hai hướng Ox và Oy. Cột qua O có hướng (0,0,1). Vì sao cột vuông góc nền? Một hướng sàn có đủ không?

**Lời giải:** Hướng cột (0,0,1) vuông góc với Ox(1,0,0) và Oy(0,1,0) là hai đường cắt nhau trong nền, nên cột vuông góc nền. Nếu chỉ vuông góc Ox, hướng (0,1,1) vẫn thỏa nhưng không vuông góc Oy.

**Vận dụng**

Đo cột vuông góc cạnh AB của nền có đủ khẳng định cột thẳng đứng?

<!-- ITEM_ID: THPT-TOP16-T09; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O09 -->

<details markdown="1"><summary>Đối chiếu</summary>

Chưa; cần thêm một đường cắt AB trong nền (ví dụ AD).

**Nếu làm sai:** Không bỏ điều kiện hai phương kiểm tra phải độc lập. Tự dựng lại quan hệ trên hình hoặc viết một phản ví dụ kiểm tra đúng điều kiện, rồi thử câu tương tự.

</details>


**Từ cột thẳng sang mái dốc.** Với một mái nghiêng, ta không thể lấy ngay góc giữa mái và cột đứng rồi gọi đó là “góc nghiêng so với sàn”. Hãy hạ chân vuông góc từ một điểm trên mái xuống sàn. Khi ấy cạnh xiên, chiều cao và hình chiếu tạo thành một tam giác vuông: góc với sàn nằm **giữa cạnh xiên và hình chiếu**, còn góc với cột đứng là góc phụ. Mục tiêu của hình chiếu là biến một câu hỏi ba chiều thành một tam giác có thể chứng minh và tính được.

## 3. B24 · Phép chiếu vuông góc và góc đường–mặt

![Đoạn AM dốc, AH vuông góc nền P, HM là hình chiếu; góc AMH là góc đường với nền](../../../../docs/assets/images/thpt/FIG-G11-CHVII-B24-01_R00.svg)

**Đọc hình — B24:**

Tìm **A** ở cao, **H** là chân AH⊥(P), **M** ở nền. Đường xiên **AM** chiếu thành **HM**, do đó góc cần đo là **AMH tại M**, không phải góc ở A. Tam giác AHM vuông tại H nên khi biết AH,AM có thể dùng sin(góc AMH)=AH/AM; không lấy nét vẽ phối cảnh làm phép đo.

*Nếu không hiển thị hình, hãy đọc lại mô tả bằng lời ở trên và tự dựng quan hệ theo giả thiết; không suy góc hay độ dài từ nét phối cảnh.*



**Khám phá tương tác — Đường dốc, hình chiếu và góc:** [Mở mô hình thao tác tại nguồn học liệu](Temp_THPT_TOPIC16_RAMP_ANGLE_R01_SCOPE_CORRECTED_20261113.html). Hãy dự đoán góc và độ dài trước khi điều chỉnh độ cao/khoảng ngang, rồi kiểm bằng Pitago và sin/tan. Mô hình minh họa không thay chứng minh định lí ba đường vuông góc.

<!-- AUTHOR_ONLY_MODEL_REFERENCE: SLM-TOP16-RAMP-ANGLE-R00; FILE: Temp_THPT_TOPIC16_RAMP_ANGLE_R01_SCOPE_CORRECTED_20261113.html; PUBLIC_DISCOVERY_NO_MASTERY -->

### 3.1. Chân hình chiếu vuông góc của một điểm

<!-- LESSON_ID: TOP16-M10; OUTCOME_ID: TOP16-O10; S1_ORIGINAL_OUTCOME: G11-B24-POINT_PROJECTION -->

Chiếu điểm xuống nền theo phương vuông góc là đi theo đường pháp tuyến cho đến khi gặp nền. Nếu điểm đã ở trên nền, ảnh chính là điểm ấy.

> **ĐỊNH NGHĨA**
>
> Hình chiếu vuông góc H của A trên (P) là chân duy nhất của AH⊥(P). Độ dài AH là khoảng cách ngắn nhất từ A đến (P).

**Ví dụ**

**Đề bài:** Tìm hình chiếu vuông góc của A(1,2,4) trên mặt (P):z=0.

**Lời giải:** Đường pháp tuyến qua A có dạng (1,2,4+t); cho z=0 được t=−4, nên H(1,2,0). AH có hướng thẳng đứng, vuông góc (P), H thuộc (P).

**Vận dụng**

Nếu A thuộc (P), hình chiếu vuông góc của A trên (P) ở đâu?

<!-- ITEM_ID: THPT-TOP16-T10; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O10 -->

<details markdown="1"><summary>Đối chiếu</summary>

Chính là A; khoảng cách A đến (P) bằng 0.

**Nếu làm sai:** Không lấy điểm gần nhất theo hình phối cảnh thay cho chân vuông góc. Tự dựng lại quan hệ trên hình hoặc viết một phản ví dụ kiểm tra đúng điều kiện, rồi thử câu tương tự.

</details>

### 3.2. Hình chiếu của đoạn và ảnh suy biến

<!-- LESSON_ID: TOP16-M11; OUTCOME_ID: TOP16-O11; S1_ORIGINAL_OUTCOME: G11-B24-LINE_PROJECTION -->

Hai đầu đoạn có hai ảnh khác nhau thì hình chiếu là một đoạn. Nếu cả hai đi trên cùng một đường pháp tuyến, hình chiếu co về một điểm.

> **ĐỊNH NGHĨA**
>
> Muốn chiếu một đường, chiếu hai điểm phân biệt của nó rồi nối ảnh; nếu đường theo phương vuông góc mặt phẳng thì toàn bộ ảnh chỉ là **một điểm**.

**Ví dụ**

**Đề bài:** Trong lăng trụ đứng ABC.A′B′C′, xác định hình chiếu A′C′ và AA′ lên đáy (ABC).

**Lời giải:** Do lăng trụ đứng, A′ chiếu thành A, C′ chiếu thành C; ảnh A′C′ là AC (hai ảnh phân biệt). A′ và A có cùng ảnh A nên ảnh đoạn AA′ chỉ là điểm A.

**Vận dụng**

Đường d⊥(P). Ảnh vuông góc của d lên (P) là gì?

<!-- ITEM_ID: THPT-TOP16-T11; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O11 -->

<details markdown="1"><summary>Đối chiếu</summary>

Một điểm: chân giao d∩(P).

**Nếu làm sai:** Luôn xét xem hai đầu mút có chiếu trùng nhau không trước khi nối ảnh. Tự dựng lại quan hệ trên hình hoặc viết một phản ví dụ kiểm tra đúng điều kiện, rồi thử câu tương tự.

</details>

### 3.3. Định lí ba đường vuông góc

<!-- LESSON_ID: TOP16-M12; OUTCOME_ID: TOP16-O12; S1_ORIGINAL_OUTCOME: G11-B24-THREE_PERP -->

Một đường xiên có thành phần nằm ngang và thành phần thẳng đứng. Một hướng trong nền vuông góc hình chiếu ngang cũng vuông góc đường xiên, vì hướng đó đã vuông góc thành phần đứng.

> **ĐỊNH LÝ**
>
> Định lí ba đường vuông góc liên hệ đường xiên, hình chiếu vuông góc của nó và đường nằm trong mặt phẳng: đường của mặt phẳng vuông góc hình chiếu thì cũng vuông góc đường xiên.

**Ví dụ**

**Đề bài:** Với mặt phẳng (P): z=0, lấy A(0,0,2) nằm ngoài (P), H(0,0,0) và B(3,0,0) thuộc (P). Chứng minh đường c qua H có hướng (0,1,0) vuông góc với đường AB.

**Lời giải:** AH⊥(P) vì A và H có cùng hai tọa độ ngang, H∈(P); BH nằm trong (P) và B≠H. Đường c qua H có hướng (0,1,0) nằm trong (P), vuông góc BH theo (1,0,0). Định lí ba đường vuông góc cho c⊥AB; kiểm bằng tọa độ vectơ \(\overrightarrow{AB}=(3,0,-2)\) có tích vô hướng với hướng (0,1,0) của c bằng 0.

**Vận dụng**

AH⊥(P), B∈(P) và B≠H nên BH là một đường thẳng trên (P). Nếu c⊂(P), c⊥BH, có thể kết luận c⊥AB không?

<!-- ITEM_ID: THPT-TOP16-T12; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O12 -->

<details markdown="1"><summary>Đối chiếu</summary>

Có: BH là hình chiếu của AB lên (P); dùng định lí ba đường vuông góc.

**Nếu làm sai:** Trước khi dùng định lí, xác định chân H và đảm bảo BH thật sự là hình chiếu AB. Tự dựng lại quan hệ trên hình hoặc viết một phản ví dụ kiểm tra đúng điều kiện, rồi thử câu tương tự.

</details>

### 3.4. Góc đường thẳng với mặt phẳng

<!-- LESSON_ID: TOP16-M13; OUTCOME_ID: TOP16-O13; S1_ORIGINAL_OUTCOME: G11-B24-LINE_PLANE_ANGLE -->

Góc một đường với mặt nền cần lấy qua chính hình chiếu của đường trên nền. Nếu đường vuông góc nền thì ảnh co thành điểm và góc 90° được xét riêng.

> **ĐỊNH NGHĨA**
>
> Góc giữa đường xiên AB và (P) là góc giữa AB và hình chiếu BH của nó, trong [0°,90°]. Nếu AB⊥(P) thì góc 90° dù hình chiếu thu thành điểm.

**Ví dụ**

**Đề bài:** Cho A cao 3 m so với nền, H là chân hình chiếu, B trên nền, BH=4 m. Tính góc giữa AB và nền.

**Lời giải:** Tam giác ABH vuông H, AB=√(3²+4²)=5 m. Góc giữa AB và nền là góc ABH với sinθ=3/5, nên θ≈36,87°. Điều kiện B≠H đảm bảo hình chiếu BH là đường.

**Vận dụng**

Đường nằm trong (P) tạo góc bao nhiêu với (P)?

<!-- ITEM_ID: THPT-TOP16-T13; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O13 -->

<details markdown="1"><summary>Đối chiếu</summary>

0°. Khi đường vuông góc (P), góc 90°.

**Nếu làm sai:** Không lấy góc giữa đường xiên và pháp tuyến làm góc đường–mặt; đó là góc phụ. Tự dựng lại quan hệ trên hình hoặc viết một phản ví dụ kiểm tra đúng điều kiện, rồi thử câu tương tự.

</details>

### 3.5. Tam giác vuông và góc dốc

<!-- LESSON_ID: TOP16-M14; OUTCOME_ID: TOP16-O14; S1_ORIGINAL_OUTCOME: G11-B24-ANGLE_APPLICATION -->

Đường dốc cao và đoạn ngang tạo thành hai cạnh góc vuông. Muốn tính góc đúng, phải phân biệt cạnh đối là độ cao, kề là khoảng ngang, huyền là chiều dài dốc.

> **PHƯƠNG PHÁP**
>
> Một đường dốc tạo tam giác vuông với mặt nền: chiều cao là cạnh đối góc dốc, khoảng ngang là cạnh kề, và độ dài đường dốc là cạnh huyền.

**Ví dụ**

**Đề bài:** Đoạn dốc cao 5 m và có khoảng ngang 12 m. Tính chiều dài dốc và tang góc dốc.

**Lời giải:** Tam giác vuông có hai cạnh góc vuông 5 và 12, nên cạnh huyền √(25+144)=13 m. Với góc dốc θ, tanθ=5/12; không lấy 13 làm khoảng ngang.

**Vận dụng**

Dốc cao 3 m, ngang 4 m: độ dài đoạn dốc?

<!-- ITEM_ID: THPT-TOP16-T14; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O14 -->

<details markdown="1"><summary>Đối chiếu</summary>

5 m theo định lí Pitago, không phải 7 m.

**Nếu làm sai:** Chỉ áp dụng tỉ số lượng giác cho tam giác vuông sau khi dựng hình chiếu đúng. Tự dựng lại quan hệ trên hình hoặc viết một phản ví dụ kiểm tra đúng điều kiện, rồi thử câu tương tự.

</details>


**Từ góc của một đường đến góc của cả mặt.** Hai bề mặt của mái và trần có thể gặp nhau theo một đường dài; nếu lấy bất kỳ đường xiên nào trong từng mặt để đo, đáp án sẽ thay đổi theo vị trí thước. Muốn đo góc ổn định, tại một điểm trên **giao tuyến** hãy dựng trong mỗi mặt một đường vuông góc giao tuyến. Chính góc trong thiết diện vuông góc ấy là thông tin cần dùng. Lưu ý: góc phẳng của một **góc nhị diện** có thể là góc tù, còn góc giữa hai **mặt phẳng không định hướng** luôn được lấy là góc nhỏ.

**Một ví dụ nối ba ý tưởng:** Cho SA⊥(ABC) và H là chân vuông góc từ A đến BC. Khi ấy BC⊥SA và BC⊥AH; suy BC⊥(SAH), nên BC⊥SH. Hai đường AH⊂(ABC) và SH⊂(SBC) cùng vuông góc BC tại H, vì vậy góc SHA trong tiết diện SAH diễn tả góc phẳng của nhị diện có bờ BC (với hai nửa mặt tương ứng), còn góc giữa hai mặt phẳng là góc nhỏ giữa AH và SH. Đừng nhầm góc tại S với góc tại H.

## 4. B25 · Hai mặt phẳng vuông góc và hình khối đặc biệt

![Hai nửa mặt phẳng chung bờ Delta, tiết diện tạo hai tia OU và OV vuông góc Delta, góc UOV đo nhị diện](../../../../docs/assets/images/thpt/FIG-G11-CHVII-B25-01_R00.svg)

**Đọc hình — B25:**

Trước hết chỉ **giao tuyến Δ**, sau đó xem hai tia **OU, OV** cùng vuông góc Δ tại **O** nhưng nằm trên hai mặt khác nhau. **UOV** là góc phẳng của nhị diện đã chọn, có thể tù. Khi câu hỏi nói góc **giữa hai mặt phẳng**, lấy góc không tù giữa hai đường thẳng chứa OU và OV, không tùy tiện giữ góc nhị diện lớn hơn 90°.

*Nếu không hiển thị hình, hãy đọc lại mô tả bằng lời ở trên và tự dựng quan hệ theo giả thiết; không suy góc hay độ dài từ nét phối cảnh.*

### 4.1. Góc giữa hai mặt phẳng

<!-- LESSON_ID: TOP16-M15; OUTCOME_ID: TOP16-O15; S1_ORIGINAL_OUTCOME: G11-B25-PLANE_ANGLE -->

Hai mặt phẳng có giao tuyến không nhất thiết vuông góc. Hãy dựng một mặt cắt vuông góc giao tuyến để đọc góc nhỏ giữa hai vết cắt.

> **ĐỊNH NGHĨA**
>
> Góc giữa hai **mặt phẳng** được đo bằng góc nhỏ của hai đường lần lượt nằm trong hai mặt và cùng vuông góc giao tuyến; kết quả thuộc [0°,90°] khi xét mặt phẳng không định hướng.

**Ví dụ**

**Đề bài:** Cho hai mặt (P):z=0 và (Q):x=0. Tìm góc giữa hai mặt bằng một tiết diện vuông góc giao tuyến.

**Lời giải:** Giao tuyến hai mặt là trục Oy. Trong z=0 chọn Ox, trong x=0 chọn Oz, hai đường cùng qua O và vuông góc Oy. Vì Ox⊥Oz nên góc giữa hai mặt là 90°.

**Vận dụng**

Hai mặt phẳng song song tạo góc giữa hai mặt bằng bao nhiêu?

<!-- ITEM_ID: THPT-TOP16-T15; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O15 -->

<details markdown="1"><summary>Đối chiếu</summary>

0° theo quy ước góc giữa các mặt phẳng.

**Nếu làm sai:** Không đồng nhất góc giữa hai mặt với bất kì góc của hai đường tùy chọn ở hai mặt. Tự dựng lại quan hệ trên hình hoặc viết một phản ví dụ kiểm tra đúng điều kiện, rồi thử câu tương tự.

</details>

### 4.2. Góc nhị diện và góc hai mặt

<!-- LESSON_ID: TOP16-M16; OUTCOME_ID: TOP16-O16; S1_ORIGINAL_OUTCOME: G11-B25-DIHEDRAL -->

Nhị diện dùng hai nửa mặt phẳng có chọn phía nên góc phẳng có thể tù; góc giữa hai mặt không định hướng chỉ lấy góc nhỏ.

> **ĐỊNH NGHĨA**
>
> Góc nhị diện gắn với **hai nửa mặt phẳng** có chung bờ: góc phẳng của nhị diện có thể lớn hơn 90°. Góc giữa hai mặt phẳng không định hướng lấy góc nhỏ.

**Ví dụ**

**Đề bài:** Một nhị diện có góc phẳng 135°. Tính góc nhỏ giữa hai mặt phẳng chứa nó.

**Lời giải:** Góc nhị diện 135° là góc của hai nửa mặt phẳng có hướng. Góc nhỏ giữa hai mặt không định hướng là min(135°,180°−135°)=45°.

**Vận dụng**

Nhị diện 120° cho góc nhỏ giữa hai mặt phẳng chứa nó bằng bao nhiêu?

<!-- ITEM_ID: THPT-TOP16-T16; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O16 -->

<details markdown="1"><summary>Đối chiếu</summary>

60° = 180°−120°.

**Nếu làm sai:** Phải nêu đang nói nhị diện hay góc giữa hai mặt phẳng; khác nhau ở định hướng. Tự dựng lại quan hệ trên hình hoặc viết một phản ví dụ kiểm tra đúng điều kiện, rồi thử câu tương tự.

</details>

### 4.3. Dấu hiệu hai mặt vuông góc

<!-- LESSON_ID: TOP16-M17; OUTCOME_ID: TOP16-O17; S1_ORIGINAL_OUTCOME: G11-B25-PERP_PLANES -->

Mặt tường chứa một đường vuông góc sàn thì cả mặt tường vuông góc sàn. Đó là một dấu hiệu mạnh hơn việc thấy hai đường tùy ý có góc vuông.

> **ĐỊNH LÝ**
>
> Muốn chứng minh (P)⊥(Q), tìm **một đường** nằm trong (P) và vuông góc với (Q). Không chỉ chứng minh hai đường thuộc hai mặt vuông góc.

**Ví dụ**

**Đề bài:** Cho (P):x=0, (Q):z=0. Dùng một đường trong (P) để chứng minh hai mặt vuông góc.

**Lời giải:** Trục Oz nằm trong x=0, có hướng (0,0,1), vuông góc mọi đường của z=0. Vì (P) chứa đường Oz⊥(Q), suy (P)⊥(Q).

**Vận dụng**

d⊂(P), d⊥(Q). Quan hệ hai mặt (P),(Q)?

<!-- ITEM_ID: THPT-TOP16-T17; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O17 -->

<details markdown="1"><summary>Đối chiếu</summary>

(P)⊥(Q), theo dấu hiệu một đường trong mặt vuông góc mặt kia.

**Nếu làm sai:** Chỉ “có hai đường vuông góc” chưa đủ nếu không có đường vuông góc toàn bộ mặt. Tự dựng lại quan hệ trên hình hoặc viết một phản ví dụ kiểm tra đúng điều kiện, rồi thử câu tương tự.

</details>

### 4.4. Đường vuông góc giao tuyến

<!-- LESSON_ID: TOP16-M18; OUTCOME_ID: TOP16-O18; S1_ORIGINAL_OUTCOME: G11-B25-PERP_PLANE_RULE -->

Hai mặt vuông góc có giao tuyến d. Muốn một đường trong mặt thứ nhất vuông góc cả mặt thứ hai, ta còn cần nó vuông góc d.

> **ĐỊNH LÝ**
>
> Khi hai mặt (P)⊥(Q) cắt theo d, đường a **trong (P)** và **vuông góc d** sẽ vuông góc (Q), theo định lí về hai mặt vuông góc.

**Ví dụ**

**Đề bài:** Hai mặt (P):x=0 và (Q):z=0 giao theo Oy. Lấy a là trục Oz. Dùng tính chất hai mặt vuông góc chứng minh a⊥(Q).

**Lời giải:** Oz thuộc mặt x=0 và vuông góc Oy là giao tuyến d. Vì hai mặt vuông góc, đường trong mặt thứ nhất vuông góc d cũng vuông góc mặt thứ hai, nên Oz⊥(Q).

**Vận dụng**

(P)⊥(Q) theo d. a⊂(P), a⊥d. Có a⊥(Q) không?

<!-- ITEM_ID: THPT-TOP16-T18; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O18 -->

<details markdown="1"><summary>Đối chiếu</summary>

Có, theo định lí hai mặt phẳng vuông góc. a phải nằm trong (P) và vuông góc giao tuyến d.

**Nếu làm sai:** Nhớ cả điều kiện a nằm trong mặt và a vuông góc giao tuyến. Tự dựng lại quan hệ trên hình hoặc viết một phản ví dụ kiểm tra đúng điều kiện, rồi thử câu tương tự.

</details>

### 4.5. Lăng trụ đứng và chiều cao

<!-- LESSON_ID: TOP16-M19; OUTCOME_ID: TOP16-O19; S1_ORIGINAL_OUTCOME: G11-B25-RIGHT_PRISM -->

Lăng trụ đứng và lăng trụ xiên đều có hai đáy song song. Chỉ lăng trụ đứng có cạnh bên vuông góc đáy và bằng chiều cao.

> **TÍNH CHẤT**
>
> Lăng trụ đứng có cạnh bên vuông góc hai đáy; chiều cao chính là cạnh bên. Lăng trụ đều có đáy đa giác đều và là lăng trụ đứng. Hộp chữ nhật/lập phương là các trường hợp đặc biệt.

**Ví dụ**

**Đề bài:** Lăng trụ đứng có cạnh bên dài 6 cm. Tính chiều cao và giải thích dựa vào hình học.

**Lời giải:** Cạnh bên của lăng trụ đứng vuông góc cả hai đáy song song. Chiều cao là độ dài đoạn vuông góc giữa hai đáy, nên bằng cạnh bên: 6 cm.

**Vận dụng**

Lăng trụ đứng có cạnh bên 7 cm, chiều cao bao nhiêu?

<!-- ITEM_ID: THPT-TOP16-T19; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O19 -->

<details markdown="1"><summary>Đối chiếu</summary>

7 cm, vì cạnh bên vuông góc mặt đáy.

**Nếu làm sai:** Không dùng chiều dài cạnh bên của lăng trụ xiên làm chiều cao. Tự dựng lại quan hệ trên hình hoặc viết một phản ví dụ kiểm tra đúng điều kiện, rồi thử câu tương tự.

</details>

### 4.6. Chóp đều: chiều cao và đường cao mặt bên

<!-- LESSON_ID: TOP16-M20; OUTCOME_ID: TOP16-O20; S1_ORIGINAL_OUTCOME: G11-B25-REGULAR_PYRAMID -->

Chóp đều có đường cao qua tâm đáy. Đường nối đỉnh với trung điểm cạnh đáy là đường cao mặt bên: hai đoạn này khác nhau, phải dùng tam giác vuông để tính.

> **TÍNH CHẤT**
>
> Chóp đều có đáy là đa giác đều và chân đường cao là tâm của đáy, nên các cạnh bên bằng nhau. Độ dài cạnh bên, chiều cao và đường cao mặt bên là ba khái niệm khác.

**Ví dụ**

**Đề bài:** Chóp tứ giác đều có đáy vuông cạnh 10 cm, chiều cao 12 cm. Tính đường cao mặt bên qua trung điểm một cạnh đáy.

**Lời giải:** Tâm O của đáy vuông cách trung điểm M cạnh đáy OM=5 cm. SO=12 cm vuông góc đáy, nên tam giác SOM vuông O; đường cao mặt bên SM=√(12²+5²)=13 cm, không phải 12 cm.

**Vận dụng**

Chóp đều đáy vuông cạnh 6, h=4. Đường cao của mặt bên qua trung điểm cạnh đáy dài bao nhiêu?

<!-- ITEM_ID: THPT-TOP16-T20; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O20 -->

<details markdown="1"><summary>Đối chiếu</summary>

5, do tam giác vuông có hai cạnh 4 và 3.

**Nếu làm sai:** Không lấy cạnh bên hay đường cao mặt bên làm chiều cao vuông góc của chóp. Tự dựng lại quan hệ trên hình hoặc viết một phản ví dụ kiểm tra đúng điều kiện, rồi thử câu tương tự.

</details>

### 4.7. Chóp cụt đều: tỉ số đồng dạng

<!-- LESSON_ID: TOP16-M21; OUTCOME_ID: TOP16-O21; S1_ORIGINAL_OUTCOME: G11-B25-REGULAR_FRUSTUM -->

Cắt chóp đều bằng mặt song song đáy tạo chóp cụt đều với hai đáy đồng dạng. Diện tích thay theo bình phương tỉ số cạnh, không theo tỉ số cạnh.

> **TÍNH CHẤT**
>
> Chóp cụt đều thu được khi cắt chóp đều bởi mặt phẳng song song đáy; hai đáy là đa giác đều đồng dạng, các mặt bên là hình thang cân. Tỉ số diện tích bằng bình phương tỉ số cạnh.

**Ví dụ**

**Đề bài:** Chóp cụt đều có hai đáy hình vuông cạnh 10 cm và 4 cm. Tính tỉ số diện tích hai đáy.

**Lời giải:** Diện tích hai đáy là 10²=100 và 4²=16 cm². Tỉ số 100:16=25:4, bằng bình phương tỉ số cạnh (10/4)².

**Vận dụng**

Hai đáy hình vuông cạnh 6 và 3 có tỉ số diện tích đáy lớn : đáy nhỏ?

<!-- ITEM_ID: THPT-TOP16-T21; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O21 -->

<details markdown="1"><summary>Đối chiếu</summary>

36:9 = 4:1.

**Nếu làm sai:** Không nhân tỉ số cạnh trực tiếp để suy tỉ số diện tích. Tự dựng lại quan hệ trên hình hoặc viết một phản ví dụ kiểm tra đúng điều kiện, rồi thử câu tương tự.

</details>

> **Kiến thức cần ghi nhớ**
>
> - **Góc giữa hai đường:** để so hai đường chéo nhau, chuyển hai phương về cùng điểm bằng đường song song rồi đo góc nhỏ; không lấy số đo góc vẽ phối cảnh.
> - **Vuông góc đường–mặt:** đường thẳng vuông góc mặt phẳng nếu vuông góc với mọi đường nằm trong mặt; khi chứng minh, đủ chỉ ra vuông góc với **hai đường cắt nhau** nằm trong mặt ấy, không thay bằng hai đường song song.
> - **Hình chiếu và góc đường–mặt:** dựng chân vuông góc trước khi chọn tam giác tính góc; nếu đường vuông góc mặt phẳng thì góc bằng 90°, đường song song thì góc bằng 0°. Phân biệt góc đường–mặt với góc hai mặt.
> - **Góc nhị diện, hình khối:** đo góc hai mặt bằng hai đường cùng vuông góc giao tuyến tại cùng một điểm trong các mặt; chiều cao lăng trụ/chóp phải vuông góc với mặt đáy, không lấy độ dài cạnh xiên thay thế.

# Luyện tập

Em hãy giải bằng hình học và suy luận, ghi rõ điều kiện của từng dấu hiệu rồi mới tự mở **Lời giải**. Mỗi bài đều có đề thực để làm tại đây.

## 1. Góc và quan hệ vuông góc giữa hai đường

**Bài dùng chung từ SGK**

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B22-C01; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 1.** Hai đường có góc giữa hai tia cùng phương được chọn là 145°. Góc giữa hai đường thẳng là bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** 35°

**Lời giải và vì sao:** Góc giữa hai đường thẳng là góc không tù: 180°−145°=35°.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B22-C02; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 2.** Có thể có a⊥b nhưng a và b không có điểm chung không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** Có

**Lời giải và vì sao:** Góc vuông là quan hệ giữa phương; đường chéo nhau vẫn có thể có hai phương vuông góc.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B22-C03; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 3.** Nếu a//a′ và a⊥b thì góc giữa a′ và b bằng bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** 90°

**Lời giải và vì sao:** Đường song song giữ phương nên giữ góc với b.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B22-C04; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 4.** Hai thanh thép cách nhau, một theo phương Đông–Tây, một thẳng đứng. Chúng có vuông góc theo định nghĩa không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** Có, góc giữa hai phương bằng 90°

**Lời giải và vì sao:** Chuyển một thanh bằng đường song song đến cùng điểm; không cần chúng cắt nhau.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B22-P01; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 5.** Nêu cách xác định góc của hai đường chéo nhau mà không phải kéo chúng tới chỗ gặp nhau.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** Qua một điểm chung dựng hai đường lần lượt song song hai đường ban đầu, đo góc không tù giữa chúng.

**Lời giải và vì sao:** Hình thức tịnh tiến hướng, không biến hai đường thật thành đồng phẳng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B22-P02; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 6.** Trong hộp chữ nhật, AB và D′C′ có góc giữa là bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** 0°

**Lời giải và vì sao:** AB//D′C′, hai đường song song trong không gian.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B22-P03; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 7.** Một bạn nói hai đường vuông góc phải gặp nhau. Nêu một phản ví dụ chính xác.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** Trong hộp chữ nhật AB⊥CC′ dù không cắt nhau.

**Lời giải và vì sao:** Vì CC′//AA′ và AA′⊥AB.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B22-W01; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_WRITTEN; ORIGINAL_CANONICAL_UNCHANGED -->
**Tự luận SGK 1.** Hình hộp chữ nhật ABCD.A′B′C′D′: chứng minh AB⊥DD′ và nêu tại sao không cần giao điểm.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Bài giải tự đối chiếu sau khi tự làm:** DD′//AA′, AA′⊥(ABCD) nên AA′⊥AB; thay phương song song suy góc (AB,DD′)=90°.

**Rubric 4 điểm:**
1. Nêu đúng AA′⊥(ABCD) (1) — **1 điểm**.
2. Suy AA′⊥AB (1) — **1 điểm**.
3. Dùng DD′//AA′ (1) — **1 điểm**.
4. Kết luận góc theo phương dù không cắt (1) — **1 điểm**.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B22-W02-ANCHOR; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_WRITTEN; ORIGINAL_CANONICAL_UNCHANGED -->
**Tự luận SGK 2.** Hai đường a,b chéo nhau; qua O dựng a′//a,b′//b và biết góc giữa hai tia đã chọn là 135°. Tính góc giữa a,b, nêu vì sao độc lập O.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Bài giải tự đối chiếu sau khi tự làm:** Góc giữa hai đường là 45°. Phép chọn O khác chỉ tịnh tiến phương của hai đường nên góc không đổi.

**Rubric 4 điểm:**
1. Dựng/nhận đúng a′,b′ và phương (1) — **1 điểm**.
2. Hiểu góc đường lấy góc không tù (1) — **1 điểm**.
3. Tính 45° từ 180°−135° (1) — **1 điểm**.
4. Giải thích độc lập O (1) — **1 điểm**.

</details>

**Bài của chuyên đề**

<!-- CANONICAL_ITEM_ID: THPT-TOP16-P01; OUTCOME_ID: TOP16-O01; ROLE: TOPIC_PRACTICE; ORIGINAL_R01_KEY_UNCHANGED -->
**Bài luyện 1.** Trong hình hộp chữ nhật, góc giữa AD và B′C′ bằng bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

0°: AD và B′C′ song song, nên cùng phương. Không lấy khoảng cách giữa hai cạnh để xác định góc.

**D6 nếu sai:** Đừng dùng góc tù hoặc kết luận không có góc chỉ vì hai đường không gặp nhau. Quay lại định nghĩa và giả thiết, tự chỉ rõ lý do chọn phép suy luận này trước khi làm biến thể.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP16-P02; OUTCOME_ID: TOP16-O02; ROLE: TOPIC_PRACTICE; ORIGINAL_R01_KEY_UNCHANGED -->
**Bài luyện 2.** Trong hình hộp chữ nhật, chứng minh BC vuông góc AA′.

<details markdown="1"><summary>Lời giải</summary>

Vì AA′⊥(ABCD) nên AA′ vuông góc mọi đường của đáy, trong đó có BC; hoặc BB′∥AA′ và BC⊥BB′.

**D6 nếu sai:** Phân biệt “vuông góc theo phương” với “hai đường cắt nhau tại góc vuông”. Quay lại định nghĩa và giả thiết, tự chỉ rõ lý do chọn phép suy luận này trước khi làm biến thể.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP16-P03; OUTCOME_ID: TOP16-O03; ROLE: TOPIC_PRACTICE; ORIGINAL_R01_KEY_UNCHANGED -->
**Bài luyện 3.** Trong hình hộp, từ BC⊥BB′ và DD′∥BB′ chứng minh BC⊥DD′.

<details markdown="1"><summary>Lời giải</summary>

Thay DD′ bằng BB′ cùng phương. Vì BC⊥BB′ nên BC⊥DD′; không yêu cầu BC gặp DD′.

**D6 nếu sai:** Không suy hai đường cùng vuông góc một đường thứ ba thì chúng song song trong không gian. Quay lại định nghĩa và giả thiết, tự chỉ rõ lý do chọn phép suy luận này trước khi làm biến thể.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP16-P04; OUTCOME_ID: TOP16-O04; ROLE: TOPIC_PRACTICE; ORIGINAL_R01_KEY_UNCHANGED -->
**Bài luyện 4.** Nêu một chứng cứ chắc chắn để kết luận AB⊥CC′ trong hộp chữ nhật.

<details markdown="1"><summary>Lời giải</summary>

Từ AB thuộc đáy và CC′ vuông góc mặt đáy, CC′⊥AB; kết luận không dựa nét vẽ.

**D6 nếu sai:** Khi lời giải viết “nhìn hình thấy”, hãy thay bằng quan hệ song song/vuông góc có giả thiết. Quay lại định nghĩa và giả thiết, tự chỉ rõ lý do chọn phép suy luận này trước khi làm biến thể.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP16-W01; OUTCOME_ID: TOP16-O02; ROLE: TOPIC_WRITTEN; ORIGINAL_R01_RUBRIC_UNCHANGED -->
**Tự luận 1.** Trong lập phương ABCD.A′B′C′D′, chứng minh AB và DD′ là hai đường chéo nhau vuông góc; sau đó qua A dựng một đường song song DD′ và xác định góc của hai đường từ đường vừa dựng.

<details markdown="1"><summary>Lời giải và rubric</summary>

Trong lập phương, AB và D cùng nằm ở mặt đáy (ABCD) nhưng D không thuộc AB. Nếu có mặt phẳng nào chứa cả AB và DD′ thì nó phải chứa A, B, D, tức chính là mặt đáy (ABCD); điều này không thể xảy ra vì D′ không nằm ở đáy. Vậy AB và DD′ không đồng phẳng (và không song song), nên chéo nhau. Qua A, đường AA′ song song DD′; vì AB⊥AA′, góc giữa AB và DD′ bằng góc BAA′ = 90°. Đó là cách dời *phương* về cùng điểm để đo góc, không dựa trên hình phối cảnh.

**Rubric 4 điểm:**
- Nêu đúng hai phương vuông góc — **1 điểm**.
- Chứng minh hai đường chéo nhau, không cắt — **1 điểm**.
- Dựng được AA′ qua A song song DD′ — **1 điểm**.
- Xác định góc BAA′ = 90° và lý do bất biến phương — **1 điểm**.

</details>

## 2. Đường vuông góc với mặt phẳng

**Bài dùng chung từ SGK**

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B23-C01; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 8.** Một cột chỉ vuông góc một đường trong mặt sân, có đủ kết luận cột vuông góc sân?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** Chưa đủ

**Lời giải và vì sao:** Định nghĩa đòi vuông góc mọi phương nằm trong mặt; một phương chưa đủ.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B23-C02; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 9.** Trong mặt (P), a,b cắt nhau. d⊥a và d⊥b thì d quan hệ gì với (P)?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** d⊥(P)

**Lời giải và vì sao:** Hai phương cắt nhau đủ theo điều kiện xác định đường vuông góc mặt phẳng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B23-C03; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 10.** d⊥(P) và e//d. e có vuông góc (P)?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** Có

**Lời giải và vì sao:** Đường e giữ phương vuông góc (P) của d.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B23-C04; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 11.** Hai đường d,e cùng vuông góc một mặt phẳng, chúng có thể cắt nhau mà không trùng nhau không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** Không; d//e hoặc d=e

**Lời giải và vì sao:** Hai đường cùng phương pháp tuyến. Nếu cùng đi qua một điểm thì chúng trùng, nếu khác đường thì song song.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B23-C05; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 12.** Chân giá treo đỡ cột theo hai thanh nằm trên nền mà hai thanh cắt nhau. Cột vuông góc cả hai thanh. Kết luận?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** Cột vuông góc nền

**Lời giải và vì sao:** Vì hai thanh thuộc nền cắt nhau và cột vuông góc cả hai.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B23-P01; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 13.** d⊥(P) và (P)//(Q). d có vuông góc (Q)?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** Có.

**Lời giải và vì sao:** Mặt song song có các phương trong mặt giống nhau; pháp tuyến chung.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B23-P02; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 14.** Nếu một đường d vuông góc hai đường song song trong (P), kết luận d⊥(P) có chắc đúng?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** Không chắc.

**Lời giải và vì sao:** Thiếu hai phương cắt nhau/độc lập trong mặt phẳng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B23-P03; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 15.** Có thể có hai đường phân biệt, cắt nhau và đều vuông góc (P)?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** Không.

**Lời giải và vì sao:** Hai đường cùng vuông góc một mặt chỉ có thể song song hoặc trùng nhau.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B23-W01; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_WRITTEN; ORIGINAL_CANONICAL_UNCHANGED -->
**Tự luận SGK 3.** Trong tam giác ABC, đường d qua A vuông góc AB và AC. Hãy chứng minh d vuông góc BC và mọi đường thuộc (ABC).

<details markdown="1"><summary>Lời giải và rubric</summary>

**Bài giải tự đối chiếu sau khi tự làm:** AB,AC cắt nhau tại A nên d⊥(ABC); suy d⊥BC và mọi đường trong đáy.

**Rubric 4 điểm:**
1. Nêu AB,AC cùng nằm đáy (1) — **1 điểm**.
2. Nêu AB,AC cắt nhau tại A (1) — **1 điểm**.
3. Áp dụng tiêu chí đủ d⊥(ABC) (1) — **1 điểm**.
4. Suy đúng d⊥BC và mọi đường trong mặt (1) — **1 điểm**.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B23-W02-ANCHOR; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_WRITTEN; ORIGINAL_CANONICAL_UNCHANGED -->
**Tự luận SGK 4.** Hai cột k,m khác nhau đều vuông góc nền phẳng (P); một bạn nói chúng có thể cắt nhau tạo góc nhọn. Hãy phản biện và mô tả phương của chúng.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Bài giải tự đối chiếu sau khi tự làm:** k và m cùng phương pháp tuyến (P), nên song song nếu khác nhau; không thể cắt tạo góc nhọn.

**Rubric 4 điểm:**
1. Giải thích hai cột là phương pháp tuyến (1) — **1 điểm**.
2. Suy k//m hoặc trùng (1) — **1 điểm**.
3. Loại tình huống góc nhọn (1) — **1 điểm**.
4. Nêu phân biệt với hai đường chỉ vuông góc một vạch sàn (1) — **1 điểm**.

</details>

**Bài của chuyên đề**

<!-- CANONICAL_ITEM_ID: THPT-TOP16-P05; OUTCOME_ID: TOP16-O05; ROLE: TOPIC_PRACTICE; ORIGINAL_R01_KEY_UNCHANGED -->
**Bài luyện 5.** Một đường d vuông góc hai đường cắt nhau a,b của (P); kết luận và lí do?

<details markdown="1"><summary>Lời giải</summary>

d⊥(P) theo dấu hiệu hai phương cắt nhau trong cùng mặt phẳng; a,b cho đủ hai hướng độc lập.

**D6 nếu sai:** Một đường không đại diện cho tất cả các phương trong một mặt phẳng. Quay lại định nghĩa và giả thiết, tự chỉ rõ lý do chọn phép suy luận này trước khi làm biến thể.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP16-P06; OUTCOME_ID: TOP16-O06; ROLE: TOPIC_PRACTICE; ORIGINAL_R01_KEY_UNCHANGED -->
**Bài luyện 6.** Trong mặt phẳng (P), a,b cắt tại O. Biết d⊥a và d⊥b. Chứng minh d⊥(P).

<details markdown="1"><summary>Lời giải</summary>

Áp dụng định lí đường thẳng vuông góc hai đường cắt nhau của một mặt phẳng, suy d⊥(P).

**D6 nếu sai:** Dừng lại khi hai đường kiểm tra song song, trùng nhau hoặc không cùng mặt phẳng. Quay lại định nghĩa và giả thiết, tự chỉ rõ lý do chọn phép suy luận này trước khi làm biến thể.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP16-P07; OUTCOME_ID: TOP16-O07; ROLE: TOPIC_PRACTICE; ORIGINAL_R01_KEY_UNCHANGED -->
**Bài luyện 7.** Đường a⊥(P), hai mặt phẳng (P)∥(Q). Quan hệ a và (Q)?

<details markdown="1"><summary>Lời giải</summary>

a⊥(Q) vì hai mặt phẳng song song có cùng phương pháp tuyến; kiểm tra (P),(Q) thực sự song song.

**D6 nếu sai:** Không lấy việc hai mặt phẳng nhìn cùng hướng trên giấy làm chứng cứ song song. Quay lại định nghĩa và giả thiết, tự chỉ rõ lý do chọn phép suy luận này trước khi làm biến thể.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP16-P08; OUTCOME_ID: TOP16-O08; ROLE: TOPIC_PRACTICE; ORIGINAL_R01_KEY_UNCHANGED -->
**Bài luyện 8.** d⊥(P), e⊥(P) và d≠e. Chứng minh d∥e.

<details markdown="1"><summary>Lời giải</summary>

Cả d và e cùng hướng pháp tuyến của (P); hai đường phân biệt cùng phương nên song song.

**D6 nếu sai:** Không lẫn tính duy nhất theo phương pháp tuyến với tính duy nhất mọi đường qua M. Quay lại định nghĩa và giả thiết, tự chỉ rõ lý do chọn phép suy luận này trước khi làm biến thể.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP16-P09; OUTCOME_ID: TOP16-O09; ROLE: TOPIC_PRACTICE; ORIGINAL_R01_KEY_UNCHANGED -->
**Bài luyện 9.** Trong nền chữ nhật, kiểm tra cột d⊥AB và d⊥AD với AB cắt AD. Kết luận?

<details markdown="1"><summary>Lời giải</summary>

d⊥(ABCD) theo dấu hiệu vuông góc hai đường cắt nhau; mô tả rõ các đường thuộc nền.

**D6 nếu sai:** Không bỏ điều kiện hai phương kiểm tra phải độc lập. Quay lại định nghĩa và giả thiết, tự chỉ rõ lý do chọn phép suy luận này trước khi làm biến thể.

</details>

## 3. Hình chiếu và góc đường–mặt

**Bài dùng chung từ SGK**

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B24-C01; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 16.** M nằm cách (P) 7cm qua đường MH⊥(P). H là gì?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** H là hình chiếu vuông góc của M lên (P)

**Lời giải và vì sao:** Vị trí chân đường vuông góc xác định hình chiếu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B24-C02; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 17.** Đường l vuông góc (P). Hình chiếu của l trên (P) là đường hay điểm?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** Một điểm

**Lời giải và vì sao:** Mọi điểm trên l chiếu đến cùng chân l∩(P).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B24-C03; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 18.** a nằm trong (P), b là đường xiên có hình chiếu b′ trên (P). Biết a⊥b′; suy gì?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** a⊥b

**Lời giải và vì sao:** Định lí ba đường vuông góc cho phép chuyển góc với hình chiếu sang góc với đường xiên.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B24-C04; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 19.** Đường AB xiên xuống (P), AC là hình chiếu của AB. Góc AB và (P) được xác định ở đâu?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** Góc giữa AB và AC (góc nhỏ)

**Lời giải và vì sao:** Hình chiếu đưa bài toán 3D về góc trong tam giác phẳng chứa đường xiên.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B24-C05; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 20.** Đoạn xiên dài 13m, chiều cao 5m. Tính sin góc với mặt đất.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** 5/13

**Lời giải và vì sao:** sinθ=h/độ dài xiên=5/13, không lấy h/độ dài hình chiếu.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B24-P01; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 21.** Một tia tạo góc 35° với mặt nền. Góc tia đó với phương thẳng đứng bằng bao nhiêu (cùng mặt phẳng đứng chứa tia)?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** 55°.

**Lời giải và vì sao:** Hai góc phụ nhau do phương thẳng đứng vuông góc mặt nền.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B24-P02; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 22.** Cầu trượt có độ cao 3m, độ dài trượt 5m. Tính độ dài hình chiếu lên nền.

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** 4m.

**Lời giải và vì sao:** Tam giác vuông, cạnh hình chiếu bằng √(25−9)=4m.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B24-P03; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 23.** Có thể dùng đoạn hình chiếu nằm trên mặt nền để biểu diễn độ cao AH?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** Không.

**Lời giải và vì sao:** Hình chiếu là thành phần nằm trong mặt; AH là thành phần vuông góc.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B24-W01; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_WRITTEN; ORIGINAL_CANONICAL_UNCHANGED -->
**Tự luận SGK 5.** Trong tam giác vuông AHB tại H, AH=9m vuông góc nền và HB=12m. Chứng minh HB là hình chiếu AB, tính góc AB–nền.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Bài giải tự đối chiếu sau khi tự làm:** AB=15m, HB là hình chiếu vì H là chân A và B nằm nền; sinθ=9/15=3/5, θ≈36,87°.

**Rubric 4 điểm:**
1. Xác định H là hình chiếu của A (1) — **1 điểm**.
2. Nêu HB là hình chiếu đoạn AB (1) — **1 điểm**.
3. Tính AB=15m (1) — **1 điểm**.
4. Tính sinθ=3/5 và θ≈36,87° (1) — **1 điểm**.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B24-W02-ANCHOR; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_WRITTEN; ORIGINAL_CANONICAL_UNCHANGED -->
**Tự luận SGK 6.** b là đường xiên với hình chiếu b′ trên (P); a thuộc (P), a⊥b′. Một bạn cho rằng kết luận a⊥b chỉ đúng nếu a,b cắt nhau. Hãy phân tích theo định nghĩa góc hai đường trong không gian.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Bài giải tự đối chiếu sau khi tự làm:** Định lí ba đường vuông góc dùng quan hệ giữa phương: a⊥b khi a⊥b′, miễn b′ là hình chiếu đúng. Hai đường trong không gian có thể chéo nhau; hình chiếu về cùng phương.

**Rubric 4 điểm:**
1. Xác định đúng b′ là hình chiếu b (1) — **1 điểm**.
2. Nêu a⊥b′ là giả thiết (1) — **1 điểm**.
3. Áp dụng ba đường vuông góc (1) — **1 điểm**.
4. Giải thích quan hệ góc theo phương, không cần giao thực (1) — **1 điểm**.

</details>

**Bài của chuyên đề**

<!-- CANONICAL_ITEM_ID: THPT-TOP16-P10; OUTCOME_ID: TOP16-O10; ROLE: TOPIC_PRACTICE; ORIGINAL_R01_KEY_UNCHANGED -->
**Bài luyện 10.** Cho AH⊥(P), AH=7 cm; tìm hình chiếu của A và khoảng cách từ A đến (P).

<details markdown="1"><summary>Lời giải</summary>

H là hình chiếu; d(A,(P))=AH=7 cm. Không dùng độ dài một đoạn xiên khác.

**D6 nếu sai:** Không lấy điểm gần nhất theo hình phối cảnh thay cho chân vuông góc. Quay lại định nghĩa và giả thiết, tự chỉ rõ lý do chọn phép suy luận này trước khi làm biến thể.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP16-P11; OUTCOME_ID: TOP16-O11; ROLE: TOPIC_PRACTICE; ORIGINAL_R01_KEY_UNCHANGED -->
**Bài luyện 11.** Trong lăng trụ đứng ABC.A′B′C′, ảnh của đoạn B′C′ lên (ABC)?

<details markdown="1"><summary>Lời giải</summary>

Đoạn BC vì B′ và C′ lần lượt chiếu thành B,C, khác nhau; ảnh không suy biến.

**D6 nếu sai:** Luôn xét xem hai đầu mút có chiếu trùng nhau không trước khi nối ảnh. Quay lại định nghĩa và giả thiết, tự chỉ rõ lý do chọn phép suy luận này trước khi làm biến thể.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP16-P12; OUTCOME_ID: TOP16-O12; ROLE: TOPIC_PRACTICE; ORIGINAL_R01_KEY_UNCHANGED -->
**Bài luyện 12.** AH⊥(P), B,H∈(P), B≠H, c⊂(P) và c⊥AB. Hỏi c⊥BH không?

<details markdown="1"><summary>Lời giải</summary>

Có. Vì AH⊥(P) nên c⊥AH. Mặt khác, theo giả thiết c⊥AB. Hình chiếu của đường xiên AB lên (P) là đường BH **không suy biến vì B≠H**; theo định lí ba đường vuông góc suy c⊥BH. Nếu bỏ điều kiện B≠H, BH chỉ là một điểm nên không thể viết c⊥BH.

**D6 nếu sai:** Trước khi dùng định lí, xác định chân H và đảm bảo BH thật sự là hình chiếu AB. Quay lại định nghĩa và giả thiết, tự chỉ rõ lý do chọn phép suy luận này trước khi làm biến thể.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP16-P13; OUTCOME_ID: TOP16-O13; ROLE: TOPIC_PRACTICE; ORIGINAL_R01_KEY_UNCHANGED -->
**Bài luyện 13.** AH⊥(P), AH=5 m, BH=12 m. Tính sin góc của AB với (P).

<details markdown="1"><summary>Lời giải</summary>

AB=√(5²+12²)=13 m; sinθ=AH/AB=5/13. Góc là giữa đường AB và hình chiếu BH.

**D6 nếu sai:** Không lấy góc giữa đường xiên và pháp tuyến làm góc đường–mặt; đó là góc phụ. Quay lại định nghĩa và giả thiết, tự chỉ rõ lý do chọn phép suy luận này trước khi làm biến thể.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP16-P14; OUTCOME_ID: TOP16-O14; ROLE: TOPIC_PRACTICE; ORIGINAL_R01_KEY_UNCHANGED -->
**Bài luyện 14.** Đoạn đường dốc cao 5 m và chạy ngang 12 m. Tính độ dài và tan góc dốc.

<details markdown="1"><summary>Lời giải</summary>

Độ dài 13 m; tanθ=5/12. Kiểm tra các số đều là độ dài cùng đơn vị.

**D6 nếu sai:** Chỉ áp dụng tỉ số lượng giác cho tam giác vuông sau khi dựng hình chiếu đúng. Quay lại định nghĩa và giả thiết, tự chỉ rõ lý do chọn phép suy luận này trước khi làm biến thể.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP16-W02; OUTCOME_ID: TOP16-O12; ROLE: TOPIC_WRITTEN; ORIGINAL_R01_RUBRIC_UNCHANGED -->
**Tự luận 2.** Trong tứ diện S.ABC biết SA⊥(ABC), H thuộc BC, AH⊥BC. Chứng minh SH⊥BC.

<details markdown="1"><summary>Lời giải và rubric</summary>

SA⊥(ABC) nên SA⊥BC; AH⊥BC đã cho. Hai đường SA, AH cắt tại A, thuộc (SAH), suy BC⊥(SAH), do đó BC⊥SH. Đây cũng là định lí ba đường vuông góc với AH là hình chiếu của SH.

**Rubric 4 điểm:**
- Xác định chân chiếu A của S lên (ABC) — **1 điểm**.
- Nêu SA⊥BC từ SA⊥(ABC) — **1 điểm**.
- Dùng SA,AH cắt tại A để suy BC⊥(SAH) — **1 điểm**.
- Kết luận SH⊥BC — **1 điểm**.

</details>

## 4. Góc giữa hai mặt, lăng trụ và chóp đều

**Bài dùng chung từ SGK**

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B25-C01; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 24.** Góc giữa hai đường pháp tuyến của hai mặt phẳng là 75°. Góc hai mặt là bao nhiêu?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** 75°

**Lời giải và vì sao:** Góc hai mặt là góc không tù giữa các pháp tuyến.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B25-C02; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 25.** Góc phẳng của một góc nhị diện bằng 125°. Góc giữa hai mặt phẳng chứa nó?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** 55°

**Lời giải và vì sao:** Hai mặt chứa hai nửa mặt tạo góc không tù bằng 180°−125°.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B25-C03; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 26.** a⊂(P), a⊥(Q) thì (P) và (Q) có vuông góc?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** Có

**Lời giải và vì sao:** Tiêu chí đủ: một mặt chứa đường vuông góc với mặt kia.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B25-C04; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 27.** (P)⊥(Q) theo giao tuyến Δ; a⊂(P), a⊥Δ. Có suy a⊥(Q)?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** Có

**Lời giải và vì sao:** Định lí quan hệ vuông góc giữa hai mặt đã vuông góc; kiểm a nằm trong (P).

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B25-C05; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 28.** Lăng trụ đứng đáy ngũ giác đều có phải lăng trụ đều?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** Có

**Lời giải và vì sao:** Định nghĩa lăng trụ đều: lăng trụ đứng có đáy đa giác đều.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B25-C06; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 29.** Trong chóp đều có đáy hình vuông tâm O, chân đường cao kẻ từ S nằm ở đâu?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** Tại O

**Lời giải và vì sao:** Đường cao chóp đều đi qua tâm đa giác đáy.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B25-C07; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 30.** Hai đáy của chóp cụt đều có quan hệ nào?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** Song song, đồng dạng, đều

**Lời giải và vì sao:** Các mặt cắt song song đáy của một chóp đều tạo các đa giác đều đồng dạng.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B25-P01; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 31.** Có thể khẳng định góc giữa hai mặt phẳng là 130°?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** Không.

**Lời giải và vì sao:** Góc hai mặt phẳng theo định nghĩa nằm trong [0°,90°]; 130° có thể là góc phẳng của góc nhị diện.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B25-P02; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 32.** Hình chóp đều có cạnh bên luôn vuông góc đáy?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** Không.

**Lời giải và vì sao:** Đường cao qua đỉnh S tới tâm O đáy mới vuông góc đáy; cạnh SA thường xiên.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B25-P03; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_PRACTICE; ORIGINAL_CANONICAL_UNCHANGED -->
**Bài SGK 33.** Hình lăng trụ đứng có đáy hình thang bất kỳ có là lăng trụ đều không?

<details markdown="1"><summary>Lời giải</summary>

**Đáp án sau Submit luyện tập:** Không.

**Lời giải và vì sao:** Lăng trụ đều còn đòi đáy là đa giác đều.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B25-W01; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_WRITTEN; ORIGINAL_CANONICAL_UNCHANGED -->
**Tự luận SGK 7.** Góc phẳng một góc nhị diện là 112°. Tính góc giữa hai mặt phẳng chứa hai nửa mặt và giải thích vì sao khác 112°.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Bài giải tự đối chiếu sau khi tự làm:** Góc hai mặt =68°, vì lấy góc không tù giữa hai mặt, trong khi góc nhị diện 112° đo hai nửa mặt có hướng.

**Rubric 4 điểm:**
1. Phân biệt nhị diện với góc hai mặt (1) — **1 điểm**.
2. Nêu góc giữa hai mặt ≤90° (1) — **1 điểm**.
3. Tính 180°−112°=68° (1) — **1 điểm**.
4. Giải thích cơ sở chọn góc nhọn (1) — **1 điểm**.

</details>

<!-- DISPLAY_ONLY_CANONICAL: THPT-G11-CHVII-B25-W02-ANCHOR; ORIGINAL_SOURCE_BLOB: afc8ec039213b87b4930f2d34d48c28d1fc6277f; SOURCE_ROLE: SGK_WRITTEN; ORIGINAL_CANONICAL_UNCHANGED -->
**Tự luận SGK 8.** Chóp đều S.ABCD đáy vuông cạnh 8, chân đường cao O tâm đáy, SO=6. Tính AO, SA và giải thích tại sao SA không phải chiều cao.

<details markdown="1"><summary>Lời giải và rubric</summary>

**Bài giải tự đối chiếu sau khi tự làm:** AO=4√2, SA=√(36+32)=2√17; SO=6 là đường cao vì SO⊥đáy, SA xiên.

**Rubric 4 điểm:**
1. Nêu O là tâm và chân đường cao (1) — **1 điểm**.
2. Tính AO=4√2 (1) — **1 điểm**.
3. Tính SA=2√17 (1) — **1 điểm**.
4. Phân biệt SO với SA theo phương vuông góc (1) — **1 điểm**.

</details>

**Bài của chuyên đề**

<!-- CANONICAL_ITEM_ID: THPT-TOP16-P15; OUTCOME_ID: TOP16-O15; ROLE: TOPIC_PRACTICE; ORIGINAL_R01_KEY_UNCHANGED -->
**Bài luyện 15.** Hai mặt phẳng cắt nhau theo d; trong mỗi mặt chọn một đường vuông góc d và góc giữa chúng là 70°. Góc hai mặt?

<details markdown="1"><summary>Lời giải</summary>

70°. Nếu có góc bù 110° trên thiết diện, góc giữa hai mặt không định hướng vẫn là 70°.

**D6 nếu sai:** Không đồng nhất góc giữa hai mặt với bất kì góc của hai đường tùy chọn ở hai mặt. Quay lại định nghĩa và giả thiết, tự chỉ rõ lý do chọn phép suy luận này trước khi làm biến thể.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP16-P16; OUTCOME_ID: TOP16-O16; ROLE: TOPIC_PRACTICE; ORIGINAL_R01_KEY_UNCHANGED -->
**Bài luyện 16.** Góc phẳng của nhị diện 135°. Tìm góc giữa hai mặt phẳng chứa hai nửa mặt phẳng.

<details markdown="1"><summary>Lời giải</summary>

45° = min(135°, 180°−135°). Góc nhị diện vẫn 135° theo hai nửa mặt được chọn.

**D6 nếu sai:** Phải nêu đang nói nhị diện hay góc giữa hai mặt phẳng; khác nhau ở định hướng. Quay lại định nghĩa và giả thiết, tự chỉ rõ lý do chọn phép suy luận này trước khi làm biến thể.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP16-P17; OUTCOME_ID: TOP16-O17; ROLE: TOPIC_PRACTICE; ORIGINAL_R01_KEY_UNCHANGED -->
**Bài luyện 17.** Một mặt đứng (P) chứa cột d vuông góc sàn (Q). Chứng minh (P)⊥(Q).

<details markdown="1"><summary>Lời giải</summary>

Vì d⊂(P) và d⊥(Q), áp dụng dấu hiệu hai mặt phẳng vuông góc.

**D6 nếu sai:** Chỉ “có hai đường vuông góc” chưa đủ nếu không có đường vuông góc toàn bộ mặt. Quay lại định nghĩa và giả thiết, tự chỉ rõ lý do chọn phép suy luận này trước khi làm biến thể.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP16-P18; OUTCOME_ID: TOP16-O18; ROLE: TOPIC_PRACTICE; ORIGINAL_R01_KEY_UNCHANGED -->
**Bài luyện 18.** Trong tường vuông góc nền, đường xiên a trong tường không vuông góc chân tường d. Có kết luận a⊥nền được không?

<details markdown="1"><summary>Lời giải</summary>

Không; thiếu điều kiện a⊥d. Đổi thành đường trong tường vuông góc d mới suy được.

**D6 nếu sai:** Nhớ cả điều kiện a nằm trong mặt và a vuông góc giao tuyến. Quay lại định nghĩa và giả thiết, tự chỉ rõ lý do chọn phép suy luận này trước khi làm biến thể.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP16-P19; OUTCOME_ID: TOP16-O19; ROLE: TOPIC_PRACTICE; ORIGINAL_R01_KEY_UNCHANGED -->
**Bài luyện 19.** Một lăng trụ đứng có đáy là hình thang không cân. Nó có phải lăng trụ đều không? Hãy giải thích vì sao cạnh bên của nó vẫn vuông góc với đáy.

<details markdown="1"><summary>Lời giải</summary>

Không phải lăng trụ đều vì đáy không phải đa giác đều. Tuy nhiên, lăng trụ đứng luôn có cạnh bên vuông góc hai đáy; đó là dấu hiệu hình học xác định đường cao, không cần tính thể tích.

**D6 nếu sai:** Không dùng chiều dài cạnh bên của lăng trụ xiên làm chiều cao. Quay lại định nghĩa và giả thiết, tự chỉ rõ lý do chọn phép suy luận này trước khi làm biến thể.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP16-P20; OUTCOME_ID: TOP16-O20; ROLE: TOPIC_PRACTICE; ORIGINAL_R01_KEY_UNCHANGED -->
**Bài luyện 20.** Chóp đều đáy vuông cạnh 8, chiều cao 3. Tính đường cao của mặt bên.

<details markdown="1"><summary>Lời giải</summary>

√(3²+4²)=5, vì khoảng cách từ tâm đáy tới trung điểm cạnh là 4.

**D6 nếu sai:** Không lấy cạnh bên hay đường cao mặt bên làm chiều cao vuông góc của chóp. Quay lại định nghĩa và giả thiết, tự chỉ rõ lý do chọn phép suy luận này trước khi làm biến thể.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP16-P21; OUTCOME_ID: TOP16-O21; ROLE: TOPIC_PRACTICE; ORIGINAL_R01_KEY_UNCHANGED -->
**Bài luyện 21.** Chóp cụt đều có hai đáy là tam giác đều cạnh 8 và 4. Tỉ số diện tích hai đáy?

<details markdown="1"><summary>Lời giải</summary>

16:4=4:1 vì diện tích các hình đồng dạng tỉ lệ bình phương độ dài tương ứng.

**D6 nếu sai:** Không nhân tỉ số cạnh trực tiếp để suy tỉ số diện tích. Quay lại định nghĩa và giả thiết, tự chỉ rõ lý do chọn phép suy luận này trước khi làm biến thể.

</details>

<!-- CANONICAL_ITEM_ID: THPT-TOP16-W03; OUTCOME_ID: TOP16-O18; ROLE: TOPIC_WRITTEN; ORIGINAL_R01_RUBRIC_UNCHANGED -->
**Tự luận 3.** Hai mặt phẳng (P),(Q) vuông góc, cắt theo d. a⊂(P) và a⊥d. Chứng minh a⊥(Q) và giải thích vì sao phải có điều kiện a⊥d.

<details markdown="1"><summary>Lời giải và rubric</summary>

Theo định lí hai mặt phẳng vuông góc, một đường của (P) vuông góc giao tuyến d sẽ vuông góc (Q). Nếu a là một đường xiên trong (P) không vuông góc d, không suy được a⊥(Q).

**Rubric 4 điểm:**
- Ghi đúng giả thiết hai mặt vuông góc — **1 điểm**.
- Xác định d là giao tuyến — **1 điểm**.
- Áp dụng dấu hiệu a⊂(P),a⊥d — **1 điểm**.
- Giải thích giới hạn khi bỏ a⊥d — **1 điểm**.

</details>

# Tự kiểm tra

Tám câu dưới đây là những câu tự ôn công khai từ Luyện tập. Hãy tự trả lời trên giấy trước khi quay lại lời giải. Kết quả không phải đánh giá năng lực độc lập.

## 1. Câu hỏi tự ôn

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP16-P02; PLACEMENT: PUBLIC_SELF_CHECK_QUESTION_ONLY; ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY; NO_PRE_SUBMIT_KEYS_HINTS -->
**Câu 1.** Trong hình hộp chữ nhật, chứng minh BC vuông góc AA′.

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP16-P06; PLACEMENT: PUBLIC_SELF_CHECK_QUESTION_ONLY; ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY; NO_PRE_SUBMIT_KEYS_HINTS -->
**Câu 2.** Trong mặt phẳng (P), a,b cắt tại O. Biết d⊥a và d⊥b. Chứng minh d⊥(P).

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP16-P09; PLACEMENT: PUBLIC_SELF_CHECK_QUESTION_ONLY; ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY; NO_PRE_SUBMIT_KEYS_HINTS -->
**Câu 3.** Trong nền chữ nhật, kiểm tra cột d⊥AB và d⊥AD với AB cắt AD. Kết luận?

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP16-P12; PLACEMENT: PUBLIC_SELF_CHECK_QUESTION_ONLY; ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY; NO_PRE_SUBMIT_KEYS_HINTS -->
**Câu 4.** AH⊥(P), B,H∈(P), B≠H, c⊂(P) và c⊥AB. Hỏi c⊥BH không?

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP16-P14; PLACEMENT: PUBLIC_SELF_CHECK_QUESTION_ONLY; ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY; NO_PRE_SUBMIT_KEYS_HINTS -->
**Câu 5.** Đoạn đường dốc cao 5 m và chạy ngang 12 m. Tính độ dài và tan góc dốc.

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP16-P16; PLACEMENT: PUBLIC_SELF_CHECK_QUESTION_ONLY; ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY; NO_PRE_SUBMIT_KEYS_HINTS -->
**Câu 6.** Góc phẳng của nhị diện 135°. Tìm góc giữa hai mặt phẳng chứa hai nửa mặt phẳng.

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP16-P18; PLACEMENT: PUBLIC_SELF_CHECK_QUESTION_ONLY; ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY; NO_PRE_SUBMIT_KEYS_HINTS -->
**Câu 7.** Trong tường vuông góc nền, đường xiên a trong tường không vuông góc chân tường d. Có kết luận a⊥nền được không?

<!-- DISPLAY_ONLY_CANONICAL: THPT-TOP16-P21; PLACEMENT: PUBLIC_SELF_CHECK_QUESTION_ONLY; ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY; NO_PRE_SUBMIT_KEYS_HINTS -->
**Câu 8.** Chóp cụt đều có hai đáy là tam giác đều cạnh 8 và 4. Tỉ số diện tích hai đáy?

**Nguồn tài liệu:** SGK Toán 11 Kết nối tri thức với cuộc sống, Tập Hai, Chương VII (Bài 22–25).
