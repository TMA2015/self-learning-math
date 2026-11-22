# Temp — AUTHORING R10 | Một nguồn Kiến thức Chuyên đề Hàm số và đồ thị M1–M7

**PACKET_ID:** THPT-TOPIC-FUNCTIONS-M1-M7-KNOWLEDGE-COMPILATION-R10-20261107
**PATH:** TOPIC, three distinct student sections **Kiến thức / Luyện tập / Tự kiểm tra**. No separate Topic Core.
**ONE STANDARD:** SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18.
**LANE:** AUTHORING #782, no site/Firebase changes, no merge/deploy.
**STATE:** CONSOLIDATED_SOURCE_CANDIDATE, **FULL_TOPIC_CONTENT_READY=NO**, OFFICIAL_TOPIC_READINESS=NOT_ESTABLISHED.
**VERDICT:** Owner NotebookLM Academic/PED PASS accepted on the unchanged original G10 R01 + M1–M3 pedagogical bridge + M4/M5/M6/M7 authoring texts. Source header labels 'PENDING' below are **historical pre-review metadata**, copied verbatim, not newer decisions; owner decision #787 forbids repeated metadata-only re-review.
**Q15:** This source is an assembly of the reviewed knowledge texts, NOT a second question/answer/key/rubric bank. Every original SGK/Topic item and VD has only one canonical source and can have multiple placements. Four candidate M6/M7 public transfer questions remain UNPROMOTED until Q15 registration; do not invent 10 TRY/HELP records from G10 review prose.
**Q16:** Worked/First Try solutions here are PUBLIC formative only, not independent unseen `TOPIC_READINESS`. No private RD1 stem/key/rubric in this file; no Mastery from self-comparison or public practice.

## SOURCE MANIFEST (verbatim mathematical texts, not a new DELTA_C)

| Scope | Proposed outcome rows | Git blob | Original source file |
|---|---:|---|---|
| M1–M3 | 10 | `fcecb2c97fe7799124809c47045f2087d333afa9` | `Temp_TOPIC_FUNCTIONS_M1_M3_VERTICAL_FOUNDATIONS_PED_DELTA_R01_20261107.md` |
| M4 | 10 | `a3db248040abe2109410614f2f11f5ef84aff422` | `Temp_TOPIC_FUNCTIONS_M4_TRIG_EXP_LOG_D1_D6_AUTHORING_R01_20261107.md` |
| M5 | 9 | `f1fe1997242714ddadf3e94b981df904f4e12787` | `Temp_TOPIC_FUNCTIONS_M5_LIMIT_CONTINUITY_D1_D6_AUTHORING_R01_20261107.md` |
| M6 | 9 | `f35e7fcd99b853bb5f9392c6ded25c2e20aa012f` | `Temp_TOPIC_FUNCTIONS_M6_KNOWLEDGE_CONCEPT_TO_SECOND_DERIVATIVE_R01_20261107.md` |
| M7 | 10 | `944673fffe5dad9444c994e7719e5c054570bca2` | `Temp_TOPIC_FUNCTIONS_M7_DERIVATIVE_TO_GRAPH_OPTIMIZATION_KNOWLEDGE_R01_20261107.md` |
| G10 R01 original D1+D2 | same 10 G10 outcomes, no extra outcomes | `57eaf0141a5db9bfba91f0e6c863fc7dcc638068` | source-exact excerpt II/III from immutable G10 topic R01 |

These are **48 outcome mapping rows**, not 48 new official outcome IDs. G10 historic `TOP-G10-FUNC-O01..O10` meanings stay intact; M4 10 + M5 9 + M6 9 + M7 10 are reviewer-assessed candidate outcome rows. Older high-level O01..O21 planning topics are not additional assessed outcomes.

## PART I — Knowledge, exact original source texts

**Authoring-only assembly note:** the complete G10 R01 D1/D2 excerpt is included as a source-evidence shelf for the original worked VD01–VD08; M1–M3 concept-first bridge then adds explanations. In a future learner view, reference a single original VD, NEVER show two duplicate VD clones. The administrative/source-review lines embedded in each source are original historical notes and **not student content**. The mathematical prose within each block is unchanged.

### G10 R01: original D1/D2 excerpt (immutable)

**SOURCE_BLOB:** `57eaf0141a5db9bfba91f0e6c863fc7dcc638068` (historical Academic PASS with source receipt `95e34644c4520adf748cfe3118d8726a5202e3e3`)

## II. D1 — Kiến thức độc lập

### Mảng A. Hàm số, đầu vào và đầu ra

Hàm số f trên D là quy tắc gán cho mỗi x thuộc D **duy nhất một** số thực f(x). Các đầu vào khác nhau được phép cùng một đầu ra; đây không phải điều kiện *đơn ánh*. Tập xác định D là tập đầu vào hợp lệ; tập giá trị T={f(x) | x thuộc D} gồm các giá trị đầu ra thực sự nhận được. Một quan hệ có hai giá trị y khác nhau ứng với cùng x không phải đồ thị hàm số. Đồ thị là tập điểm (x;f(x)), và điểm (u;v) thuộc đồ thị khi u thuộc D, v=f(u).

Hàm có thể được cho qua bảng, công thức, hình vẽ hoặc mô tả theo miền. Chỉ suy được những giá trị mà nguồn đã cung cấp; không tự nội suy số liệu đo chưa có mô hình. Nếu có biểu thức căn √A(x), yêu cầu A(x)≥0; nếu có mẫu B(x), yêu cầu B(x)≠0; hàm mô hình thực tế còn bị giới hạn bởi điều kiện đại lượng (thời gian, khoảng cách, số lượng). Tập xác định là **giao** mọi điều kiện.

### Mảng B. Tính biến thiên và hàm từng đoạn

Hàm f đồng biến trên khoảng K nếu với mọi x1<x2 thuộc K ta có f(x1)<f(x2); nghịch biến nếu f(x1)>f(x2). Không kết luận một hàm tăng trên toàn D chỉ từ hai điểm đo, hoặc ghép hai khoảng rời nhau thành một kết luận không kiểm chứng. Với hàm từng đoạn, chọn công thức theo điều kiện của x; chú ý các dấu <, ≤ tại điểm nối. Với mô hình phải ghi rõ đơn vị x, f(x) và miền thực tế; các kết quả bên ngoài miền đó không có nghĩa thực tế.

### Mảng C. Hàm số bậc hai và hình học đồ thị

Hàm số bậc hai: f(x)=ax²+bx+c, a,b,c thực, **a≠0**; tập xác định toán học là ℝ. Đặt h=−b/(2a), Δ=b²−4ac, k=f(h)=−Δ/(4a). Viết f(x)=a(x−h)²+k. Parabol có đỉnh I(h;k), trục x=h, hướng mở lên nếu a>0, xuống nếu a<0. Điểm cắt Oy luôn là (0;c). Các giao Ox là các nghiệm thực của ax²+bx+c=0: Δ<0 thì không giao; Δ=0 thì tiếp xúc; Δ>0 thì hai giao điểm phân biệt.

Khi a>0: f nghịch biến trên (−∞;h), đồng biến trên (h;+∞), có GTNN k và T=[k;+∞). Khi a<0: f đồng biến trên (−∞;h), nghịch biến trên (h;+∞), có GTLN k và T=(−∞;k]. Khi hàm được xét trên đoạn [u;v], cực trị trong miền đó phải xét các đầu mút và đỉnh nếu h∈[u;v], **không tự lấy k nếu đỉnh ở ngoài miền**. Đồ thị dựng bằng đỉnh, trục, cặp điểm đối xứng và giao trục (nếu có); một mô hình có thể dùng chỉ một phần parabol.

### Mảng D. Mô hình ứng dụng

Đặt biến và đơn vị trước khi biến đổi. Viết biểu thức từ dữ kiện, xác định miền chấp nhận (đặc biệt số lượng nguyên, thời gian ≥0, chiều dài >0), tìm GTLN/GTNN trên **miền hợp lệ**, kiểm kết quả và giải thích theo ngữ cảnh. Kết luận cần kèm đơn vị; không kéo dài đồ thị bậc hai ra miền phi thực tế chỉ để lấy cực trị.

## III. D2 — Ví dụ có lời giải đầy đủ (8 ví dụ)

**VD01 – Quan hệ bảng có x lặp.** Dữ liệu (0;2),(1;4),(1;4),(3;9) vẫn là hàm số: mọi đầu vào có cùng một đầu ra dù cặp (1;4) lặp. D={0,1,3}, T={2,4,9}. Nếu thay cặp cuối bằng (1;8), quan hệ không còn đơn trị.

**VD02 – Miền xác định nhiều điều kiện.** f(x)=√(x+2)/(x−1). Điều kiện x≥−2 và x≠1; D=[−2;+∞)\{1}. Không quên x=−2 được phép vì căn bằng 0.

**VD03 – Đọc điểm trên đồ thị.** Với f(x)=|x−3|+2, A(1;4) thuộc vì f(1)=4; B(4;4) không thuộc vì f(4)=3. Tập giá trị [2;+∞) trên ℝ.

**VD04 – Hàm từng đoạn.** P(x)=5x khi 0≤x≤3, và P(x)=15+4(x−3) khi x>3 (nghìn đồng). P(3)=15 dùng nhánh đầu, P(5)=23 dùng nhánh sau. Miền x≥0; tại x=3 không được dùng dấu x>3.

**VD05 – Đưa về dạng đỉnh.** f(x)=2x²−8x+3=2(x−2)²−5; I(2;−5), trục x=2, GTNN −5, tập giá trị [−5;+∞), nghịch biến trước x=2, đồng biến sau x=2.

**VD06 – Không giao Ox.** f(x)=x²−6x+11=(x−3)²+2; đỉnh (3;2), mở lên. Δ=36−44=−8<0 nên không cắt Ox; đồ thị đi qua (0;11), (6;11) đối xứng qua x=3.

**VD07 – Cực trị trên đoạn không chứa đỉnh.** f(x)=−(x−5)²+20 trên D=[0;3]. Đỉnh tại x=5 nằm ngoài D. Hàm đồng biến trên [0;3], nên min f(0)=−5, max f(3)=16; không lấy 20 làm GTLN trong mô hình.

**VD08 – Tối ưu với số lượng nguyên.** Một mô hình lợi nhuận P(q)=−(q−4)²+25 (triệu đồng), q nguyên trong {0,1,…,8}. Đỉnh q=4 là giá trị nguyên khả thi nên lãi lớn nhất 25 triệu đồng tại q=4. Nếu miền hợp lệ đổi thành {0,1,2,3}, phải xét lại biên q=3: P(3)=24 triệu đồng, không thể áp dụng máy móc giá trị đỉnh q=4.



---

### M1–M3 — Original reviewed authoring material 1/5

**SOURCE_PATH:** `prototypes/thpt/content-drafts/topic-functions/Temp_TOPIC_FUNCTIONS_M1_M3_VERTICAL_FOUNDATIONS_PED_DELTA_R01_20261107.md`  
**SOURCE_GIT_BLOB:** `fcecb2c97fe7799124809c47045f2087d333afa9`  
**CURRENT_SCOPED_VERDICT:** ACADEMIC_PASS_AND_PED_PASS_ACCEPTED, no changed math/solutions/FIG from source

# Chuyên đề Hàm số và đồ thị — M1–M3: Từ một quy tắc đến một đồ thị biết đọc

**PACKET_ID:** THPT-TOPIC-FUNCTIONS-M1-M3-VERTICAL-BRIDGE-R01-20261107  
**TRẠNG THÁI:** AUTHORING DELTA_C bổ sung cách diễn giải tự học / CHƯA Academic+PED PASS cho phần mới. Không tạo một bản G10 R01 khác, không tuyên bố toàn Topic CONTENT_READY.  
**CHUẨN DUY NHẤT:** SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18; D1–D6/PED1–PED6 là các lát kiểm toán của cùng chuẩn.  
**HÀNH TRÌNH:** TOPIC tự đủ, learner-facing chỉ **Kiến thức / Luyện tập / Tự kiểm tra**, không Core riêng; M1–M3 là **mạch tư duy**, không phải ba tab cố định hoặc ba bài SGK.  
**QUYỀN THẨM QUYỀN CỦA NGUỒN:** G10 Topic R01 B15–B16 immutable source Git blob `57eaf0141a5db9bfba91f0e6c863fc7dcc638068` tại Draft PR #672; owner NotebookLM v2.0 **Academic PASS có phạm vi G10 10 outcomes**, receipt Git blob `95e34644c4520adf748cfe3118d8726a5202e3e3`. Review này **không truyền PASS** sang lời giải thích mới ở đây, cũng không được đòi review lại snapshot G10 bất biến chỉ vì có bridge mới.  
**SGK S1 trực tiếp:** SGK KNTT Toán 10 Tập 2, B15 **trang in 4–10 = PDF 1-based 5–11**, B16 **trang in 11–18 = PDF 12–19**; bản PDF gốc image-only, SHA256 `ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6`. Đã xem các trang gốc gồm ví dụ từ bảng/đồ thị/từng đoạn/biến thiên, parabol/đỉnh/trục, mô hình quây vườn và bài tập. **SBT G10 Tập 2 chưa được mở lại trực tiếp trong lượt này**; historical G10 source/receipt ghi B15 trang in 3–9, B16 10–15, nhưng đây là **chỉ dẫn nguồn lịch sử, chưa phải direct-PDF receipt mới**.  
**KHO CÂU:** các EX/TRY dưới đây là **minh họa học liệu**, không tạo ITEM_ID mới/nguồn đáp án chấm điểm mới; ngân hàng G10 đã review chỉ được dùng chung theo một ID/solution/rubric và placement Topic. Không xuất private RD1.

> **Một câu hỏi nối cả Chuyên đề:** Khi một đại lượng thay đổi, ta phải biết ba điều trước khi tính toán: *đầu vào nào được phép; quy tắc cho ta điều gì; và kết luận áp dụng đến đâu?* Đồ thị làm rõ câu chuyện đó. Parabol chỉ là một kiểu quan hệ; về sau em gặp dao động, tăng trưởng mũ, giới hạn và đạo hàm nhưng vẫn trả lời chính ba câu hỏi ấy.

## Một ví dụ có thể được giảng ở nhiều vị trí nhưng không thành hai nguồn

Các nhãn **EX-M1/2/3** trong bản thảo chỉ là **nhãn vị trí để tác giả rà soát**, không phải canonical `example_id` hoặc `item_id`. Đối chiếu exact source G10 R01 cho thấy EX-M1-01 dùng chung VD01; EX-M1-02 dùng chung VD02; EX-M1-03 và EX-M3-04 cùng quay về **một VD08**; EX-M2-01 dùng chung VD03; EX-M3-01, EX-M3-02, EX-M3-03 tương ứng VD05, VD06, VD07. Phần diễn giải mới dưới đây chỉ giúp người học đọc ý nghĩa trong Topic; khi chuẩn hóa ngân hàng cần trỏ **cùng source example/version**, không giữ một phiên bản bài toán và lời giải thứ hai theo tiền tố M1/M2/M3. EX-M2-02 và EX-M2-03 là ví dụ **giảng giải cầu nối mới** chưa được phản biện. **G10 R01/VD04** (hàm từng đoạn tính tiền khác dữ kiện) vẫn là ví dụ riêng đã có; không nhận EX-M2-03 là bản sửa của VD04. Việc thêm/thay cách giảng là DELTA_C cần NotebookLM review phần mới; không chỉnh snapshot G10 bất biến.

## M1 — Hàm số không phải một biểu thức, mà là một quy tắc có miền đầu vào

### Tại sao cần định nghĩa đầu vào trước?

Một thiết bị tính tiền trả \(y=8x\) nghìn đồng cho \(x\) vé. Nếu x là **số vé thực bán**, các giá trị hợp lệ là \(D=\{0,1,2,\ldots\}\); 2,5 vé không phải một đầu vào được phép. Nếu coi \(y=8x\) đơn thuần như biểu thức đại số thì có thể tính ở x=2,5, nhưng kết quả **không mô tả đúng việc bán nguyên vé**. Hàm số phải gắn quy tắc với tập xác định.

**Khái niệm hình thành:** Một hàm số \(f:D\to\mathbb R\) gán cho **mỗi** \(x\in D\) **đúng một** số thực \(f(x)\). Không yêu cầu hai x khác nhau phải cho hai kết quả khác nhau. \(\mathrm{Range}(f)=\{f(x):x\in D\}\) là tập giá trị **đầu ra thật nhận được**; không nhầm với tập tất cả số thực hay tập đích ký hiệu khi định nghĩa.

**EX-M1-01 — Bảng có x lặp, tại sao vẫn là hàm?**

| x | 0 | 1 | 1 | 3 |
|---|---:|---:|---:|---:|
| y | 2 | 4 | 4 | 9 |

Với đầu vào 1, cả hai hàng đều cho 4: không có mâu thuẫn, đây vẫn là hàm số trên \(D=\{0,1,3\}\) với tập giá trị \(\{2,4,9\}\). Nếu một hàng thay thành \(x=1,\ y=7\), cùng x lại sinh 4 và 7 nên **không còn quy tắc đơn trị**. **Lý do kiểm như thế:** nhiệm vụ là xác minh “mỗi x cho đúng một y”, không phải kiểm mỗi y chỉ thuộc một x.

**TỰ THỬ M1-T01.** Bảng \(x=(0,1,2)\), \(y=(5,5,8)\) có phải hàm số không? Tập giá trị có ba phần tử không?
<details><summary>Đã suy nghĩ? Mở đối chiếu</summary>
Có, mỗi x có đúng một y. Tập giá trị \(\{5,8\}\) có hai phần tử, vì giá trị 5 lặp không làm nó thành giá trị mới. Nếu còn nhầm “hàm số” với “một-một”, quay lại EX-M1-01.
</details>

### Khi một công thức có nhiều điều kiện, phải lấy giao

**EX-M1-02 — Miền căn và mẫu:** \(g(x)=\dfrac{\sqrt{x+2}}{x-1}\). Căn đòi \(x+2\ge0\Rightarrow x\ge-2\); mẫu đòi \(x-1\ne0\Rightarrow x\ne1\). Hai điều kiện cùng đúng cho miền
\[
D=[-2,1)\cup(1,+\infty).
\]
**Tại sao x=−2 được nhận?** \(\sqrt0=0\) hợp lệ, còn mẫu −3 khác 0. **Tại sao x=1 bị loại?** Mẫu bằng 0, bất kể căn có nghĩa.

**EX-M1-03 — Miền toán học khác miền dữ liệu:** mô hình \(F(q)=-(q-4)^2+25\), q là số sản phẩm nguyên trong ngày và \(0\le q\le8\). Hàm đa thức xác định trên mọi số thực **về mặt đại số**; nhưng trong mô hình doanh nghiệp chỉ xem q thuộc \(\{0,1,\ldots,8\}\). Đỉnh tại q=4 là một phương án có thể sản xuất. Nếu sau đó dữ kiện giới hạn chỉ 0–3 sản phẩm, kết luận tốt nhất phải đổi. **Không làm tăng chiều sâu chỉ bằng thay số:** đây là bài đọc miền và điều kiện, không phải một canonical item mới.

**TỰ THỬ M1-T02.** \(h(x)=\sqrt{5-x}/(x-1)\). Điều kiện nào đến từ căn, điều kiện nào đến từ mẫu? \(x=5\) có được nhận không?
<details><summary>Đã làm? Mở đối chiếu</summary>
Cần \(5-x\ge0\Rightarrow x\le5\), và \(x\ne1\). Vậy \(D=(-\infty,1)\cup(1,5]\); x=5 được nhận vì căn bằng 0 và mẫu bằng 4. Nếu loại x=5, em đã dùng nhầm điều kiện “căn phải dương” thay vì “không âm”.
</details>

## M2 — Đọc bảng và đồ thị: Điều gì biết chắc, điều gì mới là phỏng đoán?

### Một đồ thị không tự sinh thêm dữ kiện

Một bảng đo nhiệt độ ở 8 giờ, 12 giờ và 16 giờ **chỉ xác nhận các số liệu được đo ở ba thời điểm**. Nếu ta nối chúng bằng một đường cong, phần giữa là **giả định mô hình hay cách nội suy**, không thể khẳng định nhiệt độ thật tại 10 giờ chỉ từ ba điểm. Trục ngang cho biết đại lượng **đầu vào và đơn vị**, trục đứng là **đầu ra và đơn vị**; dấu chấm rỗng/đặc nói điểm có thuộc miền hay không.

**EX-M2-01 — Kiểm tra điểm trên đồ thị:** \(f(x)=|x-3|+2\), miền \(\mathbb R\). Điểm \(A(1,4)\) thuộc vì \(f(1)=4\). Điểm \(B(4,4)\) không thuộc vì \(f(4)=3\), dù cả x=4 và y=4 đều là số hợp lệ riêng lẻ. Đỉnh chữ V \((3,2)\) là giá trị nhỏ nhất, tập giá trị \([2,+\infty)\). **Chọn cách kiểm bằng thay x** vì câu hỏi là một **điểm**, chưa cần phương pháp đạo hàm hay đồ thị chi tiết.

### “Đồng biến” là một kết luận trên cả khoảng, không phải hai phép đo

Với \(K\) là một **khoảng** trong miền, ta gọi hàm **đồng biến nghiêm ngặt** nếu với mọi \(x_1<x_2\in K\), \(f(x_1)<f(x_2)\); nghịch biến nghiêm ngặt nếu luôn \(f(x_1)>f(x_2)\). Lưu ý một số tài liệu dùng “không giảm” theo nghĩa yếu; trong nội dung này khi ghi đồng biến/nghịch biến dùng bất đẳng thức **nghiêm ngặt** để tránh đổi nghĩa giữa bài.

