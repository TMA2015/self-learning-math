# Bài 25. Nhị thức Newton

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VIII · KIẾN THỨC SGK KNTT</p>
<p class="thpt-r4-lead">Khai triển nhị thức Newton và tìm hệ số hoặc số hạng theo đúng điều kiện.</p>
<nav class="thpt-r4-lesson-tabs" aria-label="Điều hướng Chương VIII"><a href="../">Tổng quan Chương VIII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra chương · chưa kích hoạt</a></nav>
</div>

<!-- G10_CHVIII_FULL_R02_ALL_BEGIN -->

## Tự khám phá trước công thức

<!-- G10_CHVIII_R02_BEGIN:THPT-G10-CHVIII-TRY09 -->

<span id="thpt-g10-chviii-try09" data-thpt-first-try-id="THPT-G10-CHVIII-TRY09" data-outcome-id="G10-B25-NEWTON_EXPANSION"></span>

### Từ năm nhân tử đến hệ số Newton

**Vì sao cần học:** Khai triển (a+b)⁵ bằng nhân từng cặp dài; hãy hiểu vì sao hệ số của a³b² xuất hiện nhiều lần.

**Tiền đề:** Ôn C₅² là số cách chọn 2 vị trí khác nhau trong 5 vị trí; từ mỗi nhân tử (a+b), lấy a hoặc b.

**Hiểu bản chất trước công thức:** Đơn thức a³b² xuất hiện khi chọn b từ đúng hai trong năm nhân tử; ba nhân tử còn lại chọn a. Có C₅²=10 cách chọn vị trí b.

**Hướng dẫn đọc hình/sơ đồ:** Vẽ năm ô (a+b), đánh dấu hai ô lấy b, ba ô lấy a; đổi cặp ô đánh dấu cho các tích cùng a³b².

**Lý do chọn phương pháp, điều kiện và giới hạn:** Với SGK Core n=4 hoặc n=5, số mũ của a và b cộng bằng n. Hệ số a^(n−k)b^k bằng C(n,k); không dùng n lớn làm nội dung bắt buộc.

**Tự thử trước Core:** Trong khai triển (a+b)⁵, hệ số của a³b² là bao nhiêu? Giải thích bằng cách chọn nhân tử.

