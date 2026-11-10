# NOTEBOOKLM · REVIEW CÓ MỤC TIÊU — 8 ỨNG VIÊN LUYỆN TẬP MỚI CHUYÊN ĐỀ 1

**Lane:** AUTHORING · **Ngày:** 10/11/2026 · **Request:** affected-scope Delta C / Q15 / D1–D6 / PED1–PED6; **không** review lại 30 câu private RD1 và **không** review lại toàn bộ R18 đã PASS.

## SOURCE_RECEIPT cần đối chiếu trước khi đưa verdict

- **SINGLE SOURCE đang cần quyết định:** `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_TOPIC1_FULL_THREE_PART_PUBLIC_CANONICAL_R14_20261110.md`, Git blob `9ace3710fb09f42142e2da3d6e5c575b319a4d36`.
- **Phần Practice chứa đúng 8 item đang xin review:** `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_TOPIC1_LUYEN_TAP_M1_M7_FULL_PUBLIC_SHARED_SOURCE_R12_20261110.md`, blob `72ab85d195153a3a2fd26b730f0c1ed8af60383c`.
- **Baseline review đã nghiệm thu:** `prototypes/thpt/content-drafts/topic-functions/Temp_TOPIC_FUNCTIONS_FULL_PUBLIC_CANONICAL_SOURCE_R18_20261108.md`, blob `2340ea4975b37a457363eea59dd617070934983c`; PASS chỉ cho snapshot này.
- **Permanent Sources NotebookLM:** dùng **đúng 5 Permanent Sources THPT v2.1 đã cấu hình**, không bổ sung nguồn thứ sáu hoặc tái chọn v2.0; đối chiếu SGK/SBT Kết nối tri thức S1 đúng lớp/tập.
- **Ngân hàng công khai tham chiếu:** 6 JS/JSON SGK có 255 item distinct, 10 item Topic và 28 Written IDs đã đối chiếu; 8 ứng viên mới chưa có canonical ID chính thức. **Tuyệt đối không đưa đề/đáp án/rubric RD1 private vào đánh giá công khai.**

## Mục tiêu reviewer

Đánh giá từng bài dưới đây theo **đúng outcome**, điều kiện toán, đáp án/rubric, tính tự học/độ sâu chuyển giao và nguy cơ trùng **ngữ nghĩa** với bài public đã có. Với bài Written, kiểm sự rõ ràng của cách chấm tự đối chiếu; **không** coi tự đối chiếu là đánh giá Mastery chính thức. Với hai bài XFER, đặc biệt kiểm giới hạn miền, tiệm cận không đạt, đạo hàm/đơn vị, thay đổi miền và điều kiện ngưỡng. Trả verdict từng item **Academic + PED**, phân loại P0/P1/P2, `MINIMAL_DELTA` nếu cần; có `SOURCE_RECEIPT` ghi đúng blob R14 và R12. Đánh giá độc lập; không suy PASS của R18 sang R14.

## Ma trận reviewer

| item draft (không là canonical) | outcome chính | Trọng tâm kiểm |
|---|---|---|
| `DRAFT-T1-M1-APP06` | `TOP-G10-FUNC-O02` | Ba ràng buộc trong một biểu thức |
| `DRAFT-T1-M1-WR02` | `TOP-G10-FUNC-O02` | Rút gọn có làm mất một điểm trên đồ thị? |
| `DRAFT-T1-M2-APP06` | `TOP-G10-FUNC-O04` | Hai nhánh đều tăng, cả hàm có tăng? |
| `DRAFT-T1-M2-WR01` | `TOP-G10-FUNC-O03` | Tách dữ kiện khỏi suy luận |
| `DRAFT-T1-M3-APP07` | `TOP-G10-FUNC-O08` | Nghiệm âm có được đưa vào |x|? |
| `DRAFT-T1-M3-APP09` | `TOP-G10-FUNC-O09` | Miền không liền nhau |
| `DRAFT-T1-M4M7-XFER01` | `TOP-FUNC-M4-O09` | Một hàm lôgarit, bốn câu hỏi |
| `DRAFT-T1-M4M7-XFER02` | `TOP-FUNC-M4-O06` | Một mô hình nguội dần có đơn vị |

## Đề, lời giải và lời khắc phục — CHÍNH XÁC nguồn R12

## Bài 1 — `DRAFT-T1-M1-APP06` / `TOP-G10-FUNC-O02`

### Ba ràng buộc trong một biểu thức

<!-- AUTHORING_Q15_ID: DRAFT-T1-M1-APP06; OUTCOME: TOP-G10-FUNC-O02; PUBLIC_SEMANTIC: PUBLIC_DISTINCT_CANDIDATE; REASON: three-simultaneous-domain-constraints; NO_OFFICIAL_RD1; NO_MASTERY -->

