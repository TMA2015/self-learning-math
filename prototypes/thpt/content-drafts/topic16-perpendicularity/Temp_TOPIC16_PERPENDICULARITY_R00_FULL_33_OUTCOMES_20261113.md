# CĐ16 — Quan hệ vuông góc trong không gian · AUTHORING R00

> **AUTHORING REVIEW CANDIDATE / CHƯA CONTENT_READY** · Một chuẩn `SLM-THPT-QUALITY-ONE v3.1.0` Q01–Q18. `CATALOG_TOPIC_ID=CD16` là thứ tự sản xuất, không phải runtime route được chủ dự án phê duyệt. Không phát hành, không Mastery, không đưa RD1 nguồn kín lên GitHub.

**Nguồn S1 căn cứ:** SGK Toán 11 Kết nối tri thức Tập 2, Chương VII B22–B27, trang in SGK 27–65; SBT chương VII trang in 24–43 (theo receipt nguồn SGK gốc của dự án). Source SGK original Git blob `afc8ec039213b87b4930f2d34d48c28d1fc6277f`; original SGK 63 câu công khai chỉ tham chiếu canonical, không sao chép lời giải. **Chưa trực tiếp đọc lại PDF trong đợt này**, không coi Academic/PED PASS cũ của SGK là PASS của Topic mới.

**Hướng học độc lập:** Bất cứ học sinh nào cũng có thể bắt đầu từ định nghĩa quan hệ đường–mặt và cách đọc hình phối cảnh, rồi học vuông góc, hình chiếu, khoảng cách, thể tích trong một hành trình. Phần tọa độ Oxyz nếu có chỉ dùng như minh họa tự đủ; không yêu cầu học trước Toán 12. Đọc hình để định hướng chứng minh, không lấy góc vẽ nhìn thấy làm dữ kiện.

## 1. Kiến thức

**Mở đầu:** Trong một căn phòng, thanh ngang có thể vuông góc một thanh đứng dù hai thanh không chạm nhau; đường dốc cần chiếu xuống nền mới đo được độ cao; thể tích phải dựa trên chiều cao vuông góc chứ không phải cạnh xiên. Sáu mạch tiếp nối là một chuỗi: phương vuông góc → pháp tuyến mặt → hình chiếu → góc giữa hai mặt → khoảng cách ngắn nhất → thể tích. Trước công thức luôn xác định đối tượng, giả thiết và hình chiếu đúng.

**Cách tự học:** Trước mỗi ví dụ hãy tự nói “vì sao dùng dấu hiệu này?”, làm Tự thử rồi mới mở phần Đối chiếu. Nếu sai, đọc D6 và quay lại điều kiện, không thử vận may bằng công thức.

### 1. B22 · Hai đường thẳng vuông góc

**Đọc hình:** Dùng hình G11 ChVII B22 cùng nguồn SGK `docs/assets/images/thpt/FIG-G11-CHVII-B22-01_R00.svg` (Git blob `5f2d23adb6f947064312d04d67ce5a5bb2d1ff48`). Hình cho thấy mối liên hệ phương–giao tuyến–đường chiếu; nét khuất chỉ biểu diễn vật thể, không chứng minh góc hoặc độ dài. Nếu không tải được hình, dựa vào tên các điểm và giả thiết được phát biểu ngay trong ví dụ.

#### 1.1. Góc giữa hai đường trong không gian là góc nhỏ giữa hai đường cùng đi qua một điểm và lần lượt song song với hai đường đã cho; vì thế góc luôn trong [0°,90°]

<!-- LESSON_ID: TOP16-M01; OUTCOME_ID: TOP16-O01; S1_ORIGINAL_OUTCOME: G11-B22-ANGLE_LINES -->

**Hình thành kiến thức:** Góc giữa hai đường trong không gian là góc nhỏ giữa hai đường cùng đi qua một điểm và lần lượt song song với hai đường đã cho; vì thế góc luôn trong [0°,90°]. Việc dời phương là để đo được ngay cả khi hai đường chéo nhau.

**Ví dụ có giải thích cách chọn phương pháp:** Trong hình hộp chữ nhật ABCD.A′B′C′D′, AB vuông góc AA′, còn AA′ song song CC′. Vì vậy góc giữa AB và CC′ là 90° dù chúng không cắt nhau; dùng hai phương thay cho hình phối cảnh.

**Tự thử trước khi xem lời giải:** Trong hình hộp chữ nhật, góc giữa AB và A′B′ bằng bao nhiêu?

<!-- ITEM_ID: THPT-TOP16-T01; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O01 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

0° vì AB và A′B′ song song.

**D6 — Nếu chưa đúng:** Đừng dùng góc tù hoặc kết luận không có góc chỉ vì hai đường không gặp nhau. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 1.2. Vuông góc giữa hai đường là quan hệ **phương**: hai đường chéo nhau vẫn vuông góc nếu hai phương tạo góc 90°

<!-- LESSON_ID: TOP16-M02; OUTCOME_ID: TOP16-O02; S1_ORIGINAL_OUTCOME: G11-B22-PERP_SKEW -->

**Hình thành kiến thức:** Vuông góc giữa hai đường là quan hệ **phương**: hai đường chéo nhau vẫn vuông góc nếu hai phương tạo góc 90°. Điều kiện cắt nhau không phải thành phần của định nghĩa này.

**Ví dụ có giải thích cách chọn phương pháp:** Cạnh AB và cạnh DD′ của hộp chữ nhật không chung điểm, không đồng phẳng; thay DD′ bằng AA′ song song qua A, suy AB⊥DD′.

**Tự thử trước khi xem lời giải:** AB và DD′ ở hộp chữ nhật có phải là hai đường vuông góc không?

<!-- ITEM_ID: THPT-TOP16-T02; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O02 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

Có. Chúng chéo nhau nhưng cùng phương với hai cạnh vuông góc AB, AA′.

**D6 — Nếu chưa đúng:** Phân biệt “vuông góc theo phương” với “hai đường cắt nhau tại góc vuông”. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 1.3. Thay một đường bằng đường song song bảo toàn góc giữa các phương

<!-- LESSON_ID: TOP16-M03; OUTCOME_ID: TOP16-O03; S1_ORIGINAL_OUTCOME: G11-B22-PARALLEL_DIRECTION -->

**Hình thành kiến thức:** Thay một đường bằng đường song song bảo toàn góc giữa các phương. Nếu a⊥b và b∥c thì a⊥c, dù a,c có thể chéo nhau.

**Ví dụ có giải thích cách chọn phương pháp:** Trong hình hộp, từ AB⊥AA′ và AA′∥DD′ suy AB⊥DD′ mà không cần kéo dài hai cạnh cho gặp nhau.

**Tự thử trước khi xem lời giải:** Nếu a⊥b và c∥b thì kết luận gì về a,c?

<!-- ITEM_ID: THPT-TOP16-T03; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O03 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

a⊥c theo tính bất biến của góc khi thay đường bằng đường song song.

**D6 — Nếu chưa đúng:** Không suy hai đường cùng vuông góc một đường thứ ba thì chúng song song trong không gian. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 1.4. Hình chiếu trên giấy có thể làm hai cạnh dường như cắt hoặc vuông góc

<!-- LESSON_ID: TOP16-M04; OUTCOME_ID: TOP16-O04; S1_ORIGINAL_OUTCOME: G11-B22-PROOF_CONTEXT -->

**Hình thành kiến thức:** Hình chiếu trên giấy có thể làm hai cạnh dường như cắt hoặc vuông góc. Bằng chứng thật phải là một góc trong mặt phẳng xác định hoặc phép chuyển phương hợp lệ.

**Ví dụ có giải thích cách chọn phương pháp:** Muốn biết thanh ngang AB có vuông góc thanh đứng CC′, chứng minh AB⊥AA′ và CC′∥AA′, rồi mới kết luận.

**Tự thử trước khi xem lời giải:** Nét vẽ có hai đoạn tạo góc 90° trên giấy, đủ kết luận hai thanh trong không gian vuông góc chưa?

<!-- ITEM_ID: THPT-TOP16-T04; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O04 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

Chưa; cần chứng cứ hình học về phương hoặc góc thật.

**D6 — Nếu chưa đúng:** Khi lời giải viết “nhìn hình thấy”, hãy thay bằng quan hệ song song/vuông góc có giả thiết. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>


### 2. B23 · Đường thẳng vuông góc mặt phẳng

**Đọc hình:** Dùng hình G11 ChVII B23 cùng nguồn SGK `docs/assets/images/thpt/FIG-G11-CHVII-B23-01_R00.svg` (Git blob `b53b65704f9830e1c97b533bac0e79a0b56761b6`). Hình cho thấy mối liên hệ phương–giao tuyến–đường chiếu; nét khuất chỉ biểu diễn vật thể, không chứng minh góc hoặc độ dài. Nếu không tải được hình, dựa vào tên các điểm và giả thiết được phát biểu ngay trong ví dụ.

#### 2.1. Đường d vuông góc mặt phẳng (P) nghĩa là d vuông góc **mọi đường thẳng** nằm trong (P)

<!-- LESSON_ID: TOP16-M05; OUTCOME_ID: TOP16-O05; S1_ORIGINAL_OUTCOME: G11-B23-PERP_PLANE_DEF -->

**Hình thành kiến thức:** Đường d vuông góc mặt phẳng (P) nghĩa là d vuông góc **mọi đường thẳng** nằm trong (P). Chứng minh vuông góc một đường là chưa đủ.

**Ví dụ có giải thích cách chọn phương pháp:** Cột thẳng đứng qua chân H vuông góc mặt sàn: vì mọi hướng trong sàn đều nằm ngang nên cột vuông góc mọi đường trong sàn.

**Tự thử trước khi xem lời giải:** d vuông góc chỉ một đường a thuộc (P). Đủ kết luận d⊥(P) không?

<!-- ITEM_ID: THPT-TOP16-T05; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O05 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

Không; cần thêm dữ kiện, thường là d vuông góc hai đường cắt nhau trong (P).

