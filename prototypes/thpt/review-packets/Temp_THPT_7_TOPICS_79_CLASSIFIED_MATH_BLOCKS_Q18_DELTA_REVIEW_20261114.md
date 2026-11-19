# ONE TARGETED AUTHORING REVIEW BATCH · Seven Topic editorial candidate snapshots · 14/11/2026

<!-- REVIEW_ONLY_BATCH_NOT_CANONICAL; NO_RELEASE; NO_RD1; Q01-Q18 ONLY; not a 6th Permanent Source -->

STANDARD: SLM-THPT-QUALITY-ONE v3.1.0 (Q01–Q18), one standard, not seven separate standards.
REVIEW_METHOD: Independent NotebookLM Academic + PED check using exactly FIVE THPT Permanent Sources v2.1 and original KNTT SGK/SBT S1. These exact new Git blobs are what must be reviewed; no inherited PASS from old source.
REVIEW_SCOPE: This SINGLE file is only an exact **excerpt of newly formalized source statements and asset references**, not a replacement for the seven full learner sources. CĐ20 and CĐ21 additionally require their FULL source + Q01/Q15 S1/source custody check. Targeted unchanged source bits do not require re-review solely for metadata.
SOURCE_RECEIPT: Per section below: source Git blob SHA + branch + PR; reviewer must label verdict **per affected module/outcome** and distinguish source-anchored facts from extension content.
OUTPUT: Academic/PED PASS or HOLD PER SNAPSHOT, P0/P1/P2, Qxx + lesson/outcome + precise evidence + MINIMAL_DELTA, independently verified source receipts. No blanket cross-topic PASS.

## PLAN22-19 · PR #858

SOURCE_PATH: `prototypes/thpt/content-drafts/topic19-combinatorics-binomial/Temp_PLAN22_19_R05_ALL_PRACTICE_NUMBERING_SOURCE_FOOTER_20261114.md`
SOURCE_BLOB: `022d6c9befa352842b6221ae0162cc8ab29c16d6`
SOURCE_BRANCH: `authoring/topic19-combinatorics-binomial-r00-20261114`
REVIEW_GATE: Q18 R05 formal math box delta targeted; earlier R03 PASS immutable only.

**This is a new learner candidate, not historic PASS.** Original outcomes/exercise canonical ID preservation covered by the named author QA on the respective PR, but the mathematical meaning and completeness of NEW boxed statements need independent judgment. Verify that the classified type is appropriate (definition/theorem/property/formula/method/extension), all conditions are explicit, no math formula conflicts with original text, and every claimed image exists and matches the learner reading instruction.

### Exact source-box text (copied from locked Git blob)

#### Classified statement 1: PHƯƠNG PHÁP · Quy tắc cộng

> **PHƯƠNG PHÁP · Quy tắc cộng**
>
> Nếu kết quả thuộc **một trong các trường hợp rời nhau** với số cách lần lượt m và n, số lựa chọn là \(m+n\). Nếu nhóm giao nhau phải trừ phần giao.

#### Classified statement 2: PHƯƠNG PHÁP · Quy tắc nhân

> **PHƯƠNG PHÁP · Quy tắc nhân**
>
> Nếu mỗi kết quả gồm **hai bước**, bước đầu có m cách và mỗi lựa chọn đầu cho n cách tiếp theo, tổng số là \(m\cdot n\). Bước thứ hai có thể phụ thuộc lựa chọn bước đầu.

#### Classified statement 3: GHI NHỚ · Đếm số theo chữ số

> **GHI NHỚ · Đếm số theo chữ số**
>
> Số tự nhiên nhiều chữ số không thể có chữ số đầu bằng 0. Cần ghi rõ số chữ số, thứ tự, cho lặp hay không và áp dụng quy tắc nhân cho đúng số cách từng ô.

#### Classified statement 4: PHƯƠNG PHÁP · Chia trường hợp

> **PHƯƠNG PHÁP · Chia trường hợp**
>
> Chia thành các trường hợp **rời nhau**, đếm từng trường hợp theo điều kiện chữ số cuối/đầu rồi cộng. Không nhân một số cố định nếu số cách ở bước khác thay đổi.

#### Classified statement 5: ĐỊNH NGHĨA · HOÁN VỊ

> **ĐỊNH NGHĨA · HOÁN VỊ**
>
> Với \(n\) đối tượng phân biệt, một hoán vị là một cách **xếp thứ tự toàn bộ n đối tượng**; số hoán vị \[P_n=n!,\quad n\ge1.\]

#### Classified statement 6: ĐỊNH NGHĨA · CHỈNH HỢP

> **ĐỊNH NGHĨA · CHỈNH HỢP**
>
> Chỉnh hợp chập k của n phần tử phân biệt là chọn k phần tử **có thứ tự, không lặp**. \[A_n^k=\frac{n!}{(n-k)!},\quad 0\le k\le n.\]

#### Classified statement 7: ĐỊNH NGHĨA · TỔ HỢP

> **ĐỊNH NGHĨA · TỔ HỢP**
>
> Tổ hợp chập k của n phần tử phân biệt là chọn k phần tử **không xét thứ tự, không lặp**. \[C_n^k=\binom nk=\frac{n!}{k!(n-k)!}.\]

#### Classified statement 8: PHƯƠNG PHÁP · Chọn nhóm theo điều kiện

> **PHƯƠNG PHÁP · Chọn nhóm theo điều kiện**
>
> Đếm số cách chọn mỗi nhóm bằng tổ hợp, nhân khi cần lựa chọn ở các nhóm đồng thời; chỉ sau khi nhóm đã chọn mới nhân số cách phân vai nếu đề yêu cầu.

#### Classified statement 9: PHƯƠNG PHÁP · Máy tính cầm tay

> **PHƯƠNG PHÁP · Máy tính cầm tay**
>
> Các phép \(n!\), \(nPr\), \(nCr\) giúp tính số khi đã xác định đúng **xếp hết, chọn và xếp k, hay chọn k không thứ tự**. Dùng máy để kiểm phép tính, không thay bước nhận dạng mô hình.

#### Classified statement 10: CÔNG THỨC · Nhị thức Newton

> **CÔNG THỨC · Nhị thức Newton**
>
> \[(a+b)^n=\sum_{k=0}^{n}\binom nk a^{n-k}b^k,\quad n\in\mathbb N.\] Hệ số \(\binom nk\) đếm số cách chọn k vị trí lấy b trong n thừa số.

#### Classified statement 11: TÍNH CHẤT · Dấu của hạng tử

> **TÍNH CHẤT · Dấu của hạng tử**
>
> \[(a-b)^n=\sum_{k=0}^{n}(-1)^k\binom nk a^{n-k}b^k.\] Dấu \((-1)^k\) đến từ chọn \(-b\) k lần, không tự gắn dấu theo vị trí nhìn vào biểu thức.

#### Classified statement 12: VẬN DỤNG · Ước tính tăng trưởng

