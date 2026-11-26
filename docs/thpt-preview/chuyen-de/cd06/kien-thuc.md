---
hide:
  - toc
---

<div class="thpt-r4-screen topic-w1-release-nav" data-thpt-r4 data-topic-w1="06" data-topic-w1-part="kien-thuc">
<p class="thpt-r4-eyebrow">HỌC THEO CHUYÊN ĐỀ · CĐ06 · TOÁN THPT</p>
<nav class="thpt-sgk-lesson-nav" aria-label="Điều hướng Chuyên đề 06">
<a href="../../cd05/kien-thuc/">← Chuyên đề trước</a>
<a href="../../cd07/kien-thuc/">Chuyên đề sau →</a>
<a href="../luyen-tap/">Luyện tập</a>
<a href="../tu-kiem-tra/">Tự kiểm tra</a>
</nav>
<p class="topic-w1-back"><a href="../../">← Tổng quan các Chuyên đề</a></p>

<p class="thpt-r4-lead topic-w1-source-intro" hidden aria-hidden="true"></p>
<p class="thpt-r4-knowledge-note topic-w2-model-link">Khám phá thêm: <a href="../../../math-lab/models/slm-top06-unit-circle-01/">Mô hình trực quan Chuyên đề 06</a> (tùy chọn).</p>
</div>
<link rel="stylesheet" href="../../../../assets/stylesheets/thpt-topic-w1-golden-v1.css">
<script src="../../../../assets/javascripts/thpt-topic-w2-golden-v1.js" defer></script>
<div class="topic-w1-boot-status" role="status" aria-live="polite">Đang chuẩn bị kiến thức…</div>
<script>
(function(){var h=document.documentElement;h.classList.add("topic-w1-pending");
 document.addEventListener("DOMContentLoaded",function(){setTimeout(function(){
 if(!h.classList.contains("topic-w1-pending"))return;h.classList.remove("topic-w1-pending");h.classList.add("topic-w1-fallback");
 var status=document.querySelector(".topic-w1-boot-status");if(status)status.textContent="Giao diện tương tác chưa tải được. Nội dung gốc vẫn có thể đọc bên dưới.";
 },0)},{once:true});})();
</script>
<span data-topic-w1-source-start="kien-thuc" hidden></span>

<!-- TOPIC06_APPROVED_SOURCE_START -->
<!-- Q18 SOURCE_LEARNER_BLOB 621afad176e6944f832746b231cbd9265e96bce2; Q18_RECEIPT_BLOB 07e70b50c23db3caaa87254e1bd0236bd76dd1c0; AUTHORING_PR #891; PUBLIC_PROJECTION_ONLY -->

# Kiến thức

## 1. Góc quay và tọa độ trên đường tròn

Khi bánh xe quay, điều quan trọng không chỉ là nó đã quay một góc bao nhiêu độ mà còn là **theo chiều nào** và **bao nhiêu vòng**. Ta có thể đánh dấu một điểm trên vành bánh xe: trong quá trình quay, hoành độ và tung độ của điểm này thay đổi rồi lặp lại. Chính hai tọa độ ấy dẫn đến \(\cos\) và \(\sin\). Nếu hiểu góc có hướng và đường tròn trước, các dấu, công thức và đồ thị tuần hoàn về sau đều có lý do hình học.

Trước hết hãy xem tia cuối của một góc được xác định ra sao, vì sao hai góc khác nhau có thể cùng tia cuối và tại sao không thể bỏ qua số vòng khi tính quãng đường chuyển động.

<!-- LESSON_ID: TOP06-M01; OUTCOME_ID: TOP06-O01; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

### 1.1. Độ và radian của góc có hướng

Hai góc cùng tia cuối có kể cùng số vòng quay không?

Khi quay một chiếc kim, ta có thể quay theo hoặc ngược chiều kim đồng hồ, quay chưa hết một vòng hay nhiều vòng. Một **góc lượng giác** được xác định bởi tia đầu, tia cuối và chuyển động quay theo một chiều nhất định. Chiều quay ngược kim đồng hồ được quy ước dương, chiều thuận kim đồng hồ là âm. Với cùng tia đầu và tia cuối, ta có thể quay thêm số vòng nguyên tùy ý, nên số đo của các góc lượng giác ấy sai khác nhau bội của \(360^\circ\), hay \(2\pi\) radian. Đơn vị radian gắn số đo góc với độ dài cung tròn: trên đường tròn bán kính r, góc ở tâm chắn cung có độ dài đúng bằng r có số đo **1 radian**. Nếu cung dài gấp hai bán kính thì góc bằng 2 radian. Nói chung, số đo góc không âm bằng \(\frac sr\), với s là độ dài cung; khi xét góc có hướng, thêm dấu của chiều quay. Một vòng có cung dài \(2\pi r\), nên số đo bằng \(2\pi\) radian.

Khi ghép hai lần quay liên tiếp từ \(Ou\) đến \(Ov\), rồi từ \(Ov\) đến \(Ow\), ta được một lần quay từ \(Ou\) đến \(Ow\), nhưng có thể khác số vòng. Từ đó có **hệ thức Chasles**, công cụ giúp tính góc từ các tia mà không cần đo lại trên hình:

> **TÍNH CHẤT — Hệ thức Chasles.** Với ba tia \(Ou,Ov,Ow\) cùng gốc \(O\), số đo góc lượng giác thỏa
>
> \[
> \operatorname{sđ}(Ou,Ov)+\operatorname{sđ}(Ov,Ow)=\operatorname{sđ}(Ou,Ow)+2k\pi,\qquad k\in\mathbb Z.
> \]
>
> Nếu đo bằng độ, thay \(2k\pi\) bằng \(360^\circ k\). Suy ra \(\operatorname{sđ}(Ou,Ov)=\operatorname{sđ}(Ox,Ov)-\operatorname{sđ}(Ox,Ou)+2k\pi\) khi cùng dùng radian. Đây là **đẳng thức theo lớp góc cùng tia cuối**, không phải khẳng định hai phép quay thực hiện đúng bằng số vòng.

Chẳng hạn, từ trục \(Ox\) quay đến \(Ou\) được \(60^\circ\), còn từ \(Ox\) quay đến \(Ov\) được \(150^\circ\), thì góc từ \(Ou\) đến \(Ov\) có các số đo \(150^\circ-60^\circ+360^\circ k=90^\circ+360^\circ k\). Hệ thức cho các góc cùng tia cuối; nếu bài hỏi số vòng quay thực tế, phải giữ số đo của chuyển động cụ thể.

> **CÔNG THỨC — Đổi độ và radian.** Một vòng tròn ứng với \(360^\circ=2\pi\) radian. Vì vậy \(\alpha_{\mathrm{rad}}=\alpha_{\mathrm{độ}}\cdot\frac{\pi}{180}\); khi đổi ngược, nhân số radian với \(\frac{180}{\pi}\). Với góc có hướng, giữ nguyên dấu của phép quay. Hai góc chênh nhau \(2k\pi\) có cùng tia cuối nhưng không nhất thiết cùng số vòng quay. Khi sử dụng ký hiệu \(\operatorname{sđ}(Ou,Ov)\), cần biết đang tính theo độ hay radian để không trộn \(360^\circ\) với \(2\pi\).

Chẳng hạn, quay \(-450^\circ\) nghĩa là quay một vòng và thêm \(90^\circ\) theo chiều âm. Đổi sang radian: \(-450\cdot\frac{\pi}{180}=-\frac{5\pi}{2}\). Điểm cuối của góc này trùng điểm cuối \(-\frac{\pi}{2}\), nhưng phép quay đầu tiên thực hiện thêm một vòng. Vì vậy khi gặp yêu cầu tính độ dài cung hoặc số vòng, không thể tùy ý thay mọi góc bằng góc cùng tia cuối nếu mất thông tin về chuyển động.

**Ví dụ**

**Đề bài.** Quay \(585^\circ\) ngược chiều kim đồng hồ. Đổi sang radian và tìm góc cùng tia cuối trong \([0;2\pi)\).

**Lời giải.** \(585\cdot\frac{\pi}{180}=\frac{13\pi}{4}\) radian. Trừ \(2\pi\) được \(\frac{5\pi}{4}\). Tia cuối trùng nhau, nhưng góc \(\frac{13\pi}{4}\) ghi cả một vòng nhiều hơn góc đại diện; không bỏ số vòng nếu bài hỏi chuyển động.

**Vận dụng**

Đổi \(-150^\circ\) sang radian, rồi cho biết góc quay mang dấu gì.

<details markdown="1"><summary>Đối chiếu</summary>

\(-150\cdot\frac{\pi}{180}=-\frac{5\pi}{6}\) radian. Dấu âm cho biết chiều quay thuận kim đồng hồ. Nếu em làm mất dấu, hãy so vị trí cuối của \(+90^\circ\) và \(-90^\circ\) trên đường tròn.

**Kiểm lỗi**

Nếu em đổi độ sang radian nhưng bỏ dấu quay hoặc thay góc ban đầu bằng góc đại diện mà quên số vòng, đọc lại **Kiến thức 1.1** rồi làm **Bài 1** (đổi độ sang radian, xác định góc phần tư) và **Bài 6** (góc âm và tia cuối) trong Luyện tập. Giữ nguyên góc quay gốc khi đề hỏi chuyển động đã thực hiện.

