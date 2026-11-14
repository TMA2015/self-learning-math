# AUTHORING PILOT R00 — Hàm số và đồ thị: đọc để hiểu từ đầu đến ứng dụng

**PACKET_ID:** THPT-TOPIC-FUNCTIONS-VERTICAL-PILOT-PREP-R00-20261107  
**LEARNING_PATH:** TOPIC · **PAGE_ROLE:** KIEN_THUC · **STUDENT_DRAFT:** YES  
**ACADEMIC/PED VERDICT FOR THIS NEW PROSE:** PENDING · **DELTA_CLASS:** DELTA_C_ACADEMIC_MATERIAL (new/reshuffled pedagogical explanation)  
**CONTEXT:** Mạch kiến thức độc lập toàn nhánh Topic, không phải mục lục hay tóm tắt từng bài SGK. Đây là **bản mẫu luồng diễn giải để nghiệm thu**, CHƯA là trang kiến thức đủ D1–D6/Q01–Q18 của toàn Chuyên đề G10–G12, CHƯA dùng làm ngân hàng câu kiểm tra/Mastery.  
**CANONICAL BANK:** Chỉ ghi ví dụ và câu Tự thử minh họa trong file này; không cấp `ITEM_ID` chấm điểm mới, không sao chép bank đã reviewed.

> **Lời mở đầu dành cho người học**
>
> Có những câu hỏi rất khác nhau: Khi số giờ làm tăng, tiền công thay đổi thế nào? Một vật đang bay lên hay đang rơi xuống? Vì sao một vòng quay lại tạo ra đường cong lặp đi lặp lại? Làm sao biết chi phí thấp nhất hoặc lợi nhuận cao nhất?
>
> Điểm chung là **một đại lượng thay đổi khi đại lượng khác thay đổi**. Chuyên đề này sẽ giúp em tự mô tả mối quan hệ, hiểu điều đồ thị nói, rồi dần biết cách dự đoán hướng thay đổi và tìm phương án tốt nhất. Không cần học thuộc ngay một bảng công thức dài; mỗi công thức sẽ xuất hiện khi em đã thấy nó giải quyết câu hỏi nào.

## Bản đồ kiến thức ngắn cho người học (không phải các chương SGK)

1. **Điều gì đang thay đổi?** Đầu vào → đầu ra, miền hợp lệ và bảng/đồ thị.
2. **Đồ thị kể chuyện gì?** Tăng, giảm, đổi quy tắc, các đường cong quen thuộc.
3. **Một đường cong có đỉnh nói gì?** Parabol và chọn phương án tốt nhất trong giới hạn thực tế.
4. **Không phải mọi thay đổi đều giống parabol.** Tuần hoàn, tăng trưởng theo tỉ lệ và mối quan hệ thuận–ngược.
5. **Điều gì xảy ra ở rất gần một điểm?** Giới hạn, lỗ đồ thị và tính liên tục.
6. **Ngay lúc này thay đổi nhanh hay chậm?** Đạo hàm từ tỉ số biến thiên.
7. **Ghép những manh mối để hiểu toàn đồ thị.** Dấu đạo hàm, cực trị, tiệm cận, khảo sát và tối ưu.

**Quy tắc điều hướng:** Đây là thứ tự gợi ý tự học. Trên website, tab có thể gộp hoặc đổi tên theo mạch ý; không có yêu cầu mỗi mạch phải chứa đúng các mục "Vì sao/Tính chất/Ví dụ" hay tạo tab cấp 3. Học sinh theo Topic không phải sang SGK để đọc bất cứ nội dung bắt buộc nào.

---

## Mảng 1 — Khi một lượng phụ thuộc vào một lượng khác

**Chuyện quen thuộc.** Một vé xe giá 8 nghìn đồng. Nếu mua \(x\) vé thì số tiền \(y\) nghìn đồng là \(y=8x\). Ta đưa vào số vé, quy tắc trả về tiền cần trả. Với \(x=3\), kết quả là \(24\). Nhưng không phải mọi \(x\) đều chấp nhận được: mua vé theo chiếc thì \(x\) cần là số nguyên không âm; trong tình huống này không có chuyện mua \(2,4\) vé.

