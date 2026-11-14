# AUTHORING QA — Chuyên đề 2 · Hình Oxyz P06 và mô hình mặt cầu–mặt phẳng P07 (R01, 10/11/2026)

**LANE:** AUTHORING · **STANDARD:** SLM-THPT-QUALITY-ONE 1.2.0 (Q01–Q18), nguồn chuẩn một bộ · **STATE:** \`D5_AUTHORING_CANDIDATES_CREATED\` · \`EXACT_SOURCE_REVIEW_PENDING\` · \`NO_CONTENT_READY\` · \`NO_MERGE_DEPLOY\`.

## 1. Căn cứ canonical giữ nguyên

- Topic 2 R02 public canonical: \`prototypes/thpt/content-drafts/topic-vector-coordinate/Temp_TOPIC_VECTOR_COORDINATE_FULL_PUBLIC_R02_20261108.md\`, Git blob **\`29669e6de80cba50a11bb8574220c6a19b4f7138\`**, 7/7 phần Academic/PED PASS theo snapshot cũ, PR #793. Không sửa source, 114 item gốc hay private RD1 (42 câu).
- **P06, phần 6/7**, ví dụ toán đã review: \(A(1;-2;3),B(4;0;-1)\), \(\overrightarrow{AB}=(3;2;-4)\), \(|AB|=\sqrt{29}\).
- **P07, phần 7/7**, ví dụ toán đã review: mặt cầu \(x^2+y^2+z^2=25\) và \((P):z=3\). Khoảng cách tâm O đến P bằng 3, bán kính R=5, giao tuyến \(x^2+y^2=16,z=3\), bán kính 4. Nội dung chỉ đặt **sau bài SGK B17 mặt cầu**, không đẩy vào Core B14.
- Hai nội dung trên là minh họa **lại bằng hình và mô hình** của ví dụ đã review, không phải đặt câu hỏi canonical, outcome hay rubric mới.

## 2. D5 thực tế đã thêm trên nhánh

| File | Tác dụng | Kiểm chính |
|---|---|---|
| \`Temp_FIG_TOPIC2_P06_AB_COMPONENTS_S1_EQUIVALENT_R01_20261110.svg\` | Ba thanh độ dời x,y,z (màu nhạt, không phải 3D phối cảnh) | +3,+2,−4; độ dài căn 29; title/desc |
| \`Temp_TOPIC2_P07_SPHERE_PLANE_INTERSECTION_LAB_D5_R00_20261110.html\` | Canvas hình chiếu mặt cầu–mặt phẳng + sơ đồ thiết diện qua tâm, slider t từ −6 đến 6; thay góc xoay và độ nghiêng; 5 nút tình huống | d=|t|, r=√(25−d²) nếu d<5, r=0 khi tiếp xúc, không giao khi d>5 |
| \`Temp_TOPIC2_SLIDE06_10_D5_SOURCE_EQUIVALENT_AUDIT_R01_20261110.md\` | Phản biện hình 6–10 Notebook về hình học không gian | slide 9 r≈3,92 đúng số nhưng chưa đủ nguồn đơn vị |

**HTML D5 exact Git blob sau sửa:** \`f5874a1e65a0db40dc77098c4356952c0f7d3043\`. Trang dùng CSS light UI, tiêu đề và nhãn ngắn gọn, chữ dẫn tự nhiên; không CDN/network, không Firebase, không mastery, không gắn vào Final Submit. Mặt phẳng màu nhạt luôn hiện cả khi **không giao**, giúp người học nhận ra vị trí hình học, thay vì chỉ ẩn đường tròn. Góc nghiêng thực sự thay đổi phép chiếu; không đo độ dài/góc từ ảnh.

## 3. Bảng tính đúng toán của giao mặt cầu–mặt phẳng

| t (z của P) | d=|t| | So d với R=5 | Kết luận | Giao tuyến (nếu có) |
|---:|---:|---|---|---|
| 0 | 0 | d<R | đường tròn lớn bán kính 5 | \(x^2+y^2=25,\;z=0\) |
| 3 | 3 | d<R | đường tròn bán kính 4 | \(x^2+y^2=16,\;z=3\) |
| −3 | 3 | d<R | đường tròn bán kính 4 | \(x^2+y^2=16,\;z=-3\) |
| 5 | 5 | d=R | tiếp xúc duy nhất tại (0;0;5) | không gọi là đường tròn bán kính dương |
| −5 | 5 | d=R | tiếp xúc duy nhất tại (0;0;−5) | như trên |
| 6 | 6 | d>R | không giao thực | không có |
| −6 | 6 | d>R | không giao thực | không có |

**Đối chiếu số:** \(5^2-3^2=16\), \(r=4\), \(\sqrt{29}\approx5{,}38516\). Nhầm lẫn có nguy cơ cao là nói “hình cắt lúc nào cũng là đường tròn”, hoặc coi \(z=t\) là mặt phẳng có bán kính mặc định cố định khi t thay đổi.

## 4. QA đã chạy, giới hạn chứng cứ

Tác giả **đọc lại exact file HTML từ GitHub HEAD** và chạy JavaScript trong V8 trên DOM+Canvas **giả lập**, ở 3 cấu hình kích thước 390, 820, 1440. Các tình huống thử tại mỗi cấu hình: 7 trạng thái t=0,3,5,6,−3,−5,−6; 3 góc nghiêng 15°/45°/85°; 1 góc xoay 180°; 5 nút preset ⇒ **16/16 mỗi cấu hình; tổng 48/48 PASS** với 0 JS exception. Hệ thức bán kính/hình cắt và thông báo chữ kiểm qua source math.

**KHÔNG gọi đây là Chromium/Playwright QA thật.** Canvas drawing đã bị mock trong test; chưa chứng minh nét chiếu, vị trí nhãn và responsive trên thiết bị. Hình SVG/HTML nguồn vẫn cần kiểm Q07 chính hình render, keyboard/touch, aria/caption, AP3 trong nhánh RELEASE. Chỉ khi hình/JS thật giữ cùng nghĩa toán của R02 và được xác nhận thì mới có thể xem xét \`DELTA_B_SOURCE_EQUIVALENT\`; nếu thành nội dung giảng giải/hoạt động sư phạm mới đáng kể hoặc phát hiện điều kiện thay đổi, phải phân \`DELTA_C\` và phản biện độc lập đúng phần.

## 5. Cổng bảo toàn

1. Không sửa R02 được nghiệm thu, không thay answer/rubric/condition/item, chỉ bổ sung asset D5 nằm ngoài canonical.
2. Khi có một nguồn hình canonical, \`FIG_ID\` có thể reuse nhiều placement nhưng không tạo bản sao hình không quản lý.
3. \`TOPIC_READINESS\` vẫn là đánh giá độc lập: không hiển thị đề/key/rubric trước Final Submit, không lấy những câu formative lộ đáp án làm kiểm tra kín, không ghi Mastery từ Canvas hoặc bài tự đối chiếu.
4. **BLOCKER #790** release intake Topic V2 còn OPEN. Kết luận nguồn đã review R02 không tự thành handoff hợp lệ hoặc website đã phát hành.

**NEXT:** đối chiếu hình trên trình duyệt thật ở các trạng thái d<R, d=R, d>R; nếu đúng source-equivalent thì đóng chứng cứ Q07 cho hình, còn nếu thay giảng giải đáng kể thì thêm vào review target đúng phạm vi. Không động tới 7/7 phần đã PASS chỉ vì thêm hình.
