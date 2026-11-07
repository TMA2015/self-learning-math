# G10-SGK-CHVI — R04 consolidated AUTHORING V2 pre-handoff (NOT CONTENT_READY)

> **OWNER DECISION — 05/11/2026 (current operating instruction):** Chấm dứt vòng điều tra chênh lệch byte giữa báo cáo NotebookLM và tệp tác giả khi **nội dung học thuật có thể đối chiếu trực tiếp theo từng câu/outcome**. Tác giả đã xác nhận biên bản R02 mô tả đúng 19/19 câu Tự thử, kết quả và 19 outcomes của source R02; hai SVG B15/B18 có tên/title/desc XML đúng theo phản biện bổ sung; R03 giữ nguyên 19/19 đề, đáp án, lập luận và PED1–PED5, chỉ sửa đường luyện tập D6 cùng một alias item đã kiểm. R01 đã có review gốc, R04 2/2 đã có review độc lập. **Không bắt NotebookLM review lại chỉ vì 558 byte hoặc yêu cầu chạy hash/đối chiếu dòng.** Sai khác 93.198 / 92.640 byte được lưu là *chênh lệch metadata chưa giải thích*, KHÔNG được ghi thành byte-identical PASS. Đây là quyết định xử lý chứng cứ review theo nội dung của chủ dự án, không tạo chuẩn mới và không bỏ qua lỗi toán thực sự nếu tìm thấy. Việc còn lại là hoàn thiện handoff V2 theo nguồn đã review; **CONTENT_READY=NO đến khi gói bàn giao ký/manifest/REGISTER được hoàn tất**. Không tích hợp website/merge/deploy trong AUTHORING.


> **CẬP NHẬT AUTHORING 05/11 — R01 SHA 5/5 PASS:** ZIP gốc 28/10 được khôi phục tại Library, 26.884 bytes, exact full ZIP SHA và 5 thành phần khớp receipt. Audit SHA Git `48d1d46fdc777ed3eda3c94798fa501f6ef6dc35`. **Chỉ còn Q18 R02 reviewer-mounted source identity HOLD.** Giữ `CONTENT_READY=NO`, không signed V2/ready/REGISTER, không release.

R02_SOURCE_IDENTITY_AUTHOR_AUDIT_BLOB: c50494ce18fb8a2f224d11c0e54f49781099f38f
R02_REVIEWER_MOUNTED_SOURCE_BYTES_REPORTED: 92640
R02_SOURCE_CANONICAL_UTF8_BYTES: 93198
R02_SOURCE_CR_COUNT: 0
R02_SOURCE_IDENTITY_STATUS: BYTE_PARITY_UNPROVEN_CONTENT_REVIEW_MATCH_ACCEPTED_BY_OWNER