**Hiểu bản chất trước tên gọi.** Khi mỗi đầu vào hợp lệ \(x\) cho **đúng một** đầu ra \(y\), ta có một **hàm số**. Hai đầu vào khác nhau *được phép* cho cùng đầu ra; điều kiện của hàm số không đòi mỗi đầu ra chỉ có một đầu vào. Ký hiệu \(f(x)\) đơn giản là "giá trị nhận được khi đầu vào là x". **Tập xác định** là tập đầu vào được phép; **tập giá trị** gồm các đầu ra thật sự tạo được.

**Khi gặp công thức khó hơn:** \(f(x)=\sqrt{x+2}/(x-1)\) đòi đồng thời \(x+2\ge0\) và \(x-1\ne0\). Vì vậy \(D=[-2,+\infty)\setminus\{1\}\). Trong mô hình thực tế, em còn phải xét giới hạn về thời gian, kích thước, số lượng...; không thể chỉ giải điều kiện căn và mẫu rồi kết luận.

**Ví dụ có suy luận — Nhầm hàm số với quan hệ một-một.** Bảng \(x: 0,1,2\); \(y: 4,4,7\) **vẫn** mô tả một hàm số, vì từng giá trị x chỉ cho một y. Nhưng nếu hai dòng có cùng \(x=1\) mà lần lượt cho \(y=4\) và \(y=9\), quan hệ ấy không biểu diễn một hàm số tại x=1. **Vì sao chọn kiểm tra này?** Ta muốn biết quy tắc có cho kết quả *duy nhất* hay không, chứ không phải y có khác nhau ở mọi hàng.

**Tự thử (không chấm điểm):** Một máy bán nước nhận số tiền \(x\), trả lại số chai nguyên \(n(x)\). Có thể hai số tiền khác nhau cùng cho một số chai không? Điều đó có vi phạm điều kiện hàm số không?

<details><summary>Đã tự nghĩ xong? Mở đối chiếu</summary>

Có thể, ví dụ nếu phần tiền dư chưa đủ mua thêm một chai. Điều kiện vẫn là: *với cùng một số tiền đầu vào*, quy tắc đã xác định phải cho đúng một số chai. Nếu em còn nhầm "một đầu vào" với "một đầu ra", quay lại ví dụ bảng 0,1,2 ở trên rồi tự tạo bảng có x lặp.
</details>

**Khi mắc lỗi:** Ghi cụ thể loại sai: quên miền hợp lệ, chia cho 0, căn số âm, hoặc nhầm đơn trị với đơn ánh; sau đó tự làm lại một quan hệ bằng bảng. D6 trong bản chính thức sẽ tham chiếu đúng HELP canonical, không sao chép lời giải sang kho thứ hai.

## Mảng 2 — Đọc đồ thị thay vì chỉ nhìn một đường cong

Một bảng đo nhiệt độ tại 8 giờ, 12 giờ và 16 giờ chỉ cho ba số liệu. Nối ba điểm bằng một đường cong mượt có thể giúp *hình dung*, nhưng chưa chứng minh được nhiệt độ ở 10 giờ nếu không có quy luật hoặc mô hình phù hợp. **Đọc đúng đồ thị là đọc đúng chứng cứ và miền của nó.**

**Đồ thị hàm số** là tập điểm \((x,f(x))\) với x thuộc tập xác định. Trục ngang biểu diễn đầu vào; trục đứng biểu diễn đầu ra. Trước khi suy luận, hãy đọc nhãn trục, đơn vị, miền và điểm đóng/mở. Một đường thẳng đứng bất kỳ không được cắt đồ thị của một hàm số tại hai điểm khác độ cao trong cùng miền x.

**Hàm tăng hay giảm:** Trên một *khoảng K*, nếu x tăng mà giá trị f(x) luôn tăng thì hàm đồng biến trên K; nếu luôn giảm thì nghịch biến trên K. Với \(f(x)=x^2\), x đi từ \(-3\) đến \(-1\) thì giá trị từ \(9\) xuống \(1\); x đi từ \(0\) đến \(2\) thì giá trị từ \(0\) lên \(4\). Vậy không thể nói \(x^2\) tăng trên toàn bộ \(\mathbb R\) chỉ vì nhìn phần đồ thị bên phải.

