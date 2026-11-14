# G10 Chương VI — phục hồi ánh xạ 8 Written/Anchor R01 từ đúng đề công khai

AUDIT_ID: G10-CHVI-R01-WRITTEN8-SOURCE_BODY_OUTCOME_RECONCILIATION-20261105
ROLE: AUTHORING_ONLY
STANDARD_ID: SLM-THPT-QUALITY-ONE
STANDARD_VERSION: 1.2.0
STATUS: AUTHOR_ITEM_OUTCOME_MAPPING_PASS_R01_EXACT_SNAPSHOT_PARITY_UNPROVEN
SOURCE_PUBLIC_WRITTEN_PATH: docs/thpt-preview/thu-vien/tu-luan.md
SOURCE_PUBLIC_WRITTEN_GIT_BLOB: 4da918f36d30c9b7110099e81fc88943e5b7705b
R01_ORIGINAL_NOTEBOOKLM_RECEIPT_PATH: prototypes/thpt/THPT_G10_CHVI_NOTEBOOKLM_ACADEMIC_VERDICT_RECEIPT_20261028.md
R01_ORIGINAL_NOTEBOOKLM_RECEIPT_GIT_BLOB: 23156f35aab6ec28771a6a57d48bad74f3900e9c
R01_WRITTEN_ITEM_IDS_EXPECTED: 8
R01_WRITTEN_ITEM_IDS_FOUND_WITH_STEMS_SOLUTIONS_RUBRIC: 8
R01_WRITTEN_PRIMARY_OUTCOME_IDS_AUTHOR_MAPPED: 8
Q15_WRITTEN8_MAPPING: AUTHOR_QA_PASS
Q18_ORIGINAL_R01_FIVE_TEMP_SNAPSHOT_EQUIVALENCE: NOT_PROVEN_FROM_PUBLIC_PAGE
REQUIRES_INDEPENDENT_NOTEBOOKLM_REREVIEW: NO_UNCHANGED_MATH_NOT_REVIEW_REQUESTED
CURRENT_PUBLIC_CONTENT_CHANGED: NO
CONTENT_READY: NO
MASTERY_ACTIVATION: NO
RELEASE_AUTHORIZATION: NO

## Phát hiện và ý nghĩa

Trước đây, kiểm kê 74 canonical để trống tám mục `UNVERIFIED_WRITTEN_OUTCOME` do mới đọc receipt R01 (chỉ liệt kê item ID và role), chưa kiểm tra trang thực chứa đề. Kiểm tra **trang thư viện Tự luận trên `main`** `docs/thpt-preview/thu-vien/tu-luan.md` đã tìm được **đúng 8 thẻ** `data-thpt-written-canonical`, mỗi thẻ có **đề bài cụ thể, lời giải và bảng rubric**. Tất cả tám mã khớp duy nhất với danh sách R01, không phát hiện ID dư hoặc trùng.

Tác giả gắn primary outcome theo **nhiệm vụ chính của đề**, nhiều outcome phụ chỉ là các `outcome/role/placement` trên **một** item ID. Đó là kiểm tra Q15 dựa trên nội dung, không phải suy đoán từ chuỗi tên WRI. Mã đã có trong site không được nhân thành bản sao.

## 8 câu Written/Anchor, từng đề → outcome chính và phụ

