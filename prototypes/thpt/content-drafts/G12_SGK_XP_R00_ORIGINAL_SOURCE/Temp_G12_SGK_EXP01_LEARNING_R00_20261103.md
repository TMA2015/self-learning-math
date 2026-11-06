# SGK Toán 12 KNTT Tập Hai — Học liệu HOẠT ĐỘNG THỰC HÀNH TRẢI NGHIỆM (bản tự biên soạn R00)
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.1.0
LEARNING_PATH: SGK_EXPERIENCE_EXTENSION_OF_COMPLETE_SGK_PATH
CONTENT_READY: NO
ACADEMIC_VERDICT: NOT_REVIEWED
PEDAGOGICAL_VERDICT: NOT_REVIEWED
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
ITEM_POLICY: ONE_CANONICAL_ITEM_ID_ONE_QUESTION
LESSON_ID: G12-SGK-EXP01
SOURCE_ROLE: ORIGINAL_AUTHORED
EXPERIENCE_LEARNING_ROLE: SGK_EXPERIENCE_CORE_PRACTICE_NOT_NEW_SGK_MANDATORY_CORE
RD1_PRIVATE: NOT_DEFINED_FOR_EXPERIENCE; SGK_CHAPTER_READINESS_REMAINS_SEPARATE

**Nguồn thẩm quyền S1:** SGK Toán 12 KNTT Tập Hai SHA256 `3c642f2e80d86d699ea62bbcabd0c3074fd5118def96e4b3b8ce1f9ead7f97bb`, HOẠT ĐỘNG THỰC HÀNH TRẢI NGHIỆM trang in **81–89** (PDF 1-based **83–91**). Cụ thể thực hành nguyên hàm/tích phân GeoGebra và phương pháp hình thang trang **81–84**; vẽ đồ họa 3D GeoGebra với tam giác Penrose/mặt Möbius trang **85–89**. Nội dung/bài tập dưới đây là sáng tạo của AUTHORING, không chép SGK và không khẳng định đã thực hiện GeoGebra trên thiết bị thật.

**Phạm vi:** đây là **hai trải nghiệm SGK**, KHÔNG phải Bài 20/21 mới, không phải Chương VII, không tạo Topic hoặc Core SGK mới ngoài phạm vi chương trình. Bài thực hành yêu cầu thao tác công cụ *hoặc* tính toán/diễn giải thay thế cho học sinh chưa truy cập được GeoGebra; hai hình thức đều có thể học độc lập. Câu luyện tập có lời giải chỉ được lộ sau thao tác đối chiếu phù hợp, không cung cấp đánh giá Mastery.

# Thực hành 1: CAS GeoGebra và xấp xỉ tích phân bằng hình thang

## Vì sao cần học? — PED1
Khi một tích phân không có nguyên hàm sơ cấp hoặc dữ liệu chỉ có tại vài thời điểm, ta vẫn cần lượng tích lũy và **sai số đáng tin cậy**. GeoGebra là công cụ tính/toạ độ hỗ trợ suy luận; không thay thế việc hiểu miền xác định, kiểm tra đạo hàm hay chứng nhận sai số. Phương pháp hình thang nối dữ liệu quan sát với mô hình toán.

## Tiền đề — PED2
Đạo hàm, nguyên hàm, định lí Newton–Leibniz, đồ thị diện tích, biểu thức tổng, dữ liệu bảng, đơn vị. Nên ôn lại quan hệ `F′=f`, quy tắc cận và đơn vị tích phân trước bài thực hành.

## Bản chất trước công thức — PED3
**Nguyên hàm:** CAS dự đoán một F; kiểm tra `F′=f` giúp biết đúng, +C khôi phục mọi nguyên hàm trên miền thích hợp. **Tích phân:** tổng ảnh hưởng (có dấu) trên đoạn; phần mềm cho số, cần hiểu cận và điều kiện. **Hình thang:** thay mỗi cung bằng đoạn thẳng giữa hai nút và cộng diện tích có dấu; nếu đường cong cong nhiều, sai số phụ thuộc độ cong f′′, không phụ thuộc số chữ số hiển thị.

