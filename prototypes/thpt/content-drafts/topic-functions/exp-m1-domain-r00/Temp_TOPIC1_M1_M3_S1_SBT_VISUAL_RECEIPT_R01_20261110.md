# AUTHORING S1/SBT visual source receipt — Chuyên đề 1 M1–M3, 10/11/2026

**Purpose:** Khóa chứng cứ trang nguồn chính xác cho phần bổ sung \`DELTA_C\` của M1–M3. Bản này là hồ sơ **truy nguồn bằng mắt từ PDF thật**, không phải lời xác nhận Academic/PED PASS hay biên bản NotebookLM.

## 1. Tệp nguồn đã mở và định danh bằng SHA-256

| Loại | File PDF người dùng cung cấp | SHA-256 PDF gốc |
|---|---|---|
| SGK KNTT Toán 10 tập 2 | \`sach-giao-khoa-toan-10-tap-2-ket-noi-tri-thuc-voi-cuoc-song (2).pdf\` | \`ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6\` |
| SBT KNTT Toán 10 tập 2 | \`sach-bai-tap-toan-10-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf\` | \`3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7\` |

SGK có **102** trang PDF, SBT có **143** trang PDF; phần được mở là ảnh scan (trang kiểm có text layer rỗng). Công cụ đọc trang hình từ PDF, không suy trang in từ tên file. SBT chỉ dùng để kiểm họ dạng bài/độ sâu; **SGK S1 quyết định kiến thức cốt lõi**.

## 2. Trang sách đã xem trực tiếp

| Sách | Phạm vi | Trang **in trong sách** | Trang **PDF 1-based** | Trang **PDF 0-based** |
|---|---|---|---|---|
| SGK Toán 10 T2 | Trang mở đầu Chương VI | **4** | **5** | 4 |
| SGK Toán 10 T2 | Bài 15 · Hàm số | **5–10** | **6–11** | 5–10 |
| SGK Toán 10 T2 | Bài 16 · Hàm số bậc hai | **11–18** | **12–19** | 11–18 |
| SBT Toán 10 T2 | Bài 15 · Hàm số | **3–9** | **4–10** | 3–9 |
| SBT Toán 10 T2 | Bài 16 · Hàm số bậc hai | **10–15** | **11–16** | 10–15 |

Đã kết xuất và xem contact sheet liên tục của **15 trang SGK PDF 5–19** và **16 trang SBT PDF 4–19** (SBT có thêm các trang B17 để nhận diện ranh giới B16). Đối chiếu trực tiếp footer trang in trên trang B15 đầu tiên và trang B16 đầu tiên: trang in 5 ↔ PDF6, trang in 11 ↔ PDF12 (SGK); trang in 3 ↔ PDF4, trang in 10 ↔ PDF11 (SBT). Contact sheet là chứng cứ kiểm tra nội bộ, không đồng nghĩa từng bài tập đã được giải/QA toàn bộ.

## 3. Những gì nguồn thực hỗ trợ

- **M1**: khái niệm hàm số, tập xác định, phép đọc bảng/đồ thị và miền đầu vào; phép kiểm căn/mẫu được mở rộng từ quy tắc đại số đã học. Ví dụ dịch vụ bán vé và chứng minh tập giá trị là **bài tự biên soạn**, không chép SGK.
- **M2**: đồ thị hàm, xác định giá trị theo điểm/trục, đọc tính đồng biến/nghịch biến và dữ liệu theo bảng; nội suy tuyến tính là **mô hình giả định** khi thiếu đo trực tiếp. Hàm từng đoạn và điểm rỗng/đặc được diễn giải bổ sung để hiểu chính xác điều kiện tại mốc.
- **M3**: khái niệm hàm bậc hai \(a\ne0\), dạng đồ thị parabol, trục/đỉnh, chiều mở và biến thiên, vận dụng bài toán có miền; SBT B16 có các bài giải tích bằng parabol và tối ưu thực tế. **Hai phép biến đổi \(y=|f(x)|\) và \(y=f(|x|)\) là enrichment do AUTHORING tự thiết kế**, chưa được chứng minh là outcome Core bắt buộc của B16. Không tự biến phần bổ sung này thành chuẩn mới hoặc bắt học sinh thuộc như SGK.
- Hình SVG và HTML Canvas R00 là hình tác giả **tự dựng mới**, không chép ảnh in SGK/SBT; cần kiểm đúng điều kiện và tọa độ từng hình theo Q07/AP3.

## 4. Sai lệch pagination trước đó và cách xử lý

Các bản pilot M3 đầu tiên chỉ ghi **SGK B16 in 13–14 / PDF14–15** vì đó là hai trang đã xem để kiểm parabol. Đây là **phạm vi hình đã xem chọn lọc**, không phải toàn bộ B16. Khi đóng gói review phải dùng **B16 đầy đủ in 11–18 / PDF12–19** (đã chỉnh tài liệu M3 và checkpoint này). M1/M2 trước đó ghi B15 in 5–10/PDF6–11 là đúng phạm vi Bài 15; trang in 4/PDF5 là trang đầu Chương VI và được kiểm để hiểu bối cảnh.

**QA của nguồn:** \`S1_PRINTED_PDF_PAGINATION_VERIFIED\`; \`SBT_PRINTED_PDF_PAGINATION_VERIFIED\`; \`S1_SBT_FAMILY_SCOPE_VISUAL_REVIEWED\`; \`FULL_ACADEMIC_PED_REVIEW=PENDING\`.

## 5. Cổng tiếp theo

Reviewer NotebookLM cần đúng **5 Permanent Sources THPT v2.1**, SGK/SBT được định danh ở trên, 3 phần Kiến thức + Luyện tập + D5 mới và bản canonical R18 chỉ làm bối cảnh. Chỉ review \`DELTA_C\` M1–M3, không mở lại PASS snapshot R18. Reviewer trả Academic/PED verdict, Q01–Q18, P0/P1/P2, MINIMAL_DELTA theo lesson/outcome/item. Khi không có bằng chứng reviewer, giữ \`ACADEMIC_REVIEW_PENDING\` và \`CONTENT_READY=NO\`.
