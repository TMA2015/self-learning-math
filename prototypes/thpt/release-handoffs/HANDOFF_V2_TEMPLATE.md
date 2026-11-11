# THPT — ONE HANDOFF V2 TEMPLATE · Q01–Q18 v3.0

> **TEMPLATE_ONLY / NOT_CONTENT_READY.** Dùng cho một đơn vị học liệu hoàn chỉnh sau self-QA hoặc reviewer độc lập đúng mode Q18. Tránh nhiều handoff/checkpoint cho mỗi đoạn; đừng chọn mẫu này làm nguồn NotebookLM hoặc đặt trong `ready/`. SOURCE và receipt phải tồn tại thật, có Git blob SHA chính xác.

PACKET_ID: REPLACE_PACKET_ID
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: REPLACE_EFFECTIVE_VERSION_ON_MAIN
LEARNING_PATH: TOPIC
RELEASE_SCOPE: FULL_TOPIC_LEARNING_PATH
Q18_VERIFICATION_MODE: AUTHOR_SELF_VERIFIED
ACADEMIC_SOURCE_PATH: prototypes/thpt/content-drafts/REPLACE_SOURCE.md
ACADEMIC_SOURCE_BLOB: REPLACE_40_HEX
REVIEW_RECEIPT_PATH: prototypes/thpt/review-packets/REPLACE_Q18_RECEIPT.md
REVIEW_RECEIPT_BLOB: REPLACE_40_HEX
ACADEMIC_VERDICT: SELF_VERIFIED
PEDAGOGICAL_VERDICT: SELF_VERIFIED
BLOCKERS: REPLACE_WITH_NONE_ONLY_WHEN_VERIFIED
ASSESSMENT_MODE: CLIENT_SELF_CHECK_NO_MASTERY
OFFICIAL_READINESS: NOT_CLAIMED
MASTERY_ACTIVATION: NO
RELEASE_AUTHORIZATION: NO
PRIVATE_RD1_COUNT: REPLACE_REAL_PRIVATE_COUNT
PRIVATE_RD1_SHA256: REPLACE_REAL_PRIVATE_SHA256_OR_NON_APPLICABLE
AUTHOR_A1_A7_PATH: prototypes/thpt/content-drafts/REPLACE_A1_A7.md
AUTHOR_A1_A7_BLOB: REPLACE_40_HEX

**Mode pairing:** nếu `Q18_VERIFICATION_MODE: INDEPENDENT_REVIEW`, ghi `ACADEMIC_VERDICT: PASS` + `PEDAGOGICAL_VERDICT: PASS` đúng reviewer receipt. Nếu `AUTHOR_SELF_VERIFIED` thì giữ `SELF_VERIFIED`, không mạo danh Academic/PED reviewer PASS. Manifest `ready/` dùng `SELF_VERIFIED_ON_LOCKED_SNAPSHOT` cho mode tác giả hoặc `PASS_ON_LOCKED_SNAPSHOT` cho mode reviewer. Chế độ tự nghiệm thu mới chỉ hợp lệ từ Q18 v3.0 sau merge main.

## LESSON_IDS
- REPLACE_ID

## OUTCOME_IDS
- REPLACE_ID

## PUBLIC_ITEM_IDS
- REPLACE_CANONICAL_ID

## S1_SGK_SBT_SOURCE
Điền sách SGK KNTT / lớp / tập / ấn bản / trang **in** đúng nguồn; phân biệt trang PDF index, điều kiện và phương pháp toán. SBT/đề thi chỉ là nguồn tham khảo họ dạng; ghi GAP nếu chưa đọc, không giả nhận đã xem.

## D1_D6_EVIDENCE
Từng outcome chứng minh: lý thuyết/điều kiện, ví dụ chọn phương pháp, đa dạng Practice/Application, Written/rubric, đồ thị/bảng/lab, lộ trình lỗi/khắc phục. Không dùng quota công thức/hình/câu thay chiều sâu.

## PED1_PED6_EVIDENCE
Mạch học sinh: khám phá → hiểu ý nghĩa/bản chất → kiến thức → ví dụ/dạng toán → Vận dụng → Đối chiếu → sửa sai; tự kiểm hiệu quả học tập theo outcome. **Không ép heading PED** vào UI học sinh. Với Topic dài cần tab ngang mảng kiến thức theo Adaptive Knowledge Tabs v2.

## DELTA_LEDGER
Baseline reviewed source SHA (nếu có), candidate SHA, loại Delta, affected lesson/outcome/item, math/PED/figure change, quyết định self-QA hay review độc lập, P0/P1=0 và các điểm còn HOLD.

## PRIVATE_RD1_CUSTODY_METADATA
Chỉ công khai count/hash/custody; private RD1 stems, answers, rubrics, solutions phải owner-held OFF GitHub. Public Topic self-check có thể reuse SGK canonical Practice nhưng bắt buộc `CLIENT_SELF_CHECK_NO_MASTERY`, không gọi `TOPIC_READINESS` độc lập. Không lộ hint/key/đúng sai trước Final Submit.