**D6 — Nếu chưa đúng:** Một đường không đại diện cho tất cả các phương trong một mặt phẳng. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 2.2. Hai đường a,b **cắt nhau** trong (P) tạo hai hướng độc lập

<!-- LESSON_ID: TOP16-M06; OUTCOME_ID: TOP16-O06; S1_ORIGINAL_OUTCOME: G11-B23-TWO_INTERSECT -->

**Hình thành kiến thức:** Hai đường a,b **cắt nhau** trong (P) tạo hai hướng độc lập. Nếu d⊥a và d⊥b thì d vuông góc cả mặt phẳng; điều kiện cắt nhau không thể bỏ.

**Ví dụ có giải thích cách chọn phương pháp:** Ở đáy hình chữ nhật ABCD, AB và AD cắt tại A; cột AA′ vuông góc hai cạnh này nên AA′⊥(ABCD).

**Tự thử trước khi xem lời giải:** Nếu a∥b trong (P), d⊥a và d⊥b đã đủ d⊥(P) chưa?

<!-- ITEM_ID: THPT-TOP16-T06; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O06 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

Chưa, vì hai phương song song chỉ kiểm tra một hướng.

**D6 — Nếu chưa đúng:** Dừng lại khi hai đường kiểm tra song song, trùng nhau hoặc không cùng mặt phẳng. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 2.3. Vuông góc mặt phẳng được bảo toàn khi thay đường bởi đường song song hoặc thay mặt phẳng bởi mặt phẳng song song phân biệt

<!-- LESSON_ID: TOP16-M07; OUTCOME_ID: TOP16-O07; S1_ORIGINAL_OUTCOME: G11-B23-PARALLEL_TRANSFER -->

**Hình thành kiến thức:** Vuông góc mặt phẳng được bảo toàn khi thay đường bởi đường song song hoặc thay mặt phẳng bởi mặt phẳng song song phân biệt. Cần xác nhận đúng các quan hệ song song.

**Ví dụ có giải thích cách chọn phương pháp:** AA′⊥(ABCD) trong hộp chữ nhật; vì CC′∥AA′ nên CC′⊥(ABCD).

**Tự thử trước khi xem lời giải:** Nếu a⊥(P) và b∥a thì b có vuông góc (P) không?

<!-- ITEM_ID: THPT-TOP16-T07; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O07 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

Có; mọi đường của (P) vẫn vuông góc phương b.

**D6 — Nếu chưa đúng:** Không lấy việc hai mặt phẳng nhìn cùng hướng trên giấy làm chứng cứ song song. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 2.4. Qua mỗi điểm có một đường duy nhất vuông góc mặt phẳng cho trước

<!-- LESSON_ID: TOP16-M08; OUTCOME_ID: TOP16-O08; S1_ORIGINAL_OUTCOME: G11-B23-PLANE_PROPERTY -->

**Hình thành kiến thức:** Qua mỗi điểm có một đường duy nhất vuông góc mặt phẳng cho trước. Hai đường cùng vuông góc một mặt phẳng thì song song hoặc trùng nhau.

**Ví dụ có giải thích cách chọn phương pháp:** Hai cột AA′ và BB′ của lăng trụ đứng cùng vuông góc nền nên chúng song song, dù chân ở hai điểm khác nhau.

**Tự thử trước khi xem lời giải:** Qua điểm M có thể có hai đường phân biệt cùng vuông góc (P) không?

<!-- ITEM_ID: THPT-TOP16-T08; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O08 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

Không; pháp tuyến qua M xác định duy nhất.

**D6 — Nếu chưa đúng:** Không lẫn tính duy nhất theo phương pháp tuyến với tính duy nhất mọi đường qua M. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 2.5. Kiểm tra cột vuông góc nền cần hai hướng không song song trên nền, tương ứng kiểm tra hai mặt đứng giao nhau; đo theo một cạnh nền chỉ xác định một điều kiện

<!-- LESSON_ID: TOP16-M09; OUTCOME_ID: TOP16-O09; S1_ORIGINAL_OUTCOME: G11-B23-PRACTICAL_POST -->

**Hình thành kiến thức:** Kiểm tra cột vuông góc nền cần hai hướng không song song trên nền, tương ứng kiểm tra hai mặt đứng giao nhau; đo theo một cạnh nền chỉ xác định một điều kiện.

**Ví dụ có giải thích cách chọn phương pháp:** Lấy hai thước vuông đặt theo hai đường sàn cắt nhau. Cột vuông góc cả hai thì vuông góc mặt sàn.

**Tự thử trước khi xem lời giải:** Đo cột vuông góc cạnh AB của nền có đủ khẳng định cột thẳng đứng?

<!-- ITEM_ID: THPT-TOP16-T09; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O09 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

Chưa; cần thêm một đường cắt AB trong nền (ví dụ AD).

**D6 — Nếu chưa đúng:** Không bỏ điều kiện hai phương kiểm tra phải độc lập. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>


### 3. B24 · Phép chiếu vuông góc và góc đường–mặt

**Đọc hình:** Dùng hình G11 ChVII B24 cùng nguồn SGK `docs/assets/images/thpt/FIG-G11-CHVII-B24-01_R00.svg` (Git blob `c98d7df30b87c339336636e00322816a4099681b`). Hình cho thấy mối liên hệ phương–giao tuyến–đường chiếu; nét khuất chỉ biểu diễn vật thể, không chứng minh góc hoặc độ dài. Nếu không tải được hình, dựa vào tên các điểm và giả thiết được phát biểu ngay trong ví dụ.

**Khám phá tương tác:** Mô hình `SLM-TOP16-RAMP-ANGLE-R00` (nguồn HTML đi kèm, chỉ là PUBLIC_DISCOVERY_NO_MASTERY) điều khiển độ cao và khoảng ngang của tam giác vuông. Dự đoán góc/độ dài trước khi kéo, quan sát hình thay đổi rồi kiểm bằng Pitago và sin/tan. Mô hình không thay chứng minh định lí ba đường vuông góc.

#### 3.1. Hình chiếu vuông góc H của A trên (P) là chân duy nhất của AH⊥(P)

<!-- LESSON_ID: TOP16-M10; OUTCOME_ID: TOP16-O10; S1_ORIGINAL_OUTCOME: G11-B24-POINT_PROJECTION -->

**Hình thành kiến thức:** Hình chiếu vuông góc H của A trên (P) là chân duy nhất của AH⊥(P). Độ dài AH là khoảng cách ngắn nhất từ A đến (P).

**Ví dụ có giải thích cách chọn phương pháp:** Nếu A nằm trên cột cao 4 m và H là chân cột trên nền, hình chiếu A xuống nền là H, khoảng cách bằng 4 m.

**Tự thử trước khi xem lời giải:** Nếu A thuộc (P), hình chiếu vuông góc của A trên (P) ở đâu?

<!-- ITEM_ID: THPT-TOP16-T10; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O10 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

Chính là A; khoảng cách A đến (P) bằng 0.

**D6 — Nếu chưa đúng:** Không lấy điểm gần nhất theo hình phối cảnh thay cho chân vuông góc. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 3.2. Muốn chiếu một đường, chiếu hai điểm phân biệt của nó rồi nối ảnh; nếu đường theo phương vuông góc mặt phẳng thì toàn bộ ảnh chỉ là **một điểm**

<!-- LESSON_ID: TOP16-M11; OUTCOME_ID: TOP16-O11; S1_ORIGINAL_OUTCOME: G11-B24-LINE_PROJECTION -->

**Hình thành kiến thức:** Muốn chiếu một đường, chiếu hai điểm phân biệt của nó rồi nối ảnh; nếu đường theo phương vuông góc mặt phẳng thì toàn bộ ảnh chỉ là **một điểm**.

**Ví dụ có giải thích cách chọn phương pháp:** Trong lăng trụ đứng, cạnh AA′ vuông góc đáy nên hình chiếu của cạnh trên nền là điểm A; cạnh A′B′ có ảnh là AB.

**Tự thử trước khi xem lời giải:** Đường d⊥(P). Ảnh vuông góc của d lên (P) là gì?

<!-- ITEM_ID: THPT-TOP16-T11; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O11 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

Một điểm: chân giao d∩(P).

**D6 — Nếu chưa đúng:** Luôn xét xem hai đầu mút có chiếu trùng nhau không trước khi nối ảnh. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 3.3. Định lí ba đường vuông góc liên hệ đường xiên, hình chiếu vuông góc của nó và đường nằm trong mặt phẳng: đường của mặt phẳng vuông góc hình chiếu thì cũng vuông góc đường xiên

<!-- LESSON_ID: TOP16-M12; OUTCOME_ID: TOP16-O12; S1_ORIGINAL_OUTCOME: G11-B24-THREE_PERP -->

**Hình thành kiến thức:** Định lí ba đường vuông góc liên hệ đường xiên, hình chiếu vuông góc của nó và đường nằm trong mặt phẳng: đường của mặt phẳng vuông góc hình chiếu thì cũng vuông góc đường xiên.

**Ví dụ có giải thích cách chọn phương pháp:** AH⊥(P), B,H∈(P) và c⊂(P) đi qua H với c⊥BH. Vì vectơ AB gồm thành phần AH thẳng đứng và HB trong (P), c vuông góc cả hai nên c⊥AB.

**Tự thử trước khi xem lời giải:** AH⊥(P), c⊂(P), c⊥BH. Có thể kết luận c⊥AB không (B∈(P))?

<!-- ITEM_ID: THPT-TOP16-T12; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O12 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

Có: BH là hình chiếu của AB lên (P); dùng định lí ba đường vuông góc.

**D6 — Nếu chưa đúng:** Trước khi dùng định lí, xác định chân H và đảm bảo BH thật sự là hình chiếu AB. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 3.4. Góc giữa đường xiên AB và (P) là góc giữa AB và hình chiếu BH của nó, trong [0°,90°]

<!-- LESSON_ID: TOP16-M13; OUTCOME_ID: TOP16-O13; S1_ORIGINAL_OUTCOME: G11-B24-LINE_PLANE_ANGLE -->

