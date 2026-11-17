# AUTHORING Q15 R05 — Quyết định lọc tiếp ứng viên Chuyên đề 1 M1–M3

**Ngày:** 10/11/2026 · **Lane:** AUTHORING · **Standard:** SLM-THPT-QUALITY-ONE/1.2.0, Q01–Q18.  
**Trạng thái:** PRE-REVIEW CANONICAL TRIAGE; **không phải NotebookLM verdict**, không cấp PASS; **CONTENT_READY=NO**.  
**Base protected:** R18 Academic/PED PASS trên đúng snapshot, Git blob \`2340ea4975b37a457363eea59dd617070934983c\`. Không sửa R18, M4/M5/M7, private RD1, website, Golden, Firebase hay Mastery.

## 1. Nguồn xác minh có giới hạn

- SOURCE SGK formative B15: \`docs/assets/javascripts/thpt-chvi-reviewed-formative-v1.js\`, blob \`1223d4c2b574433479c5d222dbeff363718ee4bb\`; đối chiếu 6 item B15 C01/C02/P01–P04 (public only).
- SOURCE SGK Kiến thức B15/B16: \`docs/thpt-preview/sgk/chuong-vi/bai-15.md\` blob \`72ed03b1cb625f157bb49064cf1df2100856e057\`; \`bai-16.md\` blob \`a0fc509e1c08b7ee90225dee3994d6b3fa84e21a\`.
- SOURCE Topic G10 R01: Git blob \`57eaf0141a5db9bfba91f0e6c863fc7dcc638068\`; 6 item P01–P06 đã được đọc trực tiếp trong audit R01 trên nhánh.
- SOURCE Written hiện hành: \`docs/thpt-preview/thu-vien/tu-luan.md\`, blob \`4da918f36d30c9b7110099e81fc88943e5b7705b\`; hai B15 Written \`HPT-G10-CHVI-WRI-15-01\` (bảng/đồ thị) và \`-02\` (hàm từng đoạn, phí theo quãng đường).
- SOURCE R18 M1–M3: \`Temp_TOPIC_FUNCTIONS_FULL_PUBLIC_CANONICAL_SOURCE_R18_20261108.md\`, blob \`2340ea4975b37a457363eea59dd617070934983c\`. Đã đọc EX-M1-01, EX-M1-02, EX-M2-03, EX-M3-03 và TRY tương ứng.
- SOURCE Delta new Knowledge: \`Temp_TOPIC1_M1_DOMAIN_KNOWLEDGE_DELTA_C_R00_20261110.md\` blob \`65abb522212389b93c1bdeb476fd4c5c26f5938b\`; M3 knowledge \`Temp_TOPIC1_M3_TRANSFORM_KNOWLEDGE_DELTA_C_R00_20261110.md\` blob \`c46a5f0a0ce88b4e4128f15836fce0215900bcd9\`.
- Original scoped audits: \`Temp_TOPIC1_M1_M3_Q15_REAL_BANK_AUDIT_R01_20261110.md\` và \`Temp_TOPIC1_M1_M3_WRITTEN_ANCHOR_Q15_R02_20261110.md\`. Mới đối chiếu nguồn **đã nêu**, chưa chứng minh uniqueness toàn ngân hàng lớp 10–12.

## 2. Từ 14 DRAFT xuống 11 DRAFT trước review — không mint canonical ID

| DRAFT ID rút khỏi danh sách candidate Luyện tập mới | Chứng cứ đối chiếu | Quyết định |
|---|---|---|
| \`DRAFT-T1-M1-APP01\` | Hỏi bảng có cùng x và cùng y hay hai y; thao tác này đã được giải trong R18 EX-M1-01, đồng thời B15 C01 đã là canonical public bài nhận diện đơn trị | \`REUSE_KNOWLEDGE_OR_EXISTING_ITEM\`; không lập item thứ hai chỉ vì đảo phản ví dụ |
| \`DRAFT-T1-M1-APP04\` | Bài phí xử lý 8 + 12n với n nguyên 1–6, cùng **số liệu, điều kiện, tập giá trị** như ví dụ Kiến thức M1 Delta; lời giải đã công khai | \`REUSE_KNOWLEDGE_EXAMPLE\`; không biến bài đã lộ lời giải thành canonical Luyện tập mới |
| \`DRAFT-T1-M3-APP08\` | Kỹ năng a=0 ⇒ không còn hàm bậc hai đã có ở \`THPT-G10-TOP-FUNC-P02\`, cùng mạch giải thích M3; phần tính nghiệm đường thẳng chưa chứng minh họ dạng sâu khác | \`REUSE_TOPIC_P02_AND_KNOWLEDGE\`; không mint ID mới chỉ thêm phép tính bậc nhất |

**Ba ID trên là mã DRAFT chưa từng canonical**; rút candidate không xóa đánh giá, đáp án hay ID học viên. Chúng có thể ở dạng minh họa/đối chiếu sư phạm đã có nhưng **không đăng ký** câu mới.

**Lưu ý lịch sử:** R00 có 17 ứng viên, R04 đã loại 3 (\`M1-APP03\`, \`M2-APP04\`, \`M3-APP06\`) thành 14; R05 rút tiếp 3 thành **11 = 7 APP + 4 Written**. Tổng 6 DRAFT đã loại qua hai vòng Q15. Con số này chỉ đếm ứng viên mới, **không** giảm coverage của R18 đã PASS.

## 3. 11 ứng viên còn phải được reviewer đánh giá độc lập

| Candidate | Mapping gợi ý | Điều khác biệt cần reviewer kiểm tra | Status |
|---|---|---|---|
| M1-APP02 | TOP-G10-FUNC-O02 | Phản biện phép rút gọn mẫu có điểm loại | REVIEW_PENDING |
| M1-APP05 | O02 | Căn có miền kín, mẫu loại điểm trong miền; so với EX và các dạng cùng phương pháp | SEMANTIC_RECHECK |
| M1-APP06 | O02 | Căn trên nửa trục, mẫu loại hai điểm; kiểm xem đủ khác APP05 để tạo item | SEMANTIC_RECHECK |
| M1-WR01 | O02 | Căn ở mẫu buộc điều kiện nghiêm ngặt, phản biện tại biên/rubric | REVIEW_PENDING |
| M1-WR02 | O02/O03 | Lỗ đồ thị sau rút gọn, mất đúng một giá trị trong tập giá trị/rubric | REVIEW_PENDING |
| M2-APP05 | O05 | Nhánh có mốc đóng/mở khác nhau và chấm đồ thị; so B15-P02 và EX-M2-03 | SEMANTIC_RECHECK |
| M2-APP06 | O04/O05 | Hai nhánh tăng nhưng toàn hàm không tăng do bước nhảy xuống | REVIEW_PENDING |
| M2-WR01 | O03 | Dữ kiện quan sát khác giá trị nội suy theo giả định, diễn giải hạn chế dự báo | REVIEW_PENDING |
| M3-APP07 | O08 (extension) | So nghiệm của |f(x)| và f(|x|) với điều kiện u≥0; kiểm overlap WR02 | ENRICHMENT_REVIEW_HOLD |
| M3-APP09 | O09 | Tối ưu parabol trên hai đoạn rời, đỉnh nằm trong khoảng bị loại | REVIEW_PENDING |
| M3-WR02 | O08 (extension) | Hai biến đổi trị tuyệt đối, phản chiếu đồ thị, tính giá trị/nghiệm và rubric | ENRICHMENT_REVIEW_HOLD |

**Nguồn hai file Practice vừa khóa:** M1 5 DRAFT blob \`c956563f8e3dc88f6a6277f493b32a629f5069ae\`; M2/M3 6 DRAFT blob \`469f196958dfb6e64a14c22171c376d85f7096d5\`. Trong 11 ứng viên còn lại **không có item_id/content_version canonical được cấp**. Reviewer có thể tiếp tục yêu cầu REUSE/RETIRE khi còn cùng suy luận; không mặc định 11/11 là NEW.

## 4. Ranh giới bảo vệ và cổng chưa đóng

- \`Q15_FULL_CROSS_BANK_SEMANTIC=HOLD\`: cần đối chiếu các phiên bản/nguồn SGK/Topic/Written/Anchor liên quan trước cấp ID mới, role/placement/content_version/source SHA, gồm nguồn ngoài B15/B16.
- \`Q01–Q14/Q18\`: DELTA_C M1–M3/M6, hình/HTML và 11 ứng viên mới cần NotebookLM **Academic lẫn PED** theo outcome/item/model; dùng đúng 5 Permanent v2.1 và SGK/SBT S1. Không đòi review lại R18 bất biến.
- \`Q07_REAL_BROWSER_QA=PENDING\`; mock DOM/Canvas/SymPy là chứng cứ hạn chế, không phải AP PASS hoặc kiểm iPad Safari.
- \`Q16\`: RD1 30 câu kín giữ ở owner, không dùng public candidate làm readiness độc lập; không ghi Mastery.
- \`V2_TOPIC_INTAKE_ISSUE_790=OPEN\`, không tạo \`ready/\` manifest, REGISTER promotion, merge/deploy khi chưa đủ điều kiện.

**Kết luận AUTHORING:** \`11_DRAFT_REVIEW_CANDIDATES\`, \`7_APP_4_WRITTEN\`, \`R18_PRESERVED\`, \`Q15_FULL_BANK_HOLD\`, \`INDEPENDENT_REVIEW_PENDING\`, \`CONTENT_READY_NO\`.
