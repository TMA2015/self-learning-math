# G11 SGK KNTT Chương VI — D1 Kiến thức tự học + D2 Ví dụ có suy luận · R00

**PACKET_ID:** `THPT-G11-CHVI-B18-B21-WHOLE-CHAPTER-AUTHORING-R00-20261101` · SGK KNTT 11 **Tập 2** ChVI B18–B21.  
**STATUS:** `D1_D2_AUTHOR_DRAFT_NOT_REVIEWED`. **PED rule #691:** A first-time learner must know **why the idea is needed**, **what it means**, **how formed**, **when the formula applies**, then see a reasoned example and self-try. Not a formula sheet.  
**Study prerequisites:** Exponents with positive integer powers, square/cube roots, real numbers, function notation/graphs, inequalities and preceding G11 Chapter V sequence limits. Assume only these prerequisites; explain new terminology at first use.

## Lesson B18 — Lũy thừa với số mũ thực

### 1. Tại sao phải mở rộng số mũ? (WHY)

Em đã biết `2³=2·2·2=8`: số mũ 3 đếm ba thừa số 2. Nhưng nếu hỏi **cạnh hình vuông** có diện tích 2 thì cạnh phải dài bao nhiêu? Ta cần một số dương mà **bình phương bằng 2**, tức `√2`. Có thể viết nó là `2^(1/2)` để bảo toàn cách tính `(2^(1/2))²=2`. Không thể giải thích số mũ `1/2` là “nhân số 2 với nhau nửa lần”; đó là một **định nghĩa mở rộng phù hợp các quy tắc đã có**.

Lãi kép hay biến đổi liên tục cũng nảy sinh số mũ không nguyên: `P(t)=P₀(1+r)^t` (khi mô hình cho phép thời gian t là số thực). Vì thế toán học cần định nghĩa có nghĩa cho `a^{1/2}, a^{-2}` và `a^{√2}`. Bài này xây dựng các bước mở rộng ấy.

### 2. Từ số mũ nguyên dương đến 0 và âm (WHAT/HOW)

Với n nguyên dương, `a^n` là tích n thừa số a. Nhìn `2³=8, 2²=4, 2¹=2`: giảm số mũ một đơn vị thì chia 2; để giữ quy luật đó, `2⁰=1` và `2^{-1}=1/2`. Tổng quát, **khi a≠0**: `a⁰=1`, `a^{-n}=1/a^n`.

**Vì sao cấm a=0 khi số mũ âm/0?** `0^{-1}=1/0` không xác định. `0⁰` không được định nghĩa trong khuôn khổ này. Với n nguyên dương, `0^n=0` vẫn có nghĩa. **Sai thường gặp:** `a^{-2}` là `1/a²`, không phải `−a²`.

### 3. Số mũ phân số và số mũ vô tỉ

Với `a>0`, `n≥2` nguyên dương và `m` nguyên, định nghĩa `a^{m/n}=ⁿ√(a^m)`. Đây là số dương có lũy thừa bậc n bằng `a^m`; ví dụ `8^{2/3}=(³√8)²=4`. **Tại sao cơ số phải dương trong quy tắc chung?** Căn bậc chẵn của số âm không là số thực; khi số mũ thay đổi liên tục, định nghĩa thống nhất cho mọi số thực đòi a>0. Một vài biểu thức với cơ số âm và số mũ hữu tỉ cụ thể có nghĩa, nhưng **không** suy ra `a^x` cho mọi x thực khi a<0.

Muốn tính `2^{√2}`, trước hết xấp xỉ `√2` bằng các số hữu tỉ `1,4; 1,41; 1,414;...`. Các giá trị `2^{1,4};2^{1,41};...` tiến tới một số dương xác định; ta gọi đó là `2^{√2}`. Định nghĩa chính xác dựa vào giới hạn của dãy số hữu tỉ tiến tới số mũ vô tỉ; giới hạn **không phụ thuộc** cách xấp xỉ. Đây là chỗ liên hệ thật với giới hạn Chương V, nhưng học sinh không cần chứng minh giải tích ngoài phạm vi SGK.

### 4. Các quy tắc và điều kiện (FORMAL / WHY RULE)

Với `a,b>0`, `x,y∈ℝ`:
- `a^x a^y = a^{x+y}`: cùng cơ số, phép nhân gộp số mũ.
- `a^x/a^y=a^{x−y}` (mẫu luôn dương).
- `(a^x)^y=a^{xy}`, `(ab)^x=a^x b^x`, `(a/b)^x=a^x/b^x`.

