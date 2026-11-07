# Temp · Toán 10 KNTT SGK Chương III B05–B06 — FULL R03 canonical source-locked AUTHORING composite

PACKET_ID: G10-SGK-CHIII-FULL-R03-CANDIDATE-20261105
STANDARD_ID: SLM-THPT-QUALITY-ONE
CURRENT_GOVERNANCE_VERSION: 1.2.0
LEARNING_PATH: SGK_CHAPTER
RELEASE_SCOPE: FULL_LEARNING_PATH
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO
R01_ORIGINAL_SOURCE_GIT_BLOB: 6320aeaa89bd51c514b07461e01fad5e3aca833f
R02_ORIGINAL_SOURCE_GIT_BLOB: f7bbffc8e06fdde446f15016f837541e216225b0
PUBLIC_CHIII_JSON_GIT_BLOB: f9c35b7afa6e45a3937bd55c7a41bc7e3c647c2d
R01_ORIGINAL_INDEPENDENT_RECEIPT_BLOB: 3fb823c4353d368ae5a9c14f03c7309933d47e6f
R02_ORIGINAL_OWNER_PASTED_REPORT_BLOB: 62ab31e03554241883a41d2e66c1cc7f5ab93f60

**Cách học:** Phần A R02 (WHY → PRE → MEANING → hình → phương pháp → FIRST_TRY tự mở lời giải) cần được trình bày trước phần B R01 (kiến thức, ví dụ, SGK Core, luyện tập, Written/Anchor, SVG và HELP). Phần C là tự kiểm tra cuối chương 14 câu đã công khai, chỉ đối chiếu sau Final Submit, không có Mastery/official RD1. Các dòng `PENDING` trong các nguồn gốc ở dưới là trạng thái lịch sử trước phản biện, không thay verdict R02 sau review.

**Bảo toàn học liệu:** A/B là nguyên văn hai nguồn R02/R01; C là JSON từ main nguyên văn, không sửa stem, key, solution hay rubric. R02 đã được NotebookLM phản biện Academic/PED PASS 10/10 outcomes; hai câu TRY08/TRY09 được xác nhận đúng nguyên văn qua báo cáo scoped bổ sung ngày 05/11; R03 chỉ đóng gói tương đương Delta B, không tự nhận review mới toàn R03.

## PART_A_FROZEN_PED_R02_ORIGINAL_UNMODIFIED
# Toán 10 KNTT — Chương III, Bài 5–6 — PED Delta C R02: gói phản biện độc lập trọn chương

PACKET_ID: G10-SGK-CHIII-PED-BRIDGE-R02-20261104
STATUS: AUTHORING_REVIEW_CANDIDATE
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.2.0
REVIEW_SCOPE: B05_B06_PED1_PED6_DELTA_C_ONLY
LEARNING_PATH: SGK_CHAPTER
RELEASE_SCOPE: PEDAGOGICAL_SOURCE_UPGRADE_NOT_WEBSITE_RELEASE
BASE_R01_ACADEMIC_VERDICT: INDEPENDENT_PASS_HISTORICAL_SCOPE
NEW_ACADEMIC_VERDICT: PENDING_NOTEBOOKLM
NEW_PEDAGOGICAL_VERDICT: PENDING_NOTEBOOKLM
CONTENT_READY: NO
MASTERY_ACTIVATION: NO
RELEASE_AUTHORIZATION: NO
ASSESSMENT_MODE: PUBLIC_UNSCORED_PRE_CORE_FIRST_TRY_NO_MASTERY

## A. Nguồn S1, chuẩn và giới hạn phạm vi

