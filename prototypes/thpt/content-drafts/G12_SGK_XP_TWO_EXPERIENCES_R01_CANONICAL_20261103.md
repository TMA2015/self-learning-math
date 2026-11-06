# SGK Toán 12 KNTT Tập Hai — Hai hoạt động thực hành trải nghiệm (canonical R01)
PACKET_ID: G12-SGK-EXP01-EXP02-R01
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.1.0
CONTENT_VERSION: R01
LEARNING_PATH: SGK_EXPERIENCE_EXTENSION_OF_COMPLETE_SGK_PATH
RELEASE_SCOPE: SGK_EXPERIENCE_SUPPLEMENT
ACADEMIC_VERDICT: R00_PLUS_R01_TARGETED_PASS_REPORTED
PEDAGOGICAL_VERDICT: R00_PLUS_R01_TARGETED_PASS_REPORTED
AUTHORING_GATE: SOURCE_CONTENT_QA_DONE_RECEIPT_SHA_CORRECTION_PENDING
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
PRIVATE_RD1: NO_PRIVATE_RD1_FOR_EXPERIENCE
CANONICAL_ITEM_SOURCE: THIS_FILE_ONLY
SOURCE_NOTE: EXP01 and EXP02 preserved from the exact reviewed R00; only the ten Written model solutions and EXP01-W01 prompt/rubric were updated from the independently PASS-reviewed targeted R01 packet. The R00 originals stay as immutable historical sources; the canonical current student source is this R01 file. No other ID, Core, Practice, Application, D1/D2/D3, D5/D6, placement or figure asset is changed.


---

<!-- Start EXP01: source after limited R01 approved Written delta -->

# SGK Toán 12 KNTT Tập Hai — Học liệu HOẠT ĐỘNG THỰC HÀNH TRẢI NGHIỆM (học liệu canonical R01 — D4 đã được reviewer chấp nhận)
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.1.0
LEARNING_PATH: SGK_EXPERIENCE_EXTENSION_OF_COMPLETE_SGK_PATH
CONTENT_READY: NO
ACADEMIC_VERDICT: R00_PASS_PLUS_R01_TARGETED_PASS_REPORTED_RECEIPT_SHA_HOLD
PEDAGOGICAL_VERDICT: R00_PASS_PLUS_R01_TARGETED_PASS_REPORTED_RECEIPT_SHA_HOLD
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
ITEM_POLICY: ONE_CANONICAL_ITEM_ID_ONE_QUESTION
CONTENT_VERSION: R01
APPLIED_REVIEW: G12-SGK-EXP01-EXP02-R01-TARGETED-Q06-Q18
DELTA_CLASS: DELTA_C_ACADEMIC_MATERIAL
BLOCKERS: Q18_REVIEW_RECEIPT_SHA_MISMATCH
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

**Written `THPT-G12-EXP01-W01`** — Cho $f(x)=2\cos(2x)+6x$ trên $\mathbb R$. CAS đề xuất $F(x)=\sin(2x)+3x^2$. Hãy tìm **họ nguyên hàm** của $f$ và kiểm bằng **hai cách:** (i) đạo hàm biểu thức nhận được; (ii) đối chiếu tích phân xác định trên $[0,\pi/2]$ tính bằng hai cách.

*Lời giải chuẩn tự đối chiếu:* Hàm cần lấy nguyên hàm là $f(x)=2\cos(2x)+6x$ trên $\mathbb R$. Vì $\int 2\cos(2x)\,dx=\sin(2x)$ và $\int 6x\,dx=3x^2$, mọi nguyên hàm có dạng $F(x)=\sin(2x)+3x^2+C$, $C\in\mathbb R$. **Kiểm 1 (đạo hàm):** $F'(x)=2\cos(2x)+6x=f(x)$ trên $\mathbb R$. **Kiểm 2 (tích phân xác định):** Trên $[0,\pi/2]$, tính từng phần được $\int_0^{\pi/2}2\cos(2x)\,dx=0$ và $\int_0^{\pi/2}6x\,dx=3\pi^2/4$. Đồng thời $F(\pi/2)-F(0)=3\pi^2/4$, khớp kết quả; hằng số $C$ triệt tiêu khi lấy hiệu cận.

**Rubric /5:** 1đ nguyên hàm $2\cos(2x)$; 1đ nguyên hàm $6x$; 1đ viết đủ $+C$, nêu miền $\mathbb R$; 1đ kiểm tra đạo hàm; 1đ kiểm thêm bằng giá trị tích phân xác định trên đoạn thử.

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

*Lời giải chuẩn tự đối chiếu:* Đặt $f(x)=x^2+1$, liên tục trên $[0,2]$, nên dùng Newton–Leibniz. Một nguyên hàm là $F(x)=x^3/3+x$ vì $F'(x)=x^2+1$. Khi đó $\int_0^2(x^2+1)\,dx=[x^3/3+x]_0^2=8/3+2=14/3$. Giá trị thập phân $14/3=4{,}6666\ldots$ được làm tròn đến hai chữ số sau dấu phẩy là $4{,}67$; đây không phải hai tích phân khác nhau.

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