## Đọc hình — PED4
- CAS flow: đọc từ **INPUT → CAS CANDIDATE → VERIFY → FULL FAMILY**; kết quả phần mềm là bước giữa, không phải bằng chứng cuối.
- TRAPEZOID: đường cong x² và bốn hình thang trên [0,2]; đường gạch cho thấy cạnh trên tuyến tính; so giá trị T₄ và tích phân chính xác.
- ERROR_BOUND: trục dọc logarit mô tả **cận trên đã chứng minh**, không phải sai số thật; đường n=13 là lựa chọn nhỏ nhất để bảo đảm dưới 0,001 cho đúng ví dụ f=x².

## Quy trình công cụ / đường thay thế không cần cài đặt — PED5
1. Trong GeoGebra, mở **CAS**. Thử lệnh nguyên hàm biểu tượng theo ví dụ SGK `IntegralSymbolic(f)`; nếu phiên bản/locale khác, tìm cú pháp tương ứng trong trợ giúp phiên bản đang dùng. Giữ lại biểu thức gốc và kiểm lại bằng đạo hàm.
2. Để tính tích phân có cận, dùng `Integral(f,a,b)` trong CAS, nhập chính xác `a,b`; kiểm bằng nguyên hàm Newton–Leibniz khi áp dụng được. Nếu không có phần mềm, thực hiện tay hoàn toàn tương đương.
3. Khi cần xấp xỉ một hàm liên tục, lập bảng `x_i=a+i(b−a)/n`, `f(x_i)` và dùng hình thang. Khi muốn **bảo đảm** sai số, phải có cận hợp lệ `|f′′|≤M` trên toàn đoạn.
4. Báo cáo: ghi miền, đơn vị, số bước n, phép kiểm, kết quả gần đúng và **không tuyên bố sai số bảo đảm** nếu thiếu điều kiện.

## Tự thử TRƯỚC Core (tự chọn mở đối chiếu; không ghi Mastery)
- `G12-SGK-EXP01-T01`: Nếu CAS trả F(x)=x² cho f(x)=2x, toàn bộ họ nguyên hàm là gì? **Tự thử trước**; tự mở kiểm: `x²+C` vì đạo hàm của hằng số bằng 0.
- `G12-SGK-EXP01-T02`: Vì sao `f(x)=x²` trên [0,1] có thể được xấp xỉ bằng 4 hình thang, nhưng từ một số hiển thị `0,333` chưa chắc biết sai số? **Tự mở:** cần kiểm chứng f′′ và n hoặc phương án bound khác; số chữ số không bảo đảm độ chính xác.

## Hình minh họa nguồn gốc tự vẽ
- `Temp_FIG_G12_XP01_CAS_VERIFICATION_R00.png` — cách đọc kết quả CAS.
- `Temp_FIG_G12_XP01_TRAPEZOID_R00.png` — diện tích hình thang có dấu.
- `Temp_FIG_G12_XP01_ERROR_BOUND_R00.png` — cận sai số.

## Ma trận kiến thức → ví dụ D2 → Core/Practice/Application/Written → D6

### G12-SGK-EXP01-O01 — Nguyên hàm qua CAS và chứng nhận đạo hàm
**Vì sao:** Học sinh hiểu phần mềm gợi ý một họ nguyên hàm, không tự thay thế kiểm chứng toán học.

**Tiền đề:** Biết đạo hàm của đa thức và hàm lượng giác; kí hiệu hằng số C.

**Bản chất:** Một hàm có nhiều nguyên hàm khác hằng số; câu trả lời có +C; đạo hàm lại phải bằng hàm dưới dấu tích phân.

**Lý do chọn phương pháp:** Dùng lệnh IntegralSymbolic theo hướng dẫn SGK; nếu giao diện khác, dùng CAS Integral(f) hoặc tích phân thủ công rồi đối chiếu.

