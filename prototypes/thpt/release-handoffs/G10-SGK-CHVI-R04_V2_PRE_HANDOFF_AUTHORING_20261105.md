# G10-SGK-CHVI — R04 consolidated AUTHORING V2 pre-handoff (NOT CONTENT_READY)

PACKET_ID: G10-SGK-CHVI
LEARNING_PATH: SGK_CHAPTER
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.2.0
HANDOFF_PROTOCOL: THPT-TWO-LANE-V2
RELEASE_SCOPE: FULL_LEARNING_PATH_CLIENT_SELF_CHECK_NO_MASTERY
ROLE: AUTHORING_ONLY
STATE: BLOCKED_BY_AUTHORING
HANDOFF_STATUS: V2_PRE_HANDOFF_NOT_SIGNED
ACADEMIC_VERDICT: HISTORIC_R01_PASS_R03_R02_REVIEWER_REPORTED_R04_SCOPED_PASS
PEDAGOGICAL_VERDICT: R02_REPORTED_19_OUTCOMES_PASS_AND_R04_NEW_2_PASS
CONTENT_READY: NO
BLOCKERS: Q15_8_R01_WRITTEN_OUTCOME_NOT_VERIFIED,Q18_HISTORIC_R01_FULL_SOURCE_CUSTODY_AND_R02_EXTERNAL_REVIEW_IDENTITY
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
PUBLIC_ITEM_IDS_PROPOSED: 74
CURRENT_MAIN_R04_NEW_ITEM_IDS_INTEGRATED: 0
PRIVATE_RD1_COUNT_NEW: 0
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO

## Một nguồn học liệu theo phiên bản, không viết lại đề đã PASS

- **Lớp kiến thức SGK R01 đã nghiệm thu:** 4 bài B15–18; 54 item canonical = 28 Core/Practice/Application + 8 Written/Anchor +18 câu cuối chương. Receipt độc lập: `prototypes/thpt/THPT_G10_CHVI_NOTEBOOKLM_ACADEMIC_VERDICT_RECEIPT_20261028.md`, Git blob `23156f35aab6ec28771a6a57d48bad74f3900e9c`; gói Temp ZIP gốc SHA256 `704f23d50278f9d36270d4b065b3d8f72e08ffbd00f3ac3fbe41a66fb40b2960`. **Bản ZIP 5 Temp gốc không được khôi phục đầy đủ thành một nguồn Git source trong PR này**; không được tự tuyên bố ký khóa nguồn nguyên bản. Biên bản gốc từng ghi 18 câu cuối chương là heldout, nhưng các câu hiện đã công khai `CHVI.json` trên main, vì vậy chỉ còn client selfcheck không Mastery.
- **Lớp PED học độc lập R03:** `prototypes/thpt/content-drafts/Temp_G10_CHVI_PED_R03_EFFECTIVE_CANONICAL_SOURCE_20261105.md`, Git blob `77d42ce0ecf6fd4677ea0d831589db4bb18290d8`; 19 outcomes, 19 placement Tự thử trước Core nhưng chỉ 18 item mới, 1 item dùng chung `THPT-G10-B18-C01`, 19 HELP, 2 inline SVG B15/B18. R03 giữ nguyên toán/đề–đáp án–lời giải và 2 SVG từ nguồn reviewer R02 blob `1e6a76ee32b722b5e5457e85f90eb32f4d98b57d`, chỉ sửa **12 đường hồi phục D6** và nhất quán Q15 item ID. Review NotebookLM R02 được chủ dự án cung cấp có 19/19 nội dung khớp và báo Academic/PED PASS, riêng Q07/PED4 hai SVG PASS; hồ sơ external mounted R02 còn bất đồng nguyên bản chưa có chứng cứ author-owned đủ để đóng Q18. Không kéo reviewer vào đối chiếu hash.
- **R04 bổ sung đã đạt phản biện độc lập scoped:** `prototypes/thpt/content-drafts/Temp_G10_CHVI_R04_TWO_OUTCOME_PUBLIC_SELFCHECK_REVIEW_20261105.md`, Git blob `ef0b82555bb9f8028c49d948d2276b6ea0f16956`. Reviewer receipt `prototypes/thpt/review-packets/G10_CHVI_R04_SCOPED_NOTEBOOKLM_ACADEMIC_PED_PASS_RECEIPT_20261105.md`, blob `43b2da942b9d8d3ec5a32647e3ed1a217125a255`. **`THPT-G10-B16-R06`** (`B16_OUT_04`, 8đ tự đối chiếu) và **`THPT-G10-B17-R05`** (`B17_OUT_01`, 10đ tự đối chiếu), thêm 2 HELP D6, **Academic PASS 2/2 + PED PASS 2/2**, P0=P1=P2=0. Tất cả là nội dung C mới đã review; không phát hành tự động và không suy rộng sang R01/R03 snapshot khác.

