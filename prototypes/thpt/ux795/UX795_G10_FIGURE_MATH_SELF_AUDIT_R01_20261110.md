# UX795 G10 — 11 SVG: QA toán/hình và khóa tài sản R01 (RELEASE evidence only)

**Ngày:** 10/11/2026. **Nhánh:** `research/thpt-crossgrade-hybrid-ux795-20261108` (PR #797). **Phạm vi:** 11 SVG mới phục vụ trang Kiến thức SGK, không bao gồm các hình cũ hoặc toàn bộ nội dung 27 bài.

**REPRODUCE:** `node scripts/test-ux795-g10-figure-math.cjs`. Bộ kiểm dùng nội dung SVG thật, Git blob SHA thật, các đoạn/thẻ tọa độ/nhãn và việc hình được tham chiếu đúng một lần trong bài của nó. Chạy qua GitHub Actions draft `UX795 G10 Draft Render QA (no deploy)`. Không nới khóa học thuật R4/Roadmap.

## Bằng chứng toán theo từng hình

| Bài | Git blob SVG (SHA-1) | Phép kiểm và kết luận trong đúng phạm vi hình |
|---|---|---|
| B02 | `c78f7e746ed8837603919f9ed8666d6f8657f0b8` | A={2,4}, B={2}: 2 thuộc A, B là tập con A, {2} không thuộc A; trong SVG phần tử 2 ở miền B, số 4 ở ngoài B nhưng trong A. |
| B06 | `1b7e617d00fe8d03ab17522d4db9937447b62f7a` | Tọa độ vẽ A(120,390), B(560,390), C(340,170) cho AC vuông góc BC, AC=BC; quy đổi AC=20 m thì AB=20√2 m, CH=10√2 m, diện tích 200 m². |
| B16 | `f18909ddb23029852e743e0d1b306781ab145a53` | Từng điểm polyline kiểm theo y=(x−1)²−4 với hệ trục đã vẽ; đỉnh (1,−4), nghiệm −1 và 3, trục x=1, miền giá trị y≥−4. |
| B17 | `6c9bb34a2b0ed260ba2da05eeaa07b4259811f8f` | f(x)=(x−1)(x−3): dương khi x<1 hoặc x>3; âm khi 1<x<3; bằng 0 ở hai nghiệm. |
| B19 | `e051724efd4ac88a3f135b1695da7bab08895df9` | P(1,4) thuộc 2x+y=6; u=(1,−2) và n=(2,1) có tích vô hướng 0; mũi tên theo tọa độ hình khớp hai vectơ. |
| B20 | `ef30404a12bbb1a9241e7efc3c5f8a4fa1a8e9ff` | H=(12/5,6/5) trên 2x+y=6, MH cùng phương pháp tuyến (2,1), |MH|=6/√5; chân hình H và đoạn MH đúng theo tỉ lệ hai trục. |
| B21 | `748e6041149f8990c1998dc3c777d8e11630c729` | Đường tròn tâm I(2,1), bán kính 3; T(5,1) nằm trên đường tròn và bán kính IT nằm ngang, tiếp tuyến x=5 thẳng đứng. |
| B22 | `c315a704a6fc87032a9dc95465999d573b6aa54f` | Các điểm đường cong khớp y²=4x; đỉnh O(0,0), tiêu điểm F(1,0), đường chuẩn x=−1. F và đường chuẩn cách đỉnh đúng 1 đơn vị. |
| B23 | `4b3aaa807855768100975b4afcd2912be99946b6` | Hai nhóm lựa chọn không trùng: 4+3=7; chọn một từ mỗi nhóm: 4×3=12 cặp. |
| B24 | `79a193e2964bd28a10fcbc1b8046e952599b32b8` | Ba người A,B,C: sáu cặp có thứ tự AB,AC,BA,BC,CA,CB; ba nhóm không thứ tự AB,AC,BC; A(3,2)=6, C(3,2)=3. |
| B25 | `1251a926fb52c1bebc5dacb5f7fdf801ec7671d5` | Tam giác Pascal năm hàng n=0..4: 1; 1,1; 1,2,1; 1,3,3,1; 1,4,6,4,1; mỗi số giữa bằng tổng hai số phía trên. |

## QA độc lập về kỹ thuật / giới hạn học thuật

- Kiểm tra logic hình học/số học 11/11 trên source SVG và đối chiếu file được tham chiếu đúng bài; SVG đều có title/desc/role, không đụng private RD1.
- B16: hướng dẫn đọc hình đã đổi thành lời giải thích cụ thể về đỉnh, trục, nghiệm và chiều biến thiên. B20: sửa công thức tọa độ chân vuông góc và khoảng cách bị hiển thị dưới dạng chữ thành MathJax; Git blob hai trang đã được cập nhật trong bảng source intake R01.
- **Không tuyên bố đã xác minh trang in SGK/SBT S1 trong báo cáo này.** Cần receipt nguồn gốc, so sánh các giả thiết/điều kiện toán và kiểm sư phạm theo bài/outcome để đóng Q18. Kết quả hình đúng không chứng minh tất cả ví dụ hoặc 27 trang Academic/PED PASS.
- Đây là bằng chứng kỹ thuật/toán từng hình để sau này đưa vào `SELF_QA_EVIDENCE_RECEIPT` đúng từng asset SHA nếu cơ chế Q18 được ban hành. Không phải receipt đã ký, không phải reviewer NotebookLM PASS, không cấp CONTENT_READY hoặc quyền phát hành.

**STATUS:** `G10_11_NEW_SVG_MATH_CHECKED / S1_RECEIPT_NOT_CLAIMED / Q18_STANDARD_CONFLICT_HOLD / NO_MERGE_NO_DEPLOY`.
