# G10 SGK ChVI — QA phủ 19 outcome của 18 câu cuối chương công khai (AUTHORING)

PACKET_ID: G10-SGK-CHVI-R03-PUBLIC-END-OUTCOME-COVERAGE-20261105
ROLE: AUTHORING_ONLY
QUALITY_STANDARD: SLM-THPT-QUALITY-ONE
CURRENT_GOVERNANCE_VERSION: 1.2.0
STATUS: AUTHORING_PUBLIC_SELF_CHECK_MAPPING_VERIFIED_WITH_PARTIAL_DEPTH_2_OUTCOMES
SELF_CHECK_DATA_PATH: docs/assets/data/thpt-g10-readiness/CHVI.json
SELF_CHECK_DATA_GIT_BLOB: 0760782256a2d8d91c398814e62d013cf6083eb7
ORIGINAL_ACADEMIC_R01_RECEIPT_GIT_BLOB: 23156f35aab6ec28771a6a57d48bad74f3900e9c
R03_PED_SOURCE_GIT_BLOB: 77d42ce0ecf6fd4677ea0d831589db4bb18290d8
SELF_CHECK_PUBLIC_ITEM_COUNT: 18
OUTCOME_COUNT: 19
ORIGINAL_JSON_OUTCOME_ID_FIELDS_EMPTY: 18_OF_18
AUTHOR_PROPOSED_ITEM_OUTCOME_MAPPING_ROWS: 18
COVERAGE_REPRESENTED: 17_OF_19
COVERAGE_PARTIAL: 2_OF_19
PROTECTED_RD1_IN_FILE: 0
EVALUATION_MODE: CLIENT_SELF_CHECK_NO_MASTERY
DATA_EDITED_IN_AUTHORING_PR: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO
CONTENT_READY: NO

## Phát hiện liên quan đến độ sâu tự học, không phải chỉ đếm câu

Đã đọc **toàn bộ đề của 18 câu cuối Chương VI đã công khai** trong `CHVI.json` (đáp án/rubric hiện nằm sẵn trên client). Trường `outcome_id` của **18/18 câu hiện là chuỗi rỗng**, vì vậy không thể dựa vào JSON để khẳng định đã đối chiếu từng câu với 19 outcome. Đây là **thiếu ma trận phân loại câu–outcome**, không phải 18 câu hỏng toán. Author đối chiếu riêng **nội dung đề** (không dùng số lượng để thay phán xét) và lập mapping đề xuất bên dưới. Một câu có thể liên hệ nhiều outcome nhưng vẫn chỉ có **một `item_id`**.

**Lưu ý quan trọng:** tất cả câu đã lộ client, do đó chỉ dùng làm **tự kiểm tra sau Final Submit**, đáp án/đúng-sai/rubric không hiện trước khi submit, không tính Skill Mastery, không chứng nhận đánh giá kín độc lập. `outcome_id` đề xuất trong biên bản này **không phải thay đổi live JSON**, không tạo thêm câu, không mở lại reviewer R01 bất biến.

## 18 câu → outcome tương ứng qua đúng nội dung đề

| Public CHVI item | Bài | Outcome chính (đề bài thể hiện) | Outcome hỗ trợ (không tính câu mới) | Mức bao phủ theo đề | Bằng chứng/chỗ giới hạn |
|---|---|---|---|---|---|
| `THPT-G10-B15-R01` | B15 | `B15_OUT_01` | — | FULL | Tính duy nhất của đầu ra |
| `THPT-G10-B15-R02` | B15 | `B15_OUT_05` | — | FULL | Hàm từng đoạn và mốc ranh giới |
| `THPT-G10-B15-R03` | B15 | `B15_OUT_04` | — | FULL | Đồng/nghịch biến hàm bậc nhất |
| `THPT-G10-B15-R04` | B15 | `B15_OUT_03` | — | FULL | Điểm có thuộc đồ thị hay không |
| `THPT-G10-B15-R05` | B15 | `B15_OUT_02` | — | FULL | Điều kiện căn và mẫu của tập xác định; không yêu cầu tập giá trị |
| `THPT-G10-B16-R01` | B16 | `B16_OUT_02` | B16_OUT_04 (PARTIAL) | FULL_PRIMARY | Đỉnh/trục/GTNN/tập giá trị, chưa hỏi khoảng đồng/nghịch biến |
| `THPT-G10-B16-R02` | B16 | `B16_OUT_03` | B16_OUT_02 | FULL | Đỉnh/trục/giao Ox, Oy/chiều mở |
| `THPT-G10-B16-R03` | B16 | `B16_OUT_05` | — | FULL | Độ cao chuyển động theo thời gian và miền thực tế |
| `THPT-G10-B16-R04` | B16 | `B16_OUT_05` | — | FULL | Doanh thu theo giá và điều kiện mô hình |
| `THPT-G10-B16-R05` | B16 | `B16_OUT_01` | — | FULL | Nhận diện hệ số bậc hai a khác 0 |
| `THPT-G10-B17-R01` | B17 | `B17_OUT_03` | B17_OUT_01 (PARTIAL) | FULL_PRIMARY | Nghiệm khoảng BPT; vận dụng xét dấu nhưng chưa kiểm riêng ba trường hợp biệt thức |
| `THPT-G10-B17-R02` | B17 | `B17_OUT_04` | — | FULL | Điều kiện tham số để tam thức dương mọi x với a=1 cố định |
| `THPT-G10-B17-R03` | B17 | `B17_OUT_02` | B17_OUT_01 (PARTIAL) | FULL_PRIMARY | Nghiệm kép và dấu; chỉ trường hợp delta=0 |
| `THPT-G10-B17-R04` | B17 | `B17_OUT_05` | — | FULL | Bất phương trình lợi nhuận và miền biến thực tế |
| `THPT-G10-B18-R01` | B18 | `B18_OUT_02` | B18_OUT_03 | FULL | Một căn bằng biểu thức thường, nghiệm ngoại lai và điều kiện vế phải |
| `THPT-G10-B18-R02` | B18 | `B18_OUT_01` | — | FULL | Hai căn, radicands và nghiệm hợp lệ |
| `THPT-G10-B18-R03` | B18 | `B18_OUT_01` | B18_OUT_03 | FULL | Hai căn với nghiệm ngoại lai do miền xác định |
| `THPT-G10-B18-R04` | B18 | `B18_OUT_04` | — | FULL | Pitago, độ dài thực tế, phương trình căn và nghiệm dương |

