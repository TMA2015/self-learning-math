# Temp — G12 SGK Year-end R00 · Q18 SOURCE_RECEIPT correction / official Q01–Q18 crosswalk

PACKET_ID: G12-SGK-YEAREND-REVIEW-R00
REVIEW_SCOPE: TARGETED_Q18_SOURCE_FIDELITY_AND_Q_LABEL_MAPPING_ONLY
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.1.0
SOURCE_STATE: ORIGINAL_R00_IMMUTABLE
ACADEMIC_VERDICT_PREVIOUS_REPORT: PASS_REPORTED_NOT_REISSUED
PED_VERDICT_PREVIOUS_REPORT: PASS_REPORTED_NOT_REISSUED
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO

## 1. Sự khác biệt cần reviewer xác minh

Hai bản báo cáo R00 vừa được chủ dự án gửi (bản paste TXT và bản Studio Markdown) đều kết luận Academic/PED PASS, P0/P1/P2 = 0 và MINIMAL_DELTA = 0, nhưng bảng byte-level SHA256 **không đúng** với bốn Markdown trong ZIP R00 nguyên gốc. Cả bốn PNG đều khớp. Đây là đối chiếu provenance, **không phải yêu cầu sửa câu hỏi/đáp án/rubric học sinh**, và không tự hủy kết luận PASS của phạm vi bất biến.

## 2. Bảng kiểm toán byte gốc theo ZIP R00 và GitHub PR #735

- R00 ZIP (bản thực gửi trước khi NotebookLM review): `Temp_G12_SGK_YEAREND_NOTEBOOKLM_R00_20261104.zip`, SHA256 `e2c08924a3c781fa160482a8b387288876a272dd46fe9eab96e2419c69d12beb`; ZIP CRC PASS.
- Source S1 SGK Toán 12 KNTT Tập Hai, 99 trang PDF, SHA256 `3c642f2e80d86d699ea62bbcabd0c3074fd5118def96e4b3b8ce1f9ead7f97bb`, trang in 90–93 / PDF1 92–95.
- GitHub: `TMA2015/self-learning-math`, Draft PR #735, source-lock commit `82c5b78ac8a1fda4eca2da6541edce65286553a8`. Eight original files are unmodified under `prototypes/thpt/content-drafts/G12_SGK_YEAREND_R00_SOURCE/`.

| File Temp gốc trong ZIP | SHA256 **byte gốc đã tự kiểm** | Git blob SHA gốc | Kết quả đối chiếu SHA256 do reviewer R00 ghi |
|---|---|---|---|
| `Temp_G12_SGK_YEAREND_R00_LEARNING_20261104.md` | `0916e56206570127de02adc6a0016e412536486889d6b7bdeb593f42621e2293` | `7274cb3a6c35627f0e23574709cf5cdc355ab46a` | **MISMATCH** — báo cáo ghi `4ba802bdd0e7a93897d2da41e3dc70f5a31b24fe22f1628dd5b89a3748c5642c` |
| `Temp_G12_SGK_YEAREND_R00_OUTCOME_ITEM_MATRIX_20261104.md` | `f1d732a8f0f21965237d5c1b15a3d37f2c2954f17512a9477a0e5794b9cbbbf4` | `376731fdc3258eca77a61c731f81176fead8bfd8` | **MISMATCH** — báo cáo ghi `6b90b1fe8c724d3284dfc59c8e38d08c2dcfb6a956ae61d8d0ffe3f19f0e615c` |
| `Temp_G12_SGK_YEAREND_R00_S1_SCOPE_AUDIT_20261104.md` | `553096c476d8f92035d759e6b8791e6485f3d093b10dcc64fa632958b5c6103b` | `5ea4ca8d0eea99534b65fa58241b9aa31c4e0cdf` | **MISMATCH** — báo cáo ghi `477940bda597b40a60ae8f066fb685cecb64c2a3678066d3a966a90f66fb62cd` |
| `Temp_G12_SGK_YEAREND_R00_AUTHOR_QA_SHA_20261104.md` | `dab07939803fc667524cc453b8bbda9d2166652d7f5ea122be997a92b9e7a2c8` | `c2a24c34c2f3fa42b29f916288e6ac0e6dd3dc95` | **MISMATCH** — báo cáo ghi `c52842f42668a14e86138f87f21c4e9f07d4943751de24e903e725a3ac787b3a` |
| `Temp_FIG_G12_YE_R00_FUNCTION_VARIATION_20261104.png` | `d39305419017430a6262192f88f07c367042a94e5c2532f88c7b0aa4c7a3237f` | `69bc84632431f463f0d8f7359f469d93f135ac0e` | MATCH |
| `Temp_FIG_G12_YE_R00_SIGNED_AREA_20261104.png` | `78fd9c18ebe67cb9059a01c40c9540967ce5d2d17250cd95fcad0572adc1e66e` | `231ba9045048d03d3439fdc5e2fec706342da1a2` | MATCH |
| `Temp_FIG_G12_YE_R00_OXYZ_TETRA_20261104.png` | `399be5cb20a6a467899518683b7d95ca82f5a21d87bb91c1d0993b73369462de` | `208c6703f827951a0663ad360442324c328b874c` | MATCH |
| `Temp_FIG_G12_YE_R00_GROUPED_DATA_20261104.png` | `a55a0e5a8a15e3476d88e69ad6e5c1c1f09a7c9eb32ef41839050a703c455202` | `21c5d193a9399ac0b8c1f328790da7bf91e0d6cf` | MATCH |

