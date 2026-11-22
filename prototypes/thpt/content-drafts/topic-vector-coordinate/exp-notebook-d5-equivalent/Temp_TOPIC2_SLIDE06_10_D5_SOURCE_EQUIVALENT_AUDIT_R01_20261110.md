# AUTHORING · Chuyên đề 2 — Chọn lọc slide 6–10 và hình D5 tương đương R01 (10/11/2026)

**Phạm vi:** chỉ đọc hình, chọn lọc, kiểm toán và bổ sung một hình minh họa **tương đương toán học** với ví dụ đã PASS ở Phần 6/7. **Không chỉnh sửa** canonical R02, private 42 RD1, ngân hàng item, đáp án, rubric, hoặc nguồn reviewer. **Nhánh:** AUTHORING #793; chưa handoff RELEASE, không merge/deploy.

## Nguồn đã PASS bất biến

- \`Temp_TOPIC_VECTOR_COORDINATE_FULL_PUBLIC_R02_20261108.md\`, Git blob \`29669e6de80cba50a11bb8574220c6a19b4f7138\` trên PR #793, đủ 7/7 phần, 56 outcome, 114 item public ID; Academic/PED PASS chỉ đúng snapshot.
- Phần 6/7 của R02 dùng SGK KNTT Toán 12 tập một Chương II B06–B08, trang **in 45–72 / PDF 47–74 (1-based)**; SBT G12 tập một **in 38–54 / PDF 36–52**, **offset khác nhau**. Không suy trang SGK từ số PDF của SBT.
- R02 Phần 6, ví dụ D2 hiện có: \(A(1;-2;3)\), \(B(4;0;-1)\), \(\overrightarrow{AB}=(3;2;-4)\), \(AB=\sqrt{29}\). Nội dung này đã được reviewer xét; **hình mới chỉ minh họa đúng ví dụ cũ**, không thêm outcome, item, đáp án, rubric hay điều kiện mới.

## Bằng chứng kiểm toán 5 slide Notebook

Bản gốc: archive \`Notebook chuyên đề.zip\`, \`22 chuyên đề/Decoding_Reality.pptx\`, 15 slide mỗi slide là một ảnh raster toàn trang. Chủ dự án đã ưu tiên phong cách hình trực quan nhưng website sẽ dùng giao diện **sáng**; do đó có thể chọn ý tưởng và **dựng lại thành SVG/Canvas có chữ, trục rõ** mà không dùng nguyên ảnh nền đen chứa nhiều chữ.

| Slide | Tính năng minh họa thực | Phần đã duyệt phù hợp | Quyết định và điểm cần kiểm |
|---:|---|---|---|
| **6** | Hình hộp không gian + một hình chóp, đường cao, ý tưởng khoảng cách | **Phần 5**, hình học không gian và hình chiếu | Chỉ tái sử dụng **quan hệ vuông góc/chiếu**, không tự suy từ bố trí đèn sprinkler thành lời giải số học |
| **7** | Hai đường thẳng chéo nhau, đoạn vuông góc chung | **Phần 5**, khoảng cách giữa hai đường chéo nhau | Ý tưởng tốt; cần dựng một ví dụ với điều kiện thật hai đường **chéo nhau** và đoạn nối thực sự vuông góc **cả hai**, không gọi mọi đoạn nối là ngắn nhất |
| **8** | Hệ trục Oxyz, điểm/vectơ trong 3D | **Phần 6**, cách đặt ba trục và điểm có ba tọa độ | Ý tưởng tốt, nhưng **không đo độ dài/góc từ phối cảnh** và không copy nguyên cách đặt ký hiệu các trục nếu hình không rõ; dựng trục có nhãn đúng \(\vec i,\vec j,\vec k\) |
| **9** | Hai điểm A,B, vectơ dịch chuyển, khoảng cách số | **Phần 6**, hiệu tọa độ và độ dài | Dữ liệu trên slide đúng toán: A(2;1;0,5), B(−1;−1,5;0,8) ⇒ AB=(−3;−2,5;0,3), độ dài \(\sqrt{15,34}\approx3,9166\), làm tròn **3,92**. Nhưng phải nói **đơn vị tọa độ là km** mới ghi “km”; ảnh phối cảnh có nhãn trục có thể gây lẫn, nên cần dựng lại hình dễ đọc |
| **10** | So sánh suy luận tổng hợp với biểu diễn tọa độ | **Phần 5–7**, hai cách chọn phương pháp | Giữ ý tưởng, không gán mô hình tọa độ thay thế **mọi** lập luận hình học; giải thích giới hạn mỗi cách và điểm mạnh của kết hợp |

**Không dùng nguyên ảnh PPTX như SVG chỉnh sửa được:** PowerPoint chỉ chứa raster toàn trang. Khi đưa lên website, sử dụng hình chọn lọc/được vẽ lại có truy nguồn, không kéo nguyên slide để chữ nhỏ và tương phản thấp trên điện thoại. Không tạo quota bắt buộc mọi bài phải có ảnh.

## Hình minh họa mới đã tạo có khả năng chia sẻ

- File thật: \`Temp_FIG_TOPIC2_P06_AB_COMPONENTS_S1_EQUIVALENT_R01_20261110.svg\`.
- Chỉ biểu diễn **cùng ví dụ đã duyệt** \(A(1;-2;3)\), \(B(4;0;-1)\), \(\overrightarrow{AB}=(3;2;-4)\), \(AB=\sqrt{29}\) của canonical R02 Phần 6/7. Ba thanh màu nhạt tách độ dời **+3 theo x, +2 theo y, −4 theo z** để học sinh không nhầm phép cộng đại số với **căn tổng bình phương**.
- Không vẽ một cảnh phối cảnh như thể có thể dùng thước đo độ dài AB từ ảnh. Không tô màu đen. Các trục biểu diễn thành phần được tách để dễ đọc, có \`<title>\` và \`<desc>\` cho khả năng tiếp cận.
- Đề xuất vị trí: sau dòng giải thích quy tắc \(\overrightarrow{AB}=B-A\) và trước Ví dụ D2 về độ dài trong **Phần 6 – Kiến thức**, không tạo mục học thứ tư và không thêm Core Topic.
- **Delta phân loại:** \`DELTA_B_SOURCE_EQUIVALENT_CANDIDATE\` (hình **mới** minh họa dữ kiện/đáp án cũ không thay toán), cần tác giả QA hình và lưu bằng chứng tương đương trước khi xem là Delta B đã đóng. Nếu reviewer phát hiện hình khiến điều kiện/suy luận khác R02 thì nâng \`DELTA_C\` và review phần chịu ảnh hưởng; không tự nhận đã PASS chỉ vì hình đẹp.

### Lời dẫn hỗ trợ cho vị trí hình (không thay canonical R02)

> Trong không gian, đi từ A đến B có thể được mô tả bằng ba thay đổi theo ba phương vuông góc. Trong ví dụ đã học, trục x thay đổi +3 đơn vị, trục y thay đổi +2, còn trục z thay đổi −4. Số âm cho biết hướng dịch chuyển theo trục z, **không phải khoảng cách âm**. Vì ba phương tọa độ vuông góc nhau, định lý Pitago trong không gian cho \(AB=\sqrt{3^2+2^2+(-4)^2}=\sqrt{29}\). Hãy đọc kỹ dấu trong vectơ rồi tính độ dài bằng ba bình phương; không cần lấy thước đo độ dài từ hình chiếu xiên.

Lời dẫn này là diễn giải **cùng chứng cứ nguồn đã duyệt**, không đăng ký một ví dụ/câu hỏi canonical mới.

## QA toán và đường tiếp theo

- \(\sqrt{3^2+2^2+(-4)^2}=\sqrt{29}\approx5{,}38516\) — đúng với bài gốc R02.
- \(\sqrt{(-3)^2+(-2{,}5)^2+(0{,}3)^2}=\sqrt{15{,}34}\approx3{,}91663\) — số 3,92 trong slide 9 **đúng**, nhưng đơn vị cần ghi rõ.
- Hình SVG là **bản thảo AUTHORING**, chưa QA responsive/thực máy, chưa được reviewer thẩm định Q07/AP3; chưa cập nhật reference trong bản R02 bất biến.
- Khi đủ chứng cứ \`DELTA_B_SOURCE_EQUIVALENT\`, chỉ giao hình theo \`FIG_ID\` một nguồn + placement dùng chung. Nếu có thay đổi học thuật thì \`DELTA_C\`, không tự làm âm thầm.

**STATE:** \`5_SLIDES_CURATED\` · \`S1_EQUIVALENT_SVG_DRAFTED\` · \`CANONICAL_R02_UNCHANGED\` · \`Q07_IMAGE_QA_PENDING\` · \`NO_CONTENT_READY\` · \`NO_MERGE_DEPLOY\`.