**Khi quy tắc thay đổi theo ngữ cảnh:** Ví dụ phí gửi xe theo giờ có thể dùng \(P(t)=5t\) nghìn đồng khi \(0\le t\le2\), và \(P(t)=10+3(t-2)\) khi \(t>2\). Điểm \(t=2\) thuộc **nhánh đầu**, cho \(P(2)=10\); \(t=3\) dùng nhánh hai, cho \(13\). Không được lấy công thức nhánh hai cho một t không thuộc nhánh đó. Đây là mô hình giả định; quy tắc trả phí thực tế có thể tính tròn theo giờ.

**Hướng dẫn đọc hình cần có trong sản phẩm:** (i) kiểm trục/đơn vị; (ii) nêu hai điểm minh họa bằng tọa độ; (iii) xác định miền tăng/giảm được chứng minh chứ không suy từ vài điểm; (iv) mô tả điểm ghép/mốc loại khỏi miền; (v) phát biểu điều đồ thị **không** cho phép kết luận.

**Tự thử:** Nếu \(P(t)\) ở trên, tại \(t=2\) số tiền là 10 hay 13? Đồ thị có bị nhảy tại mốc đó không? Vì sao?
<details><summary>Đã thử? Mở phần đối chiếu</summary>

\(P(2)=10\). Khi t tiến gần 2 từ bên phải, \(10+3(t-2)\) tiến về 10; hai nhánh khớp, đồ thị không nhảy ở mốc này. Nếu em nhầm, hãy khoanh điều kiện \(t\le2\) và \(t>2\) trước khi thay số.
</details>

## Mảng 3 — Vì sao parabol có một đỉnh?

**Câu hỏi đầu tiên không phải công thức:** Khi một vật được ném lên rồi rơi xuống, độ cao ban đầu tăng và về sau giảm. Ta cần biết **lúc nào cao nhất** và chỉ xét các thời điểm vật đang chuyển động, không kéo dài mô hình sang thời gian âm vô nghĩa.

Một họ mô hình đơn giản cho đường cong ấy là \(f(x)=ax^2+bx+c\) với \(a\ne0\). Tại sao đường cong có trục đối xứng? Ta có thể **hoàn thành bình phương**:
\[
 f(x)=a(x-h)^2+k,\qquad h=-\frac{b}{2a},\quad k=f(h).
\]
Bình phương \((x-h)^2\) nhỏ nhất là 0 khi \(x=h\). Nếu \(a>0\), \(a(x-h)^2\ge0\), nên giá trị nhỏ nhất là k trên **toàn \(\mathbb R\)**; nếu \(a<0\), giá trị lớn nhất là k. Điểm \((h,k)\) là đỉnh. Hai giá trị `h-d` và \(h+d\) cho cùng đầu ra nên đường \(x=h\) là trục đối xứng.

**Ví dụ có phương pháp và điều kiện:** \(g(x)=-(x-2)^2+5\) chỉ áp dụng trong \(0\le x\le3\). Dạng đỉnh cho biết đỉnh \((2,5)\), nằm trong miền nên giá trị lớn nhất là 5. Giá trị nhỏ nhất trên đoạn chưa chắc ở đỉnh: so sánh \(g(0)=1\), \(g(3)=4\); vậy GTNN là 1 tại \(x=0\). **Vì sao chọn cách này?** Dạng đỉnh làm rõ chiều mở và vị trí cực trị; hai đầu mút bảo đảm không bỏ sót cực trị trên miền hạn chế. Nếu đỉnh ở ngoài đoạn thì chỉ dựa vào k có thể cho kết luận sai.

**Muốn tìm giao trục:** giao \(Oy\) tại \(x=0\); giao \(Ox\) là các nghiệm thực của \(ax^2+bx+c=0\). Biệt thức \(\Delta=b^2-4ac\): âm → không có giao \(Ox\); bằng 0 → một điểm tiếp xúc; dương → hai giao điểm phân biệt. Không được vì thấy parabol mở lên mà kết luận nó luôn cắt trục hoành.

