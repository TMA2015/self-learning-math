# Bài 9. Tích của một vectơ với một số

<div class="thpt-r4-screen" data-thpt-r4><p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG IV · KIẾN THỨC SGK KNTT</p><p class="thpt-r4-lead">Học kiến thức và ví dụ, rồi luyện tập theo từng kĩ năng.</p><nav class="thpt-r4-lesson-tabs"><a href="../">Chương IV</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra · chưa kích hoạt</a></nav></div>

<!-- G10_CHIV_FULL_R04_ALL_BEGIN -->

## Tự khám phá trước công thức

Hãy hiểu bản chất và tự thử trước khi mở đối chiếu. Hoạt động công khai này không tính điểm Mastery hoặc kiểm tra độc lập cuối chương.

<!-- G10_CHIV_R04_BEGIN:THPT-G10-CHIV-TRY11 OUTCOME=G10-B09-SCALAR_DEFINITION -->

<span id="thpt-g10-chiv-try11" data-thpt-first-try-id="THPT-G10-CHIV-TRY11" data-outcome-id="G10-B09-SCALAR_DEFINITION" data-thpt-help-ref="HELP-G10-B09-01"></span>

### Nhân vectơ với số: phóng to, thu nhỏ, đổi chiều

**Vì sao cần học:** Trên bản đồ, một mũi tên dịch chuyển có thể được kéo dài gấp đôi hay đảo chiều mà vẫn nằm theo cùng phương; số nhân mô tả phép biến đổi này.

**Kiến thức cần nhớ trước:** Ôn vectơ có chiều và độ dài không âm, các số dương, âm, 0, vectơ-không của B07. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**Hiểu bản chất trước công thức:** Nhân một vectơ \(\vec u\) với số k giữ phương khi khác không, đổi độ dài theo \(|k|\), đổi hướng nếu k âm; k=0 biến thành \(\vec0\). Đây là ý nghĩa của \(k\vec u\), không phải phép cộng hai độ dài.

**Đọc hình như thế nào:** Đọc `FIG-G10-B09-01` từ cùng gốc, so chiều mũi tên đối với hệ số dương/âm và độ dài so với \(\vec u\). D5 kế thừa: `FIG-G10-B09-01`, không tạo hình mới, không thay XML/nhãn.

**Chọn phương pháp và giới hạn:** Kiểm k=0 hoặc \(\vec u=\vec0\) trước khi nói cùng/ngược hướng của một mũi tên có chiều. Không chia tỉ số khi vectơ gốc bằng 0.

**Tự thử trước Core:** Với \(\vec u\ne\vec0\), vectơ \(0\vec u\) là gì? Nó có độ dài bằng bao nhiêu?

??? question "Em tự mở đối chiếu sau khi đã thử làm"

    **Kết quả:** \(0\vec u=\vec0\), độ dài bằng 0.

    **Vì sao:** Vì \(|0\vec u|=|0|\,|\vec u|=0\); không cố gán hướng vật lý riêng cho vectơ-không.

    **Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B09-01` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B09-C02` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

<!-- G10_CHIV_R04_END:THPT-G10-CHIV-TRY11 -->

<!-- G10_CHIV_R04_BEGIN:THPT-G10-CHIV-TRY12 OUTCOME=G10-B09-LENGTH_DIRECTION -->

<span id="thpt-g10-chiv-try12" data-thpt-first-try-id="THPT-G10-CHIV-TRY12" data-outcome-id="G10-B09-LENGTH_DIRECTION" data-thpt-help-ref="HELP-G10-B09-01"></span>

### Dấu k quyết định chiều, |k| quyết định độ lớn

**Vì sao cần học:** Khi một robot quay trở lại theo đúng đường vừa đi nhưng gấp đôi độ dời, độ lớn tăng còn chiều đổi ngược.

**Kiến thức cần nhớ trước:** Biết phân biệt chiều, độ dài, vectơ đối và dấu hệ số k. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**Hiểu bản chất trước công thức:** Với vectơ khác không, \(k=-2\) làm mũi tên quay ngược và kéo dài gấp đôi; **độ dài** dùng \(|k|\), còn dấu chỉ ảnh hưởng **hướng**.

