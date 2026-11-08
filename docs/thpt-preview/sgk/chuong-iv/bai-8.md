# Bài 8. Tổng và hiệu của hai vectơ

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG IV · KIẾN THỨC SGK KNTT</p><p class="thpt-r4-lead">Học định nghĩa, công thức và ví dụ, rồi luyện tập theo từng kĩ năng.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương IV</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra</a></nav></div>

<!-- G10_CHIV_FULL_R04_ALL_BEGIN -->

## Tự khám phá trước công thức

Hãy hiểu bản chất và tự thử trước khi mở đối chiếu. Hoạt động công khai này không tính điểm Mastery hoặc kiểm tra độc lập cuối chương.

<!-- G10_CHIV_R04_BEGIN:THPT-G10-CHIV-TRY06 OUTCOME=G10-B08-TRIANGLE -->

<span id="thpt-g10-chiv-try06" data-thpt-first-try-id="THPT-G10-CHIV-TRY06" data-outcome-id="G10-B08-TRIANGLE" data-thpt-help-ref="HELP-G10-B08-01"></span>

### Cộng hai lần di chuyển nối tiếp

**Vì sao cần học:** Một người đi từ A đến B rồi từ B đến C. Muốn biết độ dời cuối cùng, không cần giữ mọi chặng nếu biết điểm đầu A và điểm cuối C.

**Kiến thức cần nhớ trước:** Nhớ vectơ có điểm đầu/cuối; hai chặng phải nối đúng B; tổng độ dài hai chặng không nhất thiết bằng độ dài đoạn AC. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**Hiểu bản chất trước công thức:** Xếp hai mũi tên 'đuôi–đầu': mũi thứ nhất A→B rồi mũi thứ hai B→C. Hướng đi ròng A→C chính là ý nghĩa phép cộng vectơ \(\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}\).

**Đọc hình như thế nào:** Đọc `FIG-G10-B08-01`: lần theo đường A→B→C bằng ngón tay, sau đó nhìn mũi tên tắt A→C, không đảo B→C thành C→B. D5 kế thừa: `FIG-G10-B08-01`, không tạo hình mới, không thay XML/nhãn.

**Chọn phương pháp và giới hạn:** Nhận dạng chuỗi điểm nối trước khi áp dụng quy tắc ba điểm; không cộng độ dài trừ khi hai chặng thẳng hàng cùng chiều.

**Tự thử trước Core:** Đi từ A 3 m sang Đông đến B, rồi 4 m lên Bắc đến C. Vectơ tổng đi từ đâu tới đâu? Độ dài của nó bằng 7 m không?

??? question "Em tự mở đối chiếu sau khi đã thử làm"

    **Kết quả:** Vectơ tổng là \(\overrightarrow{AC}\); độ dài 5 m, không phải 7 m.

    **Vì sao:** Hai chặng vuông góc nên hình học Pitago cho AC = √(3²+4²)=5; 7 m là quãng đường, không phải độ dời.

    **Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B08-01` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B08-C01` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

<!-- G10_CHIV_R04_END:THPT-G10-CHIV-TRY06 -->

<!-- G10_CHIV_R04_BEGIN:THPT-G10-CHIV-TRY07 OUTCOME=G10-B08-PARALLELOGRAM -->

<span id="thpt-g10-chiv-try07" data-thpt-first-try-id="THPT-G10-CHIV-TRY07" data-outcome-id="G10-B08-PARALLELOGRAM" data-thpt-help-ref="HELP-G10-B08-02"></span>

### Hai tác động cùng lúc và hợp lực

**Vì sao cần học:** Hai lực có chung điểm đặt nhưng khác hướng không cho hợp lực bằng cách cộng độ lớn như cộng hai số thường.

**Kiến thức cần nhớ trước:** Biết quy tắc nối mũi tên của phép cộng và hình bình hành ABCD; hai vectơ cùng xuất phát A. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**Hiểu bản chất trước công thức:** Dịch chuyển một lực để nối đuôi–đầu không đổi vectơ; dựng hình bình hành cho thấy đường chéo từ điểm chung A chính là kết quả \(\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}\).