*Lời giải chuẩn tự đối chiếu:* Với $f(x)=x^2$ trên $[0,2]$, $n=4$ nên $h=(2-0)/4=1/2$. Lập bảng nút $x_i=0;1/2;1;3/2;2$ và $f(x_i)=0;1/4;1;9/4;4$. Áp dụng hình thang hợp thành: $T_4=\frac12[(0+4)/2+1/4+1+9/4]=\frac{11}{4}$. Tích phân đúng $I=\int_0^2x^2\,dx=[x^3/3]_0^2=8/3$. Do đó sai lệch **có dấu** $T_4-I=11/4-8/3=1/12>0$; với hàm lồi $x^2$, dây cung nằm phía trên đồ thị, phù hợp dấu sai lệch.

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

*Lời giải chuẩn tự đối chiếu:* Trên $[0,1]$, $f(x)=x^2$ có $f''(x)=2$ liên tục, nên lấy $M=2$. Cận sai số hình thang hợp thành là $|I-T_n|\le M(b-a)^3/(12n^2)=1/(6n^2)$. Để **bảo đảm bằng cận này** sai số nhỏ hơn $0{,}001$, cần $1/(6n^2)<0{,}001$, tương đương $n^2>1000/6=166{,}666\ldots$, nên số nguyên nhỏ nhất thỏa điều kiện là $n=13$. Nếu $n=12$, cận là $1/864\approx0{,}0011574>0{,}001$, vì thế **cận chưa đủ để bảo đảm**, không có nghĩa sai số thật nhất thiết lớn hơn ngưỡng; $n=13$ cho cận $1/1014\approx0{,}0009862<0{,}001$.

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

*Lời giải chuẩn tự đối chiếu:* Các mốc thời gian $t=0,2,4,6$ (giây) cách đều $h=2$ s; vận tốc tương ứng là **$2,3,5,4$ m/s**. Giả sử vận tốc không âm trong giai đoạn, quãng đường xấp xỉ bằng diện tích dưới đồ thị: $T_3=h[(v_0+v_3)/2+v_1+v_2]=2[(2+4)/2+3+5]=\boxed{22\,\mathrm m}$. Có thể kiểm riêng từng khoảng: $2(2+3)/2=5$ m, $2(3+5)/2=8$ m, $2(5+4)/2=9$ m, tổng $5+8+9=22$ m. Đây chỉ là xấp xỉ từ số đo rời rạc, chưa có chứng nhận cận sai số vì chưa biết độ trơn và $|v''|$, đồng thời chưa xét sai số của cảm biến.

**Rubric /5:** 1đ nêu h=2s; 1đ công thức; 1đ giá trị 22; 1đ đơn vị m; 1đ nêu không có bound nếu chỉ có dữ liệu.

**D6 HELP `HELP-G12-EXP01-O05` — năm bước khắc phục đúng năng lực (chỉ hiện khi học sinh chủ động mở):** (1) Đọc trục thời gian/chiều dài và đơn vị của mỗi cột. (2) Nếu các mốc không cách đều, chia theo từng khoảng và dùng hᵢ riêng. (3) Với mốc 0,1,3 và diện tích 2,4,5: 1×(2+4)/2+2×(4+5)/2=12. (4) Đơn vị thể tích cm³, quãng đường m; từ bảng dữ liệu không tự suy được cận f′′. (5) Quay lại bảng gốc, tính từng hình thang và nêu một giới hạn đo lường. Không ghi Mastery.

## Kết thúc trải nghiệm — tự kiểm tra thao tác và giải thích
Trả lời lần lượt các câu Application theo thứ tự đã học. Đây là **secondary placement** của 5 ID `-A01` đến `-A05` đã tồn tại, không tạo `ITEM_ID` mới. Tự đánh giá chất lượng mô hình và lời giải; công khai chỉ `CLIENT_SELF_CHECK_NO_MASTERY`. Không gọi đây là đề RD1 kín hay `SGK_CHAPTER_READINESS`; không hiện lời giải/rubric trước thao tác tự mở/Final Submit theo hợp đồng RELEASE.

<!-- End EXP01 -->

---

<!-- Start EXP02: source after limited R01 approved Written delta -->