**Byte sizes thực trong ZIP R00:** `LEARNING 49536`, `MATRIX 7616`, `S1_AUDIT 2065`, `AUTHOR_QA 2429` (khác số 49483/7684/2081/2419 reviewer nêu); các PNG lần lượt `76851 / 48989 / 171301 / 34137` đúng reviewer. Nguồn R00 Git blob/ZIP không thay đổi sau review. Đề nghị xác định reviewer đã dùng file nguồn nào và **không** báo cáo `BYTE_LEVEL_VERIFIED` cho SHA khác nếu không có file tương ứng.

## 3. Tên chuẩn Q01–Q18 chính thức (không tạo chuẩn mới)

Chuẩn gốc duy nhất: `prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md`, nội dung chuẩn **v1.1.0**. Hai báo cáo R00 gọi Q02 là `Math Correctness & Domain Limits`, Q03 là `Canonical Exercise & ID Contract` và Q18 là `System Authorization Boundary`; **đây không phải tên/nội hàm chính thức**. Dùng đúng đối chiếu dưới đây; chứng cứ chỉ lấy từ 8 file R00 đã review, không được tự điền điểm thiếu:

| Q | Nội hàm chính thức | Bằng chứng cần đối chiếu trong R00 |
|---|---|---|
| Q01 | S1 / Scope | SGK S1, pp90–93, outcome family, SBT reference gap documented |
| Q02 | Outcomes | 6 outcomes O01–O06; 31 item→outcome, concept/skill coverage |
| Q03 | D1 | 6 trạm WHY/PRE/MEANING/FORMAL, domain/conditions/limits |
| Q04 | D2 | 6 EX worked examples + method reason |
| Q05 | D3 | 15 MCQ with skills, levels, answer/rationale, variety |
| Q06 | D4 | 16 Written solutions, /5 rubric criteria, fixed item IDs |
| Q07 | D5 | 4 PNG originals + labels and figure-reading text |
| Q08 | D6 | 6 HELP pathways linked to outcomes/prerequisites |
| Q09 | PED1 | WHY/motivation before formulas |
| Q10 | PED2 | Explicit prerequisites and recall |
| Q11 | PED3 | Concept/meaning before formal procedure |
| Q12 | PED4 | Figure-reading/labels/units/limits |
| Q13 | PED5 | Why select method and when not to use |
| Q14 | PED6 | 6 first tries before core and self-reveal/HELP |
| Q15 | ID/Shared bank | 31 canonical item IDs without copies, one primary outcome |
| Q16 | Assessment/exposure | Public review; no held-out RD1 or Mastery; no pre-Submit leak in future RELEASE UI |
| Q17 | Dual complete journeys | SGK year-end supplement only, not new chapter or Topic |
| Q18 | Independent review / source fidelity | Exact Git source blob, 8-file receipts, owner reviewer transcripts, delta history |

## 4. Giới hạn verdict được yêu cầu

Phạm vi độc lập R00 reviewer đã báo cáo `ACADEMIC_VERDICT=PASS`, `PEDAGOGICAL_SELF_LEARNING_READY=PASS`, `P0=P1=P2=0`, `MINIMAL_DELTA=0`; xin chỉ **hiệu chỉnh dữ liệu nguồn và tên cổng** (Q18, Q02–Q18 crosswalk), không lặp lại đánh giá 31 câu nếu không phát hiện sai khác toán thực chất. Bản ghi reviewer gốc được bảo toàn; báo cáo metadata mới phải nêu chính xác `R00_REVIEWED_FILE_SHA256`, `R00_CANONICAL_GIT_BLOB_SHA`, `SOURCE_PARITY`, `Q18`, `ACADEMIC_VERDICT`, `PED_VERDICT`, các discrepancies còn lại và P0/P1/P2. Nếu **không thể xác minh** file đã review trùng byte nguồn ZIP/Git, ghi `Q18_SOURCE_PARITY_HOLD` thay vì tự cấp PASS.

**RANH GIỚI:** `CONTENT_READY=NO`, `RELEASE_AUTHORIZATION=NO`, `MASTERY_ACTIVATION=NO`. V2 hiện chỉ tiếp nhận `SGK_CHAPTER` và loại `SGK_EXPERIENCE_SUPPLEMENT` đã được chủ dự án duyệt; **chưa** có quyết định mở loại `SGK_YEAR_END_REVIEW_SUPPLEMENT`, không được gán nhãn giả để vào ready/ hoặc REGISTER.
