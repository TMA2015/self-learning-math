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