- **Chuẩn duy nhất:** `SLM-THPT-QUALITY-ONE` Q01–Q18, phiên bản có hiệu lực trên GitHub `main` là **v1.2.0** (tệp quy phạm `prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md`, PR #744 đã merge). Không tạo bộ chuẩn PED mới.
- **NotebookLM:** chọn đúng **5 Permanent Sources THPT v2.1** đã thay thế và SGK/SBT Kết nối tri thức Toán 10 tập một; không chọn v2.0 đồng thời, không thêm permanent source thứ sáu. **Gói Temp này là tài liệu nguồn bổ sung để review**, không phải Permanent Source.
- **SGK KNTT Toán 10 tập một, Chương III:** Bài 5 trang in **33–37**, Bài 6 trang in **38–43**, bài tập cuối chương trang in **44–45**. **SBT tập một:** Bài 5 trang in **29–33**, Bài 6 **34–39**, cuối chương **40–44**. Các trang và nội dung được **kế thừa từ source receipt R01 đã được phản biện độc lập**, chứ KHÔNG phải xác nhận đã mở lại PDF S1 trong lượt biên soạn này; NotebookLM phải trực tiếp đối chiếu SGK/SBT gốc khi review Delta C.
- **R01 frozen academic source:** `prototypes/thpt/content-drafts/THPT_G10_CHIII_B05_B06_D1D6_AUTHORING_R01_SNAPSHOT.md`, Git blob `6320aeaa89bd51c514b07461e01fad5e3aca833f`; original independently reviewed R01 receipt `prototypes/thpt/content-drafts/THPT_G10_CHIII_B05_B06_NOTEBOOKLM_D1D6_R01_PASS_RECEIPT_20261029.md`, blob `3fb823c4353d368ae5a9c14f03c7309933d47e6f`.
- **Học liệu đã PASS và tuyệt đối không sửa trong gói này:** 10 outcomes, 16 câu SGK Core/Practice, 2 Written (Anchor chỉ là nhãn), **6** ví dụ D2, **2 SVG** D5 và **4 HELP** D6. R01 độc lập PASS nội dung toán 18/18 câu, 10/10 outcomes, không có P0/P1 toán; R01 lịch sử dùng 5 Permanent Sources v2.0 của thời điểm đó, không tự đổi verdict cũ thành v2.1/v1.2.0.
- **Gói R02 chỉ thêm:** 10 đoạn dẫn dắt **PED1–PED6** theo đúng từng outcome và **10 canonical First Try** công khai, chưa chấm, chưa ghi điểm/Mastery, tự mở đáp án để đối chiếu **sau khi học sinh tự thử**. Tất cả đặt **TRƯỚC Core** liên quan khi tích hợp ở RELEASE. Có bảng định tuyến về 4 HELP gốc. Không tạo câu kiểm tra bảo mật hay official Readiness mới.
- **Không can thiệp:** các trang `docs/`, Golden R4/THCS, Firebase, trình chấm, Chapter Readiness, ngân hàng RD1 riêng tư, website release, PR merge/deploy. 14 câu tự kiểm tra cuối chương đã công khai trong `docs/assets/data/thpt-g10-readiness/CHIII.json` giữ nguyên `CLIENT_SELF_CHECK_NO_MASTERY`; không trùng hay dùng First Try làm bằng chứng đánh giá độc lập.

## B. Ma trận outcome / First Try / chứng cứ kế thừa

| LESSON_ID | OUTCOME_ID | FIRST_TRY_ITEM_ID (mới) | R01 Core/Practice/Written tham chiếu (không copy câu) | D2 / D5 / D6 kế thừa |
|---|---|---|---|---|
| G10-SGK-B05 | G10-B05-UNIT_SEMICIRCLE | THPT-G10-CHIII-TRY01 | THPT-G10-B05-C01 | EX-G10-B05-01 / FIG-G10-B05-01 / HELP-G10-B05-01 |
| G10-SGK-B05 | G10-B05-SPECIAL_ANGLES | THPT-G10-CHIII-TRY02 | THPT-G10-B05-P03 | EX-G10-B05-01/03 / FIG-G10-B05-01 / HELP-G10-B05-01 |
| G10-SGK-B05 | G10-B05-SIGN_DOMAIN | THPT-G10-CHIII-TRY03 | THPT-G10-B05-C02, B05-P06 | EX-G10-B05-02 / FIG-G10-B05-01 / HELP-G10-B05-02 |
| G10-SGK-B05 | G10-B05-SUPPLEMENTARY | THPT-G10-CHIII-TRY04 | THPT-G10-B05-P01/P05 | EX-G10-B05-01/03 / FIG-G10-B05-01 / HELP-G10-B05-01 |
| G10-SGK-B05 | G10-B05-IDENTITIES | THPT-G10-CHIII-TRY05 | THPT-G10-B05-P02/P04, THPT-G10-CHIII-W05 | EX-G10-B05-02 / HELP-G10-B05-02 |
| G10-SGK-B06 | G10-B06-COSINE_RULE | THPT-G10-CHIII-TRY06 | THPT-G10-B06-C01/P06 | EX-G10-B06-01 / FIG-G10-B06-01 / HELP-G10-B06-01 |
| G10-SGK-B06 | G10-B06-SINE_RULE | THPT-G10-CHIII-TRY07 | THPT-G10-B06-P01/P03 | EX-G10-B06-02 / HELP-G10-B06-01 |
| G10-SGK-B06 | G10-B06-AREA_SIN | THPT-G10-CHIII-TRY08 | THPT-G10-B06-C02/P04 | EX-G10-B06-01 / FIG-G10-B06-01 / HELP-G10-B06-02 |
| G10-SGK-B06 | G10-B06-HERON | THPT-G10-CHIII-TRY09 | THPT-G10-B06-P02/P04 | EX-G10-B06-03 / HELP-G10-B06-02 |
| G10-SGK-B06 | G10-B06-APPLICATION | THPT-G10-CHIII-TRY10 | THPT-G10-B06-P05, THPT-G10-CHIII-W06-ANCHOR | EX-G10-B06-02/03 / HELP-G10-B06-01/02 |

*Giới hạn của ma trận:* mỗi First Try có **một** `item_id` canonical và một `placement` trước Core, không nhân bản vào Core/Practice hay ngân hàng kiểm tra; các ID R01 ở cột kế thừa chỉ là liên kết hỗ trợ và vẫn giữ nguyên source/answer/rubric gốc. `HELP_ID` không phải `item_id`. Hình B05 dùng nửa đường tròn đơn vị; hình B06 dùng tam giác, không bắt học sinh tự suy ra các góc/độ dài không được ghi hoặc chỉ dẫn.

## C. Học liệu R02 đúng thứ tự: PED1 → PED2 → PED3 → PED4 → PED5 → PED6 (First Try) → Core R01

**Chỉ dẫn triển khai:** mỗi mục dưới đây phải được đọc trước định nghĩa/công thức hoặc Core tương ứng. Khối đáp án của First Try **mặc định đóng** và chỉ mở khi học sinh chủ động chọn *Xem đối chiếu sau khi tự thử*; đây là mô tả yêu cầu nội dung để RELEASE tích hợp, chưa phải tính năng đã hoạt động. Học sinh sai quay về HELP nêu rõ trước khi thử lại bằng câu luyện tập đã có của R01. Không ấn nút Submit chính thức hoặc ghi tiến độ Mastery từ phần này.

### 01. G10-B05-UNIT_SEMICIRCLE — THPT-G10-CHIII-TRY01

LESSON_ID: G10-SGK-B05
OUTCOME_ID: G10-B05-UNIT_SEMICIRCLE
ITEM_ID: THPT-G10-CHIII-TRY01
ROLE: SGK_PRE_CORE_FIRST_TRY
PLACEMENT_ID: THPT-G10-CHIII-TRY01-PRECORE-BEFORE-R01
SCORING: UNSCORED_PUBLIC_NO_MASTERY
REMEDIATION_HELP: HELP-G10-B05-01
FOLLOW_UP_EXISTING_CORE_OR_PRACTICE: THPT-G10-B05-C01

**PED1 · Vì sao cần học.** Khi một bán kính quay trên mặt phẳng, làm sao nói chính xác đầu bán kính nằm lệch sang trái hay lên cao mà không cần đo bằng mắt? Các tọa độ cho ta ngôn ngữ để mô tả hướng và dự đoán dấu của lượng giác.

**PED2 · Kiến thức tiền đề.** Nhắc lại hệ trục tọa độ Oxy, nửa mặt phẳng phía trên có tung độ không âm, bán kính đường tròn đơn vị bằng 1. Điểm trên đường tròn thỏa x²+y²=1. Góc đo từ Ox dương theo chiều ngược kim đồng hồ.

**PED3 · Hình thành bản chất trước công thức.** Hãy tưởng tượng đầu bán kính đi từ (1,0) theo nửa đường tròn phía trên. Tọa độ ngang x biểu diễn cos α, tọa độ đứng y biểu diễn sin α; chính hình chiếu giải thích hai giá trị, không phải công thức cần học thuộc trước. Sau khi thấy x,y mới ghi cos α=x và sin α=y, với 0°≤α≤180°.

**PED4 · Đọc hình / lý do không cần hình bổ sung.** Ở `FIG-G10-B05-01`, tìm O, Ox, M ứng với góc 120°. Đọc đường dóng từ M xuống hai trục: M nằm bên trái Oy nên hoành độ âm, ở trên Ox nên tung độ dương. Với α=180°, đầu bán kính nằm chính trên trục Ox âm.

**PED5 · Lý do chọn phương pháp, điều kiện và giới hạn.** Nếu đề hỏi sin/cos của một góc và có thể hình dung điểm M, xác định vị trí và dấu tọa độ trước; chưa cần tính tan/cot. Cách này bị giới hạn ở mô hình đã chọn 0°–180°, không tùy tiện suy ra giá trị theo chiều quay khác.

**PED6 · TỰ THỬ TRƯỚC CORE — câu hỏi.** Trên nửa đường tròn đơn vị, khi α=180°, điểm M có tọa độ gì? Từ đó xác định sin α, cos α và giải thích bằng hình chiếu.

<details><summary>Đối chiếu sau khi em tự thử — mặc định đóng</summary>

**Đáp án canonical và giải thích.** M=(-1,0); sin180°=0, cos180°=-1. M ở trên Ox âm nên tung độ bằng 0, hoành độ bằng -1.

**Nếu chưa đúng:** Xem lại `HELP-G10-B05-01` ở R01, thử nhắc lại bản chất bằng lời của mình rồi làm câu liên kết `THPT-G10-B05-C01`; phần sau này là luyện tập tự nguyện, không là kiểm tra độc lập.

</details>

### 02. G10-B05-SPECIAL_ANGLES — THPT-G10-CHIII-TRY02

LESSON_ID: G10-SGK-B05
OUTCOME_ID: G10-B05-SPECIAL_ANGLES
ITEM_ID: THPT-G10-CHIII-TRY02
ROLE: SGK_PRE_CORE_FIRST_TRY
PLACEMENT_ID: THPT-G10-CHIII-TRY02-PRECORE-BEFORE-R01
SCORING: UNSCORED_PUBLIC_NO_MASTERY
REMEDIATION_HELP: HELP-G10-B05-01
FOLLOW_UP_EXISTING_CORE_OR_PRACTICE: THPT-G10-B05-P03

**PED1 · Vì sao cần học.** Vì sao hai góc nhìn rất khác nhau như 45° và 135° có cùng độ cao trên nửa đường tròn, nhưng hướng ngang trái/ngược nhau? Hiểu sự đối xứng giúp nhớ các giá trị đặc biệt thay vì học hai bảng rời rạc.

**PED2 · Kiến thức tiền đề.** Nhắc lại sin45°=cos45°=√2/2 từ tam giác vuông cân. Hai điểm đối xứng qua trục Oy có cùng tung độ và hoành độ trái dấu.

**PED3 · Hình thành bản chất trước công thức.** Góc 135° là ảnh đối xứng của 45° qua Oy. Vì vậy sin135°=sin45° còn cos135°=-cos45°. Các góc đặc biệt 120°, 150° cũng được hiểu từ góc nhọn tham chiếu 60°, 30°; ghi bảng sau khi giải thích đối xứng.

**PED4 · Đọc hình / lý do không cần hình bổ sung.** Ở `FIG-G10-B05-01`, nhận xét điểm ứng với góc tù ở bên trái Oy. Vẽ tưởng tượng đường ngang nối hai điểm cùng độ cao để thấy sin không đổi và cos đổi dấu.

**PED5 · Lý do chọn phương pháp, điều kiện và giới hạn.** Nhận góc tham chiếu nhọn (30°,45°,60°) và dấu theo vùng trên nửa đường tròn trước khi thế vào bảng; không tự cho cos góc tù dương vì độ lớn cos vẫn nhỏ hơn 1.

**PED6 · TỰ THỬ TRƯỚC CORE — câu hỏi.** Không dùng máy tính, tính sin135° và cos135°. Hai giá trị này khác sin45°, cos45° về dấu như thế nào?

<details><summary>Đối chiếu sau khi em tự thử — mặc định đóng</summary>

**Đáp án canonical và giải thích.** sin135°=√2/2; cos135°=-√2/2. So với 45°, sin giữ nguyên, cos đổi dấu do đối xứng qua Oy.

**Nếu chưa đúng:** Xem lại `HELP-G10-B05-01` ở R01, thử nhắc lại bản chất bằng lời của mình rồi làm câu liên kết `THPT-G10-B05-P03`; phần sau này là luyện tập tự nguyện, không là kiểm tra độc lập.

</details>

### 03. G10-B05-SIGN_DOMAIN — THPT-G10-CHIII-TRY03

LESSON_ID: G10-SGK-B05
OUTCOME_ID: G10-B05-SIGN_DOMAIN
ITEM_ID: THPT-G10-CHIII-TRY03
ROLE: SGK_PRE_CORE_FIRST_TRY
PLACEMENT_ID: THPT-G10-CHIII-TRY03-PRECORE-BEFORE-R01
SCORING: UNSCORED_PUBLIC_NO_MASTERY
REMEDIATION_HELP: HELP-G10-B05-02
FOLLOW_UP_EXISTING_CORE_OR_PRACTICE: THPT-G10-B05-C02

**PED1 · Vì sao cần học.** Nếu ta lấy độ dốc của một hướng bằng “độ cao chia độ lệch ngang”, điều gì xảy ra khi độ lệch ngang bằng 0? Đó là lí do tan/cot phải có điều kiện xác định, không thể suy chúng luôn là những con số.

**PED2 · Kiến thức tiền đề.** Nhắc lại phép chia không được có mẫu bằng 0. Trên nửa đường tròn đơn vị sin≥0, cos có thể âm, bằng 0 hoặc dương tùy góc.

**PED3 · Hình thành bản chất trước công thức.** Tan α là tỉ số sin α/cos α, chỉ có nghĩa nếu cos α≠0; cot α là cos α/sin α, chỉ có nghĩa nếu sin α≠0. Khái niệm miền xác định phải có trước thao tác chia. Tan/cot có thể bằng 0 khi tử bằng 0 và mẫu khác 0.

**PED4 · Đọc hình / lý do không cần hình bổ sung.** Dùng `FIG-G10-B05-01` để đọc hai trục và hình dung tại 0° thì M=(1,0), tại 90° thì M=(0,1). Với x=0, không thể lấy y/x; với y=0, không thể lấy x/y.

**PED5 · Lý do chọn phương pháp, điều kiện và giới hạn.** Muốn tính tan/cot, xét mẫu trước rồi mới lập tỉ số; dấu của tan/cot là dấu của thương. Không nhầm “không xác định” với số 0.

**PED6 · TỰ THỬ TRƯỚC CORE — câu hỏi.** Trong bốn giá trị tan0°, cot0°, tan90°, cot90°, giá trị nào bằng 0 và giá trị nào không xác định? Giải thích bằng mẫu số.

<details><summary>Đối chiếu sau khi em tự thử — mặc định đóng</summary>

**Đáp án canonical và giải thích.** tan0°=0/1=0; cot0°=1/0 không xác định; tan90°=1/0 không xác định; cot90°=0/1=0.

**Nếu chưa đúng:** Xem lại `HELP-G10-B05-02` ở R01, thử nhắc lại bản chất bằng lời của mình rồi làm câu liên kết `THPT-G10-B05-C02`; phần sau này là luyện tập tự nguyện, không là kiểm tra độc lập.

</details>

### 04. G10-B05-SUPPLEMENTARY — THPT-G10-CHIII-TRY04

LESSON_ID: G10-SGK-B05
OUTCOME_ID: G10-B05-SUPPLEMENTARY
ITEM_ID: THPT-G10-CHIII-TRY04
ROLE: SGK_PRE_CORE_FIRST_TRY
PLACEMENT_ID: THPT-G10-CHIII-TRY04-PRECORE-BEFORE-R01
SCORING: UNSCORED_PUBLIC_NO_MASTERY
REMEDIATION_HELP: HELP-G10-B05-01
FOLLOW_UP_EXISTING_CORE_OR_PRACTICE: THPT-G10-B05-P01

**PED1 · Vì sao cần học.** Khi quay một hướng từ 40° sang 140°, điểm trên đường tròn đổi bên trái/phải nhưng vẫn giữ nguyên độ cao. Ta có thể tính hoặc so sánh lượng giác góc tù từ góc nhọn đã biết mà không học thuộc công thức mới một cách rời rạc.

**PED2 · Kiến thức tiền đề.** Nhắc lại hai góc bù có tổng 180° và phép phản xạ qua trục Oy giữ nguyên tung độ, đổi dấu hoành độ.

**PED3 · Hình thành bản chất trước công thức.** Đối với góc β=180°−α, hai điểm trên nửa đường tròn đối xứng qua Oy. Vì vậy sin β=sin α và cos β=−cos α. Tan, cot đổi dấu khi các tỉ số có nghĩa; phải xét mẫu số trước.

**PED4 · Đọc hình / lý do không cần hình bổ sung.** Đọc cặp điểm ở 40°/140° đối xứng qua Oy trên nửa đường tròn; nêu bằng lời vì sao đường dóng ngang có cùng độ cao, còn đường dóng dọc nằm hai phía Oy.

**PED5 · Lý do chọn phương pháp, điều kiện và giới hạn.** Nhận diện tổng 180° trước, đổi dấu **chỉ** những hàm có thay đổi dấu; kiểm tra miền xác định trước khi dùng công thức tan/cot. Không áp dụng tùy tiện cho tổng góc không bằng 180°.

**PED6 · TỰ THỬ TRƯỚC CORE — câu hỏi.** Hai góc 40° và 140° có các quan hệ nào giữa sin, cos, tan và cot? Có cần tính số thập phân để kết luận không?

<details><summary>Đối chiếu sau khi em tự thử — mặc định đóng</summary>

**Đáp án canonical và giải thích.** sin140°=sin40°; cos140°=−cos40°; tan140°=−tan40°; cot140°=−cot40°. Không cần số thập phân; tan/cot xác định ở cả hai góc này.

**Nếu chưa đúng:** Xem lại `HELP-G10-B05-01` ở R01, thử nhắc lại bản chất bằng lời của mình rồi làm câu liên kết `THPT-G10-B05-P01`; phần sau này là luyện tập tự nguyện, không là kiểm tra độc lập.

</details>

### 05. G10-B05-IDENTITIES — THPT-G10-CHIII-TRY05

LESSON_ID: G10-SGK-B05
OUTCOME_ID: G10-B05-IDENTITIES
ITEM_ID: THPT-G10-CHIII-TRY05
ROLE: SGK_PRE_CORE_FIRST_TRY
PLACEMENT_ID: THPT-G10-CHIII-TRY05-PRECORE-BEFORE-R01
SCORING: UNSCORED_PUBLIC_NO_MASTERY
REMEDIATION_HELP: HELP-G10-B05-02
FOLLOW_UP_EXISTING_CORE_OR_PRACTICE: THPT-G10-B05-P02

**PED1 · Vì sao cần học.** Nếu biết chỉ thành phần ngang của một hướng, ta có thể suy thành phần đứng từ độ dài bán kính 1 hay không? Hệ thức lượng giác là hệ quả của Pitago, nhưng vẫn cần thông tin vị trí để chọn dấu.

**PED2 · Kiến thức tiền đề.** Nhắc lại x²+y²=1 của đường tròn đơn vị và Pitago; căn bậc hai của một bình phương có thể cho hai dấu. Với góc tù trên (90°,180°), sin>0, cos<0.

**PED3 · Hình thành bản chất trước công thức.** Thay x=cos α, y=sin α vào x²+y²=1, suy ra sin²α+cos²α=1. Khi biết cos α, tính độ lớn sin rồi dùng nửa đường tròn để chọn dấu; không suy sin âm trên miền góc của bài.

**PED4 · Đọc hình / lý do không cần hình bổ sung.** Từ M ở nửa trái đường tròn, dựng tam giác vuông tới các trục: bình phương hai cạnh góc vuông cộng lại bằng 1. Hướng đứng của M dương dù hướng ngang âm.

**PED5 · Lý do chọn phương pháp, điều kiện và giới hạn.** Sử dụng Pitago khi có một sin/cos đã biết; chọn dấu từ khoảng góc; tính tan cuối cùng khi cos khác 0. Không lấy căn dương cho cos góc tù chỉ vì là căn bậc hai.

**PED6 · TỰ THỬ TRƯỚC CORE — câu hỏi.** Góc tù α có cosα=−5/13. Tìm sinα và tanα, kèm lí do chọn dấu.

<details><summary>Đối chiếu sau khi em tự thử — mặc định đóng</summary>

**Đáp án canonical và giải thích.** sin²α=1−25/169=144/169. Góc tù có sin>0 nên sinα=12/13; tanα=(12/13)/(−5/13)=−12/5.

**Nếu chưa đúng:** Xem lại `HELP-G10-B05-02` ở R01, thử nhắc lại bản chất bằng lời của mình rồi làm câu liên kết `THPT-G10-B05-P02`; phần sau này là luyện tập tự nguyện, không là kiểm tra độc lập.

</details>

### 06. G10-B06-COSINE_RULE — THPT-G10-CHIII-TRY06

LESSON_ID: G10-SGK-B06
OUTCOME_ID: G10-B06-COSINE_RULE
ITEM_ID: THPT-G10-CHIII-TRY06
ROLE: SGK_PRE_CORE_FIRST_TRY
PLACEMENT_ID: THPT-G10-CHIII-TRY06-PRECORE-BEFORE-R01
SCORING: UNSCORED_PUBLIC_NO_MASTERY
REMEDIATION_HELP: HELP-G10-B06-01
FOLLOW_UP_EXISTING_CORE_OR_PRACTICE: THPT-G10-B06-C01

**PED1 · Vì sao cần học.** Pitago chỉ cho tam giác vuông; với hai cạnh và góc xen giữa là góc tù, cạnh thứ ba có thể dài hơn nhiều. Làm sao tính đúng khi góc không vuông?

**PED2 · Kiến thức tiền đề.** Trong tam giác ABC không suy biến, a=BC đối diện A, b=CA đối diện B, c=AB đối diện C; mọi cạnh dương và a<b+c. Ôn Pitago và cos góc tù âm.

**PED3 · Hình thành bản chất trước công thức.** Chiếu một cạnh lên hướng cạnh kia: độ dài cạnh đối diện phụ thuộc cả hai cạnh và góc xen giữa. Hệ số điều chỉnh Pitago là −2bc cosA, từ đó a²=b²+c²−2bc cosA; A=90° thì cosA=0 và quay lại Pitago.

**PED4 · Đọc hình / lý do không cần hình bổ sung.** Dùng `FIG-G10-B06-01`: chỉ A, hai cạnh b,c kề A và cạnh a đối diện; đối chiếu góc được sử dụng, không lấy nhầm góc B/C vào −2bc cos.

**PED5 · Lý do chọn phương pháp, điều kiện và giới hạn.** Chọn định lí côsin trong trường hợp SAS (hai cạnh và góc xen giữa) hoặc SSS (tìm góc); không áp dụng công thức Pitago cho góc tù/nhọn không vuông.

**PED6 · TỰ THỬ TRƯỚC CORE — câu hỏi.** Trong tam giác có b=c=5 và A=120°, tính a. Tại sao cạnh a dài hơn mỗi cạnh kề 5?

<details><summary>Đối chiếu sau khi em tự thử — mặc định đóng</summary>

**Đáp án canonical và giải thích.** a²=25+25−50cos120°=50+25=75, nên a=5√3. Vì cos120°<0, phần điều chỉnh khiến cạnh đối diện góc tù dài hơn 5.

**Nếu chưa đúng:** Xem lại `HELP-G10-B06-01` ở R01, thử nhắc lại bản chất bằng lời của mình rồi làm câu liên kết `THPT-G10-B06-C01`; phần sau này là luyện tập tự nguyện, không là kiểm tra độc lập.

</details>

### 07. G10-B06-SINE_RULE — THPT-G10-CHIII-TRY07

LESSON_ID: G10-SGK-B06
OUTCOME_ID: G10-B06-SINE_RULE
ITEM_ID: THPT-G10-CHIII-TRY07
ROLE: SGK_PRE_CORE_FIRST_TRY
PLACEMENT_ID: THPT-G10-CHIII-TRY07-PRECORE-BEFORE-R01
SCORING: UNSCORED_PUBLIC_NO_MASTERY
REMEDIATION_HELP: HELP-G10-B06-01
FOLLOW_UP_EXISTING_CORE_OR_PRACTICE: THPT-G10-B06-P01

**PED1 · Vì sao cần học.** Trong đo đạc, thường dễ đo góc từ hai điểm hơn là trực tiếp đo khoảng cách tới vật. Định lí sin giúp nối các góc với các cạnh đối diện mà không cần dựng đường cao rồi chia nhỏ tam giác.

**PED2 · Kiến thức tiền đề.** Tổng ba góc trong tam giác bằng 180°; cạnh a đối diện góc A, sin góc trong tam giác dương; R>0 là bán kính ngoại tiếp. Phân biệt một góc với cạnh đối diện của góc đó.

**PED3 · Hình thành bản chất trước công thức.** Định lí sin a/sinA=b/sinB=c/sinC=2R cho thấy cạnh lớn tương ứng sin góc lớn hơn trong cùng tam giác. Nó có ích cho ASA/AAS; với dữ liệu SSA có thể tồn tại hai tam giác khác nhau, không mặc định mọi kết quả arcsin là duy nhất.

**PED4 · Đọc hình / lý do không cần hình bổ sung.** Trong tam giác ở R01, đánh dấu cặp A–a, B–b, C–c; đặt hai cạnh đối diện cạnh nhau rồi so sánh. Hình `FIG-G10-B06-01` minh họa nhãn cạnh/góc, không phải một hình riêng chứng minh định lí sin.

**PED5 · Lý do chọn phương pháp, điều kiện và giới hạn.** Khi biết hai góc và một cạnh, tìm góc thứ ba rồi ghép đúng cặp cạnh–sin góc; dùng a/sinA=2R nếu cần bán kính. Không thể khôi phục cả tam giác từ một cặp A,a duy nhất.

**PED6 · TỰ THỬ TRƯỚC CORE — câu hỏi.** Trong tam giác có A=30° và a=5, tính bán kính ngoại tiếp R. Chỉ với hai dữ kiện này có xác định duy nhất các góc B,C không? Vì sao?

<details><summary>Đối chiếu sau khi em tự thử — mặc định đóng</summary>

**Đáp án canonical và giải thích.** 2R=a/sinA=5/(1/2)=10 nên R=5. Không xác định duy nhất B,C: cần thêm dữ kiện độc lập; chỉ biết B+C=150°.

**Nếu chưa đúng:** Xem lại `HELP-G10-B06-01` ở R01, thử nhắc lại bản chất bằng lời của mình rồi làm câu liên kết `THPT-G10-B06-P01`; phần sau này là luyện tập tự nguyện, không là kiểm tra độc lập.

</details>

### 08. G10-B06-AREA_SIN — THPT-G10-CHIII-TRY08

LESSON_ID: G10-SGK-B06
OUTCOME_ID: G10-B06-AREA_SIN
ITEM_ID: THPT-G10-CHIII-TRY08
ROLE: SGK_PRE_CORE_FIRST_TRY
PLACEMENT_ID: THPT-G10-CHIII-TRY08-PRECORE-BEFORE-R01
SCORING: UNSCORED_PUBLIC_NO_MASTERY
REMEDIATION_HELP: HELP-G10-B06-02
FOLLOW_UP_EXISTING_CORE_OR_PRACTICE: THPT-G10-B06-C02

**PED1 · Vì sao cần học.** Nếu hai cạnh và góc xen giữa đã biết nhưng chưa biết đường cao, liệu tính được diện tích mà không cần dựng và đo đường cao trực tiếp?

**PED2 · Kiến thức tiền đề.** Diện tích tam giác S=1/2×đáy×chiều cao. Với một cạnh c làm đáy, chiều cao từ đầu cạnh b tạo góc A có độ lớn b sinA; góc trong nằm (0°,180°) nên sinA>0.

**PED3 · Hình thành bản chất trước công thức.** Từ chiều cao h=b sinA, suy S=(1/2)bc sinA. Điều này giải thích cả việc hai góc bù có cùng sin nên khi giữ nguyên hai cạnh kề, diện tích có thể bằng nhau dù cạnh đối diện đổi chiều dài.

**PED4 · Đọc hình / lý do không cần hình bổ sung.** Trong `FIG-G10-B06-01`, xem góc A giữa b và c, hình chiếu vuông góc cho chiều cao của đỉnh C xuống đường chứa cạnh c. Nếu A tù, chân đường cao nằm trên phần kéo dài của đáy; diện tích vẫn dương.

**PED5 · Lý do chọn phương pháp, điều kiện và giới hạn.** Chọn công thức diện tích theo sin cho SAS; khi biết cả ba cạnh mà không biết góc, Heron thuận tiện hơn. Không thay nhầm góc không xen giữa b,c.

**PED6 · TỰ THỬ TRƯỚC CORE — câu hỏi.** Hai tam giác đều có hai cạnh kề b=6, c=8, nhưng góc xen giữa lần lượt A=30° và A=150°. Tính diện tích của từng tam giác và giải thích tại sao bằng nhau.

<details><summary>Đối chiếu sau khi em tự thử — mặc định đóng</summary>

**Đáp án canonical và giải thích.** Cả hai có S=(1/2)·6·8·sin30°=(1/2)·6·8·sin150°=12 đơn vị diện tích, do sin150°=sin30°. Chúng không nhất thiết có cùng cạnh thứ ba.

**Nếu chưa đúng:** Xem lại `HELP-G10-B06-02` ở R01, thử nhắc lại bản chất bằng lời của mình rồi làm câu liên kết `THPT-G10-B06-C02`; phần sau này là luyện tập tự nguyện, không là kiểm tra độc lập.

</details>

### 09. G10-B06-HERON — THPT-G10-CHIII-TRY09

LESSON_ID: G10-SGK-B06
OUTCOME_ID: G10-B06-HERON
ITEM_ID: THPT-G10-CHIII-TRY09
ROLE: SGK_PRE_CORE_FIRST_TRY
PLACEMENT_ID: THPT-G10-CHIII-TRY09-PRECORE-BEFORE-R01
SCORING: UNSCORED_PUBLIC_NO_MASTERY
REMEDIATION_HELP: HELP-G10-B06-02
FOLLOW_UP_EXISTING_CORE_OR_PRACTICE: THPT-G10-B06-P02

**PED1 · Vì sao cần học.** Chỉ biết ba cạnh mảnh đất hình tam giác mà chưa biết góc hoặc đường cao, vẫn có thể tính diện tích được hay không? Và ba số đo nào thực sự lập được một tam giác?

**PED2 · Kiến thức tiền đề.** Ba cạnh dương của tam giác phải thỏa tổng hai cạnh lớn hơn cạnh còn lại; nửa chu vi p=(a+b+c)/2. Diện tích S>0, r là bán kính nội tiếp và R là ngoại tiếp, không tráo hai ký hiệu.

**PED3 · Hình thành bản chất trước công thức.** Heron dùng dữ liệu SSS: S=√[p(p−a)(p−b)(p−c)], nhưng điều kiện tam giác phải được kiểm trước. Khi đã có S, công thức S=pr cho bán kính nội tiếp; công thức S=abc/(4R) cho ngoại tiếp.

**PED4 · Đọc hình / lý do không cần hình bổ sung.** Vẽ thử tam giác cạnh 3,4,5 so với bộ 2,3,6. Bộ thứ hai không thể khép cạnh thành tam giác vì 2+3<6. Một hình chữ V không khép kín không có “diện tích tam giác” để Heron tính.

**PED5 · Lý do chọn phương pháp, điều kiện và giới hạn.** Với ba cạnh SSS, kiểm bất đẳng thức tam giác, tính p rồi Heron; nếu dữ kiện đã cho góc xen giữa, cân nhắc công thức theo sin để giảm biến đổi. Không tự lấy căn một biểu thức âm và gọi là diện tích thực.

**PED6 · TỰ THỬ TRƯỚC CORE — câu hỏi.** Bộ ba cạnh (3,4,5) cho diện tích S và bán kính nội tiếp r bao nhiêu? Bộ ba (2,3,6) có áp dụng Heron cho một tam giác được không? Giải thích.

<details><summary>Đối chiếu sau khi em tự thử — mặc định đóng</summary>

**Đáp án canonical và giải thích.** Với 3,4,5: p=6, S=√(6·3·2·1)=6, r=S/p=1. Với 2,3,6: 2+3<6, không lập thành tam giác nên không có diện tích tam giác hợp lệ.

**Nếu chưa đúng:** Xem lại `HELP-G10-B06-02` ở R01, thử nhắc lại bản chất bằng lời của mình rồi làm câu liên kết `THPT-G10-B06-P02`; phần sau này là luyện tập tự nguyện, không là kiểm tra độc lập.

</details>

### 10. G10-B06-APPLICATION — THPT-G10-CHIII-TRY10

LESSON_ID: G10-SGK-B06
OUTCOME_ID: G10-B06-APPLICATION
ITEM_ID: THPT-G10-CHIII-TRY10
ROLE: SGK_PRE_CORE_FIRST_TRY
PLACEMENT_ID: THPT-G10-CHIII-TRY10-PRECORE-BEFORE-R01
SCORING: UNSCORED_PUBLIC_NO_MASTERY
REMEDIATION_HELP: HELP-G10-B06-01 và HELP-G10-B06-02
FOLLOW_UP_EXISTING_CORE_OR_PRACTICE: THPT-G10-B06-P05

**PED1 · Vì sao cần học.** Không thể sang trực tiếp một điểm C bên kia vật cản để đo đoạn đường tới đó. Chỉ cần một đường chuẩn AB và các góc ngắm A,B, ta có thể dựng tam giác và tính những khoảng cách chưa đo trực tiếp.

**PED2 · Kiến thức tiền đề.** Mô tả chính xác tam giác khảo sát ABC, biết đoạn chuẩn AB=c, các góc A,B là góc trong tam giác, A+B<180°. Nhớ tổng ba góc, định lí sin và diện tích=1/2×đáy×chiều cao. Đơn vị độ dài phải thống nhất.

**PED3 · Hình thành bản chất trước công thức.** Bài đo đạc gồm hai tầng: chuyển tình huống thực thành tam giác đúng, rồi chọn quan hệ lượng. Tính các cạnh bằng định lí sin khi biết hai góc và cạnh chuẩn; nếu cần khoảng cách vuông góc từ C tới AB thì dùng chiều cao, không nhầm với AC hay BC.

**PED4 · Đọc hình / lý do không cần hình bổ sung.** Vẽ AB là đoạn chuẩn nằm ngang, C ở một phía đường AB; ghi góc tại A,B và điểm hạ vuông góc H từ C xuống AB. Đọc kỹ đại lượng đề hỏi là AC, BC hay CH; chúng không tự bằng nhau.

**PED5 · Lý do chọn phương pháp, điều kiện và giới hạn.** Với ASA/AAS chọn định lí sin; nếu cần chiều cao sau khi biết hai cạnh thì dùng diện tích hoặc lượng giác trong tam giác vuông; kiểm điều kiện hợp lí và đơn vị ở từng bước. Không dùng công thức Heron nếu chưa biết ba cạnh.

**PED6 · TỰ THỬ TRƯỚC CORE — câu hỏi.** Người khảo sát đo AB=20√2 m và các góc trong tam giác tại A,B đều 45°, còn C bên kia vật cản. Tính AC, BC và khoảng cách vuông góc CH từ C đến đường AB.

<details><summary>Đối chiếu sau khi em tự thử — mặc định đóng</summary>

**Đáp án canonical và giải thích.** C=90°, tam giác vuông cân tại C nên AC=BC=20 m (AB là cạnh huyền 20√2 m). Diện tích S=1/2·20·20=200 m²; CH=2S/AB=400/(20√2)=10√2 m.

**Nếu chưa đúng:** Xem lại `HELP-G10-B06-01 và HELP-G10-B06-02` ở R01, thử nhắc lại bản chất bằng lời của mình rồi làm câu liên kết `THPT-G10-B06-P05`; phần sau này là luyện tập tự nguyện, không là kiểm tra độc lập.

</details>


## D. Chứng cứ PED1–PED6 theo outcome và D6 khắc phục

- **B05 (5 outcomes):** học sinh đi từ hình chiếu trục tọa độ → bảng góc đặc biệt → dấu và điều kiện mẫu khác 0 → đối xứng góc bù → Pitago và dấu căn; tuyệt đối không chuyển bảng công thức lên trước phần MEANING. Hình gốc `FIG-G10-B05-01` và 2 HELP B05 đã PASS, không sao chép/viết lại SVG.
- **B06 (5 outcomes):** bắt đầu từ nhu cầu đo tam giác không vuông → định lí côsin / sin và trường hợp áp dụng → chiều cao–diện tích → Heron khi có SSS hợp lệ → khảo sát thực tế, nêu rõ dữ liệu nào đo được và độ dài nào cần tìm. Hình gốc `FIG-G10-B06-01` cùng 2 HELP B06 đã PASS, không nhân đôi đáp án/Rubric Written.
- **Phân luồng học sinh sai:** B05 sai vị trí/dấu/góc bù → `HELP-G10-B05-01`; sai điều kiện tan/cot và dấu căn → `HELP-G10-B05-02`; B06 nhầm góc/cạnh và định lí → `HELP-G10-B06-01`; sai diện tích/Heron/r,R và đơn vị → `HELP-G10-B06-02`. R02 cung cấp chỉ dẫn trỏ về HELP R01, không tạo câu gợi ý trong một ngân hàng đánh giá kín.
- **Tự kiểm tra cuối Chương III:** 14 câu trong `CHIII.json` đã công khai, vẫn chỉ là **client self-check sau Final Submit**, không sinh kết quả Mastery/official RD1; R02 không nhân bản, tái sử dụng hay thay đổi các câu này.

## E. QA AUTHORING trước NotebookLM (không tự cấp PASS)

EXPECTED_LESSON_IDS: G10-SGK-B05, G10-SGK-B06
EXPECTED_OUTCOME_IDS: 10 distinct G10-B05/B06 outcomes, one bridge each
EXPECTED_NEW_FIRST_TRY_ITEM_IDS: THPT-G10-CHIII-TRY01 through THPT-G10-CHIII-TRY10
EXPECTED_NEW_WRITTEN_IDS: 0
EXPECTED_NEW_HELP_IDS: 0
EXPECTED_NEW_SVG_IDS: 0
BASE_FROZEN_D1_D6_BODIES_CHANGED: NO
BASE_R01_PUBLIC_ITEM_STEMS_KEYS_SOLUTIONS_RUBRICS_CHANGED: NO
FULL_CHAPTER_V2_CONTENT_READY: NO
ACADEMIC_R02: PENDING_INDEPENDENT_REVIEW
PEDAGOGICAL_R02: PENDING_INDEPENDENT_REVIEW
DELTA_CLASS: DELTA_C_ACADEMIC_MATERIAL (only 10 concept-first bridges + 10 new unscored First Try)

**Hạng mục NotebookLM phải phản biện độc lập:** (1) đối chiếu toàn bộ S1 từng outcome, không lấy SBT vượt Core SGK; (2) đủ tính đúng đắn, điều kiện và giới hạn của 10 Tự thử, kể cả α=0°/90°/180°, góc tù, SSA, góc 150°, tam giác hợp lệ/không hợp lệ, đơn vị đo; (3) PED1–PED6 thật sự giúp tự học trước Core, có dẫn dắt bản chất thay vì áp công thức; (4) `item_id` canonical, unique và mapping/HELP/placement; (5) `CORE_KEEP`/`SUPPORT_ONLY` của cả 10 outcomes theo S1, không tự suy tất cả CORE; (6) trả đúng `STANDARD_ID`, `STANDARD_VERSION`, `PERMANENT_SOURCES_VERSION`, `SOURCE_RECEIPT`, Q01–Q18 theo phạm vi, Academic/PED verdict theo bài/outcome/item, P0/P1/P2, `MINIMAL_DELTA` và `REVIEWED_IDS`. **NotebookLM không phải nhánh RELEASE** và không được suy ra `CONTENT_READY` từ bản R02 chưa khóa receipt.

**Giới hạn Q18:** File tạm này là artifact chủ dự án sẽ đưa vào NotebookLM; tác giả sẽ khóa SHA256/bytes và đối chiếu nguồn Git khi reviewer trả báo cáo. Nếu NotebookLM không đọc được SHA của file đã chọn, ghi giới hạn nhận diện và đối chiếu nội dung toán/item, không tự bịa byte-parity Studio cũng không tạo một cổng đòi raw hash mới không có trong chuẩn.

## PART_B_FROZEN_D1_D6_R01_ORIGINAL_UNMODIFIED
# Temp · Toán 10 KNTT tập 1 · Chương III · Bài 5–6 · D1–D6 R01

**PACKET_ID:** `THPT-G10-CHIII-B05-B06-D1D6-AUTHORING-20261029-R01`  
**STATUS:** `NEW_ACADEMIC_MATERIAL_DELTA_C / ACADEMIC_REVIEW_PENDING / CONTENT_READY=NO`  
**OWNER_LANE:** `AUTHORING_ONLY` (A1–A7; không code website, merge/deploy, Mastery).  
**LEARNING_PATH:** `SGK_CHAPTER`; **RELEASE_SCOPE:** `PUBLIC_FORMATIVE_ONLY`; chỉ B05/B06, không có Tự kiểm tra cuối chương hoặc TOPIC Readiness.  
**MASTER_PLAN:** THPT Dual Complete Learning Paths v2.0 (file Project 08), không suy từ bài SGK sang Chuyên đề.  
**PERMANENT_SOURCES:** 5 nguồn THPT NotebookLM v2.0 đang hiệu lực, không sử dụng v1.0:
1. `01_THPT_MASTER_PLAN_v2.0.md`
2. `02_THPT_NOTEBOOKLM_INDEPENDENT_REVIEW_RULES_v2.0.md`
3. `03_THPT_ACADEMIC_SOURCES_AND_DEPTH_AUDIT_v2.0.md`
4. `04_THPT_GOLDEN_LEARNING_ARCHITECTURE_v2.0.md`
5. `05_THPT_CANONICAL_EXERCISE_AND_ID_CONTRACT_v2.0.md`

## 1. SOURCE_RECEIPT · SGK/SBT KNTT S1, trang in

| Phạm vi | SGK Toán 10 KNTT tập 1 | SBT Toán 10 KNTT tập 1 | Kiểm toán |
|---|---|---|---|
| Bài 5: Giá trị lượng giác của một góc từ 0° đến 180° | 33–37 (nội dung 34–37) | 29–33 | Đối chiếu trực tiếp PDF scan: nửa đường tròn đơn vị, bảng giá trị, góc bù, hệ thức và ứng dụng góc |
| Bài 6: Hệ thức lượng trong tam giác | 38–43 | 34–39 | Đối chiếu trực tiếp PDF scan: định lí côsin/sin, giải tam giác, diện tích theo sin, Heron, r/R, đo đạc ứng dụng |
| Bài tập cuối Chương III | 44–45 | 40–44 | Đối chiếu bài tập tổng hợp, trắc nghiệm/tự luận; là nguồn đối chiếu độ đa dạng, KHÔNG đưa câu kiểm tra giữ kín vào bản công khai |
| Hướng dẫn lời giải SBT Chương III | — | Bắt đầu 94 | Nguồn S1 cho đối chiếu thuật toán/đáp án, không sao chép nguyên bài sách |

**Nguồn lưu trữ:** thư mục `KNTT TOAN 10` của chủ dự án trên Google Drive (SGK/SBT Toán 10 tập 1 bản PDF scan). Các câu dưới đây là **đề tự biên soạn**, không chép nguyên văn bài SBT; những ví dụ bổ sung nếu vượt khái niệm Core sẽ gắn nhãn vận dụng rõ ràng. Đề nghị NotebookLM xác nhận độc lập từng phạm vi trang và việc phân loại Core/Practice.

## 2. Cấu trúc, canonical policy và outcome map

- **EXPECTED_LESSONS:** 2 (`B05`, `B06`).
- **EXPECTED_D2_EXAMPLES:** 6 (3 mỗi bài).
- **EXPECTED_FORMATIVE_ITEM_ID:** 16 (4 `SGK_CORE` + 12 `SGK_PRACTICE`).
- **EXPECTED_WRITTEN_ITEM_ID:** 2 (một bài Anchor là **nhãn của Written**, không tạo ngân hàng mới).
- **EXPECTED_CANONICAL_TOTAL:** 18; mỗi câu có một `item_id` canonical đề xuất, một bộ đề/đáp án/lời giải, không nhân bản trên Topic.
- **EXPECTED_FIGURE_ID:** 2 (`FIG-G10-B05-01`, `FIG-G10-B06-01`).
- **EXPECTED_HELP_ID:** 4 (HELP không phải item ngân hàng).
- **EVIDENCE_BOUNDARY:** SGK Core/Practice chỉ là học liệu công khai Formative; không ghi Skill Mastery từ câu tập hoặc bài tự luận tự đối chiếu.

| Outcome ID | Thuộc bài | Kiến thức/năng lực | D1 | D2 | D3/D4 chứng cứ |
|---|---|---|---|---|---|
| `G10-B05-UNIT_SEMICIRCLE` | B05 | Điểm M trên nửa đường tròn đơn vị, sin/cos là tung/hoành | B05-D1.1 | EX-B05-01 | B05-C01; FIG-B05 |
| `G10-B05-SPECIAL_ANGLES` | B05 | GTLG các góc đặc biệt 0°–180° | B05-D1.2 | EX-B05-01,03 | B05-C01; B05-P01, P03 |
| `G10-B05-SIGN_DOMAIN` | B05 | Dấu và điều kiện xác định sin, cos, tan, cot | B05-D1.1/2 | EX-B05-02 | B05-C02; B05-P02, P06 |
| `G10-B05-SUPPLEMENTARY` | B05 | GTLG của hai góc bù | B05-D1.3 | EX-B05-01/03 | B05-P01, P03, P05 |
| `G10-B05-IDENTITIES` | B05 | Hệ thức lượng giác cơ bản và suy giá trị | B05-D1.4 | EX-B05-02 | B05-P02, P04, P06; W05 |
| `G10-B06-COSINE_RULE` | B06 | Định lí côsin và nhận diện góc đối diện | B06-D1.1 | EX-B06-01 | B06-C01, P04, P06; FIG-B06 |
| `G10-B06-SINE_RULE` | B06 | Định lí sin, góc còn lại và bán kính ngoại tiếp | B06-D1.2 | EX-B06-02 | B06-P01, P03, P05; W06 |
| `G10-B06-AREA_SIN` | B06 | Diện tích qua hai cạnh và góc xen giữa | B06-D1.3 | EX-B06-01 | B06-C02, P04, P06; FIG-B06 |
| `G10-B06-HERON` | B06 | Heron, bán kính nội/ngoại tiếp | B06-D1.3 | EX-B06-03 | B06-P02, P04; W06 |
| `G10-B06-APPLICATION` | B06 | Giải tam giác/đo đạc, mô hình và đơn vị | B06-D1.4 | EX-B06-02/03 | B06-P03, P05; W06 |

**Lưu ý ID:** toàn bộ outcome trên là mã ứng viên mới để review, không tự khẳng định đã tồn tại trong hệ thống canonical. Dùng chung role/placement khi bài tương thích trong nhánh TOPIC sau này, không copy câu/đáp án.

## 3. BÀI 5 · Giá trị lượng giác của một góc từ 0° đến 180°

### B05-D1.1 · Định nghĩa trên nửa đường tròn đơn vị

Cho `0° ≤ α ≤ 180°`. Điểm `M(x,y)` trên nửa đường tròn đơn vị tâm O, từ tia Ox quay góc α ngược chiều kim đồng hồ, xác định `cos α = x`, `sin α = y` và `x²+y²=1`, `y≥0`. Sin luôn không âm; cos dương với góc nhọn, bằng 0 tại 90°, âm với góc tù.

\[
\tan\alpha=\frac{\sin\alpha}{\cos\alpha}\quad\text{chỉ khi }\cos\alpha\ne0;\qquad
\cot\alpha=\frac{\cos\alpha}{\sin\alpha}\quad\text{chỉ khi }\sin\alpha\ne0.
\]

`tan 90°` không xác định; `cot 0°` và `cot 180°` không xác định. `sin`, `cos` xác định trên toàn đoạn 0°–180°. Trên góc tù 90°–180°, cả tan và cot (khi có nghĩa) đều âm.

### B05-D1.2 · Giá trị đặc biệt

| α | 0° | 30° | 45° | 60° | 90° | 120° | 135° | 150° | 180° |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| sin α | 0 | 1/2 | √2/2 | √3/2 | 1 | √3/2 | √2/2 | 1/2 | 0 |
| cos α | 1 | √3/2 | √2/2 | 1/2 | 0 | −1/2 | −√2/2 | −√3/2 | −1 |

Với tan/cot, dùng tỷ số sin/cos chỉ **khi mẫu khác 0**; không ghi một số tại ô không xác định. SBT p.29–30 cung cấp bảng và những ví dụ góc đặc biệt; ở đây nêu tối thiểu các hàng sin/cos để học sinh tránh học thuộc tan/cot sai điều kiện.

### B05-D1.3 · Góc bù

Với hai góc bù `α` và `180°−α`:
\[
\begin{aligned}
\sin(180^\circ-\alpha)&=\sin\alpha, & \cos(180^\circ-\alpha)&=-\cos\alpha,\\
\tan(180^\circ-\alpha)&=-\tan\alpha, & \cot(180^\circ-\alpha)&=-\cot\alpha
\end{aligned}
\]
Hai đẳng thức có tan và cot chỉ dùng khi vế tương ứng đều xác định. Đây không phải công thức sin/cos của tổng hai góc bất kỳ; không đưa nội dung công thức cộng Toán 11 vào Core.

### B05-D1.4 · Hệ thức cơ bản và dấu

\[
\sin^2\alpha+\cos^2\alpha=1,\quad
1+\tan^2\alpha=\frac1{\cos^2\alpha}\;(\cos\alpha\ne0),\quad
1+\cot^2\alpha=\frac1{\sin^2\alpha}\;(\sin\alpha\ne0).
\]
Khi `sin α ≠ 0` **và** `cos α ≠ 0`, có `tan α·cot α=1`. Biết một giá trị sin/cos cần xét **góc nhọn hay tù** để chọn dấu căn còn lại.

### B05-D2 · Ví dụ giải mẫu

**EX-G10-B05-01 — Góc 120°:** `120°=180°−60°`, do đó 
\(\sin120^\circ=\sqrt3/2\), \(\cos120^\circ=-1/2\), \(\tan120^\circ=-\sqrt3\), \(\cot120^\circ=-\sqrt3/3\). Cos âm vì góc tù; hai tỷ số đều có nghĩa.

**EX-G10-B05-02 — Biết sin và biết góc tù:** Cho góc tù α với `sin α=3/5`. Từ `sin²+cos²=1` suy `cos²=16/25`; chọn `cos α=−4/5` vì góc tù, và `tan α=−3/4`. Lỗi thường gặp: dùng căn dương mà không xét miền của α.

**EX-G10-B05-03 — Tính biểu thức góc bù:** `sin150°+cos150° = 1/2−√3/2=(1−√3)/2`. Trước khi thay giá trị, nhận ra `150°=180°−30°`, sin giữ nguyên, cos đổi dấu.

## 4. BÀI 6 · Hệ thức lượng trong tam giác

### B06-D1.1 · Kí hiệu và định lí côsin

Trong tam giác **không suy biến** ABC, đặt `a=BC`, `b=CA`, `c=AB`, với các góc đối diện tương ứng A,B,C; các cạnh `a,b,c>0`, thỏa bất đẳng thức tam giác nghiêm ngặt.
\[
\begin{aligned}
a^2&=b^2+c^2-2bc\cos A,\\
b^2&=a^2+c^2-2ac\cos B,\\
c^2&=a^2+b^2-2ab\cos C.
\end{aligned}
\]
Từ đó \(\cos A=(b^2+c^2-a^2)/(2bc)\), tương tự cho B,C. Nếu `A=90°`, định lí trở thành Pitago. Không chọn nhầm góc B trong công thức liên quan `b,c`.

### B06-D1.2 · Định lí sin

Với `R>0` là bán kính ngoại tiếp:
\[
\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C}=2R.
\]
Mọi góc trong của tam giác nằm trong `(0°,180°)` nên các sin dương. Nếu đã biết hai góc, góc thứ ba bằng `180°−A−B`; trước khi dùng cần `A+B<180°`. Trường hợp chỉ biết `A,a,b` có thể có hai góc B thỏa phương trình sin, nên không mặc định phép lấy arcsin trả một tam giác duy nhất.

