# Temp — G11 KNTT Tập 2 Chương IX: Đạo hàm — PUBLIC D1–D6 full-chapter candidate R00

**PACKET_ID:** `THPT-G11-CHIX-B31-B33-WHOLE-CHAPTER-AUTHORING-R00-20261101` · **LEARNING_PATH:** `SGK_CHAPTER` · **READINESS_SCOPE:** `SGK_CHAPTER_READINESS` — NOT TOPIC_READINESS. **STATUS:** `AUTHOR_QA_PENDING_NOTEBOOKLM` (không tự suy Academic PASS/PED PASS). **Date:** 2026-11-01. **Commit SHA:** not yet assigned when original file was authored; exact later Git source-lock recorded separately. 

**S1:** SGK Toán 11 KNTT Tập 2, Chương IX: B31 trang in 81–87; B32 88–94; B33 95–96; Bài tập cuối chương IX 97–98. SBT KNTT Tập 2: B31 54–57; B32 58–60; B33 61–62; Bài tập cuối chương IX 63–65; lời giải Chương IX bắt đầu trang 111 (mục lục scan công khai). Reviewer NotebookLM phải xác nhận bản S1 SGK/SBT gốc và số trang in; không dùng nguồn tham khảo thứ cấp để mở rộng Core. Nội dung gốc biên soạn độc lập, không sao chép câu chữ SGK/SBT. Bài thực hành trải nghiệm bắt đầu SGK trang 99 là phạm vi khác, KHÔNG tính vào Chương IX Core.

**Pedagogical priority:** WHY (nhu cầu) → WHAT (khái niệm) → HOW (hình thành, chứng minh/suy luận) → formal definition/domain → when to use → worked examples → self-try → SGK Core, Practice/Application, Written/Anchor → diagnosed D6 HELP. **Scope:** one full SGK Chapter IX B31, B32, B33, end-of-chapter; separate confidential 31-item independent RD1 reviewer source is supplied as another Temp MD. **Protected RD1 stems, keys, solutions and rubrics are NOT present here or in public GitHub.**

**Author inventory:** 31 distinct RD0 skills (B31 10, B32 15, B33 5, integrated 1); 32 explained D2 worked examples; 62 D3 public formative canonical items; 9 D4 shared Written (3 Anchor role-tags); 5 original pedagogical D5 SVG/XML; 11 five-step D6 HELP; 31 PRIVATE RD1 with /4 rubrics. Total **71 public + 31 protected = 102 canonical candidate items**. These are counts for reviewer reconciliation, not proof of mastery or release safety.

**Review contract:** five Permanent Sources THPT v2.0 only + original SGK/SBT KNTT S1; return independent `ACADEMIC_CHAPTER_IX` and `PEDAGOGICAL_SELF_LEARNING_READY`, SOURCE_RECEIPT, each outcome/item verdict, P0/P1/P2, MINIMAL_DELTA, SVG and D6 HELP review, structural exposure verdict. Runtime `EXPOSURE_SYSTEM_VERDICT=SYSTEM_HOLD`, no official Final Submit scoring/Mastery/deploy. 

---

## PART A — RD0 outcome matrix (31 canonical skill IDs)

