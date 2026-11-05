# Toán 10 ChVI — Author-owned Q18 partial recovery of historical R01 source (metadata only)

AUDIT_ID: G10-CHVI-R01-SOURCE-CUSTODY-PARTIAL-RECOVERY-20261105
ROLE: AUTHORING_ONLY
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.2.0
STATUS: Q18_PARTIAL_SOURCE_RECOVERY_ONE_OF_FIVE_VERIFIED
PRIVATE_RAW_SOURCE_LOCATION: USER_LIBRARY_NOT_COMMITTED_TO_PUBLIC_GITHUB
PRIVATE_SOURCE_FILENAME: Temp_03_THPT_G10_CHVI_CHAPTER_READINESS_HELDOUT_20261028_R0.md
PRIVATE_SOURCE_SIZE_UTF8_BYTES: 11158
PRIVATE_SOURCE_SHA256_COMPUTED_FROM_RAW_BYTES: 3ee7d0cdf3c50fbbac9b1af5487f9dd1dcba8f33c5224e6bb5e859966c33cdce
R01_RECEIPT_EXPECTED_TEMP_03_SHA256: 3ee7d0cdf3c50fbbac9b1af5487f9dd1dcba8f33c5224e6bb5e859966c33cdce
R01_RECEIPT_PATH: prototypes/thpt/THPT_G10_CHVI_NOTEBOOKLM_ACADEMIC_VERDICT_RECEIPT_20261028.md
R01_RECEIPT_GIT_BLOB: 23156f35aab6ec28771a6a57d48bad74f3900e9c
R01_REVIEWED_TEMP_PARTS_EXPECTED: 5
R01_REVIEWED_TEMP_PARTS_RAW_VERIFIED_IN_THIS_TURN: 1
R01_REVIEWED_TEMP_PARTS_RAW_UNAVAILABLE_IN_THIS_TURN: 4
HISTORICAL_R01_ZIP_SHA256_EXPECTED: 704f23d50278f9d36270d4b065b3d8f72e08ffbd00f3ac3fbe41a66fb40b2960
HISTORICAL_R01_ZIP_BYTES_RECOVERED: NO
R02_EXTERNAL_MOUNT_PARITY_RESOLVED: NO
ORIGINAL_R01_ZIP_FILENAME_FROM_PREVIOUS_AUTHORING_HANDOFF: Temp_THPT_G10_CHVI_NOTEBOOKLM_REVIEW_BATCH_20261028.zip
ORIGINAL_R01_ZIP_CURRENT_WORKSPACE_MOUNTED: NO
R01_TEMP_01_EXPECTED_SHA256: 352ffa3decb62ca9e2d1b524837b88e8c3faec33bb799e4362b6f19c3e42e87b
R01_TEMP_02_EXPECTED_SHA256: 31adaab53cc7f5cfd58f94ac8fe1a0b896570dfc6d45addb6751b39df9986b89
R01_TEMP_04_EXPECTED_SHA256: 3ef22deef5c9d535c707b509a8b60677c92b785a56fe7de768a410dd772d5a16
R01_TEMP_05_EXPECTED_SHA256: 2fade7a218bddb538f8e58a1ecae09efc55bdc893bb00a50e29b6b7078a07223
R01_TEMP03_ITEM_ID_COUNT: 18
R01_TEMP03_ITEM_ID_SET_VS_MAIN_CHVI_JSON: EXACT_MATCH_18_OF_18
R01_TEMP03_STEMS_ANSWERS_VS_MAIN_CHVI_JSON_EXACT_MATCH: NOT_ASSERTED
R01_TEMP03_PUBLIC_RELEASE_CLASSIFICATION: CLIENT_SELF_CHECK_NO_MASTERY
SOURCE_CUSTODY_Q18_WHOLE_CHAPTER: HOLD
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO

## Thực tế đã quan sát — không suy đoán