**Bộ dữ liệu công khai hiện tại không thay đổi:** `docs/assets/data/thpt-g10-readiness/CHVI.json` blob `0760782256a2d8d91c398814e62d013cf6083eb7` vẫn gồm 18 câu, 18 `outcome_id` còn trống; chưa bổ sung R04 vào site.

## Bảng bằng chứng trung tâm của gói V2

| Hạng mục | Học liệu đã chuẩn bị | QA / giới hạn |
|---|---|---|
| S1 SGK/SBT | Toán 10 KNTT **Tập Hai**, SGK B15 p4–10, B16 11–18, B17 19–24, B18 25–27, cuối chương 28–29; SBT lần lượt 3–9, 10–15, 16–18, 19–21, cuối chương 22–27 | Theo visual index S1 lịch sử. SGK PDF SHA256 `ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6`; SBT `3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7` |
| LESSON_IDs | `G10-SGK-B15`, `G10-SGK-B16`, `G10-SGK-B17`, `G10-SGK-B18` | 4/4 |
| OUTCOME_IDs | `B15_OUT_01..05`, `B16_OUT_01..05`, `B17_OUT_01..05`, `B18_OUT_01..04` | 19/19 |
| 74 distinct proposed canonical ITEM_IDs | R01 54 + R03 18 + R04 2; đầy đủ từng mã/role/đường học tại `prototypes/thpt/shared-items/G10_CHVI_R04_CANONICAL_74_ITEM_OUTCOME_PREFLIGHT_20261105.md` blob `000c205385002d14237031f74cf40a07f7569349` | **66 đã có mapping primary từ đề hoặc reviewer/author; 8 Written/Anchor R01 còn thiếu bằng chứng item-specific outcome. Q15 gate không ký PASS toàn bộ** |
| First Try và khắc phục | 19 vị trí trước Core, 19 HELP D6 năm bước trong R03, 12 sửa đích luyện tập chính xác | 19 placement tương ứng 18 ID mới + `B18-C01` dùng chung một canonical; không tính placement là item mới |
| D5/PED4 SVG | B15 mapping một đầu vào–một đầu ra, B18 điều kiện căn→bình phương→thử nghiệm gốc; R01 B16/B17 đồ thị/bảng dấu giữ | NotebookLM scoped Q07/PED4 PASS về nội dung XML; RELEASE phải QA render |
| Chapter-end selfcheck | **18 câu đang công khai** + **2 R04 đã duyệt chưa tích hợp**, total **20 ứng viên** | `prototypes/thpt/audits/G10_CHVI_R04_PROPOSED_20_SELF_CHECK_19_OUTCOME_COVERAGE_20261105.md` Git blob `3fa89cc3a6f5a60a6e240502647b0d176d7aae61`: 19/19 outcome có nội dung ứng viên, **không phải website 20 câu hay protected RD1** |
| Two independent learning paths | Bản này chỉ tuyến `SGK_CHAPTER`, tự đủ kiến thức; không bắt buộc theo Topic link | Không suy `TOPIC_READINESS` hoặc Topic PASS |
| Assessed safety | Formative First Try tự mở; cuối chương chỉ mở đáp án, rubric, đúng/sai, HELP sau Final Submit; không AI Tutor trước submit | Content contract đã nêu, **chưa kiểm nghiệm hành vi runtime**; CLIENT_SELF_CHECK_NO_MASTERY, không ghi Skill Mastery |
| Snapshot/provenance | R01 ZIP original receipt, R02 reviewer report, R03 source Git blob, R04 Git blob + independent receipt | R01 exact original source chưa có trong hồ sơ git current; R02 mounted source discrepancy vẫn OPEN (author-owned). Không giả mạo Q18 PASS |
| RELEASE AP/R/P | Không làm trong nhánh AUTHORING | Chưa tích hợp, chưa QA website, chưa merge/deploy |

