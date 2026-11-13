# Cơ sở thiết kế mô hình tương tác THPT · AUTHORING ADDENDUM R01

**Đã đối chiếu quyết định chủ dự án ngày 09–10/11/2026:** giao diện sáng theo Golden R4, typography system-ui/Segoe UI, responsive và thao tác bàn phím/touch; sửa những sai lệch toán/phạm vi đã nhận diện trong kiểm toán bộ 10-in-1. Đây là **hướng dẫn triển khai chứng cứ Q07/PED4/PED1–PED6 theo cùng `SLM-THPT-QUALITY-ONE v3.1.0`**, không phải chuẩn chất lượng thứ hai, không thay đổi source SGK/Topic đã PASS.

**Nguồn quyết định đã xác minh:**
- `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_THPT_10IN1_INTERACTIVE_MODEL_SOURCE_AUDIT_AND_PLACEMENT_R01_20261110.md` trên PR #801, Git blob `d1ef83c7211c6ccb7e476da9dedcb19644250b55`: đánh giá đúng/sai 10 mô hình và màu sắc hệ thống.
- Ba mô hình HTML thật đã tồn tại trên PR #801/#793, tái sử dụng **nguồn Git SHA bất biến** thay vì viết bản sao; 11 mô hình bổ sung thuộc đúng một HTML tự chứa `prototypes/thpt/content-drafts/interactive-models/Temp_THPT_SHARED_DISCOVERY_MODELS_11IN1_R01_20261113.html`, blob `c651372f2fc4b41ed17d1af00be29895a1da6a54`.
- 10-in-1 gốc dark/có lỗi khởi tạo/tab/công thức **không** làm nguồn publish. Snapshot học liệu CĐ01–CĐ14 vẫn bất biến; model addendum là Delta C/PED/Q07 **chỉ trên phần mô hình, chờ targeted Q18 và browser QA**.

## Thiết kế giao diện chung

- Trắng `#fff`, header xanh nhạt `#eaf4fa`, mặt mô hình `#fafdff`, viền `#c7dfe9`, chữ `#183b54`, đồ thị xanh `#1687b4` / `#218f73`, điểm chọn cam `#e9922a`. Font `system-ui,-apple-system,"Segoe UI",Arial,sans-serif`. Dùng cùng khoảng cách và kích thước điều khiển Golden UI; không tạo theme dark riêng.
- Kịch bản bên trong kiến thức: **Vì sao cần biết → Dự đoán → Điều chỉnh/kéo → Quan sát hình và số → Giải thích điều kiện → Vận dụng → Đối chiếu tự mở**. Không gắn nhãn kỹ thuật D1/PED lên màn hình học sinh. Mô hình chỉ hỗ trợ ý nghĩa, không thay phần lý thuyết/ví dụ/Tự thử bắt buộc.
- Ở trang Topic vẫn chính xác **Kiến thức / Luyện tập / Tự kiểm tra**; mọi mô hình nằm *trong đúng đoạn kiến thức* gần outcome liên quan, **không** thêm tab mô hình hoặc thư viện ở lúc này.
- Một `MODEL_ID` canonical chỉ có **một source** Git SHA, nhiều `placement` tham chiếu; SGK/Topic có thể đặt cùng model nhưng không nhân bản. `MODEL_ID` **khác `ITEM_ID`**: thao tác thanh trượt không tự tạo bài kiểm tra/cấp Mastery; câu Vận dụng nếu cần chấm được quản lý bằng `ITEM_ID` canonical riêng.
- Mô hình phải hoạt động offline không CDN, màn hình 390/820/1440, nhập bằng bàn phím và touch, focus rõ, canvas DPI và có mô tả số văn bản hỗ trợ screen reader. Cần QA hình thực tế, xác minh nhãn trục/đơn vị/tình huống biên/toán, không suy PASS từ SVG tĩnh.
- Người dùng chưa được cấp quyền RELEASE: không đổi URL, Firebase, code production, Final Submit, RD1, Mastery hoặc Golden R4 website; chỉ model assets và placement review trong AUTHORING.

