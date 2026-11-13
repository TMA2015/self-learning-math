# B19–B22 · Lời giảng và hình minh họa đã sửa sau phản biện NotebookLM — R02 (14/11/2026)

**Mục tiêu:** học liệu SGK KNTT Toán 10 Chương VII đủ rõ để học sinh tự hiểu bản chất và làm được câu Vận dụng tương tự, không cần một giáo viên giải thích thêm. Đây là **bản thảo sư phạm cụ thể**, chưa thay source website và chưa mang Academic/PED PASS. NotebookLM đã kết luận **REVISE** trên PR #845. AUTHORING chỉ cần kiểm **các đoạn chịu ảnh hưởng**, giữ các câu hỏi/đáp án canonical và D6 hiện có.

**R02 sửa theo 9 nhận xét REVISE của NotebookLM:** `TRY01/02` thêm suy luận vectơ; `TRY06` được đặt vào Guided Extension có ví dụ giải hệ; B20 3 hình đối chiếu số nghiệm/ vị trí, có pháp tuyến–chân chiếu; B21 đường tròn/hình tròn, hoàn thành bình phương, tiếp tuyến với pháp tuyến; B22 điều kiện dây, Core elip không chứa tâm sai, tiệm cận ở Guided Extension, tiêu điểm/đường chuẩn kèm vị trí bộ thu. **Đây là đề xuất để phản biện phần chịu ảnh hưởng, không tự cấp PASS.** Hình sửa là 8 SVG gốc trong gói `Temp_G10_CHVII_R02_REVIEW_20261114.zip` (7 sơ đồ + 1 bản dọc), chưa được tích hợp website.

**Lưu ý đối soát nội dung:** Reviewer viết rằng `TRY18` Core yêu cầu tính tâm sai; **source `TRY18` thực tế chỉ yêu cầu a,b,c và hai tiêu điểm**. Vấn đề nằm trong *lời giải thích thêm công thức e=c/a*, không phải trong đề Core. Không xóa hoặc hạ cấp câu hỏi Core vì lỗi mô tả này.

**Cách dùng:** mỗi đoạn “Lời giảng dự kiến” dưới đây là lời học sinh đọc **liền mạch**, không thêm nhãn lặp “Kiến thức tiền đề / Bản chất trước công thức / Hướng dẫn đọc hình” lên website. Ví dụ sử dụng **dữ kiện mới**, tránh tiết lộ sẵn lời giải của câu Vận dụng canonical đặt ngay sau đoạn. Hình kiến nghị là **SVG gốc do dự án tự vẽ**, không sao chép SGK scan. SGK/SBT vẫn là nguồn quyết định phạm vi Core. Chỉ chuyển nội dung vào website sau khi AUTHORING kiểm Q01–Q14, Q18 và trả phần đã duyệt.

## B19 — TRY01/02 · Từ vuông góc hai vectơ đến phương trình đường thẳng (SGK p30–32)

**Lời giảng dự kiến:**

> Khi đi dọc một đường thẳng, mũi tên chỉ phương \(\vec u\) cho ta biết hướng chuyển động. Một mũi tên khác dựng vuông góc với đường được gọi là vectơ pháp tuyến \(\vec n\). Nếu chọn \(\vec n=(a,b)\ne(0,0)\) thì \(\vec u=(-b,a)\) nằm vuông góc với nó, vì
> \[
> \vec n\cdot\vec u=a(-b)+b a=0.
> \]
> Ngược lại, một vectơ khác vectơ không vuông góc với \(\vec n\) có thể dùng làm chỉ phương. Vậy trước khi viết công thức đường thẳng, em đã biết hai cách nhìn cùng một hướng: **đi dọc đường** và **vuông góc với đường**.
>
> Hãy lấy điểm cố định \(A(x_0,y_0)\) trên đường có pháp tuyến \(\vec n=(a,b)\). Một điểm bất kỳ \(M(x,y)\) cũng nằm trên đường khi và chỉ khi \(\overrightarrow{AM}\) vuông góc với \(\vec n\). Vì \(\overrightarrow{AM}=(x-x_0,y-y_0)\), điều kiện đó trở thành
> \[
> a(x-x_0)+b(y-y_0)=0.
> \]
> Khai triển mới có dạng \(ax+by+c=0\). Chính quan hệ vuông góc sinh ra phương trình, không phải ta tự đặt một mẫu chữ cái để học thuộc. **Điều kiện không thể bỏ:** \((a,b)\ne(0,0)\), vì vectơ không không xác định được hướng vuông góc.

