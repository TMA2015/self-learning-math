# Hà Nội THPT phổ thông · R02 đối chiếu câu có mã trong bản PDF (text read; page imagery HOLD)

AUDIT_ID: SLM-SGK-WRITTEN-EXAM-COVERAGE-20261106
PACKET_ID: SLM-SGK-HANOI-ORDINARY-EXAM-PDF-TEXT-R02-20261106
AUTHORING_ONLY: YES
BASELINE: 238 D4 canonical item IDs, unchanged
EXAM_REFERENCE_WINDOW: 2022-2026
SOURCE_SCHOOL: THPT_VAN_XUAN_HOAI_DUC_HANOI
EXAMS_TITLED_2025_2026: 2
PDF_TEXT_EXTRACTED: YES
PDF_PAGE_IMAGE_VERIFIED: NO
PDF_BYTES_OR_SHA256_CUSTODIED: NO
OFFICIAL_SCHOOL_ATTACHMENT_VERIFIED: NO
QUESTION_REFERENCE_TEXT_LOCATED: 4
COVERAGE_VERDICTS: 0
ACADEMIC_RE_REVIEW: NO
RELEASE_AUTHORIZATION: NO

## Trạng thái chứng cứ

Đã mở trực tiếp hai đường dẫn `application/pdf` công khai, có tiêu đề trường/lớp/năm, phân khu câu và nhãn in trang; **không phải chỉ đọc tóm tắt HTML**. Máy tìm kiếm đọc được văn bản PDF thực sự, nhưng API ảnh chụp/screenshot trang PDF trả lỗi `Cache miss` sau khi thử trực tiếp, và không tải được byte PDF về máy kiểm tra. Vì vậy chỉ có thể xác nhận chính xác **chữ và vị trí câu được trích**; chưa xác minh toàn bộ ký hiệu toán, dấu, hình vẽ, mức độ khó từ visual, nguồn trường gốc hoặc file SHA. Mức chứng cứ hợp lệ là `PDF_TEXT_QUESTION_REFERENCE_LOCATED_VISUAL_PENDING`, **KHÔNG** phải `CORPUS_VERIFIED` hay `COVERAGE_PASS`.

### Hai bản PDF có text index đọc được

| EXAM_SOURCE_ID | Đề, mã, vị trí | URL bản PDF lưu | Provenance | Hiện trạng |
|---|---|---|---|---|
| `HN-VX-2026-HK1-G10-PDF` | THPT Vạn Xuân–Hoài Đức, Toán 10, cuối HKI 2025–2026, mã đề **101**, 3 trang; Phần IV **Câu 1–3** trang in **3/3** | https://file.toan12.edu.vn/file-pdf/de-cuoi-hoc-ky-1-toan-10-nam-2025-2026-truong-thpt-van-xuan-ha-noi.pdf | `SECONDARY_PDF_MIRROR_TEXT_READ`; tiêu đề trường/năm/mã đọc từ đề | `PDF_TEXT_QUESTION_REFERENCE_LOCATED_VISUAL_PENDING` |
| `HN-VX-2026-HK1-G12-PDF` | THPT Vạn Xuân–Hoài Đức, Toán 12 cuối HKI 2025–2026, phần **ĐỀ LẺ**, Phần IV **Câu 1–3** trang in **4/8**; file 8 trang đề lẻ/chẵn (kèm giải) | https://file.toan12.edu.vn/file-pdf/de-cuoi-hoc-ky-1-toan-12-nam-2025-2026-truong-thpt-van-xuan-ha-noi.pdf | `SECONDARY_PDF_MIRROR_TEXT_READ`; chưa xác nhận file nguyên bản từ trường | `PDF_TEXT_QUESTION_REFERENCE_LOCATED_VISUAL_PENDING` |

## Ba mapping có thể phân tích bằng phần chữ và một mapping chỉ nhận diện phạm vi