</details>

<!-- LESSON_ID: TOP06-M02; OUTCOME_ID: TOP06-O02; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

### 1.2. Sin/cos từ tọa độ đường tròn

Dấu sin và cos khác nhau ở hai phía của trục Oy vì sao?

Trên đường tròn đơn vị, dấu của sin và cos được đọc từ tọa độ. Làm sao biết dấu sin, cos trước khi tính giá trị chính xác? Ta đã biết đường tròn đơn vị, tọa độ \((x;y)\).

> **ĐỊNH NGHĨA — Sin, côsin trên đường tròn đơn vị.** Với điểm cuối \(M=(x;y)\) ứng với góc lượng giác \(\alpha\) trên đường tròn đơn vị, \(\cos\alpha=x\), \(\sin\alpha=y\). Vì vậy các dấu phụ thuộc góc phần tư; \(\tan\alpha=\frac{\sin\alpha}{\cos\alpha}\) chỉ khi \(\cos\alpha\ne0\), còn \(\cot\alpha=\frac{\cos\alpha}{\sin\alpha}\) chỉ khi \(\sin\alpha\ne0\).



Chẳng hạn, tại góc \(135^\circ\) (góc phần tư II) trên hình, \(\cos135^\circ=-\frac{\sqrt2}{2}\) là **hoành độ âm**, còn \(\sin135^\circ=\frac{\sqrt2}{2}\) là **tung độ dương**. Vì điểm M nằm trên đường tròn đơn vị, tọa độ của nó thỏa \(x^2+y^2=1\). Thay \(x=\cos\alpha\) và \(y=\sin\alpha\), ta có \(\cos^2\alpha+\sin^2\alpha=1\). Nhờ đó, không cần biết góc đặc biệt: nếu \(\sin\alpha=\frac45\) và \(\alpha\) ở phần tư II, thì \(\cos^2\alpha=1-\frac{16}{25}=\frac9{25}\). Hoành độ âm nên \(\cos\alpha=-\frac35\), rồi \(\tan\alpha=-\frac43\). Cả hai trường hợp đều phải chọn dấu từ góc phần tư trước khi lấy căn.

![Đường tròn đơn vị và dấu sin cos theo góc](../../../assets/visuals/THPT_TOPIC06_UNIT_CIRCLE_QUADRANTS_R01.svg)

*Đọc hình:* Điểm \(M\) ở \(135^\circ\) có tọa độ \((-\frac{\sqrt2}{2};\frac{\sqrt2}{2})\). Hãy đọc dấu âm ở trục ngang và dấu dương ở trục đứng; chỉ sau đó mới gắn các giá trị \(\cos\), \(\sin\). Hình minh họa góc cụ thể, còn quy tắc đúng ở mọi góc phần tư.

**Bảng giá trị lượng giác của các góc thường gặp** là kết quả từ tọa độ trên đường tròn và tam giác vuông đặc biệt. Khi cần tính góc khác, hãy giảm về góc cùng tia cuối và dùng đối xứng để chọn đúng dấu.

| Góc | \(0\) | \(\frac{\pi}{6}\) | \(\frac{\pi}{4}\) | \(\frac{\pi}{3}\) | \(\frac{\pi}{2}\) |
|---|---:|---:|---:|---:|---:|
| \(\sin\) | \(0\) | \(\frac12\) | \(\frac{\sqrt2}{2}\) | \(\frac{\sqrt3}{2}\) | \(1\) |
| \(\cos\) | \(1\) | \(\frac{\sqrt3}{2}\) | \(\frac{\sqrt2}{2}\) | \(\frac12\) | \(0\) |
| \(\tan\) | \(0\) | \(\frac{\sqrt3}{3}\) | \(1\) | \(\sqrt3\) | Không xác định |
| \(\cot\) | Không xác định | \(\sqrt3\) | \(1\) | \(\frac{\sqrt3}{3}\) | \(0\) |

Để dùng **máy tính cầm tay**, trước tiên chọn chế độ góc **DEG** khi số đo bằng độ hoặc **RAD** khi bằng radian. Sau đó dùng phím \(\sin,\cos,\tan\) (hoặc các phím nghịch đảo khi cần tìm góc). Ví dụ \(\sin30^\circ=\frac12\) trong chế độ DEG, còn \(\sin(\frac{\pi}{6})=\frac12\) trong RAD; nếu chọn sai chế độ sẽ cho kết quả khác. Giá trị tìm bằng máy có thể là gần đúng; khi đề cần giá trị chính xác, ưu tiên bảng góc đặc biệt, công thức và biến đổi.

**Ví dụ**

**Đề bài.** Biết \(\cos\alpha=-\frac{12}{13}\), góc \(\alpha\) thuộc phần tư II. Tính \(\sin\alpha,\tan\alpha\).

**Lời giải.** \(\sin^2\alpha=1-\frac{144}{169}=\frac{25}{169}\). Phần tư II sin dương nên \(\sin\alpha=\frac5{13}\); cos khác 0 nên \(\tan\alpha=-\frac5{12}\). Chọn dấu theo góc phần tư trước khi lấy căn.

**Vận dụng**

\(\sin\alpha=-\frac35\), \(\alpha\) thuộc góc phần tư IV; \(\cos\alpha\) bằng bao nhiêu?

<details markdown="1"><summary>Đối chiếu</summary>

\(\frac45\) vì cos dương ở góc IV.

Nếu ra \(-\frac45\), xem lại trục hoành phía phải; làm lại Bài 2 và Bài 7 trong phần Luyện tập.

</details>

<!-- LESSON_ID: TOP06-M03; OUTCOME_ID: TOP06-O03; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

### 1.3. Cung hình học và độ dời có hướng

Quãng đường đi có âm khi kim quay thuận chiều không?

> **TÍNH CHẤT — Cung hình học và độ dời có hướng.** Các góc khác số đo vẫn có thể dẫn tới cùng vị trí trên đường tròn. Đo được quãng đường trên một vòng cung từ góc ở tâm bằng cách nào? Ta sử dụng định nghĩa radian và chu vi \(2\pi r\). Độ dài cung hình học \(s=r\lvert\theta\rvert\) với \(\theta\) tính bằng radian, \(r>0\); độ dời theo chiều quay \(d=r\theta\) giữ dấu. Góc chênh \(2k\pi\) có cùng tia cuối nhưng cung quét có thể khác nhiều vòng.

Xét ví dụ: Bánh xe bán kính 7 cm quay \(-120^\circ\), tức \(-\frac{2\pi}{3}\) radian: độ dời theo chiều quay là \(-\frac{14\pi}{3}\,\mathrm{cm}\), độ dài quãng đường là \(\frac{14\pi}{3}\,\mathrm{cm}\). Trước hết đổi radian để đơn vị đúng.

**Ví dụ**

**Đề bài.** Một bánh xe bán kính \(9\) cm quay \(-240^\circ\). Tìm độ dời cung có hướng và quãng đường trên vành.

**Lời giải.** \(-240^\circ\) tương ứng \(-\frac{4\pi}{3}\) radian. Độ dời \(d=r\theta=-12\pi\) cm, quãng đường \(s=r\lvert\theta\rvert=12\pi\) cm. Độ dài quãng đường phải không âm.

**Vận dụng**

Bán kính 3, quay \(\frac{3\pi}{2}\) radian: cung dài bao nhiêu?

<details markdown="1"><summary>Đối chiếu</summary>

\(\frac{9\pi}{2}\); góc đã ở radian.

Nếu nhân bán kính với số đo góc bằng độ trực tiếp, đổi \(270^\circ=\frac{3\pi}{2}\) radian rồi tính lại. Hãy làm lại Bài 4 và Bài 8 trong phần Luyện tập.

</details>

## 2. Công thức lượng giác có điều kiện

Trên đường tròn bán kính 1, một điểm luôn thỏa \(x^2+y^2=1\). Thay \(x=\cos\alpha\), \(y=\sin\alpha\), ta hiểu được hệ thức nền tảng trước khi ghi nhớ. Khi đổi góc, các điểm trên đường tròn quay hoặc phản xạ; công thức cộng, trừ và góc nhân đôi là cách diễn tả những phép biến đổi hình học ấy bằng ký hiệu. Vì vậy cần kiểm đúng góc và dấu, không chỉ áp dụng công thức theo mẫu.

Các công thức không phải những dòng cần học thuộc riêng lẻ: chúng phát triển từ vị trí điểm trên đường tròn, điều kiện tan/cot và phép cộng hai góc. Ta sẽ lần lượt kiểm nghiệm chúng bằng những trường hợp cụ thể.

<!-- LESSON_ID: TOP06-M04; OUTCOME_ID: TOP06-O04; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

### 2.1. Hệ thức lượng giác cùng điều kiện

Khi nào các tỉ số tan/cot không được phép sử dụng?

Có thể tìm một giá trị lượng giác từ các giá trị còn lại không? Ta bắt đầu từ định lí Pythagore trên đường tròn đơn vị: \(\cos^2 x+\sin^2 x=1\).