1. Từ **thư viện tệp người dùng trong Project**, AUTHORING tìm được file lịch sử `Temp_03_THPT_G10_CHVI_CHAPTER_READINESS_HELDOUT_20261028_R0.md`, định dạng Markdown, kích thước gốc 11.158 byte. File là **bản lưu riêng**, không nằm trong GitHub public repository.
2. Công cụ truy xuất file của dự án đã cung cấp **nguyên byte được phép đọc** của đúng file; AUTHORING tính SHA-256 trực tiếp bằng hệ thống nội bộ, nhận `3ee7d0cdf3c50fbbac9b1af5487f9dd1dcba8f33c5224e6bb5e859966c33cdce`, **khớp chính xác** `TEMP_03_SHA256` do receipt R01 lịch sử ghi từ ngày 28/10/2026.
3. **Chỉ đúng 1/5 phần R01 đã được kiểm nguyên byte**. Bốn file `Temp_01/02/04/05` cùng ZIP 5 file lịch sử chưa được truy xuất nguyên bản trong lượt này; không được suy ra đủ nguồn R01. Bản R02 reviewer mounted external 92.640 byte vs R02 canonical 93.198 byte cũng chưa có diff author-side xác minh identity; không tự khép Q18 toàn chương.
4. Bản `Temp_03` từng được quản lý như **heldout**, nên tuyệt đối **không chép đề, đáp án, rubric** từ bản lịch sử này vào GitHub; tệp này **chỉ phục vụ kiểm chứng custody**. Mặc dù 18 câu ChVI khác đã bị công khai trên `CHVI.json`, việc đó không cấp quyền chuyển nguyên archive riêng tư sang GitHub hoặc cấp Mastery. Metadata ở đây gồm đúng tên, kích thước và digest, không có dữ liệu kiểm tra riêng tư.
5. Đây là AUTHORING tự kiểm chứng chứng cứ nguồn, **không yêu cầu NotebookLM chạy Git, byte, hash hoặc mở vòng review học thuật**. Các phán quyết Academic/PED cũ vẫn có scope nguyên thủy, chưa được gán sang snapshot mới bằng một xác nhận không có thật.

## Bổ sung truy xuất nguồn cũ: đúng tên ZIP, không tạo bản thay thế

Từ lịch sử handoff AUTHORING ngày 28/10/2026, tên ZIP gốc từng gửi là `Temp_THPT_G10_CHVI_NOTEBOOKLM_REVIEW_BATCH_20261028.zip` (SHA256 mong đợi trong R01 receipt: `704f23d50278f9d36270d4b065b3d8f72e08ffbd00f3ac3fbe41a66fb40b2960`). Đây **chỉ là tên file được ghi trong lịch sử**, không phải link hiện có hay bản ZIP đã mở lại. Đã tìm trong File Library/Project và GitHub main/nhánh AUTHORING; chưa có backing file cho ZIP cùng bốn thành phần R01 khác, nên **không** cấp Q18 PASS. Khi nguồn chính xác xuất hiện, AUTHORING chỉ cần đối chiếu receipt *một lần*, không đưa NotebookLM làm công việc quản lý nguồn và không re-review R01 đã PASS chỉ vì metadata.

**Q15/Q16 item set check:** trên bản `Temp_03` thực sự kiểm được có **18 canonical IDs** (B15: 5, B16: 5, B17: 4, B18: 4). Tập **18 ID** này giống hoàn toàn danh sách trong `docs/assets/data/thpt-g10-readiness/CHVI.json` trên `main` (Git blob `0760782256a2d8d91c398814e62d013cf6083eb7`), không dư hay thiếu. Nhưng kiểm ID **không chứng minh toàn bộ stem/đáp án là cùng bản**; đây là kiểm kê canonical cho Q15, **không** dùng thay Q18. JSON công khai hiện có 18 trường `outcome_id` rỗng, `mastery_credit=false`, `persist_results=false`; 18 câu không còn tính kín độc lập, chỉ `CLIENT_SELF_CHECK_NO_MASTERY`.

**Điều kiện đóng rõ ràng:** R01 cần file ZIP gốc hoặc đầy đủ năm `Temp_01..05` nguyên bản khớp receipt; R02 cần chứng cứ SOURCE/REVIEW đúng nội dung cho snapshot đã phản biện do AUTHORING quản lý, không bắt NotebookLM truy Git/byte. Nếu không có nguồn, giữ `BLOCKED_BY_AUTHORING(Q18)` và bảo toàn PASS học thuật theo đúng snapshot, không tự tạo một chuẩn khác hoặc bypass gate.

## Related Q15 improvement (separate from Q18 custody)

Tám Written/Anchor R01 trước kia không tìm được nội dung để gắn outcome đã được **đối chiếu trực tiếp từ nguồn công khai** `docs/thpt-preview/thu-vien/tu-luan.md` [Git blob `4da918f36d30c9b7110099e81fc88943e5b7705b`], mỗi bài có stem, lời giải và rubric. Biên bản `G10_CHVI_R01_WRITTEN8_PUBLIC_SOURCE_OUTCOME_QA_20261105.md` Git blob `d5cd8e960d39df9bbfb17bd021bfb54fc99340c5` giải quyết mapping Q15 mà không tạo câu mới. **Nguồn công khai ấy không thay cho Temp gốc R01**, vì vậy không dùng nó để khẳng định Q18 PASS.

## Conclusion

`Q15_AUTHOR_CANONICAL_ITEM_OUTCOME_QA=PASS_74_OF_74`, `Q18_PRIVATE_R01_TEMP03_RAW_SHA_VERIFIED=YES`, `Q18_WHOLE_CHAPTER=HOLD`. Chưa `CONTENT_READY`, không `ready/` manifest hay REGISTER update, không sửa website/RELEASE/Mastery.
