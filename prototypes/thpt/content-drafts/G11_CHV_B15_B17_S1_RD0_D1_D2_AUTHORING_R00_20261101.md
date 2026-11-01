# Toán 11 SGK KNTT Tập 1 — Chương V: Giới hạn. Hàm số liên tục
## R00 authoring foundation: S1 scope, RD0, D1 theory, D2 worked examples

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
| G11-B15-GEOMETRIC | Infinite decreasing geometric progression: |q|<1 condition | D1 + D2 + future Anchor |
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

**Outcome status:** RD0 AUTHORING DRAFT. A completed chapter needs a canonical public Core/Practice bank, multiple applications, shared Written/Anchor rubrics, original SVG/graphs, D6 HELP cards, protected RD1 distinct items, author QA, source custody, and ONE independent full-chapter review. Do not infer completeness from this matrix alone.

---

## B15 — D1. Giới hạn của dãy số

**Bản chất.** Dãy (u_n) có giới hạn a nếu từ một chỉ số đủ lớn trở đi, |u_n−a| nhỏ tùy ý; hữu hạn nghĩa là dãy tiến đến một số thực cố định. Ký hiệu lim_{n→∞} u_n=a. Khi a=0, dùng |u_n|<ε với mọi ε>0 và n đủ lớn; tổng quát quy về u_n−a→0. Dãy có giới hạn +∞ nếu u_n lớn hơn mọi mốc dương cho trước từ một chỉ số đủ lớn; định nghĩa −∞ tương tự. Dãy dao động như (−1)^n không có giới hạn, KHÔNG coi là ±∞.

**Giới hạn cơ bản và các phép toán.** lim 1/n^p=0 cho p>0 trong phạm vi đã học; lim q^n=0 nếu |q|<1. Nếu lim u_n=a và lim v_n=b hữu hạn, tổng/hiệu/tích lần lượt có giới hạn a±b, ab; thương có giới hạn a/b **chỉ khi b≠0**, đồng thời v_n≠0 khi n đủ lớn. Không được chia riêng cho hai giới hạn bằng 0; phải biến đổi hoặc dùng lập luận khác. Khi có vô cực, xét dấu và dạng vô định thay vì thao tác đại số máy móc.

**Cấp số nhân lùi vô hạn.** Với số hạng đầu a và công bội q, |q|<1, tổng n số hạng đầu S_n=a(1−q^n)/(1−q), nên tổng vô hạn S=a/(1−q). Việc thay số lớn vào không phải chứng minh sự hội tụ. Điều kiện |q|<1 là thiết yếu cho công thức tổng vô hạn dạng này.

### B15 — D2. Bốn ví dụ độc lập

**EX-G11-B15-01 — Giới hạn hữu hạn bằng chia bậc cao nhất.** Tính lim_{n→∞}(3n+1)/(n+4). Chia cả tử và mẫu cho n: (3+1/n)/(1+4/n)→3. Mẫu giới hạn 1 khác 0, do đó phép chia giới hạn hợp lệ. **Bẫy:** không được thay n=∞ như một số.

**EX-G11-B15-02 — Dao động và giới hạn 0.** Xét u_n=(−1)^n/n và v_n=(−1)^n. Ta có |u_n|≤1/n→0, nên u_n→0. Nhưng v_n có hai dãy con n chẵn, n lẻ lần lượt bằng 1 và −1, không thể có cùng giới hạn. **Bẫy:** dấu luân phiên không tự quyết định hội tụ.

**EX-G11-B15-03 — Tổng cấp số nhân lùi vô hạn.** Tính T=5+5/4+5/16+... . Ta có a=5, q=1/4, |q|<1; S=5/(1−1/4)=20/3. Thử tổng 3 số hạng đầu 105/16<20/3 để đối chiếu chiều tăng. **Bẫy:** không dùng công thức khi |q|≥1.

**EX-G11-B15-04 — Tình huống vận dụng.** Một thiết bị lần đầu tiết kiệm 120 đơn vị năng lượng, mỗi đợt sau chỉ tiết kiệm bằng 2/5 đợt liền trước. Tổng tiết kiệm lý thuyết sau vô hạn đợt: 120/(1−2/5)=200 đơn vị. Mô hình giả định công bội không đổi; số đợt thực tế hữu hạn thì tổng nhỏ hơn 200. **Bẫy:** phân biệt giới hạn mô hình và quá trình hữu hạn.

## B16 — D1. Giới hạn của hàm số

**Tại một điểm.** lim_{x→a} f(x)=L nếu f(x) tiến gần L khi x tiến đến a qua các điểm trong tập xác định, x≠a. Không bắt buộc f(a) có nghĩa; khi so sánh với f(a) mới xét tính liên tục. Giới hạn hai phía tồn tại và bằng L khi giới hạn bên trái và bên phải đều bằng L, với miền xác định có điểm tiếp cận ở hai phía.

**Giới hạn một phía, tại vô cực và giới hạn vô cực.** lim_{x→a^+} và lim_{x→a^-} dùng x lớn/nhỏ hơn a. lim_{x→+∞} là hành vi khi x tăng không bị chặn; x→−∞ cần xử lý riêng. Nếu mẫu→0 mà tử→c≠0, kết luận có dấu vô cực phải xét **dấu mẫu** ở phía tiếp cận. Dạng 0/0 và ∞/∞ chưa đủ kết luận nếu chưa biến đổi.