**Hướng dẫn đọc hình parabol:** đánh dấu đỉnh, trục đối xứng, chiều mở, một cặp điểm đối xứng và các giao trục **nếu có**; phần đồ thị thuộc miền mô hình thực tế phải được nhấn riêng. Hình này trong sản phẩm dùng **một FIG canonical** có nguồn và lời mô tả ngay trong Topic, không bắt người học chuyển SGK để hiểu.

**Tự thử:** \(p(x)=x^2-6x+8\). Trước khi tính giao trục, hãy đoán hoành độ trục đối xứng; sau đó tìm đỉnh và hai nghiệm nếu có.
<details><summary>Đã tự giải? Mở đối chiếu</summary>

\(p(x)=(x-3)^2-1\); trục \(x=3\), đỉnh \((3,-1)\). \(p(x)=0\) khi \(x=2\) hoặc \(x=4\). Hai nghiệm cách trục đối xứng đúng một đơn vị. Nếu có lỗi dấu, thử khai triển \((x-3)^2-1\) trở lại biểu thức ban đầu.
</details>

## Mảng 4 — Có những đường cong không phải parabol

**Một đường cong chỉ tăng rồi giảm chưa nói đủ mọi hiện tượng.** Thủy triều, con lắc hay bánh xe quay có thể trở lại trạng thái cũ nhiều lần; tiền gửi tăng theo tỷ lệ lại có đường đi không quay trở lại. Trước khi chọn công cụ, hãy hỏi: *sự thay đổi lặp lại hay tích lũy theo tỷ lệ?*

### Một đối xứng có ý nghĩa toán học

Trước khi đọc các đường cong đặc biệt, em hãy nhìn hai đồ thị quen thuộc: \(y=x^2\) và \(y=x^3\). Với \(x=2\) và \(x=-2\), bình phương đều bằng \(4\); còn lập phương lần lượt bằng \(8\) và \(-8\). Vì thế đồ thị \(y=x^2\) đối xứng qua **trục tung**, còn đồ thị \(y=x^3\) đối xứng qua **gốc tọa độ**. Ta dùng từ **hàm chẵn** và **hàm lẻ** để mô tả chính xác hai kiểu đối xứng ấy.

- **Hàm chẵn:** miền xác định \(D\) đối xứng qua \(0\) (nếu \(x\in D\) thì \(-x\in D\)) và \(f(-x)=f(x)\) với mọi \(x\in D\). Đồ thị đối xứng qua \(Oy\). Ví dụ \(x^2\) và \(\cos x\).
- **Hàm lẻ:** miền xác định cũng phải đối xứng qua \(0\) và \(f(-x)=-f(x)\). Đồ thị đối xứng qua gốc \(O\). Ví dụ \(x^3\) và \(\sin x\).
- **Không phải hàm nào cũng chẵn hoặc lẻ:** \(f(x)=x^2+x\) trên \(\mathbb R\) không thỏa hai điều kiện. Nếu miền xác định không đối xứng, không được chỉ kiểm một vài giá trị rồi kết luận chẵn/lẻ.

**Vì sao cần biết?** Khi đã thấy đối xứng, em chỉ cần hiểu một phần đồ thị để hình dung phần còn lại; đây là công cụ đọc hình chứ không phải một công thức tính mới. **Lưu ý điều kiện:** một hàm lẻ không nhất thiết đi qua \(O\) nếu \(x=0\) không thuộc miền xác định, chẳng hạn \(\cot x\).

**Tự thử:** \(f(x)=x^2+1\) và \(g(x)=x^3\) trên \(\mathbb R\): hàm nào chẵn, hàm nào lẻ? Nêu tính đối xứng của đồ thị trước khi mở đáp án.

<details><summary>Đã thử? Mở đối chiếu</summary>

\(f(-x)=(-x)^2+1=f(x)\) nên f chẵn, đồ thị đối xứng qua trục tung. \(g(-x)=(-x)^3=-g(x)\) nên g lẻ, đồ thị đối xứng qua gốc tọa độ. Nếu lúng túng với dấu âm, thử lấy hai giá trị \(x=2\) và \(x=-2\), rồi kiểm lại bằng biến đổi tổng quát.
</details>

### Khi hiện tượng lặp lại