**Đọc hình như thế nào:** Trong `FIG-G10-B08-01`, kiểm tra hai cạnh AB/AD có chung gốc A và đường chéo AC; không lấy BD hoặc đường chéo ngược. D5 kế thừa: `FIG-G10-B08-01`, không tạo hình mới, không thay XML/nhãn.

**Chọn phương pháp và giới hạn:** Khi hai vectơ có cùng điểm đầu, vẽ hình bình hành cho trực giác nhanh; nếu điểm đầu khác, có thể tịnh tiến một vectơ rồi dùng quy tắc tam giác.

**Tự thử trước Core:** Ở A có hai lực vuông góc, độ lớn lần lượt 3 N và 4 N. Hợp lực theo đường chéo có độ lớn là 7 N hay 5 N?

??? question "Em tự mở đối chiếu sau khi đã thử làm"

    **Kết quả:** 5 N, theo đường chéo hình bình hành dựng từ A.

    **Vì sao:** Hai lực vuông góc là hai cạnh góc vuông dài 3,4 nên đường chéo có độ lớn √(9+16)=5. Không cộng 3+4.

    **Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B08-02` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B08-C02` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

<!-- G10_CHIV_R04_END:THPT-G10-CHIV-TRY07 -->

<!-- G10_CHIV_R04_BEGIN:THPT-G10-CHIV-TRY08 OUTCOME=G10-B08-OPPOSITE-SUBTRACTION -->

<span id="thpt-g10-chiv-try08" data-thpt-first-try-id="THPT-G10-CHIV-TRY08" data-outcome-id="G10-B08-OPPOSITE-SUBTRACTION" data-thpt-help-ref="HELP-G10-B08-01"></span>

### Vì sao trừ phải đổi chiều?

**Vì sao cần học:** Nếu biết hai vị trí đích B và C nhìn từ cùng A, muốn đi từ C sang B ta phải 'bù' chặng A→C bằng chiều ngược của nó.

**Kiến thức cần nhớ trước:** Nhớ vectơ đối là mũi tên quay 180° giữ độ dài; phép cộng ba điểm A→C→B. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**Hiểu bản chất trước công thức:** Hiệu \(\vec u-\vec v\) có nghĩa là cộng vectơ ngược \(-\vec v\); vì thế \(\overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{CA}=\overrightarrow{CB}\).

**Đọc hình như thế nào:** Ở `FIG-G10-B08-01`, nhận ra hai vectơ có cùng điểm đầu A và vẽ mũi tên kết quả C→B, không B→C. D5 kế thừa: `FIG-G10-B08-01`, không tạo hình mới, không thay XML/nhãn.

**Chọn phương pháp và giới hạn:** Đổi dấu vectơ thứ hai trước rồi nối đầu–đuôi. Phép trừ vectơ nhìn chung không giao hoán, không lấy \(\overrightarrow{BC}\) cho trường hợp này.

**Tự thử trước Core:** Cho ba điểm A,B,C bất kỳ. Rút gọn \(\overrightarrow{AB}-\overrightarrow{AC}\) thành vectơ có hai chữ cái.

??? question "Em tự mở đối chiếu sau khi đã thử làm"

    **Kết quả:** \(\overrightarrow{CB}\).

    **Vì sao:** Đổi trừ thành cộng \(\overrightarrow{CA}\): CA+AB=CB theo quy tắc ba điểm; CB và BC là hai vectơ đối.

    **Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B08-01` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B08-P01` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

<!-- G10_CHIV_R04_END:THPT-G10-CHIV-TRY08 -->

<!-- G10_CHIV_R04_BEGIN:THPT-G10-CHIV-TRY09 OUTCOME=G10-B08-MIDPOINT -->