**Hình gợi ý:** mô tả điểm A, điểm M trượt trên một đường, \(\vec u\) dọc đường và \(\vec n\) vuông góc; nhấn \(\vec n\cdot\vec u=0\). Nếu chuyển hình vốn đã có, phải kiểm cùng ý nghĩa trước khi dùng.

## B19 — TRY06 · Vận dụng liên bài, không ép học trước B20

**Quyết định cần AUTHORING xác nhận:** TRY06 đang xuất hiện trong B19, nhưng yêu cầu giải hệ giao điểm và kiểm hai đường vuông góc chính thức được học B20. Giữ nguyên mã câu, không xóa đáp án; chuyển placement thành “Vận dụng liên bài B19–B20” **sau khi B20 đã dạy**. Trong B19 có thể giữ một liên kết học tiếp thay vì biến câu này thành điều kiện hoàn thành B19.

**Lời dẫn dự kiến (khi học xong B20):**

> Hai phương trình của hai đường thẳng giống như hai điều kiện phải cùng đúng tại điểm giao. Vì vậy, muốn biết chúng gặp nhau ở đâu, ta giải hệ hai phương trình rồi thử kết quả vào cả hai. Còn câu hỏi chúng có vuông góc không lại nói về **hướng**, chứ không phải vị trí giao. Ta chọn một pháp tuyến khác vectơ không cho mỗi đường, tính tích vô hướng: bằng 0 thì hai đường vuông góc. Một câu hỏi tìm **địa điểm gặp**, câu hỏi kia kiểm **góc gặp**; làm riêng từng bước sẽ tránh nhầm.

**Ví dụ mới có giàn giáo (không dùng số của TRY06):** Xét \(d_1:x+y=3\), \(d_2:x-y=1\). Cộng hai phương trình ta được \(2x=4\), nên \(x=2,\ y=1\); kiểm lại: \(2+1=3\), \(2-1=1\). Hai pháp tuyến \(\vec n_1=(1,1)\) và \(\vec n_2=(1,-1)\) khác vectơ không, tích vô hướng \(1-1=0\), nên hai đường gặp nhau vuông góc tại \((2,1)\). Học sinh phải biết giải hệ từ B20 rồi mới tự giải TRY06. **Vai trò đề xuất:** Guided Extension sau B20, không dùng làm điều kiện hoàn tất B19.

**Tự kiểm phương pháp:** sau khi giải hệ, thế nghiệm vào cả hai đường; sau khi kết luận góc, kiểm các pháp tuyến không bằng \(\vec 0\). Không đưa sẵn số của TRY06 vào đoạn.

## B20 — TRY08 · Khám phá vị trí tương đối bằng nghiệm hệ (SGK HĐ1, trang 36)

**Lời giảng dự kiến:**

> Khi nhìn hai đường thẳng trên giấy, em có thể đoán chúng cắt nhau hay song song. Nhưng nếu hai nét vẽ gần sát nhau thì mắt thường không đủ chắc chắn. Hãy đổi câu hỏi “hai đường ở vị trí nào?” thành câu hỏi “có điểm nào **cùng thuộc cả hai** không?”. Với \(d_1:x+y=2\) và \(d_2:x-y=0\), một điểm chung phải thỏa cả hai điều kiện. Cộng hai phương trình được \(2x=2\), nên \(x=1,\ y=1\): hai đường **cắt tại \((1,1)\)**.
>
> Nếu thay đường thứ hai bằng \(x+y=4\), sẽ không có cặp tọa độ nào cùng làm tổng \(x+y\) vừa bằng 2 vừa bằng 4: hai đường **song song phân biệt**. Còn \(2x+2y=4\) thực ra mô tả đúng cùng một tập điểm với \(x+y=2\): hai đường **trùng nhau**. Vậy số nghiệm chung giúp phân biệt ba tình huống trước khi ta học cách kiểm nhanh bằng vectơ pháp tuyến. Khi dùng hệ số để kiểm, cần xét đủ cả hệ số tự do và tránh chia cho hệ số có thể bằng 0.

