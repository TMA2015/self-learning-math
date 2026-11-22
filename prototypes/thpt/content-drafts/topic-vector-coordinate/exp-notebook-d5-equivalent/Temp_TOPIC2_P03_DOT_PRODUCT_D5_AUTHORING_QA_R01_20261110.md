# AUTHORING P03 · Mô hình vectơ, hình chiếu và tích vô hướng — Source/QA R01

**Ngày:** 10/11/2026 · **Nhánh:** AUTHORING #793 · **Đơn vị học:** Chuyên đề Vectơ và phương pháp tọa độ, **Phần 3/7**, \`TOPIC-VEC-P03-O06\` và \`TOPIC-VEC-P03-O07\`. Đặt **trong Kiến thức** sau giải thích tại sao tích vô hướng bằng tích hai độ dài nhân cos góc, trước Vận dụng/Đối chiếu.

## 1. Source custody / bảo toàn nghiệm thu

- Canonical R02 7/7 đã được review Academic/PED theo snapshot, file \`Temp_TOPIC_VECTOR_COORDINATE_FULL_PUBLIC_R02_20261108.md\`, blob **\`29669e6de80cba50a11bb8574220c6a19b4f7138\`**; **không sửa**.
- Trong R02 P03 đã có hai hình \`FIG-G10-B10-01\` và \`FIG-G10-B11-01\` dùng để đọc tọa độ/góc tù; nội dung giải thích hình chiếu có hướng và tích vô hướng được giữ nguyên. Mô hình bổ sung không thay stem, answer, rubric, 42 private RD1 hay Mastery.
- File 10-in-1 do chủ dự án cung cấp, SHA256 \`b303b6ed23c47f79f6f49bbb5d42288bebd5c66a6f11e509bed16dce754848db\`, mô hình số **6** là tham khảo. Bản gốc chỉ có slider độ dài/góc, chưa vẽ hình bình hành hoặc cho kéo thả như giới thiệu.
- Bản HTML nguồn AUTHORING mới: \`Temp_TOPIC2_VECTOR_DOT_PRODUCT_PROJECTION_LAB_D5_R00_20261110.html\`, Git blob **\`06ee0ce3e13cbfa92e0201dd2ee634bf1775b18e\`**.

## 2. Vì sao mô hình hữu ích để tự học?

Hai vectơ khác 0 có độ dài \(|u|\), \(|v|\) và tạo góc \(α\in[0°,180°]\). Thả đường vuông góc từ đầu mút v xuống **đường thẳng mang hướng u**. Chân chiếu H có thể ở phía trước hoặc **sau gốc O**; đại lượng chiếu **có hướng** bằng \(|v|\cos α\). Nhân với \(|u|\), ta được \(u\cdot v=|u||v|\cos α\). Tích vô hướng là **số thực**, khác với đường chéo của hình bình hành biểu diễn \(u+v\).

**D5 vừa tạo:** Canvas sáng, nền lưới mảnh, xanh dương cho u, xanh lá cho v, cam cho chân chiếu H, hình bình hành nét đứt. Cho kéo điểm mút hai vectơ bằng pointer hoặc dùng slider góc/độ dài. 3 nút thử nhanh 0°/90°/180° cho dấu tích vô hướng. Luôn giữ \(|u|,|v|\ge1\) để góc có nghĩa, không minh họa vectơ-không bằng một góc định sẵn.

**Ví dụ với \(|u|=4, |v|=3\):**
| Góc | \(\cos α\) | Chiếu có hướng của v lên u | Tích vô hướng |
|---:|---:|---:|---:|
| 0° | 1 | 3 | 12 |
| 60° | 1/2 | 1,5 | 6 |
| 90° | 0 | 0 | 0 |
| 120° | −1/2 | −1,5 | −6 |
| 180° | −1 | −3 | −12 |

**Điều kiện suy luận:** dot=0 ⇒ vuông góc **chỉ khi cả hai vectơ khác 0**. Dấu dương tương ứng góc trong [0°,90°), dấu âm tương ứng góc trong (90°,180°]. Không được lấy \(|u||v|\) thay tích vô hướng khi góc không bằng 0; không gán góc nếu một vectơ bằng 0.

### Vận dụng (chưa mint item mới)

Giữ \(|u|=4, |v|=3\). Thử \(α=120°\). Trước khi mở lời giải, giải thích vì sao phần hình chiếu H nằm bên trái O và tại sao tích vô hướng âm dù độ dài của u và v đều dương.

<details><summary>Đối chiếu</summary>

Vì \(\cos120°=-1/2\), hình chiếu có hướng của v là \(3\cos120°=-1,5\): dấu âm cho biết hình chiếu ngược chiều u, nên H nằm bên trái O. Tích vô hướng \(u\cdot v=4\cdot3\cdot(-1/2)=-6\). Giá trị âm **không** nói độ dài của vectơ nào âm; cả hai độ dài vẫn dương.

</details>

## 3. QA nội bộ

- Đã truy xuất **đúng source HTML GitHub blob** nêu trên; thực thi JavaScript trong DOM/Canvas giả lập ở bề rộng 390/820/1440 px.
- 10 điều kiện/cấu hình: 5 dấu tích vô hướng ứng với các góc 0/60/90/120/180; 3 nút preset; 1 reset; 1 thao tác pointer kéo mút v sang phía x âm; **30/30 PASS**, không JS exception.
- CSS/mã không CDN hoặc network. Lời giải thích bằng chữ ngoài Canvas và \`role=status\`/ \`aria-live\` cho phản hồi.
- **Chưa** có Chromium screenshot/UI thực trên HEAD này, chưa QA cảm ứng/screen reader thực, chưa nghiệm thu Q07/AP3 của hình mới. Mock QA chỉ cho biết logic và phép tính chạy trong môi trường mô phỏng.
- SVG đã review của P03 và item bank R02 không bị thay; nếu mô hình mới làm thay đổi đáng kể tiến trình giải thích thì \`DELTA_C\`, reviewer kiểm phần bổ sung mới, không mở lại toàn P03.

## 4. Gating

**Q01–Q14:** học sinh phải biết chiều của hình chiếu, ý nghĩa dot/cos và điều kiện vectơ khác 0. **Q15:** một canonical model/figure source có thể nhiều placement; Vận dụng trên đây không tự trở thành item_id mới. **Q16:** không dùng để ghi mastery hoặc đưa câu exposed vào private RD1. **Q18:** nếu delta C thì cần Academic/PED independent verdict + source/receipt SHA khớp trước CONTENT_READY.

**STATE:** \`MODEL6_AUTHORING_CANDIDATE\` · \`MOCKED_JS_30_OF_30_PASS\` · \`SOURCE_R02_UNCHANGED\` · \`BROWSER_RENDER_QA_PENDING\` · \`DELTA_CLASSIFICATION_HOLD\` · \`CONTENT_READY=NO\`.
