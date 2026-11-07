# TEMP REVIEW SOURCE — Topic Hàm số và đồ thị M1–M3: Chỉ phản biện phần lời dẫn mới DELTA_C

**BATCH_ID:** THPT-TOPIC-FUNCTIONS-M1-M3-DELTA_C-SCOPED-REVIEW-20261107
**FILE_ROLE:** ONE temporary NotebookLM review source, **NOT canonical bank, NOT ready manifest, NOT release**, not the sixth Permanent Source.
**STANDARD:** SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18 (single standard). D1–D6/PED1–PED6 are evidence facets, not separate standards.
**NOTEBOOKLM PERMANENT SOURCES:** select **exactly the five THPT Permanent Sources v2.1 already replaced in the owner's notebook**. Do not concurrently select v2.0 or add another Permanent Source. Also use the original owner's SGK/SBT Kết nối tri thức S1 for mathematics and source pagination.
**SCOPE OF INDEPENDENT REVIEW:** NEW pedagogical material only: M1–M3 vertical bridge in Appendix A, Git source blob `fcecb2c97fe7799124809c47045f2087d333afa9`; verify academic + pedagogical correctness per historical exact outcome `TOP-G10-FUNC-O01..O10`. The unchanged historical G10 Topic R01 source in Appendix B, blob `57eaf0141a5db9bfba91f0e6c863fc7dcc638068`, is provided as a **comparison baseline only**; it had owner-summary Academic PASS on its exact snapshot (receipt blob `95e34644c4520adf748cfe3118d8726a5202e3e3`). Do not assign/revoke the old verdict as if these were the same content.
**REVIEW TARGET:** Does the new Topic explanation make the ten G10 outcomes truly learnable without mandatory SGK navigation, accurate in all domains/conditions/graphics and flexible pedagogical progression? Check WHY-before-formula, evidence limits, worked reasoning, First Try that students may open themselves, local D6, consistency of Topic 3 sections, and whether the new prose is materially different enough to require review under Delta C. Do not infer whole G10–G12 Topic or official independent Topic Readiness PASS from this limited batch.
**PRIVATE RD1:** not included; do not request public candidate RD1 stems/keys/rubrics. No hint, correctness, AI Tutor or answers before official Final Submit; formative First Try is self-check no Mastery.

## Direct S1 source receipt (whole original PDF SHA256, printed page vs PDF index)

| Original book | Directly inspected relevant original pages | PDF 1-based | Original raw SHA256 |
|---|---|---|---|
| SGK Toán 10 KNTT Tập 2 B15 | printed 4–10 | 5–11 | ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6 |
| SGK Toán 10 KNTT Tập 2 B16 | printed 11–18 | 12–19 | same SGK raw SHA |
| SBT Toán 10 KNTT Tập 2 B15 | printed 3–9 | 4–10 | 3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7 |
| SBT Toán 10 KNTT Tập 2 B16 | printed 10–15 | 11–16 | same SBT raw SHA |

SBT raw PDF has 143 scanned pages and no searchable first-page text layer; 13 relevant original pages were rendered and inspected visually. Direct receipt Markdown `Temp_TOPIC_FUNCTIONS_G10_SBT_T2_DIRECT_VISUAL_RECEIPT_R03_20261107.md`, Git blob `50f667cdfa3fa1aedf5a38c0bc7f80650a6835bf`. Original PDFs are **not** attached to the public repo; owner supplies original S1 within NotebookLM.

## Expected reviewer verdict — do NOT fill in with author QA