### B06-D1.3 · Diện tích, Heron và bán kính

Với `p=(a+b+c)/2` và diện tích `S>0`:
\[
S=\tfrac12bc\sin A=\tfrac12ca\sin B=\tfrac12ab\sin C,\qquad
S=\sqrt{p(p-a)(p-b)(p-c)},
\]
\[
S=pr,\qquad S=\frac{abc}{4R}.
\]
Trong đó r là bán kính đường tròn **nội tiếp**, R là bán kính **ngoại tiếp**. Đơn vị diện tích là đơn vị độ dài bình phương; không dùng Heron khi ba cạnh không tạo thành tam giác.

### B06-D1.4 · Giải tam giác và ứng dụng S1

Khi biết đủ ba cạnh (SSS), thường dùng định lí côsin tìm góc; khi biết hai cạnh và góc xen giữa (SAS), tìm cạnh còn lại bằng côsin; khi biết hai góc và một cạnh (ASA/AAS), dùng định lí sin. Với đo đạc thực tế, phải khai báo đoạn mốc, góc quan sát là **góc trong của tam giác nào**, độ dài cần tìm, đơn vị và độ chính xác hợp lý. Nếu cần bán kính ngoại tiếp, dùng `2R=a/sin A` hoặc `S=abc/(4R)`.