Xét \(\displaystyle r(x)=\frac{\sqrt{x+2}}{(x-1)(x-3)}\). Tìm \(D\), rồi cho biết \(-2,1,3,4\) có thuộc miền hay không.

<details><summary>Đối chiếu</summary>

\(\sqrt{x+2}\) yêu cầu \(x\ge-2\); mẫu khác 0 yêu cầu \(x\ne1\), \(x\ne3\). Vậy \(D=[-2,+\infty)\setminus\{1,3\}\). Nhận \(-2\) và 4; loại 1 và 3. Không được loại \(-2\) chỉ vì tử có căn: căn bằng 0 ở **tử** là hợp lệ.

</details>

---

## Bài 2 — `DRAFT-T1-M1-WR02` / `TOP-G10-FUNC-O02`

### Rút gọn có làm mất một điểm trên đồ thị?

<!-- AUTHORING_Q15_ID: DRAFT-T1-M1-WR02; OUTCOME: TOP-G10-FUNC-O02; PUBLIC_SEMANTIC: PUBLIC_DISTINCT_CANDIDATE; REASON: hole-removes-unique-range-value; NO_OFFICIAL_RD1; NO_MASTERY -->

Cho hai hàm số

\[
f(x)=\frac{(x-1)\sqrt{x+1}}{x-1},
\qquad
g(x)=\sqrt{x+1}.
\]

Một bạn rút gọn \((x-1)\) rồi nói rằng hai hàm số hoàn toàn giống nhau. Em hãy:

(a) tìm tập xác định của từng hàm số;

(b) giải thích vì sao \(f(x)=g(x)\) tại mọi đầu vào thuộc tập xác định của \(f\), nhưng hai hàm số vẫn không bằng nhau với tư cách là hai hàm có miền xác định khác nhau;

(c) mô tả điểm phải bỏ khỏi đồ thị của \(g\) để được đồ thị của \(f\), và xác định **tập giá trị** của mỗi hàm.

<details><summary>Đối chiếu và rubric dự kiến</summary>

Để \(g(x)\) có nghĩa trong số thực, cần \(x+1\ge0\), nên \(D_g=[-1,+\infty)\).

Để \(f(x)\) có nghĩa, cần đồng thời \(x+1\ge0\) và \(x-1\ne0\), nên

\[
D_f=[-1,+\infty)\setminus\{1\}=[-1,1)\cup(1,+\infty).
\]

Khi \(x\in D_f\), ta mới được phép chia cả tử và mẫu cho \(x-1\), suy ra \(f(x)=\sqrt{x+1}=g(x)\). Tại \(x=1\), \(g(1)=\sqrt2\) có nghĩa, còn \(f(1)\) **không xác định** do mẫu bằng 0. Vì vậy hai hàm không có cùng miền và không thể coi là cùng một hàm.

Đồ thị \(f\) là đồ thị \(g\), nhưng **khuyết điểm** \((1;\sqrt2)\) (vòng tròn rỗng). Do căn bậc hai nhận mọi giá trị không âm khi \(x\ge-1\), ta có \(T_g=[0,+\infty)\). Với \(f\), giá trị \(\sqrt2\) không còn nhận được: muốn \(\sqrt{x+1}=\sqrt2\) thì nhất thiết \(x=1\), mà giá trị này bị loại. Mọi đầu ra không âm khác \(\sqrt2\) vẫn đạt được. Vậy

\[
T_f=[0,+\infty)\setminus\{\sqrt2\}.
\]

**Thang tự đối chiếu dự kiến (6 điểm, chưa canonical):** 1 điểm tìm đúng \(D_g\); 1 điểm tìm đúng \(D_f\); 1 điểm nêu rõ điều kiện hợp lệ của phép rút gọn; 1 điểm nhận diện chính xác chỗ khuyết \((1;\sqrt2)\) trên đồ thị; 1 điểm tìm đúng \(T_g\); 1 điểm suy luận đúng \(T_f\) và vì sao mất giá trị \(\sqrt2\). Bài này là hoạt động tự đối chiếu công khai, không dùng làm RD1 hoặc ghi Mastery.

</details>

---

## Bài 3 — `DRAFT-T1-M2-APP06` / `TOP-G10-FUNC-O04`

### Hai nhánh đều tăng, cả hàm có tăng?

