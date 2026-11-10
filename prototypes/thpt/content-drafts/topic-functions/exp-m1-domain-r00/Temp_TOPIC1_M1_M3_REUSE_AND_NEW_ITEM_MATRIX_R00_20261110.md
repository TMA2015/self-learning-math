# Chuyên đề 1 M1–M3 — bản đồ dùng chung item và phân loại ứng viên mới (AUTHORING R00)

**Phạm vi:** chỉ M1–M3 của Topic 1, không tạo bank song song. Các ánh xạ **existing** bên dưới được trích từ chính nguồn R18 đã PASS (Git blob \`2340ea4975b37a457363eea59dd617070934983c\`), phần “2. Luyện tập — một nguồn câu hỏi và rubric dùng chung”. Chúng **không đồng nghĩa** đã đối chiếu xong stem/đáp án/rubric/content_version của từng item tại bank gốc. Không sao chép stem/key/rubric đã có vào tài liệu này.

## I. Khung dùng chung đã có từ R18

| Outcome R18 | Ý chính và mạch | Canonical EXISTING public item reference, dùng placement (không clone) | D6 gốc |
|---|---|---|---|
| \`TOP-G10-FUNC-O01\` | M1 · quy tắc đơn trị, bảng x lặp, tập giá trị | \`THPT-G10-B15-C01\` | \`HELP-G10-B15-01\` |
| \`TOP-G10-FUNC-O02\` | M1 · miền xác định/tập giá trị, căn và mẫu | \`THPT-G10-B15-C02\`, \`THPT-G10-B15-P01\` | \`HELP-G10-B15-02\` |
| \`TOP-G10-FUNC-O03\` | M2 · giá trị/điểm trên đồ thị, nội suy | \`THPT-G10-TOP-FUNC-P01\` | \`HELP-G10-B15-01\` |
| \`TOP-G10-FUNC-O04\` | M2 · đồng biến/nghịch biến nghiêm ngặt trên khoảng | \`THPT-G10-B15-P03\` | \`HELP-G10-B15-01\` |
| \`TOP-G10-FUNC-O05\` | M2 · điểm mốc hàm từng đoạn/miền mô hình | \`THPT-G10-B15-P02\` | \`HELP-G10-B15-02\` |
| \`TOP-G10-FUNC-O06\` | M3 · phân biệt bậc hai với a=0 | \`THPT-G10-TOP-FUNC-P02\` | \`HELP-G10-B16-01\` |
| \`TOP-G10-FUNC-O07\` | M3 · dạng đỉnh, trục đối xứng, hoàn bình phương | \`THPT-G10-TOP-FUNC-P03\` | \`HELP-G10-B16-01\` |
| \`TOP-G10-FUNC-O08\` | M3 · giao trục/biệt thức/đối xứng | \`THPT-G10-TOP-FUNC-P04\` | \`HELP-G10-B16-01\` |
| \`TOP-G10-FUNC-O09\` | M3 · đơn điệu/cực trị trên miền hạn chế | \`THPT-G10-TOP-FUNC-P05\` | \`HELP-G10-B16-02\` |
| \`TOP-G10-FUNC-O10\` | M3 · mô hình, đơn vị và tối ưu trong miền | \`THPT-G10-TOP-FUNC-P06\` | \`HELP-G10-B16-02\` |

**Quy tắc:** nếu cần cho học sinh làm một câu gốc ở trang Topic, chỉ thêm **placement** vào item_id trên; không nhân bản stem/đáp án/rubric. Khi học sinh cần HELP trong Topic, phải render đủ hướng tự sửa tại chỗ (dùng một source chung), không bắt chuyển qua nhánh SGK mới học được kiến thức bắt buộc.

## II. Ma trận ứng viên mới và mức nguy cơ trùng

| DRAFT ID | Outcome gợi ý | Điểm mới mong muốn | Q15 action trước khi nhận |
|---|---|---|---|
| \`DRAFT-T1-M1-APP01\` | O01 | đọc bảng có cùng x | **HIGH**: giống họ dạng EX-M1-01/R18; ưu tiên reuse |
| \`DRAFT-T1-M1-APP02\` | O02 | rút gọn phân thức không phục hồi điểm bị loại | so stem+rubric hiện hành |
| \`DRAFT-T1-M1-APP03\` | O02 | căn nằm ở mẫu khác căn thường | so item gốc |
| \`DRAFT-T1-M1-APP04\` | O02 | miền số vé và phí xử lý | so ứng dụng bối cảnh khác |
| \`DRAFT-T1-M1-APP05\` | O02 | căn \(9-x^2\), mẫu \(x+2\), kiểm bốn giá trị ở biên/điểm loại | cùng họ dạng với M1, nhưng stem khác; vẫn so bank |
| \`DRAFT-T1-M1-APP06\` | O02 | ba ràng buộc căn/mẫu | so item gốc |
| \`DRAFT-T1-M1-APP07\` | O02/O09 | tập giá trị trên đoạn không chứa đỉnh \([-1,1]\) | khác ví dụ M1, vẫn so bank trước canonical |
| \`DRAFT-T1-M1-WR01\` | O02 | phản biện căn ở mẫu, rubric lý do | so Written đã có |
| \`DRAFT-T1-M1-WR02\` | O01/O02 | miền đầu vào số nguyên rời rạc, đầu ra trùng và tập giá trị không nhân bản | so Written đã có |
| \`DRAFT-T1-M2-APP04\` | O03 | dữ liệu đo vs nội suy | so \`THPT-G10-TOP-FUNC-P01\` |
| \`DRAFT-T1-M2-APP05\` | O05 | đổi điều kiện trong hàm từng đoạn | so \`THPT-G10-B15-P02\` |
| \`DRAFT-T1-M2-APP06\` | O04/O05 | **hai nhánh đều tăng nhưng cả hàm không tăng do bước nhảy xuống** | so O04/O05 |
| \`DRAFT-T1-M2-WR01\` | O03 | trả lời tự luận phân biệt quan sát và dự báo | so 2 Written G10 B15 |
| \`DRAFT-T1-M3-APP06\` | **extension M3** | trị tuyệt đối ở đầu vào/đầu ra | kiểm S1 scope/Q02; có thể chỉ làm enrichment |
| \`DRAFT-T1-M3-APP07\` | **extension M3/O08** | số nghiệm sau hai biến đổi | kiểm S1 scope/Q02 và item bank |
| \`DRAFT-T1-M3-APP08\` | O06 | a=0 cho hàm bậc nhất | so \`THPT-G10-TOP-FUNC-P02\` |
| \`DRAFT-T1-M3-APP09\` | O09 | tối ưu trên **hai đoạn rời** | so \`THPT-G10-TOP-FUNC-P05\` |
| \`DRAFT-T1-M3-WR02\` | **extension M3/O08** | chứng minh khác nhau giữa \(|f|\) và \(f(|x|)\) | so Written hiện có; targeted review |

**Phân loại thận trọng:** 17 DRAFT ID chỉ là *candidates*. Các bài ghi HIGH không được chuyển thành câu mới canonical chỉ vì có mã riêng. Tác giả/reviewer cần quyết định: (i) dùng lại item gốc; (ii) giữ dạng Vận dụng trong Kiến thức mà không đăng ký item Luyện tập; (iii) cho phép một **item mới khác thực sự** khi có lý do chiều sâu và bằng chứng nguồn.

## III. Trước review/CONTENT_READY

1. Mỗi câu được giữ lại cần mapping chính thức \`item_id ↔ outcome_id ↔ placement ↔ role ↔ content_version ↔ source SHA\`, đồng bộ một bank đáp án/lời giải/rubric duy nhất.
2. Các dạng \(|f(x)|\), \(f(|x|)\) trong M3 là **mở rộng sư phạm** trên cơ sở hàm số bậc hai; reviewer phải xác định mức phù hợp với S1, không gọi mọi kiến thức mở rộng là Core bắt buộc.
3. Đối chiếu câu gốc của SGK/Topic/Written trước khi chốt hồ sơ; nếu nguồn gốc không sẵn, ghi \`Q15_SEMANTIC_HOLD\`, không tự suy các ID chính thức là khác câu.
4. **PRIVATE RD1:** câu độc lập/kết quả/rubric không đăng lên GitHub; các câu có lời giải công khai ở đây không dùng lại cho RD1 sau khi đã bị nhìn thấy.
5. Snapshot PASS R18 bất biến vẫn nguyên vẹn; việc bổ sung DELTA_C chỉ review phần chịu ảnh hưởng (M1–M3), không ép review lại M4–M7.

**STATE:** \`REUSE_MAP_FROM_R18_VERIFIED\` · \`Q15_SEMANTIC_HOLD\` · \`NEW_CONTENT_REVIEW_PENDING\` · \`NO_CONTENT_READY\`.