**Hình thành kiến thức:** Góc giữa đường xiên AB và (P) là góc giữa AB và hình chiếu BH của nó, trong [0°,90°]. Nếu AB⊥(P) thì góc 90° dù hình chiếu thu thành điểm.

**Ví dụ có giải thích cách chọn phương pháp:** Tam giác ABH vuông H có AH=3, BH=4, AB=5 nên sin(góc giữa AB và nền)=3/5; góc nhọn là arcsin(3/5).

**Tự thử trước khi xem lời giải:** Đường nằm trong (P) tạo góc bao nhiêu với (P)?

<!-- ITEM_ID: THPT-TOP16-T13; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O13 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

0°. Khi đường vuông góc (P), góc 90°.

**D6 — Nếu chưa đúng:** Không lấy góc giữa đường xiên và pháp tuyến làm góc đường–mặt; đó là góc phụ. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 3.5. Một đường dốc tạo tam giác vuông với mặt nền: chiều cao là cạnh đối góc dốc, khoảng ngang là cạnh kề, và độ dài đường dốc là cạnh huyền

<!-- LESSON_ID: TOP16-M14; OUTCOME_ID: TOP16-O14; S1_ORIGINAL_OUTCOME: G11-B24-ANGLE_APPLICATION -->

**Hình thành kiến thức:** Một đường dốc tạo tam giác vuông với mặt nền: chiều cao là cạnh đối góc dốc, khoảng ngang là cạnh kề, và độ dài đường dốc là cạnh huyền.

**Ví dụ có giải thích cách chọn phương pháp:** Dốc lên 3 m trên đoạn ngang 4 m có chiều dài 5 m, tanθ=3/4. Nếu đo dốc 5 m mà coi đó là khoảng ngang thì tính góc sai.

**Tự thử trước khi xem lời giải:** Dốc cao 3 m, ngang 4 m: độ dài đoạn dốc?

<!-- ITEM_ID: THPT-TOP16-T14; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O14 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

5 m theo định lí Pitago, không phải 7 m.

**D6 — Nếu chưa đúng:** Chỉ áp dụng tỉ số lượng giác cho tam giác vuông sau khi dựng hình chiếu đúng. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>


### 4. B25 · Hai mặt phẳng vuông góc và hình khối đặc biệt

**Đọc hình:** Dùng hình G11 ChVII B25 cùng nguồn SGK `docs/assets/images/thpt/FIG-G11-CHVII-B25-01_R00.svg` (Git blob `3f6112a7b12f1829ee2249b979d45f1f5370fc66`). Hình cho thấy mối liên hệ phương–giao tuyến–đường chiếu; nét khuất chỉ biểu diễn vật thể, không chứng minh góc hoặc độ dài. Nếu không tải được hình, dựa vào tên các điểm và giả thiết được phát biểu ngay trong ví dụ.

#### 4.1. Góc giữa hai **mặt phẳng** được đo bằng góc nhỏ của hai đường lần lượt nằm trong hai mặt và cùng vuông góc giao tuyến; kết quả thuộc [0°,90°] khi xét mặt phẳng không định hướng

<!-- LESSON_ID: TOP16-M15; OUTCOME_ID: TOP16-O15; S1_ORIGINAL_OUTCOME: G11-B25-PLANE_ANGLE -->

**Hình thành kiến thức:** Góc giữa hai **mặt phẳng** được đo bằng góc nhỏ của hai đường lần lượt nằm trong hai mặt và cùng vuông góc giao tuyến; kết quả thuộc [0°,90°] khi xét mặt phẳng không định hướng.

**Ví dụ có giải thích cách chọn phương pháp:** Tường thẳng đứng và nền ngang tạo góc 90°. Chọn một đường trong tường vuông góc chân tường và một đường trong nền vuông góc chân tường, rồi đo góc của chúng.

**Tự thử trước khi xem lời giải:** Hai mặt phẳng song song tạo góc giữa hai mặt bằng bao nhiêu?

<!-- ITEM_ID: THPT-TOP16-T15; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O15 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

0° theo quy ước góc giữa các mặt phẳng.

**D6 — Nếu chưa đúng:** Không đồng nhất góc giữa hai mặt với bất kì góc của hai đường tùy chọn ở hai mặt. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 4.2. Góc nhị diện gắn với **hai nửa mặt phẳng** có chung bờ: góc phẳng của nhị diện có thể lớn hơn 90°

<!-- LESSON_ID: TOP16-M16; OUTCOME_ID: TOP16-O16; S1_ORIGINAL_OUTCOME: G11-B25-DIHEDRAL -->

**Hình thành kiến thức:** Góc nhị diện gắn với **hai nửa mặt phẳng** có chung bờ: góc phẳng của nhị diện có thể lớn hơn 90°. Góc giữa hai mặt phẳng không định hướng lấy góc nhỏ.

**Ví dụ có giải thích cách chọn phương pháp:** Hai nửa mặt phẳng tạo nhị diện 120°; hai mặt phẳng chứa chúng chỉ tạo góc nhỏ 60°. Không được dùng thay nhau.

**Tự thử trước khi xem lời giải:** Nhị diện 120° cho góc nhỏ giữa hai mặt phẳng chứa nó bằng bao nhiêu?

<!-- ITEM_ID: THPT-TOP16-T16; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O16 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

60° = 180°−120°.

**D6 — Nếu chưa đúng:** Phải nêu đang nói nhị diện hay góc giữa hai mặt phẳng; khác nhau ở định hướng. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 4.3. Muốn chứng minh (P)⊥(Q), tìm **một đường** nằm trong (P) và vuông góc với (Q)

<!-- LESSON_ID: TOP16-M17; OUTCOME_ID: TOP16-O17; S1_ORIGINAL_OUTCOME: G11-B25-PERP_PLANES -->

**Hình thành kiến thức:** Muốn chứng minh (P)⊥(Q), tìm **một đường** nằm trong (P) và vuông góc với (Q). Không chỉ chứng minh hai đường thuộc hai mặt vuông góc.

**Ví dụ có giải thích cách chọn phương pháp:** Mặt tường chứa cột d vuông góc nền; do d nằm trong mặt tường và d⊥mặt nền nên mặt tường vuông góc nền.

**Tự thử trước khi xem lời giải:** d⊂(P), d⊥(Q). Quan hệ hai mặt (P),(Q)?

<!-- ITEM_ID: THPT-TOP16-T17; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O17 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

(P)⊥(Q), theo dấu hiệu một đường trong mặt vuông góc mặt kia.

**D6 — Nếu chưa đúng:** Chỉ “có hai đường vuông góc” chưa đủ nếu không có đường vuông góc toàn bộ mặt. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 4.4. Khi hai mặt (P)⊥(Q) cắt theo d, đường a **trong (P)** và **vuông góc d** sẽ vuông góc (Q), theo định lí về hai mặt vuông góc

<!-- LESSON_ID: TOP16-M18; OUTCOME_ID: TOP16-O18; S1_ORIGINAL_OUTCOME: G11-B25-PERP_PLANE_RULE -->

**Hình thành kiến thức:** Khi hai mặt (P)⊥(Q) cắt theo d, đường a **trong (P)** và **vuông góc d** sẽ vuông góc (Q), theo định lí về hai mặt vuông góc.

**Ví dụ có giải thích cách chọn phương pháp:** Mặt tường (P) vuông góc nền (Q) theo chân tường d. Đường đứng a trong tường đi qua chân và vuông góc d sẽ vuông góc nền.

**Tự thử trước khi xem lời giải:** (P)⊥(Q) theo d. a⊂(P), a⊥d. Có a⊥(Q) không?

<!-- ITEM_ID: THPT-TOP16-T18; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O18 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

Có, theo định lí hai mặt phẳng vuông góc. a phải nằm trong (P) và vuông góc giao tuyến d.

**D6 — Nếu chưa đúng:** Nhớ cả điều kiện a nằm trong mặt và a vuông góc giao tuyến. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 4.5. Lăng trụ đứng có cạnh bên vuông góc hai đáy; chiều cao chính là cạnh bên

<!-- LESSON_ID: TOP16-M19; OUTCOME_ID: TOP16-O19; S1_ORIGINAL_OUTCOME: G11-B25-RIGHT_PRISM -->

**Hình thành kiến thức:** Lăng trụ đứng có cạnh bên vuông góc hai đáy; chiều cao chính là cạnh bên. Lăng trụ đều có đáy đa giác đều và là lăng trụ đứng. Hộp chữ nhật/lập phương là các trường hợp đặc biệt.

**Ví dụ có giải thích cách chọn phương pháp:** Lăng trụ đứng đáy diện tích 12 cm², cạnh bên 5 cm thì h=5 cm và thể tích 60 cm³; lăng trụ xiên không được lấy cạnh bên làm chiều cao.

**Tự thử trước khi xem lời giải:** Lăng trụ đứng có cạnh bên 7 cm, chiều cao bao nhiêu?

<!-- ITEM_ID: THPT-TOP16-T19; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O19 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

7 cm, vì cạnh bên vuông góc mặt đáy.

**D6 — Nếu chưa đúng:** Không dùng chiều dài cạnh bên của lăng trụ xiên làm chiều cao. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 4.6. Chóp đều có đáy là đa giác đều và chân đường cao là tâm của đáy, nên các cạnh bên bằng nhau

<!-- LESSON_ID: TOP16-M20; OUTCOME_ID: TOP16-O20; S1_ORIGINAL_OUTCOME: G11-B25-REGULAR_PYRAMID -->

**Hình thành kiến thức:** Chóp đều có đáy là đa giác đều và chân đường cao là tâm của đáy, nên các cạnh bên bằng nhau. Độ dài cạnh bên, chiều cao và đường cao mặt bên là ba khái niệm khác.

**Ví dụ có giải thích cách chọn phương pháp:** Chóp tứ giác đều đáy cạnh 6, chiều cao 4; từ đỉnh đến trung điểm một cạnh đáy có độ dài √(4²+3²)=5, khác chiều cao.