### B06-D2 · Ví dụ giải mẫu

**EX-G10-B06-01 — Côsin và diện tích:** `b=6,c=8,A=60°`. 
\(a^2=36+64-2\cdot6\cdot8\cdot\tfrac12=52\), nên \(a=2\sqrt{13}\). Đồng thời \(S=\tfrac12\cdot6\cdot8\cdot\sin60^\circ=12\sqrt3\). Nêu đúng góc xen giữa và cạnh đối diện.

**EX-G10-B06-02 — Định lí sin:** `A=30°,B=45°,a=5`; vậy `C=105°`. 
\(b=5\sin45^\circ/\sin30^\circ=5\sqrt2\), \(2R=5/\sin30^\circ=10\), nên `R=5`. Các góc đều hợp lệ.

**EX-G10-B06-03 — Heron và hai bán kính:** Ba cạnh 13,14,15 thỏa bất đẳng thức tam giác. Nửa chu vi `p=21`, 
\(S=\sqrt{21\cdot8\cdot7\cdot6}=84\), bán kính nội tiếp `r=S/p=4`, bán kính ngoại tiếp 
\(R=13\cdot14\cdot15/(4\cdot84)=65/8\). Không nhầm r và R.

## 5. D3 · 16 CÂU CORE / PRACTICE CÓ CANONICAL ID, ĐÁP ÁN, GỢI Ý, LỜI GIẢI