**Đọc hình như thế nào:** Trên `FIG-G10-B09-01`, đối chiếu \(\vec u\), \(2\vec u\), \(-2\vec u\) ở đầu mũi tên và tỉ lệ chiều dài. D5 kế thừa: `FIG-G10-B09-01`, không tạo hình mới, không thay XML/nhãn.

**Chọn phương pháp và giới hạn:** Hỏi 'k có âm không' để xét hướng; hỏi '|k| bằng mấy' để xét độ dài. Không ghi 'độ dài −6 m' dù k âm.

**Tự thử trước Core:** Một vectơ \(\vec u\) dài 3 m hướng Đông. Mô tả \(-2\vec u\): độ dài và hướng.

??? question "Em tự mở đối chiếu sau khi đã thử làm"

    **Kết quả:** \(-2\vec u\) dài 6 m và hướng Tây.

    **Vì sao:** Độ dài là 2×3=6, dấu âm khiến nó ngược hướng với \(\vec u\).

    **Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B09-01` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B09-C01` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

<!-- G10_CHIV_R04_END:THPT-G10-CHIV-TRY12 -->

<!-- G10_CHIV_R04_BEGIN:THPT-G10-CHIV-TRY13 OUTCOME=G10-B09-DISTRIBUTION -->

<span id="thpt-g10-chiv-try13" data-thpt-first-try-id="THPT-G10-CHIV-TRY13" data-outcome-id="G10-B09-DISTRIBUTION" data-thpt-help-ref="HELP-G10-B09-01"></span>

### Phóng to cả chuyển động tổng cộng hoặc từng chặng

**Vì sao cần học:** Đi hai chặng rồi phóng to toàn bộ lộ trình theo một tỉ lệ cho cùng độ dời ròng như phóng to từng chặng rồi cộng.

**Kiến thức cần nhớ trước:** Nhớ phép cộng vectơ B08 và ý nghĩa nhân vectơ với số; dùng quy tắc tam giác. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**Hiểu bản chất trước công thức:** Do phép dời tỉ lệ theo từng thành phần, \(k(\vec u+\vec v)=k\vec u+k\vec v\). Cùng một vectơ có thể biểu diễn theo nhiều chặng, không được nhân k chỉ cho chặng đầu.

**Đọc hình như thế nào:** Trên sơ đồ hai mũi tên nối đầu–đuôi, hình dung phóng to đồng thời cả hai cạnh và đường chéo; với k âm cần đảo hướng toàn hình. D5 kế thừa: `FIG-G10-B09-01`, không tạo hình mới, không thay XML/nhãn.

**Chọn phương pháp và giới hạn:** Nhận ra biểu thức có ngoặc và một hệ số chung trước khi phân phối; không dùng phép phân phối lên độ dài \(|\vec u+\vec v|\) như một tổng số học.

**Tự thử trước Core:** Cho \(\vec u\) dài 2 đơn vị về Đông và \(\vec v\) dài 1 đơn vị về Bắc. Hãy mô tả \(2(\vec u+\vec v)\) và \(2\vec u+2\vec v\).

??? question "Em tự mở đối chiếu sau khi đã thử làm"

    **Kết quả:** Cả hai là vectơ có thành phần 4 đơn vị về Đông và 2 đơn vị về Bắc.

    **Vì sao:** Phóng đôi tổng hai chặng hoặc phóng đôi từng chặng dẫn đến cùng điểm cuối. Đây là đẳng thức vectơ, không có nghĩa độ dài bằng 4+2.

    **Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B09-01` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B09-P02` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

<!-- G10_CHIV_R04_END:THPT-G10-CHIV-TRY13 -->

<!-- G10_CHIV_R04_BEGIN:THPT-G10-CHIV-TRY14 OUTCOME=G10-B09-COLLINEAR -->

<span id="thpt-g10-chiv-try14" data-thpt-first-try-id="THPT-G10-CHIV-TRY14" data-outcome-id="G10-B09-COLLINEAR" data-thpt-help-ref="HELP-G10-B09-01"></span>

### Một đường chuyển động, nhiều vectơ