**Tự thử trước khi xem lời giải:** Chóp đều đáy vuông cạnh 6, h=4. Đường cao của mặt bên qua trung điểm cạnh đáy dài bao nhiêu?

<!-- ITEM_ID: THPT-TOP16-T20; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O20 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

5, do tam giác vuông có hai cạnh 4 và 3.

**D6 — Nếu chưa đúng:** Không lấy cạnh bên hay đường cao mặt bên làm chiều cao vuông góc của chóp. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 4.7. Chóp cụt đều thu được khi cắt chóp đều bởi mặt phẳng song song đáy; hai đáy là đa giác đều đồng dạng, các mặt bên là hình thang cân

<!-- LESSON_ID: TOP16-M21; OUTCOME_ID: TOP16-O21; S1_ORIGINAL_OUTCOME: G11-B25-REGULAR_FRUSTUM -->

**Hình thành kiến thức:** Chóp cụt đều thu được khi cắt chóp đều bởi mặt phẳng song song đáy; hai đáy là đa giác đều đồng dạng, các mặt bên là hình thang cân. Tỉ số diện tích bằng bình phương tỉ số cạnh.

**Ví dụ có giải thích cách chọn phương pháp:** Hai đáy vuông có cạnh 6 và 3 nên diện tích lần lượt 36 và 9, tỉ số diện tích 4:1 chứ không phải 2:1.

**Tự thử trước khi xem lời giải:** Hai đáy hình vuông cạnh 6 và 3 có tỉ số diện tích đáy lớn : đáy nhỏ?

<!-- ITEM_ID: THPT-TOP16-T21; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O21 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

36:9 = 4:1.

**D6 — Nếu chưa đúng:** Không nhân tỉ số cạnh trực tiếp để suy tỉ số diện tích. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>


### 5. B26 · Khoảng cách trong không gian

**Đọc hình:** Dùng hình G11 ChVII B26 cùng nguồn SGK `docs/assets/images/thpt/FIG-G11-CHVII-B26-01_R00.svg` (Git blob `26fb51f3af65ba7d86a2907f0eaff808d2d87532`). Hình cho thấy mối liên hệ phương–giao tuyến–đường chiếu; nét khuất chỉ biểu diễn vật thể, không chứng minh góc hoặc độ dài. Nếu không tải được hình, dựa vào tên các điểm và giả thiết được phát biểu ngay trong ví dụ.

#### 5.1. Khoảng cách từ điểm A đến đường d là độ dài AH với H là chân vuông góc trên d; mọi đoạn AX đến X∈d đều dài không nhỏ hơn AH

<!-- LESSON_ID: TOP16-M22; OUTCOME_ID: TOP16-O22; S1_ORIGINAL_OUTCOME: G11-B26-POINT_LINE -->

**Hình thành kiến thức:** Khoảng cách từ điểm A đến đường d là độ dài AH với H là chân vuông góc trên d; mọi đoạn AX đến X∈d đều dài không nhỏ hơn AH.

**Ví dụ có giải thích cách chọn phương pháp:** Điểm A nằm cách đường d 3 cm theo phương vuông góc; lấy X khác H thì tam giác AHX vuông H cho AX²=AH²+HX²>AH².

**Tự thử trước khi xem lời giải:** AH⊥d, AH=3 cm. d(A,d) bằng bao nhiêu?

<!-- ITEM_ID: THPT-TOP16-T22; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O22 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

3 cm. Đoạn xiên AX không ngắn hơn AH.

**D6 — Nếu chưa đúng:** Muốn chứng minh ngắn nhất phải xác định chân vuông góc. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 5.2. Khoảng cách từ A đến (P) là độ dài AH của đường vuông góc mặt (P) tại H, và bằng 0 nếu A thuộc (P)

<!-- LESSON_ID: TOP16-M23; OUTCOME_ID: TOP16-O23; S1_ORIGINAL_OUTCOME: G11-B26-POINT_PLANE -->

**Hình thành kiến thức:** Khoảng cách từ A đến (P) là độ dài AH của đường vuông góc mặt (P) tại H, và bằng 0 nếu A thuộc (P).

**Ví dụ có giải thích cách chọn phương pháp:** Một điểm cao 4 m trên nền phẳng, hình chiếu tại H; mọi đường xiên đến điểm khác của nền dài hơn 4 m.

**Tự thử trước khi xem lời giải:** A∈(P). d(A,(P)) bằng bao nhiêu?

<!-- ITEM_ID: THPT-TOP16-T23; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O23 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

0, không cần dựng đoạn khác.

**D6 — Nếu chưa đúng:** Không coi cạnh chéo là khoảng cách vuông góc. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 5.3. Với d∥(P), mọi điểm A của d có cùng khoảng cách đến (P), vì hình chiếu của hai điểm trên d nằm trên một đường song song với d trong (P)

<!-- LESSON_ID: TOP16-M24; OUTCOME_ID: TOP16-O24; S1_ORIGINAL_OUTCOME: G11-B26-PARALLEL_LINE_PLANE -->

**Hình thành kiến thức:** Với d∥(P), mọi điểm A của d có cùng khoảng cách đến (P), vì hình chiếu của hai điểm trên d nằm trên một đường song song với d trong (P).

**Ví dụ có giải thích cách chọn phương pháp:** Thanh ngang song song nền và cao 3 m: mọi điểm của thanh có khoảng cách đến nền là 3 m.

**Tự thử trước khi xem lời giải:** Đường d∥(P); hai điểm A,B thuộc d. Có d(A,(P))=d(B,(P)) không?

<!-- ITEM_ID: THPT-TOP16-T24; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O24 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

Có, vì khoảng cách đường song song mặt phẳng không đổi theo điểm.

**D6 — Nếu chưa đúng:** Điều kiện d song song mặt phẳng phải được kiểm tra trước khi lấy một điểm đại diện. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 5.4. Hai mặt phẳng song song có khoảng cách không đổi, đo theo một đoạn vuông góc chung, không phải đoạn nối xiên bất kì

<!-- LESSON_ID: TOP16-M25; OUTCOME_ID: TOP16-O25; S1_ORIGINAL_OUTCOME: G11-B26-PARALLEL_PLANES -->

**Hình thành kiến thức:** Hai mặt phẳng song song có khoảng cách không đổi, đo theo một đoạn vuông góc chung, không phải đoạn nối xiên bất kì.

**Ví dụ có giải thích cách chọn phương pháp:** Hai tầng sàn song song, điểm A trên tầng trên chiếu vuông góc tới H ở tầng dưới, AH=4 m; khoảng cách hai sàn là 4 m.

**Tự thử trước khi xem lời giải:** Hai mặt song song cách nhau theo pháp tuyến 4 m. Khoảng cách hai mặt?

<!-- ITEM_ID: THPT-TOP16-T25; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O25 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

4 m, là độ dài đoạn vuông góc chung.

**D6 — Nếu chưa đúng:** Không lấy đoạn nối hai điểm bất kì giữa các mặt làm khoảng cách. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 5.5. Với hai đường chéo nhau, khoảng cách là độ dài đoạn vuông góc chung có hai đầu mút trên từng đường, không phải khoảng cách của hai điểm tùy ý

<!-- LESSON_ID: TOP16-M26; OUTCOME_ID: TOP16-O26; S1_ORIGINAL_OUTCOME: G11-B26-SKEW_COMMON_PERP -->

**Hình thành kiến thức:** Với hai đường chéo nhau, khoảng cách là độ dài đoạn vuông góc chung có hai đầu mút trên từng đường, không phải khoảng cách của hai điểm tùy ý.

**Ví dụ có giải thích cách chọn phương pháp:** Trong lập phương cạnh a, AB nằm ở đáy theo một phương, DD′ là cạnh đứng; AD có A∈AB, D∈DD′ và AD⊥AB, AD⊥DD′, nên AD là đoạn vuông góc chung, khoảng cách bằng a.

**Tự thử trước khi xem lời giải:** Trong lập phương cạnh 5, khoảng cách giữa AB và DD′ là bao nhiêu?

<!-- ITEM_ID: THPT-TOP16-T26; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O26 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

5, bằng AD là đoạn vuông góc chung; AB và DD′ chéo nhau.

**D6 — Nếu chưa đúng:** Kiểm tra cả hai đầu mút thuộc hai đường và vuông góc cả hai phương. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 5.6. Chiều cao khối đa diện là khoảng cách vuông góc giữa đỉnh hoặc mặt đáy, không nhất thiết là cạnh bên hay đường sinh mặt bên

<!-- LESSON_ID: TOP16-M27; OUTCOME_ID: TOP16-O27; S1_ORIGINAL_OUTCOME: G11-B26-HEIGHT_APPLICATION -->

**Hình thành kiến thức:** Chiều cao khối đa diện là khoảng cách vuông góc giữa đỉnh hoặc mặt đáy, không nhất thiết là cạnh bên hay đường sinh mặt bên.

**Ví dụ có giải thích cách chọn phương pháp:** Chóp vuông có chân cao ở tâm O, SO=4 và đoạn từ đỉnh đến trung điểm cạnh đáy là 5: thể tích dùng h=4, không dùng 5.

**Tự thử trước khi xem lời giải:** Chóp có chiều cao 4 và cạnh bên 5. Giá trị h trong V=(1/3)Sđáy h?

<!-- ITEM_ID: THPT-TOP16-T27; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O27 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

4, vì chiều cao là đoạn vuông góc.

**D6 — Nếu chưa đúng:** Đừng dùng đường cao mặt bên thay cho đường cao vuông góc với đáy. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>


### 6. B27 · Thể tích và vận dụng liên hoàn

**Đọc hình:** Dùng hình G11 ChVII B27 cùng nguồn SGK `docs/assets/images/thpt/FIG-G11-CHVII-B27-01_R00.svg` (Git blob `a7bec7a20295d09ca6f32aae0e8910cef7bed9dc`). Hình cho thấy mối liên hệ phương–giao tuyến–đường chiếu; nét khuất chỉ biểu diễn vật thể, không chứng minh góc hoặc độ dài. Nếu không tải được hình, dựa vào tên các điểm và giả thiết được phát biểu ngay trong ví dụ.

