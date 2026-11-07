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