> **VẬN DỤNG · Ước tính tăng trưởng**
>
> \[(1+r)^5=1+5r+10r^2+10r^3+5r^4+r^5.\] Khi \(|r|\) nhỏ, có thể dùng \(1+5r\) để **ước lượng**, nhưng phải nêu phần còn bỏ và không gọi là đẳng thức chính xác.

#### Classified statement 13: MỞ RỘNG · Số hạng không chứa x

> **MỞ RỘNG · Số hạng không chứa x**
>
> Trong mỗi số hạng khai triển, cộng số mũ của x từ các thừa số đã chọn. Chỉ giữ số hạng có **tổng số mũ bằng 0**; với phân thức cần điều kiện \(x\ne0\). Đây là mở rộng thực hành, không phải toàn bộ Core B25.

#### Classified statement 14: MỞ RỘNG · Tổng hệ số và tam giác Pascal

> **MỞ RỘNG · Tổng hệ số và tam giác Pascal**
>
> Với \(P(x)=\sum_{k=0}^{n}a_kx^k\), tổng hệ số bằng \(P(1)\). Tam giác Pascal thỏa \(\binom nk=\binom{n-1}{k-1}+\binom{n-1}{k}\) cho \(1\le k\le n-1\); nếu đếm tất cả nhóm con, \(\sum_k\binom nk=2^n\).

### Learner figure refs inside the source (4 total)

1. `../../../../docs/assets/images/thpt/FIG-TOP19-B23-ADD-MULTIPLY-WHITE-R00.svg` — alt: So sánh chọn một nhóm và tạo một cặp lựa chọn
2. `../../../../docs/assets/images/thpt/FIG-TOP19-B23-TWO_STAGE_TREE_WHITE_R00.svg` — alt: Sơ đồ hình cây: 2 áo, 3 quần và đúng 6 cặp
3. `../../../../docs/assets/images/thpt/FIG-TOP19-B24-ORDER-GROUP-WHITE-R00.svg` — alt: Đếm nhóm và phân vai khác nhau
4. `../../../../docs/assets/images/thpt/FIG-TOP19-B25-PASCAL-WHITE-R00.svg` — alt: Tam giác Pascal từ hàng n=0 đến n=4

---
## PLAN22-20 · PR #860

SOURCE_PATH: `prototypes/thpt/content-drafts/topic20-classical-probability/Temp_PLAN22_20_R04_STUDENT_LABELS_NUMBERED_PRACTICE_20261114.md`
SOURCE_BLOB: `906167eabc8260d1245d3f89a3d94d64006f5093`
SOURCE_BRANCH: `authoring/plan22-20-probability-source-scope-preflight-20261114`
REVIEW_GATE: Q01 direct S1 activity pages and Q15 34 old pointer refs still HOLD; full new split-source review needed.

**This is a new learner candidate, not historic PASS.** Original outcomes/exercise canonical ID preservation covered by the named author QA on the respective PR, but the mathematical meaning and completeness of NEW boxed statements need independent judgment. Verify that the classified type is appropriate (definition/theorem/property/formula/method/extension), all conditions are explicit, no math formula conflicts with original text, and every claimed image exists and matches the learner reading instruction.

### Exact source-box text (copied from locked Git blob)

#### Classified statement 1: ĐỊNH NGHĨA — Phép thử, không gian mẫu và biến cố

> **ĐỊNH NGHĨA — Phép thử, không gian mẫu và biến cố**
>
> Phép thử ngẫu nhiên có các kết quả sơ cấp \(\Omega\); biến cố \(A\subseteq\Omega\); \(\varnothing\) là không thể, \(\Omega\) chắc chắn.

#### Classified statement 2: CÔNG THỨC — Xác suất cổ điển

> **CÔNG THỨC — Xác suất cổ điển**
>
> \[P(A)=\frac{n(A)}{n(\Omega)},\quad n(\Omega)>0.\] Chỉ dùng khi các kết quả sơ cấp hữu hạn và đồng khả năng.

#### Classified statement 3: TÍNH CHẤT — Biến cố đối

> **TÍNH CHẤT — Biến cố đối**
>
> \[\bar A=\Omega\setminus A,\qquad P(\bar A)=1-P(A).\] A và đối A xung khắc, phủ hết mẫu.

#### Classified statement 4: PHƯƠNG PHÁP — Đếm và đọc sơ đồ cây

> **PHƯƠNG PHÁP — Đếm và đọc sơ đồ cây**
>
> Đếm chuỗi có thứ tự khác nhóm không thứ tự; dùng \(\binom nk\) khi chọn nhóm không phân vai. Không suy mọi lá của cây đồng khả năng nếu chưa kiểm.

#### Classified statement 5: GHI NHỚ — Kiểm mô hình trước phép tính

> **GHI NHỚ — Kiểm mô hình trước phép tính**
>
> Xác định kết quả sơ cấp, tính đồng khả năng, thứ tự, có/không hoàn lại, tập kết quả thuận lợi và điều kiện dùng công thức.

#### Classified statement 6: ĐỊNH NGHĨA — Hợp, giao, xung khắc

> **ĐỊNH NGHĨA — Hợp, giao, xung khắc**
>
> \(A\cup B\) là ít nhất một; \(A\cap B\) là cả hai; xung khắc khi \(A\cap B=\varnothing\). Hợp đếm mỗi kết quả ở giao chỉ một lần.

#### Classified statement 7: TÍNH CHẤT — Độc lập

> **TÍNH CHẤT — Độc lập**
>
> \[P(A\cap B)=P(A)P(B).\] Đây là tiêu chuẩn độc lập; không suy từ việc hai biến cố không xung khắc.

#### Classified statement 8: CÔNG THỨC — Quy tắc cộng

> **CÔNG THỨC — Quy tắc cộng**
>
> \[P(A\cup B)=P(A)+P(B)-P(A\cap B).\] Nếu giao rỗng thì bỏ số hạng giao.

#### Classified statement 9: CÔNG THỨC — Nhân độc lập và biến cố đối

> **CÔNG THỨC — Nhân độc lập và biến cố đối**
>
> Nếu A,B độc lập: \[P(A\cap B)=P(A)P(B),\quad P(A\cup B)=1-P(\bar A)P(\bar B).\] Không nhân xác suất biên cho biến cố phụ thuộc.

### Learner figure refs inside the source (2 total)

1. `../../../../docs/assets/images/thpt/FIG-TOP20-G10-B27_TWO_TOSSES_TREE_WHITE_R00.svg` — alt: Sơ đồ cây hai lần tung đồng xu cân đối với bốn kết quả đồng khả năng
2. `../../../../docs/assets/images/thpt/FIG-TOP20-G11-B28-B29_VENN_WHITE_R00.svg` — alt: Đọc phần giao và phần hợp của hai biến cố khi gieo xúc xắc

---
## PLAN22-21 · PR #863

SOURCE_PATH: `prototypes/thpt/content-drafts/topic21-conditional-bayes/Temp_PLAN22_21_R01_EDITORIAL_NUMBERED_KNOWLEDGE_20261114.md`
SOURCE_BLOB: `0258f29a1ece0fd9d0c1772781878ce827282c24`
SOURCE_BRANCH: `authoring/plan22-21-conditional-bayes-r00-20261114`
REVIEW_GATE: Q01 and Q15 G12 duplicate-ID collision HOLD; full split-source review needed.