<!-- AUTHORING_Q15_ID: DRAFT-T1-M2-APP06; OUTCOME: TOP-G10-FUNC-O04; PUBLIC_SEMANTIC: PUBLIC_DISTINCT_CANDIDATE; REASON: piecewise-increasing-branches-not-global; NO_OFFICIAL_RD1; NO_MASTERY -->

Xét \(r(x)=x+1\) khi \(x<0\), và \(r(x)=x-2\) khi \(x\ge0\). Cả hai nhánh đều là đường thẳng có hệ số góc dương. Có được kết luận \(r\) đồng biến nghiêm ngặt trên toàn \(\mathbb R\) không? Hãy kiểm riêng hai đầu vào ở hai phía mốc 0.

<details><summary>Đối chiếu</summary>

**Không.** Chẳng hạn, \(x_1=-0{,}5<x_2=0\) nhưng \(r(-0{,}5)=0{,}5\) trong khi \(r(0)=-2\), tức \(r(x_1)>r(x_2)\). Mỗi nhánh tăng trên khoảng riêng của mình, nhưng có **bước nhảy xuống** tại mốc 0, khiến hàm không tăng trên toàn miền. Cần kiểm cả chỗ chuyển nhánh, không chỉ dấu hệ số góc.

</details>

---

## Bài 4 — `DRAFT-T1-M2-WR01` / `TOP-G10-FUNC-O03`

### Tách dữ kiện khỏi suy luận

<!-- AUTHORING_Q15_ID: DRAFT-T1-M2-WR01; OUTCOME: TOP-G10-FUNC-O03; PUBLIC_SEMANTIC: PUBLIC_DISTINCT_CANDIDATE; REASON: data-vs-model-linear-interpolation-justification; NO_OFFICIAL_RD1; NO_MASTERY -->

Một bảng chỉ ghi vận tốc của xe tại \(t=0\) là 10 km/h và tại \(t=10\) phút là 20 km/h. Hãy trình bày (a) điều gì biết chắc từ bảng; (b) điều gì chưa thể khẳng định về vận tốc lúc \(t=5\) phút; (c) nếu giả định vận tốc tăng đều theo thời gian, hãy tính vận tốc dự kiến ở phút thứ 5 và nêu giới hạn của kết quả.

<details><summary>Đối chiếu và rubric dự kiến</summary>

(a) Ta biết chính xác **hai giá trị được cho trong bảng** tại hai mốc. (b) Không xác định được vận tốc đúng lúc phút 5 nếu không có dữ liệu hoặc giả định thêm. (c) Dưới giả định vận tốc tăng tuyến tính theo thời gian, \(v(5)=10+(20-10)\cdot5/10=15\) km/h. Đó là kết quả **dự kiến theo mô hình**, không tự trở thành một quan sát có thật.

**Rubric tạm (4 điểm):** 1 điểm nêu đúng hai mốc; 1 điểm giải thích chưa đủ dữ kiện; 1 điểm tính đúng 15 km/h dưới giả định; 1 điểm phân biệt kết quả mô hình với dữ liệu đo.

</details>

---

## Bài 5 — `DRAFT-T1-M3-APP07` / `TOP-G10-FUNC-O08`

### Nghiệm âm có được đưa vào |x|?

<!-- AUTHORING_Q15_ID: DRAFT-T1-M3-APP07; OUTCOME: TOP-G10-FUNC-O08; PUBLIC_SEMANTIC: PUBLIC_DISTINCT_CANDIDATE; REASON: solve-abs-output-vs-input-equations; NO_OFFICIAL_RD1; NO_MASTERY -->

Cho \(f(x)=x^2+2x-3\). Hãy giải \(|f(x)|=0\) và \(f(|x|)=0\). Khi đặt \(u=|x|\), vì sao phải kiểm tra \(u\ge0\) trước khi suy ra \(x\)?

<details><summary>Đối chiếu</summary>

\(|f(x)|=0\iff f(x)=0\iff (x-1)(x+3)=0\), nên \(x=1\) hoặc \(x=-3\). Với \(f(|x|)=0\), đặt \(u=|x|\ge0\); ta có \(u^2+2u-3=(u-1)(u+3)=0\). Nghiệm \(u=-3\) **không thể** bằng \(|x|\), nên chỉ còn \(u=1\), tức \(x=\pm1\). Không phản chiếu nghiệm âm \(x=-3\) của hàm gốc rồi kết luận sai \(x=\pm3\).

</details>

---

## Bài 6 — `DRAFT-T1-M3-APP09` / `TOP-G10-FUNC-O09`

### Miền không liền nhau

<!-- AUTHORING_Q15_ID: DRAFT-T1-M3-APP09; OUTCOME: TOP-G10-FUNC-O09; PUBLIC_SEMANTIC: PUBLIC_DISTINCT_CANDIDATE; REASON: extrema-disconnected-domain; NO_OFFICIAL_RD1; NO_MASTERY -->

