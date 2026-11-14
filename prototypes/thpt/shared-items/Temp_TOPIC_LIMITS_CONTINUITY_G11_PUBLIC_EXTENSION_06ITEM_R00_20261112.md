# Six original PUBLIC canonical additions — Giới hạn & Liên tục G11

**DELTA_C NEW_AUTHORING_PUBLIC R00:** six new practice items to close exactly four one-item outcomes and one zero-item integrated outcome (two distinct applications). Not held-out. New mathematical solutions and manual rubric are canonical **only here**; any placement references ID and this Git blob. Historic SGK 36 items never modified. This is not a new independent NotebookLM PASS or official TOPIC_READINESS.

STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.0.1
PUBLIC_CANONICAL_COUNT: 6
PRIVATE_RD1_IMPORTED: 0
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY

## ITEM_OUTCOME_MATRIX

| item_id | outcome_id | role | version |
|---|---|---|---|
| `THPT-G11-TOPLIM-ADD01` | `G11-B15-GEOMETRIC` | TOPIC_PRACTICE | 1 |
| `THPT-G11-TOPLIM-ADD02` | `G11-B16-REAL_CONTEXT` | TOPIC_PRACTICE | 1 |
| `THPT-G11-TOPLIM-ADD03` | `G11-B17-ELEMENTARY_CONTINUITY` | TOPIC_PRACTICE | 1 |
| `THPT-G11-TOPLIM-ADD04` | `G11-B17-CONTINUITY_OPERATIONS` | TOPIC_PRACTICE | 1 |
| `THPT-G11-TOPLIM-ADD05` | `G11-CHV-INTEGRATED` | TOPIC_PRACTICE | 1 |
| `THPT-G11-TOPLIM-ADD06` | `G11-CHV-INTEGRATED` | TOPIC_PRACTICE | 1 |

## Six original new public practice problems

### THPT-G11-TOPLIM-ADD01

**Outcome:** `G11-B15-GEOMETRIC`. **Nhiệm vụ:** Giới hạn tổng cấp số nhân lùi.

**Đề (student visible):** Xét tổng hữu hạn S_n=12−6+3−3/2+… gồm n số hạng, tức cấp số nhân có u₁=12 và q=−1/2. Tính lim(n→∞) S_n. Giải thích vì sao tổng vô hạn tồn tại dù các số hạng luân phiên đổi dấu.

**Đáp án canonical (only after practice check):** 8

**Lời giải có lập luận:** S_n=12[1−(−1/2)^n]/[1−(−1/2)]=8[1−(−1/2)^n]. Vì |q|=1/2<1 nên (−1/2)^n→0, do đó S_n→8. Luân phiên dấu không ngăn hội tụ khi độ lớn từng số hạng giảm theo cấp số nhân với |q|<1.

**D6 remediate (after check):** Nhầm dấu q thì viết bốn số đầu 12,−6,3,−3/2; nhầm giới hạn q^n thì xét |q|<1; không kết luận mọi chuỗi đan dấu đều hội tụ.

**Rubric tự đối chiếu/4, không chấm Mastery:** 1 điểm điều kiện/miền xác định hoặc mô hình; 1 điểm phương pháp/bước chính; 1 điểm số học/giới hạn; 1 điểm lập luận về giới hạn, liên tục hoặc giới hạn áp dụng.

### THPT-G11-TOPLIM-ADD02

**Outcome:** `G11-B16-REAL_CONTEXT`. **Nhiệm vụ:** Giới hạn trong dữ liệu đo.

**Đề (student visible):** Một mô hình phép đo cho giá trị R(t)=(t²−9)/(t−3) với t≠3 (t tính bằng giây). Hỏi khi t tiến gần 3, giá trị dự đoán R(t) tiến gần bao nhiêu? Có thể kết luận R(3) được xác định không? Nêu ý nghĩa sự phân biệt.

