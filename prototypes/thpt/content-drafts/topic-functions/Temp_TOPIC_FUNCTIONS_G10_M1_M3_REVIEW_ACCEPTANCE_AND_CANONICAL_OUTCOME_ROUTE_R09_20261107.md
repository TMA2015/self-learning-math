# AUTHORING R09 — Hoàn tất đối chiếu học thuật G10 M1–M3 (không review NotebookLM lại)

**MỤC TIÊU:** Chốt việc làm thật của phần Kiến thức/Luyện tập Topic Hàm số & đồ thị lớp 10 (M1–M3); ngừng các HOLD tạo ra chỉ vì văn bản báo cáo diễn đạt khác thứ tự outcome. Nhánh: AUTHORING PR #782. Một chuẩn SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18.

**QUYẾT ĐỊNH CHỦ DỰ ÁN 07/11/2026, [Issue #787](https://github.com/TMA2015/self-learning-math/issues/787):** review NotebookLM đạt khi **đúng chủ đề, kết luận học thuật đúng, và nói về đúng học liệu cung cấp**. Khi đáp ứng ba điều kiện, **chấp nhận Academic/PED**, không yêu cầu kiểm toán phụ/đính chính metadata/NotebookLM re-review vì lời tóm tắt khác. Chỉ làm lại khi sai toán, sai phạm vi hoặc nhầm nguồn thật. Prompt NotebookLM luôn đặt trực tiếp trong chat, không tạo file prompt.

## 1. Nguồn học liệu và verdict đã có — không viết lại lịch sử

- **R01 Topic G10 nguyên gốc:** Git blob \`57eaf0141a5db9bfba91f0e6c863fc7dcc638068\`, các định nghĩa, D1, 8 ví dụ giải thích, luyện tập dùng chung/ứng viên public, 4 Written/Anchor và 4 HELP, có bảng 10 outcome. Lịch sử đã có Academic PASS trong review owner blob \`95e34644c4520adf748cfe3118d8726a5202e3e3\`. **Không sửa đề, đáp án, lời giải, rubric hoặc ID cũ.**
- **M1–M3 bổ sung diễn giải DELTA C:** \`Temp_TOPIC_FUNCTIONS_M1_M3_VERTICAL_FOUNDATIONS_PED_DELTA_R01_20261107.md\` Git blob \`fcecb2c97fe7799124809c47045f2087d333afa9\`. Gói review đã gửi \`Temp_TOPIC_FUNCTIONS_M1_M3_DELTA_C_NOTEBOOKLM_SCOPED_REVIEW_PACKET_R01_20261107.md\` Git blob \`29e067b51aa0b731185be1ddb1f9e40bd0556760\`: Appendix A là **nguyên văn bridge mới**, Appendix B là nguyên văn lịch sử R01 để so sánh, không phải học liệu khác. Được đối chiếu SGK/SBT G10 KNTT nguồn S1 của B15/B16, không sinh nguồn chuẩn thứ hai.
- **NotebookLM đã báo cáo Academic PASS + PED PASS** cho phạm vi mười outcome M1–M3 với P0=P1=P2=0 và không tự cấp CONTENT_READY. Báo cáo thảo luận chính các ý tưởng toán học của nguồn được gửi: quan hệ hàm đơn trị, điều kiện miền, đọc đồ thị/bảng, từng đoạn, đơn điệu, parabol, đỉnh/trục/giao trục, mô hình; các kết luận toán học được đối chiếu đúng.
- **Disposition:** Theo quyết định #787, **CHẤP NHẬN Academic+PED PASS cho tri thức/giải thích G10 M1–M3 của hai nguồn nêu trên**; **ĐÓNG \`M1_M3_NOTEBOOKLM_REVIEW_SOURCE_MISMATCH_HOLD\` về cơ sở chỉ là cách đánh số/mô tả ví dụ và nguồn đăng ký trong báo cáo.** Không yêu cầu thêm NotebookLM hoặc thay văn bản học liệu đã PASS. **Không cấp mới 10 item TRY/HELP chỉ vì báo cáo minh họa các ID không có trong bridge**; Q15 quản trị item là trách nhiệm AUTHORING, giữ nguồn thật.

## 2. Mapping chính xác 10 outcome trong canonical R01 — kết nối đúng phần M1–M3 đã review

Mã \`TOP-G10-FUNC-Oxx\` và **ý nghĩa** lấy từ R01 đã có, không thay theo thứ tự bảng tóm tắt của NotebookLM. Các nhãn \`M1-T01\`… là vị trí **Tự thử formative** trong kiến thức, không là \`item_id\` canonical mới.

| Outcome cũ (ID không đổi) | Ý nghĩa gốc và bằng chứng trong bridge mới | Tự thử / public canonical hiện có (không clone) | Xử lý |
|---|---|---|---|
| \`O01\` | M1 đơn trị, bảng x lặp, tập giá trị | M1-T01; G10 B15-C01 | GIỮ |
| \`O02\` | M1 tập xác định/tập giá trị, giao điều kiện căn+mẫu | M1-T02; G10 B15-C02/P01 | GIỮ |
| \`O03\` | M2 giá trị/điểm thuộc đồ thị, giới hạn nội suy | M2 EX01; original \`THPT-G10-TOP-FUNC-P01\` already contains the point-membership formative example | DÙNG CHUNG, không invent \`TRY03\` |
| \`O04\` | M2 tăng/giảm trên một khoảng, kiểm mọi cặp x | M2-T01; G10 B15-P03 | GIỮ |
| \`O05\` | M2 hàm từng đoạn, điều kiện tại điểm nối, miền mô hình | M2-T02; G10 B15-P02; original Written-15-02 | GIỮ (báo cáo NotebookLM gọi ví dụ tương ứng là O06) |
| \`O06\` | M3 nhận biết hàm bậc hai và điều kiện \`a≠0\` | M3 lý thuyết và original \`THPT-G10-TOP-FUNC-P02\` (parameter quadratic) | DÙNG CHUNG (báo cáo đặt nhận diện ở O07) |
| \`O07\` | M3 dạng đỉnh, trục đối xứng, hoàn phương | M3-T01; original P03 | GIỮ (báo cáo tóm tắt vào O08) |
| \`O08\` | M3 hình dạng, giao trục, delta/đối xứng | M3-T03; original P04; FIG B16 | GIỮ (báo cáo tóm tắt vào O09) |
| \`O09\` | M3 đơn điệu và cực trị trên miền hạn chế | M3-T02; EX03; original P05 — **cùng một bài toán và lời giải source**, không nhân bản | GIỮ (báo cáo tóm tắt BBT vào O05) |
| \`O10\` | M3 lập mô hình, miền phù hợp, đơn vị/giá trị tối ưu | M3 EX04; original public P06; HELP B16-02 | GIỮ |

**Reviewer-specific \`THPT-TOPIC-FUNC-TRY01..10\` và \`HELP-TOPIC-FUNC-TRY01..10\` được kể trong văn bản kết quả NotebookLM không phải bằng chứng mười bản nguồn mới xuất hiện trong gói đã gửi. Không chuyển thành canonical; không tạo gói học liệu mới để bắt kịp cách đánh số của báo cáo.** Phần được nhận Academic/PED PASS là **kiến thức học thuật của mười outcome**, không phải việc chứng nhận 10 ID chưa đăng ký hoặc official held-out test. Không lấy số câu thay chiều sâu.

## 3. Đường học G10 M1–M3 có thể dùng ngay trong một TOPIC độc lập (AUTHORING layout, không thêm math)

- **Kiến thức:** M1 định nghĩa/miền, M2 bảng-đồ thị/từng đoạn, M3 parabol/mô hình. Đặt trình bày pedagogy bridge \`fcecb2...\` trước các ví dụ đã có R01; mọi nhãn EX trùng VD R01 **tham chiếu một bản lời giải**, không tạo hai \`example_id\`; hai ví dụ giải thích cầu nối EX-M2-02/03 đã được review cùng bridge.
- **Luyện tập:** Dùng cùng canonical stem/key/solution/rubric từ R01 các mục B15 C/P, original 6 \`THPT-G10-TOP-FUNC-P01..P06\` được bảo toàn theo lịch sử; các mục demo R4 chỉ được trình bày như demo, không làm Mastery. 4 Written/Anchor dùng chung nguồn, không đổi rubric.
- **D6:** Giữ 4 \`HELP-G10-B15/B16\` gốc (01/02 mỗi bài) bằng placement bên trong Topic, kết hợp **chỉ dẫn tự khắc phục đã review** trong bridge. Không đòi học sinh mở trang SGK để hiểu; không tự tạo 10 HELP records khác.
- **D5:** Reuse figure/source B15/B16 ở các outcome tương ứng, kèm đọc trục, miền, mốc rỗng/đặc, chiều mở/đỉnh/giao Ox theo lời giải trong bridge. Việc render SVG/đồ thị thực tế thuộc RELEASE AP3, không phải lý do đòi NotebookLM review lại học liệu.
- **Tự kiểm tra:** G10 R01 có riêng blueprint kiểm tra Topic, **KHÔNG** có bằng chứng official privately held-out independent G10–12 Topic Readiness đầy đủ. First Try/D3/đáp án public là formative và không cấp Mastery; Q16 full Topic còn mở, không công bố private RD1 trên GitHub.

## 4. Kết quả AUTHORING và ưu tiên chủ dự án

\`G10_TOPIC_M1_M3_KNOWLEDGE_PED_ACADEMIC_PASS_ACCEPTED\` — phần học thuật G10 M1–M3 đã có Academic/PED PASS theo ba tiêu chí của chủ dự án, không cần NotebookLM review lại. \`G10_TOPIC_CANONICAL_OUTCOME_10_OF_10_MAPPED\` — 10 outcome gốc được giữ nguyên nghĩa và liên kết đúng M1–M3; không có Q15 phantom ID mới. \`M4_M7_ACADEMIC_PED_PASS_PRESERVED\` — bốn mạch đã PASS riêng.

**LƯU Ý:** Đây là **hoàn tất phần authoring học thuật cơ sở M1–M3**, không phải tự cấp **toàn Topic M1–M7 \`FULL_TOPIC_CONTENT_READY\`**. Còn việc thống nhất toàn Topic, xác nhận danh sách canonical cuối, Q16 official Topic Readiness và V2 handoff/REGISTER. Khi xong academic G10 M1–M3, chủ dự án giao quay lại **SGK G10 ChII → ChIV**, trong khi **ChVI #786** còn ở RELEASE QA; xử lý theo đúng ranh giới hai nhánh.

**CHECKPOINT:** \`M1_M3_NEW_PED_DELTA_C_ACADEMIC_PED=PASS_ACCEPTED\`, \`G10_10_OUTCOMES_MAPPED=YES\`, \`REVIEWER_10_ILLUSTRATIVE_TRY_IDS_NOT_PROMOTED\`, \`NEW_CANONICAL_ID=0\`, \`FULL_TOPIC_CONTENT_READY=NO\`, \`RELEASE=NO\`.