> **TÍNH CHẤT — Hệ thức cơ bản và điều kiện.** Với mọi \(x\in\mathbb R\), \(\sin^2x+\cos^2x=1\). Chia hai vế cho \(\cos^2x\) khi \(\cos x\ne0\), ta được \(1+\tan^2x=\frac1{\cos^2x}\). Chia hai vế cho \(\sin^2x\) khi \(\sin x\ne0\), ta được \(1+\cot^2x=\frac1{\sin^2x}\). Khi cả \(\sin x\ne0\) và \(\cos x\ne0\), nhân hai tỉ số \(\tan x=\frac{\sin x}{\cos x}\) và \(\cot x=\frac{\cos x}{\sin x}\) cho \(\tan x\cdot\cot x=1\). Điều kiện này tương đương \(x\ne\frac{k\pi}{2}\) với \(k\in\mathbb Z\). Không dùng các hệ thức có mẫu bằng 0.

Chẳng hạn tại \(x=0\), tang bằng 0 nhưng côtang không xác định; không thể kết luận tích bằng 1 tại đó.

Chẳng hạn, nếu \(\sin x=\frac35\) và \(x\) ở góc phần tư I: \(\cos x=\frac45\); \(\tan x=\frac34\). Nếu \(\sin x=0\) thì \(\cot x\) không xác định; dù hệ thức đã viết gọn thành tích bằng 1, điều kiện ban đầu vẫn phải giữ.

**Ví dụ**

**Đề bài.** Biết \(\sin\alpha=-\frac8{17}\), \(\alpha\) ở phần tư IV. Tìm cos và tan.

**Lời giải.** \(\cos^2\alpha=1-\frac{64}{289}=\frac{225}{289}\); cos dương ở phần tư IV nên \(\cos\alpha=\frac{15}{17}\). Vì cos khác 0, \(\tan\alpha=-\frac8{15}\). Không được chia cho cos tại góc mà cos bằng 0.

**Vận dụng**

Với \(x=\frac{\pi}{2}\), \(\tan x\) tồn tại không?

<details markdown="1"><summary>Đối chiếu</summary>

Không, \(\cos\left(\frac{\pi}{2}\right)=0\).

Ghi điều kiện trước khi áp dụng đẳng thức phân thức; làm lại Bài 10 và Bài 23 trong phần Luyện tập.

</details>

<!-- LESSON_ID: TOP06-M05; OUTCOME_ID: TOP06-O05; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

### 2.2. Góc liên quan và đối xứng

Phản xạ qua trục Oy đổi giá trị nào?

> **TÍNH CHẤT — Góc liên quan và đối xứng.** Những góc đối xứng trên đường tròn tạo ra các quy luật về giá trị lượng giác. Vì sao hai góc khác nhau có thể có sin bằng nhau nhưng cos trái dấu? Cần nhớ phép đối xứng qua trục \(Oy\) trên đường tròn. Đối xứng của điểm \((\cos\alpha;\sin\alpha)\) qua \(Oy\) biến góc \(\alpha\) thành \(\pi-\alpha\); do đó \(\sin(\pi-\alpha)=\sin\alpha\), \(\cos(\pi-\alpha)=-\cos\alpha\). Với \(-\alpha\): cos chẵn, sin lẻ. Lý do hình học đi trước việc học thuộc dấu.

Ngoài đối xứng bù và đối đã thấy, góc **phụ nhau** đổi vai trò hoành độ–tung độ: \(\sin(\tfrac{\pi}{2}-\alpha)=\cos\alpha\), \(\cos(\tfrac{\pi}{2}-\alpha)=\sin\alpha\). Góc hơn kém \(\pi\) đưa điểm tới điểm đối diện trên đường tròn nên \(\sin(\pi+\alpha)=-\sin\alpha\), \(\cos(\pi+\alpha)=-\cos\alpha\); vì cả tử và mẫu đổi dấu nên \(\tan(\pi+\alpha)=\tan\alpha\) khi \(\cos\alpha\ne0\). Có thể tự kiểm với \(\alpha=\frac{\pi}{6}\).

Từ các hệ thức của sin và cos, chia hai tọa độ theo định nghĩa tang, côtang để suy ra bảng sau. Chẳng hạn, đối với góc bù, tung độ giữ nguyên còn hoành độ đổi dấu, nên cả tang và côtang đổi dấu khi xác định.

| Góc liên quan | Tang | Côtang |
|---|---|---|
| \(-\alpha\) | \(-\tan\alpha\) | \(-\cot\alpha\) |
| \(\pi-\alpha\) | \(-\tan\alpha\) | \(-\cot\alpha\) |
| \(\frac{\pi}{2}-\alpha\) | \(\cot\alpha\) | \(\tan\alpha\) |
| \(\pi+\alpha\) | \(\tan\alpha\) | \(\cot\alpha\) |

Mỗi ô là giá trị của hàm ở góc trong cột đầu, với điều kiện cả hai biểu thức tương ứng đều xác định. Ở hàng góc phụ, chẳng hạn, \(\tan(\frac{\pi}{2}-\alpha)=\frac{\cos\alpha}{\sin\alpha}=\cot\alpha\) khi \(\sin\alpha\ne0\). Đổi vai trò hai tọa độ không có nghĩa bỏ qua mẫu số.

Chẳng hạn, \(\alpha=\frac{\pi}{6}\); góc \(\frac{5\pi}{6}\) đối xứng qua \(Oy\) nên \(\sin\left(\frac{5\pi}{6}\right)=\frac12\), \(\cos\left(\frac{5\pi}{6}\right)=-\frac{\sqrt3}{2}\). Dùng điểm trên đường tròn thay vì nhớ hai bảng dấu.

**Ví dụ**

**Đề bài.** Từ góc \(\frac{\pi}{4}\), tính \(\sin(\frac{3\pi}{4})\) và \(\cos(\frac{3\pi}{4})\) bằng đối xứng.

**Lời giải.** Vì \(\frac{3\pi}{4}=\pi-\frac{\pi}{4}\), đối xứng qua Oy giữ tung độ, đổi dấu hoành độ. Suy ra \(\sin(\frac{3\pi}{4})=\frac{\sqrt2}{2}\), \(\cos(\frac{3\pi}{4})=-\frac{\sqrt2}{2}\).

**Vận dụng**

So sánh \(\sin\left(-\frac{\pi}{3}\right)\) với \(\sin\left(\frac{\pi}{3}\right)\).

<details markdown="1"><summary>Đối chiếu</summary>

\(\sin\left(-\frac{\pi}{3}\right)=-\frac{\sqrt3}{2}\) do sin là hàm lẻ.

Vẽ trục Ox và phản xạ trên đường tròn; làm lại Bài 20 và Bài 24 trong phần Luyện tập.

</details>

<!-- LESSON_ID: TOP06-M06; OUTCOME_ID: TOP06-O06; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

### 2.3. Công thức cộng/trừ góc

Vì sao \(\sin(u+v)\) không thể luôn bằng \(\sin u+\sin v\)?

> **CÔNG THỨC — Công thức cộng/trừ góc.** Trên đường tròn đơn vị, hai vectơ xuất phát từ O đến hai điểm ứng với góc u và v có tọa độ \((\cos u;\sin u)\) và \((\cos v;\sin v)\). Tích vô hướng của hai vectơ có thể tính bằng tổng tích các tọa độ tương ứng, tức \(\cos u\cos v+\sin u\sin v\). Mặt khác, tích vô hướng bằng tích độ dài nhân côsin góc giữa hai vectơ; vì cả hai dài 1, và côsin là hàm chẵn, kết quả chính là \(\cos(u-v)\). So hai cách tính ta có
>
> \[
> \cos(u-v)=\cos u\cos v+\sin u\sin v.
> \]
>
> Thay v bằng \(-v\), dùng tính chẵn của côsin và tính lẻ của sin, ta được \(\cos(u+v)=\cos u\cos v-\sin u\sin v\). Để suy ra công thức sin, viết \(\sin(u+v)=\cos((\frac{\pi}{2}-u)-v)\). Áp dụng công thức côsin hiệu và các hệ thức của góc phụ nhau ở mục 2.2, ta được \(\sin(u+v)=\sin u\cos v+\cos u\sin v\). Thay \(v\) bằng \(-v\) cho công thức sin hiệu. Chẳng hạn, với \(u=v=\frac{\pi}{2}\), vế \(\sin(u+v)\) bằng 0 còn \(\sin u+\sin v\) bằng 2, nên không thể tách sin của tổng thành tổng các sin.

Đối với **tang của tổng/hiệu**, chia công thức cộng của sin cho công thức cộng của cos:

\[
\tan(u+v)=\frac{\tan u+\tan v}{1-\tan u\,\tan v},\qquad
\tan(u-v)=\frac{\tan u-\tan v}{1+\tan u\,\tan v}.
\]

Các dạng phân thức này chỉ dùng khi \(\cos u\ne0,\cos v\ne0\), đồng thời mẫu tương ứng khác \(0\) (tức \(\cos(u\pm v)\ne0\)); không triệt mẫu hay lấy tang của góc chưa xác định. Chẳng hạn \(\tan(\frac{\pi}{3}-\frac{\pi}{4})=\frac{\sqrt3-1}{1+\sqrt3}=2-\sqrt3\), còn \(\tan(\frac{\pi}{4}+\frac{\pi}{4})\) không xác định dù \(\tan(\frac{\pi}{4})\) tồn tại.