Cho \(m(x)=5-(x-2)^2\) nhưng chỉ xét \(D=[0,1]\cup[3,4]\). Tìm GTNN và GTLN trên \(D\). Vì sao không được lấy giá trị 5 tại đỉnh của parabol làm GTLN trong bài?

<details><summary>Đối chiếu</summary>

Đỉnh của parabol là \((2;5)\), nhưng \(x=2\notin D\). Trên \([0,1]\), khi x tăng thì \(m(x)\) tăng từ \(m(0)=1\) tới \(m(1)=4\). Trên \([3,4]\), khi x tăng thì \(m(x)\) giảm từ \(m(3)=4\) xuống \(m(4)=1\). Vậy **GTLN trên D bằng 4** (đạt tại x=1 hoặc x=3) và **GTNN trên D bằng 1** (đạt tại x=0 hoặc x=4). Một miền có hai đoạn rời nhau không cho phép tự nối qua điểm x=2 đã bị loại.

</details>

---

## Bài 7 — `DRAFT-T1-M4M7-XFER01` / `TOP-FUNC-M4-O09`

### Một hàm lôgarit, bốn câu hỏi

<!-- AUTHORING_Q15_ID: DRAFT-T1-M4M7-XFER01; OUTCOME: TOP-FUNC-M4-O09; PUBLIC_SEMANTIC: PUBLIC_DISTINCT_CANDIDATE; REASON: joint-M4-M5-M6-M7-log-domain-extrema; NO_OFFICIAL_RD1; NO_MASTERY -->

Một mô hình có quy tắc \(f(x)=\log_2(x+2)\), nhưng chỉ dùng khi \(-2<x\le2\).