## 19 outcome → chứng cứ phủ kiến thức ở phần cuối chương

| Outcome SGK | Câu cuối chương có liên quan (giữ nguyên ID) | QA phạm vi | Còn thiếu gì? |
|---|---|---|---|
| `B15_OUT_01` | `THPT-G10-B15-R01` | `PUBLIC_SELF_CHECK_REPRESENTED` | Mục tiêu được đại diện trực tiếp bởi ít nhất một câu công khai theo phân loại tác giả. |
| `B15_OUT_02` | `THPT-G10-B15-R05` | `PUBLIC_SELF_CHECK_REPRESENTED` | Mục tiêu được đại diện trực tiếp bởi ít nhất một câu công khai theo phân loại tác giả. |
| `B15_OUT_03` | `THPT-G10-B15-R04` | `PUBLIC_SELF_CHECK_REPRESENTED` | Mục tiêu được đại diện trực tiếp bởi ít nhất một câu công khai theo phân loại tác giả. |
| `B15_OUT_04` | `THPT-G10-B15-R03` | `PUBLIC_SELF_CHECK_REPRESENTED` | Mục tiêu được đại diện trực tiếp bởi ít nhất một câu công khai theo phân loại tác giả. |
| `B15_OUT_05` | `THPT-G10-B15-R02` | `PUBLIC_SELF_CHECK_REPRESENTED` | Mục tiêu được đại diện trực tiếp bởi ít nhất một câu công khai theo phân loại tác giả. |
| `B16_OUT_01` | `THPT-G10-B16-R05` | `PUBLIC_SELF_CHECK_REPRESENTED` | Mục tiêu được đại diện trực tiếp bởi ít nhất một câu công khai theo phân loại tác giả. |
| `B16_OUT_02` | `THPT-G10-B16-R01`, `THPT-G10-B16-R02` | `PUBLIC_SELF_CHECK_REPRESENTED` | Mục tiêu được đại diện trực tiếp bởi ít nhất một câu công khai theo phân loại tác giả. |
| `B16_OUT_03` | `THPT-G10-B16-R02` | `PUBLIC_SELF_CHECK_REPRESENTED` | Mục tiêu được đại diện trực tiếp bởi ít nhất một câu công khai theo phân loại tác giả. |
| `B16_OUT_04` | `THPT-G10-B16-R01` | `PARTIAL_PUBLIC_SELF_CHECK` | Có đỉnh/GTNN/tập giá trị nhưng câu cuối chương chưa yêu cầu nêu khoảng tăng và giảm của parabol. |
| `B16_OUT_05` | `THPT-G10-B16-R03`, `THPT-G10-B16-R04` | `PUBLIC_SELF_CHECK_REPRESENTED` | Mục tiêu được đại diện trực tiếp bởi ít nhất một câu công khai theo phân loại tác giả. |
| `B17_OUT_01` | `THPT-G10-B17-R01`, `THPT-G10-B17-R03` | `PARTIAL_PUBLIC_SELF_CHECK` | Có xét dấu qua nghiệm kép/bất phương trình nhưng chưa đo độc lập việc phân biệt đủ Δ<0, Δ=0, Δ>0. |
| `B17_OUT_02` | `THPT-G10-B17-R03` | `PUBLIC_SELF_CHECK_REPRESENTED` | Mục tiêu được đại diện trực tiếp bởi ít nhất một câu công khai theo phân loại tác giả. |
| `B17_OUT_03` | `THPT-G10-B17-R01` | `PUBLIC_SELF_CHECK_REPRESENTED` | Mục tiêu được đại diện trực tiếp bởi ít nhất một câu công khai theo phân loại tác giả. |
| `B17_OUT_04` | `THPT-G10-B17-R02` | `PUBLIC_SELF_CHECK_REPRESENTED` | Mục tiêu được đại diện trực tiếp bởi ít nhất một câu công khai theo phân loại tác giả. |
| `B17_OUT_05` | `THPT-G10-B17-R04` | `PUBLIC_SELF_CHECK_REPRESENTED` | Mục tiêu được đại diện trực tiếp bởi ít nhất một câu công khai theo phân loại tác giả. |
| `B18_OUT_01` | `THPT-G10-B18-R02`, `THPT-G10-B18-R03` | `PUBLIC_SELF_CHECK_REPRESENTED` | Mục tiêu được đại diện trực tiếp bởi ít nhất một câu công khai theo phân loại tác giả. |
| `B18_OUT_02` | `THPT-G10-B18-R01` | `PUBLIC_SELF_CHECK_REPRESENTED` | Mục tiêu được đại diện trực tiếp bởi ít nhất một câu công khai theo phân loại tác giả. |
| `B18_OUT_03` | `THPT-G10-B18-R01`, `THPT-G10-B18-R03` | `PUBLIC_SELF_CHECK_REPRESENTED` | Mục tiêu được đại diện trực tiếp bởi ít nhất một câu công khai theo phân loại tác giả. |
| `B18_OUT_04` | `THPT-G10-B18-R04` | `PUBLIC_SELF_CHECK_REPRESENTED` | Mục tiêu được đại diện trực tiếp bởi ít nhất một câu công khai theo phân loại tác giả. |

