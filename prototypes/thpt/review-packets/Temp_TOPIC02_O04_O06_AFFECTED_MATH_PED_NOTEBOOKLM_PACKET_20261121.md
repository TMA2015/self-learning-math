# CĐ02 · Affected-only Academic / PED review — O04 nghiệm kép và O06 D6 đầu mút

PACKET_ID: THPT-TOPIC02-O04-O06-SCOPED-PED-20261121
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.2.0
REVIEW_SCOPE: TOP02-O04 (Kiến thức 2.3) + TOP02-O06 (Kiến thức 2.5) ONLY
CHANGE_CLASS: DELTA_C_ACADEMIC_MATERIAL_AFFECTED_ONLY
BASELINE_READY_LEARNER_BLOB: 6c975c6f19c11193fad7546cebccb27a9bcbcd2b
CANDIDATE_LEARNER_BLOB: 3161436a92a450e17aaf5c6b53736f70d9d5bfa0
CANONICAL_38_ITEMS_STATUS: UNCHANGED
STUDENT_FIRST_TRY_AND_FINAL_SELF_CHECK: UNCHANGED
REVIEW_STATUS: PENDING_INDEPENDENT_ACADEMIC_PED
ACADEMIC_S1_NOTE: SGK KNTT Toán 10 Tập 1, dấu tam thức bậc hai và bất phương trình; do not claim a new page-scan receipt
AUTHOR_SCOPE_QA: 2/2 exact changes only and 54/54 old click-to-reveal blocks conserved
RELEASE_AUTHORIZATION: NO

## Vì sao cần sửa: học sinh có thể hiểu sai thế nào?

1. `TOP02-O04`: câu cũ nói 'quy tắc dấu thay đổi' với nghiệm kép \(\Delta=0\), mâu thuẫn ngay với câu sau 'hai phía có cùng dấu'. Điều đó có thể khiến học sinh vẽ bảng dấu đổi dấu qua nghiệm kép. Câu mới phát biểu **không đổi dấu khi đi qua nghiệm kép**, và chỉ tại nghiệm kép giá trị 0. Kiểm a=+3, f=3(x−2)²: f(1)=3>0,f(2)=0,f(3)=3>0; a=−3 thì hai phía âm.
2. `TOP02-O06`: vận dụng là \(-x^2+4x-3>0\), kết quả đúng \(1<x<3\), nhưng D6 cũ dạy kiểm 'đầu mút ở ≤' và thử x=2 — **điểm trong khoảng**, không phải đầu mút. Sửa thành thử x=1 hoặc x=3: vế trái 0 nên không thỏa \(>0\), còn thử x=2 cho 1>0. Nếu thay điều kiện bằng \(\ge0\) mới nhận cả x=1,3.

## Trích nguyên văn hai đoạn **trước sửa** (snapshot READY cũ)

### O04 — Trước

### 2.3. Nghiệm kép và dấu bằng

> **TÍNH CHẤT — Nghiệm kép và dấu bằng.** Khi biệt thức bằng không, đồ thị vừa chạm trục tại nghiệm kép và quy tắc dấu thay đổi. Tại nghiệm kép giá trị bằng 0 nhưng hai phía có cùng dấu. Trước hết, hãy nhớ bình phương không âm; phân biệt < với ≤. Nếu Δ=0 thì f=a(x−x₀)², cùng dấu a ngoài x₀ và bằng 0 tại x₀. Dấu không nghiêm có thể nhận nghiệm kép, dấu nghiêm phải bỏ.

Hãy kiểm tra trường hợp sau: −2(x−3)²≤0 mọi x; bằng 0 khi x=3, âm khi x≠3. Muốn giải f≥0 chỉ nhận {3}.

**Ví dụ**

**Đề bài.** Giải \(-3(x-2)^2\ge0\).

**Lời giải.** Bình phương không âm, nên biểu thức \(\le0\). Để \(\ge0\) chỉ có thể bằng 0: \(x=2\).

**Vận dụng**

Giải (x+4)²≤0.

<details markdown="1"><summary>Đối chiếu</summary>

Chỉ x=−4 vì bình phương ≥0.

Nếu viết một khoảng, thử x=−3 để bác bỏ.

</details>

### O06 — Trước

### 2.5. Giải bất phương trình bậc hai

