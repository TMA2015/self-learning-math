# AUTHORING D5 R01 — Hồ sơ kiểm nội dung hình và mô hình M1–M3

**Scope:** Chỉ 3 SVG và 3 HTML độc lập \`Temp_*\` thuộc nhánh AUTHORING PR #801. Đây là **nguồn chứng cứ để reviewer đối chiếu với hình/mã thực**, không phải sơ đồ giao diện mới và không phải Academic/PED PASS. Cả 3 mô hình phục vụ phần **Kiến thức** hoặc **Vận dụng công khai**; không có ghi điểm, không có đề RD1.

## M1 · Căn và mẫu phải cùng hợp lệ

**Nguồn kiến thức:** \(h(x)=\dfrac{\sqrt{4-x^2}}{x-1}\). Từ \(4-x^2\ge0\) suy ra \(x\in[-2,2]\). Từ \(x-1\ne0\) suy ra \(x\ne1\). Phải lấy **giao** hai điều kiện, do đó

\[
D_h=[-2,1)\cup(1,2].
\]

| Chọn \(x\) | Căn có nghĩa | Mẫu khác 0 | Có thuộc \(D_h\)? | Kết quả khi có nghĩa |
|---:|---|---|---|---|
| −3 | không | có | không | không xác định |
| −2 | có (căn bằng 0) | có | **có** | \(h(-2)=0\) |
| 0 | có | có | **có** | \(h(0)=-2\) |
| 1 | có | **không** | không | không xác định |
| 2 | có (căn bằng 0) | có | **có** | \(h(2)=0\) |
| 3 | không | có | không | không xác định |

**SVG \`Temp_FIG_TOPIC1_M1_DOMAIN_INTERSECTION_R00.svg\`:** đường số đầu diễn giải điều kiện căn, đường số thứ hai nhắc điểm 1 bị loại, đường số cuối có điểm đặc tại −2, 2 và vòng rỗng tại 1. Không tô khối tối. **HTML \`Temp_TOPIC1_M1_DOMAIN_LAB_D5_R00.html\`:** slider \(x\in[-3,3]\), các nút −2,0,1,2,3 và phản hồi phân tích hai điều kiện trước khi tính; tại điểm không hợp lệ phải ghi “không xác định”, **không** ghi sai/0. Kiểm riêng hai đầu mút.

**Ngộ nhận D6:** loại nhầm điểm có căn bằng 0; chỉ kiểm căn mà quên mẫu; coi số không hợp lệ vẫn có một giá trị đầu ra.

## M2 · Chấm rỗng/đặc giải thích điều kiện nhánh

\[
f(x)=\begin{cases}x+1,&x<1,\\3,&x\ge1.\end{cases}
\]

| \(x\) | Nhánh phải dùng | \(f(x)\) | Điểm mốc cần giải thích |
|---:|---|---:|---|
| 0,99 | \(x<1\) | 1,99 | nhánh trái |
| 1 | **\(x\ge1\)** | **3** | **chấm đặc** \((1;3)\), **chấm rỗng** \((1;2)\) |
| 1,01 | \(x\ge1\) | 3 | nhánh phải |
| 2 | \(x\ge1\) | 3 | nhánh phải |

**SVG \`Temp_FIG_TOPIC1_M2_PIECEWISE_ENDPOINTS_R00.svg\`:** không được nối hai nhánh bằng một đoạn “cho đẹp”; ở \(x=1\) chỉ \((1;3)\) thuộc đồ thị. **HTML \`Temp_TOPIC1_M2_PIECEWISE_LAB_D5_R00.html\`:** khi x trượt qua 1, điểm di động có thể chuyển từ gần \((1;2)\) sang \((1;3)\), không có giá trị nằm giữa tại cùng \(x=1\). Trước khi kết luận đồng biến toàn miền, phải so mọi cặp trong miền; riêng \(f(1)=f(2)\) bác bỏ đồng biến **nghiêm ngặt** trên \(\mathbb R\).

**Ngộ nhận D6:** dùng nhánh \(x<1\) tại \(x=1\); tô đặc cả hai điểm ở cùng hoành độ; cho rằng cả hàm tăng nghiêm ngặt chỉ vì một nhánh tăng.

## M3 · Trị tuyệt đối đổi đầu vào khác đổi đầu ra

Với \(f(x)=x^2-4x+3=(x-2)^2-1\):

\[
g(x)=|f(x)|,\qquad k(x)=f(|x|).
\]

- \(g\) **giữ hoành độ** và đổi các **tung độ âm** thành dương: phần \(1<x<3\) lật lên qua \(Ox\), hai nghiệm \(1\), \(3\) giữ nguyên.
- \(k\) giữ nửa \(x\ge0\) của \(f\) rồi đối xứng nửa đó qua \(Oy\); \(k(-x)=k(x)\) khi các đầu vào hợp lệ.
- Với tập xác định bất kỳ \(D_f\), miền của \(g\) là \(D_f\), còn miền của \(k\) là \(\{x:|x|\in D_f\}\). Không tự giả định miền luôn là toàn \(\mathbb R\).

| \(x\) | \(f(x)\) | \(g(x)=|f(x)|\) | \(k(x)=f(|x|)\) |
|---:|---:|---:|---:|
| −2 | 15 | 15 | −1 |
| 1 | 0 | 0 | 0 |
| 2 | −1 | 1 | −1 |
| 3 | 0 | 0 | 0 |

Với \(g(x)=0\), \(x=1\) hoặc \(3\). Với \(k(x)=0\), \(x=\pm1,\pm3\). Cần giải đúng điều kiện \(u=|x|\ge0\) nếu đặt ẩn phụ.

**SVG \`Temp_FIG_TOPIC1_M3_ABSOLUTE_GRAPH_COMPARE_R00.svg\`:** hai ô dùng **cùng thang x/y**, có đường \(f(x)\) gốc nét đứt và mỗi phép biến đổi màu riêng; không tô mảng kín; điểm/đường đều nhỏ. **HTML \`Temp_TOPIC1_M3_GRAPH_TRANSFORM_LAB_D5_R00.html\`:** chọn hệ số \(a,b,c\), bật/tắt \(g\) và \(k\). Khi \(a=0\), **không** dùng công thức đỉnh \(-b/(2a)\); hiển thị \(f(x)=bx+c\) nếu \(b\ne0\) hoặc \(f(x)=c\) nếu \(b=0\). Hiển thị đúng \(\Delta=b^2-4ac\) và số nghiệm **chỉ khi \(a\ne0\)**. Không dùng \(a=0,01\) để giả vờ là parabol tại \(a=0\).

**Ngộ nhận D6:** hai công thức có dấu \(|\cdot|\) nên nghĩ là một; mất kiểm miền khi lấy \(|x|\); dùng đỉnh cho hàm tuyến tính; chọn đỉnh ngoài miền bài toán.

## D5 source-integrity / kiểm nhận khi đưa lên website

1. Khi review, **phải đối chiếu chính file SVG và HTML**, không chỉ nhận chứng cứ mô tả trong Markdown này; đồ thị Canvas có thể sai do lập trình dù công thức văn bản đúng.
2. Ghi lại Git blob SHA của **từng file hình/lab** và mã snapshot reviewer dùng; **đừng** lấy SHA này làm \`content_version\` item.
3. Bắt buộc QA MathJax, hình trên điện thoại, trục/tỉ lệ, màu và stroke, đầu mút, slider kéo/cảm ứng, keyboard focus, screen reader \`title/desc\`, performance và CSP phù hợp khi RELEASE tích hợp; chưa tự tuyên bố AP1–AP5 đã đạt trên website.
4. Cả ba mô hình đều \`PUBLIC_FORMATIVE_ONLY\`; không có đáp án hay hint của \`TOPIC_READINESS\`, không ghi Mastery.

**STATE:** \`D5_MATH_SPEC_WRITTEN\` · \`SVG_HTML_SOURCE_PENDING_INDEPENDENT_Q07\` · \`BROWSER_RENDER_QA_PENDING\` · \`DELTA_C_ACADEMIC_MATERIAL\`.