**SVG R02 đã sửa:** ba ô tương ứng trực tiếp **hệ 1 nghiệm ⇔ cắt; hệ vô nghiệm ⇔ song song; hệ vô số nghiệm ⇔ trùng**. Có cả phiên bản dọc điện thoại. Hình chỉ mô tả quan hệ giữa tập điểm và số nghiệm, không thay phép giải hệ ở đoạn giảng.

## B20 — TRY11 · Vì sao khoảng cách có căn ở mẫu (SGK HĐ4, trang 39–40)

**Lời giảng dự kiến:**

> Từ một điểm \(M_0\) đến đường thẳng \(d\), có thể vẽ rất nhiều đoạn nối. Đoạn ngắn nhất luôn là đoạn \(M_0H\) **vuông góc** với đường, trong đó \(H\) là chân đường vuông góc. Nếu \(d:ax+by+c=0\), vectơ pháp tuyến \(\vec n=(a,b)\ne\vec 0\) chỉ đúng hướng của đoạn \(HM_0\).
>
> Vì \(H\) thuộc đường nên \(ax_H+by_H+c=0\). Lấy tích vô hướng \(\vec n\cdot\overrightarrow{HM_0}\), ta được \(a(x_0-x_H)+b(y_0-y_H)=ax_0+by_0+c\). Do \(\overrightarrow{HM_0}\) song song với pháp tuyến, độ lớn tích vô hướng cũng bằng \(\|\vec n\|\cdot M_0H\). Bởi thế
>
> \[
> d(M_0,d)=M_0H=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}.
> \]
>
> Dấu giá trị tuyệt đối làm khoảng cách không âm; căn ở mẫu chia cho **độ dài pháp tuyến**, nên kết quả là độ dài thật, không phụ thuộc việc ta nhân cả phương trình đường thẳng với cùng một số khác 0. Ví dụ, với \(d:3x+4y-5=0\) và \(O(0,0)\), khoảng cách là \(5/\sqrt{3^2+4^2}=1\). Chân vuông góc \(H=(3/5,4/5)\) nằm trên đường và đúng cách \(O\) một đơn vị.

**SVG R02 đã sửa:** có chân H, dấu góc vuông \(M_0H\perp\Delta\), đoạn xiên dài hơn, mũi tên pháp tuyến \(\vec n=(3,4)\) cùng phương với \(\overrightarrow{HM_0}\). Đối chiếu công thức \(d(M_0,\Delta)=M_0H=1\) theo dữ kiện mới; không gọi công thức trước khi học sinh nhìn ra đoạn vuông góc.

## B21 — TRY13 · Đường tròn khác vùng phủ sóng (SGK trang 43)

**Lời giảng thay câu mở đầu dễ hiểu sai:**

> Một trạm phát tín hiệu ở \(I\) có tầm xa lý tưởng \(R\). Nếu chỉ xét khoảng cách, **toàn bộ vùng phủ** gồm những vị trí \(M\) với \(IM\le R\): ở gần trạm vẫn nhận được tín hiệu. Nhưng **ranh giới ngoài** của vùng đó mới là đường tròn, gồm những vị trí cách trạm **đúng** \(R\), tức \(IM=R\).
>
> Gọi \(I(a,b)\) và \(M(x,y)\). Từ công thức khoảng cách hai điểm, \(IM^2=(x-a)^2+(y-b)^2\). Trên đường biên, \(IM=R>0\), nên
> \[
> (x-a)^2+(y-b)^2=R^2.
> \]
> Nếu \(IM<R\), điểm nằm **bên trong**, không nằm trên đường tròn; nếu \(IM>R\), điểm nằm **ngoài**. Nhờ vậy em biết rõ phương trình đang mô tả **đường biên**, không phải toàn bộ hình tròn. Đừng nhầm bán kính \(R\) với bình phương \(R^2\).

**SVG R02 đã sửa:** nhãn riêng **HÌNH TRÒN / vùng phủ: \(IM\le R\)** (phần tô nhạt), **ĐƯỜNG TRÒN / biên: \(IM=R\)** (viền đậm); một điểm trong, trên biên và ngoài. Không diễn đạt toàn vùng phủ như một đường tròn.

