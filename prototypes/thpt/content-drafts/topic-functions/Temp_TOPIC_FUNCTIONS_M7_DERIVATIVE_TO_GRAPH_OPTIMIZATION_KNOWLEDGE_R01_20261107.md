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