#### 6.1. Thể tích lăng trụ bằng diện tích đáy nhân chiều cao vuông góc V=Sđáy·h

<!-- LESSON_ID: TOP16-M28; OUTCOME_ID: TOP16-O28; S1_ORIGINAL_OUTCOME: G11-B27-PRISM_VOLUME -->

**Hình thành kiến thức:** Thể tích lăng trụ bằng diện tích đáy nhân chiều cao vuông góc V=Sđáy·h. Hộp có các lát cắt bằng nhau theo chiều cao nên thể tích tỉ lệ tuyến tính với h.

**Ví dụ có giải thích cách chọn phương pháp:** Lăng trụ đáy có diện tích 12 cm², chiều cao 5 cm: V=12×5=60 cm³, không phân biệt đứng hay xiên nếu đã cho đúng chiều cao vuông góc.

**Tự thử trước khi xem lời giải:** Lăng trụ Sđáy=12 cm², h=5 cm; thể tích?

<!-- ITEM_ID: THPT-TOP16-T28; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O28 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

60 cm³, vì V=Sđáyh.

**D6 — Nếu chưa đúng:** Đơn vị thể tích phải là đơn vị khối, và h phải vuông góc đáy. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 6.2. Chóp cùng đáy và chiều cao với lăng trụ tương ứng chỉ có thể tích bằng một phần ba lăng trụ: V=(1/3)Sđáy·h

<!-- LESSON_ID: TOP16-M29; OUTCOME_ID: TOP16-O29; S1_ORIGINAL_OUTCOME: G11-B27-PYRAMID_VOLUME -->

**Hình thành kiến thức:** Chóp cùng đáy và chiều cao với lăng trụ tương ứng chỉ có thể tích bằng một phần ba lăng trụ: V=(1/3)Sđáy·h. Hệ số 1/3 không xuất hiện với lăng trụ.

**Ví dụ có giải thích cách chọn phương pháp:** Chóp có đáy 12 cm² và cao 5 cm: V=(1/3)×12×5=20 cm³, bằng một phần ba lăng trụ cùng đáy/cao.

**Tự thử trước khi xem lời giải:** Chóp Sđáy=12 cm², h=5 cm; thể tích?

<!-- ITEM_ID: THPT-TOP16-T29; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O29 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

20 cm³; phải có hệ số 1/3.

**D6 — Nếu chưa đúng:** Phân biệt dạng chóp với lăng trụ trước khi chọn công thức. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 6.3. Hộp chữ nhật là lăng trụ đứng có đáy chữ nhật, nên V=abc; lập phương cạnh a có V=a³

<!-- LESSON_ID: TOP16-M30; OUTCOME_ID: TOP16-O30; S1_ORIGINAL_OUTCOME: G11-B27-BOX_VOLUME -->

**Hình thành kiến thức:** Hộp chữ nhật là lăng trụ đứng có đáy chữ nhật, nên V=abc; lập phương cạnh a có V=a³. Đơn vị diện tích đáy nhân độ dài thành đơn vị khối.

**Ví dụ có giải thích cách chọn phương pháp:** Hộp 2 cm×3 cm×4 cm có thể tích 24 cm³, không phải 24 cm².

**Tự thử trước khi xem lời giải:** Hộp có kích thước 2,3,4 cm, thể tích?

<!-- ITEM_ID: THPT-TOP16-T30; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O30 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

24 cm³.

**D6 — Nếu chưa đúng:** Không nhầm diện tích toàn phần với thể tích và không bỏ đơn vị khối. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 6.4. Với chóp cụt có hai đáy song song diện tích S,S′ và chiều cao h, V=(h/3)(S+S′+√(SS′))

<!-- LESSON_ID: TOP16-M31; OUTCOME_ID: TOP16-O31; S1_ORIGINAL_OUTCOME: G11-B27-FRUSTUM_VOLUME -->

**Hình thành kiến thức:** Với chóp cụt có hai đáy song song diện tích S,S′ và chiều cao h, V=(h/3)(S+S′+√(SS′)). Công thức có cả h và trung bình nhân diện tích, không phải S·h đơn giản.

**Ví dụ có giải thích cách chọn phương pháp:** S=16,S′=4,h=6 thì √(SS′)=8, suy V=(6/3)(16+4+8)=56 đơn vị thể tích.

**Tự thử trước khi xem lời giải:** Chóp cụt S=16,S′=4,h=6. Giá trị √(SS′)?

<!-- ITEM_ID: THPT-TOP16-T31; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O31 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

8, vì √(16×4)=8.

**D6 — Nếu chưa đúng:** Nếu hai đáy bằng nhau thì công thức trở về lăng trụ V=Sh; nếu đáy nhỏ thu về 0 thì về chóp V=Sh/3. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 6.5. Trong bài toán ứng dụng, phải phân loại khối, đổi đơn vị, xác định chiều cao **vuông góc**, rồi mới thay số; kết quả thể tích không thể là mét vuông

<!-- LESSON_ID: TOP16-M32; OUTCOME_ID: TOP16-O32; S1_ORIGINAL_OUTCOME: G11-B27-VOLUME_APPLICATION -->

**Hình thành kiến thức:** Trong bài toán ứng dụng, phải phân loại khối, đổi đơn vị, xác định chiều cao **vuông góc**, rồi mới thay số; kết quả thể tích không thể là mét vuông.

**Ví dụ có giải thích cách chọn phương pháp:** Lăng trụ có thiết diện tam giác vuông hai cạnh góc vuông 3 m,4 m, chiều dài vuông góc thiết diện 10 m: diện tích đáy=6 m², thể tích=60 m³.

**Tự thử trước khi xem lời giải:** Khối lăng trụ có diện tích đáy 6 m², cao 10 m. Thể tích?

<!-- ITEM_ID: THPT-TOP16-T32; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O32 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

60 m³, không phải 60 m².

**D6 — Nếu chưa đúng:** Không dùng cạnh xiên hoặc quên nhân hệ số 1/2 cho diện tích tam giác vuông. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

#### 6.6. Bài tổng hợp đi ngược từ thể tích: cần xác định đáy và chiều cao, muốn tìm chiều cao phải dựng hình chiếu vuông góc, muốn chứng minh vuông góc mặt cần hai đường cắt nhau trong mặt

<!-- LESSON_ID: TOP16-M33; OUTCOME_ID: TOP16-O33; S1_ORIGINAL_OUTCOME: G11-CHVII-INTEGRATED -->

**Hình thành kiến thức:** Bài tổng hợp đi ngược từ thể tích: cần xác định đáy và chiều cao, muốn tìm chiều cao phải dựng hình chiếu vuông góc, muốn chứng minh vuông góc mặt cần hai đường cắt nhau trong mặt. Mỗi mũi suy luận có điều kiện riêng.

**Ví dụ có giải thích cách chọn phương pháp:** Chóp tứ giác đều đáy vuông cạnh 6, cao 4: SO⊥(ABCD), OA và OB cắt trong đáy; V=(1/3)·36·4=48. Nếu biết đường cao mặt bên 5, dùng Pitago để suy SO=4 trước.

**Tự thử trước khi xem lời giải:** Chóp đều đáy vuông cạnh 6 và đường cao mặt bên 5. Chiều cao khối?

<!-- ITEM_ID: THPT-TOP16-T33; ROLE: TOPIC_FIRST_TRY; PRIMARY_OUTCOME: TOP16-O33 -->

<details><summary>Tự mở Đối chiếu và sửa lỗi</summary>

4, từ tam giác vuông nối đỉnh, tâm đáy, trung điểm cạnh: 5²−3²=4².

**D6 — Nếu chưa đúng:** Khi kết quả sai, dò ngược: loại khối → đáy → đường vuông góc → h → công thức → đơn vị. Quay về câu mở đầu mục này, chỉ rõ định nghĩa/giả thiết bị bỏ sót, tự làm lại mà không xem lời giải.

</details>

## 2. Luyện tập

Bài tập mới do tác giả biên soạn theo từng năng lực; câu SGK dùng chung truy xuất bằng ID ở hợp đồng Q15, không có ngân hàng đáp án nhân bản. Hãy nêu điều kiện áp dụng và giải từng bước trước khi tự mở Đối chiếu. Các bài hình học phải nói rõ quan hệ điểm/đường/mặt, không suy từ ảnh phối cảnh.

### Bài vận dụng 01

<!-- ITEM_ID: THPT-TOP16-P01; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O01 -->

Trong hình hộp chữ nhật, góc giữa AD và B′C′ bằng bao nhiêu?

<details><summary>Tự mở đáp án và lí giải</summary>

0°: AD và B′C′ song song, nên cùng phương. Không lấy khoảng cách giữa hai cạnh để xác định góc.

**D6 nếu sai:** Đừng dùng góc tù hoặc kết luận không có góc chỉ vì hai đường không gặp nhau. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O01` trước khi thử một bài khác.

</details>

### Bài vận dụng 02

<!-- ITEM_ID: THPT-TOP16-P02; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O02 -->

Trong hình hộp chữ nhật, chứng minh BC vuông góc AA′.

<details><summary>Tự mở đáp án và lí giải</summary>

Vì AA′⊥(ABCD) nên AA′ vuông góc mọi đường của đáy, trong đó có BC; hoặc BB′∥AA′ và BC⊥BB′.

**D6 nếu sai:** Phân biệt “vuông góc theo phương” với “hai đường cắt nhau tại góc vuông”. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O02` trước khi thử một bài khác.

</details>

### Bài vận dụng 03

<!-- ITEM_ID: THPT-TOP16-P03; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O03 -->

Trong hình hộp, từ BC⊥BB′ và DD′∥BB′ chứng minh BC⊥DD′.

<details><summary>Tự mở đáp án và lí giải</summary>

Thay DD′ bằng BB′ cùng phương. Vì BC⊥BB′ nên BC⊥DD′; không yêu cầu BC gặp DD′.