### THPT-G10-B05-C01

- **Bài:** B05; **placement:** `SGK_CORE`; **role:** `FORMATIVE`; **outcome:** `G10-B05-UNIT_SEMICIRCLE`; **difficulty:** `BASIC`.
- **STEM:** Giá trị của \(\cos120^\circ\) là bao nhiêu?
- **OPTIONS:** A. \(\tfrac12\) | B. \(-\tfrac12\) | C. \(\tfrac{\sqrt3}{2}\) | D. \(-\tfrac{\sqrt3}{2}\)
- **ANSWER:** B
- **HINT (chỉ luyện tập):** Viết 120° dưới dạng 180°−60°.
- **EXPLANATION:** \(\cos120^\circ=\cos(180^\circ-60^\circ)=-\cos60^\circ=-\tfrac12\).

### THPT-G10-B05-C02

- **Bài:** B05; **placement:** `SGK_CORE`; **role:** `FORMATIVE`; **outcome:** `G10-B05-SIGN_DOMAIN`; **difficulty:** `BASIC`.
- **STEM:** Trong đoạn từ 0° đến 180°, biểu thức nào sau đây **không xác định**?
- **OPTIONS:** A. \(\sin90^\circ\) | B. \(\cos180^\circ\) | C. \(\tan90^\circ\) | D. \(\tan180^\circ\)
- **ANSWER:** C
- **HINT (chỉ luyện tập):** Tan là tỉ số sin/cos; khi nào mẫu bằng 0?
- **EXPLANATION:** Tại 90°, cos=0 nên tan không xác định. Tan180°=0 vì cos180°=−1 khác 0.

### THPT-G10-B05-P01

- **Bài:** B05; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B05-SUPPLEMENTARY`; **difficulty:** `CORE_APPLY`.
- **STEM:** Cặp giá trị \((\sin150^\circ,\cos150^\circ)\) bằng bao nhiêu?
- **OPTIONS:** A. \((\tfrac12,\tfrac{\sqrt3}{2})\) | B. \((\tfrac12,-\tfrac{\sqrt3}{2})\) | C. \((-\tfrac12,-\tfrac{\sqrt3}{2})\) | D. \((\tfrac{\sqrt3}{2},-\tfrac12)\)
- **ANSWER:** B
- **HINT (chỉ luyện tập):** Hai góc 150° và 30° bù nhau.
- **EXPLANATION:** \(\sin150^\circ=\sin30^\circ=\tfrac12\); \(\cos150^\circ=-\cos30^\circ=-\tfrac{\sqrt3}{2}\).

### THPT-G10-B05-P02

- **Bài:** B05; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B05-IDENTITIES`; **difficulty:** `CORE_APPLY`.
- **STEM:** Cho góc tù α với \(\cos\alpha=-3/5\). Tính \(\sin\alpha\) và \(\tan\alpha\).
- **ANSWER:** \(\sin\alpha=4/5,\ \tan\alpha=-4/3\).
- **HINT (chỉ luyện tập):** Từ sin²+cos²=1, chọn dấu sin theo miền 90°<α<180°.
- **EXPLANATION:** \(\sin^2\alpha=1-9/25=16/25\). Góc tù có sin dương nên sin=4/5; tan=(4/5)/(−3/5)=−4/3.

### THPT-G10-B05-P03

