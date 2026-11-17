# Chuyên đề 1 · AUTHORING checkpoint R08 — kiểm tra dòng chảy M1 → M2 → M3

**Ngày:** 10/11/2026 · **Vai trò:** AUTHORING only · **Phương thức theo quyết định mới nhất của owner:** chọn lọc Notebook/Gemini và học liệu nội bộ, sửa đúng lỗi/thiếu; tập trung **Kiến thức** và dòng học tự đủ, không tự mặc định chấp nhận hoặc mặc định review lại đầu vào Notebook. Giữ **Kiến thức / Luyện tập / Tự kiểm tra**, không merge/deploy.

## 1. Vấn đề xác định qua nguồn thật và cách đã xử lý

- **M1:** đã đủ khái niệm tập xác định, quy tắc đơn trị, phân biệt miền đại số/miền thực tế; **giữ nguyên** source blob \`65abb522212389b93c1bdeb476fd4c5c26f5938b\`. Không thêm lời lẽ trùng.
- **M2:** đã dạy “ba phép đo không suy được cả đồ thị”, nhưng học sinh chưa có **chứng cứ hai đường khác nhau qua cùng ba điểm**. Đã thêm một tình huống đối chứng với ba điểm A(0,1), B(1,0), C(2,1); hai hàm \`f(x)=(x−1)²\` và \`g(x)=|x−1|\` cùng qua A/B/C khi xét \`D=[0,2]\` nhưng \`f(0,5)=0,25 ≠ g(0,5)=0,5\`. Hoạt động **Tự thử trước, hình + đối chiếu sau**. Phân biệt **chỉ có bảng mốc** với **được cho công thức và miền liên tục**; làm rõ ký hiệu hàm f được định nghĩa lại ở ví dụ hàm từng đoạn. Theory blob mới \`727df67dd8c5eebbe2c48b43ee30be9b496e9941\` (trước: \`458cae0e2c69e4df9fc4a88b643ceb4bff5a20da\`).
- **SVG mới:** \`Temp_FIG_TOPIC1_M2_SAME_POINTS_DIFFERENT_CURVES_R08.svg\`, blob \`9c2802a0c86fd7d7e4045999d4906cd0c798601e\`. Hai hàm, một hệ trục, 3 điểm chung + hai giá trị khác nhau tại x=0,5, title/desc, không CDN/script. Chỉ minh họa chính xác một quy tắc được chọn, không tuyên bố đó là đường đo ngoài thực tế.
- **M3:** nối chính mô hình \`f(u)=(u−1)², D_f=[0,2]\` ở M2 vào ví dụ dịch \`g(x)=f(x−2)+3\`, \`D_g=[2,4]\`; giải thích **đây là một ví dụ hàm f khác** với \`x²−4x+3\` đã dùng cho trị tuyệt đối trước đó. Cập nhật dẫn nhập M3 đúng năng lực M2 (điểm đo/rule/miền), không nói M2 đã dạy trước phép biến đổi. Theory blob mới \`c8a232ba611b4d0947618c72d7680239775a6d0e\` (trước: \`b3efdf2cf0b50725da02a0dcd0510c75f3d17c67\`).
- **Không đổi**: lab M2 blob \`ca77c9158fc2a57ac0c6f4f52b30f36a33330814\`; lab M3 blob \`5bc8204f8bd024f30a73230231857210f1ce2123\`; ngân hàng luyện tập 11 DRAFT, câu Private RD1, đáp án, rubric, S1 Core, kiến trúc website, release.

## 2. QA trên đúng source GitHub hiện tại

**Đạt trong các kiểm tra đã thực hiện:**
- 3/3 điểm A/B/C thuộc cả hai đường; tại x=0,5 hai giá trị đúng lần lượt 0,25 và 0,5.
- Đường cong Bézier vẽ f từ x=0 đến x=2 được kiểm toán **201/201** điểm về công thức toạ độ; đoạn g tuyến tính có mốc giữa đúng.
- Biến đổi f(u)→f(x−2)+3 và miền [0,2]→[2,4] kiểm bằng 201/201 mẫu; các điểm (0,1),(1,0),(2,1) dịch thành (2,4),(3,3),(4,4).
- SVG đóng/mở tag nhất quán, \`aria-labelledby\` trỏ title/desc thật, không tải script/hình qua mạng; nguồn hình được gọi đúng **một lần** trong phần \`<details>\` của M2.
- JS lab M2 (không sửa) parse PASS; bridge M2↔M3 được đọc lại sau commit và kiểm nội dung có mặt.
- **Không có chứng cứ Chromium/Safari/mobile thực cho SVG hiển thị cùng website; không claim Q07 browser PASS**, không dùng test số để suy độc lập Academic/PED PASS. Đây là một **bổ sung giải thích sư phạm và hình mới** được tác giả tự kiểm, không tạo item chấm mới.

## 3. Source lock, review có chọn lọc và bước kế tiếp

- R18 full Topic 1 immutable Git blob **\`2340ea4975b37a457363eea59dd617070934983c\`**; giữ nguyên PASS của đúng snapshot R18. R06 source transport Git blob **\`1d3d3852aa38ab90ed282349bfc769c02aac3ea3\`** là **lịch sử**, không phải manifest HEAD R08 khi M2/M3 đổi blob. Khi có lần review thật theo rủi ro, chỉ review ảnh hưởng tương ứng; không gửi tự động sản phẩm Notebook lại Notebook.
- Topic 2 #793 Academic/PED + RD1 snapshot riêng giữ nguyên. V2 #790 vẫn RELEASE-owned OPEN; \`CONTENT_READY=NO\`, \`NO_MERGE_DEPLOY\`.
- **Tiếp theo của AUTHORING:** đọc và cải thiện tiếp các điểm đứt mạch/đọc hình quan trọng của M4–M7 **chỉ khi có căn cứ**, ưu tiên QA trình duyệt thực và xem phần giải thích còn thiếu, tránh viết lại những phần R18 đã đủ, không tăng số câu để đạt quota. Nếu phát hiện sai toán/điều kiện/đáp án, sửa hoặc HOLD đúng mục, có thể dùng Notebook review khi khó quyết từ chứng cứ.

**CHECKPOINT:** \`M1_REUSED\` · \`M2_CONCEPTUAL_GAP_FIXED\` · \`M2_TO_M3_SHARED_EXAMPLE\` · \`STATIC_MATH_AND_SVG_QA_PASS\` · \`BROWSER_QA_PENDING\` · \`NO_NEW_ITEM\` · \`CONTENT_READY_NO\`.