**D6 nếu sai:** Không suy hai đường cùng vuông góc một đường thứ ba thì chúng song song trong không gian. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O03` trước khi thử một bài khác.

</details>

### Bài vận dụng 04

<!-- ITEM_ID: THPT-TOP16-P04; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O04 -->

Nêu một chứng cứ chắc chắn để kết luận AB⊥CC′ trong hộp chữ nhật.

<details><summary>Tự mở đáp án và lí giải</summary>

Từ AB thuộc đáy và CC′ vuông góc mặt đáy, CC′⊥AB; kết luận không dựa nét vẽ.

**D6 nếu sai:** Khi lời giải viết “nhìn hình thấy”, hãy thay bằng quan hệ song song/vuông góc có giả thiết. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O04` trước khi thử một bài khác.

</details>

### Bài vận dụng 05

<!-- ITEM_ID: THPT-TOP16-P05; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O05 -->

Một đường d vuông góc hai đường cắt nhau a,b của (P); kết luận và lí do?

<details><summary>Tự mở đáp án và lí giải</summary>

d⊥(P) theo dấu hiệu hai phương cắt nhau trong cùng mặt phẳng; a,b cho đủ hai hướng độc lập.

**D6 nếu sai:** Một đường không đại diện cho tất cả các phương trong một mặt phẳng. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O05` trước khi thử một bài khác.

</details>

### Bài vận dụng 06

<!-- ITEM_ID: THPT-TOP16-P06; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O06 -->

Trong mặt phẳng (P), a,b cắt tại O. Biết d⊥a và d⊥b. Chứng minh d⊥(P).

<details><summary>Tự mở đáp án và lí giải</summary>

Áp dụng định lí đường thẳng vuông góc hai đường cắt nhau của một mặt phẳng, suy d⊥(P).

**D6 nếu sai:** Dừng lại khi hai đường kiểm tra song song, trùng nhau hoặc không cùng mặt phẳng. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O06` trước khi thử một bài khác.

</details>

### Bài vận dụng 07

<!-- ITEM_ID: THPT-TOP16-P07; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O07 -->

Đường a⊥(P), hai mặt phẳng (P)∥(Q). Quan hệ a và (Q)?

<details><summary>Tự mở đáp án và lí giải</summary>

a⊥(Q) vì hai mặt phẳng song song có cùng phương pháp tuyến; kiểm tra (P),(Q) thực sự song song.

**D6 nếu sai:** Không lấy việc hai mặt phẳng nhìn cùng hướng trên giấy làm chứng cứ song song. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O07` trước khi thử một bài khác.

</details>

### Bài vận dụng 08

<!-- ITEM_ID: THPT-TOP16-P08; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O08 -->

d⊥(P), e⊥(P) và d≠e. Chứng minh d∥e.

<details><summary>Tự mở đáp án và lí giải</summary>

Cả d và e cùng hướng pháp tuyến của (P); hai đường phân biệt cùng phương nên song song.

**D6 nếu sai:** Không lẫn tính duy nhất theo phương pháp tuyến với tính duy nhất mọi đường qua M. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O08` trước khi thử một bài khác.

</details>

### Bài vận dụng 09

<!-- ITEM_ID: THPT-TOP16-P09; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O09 -->

Trong nền chữ nhật, kiểm tra cột d⊥AB và d⊥AD với AB cắt AD. Kết luận?

<details><summary>Tự mở đáp án và lí giải</summary>

d⊥(ABCD) theo dấu hiệu vuông góc hai đường cắt nhau; mô tả rõ các đường thuộc nền.

**D6 nếu sai:** Không bỏ điều kiện hai phương kiểm tra phải độc lập. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O09` trước khi thử một bài khác.

</details>

### Bài vận dụng 10

<!-- ITEM_ID: THPT-TOP16-P10; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O10 -->

Cho AH⊥(P), AH=7 cm; tìm hình chiếu của A và khoảng cách từ A đến (P).

<details><summary>Tự mở đáp án và lí giải</summary>

H là hình chiếu; d(A,(P))=AH=7 cm. Không dùng độ dài một đoạn xiên khác.

**D6 nếu sai:** Không lấy điểm gần nhất theo hình phối cảnh thay cho chân vuông góc. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O10` trước khi thử một bài khác.

</details>

### Bài vận dụng 11

<!-- ITEM_ID: THPT-TOP16-P11; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O11 -->

Trong lăng trụ đứng ABC.A′B′C′, ảnh của đoạn B′C′ lên (ABC)?

<details><summary>Tự mở đáp án và lí giải</summary>

Đoạn BC vì B′ và C′ lần lượt chiếu thành B,C, khác nhau; ảnh không suy biến.

**D6 nếu sai:** Luôn xét xem hai đầu mút có chiếu trùng nhau không trước khi nối ảnh. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O11` trước khi thử một bài khác.

</details>

### Bài vận dụng 12

<!-- ITEM_ID: THPT-TOP16-P12; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O12 -->

AH⊥(P), B,H∈(P), c⊂(P) và c⊥AB. Hỏi c⊥BH không?

<details><summary>Tự mở đáp án và lí giải</summary>

Có, vì c đã vuông góc AH (do c⊂(P)) và AB; suy c vuông góc thành phần hình chiếu BH. Nếu B=H thì ảnh là điểm, phải nói riêng.

**D6 nếu sai:** Trước khi dùng định lí, xác định chân H và đảm bảo BH thật sự là hình chiếu AB. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O12` trước khi thử một bài khác.

</details>

### Bài vận dụng 13

<!-- ITEM_ID: THPT-TOP16-P13; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O13 -->

AH⊥(P), AH=5 m, BH=12 m. Tính sin góc của AB với (P).

<details><summary>Tự mở đáp án và lí giải</summary>

AB=√(5²+12²)=13 m; sinθ=AH/AB=5/13. Góc là giữa đường AB và hình chiếu BH.

**D6 nếu sai:** Không lấy góc giữa đường xiên và pháp tuyến làm góc đường–mặt; đó là góc phụ. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O13` trước khi thử một bài khác.

</details>

### Bài vận dụng 14

<!-- ITEM_ID: THPT-TOP16-P14; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O14 -->

Đoạn đường dốc cao 5 m và chạy ngang 12 m. Tính độ dài và tan góc dốc.

<details><summary>Tự mở đáp án và lí giải</summary>

Độ dài 13 m; tanθ=5/12. Kiểm tra các số đều là độ dài cùng đơn vị.

**D6 nếu sai:** Chỉ áp dụng tỉ số lượng giác cho tam giác vuông sau khi dựng hình chiếu đúng. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O14` trước khi thử một bài khác.

</details>

### Bài vận dụng 15

<!-- ITEM_ID: THPT-TOP16-P15; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O15 -->

Hai mặt phẳng cắt nhau theo d; trong mỗi mặt chọn một đường vuông góc d và góc giữa chúng là 70°. Góc hai mặt?

<details><summary>Tự mở đáp án và lí giải</summary>

70°. Nếu có góc bù 110° trên thiết diện, góc giữa hai mặt không định hướng vẫn là 70°.

**D6 nếu sai:** Không đồng nhất góc giữa hai mặt với bất kì góc của hai đường tùy chọn ở hai mặt. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O15` trước khi thử một bài khác.

</details>

### Bài vận dụng 16

<!-- ITEM_ID: THPT-TOP16-P16; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O16 -->

Góc phẳng của nhị diện 135°. Tìm góc giữa hai mặt phẳng chứa hai nửa mặt phẳng.

<details><summary>Tự mở đáp án và lí giải</summary>

45° = min(135°, 180°−135°). Góc nhị diện vẫn 135° theo hai nửa mặt được chọn.

**D6 nếu sai:** Phải nêu đang nói nhị diện hay góc giữa hai mặt phẳng; khác nhau ở định hướng. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O16` trước khi thử một bài khác.

</details>

### Bài vận dụng 17

<!-- ITEM_ID: THPT-TOP16-P17; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O17 -->

Một mặt đứng (P) chứa cột d vuông góc sàn (Q). Chứng minh (P)⊥(Q).

<details><summary>Tự mở đáp án và lí giải</summary>

Vì d⊂(P) và d⊥(Q), áp dụng dấu hiệu hai mặt phẳng vuông góc.

**D6 nếu sai:** Chỉ “có hai đường vuông góc” chưa đủ nếu không có đường vuông góc toàn bộ mặt. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O17` trước khi thử một bài khác.

</details>

### Bài vận dụng 18

<!-- ITEM_ID: THPT-TOP16-P18; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O18 -->

Trong tường vuông góc nền, đường xiên a trong tường không vuông góc chân tường d. Có kết luận a⊥nền được không?

<details><summary>Tự mở đáp án và lí giải</summary>

Không; thiếu điều kiện a⊥d. Đổi thành đường trong tường vuông góc d mới suy được.

**D6 nếu sai:** Nhớ cả điều kiện a nằm trong mặt và a vuông góc giao tuyến. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O18` trước khi thử một bài khác.

</details>

### Bài vận dụng 19

<!-- ITEM_ID: THPT-TOP16-P19; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O19 -->

Lăng trụ đứng có diện tích đáy 8 cm² và cạnh bên 6 cm. Tính thể tích.

<details><summary>Tự mở đáp án và lí giải</summary>

V=8×6=48 cm³, dùng cạnh bên làm chiều cao vì đây là lăng trụ đứng.

**D6 nếu sai:** Không dùng chiều dài cạnh bên của lăng trụ xiên làm chiều cao. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O19` trước khi thử một bài khác.

</details>

### Bài vận dụng 20

<!-- ITEM_ID: THPT-TOP16-P20; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O20 -->

Chóp đều đáy vuông cạnh 8, chiều cao 3. Tính đường cao của mặt bên.

<details><summary>Tự mở đáp án và lí giải</summary>

√(3²+4²)=5, vì khoảng cách từ tâm đáy tới trung điểm cạnh là 4.

**D6 nếu sai:** Không lấy cạnh bên hay đường cao mặt bên làm chiều cao vuông góc của chóp. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O20` trước khi thử một bài khác.

</details>

### Bài vận dụng 21