R03_AUTHOR_STRUCTURAL_QA_BLOB: 6a552663bd0307b29ac4782eae397f93b2d2424b
R03_AUTHOR_QA_OUTCOMES_PED1_PED6: 19_OF_19
R03_AUTHOR_QA_D6_FIVE_STEP: 19_OF_19
R03_AUTHOR_QA_REMEDIATION_ROUTES: 15_CANONICAL_IDS_PLUS_4_IN_CHAPTER_KNOWLEDGE_REFERENCES
R03_AUTHOR_QA_UNRESOLVED_ITEM_IDS: 0
R03_AUTHOR_QA_NEW_SVG_SOURCE_STRUCTURE: 2_OF_2
R03_INDEPENDENT_REVIEW_ON_EXACT_EFFECTIVE_SOURCE: NOT_YET_PROVEN
PACKET_ID: G10-SGK-CHVI
LEARNING_PATH: SGK_CHAPTER
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.2.0
HANDOFF_PROTOCOL: THPT-TWO-LANE-V2
RELEASE_SCOPE: FULL_LEARNING_PATH_CLIENT_SELF_CHECK_NO_MASTERY
ROLE: AUTHORING_ONLY
STATE: AUTHORING_V2_HANDOFF_ASSEMBLY
HANDOFF_STATUS: V2_PRE_HANDOFF_NOT_SIGNED
ACADEMIC_VERDICT: HISTORIC_R01_PASS_R03_R02_REVIEWER_REPORTED_R04_SCOPED_PASS
PEDAGOGICAL_VERDICT: R02_REPORTED_19_OUTCOMES_PASS_AND_R04_NEW_2_PASS
CONTENT_READY: NO
BLOCKERS: NONE_ACADEMIC_ON_REVIEWED_CONTENT; V2_SIGNED_HANDOFF_AND_READY_MANIFEST_REGISTER_NOT_CREATED
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
PUBLIC_ITEM_IDS_PROPOSED: 74
WRITTEN8_PUBLIC_BODY_Q15_AUDIT_BLOB: d5cd8e960d39df9bbfb17bd021bfb54fc99340c5
WRITTEN8_PUBLIC_SOURCE_BLOB: 4da918f36d30c9b7110099e81fc88943e5b7705b
CURRENT_74_ITEM_MATRIX_BLOB: f4a6bf6f81ad0a2d8dcc5eb661790c1736aaea52
R01_PRIVATE_TEMP03_RECOVERED_SHA256: 3ee7d0cdf3c50fbbac9b1af5487f9dd1dcba8f33c5224e6bb5e859966c33cdce
R01_TEMP03_RECOVERY_AUDIT_BLOB: 8b05eaa2fdf6cba0c50031ed4c7aa2a5eb3190e6
ORIGINAL_R01_ZIP_FILENAME_PRIOR_HANDOFF: Temp_THPT_G10_CHVI_NOTEBOOKLM_REVIEW_BATCH_20261028.zip
R01_TEMP03_18_ITEM_IDS_VS_MAIN_CHVI_JSON: EXACT_ID_SET_MATCH_ONLY
R01_TEMP03_FULL_QUESTION_PARITY_VS_MAIN: UNPROVEN
R01_OTHER_TEMP_FILES_NOT_RAW_VERIFIED: 0
R01_ORIGINAL_5_TEMP_ZIP_RAW_SHA_VERIFIED: YES
R01_SOURCE_CUSTODY: PASS_EXACT_RAW_BYTES
R01_RECOVERY_AUDIT_BLOB: 48d1d46fdc777ed3eda3c94798fa501f6ef6dc35
CURRENT_MAIN_R04_NEW_ITEM_IDS_INTEGRATED: 0
PRIVATE_RD1_COUNT_NEW: 0
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO

> **Q18 R02 source-identity audit 05/11:** Kiểm trực tiếp R02 Git blob `1e6a76e...` (93.198 UTF-8 bytes, 0 CR, 812 LF) và R03 `77d42ce...`: **19/19 đề, đáp án, lập luận First Try giữ nguyên**, chỉ 12 đường trở lại D6 và canonical reuse `THPT-G10-B18-C01` có điều chỉnh; biên bản Git `c50494ce18fb8a2f224d11c0e54f49781099f38f`. Reviewer R02 ghi nguồn mounted 92.640 bytes/blob `116963cd...` không truy xuất được, và thống kê R01 48+6 trái với receipt 28+8+18. Không được thay chứng cứ bằng giả thiết normalize xuống dòng. **Q18 R02 còn HOLD; CONTENT_READY=NO**.

## Một nguồn học liệu theo phiên bản, không viết lại đề đã PASS