**This is a new learner candidate, not historic PASS.** Original outcomes/exercise canonical ID preservation covered by the named author QA on the respective PR, but the mathematical meaning and completeness of NEW boxed statements need independent judgment. Verify that the classified type is appropriate (definition/theorem/property/formula/method/extension), all conditions are explicit, no math formula conflicts with original text, and every claimed image exists and matches the learner reading instruction.

### Exact source-box text (copied from locked Git blob)

#### Classified statement 1: ĐỊNH NGHĨA — Xác suất khi đã biết một biến cố

> **ĐỊNH NGHĨA — Xác suất khi đã biết một biến cố**
>
> Biết B xảy ra là chọn lại trong nhóm B: chỉ các kết quả thuộc B còn được xét; để xác suất điều kiện có nghĩa cần \(P(B)>0\). Không được đồng nhất \(P(A\mid B)\) và \(P(B\mid A)\).

#### Classified statement 2: ĐỊNH NGHĨA – CÔNG THỨC — Xác suất có điều kiện

> **ĐỊNH NGHĨA – CÔNG THỨC — Xác suất có điều kiện**
>
> \[P(A\mid B)=\frac{P(A\cap B)}{P(B)},\qquad P(B)>0.\] \(P(A\cap B)\) là phần giao; \(P(B)\) là toàn bộ nhóm đã biết. Khi các phần tử của B đồng khả năng có thể dùng \(n(A\cap B)/n(B)\).

#### Classified statement 3: CÔNG THỨC – QUY TẮC NHÂN — Xác suất đồng thời theo điều kiện

> **CÔNG THỨC – QUY TẮC NHÂN — Xác suất đồng thời theo điều kiện**
>
> \[P(A\cap B)=P(A)P(B\mid A)\quad\text{khi }P(A)>0.\] Tương tự \(P(A\cap B)=P(B)P(A\mid B)\) nếu \(P(B)>0\). Khi rút không hoàn lại, phải cập nhật xác suất nhánh sau.

#### Classified statement 4: TÍNH CHẤT — Tiêu chuẩn độc lập

> **TÍNH CHẤT — Tiêu chuẩn độc lập**
>
> \[A\text{ và }B\text{ độc lập}\iff P(A\cap B)=P(A)P(B).\] Khi \(P(B)>0\), độc lập tương đương \(P(A\mid B)=P(A)\). Hai biến cố xung khắc có xác suất dương không độc lập.

#### Classified statement 5: CÔNG THỨC — Xác suất toàn phần hai nhánh

> **CÔNG THỨC — Xác suất toàn phần hai nhánh**
>
> Nếu \(X\cap Y=\varnothing\), \(X\cup Y=\Omega\) và \(P(X),P(Y)>0\) thì \[P(L)=P(X)P(L\mid X)+P(Y)P(L\mid Y).\] Đây là tổng hai **đường đi rời nhau**, không phải tổng trần hai xác suất điều kiện.

#### Classified statement 6: CÔNG THỨC — Bayes – đảo chiều câu hỏi

> **CÔNG THỨC — Bayes – đảo chiều câu hỏi**
>
> \[P(Y\mid L)=\frac{P(Y)P(L\mid Y)}{P(L)},\qquad P(L)>0.\] Với hai nhánh X,Y phân hoạch, mẫu số là công thức toàn phần của L. Xác suất của nguồn **sau khi thấy L** không tự bằng xác suất thấy L **khi biết nguồn**.

#### Classified statement 7: PHƯƠNG PHÁP — Ba thao tác đọc cây xác suất

> **PHƯƠNG PHÁP — Ba thao tác đọc cây xác suất**
>
> Tại **mỗi nút**, tổng xác suất các nhánh ra bằng 1. **Nhân dọc** từ gốc đến lá để có xác suất giao; **cộng các lá rời nhau** đưa tới kết quả cần tính; khi đảo điều kiện, **chia lá mục tiêu cho tổng các lá đã quan sát**. Tổng toàn bộ các lá cuối phải bằng 1.

#### Classified statement 8: GHI NHỚ — Vai trò của tỉ lệ nền

> **GHI NHỚ — Vai trò của tỉ lệ nền**
>
> \[P(H\mid +)=\frac{P(H)P(+\mid H)}{P(H)P(+\mid H)+P(\bar H)P(+\mid\bar H)}.\] Đây là mô hình xác suất; phải biết **tỉ lệ nền**, **tỉ lệ phát hiện khi đúng** và **tỉ lệ báo nhầm**. Không kết luận \(P(H\mid +)=P(+\mid H)\).

### Learner figure refs inside the source (1 total)

1. `../../../../docs/assets/images/thpt/FIG-TOP21-BAYES-TWO-SOURCES_TREE_WHITE_R00.svg` — alt: Sơ đồ cây hai nguồn X và Y: mỗi lá là tích xác suất nhánh, các lá lỗi được cộng để áp dụng Bayes

---
## PLAN22-22 · PR #812

SOURCE_PATH: `prototypes/thpt/content-drafts/topic-statistics/Temp_PLAN22_22_R02_EDITORIAL_STATISTICS_13_MODULES_39_OUTCOMES_20261114.md`
SOURCE_BLOB: `bdf40b7ce8cdbe0a8db67750281a4162ba421a59`
SOURCE_BRANCH: `authoring/topic-descriptive-statistics-g10-g12-r00-20261111`
REVIEW_GATE: R01 CONTENT_READY frozen; R02 formula/conditions delta must be independently rechecked.

**This is a new learner candidate, not historic PASS.** Original outcomes/exercise canonical ID preservation covered by the named author QA on the respective PR, but the mathematical meaning and completeness of NEW boxed statements need independent judgment. Verify that the classified type is appropriate (definition/theorem/property/formula/method/extension), all conditions are explicit, no math formula conflicts with original text, and every claimed image exists and matches the learner reading instruction.

### Exact source-box text (copied from locked Git blob)

#### Classified statement 1: ĐỊNH NGHĨA · CÔNG THỨC — Sai số của số gần đúng

> **ĐỊNH NGHĨA · CÔNG THỨC — Sai số của số gần đúng**
>
> \[\Delta=|\bar a-a|,\qquad \delta_a=\frac{\Delta}{|a|}\quad(a\ne0).\] Nếu chỉ biết chặn \(d\), kết luận \(\Delta\le d\), không khẳng định \(\Delta=d\). Dữ liệu phải nêu đơn vị và vị trí làm tròn.

#### Classified statement 2: ĐỊNH NGHĨA · CÔNG THỨC — Trung bình và mốt mẫu

> **ĐỊNH NGHĨA · CÔNG THỨC — Trung bình và mốt mẫu**
>
> \[\bar x=\frac{x_1+\cdots+x_n}{n}=\frac{\sum f_iv_i}{\sum f_i}.\] Mốt là giá trị có tần số lớn nhất, có thể nhiều mốt. Dữ liệu định lượng dùng số trung bình cho mức chia đều, nhưng trung bình nhạy với giá trị bất thường.

