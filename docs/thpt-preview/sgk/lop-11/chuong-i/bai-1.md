# Bài 1. Giá trị lượng giác của góc lượng giác

<style>
/* Scoped to B27 by its canonical First Try marker; no shared UI changes. */
.md-typeset:has([data-thpt-first-try-id^="THPT-G11-CHI-TRY01"]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card{background:#e8f7f2;border-color:#a9dccc;border-left-color:#087d69;color:#174137}
.md-typeset:has([data-thpt-first-try-id^="THPT-G11-CHI-TRY01"]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card{background:#eaf1fc;border-color:#a5bee5;border-left-color:#4879c2;color:#193d66}
[data-md-color-scheme="slate"] .md-typeset:has([data-thpt-first-try-id^="THPT-G11-CHI-TRY01"]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card{background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-thpt-first-try-id^="THPT-G11-CHI-TRY01"]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card{background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}

.md-typeset:has([data-thpt-first-try-id^="THPT-G11-CHI-TRY01"]) .thpt-g11-example-solution{display:block;margin:.75rem 0 1rem;padding:.75rem 1rem;border:1px solid #cbd5e1;border-left:4px solid #64748b;border-radius:10px;background:#f8fafc;color:#1e293b}
[data-md-color-scheme="slate"] .md-typeset:has([data-thpt-first-try-id^="THPT-G11-CHI-TRY01"]) .thpt-g11-example-solution{background:#253245;border-color:#64748b;border-left-color:#94a3b8;color:#f1f5f9}

</style>

<script>
/* B27 source-scoped Golden bridge: reuse the approved B22 presentation CSS,
   without altering the shared SGK route/assessment runtime or cloning a theme.
   Only classes and section-heading DOM are attached to this one lesson. */
(() => {
 "use strict";
 const mount=()=>{
  if(!/\/thpt-preview\/sgk\/lop-11\/chuong-i\/bai-1\/?$/.test(location.pathname))return;
  const article=document.querySelector(".md-content__inner");
  if(!article||article.dataset.g11B01Golden==="true"||
    !article.querySelector('.thpt-r4-screen[data-g11-b01-owner-g0g2="r01"]'))return;
  const tab=article.querySelector(":scope > .tabbed-set");
  const labels=[...(tab?.querySelectorAll(":scope > .tabbed-labels > label")||[])];
  const panes=[...(tab?.querySelectorAll(":scope > .tabbed-content > .tabbed-block")||[])];
  const radios=[...(tab?.querySelectorAll(':scope > input[type="radio"]')||[])];
  const names=["Khám phá kiến thức","Kiến thức SGK","Ví dụ","Lỗi thường gặp"];
  if(labels.length!==4||panes.length!==4||radios.length!==4||
     !labels.every((el,i)=>el.textContent.trim()===names[i]))return;
  const heading=["1. Khám phá kiến thức","2. Kiến thức SGK","3. Ví dụ",
   "4. Lỗi thường gặp và cách tự khắc phục"];
  article.classList.add("thpt-g10-chiv-golden");
  panes.forEach((pane,i)=>{
   if(pane.querySelector(":scope > h2.thpt-g10-section-heading"))return;
   const h=document.createElement("h2");
   h.className="thpt-g10-section-heading";
   h.textContent=heading[i];
   pane.prepend(h);
  });
  const sync=()=>labels.forEach((label,i)=>
   label.classList.toggle("slm-g10-active-tab",radios[i].checked));
  tab.addEventListener("change",sync);
  sync();
  article.dataset.g11B01Golden="true";
 };
 if(window.document$?.subscribe)window.document$.subscribe(mount);
 else if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",mount);
 else mount();
})();
</script>

<div class="thpt-r4-screen" data-thpt-r4 data-g11-b01-owner-g0g2="r01">
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG I</p>
<p class="thpt-r4-lead">Góc có hướng, radian, đường tròn lượng giác và các quan hệ lượng giác cơ bản.</p>

<nav class="thpt-r4-lesson-tabs"><a href="../">Chương I</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

### Trước khi học: Vì sao cần kiến thức này?

**Vấn đề:** Khi một bánh xe quay nửa vòng, rồi tiếp tục thêm hai vòng, tia cuối có thể giống nhau nhưng tổng góc quay và quãng đường đi được khác nhau. Góc hình học thông thường chỉ mô tả độ mở, chưa ghi được **chiều quay** và **số vòng quay**. Vì vậy Bài 1 dùng **góc lượng giác có hướng** và số đo radian: góc dương khi quay ngược chiều kim đồng hồ, âm khi quay cùng chiều.

**Kiến thức đã biết → kiến thức mới:** Ở tam giác vuông, với góc nhọn, sin/cos là **tỉ số cạnh đối/huyền, kề/huyền**; tam giác đồng dạng khiến các tỉ số không phụ thuộc kích thước. Nhưng cách này không trực tiếp mô tả góc quay âm hay hơn 180°. Ta đặt điểm M chạy trên **đường tròn bán kính 1**, lấy trục Ox dương làm tia đầu. Khi góc quay là α, **hoành độ** của M chính là cos α và **tung độ** là sin α. Hai tọa độ vừa giải thích ý nghĩa đại lượng vừa tự làm rõ vì sao sin²α+cos²α=1 và mọi sin/cos nằm trong [-1,1]. Chỉ sau cầu nối ấy hãy học cách tính và các điều kiện tan/cot.

**Radian xuất hiện từ đâu?** Với một góc ở tâm có độ lớn α, tỉ số **độ dài cung / bán kính** không phụ thuộc kích thước đường tròn: số đo radian của góc lấy theo tỉ số này, kèm dấu chiều quay. Vì cả vòng có độ dài 2πR nên cả vòng là 2π rad; nửa vòng là π rad. Nếu bánh xe quay ngược chiều 2π rồi quay tiếp 2π, điểm cuối trùng ban đầu nhưng **tổng đường đi** là 4πR, không phải 0.

**Khi nào dùng và điều kiện:** Dùng radian để tính độ dài cung, dùng tọa độ M để tính sin/cos cho góc bất kỳ; tan α chỉ xác định nếu cos α ≠ 0, cot α chỉ xác định nếu sin α ≠ 0. Không coi sin/cos là độ dài có đơn vị.

### Tự thử trước khi luyện tập

Một bánh xe bán kính 2 cm quay trọn một vòng ngược chiều kim đồng hồ. Góc có hướng bao nhiêu radian, và quãng đường cung là bao nhiêu cm? Hãy giải thích vì sao một vòng quay khác “không quay” dù tia cuối giống nhau.

<details class="thpt-r4-pedagogical-note" data-ped-first-try="1"><summary>Đã thử xong? Mở hướng dẫn đối chiếu</summary>

Góc +2π rad, độ dài 4π cm. Hai tia cuối trùng nhau không có nghĩa bánh xe không quay. Nếu chưa chắc, đọc lại phần giải thích radian và Ví dụ 3, rồi làm câu Core đầu tiên của bài.

</details>


=== "Kiến thức SGK"

### 1.1. Góc lượng giác và số đo

**Chiều quay.** Một góc lượng giác ghi lại cả tia đầu, tia cuối và chiều quay: ngược chiều kim đồng hồ lấy dương, cùng chiều lấy âm.

**Các góc cùng tia cuối.** Hai góc cùng tia đầu/tia cuối có thể chênh nhau một số nguyên lần \(360°\) hoặc \(2π\) rad.

**Đổi giữa độ và radian:**

- \(180° = π rad\)
- \(α rad = α·180°/π\)
- \(x° = xπ/180 rad\)

**Chú ý:** Khi chỉ xét vị trí cuối trên đường tròn lượng giác có thể quy về một đại diện trong \([0,2π)\), nhưng **không được xóa ý nghĩa số vòng quay** nếu bài toán hỏi quãng đường chuyển động.

### 1.2. Radian và độ dài cung

**Công thức độ dài cung.** Với bán kính \(R>0\), góc ở tâm có độ lớn \(|α|\) rad chắn cung có độ dài:

\[
s=R|α|
\]

**Lưu ý:** Cung đi theo số lần quay được mô tả.

Không dùng trực tiếp độ cho công thức này; góc 180° chắn cung nửa đường tròn dài \(πR\).

### 1.3. Đường tròn lượng giác

**Điểm cuối.** Gắn O với gốc tọa độ, bán kính đơn vị. Khi quay từ trục Ox dương, điểm cuối trên đường tròn là:

\[
M=(cos α,sin α)
\]

**Hệ thức cơ bản (đúng với mọi α):**

\[
sin²α+cos²α=1
\]

**Quy tắc dấu.** Dấu của sin/cos phụ thuộc góc phần tư, không phụ thuộc việc chỉ nhớ số dương của góc tham chiếu.

### 1.4. Tang, côtang và điều kiện xác định

**Tang:**

\[
tan α=sin α/cos α
\]

**Điều kiện:** cos α ≠ 0.

**Côtang:**

\[
cot α=cos α/sin α
\]

**Điều kiện:** sin α ≠ 0.

**Các hệ thức suy ra từ đẳng thức cơ bản:**

\[
1+tan²α=1/cos²α
\]

trên miền \(cos α ≠ 0\);

\[
1+cot²α=1/sin²α
\]

trên miền \(sin α ≠ 0\).

**Chu kì.** Sin/cos chu kì 2π; tan/cot chu kì π khi xác định.

### 1.5. Các góc liên quan đặc biệt

**Góc đối:**

- \(sin(−α)=−sinα\)
- \(cos(−α)=cosα\)

**Góc liên quan tới π:**

- \(sin(π−α)=sinα\)
- \(cos(π−α)=−cosα\)
- \(sin(π+α)=−sinα\)
- \(cos(π+α)=−cosα\)

**Góc phụ:**

- \(sin(π/2−α)=cosα\)
- \(cos(π/2−α)=sinα\)

**Điều kiện:** Mọi hệ thức tan/cot cần kiểm điều kiện mẫu khác 0.

**Bảng góc đặc biệt:** Bảng giá trị \(0,π/6,π/4,π/3,π/2\) là tiền đề cần học sinh tự tái dựng trên đường tròn, không chỉ học thuộc.


<figure class="thpt-r4-plot thpt-r4-probability-figure"><img src="../../../../../assets/images/thpt/THPT_G11_B01_UNIT_CIRCLE_5PI6_D5_R01.svg" loading="lazy" alt="Điểm M tại góc 5π/6 trên đường tròn lượng giác"><figcaption>Điểm M tại góc 5π/6 trên đường tròn lượng giác.</figcaption></figure>

### Hướng dẫn đọc hình, đồ thị

- **Hình minh họa:** tìm tâm O, tia đầu Ox dương và tia cuối OM, xác định góc quay cùng/ ngược chiều và góc phần tư của M. Đọc hoành độ M → cos α, tung độ M → sin α; hai góc cùng tia cuối có thể khác **số vòng**. Trước khi dùng hình để suy dấu tan/cot, kiểm mẫu khác 0.


=== "Ví dụ"

### Ví dụ 1.

Đổi \(−150°\) sang radian: \(−150°×π/180°=−5π/6\); một đại diện đồng tia cuối trong \([0,2π)\) là \(7π/6\). Cần phân biệt “góc lượng giác −5π/6” (thể hiện chiều quay âm) với “vị trí cuối 7π/6” (chỉ xác định tia cuối).

### Ví dụ 2.

Tại \(α=5π/6\), sin dương, cos âm vì góc phần tư II; \(sin(5π/6)=sin(π−π/6)=1/2\), \(cos(5π/6)=−cos(π/6)=−√3/2\). Từ đây tan là tỉ số âm và xác định, không lấy dấu từ góc tham chiếu một cách máy móc. FIG01 diễn tả vị trí M trên đường tròn.

### Ví dụ 3.

Bánh xe bán kính \(30 cm\) quay góc \(−2π/3 rad\); độ dài cung quét trên vành là \(30×|−2π/3|=20π cm\). Dấu trừ chỉ chiều quay, không làm độ dài âm. Nếu xe quay qua hơn một vòng, tổng quãng đường phải dùng độ lớn góc quay **thực tế**, không chỉ góc quy về \([0,2π)\).

## Hướng suy luận trong các ví dụ

- **Ví dụ 01:** dùng đổi độ–radian theo tỷ lệ 180°=π rad; chỉ **sau** đó mới quy góc về tia cuối nếu bài toán yêu cầu, không làm mất chiều quay khi tính quãng đường.
- **Ví dụ 02:** định góc phần tư và điểm trên đường tròn trước khi lấy dấu; góc tham chiếu π/6 cho **độ lớn**, vị trí ở góc phần tư II quyết định dấu.
- **Ví dụ 03:** cung dài không âm; lấy độ lớn của góc quay thực tế và nhân bán kính, không lấy số đo góc đã quy về một vòng.


=== "Lỗi thường gặp"

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="HELP-G11-B01-01"><summary>Nhầm góc cùng tia cuối với cùng số vòng quay</summary><ul><li>**Dấu hiệu:** Rút <code>765°</code> thành <code>45°</code> rồi dùng góc 45° để tính quãng đường xe quay 765°.  </li>
<li>**Bản chất:** Hai góc chênh bội của 360° có cùng tia cuối / cùng sin cos, nhưng tổng độ dài cung di chuyển còn phụ thuộc số vòng quay thực tế.  </li>
<li>**Tự sửa:** ghi rõ đại lượng cần hỏi; với giá trị lượng giác quy góc modulo 2π, với quãng đường dùng độ lớn tổng góc quay ban đầu ở radian; kiểm đơn vị và dấu.  </li>
<li>**Ôn:** SGK Bài 1 góc lượng giác, radian, cung tròn.  </li>
<li>**Quay lại item:** <code>THPT-G11-B01-P02</code>, <code>THPT-G11-B01-P03</code>, <code>THPT-G11-CHI-W01</code>.</li></ul><p><a href="../luyen-tap/">Về Luyện tập</a></p></details>

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="HELP-G11-B01-02"><summary>Quên điều kiện tan/cot và dấu góc phần tư</summary><ul><li>**Dấu hiệu:** Kết luận tan(π/2) có giá trị hữu hạn hoặc chọn dấu cos dương trong góc phần tư II.  </li>
<li>**Bản chất:** tan α chỉ xác định nếu cos α≠0; cot α chỉ nếu sin α≠0. Hệ thức sin²+cos²=1 chỉ cho độ lớn; góc phần tư quyết định dấu.  </li>
<li>**Tự sửa:** khoanh miền xác định trước; xác định góc phần tư, lấy căn đúng dấu; thử ngược bằng tan=sin/cos và sin²+cos²=1.  </li>
<li>**Ôn:** SGK Bài 1 giá trị lượng giác, dấu và hệ thức cơ bản.  </li>
<li>**Quay lại item:** <code>THPT-G11-B01-C02</code>, <code>THPT-G11-B01-P01</code>, <code>THPT-G11-B01-P04</code>, <code>THPT-G11-B01-P05</code>.</li></ul><p><a href="../luyen-tap/">Về Luyện tập</a></p></details>


    **Học tiếp:** [Core và Luyện tập](luyen-tap.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">Nguồn toán học: SGK Toán 11 Kết nối tri thức, tập 1, Bài 1 (trang in 5–16); SBT Toán 11 Bài 1 tham khảo bài tập. Ví dụ và giải thích bổ trợ do SLM biên soạn.</p>