**Điều kiện/giới hạn:** Kiểm miền xác định trước khi nói họ nguyên hàm; không coi chỉ một nguyên hàm là tất cả.

**Ví dụ giải mẫu `EX-G12-EXP01-O01` (D2).** Tìm nguyên hàm của 3x²−4x+5, rồi kiểm bằng đạo hàm.

**Lời giải có suy luận:** F(x)=x³−2x²+5x+C; F′(x)=3x²−4x+5.

**Bài tập Core (trong hoạt động trải nghiệm, không là Core chương mới) `THPT-G12-EXP01-C01`** — Đạo hàm của x³−2x²+5x+7 bằng gì?

*Đáp án tự mở:* 3x²−4x+5, bất kể C=7.

**Practice `THPT-G12-EXP01-P01`** — CAS cho F=x³−2x²+5x. Vì sao phải bổ sung +C?

*Đáp án tự mở:* Bởi F+k vẫn có cùng đạo hàm, k∈ℝ.

**Application `THPT-G12-EXP01-A01`** — Tìm họ nguyên hàm của 2cos(2x)+6x trên ℝ.

*Đáp án tự mở:* sin(2x)+3x²+C; kiểm đạo hàm 2cos(2x)+6x.

**Written `THPT-G12-EXP01-W01`** — Giả sử phần mềm trả F=sin(2x)+3x². Viết lời giải đầy đủ và hai cách kiểm chứng.

*Lời giải chuẩn tự đối chiếu:* sin(2x)+3x²+C

**Rubric /5:** 2đ nguyên hàm sin(2x); 1đ nguyên hàm 6x; 1đ +C và miền; 1đ kiểm tra đạo hàm.

**D6 HELP `HELP-G12-EXP01-O01` — năm bước khắc phục đúng năng lực (chỉ hiện khi học sinh chủ động mở):** (1) Hãy xét phép đạo hàm, không xem CAS là bằng chứng cuối cùng. (2) Từ F′=f, đạo hàm của hằng số C bằng 0. (3) Kiểm nhanh: d(x³−2x²+5x+C)/dx=3x²−4x+5. (4) Nếu quên +C, bạn mới nêu một nguyên hàm, chưa nêu cả họ. (5) Quay lại câu sai, ghi đủ +C và miền xác định. Không ghi Mastery.

### G12-SGK-EXP01-O02 — Tích phân xác định: miền, giới hạn và đối chiếu số
**Vì sao:** Biết phân biệt nguyên hàm tổng quát với diện tích tích lũy có giới hạn; đầu ra số không phải lời giải.

**Tiền đề:** Nắm định lí cơ bản tích phân cho hàm liên tục và kí hiệu cận.

**Bản chất:** Khi biết F′=f trên [a,b], ∫a^b f=F(b)−F(a); dấu kết quả có thể âm.

**Lý do chọn phương pháp:** Trong CAS nhập Integral(f,a,b), kiểm hàm liên tục trên đoạn; kiểm gần đúng bằng bảng giá trị.

**Điều kiện/giới hạn:** Một biểu thức có cực tại c trong (a,b) không thể áp dụng Newton–Leibniz như tích phân Riemann thông thường.

**Ví dụ giải mẫu `EX-G12-EXP01-O02` (D2).** Tính ∫₀²(x²+1)dx, kiểm bằng phép thế cận và kết quả thập phân.

**Lời giải có suy luận:** [x³/3+x]₀²=8/3+2=14/3≈4,6667.

**Bài tập Core (trong hoạt động trải nghiệm, không là Core chương mới) `THPT-G12-EXP01-C02`** — Tính ∫₀¹ 2x dx.

*Đáp án tự mở:* 1; nguyên hàm x².

**Practice `THPT-G12-EXP01-P02`** — Vì sao ∫₁⁰ 2x dx =−1 thay vì 1?

