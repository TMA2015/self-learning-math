# G10 SGK ChV — AUTHORING R02 concept-first preflight QA (05/11/2026)

PACKET_ID: G10-SGK-CHV-PED-BRIDGE-R02-20261105
ROLE: AUTHORING_ONLY
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.2.0
ACADEMIC_VERDICT_NEW: PENDING_INDEPENDENT_NOTEBOOKLM
PED_VERDICT_NEW: PENDING_INDEPENDENT_NOTEBOOKLM
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO
SOURCE_PATH: prototypes/thpt/content-drafts/Temp_G10_CHV_PED_R02_FULL_CHAPTER_REVIEW_20261105.md
SOURCE_GIT_BLOB: 524124e5b6d3af92130cd05178d3d58d2035b084
R01_FROZEN_SOURCE_BLOB: 49502fe39cf0a67f6a3e973a77f94164150637a7
R01_NOTEBOOKLM_HISTORICAL_VERDICT: ACADEMIC_PASS_14_OUTCOMES_27_CANONICAL
B12_HELP01_R02_CANONICAL_REPLACEMENT_BLOB: 2cecaba020881a560bc33251c38d55cc10a05516
B12_HELP02_R02_CANONICAL_REPLACEMENT_BLOB: 913400d6aff63befac95a8a47a00870663dd0096
PUBLIC_CLIENT_CHV_JSON_BLOB: 94c5c39ad7958b2ef02ada016d928954a0b430f6

## Các dữ kiện nguyên trạng

SGK Toán 10 KNTT Tập Một Chương V *Bài 12 Số gần đúng và sai số; Bài 13 Các số đặc trưng đo xu thế trung tâm; Bài 14 Các số đặc trưng đo độ phân tán*; SGK printed B12 73–77, B13 78–83, B14 84–88, end 89–90. SBT printed B12 72–73, B13 74–77, B14 78–80, end 81–84. Những mốc này lấy đúng receipt nguồn R01 trước, không phỏng đoán chỉ số trang PDF hoặc tự tuyên bố đã quét lại sách trong phiên này.

Nguồn R01 toàn chương đã được NotebookLM độc lập Academic PASS theo nguồn snapshot trước khi có chuẩn PED mới: **14 outcomes / 27 canonical item IDs** (24 Core/Practice, 3 Written), 9 ví dụ D2, 3 FIG IDs, 6 HELP IDs. Hai HELP B12 được review sửa độc lập ở đợt R02 trước đó; **các bản @R02 thay thế bản R01 cùng ID**, không cộng thêm thẻ mới. Hình FIG-G10-B12-01 cũng có replacement R02 đã nghiệm thu trong release custody.

## Preflight QA thực thi trên GitHub current main + source blob R02 mới

| Check | Measured | Author verdict |
| --- | --- | --- |
| Bài / outcomes SGK | B12: 4, B13: 5, B14: 5; tổng 14 | PASS |
| Các FIRST_TRY_ITEM_ID mới | TRY01..TRY14, 14 duy nhất | PASS |
| Existing R01 canonical items | 27 độc lập/nguồn đã PASS, không sửa | PASS |
| Existing public client CHV.json | 18 items, nội dung gốc bất biến | PASS |
| Tổng unique nếu PED được duyệt | 27 + 14 + 18 = **59** | PASS |
| References outcome / R01 Core | 14/14 resolve về R01 canonical | PASS |
| References D6 HELP | 14/14 resolve về đúng 6 HELP IDs, HELP01/02 B12 dùng R02 overlay | PASS |
| Voluntary self-reveal | 14 HTML details open/close, lời giải chỉ tự mở | PASS |
| KNTT sai số | a gần đúng, bar a đúng, \(\Delta_a\le d\), \(\delta_a\le d/|a|\) khi a!=0 | PASS author |
| KNTT tứ phân vị / mốt | n lẻ loại Q2, mốt có thể nhiều giá trị | PASS author |
| KNTT phương sai / ngoại lệ | chia n, IQR với hàng rào nghiêm ngặt | PASS author |
| Quick numerical independent calculations | 11 representative checks across B12–B14 | PASS author |
| NotebookLM academic / PED1–PED6 independent | Not yet run for new R02 | PENDING |

### Phạm vi reviewer và ranh giới

Toàn bộ **14 PED narratives + 14 canonical Tự thử** là `DELTA_C_ACADEMIC_MATERIAL`; cần NotebookLM phản biện độc lập bằng đúng 5 Permanent Sources v2.1, nguồn SGK/SBT S1 và chuẩn duy nhất `SLM-THPT-QUALITY-ONE Q01–Q18 v1.2.0`. R01 và B12 D6 revised HELP source được giữ nguyên, không dùng source R01 HELP01/02 lỗi. Nếu reviewer phát hiện lỗi, chỉ sửa scope bị tác động rồi review đúng Delta C affected, không mở lại cả chương hay tạo tiêu chuẩn mới.

**Không tạo ready/ manifest hoặc V2 source-locked CONTENT_READY, không sửa student website, không merge/deploy, không bật official RD1/Mastery.** 18 câu tự kiểm tra CHV đã công khai là `CLIENT_SELF_CHECK_NO_MASTERY` sau Final Submit và không thể thay thế một ngân hàng đánh giá độc lập.
