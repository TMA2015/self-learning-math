# CĐ10 · Model placement AUTHORING Delta C R01 · 13/11/2026

**Đây là gói bổ sung D5/PED/Q07 cho snapshot có sẵn, KHÔNG ghi đè nguồn Academic/PED `CONTENT_READY` trước đó.** Mô hình phải nằm trong phần **Kiến thức** tại đúng outcome; không phát sinh tab mới, không thay Luyện tập/Tự kiểm tra, không sửa item canonical hay RD1.

TOPIC_ID: CD10
TARGET_OUTCOME_ID: TOP10-O29
TARGET_KNOWLEDGE_SECTION: Mô hình tối ưu và miền khả thi
MODEL_ID: SLM-TOP10-BOX-01
MODEL_VERSION: MODEL_R02_AUTHORING_CANDIDATE
MODEL_SOURCE_TYPE: NEW_SHARED_RUNTIME
MODEL_SOURCE_BRANCH: authoring/thpt-interactive-models-cd01-cd14-r01-20261113
MODEL_SOURCE_PATH: prototypes/thpt/content-drafts/interactive-models/Temp_THPT_SHARED_DISCOVERY_MODELS_11IN1_R01_20261113.html
MODEL_SOURCE_BLOB: 7cb825f867f2ff69287536f5ad0a333bed9ce5c2
MODEL_QUERY_PARAMETER: ?model=SLM-TOP10-BOX-01
ORIGINAL_TOPIC_BRANCH: authoring/topic10-applied-derivative-survey-optimization-r01-20261112
ORIGINAL_TOPIC_LEARNER_SOURCE_BLOB: 4a17269c608b4916ba085c13aae898fd9c4733ce
MODEL_PLACEMENT_ROLE: TOPIC_KNOWLEDGE_DISCOVERY
ASSESSMENT_MODE: PUBLIC_DISCOVERY_NO_MASTERY
Q18_DELTA: DELTA_C_ACADEMIC_MATERIAL_FOR_NEW_MODEL_ONLY
MODEL_QA_STATE: MATH_AND_BROWSER_QA_PENDING
RELEASE_AP_R_STATE: NOT_TESTED
OWNER_MERGE_DEPLOY_APPROVAL: NO

## Hoạt động khám phá học sinh

- **Dự đoán:** Vary x∈(0,6) in V=x(12−2x)², so nội biên x=2 với đầu khoảng bị loại.
- **Thao tác:** điều khiển thanh trượt/preset của đúng `SLM-TOP10-BOX-01`, quan sát đồ thị/bảng và các giá trị bằng văn bản.
- **Kiểm trường hợp biên:** x=.1;2;5.9; V(2)=128cm³; miền mở.
- **Giải thích:** học sinh nói được vì sao mô hình thay đổi và điều kiện áp dụng, không chỉ đọc đáp số.
- **Vận dụng:** tự tạo một bộ tham số khác rồi dùng tính toán giải thích/đối chiếu bằng giấy.
- **Đối chiếu:** tự mở hướng dẫn của mô hình sau khi thao tác, không tăng Skill Mastery.

**Model R02 source delta:** source SHA updated after SSA b=16 double-root numerical fix and k<0 quadratic-sign support; 11 models continue to share one canonical runtime. No change to the Topic source or Q18 old receipt; model scope remains targeted QA.

## Chứng cứ và điều kiện chốt

- Giữ nguyên file học liệu R04/R02 và receipt/manifest nguồn Q18 trước đó; mục này là **model-only addendum**. Source canonical mô hình nằm ở Git blob 7cb825f867f2ff69287536f5ad0a333bed9ce5c2, **không copy JavaScript vào câu SGK**, không nhân bản MODEL_ID khi đặt ở SGK/Topic.
- Để đưa trực tiếp vào trang kiến thức, nhánh tích hợp cần có model source khả dụng qua một asset path thật, renderer giải được `MODEL_ID` rồi kiểm HTML trên desktop/mobile; không dùng placeholder như thể đã chạy.
- **Chưa mở lại Academic/PED verdict của các phần toán cũ**. Thay đổi mô hình có giả thiết, biểu đồ, văn bản quan sát và ảnh hưởng học tập là Delta C đúng phạm vi: phải QA toán, kiểm 390/820/1440, keyboard/touch, MathJax/Golden, không lỗi runtime và ghi receipt. Nếu sai toán: `MODEL_DELTA_HOLD` mô hình này, không làm mất PASS snapshot gốc.
- Thư viện mô hình chung chỉ là phương án hậu CĐ22, chưa tạo trang/menu website.