**Không có quy tắc** `a^x+a^y=a^{x+y}`! Kiểm nhanh `2²+2³=12`, khác `2⁵=32`. Với số mũ thực bất kỳ, **kiểm tra cơ số dương trước khi biến đổi**.

### 5. Tự thử trước Core

1. Vì sao `4^{-1}` là `1/4`, không phải `−4`?
2. `27^{2/3}` bằng bao nhiêu, tại sao?
3. Trong `P(t)=500(1,06)^t`, yếu tố `1,06` có ý nghĩa gì? Nếu số tiền được cập nhật hằng năm, t nên là số nguyên hay số thực?

**Tự đối chiếu sau khi thử:** (1) giảm số mũ một đơn vị tương ứng chia cho 4; (2) `(³√27)²=9`; (3) hệ số tăng 6% mỗi năm, với cập nhật mỗi năm dùng t nguyên không âm; dùng t thực cần mô hình phù hợp.

### D2 — Giáo viên làm mẫu B18

**EX-G11-B18-01 (ý nghĩa số mũ âm).** Tính `(3/2)^{-2}`. **Chọn quy tắc nào?** Số mũ âm nghĩa là lấy nghịch đảo: `(2/3)²=4/9`; dấu trừ không được giữ thành hệ số `−`.

**EX-G11-B18-02 (vì sao phân số liên quan căn).** `16^{3/4}=(⁴√16)^3=2³=8`. **Vì sao được đổi?** `a^{m/n}` là căn bậc n của `a^m` khi a>0; không tách một cơ số âm thành lũy thừa thực tùy ý.

**EX-G11-B18-03 (rút gọn bằng luật, không đoán).** Với a>0, `a^{5/3}·a^{-2/3}/a^{1/2}=a^{5/3−2/3−1/2}=a^{1/2}=√a`. **Điều kiện** a>0 bảo đảm tất cả số mũ thực có nghĩa.

**EX-G11-B18-04 (tăng trưởng).** Vốn `100` triệu đồng tăng 5% mỗi năm, lãi gộp cuối năm: `P(n)=100·1,05^n` triệu. Sau 2 năm `P(2)=110,25` triệu. **Vì sao nhân thay vì cộng?** Năm thứ hai lấy 5% của **số tiền sau năm đầu**, không phải 5% của vốn ban đầu. Mô hình giả sử lãi suất cố định, không có phí/thuế.

---

## Lesson B19 — Lôgarit

### 1. Vấn đề dẫn đến lôgarit: ta muốn tìm **số mũ** (WHY)

Nhân 2 liên tiếp: `2¹=2, 2²=4, 2³=8`. Nếu đã biết kết quả 8, hỏi **cần bao nhiêu lần nhân đôi để được 8?**, câu trả lời là 3. Với 10 hoặc 7, câu hỏi khó hơn: `2^x=10` thì x bằng bao nhiêu? Không thể chỉ thử số nguyên. Để trả lời loại câu hỏi “số mũ nào tạo ra số này?”, ta đặt ra **lôgarit**.

### 2. Lôgarit là gì (WHAT), trước khi học quy tắc

Với `a>0, a≠1, b>0`, **`log_a b` là số thực x duy nhất sao cho `a^x=b`**. Viết tương đương `log_a b=x ⇔ a^x=b`. `a` là **cơ số**, `b` là **đối số**; chúng giữ vai trò khác nhau. Ví dụ `log₂8=3` vì `2³=8`; `log₃(1/9)=−2` vì `3^{-2}=1/9`. Logarit **không phải** phép chia b/a.

**Vì sao những điều kiện?** `a=1` cho `1^x=1` với mọi x nên không thể tìm số mũ duy nhất; `a≤0` không tạo ra một hàm lũy thừa thực xác định tốt với mọi x; `a^x` với a>0 luôn dương, nên không thể có `b≤0`.

### 3. Hình thành quy tắc từ ý nghĩa “số mũ”

`log_a 1=0` do `a⁰=1`; `log_a a=1`; `a^{log_a b}=b` (b>0); `log_a(a^x)=x`.

