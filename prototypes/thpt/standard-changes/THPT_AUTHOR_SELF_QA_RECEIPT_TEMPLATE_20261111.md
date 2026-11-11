# THPT — AUTHOR_SELF_QA_RECEIPT · MẪU / KHÔNG PHẢI PASS

**STATUS:** TEMPLATE_ONLY_NOT_CONTENT_READY  
**Căn cứ:** quyết định owner 11/11/2026, `SLM-THPT-QUALITY-ONE v3.0.0` §X-D **chỉ sau merge governance vào main**. Mẫu này chỉ dành cho đánh giá tự chịu trách nhiệm của tác giả, **không phải** chứng chỉ NotebookLM hoặc quyền phát hành. Giữ đúng một nguồn canonical và một receipt cho **một phần trọn vẹn hoặc một Chuyên đề**, không một receipt sau từng đoạn chỉnh.

AUTHOR_SELF_QA_RECEIPT: TEMPLATE_ONLY
PACKET_ID: REPLACE_PACKET
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 3.0.0
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
SOURCE_PATH: prototypes/thpt/content-drafts/REPLACE_COMPLETE_SOURCE.md
SOURCE_BLOB: REPLACE_WITH_40_HEX
BASELINE_SOURCE_BLOB: REPLACE_WITH_40_HEX_OR_NOT_APPLICABLE
RELEASE_SCOPE: FULL_TOPIC_LEARNING_PATH
LEARNING_PATH: TOPIC
S1_RECEIPT: REPLACE_REAL_SGK_BOOK_EDITION_PRINTED_PAGES_AND_VERIFIED_CONCEPTS
OUTCOME_AUDIT: REPLACE_ID_BY_ID_OUTCOMES_Q01_Q18_AND_PROBLEM_FAMILY_COVERAGE
MATH_VERIFICATION: REPLACE_WITH_INDEPENDENT_WORKED_DERIVATIONS_CONDITIONS_COUNTEREXAMPLES_AND_CHECKS
PED_VERIFICATION: REPLACE_WITH_FIRST_LEARNER_WHY_MEANING_EXAMPLES_TRY_REMIND_D6_WRITTEN_TRANSFER
CANONICAL_Q15: REPLACE_WITH_SOURCE_BANK_UNIQUE_ITEM_ID_ROLE_PLACEMENT_ANSWER_RUBRIC_NO_DUPLICATION
ASSESSMENT_Q16: REPLACE_WITH_PUBLIC_SELF_CHECK_VS_PRIVATE_HELD_OUT_RD1_AND_FINAL_SUBMIT_NO_LEAK
FIGURE_MODEL_QA: REPLACE_WITH_FORMULA_LABELS_DOMAINS_EDGE_CASES_INTERACTION_OFFLINE_FALLBACK
P0: UNVERIFIED
P1: UNVERIFIED
AUTHOR_SIGNOFF: NOT_SIGNED

## KẾT QUẢ TỪNG OUTCOME — bắt buộc có chứng cứ, không đánh PASS hàng loạt

| LESSON_ID | OUTCOME_ID | SGK S1 (trang in đã xem) | Bản chất/điều kiện, công thức độc lập | D2: ví dụ + vì sao chọn phương pháp | D3/D4: họ dạng, câu luyện/Written rubric | D5: hình/lab + thử biên | PED/D6: Tự thử/khắc phục và chuyển giao | Item IDs / duplicate / exposure | Kết quả |
|---|---|---|---|---|---|---|---|---|---|
| REPLACE | REPLACE | REPLACE | REPLACE | REPLACE | REPLACE | REPLACE | REPLACE | REPLACE | HOLD |

## Cổng tự kiểm nghiệm thu

- **Toán, S1, điều kiện:** tính lại các ví dụ, kiểm ít nhất một trường hợp biên/phản ví dụ quan trọng, giải thích vì sao phương pháp dùng được; không lấy UI, metadata hoặc kết quả Notebook tạo ra thay kiểm toán.
- **Sư phạm:** người học chưa biết có thể lần theo khám phá → hình thành ý nghĩa → kiến thức → ví dụ/luyện tập → lỗi thường gặp/khắc phục, không cần các nhãn PED hiện trên trang.
- **Họ dạng và tự luận:** có nhận biết, thông hiểu, vận dụng, bài viết có rubric và đối chiếu. Dùng lại canonical SGK/Written nếu đủ; thêm khi thiếu năng lực, không vì quota.
- **Mô hình tương tác:** tự xác minh mọi công thức, nhãn, điểm biên, phép kéo/slider/touch/keyboard và fallback; đặt sát kiến thức, không trong RD1 kín.
- **Tự kiểm tra công khai:** được dùng lại item đã luyện khi ghi rõ `CLIENT_SELF_CHECK_NO_MASTERY`; không xem đây là `TOPIC_READINESS` độc lập. Không lộ hint/key/đúng–sai/điểm trước Final Submit; không ghi Mastery từ tự đối chiếu.
- **RD1 chính thức:** private held-out do chủ dự án giữ, source/hash/count metadata công khai, kiểm không tái dùng câu đã lộ; không đưa stem/key/rubric/lời giải private lên Git.
- **P0/P1 và nghi ngờ:** chưa giải được nghi ngờ toán/nguồn/method/rubric → `TARGETED_INDEPENDENT_REVIEW_REQUIRED` hoặc `DELTA_D_BLOCKER` đúng affected scope; không ký receipt giả.
- **Signoff:** chỉ đặt `P0: 0`, `P1: 0`, `AUTHOR_SIGNOFF: <người kiểm, ngày, SHA>` sau khi các kiểm toán có chứng cứ thật; metadata/schema PASS không tự cấp Academic/PED PASS.

## Phạm vi bàn giao

Sau signoff: một canonical source snapshot, một review/self-QA receipt Git blob SHA, một handoff V2 có `Q18_VERIFICATION_MODE`, một `ready/PACKET_ID.md` và một REGISTER row. RELEASE kiểm AP1–AP5/R1–R5/Final Submit/Golden, exact HEAD, chủ dự án cho phép, P1/P2; không tính một handoff là sản phẩm live.
