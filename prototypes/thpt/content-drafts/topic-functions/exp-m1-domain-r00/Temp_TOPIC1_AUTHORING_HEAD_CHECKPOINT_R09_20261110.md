# Checkpoint R09 · AUTHORING Chuyên đề 1 — dùng chung bài tương tác SGK và bù đúng khoảng trống

**Ngày:** 10/11/2026 · **Lane AUTHORING**, Draft PR #801. **Owner decision:** Các bài luyện tập tương tác SGK dùng chung sang Topic khi cùng outcome; **không đặt hạn mức câu mới**; dùng Notebook/Gemini và học liệu cũ có chọn lọc, sửa sai và bổ sung điều thiếu; Notebook review khi thực sự có rủi ro chuyên môn, không tạo vòng review mặc định. Cấu trúc học sinh không đổi: **Kiến thức / Luyện tập / Tự kiểm tra**.

## 1. Công việc thật đã cập nhật vào GitHub

1. **Audit toàn bộ M1–M7 dùng chung bài tập SGK/Topic:** \`Temp_TOPIC1_M1_M7_SGK_SHARED_INTERACTIVE_EXERCISE_REUSE_R09_20261110.md\`, **blob \`8be8b1f148647d9ed48a65156c03307f33361474\`**. Đọc trực tiếp 6 ngân hàng public G10–G12: **255 ID không trùng**, đối chiếu **88 item_id tham chiếu R18** tới đúng nguồn. Ngoài ra có 10 ID Topic riêng và 17 ID Written/nguồn khác, **không đánh dấu là missing do không thuộc 6 SGK bank**.
2. **Placement reuse cần bổ sung cho M1–M3:** B15-P04 cho O05/O10; CHVI-APP-A1 cho O02; CHVI-APP-A2 cho O07/O08 (chung hàm với Kiến thức R18, không đánh giá độc lập); CHVI-APP-B3 cho O10 (tối ưu hàng rào có ngưỡng); giữ Written/Anchor chung. **Không đụng stem/key/solution/rubric gốc**.
3. **Một ứng viên luyện tương tác mới cho khoảng trống O03:** \`DRAFT-T1-M2-APP07\` trong \`Temp_TOPIC1_M2_M3_PUBLIC_PRACTICE_DRAFT_R00_20261110.md\` **blob \`397f75cba490e47270bc2dd07eabe80efc08aa68\`**. Câu chọn một đáp án hỏi khả năng phân biệt bảng **ba điểm** với hai mô hình khác nhau trên cùng D; có distractor, hint, đối chiếu và đường D6. Chưa có item_id canonical/chưa tích hợp UI quiz; chỉ là **AUTHORING item spec**.
4. **Lấp lỗ hổng lý thuyết cho bài SGK B3:** đã thêm vào M3 mạch từ \`F(x)=k-c(x-h)^2\` (\`c>0\`) tới điều kiện \`F(x)≥m\`, ba trường hợp ngưỡng, cách giải bằng khoảng cách và lấy giao miền; có Tự thử rồi Đối chiếu. Knowledge M3 **blob mới \`8ad5322c610f3e9e2d509f86ea4776b740ffd3f9\`**. Không buộc học sinh phải sang B17 SGK mới làm được B3.
5. **Ma trận Q15 sống** \`Temp_TOPIC1_M1_M3_REUSE_AND_NEW_ITEM_MATRIX_R00_20261110.md\` **blob \`4e088f392111389d77f91a8333acf5de2d88477b\`**; phần R05/R06 là lịch sử, **R09 12 DRAFT = 8 APP + 4 Written**, tất cả vẫn candidate và không áp quota.
6. Giữ mạch M2 R08: hai đường khác nhau cùng đi qua ba điểm, cùng dùng hàm giới hạn miền làm cầu nối M3; không sửa SVG/lab M2/M3 chỉ vì bài luyện mới.

## 2. QA và giới hạn đã kiểm

- **6/6 source bank đã đọc SHA; 255/255 ID duy nhất trong sáu bank**. 88 R18 public ID resolve sang 6 nguồn. **Không** suy từ đó rằng 255 câu đều chạy tốt trong website hoặc đạt Topic PASS.
- **12/12 DRAFT IDs duy nhất**, 8 APP + 4 Written; \`M2-APP07\`: \`p(x)=x²\`, \`q(x)=2|x|\`, cùng qua (−2,4),(0,0),(2,4), tại x=1 cho 1 và 2; kiểm toán A đúng/B,C,D sai, miền D=[−2,2] chứa 1 dù chưa đo.
- **M3 threshold bridge:** kiểm **3.348** bộ tham số và điểm có tính tương đương \`F(x)≥m ⇔ (x−h)²≤(k−m)/c\` khi \`c>0\`, tất cả khớp; Tự thử Q(t)=16−(t−3)² trên [0,5], Q≥12 cho [1,5]. Kiểm chứng toán là **tự QA**, không phải reviewer verdict.
- **Không có** browser/thiết bị thật QA của quiz module mới vì mới là item spec; chưa có module quiz mới; placement trong website không tồn tại/chưa tích hợp, không ghi AP1–AP5/Q07 PASS. Không có private RD1 stem/key/rubric trong nguồn mới.

## 3. Snapshot, ranh giới hai lane, bước tiếp

- R18 public canonical full Topic1 **\`2340ea4975b37a457363eea59dd617070934983c\`** bất biến, Academic/PED PASS chỉ theo snapshot đã duyệt; không thay câu SGK, Written, hệ thống đánh giá.
- R06 ONE_SOURCE **\`1d3d3852aa38ab90ed282349bfc769c02aac3ea3\`** là **snapshot lịch sử**, không đại diện 23/23 SHA của R09 HEAD. Nếu cần independent review vì nghi vấn toán/sư phạm mới, review đúng phần chịu ảnh hưởng với current SHA, **không** quay Notebook review chỉ vì tài liệu phát sinh từ Notebook.
- Topic2 Draft PR #793 baseline R02/RD1 riêng giữ nguyên. TOPIC intake V2 Issue #790 vẫn release-owned OPEN. \`CONTENT_READY=NO\`, chưa merge/deploy.
- **Tiếp theo AUTHORING:** hoàn thiện dùng chung theo outcome M4–M7 dựa trên **88 IDs xác minh**, chọn thêm bài hoặc minh họa khi có lỗ hổng cụ thể; trước handoff chốt canonical placement, Q15 ngữ nghĩa và kỹ năng, kiểm QA trình duyệt thực của HTML/SVG khi khả thi. Không sửa website/RELEASE.

**STATE:** \`SGK_SHARED_EXERCISE_REUSE_VERIFIED\` · \`255_PUBLIC_BANK_IDS_UNIQUE\` · \`88_TOPIC_R18_SHARED_IDS_GROUNDED\` · \`M3_THRESHOLD_PREREQUISITE_READY_IN_DRAFT\` · \`1_NEW_M2_INTERACTIVE_SPEC\` · \`12_DRAFT\` · \`CONTENT_READY_NO\` · \`NO_RELEASE\`.
