# G10 SGK ChVI — R04 accepted: 20 public self-check candidates mapped to 19 outcomes (AUTHORING)

PACKET_ID: G10-SGK-CHVI-R04-20-PUBLIC-SELFCHECK-ACADEMIC-COVERAGE-20261105
ROLE: AUTHORING_ONLY
STATUS: AUTHORING_ACADEMIC_COVERAGE_PREPARED_NOT_RELEASED
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.2.0
LEARNING_PATH: SGK_CHAPTER
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
MAIN_PUBLIC_DATA_PATH: docs/assets/data/thpt-g10-readiness/CHVI.json
MAIN_PUBLIC_DATA_GIT_BLOB: 0760782256a2d8d91c398814e62d013cf6083eb7
R03_EFFECTIVE_PED_SOURCE_GIT_BLOB: 77d42ce0ecf6fd4677ea0d831589db4bb18290d8
R04_NEW_ACADEMIC_SOURCE_PATH: prototypes/thpt/content-drafts/Temp_G10_CHVI_R04_TWO_OUTCOME_PUBLIC_SELFCHECK_REVIEW_20261105.md
R04_NEW_ACADEMIC_SOURCE_GIT_BLOB: ef0b82555bb9f8028c49d948d2276b6ea0f16956
R04_SCOPED_NOTEBOOKLM_REVIEW_RECEIPT_GIT_BLOB: 43b2da942b9d8d3ec5a32647e3ed1a217125a255
PRIOR_R03_18_ITEM_DEPTH_AUDIT_GIT_BLOB: 13cb59da33e0c893f6e2ce0554286512f37046b8
EXISTING_PUBLIC_SELF_CHECK_ITEMS: 18
REVIEWED_R04_NOT_RELEASED_ITEMS: 2
PLANNED_TOTAL_PUBLIC_SELFCHECK_ITEMS: 20
TOTAL_OUTCOME_IDS: 19
OUTCOMES_FULLY_REPRESENTED_IN_COMPOSITE_CONTENT: 19_OF_19_BY_AUTHOR_MAPPING
OUTCOMES_STILL_PARTIAL_IN_ORIGINAL_PUBLIC_18: B16_OUT_04,B17_OUT_01
ORIGINAL_PUBLIC_OUTCOME_ID_FIELDS_EMPTY: 18_OF_18
NEW_PRIVATE_RD1: 0
EXISTING_DISTINCT_PUBLIC_CANONICAL_ALL_TYPES: 72
PROPOSED_DISTINCT_PUBLIC_CANONICAL_ALL_TYPES: 74
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO

## Phạm vi xác thực: nội dung ứng viên ≠ website đã có 20 câu

Nguồn `CHVI.json` trên `main` có **18 câu**, mọi `outcome_id` đều rỗng. Tác giả đã đọc nội dung đề và đối chiếu từng câu với outcome trong biên bản R03, không tự sửa dữ liệu `main`. 18 câu cũ xét theo đề có **17/19 outcome được đại diện**, hai outcome `B16_OUT_04` và `B17_OUT_01` chỉ **được kiểm một phần**; giờ mỗi outcome này có **1 câu tự luận R04 đúng nội dung cần đo**, đã được NotebookLM độc lập Academic/PED PASS 2/2, P0/P1/P2=0. Vì vậy **gói ứng viên 20 câu có độ phủ nội dung 19/19**; KHÔNG được nói 20 câu đã triển khai, 19/19 đạt independent Mastery hay Final Submit runtime đã PASS.

Dữ liệu cũ có outcome làm **mục tiêu phụ** mà không phải item mới: ví dụ `B18_OUT_03` (thử lại loại ngoại nghiệm) thể hiện trong `THPT-G10-B18-R01` và `R03` với outcome chính khác. Cần đọc cả chính lẫn phụ, không được tuyên bố outcome không được phủ chỉ vì không phải nhãn primary. Một câu — một canonical `item_id` với nhiều outcome/placement hợp lý.

## Ma trận 18 câu public + 2 câu R04 đã REVIEW, không đăng website