## B21 — TRY14 · Hoàn thành bình phương để thấy tâm và bán kính

**Lời giảng dự kiến:**

> Có những phương trình nhìn ban đầu chẳng thấy tâm hay bán kính. Hãy nhớ \((x-a)^2=x^2-2ax+a^2\): ta có thể biến các hạng tử bậc hai và bậc nhất thành **bình phương khoảng cách tới một điểm**. Ví dụ, \(x^2+y^2-4x+2y+1=0\) viết lại thành
> \[
> (x^2-4x+4)+(y^2+2y+1)=4,
> \quad (x-2)^2+(y+1)^2=4.
> \]
> Bây giờ mới nhìn ra tâm \(I(2,-1)\) và bán kính \(R=2\).
>
> Tổng hai bình phương không thể âm. Vì vậy với dạng \(x^2+y^2-2ax-2by+c=0\), sau khi chuyển thành \((x-a)^2+(y-b)^2=a^2+b^2-c\), ta có một đường tròn thật sự chỉ khi **\(a^2+b^2-c>0\)**. Bằng 0 chỉ còn một điểm; âm thì không có điểm thực nào thỏa mãn. Đây là điều kiện hình học, không phải mẹo nhớ ba dấu.

## B21 — TRY15 · Phương trình tiếp tuyến từ bán kính vuông góc (SGK trang 46)

**Lời giảng dự kiến:**

> Một tiếp tuyến chạm đường tròn tại điểm \(M\). Ngay tại điểm chạm, bán kính \(IM\) vuông góc với tiếp tuyến. Vì thế nếu biết \(I\) và \(M\), ta đã biết **một pháp tuyến của tiếp tuyến**: chính là \(\overrightarrow{IM}\). Nhưng trước hết phải kiểm \(M\) thực sự nằm trên đường tròn.
>
> Chẳng hạn, đường tròn tâm \(I(2,1)\), bán kính \(\sqrt5\), có điểm \(M(3,3)\) vì \(IM^2=1^2+2^2=5\). Vectơ \(\overrightarrow{IM}=(1,2)\) là pháp tuyến của tiếp tuyến tại \(M\), nên phương trình qua \(M\) là \((x-3)+2(y-3)=0\), tức \(x+2y-9=0\). Như vậy, ta chọn cách viết phương trình **qua điểm và pháp tuyến** vì biết rõ điểm chạm và hướng vuông góc, không phải vì học thuộc một công thức tiếp tuyến riêng.

**SVG R02 đã sửa:** đường tròn tâm \(I(a,b)\), tiếp điểm \(M_0(x_0,y_0)\), tiếp tuyến \(\Delta\) có dấu góc vuông tại \(M_0\), nhãn \(\overrightarrow{n}_{\Delta}=\overrightarrow{IM_0}=(x_0-a,y_0-b)\). Không dùng ký hiệu điểm H chưa định nghĩa.

## B21 — TRY17 · Liên hệ hai bài, không làm điều kiện Core B21

**Lời giảng dự kiến cho phần Vận dụng liên bài B20–B21:**

> Từ Bài 20, ta đã biết cách đo khoảng cách \(h=d(I,d)\) từ tâm \(I\) đến một đường thẳng \(d\). Từ Bài 21, ta biết mỗi điểm trên đường tròn cách \(I\) đúng bán kính \(R\). Hãy so sánh hai độ dài ấy: nếu \(h>R\), đường thẳng ở ngoài và không gặp đường tròn; nếu \(h=R\), có đúng một điểm chạm; nếu \(h<R\), có hai giao điểm.
>
> Em không cần giải hệ ngay để biết **số** giao điểm; nhưng muốn biết **tọa độ**, em vẫn phải giải hai phương trình. Đây là một vận dụng liên bài, không thay kiến thức bắt buộc về phương trình đường tròn và tiếp tuyến.

**SVG gốc:** cùng một đường tròn và ba vị trí đường thẳng \(h>R,h=R,h<R\) có đoạn vuông góc từ tâm, để học sinh tự đoán số giao điểm.

## B22 — TRY18 · Trước phương trình elip là hoạt động dây và hai đinh (SGK trang 48)