**Kỹ thuật cơ bản.** Rút nhân tử chung, phân tích thành nhân tử, nhân liên hợp, chia lũy thừa trội; khi căn thức và x→−∞, nhớ √(x²)=|x|=−x. Kiểm tra tập xác định và mẫu khác 0 trước và sau biến đổi tương đương trên vùng tiếp cận.

### B16 — D2. Bốn ví dụ độc lập

**EX-G11-B16-01 — Khử 0/0.** lim_{x→2}(x²−4)/(x−2) = lim_{x→2}(x+2)=4 vì x²−4=(x−2)(x+2) khi x≠2. Hàm gốc không xác định tại 2 nhưng giới hạn vẫn bằng 4.

**EX-G11-B16-02 — Giới hạn một phía khác nhau.** Với f(x)=1/(x−1), khi x→1^+ mẫu dương nhỏ, f(x)→+∞; khi x→1^- mẫu âm nhỏ, f(x)→−∞. Không tồn tại giới hạn hữu hạn hai phía ở 1. Phải ghi **riêng từng phía**, không cộng hai vô cực.

**EX-G11-B16-03 — Liên hợp tại +∞.** Tính lim_{x→+∞}(√(x²+x)−x). Nhân liên hợp được x/(√(x²+x)+x)=1/(√(1+1/x)+1)→1/2, vì x>0 khi x→+∞. **Bẫy:** rút x khỏi căn phải dùng dấu x.

**EX-G11-B16-04 — Dấu của căn khi x âm lớn.** lim_{x→−∞}√(x²+1)/x=lim_{x→−∞}(|x|√(1+1/x²))/x=−1. **Bẫy:** viết √(x²)=x cho x<0 là sai.

## B17 — D1. Hàm số liên tục

**Tại một điểm.** f liên tục tại a khi a thuộc tập xác định, tồn tại giới hạn hữu hạn lim_{x→a} f(x) và giới hạn đó bằng f(a). Với hàm từng đoạn, kiểm tra cả hai giới hạn một phía và giá trị f(a); không được chỉ nhìn hai nhánh có cùng biểu thức ở một phía.

**Trên khoảng và đoạn.** Liên tục trên (a,b) nghĩa là liên tục tại mọi điểm trong khoảng; trên [a,b] còn cần lim_{x→a^+}f(x)=f(a), lim_{x→b^-}f(x)=f(b). Đa thức liên tục trên R; phân thức liên tục nơi mẫu≠0, căn bậc hai trên miền xác định với điều kiện biên một phía. Tổng/hiệu/tích các hàm liên tục cũng liên tục; thương cần mẫu không bằng 0 tại điểm đang xét.

**Nghiệm do đổi dấu.** Nếu f liên tục trên [a,b] và f(a)f(b)<0, tồn tại ít nhất một c∈(a,b) sao cho f(c)=0. Không tự kết luận nghiệm duy nhất; muốn chứng minh duy nhất cần lập luận khác. Nếu chưa biết liên tục trên cả đoạn thì kiểm tra điều kiện trước.

### B17 — D2. Bốn ví dụ độc lập

**EX-G11-B17-01 — Tham số ghép nhánh.** Cho f(x)=x+1 nếu x<1; f(x)=m nếu x≥1. Hai phía tại 1 lần lượt tiến tới 2 và m, f(1)=m. Để liên tục tại 1 cần và đủ m=2.

**EX-G11-B17-02 — Miền liên tục của phân thức.** Với h(x)=(x+1)/(x−2), mẫu chỉ bằng 0 tại x=2. Vì vậy h liên tục trên (−∞,2) và (2,+∞), không liên tục tại 2 do hàm không xác định. **Bẫy:** không thể gọi liên tục trên toàn R.

**EX-G11-B17-03 — Đoạn có đầu mút.** f(x)=√x liên tục trên [0,9]: với mọi điểm trong (0,9) hàm liên tục; lim_{x→0^+}√x=0=f(0), lim_{x→9^-}√x=3=f(9). Không xét lim_{x→0^-} trong miền R, vì căn không xác định khi x<0.

**EX-G11-B17-04 — Chứng minh tồn tại nghiệm.** Đặt g(x)=x³+x−1. Đa thức liên tục trên [0,1], g(0)=−1<0, g(1)=1>0. Vậy tồn tại c∈(0,1) sao cho g(c)=0. Kết luận mới là **ít nhất một nghiệm**; chưa dùng phép đổi dấu để suy duy nhất.

## Whole-chapter dependencies and author gates

1. S1 full-page and SBT printed-page verification from originals before any claim of complete Core coverage; identify where Chapter V ends at **p123**; p124–129 is not silently included in chapter Readiness.
2. Fill D3 original Core + Practice + Application on **all 17 outcomes**, written solution and unique item IDs; reuse skill and canonical Written/Anchor, never clone.
3. Complete D4 multi-step proof/modeling Written/Anchor and four-criterion rubrics, D5 original SVG convergence/asymptote/continuity graphs, D6 actionable stepwise HELP.
4. Create a **separate PRIVATE** RD1 chapter bank with one held-out original for every required outcome, unique item IDs, independent of public exposure. No private stem/key/rubric/public JS.
5. QA condition checks (nonzero denominator, q range, one-sided limits, x→−∞ sign), source-to-ID reconciliation, AP presentation plan and source custody. Then **ONE whole-chapter NotebookLM review** with both real Temp Markdown files plus short prompt as specified in source 06.
6. No Academic PASS or A6 handoff from this R00; no merge/deploy until owner explicit release authorization. Continue SGK-first sequence; Topic remains held.
