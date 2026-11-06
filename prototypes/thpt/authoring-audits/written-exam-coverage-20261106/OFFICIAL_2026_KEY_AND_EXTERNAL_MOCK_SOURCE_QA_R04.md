# R04 — Chính thức 2026: khóa nguồn đáp án Bộ + QA mâu thuẫn lời giải của đề thi thử Hà Nội (AUTHORING)

AUDIT_ID: SLM-SGK-WRITTEN-EXAM-COVERAGE-20261106
PACKET_ID: SLM-SGK-HN-EXAM-SOURCE-QA-R04-20261106
SCOPE: AUTHORING_SOURCE_CUSTODY_AND_PROBLEM_TYPE_AUDIT
CANONICAL_WRITTEN_BASELINE: 238
CANONICAL_ITEM_CONTENT_EDIT: NO
ACADEMIC_PED_PASS_REVIEW_REOPEN: NO
OFFICIAL_2026_EXAM_EVENT_VERIFIED: YES
OFFICIAL_2026_ANSWER_KEY_24_CODES_VISUALLY_VERIFIED: YES
OFFICIAL_2026_QUESTION_TEXT_ALL_PAGES_VERIFIED: NO
MOCK_PDF_VISUAL_HASH_VERIFIED: YES
EXTERNAL_ANSWER_SOLUTION_CONFLICT: ONE_CONFIRMED
FORMAL_SGK_COVERAGE_GAP_VERDICTS: 0
RELEASE_AUTHORIZATION: NO

## A. Cổng nguồn chính thức Kỳ thi tốt nghiệp THPT 2026

- Ngày thi môn Toán: **11/06/2026**; bộ đề có **24 mã** 0101–0124. Đây là **một kỳ thi quốc gia** có nhiều mã đề, không phải 24 đề độc lập cho mục đích thống kê tần suất.
- Nguồn **Báo Điện tử Chính phủ** công bố 19/06/2026, xác nhận Bộ GD&ĐT phát hành đáp án chính thức: https://baochinhphu.vn/cong-bo-dap-an-chinh-thuc-cac-mon-thi-tot-nghiep-thpt-2026-102260619180653891.htm .
- **Đường dẫn PDF bảng đáp án Toán chính thức** từ link 'Môn Toán' của báo: https://bcp.cdnchinhphu.vn/334894974524682240/2026/6/19/2-dap-an-toan-17818658533751027007569.pdf . Web PDF là **một trang, ảnh đóng dấu Bộ**; đã kiểm trực quan trang qua PDF screenshot. **Chưa có PDF bytes gốc tải về để tính SHA**, nên không đặt `OFFICIAL_KEY_FILE_SHA_VERIFIED`.
- Kiểm thử định danh **mã 0105** trong bảng đáp án chính thức: `PART_III_COUNT=6`; các kết quả theo **thứ tự riêng mã này**: `7,35 / 1152 / 1275 / 1990 / 1856 / 5,91`. Chỉ dùng làm dấu nhận diện code, **không** suy ra dạng toán từ đáp số.
- Nguồn **bản chụp đề**: VTV bài 11/06/2026, **mã 0105** https://vtv.vn/de-thi-mon-toan-tot-nghiep-thpt-nam-2026-100260611131943966.htm ; Cổng TTĐT Chính phủ đăng ảnh **mã 0102/0103** https://xaydungchinhsach.chinhphu.vn/thi-tot-nghiep-thpt-2026-de-thi-mon-toan-vua-suc-co-tinh-phan-hoa-ro-ret-119260611164121523.htm . Trang VTV có 4 ảnh đề; truy cập URL ảnh trực tiếp từ trình duyệt nghiên cứu trả `Cache miss` và chưa được xử lý thành bản trang có kiểm công thức/hình. **Không tuyên bố đã ánh xạ 6 câu trả lời ngắn chính thức sang outcome.**
- **Official exam scope:** `EVENT_AND_MINISTRY_KEY_CONFIRMED` → `EXAM_CODE_0105_QUESTIONS_VISUAL_PENDING` → `QUESTION_OUTCOME_MAPPING_PENDING`. Mọi map `PART_III_C#` từ đề thi thử 2026 **không** được coi là câu chính thức.

## B. QA nguồn bên ngoài: đề thi thử được lưu là “Sở Hà Nội, L1 2026”, Phần III Câu 2