- **Bài:** B05; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B05-SPECIAL_ANGLES`; **difficulty:** `CORE_APPLY`.
- **STEM:** Tính chính xác \(T=\sin135^\circ+\cos120^\circ\).
- **ANSWER:** \(T=(\sqrt2-1)/2\).
- **HINT (chỉ luyện tập):** Đưa từng góc về góc bù của góc nhọn.
- **EXPLANATION:** \(\sin135^\circ=\sin45^\circ=\sqrt2/2\), \(\cos120^\circ=-1/2\). Cộng lại được \((\sqrt2-1)/2\).

### THPT-G10-B05-P04

- **Bài:** B05; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B05-IDENTITIES`; **difficulty:** `CORE_APPLY`.
- **STEM:** Phát biểu nào đúng với **mọi** \(0^\circ\le\alpha\le180^\circ\)?
- **OPTIONS:** A. \(\tan\alpha\cdot\cot\alpha=1\) | B. \(\sin^2\alpha+\cos^2\alpha=1\) | C. \(\cos\alpha\ge0\) | D. \(\cot\alpha\) xác định với mọi α
- **ANSWER:** B
- **HINT (chỉ luyện tập):** Tìm công thức nào không có điều kiện mẫu khác 0.
- **EXPLANATION:** \(\sin^2\alpha+\cos^2\alpha=1\) đúng trên toàn đoạn. Câu A không có nghĩa tại 0°,90°,180°; cos âm với góc tù; cot0° và cot180° không xác định.

### THPT-G10-B05-P05

- **Bài:** B05; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B05-SUPPLEMENTARY`; **difficulty:** `CORE_APPLY`.
- **STEM:** Trong \([0^\circ,180^\circ]\), có những góc nào thỏa \(\sin\alpha=\sqrt3/2\)?
- **OPTIONS:** A. Chỉ 60° | B. Chỉ 120° | C. 60° và 120° | D. 30° và 150°
- **ANSWER:** C
- **HINT (chỉ luyện tập):** Sin hai góc bù bằng nhau.
- **EXPLANATION:** \(\sin60^\circ=\sqrt3/2\); góc bù 120° có cùng sin. Trong đoạn đã cho chỉ có hai góc đó.

### THPT-G10-B05-P06

- **Bài:** B05; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B05-SIGN_DOMAIN`; **difficulty:** `APPLICATION`.
- **STEM:** Góc tù α thỏa \(\tan\alpha=-2\). Tính \(\sin\alpha,\cos\alpha,\cot\alpha\).
- **ANSWER:** \(\sin\alpha=2/\sqrt5,\ \cos\alpha=-1/\sqrt5,\ \cot\alpha=-1/2\).
- **HINT (chỉ luyện tập):** Dùng 1+tan²=1/cos²; dấu cos của góc tù âm.
- **EXPLANATION:** \(\cos^2\alpha=1/5\); góc tù nên cos=−1/√5. Sin=tan·cos=2/√5; cot=1/tan=−1/2.

### THPT-G10-B06-C01

- **Bài:** B06; **placement:** `SGK_CORE`; **role:** `FORMATIVE`; **outcome:** `G10-B06-COSINE_RULE`; **difficulty:** `BASIC`.
- **STEM:** Trong tam giác ABC có \(b=5,c=7,A=60^\circ\). Tính \(a\).
- **OPTIONS:** A. \(\sqrt{39}\) | B. \(\sqrt{74}\) | C. \(\sqrt{109}\) | D. \(\sqrt{14}\)
- **ANSWER:** A
- **HINT (chỉ luyện tập):** a đối diện A, dùng a²=b²+c²−2bc cos A.
- **EXPLANATION:** \(a^2=25+49-2\cdot5\cdot7\cdot\tfrac12=39\), a=√39.

### THPT-G10-B06-C02

- **Bài:** B06; **placement:** `SGK_CORE`; **role:** `FORMATIVE`; **outcome:** `G10-B06-AREA_SIN`; **difficulty:** `BASIC`.
- **STEM:** Tam giác có \(b=8,c=5,A=30^\circ\). Diện tích \(S\) bằng bao nhiêu?
- **OPTIONS:** A. 20 | B. 10 | C. 40 | D. 5
- **ANSWER:** B
- **HINT (chỉ luyện tập):** Diện tích qua hai cạnh b,c và góc A xen giữa.
- **EXPLANATION:** \(S=\tfrac12\cdot8\cdot5\cdot\sin30^\circ=10\).

### THPT-G10-B06-P01

- **Bài:** B06; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B06-SINE_RULE`; **difficulty:** `CORE_APPLY`.
- **STEM:** Cho tam giác ABC có \(A=30^\circ,B=60^\circ,a=4\). Tính \(b\) và \(R\).
- **ANSWER:** \(b=4\sqrt3,\ R=4\).
- **HINT (chỉ luyện tập):** Theo định lí sin b/sinB=a/sinA=2R.
- **EXPLANATION:** \(b=4(\sqrt3/2)/(1/2)=4\sqrt3\); \(2R=4/(1/2)=8\), R=4.

### THPT-G10-B06-P02

- **Bài:** B06; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B06-HERON`; **difficulty:** `CORE_APPLY`.
- **STEM:** Tam giác cân có các cạnh 5,5,6. Tính \(S\) và bán kính nội tiếp \(r\).
- **ANSWER:** \(S=12,\ r=3/2\).
- **HINT (chỉ luyện tập):** p bằng nửa chu vi; dùng Heron và S=pr.
- **EXPLANATION:** \(p=8\); \(S=\sqrt{8\cdot3\cdot3\cdot2}=12\); \(r=S/p=3/2\).

### THPT-G10-B06-P03

- **Bài:** B06; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B06-SINE_RULE`; **difficulty:** `CORE_APPLY`.
- **STEM:** Tam giác ABC có \(A=30^\circ,B=60^\circ,c=8\). Tính \(a,b\).
- **ANSWER:** \(a=4,\ b=4\sqrt3\).
- **HINT (chỉ luyện tập):** Tính C trước: C=90°, c là cạnh đối diện 90°.
- **EXPLANATION:** \(C=90^\circ\), c/sinC=8. Vậy \(a=8\sin30^\circ=4\), \(b=8\sin60^\circ=4\sqrt3\).

### THPT-G10-B06-P04

- **Bài:** B06; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B06-HERON`; **difficulty:** `CORE_APPLY`.
- **STEM:** Tam giác có ba cạnh \(a=7,b=8,c=9\). Tính \(\cos C\) và diện tích \(S\).
- **ANSWER:** \(\cos C=2/7,\ S=12\sqrt5\).
- **HINT (chỉ luyện tập):** Định lí côsin cho góc C; dùng Heron với p=12.
- **EXPLANATION:** \(\cos C=(a^2+b^2-c^2)/(2ab)=(49+64-81)/(112)=2/7\). p=12; \(S=\sqrt{12\cdot5\cdot4\cdot3}=12\sqrt5\).

### THPT-G10-B06-P05

- **Bài:** B06; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B06-APPLICATION`; **difficulty:** `APPLICATION`.
- **STEM:** Đo khoảng cách qua một khu vực khó tiếp cận: người khảo sát đứng ở A và B cách nhau 100 m, ngắm điểm C sao cho \(\angle A=30^\circ,\angle B=60^\circ\) trong tam giác ABC. Tính BC và AC.
- **ANSWER:** \(BC=50\text{ m},\ AC=50\sqrt3\text{ m}\).
- **HINT (chỉ luyện tập):** Góc C bằng bao nhiêu? AB đối diện C.
- **EXPLANATION:** \(C=90^\circ\), \(AB=100\) là cạnh huyền. \(BC=AB\sin A=50\) m, \(AC=AB\sin B=50\sqrt3\) m.

### THPT-G10-B06-P06

- **Bài:** B06; **placement:** `SGK_PRACTICE`; **role:** `FORMATIVE`; **outcome:** `G10-B06-COSINE_RULE`; **difficulty:** `CORE_APPLY`.
- **STEM:** Tam giác ABC có \(a=\sqrt{61},b=5,c=6\). Hãy xác định góc A và diện tích \(S\).
- **ANSWER:** \(A=90^\circ,\ S=15\).
- **HINT (chỉ luyện tập):** So sánh a² với b²+c².
- **EXPLANATION:** \(a^2=61=b^2+c^2=25+36\) nên \(\cos A=0\), A=90°. \(S=\tfrac12 bc=15\).

## 6. D4 · THƯ VIỆN WRITTEN DÙNG CHUNG (Anchor là thuộc tính Written)

### THPT-G10-CHIII-W05

- **Bài:** B05; **placement:** `WRITTEN`; **role:** `WRITTEN`; **outcomes:** `G10-B05-UNIT_SEMICIRCLE`, `G10-B05-IDENTITIES`, `G10-B05-SUPPLEMENTARY`; **difficulty:** `APPLICATION`; **rubric:** 7 điểm. 
- **STEM:** Một vòng quay có tâm O cao hơn mặt đất 12 m, bán kính 10 m. Xét vị trí M được xác định bởi góc 150° so với tia Ox hướng ngang sang phải, theo chiều dương, trên nửa đường tròn phía trên O. (a) Tính tọa độ của M trong hệ trục Oxy (mét). (b) Tìm độ cao M so với mặt đất. (c) Giải thích dấu của cos150° bằng hình học, không chỉ thuộc bảng số.
- **HINT (luyện tập):** Với bán kính 10, hoành độ bằng `10cos150°`, tung độ bằng `10sin150°`; độ cao mặt đất = cao độ tâm + tung độ.
- **LỜI GIẢI:** (a) \(x_M=10\cos150^\circ=-5\sqrt3\) (m), \(y_M=10\sin150^\circ=5\) (m). (b) Độ cao M là \(12+5=17\) m. (c) Góc 150° nằm phía trái trục Oy nên hình chiếu xuống trục Ox âm, từ đó cos150°<0.
- **RUBRIC 7 điểm:** (1) Nêu đúng quy chiếu tâm O, bán kính và góc (1đ); (2) viết đúng `x=Rcos`, `y=Rsin` (2đ); (3) thay giá trị góc bù tính đủ tọa độ (2đ); (4) tính độ cao mặt đất 17 m (1đ); (5) giải thích hình học dấu cos (1đ). Không trừ lặp cùng lỗi số ở các bước phụ thuộc khi cách làm đúng; giáo viên/người học đối chiếu thủ công, không tự cộng Mastery.

### THPT-G10-CHIII-W06-ANCHOR

- **Bài:** B06; **placement:** `WRITTEN`; **role:** `WRITTEN`, `ANCHOR=true` (chỉ nhãn, cùng một item_id/rubric); **outcomes:** `G10-B06-COSINE_RULE`, `G10-B06-HERON`, `G10-B06-APPLICATION`; **difficulty:** `APPLICATION`; **rubric:** 7 điểm.
- **STEM:** Một mảnh đất hình tam giác ABC có AB=9 m, AC=10 m và BC=17 m. (a) Chứng minh ba cạnh tạo thành tam giác. Tính \(\cos A\) và cho biết góc A nhọn hay tù. (b) Tính diện tích S bằng công thức Heron. (c) Tính bán kính đường tròn nội tiếp r và ngoại tiếp R. (d) Nếu trải cỏ toàn bộ mảnh đất, giá 120.000 đồng/m², tính chi phí chưa gồm công.
- **HINT (luyện tập):** Kiểm tra 9+10>17; a=BC là cạnh đối diện A; nửa chu vi p=(9+10+17)/2; dùng S=pr và S=abc/(4R).
- **LỜI GIẢI:** (a) Vì \(9+10=19>17\) nên ba độ dài lập thành một tam giác. Với a=17,b=10,c=9, \(\cos A=(b^2+c^2-a^2)/(2bc)=(100+81-289)/(180)=-3/5\), nên A **tù**. (b) \(p=18\), \(S=\sqrt{18\cdot(18-17)\cdot(18-10)\cdot(18-9)}=\sqrt{18\cdot1\cdot8\cdot9}=36\text{ m}^2\). (c) \(r=S/p=36/18=2\text{ m}\), \(R=abc/(4S)=17\cdot10\cdot9/(4\cdot36)=85/8\text{ m}\). (d) Chi phí \(36\cdot120000=4\,320\,000\) đồng.
- **RUBRIC 7 điểm:** kiểm tra bất đẳng thức tam giác (1đ); sử dụng đúng định lí côsin và tính cos A (1.5đ); suy góc A tù (0.5đ); tính p và S đúng kèm m² (2đ); suy r và R đúng đơn vị (1.5đ); chi phí cỏ đúng (0.5đ). Tự luận tự đối chiếu không cập nhật Skill Mastery.

## 7. D5 · HAI SVG NGUỒN THẬT (TOÀN BỘ XML TRONG GÓI)

- **FIG-G10-B05-01:** B05 — nửa đường tròn đơn vị, M tại góc 120° có tọa độ (−1/2,√3/2), dấu và điều kiện tan/cot. File nguồn `THPT_G10_B05_SEMICIRCLE_120_D5_R01.svg` (width 950, height 540, viewBox, role=img/title/desc).
- **FIG-G10-B06-01:** B06 — tam giác có AB=8, AC=6, A=60°, BC=2√13, S=12√3. File nguồn `THPT_G10_B06_COSINE_AREA_TRIANGLE_D5_R01.svg` (width 950, height 540, viewBox, role=img/title/desc).

**Quy tắc D5:** Cần kiểm toán độc lập đúng điểm/toạ độ, tia góc, nét, chữ, mối quan hệ với ví dụ và sự phù hợp thiết bị. Bản PNG chỉ dùng tác giả xem trước; tệp SVG sau review phải trùng chính xác XML được duyệt.

### FIG-G10-B05-01 · THPT_G10_B05_SEMICIRCLE_120_D5_R01.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="950" height="540" viewBox="0 0 950 540" role="img" aria-labelledby="t1 d1">
<title id="t1">Giá trị lượng giác của góc 120 độ trên nửa đường tròn đơn vị</title>
<desc id="d1">O tọa độ (0,0), nửa đường tròn đơn vị phía trên trục hoành. Tia OM ở góc 120 độ gặp M tại âm một phần hai, căn ba phần hai. Cos âm, sin dương; hình chiếu xuống trục x là âm một phần hai.</desc>
<rect width="950" height="540" rx="20" fill="#f8fafc"/>
<text x="36" y="55" fill="#0f172a" font-family="Arial,sans-serif" font-size="28" font-weight="bold">Bài 5 · Giá trị lượng giác góc 120°</text>
<path d="M 160 398 A 220 220 0 0 1 600 398" fill="none" stroke="#2563eb" stroke-width="4"/>
<path d="M 120 398 H 665" stroke="#475569" stroke-width="2.5"/>
<path d="M 380 435 V 121" stroke="#475569" stroke-width="2.5"/>
<path d="M 600 398 L 588 392 L 588 404 Z" fill="#475569"/>
<path d="M 380 121 L 374 135 L 386 135 Z" fill="#475569"/>
<line x1="380" y1="398" x2="270" y2="207.475" stroke="#047857" stroke-width="4"/>
<path d="M 436 398 A 56 56 0 0 0 352 349.503" fill="none" stroke="#db6a15" stroke-width="4"/>
<line x1="270" y1="207.475" x2="270" y2="398" stroke="#b45309" stroke-dasharray="8 8" stroke-width="3"/>
<line x1="270" y1="207.475" x2="380" y2="207.475" stroke="#b45309" stroke-dasharray="8 8" stroke-width="3"/>
<circle cx="380" cy="398" r="6" fill="#0f172a"/>
<circle cx="270" cy="207.475" r="7" fill="#047857"/>
<text x="393" y="419" font-size="20" font-family="Arial,sans-serif" fill="#0f172a">O</text>
<text x="242" y="195" font-size="22" font-weight="bold" font-family="Arial,sans-serif" fill="#047857">M</text>
<text x="327" y="330" font-size="23" font-weight="bold" font-family="Arial,sans-serif" fill="#b45309">120°</text>
<text x="263" y="429" font-size="21" font-family="Arial,sans-serif" fill="#b45309">−1/2</text>
<text x="393" y="213" font-size="21" font-family="Arial,sans-serif" fill="#b45309">√3/2</text>
<text x="593" y="426" font-size="18" font-family="Arial,sans-serif" fill="#475569">1</text>
<text x="150" y="426" font-size="18" font-family="Arial,sans-serif" fill="#475569">−1</text>
<text x="670" y="405" font-size="22" font-family="Arial,sans-serif" fill="#475569">x</text>
<text x="394" y="124" font-size="22" font-family="Arial,sans-serif" fill="#475569">y</text>
<rect x="680" y="175" width="244" height="242" rx="15" fill="#e0f2fe" stroke="#93c5fd"/>
<text x="700" y="213" font-size="20" font-family="Arial,sans-serif" fill="#0f172a">Góc tù: cos &lt; 0</text>
<text x="700" y="254" font-size="20" font-family="Arial,sans-serif" fill="#0f172a">sin 120° = √3/2</text>
<text x="700" y="294" font-size="20" font-family="Arial,sans-serif" fill="#0f172a">cos 120° = −1/2</text>
<text x="700" y="334" font-size="20" font-family="Arial,sans-serif" fill="#0f172a">tan 120° = −√3</text>
<text x="700" y="374" font-size="20" font-family="Arial,sans-serif" fill="#0f172a">cot 120° = −√3/3</text>
<text x="38" y="504" font-size="19" font-family="Arial,sans-serif" fill="#334155">Lưu ý: tan không xác định tại 90°; cot không xác định tại 0° và 180°.</text>
</svg>
```