Return for each of `TOP-G10-FUNC-O01..O10`: (1) Academic PASS/HOLD, (2) PED PASS/HOLD with Qxx/Dx/PEDx references, (3) exact source page and one concrete counterexample/missing condition if HOLD, (4) item/EX/TRY/FIG/HELP placement affected, (5) P0/P1/P2 and `MINIMAL_DELTA` only for new material. Return one **SOURCE_RECEIPT** identifying Git source blob `fcecb2c97fe7799124809c47045f2087d333afa9` and historical comparator `57eaf0141a5db9bfba91f0e6c863fc7dcc638068`, review source/packet date and permanent source version v2.1. Explicitly separate preservation of historical G10 PASS from verdict of this NEW Delta C; say `SCOPE_ONLY_M1_M3`, `FULL_VERTICAL_TOPIC_CONTENT_READY=NO`, and list any irreducible S1 conflict as `STANDARD_CONFLICT_HOLD` rather than guessing.

---

# APPENDIX A — NEW M1–M3 PEDAGOGICAL BRIDGE (target of review, verbatim source)

**Exact Git blob:** `fcecb2c97fe7799124809c47045f2087d333afa9`.
**Source path:** `prototypes/thpt/content-drafts/topic-functions/Temp_TOPIC_FUNCTIONS_M1_M3_VERTICAL_FOUNDATIONS_PED_DELTA_R01_20261107.md`.
**Appendix copied as a TEMP snapshot for review only; no second canonical item/key/rubric bank.**

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

# APPENDIX B — UNCHANGED HISTORICAL G10 Topic R01 (comparison ONLY, not re-review target)

**Exact original source Git blob:** `57eaf0141a5db9bfba91f0e6c863fc7dcc638068`.
**Original source path:** `prototypes/thpt/content-drafts/THPT_G10_TOPIC_FUNCTIONS_B15_B16_COMPLETE_AUTHORING_R01_20261031.md`.
**Owner-summary academic receipt blob:** `95e34644c4520adf748cfe3118d8726a5202e3e3`, scope G10 R01 only.
**The original public formative examples/answers below are for comparator evidence, NOT independent held-out RD1, NOT cloned as another production bank.**

# Toán 10 KNTT · Chuyên đề Hàm số và đồ thị — giai đoạn lớp 10, bản tác giả R01

PACKET_ID: THPT-G10-TOPIC-FUNCTIONS-B15-B16-SELF-CONTAINED-R01-20261031
LEARNING_PATH: TOPIC
ACADEMIC_STATUS: AUTHOR_QA_CANDIDATE_NOT_NOTEBOOKLM_REVIEWED
SOURCE_AUTHORITY: SGK KNTT Toán 10 Tập 2, B15 trang in 4–10, B16 trang in 11–18; SBT Tập 2, B15 trang in 3–9, B16 trang in 10–15.
ARCHITECTURE: Dual Complete Learning Paths v2.0; ba phần học sinh: Kiến thức / Luyện tập / Tự kiểm tra; không tạo Core riêng.
SCOPE: Nền tảng Hàm số và đồ thị lớp 10 B15–B16 (tập xác định, giá trị, tính đơn trị, biểu diễn, biến thiên, parabol và mô hình). Chưa tuyên bố bao trùm hàm số lớp 11–12, B17 dấu tam thức hay B18 phương trình căn.

## I. Đối chiếu outcome chuẩn và nguồn có thể tái sử dụng

| Topic outcome | Bản chất cần tự học/đánh giá | SGK gốc | Shared outcome (KHÔNG sinh item mới) |
|---|---|---|---|
| TOP-G10-FUNC-O01 | Hàm số: mỗi x đúng một y; nhận biết bảng/quan hệ/đồ thị | B15 §1–2 | B15_OUT_01 |
| TOP-G10-FUNC-O02 | Tập xác định và tập giá trị, điều kiện căn/mẫu | B15 §1 | B15_OUT_02 |
| TOP-G10-FUNC-O03 | Điểm trên đồ thị, đọc đồ thị/bảng, không ngoại suy thiếu dữ liệu | B15 §2 | B15_OUT_03 |
| TOP-G10-FUNC-O04 | Phân tích đồng biến/nghịch biến trên đúng khoảng | B15 §3 | B15_OUT_04 |
| TOP-G10-FUNC-O05 | Hàm từng đoạn/mô hình, miền ngữ cảnh/đơn vị và điểm ghép | B15 §2–3 | B15_OUT_05 |
| TOP-G10-FUNC-O06 | Nhận biết hàm số bậc hai, hệ số a ≠ 0 và miền xác định | B16 §1 | B16_OUT_01 |
| TOP-G10-FUNC-O07 | Dạng đỉnh, tọa độ đỉnh, trục đối xứng | B16 §2 | B16_OUT_02 |
| TOP-G10-FUNC-O08 | Hình dạng parabol, giao trục, điểm đối xứng, Δ | B16 §2–3 | B16_OUT_03 |
| TOP-G10-FUNC-O09 | Chiều biến thiên, cực trị/tập giá trị (cả miền hạn chế) | B16 §2 | B16_OUT_04 |
| TOP-G10-FUNC-O10 | Chọn biến/miền/đơn vị, tối ưu mô hình bậc hai | B16 §3–5 | B16_OUT_05 |