<!-- ITEM_ID: THPT-TOP16-P21; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O21 -->

Chóp cụt đều có hai đáy là tam giác đều cạnh 8 và 4. Tỉ số diện tích hai đáy?

<details><summary>Tự mở đáp án và lí giải</summary>

16:4=4:1 vì diện tích các hình đồng dạng tỉ lệ bình phương độ dài tương ứng.

**D6 nếu sai:** Không nhân tỉ số cạnh trực tiếp để suy tỉ số diện tích. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O21` trước khi thử một bài khác.

</details>

### Bài vận dụng 22

<!-- ITEM_ID: THPT-TOP16-P22; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O22 -->

AH⊥d, AH=5, HX=12 với X∈d. Tính AX và d(A,d).

<details><summary>Tự mở đáp án và lí giải</summary>

AX=13 theo Pitago, còn d(A,d)=AH=5. Không nhầm đoạn xiên AX với khoảng cách.

**D6 nếu sai:** Muốn chứng minh ngắn nhất phải xác định chân vuông góc. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O22` trước khi thử một bài khác.

</details>

### Bài vận dụng 23

<!-- ITEM_ID: THPT-TOP16-P23; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O23 -->

AH⊥(P), AH=8 cm. Một đoạn xiên AM=10 cm (M∈P). Tính khoảng cách A đến (P).

<details><summary>Tự mở đáp án và lí giải</summary>

8 cm, vì AH là đoạn vuông góc ngắn nhất. Độ dài AM=10 cm không phải khoảng cách.

**D6 nếu sai:** Không coi cạnh chéo là khoảng cách vuông góc. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O23` trước khi thử một bài khác.

</details>

### Bài vận dụng 24

<!-- ITEM_ID: THPT-TOP16-P24; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O24 -->

Đường d∥nền (P), A∈d có hình chiếu AH=7 cm. Tìm d(d,(P)).

<details><summary>Tự mở đáp án và lí giải</summary>

7 cm = d(A,(P)). Nếu d cắt hoặc nằm trong mặt, phải xét trường hợp riêng, không áp dụng máy móc.

**D6 nếu sai:** Điều kiện d song song mặt phẳng phải được kiểm tra trước khi lấy một điểm đại diện. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O24` trước khi thử một bài khác.

</details>

### Bài vận dụng 25

<!-- ITEM_ID: THPT-TOP16-P25; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O25 -->

(P)∥(Q), A∈(P), AH⊥(Q), AH=6 cm. Tính d((P),(Q)).

<details><summary>Tự mở đáp án và lí giải</summary>

6 cm; nhờ hai mặt song song, mọi điểm của (P) có cùng khoảng cách đến (Q).

**D6 nếu sai:** Không lấy đoạn nối hai điểm bất kì giữa các mặt làm khoảng cách. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O25` trước khi thử một bài khác.

</details>

### Bài vận dụng 26

<!-- ITEM_ID: THPT-TOP16-P26; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O26 -->

Lập phương cạnh 7, hai đường AB và CC′ chéo nhau. Chọn đoạn vuông góc chung và tính khoảng cách.

<details><summary>Tự mở đáp án và lí giải</summary>

BC nối B∈AB tới C∈CC′, vuông góc AB và CC′; độ dài BC=7. Không dùng AC là đường xiên.

**D6 nếu sai:** Kiểm tra cả hai đầu mút thuộc hai đường và vuông góc cả hai phương. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O26` trước khi thử một bài khác.

</details>

### Bài vận dụng 27

<!-- ITEM_ID: THPT-TOP16-P27; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O27 -->

Chóp đều đáy vuông cạnh 6 có đường cao mặt bên 5. Tìm chiều cao chóp.

<details><summary>Tự mở đáp án và lí giải</summary>

Từ tâm O đến trung điểm cạnh đáy dài 3; h=√(5²−3²)=4. Điều kiện đường cao mặt bên đi qua trung điểm cạnh trong chóp đều.

**D6 nếu sai:** Đừng dùng đường cao mặt bên thay cho đường cao vuông góc với đáy. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O27` trước khi thử một bài khác.

</details>

### Bài vận dụng 28

<!-- ITEM_ID: THPT-TOP16-P28; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O28 -->

Lăng trụ có đáy hình tam giác diện tích 18 m², khoảng cách hai mặt đáy 4 m. Tính V.

<details><summary>Tự mở đáp án và lí giải</summary>

72 m³ =18×4. Khoảng cách vuông góc hai đáy là chiều cao, không nhất thiết cạnh bên.

**D6 nếu sai:** Đơn vị thể tích phải là đơn vị khối, và h phải vuông góc đáy. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O28` trước khi thử một bài khác.

</details>

### Bài vận dụng 29

<!-- ITEM_ID: THPT-TOP16-P29; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O29 -->

Chóp tứ giác đáy vuông cạnh 6 cm và cao 4 cm. Tính thể tích.

<details><summary>Tự mở đáp án và lí giải</summary>

Sđáy=36 cm², V=36×4/3=48 cm³. Không dùng độ dài đường cao mặt bên.

**D6 nếu sai:** Phân biệt dạng chóp với lăng trụ trước khi chọn công thức. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O29` trước khi thử một bài khác.

</details>

### Bài vận dụng 30

<!-- ITEM_ID: THPT-TOP16-P30; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O30 -->

Lập phương cạnh 5 cm. Tính thể tích và đơn vị.

<details><summary>Tự mở đáp án và lí giải</summary>

5³=125 cm³; thể tích dùng ba chiều.

**D6 nếu sai:** Không nhầm diện tích toàn phần với thể tích và không bỏ đơn vị khối. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O30` trước khi thử một bài khác.

</details>

### Bài vận dụng 31

<!-- ITEM_ID: THPT-TOP16-P31; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O31 -->

Chóp cụt đều hai đáy vuông cạnh 6 và 3, chiều cao 4. Tính V.

<details><summary>Tự mở đáp án và lí giải</summary>

S=36,S′=9, √(SS′)=18, V=(4/3)(36+9+18)=84 đơn vị khối.

**D6 nếu sai:** Nếu hai đáy bằng nhau thì công thức trở về lăng trụ V=Sh; nếu đáy nhỏ thu về 0 thì về chóp V=Sh/3. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O31` trước khi thử một bài khác.

</details>

### Bài vận dụng 32

<!-- ITEM_ID: THPT-TOP16-P32; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O32 -->

Một khối lăng trụ tam giác vuông có cạnh góc vuông đáy 6 cm và 8 cm, chiều cao khối 7 cm. Tính V.

<details><summary>Tự mở đáp án và lí giải</summary>

Sđáy=(1/2)×6×8=24 cm², V=24×7=168 cm³.

**D6 nếu sai:** Không dùng cạnh xiên hoặc quên nhân hệ số 1/2 cho diện tích tam giác vuông. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O32` trước khi thử một bài khác.

</details>

### Bài vận dụng 33

<!-- ITEM_ID: THPT-TOP16-P33; ROLE: TOPIC_PRACTICE; PRIMARY_OUTCOME: TOP16-O33 -->

Chóp đều đáy vuông cạnh 8 và đường cao mặt bên 5. Tính thể tích.

<details><summary>Tự mở đáp án và lí giải</summary>

Hình chiếu đỉnh là tâm đáy, nửa cạnh=4; h=√(25−16)=3; Sđáy=64; V=64×3/3=64 đơn vị khối.

**D6 nếu sai:** Khi kết quả sai, dò ngược: loại khối → đáy → đường vuông góc → h → công thức → đơn vị. Đối chiếu lại với mạch Kiến thức ứng với `TOP16-O33` trước khi thử một bài khác.

</details>

### Tự luận 1

<!-- ITEM_ID: THPT-TOP16-W01; ROLE: TOPIC_WRITTEN; PRIMARY_OUTCOME: TOP16-O02; RUBRIC_MAX: 4 -->

Trong lập phương ABCD.A′B′C′D′ cạnh 5 cm, chứng minh AB và DD′ là hai đường chéo nhau vuông góc rồi xác định khoảng cách giữa chúng.

<details><summary>Tự mở lời giải và rubric /4</summary>

AB và DD′ thuộc các phương lần lượt AB và AA′ vuông góc nên góc hai đường 90°. Chúng không cắt và không đồng phẳng (cạnh đối chéo hộp), nên chéo nhau. Đoạn AD nối A∈AB và D∈DD′; AD⊥AB, AD⊥DD′. Vì vậy AD là vuông góc chung, khoảng cách bằng 5 cm.

**Rubric 4 điểm:**
- Nêu đúng hai phương vuông góc — **1 điểm**.
- Chứng minh hai đường chéo nhau, không cắt — **1 điểm**.
- Dựng được AD vuông góc với cả hai — **1 điểm**.
- Kết luận độ dài 5 cm và đơn vị — **1 điểm**.

</details>

### Tự luận 2

<!-- ITEM_ID: THPT-TOP16-W02; ROLE: TOPIC_WRITTEN; PRIMARY_OUTCOME: TOP16-O12; RUBRIC_MAX: 4 -->

Trong tứ diện S.ABC biết SA⊥(ABC), H thuộc BC, AH⊥BC. Chứng minh SH⊥BC.

<details><summary>Tự mở lời giải và rubric /4</summary>

SA⊥(ABC) nên SA⊥BC; AH⊥BC đã cho. Hai đường SA, AH cắt tại A, thuộc (SAH), suy BC⊥(SAH), do đó BC⊥SH. Đây cũng là định lí ba đường vuông góc với AH là hình chiếu của SH.

**Rubric 4 điểm:**
- Xác định chân chiếu A của S lên (ABC) — **1 điểm**.
- Nêu SA⊥BC từ SA⊥(ABC) — **1 điểm**.
- Dùng SA,AH cắt tại A để suy BC⊥(SAH) — **1 điểm**.
- Kết luận SH⊥BC — **1 điểm**.

</details>

### Tự luận 3

<!-- ITEM_ID: THPT-TOP16-W03; ROLE: TOPIC_WRITTEN; PRIMARY_OUTCOME: TOP16-O18; RUBRIC_MAX: 4 -->

