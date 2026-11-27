# CĐ05 · Model placement AUTHORING Delta C R01 · 13/11/2026

**Đây là gói bổ sung D5/PED/Q07 cho snapshot có sẵn, KHÔNG ghi đè nguồn Academic/PED `CONTENT_READY` trước đó.** Mô hình phải nằm trong phần **Kiến thức** tại đúng outcome; không phát sinh tab mới, không thay Luyện tập/Tự kiểm tra, không sửa item canonical hay RD1.

TOPIC_ID: CD05
TARGET_OUTCOME_ID: TOP05-O10
TARGET_KNOWLEDGE_SECTION: Một điểm dịch đi, cả đồ thị dịch theo
MODEL_ID: SLM-TOP05-GRAPH-01
MODEL_VERSION: MODEL_R01_AUTHORING_CANDIDATE
MODEL_SOURCE_TYPE: EXISTING_CANONICAL_REUSE
MODEL_SOURCE_BRANCH: authoring/topic-functions-m1-domain-depth-d5-20261110
MODEL_SOURCE_PATH: prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_TOPIC1_M3_GRAPH_TRANSFORM_LAB_D5_R00.html
MODEL_SOURCE_BLOB: 5bc8204f8bd024f30a73230231857210f1ce2123
MODEL_QUERY_PARAMETER: NONE
ORIGINAL_TOPIC_BRANCH: authoring/topic05-functions-graph-transform-r01-20261112
ORIGINAL_TOPIC_LEARNER_SOURCE_BLOB: 04f532661d014ee011e5d2f61a3dca9578a101d4
MODEL_PLACEMENT_ROLE: TOPIC_KNOWLEDGE_DISCOVERY
ASSESSMENT_MODE: PUBLIC_DISCOVERY_NO_MASTERY
Q18_DELTA: DELTA_C_ACADEMIC_MATERIAL_FOR_NEW_MODEL_ONLY
MODEL_QA_STATE: MATH_AND_BROWSER_QA_PENDING
RELEASE_AP_R_STATE: NOT_TESTED
OWNER_MERGE_DEPLOY_APPROVAL: NO

## Hoạt động khám phá học sinh

- **Dự đoán:** Dùng bản graph transformation canonical của Topic1, chọn a,b,c rồi bật f(|x|) và |f(x)| riêng.
- **Thao tác:** điều khiển thanh trượt/preset của đúng `SLM-TOP05-GRAPH-01`, quan sát đồ thị/bảng và các giá trị bằng văn bản.
- **Kiểm trường hợp biên:** a=0; dịch đỉnh; đổi trị tuyệt đối đầu vào/ra.
- **Giải thích:** học sinh nói được vì sao mô hình thay đổi và điều kiện áp dụng, không chỉ đọc đáp số.
- **Vận dụng:** tự tạo một bộ tham số khác rồi dùng tính toán giải thích/đối chiếu bằng giấy.
- **Đối chiếu:** tự mở hướng dẫn của mô hình sau khi thao tác, không tăng Skill Mastery.

## Chứng cứ và điều kiện chốt

- Giữ nguyên file học liệu R04 và receipt/manifest nguồn Q18 trước đó; mục này là **model-only addendum**. Source canonical mô hình nằm ở Git blob 5bc8204f8bd024f30a73230231857210f1ce2123, **không copy JavaScript vào câu SGK**, không nhân bản MODEL_ID khi đặt ở SGK/Topic.
- Để đưa trực tiếp vào trang kiến thức, nhánh tích hợp cần có model source khả dụng qua một asset path thật, renderer giải được `MODEL_ID` rồi kiểm HTML trên desktop/mobile; không dùng placeholder như thể đã chạy.
- **Chưa mở lại Academic/PED verdict của các phần toán cũ**. Thay đổi mô hình có giả thiết, biểu đồ, văn bản quan sát và ảnh hưởng học tập là Delta C đúng phạm vi: phải QA toán, kiểm 390/820/1440, keyboard/touch, MathJax/Golden, không lỗi runtime và ghi receipt. Nếu sai toán: `MODEL_DELTA_HOLD` mô hình này, không làm mất PASS snapshot gốc.
- Thư viện mô hình chung chỉ là phương án hậu CĐ22, chưa tạo trang/menu website.