Điểm M chuyển động trên đường tròn đơn vị với góc x tính bằng radian có tọa độ \((\cos x,\sin x)\). Khi M quay trọn vòng \(2\pi\), tọa độ lặp lại. Vì vậy \(\sin(x+2\pi)=\sin x\), \(\cos(x+2\pi)=\cos x\); đồ thị sin/cos có chu kỳ \(2\pi\), nhận giá trị trong \([-1,1]\) và xác định với mọi x thực. "Chu kỳ" là quãng đầu vào để hàm lặp, không phải độ cao cực đại. \(\tan x=\sin x/\cos x\) chỉ dùng khi \(\cos x\ne0\); \(\cot x=\cos x/\sin x\) đòi \(\sin x\ne0\). Sin là hàm lẻ, cos là hàm chẵn, còn tan và cot là hàm lẻ **trên đúng miền xác định của chúng**. Đồ thị sin/cos lặp sau \(2\pi\); tan/cot lặp sau \(\pi\) nhưng có những điểm không xác định. Cụ thể, \(\tan x\) không xác định tại \(x=\pi/2+k\pi\), \(\cot x\) không xác định tại \(x=k\pi\) (\(k\in\mathbb Z\)). Ở mỗi khoảng liên tục giữa hai điểm bị loại kề nhau, tan tăng còn cot giảm; **không nối** các nhánh qua đường tiệm cận đứng. Hình tròn lượng giác và bốn đồ thị cần hướng dẫn đọc trực tiếp tại Topic: xem trục, giá trị biên, khoảng tăng/giảm, đối xứng, chu kỳ và điểm bị loại. Khi hoàn thiện FULL cần rà đủ công thức/điều kiện theo S1 từng họ hàm, không chỉ dừng ở đoạn giới thiệu này.

**Tự thử nhanh:** Nếu một đồ thị sin bắt đầu lại sau khi x tăng \(2\pi\), ta có thể kết luận biên độ bằng \(2\pi\) không? Vì sao?
<details><summary>Mở đối chiếu</summary>Không. \(2\pi\) là chu kỳ theo trục x; với sin x thông thường, biên độ bằng 1 theo trục y. Phân biệt trục và đơn vị trước khi đọc hình.</details>

### Khi mỗi giai đoạn tăng/giảm theo tỷ lệ

Với \(a>0,a\ne1\), hàm mũ \(y=a^x\) nhận mọi x thực và có giá trị **luôn dương**; nếu \(a>1\) thì tăng, còn \(0<a<1\) thì giảm. Với \(a=2\), khi x tăng 1, giá trị gấp đôi, đồ thị qua \((0,1)\) và \((1,2)\). Để hỏi ngược "cần số mũ x nào để \(a^x=b\)?", ta dùng \(x=\log_a b\), chỉ có nghĩa với \(b>0\) cùng cơ số \(a>0,a\ne1\). Hàm \(y=\log_a x\) nhận **x dương**, có tập giá trị \(\mathbb R\); đồ thị là ảnh gương của \(y=a^x\) qua \(y=x\).

**Đọc hình mũ/log:** nhìn vị trí \((0,1)\leftrightarrow(1,0)\); nhận ra miền \(x>0\) của log và trục \(x=0\) mà đồ thị log tiến sát, không cắt. Với \(a>1\), mũ tăng nên log cũng tăng; với \(0<a<1\), cả hai giảm. Không được thay \(x=-1\) vào log thực.

**Bẫy phương pháp:** \(x^2\) là hàm lũy thừa với biến ở **cơ số**, còn \(2^x\) là hàm mũ với biến ở **số mũ**. Một mô hình tiền tăng gấp đôi sau mỗi kỳ chỉ đảm bảo \(N(n)=N_0 2^n\) cho các kỳ nguyên n nếu đề bài chỉ đo theo kỳ; mở rộng t liên tục là giả định mô hình bổ sung, không tự nhận như dữ kiện.

**Tự thử:** Tại \(x=3\), \(2^x\) bằng bao nhiêu? Muốn \(2^x=8\) thì x bằng bao nhiêu? Có được tính \(\log_2(-8)\) trong số thực không?
<details><summary>Mở đối chiếu</summary>\(2^3=8\); \(\log_2(8)=3\); \(\log_2(-8)\) không xác định trong số thực vì đối số log phải dương.</details>