Chẳng hạn, \(\cos15^\circ=\cos(45^\circ-30^\circ)=\frac{\sqrt6+\sqrt2}{4}\). Chọn phép trừ vì 15° không có trong bảng cơ bản nhưng 45°, 30° thì có.

**Ví dụ**

**Đề bài.** Tính chính xác \(\cos105^\circ\) bằng công thức cộng.

**Lời giải.** Viết \(105^\circ=60^\circ+45^\circ\). \(\cos105^\circ=\cos60^\circ\cos45^\circ-\sin60^\circ\sin45^\circ=\frac{\sqrt2-\sqrt6}{4}\). Dấu âm hợp lý vì góc ở phần tư II.

**Vận dụng**

Tính \(\sin75^\circ\) từ \(45^\circ+30^\circ\).

<details markdown="1"><summary>Đối chiếu</summary>

\(\frac{\sqrt6+\sqrt2}{4}\).

Nếu ghi \(\sin45^\circ+\sin30^\circ\), thử \(u=v=\frac{\pi}{2}\) để tìm phản ví dụ. Hãy làm lại Bài 12 và Bài 25 trong phần Luyện tập.

</details>

<!-- LESSON_ID: TOP06-M07; OUTCOME_ID: TOP06-O07; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

### 2.4. Góc nhân đôi và đổi dạng

Có thể chọn dạng tích hay tổng để thuận lợi giải phương trình?

> **CÔNG THỨC — Góc nhân đôi và đổi dạng.** Công thức góc đôi và tích–tổng gắn liền với công thức cộng. Một tổ hợp \(\sin 2x\) hoặc \(\sin x\cos x\) có thể biến đổi gọn hơn ra sao? Ta đã biết công thức cộng; phân phối biểu thức. Lấy \(u=v=x\) trong công thức cộng được \(\sin 2x=2\sin x\cos x\) và \(\cos 2x=\cos^2 x-\sin^2 x\). Cộng/trừ các công thức cho \(u\pm v\) tạo biến đổi tích–tổng, tổng–tích. Chọn dạng đơn giản hóa theo mục tiêu, luôn giữ biểu thức xác định.

**CÔNG THỨC — Các dạng nhân đôi, tích–tổng và tổng–tích cần sử dụng.** Từ \(\cos(a-b)\) và \(\cos(a+b)\), lấy tổng để triệt hai tích sin, lấy hiệu để triệt hai tích cos; làm tương tự với công thức cộng của sin. Như vậy ta không cần học một bộ quy tắc rời rạc:

\[
\begin{aligned}
\sin 2a&=2\sin a\cos a,\\
\cos 2a&=\cos^2a-\sin^2a=2\cos^2a-1=1-2\sin^2a,\\
\tan 2a&=\frac{2\tan a}{1-\tan^2a}\quad(\cos a\ne0,\ \cos 2a\ne0).
\end{aligned}
\]

Từ hai dạng của công thức côsin góc đôi, chuyển vế và chia cho 2, ta được các **công thức hạ bậc**:

\[
\cos^2 a=\frac{1+\cos(2a)}2,\qquad \sin^2 a=\frac{1-\cos(2a)}2.
\]

Chẳng hạn, \(\cos^2(\frac{\pi}{8})=\frac{1+\cos(\frac{\pi}{4})}{2}=\frac{2+\sqrt2}{4}\). Vì \(\frac{\pi}{8}\) ở góc phần tư I, lấy căn dương được \(\cos(\frac{\pi}{8})=\frac{\sqrt{2+\sqrt2}}2\). Khi cần lấy căn để tìm sin hoặc cos, vẫn phải chọn dấu theo góc phần tư.

**Tích thành tổng** (dùng khi gặp tích của hai giá trị lượng giác, chẳng hạn để tính giá trị hoặc đưa về tổng):

\[
\begin{aligned}
\cos a\cos b&=\tfrac12[\cos(a-b)+\cos(a+b)],\\
\sin a\sin b&=\tfrac12[\cos(a-b)-\cos(a+b)],\\
\sin a\cos b&=\tfrac12[\sin(a+b)+\sin(a-b)].
\end{aligned}
\]

**Tổng thành tích** (dùng khi một tổng hoặc hiệu cần đặt nhân tử, chẳng hạn để giải phương trình):

\[
\begin{aligned}
\cos a+\cos b&=2\cos\tfrac{a+b}{2}\cos\tfrac{a-b}{2},\\
\cos a-\cos b&=-2\sin\tfrac{a+b}{2}\sin\tfrac{a-b}{2},\\
\sin a+\sin b&=2\sin\tfrac{a+b}{2}\cos\tfrac{a-b}{2},\\
\sin a-\sin b&=2\cos\tfrac{a+b}{2}\sin\tfrac{a-b}{2}.
\end{aligned}
\]

Thử \(a=b=0\) chỉ kiểm được một vài công thức, không phát hiện được dấu sai trong hiệu hai côsin vì hai vế đều bằng 0. Để kiểm dấu trừ trong \(\cos a-\cos b\), chọn \(a=\pi,\ b=0\): vế trái bằng \(-2\), còn \(-2\sin\frac{a+b}{2}\sin\frac{a-b}{2}=-2\). Có thể kiểm đầy đủ bằng cách khai triển ngược với công thức cộng. Ví dụ, \(\cos3x+\cos x=2\cos2x\cos x\); còn \(\sin3x\cos x=\frac12(\sin4x+\sin2x)\). Đối với tang, phải kiểm cả \(\cos a\ne0\) và mẫu \(1-\tan^2a\ne0\), thay vì áp công thức ở điểm không xác định.

Chẳng hạn, \(\sin 3x+\sin x=2\sin 2x\cos x\): đặt \(A=3x,\ B=x\) rồi dùng \(\sin A+\sin B=2\sin\frac{A+B}{2}\cos\frac{A-B}{2}\). Cách này phù hợp khi muốn đặt nhân tử hoặc xét nghiệm.

**Ví dụ**

**Đề bài.** Cho \(\cos x=\frac35\), \(\sin x=\frac45\). Tính \(\sin(2x),\cos(2x)\).

**Lời giải.** \(\sin(2x)=2\cdot\frac35\cdot\frac45=\frac{24}{25}\). \(\cos(2x)=(\frac35)^2-(\frac45)^2=-\frac7{25}\). Kiểm \((\frac{24}{25})^2+(-\frac7{25})^2=1\).

**Vận dụng**

Không dùng máy tính, viết \(\sin^2 x-\cos^2 x\) thành một hàm của \(2x\). Sau đó dùng công thức tích thành tổng để viết \(\sin(3x)\cos(2x)\) thành tổng.

<details markdown="1"><summary>Đối chiếu</summary>

Từ \(\cos(2x)=\cos^2 x-\sin^2 x\), đổi thứ tự hai số hạng cho \(\sin^2 x-\cos^2 x=-\cos(2x)\). Kiểm tại \(x=0\): hai vế cùng bằng \(-1\).

Áp dụng tích thành tổng với \(a=3x,\ b=2x\), được \(\sin(3x)\cos(2x)=\frac12[\sin(5x)+\sin x]\). Có thể nhân ngược công thức cộng của sin để tự kiểm. Nếu quên hệ số \(\frac12\), hãy thử \(x=\frac{\pi}{2}\) để thấy vế trái bằng 1 nhưng tổng chưa chia bằng 2. Hãy làm lại Bài 17, Bài 18 và Bài 26 trong phần Luyện tập.

</details>

## 3. Hàm lượng giác và các đồ thị tuần hoàn

Nếu góc tiếp tục tăng, hình chiếu của điểm trên đường tròn lúc đi lên, lúc đi xuống và trở về giá trị cũ sau một vòng. Đó là cách hàm \(y=\sin x\) xuất hiện: từ chuyển động tròn thành đường sóng. Các phép co giãn và dịch pha sẽ thay đổi biên độ, chu kỳ hoặc vị trí đỉnh nhưng không thay bản chất của một quy luật tuần hoàn.

Khi góc thay đổi liên tục, sin, cos, tan và cot trở thành hàm số có miền, chu kỳ, đối xứng và đồ thị. Quan sát sự lặp lại giúp hiểu vì sao một phương trình lượng giác thường có nhiều nghiệm.

<!-- LESSON_ID: TOP06-M08; OUTCOME_ID: TOP06-O08; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

### 3.1. Miền xác định của biểu thức lượng giác

Khi biểu thức có căn và mẫu chứa hàm lượng giác, phải giao những miền nào?

> **KIẾN THỨC CẦN GHI NHỚ — Miền xác định của biểu thức lượng giác.** Vì sao không phải mọi hàm lượng giác đều có miền xác định \(\mathbb R\)? Ta sử dụng khái niệm hàm số và mẫu số khác 0. Sin, cos xác định trên \(\mathbb R\), nhận giá trị trong \([-1;1]\). \(\tan x\) không xác định tại \(x=\frac{\pi}{2}+k\pi\); \(\cot x\) không xác định tại \(x=k\pi\), với \(k\in\mathbb Z\). Với biểu thức ghép như \(\sqrt{2\sin x-1}\), phải thêm điều kiện \(2\sin x-1\ge0\). Nếu có đồng thời căn, phân thức, tang hoặc côtang thì lấy **giao tất cả điều kiện**, không chỉ kiểm một biểu thức.