**Lời giảng dự kiến:**

> Hãy cố định hai chiếc đinh tại \(F_1,F_2\), buộc hai đầu của một sợi dây lần lượt vào hai đinh, rồi dùng đầu bút kéo dây căng và di chuyển trên mặt giấy. Khi bút ở \(M\), hai đoạn từ bút đến đinh luôn có tổng độ dài bằng nhau: \(MF_1+MF_2=2a\). Vì thế đường bút vẽ ra là tập hợp các điểm có **tổng khoảng cách đến hai tiêu điểm không đổi**: một elip.
>
> Nếu hai đinh cách nhau \(2c>0\), muốn vẽ được **một elip không suy biến** thì độ dài dây cần thỏa \(2a>2c\): bút phải có chỗ di chuyển ngoài đoạn nối hai đinh. Ví dụ, hai tiêu điểm ở \((-5,0)\), \((5,0)\) và tổng dây \(26\) đơn vị, ta có \(a=13,\ c=5\), rồi \(b^2=a^2-c^2=144\), suy ra \(b=12\). Phương trình elip trục lớn Ox là
> \[
> \frac{x^2}{169}+\frac{y^2}{144}=1.
> \]
> Hãy nhìn vị trí hai tiêu điểm trong hình trước khi đọc hệ số. Nếu hai đinh trùng nhau hoặc chiều dài dây không lớn hơn khoảng cách giữa chúng, mô hình elip không suy biến cần được xét lại.

**SVG R02 đã sửa:** hiển thị rõ \(MF_1+MF_2=2a\), \(F_1F_2=2c\), điều kiện **\(2a>2c>0\)**. Các đại lượng cơ bản trong Core là \(a,b,c\), độ dài trục lớn \(2a\), trục nhỏ \(2b\), tiêu cự \(2c\) và tọa độ tiêu điểm. **Phần tâm sai:** câu TRY18 hiện chỉ hỏi a,b,c và hai tiêu điểm — giữ nguyên Core; bỏ \(e=c/a\) khỏi lời giảng bắt buộc. Chỉ có thể chuyển thành **Đọc thêm không đánh giá** nếu AUTHORING thấy giá trị.

## B22 — TRY19 và TRY20 · Hypebol hình thành từ hiệu khoảng cách; tiệm cận chỉ là mở rộng

**Lời giảng dự kiến cho phần Core TRY19:**

> Nếu elip giữ **tổng** hai khoảng cách không đổi, hãy thử giữ **độ lớn của hiệu** không đổi: \(|MF_1-MF_2|=2a\), với hai tiêu điểm \(F_1,F_2\) cách nhau \(2c\) và \(0<a<c\). Tập điểm thu được chia thành **hai nhánh**: ở nhánh gần \(F_1\), khoảng cách đến \(F_1\) nhỏ hơn; ở nhánh gần \(F_2\), điều ngược lại xảy ra. Vì \(c>a\), quan hệ các thông số là \(b^2=c^2-a^2\), hay \(c^2=a^2+b^2\). Hình thành hai nhánh từ hiệu khoảng cách giúp em không nhầm với đường elip kín.

**Lời dẫn riêng cho Mở rộng có hướng dẫn TRY20 (không mặc định Core S1):**

> Vẽ một hình chữ nhật tâm \(O\) có các đỉnh \((\pm a,\pm b)\). Hai đường chéo đi qua tâm của nó có phương trình \(y=\pm(b/a)x\). Với hypebol \(\frac{x^2}{a^2}-\frac{y^2}{b^2}=1\), khi \(|x|\) ngày càng lớn, hai nhánh tiến ngày càng gần hai hướng đường chéo ấy. Đó là lý do ta gọi chúng là **tiệm cận**. Ví dụ, nếu \(a=3,\ b=2\), hai đường chéo có hệ số góc \(\pm2/3\). Không thể suy tiệm cận chỉ bằng cách đổi dấu một phương trình elip; trước hết cần xác định đúng trục thực và hình chữ nhật cơ sở.