#### Classified statement 3: ĐỊNH NGHĨA · QUY ƯỚC — Trung vị và tứ phân vị trên dãy thô

> **ĐỊNH NGHĨA · QUY ƯỚC — Trung vị và tứ phân vị trên dãy thô**
>
> Trước hết **sắp xếp dữ liệu**. Trung vị \(Me=Q_2\) là giá trị giữa (n lẻ) hoặc trung bình hai giá trị giữa (n chẵn). Theo cách chia nửa dãy KNTT: n lẻ **loại trung vị** rồi lấy trung vị hai nửa để có \(Q_1,Q_3\). Đây không phải nội suy trên bảng ghép nhóm.

#### Classified statement 4: CÔNG THỨC · GHI NHỚ — Độ trải và hàng rào ngoại lệ

> **CÔNG THỨC · GHI NHỚ — Độ trải và hàng rào ngoại lệ**
>
> \[R=x_{\max}-x_{\min},\quad IQR=Q_3-Q_1.\] Hàng rào tham khảo \(Q_1-1{,}5IQR\) và \(Q_3+1{,}5IQR\) giúp nhận diện điểm đáng xem xét, **không chứng minh quan sát bị sai**.

#### Classified statement 5: CÔNG THỨC — Phương sai mô tả và độ lệch chuẩn (dữ liệu thô)

> **CÔNG THỨC — Phương sai mô tả và độ lệch chuẩn (dữ liệu thô)**
>
> \[s^2=\frac1n\sum_{i=1}^{n}(x_i-\bar x)^2,\qquad s=\sqrt{s^2}.\] Đây là **phương sai mô tả dùng mẫu số n** theo học liệu SGK, không tự thay bằng \(n-1\). \(s\) cùng đơn vị với dữ liệu, \(s^2\) bình phương đơn vị.

#### Classified statement 6: ĐỊNH NGHĨA · TÍNH CHẤT — Bảng tần số ghép nhóm

> **ĐỊNH NGHĨA · TÍNH CHẤT — Bảng tần số ghép nhóm**
>
> Các nhóm dạng \([a_i,b_i)\) **trái đóng, phải mở**, không trùng và phủ các quan sát. Độ rộng \(h_i=b_i-a_i>0\); tần số \(f_i\) là số quan sát trong nhóm; \(\sum_i f_i=n\). Gán điểm biên vào một nhóm duy nhất.

#### Classified statement 7: CÔNG THỨC · GHI NHỚ — Trung điểm, trung bình và tần số tích lũy

> **CÔNG THỨC · GHI NHỚ — Trung điểm, trung bình và tần số tích lũy**
>
> \[c_i=\frac{a_i+b_i}{2},\quad \bar x_g=\frac{\sum_i f_ic_i}{n},\quad F_i=\sum_{j\le i}f_j.\] \(\bar x_g\) là **ước lượng** từ trung điểm, không phải trung bình chính xác của dữ liệu thô.

#### Classified statement 8: CÔNG THỨC · ĐIỀU KIỆN — Nội suy các phân vị của bảng ghép nhóm

> **CÔNG THỨC · ĐIỀU KIỆN — Nội suy các phân vị của bảng ghép nhóm**
>
> \[Q_p\approx L+\frac{(p-F_{\rm trước})h}{f},\qquad f>0.\] Chọn \(p=n/4,n/2,3n/4\) cho \(Q_1,Me,Q_3\); trước đó phải định vị đúng lớp chứa p bằng tần số tích lũy. Đây là **ước lượng**, không phải dữ liệu gốc.

#### Classified statement 9: CÔNG THỨC · ĐIỀU KIỆN — Mốt ước lượng cho nhóm cùng độ rộng

> **CÔNG THỨC · ĐIỀU KIỆN — Mốt ước lượng cho nhóm cùng độ rộng**
>
> \[Mo\approx L+\frac{f_m-f_-}{(f_m-f_-)+(f_m-f_+)}h.\] Chỉ áp dụng với nhóm có cùng độ rộng, nhóm mốt và hai nhóm kề hợp lệ, mẫu số dương. Không dùng máy móc nếu nhiều nhóm cùng mức cực đại.

#### Classified statement 10: GHI NHỚ · GIỚI HẠN — Khoảng biến thiên ghép nhóm

> **GHI NHỚ · GIỚI HẠN — Khoảng biến thiên ghép nhóm**
>
> \[R_g=b_k-a_1\] là **độ phủ theo biên các nhóm không rỗng** từ nhóm đầu đến nhóm cuối, không nhất thiết bằng khoảng biến thiên thực của các quan sát.

#### Classified statement 11: CÔNG THỨC · GHI NHỚ — IQR ước lượng của dữ liệu ghép nhóm

> **CÔNG THỨC · GHI NHỚ — IQR ước lượng của dữ liệu ghép nhóm**
>
> \[IQR_g=Q_{3,g}-Q_{1,g}.\] Hai tứ phân vị được **nội suy** từ tần số tích lũy; không dùng hàng rào nhóm để khẳng định chắc chắn một cá thể là ngoại lệ nếu đã mất dữ liệu thô.

#### Classified statement 12: CÔNG THỨC · ĐIỀU KIỆN — Phương sai và độ lệch chuẩn ghép nhóm

> **CÔNG THỨC · ĐIỀU KIỆN — Phương sai và độ lệch chuẩn ghép nhóm**
>
> \[s_g^2=\frac{\sum_i f_i(c_i-\bar x_g)^2}{n}=\frac{\sum_i f_ic_i^2}{n}-\bar x_g^2,\qquad s_g=\sqrt{s_g^2}.\] Trung điểm là đại diện nên đây là **ước lượng**, không đo được độ lệch thật trong mỗi nhóm.

#### Classified statement 13: TÍNH CHẤT · GHI NHỚ — So sánh hai phân phối có cùng trung bình

> **TÍNH CHẤT · GHI NHỚ — So sánh hai phân phối có cùng trung bình**
>
> Hai mẫu có thể có \(\bar x_g\) bằng nhau mà \(s_g^2\) khác nhau. Mẫu có độ lệch chuẩn nhỏ hơn **ít phân tán hơn theo thước đo và cách nhóm đang dùng**, không mặc nhiên tốt hơn hay gây ra kết quả nào. Chỉ so khi đơn vị/thang đo/cách nhóm hợp lý.

### Learner figure refs inside the source (2 total)

1. `assets/Temp_STATISTICS_BOX_OUTLIER_R00_20261111.svg` — alt: Biểu đồ hộp có ngoại lệ 30 theo quy tắc hàng rào
2. `assets/Temp_STATISTICS_GROUPED_FREQ_R00_20261111.svg` — alt: Biểu đồ tần số ghép nhóm của 20 quan sát với bốn cột

---
## TRIG-G10-G11 · PR #813