| ITEM_ID canonical | Bài | Outcome chính | Outcome phụ (không nhân bản) | Nguồn | Mức chứng cứ nội dung |
|---|---|---|---|---|---|
| `THPT-G10-B15-R01` | B15 | `B15_OUT_01` | — | `MAIN_PUBLIC_18` | Tính duy nhất của đầu ra |
| `THPT-G10-B15-R02` | B15 | `B15_OUT_05` | — | `MAIN_PUBLIC_18` | Hàm từng đoạn và mốc ranh giới |
| `THPT-G10-B15-R03` | B15 | `B15_OUT_04` | — | `MAIN_PUBLIC_18` | Đồng/nghịch biến hàm bậc nhất |
| `THPT-G10-B15-R04` | B15 | `B15_OUT_03` | — | `MAIN_PUBLIC_18` | Điểm có thuộc đồ thị hay không |
| `THPT-G10-B15-R05` | B15 | `B15_OUT_02` | — | `MAIN_PUBLIC_18` | Điều kiện căn và mẫu của tập xác định; không yêu cầu tập giá trị |
| `THPT-G10-B16-R01` | B16 | `B16_OUT_02` | `B16_OUT_04` | `MAIN_PUBLIC_18` | Đỉnh/trục/GTNN/tập giá trị, chưa hỏi khoảng đồng/nghịch biến |
| `THPT-G10-B16-R02` | B16 | `B16_OUT_03` | `B16_OUT_02` | `MAIN_PUBLIC_18` | Đỉnh/trục/giao Ox, Oy/chiều mở |
| `THPT-G10-B16-R03` | B16 | `B16_OUT_05` | — | `MAIN_PUBLIC_18` | Độ cao chuyển động theo thời gian và miền thực tế |
| `THPT-G10-B16-R04` | B16 | `B16_OUT_05` | — | `MAIN_PUBLIC_18` | Doanh thu theo giá và điều kiện mô hình |
| `THPT-G10-B16-R05` | B16 | `B16_OUT_01` | — | `MAIN_PUBLIC_18` | Nhận diện hệ số bậc hai a khác 0 |
| `THPT-G10-B17-R01` | B17 | `B17_OUT_03` | `B17_OUT_01` | `MAIN_PUBLIC_18` | Nghiệm khoảng BPT; vận dụng xét dấu nhưng chưa kiểm riêng ba trường hợp biệt thức |
| `THPT-G10-B17-R02` | B17 | `B17_OUT_04` | — | `MAIN_PUBLIC_18` | Điều kiện tham số để tam thức dương mọi x với a=1 cố định |
| `THPT-G10-B17-R03` | B17 | `B17_OUT_02` | `B17_OUT_01` | `MAIN_PUBLIC_18` | Nghiệm kép và dấu; chỉ trường hợp delta=0 |
| `THPT-G10-B17-R04` | B17 | `B17_OUT_05` | — | `MAIN_PUBLIC_18` | Bất phương trình lợi nhuận và miền biến thực tế |
| `THPT-G10-B18-R01` | B18 | `B18_OUT_02` | `B18_OUT_03` | `MAIN_PUBLIC_18` | Một căn bằng biểu thức thường, nghiệm ngoại lai và điều kiện vế phải |
| `THPT-G10-B18-R02` | B18 | `B18_OUT_01` | — | `MAIN_PUBLIC_18` | Hai căn, radicands và nghiệm hợp lệ |
| `THPT-G10-B18-R03` | B18 | `B18_OUT_01` | `B18_OUT_03` | `MAIN_PUBLIC_18` | Hai căn với nghiệm ngoại lai do miền xác định |
| `THPT-G10-B18-R04` | B18 | `B18_OUT_04` | — | `MAIN_PUBLIC_18` | Pitago, độ dài thực tế, phương trình căn và nghiệm dương |
| `THPT-G10-B16-R06` | B16 | `B16_OUT_04` | `B16_OUT_02` | `R04_REVIEWED_NOT_RELEASED` | Trên D=[−2;5], yêu cầu cả tăng/giảm, min/max, range; rubric 8đ; A/PED PASS |
| `THPT-G10-B17-R05` | B17 | `B17_OUT_01` | `B17_OUT_02` | `R04_REVIEWED_NOT_RELEASED` | Ba tam thức tương ứng Δ<0, =0, >0 xét đồng thời dấu a; rubric 10đ; A/PED PASS |

## 19 outcome → evidence thực của gói ứng viên 20 câu