**Nguyên tắc nguồn:** liên kết SGK là hỗ trợ, không thay thế lý thuyết ở Chuyên đề. Một item canonical có nhiều placement (SGK Core, SGK Practice, Topic Practice) nhưng KHÔNG nhân bản ID/stem/key/rubric. Tự kiểm tra Topic sử dụng bộ đề riêng chưa tiếp xúc, không tái dùng đề SGK Readiness R0/R1 hoặc ví dụ đã thấy.

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

## IV. D3/D4 — Luyện tập theo kỹ năng và cấp độ (canonical reuse)

**Mức CƠ BẢN (B15):** `THPT-G10-B15-C01` (FUNCTION_MAPPING), `THPT-G10-B15-C02` (FUNCTION_DOMAIN), `THPT-G10-B15-P01` (FUNCTION_DOMAIN). Học sinh làm lại chính câu SGK với role TOPIC_PRACTICE, không cấp ID khác.

**Mức HIỂU/CỦNG CỐ:** `THPT-G10-B15-P03` (FUNCTION_MONOTONICITY), `THPT-G10-B15-P02` (FUNCTION_PIECEWISE, ghi chú câu này đã xuất hiện trong Knowledge), `THPT-CORE-QF01` (B16 đỉnh, SGK R4 pilot), `PRACTICE-THPT-DEMO-01` (B16 giao Ox, R4 demo). Đánh dấu hai thẻ B16 là demo trình bày, **không dùng làm evidence Mastery**.

**Mức VẬN DỤNG:** `THPT-G10-B15-P04` (FUNCTION_MODELING), ứng dụng parabol trong B16 và bài tự luận dưới đây. Không công bố số câu đạt Mastery từ các câu đã từng hiển thị lời giải.

**Written/Anchor – một thư viện nguồn duy nhất:** `HPT-G10-CHVI-WRI-15-01` (bảng, đồ thị), `HPT-G10-CHVI-WRI-15-02` (mô hình từng khoảng, Anchor), `HPT-WRI-DEMO-01` (đỉnh/trục), `HPT-WRI-DEMO-ANCHOR-01` (hình chữ nhật, Anchor). Không sửa lời giải/rubric gốc. Khi học, học sinh tự làm giấy, mở rubric để tự đối chiếu; kết quả không tự cộng Skill Mastery.

**Kỹ năng chưa đủ độ sâu bằng câu public hiện có:** phản biện diễn giải hình parabol không giao Ox và tối ưu trên đoạn không chứa đỉnh. VD06–VD08 cung cấp bản mẫu đầy đủ trong Kiến thức; trước phát hành chuyên đề cần QA tính đủ độ sâu D3 mà không lấy số lượng câu làm thay thế. Không nhân bản các VD thành item mới chỉ để tăng đếm.


### D3 bổ sung — 6 item canonical **mới**, chưa NotebookLM review