**Vì sao cần học:** Các mũi tên cùng nằm trên một đường có thể dài ngắn khác nhau và ngược chiều; vẫn cùng phương.

**Kiến thức cần nhớ trước:** Đã biết cùng phương B07 và nhân số B09; nhớ điều kiện cả hai vectơ khác không nếu diễn đạt tỉ lệ k khác 0. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**Hiểu bản chất trước công thức:** Hai vectơ khác không cùng phương khi vectơ nọ là bội khác 0 của vectơ kia; hệ số âm cho ngược hướng, hệ số dương cho cùng hướng. Trường hợp \(\vec0\) cần quy ước S1 riêng.

**Đọc hình như thế nào:** Đọc `FIG-G10-B09-01`: tìm cặp mũi tên nằm trên cùng giá hoặc giá song song; chiều chỉ phân biệt hướng chứ không phá cùng phương. D5 kế thừa: `FIG-G10-B09-01`, không tạo hình mới, không thay XML/nhãn.

**Chọn phương pháp và giới hạn:** Để kiểm cùng phương, tìm hệ số k sao cho \(\vec v=k\vec u\) khi \(\vec u\ne\vec0\). Không chia cho 0 hay suy bằng nhau chỉ từ cùng phương.

**Tự thử trước Core:** \(\vec v=-3\vec u\) và \(\vec u\ne\vec0\). Hai vectơ có cùng phương không? Cùng hướng không? Tỉ số độ dài bằng bao nhiêu?

??? question "Em tự mở đối chiếu sau khi đã thử làm"

    **Kết quả:** Cùng phương, ngược hướng, \(|\vec v|/|\vec u|=3\).

    **Vì sao:** Bội âm đổi chiều, độ lớn nhân với 3. Đây là phép mô tả phương/hướng, không phải hai vectơ bằng nhau.

    **Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B09-01` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B09-P05` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

<!-- G10_CHIV_R04_END:THPT-G10-CHIV-TRY14 -->

<!-- G10_CHIV_R04_BEGIN:THPT-G10-CHIV-TRY15 OUTCOME=G10-B09-MIDPOINT_CENTROID -->

<span id="thpt-g10-chiv-try15" data-thpt-first-try-id="THPT-G10-CHIV-TRY15" data-outcome-id="G10-B09-MIDPOINT_CENTROID" data-thpt-help-ref="HELP-G10-B09-02"></span>

### Tỉ lệ trung tuyến dẫn tới tỉ lệ vectơ

**Vì sao cần học:** Biết điểm M ở chính giữa AB hay G chia trung tuyến AM theo tỉ lệ 2:1 giúp tìm vị trí chỉ bằng phép nhân vectơ với số.

**Kiến thức cần nhớ trước:** Đã biết điểm M trung điểm BC, G trọng tâm ABC, hai điểm G và M nằm trên trung tuyến AM, độ dài AG:GM=2:1. Trạng thái tiền đề: `PREREQUISITE_CONFIRMED/RECALL_ONLY` từ phần định nghĩa tại bài này hoặc bài SGK trước; đoạn này nhắc lại đủ để không bắt học sinh chuyển trang.

**Hiểu bản chất trước công thức:** Vectơ cùng phương cùng chiều theo một đoạn cho phép đổi tỉ số độ dài thành hệ số có dấu: \(\overrightarrow{AG}=\frac23\overrightarrow{AM}\), trong khi \(\overrightarrow{GA}=-2\overrightarrow{GM}\).

**Đọc hình như thế nào:** Trên hình trung tuyến A–G–M, nhìn chiều A→M và G→A trước khi viết hệ số; cùng một tỉ số dài có thể cho hệ số âm khi đổi điểm đầu. D5 kế thừa: `FIG-G10-B09-01`, không tạo hình mới, không thay XML/nhãn.

**Chọn phương pháp và giới hạn:** Đặt thứ tự điểm trên đoạn trước, rồi chọn hệ số của đúng vectơ đích. Không nhầm AG/GM=2 với AG/AM=2.

**Tự thử trước Core:** Trong tam giác ABC, M là trung điểm BC, G là trọng tâm; nếu AM=9 cm thì AG bằng bao nhiêu? Viết \(\overrightarrow{AG}\) theo \(\overrightarrow{AM}\).