## Mảng 5 — Gần một điểm vẫn có thể biết điều gì?

Khi một biểu thức chưa xác định tại điểm \(x=a\), chúng ta vẫn có thể quan sát **các giá trị ở gần đó**. Xét
\[
 f(x)=\frac{x^2-4}{x-2},\quad x\ne2.
\]
Ta không được thay trực tiếp \(x=2\) vì mẫu bằng 0. Nhưng với mọi \(x\ne2\), rút gọn được \(f(x)=x+2\). Khi x từ trái hoặc phải tiến gần 2, f(x) tiến gần 4. Vì vậy \(\lim_{x\to2}f(x)=4\) dù \(f(2)\) không tồn tại.

**Bản chất:** "Giới hạn tại a" nói về xu thế của đầu ra khi đầu vào *tiến sát a*, không nhất thiết nói về giá trị **ngay tại a**. Cần phân biệt giới hạn từ trái/phải. Nếu hai phía tiến đến hai kết quả khác nhau, giới hạn hai phía không tồn tại. Nếu giá trị tăng không bị chặn, giới hạn vô cực có ý nghĩa khác giới hạn hữu hạn.

**Liên tục có nghĩa gì?** Để f liên tục tại a, cần f(a) có nghĩa, giới hạn hữu hạn hai phía tồn tại và \(\lim_{x\to a}f(x)=f(a)\). Nếu "vá lỗ" trên bằng cách định nghĩa thêm \(f(2)=4\), hàm liên tục tại 2; nếu định nghĩa \(f(2)=9\), thì chưa liên tục dù hình nhìn gần 2 vẫn tiến tới 4. Trực giác "vẽ một nét" giúp hình dung, nhưng không thay các điều kiện này.

**Hướng dẫn đọc hình:** điểm tròn rỗng nói "không lấy điểm này" còn chấm đặc nói "đây mới là giá trị thật". Không xem "lỗ" trên đồ thị như một đường tiệm cận đứng: tại x=2 giới hạn của ví dụ là 4 hữu hạn.

**Tự thử:** Với \(h(x)=(x^2-9)/(x-3)\) khi \(x\ne3\), xu hướng \(h(x)\) khi x tiến sát 3 là bao nhiêu? Hàm gốc có liên tục tại 3 không?
<details><summary>Mở đối chiếu</summary>Với \(x\ne3\), \(h(x)=x+3\), nên giới hạn là 6. Hàm gốc *không* liên tục tại 3 vì chưa có \(h(3)\); cần bổ sung \(h(3)=6\) nếu muốn khử gián đoạn đó.</details>

## Mảng 6 — "Ngay lúc này" thay đổi nhanh hay chậm?

**Từ trung bình đến tức thời.** Nếu vị trí \(s(t)=t^2+2t\) mét với \(t\ge0\) giây, vận tốc trung bình trong khoảng \([2,2+h]\) với h khác 0 và hai thời điểm hợp lệ là
\[
\frac{s(2+h)-s(2)}h=\frac{6h+h^2}{h}=6+h.
\]
Khi h tiến về 0, kết quả tiến đến 6 m/s. **Vì sao không thay h=0 ngay?** Công thức thương sai phân lúc đầu có mẫu h nên không xác định ở 0. Chúng ta xét *giới hạn của các khoảng đo nhỏ*, không chia cho 0.

Ta gọi giới hạn ấy là **đạo hàm tại t=2**: \(s'(2)=6\). Với \(f\) nói chung, tại điểm a trong miền phù hợp,
\[
f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}h
\]
**nếu giới hạn hai phía hữu hạn tồn tại**. Về hình học, đó là độ dốc của tiếp tuyến khi các cát tuyến tiến sát. Về đo lường, đơn vị đạo hàm là "đơn vị đầu ra / đơn vị đầu vào". Đạo hàm không mặc định là vận tốc: chỉ có nghĩa vật lý này khi f là vị trí theo thời gian.