??? question "Tự mở đáp án sau khi đã tự làm"
    **Đáp án:** 10.

    **Lập luận:** Chọn hai trong năm nhân tử cho b theo C₅²=5!/(2!3!)=10 cách; ba nhân tử còn lại cho a.

    **Nếu chưa đúng:** xem D6 `HELP-G10-CHVIII-TRY09`, sau đó luyện bài canonical `THPT-G10-B25-C01` trong ngân hàng đã review (không tính lại câu đã xem lời giải thành Readiness).

    [Chuyển đến hướng dẫn D6](#help-g10-chviii-try09)

<span id="help-g10-chviii-try09" data-thpt-help-id="HELP-G10-CHVIII-TRY09"></span>

??? tip "Nếu chưa làm được — khắc phục 5 bước"
    1. **Nhận diện lỗi:** Nếu đáp 5, em nhầm số mũ với số cách chọn; nếu 20, em đếm thứ tự hai vị trí b không cần thiết.
    2. **Quay lại bản chất:** Đơn thức a³b² xuất hiện khi chọn b từ đúng hai trong năm nhân tử; ba nhân tử còn lại chọn a. Có C₅²=10 cách chọn vị trí b.
    3. **Tự làm lại:** Vẽ năm vị trí, đánh dấu hai vị trí b hoặc tính C₅².
    4. **Đối chiếu tự nguyện:** tự mở lời giải trong fold và giải thích lại mỗi điều kiện, không cộng điểm/Mastery.
    5. **Luyện tiếp:** `THPT-G10-B25-C01`, câu canonical đã review, phù hợp `G10-B25-NEWTON_EXPANSION`; nếu làm câu này sau khi đã xem lời giải thì chỉ tính luyện tập, không chứng nhận đánh giá độc lập.

    [Mở câu luyện tập đã review](../luyen-tap/?item=THPT-G10-B25-C01)

<!-- G10_CHVIII_R02_END:THPT-G10-CHVIII-TRY09 -->

<!-- G10_CHVIII_R02_BEGIN:THPT-G10-CHVIII-TRY10 -->

<span id="thpt-g10-chviii-try10" data-thpt-first-try-id="THPT-G10-CHVIII-TRY10" data-outcome-id="G10-B25-COEFFICIENT_SIGN"></span>

### Dấu hệ số phụ thuộc hạng tử âm được chọn bao nhiêu lần

**Vì sao cần học:** Trong (2−x)⁴, có số hạng dương và âm; nhầm dấu có thể làm sai cả hệ số dù tổ hợp tính đúng.

**Tiền đề:** Ôn (−x)^k=(−1)^k x^k, dấu âm mũ lẻ giữ dấu trừ; chọn k nhân tử (−x) từ n nhân tử.

**Hiểu bản chất trước công thức:** Hệ số x^k gồm ba phần: số cách chọn k vị trí là C(n,k), phần số 2^(n−k) từ các vị trí còn lại và dấu (−1)^k. Dấu không tùy ý.

**Hướng dẫn đọc hình/sơ đồ:** Dùng bốn ô (2−x), đánh dấu ba ô lấy −x và một ô lấy 2; mỗi tích chọn có ba dấu trừ nên kết quả âm.

**Lý do chọn phương pháp, điều kiện và giới hạn:** Trong n=4 Core, hệ số x³ của (2−x)⁴ là C(4,3)·2¹·(−1)³. Kiểm đúng số mũ x trước khi tính, không mở rộng cấp số tùy chọn n lớn.

**Tự thử trước Core:** Tìm hệ số của x³ trong (2−x)⁴.

??? question "Tự mở đáp án sau khi đã tự làm"
    **Đáp án:** −8.

    **Lập luận:** Chọn −x từ ba trong bốn nhân tử có C₄³=4 cách; mỗi tích là 2·(−x)³=−2x³. Tổng −8x³.

    **Nếu chưa đúng:** xem D6 `HELP-G10-CHVIII-TRY10`, sau đó luyện bài canonical `THPT-G10-B25-P01` trong ngân hàng đã review (không tính lại câu đã xem lời giải thành Readiness).

    [Chuyển đến hướng dẫn D6](#help-g10-chviii-try10)

<span id="help-g10-chviii-try10" data-thpt-help-id="HELP-G10-CHVIII-TRY10"></span>

??? tip "Nếu chưa làm được — khắc phục 5 bước"
    1. **Nhận diện lỗi:** Nếu đáp +8, em đã bỏ dấu (−1)³; nếu đáp −4, em quên nhân hệ số 2 ở nhân tử còn lại.
    2. **Quay lại bản chất:** Hệ số x^k gồm ba phần: số cách chọn k vị trí là C(n,k), phần số 2^(n−k) từ các vị trí còn lại và dấu (−1)^k. Dấu không tùy ý.
    3. **Tự làm lại:** Viết riêng C₄³, 2¹, (−1)³ rồi nhân từng phần.
    4. **Đối chiếu tự nguyện:** tự mở lời giải trong fold và giải thích lại mỗi điều kiện, không cộng điểm/Mastery.
    5. **Luyện tiếp:** `THPT-G10-B25-P01`, câu canonical đã review, phù hợp `G10-B25-COEFFICIENT_SIGN`; nếu làm câu này sau khi đã xem lời giải thì chỉ tính luyện tập, không chứng nhận đánh giá độc lập.

    [Mở câu luyện tập đã review](../luyen-tap/?item=THPT-G10-B25-P01)

<!-- G10_CHVIII_R02_END:THPT-G10-CHVIII-TRY10 -->

<!-- G10_CHVIII_R02_BEGIN:THPT-G10-CHVIII-TRY11 -->

<span id="thpt-g10-chviii-try11" data-thpt-first-try-id="THPT-G10-CHVIII-TRY11" data-outcome-id="G10-B25-CONSTANT_TERM"></span>

### Số hạng tự do chỉ khi không chọn thừa số có x

**Vì sao cần học:** Trong (2x+3)⁴, không cần khai triển hết để biết số hạng không chứa x: chỉ cần nhận ra tích nào không lấy 2x lần nào.

**Tiền đề:** Ôn mỗi nhân tử (2x+3) cho hai lựa chọn 2x hoặc 3; số mũ x là số lần chọn 2x.

**Hiểu bản chất trước công thức:** Số hạng không chứa x đòi số mũ x bằng 0: lấy 3 ở tất cả bốn nhân tử. Đây là phạm vi SGK Core n=4; biểu thức 1/x hoặc n lớn thuộc phần hỗ trợ/mở rộng, không bắt làm Tự thử bắt buộc.

**Hướng dẫn đọc hình/sơ đồ:** Vẽ bốn ô (2x+3) và khoanh 3 trong cả bốn ô, thấy tích 3⁴ không có x.

**Lý do chọn phương pháp, điều kiện và giới hạn:** Dùng số hạng C(4,k)(2x)^k·3^(4−k), cho k=0; không giải bài có số mũ âm ngoài phạm vi SGK Core.

**Tự thử trước Core:** Trong khai triển (2x+3)⁴, số hạng không chứa x bằng bao nhiêu?

??? question "Tự mở đáp án sau khi đã tự làm"
    **Đáp án:** 81.

    **Lập luận:** Chọn 3 từ cả bốn nhân tử: C₄⁰(2x)⁰3⁴=81. Với k≥1, số hạng chứa x^k nên không là hằng số.

    **Nếu chưa đúng:** xem D6 `HELP-G10-CHVIII-TRY11`, sau đó luyện bài canonical `THPT-G10-B25-P07` trong ngân hàng đã review (không tính lại câu đã xem lời giải thành Readiness).

    [Chuyển đến hướng dẫn D6](#help-g10-chviii-try11)

<span id="help-g10-chviii-try11" data-thpt-help-id="HELP-G10-CHVIII-TRY11"></span>

??? tip "Nếu chưa làm được — khắc phục 5 bước"
    1. **Nhận diện lỗi:** Nếu đáp 16, em lấy hệ số bậc x⁴; nếu chỉ 3, em quên tích của cả bốn nhân tử.
    2. **Quay lại bản chất:** Số hạng không chứa x đòi số mũ x bằng 0: lấy 3 ở tất cả bốn nhân tử. Đây là phạm vi SGK Core n=4; biểu thức 1/x hoặc n lớn thuộc phần hỗ trợ/mở rộng, không bắt làm Tự thử bắt buộc.
    3. **Tự làm lại:** Lập bảng k=0,1,2,3,4 và số mũ x là k, chọn k=0.
    4. **Đối chiếu tự nguyện:** tự mở lời giải trong fold và giải thích lại mỗi điều kiện, không cộng điểm/Mastery.
    5. **Luyện tiếp:** `THPT-G10-B25-P07`, câu canonical đã review, phù hợp `G10-B25-CONSTANT_TERM`; nếu làm câu này sau khi đã xem lời giải thì chỉ tính luyện tập, không chứng nhận đánh giá độc lập.

    [Mở câu luyện tập đã review](../luyen-tap/?item=THPT-G10-B25-P07)

<!-- G10_CHVIII_R02_END:THPT-G10-CHVIII-TRY11 -->

<!-- G10_CHVIII_R02_BEGIN:THPT-G10-CHVIII-TRY12 -->

<span id="thpt-g10-chviii-try12" data-thpt-first-try-id="THPT-G10-CHVIII-TRY12" data-outcome-id="G10-B25-COEFFICIENT_SUM"></span>

### Tổng hệ số bằng giá trị đa thức tại x=1

**Vì sao cần học:** Cộng riêng từng hệ số khai triển (1+2x)⁴ dễ sai; thay x=1 làm mọi lũy thừa x bằng 1.

**Tiền đề:** Nhắc P(x)=a₀+a₁x+...+a₄x⁴ có P(1)=a₀+...+a₄; chỉ dùng n=4 trong học liệu Core này.

**Hiểu bản chất trước công thức:** Thay x=1, tất cả x^k=1 nên giá trị P(1) chính là tổng hệ số. Tách tổng hệ số lẻ/chẵn bằng P(−1) là nhánh mở rộng tự chọn, không thay phần SGK bắt buộc.

**Hướng dẫn đọc hình/sơ đồ:** Vẽ bảng bậc 0..4 và hệ số tương ứng, rồi cho x=1 để từng hạng đóng góp đúng hệ số của nó.

**Lý do chọn phương pháp, điều kiện và giới hạn:** Hỏi tổng mọi hệ số thì tính P(1). Chỉ khi tự chọn học thêm tổng lẻ/chẵn mới dùng (P(1)−P(−1))/2, không dùng bài n=7 nâng cao làm Core.

**Tự thử trước Core:** Tổng tất cả hệ số của đa thức (1+2x)⁴ là bao nhiêu?

??? question "Tự mở đáp án sau khi đã tự làm"
    **Đáp án:** 81.

    **Lập luận:** P(x)=(1+2x)⁴, tổng hệ số =P(1)=(1+2)⁴=3⁴=81.

    **Nếu chưa đúng:** xem D6 `HELP-G10-CHVIII-TRY12`, sau đó luyện bài canonical `THPT-G10-CHVIII-W25-01` trong ngân hàng đã review (không tính lại câu đã xem lời giải thành Readiness).

    [Chuyển đến hướng dẫn D6](#help-g10-chviii-try12)

<span id="help-g10-chviii-try12" data-thpt-help-id="HELP-G10-CHVIII-TRY12"></span>

??? tip "Nếu chưa làm được — khắc phục 5 bước"
    1. **Nhận diện lỗi:** Nếu đáp 16, em nhầm (1+2x)⁴ với (1+x)⁴, bỏ hệ số 2.
    2. **Quay lại bản chất:** Thay x=1, tất cả x^k=1 nên giá trị P(1) chính là tổng hệ số. Tách tổng hệ số lẻ/chẵn bằng P(−1) là nhánh mở rộng tự chọn, không thay phần SGK bắt buộc.
    3. **Tự làm lại:** Viết rõ P(1)=(1+2·1)⁴ và tính 3⁴; không cần khai triển.
    4. **Đối chiếu tự nguyện:** tự mở lời giải trong fold và giải thích lại mỗi điều kiện, không cộng điểm/Mastery.
    5. **Luyện tiếp:** `THPT-G10-CHVIII-W25-01`, câu canonical đã review, phù hợp `G10-B25-COEFFICIENT_SUM`; nếu làm câu này sau khi đã xem lời giải thì chỉ tính luyện tập, không chứng nhận đánh giá độc lập.

    [Mở câu luyện tập đã review](../../../thu-vien/tu-luan-chuong-viii/)

<!-- G10_CHVIII_R02_END:THPT-G10-CHVIII-TRY12 -->

<!-- G10_CHVIII_FULL_R02_ALL_END -->

## 1. Khái niệm, điều kiện và công thức

**Công thức.** Với \(n\) là số nguyên không âm,

\[
(a+b)^n=\sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^k.
\]

Có n+1 số hạng trước khi thu gọn các số hạng đồng dạng. Hệ số tổ hợp \(\binom nk=\binom n{n-k}\) và \(\binom nk=\binom{n-1}{k-1}+\binom{n-1}k\) với \(1\le k\le n-1\). Khi \(b\) là một biểu thức âm, dấu âm ở \(b^k\) phải được giữ: \((-1)^k\) khác nhau cho số mũ chẵn/lẻ.

**Đọc hệ số.** Trong \((a+bx)^n\), hệ số của \(x^r\) là \(\binom nr a^{n-r}b^r\) (\(0\le r\le n\)), với a,b là hằng số. Với biểu thức có các lũy thừa x khác nhau hoặc \(x^{-1}\), phải viết số mũ tổng quát, giải phương trình số mũ cần tìm, và kiểm tra điều kiện xác định \(x\ne0\) nếu có.

## 2. Ví dụ

**Ví dụ 1.** Hệ số x² trong (1-2x)^5 là C(5,2)×(-2)^2=10×4=40; dấu dương do mũ chẵn. Hệ số x³ là C(5,3)×(-2)^3=10×(-8)=-80.

**Ví dụ 2.** Tổng tất cả hệ số của đa thức f(x)=(2+x)^4 bằng f(1)=3^4=81. Tổng có trọng số dấu luân phiên bằng f(-1)=1. Dùng thay x=1 chỉ khi biết f(x) là đa thức hữu hạn và hiểu rõ hệ số cần cộng.

<details class="thpt-r4-pedagogical-note">
<summary>Luyện tập mở rộng và chuyên sâu</summary>
<p>Các câu có nhãn “hỗ trợ mở rộng” hoặc “chuyên sâu tự chọn” không thuộc yêu cầu bắt buộc của phần Core. Hãy nắm chắc cách khai triển và xác định hệ số trước khi luyện nâng cao.</p>
</details>

**Lỗi hay gặp.** Nhầm k và n-k; bỏ hệ số b^k; quên dấu âm với số mũ lẻ; đọc hệ số x^r sai khi a hoặc b còn chứa x; tự áp dụng f(1) cho tổng *một số* hệ số không thích hợp.

## Khi gặp khó khăn — tự tìm lỗi và học lại

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="D6-G10-B25-01">
<summary>Sai dấu và vị trí hệ số Newton</summary>
<p><strong>Dấu hiệu:</strong> Nhầm k với n−k, thiếu hệ số tổ hợp hoặc quên dấu trong (−bx)^k.</p>
<p><strong>Bản chất toán:</strong> Với a,b hằng số, n nguyên không âm, hệ số x^r trong (a+bx)^n (0≤r≤n) là C(n,r)a^(n−r)b^r; nếu b âm, dấu phụ thuộc tính chẵn/lẻ của r.</p>
<p><strong>Tự sửa:</strong> Ôn B25 mục 1: xác định phần mang x, viết số hạng tổng quát \(C_n^r a^{n-r}b^r x^r\) rồi mới chọn r; nếu b âm, soát dấu theo tính chẵn/lẻ của r. Theo nhận xét reviewer, ví dụ Core SGK KNTT lớp 10 tập trung \(n=4,5\); công thức vẫn đúng với mọi n nguyên không âm.</p>
<p><strong>Kiến thức cần ôn:</strong> B24 tổ hợp, số mũ; B25 mục 1.</p>
<p><strong>Luyện lại bài đã có:</strong> <a data-thpt-formative-id="THPT-G10-B25-C01" href="../luyen-tap/?item=THPT-G10-B25-C01">Luyện lại câu 25-C01</a> · <a data-thpt-formative-id="THPT-G10-B25-C02" href="../luyen-tap/?item=THPT-G10-B25-C02">Luyện lại câu 25-C02</a> · <a data-thpt-formative-id="THPT-G10-B25-P01" href="../luyen-tap/?item=THPT-G10-B25-P01">Luyện lại câu 25-P01</a> · <a data-thpt-formative-id="THPT-G10-B25-P03" href="../luyen-tap/?item=THPT-G10-B25-P03">Luyện lại câu 25-P03</a> · <a data-thpt-formative-id="THPT-G10-B25-P04" href="../luyen-tap/?item=THPT-G10-B25-P04">Luyện lại câu 25-P04</a> · <a data-thpt-formative-id="THPT-G10-CHVIII-W25-01" href="../../../thu-vien/tu-luan-chuong-viii/#thpt-g10-chviii-w25-01">Bài tự luận liên quan</a></p>
</details>

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="D6-G10-B25-02">
<summary>Số hạng tự do và bài mở rộng chứa x⁻¹</summary>
<p><strong>Dấu hiệu:</strong> Khai triển toàn bộ để tìm hạng không chứa x trong (a+bx)^n, hoặc tự động coi bài chứa x⁻¹ là Core bắt buộc.</p>
<p><strong>Bản chất toán:</strong> Trong (a+bx)^n (a,b là hằng số), hạng không chứa x là a^n. Nếu chứa x⁻¹ phải giải số mũ tổng quát bằng 0 và giữ điều kiện x≠0; đây là dạng mở rộng của bank hiện tại.</p>
<p><strong>Tự sửa:</strong> Ôn B25 mục 1–2 và P07 để củng cố Core. P02/P05 là hỗ trợ mở rộng, P06 chuyên sâu tự chọn, không dùng làm yêu cầu đánh giá Core bắt buộc.</p>
<p><strong>Kiến thức cần ôn:</strong> Số hạng tổng quát; điều kiện x≠0; B25 mục 1–2.</p>
<p><strong>Luyện lại bài đã có:</strong> <a data-thpt-formative-id="THPT-G10-B25-P07" href="../luyen-tap/?item=THPT-G10-B25-P07">Luyện lại câu 25-P07</a> · <a data-thpt-formative-id="THPT-G10-B25-P02" href="../luyen-tap/?item=THPT-G10-B25-P02">Luyện lại câu 25-P02</a> · <a data-thpt-formative-id="THPT-G10-B25-P05" href="../luyen-tap/?item=THPT-G10-B25-P05">Luyện lại câu 25-P05</a> · <a data-thpt-formative-id="THPT-G10-B25-P06" href="../luyen-tap/?item=THPT-G10-B25-P06">Luyện lại câu 25-P06</a></p>
</details>

## 3. Tiếp tục học

- [Core và Luyện tập/Vận dụng Chương VIII](luyen-tap.md) · tự luyện và xem lời giải sau khi làm.
- [Thư viện Written/Anchor Chương VIII](../../thu-vien/tu-luan-chuong-viii.md) · tự giải trên giấy.
- [Tổng quan Chương VIII](../chuong-viii.md).

<small>Nguồn: SGK Toán 10 KNTT tập 2, trang 72–75; SBT 56–57. Các ví dụ do dự án biên soạn, không chép nguyên văn bài SGK.</small>
