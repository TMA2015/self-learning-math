# Temp_02 — G11 ChI Bài 4: đề xuất PED1–PED6 concept-first (chưa áp dụng)

**Trạng thái:** DRAFT_NOT_ACADEMICALLY_REVIEWED · DELTA_C_PROPOSED_UNAPPLIED · A6 SYSTEM_HOLD. Đây là đề xuất dành cho reviewer, **không phải nội dung đã đưa lên website**. Không sửa đáp án, rubric, canonical ID, hình SVG, RD1 hay dữ liệu học sinh.

**Source lock:** PR tác giả #681, public whole-chapter Git blob `599d12ac7c2252001f881833c39978f94112cee4`; Academic PASS ChI tại Issue #682 chỉ áp dụng đúng snapshot cũ. Dự thảo này **không kế thừa** PED PASS và cần review targeted theo #691/#675. S1: cần reviewer đối chiếu trực tiếp SGK/SBT Toán 11 KNTT tập 1; Issue #682 ghi SBT B03 trang in 11–18, B04 19–24, cuối chương 25–30, chưa coi đó là kiểm chứng trang trực tiếp của A6.


## Mục tiêu và ranh giới delta

**Trang đích sau review:** `docs/thpt-preview/sgk/lop-11/chuong-i/bai-4.md`. Đề xuất cầu nối từ B01–B03, giải thích **vì sao phương trình lượng giác có nhiều họ nghiệm** trước khi viết công thức, cùng Tự thử trước Core. Không sửa sáu ví dụ đã duyệt, canonical ID, D4/D6, đáp án hoặc RD1.

## Đoạn bổ sung đề xuất — Từ đồ thị đến phương trình (PED1–3)

**Vấn đề:** Ở Bài 3, một góc x cho ta giá trị `sin x`. Bây giờ làm ngược lại: nếu biết `sin x = 1/2`, làm thế nào tìm **tất cả** các góc x? Chỉ tính `arcsin(1/2)=π/6` là chưa đủ, vì điểm trên đường tròn đơn vị còn có tung độ `1/2` ở góc `5π/6`. Và sau mỗi vòng quay, các vị trí ấy xuất hiện trở lại.

**Cầu nối:** Bài 1 cho biết các góc hơn kém `2kπ` (k nguyên) có cùng tia cuối. Bài 3 cho thấy đồ thị sin lặp sau `2π`. Bài 2 cung cấp công thức biến đổi khi phương trình phức tạp hơn. Từ đó, **giải phương trình lượng giác** nghĩa là tìm mọi đầu vào x thỏa đẳng thức, đồng thời tôn trọng miền xác định của hàm.

**Quan sát trước công thức:** Trên một vòng `[0,2π)`, `sin x=1/2` có hai nghiệm `π/6` và `5π/6`. Mỗi nghiệm còn có thể cộng `2kπ` với `k∈ℤ`. Vậy các nghiệm là `x=π/6+2kπ` hoặc `x=5π/6+2kπ`. Đây là hai **họ nghiệm**, không phải hai số duy nhất. Khi bài hỏi nghiệm trên một khoảng, ta lọc k để giữ những giá trị nằm trong khoảng đó.

**Vì sao cần điều kiện?** Nếu `sin x=m` với `|m|>1`, không có điểm nào trên đường tròn đơn vị có tung độ m nên vô nghiệm. Tương tự, `cos x=m` đòi `|m|≤1`. Với `tan x=m` hoặc `cot x=m`, phải kiểm miền xác định vì phép chia cho 0 không có nghĩa. Với phương trình có `ax+b`, ta giải cho toàn bộ **đối số** rồi mới suy ra x; không bỏ một họ hoặc một điều kiện khi biến đổi.

**Từ trực giác đến công thức chuẩn:** Sau khi học sinh thấy các điểm có cùng tung/hoành độ và các vòng quay lặp lại, mới giới thiệu `arcsin`, `arccos`, `arctan` là cách chọn **một giá trị đại diện**, rồi viết đủ họ nghiệm trong phần Kiến thức hiện có. Không dạy học sinh nhầm `arcsin m` là tập tất cả nghiệm.

## Kết nối hình đã duyệt (PED4)

Không tạo SVG mới. Dẫn tới đồ thị sin/cos ở Bài 3: đường ngang `y=1/2` cắt đồ thị sin hai lần trên `[0,2π)`, còn khi nhìn thêm một chu kỳ các giao điểm lại xuất hiện. Đây là **gợi ý diễn giải**, chưa thêm đường ngang vào SVG; reviewer xác nhận xem cần hình phụ hay mô tả bằng lời là đủ. Khi sử dụng tan/cot, phải giải thích các nét đứt biểu thị nơi hàm không xác định, không coi đó là nghiệm.

## Đề xuất Tự thử trước Core (PED6)

**Câu tự thử (formative, không tạo canonical ID):** Trên `[0,2π)`, phương trình `sin x=0` có những nghiệm nào? Nếu tìm trên toàn ℝ, vì sao đáp án phải có số nguyên k?

**Phản hồi chỉ xem sau khi tự nghĩ:** Trên một vòng, nghiệm là `0` và `π`; trên toàn ℝ các nghiệm gộp thành `x=kπ, k∈ℤ`. Mỗi lần tăng `π` ta lại gặp một điểm trên trục Ox có tung độ 0. Nếu chưa chắc, trở lại Bài 1 (đường tròn) và Bài 3 (đồ thị sin), sau đó thử Core `THPT-G11-B04-C01`.

**Lưu ý:** Đây là formative micro-check, không dùng làm đề độc lập; không cộng điểm, không ghi Mastery, không lộ câu hỏi RD1.

## Gate review

PED1/2/3/4/6 là **PROPOSED**, PED5 cần reviewer kiểm tra đủ 6 ví dụ gốc B04, AP1–AP5 vẫn OPEN. Phải review targeted Delta_C trước khi sửa trang học sinh; không được suy từ Academic PASS cũ.