- **Lớp kiến thức SGK R01 đã nghiệm thu:** 4 bài B15–18; 54 item canonical = 28 Core/Practice/Application + 8 Written/Anchor +18 câu cuối chương. Receipt độc lập: `prototypes/thpt/THPT_G10_CHVI_NOTEBOOKLM_ACADEMIC_VERDICT_RECEIPT_20261028.md`, Git blob `23156f35aab6ec28771a6a57d48bad74f3900e9c`; gói Temp ZIP gốc SHA256 `704f23d50278f9d36270d4b065b3d8f72e08ffbd00f3ac3fbe41a66fb40b2960`. **Bản ZIP 5 Temp gốc đã được khôi phục nguyên byte ở Library và đối chiếu 5/5 SHA-256 khớp receipt ngày 28/10**; xem audit mới Git blob `48d1d46fdc777ed3eda3c94798fa501f6ef6dc35`. ZIP và nội dung RD1 giữ kín, **không** nhân bản lên GitHub. Cổng R01 source custody đã đóng; R02 external mounted reviewer source vẫn chưa khóa identity. Biên bản gốc từng ghi 18 câu cuối chương là heldout, nhưng các câu hiện đã công khai `CHVI.json` trên main, vì vậy chỉ còn client selfcheck không Mastery.
- **Lớp PED học độc lập R03:** `prototypes/thpt/content-drafts/Temp_G10_CHVI_PED_R03_EFFECTIVE_CANONICAL_SOURCE_20261105.md`, Git blob `77d42ce0ecf6fd4677ea0d831589db4bb18290d8`; 19 outcomes, 19 placement Tự thử trước Core nhưng chỉ 18 item mới, 1 item dùng chung `THPT-G10-B18-C01`, 19 HELP, 2 inline SVG B15/B18. R03 giữ nguyên toán/đề–đáp án–lời giải và 2 SVG từ nguồn reviewer R02 blob `1e6a76ee32b722b5e5457e85f90eb32f4d98b57d`, chỉ sửa **12 đường hồi phục D6** và nhất quán Q15 item ID. Review NotebookLM R02 được chủ dự án cung cấp có 19/19 nội dung khớp và báo Academic/PED PASS, riêng Q07/PED4 hai SVG PASS; hồ sơ external mounted R02 còn bất đồng nguyên bản chưa có chứng cứ author-owned đủ để đóng Q18. Không kéo reviewer vào đối chiếu hash.
- **R04 bổ sung đã đạt phản biện độc lập scoped:** `prototypes/thpt/content-drafts/Temp_G10_CHVI_R04_TWO_OUTCOME_PUBLIC_SELFCHECK_REVIEW_20261105.md`, Git blob `ef0b82555bb9f8028c49d948d2276b6ea0f16956`. Reviewer receipt `prototypes/thpt/review-packets/G10_CHVI_R04_SCOPED_NOTEBOOKLM_ACADEMIC_PED_PASS_RECEIPT_20261105.md`, blob `43b2da942b9d8d3ec5a32647e3ed1a217125a255`. **`THPT-G10-B16-R06`** (`B16_OUT_04`, 8đ tự đối chiếu) và **`THPT-G10-B17-R05`** (`B17_OUT_01`, 10đ tự đối chiếu), thêm 2 HELP D6, **Academic PASS 2/2 + PED PASS 2/2**, P0=P1=P2=0. Tất cả là nội dung C mới đã review; không phát hành tự động và không suy rộng sang R01/R03 snapshot khác.

**Bộ dữ liệu công khai hiện tại không thay đổi:** `docs/assets/data/thpt-g10-readiness/CHVI.json` blob `0760782256a2d8d91c398814e62d013cf6083eb7` vẫn gồm 18 câu, 18 `outcome_id` còn trống; chưa bổ sung R04 vào site.

## Bảng bằng chứng trung tâm của gói V2