Hai mặt phẳng (P),(Q) vuông góc, cắt theo d. a⊂(P) và a⊥d. Chứng minh a⊥(Q) và giải thích vì sao phải có điều kiện a⊥d.

<details><summary>Tự mở lời giải và rubric /4</summary>

Theo định lí hai mặt phẳng vuông góc, một đường của (P) vuông góc giao tuyến d sẽ vuông góc (Q). Nếu a là một đường xiên trong (P) không vuông góc d, không suy được a⊥(Q).

**Rubric 4 điểm:**
- Ghi đúng giả thiết hai mặt vuông góc — **1 điểm**.
- Xác định d là giao tuyến — **1 điểm**.
- Áp dụng dấu hiệu a⊂(P),a⊥d — **1 điểm**.
- Giải thích giới hạn khi bỏ a⊥d — **1 điểm**.

</details>

### Tự luận 4

<!-- ITEM_ID: THPT-TOP16-W04; ROLE: TOPIC_WRITTEN; PRIMARY_OUTCOME: TOP16-O27; RUBRIC_MAX: 4 -->

Một chóp tứ giác đều đáy vuông cạnh 6 cm, đường cao mặt bên dài 5 cm. Hãy tìm chiều cao và thể tích, phân biệt với đường cao mặt bên.

<details><summary>Tự mở lời giải và rubric /4</summary>

Chân cao O là tâm đáy. Với M là trung điểm cạnh đáy, OM=3 cm và SM=5 cm. Tam giác SOM vuông tại O nên SO=√(5²−3²)=4 cm. Diện tích đáy 36 cm²; V=(1/3)·36·4=48 cm³.

**Rubric 4 điểm:**
- Xác định O tâm đáy và M trung điểm cạnh — **1 điểm**.
- Tính OM=3 và dùng Pitago SO=4 — **1 điểm**.
- Tính đúng diện tích đáy 36 cm² — **1 điểm**.
- Tính thể tích 48 cm³ và phân biệt h — **1 điểm**.

</details>

### Tự luận 5

<!-- ITEM_ID: THPT-TOP16-W05; ROLE: TOPIC_WRITTEN; PRIMARY_OUTCOME: TOP16-O32; RUBRIC_MAX: 4 -->

Lăng trụ tam giác đứng có đáy tam giác vuông với hai cạnh góc vuông 6 cm và 8 cm, cạnh bên 7 cm. Tính diện tích đáy, chiều cao, thể tích.

<details><summary>Tự mở lời giải và rubric /4</summary>

Sđáy=(1/2)·6·8=24 cm². Lăng trụ đứng nên chiều cao bằng cạnh bên 7 cm. V=24·7=168 cm³; kết quả là đơn vị khối.

**Rubric 4 điểm:**
- Tính diện tích tam giác vuông 24 cm² — **1 điểm**.
- Giải thích h=7 vì lăng trụ đứng — **1 điểm**.
- Áp dụng V=Sđáy·h — **1 điểm**.
- Kết luận 168 cm³ đúng đơn vị — **1 điểm**.

</details>

### Tự luận 6

<!-- ITEM_ID: THPT-TOP16-W06; ROLE: TOPIC_WRITTEN; PRIMARY_OUTCOME: TOP16-O31; RUBRIC_MAX: 4 -->

Một chóp cụt đều có hai đáy hình vuông cạnh 6 cm và 3 cm; chiều cao 4 cm. Tính thể tích, sau đó xét giới hạn khi đáy nhỏ co về 0.

<details><summary>Tự mở lời giải và rubric /4</summary>

Hai diện tích S=36,S′=9, √(SS′)=18. V=(4/3)·(36+9+18)=84 cm³. Nếu S′ tiến về 0 thì V→(4/3)·36=48 cm³, phù hợp công thức của chóp cùng đáy và chiều cao.

**Rubric 4 điểm:**
- Tính đúng S=36, S′=9 — **1 điểm**.
- Tính trung bình nhân diện tích bằng 18 — **1 điểm**.
- V=(4/3)×63=84 cm³ — **1 điểm**.
- Nêu giới hạn S′→0 cho thể tích chóp — **1 điểm**.

</details>

## 3. Tự kiểm tra

Đây là **Tự kiểm tra công khai để tự đối chiếu**, không phải bài đánh giá độc lập hay xếp hạng Mastery. Chọn tám câu đã được học trong Luyện tập, làm bài và bấm **Final Submit** khi giao diện phát hành thực sự có hệ thống nộp cuối. **Trước Final Submit không được hiển thị đáp án, hint, đúng/sai, rubric hoặc AI Tutor**; sau đó chỉ đối chiếu tự nguyện. Nếu dùng bản Markdown tĩnh, phần này chỉ là mô tả cấu trúc; không tuyên bố đang chạy chấm điểm hay lưu tiến độ.

- Câu 1: tham chiếu canonical `THPT-TOP16-P02` — `TOPIC_SELF_CHECK_REPLAY`, `CLIENT_SELF_CHECK_NO_MASTERY`, không tạo item ID mới.
- Câu 2: tham chiếu canonical `THPT-TOP16-P06` — `TOPIC_SELF_CHECK_REPLAY`, `CLIENT_SELF_CHECK_NO_MASTERY`, không tạo item ID mới.
- Câu 3: tham chiếu canonical `THPT-TOP16-P12` — `TOPIC_SELF_CHECK_REPLAY`, `CLIENT_SELF_CHECK_NO_MASTERY`, không tạo item ID mới.
- Câu 4: tham chiếu canonical `THPT-TOP16-P14` — `TOPIC_SELF_CHECK_REPLAY`, `CLIENT_SELF_CHECK_NO_MASTERY`, không tạo item ID mới.
- Câu 5: tham chiếu canonical `THPT-TOP16-P16` — `TOPIC_SELF_CHECK_REPLAY`, `CLIENT_SELF_CHECK_NO_MASTERY`, không tạo item ID mới.
- Câu 6: tham chiếu canonical `THPT-TOP16-P23` — `TOPIC_SELF_CHECK_REPLAY`, `CLIENT_SELF_CHECK_NO_MASTERY`, không tạo item ID mới.
- Câu 7: tham chiếu canonical `THPT-TOP16-P27` — `TOPIC_SELF_CHECK_REPLAY`, `CLIENT_SELF_CHECK_NO_MASTERY`, không tạo item ID mới.
- Câu 8: tham chiếu canonical `THPT-TOP16-P31` — `TOPIC_SELF_CHECK_REPLAY`, `CLIENT_SELF_CHECK_NO_MASTERY`, không tạo item ID mới.

**Đường khắc phục:** Sau tự đối chiếu, quay lại outcome gây sai, giải thích vì sao phương pháp đúng và làm một biến thể mới; không ghi Skill Mastery từ việc xem lời giải.

<!-- AUTHOR_ONLY_SOURCE_PROVENANCE: 63 original G11 ChVII SGK canonical IDs are registered as pointers in A1–A7/V2 metadata, never copied. Private RD1 count imported: 0. -->
<!-- ORIGINAL_SGK_63_CANONICAL_PTRS_R00: THPT-G11-CHVII-B22-C01, THPT-G11-CHVII-B22-C02, THPT-G11-CHVII-B22-C03, THPT-G11-CHVII-B22-C04, THPT-G11-CHVII-B22-P01, THPT-G11-CHVII-B22-P02, THPT-G11-CHVII-B22-P03, THPT-G11-CHVII-B23-C01, THPT-G11-CHVII-B23-C02, THPT-G11-CHVII-B23-C03, THPT-G11-CHVII-B23-C04, THPT-G11-CHVII-B23-C05, THPT-G11-CHVII-B23-P01, THPT-G11-CHVII-B23-P02, THPT-G11-CHVII-B23-P03, THPT-G11-CHVII-B24-C01, THPT-G11-CHVII-B24-C02, THPT-G11-CHVII-B24-C03, THPT-G11-CHVII-B24-C04, THPT-G11-CHVII-B24-C05, THPT-G11-CHVII-B24-P01, THPT-G11-CHVII-B24-P02, THPT-G11-CHVII-B24-P03, THPT-G11-CHVII-B25-C01, THPT-G11-CHVII-B25-C02, THPT-G11-CHVII-B25-C03, THPT-G11-CHVII-B25-C04, THPT-G11-CHVII-B25-C05, THPT-G11-CHVII-B25-C06, THPT-G11-CHVII-B25-C07, THPT-G11-CHVII-B25-P01, THPT-G11-CHVII-B25-P02, THPT-G11-CHVII-B25-P03, THPT-G11-CHVII-B26-C01, THPT-G11-CHVII-B26-C02, THPT-G11-CHVII-B26-C03, THPT-G11-CHVII-B26-C04, THPT-G11-CHVII-B26-C05, THPT-G11-CHVII-B26-C06, THPT-G11-CHVII-B26-P01, THPT-G11-CHVII-B26-P02, THPT-G11-CHVII-B26-P03, THPT-G11-CHVII-B27-C01, THPT-G11-CHVII-B27-C02, THPT-G11-CHVII-B27-C03, THPT-G11-CHVII-B27-C04, THPT-G11-CHVII-B27-C05, THPT-G11-CHVII-B27-P01, THPT-G11-CHVII-B27-P02, THPT-G11-CHVII-B27-P03, THPT-G11-CHVII-CHVII-C01, THPT-G11-CHVII-B22-W01, THPT-G11-CHVII-B22-W02-ANCHOR, THPT-G11-CHVII-B23-W01, THPT-G11-CHVII-B23-W02-ANCHOR, THPT-G11-CHVII-B24-W01, THPT-G11-CHVII-B24-W02-ANCHOR, THPT-G11-CHVII-B25-W01, THPT-G11-CHVII-B25-W02-ANCHOR, THPT-G11-CHVII-B26-W01, THPT-G11-CHVII-B26-W02-ANCHOR, THPT-G11-CHVII-B27-W01, THPT-G11-CHVII-B27-W02-ANCHOR -->