Đây là 6 câu **Topic Practice mới thực sự** cho các kỹ năng còn thiếu chiều sâu; mỗi câu chỉ có **một** `item_id` mới, không phải bản sao câu SGK. Có thể hiện gợi ý khi học sinh chọn xem trong Luyện tập, tuyệt đối không dùng các câu này làm chứng cứ đánh giá độc lập. Toàn bộ 6 câu đi cùng gói review chuyên đề R01, không tách vòng riêng.

- **`THPT-G10-TOP-FUNC-P01` · TOP-O03 · Cơ bản — kiểm tra điểm.** Cho `f(x)=3−|x−1|` trên ℝ. Hãy tính `f(4)` và kiểm tra `A(4;0)` có thuộc đồ thị không. **Gợi ý:** thay x vào biểu thức trị tuyệt đối. **Lời giải:** `f(4)=3−3=0`; vậy `A(4;0)` thuộc đồ thị.
- **`THPT-G10-TOP-FUNC-P02` · TOP-O06 · Cơ bản — nhận diện bậc hai.** `f_m(x)=(m−2)x²+(m+1)x+5` là hàm bậc hai với điều kiện nào? **Gợi ý:** hệ số a của x². **Lời giải:** `a=m−2`, cần `m≠2`.
- **`THPT-G10-TOP-FUNC-P03` · TOP-O07 · Thông hiểu — dạng đỉnh.** `f(x)=3x²+12x+7`. Tìm đỉnh, trục đối xứng và GTNN. **Gợi ý:** hoàn thành bình phương. **Lời giải:** `f(x)=3(x+2)²−5`, đỉnh `I(−2;−5)`, trục `x=−2`, GTNN `−5`.
- **`THPT-G10-TOP-FUNC-P04` · TOP-O08 · Thông hiểu — giao trục.** `f(x)=−x²+6x−5`. Xác định đỉnh, giao Ox/Oy và chiều mở. **Gợi ý:** đưa về dạng đỉnh và giải f(x)=0. **Lời giải:** `f(x)=−(x−3)²+4`; đỉnh `(3;4)` mở xuống, giao Ox `(1;0),(5;0)`, giao Oy `(0;−5)`.
- **`THPT-G10-TOP-FUNC-P05` · TOP-O09 · Vận dụng — miền hạn chế.** `f(x)=(x+2)²−4` chỉ xét trên `D=[−1;2]`. Tìm GTLN, GTNN và tập giá trị. **Gợi ý:** hoành độ đỉnh là −2, ngoài D. **Lời giải:** f tăng trên D, GTNN=f(−1)=−3, GTLN=f(2)=12, tập giá trị `[−3;12]`.
- **`THPT-G10-TOP-FUNC-P06` · TOP-O10 · Vận dụng — mô hình.** Nhiệt độ theo mô hình `T(t)=(t−2)²+18` (°C), chỉ khảo sát `0≤t≤4` giờ. Hãy tìm nhiệt độ cao nhất/thấp nhất và thời điểm tương ứng. **Gợi ý:** xét đỉnh và hai đầu mút. **Lời giải:** GTNN `18°C` tại t=2; GTLN `22°C` tại t=0 hoặc t=4. Đây chỉ là mô hình giả định, không ngoại suy ngoài miền đã cho.

**D3 nguồn chốt cho gói R01:** 6 B15 item đã review dùng chung; 2 B16 R4 nguồn cũ (demo UI, không tạo Mastery); **6 Topic Practice mới** cần NotebookLM xem xét cùng toàn gói; 4 Written/Anchor dùng chung, không chép riêng.

## V. D5 — Hình/đồ thị và chứng cứ

Tái sử dụng **hình parabol SGK B16** trong `docs/thpt-preview/sgk/chuong-vi/bai-16.md` (`data-thpt-quadratic-plot`), cùng source điểm I(2;−1), trục x=2, giao Ox x=1,3, Oy y=3; không tạo SVG nhái, không sao chép JS. Trong kiến thức Topic độc lập, định nghĩa đầy đủ các điểm và hướng mở ngay tại trang kiến thức, hình chỉ minh họa thêm.

