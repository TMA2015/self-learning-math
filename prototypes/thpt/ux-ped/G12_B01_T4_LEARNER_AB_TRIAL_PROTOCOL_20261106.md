# G12 B01 · T4 kiểm chứng khả năng hiểu thật — A/B presentation-only
**Ngày:** 06/11/2026 · **Issue:** #742 · **Nhánh:** RELEASE research · **Trạng thái:** T4_PROTOCOL_READY / T4_REAL_LEARNER_EVIDENCE_PENDING / NO_DEPLOY

## 1. Khóa nguồn và giới hạn so sánh

- Variant A và B của prototype `G12_B01_PRESENTATION_AB_20261104.html` dùng **cùng nội dung canonical snapshot cũ** `docs/thpt-preview/sgk/lop-12/chuong-i/bai-1.md`, Git blob `7fc40081bb3f1e104e38e2c86a5bc1e8217e77cc` và cùng SVG; B chỉ thay bố cục/tiến trình thị giác và cách lộ metadata, không viết lại kiến thức. Bản pilot **không phải** production pixel-perfect.
- **Drift production cần công bố:** main tại thời điểm rà 06/11/2026 (`6baa24b86782d38348bef7d67132efefc0339516`) có blob B01 `64f6a142a88e8c4dd63dff3f7d2220787fcdec5c`. Khác ở đoạn giới thiệu cách học và §7 điều hướng sang Core/Luyện tập chương (DELTA_A_UI), trong khi các đoạn toán §1–§6 chưa đổi về văn bản. **Không coi A là bản production hiện tại**, không đánh đồng kết quả pilot với hiệu quả trên website đã phát hành.
- Chuẩn THPT đang hiệu lực trên `main`: **SLM-THPT-QUALITY-ONE v1.2.0**, Q01–Q18 (v1.1.0 trong metadata lịch sử #743 chỉ mô tả snapshot khi nghiên cứu bắt đầu). Không tạo Q19 hoặc chuẩn khác. Chủ dự án chưa phê duyệt merge/deploy prototype hay thay academic source.
- Chỉ đo hiệu quả **hiển thị cùng nguyên liệu học thuật**; phần được khảo sát là hiểu dấu đạo hàm, điều kiện trên khoảng và nhận biết cực trị. Không mở câu hỏi chính thức, không ghi Firebase, Skill Mastery, RD1 hay tên học sinh.

## Cách giao biến thể cho người học (không để nút đổi A/B)

- Mở **file HTML pilot cục bộ** `G12_B01_PRESENTATION_AB_20261104.html` ở chế độ người học bằng địa chỉ `file:///.../G12_B01_PRESENTATION_AB_20261104.html?participant=A` hoặc `?participant=B`. Người hướng dẫn quyết định A/B trước, **không để học sinh tự chọn nhóm**.
- Chế độ này ẩn nút chuyển A/B, ẩn nhãn reviewer và giữ nguyên một bản nội dung suốt lượt đọc; mặc định khi không có query vẫn là giao diện so sánh dành cho reviewer. Kiểm thử Playwright xác nhận nội dung A/B khớp chính xác với preview, SVG hiển thị và không tràn ngang trên 390/820/1440 px.
- Đây là **khóa giao diện phục vụ thử nghiệm**, không phải cơ chế bảo mật chống học sinh biết sử dụng công cụ trình duyệt. Người hướng dẫn cần giám sát để không đổi URL/quay lại/mở bản còn lại; nếu có đổi biến thể thì đánh dấu `CROSSOVER_EXCLUDED` và không dùng kết quả để kết luận A/B.
- Không gửi bản **protocol chứa rubric** hoặc tài liệu **T5 decision brief** cho người học trước khi hoàn thành phiếu. Chỉ giao phiếu `G12_B01_T4_LEARNER_WORKSHEET_20261107.md`, bản bài đọc đã phân và hướng dẫn thời lượng. Không thu tên/PII.

## 2. Đối tượng, phân nhóm và kiểm soát

Đề nghị 4–8 người học Toán 12 (nếu có thể), chưa từng đọc riêng biến thể A/B. Nếu ít người hơn, chỉ có báo cáo quan sát thăm dò, tuyệt đối không tuyên bố hiệu quả thống kê. Dùng mã vô danh P01…; không ghi họ tên, lớp/trường, địa chỉ, account, IP, ảnh mặt hoặc dữ liệu cá nhân vào repo. Phân nhóm A/B ngẫu nhiên hoặc luân phiên cân bằng theo kiến thức tiền đề; **mỗi người chỉ xem MỘT biến thể** để tránh học trước làm nhiễu kết quả.

Giữ nguyên thời lượng tối đa, thiết bị, mức trợ giúp, nguồn nội dung và câu hỏi sau học. Thời lượng gợi ý: kiểm tra tiền đề 2 phút; đọc độc lập ≤8 phút; 2 nhiệm vụ sau đọc ≤6 phút; đánh giá trải nghiệm 1 phút. Không sử dụng Gemini/AI/đáp án trong lúc thử, không xem Core/Practice trước kiểm tra; không ghi hành vi tìm đáp án như kết quả đo khả năng hiểu.

**Phiếu cho học sinh (không có đáp án):** [`G12_B01_T4_LEARNER_WORKSHEET_20261107.md`](G12_B01_T4_LEARNER_WORKSHEET_20261107.md). Chỉ người hướng dẫn dùng rubric bên dưới để chấm sau khi nhận câu trả lời; không phát protocol kèm đáp án cho người học.

## 3. Phiếu đánh giá — dùng y nguyên cho A và B

**Tiền đề (không chấm vào kết quả chính):** Em hiểu thế nào về miền xác định của hàm số? Khi f tăng trên một khoảng, điều đó có nghĩa gì khi x chạy từ trái sang phải? Ghi mức 0/1/2 để nhận diện lệch nền tảng.

**Nhiệm vụ 1 — giải thích bản chất, không cho gợi ý (0–4 điểm):**
> Dấu của f′(x) cho biết điều gì về chiều biến thiên của f trên một khoảng? Vì sao f′(x₀)=0 chưa đủ để khẳng định có cực trị tại x₀?

Chấm hai ý độc lập, mỗi ý 0/1/2: (a) 2 = dấu dương/âm gắn đúng tăng/giảm **trên khoảng thuộc miền xác định**, 1 = chỉ nêu tăng/giảm thiếu điều kiện, 0 = sai; (b) 2 = yêu cầu kiểm tra đổi dấu hoặc đưa phản ví dụ đúng như x³, 1 = nói "chưa đủ" nhưng không nêu lý do, 0 = sai. Không chấm văn phong đẹp.

**Nhiệm vụ 2 — chuyển giao chưa xuất hiện nguyên dạng trong ví dụ (0–4 điểm; CHỈ NGHIÊN CỨU, không là item canonical):**
> Một hàm f khả vi trên ℝ, có f′(x)=(x+2)(x−1). Xác định các khoảng đồng biến, nghịch biến và **hoành độ** các vị trí cực đại/cực tiểu. Hãy giải thích vì sao không chỉ dừng ở việc giải phương trình f′=0.

Chấm: (a) 2 = xác định dấu dương trên (−∞,−2), (1,+∞), âm trên (−2,1) và nêu đúng ba khoảng tăng/giảm; 1 = phần lớn đúng nhưng thiếu một khoảng; 0 = sai; (b) 2 = cực đại tại x=−2, cực tiểu tại x=1 **do đổi dấu**, không bịa tọa độ y; 1 = đúng vị trí nhưng thiếu lý giải; 0 = sai. Không dùng như đề thi chính thức, không thêm ID hoặc đáp án vào ngân hàng công khai.

**Trải nghiệm:** cho điểm 1–5 về dễ theo dõi mạch giải thích; đánh dấu đoạn cần đọc lại và nguyên nhân (ký hiệu, hình, điều kiện, câu dài, nút/tab). Ghi thời gian hoàn tất và việc có tràn chiều ngang hay phải phóng to. Không hỏi thông tin nhận dạng.

## 4. Bảng kết quả cần thu (chưa có số liệu)

| Nhóm | Số người | Tiền đề trung bình /4 | Nhiệm vụ 1 /4 | Nhiệm vụ 2 /4 | Đọc lại (lượt) | Dễ đọc /5 | Ghi chú |
|---|---:|---:|---:|---:|---:|---:|---|
| A | Chưa đo | — | — | — | — | — | Baseline prototype |
| B | Chưa đo | — | — | — | — | — | Chunked presentation |

Trước khi ra quyết định, kiểm tra: (i) chênh lệch kiến thức tiền đề; (ii) điểm giải thích và chuyển giao, không chỉ điểm dễ đọc; (iii) lỗi cần trợ giúp và điều kiện math/SVG; (iv) kích thước 390/820/1440 và việc mất nội dung/khả năng truy cập; (v) sai khác giữa A lịch sử và production hiện tại. Với n nhỏ, chỉ mô tả từng pattern/điểm chênh, không làm kiểm định ý nghĩa thống kê.

## 5. Cổng kết luận và ranh giới Delta

- **Đang có:** T2 source/outcome audit và T3 prototype A/B nguồn-khóa; browser QA prototype trên 390/820/1440 đã SUCCESS ở snapshot #743 trước đây.
- **Chưa có:** T4 phản hồi/nghiệm vụ của người học thật, so sánh năng lực độc lập, owner decision T5. Đến khi có dữ liệu: `T4_LEARNER_EVIDENCE=PENDING`, `T5_OWNER_REVIEW=PENDING`, `PRODUCTION_CHANGE=NONE`.
- Nếu B chỉ sắp xếp lại cùng văn bản/hình/metadata: đề xuất `DELTA_A_UI`, kiểm chứng AP1–AP5 và quyền owner trước khi merge/deploy **PR riêng**. Nếu cần thêm phép tương tự, viết lại giải thích, đổi điều kiện hay ví dụ: `DELTA_C_ACADEMIC_MATERIAL`, trả AUTHORING/NotebookLM phản biện đúng phần bị ảnh hưởng, không đi cửa RELEASE.
- Không thay văn bản chuẩn Q01–Q18 khi chưa có quyết định owner về yêu cầu chất lượng mới. Bất cứ thay đổi tiêu chuẩn nào vẫn dùng một file canonical và lịch sử phiên bản theo governance.

**Checkpoint:** `T4_TEST_PROTOCOL_READY / REAL_LEARNER_DATA_NOT_COLLECTED / HISTORICAL_SOURCE_LOCK_UNCHANGED / Q01-Q18_v1.2.0 / NO_MERGE_NO_DEPLOY`.
