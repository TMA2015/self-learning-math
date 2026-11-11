<!-- TEMPLATE ONLY, not a Ready packet -->
> **Q18 v3.0 11/11/2026:** Self-QA may sign a complete NEW/revised Topic after actual S1/math/PED/item/figure/rubric checks. Independent reviewer PASS remains valid for legacy source-scoped packets. Reused public items in Topic self-check are `CLIENT_SELF_CHECK_NO_MASTERY`; official held-out Readiness/private RD1 cannot reuse exposed questions.

# Mẫu manifest — sao chép vào inventory/ rồi đổi PACKET_ID

PACKET_ID: G10-SGK-NEW
LEARNING_PATH: SGK_CHAPTER
RELEASE_SCOPE: PUBLIC_FORMATIVE_ONLY
# NEW TOPIC V2 only: LEARNING_PATH: TOPIC / RELEASE_SCOPE: FULL_TOPIC_LEARNING_PATH.
# Topic has exactly 3 learner pages (Kiến thức / Luyện tập / Tự kiểm tra), no standalone Core.
# Private Topic RD1 stays owner-held; READY never authorizes publication.
STATE: INVENTORY
SOURCE_COMMIT: 0000000000000000000000000000000000000000
REVIEW_RECEIPT: CHUA_CO
CURRENT_PR: CHUA_CO
# BẮT BUỘC với gói READY tạo mới từ 02/11/2026; chưa áp dụng ngược packet lịch sử
HANDOFF_PROTOCOL: THPT-TWO-LANE-V2
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.0.0 # only after governance merge
QUALITY_EVIDENCE_SECTION: QUALITY_Q01_Q18_EVIDENCE
AUTHOR_HANDOFF: prototypes/thpt/release-handoffs/REPLACE_PACKET_HANDOFF.md
ACADEMIC_SOURCE_PATH: prototypes/thpt/content-drafts/REPLACE_SOURCE.md
ACADEMIC_SOURCE_BLOB: REPLACE_WITH_REAL_GIT_BLOB_SHA
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED # or INDEPENDENT_REVIEW
REVIEW_RECEIPT_PATH: prototypes/thpt/review-packets/REPLACE_Q18_SOURCE_RECEIPT.md
REVIEW_RECEIPT_BLOB: REPLACE_WITH_REAL_GIT_BLOB_SHA
ACADEMIC_VERDICT: SELF_VERIFIED_ON_LOCKED_SNAPSHOT # independent uses PASS_ON_LOCKED_SNAPSHOT
PEDAGOGICAL_VERDICT: SELF_VERIFIED_ON_LOCKED_SNAPSHOT # same mode pairing
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
# NEW TOPIC V2 manifests additionally require PRIVATE_RD1_COUNT: <verified count>,
# OFFICIAL_READINESS: NOT_CLAIMED, MASTERY_ACTIVATION: NO, RELEASE_AUTHORIZATION: NO.
# Do not publish private RD1 stems, keys, solutions or rubrics. Public self-check is not Topic Readiness.
BLOCKERS: OPEN_UNTIL_SOURCE_VERIFIED

## A — biên soạn/review
- [ ] A1_SOURCE_SNAPSHOT — chứng cứ snapshot/SGK/NotebookLM/ID/delta tương ứng
- [ ] A2_SGK_SBT_SCOPE — chứng cứ snapshot/SGK/NotebookLM/ID/delta tương ứng
- [ ] A3_Q18_VERIFICATION_RECEIPT — chứng cứ snapshot/SGK/NotebookLM/ID/delta tương ứng
- [ ] A4_ITEM_OUTCOME_IDS — chứng cứ snapshot/SGK/NotebookLM/ID/delta tương ứng
- [ ] A5_D1_D6_SCOPE — chứng cứ snapshot/SGK/NotebookLM/ID/delta tương ứng
- [ ] A6_DELTA_RESOLVED — chứng cứ snapshot/SGK/NotebookLM/ID/delta tương ứng
- [ ] A7_PUBLIC_PRIVATE_BOUNDARY — chứng cứ snapshot/SGK/NotebookLM/ID/delta tương ứng