**SVG R02 đã sửa:** vẽ hình chữ nhật cơ sở có cạnh ngang **\(2a\)**, cạnh đứng **\(2b\)**, hai đường chéo là tiệm cận \(y=\pm\frac ba x\), phân biệt nét hypebol với đường tiệm cận. **Điều kiện:** giữ nguyên ID TRY20, nhưng AUTHORING duyệt chuyển **role** sang Guided Extension. Không dùng kết quả này để suy ra Mastery kiến thức bắt buộc SGK B22.

## B22 — TRY21 · Tự suy phương trình parabol từ tiêu điểm và đường chuẩn (SGK trang 52–53)

**Lời giảng dự kiến:**

> Một parabol gồm các điểm \(M\) có khoảng cách đến **tiêu điểm** \(F\) bằng khoảng cách vuông góc đến **đường chuẩn** \(\Delta\). Chọn đỉnh ở \(O(0,0)\), tiêu điểm \(F(p/2,0)\) và đường chuẩn \(x=-p/2\), với \(p>0\). Nếu \(M(x,y)\), ta có \(MF^2=(x-p/2)^2+y^2\), còn bình phương khoảng cách từ M đến đường chuẩn là \((x+p/2)^2\).
>
> Hai khoảng cách bằng nhau nên
> \[
> (x-p/2)^2+y^2=(x+p/2)^2
> \quad\Longrightarrow\quad y^2=2px.
> \]
> Vậy công thức không xuất hiện từ một phép đoán: nó là cách viết điều kiện **hai khoảng cách bằng nhau**. Với phương trình \(y^2=2px\), tiêu điểm ở \(p/2\), không phải \(p\). Khi đổi hướng mở sang Oy thì cần đặt lại trục và dùng dạng phương trình phù hợp.

**SVG R02 đã sửa:** vẽ \(M\), tiêu điểm \(F(p/2,0)\), chân chiếu **\(N\) trên đường chuẩn \(\Delta\)**, dấu vuông tại N và nhãn **\(MF=d(M,\Delta)=MN\)**; đỉnh O và phương trình \(y^2=2px\). Ghi chú có điều kiện: trong **mô hình chảo phản xạ** có dạng parabol và nguồn tia phù hợp, **bộ thu/phát đặt tại tiêu điểm F**; không được tự suy tính chất phản xạ từ phương trình quỹ tích nếu chưa giải thích bổ sung.

## B22 — TRY23 · Độ rộng parabol là khoảng cách giữa hai nhánh

**Lời giảng dự kiến:**

> Nếu mặt cắt của một máng có dạng \(y^2=12x\) (đơn vị cm), thì tại vị trí \(x=3\) ta có \(y^2=36\), nghĩa là **hai** điểm trên mặt cắt có tung độ \(y=6\) và \(y=-6\). Độ rộng giữa hai mép máng là \(6-(-6)=12\) cm, không phải 6 cm. Trên hình, đó là một đoạn thẳng vuông góc trục Ox nối cả hai nhánh. Khi dùng mô hình trong đời thực, phải kiểm đơn vị, vị trí đặt trục và việc mặt cắt có thực sự phù hợp với một parabol hay không.

## B22 — TRY-HYPERBOLA-TR01 · Hiểu điều kiện hiệu khoảng cách trước khi tính

**Lời dẫn cần làm rõ:**

> Nếu hai trạm phát cách nhau \(AB=2c\), tín hiệu truyền với tốc độ \(v\) và tới máy thu lệch nhau một khoảng thời gian \(\Delta t\), thì độ chênh độ dài quãng đường là \(v|\Delta t|=|PA-PB|=2a\). Bất đẳng thức tam giác cho biết \(|PA-PB|\le AB\): chênh lệch hai quãng đường **không thể lớn hơn** khoảng cách giữa hai trạm. Để được một **hypebol không suy biến**, cần điều kiện chặt \(0<2a<2c\). Nếu \(2a>2c\) thì dữ kiện không thể xảy ra; nếu \(2a=2c\), quỹ tích suy biến thành các tia thẳng hàng chứ không phải hai nhánh hypebol; nếu \(2a=0\), các vị trí cách đều hai trạm nằm trên đường trung trực.
>
> Từ \(|PA-PB|\) ta mới biết **hai nhánh khả dĩ**. Chỉ khi biết tín hiệu nào tới sớm hơn mới chọn được một nhánh; một cặp trạm không xác định duy nhất vị trí người nhận. Khi tính, cần nhất quán đơn vị chiều dài, vận tốc và thời gian.