# SGK Toán 12 KNTT Tập Hai — Học liệu HOẠT ĐỘNG THỰC HÀNH TRẢI NGHIỆM (học liệu canonical R01 — D4 đã được reviewer chấp nhận)
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.1.0
LEARNING_PATH: SGK_EXPERIENCE_EXTENSION_OF_COMPLETE_SGK_PATH
CONTENT_READY: NO
ACADEMIC_VERDICT: R00_PASS_PLUS_R01_TARGETED_PASS_REPORTED_RECEIPT_SHA_HOLD
PEDAGOGICAL_VERDICT: R00_PASS_PLUS_R01_TARGETED_PASS_REPORTED_RECEIPT_SHA_HOLD
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
ITEM_POLICY: ONE_CANONICAL_ITEM_ID_ONE_QUESTION
CONTENT_VERSION: R01
APPLIED_REVIEW: G12-SGK-EXP01-EXP02-R01-TARGETED-Q06-Q18
DELTA_CLASS: DELTA_C_ACADEMIC_MATERIAL
BLOCKERS: Q18_REVIEW_RECEIPT_SHA_MISMATCH
LESSON_ID: G12-SGK-EXP02
SOURCE_ROLE: ORIGINAL_AUTHORED
EXPERIENCE_LEARNING_ROLE: SGK_EXPERIENCE_CORE_PRACTICE_NOT_NEW_SGK_MANDATORY_CORE
RD1_PRIVATE: NOT_DEFINED_FOR_EXPERIENCE; SGK_CHAPTER_READINESS_REMAINS_SEPARATE

**Nguồn thẩm quyền S1:** SGK Toán 12 KNTT Tập Hai SHA256 `3c642f2e80d86d699ea62bbcabd0c3074fd5118def96e4b3b8ce1f9ead7f97bb`, HOẠT ĐỘNG THỰC HÀNH TRẢI NGHIỆM trang in **81–89** (PDF 1-based **83–91**). Cụ thể thực hành nguyên hàm/tích phân GeoGebra và phương pháp hình thang trang **81–84**; vẽ đồ họa 3D GeoGebra với tam giác Penrose/mặt Möbius trang **85–89**. Nội dung/bài tập dưới đây là sáng tạo của AUTHORING, không chép SGK và không khẳng định đã thực hiện GeoGebra trên thiết bị thật.

**Phạm vi:** đây là **hai trải nghiệm SGK**, KHÔNG phải Bài 20/21 mới, không phải Chương VII, không tạo Topic hoặc Core SGK mới ngoài phạm vi chương trình. Bài thực hành yêu cầu thao tác công cụ *hoặc* tính toán/diễn giải thay thế cho học sinh chưa truy cập được GeoGebra; hai hình thức đều có thể học độc lập. Câu luyện tập có lời giải chỉ được lộ sau thao tác đối chiếu phù hợp, không cung cấp đánh giá Mastery.

# Thực hành 2: Vẽ 3D bằng GeoGebra — ảo giác Penrose và mặt Möbius

## Vì sao cần học? — PED1
Một hình 3D được nhìn qua màn hình 2D nên góc nhìn có thể tạo ảo giác không tồn tại trong cấu hình không gian thật. GeoGebra 3D giúp ta xây mô hình tái lập và **phản biện bằng tọa độ**, từ tam giác Penrose (ảo giác do hình chiếu) đến mặt Möbius (dải bị vặn nửa vòng).

## Tiền đề — PED2
Điểm Oxyz, đoạn thẳng và mặt phẳng trong 3D, phép chiếu lên Oxy, đơn vị đo, tam giác/lăng trụ, lượng giác cơ bản nếu chọn phương án Möbius có tham số.

## Bản chất trước công thức — PED3
**Tam giác Penrose:** đường nét trên màn hình trông khép kín nhưng cấu hình thật có thể đứt rời về độ sâu. Phải kiểm tọa độ/giao nhau trong Oxyz, không chỉ screenshot. **Mặt Möbius:** một dải vật liệu nối hai đầu sau vặn nửa vòng; tham số hai biên bị đổi dấu sau một chu kỳ (`v ↔ −v`). Đây là trải nghiệm hình học không gian có mở rộng tôpô, **không phải định lí Core cần học thuộc**.

## Đọc hình — PED4
- PROJECTION: hai đoạn z=0 và z=2 tách nhau trong không gian; khi nhìn xuống Oxy thì trùng nét. Sự mất chiều sâu chính là nguồn ảo giác.
- MOBIUS: một dải 3D với mép ghép đảo chiều; một ảnh không chứng minh tính một mặt, cần đọc công thức ghép `M(0,v)=M(2π,−v)`.

## Thực hành có thể tái lập — PED5
1. Mở **GeoGebra 3D**. Với lăng trụ, nhập từng điểm tọa độ trong Input/CAS hoặc bằng công cụ Point; tạo hai tam giác bằng `Polygon`, nối các đỉnh tương ứng hoặc dùng lệnh tạo lăng trụ tương ứng phiên bản hiện có.
2. Với ảo giác Penrose, dựng các phần thanh thẳng riêng và điều chỉnh góc nhìn sao cho hình chiếu có vẻ liền; tiếp đó **xoay góc nhìn** và chỉ ra vị trí các thanh không nối thật. Không đánh tráo hiệu ứng chiếu thành một hình tam giác 3D thật.
3. Với Möbius, tham số tham khảo: `M(u,v)=((1+v cos(u/2)/2)cos(u),(1+v cos(u/2)/2)sin(u),v sin(u/2)/2)`, `0≤u≤2π`, `−1≤v≤1`; dùng `Surface(x(u,v),y(u,v),z(u,v),u,0,2π,v,−1,1)` theo cú pháp phiên bản. Xoay để xem dải và giải thích quy tắc ghép mép, thay vì tự gán đặc tính tôpô chỉ từ ảnh.
4. Nếu không dùng được GeoGebra: dùng bản vẽ dưới đây + tính tọa độ, chứng minh hai hình chiếu có thể trùng nhưng hai đoạn 3D không giao; kiểm công thức ghép Möbius. **Đây là đường tự học độc lập** không phụ thuộc liên kết bên ngoài.
5. Lưu tọa độ, tham số, hai góc nhìn và giải thích điều kiện/giới hạn của mô hình. Không đoán số liệu từ một ảnh màn hình.