## Phân phối 14 mô hình và 3 nguồn tái sử dụng

| Topic | MODEL_ID | OUTCOME_ID / đoạn đặt | Mô hình | SOURCE_TYPE | SOURCE_SHA | QA_STATE |
|---|---|---|---|---|---|---|
| CĐ01 | `SLM-TOP01-TRUTH-01` | `TOP01-O01` — Từ lời khẳng định đến chứng cứ | Bảng chân trị p∧q, p∨q, p⇒q | NEW_SHARED_RUNTIME | `c651372f2fc4b41ed17d1af00be29895a1da6a54` | AUTHORING_BROWSER_PENDING |
| CĐ02 | `SLM-TOP02-QUADRATIC-01` | `TOP02-O02` — Tại sao nghiệm của tam thức chia trục số thành các khoảng? | Dấu của f(x)=x²−k theo x,k | NEW_SHARED_RUNTIME | `c651372f2fc4b41ed17d1af00be29895a1da6a54` | AUTHORING_BROWSER_PENDING |
| CĐ03 | `SLM-TOP03-SQUARING-01` | `TOP03-O09` — Nếu một vế chứa căn, điều kiện dấu của vế kia | Bình phương căn có nghiệm ngoại lai x=−1 | NEW_SHARED_RUNTIME | `c651372f2fc4b41ed17d1af00be29895a1da6a54` | AUTHORING_BROWSER_PENDING |
| CĐ04 | `SLM-TOP04-EXPLOG-01` | `TOP04-O09` — Từ phép tính sang đồ thị hàm mũ và lôgarit | Cơ số 0<a≠1, cặp hàm ngược | NEW_SHARED_RUNTIME | `c651372f2fc4b41ed17d1af00be29895a1da6a54` | AUTHORING_BROWSER_PENDING |
| CĐ05 | `SLM-TOP05-GRAPH-01` | `TOP05-O10` — Một điểm dịch đi, cả đồ thị dịch theo | Biến đổi đồ thị a,b,c và trị tuyệt đối | EXISTING_CANONICAL_REUSE | `5bc8204f8bd024f30a73230231857210f1ce2123` | AUTHORING_BROWSER_PENDING |
| CĐ06 | `SLM-TOP06-UNIT-CIRCLE-01` | `TOP06-O01` — Từ một vòng quay đến hai tọa độ | Đường tròn đơn vị ↔ đồ thị sin | NEW_SHARED_RUNTIME | `c651372f2fc4b41ed17d1af00be29895a1da6a54` | AUTHORING_BROWSER_PENDING |
| CĐ07 | `SLM-TOP07-SEQUENCE-01` | `TOP07-O11` — Khi mỗi bước nhân theo cùng một tỉ lệ | CSC vs CSN theo n nguyên dương | NEW_SHARED_RUNTIME | `c651372f2fc4b41ed17d1af00be29895a1da6a54` | AUTHORING_BROWSER_PENDING |
| CĐ08 | `SLM-TOP08-LIMIT-01` | `TOP08-O13` — Giới hạn hai phía và giá trị hàm tại điểm | Giới hạn một bên, chọn b để liên tục | NEW_SHARED_RUNTIME | `c651372f2fc4b41ed17d1af00be29895a1da6a54` | AUTHORING_BROWSER_PENDING |
| CĐ09 | `SLM-TOP09-TANGENT-01` | `TOP09-O01` — Từ tốc độ trung bình đến độ dốc tại một điểm | Cát tuyến tiến đến tiếp tuyến, đồng thời đồ thị f′ | EXISTING_CANONICAL_REUSE | `ebf1f392dcc77fa5c94a2bfd75f500bd97dd7ae5` | AUTHORING_BROWSER_PENDING |
| CĐ10 | `SLM-TOP10-BOX-01` | `TOP10-O29` — Mô hình tối ưu và miền khả thi | Cắt tấm vuông làm hộp, V(x), tối ưu x=2 | NEW_SHARED_RUNTIME | `c651372f2fc4b41ed17d1af00be29895a1da6a54` | AUTHORING_BROWSER_PENDING |
| CĐ11 | `SLM-TOP11-RIEMANN-01` | `TOP11-O11` — Diện tích dưới đồ thị và tổng hình chữ nhật | Riemann midpoint x², n, sai số 2/(3n²) | NEW_SHARED_RUNTIME | `c651372f2fc4b41ed17d1af00be29895a1da6a54` | AUTHORING_BROWSER_PENDING |
| CĐ12 | `SLM-TOP12-SSA-01` | `TOP12-O08` — Tình huống hai cạnh một góc SSA | Số nghiệm 0/1/2 với A=30°,a=8,b thay đổi | NEW_SHARED_RUNTIME | `c651372f2fc4b41ed17d1af00be29895a1da6a54` | AUTHORING_BROWSER_PENDING |
| CĐ13 | `SLM-TOP13-DOT-01` | `TOP13-O09` — Tích vô hướng qua góc và hình chiếu | Kéo đầu vectơ, kiểm dot và hình chiếu | EXISTING_CANONICAL_REUSE | `06ee0ce3e13cbfa92e0201dd2ee634bf1775b18e` | AUTHORING_BROWSER_PENDING |
| CĐ14 | `SLM-TOP14-PARABOLA-01` | `TOP14-O21` — Parabol: cách đều tiêu điểm và đường chuẩn | y²=2px p>0, F(p/2,0), đường chuẩn | NEW_SHARED_RUNTIME | `c651372f2fc4b41ed17d1af00be29895a1da6a54` | AUTHORING_BROWSER_PENDING |