**Tự làm:** (a) Xác định miền đúng theo công thức và tình huống; tính \(f(-1),f(0),f(2)\). (b) Khi \(x\to-2^+\), giá trị \(f(x)\) tiến đâu? Có thể gán \(f(-2)\) bằng giới hạn ấy không? (c) Tính \(f'(x)\), chỉ ra tính đơn điệu, GTLN/GTNN trên miền \((-2,2]\). (d) Nếu chỉ xét \([0,2]\), GTLN/GTNN thay đổi thế nào? (e) Tìm tất cả \(x\) hợp lệ sao cho \(f(x)\ge1\). Hãy **nêu điều kiện đầu vào trước**, không nhảy ngay vào tính đạo hàm.

<details><summary>Gợi ý (chỉ mở khi cần)</summary>

Đặt \(u=x+2\). Hàm log yêu cầu \(u>0\). Với \(a>1\), \(\log_a u\) tăng. Phân biệt một cận vô hạn với giá trị thực sự đạt được; sau khi giải \(\log_2(x+2)\ge1\), lấy giao với \((-2,2]\).

</details>
<details><summary>Đối chiếu và thang tự đánh giá</summary>

(a) Miền là \(D=(-2,2]\). Các giá trị lần lượt \(f(-1)=0,\ f(0)=1,\ f(2)=2\).
(b) Khi \(x\to-2^+\), \(x+2\to0^+\), nên \(f(x)\to-\infty\); **không có** \(f(-2)\) vì -2 bị loại.
(c) \(f'(x)=1/((x+2)\ln2)>0\) trên D, nên f tăng nghiêm ngặt. **GTLN = 2 tại x=2**, nhưng **không có GTNN**, vì giá trị đi xuống không bị chặn khi x tiến -2 từ phía phải.
(d) Trên đoạn [0,2], hàm tăng và liên tục: **GTNN = 1 tại x=0**, GTLN = 2 tại x=2.
(e) Vì cơ số 2 >1, \(\log_2(x+2)\ge1\iff x+2\ge2\iff x\ge0\). Giao với D: \([0,2]\).

**Rubric tự đối chiếu (8 điểm, không chấm chính thức):** 1 điểm miền; 1 điểm ba giá trị; 1 điểm giới hạn và không nhận x=-2; 2 điểm đạo hàm + tính tăng; 1 điểm GTLN/không GTNN trên D; 1 điểm đổi miền [0,2]; 1 điểm điều kiện ngưỡng và giao miền. Nếu sai (b)/(c), quay lại M5/M6; nếu sai (d)/(e), quay lại M1 và M7.

</details>

---

## Bài 8 — `DRAFT-T1-M4M7-XFER02` / `TOP-FUNC-M4-O06`

### Một mô hình nguội dần có đơn vị

<!-- AUTHORING_Q15_ID: DRAFT-T1-M4M7-XFER02; OUTCOME: TOP-FUNC-M4-O06; PUBLIC_SEMANTIC: PUBLIC_DISTINCT_CANDIDATE; REASON: joint-M4-M5-M6-M7-exp-temperature; NO_OFFICIAL_RD1; NO_MASTERY -->

Nhiệt độ của một mẫu vật được mô hình hóa (giả định) trong \(t\ge0\) phút bằng
\[
T(t)=18+12\cdot2^{-t/3}\quad (^\circ\mathrm C).
\]
Đây là mô hình toán để luyện suy luận, **không phải số liệu thí nghiệm thực tế**.

**Tự làm:** (a) Xác định miền thời gian, \(T(0),T(3),T(6)\). (b) Khi \(t\to+\infty\), mô hình tiến đến nhiệt độ nào? Nó có đạt đúng giá trị ấy trong thời gian hữu hạn không? (c) Tính \(T'(t)\), nêu đơn vị và giải thích dấu. Tính tốc độ biến thiên tại phút thứ 3. (d) Tìm mọi thời gian \(t\) sao cho \(T(t)\le21^\circ\mathrm C\). (e) Trên \(t\ge0\), nhiệt độ lớn nhất có đạt được không; có nhiệt độ nhỏ nhất không? Hãy giải thích bằng **miền và giới hạn**, không đoán bằng hình.

<details><summary>Gợi ý (chỉ mở khi cần)</summary>

\(2^{-t/3}>0\) và giảm khi t tăng. Đạo hàm của \(2^{u(t)}\) là \(2^{u(t)}\ln2\cdot u'(t)\). Khi giải ngưỡng, có thể so với \(2^{-2}\), hoặc dùng logarit cơ số 2 là hàm tăng.

</details>
<details><summary>Đối chiếu và thang tự đánh giá</summary>

(a) Miền \(D=[0,+\infty)\) (phút); \(T(0)=30^\circ\mathrm C,\ T(3)=24^\circ\mathrm C,\ T(6)=21^\circ\mathrm C\).
(b) \(2^{-t/3}\to0\), nên \(T(t)\to18^\circ\mathrm C\), nhưng với mỗi t hữu hạn, \(T(t)>18\). Số 18 là mức tiệm cận, **không phải nhiệt độ nhỏ nhất đạt được** trong mô hình.
(c) \(T'(t)=-4\ln2\cdot2^{-t/3}<0\) (đơn vị °C/phút). Tại t=3, \(T'(3)=-2\ln2\approx-1{,}386\) °C/phút, nghĩa là tại phút thứ 3 nhiệt độ đang giảm với tốc độ tức thời khoảng 1,386°C/phút.
(d) \(18+12\cdot2^{-t/3}\le21 \iff 2^{-t/3}\le1/4=2^{-2}\iff -t/3\le-2\iff t\ge6\) (phút).
(e) Nhiệt độ lớn nhất là \(30^\circ\mathrm C\), đạt tại \(t=0\); **không có GTNN** vì các giá trị luôn lớn hơn 18 nhưng tiến gần 18.

**Rubric tự đối chiếu (8 điểm):** 1 điểm miền và ba mốc; 1 điểm giới hạn và không đạt 18; 2 điểm đạo hàm/dấu/đơn vị; 1 điểm tốc độ ở t=3; 2 điểm giải ngưỡng có miền; 1 điểm GTLN/GTNN có lập luận. Chỉ là bài luyện công khai, không ghi Mastery.

</details>

## Kết luận reviewer cần trả

- Bảng **8/8**: `ITEM_ID_DRAFT | OUTCOME_ID | ACADEMIC_VERDICT | PED_VERDICT | P0/P1/P2 | MINIMAL_DELTA | POTENTIAL_PUBLIC_DUPLICATE`.
- Nếu phản biện yêu cầu sửa **câu/đáp án/rubric/giải thích**, xác định đúng item và đúng phần Delta C chịu ảnh hưởng; không làm lại toàn chương hay 30 RD1.
- `SOURCE_RECEIPT`: khớp Git source blob `9ace3710fb09f42142e2da3d6e5c575b319a4d36` và Practice blob `72ab85d195153a3a2fd26b730f0c1ed8af60383c`; nếu nguồn thay đổi khi review cần báo `SOURCE_DRIFT_HOLD`.
- Không tự cấp `CONTENT_READY`: private exposure audit và RELEASE/Q16 Final Submit là cổng khác.

**OWNER/HANDOFF STATUS:** `REVIEW_REQUEST_PREPARED_ONLY`; **chưa có NotebookLM verdict** cho tám ứng viên này.
