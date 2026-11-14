# R15 — Đọc trực tiếp S1 SGK/SBT G11 ChVIII: scope probability + nguồn SBT 8.27 mâu thuẫn nội tại

AUDIT_ID: SLM-SGK-WRITTEN-EXAM-COVERAGE-20261106
PACKET_ID: SLM-G11-S1-CHVIII-SCOPE-AND-ERRATUM-R15-20261106
LANE: AUTHORING_REFERENCE_ONLY
STANDARD: SLM-THPT-QUALITY-ONE v1.2.0 Q01–Q18
IMMUTABLE_D4_BASELINE: G10 31 + G11 83 + G12 124 = 238
S1_PRIMARY_PDF_VIEWED: YES
S1_BOOK_BYTES_SHA256_VERIFIED: YES
SCANNED_TEXT_OCR_USED: NO
CANONICAL_SOURCE_OR_ITEM_EDIT: 0
NOTEBOOKLM_HISTORICAL_PASS_REOPENED: NO
NEW_FORMAL_EXAM_COVERAGE_OR_GAP_VERDICT: 0
TOPIC_OR_RELEASE_IMPLEMENTATION: NO

## 1. Nguồn S1 trực tiếp từ thư mục SGK/SBT KNTT Toán 11 của chủ dự án

Đã xác định và tải nguyên bytes hai PDF từ thư mục Google Drive `KNTT TOAN 11` người dùng sở hữu/quyền truy cập, chỉ làm việc đọc tại runtime; không tải các tệp hay hình scan này lên GitHub công khai.

| Tài liệu | Bytes | SHA256 file | Chương VIII: trang in ↔ PDF (1-based, tính bìa) | Kiểm tra |
|---|---:|---|---|---|
| SGK Toán 11 KNTT tập 2 | 18,642,213 | `14ec0da7fa3d7c7365ed7f64599fc1e26484eccf1557301c57012ae64338e491` | trang in **66–80** ↔ PDF **67–81** | PDF 114 trang; bản scan ảnh, 15 trang ChVIII đã render và xem tổng quan, xem trang chi tiết ở B28/B29/B30/cuối chương |
| SBT Toán 11 KNTT tập 2 | 20,297,100 | `a7c3d5ee9770377e16d7df97c531a2bc081fa47c8266fd4ad3438cba0d04e189` | trang in **44–53** ↔ PDF **45–54**; hướng dẫn lời giải bài 8.27 trang in **110** ↔ PDF **111** | PDF 126 trang; ảnh sách chụp trực tiếp, cả vùng ChVIII B28–B30 + cuối chương và lời giải 8.27 đã render/đọc trực quan |

**Lưu ý:** file SGK/SBT chỉ là nguồn S1 để đối chiếu; SHA256 là checksum của bản PDF trên Drive hiện truy xuất, không phải source Git blob hay bằng chứng của một phiên bản sách khác. Không đính kèm ảnh, file PDF, đáp án nguyên văn lên repo.

## 2. Quyết định scope theo chính S1, liên quan R14

- SGK ChVIII gồm **B28: biến cố hợp/giao/độc lập** (trang in 66–71); **B29: công thức cộng xác suất** (72–75); **B30: công thức nhân xác suất cho hai biến cố độc lập** (76–78); bài tập cuối chương (79–80). Đã kiểm đúng offset trang in/PDF bằng ảnh page 67/68/74/78/80/81.
- SBT ChVIII trang in 44–53 (PDF 45–54) có các bài 8.1–8.28 về biến cố/hợp-giao, chọn thẻ, lớp học, khảo sát, rút thẻ, gieo đồng xu/xúc xắc, hai máy/tín hiệu hoặc các phép thử độc lập; bài toán có miền mẫu hữu hạn hoặc dữ liệu xác suất biến cố đã cho.
- **Không tìm thấy trong các ví dụ và mục bài tập ChVIII đã xem** một kiến thức bắt buộc về **chọn độc lập hai thời điểm liên tục đều trên một khoảng, dùng diện tích hình vuông để lấy P(|X−Y|≤t)**. Đây là kết luận **`NO_DIRECT_S1_METHOD_MANDATE_FOUND_IN_CHVIII`**, không phải chứng minh loại hoàn toàn mọi bài ứng dụng mở rộng hoặc các chương/chuyên đề khác.
- Do đó tình huống "hai người hẹn thư viện, người trước đợi 15 phút" từ Scribd OCR của kỳ HKII trường Nguyễn Quốc Trinh (R14) được giữ `ORIGINAL_EXAM_PDF_HOLD` và phân loại **`EXTENSION_BEYOND_EXPLICIT_CHVIII_SOURCE_SCOPE_CANDIDATE`**; không dùng nó làm căn cứ cấp `COVERAGE_GAP` hay bổ sung Written G11. Nếu sau này PDF trường xác minh, vẫn cần đối chiếu CT2018 và nguồn SGK/SBT trước khi quyết định mức năng lực hợp lệ.
- S1 SGK B30 trang in 77 (PDF trang 78) có ví dụ phép thử độc lập với hai xác suất 0,8 và 0,9 và tích 0,72, rất gần kiểu mẫu bài hai người câu cá trong OCR R14. Chứng cứ **cùng phương pháp nhân xác suất** mạnh hơn việc đếm số bài.

## 3. SBT bài 8.27 — phát hiện mâu thuẫn toán học trong bản sách đang dùng

### Chứng cứ xuất bản (không lấy từ OCR)

