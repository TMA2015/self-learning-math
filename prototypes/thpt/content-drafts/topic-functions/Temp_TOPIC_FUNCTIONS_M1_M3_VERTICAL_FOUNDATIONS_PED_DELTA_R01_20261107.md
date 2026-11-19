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