**EX-M2-02 — Hai điểm giống nhau không nói cả khoảng:** \(f(x)=x^2\). Trên \((-\infty,0)\), khi x tăng từ −3 đến −1, f giảm từ 9 xuống 1; trên \((0,+\infty)\), f tăng. Trục tung phân cách hai hướng. Không được nói “hàm luôn tăng” chỉ vì thấy đồ thị nửa bên phải đi lên. **Nếu miền rời thành nhiều khoảng**, chỉ kết luận tăng/giảm trên từng khoảng khi có bằng chứng, không nối qua điểm bị loại như các hàm tan/cot và phân thức ở M4/M7.

**TỰ THỬ M2-T01.** \(f(x)=x^2\) trên \(D=[-3,-1]\). Hàm tăng hay giảm? Tìm GTLN/GTNN trên chính D.
<details><summary>Đã tự thử? Mở đối chiếu</summary>
Với x âm tiến dần đến 0, bình phương giảm, nên hàm giảm trên D; GTLN \(f(-3)=9\), GTNN \(f(-1)=1\). Không áp dụng “parabol mở lên nên luôn tăng”.
</details>

### Đọc đúng điểm chuyển công thức

**EX-M2-03 — Một mô hình giá theo thời lượng:** cho \(P(t)=5t\) (nghìn đồng) nếu \(0\le t\le2\); và \(P(t)=10+3(t-2)\) nếu \(t>2\), t tính bằng giờ. Đúng tại t=2, ta dùng nhánh đầu và \(P(2)=10\); t=3 dùng nhánh hai cho \(P(3)=13\). Hai nhánh tiến tới **cùng** giá trị 10 ở t=2: đồ thị không có bước nhảy tại mốc đó, nhưng vẫn **đổi độ dốc**. Đây là mô hình tính giờ lẻ liên tục giả định, không tự suy dịch vụ thực tế thu tiền đúng như công thức.

**TỰ THỬ M2-T02.** Giả sử nhánh thứ hai thay bằng \(P(t)=12+3(t-2)\) khi t>2, còn nhánh đầu giữ nguyên. Giá ngay ở t=2 là bao nhiêu? Đồ thị có bậc nhảy không?
<details><summary>Đã thử? Mở đối chiếu</summary>
Tại t=2 dùng nhánh đầu nên \(P(2)=10\). Khi t tiến đến 2 từ bên phải, giá tiến tới 12, cao hơn 10; đồ thị có bước nhảy, không liên tục tại mốc. Nếu ghi P(2)=12, em đã bỏ qua điều kiện t>2 của nhánh thứ hai.
</details>

**D5 chỉ dẫn đọc hình, không tạo FIG mới:** minh họa SGK B15 ở PDF 1-based p8/p9 gồm đồ thị, bảng tăng/giảm và mô hình theo khối lượng/tốc độ. Khi dựng tại Topic, nguồn hình phải có ID, chú giải trục/đơn vị, mốc thuộc miền, mô tả bằng chữ đủ hiểu khi hình không tải và không ép học sinh mở SGK. Một hình đồ thị không thay lời giải về **vì sao** kết luận tăng/giảm đúng.

## M3 — Vì sao parabol có một “điểm ngoặt”, và đỉnh không luôn là lựa chọn tối ưu?

### Hình thành bản chất bằng bình phương, không học thuộc tọa độ đỉnh trước

Với hàm bậc hai \(f(x)=ax^2+bx+c\), **\(a\ne0\)**. Trên miền toán học \(\mathbb R\), ta có
\[
f(x)=a\left(x+\frac b{2a}\right)^2+c-\frac{b^2}{4a}
=a(x-h)^2+k,\quad h=-\frac b{2a},\ k=f(h).
\]
Do \((x-h)^2\ge0\), khi a>0 đồ thị có giá trị **nhỏ nhất** k trên \(\mathbb R\), khi a<0 có giá trị **lớn nhất** k. Hai điểm \(x=h-d\) và \(x=h+d\) có cùng đầu ra vì các bình phương bằng nhau; trục đối xứng là **\(x=h\)**, đỉnh **\(I(h,k)\)**. Nếu \(a=0\), biểu thức chỉ là bậc nhất/hằng, không gọi parabol.

**EX-M3-01 — Đỉnh, trục, chiều mở đều xuất phát từ một phép biến đổi:** \(f(x)=2x^2-8x+3=2(x-2)^2-5\). Vì 2>0 nên parabol mở lên, đỉnh I(2,−5), trục x=2, GTNN toàn R −5. Lấy các điểm đối xứng \(f(1)=f(3)=-3\), giao Oy \((0,3)\). Không cần đoán các điểm từ một bức hình mờ.

**TỰ THỬ M3-T01.** \(f(x)=-x^2+6x-5\). Đưa về dạng đỉnh, nêu chiều mở, đỉnh và giá trị lớn nhất trên toàn \(\mathbb R\).
<details><summary>Đã biến đổi? Mở đối chiếu</summary>
\(f(x)=-(x-3)^2+4\), mở xuống, đỉnh \((3,4)\), GTLN toàn R là 4. Nếu ra −4, hãy khai triển \(-(x-3)^2+4=-x^2+6x-5\) để kiểm dấu.
</details>

### Một parabol có thể không gặp trục hoành

**EX-M3-02 — Phải kiểm nghiệm trước khi vẽ giao trục:** \(f(x)=x^2-6x+11=(x-3)^2+2>0\) với mọi x. Đồ thị mở lên, đỉnh \((3,2)\) nằm **trên** Ox và không cắt Ox. Cùng kết luận từ \(\Delta=(-6)^2-4\cdot1\cdot11=-8<0\). Giao Oy \((0,11)\) luôn có nếu miền là R; nhưng trong mô hình hạn chế miền chỉ giữ giao Oy khi x=0 được phép. **Vì sao chọn cách bình phương?** Nó cho ngay khoảng giá trị và chiều mở; biệt thức cho số nghiệm/giao Ox; hai công cụ bổ sung nhau.

### Phải xét miền mô hình trước khi tìm cực trị

**EX-M3-03 — Đỉnh ngoài miền, kết luận khác đi:** \(g(x)=-(x-5)^2+20\) nhưng chỉ xét \(D=[0,3]\). Đỉnh ở x=5 **không thuộc D**. Vì x tăng từ 0 đến 3 thì \((x-5)^2\) giảm, g tăng trên đoạn. \(g(0)=-5\), \(g(3)=16\): GTNN −5, GTLN 16, không phải 20. **Tại sao không dùng thẳng công thức k?** k là GTLN của *toàn R*, trong khi bài hỏi miền con.

**TỰ THỬ M3-T02.** Hàm \(p(x)=(x+2)^2-4\) chỉ xét trên \([-1,2]\). Có được nhận GTNN −4 của parabol toàn R không? Tìm GTNN/GTLN trong miền đã cho.
<details><summary>Đã thử? Mở đối chiếu</summary>
Không, đỉnh x=−2 nằm ngoài \([-1,2]\). Trên đoạn này x+2>0 nên p tăng; \(p(-1)=-3\) là GTNN, \(p(2)=12\) là GTLN. Nếu em nhận −4, quay lại bước so đỉnh với miền.
</details>

**EX-M3-04 — Tối ưu với số lượng nguyên và giới hạn thực tế:** mô hình lợi nhuận \(L(q)=-(q-4)^2+25\) triệu đồng, số lượng sản phẩm nguyên trong \(\{0,1,\ldots,8\}\). Đỉnh q=4 là số nguyên hợp lệ và cho GTLN 25 triệu đồng. Nếu chỉ có thể làm tối đa 3 sản phẩm, miền đổi thành \(\{0,1,2,3\}\), giá trị tốt nhất là \(L(3)=24\) triệu đồng. **Không biến đáp án trong miền khác thành đáp án của bài mới.**

**D5 chỉ dẫn đọc hình:** hình SGK B16 PDF p14–16 cho trục, đỉnh, chiều mở và mốc giá trị; minh họa R4 canonical ở `docs/thpt-preview/sgk/chuong-vi/bai-16.md` có đỉnh I(2,−1), trục x=2, giao Ox 1/3 và giao Oy 3. Khi hiển thị trong Topic, phải dùng **chính một nguồn hình/source**, kiểm tọa độ tương ứng giữa caption và graph, chỉ rõ nếu miền ứng dụng chỉ là một đoạn parabol.

**TỰ THỬ M3-T03.** \(u(x)=x^2-6x+8\). Tìm trục, đỉnh và các giao Ox; giải thích vì sao hai nghiệm cách trục một khoảng bằng nhau.
<details><summary>Đã tự làm? Mở đối chiếu</summary>
\(u=(x-3)^2-1\). Đỉnh (3,−1), trục x=3; \(u=0\iff(x-3)^2=1\) nên x=2 hoặc 4. Hai nghiệm đối xứng vì nằm tại 3−1 và 3+1. Nếu quên lý do đối xứng, quay lại bình phương \((x-h)^2\).
</details>

## Cầu nối để em không phải học lại khi lên lớp 11–12

- M1 cho em **miền**. Nó quyết định chỗ nào phép log/căn/tiệm cận/đạo hàm ở M4–M7 có nghĩa và chỗ nào mô hình vật lý bắt buộc loại.
- M2 cho em **cách đọc và giới hạn chứng cứ**. Khi gặp hàm lượng giác chia thành nhánh, giới hạn một phía hay tiếp tuyến, em luôn kiểm điểm rỗng/đặc, khoảng và ý nghĩa trục.
- M3 cho em ý nghĩa **cực trị** xuất phát từ dạng bình phương. Sau này M7 dùng dấu đạo hàm cho họ hàm phức tạp hơn, nhưng vẫn phải kiểm miền và phân biệt **cực trị địa phương** với **GTLN/GTNN trên miền hỏi**.
- **Không tạo Chuyên đề chia theo lớp.** Người học có thể đi thẳng đến mảng cần thiết, với lời nhắc tiền đề và liên kết nội bộ trong cùng Topic.

## Hỗ trợ khắc phục lỗi D6/PED6 ngay trong hành trình Topic

| Biểu hiện người học | Lỗi bản chất | Đường sửa ngay trên trang |
|---|---|---|
| Gọi bảng có hai x khác nhau cùng y là không phải hàm | Nhầm đơn trị với một-một | M1 EX01 + TRY T01; canonical HELP-G10-B15-01 |
| Quên x=−2 được nhận trong căn hoặc quên x=1 bị loại ở mẫu | Không lấy giao điều kiện, nhầm dấu căn | M1 EX02 + TRY T02; canonical HELP-G10-B15-02 |
| Dự đoán số đo giữa hai mốc như chắc chắn | Nhầm nội suy mô hình với dữ kiện đã quan sát | M2 lời dẫn + EX01; phải hỏi nguồn chứng cứ |
| Nói hàm tăng từ hai điểm hay nối qua điểm loại | Chưa kiểm “mọi cặp x” trên một khoảng | M2 EX02 + TRY T01; HELP-G10-B15-02 |
| Thay nhánh sai ở điểm nối | Bỏ điều kiện \(<,\le\) | M2 EX03 + TRY T02; HELP-G10-B15-02 |
| Đưa đỉnh/parabol ra ngoài miền mô hình | Quên miền khả thi | M3 EX03/04 + TRY T02; HELP-G10-B16-02 |
| Bảo parabol nào cũng cắt Ox | Nhầm chiều mở với vị trí so trục | M3 EX02; HELP-G10-B16-02 |
| Nhầm dấu a, trục x=h, hoặc bình phương hoàn chỉnh | Không hiểu vì sao có đỉnh | M3 EX01 + TRY T01/T03; HELP-G10-B16-01 |

**Quy tắc một nguồn:** HELP bốn ID trên thuộc thư viện SGK đã có, không viết lại canonical question/answer/rubric vào một thư viện Topic thứ hai. Đây là **lời dẫn sư phạm mới** bên cạnh nguồn cũ, không chứng minh HELP cũ tự đủ mọi sai lầm mới. Học sinh ở Topic phải xem được hướng chữa ngay ở Topic, không buộc mở SGK.

## Sơ đồ evidence theo 10 outcome G10 đã có, không nhân bản ID

| G10 immutable outcome | Vai trò giải thích mới (DELTA_C only) | Câu gốc/FIG/HELP |
|---|---|---|
| TOP-G10-FUNC-O01 | M1, EX01, TRY T01, đơn trị | SGK B15 C01; HELP B15-01 |
| TOP-G10-FUNC-O02 | M1 EX02, TRY T02, giao điều kiện và miền thực tế | B15 C02/P01; HELP B15-02 |
| TOP-G10-FUNC-O03 | M2 EX01, đọc trục/điểm/chứng cứ, không ngoại suy | B15 core/Topic P01 cũ |
| TOP-G10-FUNC-O04 | M2 EX02, TRY T01, tăng giảm trên khoảng | B15 P03; HELP B15-02 |
| TOP-G10-FUNC-O05 | M2 EX03, TRY T02, điểm nối/hàm từng đoạn | B15 P02/WRITTEN-15-02; HELP B15-02 |
| TOP-G10-FUNC-O06 | M3 định nghĩa a≠0, đối chứng với đường thẳng | Topic P02 source immutable; HELP B16-01 |
| TOP-G10-FUNC-O07 | M3 bình phương→đỉnh/trục và TRY T01 | Topic P03; HELP B16-01 |
| TOP-G10-FUNC-O08 | M3 EX02, TRY T03, giao trục và \(\Delta\) | Topic P04; HELP B16-02; FIG B16 |
| TOP-G10-FUNC-O09 | M3 EX03, TRY T02, cực trị miền con | Topic P05; HELP B16-01/B16-02 |
| TOP-G10-FUNC-O10 | M3 EX04, miền số nguyên/mô hình, nối M7 | Topic P06; HELP B16-02 |

**Có đủ 10 hàng không chứng minh đủ D1–D6/PED.** Đặc biệt QA độc lập phải kiểm phép nối từ G10 sang M4–M7 và xem có lặp/đổi nội dung đã review hay không.

**KHOÁ TRẠNG THÁI:** `G10_HISTORICAL_ACADEMIC_PASS_PRESERVED`; `M1_M3_NEW_PED_DELTA_C_PENDING_REVIEW`; `SGK_G10_T2_S1_DIRECT_SCOPED`; `SBT_G10_T2_DIRECT_THIS_TURN=NOT_VERIFIED`; `NEW_ITEM_ID=0`; `TOPIC_READINESS_G10_PASS_NOT_FULL_VERTICAL_PASS`; `FULL_TOPIC_CONTENT_READY=NO`; `RELEASE=NO`.


---

### M4 — Original reviewed authoring material 2/5

**SOURCE_PATH:** `prototypes/thpt/content-drafts/topic-functions/Temp_TOPIC_FUNCTIONS_M4_TRIG_EXP_LOG_D1_D6_AUTHORING_R01_20261107.md`  
**SOURCE_GIT_BLOB:** `a3db248040abe2109410614f2f11f5ef84aff422`  
**CURRENT_SCOPED_VERDICT:** ACADEMIC_PASS_AND_PED_PASS_ACCEPTED, no changed math/solutions/FIG from source

# Chuyên đề Hàm số và đồ thị — M4: Những kiểu thay đổi không giống parabol