## A1–A7 (author gate theo đúng một chuẩn Q01–Q18)

| Cổng | Kết quả authoring | Lý do |
|---|---|---|
| A1 SOURCE/SNAPSHOT | **HOLD** | R01 năm source gốc còn chưa hiện diện như canonical đầy đủ cho V2; R02 external reviewer mount không chứng minh tương đương nguồn R03 thừa kế |
| A2 S1 SGK/SBT | EVIDENCE_READY | S1 đúng sách/tập/trang in từ receipt đã khóa |
| A3 Academic + PED reviewer | SCOPED_PASS_HISTORY | R01 Academic 54/54; R02 PED/Academic 19/19 được báo, Q07/PED4 hai SVG PASS; R04 Academic/PED 2/2 PASS. **Không cấp PASS chung trên snapshot duy nhất khác** |
| A4 item/outcome/placement | **PARTIAL_HOLD** | 74 unique, mapping đã có 66; 8 Written R01 chưa xác minh từng outcome từ chính đề và rubric |
| A5 D1–D6 / PED1–PED6 | EVIDENCE_PREPARED | Tự học từ bản chất, 19 First Try, 19 HELP, 2 SVG, 12 recovery fixes; R04 đã giải quyết hai độ sâu thiếu trong tự kiểm tra công khai ứng viên |
| A6 Delta | EVIDENCE_PREPARED | R03 `DELTA_B` routing+ID source equivalent, R04 `DELTA_C` scoped independent PASS, giữ nguyên R01 |
| A7 Public / private | EVIDENCE_PREPARED | 18 câu cuối chương cũ đã public, 2 R04 public proposed; tất cả NO_MASTERY, không công bố RD1 kín; không suy official Chapter Readiness từ selfcheck |

**PED1–PED6:** chuỗi `WHY→PRE→MEANING→READ_VISUAL→METHOD/LIMITS→FIRST_TRY→D6` hiện trong nguồn R03 theo từng outcome; verdict reviewer được bảo toàn đúng scope. Không dùng đủ số item thay độ sâu.

## Quyết định AUTHORING hiện tại và các điều kiện kết thúc

1. **Có thể coi R04 riêng phần toán/sư phạm đã hoàn tất**: không thêm vòng NotebookLM cho 2 câu đúng nguồn và không sửa câu trả lời/rubric khi không có academic defect.
2. **Cần AUTHORING lấy bằng chứng thật cho 8 mã Written/Anchor R01** để điền outcome ID cụ thể và vị trí liên kết; không gán chỉ dựa trên tên WRI-15/WRI-17. Nếu chính đề nguồn không có, báo `BLOCKED_BY_AUTHORING(Q15_WRITTEN8)`, không tạo lại câu mới để đạt số.
3. **Cần AUTHORING đóng khả năng truy xuất source/receipt lịch sử** từ nguồn thực tế mà mình quản lý theo Q18; không yêu cầu NotebookLM chạy Python/Git/hash hoặc review lại nội dung bất biến. Không tự tuyên bố R01 ZIP được phục hồi khi chưa có dữ liệu.
4. Chỉ sau A1–A7, Academic + PED + Q01–Q18 cùng PASS, mới tạo **một** signed V2 handoff, **một** ready manifest cho `G10-SGK-CHVI` và một REGISTER row đồng bộ; lúc này mới cho RELEASE tiếp nhận bản immutable. Hiện **không tạo** hai hiện vật đó.
5. Tất cả việc đưa R04 vào JSON/site, bảo đảm Final Submit, Golden UI, responsive, AP1–AP5, R1–R5, Firebase/Skill Mastery, merge/deploy thuộc RELEASE và cần đúng quyền của chủ dự án.

**CHECKPOINT:** `BLOCKED_BY_AUTHORING(Q15_WRITTEN8,Q18_R01_R02_SOURCE_CUSTODY)` — `CONTENT_READY=NO`. Dừng đúng tại hồ sơ AUTHORING; không phát hành.