| EXAM_SOURCE_ID : locator thực trên trang | Diễn giải dạng toán thực được nêu trong PDF | Outcome ứng viên | Written canonical bất biến được kiểm tra | Phân loại **ứng viên** (không phải verdict) | Phần bắt buộc xác minh tiếp |
|---|---|---|---|---|---|
| `HN-VX-2026-HK1-G10-PDF:IV.C3`, trang 3/3 | Quảng cáo hai kênh Radio/MXH, ngân sách chặn trên, thời lượng radio tối thiểu, MXH tối đa; chọn thời lượng tối ưu theo số người tiếp cận | `G10-B04-LINEAR_OBJECTIVE` | `THPT-G10-CHII-W04-ANCHOR` | `TEXT_VERIFIED_METHOD_FAMILY_MATCH`: cùng lập miền nghiệm tuyến tính và tối đa hàm mục tiêu; canonical W04 có thêm điều kiện nguyên và cách xét đỉnh | Chữ rõ nhưng bản đồ thị/đáp án/giải đầy đủ và cách diễn đạt **tổng thời lượng** chưa kiểm bằng trang ảnh; so thêm D3 B04 |
| `HN-VX-2026-HK1-G10-PDF:IV.C2`, trang 3/3 | Tam giác vuông và vectơ với các yêu cầu tính độ dài/tập hợp điểm, công thức vectơ chứa nhiều hệ số | `G10-B08-MIDPOINT`, `G10-B09-MIDPOINT_CENTROID`, `G10-B11-APPLICATION` (tạm) | `THPT-G10-CHIV-W08-ANCHOR`, `THPT-G10-CHIV-W09`, `THPT-G10-CHIV-W11-ANCHOR` — chỉ đăng ký tìm nguồn, **chưa khẳng định khớp đề** | `FORMULA_VISUAL_BLOCKED_OUTCOME_CANDIDATE_ONLY`; biểu thức vectơ và dấu trị tuyệt đối/độ dài từ text bị rời, không được diễn giải chắc chắn | Trang PDF render và đọc hình/công thức; đối chiếu chính xác D1/D3/D4 mới kết luận dạng nào |
| `HN-VX-2026-HK1-G12-PDF:DE_LE:IV.C2`, trang 4/8 | Ba flycam với ba tọa độ thực địa (bắc/nam/đông/độ cao), tìm góc ba vị trí ở không gian; phải lập vectơ và tích vô hướng | `G12-CHII-B08-O04`, `G12-CHII-B08-O05`, `G12-CHII-B06-O05` | `THPT-G12-B08-W04`, `THPT-G12-B08-W05`, `THPT-G12-B06-W05` | `CANDIDATE_MULTI_OUTCOME_TRANSFER`: W04 luyện tích vô hướng/kiểm khác 0; W05 khoảng cách; B06 W05 tính góc từ độ dài/tích; **không tự nhận một bài đã chứa toàn bộ mô hình flycam** | Kiểm đúng vị trí các điểm, trục tọa độ, góc tại flycam nào, quy ước góc trong PDF/đáp án; dò thêm D3 B06–08 và các đề khác |
| `HN-VX-2026-HK1-G12-PDF:DE_LE:IV.C3`, trang 4/8 | 25 lần đo thời gian giải Rubik, số liệu ghép nhóm, tìm khoảng tứ phân vị IQR có làm tròn | `G12-CHIII-B09-O04`, `G12-CHIII-B09-O05`, `G12-CHIII-B09-O06` | `THPT-G12-B09-W04`, `THPT-G12-B09-W05`, `THPT-G12-B09-W06` | `TEXT_VERIFIED_METHOD_FAMILY_MATCH`: đã luyện nhóm chứa Q1/Q3, nội suy, tính IQR và nhận xét giới hạn xấp xỉ; không copy đề trường | Bảng 25 lần bị biến mất khỏi text PDF, nên **cần xem ảnh bảng** mới xác nhận cỡ lớp, tính toán, tần suất và mức độ giống/different |

## Bằng chứng đối chiếu canonical đã PASS, không sửa nội dung

- G10 ChII `THPT-G10-CHII-W04-ANCHOR` trong `docs/thpt-preview/thu-vien/tu-luan-chuong-ii.md`, Git blob `6ff217b4c24a248a8120bc1f964476b4966eca83`: xưởng A/B, (x+2y\leq 10\), (3x+y\leq 15\), hàm P tuyến tính, miền tứ giác, xét điểm cực biên và ràng buộc số nguyên; **đúng phương pháp nền của bài quảng cáo**.
- G12 ChII nguồn AUTHORING `prototypes/thpt/content-drafts/G12_SGK_CHII_B06_B08_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md`, blob `856a37bd16d2746ffc2e12906de18d1f4338a3b6`, D4 `W04` tích vô hướng và điều kiện khác 0, `W05` độ dài trong không gian, `B06-W05` góc từ tích vô hướng; liên kết cùng **nguồn gốc**, không ghép thành câu mới.
- G12 ChIII nguồn AUTHORING `prototypes/thpt/content-drafts/G12_SGK_CHIII_B09_B10_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md`, blob `4e8e462a5c2243583be8c71625a9be3095e48c7b`: `B09-W04` định vị nhóm Q; `W05` nội suy và IQR; `W06` so sánh IQR giữa hai mẫu. Giữ nguyên rubric/5, không tự tái nghiệm thu.
- Tất cả 7 canonical tham chiếu trong ba dòng có đối chiếu phương pháp và 3 ứng viên cần hình đều là **một trong 238 IDs** của baseline. Cùng ID có thể xuất hiện ở nhiều dòng mapping; không thêm câu nào.

## Quyết định biên tập tại snapshot này

- `CORPUS_VERIFIED=NO`, vì thiếu kiểm ảnh trang, SHA file và đối chiếu đầu mối trường.
- `FORMAL_COVERAGE_VERDICT=NONE`, `PROPOSED_NEW_ITEMS=0`, `SOURCE_EDIT=0`.
- Không suy rằng bài toán flycam buộc phải có một Written mới chỉ vì các kỹ năng hiện phân bố qua nhiều câu; cần phân biệt **khả năng vận dụng tích hợp** với **thiếu outcome**. Nếu phát hiện thiếu phức hợp thực sự qua nhiều đề trường phổ thông, báo chủ dự án với bằng chứng sau khi kiểm D3 + D4.
- Các đề thi chuyên/HSG/SAT/ATC vẫn loại khỏi corpus. Bài ôn tập, ma trận/đề cương và đề thi thật phải có loại nguồn khác nhau.
- Tiếp tục đối chiếu đề HKII Toán 10/11 và đề Toán 12 tốt nghiệp chính thức theo đúng source policy; không bắt đầu phát triển Topic hoặc RELEASE.