Đặt `u=log_a M`, `v=log_a N` với M,N>0. Vì `a^u=M` và `a^v=N`, `MN=a^{u+v}`, suy ra **`log_a(MN)=log_a M+log_a N`**. Tương tự `log_a(M/N)=log_a M−log_a N` (N>0), `log_a(M^r)=r·log_a M` (M>0, r thực). **Không** có quy tắc `log_a(M+N)=log_a M+log_a N` (phản ví dụ M=N=1: trái `log_a2`, phải 0).

### 4. Đổi cơ số và máy tính

Đặt `x=log_a b` nên `a^x=b`. Lấy `log_c` hai vế với `c>0,c≠1`: `x log_c a=log_c b`, suy ra `log_a b=log_c b/log_c a`. Điều kiện `a≠1` làm mẫu khác 0. `lg x=log₁₀x`, `ln x=log_e x` (e là hằng số dương đặc biệt, xấp xỉ 2,71828). Máy tính có thể cho giá trị gần đúng, **không thay thế điều kiện đối số dương**.

### 5. Tự thử

Nếu `log₅125=3`, em phát biểu lại một đẳng thức lũy thừa. Giải thích vì sao `log₄0` vô nghĩa và vì sao `log₂(4+4)` không bằng `log₂4+log₂4` (kiểm `log₂8=3`, vế sau 4).

### D2 — Giáo viên làm mẫu B19

**EX-G11-B19-01 (đọc đúng ý nghĩa).** `log₄(1/16)=−2` vì `4^{-2}=1/16`. **Không lấy** `1/16÷4`.

**EX-G11-B19-02 (điều kiện trước khi rút gọn).** `log₃((x−1)(x+2))` xác định khi `(x−1)(x+2)>0`, tức `x<−2` hoặc `x>1`. **Không tách thành `log₃(x−1)+log₃(x+2)` trên toàn miền này**, vì khi x<−2 hai thừa số đều âm và log riêng không xác định. Quy tắc tách tích đòi **mỗi thừa số dương**; đây là bẫy học thuật quan trọng.

**EX-G11-B19-03 (quy tắc có giải thích).** `log₂(32/4)=log₂32−log₂4=5−2=3`; điều kiện hai đối số 32,4 dương. Có thể đối chiếu `log₂8=3`.

**EX-G11-B19-04 (đổi cơ số).** `log₃7=(ln7)/(ln3)`, kiểm `3>0,3≠1,7>0`, cho xấp xỉ 1,771; **không** phải `ln(7/3)`.

---

## Lesson B20 — Hàm số mũ và hàm số lôgarit

### 1. Tại sao phải học đồ thị và hàm chứ không chỉ một giá trị?

Lũy thừa `2³` trả lời cho một mốc; nhưng lượng vi khuẩn sau **mọi** khoảng thời gian t cần một quy tắc `N(t)=N₀·2^t`. Khi t thay đổi, kết quả thay đổi ra sao? Ta xét **hàm số mũ**. Nếu biết số lượng vi khuẩn và muốn suy thời gian, ta cần đi ngược lại bằng lôgarit — **hàm số lôgarit**.

### 2. Hàm số mũ là gì, đồ thị nói điều gì

Với `a>0, a≠1`, hàm `f(x)=a^x` là hàm số mũ: **biến x nằm ở số mũ**, không giống `x²` với biến ở cơ số. Mọi x thực đều được nhận (**TXĐ `ℝ`**), `f(x)>0` (**tập giá trị `(0,+∞)`**), đồ thị qua `(0,1)` và `(1,a)`.

Quan sát `2^{-2}=1/4;2^{-1}=1/2;2⁰=1;2¹=2;2²=4`. Đi sang phải một đơn vị thì gấp đôi; hàm tăng **khi a>1**. Với `a=1/2`, mỗi bước sang phải chia đôi → **giảm**. Cả hai đường không cắt trục hoành vì `a^x>0`, và tiến sát trục `y=0` ở phía x→−∞ nếu a>1 (hoặc x→+∞ nếu 0<a<1). Đó là **tiệm cận ngang y=0** — một đường đồ thị tiến sát, không nhất thiết chạm.

### 3. Hàm logarit là gì, vì sao điều kiện x>0?

`g(x)=log_a x`, với a>0,a≠1. Vì `a^y=x>0`, **TXĐ g: (0,+∞)**; mọi số thực y có thể là logarit của một x dương, nên **tập giá trị ℝ**. Đồ thị qua `(1,0)` và `(a,1)`. Nếu a>1 nó tăng; nếu 0<a<1 nó giảm. Khi x→0⁺, đồ thị tiến sát đường thẳng `x=0` (**tiệm cận đứng**), nhưng không chạm do x>0.