## ITEM_OUTCOME_MATRIX
| item_id | primary_outcome | role | source_type | status |
|---|---|---|---|---|
| REPLACE_ID | REPLACE_OUTCOME | TOPIC_PRACTICE | SGK_CANONICAL_REUSE | VERIFIED |

**Q15:** một canonical ID / một answer/solution/rubric, nhiều placement theo role; các ứng viên mới phải được đăng ký và soát duplicate semantic, test nghiệm toán trước READY.

## QUALITY_Q01_Q18_EVIDENCE
**Một chuẩn duy nhất:** `prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md`. Cột `Q18_MODE_EVIDENCE` phải trỏ đúng `REVIEW_RECEIPT_PATH` và `ACADEMIC_SOURCE_BLOB`, không được ghi reviewer PASS khi self-QA.

| Q_ID | LESSON/OUTCOME/S1 SOURCE | AUTHOR_MATH_PED_QA | Q18_MODE_EVIDENCE | RELEASE_AP_R_MAPPING |
|---|---|---|---|---|
| Q01 | REPLACE | REPLACE | REPLACE | REPLACE |
| Q02 | REPLACE | REPLACE | REPLACE | REPLACE |
| Q03 | REPLACE | REPLACE | REPLACE | REPLACE |
| Q04 | REPLACE | REPLACE | REPLACE | REPLACE |
| Q05 | REPLACE | REPLACE | REPLACE | REPLACE |
| Q06 | REPLACE | REPLACE | REPLACE | REPLACE |
| Q07 | REPLACE | REPLACE | REPLACE | REPLACE |
| Q08 | REPLACE | REPLACE | REPLACE | REPLACE |
| Q09 | REPLACE | REPLACE | REPLACE | REPLACE |
| Q10 | REPLACE | REPLACE | REPLACE | REPLACE |
| Q11 | REPLACE | REPLACE | REPLACE | REPLACE |
| Q12 | REPLACE | REPLACE | REPLACE | REPLACE |
| Q13 | REPLACE | REPLACE | REPLACE | REPLACE |
| Q14 | REPLACE | REPLACE | REPLACE | REPLACE |
| Q15 | REPLACE | REPLACE | REPLACE | REPLACE |
| Q16 | REPLACE | REPLACE | REPLACE | REPLACE |
| Q17 | REPLACE | REPLACE | REPLACE | REPLACE |
| Q18 | REPLACE | REPLACE | REPLACE | REPLACE |

## REVIEW_SOURCE_RECEIPT
Nếu `AUTHOR_SELF_VERIFIED`: một `AUTHOR_SELF_QA_RECEIPT` có `SOURCE_BLOB`, S1, outcome audit, giải phép toán/điều kiện, hình/lab, item/rubric/exposure, P0/P1=0, chữ ký tác giả. Nếu `INDEPENDENT_REVIEW`: receipt NotebookLM đúng source SHA, 5 Permanent THPT v2.1 và verdict theo phạm vi. Source 06 file Temp_ + prompt chỉ dùng khi thực sự gửi NotebookLM, **không phải bước bắt buộc**.

**OWNER SIMPLIFIED FINALIZATION (Q18 v3.0.1):** Khi nội dung tự kiểm Q01–Q18 + A1–A7 đạt và P0/P1=0, tác giả điền ngay nguồn SHA, receipt SHA, V2 handoff, `ready/PACKET_ID.md` và REGISTER trong **cùng lượt hoàn thành**. `AUTHORING_PASS = CONTENT_READY`; RELEASE không được mở thêm vòng nghiệm thu học thuật. Receipt chỉ tóm lược các phép kiểm đã làm, trỏ source/outcome, không phải chứng nhận bên thứ ba. Chỉ lỗi toán/S1/PED/Q15/Q16 thật mới `Q18_SUBSTANTIVE_HOLD`; chưa QA nội dung = `Q18_CONTENT_CHECK_PENDING`; thiếu kỹ thuật bàn giao sau QA đạt = `HANDOFF_PACKAGING_PENDING` để AUTHORING tự hoàn tất, không chuyển thành reviewer gate.

## AUTHOR_SIGNOFF
Người biên soạn xác nhận đã độc lập kiểm toán toàn bộ nguồn, delta và reviewer/self QA theo chế độ Q18; A1–A7 đủ chứng cứ, không private RD1 leak, không còn P0/P1, nguồn/receipt SHA đúng. Không tự tick khi chưa thực tế kiểm.

## RELEASE_ACCEPTANCE
RELEASE lấy duy nhất nguồn và receipt SHA này cùng `ready/PACKET_ID.md` và 1 REGISTER row. Kiểm AP1–AP5, R1–R5, responsive/MathJax/hình/lab, Q15/Q16/Final Submit/Firebase, THCS/THPT Golden, exact-final-HEAD CI; owner approval và P1/P2 mới cho phép công bố. HTML mẫu không là website đã phát hành.