| Outcome | Chính: 18 hiện hành | Phụ: 18 hiện hành | Câu R04 đã duyệt (chưa tích hợp) | Cổng phủ nội dung |
|---|---|---|---|---|
| `B15_OUT_01` | `THPT-G10-B15-R01` | — | — | `COVERED_BY_PUBLIC_PRIMARY` |
| `B15_OUT_02` | `THPT-G10-B15-R05` | — | — | `COVERED_BY_PUBLIC_PRIMARY` |
| `B15_OUT_03` | `THPT-G10-B15-R04` | — | — | `COVERED_BY_PUBLIC_PRIMARY` |
| `B15_OUT_04` | `THPT-G10-B15-R03` | — | — | `COVERED_BY_PUBLIC_PRIMARY` |
| `B15_OUT_05` | `THPT-G10-B15-R02` | — | — | `COVERED_BY_PUBLIC_PRIMARY` |
| `B16_OUT_01` | `THPT-G10-B16-R05` | — | — | `COVERED_BY_PUBLIC_PRIMARY` |
| `B16_OUT_02` | `THPT-G10-B16-R01` | `THPT-G10-B16-R02` | — | `COVERED_BY_PUBLIC_PRIMARY` |
| `B16_OUT_03` | `THPT-G10-B16-R02` | — | — | `COVERED_BY_PUBLIC_PRIMARY` |
| `B16_OUT_04` | — | `THPT-G10-B16-R01` | `THPT-G10-B16-R06` | `FULL_ONLY_WITH_REVIEWED_R04_NOT_YET_LIVE` |
| `B16_OUT_05` | `THPT-G10-B16-R03`, `THPT-G10-B16-R04` | — | — | `COVERED_BY_PUBLIC_PRIMARY` |
| `B17_OUT_01` | — | `THPT-G10-B17-R01`, `THPT-G10-B17-R03` | `THPT-G10-B17-R05` | `FULL_ONLY_WITH_REVIEWED_R04_NOT_YET_LIVE` |
| `B17_OUT_02` | `THPT-G10-B17-R03` | — | — | `COVERED_BY_PUBLIC_PRIMARY` |
| `B17_OUT_03` | `THPT-G10-B17-R01` | — | — | `COVERED_BY_PUBLIC_PRIMARY` |
| `B17_OUT_04` | `THPT-G10-B17-R02` | — | — | `COVERED_BY_PUBLIC_PRIMARY` |
| `B17_OUT_05` | `THPT-G10-B17-R04` | — | — | `COVERED_BY_PUBLIC_PRIMARY` |
| `B18_OUT_01` | `THPT-G10-B18-R02`, `THPT-G10-B18-R03` | — | — | `COVERED_BY_PUBLIC_PRIMARY` |
| `B18_OUT_02` | `THPT-G10-B18-R01` | — | — | `COVERED_BY_PUBLIC_PRIMARY` |
| `B18_OUT_03` | — | `THPT-G10-B18-R01`, `THPT-G10-B18-R03` | — | `COVERED_BY_PUBLIC_SECONDARY` |
| `B18_OUT_04` | `THPT-G10-B18-R04` | — | — | `COVERED_BY_PUBLIC_PRIMARY` |

## An toàn nguồn đánh giá và vai trò

- **Q01–Q02, Q05–Q06:** đề, lời giải, rubric hai câu R04 được NotebookLM A/PED PASS theo đúng `B16_OUT_04` và `B17_OUT_01`. Các câu R01 giữ PASS snapshot cũ; không tạo bản sao R01/R03 hoặc tự cấp verdict mới.
- **Q15:** 20 public selfcheck IDs là 18 IDs R01 công khai + 2 R04 mới; tách hẳn các 18 First Try mới R03 và 1 First Try dùng chung B18-C01. Tổng **74** canonical public IDs chỉ là con số ứng viên toàn ChVI sau khi R04 có cơ hội tích hợp, không phải count live.
- **Q16:** hai R04 là **PUBLIC_WRITTEN_SELF_CHECK**, answers, right/wrong, rubric, D6 HELP, Tutor ẩn **trước Final Submit**; sau submit người học tự đối chiếu. Lượt tự luận tự chấm **không** ghi Skill Mastery/Firebase và không tính đánh giá độc lập RD1.
- **Q17:** chỉ SGK, Topic vẫn một hành trình độc lập, không dùng các câu công khai làm chứng cứ Topic Readiness kín.
- **Q18:** R04 author source SHA + scope reviewer receipt lưu; R02 historical source-custody issue thuộc AUTHORING, không giao NotebookLM làm kỹ thuật.
- **RELEASE:** việc thật sự nhập hai item vào live data, gắn `outcome_id` cho 18 cũ, kiểm tra Final Submit/QA trình bày/AP thuộc nhánh RELEASE, chưa thực hiện; không sửa JS, HTML, JSON, Firebase hay merged branch trong AUTHORING.

## Kết luận AUTHORING

**19 outcome có nội dung tự kiểm tra theo gói 20 câu dự kiến**. Độ sâu hai mục thiếu được bù bằng việc **buộc học sinh giải thích toán** (miền bị giới hạn, a và ba trường hợp biệt thức), không phải thêm hai câu chỉ để đủ số. Chương VI vẫn phải qua source-custody/full-handoff gates mới được `CONTENT_READY`, không tự suy Q18 PASS từ R04. Không có quyền merge/deploy hoặc Mastery.