## R02 — trạng thái sau 9 yêu cầu NotebookLM

Tất cả **9 hướng sửa cụ thể** đã được thể hiện trong lời giảng và/hoặc SVG:
- B19: `TRY01/02` thêm tích vô hướng và suy phương trình; `TRY06` Guided Extension cùng ví dụ giải hệ có giàn giáo.
- B20: `TRY08` 1/vô/vô số nghiệm ↔ cắt/song song/trùng; `TRY11` H và phép chiếu vuông góc từ đầu.
- B21: `TRY13` đĩa–biên không nhầm, `TRY14` hoàn thành bình phương + điều kiện bán kính dương, `TRY15` tiếp tuyến vuông góc bán kính và VTPT.
- B22: `TRY18` Core không yêu cầu tâm sai, hình ghi `2a>2c>0`; `TRY20` Guided Extension với hình chữ nhật cơ sở; `TRY21` hình chiếu N, hai khoảng cách bằng nhau, lưu ý mô hình thu/phát sóng.

**Phần vẫn phải phản biện học thuật:** tính chính xác từng hình, cách nối lời giảng với hình, giá trị của ví dụ đối với người mới học, và phân vai canonical item không ảnh hưởng đánh giá chính thức. Không suy ra PASS từ việc đủ 9 điểm sửa; chỉ duyệt khi nội dung thật sự hỗ trợ tự học.

## Việc AUTHORING cần hoàn tất, không phải review hành chính

1. Kiểm **lời giảng có thật sự dạy tốt hơn** từng outcome dựa vào SGK/SBT: học sinh hiểu được vì sao, hình nào đúng chỗ, ví dụ có đủ giàn giáo, câu Vận dụng còn độc lập không. Sửa trực tiếp các đoạn trên nếu cần, không biến PED thành checklist hiển thị.
2. Duyệt placement/role của **TRY06, TRY17, TRY20**, giữ **TRY18 Core**; quyết định bỏ/đưa riêng tâm sai \((e=c/a)\) ở phần không bắt buộc. Không nhân bản canonical item.
3. Dựng SVG toán học **nguyên bản** tương ứng, với nhãn, điều kiện, chú thích học sinh tự đọc được; không tải hình SGK lên website. Kiểm các trường hợp suy biến, dấu của nhánh, đơn vị trước khi chốt lời giải.
4. Trả kết luận Academic/PED cho **phần Delta C đã sửa**; nếu còn lỗi, nêu đúng đoạn/bài/outcome và sửa tới khi đủ khả năng tự học. RELEASE nhận source đã duyệt rồi kiểm MathJax, Golden, responsive, Q15/Q16, chính sách Final Submit; không dùng CI làm Academic PASS.

**Status:** PROPOSED_PEDAGOGICAL_DELTA / SOURCE_S1_GROUNDED / ACADEMIC_PED_REVIEW_REQUIRED / ORIGINAL_CANONICAL_UNCHANGED / NO_RELEASE.

## Prompt NotebookLM — đánh giá lại phần đã sửa R02 (4 câu)

Hãy đọc các đoạn lời giảng và ý tưởng hình minh họa đề xuất trong file này, đối chiếu với SGK/SBT Toán 10 KNTT Chương VII và đúng 5 Permanent Sources THPT v2.1, rồi đánh giá **học sinh lần đầu học có tự hiểu bản chất và tự giải được một bài tương tự không**. Với từng đoạn B19–B22, chỉ ra lỗi toán, điều kiện còn thiếu, cách dẫn chưa tự nhiên, ví dụ/hình chưa giúp hiểu hoặc phần vượt phạm vi kiến thức SGK bắt buộc; giữ nguyên mã câu canonical đang có. Đề nghị chỉnh trực tiếp câu văn hoặc bước suy luận cần sửa để đạt Academic/PED PASS cho **phần chịu ảnh hưởng**, không chỉ trả nhận xét “cần bổ sung”. Không yêu cầu kiểm SHA, dung lượng file, quản trị GitHub hay lặp lại một đợt review toàn chương chỉ vì metadata; nếu học liệu đã đủ tốt, kết luận PASS theo chuẩn đang có.