| Hạng mục | Học liệu đã chuẩn bị | QA / giới hạn |
|---|---|---|
| S1 SGK/SBT | Toán 10 KNTT **Tập Hai**, SGK B15 p4–10, B16 11–18, B17 19–24, B18 25–27, cuối chương 28–29; SBT lần lượt 3–9, 10–15, 16–18, 19–21, cuối chương 22–27 | Theo visual index S1 lịch sử. SGK PDF SHA256 `ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6`; SBT `3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7` |
| LESSON_IDs | `G10-SGK-B15`, `G10-SGK-B16`, `G10-SGK-B17`, `G10-SGK-B18` | 4/4 |
| OUTCOME_IDs | `B15_OUT_01..05`, `B16_OUT_01..05`, `B17_OUT_01..05`, `B18_OUT_01..04` | 19/19 |
| 74 distinct proposed canonical ITEM_IDs | R01 54 + R03 18 + R04 2; đầy đủ từng mã/role/đường học tại `prototypes/thpt/shared-items/G10_CHVI_R04_CANONICAL_74_ITEM_OUTCOME_PREFLIGHT_20261105.md` blob `f4a6bf6f81ad0a2d8dcc5eb661790c1736aaea52` | **74/74 item ID có primary outcome từ câu thực tế trong public source/R03/R04**, gồm 8 Written/Anchor R01 tìm lại tại `docs/thpt-preview/thu-vien/tu-luan.md` blob `4da918f36d30c9b7110099e81fc88943e5b7705b`. Q15 author placement QA PASS; **Q18 reviewer snapshot custody chưa PASS** |
| First Try và khắc phục | 19 vị trí trước Core, 19 HELP D6 năm bước trong R03, 12 sửa đích luyện tập chính xác | 19 placement tương ứng 18 ID mới + `B18-C01` dùng chung một canonical; không tính placement là item mới |
| D5/PED4 SVG | B15 mapping một đầu vào–một đầu ra, B18 điều kiện căn→bình phương→thử nghiệm gốc; R01 B16/B17 đồ thị/bảng dấu giữ | NotebookLM scoped Q07/PED4 PASS về nội dung XML; RELEASE phải QA render |
| Chapter-end selfcheck | **18 câu đang công khai** + **2 R04 đã duyệt chưa tích hợp**, total **20 ứng viên** | `prototypes/thpt/audits/G10_CHVI_R04_PROPOSED_20_SELF_CHECK_19_OUTCOME_COVERAGE_20261105.md` Git blob `3fa89cc3a6f5a60a6e240502647b0d176d7aae61`: 19/19 outcome có nội dung ứng viên, **không phải website 20 câu hay protected RD1** |
| Two independent learning paths | Bản này chỉ tuyến `SGK_CHAPTER`, tự đủ kiến thức; không bắt buộc theo Topic link | Không suy `TOPIC_READINESS` hoặc Topic PASS |
| Assessed safety | Formative First Try tự mở; cuối chương chỉ mở đáp án, rubric, đúng/sai, HELP sau Final Submit; không AI Tutor trước submit | Content contract đã nêu, **chưa kiểm nghiệm hành vi runtime**; CLIENT_SELF_CHECK_NO_MASTERY, không ghi Skill Mastery |
| Snapshot/provenance | R01 original 5-Temp ZIP raw SHA 5/5 PASS (private), R02 reviewer report, R03 source Git blob, R04 Git blob + independent receipt | R01 private original ZIP 5/5 exact-byte custody PASS theo audit `48d1d46f...` (không chứa RD1 private trên GitHub); R02 mounted source discrepancy vẫn OPEN (author-owned). Không giả mạo Q18 PASS |
| RELEASE AP/R/P | Không làm trong nhánh AUTHORING | Chưa tích hợp, chưa QA website, chưa merge/deploy |

## A1–A7 (author gate theo đúng một chuẩn Q01–Q18)

| Cổng | Kết quả authoring | Lý do |
|---|---|---|
| A1 SOURCE/SNAPSHOT | **REVIEW_CONTENT_CONFIRMED; BYTE_METADATA_NOTE** | R01 5/5 raw hashes có receipt gốc; R02 reviewer mô tả đúng 19/19 câu/outcome và nội dung SVG từ source tác giả. Owner cho phép chấp nhận đối chiếu nội dung thay vì truy tìm byte-level không phục vụ toán học. Sai khác 558 byte vẫn chưa giải thích; không ghi tương đương byte. |
| A2 S1 SGK/SBT | EVIDENCE_READY | S1 đúng sách/tập/trang in từ receipt đã khóa |
| A3 Academic + PED reviewer | **SCOPED_REVIEW_ACCEPTED** | R01 Academic 54/54; R02 Academic/PED 19/19 và SVG Q07/PED4 PASS đối chiếu nội dung; R03 chỉ Delta B đường khắc phục/alias, tác giả đã QA; R04 Academic/PED 2/2 PASS. Không gán review cho nội dung chưa được xét. |
| A4 item/outcome/placement | **AUTHOR_QA_PASS** | 74 unique, đủ 74 PRIMARY outcome theo đề hiện có; 8 Written R01 đã kiểm trực tiếp đề, lời giải, rubric trên `tu-luan.md`; audit `G10_CHVI_R01_WRITTEN8_PUBLIC_SOURCE_OUTCOME_QA_20261105.md` blob `d5cd8e960d39df9bbfb17bd021bfb54fc99340c5`; không suy public page đồng nhất snapshot R01 |
| A5 D1–D6 / PED1–PED6 | EVIDENCE_PREPARED | Tự học từ bản chất, 19 First Try, 19 HELP, 2 SVG, 12 recovery fixes; R04 đã giải quyết hai độ sâu thiếu trong tự kiểm tra công khai ứng viên |
| A6 Delta | EVIDENCE_PREPARED | R03 `DELTA_B` routing+ID source equivalent, R04 `DELTA_C` scoped independent PASS, giữ nguyên R01 |
| A7 Public / private | EVIDENCE_PREPARED | 18 câu cuối chương cũ đã public, 2 R04 public proposed; tất cả NO_MASTERY, không công bố RD1 kín; không suy official Chapter Readiness từ selfcheck |