## PED — Self-learning pedagogy evidence (authoring before CONTENT_READY)
- [ ] PED1_MOTIVATION — Đưa ra vấn đề, động cơ xuất hiện khái niệm
- [ ] PED2_PREREQUISITES — Dẫn nhập thuật ngữ/điều kiện nền, không dùng từ mới chưa giải thích
- [ ] PED3_MEANING_FIRST — Bản chất trước thuật toán/kí hiệu/công thức
- [ ] PED4_EXPLAINED_VISUAL — SVG/bảng/đồ thị có hướng dẫn đọc và lý do sử dụng
- [ ] PED5_REASONED_EXAMPLES — Ví dụ giải thích lựa chọn cách làm, ràng buộc và lỗi thường gặp
- [ ] PED6_FIRST_TRY_REMEDIATION — Tự thử có đích, D6 khắc phục theo tiền đề
**Lưu ý:** theo v3, PED được tác giả tự kiểm chứng thực chất hoặc reviewer độc lập (tùy Q18 mode). Checklist tick hoặc CI xanh không tự chứng minh chất lượng. Bản SOURCE_BLOB + self-QA receipt Git blob vẫn bắt buộc. Bằng chứng PED lưu cùng source; các manifest lịch sử giữ scope cũ.

## R — phát hành
- [ ] R1_INTEGRATED_CURRENT_MAIN — chứng cứ QA exact commit, UI, assessment và quyền owner
- [ ] R2_EXACT_HEAD_CI — chứng cứ QA exact commit, UI, assessment và quyền owner
- [ ] R3_CLEAN_STUDENT_UI — chứng cứ QA exact commit, UI, assessment và quyền owner
- [ ] R4_ASSESSMENT_SAFETY — chứng cứ QA exact commit, UI, assessment và quyền owner
- [ ] R5_OWNER_APPROVAL — chứng cứ QA exact commit, UI, assessment và quyền owner

## AP — Academic Presentation QA (bắt buộc cho gói tạo mới sau 31/10/2026)

- [ ] AP1_IDEA_HIERARCHY — Một khối = một vấn đề toán học; chuyển ý tách rõ, không nén nhiều định nghĩa/công thức vào cùng đoạn.
- [ ] AP2_FORMULA_VISIBILITY — Công thức/điều kiện/định lý nổi bật, MathJax và ký hiệu rõ, công thức dài không tràn; chứng cứ từ trang tích hợp.
- [ ] AP3_FIGURE_READABILITY — SVG, đồ thị, bảng có nhãn và giải thích; đúng vị trí liên quan, đủ lớn để tự học.
- [ ] AP4_SELF_STUDY_CLARITY — Học sinh phân biệt được nội dung chính, điều kiện, ví dụ, lỗi cần tránh; không hiển thị mã kiểm toán D1.x thay tiêu đề.
- [ ] AP5_RESPONSIVE_VISUAL — QA ảnh/viewport desktop–iPhone–iPad trên đúng HEAD; không mất nhãn, cuộn ngang hoặc đè chữ.

**Cổng bổ sung AP1–AP5** được release lane kiểm chứng bằng nguồn Markdown, QA HTML/MathJax, ảnh chụp hoặc trình duyệt tương ứng. Không thay D1–D6, A1–A7, R1–R5 hay P1/P2. Không tự cấp AP PASS dựa vào NotebookLM Academic PASS hoặc số câu hỏi. Với packet lịch sử chưa có AP mục này, áp dụng bổ sung khi thực hiện audit/batch, không tự đổi trạng thái phát hành.

## P — hậu phát hành
- [ ] P1_DEPLOY_RECEIPT — chứng cứ deploy và UAT
- [ ] P2_DEVICE_UAT — chứng cứ deploy và UAT