## Tự thử TRƯỚC Core (tự mở đáp án; không ghi Mastery)
- `G12-SGK-EXP02-T01`: P(1,2,0),Q(1,2,3) có cùng ảnh chiếu xuống Oxy không? **Tự mở:** có; ảnh chiếu đều (1,2), nhưng khoảng cách thực là 3.
- `G12-SGK-EXP02-T02`: Dải Möbius vặn nửa vòng, khi đi hết u=0 đến u=2π thì v ghép với v hay −v? **Tự mở:** ghép với −v, giải thích sự đảo bề ngang.

## Hình minh họa nguồn gốc tự vẽ
- `Temp_FIG_G12_XP02_PROJECTION_R00.png` — hình chiếu giống nhau của hai đoạn tách nhau theo z.
- `Temp_FIG_G12_XP02_MOBIUS_R00.png` — mô hình tham số dải Möbius.

## Ma trận kiến thức → ví dụ D2 → Core/Practice/Application/Written → D6

### G12-SGK-EXP02-O01 — Phân biệt mô hình 3D và ảnh chiếu 2D gây ảo giác
**Vì sao:** Một ảnh có thể làm ta tin các đoạn nối nhau dù cấu hình 3D không nối.

**Tiền đề:** Biết biểu diễn điểm và trục Oxyz và khác biệt góc nhìn phối cảnh.

**Bản chất:** Hình Penrose lý tưởng tạo mâu thuẫn độ sâu nếu đòi là một tam giác vật chất liên tục với các thanh vuông chuẩn; dựng mô hình 3D có thể tạo ảo giác từ góc nhìn riêng.

**Lý do chọn phương pháp:** Đọc ảnh chiếu, xoay 3D để phát hiện chỗ lệch/tách rời; gọi đó là dựng ảo giác, không khẳng định vật vô khả thành khả.

**Điều kiện/giới hạn:** Ảnh 2D không đủ khẳng định hai điểm có cùng tọa độ z; góc nhìn khác làm lộ ảo giác.

**Ví dụ giải mẫu `EX-G12-EXP02-O01` (D2).** Hai đoạn trong Oxyz A(0,0,0)→B(1,0,0), C(0,0,2)→D(1,0,2) có ảnh chiếu xuống Oxy trùng nhau. Chúng có giao nhau không?

**Lời giải có suy luận:** Không; z=0 và z=2 nên hai đoạn rời nhau dù ảnh chiếu top-view trùng.

**Bài tập Core (trong hoạt động trải nghiệm, không là Core chương mới) `THPT-G12-EXP02-C01`** — Hai điểm P(1,2,0) và Q(1,2,3) có hình chiếu lên Oxy giống không?

*Đáp án tự mở:* Có, đều là (1,2).

**Practice `THPT-G12-EXP02-P01`** — Vì sao một hình tam giác Penrose trông khép kín ở một góc không chứng minh mô hình 3D đó thực sự khép kín?

*Đáp án tự mở:* Vì ảnh chiếu bỏ mất độ sâu và có thể che khuất các chỗ nối không khớp.

**Application `THPT-G12-EXP02-A01`** — Sau khi xoay một mô hình Penrose 3D, thấy khe hở. Phát biểu nhận xét toán học.

*Đáp án tự mở:* Mô hình chỉ khép kín trong hình chiếu được chọn, không khép kín về tọa độ không gian.

**Written `THPT-G12-EXP02-W01`** — Dựng lập luận với hai đoạn song song, cùng hình chiếu Oxy nhưng khác z và kết luận về tam giác Penrose.

*Lời giải chuẩn tự đối chiếu:* Xét $A(0,0,0)$, $B(1,0,0)$ và $C(0,0,2)$, $D(1,0,2)$. Phép chiếu vuông góc lên mặt phẳng $Oxy$ bỏ tọa độ $z$, do đó cả $AB$ và $CD$ có cùng hình chiếu là đoạn từ $(0,0)$ đến $(1,0)$. Tuy vậy mọi điểm $AB$ đều có $z=0$, còn mọi điểm $CD$ đều có $z=2$, nên hai đoạn **không giao nhau**, cách nhau hai đơn vị theo phương $z$. Nếu đổi sang góc nhìn bên để thấy chiều cao, chúng tách rõ; đây là ví dụ về giới hạn suy luận từ ảnh 2D, giúp hiểu nguyên lí thị giác dùng trong một mô hình ảo giác kiểu Penrose, chứ không phải chứng minh một tam giác Penrose ba thanh cụ thể đã được dựng.