| ITEM_ID canonical | Outcome chính (đọc từ đề) | Outcome phụ (không nhân bản) | Vai trò | Đề/lời giải/rubric gốc công khai — bằng chứng |
|---|---|---|---|---|
| `HPT-WRI-DEMO-01` | `B16_OUT_02` | `B16_OUT_04` | `SGK_WRITTEN` | **Tìm đỉnh và giá trị nhỏ nhất:** y=x²−6x+7: dạng đỉnh, I(3;−2), trục x=3, GTNN=−2 · 4 tiêu chí rubric |
| `HPT-WRI-DEMO-ANCHOR-01` | `B16_OUT_05` | `B16_OUT_04` | `SGK_WRITTEN_ANCHOR` | **Diện tích hình chữ nhật lớn nhất:** Chu vi 24m, điều kiện 0<x<12, S=−(x−6)²+36 và Smax=36 m² · 4 tiêu chí rubric |
| `HPT-G10-CHVI-WRI-15-01` | `B15_OUT_01` | `B15_OUT_02`, `B15_OUT_03` | `SGK_WRITTEN` | **Bài 15 · Bảng giá trị và tính đơn trị:** Bảng x={0,1,2,3}, f={2,4,4,8}; phân biệt hai đầu vào cùng y, domain/range, A(2;4) thuộc đồ thị B(3;4) không thuộc · 5 tiêu chí rubric |
| `HPT-G10-CHVI-WRI-15-02` | `B15_OUT_05` | `B15_OUT_02` | `SGK_WRITTEN_ANCHOR` | **Bài 15 · Mỏ neo: biểu giá từng khoảng:** Cước xe từng đoạn: 0<x≤2 giá 20, x>2 giá 20+5(x−2); ngân sách ≤50 cho 0<x≤8 · 5 tiêu chí rubric |
| `HPT-G10-CHVI-WRI-17-01` | `B17_OUT_03` | `B17_OUT_01`, `B17_OUT_02` | `SGK_WRITTEN` | **Bài 17 · Bảng xét dấu tam thức:** f=−2(x−3)(x+1), bảng dấu âm/dương/âm, nghiệm f≥0=[−1;3], f<0 ngoài · 5 tiêu chí rubric |
| `HPT-G10-CHVI-WRI-17-02` | `B17_OUT_05` | `B16_OUT_05`, `B17_OUT_03` | `SGK_WRITTEN_ANCHOR` | **Bài 17 · Mỏ neo: diện tích rào vườn:** Lưới rào 28m ba cạnh, 0<x<14, S=−2(x−7)²+98; S≥90 ⇔ 5≤x≤9 · 5 tiêu chí rubric |
| `HPT-G10-CHVI-WRI-18-01` | `B18_OUT_01` | `B18_OUT_03` | `SGK_WRITTEN` | **Bài 18 · Phương trình hai căn:** √(x²+4x+4)=√(2x+4), x≥−2; nghiệm x=−2,0, thử lại gốc · 5 tiêu chí rubric |
| `HPT-G10-CHVI-WRI-18-02` | `B18_OUT_04` | `B18_OUT_02`, `B18_OUT_03` | `SGK_WRITTEN_ANCHOR` | **Bài 18 · Mỏ neo: tam giác vuông:** Tam giác vuông cạnh x>0,5,x+1; √(x²+25)=x+1 ⇒ x=12, 5,13m · 5 tiêu chí rubric |

## Kiểm tra ý nghĩa toán và giới hạn đánh giá

- Với `HPT-G10-CHVI-WRI-15-01`, **hai x khác nhau cho cùng y** không làm sai định nghĩa hàm số. A(2;4) thuộc đồ thị, B(3;4) không thuộc; D/T có tập hợp không lặp.
- `WRI-15-02` là hàm phí **từng đoạn** với bước tại x=2 và miền có nghĩa; hai nhánh ghép cho ngân sách `0<x≤8`.
- `WRI-17-01` có tam thức mở xuống với hai nghiệm `−1,3` và dấu ngoài âm/trong dương. `WRI-17-02` có rào vườn điều kiện `0<x<14`, tối đa `98m²`, `S≥90` tương ứng `5≤x≤9`.
- `WRI-18-01`: phải nêu điều kiện `x≥−2` và kiểm nghiệm sau bình phương; `WRI-18-02`: dùng `x>0` và nghiệm độ dài `12,5,13` m.
- Hai Written demo B16 có nguồn trong cùng trang, chỉ một canonical cho mỗi bài: dạng đỉnh `B16_OUT_02` và mô hình tối ưu diện tích `B16_OUT_05`.
- **Bảo toàn R01 Academic PASS đúng snapshot**, không gán PASS mới cho public page chỉ vì nội dung nhìn có vẻ hợp lý. Đây là **AUTHORING item/outcome placement QA**, không phải vòng phản biện học thuật thứ hai.
- **Q18 còn riêng:** Tìm thấy đúng thân đề ở `main` không chứng minh file công khai **byte-level** giống từng `Temp_` trong ZIP NotebookLM R01 chưa khôi phục; không tạo receipt SHA giả và không yêu cầu NotebookLM tính hash hay tái review.
- **Q16:** nguồn này là **thư viện Written công khai có gợi ý và lời giải tự chọn**, không phải câu thi kín hay nền tảng Mastery. Các câu R04 public cuối chương khác phải giữ đáp án/rubric/HELP đến sau Final Submit khi RELEASE tích hợp. Không nhầm học liệu xem lời giải với RD1 độc lập.
- **Ràng buộc hai hành trình:** `HPT-WRI-DEMO-` có thể có placement ở Topic nếu đúng Outcome nhưng **SGK phải tự đủ**, Topic không tự được PASS từ SGK.

## Kết luận

**Đã hoàn thành mapping Q15 cho tám Written/Anchor** dựa trên chính đề đã công khai; có thể cập nhật kiểm kê 74 item từ `66/74` thành `74/74` về **định danh/ánh xạ authoring**, nhưng **không tự cấp Q18 exact-review-source PASS**. Khi ký V2, vẫn phải đáp ứng Q18 source custody trên toàn snapshot, reviewer provenance và các nguồn private RD1 nếu định sử dụng official readiness; không nhét đề/đáp án kín lên GitHub.
