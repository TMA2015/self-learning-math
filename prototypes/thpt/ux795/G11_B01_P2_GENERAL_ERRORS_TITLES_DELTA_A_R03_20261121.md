# G11 B01 · R03 · RELEASE QA — tiêu đề Lỗi thường gặp

**RECEIPT_ID:** G11-B01-GENERAL-ERROR-TITLES-R03-20261121
**STANDARD_ID:** SLM-THPT-QUALITY-ONE
**STANDARD_VERSION:** 3.2.0 (Q01–Q18, Golden R4)
**LESSON_ID:** G11-B01 (global SGK 28/79)
**CANONICAL_LEARNER_PATH:** `docs/thpt-preview/sgk/lop-11/chuong-i/bai-1.md`
**PREVIOUS_SOURCE_BLOB:** `e5b140bffd46d829f94d793c45bd987c64838723`
**CANDIDATE_SOURCE_BLOB:** `0603fbb2b61374fcd49eff3c119197cff3fa77e4`
**BASE_COMMIT:** `92db7e461301c01bd848535ff39e149fa805cce7`
**DELTA_CLASS:** DELTA_A_UI
**VERIFICATION:** Q18_RELEASE_UI_SOURCE_VERIFIED
**OWNER_P2:** OWNER_P2_RECHECK_PENDING
**MERGE_DEPLOY:** NOT_AUTHORIZED_BY_THIS_RECEIPT

## Phạm vi thực tế
- Tab 4 Golden giữ nguyên nhãn `Lỗi thường gặp`.
- Đổi **đúng hai** nhãn accordion tổng quát, từ `Kiểm lỗi` thành:
  1. `4.1. Nhầm số vòng quay, tia cuối và độ dài cung`.
  2. `4.2. Bỏ qua điều kiện xác định và dấu lượng giác`.
- Giữ **sáu** accordion `Kiểm lỗi` cạnh sáu Vận dụng/Đối chiếu ở tab Khám phá kiến thức.
- Toàn bộ stem, answer, solution, toán/MathJax, HELP/TRY IDs, SVG, Core/Readiness/Final Submit/RD1, vị trí các tab và câu chữ ngoài hai nhãn giữ nguyên byte-for-byte.
- Giữ nguyên guard phát hành đã có `scripts/test-thpt-scoped-deploy-proof.cjs` (không thay runtime/test chung); receipt khóa old/new blob để QA nguồn hiện hữu đối chiếu Q15/Q16 và công thức.

## QA cần hoàn tất trước phát hành
- G3 exact-final-HEAD relevant workflows; browser 390/820/1440px; mở/đóng hai accordion tab 4; xác nhận 6 Kiểm lỗi chỉ cạnh Vận dụng.
- Sau owner cho phép merge/deploy, P1 so HTML `gh-pages` với source, owner P2 trên thiết bị thật.
- Cần ghi kết quả exact-final-HEAD CI/browser/P1/P2 sau khi chạy, không mặc định PASS.

## Kiểm toán Toán 10 (ngoài phạm vi chỉnh sửa PR)
- G10 B01–B06, B09 và B19–B27 có mục lỗi được đặt tên trong tab 4.
- G10 B07–B08, B10–B17 có tab 4 thiếu nội dung lỗi (chỉ học tiếp/nguồn); B18 có mô tả chung nhưng thiếu các khung khắc phục đã được dẫn.
- Đây là phát hiện audit source, **không** cho phép tự ý nhân bản Kiểm lỗi từ Vận dụng lên tab 4. Cần xử lý theo từng bài/outcome/Q08 và DELTA_C nếu viết thêm học liệu; giữ snapshot P2 cũ bất biến.