- **Đề SBT** tại **trang in 53, PDF trang 54**, ghi đồng thời hai biến cố A,B là **"độc lập và xung khắc"**, xác suất P(A)=0,35 và P(A∪B)=0,8.
- **Hướng dẫn–đáp số của chính SBT** tại **trang in 110, PDF trang 111**: ý (a) dùng xung khắc để suy P(B)=0,45; ý (b) lại dùng độc lập để suy P(A∩B)=0,1575; ý (c) dùng các tích cho xác suất "đúng một". Đây là nội dung math-source scanned nhìn rõ, không phỏng đoán thứ tự trang.
- Một số trang giải bài trên Internet lặp lại mâu thuẫn tương tự. Chúng là đối chứng thứ cấp, không thay thế file S1 do người dùng cung cấp.

### Chứng minh mâu thuẫn độc lập, không thay đổi đề gốc

1. Nếu A và B **xung khắc**, A∩B=∅ ⇒ P(A∩B)=0.
2. Nếu cũng **độc lập**, P(A∩B)=P(A)×P(B)=0,35×P(B). Do P(A)>0 ⇒ P(B)=0.
3. Vì vậy P(A∪B)=P(A)+P(B)−P(A∩B)=0,35, **khác 0,8**. Không tồn tại mô hình xác suất đồng thời thỏa tất cả giả thiết.
4. Cụ thể đáp án nguồn tự tạo P(B)=0,45>0 và P(A∩B)=0,1575>0, **trái xung khắc** phải P(A∩B)=0. Lời giải không hợp lệ; không có bộ đáp số a/b/c hợp lệ cho đề như in.

**Trạng thái audit:** `S1_SBT_8_27_INTERNAL_MATH_CONTRADICTION_VERIFIED_IN_OWNER_SNAPSHOT`. Phân loại `SOURCE_REFERENCE_EXCEPTION`, không mặc nhiên xem là lỗi canonical SLM, không cấp `P0/P1` của handoff mới hay tự sửa SBT; chờ đối chiếu phiên bản/đính chính chính thức của NXB nếu có. Nếu sau này dùng 8.27 làm gợi ý luyện tập thì phải đánh dấu `SOURCE_EXCEPTION_HOLD`, KHÔNG sao chép lời giải đã lỗi.

## 4. Đối chiếu ngược học liệu SLM đã duyệt

**Nguồn canonical AUTHORING Draft #710 G11 ChVIII:**
- `prototypes/thpt/content-drafts/G11_CHVIII_B28_B30_PUBLIC_CANONICAL_R00_SOURCE_LOCK.md`, Git blob **`fde4f8be91b5884b4559fef59fde46cf826c2bc9`**, bất biến; không cập nhật nội dung.
- PED/D1 **B28 §4** giải thích độc lập khác xung khắc; **B30 §3** nêu nếu hai biến cố xung khắc và cả hai P>0 thì không độc lập, đồng thời chỉ rõ trường hợp xác suất 0 là ngoại lệ cần xét.
- Actual canonical **`THPT-G11-CHVIII-B30-C05`** đưa hai biến cố xung khắc P(A)=1/3, P(B)=1/4 và kết luận không độc lập vì 0≠1/12.
- Actual canonical **`THPT-G11-CHVIII-B30-P05`** đưa hai biến cố độc lập P(A)=P(B)=1/2 và phủ định khả năng giao rỗng vì P(giao)=1/4>0.
- D4 **`THPT-G11-CHVIII-B28-W02-ANCHOR`** phân biệt độc lập/xung khắc qua phép thử chọn 1–4; ChVIII D4 B29/B30 và integrated vẫn giữ rubric/keys cũ.
- **Kết luận có phạm vi:** trên source canonical ChVIII được đọc, **không phát hiện kế thừa lời giải trái toán của SBT 8.27**. Không nhận điều này là QA toàn repo, không mở lại kết luận độc lập NotebookLM đã có hoặc đánh đồng S1 printed erratum với defect SLM.

## 5. Quyền thao tác và checkpoint

- Baseline Written vẫn **238 unique canonical IDs (31+83+124)**, source/handoff historic SHA bất biến; no item/question/answer/rubric changed, no duplicate created, no RD1 material published.
- `R14` vẫn là historical report với `S1_SCOPE_HOLD` tại thời điểm chưa đọc PDF. **R15 bổ sung chứng cứ chủ động**, cho phép thu hẹp phương pháp geometric probability thành `NO_DIRECT_S1_MANDATE_FOUND`, nhưng **source exam PDF** và trường/answer correctness vẫn HOLD. Không sửa/hồi tố R14.
- Khuyến nghị: (i) ghi cảnh báo SBT 8.27 vào authoring source exceptions để tránh trích sai; (ii) tiếp tục đề HKI/HKII thực tế có PDF/issuer verified, kết hợp review theo outcome có độ sâu; (iii) chỉ đề xuất scoped `DELTA_C` + NotebookLM khi bằng chứng S1/exam cho thấy một phương pháp thiết yếu còn thiếu và chủ dự án chấp thuận.
- Không tự merge/deploy, không phát hành, không thêm chuẩn phụ, không tạo Topic hay kích hoạt đánh giá độc lập.

CHECKPOINT: R15=S1_PDF_VISUAL_AND_BYTES_SHA_VERIFIED;G11_CHVIII_NO_GEOMETRIC_CONTINUOUS_METHOD_MANDATE;SBT_8_27_SOURCE_CONTRADICTION_CONFIRMED;SLM_B30_CANONICAL_CORRECT_IN_INSPECTED_ITEMS;NO_CONTENT_DELTA;D4_238_IMMUTABLE;ORIGINAL_SCHOOL_PDF_HOLD