Xét ví dụ: Tìm \(D\) của \(f(x)=\sqrt{2\sin x-1}\): cần \(\sin x\ge\frac12\), nên \(x\in\left[\frac{\pi}{6}+2k\pi;\frac{5\pi}{6}+2k\pi\right]\), \(k\in\mathbb Z\). Chọn hình đường tròn hoặc đồ thị sin để xác định các cung đủ điều kiện.

**Ví dụ**

**Đề bài.** Tìm miền xác định của \(f(x)=\sqrt{1-2\cos x}\).

**Lời giải.** Cần \(1-2\cos x\ge0\), tức \(\cos x\le\frac12\). Trong mỗi vòng điều này đúng trên \([\frac{\pi}{3};\frac{5\pi}{3}]\); vậy \(D=\bigcup_{k\in\mathbb Z}[\frac{\pi}{3}+2k\pi;\frac{5\pi}{3}+2k\pi]\). Hai biên được nhận vì căn 0 có nghĩa.

**Vận dụng**

Tìm miền xác định của \(g(x)=\frac{\sqrt{2\sin x-1}}{\cos x}\).

<details markdown="1"><summary>Đối chiếu</summary>

Căn có nghĩa khi \(\sin x\ge\frac12\), tức \(x\in[\frac{\pi}{6}+2k\pi;\frac{5\pi}{6}+2k\pi]\) với \(k\in\mathbb Z\). Mẫu phải khác 0, nên trong mỗi khoảng trên phải loại \(x=\frac{\pi}{2}+2k\pi\). Vì thế miền xác định là

\[
D=\bigcup_{k\in\mathbb Z}\left([\tfrac{\pi}{6}+2k\pi;\tfrac{\pi}{2}+2k\pi)\cup(\tfrac{\pi}{2}+2k\pi;\tfrac{5\pi}{6}+2k\pi]\right).
\]

Hai đầu mút ngoài được nhận vì tử bằng 0 và mẫu khác 0.

Nếu chỉ kiểm điều kiện dưới căn, thử \(x=\frac{\pi}{2}\): căn có giá trị 1 nhưng mẫu bằng 0, nên phải loại. Nếu loại luôn hai đầu mút ngoài, thử \(x=\frac{\pi}{6}\): tử bằng 0 và mẫu khác 0, nên vẫn nhận. Hãy làm lại Bài 28 và Bài 39 trong phần Luyện tập.

</details>

<!-- LESSON_ID: TOP06-M09; OUTCOME_ID: TOP06-O09; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

### 3.2. Chu kỳ cơ bản và đối xứng

Hai điểm cùng độ cao đã đủ chứng minh chu kỳ chưa?

> **TÍNH CHẤT — Chu kỳ cơ bản và đối xứng.** Chu kỳ và đối xứng giúp đọc hàm lượng giác trên cả miền, không chỉ vài điểm. Làm thế nào dự đoán khi nào một dạng sóng lặp lại? Ta bắt đầu từ hàm số trên miền xác định; giá trị sin, cos trên vòng tròn. Hàm \(f\) có chu kỳ \(T>0\) khi \(x\pm T\) đều thuộc miền nếu \(x\) thuộc miền và \(f(x+T)=f(x)\) với mọi \(x\) thuộc miền. Sin và cos có chu kỳ cơ bản \(2\pi\); tan và cot có chu kỳ cơ bản \(\pi\). Sin, tan, cot là **hàm lẻ** trên miền đối xứng tương ứng, còn cos là **hàm chẵn**; đổi biến và nhân hệ số có thể làm chu kỳ khác. Để đọc chiều biến thiên, ta xét **từng khoảng**, không suy từ một vài điểm có cùng tung độ:
- \(\sin x\) tăng trên \([-\frac{\pi}{2}+2k\pi;\frac{\pi}{2}+2k\pi]\) và giảm trên \([\frac{\pi}{2}+2k\pi;\frac{3\pi}{2}+2k\pi]\).
- \(\cos x\) giảm trên \([2k\pi;\pi+2k\pi]\) và tăng trên \([\pi+2k\pi;2\pi+2k\pi]\).
- \(\tan x\) tăng trên mỗi khoảng \((-\frac{\pi}{2}+k\pi;\frac{\pi}{2}+k\pi)\).
- \(\cot x\) giảm trên mỗi khoảng \((k\pi;(k+1)\pi)\), với \(k\in\mathbb Z\).

Có thể đối chiếu ngay với đồ thị sin ở mục 3.3: từ \(0\) đến \(\frac{\pi}{2}\), đường cong đi lên; từ \(\frac{\pi}{2}\) đến \(\frac{3\pi}{2}\), nó đi xuống; từ \(\frac{3\pi}{2}\) đến \(2\pi\), nó lại đi lên. Nối hai phần tăng qua mốc \(0\) bằng tính tuần hoàn cho khoảng \([-\frac{\pi}{2};\frac{\pi}{2}]\). Các khoảng trên cho thấy một nhánh tăng/giảm trọn vẹn; tại các điểm **tiệm cận của tan/cot**, hàm không xác định nên không được gộp hai nhánh thành một khoảng. Tập giá trị sin/cos là \([-1;1]\), còn tan/cot là \(\mathbb R\), bởi mỗi nhánh tan/cot đi từ âm vô hạn đến dương vô hạn hoặc ngược lại.

Chẳng hạn, \(y=\sin(3x)\) có chu kỳ cơ bản \(\frac{2\pi}{3}\) vì tăng \(x\) lên \(\frac{2\pi}{3}\) làm góc tăng \(2\pi\). Hàm \(y=\cos(2x)+\sin(3x)\) có một chu kỳ là \(2\pi\), vì khi tăng \(x\) thêm \(2\pi\), hai đối số tăng lần lượt \(4\pi\) và \(6\pi\). Như vậy cả hai giá trị lượng giác đều lặp lại. Để khẳng định đây là chu kỳ dương nhỏ nhất, cần thêm chứng minh; chỉ tìm một chu kỳ chung chưa đủ.

**Ví dụ**

**Đề bài.** Tìm chu kỳ cơ bản của \(f(x)=\sin(5x)\).

**Lời giải.** Tăng \(x\) thêm \(\frac{2\pi}{5}\) làm đối số tăng \(2\pi\), nên lặp với mọi \(x\). Chu kỳ dương nhỏ nhất của sin theo đối số là \(2\pi\), vì thế \(5T=2\pi\) nhỏ nhất, tức \(T=\frac{2\pi}{5}\). Hai điểm có cùng tung độ chưa đủ chứng minh chu kỳ.

**Vận dụng**

Chu kỳ cơ bản của \(y=\cos(4x)\) là gì?

<details markdown="1"><summary>Đối chiếu</summary>

\(\frac{\pi}{2}\).

Nếu đo chu kỳ bằng cách nhìn một đỉnh, kiểm đỉnh tiếp theo và điều kiện trên mọi x. Hãy làm lại Bài 30 và Bài 40 trong phần Luyện tập.

</details>

<!-- LESSON_ID: TOP06-M10; OUTCOME_ID: TOP06-O10; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

### 3.3. Biên độ, pha và trục giữa

Biên độ khác dịch pha và trục giữa ra sao?

Với sin và cos, dịch pha làm đổi vị trí đỉnh nhưng giữ tính tuần hoàn. Đồ thị giúp đọc điều gì ngoài một bảng giá trị? Cần nhớ mỗi điểm đồ thị là \((x;f(x))\); chuyển dịch ngang/đứng. Hàm \(y=A\sin(\omega x+\varphi)+d\) với \(A\ne0,\ \omega\ne0\) có biên độ \(\lvert A\rvert\), chu kỳ \(\frac{2\pi}{\lvert\omega\rvert}\), trục giữa \(y=d\) và tập giá trị \([d-\lvert A\rvert;d+\lvert A\rvert]\). Pha dịch ngang \(-\frac{\varphi}{\omega}\); không nhầm chiều dấu. Nếu \(A=0\) hoặc \(\omega=0\), hàm hằng: mọi số dương đều là chu kỳ nên không có chu kỳ dương nhỏ nhất.

> **PHƯƠNG PHÁP — Biên độ, pha và trục giữa.** Trước hết, hình bên dưới vẽ \(y=\sin x\) trên một chu kỳ \([0;2\pi]\): đi qua \((0;0)\), cực đại 1 ở \(x=\frac{\pi}{2}\), về 0 ở \(\pi\), cực tiểu −1 ở \(\frac{3\pi}{2}\), rồi về 0 ở \(2\pi\). Khi kết hợp các phép biến đổi, ví dụ \(y=-2\sin(3x-\frac{\pi}{2})+1\) có biên độ 2, chu kỳ \(\frac{2\pi}{3}\), đường giữa \(y=1\), tập giá trị \([-1;3]\), dịch pha phải \(\frac{\pi}{6}\) trước khi lật và co giãn đứng. Hình gốc giải thích chu kỳ, **không phải hình của hàm đã biến đổi**.

![Đồ thị sin lặp sau một chu kỳ](../../../assets/visuals/THPT_TOPIC06_SINE_PERIOD_R01.svg)