**PED1–PED6:** chuỗi `WHY→PRE→MEANING→READ_VISUAL→METHOD/LIMITS→FIRST_TRY→D6` hiện trong nguồn R03 theo từng outcome; verdict reviewer được bảo toàn đúng scope. Không dùng đủ số item thay độ sâu.

## Q18 — R01 5/5 nguồn gốc PASS; R02 source identity vẫn HOLD

**New evidence recorded 05/11/2026:** AUTHORING retrieved the original full five-Temp ZIP from user Library as a private raw file with display name `Temp_THPT_G10_CHVI_NOTEBOOKLM_REVIEW_BATCH_20261028(1).zip` (26,884 bytes). Raw ZIP SHA256 `704f23d50278f9d36270d4b065b3d8f72e08ffbd00f3ac3fbe41a66fb40b2960` exactly matches historical R01 receipt; all five `Temp_01..05` uncompressed member SHA256 hashes match receipt, and ZIP integrity passes. Canonical evidence audit: `prototypes/thpt/audits/G10_CHVI_R01_ORIGINAL_FIVE_TEMP_FULL_SHA_RECOVERY_20261105.md`, Git blob `48d1d46fdc777ed3eda3c94798fa501f6ef6dc35`. Historical partial-recovery audit is preserved as an earlier checkpoint, but its missing-four-file availability assertion is **superseded**.

**CLOSED:** R01 historical original-source identity and custody only; historical Academic PASS remains scoped to the 28/10 five-Temp source snapshot, not re-reviewed, no private stems/keys/rubrics on GitHub. **OPEN:** R02 reviewer-mounted 92,640 bytes vs canonical 93,198 bytes source identity/equivalence remains unresolved, so `Q18_WHOLE_CHAPTER=HOLD`, `CONTENT_READY=NO`, handoff unsigned, no READY manifest or REGISTER row. The publicly exposed 18 final questions remain `CLIENT_SELF_CHECK_NO_MASTERY`; approved R04 two new items are not integrated to website here.

## Cập nhật 05/11/2026 — giải quyết Q15 Written/Anchor 8/8, không review lại

- **Nguồn tìm được:** `docs/thpt-preview/thu-vien/tu-luan.md`, Git blob `4da918f36d30c9b7110099e81fc88943e5b7705b`, chứa đủ 8 thẻ `data-thpt-written-canonical` khớp receipt R01; mỗi thẻ có đề + lời giải + rubric. **Không phải file gốc Temp R01**, do đó không tự nhận thay thế receipt.
- **Audit mới:** `prototypes/thpt/audits/G10_CHVI_R01_WRITTEN8_PUBLIC_SOURCE_OUTCOME_QA_20261105.md`, blob `d5cd8e960d39df9bbfb17bd021bfb54fc99340c5`; định danh outcome dựa nội dung từng câu, không dựa tên WRI.
- **Ma trận canonical:** `prototypes/thpt/shared-items/G10_CHVI_R04_CANONICAL_74_ITEM_OUTCOME_PREFLIGHT_20261105.md`, cập nhật blob `f4a6bf6f81ad0a2d8dcc5eb661790c1736aaea52`: 74/74 unique item IDs mapped primary outcomes; 19 First Try placements vẫn một reuse canonical R01, 20 chapter selfcheck là dự kiến (18 public + 2 R04 accepted, chưa tích hợp).
- **Kết luận phân biệt:** Q15 **author mapping PASS**; Q18 **historic exact review source custody HOLD** cho 5 Temp R01 và chỉ riêng sự sai khác nguồn mounted R02 chưa xác nhận tương đương; các PASS lịch sử vẫn snapshot-bound. Không gọi NotebookLM kiểm Git/hash.

