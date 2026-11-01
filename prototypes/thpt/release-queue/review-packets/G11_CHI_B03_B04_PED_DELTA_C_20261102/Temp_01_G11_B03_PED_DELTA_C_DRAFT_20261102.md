# Temp_01 — G11 ChI Bài 3: đề xuất PED1–PED6 concept-first (chưa áp dụng)

**Trạng thái:** DRAFT_NOT_ACADEMICALLY_REVIEWED · DELTA_C_PROPOSED_UNAPPLIED · A6 SYSTEM_HOLD. Đây là đề xuất dành cho reviewer, **không phải nội dung đã đưa lên website**. Không sửa đáp án, rubric, canonical ID, hình SVG, RD1 hay dữ liệu học sinh.

**Source lock:** PR tác giả #681, public whole-chapter Git blob `599d12ac7c2252001f881833c39978f94112cee4`; Academic PASS ChI tại Issue #682 chỉ áp dụng đúng snapshot cũ. Dự thảo này **không kế thừa** PED PASS và cần review targeted theo #691/#675. S1: cần reviewer đối chiếu trực tiếp SGK/SBT Toán 11 KNTT tập 1; Issue #682 ghi SBT B03 trang in 11–18, B04 19–24, cuối chương 25–30, chưa coi đó là kiểm chứng trang trực tiếp của A6.


## Mục tiêu và ranh giới delta

**Trang đích sau review:** `docs/thpt-preview/sgk/lop-11/chuong-i/bai-3.md`. Giữ nguyên toàn bộ D3 Core/Practice, 26 canonical source records B03–B04, 4 SVG, 4 D6 và D4 Written. Đề xuất thêm cầu nối trước `## 1. Kiến thức SGK`, thuyết minh riêng từng hình, một bước Tự thử trước khi chuyển sang Core. **Không thay công thức/đáp án đã duyệt**.

## Đoạn bổ sung đề xuất — Vấn đề và cầu nối (PED1–3)

**Vì sao cần hàm số lượng giác?** Ở Bài 1, khi một điểm M quay quanh đường tròn đơn vị theo góc lượng giác x (đơn vị radian), ta đọc được tọa độ M là `(cos x, sin x)`. Ở Bài 2, ta đã có công cụ tính các giá trị lượng giác của tổng hoặc hiệu góc. Nhưng nếu điểm quay liên tục, làm sao mô tả **tọa độ thay đổi theo góc quay**, không chỉ tính tại một góc cố định? Ta coi x là đầu vào biến thiên; tung độ `sin x` và hoành độ `cos x` là hai **hàm số**. Đây là cách biến chuyển động quay thành đồ thị theo x.

**Quan sát trước khi ghi nhớ tính chất.** Lần lượt cho điểm M quay đến các góc `0, π/2, π, 3π/2, 2π` radian. Ta có bảng:

| x (radian) | 0 | π/2 | π | 3π/2 | 2π |
|---|---:|---:|---:|---:|---:|
| sin x (tung độ M) | 0 | 1 | 0 | −1 | 0 |
| cos x (hoành độ M) | 1 | 0 | −1 | 0 | 1 |

Khi x tăng thêm `2π`, điểm M trở về cùng vị trí, nên cả hai tọa độ lặp lại. **Đó là lý do** đồ thị sin và cos có tính tuần hoàn; sau khi quan sát mới phát biểu chu kỳ cơ bản `2π`. Góc x có thể âm hoặc lớn hơn `2π`, nên sin/cos nhận mọi số thực làm đầu vào; giá trị tọa độ của điểm trên đường tròn đơn vị luôn nằm từ −1 đến 1.

**Vì sao tan/cot không xác định ở một số góc?** `tan x = sin x / cos x` chỉ có nghĩa khi hoành độ M khác 0; tại `x=π/2`, hoành độ bằng 0 nên không được chia. Tương tự `cot x = cos x / sin x` chỉ có nghĩa khi tung độ M khác 0; `cot 0` không xác định. Từ điều kiện này mới dẫn sang miền xác định và các đường tiệm cận trong đồ thị, không yêu cầu học sinh thuộc lòng vị trí tiệm cận trước.

**Từ trực giác đến kí hiệu:** `y=sin x` và `y=cos x` là hàm số theo biến x; chu kỳ nghĩa là có số T dương sao cho `f(x+T)=f(x)` với mọi x thuộc miền phù hợp. Phân biệt **chu kỳ** với **giá trị lớn nhất/nhỏ nhất** và với **độ dài thời gian** trong mô hình thực tế.

## Đề xuất thuyết minh D5 giữ nguyên SVG (PED4)

- **FIG-G11-B03-01_R01.svg — sin:** đọc các điểm mốc `(0,0)`, `(π/2,1)`, `(π,0)`, `(3π/2,−1)`, `(2π,0)`; đường cong trở về cùng mức sau một vòng `2π`. Hỏi học sinh vì sao không thể nói hàm sin tăng trên toàn ℝ.
- **FIG-G11-B03-02_R01.svg — cos:** tại `x=0`, giá trị là 1; tại `π` là −1; tại `2π` lại là 1. So với sin, đồ thị bắt đầu ở độ cao khác dù cùng chu kỳ.
- **FIG-G11-B03-03_R01.svg — tan:** hai đường thẳng nét đứt ở `x=±π/2` đánh dấu góc mà `cos x=0`; đồ thị không có điểm tại đó và không được nối các nhánh qua đường nét đứt.
- **FIG-G11-B03-04_R01.svg — cot:** các đường nét đứt ở `x=kπ` biểu thị `sin x=0`; trên mỗi khoảng xác định giữa hai tiệm cận liên tiếp, đồ thị đi xuống. Không đánh dấu `cot 0` là 0.

Không thay đổi tệp SVG, trục, nhãn hay Git blob gốc. Reviewer phải xác nhận diễn giải trên phù hợp từng hình và phạm vi SGK/SBT.

## Đề xuất Tự thử trước Core (PED6)

**Câu tự thử (formative, không tạo canonical ID):** Một điểm trên đường tròn lượng giác quay từ góc `x` thêm đúng một vòng. Em dự đoán `sin(x+2π)` so với `sin x` như thế nào? Tại sao?

**Phản hồi chỉ xem sau khi tự nghĩ:** Hai góc có cùng điểm cuối nên cùng tung độ, vì vậy `sin(x+2π)=sin x`. Nếu em chưa giải thích được, quay lại bảng tọa độ và hình sin, rồi làm Core `THPT-G11-B03-C01`.

**Lưu ý:** Đáp án Tự thử được mở tự nguyện trong học liệu, không phải RD1/Final Submit; không ghi Mastery. Kiểm tra cách trình bày phù hợp Golden R4 trước khi tích hợp.

## Gate review

PED1/2/3/4/6 là **PROPOSED**, PED5 cần reviewer đọc đủ 5 ví dụ gốc B03; AP1–AP5 chưa được nghiệm thu. Mọi thay đổi học thuật sau reviewer phải khóa snapshot mới và lập targeted delta receipt, không được tự nâng Academic/PED PASS.