*Đáp án tự mở:* Đổi thứ tự cận đổi dấu của tích phân có hướng.

**Application `THPT-G12-EXP01-A02`** — Tính ∫₋₁¹ x³ dx và giải thích nhanh nhờ đối xứng.

*Đáp án tự mở:* 0 vì x³ là hàm lẻ trên đoạn đối xứng.

**Written `THPT-G12-EXP01-W02`** — Một công cụ hiển thị ∫₀²(x²+1)dx≈4,67. Hãy nêu chính xác phân số, kiểm và giải thích khác biệt.

*Lời giải chuẩn tự đối chiếu:* 14/3

**Rubric /5:** 2đ tìm F=x³/3+x; 1đ thế hai cận; 1đ phân số 14/3; 1đ giải thích 4,67 chỉ là làm tròn.

**D6 HELP `HELP-G12-EXP01-O02` — năm bước khắc phục đúng năng lực (chỉ hiện khi học sinh chủ động mở):** (1) Với ∫ₐᵇ f, hãy xác định cận a,b và xét tính liên tục trên đoạn. (2) Tìm F với F′=f, rồi tính F(b)−F(a). (3) Ví dụ nhỏ: ∫₀¹2x dx=[x²]₀¹=1. (4) Kiểm lại nếu đổi cận: tích phân đổi dấu; không gọi số âm là diện tích dương. (5) Thế cận một lần nữa vào bài gốc, giải thích số gần đúng chỉ là làm tròn. Không ghi Mastery.

### G12-SGK-EXP01-O03 — Phương pháp hình thang từ tổng diện tích
**Vì sao:** Vì sao có thể thay đường cong bằng các đoạn thẳng và cộng diện tích hình thang?

**Tiền đề:** Hiểu đồ thị, diện tích hình thang và tổng Riemann; kiểm dấu f.

**Bản chất:** Tₙ=h[(f(a)+f(b))/2+Σf(xᵢ)], h=(b−a)/n; là tổng các hình thang nội suy.

**Lý do chọn phương pháp:** Chia đều [a,b], ghi bảng nút và giá trị, tính từng hình thang và tổng.

**Điều kiện/giới hạn:** Nếu f nhận giá trị âm, Tₙ là xấp xỉ tích phân có dấu, không phải diện tích không âm; đồ thị tự nó không bảo đảm sai số.

**Ví dụ giải mẫu `EX-G12-EXP01-O03` (D2).** Xấp xỉ ∫₀² x²dx với n=4 và so với giá trị đúng.

**Lời giải có suy luận:** h=1/2; f(xᵢ)=0,1/4,1,9/4,4; T₄=(1/2)(0+1/4+1+9/4+2)=11/4; giá trị đúng 8/3, lệch +1/12.

**Bài tập Core (trong hoạt động trải nghiệm, không là Core chương mới) `THPT-G12-EXP01-C03`** — Tính T₂ của ∫₀² x dx.

*Đáp án tự mở:* 2; h=1, f=0,1,2 ⇒ T₂=1(0+1+1).

**Practice `THPT-G12-EXP01-P03`** — Tại sao hệ số f(a),f(b) trong công thức chỉ là 1/2?

*Đáp án tự mở:* Hai đầu mỗi đầu tham gia đúng một hình thang, các nút giữa tham gia hai.

**Application `THPT-G12-EXP01-A03`** — Xấp xỉ ∫₀¹ x²dx bằng T₂.

*Đáp án tự mở:* h=1/2; f(0)=0,f(1/2)=1/4,f(1)=1; T₂=(1/2)(0+1/4+1/2)=3/8.

**Written `THPT-G12-EXP01-W03`** — Cho f(x)=x² trên [0,2], n=4. Hãy lập bảng nút, viết T₄ và tính sai lệch có dấu.

*Lời giải chuẩn tự đối chiếu:* T₄=11/4 và T₄−8/3=1/12.