## Thống nhất vận hành sau quyết định chủ dự án — supersedes old R02 mechanical HOLD

- **Cổng học thuật:** R01 giữ PASS gốc, R02 reviewer mô tả đúng 19/19 câu/outcome/đáp án và hai hình đúng source, R03 Delta B đã sửa đường D6 và thống nhất item_id không đổi toán, R04 review độc lập 2/2. **Không thêm vòng review nào về dung lượng tệp.**
- **Ghi nhận trung thực:** khác biệt 558 byte/metadata của báo cáo R02 chưa được giải thích và **không tuyên bố byte parity**. Nội dung reviewers đã đánh giá là phù hợp với học liệu gửi xét theo đối chiếu tác giả. Nếu có lỗi toán hoặc khác biệt nội dung *cụ thể*, xử lý đúng item/outcome (Delta C) thay vì truy nguyên file chỉ vì metadata.
- **Còn phải làm trước CONTENT_READY:** thực hiện một V2 signed handoff chuẩn của dự án, ready manifest và REGISTER theo nguồn đã duyệt; không lập thêm tiêu chuẩn/cổng mới. Các mục lịch sử bên dưới ghi `R02 HOLD` là checkpoint cũ **đã bị quyết định này thay thế về cách xử lý**, không yêu cầu tái điều tra byte.
- **Không thay quyền RELEASE:** Final Submit, AP1–AP5, R1–R5 và quyền merge/deploy vẫn theo cổng riêng và chỉ sau bàn giao. Dữ liệu selfcheck công khai không được ghi Mastery.

## Quyết định AUTHORING hiện tại và các điều kiện kết thúc

1. **Có thể coi R04 riêng phần toán/sư phạm đã hoàn tất**: không thêm vòng NotebookLM cho 2 câu đúng nguồn và không sửa câu trả lời/rubric khi không có academic defect.
2. **ĐÃ ĐÓNG CHỨNG CỨ ÁNH XẠ AUTHORING cho 8 Written/Anchor R01**: mỗi câu có stem + solution + rubric công khai trong `docs/thpt-preview/thu-vien/tu-luan.md` blob `4da918f...`, 8/8 ID khớp R01. PRIMARY_OUTCOME_ID được gắn từ yêu cầu đề, cùng SECONDARY outcomes khi hợp lý; **Q15 mapping 74/74 PASS theo nguồn công khai**, không cần viết lại hay NotebookLM review lại. Điều này chưa giải quyết Q18 source identity của 5 Temp R01.
3. **R01 source/receipt lịch sử đã đối chiếu 5/5 SHA và đóng custody**; AUTHORING còn cần chứng minh nguồn mounted R02 thật sự tương đương nguồn R02/R03 đã review, không yêu cầu NotebookLM chạy Python/Git/hash hoặc review lại nội dung bất biến. Không tự tuyên bố R01 ZIP được phục hồi khi chưa có dữ liệu.
4. Chỉ sau A1–A7, Academic + PED + Q01–Q18 cùng PASS, mới tạo **một** signed V2 handoff, **một** ready manifest cho `G10-SGK-CHVI` và một REGISTER row đồng bộ; lúc này mới cho RELEASE tiếp nhận bản immutable. Hiện **không tạo** hai hiện vật đó.
5. Tất cả việc đưa R04 vào JSON/site, bảo đảm Final Submit, Golden UI, responsive, AP1–AP5, R1–R5, Firebase/Skill Mastery, merge/deploy thuộc RELEASE và cần đúng quyền của chủ dự án.

**CHECKPOINT:** `BLOCKED_BY_AUTHORING(Q18_R02_EXTERNAL_REVIEW_SOURCE_IDENTITY)` — `CONTENT_READY=NO`. Dừng đúng tại hồ sơ AUTHORING; không phát hành.