*Đọc hình:* Đồ thị đang vẽ \(y=\sin x\) trên \([0;2\pi]\), đánh dấu các mốc 0, \(\frac{\pi}{2}\), \(\pi\), \(\frac{3\pi}{2}\), \(2\pi\) với tung độ lần lượt 0, 1, 0, −1, 0. Đó là chu kỳ gốc; khi học hàm \(\sin(3x-\frac{\pi}{2})\), phải **tính lại** chu kỳ và pha chứ không đo thẳng trên hình này.

**Ví dụ**

**Đề bài.** Với \(y=1+3\cos(2x+\frac{\pi}{3})\), tìm biên độ, chu kỳ, trục giữa, tập giá trị và dịch pha.

**Lời giải.** Biên độ 3, chu kỳ \(\pi\), trục giữa \(y=1\), tập giá trị \([-2;4]\). Do \(2x+\frac{\pi}{3}=2(x+\frac{\pi}{6})\), dịch pha trái \(\frac{\pi}{6}\) so với \(\cos(2x)\). Hình sin phía trên là đồ thị gốc. Hình dưới đây so sánh \(\cos(2x)\) với đúng hàm của ví dụ trên cùng hệ trục.

![So sánh cos(2x) và 1+3cos(2x+π/3) trên cùng hệ trục](../../../assets/visuals/THPT_TOPIC06_COS_PHASE_COMPARISON_R01.svg)

*Đọc hình:* Đỉnh của đường cos gốc tại \(x=0\) chuyển sang trái đến \(x=-\frac{\pi}{6}\). Khoảng cách hai đỉnh liên tiếp vẫn là \(\pi\); đường giữa chuyển từ \(y=0\) lên \(y=1\), khoảng cách từ đường giữa tới đỉnh tăng từ 1 lên 3. Đáy mới bằng −2, đỉnh mới bằng 4.

**Vận dụng**

\(y=3\cos(2x)+4\) có giá trị lớn nhất, nhỏ nhất là bao nhiêu?

<details markdown="1"><summary>Đối chiếu</summary>

7 và 1.

Nếu tìm sai giá trị lớn nhất, nhỏ nhất của \(y=3\cos(2x)+4\), hãy dùng \(-1\le\cos(2x)\le1\) để được ngay \(1\le y\le7\), rồi làm lại Bài 33 (tập giá trị) và Bài 41 (trục giữa, biên độ và chu kỳ) trong phần Luyện tập. Nếu nhầm chiều dịch pha của ví dụ \(y=1+3\cos(2x+\pi/3)\), hãy viết \(2x+\pi/3=2(x+\pi/6)\) để nhận ra dịch trái \(\pi/6\); luyện thêm Bài 34 về chu kỳ của hàm cos có pha.

</details>

<!-- LESSON_ID: TOP06-M11; OUTCOME_ID: TOP06-O11; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

### 3.4. Nhánh tan/cot và tiệm cận đứng

Có thể nối hai nhánh tan qua tiệm cận không?

Đồ thị tan và cot có điểm cấm, nên phải tách thành từng nhánh. Tại sao đồ thị tan không nối liền qua \(x=\frac{\pi}{2}\)? Để xác định điều đó, cần xét \(\tan x=\frac{\sin x}{\cos x}\), \(\cot x=\frac{\cos x}{\sin x}\). Tan có miền \(\mathbb R\setminus\left\{\frac{\pi}{2}+k\pi:k\in\mathbb Z\right\}\), chu kỳ \(\pi\) và tiệm cận đứng ở điểm loại. Cot có miền \(\mathbb R\setminus\{k\pi:k\in\mathbb Z\}\), chu kỳ \(\pi\) và tiệm cận đứng tại các điểm đó. **Mỗi nhánh tan đồng biến, mỗi nhánh cot nghịch biến** trên khoảng nằm giữa hai tiệm cận liên tiếp. Đồ thị chia nhánh, không nối qua tiệm cận.

> **TÍNH CHẤT — Nhánh tan/cot và tiệm cận đứng.** Trên hình, \(y=\tan x\) không xác định tại \(x=\pm\frac{\pi}{2}\) (và nói chung \(\frac{\pi}{2}+k\pi\)), vì \(\cos x=0\). Những đường này là **tiệm cận đứng**, không phải điểm để nối các nhánh. Nếu thay đối số thành \(2x\), hàm \(y=\tan(2x)\) sẽ có điểm loại tại \(x=\frac{\pi}{4}+\frac{k\pi}{2}\) và chu kỳ cơ bản \(\frac{\pi}{2}\). Hình đang minh họa \(\tan x\), không vẽ phiên bản \(\tan(2x)\).

![Đồ thị tan với tiệm cận đứng](../../../assets/visuals/THPT_TOPIC06_TAN_ASYMPTOTES_R01.svg)

*Đọc hình:* Các nhánh của \(y=\tan x\) tăng giữa hai tiệm cận \(x=-\pi/2\), \(x=\pi/2\). Đường tiệm cận bị loại khỏi miền; không thể nối nhánh qua vạch đứt hoặc đánh dấu tại đó một giá trị hàm hữu hạn. Các đầu đường cong chạm biên trên/dưới của khung chỉ vì phần tiếp theo nằm ngoài vùng vẽ, không phải vì đồ thị dừng hay trở thành đoạn ngang.

Đối với côtang, mẫu số là sin nên các đường bị loại chuyển sang \(x=k\pi\), với \(k\in\mathbb Z\). Trên mỗi khoảng giữa hai đường đó, côtang giảm. Có thể dựng nhánh đầu tiên từ ba điểm: \((\frac{\pi}{4};1)\), \((\frac{\pi}{2};0)\), \((\frac{3\pi}{4};-1)\), rồi lặp lại theo chu kỳ \(\pi\).

![Hai nhánh đồ thị côtang và các tiệm cận đứng](../../../assets/visuals/THPT_TOPIC06_COT_ASYMPTOTES_R01.svg)

*Đọc hình:* Trên khoảng \((0;\pi)\), đường cong đi từ trên xuống dưới và cắt trục hoành tại \(x=\frac{\pi}{2}\). Nhánh trên \((-\pi;0)\) có cùng dạng do tính tuần hoàn. Khác với tang, côtang nghịch biến trên từng nhánh và không xác định tại \(x=0\).

**Ví dụ**

**Đề bài.** Cho \(g(x)=\tan(x-\frac{\pi}{4})\). Tìm miền xác định và chu kỳ.

**Lời giải.** Cần \(\cos(x-\frac{\pi}{4})\ne0\), tức \(x\ne\frac{3\pi}{4}+k\pi\), \(k\in\mathbb Z\). Chu kỳ cơ bản \(\pi\). Tiệm cận của \(\tan x\) trong hình chuyển sang phải \(\frac{\pi}{4}\), không nối nhánh qua tiệm cận.

**Vận dụng**

\(\tan x\) xác định tại \(x=\pi\) không?

<details markdown="1"><summary>Đối chiếu</summary>

Có, \(\tan\pi=0\); \(\cot\pi\) mới không xác định.

Ghi bảng điểm loại trước khi nối hình; làm lại Bài 37, Bài 38 và Bài 42 trong phần Luyện tập.

</details>

## 4. Họ nghiệm, khoảng nghiệm và mô hình chu kỳ

Một giá trị sin có thể đạt được ở nhiều góc trong cùng một vòng và lặp vô hạn lần qua các vòng tiếp theo. Khi giải phương trình lượng giác, đáp số vì thế thường là **họ góc**, không chỉ một góc chính. Chọn đúng các họ rồi lọc theo đoạn yêu cầu và điểm bị loại bởi \(\tan\) hoặc \(\cot\) là bước quyết định để không bỏ sót hay nhận nhầm nghiệm.

Một nghiệm trên đường tròn có thể lặp lại sau những chu kỳ, nhưng bài toán thực tế hoặc một khoảng cụ thể chỉ cho phép vài giá trị. Ta phải xử lý điều kiện, công thức và phép lọc nghiệm cùng lúc.

<!-- LESSON_ID: TOP06-M12; OUTCOME_ID: TOP06-O12; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

### 4.1. Nghiệm của sin/cos

Vì sao sin/cos thường phải ghi hai họ nghiệm?

> **PHƯƠNG PHÁP — Nghiệm của sin/cos.** Giải \(\sin x=a\) khác giải đa thức chỗ nào? Ta đã biết đường tròn đơn vị, nghiệm cùng vị trí theo chu kỳ. Phương trình \(\sin x=a\) có nghiệm thực khi \(\lvert a\rvert\le1\); nếu \(\sin\alpha=a\) thì \(x=\alpha+2k\pi\) hoặc \(x=\pi-\alpha+2k\pi\). Phương trình \(\cos x=a\) có \(x=\pm\arccos(a)+2k\pi\) khi \(\lvert a\rvert\le1\), với \(k\in\mathbb Z\). Trong công thức này \(\arccos(a)\in[0;\pi]\), còn \(\alpha\) phải là góc đã biết thỏa \(\sin\alpha=a\).