### 4. Hai hàm là “làm” và “làm ngược”

Nếu `y=2^x` thì `x=log₂y`. Trên đồ thị, mỗi điểm `(x,y)` của hàm mũ ứng với `(y,x)` của logarit; hai đồ thị đối xứng qua đường `y=x`. **Vì sao quan trọng?** Khi bài toán cho thời gian, dùng hàm mũ; khi cho mức đã đạt và cần tìm thời gian, dùng logarit.

### 5. Tự thử

Vì sao `y=3^x` không thể bằng −5? Nếu `log₂8=3`, hãy tìm hai điểm tương ứng trên hai đồ thị. Vì sao `log_{1/2}x` nghịch biến?

### D2 — Giáo viên làm mẫu B20

**EX-G11-B20-01 (phân biệt hai loại hàm).** `f(x)=3^x` có TXĐ ℝ, tập giá trị (0,+∞), qua (0,1),(1,3) và tăng. `h(x)=x³` **không** là hàm mũ vì biến ở cơ số; không áp dụng máy móc tập giá trị (0,+∞) cho `x³`.

**EX-G11-B20-02 (đồ thị ngược).** Nếu `y=2^x` qua (2,4), thì `y=log₂x` qua (4,2). Đó là đổi vai trò đầu vào/đầu ra, không phải phép đảo dấu một tọa độ.

**EX-G11-B20-03 (giải thích cơ số <1).** `g(x)=(1/3)^x`: từ x=0 đến x=1 giá trị giảm 1→1/3. Vì `0<1/3<1`, g giảm trên ℝ. `log_{1/3}x` cũng giảm trên (0,+∞).

**EX-G11-B20-04 (mô hình gấp đôi).** `N(t)=50·2^t`, t tính bằng kỳ. `N(0)=50`, `N(3)=400`. **Tại sao** giá trị tăng x8? Qua 3 kỳ mỗi kỳ nhân đôi nên nhân `2³`. Nếu hỏi N=400 xảy ra ở kỳ nào, cần `t=log₂(400/50)=3`.

---

## Lesson B21 — Phương trình, bất phương trình mũ và lôgarit

### 1. Vì sao phải giải loại phương trình này? (WHY)

Các phương trình `x²=9` tìm **cơ số** x. Nhưng `2^x=16` lại tìm **số mũ** x; đây là dạng khác, cần hiểu hàm mũ đơn ánh và logarit là phép ngược. Bất phương trình như `2^x>10` hỏi phải tăng qua bao nhiêu kỳ để vượt một ngưỡng. Trước khi viết công thức, ta cần biết hàm **tăng hay giảm**, vì đó là lý do dấu bất đẳng thức được giữ hay đảo.

### 2. Phương trình mũ cơ bản

Với `a>0,a≠1`: `a^{u(x)}=a^{v(x)} ⇔ u(x)=v(x)` vì hàm mũ đơn ánh (hai số mũ khác nhau không thể cho cùng một giá trị). `a^{u(x)}=b`: nếu b>0 thì `u(x)=log_a b`; nếu b≤0 thì vô nghiệm thực vì `a^{u(x)}>0`. Đừng “lấy log” của số âm.

### 3. Phương trình logarit cơ bản và điều kiện

`log_a f(x)=c` tương đương `f(x)=a^c`, **với** `f(x)>0`. `log_a f(x)=log_a g(x)` ⇔ `f(x)=g(x)` **và** `f(x)>0,g(x)>0`. **Lý do:** logarit chỉ nhận đối số dương; bỏ điều kiện có thể tạo nghiệm ngoại lai.

### 4. Bất phương trình: quan sát chiều biến thiên trước

- Nếu `a>1`: `a^{u(x)}>a^{v(x)} ⇔ u(x)>v(x)`; `log_a f(x)>log_a g(x) ⇔ f(x)>g(x)>0`.
- Nếu `0<a<1`: `a^{u(x)}>a^{v(x)} ⇔ u(x)<v(x)`; `log_a f(x)>log_a g(x) ⇔ 0<f(x)<g(x)`.
- Với dấu `≥,≤`, áp dụng tương tự nhưng luôn đảm bảo điều kiện logarit. **Không đổi chiều vì “có log”**; đổi chiều vì **hàm theo cơ số 0<a<1 nghịch biến**.