<span id="thpt-g10-chiv-try09" data-thpt-first-try-id="THPT-G10-CHIV-TRY09" data-outcome-id="G10-B08-MIDPOINT" data-thpt-help-ref="HELP-G10-B08-02"></span>

### Trung điểm làm hai độ dời triệt tiêu

**Vì sao cần học:** Đứng ở giữa một đoạn đường, đi tới hai đầu theo hai hướng đối nhau và cùng độ dài; tổng hai vectơ này phải bằng 0.

**Kiến thức cần nhớ trước:** Đã biết M là trung điểm AB khi MA=MB và M thuộc AB; hướng M→A, M→B đối nhau. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**Hiểu bản chất trước công thức:** Vì \(\overrightarrow{MA}=-\overrightarrow{MB}\), tổng hai vectơ bằng \(\vec0\). Ngược lại, tổng bằng 0 ép hai độ dời ngược nhau và cùng dài nên M ở giữa A,B (với A≠B).

**Đọc hình như thế nào:** Đọc sơ đồ điểm A–M–B theo thứ tự, hai mũi tên xuất phát ở M; đừng vẽ A→M rồi M→B khi kiểm tổng này. D5 kế thừa: `FIG-G10-B08-01`, không tạo hình mới, không thay XML/nhãn.

**Chọn phương pháp và giới hạn:** Nhận diện hai vectơ cùng xuất phát trung điểm; dùng tổng bằng 0 thay vì chỉ chứng minh MA=MB mà quên thẳng hàng.

**Tự thử trước Core:** Trên đường thẳng chọn A=0 m, B=8 m và M là trung điểm. Lấy \(\vec e\) là vectơ đơn vị dài 1 m hướng từ A đến B. Viết hai vectơ \(\overrightarrow{MA}\), \(\overrightarrow{MB}\) theo \(\vec e\) và tính tổng.

??? question "Em tự mở đối chiếu sau khi đã thử làm"

    **Kết quả:** \(\overrightarrow{MA}=-4\vec e\), \(\overrightarrow{MB}=4\vec e\), nên tổng bằng \(\vec0\). Mỗi vectơ có độ dài 4 m.

    **Vì sao:** Đặt M ở tọa độ 4 m. Hai độ dời là các bội đối nhau của vectơ đơn vị \(\vec e\), do đó tổng triệt tiêu. Không đồng nhất vectơ với một số đo độ dài.

    **Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B08-02` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B08-P04` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

<!-- G10_CHIV_R04_END:THPT-G10-CHIV-TRY09 -->

<!-- G10_CHIV_R04_BEGIN:THPT-G10-CHIV-TRY10 OUTCOME=G10-B08-CENTROID -->

<span id="thpt-g10-chiv-try10" data-thpt-first-try-id="THPT-G10-CHIV-TRY10" data-outcome-id="G10-B08-CENTROID" data-thpt-help-ref="HELP-G10-B08-02"></span>

### Ba độ dời cân bằng tại trọng tâm

**Vì sao cần học:** Đặt điểm G ở trọng tâm một tam giác, ba vectơ hướng từ G đến các đỉnh cân bằng nhau khi cộng theo quy tắc vectơ.

**Kiến thức cần nhớ trước:** Biết M là trung điểm BC và G nằm trên trung tuyến AM với AG:GM=2:1; ở thời điểm này chưa cần tọa độ Oxy (B10). Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**Hiểu bản chất trước công thức:** Từ trung điểm: \(\overrightarrow{GB}+\overrightarrow{GC}=2\overrightarrow{GM}\). Vì G trên AM và AG=2GM nên \(\overrightarrow{GA}=-2\overrightarrow{GM}\); cộng lại được tổng ba vectơ bằng 0.

**Đọc hình như thế nào:** Đọc hình tam giác có trung tuyến A–G–M: hai mũi tên G→B và G→C có hợp vectơ hướng G→M; GA ngược chiều với GM. D5 kế thừa: `FIG-G10-B08-01`, không tạo hình mới, không thay XML/nhãn.