Bất phương trình bậc hai một ẩn có thể đưa về một trong bốn dạng \(ax^2+bx+c>0\), \(ax^2+bx+c\ge0\), \(ax^2+bx+c<0\) hoặc \(ax^2+bx+c\le0\), với \(a\ne0\). **Giải bất phương trình** nghĩa là tìm tất cả số thực \(x\) khiến bất đẳng thức đúng, tức là tìm tập nghiệm; chẳng hạn \(x^2-1<0\) chọn các số \(x\) nằm giữa hai nghiệm \(-1\) và \(1\).

> **ĐỊNH NGHĨA — Bất phương trình bậc hai một ẩn.** Bất phương trình có vế chứa tam thức \(ax^2+bx+c\), \(a\ne0\), so sánh với \(0\) bằng một trong bốn dấu \(>,\ge,<,\le\). Nếu \(a=0\), phải xét lại như bất phương trình bậc nhất hoặc suy biến.

> **PHƯƠNG PHÁP — Giải bất phương trình bậc hai.** Từ ba trường hợp của biệt thức, ta có thể giải bất phương trình bậc hai một cách có căn cứ. Một điều kiện ≥ khác > chính ở các nghiệm biên. Để xác định điều đó, cần xét ba trường hợp Δ và khoảng, đoạn trên ℝ. Đưa về f(x)⋄0, kiểm a≠0, tìm nghiệm, chọn khoảng theo dấu, rồi xét dấu nghiêm/non-nghiêm để lấy/loại đầu mút. Với Δ<0 có thể được ℝ hoặc ∅.

Chẳng hạn, x²−5x+6≤0 ⇔ (x−2)(x−3)≤0 ⇒ x∈[2,3]. Chọn nhân tử vì nghiệm là số nguyên.

**Ví dụ**

**Đề bài.** Giải \(x^2-6x+8\ge0\).

**Lời giải.** Từ \((x-2)(x-4)\ge0\), hai thừa số cùng dấu khi \(x\le2\) hoặc \(x\ge4\). Nhận đầu mút vì \(\ge\).

**Vận dụng**

Giải −x²+4x−3>0.

<details markdown="1"><summary>Đối chiếu</summary>

1<x<3 vì −(x−1)(x−3)>0.

Nếu quên đầu mút ở ≤, thử x=2 trong biểu thức rồi sửa dấu ngoặc.

</details>

## Trích nguyên văn hai đoạn **sau sửa** (candidate mới)

### O04 — Sau

### 2.3. Nghiệm kép và dấu bằng

> **TÍNH CHẤT — Nghiệm kép và dấu bằng.** Khi biệt thức bằng không, đồ thị chạm trục hoành tại nghiệm kép nhưng **không đổi dấu khi đi qua nghiệm kép**. Tại đúng nghiệm kép giá trị bằng 0; ở hai phía, tam thức cùng dấu với hệ số \(a\). Trước hết, hãy nhớ bình phương không âm; phân biệt < với ≤. Nếu Δ=0 thì f=a(x−x₀)², cùng dấu a ngoài x₀ và bằng 0 tại x₀. Dấu không nghiêm có thể nhận nghiệm kép, dấu nghiêm phải bỏ.

Hãy kiểm tra trường hợp sau: −2(x−3)²≤0 mọi x; bằng 0 khi x=3, âm khi x≠3. Muốn giải f≥0 chỉ nhận {3}.

**Ví dụ**

**Đề bài.** Giải \(-3(x-2)^2\ge0\).

**Lời giải.** Bình phương không âm, nên biểu thức \(\le0\). Để \(\ge0\) chỉ có thể bằng 0: \(x=2\).

**Vận dụng**

Giải (x+4)²≤0.

<details markdown="1"><summary>Đối chiếu</summary>

Chỉ x=−4 vì bình phương ≥0.

Nếu viết một khoảng, thử x=−3 để bác bỏ.

</details>

### O06 — Sau

### 2.5. Giải bất phương trình bậc hai

Bất phương trình bậc hai một ẩn có thể đưa về một trong bốn dạng \(ax^2+bx+c>0\), \(ax^2+bx+c\ge0\), \(ax^2+bx+c<0\) hoặc \(ax^2+bx+c\le0\), với \(a\ne0\). **Giải bất phương trình** nghĩa là tìm tất cả số thực \(x\) khiến bất đẳng thức đúng, tức là tìm tập nghiệm; chẳng hạn \(x^2-1<0\) chọn các số \(x\) nằm giữa hai nghiệm \(-1\) và \(1\).

