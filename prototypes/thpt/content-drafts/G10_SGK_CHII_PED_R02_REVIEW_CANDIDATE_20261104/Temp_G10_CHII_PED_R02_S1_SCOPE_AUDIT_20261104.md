# S1 và bản đối chiếu phạm vi — G10 ChII PED R02

PACKET_ID: G10-SGK-CHII-PED-BRIDGE-R02-20261104
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.1.0
SGK_CORE_SOURCE: KNTT Toán 10 Tập Một
SBT_REFERENCE: KNTT Sách bài tập Toán 10 Tập Một
BASE_R01_SOURCE_GIT_BLOB: acea9776d1c7534a4cd0cd28e98db26dedf0c122
BASE_R01_REVIEW_RECEIPT_GIT_BLOB: 47eab8185d431045ab202d58fe4f2fbc3e99628b
REVIEW_STATUS: NOTEBOOKLM_PENDING

- B03 Bất phương trình bậc nhất hai ẩn: SGK trang **in 22–25**; SBT trang **in 16–18**.
- B04 Hệ bất phương trình bậc nhất hai ẩn: SGK trang **in 26–30**; SBT trang **in 19–23**.
- Bài tập cuối chương: SGK trang **in 31–32**; SBT trang **in 24–28**.
- S1 toàn PDF Tập Một SHA256 SGK `3cbb335780dc0f2f4a034a55eb542e3bbe67693412b10a90ca1dffe9ea50eac2`, SBT `2b1b98665b2c5cccb99f6699a43cbf71b8b2dfc63bdaec759a7b1c51778e2fa1` (đã được AUTHORING lưu từ lượt kiểm S1 trước). **Không tự đoán chỉ số trang PDF của B03/B04 ở gói này**; reviewer cần đối chiếu ảnh SGK/SBT đang có trực tiếp.
- R01 nguồn đã từng được NotebookLM phản biện Academic D1–D6 PASS theo snapshot bất biến, không mở lại vì chỉ thêm lớp sư phạm trước Core. Lý thuyết/năng lực từ R01: 10 outcomes, 6 ví dụ, 16 Core/Practice, 2 Written, 2 SVG, 4 D6.
- Bản RD0 đánh dấu `CORE_KEEP` cho 8 outcome, `SUPPORT_ONLY` tạm thời cho `G10-B03-MODELING` và `G10-B04-INTEGER_MODELS`, nhưng biên bản batch NotebookLM 31/10 lại trình bày cả 10 ở mức FULL/CORE. Đây là khác biệt **tier/scope** cần reviewer kiểm trực tiếp SGK S1 và kết luận hai ID; không tự hạ nội dung SGK thành phần chọn thêm, không tự mở Core ngoài sách. Nếu chưa phân xử được, ghi `S1_TIER_RECONCILIATION_HOLD` đúng hai outcome (không quy lỗi toàn bộ 8 outcome khác).
- 14 câu cuối ChII đã được NotebookLM đánh giá Academic PASS trên gói riêng ngày 31/10, được phát hành client-public không Mastery; AUTHORING đã đối chiếu 14 × 4 trường canonical trong kho lưu trữ nội bộ với JSON công khai, 56/56 khớp. Gói Delta C này không yêu cầu phản biện lại 14 câu cũ.
- R02 chỉ thêm WHY/PRE/MEANING/METHOD/FIRST_TRY theo 10 outcome, dùng hình nguồn FIG-G10-B03-01/FIG-G10-B04-01 và HELP nguồn cũ; không sửa đề/lời giải/rubric/công thức R01.

BLOCKERS: NOTEBOOKLM_INDEPENDENT_ACADEMIC_PED_REVIEW_FOR_NEW_R02; FULL_CHAPTER_V2_NOT_YET_HANDOFF
CONTENT_READY: NO
RELEASE_AUTHORIZATION: NO
MASTERY_ACTIVATION: NO
