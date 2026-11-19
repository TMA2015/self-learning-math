# Chuyên đề Hàm số và đồ thị M1–M7 — một nguồn học liệu công khai R18 (AUTHORING)

PACKET_ID: THPT-TOPIC-FUNCTIONS-G10-G12-FULL-R18-20261108
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.2.0
LEARNING_PATH: TOPIC
RELEASE_SCOPE: FULL_TOPIC_LEARNING_PATH
SOURCE_STATUS: SOURCE_LOCK_CANDIDATE
ACADEMIC_SCOPE: Existing M1–M7 Academic/Pedagogical review PASS; distinct PRIVATE RD1 reviewed separately
PRIVATE_RD1_BODY_IN_PUBLIC_SOURCE: NO
PUBLIC_STUDENT_STRUCTURE: Kiến thức / Luyện tập / Tự kiểm tra
CONTENT_READY: NO  (only after complete source-locked handoff and appropriate TOPIC intake gate)
RELEASE_AUTHORIZATION: NO

**Canonical model:** This is a **single public learning-content view** composed from the unchanged independently reviewed knowledge text (R14) and source-only public practice/Shared Written mappings (R15). It contains no copied new answers to existing bank problems and no protected private RD1 stems/keys/rubrics. `item_id` references retain the one original source bank and original rubrics. These compilation choices are source-equivalent, **no mathematical DELTA C**.

**Review lineage:** G10 original source plus M1–M3 bridge, independently accepted M4–M7 packets, source exact R10, outcome crosswalk R11, canonical reference catalog R12, four public transfer pointers R13, student knowledge R14, practice/one Written library R15. Student-facing mathematical paragraphs are unmodified. The material below includes some original internal `TRY` headings as formative self-attempts; they do not imply official private Readiness. The final protected evaluation is a separate owner-held bank with only a public SHA digest receipt.

---

## 1. Kiến thức — theo đúng mạch M1–M7

# Chuyên đề Hàm số và đồ thị — KIẾN THỨC (M1–M7)

**Tuyến học độc lập:** Kiến thức → Luyện tập → Tự kiểm tra. Em có thể học theo từng mạch dưới đây, không cần mở SGK để có định nghĩa và ví dụ bắt buộc. Phần luyện tập cùng bản Tự kiểm tra độc lập nằm ở hai mục riêng, không thay bởi câu Tự thử đã xem đáp án.

**Dành cho người học:** Mỗi khi gặp một điều kiện (miền xác định, điểm nối, cơ số, giới hạn, miền tối ưu), hãy tự hỏi *vì sao* phải kiểm tra trước khi dùng công thức. Các hoạt động **Tự thử** là luyện tập có thể tự đối chiếu, không phải bài đánh giá năng lực cuối Chuyên đề.

---

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

---

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

---

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

---

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

---

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

---

## Chuyển sang Luyện tập và Tự kiểm tra

Khi đã đọc đủ lý do, điều kiện và các ví dụ giải thích, em chuyển sang **Luyện tập** để giải bài theo kỹ năng: từ nhận diện, giải thích, tính toán đến vận dụng và tổng hợp. Mỗi câu có chỗ tự làm trước rồi mới tự chọn xem đối chiếu; em có thể quay lại đúng mạch kiến thức và hướng dẫn HELP nếu sai.

Phần **Tự kiểm tra** là bài đánh giá riêng bao quát toàn Chuyên đề, không dùng các câu đã xem giải làm chứng cứ độc lập. Đáp án, đánh giá đúng/sai và hướng dẫn giải chỉ được xem sau khi hoàn tất Final Submit.

---


---

## 2. Luyện tập — một nguồn câu hỏi và rubric dùng chung

## 1. Learner progression — based on what students need to learn

**Kiến thức** (M1–M7) already tells *why* and *when* a method works. In **Luyện tập**, each objective uses original question anchors: begin with recognition/conditions, move to computation and justification, then one integrated or Written application. Same canonical ID can occur in another SGK placement; the student still answers one unique mathematical question.

**How to solve:** before opening hints, write the domain/model units, select the tool and justify its applicability. If stuck or wrong, open the associated **HELP** route and return to the precise **M1–M7** concept, then attempt an equivalent, not yet exposed question. Written/Anchor is worked on paper; rubric and solution opened by choice *after attempting*, with NO automatic Skill Mastery.

### M1–M3 (G10) — định nghĩa, bảng/đồ thị, parabol và mô hình

