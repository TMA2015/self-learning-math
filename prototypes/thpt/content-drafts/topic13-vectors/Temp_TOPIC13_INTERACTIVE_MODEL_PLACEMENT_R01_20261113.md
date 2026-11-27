# CĐ13 · Model placement AUTHORING Delta C R01 · 13/11/2026

**Đây là gói bổ sung D5/PED/Q07 cho snapshot có sẵn, KHÔNG ghi đè nguồn Academic/PED `CONTENT_READY` trước đó.** Mô hình phải nằm trong phần **Kiến thức** tại đúng outcome; không phát sinh tab mới, không thay Luyện tập/Tự kiểm tra, không sửa item canonical hay RD1.

TOPIC_ID: CD13
TARGET_OUTCOME_ID: TOP13-O09
TARGET_KNOWLEDGE_SECTION: Tích vô hướng qua góc và hình chiếu
MODEL_ID: SLM-TOP13-DOT-01
MODEL_VERSION: MODEL_R01_AUTHORING_CANDIDATE
MODEL_SOURCE_TYPE: EXISTING_CANONICAL_REUSE
MODEL_SOURCE_BRANCH: authoring/topic-vector-coordinate-scope-r00-20261108
MODEL_SOURCE_PATH: prototypes/thpt/content-drafts/topic-vector-coordinate/exp-notebook-d5-equivalent/Temp_TOPIC2_VECTOR_DOT_PRODUCT_PROJECTION_LAB_D5_R00_20261110.html
MODEL_SOURCE_BLOB: 06ee0ce3e13cbfa92e0201dd2ee634bf1775b18e
MODEL_QUERY_PARAMETER: NONE
ORIGINAL_TOPIC_BRANCH: authoring/topic13-planar-spatial-vectors-r01-20261113
ORIGINAL_TOPIC_LEARNER_SOURCE_BLOB: d351c5aec660d6482f6694becbd3e2567a14edbf
MODEL_PLACEMENT_ROLE: TOPIC_KNOWLEDGE_DISCOVERY
ASSESSMENT_MODE: PUBLIC_DISCOVERY_NO_MASTERY
Q18_DELTA: DELTA_C_ACADEMIC_MATERIAL_FOR_NEW_MODEL_ONLY
MODEL_QA_STATE: MATH_AND_BROWSER_QA_PENDING
RELEASE_AP_R_STATE: NOT_TESTED
OWNER_MERGE_DEPLOY_APPROVAL: NO

## Hoạt động khám phá học sinh

- **Dự đoán:** Kéo đầu u/v, xem hình chiếu có dấu; tích u·v dương,0,âm và góc undefined với u=0.
- **Thao tác:** điều khiển thanh trượt/preset của đúng `SLM-TOP13-DOT-01`, quan sát đồ thị/bảng và các giá trị bằng văn bản.
- **Kiểm trường hợp biên:** góc 0°;90°;180°; vectơ-không.
- **Giải thích:** học sinh nói được vì sao mô hình thay đổi và điều kiện áp dụng, không chỉ đọc đáp số.
- **Vận dụng:** tự tạo một bộ tham số khác rồi dùng tính toán giải thích/đối chiếu bằng giấy.
- **Đối chiếu:** tự mở hướng dẫn của mô hình sau khi thao tác, không tăng Skill Mastery.

## Chứng cứ và điều kiện chốt

- Giữ nguyên file học liệu R04/R02 và receipt/manifest nguồn Q18 trước đó; mục này là **model-only addendum**. Source canonical mô hình nằm ở Git blob 06ee0ce3e13cbfa92e0201dd2ee634bf1775b18e, **không copy JavaScript vào câu SGK**, không nhân bản MODEL_ID khi đặt ở SGK/Topic.
- Để đưa trực tiếp vào trang kiến thức, nhánh tích hợp cần có model source khả dụng qua một asset path thật, renderer giải được `MODEL_ID` rồi kiểm HTML trên desktop/mobile; không dùng placeholder như thể đã chạy.
- **Chưa mở lại Academic/PED verdict của các phần toán cũ**. Thay đổi mô hình có giả thiết, biểu đồ, văn bản quan sát và ảnh hưởng học tập là Delta C đúng phạm vi: phải QA toán, kiểm 390/820/1440, keyboard/touch, MathJax/Golden, không lỗi runtime và ghi receipt. Nếu sai toán: `MODEL_DELTA_HOLD` mô hình này, không làm mất PASS snapshot gốc.
- Thư viện mô hình chung chỉ là phương án hậu CĐ22, chưa tạo trang/menu website.