**Địa chỉ mở 11 mô hình mới:** `prototypes/thpt/content-drafts/interactive-models/Temp_THPT_SHARED_DISCOVERY_MODELS_11IN1_R01_20261113.html?model=<MODEL_ID>`. Dùng **một** engine với 11 `MODEL_ID` chọn bằng query; mô hình không có 'chọn đề tài' dạng tab cấp hai. Nếu model không tồn tại hiển thị cảnh báo rõ, không tự chọn thay. Địa chỉ chỉ là đề xuất cho RELEASE khi chuyển asset vào site thực, **chưa phải link website đã chạy**.

**Ba mô hình tái sử dụng từ bản Git đã có:**
- CĐ05: `SLM-TOP05-GRAPH-01` → `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_TOPIC1_M3_GRAPH_TRANSFORM_LAB_D5_R00.html`, original AUTHORING branch `authoring/topic-functions-m1-domain-depth-d5-20261110`, Git blob `5bc8204f8bd024f30a73230231857210f1ce2123`.
- CĐ09: `SLM-TOP09-TANGENT-01` → `prototypes/thpt/content-drafts/topic-functions/exp-m1-domain-r00/Temp_TOPIC1_M6_TANGENT_DERIVATIVE_TWO_GRAPHS_D5_R00_20261110.html`, original AUTHORING branch `authoring/topic-functions-m1-domain-depth-d5-20261110`, Git blob `ebf1f392dcc77fa5c94a2bfd75f500bd97dd7ae5`.
- CĐ13: `SLM-TOP13-DOT-01` → `prototypes/thpt/content-drafts/topic-vector-coordinate/exp-notebook-d5-equivalent/Temp_TOPIC2_VECTOR_DOT_PRODUCT_PROJECTION_LAB_D5_R00_20261110.html`, original AUTHORING branch `authoring/topic-vector-coordinate-scope-r00-20261108`, Git blob `06ee0ce3e13cbfa92e0201dd2ee634bf1775b18e`.

## Các cổng kiểm toán nội dung mô hình (không nới Q01–Q18)

