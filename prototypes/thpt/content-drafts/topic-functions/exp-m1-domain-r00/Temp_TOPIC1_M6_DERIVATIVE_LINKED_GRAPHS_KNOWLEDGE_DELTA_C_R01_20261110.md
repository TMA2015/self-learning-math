# Chuyên đề 1 · M6 — Khi đồ thị và đạo hàm kể cùng một câu chuyện

**Vị trí:** Kiến thức → M6, sau ý nghĩa thương sai phân và trước bài luyện tập về tiếp tuyến. **Loại nguồn:** bổ sung \`DELTA_C\`, chưa thay canonical R18. **Outcome liên quan:** \`TOP-FUNC-M6-O01\` (tốc độ tức thời), \`TOP-FUNC-M6-O03\` (cát tuyến–tiếp tuyến), liên hệ sang M7 (dấu đạo hàm và cực trị). Các ví dụ gốc, hình B31-01/B31-02 và item bank cũ được dùng chung, không chép nhân bản.

## Vì sao cần nhìn cả hai đồ thị?

Khi nhìn một đường cong đang đi lên, ta thường nói “hàm đang tăng”; nhưng phát biểu này mới mô tả hình dạng, chưa cho biết **nó tăng nhanh hay chậm tại một thời điểm**. Đạo hàm giúp đo điều đó. Điểm quan trọng là đạo hàm không chỉ xuất hiện trong bảng công thức: từ một điểm trên đồ thị, ta có thể nhìn thấy đạo hàm bằng cách cho điểm thứ hai tiến sát lại và quan sát **độ dốc của đường thẳng qua hai điểm**.

Chọn \(M(x_0;f(x_0))\) và điểm lân cận \(N(x_0+h;f(x_0+h))\), với \(h\ne0\). Cát tuyến \(MN\) có hệ số góc

\[
k_h=\frac{f(x_0+h)-f(x_0)}{h}.
\]

Ở đây h có thể **dương** hoặc **âm**: h dương đặt N về bên phải M, h âm đặt N về bên trái. Nếu hai cách tiến đến M cho cùng một giới hạn hữu hạn, ta có đạo hàm

\[
f'(x_0)=\lim_{h\to0} k_h.
\]

Đường thẳng qua M mang hệ số góc đó là tiếp tuyến, có phương trình \(y-f(x_0)=f'(x_0)(x-x_0)\). Chú ý: không phải cứ lấy \(h=0\) vào thương sai phân là tính được đạo hàm, vì khi đó mẫu bằng 0.

## Mô hình tương tác — đọc hình như thế nào?

[Mở nguồn mô hình D5: Cát tuyến, tiếp tuyến và đồ thị đạo hàm](Temp_TOPIC1_M6_TANGENT_DERIVATIVE_TWO_GRAPHS_D5_R00_20261110.html)

*Đây là mô hình AUTHORING để đối chiếu; liên kết tới file nguồn độc lập trong cùng thư mục, chưa phải bản nhúng website.*

Khung bên trái cho thấy đồ thị \(y=f(x)\) (xanh dương), cát tuyến qua M và N (cam nét đứt) và tiếp tuyến tại M (xanh lá). Khung bên phải cho thấy đồ thị \(y=f'(x)\), điểm cam tương ứng với hoành độ \(x_0\) đang chọn. **Đừng chỉ quan sát đường thẳng quay:** hãy so giá trị hệ số góc cát tuyến và đạo hàm hiển thị bên dưới. Khi thu nhỏ \(|h|\), hai số phải tiến gần nhau.

Để hình không che mất những điểm quan trọng, mô hình tự đổi thang tung độ khi chuyển giữa \(f(x)=x^3/3-x\) và \(f(x)=x^3\). Một điểm ra ngoài khung không có nghĩa là hàm không xác định: đó chỉ có thể là lỗi chọn thang hình.

## Ví dụ 1 — Đạo hàm bằng 0 và hàm thật sự đổi chiều

Chọn \(f(x)=x^3/3-x\), có \(f'(x)=x^2-1\). Khi \(x_0=1\), đạo hàm bằng 0: tiếp tuyến nằm ngang. Nhưng vì sao ở đây hàm có **cực tiểu**?

Khi \(x\) nằm giữa \(-1\) và \(1\), \(x^2-1<0\) nên hàm giảm; khi \(x>1\), \(x^2-1>0\) nên hàm tăng. Vì hàm chuyển **từ giảm sang tăng** tại \(x=1\), đây là cực tiểu địa phương. Tương tự, \(x=-1\) là cực đại địa phương do dấu đạo hàm chuyển từ dương sang âm.

Tại \(x_0=1\), nếu lấy \(h>0\), cát tuyến có độ dốc hơi dương; nếu lấy \(h<0\), độ dốc hơi âm. Cả hai phía cùng tiến về 0 khi \(h\to0\). Ta có thể tự kiểm bằng khai triển:

\[
\frac{f(1+h)-f(1)}{h}=h+\frac{h^2}{3},\qquad h\ne0.
\]

Giới hạn bằng 0, đúng với \(f'(1)=0\). Tuy nhiên, **chỉ biết giới hạn bằng 0 chưa giải thích được cực tiểu**: kết luận cực trị cần xét dấu đạo hàm hoặc so giá trị hàm ở lân cận.

## Ví dụ 2 — Tiếp tuyến nằm ngang nhưng không có cực trị

Chọn \(g(x)=x^3\). Ta có \(g'(x)=3x^2\), do đó \(g'(0)=0\): tiếp tuyến tại gốc O nằm ngang. Nếu chỉ nhớ câu “đạo hàm bằng 0 thì cực trị”, ta sẽ dự đoán sai.

Thật vậy, khi \(x<0\), \(g(x)<0\); khi \(x>0\), \(g(x)>0\). Hàm vẫn tăng khi đi qua O. Về dấu đạo hàm, \(g'(x)>0\) ở hai phía của 0 (trừ tại chính 0), không có chuyển từ tăng sang giảm hoặc ngược lại. Vì vậy O **không** là cực trị.

Thương sai phân tại O bằng

\[
\frac{g(h)-g(0)}{h}=h^2 \quad (h\ne0).
\]

Dù h dương hay âm, hệ số góc cát tuyến đều **dương** và tiến về 0. Nhìn cả hai khung giúp ta thấy điều mà một giá trị \(g'(0)=0\) không thể tự nói hết: **đạo hàm bằng 0 là điều kiện cần ở cực trị trong của hàm khả vi, nhưng không phải điều kiện đủ**.

## Vận dụng — Cùng đạo hàm bằng 0, hai kết luận khác nhau

Xét \(p(x)=x^3\) và \(q(x)=x^4\). Cả hai đều có đạo hàm bằng 0 tại \(x=0\). Hãy giải thích bằng dấu đạo hàm hoặc bằng cách so giá trị hàm gần 0: hàm nào có cực trị tại 0, hàm nào không? Hãy nêu lý do **trước khi** mở đối chiếu.

<details><summary>Đối chiếu</summary>

Với \(p(x)=x^3\), ta có \(p'(x)=3x^2>0\) ở cả hai phía của 0 (trừ tại 0), nên hàm tăng qua 0 và không có cực trị.

Với \(q(x)=x^4\), \(q(x)\ge0=q(0)\) với mọi x; vì vậy \(x=0\) là điểm **cực tiểu**, đồng thời là điểm đạt giá trị nhỏ nhất trên toàn \(\mathbb R\). Nếu dùng dấu đạo hàm: \(q'(x)=4x^3<0\) khi x<0 và >0 khi x>0, nên hàm đổi từ giảm sang tăng.

**Bài học:** cùng có tiếp tuyến nằm ngang nhưng bản chất hai điểm rất khác. Chỉ giá trị \(f'(0)=0\) chưa đủ để quyết định cực trị; cần xét sự thay đổi ở hai phía.

</details>

**Nếu em đang nhầm:** Nếu chưa phân biệt độ dốc cát tuyến với tiếp tuyến, quay lại M6.1 và giảm dần \(|h|\). Nếu chưa rõ điều kiện cực trị, đọc lại M7.1 về dấu đạo hàm trước và sau điểm đang xét. Hoạt động Vận dụng này **công khai, tự đối chiếu**, không dùng làm câu Tự kiểm tra độc lập hoặc ghi Skill Mastery.

---

**AUTHORING provenance:** học liệu bổ sung do tác giả tự biên soạn, lấy mô hình #4 của file 10-in-1 làm ý tưởng, đã sửa ngộ nhận “\(f'=0\) ⇒ cực trị”. Mạch cát tuyến/đạo hàm và hình nền được tái sử dụng từ canonical R18 (blob \`2340ea4975b37a457363eea59dd617070934983c\`), không sửa snapshot đó. Đây là \`DELTA_C_ACADEMIC_MATERIAL\` **chưa independent Academic/PED PASS**, cần review đúng phần chịu ảnh hưởng trước khi promoted.