**Chọn phương pháp và giới hạn:** Đặt trung điểm và trọng tâm đúng vị trí trước khi viết công thức. Không suy tổng độ dài GA+GB+GC=0 vì các độ dài đều không âm.

**Tự thử trước Core:** Với M trung điểm BC và G trọng tâm ABC, biết \(\overrightarrow{GB}+\overrightarrow{GC}=2\overrightarrow{GM}\). Viết \(\overrightarrow{GA}\) theo \(\overrightarrow{GM}\) và tìm tổng ba vectơ từ G.

??? question "Em tự mở đối chiếu sau khi đã thử làm"

    **Kết quả:** \(\overrightarrow{GA}=-2\overrightarrow{GM}\), do đó \(\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0\).

    **Vì sao:** AG=2GM trên cùng trung tuyến, hai vectơ G→A và G→M ngược chiều. Đây là cân bằng vectơ, không phải cộng ba khoảng cách.

    **Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B08-02` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B08-P05` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

<!-- G10_CHIV_R04_END:THPT-G10-CHIV-TRY10 -->

<!-- G10_CHIV_FULL_R04_ALL_END -->

## 1. Kiến thức SGK


### 1. Quy tắc ba điểm (quy tắc tam giác)

 Với A,B,C tùy ý: $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$.

**Lưu ý:** Điểm cuối của vectơ thứ nhất B là điểm đầu của vectơ thứ hai; đảo BC thành CB có thể làm đổi kết quả.

### 2. Quy tắc hình bình hành

 Với hình bình hành ABCD, $\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}$.

**Điều kiện hình vẽ:** Hai cạnh được chọn phải cùng xuất phát từ **A**, đường chéo kết quả từ A đến C.

**Tính chất:** Phép cộng vectơ có giao hoán, kết hợp, phần tử không.

### 3. Vectơ đối và hiệu

 $-\overrightarrow{AB}=\overrightarrow{BA}$ và $\vec u-\vec v=\vec u+(-\vec v)$. 

**Hệ quả:** Quy tắc ba điểm suy ra $\overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{CB}$; phép trừ vectơ nói chung **không giao hoán**.

**Phần tử không và vectơ đối:** $\vec a+\vec0=\vec a$, $\vec a+(-\vec a)=\vec0$.

### 4. Trung điểm và trọng tâm

 M là trung điểm AB khi và chỉ khi $\overrightarrow{MA}+\overrightarrow{MB}=\vec0$.

**Trọng tâm:** G là trọng tâm tam giác ABC thì $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0$.

**Hệ quả trung điểm:** Đối với M trung điểm BC và E bất kì: $\overrightarrow{EB}+\overrightarrow{EC}=\overrightarrow{EM}+\overrightarrow{EM}$.

**Liên hệ:** Chú ý đây là quan hệ cộng vectơ đã có trong bài, không xây thêm phần Core riêng.

### 5. Ứng dụng hợp lực

 Nếu hai lực có cùng điểm đặt, hợp lực là đường chéo hình bình hành tạo bởi hai vectơ lực. Độ lớn hợp lực không bằng tổng các độ lớn nếu hai lực không cùng hướng. Bài toán hai lực vuông góc có thể dùng định lí Pitago.

## 2. Ví dụ

### Ví dụ 1. Rút gọn theo ba điểm

**Đề:** Rút gọn $\overrightarrow{AB}+\overrightarrow{BC}+\overrightarrow{CD}$.
**Giải:** Ghép $\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}$ rồi cộng $\overrightarrow{CD}$ được $\overrightarrow{AD}$.
**Điểm cần tự kiểm:** Điểm giữa phải nối đúng B rồi C; phép cộng không đổi khi thêm ngoặc hợp lí.

### Ví dụ 2. Quy tắc hình bình hành và hiệu