**Đáp án canonical (only after practice check):** lim(t→3)R(t)=6; R(3) không xác định theo công thức đã cho.

**Lời giải có lập luận:** Với t≠3, (t²−9)/(t−3)=(t−3)(t+3)/(t−3)=t+3. Giới hạn khi t→3 là 6. Tuy nhiên t=3 nằm ngoài miền của công thức phân thức gốc nên chưa có R(3); giới hạn là xu thế gần thời điểm chứ không tự điền dữ liệu tại thời điểm đó. Đây là một mô hình toán, không phải kết quả đo thực tế.

**D6 remediate (after check):** Đừng thay trực tiếp t=3 vào 0/0. Phân tích nhân tử trước; tách câu hỏi về xu thế gần 3 khỏi giá trị đúng ở 3.

**Rubric tự đối chiếu/4, không chấm Mastery:** 1 điểm điều kiện/miền xác định hoặc mô hình; 1 điểm phương pháp/bước chính; 1 điểm số học/giới hạn; 1 điểm lập luận về giới hạn, liên tục hoặc giới hạn áp dụng.

### THPT-G11-TOPLIM-ADD03

**Outcome:** `G11-B17-ELEMENTARY_CONTINUITY`. **Nhiệm vụ:** Miền xác định và tính liên tục căn thức.

**Đề (student visible):** Cho f(x)=√(2x+1). (a) Tìm miền xác định. (b) Kiểm tra liên tục tại x=4, nêu đủ giá trị f(4) và lim(x→4)f(x). (c) Có hợp lệ hỏi f(−1) theo công thức này không?

**Đáp án canonical (only after practice check):** D=[−1/2,+∞); f(4)=lim(x→4)f(x)=3; không có f(−1).

**Lời giải có lập luận:** Điều kiện dưới căn 2x+1≥0 cho x≥−1/2. Tại 4 là điểm trong miền, biểu thức 2x+1→9>0, căn bậc hai liên tục nên lim√(2x+1)=√9=3=f(4). x=−1 ở ngoài miền; không nói liên tục tại điểm không thuộc miền xác định.

**D6 remediate (after check):** Nếu nhầm căn thức xác định với mọi x, viết điều kiện radicand≥0. Nếu chỉ kiểm giới hạn mà bỏ f(4), nhắc ba yếu tố liên tục.

**Rubric tự đối chiếu/4, không chấm Mastery:** 1 điểm điều kiện/miền xác định hoặc mô hình; 1 điểm phương pháp/bước chính; 1 điểm số học/giới hạn; 1 điểm lập luận về giới hạn, liên tục hoặc giới hạn áp dụng.

### THPT-G11-TOPLIM-ADD04

**Outcome:** `G11-B17-CONTINUITY_OPERATIONS`. **Nhiệm vụ:** Quy tắc thương và điểm loại trừ.

**Đề (student visible):** Cho h(x)=√(x+4)/(x−1). Tìm miền xác định. Chứng minh h liên tục tại x=5 và tính h(5). Vì sao không được kết luận h liên tục tại x=1 chỉ do tử số là căn thức liên tục?

**Đáp án canonical (only after practice check):** D=[−4,+∞)\{1}; h liên tục tại x=5 và h(5)=3/4; x=1 bị loại do mẫu 0.

**Lời giải có lập luận:** Căn thức cần x+4≥0, mẫu x−1≠0 ⇒ D=[−4,+∞)\{1}. Tại x=5, tử √(x+4) liên tục và mẫu x−1 liên tục, khác 0 (bằng 4); quy tắc thương suy h liên tục. h(5)=√9/4=3/4. Tại x=1, h không có giá trị; tính liên tục của tử không chữa được mẫu bằng 0.

**D6 remediate (after check):** Lập hai điều kiện miền xác định trước khi dùng định lý thương. Không bỏ chữ 'mẫu khác 0'.