**SOURCE_TYPE:** AUTHORING CANDIDATE / DELTA_C_NEW_TOPIC; chưa Academic/PED PASS.  
**PACKET:** THPT-TOPIC-FUNCTIONS-M4-R01-20261107  
**LEARNING_PATH:** TOPIC; **SCOPE:** M4, lớp 11, học độc lập trong Chuyên đề (KHÔNG phải bài SGK 3/20)  
**STANDARD:** SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18; Q09–Q14 được diễn giải linh hoạt, không là bố cục cố định  
**OUTCOMES CANDIDATE:** TOP-FUNC-M4-O01..O10; chỉ khóa thành canonical sau Q01/Q02 và review.  
**SOURCE S1:** SGK KNTT 11 T1 B03, trang in 22–30 = PDF 1-based 23–31; SGK 11 T2 B20, trang in 16–19 = PDF 17–20. Đã **đọc trực tiếp toàn bộ 9 + 4 trang** của hai bài; bản scan PDF SHA256 lần lượt \`4492122eb2c9df626582d37b5c3d0e6513d66ca68d80d8a1e69577aa8b706828\` và \`14ec0da7fa3d7c7365ed7f64599fc1e26484eccf1557301c57012ae64338e491\`.  
**SOURCE SBT:** SBT KNTT 11 T1 B03, trang in 11–18 = PDF 12–19, SHA256 \`fb5292103e5b682531ce37b5f30598393bba81b2943da9c1a374fdeb56557229\`; SBT 11 T2 B20, trang in 11–15 = PDF 12–16, SHA256 \`a7c3d5ee9770377e16d7df97c531a2bc081fa47c8266fd4ad3438cba0d04e189\`. Đã nhìn trực tiếp các trang và dạng ví dụ/bài tập, không chép nguyên văn/câu/bảng gốc.  
**CANONICAL_POLICY:** các EX/TRY/P/WRI/HELP ở R01 dưới đây đều là **candidates mới**, KHÔNG phải canonical đã đăng ký, không đánh đồng với item SGK. Những bài SGK dùng chung sẽ tham chiếu một ID hiện có bằng placement TOPIC, không clone answer/solution/rubric.  
**MASTERy/RD1:** không có, không dùng làm bài đánh giá chính thức.

## M4.0. Khởi động: Không phải đại lượng nào cũng thay đổi như một đường parabol

Em đã biết bảng giá trị và đồ thị có thể cho biết đại lượng đang tăng hay giảm. Nhưng có những tình huống rất khác:

- Nhiệt độ thay đổi lên xuống, rồi một kiểu biến thiên có thể lặp lại.
- Giá trị một khoản tiền tăng theo cùng **tỉ lệ** sau mỗi kỳ, chứ không phải tăng thêm cùng một lượng.
- Có lúc ta biết kết quả sau nhiều kỳ nhưng muốn tính ngược xem **sau bao nhiêu kỳ** đạt được kết quả ấy.

Để chọn đúng cách mô tả, em hỏi ba điều: *đại lượng lặp lại hay tích lũy? đầu vào được phép là gì? nhìn đồ thị có thể kết luận gì và chưa thể kết luận gì?* Phần này học ngay trong Chuyên đề, không yêu cầu mở bài SGK nào trước.

**Kiến thức chuẩn bị ngay tại đây.** Góc có thể đo bằng radian: một vòng tròn là \(2\pi\) radian, nửa vòng là \(\pi\), một phần tư vòng là \(\pi/2\). Trên đường tròn đơn vị, điểm \(M\) ứng với góc \(x\) có hoành độ \(\cos x\) và tung độ \(\sin x\); từ đó \(\cos^2x+\sin^2x=1\). Em không cần thuộc một danh sách giá trị trước khi xem bảng điểm mốc ở M4.2.

## M4.1. Trước khi nhìn dạng cong: Đồ thị có đối xứng hay lặp lại không?

### Hàm chẵn và hàm lẻ là gì?

Xét \(f(x)=x^2\). Thử \(x=2\) và \(-2\) đều cho \(4\), nên đồ thị trái và phải trục tung khớp nhau. Nếu \(f(-x)=f(x)\) với **mọi** \(x\) được phép thì ta gọi là hàm **chẵn**; đồ thị đối xứng qua trục \(Oy\).

Với \(g(x)=x^3\), \(g(-x)=-g(x)\): quay đồ thị một nửa vòng quanh gốc \(O\) thu lại cùng đồ thị. Đó là hàm **lẻ**, đối xứng qua gốc tọa độ.

**Điều kiện không được bỏ:** tập xác định \(D\) của hàm chẵn/lẻ phải đối xứng qua 0: nếu \(x\in D\) thì \(-x\in D\). Chỉ thử \(x=1\) và \(-1\) chưa thể chứng minh cho mọi \(x\). Một hàm **không nhất thiết** chẵn hoặc lẻ, ví dụ \(x^2+x\). Và hàm lẻ không nhất thiết có điểm \((0,0)\): chẳng hạn \(\cot x\) không xác định tại 0. Nếu miền không đối xứng thì không gọi chẵn/lẻ theo định nghĩa trên.

### Hàm tuần hoàn: "lặp" có nghĩa toán học chính xác

Một hàm có **chu kỳ** \(T>0\) nếu với mọi \(x\in D\), \(x+T\) và \(x-T\) vẫn nằm trong \(D\), đồng thời \(f(x+T)=f(x)\). Cả **miền** cũng cần lặp, không phải chỉ vài điểm trùng giá trị. Nếu có chu kỳ dương nhỏ nhất, ta gọi là **chu kỳ cơ bản**.

Ví dụ \(f(x)=\sin x\) lặp lại sau \(2\pi\) vì quay thêm một vòng thì tung độ không đổi. Khi đối số có hệ số, \(h(x)=\sin(3x)\) lặp sau \(T=2\pi/3\), vì \(3(x+T)=3x+2\pi\). Hệ số lớn làm đồ thị lặp **nhanh hơn**, không làm chu kỳ dài gấp ba.

**Phản ví dụ quan trọng:** hàm hằng \(f(x)=4\) có mọi số \(T>0\) là chu kỳ, nhưng không có **chu kỳ dương nhỏ nhất**. Và một dao động có chu kỳ 12 giờ không nhất thiết có biên độ 12: chu kỳ đo trên trục **đầu vào**, còn biên độ là độ lệch lớn nhất so với mức trung bình trên trục **đầu ra**.

**TRY-M4-01 — Tự thử trước ví dụ.** \(u(x)=x^4\) trên \(\mathbb R\) có đối xứng qua trục tung không? \(v(x)=x^3\) đối xứng qua đâu? Vì sao chỉ nhìn vài điểm chưa đủ chứng minh?
<details><summary>Đã nghĩ xong? Mở phần đối chiếu</summary>
Vì \(u(-x)=(-x)^4=x^4=u(x)\), u chẵn, đối xứng qua trục tung. Vì \(v(-x)=(-x)^3=-v(x)\), v lẻ, đối xứng qua gốc O. Hai khẳng định dùng công thức cho mọi x, không dựa vào vài điểm.
</details>

## M4.2. Từ một vòng quay đến bốn loại đồ thị lượng giác

### Cách đọc đường tròn đơn vị và bảng mốc

Khi \(M\) di chuyển hết một vòng, tọa độ chạy qua các điểm mốc sau:

| Góc \(x\) | \(0\) | \(\pi/2\) | \(\pi\) | \(3\pi/2\) | \(2\pi\) |
|---|---:|---:|---:|---:|---:|
| \(\sin x\) — tung độ | 0 | 1 | 0 | −1 | 0 |
| \(\cos x\) — hoành độ | 1 | 0 | −1 | 0 | 1 |

Vì M luôn thuộc đường tròn bán kính 1, \(-1\le\sin x,\cos x\le1\). Bảng có **năm mốc giúp đọc hình**, nhưng để kết luận tăng/giảm trên cả khoảng cần dùng đường tròn hoặc tính chất/đồ thị, không suy chỉ từ hai đầu mút.

### Hàm sin

Hàm \(y=\sin x\) có tập xác định \(\mathbb R\), tập giá trị \([-1,1]\); là **hàm lẻ**, chu kỳ cơ bản \(2\pi\). Đồ thị đi qua gốc O; một chu kỳ có thể bắt đầu tại \((0,0)\), đạt 1 ở \(\pi/2\), về 0 ở \(\pi\), tới −1 ở \(3\pi/2\), rồi trở về 0 tại \(2\pi\).

Với \(k\in\mathbb Z\): hàm đồng biến trên từng khoảng \((-\pi/2+2k\pi,\ \pi/2+2k\pi)\) và nghịch biến trên từng khoảng \((\pi/2+2k\pi,\ 3\pi/2+2k\pi)\). Các đầu mút có thể được xét khi giải bài toán tăng/giảm trên đoạn; đừng tự suy một khoảng dài đi qua nhiều cực trị vẫn đồng biến.

### Hàm cos

Hàm \(y=\cos x\) cũng có tập xác định \(\mathbb R\), tập giá trị \([-1,1]\), chu kỳ cơ bản \(2\pi\), nhưng là **hàm chẵn**, đối xứng qua trục tung. Tại \(x=0\) đồ thị ở mức 1; tại \(\pi/2\) bằng 0; tại \(\pi\) bằng −1.

Với \(k\in\mathbb Z\): cos nghịch biến trên từng khoảng \((2k\pi,\ (2k+1)\pi)\) và đồng biến trên từng khoảng \(((2k-1)\pi,\ 2k\pi)\). Nếu hỏi khoảng trong đoạn cụ thể, hãy giao những khoảng này với đoạn đầu vào đã cho, không chép nguyên các mốc ở một chu kỳ khác.

### Vì sao tan và cot bị "đứt" thành từng nhánh?

Ta định nghĩa \(\tan x=\sin x/\cos x\), chỉ khi \(\cos x\ne0\); vì vậy \(D_{\tan}=\mathbb R\setminus\{\pi/2+k\pi:k\in\mathbb Z\}\). Tương tự, \(\cot x=\cos x/\sin x\), chỉ khi \(\sin x\ne0\); \(D_{\cot}=\mathbb R\setminus\{k\pi:k\in\mathbb Z\}\).

Cả tan và cot đều có tập giá trị \(\mathbb R\), **hàm lẻ** trên miền tương ứng và chu kỳ cơ bản \(\pi\). Trên mỗi khoảng xác định nối liền hai giá trị bị loại kề nhau, tan **đồng biến**: \((-\pi/2+k\pi,\ \pi/2+k\pi)\); cot **nghịch biến**: \((k\pi,\ (k+1)\pi)\).

Khi x đến gần một điểm loại, giá trị có thể tăng/giảm vô hạn; đồ thị có nhánh tiến sát đường thẳng đứng. **Không nối qua tiệm cận đứng**; không thế vào phép chia có mẫu bằng 0. Ví dụ \(\tan0=0\) nhưng \(\cot0\) không xác định; \(\tan(\pi/4)=\cot(\pi/4)=1\). Không nói "tan tăng trên cả \(\mathbb R\)" vì tan không được xác định tại những điểm loại.

### Đọc đồ thị bằng năm câu hỏi

1. Trục ngang đang đo **góc** theo radian hay một đại lượng thời gian đã quy đổi? Trục đứng có đơn vị gì?
2. Miền đầu vào liên tục hay có các **điểm bị loại**?
3. Giá trị đầu ra nằm trong \([-1,1]\) hay không bị chặn?
4. Chu kỳ đọc theo trục x là \(2\pi\) hay \(\pi\)? Có đối xứng qua \(Oy\) hay \(O\)?
5. Hàm tăng/giảm trên **từng khoảng nào**, có nhánh bị ngắt không?

**FIG reuse plan (D5/PED4):** cho phép đặt *trực tiếp trong trang Kiến thức Topic*, không trỏ học sinh qua SGK:
- FIG-G11-B03-01_R01.svg (sin, blob 0ec702b2c7e4059fec5b27ba2e14713b9cb68e34).
- FIG-G11-B03-02_R01.svg (cos, blob e394b70aa5b3e238fd09cd4eac7076e2900193de).
- FIG-G11-B03-03_R01.svg (tan, blob 719bb8bad9d5d041893d64cb455197139f6c75a4).
- FIG-G11-B03-04_R01.svg (cot, blob 784a6486a46ad770a6faf9466301477bcf0a722a).
Render nguồn một lần, có \`FIG_ID\` canonical và nhiều placement. **Không** sao chép/đổi SVG khi không cần; RELEASE chỉ kiểm AP3 trên website đã tích hợp.

**TRY-M4-02.** Khi M quay thêm một vòng, \(\sin(x+2\pi)\) thay đổi không? Khi x tiến đến \(\pi/2\) từ bên trái, \(\tan x\) có thể tiếp tục kéo qua điểm \(\pi/2\) để nối nhánh bên phải không?
<details><summary>Em đã thử? Mở đối chiếu</summary>
Sin giữ nguyên vì cùng tung độ trên đường tròn; tan không xác định ở \(\pi/2\), phải để hai nhánh rời nhau. Nếu em thấy tan là một nét xuyên qua vạch đứng, quay về điều kiện \(\cos x\ne0\).
</details>

## M4.3. Mô tả một dao động thật — phải phân biệt chu kỳ với biên độ

Xét mô hình tự tạo \(T(t)=21+3\cos(\pi t/6)\), nhiệt độ tính bằng °C, \(t\) tính bằng **giờ** và \(t\ge0\). Ở đây 21 là mức trung bình của mô hình, 3 là **biên độ theo trục nhiệt độ**, còn \(\pi/6\) là hệ số đổi một giờ thành góc quay. Chu kỳ là \(P=2\pi/(\pi/6)=12\) giờ.

\(T(0)=24\), \(T(3)=21\), \(T(6)=18\), \(T(12)=24\); miền giá trị theo mô hình là \([18,24]\)°C. **Cảnh báo:** đây là mô hình giả định do tác giả tạo, không phải dự báo nhiệt độ thật; dữ kiện thời tiết thực có thể không lặp đều. Nếu mô hình chỉ được xác nhận trong \(0\le t\le12\), không kéo đồ thị sang 24 giờ rồi gọi là số đo.

**TRY-M4-03.** Nếu \(h(t)=5+2\sin(\pi t/4)\), hãy tự xác định mức giữa, biên độ, chu kỳ và giá trị lớn nhất/nhỏ nhất trong một chu kỳ.
<details><summary>Đã thử? Đối chiếu</summary>
Mức giữa 5, biên độ 2, chu kỳ \(2\pi/(\pi/4)=8\) đơn vị t, khoảng giá trị \([3,7]\). Không gọi 8 là biên độ vì 8 thuộc trục t.
</details>

## M4.4. Khi mỗi bước nhân theo một tỷ lệ: Hàm mũ

**Câu hỏi nảy sinh.** Một tài khoản được cộng thêm 10% số dư sau *mỗi kỳ*. Số tiền không cộng đều một khoản cố định: sau mỗi kỳ nó **nhân 1,1**. Số dư ban đầu \(B_0\), qua \(n\) kỳ nguyên được mô hình hóa \(B(n)=B_0\cdot 1{,}1^n\). Ta cần một quy tắc cho đầu vào là số kỳ hoặc thời gian: đó là lý do xuất hiện hàm mũ.

Với \(a>0,\ a\ne1\), hàm \(y=a^x\) có **biến nằm ở số mũ**; x nhận mọi số thực, giá trị luôn dương, đồ thị qua \((0,1)\) và \((1,a)\), liên tục và có đường tiệm cận ngang \(y=0\) ở phía phù hợp. Nếu \(a>1\), đồ thị **tăng** trên \(\mathbb R\); nếu \(0<a<1\), **giảm** trên \(\mathbb R\). Hàm \(y=x^2\) hay \(y=x^3\) có biến ở **cơ số**, không phải hàm mũ theo định nghĩa này.

Đọc \(2^x\): x từ 0 lên 1 làm giá trị từ 1 lên 2; thêm một đơn vị nữa từ 2 lên 4; khi x giảm xa về phía âm, giá trị tiến gần 0 nhưng không bằng 0. Với \((1/2)^x\), x tăng thì các giá trị \(1,1/2,1/4,\ldots\) giảm; \(x=-2\) cho giá trị 4, vẫn dương. Không suy mọi hàm mũ đều tăng.

**Miền mô hình khác miền toán học:** \(a^x\) xác định trên toàn \(\mathbb R\), nhưng nếu x là số tháng đã trôi qua từ hôm nay thì thường chỉ nhận \(x\ge0\); nếu đề cho cập nhật vào cuối mỗi tháng, x có thể chỉ nhận các số nguyên không âm. Đừng dùng \(x=2{,}5\) tháng như một số liệu đã quan sát khi chưa cho phép nội suy thời gian liên tục.

**TRY-M4-04.** So sánh \(2^x\) và \((1/2)^x\) tại \(x=0,1,2\). Hàm nào tăng khi x tăng? Vì sao không áp dụng kết luận đó cho \(x^2\) trên toàn \(\mathbb R\)?
<details><summary>Đã tính? Mở đối chiếu</summary>
\(2^x:1,2,4\) tăng; \((1/2)^x:1,1/2,1/4\) giảm. \(x^2\) không phải hàm mũ và trên \(\mathbb R\) giảm trước 0 rồi tăng sau 0. Nếu bị nhầm, hãy chỉ đúng vị trí xuất hiện biến x ở công thức.
</details>

## M4.5. Khi biết kết quả và muốn tìm đầu vào: Lôgarit

Nếu \(2^x=8\), em tìm được \(x=3\). Việc hỏi **phải nâng cơ số 2 lên mũ bao nhiêu để được 8** dẫn tới lôgarit: \(\log_2 8=3\). Tổng quát,
\[
 y=\log_a x\quad\Longleftrightarrow\quad a^y=x,\qquad a>0,\ a\ne1,\ x>0.
\]

Lôgarit **không** nhận đầu vào bằng 0 hay âm trong số thực, vì \(a^y>0\). Hàm \(y=\log_a x\) xác định trên \((0,+\infty)\), có tập giá trị \(\mathbb R\), liên tục trên miền, đi qua \((1,0)\) và \((a,1)\); nếu \(a>1\) thì tăng, nếu \(0<a<1\) thì giảm. Khi x tiến về \(0^+\), giá trị tiến ra vô cực theo dấu phụ thuộc cơ số; do đó trục \(x=0\) là **tiệm cận đứng**.

**Vì sao hai đồ thị đối xứng qua \(y=x\)?** Trên hàm mũ, đầu vào x sinh đầu ra y. Trên hàm log cùng cơ số, ta **đổi vai** hai đại lượng: điểm \((p,q)\) trên \(y=a^x\) tương ứng điểm \((q,p)\) trên \(y=\log_a x\). Ví dụ \(3^2=9\) cho cặp \((2,9)\leftrightarrow(9,2)\). Đó là phản xạ qua \(y=x\), **không phải đổi dấu** tọa độ.

Ví dụ cơ số nhỏ hơn 1: \((1/2)^{-3}=8\) nên \(\log_{1/2}8=-3\); \(\log_{1/2}x\) nghịch biến khi x tăng dù tập giá trị vẫn là \(\mathbb R\). Đừng suy log của số lớn hơn 1 luôn dương.

**Khi giải hoặc xét miền:** với \(h(x)=\log_2(x+4)\), điều kiện là \(x+4>0\), tức \(x>-4\). Nếu \(h(x)=3\), thì \(x+4=2^3=8\) nên \(x=4\), và x=4 thỏa miền. **Lý do chọn phương pháp:** ta đảo hàm log sang mũ *sau khi* kiểm điều kiện, không lấy log của đối số âm.

**FIG reuse plan (D5):** FIG-G11-CHVI-B20-01_R00.svg, blob 64bcb465bd6d809095a4ca2b910555e314badb69. Đặt trực tiếp tại Topic với chú thích: tìm cặp \((0,1)\leftrightarrow(1,0)\), \((1,a)\leftrightarrow(a,1)\); đường \(y=x\) là trục phản xạ; đọc miền x dương của log và hướng tăng/giảm tương ứng. Bản SVG hiện là nguồn chia sẻ; kiểm cách hiển thị thực thuộc AP3 ở RELEASE.

**TRY-M4-05.** Không dùng máy tính, hãy tìm \(\log_3(1/9)\) và cho biết \(\log_3(-9)\) có nghĩa trong số thực không.
<details><summary>Đã thử? Mở đối chiếu</summary>
\(3^{-2}=1/9\), vậy \(\log_3(1/9)=-2\). \(\log_3(-9)\) không xác định trong \(\mathbb R\). Nếu vướng, quay lại điều kiện \(x>0\) của hàm log.
</details>

## M4.6. Ví dụ có suy luận — phải chọn công cụ vì bản chất tình huống (D2/PED5)

**EX-M4-01 (đối xứng và miền).** \(f(x)=(x^2-1)/x\), x khác 0. Hỏi chẵn/lẻ.  
*Vì sao không nhìn một phía của hình?* Phải kiểm **mọi x thuộc miền**; D là \(\mathbb R\setminus\{0\}\) đối xứng. \(f(-x)=(({-x})^2-1)/(-x)=-f(x)\). Hàm lẻ, đồ thị đối xứng qua gốc, nhưng **không có điểm tại \(x=0\)**. Không gọi đồ thị đi qua O.

**EX-M4-02 (miền chứa nhiều điều kiện).** \(g(x)=\sqrt{1+\cos x}/\sin x\).  
*Vì sao kiểm miền trước khi rút gọn?* \(1+\cos x\ge0\) với mọi x vì cos thuộc \([-1,1]\), nhưng mẫu sin không được bằng 0. Kết luận \(D=\mathbb R\setminus\{k\pi:k\in\mathbb Z\}\). Đừng quên \(\pi\) chỉ vì căn luôn xác định. Nếu biểu thức có cách rút gọn thì vẫn phải bảo toàn miền gốc.

**EX-M4-03 (chu kỳ có hệ số).** \(q(x)=3\sin(2x-\pi/5)\).  
Vì thay \(x\) bởi \(x+\pi\) làm đối số tăng \(2\pi\), chu kỳ cơ bản là \(\pi\). Biên độ là 3, miền giá trị \([-3,3]\). Dịch pha \(-\pi/5\) thay vị trí điểm đạt cực đại nhưng không đổi biên độ hay chu kỳ. **Không** lấy \(2\pi\cdot2\) làm chu kỳ; hệ số 2 là tốc độ chạy qua góc.

**EX-M4-04 (đọc tan/cot ở một điểm loại).** Xét \(r(x)=\tan(2x)\).  
\(\cos(2x)\ne0\) tương đương \(2x\ne\pi/2+k\pi\), tức \(x\ne\pi/4+k\pi/2\). Chu kỳ cơ bản \(T=\pi/2\). Nếu chỉ thấy tan có chu kỳ \(\pi\) rồi bỏ qua 2 ở đối số, miền và đồ thị sẽ sai; kiểm bằng cách xét \(r(x+\pi/2)=r(x)\) trên đúng miền. Đây là **cùng ý toán như canonical SGK** ở ví dụ EX-G11-B03-01; **không cấp item mới / không dùng EX-M4-04 như câu trắc nghiệm độc lập**, chỉ giải thích bằng lời ở Topic và trỏ canonical lesson example nếu tái dùng.

**EX-M4-05 (đọc mô hình tuần hoàn và đơn vị).** \(T(t)=21+3\cos(\pi t/6)\), \(0\le t\le12\), đơn vị °C.  
\(T(0)=24\), \(T(6)=18\); phạm vi giá trị \([18,24]\) và chu kỳ **của công thức toán** là 12 giờ. Nhưng trong bộ dữ kiện chỉ cho một ngày/đoạn 12 giờ, em **không kết luận** nhiệt độ thực tế ngày sau có cùng mẫu. Công thức mô hình có thể mở rộng toán học, dữ liệu thực tế không tự động được xác thực ngoài miền.

**EX-M4-06 (mô hình tăng theo phần trăm).** Giá trị ban đầu 200 nghìn đồng, mỗi kỳ nhân \(1{,}1\) và chỉ đo ở các kỳ nguyên \(n\ge0\).  
\(V(n)=200(1{,}1)^n\) nghìn đồng. Qua 2 kỳ, \(V(2)=242\) nghìn đồng. Chênh kỳ thứ nhất là 20 nghìn, kỳ thứ hai là 22 nghìn: tăng theo **tỷ lệ** 10%, không tăng cố định 20 nghìn. Không dùng giá trị \(V(1{,}5)\) như số liệu của hệ thống nếu kỳ chỉ cho số nguyên.

**EX-M4-07 (đi từ đầu ra về đầu vào).** Nếu mô hình \(N(t)=40\cdot2^t\) được dùng với thời gian liên tục \(t\ge0\), khi nào N đạt 320?  
Chia hai vế cho 40 (khác 0): \(2^t=8\). Vì 8 là \(2^3\), \(t=3\). Ở tình huống không ra lũy thừa nguyên quen thuộc, giải bằng \(t=\log_2(320/40)\) hoặc máy tính theo điều kiện đầu bài. **Vì sao chọn log?** Đây là bài toán ngược của hàm mũ; không giải bằng công thức phương trình bậc hai.

**EX-M4-08 (đọc đồ thị log chuyển dịch).** \(h(x)=\log_2(x+4)\).  
Miền \(x>-4\); đồ thị là đồ thị \(\log_2 x\) dịch sang trái 4 đơn vị, vì cần đầu vào gốc là \(u=x+4\). Tiệm cận đứng \(x=-4\), không phải \(x=0\). \(h(-3)=0\) và \(h(4)=3\). **Kiểm:** \(-3+4=1>0\), \(4+4=8>0\). Nếu đổi dấu và viết x>4, em đã dịch sai hướng.

## M4.7. Luyện tập đề xuất: từ hiểu điều kiện đến giải thích đồ thị (D3)

**Tất cả bên dưới là các candidate source mới**, chưa cấp canonical \`item_id\`/role/placement chính thức; **không đưa nguyên câu vào private Readiness**. Sau rà trùng nguồn SGK mới quyết định REUSE / NEW / DROP. Mỗi câu có lời giải tham chiếu để reviewer đối chiếu, không giả nhận đã review.

| Candidate | Vai trò | Câu hỏi / yêu cầu có thể tự giải | Lời giải và đường khắc phục |
|---|---|---|---|
| P-M4-01 | Hiểu nền | \(f(x)=x^4+1\) là chẵn/lẻ/neither trên \(\mathbb R\)? | \(f(-x)=f(x)\) ⇒ chẵn; HELP-A |
| P-M4-02 | Điều kiện | Miền của \(g(x)=1/(1-\cos x)\)? | Loại cos x=1 ⇒ \(x\ne2k\pi\); HELP-B |
| P-M4-03 | Đọc đồ thị | Tại \(x=0\), tan hay cot không xác định? | \(\tan0=0\); \(\cot0\) không xác định; HELP-B |
| P-M4-04 | Mô hình | \(T(t)=15+3\sin(\pi t/3)\): biên độ, chu kỳ, khoảng giá trị? | 3, 6, \([12,18]\); HELP-C |
| P-M4-05 | Chọn điều kiện | Vì sao \(\tan x\) tăng từng nhánh nhưng không thể khẳng định tăng trên toàn \(\mathbb R\)? | Không xác định tại \(\pi/2+k\pi\), miền chia khoảng; HELP-B |
| P-M4-06 | Hàm mũ | \(f(x)=(1/3)^x\). Tính \(f(-2)\), \(f(1)\) và nêu chiều biến thiên. | 9, 1/3; giảm vì cơ số giữa 0 và 1; HELP-D |
| P-M4-07 | Log cơ sở | Tính \(\log_3(1/27)\); \(\log_3(-3)\) có nghĩa trong \(\mathbb R\)? | −3; không, đối số âm; HELP-E |
| P-M4-08 | Hàm ngược | Từ \((2,9)\) trên \(y=3^x\), tìm điểm tương ứng trên \(y=\log_3 x\). | \((9,2)\), đảo x/y chứ không đổi dấu; HELP-F |
| P-M4-09 | Vận dụng | \(Q(n)=100(0{,}8)^n\), n nguyên không âm; tính Q(2) và diễn giải n=1,5. | Q(2)=64; n=1,5 ngoài dữ kiện chỉ theo kỳ nguyên; HELP-G |
| P-M4-10 | Điều kiện tổng hợp | Miền \(h(x)=\sqrt{\log_2 x}\)? | Cần x>0 và log_2 x≥0; vì cơ số 2>1 nên x≥1; HELP-E |
| P-M4-11 | Phản ví dụ | \(2^x\) và \(x^2\) cùng bằng 16 tại x=4. Có phải cùng hàm? | Không: x=0 cho 1 và 0; dạng hàm và biến thiên khác; HELP-D |
| P-M4-12 | Transfer | \(y=4+2\cos(\pi t/3)\), \(0\le t\le6\). Tìm max/min của mô hình và thời điểm trong miền. | Max 6 tại t=0,6; min 2 tại t=3; \(t\) có đơn vị theo đề; HELP-C |

**Trước khi sinh phiên bản canonical:** phải kiểm chống trùng với EX-G11-B03-01..05, SGK B03 4 Core/8 Practice, B20 Core/Practice, Written/Anchor và toàn bank đã duyệt. Những câu chỉ thay số từ ví dụ nguồn có nguy cơ trùng ý, không dùng làm bằng chứng độ sâu mới. Cần lời giải chi tiết theo từng family và mức, không chỉ bảng tóm tắt trên đây.

### Ba bài Practice mang bước tư duy khác với SGK Core — lời giải đầy đủ (vẫn **NEW CANDIDATE**, chưa duyệt)

**P-M4-02 — Dạng miền của hàm phân thức có mẫu lượng giác, mức thông hiểu.**

*Đề tự làm:* Tìm tập xác định của \(f(x)=\frac1{1-\cos x}\). Đánh dấu trên trục x ít nhất ba giá trị bị loại và giải thích vì sao các khoảng còn lại đều hợp lệ.

*Chọn phương pháp vì sao?* Phân thức không được chia cho 0; tử luôn là 1 nên không cần kiểm điều kiện tử. Miền chỉ phụ thuộc vào mẫu \(1-\cos x\).

*Giải từng bước:* \(1-\cos x\ne0\iff\cos x\ne1\). Trên đường tròn đơn vị, \(\cos x=1\iff x=2k\pi\), \(k\in\mathbb Z\). Do đó \(D=\mathbb R\setminus\{2k\pi:k\in\mathbb Z\}\). Các giá trị bị loại gần gốc là \(-2\pi,0,2\pi\). Ngay gần nhưng khác các mốc này, biểu thức có nghĩa, dù giá trị có thể rất lớn. **Kiểm:** \(f(\pi)=1/(1-(-1))=1/2\), hợp lệ; \(f(0)\) chia 0, loại.

*Đường D6:* Nếu em ghi \(x\ne k\pi\), em đã loại thừa các bội lẻ của \(\pi\). Quay lại bảng cos: \(\cos\pi=-1\) chứ không phải 1. Vẽ điểm \((1,0)\) trên đường tròn đơn vị và kiểm góc cho hoành độ bằng 1.

**P-M4-09 — Phân biệt quy tắc toán với miền dữ liệu quan sát, mức transfer.**

*Đề tự làm:* Một thiết bị chỉ ghi khối lượng vào cuối mỗi kỳ nguyên \(n=0,1,2,\ldots\), theo mô hình \(Q(n)=100(0{,}8)^n\) gam. (a) Tìm giá trị sau 2 kỳ; (b) khối lượng giảm bao nhiêu % ở mỗi kỳ? (c) Từ dữ kiện ấy có thể khẳng định thiết bị đã đo được \(Q(1{,}5)\) không? (d) Nếu xét công thức trên biến thực như mô hình nội suy **bổ sung**, hãy nêu điều kiện cần nói rõ.

*Chọn phương pháp:* Khi mỗi kỳ nhân cùng một tỷ lệ \(0{,}8\), dùng hàm mũ. Phải phân biệt **miền của hàm toán** với **các thời điểm đã ghi dữ liệu**.

*Giải từng bước:* \(Q(0)=100\), \(Q(1)=80\), \(Q(2)=100\times(0{,}8)^2=64\) g. Mỗi kỳ còn 80% so với kỳ trước, nên giảm **20% của lượng ở kỳ trước**, không giảm đều 20 g. Thiết bị chỉ ghi tại các kỳ nguyên: không có số đo \(n=1{,}5\). Nếu muốn dùng \(100(0{,}8)^t\) cho \(t\) thực, cần tuyên bố đó là mô hình nội suy theo thời gian liên tục, nêu đơn vị, phạm vi và rằng con số không phải số đo trực tiếp.

*Đường D6:* Nếu em trả lời "giảm 20 g mỗi kỳ", hãy tính 100→80→64 rồi so sánh: lần hai giảm 16 g. Nếu em khẳng định \(Q(1{,}5)\) là số liệu có sẵn, gạch dưới cụm "chỉ ghi cuối mỗi kỳ nguyên".

**P-M4-10 — Miền chứa đồng thời điều kiện logarit và căn, mức chuyển giao.**

*Đề tự làm:* Tìm tập xác định \(h(x)=\sqrt{\log_2 x}\) trong số thực. Giải thích điểm đầu mút nào **được** giữ và vì sao không cần loại riêng \(x=1\).

*Chọn phương pháp:* Trước tiên đối số log phải dương để \(\log_2 x\) tồn tại; sau đó biểu thức **dưới dấu căn** phải không âm. Hai điều kiện là **giao**, không phải hợp.

*Giải từng bước:* \(x>0\) và \(\log_2x\ge0\). Vì cơ số 2 lớn hơn 1, \(\log_2x\) là hàm tăng và \(\log_21=0\), nên \(\log_2x\ge0\iff x\ge1\). Giao với \(x>0\) cho \(D=[1,+\infty)\). **Kiểm:** \(h(1)=\sqrt0=0\) hợp lệ; \(h(1/2)=\sqrt{-1}\) không có giá trị thực; \(h(0)\) vô nghĩa ngay ở log.

*Đường D6:* Nếu em chỉ ghi \(x>0\), em quên điều kiện căn. Nếu em ghi \(x>1\), em đã loại sai \(x=1\). Đọc lại "căn không âm", khác với "mẫu số khác 0".

**Q15 classification readback:** P-M4-01/03/04/05/06/07/08/12 là micro, reuse hoặc biến thể họ đã có; P-M4-11 còn chờ kiểm trùng chuyển giao. **Không tính 12 ứng viên trong bảng thành 12 câu canonical mới.** Ba bài có lời giải đầy đủ ở trên mới là các candidate content khác biệt cần review; mọi stems/keys/solutions duy nhất nằm trong file M4 R01 này. Metadata de-dup độc lập tại file M4 Q15 ledger chỉ có diễn giải dạng, không tạo phiên bản đề/lời giải thứ hai.

## M4.8. Tự luận có rubric dự thảo (D4) — KHÔNG tạo Written bank thứ hai

**CAND-WRI-M4-01 — Mô hình tuần hoàn tự đủ.** Một mô hình nhiệt độ \(T(t)=20+4\cos(\pi t/6)\) (°C), \(0\le t\le12\) giờ. Trên giấy: (a) nêu lý do chỉ xét miền đã cho; (b) tính biên độ, mức trung bình, chu kỳ của công thức; (c) tìm nhiệt độ lớn/nhỏ nhất trên miền và thời điểm; (d) giải thích vì sao không được suy nhiệt độ ngày hôm sau từ mô hình.  
**Lời giải:** (a) dữ kiện mô hình chỉ có hiệu lực miền [0,12]; (b) biên độ 4, mức 20, chu kỳ 12 h; (c) max 24 tại t=0,12, min 16 tại t=6; (d) không được ngoại suy độ chính xác sang thời gian chưa có dữ kiện.  
**Rubric /4:** 1đ đúng miền/đơn vị; 1đ đúng biên độ, mức, chu kỳ với giải thích; 1đ đúng cực trị và thời điểm; 1đ nêu rõ giới hạn ngoại suy và kiểm kết luận. Sai đơn vị ở phần nào thì trừ điểm trong tiêu chí đó, không cộng trừ hai lần.

**CAND-WRI-M4-02 — Hai đồ thị ngược nhau.** Cho \(a>1\) và điểm \((2,9)\) thuộc \(y=a^x\). (a) Tìm a và giải thích vì sao a hợp lệ; (b) tìm điểm tương ứng của \(y=\log_a x\) bằng quan hệ nghịch đảo; (c) nêu miền, tập giá trị và chiều biến thiên của cả hai hàm; (d) giải \(\log_a(x+1)=2\) kèm điều kiện.  
**Lời giải:** (a) \(a^2=9\), a>1 ⇒ a=3; (b) \((9,2)\); (c) mũ D=\(\mathbb R\), range \((0,\infty)\), tăng; log D=\((0,\infty)\), range \(\mathbb R\), tăng; (d) x+1>0, \(x+1=9\) ⇒ \(x=8\), hợp lệ.  
**Rubric /4:** mỗi phần a/b/c/d 1 điểm; phần d không đủ nếu thiếu miền hợp lệ. Không dùng rubric này để ghi Mastery từ học sinh tự đối chiếu.

**Q15 rule:** sau rà kho Written/Anchor, nếu một câu thực chất trùng bản gốc thì **reuse cùng canonical ID**, không tạo CAND-WRI-M4-0x mới. Nếu đúng câu mới, mới thẩm định gán một source/item ID duy nhất, nhiều placement SGK/TOPIC nếu thích hợp.

## M4.9. Khi học sinh sai, quay lại đúng chỗ — đường D6/PED6

| HELP candidate | Dấu hiệu quan sát | Sửa lỗi theo ý nghĩa, ví dụ và đường quay lại |
|---|---|---|
| HELP-A | Gọi hàm lẻ chỉ vì đi qua gốc, hoặc quên miền đối xứng | Quay lại M4.1; viết D, thay \(-x\), so \(f(-x)\) với \(f(x)\) và \(-f(x)\); thử phản ví dụ \(f(x)=x^2+x\) |
| HELP-B | Tính tan/cot tại chỗ mẫu bằng 0, nối đồ thị qua nhánh đứt | Quay lại M4.2; xác định sin/cos ở mẫu, gạch điểm loại trên trục x, dùng FIG tan/cot và giải ví dụ miền trước |
| HELP-C | Nhầm biên độ với chu kỳ, hoặc đổi đơn vị thời gian | Quay lại M4.3; chỉ rõ trục dọc mức lệch, trục ngang khoảng lặp; làm lại TRY-M4-03 |
| HELP-D | Nói mọi \(a^x\) tăng hoặc coi \(x^2\) là hàm mũ | Quay lại M4.4, lập bảng x=0,1,2 cho cơ số >1 và giữa 0–1; kiểm biến nằm ở vị trí nào |
| HELP-E | Lấy log số âm hoặc quên miền của log trong căn | Quay lại M4.5, viết \(a^y=x>0\) và lấy giao tất cả điều kiện trước khi giải |
| HELP-F | Hiểu hàm ngược là đổi dấu hoặc phản xạ qua Oy | Quay lại M4.5 và hình FIG-B20; viết cặp đầu vào/đầu ra \((p,q)\to(q,p)\) |
| HELP-G | Coi số kỳ nguyên thành thời gian liên tục mà không nói giả định | Quay lại M4.4 và EX-M4-06; viết rõ tập đầu vào mô hình, kiểm dữ kiện có cho nội suy hay không |

Tất cả HELP là **candidate content**, không thêm HELP canonical nếu SGK đã có D6 đủ tương đương (e.g. HELP-G11-B03-01/02, HELP-G11-CHVI-B20-01/02). Topic phải **hiển thị và giải thích ngay trong Topic**, không bắt người học mở bài SGK; xử lý reuse bằng cùng HELP_ID và role/placement khi promote.

## M4.10. Ma trận outcome–chứng cứ R01 theo module (chưa thay Q01–Q18)

| Outcome candidate | Người học chứng minh được | D1 | D2 | D3 | D4 | D5 | D6/PED | Verdict hiện tại |
|---|---|---|---|---|---|---|---|---|
| TOP-FUNC-M4-O01 | Xét chẵn/lẻ qua miền và \(f(-x)\) | M4.1 | EX01 | P01 | WRI02 gián tiếp | FIG sin/cos | HELP-A | AUTHORING CANDIDATE |
| O02 | Phân biệt chu kỳ, chu kỳ cơ bản, biên độ | M4.1/M4.3 | EX03/05 | P04/P12 | WRI01 | FIG sin/cos | HELP-C | AUTHORING CANDIDATE |
| O03 | Đọc hàm sin/cos: miền, range, tính chất, đồ thị, tăng/giảm | M4.2 | EX03/05 | P04/P12 | WRI01 | FIG-B03-01/02 | HELP-C | AUTHORING CANDIDATE |
| O04 | Đọc tan/cot theo từng nhánh và xác định điểm loại | M4.2 | EX02/04 | P02/P03/P05 | liên kết WRI canonical chưa khóa | FIG-B03-03/04 | HELP-B | AUTHORING CANDIDATE |
| O05 | Tính/đánh giá mô hình tuần hoàn có đơn vị/miền | M4.3 | EX05 | P04/P12 | WRI01 | FIG sin/cos & bảng | HELP-C/G | AUTHORING CANDIDATE |
| O06 | Phân biệt hàm mũ và lũy thừa, miền/range, tăng/giảm | M4.4 | EX06/07 | P06/P09/P11 | WRI02 | FIG-B20 | HELP-D/G | AUTHORING CANDIDATE |
| O07 | Đọc/so sánh hai hướng đồ thị mũ \(a>1\), \(0<a<1\) | M4.4 | EX06 | P06/P09 | WRI02 | FIG-B20 | HELP-D | AUTHORING CANDIDATE |
| O08 | Hiểu lôgarit là hàm ngược, miền/range/chiều biến thiên | M4.5 | EX07/08 | P07/P08 | WRI02 | FIG-B20 | HELP-E/F | AUTHORING CANDIDATE |
| O09 | Giải toán miền/điểm đồ thị log, đặc biệt phép dịch | M4.5 | EX08 | P07/P10 | WRI02 | FIG-B20 + hướng dẫn | HELP-E | AUTHORING CANDIDATE |
| O10 | Biết giới hạn của mô hình tăng trưởng/dao động và chuyển đổi đầu vào | M4.3/M4.4 | EX05–07 | P09/P11/P12 | WRI01/02 | FIG & bảng giá trị | HELP-G | AUTHORING CANDIDATE |

**Tự đủ hành trình:** ngữ nghĩa và lời giải minh họa có ngay đây; khi tích hợp phải render SGK shared canonical items/FIG tại Topic bằng placement, **không dùng liên kết điều hướng sang SGK làm điều kiện**. Các thiếu hụt chưa đóng: kiểm trùng toàn canonical ID, sâu lời giải D3 theo từng mức, đo thực tế SVG/đồ thị trên Topic, peer review các phản ví dụ/điều kiện, duyệt câu WRI thật, ngân hàng RD1 độc lập kín cho phạm vi Topic.

## M4.11. Cổng AUTHORING trước review và trạng thái

- Q01/S1: trực tiếp đọc toàn SGK B03 G11 T1 printed 22–30, B20 G11 T2 printed 16–19; xem SBT G11 T1 printed 11–18 và T2 11–15. Trang in khác PDF một trang với cả hai tập SGK 11 và hai tập SBT 11; định danh bằng SHA256 thực tế, lưu ở phần đầu file.
- Q02–Q14: đây là **candidate material thực**, không chỉ outline: có khái niệm, ví dụ, tự thử, dạng bài, rubric dự kiến, SVG reuse source và HELP. Vẫn cần phản biện học thuật riêng từng outcome, đặc biệt điều kiện miền/chu kỳ/tiệm cận và ánh xạ bank, không tự nói đạt mọi Q.
- Q15: REUSE canonical existing SGK when same math item/solution/rubric; **cấm clone**. New candidate chỉ được promote sau registry audit.
- Q16: không có TOPIC_READINESS_PRIVATE_RD1 mới trong file; *không* dùng bài public đã xem làm RD1, không gửi key/rubric RD1 công khai. Tự thử không tính Mastery.
- Q17: phạm vi M4 độc lập về nghĩa ở đây, nhưng **toàn** Hàm số 10–12 chưa FULL; M5–M7 vẫn authoring.
- Q18: file phải được readback exact Git blob SHA và review NotebookLM bằng đúng năm Permanent Sources v2.1; verdict phải phân biệt R01 vs G10 R01 cũ v2.0; chuẩn nguồn Q01–Q18 v1.2.0 (không tạo tiêu chuẩn mới). Nếu mảng này còn P1/P0 thì HOLD phần đó, không suy PASS từ SGK.
- Sau khi gộp đầy đủ toàn Chuyên đề và QA A1–A7, mới tạo gói NotebookLM thực \`Temp_*.md\` kèm prompt 3–6 câu, từ 3 file trở lên ZIP \`Temp_\`, chờ Academic+PED review; V2/READY/REGISTER chỉ sau PASS.

**CHECKPOINT:** M4_D1_D6_CANDIDATE_R01 / DIRECT_S1_SGK_SBT_READ=YES / ITEMS_CANONICAL_PROMOTION=HOLD / NOTEBOOKLM_VERDICT=PENDING / FULL_TOPIC_CONTENT_READY=NO / RELEASE=NO.


---

### M5 — Original reviewed authoring material 3/5

**SOURCE_PATH:** `prototypes/thpt/content-drafts/topic-functions/Temp_TOPIC_FUNCTIONS_M5_LIMIT_CONTINUITY_D1_D6_AUTHORING_R01_20261107.md`  
**SOURCE_GIT_BLOB:** `f1fe1997242714ddadf3e94b981df904f4e12787`  
**CURRENT_SCOPED_VERDICT:** ACADEMIC_PASS_AND_PED_PASS_ACCEPTED, no changed math/solutions/FIG from source

# Chuyên đề Hàm số và đồ thị — M5: Điều gì xảy ra khi ta tiến rất gần?

**SOURCE_TYPE:** AUTHORING CANDIDATE / NEW TOPIC PEDAGOGY DELTA_C, không phải Academic/PED PASS  
**PACKET_ID:** THPT-TOPIC-FUNCTIONS-M5-R01-20261107  
**LEARNING_PATH:** TOPIC (độc lập SGK), thuộc trang KIẾN THỨC + tư liệu hỗ trợ LUYỆN TẬP  
**STANDARD:** SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18; Q09–Q14 được cụ thể hóa theo mạch này, KHÔNG phải format chung bắt buộc  
**SCOPE:** M5, nối từ đọc đồ thị M1–M4 sang ý nghĩa đạo hàm M6 và tiệm cận/khảo sát M7; không tạo Core Topic riêng  
**OUTCOME_CANDIDATES:** TOP-FUNC-M5-O01..O09; chưa cấp ID canonical/Skill Mastery  
**S1 PRIMARY:** SGK Toán 11 KNTT Tập 1 B16 trang IN 111–118 (PDF 1-based 112–119) và B17 trang IN 119–122 (PDF 120–123); SBT Toán 11 KNTT Tập 1 B16 IN 79–83 (PDF 80–84), B17 IN 84–86 (PDF 85–87). **Đã nhìn trực tiếp từng trang trong 2 sách bản scan gốc**, không dựa vào mục lục GitHub để tự khẳng định nội dung từng trang.  
**RAW S1 SHA256:** SGK 11 T1 \`4492122eb2c9df626582d37b5c3d0e6513d66ca68d80d8a1e69577aa8b706828\`; SBT 11 T1 \`fb5292103e5b682531ce37b5f30598393bba81b2943da9c1a374fdeb56557229\`  
**PREVIOUS SGK BANK:** SGK ChV B15–B17 R03 source \`prototypes/thpt/content-drafts/G11_CHV_B15_B17_S1_PAGINATION_EQUIVALENT_R03_SOURCE_20261102.md\`, Git blob \`7934757ed06de4ae4b63dbc351ef524fc054e0d0\`; dữ liệu cũ đã có các receipt/academic verdict riêng, **không review lại nội dung bất biến**.  
**PUBLIC/PRIVATE:** Chỉ ví dụ và bài dự thảo công khai. KHÔNG chứa đề/đáp án/rubric RD1 kín, không ghi Mastery, không tạo đánh giá chính thức. Các EX/TRY/P mới chỉ là **tên source candidate**, không được dùng như canonical ITEM_ID.

> **Đọc trước:** Chúng ta đã biết tính giá trị một hàm số và đọc điểm trên đồ thị. Có những câu hỏi không nằm ở chính một điểm: nếu tiến sát điểm đó từ bên trái hoặc bên phải, giá trị đang đi về đâu? Liệu một đường cong có bị “đứt”? Nếu biết cả quãng đồ thị nối liền nhau, liệu có dám khẳng định đường cong cắt trục hoành ở đâu đó? Đây là lý do cần giới hạn và liên tục. Không cần học SGK lớp 11 trước mới hiểu phần này.

## M5.1. Nhìn gần một điểm: Giá trị ở điểm và xu hướng gần điểm là hai chuyện

Hãy lấy \(f(x)=\dfrac{x^2-4}{x-2}\) với điều kiện \(x\ne2\). Khi x bằng 2, mẫu bằng 0 nên **không có \(f(2)\)**. Nhưng khi x rất gần 2 mà khác 2, ta phân tích tử thành \((x-2)(x+2)\), rồi rút gọn được \(f(x)=x+2\). Một bảng nhỏ minh họa:

| x | 1,9 | 1,99 | 2,01 | 2,1 |
|---|---:|---:|---:|---:|
| f(x) | 3,9 | 3,99 | 4,01 | 4,1 |

Bảng không phải chứng minh tổng quát; bước biến đổi đại số trên mọi x khác 2 mới giúp ta hiểu vì sao giá trị tiến về **4**. Ta viết
\[
\lim_{x\to2}\frac{x^2-4}{x-2}=4.
\]
Ký hiệu \(\lim\) đọc là “giới hạn”; dòng trên nói về các đầu vào **đang tiến sát 2**, không đòi đầu vào thực sự bằng 2. Vì thế **có giới hạn** không có nghĩa **có giá trị tại điểm**, càng không có nghĩa **liên tục**.

**Hướng dẫn đọc hình (D5):** đặt tại đây FIG-G11-B16-01_R01.svg, Git blob d623e8a96c6d5f9723aafb9c62bffe57bdc9aa73. Trục hoành là x, trục tung là y. Hãy nhìn đường thẳng đi gần \((2,4)\) từ hai bên; vòng tròn rỗng nhắc rằng điểm (2,4) **không thuộc đồ thị của hàm gốc**. Không vẽ chấm đặc ở đó vì chưa có \(f(2)\). Hình chỉ minh họa, bước kiểm toán dùng định nghĩa/biến đổi và miền xác định.

**Kiến thức cần nắm:** với \(a\) là điểm mà miền xác định có các giá trị x khác a tiến sát được, \(\lim_{x\to a}f(x)=L\) diễn tả đầu ra f(x) tiến sát L khi x tiến sát a trong miền hợp lệ. Giới hạn hữu hạn là xu thế tới một số thực L. Nếu xét \(\lim_{x\to a^-}\) ta chỉ đến từ **trái** (x<a), còn \(\lim_{x\to a^+}\) là từ **phải** (x>a). Với điểm được tiếp cận từ cả hai phía, **giới hạn hai phía hữu hạn tồn tại bằng L khi và chỉ khi hai giới hạn một phía cùng bằng L**.

**TRY-M5-01 — Tự thử trước khi xem mẫu:** \(h(x)=(x^2-9)/(x-3)\) nếu \(x\ne3\). Giá trị \(h(3)\) có không? Khi x tiến sát 3, h(x) tiến về mấy?
<details><summary>Đã tự làm? Mở đối chiếu</summary>
\(h(3)\) không tồn tại do mẫu bằng 0. Với \(x\ne3\), h(x)=x+3; do đó giới hạn khi x→3 bằng 6. Hai kết luận khác nhau và đều đúng.
</details>

## M5.2. Vì sao phải tách trái và phải? Một ngưỡng có thể đổi quy tắc

Một bãi giữ xe (mô hình giả định) tính 10 nghìn đồng khi \(0<t\le1\) giờ và 20 nghìn đồng khi \(t>1\). Đúng tại t=1, giá là 10. Nhưng khi t tiến tới 1 từ bên trái, giá cứ là 10; từ bên phải, giá cứ là 20. Vì hai phía **không khớp**, \(\lim_{t\to1}C(t)\) không tồn tại (theo giới hạn hữu hạn hai phía), mặc dù C(1) có giá trị. Đừng lấy trung bình 15 làm “giới hạn”.

Một tình huống khác: \(g(x)=1/(x-1)\). Khi x tiến gần 1 từ bên phải, mẫu là số dương nhỏ, giá trị tăng không bị chặn tới \(+\infty\). Khi đến từ bên trái, mẫu âm nhỏ, giá trị xuống \(-\infty\). Dấu \(+\infty\) hay \(-\infty\) mô tả hướng không bị chặn, **không phải giá trị thực để thế vào công thức**; không cộng hai phía để lấy một kết quả.

**Có bao giờ cả hai phía tiến đến cùng một \(+\infty\)?** Có. Với \(g(x)=1/(x-1)^2\), từ cả trái lẫn phải đều có giá trị dương và tăng không bị chặn. Khi đó ta viết \(\lim_{x\to1}g(x)=+\infty\); nhưng đó **không phải một giới hạn hữu hạn**, không thể gọi hàm liên tục tại 1, và 1 không thuộc miền xác định.

**Phương pháp lựa chọn:** với phân thức có mẫu tiến về 0 và tử không về 0, hãy xét **dấu** gần điểm và từng phía. Nếu cả tử và mẫu đều về 0, đó là dạng chưa xác định \(0/0\): phải biến đổi trước khi suy kết quả.

**TRY-M5-02:** \(\lim_{x\to0^-}1/x\) và \(\lim_{x\to0^+}1/x\) đi về đâu? \(\lim_{x\to0}1/x\) có tồn tại dưới dạng một số hữu hạn không?
<details><summary>Mở phần đối chiếu</summary>
Từ trái \(1/x\to-\infty\), từ phải \(1/x\to+\infty\). Hai phía khác nhau; không có giới hạn hữu hạn hai phía. Đừng viết 0 chỉ vì tử “không đổi”.
</details>

## M5.3. Khi x đi rất xa: Giá trị sẽ ổn định hay tăng không bị chặn?

“Tiến gần một điểm” và “x tăng mãi” không phải cùng câu hỏi. Khi x→+\infty, ta xét những x dương lớn dần không bị chặn; x→−\infty là những x âm có độ lớn tăng dần. Hai hướng có thể cho hành vi khác nhau.

Ví dụ \(p(x)=\dfrac{3x+2}{x+4}=3-\dfrac{10}{x+4}\). Khi x→+\infty hoặc x→−\infty, phân số thứ hai tiến về 0, nên p(x) tiến về 3. Trên đồ thị, đường \(y=3\) là một mức mà hàm tiến sát ở rất xa; ta có thể gọi đó là một **tiệm cận ngang** khi học tiếp mạch khảo sát đồ thị.

Khi gặp đa thức hữu tỉ, chia cả tử và mẫu cho lũy thừa x bậc cao nhất thích hợp thường làm lộ xu thế. Ví dụ \(\lim_{x\to+\infty}(2x^2+3x)/(x^2+1)=2\), vì chia cho \(x^2\) được \((2+3/x)/(1+1/x^2)\). Chỉ áp dụng các phép tính giới hạn trên các miền cho phép và mẫu giới hạn không bằng 0 ở bước lấy thương.

**Bẫy cực kỳ thường gặp: căn bậc hai không “trả lại nguyên x” khi x âm.** \(\sqrt{x^2}=|x|\), bằng x nếu \(x\ge0\) nhưng bằng −x nếu x<0. Do đó
\[
\lim_{x\to-\infty}\frac{\sqrt{x^2+9}}x
=\lim_{x\to-\infty}\frac{|x|\sqrt{1+9/x^2}}x=-1.
\]
Nếu em viết \(\sqrt{x^2}=x\) ở phía âm, kết quả thành +1 là sai dấu. Cách an toàn là ghi **miền dấu của x** trước khi đưa x ra ngoài căn.

**Giới hạn của một hiệu có căn:** \(\sqrt{x^2+x}-x\) khi x→+\infty nhìn qua có dạng \(\infty-\infty\), không được “trừ hai vô cực bằng 0”. Nhân liên hợp khi x đủ lớn dương:
\[
\sqrt{x^2+x}-x=\frac{x}{\sqrt{x^2+x}+x}
=\frac1{\sqrt{1+1/x}+1}\longrightarrow\frac12.
\]
Nhân liên hợp là nhân với một biểu thức đi đôi để tạo **hiệu hai bình phương**, không phải một mẹo chọn tùy ý; cần kiểm mẫu mới khác 0 trong vùng xét.

**TRY-M5-03:** Khi \(x\to-\infty\), \(\sqrt{x^2}/x\) bằng 1 hay −1? Lý do nằm ở điều kiện nào?
<details><summary>Tự nghĩ rồi mở đáp án</summary>
Với x âm, \(\sqrt{x^2}=|x|=-x\), nên \(|x|/x=-1\). Điều kiện x<0 quyết định dấu.
</details>

## M5.4. Một sơ đồ chọn phương pháp, không học thuộc quy tắc một cách máy móc

| Em nhìn thấy | Việc nên làm và lý do | Khi nào phải dừng/đổi cách |
|---|---|---|
| Hàm đa thức, phân thức có mẫu không bằng 0 gần điểm | Dùng tính liên tục/phép toán giới hạn, thay giá trị hợp lệ | Nếu mẫu tiến về 0 thì không dùng quy tắc thương một cách máy móc |
| \(0/0\) | Tìm nhân tử chung hoặc nhân liên hợp để xem quy tắc gần điểm | Rút gọn không tạo lại giá trị tại điểm vốn bị loại |
| Tử → số khác 0, mẫu → 0 | Xét dấu trái/phải, có thể ra \(+\infty\)/\(-\infty\) | Không viết “\(1/0\)” như một số |
| x→±∞, đa thức/hữu tỉ | Chia theo bậc trội, kiểm dấu và hệ số | Đừng suy chỉ từ giá trị tại một x rất lớn |
| Có căn chứa \(x^2\), đặc biệt x→−∞ | Tách \(|x|\) rồi dùng dấu của x | Không lấy \(\sqrt{x^2}=x\) cho mọi x |
| Một đồ thị có lỗ hoặc nhảy | Kiểm trái/phải trước, rồi so với giá trị thật | Chỉ nhìn hình không chứng minh toàn bộ điều kiện |

**EX-M5-01 — Vì sao được rút gọn khi tính giới hạn nhưng không được lấp lỗ?**
Cho \(f(x)=(x^2-16)/(x-4)\) với \(x\ne4\). Ta có \(f(x)=x+4\) với x khác 4, nên \(\lim_{x\to4}f(x)=8\). Điều này **không** chứng minh f(4)=8; nếu muốn f liên tục tại 4, phải bổ sung giá trị 8 khi mô hình cho phép.

**EX-M5-02 — Nhìn dấu trước khi tính.**
Cho \(g(x)=4/(x+2)\). Tại x→−2⁻, mẫu âm rất nhỏ nên g→−∞; tại x→−2⁺ mẫu dương rất nhỏ nên g→+\infty. Vì vậy không có giới hạn hữu hạn hai phía tại −2, và đường x=−2 là một vị trí tiệm cận đứng. Chọn **phương pháp dấu** vì tử không tiến về 0.

**EX-M5-03 — Nhân liên hợp nhằm khử 0/0.**
Tính \(\lim_{x\to0}(\sqrt{9+x}-3)/x\). Nhân cả tử/mẫu với \(\sqrt{9+x}+3\) cho \(x/ [x(\sqrt{9+x}+3)]\) khi x≠0; giới hạn \(=1/6\). Không thế x=0 vào phân thức gốc, chỉ lấy giới hạn sau biến đổi.

**EX-M5-04 — Mô hình tiến sát một mức hiệu quả.**
Với \(E(t)=80t/(t+4)\), t≥0 tính bằng giờ, khi t→+\infty thì \(E(t)=80-320/(t+4)\to80\) (đơn vị E do đề quy định). **Không nói E(t)=80 ở một thời điểm hữu hạn** vì \(320/(t+4)>0\) với t≥0. Giới hạn là mức tiến sát của mô hình, không phải lời hứa vật lý nó đạt đúng 80.

## M5.5. Từ xu thế sang sự liên tục: Có “lỗ” hay “bậc nhảy” không?

Một hàm liên tục ở một điểm a khi giá trị **đúng ở a** khớp với xu thế ở các điểm rất gần a. Ở điểm có thể tiếp cận từ hai phía, cần cả ba điều:

1. \(f(a)\) có nghĩa — a thuộc tập xác định.
2. Giới hạn hữu hạn \(\lim_{x\to a}f(x)\) tồn tại.
3. Hai kết quả bằng nhau: \(\lim_{x\to a}f(x)=f(a)\).

**Bớt một điều đều có thể sai.** Với \(f(x)=(x^2-4)/(x-2)\) khi x≠2, giới hạn bằng 4 nhưng không có f(2); cần “vá” bằng cách định nghĩa \(f(2)=4\). Nếu cố định \(f(2)=9\), đường cong gần điểm vẫn tiến tới 4 nhưng chấm đặc lại ở độ cao 9 nên **gián đoạn**.

**Hình cần đọc tại Topic:** FIG-G11-B17-01_R01.svg, Git blob 0cc06960b371bca72ee78da414a04aa56f5e5fbe. Chú ý **vòng tròn rỗng** thể hiện giá trị tiến gần (không nhận) và **chấm đặc** cho biết giá trị thật. Đọc tọa độ cụ thể của các ký hiệu theo hình; không mặc định mọi vòng tròn rỗng đều là “tiệm cận đứng”. Đọc hình trước; ba điều kiện ở trên là căn cứ kết luận.

**Tại nơi công thức đổi:** giả sử
\[
h(x)=\begin{cases}2x+1,&x<2,\\m+x,&x\ge2.\end{cases}
\]
Khi tiến đến 2 từ trái, giá trị tới 5. Từ phải, giá trị tới \(m+2\), và \(h(2)=m+2\). Muốn liên tục tại 2 phải và đủ \(m+2=5\), tức \(m=3\). Không chỉ so hai công thức rồi quên điều kiện x thuộc nhánh nào; ngay tại 2 thuộc nhánh thứ hai.

**TRY-M5-04:** Nếu cùng biểu thức x+2 khi x≠2 được bổ sung \(f(2)=7\), giới hạn tại 2 là mấy, hàm liên tục không?
<details><summary>Đã nghĩ? Mở đối chiếu</summary>
Giới hạn vẫn bằng 4, nhưng giá trị ở điểm là 7. Hàm không liên tục tại 2. Thay một giá trị đúng tại điểm không đổi xu thế từ các điểm x khác 2.
</details>

## M5.6. Liên tục trên một khoảng và trên một đoạn không hoàn toàn giống nhau

Nếu một hàm liên tục **trên khoảng mở \((a,b)\)**, phải liên tục tại mọi điểm trong khoảng. Nhưng để liên tục **trên đoạn \([a,b]\)**, còn cần tiếp cận đầu mút từ **phía nằm trong đoạn**:
\[
\lim_{x\to a^+}f(x)=f(a),\qquad
\lim_{x\to b^-}f(x)=f(b).
\]
Không yêu cầu hàm xác định ở phía trái a hay phía phải b. Ví dụ \(f(x)=\sqrt{x}\) liên tục trên \([0,9]\), dù f không có giá trị thực ở x<0. Tại 0 phải xét phía phải và tại 9 xét phía trái.

Tính liên tục được bảo toàn khi cộng, trừ, nhân các hàm liên tục; khi chia phải bảo đảm **mẫu khác 0 tại điểm xét**. Đa thức liên tục trên toàn \(\mathbb R\), phân thức hữu tỉ liên tục tại các điểm mà mẫu khác 0; \(\sqrt{g(x)}\) chỉ nói trong miền biểu thức có nghĩa với g phù hợp. Các họ hàm lượng giác, mũ, log đã học M4 có tính liên tục trên **các khoảng xác định phù hợp**, không suy các khoảng nhảy qua điểm loại của tan/cot/log.

**EX-M5-05 — Kiểm miền trước khi nói “liên tục”.**
Cho \(r(x)=\frac{x+3}{x^2-1}\). Miền là \(\mathbb R\setminus\{-1,1\}\). Vì là thương của đa thức với mẫu khác 0 trên miền, r liên tục trên từng khoảng \((-\infty,-1)\), \((-1,1)\), \((1,+\infty)\). Không nối ba khoảng để khẳng định liên tục trên cả \(\mathbb R\). **Nên chọn cách này** vì không có điểm ghép cần điều chỉnh: chỉ cần xác định điểm mẫu 0.

**EX-M5-06 — Liên tục trên đoạn có đầu mút căn.**
\(k(x)=\sqrt{9-x^2}\) trên \([-3,3]\). Căn xác định với \(9-x^2\ge0\), nghĩa là \(-3\le x\le3\). Hàm liên tục trên \((-3,3)\); khi x→−3⁺ hoặc 3⁻, k(x)→0 đúng bằng k(−3)=k(3)=0. Vậy liên tục trên \([-3,3]\). Không xét căn bên ngoài đoạn vì đó không thuộc miền. **Q15:** dạng này tương đương SGK canonical B17-P05, sẽ đánh dấu REUSED_EXAMPLE chứ không cấp câu mới.

**TRY-M5-05:** \(g(x)=1/(x-2)\) có thể gọi là liên tục trên \([0,4]\) không? Vì sao, dù đồ thị trông “mượt” trên từng nhánh?
<details><summary>Mở đối chiếu</summary>
Không, g không xác định tại x=2 thuộc đoạn [0,4]; không thể liên tục trên cả đoạn. Nó liên tục trên các khoảng loại 2. Xem lại điều kiện tập xác định trước khi nói “vẽ một nét”.
</details>

## M5.7. Một ứng dụng bất ngờ: Chưa biết nghiệm ở đâu, vẫn biết ít nhất một nghiệm tồn tại

Đặt bài toán: tìm nghiệm \(f(x)=0\) không dễ. Nhưng nếu đồ thị **liên tục trên cả đoạn** \([a,b]\) và hai giá trị ở hai đầu **trái dấu**, đường cong phải vượt qua mức 0 ở ít nhất một điểm trong khoảng. Đây là hệ quả thường gọi là **định lí giá trị trung gian** cho mức 0:
\[
f\text{ liên tục trên }[a,b],\quad f(a)f(b)<0
\quad\Longrightarrow\quad
\exists\,c\in(a,b):f(c)=0.
\]

**Giới hạn áp dụng quan trọng:** định lí cho biết **tồn tại**, không tự cho biết nghiệm duy nhất hay chính xác c bằng số mấy. Nếu hàm không liên tục trên cả đoạn, hai giá trị trái dấu **không đủ** để suy có nghiệm.

**EX-M5-07 — Tại sao nghiệm phải xuất hiện?** \(p(x)=x^3+2x-4\). Đây là đa thức, liên tục trên [1,2]. \(p(1)=1+2-4=-1<0\), \(p(2)=8+4-4=8>0\). Do đó tồn tại ít nhất một nghiệm trong (1,2). Không cần biến đổi giải phương trình bậc ba để kết luận sự tồn tại. Bằng luận điểm dấu đầu mút alone, **chưa được nói duy nhất**.

**EX-M5-08 — Khi bỏ mất điều kiện, kết luận sai.** Đặt \(q(x)=-1\) khi x<0 và \(q(x)=1\) khi x≥0. Trên [-1,1] có \(q(-1)=-1\), \(q(1)=1\) trái dấu, nhưng q không nhận giá trị 0 tại bất kỳ x nào: hàm **bị nhảy** ở 0, không liên tục tại 0. Vậy dấu trái nhau mà thiếu liên tục không chứng minh có nghiệm.

**TRY-M5-06:** \(u(x)=x^2-2\) trên [1,2]. Có thể chứng minh có nghiệm trong (1,2) mà không tìm căn 2 không? Có khẳng định được duy nhất chỉ từ điều kiện đổi dấu không?
<details><summary>Mở đối chiếu</summary>
u là đa thức liên tục trên [1,2], u(1)=−1 và u(2)=2 nên có ít nhất một nghiệm trong (1,2). Riêng định lí đổi dấu chưa chứng minh duy nhất; muốn kết luận duy nhất phải lập luận bổ sung về tính tăng của u trên [1,2].
</details>

## M5.8. Luyện tập theo vấn đề học sinh gặp — không gom theo B16/B17 SGK

**Lưu ý Q15:** D3 bên dưới là tập **minh họa phân loại dạng**, không phải ngân hàng đã đăng ký. SGK đang có 20 canonical PUBLIC items B16/B17 và 4 Written canonical (xem ledger M5 riêng); khi nội dung toán trùng, dùng chung đúng ITEM_ID và lời giải, có placement TOPIC hiển thị ngay tại đây. Không yêu cầu người học nhấn sang trang SGK. Các câu Tự thử không được tính Mastery.

| Source label | Mạch cần nghĩ | Nhiệm vụ ngắn và đáp án để tác giả đối chiếu | Disposition |
|---|---|---|---|
| P-M5-01 | Đọc lỗ đồ thị | Tính \(\lim_{x\to3}(x^2-9)/(x-3)\); có \(f(3)\) không? → 6, không | MICRO_NOT_NEW, giống SGK B16-C01 |
| P-M5-02 | Giới hạn một phía | \(1/(x-5)\) tại 5⁻/5⁺ → −∞/+∞ | REUSE_FAMILY, giống B16-C03 |
| P-M5-03 | Phép tính giới hạn | \(\lim_{x\to0}(\sqrt{16+x}-4)/x=1/8\) bằng liên hợp | REUSE_FAMILY, giống B16-P01 |
| P-M5-04 | Dấu ở vô cực | \(\lim_{x\to-\infty}\sqrt{x^2+16}/x=-1\) | REUSE_FAMILY, giống B16-P04 |
| P-M5-05 | Liên tục ghép nhánh | \(f=x+2\) nếu x<1, \(f=mx+1\) nếu x≥1; m=2 để liên tục | REUSE_FAMILY, giống B17-P02 |
| P-M5-06 | Điều kiện định lí | Với \(p(x)=x^3+2x-4\), nêu căn cứ tồn tại nghiệm trong (1,2) | REUSE_FAMILY, giống B17-P03/P07 |
| P-M5-07 | Lỗ, nhảy và giá trị | Ba trường hợp: \(g(x)=x+2\) cho x≠2, g(2) bị bỏ / bằng 4 / bằng 7. Phân loại giới hạn và liên tục. | REUSE_COMPOSITE, B17-C01/C02 đã dạy cùng kỹ năng |
| P-M5-08 | Dữ liệu từng đoạn | Cước xe \(C(t)=10\) cho \(0<t\le1\), \(20\) cho t>1; phân biệt C(1) với hai giới hạn một phía. | REUSE_FAMILY, SGK EX-G11-B16-05 |
| P-M5-09 | Vi phạm giả thiết | Hàm bước \(-1\) nếu x<0, \(1\) nếu x≥0 có hai đầu khác dấu, có nghiệm không? | CANDIDATE_TRANSFER, không nhầm với bài áp dụng định lí |
| P-M5-10 | Lý giải tiệm cận | \(E(t)=80t/(t+4)\), t≥0; giải thích \(\lim_{t\to\infty}E(t)=80\) nhưng không bằng 80 tại t hữu hạn. | REUSE_FAMILY, tương tự B16-P07 |
| P-M5-11 | Giao miền + liên tục | Xét \(g(x)=\sqrt{x+2}/(x-1)\), xác định các khoảng liên tục. | CANDIDATE_TRANSFER, cần rà bank |
| P-M5-12 | Đầu mút | \(h(x)=\sqrt{4-x^2}\) liên tục trên đoạn nào? → \([-2,2]\) | REUSE_FAMILY, giống B17-P05 |

### D3 có giải từng bước và D6 rõ cho hai ứng viên mới, một bài tổng hợp nguồn cũ

**P-M5-07 — Ba đồ thị giống nhau gần điểm nhưng khác chính tại điểm.** Cho quy tắc \(g(x)=x+2\) với x≠2; xét ba phiên bản: A không định nghĩa tại 2, B định nghĩa \(g(2)=4\), C định nghĩa \(g(2)=7\). Cả ba đều có **giới hạn gần 2 bằng 4** vì mọi x khác 2 nhưng gần 2 có g(x)=x+2. A gián đoạn vì thiếu giá trị tại điểm; B liên tục do \(4=g(2)\); C gián đoạn vì \(7\ne4\). **Vì sao phương pháp này phù hợp?** Ta tách phần “xu thế” khỏi “giá trị ở điểm” và so đủ ba điều kiện. **D6:** nếu cho A “liên tục” chỉ vì đường thẳng mượt, hãy vẽ vòng tròn rỗng; nếu cho C liên tục, hãy so giá trị chấm đặc với vòng rỗng.

**P-M5-09 — Hai đầu trái dấu chưa đủ.** Xét \(f(x)=-1\) nếu x<0, \(f(x)=1\) nếu x≥0 trên đoạn [-1,1]. (a) Tính f(-1), f(1); (b) hàm có giá trị bằng 0 ở đâu không? (c) tại sao không dùng định lí giá trị trung gian để bảo đảm nghiệm? **Giải:** f(-1)=−1, f(1)=1, nhưng f(x) chỉ nhận −1 hoặc 1 nên không có nghiệm; tại 0 giới hạn trái bằng −1, giới hạn phải bằng 1 nên **không liên tục**. Dấu trái nhau là một giả thiết cần, không thay được giả thiết liên tục. **D6:** nếu trả lời “có nghiệm” do chỉ nhìn dấu, phải đọc lại đúng hai điều kiện ở M5.7 và vẽ bậc nhảy.

**P-M5-11 — Chọn miền trước, kết luận liên tục sau.** \(h(x)=\sqrt{x+2}/(x-1)\) có điều kiện căn \(x+2\ge0\Rightarrow x\ge-2\) và mẫu \(x\ne1\). Vậy \(D=[-2,1)\cup(1,+\infty)\). Hàm liên tục trên từng khoảng mở \((-2,1)\), \((1,+\infty)\), và **liên tục phải** tại đầu mút −2 của miền nếu hiểu là liên tục trên nhánh \([-2,1)\): khi x→−2⁺, \(\sqrt{x+2}/(x-1)\to0=h(-2)\). Hàm không xác định tại 1; không thể tuyên bố liên tục trên toàn \([-2,+\infty)\). **D6:** nếu loại −2 vì căn bằng 0, nhớ **căn nhận 0**; nếu quên loại 1, nhắc điều kiện mẫu khác 0; nếu kết luận liên tục trên cả hai nhánh “một khoảng”, vẽ điểm loại ở 1.

**Q15 disposition:** chỉ P-M5-09 và P-M5-11 là NEW_CANDIDATE (chưa canonical/promoted). P-M5-07 là tổng hợp hai trạng thái liên tục/gián đoạn vốn có trong B17-C01/C02 nên **không cấp item riêng**; mười bài còn lại là MICRO/REUSE/HOLD. Khi đăng ký nguồn cần rà trùng toàn ngân hàng, không coi 12 labels là 12 item.

## M5.9. Written/Anchor và tuyến tự chữa (D4/D6)

**D4:** Ưu tiên dùng chung **một nguồn** bốn Written đã có trong SGK:
- THPT-G11-CHV-B16-W01 — ghép giới hạn, liên tục tại điểm và giới hạn một phía, rubric 4 điểm.
- THPT-G11-CHV-B16-W02-ANCHOR — nhân liên hợp, xử lí dấu x tại −∞; Anchor chỉ là nhãn, rubric 4 điểm.
- THPT-G11-CHV-B17-W01 — tham số liên tục và ứng dụng chứng minh có nghiệm; rubric 4 điểm.
- THPT-G11-CHV-B17-W02-ANCHOR — liên tục trên đoạn, nhánh ghép và thay đổi giá trị mốc; rubric 4 điểm.

Không tạo bốn đáp án/rubric mới; placement TOPIC chỉ trỏ canonical versions tương ứng. Nếu nguồn review phát hiện một outcome chuyển giao chưa có Written đủ sâu thì đề xuất Delta C **một câu mới** và đối chiếu trùng trước khi gán ID. Phản hồi tự luận học sinh tự so rubric **không ghi Skill Mastery**.

**D6 tại đúng vị trí hiểu sai** (đề xuất tái dùng HELP canonical, không lập kho HELP khác):
- HELP-G11-CHV-B16-01: nhầm giới hạn với giá trị thật tại điểm → quay lại M5.1, vòng tròn rỗng và TRY-M5-01.
- HELP-G11-CHV-B16-02: thiếu giới hạn trái/phải hoặc dấu → M5.2 và TRY-M5-02.
- HELP-G11-CHV-B17-01: kiểm liên tục thiếu giá trị/miền → M5.5, đọc điểm đặc/rỗng và TRY-M5-04.
- HELP-G11-CHV-B17-02: dùng định lí đổi dấu nhưng quên liên tục / suy duy nhất → M5.7, EX-M5-08 và TRY-M5-06.
- Nếu x→−∞ sai dấu \(|x|\) → M5.3, ví dụ căn và TRY-M5-03, tham chiếu D6 tương ứng của bank nếu có.

Trong Topic, giải thích D6 phải hiển thị **tại chỗ**, không chuyển sang SGK để xem. Chỉ có một HELP_ID nguồn và nhiều placement/role, đúng Q15.

## M5.10. Ma trận outcome–bằng chứng (chưa phải chuẩn mới)

| Outcome candidate | Chứng cứ thực theo mạch | Gợi ý canonical reuse | Độ sâu cần reviewer phản biện |
|---|---|---|---|
| TOP-FUNC-M5-O01 | Khác biệt giá trị tại a / giới hạn gần a: M5.1, TRY01, EX01, P07 | B16-C01, B16-W01, FIG-B16 | Học sinh tự giải thích bằng lời, không chỉ trả số |
| O02 | Giới hạn trái/phải, bước nhảy: M5.2, TRY02, EX02, P08 | B16-C02/C03/P03/P06, HELP-B16-02 | Điều kiện miền, không lấy trung bình hai phía |
| O03 | Giới hạn vô cực tại điểm và dấu: M5.2, EX02 | B16-C03/P06 | Phân biệt hữu hạn/không bị chặn |
| O04 | Giới hạn tại ±∞ và chọn phép biến đổi: M5.3–4, TRY03, EX03–04 | B16-P04/P05/P07, B16-W02 | Dấu căn \(|x|\), hợp thức hoá |
| O05 | Chọn phân tích nhân tử/liên hợp/kiểm miền: M5.4, EX01–03 | B16-P01/P02, B16-W02 | WHY/WHEN, không chia cho 0 |
| O06 | Kiểm liên tục tại a, kể cả điểm ghép: M5.5, TRY04 | B17-C01/C02/P02/P04, B17-W01 | Ba điều kiện và điểm rỗng/đặc |
| O07 | Liên tục trên khoảng/đoạn, đầu mút: M5.6, TRY05, EX05–06, P11 | B17-C03/P01/P05/P06, B17-W02 | Chỉ xét một phía tại đầu mút |
| O08 | Giải thích định lí đổi dấu và giới hạn kết luận: M5.7, TRY06, EX07–08, P09 | B17-P03/P07, B17-W01 | Tồn tại ≠ duy nhất; thiếu liên tục thì vô hiệu |
| O09 | Đọc đồ thị có lỗ/bậc nhảy/tiệm cận và không ngoại suy mô hình: M5.1–7, P07/09/10 | FIG-B16/B17, B16-P07 | Lập luận dựa miền và xu thế, không đọc cảm tính |

**MA TRẬN KHÔNG ĐỦ ĐỂ TỰ CẤP PASS:** Q02 phải kiểm theo outcome từng mạch, Q03–Q08 D1–D6 sâu, Q09–Q14 PED theo từng nhu cầu, Q15–18 canonical/assessment/source receipt. G10 R01 PASS v2.0 giữ nguyên đúng snapshot; phần M5 là Topic mới và cần review đúng năm Permanent Sources THPT v2.1.

## M5.11. Ranh giới và handoff gate

- Đây là **một mạch nội dung của Topic hoàn toàn độc lập**. Có thể gọi các vùng M5.1–M5.9 theo cách khác/ghép trong Golden UI; không ép thành chín tab hay mượn 2 cấp tab SGK theo bài.
- Kiến thức, các điều kiện, ví dụ giải có lý do, Tự thử mở đối chiếu, D6 và trực quan được mô tả **ngay tại Topic**. Luyện tập renderer tương lai phải dùng canonical item bằng placement và hiển thị tại Topic, liên kết qua SGK là tự chọn.
- FIG-B16/B17 dùng cùng SVG có source SHA, không commit hình thứ hai, không sửa SVG đã review trừ khi có lỗi nội dung thật; QA thực tế hiển thị thuộc RELEASE/AP3.
- Q16: \`TOPIC_READINESS\` phải là held-out độc lập và kín; không dùng các câu public/đã xem ở đây làm chứng cứ nếu thiếu exposure control; không hint, đáp án, đúng-sai, AI Tutor trước Final Submit; Tự thử formative chỉ là SELF_CHECK_NO_MASTERY.
- **DELTA_C:** phần diễn giải mới theo mạch và bất kỳ item mới đủ khác biệt; NotebookLM học thuật + sư phạm phản biện trên **source blob thật**, năm Permanent THPT v2.1, cùng S1. Không gán PASS dựa trên SGK B16/B17 cũ.
- Chỉ bàn giao AUTHORING khi toàn Topic qua Q01–Q18/A1–A7, Academic+PED PASS, một V2/one ready manifest/REGISTER khớp SHA, private RD1 được bảo vệ. **Không merge/deploy** trong AUTHORING.

**CHECKPOINT:** M5_D1_D6_CANDIDATE_R01; DIRECT_SGK_SBT_S1_AUDIT_FOR_B16_B17=YES; EXISTING_B16_B17_IDS_REUSE_PLANNED; NEW_PUBLIC_ITEM_APPROVED=0; M5_INDEPENDENT_ACADEMIC_PED=PENDING; FULL_TOPIC_CONTENT_READY=NO.


---

### M6 — Original reviewed authoring material 4/5

**SOURCE_PATH:** `prototypes/thpt/content-drafts/topic-functions/Temp_TOPIC_FUNCTIONS_M6_KNOWLEDGE_CONCEPT_TO_SECOND_DERIVATIVE_R01_20261107.md`  
**SOURCE_GIT_BLOB:** `f35e7fcd99b853bb5f9392c6ded25c2e20aa012f`  
**CURRENT_SCOPED_VERDICT:** ACADEMIC_PASS_AND_PED_PASS_ACCEPTED, no changed math/solutions/FIG from source

# Chuyên đề Hàm số và đồ thị — M6: Thay đổi “ngay lúc này” là gì?

**PACKET_ID:** THPT-TOPIC-FUNCTIONS-M6-R01-20261107  
**SOURCE_TYPE:** AUTHORING CANDIDATE; DELTA_C pedagogical material, NOT independently Academic/PED PASS  
**STANDARD:** SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18, one norm; PED is flexible, not a rigid page template  
**PATH:** TOPIC (Kiến thức → Luyện tập → Tự kiểm tra), no separate Core. This is the learner-facing Knowledge draft; source/audit metadata is for author only.  
**DIRECT S1:** Original SGK KNTT Toán 11 Tập 2, printed p81–87 B31, p88–94 B32, p95–96 B33 (PDF 1-based p82–88, p89–95, p96–97). Original SBT KNTT 11 Tập 2, printed p54–57 B31, p58–60 B32, p61–62 B33 (PDF p55–58, p59–61, p62–63), plus end ChIX p63–65. Each relevant page visually inspected.  
**SOURCE ORIGINAL SHA256:** SGK 11 T2 14ec0da7fa3d7c7365ed7f64599fc1e26484eccf1557301c57012ae64338e491; SBT 11 T2 a7c3d5ee9770377e16d7df97c531a2bc081fa47c8266fd4ad3438cba0d04e189.  
**G11 EXISTING CANONICAL SOURCE:** prototypes/thpt/content-drafts/G11_CHIX_B31_B33_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md, Git blob 3fe3b1a12fac656b543ba3ba2743e3ba855c4fe0; any identical SGK example/item keeps same source ID and solution. No RD1/private assessment information here.

## M6.1 — Vì sao vận tốc trung bình chưa trả lời câu hỏi “ngay lúc này”?

Nếu đi được 100 m trong 20 s, tốc độ trung bình bằng 5 m/s, nhưng từng giây có thể nhanh, chậm khác nhau. Khi đại lượng s(t) là **vị trí có dấu** trên trục, độ thay đổi trung bình từ thời điểm t đến t+h là

\[
\frac{s(t+h)-s(t)}{h},\qquad h\ne0.
\]

Tử là độ dời có dấu, nên kết quả là **vận tốc trung bình có dấu** (m/s), không nhất thiết là tốc độ trung bình theo tổng quãng đường nếu vật quay đầu.

Hãy xét mô hình s(t)=t²+2t (m) với t≥0 (s). Quanh t=2:

\[
\frac{s(2+h)-s(2)}h
=\frac{(2+h)^2+2(2+h)-8}h
=6+h
\]

với h khác 0 và thời điểm hợp lệ. Khi h ngày càng gần 0, thương tiến tới 6; ta nói vận tốc **tức thời** lúc t=2 là 6 m/s. Đây là lý do cần khái niệm **giới hạn** từ M5. Không thay h=0 vào phân thức gốc: nó chưa xác định ở h=0.

Tổng quát, nếu giới hạn hữu hạn

\[
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}h
\]

tồn tại ở điểm a thuộc **phần trong của miền xác định**, ta gọi đó là đạo hàm tại a và hàm là **khả vi** ở a. Có thể dùng dạng tương đương giới hạn của [f(x)−f(a)]/(x−a) khi x tiến a. Đạo hàm f'(a) là **một số**, còn f'(x) là **một hàm** cho độ dốc tức thời tại các điểm trong miền thích hợp.

**Lưu ý miền:** ở điểm đầu mút chỉ tiếp cận từ một phía, có thể nói về đạo hàm một phía, nhưng không coi là đạo hàm hai phía trên khoảng. f(x)=√x xác định tại 0; thương bên phải [√h−0]/h=1/√h tiến +∞, không có đạo hàm hữu hạn tại 0.

**Tự thử M6-T01.** Tự tính thương sai phân của f(x)=x² tại a=1 rồi giải thích giá trị khi h→0. Vì sao h=0 không phải bước đầu?
<details><summary>Đã thử xong? Mở đối chiếu</summary>
Thương bằng ((1+h)²−1)/h=2+h với h≠0; giới hạn bằng 2. h=0 làm mẫu 0 ở phân thức ban đầu. Nếu còn lẫn, quay lại s(t) ở đầu mục.
</details>

## M6.2 — Từ cát tuyến đến tiếp tuyến, và khi đồ thị có góc nhọn

Trên đồ thị y=f(x), lấy P(a,f(a)) và Q(a+h,f(a+h)). Hệ số góc đường thẳng **cát tuyến** PQ chính là thương sai phân. Nếu độ dốc của các cát tuyến tiến đến một giá trị hữu hạn khi Q tiến sát P, đường thẳng qua P với độ dốc ấy là **tiếp tuyến**. Phương trình:

\[
y-f(a)=f'(a)(x-a).
\]

**Vì sao không viết luôn y=f'(a)x?** Vì tiếp tuyến phải đi qua điểm P đã biết, chứ không nhất thiết đi qua gốc O.

**Hình D5 dùng chung:** FIG-G11-CHIX-B31-01_R00.svg, Git blob ca0a19f3931983632f88754bf4317d012add6b79. Đọc điểm P(1,1) và Q(1,8;3,24) trên y=x²; độ dốc cát tuyến là 2,8. Khi Q trượt dần đến P, độ dốc tiến 2. Tiếp tuyến tại P là y−1=2(x−1), tức y=2x−1. Không dùng một hình chụp cát tuyến cố định như chứng minh giới hạn.

**Liên tục có đủ để có đạo hàm không?** Không. Hàm y=|x| liên tục tại 0 nhưng thương |h|/h bằng −1 với h<0 và +1 với h>0; hai giới hạn một phía khác nhau. Vì thế không có đạo hàm tại góc nhọn. **Có đạo hàm thì liên tục**, còn chiều đảo lại là sai. Hình D5 FIG-G11-CHIX-B31-02_R00.svg, blob b569565e99675ad5ba56a11fb38cf1f8977ba134: đọc hai nhánh gặp nhau ở O nhưng độ dốc −1 và +1, không gộp chúng thành một tiếp tuyến.

**Ví dụ có suy luận:** f(x)=x²−2x+3 tại a=2. Ta có f(2)=3, f'(x)=2x−2 nên f'(2)=2. Tiếp tuyến đi qua (2,3) và có hệ số góc 2: y−3=2(x−2), hay y=2x−1. Nếu học sinh viết y=2x, kiểm lại khi x=2 sẽ cho y=4, không đi qua (2,3).

**Tự thử M6-T02.** y=|x−2| liên tục tại x=2 không? Hệ số góc trái và phải là gì?
<details><summary>Đã tự làm? Mở đối chiếu</summary>
Hàm liên tục, nhận giá trị 0 tại 2 và tiến về 0 từ hai phía. Thương sai phân tại 2 từ trái bằng −1, từ phải +1, nên không khả vi tại 2. Nếu nhầm, quay lại hình góc nhọn.
</details>

## M6.3 — Tại sao cần bảng đạo hàm? Quy tắc là hệ quả của thay đổi

Tính giới hạn thương sai phân từ đầu cho mọi biểu thức dài rất dễ sai. Các quy tắc sau có ý nghĩa: tổng thay đổi từ hai phần, tích thay đổi vì **cả hai thừa số**, và hàm hợp thay đổi qua **hai tầng**.

Nếu u(x), v(x) khả vi tại điểm đang xét:

\[
(c)'=0,\quad (u\pm v)'=u'\pm v',\quad (cu)'=cu',
\]
\[
(uv)'=u'v+uv',\qquad (u/v)'=\frac{u'v-uv'}{v^2}\quad(v\ne0).
\]

**Bản chất quy tắc tích:** diện tích hình chữ nhật có hai cạnh u và v. Khi chúng đổi thêm Δu, Δv, diện tích tăng vΔu+uΔv+ΔuΔv. Khi chia cho Δx rồi cho Δx→0, nếu u,v khả vi, hạng chéo bậc hai mất đi; còn hai đóng góp vu'+uv'. **Hình D5:** FIG-G11-CHIX-B32-01_R00.svg, blob bc35da6f466cfaac519fe84e483856a3e4e24464, đọc vùng uv cũ, hai dải bổ sung và góc chéo nhỏ.

**Bản chất quy tắc dây chuyền:** f(x)=g(u(x)): trước hết x làm u thay, sau đó u làm g thay. Vì vậy f'=g'(u(x))u'(x) trên những điểm các đạo hàm phù hợp tồn tại. Hình D5 FIG-G11-CHIX-B32-02_R00.svg, blob 6493758f2ebf13f51a81847f91835b2ba1fcdb38, đọc hai mũi tên x→u→g(u), không bỏ đạo hàm tầng trong.

**Ví dụ 1 — tích và hợp:** F(x)=(x²+1)sin(2x). Tầng ngoài là **tích**; bên trong sin lại có **hàm hợp**:

\[
F'=2x\sin(2x)+2(x^2+1)\cos(2x).
\]

Không viết 2x·2cos(2x), vì đó là nhân hai đạo hàm, bỏ qua hai phần của quy tắc tích.

**Ví dụ 2 — thương và miền:** G(x)=x²/(x+1), điều kiện x≠−1. Chọn quy tắc thương:

\[
G'=\frac{2x(x+1)-x^2}{(x+1)^2}
=\frac{x(x+2)}{(x+1)^2}\quad(x\ne-1).
\]

Việc có công thức đơn giản không làm G hay G' nhận thêm giá trị ở x=−1.

**Tự thử M6-T03.** Lấy đạo hàm f(x)=x(x²+1) theo tích, rồi khai triển và lấy đạo hàm để kiểm.
<details><summary>Đã tính? Mở đối chiếu</summary>
f'=1·(x²+1)+x·2x=3x²+1. Khai triển f=x³+x cũng được 3x²+1. Nếu chỉ có 2x, em đã nhầm (uv)' với u'v'.
</details>

## M6.4 — Bảng công cụ chỉ dùng sau khi đã kiểm điều kiện

| Họ hàm | Công thức trên miền hợp lệ |
|---|---|
| c, x^n | (c)'=0; (x^n)'=n x^(n−1), khi hàm và quy tắc được định nghĩa; n nguyên là trường hợp cơ bản |
| √x | (√x)'=1/(2√x) chỉ khi x>0; √0 có nghĩa nhưng đạo hàm hữu hạn tại 0 không có |
| sin x, cos x | (sin x)'=cos x, (cos x)'=−sin x trên R |
| tan x, cot x | (tan x)'=1/cos²x khi cos x≠0; (cot x)'=−1/sin²x khi sin x≠0 |
| e^x, a^x | (e^x)'=e^x; (a^x)'=a^x ln a với a>0, a≠1 |
| ln x, log_a x | (ln x)'=1/x và (log_a x)'=1/(x ln a) với x>0, a>0, a≠1 |
| u(x) hợp | (sin u)'=u' cos u; (e^u)'=u'e^u; (ln u)'=u'/u với u>0; (√u)'=u'/(2√u) với u>0 |

**Nhắc tiền đề ở ngay Topic:** ln x là logarit cơ số e, với e>1; log_a x hỏi “phải nâng cơ số a lên mũ nào để được x”, nên đối số x phải dương. Tan x=sin x/cos x nên cos x khác 0; cot x=cos x/sin x nên sin x khác 0. Đạo hàm của hàm hợp không thể “bỏ tầng trong”.

**Cách chọn phép tính:** (1) ghi tập xác định gốc; (2) nhìn cấu trúc ngoài: tổng, tích, thương, hay hợp; (3) tính đạo hàm từng thành phần và tầng trong; (4) kiểm lại miền, dấu, mẫu; (5) nếu tại một điểm đặc biệt công thức không hợp lệ, quay về **định nghĩa thương sai phân**. Không tự suy đạo hàm tồn tại tại đầu mút của căn hay điểm loại của log/tan.

**Ví dụ 3 — căn:** H(x)=√(9−x²) xác định trên [−3,3], nhưng

\[
H'(x)=-x/\sqrt{9-x^2}\quad\text{chỉ trên }(-3,3).
\]

Tại ±3, căn bằng 0, mẫu đạo hàm không hợp lệ; không mở rộng đạo hàm sang hai đầu mút.

**Ví dụ 4 — tan hợp:** T(x)=tan(2x), miền x≠π/4+kπ/2 (k nguyên). T'(x)=2/cos²(2x) trên mỗi khoảng xác định. Dấu đạo hàm dương không có nghĩa T là một hàm đồng biến trên **toàn R**, vì miền bị chia nhánh.

**Ví dụ 5 — log hợp:** L(x)=ln(x²+1) có miền R; L'(x)=2x/(x²+1). Đạo hàm của x²+1 là 2x, không phải 1.

**Ví dụ 6 — mũ cơ số khác e:** N(x)=2^(−x) cho mọi x thực; N'=−2^(−x)ln2 <0. Dấu âm từ đạo hàm −x giải thích hàm giảm.

**Tự thử M6-T04.** Tìm miền và đạo hàm f(x)=ln(3x−1). Tại sao lời giải 1/(3x−1) thiếu một bước?
<details><summary>Đã thử? Mở đối chiếu</summary>
Miền x>1/3; f'=3/(3x−1) trên miền. Cần nhân đạo hàm tầng trong 3x−1 bằng 3.
</details>

## M6.5 — Đạo hàm cấp hai: vận tốc cũng thay đổi

Nếu s(t) là vị trí (m), v(t)=s'(t) là vận tốc có dấu (m/s), a(t)=v'(t)=s''(t) là gia tốc có dấu (m/s²). Ta lấy đạo hàm lần hai vì **muốn biết chính vận tốc đang đổi thế nào**, không vì một công thức thuộc lòng.

Với s(t)=12t−3t² (m) trên 0≤t≤4 (s), ở các thời điểm trong khoảng:
\[
v(t)=12-6t,\qquad a(t)=-6\ {\rm m/s^2}.
\]
Tại t=1, v=+6 và a=−6, trái dấu: tốc độ |v| đang giảm. Tại t=3, v=−6 và a=−6, cùng dấu: vật chuyển động theo chiều âm nhưng tốc độ |v| đang tăng. Tại t=2, v=0, xét hai khoảng lân cận thay vì gọi “nhanh/chậm” bằng quy tắc dấu đúng tại điểm dừng.

**Hình D5:** FIG-G11-CHIX-B33-01_R00.svg, blob 58fcb5ce261fe35d93d8eacd2af584c7b93dc1a9, có chuỗi quan hệ vị trí→vận tốc→gia tốc. Hướng dẫn đọc: xem tên đại lượng và đơn vị trên từng trục, rồi đối chiếu dấu v,a theo từng khoảng.

**Ví dụ 7 — tính hai lần:** f(x)=x³−3x²+2x có f'=3x²−6x+2, f''=6x−6. Tại x=1, f''=0; trong trường hợp này f'' đổi dấu qua 1, nên đồ thị đổi chiều lõm tại đó. Nhưng **chỉ riêng f''(a)=0 chưa chứng minh điểm uốn**. Phản ví dụ f(x)=x⁴: f''(x)=12x²≥0 cả hai phía của 0, f''(0)=0 nhưng không đổi chiều lõm.

**Cảnh báo không được nhầm:** f'(a)=0 là tiếp tuyến ngang, chưa đủ chứng minh cực trị; f''(a)>0 không đồng nghĩa f tăng tại a; gia tốc âm không đồng nghĩa vật luôn chậm dần. Việc khảo sát biến thiên/tối ưu cần dấu đạo hàm trên **các khoảng**, đó là mạch M7 tiếp theo.

**Tự thử M6-T05.** Với s(t)=t³−3t, tính vận tốc và gia tốc tại t=2, kể đơn vị nếu s (m), t (s).
<details><summary>Đã làm? Mở đối chiếu</summary>
v(t)=3t²−3, a(t)=6t; v(2)=9 m/s, a(2)=12 m/s². Nếu em ghi đơn vị gia tốc m/s, hãy nhớ gia tốc là vận tốc thay đổi theo thời gian.
</details>

**Tự thử M6-T06.** f(x)=x⁴ có f''(0)=0. Có được kết luận x=0 là điểm uốn không?
<details><summary>Đã giải thích? Mở đối chiếu</summary>
Không. f''(x)=12x² dương ở cả hai phía của 0, nên không có đổi chiều lõm. Cần thêm điều kiện/kiểm tra, không chỉ thế x=0.
</details>

## M6.6 — Khi em sai, nên quay lại đâu? (đường D6 tại Topic)

| Lỗi cụ thể | Bản chất bị bỏ quên | Cách sửa ngay tại Topic |
|---|---|---|
| Thế h=0 trước khi rút gọn | Thương sai phân chỉ định nghĩa khi h khác 0 | Quay lại M6.1 và TRY T01; khai triển rồi lấy giới hạn |
| Nói mọi hàm liên tục đều khả vi | Góc nhọn có hai độ dốc khác nhau | Quay lại hình B31-02 và TRY T02 |
| Viết y=f'(a)x | Tiếp tuyến còn phải qua (a,f(a)) | Dùng công thức y−f(a)=f'(a)(x−a) ở M6.2 |
| (uv)'=u'v' | Hai thừa số cùng tạo thay đổi | M6.3, hình hai dải diện tích, TRY T03 |
| Quên đạo hàm tầng trong | Hàm hợp thay qua hai tầng | M6.3–4, hình B32-02, TRY T04 |
| Công thức hợp lệ nhưng vượt miền | Mẫu/log/căn loại điểm đầu vào | M6.4, viết miền trước công thức |
| Gia tốc âm luôn chậm dần | Cần cả dấu vận tốc và gia tốc | M6.5, so t=1 và t=3 |
| f''(a)=0 suy ngay điểm uốn | Không đủ chứng cứ đổi chiều lõm | M6.5, x⁴ và TRY T06 |

**Ghi chú AUTHORING, không hiển thị nguyên văn:** Nội dung mới M6 là nguồn candidate, không phải lời giải SGK canonical thứ hai. Mỗi First Try mở đáp án tự nguyện chỉ là formative, không phải Topic Readiness/Final Submit và không ghi Mastery. Đồ thị SVG dùng lại source canonical qua placement; khi tích hợp Topic phải hiển thị hình ngay đây, không buộc học sinh mở SGK. Review NotebookLM mới theo đúng năm Permanent Sources v2.1 + S1, với SHA exact source. Không merge/deploy.


---

### M7 — Original reviewed authoring material 5/5

**SOURCE_PATH:** `prototypes/thpt/content-drafts/topic-functions/Temp_TOPIC_FUNCTIONS_M7_DERIVATIVE_TO_GRAPH_OPTIMIZATION_KNOWLEDGE_R01_20261107.md`  
**SOURCE_GIT_BLOB:** `944673fffe5dad9444c994e7719e5c054570bca2`  
**CURRENT_SCOPED_VERDICT:** ACADEMIC_PASS_AND_PED_PASS_ACCEPTED, no changed math/solutions/FIG from source

# Chuyên đề Hàm số và đồ thị — M7: Từ “đang tăng hay giảm?” đến vẽ hình và quyết định tối ưu

**PACKET_ID:** THPT-TOPIC-FUNCTIONS-M7-R01-20261107  
**STATUS:** AUTHORING CANDIDATE — NEW TOPIC ACADEMIC/PED DELTA_C; NotebookLM verdict PENDING, không Content Ready  
**STANDARD:** SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18 (một chuẩn); không ép mỗi module vào cùng một dàn ý PED  
**PATH:** Chuyên đề độc lập, gồm Kiến thức / Luyện tập / Tự kiểm tra; không tạo Core riêng. M7 nối M5 (giới hạn) + M6 (đạo hàm) → biến thiên, cực trị, tiệm cận, hình toàn cục, tối ưu  
**S1 DIRECT:** SGK Toán 12 KNTT Tập 1 B01 trang in 5–14/PDF 1-based 7–16; B02 15–19/PDF 17–21; B03 20–25/PDF 22–27; B04 26–32/PDF 28–34; B05 33–41/PDF 35–43. SBT Toán 12 KNTT Tập 1 B01 4–10/PDF 2–8, B02 11–16/PDF 9–14, B03 17–20/PDF 15–18, B04 21–26/PDF 19–24, B05 27–32/PDF 25–30; bài tập cuối chương 33–37/PDF 31–35. PDF của SGK đếm trang in +2; SBT đếm trang in −2.  
**PDF SHA256:** SGK \`faeb554bea9cf81189c5e790b1b1edb42f50b3648694acc80dc99682ada3f1fd\`, SBT \`db9d07a2fbe55cda3b4b50fb13d1767e45a7552f668b726241c59febac69c0ca\`. Chỉ dùng ảnh trang nguồn S1 đã mở, không đăng bản quét công khai.  
**OLDER SGK AUTHOR SOURCE:** \`G12_SGK_CHI_B01_B05_FULL_CHAPTER_PUBLIC_CANONICAL_R00_SOURCE_CANDIDATE.md\` blob \`f0862dcdab21dec136e43969f45c42638e7c7574\`, trong đó chính nguồn ghi \`INDEPENDENT_PENDING\`. Các item ID trong đó phải được xem là SOURCE_CANDIDATE tới khi receipt review tương ứng được xác minh, không tự gọi APPROVED.  
**FIG reuse:** 6 SVG nguồn học liệu B01–B05 đã lưu ở source-authoring, không sinh bản sao. Các ví dụ giải thích sau đây là lời dẫn thí điểm trong Topic, **không tạo ITEM_ID chính thức**. Không chứa RD1 kín hoặc cho phép Mastery.

## M7.0. Một đường cong nói được gì mà một vài giá trị không nói được?

Nếu em chỉ biết hàm số tại ba thời điểm, em biết ba “bức ảnh”. Nhưng muốn biết khi nào giá trị **đang tăng**, khi nào **đang giảm**, lúc nào tốt nhất hoặc khi x đi rất xa sẽ ra sao, em phải hiểu chuyển động của **cả đường cong**. Những công cụ đã có ở Topic:

- M1–M3: hàm số, miền xác định, cách đọc tọa độ và đồ thị.
- M4: các kiểu tăng/giảm, chu kỳ và họ hàm đặc biệt.
- M5: giới hạn, hành vi gần điểm và xa vô tận, liên tục.
- M6: đạo hàm \(f'(x)\) là tốc độ thay đổi tức thời của đầu ra theo đầu vào.

Ở đây em sẽ **kết hợp** các công cụ ấy. Không cần quay sang SGK để hoàn thành một bước kiến thức bắt buộc.

## M7.1. Dấu đạo hàm: Đường cong đang đi lên hay đi xuống?

Trước tiên, hãy tưởng tượng em đi trên đường cong từ **trái sang phải**. Đạo hàm dương nghĩa là tiếp tuyến nghiêng lên, âm nghĩa là nghiêng xuống. Trên một **khoảng liên tục và khả vi thích hợp**, nếu \(f'(x)>0\) khắp khoảng thì f **đồng biến**; nếu \(f'(x)<0\) khắp khoảng thì f **nghịch biến**. Có những trường hợp \(f'=0\) tại vài điểm nhưng hàm vẫn đồng biến, nên không được đòi “dương mọi điểm” như một điều kiện cần.

**EX-M7-01 — Đọc dấu trước khi đặt tên cực trị.** Cho \(f(x)=x^3-3x\), miền \(\mathbb R\). Ta có \(f'(x)=3x^2-3=3(x-1)(x+1)\).

| Khoảng của x | \((-\infty,-1)\) | \((-1,1)\) | \((1,+\infty)\) |
|---|---:|---:|---:|
| Dấu \(f'(x)\) | + | − | + |
| Hàm f | Tăng | Giảm | Tăng |

Vì hàm đổi **tăng → giảm** khi qua −1, \(f(-1)=2\) là **cực đại địa phương**. Qua +1, đổi **giảm → tăng**, \(f(1)=-2\) là **cực tiểu địa phương**. Chính **đổi dấu** và giá trị tại điểm làm nên kết luận, không phải mỗi phép giải \(f'=0\).

**Một bẫy cần hiểu:** \(g(x)=x^3\) có \(g'(0)=0\) nhưng g vẫn tăng từ trái sang phải qua 0; không có cực đại/cực tiểu tại đó. Tại điểm f' không tồn tại, cũng phải xét dấu/hành vi, ví dụ \(g(x)=|x|\) có cực tiểu tại 0 dù không có đạo hàm ở đó.

**D5 đọc trực tiếp trong Topic:** \`G12_B01_FIG01_DERIVATIVE_SIGN_R00.svg\`, source blob \`e2696224533994826104e6c505d9dab26fc0a2e2\`. Hãy đọc hai trục, điểm x=−1,1, các dấu +/− trên khoảng và chiều mũi tên. Đừng chỉ nhìn hình rồi điền dấu mà quên kiểm đại số \(f'\).

**TỰ THỬ M7-T01.** \(h(x)=x^3\). Đạo hàm bằng 0 tại x=0. Có thể kết luận cực trị không? Nêu một lý do bằng dấu hoặc lập luận so sánh giá trị.
<details><summary>Tự nghĩ xong? Mở đối chiếu</summary>
Không. \(h'(x)=3x^2\ge0\) và h tăng qua 0; với x<0, h(x)<0=h(0), còn x>0, h(x)>0. Không đổi từ tăng sang giảm hoặc ngược lại, nên h(0) không là cực trị.
</details>

**Luôn tôn trọng miền:** \(r(x)=1/(x-1)\) có \(r'(x)=-1/(x-1)^2<0\) trên hai khoảng \((-\infty,1)\), \((1,+\infty)\). Ta nói r **giảm trên từng khoảng đó**, không gọi “giảm trên toàn \(\mathbb R\)” hoặc kết nối qua x=1 vì hàm không xác định tại 1.

## M7.2. Cực trị quanh một điểm khác giá trị lớn nhất/nhỏ nhất trên miền

Một **cực đại địa phương** chỉ so với những điểm **ở gần** nó. **GTLN trên miền D** phải là giá trị lớn hơn hoặc bằng **mọi** giá trị f(x) trên D, và phải **đạt tại một x∈D**. Tương tự với GTNN. Vì vậy, một “đỉnh cục bộ” có thể không là cao nhất trên cả miền.

**Vì sao kiểm cả đầu mút?** Trên đoạn đóng \([a,b]\), nếu f liên tục, luôn đạt GTLN và GTNN. Các điểm cần kiểm trong bài khả vi thông thường là **đầu mút**, các điểm \(f'=0\), và các điểm f' không tồn tại nhưng f vẫn xác định. Nếu đoạn bị ràng buộc bởi miền khác, cần giao miền trước; không thế một giá trị ngoài miền vào bảng.

**EX-M7-02 — So các ứng viên, không chỉ giải đạo hàm.** Với \(q(x)=x^2\) trên \([-2,1]\), đạo hàm \(q'(x)=2x\), bằng 0 tại 0. So \(q(-2)=4\), \(q(0)=0\), \(q(1)=1\): **GTLN = 4 đạt ở −2**, GTNN = 0 đạt ở 0. Đỉnh thấp nhất nằm trong đoạn; cao nhất lại ở đầu mút.

**Trái lại, trên khoảng mở \((0,1)\)**, \(x^2\) luôn dương và nhỏ hơn 1, nhưng **không đạt** 0 hoặc 1 trong miền; do đó **không có GTLN hay GTNN** trên khoảng này, dù có cận trên/cận dưới. Câu “có giới hạn bằng 1 khi x→1⁻” không làm cho x=1 trở thành một điểm trong miền.

**D5:** \`G12_B02_FIG01_GLOBAL_MIN_MAX_CLOSED_INTERVAL_R00.svg\`, blob \`057991020c0f9349f160047cd87ae35ce03a87ef\` minh họa **một hàm khác** \(y=x^2-4x+1\) trên [0,5], **không phải đồ thị của \(q=x^2\)**. Học sinh hãy đọc: f(0)=1, f(2)=−3 (thấp nhất), f(5)=6 (cao nhất); xác định các điểm có/không nằm trong đoạn. Không ghép nhầm lời giải EX-M7-02 vào hình B02.

**TỰ THỬ M7-T02.** \(f(x)=x^2\) trên \((-1,2)\). Giá trị f nhỏ nhất có tồn tại không? Có GTLN không? Giải thích bằng miền, không chỉ ghi số 4.
<details><summary>Đã thử? Mở đối chiếu</summary>
GTNN bằng 0 và đạt tại x=0 (thuộc khoảng). Không có GTLN: khi x→2⁻ thì x² tiến sát 4 nhưng x=2 không thuộc khoảng; mọi giá trị thực tế trong miền đều <4. Phải phân biệt GTNN đạt được với cận trên không đạt.
</details>

## M7.3. Đồ thị ở gần điểm loại và ở rất xa: Khi nào gọi là tiệm cận?

Một đường **tiệm cận đứng** \(x=a\) được xác định khi f(x) tăng/giảm không bị chặn (\(+\infty\) hoặc \(-\infty\)) khi x→a từ **ít nhất một phía hợp lệ**. Chỉ có “mẫu bằng 0” chưa chứng minh tiệm cận đứng: phải xét giới hạn của **hàm gốc**.

**Phản ví dụ lỗ đồ thị:** \(f(x)=(x^2-1)/(x-1)\), x≠1, bằng x+1 khi x≠1; giới hạn khi x→1 bằng 2, **hữu hạn**, nên x=1 **không** là tiệm cận đứng, chỉ là lỗ tại (1,2).

Một **tiệm cận ngang** \(y=L\) xuất hiện nếu \(\lim_{x\to+\infty}f(x)=L\) hoặc \(\lim_{x\to-\infty}f(x)=L\). Hai phía vô cực có thể cho hai giá trị khác nhau; hàm có thể cắt tiệm cận ngang tại chỗ khác. Một **tiệm cận xiên** \(y=ax+b\) với a≠0 đòi \(f(x)-(ax+b)\to0\) khi x→+∞ hoặc −∞. Chỉ vì đồ thị trông gần một đường nghiêng trên hình vẽ chưa đủ: hãy kiểm **hiệu tiến 0**.

**EX-M7-03 — Dấu mẫu và tiệm cận ngang/đứng.** \(f(x)=(3x+1)/(x-2)=3+7/(x-2)\). Miền x≠2. Khi x→2⁻, \(7/(x-2)\to-\infty\); khi x→2⁺, nó→+\infty. Vậy x=2 là tiệm cận đứng. Khi x→±∞, phần 7/(x−2)→0, nên y=3 là tiệm cận ngang ở cả hai phía. **Không nối hai nhánh qua x=2.**

**D5:** \`G12_B03_FIG01_ASYMPTOTES_R00.svg\`, blob \`802f01f5b8dce392e3a064a54efe33ae1aea44fc\`, vẽ **đúng** f(x)=(3x+1)/(x−2): trục x/y, nét đứt x=2/y=3, nhánh trái dưới y=3 và phải trên y=3. Nét đứt biểu diễn tiệm cận, **không thuộc đồ thị f**.

**EX-M7-04 — Tiệm cận xiên từ phần dư.** \(g(x)=x+1+2/(x-1)\), x≠1. Hiệu \(g(x)-(x+1)=2/(x-1)\to0\) khi x→±∞; vậy y=x+1 là tiệm cận xiên. x=1 là tiệm cận đứng vì 2/(x−1) không bị chặn gần 1. Ở bài này không gọi y=x+1 là một tiệm cận ngang vì hệ số x bằng 1≠0.

**TỰ THỬ M7-T03.** \(r(x)=(x^2-9)/(x-3)\), x≠3. Có tiệm cận đứng x=3 không? Nêu phép biến đổi hợp lệ và giới hạn tại x=3.
<details><summary>Đã thử? Mở đối chiếu</summary>
Không. Với x≠3, r=x+3 nên giới hạn khi x→3 bằng 6. Điểm (3,6) là lỗ, không phải chỗ đồ thị chạy vô cực. Quay lại M5 nếu còn lẫn “không xác định” với “vô cực”.
</details>

## M7.4. Khảo sát và vẽ đồ thị không phải một danh sách bước vô nghĩa

Lý do cần **một bức tranh toàn cục** là: chỉ đạo hàm chưa nói có lỗ/tiệm cận không; chỉ giới hạn chưa nói tăng/giảm; chỉ nghiệm chưa cho biết hình dáng. Hãy kết hợp theo đúng câu hỏi cần trả lời:

1. **Miền D:** x nào được phép? Mọi bước sau phải tôn trọng D.
2. **Điểm có ý nghĩa:** giao trục, điểm \(f'=0\), điểm f' không có nghĩa nhưng f có nghĩa; không đánh đồng chúng.
3. **Chiều biến thiên và cực trị:** xét dấu f' trên **từng khoảng** bị chia bởi nghiệm, điểm loại và miền.
4. **Hành vi ở biên/xa vô cực:** giới hạn một phía, tiệm cận nếu có.
5. **Bảng biến thiên & nét đồ thị:** đặt đủ điểm/tiệm cận, hướng mũi tên và kiểm xem nét có xuyên điểm cấm không.
6. **Đối xứng nếu có:** kiểm \(f(-x)=\pm f(x)\) với miền đối xứng hoặc một phép biến đổi thực sự, không phán đoán chỉ bằng mắt.

**EX-M7-05 — Một phân thức, tất cả manh mối có liên hệ.**
Xét \(g(x)=(x+2)/(x-1)=1+3/(x-1)\).
- Miền \(D=\mathbb R\setminus\{1\}\).
- Giao Ox: \(x=-2\) (tử 0, mẫu ≠0), giao Oy: \((0,-2)\).
- \(g'(x)=-3/(x-1)^2<0\) ở mọi x thuộc D. **G giảm trên hai khoảng riêng** \((-\infty,1)\), \((1,+\infty)\); không kết luận giảm xuyên x=1.
- Khi x→1⁻, g→−∞; x→1⁺, g→+∞; tiệm cận đứng x=1.
- Khi x→±∞, g→1; tiệm cận ngang y=1. Trên nhánh trái g<1, trên nhánh phải g>1.
- Bảng biến thiên gồm hai nhánh tách tại 1; do g'<0 trên từng nhánh, **không có cực trị nội tại** của hai nhánh.

**D5:** \`G12_B04_FIG01_RATIONAL_SURVEY_R00.svg\`, blob \`529b05d33fb0347dab70587c84c8ec08789c5c98\`, biểu diễn chính \(g\) trên. Kiểm lại hình bằng các số \((-2,0)\), \((0,-2)\), tiệm cận \(x=1\) và \(y=1\). Nếu hình không đọc rõ, mô tả trên đủ để tái dựng.

**EX-M7-06 — Một đa thức, không có tiệm cận.**
Cho \(h(x)=x^3-3x^2=x^2(x-3)\), miền R. Ta có \(h'=3x(x-2)\): dấu + trên \((-\infty,0)\), − trên \((0,2)\), + trên \((2,+\infty)\). Cực đại địa phương \(h(0)=0\); cực tiểu địa phương \(h(2)=-4\). Các nghiệm \(x=0\) (bội hai, đồ thị **chạm** Ox) và \(x=3\) (cắt Ox). Đa thức không có tiệm cận đứng, ngang hay xiên như các phân thức trên; khi x→±∞, h→±∞. Đồ thị không bị tách nhánh tại điểm loại.

**D5:** \`G12_B04_FIG02_CUBIC_SURVEY_R00.svg\`, blob \`8e4cf830e5aa1cac3fe37b9b3c3d93d9b34c006b\`. Đọc điểm O, điểm (2,−4), điểm cắt Ox tại 3; một điểm có \(f'(0)=0\) còn có thể là cực đại vì dấu **thật sự đổi** qua 0.

**TỰ THỬ M7-T04.** Với \(g(x)=(x+2)/(x-1)\), có được kẻ một nét liền đi qua x=1 không? g tăng/giảm trên những khoảng nào? Vì sao?
<details><summary>Mở đối chiếu</summary>
Không, g không xác định ở x=1 và có tiệm cận đứng ở đó. g' âm trên từng khoảng \((-\infty,1)\) và \((1,+\infty)\), nên giảm trên từng khoảng. Đừng lấy “g'<0” để nối xuyên điểm loại.
</details>

## M7.5. Tối ưu một tình huống thực: trước đạo hàm là **miền khả thi**

Trong thực tế, ta không thể chọn mọi số x chỉ vì công thức toán học có nghĩa. Một tấm bìa dài 30 cm và rộng 20 cm được cắt bốn hình vuông cạnh x cm rồi gấp thành hộp **không nắp**. Để hộp có đáy và chiều cao dương:
\[
x>0,\quad 30-2x>0,\quad20-2x>0
\quad\Rightarrow\quad 0<x<10.
\]
**Nếu em lấy x=12 theo một nghiệm đạo hàm mà bỏ miền vật lý, “đáy” có chiều rộng âm — không thể làm hộp.**

Thể tích hộp là \(V(x)=x(30-2x)(20-2x)\), đo bằng cm³. Khai triển:
\[
V(x)=600x-100x^2+4x^3,\quad
V'(x)=600-200x+12x^2=4(3x^2-50x+150).
\]
Giải \(V'=0\) được
\[
x_1=\frac{25-5\sqrt7}{3}\approx3{,}924,\qquad
x_2=\frac{25+5\sqrt7}{3}\approx12{,}743.
\]
Chỉ \(x_1\in(0,10)\). Vì V' dương trước \(x_1\) và âm từ \(x_1\) tới 10, thể tích đạt **GTLN** tại \(x=x_1\). Giá trị x₂ bị loại vì không làm được hộp. Hai đầu mút x→0⁺ và x→10⁻ cho V tiến về 0, nhưng trong miền hộp không suy biến **không có GTNN bằng 0 được đạt**; đó chỉ là cận dưới.

**Tại sao chọn dấu đạo hàm thay vì chỉ thử vài kích thước?** Thử một số giá trị có thể gợi đoán nhưng không bảo đảm lớn nhất. Đạo hàm, miền và giới hạn ở biên cho lập luận bao phủ mọi kích thước hợp lệ. **Giới hạn mô hình:** bỏ qua độ dày giấy, mép gấp, hao phí, nên kết luận là cực đại của mô hình hình học, không tự bảo đảm hiệu quả sản xuất thực tế.

**D5:** \`G12_B05_FIG01_BOX_VOLUME_R00.svg\`, blob \`eacd5ba60f25d87c102917a55d314fb16d6f8341\`, chính xác mô tả tấm bìa **30×20 cm**, miền 0<x<10 và đỉnh tối ưu gần 3,924 cm. Hai đầu mút là vòng tròn rỗng; khi đọc hình, phải nhận ra **GTLN đạt trong miền** nhưng GTNN bằng 0 không đạt.

**EX-M7-07 — Tối ưu trong một miền mở vô hạn.** Một mô hình chi phí (đơn vị quy ước) \(C(x)=x+16/x\) với \(x>0\). Ta có \(C'(x)=1-16/x^2=(x^2-16)/x^2\), âm trên (0,4), dương trên (4,+∞). Vì vậy C giảm rồi tăng, **GTNN=8** đạt khi x=4. Khi x→0⁺ hoặc x→+∞, C→+∞ nên không có GTLN trên (0,+∞). Không chọn x âm, vì miền công thức thực tế đã nêu x>0.

**EX-M7-08 — Khi mô hình đã sai trước khi tính.** Nếu công thức lợi nhuận chỉ có nghĩa khi sản xuất ít nhất 10 sản phẩm mỗi ngày, một nghiệm \(f'(x)=0\) ở x=3 (sản phẩm) **không phải phương án kinh doanh hợp lệ**. Hãy viết miền \(x\in\mathbb Z, x\ge10\) (nếu sản phẩm phải nguyên) rồi cân nhắc nghiệm đạo hàm liên tục như **gợi ý** để kiểm các số nguyên lân cận, không gọi đạo hàm trực tiếp tại “số lượng rời rạc” là chứng minh tối ưu. Mức lợi nhuận thật có thể khác mô hình.

**TỰ THỬ M7-T05.** Tấm bìa 30×20 cm: tại sao x=0 và x=10 bị loại khỏi bài toán hộp không suy biến? Nghiệm x≈12,743 có dùng được không?
<details><summary>Đã tự giải thích? Mở đối chiếu</summary>
Tại x=0, hộp cao 0; tại x=10, chiều rộng đáy 20−2x=0. Cả hai đều không tạo hộp có thể tích dương. x≈12,743 còn lớn hơn 10 làm chiều rộng âm nên không hợp lệ. Luôn kiểm miền trước và sau khi giải V'=0.
</details>

**TỰ THỬ M7-T06.** \(C(x)=x+16/x\) trên x>0. Có GTNN không? Có GTLN không? Vì sao một điểm mà C'=0 chưa đủ nếu em không kiểm dấu và miền?
<details><summary>Mở phần đối chiếu</summary>
C'=1−16/x² đổi từ âm sang dương tại x=4; C(4)=8 là GTNN. C→+∞ khi x→0⁺ hoặc +∞ nên không có GTLN hữu hạn. Chỉ giải C'=0 chưa đủ nếu không kiểm rằng 4 thuộc miền và chiều biến thiên ở hai phía.
</details>

## M7.6. Đạo hàm là tốc độ thay đổi **có đơn vị**, không chỉ một bài hình học

Ở M6 em đã hiểu \(s'(t)\) là vận tốc có dấu của vị trí, còn \(s''(t)\) là gia tốc. Khi một hàm mô tả **nồng độ**, **số lượng**, **chi phí**, ta cũng hỏi cùng một điều: đầu ra thay đổi bao nhiêu khi đầu vào tăng thêm một lượng nhỏ?

- Nếu \(C(t)\) là nồng độ (mol/L) ở thời điểm t tính bằng giây, \(C'(t)\) có đơn vị mol/(L·s). Dấu và giá trị cho biết nồng độ **đang tăng/giảm với tốc độ tức thời** theo thời gian; không tự nói toàn bộ phản ứng đã hoàn tất.
- Nếu \(P(t)\) là số lượng cá thể trong mô hình liên tục theo t (năm), \(P'(t)\) có đơn vị cá thể/năm; với mô hình đếm cá thể thực tế theo năm nguyên, cần phân biệt đạo hàm của **hàm nội suy** và hiệu giữa hai số liệu năm liên tiếp.
- Nếu \(K(q)\) là chi phí theo số sản phẩm q, \(K'(q)\) có đơn vị tiền/sản phẩm, thường được diễn giải là **chi phí cận biên** trong mô hình liên tục. Không tự coi đạo hàm là chính xác số tiền tăng khi sản xuất thêm tròn một sản phẩm.

**EX-M7-09 — Chi phí cận biên khác đúng một đơn vị tăng thực tế.** Giả sử mô hình chi phí \(K(q)=100+3q+0{,}02q^2\) (nghìn đồng), q≥0 là số sản phẩm. Xét **mô hình nội suy cho q thực** thì \(K'(q)=3+0{,}04q\) (nghìn đồng/sản phẩm). Ở q=10, \(K'(10)=3{,}4\) nghìn đồng/sản phẩm, biểu thị tốc độ thay đổi **tức thời** của mô hình. Nếu sản xuất thực tế theo q nguyên, chi phí tăng từ 10 lên 11 sản phẩm đúng bằng \(K(11)-K(10)=3{,}42\) nghìn đồng, **không đúng bằng 3,4**. Chênh 0,02 do mô hình cong; nếu bước đủ nhỏ, thương sai phân mới tiến gần đạo hàm. **Lý do chọn phương pháp:** muốn biết xu thế gần q=10 dùng đạo hàm; muốn biết đúng thay đổi 10→11 thì dùng hiệu thực của mô hình.

**TỰ THỬ M7-T07.** Với \(K(q)=100+3q+0{,}02q^2\), tại q=0, đạo hàm bằng bao nhiêu? Nếu q là số sản phẩm nguyên, em có thể gọi \(K'(0)\) là tiền tăng **chính xác** khi làm sản phẩm đầu tiên không?
<details><summary>Đã thử? Mở đối chiếu</summary>
\(K'(0)=3\) nghìn đồng/sản phẩm theo mô hình liên tục. Mức tăng đúng \(K(1)-K(0)=3{,}02\) nghìn đồng, khác 3. Đạo hàm là tốc độ thay đổi cục bộ của mô hình, không tự thay thế hiệu trên một bước nguyên. Nếu lẫn, quay lại thương sai phân M6.1.
</details>

## M7.7. Kết nối lỗi sai với đúng “đường về” tự học (D6/PED6)

| Dấu hiệu người học gặp | Chẩn đoán ý nghĩa bị thiếu | Hướng khắc phục trực tiếp trong Topic |
|---|---|---|
| \(f'(a)=0\Rightarrow\) cực trị | Điều kiện cần ở điểm khả vi không đủ; cần dấu hai phía hoặc lập luận khác | M7.1, phản ví dụ x³, TRY T01 |
| Cực đại địa phương = GTLN | Địa phương chỉ so gần, không so toàn miền | M7.2, bảng giá trị tại đầu mút và TRY T02 |
| Mọi giới hạn hữu hạn tại điểm loại là tiệm cận đứng | Lỗ không chạy ra vô cực | M7.3, rút gọn (x²−9)/(x−3), TRY T03 |
| \(f'<0\) nên giảm “trên R” dù có điểm loại | Dấu chỉ kiểm trên từng khoảng trong miền | M7.1, M7.4, TRY T04 |
| Chỉ dùng bảng đạo hàm để vẽ hình | Quên giao trục, giới hạn, điểm loại, tiệm cận, hình đối xứng | M7.4, đọc hai hình B04 |
| Nghiệm \(V'=0\) nằm ngoài miền vẫn chọn | Quên ràng buộc thực tế, đơn vị, đầu mút | M7.5, hình hộp và TRY T05 |
| Tối ưu trên khoảng mở mà tự nhận GTLN/GTTN ở biên không thuộc miền | Nhầm cận với giá trị đạt được | M7.2/M7.5, TRY T02/T06 |
| Gia tốc âm thì tốc độ luôn giảm | Cần cả dấu vận tốc và gia tốc | Quay lại M6.5 rồi tiếp M7.1 (không xem SGK bắt buộc) |
| Chi phí cận biên bằng đúng chi phí thêm một sản phẩm | Nhầm đạo hàm của mô hình liên tục với hiệu trên một bước rời rạc | M7.6, EX-M7-09 và TRY T07 |

**Tương thích Q15:** Tự thử ở đây chỉ để học và tự mở lời giải, không là item canonical mới hay câu bảo mật. Khi triển khai “Luyện tập”, source canonical đã xét trong ledger M7 sẽ có placement TOPIC trong cùng một thư viện đề/đáp án/rubric; học sinh không phải mở SGK. Mọi câu đã được xem đáp án đều **không** dùng làm chứng cứ độc lập Topic Readiness nếu thiếu kiểm soát exposure. Nội dung M7 mới cần reviewer NotebookLM 5 Permanent Sources v2.1 xác nhận Academic/PED theo từng outcome và exact source blob. Không tự merge/deploy.


---

## PART II — Luyện tập, one canonical item library, placement only

**Do not clone questions.** Source of truth for exact canonical item IDs, answer keys, worked solutions, Written/Anchor rubrics, SVG and HELP remains the verified historical SGK/Topic banks. The following ledgers are **authoring placement maps**, NOT extra canonical bank records:

| Scope | Ledger name | Git blob |
|---|---|---|
| M4 | `Temp_TOPIC_FUNCTIONS_M4_CANONICAL_REUSE_DEDUP_AND_Q15_R01_20261107.md` | `3a399a40e837e2fef1ad04e2712ccbcb5a8ba839` |
| M5 | `Temp_TOPIC_FUNCTIONS_M5_CANONICAL_REUSE_Q15_AND_SOURCE_RECEIPT_R01_20261107.md` | `0a1ed99f4df0a6266807a1b7ed843b350855f656` |
| M6 | `Temp_TOPIC_FUNCTIONS_M6_PRACTICE_CANONICAL_REUSE_LEDGER_R01_20261107.md` | `c735a2e21bffe4ffe2e16d06de1d8592acc22674` |
| M7 | `Temp_TOPIC_FUNCTIONS_M7_S1_CANONICAL_REUSE_DEDUP_LEDGER_R01_20261107.md` | `7b4d0f7f6b97127d6f823e79135f8fd7f9095b8d` |

G10 source R01 `57eaf0141a5db9bfba91f0e6c863fc7dcc638068` and [R09 G10 map](Temp_TOPIC_FUNCTIONS_G10_M1_M3_REVIEW_ACCEPTANCE_AND_CANONICAL_OUTCOME_ROUTE_R09_20261107.md) `ff58d0c32b1686781aec83ef4f2024b4ba8dda96` preserve exact O01..O10 and SGK B15/B16+6 original public Topic P01..P06, 4 original Written/Anchor, 4 existing HELP.

**Q15 six-candidate semantic triage [R08](Temp_TOPIC_FUNCTIONS_SIX_REVIEWED_CANDIDATES_Q15_SEMANTIC_DEDUP_R08_20261107.md):** `dc9bf99011dd6206dfead140a698a37410ae4b01`: 2 REUSE_NOT_NEW (`CAND-WRI-M4-01`, `P-M5-11`) and 4 genuine transfer candidates not yet formally promoted (`CAND-P-M6-01/02`, `CAND-P-M7-01/02`). No new item IDs, no new duplicated answers, no forced repeat academic review of unchanged reviewed texts.

**Previously source-verified inventory:** G11 CHIX existing 62 public C/P (60 B31–B33 +2 CHIX integrated), 9 original Written, 11 HELP, 5 SVG; G12 CHI existing 78 public items, 36 HELP (32 B01–B05 +4 END), 6 SVG. Original G12 SGK PASS receipt `8fef1c7dbd9b404881ff40cec8147c9ae89ef473` applies only to unchanged SGK source; separate M7 Topic new source has its own accepted M4–M7 NotebookLM verdict.

## PART III — Tự kiểm tra, blueprint only (NO private RD1 text here)

One actual protected independently held-out G10→G12 `TOPIC_READINESS` is still needed; it is **not** `SGK_CHAPTER_READINESS`. First Try, PUBLIC D3 and opened Written rubric are learning, not unseen assessment evidence. No hint/answer/correctness/AI Tutor before official Final Submit; never write Mastery from practice/self-correction. See blueprint `Temp_TOPIC_FUNCTIONS_PRACTICE_AND_READINESS_BLUEPRINT_R00_20261107.md` blob `36dd0c52d2f1dabdb4e7245b94d3b78fda353bed`, which is design-only, not authorized private test content.

## AUTHORING remaining real closure work

- One **48-row outcome→actual canonical item/version→role/placement→FIG/HELP** register, with G10 outcome meanings preserved and M4–M7 one-source canonical decisions. Student must learn and practice directly on Topic page, not depend on SGK navigation.
- Decide final Q15 status of **four genuinely differentiated public practice candidates**, avoiding overlap with actual full bank; historical item IDs and rubric remain immutable.
- Assemble clean learner view without presenting source QA/metadata or two copies of the same VD. This aggregation is **source-equivalent**, not a new automatic PASS for the future edited learner view if substantive explanations change.
- Official protected independent `TOPIC_READINESS` Q16 and A1–A7/Q01–Q18 actual Full handoff gate; never place held-out questions/keys in public Git. Do not create V2/ready/REGISTER until eligible, do not integrate website or merge/deploy.

**CHECKPOINT:** `M1_M7_REVIEWED_KNOWLEDGE_COMPILED=YES`, `ORIGINAL_SOURCE_BLOBS=6`, `PROPOSED_OUTCOME_ROWS=48`, `NEW_CANONICAL_ITEM_IDS=0`, `TOPIC_PRIVATE_READINESS=NOT_READY`, `FULL_TOPIC_CONTENT_READY=NO`, `RELEASE=NO`.