Bảng B15 cho ví dụ dữ liệu đầu vào và bảng biến thiên B16 dùng biểu diễn Markdown có thể đọc độc lập khi hình vẽ không tải. Kiểm tra sau tích hợp: alt/aria, nhãn trục, responsive desktop/mobile, MathJax, không đổi Golden R4 hoặc THCS. D5 source reviewed của B16 không tự biến thành Academic PASS cho diễn giải mới của Topic.

## VI. D6 — Hỗ trợ khắc phục lỗ hổng (reused, original 5-step texts not cloned)

- `HELP-G10-B15-01` → TOP-O01/O03 → lỗi nhầm đơn ánh với tiêu chí hàm số; quay lại `THPT-G10-B15-C01`.
- `HELP-G10-B15-02` → TOP-O02/O04/O05 → lỗi miền xác định, nhánh, khoảng biến thiên; B15-C02/P01/P02/P03/P04.
- `HELP-G10-B16-01` → TOP-O06/O07/O09 → lỗi trục đỉnh, dấu a, chiều biến thiên; dùng B16 Core/Practice R4.
- `HELP-G10-B16-02` → TOP-O08/O10 → lỗi vẽ parabol và chọn sai miền thực tế; dùng hình SVG và ví dụ B16 đã review.

Chỉ tham chiếu **đúng 4 thẻ D6 đã được NotebookLM PASS** trên source `THPT_G10_CHVI_B15_B18_D6_A5_GAP_R01_EXACT_SNAPSHOT.md` (branch authoring #642); không biên soạn 4 bản thứ hai. D6 xuất hiện trong Knowledge/Practice khi học sinh yêu cầu, **không hiện trong Topic Readiness trước Final Submit**.

## VII. Cổng Topic Readiness — blueprint học thuật R01

- Đánh giá **riêng TOPIC_READINESS_G10_FUNCTIONS**, không cộng sang `SGK_CHAPTER_READINESS` của ChVI.
- 10 outcome từ TOP-O01..10, **12 câu held-out mới** (12 canonical ID) được lưu trong kho riêng, không public lên GitHub; không dùng lại các stem/đáp án từ các câu luyện tập/SGK RD1 đã thấy.
- 12 câu có giải thích và rubric (có câu tích hợp nhiều kỹ năng) (mức độ phải được NotebookLM kiểm tra, không tự tuyên bố cấu trúc độc lập tuyệt đối).
- Không gợi ý, lời giải, đáp án hay đúng/sai trước Final Submit. Chỉ có phản hồi sau khi chốt; Demo không được ghi điểm hay Mastery. Cơ chế chấm và bảo vệ đề do nhánh phát hành thiết kế/QA riêng, không có trạng thái production từ tài liệu này.

## VIII. Cổng học thuật/handoff cuối gói

- **QA tác giả hiện hành:** D1–D6 và 10 outcome được biên soạn cho phạm vi B15–B16, 8 ví dụ minh họa, 8 Core/Practice items reused + 6 new Topic Practice candidates, 4 Written reused và 4 D6 reused; 12 Topic held-out candidates trong **private** review packet. Không tuyên bố đây là vertical Topic hoàn chỉnh xuyên 10–12.
- **NotebookLM:** một gói R01 duy nhất review **toàn bộ Topic grade-10 slice** D1–D6 + RD0 + 12 RD1, trả verdict theo outcome và item; không review lặp lại SGK gốc. Chỉ sau PASS đúng snapshot mới được chuyển `ACADEMIC_SOURCE_READY`.
- **Phát hành:** KHÔNG merge/deploy, KHÔNG sửa web/tiến độ học sinh, KHÔNG kích hoạt Topic Readiness/Mastery. Topic menu vẫn chính xác 3 phần: Kiến thức / Luyện tập / Tự kiểm tra.


---
**TEMP reviewer source end. Academic/PED verdict is NOT pre-filled.**