**Rubric tự đối chiếu/4, không chấm Mastery:** 1 điểm điều kiện/miền xác định hoặc mô hình; 1 điểm phương pháp/bước chính; 1 điểm số học/giới hạn; 1 điểm lập luận về giới hạn, liên tục hoặc giới hạn áp dụng.

### THPT-G11-TOPLIM-ADD05

**Outcome:** `G11-CHV-INTEGRATED`. **Nhiệm vụ:** Liên hệ giới hạn dãy, hàm và liên tục.

**Đề (student visible):** Cho u_n=2+1/n với n≥1 và F(x)=(x²−4)/(x−2) khi x≠2, F(2)=c. (a) Tính lim u_n. (b) Tính lim(x→2) F(x) và lim(n→∞)F(u_n). (c) Chọn c để F liên tục tại 2.

**Đáp án canonical (only after practice check):** lim u_n=2; lim(x→2)F(x)=4; lim F(u_n)=4; c=4.

**Lời giải có lập luận:** u_n=2+1/n→2, luôn khác 2 với n hữu hạn. Với x≠2, F(x)=x+2 nên lim(x→2) F(x)=4. Thay x=u_n cho F(u_n)=u_n+2=4+1/n→4. Muốn liên tục tại 2, cần F(2)=c bằng giới hạn 4; chọn c=4. Phân biệt xu thế với giá trị ngay tại điểm bị khuyết.

**D6 remediate (after check):** Không tự thay x=2 vào phân thức gốc; rút nhân tử dưới điều kiện x≠2. Kiểm u_n≠2 với mọi n và c là giá trị tại điểm, không phải lim.

**Rubric tự đối chiếu/4, không chấm Mastery:** 1 điểm điều kiện/miền xác định hoặc mô hình; 1 điểm phương pháp/bước chính; 1 điểm số học/giới hạn; 1 điểm lập luận về giới hạn, liên tục hoặc giới hạn áp dụng.

### THPT-G11-TOPLIM-ADD06

**Outcome:** `G11-CHV-INTEGRATED`. **Nhiệm vụ:** Kiểm liên tục qua hai dãy tiến hai phía.

**Đề (student visible):** Cho f(x)=2x+1 nếu x<1, và f(x)=x²+k nếu x≥1. (a) Dùng x_n=1−1/n và y_n=1+1/n (n≥2) tính giới hạn f(x_n),f(y_n). (b) Tìm k để f liên tục tại x=1. (c) Giải thích tại sao chỉ một giới hạn phía chưa đủ.

**Đáp án canonical (only after practice check):** lim f(x_n)=3; lim f(y_n)=1+k; liên tục tại 1 khi k=2.

**Lời giải có lập luận:** Với x_n<1, f(x_n)=2(1−1/n)+1=3−2/n→3. Với y_n>1, f(y_n)=(1+1/n)²+k=1+k+2/n+1/n²→1+k. Giới hạn trái là 3, phải là 1+k; bằng nhau iff k=2. Giá trị f(1)=1+k vì dùng nhánh x≥1, bằng 3 khi k=2; suy liên tục. Một phía không thể bảo đảm giới hạn hai phía.

**D6 remediate (after check):** Nếu dùng nhánh x<1 tại điểm 1, đánh dấu dấu bất đẳng thức gồm bằng; nếu bỏ giới hạn bên phải, thử k=0 để thấy hai phía lệch.

**Rubric tự đối chiếu/4, không chấm Mastery:** 1 điểm điều kiện/miền xác định hoặc mô hình; 1 điểm phương pháp/bước chính; 1 điểm số học/giới hạn; 1 điểm lập luận về giới hạn, liên tục hoặc giới hạn áp dụng.

## Q16 boundary

- These are six publicly seen exercises only. Do not import 17 owner-held Chapter V RD1 questions, answer keys or rubrics; the public Practice bank is not an independent Topic Readiness exam.
- No hint/key/correctness/AI Tutor before official Final Submit in any later RELEASE evaluation. Voluntary practice reveal is not Mastery.