# CĐ15–CĐ22 · Quy trình AUTHORING kèm mô hình tương tác ngay từ đầu

**Owner decision: 13/11/2026** · đây là checklist triển khai dưới **một chuẩn** `SLM-THPT-QUALITY-ONE v3.1.0` Q01–Q18, **không** tạo thêm tiêu chuẩn học thuật; thay đổi tính bắt buộc trong chuẩn gốc nếu có phải qua owner `STANDARD_CHANGE_REQUEST`. Giữ nhánh AUTHORING độc lập với RELEASE.

## Trong mỗi Chuyên đề từ CĐ15

1. Đọc S1 SGK/SBT đã được kiểm nguồn trang in/PDF; khóa `LESSON_ID/OUTCOME_ID`, giải thích bản chất/điều kiện, ví dụ, Tự thử và D6. **Học liệu vẫn đủ tự học ngay cả khi trình duyệt không chạy mô hình.**
2. Chọn điểm khó trực quan theo **outcome**, thiết kế một mô hình phù hợp theo palette/hướng dẫn của `Temp_THPT_INTERACTIVE_MODEL_DESIGN_AND_CD01_CD14_PLACEMENT_R01_20261113.md`. **Trước tiên tìm MODEL_ID/source đã có** ở SGK hoặc Topic khác, chỉ tạo mã mới khi không có mô hình tương đương. Không gắn mô hình vô nghĩa chỉ để đủ số lượng.
3. Một model gồm mục đích, giả thiết/miền, thao tác thật (slider/kéo), hình và kết quả thay đổi, các mẫu thử giá trị biên, hướng dẫn đọc hình, lời **Dự đoán→Quan sát→Giải thích→Vận dụng→Đối chiếu**. Không để lộ `MODEL_ID` cho học sinh, không copy thẳng Notebook 10-in-1 cũ có lỗi.
4. Với model mới: lưu một **HTML/SVG canonical** có `MODEL_ID`, Git blob SHA; tạo `OUTCOME_ID→MODEL_ID→placement` trên cùng source. Nếu đã tồn tại: chỉ tham chiếu source SHA bất biến, không clone. Không tạo Core trang riêng, giữ Topic đúng **Kiến thức / Luyện tập / Tự kiểm tra**.
5. AUTHORING QA **toán thật** cho công thức/trường hợp biên (không có chia 0, sai dấu, nghiệm trùng, miền cấm, đơn vị), QA PED vì sao thao tác giúp học, và QA cấu trúc/RWD. Browser Chromium 390/820/1440, touch/keyboard/focus/no overflow/SVG/Canvas thuộc cổng kiểm mô hình; nếu chưa thực thi thì ghi `NOT_TESTED`, không tự nhận PASS.
6. Chỉ khi **mô hình học thuật đạt Q18 và source/receipt/placement/handoff đồng bộ** mới đưa vào gói `CONTENT_READY`. Sự thay đổi D5/PED đáng kể là `DELTA_C_ACADEMIC_MATERIAL` targeted đúng phần, không kéo học liệu SGK/Topic cũ đã PASS sang review toàn bộ. `MODEL_DELTA_HOLD` đúng model nếu còn P0/P1.
7. Q16: Model là `PUBLIC_DISCOVERY_NO_MASTERY`, không cập nhật Skill Mastery; câu hỏi có đánh giá phải dùng `ITEM_ID` canonical riêng. Không chứa RD1 kín, không hiện answer/hint/AI trước Final Submit của chính bài **Tự kiểm tra**; không mạo nhận demo đang chấm chính thức.
8. AUTHORING bàn giao một source Git/receipt, V2 handoff và manifest/REGISTER hợp lệ; **RELEASE** xử lý nhúng thật vào website, Golden R4, AP1–AP5/R1–R5, iPhone/iPad Safari, CI trên exact combined HEAD, owner merge/deploy approval.

## Sau CĐ22 — đề xuất thư viện mô hình THPT

- Dự kiến một chỉ mục `THPT_INTERACTIVE_MODEL_LIBRARY` dưới thương hiệu Self-Learning Math, **không thêm trang vào menu trước khi owner quyết định**. Mục đích tra cứu và thử lại mô hình theo chủ đề/lớp/outcome, nguồn duy nhất dùng chung với vị trí gốc trong Kiến thức.
- Bộ lọc có thể gồm **Chuyên đề, lớp, chủ đề, loại mô hình**; chỉ hiển thị các model đã QA/RELEASE PASS, mỗi thẻ trỏ về `MODEL_ID` canonical cùng source hash. Đây là giao diện tra cứu bổ trợ, không là hành trình học độc lập thứ ba hoặc thay phần kiến thức của học sinh.
- Khi đủ 22 Topic và quyết định mở thư viện, nhánh RELEASE đề xuất UI/URL/Golden R4/ACL/deep link và QA trước khi deploy; không đổi Firebase/progress/THCS ngoài phạm vi được duyệt.

## Checkpoint trạng thái hiện hành

CĐ01–CĐ14 có 14 model placements addenda và 14 model IDs (11 source mới trong 1 runtime +3 reuse); **chưa nhúng chạy trong learner page**. Source mới `e71afeafd6c12fad6bb5e44a7ba1268b1211c191` đã có QA toán/static 55/55 +3 kiểm tra nhãn; browser/mobile/RELEASE chưa nghiệm thu. Giữ 14 old academic blobs và receipts nguyên vẹn.