**Đề:** Trong hình bình hành ABCD, rút gọn $\overrightarrow{AB}+\overrightarrow{AD}$ và $\overrightarrow{AC}-\overrightarrow{AB}$.
**Giải:** Tổng là $\overrightarrow{AC}$. Vì $\overrightarrow{AC}=\overrightarrow{AB}+\overrightarrow{BC}$ nên hiệu $\overrightarrow{AC}-\overrightarrow{AB}=\overrightarrow{BC}=\overrightarrow{AD}$.
**Điểm cần tự kiểm:** Không nhầm kết quả với CA hoặc CB khi đổi hướng.

### Ví dụ 3. Trung điểm và trọng tâm

**Đề:** M là trung điểm BC của tam giác ABC, G là trọng tâm. Nêu hai hệ thức đặc trưng.
**Giải:** Vì M trung điểm BC: $\overrightarrow{MB}+\overrightarrow{MC}=\vec0$. Vì G trọng tâm tam giác ABC: $\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0$.
**Điểm cần tự kiểm:** Tổng ba vectơ phải đều xuất phát từ G; không thay tùy ý thành AB + BC + CA khi viện dẫn tính chất trọng tâm.

## 3. Hình minh họa

<figure class="thpt-r4-plot thpt-r4-probability-figure"><img src="../../../../assets/images/thpt/THPT_G10_B08_TRIANGLE_PARALLELOGRAM_SUM_D5_R01.svg" loading="lazy" alt="Vectơ và quy tắc ba điểm, hình bình hành"><figcaption>Vectơ và quy tắc ba điểm, hình bình hành.</figcaption></figure>

## 4. Tự khắc phục lỗi thường gặp

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="HELP-G10-B08-01"><summary>Nhầm hướng và thứ tự khi áp dụng quy tắc ba điểm/hiệu</summary><ol><li><strong>Tín hiệu:</strong> Học sinh trả lời sai trong B08-C01, B08-P02.</li><li><strong>Nguyên nhân:</strong> Nhầm các định nghĩa hoặc quy tắc vectơ đã học, không phải thiếu thêm công thức mới.</li><li><strong>Nguyên lí:</strong> Dùng đường gấp khúc đầu-cuối: AB + BC = AC; phép trừ đổi vectơ bị trừ thành vectơ đối.</li><li><strong>Tự sửa:</strong> Học sinh phải tự vẽ một sơ đồ mũi tên nhỏ, xác định điểm đầu/cuối và nêu ít nhất một lí do toán học, rồi thử lại câu cũ.</li><li><strong>Điểm quay lại:</strong> Làm B08-P02 và B08-P03.</li></ol><p><a href="../luyen-tap/">Quay lại luyện tập</a></p></details>
<details class="thpt-r4-pedagogical-note" data-thpt-help-id="HELP-G10-B08-02"><summary>Quên giao điểm trung điểm/trọng tâm, suy luận sai phép cộng và hợp lực</summary><ol><li><strong>Tín hiệu:</strong> Học sinh trả lời sai trong B08-P04, B08-P05, B08-P06.</li><li><strong>Nguyên nhân:</strong> Nhầm các định nghĩa hoặc quy tắc vectơ đã học, không phải thiếu thêm công thức mới.</li><li><strong>Nguyên lí:</strong> Phân biệt tính chất M trung điểm với G trọng tâm; cộng lực theo hình bình hành, không cộng độ lớn nếu lệch hướng.</li><li><strong>Tự sửa:</strong> Học sinh phải tự vẽ một sơ đồ mũi tên nhỏ, xác định điểm đầu/cuối và nêu ít nhất một lí do toán học, rồi thử lại câu cũ.</li><li><strong>Điểm quay lại:</strong> Làm B08-P04, B08-P05 và B08-P06.</li></ol><p><a href="../luyen-tap/">Quay lại luyện tập</a></p></details>

## 5. Tiếp tục

[Core và Luyện tập Bài 8](luyen-tap.md) · [Bài tự luận Chương IV](../../thu-vien/tu-luan-chuong-iv-b07-b08.md)