**Rubric /5:** 1đ xác định h/nút; 1đ giá trị f đúng; 1đ đặt công thức trọng số; 1đ T₄=11/4; 1đ sai lệch +1/12.

**D6 HELP `HELP-G12-EXP01-O03` — năm bước khắc phục đúng năng lực (chỉ hiện khi học sinh chủ động mở):** (1) Hãy viết đúng chiều rộng mỗi đoạn h=(b−a)/n. (2) Ghi lần lượt f(x₀),…,f(xₙ); hai đầu có hệ số 1/2. (3) Với f=x trên [0,2], n=2, T=1[(0+2)/2+1]=2. (4) So với ví dụ f=x² trên [0,2], n=4: T=11/4, khác I=8/3. (5) Kiểm tổng, đơn vị, dấu và nút nội suy của câu vừa sai. Không ghi Mastery.

### G12-SGK-EXP01-O04 — Bảo đảm sai số hình thang bằng đạo hàm bậc hai
**Vì sao:** Cần phân biệt một số gần đúng hợp lí với một chứng nhận đủ nhỏ về sai số.

**Tiền đề:** Đã hiểu hình thang hợp thành và đạo hàm f′′ trên [a,b].

**Bản chất:** Nếu f′′ liên tục và |f′′|≤M thì |I−Tₙ|≤M(b−a)³/(12n²).

**Lý do chọn phương pháp:** Giải bất đẳng thức sai số nghiêm ngặt theo n và sau đó mới tính Tₙ.

**Điều kiện/giới hạn:** Cận M hợp lệ trên toàn đoạn; không sử dụng công thức nếu chưa biết/không chứng minh f′′ bị chặn.

**Ví dụ giải mẫu `EX-G12-EXP01-O04` (D2).** Với f=x² trên [0,1], cần sai số nhỏ hơn 0,001; chọn n và giải thích.

**Lời giải có suy luận:** f′′=2 nên M=2; 1/(6n²)<0,001 ⇒ n≥13; n=13 cho cận ≈0,0009862.

**Bài tập Core (trong hoạt động trải nghiệm, không là Core chương mới) `THPT-G12-EXP01-C04`** — Công thức bound với M=2, b−a=1, n=5 là bao nhiêu?

*Đáp án tự mở:* 1/(150)≈0,0066667.

**Practice `THPT-G12-EXP01-P04`** — Có thể kết luận sai số <0,01 chỉ bằng cách phần mềm hiển thị ba chữ số thập phân không?

*Đáp án tự mở:* Không; độ dài hiển thị không là chứng nhận sai số.

**Application `THPT-G12-EXP01-A04`** — Nếu M=2, [a,b]=[0,1], yêu cầu bound <0,01, chọn n nguyên nhỏ nhất.

*Đáp án tự mở:* n²>100/6 ⇒ n≥5.

**Written `THPT-G12-EXP01-W04`** — Trình bày quy trình chọn n cho ∫₀¹x²dx có sai số <0,001; giải thích vì sao n=12 chưa bảo đảm.

*Lời giải chuẩn tự đối chiếu:* n=13; n=12 cho bound 1/864≈0,001157>0,001.

**Rubric /5:** 1đ tính f′′ và M; 1đ lập bound 1/(6n²); 1đ giải bất đẳng thức; 1đ chọn 13 và kiểm 12; 1đ phân biệt bound với sai số thật.

**D6 HELP `HELP-G12-EXP01-O04` — năm bước khắc phục đúng năng lực (chỉ hiện khi học sinh chủ động mở):** (1) Cần chứng minh |f′′(x)|≤M trên toàn [a,b] trước khi dùng bound. (2) Ghi đúng bất đẳng thức M(b−a)³/(12n²)<ε. (3) Với f=x²,[0,1],M=2,ε=0,001: n²>1000/6. (4) Kiểm n=12 chưa đủ, n=13 thỏa; đây là cận trên, không phải sai số thật. (5) Chọn n đúng cho đề, rồi mới áp dụng tổng hình thang. Không ghi Mastery.