## Hai khoảng trống **độ sâu đo lường** cần lưu ý, không thêm câu thi cho đủ số

1. **`B16_OUT_04` — biến thiên và tập giá trị:** câu `THPT-G10-B16-R01` có yêu cầu đỉnh, GTNN và tập giá trị, nhưng không bắt trình bày **các khoảng đồng biến/nghịch biến**. Trên hành trình học, nguồn R03 đã có FIRST_TRY **TRY09** yêu cầu đủ cực trị/tập giá trị/tăng-giảm và có D6; do TRY09 là bài học với lời giải tự mở, **không được dùng thay bằng chứng kiểm tra độc lập sau Final Submit**. Nếu chủ dự án sau này cần đo outcome này bằng RD1 thật, phải có item kín độc lập, không tái dùng TRY09.
2. **`B17_OUT_01` — dấu tam thức trên toàn miền qua a và biệt thức:** các câu `B17-R01` và `B17-R03` có áp dụng xét dấu/bất phương trình hoặc nghiệm kép, nhưng **không kiểm riêng ba nhánh `Δ<0, Δ=0, Δ>0`**. R03 FIRST_TRY **TRY11** và các bảng dấu/SGK Core đã dạy toàn bộ nội dung; điều đó cho thấy **hành trình học có kiến thức**, không chứng minh câu cuối chương hiện đo đủ năng lực phân biệt ba trường hợp.

Không tự thêm câu vào RD1, không đòi NotebookLM đánh giá hash và không tự cấp Q02/Academic PASS mới cho khoảng trống đánh giá. Hai điểm này là **mục tiêu bổ sung khi chủ dự án phê duyệt đánh giá năng lực chính thức**, không phải lý do tự ý sửa/đưa đáp án mới lên website. Vì `CLIENT_SELF_CHECK_NO_MASTERY` đang là giới hạn được công bố, vẫn có thể bàn giao SGK formative khi các cổng AUTHORING độc lập khác đủ chứng cứ, nhưng không tuyên bố Chapter Readiness đã đo toàn bộ outcome ở chuẩn Mastery.

## Gợi ý học thật sự cho học sinh nếu làm sai

Không cần học lại toàn bộ 18 câu. Nếu sai ở `B16-R01`, quay về **B16_OUT_02/04** (đỉnh, biến thiên, tập giá trị); nếu sai ở `B17-R03`, quay về **B17_OUT_01/02** (a, biệt thức, nghiệm kép). Hướng dẫn lỗi/đường hồi phục chi tiết đã có trong `HELP-G10-CHVI-TRY07`, `HELP-G10-CHVI-TRY09`, `HELP-G10-CHVI-TRY11` và `HELP-G10-CHVI-TRY12`. Đây là chỉ dẫn AUTHORING để RELEASE dùng sau này, **chưa** phải logic tự động trên website.

## Checkpoint / future release

- QA bản đồ 18 item → 19 outcome: **PASS 18/18 câu nguồn**, độ sâu `17 represented, 2 partial`; **không khẳng định toàn bộ 19 outcome có đánh giá độc lập**.
- JSON nguồn không sửa; những thay đổi `outcome_id` tương lai thuộc cổng RELEASE phù hợp và phải quản lý cùng một canonical ID, không âm thầm sửa đáp án/rubric.
- Giữ an toàn Final Submit, no-Mastery, không tái sử dụng 18 câu công khai làm protected RD1, không phát hành, merge/deploy từ AUTHORING.
- AUTHORING ChVI vẫn `BLOCKED_BY_AUTHORING` về Q18 source custody cũ, cần giải quyết bằng quản lý nguồn của AUTHORING chứ không kéo NotebookLM vào hash.