- **TOP-G10-FUNC-O01** — M1 đơn trị, bảng x lặp, tập giá trị: `THPT-G10-B15-C01`; D6 `HELP-G10-B15-01`.
- **TOP-G10-FUNC-O02** — M1 tập xác định/tập giá trị, giao điều kiện căn+mẫu: `THPT-G10-B15-C02` → `THPT-G10-B15-P01`; D6 `HELP-G10-B15-02`.
- **TOP-G10-FUNC-O03** — M2 giá trị/điểm thuộc đồ thị, giới hạn nội suy: `THPT-G10-TOP-FUNC-P01`; D6 `HELP-G10-B15-01`.
- **TOP-G10-FUNC-O04** — M2 tăng/giảm trên một khoảng, kiểm mọi cặp x: `THPT-G10-B15-P03`; D6 `HELP-G10-B15-01`.
- **TOP-G10-FUNC-O05** — M2 hàm từng đoạn, điều kiện tại điểm nối, miền mô hình: `THPT-G10-B15-P02`; D6 `HELP-G10-B15-02`.
- **TOP-G10-FUNC-O06** — M3 nhận biết hàm bậc hai và điều kiện \`a≠0\`: `THPT-G10-TOP-FUNC-P02`; D6 `HELP-G10-B16-01`; hình: data-thpt-quadratic-plot.
- **TOP-G10-FUNC-O07** — M3 dạng đỉnh, trục đối xứng, hoàn phương: `THPT-G10-TOP-FUNC-P03`; D6 `HELP-G10-B16-01`; hình: data-thpt-quadratic-plot.
- **TOP-G10-FUNC-O08** — M3 hình dạng, giao trục, delta/đối xứng: `THPT-G10-TOP-FUNC-P04`; D6 `HELP-G10-B16-01`; hình: data-thpt-quadratic-plot.
- **TOP-G10-FUNC-O09** — M3 đơn điệu và cực trị trên miền hạn chế: `THPT-G10-TOP-FUNC-P05`; D6 `HELP-G10-B16-02`; hình: data-thpt-quadratic-plot.
- **TOP-G10-FUNC-O10** — M3 lập mô hình, miền phù hợp, đơn vị/giá trị tối ưu: `THPT-G10-TOP-FUNC-P06`; D6 `HELP-G10-B16-02`; hình: data-thpt-quadratic-plot.

### M4 (G11) — tuần hoàn, lượng giác, mũ và lôgarit

- **TOP-FUNC-M4-O01** — Xét chẵn/lẻ qua miền và \(f(-x)\): `THPT-G11-B03-C02`; D6 `HELP-G11-B03-01`; hình: FIG-G11-B03-02_R01.svg.
- **TOP-FUNC-M4-O02** — Phân biệt chu kỳ, chu kỳ cơ bản, biên độ: `THPT-G11-B03-C03` → `THPT-G11-B03-P03`; D6 `HELP-G11-B03-01`; hình: FIG-G11-B03-01_R01.svg.
- **TOP-FUNC-M4-O03** — Đọc hàm sin/cos: miền, range, tính chất, đồ thị, tăng/giảm: `THPT-G11-B03-C04` → `THPT-G11-B03-P04`; D6 `HELP-G11-B03-01`; hình: FIG-G11-B03-01_R01.svg.
- **TOP-FUNC-M4-O04** — Đọc tan/cot theo từng nhánh và xác định điểm loại: `THPT-G11-B03-C01` → `THPT-G11-B03-P01` → `THPT-G11-B03-P06`; D6 `HELP-G11-B03-01`; hình: FIG-G11-B03-03_R01.svg; FIG-G11-B03-04_R01.svg.
- **TOP-FUNC-M4-O05** — Tính/đánh giá mô hình tuần hoàn có đơn vị/miền: `THPT-G11-B03-P08`; D6 `HELP-G11-B03-01`; hình: FIG-G11-B03-01_R01.svg.
- **TOP-FUNC-M4-O06** — Phân biệt hàm mũ và lũy thừa, miền/range, tăng/giảm: `THPT-G11-CHVI-B20-C01` → `THPT-G11-CHVI-B20-C02`; D6 `HELP-G11-CHVI-B20-01`; hình: FIG-G11-CHVI-B20-01_R00.svg.
- **TOP-FUNC-M4-O07** — Đọc/so sánh hai hướng đồ thị mũ \(a>1\), \(0<a<1\): `THPT-G11-CHVI-B20-P02` → `THPT-G11-CHVI-B20-C02`; D6 `HELP-G11-CHVI-B20-01`; hình: FIG-G11-CHVI-B20-01_R00.svg.
- **TOP-FUNC-M4-O08** — Hiểu lôgarit là hàm ngược, miền/range/chiều biến thiên: `THPT-G11-CHVI-B20-C04` → `THPT-G11-CHVI-B20-C03`; D6 `HELP-G11-CHVI-B20-01`; hình: FIG-G11-CHVI-B20-01_R00.svg.
- **TOP-FUNC-M4-O09** — Giải toán miền/điểm đồ thị log, đặc biệt phép dịch: `THPT-G11-CHVI-B20-C03` → `THPT-G11-CHVI-B20-P01`; D6 `HELP-G11-CHVI-B20-01`; hình: FIG-G11-CHVI-B20-01_R00.svg.
- **TOP-FUNC-M4-O10** — Biết giới hạn của mô hình tăng trưởng/dao động và chuyển đổi đầu vào: `THPT-G11-CHVI-B20-P04` → `THPT-G11-B03-P08`; D6 `HELP-G11-CHVI-B20-01`; hình: FIG-G11-CHVI-B20-01_R00.svg.

### M5 (G11) — giới hạn và tính liên tục

- **TOP-FUNC-M5-O01** — Khác biệt giá trị tại a / giới hạn gần a: M5.1, TRY01, EX01, P07: `THPT-G11-CHV-B16-C01`; D6 `HELP-G11-CHV-B16-01`; hình: FIG-G11-B16-01_R01.svg.
- **TOP-FUNC-M5-O02** — Giới hạn trái/phải, bước nhảy: M5.2, TRY02, EX02, P08: `THPT-G11-CHV-B16-C02` → `THPT-G11-CHV-B16-P03`; D6 `HELP-G11-CHV-B16-02`; hình: FIG-G11-B16-01_R01.svg.
- **TOP-FUNC-M5-O03** — Giới hạn vô cực tại điểm và dấu: M5.2, EX02: `THPT-G11-CHV-B16-C03` → `THPT-G11-CHV-B16-P06`; D6 `HELP-G11-CHV-B16-02`; hình: FIG-G11-B16-01_R01.svg.
- **TOP-FUNC-M5-O04** — Giới hạn tại ±∞ và chọn phép biến đổi: M5.3–4, TRY03, EX03–04: `THPT-G11-CHV-B16-P04` → `THPT-G11-CHV-B16-P05`; D6 `HELP-G11-CHV-B16-01`.
- **TOP-FUNC-M5-O05** — Chọn phân tích nhân tử/liên hợp/kiểm miền: M5.4, EX01–03: `THPT-G11-CHV-B16-P01` → `THPT-G11-CHV-B16-P02`; D6 `HELP-G11-CHV-B16-01`.
- **TOP-FUNC-M5-O06** — Kiểm liên tục tại a, kể cả điểm ghép: M5.5, TRY04: `THPT-G11-CHV-B17-C01` → `THPT-G11-CHV-B17-C02` → `THPT-G11-CHV-B17-P02`; D6 `HELP-G11-CHV-B17-01`; hình: FIG-G11-B17-01_R01.svg.
- **TOP-FUNC-M5-O07** — Liên tục trên khoảng/đoạn, đầu mút: M5.6, TRY05, EX05–06, P11: `THPT-G11-CHV-B17-C03` → `THPT-G11-CHV-B17-P05`; D6 `HELP-G11-CHV-B17-01`; hình: FIG-G11-B17-01_R01.svg.
- **TOP-FUNC-M5-O08** — Giải thích định lí đổi dấu và giới hạn kết luận: M5.7, TRY06, EX07–08, P09: `THPT-G11-CHV-B17-P03` → `THPT-G11-CHV-B17-P07`; D6 `HELP-G11-CHV-B17-02`.
- **TOP-FUNC-M5-O09** — Đọc đồ thị có lỗ/bậc nhảy/tiệm cận và không ngoại suy mô hình: M5.1–7, P07/09/10: `THPT-G11-CHV-B16-P07` → `THPT-G11-CHV-B17-C02`; D6 `HELP-G11-CHV-B17-01`; hình: FIG-G11-B17-01_R01.svg.

### M6 (G11) — đạo hàm và ý nghĩa

- **TOP-FUNC-M6-O01** — average→instantaneous: `THPT-G11-CHIX-B31-C01` → `THPT-G11-CHIX-B31-P01`; D6 `HELP-G11-CHIX-B31-01`; hình: FIG-G11-CHIX-B31-01_R00.svg.
- **TOP-FUNC-M6-O02** — differentiable at point vs continuous: `THPT-G11-CHIX-B31-C04` → `THPT-G11-CHIX-B31-P05` → `THPT-G11-CHIX-B31-P06` → `THPT-G11-TOP-FUNC-P01`; D6 `HELP-G11-CHIX-B31-02`; hình: FIG-G11-CHIX-B31-02_R00.svg.
- **TOP-FUNC-M6-O03** — secant→tangent equation: `THPT-G11-CHIX-B31-C07` → `THPT-G11-CHIX-B31-P08`; D6 `HELP-G11-CHIX-B31-03`; hình: FIG-G11-CHIX-B31-01_R00.svg.
- **TOP-FUNC-M6-O04** — differentiation sum/product/quotient with WHY: `THPT-G11-CHIX-B32-C03` → `THPT-G11-CHIX-B32-P04`; D6 `HELP-G11-CHIX-B32-01`; hình: FIG-G11-CHIX-B32-01_R00.svg.
- **TOP-FUNC-M6-O05** — derivative chain for root and trig with domains: `THPT-G11-CHIX-B32-C06` → `THPT-G11-CHIX-B32-P09`; D6 `HELP-G11-CHIX-B32-02`; hình: FIG-G11-CHIX-B32-02_R00.svg.
- **TOP-FUNC-M6-O06** — exponential/log derivatives incl composed: `THPT-G11-CHIX-B32-C12` → `THPT-G11-CHIX-B32-P13` → `THPT-G11-TOP-FUNC-P02`; D6 `HELP-G11-CHIX-B32-03`; hình: FIG-G11-CHIX-B32-02_R00.svg.
- **TOP-FUNC-M6-O07** — second derivative and curvature clue: `THPT-G11-CHIX-B33-C01` → `THPT-G11-CHIX-B33-P03`; D6 `HELP-G11-CHIX-B33-01`; hình: FIG-G11-CHIX-B33-01_R00.svg.
- **TOP-FUNC-M6-O08** — velocity vs acceleration and signs/units: `THPT-G11-CHIX-B31-C09` → `THPT-G11-CHIX-B33-P05`; D6 `HELP-G11-CHIX-B33-02`; hình: FIG-G11-CHIX-B33-01_R00.svg.
- **TOP-FUNC-M6-O09** — choose method/limits and self-remediate: `THPT-G11-CHIX-CHIX-C01` → `THPT-G11-CHIX-CHIX-P01`; D6 `HELP-G11-CHIX-B33-03`; hình: FIG-G11-CHIX-B33-01_R00.svg.

### M7 (G12) — khảo sát và tối ưu

- **TOP-FUNC-M7-O01** — sign of f' and monotonicity: `THPT-G12-CHI-B01-C02` → `THPT-G12-CHI-B01-P02` → `THPT-G12-TOP-FUNC-P01`; D6 `HELP-G12-B01-01`; hình: G12_B01_FIG01_DERIVATIVE_SIGN_R00.svg.
- **TOP-FUNC-M7-O02** — local extrema and counterexamples: `THPT-G12-CHI-B01-C04` → `THPT-G12-CHI-B01-P04`; D6 `HELP-G12-B01-04`; hình: G12_B01_FIG01_DERIVATIVE_SIGN_R00.svg.
- **TOP-FUNC-M7-O03** — global extrema/endpoints/nonattainment: `THPT-G12-CHI-B02-C02` → `THPT-G12-CHI-B02-P03`; D6 `HELP-G12-B02-02`; hình: G12_B02_FIG01_GLOBAL_MIN_MAX_CLOSED_INTERVAL_R00.svg.
- **TOP-FUNC-M7-O04** — standing, horizontal and oblique asymptotes: `THPT-G12-CHI-B03-C01` → `THPT-G12-CHI-B03-C02` → `THPT-G12-CHI-B03-C03`; D6 `HELP-G12-B03-01`; hình: G12_B03_FIG01_ASYMPTOTES_R00.svg.
- **TOP-FUNC-M7-O05** — distinguish hole and vertical asymptote: `THPT-G12-CHI-B03-C04` → `THPT-G12-CHI-B03-P05`; D6 `HELP-G12-B03-04`; hình: G12_B03_FIG01_ASYMPTOTES_R00.svg.
- **TOP-FUNC-M7-O06** — survey rational branches: `THPT-G12-CHI-B04-C03` → `THPT-G12-CHI-B04-P03`; D6 `HELP-G12-B04-01`; hình: G12_B04_FIG01_RATIONAL_SURVEY_R00.svg.
- **TOP-FUNC-M7-O07** — survey cubic points and roots: `THPT-G12-CHI-B04-C02` → `THPT-G12-CHI-B04-P04`; D6 `HELP-G12-B04-03`; hình: G12_B04_FIG02_CUBIC_SURVEY_R00.svg.
- **TOP-FUNC-M7-O08** — optimize on feasible continuous interval: `THPT-G12-CHI-B05-C04` → `THPT-G12-CHI-B05-P04` → `THPT-G12-CHI-B05-P05`; D6 `HELP-G12-B05-01`; hình: G12_B05_FIG01_BOX_VOLUME_R00.svg.
- **TOP-FUNC-M7-O09** — distinguish discrete and continuous optima: `THPT-G12-CHI-B05-P04` → `THPT-G12-CHI-B05-C04` → `THPT-G12-TOP-FUNC-P02`; D6 `HELP-G12-B05-04`; hình: G12_B05_FIG01_BOX_VOLUME_R00.svg.
- **TOP-FUNC-M7-O10** — explain meaning of derivative rate in units: `THPT-G12-CHI-B05-C01` → `THPT-G12-CHI-B05-C03` → `THPT-G12-CHI-B05-P03`; D6 `HELP-G12-B05-06`.

**Important for AUTHORING/RELEASE handoff:** the above is a *student-readable plan*, NOT 48 newly authored test questions; items must be rendered from one underlying canonical bank with original solution, key and version. The existing "source bank" uses some historic IDs and may not declare item-level `content_version` yet; runtime-compatible version/placement still needs RELEASE-side verification without creating a second academic bank. The G10 quadratic hook `data-thpt-quadratic-plot` is a reviewed old UI reference, not a new SVG.

## 2. One existing Written library (Anchor only a tag)

**28 source-referenced Written IDs** are indexed below: two historical G10 B15 (status must be verified at final source registry), three M4, four M5, nine M6 and ten M7. This is NOT 28 new questions. G10's two additional `HPT-WRI-DEMO` examples remain demo/illustrations, **not registered as independent canonical Written**. M4 `THPT-G11-CHI-W04-ANCHOR` is outside the accepted M4 focus (trigonometric equations), not pulled into Topic merely to increase Written count.

| Module | Actual historical Written item_id | Pedagogical use | Shared role (not a second bank) | Original source/rubric status |
|---|---|---|---|---|
| G10 | `HPT-G10-CHVI-WRI-15-01` | TABLE_GRAPH_READING | WRITTEN | original G10 R01; historical content, ID needs final source contract |
| G10 | `HPT-G10-CHVI-WRI-15-02` | PIECEWISE_MODEL | WRITTEN+ANCHOR_TAG | original G10 R01; historical content, ID needs final source contract |
| M4 | `THPT-G11-CHI-W03` | PERIODIC_MODEL_MAX_MIN | WRITTEN | G11 B03 original /7 rubric |
| M4 | `THPT-G11-CHVI-B20-W01` | EXP_LOG_INVERSE | WRITTEN | G11 B20 original /4 |
| M4 | `THPT-G11-CHVI-B20-W02-ANCHOR` | EXPONENTIAL_DECAY | WRITTEN+ANCHOR_TAG | G11 B20 original /4 |
| M5 | `THPT-G11-CHV-B16-W01` | LIMIT_VALUE | WRITTEN | G11 B16 original /4 |
| M5 | `THPT-G11-CHV-B16-W02-ANCHOR` | RATIONALIZING_NEG_INFINITY | WRITTEN+ANCHOR_TAG | G11 B16 original /4 |
| M5 | `THPT-G11-CHV-B17-W01` | CONTINUITY_AT_JOIN | WRITTEN | G11 B17 original /4 |
| M5 | `THPT-G11-CHV-B17-W02-ANCHOR` | INTERVAL_ENDPOINT_CONTINUITY | WRITTEN+ANCHOR_TAG | G11 B17 original /4 |
| M6 | `THPT-G11-CHIX-B31-W01` | G11-B31-DERIVATIVE_WRITTEN | WRITTEN+ANCHOR_TAG | original G11 ChIX /4 rubric |
| M6 | `THPT-G11-CHIX-B31-W02` | G11-B31-DERIVATIVE_WRITTEN | WRITTEN | original G11 ChIX /4 rubric |
| M6 | `THPT-G11-CHIX-B31-W03` | G11-B31-DERIVATIVE_WRITTEN | WRITTEN | original G11 ChIX /4 rubric |
| M6 | `THPT-G11-CHIX-B32-W01` | G11-B32-DERIVATIVE_WRITTEN | WRITTEN+ANCHOR_TAG | original G11 ChIX /4 rubric |
| M6 | `THPT-G11-CHIX-B32-W02` | G11-B32-DERIVATIVE_WRITTEN | WRITTEN | original G11 ChIX /4 rubric |
| M6 | `THPT-G11-CHIX-B32-W03` | G11-B32-DERIVATIVE_WRITTEN | WRITTEN | original G11 ChIX /4 rubric |
| M6 | `THPT-G11-CHIX-B33-W01` | G11-B33-DERIVATIVE_WRITTEN | WRITTEN+ANCHOR_TAG | original G11 ChIX /4 rubric |
| M6 | `THPT-G11-CHIX-B33-W02` | G11-B33-DERIVATIVE_WRITTEN | WRITTEN | original G11 ChIX /4 rubric |
| M6 | `THPT-G11-CHIX-B33-W03` | G11-B33-DERIVATIVE_WRITTEN | WRITTEN | original G11 ChIX /4 rubric |
| M7 | `THPT-G12-CHI-B01-W01` | G12-B01-FUNCTION_WRITTEN | WRITTEN | original G12 ChI approved SGK source; preserve rubric |
| M7 | `THPT-G12-CHI-B01-W02` | G12-B01-FUNCTION_WRITTEN | WRITTEN+ANCHOR_TAG | original G12 ChI approved SGK source; preserve rubric |
| M7 | `THPT-G12-CHI-B02-W01` | G12-B02-FUNCTION_WRITTEN | WRITTEN | original G12 ChI approved SGK source; preserve rubric |
| M7 | `THPT-G12-CHI-B02-W02` | G12-B02-FUNCTION_WRITTEN | WRITTEN+ANCHOR_TAG | original G12 ChI approved SGK source; preserve rubric |
| M7 | `THPT-G12-CHI-B03-W01` | G12-B03-FUNCTION_WRITTEN | WRITTEN | original G12 ChI approved SGK source; preserve rubric |
| M7 | `THPT-G12-CHI-B03-W02` | G12-B03-FUNCTION_WRITTEN | WRITTEN+ANCHOR_TAG | original G12 ChI approved SGK source; preserve rubric |
| M7 | `THPT-G12-CHI-B04-W01` | G12-B04-FUNCTION_WRITTEN | WRITTEN | original G12 ChI approved SGK source; preserve rubric |
| M7 | `THPT-G12-CHI-B04-W02` | G12-B04-FUNCTION_WRITTEN | WRITTEN+ANCHOR_TAG | original G12 ChI approved SGK source; preserve rubric |
| M7 | `THPT-G12-CHI-B05-W01` | G12-B05-FUNCTION_WRITTEN | WRITTEN | original G12 ChI approved SGK source; preserve rubric |
| M7 | `THPT-G12-CHI-B05-W02` | G12-B05-FUNCTION_WRITTEN | WRITTEN+ANCHOR_TAG | original G12 ChI approved SGK source; preserve rubric |

**Written placement:** same `item_id` and `rubric` across SGK and Topic. After the student writes, allow voluntary self-comparison with original rubric, without recording mastery or official assessment score. **G10 historical two Written IDs need runtime-name verification**; no assumption that historical alias `HPT-` can be silently changed to `THPT-`.

## 3. Four new public transfer anchors already accepted academically

- `THPT-G11-TOP-FUNC-P01` → M6-O02, one-sided differentiability + continuity; content source once at `CAND-P-M6-01`.
- `THPT-G11-TOP-FUNC-P02` → M6-O06, strict positive domain of ln√ plus chain rule; content source once at `CAND-P-M6-02`.
- `THPT-G12-TOP-FUNC-P01` → M7-O01, upward slopes on each branch but discontinuous drop between; content source once at `CAND-P-M7-01`.
- `THPT-G12-TOP-FUNC-P02` → M7-O09, integer feasible box optimum distinct from continuous optimum; content source once at `CAND-P-M7-02`.

Do not show worked solutions for these before the learner attempts them. They **must never become protected assessment items** once included in public Topic practice.


---

## 3. Tự kiểm tra — đánh giá độc lập bảo mật

**Status:** Full independent 30-question `TOPIC_READINESS` academic source is held privately by the project owner; **do not render an official test without release-side approved secure delivery and Final Submit policy**. The public source contains only the assessment interface requirements, **not** a question bank, answer key, scoring rubric, hidden solution, or private ID list.

Learner directions (for a future SECURE implementation): complete the independently selected questions on your own; no feedback, hints, answer keys, worked solutions, AI Tutor, or correctness display before the explicit **Final Submit** action. After authorized submission, receive appropriate review; practice, voluntary self-check and free-text self-comparison never generate Skill Mastery. If a protected delivery/validity channel is unavailable, do not pretend the public client demo is officially scored.

**Academic private verdict:** Reviewed independently using exact owner-held packet with three private files and 5 THPT Permanent Sources v2.1; accepted academic/pedagogical PASS, P0/P1/P2=0, as recorded by separate safe public receipt. This private assessment PASS is **not** RELEASE runtime safety PASS.

---

## 4. Authoring canonical inventory and traceability (not extra learner exercises)

### 4.1. Lesson / module IDs

- TOP-FUNC-M1
- TOP-FUNC-M2
- TOP-FUNC-M3
- TOP-FUNC-M4
- TOP-FUNC-M5
- TOP-FUNC-M6
- TOP-FUNC-M7

### 4.2. Source-grounded outcome IDs (48 reviewed mapping rows; G10 original ten preserved)

- TOP-G10-FUNC-O01
- TOP-G10-FUNC-O02
- TOP-G10-FUNC-O03
- TOP-G10-FUNC-O04
- TOP-G10-FUNC-O05
- TOP-G10-FUNC-O06
- TOP-G10-FUNC-O07
- TOP-G10-FUNC-O08
- TOP-G10-FUNC-O09
- TOP-G10-FUNC-O10
- TOP-FUNC-M4-O01
- TOP-FUNC-M4-O02
- TOP-FUNC-M4-O03
- TOP-FUNC-M4-O04
- TOP-FUNC-M4-O05
- TOP-FUNC-M4-O06
- TOP-FUNC-M4-O07
- TOP-FUNC-M4-O08
- TOP-FUNC-M4-O09
- TOP-FUNC-M4-O10
- TOP-FUNC-M5-O01
- TOP-FUNC-M5-O02
- TOP-FUNC-M5-O03
- TOP-FUNC-M5-O04
- TOP-FUNC-M5-O05
- TOP-FUNC-M5-O06
- TOP-FUNC-M5-O07
- TOP-FUNC-M5-O08
- TOP-FUNC-M5-O09
- TOP-FUNC-M6-O01
- TOP-FUNC-M6-O02
- TOP-FUNC-M6-O03
- TOP-FUNC-M6-O04
- TOP-FUNC-M6-O05
- TOP-FUNC-M6-O06
- TOP-FUNC-M6-O07
- TOP-FUNC-M6-O08
- TOP-FUNC-M6-O09
- TOP-FUNC-M7-O01
- TOP-FUNC-M7-O02
- TOP-FUNC-M7-O03
- TOP-FUNC-M7-O04
- TOP-FUNC-M7-O05
- TOP-FUNC-M7-O06
- TOP-FUNC-M7-O07
- TOP-FUNC-M7-O08
- TOP-FUNC-M7-O09
- TOP-FUNC-M7-O10

### 4.3. Public item reference IDs (192 existing + 4 newly AUTHORING-registered, no duplicate stem)

- THPT-G10-B15-C01
- THPT-G10-B15-C02
- THPT-G10-B15-P01
- THPT-G10-B15-P02
- THPT-G10-B15-P03
- THPT-G10-B15-P04
- THPT-G10-TOP-FUNC-P01
- THPT-G10-TOP-FUNC-P02
- THPT-G10-TOP-FUNC-P03
- THPT-G10-TOP-FUNC-P04
- THPT-G10-TOP-FUNC-P05
- THPT-G10-TOP-FUNC-P06
- THPT-G11-B03-C01
- THPT-G11-B03-C02
- THPT-G11-B03-C03
- THPT-G11-B03-C04
- THPT-G11-B03-P01
- THPT-G11-B03-P02
- THPT-G11-B03-P03
- THPT-G11-B03-P04
- THPT-G11-B03-P05
- THPT-G11-B03-P06
- THPT-G11-B03-P07
- THPT-G11-B03-P08
- THPT-G11-CHVI-B20-C01
- THPT-G11-CHVI-B20-C02
- THPT-G11-CHVI-B20-C03
- THPT-G11-CHVI-B20-C04
- THPT-G11-CHVI-B20-P01
- THPT-G11-CHVI-B20-P02
- THPT-G11-CHVI-B20-P03
- THPT-G11-CHVI-B20-P04
- THPT-G11-CHV-B16-C01
- THPT-G11-CHV-B16-C02
- THPT-G11-CHV-B16-C03
- THPT-G11-CHV-B16-P01
- THPT-G11-CHV-B16-P02
- THPT-G11-CHV-B16-P03
- THPT-G11-CHV-B16-P04
- THPT-G11-CHV-B16-P05
- THPT-G11-CHV-B16-P06
- THPT-G11-CHV-B16-P07
- THPT-G11-CHV-B17-C01
- THPT-G11-CHV-B17-C02
- THPT-G11-CHV-B17-C03
- THPT-G11-CHV-B17-P01
- THPT-G11-CHV-B17-P02
- THPT-G11-CHV-B17-P03
- THPT-G11-CHV-B17-P04
- THPT-G11-CHV-B17-P05
- THPT-G11-CHV-B17-P06
- THPT-G11-CHV-B17-P07
- THPT-G11-CHIX-B31-C01
- THPT-G11-CHIX-B31-C02
- THPT-G11-CHIX-B31-C03
- THPT-G11-CHIX-B31-C04
- THPT-G11-CHIX-B31-C05
- THPT-G11-CHIX-B31-C06
- THPT-G11-CHIX-B31-C07
- THPT-G11-CHIX-B31-C08
- THPT-G11-CHIX-B31-C09
- THPT-G11-CHIX-B31-C10
- THPT-G11-CHIX-B31-P01
- THPT-G11-CHIX-B31-P02
- THPT-G11-CHIX-B31-P03
- THPT-G11-CHIX-B31-P04
- THPT-G11-CHIX-B31-P05
- THPT-G11-CHIX-B31-P06
- THPT-G11-CHIX-B31-P07
- THPT-G11-CHIX-B31-P08
- THPT-G11-CHIX-B31-P09
- THPT-G11-CHIX-B31-P10
- THPT-G11-CHIX-B32-C01
- THPT-G11-CHIX-B32-C02
- THPT-G11-CHIX-B32-C03
- THPT-G11-CHIX-B32-C04
- THPT-G11-CHIX-B32-C05
- THPT-G11-CHIX-B32-C06
- THPT-G11-CHIX-B32-C07
- THPT-G11-CHIX-B32-C08
- THPT-G11-CHIX-B32-C09
- THPT-G11-CHIX-B32-C10
- THPT-G11-CHIX-B32-C11
- THPT-G11-CHIX-B32-C12
- THPT-G11-CHIX-B32-C13
- THPT-G11-CHIX-B32-C14
- THPT-G11-CHIX-B32-C15
- THPT-G11-CHIX-B32-P01
- THPT-G11-CHIX-B32-P02
- THPT-G11-CHIX-B32-P03
- THPT-G11-CHIX-B32-P04
- THPT-G11-CHIX-B32-P05
- THPT-G11-CHIX-B32-P06
- THPT-G11-CHIX-B32-P07
- THPT-G11-CHIX-B32-P08
- THPT-G11-CHIX-B32-P09
- THPT-G11-CHIX-B32-P10
- THPT-G11-CHIX-B32-P11
- THPT-G11-CHIX-B32-P12
- THPT-G11-CHIX-B32-P13
- THPT-G11-CHIX-B32-P14
- THPT-G11-CHIX-B32-P15
- THPT-G11-CHIX-B33-C01
- THPT-G11-CHIX-B33-C02
- THPT-G11-CHIX-B33-C03
- THPT-G11-CHIX-B33-C04
- THPT-G11-CHIX-B33-C05
- THPT-G11-CHIX-B33-P01
- THPT-G11-CHIX-B33-P02
- THPT-G11-CHIX-B33-P03
- THPT-G11-CHIX-B33-P04
- THPT-G11-CHIX-B33-P05
- THPT-G11-CHIX-CHIX-C01
- THPT-G11-CHIX-CHIX-P01
- THPT-G12-CHI-B01-A01
- THPT-G12-CHI-B01-C01
- THPT-G12-CHI-B01-C02
- THPT-G12-CHI-B01-C03
- THPT-G12-CHI-B01-C04
- THPT-G12-CHI-B01-P01
- THPT-G12-CHI-B01-P02
- THPT-G12-CHI-B01-P03
- THPT-G12-CHI-B01-P04
- THPT-G12-CHI-B01-W01
- THPT-G12-CHI-B01-W02
- THPT-G12-CHI-B02-A01
- THPT-G12-CHI-B02-C01
- THPT-G12-CHI-B02-C02
- THPT-G12-CHI-B02-C03
- THPT-G12-CHI-B02-C04
- THPT-G12-CHI-B02-P01
- THPT-G12-CHI-B02-P02
- THPT-G12-CHI-B02-P03
- THPT-G12-CHI-B02-P04
- THPT-G12-CHI-B02-P05
- THPT-G12-CHI-B02-W01
- THPT-G12-CHI-B02-W02
- THPT-G12-CHI-B03-A01
- THPT-G12-CHI-B03-C01
- THPT-G12-CHI-B03-C02
- THPT-G12-CHI-B03-C03
- THPT-G12-CHI-B03-C04
- THPT-G12-CHI-B03-P01
- THPT-G12-CHI-B03-P02
- THPT-G12-CHI-B03-P03
- THPT-G12-CHI-B03-P04
- THPT-G12-CHI-B03-P05
- THPT-G12-CHI-B03-P06
- THPT-G12-CHI-B03-P07
- THPT-G12-CHI-B03-W01
- THPT-G12-CHI-B03-W02
- THPT-G12-CHI-B04-A01
- THPT-G12-CHI-B04-A02
- THPT-G12-CHI-B04-C01
- THPT-G12-CHI-B04-C02
- THPT-G12-CHI-B04-C03
- THPT-G12-CHI-B04-C04
- THPT-G12-CHI-B04-P01
- THPT-G12-CHI-B04-P02
- THPT-G12-CHI-B04-P03
- THPT-G12-CHI-B04-P04
- THPT-G12-CHI-B04-P05
- THPT-G12-CHI-B04-P06
- THPT-G12-CHI-B04-W01
- THPT-G12-CHI-B04-W02
- THPT-G12-CHI-B05-A01
- THPT-G12-CHI-B05-A02
- THPT-G12-CHI-B05-A03
- THPT-G12-CHI-B05-C01
- THPT-G12-CHI-B05-C02
- THPT-G12-CHI-B05-C03
- THPT-G12-CHI-B05-C04
- THPT-G12-CHI-B05-P01
- THPT-G12-CHI-B05-P02
- THPT-G12-CHI-B05-P03
- THPT-G12-CHI-B05-P04
- THPT-G12-CHI-B05-P05
- THPT-G12-CHI-B05-P06
- THPT-G12-CHI-B05-W01
- THPT-G12-CHI-B05-W02
- THPT-G12-CHI-END-A01
- THPT-G12-CHI-END-A02
- THPT-G12-CHI-END-C01
- THPT-G12-CHI-END-C02
- THPT-G12-CHI-END-C03
- THPT-G12-CHI-END-C04
- THPT-G12-CHI-END-P01
- THPT-G12-CHI-END-P02
- THPT-G12-CHI-END-P03
- THPT-G12-CHI-END-P04
- THPT-G12-CHI-END-W01
- THPT-G12-CHI-END-W02
- THPT-G11-TOP-FUNC-P01
- THPT-G11-TOP-FUNC-P02
- THPT-G12-TOP-FUNC-P01
- THPT-G12-TOP-FUNC-P02

### 4.4. Source references without academic rewrite

| PART | Exact original Git blob | Scope |
|---|---|---|
| R14 Kiến thức | `3de111faf1a0080cad3d74f1a396975e07aec31b` | Student knowledge text unchanged |
| R15 Luyện tập/Written | `03e103c96f25eecc611d0bdaca258865a5fc981c` | Source-only item/FIG/HELP routes; no cloned answer/rubric |
| R12 earlier-source Q15 | `5f22a43f8266f6906fc05dbd59cb7d9accf7eaef` | 192 older exact existing IDs and 48 outcome routes |
| R13 four new public source pointers | `6aaad9e3129b8c961d3f7dc5de71b1424976cc4a` | 4 unique authoring-level public practice item IDs, source content already independently reviewed |

**Written/Anchor:** R15 links **28 historical Written source references** (G10 2 original HPT aliases, G11 M4 3, M5 4, M6 9, G12 M7 10); same rubric for SGK and Topic, Anchor is a label. G10 `HPT-G10-CHVI-WRI-15-01/-02` aliases are in original historical academic R01; RELEASE must resolve its original runtime canonical registry without changing source maths or minting a duplicate ID.

**FIG/HELP:** 18 referenced distinct existing SVG filenames plus historic G10 parabola plot hook, and 29 selected HELP routes, with original source descriptions. They are source-based pointers; final AP3 accessibility/MathJax, render fallback and linking are RELEASE QA, not claimed performed here.

**Item content version:** Original legacy canonical item versions remain those of their existing bank snapshots, not magically the Git source blob SHA; four new R13 public pointers have authored `content_version=1.0.0`. Nothing in this file changes original answer/key/rubric. A1–A7/Q01–Q18 prehandoff evidence and private assessment receipt are external authoritative artifacts.

**Handoff constraint:** Live `LEARNING_PATH=TOPIC` is not currently admitted by the repository's existing SGK-only V2 ready-manifest script. Do not create false `ready/` or label release-ready until the owner-authorized TOPIC gate path is available. This is integration/routing, not a NotebookLM scholarly defect. `NO_RELEASE`, `NO_MASTERY`.