SOURCE_PATH: `prototypes/thpt/content-drafts/topic-trigonometry/Temp_TOPIC_TRIG_G10_G11_R02_NUMBERED_FORMAL_VAN_DUNG_20261114.md`
SOURCE_BLOB: `91a08af54829aeb0ad643efb2fee794dc3b31fe0`
SOURCE_BRANCH: `authoring/topic-trigonometry-g10-g11-r00-20261112`
REVIEW_GATE: R01 CONTENT_READY frozen; R02 14 formal blocks + SVG relocation targeted.

**This is a new learner candidate, not historic PASS.** Original outcomes/exercise canonical ID preservation covered by the named author QA on the respective PR, but the mathematical meaning and completeness of NEW boxed statements need independent judgment. Verify that the classified type is appropriate (definition/theorem/property/formula/method/extension), all conditions are explicit, no math formula conflicts with original text, and every claimed image exists and matches the learner reading instruction.

### Exact source-box text (copied from locked Git blob)

#### Classified statement 1: ĐỊNH NGHĨA — Đơn vị nửa đường tròn và góc đặc biệt G10

> **ĐỊNH NGHĨA — Đơn vị nửa đường tròn và góc đặc biệt G10**
>
> Trên nửa đường tròn đơn vị, \(M=(\cos\alpha,\sin\alpha)\) và \(0^\circ\le\alpha\le180^\circ\).

#### Classified statement 2: CÔNG THỨC — Dấu, góc bù, miền xác định và hệ thức G10

> **CÔNG THỨC — Dấu, góc bù, miền xác định và hệ thức G10**
>
> \[\sin^2\alpha+\cos^2\alpha=1,\quad\tan\alpha=\sin\alpha/\cos\alpha\ (\cos\alpha\ne0),\quad\cot\alpha=\cos\alpha/\sin\alpha\ (\sin\alpha\ne0).\]

#### Classified statement 3: ĐỊNH LÝ — Định lý côsin, diện tích và góc kẹp

> **ĐỊNH LÝ — Định lý côsin, diện tích và góc kẹp**
>
> \[a^2=b^2+c^2-2bc\cos A,\quad S=\frac12bc\sin A.\] Góc A kẹp đúng hai cạnh b,c.

#### Classified statement 4: ĐỊNH LÝ — Định lý sin, Heron và đo đạc thực tế

> **ĐỊNH LÝ — Định lý sin, Heron và đo đạc thực tế**
>
> \[a/\sin A=b/\sin B=c/\sin C=2R.\] Heron \(S=\sqrt{p(p-a)(p-b)(p-c)}\), \(p=(a+b+c)/2\), chỉ khi ba cạnh tạo tam giác.

#### Classified statement 5: CÔNG THỨC — Góc có hướng, radian, chu kì và độ dài cung

> **CÔNG THỨC — Góc có hướng, radian, chu kì và độ dài cung**
>
> \[180^\circ=\pi\mathrm{rad};\quad s=R|\alpha|\quad(R>0,\alpha\text{ rad}).\] Góc cùng tia cuối chênh \(2k\pi\); không dùng góc rút gọn để tính cả quãng nhiều vòng.

#### Classified statement 6: ĐỊNH NGHĨA — Đường tròn lượng giác, góc liên quan và dấu

> **ĐỊNH NGHĨA — Đường tròn lượng giác, góc liên quan và dấu**
>
> \(\cos\alpha\) và \(\sin\alpha\) lần lượt là hoành/tung độ điểm trên đường tròn đơn vị; tan/cot chỉ tồn tại khi mẫu số khác 0.

#### Classified statement 7: CÔNG THỨC — Công thức cộng, hiệu và góc nhân đôi

> **CÔNG THỨC — Công thức cộng, hiệu và góc nhân đôi**
>
> \[\sin(a+b)=\sin a\cos b+\cos a\sin b;\quad\cos(a+b)=\cos a\cos b-\sin a\sin b.\] Nhân đôi suy từ hai góc bằng nhau.

#### Classified statement 8: PHƯƠNG PHÁP — Tích thành tổng và tổng thành tích

> **PHƯƠNG PHÁP — Tích thành tổng và tổng thành tích**
>
> Đổi tích thành tổng hoặc tổng thành tích dựa vào cấu trúc, giữ điều kiện xác định nếu có mẫu số xuất hiện khi biến đổi.

#### Classified statement 9: ĐỊNH NGHĨA — Miền xác định và tính chẵn lẻ của hàm lượng giác

> **ĐỊNH NGHĨA — Miền xác định và tính chẵn lẻ của hàm lượng giác**
>
> \(\sin,\cos\) xác định trên R; tan loại \(\pi/2+k\pi\), cot loại \(k\pi\); sin lẻ, cos chẵn, tan/cot lẻ.

#### Classified statement 10: TÍNH CHẤT — Chu kì, đồ thị sin và cos

> **TÍNH CHẤT — Chu kì, đồ thị sin và cos**
>
> Sin/cos có chu kỳ cơ bản \(2\pi\); trên một vòng sin đạt 1 ở \(\pi/2\), −1 ở \(3\pi/2\), bằng 0 ở \(0,\pi,2\pi\).

#### Classified statement 11: TÍNH CHẤT — Đồ thị tan, cot và mô hình dao động

> **TÍNH CHẤT — Đồ thị tan, cot và mô hình dao động**
>
> Tan/cot có chu kỳ cơ bản \(\pi\) và tiệm cận đứng ở những giá trị mà mẫu số trong định nghĩa bằng 0.

#### Classified statement 12: CÔNG THỨC — Phương trình sin và cos cơ bản

> **CÔNG THỨC — Phương trình sin và cos cơ bản**
>
> \[\sin x=\sin a\iff x=a+2k\pi\text{ hoặc }x=\pi-a+2k\pi;\quad\cos x=\cos a\iff x=\pm a+2k\pi.\]

#### Classified statement 13: CÔNG THỨC — Phương trình tan, cot và biến đổi biểu thức

> **CÔNG THỨC — Phương trình tan, cot và biến đổi biểu thức**
>
> \[\tan x=\tan a\iff x=a+k\pi;\qquad\cot x=\cot a\iff x=a+k\pi.\] Phải thỏa miền xác định.

#### Classified statement 14: GHI NHỚ — Lọc nghiệm, nghiệm ngoại lai và bài toán ứng dụng

> **GHI NHỚ — Lọc nghiệm, nghiệm ngoại lai và bài toán ứng dụng**
>
> Nghiệm thu được sau chia/bình phương/thế biến cần thử lại trong phương trình gốc và miền xác định, không dùng nghiệm ngoại lai.

### Learner figure refs inside the source (3 total)

1. `assets/Temp_TOPIC_TRIG_UNIT_CIRCLE_R00_20261112.svg` — alt: Hình đường tròn lượng giác 150°, sin dương cos âm
2. `assets/Temp_TOPIC_TRIG_COSINE_RULE_TRIANGLE_R00_20261112.svg` — alt: Tam giác vuông 3–4–5 và trường hợp riêng định lý côsin
3. `assets/Temp_TOPIC_TRIG_SIN_GRAPH_R00_20261112.svg` — alt: Đồ thị sin trên một chu kì