Khi đề cho giá trị lượng giác **không phải góc đặc biệt**, máy tính cầm tay có thể tìm **một góc đại diện** bằng các phím nghịch đảo như \(\sin^{-1},\cos^{-1},\tan^{-1}\). Chọn trước chế độ **RAD** nếu lời giải ghi radian, **DEG** nếu ghi độ. Ví dụ, với \(\sin x=0{,}3\), dùng \(\alpha=\arcsin(0{,}3)\) trong chế độ RAD rồi vẫn phải viết **hai họ** \(x=\alpha+2k\pi\) hoặc \(x=\pi-\alpha+2k\pi\), \(k\in\mathbb Z\); giá trị máy tính không thay thế các họ nghiệm. Các phím ngược trả một **giá trị chính**, không phải toàn bộ nghiệm: với sin, góc chính nằm trong \([-\frac{\pi}{2};\frac{\pi}{2}]\); với cos, trong \([0;\pi]\).

Nếu số đo dùng **độ**, thay nửa vòng \(\pi\) bằng \(180^\circ\) và cả vòng \(2\pi\) bằng \(360^\circ\). Ví dụ, \(\sin x=\sin 30^\circ\) cho \(x=30^\circ+360^\circ k\) hoặc \(x=150^\circ+360^\circ k\); \(\cos x=\cos 60^\circ\) cho \(x=\pm60^\circ+360^\circ k\), \(k\in\mathbb Z\). Không trộn độ với radian trong cùng một họ nghiệm. Khi \(a=1\) hoặc \(a=-1\), hai họ của sin hoặc hai dấu của cos trùng nhau (có thể lệch một chu kỳ); chỉ cần ghi họ nghiệm một lần.

Chẳng hạn, \(\sin(2x)=\frac{\sqrt3}{2}\): \(2x=\frac{\pi}{3}+2k\pi\) hoặc \(2x=\frac{2\pi}{3}+2k\pi\), suy ra \(x=\frac{\pi}{6}+k\pi\) hoặc \(x=\frac{\pi}{3}+k\pi\), \(k\in\mathbb Z\). Có hai họ vì đường ngang cắt đường tròn tại hai điểm.

**Ví dụ**

**Đề bài.** Giải \(\cos(2x)=\frac{\sqrt2}{2}\) trên \(\mathbb R\).

**Lời giải.** \(\cos\theta=\frac{\sqrt2}{2}\) khi \(\theta=\pm\frac{\pi}{4}+2k\pi\). Đặt \(\theta=2x\) và chia hai vế cho 2, được \(x=\pm\frac{\pi}{8}+k\pi\), \(k\in\mathbb Z\). Hai dấu cho hai họ; kiểm lại bằng \(\cos(\pm\frac{\pi}{4}+2k\pi)=\frac{\sqrt2}{2}\).

**Vận dụng**

Giải \(\cos x=0\) trên \(\mathbb R\).

<details markdown="1"><summary>Đối chiếu</summary>

Từ \(\cos x=0\), ta có \(x=\frac{\pi}{2}+2m\pi\) hoặc \(x=-\frac{\pi}{2}+2m\pi\), với \(m\in\mathbb Z\). Họ thứ nhất ứng với \(k=2m\), họ thứ hai ứng với \(k=2m-1\) trong công thức \(x=\frac{\pi}{2}+k\pi\). Mọi số nguyên \(k\) đều chẵn hoặc lẻ, nên hai họ gộp thành đúng một họ \(x=\frac{\pi}{2}+k\pi\), \(k\in\mathbb Z\).

Nếu chỉ viết một nghiệm, quay thêm chu kỳ; nếu \(\lvert a\rvert>1\) thì vô nghiệm. Hãy làm lại Bài 44, Bài 45 và Bài 60 trong phần Luyện tập.

</details>

<!-- LESSON_ID: TOP06-M13; OUTCOME_ID: TOP06-O13; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

### 4.2. Nghiệm của tan/cot

Vì sao tan/cot chỉ có một họ nghiệm mỗi chu kỳ?

> **PHƯƠNG PHÁP — Nghiệm của tan/cot.** Khi giải phương trình tan hoặc cot, miền xác định thuộc về lời giải. Tại sao \(\tan x=a\) chỉ cần một họ nghiệm? Ta sử dụng tan xác định khi \(\cos x\ne0\); tính chu kỳ \(\pi\). Tan là tỉ số với cos không bằng 0; \(\tan x=a\Leftrightarrow x=\arctan(a)+k\pi\), \(k\in\mathbb Z\). \(\cot x=a\Leftrightarrow x=\operatorname{arccot}(a)+k\pi\) với \(\operatorname{arccot}(a)\in(0;\pi)\), \(k\in\mathbb Z\); cách viết khác phải định rõ nhánh arccot. Cả hai phương trình có nghiệm với mọi \(a\in\mathbb R\), vì mỗi nhánh cơ bản của tang hoặc côtang nhận mọi giá trị thực đúng một lần. Nếu dùng độ, viết \(x=\alpha+180^\circ k\) với \(\alpha\) là góc đã biết thỏa phương trình, chẳng hạn \(\tan x=1\) cho \(x=45^\circ+180^\circ k\). Khi tìm góc bằng máy tính, phím \(\tan^{-1}\) trả giá trị chính trong \((-\frac{\pi}{2};\frac{\pi}{2})\) ở RAD. Muốn tìm góc của côtang, có thể dùng \(\cot\alpha=\tan(\frac{\pi}{2}-\alpha)\) và chọn \(\alpha\) trong \((0;\pi)\); ở DEG dùng \(90^\circ\) thay \(\frac{\pi}{2}\). Luôn xét điều kiện ban đầu khi có biểu thức ghép.

Xét ví dụ: \(\tan\left(x+\frac{\pi}{4}\right)=-1\), suy ra \(x+\frac{\pi}{4}=-\frac{\pi}{4}+k\pi\), nên \(x=-\frac{\pi}{2}+k\pi\), \(k\in\mathbb Z\). Thế lại: góc tan bằng \(-\frac{\pi}{4}+k\pi\), không chạm điểm loại.

**Ví dụ**

**Đề bài.** Giải \(\tan(3x)=\sqrt3\) trên \(\mathbb R\).

**Lời giải.** Điều kiện \(\cos(3x)\ne0\). Từ \(\tan\theta=\sqrt3\) suy ra \(\theta=\frac{\pi}{3}+k\pi\), nên \(x=\frac{\pi}{9}+\frac{k\pi}{3}\), \(k\in\mathbb Z\). Tại mọi nghiệm \(\cos(3x)=\pm\frac12\ne0\), các nghiệm đều hợp lệ.

**Ví dụ**

**Đề bài.** Giải \(\cot(3x)=\sqrt3\) trên \(\mathbb R\).

**Lời giải.** Điều kiện \(\sin(3x)\ne0\). Vì \(\cot(\frac{\pi}{6})=\sqrt3\) và côtang có chu kỳ \(\pi\), lại nghịch biến trên mỗi nhánh, nên \(3x=\frac{\pi}{6}+k\pi\), tức \(x=\frac{\pi}{18}+\frac{k\pi}{3}\), \(k\in\mathbb Z\). Tại các nghiệm, \(\sin(3x)=\pm\frac12\ne0\), nên tất cả đều hợp lệ. Khác với tang, điều kiện cần kiểm ở đây là sin của đối số khác 0.

**Vận dụng**

Giải \(\tan(2x)=0\) và \(\cot(2x)=0\). Vì sao hai phương trình không có nghiệm chung?

<details markdown="1"><summary>Đối chiếu</summary>

Với tang, cần \(\cos(2x)\ne0\); tử số bằng 0 khi \(2x=k\pi\), nên \(x=\frac{k\pi}{2}\). Với côtang, cần \(\sin(2x)\ne0\); tử số bằng 0 khi \(2x=\frac{\pi}{2}+k\pi\), nên \(x=\frac{\pi}{4}+\frac{k\pi}{2}\), với \(k\in\mathbb Z\) trong cả hai họ. Mỗi họ đều thỏa điều kiện riêng, nhưng ở nghiệm của tang thì côtang không xác định và ngược lại.

Nếu viết cùng một họ cho cả hai phương trình, hãy đối chiếu hai mẫu số và hai đồ thị ở mục 3.4; làm lại Bài 46, Bài 47 và Bài 61 trong phần Luyện tập.

</details>

<!-- LESSON_ID: TOP06-M14; OUTCOME_ID: TOP06-O14; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

### 4.3. Biến đổi không làm mất nghiệm

Chia cho sin/cos có thể làm mất nghiệm nào?

> **TÍNH CHẤT — Biến đổi không làm mất nghiệm.** Biến đổi phương trình lượng giác có thể sinh nghiệm ngoài điều kiện. Rút gọn có thể vô tình tạo nghiệm mới như thế nào? Ta bắt đầu từ hệ thức cơ bản và quy tắc biến đổi tương đương. Phân tích thành tích chỉ tương đương nếu không chia cho biểu thức có thể bằng 0. Nếu khử mẫu/biến đổi căn cần giữ điều kiện ban đầu rồi thử lại. Một tích bằng 0 cho hợp các họ nghiệm của từng thừa số; không vứt một nhánh.