??? question "Em tự mở đối chiếu sau khi đã thử làm"

    **Kết quả:** AG=6 cm và \(\overrightarrow{AG}=\frac23\overrightarrow{AM}\).

    **Vì sao:** G nằm giữa A và M, AG:GM=2:1 nên AM gồm 3 phần, AG chiếm 2 phần. Hai vectơ A→G, A→M cùng hướng.

    **Đường tự sửa nếu mắc lỗi:** quay lại `HELP-G10-B09-02` (D6 R01), đọc lại mục PED3/PED5 ở trên, sau đó thử `THPT-G10-B09-P04` trong SGK Core/Practice R01. Câu Tự thử này là công khai và không ghi điểm thành thạo; không sử dụng làm kiểm tra độc lập cuối chương.

<!-- G10_CHIV_R04_END:THPT-G10-CHIV-TRY15 -->

<!-- G10_CHIV_FULL_R04_ALL_END -->

## 1. Kiến thức SGK

<span class="thpt-ap-knowledge-pilot" hidden aria-hidden="true"></span>

### 1. Định nghĩa và trường hợp đặc biệt

Cho $k\in\mathbb R$ và vectơ $\vec u$. 

**Độ dài:** Vectơ $k\vec u$ có độ dài $|k\vec u|=|k|\,|\vec u|$. 

**Hướng:** Nếu $\vec u\ne\vec0$, với $k>0$ thì $k\vec u$ cùng hướng $\vec u$; với $k<0$ thì ngược hướng. 

**Trường hợp đặc biệt:** Nếu $k=0$ hoặc $\vec u=\vec0$ thì $k\vec u=\vec0$. 

**Lưu ý:** Với vectơ-không, SGK/SBT KNTT có quy ước riêng về phương/hướng; không suy ra vectơ-không có một mũi tên vật lí khác 0.

### 2. Tính chất

**Các quy tắc cơ bản:**

- $k(\vec u+\vec v)=k\vec u+k\vec v$
- $(k+m)\vec u=k\vec u+m\vec u$
- $k(m\vec u)=(km)\vec u$
- $1\vec u=\vec u$
- $(-1)\vec u=-\vec u$

Nếu $\vec u$ và $\vec v$ **đều khác không**, chúng cùng phương khi và chỉ khi tồn tại $t\ne0$ sao cho $\vec v=t\vec u$. Trường hợp vectơ không phải kiểm riêng theo quy ước, không chia cho độ dài 0.

### 3. Trung điểm và trọng tâm

**Trung điểm:** Nếu $M$ là trung điểm $AB$ thì $\overrightarrow{AM}=\tfrac12\overrightarrow{AB}$; ngược lại, đẳng thức này xác định trung điểm. 

**Trọng tâm:** Nếu $G$ là trọng tâm tam giác $ABC$, $M$ là trung điểm $BC$ thì

\[
\overrightarrow{AG}=\tfrac23\overrightarrow{AM}=\tfrac13(\overrightarrow{AB}+\overrightarrow{AC}),
\quad \overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec0.
\]

Đây là liên hệ vận dụng từ Bài 8 (cộng vectơ) sang nhân với một số, không tạo item trùng với Bài 8.

### 4. Ứng dụng

Khi các vectơ biểu diễn dịch chuyển hay lực, $k$ thay đổi độ lớn và có thể đổi chiều. Không ghi độ dài âm hoặc cộng độ dài thay cho tổng vectơ khi các hướng khác nhau.

## 2. Ví dụ

### Ví dụ 1. Độ dài và hướng của tích với hệ số âm

**Đề:** Cho $|\vec u|=5$ cm, $\vec u\ne\vec0$, đặt $\vec v=-3\vec u$.  
**Giải:** Ta có $|\vec v|=|-3|\cdot5=15$ cm và $\vec v$ ngược hướng $\vec u$ vì hệ số âm.  
**Tự kiểm:** Không viết “độ dài = −15 cm”.

### Ví dụ 2. Trung điểm và vectơ đối