---
## VECTOR-G10-G12 · PR #793

SOURCE_PATH: `prototypes/thpt/content-drafts/topic-vector-coordinate/Temp_TOPIC_VECTOR_COORDINATE_R05_ALL_7_MODULES_REAL_FIGURES_20261114.md`
SOURCE_BLOB: `f8208b6e4ab0e552b0e71cad39e6c609208c912a`
SOURCE_BRANCH: `authoring/topic-vector-coordinate-scope-r00-20261108`
REVIEW_GATE: R03 CONTENT_READY frozen; R05 7 formal blocks plus 5 NEW SVG/7 on-page target diagrams.

**This is a new learner candidate, not historic PASS.** Original outcomes/exercise canonical ID preservation covered by the named author QA on the respective PR, but the mathematical meaning and completeness of NEW boxed statements need independent judgment. Verify that the classified type is appropriate (definition/theorem/property/formula/method/extension), all conditions are explicit, no math formula conflicts with original text, and every claimed image exists and matches the learner reading instruction.

### Exact source-box text (copied from locked Git blob)

#### Classified statement 1: ĐỊNH NGHĨA — Vectơ: độ lớn, phương và hướng

> **ĐỊNH NGHĨA — Vectơ: độ lớn, phương và hướng**
>
> Vectơ \(\overrightarrow{AB}\) đi từ A đến B, có độ dài AB. Hai vectơ khác không bằng nhau khi cùng hướng và cùng độ dài. Vectơ-không dài 0, tuân thủ quy ước KNTT.

#### Classified statement 2: TÍNH CHẤT — Cộng, trừ và nhân vectơ với số

> **TÍNH CHẤT — Cộng, trừ và nhân vectơ với số**
>
> \[\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC},\quad\vec u-\vec v=\vec u+(-\vec v),\quad |k\vec u|=|k||\vec u|.\] Phải giữ đúng chiều mũi tên.

#### Classified statement 3: CÔNG THỨC — Tọa độ và tích vô hướng trên Oxy

> **CÔNG THỨC — Tọa độ và tích vô hướng trên Oxy**
>
> Oxy: \(\overrightarrow{AB}=(x_B-x_A;y_B-y_A)\) và \(\vec u\cdot\vec v=u_1v_1+u_2v_2\); tính góc cần hai vectơ khác không.

#### Classified statement 4: CÔNG THỨC — Đường thẳng, đường tròn và conic

> **CÔNG THỨC — Đường thẳng, đường tròn và conic**
>
> Đường thẳng pháp tuyến khác không \(ax+by+c=0\). Đường tròn tâm I(a;b), bán kính \(R>0\): \[(x-a)^2+(y-b)^2=R^2.\] Conic khác cần kiểm định nghĩa riêng.

#### Classified statement 5: TÍNH CHẤT — Quan hệ hình học trong không gian

> **TÍNH CHẤT — Quan hệ hình học trong không gian**
>
> Trong không gian, hai đường không giao nhau có thể chéo nhau. Để d vuông góc mặt phẳng (P), có thể chứng minh d vuông góc hai đường cắt nhau trong (P). Phối cảnh không chứng minh hình học.

#### Classified statement 6: CÔNG THỨC — Vectơ và hệ tọa độ Oxyz

> **CÔNG THỨC — Vectơ và hệ tọa độ Oxyz**
>
> Oxyz: \[\overrightarrow{AB}=(x_B-x_A;y_B-y_A;z_B-z_A),\quad AB=\sqrt{(\Delta x)^2+(\Delta y)^2+(\Delta z)^2}.\]

#### Classified statement 7: CÔNG THỨC — Mặt phẳng, đường thẳng, mặt cầu Oxyz

> **CÔNG THỨC — Mặt phẳng, đường thẳng, mặt cầu Oxyz**
>
> Mặt phẳng pháp tuyến khác không: \(ax+by+cz+d=0\). Đường thẳng \(\vec{OM}=\vec{OM_0}+t\vec u\) với chỉ phương khác 0. Mặt cầu tâm (a;b;c) bán kính R dương: \[(x-a)^2+(y-b)^2+(z-c)^2=R^2.\]

### Learner figure refs inside the source (7 total)

1. `Temp_TOPIC_VECTOR_PART1_BETWEENNESS_D5_R01.svg` — alt: Đọc hai vectơ MA và MB để xét M nằm giữa A B
2. `assets/Temp_TOPIC_VEC_R05_TRIANGLE_PARALLELOGRAM_20261114.svg` — alt: Quy tắc tam giác AB cộng BC bằng AC và quy tắc hình bình hành AB cộng AD bằng AC
3. `assets/Temp_TOPIC_VEC_R05_OXY_COMPONENT_DOT_20261114.svg` — alt: Trong Oxy, từ A âm hai ba đến B bốn âm một có vectơ AB bằng sáu âm bốn; hai vectơ tạo góc tù có tích vô hướng âm
4. `assets/Temp_TOPIC_VEC_R05_LINE_CIRCLE_PARABOLA_20261114.svg` — alt: Ba hình phẳng: đường thẳng có vectơ pháp tuyến, đường tròn tâm I bán kính R và parabol có trục đối xứng
5. `assets/Temp_TOPIC_VEC_R05_PLANE_PERP_PROJECTION_20261114.svg` — alt: Đường d vuông góc với hai đường cắt nhau a b trong mặt phẳng P, suy ra d vuông góc mặt phẳng P
6. `exp-notebook-d5-equivalent/Temp_FIG_TOPIC2_P06_AB_COMPONENTS_S1_EQUIVALENT_R01_20261110.svg` — alt: Độ dời theo ba trục của vectơ AB trong Oxyz, độ dài căn 29
7. `assets/Temp_TOPIC_VEC_R05_PLANE_LINE_SPHERE_20261114.svg` — alt: Mô hình Oxyz: mặt phẳng có pháp tuyến n, đường thẳng d có vectơ chỉ phương u và mặt cầu tâm I bán kính R

---
## FUNCTIONS-G10-G12 · PR #801

SOURCE_PATH: `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_TOPIC1_FULL_R16_NUMBERED_FORMAL_VAN_DUNG_25_SVG_20261114.md`
SOURCE_BLOB: `ad7aadd6b8056384078a4dc315811478bec250f0`
SOURCE_BRANCH: `authoring/topic-functions-m1-domain-depth-d5-20261110`
REVIEW_GATE: R15 CONTENT_READY frozen; R16 14 formal blocks and 25 SVG refs with altered grouping.

**This is a new learner candidate, not historic PASS.** Original outcomes/exercise canonical ID preservation covered by the named author QA on the respective PR, but the mathematical meaning and completeness of NEW boxed statements need independent judgment. Verify that the classified type is appropriate (definition/theorem/property/formula/method/extension), all conditions are explicit, no math formula conflicts with original text, and every claimed image exists and matches the learner reading instruction.

### Exact source-box text (copied from locked Git blob)

#### Classified statement 1: ĐỊNH NGHĨA — Hàm số và tập giá trị