1. **Toán:** CĐ01 logic p⇒q, CĐ02 dấu tam thức Δ, CĐ03 nghiệm ngoại lai, CĐ04 cơ số a≠1, CĐ06 độ/radian và chu kỳ, CĐ07 chỉ số nguyên n, CĐ08 một bên ở x=0, CĐ10 miền 0<x<6 và max V=128, CĐ11 hội tụ tổng trung điểm cho x², CĐ12 SSA có 0/1/2 vị trí và loại AB=0, CĐ14 quy ước parabol y²=2px,p>0. CĐ05/09/13 giữ toán của mô hình canonical đã có, kiểm browser tích hợp lại.
2. **PED:** một thay đổi thao tác phải gây quan sát và giải thích **cụ thể**; không chỉ đổi số mà không có suy luận, không chuyển quyền giải đáp cho mô hình, có đề Vận dụng và nút Đối chiếu.
3. **UI:** click/touch/key, focus, canvas không mờ hoặc cắt giá trị trục, không tràn ngang và no JS error; 390/820/1440; chế độ offline với CDN blocked; mô tả văn bản thay canvas; no autoplay/âm thanh.
4. **An toàn:** hoạt động `PUBLIC_DISCOVERY_NO_MASTERY`, không chứa private RD1, gợi ý/đáp án tự thử không tự đi vào đề Final Submit, không ghi tiến độ. Xuất/ẩn quan sát không phải tác vụ chấm.
5. **SHA:** mỗi model mới pin shared engine Git blob `c651372f2fc4b41ed17d1af00be29895a1da6a54`; 3 model cũ pin old source SHA. Trước tích hợp cần kiểm hợp đồng alias/ref/site path; nếu source thay đổi và có thay đổi math/PED thì targeted Q18 Delta C (theo Source07), bảo toàn PASS snapshot khác.

## Phạm vi lộ trình đã được chủ dự án giao

- **CĐ01–CĐ14:** bổ sung mô hình vào *hồ sơ AUTHORING* bằng placement ledger song song với 14 nguồn đã khóa. Đây là **giai đoạn A**: mô hình có HTML thật, một `MODEL_ID` và mapping; chỉ được cập nhật `CONTENT_READY` toàn gói khi targeted Q18/AP/model QA đủ và linker thực giải quyết được nguồn. Không tuyên bố đã nhúng chạy trong trang kiến thức khi chưa có bản dựng HTML website.
- **Từ CĐ15:** biên soạn **đồng thời** học liệu và ít nhất một mô hình có lý do sư phạm nếu outcome phù hợp; nếu không phù hợp phải giải thích rõ. Mô hình được source-lock và QA targeted **trước handoff V2**.
- **Sau CĐ22:** đề xuất `THPT_INTERACTIVE_MODEL_LIBRARY` như **chỉ mục tra cứu bổ trợ** dùng cùng `MODEL_ID` và source hash, tìm theo lớp/chủ đề/outcome; không tạo trang Kiến thức thứ tư hay thay kiến thức của từng Topic. Việc thêm menu/trang mới thuộc **RELEASE + owner quyết định riêng**, hiện **chưa thay site**.

## Chính sách đóng gói và blocker

- `MODEL_DESIGN_SOURCE_READY` chỉ là mã/metadata đang có; **chưa là Academic/PED PASS hoặc website QA**. Các PR CĐ01–CĐ14 `CONTENT_READY` cũ tiếp tục bất biến; **Delta model là scope mới**, không tự mở lại tất cả nội dung toán cũ.
- Khi mô hình mới có thay đổi sư phạm/giải thích, đặt `DELTA_C_ACADEMIC_MATERIAL` và làm Q18 `AUTHOR_SELF_VERIFIED` hoặc targeted NotebookLM theo owner. Không âm thầm đổi câu, đáp án/rubric hay self-check. Nếu có lỗi toán P0/P1, `MODEL_DELTA_HOLD` đúng mô hình, không lấy CI cũ làm PASS mới.
- Trước chuyển sang tích hợp, RELEASE phải nhận **bản source có mặt trong một commit/branch thực và mô hình được dẫn chiếu bằng `MODEL_ID` có thể phân giải**, rồi QA Golden/AP/Q16/CI trên final HEAD. Không sửa website trong AUTHORING.