### G12-SGK-EXP01-O05 — Ứng dụng bảng dữ liệu và đơn vị tích lũy
**Vì sao:** Khi chỉ có số liệu tại các mốc, quy tắc hình thang đưa dữ liệu rời rạc thành lượng tích lũy xấp xỉ.

**Tiền đề:** Đọc bảng số liệu với đơn vị và biết chiều rộng mỗi khoảng.

**Bản chất:** Khi v tính m/s, ∫v dt có đơn vị mét; khi S(x) diện tích cm², ∫S(x)dx cho thể tích cm³.

**Lý do chọn phương pháp:** Với mẫu cách đều, T=h[(y₀+yₙ)/2+Σyᵢ]; nếu không đều, tính từng khoảng riêng.

**Điều kiện/giới hạn:** Không tuyên bố cận sai số giải tích từ bảng đơn thuần nếu chưa có thông tin về hàm f′′; kiểm đơn vị và độ tin cậy đo.

**Ví dụ giải mẫu `EX-G12-EXP01-O05` (D2).** Một xe có vận tốc đo tại t=0,2,4,6 s: 2,3,5,4 m/s. Tính gần đúng quãng đường.

**Lời giải có suy luận:** h=2s; T=2[(2+4)/2+3+5]=22m.

**Bài tập Core (trong hoạt động trải nghiệm, không là Core chương mới) `THPT-G12-EXP01-C05`** — Với t=0,1,2 và v=1,3,5 (m/s), T₂ là bao nhiêu?

*Đáp án tự mở:* 6m.

**Practice `THPT-G12-EXP01-P05`** — Lấy diện tích mặt cắt (cm²) tích phân theo chiều dài (cm) thu được đơn vị nào?

*Đáp án tự mở:* cm³.

**Application `THPT-G12-EXP01-A05`** — Dữ liệu x=0,1,3 cm; S=2,4,5 cm². Xấp xỉ thể tích.

*Đáp án tự mở:* (1)(2+4)/2+(2)(4+5)/2=3+9=12 cm³.

**Written `THPT-G12-EXP01-W05`** — Một bảng vận tốc tại 0,2,4,6 s lần lượt 2,3,5,4 m/s. Lập công thức hình thang, tính quãng đường, nêu hạn chế.

*Lời giải chuẩn tự đối chiếu:* 22 m; chỉ xấp xỉ từ mẫu, không tự bảo đảm sai số.

**Rubric /5:** 1đ nêu h=2s; 1đ công thức; 1đ giá trị 22; 1đ đơn vị m; 1đ nêu không có bound nếu chỉ có dữ liệu.

**D6 HELP `HELP-G12-EXP01-O05` — năm bước khắc phục đúng năng lực (chỉ hiện khi học sinh chủ động mở):** (1) Đọc trục thời gian/chiều dài và đơn vị của mỗi cột. (2) Nếu các mốc không cách đều, chia theo từng khoảng và dùng hᵢ riêng. (3) Với mốc 0,1,3 và diện tích 2,4,5: 1×(2+4)/2+2×(4+5)/2=12. (4) Đơn vị thể tích cm³, quãng đường m; từ bảng dữ liệu không tự suy được cận f′′. (5) Quay lại bảng gốc, tính từng hình thang và nêu một giới hạn đo lường. Không ghi Mastery.

## Kết thúc trải nghiệm — tự kiểm tra thao tác và giải thích
Trả lời lần lượt các câu Application theo thứ tự đã học. Đây là **secondary placement** của 5 ID `-A01` đến `-A05` đã tồn tại, không tạo `ITEM_ID` mới. Tự đánh giá chất lượng mô hình và lời giải; công khai chỉ `CLIENT_SELF_CHECK_NO_MASTERY`. Không gọi đây là đề RD1 kín hay `SGK_CHAPTER_READINESS`; không hiện lời giải/rubric trước thao tác tự mở/Final Submit theo hợp đồng RELEASE.