> **ĐỊNH NGHĨA — Hàm số và tập giá trị**
>
> Hàm số \(f:D\to\mathbb R\) gán cho **mỗi** \(x\in D\) đúng một giá trị \(f(x)\); \(D\) là **tập xác định** và \(\{f(x):x\in D\}\) là tập giá trị. Không đồng nhất đầu ra với đầu vào.

#### Classified statement 2: GHI NHỚ — Miền xác định và miền mô hình

> **GHI NHỚ — Miền xác định và miền mô hình**
>
> Muốn tìm miền của biểu thức, lấy **giao** mọi điều kiện cần (căn bậc hai thực không âm, mẫu khác 0, log có đối số dương). Miền toán của biểu thức có thể rộng hơn miền ý nghĩa của bài toán thực tế.

#### Classified statement 3: ĐỊNH NGHĨA — Đồng biến và nghịch biến trên một khoảng

> **ĐỊNH NGHĨA — Đồng biến và nghịch biến trên một khoảng**
>
> Trên khoảng \(K\) thuộc miền: đồng biến nghiêm ngặt khi \(x_1<x_2\Rightarrow f(x_1)<f(x_2)\) với **mọi** cặp trong K; nghịch biến nghiêm ngặt khi bất đẳng thức đầu ra đổi chiều. Hai điểm không đủ chứng minh cả khoảng.

#### Classified statement 4: GHI NHỚ — Đọc đồ thị có điều kiện

> **GHI NHỚ — Đọc đồ thị có điều kiện**
>
> Chấm đặc là điểm thuộc đồ thị, vòng rỗng là điểm bị loại; trục và đơn vị phải đọc được. Đường nối giữa số liệu đo là **mô hình**, không chứng minh các giá trị chưa đo.

#### Classified statement 5: CÔNG THỨC — Dạng đỉnh parabol

> **CÔNG THỨC — Dạng đỉnh parabol**
>
> Với \(f(x)=ax^2+bx+c\), \(a\ne0\), \[f(x)=a(x-h)^2+k,\quad h=-\frac b{2a},\quad k=f(h).\] Trục đối xứng \(x=h\); trước khi tìm giá trị tối ưu của mô hình phải kiểm miền x hợp lệ.

#### Classified statement 6: TÍNH CHẤT — Cực trị parabol

> **TÍNH CHẤT — Cực trị parabol**
>
> Khi a>0 parabol có GTNN toàn R tại đỉnh, khi a<0 có GTLN toàn R. Trên đoạn/miền bị giới hạn, phải xét đỉnh **nếu thuộc miền** và các biên thích hợp; không gọi đỉnh ngoài miền là nghiệm tối ưu.

#### Classified statement 7: ĐỊNH NGHĨA — Hàm chẵn/lẻ và tuần hoàn

> **ĐỊNH NGHĨA — Hàm chẵn/lẻ và tuần hoàn**
>
> Trên miền D đối xứng qua 0, f chẵn khi \(f(-x)=f(x)\) mọi x∈D, lẻ khi \(f(-x)=-f(x)\). Hàm tuần hoàn có chu kì \(T>0\) khi miền xác định bất biến dưới phép dịch T và \(f(x+T)=f(x)\) với mọi x trong miền; không suy điều này chỉ từ vài điểm mẫu.

#### Classified statement 8: GHI NHỚ — Lượng giác, hàm mũ và lôgarit

> **GHI NHỚ — Lượng giác, hàm mũ và lôgarit**
>
> \(\sin,\cos\) có chu kì cơ bản \(2\pi\), tan/cot có miền bị loại. Hàm mũ cơ số a yêu cầu \(a>0,a\ne1\); \(\log_a x\) yêu cầu thêm \(x>0\). Chọn công cụ theo tính lặp hay tăng trưởng, không chỉ theo hình cong.

#### Classified statement 9: ĐỊNH NGHĨA — Giới hạn và liên tục

> **ĐỊNH NGHĨA — Giới hạn và liên tục**
>
> \(\lim_{x\to a}f(x)=L\) mô tả giá trị f(x) khi x tiến gần a trong miền, không nhất thiết có f(a). Hàm liên tục tại a khi a thuộc miền, giới hạn tồn tại hữu hạn và \(\lim_{x\to a}f(x)=f(a)\); ở đầu mút xét phía thích hợp.

#### Classified statement 10: TÍNH CHẤT — Hai phía và liên tục

> **TÍNH CHẤT — Hai phía và liên tục**
>
> Khi x tiến a từ hai phía đều được, giới hạn hữu hạn hai phía tồn tại khi và chỉ khi giới hạn trái và phải **cùng** một L. Cần thêm f(a)=L để liên tục, không nhầm một điểm rỗng với giá trị được nhận.

#### Classified statement 11: ĐỊNH NGHĨA — Đạo hàm

> **ĐỊNH NGHĨA — Đạo hàm**
>
> Nếu giới hạn hữu hạn \[f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}h\] tồn tại (với các đầu vào hợp lệ và a là điểm trong miền), đó là đạo hàm tại a. Không thay h=0 vào thương sai phân gốc.

#### Classified statement 12: CÔNG THỨC — Tiếp tuyến tại điểm khả vi

> **CÔNG THỨC — Tiếp tuyến tại điểm khả vi**
>
> Tại \(P(a,f(a))\), khi f khả vi tại a, tiếp tuyến có \[y=f(a)+f'(a)(x-a).\] Độ dốc là \(f'(a)\); nếu đồ thị có góc nhọn hoặc không có đạo hàm hữu hạn, không suy tiếp tuyến theo công thức này.

#### Classified statement 13: TÍNH CHẤT — Dấu đạo hàm và tính đơn điệu