**Rubric /5:** 1đ nêu hai hình chiếu; 1đ chỉ ra z khác; 1đ kết luận không cắt; 1đ liên hệ ảo giác; 1đ nêu cần đổi góc nhìn để kiểm.

**D6 HELP `HELP-G12-EXP02-O01` — năm bước khắc phục đúng năng lực (chỉ hiện khi học sinh chủ động mở):** (1) Phân biệt một hình chiếu trong Oxy với toàn bộ điểm trong Oxyz. (2) Hai đoạn có cùng (x,y) nhưng khác z vẫn không giao nhau. (3) Đoạn z=0 và đoạn z=2 cho cùng bóng xuống Oxy mà cách nhau 2. (4) Một ảnh góc nhìn Penrose có thể che khe nối; không biến ảo giác thành vật thật. (5) Dùng tọa độ/góc nhìn khác xác minh điểm cắt của câu gốc. Không ghi Mastery.

### G12-SGK-EXP02-O02 — Dựng khối lăng trụ tam giác và kiểm bằng tọa độ
**Vì sao:** Muốn dựng hình 3D có thể kiểm chứng, cần các điểm, cạnh và mặt được xác định chính xác.

**Tiền đề:** Tọa độ Oxyz, véc-tơ, khoảng cách, mặt phẳng tọa độ; lệnh Point/Polygon/Prism tùy phiên bản GeoGebra.

**Bản chất:** Lăng trụ tam giác có 6 đỉnh, 9 cạnh, 5 mặt; diện tích đáy × chiều cao cho thể tích.

**Lý do chọn phương pháp:** Dựng A,B,C trên z=0 rồi A′,B′,C′ trên z=h; vẽ đa giác hai đáy và ba mặt bên, kiểm khoảng cách.

**Điều kiện/giới hạn:** Các đáy tam giác phải không thẳng hàng, hai đáy tương ứng song song/bằng nhau; kiểm điểm đồng phẳng.

**Ví dụ giải mẫu `EX-G12-EXP02-O02` (D2).** Dựng A(0,0,0),B(2,0,0),C(0,2,0), A′(0,0,3),B′(2,0,3),C′(0,2,3). Tính thể tích.

**Lời giải có suy luận:** Diện tích tam giác đáy =2, h=3 nên V=6 (đv³); 6 đỉnh, 9 cạnh, 5 mặt.

**Bài tập Core (trong hoạt động trải nghiệm, không là Core chương mới) `THPT-G12-EXP02-C02`** — Lăng trụ tam giác có bao nhiêu đỉnh?

*Đáp án tự mở:* 6.

**Practice `THPT-G12-EXP02-P02`** — Vì sao A,B,C không được thẳng hàng khi tạo lăng trụ tam giác?

*Đáp án tự mở:* Đáy sẽ suy biến có diện tích bằng 0, không tạo khối lăng trụ thực.

**Application `THPT-G12-EXP02-A02`** — Với cùng đáy, thay h=4 thì thể tích bằng bao nhiêu?

*Đáp án tự mở:* V=2×4=8 (đv³).

**Written `THPT-G12-EXP02-W02`** — Từ bộ 6 đỉnh đã cho, mô tả thao tác dựng và kiểm ba tính chất đáy/song song/thể tích.

*Lời giải chuẩn tự đối chiếu:* Nhập vào GeoGebra 3D lần lượt $A(0,0,0)$, $B(2,0,0)$, $C(0,2,0)$ và $A'(0,0,3)$, $B'(2,0,3)$, $C'(0,2,3)$. Vẽ hai tam giác $ABC$, $A'B'C'$ rồi nối ba cặp đỉnh $AA'$, $BB'$, $CC'$; tổng cộng có 6 đỉnh, 9 cạnh và 5 mặt. Hai mặt đáy cùng nằm trong các mặt phẳng $z=0$ và $z=3$, song song; mỗi cạnh bên có véc-tơ $(0,0,3)$, nên hai tam giác đồng dạng tỉ số 1 (bằng nhau) và chiều cao là $h=3$. Vì $AB=AC=2$ và $AB\perp AC$, $S_{ABC}=(1/2)\cdot2\cdot2=2$. Do đó thể tích $V=S_{ABC}h=2\cdot3=\boxed{6}$ đơn vị khối. Có thể tự kiểm kết quả bằng tọa độ, không phụ thuộc hình ảnh phần mềm.

**Rubric /5:** 1đ dựng đúng 6 đỉnh; 1đ nối 9 cạnh; 1đ kiểm hai mặt đáy; 1đ tính Sđáy=2; 1đ V=6.

