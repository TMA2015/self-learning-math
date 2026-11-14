# Temp — Toán 11 KNTT Chương V B15–B17 · Whole-chapter PUBLIC author candidate R01

**PACKET_ID:** `THPT-G11-CHV-B15-B17-WHOLE-CHAPTER-AUTHORING-R01-20261101`  
**STATUS:** `AUTHOR_CANDIDATE_NOT_NOTEBOOKLM_REVIEWED`; public-only. This file is prepared for later one-batch academic + pedagogical review, but **DO NOT SUBMIT** while source SBT S1 and exposure QA remain pending.  
**USER-APPROVED PURPOSE (Issue #691):** enable a student to understand from WHY and WHAT through definitions, visual reasoning, examples, independent practice and application. Reviewer must score `PEDAGOGICAL_SELF_LEARNING_READY` separately from math correctness.  
**Public inventory:** 17 outcomes; 12 worked examples; 30 Core/Practice/Application; 6 shared Written (3 Anchor tags); 3 original SVG; 6 HELP cards. **Private RD1 (17 items) is NOT present here**, and is retained only in the private ChatGPT Library.  
**S1 status:** SGK sample B15 p104–110, B16 p111–118, B17 p119–122, end ChV p123. Corresponding original SBT printed pages pending; secondary sources disagree with previous ChIV receipt. Exact printed S1 and overlap must be reconciled before final academic-source approval.  
**Teaching QA contract:** A learner must see why a concept is needed, what it is in ordinary language, its formation, formal definition and conditions, meaningful diagram, reasoned worked example, microcheck and graded formative. There is **no automatic PED pass** from this compiled candidate.

## Source ledger (exact repository blobs)

- `prototypes/thpt/content-drafts/G11_CHV_B15_B17_S1_RD0_D1_D2_AUTHORING_R00_20261101.md` — Git blob `caf35c04a7d3955667ed676d1df736e30ab5acdd`.
- `prototypes/thpt/content-drafts/G11_CHV_B15_B17_D3_PUBLIC_CANONICAL_CANDIDATES_R01_20261101.md` — Git blob `aae88016555eff2553bfb1016692e310d25a84dc`.
- `prototypes/thpt/content-drafts/G11_CHV_B15_B17_D4_WRITTEN_D6_HELP_R01_20261101.md` — Git blob `6b370781e3bab2951d8a11fd8d97030ffbb528d5`.
- `prototypes/thpt/content-drafts/svg/FIG-G11-B15-01_R01.svg` — Git blob `632bef51196757f9c71f54c53bb3c7639ce158e0`.
- `prototypes/thpt/content-drafts/svg/FIG-G11-B16-01_R01.svg` — Git blob `d623e8a96c6d5f9723aafb9c62bffe57bdc9aa73`.
- `prototypes/thpt/content-drafts/svg/FIG-G11-B17-01_R01.svg` — Git blob `acf2b484d992e5cbe5443d6dc016a2d12d5baf58`.

---

## PART A — RD0 + D1 + D2 (concept-first, guided examples)

# Toán 11 SGK KNTT Tập 1 — Chương V: Giới hạn. Hàm số liên tục
## R00 pedagogical rewrite (Issue #691): S1 scope, RD0, D1 concept-first, D2 worked examples

**STATUS:** AUTHORING_WIP_ONLY; **NOT** a NotebookLM review source, NOT Academic PASS, NOT A1–A7, NOT a learner website.  
**Scope:** B15, B16, B17 and final SGK Chapter V exercise; independent SGK_CHAPTER_READINESS will be designed as separate protected RD1, NOT published here.  
**Source precedence:** SGK/SBT KNTT S1, Project 08 dual complete paths, 06 review handoff, 07 delta. Public digital scan of official SGK Toán 11 Tập 1, 2022 sample edition TOC and knowledge/skills boxes inspected for initial RD0; original owner S1 PDF and corresponding **SBT** chapter must be verified before source lock. Public browsing is provisional, not an assertion of owner scan provenance.

### Source map — keep boundaries correct

| Unit | Printed SGK pages | Source status |
|---|---|---|
| B15 — Giới hạn của dãy số | 104–110 | Provisional SGK scan TOC and content text |
| B16 — Giới hạn của hàm số | 111–118 | Provisional SGK scan TOC and content text |
| B17 — Hàm số liên tục | 119–122 | Provisional SGK scan TOC and content text |
| Bài tập cuối Chương V | **123 only** | Next heading at p124 is a SEPARATE experiential section |
| Hoạt động thực hành trải nghiệm | 124–129 | **Not part of SGK Chapter V chapter-end Readiness by default** |
| SBT Toán 11 Tập 1, B15–17 | **UNVERIFIED** | Must obtain original SBT exact printed pages, problems and solution pages |

Public cross-check: SGK Toán 11 T1 online TOC at https://media.metaisach.com/2025/09/toan-11-tap-1-ket-noi-tri-thuc-voi-cuoc-song-3c036587.pdf ; verify in owner original S1 before the final packet. Do not copy original textbook examples verbatim: examples below are original self-learning examples aligned to outcome structure.

## RD0. Expected learning outcome coverage (provisional IDs; 17 distinct)

| ID | Learning competency | Required assessment evidence |
|---|---|---|
| G11-B15-FINITE_SEQUENCE | Definition of finite sequence limit, approaching 0 or finite a | D1 + D2 + future Core |
| G11-B15-INFINITE_SEQUENCE | Recognize plus/minus infinity and no-limit divergent oscillation | D1 + comparison + future Practice |
| G11-B15-LIMIT_ARITHMETIC | Compute elementary limits with safe nonzero denominator, powers/signs | D1 + D2 + future Practice |
| G11-B15-GEOMETRIC | Infinite decreasing geometric progression: absolute value of q less than 1 | D1 + D2 + future Anchor |
| G11-B15-GEOMETRIC_APPLICATION | Sum a geometric series and interpret a modeled situation | D2 + future Application |
| G11-B16-LIMIT_AT_POINT | Finite limit at x0, independent of value f(x0) | D1 + D2 + future Core |
| G11-B16-ONE_SIDED | Left/right limits, equality criterion for two-sided limit | D1 + D2 + future Core/Practice |
| G11-B16-ALGEBRAIC_TECHNIQUES | Factorization, rationalization, denominator control | D1 + D2 + future Practice |
| G11-B16-LIMIT_AT_INFINITY | Limits x→±∞, leading terms and sign of radicals | D1 + D2 + future Practice |
| G11-B16-INFINITE_LIMIT | Signed infinite limits and conditions for quotients | D1 + D2 + future Core/Practice |
| G11-B16_REAL_CONTEXT | Interpret domain and limit of a modeled quantity | D2 + future Application |
| G11-B17-CONTINUITY_POINT | f(a) exists, finite limit equals f(a); classify removable/jump cases without overloading Core terms | D1 + D2 + future Core |
| G11-B17-CONTINUITY_INTERVAL | Continuity on open interval and endpoints of closed interval | D1 + D2 + future Practice |
| G11-B17-ELEMENTARY_CONTINUITY | Domain-sensitive continuity of elementary functions | D1 + D2 + future Core |
| G11-B17-CONTINUITY_OPERATIONS | Finite sums/products/quotients, nonzero denominator at point | D1 + D2 + future Practice |
| G11-B17-ZERO_EXISTENCE | Existence of a zero on a closed interval under continuity and opposite endpoint signs | D1 + D2 + future Written |
| G11-CHV-INTEGRATED | Chain: sequences → limits → continuity, compare candidate claims and conditions | Whole chapter Written + protected RD1 |

**Self-learning pedagogy:** D1 for B15–B17 was re-authored concept-first under Issue #691, with motivation, prerequisite bridge, intuition, precise definition, symbol conditions, first-step check. This remains an unreviewed WIP and does NOT mean D3–D6/RD1/complete chapter is ready.

**Outcome status at source draft time:** RD0 AUTHORING DRAFT. The consolidated candidate below contains D3/D4/D5/D6 and held-out RD1 is separately preserved; independent academic/pedagogical review and original S1 source verification remain pending. Do not infer PASS from volume of material.

---

## B15 — D1. Giới hạn của dãy số (giảng từ trực giác đến định nghĩa)

### 1. Vì sao cần khái niệm "giới hạn"?

Em hãy nhìn dãy số: **1; 1/2; 1/3; 1/4; 1/5; ...**. Mỗi số hạng đều lớn hơn 0, nhưng càng về sau giá trị càng nhỏ. Nếu tiếp tục mãi, các số hạng **tiến gần đến 0**, dù không bắt buộc có số hạng nào bằng 0. Ta muốn mô tả chính xác chuyện "ngày càng gần" này, vì nó giúp hiểu những quá trình có thể tiếp tục vô hạn (ví dụ các phần tiết kiệm ngày càng nhỏ).

**Cầu nối kiến thức:** dãy số là các số xếp theo thứ tự u₁,u₂,u₃,...; chỉ số n là số thứ tự. Không phải giới hạn là một "số hạng cuối": dãy có thể không có số hạng cuối.

### 2. Quan sát trước khi định nghĩa

**Hình trực quan D5:** ![Dãy 1/n giảm dần, tiến về trục 0, không có số hạng cuối](../content-drafts/svg/FIG-G11-B15-01_R01.svg)

**Cách đọc hình:** Mỗi chấm ứng với một chỉ số n và giá trị uₙ=1/n. Các chấm càng về bên phải càng sát trục ngang uₙ=0 nhưng luôn ở phía trên. Vì vậy “tiến đến 0” KHÔNG có nghĩa “đến một số hạng cuối bằng 0”. Hãy quan sát điều này trước khi đọc ε và N trong định nghĩa.

Với u_n=1/n: u₁=1, u₂=0,5, u₁₀=0,1, u₁₀₀=0,01. Nếu chọn một vùng rất gần 0, chẳng hạn khoảng cách nhỏ hơn 0,01, từ khi n>100 trở đi **mọi** u_n đều nằm trong vùng ấy. Nếu em muốn gần hơn nữa, vẫn có thể chọn n đủ lớn. Đó là ý cốt lõi của "giới hạn bằng 0".

Không phải dãy nào cũng tiến gần một số. Với v_n=(−1)^n, các số hạng thay đổi liên tục −1,1,−1,1,..., không thể ngày càng ở sát một số cố định. Dãy này **không có giới hạn**, không phải "có giới hạn vô cực".

### 3. Phát biểu toán học và giải thích ký hiệu

Ta viết **lim_{n→∞}u_n=a** khi các số hạng từ một lúc đủ muộn trở đi có thể gần a tùy ý. Nói chặt chẽ: với mọi sai số ε>0 mà ta chọn, tồn tại một chỉ số N sao cho **mọi n≥N** đều thỏa **|u_n−a|<ε**.

- ε (đọc là *ép-si-lon*) chỉ một mức sai số dương tùy nhỏ, **không** phải số cố định do giáo viên chọn sẵn.
- N là mốc có thể phụ thuộc mức sai số ε; sau mốc đó **tất cả** số hạng đều gần a, không chỉ một vài số hạng.
- |u_n−a| là khoảng cách trên trục số từ số hạng u_n đến a.
- n→∞ nghĩa là xét các chỉ số n tăng mãi, **không** thay n bằng một số gọi là "vô cực".
- Khi a=0, điều kiện trở thành |u_n|<ε từ một lúc đủ muộn; muốn chứng minh lim u_n=a thường đưa về lim(u_n−a)=0.

**Ví dụ áp dụng định nghĩa:** Cho u_n=1/n và sai số ε>0. Chọn một số tự nhiên N lớn hơn 1/ε. Khi n≥N, 1/n≤1/N<ε, nên lim_{n→∞}1/n=0.

### 4. Giới hạn vô cực khác giới hạn hữu hạn thế nào?

Nếu u_n cuối cùng vượt **mọi mốc lớn** M>0, ta viết lim u_n=+∞; nếu u_n cuối cùng nhỏ hơn −M với mọi M>0, viết lim u_n=−∞. Đây là mô tả cách dãy lớn/nhỏ không bị chặn về một phía, **không phải cộng/trừ một số thực có tên "∞"**. Ví dụ u_n=n→+∞; còn (−1)^n n đổi dấu và có độ lớn tăng nên không có giới hạn theo hai nghĩa ±∞ vừa nêu.

### 5. Quy tắc tính được dùng khi nào?

Những giới hạn cơ bản: lim 1/n^p=0 với p>0; lim q^n=0 khi **|q|<1**. Nếu u_n→a, v_n→b **đều hữu hạn**, tổng/hiệu/tích có giới hạn lần lượt a±b, ab. Thương có giới hạn a/b **chỉ khi b≠0**, và mẫu v_n phải khác 0 từ một chỉ số đủ lớn. Nếu cả tử và mẫu tiến đến 0, không được lấy 0/0; hãy biến đổi biểu thức hoặc chọn phương pháp khác.

### 6. Vì sao có tổng của vô hạn số hạng?

Xét 5+5/4+5/16+... . Mỗi số hạng sau bằng **1/4** số hạng trước. Cộng lần lượt các số hạng đầu ta được những tổng riêng tăng dần, nhưng các phần tăng thêm nhỏ dần. Với cấp số nhân có số hạng đầu a và công bội q, khi **|q|<1** thì q^n→0; từ S_n=a(1−q^n)/(1−q) suy ra tổng vô hạn S=a/(1−q). Điều kiện |q|<1 không chỉ là chú thích: nó giải thích vì sao phần còn lại nhỏ dần.

**Tự thử trước bài tập:** Dãy 2+1/n tiến gần số nào? Tại sao không cần có số hạng nào đúng bằng số đó? Sau khi tự nghĩ, kiểm tra: tiến gần 2 vì 1/n→0. Đây là formative tự học, không ghi Skill Mastery.

### B15 — D2. Bốn ví dụ độc lập

**EX-G11-B15-01 — Giới hạn hữu hạn bằng chia bậc cao nhất.** Tính lim_{n→∞}(3n+1)/(n+4). Chia cả tử và mẫu cho n: (3+1/n)/(1+4/n)→3. Mẫu giới hạn 1 khác 0, do đó phép chia giới hạn hợp lệ. **Bẫy:** không được thay n=∞ như một số.

**EX-G11-B15-02 — Dao động và giới hạn 0.** Xét u_n=(−1)^n/n và v_n=(−1)^n. Ta có |u_n|≤1/n→0, nên u_n→0. Nhưng v_n có hai dãy con n chẵn, n lẻ lần lượt bằng 1 và −1, không thể có cùng giới hạn. **Bẫy:** dấu luân phiên không tự quyết định hội tụ.

**EX-G11-B15-03 — Tổng cấp số nhân lùi vô hạn.** Tính T=5+5/4+5/16+... . Ta có a=5, q=1/4, |q|<1; S=5/(1−1/4)=20/3. Thử tổng 3 số hạng đầu 105/16<20/3 để đối chiếu chiều tăng. **Bẫy:** không dùng công thức khi |q|≥1.

**EX-G11-B15-04 — Tình huống vận dụng.** Một thiết bị lần đầu tiết kiệm 120 đơn vị năng lượng, mỗi đợt sau chỉ tiết kiệm bằng 2/5 đợt liền trước. Tổng tiết kiệm lý thuyết sau vô hạn đợt: 120/(1−2/5)=200 đơn vị. Mô hình giả định công bội không đổi; số đợt thực tế hữu hạn thì tổng nhỏ hơn 200. **Bẫy:** phân biệt giới hạn mô hình và quá trình hữu hạn.

## B16 — D1. Giới hạn của hàm số (nhìn hành vi gần điểm trước khi tính)

### 1. Câu hỏi mở đầu: tại một điểm chưa tính được thì sao?

Xét f(x)=(x²−4)/(x−2). Em thử thế x=2: mẫu bằng 0, phép chia không xác định. Nhưng nếu xét **gần 2**, ta có bảng:

| x | 1,9 | 1,99 | 2,01 | 2,1 |
|---|---:|---:|---:|---:|
| f(x) | 3,9 | 3,99 | 4,01 | 4,1 |

Vì x≠2, ta có thể rút gọn f(x)=x+2. Khi x tiến về 2, các giá trị f(x) tiến về **4**, mặc dù chính f(2) **không tồn tại**. Khái niệm **giới hạn của hàm số** giúp mô tả xu hướng ở gần một điểm, không đòi biết giá trị ngay tại điểm ấy.

**Cầu nối:** Em đã biết đọc đồ thị và tính giá trị f(x) tại x có nghĩa. Bài này khác ở chỗ quan sát x **tiến gần** a, không chỉ thay đúng x=a vào công thức.

**Hình trực quan D5:** ![Đồ thị y=x+2 có lỗ rỗng tại (2,4)](../content-drafts/svg/FIG-G11-B16-01_R01.svg)

**Cách đọc hình:** Đường màu xanh đi tới độ cao 4 khi x tiến từ trái hoặc phải về 2; vòng tròn rỗng tại (2,4) cho biết hàm gốc **không có giá trị ở x=2**. Đừng nhầm lỗ trống với việc giới hạn không tồn tại.

### 2. Định nghĩa và kí hiệu

Viết **lim_{x→a}f(x)=L** nghĩa là: khi x thuộc miền xác định, khác a và tiến gần a, giá trị f(x) tiến gần L. **Giới hạn không nhất thiết bằng f(a)**, và f(a) có thể chưa được định nghĩa. Một hàm có giới hạn khi x tiến về a qua các giá trị thuộc miền xác định đủ gần a, dù nó có thể bị "thủng" ngay tại a.

- "Giới hạn trái" **x→a⁻** là xét các x<a tiến gần a; "giới hạn phải" **x→a⁺** là xét x>a.
- Nếu miền xác định cho phép tiến gần từ hai phía, một giới hạn hữu hạn hai phía bằng L **chỉ khi cả hai giới hạn một phía đều tồn tại và bằng L**.
- Không được suy giới hạn hai phía từ một phía duy nhất.

### 3. Nhìn đường đi của giá trị

Với g(x)=1/(x−1), khi x→1⁺ thì mẫu là số dương rất nhỏ, g(x)→+∞; khi x→1⁻ thì mẫu âm rất nhỏ, g(x)→−∞. Hai phía **không cùng tiến đến một giá trị hữu hạn**, nên không có giới hạn hữu hạn hai phía tại 1. Dấu của mẫu là thông tin thiết yếu, không phải chi tiết phụ.

Khi nói x→+∞, ta cho x tăng mãi; x→−∞ là cho x giảm mãi về phía âm. **Phải kiểm tra dấu trước khi đưa x ra ngoài căn:** √(x²)=|x|, bằng −x nếu x<0.

### 4. Cách lựa chọn phương pháp

- Thay trực tiếp cho kết quả hữu hạn hợp lệ → có thể dùng tính liên tục/phép toán giới hạn thích hợp.
- Nếu thay trực tiếp ra **0/0** → đây chưa phải đáp số; tìm nhân tử chung, phân tích hoặc nhân liên hợp.
- Nếu tử tiến đến giá trị khác 0, mẫu tiến đến 0 → xét dấu ở từng phía trước khi kết luận ±∞.
- Khi x→±∞ → chia lũy thừa trội hoặc nhân liên hợp; với căn phải nhớ dấu của |x|.

**Tự thử:** Nếu k(x)=(x²−9)/(x−3) với x≠3, em đoán lim_{x→3}k(x) bằng bao nhiêu? Hãy giải thích tại sao phép "rút gọn" chỉ dùng cho x≠3, không phải xác định k(3). (Đối chiếu sau khi nghĩ: 6.)

### B16 — D2. Bốn ví dụ độc lập

**EX-G11-B16-01 — Khử 0/0.** lim_{x→2}(x²−4)/(x−2) = lim_{x→2}(x+2)=4 vì x²−4=(x−2)(x+2) khi x≠2. Hàm gốc không xác định tại 2 nhưng giới hạn vẫn bằng 4.

**EX-G11-B16-02 — Giới hạn một phía khác nhau.** Với f(x)=1/(x−1), khi x→1^+ mẫu dương nhỏ, f(x)→+∞; khi x→1^- mẫu âm nhỏ, f(x)→−∞. Không tồn tại giới hạn hữu hạn hai phía ở 1. Phải ghi **riêng từng phía**, không cộng hai vô cực.

**EX-G11-B16-03 — Liên hợp tại +∞.** Tính lim_{x→+∞}(√(x²+x)−x). Nhân liên hợp được x/(√(x²+x)+x)=1/(√(1+1/x)+1)→1/2, vì x>0 khi x→+∞. **Bẫy:** rút x khỏi căn phải dùng dấu x.

**EX-G11-B16-04 — Dấu của căn khi x âm lớn.** lim_{x→−∞}√(x²+1)/x=lim_{x→−∞}(|x|√(1+1/x²))/x=−1. **Bẫy:** viết √(x²)=x cho x<0 là sai.

## B17 — D1. Hàm số liên tục (vì sao cần giá trị khớp với xu hướng?)

### 1. Từ giới hạn sang liên tục

Ở Bài 16, em thấy một hàm vẫn có thể tiến tới 4 khi x→2 nhưng không được định nghĩa tại x=2. Điều gì xảy ra nếu ta **bổ sung giá trị tại điểm ấy**?

Xét h(x)=x+2 khi x≠2. Nếu đặt h(2)=4, đồ thị không bị "lỗ" ở điểm tương ứng và giá trị tại 2 khớp với những giá trị xung quanh. Nếu cố tình đặt h(2)=0, x ở gần 2 vẫn làm h(x) gần 4, **nhưng h(2) lại bằng 0**: điểm riêng lẻ bị lệch khỏi xu hướng. Ta gọi hiện tượng "khớp" đó là **liên tục tại một điểm**.

**Cầu nối:** Cần biết ở Bài 16 rằng **lim_{x→a}f(x)** mô tả xu hướng ở gần a, còn **f(a)** là giá trị đúng tại a; hai thứ không tự động giống nhau.

**Hình trực quan D5:** ![Đồ thị có lỗ tại (1,2) và chấm đặc tại (1,0)](../content-drafts/svg/FIG-G11-B17-01_R01.svg)

**Cách đọc hình:** Vòng tròn rỗng ở (1,2) thể hiện xu hướng giá trị hàm khi x gần 1; chấm đỏ đặc ở (1,0) là giá trị f(1) thực sự. Hai độ cao không khớp nên hàm gián đoạn tại 1. Hình cho trực giác; định nghĩa dưới đây mới là tiêu chuẩn kiểm tra chính thức.

### 2. Định nghĩa và điều kiện

Hàm f **liên tục tại a** khi (1) a thuộc tập xác định để f(a) có nghĩa; (2) giới hạn hữu hạn lim_{x→a}f(x) tồn tại; (3) **lim_{x→a}f(x)=f(a)**. Cả ba ý đều phải kiểm tra. "Đồ thị vẽ một nét không nhấc bút" là trực giác giúp hình dung, **không thay thế** điều kiện toán học.

Với hàm cho bởi các công thức khác nhau ở các khoảng, hãy so sánh giới hạn trái, giới hạn phải và **giá trị thật tại điểm nối**. Ví dụ f(x)=x+1 khi x<1 và f(x)=m khi x≥1: phía trái tiến đến 2, phía phải tiến đến m, đồng thời f(1)=m. Liên tục tại 1 khi và chỉ khi m=2.

### 3. Từ điểm sang khoảng, đoạn

Liên tục trên khoảng (a,b) nghĩa là liên tục tại mọi điểm bên trong. Liên tục trên đoạn [a,b] còn cần:
- ở a: **lim_{x→a⁺}f(x)=f(a)**;
- ở b: **lim_{x→b⁻}f(x)=f(b)**.

Tại đầu mút không đòi hỏi phía nằm **ngoài** đoạn xác định. Ví dụ √x liên tục trên [0,9], kiểm tra tại 0 từ bên phải và tại 9 từ bên trái.

Các hàm đa thức liên tục trên R; hàm phân thức liên tục ở nơi mẫu khác 0. Tổng/hiệu/tích của các hàm liên tục là liên tục; thương chỉ khi **mẫu tại điểm xét khác 0**. Không được nói phân thức liên tục trên toàn R nếu mẫu có nghiệm thực.

### 4. Ứng dụng: biết có nghiệm dù chưa giải ra

Nếu f **liên tục trên cả đoạn [a,b]** và f(a), f(b) trái dấu, đồ thị phải đi qua trục hoành ở **ít nhất một điểm** nằm giữa a và b. Ta viết điều kiện f(a)f(b)<0 và kết luận tồn tại c∈(a,b) sao cho f(c)=0. Không thể kết luận chỉ có đúng một nghiệm; muốn chứng minh duy nhất phải có lập luận bổ sung.

Ví dụ f(x)=x³+x−1: f(0)=−1, f(1)=1, và f là đa thức liên tục trên [0,1]. Vậy tồn tại một nghiệm trong (0,1).

**Tự thử:** Giả sử f có giới hạn tại a bằng 3 nhưng f(a)=5. Hàm có liên tục tại a không? Vì sao? (Đối chiếu: không, vì giá trị tại a khác giới hạn.) Sau đó chuyển sang Core/Practice để luyện độc lập, không tính điểm mastery từ câu tự thử.

### B17 — D2. Bốn ví dụ độc lập

**EX-G11-B17-01 — Tham số ghép nhánh.** Cho f(x)=x+1 nếu x<1; f(x)=m nếu x≥1. Hai phía tại 1 lần lượt tiến tới 2 và m, f(1)=m. Để liên tục tại 1 cần và đủ m=2.

**EX-G11-B17-02 — Miền liên tục của phân thức.** Với h(x)=(x+1)/(x−2), mẫu chỉ bằng 0 tại x=2. Vì vậy h liên tục trên (−∞,2) và (2,+∞), không liên tục tại 2 do hàm không xác định. **Bẫy:** không thể gọi liên tục trên toàn R.

**EX-G11-B17-03 — Đoạn có đầu mút.** f(x)=√x liên tục trên [0,9]: với mọi điểm trong (0,9) hàm liên tục; lim_{x→0^+}√x=0=f(0), lim_{x→9^-}√x=3=f(9). Không xét lim_{x→0^-} trong miền R, vì căn không xác định khi x<0.

**EX-G11-B17-04 — Chứng minh tồn tại nghiệm.** Đặt g(x)=x³+x−1. Đa thức liên tục trên [0,1], g(0)=−1<0, g(1)=1>0. Vậy tồn tại c∈(0,1) sao cho g(c)=0. Kết luận mới là **ít nhất một nghiệm**; chưa dùng phép đổi dấu để suy duy nhất.

## PART A source-to-next-part bridge

D3 (Core/Practice/Application), D4 Written, D5 SVG source and D6 HELP are included **below in this consolidated R01 packet**. The separate private RD1 is never in this public Markdown. The original Part A R00 authoring dependency list has been superseded by the whole-chapter R01 inventory; required source-S1/QA gates remain in the dedicated author QA manifest.

---

## PART B — D3 Canonical public formative

# G11 SGK KNTT Chương V B15–B17 — D3 Core / Practice / Application R01 (AUTHOR DRAFT)

**SCOPE:** G11 SGK Chapter V only · **Source:** SGK Toán 11 KNTT Tập 1 B15–B17, index 104–123; original owner S1/SBT PDF receipt still pending. **STATUS:** AUTHORING_ONLY_NOT_NOTEBOOKLM_PASS.  
**Teaching contract:** Issue #691; do not introduce a formula before its meaning and why needed in D1. This D3 file is the graduated independent practice *after* concept-first D1/D2 of the same chapter.  
**CANONICAL:** one item one ID; public formative is not protected RD1, correct practice does not independently prove Mastery. No duplicates with future private RD1.

## Readiness for practice — what the student should be able to explain first

- B15: what a limit describes, why a sequence has no “last term”, and how the ratio condition |q|<1 justifies an infinite geometric sum.
- B16: why “near a point” differs from “at the point”; why one-sided signs and domain matter.
- B17: why continuity needs both value at the point and agreement with the surrounding limit; why a sign change proves existence but not uniqueness.

**Sequence:** begin with C-items (meaning, conditions), then P-items (calculation, explanation and application). Each item has the answer and reasoning for feedback *after formative submission*, never as part of an assessment-before-Final-Submit flow.

## D3 canonical public item bank (30 candidates)

### B15 — Giới hạn dãy số

#### THPT-G11-CHV-B15-C01 · CORE · skill_id=G11-B15-FINITE_SEQUENCE

**Đề:** Với uₙ=7+3/n, số 7 có ý nghĩa gì khi n tăng mãi?

**Đáp án:** Giới hạn của dãy là 7.

**Lời giải và lời giải thích:** Khoảng cách từ uₙ đến 7 bằng 3/n, tiến về 0. Như vậy 7 không cần là một số hạng của dãy.

#### THPT-G11-CHV-B15-C02 · CORE · skill_id=G11-B15-INFINITE_SEQUENCE

**Đề:** Dãy uₙ=−2n có tiến đến −∞ hay không? Giải thích bằng lời.

**Đáp án:** Có, uₙ→−∞.

**Lời giải và lời giải thích:** Với mọi M>0, từ n>M/2 thì −2n<−M; các số hạng ngày càng nhỏ theo chiều âm.

#### THPT-G11-CHV-B15-C03 · CORE · skill_id=G11-B15-GEOMETRIC

**Đề:** Tổng vô hạn 3+3/5+3/25+… có thể dùng công thức cấp số nhân lùi vô hạn không?

**Đáp án:** Có; tổng bằng 15/4.

**Lời giải và lời giải thích:** Số hạng đầu 3, công bội 1/5 có trị tuyệt đối nhỏ hơn 1; tổng 3/(1−1/5)=15/4.

#### THPT-G11-CHV-B15-P01 · PRACTICE · skill_id=G11-B15-LIMIT_ARITHMETIC

**Đề:** Tìm lim(n→∞) (5n²+2)/(2n²+n).

**Đáp án:** 5/2.

**Lời giải và lời giải thích:** Chia tử và mẫu cho n²; các phần 2/n² và 1/n tiến về 0; mẫu giới hạn 2 khác 0.

#### THPT-G11-CHV-B15-P02 · PRACTICE · skill_id=G11-B15-FINITE_SEQUENCE

**Đề:** Với uₙ=−4+9/n, hãy chỉ ra giới hạn và giải thích vì sao không phải −4+9.

**Đáp án:** −4.

**Lời giải và lời giải thích:** Hiệu uₙ−(−4)=9/n→0; số 9 không giữ nguyên mà được chia cho n đang tăng.

#### THPT-G11-CHV-B15-P03 · PRACTICE · skill_id=G11-B15-LIMIT_ARITHMETIC

**Đề:** Tính lim(n→∞) (1−2/n)(4+1/n).

**Đáp án:** 4.

**Lời giải và lời giải thích:** Hai thừa số có giới hạn hữu hạn 1 và 4, nên giới hạn tích là 1×4.

#### THPT-G11-CHV-B15-P04 · PRACTICE · skill_id=G11-B15-LIMIT_ARITHMETIC

**Đề:** Tính lim(n→∞) √(n²+2n)/n với n nguyên dương.

**Đáp án:** 1.

**Lời giải và lời giải thích:** Do n>0, chia trong căn cho n²: √(1+2/n)→1; không nhầm √(n²) với |n| cho n âm.

#### THPT-G11-CHV-B15-P05 · PRACTICE · skill_id=G11-B15-INFINITE_SEQUENCE

**Đề:** Dãy vₙ=(−1)ⁿ có giới hạn hữu hạn hoặc ±∞ không?

**Đáp án:** Không có giới hạn theo các loại đã học.

**Lời giải và lời giải thích:** Các số hạng chẵn bằng 1 và lẻ bằng −1, nên không dần về một số hay vô cực có dấu.

#### THPT-G11-CHV-B15-P06 · APPLICATION · skill_id=G11-B15-GEOMETRIC_APPLICATION

**Đề:** Tính tổng lý thuyết 8−4+2−1+…; vì sao tổng vẫn hữu hạn dù có vô hạn số hạng?

**Đáp án:** 16/3.

**Lời giải và lời giải thích:** Đây là cấp số nhân a=8, q=−1/2, |q|<1; tổng bằng 8/(1+1/2)=16/3; số hạng và phần dư tiến về 0.

#### THPT-G11-CHV-B15-P07 · APPLICATION · skill_id=G11-B15-GEOMETRIC_APPLICATION

**Đề:** Bóng rơi từ độ cao 3 m, mỗi lần bật lên cao bằng 1/2 lần trước; mô hình vô hạn. Tổng quãng đường theo phương thẳng đứng là bao nhiêu?

**Đáp án:** 9 m.

**Lời giải và lời giải thích:** Lần đầu đi xuống 3 m. Những lần sau gồm đi lên và xuống ở các độ cao 3/2,3/4,… nên tổng là 3+2×[(3/2)/(1−1/2)]=9 m. Nêu rõ đây là mô hình lí tưởng.

### B16 — Giới hạn hàm số

#### THPT-G11-CHV-B16-C01 · CORE · skill_id=G11-B16-LIMIT_AT_POINT

**Đề:** Hàm f(x)=(x²−9)/(x−3) (x≠3) không xác định ở x=3. Nó có giới hạn khi x→3 không?

**Đáp án:** Có, giới hạn bằng 6.

**Lời giải và lời giải thích:** Với x≠3, f(x)=x+3. Khi x tiến đến 3, f(x) tiến đến 6; giới hạn không yêu cầu f(3) tồn tại.

#### THPT-G11-CHV-B16-C02 · CORE · skill_id=G11-B16-ONE_SIDED

**Đề:** Cho f(x)=x+2 nếu x<0 và f(x)=3−x nếu x≥0. Giới hạn hai phía tại 0 có tồn tại không?

**Đáp án:** Không.

**Lời giải và lời giải thích:** Phía trái tiến đến 2, phía phải tiến đến 3. Hai giới hạn một phía khác nhau nên giới hạn hai phía không tồn tại.

#### THPT-G11-CHV-B16-C03 · CORE · skill_id=G11-B16-INFINITE_LIMIT

**Đề:** Khi x→4⁺ và x→4⁻, f(x)=1/(x−4) có xu hướng như thế nào?

**Đáp án:** +∞ ở bên phải và −∞ ở bên trái.

**Lời giải và lời giải thích:** Khi x>4 mẫu dương rất nhỏ; khi x<4 mẫu âm rất nhỏ. Dấu mẫu quyết định dấu giới hạn vô cực.

#### THPT-G11-CHV-B16-P01 · PRACTICE · skill_id=G11-B16-ALGEBRAIC_TECHNIQUES

**Đề:** Tính lim(x→0) (√(x+4)−2)/x.

**Đáp án:** 1/4.

**Lời giải và lời giải thích:** Với x≠0, nhân liên hợp: (√(x+4)−2)/x=1/(√(x+4)+2), rồi cho x→0.

#### THPT-G11-CHV-B16-P02 · PRACTICE · skill_id=G11-B16-ALGEBRAIC_TECHNIQUES

**Đề:** Tính lim(x→1) (x²−1)/(x²+x−2).

**Đáp án:** 2/3.

**Lời giải và lời giải thích:** Phân tích (x−1)(x+1)/[(x−1)(x+2)] khi x≠1, sau đó thế giới hạn 2/3.

#### THPT-G11-CHV-B16-P03 · PRACTICE · skill_id=G11-B16-ONE_SIDED

**Đề:** f(x)=x² khi x≤2 và f(x)=3x−2 khi x>2. Hai giới hạn một phía ở 2 có bằng nhau không?

**Đáp án:** Có, đều bằng 4.

**Lời giải và lời giải thích:** Từ trái x²→4; từ phải 3x−2→4, nên giới hạn hai phía bằng 4.

#### THPT-G11-CHV-B16-P04 · PRACTICE · skill_id=G11-B16-LIMIT_AT_INFINITY

**Đề:** Tính lim(x→−∞) √(x²+4)/x.

**Đáp án:** −1.

**Lời giải và lời giải thích:** Vì x âm đủ lớn, √(x²)=|x|=−x; biểu thức bằng −√(1+4/x²)→−1.

#### THPT-G11-CHV-B16-P05 · PRACTICE · skill_id=G11-B16-LIMIT_AT_INFINITY

**Đề:** Tính lim(x→+∞) (3x²−x)/(x²+2).

**Đáp án:** 3.

**Lời giải và lời giải thích:** Chia cả tử và mẫu cho x²; tử→3 và mẫu→1.

#### THPT-G11-CHV-B16-P06 · PRACTICE · skill_id=G11-B16-INFINITE_LIMIT

**Đề:** Tính lim(x→2⁻) (x+1)/(2−x).

**Đáp án:** +∞.

**Lời giải và lời giải thích:** Tử tiến tới 3>0, mẫu dương và tiến đến 0 khi x<2.

#### THPT-G11-CHV-B16-P07 · APPLICATION · skill_id=G11-B16-REAL_CONTEXT

**Đề:** Mô hình hiệu suất H(t)=100t/(t+5) với t≥0. Khi t tăng vô hạn, H(t) tiến đến mức nào? Điều đó có nghĩa gì?

**Đáp án:** 100 (đơn vị hiệu suất của mô hình).

**Lời giải và lời giải thích:** Chia tử mẫu cho t: H(t)=100/(1+5/t)→100. Mô hình dự báo mức bão hòa, không khẳng định giá trị 100 đạt được ở thời gian hữu hạn.

### B17 — Hàm số liên tục

#### THPT-G11-CHV-B17-C01 · CORE · skill_id=G11-B17-CONTINUITY_POINT

**Đề:** Cho f(x)=(x²−1)/(x−1) khi x≠1 và f(1)=2. Hàm có liên tục ở 1 không?

**Đáp án:** Có.

**Lời giải và lời giải thích:** Giới hạn khi x→1 bằng lim(x+1)=2, khớp với giá trị f(1)=2.

#### THPT-G11-CHV-B17-C02 · CORE · skill_id=G11-B17-CONTINUITY_POINT

**Đề:** Cùng biểu thức (x²−1)/(x−1) khi x≠1 nhưng đặt f(1)=0. Hàm có liên tục ở 1 không?

**Đáp án:** Không.

**Lời giải và lời giải thích:** Giới hạn bằng 2 nhưng giá trị ở điểm lại bằng 0. Thiếu điều kiện giới hạn bằng giá trị hàm.

#### THPT-G11-CHV-B17-C03 · CORE · skill_id=G11-B17-ELEMENTARY_CONTINUITY

**Đề:** Hàm h(x)=√(x+2) có liên tục tại đầu mút x=−2 trên miền xác định không?

**Đáp án:** Có, liên tục từ bên phải tại −2.

**Lời giải và lời giải thích:** Hàm xác định với x≥−2; lim(x→−2⁺)√(x+2)=0=h(−2). Không kiểm tra từ phía trái ngoài miền xác định.

#### THPT-G11-CHV-B17-P01 · PRACTICE · skill_id=G11-B17-CONTINUITY_OPERATIONS

**Đề:** Hàm g(x)=(x+2)/(x−1) liên tục trên những khoảng nào?

**Đáp án:** (−∞,1) và (1,+∞).

**Lời giải và lời giải thích:** Tử và mẫu là đa thức liên tục, thương liên tục khi mẫu khác 0; phải loại x=1.

#### THPT-G11-CHV-B17-P02 · PRACTICE · skill_id=G11-B17-CONTINUITY_POINT

**Đề:** Cho f(x)=ax+1 nếu x<2, và f(x)=x²−1 nếu x≥2. Tìm a để liên tục tại 2.

**Đáp án:** a=1.

**Lời giải và lời giải thích:** Giới hạn trái 2a+1; giới hạn phải và f(2) đều bằng 3. Điều kiện khớp 2a+1=3.

#### THPT-G11-CHV-B17-P03 · PRACTICE · skill_id=G11-B17-ZERO_EXISTENCE

**Đề:** Chứng minh f(x)=x²−2 có ít nhất một nghiệm trong (1,2).

**Đáp án:** Có ít nhất một nghiệm.

**Lời giải và lời giải thích:** Đa thức liên tục trên [1,2], f(1)=−1<0, f(2)=2>0. Theo định lí giá trị trung gian, tồn tại c∈(1,2) với f(c)=0.

#### THPT-G11-CHV-B17-P04 · PRACTICE · skill_id=G11-B17-CONTINUITY_POINT

**Đề:** Đặt f(x)=(x²−16)/(x−4) khi x≠4 và f(4)=m. Tìm m để liên tục ở 4.

**Đáp án:** m=8.

**Lời giải và lời giải thích:** Với x≠4 rút gọn thành x+4; giới hạn khi x→4 bằng 8, nên cần f(4)=8.

#### THPT-G11-CHV-B17-P05 · PRACTICE · skill_id=G11-B17-CONTINUITY_INTERVAL

**Đề:** Hàm f(x)=√(9−x²) có liên tục trên đoạn [−3,3] không?

**Đáp án:** Có.

**Lời giải và lời giải thích:** Miền xác định là [−3,3]. Hàm liên tục ở bên trong và có giới hạn một phía tại hai đầu mút bằng giá trị hàm.

#### THPT-G11-CHV-B17-P06 · PRACTICE · skill_id=G11-B17-CONTINUITY_INTERVAL

**Đề:** f(x)=x+1 với x<0, f(x)=x²+1 với x≥0. Liên tục tại 0 không?

**Đáp án:** Có.

**Lời giải và lời giải thích:** Giới hạn trái và phải cùng bằng 1, giá trị f(0)=1.

#### THPT-G11-CHV-B17-P07 · APPLICATION · skill_id=G11-B17-ZERO_EXISTENCE

**Đề:** f(x)=x³−5 liên tục trên [1,2]; f(1) và f(2) trái dấu. Kết luận nào chắc chắn đúng, và có được suy ngay nghiệm duy nhất không?

**Đáp án:** Có ít nhất một nghiệm trong (1,2); chưa thể suy duy nhất chỉ từ định lí đổi dấu.

**Lời giải và lời giải thích:** f(1)=−4<0, f(2)=3>0. Định lí cho sự tồn tại, còn tính duy nhất cần luận cứ khác.

## Outcome coverage and author QA checkpoint

- `G11-B15-FINITE_SEQUENCE`: THPT-G11-CHV-B15-C01, THPT-G11-CHV-B15-P02
- `G11-B15-INFINITE_SEQUENCE`: THPT-G11-CHV-B15-C02, THPT-G11-CHV-B15-P05
- `G11-B15-GEOMETRIC`: THPT-G11-CHV-B15-C03
- `G11-B15-LIMIT_ARITHMETIC`: THPT-G11-CHV-B15-P01, THPT-G11-CHV-B15-P03, THPT-G11-CHV-B15-P04
- `G11-B15-GEOMETRIC_APPLICATION`: THPT-G11-CHV-B15-P06, THPT-G11-CHV-B15-P07
- `G11-B16-LIMIT_AT_POINT`: THPT-G11-CHV-B16-C01
- `G11-B16-ONE_SIDED`: THPT-G11-CHV-B16-C02, THPT-G11-CHV-B16-P03
- `G11-B16-INFINITE_LIMIT`: THPT-G11-CHV-B16-C03, THPT-G11-CHV-B16-P06
- `G11-B16-ALGEBRAIC_TECHNIQUES`: THPT-G11-CHV-B16-P01, THPT-G11-CHV-B16-P02
- `G11-B16-LIMIT_AT_INFINITY`: THPT-G11-CHV-B16-P04, THPT-G11-CHV-B16-P05
- `G11-B16-REAL_CONTEXT`: THPT-G11-CHV-B16-P07
- `G11-B17-CONTINUITY_POINT`: THPT-G11-CHV-B17-C01, THPT-G11-CHV-B17-C02, THPT-G11-CHV-B17-P02, THPT-G11-CHV-B17-P04
- `G11-B17-ELEMENTARY_CONTINUITY`: THPT-G11-CHV-B17-C03
- `G11-B17-CONTINUITY_OPERATIONS`: THPT-G11-CHV-B17-P01
- `G11-B17-ZERO_EXISTENCE`: THPT-G11-CHV-B17-P03, THPT-G11-CHV-B17-P07
- `G11-B17-CONTINUITY_INTERVAL`: THPT-G11-CHV-B17-P05, THPT-G11-CHV-B17-P06

**Integrated outcome `G11-CHV-INTEGRATED`:** addressed by multi-part Written/Anchor and eventually a separate PRIVATE RD1, not by cloning these public items.

**Author QA:** 30/30 distinct item IDs, B15/B16/B17 counts 10/10/10; 16 of 17 RD0 lesson outcomes represented here; integrated outcome to D4/RD1. Check all arithmetic, domains, one-sided signs and pedagogical progression in full-chapter review. This is **not** NotebookLM PASS.

---

## PART C — D4 Written/Anchor and D6 HELP

# G11 SGK KNTT Chương V — D4 Written/Anchor + D6 Remediation R01

**AUTHORING WIP · no NotebookLM PASS · no release/score/Mastery.** Applies Issue #691 PED1–PED6: explanations must teach the choice and meaning of method, not just formulas. Written/Anchor is ONE shared library, Anchor is a tag. Items are public formative originals; held-out RD1 remains separate.

## D4 — 6 original canonical Written items, each rubric /4

### THPT-G11-CHV-B15-W01 · WRITTEN · skill_id=G11-B15-LIMIT_ARITHMETIC

**Đề:** (a) Tính lim(n→∞)(2n²+3n)/(n²+1). (b) Giải thích vì sao dãy vₙ=(−1)ⁿ không có giới hạn hữu hạn. (c) Tính 4+2+1+1/2+… và nêu điều kiện công bội.

**Lời giải và lí do:** (a) Chia tử mẫu cho n²: (2+3/n)/(1+1/n²)→2. (b) Dãy con ở chỉ số chẵn bằng 1, ở chỉ số lẻ bằng −1, nên không thể tiến về một giá trị chung. (c) a=4, q=1/2 có |q|<1; S=4/(1−1/2)=8.

**Rubric 4 điểm:**
1. Chia tử và mẫu đúng theo bậc n², kết luận giới hạn 2. — 1 điểm.
2. Giải thích hai dãy con chẵn/lẻ có giới hạn khác nhau. — 1 điểm.
3. Nhận diện a=4, q=1/2, kiểm tra |q|<1. — 1 điểm.
4. Tính tổng vô hạn 8, giải thích do qⁿ→0. — 1 điểm.

### THPT-G11-CHV-B15-W02-ANCHOR · WRITTEN (ANCHOR TAG) · skill_id=G11-B15-GEOMETRIC_APPLICATION

**Đề:** Một thiết bị trong lần thử đầu tiêu thụ 1,2 đơn vị năng lượng. Mỗi lần thử tiếp theo tiêu thụ 3/4 lần liền trước. (a) Viết ba mức tiêu thụ đầu. (b) Thiết lập tổng n lần thử. (c) Tính tổng lý thuyết vô hạn. (d) Giải thích vì sao công thức không áp dụng với q=1.

**Lời giải và lí do:** (a) 1,2; 0,9; 0,675. (b) Sₙ=1,2(1−(3/4)ⁿ)/(1−3/4). (c) Vì |3/4|<1 nên (3/4)ⁿ→0, S=1,2/(1/4)=4,8. (d) Nếu q=1, mỗi số hạng bằng 1,2, tổng n lần là 1,2n tăng không bị chặn; không có tổng hữu hạn.

**Rubric 4 điểm:**
1. Tính đúng ba mức đầu và công bội. — 1 điểm.
2. Thiết lập đúng tổng riêng Sₙ, ghi điều kiện. — 1 điểm.
3. Lấy giới hạn và kết luận 4,8 đơn vị. — 1 điểm.
4. Lí giải đúng q=1 làm tổng không hội tụ hữu hạn. — 1 điểm.

### THPT-G11-CHV-B16-W01 · WRITTEN · skill_id=G11-B16-LIMIT_AT_POINT

**Đề:** Cho f(x)=(x²−25)/(x−5) khi x≠5, và f(5)=m. (a) Tìm lim(x→5)f(x). (b) Tìm m để f liên tục tại 5. (c) Tính lim(x→−1⁺)1/(x+1) và lim(x→−1⁻)1/(x+1).

**Lời giải và lí do:** (a) Với x≠5, (x²−25)/(x−5)=x+5, nên giới hạn bằng 10. (b) Cần f(5)=10, tức m=10. (c) Mẫu tiến đến 0 từ phía dương bên phải −1 nên giới hạn +∞; từ phía âm bên trái nên −∞.

**Rubric 4 điểm:**
1. Phân tích nhân tử và rút gọn đúng với x≠5. — 1 điểm.
2. Tính giới hạn bằng 10, không thay x=5 vào phân thức gốc. — 1 điểm.
3. Áp điều kiện liên tục, được m=10. — 1 điểm.
4. Giải thích dấu mẫu và hai giới hạn một phía đúng. — 1 điểm.

### THPT-G11-CHV-B16-W02-ANCHOR · WRITTEN (ANCHOR TAG) · skill_id=G11-B16-ALGEBRAIC_TECHNIQUES

**Đề:** (a) Tính L=lim(x→0)(√(x+9)−3)/x; chỉ ra vì sao cách thế trực tiếp chưa cho đáp số. (b) Tính M=lim(x→−∞)(√(x²+1)+x). Giải thích dấu của x khi biến đổi.

**Lời giải và lí do:** (a) Thế trực tiếp cho dạng 0/0 không xác định. Với x≠0, nhân liên hợp: L=lim 1/(√(x+9)+3)=1/6. (b) Nhân liên hợp: √(x²+1)+x = 1/(√(x²+1)−x). Với x→−∞, mẫu = |x|√(1+1/x²)−x = −x(√(1+1/x²)+1)→+∞; do đó M=0 từ phía dương.

**Rubric 4 điểm:**
1. Nêu được 0/0 là dạng chưa kết luận, kiểm tra miền x+9≥0. — 1 điểm.
2. Nhân liên hợp và tìm L=1/6 chính xác. — 1 điểm.
3. Biến đổi M bằng liên hợp, không nhầm √(x²)=x khi x<0. — 1 điểm.
4. Giải thích mẫu →+∞ nên M→0⁺. — 1 điểm.

### THPT-G11-CHV-B17-W01 · WRITTEN · skill_id=G11-B17-CONTINUITY_POINT

**Đề:** Cho f(x)=2x+k nếu x<1, và f(x)=x²+3 nếu x≥1. (a) Tìm k để f liên tục tại 1. (b) Với g(x)=x³−x−1, chứng minh có ít nhất một nghiệm của g(x)=0 trong (1,2); nói rõ điều gì chưa thể kết luận bằng định lí đổi dấu.

**Lời giải và lí do:** (a) lim trái tại 1 bằng 2+k; lim phải và f(1) bằng 4, nên 2+k=4→k=2. (b) g liên tục trên [1,2] vì là đa thức; g(1)=−1, g(2)=5 trái dấu, nên tồn tại ít nhất một c∈(1,2) có g(c)=0. Chỉ từ đổi dấu chưa suy nghiệm duy nhất.

**Rubric 4 điểm:**
1. Tìm và so sánh giới hạn trái, phải và f(1). — 1 điểm.
2. Giải phương trình điều kiện liên tục k=2. — 1 điểm.
3. Kiểm tra tính liên tục của g và dấu tại hai đầu mút. — 1 điểm.
4. Kết luận tồn tại nghiệm, không tự suy tính duy nhất. — 1 điểm.

### THPT-G11-CHV-B17-W02-ANCHOR · WRITTEN (ANCHOR TAG) · skill_id=G11-B17-CONTINUITY_INTERVAL

**Đề:** (a) Xét tính liên tục của f(x)=√(x+1) trên [−1,3], kể cả hai đầu mút. (b) Cho h(x)=x²+1 nếu x<0, và h(x)=3x+1 nếu x≥0. Chứng minh h liên tục tại 0. (c) Nếu đổi nhánh x≥0 thành 3x+2, điều gì thay đổi?

**Lời giải và lí do:** (a) f có miền xác định x≥−1; liên tục trên (−1,3), lim bên phải ở −1 bằng f(−1)=0 và lim bên trái ở 3 bằng f(3)=2, nên liên tục trên [−1,3]. (b) Lim trái h=1, lim phải h=1, h(0)=1, nên liên tục. (c) Lim trái vẫn 1 nhưng lim phải và h(0)=2: hai giới hạn một phía không khớp, nên gián đoạn tại 0.

**Rubric 4 điểm:**
1. Xác định đúng miền và tính liên tục bên trong đoạn. — 1 điểm.
2. Kiểm tra giới hạn một phía đúng tại −1 và 3. — 1 điểm.
3. So sánh hai giới hạn một phía và giá trị h(0), kết luận liên tục. — 1 điểm.
4. Phân tích nhánh thay đổi và lí giải gián đoạn, không chỉ nói 'không'. — 1 điểm.

## D6 — 6 thẻ hỗ trợ khắc phục, mỗi thẻ năm bước

**Nguyên tắc:** trình bày nguyên nhân sai, nhắc điều kiện, hướng dẫn tự giải; feedback chỉ trong formative / sau Submit; không đưa HELP/hint vào held-out RD1 trước Final Submit.

### HELP-G11-CHV-B15-01 · skill_id=G11-B15-FINITE_SEQUENCE · return=THPT-G11-CHV-B15-C01

1. **Nhận diện:** Nhầm 'giới hạn' với số hạng cuối cùng.
2. **Nhắc bản chất và điều kiện:** Dãy vô hạn không cần có số hạng cuối; yêu cầu các số hạng sau một mốc đều gần cùng một số.
3. **Sửa cách nghĩ:** Hãy nói lại bằng lời tại sao bước trước chưa đủ để kết luận, rồi kiểm tra giả thiết trước phép biến đổi.
4. **Tự thử trước khi mở đáp án:** Với uₙ=7+3/n, hãy nhìn khoảng cách |uₙ−7|=3/n. **Tự đối chiếu sau khi thử:** Khi n>300, khoảng cách nhỏ hơn 0,01; vì vậy giới hạn là 7.
5. **Quay lại bài gốc:** làm lại `THPT-G11-CHV-B15-C01` và giải thích bằng lời vì sao kết luận đúng.

### HELP-G11-CHV-B15-02 · skill_id=G11-B15-GEOMETRIC · return=THPT-G11-CHV-B15-C03

1. **Nhận diện:** Thấy vô hạn số hạng thì kết luận tổng luôn vô hạn.
2. **Nhắc bản chất và điều kiện:** Tổng cấp số nhân hữu hạn cần |q|<1; khi q=1 mỗi số hạng không nhỏ dần.
3. **Sửa cách nghĩ:** Hãy nói lại bằng lời tại sao bước trước chưa đủ để kết luận, rồi kiểm tra giả thiết trước phép biến đổi.
4. **Tự thử trước khi mở đáp án:** Dự đoán tổng 2+1+1/2+… và so với 2+2+2+…. **Tự đối chiếu sau khi thử:** Dãy thứ nhất có q=1/2 nên tổng 4; dãy thứ hai q=1 nên tổng tăng không chặn.
5. **Quay lại bài gốc:** làm lại `THPT-G11-CHV-B15-C03` và giải thích bằng lời vì sao kết luận đúng.

### HELP-G11-CHV-B16-01 · skill_id=G11-B16-LIMIT_AT_POINT · return=THPT-G11-CHV-B16-C01

1. **Nhận diện:** Nhầm giá trị hàm tại điểm với giới hạn.
2. **Nhắc bản chất và điều kiện:** Giới hạn nói về giá trị gần điểm, xét x≠a; hàm có thể không xác định đúng tại a.
3. **Sửa cách nghĩ:** Hãy nói lại bằng lời tại sao bước trước chưa đủ để kết luận, rồi kiểm tra giả thiết trước phép biến đổi.
4. **Tự thử trước khi mở đáp án:** Với h(x)=(x²−16)/(x−4), x≠4, hãy rút gọn. **Tự đối chiếu sau khi thử:** h(x)=x+4 khi x≠4; giới hạn tại 4 là 8 dù h(4) chưa xác định.
5. **Quay lại bài gốc:** làm lại `THPT-G11-CHV-B16-C01` và giải thích bằng lời vì sao kết luận đúng.

### HELP-G11-CHV-B16-02 · skill_id=G11-B16-ONE_SIDED · return=THPT-G11-CHV-B16-C02

1. **Nhận diện:** Chỉ nhìn một phía rồi kết luận giới hạn hai phía.
2. **Nhắc bản chất và điều kiện:** Khi tiến gần được từ cả hai phía, giới hạn trái và phải phải bằng nhau.
3. **Sửa cách nghĩ:** Hãy nói lại bằng lời tại sao bước trước chưa đủ để kết luận, rồi kiểm tra giả thiết trước phép biến đổi.
4. **Tự thử trước khi mở đáp án:** Với k(x)=|x|/x, x≠0, tìm giá trị ở x>0 và x<0. **Tự đối chiếu sau khi thử:** Bên phải bằng 1, bên trái bằng −1, nên không có giới hạn hai phía tại 0.
5. **Quay lại bài gốc:** làm lại `THPT-G11-CHV-B16-C02` và giải thích bằng lời vì sao kết luận đúng.

### HELP-G11-CHV-B17-01 · skill_id=G11-B17-CONTINUITY_POINT · return=THPT-G11-CHV-B17-C02

1. **Nhận diện:** Biết lim f(x) mà quên kiểm tra f(a).
2. **Nhắc bản chất và điều kiện:** Liên tục tại điểm yêu cầu f(a) xác định VÀ bằng giới hạn hữu hạn hai phía.
3. **Sửa cách nghĩ:** Hãy nói lại bằng lời tại sao bước trước chưa đủ để kết luận, rồi kiểm tra giả thiết trước phép biến đổi.
4. **Tự thử trước khi mở đáp án:** Giới hạn g khi x→3 là 9, nhưng g(3)=0: liên tục không?. **Tự đối chiếu sau khi thử:** Không, vì giá trị tại điểm không khớp với giới hạn.
5. **Quay lại bài gốc:** làm lại `THPT-G11-CHV-B17-C02` và giải thích bằng lời vì sao kết luận đúng.

### HELP-G11-CHV-B17-02 · skill_id=G11-B17-ZERO_EXISTENCE · return=THPT-G11-CHV-B17-P03

1. **Nhận diện:** Suy ngay nghiệm duy nhất từ việc đổi dấu.
2. **Nhắc bản chất và điều kiện:** Định lí giá trị trung gian chỉ bảo đảm ít nhất một nghiệm khi liên tục trên đoạn và hai đầu trái dấu.
3. **Sửa cách nghĩ:** Hãy nói lại bằng lời tại sao bước trước chưa đủ để kết luận, rồi kiểm tra giả thiết trước phép biến đổi.
4. **Tự thử trước khi mở đáp án:** Với p(x)=x³−2 trên [1,2], hãy xác định dấu hai đầu. **Tự đối chiếu sau khi thử:** p(1)=−1, p(2)=6, nên có ít nhất một nghiệm; muốn duy nhất cần lí do khác.
5. **Quay lại bài gốc:** làm lại `THPT-G11-CHV-B17-P03` và giải thích bằng lời vì sao kết luận đúng.

## PED / coverage and author-only checks

- Written IDs: 6 unique, rubrics: 6×4 explicit one-point criteria, Anchor-tag items: 3. Written is canonical, not duplicated into an Anchor bank.
- D6 HELP IDs: 6 distinct; five-step structure; return pointers valid against the D3 public draft.
- Students first learn WHY/WHAT in source D1, observe worked selection in D2, perform independent public D3, then use Written and D6. This pedagogy relationship itself requires reviewer verification against actual final snapshot.
- Need separate independent private RD1 and S1 SBT printed-page receipts; no NotebookLM request yet.

---

## PART D — D5 original mathematical SVGs, rendered source XML and accessibility text

### FIG-G11-B15-01

Path: `prototypes/thpt/content-drafts/svg/FIG-G11-B15-01_R01.svg` · Blob: `632bef51196757f9c71f54c53bb3c7639ce158e0`

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="440" viewBox="0 0 800 440" role="img" aria-labelledby="title desc">
<title id="title">FIG-G11-B15-01: Dãy u_n = 1/n tiến gần 0</title>
<desc id="desc">Đồ thị các điểm có hoành độ n bằng 1 đến 8 và tung độ 1/n. Tất cả nằm phía trên trục ngang u_n=0, giảm dần tiến gần đường 0 nhưng không chạm 0; thể hiện ý nghĩa tiến gần chứ không phải số hạng cuối.</desc>
<rect width="800" height="440" rx="20" fill="#f8fafc"/>
<text x="400" y="42" fill="#172554" text-anchor="middle" font-size="23" font-family="Arial" font-weight="700">Dãy u_n = 1/n tiến gần 0</text>
<line x1="90" y1="350" x2="690" y2="350" stroke="#0f172a" stroke-width="2.5"/>
<path d="M690 350 l-12 -6 v12 z" fill="#0f172a"/>
<line x1="120" y1="365" x2="120" y2="70" stroke="#0f172a" stroke-width="2.5"/>
<path d="M120 70 l-6 12 h12 z" fill="#0f172a"/>
<text x="703" y="356" font-size="17" fill="#0f172a">n</text>
<text x="100" y="67" font-size="17" fill="#0f172a">u_n</text>
<text x="102" y="370" font-size="15" fill="#334155">0</text><circle cx="140" cy="120.00" r="6" fill="#2563eb"/><text x="140" y="370" text-anchor="middle" font-size="15" fill="#334155">1</text><circle cx="205" cy="235.00" r="6" fill="#2563eb"/><text x="205" y="370" text-anchor="middle" font-size="15" fill="#334155">2</text><circle cx="270" cy="273.33" r="6" fill="#2563eb"/><text x="270" y="370" text-anchor="middle" font-size="15" fill="#334155">3</text><circle cx="335" cy="292.50" r="6" fill="#2563eb"/><text x="335" y="370" text-anchor="middle" font-size="15" fill="#334155">4</text><circle cx="400" cy="304.00" r="6" fill="#2563eb"/><text x="400" y="370" text-anchor="middle" font-size="15" fill="#334155">5</text><circle cx="465" cy="311.67" r="6" fill="#2563eb"/><text x="465" y="370" text-anchor="middle" font-size="15" fill="#334155">6</text><circle cx="530" cy="317.14" r="6" fill="#2563eb"/><text x="530" y="370" text-anchor="middle" font-size="15" fill="#334155">7</text><circle cx="595" cy="321.25" r="6" fill="#2563eb"/><text x="595" y="370" text-anchor="middle" font-size="15" fill="#334155">8</text><line x1="120" y1="350" x2="670" y2="350" stroke="#059669" stroke-width="3" stroke-dasharray="8 8"/>
<text x="493" y="385" font-size="14" fill="#047857">Đường tham chiếu u_n = 0</text>
<text x="190" y="110" font-size="15" fill="#1d4ed8">Càng về sau, 1/n càng nhỏ</text>
<text x="400" y="420" text-anchor="middle" font-family="Arial" font-size="13" fill="#334155">Minh họa theo tọa độ và điều kiện đã ghi; không đo độ dài trực tiếp từ ảnh.</text>
</svg>

```

### FIG-G11-B16-01

Path: `prototypes/thpt/content-drafts/svg/FIG-G11-B16-01_R01.svg` · Blob: `d623e8a96c6d5f9723aafb9c62bffe57bdc9aa73`

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="440" viewBox="0 0 800 440" role="img" aria-labelledby="title desc">
<title id="title">FIG-G11-B16-01: Giới hạn có thể tồn tại tại một lỗ trống</title>
<desc id="desc">Đồ thị y=x+2 trên miền x khác 2, có một vòng tròn rỗng tại (2,4), không có điểm đặc trên x=2. Khi x tiến đến 2 từ cả hai phía, y tiến đến 4 dù f(2) không xác định.</desc>
<rect width="800" height="440" rx="20" fill="#f8fafc"/>
<text x="400" y="42" fill="#172554" text-anchor="middle" font-size="23" font-family="Arial" font-weight="700">Giới hạn có thể tồn tại tại một lỗ trống</text>
<line x1="80" y1="350" x2="690" y2="350" stroke="#0f172a" stroke-width="2.5"/>
<path d="M690 350 l-12 -6 v12 z" fill="#0f172a"/>
<line x1="220" y1="370" x2="220" y2="70" stroke="#0f172a" stroke-width="2.5"/>
<path d="M220 70 l-6 12 h12 z" fill="#0f172a"/>
<text x="702" y="357" font-size="17" fill="#0f172a">x</text><text x="202" y="63" font-size="17" fill="#0f172a">y</text><text x="205" y="370" font-size="15">0</text><line x1="120" y1="310" x2="620" y2="110" stroke="#2563eb" stroke-width="4"/>
<line x1="420" y1="350" x2="420" y2="190" stroke="#64748b" stroke-dasharray="6 7" stroke-width="1.5"/>
<line x1="220" y1="190" x2="420" y2="190" stroke="#64748b" stroke-dasharray="6 7" stroke-width="1.5"/>
<circle cx="420" cy="190" r="10" fill="#f8fafc" stroke="#2563eb" stroke-width="4"/>
<text x="416" y="372" font-size="15" fill="#0f172a">2</text>
<text x="197" y="194" font-size="15" fill="#0f172a">4</text>
<text x="440" y="166" font-size="16" fill="#1d4ed8">Lỗ tại (2,4)</text>
<text x="445" y="104" font-size="15" fill="#1d4ed8">y=x+2 (x khác 2)</text>
<text x="400" y="420" text-anchor="middle" font-family="Arial" font-size="13" fill="#334155">Minh họa theo tọa độ và điều kiện đã ghi; không đo độ dài trực tiếp từ ảnh.</text>
</svg>

```

### FIG-G11-B17-01

Path: `prototypes/thpt/content-drafts/svg/FIG-G11-B17-01_R01.svg` · Blob: `acf2b484d992e5cbe5443d6dc016a2d12d5baf58`

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="440" viewBox="0 0 800 440" role="img" aria-labelledby="title desc">
<title id="title">FIG-G11-B17-01: Giới hạn khác giá trị tại điểm: gián đoạn</title>
<desc id="desc">Đồ thị y=x+1 khi x khác 1, có vòng tròn rỗng ở (1,2) và chấm đặc ở (1,0). Vì giới hạn tại x=1 bằng 2 nhưng giá trị f(1)=0, hàm không liên tục tại điểm đó.</desc>
<rect width="800" height="440" rx="20" fill="#f8fafc"/>
<text x="400" y="42" fill="#172554" text-anchor="middle" font-size="23" font-family="Arial" font-weight="700">Giới hạn khác giá trị tại điểm: gián đoạn</text>
<line x1="80" y1="350" x2="690" y2="350" stroke="#0f172a" stroke-width="2.5"/>
<path d="M690 350 l-12 -6 v12 z" fill="#0f172a"/>
<line x1="220" y1="370" x2="220" y2="70" stroke="#0f172a" stroke-width="2.5"/>
<path d="M220 70 l-6 12 h12 z" fill="#0f172a"/>
<text x="702" y="357" font-size="17" fill="#0f172a">x</text><text x="202" y="63" font-size="17" fill="#0f172a">y</text><text x="205" y="370" font-size="15">0</text><line x1="120" y1="350" x2="650" y2="85" stroke="#2563eb" stroke-width="4"/>
<line x1="340" y1="350" x2="340" y2="240" stroke="#64748b" stroke-width="1.5" stroke-dasharray="6 7"/>
<circle cx="340" cy="240" r="10" fill="#f8fafc" stroke="#2563eb" stroke-width="4"/>
<circle cx="340" cy="350" r="7" fill="#dc2626" stroke="#fff" stroke-width="2"/>
<text x="328" y="370" font-size="16" fill="#0f172a">1</text>
<text x="197" y="245" font-size="15" fill="#0f172a">2</text>
<text x="367" y="236" font-size="16" fill="#1d4ed8">Giới hạn = 2 (điểm rỗng)</text>
<text x="370" y="336" font-size="16" fill="#b91c1c">f(1)=0 (chấm đặc)</text>
<text x="400" y="420" text-anchor="middle" font-family="Arial" font-size="13" fill="#334155">Minh họa theo tọa độ và điều kiện đã ghi; không đo độ dài trực tiếp từ ảnh.</text>
</svg>

```

---

## AUTHOR QA / GOVERNANCE NOTE

Only AUTHOR candidate: see `G11_CHV_B15_B17_R01_AUTHOR_QA_PED_NOTEBOOKLM_GATE_20261101.md`. 30 D3, 6 D4, 3 D5 and 6 D6 structurally checked, private RD1 17 separate; S1 SBT and independent NotebookLM PED/math review PENDING. Do not infer content-ready or release. No private assessment questions or rubrics in this document.
