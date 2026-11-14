# Chuyên đề 2 · Phần 3 — Hình chiếu có hướng và dấu của tích vô hướng

**Vị trí:** Kiến thức → Phần 3 (Tọa độ vectơ và tích vô hướng trong mặt phẳng), sau định nghĩa tích vô hướng và trước các ví dụ về vuông góc. **Outcome:** \`TOPIC-VEC-P03-O06\` và \`TOPIC-VEC-P03-O07\`. **Trạng thái:** học liệu bổ sung AUTHORING chưa được nhập vào nguồn R02 đã PASS.

## Vì sao tích vô hướng có thể là một số âm?

Hãy hình dung hai người cùng kéo một chiếc thùng. Nếu cả hai kéo gần cùng hướng, lực của người thứ hai hỗ trợ hướng chuyển động của thùng. Nếu người thứ hai kéo ngược về phía sau, lực đó cản trở chuyển động. Ta muốn có một phép tính không chỉ nói hai lực mạnh đến mức nào, mà còn cho biết **chúng hỗ trợ hay chống lại nhau theo một hướng đã chọn**.

Với hai vectơ \(\vec u,\vec v\) khác vectơ-không và góc giữa chúng là \(\alpha\in[0^\circ,180^\circ]\), hình chiếu của \(\vec v\) lên **đường thẳng có hướng** của \(\vec u\) có giá trị có dấu \(|\vec v|\cos\alpha\). Tại góc nhọn, giá trị này dương; tại góc vuông, nó bằng 0; tại góc tù, nó âm. Nhân tiếp với độ dài \(|\vec u|\), ta được

\[
\vec u\cdot\vec v=|\vec u|\,|\vec v|\cos\alpha.
\]

**Tích vô hướng là một số thực**, không phải đường chéo của hình bình hành. Đường chéo ấy là \(\vec u+\vec v\), tức kết quả của phép cộng vectơ, là một đối tượng khác hẳn.

## Mô hình tương tác — hình chiếu, góc và hình bình hành

[Mở mô hình HTML: Vectơ, hình chiếu và tích vô hướng](Temp_TOPIC2_VECTOR_DOT_PRODUCT_PROJECTION_LAB_D5_R00_20261110.html)

*File hiện là học liệu AUTHORING độc lập trong thư mục nguồn, chưa phải bản nhúng website.*

Trên hình, \(\vec u\) màu xanh dương hướng sang phải, \(\vec v\) màu xanh lá có thể quay và thay đổi độ dài. Điểm H màu cam là chân đường vuông góc hạ từ đầu mút \(\vec v\) xuống đường thẳng chứa \(\vec u\). Khi góc \(\alpha\) lớn hơn \(90^\circ\), chân H nằm **bên trái gốc O**, chứ không mất đi. Đường nét đứt còn lại dựng hình bình hành cho phép cộng hai vectơ; hãy phân biệt nó với đường hình chiếu.

Dùng trước ba nút: **0° (cùng hướng)**, **90° (vuông góc)** và **180° (ngược hướng)**. Sau đó thử góc 60° và 120°, giữ hai độ dài là 4 và 3. Em sẽ thấy:

| Góc \(\alpha\) | Hình chiếu có hướng \(|\vec v|\cos\alpha\) | Tích vô hướng \(\vec u\cdot\vec v\) |
|---:|---:|---:|
| 60° | 1,5 | 6 |
| 90° | 0 | 0 |
| 120° | −1,5 | −6 |

Số âm ở hàng 120° **không có nghĩa một vectơ có độ dài âm**. Độ dài luôn không âm; dấu âm đến từ cos của góc tù, biểu diễn hướng chiếu ngược chiều \(\vec u\).

## Khi nào được nói hai vectơ vuông góc?

Nếu \(\vec u\ne\vec0\) và \(\vec v\ne\vec0\), ta có

\[
\vec u\cdot\vec v=0\quad\Longleftrightarrow\quad\cos\alpha=0\quad\Longleftrightarrow\quad\alpha=90^\circ.
\]

Điều kiện **hai vectơ khác 0** rất quan trọng: khi một vectơ là \(\vec0\), tích vô hướng bằng 0 nhưng không có góc xác định giữa hai vectơ để gọi là \(90^\circ\). Mô hình đã giới hạn độ dài các vectơ ở giá trị dương để không tạo hình giả về một góc của vectơ-không.

## Vận dụng — cùng độ dài, khác hướng

Giữ \(|\vec u|=4\) và \(|\vec v|=3\). Một bạn dự đoán rằng nếu chỉ thay đổi góc giữa hai vectơ, tích vô hướng không thể âm vì \(4\cdot3=12>0\). Em hãy chọn góc 120°, quan sát vị trí H và nêu lý do dự đoán đó sai.

<details><summary>Đối chiếu</summary>

Ở góc 120°, \(\cos120^\circ=-\tfrac12\), nên thành phần chiếu có hướng của \(\vec v\) bằng \(3\cdot(-\tfrac12)=-1{,}5\). H nằm bên trái O vì giá trị hình chiếu âm. Tích vô hướng là \(4\cdot3\cdot(-\tfrac12)=-6\). Bạn học đã bỏ mất yếu tố **\(\cos\alpha\)**, tức bỏ qua sự khác nhau về hướng.

</details>

**Nếu em nhầm:** Nếu hình bình hành làm em tưởng tích vô hướng cũng là vectơ, quay lại Phần 2 về phép cộng. Nếu em chưa hiểu chữ “hình chiếu có hướng”, đặt góc 0°, 90°, 180° và đọc lại dấu của tọa độ H. Nếu một vectơ bằng 0, không tính góc bằng cách chia cho tích hai độ dài.

---

**Truy nguồn AUTHORING:** nền lý thuyết và outcome dùng lại từ canonical R02 \`29669e6de80cba50a11bb8574220c6a19b4f7138\`; mã mô hình mới \`Temp_TOPIC2_VECTOR_DOT_PRODUCT_PROJECTION_LAB_D5_R00_20261110.html\`; ý tưởng chọn lọc từ mô hình #6 của tệp 10-in-1. Không tạo item canonical mới, không dùng câu có lời giải công khai cho Tự kiểm tra. Mức delta có thay đổi giải thích sư phạm cần được reviewer phân loại và phản biện đúng phần trước khi \`CONTENT_READY\`.