**D6 HELP `HELP-G12-EXP02-O02` — năm bước khắc phục đúng năng lực (chỉ hiện khi học sinh chủ động mở):** (1) Xác định ba đỉnh đáy không thẳng hàng trước khi tạo khối. (2) Khai báo ba đỉnh phía trên bằng cùng véc-tơ tịnh tiến. (3) Đáy A(0,0,0),B(2,0,0),C(0,2,0): diện tích=2. (4) Chiều cao 3 cho V=6; hình có 6 đỉnh, 9 cạnh, 5 mặt. (5) Quay về mô hình của bạn, kiểm 6 tọa độ và không trộn diện tích với thể tích. Không ghi Mastery.

### G12-SGK-EXP02-O03 — Chọn góc nhìn và kiểm chứng tính thật của hình dựng
**Vì sao:** Nhìn mô hình từ nhiều góc giúp phân biệt kết luận thật với hiệu ứng phối cảnh phụ thuộc người quan sát.

**Tiền đề:** Biết phép chiếu và thao tác xoay, ẩn hiện đối tượng trong khung 3D.

**Bản chất:** Một hướng nhìn có thể trùng nét; xoay để lộ sai khác, dùng tọa độ làm kiểm chứng độc lập ảnh chụp.

**Lý do chọn phương pháp:** Xuất ít nhất hai ảnh góc nhìn, mô tả góc/quy tắc nhìn và lưu tọa độ; so sánh trước–sau xoay.

**Điều kiện/giới hạn:** Hình hiển thị có thể bị che khuất; ảnh không thay thế điều kiện giao cắt trong 3D.

**Ví dụ giải mẫu `EX-G12-EXP02-O03` (D2).** Hai điểm M(1,0,0),N(1,0,3) cùng hình chiếu Oxy. Sau khi xoay góc nhìn sang bên, điều gì đổi?

**Lời giải có suy luận:** Khoảng cách hình chiếu thường thay đổi; tọa độ/độ dài MN=3 vẫn bất biến.

**Bài tập Core (trong hoạt động trải nghiệm, không là Core chương mới) `THPT-G12-EXP02-C03`** — Độ dài MN của M(1,0,0),N(1,0,3) là bao nhiêu?

*Đáp án tự mở:* 3.

**Practice `THPT-G12-EXP02-P03`** — Ảnh chụp màn hình tại một góc cho thấy hai đoạn dính nhau. Đó có đủ để khẳng định chúng cắt nhau không?

*Đáp án tự mở:* Không, cần điều kiện giao nhau trong Oxyz hoặc kiểm bằng nhiều góc.

**Application `THPT-G12-EXP02-A03`** — Nếu hai điểm khác nhau ở đúng tọa độ z, nên chọn góc nhìn nào để kiểm?

*Đáp án tự mở:* Nhìn bên, mặt đứng xOz hoặc yOz để thấy chênh lệch z.

**Written `THPT-G12-EXP02-W03`** — Thiết kế thủ tục kiểm mô hình ba thanh tạo hình Penrose sau khi dựng, tránh kết luận sai từ một góc.

*Lời giải chuẩn tự đối chiếu:* (1) Ghi lại tọa độ đầu–cuối của **ba thanh rời**, các điểm dự kiến tạo góc và mặt phẳng chứa từng phần; không dùng mỗi ảnh làm dữ liệu. (2) Chọn một hướng camera để hình chiếu 2D có vẻ tạo ba mối nối khép kín và chụp ảnh, kèm mô tả hướng nhìn. (3) Xoay mô hình sang hướng bên/cao khác để thấy chiều sâu và chụp ảnh thứ hai. (4) Kiểm bằng tọa độ 3D tại từng 'mối nối': nếu hai đầu có cùng hình chiếu nhưng khác tọa độ $z$ hoặc tọa độ không gian, chúng **không** nối thật. (5) Kết luận giới hạn: ảnh đầu chỉ ghi lại một hình chiếu gây ảo giác; chính dữ liệu 3D mới xác nhận có/không giao. Quy trình cần ghi đủ thông số để người khác tái lập, không mặc nhiên cho rằng mọi cấu hình Penrose đều giống bộ tọa độ minh họa.

**Rubric /5:** 1đ nêu ảnh gốc và quy tắc nhìn; 1đ lưu tọa độ; 1đ xoay kiểm; 1đ xem chỗ nối 3D; 1đ kết luận giới hạn của ảnh.

**D6 HELP `HELP-G12-EXP02-O03` — năm bước khắc phục đúng năng lực (chỉ hiện khi học sinh chủ động mở):** (1) Tọa độ Oxyz không đổi khi bạn chỉ xoay camera. (2) Để thấy độ cao z, chọn góc nhìn xOz hoặc yOz thay vì thẳng từ trên xuống. (3) M(1,0,0), N(1,0,3): cùng hình chiếu Oxy nhưng MN=3. (4) Nếu screenshot cho thấy trùng nét, kết luận chỉ là về hình chiếu. (5) Lưu hai góc nhìn và một kiểm chứng giao/không giao bằng tọa độ. Không ghi Mastery.

