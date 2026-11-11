# AUTHORING · Chuyên đề 1 M3 · R07 cải tiến đọc hiểu trước công thức

**Ngày 10/11/2026** · **Lane:** AUTHORING · **Mục tiêu:** tăng khả năng tự học lý thuyết bằng lời dẫn/đồ họa từ ý tưởng Notebook, không tăng số câu hỏi, không thêm hành trình học, không thay Kiến thức/Luyện tập/Tự kiểm tra. **Không tự cấp Academic/PED PASS/CONTENT_READY.**

## 1. Thay đổi ĐÃ LÀM trên branch PR #801

| File | Trước | SHA blob R07 |
|---|---|---|
| \`Temp_TOPIC1_M3_TRANSFORM_KNOWLEDGE_DELTA_C_R00_20261110.md\` | \`c46a5f0a0ce88b4e4128f15836fce0215900bcd9\` | **\`b3efdf2cf0b50725da02a0dcd0510c75f3d17c67\`** |
| \`Temp_TOPIC1_M3_GRAPH_TRANSFORM_LAB_D5_R00.html\` | \`6c150da0406f559e13a1ae9d0eca3f5565790247\` | **\`5bc8204f8bd024f30a73230231857210f1ce2123\`** |
| **Mới:** \`Temp_FIG_TOPIC1_M3_INPUT_OUTPUT_TWO_MACHINES_R01.svg\` | — | **\`dbdda801c2d02169521db2ae974c00d567dd660a\`** |

**Vị trí:** mục **Kiến thức**, M3, sau khi đặt \`g(x)=|f(x)|\`, \`h(x)=f(|x|)\` nhưng trước hai quy tắc dựng đồ thị. **Bố cục sư phạm:** một câu chuyện so sánh hai máy xử lý đầu vào/đầu ra → học sinh tự dự đoán tại \`x=-2\` → chỉ khi chủ động mở \`Đối chiếu\` mới thấy tính toán và SVG → quan sát graph lab. Hai checkbox của lab **tắt ban đầu** để người học nhìn đồ thị \`f\` trước, rồi bật riêng từng phép biến đổi. Phần readout không lộ hai kết quả khi chưa bật; \`Đặt lại\` quay về trạng thái đoán trước.

**Xuất xứ nội dung:** Phần kiến thức M3 hiện có đã dạy rõ \`f(-2)=15\`, \`f(|-2|)=f(2)=-1\`, \`|f(2)|=1\`; nguồn Notebook 10-model được dùng như cảm hứng tổ chức **điều khiển và dẫn dắt theo bước**, không sao chép số liệu/đáp án sai hoặc quảng bá “chuẩn mới”. Ví dụ, hàm số, miền, định nghĩa, cách dựng và lời giải đều giữ nguyên.

## 2. Parity — kiểm chứng toán và Q15

Với \`f(x)=x²−4x+3\`:
- \`f(-2)=15\`, \`f(2)=-1\`, \`|f(-2)|=15\`, \`f(|-2|)=-1\`, \`|f(2)|=1\`, \`f(|2|)=-1\`: **6/6 kỳ vọng chính xác**, đúng ví dụ cũ.
- Với **201** hoành độ mẫu trong \`[-4,4]\`: \`|f(x)|≥0\`; \`f(|x|)=f(|-x|)\` (số thực, cùng miền gốc toàn R): **201/201 property checks**.
- **Không chỉnh** điều kiện \`a≠0\`, tập xác định biến đổi, bảng Delta, nội dung giải hoặc rubric. Các \`DRAFT-T1-M3-APP07/APP09/WR02\` ở ma trận Q15 vẫn giữ nguyên. Câu hỏi trong bảng mới chỉ là **lời nhắc tự dự đoán** của phần Kiến thức, không phải item đánh giá mới/không có mastery.
- Mẫu \`f\` là hàm toàn R; chú giải của phần M3 hiện có **tiếp tục** nêu điều kiện \`D_{f(|x|)}={x: |x|∈D_f}\` cho miền bị hạn chế. Sơ đồ chỉ mô tả x=-2, không tuyên bố định nghĩa trên mọi miền bất kỳ.

## 3. QA kỹ thuật — phạm vi chính xác

- SVG tự chứa: 1 \`title\`, 1 \`desc\`, \`aria-labelledby\` đúng ID, tag XML đóng/mở cân bằng; không có \`script\`/hình tải từ Internet/foreignObject.
- Markdown: sơ đồ được đặt **trong \`<details>\`** sau yêu cầu dự đoán; đoạn mới đứng trước \`## 1.\` lý thuyết; đường dẫn hình tương đối giải quyết tới file cùng thư mục.
- HTML: JavaScript parse/syntax bằng JS engine **PASS**, hai checkbox không mặc định được chọn, readout khởi tạo chỉ gợi ý, phần tính toán chỉ hiện theo checkbox; không thay công thức \`f\`, \`a,b,c\`, phép vẽ/parity số. **Đã readback 3/3 SHA file GitHub**.

**Chưa có:** Chromium render mới với exact GitHub M3 file ở ba viewport, test Safari/touch/screen reader/Golden UI; vì vậy **Q07 thực tế và AP1–AP5 chưa PASS**. Không dùng mock/syntax để khai báo browser PASS. Một thay đổi ở UI/trình tự tự học không thay được Academic/PED verdict của các mục nội dung sâu M1–M3 đang chờ; tránh đánh đồng.

## 4. Delta & review phù hợp giai đoạn nâng cấp

**Tự phân loại phần bổ sung R07: \`DELTA_B_SOURCE_EQUIVALENT\` (giải thích lại cùng ví dụ) + \`DELTA_A_UI\` (mặc định ẩn đường để đoán trước).** Có parity số và không đổi outcome, đáp án, điều kiện hay rubric. **Không gửi ngay sản phẩm cải tiến này quay lại Notebook để review**; chỉ chuyển \`DELTA_C\` và nhờ review đúng đoạn ảnh hưởng nếu sau QA phát hiện vấn đề học thuật thực chất hoặc phát sinh kiến thức/khẳng định mới.

**Q18 snapshot:** \`R06\` ONE_SOURCE blob \`1d3d3852aa38ab90ed282349bfc769c02aac3ea3\` **không sửa** và vẫn là bản ghi chuẩn của **snapshot R06 lịch sử**, chứ không còn đại diện SHA hiện tại cho **hai file M3** được chỉnh ở R07. R18 immutable blob \`2340ea4975b37a457363eea59dd617070934983c\` **không sửa**. Trước khi handoff, manifest/version cần cập nhật hai SHA R07 và SVG mới; không ghi nhầm “23/23 current source” cho R06.

**Trạng thái:** \`M3_GUIDED_PED_DELTA_B_QA_PASS_FOR_TESTED_CASES\` · \`M3_REAL_BROWSER_QA_PENDING\` · \`11_DRAFT_PRESERVED\` · \`R18_SNAPSHOT_PRESERVED\` · \`CONTENT_READY=NO\` · \`NO_MERGE_DEPLOY\`.
