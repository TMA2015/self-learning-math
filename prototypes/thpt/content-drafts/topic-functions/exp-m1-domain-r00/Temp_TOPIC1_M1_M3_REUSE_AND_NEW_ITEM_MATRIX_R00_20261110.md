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
| \`DRAFT-T1-M1-APP02\` | O02 | rút gọn phân thức không phục hồi điểm bị loại | so stem+rubric hiện hành |
| \`DRAFT-T1-M1-APP05\` | O02 | căn \(9-x^2\), mẫu \(x+2\), kiểm bốn giá trị ở biên/điểm loại | cùng họ dạng với M1, nhưng stem khác; vẫn so bank |
| \`DRAFT-T1-M1-APP06\` | O02 | ba ràng buộc căn/mẫu | so item gốc |
| \`DRAFT-T1-M1-WR01\` | O02 | phản biện căn ở mẫu, rubric lý do | so Written đã có |
| \`DRAFT-T1-M1-WR02\` | O02/O03 | rút gọn làm khuyết một điểm trên đồ thị và mất một giá trị trong tập giá trị | so Written, có suy luận sâu hơn APP02 |
| \`DRAFT-T1-M2-APP05\` | O05 | đổi điều kiện trong hàm từng đoạn | so \`THPT-G10-B15-P02\` |
| \`DRAFT-T1-M2-APP06\` | O04/O05 | **hai nhánh đều tăng nhưng cả hàm không tăng do bước nhảy xuống** | so O04/O05 |
| \`DRAFT-T1-M2-WR01\` | O03 | trả lời tự luận phân biệt quan sát và dự báo | so 2 Written G10 B15 |
| \`DRAFT-T1-M3-APP07\` | **extension M3/O08** | số nghiệm sau hai biến đổi | kiểm S1 scope/Q02 và item bank |
| \`DRAFT-T1-M3-APP09\` | O09 | tối ưu trên **hai đoạn rời** | so \`THPT-G10-TOP-FUNC-P05\` |
| \`DRAFT-T1-M3-WR02\` | **extension M3/O08** | chứng minh khác nhau giữa \(|f|\) và \(f(|x|)\) | so Written hiện có; targeted review |

**Phân loại thận trọng:** 11 DRAFT ID chỉ là *candidates*. Các bài ghi HIGH không được chuyển thành câu mới canonical chỉ vì có mã riêng. Tác giả/reviewer cần quyết định: (i) dùng lại item gốc; (ii) giữ dạng Vận dụng trong Kiến thức mà không đăng ký item Luyện tập; (iii) cho phép một **item mới khác thực sự** khi có lý do chiều sâu và bằng chứng nguồn.

## III. Q15 semantic dedup bổ sung (10/11/2026)

Đã loại khỏi danh sách item mới APP03 M1 (căn ở mẫu chỉ đổi ký hiệu so với WR01), APP04 M2 (cùng bài nội suy tuyến tính với WR01), APP06 M3 (tính `|f(x)|` và `f(|x|)` đã có trong Vận dụng Kiến thức và WR02). Những câu này không được mint `item_id` mới; kiến thức và đối chiếu đã có trong nguồn chung. Còn 11 ứng viên (7 APP, 4 Written); đối chiếu ngữ nghĩa toàn bộ bank SGK/Topic/Written vẫn HOLD.

## IV. Trước review/CONTENT_READY

1. Mỗi câu được giữ lại cần mapping chính thức \`item_id ↔ outcome_id ↔ placement ↔ role ↔ content_version ↔ source SHA\`, đồng bộ một bank đáp án/lời giải/rubric duy nhất.
2. Các dạng \(|f(x)|\), \(f(|x|)\) trong M3 là **mở rộng sư phạm** trên cơ sở hàm số bậc hai; reviewer phải xác định mức phù hợp với S1, không gọi mọi kiến thức mở rộng là Core bắt buộc.
3. Đối chiếu câu gốc của SGK/Topic/Written trước khi chốt hồ sơ; nếu nguồn gốc không sẵn, ghi \`Q15_SEMANTIC_HOLD\`, không tự suy các ID chính thức là khác câu.
4. **PRIVATE RD1:** câu độc lập/kết quả/rubric không đăng lên GitHub; các câu có lời giải công khai ở đây không dùng lại cho RD1 sau khi đã bị nhìn thấy.
5. Snapshot PASS R18 bất biến vẫn nguyên vẹn; việc bổ sung DELTA_C chỉ review phần chịu ảnh hưởng (M1–M3), không ép review lại M4–M7.

**STATE:** \`REUSE_MAP_FROM_R18_VERIFIED\` · \`Q15_SEMANTIC_HOLD\` · \`NEW_CONTENT_REVIEW_PENDING\` · \`NO_CONTENT_READY\`.


## V. Quyết định Q15 R05 có hiệu lực (10/11/2026)

Đối chiếu tiếp với canonical public B15, Topic G10 P02 và nguồn Kiến thức bổ sung đã rút ba candidate `DRAFT-T1-M1-APP01`, `DRAFT-T1-M1-APP04`, `DRAFT-T1-M3-APP08` vì trùng thao tác/số liệu/công cụ đã có; **không mint item_id mới**. Căn cứ và 11 ứng viên còn lại được khóa tại `Temp_TOPIC1_Q15_CROSS_BANK_RETIRE_3_AND_11_CANDIDATES_R05_20261110.md`. Phần III là lịch sử rút 3 candidate trước R04; tổng cộng 6 DRAFT đã rút từ R00. Q15 semantic toàn bank vẫn HOLD; reviewer độc lập chỉ đánh giá các ứng viên còn lại.


## VI. R09 hiện hành — SGK/Topic dùng chung theo outcome, không giới hạn số câu mới

**Chỉ đạo owner:** Học liệu SGK và Chuyên đề dùng chung bài tập tương tác khi cùng đạt outcome. Bài luyện mới **không bị giới hạn số lượng**; biên soạn thêm khi đã đối chiếu ngân hàng và chứng minh thiếu loại suy luận, mức độ hoặc trải nghiệm. Mọi đoạn cũ ghi \`11 DRAFT\` là lịch sử **R06/R05**, không phải số hiện tại.

**Đối chiếu hiện tại:** [Báo cáo 6 bank SGK, 255 IDs duy nhất, 88 ID trong R18 tìm thấy nguồn](Temp_TOPIC1_M1_M7_SGK_SHARED_INTERACTIVE_EXERCISE_REUSE_R09_20261110.md), Git blob \`250c89c6da3b8550f4c6810ab56949d72132917d\`. Mục I của file này giữ các placement gốc; bổ sung không thay source:

| Bài SGK public có nguồn thực | Placement mới **đề nghị** trong Topic | Lý do / giới hạn |
|---|---|---|
| \`THPT-G10-B15-P04\` — ngân sách/cước theo miền | \`TOP-G10-FUNC-O05\` và hỗ trợ \`O10\` | SGK đã có câu ứng dụng nhiều bước mà R18 chưa liệt kê ở O05; thêm placement, không nhân bản câu |
| \`THPT-G10-CHVI-APP-A1\` — tập xác định căn | \`O02\` | Luyện nền, tương đồng C02, **không** thay ứng viên miền giao căn+mẫu sâu hơn |
| \`THPT-G10-CHVI-APP-A2\` — parabol đỉnh + giao trục | \`O07/O08\` | Cùng hàm với R18 M3-T01: đỉnh/GTLN **đã lộ**, giao trục là bước bổ sung; chỉ dùng công khai formative |
| \`THPT-G10-CHVI-APP-B3\` — tối ưu hàng rào + ngưỡng diện tích | \`O10\` | Ứng dụng tích hợp phù hợp, **cần gợi ý phép giải bất phương trình ngay tại Topic** để không buộc học sinh mở B17 SGK |
| \`HPT-G10-CHVI-WRI-15-01/15-02\` | \`O01/O03\` và \`O05\` | Cùng trang Written/Anchor và rubric gốc; thêm placement, không tạo lại đề |

**Kiểm trạng thái câu đã lộ:** \`THPT-G10-B15-P02\` được chính bank gốc gắn \`EXPOSED_IN_KNOWLEDGE\`; \`THPT-G10-TOP-FUNC-P05\` cùng tình huống và gần trùng lời giải R18 M3-T02. Cả hai được luyện lại/khắc phục, **không** dùng làm câu kiểm tra độc lập chưa tiếp xúc.

**Khoảng trống thực chất:** Đã có \`TOP-G10-FUNC-P01\` (kiểm điểm) và \`DRAFT-T1-M2-WR01\` (giải thích ranh giới dự đoán–đo), nhưng **chưa có câu chọn đáp án tương tác** đòi phân biệt **ba điểm quan sát** và **hai quy tắc cùng đi qua ba điểm nhưng khác tại điểm chưa đo**. Thêm \`DRAFT-T1-M2-APP07\` cho outcome \`O03\`, 4 phương án có distractor/D6 về miền quan sát và miền mô hình; đây là **ứng viên new shared item**, không lấy ngay ID canonical và không tích hợp trình quiz website trên nhánh AUTHORING. Source bài hiện hành: \`Temp_TOPIC1_M2_M3_PUBLIC_PRACTICE_DRAFT_R00_20261110.md\`, blob \`397f75cba490e47270bc2dd07eabe80efc08aa68\`.

**Tổng ứng viên hiện hành = 12 DRAFT (8 APP + 4 Written).** Việc chốt \`item_id/content_version/placement\` mới tuân một bank chung SGK–Topic, QA theo rủi ro. Không review Notebook theo phản xạ; chỉ dùng khi có nghi vấn học thuật/pedagogy cần phản biện. Không thay nguồn R18 đã PASS hoặc RD1 kín.

**R09_STATE:** \`B15_SHARED_REUSE_EXPANDED\` · \`G11_G12_SHARED_SOURCES_CONFIRMED\` · \`1_M2_INTERACTIVE_GAP_CANDIDATE\` · \`12_DRAFT\` · \`NO_READY_NO_RELEASE\`.