### G12-SGK-EXP02-O04 — Khám phá mặt Möbius với tham số và ghép biên
**Vì sao:** Một dải vặn nửa vòng là ví dụ hấp dẫn về việc mô hình 3D chứa cấu trúc không giống băng giấy thông thường.

**Tiền đề:** Lượng giác cơ bản, tham số u và v, tọa độ Oxyz; trải nghiệm 3D ở mức mở rộng.

**Bản chất:** M(u,v)=((1+(v/2)cos(u/2))cos u,(1+(v/2)cos(u/2))sin u,(v/2)sin(u/2)), u∈[0,2π],v∈[-1,1]. Mép u=0 và u=2π phải ghép v↔−v.

**Lý do chọn phương pháp:** Nhập lệnh Surface tham số tương ứng trong GeoGebra 3D; xoay và dùng hai màu/đường biên để kiểm một vòng xoắn; giải thích biên bằng M(0,v)=M(2π,−v).

**Điều kiện/giới hạn:** Không suy tính một phía/một biên chỉ bằng một ảnh; tham số hóa có đường cắt giả tại u=0/2π, phải nhận dạng ghép mép.

**Ví dụ giải mẫu `EX-G12-EXP02-O04` (D2).** Với tham số trên, chứng minh M(0,1)=M(2π,−1).

**Lời giải có suy luận:** M(0,1)=(3/2,0,0); M(2π,−1)=(3/2,0,0).

**Bài tập Core (trong hoạt động trải nghiệm, không là Core chương mới) `THPT-G12-EXP02-C04`** — Tại u=0, v=0, điểm M là gì?

*Đáp án tự mở:* M(0,0)=(1,0,0).

**Practice `THPT-G12-EXP02-P04`** — Vì sao mặt vặn nửa vòng có mô tả ghép v với −v khi đi một vòng?

*Đáp án tự mở:* Sau một vòng quanh tâm, chiều ngang của dải bị đảo; hai mép nối đổi hướng.

**Application `THPT-G12-EXP02-A04`** — Tính M(0,−1) và M(2π,1).

*Đáp án tự mở:* Cùng (1/2,0,0).

**Written `THPT-G12-EXP02-W04`** — Trình bày công thức M, kiểm hai cặp mép ghép và giải thích vì sao ảnh 3D không đủ chứng minh mọi tính chất tôpô.

*Lời giải chuẩn tự đối chiếu:* Đặt $M(u,v)=((1+\frac v2\cos\frac u2)\cos u,(1+\frac v2\cos\frac u2)\sin u,\frac v2\sin\frac u2)$ với $0\le u\le2\pi$, $-1\le v\le1$. Với $u=0$: $\cos0=1$, $\sin0=0$, nên $M(0,v)=(1+v/2,0,0)$. Với $u=2\pi$ và tham số ngang $-v$, có $\cos\pi=-1$, $\cos2\pi=1$, $\sin\pi=0$, do đó $M(2\pi,-v)=(1+v/2,0,0)=M(0,v)$. Riêng $v=1$ cho $M(0,1)=M(2\pi,-1)=(3/2,0,0)$; $v=-1$ cho $M(0,-1)=M(2\pi,1)=(1/2,0,0)$. Dấu trừ biểu thị đảo chiều bề ngang khi ghép hai đầu dải sau một vòng, nhưng một ảnh phối cảnh **không tự nó chứng minh** mọi tính chất tôpô như tính một phía.

**Rubric /5:** 1đ nêu đúng miền tham số; 1đ công thức tọa độ; 1đ tính cặp v=1; 1đ tính cặp v=−1; 1đ giải thích ghép đảo chiều.

**D6 HELP `HELP-G12-EXP02-O04` — năm bước khắc phục đúng năng lực (chỉ hiện khi học sinh chủ động mở):** (1) Nhớ miền u∈[0,2π],v∈[−1,1] và nửa vòng xoắn. (2) Viết M(0,v) và M(2π,−v), chứng minh chúng bằng nhau. (3) Kiểm v=1: cả hai cùng (3/2,0,0). (4) Kiểm v=−1: cả hai cùng (1/2,0,0); đừng suy từ một ảnh chụp. (5) Với bài của bạn, chú giải ghép mép đảo dấu v và xác định điều gì là quan sát/giả thuyết. Không ghi Mastery.

### G12-SGK-EXP02-O05 — Thiết kế báo cáo mô hình 3D tái lập và nhận diện giới hạn
**Vì sao:** Trải nghiệm hình học phải tạo khả năng trình bày kiểm chứng, không chỉ một hình đẹp.

**Tiền đề:** Hiểu mô hình tọa độ, thao tác lưu tệp và chú thích hình vẽ.

**Bản chất:** Một báo cáo tái lập cần giả thiết, tọa độ/tham số, công cụ/lệnh, hai góc nhìn kiểm chứng, quan sát và giới hạn.

**Lý do chọn phương pháp:** Đưa checklist, lưu GeoGebra ggb, gắn alt-text/caption, giải thích dữ liệu nào đo được và cái nào chỉ là ảo giác.