> **TÍNH CHẤT — Dấu đạo hàm và tính đơn điệu**
>
> Trên một khoảng thích hợp, nếu \(f'(x)>0\) ở mọi điểm thì f tăng nghiêm ngặt; nếu \(f'(x)<0\) thì f giảm nghiêm ngặt. \(f'(c)=0\) riêng lẻ **không đủ** để kết luận có cực trị; phải xét dấu qua c.

#### Classified statement 14: PHƯƠNG PHÁP — Tối ưu trên miền hợp lệ

> **PHƯƠNG PHÁP — Tối ưu trên miền hợp lệ**
>
> Kiểm miền có nghĩa, giải \(f'(x)=0\), xét điểm không khả vi và biên, lập bảng dấu/giá trị để chọn kết quả hợp điều kiện. Cực trị địa phương không tự là cực trị tuyệt đối trên miền mô hình.

### Learner figure refs inside the source (25 total)

1. `Temp_FIG_TOPIC1_M1_DOMAIN_INTERSECTION_R00.svg` — alt: Hai điều kiện và tập xác định sau khi lấy giao
2. `Temp_FIG_TOPIC1_M2_SAME_POINTS_DIFFERENT_CURVES_R08.svg` — alt: Hai công thức đi qua cùng ba điểm nhưng khác giá trị giữa các mốc
3. `Temp_FIG_TOPIC1_M2_PIECEWISE_ENDPOINTS_R00.svg` — alt: Hai nhánh với vòng rỗng và điểm đặc
4. `Temp_FIG_TOPIC1_M3_INPUT_OUTPUT_TWO_MACHINES_R01.svg` — alt: Sơ đồ hai máy: trị tuyệt đối đặt ngoài hay trong f
5. `Temp_FIG_TOPIC1_M3_ABSOLUTE_GRAPH_COMPARE_R00.svg` — alt: So sánh hai phép biến đổi đồ thị
6. `Temp_FIG_TOPIC1_M3_TRANSLATION_AND_DOMAIN_R00.svg` — alt: Điểm và miền thay đổi khi tịnh tiến đồ thị
7. `../../../../../docs/assets/images/thpt/FIG-G11-B03-01_R01.svg` — alt: Sin: giá trị và chu kỳ
8. `../../../../../docs/assets/images/thpt/FIG-G11-B03-02_R01.svg` — alt: Cos: giá trị và chu kỳ
9. `../../../../../docs/assets/images/thpt/FIG-G11-B03-03_R01.svg` — alt: Tan: các nhánh và điểm loại
10. `../../../../../docs/assets/images/thpt/FIG-G11-B03-04_R01.svg` — alt: Cot: các nhánh và điểm loại
11. `../../../../../docs/assets/images/thpt/FIG-G11-CHVI-B20-01_R00.svg` — alt: Cặp đồ thị hàm mũ và logarit đối xứng qua đường y bằng x
12. `Temp_FIG_TOPIC1_M4_M7_LOG_ONE_FUNCTION_STORY_R10.svg` — alt: Một hàm logarit với miền, điểm mốc, tiệm cận và tiếp tuyến
13. `../../../../../docs/assets/images/thpt/FIG-G11-B16-01_R01.svg` — alt: Đồ thị có lỗ tại x bằng 2 nhưng có giới hạn bằng 4
14. `../../../../../docs/assets/images/thpt/FIG-G11-B17-01_R01.svg` — alt: Điểm rỗng và điểm đặc dùng để xét tính liên tục
15. `../../../../../docs/assets/images/thpt/FIG-G11-CHIX-B31-01_R00.svg` — alt: Cát tuyến tiến dần thành tiếp tuyến tại điểm trên parabol
16. `../../../../../docs/assets/images/thpt/FIG-G11-CHIX-B31-02_R00.svg` — alt: Đồ thị giá trị tuyệt đối có góc nhọn không khả vi tại gốc
17. `../../../../../docs/assets/images/thpt/FIG-G11-CHIX-B32-01_R00.svg` — alt: Diện tích hình chữ nhật minh họa quy tắc đạo hàm tích
18. `../../../../../docs/assets/images/thpt/FIG-G11-CHIX-B32-02_R00.svg` — alt: Sơ đồ hai tầng đầu vào hàm trong và hàm ngoài của quy tắc dây chuyền
19. `../../../../../docs/assets/images/thpt/FIG-G11-CHIX-B33-01_R00.svg` — alt: Chuỗi mối liên hệ từ vị trí đến vận tốc và gia tốc
20. `../../../../../docs/assets/images/thpt/G12_B01_FIG01_DERIVATIVE_SIGN_R00.svg` — alt: Bảng dấu đạo hàm và khoảng tăng giảm qua hai điểm tới hạn
21. `../../../../../docs/assets/images/thpt/G12_B02_FIG01_GLOBAL_MIN_MAX_CLOSED_INTERVAL_R00.svg` — alt: Parabol với giá trị lớn nhất nhỏ nhất trên đoạn kín
22. `../../../../../docs/assets/images/thpt/G12_B03_FIG01_ASYMPTOTES_R00.svg` — alt: Đồ thị phân thức có tiệm cận đứng và ngang
23. `../../../../../docs/assets/images/thpt/G12_B04_FIG01_RATIONAL_SURVEY_R00.svg` — alt: Khảo sát đồ thị phân thức với hai nhánh và hai tiệm cận
24. `../../../../../docs/assets/images/thpt/G12_B04_FIG02_CUBIC_SURVEY_R00.svg` — alt: Đồ thị bậc ba với cực trị và giao điểm trục hoành
25. `../../../../../docs/assets/images/thpt/G12_B05_FIG01_BOX_VOLUME_R00.svg` — alt: Đồ thị thể tích hộp không nắp trên miền độ dài hợp lệ

---
## COPYABLE REVIEW PROMPT · FOUR SENTENCES

Đối chiếu **đúng 7 source Git SHA** trong file review này với nội dung đầy đủ từng nguồn, SGK/SBT Kết nối tri thức S1 và đúng **5 Permanent Sources THPT v2.1**, theo một chuẩn Q01–Q18; đánh giá độc lập Academic và PED theo **từng bài/outcome/khung kiến thức/hình**, không chỉ thống kê số công thức. Kiểm tra tên loại khung, định nghĩa, điều kiện áp dụng, suy luận, ký hiệu MathJax, sự tương thích với ví dụ/lời giải và xem các SVG thực có đúng nội dung hướng dẫn đọc hình hay không, đồng thời kiểm riêng các blocker Q01/Q15 đang mở của CĐ20/CĐ21. Báo cáo `SOURCE_RECEIPT` cho đúng từng Git blob, verdict PASS/HOLD theo từng gói, P0/P1/P2, `MINIMAL_DELTA` có Qxx + bài/outcome + chứng cứ + cách sửa tối thiểu; **không tự mở cổng CONTENT_READY**, không tự chuyển PASS giữa các snapshot. Không sử dụng câu/bank RD1 kín, không xem nguồn phụ như Permanent Source thứ sáu, không đánh giá website hay phát hành.

## Batch counts (exact extract)

- PLAN22-19: PR #858, `022d6c9befa352842b6221ae0162cc8ab29c16d6`, 14 classified blocks, 4 image refs
- PLAN22-20: PR #860, `906167eabc8260d1245d3f89a3d94d64006f5093`, 9 classified blocks, 2 image refs
- PLAN22-21: PR #863, `0258f29a1ece0fd9d0c1772781878ce827282c24`, 8 classified blocks, 1 image refs
- PLAN22-22: PR #812, `bdf40b7ce8cdbe0a8db67750281a4162ba421a59`, 13 classified blocks, 2 image refs
- TRIG-G10-G11: PR #813, `91a08af54829aeb0ad643efb2fee794dc3b31fe0`, 14 classified blocks, 3 image refs
- VECTOR-G10-G12: PR #793, `f8208b6e4ab0e552b0e71cad39e6c609208c912a`, 7 classified blocks, 7 image refs
- FUNCTIONS-G10-G12: PR #801, `ad7aadd6b8056384078a4dc315811478bec250f0`, 14 classified blocks, 25 image refs

**Total: 79 classified mathematical/formal blocks across 7 candidate snapshots.** This review excerpt is deliberately not a substitute for the frozen full content source and cannot authorize merging, publishing, Q16 private RD1, official readiness or Mastery.
