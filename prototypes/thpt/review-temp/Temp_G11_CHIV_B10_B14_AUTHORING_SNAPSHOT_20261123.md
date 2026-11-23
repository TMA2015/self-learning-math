# TEMP REVIEW PACKET — Toán 11 KNTT Chương IV, Bài 10–14

PACKET_ID: `G11_CHIV_B10_B14_AUTHORING_SELFQA_TO_INDEPENDENT_REVIEW_20261123`  
STATUS: `CANDIDATE_REVIEW_PENDING` — **NOT CONTENT_READY, NOT NOTEBOOKLM PASS, NOT RELEASE**  
ROLE: AUTHORING; SGK Chapter IV knowledge learner only; no assessment/rubric changes.  
STANDARD_ID: `SLM-THPT-QUALITY-ONE`  
STANDARD_VERSION: `3.2.0` (unified Q01–Q18 on GitHub main)  
PERMANENT_SOURCES_VERSION_REQUIRED: `v2.1`, **exactly five** NotebookLM THPT Permanent Sources; do not select v2.0, a sixth permanent source, or an obsolete Master Plan.  
SGK_AUTHORITY: SGK Kết nối tri thức với cuộc sống, Toán 11 tập một, **trang in 70–99** (see per-lesson ranges). Verify printed pages against actual S1 PDF with offset; the author has NOT independently verified every printed page visually.  

## Phạm vi chính xác

Đây là **một file Markdown review** chứa **nguyên văn năm source learner** lấy từ đúng branch PR, khóa bằng SHA. Không phải năm source canonical mới và không thay đổi source. Chỉ tài liệu để NotebookLM phản biện; sau review phải sửa canonical tương ứng trên chính branch PR (nếu có delta).

| Bài | Tên SGK | Trang in SGK (cần visual verification) | PR Draft | HEAD commit | Blob học liệu | Khám phá ↔ SGK |
|---|---|---|---|---|---|---|
| B10 | Đường thẳng và mặt phẳng trong không gian | 70–77 | #1034 | `91c4437d1967cc873462199307251529ba9afe09` | `acd275e1b755cdca8e50bd82361f9941990e571c` | 4↔4 |
| B11 | Hai đường thẳng song song | 78–83 | #1035 | `a5508bbdae50d8c5a845741b82c963941c9563e0` | `1499b13b0a0f07849bde558223ef2d03e6142bfe` | 2↔2 |
| B12 | Đường thẳng và mặt phẳng song song | 84–87 | #1036 | `cf06012f1489add2e7d948883f1664b633cac2c8` | `a022abc6764f00461f327257082d432f01bc8897` | 2↔2 |
| B13 | Hai mặt phẳng song song | 88–94 | #1037 | `735b44d1d0e2d95027c0b6a1af8d158f15b1b617` | `d688233ca1fc78bed537b91e898e05e1d12dec78` | 4↔4 |
| B14 | Phép chiếu song song | 95–99 | #1038 | `405545b5d18b54b71f252f71291f941f5ede7b6e` | `5b829b3dd533852d7c88358c1a430d716a941d93` | 3↔3 |

## Review request (review độc lập trên S1, không cấp quyền RELEASE)

1. Đọc SGK/SBT KNTT nguồn S1 của từng bài, **kiểm mục và thuật ngữ từng trang in**, tất cả định nghĩa, tính chất, định lí, công thức, điều kiện; báo `SOURCE_RECEIPT` với trang/fig source thực tế. Không suy diễn nguồn từ file tác giả; nếu thiếu file SGK, trả `INSUFFICIENT_EVIDENCE` phần ảnh/nguồn đó.
2. Theo **từng bài và từng mục SGK**, kiểm 1:1 `Khám phá` ↔ `Kiến thức SGK`: Khám phá giải thích bản chất trước công thức, dẫn dắt dễ học; tab SGK như sổ tay nhưng đọc độc lập vẫn đủ nghĩa và điều kiện. Không dùng con số ví dụ/câu làm bằng chứng duy nhất về độ sâu.
3. Theo **từng phát biểu**, kiểm nhãn đọc được / class / nền 3+1 (`FORMAL_DEFINITION`, `FORMAL_RULE`, `MANDATORY_RECAP` nếu thật cần, `KEY_FORMULA` không nền), đặc biệt các nhãn `Cách xác định`, `Điều kiện`, `Nhận xét suy ra` có bị nâng thành định lí/tính chất chính thức hoặc hạ cấp sai SGK không.
4. Kiểm **tất cả** phép chứng minh, dữ kiện hình học 3D, đường–mặt/mặt–mặt, hai/ba đường giao tuyến, Thalès không gian, tứ diện/lăng trụ, phép chiếu song song và **trường hợp suy biến**. Kiểm hình thật và ALT/figcaption của SVG qua screenshot browser thực tế; source text không chứng minh visual SVG PASS.
5. Kiểm bài học đọc đủ bốn tab, 8 Ví dụ mỗi bài theo `Đề bài–Phân tích–Lời giải–Kiểm lại`, Vận dụng tự mở Đối chiếu, D6; xác định **P0/P1/P2** có `LESSON_ID`, đoạn trích ngắn, lỗi và `MINIMAL_DELTA`; không cấp `ACADEMIC/PED PASS` theo thống kê tự kiểm của tác giả.
6. Trả **verdict riêng mỗi bài** (`ACADEMIC_OVERALL`, `PED_OVERALL`, `SOURCE_RECEIPT`, `OUTCOME_MATRIX` nếu đối chiếu đủ outcomes), ghi `NOT_REVIEWED` với phần chưa xem. `ITEM_REGISTER: NOT_IN_SCOPE_FOR_THIS_PACK` vì không có source ngân hàng question/key/rubric/RD1, tuyệt đối không suy `SGK_CHAPTER_READINESS` hay Q15/Q16 PASS từ knowledge-only packet.

## Ma trận nhãn khung hiện tại cần phản biện theo SGK

### Bài 10: Đường thẳng và mặt phẳng trong không gian
- Mục Khám phá: 1.1. Khái niệm mở đầu / 1.2. Các tính chất thừa nhận / 1.3. Cách xác định một mặt phẳng / 1.4. Hình chóp và hình tứ diện
- Mục Kiến thức SGK: 2.1. Khái niệm mở đầu / 2.2. Các tính chất thừa nhận / 2.3. Cách xác định một mặt phẳng / 2.4. Hình chóp và hình tứ diện
- FORMAL_DEFINITION: Khái niệm — Mặt phẳng, điểm thuộc mặt phẳng
- FORMAL_RULE: Tính chất thừa nhận — Đủ sáu phát biểu của SGK
- FORMAL_RULE: Cách xác định — Ba cách của SGK
- FORMAL_DEFINITION: Định nghĩa — Hình chóp
- FORMAL_DEFINITION: Định nghĩa — Hình tứ diện và tứ diện đều

### Bài 11: Hai đường thẳng song song
- Mục Khám phá: 1.1. Vị trí tương đối của hai đường thẳng / 1.2. Tính chất của hai đường thẳng song song
- Mục Kiến thức SGK: 2.1. Vị trí tương đối của hai đường thẳng / 2.2. Tính chất của hai đường thẳng song song
- FORMAL_DEFINITION: Khái niệm — Đồng phẳng, chéo nhau và song song
- FORMAL_RULE: Tính chất — Đường thẳng song song qua điểm
- FORMAL_RULE: Tính chất — Hai đường song song với đường thứ ba
- FORMAL_RULE: Định lí — Ba đường giao tuyến

### Bài 12: Đường thẳng và mặt phẳng song song
- Mục Khám phá: 1.1. Đường thẳng song song với mặt phẳng / 1.2. Điều kiện và tính chất của đường thẳng song song với mặt phẳng
- Mục Kiến thức SGK: 2.1. Đường thẳng song song với mặt phẳng / 2.2. Điều kiện và tính chất của đường thẳng song song với mặt phẳng
- FORMAL_DEFINITION: Khái niệm — Ba vị trí của đường thẳng và mặt phẳng
- FORMAL_DEFINITION: Định nghĩa — Đường thẳng song song với mặt phẳng
- FORMAL_RULE: Điều kiện — Dấu hiệu đường thẳng song song với mặt phẳng
- FORMAL_RULE: Tính chất — Giao tuyến của mặt phẳng chứa đường song song mặt phẳng khác

### Bài 13: Hai mặt phẳng song song
- Mục Khám phá: 1.1. Hai mặt phẳng song song / 1.2. Điều kiện và tính chất của hai mặt phẳng song song / 1.3. Định lí Thalès trong không gian / 1.4. Hình lăng trụ và hình hộp
- Mục Kiến thức SGK: 2.1. Hai mặt phẳng song song / 2.2. Điều kiện và tính chất của hai mặt phẳng song song / 2.3. Định lí Thalès trong không gian / 2.4. Hình lăng trụ và hình hộp
- FORMAL_DEFINITION: Định nghĩa — Hai mặt phẳng song song
- FORMAL_RULE: Điều kiện — Dấu hiệu hai mặt phẳng song song
- FORMAL_RULE: Tính chất — Mặt phẳng song song duy nhất qua điểm ngoài mặt
- FORMAL_RULE: Tính chất — Giao tuyến với mặt phẳng thứ ba
- FORMAL_RULE: Định lí — Thalès trong không gian
- KEY_FORMULA: Công thức — Tỉ số các đoạn tương ứng
- FORMAL_DEFINITION: Định nghĩa — Hình lăng trụ
- FORMAL_RULE: Tính chất — Hình lăng trụ
- FORMAL_DEFINITION: Định nghĩa — Hình hộp

### Bài 14: Phép chiếu song song
- Mục Khám phá: 1.1. Phép chiếu song song / 1.2. Tính chất của phép chiếu song song / 1.3. Hình biểu diễn của một hình không gian
- Mục Kiến thức SGK: 2.1. Phép chiếu song song / 2.2. Tính chất của phép chiếu song song / 2.3. Hình biểu diễn của một hình không gian
- FORMAL_DEFINITION: Định nghĩa — Phép chiếu song song
- FORMAL_DEFINITION: Khái niệm — Hình chiếu của một hình
- FORMAL_RULE: Tính chất — Ba nhóm tính chất SGK của phép chiếu song song
- KEY_FORMULA: Công thức — Tỉ số đoạn thẳng tương ứng
- FORMAL_DEFINITION: Khái niệm — Hình biểu diễn của hình không gian
- FORMAL_RULE: Tính chất — Hình biểu diễn của các hình phẳng không suy biến

## CẢNH BÁO BIÊN GIỚI

- Tình trạng: 5 Draft PR vẫn OPEN/UNMERGED tại thời điểm tạo packet, **không có nghĩa 5 bài hay chương đã CONTENT_READY**.
- Các nguồn learner dưới đây chứa đề/đối chiếu công khai dùng cho tự học; **không phải đề Readiness/RD1 kín**. Không dùng câu tự xem đáp án làm evidence Mastery hay Independent Readiness.
- Không kiểm website production, computed CSS, MathJax renderer, browser responsiveness từ Markdown; RELEASE làm AP1–AP5/R1–R5 sau khi nhận nguồn hợp lệ và chủ dự án cho phép.
- `SOURCE_VISUAL_S1=NOT_VERIFIED_ALL_PRINTED_PAGES`. Nếu các bản chép SGKVN sai khác bản in, S1 SGK gốc có quyền cao hơn; báo lỗi, không tự chọn một trong hai mà không chứng cứ.

---

# NGUYÊN VĂN NĂM SOURCE LEARNER — SNAPSHOT THEO SHA

## LESSON B10 — Đường thẳng và mặt phẳng trong không gian
CANONICAL_PATH: `docs/thpt-preview/sgk/lop-11/chuong-iv/bai-10.md`  
SOURCE_HEAD: `91c4437d1967cc873462199307251529ba9afe09`  
SOURCE_BLOB: `acd275e1b755cdca8e50bd82361f9941990e571c`  
REVIEW_TARGET: Chapter IV Lesson 10, source Markdown **verbatim** below. Do not treat it as a second canonical copy.

~~~~markdown
# Bài 10. Đường thẳng và mặt phẳng trong không gian