**Thông tin snapshot**:
- Tệp nguồn do chủ dự án cung cấp qua Drive: `59_SO_HA_NOI_L1_Thi_thu_TN_THPT_2026_...pdf`; PDF file has **18 pages**; **SHA-256 `1e7fde330bbd5e3dca6a61a6be3088752c73b7c2ae9f7e74eea328fdf82dfc40`** previously registered in R03 and rechecked against current local bytes.
- Đề bài thuộc loại **đếm trang trí bảng 4×4**, dùng hai loại hình, yêu cầu **mỗi hàng và mỗi cột** đều có đúng hai ô mỗi loại. Văn bản và hình được đối chiếu trực quan.
- Trang PDF **13/18** (lời giải): in `Đáp số: 2502`, sau đó gọi A = mỗi hàng có hai, B = mỗi cột có hai, và tính `n(A∪B)`.
- Trang PDF **14/18** (lời giải): chính phương pháp 1 tìm được `n(A∩B)=90`, nhưng lại kết luận `n(A∪B)=2502`; *phương pháp 2* tiếp tục đếm đúng trường hợp cả hàng lẫn cột, kết luận `90` cách. Hai cách trong **cùng một PDF** vì vậy mâu thuẫn ngay tại điều kiện giao/hợp.
- **Kiểm chứng độc lập**: mỗi hàng có `C(4,2)=6` mẫu nhị phân; liệt kê `6^4=1296` ma trận đã thỏa điều kiện hàng; giữ các ma trận có tổng từng cột bằng 2, thu được **90** ma trận. Đây là phép đếm hữu hạn có thể tái lập bằng 4 vòng lặp trên 6 dạng hàng (không dùng lời giải PDF làm đáp án duy nhất). `2502` là kết quả đếm hợp hai tập A hoặc B, không đúng yêu cầu **cùng thỏa** hai chiều. Nếu tranh luận về từ “hoặc” trong ngôn ngữ đời thường, chính hình mẫu và Cách 2 của tài liệu nêu rõ ý định cả hàng/cột, nên **trạng thái nguồn vẫn là mâu thuẫn nội bộ rõ ràng**.
- **Trạng thái**: `EXTERNAL_REFERENCE_SOLUTION_CONFLICT_CONFIRMED`; bản PDF thứ cấp có watermark/nguồn tái đăng, **chưa xác minh bên phát hành đề gốc có phê duyệt lời giải này**. Chỉ chặn **đáp án/lời giải từ bản này** làm nguồn thẩm quyền. Câu hỏi vẫn có thể dùng làm **dạng toán tham khảo** với cờ `SOLUTION_UNTRUSTED`, sau khi xác minh nguồn gốc.
- **KHÔNG phải** `ACADEMIC_DEFECT` của item SLM; **KHÔNG** kích hoạt tái review 238 item, không sửa rubric/đề/đáp án đã PASS, không đưa đề/đáp án bên ngoài vào GitHub công khai. Đây là QA *provenance & reliability* của corpus đối chiếu.

## C. Đối chiếu lại G10 Bài 24 ở cấp nội dung, tránh GAP giả

Đã mở trực tiếp nguồn authoring V2 đã duyệt:
`prototypes/thpt/content-drafts/Temp_G10_SGK_CHVIII_FULL_R02_SOURCE_WITH_CANONICAL_REFERENCES_20261105.md`; Git blob `d4c839ef7fdcb324220de59e54e33ee37684cbcb`, thông qua G10 ChVIII handoff V2 blob `9db2361a965b5025444d8d3c5ac2526cb53871f2`.

- `G10-B24-PERMUTATION` **PED3–PED6** đã dạy lý do `n!`, chọn phương pháp hoán vị khi thứ tự quan trọng, xử lý **hai đối tượng đứng kề nhau** bằng gộp khối; tự thử trước Core xếp 4 sách A/B cạnh nhau, giải bằng `3!×2!=12` và có D6 quay lại canonical.
- Bài 24 D1/SGK đã phân biệt `P_n, A_n^k, C_n^k`, có ví dụ chọn rồi phân vai; D6 nhắc rõ **gộp khối, hoán vị nội bộ, “ít nhất một”/phần bù** và gợi `THPT-G10-B24-P04/P05/P06`.
- Canonical D4 `THPT-G10-CHVIII-W24-ANCHOR-01` luyện chọn nhóm có điều kiện không thứ tự, rồi phân vai — **không** phải minh chứng trọn một bài xếp ghế có nhiều ràng buộc thứ tự/khoảng cách.
- **Kết luận được phép**: **`B24_PERMUTATION_ADJACENCY_CONCEPT_PRESENT`** (dựa trên source V2). Không còn được mô tả dạng bài xếp người có ràng buộc như thể dự án **chưa dạy hoán vị**; cũng chưa được nói **đủ độ sâu của bài xếp 8 ghế trong mock Cổ Loa**. Đánh dấu `COMPOSITE_TRANSFER_COVERAGE_PENDING_D3_ITEM_LEVEL`, kiểm tra trực tiếp bản D3 P04–P06 và các bài luyện khác trước khi đề xuất nội dung mới.

## D. Trạng thái và quyết định tác nghiệp

- G10, G11, G12: 31 +83+124 = **238 distinct canonical D4**, không đổi 1 byte.
- Đề thi thử 2026 Hà Nội: R03 vẫn có **24 vị trí câu** đã kiểm PDF SHA/hình; phát hiện **1 mâu thuẫn lời giải ngoại bộ**. Các đề thi thử không tăng lên 24 kỳ thi và 24 câu trả lời ngắn không biến thành 24 bài Written.
- Đề thi chính thức tốt nghiệp 2026: **một event**, nguồn đáp án Bộ đã được kiểm trực quan, **0 câu được ánh xạ đến item** vì hình/bản trang đề chưa qua cổng chi tiết; tránh suy diễn từ kết quả số.
- `FORMAL_COVERAGE_VERDICT=NONE`, `GAP_PROPOSAL=NONE`, `NEW_ITEM_COUNT=0`, `TOPIC_CONTENT_READY=NO`.
- Tiếp tục ưu tiên đề HKI/HKII 2022–2026 **THPT phổ thông Hà Nội** (lớp 10–12), đồng thời xác nhận nguồn xuất xứ đề tốt nghiệp chính thức. Chuyên đề/KNTT chỉ pre-placement, không triển khai RELEASE.