### 5. Quy trình và giới hạn phương pháp

Bước 1: xác định cơ số, miền đầu vào và điều kiện xác định của mọi logarit. Bước 2: nhận biết hàm tăng/giảm. Bước 3: biến đổi tương đương sang phương trình/bất phương trình quen thuộc. Bước 4: đối chiếu nghiệm với điều kiện và bài toán thực tế. **Chỉ dùng các dạng cơ bản theo SGK**; bài nâng cao đa thức lôgarit/mẹo đặt ẩn phụ tùy S1 phạm vi, không tự đẩy Core.

### 6. Tự thử

Giải thích vì sao `(1/2)^x> (1/2)^3` cho `x<3`, không phải x>3. Nếu `log₂(x−1)=3`, vì sao trước tiên cần x>1?

### D2 — Giáo viên làm mẫu B21

**EX-G11-B21-01 (mũ, dùng đơn ánh).** `3^{2x−1}=27=3³` ⇒ `2x−1=3` ⇒ x=2. Lý do: hàm `3^t` tăng và mỗi đầu ra dương chỉ có một số mũ.

**EX-G11-B21-02 (log, điều kiện bắt buộc).** `log₂(x−1)=3`. Trước hết `x−1>0` tức x>1. Đổi sang `x−1=2³=8`, x=9 thỏa. Không ghi nghiệm chưa kiểm điều kiện.

**EX-G11-B21-03 (cơ số 1/2 làm đổi chiều).** `(1/2)^{x+1}≥(1/2)^3`. Hàm giảm vì cơ số 0,5<1, nên `x+1≤3`, tức x≤2. **Sai thường gặp:** x≥2.

**EX-G11-B21-04 (log giảm và miền).** `log_{1/3}(x−1)<log_{1/3}4`. Điều kiện x>1. Vì log cơ số 1/3 giảm, bất phương trình tương đương `x−1>4` ⇒ x>5; kiểm tự động thỏa x>1.

**EX-G11-B21-05 (mô hình ngưỡng).** `P(n)=100(1,1)^n` triệu, n nguyên không âm, khi nào **vượt** 133,1 triệu? `(1,1)^n>1,331=(1,1)^3` ⇒ n>3 ⇒ kỳ đầu vượt là **n=4**. **Bẫy:** tại n=3 chỉ **bằng** 133,1; điều kiện “vượt” là dấu >, và n phải nguyên trong cập nhật cuối kỳ.

---

## Kết nối toàn chương — học sinh giải thích mạch nguyên nhân

- Sự nhân lặp dẫn đến số mũ nguyên; nhu cầu căn và giá trị giữa các kỳ dẫn đến số mũ phân số/thực.
- Hỏi “kết quả của số mũ là bao nhiêu?” dùng `a^x`; hỏi “muốn ra kết quả b cần số mũ nào?” dùng `log_a b`.
- Xem mối quan hệ cho **mọi** x là học **hàm số mũ/logarit**; hỏi khi nào đạt/ngưỡng vượt b là **giải phương trình/bất phương trình**.
- **Micro-check tích hợp:** Nếu số lượng ban đầu là 10 và sau t kỳ tăng gấp 3 mỗi kỳ, hãy (i) viết hàm N(t), (ii) tìm t để N=270, (iii) giải N(t)>270 khi t là nguyên không âm. **Đối chiếu sau tự thử:** `N(t)=10·3^t`, t=3 cho 270; “vượt” đòi `t>3`, kỳ nguyên đầu tiên t=4.
- **Không dùng câu này làm RD1 kín**; đây chỉ là hoạt động hướng dẫn công khai, không tạo Skill Mastery.

## Author QA / NotebookLM requirements

D1–D2 above are *author text*, not verbatim SGK quotations. Independently verify correctness and S1 scope, especially a<0 vs rational/irrational exponents, product log requiring both positive, sign flip for 0<a<1, and strict thresholds for discrete models. **PED1–PED6 must be evaluated by B18/B19/B20/B21 and each RD0**, including a first-time learner who does not know why logarithms exist; do not mark READY from 22 outcome counts or 17 worked examples. Exact S1 PDFs and SBT printed-page receipts remain pending. No G10 retrospective work or publishing.