### FIG-G10-B06-01 · THPT_G10_B06_COSINE_AREA_TRIANGLE_D5_R01.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="950" height="540" viewBox="0 0 950 540" role="img" aria-labelledby="t2 d2">
<title id="t2">Tam giác ABC minh họa định lí côsin và công thức diện tích theo hai cạnh cùng góc xen giữa</title>
<desc id="d2">Tam giác ABC có AB bằng 8, AC bằng 6, góc A bằng 60 độ, BC bằng 2 căn 13. Công thức cạnh đối diện A là a bình bằng b bình cộng c bình trừ 2bc cos A, cho a bình bằng 52. Diện tích là nửa tích 6 nhân 8 nhân sin 60, bằng 12 căn 3.</desc>
<rect width="950" height="540" rx="20" fill="#f8fafc"/>
<text x="35" y="54" font-family="Arial,sans-serif" font-weight="bold" font-size="27" fill="#0f172a">Bài 6 · Côsin, góc xen giữa và diện tích</text>
<path d="M 150 410 L 520 410 L 288.75 169.677 Z" fill="#dbeafe" fill-opacity=".74" stroke="#1d4ed8" stroke-width="4" stroke-linejoin="round"/>
<path d="M 215 410 A 65 65 0 0 0 182.5 353.708" fill="none" stroke="#b45309" stroke-width="4"/>
<circle cx="150" cy="410" r="5" fill="#0f172a"/><circle cx="520" cy="410" r="5" fill="#0f172a"/><circle cx="288.75" cy="169.677" r="5" fill="#0f172a"/>
<text x="128" y="438" font-size="25" font-family="Arial,sans-serif" font-weight="bold" fill="#0f172a">A</text>
<text x="529" y="438" font-size="25" font-family="Arial,sans-serif" font-weight="bold" fill="#0f172a">B</text>
<text x="278" y="146" font-size="25" font-family="Arial,sans-serif" font-weight="bold" fill="#0f172a">C</text>
<text x="215" y="392" font-size="22" font-family="Arial,sans-serif" fill="#b45309">60°</text>
<text x="320" y="442" font-size="23" font-family="Arial,sans-serif" fill="#0f172a">c = 8</text>
<text x="182" y="264" font-size="23" font-family="Arial,sans-serif" fill="#0f172a">b = 6</text>
<text x="410" y="274" font-size="21" font-family="Arial,sans-serif" fill="#0f172a">a = 2√13</text>
<rect x="615" y="150" width="302" height="288" rx="16" fill="#ecfdf5" stroke="#86efac" stroke-width="2"/>
<text x="641" y="195" font-family="Arial,sans-serif" font-weight="bold" font-size="23" fill="#047857">Định lí côsin</text>
<text x="641" y="233" font-family="Arial,sans-serif" font-size="21" fill="#0f172a">a² = b² + c² − 2bc cos A</text>
<text x="641" y="270" font-family="Arial,sans-serif" font-size="21" fill="#0f172a">a² = 36 + 64 − 48 = 52</text>
<text x="641" y="310" font-family="Arial,sans-serif" font-weight="bold" font-size="23" fill="#047857">Diện tích</text>
<text x="641" y="348" font-family="Arial,sans-serif" font-size="21" fill="#0f172a">S = ½ bc sin A</text>
<text x="641" y="384" font-family="Arial,sans-serif" font-size="21" fill="#0f172a">S = ½ · 6 · 8 · sin 60°</text>
<text x="641" y="419" font-family="Arial,sans-serif" font-size="21" fill="#0f172a">S = 12√3</text>
<text x="36" y="501" font-size="19" font-family="Arial,sans-serif" fill="#334155">Phải dùng góc A xen giữa hai cạnh b và c; cạnh a đối diện A.</text>
</svg>
```

## 8. D6 · FOUR REMEDIATION HELP CARDS (không tạo item_id)

### HELP-G10-B05-01 · Nhầm dấu góc tù và hai góc bù
1. **Dấu hiệu:** Chọn cos120° dương hoặc cos150° bằng cos30°.
2. **Chẩn đoán:** Học sinh nhớ bảng góc nhọn nhưng bỏ nửa đường tròn phía trái trục Oy.
3. **Bản chất:** `sin(180°−α)=sinα`, `cos(180°−α)=−cosα`; điểm M góc tù nằm phía trái, tung độ dương.
4. **Tự sửa:** Vẽ M góc 120° trên FIG-G10-B05-01, đọc hoành/tung; giải lại không nhìn đáp án.
5. **Bài tiếp theo:** `THPT-G10-B05-P01`, sau đó `P03`. Chỉ hiện HELP trong luyện tập, không trong bài đánh giá độc lập.

### HELP-G10-B05-02 · Bỏ điều kiện tan/cot và chọn sai dấu căn
1. **Dấu hiệu:** Tính tan90° bằng 0; viết cot0° là vô hạn; cho cos góc tù dương khi biết sin.
2. **Chẩn đoán:** Bỏ mẫu của tỷ số sin/cos và không sử dụng miền của góc.
3. **Bản chất:** Tan chỉ xác định nếu cos≠0, cot nếu sin≠0; `sin²+cos²=1` cho hai dấu căn nhưng miền góc quyết định dấu.
4. **Tự sửa:** Kiểm tra mẫu và dấu trước khi thế số; tự đối chiếu từng bước.
5. **Bài tiếp theo:** `THPT-G10-B05-C02`, `P02`, `P06`; xem lại B05-D1.1/4.

### HELP-G10-B06-01 · Sai góc xen giữa / nhầm định lí sin và côsin
1. **Dấu hiệu:** Lấy `a²=b²+c²−2bc cos B` hoặc dùng sin để tìm cạnh trong tình huống chỉ biết hai cạnh và góc xen giữa.
2. **Chẩn đoán:** Không chỉ rõ cạnh đối diện góc A và hai cạnh kề góc A.
3. **Bản chất:** Với kí hiệu chuẩn a đối diện A; hệ thức đúng là `a²=b²+c²−2bc cos A`. Định lí sin liên hệ các **cặp cạnh–góc đối diện**.
4. **Tự sửa:** Ghi a,b,c lên FIG-G10-B06-01, kiểm tra góc A=60°, tính lại 52 và căn dương.
5. **Bài tiếp theo:** `THPT-G10-B06-C01`, `P06`, sau đó `P01`.

### HELP-G10-B06-02 · Nhầm diện tích, Heron, r/R và đơn vị
1. **Dấu hiệu:** Dùng `S=1/2 bc cos A`, tính r từ `abc/(4S)`, hoặc ghi m thay vì m².
2. **Chẩn đoán:** Nhớ công thức rời rạc, không phân biệt tâm nội/ngoại tiếp và góc xen giữa.
3. **Bản chất:** `S=1/2 bc sin A`, `S=sqrt[p(p−a)(p−b)(p−c)]`, `S=pr`, `S=abc/(4R)`.
4. **Tự sửa:** Làm tam giác 13–14–15: p=21, S=84, r=4, R=65/8; kiểm tra thứ nguyên.
5. **Bài tiếp theo:** `THPT-G10-B06-C02`, `P02`, `P04` và Written `W06-ANCHOR` tự đối chiếu. Không lấy kết quả tự luận làm Skill Mastery.

## 9. AUTHOR QA / RỦI RO & YÊU CẦU REVIEWER

### QA tự kiểm trước NotebookLM (không thay độc lập thẩm định)

- Một `item_id` ứng viên duy nhất cho mỗi câu, cùng stem/answer/explanation/hint/rubric. D4 Anchor chỉ là nhãn của một Written item.
- D5: chính xác 2 SVG XML hoàn chỉnh; điểm M ở góc 120° có tọa độ trên nửa đường tròn đơn vị, tam giác FIG-B06 có tỉ lệ b:c=6:8 và góc A=60°.
- Toán: kiểm riêng sin/cos góc tù, mẫu số tan/cot, số nghiệm của sinα=√3/2 trong [0°,180°], a²=52, S=12√3, Heron 13–14–15 cho S=84, r=4, R=65/8; W06 S=1250√3, R=50.
- **Điểm dễ sai:** Đừng lấy bản thân việc có 16 câu làm bằng chứng D3 đủ độ sâu; NotebookLM phải phân biệt thực chất outcome và SGK/SBT S1. Một vài câu thực hành có cùng đại lượng nhưng khác phương pháp/điều kiện; đánh giá trùng lặp thực chất.
- Không công khai câu/đáp án **Tự kiểm tra cuối chương** chưa kiểm chứng. Không bật chấm điểm/Mastery ở web.

### Yêu cầu NotebookLM trả về verdict độc lập

1. Đối chiếu đúng 5 Permanent Sources THPT v2.0 và trang SGK/SBT KNTT in trong SOURCE_RECEIPT, không tự nâng phạm vi Core vượt SGK.
2. Thẩm định D1 lý thuyết và điều kiện toán học, 6 ví dụ D2, mọi item theo **đúng canonical candidate ID** (16 D3, 2 D4), outcome 10/10, 2 SVG D5, 4 HELP_ID D6.
3. Trả `SOURCE_RECEIPT`, `OUTCOME_MATRIX`, `ITEM_ID_RECONCILIATION`, `LESSON_B05/B06_VERDICT`, `D1–D6_OVERALL`, `FIG_VERDICTS`, `HELP_VERDICTS` và độ đa dạng/nội dung chính xác.
4. Liệt kê lỗi P0/P1/P2, chỉ rõ `MINIMAL_DELTA`, `ACADEMIC_CLEARANCE_FOR_THIS_DELTA` và căn cứ SGK/SBT.
5. Chỉ cấp Academic PASS cho snapshot R01 nêu trên, không cho toàn Chương III, Topic, Chapter Readiness, Mastery hoặc release.

**FINAL_STATE:** `NOT_REVIEWED / A3_A5_A6_HOLD / CONTENT_READY_NO / NO_RELEASE`.

## PART_C_PUBLIC_CHIII_JSON_14_EXISTING_CLIENT_SELF_CHECK_UNMODIFIED
```json
{
  "schema": "thpt-g10-reviewed-selfcheck-v1",
  "scope": "SGK_CHAPTER_READINESS",
  "chapter": "CHIII",
  "chapter_label": "III",
  "source_sha256": "1f4e6eb5af786d8d0502d9d71a8d84290d364fd9c25be28adadf32bd05adaa1e",
  "review_scope": "INDIVIDUAL_CHAPTER_NOTEBOOKLM_PASS",
  "mastery_credit": false,
  "persist_results": false,
  "items": [
    {
      "item_id": "THPT-G10-CHIII-RD1-01",
      "stem": "Một góc α thuộc (90°,180°). Cặp dấu nào luôn đúng? A. sin α>0, cos α<0; B. cả hai âm; C. sin α<0, cos α>0; D. cả hai dương.",
      "type": "MCQ_SINGLE",
      "optional": false,
      "outcome_id": "`G10-B05-UNIT_SEMICIRCLE`, `G10-B05-SIGN_DOMAIN`.",
      "answer": "A",
      "solution": "Trên nửa đường tròn đơn vị, góc phần tư II có tung độ (sin) dương, hoành độ (cos) âm.",
      "rubric": "1đ đáp án A."
    },
    {
      "item_id": "THPT-G10-CHIII-RD1-02",
      "stem": "Đánh giá Đ/S: (a) sin 90°=1. (b) tan 90°=0. (c) cot 180° không xác định. (d) cos 180°=−1.",
      "type": "TRUE_FALSE_GROUP",
      "optional": false,
      "outcome_id": "`G10-B05-SIGN_DOMAIN`, `G10-B05-UNIT_SEMICIRCLE`.",
      "answer": "(Đ,S,Đ,Đ)",
      "solution": "a đúng; b sai vì cos 90°=0 nên tan không xác định; c đúng vì sin 180°=0; d đúng do điểm cuối ở (−1,0).",
      "rubric": "Mỗi ý 1đ; nhấn mạnh mẫu số khác 0."
    },
    {
      "item_id": "THPT-G10-CHIII-RD1-03",
      "stem": "Biết α là góc tù và cos α=−5/13. Tìm sin α, tan α và giải thích cách chọn dấu.",
      "type": "SHORT_EXPLANATION",
      "optional": false,
      "outcome_id": "`G10-B05-IDENTITIES`, `G10-B05-SIGN_DOMAIN`.",
      "answer": "sin α=12/13; tan α=−12/5",
      "solution": "sin² α=1−25/169=144/169; sin α=12/13>0 vì α tù. tan α=(12/13)/(−5/13)=−12/5.",
      "rubric": "1đ hệ thức cơ bản; 1đ chọn dấu sin; 1đ tan đúng."
    },
    {
      "item_id": "THPT-G10-CHIII-RD1-04",
      "stem": "Trong đoạn 0°≤α≤180°, tất cả góc thỏa sin α=√2/2 là? A. 45°,135°; B. chỉ 45°; C. 135°,180°; D. 45°,90°.",
      "type": "MCQ_SINGLE",
      "optional": false,
      "outcome_id": "`G10-B05-SUPPLEMENTARY`, `G10-B05-SPECIAL_ANGLES`.",
      "answer": "A",
      "solution": "sin 45°=√2/2 và sin(180°−45°)=sin135°=√2/2; trên [0°,180°] có đúng hai nghiệm.",
      "rubric": "1đ chọn A."
    },
    {
      "item_id": "THPT-G10-CHIII-RD1-05",
      "stem": "Biết α là góc tù và sin α=5/13. a) Xác định cos α, tan α, cot α. b) Với β=180°−α, tìm sin β, cos β.",
      "type": "WRITTEN_RUBRIC",
      "optional": false,
      "outcome_id": "`G10-B05-IDENTITIES`, `G10-B05-SUPPLEMENTARY`.",
      "answer": "cos α=−12/13, tan α=−5/12, cot α=−12/5; sin β=5/13, cos β=12/13",
      "solution": "cos² α=1−25/169=144/169; α tù nên cos α=−12/13. Chia các tỉ số được tan α=−5/12, cot α=−12/5. Góc bù: sin β=sin α, cos β=−cos α.",
      "rubric": "4đ: dấu và cos 1đ; tan/cot 1đ; sin β 1đ; cos β 1đ."
    },
    {
      "item_id": "THPT-G10-CHIII-RD1-06",
      "stem": "Giá trị chính xác của sin120°+cos135° bằng? A. (√3−√2)/2; B. (√3+√2)/2; C. (√2−√3)/2; D. −(√3+√2)/2.",
      "type": "MCQ_SINGLE",
      "optional": false,
      "outcome_id": "`G10-B05-SPECIAL_ANGLES`.",
      "answer": "A",
      "solution": "sin120°=√3/2; cos135°=−√2/2, tổng = (√3−√2)/2.",
      "rubric": "1đ chọn A."
    },
    {
      "item_id": "THPT-G10-CHIII-RD1-07",
      "stem": "Với α∈(90°,180°) và cot α=−3/4, tìm sin α, cos α, tan α. Nêu điều kiện để cot α xác định.",
      "type": "SHORT_EXPLANATION",
      "optional": false,
      "outcome_id": "`G10-B05-SIGN_DOMAIN`, `G10-B05-IDENTITIES`.",
      "answer": "sin α=4/5; cos α=−3/5; tan α=−4/3; sin α≠0",
      "solution": "cot α=cos α/sin α; vì α tù, cos<0 và sin>0. Tỉ lệ |cos|:sin=3:4 và sin²+cos²=1 suy ra (sin,cos)=(4/5,−3/5); tan=sin/cos=−4/3; cot chỉ xác định khi sin≠0.",
      "rubric": "1đ dấu; 1đ bộ sin/cos; 1đ tan và điều kiện cot."
    },
    {
      "item_id": "THPT-G10-CHIII-RD1-08",
      "stem": "Trong tam giác ABC, AB=9, AC=7 và góc A=60°. Độ dài BC là? A. √67; B. 8; C. 2√13; D. √130.",
      "type": "MCQ_SINGLE",
      "optional": false,
      "outcome_id": "`G10-B06-COSINE_RULE`.",
      "answer": "A",
      "solution": "BC²=AB²+AC²−2·AB·AC·cos60°=81+49−63=67, nên BC=√67.",
      "rubric": "1đ chọn A."
    },
    {
      "item_id": "THPT-G10-CHIII-RD1-09",
      "stem": "Cho tam giác ABC có A=30°, B=45°, BC=a=6. Tìm C, độ dài AC=b và bán kính đường tròn ngoại tiếp R.",
      "type": "SHORT_EXPLANATION",
      "optional": false,
      "outcome_id": "`G10-B06-SINE_RULE`.",
      "answer": "C=105°; b=6√2; R=6",
      "solution": "C=180°−30°−45°=105°. Theo định lý sin, b/a=sin45°/sin30°=√2, nên b=6√2. Lại a/sinA=2R ⇒ 6/(1/2)=12 ⇒ R=6.",
      "rubric": "1đ C; 1đ b; 1đ R."
    },
    {
      "item_id": "THPT-G10-CHIII-RD1-10",
      "stem": "Tam giác có độ dài ba cạnh 10,10,12. Tính nửa chu vi, diện tích bằng công thức Heron, bán kính đường tròn nội tiếp và chiều cao ứng với cạnh 12.",
      "type": "WRITTEN_RUBRIC",
      "optional": false,
      "outcome_id": "`G10-B06-HERON`, `G10-B06-AREA_SIN`.",
      "answer": "p=16; S=48; r=3; h=8",
      "solution": "p=(10+10+12)/2=16. S=√[16(16−10)(16−10)(16−12)]=√(16·6·6·4)=48. r=S/p=3; h=2S/12=8.",
      "rubric": "4đ: nửa chu vi 1đ; Heron 1đ; bán kính nội tiếp 1đ; chiều cao 1đ."
    },
    {
      "item_id": "THPT-G10-CHIII-RD1-11",
      "stem": "Trong tam giác ABC, hai cạnh kề góc A dài 6 và 10, góc A=150°. Diện tích bằng? A. 15; B. 30; C. 15√3; D. 60.",
      "type": "MCQ_SINGLE",
      "optional": false,
      "outcome_id": "`G10-B06-AREA_SIN`.",
      "answer": "A",
      "solution": "S=1/2·6·10·sin150°=30·(1/2)=15.",
      "rubric": "1đ chọn A."
    },
    {
      "item_id": "THPT-G10-CHIII-RD1-12",
      "stem": "Tam giác có cạnh a=7 đối diện góc A, còn hai cạnh kề góc A là b=5,c=8. Tìm cos A và suy ra A.",
      "type": "SHORT_EXPLANATION",
      "optional": false,
      "outcome_id": "`G10-B06-COSINE_RULE`.",
      "answer": "cos A=1/2; A=60°",
      "solution": "cos A=(b²+c²−a²)/(2bc)=(25+64−49)/80=40/80=1/2. Vì 0°<A<180°, A=60°.",
      "rubric": "1đ áp dụng quy tắc; 1đ tính 1/2; 1đ suy góc."
    },
    {
      "item_id": "THPT-G10-CHIII-RD1-13",
      "stem": "Tam giác có ba cạnh 3,4,5. Đánh giá Đ/S: (a) Tam giác vuông. (b) Diện tích bằng 6. (c) Bán kính đường tròn nội tiếp bằng 2. (d) Bán kính đường tròn ngoại tiếp bằng 5/2.",
      "type": "TRUE_FALSE_GROUP",
      "optional": false,
      "outcome_id": "`G10-B06-APPLICATION`, `G10-B06-HERON`, `G10-B06-COSINE_RULE`.",
      "answer": "(Đ,Đ,S,Đ)",
      "solution": "3²+4²=5², góc đối diện cạnh 5 vuông. S=3·4/2=6, p=6 nên r=S/p=1, không phải 2; với tam giác vuông R=5/2.",
      "rubric": "4 ý 1đ/ý; có thể suy bằng công thức S=abc/(4R) hoặc định lý sin."
    },
    {
      "item_id": "THPT-G10-CHIII-RD1-14",
      "stem": "Trong tam giác ABC có AB=7, AC=5, góc BAC=60°. a) Tính BC. b) Tính diện tích S. c) Tính bán kính R đường tròn ngoại tiếp.",
      "type": "WRITTEN_RUBRIC",
      "optional": false,
      "outcome_id": "`G10-B06-COSINE_RULE`, `G10-B06-AREA_SIN`, `G10-B06-SINE_RULE`, `G10-B06-APPLICATION`.",
      "answer": "BC=√39; S=35√3/4; R=√13",
      "solution": "BC²=7²+5²−2·7·5·(1/2)=39. Diện tích S=1/2·7·5·sin60°=35√3/4. Định lý sin 2R=BC/sin60°=√39/(√3/2), suy ra R=√39/√3=√13.",
      "rubric": "4đ: quy tắc cos và BC 2đ; công thức diện tích 1đ; định lý sin và R 1đ."
    }
  ]
}
```

**Source custody:** Two SGK lessons B05/B06, 10 outcomes, 42 canonical public IDs = 18 original R01 + 10 First Try R02 + 14 existing public Final Submit selfcheck; no private/held-out test stems/keys or new mastery activation.
