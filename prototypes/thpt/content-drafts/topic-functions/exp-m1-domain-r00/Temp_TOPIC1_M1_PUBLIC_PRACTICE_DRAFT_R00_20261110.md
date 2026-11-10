# Chuyên đề 1 · M1 — Luyện tập bổ sung về miền đầu vào và tập giá trị

**AUTHORING CANDIDATE R00 — NOT REVIEWED — DELTA_C.** Đây là các câu ứng viên mới được giữ lại sau kiểm tra trùng nội bộ, chỉ dùng ở *Luyện tập* hoặc *Vận dụng công khai*. Các ID \`DRAFT-*\` là tạm thời; **chưa** được đăng ký vào thư viện canonical Q15, chưa rà soát trùng nghĩa với ngân hàng hiện hành. **Không dùng làm Topic Readiness RD1.** Không thay câu/đáp án/rubric đã PASS.

## Nhóm A · Hiểu khái niệm trước khi tính

### DRAFT-T1-M1-APP02 · Rút gọn rồi có được nhận điểm bị loại?

Cho \(f(x)=\dfrac{x^2-1}{x-1}\). Một bạn rút gọn thành \(x+1\), rồi khẳng định tập xác định là \(\mathbb R\). Em hãy phản biện và nêu điều gì đúng, điều gì sai trong lời giải ấy.

<details><summary>Đối chiếu</summary>

Từ biểu thức **ban đầu**, mẫu số \(x-1\) yêu cầu \(x\ne1\). Trên miền ấy, \(\dfrac{(x-1)(x+1)}{x-1}=x+1\). Nhưng phép rút gọn chỉ hợp lệ khi \(x-1\ne0\), nên tập xác định của \(f\) vẫn là \(\mathbb R\setminus\{1\}\). Biểu thức mới \(x+1\), nếu được định nghĩa riêng, có miền rộng hơn; nó không tự làm thay đổi miền ban đầu của \(f\).

</details>

### DRAFT-T1-M1-APP05 · Đọc đúng điểm biên và điểm loại

Xét \(q(x)=\dfrac{\sqrt{9-x^2}}{x+2}\). Xác định tập xác định và kiểm các giá trị \(x=-3,-2,0,3\). Với các giá trị hợp lệ, hãy tính \(q(x)\).

<details><summary>Đối chiếu</summary>

Căn yêu cầu \(9-x^2\ge0\), tức \(-3\le x\le3\). Mẫu yêu cầu \(x+2\ne0\), tức \(x\ne-2\). Do đó \(D=[-3,-2)\cup(-2,3]\). Ta nhận \(-3,0,3\) và loại \(-2\): \(q(-3)=0\), \(q(0)=3/2\), \(q(3)=0\). Đầu mút được nhận vì căn bằng 0 là hợp lệ khi mẫu khác 0. Điểm \(-2\) bị loại dù biểu thức dưới căn dương.

</details>

### DRAFT-T1-M1-APP06 · Ba ràng buộc trong một biểu thức

Xét \(\displaystyle r(x)=\frac{\sqrt{x+2}}{(x-1)(x-3)}\). Tìm \(D\), rồi cho biết \(-2,1,3,4\) có thuộc miền hay không.

<details><summary>Đối chiếu</summary>

\(\sqrt{x+2}\) yêu cầu \(x\ge-2\); mẫu khác 0 yêu cầu \(x\ne1\), \(x\ne3\). Vậy \(D=[-2,+\infty)\setminus\{1,3\}\). Nhận \(-2\) và 4; loại 1 và 3. Không được loại \(-2\) chỉ vì tử có căn: căn bằng 0 ở **tử** là hợp lệ.

</details>

### DRAFT-T1-M1-WR01 · Phản biện một kết luận sai

Một bạn viết: “Vì \(\sqrt{x-1}\) xác định khi \(x\ge1\), nên \(\displaystyle\frac1{\sqrt{x-1}}\) cũng xác định khi \(x\ge1\)”. Em hãy giải thích lỗi, tìm tập xác định đúng và đưa ra một giá trị tại biên để kiểm chứng.

<details><summary>Đối chiếu và thang điểm đề xuất</summary>

**Lời giải:** Với mẫu \(\sqrt{x-1}\), cần đồng thời \(x-1\ge0\) để có căn và \(\sqrt{x-1}\ne0\) để mẫu không bằng 0. Hai điều kiện tương đương \(x-1>0\), tức \(D=(1,+\infty)\). Tại \(x=1\), mẫu bằng 0 nên biểu thức không xác định.

**Rubric dự kiến (3 điểm, chưa canonical):** 1 điểm nêu rõ vì sao căn ở mẫu không được bằng 0; 1 điểm suy ra đúng \(x>1\) và tập \(D\); 1 điểm đối chiếu được \(x=1\) làm phản ví dụ cho cách lập luận sai. Không thưởng điểm cho câu trả lời đúng nhưng thiếu giải thích nếu câu hỏi yêu cầu phản biện.

</details>

### DRAFT-T1-M1-WR02 · Rút gọn có làm mất một điểm trên đồ thị?

Cho hai hàm số

\[
f(x)=\frac{(x-1)\sqrt{x+1}}{x-1},
\qquad
g(x)=\sqrt{x+1}.
\]

Một bạn rút gọn \((x-1)\) rồi nói rằng hai hàm số hoàn toàn giống nhau. Em hãy:

(a) tìm tập xác định của từng hàm số;

(b) giải thích vì sao \(f(x)=g(x)\) tại mọi đầu vào thuộc tập xác định của \(f\), nhưng hai hàm số vẫn không bằng nhau với tư cách là hai hàm có miền xác định khác nhau;

(c) mô tả điểm phải bỏ khỏi đồ thị của \(g\) để được đồ thị của \(f\), và xác định **tập giá trị** của mỗi hàm.

<details><summary>Đối chiếu và rubric dự kiến</summary>

Để \(g(x)\) có nghĩa trong số thực, cần \(x+1\ge0\), nên \(D_g=[-1,+\infty)\).

Để \(f(x)\) có nghĩa, cần đồng thời \(x+1\ge0\) và \(x-1\ne0\), nên

\[
D_f=[-1,+\infty)\setminus\{1\}=[-1,1)\cup(1,+\infty).
\]

Khi \(x\in D_f\), ta mới được phép chia cả tử và mẫu cho \(x-1\), suy ra \(f(x)=\sqrt{x+1}=g(x)\). Tại \(x=1\), \(g(1)=\sqrt2\) có nghĩa, còn \(f(1)\) **không xác định** do mẫu bằng 0. Vì vậy hai hàm không có cùng miền và không thể coi là cùng một hàm.

Đồ thị \(f\) là đồ thị \(g\), nhưng **khuyết điểm** \((1;\sqrt2)\) (vòng tròn rỗng). Do căn bậc hai nhận mọi giá trị không âm khi \(x\ge-1\), ta có \(T_g=[0,+\infty)\). Với \(f\), giá trị \(\sqrt2\) không còn nhận được: muốn \(\sqrt{x+1}=\sqrt2\) thì nhất thiết \(x=1\), mà giá trị này bị loại. Mọi đầu ra không âm khác \(\sqrt2\) vẫn đạt được. Vậy

\[
T_f=[0,+\infty)\setminus\{\sqrt2\}.
\]

**Rubric dự kiến (6 điểm, chưa canonical):** 1 điểm tìm đúng \(D_g\); 1 điểm tìm đúng \(D_f\); 1 điểm nêu rõ điều kiện hợp lệ của phép rút gọn; 1 điểm nhận diện chính xác chỗ khuyết \((1;\sqrt2)\) trên đồ thị; 1 điểm tìm đúng \(T_g\); 1 điểm suy luận đúng \(T_f\) và vì sao mất giá trị \(\sqrt2\). Bài này là hoạt động tự đối chiếu công khai, không dùng làm RD1 hoặc ghi Mastery.

</details>


---

## Ma trận nguồn dự kiến, CHƯA CANONICAL

| DRAFT ID | Mức | Outcome candidate | Vai trò đề xuất |
|---|---|---|---|
| APP02 | thông hiểu | rút gọn phân thức không phục hồi điểm loại | TOPIC_PRACTICE |
| APP05–06 | vận dụng | giao nhiều điều kiện, điểm biên | TOPIC_PRACTICE |
| WR01–WR02 | giải thích | biện luận điều kiện, giới hạn kết luận | TOPIC_PRACTICE / WRITTEN candidate |

**Q15:** Trước khi đăng ký item phải đối chiếu các câu đã có trong R18, mã nguồn câu canonical SGK và thư viện Written/Anchor. Không được tạo câu mới chỉ để nhân bản cùng một câu với ID mới. Nếu trùng, giữ nguyên canonical item, thêm placement/role.

**Q16:** Toàn bộ 5 bài trên là luyện tập công khai, không RD1, không tự ghi Mastery, không hiện đáp án của RD1. **Q18:** SHA/receipt review targeted chưa có, trạng thái HOLD.