<style>
/* B10-only Golden semantic 3+1; không đổi CSS/JS chung */
.md-typeset:has([data-g11-b10-authoring]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#e8f7f2;border-color:#a9dccc;border-left-color:#087d69;color:#174137}
.md-typeset:has([data-g11-b10-authoring]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#eaf1fc;border-color:#a5bee5;border-left-color:#4879c2;color:#193d66}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b10-authoring]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b10-authoring]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}
</style>

<div class="thpt-r4-screen" data-thpt-r4 data-g11-b10-authoring>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG IV · KẾT NỐI TRI THỨC</p>
<p class="thpt-r4-lead">Đọc hình không gian, nhận biết quan hệ điểm–đường–mặt, xác định mặt phẳng và phân biệt hình chóp với tứ diện.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương IV</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    Nhìn bản vẽ ngôi nhà trên giấy, em thấy mặt tường, mép cửa, các cạnh khuất. Nhưng hình vẽ chỉ là **hình biểu diễn**: hình bình hành dùng để vẽ mặt phẳng không phải toàn bộ mặt phẳng vô hạn; hai nét có vẻ gặp nhau chưa chứng minh hai đường không gian cắt nhau. Để giải bài, ta cần biết chính xác điểm nào thuộc đường, đường nào nằm trong mặt, rồi dựa vào tính chất toán học thay vì cảm giác trên hình.

    ### 1.1. Khái niệm mở đầu

    Mặt bảng, màn hình, mặt nước phẳng lặng gợi hình ảnh **một phần của mặt phẳng**. Mặt phẳng toán học không có bề dày và không có giới hạn. Ta thường vẽ một hình bình hành và ghi kí hiệu \((P)\), \((\alpha)\); một điểm \(A\) nằm trên mặt phẳng được viết \(A\in(P)\), điểm \(C\) ở ngoài được viết \(C\notin(P)\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B10_PLANE_MEMBERSHIP_AUTHORING_20261123.svg" alt="Mặt phẳng P có hai điểm A, B và đường thẳng AB; C ở ngoài mặt phẳng"><figcaption><strong>Hướng dẫn đọc:</strong> \(A,B\) thuộc \((P)\), \(AB\subset(P)\), còn \(C\notin(P)\). Hình bình hành chỉ biểu diễn một phần mặt phẳng; điểm ở ngoài vùng vẽ không đồng nghĩa ở ngoài mặt phẳng.</figcaption></figure>

    Một đường thẳng nằm trong mặt phẳng khi **mọi điểm của nó** thuộc mặt phẳng; kí hiệu \(d\subset(P)\). Khi biểu diễn không gian, đường nhìn thấy dùng nét liền, đường bị che khuất dùng nét đứt. Nét đứt không chứng minh hai đường giao nhau hay chéo nhau. Các kí hiệu thuộc và chứa nói về **đối tượng thực**, không nói về vị trí nét vẽ.

    **Vận dụng.** Nếu \(A,B\in(P)\), \(A\ne B\), điểm \(M\in AB\) và \(C\notin(P)\), hãy dự đoán \(M\) có thuộc \((P)\) không. Có thể có \(C\in AB\) không?

    ??? question "Đối chiếu"

        **Lời giải:** Theo tính chất hai điểm của một đường thẳng cùng thuộc mặt phẳng, toàn bộ \(AB\subset(P)\); vậy \(M\in(P)\). Nếu \(C\in AB\) thì \(C\in(P)\), mâu thuẫn với giả thiết. Do đó \(C\notin AB\).

    ??? tip "Kiểm lỗi"

        Đừng suy từ việc \(M\) được vẽ bên trong hay bên ngoài hình bình hành. Hãy tìm **quan hệ thuộc** đã cho và tính chất cần dùng.

    ### 1.2. Các tính chất thừa nhận

    Qua hai điểm phân biệt chỉ có một đường thẳng; qua ba điểm **không thẳng hàng** chỉ có một mặt phẳng. Điều đó giải thích vì sao một giá ba chân có thể đặt ổn định lên mặt bàn, còn một đường thẳng đi qua ba điểm thẳng hàng vẫn có thể nằm trong vô số mặt phẳng khác nhau. SGK còn thừa nhận có thể chọn bốn điểm không đồng phẳng: không gian không chỉ là một mặt phẳng duy nhất.

    Ta cần ghi nhớ **sáu tính chất thừa nhận**, với đúng điều kiện của chúng: (1) duy nhất đường thẳng qua hai điểm phân biệt; (2) duy nhất mặt phẳng qua ba điểm không thẳng hàng; (3) tồn tại bốn điểm không đồng phẳng; (4) nếu một đường có hai điểm phân biệt thuộc mặt thì cả đường thuộc mặt; (5) hai mặt phẳng phân biệt có điểm chung thì giao nhau theo đường thẳng đi qua điểm chung; (6) trong mỗi mặt phẳng, những kết quả của hình học phẳng vẫn đúng.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-B10-01_R01.svg" alt="Hai mặt phẳng SAB và SAC trong tứ diện có giao tuyến là đường thẳng SA"><figcaption><strong>Hướng dẫn đọc:</strong> \((SAB)\) và \((SAC)\) có hai điểm chung phân biệt \(S,A\), nên giao tuyến là **đường thẳng \(SA\)**. Nét đứt trong hình chỉ cạnh khuất.</figcaption></figure>

    Đặc biệt, chỉ biết hai mặt phẳng **phân biệt** cùng qua điểm \(S\) mới biết chúng có một đường giao đi qua \(S\), chứ **chưa biết chính xác đường nào**. Để xác định giao tuyến, ta tìm **hai điểm chung phân biệt**. Ví dụ trong tứ diện \(S.ABC\), trung điểm \(M\in AB\), \(N\in AC\), hai trung tuyến \(BN,CM\) của tam giác \(ABC\) cắt tại trọng tâm \(G\). Vì các kết quả hình học phẳng đúng trong mặt \((ABC)\), \(G\) nằm trong cả \((SBN)\) và \((SCM)\), vậy hai mặt có giao tuyến \(SG\).

    **Vận dụng.** Cho \(S\notin(ABC)\), \(M,N\) lần lượt là trung điểm \(AB,AC\), \(G=BN\cap CM\). Hãy chứng minh \((SBN)\cap(SCM)=SG\).

    ??? question "Đối chiếu"

        **Lời giải:** \(G\in BN\subset(SBN)\), \(G\in CM\subset(SCM)\), trong khi \(S\) thuộc cả hai. Vì \(S\notin(ABC)\), \(G\in(ABC)\), hai điểm phân biệt. Hai mặt phẳng cũng phân biệt, nên giao tuyến là \(SG\).

    ??? tip "Kiểm lỗi"

        Phải nêu **vì sao \(G\) là điểm chung thứ hai**; không được nhìn hai trung tuyến vẽ cắt nhau rồi bỏ qua lập luận thuộc mặt phẳng.

    ### 1.3. Cách xác định một mặt phẳng

    Ta đã biết cách thứ nhất: **ba điểm không thẳng hàng** \(A,B,C\) xác định \((ABC)\). Cách thứ hai: biết một đường \(d\) và điểm \(A\notin d\). Lấy hai điểm phân biệt \(B,C\in d\), ba điểm \(A,B,C\) không thẳng hàng nên có một mặt phẳng duy nhất chứa cả \(A\) và \(d\), kí hiệu \(\operatorname{mp}(A,d)\).

    Cách thứ ba là biết **hai đường cắt nhau** \(a,b\). Gọi \(M=a\cap b\), lấy \(A\in a\setminus\{M\}\), \(B\in b\setminus\{M\}\), ba điểm \(A,M,B\) không thẳng hàng; do đó xác định được \(\operatorname{mp}(a,b)\). Nếu \(A\in d\), mặt phẳng qua \(A\) và \(d\) **không còn duy nhất**; hai đường chéo nhau **không cùng mặt phẳng**. Đây là các điều kiện không thể bỏ.

    Để tìm giao tuyến hai mặt, ta thường đi tìm **hai điểm chung**. Cho \(a,b\) cắt nhau tại \(M\), và \(S\notin\operatorname{mp}(a,b)\). Mặt phẳng \(\operatorname{mp}(S,a)\) và \(\operatorname{mp}(S,b)\) đều chứa \(M,S\). Chúng phân biệt nên giao tuyến là \(SM\). Không được kết luận như vậy nếu điểm \(S\) nằm trên một trong hai đường, vì khi ấy chính mặt phẳng \(\operatorname{mp}(S,a)\) hoặc \(\operatorname{mp}(S,b)\) không còn xác định duy nhất theo điểm–đường.

    **Vận dụng.** Xét ba dữ kiện: \(A,B,C\) không thẳng hàng; điểm \(A\notin d\) cùng đường \(d\); hai đường \(a,b\) cắt nhau. Vì sao cả ba đều xác định duy nhất một mặt phẳng?

    ??? question "Đối chiếu"

        **Lời giải:** Trường hợp đầu dùng tính chất thừa nhận số 2. Với \(A\notin d\), chọn \(B,C\in d\) phân biệt thì \(A,B,C\) không thẳng hàng. Với \(a,b\) cắt tại \(M\), chọn \(A\in a\setminus\{M\}, B\in b\setminus\{M\}\); ba điểm \(A,M,B\) không thẳng hàng. Hai trường hợp sau quy về trường hợp đầu.

    ??? tip "Kiểm lỗi"

        Không ghi “điểm và đường xác định mặt phẳng” mà quên **điểm nằm ngoài đường**; không ghi “hai đường xác định mặt phẳng” mà quên **hai đường cắt nhau**.

    ### 1.4. Hình chóp và hình tứ diện

    Đặt một điểm \(S\) **ở ngoài mặt phẳng** của đa giác lồi \(A_1A_2\ldots A_n\), nối \(S\) với từng đỉnh đáy. Ta được hình chóp gồm mặt đáy và các mặt bên tam giác. Hình chóp tứ giác \(S.ABCD\) có đỉnh \(S\), đáy \(ABCD\), các mặt bên \(SAB,SBC,SCD,SDA\), bốn cạnh bên \(SA,SB,SC,SD\) và bốn cạnh đáy.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B10_QUADRILATERAL_PYRAMID_AUTHORING_20261123.svg" alt="Hình chóp tứ giác S.ABCD với mặt đáy ABCD và các mặt bên"><figcaption><strong>Hướng dẫn đọc:</strong> \(S\) là đỉnh chóp, \(ABCD\) là đáy. Chóp có 5 đỉnh, 8 cạnh, 5 mặt; các cạnh khuất vẽ nét đứt vẫn được đếm.</figcaption></figure>

    Nếu đáy là **tam giác**, hình chóp là một **tứ diện**. Cho bốn điểm \(A,B,C,D\) không đồng phẳng, tứ diện \(ABCD\) gồm bốn mặt tam giác \(ABC,ABD,ACD,BCD\). Nó có 4 đỉnh, 6 cạnh, 4 mặt; cạnh \(AB\) và \(CD\) là một cặp cạnh **đối diện** vì không chung đỉnh. Tứ diện có cả bốn mặt đều là **tam giác đều** gọi là tứ diện đều. Một tứ diện bất kì không nhất thiết đều. Mỗi đỉnh còn có **mặt đối diện** là mặt tam giác không chứa đỉnh ấy: chẳng hạn đỉnh \(A\) đối diện mặt \(BCD\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-B10-01_R01.svg" alt="Tứ diện S.ABC với bốn mặt tam giác"><figcaption><strong>Hướng dẫn đọc:</strong> tứ diện \(S.ABC\) có thể chọn \(ABC\) làm đáy hoặc chọn bất kì mặt tam giác khác làm đáy. Đây là nhận xét của SGK, không phải phép đổi số đỉnh hay số mặt.</figcaption></figure>

    Một bài quan trọng của mục này là **tìm giao điểm đường thẳng với mặt phẳng**. Cho tứ diện \(ABCD\), \(E\) nằm trong tam giác \(BCD\), \(F\) nằm giữa \(A,E\). Tia \(BE\) cắt cạnh \(CD\) tại \(M\). Do \(E\in BM\), hai đường \(AE,BF\) cùng thuộc \((ABM)\). Mặt phẳng \((ABM)\) và \((ACD)\) cùng chứa \(A,M\), nên giao tuyến là \(AM\). Khi đó tìm \(N=BF\cap AM\); ta được \(N=BF\cap(ACD)\). Cách làm đúng dựa trên **mặt phẳng phụ chứa đường thẳng cần tìm giao**, không đoán từ hình.

    **Vận dụng.** Đếm số đỉnh, số cạnh, số mặt của hình chóp \(S.ABCD\) và tứ diện \(ABCD\). Cạnh nào đối diện với \(AB\) trong tứ diện?

    ??? question "Đối chiếu"

        **Lời giải:** Hình chóp tứ giác có 5 đỉnh, 8 cạnh, 5 mặt. Tứ diện có 4 đỉnh, 6 cạnh, 4 mặt. Cạnh đối diện \(AB\) là \(CD\), vì không chung điểm đầu mút với \(AB\).

    ??? tip "Kiểm lỗi"

        Hãy đếm các **mặt thực**, không đếm riêng số tam giác nhìn thấy. Tứ diện đều phải có đủ **bốn mặt đều là tam giác đều**, không chỉ một mặt.

=== "Kiến thức SGK"

    ### 2.1. Khái niệm mở đầu

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khái niệm — Mặt phẳng, điểm thuộc mặt phẳng</strong><p>Mặt phẳng là đối tượng hình học <strong>không có bề dày và không có giới hạn</strong>. Kí hiệu \((P)\), \((\alpha)\). Khi \(A\) thuộc \((P)\) viết \(A\in(P)\); khi \(B\) không thuộc viết \(B\notin(P)\). Khi mọi điểm trên đường \(d\) đều thuộc mặt phẳng, viết \(d\subset(P)\).</p></div>

    **Chú ý — Hình biểu diễn:** Mặt phẳng được biểu diễn bằng một hình bình hành hoặc một góc, không phải mặt phẳng chỉ có chừng ấy diện tích. Hình biểu diễn đường thẳng, đoạn thẳng vẫn là đường/đoạn; giữ quan hệ liên thuộc, song song/cắt nhau của đường; cạnh khuất vẽ nét đứt, cạnh nhìn thấy vẽ nét liền. Không suy ra kích thước/góc thật từ một hình chiếu.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B10_PLANE_MEMBERSHIP_AUTHORING_20261123.svg" alt="Kí hiệu điểm thuộc mặt và đường nằm trong mặt"><figcaption><strong>Tra hình:</strong> \(A,B\in(P)\), đường \(AB\subset(P)\) và \(C\notin(P)\); chú ý phân biệt kí hiệu **điểm thuộc** với **đường nằm trong**.</figcaption></figure>

    ### 2.2. Các tính chất thừa nhận

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất thừa nhận — Đủ sáu phát biểu của SGK</strong><p><strong>1.</strong> Có một và chỉ một đường thẳng đi qua hai điểm phân biệt.</p><p><strong>2.</strong> Có một và chỉ một mặt phẳng đi qua ba điểm không thẳng hàng.</p><p><strong>3.</strong> Tồn tại bốn điểm không cùng thuộc một mặt phẳng.</p><p><strong>4.</strong> Nếu một đường thẳng có hai điểm phân biệt thuộc một mặt phẳng thì tất cả điểm của đường thẳng đều thuộc mặt phẳng đó.</p><p><strong>5.</strong> Nếu hai mặt phẳng phân biệt có điểm chung thì các điểm chung của hai mặt phẳng là một đường thẳng đi qua điểm chung đó.</p><p><strong>6.</strong> Trên mỗi mặt phẳng, tất cả các kết quả đã biết trong hình học phẳng đều đúng.</p></div>

    **Điều kiện cần đọc kỹ:** 2 điểm phải **phân biệt** khi xác định một đường; 3 điểm **không thẳng hàng** khi xác định một mặt; 2 mặt phẳng phải **phân biệt** để nói giao tuyến của chúng. Với hai mặt phân biệt, một điểm chung cho biết có giao tuyến; muốn **xác định** đường đó, cần thêm một điểm chung phân biệt.

    **Nhận xét SGK:** Các điểm cùng thuộc một mặt phẳng gọi là **đồng phẳng**; những điểm không cùng nằm trong mặt phẳng nào là **không đồng phẳng**. Giao tuyến của hai mặt phẳng phân biệt \((P),(Q)\), nếu có, kí hiệu \(d=(P)\cap(Q)\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-B10-01_R01.svg" alt="Giao tuyến SA giữa hai mặt bên của tứ diện"><figcaption><strong>Tra hình:</strong> \(S,A\) là hai điểm chung phân biệt của \((SAB)\), \((SAC)\), nên giao tuyến là **đường thẳng \(SA\)**.</figcaption></figure>

    **Cách xác định giao tuyến:** Tìm hai điểm chung phân biệt của hai mặt phẳng phân biệt; kết luận đường thẳng đi qua chúng. Ví dụ trung tuyến \(BN,CM\) trong tam giác \(ABC\) cắt tại trọng tâm \(G\), nên \((SBN)\cap(SCM)=SG\) khi \(S\notin(ABC)\).

    ### 2.3. Cách xác định một mặt phẳng

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Cách xác định — Ba cách của SGK</strong><p><strong>1.</strong> Ba điểm \(A,B,C\) <strong>không thẳng hàng</strong> xác định mặt phẳng \((ABC)\).</p><p><strong>2.</strong> Điểm \(A\) <strong>không nằm trên</strong> đường \(d\) xác định duy nhất mặt phẳng chứa \(A,d\), kí hiệu \(\operatorname{mp}(A,d)\).</p><p><strong>3.</strong> Hai đường thẳng <strong>cắt nhau</strong> \(a,b\) xác định duy nhất mặt phẳng chứa chúng, kí hiệu \(\operatorname{mp}(a,b)\).</p></div>

    **Lập luận:** Với một điểm ngoài đường, lấy hai điểm khác nhau trên đường để được ba điểm không thẳng hàng. Với hai đường cắt nhau tại \(M\), lấy \(A,B\) lần lượt trên hai đường và khác \(M\), thì \(A,M,B\) không thẳng hàng.

    **Giới hạn áp dụng:** Điểm \(A\in d\) không cùng đường \(d\) xác định duy nhất mặt phẳng; hai đường trùng nhau hoặc chéo nhau không thỏa điều kiện **cắt nhau** của cách thứ ba. Không lẫn hình chiếu với quan hệ thật trong không gian.

    **Tìm giao điểm đường thẳng–mặt phẳng:** Chọn mặt phẳng phụ chứa đường cần tìm; dựng giao tuyến với mặt phẳng đích, sau đó tìm giao điểm hai đường **nếu tồn tại**. Trong tứ diện \(ABCD\), \(E\) nằm trong \(BCD\), \(F\) trong \(AE\), lấy \(M=BE\cap CD\), \(N=BF\cap AM\); từ \((ABM)\cap(ACD)=AM\) suy ra \(N=BF\cap(ACD)\).

    ### 2.4. Hình chóp và hình tứ diện

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Hình chóp</strong><p>Cho đa giác lồi \(A_1A_2\ldots A_n\) và điểm \(S\) <strong>ngoài mặt phẳng đáy</strong>. Hình gồm đa giác ấy và các tam giác \(SA_1A_2,\ldots,SA_nA_1\) gọi là <strong>hình chóp</strong> \(S.A_1A_2\ldots A_n\). \(S\) là đỉnh, đa giác là mặt đáy, các tam giác là mặt bên; \(SA_i\) là cạnh bên, các cạnh đa giác là cạnh đáy.</p></div>

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B10_QUADRILATERAL_PYRAMID_AUTHORING_20261123.svg" alt="Hình chóp tứ giác có đỉnh S, đáy ABCD"><figcaption><strong>Tra hình:</strong> \(S.ABCD\) có 5 đỉnh, 8 cạnh, 5 mặt. Mặt bên \(SAB,SBC,SCD,SDA\); đáy \(ABCD\).</figcaption></figure>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Hình tứ diện và tứ diện đều</strong><p>Với bốn điểm \(A,B,C,D\) <strong>không đồng phẳng</strong>, hình gồm bốn tam giác \(ABC,ABD,ACD,BCD\) gọi là <strong>tứ diện</strong> \(ABCD\): 4 đỉnh, 6 cạnh, 4 mặt. Hai cạnh không chung đỉnh gọi là <strong>cạnh đối diện</strong>; đỉnh không nằm trên một mặt tam giác được gọi là <strong>đỉnh đối diện với mặt đó</strong>. Tứ diện có <strong>bốn mặt đều là tam giác đều</strong> gọi là <strong>tứ diện đều</strong>.</p></div>

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-B10-01_R01.svg" alt="Tứ diện S.ABC gồm bốn mặt tam giác"><figcaption><strong>Tra hình:</strong> tứ diện \(S.ABC\) có thể coi bất kì mặt tam giác nào làm đáy. Cặp cạnh đối diện trong \(ABCD\): \(AB,CD\); \(AC,BD\); \(AD,BC\).</figcaption></figure>

    **Nhận xét SGK:** Tứ diện là hình chóp tam giác, có thể lấy bất kì mặt nào làm mặt đáy; không có nghĩa mọi tứ diện đều là **tứ diện đều**.

=== "Ví dụ"

    ### 3.1. Phân biệt quan hệ thuộc và nằm trong

    **Đề bài.** \(A,B\in(P)\), \(A\ne B\), \(M\in AB\), \(C\notin(P)\). Chứng minh \(M\in(P)\) và \(C\notin AB\).

    **Phân tích:** Dùng tính chất thừa nhận số 4 thay vì suy từ vị trí điểm trên hình vẽ.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.1"><p><strong>Lời giải.</strong> Hai điểm \(A,B\) phân biệt thuộc \((P)\) nên \(AB\subset(P)\); suy ra \(M\in(P)\). Nếu \(C\in AB\) thì \(C\in(P)\), trái giả thiết, nên \(C\notin AB\).</p></div>

    **Kiểm lại:** Điểm \(M\) không cần được vẽ bên trong hình bình hành biểu diễn mặt phẳng.

    ### 3.2. Vì sao ba điểm thẳng hàng không xác định mặt phẳng?

    **Đề bài.** Ba điểm phân biệt \(A,B,C\) cùng thuộc đường \(d\). Có duy nhất mặt phẳng \((ABC)\) không?

    **Phân tích:** Điều kiện trong tính chất thứ 2 là ba điểm **không thẳng hàng**.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.2"><p><strong>Lời giải.</strong> Không. Mọi mặt phẳng chứa \(d\) đều chứa \(A,B,C\); có vô số mặt phẳng như vậy. Muốn xác định duy nhất cần một điểm ngoài đường \(d\).</p></div>

    **Kiểm lại:** Với \(D\notin d\), \(A,B,D\) không thẳng hàng nên xác định duy nhất \((ABD)\).

    ### 3.3. Giao tuyến hai mặt phẳng của tứ diện

    **Đề bài.** Cho tứ diện \(S.ABC\), tìm \((SAB)\cap(SAC)\).

    **Phân tích:** Hai mặt có hai điểm chung \(S,A\), và chúng phân biệt vì bốn đỉnh không đồng phẳng.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.3"><p><strong>Lời giải.</strong> \(S,A\in(SAB)\cap(SAC)\), \(S\ne A\), \((SAB)\ne(SAC)\). Vậy giao tuyến là đường thẳng \(SA\).</p></div>

    **Kiểm lại:** Giao tuyến là **đường**, không chỉ đoạn \(SA\) thấy trong hình.

    ### 3.4. Tìm giao tuyến bằng trọng tâm

    **Đề bài.** Cho \(S\notin(ABC)\), \(M,N\) là trung điểm \(AB,AC\), \(G\) là trọng tâm tam giác \(ABC\). Tìm \((SBN)\cap(SCM)\).

    **Phân tích:** Trong mặt phẳng \(ABC\), hai trung tuyến \(BN,CM\) cắt ở \(G\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.4"><p><strong>Lời giải.</strong> \(G\in BN\subset(SBN)\) và \(G\in CM\subset(SCM)\), nên \(G\) là điểm chung thứ hai ngoài \(S\). Vì \(S\notin(ABC)\), \(G\in(ABC)\), ta có \(G\ne S\); giao tuyến là \(SG\).</p></div>

    **Kiểm lại:** Nếu chưa chứng minh \(G\) thuộc **cả hai mặt**, bài giải chưa đủ.

    ### 3.5. Ba cách xác định mặt phẳng

    **Đề bài.** Những dữ kiện nào đủ: (a) ba điểm không thẳng hàng; (b) một điểm ngoài đường và đường đó; (c) hai đường cắt nhau; (d) một điểm trên đường và đường ấy?

    **Phân tích:** Đọc đúng ba cách được SGK xác nhận, không bỏ điều kiện.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.5"><p><strong>Lời giải.</strong> (a), (b), (c) đều đủ. (d) chỉ cho một đường nên không đủ: nhiều mặt phẳng cùng chứa đường ấy.</p></div>

    **Kiểm lại:** (b), (c) đều có thể quy về ba điểm không thẳng hàng.

    ### 3.6. Giao tuyến khi hai đường cắt nhau

    **Đề bài.** Hai đường \(a,b\) cắt nhau ở \(M\), điểm \(S\notin\operatorname{mp}(a,b)\). Tìm \(\operatorname{mp}(S,a)\cap\operatorname{mp}(S,b)\).

    **Phân tích:** \(M,S\) là hai điểm chung, và điều kiện \(S\) ngoài mặt gốc bảo đảm hai mặt phân biệt.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.6"><p><strong>Lời giải.</strong> \(M\in a,b\) nên \(M\) thuộc hai mặt; \(S\) cũng thuộc cả hai. Hai mặt phân biệt và \(M\ne S\), nên giao tuyến là \(SM\).</p></div>

    **Kiểm lại:** Nếu \(S\) nằm trên \(a\) hoặc \(b\), cách gọi mặt qua điểm–đường có thể không xác định duy nhất.

    ### 3.7. Đếm đỉnh, cạnh, mặt và cạnh đối diện

    **Đề bài.** Hình chóp \(S.ABCD\) có bao nhiêu đỉnh, cạnh, mặt? Trong tứ diện \(ABCD\), cạnh đối diện với \(AB\) là cạnh nào?

    **Phân tích:** Đếm cạnh bên và cạnh đáy, không bỏ cạnh khuất; với tứ diện tìm cạnh **không chung đỉnh**.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.7"><p><strong>Lời giải.</strong> Hình chóp tứ giác có 5 đỉnh, 8 cạnh, 5 mặt; cạnh đối diện với \(AB\) trong tứ diện là \(CD\).</p></div>

    **Kiểm lại:** Tứ diện có 4 đỉnh, 6 cạnh, 4 mặt tam giác.

    ### 3.8. Giao điểm đường thẳng với mặt phẳng phụ

    **Đề bài.** Cho tứ diện \(ABCD\), \(E\) nằm trong tam giác \(BCD\), \(F\) nằm giữa \(A,E\). Hãy tìm giao của \(BF\) với mặt phẳng \((ACD)\).

    **Phân tích:** Cần mặt phẳng phụ **chứa \(BF\)**. Dùng đường \(BE\) cắt \(CD\) để dựng giao tuyến với \((ACD)\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.8"><p><strong>Lời giải.</strong> Lấy \(M=BE\cap CD\). Do \(E\in BM\) và \(F\in AE\), bốn điểm \(A,B,E,F\) thuộc \((ABM)\); suy ra \(BF\subset(ABM)\). Hai mặt \((ABM),(ACD)\) giao nhau theo \(AM\). Gọi \(N=BF\cap AM\), suy ra \(N\in BF\) và \(N\in(ACD)\); vậy \(N=BF\cap(ACD)\).</p></div>

    **Kiểm lại:** Điểm \(N\) có thể cần dựng trên **đường thẳng kéo dài**, không giới hạn ở đoạn nhìn thấy; mỗi bước phải có chứng cứ điểm thuộc mặt.

=== "Lỗi thường gặp"

    ### 4.1. Nhầm hình bình hành biểu diễn với toàn bộ mặt phẳng

    **Dấu hiệu:** Một điểm vẽ ngoài hình bình hành bị coi chắc chắn không thuộc mặt phẳng.

    **Vì sao sai:** Mặt phẳng vô hạn; hình bình hành là cách vẽ tượng trưng.

    **Cách sửa:** Dùng giả thiết và kí hiệu \(A\in(P)\), \(d\subset(P)\), không dựa vào vùng giấy đã tô.

    ### 4.2. Thiếu điều kiện phân biệt, không thẳng hàng

    **Dấu hiệu:** Ba điểm thẳng hàng được viết là xác định duy nhất \((ABC)\).

    **Vì sao sai:** Tính chất thừa nhận số 2 cần ba điểm không thẳng hàng.

    **Cách sửa:** Kiểm điều kiện trước khi gọi hoặc xác định mặt phẳng.

    ### 4.3. Chỉ có một điểm chung đã gọi tên giao tuyến

    **Dấu hiệu:** Hai mặt qua \(S\) nên tự đặt giao tuyến \(SG\), chưa chứng minh \(G\) thuộc cả hai.

    **Vì sao sai:** Một điểm chung chỉ cho biết giao tuyến **tồn tại** với hai mặt phân biệt.

    **Cách sửa:** Tìm điểm chung thứ hai phân biệt và chứng minh thuộc cả hai mặt.

    ### 4.4. Bỏ điều kiện điểm ngoài đường hoặc hai đường cắt nhau

    **Dấu hiệu:** Dùng \(\operatorname{mp}(A,d)\) khi \(A\in d\).

    **Vì sao sai:** Dữ kiện chỉ tương đương một đường, có vô số mặt phẳng chứa nó.

    **Cách sửa:** Kiểm \(A\notin d\), hoặc hai đường thật sự cắt nhau trước khi kết luận.

    ### 4.5. Đếm thiếu cạnh khuất và nhầm hình chóp tứ giác với tứ diện

    **Dấu hiệu:** Hình chóp tứ giác đếm ba mặt bên vì một mặt khuất.

    **Vì sao sai:** Cạnh/mặt khuất vẫn tồn tại; tứ diện có bốn mặt tam giác.

    **Cách sửa:** Liệt kê đầy đủ theo đỉnh, mặt đáy và mặt bên.

    ### 4.6. Đoán giao điểm chỉ từ hình phối cảnh

    **Dấu hiệu:** Thấy nét \(BF\) xuyên qua mặt tam giác rồi coi điểm xuyên nét vẽ là giao.

    **Vì sao sai:** Phép chiếu hình không đảm bảo chứng cứ thuộc mặt phẳng.

    **Cách sửa:** Dựng mặt phụ chứa \(BF\), tìm giao tuyến với mặt đích rồi giải giao của hai đường.

    **Học tiếp:** [Core và Luyện tập Bài 10](luyen-tap.md) · [Tự luận Chương IV](../../../thu-vien/tu-luan-g11-chuong-iv.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">Nguồn: SGK Toán 11 KNTT tập một, Bài 10 trang in 70–77, đã đối chiếu văn bản bản PDF số hóa và bản chép SGKVN. Bốn mục gốc và đủ sáu tính chất thừa nhận, ba cách xác định mặt, định nghĩa hình chóp/tứ diện. Hình có một SVG tứ diện trên main và hai SVG AUTHORING mới, dùng chung giữa hai tab. Bản screenshot trực tiếp PDF chưa truy xuất được.</p>
~~~~

---

## LESSON B11 — Hai đường thẳng song song
CANONICAL_PATH: `docs/thpt-preview/sgk/lop-11/chuong-iv/bai-11.md`  
SOURCE_HEAD: `a5508bbdae50d8c5a845741b82c963941c9563e0`  
SOURCE_BLOB: `1499b13b0a0f07849bde558223ef2d03e6142bfe`  
REVIEW_TARGET: Chapter IV Lesson 11, source Markdown **verbatim** below. Do not treat it as a second canonical copy.

~~~~markdown
# Bài 11. Hai đường thẳng song song

<style>
/* B11-only Golden semantic 3+1; giữ nguyên giao diện và runtime dùng chung. */
.md-typeset:has([data-g11-b11-authoring]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#e8f7f2;border-color:#a9dccc;border-left-color:#087d69;color:#174137}
.md-typeset:has([data-g11-b11-authoring]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#eaf1fc;border-color:#a5bee5;border-left-color:#4879c2;color:#193d66}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b11-authoring]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b11-authoring]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}
</style>

<div class="thpt-r4-screen" data-thpt-r4 data-g11-b11-authoring>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG IV · KẾT NỐI TRI THỨC</p>
<p class="thpt-r4-lead">Không cắt nhau chưa chắc song song: phân biệt đường chéo nhau, dùng tính chất song song và xác định hướng giao tuyến của hai mặt phẳng.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương IV</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    Trên một trang giấy, hai đường thẳng phân biệt không cắt nhau sẽ song song. Trong không gian, cầu vượt đi qua phía trên một con đường có thể **không cắt đường phía dưới** nhưng cũng **không cùng mặt phẳng**. Vậy từ “không giao nhau” không đủ để nói song song. Bài học có hai mục: trước tiên xác định các **vị trí tương đối**, rồi dùng những **tính chất/định lí** để chứng minh song song thật sự.

    ### 1.1. Vị trí tương đối của hai đường thẳng

    Hãy tưởng tượng hai chiếc thước cùng nằm trên một bàn phẳng: chúng có thể **trùng**, **cắt** hoặc **song song**. Nếu nhấc một thước ra khỏi mặt bàn và nghiêng ở độ cao khác, xuất hiện khả năng thứ tư: hai đường thẳng **chéo nhau**, nghĩa là không có mặt phẳng nào chứa cả hai. Đó là sự khác biệt căn bản giữa hình học phẳng và hình học không gian.

    Hai đường thẳng \(a,b\) gọi là **đồng phẳng** nếu có một mặt phẳng chứa cả hai. Hai đường **phân biệt và đồng phẳng, không có điểm chung** thì song song, viết \(a\parallel b\). Hai đường **không đồng phẳng** thì chéo nhau. Vì vậy, để khẳng định \(a\parallel b\) từ việc chúng không cắt nhau, ta còn phải có căn cứ chúng **cùng nằm trong một mặt phẳng**. Nếu chúng **trùng nhau**, không được gọi là song song theo định nghĩa hai đường phân biệt.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-B11-01_R01.svg" alt="Lăng trụ tam giác với cặp cạnh song song và cặp cạnh chéo nhau"><figcaption><strong>Đọc hình:</strong> trong lăng trụ \(ABC.A'B'C'\), đường \(AB\parallel A'B'\) cùng nằm trên mặt bên \(ABB'A'\). Ngược lại \(AA'\) và \(BC\) **chéo nhau** dù hai nét trên hình chiếu có thể gây nhầm: không có mặt phẳng nào chứa cả hai đường.</figcaption></figure>

    Một cách chứng minh chéo nhau rất chắc chắn là dùng **tứ diện**. Với bốn điểm \(A,B,C,D\) không đồng phẳng, giả sử \(AB\) và \(CD\) cùng thuộc một mặt phẳng; mặt đó sẽ chứa cả \(A,B,C,D\), mâu thuẫn. Vậy \(AB\) và \(CD\) chéo nhau. Tương tự các cặp cạnh đối diện \(AC\) với \(BD\), \(AD\) với \(BC\) cũng chéo nhau.

    **Nhận xét SGK:** Hai đường song song xác định **duy nhất một mặt phẳng** chứa cả hai. Chú ý rằng đây không phải điều kiện của hai đường chéo nhau: chúng không cùng nằm trong mặt phẳng nào.

    **Vận dụng.** Trong tứ diện \(ABCD\), hãy phân loại ba cặp đường \(AB\) và \(BC\); \(AB\) và \(CD\); \(AC\) và \(BD\). Giải thích bằng quan hệ điểm chung hoặc tính không đồng phẳng.

    ??? question "Đối chiếu"

        **Lời giải:** \(AB\) và \(BC\) **cắt nhau tại \(B\)**. \(AB\) và \(CD\) **chéo nhau**; \(AC\) và \(BD\) cũng **chéo nhau** vì nếu một cặp đồng phẳng, cả bốn đỉnh tứ diện phải đồng phẳng, trái định nghĩa tứ diện.

    ??? tip "Kiểm lỗi"

        Nếu chỉ nhìn thấy hai cạnh không gặp nhau rồi gọi là song song, em đã bỏ điều kiện **đồng phẳng**. Tìm điểm chung trước, sau đó xét có mặt phẳng chứa cả hai đường hay không.

    ### 1.2. Tính chất của hai đường thẳng song song

    Từ Bài 10, một đường thẳng \(d\) và điểm \(M\notin d\) xác định duy nhất mặt phẳng \((P)\). Trong **mặt phẳng ấy**, qua \(M\) chỉ có một đường song song với \(d\). Đường đó cũng là đường duy nhất trong cả không gian: mọi đường song song với \(d\) và qua \(M\) đều phải đồng phẳng với \(d\), nên phải nằm trong \((P)\). Đây là tính chất thứ nhất: **qua một điểm ngoài một đường, có đúng một đường song song với đường đã cho**.

    Nếu \(a\parallel c\) và \(b\parallel c\), với \(a,b\) **phân biệt**, chúng có cùng hướng và theo tính chất SGK thì \(a\parallel b\). Không được bỏ chữ “phân biệt”: hai đường \(a,b\) có thể trùng nhau và cùng song song với \(c\); khi đó \(a=b\), không phải \(a\parallel b\).

    Tiếp tục nhìn vào **ba mặt phẳng** \((P),(Q),(R)\) đôi một cắt nhau theo ba đường **phân biệt** \(a,b,c\). Nếu hai trong ba giao tuyến gặp tại \(M\), thì \(M\) thuộc cả ba mặt, nên cũng thuộc giao tuyến thứ ba; ba đường **đồng quy**. Còn nếu không có điểm chung như vậy, cả ba đường phải **đôi một song song**. Kết luận đó được SGK gọi rõ là **Định lí về ba đường giao tuyến**.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B11_TWO_PLANES_PARALLEL_LINES_AUTHORING_20261123.svg" alt="Hai mặt phẳng P và Q giao nhau theo đường c song song với đường a trên P và đường b trên Q"><figcaption><strong>Đọc hình:</strong> hình riêng minh họa **hệ quả** của định lí: \((P)\cap(Q)=c\), đường \(a\subset(P)\) song song với \(b\subset(Q)\), thì giao tuyến \(c\) khi có sẽ song song với cả hai hoặc trùng một trong hai đường. Trong hình minh họa này, ba đường phân biệt và song song.</figcaption></figure>

    Đây là lí do ta có thể xác định giao tuyến trong hình chóp mà không phải tìm ngay hai điểm chung. Giả sử \(S.ABCD\) có đáy hình bình hành, \(AB\parallel CD\). Mặt \((SAB)\) chứa \(AB\), mặt \((SCD)\) chứa \(CD\), hai mặt có điểm chung \(S\). Giao tuyến của chúng phải **qua \(S\) và song song với \(AB,CD\)**. Ta đã tìm được **hướng** đường giao từ hai đường song song ở hai mặt.

    **Vận dụng.** Cho hình chóp \(S.ABCD\) có \(ABCD\) là hình bình hành. Xác định giao tuyến của \((SAB)\) và \((SCD)\), rồi của \((SAD)\) và \((SBC)\). Không chỉ viết “qua \(S\)” mà phải mô tả hướng.

    ??? question "Đối chiếu"

        **Lời giải:** Hai mặt \((SAB),(SCD)\) có điểm chung \(S\), lần lượt chứa \(AB\parallel CD\), nên giao tuyến là **đường qua \(S\) và song song với \(AB,CD\)**. Tương tự, \((SAD)\cap(SBC)\) là **đường qua \(S\) và song song với \(AD,BC\)**.

    ??? tip "Kiểm lỗi"

        Chỉ biết một điểm chung \(S\) chưa đủ xác định giao tuyến, nhưng có thể dùng **hướng song song** đã chứng minh để xác định đường đi qua \(S\). Đừng mặc định hai mặt không giao nhau: cả hai đều chứa \(S\).

=== "Kiến thức SGK"

    ### 2.1. Vị trí tương đối của hai đường thẳng

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khái niệm — Đồng phẳng, chéo nhau và song song</strong><p>Hai đường thẳng \(a,b\) gọi là <strong>đồng phẳng</strong> nếu có một mặt phẳng chứa cả hai. Khi đồng phẳng, chúng có thể <strong>trùng nhau</strong>, <strong>cắt nhau</strong> hoặc <strong>song song</strong>. Hai đường <strong>không đồng phẳng</strong> gọi là <strong>chéo nhau</strong>. Hai đường phân biệt <strong>song song</strong> khi chúng đồng phẳng và không có điểm chung, kí hiệu \(a\parallel b\).</p></div>

    **Phân biệt đủ bốn vị trí:** Trùng nhau \(a=b\); cắt nhau \(a\cap b=\{M\}\); song song \(a\ne b\), đồng phẳng, không điểm chung; chéo nhau không đồng phẳng (do đó cũng không có điểm chung). **Không giao nhau** có thể là song song **hoặc chéo nhau**, không đủ kết luận song song.

    **Nhận xét SGK:** Có đúng một mặt phẳng chứa hai đường thẳng song song. Không suy ra mặt phẳng ấy khi hai đường chéo nhau. Trong tứ diện \(ABCD\), ba cặp cạnh đối diện \(AB,CD\), \(AC,BD\), \(AD,BC\) đều chéo nhau.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-B11-01_R01.svg" alt="Cặp cạnh song song và chéo nhau của một lăng trụ tam giác"><figcaption><strong>Tra hình:</strong> \(AB\parallel A'B'\), còn \(AA'\) chéo với \(BC\); đường chéo nhau không có mặt phẳng chung. Chú giải đọc **quan hệ thật** thay vì độ dài/giao cắt trong hình chiếu.</figcaption></figure>

    ### 2.2. Tính chất của hai đường thẳng song song

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Đường thẳng song song qua điểm</strong><p>Trong không gian, qua một điểm \(M\) <strong>không nằm trên</strong> đường thẳng \(d\) cho trước, có <strong>đúng một đường thẳng</strong> đi qua \(M\) và song song với \(d\).</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Hai đường song song với đường thứ ba</strong><p>Trong không gian, <strong>hai đường thẳng phân biệt</strong> cùng song song với một đường thẳng thứ ba thì chúng song song với nhau.</p></div>

    **Chú ý điều kiện:** Nếu không nói hai đường **phân biệt**, chúng có thể trùng nhau. Khi \(M\in d\), không thể có một đường **phân biệt** qua \(M\) và song song với \(d\) theo định nghĩa.

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Định lí — Ba đường giao tuyến</strong><p>Nếu <strong>ba mặt phẳng đôi một cắt nhau theo ba giao tuyến phân biệt</strong>, thì ba giao tuyến ấy <strong>đồng quy</strong> hoặc <strong>đôi một song song</strong> với nhau.</p></div>

    **Chú ý SGK — Hệ quả về giao tuyến:** Nếu hai mặt phẳng chứa hai đường thẳng **song song** với nhau, thì giao tuyến của hai mặt phẳng ấy (**nếu có**) song song với hai đường thẳng đó **hoặc trùng với một trong hai đường**. Không xóa điều kiện “nếu có”, không ép mọi trường hợp phải có ba đường phân biệt.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B11_TWO_PLANES_PARALLEL_LINES_AUTHORING_20261123.svg" alt="Hai mặt phẳng chứa hai đường song song và giao nhau theo đường thứ ba cùng phương"><figcaption><strong>Tra hình:</strong> \(a\subset(P)\), \(b\subset(Q)\), \(a\parallel b\), \((P)\cap(Q)=c\). Trong hình cả ba đường khác nhau và \(c\parallel a\parallel b\), minh họa nhánh “song song” của hệ quả.</figcaption></figure>

    **Cách dùng trong hình chóp:** Nếu \(ABCD\) là hình bình hành, \((SAB)\cap(SCD)\) qua \(S\), song song với \(AB,CD\); \((SAD)\cap(SBC)\) qua \(S\), song song với \(AD,BC\). Đây là **đường thẳng giao tuyến**, không chỉ một đoạn trên hình vẽ.

=== "Ví dụ"

    ### 3.1. Cắt nhau hay chéo nhau?

    **Đề bài.** Trong tứ diện \(ABCD\), phân loại các cặp \(AB,BC\) và \(AB,CD\).

    **Phân tích:** Cặp đầu có điểm chung \(B\). Với cặp sau, dùng giả thiết bốn đỉnh không đồng phẳng để xét không gian.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.1"><p><strong>Lời giải.</strong> \(AB\) và \(BC\) cắt nhau tại \(B\). Nếu \(AB,CD\) đồng phẳng thì bốn điểm \(A,B,C,D\) đồng phẳng, trái định nghĩa tứ diện; vậy \(AB\) và \(CD\) chéo nhau.</p></div>

    **Kiểm lại:** Cặp \(AC,BD\) và \(AD,BC\) cũng chéo nhau bởi lập luận tương tự.

    ### 3.2. Hai đường cùng nằm trên một mặt phẳng

    **Đề bài.** Hình chóp \(S.ABCD\) có đáy \(ABCD\) là hình bình hành. Xác định vị trí tương đối của \(AB\) và \(CD\), \(AB\) và \(AC\).

    **Phân tích:** Cả bốn đỉnh \(A,B,C,D\) thuộc mặt phẳng đáy, nên áp dụng tính chất của hình bình hành trong **chính mặt ấy**.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.2"><p><strong>Lời giải.</strong> \(AB\parallel CD\) vì là hai cạnh đối diện hình bình hành, đồng phẳng và phân biệt. \(AB\) cắt \(AC\) tại \(A\).</p></div>

    **Kiểm lại:** Không có cặp nào ở đây chéo nhau vì cả hai đường thuộc mặt đáy.

    ### 3.3. Đường trung bình của tam giác trong không gian

    **Đề bài.** Trong hình chóp \(S.ABC\), \(M,N\) là trung điểm của \(SA,SB\). Chứng minh \(MN\parallel AB\).

    **Phân tích:** Dù tam giác \(SAB\) ở không gian, bản thân nó nằm trong **mặt phẳng \((SAB)\)**, nên dùng định lí đường trung bình của tam giác.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.3"><p><strong>Lời giải.</strong> \(M,N\) là trung điểm của \(SA,SB\), nên \(MN\) là đường trung bình tam giác \(SAB\). Vậy \(MN\parallel AB\) và \(MN=AB/2\).</p></div>

    **Kiểm lại:** Phải chỉ ra mặt phẳng tam giác \(SAB\), không dùng một định lí phẳng cho những điểm không đồng phẳng.

    ### 3.4. Đường song song duy nhất qua điểm ngoài đường

    **Đề bài.** Cho đường thẳng \(d\) và \(M\notin d\). Hai đường \(a,b\) cùng qua \(M\) và đều song song \(d\). Kết luận gì?

    **Phân tích:** Dùng **tính duy nhất** của đường song song qua điểm ngoài đường, không chỉ kết luận hai đường có cùng hướng.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.4"><p><strong>Lời giải.</strong> Qua \(M\notin d\) chỉ có duy nhất một đường song song \(d\), do đó \(a=b\).</p></div>

    **Kiểm lại:** Không gọi \(a\parallel b\) vì chúng **trùng nhau**.

    ### 3.5. Hai đường cùng song song với đường thứ ba

    **Đề bài.** Cho \(a\parallel c,\ b\parallel c,\ a\ne b\). Chứng minh \(a\parallel b\).

    **Phân tích:** SGK có tính chất đúng với điều kiện hai đường **phân biệt**.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.5"><p><strong>Lời giải.</strong> Vì \(a,b\) phân biệt và cùng song song với \(c\), theo tính chất song song với đường thứ ba suy ra \(a\parallel b\).</p></div>

    **Kiểm lại:** Nếu bỏ \(a\ne b\), ví dụ \(a=b\) cho thấy không kết luận song song theo định nghĩa.

    ### 3.6. Định lí ba đường giao tuyến khi có hai đường cắt nhau

    **Đề bài.** Ba mặt phẳng \((P),(Q),(R)\) đôi một cắt nhau theo các giao tuyến phân biệt \(a=(P)\cap(R)\), \(b=(Q)\cap(R)\), \(c=(P)\cap(Q)\). Nếu \(a\) cắt \(b\) ở \(M\), chứng minh \(M\in c\).

    **Phân tích:** Điểm \(M\) thuộc \(a\) và \(b\), nên thuộc cả ba mặt phẳng.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.6"><p><strong>Lời giải.</strong> \(M\in a\subset(P),(R)\) và \(M\in b\subset(Q),(R)\), nên \(M\in(P)\cap(Q)=c\). Vậy cả ba giao tuyến cùng đi qua \(M\).</p></div>

    **Kiểm lại:** Nếu không có điểm gặp nhau thì theo định lí ba giao tuyến phân biệt phải **đôi một song song**, không thể chỉ một cặp cắt.

    ### 3.7. Giao tuyến qua điểm chung, song song cạnh đáy

    **Đề bài.** Hình chóp \(S.ABCD\) có đáy hình bình hành. Tìm \((SAB)\cap(SCD)\).

    **Phân tích:** Hai mặt có điểm chung \(S\) và lần lượt chứa hai đường đáy \(AB\parallel CD\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.7"><p><strong>Lời giải.</strong> Giao tuyến là đường thẳng đi qua \(S\) và song song với \(AB,CD\), theo hệ quả SGK về giao tuyến của hai mặt chứa hai đường song song.</p></div>

    **Kiểm lại:** Hai mặt không trùng nhau vì \(S\notin(ABCD)\) và \(AB,CD\) phân biệt; giao tuyến thật sự tồn tại vì cùng chứa \(S\).

    ### 3.8. Không cắt nhau chưa đủ để song song

    **Đề bài.** Trong tứ diện \(ABCD\), một bạn nói \(AB\parallel CD\) vì hai đường không có điểm chung. Hãy bác bỏ.

    **Phân tích:** Tách hai điều kiện của song song: **không chung điểm** và **đồng phẳng**.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.8"><p><strong>Lời giải.</strong> Nếu \(AB\parallel CD\), hai đường phải đồng phẳng. Khi ấy \(A,B,C,D\) đồng phẳng, mâu thuẫn với tứ diện. Vì không đồng phẳng, \(AB,CD\) là **hai đường chéo nhau**, không song song.</p></div>

    **Kiểm lại:** Hai đường không cắt nhau có thể thuộc một trong hai trường hợp **song song hoặc chéo nhau**.

=== "Lỗi thường gặp"

    ### 4.1. Gọi hai đường không cắt nhau là song song

    **Dấu hiệu:** Trong tứ diện, kết luận \(AB\parallel CD\) vì không có điểm chung.

    **Vì sao sai:** Hai đường chéo nhau cũng không cắt nhau, nhưng **không đồng phẳng**.

    **Cách sửa:** Chứng minh hai đường cùng nằm trong một mặt phẳng trước khi dùng định nghĩa song song.

    ### 4.2. Nhầm hai đường trùng nhau với song song

    **Dấu hiệu:** Từ \(a\parallel c,b\parallel c\), viết \(a\parallel b\) mà không xét \(a=b\).

    **Vì sao sai:** Định nghĩa song song yêu cầu **hai đường phân biệt**.

    **Cách sửa:** Nếu \(a=b\), kết luận trùng; nếu \(a\ne b\), mới dùng tính chất SGK.

    ### 4.3. Bỏ điều kiện điểm ngoài đường ở tính duy nhất

    **Dấu hiệu:** Khẳng định qua điểm \(M\in d\) có một đường qua \(M\) song song với \(d\).

    **Vì sao sai:** Đường qua \(M\) và không cắt \(d\) không tồn tại nếu nó phân biệt và đồng phẳng; đường trùng \(d\) cũng không được gọi song song.

    **Cách sửa:** Kiểm \(M\notin d\) trước khi dùng tính chất.

    ### 4.4. Lạm dụng định lí ba giao tuyến khi hai đường giao trùng nhau

    **Dấu hiệu:** Không kiểm các giao tuyến phân biệt mà kết luận đồng quy hoặc đôi một song song.

    **Vì sao sai:** Định lí SGK yêu cầu ba mặt phẳng đôi một cắt nhau theo **ba giao tuyến phân biệt**.

    **Cách sửa:** Ghi rõ ba mặt và ba giao tuyến trước; kiểm từng cặp có giao tuyến nào và có trùng nhau không.

    ### 4.5. Chỉ biết một điểm chung đã tự chọn hướng giao tuyến

    **Dấu hiệu:** Hai mặt cùng chứa \(S\) nên ghi đại một đường qua \(S\) là giao tuyến.

    **Vì sao sai:** Phải có thêm điểm chung hoặc chứng cứ **hướng song song** từ các đường trong mặt.

    **Cách sửa:** Với đáy hình bình hành, dùng \(AB\parallel CD\) để suy giao tuyến qua \(S\) song song hai cạnh ấy.

    ### 4.6. Dùng định lí tam giác ngoài mặt phẳng chứa tam giác

    **Dấu hiệu:** Tự nối hai trung điểm ở hai cạnh không cùng một tam giác rồi nói là đường trung bình.

    **Vì sao sai:** Định lí đường trung bình chỉ áp dụng cho **hai cạnh của cùng một tam giác** trong một mặt phẳng.

    **Cách sửa:** Chỉ rõ tam giác và hai cạnh chứa hai trung điểm rồi mới kết luận song song.

    **Học tiếp:** [Core và Luyện tập Bài 11](luyen-tap.md) · [Tự luận Chương IV](../../../thu-vien/tu-luan-g11-chuong-iv.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">Nguồn nội dung: SGK Toán 11 Kết nối tri thức với cuộc sống, tập một, Bài 11 trang in 78–83. Hai mục chính: Vị trí tương đối của hai đường thẳng; Tính chất của hai đường thẳng song song. Đủ hai tính chất và Định lí về ba đường giao tuyến, giữ điều kiện đường phân biệt. Một SVG lăng trụ từ main và một SVG minh họa hệ quả do AUTHORING tạo, dùng chung trong hai tab. Ảnh screenshot từng trang SGK PDF chưa truy xuất được.</p>
~~~~

---

## LESSON B12 — Đường thẳng và mặt phẳng song song
CANONICAL_PATH: `docs/thpt-preview/sgk/lop-11/chuong-iv/bai-12.md`  
SOURCE_HEAD: `cf06012f1489add2e7d948883f1664b633cac2c8`  
SOURCE_BLOB: `a022abc6764f00461f327257082d432f01bc8897`  
REVIEW_TARGET: Chapter IV Lesson 12, source Markdown **verbatim** below. Do not treat it as a second canonical copy.

~~~~markdown
# Bài 12. Đường thẳng và mặt phẳng song song

<style>
/* Chỉ B12: khung ngữ nghĩa Golden 3+1; không sửa CSS/JS toàn website. */
.md-typeset:has([data-g11-b12-authoring]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#e8f7f2;border-color:#a9dccc;border-left-color:#087d69;color:#174137}
.md-typeset:has([data-g11-b12-authoring]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#eaf1fc;border-color:#a5bee5;border-left-color:#4879c2;color:#193d66}
.md-typeset:has([data-g11-b12-authoring]) .thpt-r4-key-formula {background:transparent;color:inherit;border:1px solid #8c9ab0;border-left:4px solid #64748b;border-radius:10px;padding:.75rem 1rem;margin:.65rem 0 1rem;line-height:1.65}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b12-authoring]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b12-authoring]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b12-authoring]) .thpt-r4-key-formula {background:transparent;color:inherit;border-color:#8c9ab0;border-left-color:#bdc8d8}
</style>

<div class="thpt-r4-screen" data-thpt-r4 data-g11-b12-authoring>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG IV · KẾT NỐI TRI THỨC</p>
<p class="thpt-r4-lead">Nhìn đúng vị trí đường–mặt, chứng minh song song bằng đường nằm trong mặt và xác định hướng giao tuyến khi một mặt phẳng phụ cắt mặt phẳng đã cho.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương IV</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    Người thợ xây có thể căng dây theo phương của các hàng gạch, phía trên mặt đất. Dây không chạm đất và hướng theo một đường nằm trên mặt đất, nên gợi lên quan hệ **đường thẳng song song với mặt phẳng**. Nhưng một thanh cột dọc khung thành lại chạm mặt đất, còn cạnh khung nằm sát đất thuộc luôn mặt phẳng đất. Bằng cách phân biệt ba tình huống đó, ta biết khi nào được nói song song và khi nào phải kiểm thêm điều kiện.

    ### 1.1. Đường thẳng song song với mặt phẳng

    Trong hình học phẳng, hai đường thẳng phân biệt có thể cắt nhau hoặc song song. Với **một đường thẳng \(d\) và một mặt phẳng \((P)\)**, có ba khả năng về số điểm chung:

    - **Nằm trong:** mọi điểm của \(d\) đều nằm trong \((P)\), tức \(d\subset(P)\); có vô số điểm chung.
    - **Cắt nhau:** có đúng một điểm chung \(M\), tức \(d\cap(P)=\{M\}\).
    - **Song song:** **không có điểm chung nào**, viết \(d\parallel(P)\).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B12_THREE_LINE_PLANE_POSITIONS_AUTHORING_20261123.svg" alt="Ba vị trí của một đường thẳng đối với mặt phẳng: nằm trong, cắt tại một điểm và không có điểm chung"><figcaption><strong>Hướng dẫn đọc:</strong> khung trái có đường nằm ngay trên mặt phẳng (vô số điểm chung); khung giữa đường đi qua mặt ở đúng \(M\); khung phải đường được vẽ tách khỏi mặt phẳng (không có điểm chung). Hình không dùng độ dài/khoảng cách của bản vẽ để chứng minh.</figcaption></figure>

    Điều cần ghi nhớ là từ **“không nằm trong”** chỉ loại được trường hợp đầu; đường vẫn có thể **cắt** mặt. Ngược lại, nếu \(d\parallel(P)\), đường \(d\) không thể đi qua bất kỳ điểm nào thuộc \((P)\). Một đoạn dây được vẽ không chạm vùng mặt phẳng trên giấy cũng chưa đủ chứng minh *đường thẳng kéo dài* không cắt mặt phẳng: phải có chứng cứ hình học.

    Hãy xét tứ diện \(S.ABC\). Đường \(AB\) nằm trong mặt đáy \((ABC)\). Đường \(SA\) cắt \((ABC)\) tại đúng \(A\), vì \(S\notin(ABC)\). Còn nếu \(M,N\) là trung điểm của \(SA,SB\), đoạn nối hai điểm này nằm trong mặt \((SAB)\), và sau khi chứng minh \(MN\parallel AB\), ta sẽ có một ví dụ thực sự của \(MN\parallel(ABC)\). Chứng minh điều cuối thuộc mục 1.2; chưa nên kết luận chỉ bằng hình.

    **Vận dụng.** Trong tứ diện \(S.ABC\), hãy phân loại quan hệ của \(AB\) và \((ABC)\), \(SA\) và \((ABC)\). Nếu một đường \(m\) có điểm \(A\in(ABC)\), có thể khẳng định \(m\parallel(ABC)\) không?

    ??? question "Đối chiếu"

        **Lời giải:** \(AB\subset(ABC)\). Vì \(S\notin(ABC)\) và \(A\in(ABC)\), \(SA\cap(ABC)=\{A\}\). Đường \(m\) đi qua \(A\in(ABC)\) có **ít nhất một điểm chung** với mặt nên không thể song song mặt; nó hoặc nằm trong, hoặc cắt mặt.

    ??? tip "Kiểm lỗi"

        “Không thấy đường chạm mặt” chưa phải chứng minh. Hãy xác định **số điểm chung** từ giả thiết, và nhớ đường trong hình học được kéo dài vô hạn chứ không dừng ở mép đoạn vẽ.

    ### 1.2. Điều kiện và tính chất của đường thẳng song song với mặt phẳng

    **Từ một đường song song sang cả mặt phẳng.** Trong tam giác \(SAB\), nối trung điểm \(M\in SA\), \(N\in SB\). Theo định lí đường trung bình **trong mặt \((SAB)\)**, \(MN\parallel AB\). Mà \(AB\subset(ABC)\). Vì \(M\) nằm trong cạnh \(SA\) nhưng không phải \(A\), nên \(M\notin(ABC)\); do đó \(MN\) **không nằm trong** \((ABC)\). Ta kết luận được \(MN\parallel(ABC)\). Hai bước quan trọng là: **tìm một đường nằm trong mặt và song song đường xét**, rồi **chứng minh đường xét không nằm trong mặt**.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-B12-01_R01.svg" alt="Hình chóp S.ABCD với M,N là trung điểm SA,SB; MN phía trên đáy và song song AB nằm trong đáy"><figcaption><strong>Hướng dẫn đọc:</strong> đoạn \(MN\) màu đỏ là đường trung bình tam giác \(SAB\), nên song song \(AB\) ở đáy. Do \(M,N\) không thuộc mặt đáy, đường \(MN\) không nằm trong đáy; kết hợp hai dữ kiện mới suy ra \(MN\parallel(ABCD)\).</figcaption></figure>

    **Vì sao điều kiện ngoài mặt không được bỏ?** Trong hình bình hành \(ABCD\), \(AB\parallel CD\), cả hai đều thuộc \((ABCD)\). Nếu chỉ dùng \(AB\parallel CD\), \(CD\subset(ABCD)\), rồi kết luận \(AB\parallel(ABCD)\) là sai vì thực ra \(AB\subset(ABCD)\). Đây là ví dụ phản chứng cho việc quên điều kiện.

    **Tính chất về giao tuyến.** Giả sử \(a\parallel(P)\) và có mặt phẳng \((Q)\) chứa \(a\), cắt \((P)\) theo đường \(b\). Trong \((Q)\), hai đường \(a,b\) **đồng phẳng**. Chúng không thể có điểm chung vì \(b\subset(P)\), còn \(a\) không có điểm chung với \((P)\). Do vậy \(a\parallel b\). Tính chất này cho ta **hướng của giao tuyến** ngay cả khi chưa biết hai điểm chung.

    Từ đó, với hình chóp \(S.ABCD\) có đáy là hình bình hành, \(M,N\) là trung điểm \(SA,SB\), đặt \((Q)=(MNC)\). Vì \(MN\parallel(ABCD)\), \((Q)\) chứa \(MN\) và \(C\in(Q)\cap(ABCD)\), giao tuyến \((Q)\cap(ABCD)\) phải qua \(C\) và song song \(MN\). Trong đáy có \(CD\parallel AB\parallel MN\), nên giao tuyến chính là **\(CD\)**. Ta đã tìm giao tuyến theo *một điểm chung và một hướng xác định*, thay vì đoán nét cắt trên hình.

    **Vận dụng.** Cho tứ diện \(S.ABC\), \(M,N\) lần lượt là trung điểm \(SA,SB\). Chứng minh \(MN\parallel(ABC)\) và nói rõ hai điều kiện của dấu hiệu song song.

    ??? question "Đối chiếu"

        **Lời giải:** \(MN\parallel AB\) vì là đường trung bình tam giác \(SAB\). \(AB\subset(ABC)\). Do \(M\in SA\), \(M\ne A\) và \(S\notin(ABC)\), suy ra \(M\notin(ABC)\), nên \(MN\not\subset(ABC)\). Theo điều kiện SGK, \(MN\parallel(ABC)\).

    ??? tip "Kiểm lỗi"

        Không được chỉ ghi \(MN\parallel AB\) và \(AB\subset(ABC)\). Cần thêm **\(MN\not\subset(ABC)\)**; nếu không, hình bình hành phẳng là một phản ví dụ.

    **Vận dụng.** Cho hình chóp \(S.ABCD\) có đáy hình bình hành, \(M,N\) là trung điểm \(SA,SB\). Mặt \((MNC)\) giao với đáy theo đường thẳng nào? Giải thích bằng tính chất về giao tuyến, không dựa vào hình chiếu.

    ??? question "Đối chiếu"

        **Lời giải:** Ta có \(MN\parallel AB\subset(ABCD)\), và \(MN\not\subset(ABCD)\), nên \(MN\parallel(ABCD)\). Mặt \((MNC)\) chứa \(MN\), giao mặt đáy theo đường đi qua \(C\) và song song với \(MN\). Vì \(CD\parallel AB\parallel MN\) và \(CD\subset(ABCD)\), giao tuyến là \(CD\).

    ??? tip "Kiểm lỗi"

        Nếu chỉ nói giao tuyến qua \(C\) thì chưa đủ xác định một đường. Hãy tìm **hướng song song** và kiểm đường đề nghị thật sự nằm trong cả hai mặt phẳng.

=== "Kiến thức SGK"

    ### 2.1. Đường thẳng song song với mặt phẳng

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khái niệm — Ba vị trí của đường thẳng và mặt phẳng</strong><p>Với đường \(d\) và mặt phẳng \((P)\), có đúng ba trường hợp: <strong>(1)</strong> \(d\subset(P)\): đường nằm trong mặt phẳng, có vô số điểm chung; <strong>(2)</strong> \(d\cap(P)=\{M\}\): đường cắt mặt phẳng tại đúng một điểm \(M\); <strong>(3)</strong> \(d\cap(P)=\varnothing\): đường song song với mặt phẳng.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Đường thẳng song song với mặt phẳng</strong><p>Đường thẳng \(d\) được gọi là <strong>song song với mặt phẳng \((P)\)</strong> nếu \(d\) <strong>không có điểm chung</strong> với \((P)\). Kí hiệu \(d\parallel(P)\) hoặc \((P)\parallel d\). Đường \(d\subset(P)\) <strong>không phải</strong> trường hợp \(d\parallel(P)\) theo định nghĩa này.</p></div>

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B12_THREE_LINE_PLANE_POSITIONS_AUTHORING_20261123.svg" alt="Ba trường hợp đường nằm trong mặt, đường cắt mặt tại một điểm và đường song song mặt"><figcaption><strong>Tra hình:</strong> \(a\subset(P)\); \(b\cap(Q)=\{M\}\); \(c\cap(R)=\varnothing\). Hãy đọc theo **điểm chung** thay vì hình bình hành được vẽ hữu hạn.</figcaption></figure>

    **Lưu ý phân loại:** \(d\not\subset(P)\) **không tương đương** \(d\parallel(P)\) vì còn khả năng \(d\) cắt \((P)\). Mặt phẳng có thể chứa đoạn được vẽ nhưng phải xét **đường thẳng vô hạn** khi viết quan hệ.

    ### 2.2. Điều kiện và tính chất của đường thẳng song song với mặt phẳng

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Điều kiện — Dấu hiệu đường thẳng song song với mặt phẳng</strong><p>Nếu \(a\not\subset(P)\), \(b\subset(P)\) và \(a\parallel b\), thì \(a\parallel(P)\). <strong>Bắt buộc kiểm</strong> \(a\not\subset(P)\): bỏ điều kiện này có thể nhầm đường nằm ngay trong mặt với đường song song mặt.</p></div>

    **Vì sao đủ:** Hai đường \(a\parallel b\) xác định mặt phẳng \((Q)\). Vì \(a\not\subset(P)\), \((Q)\ne(P)\), nhưng cả hai cùng chứa \(b\), nên giao tuyến của chúng là \(b\). Nếu \(a\) gặp \((P)\) tại \(M\), thì \(M\in(Q)\cap(P)=b\), mâu thuẫn \(a\parallel b\). Vậy \(a\) không có điểm chung với \((P)\).

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Giao tuyến của mặt phẳng chứa đường song song mặt phẳng khác</strong><p>Nếu \(a\parallel(P)\), \(a\subset(Q)\) và hai mặt phẳng \((P),(Q)\) <strong>cắt nhau</strong> theo đường \(b\), thì \(a\parallel b\).</p></div>

    **Vì sao đúng:** \(a\) và \(b\) cùng nằm trong \((Q)\), còn \(b\subset(P)\). Do \(a\parallel(P)\), hai đường không có điểm chung nên đồng phẳng và song song. Không bỏ điều kiện hai mặt phẳng **có giao tuyến**.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-B12-01_R01.svg" alt="MN là đường trung bình tam giác SAB, song song AB ở mặt đáy của hình chóp"><figcaption><strong>Tra hình:</strong> \(MN\parallel AB\), \(AB\subset(ABCD)\) và \(MN\not\subset(ABCD)\), do đó \(MN\parallel(ABCD)\). Mặt \((SAB)\) chứa \(MN\) và cắt đáy theo \(AB\), phù hợp tính chất \(MN\parallel AB\).</figcaption></figure>

    **Cách giải bài:** Chứng minh đường–mặt song song → tìm \(b\subset(P)\) song song \(a\), rồi kiểm \(a\not\subset(P)\). Xác định giao tuyến của mặt \((Q)\) chứa \(a\parallel(P)\) → tìm một điểm chung \(M\in(Q)\cap(P)\) và lấy đường qua \(M\) song song \(a\). Nếu chưa biết hai mặt có cắt nhau, phải xác nhận có điểm chung và phân biệt trước.

    **Không suy diễn quá mức:** \(a\parallel(P)\) không có nghĩa \(a\) song song **mọi** đường \(b\subset(P)\): có những đường \(b\) trong \((P)\) không đồng phẳng với \(a\), nên \(a,b\) chéo nhau. Trường hợp xét hình chóp cần chứng minh cặp đường cụ thể được dùng thực sự song song.

=== "Ví dụ"

    ### 3.1. Phân biệt ba vị trí đường–mặt trong tứ diện

    **Đề bài.** Tứ diện \(S.ABC\), \(M,N\) là trung điểm \(SA,SB\). Xác định quan hệ \(AB,SA,MN\) với \((ABC)\).

    **Phân tích:** Hai quan hệ đầu theo định nghĩa. Với \(MN\), dùng đường trung bình và điều kiện \(MN\) không nằm trong đáy.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.1"><p><strong>Lời giải.</strong> \(AB\subset(ABC)\). \(SA\cap(ABC)=\{A\}\). Trong tam giác \(SAB\), \(MN\parallel AB\), \(AB\subset(ABC)\), và \(MN\not\subset(ABC)\) vì \(M\in SA\setminus\{A\}\). Suy ra \(MN\parallel(ABC)\).</p></div>

    **Kiểm lại:** Ba đường tương ứng ba trường hợp: nằm trong, cắt tại một điểm, song song.

    ### 3.2. Phản ví dụ khi quên điều kiện không nằm trong mặt

    **Đề bài.** Cho hình bình hành \(ABCD\) trong \((P)=(ABCD)\). Biết \(AB\parallel CD\) và \(CD\subset(P)\). Có được kết luận \(AB\parallel(P)\) không?

    **Phân tích:** Kiểm đủ điều kiện của dấu hiệu, đặc biệt \(AB\not\subset(P)\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.2"><p><strong>Lời giải.</strong> Không. Bởi \(AB\subset(P)\), đường \(AB\) có vô số điểm chung với \((P)\), nên không thể song song \((P)\) theo định nghĩa.</p></div>

    **Kiểm lại:** Chính việc thiếu \(AB\not\subset(P)\) làm dấu hiệu không áp dụng được.

    ### 3.3. Chứng minh đường trung bình song song mặt đáy

    **Đề bài.** Trong chóp \(S.ABCD\) có đáy hình bình hành, \(M,N\) là trung điểm \(SA,SB\). Chứng minh \(MN\parallel(ABCD)\).

    **Phân tích:** Dùng tam giác phẳng \(SAB\) để có một đường song song trong mặt đáy, rồi xác nhận \(MN\) không nằm trong đáy.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.3"><p><strong>Lời giải.</strong> \(MN\parallel AB\) theo định lí đường trung bình tam giác \(SAB\). Do \(AB\subset(ABCD)\), \(M\in SA\setminus\{A\}\) và \(S\notin(ABCD)\), suy ra \(M\notin(ABCD)\), nên \(MN\not\subset(ABCD)\). Kết luận \(MN\parallel(ABCD)\).</p></div>

    **Kiểm lại:** Không nhầm \(MN\) nằm trong **mặt bên** \((SAB)\) với nằm trong **mặt đáy** \((ABCD)\).

    ### 3.4. Cùng một tỉ số trên hai cạnh bên

    **Đề bài.** Trong tứ diện \(S.ABC\), \(M\in SA\), \(N\in SB\) với \(SM/SA=SN/SB=1/3\). Chứng minh \(MN\parallel(ABC)\).

    **Phân tích:** Từ tỉ số trên hai cạnh của tam giác \(SAB\), dùng định lí Thalès đảo để suy \(MN\parallel AB\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.4"><p><strong>Lời giải.</strong> Vì \(M\in SA\), \(N\in SB\), \(\dfrac{SM}{SA}=\dfrac{SN}{SB}=\frac13\), nên \(MN\parallel AB\). Mặt khác \(AB\subset(ABC)\), \(M\ne A\), \(M\in SA\) và \(S\notin(ABC)\), vậy \(MN\not\subset(ABC)\). Suy ra \(MN\parallel(ABC)\).</p></div>

    **Kiểm lại:** Hai tỉ số đều đo từ **cùng đỉnh \(S\)**; \(M,N\) ở bên trong cạnh, không trùng đỉnh đáy.

    ### 3.5. Tính chất giao tuyến trong mặt phẳng chứa đường song song

    **Đề bài.** Cho \(a\parallel(P)\), \(a\subset(Q)\), \((Q)\cap(P)=b\). Hãy chứng minh \(a\parallel b\).

    **Phân tích:** Dùng hai sự kiện: \(a,b\subset(Q)\) nên đồng phẳng; \(a\) không gặp bất kì đường nào trong \((P)\), nên không gặp \(b\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.5"><p><strong>Lời giải.</strong> \(b\subset(P)\) và \(a\cap(P)=\varnothing\), suy ra \(a\cap b=\varnothing\). Vì \(a,b\subset(Q)\), chúng đồng phẳng, phân biệt và không cắt nhau, nên \(a\parallel b\).</p></div>

    **Kiểm lại:** Phải có giao tuyến \(b=(P)\cap(Q)\) tồn tại; nếu hai mặt song song nhau, không có \(b\) để xét.

    ### 3.6. Tìm giao tuyến từ một điểm và một hướng

    **Đề bài.** Chóp \(S.ABCD\) đáy hình bình hành, \(M,N\) là trung điểm \(SA,SB\), \((Q)=(MNC)\). Xác định \((Q)\cap(ABCD)\).

    **Phân tích:** Mặt \((Q)\) chứa \(MN\parallel(ABCD)\), lại có điểm chung \(C\); tính chất giao tuyến cho hướng qua \(C\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.6"><p><strong>Lời giải.</strong> \(MN\parallel AB\subset(ABCD)\) và \(MN\not\subset(ABCD)\), nên \(MN\parallel(ABCD)\). Mặt \((Q)\) chứa \(MN\) và \(C\); vì \(C\) thuộc đáy nhưng không thuộc \(MN\), \((Q)\) phân biệt với đáy và giao tuyến qua \(C\) song song \(MN\). Trong đáy, \(CD\parallel AB\parallel MN\). Vậy \((Q)\cap(ABCD)=CD\).</p></div>

    **Kiểm lại:** \(D\in(Q)\) là kết quả suy từ việc giao tuyến qua \(C\) có hướng \(CD\); không phải tự mặc định mọi cạnh đáy thuộc \((Q)\).

    ### 3.7. Một đường song song mặt phẳng không song song mọi đường trong mặt

    **Đề bài.** Trong tứ diện \(S.ABC\), \(M,N\) lần lượt là trung điểm \(SA,SB\). Biết \(MN\parallel(ABC)\). Có được kết luận \(MN\parallel BC\) không? Hãy tìm vị trí tương đối thực sự của \(MN\) và \(BC\).

    **Phân tích:** Hai đường \(MN\) và \(BC\) không thể cắt nhau vì \(MN\parallel(ABC)\), \(BC\subset(ABC)\). Muốn gọi song song, còn phải chứng minh **đồng phẳng**. Dùng mặt \((SAB)\) đang chứa \(MN\) và điểm \(B\) để kiểm điều đó.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.7"><p><strong>Lời giải.</strong> \(MN\parallel(ABC)\) nên \(MN\cap BC=\varnothing\). Giả sử \(MN\) và \(BC\) đồng phẳng trong \((Q)\). Vì \(B\in BC\subset(Q)\), \((Q)\) chứa đường \(MN\) và điểm \(B\notin MN\), nên \((Q)=(SAB)\). Khi đó \(C\in BC\subset(Q)=(SAB)\), mâu thuẫn bốn đỉnh tứ diện \(S,A,B,C\) không đồng phẳng. Vậy \(MN\) và \(BC\) **chéo nhau**, không song song.</p></div>

    **Kiểm lại:** \(MN\parallel AB\) nhưng \(MN\) **chéo** \(BC\), dù cả \(AB\) và \(BC\) đều nằm trong \((ABC)\). Không đồng nhất quan hệ đường–mặt với quan hệ đường–đường.

    ### 3.8. Mô hình dây căng trên hàng gạch

    **Đề bài.** Người thợ căng một sợi dây thẳng theo hướng của hàng gạch chuẩn, ở phía trên mặt đất. Giả sử đường chứa dây không có điểm nào nằm trên mặt đất. Giải thích quan hệ với mặt phẳng mặt đất, và cho biết vì sao chỉ quan sát một đoạn dây không chạm đất là chưa đủ.

    **Phân tích:** Phân biệt mô hình lí tưởng của đường thẳng vô hạn với đoạn dây thật có hai đầu mút; dựa vào giả thiết không có điểm chung, không dựa vào hình chụp.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.8"><p><strong>Lời giải.</strong> Theo giả thiết, đường thẳng chứa dây và mặt phẳng đất không có điểm chung, nên song song nhau. Nếu chỉ biết một đoạn dây thực tế không chạm đất mà không biết hướng của đường thẳng kéo dài, đường đó vẫn có thể gặp mặt đất ở ngoài đoạn dây; phải có căn cứ về phương song song hoặc điều kiện không có điểm chung.</p></div>

    **Kiểm lại:** Trong mô hình vật lí, dây có bề dày và chiều dài hữu hạn; quan hệ \(a\parallel(P)\) là quan hệ của **đường thẳng toán học** với mặt phẳng.

=== "Lỗi thường gặp"

    ### 4.1. Gộp đường nằm trong mặt với đường song song mặt

    **Dấu hiệu:** Nói \(AB\parallel(ABCD)\) vì \(AB\parallel CD\subset(ABCD)\).

    **Vì sao sai:** \(AB\) nằm luôn trong \((ABCD)\), có vô số điểm chung với mặt, trái định nghĩa song song.

    **Cách sửa:** Kiểm rõ \(a\not\subset(P)\) trước khi dùng dấu hiệu đường song song một đường trong mặt.

    ### 4.2. Coi “không nằm trong” là “song song”

    **Dấu hiệu:** Thấy \(SA\not\subset(ABC)\) rồi kết luận \(SA\parallel(ABC)\).

    **Vì sao sai:** \(SA\) cắt \((ABC)\) tại \(A\). Không nằm trong mặt còn khả năng **cắt tại một điểm**.

    **Cách sửa:** Phân loại bằng số điểm chung; chỉ khi không có điểm chung mới gọi song song.

    ### 4.3. Chỉ nhìn một đoạn không chạm mặt mà kết luận cả đường song song

    **Dấu hiệu:** Đoạn thẳng phía trên mặt vẽ không chạm nên cho cả đường vô hạn song song mặt.

    **Vì sao sai:** Kéo dài đoạn thẳng có thể cắt mặt ngoài vùng hình vẽ.

    **Cách sửa:** Tìm đường nằm trong mặt cùng phương với đường xét và kiểm đường xét không thuộc mặt, hoặc xác nhận không có điểm chung theo giả thiết.

    ### 4.4. Quên điều kiện tồn tại giao tuyến

    **Dấu hiệu:** Với \(a\parallel(P)\), \((Q)\) chứa \(a\), tự đặt \(b=(P)\cap(Q)\) dù chưa biết hai mặt cắt nhau.

    **Vì sao sai:** Nếu \((Q)\parallel(P)\), hai mặt không có giao tuyến.

    **Cách sửa:** Kiểm một điểm chung và hai mặt phân biệt trước khi dùng \(a\parallel b\).

    ### 4.5. Gọi song song với mọi đường nằm trong mặt phẳng

    **Dấu hiệu:** Từ \(a\parallel(P)\), suy \(a\parallel b\) với mọi \(b\subset(P)\).

    **Vì sao sai:** Một đường \(b\) trong mặt có thể khác hướng, chéo nhau với \(a\).

    **Cách sửa:** Muốn kết luận \(a\parallel b\), chứng minh cả hai **đồng phẳng và không có điểm chung** hoặc dùng tính chất giao tuyến khi \(b=(P)\cap(Q)\) và \(a\subset(Q)\).

    ### 4.6. Đoán giao tuyến chỉ từ một điểm chung

    **Dấu hiệu:** Chỉ biết \(C\in(Q)\cap(P)\) rồi vẽ bất kì đường nào qua \(C\) là giao tuyến.

    **Vì sao sai:** Một điểm chung chưa xác định duy nhất một đường giao.

    **Cách sửa:** Khi \((Q)\) chứa \(a\parallel(P)\), giao tuyến **phải song song \(a\)**; dựng đường qua \(C\) theo hướng ấy, rồi kiểm nó nằm trong cả hai mặt.

    **Học tiếp:** [Core và Luyện tập Bài 12](luyen-tap.md) · [Tự luận Chương IV](../../../thu-vien/tu-luan-g11-chuong-iv.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">Đối chiếu văn bản SGK Toán 11 Kết nối tri thức với cuộc sống, tập một, Bài 12 trang in 84–87: (1) Đường thẳng song song với mặt phẳng; (2) Điều kiện và tính chất của đường thẳng song song với mặt phẳng. Dựa trên trang đọc nội dung SGK số hóa và tham khảo bài tập SGK; chưa xem trực quan được đầy đủ từng trang sách in. Một hình B12 có trên main được dùng chung hai tab; một SVG mới so sánh ba vị trí đường–mặt được tạo ở nhánh AUTHORING. Không sao chép lời giải của các Draft PR đã hủy.</p>
~~~~

---

## LESSON B13 — Hai mặt phẳng song song
CANONICAL_PATH: `docs/thpt-preview/sgk/lop-11/chuong-iv/bai-13.md`  
SOURCE_HEAD: `735b44d1d0e2d95027c0b6a1af8d158f15b1b617`  
SOURCE_BLOB: `d688233ca1fc78bed537b91e898e05e1d12dec78`  
REVIEW_TARGET: Chapter IV Lesson 13, source Markdown **verbatim** below. Do not treat it as a second canonical copy.

~~~~markdown
# Bài 13. Hai mặt phẳng song song

<style>
/* Golden semantic 3+1 chỉ áp dụng cho B13; không sửa styles/runtime chung. */
.md-typeset:has([data-g11-b13-authoring]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#e8f7f2;border-color:#a9dccc;border-left-color:#087d69;color:#174137}
.md-typeset:has([data-g11-b13-authoring]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#eaf1fc;border-color:#a5bee5;border-left-color:#4879c2;color:#193d66}
.md-typeset:has([data-g11-b13-authoring]) .thpt-r4-key-formula {background:transparent;color:inherit;border:1px solid #8c9ab0;border-left:4px solid #64748b;border-radius:10px;padding:.75rem 1rem;margin:.65rem 0 1rem}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b13-authoring]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b13-authoring]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b13-authoring]) .thpt-r4-key-formula {background:transparent;color:inherit;border-color:#8c9ab0;border-left-color:#bdc8d8}
</style>

<div class="thpt-r4-screen" data-thpt-r4 data-g11-b13-authoring>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG IV · KẾT NỐI TRI THỨC</p>
<p class="thpt-r4-lead">Hai mặt phẳng không giao nhau, điều kiện và tính chất song song, Thalès trong không gian, cấu tạo của hình lăng trụ và hình hộp.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương IV</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    Khi một người đầu bếp thái củ quả thành những lát phẳng, những mặt cắt lý tưởng có thể song song với nhau. Trong hình học, điều quan trọng không phải hai **miếng hữu hạn** có chạm nhau không mà là hai **mặt phẳng kéo dài vô hạn** có điểm chung hay không. Từ đây ta học bốn mục: cách nhận biết hai mặt song song, điều kiện/tính chất để chứng minh, các tỉ số Thalès và cách những quan hệ đó tạo nên lăng trụ–hình hộp.

    ### 1.1. Hai mặt phẳng song song

    Hãy xem hai mặt đáy của một chiếc hộp: một mặt ở trên, một mặt ở dưới. Hai mặt nằm trong hai mặt phẳng khác nhau nhưng không có điểm chung, nên **song song**. Nếu xoay nghiêng một mặt phẳng, hai mặt dù được vẽ tách nhau vẫn có thể **giao nhau theo một đường** ở xa phần đã vẽ. Nếu cả hai tên cùng chỉ một mặt phẳng, chúng **trùng nhau** chứ không song song.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-B13-01_R01.svg" alt="Hình hộp có hai mặt đáy song song ABCD và A phẩy B phẩy C phẩy D phẩy"><figcaption><strong>Hướng dẫn đọc:</strong> hai đáy màu khác nhau nằm trên hai mặt phẳng **không có điểm chung**. Hình bình hành biểu diễn chỉ là phần hữu hạn của mặt phẳng vô hạn.</figcaption></figure>

    Nhớ ba vị trí của **hai mặt phẳng**: **trùng nhau**; **phân biệt và cắt nhau theo một đường**; hoặc **phân biệt và song song**. Một giao điểm chung đã đủ loại quan hệ song song, nhưng chưa cho biết đường giao cụ thể nếu không có điểm chung thứ hai.

    **Vận dụng.** Hai mặt phẳng \((P),(Q)\) phân biệt cùng chứa điểm \(M\). Chúng có thể song song không? Giao của chúng là gì?

    ??? question "Đối chiếu"

        **Lời giải:** Không. Vì có điểm chung \(M\), chúng không song song; hai mặt phân biệt cắt nhau theo **một đường thẳng đi qua \(M\)**.

    ??? tip "Kiểm lỗi"

        Đừng nhầm hai hình bình hành trên trang giấy với hai mặt phẳng vô hạn. Hai mặt phẳng phân biệt không thể chỉ có một điểm chung.

    ### 1.2. Điều kiện và tính chất của hai mặt phẳng song song

    **Một đường chưa đủ.** Giả sử \((P)\) cắt \((Q)\) theo đường \(c\). Ngay trong \((P)\) có thể chọn một đường \(a\ne c\) song song \(c\). Vì \(a\) không cắt \(c\) và mọi điểm chung của \((P),(Q)\) đều nằm trên \(c\), nên \(a\parallel(Q)\). Như vậy \((P)\) có một đường song song \((Q)\), nhưng **chính hai mặt vẫn cắt nhau**!

    **Vì sao hai đường cắt nhau thì đủ?** Nếu \((P)\) chứa hai đường **cắt nhau** \(a,b\), và cả \(a,b\) đều song song \((Q)\), thì giả sử \((P)\) cắt \((Q)\) theo \(c\). Theo tính chất giao tuyến Bài 12, cả \(a\parallel c\) và \(b\parallel c\), điều ấy trái với \(a\) và \(b\) cắt nhau. Vậy \((P)\parallel(Q)\). Điều kiện **hai đường cắt nhau** bảo đảm ta không chỉ kiểm một hướng.

    **Tính duy nhất.** Qua một điểm \(A\notin(P)\) có đúng **một mặt phẳng song song** với \((P)\). Vì vậy hai mặt phẳng **phân biệt** cùng song song một mặt phẳng thứ ba phải song song nhau: nếu chúng có điểm chung, tính duy nhất sẽ buộc chúng trùng nhau.

    **Giao tuyến qua mặt thứ ba.** Nếu \((P)\parallel(Q)\) và \((R)\) cắt \((P)\) theo \(a\), thì \((R)\) cũng cắt \((Q)\) theo \(b\), với \(a\parallel b\). Trên hình hộp, một mặt bên cắt hai đáy theo hai cạnh đối **song song**. Kết quả giúp định hướng giao tuyến và thiết diện khi dựng hình.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-B13-01_R01.svg" alt="Hai mặt đáy của hình hộp và các cạnh song song tại giao tuyến với mặt bên"><figcaption><strong>Hướng dẫn đọc:</strong> cùng một mặt bên cắt hai đáy theo \(AB\) và \(A'B'\), là hai đường song song. Điều này không dựa vào việc các nét trên giấy trông có cùng độ dốc.</figcaption></figure>

    **Vận dụng.** Chóp \(S.ABCD\): \(M,N,P,Q\) là trung điểm \(SA,SB,SC,SD\). Chứng minh \(M,N,P,Q\) đồng phẳng và mặt qua chúng song song đáy.

    ??? question "Đối chiếu"

        **Lời giải:** \(MN\parallel AB\) và \(NP\parallel BC\) do là đường trung bình các tam giác \(SAB,SBC\). Hai đường \(MN,NP\) cắt tại \(N\), đều ở ngoài đáy và song song mặt đáy; do đó \((MNP)\parallel(ABCD)\). Tương tự \((NPQ)\parallel(ABCD)\). Hai mặt ấy có điểm chung \(N\) và cùng song song đáy, theo tính duy nhất **trùng nhau**; suy ra bốn điểm \(M,N,P,Q\) đồng phẳng.

    ??? tip "Kiểm lỗi"

        Một đường song song mặt đáy chưa đủ chứng minh **cả mặt** song song. Phải tìm **hai đường cắt nhau trong chính mặt cần xét**, mỗi đường song song đáy.

    ### 1.3. Định lí Thalès trong không gian

    Trong tam giác, những đường thẳng song song cắt hai cạnh tạo các đoạn tương ứng tỉ lệ. Tương tự, **ba mặt phẳng đôi một song song** cắt hai đường thẳng bất kì lần lượt theo \(A,B,C\) và \(A',B',C'\) sẽ tạo những cặp đoạn tỉ lệ. Nếu mặt phẳng thứ hai nằm giữa hai mặt còn lại, ta so **đoạn từ mặt thứ nhất tới mặt thứ hai** với **đoạn từ mặt thứ hai tới mặt thứ ba**, theo cùng thứ tự trên cả hai cát tuyến.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B13_THALES_THREE_PLANES_AUTHORING_20261123.svg" alt="Ba mặt phẳng P Q R song song cắt hai cát tuyến tại A B C và A phẩy B phẩy C phẩy"><figcaption><strong>Hướng dẫn đọc:</strong> \(AB\) và \(A'B'\) cùng nằm giữa hai mặt đầu; \(BC\) và \(B'C'\) cùng nằm giữa hai mặt sau. Vì vậy \(AB/BC=A'B'/B'C'\). Không đổi cặp theo cảm giác trên hình.</figcaption></figure>

    **Ví dụ cụ thể.** Nếu \(AB=4\) cm, \(BC=6\) cm và \(A'B'=10\) cm, tỉ số \(4/6=10/B'C'\) cho \(B'C'=15\) cm. Trên hai cát tuyến, các **độ dài tuyệt đối** có thể khác, nhưng tỉ số hai đoạn theo cùng cặp mặt luôn bằng nhau.

    Trong tứ diện \(S.ABC\), một mặt phẳng \((MNK)\parallel(ABC)\) cắt \(SA,SB,SC\) lần lượt tại \(M,N,K\). Khi đó \(SM/SA=SN/SB=SK/SC\): mặt song song đáy cắt các cạnh bên theo **cùng tỉ phần từ đỉnh \(S\)**. Cần giữ cùng điểm gốc \(S\), không nhầm \(SM/MA\) với \(SM/SA\).

    **Vận dụng.** Ba mặt phẳng song song cắt hai cát tuyến tạo \(AB=4\) cm, \(BC=6\) cm, \(A'B'=10\) cm. Tìm \(B'C'\) và nêu lí do lập tỉ số như vậy.

    ??? question "Đối chiếu"

        **Lời giải:** \(\dfrac{AB}{BC}=\dfrac{A'B'}{B'C'}\Rightarrow4/6=10/x\Rightarrow x=15\) cm. Hai đoạn ở tử đều nằm giữa **cùng hai mặt đầu**, hai đoạn mẫu giữa **cùng hai mặt sau**.

    ??? tip "Kiểm lỗi"

        Phải ghép **đúng đoạn tương ứng** và dùng ba mặt phẳng thực sự song song; không tự đặt tỉ số nếu chỉ có hai mặt song song.

    ### 1.4. Hình lăng trụ và hình hộp

    Lấy hai đa giác bằng nhau nằm trên **hai mặt phẳng song song** sao cho các đoạn nối các đỉnh tương ứng **song song nhau**. Hình gồm hai đa giác đáy và các hình bình hành nối cạnh tương ứng gọi là **hình lăng trụ**. Hai đa giác là mặt đáy, các hình bình hành là mặt bên, còn các đoạn nối đỉnh tương ứng là cạnh bên. Các cạnh bên **đôi một song song và bằng nhau**.

    Nếu đáy là **hình bình hành**, lăng trụ đó gọi là **hình hộp**. Hình hộp có **sáu mặt hình bình hành**, các mặt đối diện song song. Hình hộp **không bắt buộc là hình hộp chữ nhật**, vì hình hộp tổng quát không yêu cầu các cạnh bên vuông góc với đáy.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-B13-01_R01.svg" alt="Hình hộp ABCD.A phẩy B phẩy C phẩy D phẩy, hai đáy và bốn cạnh bên"><figcaption><strong>Hướng dẫn đọc:</strong> \(ABCD\), \(A'B'C'D'\) là hai đáy song song, \(AA',BB',CC',DD'\) là cạnh bên. Hình hộp có 8 đỉnh, 12 cạnh và 6 mặt; nét khuất vẫn là cạnh thật.</figcaption></figure>

    **Vận dụng.** Lăng trụ tam giác có bao nhiêu đỉnh, cạnh, mặt? Đáy của một lăng trụ tứ giác là hình bình hành thì tên hình là gì?

    ??? question "Đối chiếu"

        **Lời giải:** Lăng trụ tam giác có \(6\) đỉnh, \(9\) cạnh và \(5\) mặt (2 tam giác đáy, 3 hình bình hành bên). Lăng trụ có đáy hình bình hành là **hình hộp**: 8 đỉnh, 12 cạnh, 6 mặt.

    ??? tip "Kiểm lỗi"

        Đếm cả cạnh khuất; đừng gọi hình lăng trụ nào cũng là lăng trụ **đứng**, và đừng xem hình hộp tổng quát đương nhiên là hình hộp chữ nhật.

=== "Kiến thức SGK"

    ### 2.1. Hai mặt phẳng song song

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Hai mặt phẳng song song</strong><p>Hai mặt phẳng \((P),(Q)\) gọi là <strong>song song</strong> nếu chúng <strong>không có điểm chung</strong>. Viết \((P)\parallel(Q)\). Hai mặt phẳng phân biệt có điểm chung thì cắt nhau theo <strong>một đường thẳng</strong>; hai mặt trùng nhau không gọi song song.</p></div>

    **Nhận biết:** Ba vị trí là **trùng nhau**, **cắt nhau**, **song song**. Không dùng hình bình hành hữu hạn được vẽ để đoán quan hệ của hai mặt phẳng vô hạn.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-B13-01_R01.svg" alt="Hai mặt đáy song song của một hình hộp"><figcaption><strong>Tra hình:</strong> \((ABCD)\parallel(A'B'C'D')\) khi hình là hình hộp; các mặt đáy được tô khác màu và không có điểm chung.</figcaption></figure>

    ### 2.2. Điều kiện và tính chất của hai mặt phẳng song song

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Điều kiện — Dấu hiệu hai mặt phẳng song song</strong><p>Nếu mặt phẳng \((P)\) chứa <strong>hai đường thẳng cắt nhau</strong> \(a,b\) và \(a\parallel(Q)\), \(b\parallel(Q)\), thì \((P)\parallel(Q)\). Một đường song song \((Q)\), hoặc hai đường song song nhau, <strong>không đủ</strong> thay cho hai đường cắt nhau.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Mặt phẳng song song duy nhất qua điểm ngoài mặt</strong><p>Qua điểm \(A\notin(P)\), có <strong>một và chỉ một</strong> mặt phẳng đi qua \(A\) và song song với \((P)\).</p></div>

    **Nhận xét suy ra từ tính duy nhất:** Nếu hai mặt phẳng **phân biệt** cùng song song với một mặt phẳng thứ ba, thì chúng song song nhau. Đây là câu hỏi/hệ quả của SGK, không được đóng nhãn thành một “Tính chất” riêng mới. Nếu hai mặt có điểm chung, tính duy nhất buộc chúng trùng nhau.

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Giao tuyến với mặt phẳng thứ ba</strong><p>Nếu \((P)\parallel(Q)\) và mặt \((R)\) cắt \((P)\) theo \(a\), thì \((R)\) cũng cắt \((Q)\) theo \(b\), với \(a\parallel b\). Các đường \(a,b\) nằm trong cùng mặt \((R)\).</p></div>

    **Cách dùng:** Muốn chứng minh hai mặt song song → chọn **hai đường cắt nhau** trong mặt thứ nhất và chứng minh từng đường song song với mặt thứ hai. Muốn dựng thiết diện qua hai mặt song song → xác định một giao tuyến rồi dựng giao tuyến tương ứng **song song** với nó trong mặt cắt.

    ### 2.3. Định lí Thalès trong không gian

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Định lí — Thalès trong không gian</strong><p>Ba mặt phẳng <strong>đôi một song song</strong> chắn trên hai cát tuyến những đoạn thẳng tương ứng <strong>tỉ lệ</strong>. Nếu chúng cắt hai đường lần lượt tại \(A,B,C\) và \(A',B',C'\), với \(B,B'\) nằm trên mặt phẳng ở giữa, thì \(AB/BC=A'B'/B'C'\).</p></div>

    <div class="thpt-r4-key-formula" role="note"><strong>Công thức — Tỉ số các đoạn tương ứng</strong><p>Với các điểm cắt phân biệt và \(B\) nằm giữa \(A,C\), \(B'\) nằm giữa \(A',C'\): \(\displaystyle\frac{AB}{BC}=\frac{A'B'}{B'C'}\) và \(\displaystyle\frac{AB}{AC}=\frac{A'B'}{A'C'}\).</p><p>Phải giữ <strong>đúng cặp mặt phẳng</strong> của từng đoạn; không tráo vị trí mốc trung gian.</p></div>

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B13_THALES_THREE_PLANES_AUTHORING_20261123.svg" alt="Ba mặt song song và hai cát tuyến với các đoạn tương ứng AB, BC, A phẩy B phẩy, B phẩy C phẩy"><figcaption><strong>Tra hình:</strong> \(AB\) ứng với \(A'B'\), \(BC\) ứng với \(B'C'\). Định lí không yêu cầu hai cát tuyến song song nhau.</figcaption></figure>

    **Áp dụng vào hình chóp:** Nếu \((MNK)\parallel(ABC)\) cắt \(SA,SB,SC\) theo \(M,N,K\), thì \(SM/SA=SN/SB=SK/SC\) (các điểm trong cạnh), suy ra độ dài theo cùng tỉ phần từ đỉnh.

    ### 2.4. Hình lăng trụ và hình hộp

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Hình lăng trụ</strong><p>Hình lăng trụ có hai đa giác đáy tương ứng nằm trên <strong>hai mặt phẳng song song</strong>, các cạnh bên nối đỉnh tương ứng <strong>đôi một song song</strong>, các mặt bên là <strong>hình bình hành</strong>. Hai đa giác là mặt đáy; các đoạn nối đỉnh tương ứng là cạnh bên.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Hình lăng trụ</strong><p>Các cạnh bên <strong>song song và bằng nhau</strong>; các mặt bên là hình bình hành; hai đa giác đáy <strong>song song và bằng nhau</strong>. Không bắt buộc các cạnh bên vuông góc đáy.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Hình hộp</strong><p>Hình lăng trụ có đáy là <strong>hình bình hành</strong> gọi là <strong>hình hộp</strong>. Hình hộp có 6 mặt hình bình hành, 8 đỉnh, 12 cạnh; các cặp mặt đối diện <strong>song song</strong>.</p></div>

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-B13-01_R01.svg" alt="Hình hộp có hai đáy tương ứng song song và các cạnh bên"><figcaption><strong>Tra hình:</strong> \(ABCD\) và \(A'B'C'D'\) là hai đáy; \(AA',BB',CC',DD'\) là cạnh bên, các mặt bên là hình bình hành. Không suy góc vuông từ hình vẽ.</figcaption></figure>

    **Số lượng:** Lăng trụ đáy \(n\)-giác có \(2n\) đỉnh, \(3n\) cạnh, \(n+2\) mặt. Lăng trụ tam giác: 6 đỉnh, 9 cạnh, 5 mặt; hình hộp: 8 đỉnh, 12 cạnh, 6 mặt.

=== "Ví dụ"

    ### 3.1. Khi nào hai mặt phẳng song song?

    **Đề bài.** Hai mặt phẳng phân biệt \((P),(Q)\) có điểm chung \(A\). Chúng có thể song song không?

    **Phân tích:** Kiểm ngay **định nghĩa không có điểm chung**. Nếu có điểm chung, hai mặt phân biệt cắt nhau theo giao tuyến.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.1"><p><strong>Lời giải.</strong> Không. \(A\in(P)\cap(Q)\), nên hai mặt không song song; chúng giao nhau theo **một đường thẳng** qua \(A\).</p></div>

    **Kiểm lại:** Hai mặt phân biệt không thể chỉ có đúng một điểm chung.

    ### 3.2. Dấu hiệu hai đường cắt nhau trong một mặt phẳng

    **Đề bài.** Cho bốn điểm \(A,B,C,D\) không đồng phẳng. Qua \(A\) dựng \(m\parallel BC\) và \(n\parallel BD\). Chứng minh \(\operatorname{mp}(m,n)\parallel(BCD)\).

    **Phân tích:** \(BC,BD\) cắt nhau ở \(B\), nên hai đường \(m,n\) qua \(A\) có hai phương khác nhau và cũng cắt nhau tại \(A\). Kiểm mỗi đường không nằm trong mặt \((BCD)\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.2"><p><strong>Lời giải.</strong> \(A\notin(BCD)\), do đó \(m,n\not\subset(BCD)\). Vì \(m\parallel BC\subset(BCD)\), \(n\parallel BD\subset(BCD)\), suy ra \(m\parallel(BCD)\), \(n\parallel(BCD)\). Hai đường \(m,n\) cắt nhau tại \(A\), nên mặt \(\operatorname{mp}(m,n)\parallel(BCD)\).</p></div>

    **Kiểm lại:** Điều kiện bốn đỉnh không đồng phẳng bảo đảm \(A\notin(BCD)\); điều kiện \(m\ne n\) theo hai hướng \(BC,BD\) khác nhau.

    ### 3.3. Phản ví dụ: Một đường song song chưa đủ

    **Đề bài.** Hai mặt phẳng \((P),(Q)\) cắt nhau theo đường \(c\). Chọn \(a\subset(P)\), \(a\ne c\) và \(a\parallel c\). Chứng minh \(a\parallel(Q)\) nhưng \((P)\) không song song \((Q)\).

    **Phân tích:** \(a\) không gặp \(c\), mà mọi điểm chung của \((P),(Q)\) thuộc \(c\). Vậy \(a\) không gặp \((Q)\), dù hai mặt đang giao nhau.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.3"><p><strong>Lời giải.</strong> Nếu \(a\) có điểm chung \(M\) với \((Q)\), do \(a\subset(P)\), \(M\in(P)\cap(Q)=c\), mâu thuẫn \(a\parallel c\). Do đó \(a\parallel(Q)\). Nhưng \((P)\cap(Q)=c\ne\varnothing\), nên \((P)\) và \((Q)\) **không song song**.</p></div>

    **Kiểm lại:** Hai đường cùng hướng và cùng song song một mặt cũng không đủ để suy **cả mặt** song song: cần hai đường **cắt nhau**.

    ### 3.4. Trung điểm bốn cạnh của hình chóp

    **Đề bài.** Cho hình chóp \(S.ABCD\), \(M,N,P,Q\) là trung điểm \(SA,SB,SC,SD\). Chứng minh \(M,N,P,Q\) đồng phẳng và \((MNP)\parallel(ABCD)\).

    **Phân tích:** Tìm hai đường trung bình cắt nhau trong \((MNP)\) để dùng dấu hiệu; sau đó dùng tính duy nhất mặt song song qua điểm \(N\) hoặc \(P\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.4"><p><strong>Lời giải.</strong> \(MN\parallel AB\), \(NP\parallel BC\). Hai đường \(MN,NP\) cắt nhau tại \(N\), đều song song \((ABCD)\), nên \((MNP)\parallel(ABCD)\). Tương tự \(NP\parallel BC\), \(PQ\parallel CD\) và \(NP,PQ\) cắt ở \(P\), nên \((NPQ)\parallel(ABCD)\). Hai mặt \((MNP)\), \((NPQ)\) cùng chứa \(P,N\) và cùng song song đáy, bởi tính duy nhất chúng trùng nhau. Do đó \(Q\in(MNP)\), tức bốn điểm đồng phẳng.</p></div>

    **Kiểm lại:** \(MN,NP\) là hai đường phân biệt cắt nhau; các điểm trung điểm không thuộc đáy, nên các đường trung bình song song đáy chứ không nằm trong đáy.

    ### 3.5. Giao tuyến của mặt thứ ba

    **Đề bài.** Cho \((P)\parallel(Q)\). Một mặt phẳng \((R)\) cắt \((P)\) theo đường \(a\). Xác định vị trí \((R)\) với \((Q)\), và hai giao tuyến.

    **Phân tích:** Dùng tính chất **một mặt cắt hai mặt song song**, không suy từ hình vẽ.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.5"><p><strong>Lời giải.</strong> \((R)\) cũng cắt \((Q)\) theo một giao tuyến \(b\). Hai đường \(a,b\) cùng nằm trong \((R)\), thuộc hai mặt phẳng song song nên không có điểm chung, suy ra \(a\parallel b\).</p></div>

    **Kiểm lại:** \((R)\) phải **cắt** \((P)\) chứ không trùng \((P)\); khi đó mới có giao tuyến \(a\) xác định.

    ### 3.6. Thalès: Tìm đoạn tương ứng thứ hai

    **Đề bài.** Ba mặt phẳng đôi một song song cắt hai cát tuyến theo thứ tự \(A,B,C\) và \(A',B',C'\). Biết \(AB=4\) cm, \(BC=6\) cm, \(A'B'=10\) cm. Tính \(B'C'\).

    **Phân tích:** Hai tử số là đoạn giữa **cùng hai mặt đầu**, hai mẫu là đoạn giữa **cùng hai mặt sau**.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.6"><p><strong>Lời giải.</strong> \(\frac{AB}{BC}=\frac{A'B'}{B'C'}\Rightarrow\frac4{6}=\frac{10}{B'C'}\). Suy ra \(B'C'=15\) cm.</p></div>

    **Kiểm lại:** \(4/6=10/15=2/3\); kết quả là một **độ dài** nên có đơn vị cm.

    ### 3.7. Cắt các cạnh bên tứ diện theo cùng tỉ phần

    **Đề bài.** Tứ diện \(S.ABC\), \((MNK)\parallel(ABC)\) cắt \(SA,SB,SC\) tại \(M,N,K\). Biết \(SM/SA=1/3\), \(SB=15\) cm, \(SC=18\) cm. Tìm \(SN,SK\).

    **Phân tích:** Vì hai mặt song song, các đường thẳng \(SA,SB,SC\) cắt chúng theo **tỉ số tương ứng**; có thể nhìn qua định lí Thalès phẳng trong các mặt tam giác.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.7"><p><strong>Lời giải.</strong> \(\frac{SM}{SA}=\frac{SN}{SB}=\frac{SK}{SC}=\frac13\), nên \(SN=15/3=5\) cm và \(SK=18/3=6\) cm.</p></div>

    **Kiểm lại:** Các kết quả nhỏ hơn cạnh chứa chúng; không nhầm \(SN/NB\) với \(SN/SB\).

    ### 3.8. Đếm đỉnh, cạnh và mặt của lăng trụ

    **Đề bài.** Lăng trụ tam giác \(ABC.A'B'C'\) có bao nhiêu đỉnh, cạnh, mặt? Hình hộp \(ABCD.A'B'C'D'\) có các mặt thuộc loại hình gì?

    **Phân tích:** Đếm hai đáy và các mặt bên; không bỏ sót cạnh khuất trong hình chiếu.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.8"><p><strong>Lời giải.</strong> Lăng trụ tam giác có \(6\) đỉnh, \(9\) cạnh và \(5\) mặt (2 tam giác, 3 hình bình hành). Hình hộp có \(8\) đỉnh, \(12\) cạnh, \(6\) mặt; **cả sáu mặt** là hình bình hành.</p></div>

    **Kiểm lại:** Hình hộp tổng quát không nhất thiết là hình hộp chữ nhật: không tự suy các góc vuông từ hình vẽ.

=== "Lỗi thường gặp"

    ### 4.1. Nhìn hai mặt hữu hạn không chạm rồi gọi song song

    **Dấu hiệu:** Hai hình bình hành tách nhau trên giấy nên kết luận hai mặt phẳng song song.

    **Vì sao sai:** Các mặt phẳng vô hạn có thể kéo dài và cắt nhau theo một đường.

    **Cách sửa:** Dùng định nghĩa **không có điểm chung** hoặc chứng minh bằng dấu hiệu toán học.

    ### 4.2. Chỉ có một đường song song mặt phẳng thứ hai

    **Dấu hiệu:** \(a\subset(P),a\parallel(Q)\) nên nói \((P)\parallel(Q)\).

    **Vì sao sai:** \((P)\) vẫn có thể cắt \((Q)\) theo \(c\parallel a\).

    **Cách sửa:** Tìm **hai đường cắt nhau** trong \((P)\), từng đường song song \((Q)\).

    ### 4.3. Quên điều kiện “phân biệt” ở tính chất cùng song song mặt thứ ba

    **Dấu hiệu:** Hai mặt cùng song song \((R)\) nên gọi chúng song song dù có thể trùng nhau.

    **Vì sao sai:** Mặt phẳng song song qua một điểm ngoài \((R)\) là duy nhất; hai mặt cùng qua điểm ấy có thể là một.

    **Cách sửa:** Kiểm hai mặt **phân biệt**; nếu có điểm chung thì kết luận trùng, nếu phân biệt thì song song.

    ### 4.4. Ghép sai cặp đoạn trong Thalès không gian

    **Dấu hiệu:** Biết các độ dài 4, 6, 10 rồi tính \(B'C'=4\cdot10/6\).

    **Vì sao sai:** Tráo các khoảng giữa hai cặp mặt khác nhau.

    **Cách sửa:** Viết đúng \(\frac{AB}{BC}=\frac{A'B'}{B'C'}\) và kiểm thứ tự các mặt trước khi thay số.

    ### 4.5. Gọi mọi hình lăng trụ là hình lăng trụ đứng

    **Dấu hiệu:** Cho các cạnh bên phải vuông góc đáy mới được gọi lăng trụ.

    **Vì sao sai:** Lăng trụ tổng quát chỉ yêu cầu hai đáy song song và các cạnh bên tương ứng song song, bằng nhau.

    **Cách sửa:** Phân biệt **lăng trụ** với **lăng trụ đứng**; hình hộp tổng quát không bắt buộc là hình hộp chữ nhật.

    ### 4.6. Mặt thứ ba cắt mặt đầu nhưng lại cho song song mặt cuối

    **Dấu hiệu:** \((P)\parallel(Q)\), \((R)\) cắt \((P)\) nhưng \((R)\parallel(Q)\).

    **Vì sao sai:** Tính chất cho \((R)\) cũng cắt \((Q)\), hai giao tuyến song song nhau.

    **Cách sửa:** Gọi \(a=(R)\cap(P)\), \(b=(R)\cap(Q)\), rồi dùng \(a\parallel b\).

    **Học tiếp:** [Core và Luyện tập Bài 13](luyen-tap.md) · [Tự luận Chương IV](../../../thu-vien/tu-luan-g11-chuong-iv.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">Nguồn: SGK Toán 11 Kết nối tri thức, tập một, Bài 13 trang in 88–94. Bốn mục gốc: Hai mặt phẳng song song; Điều kiện và tính chất; Định lí Thalès trong không gian; Hình lăng trụ và hình hộp. Đã đối chiếu phần văn bản SGK số hóa; ảnh render đầy đủ trang PDF chưa có bằng chứng. Hình hộp dùng SVG canonical B13 từ main, hình Thalès là SVG mới của AUTHORING. Hai tab cùng dùng nguồn hình, chú giải theo mục đích.</p>
~~~~

---

## LESSON B14 — Phép chiếu song song
CANONICAL_PATH: `docs/thpt-preview/sgk/lop-11/chuong-iv/bai-14.md`  
SOURCE_HEAD: `405545b5d18b54b71f252f71291f941f5ede7b6e`  
SOURCE_BLOB: `5b829b3dd533852d7c88358c1a430d716a941d93`  
REVIEW_TARGET: Chapter IV Lesson 14, source Markdown **verbatim** below. Do not treat it as a second canonical copy.

~~~~markdown
# Bài 14. Phép chiếu song song

<style>
/* Chỉ scoped B14, không đổi Golden CSS/JS chung. */
.md-typeset:has([data-g11-b14-authoring]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#e8f7f2;border-color:#a9dccc;border-left-color:#087d69;color:#174137}
.md-typeset:has([data-g11-b14-authoring]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#eaf1fc;border-color:#a5bee5;border-left-color:#4879c2;color:#193d66}
.md-typeset:has([data-g11-b14-authoring]) .thpt-r4-key-formula {background:transparent;color:inherit;border:1px solid #8c9ab0;border-left:4px solid #64748b;border-radius:10px;padding:.75rem 1rem;margin:.65rem 0 1rem}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b14-authoring]) .thpt-r4-knowledge-conclusion.thpt-r4-concept-card {background:#193d36;border-color:#447e70;border-left-color:#76dfc7;color:#e9fff7}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b14-authoring]) .thpt-r4-knowledge-conclusion.thpt-r4-rule-card {background:#203551;border-color:#45658a;border-left-color:#8cb4ed;color:#ecf5ff}
[data-md-color-scheme="slate"] .md-typeset:has([data-g11-b14-authoring]) .thpt-r4-key-formula {background:transparent;color:inherit;border-color:#8c9ab0;border-left-color:#bdc8d8}
</style>

<div class="thpt-r4-screen" data-thpt-r4 data-g11-b14-authoring>
<p class="thpt-r4-eyebrow">TOÁN 11 · CHƯƠNG IV · KẾT NỐI TRI THỨC</p>
<p class="thpt-r4-lead">Từ bóng cửa sổ tới phép chiếu song song: ảnh được dựng thế nào, giữ quan hệ gì và vì sao hình biểu diễn không cho phép đo góc, đo độ dài thật.</p>
<nav class="thpt-r4-lesson-tabs"><a href="../">Chương IV</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra cuối chương</a></nav>
</div>

=== "Khám phá kiến thức"

    Khi ánh nắng chiếu qua khung cửa sổ, bóng của mỗi điểm trên khung rơi xuống một vị trí ở sàn nhà. Trong mô hình toán học, các tia nắng được coi là **cùng phương**. Thay vì đo bóng theo cảm giác, ta dùng **phép chiếu song song** để dựng ảnh của từng điểm, rồi từ các ảnh ấy vẽ hình biểu diễn cả vật thể. Bài học có ba mục theo SGK: phép chiếu, các tính chất, hình biểu diễn.

    ### 1.1. Phép chiếu song song

    Giả sử sàn nhà là mặt phẳng \((P)\), còn phương nắng được xác định bởi đường thẳng \(\Delta\) **cắt \((P)\) tại đúng một điểm**. Qua điểm \(M\) trên khung cửa, vẽ một đường thẳng cùng phương \(\Delta\). Đường này cắt \((P)\) tại duy nhất một điểm \(M'\): đó là **hình chiếu song song** của \(M\). Nếu \(M\) đã nằm trên \((P)\), điểm ảnh chính là \(M\). Vì mọi điểm đều được chiếu theo **một phương cố định**, ta nhận được hình chiếu của cả khung cửa bằng tập hợp các hình chiếu từng điểm.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-B14-01_R01.svg" alt="Hình ABCD và ảnh A phẩy B phẩy C phẩy D phẩy nối bởi các đường chiếu cùng phương"><figcaption><strong>Đọc hình:</strong> đường \(AA'\), \(BB'\), \(CC'\), \(DD'\) đều có cùng phương chiếu. Hình dưới là **ảnh** của hình trên, không phải hình giống hệt theo mọi độ dài/góc. Chọn một điểm \(M\) bất kì, ảnh \(M'\) được dựng bằng đường qua \(M\) cùng phương ấy tới mặt chiếu.</figcaption></figure>

    **Vì sao phải hạn chế phương chiếu?** Nếu \(\Delta\) song song với \((P)\), đường chiếu qua một điểm ngoài \((P)\) có thể không gặp mặt chiếu, nên không xác định được ảnh như mong muốn. Vì thế trong phần học này SGK chọn đường chỉ phương \(\Delta\) **cắt mặt phẳng chiếu tại đúng một điểm** (không nằm trong mặt phẳng chiếu và không song song với mặt phẳng chiếu). Đây là điều kiện để ảnh của **mỗi điểm** có thể xác định.

    **Vận dụng.** Mặt chiếu là \((P)\), phương chiếu \(\Delta\) cắt \((P)\). Điểm \(A\in(P)\); điểm \(B\notin(P)\). Ảnh của \(A\) là gì, và cần dựng thế nào để được ảnh \(B'\) của \(B\)?

    ??? question "Đối chiếu"

        **Lời giải:** Vì \(A\) nằm sẵn trên mặt chiếu, \(A'=A\). Qua \(B\), vẽ đường thẳng song song với phương \(\Delta\) (hoặc trùng \(\Delta\) nếu \(B\in\Delta\)); giao duy nhất với \((P)\) là \(B'\). Không chọn đường chiếu khác phương nắng.

    ??? tip "Kiểm lỗi"

        Nếu chọn mỗi điểm một hướng riêng, đó không còn là **cùng một phép chiếu song song**. Nếu phương \(\Delta\parallel(P)\), từ điểm ngoài mặt không dựng được giao điểm; phải kiểm điều kiện trước.

    ### 1.2. Tính chất của phép chiếu song song

    Hãy xét một thanh thẳng \(AB\) có trung điểm \(M\). Dựng các ảnh \(A',M',B'\). Trong trường hợp thanh **không cùng phương chiếu**, ba ảnh vẫn **thẳng hàng theo thứ tự ấy**; vì \(AM=MB\), ảnh cũng có \(A'M'=M'B'\). Vậy **trung điểm được giữ lại**, mặc dù độ dài \(A'M'\) chưa chắc bằng độ dài \(AM\). Phép chiếu giữ **tỉ lệ** trên cùng một đường, không nhất thiết giữ từng độ dài.

    Nếu hai thanh **song song** \(a,b\), hình chiếu của chúng có thể là hai đường **song song hoặc trùng nhau**. Vì sao trùng? Có thể hai thanh nằm trên hai vị trí khác nhau nhưng trên cùng một mặt phẳng song song với phương chiếu; các tia chiếu đưa chúng về đúng một đường trên mặt chiếu. Trường hợp này hoàn toàn khác với **hai đường giao nhau**.

    Tuy nhiên có một ngoại lệ dễ bị bỏ qua khi nêu tính chất: **một đường thẳng cùng phương với phương chiếu có thể bị co thành một điểm**. Khi ấy không thể nói ảnh của nó vẫn là đường thẳng, hoặc lấy tỉ số hai đoạn ảnh có độ dài dương. Để áp dụng các phát biểu SGK về đường, tia, đoạn và tỉ số, ta phải xét các **hình chiếu không suy biến**.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B14_PROJECTION_DEGENERACY_AUTHORING_20261123.svg" alt="Bên trái đoạn AB không cùng phương chiếu cho ảnh là đoạn A phẩy B phẩy; bên phải đường MN cùng phương chiếu co thành một điểm K"><figcaption><strong>Đọc hình:</strong> trái: ảnh của hai điểm phân biệt \(A,B\) vẫn phân biệt nên có đoạn \(A'B'\). Phải: \(M,N\) khác nhau nhưng đường \(MN\) cùng phương chiếu, nên \(M'=N'=K\). Đây là ngoại lệ cần kiểm trước khi dùng tỉ số hình chiếu.</figcaption></figure>

    Ví dụ nếu \(A,M,B\) thẳng hàng theo thứ tự và \(AM:MB=2:3\), ảnh không suy biến sẽ có \(A'M':M'B'=2:3\). Nếu \(AB=10\) cm, \(AM=4\) cm, \(MB=6\) cm; nhưng nếu ảnh \(A'B'=15\) cm thì \(A'M'=6\) cm, \(M'B'=9\) cm — các độ dài đã đổi, còn **tỉ số vẫn 2:3**. Không được tự ghi \(A'M'=4\) cm.

    **Vận dụng.** Cho \(A,M,B\) thẳng hàng theo thứ tự, \(AM:MB=2:3\). Phép chiếu song song cho \(A'\ne B'\) và \(A'B'=20\) cm. Tính \(A'M'\) và \(M'B'\). Nếu phương chiếu trùng phương \(AB\), em có được thực hiện phép chia tỉ số ấy không?

    ??? question "Đối chiếu"

        **Lời giải:** Các ảnh giữ tỉ số \(A'M'/M'B'=2/3\) và \(A'M'+M'B'=20\), nên \(A'M'=8\) cm, \(M'B'=12\) cm. Nếu \(AB\) cùng phương chiếu, \(A'=M'=B'\), các đoạn ảnh đều dài \(0\), tỉ số \(0/0\) **không xác định**; không áp dụng công thức.

    ??? tip "Kiểm lỗi"

        Phép chiếu không bảo toàn **độ dài**, nên không đặt \(A'M'=AM\). Khi ảnh bị co thành điểm, không dùng tỉ số đoạn ảnh: cần kiểm \(A'\ne B'\) trước.

    ### 1.3. Hình biểu diễn của một hình không gian

    Bài 10 đã dùng các hình vẽ trên giấy để thể hiện khối trong không gian. Nay ta hiểu cách tạo chúng: **hình biểu diễn** là hình chiếu song song trên một mặt phẳng, hoặc một hình **đồng dạng** với hình chiếu đó. Mục đích không phải làm cho tất cả kích thước đúng như vật thật, mà giúp nhìn được cấu trúc, quan hệ điểm–đường–mặt và các cạnh bị che khuất.

    Khi một hình phẳng nằm trong mặt phẳng **không song song với phương chiếu**, ảnh của các tam giác vẫn là tam giác; hình vuông, hình chữ nhật, hình thoi và hình bình hành cho ảnh là **hình bình hành**; hình thang có cặp cạnh đáy song song vẫn biểu diễn bằng hình thang với hai đáy tương ứng song song, và **tỉ số hai đáy được giữ**; hình tròn có hình biểu diễn là **hình elip** (hình tròn có thể là trường hợp đặc biệt). Không được nhìn hình bình hành rồi khẳng định vật thật không phải hình vuông.

    Để vẽ hình chóp \(S.ABCD\) có đáy là hình bình hành, ta vẽ một hình bình hành \(ABCD\) thể hiện đáy, chọn điểm \(S\) ngoài mặt biểu diễn đáy, rồi nối \(S\) với bốn đỉnh. Nét liền thể hiện cạnh nhìn thấy, nét đứt thể hiện cạnh khuất theo góc quan sát đã chọn. Khi hình biểu diễn là kết quả phép chiếu hợp lệ, sự thẳng hàng và tỉ số trên một đường vẫn được giữ; nhưng **góc vuông và độ dài nhìn trên giấy không phải góc và độ dài thực**.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-B14-01_R01.svg" alt="Các cạnh song song của hình bình hành vẫn cho ảnh song song trên mặt chiếu"><figcaption><strong>Đọc hình:</strong> các cạnh đối diện của hình bình hành nguồn tiếp tục có ảnh song song; các góc và độ dài có thể thay đổi. Dùng hình để minh họa **bảo toàn cấu trúc**, không dùng thước đo ảnh để khẳng định số đo vật gốc.</figcaption></figure>

    **Vận dụng.** Một hình vuông \(ABCD\) có hai đường chéo cắt nhau tại \(O\). Hình biểu diễn không suy biến của nó là hình bình hành \(A'B'C'D'\), hai đường chéo cắt nhau tại \(O'\). Hãy giải thích vì sao \(O'\) vẫn là trung điểm của \(A'C'\) và \(B'D'\), dù các góc có thể không còn vuông.

    ??? question "Đối chiếu"

        **Lời giải:** \(O\) là trung điểm của \(AC\) và \(BD\), nên \(AO:OC=1:1\), \(BO:OD=1:1\). Phép chiếu không suy biến giữ sự thẳng hàng và các tỉ số ấy, suy ra \(A'O'=O'C'\) và \(B'O'=O'D'\). Do đó \(O'\) là giao điểm hai đường chéo và trung điểm của cả hai. Không cần giả định hình chiếu còn là hình vuông.

    ??? tip "Kiểm lỗi"

        Nếu lấy hai cạnh ảnh đo bằng thước rồi cho bằng cạnh thật, hoặc dựa vào hình ảnh để khẳng định góc \(90^\circ\), em đã dùng một tính chất phép chiếu **không bảo toàn**. Hãy ưu tiên quan hệ thuộc, song song và tỉ số đúng điều kiện.

=== "Kiến thức SGK"

    ### 2.1. Phép chiếu song song

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Định nghĩa — Phép chiếu song song</strong><p>Cho mặt phẳng \((P)\) và một đường thẳng \(\Delta\) <strong>cắt \((P)\) tại đúng một điểm</strong> xác định phương chiếu. Với mỗi điểm \(M\), gọi \(M'\) là giao điểm của \((P)\) với đường đi qua \(M\) song song \(\Delta\) (nếu \(M\in\Delta\), lấy chính \(\Delta\)). Ánh xạ \(M\mapsto M'\) là <strong>phép chiếu song song</strong> lên \((P)\) theo phương \(\Delta\); \(M'\) là <strong>hình chiếu song song</strong> của \(M\), \((P)\) là <strong>mặt phẳng chiếu</strong>.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khái niệm — Hình chiếu của một hình</strong><p>Hình chiếu của hình \(H\) qua phép chiếu song song là tập hợp tất cả hình chiếu \(M'\) của các điểm \(M\in H\). Nếu \(M\in(P)\) thì \(M'=M\). Mỗi điểm được chiếu theo <strong>cùng một phương</strong> cố định.</p></div>

    **Điều kiện bắt buộc:** SGK xét đường chỉ phương \(\Delta\) **cắt \((P)\) tại đúng một điểm** để đường qua điểm bất kì cùng phương \(\Delta\) có giao điểm **duy nhất** với mặt chiếu. Nếu phương chiếu song song với mặt chiếu, phép dựng ảnh điểm ngoài mặt có thể không thực hiện được.

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-B14-01_R01.svg" alt="Các điểm tương ứng được nối theo cùng một phương chiếu tới mặt chiếu"><figcaption><strong>Tra hình:</strong> mỗi đường nối \(A\) với \(A'\), \(B\) với \(B'\), ... có cùng phương; ảnh của cả hình lấy từ ảnh của từng điểm. Không kết luận bảo toàn chiều dài cạnh.</figcaption></figure>

    ### 2.2. Tính chất của phép chiếu song song

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Ba nhóm tính chất SGK của phép chiếu song song</strong><p><strong>1. Thẳng hàng, thứ tự:</strong> ảnh của ba điểm thẳng hàng vẫn thẳng hàng và giữ thứ tự; ảnh của đường, tia, đoạn là đường, tia, đoạn <strong>khi đường chứa chúng không cùng phương chiếu</strong>.</p><p><strong>2. Song song:</strong> ảnh của hai đường thẳng song song là hai đường song song hoặc trùng nhau <strong>khi ảnh không suy biến thành điểm</strong>.</p><p><strong>3. Tỉ số:</strong> giữ tỉ số độ dài của hai đoạn cùng nằm trên một đường hoặc hai đường song song <strong>khi các đoạn ảnh có độ dài khác 0</strong>.</p></div>

    **Cảnh báo suy biến:** Nếu một đường **cùng phương chiếu**, toàn bộ đường có thể chiếu thành **một điểm**. Trong trường hợp đó, các câu “ảnh là một đường” và “tỉ số độ dài được giữ” không áp dụng theo nghĩa không suy biến. Cần phân biệt điều kiện để **phép chiếu điểm tồn tại** với điều kiện để **ảnh của đường không co lại**.

    <div class="thpt-r4-key-formula" role="note"><strong>Công thức — Tỉ số đoạn thẳng tương ứng</strong><p>Với \(A,M,B\) thẳng hàng theo thứ tự, \(M\) nằm giữa \(A,B\), và hình chiếu \(A',M',B'\) <strong>không suy biến</strong>, ta có \(\dfrac{A'M'}{M'B'}=\dfrac{AM}{MB}\). Nếu \(AM=MB\), thì \(A'M'=M'B'\): ảnh của trung điểm là trung điểm đoạn ảnh.</p></div>

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/G11_B14_PROJECTION_DEGENERACY_AUTHORING_20261123.svg" alt="So sánh một đường cho ảnh là đường với một đường cùng phương chiếu co thành một điểm"><figcaption><strong>Tra hình:</strong> trái ảnh \(A'B'\) vẫn là một đoạn; phải \(M'=N'=K\), không còn đoạn ảnh có độ dài dương để tính tỉ số. Kiểm trường hợp này trước khi áp dụng công thức.</figcaption></figure>

    **Không được suy ra:** Phép chiếu song song nhìn chung **không bảo toàn độ dài, góc, tính vuông góc hoặc dạng hình tròn thành đường tròn**. Học sinh chỉ được dùng những quan hệ thật sự được tính chất bảo đảm.

    ### 2.3. Hình biểu diễn của một hình không gian

    <div class="thpt-r4-knowledge-conclusion thpt-r4-concept-card" role="note"><strong>Khái niệm — Hình biểu diễn của hình không gian</strong><p>Hình biểu diễn của một hình trong không gian là <strong>hình chiếu song song của hình đó trên một mặt phẳng theo một phương nào đó hoặc hình đồng dạng với hình chiếu ấy</strong>. Hình biểu diễn phục vụ việc đọc cấu trúc, không phải bản vẽ bảo toàn mọi góc và độ dài.</p></div>

    <div class="thpt-r4-knowledge-conclusion thpt-r4-rule-card" role="note"><strong>Tính chất — Hình biểu diễn của các hình phẳng không suy biến</strong><p>Khi mặt phẳng chứa hình <strong>không song song với phương chiếu</strong>, hình biểu diễn của <strong>tam giác</strong> là tam giác; của <strong>hình vuông, chữ nhật, thoi, bình hành</strong> là hình bình hành; của <strong>hình thang</strong> là hình thang với hai đáy tương ứng song song, giữ <strong>tỉ số hai đáy</strong>; của <strong>hình tròn</strong> là hình elip (có thể là hình tròn ở trường hợp đặc biệt).</p></div>

    **Cách đọc:** Dùng cạnh và đỉnh tương ứng, quan hệ thẳng hàng, song song và tỉ số hợp lệ để dựng/kiểm hình. Với khối chóp/lăng trụ, các cạnh thấy được thường vẽ nét liền, cạnh khuất nét đứt. Một hình bình hành trên giấy **có thể biểu diễn hình vuông**, nên không suy luận góc thật bằng góc đo của bản vẽ.

    **Ví dụ tra cứu:** Hình vuông \(ABCD\) với tâm \(O\) cho hình biểu diễn \(A'B'C'D'\) là hình bình hành. Vì hai đường chéo của hình vuông có trung điểm chung \(O\), hình chiếu \(O'\) vẫn là trung điểm của cả \(A'C'\), \(B'D'\), theo tính chất giữ tỉ số (khi không suy biến).

    <figure class="thpt-r4-plot"><img loading="lazy" src="../../../../../assets/images/thpt/FIG-G11-B14-01_R01.svg" alt="Hình nguồn và hình chiếu có các cạnh song song tương ứng"><figcaption><strong>Tra hình:</strong> bảo toàn quan hệ các cạnh song song khi ảnh không suy biến; chú ý phân biệt hình **biểu diễn** với mặt phẳng chiếu và với kích thước thật của vật thể.</figcaption></figure>

=== "Ví dụ"

    ### 3.1. Dựng ảnh của một điểm

    **Đề bài.** Cho \(\Delta\) cắt mặt chiếu \((P)\) tại đúng một điểm. Điểm \(A\) nằm trong \((P)\), điểm \(B\notin(P)\). Hãy mô tả cách tìm \(A',B'\).

    **Phân tích:** Một điểm nằm sẵn trên mặt chiếu không đổi. Với điểm ngoài mặt, phải vẽ đường qua nó **theo đúng phương đã cho**, không chọn tia bất kì.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.1"><p><strong>Lời giải.</strong> \(A'=A\). Qua \(B\), vẽ đường thẳng \(d\) song song \(\Delta\) (hoặc trùng \(\Delta\) khi \(B\in\Delta\)); \(d\) cắt \((P)\) tại đúng một điểm \(B'\). Đó là ảnh của \(B\).</p></div>

    **Kiểm lại:** Cả hai điểm dùng **cùng phương \(\Delta\)**. Nếu \(\Delta\) nằm trong hoặc song song với mặt chiếu, cách dựng qua điểm ngoài có thể không có giao duy nhất.

    ### 3.2. Ảnh của trung điểm

    **Đề bài.** \(M\) là trung điểm \(AB\), đường \(AB\) **không cùng phương chiếu**. Chứng minh \(M'\) là trung điểm \(A'B'\).

    **Phân tích:** Phép chiếu không giữ độ dài \(AM\), nhưng giữ tỉ số hai đoạn **trên cùng một đường không suy biến**.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.2"><p><strong>Lời giải.</strong> Vì \(M\in AB\) và \(AM/MB=1\), ảnh \(A',M',B'\) thẳng hàng, \(M'\) nằm giữa \(A',B'\), đồng thời \(A'M'/M'B'=AM/MB=1\). Do đó \(A'M'=M'B'\) và \(M'\) là trung điểm của \(A'B'\).</p></div>

    **Kiểm lại:** Nếu \(AB\) cùng phương chiếu, \(A'=M'=B'\) thì ảnh không còn là đoạn có hai đầu phân biệt; không gọi một điểm là trung điểm của đoạn độ dài 0 trong bài toán này.

    ### 3.3. Giữ tỉ số nhưng không giữ độ dài

    **Đề bài.** \(A,M,B\) thẳng hàng theo thứ tự và \(AM:MB=2:3\). Một phép chiếu song song không suy biến cho \(A'B'=20\) cm. Tìm \(A'M'\), \(M'B'\).

    **Phân tích:** Cần chia đoạn ảnh theo tỉ số \(2:3\), không lấy hai độ dài thật ban đầu làm độ dài ảnh.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.3"><p><strong>Lời giải.</strong> Ta có \(A'M'/M'B'=2/3\), và \(A'M'+M'B'=20\). Tổng 5 phần bằng nhau ứng với 20 cm; một phần dài 4 cm. Vậy \(A'M'=8\) cm, \(M'B'=12\) cm.</p></div>

    **Kiểm lại:** \(8/12=2/3\), \(8+12=20\). Không cần biết \(AM\) và \(MB\) dài bao nhiêu trong thực tế.

    ### 3.4. Hai đoạn trên hai đường song song

    **Đề bài.** Hai đoạn thẳng \(AB,CD\) nằm trên hai đường song song, có \(AB=6\) cm, \(CD=9\) cm. Hình chiếu \(A'B'\), \(C'D'\) **đều không suy biến**, và \(A'B'=4\) cm. Tìm \(C'D'\).

    **Phân tích:** SGK cho phép giữ **tỉ số hai đoạn trên hai đường song song**. Điều đó không có nghĩa mỗi độ dài tự giữ nguyên.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.4"><p><strong>Lời giải.</strong> \(\dfrac{A'B'}{C'D'}=\dfrac{AB}{CD}=\dfrac69=\dfrac23\), nên \(C'D'=\dfrac{4\cdot3}{2}=6\) cm.</p></div>

    **Kiểm lại:** Tỉ số \(4/6=2/3\), giống \(6/9\); độ dài ảnh có thể thay đổi bởi cùng hệ số co giãn dọc các đường đồng phương.

    ### 3.5. Trường hợp suy biến: đường thành một điểm

    **Đề bài.** Cho hai điểm phân biệt \(M,N\) trên một đường thẳng \(d\) cùng phương chiếu, trong phép chiếu lên \((P)\). Hình chiếu của \(M,N\) có nhất thiết phân biệt không?

    **Phân tích:** Hai đường qua \(M,N\) cùng phương chiếu không phải hai đường riêng: chúng **trùng nhau** vì cả \(M,N\) nằm trên \(d\).

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.5"><p><strong>Lời giải.</strong> Đường chiếu qua \(M\) và qua \(N\) đều là \(d\); vì \(d\) cắt \((P)\) tại cùng một điểm \(K\), nên \(M'=N'=K\). Hình chiếu của cả đường \(d\) là **một điểm**, không phải một đường thẳng.</p></div>

    **Kiểm lại:** \(M'N'=0\), vì thế không tính tỉ số bằng cách chia cho một đoạn ảnh dài 0.

    ### 3.6. Hình vuông có thể cho ảnh hình bình hành

    **Đề bài.** Hình vuông \(ABCD\) có hai đường chéo cắt tại \(O\). Hình chiếu không suy biến là \(A'B'C'D'\). Giải thích vì sao ảnh là hình bình hành và \(O'\) là tâm.

    **Phân tích:** Hình vuông có hai cặp cạnh đối diện song song; phép chiếu giữ tính song song, đồng thời bảo toàn trung điểm trên hai đường chéo.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.6"><p><strong>Lời giải.</strong> \(AB\parallel CD\) và \(BC\parallel AD\), nên \(A'B'\parallel C'D'\), \(B'C'\parallel A'D'\). Vậy \(A'B'C'D'\) là hình bình hành. Vì \(AO=OC\), \(BO=OD\), nên \(A'O'=O'C'\), \(B'O'=O'D'\), do tính chất giữ tỉ số. \(O'\) là giao điểm và trung điểm hai đường chéo ảnh.</p></div>

    **Kiểm lại:** Kết luận hình bình hành **không đồng nghĩa** hình chiếu còn là hình vuông hoặc mọi góc đều \(90^\circ\).

    ### 3.7. Vẽ hình biểu diễn của hình thang có tỉ số hai đáy

    **Đề bài.** Hình thang \(ABCD\) có \(AB\parallel CD\), \(AB=2CD\). Khi vẽ hình biểu diễn không suy biến \(A'B'C'D'\), cần giữ các thông tin nào?

    **Phân tích:** Phép chiếu giữ song song của hai đáy và **tỉ số độ dài** vì chúng nằm trên hai đường song song; không nhất thiết giữ góc hoặc từng độ dài tuyệt đối.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.7"><p><strong>Lời giải.</strong> Vẽ \(A'B'\parallel C'D'\) với \(A'B'=2C'D'\); hai cạnh bên \(A'D',B'C'\) nối tương ứng. Không yêu cầu các góc, đường cao hay độ dài ảnh bằng vật gốc.</p></div>

    **Kiểm lại:** Chọn \(C'D'=3\) cm, \(A'B'=6\) cm là hợp lệ về tỉ số; không suy từ đó đáy thật dài 3 cm hoặc 6 cm.

    ### 3.8. Hình tròn có hình biểu diễn là elip

    **Đề bài.** Một cửa sổ hình tròn nằm trong mặt phẳng không song song với phương chiếu. Hãy dự đoán dạng hình biểu diễn và cho biết có thể đọc bán kính thật từ trục lớn của ảnh hay không.

    **Phân tích:** Hình tròn trong phép chiếu không suy biến cho ảnh là **hình elip**; trường hợp ảnh tròn là trường hợp đặc biệt. Phép chiếu không bảo toàn độ dài nói chung.

    <div class="thpt-g10-example-solution" role="group" aria-label="Lời giải ví dụ 3.8"><p><strong>Lời giải.</strong> Hình biểu diễn là một hình elip (có thể tròn trong trường hợp đặc biệt). Không thể đọc trực tiếp **bán kính thật** từ độ dài trục lớn/trục nhỏ trên bản vẽ nếu chưa có dữ kiện về phép chiếu và tỉ lệ.</p></div>

    **Kiểm lại:** Nếu chỉ nhìn một elip rồi khẳng định vật thật là hình elip, em đã quên ảnh của hình tròn có thể bị méo theo phép chiếu.

=== "Lỗi thường gặp"

    ### 4.1. Chọn phương chiếu không cắt mặt chiếu

    **Dấu hiệu:** Chọn phương \(\Delta\) song song hoặc nằm luôn trong mặt \((P)\), rồi cho rằng ảnh của mọi điểm ngoài \((P)\) được xác định duy nhất.

    **Vì sao sai:** Đường chiếu qua điểm ngoài mặt có thể không gặp \((P)\). Muốn xác định ảnh mọi điểm, phương chiếu phải có hướng **cắt mặt phẳng chiếu**.

    **Cách sửa:** Kiểm \(\Delta\cap(P)\) là đúng **một điểm** trước khi dựng ảnh; với điểm \(M\), chỉ dùng đường qua \(M\) cùng phương đã cố định.

    ### 4.2. Quên trường hợp đường cùng phương chiếu bị co thành điểm

    **Dấu hiệu:** Khẳng định ảnh của **mọi** đường thẳng đều là đường thẳng, kể cả đường có phương đúng bằng phương chiếu.

    **Vì sao sai:** Mọi điểm của một đường cùng phương chiếu nằm trên **cùng đường chiếu**, nên có cùng ảnh.

    **Cách sửa:** Kiểm đường chứa đối tượng có cùng phương chiếu không. Nếu có, ảnh chỉ là **một điểm** và không áp dụng tỉ số đoạn ảnh không suy biến.

    ### 4.3. Cho rằng phép chiếu bảo toàn độ dài, góc và vuông góc

    **Dấu hiệu:** Hình vuông có ảnh hình bình hành nhưng vẫn đo góc ảnh \(90^\circ\), hoặc cho cạnh ảnh bằng cạnh gốc.

    **Vì sao sai:** Phép chiếu song song nhìn chung chỉ giữ các quan hệ **thẳng hàng, song song, tỉ số phù hợp**, không giữ từng độ dài hoặc góc.

    **Cách sửa:** Dùng dữ kiện của vật gốc để lập luận; bản vẽ chỉ bảo toàn các thuộc tính đã được SGK nêu trong điều kiện thích hợp.

    ### 4.4. Dùng tỉ số đoạn ảnh cho hai đoạn tùy ý

    **Dấu hiệu:** Hai đoạn ban đầu nằm trên hai đường không song song, rồi cho tỉ số độ dài ảnh bằng tỉ số độ dài gốc.

    **Vì sao sai:** Tính chất SGK chỉ nói đến hai đoạn **cùng đường thẳng hoặc trên hai đường song song**, với ảnh không suy biến.

    **Cách sửa:** Kiểm quan hệ đồng đường/song song và độ dài ảnh khác 0 trước khi dùng tỉ số.

    ### 4.5. Nhầm hình biểu diễn với bản sao đúng mọi kích thước

    **Dấu hiệu:** Từ một hình bình hành trên giấy, kết luận hình thật là hình bình hành nhưng không thể là hình vuông.

    **Vì sao sai:** Hình vuông, chữ nhật, thoi đều có thể cho hình biểu diễn là hình bình hành.

    **Cách sửa:** Phân biệt **hình thật** và **hình chiếu**; không suy hình thật chỉ từ dạng ảnh khi thiếu điều kiện.

    ### 4.6. Vẽ hình thang/hình chóp làm mất tỉ số và quan hệ thuộc

    **Dấu hiệu:** Hình thang có \(AB\parallel CD\), \(AB=2CD\) nhưng hình biểu diễn lại có hai đáy không song song hoặc sai tỉ số.

    **Vì sao sai:** Với hình biểu diễn không suy biến, tính song song và tỉ số của hai đoạn trên hai đường song song phải được giữ.

    **Cách sửa:** Vẽ hai đáy ảnh song song, giữ tỉ số tương ứng, sau đó mới thêm các cạnh và nét khuất.

    **Học tiếp:** [Core và Luyện tập Bài 14](luyen-tap.md) · [Tự luận Chương IV](../../../thu-vien/tu-luan-g11-chuong-iv.md) · [Tự kiểm tra cuối chương](tu-kiem-tra-chuong.md).

    <p class="thpt-r4-footnote">Nguồn học thuật: SGK Toán 11 Kết nối tri thức với cuộc sống, tập một, Bài 14 “Phép chiếu song song”, trang in 95–99; ba mục: Phép chiếu song song; Tính chất của phép chiếu song song; Hình biểu diễn của một hình không gian. Đã đối chiếu văn bản SGK số hóa trên SGKVN; chưa có bằng chứng ảnh trực quan đủ toàn trang sách in. Một SVG hiện có trên main và một SVG giải thích trường hợp suy biến do AUTHORING tạo mới, dùng chung ở cả hai tab.</p>
~~~~

---

END_OF_REVIEW_PACKET