| Skill ID / outcome | Bài | Learner can explain & do | Reviewer gate |
|---|---|---|---|
| `G11-B31-AVERAGE_RATE` | B31 | Tính và giải thích tốc độ biến đổi trung bình Δy/Δx, đơn vị | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B31-LIMIT_QUOTIENT` | B31 | Hiểu từ cát tuyến đến giới hạn thương sai phân hai phía | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B31-DERIVATIVE_AT_POINT` | B31 | Tính f'(a) bằng định nghĩa, tách f(a+h)-f(a) trước giới hạn | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B31-DIFFERENTIABILITY` | B31 | Nhận biết đạo hàm trên khoảng, điều kiện điểm trong miền và giới hạn hữu hạn hai phía | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B31-CONTINUITY_NECESSARY` | B31 | Phân biệt đạo hàm ⇒ liên tục; liên tục chưa chắc có đạo hàm | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B31-CORNER_CUSP` | B31 | Xét đạo hàm trái/phải tại góc nhọn, phát hiện |x| tại 0 | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B31-TANGENT_SLOPE` | B31 | Hiểu f'(a) là hệ số góc tiếp tuyến, không phải giá trị f(a) | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B31-TANGENT_EQUATION` | B31 | Lập y=f'(a)(x-a)+f(a) và kiểm điểm tiếp xúc | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B31-INSTANT_VELOCITY` | B31 | Giải thích vận tốc tức thời s'(t), phân biệt vận tốc có hướng và tốc độ | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B31-RATE_UNITS` | B31 | Diễn giải đơn vị đạo hàm và tỉ lệ biến thiên thực tế | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B32-POWER_INTEGER` | B32 | Quy tắc đạo hàm x^n với n nguyên dương và hằng số | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B32-SQRT_DOMAIN` | B32 | Đạo hàm sqrt(x) với x>0; phân biệt miền xác định x≥0 | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B32-CONSTANT_SUM` | B32 | Tổng/hiệu và hệ số nhân hằng số; đạo hàm của hằng bằng 0 | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B32-PRODUCT` | B32 | Hình thành và sử dụng (uv)'=u'v+uv' | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B32-QUOTIENT` | B32 | Dùng (u/v)'=(u'v-uv')/v² với v≠0 | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B32-COMPOSITION_CHAIN` | B32 | Hàm hợp f(g(x)) và đạo hàm hàm ngoài nhân đạo hàm hàm trong | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B32-TRIG_SIN_COS` | B32 | Đạo hàm sin, cos với góc đo radian | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B32-TRIG_TAN_COT` | B32 | Đạo hàm tan và cot với miền lượng giác đúng | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B32-TRIG_CHAIN` | B32 | Tính đạo hàm sin(g), cos(g), tan(g), cot(g) bằng dây chuyền | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B32-EXP_DERIV` | B32 | Tính đạo hàm e^x, a^x với a>0, a≠1 | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B32-LOG_DERIV` | B32 | Tính đạo hàm ln x và log_a x trên x>0 | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B32-EXP_LOG_CHAIN` | B32 | Kết hợp chain với e^u, a^u, ln u, log_a u | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B32-DOMAIN_VALIDATION` | B32 | Ràng buộc mẫu số, log, căn, tan/cot trước/sau phép lấy đạo hàm | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B32-RULE_SELECTION` | B32 | Lựa chọn thứ tự tổng/tích/thương/hợp, không lấy đạo hàm từng nhân tử rồi nhân | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B32-APPLIED_VELOCITY` | B32 | Dùng f'(t) phân tích chuyển động và giới hạn thời gian phù hợp mô hình | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B33-SECOND_DEF` | B33 | Định nghĩa f''=(f')' và điều kiện đạo hàm lần hai tồn tại | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B33-POLYNOMIAL` | B33 | Tính f' và f'' của đa thức không nhầm đạo hàm lần hai với (f')² | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B33-TRIG_EXP` | B33 | Tính đạo hàm cấp hai của hàm lượng giác/mũ đơn giản bằng chain | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B33-ACCELERATION` | B33 | Gia tốc tức thời a(t)=s''(t), vận tốc tức thời v=s' | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-B33-SIGN_INTERPRET` | B33 | Dấu gia tốc và vận tốc, không tự suy gia tốc âm luôn chậm dần | D1–D6 + PED1–PED6 **REVIEW PENDING** |
| `G11-CHIX-INTEGRATED` | CHIX | Tự chọn định nghĩa/quy tắc/tiếp tuyến/đạo hàm cấp hai và kiểm điều kiện/đơn vị | D1–D6 + PED1–PED6 **REVIEW PENDING** |

---

## PART B — D1 Concept-first Student Knowledge

## Bài 31 — Định nghĩa và ý nghĩa của đạo hàm (SGK trang 81–87)

### 1. WHY — Một tốc độ trung bình có thể che giấu sự thay đổi ngay tại một thời điểm
Giả sử quãng đường chuyển động $s(t)=t^2$ mét, thời gian $t$ giây. Trong khoảng từ $t=2$ đến $t=3$, vật đi từ 4 m đến 9 m, nên vận tốc trung bình bằng $(9-4)/(3-2)=5$ m/s. Nhưng vật có giữ vận tốc 5 m/s **đúng lúc** $t=2$ không? Không: khoảng đo 1 giây quá dài. Ta cần thu hẹp khoảng đo. Đó chính là nhu cầu hình thành đạo hàm, chứ không phải yêu cầu học thuộc ký hiệu $f'(x)$.

### 2. WHAT → HOW — Từ vận tốc trung bình đến thương sai phân
Với $y=f(x)$, tại $x=a$ và $x=a+h$ (đều thuộc miền xác định, $h\ne0$), độ tăng đầu vào là $h$, độ tăng đầu ra $\Delta y=f(a+h)-f(a)$. **Tốc độ biến đổi trung bình** là $\Delta y/h$. Nếu khi $h$ tiến về $0$ **từ cả hai phía** biểu thức này tiến đến một số hữu hạn $L$, ta định nghĩa đạo hàm tại $a$ là $f'(a)=L$. Viết đúng $f'(a)=\lim_{h\to0}[f(a+h)-f(a)]/h$. Không được lấy trực tiếp $h=0$ vì biểu thức ban đầu là $0/0$; phải rút gọn hay biến đổi rồi mới lấy giới hạn.

**Thực hành trước khi xem công thức:** Với $f(x)=x^2$, hãy viết $f(2+h)-f(2)$; kết quả là $4h+h^2$, nên thương bằng $4+h$, giới hạn $4$. Đạo hàm tại 2 là 4 đơn vị đầu ra trên một đơn vị đầu vào. Nếu $f$ xác định và có đạo hàm tại mỗi điểm trên khoảng, ta nói $f$ có đạo hàm trên khoảng ấy và $f'(x)$ là một **hàm mới**.

### 3. Điều kiện toán học và các bẫy
Đạo hàm thông thường tại điểm trong khoảng cần giới hạn sai phân **hai phía**, hữu hạn và nhất quán. Nếu chỉ có một phía hoặc thương sai phân vô hạn thì chưa có đạo hàm hữu hạn hai phía. **Có đạo hàm ⇒ liên tục** tại điểm ấy, nhưng chiều ngược lại sai: $f(x)=|x|$ liên tục tại 0 mà $[|h|-0]/h=1$ khi $h>0$, bằng $-1$ khi $h<0$ nên **không có đạo hàm ở 0**. Đừng nói mọi đồ thị nối liền đều có tiếp tuyến dốc hữu hạn. Đối với $f(x)=\sqrt{x}$, định nghĩa chỉ nhận $x\ge0$; trên $x>0$ có đạo hàm, còn tại biên 0 không có đạo hàm hai phía theo nghĩa thông thường trên khoảng.

### 4. Ý nghĩa hình học — Cát tuyến tiến tới tiếp tuyến
Hai điểm $P(a,f(a))$, $Q(a+h,f(a+h))$ xác định đường **cát tuyến** với hệ số góc $[f(a+h)-f(a)]/h$. Khi $Q\to P$, nếu giới hạn hữu hạn, hệ số góc tiến tới $f'(a)$: đó là hệ số góc **tiếp tuyến** tại $P$. Phương trình tiếp tuyến là $y-f(a)=f'(a)(x-a)$. **Lưu ý** $f(a)$ là tung độ điểm tiếp xúc; $f'(a)$ là độ dốc; chúng không hoán đổi. **Hình FIG-G11-CHIX-B31-01:** cát tuyến trên $y=x^2$ qua $P(1,1)$ và $Q(1+h,(1+h)^2)$ tiến tới đường tiếp tuyến $y=2x-1$ khi $h\to0$; học sinh so sánh hệ số góc $2+h$ và 2.

### 5. Ý nghĩa vật lý và thực tế — dấu/đơn vị
Với tọa độ $s(t)$ mét và $t$ giây, $v(t)=s'(t)$ có đơn vị m/s, **có dấu** (dương theo chiều quy ước, âm ngược chiều). **Tốc độ** là $|v(t)|$, không phải luôn $v(t)$. Trong mô hình nhiệt độ $T(t)$ đo bằng °C, $T'(t)$ có đơn vị °C/phút nếu $t$ là phút, diễn đạt tốc độ nhiệt độ đang thay đổi; không phải nhiệt độ $T$.

### 6. Tự thử *trước* Core
Tính vận tốc tức thời của $s(t)=3t^2+2t$ tại $t=1$ **bằng định nghĩa**. Vì sao phải rút gọn $h$ trước khi lấy giới hạn? Nếu $f(1)=5$ và $f'(1)=8$, phương trình tiếp tuyến là gì? **Tự đối chiếu sau khi thử:** thương $[s(1+h)-s(1)]/h=8+3h$, cho $v(1)=8$ m/s; chưa được đặt $h=0$ trong thương gốc; tiếp tuyến $y-5=8(x-1)$.

**Liên kết D6:** nếu lấy $f(a)$ làm độ dốc, quay lại `HELP-G11-CHIX-B31-03`; nếu lấy $h=0$ sớm, xem `HELP-G11-CHIX-B31-01`; nếu quên trái/phải của $|x|$, xem `HELP-G11-CHIX-B31-02`.


## Bài 32 — Các quy tắc tính đạo hàm (SGK trang 88–94)

### 1. WHY — Không thể giải mọi bài bằng giới hạn từ đầu
Định nghĩa giới hạn giúp ta **hiểu** đạo hàm, nhưng với $f(x)=(x^2+1)\sin(3x)$, khai triển $f(x+h)$ rất dài. Cần các quy tắc bảo toàn ý nghĩa **tốc độ biến đổi** khi cộng, nhân, chia và lồng các hàm. Quy tắc là hệ quả của định nghĩa, không phải mẹo đại số.

### 2. Đạo hàm hàm sơ cấp và kiểm điều kiện
- $(c)'=0$, $(x)'=1$; với $n$ nguyên dương $(x^n)'=nx^{n-1}$. Ví dụ $(x^3)'=3x^2$. Không nhầm $(x^n)'$ với $x^{n-1}$ (thiếu hệ số n).
- Với $x>0$, $(\sqrt{x})'=1/(2\sqrt{x})$, vì $[\sqrt{x+h}-\sqrt{x}]/h=1/[\sqrt{x+h}+\sqrt{x}]$. **Tại x=0** có giá trị căn nhưng công thức đạo hàm không xác định; không dùng nó tại 0.
- Đạo hàm $\sin x$ là $\cos x$, đạo hàm $\cos x$ là $-\sin x$ khi góc $x$ đo **radian**. $(\tan x)'=1/\cos^2x$ với $\cos x\ne0$; $(\cot x)'=-1/\sin^2x$ với $\sin x\ne0$. Giải thích: tan=sin/cos nên dấu và mẫu của quy tắc thương quyết định kết quả.
- $(e^x)'=e^x$, $(a^x)'=a^x\ln a$ với $a>0,a\ne1$; $(\ln x)'=1/x$ khi $x>0$; $(\log_a x)'=1/(x\ln a)$ khi $a>0,a\ne1$, $x>0$. Cơ số $a$ ở đây là **hằng số**, không phải biến.

### 3. HOW — Vì sao đạo hàm của tích không chỉ là tích đạo hàm?
Khi cả $u$ lẫn $v$ thay đổi, $(u+\Delta u)(v+\Delta v)-uv=v\Delta u+u\Delta v+\Delta u\Delta v$. Chia $\Delta x$ rồi lấy giới hạn, số hạng tích hai độ tăng nhỏ không đóng góp vào đạo hàm: **$(uv)'=u'v+uv'$**. Hình FIG-G11-CHIX-B32-01 cho thấy hình chữ nhật rộng $u$, cao $v$ xuất hiện hai dải diện tích chính khi cả hai cạnh tăng, giải thích vì sao phải cộng **hai** tích. Ví dụ $(x(x^2+1))'=(x^2+1)+x(2x)=3x^2+1$, không phải $1\cdot2x$.

### 4. Tổng, hiệu, thương — và điều kiện mẫu
$(u\pm v)'=u'\pm v'$, $(cu)'=cu'$. Với $v(x)\ne0$ và u,v khả vi, $(u/v)'=[u'v-uv']/v^2$. Dấu trừ và mẫu bình phương là bắt buộc; tại nghiệm của v, hàm ban đầu không có nghĩa, dù một biểu thức đạo hàm sau rút gọn có vẻ hữu hạn. Ví dụ $f(x)=(x+2)/(x-1)$ với $x\ne1$: $f'(x)=[(x-1)-(x+2)]/(x-1)^2=-3/(x-1)^2$.

### 5. HOW — Hàm số hợp và quy tắc dây chuyền
Trong $y=f(g(x))$, x thay đổi làm $u=g(x)$ thay đổi, sau đó y=f(u) thay đổi. Vì $\Delta y/\Delta x=(\Delta y/\Delta u)(\Delta u/\Delta x)$ khi các thương có nghĩa, sau lấy giới hạn nhận được **$(f\circ g)'(x)=f'(g(x))\,g'(x)$**. Với $y=(3x-2)^5$, bước trong $u=3x-2$ có $u'=3$, bước ngoài $u^5$ có đạo hàm $5u^4$, kết quả $15(3x-2)^4$. **Không** được bỏ nhân 3. Hình FIG-G11-CHIX-B32-02 vẽ hai tầng đầu vào và nhân các tốc độ biến đổi.

### 6. Hàm lượng giác hợp, mũ hợp, logarit hợp
Với $u=u(x)$ khả vi và biểu thức xác định: $(\sin u)'=u'\cos u$, $(\cos u)'=-u'\sin u$, $(\tan u)'=u'/\cos^2 u$ (cos u≠0), $(\cot u)'=-u'/\sin^2 u$ (sin u≠0); $(e^u)'=u'e^u$, $(a^u)'=u'a^u\ln a$ (a>0,a≠1); $(\ln u)'=u'/u$ **khi $u>0$**; $(\log_a u)'=u'/(u\ln a)$ khi u>0. Ví dụ $\ln(4-x^2)$ chỉ có nghĩa khi $-2<x<2$, đạo hàm $-2x/(4-x^2)$ trên **chính** miền đó.

### 7. Quy trình lựa chọn phương pháp, không học bảng thuộc lòng
**(i)** Xác định miền xác định trước; **(ii)** tách các lớp ngoài–trong: tổng, tích, thương, hàm hợp; **(iii)** dùng quy tắc; **(iv)** rút gọn vừa đủ; **(v)** kiểm đơn vị, dấu và miền. Với $f(x)=x^2 e^{3x}$: dùng tích ở ngoài, chain ở thành phần mũ → $f'=2xe^{3x}+3x^2e^{3x}=e^{3x}(2x+3x^2)$. Chỉ $(x^2)'(e^{3x})'$ cho kết quả sai.

### 8. Tự thử *trước* Core
Tự giải $y=(x+1)\cos(2x)$; $z=\ln(5-x)$; $w=e^{x^2}$. Hãy nêu **mỗi biểu thức dùng quy tắc ngoài nào và vì sao**. **Đối chiếu:** $y'=\cos2x-2(x+1)\sin2x$ (tích+dây chuyền); $z'=-1/(5-x)$, chỉ $x<5$ (log+dây chuyền); $w'=2xe^{x^2}$ (hàm mũ hợp). Cần biết mũ, log, lượng giác trong cùng một chương, không chỉ đa thức.

**Liên kết D6:** `HELP-G11-CHIX-B32-01` (quy tắc tích), `...-02` (chain), `...-03` (miền log/căn), `...-04` (sin/cos/tan/cot), `...-05` (thương).


## Bài 33 — Đạo hàm cấp hai (SGK trang 95–96)

### 1. WHY — Vận tốc thay đổi nhanh hay chậm?
Đạo hàm thứ nhất của quãng đường/tọa độ theo thời gian cho **vận tốc tức thời**. Nhưng khi đang lái xe, vận tốc cũng có thể tăng hoặc giảm: cần tốc độ biến đổi của **vận tốc**, tức **gia tốc**. Đó là động cơ của đạo hàm cấp hai, không phải kí hiệu bí hiểm có hai dấu phẩy.

### 2. WHAT & HOW — Lấy đạo hàm của chính hàm đạo hàm
Nếu $f$ có đạo hàm $f'$ trên một khoảng và $f'$ lại có đạo hàm thì $f''=(f')'$ là **đạo hàm cấp hai**. Không nhầm $f''$ với $(f')^2$. Chẳng hạn $f(x)=x^3-2x^2+5$: $f'=3x^2-4x$, $f''=6x-4$; còn $(f')^2=(3x^2-4x)^2$ rất khác. Đạo hàm cấp hai không tự tồn tại ở mọi điểm chỉ vì f có đạo hàm lần một.

### 3. Dùng quy tắc đã học để tính lần hai
Với $y=e^{2x+1}$, $y'=2e^{2x+1}$, $y''=4e^{2x+1}$: mỗi lần lấy đạo hàm hàm hợp phải nhân đạo hàm hàm trong. Với $y=\sin(3x)$, $y'=3\cos(3x)$, $y''=-9\sin(3x)$, không được quên dấu âm hoặc hệ số 3 lần thứ hai.

### 4. Ý nghĩa cơ học: hướng chuyển động và gia tốc
Nếu $s(t)$ tính bằng **mét**, $t$ bằng **giây**, thì $v(t)=s'(t)$ có đơn vị m/s, $a(t)=v'(t)=s''(t)$ có đơn vị m/s². Gia tốc âm không nhất thiết có nghĩa “chậm dần”: nếu vật đang đi về chiều âm ($v<0$) và gia tốc cũng âm ($a<0$), **độ lớn vận tốc tăng**, vật nhanh dần theo chiều âm. Khi $v$ và $a$ trái dấu, độ lớn vận tốc giảm (trong một khoảng không qua điểm đổi chiều); khi cùng dấu, tăng. Hình FIG-G11-CHIX-B33-01 cho thấy $s(t)=t^3-3t^2+2t$ có $v=3t^2-6t+2$ và $a=6t-6$; học sinh đọc ba độ biến đổi khác nhau, không lấy chiều cao đường cong làm đạo hàm.

### 5. Lưu ý về tính thực tế
Mô hình chuyển động phải chỉ xét thời gian vật còn ở trạng thái mô tả, ví dụ không dùng công thức rơi tự do sau khi đã chạm đất. Với hàm chiều cao $h(t)=12t-3t^2$ (m) đến lúc trở về mặt đất, $h(0)=0$, $h(4)=0$, do đó thời gian thực tế là $0\le t\le4$; $v(t)=12-6t$ (m/s), gia tốc $a(t)=-6$ m/s² trên khoảng mô hình. Tại $t=2$, v=0 không đồng nghĩa a=0.

### 6. Tự thử *trước* Core
Cho $s(t)=t^3-6t$ cm, $t$ giây. Hãy viết vận tốc, gia tốc và đơn vị. Tại $t=1$, vật đang đi theo chiều nào và gia tốc theo chiều nào? **Đối chiếu:** $v=3t^2-6$ cm/s, $a=6t$ cm/s²; tại t=1, $v=-3$ cm/s (chiều âm), $a=+6$ cm/s² (chiều dương), hai dấu trái nhau nên tốc độ tức thời đang giảm. Không suy một gia tốc dương là vật luôn nhanh dần.

**Liên kết D6:** `HELP-G11-CHIX-B33-01` (nhầm lần hai), `...-02` (vận tốc/gia tốc và dấu), `...-03` (suy đơn vị và phạm vi thời gian).


## Kết nối toàn chương — học sinh tự giải thích được điều gì?

1. Từ đo **biến thiên trung bình** đến vận tốc tức thời là đưa độ dài khoảng đo về 0 bằng **giới hạn**, chứ không thay h=0 trong phân thức. 2. Tốc độ thay đổi tức thời của f chính là đạo hàm; trong hình học nó là độ dốc tiếp tuyến, trong vật lý là vận tốc có dấu. 3. Quy tắc **tích, thương và hàm hợp** giúp tính nhanh nhưng phải giữ điều kiện xác định; mũ/lôgarit/lượng giác **đều** nằm trong SGK Chương IX. 4. Khi đạo hàm là một hàm mới, đạo hàm tiếp cho **đạo hàm cấp hai**; theo thời gian đó là gia tốc, khác vận tốc. 5. Học sinh chỉ học nhánh SGK vẫn có đủ kiến thức B31–B33, Core/Practice/Written và cơ chế định hướng D6; không cần truy cập Topic.

**Tự thử tổng hợp trước khi kiểm tra:** Cho $s(t)=t^2+4t$ m, t≥0. (i) tại t=2 lập thương sai phân s(2+h)-s(2), (ii) tìm v(2), (iii) tìm a(t), (iv) đơn vị. **Tự đối chiếu sau khi làm:** $(8h+h^2)/h=8+h$, $v(2)=8$ m/s; $v(t)=2t+4$, $a(t)=2$ m/s². Đây là bài học công khai, tuyệt đối không thay cho PRIVATE RD1.

---

## PART C — D2 worked examples: giải thích lựa chọn từng bước

### B31: 8 ví dụ có suy luận

#### EX-G11-CHIX-B31-01: Định nghĩa tại một điểm

**Bài toán:** $f(x)=x^2+3x$, tìm $f'(1)$ từ $h$.

**Phân tích, đáp án:** $[f(1+h)-f(1)]/h=5+h\to5$, do đó $f'(1)=5$.

**Vì sao:** Rút gọn h rồi mới cho h→0; không thay h=0 ngay.

#### EX-G11-CHIX-B31-02: Thương sai phân

**Bài toán:** $f(x)=2x^2-1$, viết thương tại $a=3$.

**Phân tích, đáp án:** $[f(3+h)-f(3)]/h=12+2h$, giới hạn 12.

**Vì sao:** Lấy đạo hàm không phải chỉ lấy f(3)=17.

#### EX-G11-CHIX-B31-03: Tiếp tuyến

**Bài toán:** $f(x)=x^2-4x+1$ tại $x=3$.

**Phân tích, đáp án:** $f(3)=-2$, $f'(3)=2$, tiếp tuyến $y+2=2(x-3)$ tức $y=2x-8$.

**Vì sao:** Cần cả điểm (3,-2) và hệ số góc 2.

#### EX-G11-CHIX-B31-04: Góc nhọn |x|

**Bài toán:** Xét đạo hàm $f(x)=|x-2|$ tại $2$.

**Phân tích, đáp án:** Thương tại 2 là $|h|/h$, hai giới hạn 1 và -1 khác nhau; không có đạo hàm tại 2.

**Vì sao:** Hàm liên tục tại 2 chưa đảm bảo có đạo hàm.

#### EX-G11-CHIX-B31-05: Vận tốc và dấu

**Bài toán:** $s(t)=10-3t^2$ m, t giây. Tính $v(1)$.

**Phân tích, đáp án:** $v=s'=-6t$ m/s, $v(1)=-6$ m/s; tốc độ 6 m/s.

**Vì sao:** Âm là chiều ngược trục chọn, không phải tốc độ âm.

#### EX-G11-CHIX-B31-06: Nhiệt độ biến thiên

**Bài toán:** $T(t)=22+4t-t^2$ °C, t phút. Tính $T'(2)$.

**Phân tích, đáp án:** $T'=4-2t$, $T'(2)=0$ °C/phút, nghĩa nhiệt độ tại thời điểm đó đang không tăng/giảm bậc nhất.

**Vì sao:** Đơn vị đạo hàm = °C/phút, không phải °C.

#### EX-G11-CHIX-B31-07: Đạo hàm trên khoảng

**Bài toán:** Tính đạo hàm $f(x)=1/x$ và phát biểu khoảng khả vi.

**Phân tích, đáp án:** $f'(x)=-1/x^2$ trên $(-\infty,0)$ và $(0,+\infty)$; không tại x=0.

**Vì sao:** Tuy đạo hàm công thức có ở x≠0 nhưng không khẳng định trên ℝ.

#### EX-G11-CHIX-B31-08: Cát tuyến tiến gần

**Bài toán:** $f(x)=x^2$, P tại x=2, Q tại x=2+h. Hệ số góc? 

**Phân tích, đáp án:** $(4h+h^2)/h=4+h$, tiến tới 4 khi h→0.

**Vì sao:** Cát tuyến khác tiếp tuyến khi h≠0; lấy giới hạn.

### B32: 18 ví dụ có suy luận

#### EX-G11-CHIX-B32-01: Quy tắc lũy thừa

**Bài toán:** $f(x)=4x^5-3x^2+7$; tìm $f'$.

**Phân tích, đáp án:** $f'=20x^4-6x$; số hằng 7 có đạo hàm 0.

**Vì sao:** Dùng hệ số n; không chuyển thành 4x^4.

#### EX-G11-CHIX-B32-02: Căn và miền

**Bài toán:** $f(x)=2\sqrt{x}+x$; đạo hàm ở x>0.

**Phân tích, đáp án:** $f'(x)=1/\sqrt{x}+1$ với x>0; f xác định ở 0 nhưng công thức đạo hàm không có ở đó.

**Vì sao:** Áp dụng $(\sqrt{x})'=1/(2\sqrt{x})$ và nhân 2.

#### EX-G11-CHIX-B32-03: Tích

**Bài toán:** $f(x)=(x^2+2)(x-3)$; đạo hàm chưa khai triển.

**Phân tích, đáp án:** $f'=2x(x-3)+(x^2+2)$, hay $3x^2-6x+2$.

**Vì sao:** Hai cạnh cùng thay đổi; không chỉ lấy hai đạo hàm nhân nhau.

#### EX-G11-CHIX-B32-04: Thương

**Bài toán:** $f(x)=(2x-1)/(x+2)$; tính f' và TXĐ.

**Phân tích, đáp án:** $f'=5/(x+2)^2$, x≠-2.

**Vì sao:** Tử số 2(x+2)-(2x-1)=5; mẫu bình phương.

#### EX-G11-CHIX-B32-05: Hàm hợp lũy thừa

**Bài toán:** $f(x)=(x^2+3x)^4$; tính f'.

**Phân tích, đáp án:** $f'=4(x^2+3x)^3(2x+3)$.

**Vì sao:** Đạo hàm ngoài 4u³, nhân u'=2x+3.

#### EX-G11-CHIX-B32-06: Tích và hợp

**Bài toán:** $f(x)=x\sin(2x)$; tính f'.

**Phân tích, đáp án:** $f'=\sin(2x)+2x\cos(2x)$.

**Vì sao:** Áp tích; sin(2x) cần chain nhân 2.

#### EX-G11-CHIX-B32-07: Cos hợp

**Bài toán:** $f(x)=3\cos(4x)$; tính f'.

**Phân tích, đáp án:** $f'=-12\sin(4x)$.

**Vì sao:** Đạo hàm cos có dấu âm và hàm trong 4x có đạo hàm 4.

#### EX-G11-CHIX-B32-08: Tan với miền

**Bài toán:** $f(x)=\tan(2x)$; đạo hàm và điều kiện.

**Phân tích, đáp án:** $f'=2/\cos^2(2x)$ tại cos(2x)≠0 (x≠π/4+kπ/2).

**Vì sao:** Không áp dụng ở tiệm cận tan.

#### EX-G11-CHIX-B32-09: Cot với dấu

**Bài toán:** $f(x)=\cot(3x)$; đạo hàm.

**Phân tích, đáp án:** $f'=-3/\sin^2(3x)$ với sin(3x)≠0.

**Vì sao:** Cot âm và chain nhân 3.

#### EX-G11-CHIX-B32-10: Mũ e hợp

**Bài toán:** $f(x)=e^{x^2+1}$; tính f'.

**Phân tích, đáp án:** $f'=2xe^{x^2+1}$.

**Vì sao:** e^u đạo hàm bằng chính e^u nhân u'.

#### EX-G11-CHIX-B32-11: Mũ cơ số 3

**Bài toán:** $f(x)=3^{2x}$; tính f'.

**Phân tích, đáp án:** $f'=2\ln(3)\,3^{2x}$ với x∈ℝ.

**Vì sao:** Cơ số 3 đưa ln 3; chain nhân 2.

#### EX-G11-CHIX-B32-12: Log tự nhiên

**Bài toán:** $f(x)=\ln(4-x)$; f' trên miền.

**Phân tích, đáp án:** $f'=-1/(4-x)$ trên x<4.

**Vì sao:** Miền đối số 4-x>0; không bỏ dấu âm.

#### EX-G11-CHIX-B32-13: Log cơ số 2

**Bài toán:** $f(x)=\log_2(3x+1)$; f' trên miền.

**Phân tích, đáp án:** $f'=3/[(3x+1)\ln2]$ với x>-1/3.

**Vì sao:** Nhân đạo hàm đối số 3 và giữ ln2.

#### EX-G11-CHIX-B32-14: Quy tắc tích lẫn mũ

**Bài toán:** $f(x)=(x+1)e^{-x}$; tính f'.

**Phân tích, đáp án:** $f'=e^{-x}-(x+1)e^{-x}=-xe^{-x}$.

**Vì sao:** Đạo hàm của e^{-x} mang dấu âm; rồi áp tích.

#### EX-G11-CHIX-B32-15: Thương của hai hàm

**Bài toán:** $f(x)=\sin x/(x^2+1)$; tính f'.

**Phân tích, đáp án:** $f'=[(x^2+1)\cos x-2x\sin x]/(x^2+1)^2$ với mọi x.

**Vì sao:** Mẫu luôn >0, trừ tử hai tích đúng thứ tự.

#### EX-G11-CHIX-B32-16: Điều kiện log hợp

**Bài toán:** $f(x)=\ln(x^2-4)$, tìm miền và f'.

**Phân tích, đáp án:** Miền x<-2 hoặc x>2; f'=2x/(x^2-4) chỉ trên miền đó.

**Vì sao:** x²−4 dương ngoài [-2,2], không dùng ở -2<x<2.

#### EX-G11-CHIX-B32-17: Hàm hợp căn

**Bài toán:** $f(x)=\sqrt{5x+1}$; f' trên miền thích hợp.

**Phân tích, đáp án:** $f'=5/[2\sqrt{5x+1}]$ tại x>-1/5.

**Vì sao:** f có giá trị ở x=-1/5 nhưng không có đạo hàm hữu hạn hai phía.

#### EX-G11-CHIX-B32-18: Trộn tan và cot

**Bài toán:** $f(x)=\tan x-\cot x$; tính đạo hàm và miền.

**Phân tích, đáp án:** $f'=1/\cos^2x+1/\sin^2x$ tại sin x≠0 và cos x≠0.

**Vì sao:** Trừ cot làm hai dấu âm thành dấu cộng.

### B33: 6 ví dụ có suy luận

#### EX-G11-CHIX-B33-01: Hai lần đa thức

**Bài toán:** $f(x)=2x^4-3x^2+6$; tìm f''.

**Phân tích, đáp án:** $f'=8x^3-6x$, $f''=24x^2-6$.

**Vì sao:** Lấy đạo hàm hai lần, không bình phương f'.

#### EX-G11-CHIX-B33-02: Hàm sin bậc hai

**Bài toán:** $f(x)=\sin(2x)$; tìm f''.

**Phân tích, đáp án:** $f'=2\cos(2x)$, $f''=-4\sin(2x)$.

**Vì sao:** Chain được nhân cả hai lượt; dấu cos'=-sin.

#### EX-G11-CHIX-B33-03: Mũ bậc hai

**Bài toán:** $f(x)=e^{3x}$; tìm f''.

**Phân tích, đáp án:** $f'=3e^{3x}$, $f''=9e^{3x}$.

**Vì sao:** Nhân 3 ở mỗi lần lấy đạo hàm.

#### EX-G11-CHIX-B33-04: Gia tốc từ vị trí

**Bài toán:** $s(t)=t^3-2t^2+1$ m; gia tốc t=1.

**Phân tích, đáp án:** $v=3t^2-4t$ m/s; $a=6t-4$ m/s², $a(1)=2$ m/s².

**Vì sao:** Không nhầm vận tốc v(1)=-1 với a(1)=2.

#### EX-G11-CHIX-B33-05: Ngược dấu

**Bài toán:** Vật có v=-5 m/s, a=-2 m/s² tại t0; đang nhanh hay chậm dần?

**Phân tích, đáp án:** Vì v và a cùng âm, tốc độ |v| đang tăng tại thời điểm đó (nhanh dần theo chiều âm).

**Vì sao:** Gia tốc âm không đồng nghĩa chậm dần.

#### EX-G11-CHIX-B33-06: Mô hình bóng bay

**Bài toán:** $h(t)=8t-2t^2$ m trong 0≤t≤4; tìm h'' và đơn vị.

**Phân tích, đáp án:** $v=8-4t$ m/s, $a=-4$ m/s²; chỉ diễn giải trong khoảng thời gian mô hình đang áp dụng.

**Vì sao:** Đối chiếu h(0)=h(4)=0 trước suy chuyển động. 


---

## PART D — D3 Public canonical SGK Core + Practice / Application (62 stems)

### B31 — 20 canonical public questions

#### THPT-G11-CHIX-B31-C01 · skill_id=`G11-B31-AVERAGE_RATE` · placement=`SGK_CORE`

**Đề:** Với $f(x)=x^2$, tính độ biến thiên trung bình từ x=1 đến x=3.

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $(9-1)/(3-1)=4$.

**Giải thích bản chất và cách chọn phương pháp:** Giá trị này đo trung bình trên cả đoạn, chưa phải đạo hàm tại 1.

#### THPT-G11-CHIX-B31-P01 · skill_id=`G11-B31-AVERAGE_RATE` · placement=`SGK_PRACTICE`

**Đề:** Chiều cao $H(t)=5+2t+t^2$ m. Tốc độ biến đổi trung bình trên [2,4]?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $[H(4)-H(2)]/2=(29-13)/2=8$ m/s.

**Giải thích bản chất và cách chọn phương pháp:** Cần chia độ biến thiên 16 m cho thời gian 2 s.

#### THPT-G11-CHIX-B31-C02 · skill_id=`G11-B31-LIMIT_QUOTIENT` · placement=`SGK_CORE`

**Đề:** Để định nghĩa $f'(a)$, cần lấy giới hạn nào?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $\lim_{h\to0}[f(a+h)-f(a)]/h$, $h\ne0$.

**Giải thích bản chất và cách chọn phương pháp:** Đạo hàm là giới hạn *thương* của hai độ thay đổi.

#### THPT-G11-CHIX-B31-P02 · skill_id=`G11-B31-LIMIT_QUOTIENT` · placement=`SGK_PRACTICE`

**Đề:** Với $f(x)=2x^2$, hãy rút gọn thương sai phân tại a=1 (chưa lấy giới hạn).

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $[2(1+h)^2-2]/h=4+2h$.

**Giải thích bản chất và cách chọn phương pháp:** Khai triển tử 4h+2h² và chia h khi h≠0.

#### THPT-G11-CHIX-B31-C03 · skill_id=`G11-B31-DERIVATIVE_AT_POINT` · placement=`SGK_CORE`

**Đề:** Tính $f'(0)$ bằng định nghĩa nếu $f(x)=3x^2+2x$.

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $2$.

**Giải thích bản chất và cách chọn phương pháp:** Thương tại 0 là $3h+2\to2$.

#### THPT-G11-CHIX-B31-P03 · skill_id=`G11-B31-DERIVATIVE_AT_POINT` · placement=`SGK_PRACTICE`

**Đề:** Với $f(x)=x^2-x$, tính $f'(3)$ từ thương sai phân tại 3.

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $5$.

**Giải thích bản chất và cách chọn phương pháp:** $f(3+h)-f(3)=5h+h²$, chia h rồi h→0.

#### THPT-G11-CHIX-B31-C04 · skill_id=`G11-B31-DIFFERENTIABILITY` · placement=`SGK_CORE`

**Đề:** Có thể khẳng định $f(x)=1/x$ có đạo hàm trên toàn ℝ không?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** Không, vì f không xác định tại x=0.

**Giải thích bản chất và cách chọn phương pháp:** Đạo hàm không thể tồn tại tại điểm ngoài miền xác định.

#### THPT-G11-CHIX-B31-P04 · skill_id=`G11-B31-DIFFERENTIABILITY` · placement=`SGK_PRACTICE`

**Đề:** Cho $f(x)=\sqrt{x}$ trên x≥0, tại x=0 có đạo hàm hữu hạn hai phía không?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** Không.

**Giải thích bản chất và cách chọn phương pháp:** Đây là điểm biên miền; thương phải khi h>0 là 1/√h→+∞.

#### THPT-G11-CHIX-B31-C05 · skill_id=`G11-B31-CONTINUITY_NECESSARY` · placement=`SGK_CORE`

**Đề:** Phát biểu đúng quan hệ đạo hàm và liên tục.

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** Có đạo hàm tại a ⇒ liên tục tại a; không có chiều ngược.

**Giải thích bản chất và cách chọn phương pháp:** Nếu thương sai phân có giới hạn hữu hạn thì $f(a+h)-f(a)=h\cdot$ thương →0.

#### THPT-G11-CHIX-B31-P05 · skill_id=`G11-B31-CONTINUITY_NECESSARY` · placement=`SGK_PRACTICE`

**Đề:** $f(x)=|x-1|$ liên tục tại 1. Có đạo hàm tại 1 không?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** Không.

**Giải thích bản chất và cách chọn phương pháp:** Thương trái là -1 và thương phải là +1 tại a=1.

#### THPT-G11-CHIX-B31-C06 · skill_id=`G11-B31-CORNER_CUSP` · placement=`SGK_CORE`

**Đề:** Vì sao $|x|$ không có đạo hàm tại 0?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** Thương trái -1, phải +1 khác nhau.

**Giải thích bản chất và cách chọn phương pháp:** Đạo hàm hai phía phải cho cùng giới hạn hữu hạn.

#### THPT-G11-CHIX-B31-P06 · skill_id=`G11-B31-CORNER_CUSP` · placement=`SGK_PRACTICE`

**Đề:** Xét $f(x)=|x+3|$. Tại x=-3, độ dốc hai phía là bao nhiêu?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** Trái -1, phải +1; không có đạo hàm.

**Giải thích bản chất và cách chọn phương pháp:** Dịch góc nhọn |x| sang trái 3 đơn vị, không làm trơn nó.

#### THPT-G11-CHIX-B31-C07 · skill_id=`G11-B31-TANGENT_SLOPE` · placement=`SGK_CORE`

**Đề:** Điểm P(2,7) thuộc đồ thị, $f'(2)=-3$. Hệ số góc tiếp tuyến là gì?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $-3$.

**Giải thích bản chất và cách chọn phương pháp:** Hệ số góc = đạo hàm, không phải tung độ 7.

#### THPT-G11-CHIX-B31-P07 · skill_id=`G11-B31-TANGENT_SLOPE` · placement=`SGK_PRACTICE`

**Đề:** Với $f(x)=x^3$, hệ số góc tiếp tuyến tại x=-1?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $3$.

**Giải thích bản chất và cách chọn phương pháp:** $f'(x)=3x^2$, nên f'(-1)=3, dù f(-1)=-1.

#### THPT-G11-CHIX-B31-C08 · skill_id=`G11-B31-TANGENT_EQUATION` · placement=`SGK_CORE`

**Đề:** $f(1)=4$ và $f'(1)=2$. Viết tiếp tuyến.

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $y-4=2(x-1)$.

**Giải thích bản chất và cách chọn phương pháp:** Tiếp tuyến đi qua (1,4), có hệ số góc 2.

#### THPT-G11-CHIX-B31-P08 · skill_id=`G11-B31-TANGENT_EQUATION` · placement=`SGK_PRACTICE`

**Đề:** Viết tiếp tuyến của $f(x)=x^2+1$ tại x=-2.

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $y-5=-4(x+2)$, hay $y=-4x-3$.

**Giải thích bản chất và cách chọn phương pháp:** Điểm (-2,5), đạo hàm -4, rồi viết dạng điểm–hệ số góc.

#### THPT-G11-CHIX-B31-C09 · skill_id=`G11-B31-INSTANT_VELOCITY` · placement=`SGK_CORE`

**Đề:** $s(t)=5t^2$ m, t s; vận tốc tức thời tại t=2?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $20$ m/s.

**Giải thích bản chất và cách chọn phương pháp:** $v=s'=10t$, thay 2 được 20 (không phải quãng đường 20 m).

#### THPT-G11-CHIX-B31-P09 · skill_id=`G11-B31-INSTANT_VELOCITY` · placement=`SGK_PRACTICE`

**Đề:** $s(t)=12t-2t^2$ m, tốc độ tại t=4 là?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $|12-4\cdot4|=4$ m/s.

**Giải thích bản chất và cách chọn phương pháp:** Vận tốc là -4 m/s, còn tốc độ là trị tuyệt đối.

#### THPT-G11-CHIX-B31-C10 · skill_id=`G11-B31-RATE_UNITS` · placement=`SGK_CORE`

**Đề:** $V(t)$ lít và t phút. Đơn vị của $V'(t)$ là gì?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** Lít/phút.

**Giải thích bản chất và cách chọn phương pháp:** Đạo hàm bằng độ biến đổi thể tích chia độ biến đổi thời gian.

#### THPT-G11-CHIX-B31-P10 · skill_id=`G11-B31-RATE_UNITS` · placement=`SGK_PRACTICE`

**Đề:** $C(q)=100+7q+0,1q^2$ nghìn đồng (q sản phẩm). $C'(10)$ và đơn vị?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $C'(q)=7+0,2q$, $C'(10)=9$ nghìn đồng/sản phẩm.

**Giải thích bản chất và cách chọn phương pháp:** Chi phí cận biên gần đúng, không phải tổng chi phí 180.

### B32 — 30 canonical public questions

#### THPT-G11-CHIX-B32-C01 · skill_id=`G11-B32-POWER_INTEGER` · placement=`SGK_CORE`

**Đề:** Đạo hàm của $x^6$ là gì?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $6x^5$.

**Giải thích bản chất và cách chọn phương pháp:** Đếm số mũ nguyên dương 6 và giảm số mũ 1.

#### THPT-G11-CHIX-B32-P01 · skill_id=`G11-B32-POWER_INTEGER` · placement=`SGK_PRACTICE`

**Đề:** Với $f(x)=2x^5-5x^3+1$, tính $f'(1)$.

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $10-15=-5$.

**Giải thích bản chất và cách chọn phương pháp:** $f'=10x^4-15x^2$, thay 1.

#### THPT-G11-CHIX-B32-C02 · skill_id=`G11-B32-SQRT_DOMAIN` · placement=`SGK_CORE`

**Đề:** $(\sqrt{x})'$ trên x>0 bằng bao nhiêu?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $1/(2\sqrt{x})$.

**Giải thích bản chất và cách chọn phương pháp:** Dùng liên hợp của $\sqrt{x+h}-\sqrt{x}$; mẫu không triệt tại x>0.

#### THPT-G11-CHIX-B32-P02 · skill_id=`G11-B32-SQRT_DOMAIN` · placement=`SGK_PRACTICE`

**Đề:** $f(x)=5\sqrt{x}$, $f'(4)$?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $5/(2\sqrt4)=5/4$.

**Giải thích bản chất và cách chọn phương pháp:** Miền công thức x>0; kiểm x=4 hợp lệ.

#### THPT-G11-CHIX-B32-C03 · skill_id=`G11-B32-CONSTANT_SUM` · placement=`SGK_CORE`

**Đề:** Đạo hàm của $6-2x+4x^2$?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $-2+8x$.

**Giải thích bản chất và cách chọn phương pháp:** Hằng số 6 biến mất, đạo hàm từng số hạng.

#### THPT-G11-CHIX-B32-P03 · skill_id=`G11-B32-CONSTANT_SUM` · placement=`SGK_PRACTICE`

**Đề:** Cho $u'=3x^2$, $v'=2x$, tính $(5u-2v+7)'$.

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $15x^2-4x$.

**Giải thích bản chất và cách chọn phương pháp:** Dùng tuyến tính và đạo hàm hằng 0.

#### THPT-G11-CHIX-B32-C04 · skill_id=`G11-B32-PRODUCT` · placement=`SGK_CORE`

**Đề:** Đúng/sai: $(uv)'=u'v'$?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** Sai; công thức là $u'v+uv'$.

**Giải thích bản chất và cách chọn phương pháp:** Khi cả hai nhân tử biến đổi, có hai độ biến thiên chính.

#### THPT-G11-CHIX-B32-P04 · skill_id=`G11-B32-PRODUCT` · placement=`SGK_PRACTICE`

**Đề:** Tính đạo hàm $f(x)=x(x^2+4)$.

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $f'=x^2+4+2x^2=3x^2+4$.

**Giải thích bản chất và cách chọn phương pháp:** Một nhân tử là x, nhân tử kia x²+4; lấy đạo hàm tích.

#### THPT-G11-CHIX-B32-C05 · skill_id=`G11-B32-QUOTIENT` · placement=`SGK_CORE`

**Đề:** Quy tắc thương $u/v$ khi v≠0 có tử là?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $u'v-uv'$.

**Giải thích bản chất và cách chọn phương pháp:** Thứ tự phép trừ quan trọng; mẫu là v².

#### THPT-G11-CHIX-B32-P05 · skill_id=`G11-B32-QUOTIENT` · placement=`SGK_PRACTICE`

**Đề:** $f(x)=x/(x+1)$, tính đạo hàm và miền.

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $1/(x+1)^2$ với x≠-1.

**Giải thích bản chất và cách chọn phương pháp:** Tử (x+1)-x=1, mẫu không bằng 0.

#### THPT-G11-CHIX-B32-C06 · skill_id=`G11-B32-COMPOSITION_CHAIN` · placement=`SGK_CORE`

**Đề:** $f(x)=(2x-1)^3$ có đạo hàm?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $6(2x-1)^2$.

**Giải thích bản chất và cách chọn phương pháp:** 3u² nhân u'=2.

#### THPT-G11-CHIX-B32-P06 · skill_id=`G11-B32-COMPOSITION_CHAIN` · placement=`SGK_PRACTICE`

**Đề:** Cho $f(x)=\sqrt{x^2+1}$. Tính f'.

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $x/\sqrt{x^2+1}$ với mọi x thực.

**Giải thích bản chất và cách chọn phương pháp:** Dây chuyền: 1/[2√(x²+1)] nhân 2x.

#### THPT-G11-CHIX-B32-C07 · skill_id=`G11-B32-TRIG_SIN_COS` · placement=`SGK_CORE`

**Đề:** $(\sin x)'$, $(\cos x)'$ bằng gì khi x đo radian?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $\cos x$ và $-\sin x$.

**Giải thích bản chất và cách chọn phương pháp:** Dấu âm chỉ xuất hiện ở đạo hàm cos.

#### THPT-G11-CHIX-B32-P07 · skill_id=`G11-B32-TRIG_SIN_COS` · placement=`SGK_PRACTICE`

**Đề:** $f(x)=2\sin x-3\cos x$. Tìm f'.

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $2\cos x+3\sin x$.

**Giải thích bản chất và cách chọn phương pháp:** Trừ 3 cos x, lấy đạo hàm sẽ cộng 3 sin x.

#### THPT-G11-CHIX-B32-C08 · skill_id=`G11-B32-TRIG_TAN_COT` · placement=`SGK_CORE`

**Đề:** $(\tan x)'$ cần điều kiện nào?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $1/\cos^2x$, chỉ nơi cos x≠0.

**Giải thích bản chất và cách chọn phương pháp:** Tan không có nghĩa khi cos x=0.

#### THPT-G11-CHIX-B32-P08 · skill_id=`G11-B32-TRIG_TAN_COT` · placement=`SGK_PRACTICE`

**Đề:** Với $f(x)=4\cot x$, đạo hàm?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $-4/\sin^2x$ với sin x≠0.

**Giải thích bản chất và cách chọn phương pháp:** Đạo hàm cot âm, rồi nhân 4.

#### THPT-G11-CHIX-B32-C09 · skill_id=`G11-B32-TRIG_CHAIN` · placement=`SGK_CORE`

**Đề:** $(\cos(5x))'$?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $-5\sin(5x)$.

**Giải thích bản chất và cách chọn phương pháp:** Đạo hàm cos bên ngoài rồi nhân đạo hàm 5x.

#### THPT-G11-CHIX-B32-P09 · skill_id=`G11-B32-TRIG_CHAIN` · placement=`SGK_PRACTICE`

**Đề:** $f(x)=\tan(x^2)$, tính f' và miền.

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $2x/\cos^2(x^2)$ khi $\cos(x^2)\ne0$.

**Giải thích bản chất và cách chọn phương pháp:** Tan hợp cần cả chain 2x và miền có nghĩa.

#### THPT-G11-CHIX-B32-C10 · skill_id=`G11-B32-EXP_DERIV` · placement=`SGK_CORE`

**Đề:** $(e^x)'$ là gì?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $e^x$.

**Giải thích bản chất và cách chọn phương pháp:** Hàm mũ cơ số e có tốc độ biến đổi đúng bằng giá trị của nó.

#### THPT-G11-CHIX-B32-P10 · skill_id=`G11-B32-EXP_DERIV` · placement=`SGK_PRACTICE`

**Đề:** $f(x)=5^x$ có đạo hàm?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $5^x\ln5$.

**Giải thích bản chất và cách chọn phương pháp:** Cơ số 5>0, khác 1, nên nhân ln5.

#### THPT-G11-CHIX-B32-C11 · skill_id=`G11-B32-LOG_DERIV` · placement=`SGK_CORE`

**Đề:** $(\ln x)'$ có miền nào?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $1/x$ trên x>0.

**Giải thích bản chất và cách chọn phương pháp:** Chỉ x>0 cho đối số log dương, không lấy ln âm.

#### THPT-G11-CHIX-B32-P11 · skill_id=`G11-B32-LOG_DERIV` · placement=`SGK_PRACTICE`

**Đề:** Đạo hàm $f(x)=\log_4x$?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $1/(x\ln4)$, x>0.

**Giải thích bản chất và cách chọn phương pháp:** Đổi cơ số log₄x=ln x/ln4.

#### THPT-G11-CHIX-B32-C12 · skill_id=`G11-B32-EXP_LOG_CHAIN` · placement=`SGK_CORE`

**Đề:** $f(x)=e^{3x-2}$ có f'?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $3e^{3x-2}$.

**Giải thích bản chất và cách chọn phương pháp:** Đạo hàm hàm trong 3x-2 là 3.

#### THPT-G11-CHIX-B32-P12 · skill_id=`G11-B32-EXP_LOG_CHAIN` · placement=`SGK_PRACTICE`

**Đề:** $f(x)=\ln(x^2+4)$, đạo hàm?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $2x/(x^2+4)$ trên mọi x.

**Giải thích bản chất và cách chọn phương pháp:** Đối số luôn ≥4>0, chain nhân 2x.

#### THPT-G11-CHIX-B32-C13 · skill_id=`G11-B32-DOMAIN_VALIDATION` · placement=`SGK_CORE`

**Đề:** Vì sao $\ln(x-2)$ không xác định khi x≤2?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** Vì đối số x-2 phải >0.

**Giải thích bản chất và cách chọn phương pháp:** Có công thức $f'=(1/(x-2))$ trên x>2, không tại x≤2.

#### THPT-G11-CHIX-B32-P13 · skill_id=`G11-B32-DOMAIN_VALIDATION` · placement=`SGK_PRACTICE`

**Đề:** $f(x)=\sqrt{9-x^2}$ có đạo hàm hữu hạn trên khoảng nào?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $-x/\sqrt{9-x^2}$ với -3<x<3.

**Giải thích bản chất và cách chọn phương pháp:** Căn có nghĩa trên [-3,3] nhưng đạo hàm công thức chỉ trong khoảng mở.

#### THPT-G11-CHIX-B32-C14 · skill_id=`G11-B32-RULE_SELECTION` · placement=`SGK_CORE`

**Đề:** Với $(x^2+1)e^x$, cần quy tắc ngoài nào?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** Tích, sau đó đạo hàm từng thành phần.

**Giải thích bản chất và cách chọn phương pháp:** Tích hai hàm đều phụ thuộc x không lấy đạo hàm từng hàm rồi nhân.

#### THPT-G11-CHIX-B32-P14 · skill_id=`G11-B32-RULE_SELECTION` · placement=`SGK_PRACTICE`

**Đề:** Cho $f(x)=(x+1)^2/(x-1)$. Nêu đúng chuỗi quy tắc.

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** Quy tắc thương ngoài, chain cho tử $(x+1)^2$, x≠1.

**Giải thích bản chất và cách chọn phương pháp:** Nếu đạo hàm: $[2(x+1)(x-1)-(x+1)^2]/(x-1)^2$.

#### THPT-G11-CHIX-B32-C15 · skill_id=`G11-B32-APPLIED_VELOCITY` · placement=`SGK_CORE`

**Đề:** $h(t)=18t-3t^2$ m, vận tốc tức thời sau 1 s?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $h'(1)=18-6=12$ m/s.

**Giải thích bản chất và cách chọn phương pháp:** Vận tốc mang đơn vị m/s; không phải độ cao 15 m.

#### THPT-G11-CHIX-B32-P15 · skill_id=`G11-B32-APPLIED_VELOCITY` · placement=`SGK_PRACTICE`

**Đề:** Với $s(t)=2\sin(3t)$ cm, tìm $v(t)$.

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $v(t)=6\cos(3t)$ cm/s khi t đo giây và đối số góc radian.

**Giải thích bản chất và cách chọn phương pháp:** Chain: hệ số 3 của góc trong và 2 ở ngoài.

### B33 — 10 canonical public questions

#### THPT-G11-CHIX-B33-C01 · skill_id=`G11-B33-SECOND_DEF` · placement=`SGK_CORE`

**Đề:** $f''$ ký hiệu là gì?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** Đạo hàm của hàm đạo hàm: $f''=(f')'$.

**Giải thích bản chất và cách chọn phương pháp:** Không phải bình phương $(f')^2$.

#### THPT-G11-CHIX-B33-P01 · skill_id=`G11-B33-SECOND_DEF` · placement=`SGK_PRACTICE`

**Đề:** $f(x)=x^3$, tìm f' và f''.

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $f'=3x^2$, $f''=6x$.

**Giải thích bản chất và cách chọn phương pháp:** Lần lượt lấy đạo hàm 2 lần.

#### THPT-G11-CHIX-B33-C02 · skill_id=`G11-B33-POLYNOMIAL` · placement=`SGK_CORE`

**Đề:** $f(x)=4x^3-6x$, tính f''(1).

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $f'=12x^2-6$, $f''=24x$, tại 1 được 24.

**Giải thích bản chất và cách chọn phương pháp:** Đạo hàm cấp hai có thể là một hàm mới của x.

#### THPT-G11-CHIX-B33-P02 · skill_id=`G11-B33-POLYNOMIAL` · placement=`SGK_PRACTICE`

**Đề:** $f(x)=x^5+2x^2$, tính f''(0).

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $f''=20x^3+4$, tại 0 được 4.

**Giải thích bản chất và cách chọn phương pháp:** Không thay x=0 vào f' trước khi lấy đạo hàm lần hai.

#### THPT-G11-CHIX-B33-C03 · skill_id=`G11-B33-TRIG_EXP` · placement=`SGK_CORE`

**Đề:** $f(x)=\cos(2x)$, f'' bằng?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $-4\cos(2x)$.

**Giải thích bản chất và cách chọn phương pháp:** cos→-sin→-cos, hệ số 2 xuất hiện mỗi lần.

#### THPT-G11-CHIX-B33-P03 · skill_id=`G11-B33-TRIG_EXP` · placement=`SGK_PRACTICE`

**Đề:** $f(x)=e^{-x}$, f'' bằng?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $e^{-x}$.

**Giải thích bản chất và cách chọn phương pháp:** Lần một -e^{-x}, lần hai +e^{-x}.

#### THPT-G11-CHIX-B33-C04 · skill_id=`G11-B33-ACCELERATION` · placement=`SGK_CORE`

**Đề:** $s(t)=5t^2$ m, gia tốc là?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $s''=10$ m/s².

**Giải thích bản chất và cách chọn phương pháp:** $v=s'=10t$ m/s, gia tốc là đạo hàm của v.

#### THPT-G11-CHIX-B33-P04 · skill_id=`G11-B33-ACCELERATION` · placement=`SGK_PRACTICE`

**Đề:** Cho $s(t)=2t^3-t^2$ m, gia tốc lúc t=2?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $v=6t^2-2t$, $a=12t-2$, $a(2)=22$ m/s².

**Giải thích bản chất và cách chọn phương pháp:** Tăng tốc tức thời theo dấu a cần xem cả vận tốc.

#### THPT-G11-CHIX-B33-C05 · skill_id=`G11-B33-SIGN_INTERPRET` · placement=`SGK_CORE`

**Đề:** Nếu v(t0)<0 và a(t0)<0, tốc độ |v| tại t0 tăng hay giảm?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** Đang tăng cục bộ (nếu v,a liên tục thích hợp).

**Giải thích bản chất và cách chọn phương pháp:** Hai dấu cùng nhau làm độ lớn vận tốc tăng theo chiều âm.

#### THPT-G11-CHIX-B33-P05 · skill_id=`G11-B33-SIGN_INTERPRET` · placement=`SGK_PRACTICE`

**Đề:** Vật v=+4 m/s, a=-2 m/s²; nhận xét tốc độ tức thời?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** Đang giảm tại thời điểm đó.

**Giải thích bản chất và cách chọn phương pháp:** Vận tốc dương và gia tốc âm trái dấu.

### CHIX — 2 canonical public questions

#### THPT-G11-CHIX-CHIX-C01 · skill_id=`G11-CHIX-INTEGRATED` · placement=`SGK_CORE`

**Đề:** Một vật $s(t)=t^3-3t^2$ m. Cần đại lượng nào để biết vận tốc và gia tốc?

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $v=s'=3t^2-6t$ m/s; $a=s''=6t-6$ m/s².

**Giải thích bản chất và cách chọn phương pháp:** Thứ tự: vị trí → đạo hàm một → đạo hàm hai.

#### THPT-G11-CHIX-CHIX-P01 · skill_id=`G11-CHIX-INTEGRATED` · placement=`SGK_PRACTICE`

**Đề:** Cho $f(x)=x^2+2x$. Tại x=1, viết tiếp tuyến và đạo hàm cấp hai.

**Đáp án (chỉ sau khi nộp bài luyện tập formative):** $f(1)=3$, $f'(1)=4$, tiếp tuyến $y-3=4(x-1)$; $f''=2$.

**Giải thích bản chất và cách chọn phương pháp:** Kết hợp ý nghĩa hình học của đạo hàm với đạo hàm lần hai.


---

## PART E — D4 one shared Written/Anchor library, no duplicate Anchor bank

#### THPT-G11-CHIX-B31-W01 · role=`ANCHOR_TAG` · placement=`SGK_WRITTEN` · rubric `/4`

**Đề tự luận:** $f(x)=x^2-2x+3$: (a) lập thương sai phân tại x=2; (b) tính f'(2) theo định nghĩa; (c) lập tiếp tuyến; (d) giải thích hình học.

**Lời giải chuẩn để học sinh tự đối chiếu sau khi hoàn thành:** Thương $[f(2+h)-f(2)]/h=2+h$, $f'(2)=2$, $f(2)=3$, tiếp tuyến $y-3=2(x-2)$, độ dốc 2.

**Rubric 4 điểm — chấm theo chứng cứ lập luận, không chỉ đáp số:**
1. Viết f(2+h) và f(2) đúng — **1 điểm**.
2. Rút gọn thương 2+h, tìm giới hạn 2 — **1 điểm**.
3. Xác định P(2,3), viết phương trình tiếp tuyến — **1 điểm**.
4. Giải thích đạo hàm là độ dốc cát tuyến giới hạn — **1 điểm**.

#### THPT-G11-CHIX-B31-W02 · role=`WRITTEN` · placement=`SGK_WRITTEN` · rubric `/4`

**Đề tự luận:** Cho $g(x)=|x+1|$. Chứng minh g liên tục tại -1 nhưng không có đạo hàm tại -1; giải thích điều kiện hai phía.

**Lời giải chuẩn để học sinh tự đối chiếu sau khi hoàn thành:** $g(-1)=0$ và hai giới hạn g(x)→0; thương tại -1 bằng $|h|/h$, giới hạn trái -1, phải +1; không khả vi.

**Rubric 4 điểm — chấm theo chứng cứ lập luận, không chỉ đáp số:**
1. Khẳng định và chứng minh liên tục — **1 điểm**.
2. Tạo đúng thương sai phân |h|/h — **1 điểm**.
3. Tìm hai giới hạn một bên -1 và +1 — **1 điểm**.
4. Kết luận không đạo hàm dù liên tục — **1 điểm**.

#### THPT-G11-CHIX-B31-W03 · role=`WRITTEN` · placement=`SGK_WRITTEN` · rubric `/4`

**Đề tự luận:** Tọa độ $s(t)=t^3-6t^2+8t$ m, $0\le t\le4$: (a) tính vận tốc; (b) tính v(1), v(3); (c) so sánh dấu/tốc độ; (d) đơn vị.

**Lời giải chuẩn để học sinh tự đối chiếu sau khi hoàn thành:** $v=3t²-12t+8$ m/s, $v(1)=-1$ m/s, $v(3)=-1$ m/s, cùng chuyển theo chiều âm tại hai thời điểm với tốc độ 1 m/s; mô hình t∈[0,4].

**Rubric 4 điểm — chấm theo chứng cứ lập luận, không chỉ đáp số:**
1. Tìm đúng đạo hàm v(t) — **1 điểm**.
2. Tính chính xác v(1)=-1 — **1 điểm**.
3. Tính chính xác v(3)=-1, phân biệt dấu/tốc độ — **1 điểm**.
4. Viết đúng đơn vị và miền thời gian — **1 điểm**.

#### THPT-G11-CHIX-B32-W01 · role=`ANCHOR_TAG` · placement=`SGK_WRITTEN` · rubric `/4`

**Đề tự luận:** Tính đạo hàm $F(x)=(x^2+3)\sin(2x)$. (a) nêu quy tắc ngoài; (b) đạo hàm hàm trong; (c) kết quả; (d) phát hiện lời giải sai chỉ lấy tích hai đạo hàm.

**Lời giải chuẩn để học sinh tự đối chiếu sau khi hoàn thành:** $F'=2x\sin(2x)+2(x²+3)\cos(2x)$. Nếu chỉ nhân đạo hàm từng thừa số thì thiếu hai thành phần biến thiên của hình chữ nhật.

**Rubric 4 điểm — chấm theo chứng cứ lập luận, không chỉ đáp số:**
1. Chọn quy tắc tích ngoài — **1 điểm**.
2. Lấy đạo hàm sin(2x)=2cos(2x) — **1 điểm**.
3. Tính F' gồm đủ hai hạng — **1 điểm**.
4. Giải thích vì sao tích hai đạo hàm là sai — **1 điểm**.

#### THPT-G11-CHIX-B32-W02 · role=`WRITTEN` · placement=`SGK_WRITTEN` · rubric `/4`

**Đề tự luận:** Với $F(x)=\ln(9-x^2)$: (a) tìm miền; (b) tính đạo hàm; (c) tính F'(0); (d) giải thích tại sao không thể dùng công thức tại x=4.

**Lời giải chuẩn để học sinh tự đối chiếu sau khi hoàn thành:** Miền (-3,3); $F'=-2x/(9-x²)$; F'(0)=0; tại x=4 log đối số âm nên hàm gốc vô nghĩa.

**Rubric 4 điểm — chấm theo chứng cứ lập luận, không chỉ đáp số:**
1. Giải 9-x²>0 đúng — **1 điểm**.
2. Dùng chain cho -2x/(9-x²) — **1 điểm**.
3. Tính đạo hàm tại 0 — **1 điểm**.
4. Chỉ rõ tại x=4 hàm không xác định — **1 điểm**.

#### THPT-G11-CHIX-B32-W03 · role=`WRITTEN` · placement=`SGK_WRITTEN` · rubric `/4`

**Đề tự luận:** Hàm $y=(3x+1)/(x^2+1)$: (a) miền; (b) đạo hàm; (c) tính y'(0); (d) giải thích tử của thương.

**Lời giải chuẩn để học sinh tự đối chiếu sau khi hoàn thành:** Miền ℝ; $y'=[3(x²+1)-(3x+1)2x]/(x²+1)^2=(-3x²-2x+3)/(x²+1)^2$; y'(0)=3.

**Rubric 4 điểm — chấm theo chứng cứ lập luận, không chỉ đáp số:**
1. Miền ℝ do x²+1>0 — **1 điểm**.
2. Quy tắc thương đúng tử và mẫu — **1 điểm**.
3. Rút gọn tử -3x²-2x+3 — **1 điểm**.
4. Tính y'(0)=3 và diễn giải quy tắc — **1 điểm**.

#### THPT-G11-CHIX-B33-W01 · role=`ANCHOR_TAG` · placement=`SGK_WRITTEN` · rubric `/4`

**Đề tự luận:** Vật có $s(t)=12t-3t^2$ m với $0\le t\le4$: (a) v(t); (b) a(t); (c) thời điểm v=0; (d) giải thích a âm không buộc luôn chậm dần.

**Lời giải chuẩn để học sinh tự đối chiếu sau khi hoàn thành:** $v=12-6t$ m/s, $a=-6$ m/s², v=0 tại t=2; khi 0<t<2 v>0 và a<0 nên chậm; khi 2<t<4 v<0 và a<0 nên nhanh theo chiều âm.

**Rubric 4 điểm — chấm theo chứng cứ lập luận, không chỉ đáp số:**
1. Tính v=12-6t — **1 điểm**.
2. Tính gia tốc -6 đúng đơn vị — **1 điểm**.
3. Giải v=0 được t=2 — **1 điểm**.
4. Phân tích vận tốc/gia tốc cùng-trái dấu hai phía t=2 — **1 điểm**.

#### THPT-G11-CHIX-B33-W02 · role=`WRITTEN` · placement=`SGK_WRITTEN` · rubric `/4`

**Đề tự luận:** $f(x)=2\sin(3x)+e^x$: (a) f'; (b) f''; (c) f''(0); (d) lưu ý công thức chain.

**Lời giải chuẩn để học sinh tự đối chiếu sau khi hoàn thành:** $f'=6\cos(3x)+e^x$, $f''=-18\sin(3x)+e^x$, f''(0)=1. Hàm trong 3x góp hệ số 3 mỗi lần.

**Rubric 4 điểm — chấm theo chứng cứ lập luận, không chỉ đáp số:**
1. Đạo hàm lần 1 gồm 6cos 3x — **1 điểm**.
2. Đạo hàm lần 2 gồm -18sin 3x — **1 điểm**.
3. Tính f''(0)=1 — **1 điểm**.
4. Giải thích các hệ số chain và dấu âm — **1 điểm**.

#### THPT-G11-CHIX-B33-W03 · role=`WRITTEN` · placement=`SGK_WRITTEN` · rubric `/4`

**Đề tự luận:** Cho vị trí $s(t)=t^3-9t^2+24t$ cm, t giây: (a) v; (b) a; (c) tính tại t=1; (d) nhận xét vận tốc dương hay âm cùng gia tốc.

**Lời giải chuẩn để học sinh tự đối chiếu sau khi hoàn thành:** $v=3t²-18t+24$, $a=6t-18$; v(1)=9 cm/s, a(1)=-12 cm/s², tức đang đi theo chiều dương nhưng chậm dần ở thời điểm đó.

**Rubric 4 điểm — chấm theo chứng cứ lập luận, không chỉ đáp số:**
1. Tính v(t) đúng — **1 điểm**.
2. Tính a(t) đúng — **1 điểm**.
3. v(1)=9, a(1)=-12 đúng đơn vị — **1 điểm**.
4. Dấu ngược nhau => tốc độ giảm cục bộ — **1 điểm**.


---

## PART F — D6 five-step remediation, gated after formative submit only

### HELP-G11-CHIX-B31-01 · skill_id=`G11-B31-LIMIT_QUOTIENT` · return_item=`THPT-G11-CHIX-B31-C02`

1. **Phát hiện lỗi:** Thế h=0 trước khi khử 0/0.
2. **Truy lại bản chất + điều kiện:** Tử f(a+h)-f(a) thường có nhân tử h; rút gọn chỉ với h≠0, sau đó mới lấy giới hạn.
3. **Xem lại vì sao (WHY/HOW):** Mở D1 B31, so sánh mệnh đề định nghĩa với ví dụ D2; giải thích bằng lời trước khi biến đổi ký hiệu.
4. **Tự luyện câu khác có dẫn dắt:** Với f(x)=4x², tại a=2 thương bao nhiêu?. **Tự kiểm sau khi thử:** 16+4h, giới hạn 16.
5. **Trở về câu canonical:** `THPT-G11-CHIX-B31-C02` và giải lại, tự giải thích lí do từng bước; không lấy xem lời giải làm chứng cứ độc lập cho Mastery.

### HELP-G11-CHIX-B31-02 · skill_id=`G11-B31-CORNER_CUSP` · return_item=`THPT-G11-CHIX-B31-P06`

1. **Phát hiện lỗi:** Bỏ qua giới hạn một phía tại góc nhọn.
2. **Truy lại bản chất + điều kiện:** Tính hai thương khi h>0 và h<0; khác nhau thì không khả vi.
3. **Xem lại vì sao (WHY/HOW):** Mở D1 B31, so sánh mệnh đề định nghĩa với ví dụ D2; giải thích bằng lời trước khi biến đổi ký hiệu.
4. **Tự luyện câu khác có dẫn dắt:** Xét |x-5| tại x=5, độ dốc một bên?. **Tự kiểm sau khi thử:** Trái -1, phải +1.
5. **Trở về câu canonical:** `THPT-G11-CHIX-B31-P06` và giải lại, tự giải thích lí do từng bước; không lấy xem lời giải làm chứng cứ độc lập cho Mastery.

### HELP-G11-CHIX-B31-03 · skill_id=`G11-B31-TANGENT_EQUATION` · return_item=`THPT-G11-CHIX-B31-C08`

1. **Phát hiện lỗi:** Nhầm tung độ với hệ số góc.
2. **Truy lại bản chất + điều kiện:** Điểm tiếp xúc (a,f(a)) và độ dốc f'(a) là hai thông tin khác nhau.
3. **Xem lại vì sao (WHY/HOW):** Mở D1 B31, so sánh mệnh đề định nghĩa với ví dụ D2; giải thích bằng lời trước khi biến đổi ký hiệu.
4. **Tự luyện câu khác có dẫn dắt:** Nếu f(3)=7 và f'(3)=4, tiếp tuyến?. **Tự kiểm sau khi thử:** y-7=4(x-3).
5. **Trở về câu canonical:** `THPT-G11-CHIX-B31-C08` và giải lại, tự giải thích lí do từng bước; không lấy xem lời giải làm chứng cứ độc lập cho Mastery.

### HELP-G11-CHIX-B32-01 · skill_id=`G11-B32-PRODUCT` · return_item=`THPT-G11-CHIX-B32-P04`

1. **Phát hiện lỗi:** Lấy u'v' thay cho u'v+uv'.
2. **Truy lại bản chất + điều kiện:** Tích hai hàm tăng/giảm tạo hai phần biến thiên tương ứng.
3. **Xem lại vì sao (WHY/HOW):** Mở D1 B32, so sánh mệnh đề định nghĩa với ví dụ D2; giải thích bằng lời trước khi biến đổi ký hiệu.
4. **Tự luyện câu khác có dẫn dắt:** Tính (x·x³)' theo hai cách. **Tự kiểm sau khi thử:** x³+3x³=4x³.
5. **Trở về câu canonical:** `THPT-G11-CHIX-B32-P04` và giải lại, tự giải thích lí do từng bước; không lấy xem lời giải làm chứng cứ độc lập cho Mastery.

### HELP-G11-CHIX-B32-02 · skill_id=`G11-B32-COMPOSITION_CHAIN` · return_item=`THPT-G11-CHIX-B32-P06`

1. **Phát hiện lỗi:** Quên đạo hàm hàm trong.
2. **Truy lại bản chất + điều kiện:** Xác định lớp ngoài u^n và lớp trong u(x); viết u' rồi nhân.
3. **Xem lại vì sao (WHY/HOW):** Mở D1 B32, so sánh mệnh đề định nghĩa với ví dụ D2; giải thích bằng lời trước khi biến đổi ký hiệu.
4. **Tự luyện câu khác có dẫn dắt:** Tính [(5x+1)³]'. **Tự kiểm sau khi thử:** 15(5x+1)².
5. **Trở về câu canonical:** `THPT-G11-CHIX-B32-P06` và giải lại, tự giải thích lí do từng bước; không lấy xem lời giải làm chứng cứ độc lập cho Mastery.

### HELP-G11-CHIX-B32-03 · skill_id=`G11-B32-DOMAIN_VALIDATION` · return_item=`THPT-G11-CHIX-B32-P13`

1. **Phát hiện lỗi:** Dùng đạo hàm của log/căn ở điểm hàm không tồn tại.
2. **Truy lại bản chất + điều kiện:** ĐKXĐ của hàm gốc phải kiểm trước khi đạo hàm, đặc biệt ln u cần u>0.
3. **Xem lại vì sao (WHY/HOW):** Mở D1 B32, so sánh mệnh đề định nghĩa với ví dụ D2; giải thích bằng lời trước khi biến đổi ký hiệu.
4. **Tự luyện câu khác có dẫn dắt:** ln(x-4) có nghĩa ở x=1?. **Tự kiểm sau khi thử:** Không, chỉ x>4.
5. **Trở về câu canonical:** `THPT-G11-CHIX-B32-P13` và giải lại, tự giải thích lí do từng bước; không lấy xem lời giải làm chứng cứ độc lập cho Mastery.

### HELP-G11-CHIX-B32-04 · skill_id=`G11-B32-TRIG_CHAIN` · return_item=`THPT-G11-CHIX-B32-P09`

1. **Phát hiện lỗi:** Bỏ dấu trừ cos hoặc cot.
2. **Truy lại bản chất + điều kiện:** Nhớ cos'=-sin, cot'=-1/sin², rồi nhân u'.
3. **Xem lại vì sao (WHY/HOW):** Mở D1 B32, so sánh mệnh đề định nghĩa với ví dụ D2; giải thích bằng lời trước khi biến đổi ký hiệu.
4. **Tự luyện câu khác có dẫn dắt:** Tính [cos(2x)]'. **Tự kiểm sau khi thử:** -2sin(2x).
5. **Trở về câu canonical:** `THPT-G11-CHIX-B32-P09` và giải lại, tự giải thích lí do từng bước; không lấy xem lời giải làm chứng cứ độc lập cho Mastery.

### HELP-G11-CHIX-B32-05 · skill_id=`G11-B32-QUOTIENT` · return_item=`THPT-G11-CHIX-B32-P05`

1. **Phát hiện lỗi:** Đổi nhầm thứ tự tử quy tắc thương.
2. **Truy lại bản chất + điều kiện:** (u/v)'=(u'v-uv')/v², v≠0; giữ ngoặc.
3. **Xem lại vì sao (WHY/HOW):** Mở D1 B32, so sánh mệnh đề định nghĩa với ví dụ D2; giải thích bằng lời trước khi biến đổi ký hiệu.
4. **Tự luyện câu khác có dẫn dắt:** Tính [x/(x+3)]'. **Tự kiểm sau khi thử:** 3/(x+3)², x≠-3.
5. **Trở về câu canonical:** `THPT-G11-CHIX-B32-P05` và giải lại, tự giải thích lí do từng bước; không lấy xem lời giải làm chứng cứ độc lập cho Mastery.

### HELP-G11-CHIX-B33-01 · skill_id=`G11-B33-SECOND_DEF` · return_item=`THPT-G11-CHIX-B33-C01`

1. **Phát hiện lỗi:** Nhầm f'' với (f')².
2. **Truy lại bản chất + điều kiện:** Đạo hàm cấp hai là đạo hàm tiếp của hàm f', không phải bình phương.
3. **Xem lại vì sao (WHY/HOW):** Mở D1 B33, so sánh mệnh đề định nghĩa với ví dụ D2; giải thích bằng lời trước khi biến đổi ký hiệu.
4. **Tự luyện câu khác có dẫn dắt:** Với f=x², tính f'' và (f')². **Tự kiểm sau khi thử:** f''=2; (f')²=4x².
5. **Trở về câu canonical:** `THPT-G11-CHIX-B33-C01` và giải lại, tự giải thích lí do từng bước; không lấy xem lời giải làm chứng cứ độc lập cho Mastery.

### HELP-G11-CHIX-B33-02 · skill_id=`G11-B33-SIGN_INTERPRET` · return_item=`THPT-G11-CHIX-B33-P05`

1. **Phát hiện lỗi:** Cứ gia tốc âm là chậm dần.
2. **Truy lại bản chất + điều kiện:** Cần xét dấu v và a cùng lúc, tốc độ là |v|.
3. **Xem lại vì sao (WHY/HOW):** Mở D1 B33, so sánh mệnh đề định nghĩa với ví dụ D2; giải thích bằng lời trước khi biến đổi ký hiệu.
4. **Tự luyện câu khác có dẫn dắt:** Với v=-2,a=-1, nhanh hay chậm?. **Tự kiểm sau khi thử:** Nhanh dần theo chiều âm.
5. **Trở về câu canonical:** `THPT-G11-CHIX-B33-P05` và giải lại, tự giải thích lí do từng bước; không lấy xem lời giải làm chứng cứ độc lập cho Mastery.

### HELP-G11-CHIX-B33-03 · skill_id=`G11-B33-ACCELERATION` · return_item=`THPT-G11-CHIX-B33-P04`

1. **Phát hiện lỗi:** Nhầm đơn vị v và a hoặc áp mô hình sai thời gian.
2. **Truy lại bản chất + điều kiện:** s m; t s ⇒ v m/s, a m/s²; luôn kiểm miền thời gian mô hình.
3. **Xem lại vì sao (WHY/HOW):** Mở D1 B33, so sánh mệnh đề định nghĩa với ví dụ D2; giải thích bằng lời trước khi biến đổi ký hiệu.
4. **Tự luyện câu khác có dẫn dắt:** s(t)=6t-2t² m, t∈[0,3]; gia tốc?. **Tự kiểm sau khi thử:** -4 m/s² trên khoảng mô hình.
5. **Trở về câu canonical:** `THPT-G11-CHIX-B33-P04` và giải lại, tự giải thích lí do từng bước; không lấy xem lời giải làm chứng cứ độc lập cho Mastery.


---

## PART G — D5 pedagogical SVG XML full source (embedded; no separate review file required)

### FIG-G11-CHIX-B31-01 · SVG nguồn gốc

**Cách học từ hình:** Điểm Q tiến sát P trên đồ thị x² cho thấy độ dốc cát tuyến 2+h tiến về độ dốc tiếp tuyến 2.

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="860" height="460" viewBox="0 0 860 460" role="img" aria-labelledby="title desc"><title id="title">Dao ham: cat tuyen tien den tiep tuyen</title><desc id="desc">Ham y=x^2; P(1,1), Q(1.8,3.24) co he so cat tuyen 2.8, khi Q tien P do doc tien den 2, tiep tuyen y=2x-1.</desc><rect width="860" height="460" rx="20" fill="#fafcff"/><text x="430" y="36" font-size="21" font-family="Arial" fill="#1f2937" text-anchor="middle" font-weight="bold">Dao ham: cat tuyen tien den tiep tuyen</text><line x1="75" y1="340" x2="780" y2="340" stroke="#475569" stroke-width="2"/><line x1="320" y1="404" x2="320" y2="58" stroke="#475569" stroke-width="2"/><text x="792" y="350" font-size="17">x</text><text x="300" y="62" font-size="17">y</text><polyline points="130.0,177.6 133.5,183.4 136.9,189.2 140.4,194.8 143.8,200.4 147.3,205.8 150.8,211.1 154.2,216.3 157.7,221.5 161.2,226.5 164.6,231.4 168.1,236.1 171.5,240.8 175.0,245.4 178.5,249.9 181.9,254.2 185.4,258.5 188.8,262.6 192.3,266.6 195.8,270.6 199.2,274.4 202.7,278.1 206.2,281.7 209.6,285.2 213.1,288.6 216.5,291.8 220.0,295.0 223.5,298.1 226.9,301.0 230.4,303.9 233.8,306.6 237.3,309.2 240.8,311.8 244.2,314.2 247.7,316.5 251.2,318.7 254.6,320.8 258.1,322.7 261.5,324.6 265.0,326.4 268.5,328.0 271.9,329.6 275.4,331.0 278.8,332.4 282.3,333.6 285.8,334.7 289.2,335.7 292.7,336.6 296.2,337.4 299.6,338.1 303.1,338.7 306.5,339.2 310.0,339.6 313.5,339.8 316.9,340.0 320.4,340.0 323.8,339.9 327.3,339.8 330.8,339.5 334.2,339.1 337.7,338.6 341.2,338.0 344.6,337.3 348.1,336.5 351.5,335.5 355.0,334.5 358.5,333.3 361.9,332.1 365.4,330.7 368.8,329.3 372.3,327.7 375.8,326.0 379.2,324.2 382.7,322.3 386.2,320.3 389.6,318.2 393.1,316.0 396.5,313.6 400.0,311.2 403.5,308.7 406.9,306.0 410.4,303.2 413.8,300.4 417.3,297.4 420.8,294.3 424.2,291.1 427.7,287.8 431.2,284.4 434.6,280.9 438.1,277.3 441.5,273.5 445.0,269.7 448.5,265.7 451.9,261.7 455.4,257.5 458.8,253.2 462.3,248.9 465.8,244.4 469.2,239.8 472.7,235.1 476.2,230.3 479.6,225.4 483.1,220.3 486.5,215.2 490.0,209.9 493.5,204.6 496.9,199.1 500.4,193.6 503.8,187.9 507.3,182.1 510.8,176.2 514.2,170.2 517.7,164.1 521.2,157.9 524.6,151.6 528.1,145.2 531.5,138.6 535.0,132.0 538.5,125.2 541.9,118.4 545.4,111.4 548.8,104.3 552.3,97.1 555.8,89.9 559.2,82.5 562.7,75.0 566.2,67.3 569.6,59.6 573.1,51.8 576.5,43.8 580.0,35.8" stroke="#2563eb" stroke-width="3.5" fill="none"/><line x1="350" y1="383.2" x2="550" y2="131.2" stroke="#d97706" stroke-width="3"/><line x1="370" y1="340" x2="570" y2="160" stroke="#059669" stroke-width="3" stroke-dasharray="9 6"/><circle cx="420" cy="295" r="6" fill="#1d4ed8"/><circle cx="500" cy="194.2" r="6" fill="#d97706"/><text x="430" y="287" font-size="15">P(1,1)</text><text x="509" y="191" font-size="15">Q(1.8,3.24)</text><text x="86" y="89" font-size="16" fill="#2563eb">y = x^2</text><text x="86" y="115" font-size="15" fill="#d97706">Cat tuyen: he so 2 + h</text><text x="86" y="140" font-size="15" fill="#059669">Tiep tuyen: y = 2x - 1</text><text x="430" y="441" font-size="13" font-family="Arial" fill="#475569" text-anchor="middle">Minh hoa dung y nghia: doc toa do va dieu kien ben canh hinh.</text></svg>
```

### FIG-G11-CHIX-B31-02 · SVG nguồn gốc

**Cách học từ hình:** Hàm |x| nối liền tại góc nhưng độ dốc trái/phải không nhất quán.

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="860" height="460" viewBox="0 0 860 460" role="img" aria-labelledby="title desc"><title id="title">Goc nhon: lien tuc chua du de co dao ham</title><desc id="desc">Do thi y=|x| qua goc O: do doc ben trai -1 va ben phai +1, nen gioi han hai phia khong ton tai.</desc><rect width="860" height="460" rx="20" fill="#fafcff"/><text x="430" y="36" font-size="21" font-family="Arial" fill="#1f2937" text-anchor="middle" font-weight="bold">Goc nhon: lien tuc chua du de co dao ham</text><line x1="80" y1="340" x2="760" y2="340" stroke="#475569" stroke-width="2"/><line x1="420" y1="401" x2="420" y2="70" stroke="#475569" stroke-width="2"/><polyline points="150,70 420,340 690,70" fill="none" stroke="#dc2626" stroke-width="4"/><circle cx="420" cy="340" r="6" fill="#b91c1c"/><text x="438" y="358" font-size="17">O(0,0)</text><text x="90" y="115" font-size="17">x &lt; 0: do doc -1</text><text x="535" y="115" font-size="17">x &gt; 0: do doc +1</text><text x="280" y="397" font-size="16">Hai gioi han khac nhau: f'(0) khong ton tai</text><text x="430" y="441" font-size="13" font-family="Arial" fill="#475569" text-anchor="middle">Minh hoa dung y nghia: doc toa do va dieu kien ben canh hinh.</text></svg>
```

### FIG-G11-CHIX-B32-01 · SVG nguồn gốc

**Cách học từ hình:** Hai dải diện tích thay đổi gợi quy tắc tích có hai hạng; góc nhỏ bậc hai biến mất khi lấy giới hạn.

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="860" height="460" viewBox="0 0 860 460" role="img" aria-labelledby="title desc"><title id="title">Quy tac tich: hai dai dien tich moi</title><desc id="desc">Hinh chu nhat co dien tich uv. Neu u tang du va v tang dv, hai dai bo sung v*du, u*dv; goc du*dv nho hon bac mot.</desc><rect width="860" height="460" rx="20" fill="#fafcff"/><text x="430" y="36" font-size="21" font-family="Arial" fill="#1f2937" text-anchor="middle" font-weight="bold">Quy tac tich: hai dai dien tich moi</text><rect x="190" y="110" width="265" height="205" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/><rect x="455" y="110" width="75" height="205" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/><rect x="190" y="62" width="265" height="48" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/><rect x="455" y="62" width="75" height="48" fill="#fbcfe8" stroke="#9d174d" stroke-width="2"/><text x="320" y="205" font-size="24">u * v</text><text x="459" y="225" font-size="14">v*du</text><text x="282" y="93" font-size="17">u*dv</text><text x="462" y="92" font-size="13">du*dv</text><text x="299" y="345" font-size="17">u</text><text x="468" y="345" font-size="14">du</text><text x="158" y="215" font-size="17">v</text><text x="136" y="91" font-size="15">dv</text><text x="590" y="160" font-size="18">(uv)'</text><text x="580" y="195" font-size="18">= u'v + uv'</text><text x="575" y="235" font-size="14">Goc du*dv la bac hai</text><text x="430" y="441" font-size="13" font-family="Arial" fill="#475569" text-anchor="middle">Minh hoa dung y nghia: doc toa do va dieu kien ben canh hinh.</text></svg>
```

### FIG-G11-CHIX-B32-02 · SVG nguồn gốc

**Cách học từ hình:** Dòng đầu vào x→u→y trực quan tại sao đạo hàm hàm hợp cần nhân đạo hàm lớp trong.

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="860" height="460" viewBox="0 0 860 460" role="img" aria-labelledby="title desc"><title id="title">Ham hop: bien doi theo hai tang</title><desc id="desc">x di qua ham trong u=g(x), sau do qua ham ngoai y=f(u). Toc do y theo x bang toc do y theo u nhan toc do u theo x.</desc><rect width="860" height="460" rx="20" fill="#fafcff"/><text x="430" y="36" font-size="21" font-family="Arial" fill="#1f2937" text-anchor="middle" font-weight="bold">Ham hop: bien doi theo hai tang</text><rect x="60" y="150" width="180" height="96" fill="#dbeafe" stroke="#2563eb" stroke-width="2" rx="12"/><text x="150" y="197" text-anchor="middle" font-size="24">x</text><rect x="350" y="150" width="175" height="96" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><text x="437" y="192" text-anchor="middle" font-size="20">u=g(x)</text><rect x="630" y="150" width="178" height="96" rx="12" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/><text x="718" y="192" text-anchor="middle" font-size="20">y=f(u)</text><path d="M240 200 H347 M335 192 L347 200 L335 208" stroke="#475569" stroke-width="3" fill="none"/><path d="M525 200 H627 M615 192 L627 200 L615 208" stroke="#475569" stroke-width="3" fill="none"/><text x="285" y="157" font-size="18">g'(x)</text><text x="556" y="157" font-size="18">f'(u)</text><text x="430" y="324" font-size="20" text-anchor="middle">y' = f'(g(x)) * g'(x)</text><text x="430" y="355" font-size="16" text-anchor="middle">Lop ngoai nhan lop trong; khong bo dao ham u</text><text x="430" y="441" font-size="13" font-family="Arial" fill="#475569" text-anchor="middle">Minh hoa dung y nghia: doc toa do va dieu kien ben canh hinh.</text></svg>
```

### FIG-G11-CHIX-B33-01 · SVG nguồn gốc

**Cách học từ hình:** Vị trí→vận tốc→gia tốc; hai hệ trục riêng, phải đọc trục/đơn vị trước khi kết luận dấu.

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="860" height="460" viewBox="0 0 860 460" role="img" aria-labelledby="title desc"><title id="title">Van toc la dao ham cua vi tri; gia toc la dao ham van toc</title><desc id="desc">Vi du s(t)=t^3-3t^2+2t; v=3t^2-6t+2 va a=6t-6. Do thi v va a ve trong hai vung doc lap, khong so sanh do cao tuyet doi giua hai truc.</desc><rect width="860" height="460" rx="20" fill="#fafcff"/><text x="430" y="36" font-size="21" font-family="Arial" fill="#1f2937" text-anchor="middle" font-weight="bold">Van toc la dao ham cua vi tri; gia toc la dao ham van toc</text><rect x="48" y="65" width="365" height="338" rx="12" fill="#eff6ff"/><rect x="447" y="65" width="365" height="338" rx="12" fill="#f0fdf4"/><line x1="73" y1="315" x2="393" y2="315" stroke="#64748b" stroke-width="2"/><line x1="93" y1="375" x2="93" y2="96" stroke="#64748b" stroke-width="2"/><line x1="470" y1="270" x2="792" y2="270" stroke="#64748b" stroke-width="2"/><line x1="510" y1="374" x2="510" y2="97" stroke="#64748b" stroke-width="2"/><path d="M93 235 Q228 475 363 235" stroke="#2563eb" stroke-width="4" fill="none"/><path d="M510 372 L770 168" stroke="#16a34a" stroke-width="4"/><text x="145" y="108" font-size="17" fill="#1e40af">v(t) = 3t^2 - 6t + 2</text><text x="542" y="108" font-size="18" fill="#166534">a(t) = 6t - 6</text><text x="168" y="390" font-size="15">van toc: m/s</text><text x="553" y="390" font-size="15">gia toc: m/s^2</text><text x="430" y="441" font-size="13" font-family="Arial" fill="#475569" text-anchor="middle">Minh hoa dung y nghia: doc toa do va dieu kien ben canh hinh.</text></svg>
```


---

## PART H — NotebookLM critical review checklist (do not grant PASS from author assertions)

1. Verify S1 original SGK/SBT KNTT Tập 2 exact print pages and limits of CORE, all B31–33; advanced maximum/minimum and application examples must remain within S1 (no mandatory calculus beyond SGK).
2. Critically verify **31/31 RD0 outcomes**, 32 D2 complete explanations, 62 public D3 questions (with keys and reasoning), 9 D4 Written rubrics (/4), 5 D5 figures XML/math/teaching utility, 11 D6 HELP return references, and separate 31 PRIVATE RD1 questions with keys/rubrics; return verdict per lesson, outcome and item.
3. Core semantics: two-sided finite limit vs one-sided/undefined derivative; differentiability⇒continuity not converse; tangent point vs slope, instantaneous velocity vs speed; full B32 product/quotient/chain/trig/exp/log & domain, B33 second derivative/acceleration and signs. If a term or condition is missing, give exact ID and student-impact severity.
4. PED1–PED6 independently: genuine WHY→WHAT→HOW, not memorized rules; SVG must be **mathematically truthful** and teachable; check explanation before practice; do not cite a PRIVATE RD1 task as if it had been publicly taught. Verify structural diversity and potential SBT/review leakage (not merely lexical equality).
5. Return `SOURCE_RECEIPT`, `OUTCOME_MATRIX_31`, `PUBLIC_ITEMS_71`, `PRIVATE_RD1_31`, `D2_32`, `SVG_5`, `HELP_11`, `EXPOSURE_STRUCTURAL_VERDICT`, per-item findings, P0/P1/P2, MINIMAL_DELTA, and **two separate** `ACADEMIC_CHAPTER_IX=PASS/FIX/BLOCK` and `PEDAGOGICAL_SELF_LEARNING_READY=PASS/FIX/BLOCK`. `EXPOSURE_SYSTEM_VERDICT=SYSTEM_HOLD`, `RELEASE_AUTHORIZATION=NO`, `MASTERY_ACTIVATION=NO`, do not presume a functioning scorer.