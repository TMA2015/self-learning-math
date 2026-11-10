# AUTHORING Q15 · Kiểm tra trùng nguồn thực tế cho Chuyên đề 1 M1–M3 (R01)

**Ngày:** 10/11/2026 · **Phạm vi:** Q15 semantic + source traceability, chưa là review học thuật. Không sao chép stem, solution, hint hoặc rubric từ nguồn canonical vào bank thứ hai.

## Nguồn đã đọc trực tiếp

- Nguồn SGK public formative đang nằm tại \`docs/assets/javascripts/thpt-chvi-reviewed-formative-v1.js\` trên GitHub \`main\`, blob **\`1223d4c2b574433479c5d222dbeff363718ee4bb\`**. Nội dung Bài 15 ghi \`FORMATIVE_ONLY\` hoặc \`EXPOSED_IN_KNOWLEDGE\`; **không** phải private RD1.
- Nguồn SGK học sinh: \`docs/thpt-preview/sgk/chuong-vi/bai-15.md\`, blob \`72ed03b1cb625f157bb49064cf1df2100856e057\`, và Bài 16 \`bai-16.md\`, blob \`a0fc509e1c08b7ee90225dee3994d6b3fa84e21a\`; đây là nguồn diễn giải, không phải toàn bộ bank.
- Nguồn Topic R18: \`Temp_TOPIC_FUNCTIONS_FULL_PUBLIC_CANONICAL_SOURCE_R18_20261108.md\`, blob **\`2340ea4975b37a457363eea59dd617070934983c\`**, cung cấp **10 outcome M1–M3 / 11 item-reference**. R18 giữ nguyên.
- Trang Topic pilot trên \`main\` (\`docs/thpt-preview/chuyen-de/ham-so/luyen-tap.md\`) còn mang demo \`PRACTICE-THPT-DEMO-01\` và \`THPT-CORE-QF01\`; **không dùng demo làm nguồn canonical**.
- Chưa truy vết được đầy đủ body/answer/rubric của \`THPT-G10-TOP-FUNC-P01..P06\` từ cùng một ngân hàng source-lock trên branch; không tự điền, ghi \`Q15_SEMANTIC_HOLD\`.

## Kết quả đọc 6 item Bài 15 SGK — tham chiếu, không nhân bản

| Item public có bằng chứng tại JS blob | Nội dung năng lực được hỏi | So với bài R00 | Quyết định tạm |
|---|---|---|---|
| \`THPT-G10-B15-C01\` | nhận ra cùng x có hai đầu ra **mâu thuẫn** | \`DRAFT-T1-M1-APP01\` dùng cùng x nhưng **cùng y**, là phản ví dụ ngược chiều để củng cố định nghĩa | **GIỮ TRONG VẬN DỤNG**, ưu tiên liên kết item C01 làm luyện tập; chưa tạo canonical mới |
| \`THPT-G10-B15-C02\` | một căn bậc hai \(\sqrt{2x-3}\), điều kiện không âm | APP03/APP05/APP06 phối hợp căn với mẫu và điểm biên | **KHÁC MỨC SUY LUẬN**, giữ DRAFT để reviewer xem độ sâu |
| \`THPT-G10-B15-P01\` | phân thức \((x+1)/(x^2-9)\), loại 2 điểm làm mẫu bằng 0 | APP02 rút gọn phân thức nhưng giữ điểm loại; APP05/06 còn căn | **KHÁC HỌ DẪN DẮT**, chưa tự coi là item canonical |
| \`THPT-G10-B15-P02\` | phí giao hàng hàm từng đoạn, tính tại mốc và phía sau | M2 APP05 kiểm chấm đặc/rỗng; APP06 kiểm **hai nhánh riêng tăng nhưng hàm toàn miền không tăng** | **KHÁC YÊU CẦU LẬP LUẬN**, giữ DRAFT |
| \`THPT-G10-B15-P03\` | phân tích biến thiên của hàm \(|x+2|\) theo các khoảng | M2 APP06 dùng bước nhảy để phản bác toàn miền | **KHÁC BẢN CHẤT PHẢN VÍ DỤ**, giữ DRAFT |
| \`THPT-G10-B15-P04\` | xác định miền quãng đường thỏa ngân sách với phí từng đoạn | M1 APP04 miền số vé rời rạc và tập giá trị; M2 APP04/WR01 phân biệt quan sát với mô hình | **KHÁC BỐI CẢNH / OUTCOME**, nhưng cần review ý nghĩa |

## Bổ sung Q15: đã đọc 6 câu gốc Topic G10 ở snapshot bất biến

Đã truy xuất trực tiếp **Git blob \`57eaf0141a5db9bfba91f0e6c863fc7dcc638068\`**, là nguồn Topic G10 R01 lịch sử được reviewer chấp nhận cho đúng snapshot. Xác minh đủ **6 item thực tế** \`THPT-G10-TOP-FUNC-P01..P06\` (bao gồm stem và lời giải trong nguồn gốc), **không sao chép nội dung câu vào tài liệu audit**:

| ID gốc | Năng lực của stem thực | Đối chiếu candidate |
|---|---|---|
| \`THPT-G10-TOP-FUNC-P01\` | kiểm giá trị và điểm đồ thị của \`3−|x−1|\` | M2 APP04 nội suy bảng đo là năng lực khác; không suy từ ID |
| \`THPT-G10-TOP-FUNC-P02\` | điều kiện tham số để hệ số \`x²\` khác 0 | M3 APP08 hỏi tiếp loại hàm & nghiệm khi a=0; có overlap về điều kiện, **giữ formative, không mint ID** |
| \`THPT-G10-TOP-FUNC-P03\` | hoàn bình phương, đỉnh/trục/GTNN | M3 R00 giải thích phép biến đổi trị tuyệt đối khác yêu cầu của P03 |
| \`THPT-G10-TOP-FUNC-P04\` | đỉnh/giao trục/chiều mở parabol | M3 APP07 phân tích điều kiện \`u=|x|≥0\`; chỉ là enrichment cần review phạm vi |
| \`THPT-G10-TOP-FUNC-P05\` | GTLN/GTNN/tập giá trị của parabol khi đỉnh **ngoài đoạn** | M1 APP07 trước đó chỉ đổi hệ số/đoạn, **không tạo giá trị sư phạm đủ mới** → **LOẠI KHỎI DRAFT BANK** |
| \`THPT-G10-TOP-FUNC-P06\` | tối ưu nhiệt độ trên đoạn có đỉnh và hai đầu mút | M3 APP09 dùng **hai đoạn rời** làm thay đổi phương pháp lựa chọn điểm; giữ ứng viên review |

Như vậy đã đọc trực tiếp **12 stem + lời giải PUBLIC** thuộc hai nguồn gốc B15 (6 item) và Topic G10 R01 (6 item); SHA nguồn gốc được ghi riêng. **Chưa thể đóng Q15 cuối cùng** vì các Written/Anchor aliases, những nguồn SGK khác và quyết định canonical version/placement vẫn phải đối soát trước handoff. **17 item ID DRAFT còn lại** không được tự nhận là 17 câu độc lập đã nghiệm thu.

**Giới hạn kiểm chứng:** bảng trên xác nhận **một phần** Q15 ở nguồn SGK B15; tên item và kết quả so sánh đã lấy từ nội dung thực tế, không chỉ so ID. Nó **không** xác minh 100% ngân hàng Topic/SGK các phiên bản hoặc các bài tập tự luận/Anchor khác.

## Kiểm tra trùng ngay trong gói mới (Q15 nội bộ)

- M3 \`DRAFT-T1-M3-APP07\` ban đầu giải đúng **cùng hàm** \(x^2-4x+3\) và cùng bộ nghiệm như phần (c) của \`DRAFT-T1-M3-WR02\). Đã thay APP07 bằng bài \(f(x)=x^2+2x-3\), nhằm làm rõ điều kiện \(u=|x|\ge0\): \(|f|=0\) cho \(x=1,-3\), còn \(f(|x|)=0\) chỉ cho \(x=\pm1\).
- M1 APP05 đã đổi sang \(q(x)=\sqrt{9-x^2}/(x+2)\), M1 APP07 đã **loại khỏi danh sách câu ứng viên** sau khi đọc đúng stem/giải của \`THPT-G10-TOP-FUNC-P05\` (cùng bài toán đỉnh ngoài đoạn và tập giá trị), M2 APP06 sang hai nhánh có bước nhảy xuống tại 0, M3 APP09 sang miền hai đoạn rời. Những thay đổi giúp tránh **chép nguyên bài vận dụng trong lý thuyết** vào luyện tập.
- \`DRAFT-T1-M1-APP01\` vẫn có **mục đích sư phạm tương đồng** với C01; ưu tiên sử dụng như một tình huống đối lập **trong trang Kiến thức**, không đăng ký item canonical mới nếu không có bằng chứng cần thiết.
- Các cặp APP/WR cùng mạch có thể chia mức giải thích (APP tính/nhận xét, WR phải biện luận đầy đủ), nhưng phải đánh giá reviewer độc lập: **đổi hình thức thành tự luận không tự động là một item mới có giá trị**.

## Danh mục quyết định trước khi chốt Q15

1. Đọc chính xác bank \`TOP-FUNC-P01..P06\` và thư viện Written/Anchor chính thức, đối chiếu stem/key/solution/rubric/content version với từng DRAFT item.
2. Gán \`role\`/ \`placement\` cho item đã có trước, chỉ nhận item mới khi đề thực sự khác và có chiều sâu.
3. Quyết định sự phù hợp S1/Q02 của nội dung trị tuyệt đối bên trong/ngoài hàm (M3 enrichment) và tránh biến chúng thành Core SGK bắt buộc.
4. Không đưa body/key/private RD1 lên Git công khai hoặc lấy item đã lộ đáp án làm Tự kiểm tra độc lập.

**Verdict hiện tại:** \`B15_PUBLIC_BANK_READBACK=VERIFIED\`; \`Q15_INTERNAL_DUPLICATE_CLEANUP=PARTIAL\`; \`TOPIC_BANK_RUBRIC_CROSSCHECK=PENDING\`; \`Q15_SEMANTIC_HOLD\`. R18 Academic/PED PASS giữ nguyên; nội dung bổ sung vẫn \`DELTA_C\`, chưa review.
