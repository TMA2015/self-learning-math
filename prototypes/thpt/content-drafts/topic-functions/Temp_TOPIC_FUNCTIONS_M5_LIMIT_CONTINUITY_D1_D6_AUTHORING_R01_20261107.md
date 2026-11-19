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
