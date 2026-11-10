# Chuyên đề 1 · M1 — Luyện tập bổ sung về miền đầu vào và tập giá trị

**AUTHORING CANDIDATE R00 — NOT REVIEWED — DELTA_C.** Đây là các câu mới hoàn toàn, chỉ dùng ở *Luyện tập* hoặc *Vận dụng công khai*. Các ID \`DRAFT-*\` là tạm thời; **chưa** được đăng ký vào thư viện canonical Q15, chưa rà soát trùng nghĩa với ngân hàng hiện hành. **Không dùng làm Topic Readiness RD1.** Không thay câu/đáp án/rubric đã PASS.

## Nhóm A · Hiểu khái niệm trước khi tính

### DRAFT-T1-M1-APP01 · Một đầu vào có thể xuất hiện hai lần?

Bảng sau ghi lại các cặp \((x,y)\) của một quy tắc.

| x | 0 | 2 | 2 | 4 |
|---|---:|---:|---:|---:|
| y | 1 | 5 | 5 | 9 |

Bảng có thể biểu diễn một hàm số theo \(x\) không? Nếu thay một số 5 ở cột \(x=2\) thành 7, câu trả lời thay đổi ra sao?

<details><summary>Đối chiếu</summary>

Bảng ban đầu **có thể** biểu diễn hàm số: cùng \(x=2\) luôn cho \(y=5\), và các đầu vào còn lại cũng chỉ có một đầu ra. Sau khi thay một giá trị thành 7, đầu vào 2 vừa cho 5 vừa cho 7 nên bảng mới **không thể** là bảng giá trị của một hàm số \(y\) theo \(x\). Không được kết luận rằng hai đầu vào khác nhau phải có hai đầu ra khác nhau.

</details>

### DRAFT-T1-M1-APP02 · Rút gọn rồi có được nhận điểm bị loại?

Cho \(f(x)=\dfrac{x^2-1}{x-1}\). Một bạn rút gọn thành \(x+1\), rồi khẳng định tập xác định là \(\mathbb R\). Em hãy phản biện và nêu điều gì đúng, điều gì sai trong lời giải ấy.

<details><summary>Đối chiếu</summary>

Từ biểu thức **ban đầu**, mẫu số \(x-1\) yêu cầu \(x\ne1\). Trên miền ấy, \(\dfrac{(x-1)(x+1)}{x-1}=x+1\). Nhưng phép rút gọn chỉ hợp lệ khi \(x-1\ne0\), nên tập xác định của \(f\) vẫn là \(\mathbb R\setminus\{1\}\). Biểu thức mới \(x+1\), nếu được định nghĩa riêng, có miền rộng hơn; nó không tự làm thay đổi miền ban đầu của \(f\).

</details>

### DRAFT-T1-M1-APP03 · Căn bậc hai nằm ở mẫu

So sánh tập xác định của \(\displaystyle g(x)=\frac1{\sqrt{5-x}}\) với \(\displaystyle h(x)=\sqrt{5-x}\). Mỗi tập có nhận \(x=5\) không?

<details><summary>Đối chiếu</summary>

\(g\): \(5-x>0\), nên \(D_g=(-\infty,5)\), loại 5. \(h\): \(5-x\ge0\), nên \(D_h=(-\infty,5]\), nhận 5. Sai lầm thường gặp là dùng dấu \(\ge\) cho căn dù căn đang ở mẫu.

</details>

### DRAFT-T1-M1-APP04 · Công thức toán và điều kiện thực tế

Một cửa hàng thu 8 nghìn đồng phí xử lý đơn và 12 nghìn đồng cho mỗi vé. Mỗi đơn phải có ít nhất một vé và tối đa 6 vé, chỉ nhận số vé nguyên. Viết tập xác định và tập giá trị của \(C(n)=8+12n\). Có được thay \(n=2{,}5\) để dự báo chi phí mua 2,5 vé hay không?

<details><summary>Đối chiếu</summary>

\(D=\{1,2,3,4,5,6\}\); \(T=\{20,32,44,56,68,80\}\) (nghìn đồng). Về đại số tính \(C(2{,}5)=38\) được, nhưng đầu vào đó **không thuộc bài toán** đã mô tả nên không dùng làm câu trả lời thực tế.

</details>

## Nhóm B · Kết hợp điều kiện, miền và đồ thị

### DRAFT-T1-M1-APP05 · Hai điều kiện giao nhau

Xét \(\displaystyle q(x)=\frac{\sqrt{4-x^2}}{x-1}\). Hãy xác định miền và quyết định có được dùng từng giá trị \(-2,0,1,2,3\) không. Với giá trị hợp lệ, tính kết quả.

<details><summary>Đối chiếu</summary>

\(-2\le x\le2,\ x\ne1\), nên \(D=[-2,1)\cup(1,2]\). \(q(-2)=0\), \(q(0)=-2\), \(q(2)=0\); \(q(1)\) và \(q(3)\) không xác định. Tại 1 lỗi do **mẫu**, tại 3 lỗi do **căn**. Có thể dùng hình SVG và Lab D5 để tự đối chiếu tình huống biên.

</details>

### DRAFT-T1-M1-APP06 · Ba ràng buộc trong một biểu thức

Xét \(\displaystyle r(x)=\frac{\sqrt{x+2}}{(x-1)(x-3)}\). Tìm \(D\), rồi cho biết \(-2,1,3,4\) có thuộc miền hay không.

<details><summary>Đối chiếu</summary>

\(\sqrt{x+2}\) yêu cầu \(x\ge-2\); mẫu khác 0 yêu cầu \(x\ne1\), \(x\ne3\). Vậy \(D=[-2,+\infty)\setminus\{1,3\}\). Nhận \(-2\) và 4; loại 1 và 3. Không được loại \(-2\) chỉ vì tử có căn: căn bằng 0 ở **tử** là hợp lệ.

</details>

### DRAFT-T1-M1-APP07 · Tập giá trị đổi khi miền đổi

Với \(p(x)=(x-1)^2+2\), hãy tìm tập giá trị nếu (a) \(D=\mathbb R\), (b) \(D=[0,2]\). Giải thích vì sao hai tập khác nhau dù công thức y hệt.

<details><summary>Đối chiếu</summary>

(a) \(T=[2,+\infty)\). (b) Vì \(-1\le x-1\le1\) nên \(0\le(x-1)^2\le1\) và \(T=[2,3]\). Hai cận đạt tại \(x=1\) và \(x=0\) hoặc 2. Mọi \(y\in[2,3]\) đều đạt được bằng cách chọn \(x=1+\sqrt{y-2}\in[1,2]\). Miền bị thu hẹp nên các đầu ra lớn hơn 3 không còn xuất hiện.

</details>

## Nhóm C · Tự luận giải thích (Written candidate)

### DRAFT-T1-M1-WR01 · Phản biện một kết luận sai

Một bạn viết: “Vì \(\sqrt{x-1}\) xác định khi \(x\ge1\), nên \(\displaystyle\frac1{\sqrt{x-1}}\) cũng xác định khi \(x\ge1\)”. Em hãy giải thích lỗi, tìm tập xác định đúng và đưa ra một giá trị tại biên để kiểm chứng.

<details><summary>Đối chiếu và thang điểm đề xuất</summary>

**Lời giải:** Với mẫu \(\sqrt{x-1}\), cần đồng thời \(x-1\ge0\) để có căn và \(\sqrt{x-1}\ne0\) để mẫu không bằng 0. Hai điều kiện tương đương \(x-1>0\), tức \(D=(1,+\infty)\). Tại \(x=1\), mẫu bằng 0 nên biểu thức không xác định.

**Rubric dự kiến (3 điểm, chưa canonical):** 1 điểm nêu rõ vì sao căn ở mẫu không được bằng 0; 1 điểm suy ra đúng \(x>1\) và tập \(D\); 1 điểm đối chiếu được \(x=1\) làm phản ví dụ cho cách lập luận sai. Không thưởng điểm cho câu trả lời đúng nhưng thiếu giải thích nếu câu hỏi yêu cầu phản biện.

</details>

### DRAFT-T1-M1-WR02 · Dùng miền để bác bỏ một dự đoán

Một bạn xét \(p(x)=(x-1)^2+2\) và kết luận “giá trị có thể rất lớn vì \(x\) có thể càng lúc càng xa 1”. Hãy đánh giá lời nói khi miền là (a) \(\mathbb R\), (b) \([0,2]\). Trình bày cách tìm tập giá trị trong trường hợp (b).

<details><summary>Đối chiếu và thang điểm đề xuất</summary>

Trên \(\mathbb R\), nhận xét đúng vì \((x-1)^2\) có thể lớn tùy ý. Trên \([0,2]\), ta có \(|x-1|\le1\) nên \(0\le(x-1)^2\le1\), dẫn tới \(2\le p(x)\le3\). Tất cả giá trị trong đoạn \([2,3]\) đều đạt được, do đó \(T=[2,3]\). Không được chuyển kết luận về miền \(\mathbb R\) sang miền bị giới hạn.

**Rubric dự kiến (4 điểm, chưa canonical):** 1 điểm nêu đúng trường hợp (a); 1 điểm nêu được ràng buộc \(|x-1|\le1\); 1 điểm suy ra \(2\le p(x)\le3\); 1 điểm xác nhận hai cận và các giá trị trung gian được nhận. Đây là bài tự luyện có thể tự đối chiếu, **không** tạo đánh giá điểm thành thạo.

</details>

---

## Ma trận nguồn dự kiến, CHƯA CANONICAL

| DRAFT ID | Mức | Outcome candidate | Vai trò đề xuất |
|---|---|---|---|
| APP01 | nhận biết | quy tắc đơn trị, bảng giá trị | TOPIC_PRACTICE |
| APP02–03 | thông hiểu | miền giữ nguyên khi rút gọn; căn ở mẫu | TOPIC_PRACTICE |
| APP04 | vận dụng | miền gắn bối cảnh thực tế | TOPIC_PRACTICE |
| APP05–06 | vận dụng | giao nhiều điều kiện, điểm biên | TOPIC_PRACTICE |
| APP07 | vận dụng | miền đổi kéo theo tập giá trị | TOPIC_PRACTICE |
| WR01–WR02 | giải thích | biện luận điều kiện, giới hạn kết luận | TOPIC_PRACTICE / WRITTEN candidate |

**Q15:** Trước khi đăng ký item phải đối chiếu các câu đã có trong R18, mã nguồn câu canonical SGK và thư viện Written/Anchor. Không được tạo câu mới chỉ để nhân bản cùng một câu với ID mới. Nếu trùng, giữ nguyên canonical item, thêm placement/role.

**Q16:** Toàn bộ 9 bài trên là luyện tập công khai, không RD1, không tự ghi Mastery, không hiện đáp án của RD1. **Q18:** SHA/receipt review targeted chưa có, trạng thái HOLD.