**Đề:** Cho $AB=12$ cm và $M$ là trung điểm $AB$. Biểu thị $\overrightarrow{AM},\overrightarrow{MB},\overrightarrow{MA}$ qua $\overrightarrow{AB}$.  
**Giải:** $\overrightarrow{AM}=\tfrac12\overrightarrow{AB}$, $\overrightarrow{MB}=\tfrac12\overrightarrow{AB}$, $\overrightarrow{MA}=-\tfrac12\overrightarrow{AB}$. Mỗi độ dài bằng 6 cm.  
**Tự kiểm:** Đừng đổi nhầm MA với AM.

### Ví dụ 3. Trọng tâm qua tổng vectơ

**Đề:** Gọi $G$ là trọng tâm $ABC$, $M$ là trung điểm $BC$. Hãy biểu thị $\overrightarrow{AG}$ theo $\overrightarrow{AB},\overrightarrow{AC}$.  
**Giải:** $\overrightarrow{AG}=\tfrac23\overrightarrow{AM}$ và $2\overrightarrow{AM}=\overrightarrow{AB}+\overrightarrow{AC}$, suy ra $\overrightarrow{AG}=\tfrac13(\overrightarrow{AB}+\overrightarrow{AC})$.  
**Tự kiểm:** AG:GM=2:1, nhưng AG:AM=2:3.

## 3. Hình minh họa

<figure class="thpt-r4-plot thpt-r4-probability-figure"><img src="../../../../assets/images/thpt/THPT_G10_B09_SCALAR_MULTIPLE_VECTORS_D5_R01.svg" loading="lazy" alt="Nhân một vectơ với số: cùng hướng, ngược hướng và vectơ không"><figcaption>Nhân một vectơ với số: cùng hướng, ngược hướng và vectơ không.</figcaption></figure>

## 4. Tự khắc phục lỗi thường gặp

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="HELP-G10-B09-01"><summary>Độ dài âm khi k âm hoặc nhầm quy tắc hướng</summary><ul><li>Điểm nghẽn: Nhầm $|k\vec u|$ với $k|\vec u|$.</li><li>Bản chất cần sửa: Phân biệt hệ số (có dấu) với độ dài (không âm).</li><li>Quy trình 5 bước: 1. Viết $|k|$. 2. Tính độ dài. 3. Xét dấu k khi $\vec u\ne\vec0$. 4. Kiểm k=0 riêng. 5. Làm lại B09-C01 rồi P05.</li><li>Liên kết item có sẵn: B09-C01, B09-P01, B09-P05. Không clone câu hoặc giải vào HELP_ID.</li><li>Assessment safety: hỗ trợ chỉ tại Knowledge/Practice, không hiển thị trong phiên Tự kiểm tra trước Final Submit.</li></ul><p><a href="../luyen-tap/">Quay lại luyện tập</a></p></details>
<details class="thpt-r4-pedagogical-note" data-thpt-help-id="HELP-G10-B09-02"><summary>Nhầm tỉ số trung điểm/trọng tâm với tỉ số vectơ</summary><ul><li>Điểm nghẽn: Viết sai chiều MA/AM hoặc hệ số AG/AM.</li><li>Bản chất cần sửa: Đọc điểm đầu-cuối; lấy đúng 2/3 trung tuyến, 1/3 tổng AB+AC.</li><li>Quy trình 5 bước: 1. Vẽ ABC và M trung điểm BC. 2. Xác định chiều từng vectơ. 3. Dùng AM=(AB+AC)/2. 4. Suy AG=2AM/3. 5. Tự thử B09-P04.</li><li>Liên kết item có sẵn: B09-P03, B09-P04, W09. Không clone câu hoặc giải vào HELP_ID.</li><li>Assessment safety: hỗ trợ chỉ tại Knowledge/Practice, không hiển thị trong phiên Tự kiểm tra trước Final Submit.</li></ul><p><a href="../luyen-tap/">Quay lại luyện tập</a></p></details>

## 5. Tiếp tục

[Core và Luyện tập Bài 9](luyen-tap.md) · [Bài tự luận Chương IV](../../thu-vien/tu-luan-chuong-iv-b09-b11.md)
