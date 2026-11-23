# Temp — Independent NotebookLM Review: Toán 11 Chương VI, Bài 18–21 (KNOWLEDGE ONLY)

PACKET_ID: `G11_CHVI_B18_B21_KNOWLEDGE_ONLY_REVIEW_20261123`  
STATUS: `AUTHORING_SELF_CHECKED / INDEPENDENT_REVIEW_PENDING`  
STANDARD_ID: `SLM-THPT-QUALITY-ONE` (unified Q01–Q18 on GitHub main; not a second standard)  
REVIEW_SCOPE: `G11_SGK_CHVI_B18_B21_KNOWLEDGE_ONLY`  
OWNER_SCOPE: `SCOPE=G11_G12_SGK_KNOWLEDGE_PAGES_ONLY`, [Issue #1039](https://github.com/TMA2015/self-learning-math/issues/1039)  
PERMANENT_SOURCES: exactly **five THPT v2.1**, not v2.0 or six  
TEXTBOOK_S1: SGK Kết nối tri thức, Toán 11 tập 2, printed pp.4–24, with printed-to-PDF visual offset not verified. SGK source is **external authority**, review file is author snapshot only.  
FROZEN: separate Core/Luyện tập, separate chapter Tự kiểm tra, canonical bank/IDs, Written/Anchor, rubric/answer, RD1, Mastery, existing NotebookLM verdicts, Firebase/Auth and production release  
RELEASE_AUTHORIZATION: NO  
CONTENT_READY: NO  

## 1. Khóa source — theo đúng bốn Draft PR

| Lesson | SGK printed pages | Draft PR | HEAD commit | Learner Git blob | Khám phá ↔ Kiến thức SGK |
|:--|:--|:--|:--|:--|:--|
| B18 Lũy thừa với số mũ thực | 4–9 | [#1044](https://github.com/TMA2015/self-learning-math/pull/1044) | `9933fdbaca1c9958c3790b838c8b9d8974fa81ae` | `e4a0c64cd075b300657f8f0df93fc54b0ab01caa` | 3 ↔ 3 |
| B19 Lôgarit | 10–15 | [#1045](https://github.com/TMA2015/self-learning-math/pull/1045) | `4a288c5121c42bddf94ce8d04602bb779aaa84ff` | `b4a8ee2f8231467ed9d676f6ecc525d94c4634e1` | 3 ↔ 3 |
| B20 Hàm số mũ và hàm số lôgarit | 16–19 | [#1046](https://github.com/TMA2015/self-learning-math/pull/1046) | `74344e822cd5db58eeea1f88ff559a9eae6c8c36` | `4833132b85a1ccae082e85b637552566eec02ed1` | 2 ↔ 2 |
| B21 Phương trình, bất phương trình mũ và lôgarit | 20–24 | [#1047](https://github.com/TMA2015/self-learning-math/pull/1047) | `2f29ae531ca601f50fd7fe855fe38c9ca50a5eac` | `e2d4213054d572f856ed4f1d551fbe7c275b8521` | 4 ↔ 4 |

**Immutable snapshot contract:** the learner text and SVG XML below were fetched from exact GitHub refs and SHA; this packet is a copy for independent reading only, not a second canonical source. Re-evaluate the affected lesson and update SOURCE_RECEIPT if any later academic delta changes its blob.

## 2. Phản biện bắt buộc — chỉ các trang Kiến thức

1. Đối chiếu trực tiếp bản SGK/SBT KNTT nguồn S1 (bản in **tập 2, trang 4–24**) để kiểm bốn bài, số mục chính, định nghĩa/điều kiện và dữ kiện từng hoạt động/hình; trả `SOURCE_RECEIPT` đủ chứng cứ. Khi không xem được trang in và offset PDF, ghi `SOURCE_VISUAL_HOLD` thay vì xác nhận đã xem.
2. Phản biện độc lập theo **mỗi Bài và mỗi mục SGK**: hai tab Khám phá và Kiến thức SGK có đối ứng 1:1, giải thích bản chất trước công thức, đọc độc lập được, câu chữ/điều kiện/giới hạn áp dụng, hình và bảng đặt đúng vị trí. Các lớp 3+1 phải có nhãn chữ tương ứng loại phát biểu thật của SGK; không ép quota khung.
3. Kiểm toán **toàn bộ 8 Ví dụ mỗi bài** theo Đề bài–Phân tích–Lời giải–Kiểm lại, Vận dụng tự mở Đối chiếu/Kiểm lỗi và 6 lỗi thường gặp. Xét độ sâu tự học theo mục/outcome; đếm số ví dụ chỉ là kiểm cấu trúc. Kiểm tính đúng đắn, đơn vị, điều kiện miền và hình/bảng/SVG semantic.
4. **Các rủi ro trọng tâm:** B18 cơ số âm và số mũ thực, căn chẵn/lẻ, trị tuyệt đối, điều kiện a>0, so sánh cơ số giữa 0 và 1; B19 định nghĩa log `a>0,a≠1,M>0`, phép tách log, đổi cơ số/miền xác định, log10/ln, lãi liên tục; B20 tập xác định/tập giá trị, đồ thị hàm ngược, tăng/giảm và tiệm cận theo hai loại cơ số; B21 dấu khi so bất đẳng thức, vế mũ b≤0, nghiệm ngoại lai của log, ngưỡng **không quá** và số năm nguyên, log với đối số dương.
5. Kiểm lại bản XML SVG và ALT/figcaption trong source bên dưới; hình gốc có đúng ngữ nghĩa thì tái dùng; hình mới chỉ thêm ở chỗ nội dung còn thiếu. **Không tự gọi visual-browser PASS** từ chữ SVG: báo riêng việc kiểm render 390/820/1440px, Light/Slate, lỗi nét/nhãn/trục và phạm vi CSS nếu chưa xem được website.
6. Trả **Academic/PED verdict riêng B18, B19, B20, B21**, theo từng lesson/outcome/item ở phạm vi learner, `SOURCE_RECEIPT` chính xác HEAD/blob, P0/P1/P2 với vị trí/lỗi/chứng cứ/`MINIMAL_DELTA`; ghi `NOT_REVIEWED` nếu không đủ dữ liệu. **Không review lại Core/Luyện tập/Tự kiểm tra**, không suy Q15/Q16 hoặc `SGK_CHAPTER_READINESS` từ packet knowledge, không tự cấp `CONTENT_READY`, merge/deploy.

## 3. Ma trận đối ứng và các hình giữ lại/bổ sung

### B18. Lũy thừa với số mũ thực — printed SGK pp.4–9
- Khám phá: 1.1. Lũy thừa với số mũ nguyên / 1.2. Lũy thừa với số mũ hữu tỉ / 1.3. Lũy thừa với số mũ thực
- Kiến thức SGK: 2.1. Lũy thừa với số mũ nguyên / 2.2. Lũy thừa với số mũ hữu tỉ / 2.3. Lũy thừa với số mũ thực
- REUSED_CANONICAL: `FIG-G11-CHVI-B18-01_R00.svg` | blob `79528bcd2c87eb40b1b54f18c697b0ae3458e642`

### B19. Lôgarit — printed SGK pp.10–15
- Khám phá: 1.1. Khái niệm lôgarit / 1.2. Tính chất của lôgarit / 1.3. Lôgarit thập phân và lôgarit tự nhiên
- Kiến thức SGK: 2.1. Khái niệm lôgarit / 2.2. Tính chất của lôgarit / 2.3. Lôgarit thập phân và lôgarit tự nhiên
- REUSED_CANONICAL: `FIG-G11-CHVI-B19-01_R00.svg` | blob `fe2895ac101dcc4cf4046d57428181ad0f448dc8`

### B20. Hàm số mũ và hàm số lôgarit — printed SGK pp.16–19
- Khám phá: 1.1. Hàm số mũ / 1.2. Hàm số lôgarit
- Kiến thức SGK: 2.1. Hàm số mũ / 2.2. Hàm số lôgarit
- REUSED_CANONICAL: `FIG-G11-CHVI-B20-01_R00.svg` | blob `64bcb465bd6d809095a4ca2b910555e314badb69`
- NEW_SVG_GAP: `G11_B20_DECREASING_EXP_LOG_AUTHORING_20261123.svg` | blob `e0edabf109720b5720e2419c8b0f2c4af6045b50`

### B21. Phương trình, bất phương trình mũ và lôgarit — printed SGK pp.20–24
- Khám phá: 1.1. Phương trình mũ / 1.2. Phương trình lôgarit / 1.3. Bất phương trình mũ / 1.4. Bất phương trình lôgarit
- Kiến thức SGK: 2.1. Phương trình mũ / 2.2. Phương trình lôgarit / 2.3. Bất phương trình mũ / 2.4. Bất phương trình lôgarit
- REUSED_CANONICAL: `FIG-G11-CHVI-B21-01_R00.svg` | blob `6d43f842d096b974eb70af21e6751f1ec70eea00`
- NEW_SVG_GAP: `G11_B21_EXP_LOG_THRESHOLD_AUTHORING_20261123.svg` | blob `f2c7fdfbb16c79d43ceb36b9c8df35ddb042e3cb`

## 4. Phân biệt phạm vi

Không được hiểu gói kiến thức mới là đề/đáp án/rubric RD1 đã nghiệm thu, không thay việc kiểm real-user device hay RELEASE AP1–AP5/R1–R5. `Core/Luyện tập=FROZEN`, `Tự kiểm tra cuối chương=FROZEN`, `Assessment/Mastery=FROZEN`. HTML/card style và source SVG đã tự kiểm syntax, **computed DOM, PDF visual và browser pixel thuộc cổng chưa xác minh**.

---

# 5. NGUYÊN VĂN BỐN FILE TRANG KIẾN THỨC — SHA LOCKED

## B18 — Lũy thừa với số mũ thực
CANONICAL_PATH: `docs/thpt-preview/sgk/lop-11/chuong-vi/bai-18.md`  
HEAD: `9933fdbaca1c9958c3790b838c8b9d8974fa81ae`  
BLOB: `e4a0c64cd075b300657f8f0df93fc54b0ab01caa`  

~~~~markdown
# Bài 18. Lũy thừa với số mũ thực

<style>
/* Chỉ learner B18: 3+1 theo ngữ nghĩa; giữ nguyên Golden/UI dùng chung. */
.md-typeset:has([data-g11-b18-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#e8f7f2;border:1px solid #a9dccc;border-left:4px solid #087d69;color:#174137}
.md-typeset:has([data-g11-b18-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#eaf1fc;border:1px solid #a5bee5;border-left:4px solid #4879c2;color:#193d66}
.md-typeset:has([data-g11-b18-knowledge-only]) .thpt-r4-key-formula {background:transparent;border:1px solid #8c9ab0;border-left:4px solid #64748b;border-radius:10px;padding:.75rem 1rem;margin:.7rem 0;line-height:1.7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b18-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b18-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b18-knowledge-only]) .thpt-r4-key-formula {background:transparent;color:inherit;border-color:#8c9ab0;border-left-color:#bdc8d8}
</style>

<div class="thpt-r4-screen" data-thpt-r4 data-g11-b18-knowledge-only>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VI · KẾT NỐI TRI THỨC · TẬP HAI</p>
<p class="thpt-r4-lead">Hiểu vì sao số mũ được mở rộng từ nguyên → hữu tỉ → thực, đọc đúng căn bậc n, giữ điều kiện cơ số và vận dụng vào biến đổi, so sánh, lãi kép.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương VI</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    Em đã quen với \(2^3=8\): số mũ 3 nói có ba thừa số 2. Nhưng kí hiệu \(2^{-1}\), \(2^{1/2}\), \(2^{\sqrt2}\) có còn ý nghĩa “nhân lặp” không? Không. Ta phải mở rộng phép lũy thừa theo cách **giữ được những quy tắc nhất quán**, đồng thời không làm phép tính vô nghĩa. Đây là cầu nối từ căn thức tới hàm số mũ và lôgarit; biết bản chất sẽ giúp em không nhầm dấu trừ của số mũ với dấu âm của kết quả.

    ### 1.1. Lũy thừa với số mũ nguyên

    **Vì sao có số mũ 0 và âm?** Với cơ số 2, dãy giá trị \(2^3=8\), \(2^2=4\), \(2^1=2\) giảm một nửa mỗi khi giảm số mũ 1. Nếu tiếp tục cùng quy luật, \(2^0=1\), \(2^{-1}=\frac12\), \(2^{-2}=\frac14\). Số mũ âm không biến lũy thừa thành một số âm: nó nói **lấy nghịch đảo** của lũy thừa dương.

    | Số mũ \(n\) | \(-2\) | \(-1\) | \(0\) | \(1\) | \(2\) |
    | :-- | --: | --: | --: | --: | --: |
    | \(2^n\) | \(\frac14\) | \(\frac12\) | \(1\) | \(2\) | \(4\) |

    Khi \(a\ne0\), ta định nghĩa \(a^0=1\) và \(a^{-n}=\frac1{a^n}\) với \(n\) nguyên dương. Điều kiện \(a\ne0\) là thật sự cần: \(0^{-1}=\frac10\) không có nghĩa. Trong phạm vi bài này \(0^0\) cũng không định nghĩa, trong khi \(0^n=0\) với \(n\) nguyên dương.

    Các quy tắc quen thuộc \(a^ma^n=a^{m+n}\), \(a^m/a^n=a^{m-n}\) tiếp tục đúng cho số mũ nguyên khi các cơ số khác 0 và phép chia có nghĩa. **Đừng áp quy tắc nhân cho phép cộng**: \(2^2+2^3=12\ne2^5\). Với cơ số \(a>1\), số mũ tăng thì \(a^n\) tăng; với \(0<a<1\), thứ tự đảo chiều.

    Lũy thừa mũ nguyên còn giúp viết số liệu rất lớn hoặc rất nhỏ: \(0{,}0000042=4{,}2\cdot10^{-6}\) m. Trong kí hiệu khoa học, hệ số dương nằm trong khoảng từ 1 đến dưới 10; số mũ là số nguyên cho biết dịch dấu phẩy bao nhiêu bậc. Đây là cách viết giá trị, không phải phép làm tròn tùy tiện.

    **Vận dụng.** Hãy tính \(3^{-2}\), \((-\frac12)^{-3}\) và giải thích vì sao \(0^{-2}\) không xác định.

    ??? question "Đối chiếu"

        **Lời giải:** \(3^{-2}=\frac1{3^2}=\frac19\). Với cơ số \(-\frac12\ne0\), \((-\frac12)^{-3}=\frac1{(-1/2)^3}=-8\). Còn \(0^{-2}=\frac1{0^2}=\frac10\) vô nghĩa. Kết quả âm của biểu thức thứ hai đến từ **cơ số âm và số mũ lẻ**, không phải vì số mũ âm.

    ??? tip "Kiểm lỗi"

        Nếu tính \(3^{-2}=-9\), em đã nhầm dấu trừ trước số mũ với dấu trừ trước cả lũy thừa. Hãy đọc \(a^{-n}\) thành “nghịch đảo của \(a^n\)” rồi mới thay cơ số.

    ### 1.2. Lũy thừa với số mũ hữu tỉ

    **Vì sao lũy thừa phân số lại liên quan căn?** Giả sử muốn giữ \((a^{1/2})^2=a\) với \(a>0\). Số **dương** có bình phương bằng \(a\) là \(\sqrt a\), nên cần đặt \(a^{1/2}=\sqrt a\). Tương tự, \(a^{1/3}=\sqrt[3]a\), và \(a^{m/n}=\sqrt[n]{a^m}\) cho \(a>0\), \(n\) nguyên dương, \(m\) nguyên. Định nghĩa này không mang nghĩa “nhân \(a\) với nhau \(m/n\) lần”.

    Trước khi dùng định nghĩa ấy, phải phân biệt **căn bậc \(n\)** của một số thực và **căn số học**:

    | Bài toán | Số thực có thể nhận được | Điều kiện chính |
    | :-- | :-- | :-- |
    | \(x^3=-8\) | \(x=-2\) | Căn bậc lẻ của số âm tồn tại duy nhất |
    | \(x^2=9\) | \(x=-3\) hoặc \(x=3\) | Số dương có hai căn bậc chẵn đối nhau |
    | \(\sqrt9\) | \(3\) | Kí hiệu căn bậc hai **lấy giá trị không âm** |
    | \(\sqrt{-9}\) | Không có số thực | Số âm không có căn bậc chẵn thực |

    Đó là lí do \(\sqrt{x^2}=|x|\), không luôn bằng \(x\). Ví dụ \(x=-5\) thì \(\sqrt{(-5)^2}=\sqrt{25}=5\ne-5\). Với căn bậc lẻ, \(\sqrt[3]{x^3}=x\) cho cả \(x<0\).

    **Một hình có sẵn giúp đọc liên hệ:** Quan sát đồ thị \(2^x\) ở dưới. Điểm có hoành độ \(x=\frac12\) ứng với tung độ \(\sqrt2\): vì \((2^{1/2})^2=2\). Các điểm \(x=-1,0,1\) lần lượt ứng với \(\frac12,1,2\). Hình diễn tả cùng quy luật khi ta mở rộng tập hợp các số mũ, chứ không chứng minh được mọi công thức chỉ bằng đo hình.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVI-B18-01_R00.svg" alt="Đồ thị lũy thừa 2 mũ x có các điểm âm, không, một phần hai và dương đúng giá trị"><figcaption><strong>Hướng dẫn đọc:</strong> xem điểm màu cam tại \(x=\frac12\) có tung độ \(\sqrt2\); xem các mốc \((-2,\frac14)\), \((-1,\frac12)\), \((0,1)\), \((1,2)\), \((2,4)\). Cơ số 2 dương và lớn hơn 1, nên giá trị tăng khi số mũ tăng.</figcaption></figure>

    **Giới hạn áp dụng quan trọng:** SGK định nghĩa lũy thừa số mũ hữu tỉ tổng quát trong bài này với **cơ số \(a>0\)**. Căn bậc lẻ của số âm vẫn có nghĩa, ví dụ \(\sqrt[3]{-8}=-2\); nhưng không được từ trường hợp căn bậc lẻ suy ra một **cơ số âm** có lũy thừa với **mọi** số mũ thực. Nếu bỏ điều kiện \(a>0\), các phép biến đổi nâng lũy thừa thành lũy thừa khác có thể sai hoặc vô nghĩa.

    **Vận dụng.** Tính \(27^{2/3}\), \(\left(\frac1{16}\right)^{-3/4}\) và giải thích tại sao \(\sqrt{x^2}=|x|\).

    ??? question "Đối chiếu"

        **Lời giải:** \(27^{2/3}=(\sqrt[3]{27})^2=3^2=9\); \((\frac1{16})^{-3/4}=(16)^{3/4}=(\sqrt[4]{16})^3=2^3=8\). \(\sqrt{x^2}\) là căn không âm của số \(x^2\ge0\), nên bằng \(|x|\).

    ??? tip "Kiểm lỗi"

        Nếu được \(-5\) từ \(\sqrt{(-5)^2}\), em đang dùng căn như phép “triệt tiêu bình phương” mà quên điều kiện căn số học không âm. Với số mũ phân số, luôn ghi **cơ số dương** trước khi dùng luật.

    ### 1.3. Lũy thừa với số mũ thực

    **Vì sao còn phải định nghĩa \(a^{\sqrt2}\)?** \(\sqrt2\) không phải phân số, nên công thức số mũ hữu tỉ chưa áp trực tiếp. Ta có thể chọn các phân số ngày càng gần \(\sqrt2\): \(1{,}4;1{,}41;1{,}414;1{,}4142;\ldots\). Với \(a>0\), các giá trị \(a^{1{,}4}\), \(a^{1{,}41}\), ... tiến đến **một giá trị dương xác định**, không phụ thuộc vào cách chọn dãy phân số xấp xỉ. Giá trị đó là \(a^{\sqrt2}\). Chính Chương V về **giới hạn dãy số** giúp ta hiểu cách tạo nghĩa cho số mũ vô tỉ.

    Sự mở rộng này giữ nguyên các quy tắc với \(a,b>0\) và \(x,y\in\mathbb R\): nhân cùng cơ số thì cộng số mũ, chia cùng cơ số thì trừ số mũ, lũy thừa của lũy thừa thì nhân hai số mũ, và các quy tắc cho tích/thương cơ số dương. Nhưng không được tự phân phối lũy thừa qua **phép cộng**: \((a+b)^x\ne a^x+b^x\) nói chung.

    **So sánh cần để ý cơ số:** Nếu \(a>1\), từ \(x<y\) suy \(a^x<a^y\). Nếu \(0<a<1\), từ \(x<y\) lại suy \(a^x>a^y\). Khi so sánh \(8^{\sqrt3}\) và \(4^{2\sqrt3}\), đưa cả hai về cơ số \(2>1\): \(8^{\sqrt3}=2^{3\sqrt3}\), \(4^{2\sqrt3}=2^{4\sqrt3}\), nên biểu thức đầu nhỏ hơn biểu thức sau. Không so sánh riêng hai cơ số khi hai số mũ khác nhau.

    **Máy tính cho giá trị gần đúng**, ví dụ \(2^{\sqrt2}\) không thể ghi bằng một số thập phân hữu hạn chính xác. Ta nhập đầy đủ số mũ có dấu ngoặc (hoặc phím lũy thừa tùy máy), rồi làm tròn theo yêu cầu. Hãy phân biệt kí hiệu \(=\) với \(\approx\): \(8^{2/3}=4\) chính xác, còn \(2^{\sqrt2}\approx2{,}6651\) khi làm tròn bốn chữ số thập phân.

    **Mô hình lãi kép:** Gửi \(P\) triệu đồng, lãi suất \(r\) mỗi kì, sau \(N\) kì nếu lãi nhập gốc ta có \(A=P(1+r)^N\). Nếu chỉ cập nhật sau từng kì trọn vẹn, \(N\) là số nguyên không âm; dùng \(N\) thực cần một **giả thiết mô hình bổ sung**, không tự coi mọi khoản gửi thực tế được tính theo số mũ không nguyên. Chính cách lũy thừa mô tả tăng trưởng theo tỉ lệ giúp môn học có ứng dụng.

    **Vận dụng.** Không dùng máy tính, so sánh \(8^{\sqrt3}\) và \(4^{2\sqrt3}\). Với máy tính, ước lượng \(2^{\sqrt2}\) đến bốn chữ số sau dấu phẩy; phần nào là chính xác, phần nào gần đúng?

    ??? question "Đối chiếu"

        **Lời giải:** \(8^{\sqrt3}=2^{3\sqrt3}\), \(4^{2\sqrt3}=2^{4\sqrt3}\). Vì \(3\sqrt3<4\sqrt3\) và \(2>1\), nên \(8^{\sqrt3}<4^{2\sqrt3}\) là kết luận **chính xác**. Máy tính cho \(2^{\sqrt2}\approx2{,}6651\): kết quả thập phân là **gần đúng** sau làm tròn.

    ??? tip "Kiểm lỗi"

        Không so sánh hai biểu thức có cả cơ số lẫn số mũ khác nhau chỉ bằng cách nhìn cơ số. Đưa về cùng cơ số và kiểm cơ số đó **lớn hơn 1 hay nhỏ hơn 1** trước khi so số mũ.

=== "Kiến thức SGK"

    ### 2.1. Lũy thừa với số mũ nguyên

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Lũy thừa với số mũ nguyên</strong><p>Với số nguyên dương \(n\) và \(a\in\mathbb R\), \(a^n\) là tích \(n\) thừa số đều bằng \(a\). Với <strong>\(a\ne0\)</strong>, \(a^0=1\) và \(a^{-n}=1/a^n\). \(a\) là cơ số, \(n\) là số mũ. \(0^n=0\) nếu \(n>0\); \(0^0\) và \(0^{-n}\) không xác định trong bài này.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Các phép tính lũy thừa với số mũ nguyên</strong><p>Với \(a,b\ne0\) và \(m,n\in\mathbb Z\): \(a^ma^n=a^{m+n}\); \(\dfrac{a^m}{a^n}=a^{m-n}\); \((a^m)^n=a^{mn}\); \((ab)^n=a^nb^n\); \(\left(\dfrac ab\right)^n=\dfrac{a^n}{b^n}\). Quy tắc chỉ đúng khi các biểu thức trong đó có nghĩa.</p></div>

    **Phương pháp đọc số mũ âm:** \(a^{-n}=\dfrac1{a^n}\) là **nghịch đảo**, không phải \(-a^n\). Ví dụ \((-2)^{-3}=\frac1{(-2)^3}=-\frac18\), còn \(2^{-3}=\frac18\).

    **So sánh với cơ số dương:** \(a>1\) thì \(m>n\Leftrightarrow a^m>a^n\); \(0<a<1\) thì \(m>n\Leftrightarrow a^m<a^n\). Với cơ số âm, các mệnh đề đơn điệu này **không tự áp dụng**.

    **Ứng dụng kí hiệu khoa học:** \(c\cdot10^k\), với \(1\le|c|<10\), \(k\in\mathbb Z\), dùng để ghi số liệu rất lớn/nhỏ (ở bài SGK xét số dương \(c>0\)). Ví dụ \(0{,}0000042=4{,}2\cdot10^{-6}\).

    ### 2.2. Lũy thừa với số mũ hữu tỉ

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Căn bậc \(n\) của một số thực</strong><p>Cho \(a\in\mathbb R\), \(n\in\mathbb N^*\). Số thực \(b\) là <strong>căn bậc \(n\)</strong> của \(a\) nếu \(b^n=a\). Khi \(n\) lẻ, mỗi \(a\) có một căn bậc \(n\) thực. Khi \(n\) chẵn, \(a>0\) có hai căn đối nhau; \(\sqrt[n]a\) chỉ <strong>căn số học không âm</strong>. Nếu \(a<0\), không có căn bậc chẵn thực; căn bậc \(n\) của 0 là 0.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Căn bậc \(n\) (khi các biểu thức có nghĩa)</strong><p>Với cùng bậc \(n\), \(\sqrt[n]a\sqrt[n]b=\sqrt[n]{ab}\); \(\dfrac{\sqrt[n]a}{\sqrt[n]b}=\sqrt[n]{a/b}\) khi mẫu khác 0 và mọi căn xác định. Với lũy thừa, \(\sqrt[n]{a^n}=a\) nếu \(n\) lẻ, còn \(\sqrt[n]{a^n}=|a|\) nếu \(n\) chẵn. Không bỏ điều kiện dấu ở căn bậc chẵn.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Lũy thừa với số mũ hữu tỉ</strong><p>Với <strong>\(a>0\)</strong>, số hữu tỉ \(r=\dfrac mn\), \(m\in\mathbb Z\), \(n\in\mathbb N^*\), đặt \(a^r=a^{m/n}=\sqrt[n]{a^m}=(\sqrt[n]a)^m\). Giá trị không phụ thuộc cách biểu diễn cùng một số hữu tỉ \(r\). Các tính chất lũy thừa mũ nguyên mở rộng cho trường hợp này khi cơ số dương.</p></div>

    <div class="thpt-r4-key-formula" role="note"><strong>Công thức — Liên hệ căn và số mũ hữu tỉ</strong><p>Với \(a>0,\ n\in\mathbb N^*,\ m\in\mathbb Z\): \(\displaystyle a^{m/n}=\sqrt[n]{a^m}=(\sqrt[n]a)^m\). Đặc biệt \(a^{1/2}=\sqrt a\), \(a^{1/3}=\sqrt[3]a\), \(a^{-1/2}=1/\sqrt a\).</p></div>

    **Hạn chế:** Căn bậc lẻ của số âm có nghĩa, nhưng không tự suy quy tắc lũy thừa với **mọi số mũ thực** cho cơ số âm. Khi biến đổi các số mũ phân số theo định nghĩa chung của SGK, phải ghi \(a>0\). \(\sqrt{x^2}=|x|\).

    ### 2.3. Lũy thừa với số mũ thực

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Lũy thừa số mũ vô tỉ và số mũ thực</strong><p>Cho <strong>\(a>0\)</strong>, số vô tỉ \(\alpha\) và một dãy số hữu tỉ \(r_n\to\alpha\). Khi đó dãy \(a^{r_n}\) có một giới hạn dương, <strong>không phụ thuộc dãy hữu tỉ xấp xỉ</strong> đã chọn; giới hạn đó gọi là \(a^\alpha\). Cùng với số mũ hữu tỉ đã định nghĩa, ta có \(a^x\) cho mọi \(x\in\mathbb R\) khi \(a>0\).</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Lũy thừa với số mũ thực</strong><p>Với \(a,b>0\), \(x,y\in\mathbb R\): \(a^xa^y=a^{x+y}\), \(a^x/a^y=a^{x-y}\), \((a^x)^y=a^{xy}\), \((ab)^x=a^xb^x\), \((a/b)^x=a^x/b^x\). <strong>Điều kiện cơ số dương là bắt buộc</strong> cho bộ tính chất số mũ thực tổng quát.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — So sánh lũy thừa cùng cơ số dương</strong><p>Nếu \(a>1\), từ \(x<y\) suy \(a^x<a^y\). Nếu \(0<a<1\), từ \(x<y\) suy \(a^x>a^y\). Nếu \(a=1\), mọi \(1^x=1\); không có chiều bất đẳng thức nghiêm ngặt.</p></div>

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVI-B18-01_R00.svg" alt="Đồ thị hai mũ x với các điểm x bằng âm hai âm một không một phần hai một và hai"><figcaption><strong>Tra hình:</strong> biểu diễn \(2^{-2}=\frac14\), \(2^{-1}=\frac12\), \(2^0=1\), \(2^{1/2}=\sqrt2\), \(2^1=2\), \(2^2=4\). Đây là **minh họa** cho cơ số \(2>1\), không đại diện cho quan hệ so sánh khi \(0<a<1\).</figcaption></figure>

    **Cách chọn phép biến đổi:** Muốn tính chính xác, đưa các lũy thừa về cùng cơ số và dùng quy tắc số mũ khi cơ số dương. Muốn so sánh, trước tiên xét cơ số lớn hơn 1 hay nằm giữa 0 và 1. Muốn tính gần đúng \(a^\alpha\) với \(\alpha\) vô tỉ, dùng máy tính và ghi dấu \(\approx\) kèm mức làm tròn.

    | Dạng | Kết quả và điều kiện |
    | :-- | :-- |
    | Giá trị chính xác | \(27^{2/3}=9\), \(16^{3/4}=8\) |
    | Giá trị gần đúng | \(2^{\sqrt2}\approx2{,}6651\) (4 chữ số thập phân) |
    | Lãi kép từng kì | \(A=P(1+r)^N\), \(1+r>0\), \(N\) là số kì trọn vẹn |

    **Kiểm máy tính:** Ví dụ \(2^{\sqrt2}\) cần nhập cơ số 2 và số mũ \(\sqrt2\) trong cùng một phép lũy thừa; số thập phân trên màn hình là kết quả gần đúng. Cần đọc đúng dấu âm và dấu ngoặc với cơ số âm trong **bài số mũ nguyên**, không lạm dụng máy để “hợp thức hóa” biểu thức cơ số âm mũ vô tỉ.

=== "Ví dụ"

    ### 3.1. Số mũ âm nghĩa là nghịch đảo

    **Đề bài.** Tính \(A=(\frac23)^{-3}\), \(B=(-2)^{-3}\). Giải thích tại sao hai kết quả khác dấu.

    **Phân tích:** Cơ số đều khác 0 nên được dùng định nghĩa \(a^{-n}=1/a^n\). Với cơ số âm, lũy thừa mũ lẻ âm vì tích ba thừa số âm; dấu trừ trong **số mũ** chỉ yêu cầu lấy nghịch đảo.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.1"><p><strong>Lời giải.</strong> \(A=\dfrac1{(2/3)^3}=\dfrac1{8/27}=\dfrac{27}{8}\). Còn \(B=\dfrac1{(-2)^3}=\dfrac1{-8}=-\dfrac18\). Dấu của \(B\) âm do cơ số \(-2\) được nâng lên bậc lẻ.</p></div>

    **Kiểm lại:** \((2/3)^3\cdot A=1\), \((-2)^3\cdot B=1\). Không ghi \((2/3)^{-3}=-(2/3)^3\).

    ### 3.2. Số mũ nguyên trong kí hiệu khoa học

    **Đề bài.** Viết \(0{,}0000042\) m dưới dạng \(a\cdot10^n\) với \(1\le a<10\), \(n\) nguyên.

    **Phân tích:** Muốn hệ số thành \(4{,}2\), ta dịch dấu phẩy sang phải sáu chữ số, nên phải bù bằng \(10^{-6}\) để giữ nguyên độ lớn.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.2"><p><strong>Lời giải.</strong> \(0{,}0000042=4{,}2\cdot10^{-6}\). Hệ số \(4{,}2\) nằm trong \([1,10)\), số mũ \(-6\) nguyên, đúng dạng khoa học của một số dương.</p></div>

    **Kiểm lại:** \(4{,}2\cdot0{,}000001=0{,}0000042\). Đơn vị mét không thay đổi khi đổi cách viết.

    ### 3.3. Căn bậc chẵn và căn bậc lẻ

    **Đề bài.** Tính \(\sqrt[3]{-125}\), \(\sqrt[4]{16}\); giải phương trình \(x^4=16\) trong tập số thực.

    **Phân tích:** Căn bậc lẻ giữ dấu của số dưới căn; kí hiệu căn bậc chẵn chỉ **giá trị không âm**, khác với tìm **mọi nghiệm** của phương trình lũy thừa bậc chẵn.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.3"><p><strong>Lời giải.</strong> Vì \((-5)^3=-125\), \(\sqrt[3]{-125}=-5\). Vì \(2^4=16\) và \(2\ge0\), \(\sqrt[4]{16}=2\). Phương trình \(x^4=16\) có hai nghiệm thực \(x=2\) và \(x=-2\), vì cả hai có lũy thừa bậc bốn bằng 16.</p></div>

    **Kiểm lại:** \(\sqrt[4]{16}\) chỉ bằng 2, không viết \(\pm2\) sau **dấu căn**; \(\pm2\) là tập nghiệm của phương trình \(x^4=16\).

    ### 3.4. Vì sao cần dấu giá trị tuyệt đối?

    **Đề bài.** Rút gọn \(P=\sqrt{x^2}+\sqrt[3]{x^3}\) với \(x=-7\). Viết công thức tổng quát cho \(x\in\mathbb R\).

    **Phân tích:** Căn chẵn phải không âm, còn căn lẻ có thể âm. Vì vậy chỉ thay \(\sqrt{x^2}\) bằng \(|x|\), không phải \(x\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.4"><p><strong>Lời giải.</strong> Với mọi \(x\in\mathbb R\), \(\sqrt{x^2}=|x|\), \(\sqrt[3]{x^3}=x\), nên \(P=|x|+x\). Khi \(x=-7\), \(P=7-7=0\). Nếu \(x\ge0\), \(P=2x\); nếu \(x<0\), \(P=0\).</p></div>

    **Kiểm lại:** Thế \(x=-7\) trực tiếp: \(\sqrt{49}+\sqrt[3]{-343}=7+(-7)=0\). Việc bỏ dấu giá trị tuyệt đối sẽ cho sai kết quả \(-14\).

    ### 3.5. Tính lũy thừa với số mũ hữu tỉ

    **Đề bài.** Tính \(A=16^{3/4}\) và \(B=(\frac1{81})^{-3/4}\).

    **Phân tích:** Cả hai cơ số dương, đủ điều kiện dùng \(a^{m/n}=(\sqrt[n]a)^m\). Với \(B\), số mũ âm yêu cầu lấy nghịch đảo; có thể đổi \(\frac1{81}=3^{-4}\) để gộp số mũ.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.5"><p><strong>Lời giải.</strong> \(16^{3/4}=(\sqrt[4]{16})^3=2^3=8\). Với \(B\), \((\frac1{81})^{-3/4}=(3^{-4})^{-3/4}=3^3=27\). Cũng có thể viết \(B=81^{3/4}=(\sqrt[4]{81})^3=3^3=27\).</p></div>

    **Kiểm lại:** \(8^4=16^3\), \(27^4=81^3\) đúng. Đừng đánh đồng số mũ \(-3/4\) với phép **trừ** đi \(3/4\) của cơ số.

    ### 3.6. Rút gọn số mũ chứa căn

    **Đề bài.** Với \(a>0\), rút gọn \(T=\dfrac{a^{\sqrt7+1}\cdot a^{2-\sqrt7}}{(a^{\sqrt3+1})^{\sqrt3-1}}\).

    **Phân tích:** Cùng cơ số dương nên gộp số mũ của tích thành tổng, số mũ của lũy thừa thành tích. Hiệu hai bình phương xuất hiện trong \((\sqrt3+1)(\sqrt3-1)\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.6"><p><strong>Lời giải.</strong> Tử số \(a^{\sqrt7+1}a^{2-\sqrt7}=a^{\sqrt7+1+2-\sqrt7}=a^3\). Mẫu số \((a^{\sqrt3+1})^{\sqrt3-1}=a^{(\sqrt3+1)(\sqrt3-1)}=a^{3-1}=a^2\). Do đó \(T=a^3/a^2=a\).</p></div>

    **Kiểm lại:** Điều kiện \(a>0\) làm mọi số mũ vô tỉ và phép chia trong bài có nghĩa. Cả tử/mẫu đều là lũy thừa dương.

    ### 3.7. So sánh số mũ vô tỉ không cần máy tính

    **Đề bài.** So sánh \(8^{\sqrt3}\) và \(4^{2\sqrt3}\); sau đó so sánh \((\frac12)^{\sqrt2}\) với \((\frac12)^{3/2}\).

    **Phân tích:** Cặp đầu đưa về cùng cơ số \(2>1\); cặp sau đã có cơ số \(0<\frac12<1\), nên khi tăng số mũ, lũy thừa **giảm**.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.7"><p><strong>Lời giải.</strong> \(8^{\sqrt3}=2^{3\sqrt3}\), \(4^{2\sqrt3}=2^{4\sqrt3}\). Vì \(3\sqrt3<4\sqrt3\) và \(2>1\), \(8^{\sqrt3}<4^{2\sqrt3}\). Mặt khác \(\sqrt2<\frac32\) (vì \(2<9/4\)); do \(0<\frac12<1\), \((\frac12)^{\sqrt2}>(\frac12)^{3/2}\).</p></div>

    **Kiểm lại:** Phải đọc **hai hướng**: với \(a>1\) giữ chiều bất đẳng thức, với \(0<a<1\) đảo chiều. Không so sánh bằng cách xem riêng độ lớn của cơ số.

    ### 3.8. Lãi kép theo kì hạn và phép tính gần đúng

    **Đề bài.** Gửi \(100\) triệu đồng với lãi suất cố định \(6\%\) một năm, cuối mỗi năm lãi nhập gốc, không rút tiền và không có phí. Tính số tiền cuối năm thứ ba, làm tròn đến \(0{,}01\) triệu đồng.

    **Phân tích:** Tiền cuối mỗi kì được nhân với \(1+0{,}06=1{,}06\). Vì có đúng ba lần nhập lãi, số mũ là \(3\) nguyên; đây là ứng dụng của mô hình lãi kép, không tự nội suy sang các phần năm chưa quy định.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.8"><p><strong>Lời giải.</strong> \(A=100(1{,}06)^3=100\cdot1{,}191016=119{,}1016\) triệu đồng. Làm tròn đến \(0{,}01\) triệu đồng, số tiền xấp xỉ **\(119{,}10\) triệu đồng**.</p></div>

    **Kiểm lại:** Năm 1: 106 triệu; năm 2: 112,36 triệu; năm 3: 119,1016 triệu. Tiền lãi năm sau tính trên **vốn đã cộng lãi**, không phải cộng mỗi năm đúng 6 triệu.

=== "Lỗi thường gặp"

    ### 4.1. Hiểu số mũ âm là dấu âm ở ngoài

    **Dấu hiệu:** Tính \(3^{-2}=-9\) hoặc cho \((\frac23)^{-3}\) một kết quả âm.

    **Vì sao sai:** Số mũ \(-n\) của cơ số khác 0 yêu cầu lấy **nghịch đảo \(1/a^n\)**, không đổi dấu kết quả.

    **Cách sửa:** Ghi \(a^{-n}=1/a^n\) trước khi thay số, rồi xác định dấu từ **cơ số và tính chẵn/lẻ** của số mũ nguyên.

    ### 4.2. Nhầm dấu căn số học với nghiệm phương trình

    **Dấu hiệu:** Viết \(\sqrt{9}=\pm3\) hoặc \(\sqrt[4]{16}=\pm2\).

    **Vì sao sai:** Kí hiệu căn bậc chẵn \(\sqrt[n]a\) chỉ **giá trị không âm**; hai căn đối nhau xuất hiện khi giải \(x^n=a\), không phải trong một kí hiệu căn.

    **Cách sửa:** Tách “tính \(\sqrt[n]a\)” khỏi “giải \(x^n=a\)”; kiểm bậc căn chẵn/lẻ và dấu số dưới căn.

    ### 4.3. Bỏ giá trị tuyệt đối khi căn bậc chẵn của lũy thừa

    **Dấu hiệu:** Rút gọn \(\sqrt{x^2}=x\) cho mọi \(x\in\mathbb R\).

    **Vì sao sai:** Với \(x<0\), \(x\) âm nhưng căn số học \(\sqrt{x^2}\) không âm.

    **Cách sửa:** Dùng \(\sqrt{x^2}=|x|\). Chỉ khi có điều kiện **\(x\ge0\)** mới được viết bằng \(x\).

    ### 4.4. Bỏ điều kiện cơ số dương ở số mũ phân số/thực

    **Dấu hiệu:** Lấy căn bậc lẻ được \(\sqrt[3]{-8}=-2\) rồi khẳng định \((-8)^\alpha\) có nghĩa với mọi \(\alpha\in\mathbb R\).

    **Vì sao sai:** Việc căn bậc lẻ của cơ số âm có nghĩa **không mở rộng thành phép lũy thừa số mũ thực tổng quát cho cơ số âm**. Căn bậc chẵn của số âm không có giá trị thực.

    **Cách sửa:** Dùng \(a>0\) cho các tính chất lũy thừa mũ hữu tỉ/thực trong SGK; nếu đang giải một căn bậc lẻ cụ thể thì phát biểu đúng riêng trường hợp đó.

    ### 4.5. Gộp số mũ cho phép cộng hoặc quên chiều so sánh

    **Dấu hiệu:** Viết \(2^2+2^3=2^5\) hoặc cho \(x<y\Rightarrow(\frac12)^x<(\frac12)^y\).

    **Vì sao sai:** Quy tắc **cộng số mũ** áp dụng cho **phép nhân** hai lũy thừa cùng cơ số; với cơ số \(0<a<1\), lũy thừa **giảm** khi số mũ tăng.

    **Cách sửa:** Phân biệt dấu phép toán và kiểm cơ số so với 1. Tính đối chiếu \(4+8=12\ne32\).

    ### 4.6. Nhầm kết quả máy tính và lãi kép với giá trị chính xác hoặc mô hình vô điều kiện

    **Dấu hiệu:** Ghi \(2^{\sqrt2}=2{,}6651\) như đẳng thức chính xác, hoặc tính \(100(1{,}06)^{2{,}5}\) cho tiền gửi lãi nhập gốc mỗi năm mà không nêu quy ước phần năm.

    **Vì sao sai:** Giá trị thập phân làm tròn là **gần đúng**; số kì lãi kép là một dữ kiện mô hình, không tự suy cách tính nửa kì từ lãi ghép mỗi năm.

    **Cách sửa:** Ghi \(\approx\) cùng độ chính xác, nêu rõ số kì và quy ước lãi suất khi xử lý mô hình tài chính.

    **Học tiếp:** [Core và Luyện tập Bài 18](luyen-tap.md) · [Tự luận Chương VI](../../../thu-vien/tu-luan-g11-chuong-vi.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">Nguồn đối chiếu: SGK Toán 11 Kết nối tri thức với cuộc sống, tập hai, Bài 18, trang in 4–9. Ba mục chính: Lũy thừa với số mũ nguyên; Lũy thừa với số mũ hữu tỉ; Lũy thừa với số mũ thực. Đã đối chiếu văn bản PDF số hóa và hình SGK/asset bài đang có; chưa có ảnh render trực tiếp đủ từng trang SGK, cần xác minh offset trang in↔PDF. Hình 2^x đã có sẵn trên main được tái sử dụng nguyên file trong hai tab; bảng so sánh được đặt ngay mục cần đọc. Chỉ nâng cấp learner Kiến thức, không đổi Core/Luyện tập hoặc Tự kiểm tra và ngân hàng câu.</p>
~~~~

---

## B19 — Lôgarit
CANONICAL_PATH: `docs/thpt-preview/sgk/lop-11/chuong-vi/bai-19.md`  
HEAD: `4a288c5121c42bddf94ce8d04602bb779aaa84ff`  
BLOB: `b4a8ee2f8231467ed9d676f6ecc525d94c4634e1`  

~~~~markdown
# Bài 19. Lôgarit

<style>
/* Scoped to the B19 learner page only; Golden CSS/JS chung được giữ nguyên. */
.md-typeset:has([data-g11-b19-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#e8f7f2;border:1px solid #a9dccc;border-left:4px solid #087d69;color:#174137}
.md-typeset:has([data-g11-b19-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#eaf1fc;border:1px solid #a5bee5;border-left:4px solid #4879c2;color:#193d66}
.md-typeset:has([data-g11-b19-knowledge-only]) .thpt-r4-key-formula {background:transparent;border:1px solid #8c9ab0;border-left:4px solid #64748b;border-radius:10px;padding:.75rem 1rem;margin:.7rem 0;line-height:1.7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b19-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b19-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b19-knowledge-only]) .thpt-r4-key-formula {background:transparent;color:inherit;border-color:#8c9ab0;border-left-color:#bdc8d8}
</style>

<div class="thpt-r4-screen" data-thpt-r4 data-g11-b19-knowledge-only>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VI · KẾT NỐI TRI THỨC · TẬP HAI</p>
<p class="thpt-r4-lead">Lôgarit trả lời câu hỏi “cần số mũ nào?”. Từ định nghĩa và điều kiện, hình thành quy tắc nhân–chia–lũy thừa, đổi cơ số, log thập phân và ln tự nhiên.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương VI</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    Bài 18 giúp em tính \(2^3=8\), tức là biết cơ số 2 và số mũ 3 thì tìm được kết quả. Nếu đảo câu hỏi thành **\(2^x=8\), tìm \(x\)**, ta đã biết kết quả là 8 nhưng chưa biết số mũ. Lôgarit chính là cách gọi tên **số mũ cần tìm**. Đây cũng là lí do nó giúp giải bài toán lãi kép: biết số vốn và số tiền mục tiêu, muốn tìm **bao nhiêu năm** phải tăng trưởng để đạt mức ấy.

    ### 1.1. Khái niệm lôgarit

    Hãy thử ba bài toán: \(2^x=8\) cho \(x=3\); \(2^x=\frac14\) cho \(x=-2\); \(2^x=\sqrt2\) cho \(x=\frac12\). Mỗi lần, ta không tính “đầu ra của lũy thừa” mà đi ngược tìm **số mũ**. Kí hiệu \(\log_2 8=3\), \(\log_2\frac14=-2\), \(\log_2\sqrt2=\frac12\) ghi lại đúng việc đó.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVI-B19-01_R00.svg" alt="Sơ đồ hai chiều từ hai mũ ba bằng tám sang lôgarit cơ số hai của tám bằng ba"><figcaption><strong>Hướng dẫn đọc:</strong> ô trái cho \(2^3=8\): biết cơ số 2 và mũ 3, tính được 8. Đi theo mũi tên ngược về ô phải để đọc \(\log_2 8=3\): biết cơ số 2 và kết quả 8, tìm lại số mũ 3. Bên dưới hình ghi rõ điều kiện \(a>0,\ a\ne1,\ b>0\).</figcaption></figure>

    **Định nghĩa có điều kiện:** Với \(a>0,\ a\ne1\) và \(M>0\), \(\log_a M\) là **số thực duy nhất \(\alpha\)** sao cho \(a^\alpha=M\). Vì \(a=1\) sẽ cho \(1^\alpha=1\) với **mọi \(\alpha\)**, không xác định được một số mũ duy nhất; còn cơ số không dương không có phép lũy thừa với mọi mũ thực như đã học. Đối số phải dương vì \(a^\alpha>0\) nếu \(a>0\).

    Lấy \(M=1\) thì số mũ bằng 0, nên \(\log_a1=0\). Lấy \(M=a\) thì số mũ bằng 1, nên \(\log_a a=1\). Hai phép tính “đi rồi quay lại” cũng đúng: \(a^{\log_a M}=M\) nếu \(M>0\), và \(\log_a(a^t)=t\) nếu \(t\in\mathbb R\). Các công thức ấy chỉ hợp lệ khi **cơ số lôgarit hợp lệ**.

    **Vận dụng.** Không dùng máy tính, tìm \(\log_3 81\), \(\log_{\frac12}8\) và xét \(\log_2(-4)\) có nghĩa thực không.

    ??? question "Đối chiếu"

        **Lời giải:** Vì \(3^4=81\), \(\log_3 81=4\). Vì \((\frac12)^{-3}=8\), \(\log_{\frac12}8=-3\). \(\log_2(-4)\) **không có nghĩa thực** vì đối số âm, trong khi \(2^\alpha>0\) với mọi \(\alpha\in\mathbb R\).

    ??? tip "Kiểm lỗi"

        Nếu \(\log_{\frac12}8\) bị ghi là \(3\), hãy thử nâng \((\frac12)^3=\frac18\), không bằng 8. Đừng nhầm **đối số** với **cơ số**, hoặc bỏ điều kiện đối số dương.

    ### 1.2. Tính chất của lôgarit

    **Vì sao lôgarit của tích lại thành tổng?** Giả sử \(M=a^u\), \(N=a^v\), với \(a>0,\ a\ne1\). Vì \(MN=a^{u+v}\) theo Bài 18, nên “số mũ cần tạo ra \(MN\)” bằng \(u+v\). Viết bằng lôgarit:
    \[
    \log_a(MN)=\log_aM+\log_aN.
    \]
    Đây là suy luận **từ phép nhân lũy thừa**, không phải một quy tắc được nhớ theo dáng chữ.

    Tương tự, \(M/N=a^{u-v}\) nên \(\log_a(M/N)=\log_aM-\log_aN\), và \(M^t=a^{ut}\) nên \(\log_a(M^t)=t\log_aM\). Trong cả ba công thức, **\(M,N>0\)**. Nếu trong một bài toán biểu thức như \(x-1\) có thể âm, em phải xét miền xác định **trước** khi tách lôgarit, không được biến đổi tùy ý.

    **Đổi cơ số có mục đích gì?** Máy tính thường có phím \(\log\) cơ số 10 và \(\ln\) cơ số \(e\), nhưng SGK có thể hỏi \(\log_4 8\). Đặt \(u=\log_a M\), nghĩa là \(M=a^u\). Lấy lôgarit cơ số \(b>0,b\ne1\) hai vế: \(\log_bM=u\log_ba\), nên
    \[
    \log_a M=\frac{\log_b M}{\log_b a}.
    \]
    Mẫu \(\log_ba\ne0\) vì \(a\ne1\). Như vậy đổi cơ số là cách **chuyển một câu hỏi số mũ sang cơ số có thể tính được**, không phải đổi bừa khi chưa kiểm cơ số.

    **Dấu và thứ tự:** Nếu \(a>1\), \(a^x\) tăng nên \(\log_a M\) cũng tăng theo \(M>0\). Nếu \(0<a<1\), điều ngược lại xảy ra: đối số lớn hơn có **lôgarit nhỏ hơn**. Chẳng hạn \(\log_{\frac12}4=-2\), \(\log_{\frac12}8=-3\), nên dù \(4<8\) thì \(-2>-3\). Không dùng quy tắc so sánh của cơ số lớn hơn 1 cho mọi cơ số hợp lệ.

    **Vận dụng.** Với \(x>1\), rút gọn \(A=\log_2(x^2-1)-\log_2(x-1)\). Sau đó tính \(\log_4 8\) bằng đổi cơ số.

    ??? question "Đối chiếu"

        **Lời giải:** Vì \(x>1\), \(x^2-1>0\) và \(x-1>0\), nên được trừ hai lôgarit: \(A=\log_2\frac{x^2-1}{x-1}=\log_2(x+1)\). Đổi cơ số 2: \(\log_4 8=\frac{\log_2 8}{\log_2 4}=\frac32\).

    ??? tip "Kiểm lỗi"

        Không thể thay \(\log_2(x^2-1)-\log_2(x-1)\) bằng \(\log_2(x^2-x)\). Quy tắc hiệu lôgarit tương ứng **phép chia** hai đối số, không phải phép trừ đối số.

    ### 1.3. Lôgarit thập phân và lôgarit tự nhiên

    Khi ghi dân số, khối lượng rất lớn hoặc nồng độ rất nhỏ, cơ số **10** đặc biệt thuận tiện vì trùng hệ thập phân. Lôgarit cơ số 10 được gọi là **lôgarit thập phân**, viết \(\log M\) hoặc \(\lg M\). Chẳng hạn \(\log1000=3\) vì \(10^3=1000\), \(\log0{,}001=-3\) vì \(10^{-3}=0{,}001\). Hai cách viết \(\log M\) và \(\log_{10}M\) là cùng một giá trị trong SGK.

    Trong mô hình lãi kép chia năm thành các kì càng ngắn, một số đặc biệt xuất hiện:
    \[
    e=\lim_{t\to+\infty}\left(1+\frac1t\right)^t\approx2{,}71828.
    \]
    Số \(e\) là số dương lớn hơn 1, nên hoàn toàn có thể làm **cơ số lôgarit**. Ta gọi \(\log_e M\) là **lôgarit tự nhiên**, viết \(\ln M\). Từ đó \(\ln e=1\), \(\ln1=0\), \(\ln(e^2)=2\). Những kết quả này đều theo định nghĩa lôgarit, không phải do phím bấm máy tính đặt ra.

    **Vì sao dùng ln cho lãi liên tục?** Gửi vốn \(P\), lãi suất năm \(r\), lãi ghép \(m\) kì/năm trong \(t\) năm cho mô hình \(P(1+r/m)^{mt}\). Khi tăng số kì ghép không giới hạn, giới hạn dẫn tới \(A=Pe^{rt}\). Muốn biết thời gian \(t\) để số tiền **gấp đôi**, giải \(2P=Pe^{rt}\) thành \(e^{rt}=2\), rồi lấy \(\ln\) hai vế: \(rt=\ln2\), nên \(t=\frac{\ln2}{r}\) (với \(r>0\)). Lôgarit lúc này chính là phép đảo **tìm thời gian trong số mũ**.

    **Về máy tính:** Phím \(\log\) và \(\ln\) cho kết quả **gần đúng** khi giá trị không biểu diễn bằng số thập phân hữu hạn; lôgarit cơ số khác tính qua \(\log_aM=\ln M/\ln a\). Ví dụ \(\log_4 8=\frac32\) là chính xác, còn \(\ln2\approx0{,}6931\) là làm tròn. Dù bấm máy, vẫn phải kiểm đối số dương và cơ số hợp lệ.

    **Một ứng dụng hóa học:** Trong mô hình pH, với nồng độ \([\mathrm H^+]>0\) (mol/lít), \(\mathrm{pH}=-\log[\mathrm H^+]\). Nếu nồng độ là \(10^{-3}\) mol/lít, pH bằng 3. Đây là ví dụ vì sao lôgarit hữu ích với các thang đo trải dài nhiều bậc 10; không cần học thêm hóa học để áp dụng quy tắc số mũ.

    **Vận dụng.** Một khoản tiền tăng liên tục theo mô hình \(A=Pe^{0{,}06t}\) (với \(t\) là số năm). Tìm thời gian để tăng gấp đôi, làm tròn đến một chữ số thập phân. Đồng thời tính pH nếu \([\mathrm H^+]=10^{-4}\) mol/lít.

    ??? question "Đối chiếu"

        **Lời giải:** \(2P=Pe^{0{,}06t}\), với \(P>0\), nên \(e^{0{,}06t}=2\). Lấy \(\ln\): \(0{,}06t=\ln2\); \(t=\frac{\ln2}{0{,}06}\approx11{,}6\) năm. Với \([\mathrm H^+]=10^{-4}\), \(\mathrm{pH}=-\log10^{-4}=-(-4)=4\).

    ??? tip "Kiểm lỗi"

        Nếu thấy \(\ln2/0{,}06\) là 11,55... thì phải **làm tròn 11,6** theo yêu cầu, không ghi bằng dấu \(=\). Công thức pH dùng **log cơ số 10** và đối số nồng độ phải dương.

=== "Kiến thức SGK"

    ### 2.1. Khái niệm lôgarit

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Lôgarit cơ số \(a\) của \(M\)</strong><p>Cho <strong>\(a>0,\ a\ne1,\ M>0\)</strong>. Số thực \(\alpha\) duy nhất thỏa \(a^\alpha=M\) được gọi là <strong>lôgarit cơ số \(a\) của \(M\)</strong>, kí hiệu \(\log_a M\). Khi đó \(\alpha=\log_a M\Leftrightarrow a^\alpha=M\). Không có lôgarit thực của 0 hay số âm; cơ số không được bằng 1.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Hệ quả trực tiếp từ định nghĩa</strong><p>Với \(a>0,\ a\ne1,\ M>0,\ t\in\mathbb R\): \(\log_a1=0\), \(\log_aa=1\), \(a^{\log_aM}=M\), và \(\log_a(a^t)=t\). Số mũ cần tìm có thể âm, 0, phân số hoặc vô tỉ; điều kiện cơ số/đối số vẫn phải giữ.</p></div>

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVI-B19-01_R00.svg" alt="Biến đổi qua lại giữa hai mũ ba bằng tám và lôgarit cơ số hai của tám bằng ba"><figcaption><strong>Tra hình:</strong> \(2^3=8\Longleftrightarrow\log_2 8=3\). Hai mũi tên là hai cách đọc **cùng một đẳng thức**; xem hàng điều kiện \(a>0,\ a\ne1,\ b>0\), không thay đối số 8 bằng số âm.</figcaption></figure>

    **Tự tra điều kiện:** Trong \(\log_{x-1}(x+2)\), phải đồng thời có \(x-1>0\), \(x-1\ne1\) và \(x+2>0\), tức \(x>1,\ x\ne2\). Không chỉ xét đối số.

    ### 2.2. Tính chất của lôgarit

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Quy tắc — Tích, thương và lũy thừa</strong><p>Với \(a>0,\ a\ne1,\ M,N>0,\ t\in\mathbb R\): \(\log_a(MN)=\log_aM+\log_aN\); \(\log_a(M/N)=\log_aM-\log_aN\); \(\log_a(M^t)=t\log_aM\). Mọi lôgarit trong phép biến đổi đều phải có đối số dương.</p></div>

    <div class="thpt-r4-key-formula" role="note"><strong>Công thức — Đổi cơ số</strong><p>Nếu \(a,b>0,\ a\ne1,\ b\ne1,\ M>0\), thì \(\displaystyle\log_aM=\frac{\log_bM}{\log_ba}\). Mẫu \(\log_ba\ne0\) nhờ \(a\ne1\). Có thể dùng \(\log\) hoặc \(\ln\) trên máy tính làm cơ số trung gian.</p></div>

    **Các hệ quả của đổi cơ số:** Nếu \(a,b>0\), \(a,b\ne1\), thì \(\log_ab=\frac1{\log_ba}\). Với \(t\ne0\), cơ số \(a^t>0,\ a^t\ne1\), nên \(\log_{a^t}M=\frac1t\log_aM\) với \(M>0\).

    **So sánh:** Cơ số \(a>1\) thì \(M>N>0\Rightarrow\log_aM>\log_aN\). Cơ số \(0<a<1\) thì bất đẳng thức **đảo chiều**; đây là điều cần nhớ khi suy từ các lũy thừa ở Bài 18.

    **Phương pháp:** Kiểm miền xác định → nếu gặp tích/thương/lũy thừa của các đối số dương thì dùng quy tắc phù hợp → nếu hai cơ số khác nhau, dùng đổi cơ số → kiểm lại các giá trị và dấu.

    ### 2.3. Lôgarit thập phân và lôgarit tự nhiên

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Lôgarit thập phân</strong><p>Với <strong>\(M>0\)</strong>, \(\log M=\log_{10}M\), còn viết \(\lg M\), là <strong>lôgarit thập phân</strong> của \(M\). Ví dụ \(\log100=2\), \(\log0{,}01=-2\).</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khái niệm — Số \(e\) và lôgarit tự nhiên</strong><p>Số \(e=\lim_{x\to+\infty}(1+1/x)^x\approx2{,}71828\) là cơ số dương khác 1. Với <strong>\(M>0\)</strong>, <strong>lôgarit tự nhiên</strong> của \(M\) là \(\ln M=\log_eM\). Do đó \(\ln1=0\), \(\ln e=1\), \(\ln(e^t)=t\).</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Công thức ứng dụng — Lãi kép liên tục</strong><p>Trong mô hình lãi kép liên tục với vốn đầu \(P>0\), lãi suất năm không đổi \(r\) và thời gian \(t\), số tiền là \(A=Pe^{rt}\). Nếu \(r>0\) và cần thời gian tăng gấp đôi, \(t=\ln2/r\). Đây là mô hình tính lãi lý tưởng, không phải quy tắc mọi ngân hàng luôn áp dụng.</p></div>

    | Dạng lôgarit | Cơ số | Ví dụ |
    | :-- | :-- | :-- |
    | \(\log M\) hoặc \(\lg M\) | \(10\) | \(\log1000=3\) |
    | \(\ln M\) | \(e\approx2{,}71828\) | \(\ln e^2=2\) |
    | \(\log_a M\) | \(a>0,\ a\ne1\) | \(\log_4 8=\frac32\) |

    **Máy tính:** Với \(a>0,\ a\ne1,\ M>0\), tính \(\log_a M\) bằng \(\ln M/\ln a\) hoặc \(\log M/\log a\); ghi \(\approx\) khi làm tròn. Dùng \(\log\) trong công thức pH, \(\ln\) trong công thức giải số mũ có cơ số \(e\). Kí hiệu gần đúng không thay thế một kết quả chính xác khi rút gọn được.

    **Ứng dụng có điều kiện:** \(\mathrm{pH}=-\log[\mathrm H^+]\) với \([\mathrm H^+]>0\) tính theo mol/lít trong mô hình SGK. Không đưa nồng độ âm hoặc 0 vào log.

=== "Ví dụ"

    ### 3.1. Tìm số mũ từ định nghĩa lôgarit

    **Đề bài.** Tính \(\log_2\frac18\) và \(\log_{\sqrt3}9\). Nói rõ cách tự kiểm.

    **Phân tích:** Đọc mỗi lôgarit thành câu hỏi “nâng **cơ số** lên số mũ nào để ra **đối số**?”. Không cần máy tính vì đối số có thể đưa về lũy thừa của cơ số.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.1"><p><strong>Lời giải.</strong> \(\frac18=2^{-3}\), nên \(\log_2\frac18=-3\). Vì \((\sqrt3)^4=3^2=9\), nên \(\log_{\sqrt3}9=4\). Hai cơ số \(2,\sqrt3\) đều dương và khác 1, hai đối số đều dương.</p></div>

    **Kiểm lại:** Nâng \(2\) lên \(-3\) được \(1/8\); nâng \(\sqrt3\) lên \(4\) được \(9\).

    ### 3.2. Cơ số nhỏ hơn 1 và số mũ âm

    **Đề bài.** Tính \(A=\log_{\frac12}32\), \(B=\log_3(3\sqrt3)\). Vì sao \(A\) âm còn \(B\) dương?

    **Phân tích:** \((\frac12)^x\) giảm khi \(x\) tăng và lớn hơn 1 nếu \(x<0\). Ngược lại \(3\sqrt3=3^{3/2}\) nên tìm số mũ dương.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.2"><p><strong>Lời giải.</strong> Vì \((\frac12)^{-5}=2^5=32\), nên \(A=-5\). Vì \(3\sqrt3=3^1\cdot3^{1/2}=3^{3/2}\), nên \(B=3/2\).</p></div>

    **Kiểm lại:** Cơ số \(1/2\) hợp lệ dù nhỏ hơn 1; \((1/2)^{-5}=32\). Lôgarit không phải lúc nào cũng dương.

    ### 3.3. Gộp tổng và hiệu các lôgarit

    **Đề bài.** Tính \(A=\log_4 2+\log_4 32\) và \(B=\log_2 80-\log_2 5\).

    **Phân tích:** Tổng lôgarit **cùng cơ số** là log của **tích đối số**; hiệu lôgarit cùng cơ số là log của **thương đối số**. Các số 2, 32, 80, 5 đều dương.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.3"><p><strong>Lời giải.</strong> \(A=\log_4(2\cdot32)=\log_4 64=3\), vì \(4^3=64\). \(B=\log_2(80/5)=\log_2 16=4\), vì \(2^4=16\).</p></div>

    **Kiểm lại:** Nếu nhầm thành \(\log_4(2+32)\) thì được \(\log_4 34\ne3\). Phải xác định **phép toán ngoài log** trước.

    ### 3.4. Rút gọn nhưng không bỏ miền xác định

    **Đề bài.** Rút gọn \(T=\log_2(x^2-1)-\log_2(x-1)\) trên tập số thực và xác định miền của biểu thức ban đầu.

    **Phân tích:** Cả hai **đối số ban đầu** phải dương. Giải điều kiện rồi mới áp dụng quy tắc hiệu thành log của thương.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.4"><p><strong>Lời giải.</strong> Điều kiện \(x^2-1>0\) và \(x-1>0\) tương đương \(x>1\). Trên miền ấy, \(T=\log_2\left(\frac{(x-1)(x+1)}{x-1}\right)=\log_2(x+1)\). Kết quả chỉ tương đương biểu thức gốc khi **\(x>1\)**.</p></div>

    **Kiểm lại:** Nếu chỉ viết \(\log_2(x+1)\), em có thể cho phép \(x=0\), nhưng ở đó \(\log_2(x^2-1)\) gốc không có nghĩa. Phải giữ điều kiện sau khi rút gọn.

    ### 3.5. Đổi cơ số bằng lôgarit quen thuộc

    **Đề bài.** Tính \(\log_4 8\) và \(\log_9\frac1{27}\) không dùng máy tính.

    **Phân tích:** Cơ số 4, 8, 9, 27 đều là lũy thừa của 2 hoặc 3. Chọn **cơ số chung** phù hợp trong công thức đổi cơ số.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.5"><p><strong>Lời giải.</strong> \(\log_4 8=\frac{\log_2 8}{\log_2 4}=\frac32\). Tương tự \(\log_9\frac1{27}=\frac{\log_3(3^{-3})}{\log_3(3^2)}=\frac{-3}{2}\).</p></div>

    **Kiểm lại:** \(4^{3/2}=8\) và \(9^{-3/2}=1/27\). Trong phép đổi cơ số, mẫu \(\log_2 4=2\), \(\log_3 9=2\), đều khác 0.

    ### 3.6. Lôgarit thập phân trong mô hình pH

    **Đề bài.** Trong mô hình \(\mathrm{pH}=-\log[\mathrm H^+]\) với nồng độ dương tính theo mol/lít, tìm pH khi \([\mathrm H^+]=10^{-4}\). Nếu pH bằng \(7{,}4\), biểu diễn nồng độ bằng lũy thừa của 10.

    **Phân tích:** \(\log\) không ghi cơ số là **cơ số 10**, không phải \(\ln\). Đưa dấu âm của công thức pH qua phép chuyển vế trước khi lấy lũy thừa.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.6"><p><strong>Lời giải.</strong> Nếu \([\mathrm H^+]=10^{-4}\), \(\mathrm{pH}=-\log10^{-4}=-(-4)=4\). Nếu \(\mathrm{pH}=7{,}4\), \(\log[\mathrm H^+]=-7{,}4\), nên \([\mathrm H^+]=10^{-7{,}4}\) mol/lít.</p></div>

    **Kiểm lại:** Đối số nồng độ luôn dương. Giá trị \(10^{-7{,}4}\) là dạng chính xác theo mô hình, có thể bấm máy để lấy gần đúng nếu được yêu cầu.

    ### 3.7. Lôgarit tự nhiên và thời gian nhân đôi

    **Đề bài.** Với mô hình lãi kép liên tục \(A=Pe^{0{,}06t}\), \(P>0\), tìm \(t\) để tiền tăng gấp đôi, làm tròn đến một chữ số thập phân.

    **Phân tích:** Chia hai vế cho \(P>0\), sau đó lấy \(\ln\) vì cơ số là \(e\). Đây là bài toán **tìm số mũ \(t\)**, không phải tính \(A\) khi đã cho \(t\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.7"><p><strong>Lời giải.</strong> \(2P=Pe^{0{,}06t}\Leftrightarrow e^{0{,}06t}=2\). Lấy \(\ln\): \(0{,}06t=\ln2\), nên \(t=\frac{\ln2}{0{,}06}\approx11{,}6\) năm.</p></div>

    **Kiểm lại:** Thế \(t\approx11{,}6\) vào mô hình được số tiền gần \(2P\). Dấu \(\approx\) chỉ làm tròn thời gian; công thức \(t=\ln2/0{,}06\) là chính xác trong mô hình.

    ### 3.8. Số năm nguyên đầu tiên đạt mục tiêu lãi kép

    **Đề bài.** Gửi 100 triệu đồng với lãi ghép cuối mỗi năm, lãi suất cố định \(6\%\) một năm. Hỏi **ít nhất bao nhiêu năm trọn vẹn** để tổng số tiền không dưới 150 triệu đồng?

    **Phân tích:** Sau \(n\) năm trọn vẹn, \(A=100(1{,}06)^n\). Giải bất đẳng thức theo \(n\) bằng lôgarit, rồi chọn **số nguyên nhỏ nhất đủ điều kiện**, không làm tròn số năm về gần nhất.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.8"><p><strong>Lời giải.</strong> \(100(1{,}06)^n\ge150\Leftrightarrow(1{,}06)^n\ge1{,}5\). Vì \(1{,}06>1\), \(n\ge\log_{1{,}06}1{,}5=\frac{\ln1{,}5}{\ln1{,}06}\approx6{,}96\). Với \(n\in\mathbb N\), giá trị nhỏ nhất là \(n=7\) năm.</p></div>

    **Kiểm lại:** \(100(1{,}06)^6\approx141{,}85<150\), trong khi \(100(1{,}06)^7\approx150{,}36\ge150\). Đây là kì hạn theo năm, không phải mô hình ghép lãi liên tục.

=== "Lỗi thường gặp"

    ### 4.1. Không kiểm cơ số và đối số lôgarit

    **Dấu hiệu:** Tính \(\log_1 8\) hoặc \(\log_2(-4)\) như số thực.

    **Vì sao sai:** Lôgarit cơ số \(a\) chỉ định nghĩa với \(a>0,\ a\ne1\) và **đối số \(M>0\)**. Cơ số 1 không cho số mũ duy nhất, lũy thừa cơ số dương không nhận giá trị âm.

    **Cách sửa:** Viết điều kiện đủ **ba phần** trước: cơ số dương, cơ số khác 1, đối số dương; với biến phải giải điều kiện đồng thời.

    ### 4.2. Nhầm lôgarit trả về kết quả lũy thừa

    **Dấu hiệu:** Đọc \(\log_2 8\) thành 8 hoặc 16, thay vì số mũ 3.

    **Vì sao sai:** \(\log_aM\) là **số mũ cần tìm** để \(a^\alpha=M\), không phải phép nhân/chia các số \(a,M\).

    **Cách sửa:** Chuyển về \(a^\alpha=M\) rồi kiểm lại. Nếu \(\alpha=3\) thì \(2^3=8\), nên \(\log_2 8=3\).

    ### 4.3. Biến log của tổng thành tổng các log

    **Dấu hiệu:** Viết \(\log_a(M+N)=\log_aM+\log_aN\).

    **Vì sao sai:** Quy tắc cộng lôgarit đến từ **phép nhân các lũy thừa**, nên vế tương ứng là \(\log_a(MN)\), không phải \(\log_a(M+N)\).

    **Cách sửa:** Chọn phản ví dụ có kết quả thật sự khác nhau: với \(a=2,M=2,N=4\), \(\log_2(M+N)=\log_2 6\ne3\), trong khi \(\log_2M+\log_2N=1+2=3\). Hãy nhớ quy tắc đúng là \(\log_a(MN)=\log_aM+\log_aN\).

    ### 4.4. Rút gọn log rồi quên miền xác định ban đầu

    **Dấu hiệu:** Từ \(\log_2(x^2-1)-\log_2(x-1)\) biến thành \(\log_2(x+1)\) và cho mọi \(x>-1\).

    **Vì sao sai:** Biểu thức gốc đòi cả \(x^2-1>0\) và \(x-1>0\), tức **\(x>1\)**. Rút gọn không mở rộng miền xác định của bài toán.

    **Cách sửa:** Ghi các điều kiện của **mọi đối số gốc** trước; sau biến đổi, luôn mang theo miền \(x>1\).

    ### 4.5. Đảo sai công thức đổi cơ số hoặc quên mẫu khác 0

    **Dấu hiệu:** Tính \(\log_4 8=\frac{\log_2 4}{\log_2 8}=\frac23\).

    **Vì sao sai:** Công thức là \(\log_aM=\frac{\log_bM}{\log_ba}\): đối số ở **tử**, cơ số gốc ở **mẫu**. Mẫu \(\log_ba\) chỉ khác 0 nếu \(a\ne1\).

    **Cách sửa:** Tự đọc \(\log_4 8\) là số mũ cho \(4^x=8\), nên \(x=3/2\) và dùng giá trị ấy để kiểm đổi cơ số.

    ### 4.6. Nhầm log thập phân với ln hoặc làm tròn số năm sai

    **Dấu hiệu:** Dùng \(\ln\) thay \(\log\) trong công thức pH; hoặc giải \(\log_{1{,}06}1{,}5\approx6{,}96\) rồi cho chỉ cần 6 năm trọn vẹn.

    **Vì sao sai:** \(\log\) không ghi cơ số là **cơ số 10** trong SGK, còn \(\ln\) là cơ số \(e\). Mục tiêu “không dưới 150 triệu” yêu cầu **số năm nguyên đầu tiên thỏa bất đẳng thức**, nên phải lấy trần, không làm tròn thông thường.

    **Cách sửa:** Kiểm ký hiệu log/ln và đơn vị; thử lại \(n=6\) và \(n=7\) bằng công thức gốc trước khi kết luận.

    **Học tiếp:** [Core và Luyện tập Bài 19](luyen-tap.md) · [Tự luận Chương VI](../../../thu-vien/tu-luan-g11-chuong-vi.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">Nguồn đối chiếu văn bản: SGK Toán 11 Kết nối tri thức với cuộc sống, tập hai, Bài 19 “Lôgarit”, trang in 10–15. Ba mục SGK chính: Khái niệm lôgarit; Tính chất của lôgarit; Lôgarit thập phân và lôgarit tự nhiên. Văn bản PDF số hóa đã đối chiếu, chưa có ảnh render từng trang PDF để xác nhận offset trang in. SVG hiện hữu minh họa \(2^3=8\) và \(\log_2 8=3\) được dùng lại đúng nguồn ở hai tab có hình, không vẽ mới; bảng log/lg/ln đặt tại mục cần tra cứu. Không sửa Core/Luyện tập, Tự kiểm tra hoặc ngân hàng đánh giá.</p>
~~~~

---

## B20 — Hàm số mũ và hàm số lôgarit
CANONICAL_PATH: `docs/thpt-preview/sgk/lop-11/chuong-vi/bai-20.md`  
HEAD: `74344e822cd5db58eeea1f88ff559a9eae6c8c36`  
BLOB: `4833132b85a1ccae082e85b637552566eec02ed1`  

~~~~markdown
# Bài 20. Hàm số mũ và hàm số lôgarit

<style>
/* Scoped B20 semantic Golden 3+1: không sửa UI, CSS/JS chung. */
.md-typeset:has([data-g11-b20-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#e8f7f2;border:1px solid #a9dccc;border-left:4px solid #087d69;color:#174137}
.md-typeset:has([data-g11-b20-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#eaf1fc;border:1px solid #a5bee5;border-left:4px solid #4879c2;color:#193d66}
.md-typeset:has([data-g11-b20-knowledge-only]) .thpt-r4-key-formula {background:transparent;border:1px solid #8c9ab0;border-left:4px solid #64748b;border-radius:10px;padding:.75rem 1rem;margin:.7rem 0}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b20-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b20-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b20-knowledge-only]) .thpt-r4-key-formula {background:transparent;color:inherit;border-color:#8c9ab0;border-left-color:#bdc8d8}
</style>

<div class="thpt-r4-screen" data-thpt-r4 data-g11-b20-knowledge-only>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VI · KẾT NỐI TRI THỨC · TẬP HAI</p>
<p class="thpt-r4-lead">Hàm mũ nhận số mũ làm đầu vào; hàm lôgarit đi ngược để tìm số mũ. Học cách đọc miền xác định, giá trị, biến thiên, tiệm cận và các cặp điểm của hai đồ thị.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương VI</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    Ở Bài 18, ta tính \(2^3=8\). Ở Bài 19, ta tìm \(x\) khi \(2^x=8\) bằng \(\log_2 8=3\). Nhưng nếu **\(x\) thay đổi liên tục** thì các giá trị \(2^x\) thay đổi theo quy luật nào? Khi biết kết quả \(y\), cách tìm \(x\) có tạo thành một hàm số không? Hai câu hỏi này đưa ta đến **hàm số mũ** và **hàm số lôgarit**. Ta cần cả đồ thị để thấy chiều tăng/giảm, điểm thuộc đồ thị và điều không thể suy ra chỉ bằng một phép tính.

    ### 1.1. Hàm số mũ

    Hàm số \(y=a^x\) với **\(a>0,\ a\ne1\)** được gọi là hàm số mũ cơ số \(a\): biến \(x\) nằm ở **số mũ**. Khác với \(y=x^2\) (biến là cơ số), mọi \(x\in\mathbb R\) đều thay được vào \(a^x\), và kết quả **luôn dương**. Vì vậy **tập xác định** là \(\mathbb R\), còn **tập giá trị** là \((0,+\infty)\): có thể gần 0 tùy ý nhưng không bằng 0 hay âm.

    Hãy tính bảng sau rồi quan sát nhịp thay đổi:

    | \(x\) | \(-2\) | \(-1\) | \(0\) | \(1\) | \(2\) |
    | :-- | --: | --: | --: | --: | --: |
    | \(2^x\) | \(\frac14\) | \(\frac12\) | \(1\) | \(2\) | \(4\) |
    | \((\frac12)^x\) | \(4\) | \(2\) | \(1\) | \(\frac12\) | \(\frac14\) |

    Hai hàng đều đi qua điểm \((0,1)\), nhưng với \(2>1\) thì sang phải giá trị **tăng**, còn với \(0<\frac12<1\) thì sang phải giá trị **giảm**. Đây là quy luật tổng quát: \(a>1\) thì hàm đồng biến trên \(\mathbb R\); \(0<a<1\) thì nghịch biến trên \(\mathbb R\). Tại \(x=1\), giá trị bằng cơ số \(a\), nên đồ thị luôn qua **\((1,a)\)**. Hai hàm đều liên tục trên \(\mathbb R\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVI-B20-01_R00.svg" alt="Đồ thị hàm mũ hai mũ x màu xanh và hàm logarit cơ số hai của x màu xanh lục, đối xứng qua y bằng x"><figcaption><strong>Hướng dẫn đọc phần hàm mũ:</strong> nhìn **đường màu xanh** \(y=2^x\); nó đi qua \((0,1)\), \((1,2)\), luôn phía trên trục hoành và tăng khi \(x\) tăng. Đường xanh lục là hàm lôgarit, sẽ đọc ở mục 1.2. Nét đứt \(y=x\) dùng để nhận ra hai hàm ngược nhau, không phải đường tiệm cận.</figcaption></figure>

    Với \(a>1\), khi \(x\to-\infty\), \(a^x\to0^+\); vì thế đồ thị tiến sát **trục hoành \(y=0\)** nhưng không chạm. Khi \(x\to+\infty\), giá trị tăng không bị chặn. Với \(0<a<1\), chiều tiến sát trục hoành **đổi lại phía bên phải**. Một đồ thị không cắt trục hoành không có nghĩa nó không đi gần trục.

    **Nhận dạng biểu thức:** \(y=3^x\) là hàm mũ; \(y=2^{-x}=(\frac12)^x\) cũng là hàm mũ sau đổi cơ số; \(y=8^{x/3}=2^x\) cũng vậy. Còn \(y=x^{-2}\) không phải hàm mũ theo dạng SGK vì \(x\) ở **cơ số**. Khi biến đổi, phải kiểm cơ số dương và khác 1.

    **Vận dụng.** Cho \(f(x)=(\frac13)^x\). Tìm tập xác định, tập giá trị, tính đơn điệu, hai điểm chắc chắn trên đồ thị và giới hạn khi \(x\to+\infty\).

    ??? question "Đối chiếu"

        **Lời giải:** \(0<\frac13<1\), nên \(f\) xác định trên \(\mathbb R\), nhận giá trị \((0,+\infty)\), **nghịch biến**, qua \((0,1)\), \((1,\frac13)\). Khi \(x\to+\infty\), \((\frac13)^x\to0^+\); trục hoành là tiệm cận ngang về phía phải.

    ??? tip "Kiểm lỗi"

        Nếu khẳng định mọi hàm mũ đều tăng thì đã quên trường hợp \(0<a<1\). Đừng nhầm tập giá trị \((0,+\infty)\) với tập xác định \(\mathbb R\).

    ### 1.2. Hàm số lôgarit

    Bây giờ đổi vai trò đầu vào và đầu ra. Với \(a>0,\ a\ne1\), hàm \(y=\log_a x\) trả lời: **nâng \(a\) lên số mũ nào để bằng \(x\)?** Vì \(a^y>0\) nên **\(x\) bắt buộc dương**. Do đó tập xác định là \((0,+\infty)\). Mọi số thực \(y\) đều đạt được khi chọn \(x=a^y>0\), nên tập giá trị là **\(\mathbb R\)**. Đồ thị qua \((1,0)\), vì \(\log_a1=0\), và qua \((a,1)\), vì \(\log_aa=1\).

    Cùng cơ số \(a>1\) với hàm mũ đang tăng, hàm lôgarit cũng **tăng** trên \((0,+\infty)\). Khi cơ số \(0<a<1\), cả hai đều **giảm**. Riêng hàm lôgarit, khi \(x\to0^+\), đồ thị tiến gần trục tung \(x=0\) mà không chạm, vì \(x=0\) **nằm ngoài tập xác định**. Đó là tiệm cận **đứng** của đồ thị log, khác với tiệm cận **ngang** \(y=0\) của hàm mũ.

    Để nhìn trường hợp dễ nhầm \(0<a<1\), ta sử dụng hình bổ sung dưới đây. Hình trái vẽ \((\frac12)^x\); hình phải vẽ \(\log_{\frac12}x\). Chúng đều **nghịch biến**, nhưng miền xác định khác nhau.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B20_DECREASING_EXP_LOG_AUTHORING_20261123.svg" alt="Hai đồ thị nghịch biến cơ số một phần hai, bên trái hàm mũ xác định mọi số thực và bên phải hàm logarit chỉ xác định khi x dương"><figcaption><strong>Hướng dẫn đọc:</strong> trái: \((0,1)\), \((1,\frac12)\), \((-1,2)\) thuộc đồ thị \((\frac12)^x\) và đường luôn trên trục hoành. Phải: \((1,0)\), \((\frac12,1)\), \((2,-1)\) thuộc đồ thị \(\log_{\frac12}x\) và chỉ có điểm bên phải trục tung. Khi \(x\) tăng, cả hai đường đi xuống nhưng **không có cùng tập xác định**.</figcaption></figure>

    **Vì sao hai hàm là “đi và quay lại”?** Nếu \(y=a^x\), thì \(x=\log_a y\). Ví dụ điểm \((2,4)\) của \(y=2^x\) tương ứng với điểm \((4,2)\) của \(y=\log_2 x\). Hoán đổi hoành độ/tung độ làm hai đồ thị đối xứng qua **đường \(y=x\)**. Hình cũ ở mục 1.1 đã biểu diễn cả hai đường trên cùng trục; em có thể quay lại nhìn **đường xanh lục** để kiểm cặp điểm \((1,0)\), \((2,1)\). Không suy rằng hai đồ thị luôn nằm ở hai nửa mặt phẳng khác nhau.

    **Mô hình thực tế:** Dân số theo công thức giả định của SGK \(A=Pe^{rt}\) tăng theo **hàm mũ** khi \(r>0\), với \(t\) là thời gian. Khi biết dân số đạt mức \(A\) và muốn tìm thời gian \(t\), ta phải **lấy lôgarit**: \(t=\frac{\ln(A/P)}r\). Công thức cần \(P,A>0\) và \(r\ne0\). Đây chỉ là mô hình với tốc độ tăng không đổi, không phải dự báo dân số chắc chắn.

    **Vận dụng.** Cho \(g(x)=\log_{\frac12}x\). Tìm tập xác định, tập giá trị, tính đơn điệu, hai điểm thuộc đồ thị và giới hạn khi \(x\to0^+\).

    ??? question "Đối chiếu"

        **Lời giải:** Vì cơ số \(\frac12\) dương, khác 1 và nhỏ hơn 1, \(g\) xác định khi \(x>0\), có tập giá trị \(\mathbb R\) và **nghịch biến**. Hai điểm thuộc đồ thị: \((1,0)\), \((\frac12,1)\). Khi \(x\to0^+\), \(g(x)\to+\infty\); trục tung \(x=0\) là tiệm cận đứng.

    ??? tip "Kiểm lỗi"

        Không ghi “\(x\in\mathbb R\)” cho hàm log, vì \(\log_{\frac12}0\) và \(\log_{\frac12}(-1)\) không có nghĩa. Đồ thị log nằm **bên phải trục tung** chứ không phải luôn bên trên trục hoành.

=== "Kiến thức SGK"

    ### 2.1. Hàm số mũ

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Hàm số mũ</strong><p>Cho số thực <strong>\(a>0,\ a\ne1\)</strong>. Hàm \(y=a^x\) là <strong>hàm số mũ</strong> cơ số \(a\). Biến \(x\) nằm ở số mũ; điều kiện cơ số dương, khác 1 là bắt buộc trong định nghĩa SGK.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Hàm số mũ \(y=a^x\)</strong><p><strong>Tập xác định:</strong> \(\mathbb R\). <strong>Tập giá trị:</strong> \((0,+\infty)\). <strong>Liên tục:</strong> trên \(\mathbb R\). <strong>Biến thiên:</strong> đồng biến trên \(\mathbb R\) nếu \(a>1\), nghịch biến nếu \(0<a<1\). <strong>Điểm đặc biệt:</strong> \((0,1)\), \((1,a)\). Đồ thị luôn ở phía trên trục hoành và có tiệm cận ngang \(y=0\) về một phía.</p></div>

    | Cơ số | Khi \(x\to-\infty\) | Khi \(x\to+\infty\) | Chiều biến thiên |
    | :-- | :-- | :-- | :-- |
    | \(a>1\) | \(a^x\to0^+\) | \(a^x\to+\infty\) | Đồng biến |
    | \(0<a<1\) | \(a^x\to+\infty\) | \(a^x\to0^+\) | Nghịch biến |

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVI-B20-01_R00.svg" alt="Đường mũ hai mũ x màu xanh luôn dương tăng qua không một và một hai"><figcaption><strong>Tra hình mũ:</strong> nhìn đường màu xanh \(2^x\), qua \((0,1)\), \((1,2)\), luôn dương và tăng. Đường lôgarit xanh lục cùng hình sẽ dùng ở mục 2.2. Nét đứt \(y=x\) là đường đối xứng **hai đồ thị ngược**, không phải tiệm cận của đồ thị mũ.</figcaption></figure>

    **Nhận dạng:** \(2^{-x}=(\frac12)^x\) và \(8^{x/3}=2^x\) đều có dạng hàm số mũ sau biến đổi. \(x^3\), \(x^{-2}\) không phải hàm mũ dạng \(a^x\) vì biến là cơ số. Nếu \(a=1\), hàm hằng \(1^x=1\) không thuộc định nghĩa hàm mũ cơ số \(a\ne1\) trong SGK.

    ### 2.2. Hàm số lôgarit

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Hàm số lôgarit</strong><p>Với <strong>\(a>0,\ a\ne1\)</strong>, hàm \(y=\log_a x\) là <strong>hàm số lôgarit</strong> cơ số \(a\). Biến \(x\) là <strong>đối số</strong>, nên bắt buộc \(x>0\). Không nhầm hàm này với \(\log_x a\) có cơ số biến thiên.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Hàm số lôgarit \(y=\log_a x\)</strong><p><strong>Tập xác định:</strong> \((0,+\infty)\). <strong>Tập giá trị:</strong> \(\mathbb R\). <strong>Liên tục:</strong> trên \((0,+\infty)\). <strong>Biến thiên:</strong> đồng biến khi \(a>1\), nghịch biến khi \(0<a<1\). <strong>Điểm đặc biệt:</strong> \((1,0)\), \((a,1)\). Đồ thị chỉ nằm bên phải trục tung, có tiệm cận đứng \(x=0\).</p></div>

    | Cơ số | Khi \(x\to0^+\) | Khi \(x\to+\infty\) | Chiều biến thiên |
    | :-- | :-- | :-- | :-- |
    | \(a>1\) | \(\log_a x\to-\infty\) | \(\log_a x\to+\infty\) | Đồng biến |
    | \(0<a<1\) | \(\log_a x\to+\infty\) | \(\log_a x\to-\infty\) | Nghịch biến |

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B20_DECREASING_EXP_LOG_AUTHORING_20261123.svg" alt="Hàm mũ cơ số một phần hai và hàm logarit cùng cơ số đều nghịch biến với tập xác định khác nhau"><figcaption><strong>Tra hình lôgarit:</strong> nhìn **khung phải** \(y=\log_{\frac12}x\): qua \((1,0)\), \((\frac12,1)\), nghịch biến, không có điểm khi \(x\le0\). Khung trái \(y=(\frac12)^x\) có tập xác định \(\mathbb R\) và chỉ nhận giá trị dương. Cả hai hình dùng để phân biệt **đầu vào** và **đầu ra**.</figcaption></figure>

    **Quan hệ với hàm mũ:** Hai hàm \(y=a^x\), \(y=\log_a x\) (cùng \(a>0,a\ne1\)) là hai hàm ngược; đổi chỗ tọa độ \((u,v)\leftrightarrow(v,u)\) làm hai đồ thị đối xứng qua đường \(y=x\). Hãy xét dấu, miền và điểm đặc biệt trước khi so sánh hai đồ thị.

    **Ứng dụng:** Mô hình dân số \(A(t)=Pe^{rt}\) với \(P>0\), \(t\ge0\) là ví dụ hàm mũ theo thời gian; với \(r>0\), hàm tăng. Khi giải ngược thời gian từ mức dân số \(A>0\), dùng \(t=\ln(A/P)/r\), đúng trong điều kiện mô hình và \(r\ne0\).

=== "Ví dụ"

    ### 3.1. Nhận dạng hàm số mũ

    **Đề bài.** Trong \(f(x)=3^x\), \(g(x)=8^{x/3}\), \(h(x)=x^3\), hàm nào là hàm số mũ theo SGK? Xác định cơ số sau khi viết lại.

    **Phân tích:** Hàm mũ có biến nằm trong **số mũ** của một **cơ số dương khác 1**. Một biểu thức chưa ở dạng \(a^x\) có thể biến đổi về dạng ấy.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.1"><p><strong>Lời giải.</strong> \(f(x)=3^x\) là hàm mũ cơ số 3. \(g(x)=8^{x/3}=(8^{1/3})^x=2^x\), nên là hàm mũ cơ số 2. \(h(x)=x^3\) không phải hàm mũ dạng \(a^x\) vì biến ở cơ số, không phải số mũ.</p></div>

    **Kiểm lại:** Cả hai cơ số 3 và 2 đều dương, khác 1; \(h\) có tập xác định \(\mathbb R\) nhưng có thể nhận giá trị âm, khác hàm mũ.

    ### 3.2. Lập bảng và đọc đồ thị hàm mũ tăng

    **Đề bài.** Lập bảng giá trị của \(f(x)=2^x\) tại \(x=-2,-1,0,1,2\). Cho biết hai điểm cố định của dạng hàm mũ và chiều biến thiên.

    **Phân tích:** Sử dụng quy tắc số mũ âm và 0 ở Bài 18; cơ số \(2>1\) đảm bảo đồng biến.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.2"><p><strong>Lời giải.</strong> Tương ứng năm giá trị \(x\), ta được \(f(x)=\frac14,\frac12,1,2,4\). Đồ thị qua \((0,1)\), \((1,2)\), và tăng trên toàn \(\mathbb R\). Hàm không có giá trị 0 vì \(2^x>0\) với mọi \(x\).</p></div>

    **Kiểm lại:** Khi \(x\) tăng từng đơn vị, giá trị nhân 2. Trục hoành là tiệm cận chứ không là một tập điểm của đồ thị.

    ### 3.3. Hàm mũ cơ số nhỏ hơn 1 là nghịch biến

    **Đề bài.** Với \(g(x)=(\frac12)^x\), tính \(g(-2),g(0),g(2)\), tìm tập xác định/tập giá trị và xác định chiều biến thiên.

    **Phân tích:** Cơ số \(1/2\) dương nhưng **nhỏ hơn 1**, nên không áp quy tắc tăng của \(2^x\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.3"><p><strong>Lời giải.</strong> \(g(-2)=4\), \(g(0)=1\), \(g(2)=\frac14\). Hàm xác định trên \(\mathbb R\), nhận giá trị \((0,+\infty)\), nghịch biến trên \(\mathbb R\) và tiến về \(0^+\) khi \(x\to+\infty\).</p></div>

    **Kiểm lại:** Ba giá trị đã tính giảm dần khi hoành độ tăng. Điểm \((0,1)\) vẫn thuộc đồ thị dù hàm nghịch biến.

    ### 3.4. So sánh giá trị hàm mũ bằng chiều biến thiên

    **Đề bài.** Không dùng máy tính, so sánh \(2^{\sqrt2}\) và \(2^{3/2}\); so sánh \((\frac12)^{\sqrt2}\) và \((\frac12)^{3/2}\).

    **Phân tích:** Ta có \(\sqrt2<\frac32\) vì \(2<9/4\); dấu bất đẳng thức của giá trị hàm tùy cơ số lớn hơn hay nhỏ hơn 1.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.4"><p><strong>Lời giải.</strong> Do \(2>1\), hàm \(2^x\) tăng, suy ra \(2^{\sqrt2}<2^{3/2}\). Do \(0<\frac12<1\), hàm \((\frac12)^x\) giảm, suy ra \((\frac12)^{\sqrt2}>(\frac12)^{3/2}\).</p></div>

    **Kiểm lại:** Cùng hai số mũ có thứ tự như nhau, nhưng kết quả đảo dấu khi đổi từ cơ số lớn hơn 1 sang cơ số nhỏ hơn 1.

    ### 3.5. Miền xác định của hàm lôgarit

    **Đề bài.** Tìm tập xác định của \(f(x)=\log_2(x-3)\) và xác định xem \(f(4)\) bằng bao nhiêu.

    **Phân tích:** Khi đối số là \(x-3\), không chỉ kiểm cơ số 2 mà còn phải giải bất đẳng thức **đối số dương**.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.5"><p><strong>Lời giải.</strong> Vì cơ số \(2>0,\ 2\ne1\), điều kiện để log có nghĩa là \(x-3>0\), tức \(x>3\). Tập xác định là \((3,+\infty)\). Khi \(x=4\), \(f(4)=\log_2(1)=0\).</p></div>

    **Kiểm lại:** \(x=3\) bị loại, vì \(\log_2 0\) không có nghĩa; không cho rằng mọi hàm có chữ “log” đều xác định trên đúng \((0,+\infty)\) khi **đối số là biểu thức**.

    ### 3.6. Lập bảng cho hàm lôgarit cơ số nhỏ hơn 1

    **Đề bài.** Tính \(g(x)=\log_{\frac12}x\) tại \(x=\frac14,\frac12,1,2,4\). Xác định chiều biến thiên và điểm cắt trục hoành.

    **Phân tích:** Đọc log như số mũ của \(1/2\); do cơ số \(1/2\) nhỏ hơn 1 nên hàm giảm trên \((0,+\infty)\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.6"><p><strong>Lời giải.</strong> Ta có \(g(\frac14)=2\), \(g(\frac12)=1\), \(g(1)=0\), \(g(2)=-1\), \(g(4)=-2\). Khi \(x\) tăng theo dãy đã cho, \(g(x)\) giảm. Đồ thị cắt trục hoành tại \((1,0)\), vì \(\log_{\frac12}1=0\).</p></div>

    **Kiểm lại:** Không lấy \(\log_{\frac12}2=+1\); \((\frac12)^{-1}=2\), nên kết quả phải bằng \(-1\).

    ### 3.7. Hai đồ thị của hai hàm ngược

    **Đề bài.** Biết \((2,4)\) thuộc đồ thị \(y=2^x\). Tìm điểm tương ứng trên \(y=\log_2 x\), giải thích tại sao hoán đổi tọa độ và nêu hai tập xác định.

    **Phân tích:** Từ \(2^2=4\) suy \(\log_2 4=2\). Điều đó hoán đổi “đầu vào–đầu ra” của hai hàm.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.7"><p><strong>Lời giải.</strong> Vì \(2^2=4\), \(\log_2 4=2\), nên điểm tương ứng là \((4,2)\). Hai điểm là ảnh của nhau khi đối xứng qua \(y=x\). Hàm \(2^x\) có TXĐ \(\mathbb R\), còn hàm \(\log_2 x\) có TXĐ \((0,+\infty)\).</p></div>

    **Kiểm lại:** Đối xứng qua \(y=x\) là **đổi chỗ tọa độ**, không phải đổi dấu; \((2,4)\) biến thành \((4,2)\), không phải \((-2,-4)\).

    ### 3.8. Mô hình dân số bằng hàm mũ

    **Đề bài.** Trong mô hình tăng trưởng giả định theo số liệu mở đầu SGK, dân số năm 2020 là \(97{,}34\) triệu người, tốc độ tăng không đổi \(0{,}91\%\)/năm và \(A(t)=Pe^{rt}\). Ước lượng dân số năm 2050, làm tròn đến \(0{,}01\) triệu người.

    **Phân tích:** Từ 2020 tới 2050 có \(t=30\) năm. Phải đổi \(0{,}91\%=0{,}0091\) trước khi thay vào hàm mũ; kết quả là **theo mô hình giả định**, không phải dân số thực được xác nhận năm 2050.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.8"><p><strong>Lời giải.</strong> \(A(30)=97{,}34e^{0{,}0091\cdot30}=97{,}34e^{0{,}273}\approx127{,}89505\) (triệu người). Làm tròn đến \(0{,}01\) triệu người được khoảng **\(127{,}90\) triệu người** trong mô hình.</p></div>

    **Kiểm lại:** \(r=0{,}0091>0\) nên dân số mô hình tăng; \(A(30)>P=97{,}34\) là hợp lí. Không lấy \(r=0{,}91\) vì sẽ phóng đại số mũ lên 100 lần.

=== "Lỗi thường gặp"

    ### 4.1. Nhầm hàm mũ với hàm lũy thừa

    **Dấu hiệu:** Gọi \(y=x^3\) hoặc \(y=x^{-2}\) là hàm số mũ vì đều có dấu mũ.

    **Vì sao sai:** Hàm mũ SGK có dạng \(y=a^x\) với cơ số cố định dương khác 1, biến nằm ở **số mũ**. \(x^3\) có biến ở cơ số nên không mang các tính chất như tập giá trị dương.

    **Cách sửa:** Viết lại theo dạng \(a^x\) khi có thể, rồi kiểm \(a>0,\ a\ne1\). Nếu biến là cơ số, không chuyển nguyên tính chất của hàm mũ sang.

    ### 4.2. Đảo tập xác định và tập giá trị của hai hàm

    **Dấu hiệu:** Ghi hàm \(a^x\) chỉ xác định khi \(x>0\), còn \(\log_a x\) xác định trên \(\mathbb R\).

    **Vì sao sai:** Hàm mũ nhận **mọi số mũ thực** và có đầu ra dương; hàm log nhận **đầu vào dương** và trả về mọi số mũ thực.

    **Cách sửa:** Nhớ cặp ngược: mũ \(D=\mathbb R\), giá trị \((0,+\infty)\); log \(D=(0,+\infty)\), giá trị \(\mathbb R\).

    ### 4.3. Cho rằng mọi hàm mũ và lôgarit đều đồng biến

    **Dấu hiệu:** Từ đồ thị \(2^x\) tăng, suy \((\frac12)^x\) và \(\log_{\frac12}x\) cũng tăng.

    **Vì sao sai:** Tính đơn điệu phụ thuộc **cơ số**. Khi \(0<a<1\), cả hai hàm đều nghịch biến trên tập xác định riêng.

    **Cách sửa:** Kiểm \(a>1\) hay \(0<a<1\), rồi đối chiếu hai điểm cụ thể hoặc bảng biến thiên trước khi kết luận.

    ### 4.4. Đọc nhầm trục tiệm cận hoặc điểm đặc biệt

    **Dấu hiệu:** Vẽ \(2^x\) cắt trục hoành tại 0 hoặc vẽ \(\log_2 x\) cắt trục tung tại 0.

    **Vì sao sai:** \(a^x>0\) với mọi x nên đồ thị mũ **không cắt trục hoành**. Log chỉ có nghĩa khi \(x>0\), không có điểm nào trên trục tung \(x=0\).

    **Cách sửa:** Hàm mũ qua \((0,1)\), tiệm cận **ngang** \(y=0\); hàm log qua \((1,0)\), tiệm cận **đứng** \(x=0\).

    ### 4.5. Nhầm hai hàm ngược nhau với hai giá trị nghịch đảo

    **Dấu hiệu:** Cho hàm ngược của \(2^x\) là \(2^{-x}=1/2^x\) thay vì \(\log_2 x\).

    **Vì sao sai:** Hàm ngược hoán đổi **đầu vào–đầu ra**: từ \(y=2^x\) suy \(x=\log_2 y\). Hàm \(2^{-x}\) chỉ là hàm mũ với cơ số \(1/2\), không phải hàm ngược.

    **Cách sửa:** Dùng cặp điểm \((2,4)\leftrightarrow(4,2)\). Nếu “đổi ngược” mà vẫn ra một hàm mũ xác định mọi số thực, cần kiểm lại.

    ### 4.6. Chuyển mô hình thực tiễn thành con số chắc chắn

    **Dấu hiệu:** Lấy mô hình \(A=Pe^{rt}\) với \(r=0{,}91\%\) rồi dùng \(r=0{,}91\), hoặc cho số tính ra là dự báo dân số chắc chắn.

    **Vì sao sai:** Phần trăm phải đổi thành số thập phân \(0{,}0091\); mô hình còn giả thiết **tốc độ tăng không đổi**, điều kiện thực tế có thể không duy trì.

    **Cách sửa:** Viết rõ đơn vị, biến \(t\), đổi phần trăm chính xác, làm tròn theo yêu cầu và ghi kết quả **trong mô hình giả định**.

    **Học tiếp:** [Core và Luyện tập Bài 20](luyen-tap.md) · [Tự luận Chương VI](../../../thu-vien/tu-luan-g11-chuong-vi.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">Nguồn đối chiếu: SGK Toán 11 Kết nối tri thức với cuộc sống, tập hai, Bài 20 “Hàm số mũ và hàm số lôgarit”, trang in 16–19. Hai mục chính: Hàm số mũ; Hàm số lôgarit. Đối chiếu văn bản SGK số hóa, chưa có screenshot ảnh đủ trang PDF in/offset. Tái dùng SVG canonical cặp hàm ngược \(2^x,\log_2 x\) từ main, bổ sung đúng một SVG minh họa hai trường hợp **nghịch biến** với cơ số \(1/2\) còn thiếu; đặt cạnh đoạn giải thích, hướng dẫn đọc, cùng nguồn hình dùng lại theo mục đích hai tab. Không đổi Core/Luyện tập, Tự kiểm tra hoặc đánh giá.</p>
~~~~

---

## B21 — Phương trình, bất phương trình mũ và lôgarit
CANONICAL_PATH: `docs/thpt-preview/sgk/lop-11/chuong-vi/bai-21.md`  
HEAD: `2f29ae531ca601f50fd7fe855fe38c9ca50a5eac`  
BLOB: `e2d4213054d572f856ed4f1d551fbe7c275b8521`  

~~~~markdown
# Bài 21. Phương trình, bất phương trình mũ và lôgarit

<style>
/* Scoped B21 Golden semantic 3+1; giữ nguyên UI/CSS/JS chung. */
.md-typeset:has([data-g11-b21-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#e8f7f2;border:1px solid #a9dccc;border-left:4px solid #087d69;color:#174137}
.md-typeset:has([data-g11-b21-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#eaf1fc;border:1px solid #a5bee5;border-left:4px solid #4879c2;color:#193d66}
.md-typeset:has([data-g11-b21-knowledge-only]) .thpt-r4-key-formula {background:transparent;border:1px solid #8c9ab0;border-left:4px solid #64748b;border-radius:10px;padding:.75rem 1rem}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b21-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b21-knowledge-only]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b21-knowledge-only]) .thpt-r4-key-formula {background:transparent;color:inherit;border-color:#8c9ab0;border-left-color:#bdc8d8}
</style>

<div class="thpt-r4-screen" data-thpt-r4 data-g11-b21-knowledge-only>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG VI · KẾT NỐI TRI THỨC · TẬP HAI</p>
<p class="thpt-r4-lead">Bốn dạng: phương trình mũ, phương trình lôgarit, bất phương trình mũ, bất phương trình lôgarit. Hiểu cơ số, dấu, miền xác định trước khi giải.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương VI</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    Em đã biết \(2^3=8\), \(\log_2 8=3\), và hai hàm mũ–lôgarit có thể tăng hoặc giảm theo cơ số. Khi câu hỏi đổi thành “\(2^x\) bằng bao nhiêu?” hoặc “\(2^x\) lớn hơn mức nào?”, ta phải tìm **nghiệm** của phương trình hay **tập nghiệm** của bất phương trình. Điểm cốt lõi: hàm mũ chỉ cho giá trị dương; lôgarit chỉ nhận đối số dương; bất đẳng thức đảo chiều chỉ vì **cơ số làm hàm nghịch biến**.

    ### 1.1. Phương trình mũ

    Xét \(2^{x+1}=\frac14\). Ta có \(\frac14=2^{-2}\), nên hai vế cùng cơ số 2 và \(x+1=-2\), vậy \(x=-3\). **Vì sao được so số mũ?** Với cơ số \(a>0,a\ne1\), hàm \(a^t\) đơn điệu nghiêm ngặt nên hai số mũ khác nhau không thể cho một kết quả giống nhau. Quy tắc này hoạt động cả khi \(0<a<1\), vì hàm tuy giảm nhưng vẫn nhận mỗi giá trị dương đúng một lần.

    Phương trình \(a^x=b\) chỉ có nghiệm thực nếu **\(b>0\)**, vì \(a^x\) luôn dương. Khi \(b>0\), nghiệm duy nhất \(x=\log_a b\). Chẳng hạn \(10^{x-1}=2022\) không cần tìm cách viết 2022 thành lũy thừa nguyên của 10: lấy log được \(x=1+\log2022\), là biểu thức chính xác; số thập phân bấm máy chỉ gần đúng.

    **Vận dụng.** Giải \(3^{2x-1}=27\); giải thích vì sao \(2^x=-5\) không có nghiệm thực.

    ??? question "Đối chiếu"

        **Lời giải:** \(27=3^3\), nên \(2x-1=3\), suy \(x=2\). Còn \(2^x>0\) với mọi số thực \(x\), không thể bằng \(-5\). Không được viết \(\log_2(-5)\) trong số thực.

    ??? tip "Kiểm lỗi"

        Trước khi lấy log của vế phải, phải kiểm nó dương. Nếu hai vế cùng cơ số, hãy so **số mũ** chứ không chia cơ số như các số hạng bình thường.

    ### 1.2. Phương trình lôgarit

    Giải \(2\log_2 x=-3\): trước hết \(x>0\); chia hai vế cho 2 thì \(\log_2x=-\frac32\), nên \(x=2^{-3/2}>0\). Chính điều kiện đối số **dương** cho phép phép biến đổi sang mũ thực. Nếu bài có nhiều lôgarit, luôn kiểm tất cả các đối số của biểu thức ban đầu, không chỉ biểu thức sau khi rút gọn.

    Ví dụ \(\log_3(x+1)=\log_3(x^2-1)\). Điều kiện \(x+1>0,\ x^2-1>0\) cho **\(x>1\)**. So sánh hai đối số được \(x+1=x^2-1\); nghiệm đại số \(-1\) và \(2\), nhưng chỉ \(2\) thỏa điều kiện. Nghiệm \(-1\) là **ngoại lai**, dù thỏa phương trình sau khi bỏ log.

    Bản chất của \(\log_a f(x)=b\) là “cơ số \(a\) phải nâng lên mũ \(b\) để tạo \(f(x)\)”, nên \(f(x)=a^b\). Giá trị \(a^b>0\) làm điều kiện đối số tự được thỏa nếu phép tương đương giữ nguyên các biểu thức; việc ghi điều kiện vẫn đặc biệt cần khi có phép rút gọn hoặc hai log ở hai vế.

    **Vận dụng.** Giải \(4+\log_2(x-1)=6\). Có thể bỏ qua điều kiện \(x>1\) không?

    ??? question "Đối chiếu"

        **Lời giải:** Điều kiện \(x-1>0\), tức \(x>1\). Chuyển vế \(\log_2(x-1)=2\), nên \(x-1=4\), \(x=5>1\). Thử \(4+\log_2 4=6\).

    ??? tip "Kiểm lỗi"

        Không tự mở rộng miền xác định sau biến đổi. Với hai log, bắt buộc **cả hai đối số dương** trước khi dùng tính đơn ánh.

    ### 1.3. Bất phương trình mũ

    So sánh \(2^u\) và \(2^v\) khác so sánh \((1/2)^u\) và \((1/2)^v\). Vì \(2^x\) **tăng**, \(2^u>2^v\) khi và chỉ khi \(u>v\). Vì \((1/2)^x\) **giảm**, \((1/2)^u>(1/2)^v\) khi và chỉ khi \(u<v\). Điều đó giải thích **chiều của dấu**, thay vì học thuộc quy tắc đảo dấu một cách máy móc.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVI-B21-01_R00.svg" alt="Đồ thị hai mũ x tăng và đồ thị một phần hai mũ x giảm đều đi qua điểm không một"><figcaption><strong>Hướng dẫn đọc:</strong> đường xanh \(2^x\) đi lên từ trái sang phải; đường đỏ \((1/2)^x\) đi xuống; cả hai qua \((0,1)\). Nếu muốn giá trị lũy thừa lớn hơn, với đường xanh phải đi **sang phải**, với đường đỏ phải đi **sang trái**.</figcaption></figure>

    Bất phương trình \(a^x>b\) có cơ số \(a>0,a\ne1\). Nếu **\(b\le0\)** thì mọi \(x\) đều thỏa vì \(a^x>0\). Khi \(b>0\), ta so \(a^x\) và \(a^{\log_a b}\): với \(a>1\), \(x>\log_ab\); với \(0<a<1\), \(x<\log_ab\). Các dấu \(\ge,<,\le\) xử lí tương tự theo dấu của \(b\).

    SGK minh họa \(2^x>4\) bằng đường ngang \(y=4\): đồ thị \(2^x\) cắt đường ngang tại \((2,4)\), và nằm phía trên nó khi **\(x>2\)**. Hình dưới thêm cách nhìn tương tự cho lôgarit ở mục kế tiếp.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B21_EXP_LOG_THRESHOLD_AUTHORING_20261123.svg" alt="Đồ thị ngưỡng hai mũ x lớn hơn bốn khi x lớn hơn hai và logarit hai của x lớn hơn hai khi x lớn hơn bốn"><figcaption><strong>Hướng dẫn đọc khung trái:</strong> đường cong \(y=2^x\) giao với ngưỡng \(y=4\) tại \(x=2\). Nghiệm \(2^x>4\) là **\(x>2\)**, chỉ gồm phần đường cong ở phía trên đường ngưỡng; khung phải dùng cho bài lôgarit.</figcaption></figure>

    **Ứng dụng ô tô:** Với mô hình trong SGK \(V(t)=780(0{,}905)^t\) triệu đồng, hỏi khi nào giá trị không quá 300 triệu. Ta giải \((0{,}905)^t\le5/13\); vì cơ số **nhỏ hơn 1**, suy \(t\ge\log_{0{,}905}(5/13)\approx9{,}6\). Nếu chỉ ghi **năm trọn vẹn**, mốc đầu tiên là **10 năm**, không phải 9 năm.

    **Vận dụng.** Giải \((1/2)^{2x-1}\ge(1/2)^3\) và \(3^x>-2\).

    ??? question "Đối chiếu"

        **Lời giải:** Cơ số \(1/2\) nhỏ hơn 1, nên \(2x-1\le3\Rightarrow x\le2\). Còn \(3^x>0>-2\) với mọi \(x\), nên bất phương trình thứ hai có tập nghiệm \(\mathbb R\).

    ??? tip "Kiểm lỗi"

        Đừng lấy \(\log_3(-2)\), vì số âm không phải đối số log hợp lệ. Với hai vế cùng cơ số, chọn đúng chiều tăng/giảm trước khi so mũ.

    ### 1.4. Bất phương trình lôgarit

    Với \(\log_a x>b\), điều kiện đầu tiên là **\(x>0\)**. Nếu \(a>1\), lôgarit tăng và \(\log_a x>b\) tương đương \(x>a^b\); nếu \(0<a<1\), lôgarit giảm và nghiệm là **\(0<x<a^b\)**. Không thể bỏ \(x>0\) dù kết quả đại số đã được biến đổi.

    Đọc **khung phải** của hình ngưỡng dưới đây. Đường \(y=\log_2x\) cắt đường ngang \(y=2\) tại \((4,2)\). Bên phải \(x=4\), đường cong cao hơn ngưỡng; nên \(\log_2x>2\) có nghiệm **\(x>4\)**. Đừng nhầm với bất phương trình mũ \(2^x>4\), có nghiệm \(x>2\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B21_EXP_LOG_THRESHOLD_AUTHORING_20261123.svg" alt="Đồ thị lôgarit cơ số hai của x vượt đường ngang y hai khi x lớn hơn bốn"><figcaption><strong>Hướng dẫn đọc khung phải:</strong> giao điểm \((4,2)\) xác định ngưỡng \(x=4\); phần đường cong \(y=\log_2x\) nằm cao hơn \(y=2\) khi \(x>4\). Hình không có điểm đồ thị log ở \(x\le0\).</figcaption></figure>

    Với cơ số nhỏ hơn 1, thử bất phương trình \(\log_{0{,}3}(x+1)\le\log_{0{,}3}(2x-1)\). Điều kiện \(x+1>0,\ 2x-1>0\) cho \(x>\frac12\). Vì hàm log cơ số \(0{,}3\) **giảm**, bất phương trình đổi thành \(x+1\ge2x-1\), hay \(x\le2\). Kết hợp được \(\frac12<x\le2\). Đây là minh họa điển hình cần **cả đảo chiều lẫn giữ miền gốc**.

    **Ứng dụng áp suất:** Trong SGK, \(\ln(p/100)=-h/7\), với \(p>0\) (kPa), \(h\) (km). Tương đương \(p=100e^{-h/7}\); độ cao tăng thì áp suất giảm. Với một câu hỏi ngưỡng, cần giải phương trình/bất phương trình bằng \(\ln\) hoặc hàm mũ, vẫn kiểm \(p>0\).

    **Vận dụng.** Giải \(\log_{1/3}(x-1)<\log_{1/3}4\). Vì sao không được quên \(x>1\)?

    ??? question "Đối chiếu"

        **Lời giải:** Điều kiện \(x-1>0\), tức \(x>1\). Cơ số \(1/3\) nằm giữa 0 và 1, nên log giảm: \(x-1>4\), suy \(x>5\). Tập nghiệm \(x>5\) thỏa điều kiện.

    ??? tip "Kiểm lỗi"

        Nếu được \(x<5\), em đã không đảo chiều. Đừng chỉ lấy giao điểm đồ thị mà bỏ miền xác định của log.

=== "Kiến thức SGK"

    ### 2.1. Phương trình mũ

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khái niệm — Phương trình mũ cơ bản</strong><p>Phương trình mũ cơ bản có dạng \(a^x=b\) với \(a>0,\ a\ne1\), trong đó ẩn nằm ở số mũ. Với cơ số hợp lệ, \(a^x\) luôn dương và hàm mũ đơn điệu nghiêm ngặt.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Quy tắc — Nghiệm của phương trình mũ</strong><p>Với \(a>0,\ a\ne1\): nếu \(b>0\) thì \(a^x=b\) có <strong>nghiệm duy nhất</strong> \(x=\log_ab\). Nếu \(b\le0\), phương trình <strong>vô nghiệm thực</strong>. Khi biểu thức được xác định, \(a^{u(x)}=a^{v(x)}\Leftrightarrow u(x)=v(x)\).</p></div>

    **Chọn phương pháp:** Nhận thấy cùng cơ số thì so mũ; nếu vế phải dương nhưng khó viết bằng lũy thừa cùng cơ số, dùng lôgarit để tìm số mũ. Ví dụ \(10^{x-1}=2022\) cho \(x=1+\log2022\).

    ### 2.2. Phương trình lôgarit

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khái niệm — Phương trình lôgarit cơ bản</strong><p>Phương trình \(\log_ax=b\) với \(a>0,\ a\ne1,\ x>0\), \(b\in\mathbb R\), là phương trình lôgarit cơ bản. Đối số \(x\) phải dương để lôgarit có nghĩa thực.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Quy tắc — Nghiệm của phương trình lôgarit</strong><p>Với cơ số hợp lệ, \(\log_ax=b\) có nghiệm duy nhất \(x=a^b>0\). Với \(\log_af(x)=\log_ag(x)\), chỉ khi <strong>\(f(x)>0,\ g(x)>0\)</strong> mới được chuyển thành \(f(x)=g(x)\). Phải lọc nghiệm với điều kiện ban đầu.</p></div>

    **Ví dụ điều kiện:** \(\log_3(x+1)=\log_3(x^2-1)\) đòi \(x>1\). Phương trình đại số cho \(-1,2\); nghiệm log chỉ là **\(x=2\)**.

    ### 2.3. Bất phương trình mũ

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khái niệm — Bất phương trình mũ cơ bản</strong><p>Bất phương trình \(a^x>b\) hoặc với các dấu \(\ge,<,\le\), trong đó \(a>0,\ a\ne1\), gọi là bất phương trình mũ cơ bản. Hàm \(a^x>0\) với mọi \(x\in\mathbb R\).</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Quy tắc — Giải dạng \(a^x>b\)</strong><p>Nếu \(b\le0\), tập nghiệm là toàn \(\mathbb R\). Nếu \(b>0\), với \(a>1\) tập nghiệm \(x>\log_ab\); với \(0<a<1\) tập nghiệm <strong>\(x<\log_ab\)</strong>. Với dấu khác phải xét dấu của \(b\) và tính đơn điệu tương tự.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — So sánh hai lũy thừa cùng cơ số</strong><p>Nếu \(a>1\), \(a^u>a^v\Leftrightarrow u>v\). Nếu \(0<a<1\), \(a^u>a^v\Leftrightarrow u<v\). Dấu thay đổi theo tính đồng biến hoặc nghịch biến, không phải vì biểu thức có chữ mũ.</p></div>

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-CHVI-B21-01_R00.svg" alt="Đồ thị hai hàm mũ có cơ số hai và một phần hai minh họa hai chiều biến thiên"><figcaption><strong>Tra hình biến thiên:</strong> \(2^x\) tăng, \((1/2)^x\) giảm; cả hai đi qua \((0,1)\). Đây là chứng cứ trực quan của việc giữ/đảo chiều khi so số mũ.</figcaption></figure>

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B21_EXP_LOG_THRESHOLD_AUTHORING_20261123.svg" alt="Hai mũ x cắt đường ngang bốn tại x hai và vượt đường ngưỡng khi x lớn hơn hai"><figcaption><strong>Tra hình ngưỡng mũ:</strong> dùng khung trái: \(2^x=4\) tại \(x=2\), \(2^x>4\) khi \(x>2\). Phần khung phải dành để đọc bất phương trình log.</figcaption></figure>

    ### 2.4. Bất phương trình lôgarit

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khái niệm — Bất phương trình lôgarit cơ bản</strong><p>Với \(a>0,\ a\ne1\), dạng cơ bản \(\log_ax>b\) hoặc \(\ge,<,\le\) có điều kiện <strong>\(x>0\)</strong>. Với đối số \(f(x)\), phải giải <strong>\(f(x)>0\)</strong> trước khi biến đổi.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Quy tắc — Giải dạng \(\log_ax>b\)</strong><p>Với \(a>1\), nghiệm \(x>a^b\). Với \(0<a<1\), nghiệm <strong>\(0<x<a^b\)</strong>. Không bỏ điều kiện \(x>0\) khi đổi chiều theo hàm nghịch biến.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — So sánh hai lôgarit cùng cơ số</strong><p>Với \(a>1\), \(\log_au>\log_av\Leftrightarrow u>v>0\); với \(0<a<1\), \(\log_au>\log_av\Leftrightarrow0<u<v\). Các đối số phải <strong>đều dương</strong> trước khi so sánh.</p></div>

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B21_EXP_LOG_THRESHOLD_AUTHORING_20261123.svg" alt="Lôgarit hai của x lớn hơn hai khi x vượt ngưỡng bốn"><figcaption><strong>Tra hình ngưỡng log:</strong> khung phải, \(\log_2x\) cắt \(y=2\) tại \((4,2)\); phần trên đường ngưỡng tương ứng \(x>4\), vẫn thuộc miền \(x>0\).</figcaption></figure>

    | Dạng | \(a>1\) | \(0<a<1\) |
    | :-- | :-- | :-- |
    | \(a^x>b,\ b>0\) | \(x>\log_ab\) | \(x<\log_ab\) |
    | \(\log_ax>b\) | \(x>a^b\) | \(0<x<a^b\) |

    **Hạn chế và khắc phục:** Với mũ, \(b\le0\) cần xử lí riêng vì \(a^x>0\). Với log, đối số phải dương trước khi dùng bảng. Khi mô hình có thời gian/năm nguyên, chỉ nhận giá trị thuộc tập thời gian cho phép, không làm tròn thông thường nếu bài hỏi mốc đầu tiên thỏa ngưỡng.

=== "Ví dụ"

    ### 3.1. Phương trình mũ đưa về cùng cơ số

    **Đề bài.** Giải \(3^{x+1}=\frac1{3^{1-2x}}\).

    **Phân tích:** Chuyển vế phải thành lũy thừa cơ số 3; khi hai vế là cùng một lũy thừa với cơ số dương khác 1, được so số mũ.

    <div class="thpt-g10-example-solution" role="group" aria-label="Ví dụ 3.1 có lời giải"><p><strong>Lời giải.</strong> \(3^{x+1}=3^{2x-1}\Longleftrightarrow x+1=2x-1\), nên \(x=2\).</p></div>

    **Kiểm lại:** Thế \(x=2\), hai vế đều bằng \(3^3=27\). Không nhầm số mũ âm với dấu trừ ở ngoài.

    ### 3.2. Phương trình mũ dùng lôgarit tự nhiên

    **Đề bài.** Giải \(2e^{2x}=5\).

    **Phân tích:** Chia cho 2, kiểm vế phải dương, lấy \(\ln\) vì cơ số \(e\) hợp lệ; sau đó giải phương trình bậc nhất theo \(x\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Ví dụ 3.2 có lời giải"><p><strong>Lời giải.</strong> \(e^{2x}=5/2>0\), nên \(2x=\ln(5/2)\). Do đó nghiệm \(x=\frac12\ln(5/2)\).</p></div>

    **Kiểm lại:** \(e^{2x}=e^{\ln(5/2)}=5/2\) nên \(2e^{2x}=5\). Không thay đối số của log bằng số âm.

    ### 3.3. Phương trình lôgarit cơ số 10

    **Đề bài.** Giải \(4+3\log(2x)=16\).

    **Phân tích:** Điều kiện gốc \(2x>0\) tức \(x>0\). Trong SGK, \(\log\) không ghi cơ số là log thập phân cơ số 10.

    <div class="thpt-g10-example-solution" role="group" aria-label="Ví dụ 3.3 có lời giải"><p><strong>Lời giải.</strong> \(\log(2x)=4\Longleftrightarrow2x=10^4\Longleftrightarrow x=5000\). Nghiệm \(5000>0\) thỏa điều kiện.</p></div>

    **Kiểm lại:** \(\log(10000)=4\) nên \(4+3\cdot4=16\). Không nhầm \(\log(2x)\) với \(\log2\cdot x\).

    ### 3.4. Giữ miền xác định khi hai log bằng nhau

    **Đề bài.** Giải \(\log_3(x+1)=\log_3(x^2-1)\).

    **Phân tích:** Trước khi so đối số, giải đồng thời \(x+1>0\) và \(x^2-1>0\), rồi loại nghiệm đại số ngoài miền.

    <div class="thpt-g10-example-solution" role="group" aria-label="Ví dụ 3.4 có lời giải"><p><strong>Lời giải.</strong> Miền xác định \(x>1\). Khi đó \(x+1=x^2-1\), tức \((x-2)(x+1)=0\). Hai nghiệm đại số \(2,-1\), chỉ \(x=2\) thỏa \(x>1\).</p></div>

    **Kiểm lại:** Tại \(x=2\), hai đối số bằng 3; tại \(x=-1\), một đối số bằng 0 nên log gốc không xác định.

    ### 3.5. Bất phương trình mũ cơ số lớn hơn 1

    **Đề bài.** Giải \(16^x>\frac18\).

    **Phân tích:** Đưa hai vế về cơ số 2, rồi giữ chiều dấu vì \(2>1\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Ví dụ 3.5 có lời giải"><p><strong>Lời giải.</strong> \(16^x=2^{4x}\), \(1/8=2^{-3}\), nên \(2^{4x}>2^{-3}\Longleftrightarrow4x>-3\Longleftrightarrow x>-\frac34\).</p></div>

    **Kiểm lại:** Với \(x=0\), bất phương trình đúng; với \(x=-1\), sai. Điểm \(-3/4\) bị loại vì dấu nghiêm ngặt.

    ### 3.6. Bất phương trình mũ trong mô hình ô tô

    **Đề bài.** Cho giá trị còn lại \(V(t)=780(0{,}905)^t\) triệu đồng với \(t\ge0\) năm. Khi nào \(V(t)\le300\)? Nếu chỉ tính năm nguyên trọn vẹn, mốc đầu tiên là năm thứ mấy?

    **Phân tích:** Vì \(0<0{,}905<1\), hàm \(V(t)\) giảm, nên khi so với ngưỡng \(5/13\) cần đảo chiều lúc lấy log cùng cơ số.

    <div class="thpt-g10-example-solution" role="group" aria-label="Ví dụ 3.6 có lời giải"><p><strong>Lời giải.</strong> \(V(t)\le300\Longleftrightarrow(0{,}905)^t\le5/13\Longleftrightarrow t\ge\log_{0{,}905}(5/13)=\frac{\ln(5/13)}{\ln(0{,}905)}\approx9{,}57\) năm. Nếu \(t\) phải là số nguyên không âm, mốc nhỏ nhất là \(t=10\).</p></div>

    **Kiểm lại:** 9 năm chưa đạt ngưỡng, 10 năm đã không quá 300 triệu. Kết quả thuộc mô hình khấu hao cố định, không phải giá bán thực tế.

    ### 3.7. Bất phương trình lôgarit nghịch biến

    **Đề bài.** Giải \(\log_{0{,}3}(x+1)\le\log_{0{,}3}(2x-1)\).

    **Phân tích:** Các đối số gốc phải dương; vì cơ số \(0{,}3\) nhỏ hơn 1 nên dấu \(\le\) đảo thành \(\ge\) khi so đối số.

    <div class="thpt-g10-example-solution" role="group" aria-label="Ví dụ 3.7 có lời giải"><p><strong>Lời giải.</strong> Điều kiện \(x+1>0,\ 2x-1>0\) cho \(x>1/2\). Hàm log giảm, nên \(x+1\ge2x-1\Longleftrightarrow x\le2\). Kết hợp: \(x\in(1/2,2]\).</p></div>

    **Kiểm lại:** \(x=2\) được nhận vì hai vế bằng nhau; \(x=1/2\) bị loại vì một đối số bằng 0.

    ### 3.8. Lôgarit trong mô hình áp suất khí quyển

    **Đề bài.** Theo mô hình SGK, \(\ln(p/100)=-h/7\), với \(p>0\) kPa và \(h\ge0\) km. Tính \(p\) ở \(h=4\), đồng thời tìm một ngưỡng trên của \(p\) khi \(h>10\).

    **Phân tích:** Đưa log về mũ \(p=100e^{-h/7}\). Hàm mũ cơ số \(e>1\) tăng, nên \(h\) lớn làm \(-h/7\) nhỏ và \(p\) giảm.

    <div class="thpt-g10-example-solution" role="group" aria-label="Ví dụ 3.8 có lời giải"><p><strong>Lời giải.</strong> \(p=100e^{-h/7}\) kPa. Với \(h=4\), \(p=100e^{-4/7}\approx56{,}47\) kPa. Nếu \(h>10\), thì \(p<100e^{-10/7}\approx23{,}97\) kPa theo mô hình.</p></div>

    **Kiểm lại:** \(p\) luôn dương. Dấu \(<\) là nghiêm ngặt vì \(h>10\), không đổi thành \(\le\).

=== "Lỗi thường gặp"

    ### 4.1. Lấy log của số không dương

    **Dấu hiệu:** Từ \(2^x=-5\) viết \(x=\log_2(-5)\).

    **Vì sao sai:** Lũy thừa cơ số dương luôn dương, còn log không có đối số không dương.

    **Cách sửa:** Với \(a^x=b\), \(b\le0\) thì vô nghiệm; với \(a^x>b\), \(b\le0\) thì mọi số thực đều thỏa.

    ### 4.2. Quên điều kiện trong phương trình lôgarit

    **Dấu hiệu:** Giải \(\log_3(x+1)=\log_3(x^2-1)\) và nhận cả hai nghiệm đại số \(-1,2\).

    **Vì sao sai:** \(x=-1\) làm đối số đầu bằng 0, nên phương trình gốc không xác định.

    **Cách sửa:** Kiểm tất cả đối số **dương** trước; chỉ nhận nghiệm \(x=2\) thỏa miền \(x>1\).

    ### 4.3. Giữ chiều khi cơ số nhỏ hơn 1

    **Dấu hiệu:** Giải \((1/2)^u>(1/2)^v\) thành \(u>v\), hoặc \(\log_{0{,}3}u<\log_{0{,}3}v\) thành \(u<v\).

    **Vì sao sai:** Cả mũ và log cơ số \(0<a<1\) đều **nghịch biến**, nên phải đảo chiều khi so đầu vào.

    **Cách sửa:** So cơ số với 1 trước khi bỏ hàm, và riêng log phải kiểm điều kiện hai đối số dương.

    ### 4.4. Nhầm điểm bằng ngưỡng với cả tập nghiệm

    **Dấu hiệu:** Từ \(2^x>4\) cho chỉ \(x=2\), hoặc từ \(\log_2x>2\) cho \(x>2\).

    **Vì sao sai:** Đồ thị ngưỡng tại \(x=2\) và \(x=4\) tương ứng hai **hàm khác nhau**. Dấu \(>\) yêu cầu đoạn đường cong **cao hơn**, không phải đúng giao điểm.

    **Cách sửa:** \(2^x>4\Leftrightarrow x>2\); \(\log_2x>2\Leftrightarrow x>4\). Đối chiếu hai khung hình bên tab Khám phá.

    ### 4.5. Lấy sai dấu ngoặc của tập nghiệm

    **Dấu hiệu:** Cho \(x=1/2\) là nghiệm bất phương trình log ví dụ 3.7, hoặc loại \(x=2\).

    **Vì sao sai:** \(x=1/2\) làm đối số bằng 0; \(x=2\) cho hai log bằng nhau và thỏa \(\le\).

    **Cách sửa:** Lấy giao miền xác định với tập sau khi giải, đọc chính xác \((1/2,2]\).

    ### 4.6. Làm tròn thời gian mà bỏ điều kiện ngưỡng

    **Dấu hiệu:** Từ \(t\ge9{,}57\) kết luận 9 năm trọn vẹn đủ, hoặc coi mô hình dự báo chắc chắn giá trị xe sau 10 năm.

    **Vì sao sai:** Nếu thời gian tính theo năm nguyên, phải chọn **số nguyên đầu tiên thỏa** là 10; mô hình còn giả định tốc độ khấu hao không đổi.

    **Cách sửa:** Thử lại hai mốc nguyên 9 và 10, phân biệt thời gian liên tục với số kì trọn vẹn và ghi kết quả là **theo mô hình**.

    **Học tiếp:** [Core và Luyện tập Bài 21](luyen-tap.md) · [Tự luận Chương VI](../../../thu-vien/tu-luan-g11-chuong-vi.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">SGK Toán 11 Kết nối tri thức, tập hai, Bài 21 trang in 20–24: Phương trình mũ; Phương trình lôgarit; Bất phương trình mũ; Bất phương trình lôgarit. Văn bản PDF số hóa đã đối chiếu; ảnh render trang/offset chưa xác minh. Tái sử dụng SVG B21 về hai chiều biến thiên, bổ sung đúng một SVG ngưỡng mũ–lôgarit chỉ cho ý SGK còn thiếu; cả hai đặt sát hướng dẫn đọc ở tab Khám phá và SGK. Core/Luyện tập và Tự kiểm tra giữ nguyên.</p>
~~~~

---

# 6. NGUYÊN VĂN SVG XML — SEMANTIC REVIEW ONLY

## 18: REUSED FIG-G11-CHVI-B18-01_R00.svg
PATH: `docs/assets/images/thpt/FIG-G11-CHVI-B18-01_R00.svg`  
REF: `main`  
BLOB: `79528bcd2c87eb40b1b54f18c697b0ae3458e642`  

~~~~svg
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc" viewBox="0 0 800 450" width="800" height="450">
<title id="title">FIG-G11-CHVI-B18-01: Số mũ thay đổi liên tục, 2^x thay đổi thế nào?</title><desc id="desc">Các điểm đúng tọa độ (-2,1/4), (-1,1/2), (0,1), (1,2), (2,4) trên trục x và trục 2^x, minh họa vì sao số mũ âm cho phân số, 0 cho 1 và x tăng thì 2^x tăng. Dấu căn cho điểm x=1/2 có y=√2.</desc>
<rect width="800" height="450" fill="#f8fafc" rx="20"/>
<text x="400" y="38" font-size="22" font-weight="700" text-anchor="middle" fill="#172554" font-family="Arial">Số mũ thay đổi liên tục, 2^x thay đổi thế nào?</text>
<line x1="82" y1="360" x2="720" y2="360" stroke="#1e293b" stroke-width="2"/><path d="M720 360 l-10 -5 v10 z" fill="#1e293b"/>
<line x1="360" y1="374" x2="360" y2="58" stroke="#1e293b" stroke-width="2"/><path d="M360 58 l-5 10 h10 z" fill="#1e293b"/>
<text x="731" y="367" font-size="17">x</text><text x="335" y="63" font-size="17">2^x</text><polyline points="129.00,343.67 134.78,343.07 140.55,342.44 146.32,341.79 152.10,341.11 157.87,340.41 163.65,339.69 169.43,338.93 175.20,338.15 180.97,337.34 186.75,336.50 192.53,335.63 198.30,334.73 204.07,333.79 209.85,332.82 215.63,331.82 221.40,330.77 227.18,329.69 232.95,328.57 238.72,327.40 244.50,326.19 250.27,324.94 256.05,323.64 261.82,322.29 267.60,320.89 273.38,319.45 279.15,317.94 284.92,316.38 290.70,314.77 296.48,313.09 302.25,311.35 308.02,309.55 313.80,307.68 319.57,305.74 325.35,303.73 331.13,301.65 336.90,299.48 342.68,297.24 348.45,294.91 354.23,292.50 360.00,290.00 365.78,287.41 371.55,284.72 377.32,281.93 383.10,279.03 388.88,276.03 394.65,272.92 400.43,269.69 406.20,266.35 411.98,262.87 417.75,259.27 423.53,255.54 429.30,251.67 435.08,247.66 440.85,243.49 446.63,239.17 452.40,234.70 458.18,230.05 463.95,225.24 469.73,220.24 475.50,215.06 481.27,209.69 487.05,204.12 492.82,198.34 498.60,192.35 504.38,186.14 510.15,179.70 515.93,173.01 521.70,166.08 527.48,158.90 533.25,151.45 539.02,143.72 544.80,135.70 550.58,127.39 556.35,118.77 562.13,109.83 567.90,100.56 573.68,90.94 579.45,80.97 585.23,70.63 591.00,59.90" fill="none" stroke="#2563eb" stroke-width="3.5"/><circle cx="140" cy="342.5" r="5" fill="#1d4ed8"/><text x="140" y="384" font-size="14" text-anchor="middle" fill="#334155">-2</text><circle cx="250" cy="325" r="5" fill="#1d4ed8"/><text x="250" y="384" font-size="14" text-anchor="middle" fill="#334155">-1</text><circle cx="360" cy="290" r="5" fill="#1d4ed8"/><text x="360" y="384" font-size="14" text-anchor="middle" fill="#334155">0</text><circle cx="470" cy="220" r="5" fill="#1d4ed8"/><text x="470" y="384" font-size="14" text-anchor="middle" fill="#334155">1</text><circle cx="580" cy="80" r="5" fill="#1d4ed8"/><text x="580" y="384" font-size="14" text-anchor="middle" fill="#334155">2</text><circle cx="415" cy="261.0" r="7" fill="#d97706"/><text x="448" y="248" font-size="15" fill="#92400e">x=1/2: sqrt(2)</text>
<text x="150" y="327" font-size="13" fill="#1d4ed8">1/4</text>
<text x="262" y="317" font-size="13" fill="#1d4ed8">1/2</text>
<text x="372" y="283" font-size="13" fill="#1d4ed8">1</text>
<text x="482" y="212" font-size="13" fill="#1d4ed8">2</text>
<text x="595" y="75" font-size="13" fill="#1d4ed8">4</text>
<text x="135" y="106" font-size="16" fill="#1d4ed8">Cơ số 2 &gt; 1: hàm tăng</text>
<text x="95" y="403" font-size="14" fill="#334155">Số mũ âm cho phân số dương; x=0 cho 1</text><text x="400" y="429" font-size="13" text-anchor="middle" fill="#475569" font-family="Arial">Đọc nhãn, điều kiện và phần hướng dẫn cạnh hình trước khi kết luận.</text></svg>
~~~~

---

## 19: REUSED FIG-G11-CHVI-B19-01_R00.svg
PATH: `docs/assets/images/thpt/FIG-G11-CHVI-B19-01_R00.svg`  
REF: `main`  
BLOB: `fe2895ac101dcc4cf4046d57428181ad0f448dc8`  

~~~~svg
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc" viewBox="0 0 800 450" width="800" height="450">
<title id="title">FIG-G11-CHVI-B19-01: Lôgarit trả lời: cần số mũ nào?</title><desc id="desc">Sơ đồ luồng hai chiều: từ cơ số 2, mũ 3 tạo ra 8; quay ngược từ kết quả 8, logarit cơ số 2 trả về số mũ 3. Cơ số phải dương, khác 1; đối số phải dương.</desc>
<rect width="800" height="450" fill="#f8fafc" rx="20"/>
<text x="400" y="38" font-size="22" font-weight="700" text-anchor="middle" fill="#172554" font-family="Arial">Lôgarit trả lời: cần số mũ nào?</text>
<rect x="85" y="125" width="240" height="125" rx="20" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
<rect x="470" y="125" width="240" height="125" rx="20" fill="#dcfce7" stroke="#059669" stroke-width="2"/>
<text x="205" y="162" text-anchor="middle" font-size="20" font-weight="700" fill="#1e40af">2^3 = 8</text>
<text x="205" y="195" text-anchor="middle" font-size="16" fill="#1e40af">Biết cơ số và số mũ</text><text x="205" y="221" text-anchor="middle" font-size="16" fill="#1e40af">để tính kết quả</text>
<text x="590" y="162" text-anchor="middle" font-size="20" font-weight="700" fill="#065f46">log₂8 = 3</text>
<text x="590" y="195" text-anchor="middle" font-size="16" fill="#065f46">Biết cơ số và kết quả</text><text x="590" y="221" text-anchor="middle" font-size="16" fill="#065f46">để tìm số mũ</text>
<path d="M325 174 H470 M460 167 L470 174 L460 181" fill="none" stroke="#334155" stroke-width="3"/>
<path d="M470 218 H325 M335 211 L325 218 L335 225" fill="none" stroke="#334155" stroke-width="3"/>
<text x="400" y="160" text-anchor="middle" font-size="14" fill="#334155">Làm</text><text x="400" y="242" text-anchor="middle" font-size="14" fill="#334155">Đảo lại</text>
<text x="400" y="309" text-anchor="middle" font-size="17" fill="#334155">log_a(b) = x &lt;=&gt; a^x = b</text>
<text x="400" y="346" text-anchor="middle" font-size="16" fill="#be123c">Điều kiện: a &gt; 0; a != 1; b &gt; 0</text><text x="400" y="429" font-size="13" text-anchor="middle" fill="#475569" font-family="Arial">Đọc nhãn, điều kiện và phần hướng dẫn cạnh hình trước khi kết luận.</text></svg>
~~~~

---

## 20: REUSED FIG-G11-CHVI-B20-01_R00.svg
PATH: `docs/assets/images/thpt/FIG-G11-CHVI-B20-01_R00.svg`  
REF: `main`  
BLOB: `64bcb465bd6d809095a4ca2b910555e314badb69`  

~~~~svg
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc" viewBox="0 0 800 450" width="800" height="450">
<title id="title">FIG-G11-CHVI-B20-01: Hàm mũ và logarit là hai hàm ngược nhau</title><desc id="desc">Cùng một hệ trục có đường y=x nét đứt, đường y=2^x màu xanh và y=log cơ số 2 của x màu xanh lục. Các điểm (0,1),(1,2),(2,4) hoán đổi với (1,0),(2,1),(4,2) nếu ngoài phạm vi hình. Các đường đối xứng theo y=x.</desc>
<rect width="800" height="450" fill="#f8fafc" rx="20"/>
<text x="400" y="38" font-size="22" font-weight="700" text-anchor="middle" fill="#172554" font-family="Arial">Hàm mũ và logarit là hai hàm ngược nhau</text>
<line x1="65" y1="250" x2="730" y2="250" stroke="#334155" stroke-width="2"/>
<line x1="330" y1="415" x2="330" y2="60" stroke="#334155" stroke-width="2"/>
<text x="740" y="257" font-size="15">x</text><text x="312" y="64" font-size="15">y</text>
<line x1="150" y1="430" x2="510" y2="70" stroke="#64748b" stroke-width="2" stroke-dasharray="8 6"/>
<text x="520" y="84" font-size="15" fill="#475569">y=x (đối xứng)</text><polyline points="144.0,242.3 147.1,242.0 150.2,241.7 153.3,241.4 156.4,241.1 159.5,240.8 162.6,240.5 165.7,240.1 168.8,239.8 171.9,239.4 175.0,239.0 178.1,238.7 181.2,238.3 184.3,237.8 187.4,237.4 190.5,237.0 193.6,236.5 196.7,236.0 199.8,235.5 202.9,235.0 206.0,234.5 209.1,234.0 212.2,233.4 215.3,232.8 218.4,232.2 221.5,231.6 224.6,230.9 227.7,230.2 230.8,229.5 233.9,228.8 237.0,228.1 240.1,227.3 243.2,226.5 246.3,225.7 249.4,224.8 252.5,223.9 255.6,223.0 258.7,222.1 261.8,221.1 264.9,220.1 268.0,219.0 271.1,217.9 274.2,216.8 277.3,215.6 280.4,214.4 283.5,213.1 286.6,211.8 289.7,210.5 292.8,209.1 295.9,207.7 299.0,206.2 302.1,204.6 305.2,203.0 308.3,201.4 311.4,199.6 314.5,197.9 317.6,196.0 320.7,194.1 323.8,192.2 326.9,190.1 330.0,188.0 333.1,185.8 336.2,183.6 339.3,181.2 342.4,178.8 345.5,176.3 348.6,173.7 351.7,171.0 354.8,168.2 357.9,165.3 361.0,162.3 364.1,159.2 367.2,156.0 370.3,152.7 373.4,149.3 376.5,145.7 379.6,142.1 382.7,138.2 385.8,134.3 388.9,130.2 392.0,126.0 395.1,121.6 398.2,117.1 401.3,112.4 404.4,107.6 407.5,102.5 410.6,97.3 413.7,92.0 416.8,86.4 419.9,80.6 423.0,74.6 426.1,68.5" fill="none" stroke="#2563eb" stroke-width="3.5"/>
<polyline points="341.5,400.7 343.4,387.2 345.3,375.4 347.1,365.1 349.0,355.8 350.9,347.4 352.8,339.7 354.6,332.6 356.5,326.0 358.4,319.9 360.3,314.2 362.1,308.8 364.0,303.7 365.9,298.9 367.8,294.4 369.6,290.0 371.5,285.9 373.4,281.9 375.3,278.1 377.1,274.5 379.0,271.0 380.9,267.7 382.8,264.4 384.6,261.3 386.5,258.3 388.4,255.4 390.3,252.5 392.1,249.8 394.0,247.1 395.9,244.6 397.8,242.0 399.6,239.6 401.5,237.2 403.4,234.9 405.3,232.7 407.1,230.5 409.0,228.3 410.9,226.2 412.8,224.2 414.6,222.2 416.5,220.2 418.4,218.3 420.3,216.4 422.1,214.6 424.0,212.8 425.9,211.0 427.8,209.3 429.6,207.6 431.5,205.9 433.4,204.3 435.3,202.6 437.2,201.1 439.0,199.5 440.9,198.0 442.8,196.5 444.7,195.0 446.5,193.6 448.4,192.1 450.3,190.7 452.2,189.3 454.0,188.0 455.9,186.6 457.8,185.3 459.7,184.0 461.5,182.7 463.4,181.5 465.3,180.2 467.2,179.0 469.0,177.8 470.9,176.6 472.8,175.4 474.7,174.2 476.5,173.1 478.4,171.9 480.3,170.8 482.2,169.7 484.0,168.6 485.9,167.5 487.8,166.4 489.7,165.4 491.5,164.3 493.4,163.3 495.3,162.3 497.2,161.3 499.0,160.3 500.9,159.3 502.8,158.3 504.7,157.4 506.5,156.4 508.4,155.5 510.3,154.5 512.2,153.6 514.0,152.7 515.9,151.8 517.8,150.9 519.7,150.0 521.5,149.1 523.4,148.2 525.3,147.4" fill="none" stroke="#059669" stroke-width="3.5"/>
<circle cx="330" cy="188" r="5.5" fill="#2563eb"/>
<circle cx="392" cy="250" r="5.5" fill="#059669"/>
<text x="86" y="94" font-size="16" fill="#2563eb">y=2^x ; TXD R</text>
<text x="86" y="118" font-size="16" fill="#059669">y=log₂x ; TXD x&gt;0</text>
<text x="340" y="270" font-size="14" fill="#334155">0</text><text x="400" y="429" font-size="13" text-anchor="middle" fill="#475569" font-family="Arial">Đọc nhãn, điều kiện và phần hướng dẫn cạnh hình trước khi kết luận.</text></svg>
~~~~

---

## 20: NEW G11_B20_DECREASING_EXP_LOG_AUTHORING_20261123.svg
PATH: `docs/assets/images/thpt/G11_B20_DECREASING_EXP_LOG_AUTHORING_20261123.svg`  
REF: `authoring/sgk-g11-b20-knowledge-only-20261123`  
BLOB: `e0edabf109720b5720e2419c8b0f2c4af6045b50`  

~~~~svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 970 430" width="970" height="430" role="img" aria-labelledby="t d">
<title id="t">Hai đồ thị nghịch biến với cơ số một phần hai</title>
<desc id="d">Hình trái: đồ thị y=(1/2)^x xác định mọi x, đi qua (0,1) và giảm từ trái sang phải, luôn nằm phía trên trục hoành. Hình phải: đồ thị y=log cơ số 1/2 của x xác định khi x dương, đi qua (1,0), giảm từ trái sang phải, nằm bên phải trục tung; hai hàm là hàm ngược nhau.</desc>
<rect width="970" height="430" rx="20" fill="#fff"/>
<text x="485" y="34" text-anchor="middle" font-family="Arial,sans-serif" font-size="23" font-weight="700" fill="#1e3858">Khi 0 &lt; a &lt; 1, cả hai hàm đều nghịch biến</text>
<rect x="22" y="55" width="449" height="325" rx="14" fill="#f4f9fd" stroke="#dce5eb"/>
<rect x="495" y="55" width="453" height="325" rx="14" fill="#fdf7f5" stroke="#eadfdc"/>
<g font-family="Arial,sans-serif">
<text x="245" y="87" text-anchor="middle" font-size="19" font-weight="700" fill="#285c9a">y = (1/2)ˣ</text>
<line x1="62" y1="320" x2="456" y2="320" stroke="#455b72" stroke-width="2.4"/>
<line x1="255" y1="332" x2="255" y2="98" stroke="#455b72" stroke-width="2.4"/>
<text x="446" y="341" font-size="16" fill="#455b72">x</text><text x="239" y="105" font-size="16" fill="#455b72">y</text>
<polyline points="75.00,64.00 78.00,72.72 81.00,81.14 84.00,89.28 87.00,97.14 90.00,104.73 93.00,112.06 96.00,119.15 99.00,125.99 102.00,132.60 105.00,138.98 108.00,145.15 111.00,151.10 114.00,156.86 117.00,162.41 120.00,167.78 123.00,172.97 126.00,177.98 129.00,182.81 132.00,187.49 135.00,192.00 138.00,196.36 141.00,200.57 144.00,204.64 147.00,208.57 150.00,212.37 153.00,216.03 156.00,219.57 159.00,222.99 162.00,226.30 165.00,229.49 168.00,232.57 171.00,235.55 174.00,238.43 177.00,241.21 180.00,243.89 183.00,246.48 186.00,248.99 189.00,251.41 192.00,253.74 195.00,256.00 198.00,258.18 201.00,260.29 204.00,262.32 207.00,264.28 210.00,266.18 213.00,268.02 216.00,269.79 219.00,271.50 222.00,273.15 225.00,274.75 228.00,276.29 231.00,277.78 234.00,279.21 237.00,280.60 240.00,281.95 243.00,283.24 246.00,284.49 249.00,285.70 252.00,286.87 255.00,288.00 258.00,289.09 261.00,290.14 264.00,291.16 267.00,292.14 270.00,293.09 273.00,294.01 276.00,294.89 279.00,295.75 282.00,296.57 285.00,297.37 288.00,298.14 291.00,298.89 294.00,299.61 297.00,300.30 300.00,300.97 303.00,301.62 306.00,302.25 309.00,302.85 312.00,303.44 315.00,304.00 318.00,304.55 321.00,305.07 324.00,305.58 327.00,306.07 330.00,306.55 333.00,307.00 336.00,307.45 339.00,307.87 342.00,308.29 345.00,308.69 348.00,309.07 351.00,309.44 354.00,309.80 357.00,310.15 360.00,310.49 363.00,310.81 366.00,311.12 369.00,311.43 372.00,311.72 375.00,312.00 378.00,312.27 381.00,312.54 384.00,312.79 387.00,313.04 390.00,313.27 393.00,313.50 396.00,313.72 399.00,313.94 402.00,314.14 405.00,314.34 408.00,314.54 411.00,314.72 414.00,314.90 417.00,315.08 420.00,315.24 423.00,315.41 426.00,315.56 429.00,315.71 432.00,315.86 435.00,316.00" fill="none" stroke="#285c9a" stroke-width="3.5" stroke-linecap="round"/>
<circle cx="135" cy="192" r="4.5" fill="#285c9a"/><text x="142" y="183" font-size="14" fill="#285c9a">(-2;4)</text>
<circle cx="195" cy="256" r="4.5" fill="#285c9a"/><text x="202" y="247" font-size="14" fill="#285c9a">(-1;2)</text>
<circle cx="255" cy="288" r="4.5" fill="#285c9a"/><text x="262" y="279" font-size="14" fill="#285c9a">(0;1)</text>
<circle cx="315" cy="304" r="4.5" fill="#285c9a"/><text x="322" y="295" font-size="14" fill="#285c9a">(1;0,5)</text>
<circle cx="375" cy="312" r="4.5" fill="#285c9a"/><text x="382" y="303" font-size="14" fill="#285c9a">(2;0,25)</text>
<text x="245" y="360" font-size="16" text-anchor="middle" fill="#285c9a">TXĐ: ℝ · Giá trị: (0; +∞)</text>
<text x="717" y="87" text-anchor="middle" font-size="19" font-weight="700" fill="#ac483b">y = log₍₁∕₂₎ x</text>
<line x1="528" y1="208" x2="938" y2="208" stroke="#455b72" stroke-width="2.4"/>
<line x1="535" y1="345" x2="535" y2="99" stroke="#455b72" stroke-width="2.4"/>
<text x="925" y="229" font-size="16" fill="#455b72">x</text><text x="517" y="104" font-size="16" fill="#455b72">y</text>
<polyline points="541.24,93.21 544.39,116.19 547.54,132.46 550.68,145.06 553.83,155.36 556.98,164.05 560.13,171.58 563.28,178.23 566.42,184.16 569.57,189.54 572.72,194.44 575.87,198.95 579.02,203.12 582.16,207.01 585.31,210.65 588.46,214.06 591.61,217.28 594.76,220.33 597.90,223.21 601.05,225.96 604.20,228.58 607.35,231.08 610.50,233.48 613.64,235.78 616.79,237.99 619.94,240.11 623.09,242.16 626.24,244.14 629.38,246.04 632.53,247.89 635.68,249.68 638.83,251.41 641.98,253.09 645.12,254.72 648.27,256.31 651.42,257.85 654.57,259.35 657.72,260.81 660.86,262.24 664.01,263.63 667.16,264.99 670.31,266.31 673.46,267.60 676.60,268.87 679.75,270.11 682.90,271.32 686.05,272.50 689.20,273.66 692.34,274.80 695.49,275.91 698.64,277.01 701.79,278.08 704.94,279.13 708.08,280.16 711.23,281.18 714.38,282.17 717.53,283.15 720.68,284.12 723.82,285.06 726.97,285.99 730.12,286.91 733.27,287.81 736.42,288.69 739.56,289.57 742.71,290.43 745.86,291.27 749.01,292.11 752.16,292.93 755.30,293.74 758.45,294.54 761.60,295.32 764.75,296.10 767.90,296.86 771.04,297.62 774.19,298.37 777.34,299.10 780.49,299.83 783.64,300.54 786.78,301.25 789.93,301.95 793.08,302.64 796.23,303.32 799.38,304.00 802.52,304.66 805.67,305.32 808.82,305.97 811.97,306.62 815.12,307.25 818.26,307.88 821.41,308.50 824.56,309.12 827.71,309.73 830.86,310.33 834.00,310.92 837.15,311.51 840.30,312.10 843.45,312.67 846.60,313.24 849.74,313.81 852.89,314.37 856.04,314.92 859.19,315.47 862.34,316.02 865.48,316.56 868.63,317.09 871.78,317.62 874.93,318.14 878.08,318.66 881.22,319.17 884.37,319.68 887.52,320.19 890.67,320.69 893.82,321.18 896.96,321.67 900.11,322.16 903.26,322.65 906.41,323.12 909.56,323.60 912.70,324.07 915.85,324.54 919.00,325.00" fill="none" stroke="#ac483b" stroke-width="3.5" stroke-linecap="round"/>
<circle cx="559" cy="169" r="4.5" fill="#ac483b"/><text x="567" y="159" font-size="14" fill="#ac483b">(0,5;1)</text>
<circle cx="583" cy="208" r="4.5" fill="#ac483b"/><text x="591" y="198" font-size="14" fill="#ac483b">(1;0)</text>
<circle cx="631" cy="247" r="4.5" fill="#ac483b"/><text x="639" y="237" font-size="14" fill="#ac483b">(2;-1)</text>
<circle cx="727" cy="286" r="4.5" fill="#ac483b"/><text x="735" y="276" font-size="14" fill="#ac483b">(4;-2)</text>
<text x="726" y="360" font-size="16" text-anchor="middle" fill="#ac483b">TXĐ: (0; +∞) · Giá trị: ℝ</text>
<text x="485" y="410" text-anchor="middle" font-size="16" fill="#32485f">Hàm mũ không cắt trục Ox; hàm log không cắt trục Oy</text>
</g></svg>
~~~~

---

## 21: REUSED FIG-G11-CHVI-B21-01_R00.svg
PATH: `docs/assets/images/thpt/FIG-G11-CHVI-B21-01_R00.svg`  
REF: `main`  
BLOB: `6d43f842d096b974eb70af21e6751f1ec70eea00`  

~~~~svg
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc" viewBox="0 0 800 450" width="800" height="450">
<title id="title">FIG-G11-CHVI-B21-01: Tại sao có lúc bất phương trình đảo chiều?</title><desc id="desc">Hai đồ thị cùng hệ trục: y=2^x (cơ số lớn hơn 1) tăng và y=(1/2)^x (cơ số giữa 0 với 1) giảm. Cả hai qua (0,1), đều luôn dương. Dùng tính đơn điệu để suy dấu khi so sánh các số mũ.</desc>
<rect width="800" height="450" fill="#f8fafc" rx="20"/>
<text x="400" y="38" font-size="22" font-weight="700" text-anchor="middle" fill="#172554" font-family="Arial">Tại sao có lúc bất phương trình đảo chiều?</text>
<line x1="70" y1="360" x2="720" y2="360" stroke="#334155" stroke-width="2"/>
<line x1="395" y1="372" x2="395" y2="55" stroke="#334155" stroke-width="2"/>
<text x="735" y="367" font-size="16">x</text><text x="378" y="57" font-size="16">y</text><polyline points="175.00,342.50 178.67,342.09 182.33,341.67 186.00,341.24 189.67,340.81 193.33,340.36 197.00,339.90 200.67,339.43 204.33,338.95 208.00,338.45 211.67,337.95 215.33,337.44 219.00,336.91 222.67,336.37 226.33,335.82 230.00,335.25 233.67,334.67 237.33,334.08 241.00,333.47 244.67,332.85 248.33,332.22 252.00,331.57 255.67,330.91 259.33,330.23 263.00,329.53 266.67,328.82 270.33,328.09 274.00,327.34 277.67,326.58 281.33,325.80 285.00,325.00 288.67,324.18 292.33,323.34 296.00,322.49 299.67,321.61 303.33,320.71 307.00,319.80 310.67,318.86 314.33,317.89 318.00,316.91 321.67,315.90 325.33,314.87 329.00,313.82 332.67,312.74 336.33,311.63 340.00,310.50 343.67,309.35 347.33,308.16 351.00,306.95 354.67,305.71 358.33,304.44 362.00,303.14 365.67,301.81 369.33,300.45 373.00,299.06 376.67,297.64 380.33,296.18 384.00,294.69 387.67,293.16 391.33,291.60 395.00,290.00 398.67,288.36 402.33,286.69 406.00,284.98 409.67,283.22 413.33,281.43 417.00,279.59 420.67,277.71 424.33,275.79 428.00,273.82 431.67,271.81 435.33,269.74 439.00,267.63 442.67,265.48 446.33,263.27 450.00,261.01 453.67,258.69 457.33,256.32 461.00,253.90 464.67,251.42 468.33,248.88 472.00,246.28 475.67,243.63 479.33,240.91 483.00,238.12 486.67,235.27 490.33,232.36 494.00,229.38 497.67,226.32 501.33,223.20 505.00,220.00 508.67,216.73 512.33,213.38 516.00,209.95 519.67,206.44 523.33,202.86 527.00,199.18 530.67,195.42 534.33,191.58 538.00,187.64 541.67,183.61 545.33,179.49 549.00,175.27 552.67,170.95 556.33,166.53 560.00,162.01 563.67,157.38 567.33,152.65 571.00,147.80 574.67,142.84 578.33,137.76 582.00,132.57 585.67,127.25 589.33,121.81 593.00,116.25 596.67,110.55 600.33,104.72 604.00,98.75 607.67,92.64 611.33,86.40 615.00,80.00" fill="none" stroke="#2563eb" stroke-width="3.5"/>
<polyline points="175.00,80.00 178.67,86.40 182.33,92.64 186.00,98.75 189.67,104.72 193.33,110.55 197.00,116.25 200.67,121.81 204.33,127.25 208.00,132.57 211.67,137.76 215.33,142.84 219.00,147.80 222.67,152.65 226.33,157.38 230.00,162.01 233.67,166.53 237.33,170.95 241.00,175.27 244.67,179.49 248.33,183.61 252.00,187.64 255.67,191.58 259.33,195.42 263.00,199.18 266.67,202.86 270.33,206.44 274.00,209.95 277.67,213.38 281.33,216.73 285.00,220.00 288.67,223.20 292.33,226.32 296.00,229.38 299.67,232.36 303.33,235.27 307.00,238.12 310.67,240.91 314.33,243.63 318.00,246.28 321.67,248.88 325.33,251.42 329.00,253.90 332.67,256.32 336.33,258.69 340.00,261.01 343.67,263.27 347.33,265.48 351.00,267.63 354.67,269.74 358.33,271.81 362.00,273.82 365.67,275.79 369.33,277.71 373.00,279.59 376.67,281.43 380.33,283.22 384.00,284.98 387.67,286.69 391.33,288.36 395.00,290.00 398.67,291.60 402.33,293.16 406.00,294.69 409.67,296.18 413.33,297.64 417.00,299.06 420.67,300.45 424.33,301.81 428.00,303.14 431.67,304.44 435.33,305.71 439.00,306.95 442.67,308.16 446.33,309.35 450.00,310.50 453.67,311.63 457.33,312.74 461.00,313.82 464.67,314.87 468.33,315.90 472.00,316.91 475.67,317.89 479.33,318.86 483.00,319.80 486.67,320.71 490.33,321.61 494.00,322.49 497.67,323.34 501.33,324.18 505.00,325.00 508.67,325.80 512.33,326.58 516.00,327.34 519.67,328.09 523.33,328.82 527.00,329.53 530.67,330.23 534.33,330.91 538.00,331.57 541.67,332.22 545.33,332.85 549.00,333.47 552.67,334.08 556.33,334.67 560.00,335.25 563.67,335.82 567.33,336.37 571.00,336.91 574.67,337.44 578.33,337.95 582.00,338.45 585.67,338.95 589.33,339.43 593.00,339.90 596.67,340.36 600.33,340.81 604.00,341.24 607.67,341.67 611.33,342.09 615.00,342.50" fill="none" stroke="#dc2626" stroke-width="3.5"/>
<circle cx="395" cy="290" r="6" fill="#0f172a"/>
<text x="410" y="286" font-size="16" fill="#0f172a">(0,1)</text>
<text x="122" y="110" font-size="16" fill="#dc2626">y=(1/2)^x · GIẢM</text>
<text x="518" y="110" font-size="16" fill="#2563eb">y=2^x · TĂNG</text>
<text x="205" y="399" font-size="14" fill="#334155">Cơ số a&lt;1: so sánh số mũ phải đảo chiều.</text><text x="400" y="429" font-size="13" text-anchor="middle" fill="#475569" font-family="Arial">Đọc nhãn, điều kiện và phần hướng dẫn cạnh hình trước khi kết luận.</text></svg>
~~~~

---

## 21: NEW G11_B21_EXP_LOG_THRESHOLD_AUTHORING_20261123.svg
PATH: `docs/assets/images/thpt/G11_B21_EXP_LOG_THRESHOLD_AUTHORING_20261123.svg`  
REF: `authoring/sgk-g11-b21-knowledge-only-20261123`  
BLOB: `f2c7fdfbb16c79d43ceb36b9c8df35ddb042e3cb`  

~~~~svg
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="t d" width="1000" height="430" viewBox="0 0 1000 430">
<title id="t">Giải bất phương trình mũ và lôgarit bằng vị trí đồ thị so với đường ngang</title>
<desc id="d">Khung trái đồ thị y=2 mũ x tăng, cắt y=4 tại x=2, phần y lớn hơn 4 tương ứng x lớn hơn 2. Khung phải đồ thị y=log cơ số 2 của x tăng trên x dương, cắt y=2 tại x=4, phần y lớn hơn 2 tương ứng x lớn hơn 4. Các ngưỡng chỉ minh họa cơ số 2 lớn hơn 1.</desc>
<rect width="1000" height="430" rx="20" fill="#fff"/>
<text x="500" y="34" font-family="Arial,sans-serif" font-size="22" font-weight="700" text-anchor="middle" fill="#193954">Đọc ngưỡng: khi nào đường cong nằm phía trên đường ngang?</text>
<g font-family="Arial,sans-serif" fill="#263c57" font-size="17">
<rect x="18" y="54" width="469" height="317" rx="14" fill="#f4f9fd" stroke="#d6e3ed"/>
<text x="253" y="83" text-anchor="middle" font-size="19" font-weight="700" fill="#235d96">2ˣ &gt; 4</text>
<line x1="72" y1="310" x2="470" y2="310" stroke="#526579" stroke-width="2.2"/>
<line x1="172" y1="337" x2="172" y2="100" stroke="#526579" stroke-width="2.2"/>
<text x="473" y="321">x</text><text x="154" y="107">y</text>
<line x1="82" y1="214" x2="462" y2="214" stroke="#c14f3b" stroke-width="2.5" stroke-dasharray="8 6"/>
<text x="90" y="204" fill="#a23e2e">y = 4</text>
<polyline points="91.00,298.00 94.24,297.66 97.48,297.32 100.72,296.96 103.96,296.59 107.20,296.22 110.44,295.83 113.68,295.43 116.92,295.02 120.16,294.60 123.40,294.17 126.64,293.72 129.88,293.26 133.12,292.79 136.36,292.31 139.60,291.81 142.84,291.30 146.08,290.77 149.32,290.23 152.56,289.68 155.80,289.11 159.04,288.52 162.28,287.92 165.52,287.29 168.76,286.66 172.00,286.00 175.24,285.33 178.48,284.63 181.72,283.92 184.96,283.19 188.20,282.43 191.44,281.66 194.68,280.86 197.92,280.04 201.16,279.20 204.40,278.33 207.64,277.44 210.88,276.53 214.12,275.59 217.36,274.62 220.60,273.62 223.84,272.60 227.08,271.55 230.32,270.47 233.56,269.36 236.80,268.21 240.04,267.04 243.28,265.83 246.52,264.59 249.76,263.31 253.00,262.00 256.24,260.65 259.48,259.26 262.72,257.84 265.96,256.37 269.20,254.86 272.44,253.31 275.68,251.72 278.92,250.08 282.16,248.40 285.40,246.66 288.64,244.88 291.88,243.05 295.12,241.17 298.36,239.24 301.60,237.25 304.84,235.20 308.08,233.10 311.32,230.94 314.56,228.71 317.80,226.43 321.04,224.08 324.28,221.66 327.52,219.18 330.76,216.63 334.00,214.00 337.24,211.30 340.48,208.53 343.72,205.67 346.96,202.74 350.20,199.72 353.44,196.62 356.68,193.44 359.92,190.16 363.16,186.79 366.40,183.33 369.64,179.77 372.88,176.10 376.12,172.34 379.36,168.47 382.60,164.49 385.84,160.40 389.08,156.19 392.32,151.87 395.56,147.42 398.80,142.85 402.04,138.16 405.28,133.32 408.52,128.36 411.76,123.25 415.00,118.00" fill="none" stroke="#236ea8" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>
<circle cx="334" cy="214" r="7" fill="#23795d" stroke="#fff" stroke-width="2"/>
<line x1="334" y1="214" x2="334" y2="310" stroke="#23795d" stroke-width="2" stroke-dasharray="5 5"/>
<text x="327" y="332">2</text><text x="345" y="202" fill="#23795d">giao điểm (2;4)</text>
<text x="232" y="361" text-anchor="middle" font-size="16" fill="#235d96">Phía trên ngưỡng: x &gt; 2</text>

<rect x="504" y="54" width="477" height="317" rx="14" fill="#fdf8f5" stroke="#eadbd5"/>
<text x="743" y="83" text-anchor="middle" font-size="19" font-weight="700" fill="#a74636">log₂ x &gt; 2</text>
<line x1="540" y1="285" x2="971" y2="285" stroke="#526579" stroke-width="2.2"/>
<line x1="545" y1="355" x2="545" y2="99" stroke="#526579" stroke-width="2.2"/>
<text x="974" y="297">x</text><text x="528" y="102">y</text>
<line x1="548" y1="217" x2="964" y2="217" stroke="#c14f3b" stroke-width="2.5" stroke-dasharray="8 6"/>
<text x="556" y="205" fill="#a23e2e">y = 2</text>
<polyline points="557.75,353.00 560.01,345.01 562.26,338.14 564.52,332.12 566.77,326.75 569.03,321.91 571.28,317.51 573.54,313.47 575.80,309.74 578.05,306.28 580.31,303.04 582.56,300.00 584.82,297.14 587.08,294.44 589.33,291.87 591.59,289.44 593.84,287.12 596.10,284.91 598.35,282.79 600.61,280.76 602.87,278.81 605.12,276.93 607.38,275.12 609.63,273.38 611.89,271.70 614.14,270.07 616.40,268.50 618.66,266.97 620.91,265.49 623.17,264.05 625.42,262.66 627.68,261.30 629.93,259.98 632.19,258.70 634.45,257.44 636.70,256.22 638.96,255.03 641.21,253.86 643.47,252.73 645.73,251.62 647.98,250.53 650.24,249.47 652.49,248.43 654.75,247.41 657.00,246.41 659.26,245.43 661.52,244.47 663.77,243.53 666.03,242.61 668.28,241.70 670.54,240.81 672.79,239.94 675.05,239.08 677.31,238.24 679.56,237.41 681.82,236.59 684.07,235.79 686.33,235.00 688.58,234.23 690.84,233.46 693.10,232.71 695.35,231.97 697.61,231.24 699.86,230.52 702.12,229.81 704.38,229.11 706.63,228.42 708.89,227.74 711.14,227.07 713.40,226.41 715.65,225.75 717.91,225.11 720.17,224.47 722.42,223.85 724.68,223.23 726.93,222.62 729.19,222.01 731.44,221.41 733.70,220.82 735.96,220.24 738.21,219.67 740.47,219.10 742.72,218.53 744.98,217.98 747.23,217.43 749.49,216.88 751.75,216.34 754.00,215.81 756.26,215.29 758.51,214.76 760.77,214.25 763.02,213.74 765.28,213.23 767.54,212.73 769.79,212.24 772.05,211.75 774.30,211.26 776.56,210.78 778.82,210.31 781.07,209.84 783.33,209.37 785.58,208.91 787.84,208.45 790.09,208.00 792.35,207.55 794.61,207.10 796.86,206.66 799.12,206.22 801.37,205.79 803.63,205.36 805.88,204.94 808.14,204.51 810.40,204.09 812.65,203.68 814.91,203.27 817.16,202.86 819.42,202.45 821.67,202.05 823.93,201.65 826.19,201.26 828.44,200.87 830.70,200.48 832.95,200.09 835.21,199.71 837.47,199.33 839.72,198.95 841.98,198.58 844.23,198.21 846.49,197.84 848.74,197.47 851.00,197.11" fill="none" stroke="#236ea8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="749" cy="217" r="7" fill="#23795d" stroke="#fff" stroke-width="2"/>
<line x1="749" y1="217" x2="749" y2="285" stroke="#23795d" stroke-width="2" stroke-dasharray="5 5"/>
<text x="744" y="305">4</text><text x="765" y="205" fill="#23795d">giao điểm (4;2)</text>
<text x="742" y="361" text-anchor="middle" font-size="16" fill="#a74636">Phía trên ngưỡng: x &gt; 4</text>
<text x="500" y="408" text-anchor="middle" font-size="16">Cả hai hàm cơ số 2 đều đồng biến; cơ số giữa 0 và 1 sẽ đảo chiều</text>
</g></svg>
~~~~

---

END_OF_PACKET