Chẳng hạn, \(\sin x(2\cos x-1)=0\) suy ra \(\sin x=0\) hoặc \(\cos x=\frac12\), nên \(x=k\pi\) hoặc \(x=\pm\frac{\pi}{3}+2k\pi\), \(k\in\mathbb Z\). Không được chia cả hai vế cho \(\sin x\) vì mất họ nghiệm \(x=k\pi\).

**Ví dụ**

**Đề bài.** Giải \(2\sin x\cos x=\cos x\) mà không chia cho cos.

**Lời giải.** \(\cos x(2\sin x-1)=0\). Do đó \(x=\frac{\pi}{2}+k\pi\) hoặc \(x=\frac{\pi}{6}+2k\pi\) hoặc \(x=\frac{5\pi}{6}+2k\pi\), \(k\in\mathbb Z\). Chia cho cos sẽ làm mất cả họ đầu.

**Vận dụng**

Giải \(2\sin x\cos x=0\).

<details markdown="1"><summary>Đối chiếu</summary>

\(x=\frac{k\pi}{2}\), \(k\in\mathbb Z\); hoặc xét \(\sin x=0\) cho \(x=k\pi\), hoặc \(\cos x=0\) cho \(x=\frac{\pi}{2}+k\pi\).

Nếu định chia hai vế cho \(\sin x\), hãy xét riêng trường hợp \(\sin x=0\) trước để không mất nghiệm. Làm lại Bài 62 (phương trình phân thức cần lọc điểm mẫu bằng 0), rồi Bài 55 (điều kiện xác định của hai biểu thức tang) trong phần Luyện tập; không chia hoặc nhân với biểu thức có thể bằng 0 khi chưa xét điều kiện.

</details>

<!-- LESSON_ID: TOP06-M15; OUTCOME_ID: TOP06-O15; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

### 4.4. Lọc nghiệm theo khoảng

Khoảng nửa mở \([0;2\pi)\) có lấy góc \(2\pi\) không?

> **PHƯƠNG PHÁP — Lọc nghiệm theo khoảng.** Nghiệm tổng quát cần lọc khi chỉ xét một khoảng hữu hạn. Một họ nghiệm có vô hạn số nguyên \(k\), nhưng bài toán chỉ chọn khoảng nhất định. Cần nhớ bất đẳng thức, khoảng mở/đóng và hàm lượng giác. Giải trên \(\mathbb R\) trước, sau đó lọc \(k\) theo khoảng hoặc xét trực tiếp các góc trên đường tròn trong \([a;b]\). Với \([a;b)\) chỉ lấy \(a\) nếu thỏa, loại \(b\); tránh đếm cả hai góc \(0\) và \(2\pi\) khi khoảng nửa mở là \([0;2\pi)\).

Chẳng hạn, \(2\sin^2 x-3\sin x+1=0\Rightarrow (2\sin x-1)(\sin x-1)=0\). Với \(x\in[0;2\pi)\): \(x=\frac{\pi}{6},\frac{5\pi}{6},\frac{\pi}{2}\), tổng 3 nghiệm. Không thêm \(2\pi\) vì không thuộc khoảng.

**Ví dụ**

**Đề bài.** Giải \(\cos(2x)=\frac12\) trên \([0;2\pi)\).

**Lời giải.** Trên toàn trục \(x=\pm\frac{\pi}{6}+k\pi\). Với họ dấu cộng, điều kiện \(0\le\frac{\pi}{6}+k\pi&lt;2\pi\) cho \(k=0,1\); với họ dấu trừ, \(0\le-\frac{\pi}{6}+k\pi&lt;2\pi\) cho \(k=1,2\). Vậy bốn nghiệm là \(\frac{\pi}{6},\frac{5\pi}{6},\frac{7\pi}{6},\frac{11\pi}{6}\). Không tự thêm điểm mút bị loại.

**Vận dụng**

Giải \(\sin x=0\) trên \([0;2\pi)\).

<details markdown="1"><summary>Đối chiếu</summary>

\(x=0\) hoặc \(x=\pi\); loại \(2\pi\).

Vẽ dãy nghiệm trên trục số và đánh dấu đầu mút; làm lại Bài 53, Bài 54 và Bài 63 trong phần Luyện tập.

</details>

<!-- LESSON_ID: TOP06-M16; OUTCOME_ID: TOP06-O16; PREVIOUS_R04_BLOB: 9fee274efababcf7ffd91c78c7e39e89191f17c0 -->

### 4.5. Chu kỳ trong mô hình có giới hạn

Nghiệm của mô hình ngoài miền thời gian có hợp lệ không?

> **PHƯƠNG PHÁP — Chu kỳ trong mô hình có giới hạn.** Mô hình tuần hoàn thực tế còn có giới hạn thời gian và đơn vị phải kiểm. Sóng, thủy triều và nhiệt độ thay đổi trong thời gian hữu hạn có thể mô tả bằng công thức nào? Để xác định điều đó, cần xét đồ thị sin/cos, chu kỳ, đơn vị thời gian. Mô hình \(h(t)=d+A\cos(\omega t+\varphi)\) có điều kiện miền \(t\) thực tế, mức nền \(d\), biên độ \(\lvert A\rvert\), chu kỳ \(\frac{2\pi}{\lvert\omega\rvert}\) khi \(A\ne0,\ \omega\ne0\). Dữ liệu thực không nhất thiết đúng dạng sin lý tưởng; phải phân biệt mô hình giả định với kết luận về thế giới.

Chẳng hạn, mực nước giả định \(h(t)=3+1{,}2\cos\left(\frac{\pi t}{6}\right)\) (m), \(0\le t\le24\) giờ. Chu kỳ 12 giờ; \(h(0)=4{,}2\) m; \(h(6)=1{,}8\) m; lần đầu đạt mức nền \(h=3\) m khi \(t=3\) giờ. Đây chỉ là mô hình luyện toán, không phải dự báo thật.

**Ví dụ**

**Đề bài.** Mô hình \(h(t)=2+0{,}5\cos(\frac{\pi t}{4})\) m, \(0\le t\le12\) giờ. Tính chu kỳ, cực đại/cực tiểu trong miền.

**Lời giải.** Chu kỳ \(T=\frac{2\pi}{\frac{\pi}{4}}=8\) giờ. Cực đại \(2{,}5\) m tại \(t=0,8\); cực tiểu \(1{,}5\) m tại \(t=4,12\). Những thời điểm ngoài miền không được nhận; đây là mô hình giả định.

**Vận dụng**

Một mô hình giả định mô tả độ cao \(h(t)=4+0{,}8\sin(\frac{\pi t}{8})\) mét trong khoảng \(0\le t\le16\) giờ. Tìm chu kỳ của hàm theo công thức, tính \(h(4)\), và cho biết có được dùng mô hình này để khẳng định độ cao tại \(t=20\) giờ không.

<details markdown="1"><summary>Đối chiếu</summary>

Với \(\omega=\frac{\pi}{8}\ne0\), chu kỳ của hàm sin là \(T=\frac{2\pi}{\frac{\pi}{8}}=16\) giờ. Tại \(t=4\), góc bằng \(\frac{\pi}{2}\), do đó \(h(4)=4+0{,}8\sin(\frac{\pi}{2})=4{,}8\) m. Vì mô hình chỉ được giả thiết trên \([0;16]\), thời điểm \(t=20\) **ngoài miền đã cho**: không thể khẳng định độ cao thực tế lúc ấy từ công thức này, dù phép tính đại số vẫn thực hiện được.

**Kiểm lỗi**

Nếu em quên hệ số \(\omega\) khi tính chu kỳ, viết \(\omega T=2\pi\); nếu em áp dụng công thức ở mọi thời điểm chỉ vì hàm sin tuần hoàn, kiểm lại miền thời gian của **mô hình**, khác miền xác định của hàm sin. Đọc lại **Kiến thức 4.5**, làm **Bài 64** (giới hạn thời gian và chu kỳ) và **Bài 56** (lọc điều kiện trong bài toán lượng giác) ở Luyện tập.

</details>

> **Kiến thức cần ghi nhớ**
>
> - **Góc và radian:** \(180^\circ=\pi\) radian; các góc lệch \(2k\pi\) có cùng tia cuối nhưng độ quay có thể khác. Với bán kính \(r\), quãng đường cung là \(r|\theta|\) khi \(\theta\) tính bằng radian.
> - **Đường tròn đơn vị:** \(\cos\alpha\) là hoành độ, \(\sin\alpha\) là tung độ; \(\sin^2\alpha+\cos^2\alpha=1\). Tan cần cos khác 0, cot cần sin khác 0.
> - **Hàm tuần hoàn:** sin, cos có chu kỳ cơ bản \(2\pi\); tan, cot có chu kỳ \(\pi\) trên miền hợp lệ. Với \(y=A\sin(\omega x+\varphi)+d\), \(A\omega\ne0\), biên độ \(|A|\) và chu kỳ \(2\pi/|\omega|\).
> - **Giải phương trình lượng giác:** ghi đủ các họ nghiệm và chỉ số nguyên \(k\); không chia cho sin/cos có thể bằng 0, kiểm miền xác định và lọc đúng mút của khoảng nghiệm.

<!-- TOPIC06_APPROVED_SOURCE_END -->
<span data-topic-w1-source-end="kien-thuc" hidden></span>
<p class="topic-w1-end-nav"><a href="../../">← Tổng quan các Chuyên đề</a></p>