**Vì sao cần quy tắc tính đạo hàm?** Tính giới hạn sai phân cho mọi hàm khá dài. Khi đã hiểu bản chất, các công thức như \((x^n)'=nx^{n-1}\) (trong miền hợp lệ), quy tắc cộng/tích/thương/hàm hợp giúp làm nhanh; phải kiểm tra miền và điều kiện trước khi áp dụng. Khi lấy đạo hàm lần nữa cho vị trí theo thời gian, \(s''(t)\) là gia tốc m/s², **khác** tốc độ \(|s'(t)|\). Gói FULL cần cung cấp đủ bảng quy tắc/điều kiện S1 cho các họ hàm được sử dụng, ngay tại Topic.

**Tự thử:** Từ biểu thức \(s(t)=t^2+2t\), hãy tự tính \(s'(t)\) rồi kiểm \(s'(2)\).
<details><summary>Mở đối chiếu</summary>\(s'(t)=2t+2\); \(s'(2)=6\) m/s, khớp phép đo bằng thương sai phân ở trên. Nếu không khớp, quay lại khai triển \(s(2+h)-s(2)\) và kiểm từng hạng.</details>

## Mảng 7 — Ghép các manh mối để đọc toàn bộ đồ thị và tối ưu

Một điểm có \(f'(x)=0\) **chưa đủ** để kết luận đạt cực trị: cần xem dấu đạo hàm đổi thế nào quanh điểm đó. Và một cực trị tại nơi nào đó không nhất thiết là GTLN/GTNN trên toàn miền. Đó là lý do phải xét **miền xác định, khoảng tăng/giảm, các điểm tới hạn, giới hạn và đầu mút khi cần**, rồi mới vẽ bức tranh đồ thị.

**Ví dụ 1 — Vì sao lập bảng dấu:** \(f(x)=x^3-3x\), xác định trên \(\mathbb R\). Đạo hàm \(f'(x)=3(x^2-1)=3(x-1)(x+1)\). Dấu dương trên \((-\infty,-1)\) và \((1,+\infty)\), dấu âm trên \((-1,1)\). Vậy f tăng, rồi giảm, rồi tăng; có cực đại địa phương tại \(x=-1\), \(f(-1)=2\), và cực tiểu địa phương tại \(x=1\), \(f(1)=-2\). Hàm bậc ba này không có GTLN/GTNN trên toàn \(\mathbb R\), dù có hai cực trị. **Lý do chọn phương pháp:** muốn biết hướng đi của đường cong trên *mọi khoảng*, không chỉ tại vài điểm.

**Ví dụ 2 — Chỗ đồ thị tiến sát nhưng không đến:** \(g(x)=(2x+1)/(x-1)=2+3/(x-1)\), miền xác định \(\mathbb R\setminus\{1\}\). Khi x tiến gần 1 từ hai phía, \(3/(x-1)\) có độ lớn tăng vô hạn ⇒ có tiệm cận đứng \(x=1\). Khi x tiến về \(\pm\infty\), phần \(3/(x-1)\) tiến về 0 ⇒ tiệm cận ngang \(y=2\). Đạo hàm \(g'(x)=-3/(x-1)^2<0\) với \(x\ne1\), nên g giảm trên **từng khoảng** \((-\infty,1)\) và \((1,+\infty)\). Không được nối hai nhánh đồ thị qua \(x=1\) hoặc tuyên bố "giảm trên toàn tập xác định" bằng định nghĩa đồng biến/nghịch biến trên một khoảng.

**Ví dụ 3 — Tối ưu chỉ trong miền khả thi:** Lợi nhuận dự đoán \(P(q)=-(q-5)^2+25\) (triệu đồng) khi \(q\in[0,9]\) đơn vị sản phẩm. Đỉnh cho GTLN 25 tại \(q=5\); giá trị đầu mút \(P(0)=0\), \(P(9)=9\), nên GTNN trên đoạn là 0. Nếu q phải nguyên, q=5 vẫn hợp lệ. **Không suy** mô hình đúng ngoài 0–9 hoặc lợi nhuận thật bằng công thức tại mọi nơi: đó là giả định được đề bài cho.

**Hướng dẫn đọc hình cuối mảng:** đối chiếu từng nhánh đồ thị với miền xác định, hướng tăng/giảm, điểm đặc biệt, giới hạn/tiệm cận và vị trí ứng dụng; đường cong phải đi theo chứng cứ, không vẽ "trông hợp mắt" trước khi kiểm.

**Tự thử tích hợp:** Một đồ thị có hai cực trị địa phương. Có chắc nó có GTLN và GTNN trên toàn \(\mathbb R\) không? Hãy dùng \(x^3-3x\) để tự giải thích.
<details><summary>Đã thử? Mở đối chiếu</summary>Không chắc. \(x^3-3x\) có cực đại địa phương 2 tại -1 và cực tiểu địa phương -2 tại 1, nhưng khi x→+\infty, f(x)→+\infty; khi x→-\infty, f(x)→-\infty. Vì vậy không có GTLN/GTNN toàn cục trên \(\mathbb R\).</details>

---

## Cách biến bản thảo thành Chuyên đề thật (ghi chú AUTHORING, không hiển thị nguyên văn cho học sinh)

1. **Đây là chứng minh một kiểu diễn đạt, KHÔNG phải toàn bộ D1 của 7 mảng.** Đối chiếu đủ S1 từng outcome G10–G12, lấp các khái niệm/quy tắc/chứng minh/các dạng biểu đồ còn thiếu, rồi review độc lập. Không cho qua Q02/Q03 vì mỗi mảng đã có một ví dụ.
2. Mảng 1–3 có thể tái sử dụng đúng 10 outcome G10 đã được NotebookLM review v2.0 tại #672, nhưng lời diễn giải trên đây khác nội dung R01 ⇒ **Delta C, không tự gán PASS**. Mảng 4–7 là **nội dung Topic mới**, chưa Academic/PED PASS dưới 5 Permanent Sources v2.1; nguồn SGK main chỉ là dấu vết nội bộ, trước review cần xác minh sách gốc và số trang in/PDF.
3. Từng `<details>` ở đây là **Tự thử công khai tự đối chiếu tự nguyện**, không phải Topic Readiness, không cấp điểm/Mastery, không làm lộ RD1 nguồn kín. Khi đưa lên website, lựa chọn giao diện chỉ thuộc RELEASE sau handoff.
4. Hình cần có tại các chỗ chứng minh lợi ích nhận thức: biểu diễn ánh xạ/bảng, đọc đồ thị một-hai nhánh, parabol có miền, đường tròn lượng giác, trục đối xứng mũ/log, lỗ giới hạn, cát tuyến–tiếp tuyến, bảng dấu và tiệm cận. Không tạo hình cho đủ số lượng; mỗi hình phải có FIG_ID/alt/mô tả "nhìn gì→rút ra gì", QA học thuật và AP3 riêng.
5. Chuẩn bị Luyện tập **trong cùng nhánh Topic**, nhóm theo mạch/dạng tư duy/mức độ, dùng `placement` tới cùng canonical SGK Written/Practice, không bắt người học mở liên kết SGK. Mỗi "Tự thử" trong bản thảo không tự động thành ITEM_ID độc lập. Độ sâu transfer/đa kỹ năng và Written/rubric còn phải hoàn thiện.
6. Cuối Topic chỉ được gọi `TOPIC_READINESS` khi có đủ scope độc lập, bộ đánh giá đủ outcome và không lặp câu đã được xem không kiểm soát; bản web hai câu hiện tại là demo, private G10 12 candidate không chứng minh đánh giá toàn 10–12. Không đưa private RD1 đề/đáp án/rubric lên GitHub.
7. **Không tạo chuẩn/bố cục cứng mới:** phương pháp Q09–Q14 là nhịp ý nghĩa phù hợp từng concept; tên mảng, số nhóm tab, ví dụ, hình và Tự thử tùy bản chất, giữ Golden R4/Adaptive Tabs v2, Topic đúng ba mục.
8. **NotebookLM gate:** bản này chưa đủ để tự cấp Academic/PED PASS hay `CONTENT_READY`. Sau khi hoàn thiện tất cả mảng + D2–D6 + mapping + nguồn S1, giao đúng file `Temp_*.md` thực và prompt 3–6 câu cho review mới (5 Permanent v2.1), rồi tạo V2 handoff/one READY/REGISTER. Không chạm website, không merge/deploy.