**Điều kiện/giới hạn:** Không lấy một screenshot thay bằng chứng rằng tam giác Penrose là vật thể thật hoặc mặt Möbius đã được kiểm chứng mọi tính chất.

**Ví dụ giải mẫu `EX-G12-EXP02-O05` (D2).** Viết kế hoạch kiểm 3D Penrose: chọn góc nhìn thuận/đối, tọa độ rời nhau và giải thích kết luận.

**Lời giải có suy luận:** Bản tái lập cần điểm/cạnh/mặt, 2 ảnh, góc nhìn, minh chứng không nối thật trong 3D.

**Bài tập Core (trong hoạt động trải nghiệm, không là Core chương mới) `THPT-G12-EXP02-C05`** — Báo cáo mô hình tái lập tối thiểu có nên lưu thông số tọa độ không?

*Đáp án tự mở:* Có; tọa độ/tham số là chứng cứ có thể kiểm độc lập.

**Practice `THPT-G12-EXP02-P05`** — Nếu phần mềm đổi giao diện hoặc ngôn ngữ menu, cách nào giữ báo cáo tái lập?

*Đáp án tự mở:* Lưu lệnh, dữ liệu và quy tắc dựng, không chỉ nhãn nút trên giao diện.

**Application `THPT-G12-EXP02-A05`** — Một mô hình có 1 ảnh duy nhất ở góc nhìn đẹp. Cần thêm gì để kiểm tra 3D?

*Đáp án tự mở:* Thêm góc nhìn khác và dữ liệu tọa độ/quan hệ giao–song song.

**Written `THPT-G12-EXP02-W05`** — Lập báo cáo 6 mục về một mô hình Möbius hoặc ảo giác Penrose và giải thích giới hạn suy luận.

*Lời giải chuẩn tự đối chiếu:* **(1) Mục tiêu:** dựng dải vặn nửa vòng và kiểm tra quy tắc ghép đảo chiều ở hai mép. **(2) Dữ liệu:** chọn $u\in[0,2\pi]$, $v\in[-1,1]$ và $M(u,v)=((1+\frac v2\cos\frac u2)\cos u,(1+\frac v2\cos\frac u2)\sin u,\frac v2\sin\frac u2)$. **(3) Quy trình:** trong GeoGebra 3D nhập lệnh dạng `Surface((1+v*cos(u/2)/2)*cos(u), (1+v*cos(u/2)/2)*sin(u), v*sin(u/2)/2, u, 0, 2*pi, v, -1, 1)` (đối chiếu đúng cú pháp/lựa chọn ký hiệu của phiên bản đang dùng); lưu file, đối chiếu tọa độ khi $u=0,2\pi$. **(4) Hai góc nhìn:** lưu ảnh nhìn từ trên và ảnh xiên/ngang, ghi rõ góc nhìn và chú thích một vùng dải/mép. **(5) Kiểm chứng:** tính trực tiếp $M(0,v)=(1+v/2,0,0)=M(2\pi,-v)$, đặc biệt với $v=1,-1$, để thấy quy tắc đảo mép; không chỉ dựa vào ảnh. **(6) Giới hạn:** ảnh một góc có thể che vùng, chất lượng vẽ phụ thuộc lấy mẫu máy tính, và kiểm dán mép chưa phải chứng minh hình thức cho mọi đặc tính tôpô của dải Möbius.

**Rubric /5:** 1đ giả thiết/mục tiêu; 1đ dữ liệu tọa độ/tham số; 1đ quy trình tái lập; 1đ hai góc nhìn & kiểm; 1đ giới hạn hợp lí.

**D6 HELP `HELP-G12-EXP02-O05` — năm bước khắc phục đúng năng lực (chỉ hiện khi học sinh chủ động mở):** (1) Viết mục tiêu và giả thiết mô hình thành câu có thể kiểm. (2) Ghi tọa độ/tham số và các bước dựng theo thứ tự để tái lập. (3) Chụp 2 góc nhìn; từ chúng hãy chỉ ra chỗ nối/tách nhau hoặc mép ghép. (4) Phân loại điều chứng minh từ tọa độ và điều chỉ quan sát từ hiển thị. (5) Thử đưa báo cáo cho người khác làm lại; sửa mọi điểm thiếu đầu vào. Không ghi Mastery.

## Kết thúc trải nghiệm — tự kiểm tra thao tác và giải thích
Trả lời lần lượt các câu Application theo thứ tự đã học. Đây là **secondary placement** của 5 ID `-A01` đến `-A05` đã tồn tại, không tạo `ITEM_ID` mới. Tự đánh giá chất lượng mô hình và lời giải; công khai chỉ `CLIENT_SELF_CHECK_NO_MASTERY`. Không gọi đây là đề RD1 kín hay `SGK_CHAPTER_READINESS`; không hiện lời giải/rubric trước thao tác tự mở/Final Submit theo hợp đồng RELEASE.

<!-- End EXP02 -->