> **ĐỊNH NGHĨA — Bất phương trình bậc hai một ẩn.** Bất phương trình có vế chứa tam thức \(ax^2+bx+c\), \(a\ne0\), so sánh với \(0\) bằng một trong bốn dấu \(>,\ge,<,\le\). Nếu \(a=0\), phải xét lại như bất phương trình bậc nhất hoặc suy biến.

> **PHƯƠNG PHÁP — Giải bất phương trình bậc hai.** Từ ba trường hợp của biệt thức, ta có thể giải bất phương trình bậc hai một cách có căn cứ. Một điều kiện ≥ khác > chính ở các nghiệm biên. Để xác định điều đó, cần xét ba trường hợp Δ và khoảng, đoạn trên ℝ. Đưa về f(x)⋄0, kiểm a≠0, tìm nghiệm, chọn khoảng theo dấu, rồi xét dấu nghiêm/non-nghiêm để lấy/loại đầu mút. Với Δ<0 có thể được ℝ hoặc ∅.

Chẳng hạn, x²−5x+6≤0 ⇔ (x−2)(x−3)≤0 ⇒ x∈[2,3]. Chọn nhân tử vì nghiệm là số nguyên.

**Ví dụ**

**Đề bài.** Giải \(x^2-6x+8\ge0\).

**Lời giải.** Từ \((x-2)(x-4)\ge0\), hai thừa số cùng dấu khi \(x\le2\) hoặc \(x\ge4\). Nhận đầu mút vì \(\ge\).

**Vận dụng**

Giải −x²+4x−3>0.

<details markdown="1"><summary>Đối chiếu</summary>

1<x<3 vì −(x−1)(x−3)>0.

Nếu em lấy nhầm hai đầu mút \(x=1\) hoặc \(x=3\) cho bất phương trình \(-x^2+4x-3>0\), hãy thế lại: ở cả hai điểm, vế trái bằng \(0\), nên **không thỏa dấu \(>0\)**. Dấu \(\ge0\) mới cho phép lấy hai đầu mút.

</details>

## Phạm vi bảo toàn và chứng cứ QA của tác giả

- Đúng hai thay thế chuỗi trong toàn learner (hai đoạn mô tả / nhắc D6); nếu hoàn nguyên đúng hai chuỗi sẽ thu lại nguồn R06 byte-exact. Không sửa đề/đáp án/lời giải/rubric/ID của 38 original canonical câu, không sửa 16 Tự thử hay Tự kiểm tra; 54 `<details>` đóng/mở cân bằng trước/sau.
- QA so nguyên bản ký: 36/36 answer strings từ ngân hàng canonical được đối chiếu khớp phần chiếu học sinh, gồm 20 extension và 16 MCQ, hai Written gốc khác chứa lời giải/rubric đã giữ nguyên; không tạo duplicate bank/câu hỏi. Không lấy số lượng làm chứng cứ tự học cho hai thay đổi đang review.
- **Giữ nguyên** source R06 cũ trong `ready/` và handoff có hiệu lực; đây chỉ là ứng viên R07 chưa thay nguồn hiệu lực. Chỉ sau review độc lập Academic+PED PASS đúng hai outcome và exact-HEAD QA mới cân nhắc khóa snapshot và promotion. Không gọi `CONTENT_READY` cho candidate khi còn reviewer pending.

## Prompt NotebookLM — chỉ 4 câu, không yêu cầu kỹ thuật GitHub

Hãy phản biện độc lập **chỉ hai thay đổi** ở TOP02-O04 và TOP02-O06 theo toán học và khả năng học sinh tự học, đối chiếu với năm Permanent Sources THPT v2.1 và SGK KNTT phù hợp. Kiểm tra riêng định lý dấu khi \(\Delta=0\), nghiệm kép, và sự khác nhau giữa dấu \(>0\) với \(\ge0\) tại các nghiệm biên. Đánh giá liệu câu D6 mới có giúp học sinh tự phát hiện lỗi lấy nhầm đầu mút và sửa từ bước kiểm tra trực tiếp không, đồng thời xác định P0/P1/P2 nếu có. Trả Academic/PED PASS hoặc FAIL trong **phạm vi ảnh hưởng**, nêu lỗi, lý do và `MINIMAL_DELTA` thật ngắn; **không cần báo cáo SHA, metadata, CI hoặc review lại các câu không đổi**.