# AUTHORING QA R03 — Chuyên đề 1 M1–M3 · D5 JavaScript + Written Q15

**Ngày:** 10/11/2026 · **Review lane:** AUTHORING · **PR:** #801 · **Scope:** chỉ \`DELTA_C\` M1–M3, không tác động R18. **STANDARD_ID:** \`SLM-THPT-QUALITY-ONE\` · **STANDARD_VERSION:** \`1.2.0\` đang hiệu lực trên \`main\` (Governance PR #744 merged 04/11/2026); một chuẩn Q01–Q18, không có chuẩn thứ hai.

## 1. QA chức năng mã JavaScript đọc trực tiếp từ blob GitHub

Ba script được trích **từ đúng file HEAD**, thực thi trong V8 với DOM giả lập gồm \`getElementById\`, \`querySelectorAll\`, \`addEventListener\`, \`setAttribute\` và một Canvas context giả lập. Kích thước \`clientWidth\` được kiểm với ba cấu hình **390, 820, 1440 px**. Toàn bộ script khởi tạo được và không phát sinh ngoại lệ; các callback của slider/toggle được kích hoạt theo tình huống dưới đây.

| Lab | Original HTML Git blob SHA | Assertions đã thử ở mỗi cấu hình |
|---|---|---|
| M1 · kiểm miền căn+mẫu | \`5e686de54b12fc8891e56343e0ed17a7cd35c505\` | x=−2,0,1,2,3 → hai đầu mút nhận, x=1/3 loại, h(0)=−2 |
| M2 · điểm nối hàm từng đoạn | \`ca77c9158fc2a57ac0c6f4f52b30f36a33330814\` | x=0,99;1;1,01;2 → các nhánh và f(x) chính xác |
| M3 · biến đổi đồ thị | \`6c150da0406f559e13a1ae9d0eca3f5565790247\` | parabol chuẩn; a=0,b≠0 tuyến tính; a=0,b=0 hàm hằng; toggle f(|x|) |

**Kết quả:** mỗi cấu hình 5+4+4 = 13 assertions; **39/39 PASS** ở môi trường **mocked DOM**. Đây là kiểm **logic chạy và phản hồi văn bản**, **KHÔNG** phải Chromium/Playwright render thật ở ba viewport: Canvas context đã mock, không so pixel; không chứng minh responsive, không kiểm browser accessibility/keyboard/screen reader/touch hay ảnh xuất thực. Chính xác cần ghi \`D5_RUNTIME_MOCK_SMOKE=39/39_PASS\` và \`REAL_BROWSER_RENDER_QA=PENDING\`.

**Tĩnh cấu trúc:** SVG M1/2/3 có \`title\` và \`desc\`, không chứa script hoặc foreignObject, có 3/3 tham chiếu ảnh đúng tên tại phần Kiến thức. Ba lab không yêu cầu CDN, fetch, network API hay eval; phần M3 không còn trình bày công thức parabol khi \(a=0\). Các thẻ MathJax trong 5 file student-facing Markdown cân bằng (inline, display và \`<details>\`), không có NUL/form-feed. Trạng thái \`SOURCE_STATIC_QA=PASS\` ở phạm vi tĩnh đã thử.

## 2. Q15 Written/Anchor source đúng nguyên bản

Đã **đọc trực tiếp** \`docs/thpt-preview/thu-vien/tu-luan.md\` trên main, blob \`4da918f36d30c9b7110099e81fc88943e5b7705b\`, so với 4 bài Written mới và bản R19:
- Gốc \`HPT-G10-CHVI-WRI-15-01\`, **5 điểm**, về bảng D/T, điểm thuộc đồ thị, cùng đầu ra không vi phạm hàm;
- Gốc \`HPT-G10-CHVI-WRI-15-02\`, **6 điểm**, về cước xe từng đoạn và ràng buộc ngân sách, gắn \`ANCHOR\` nhãn, không có ID thứ hai.

**Quyết định Q15:** không nhân bản hai câu trên trong bank Topic. \`DRAFT-T1-M1-WR02\` phiên bản cũ chỉ đổi bối cảnh miền rời rạc và cùng đầu ra, có overlap lớn với \`WRI-15-01\`; đã **thay nội dung nguồn** bằng bài suy luận \(f(x)=((x-1)\sqrt{x+1})/(x-1)\) và \(g(x)=\sqrt{x+1}\), buộc giải thích hai tập xác định, điểm khuyết \((1;\sqrt2)\) và sự mất đúng một giá trị trong tập giá trị. Lời giải tự kiểm:
\[
D_f=[-1,+\infty)\setminus\{1\},\quad D_g=[-1,+\infty),
\]
\[
T_f=[0,+\infty)\setminus\{\sqrt2\},\quad T_g=[0,+\infty).
\]
Bài mới có chiều suy luận khác nhưng vẫn \`DRAFT\`, cần reviewer phê bình độ phù hợp và trùng họ dạng với toàn bank.

**Ma trận đầy đủ cho 4 Written candidates:** \`Temp_TOPIC1_M1_M3_WRITTEN_ANCHOR_Q15_R02_20261110.md\`. Sau kiểm tra 12 item public khác (B15 6 + Topic G10 R01 6), số ứng viên mới vẫn là **17** (**13 APP + 4 Written**), ID duy nhất **về ký tự trong hai Markdown**; chưa có ID canonical mới hoặc per-item version. Các câu chỉ thay số/đề đã được loại (M1 APP07 trước đó). \`Q15_FULL_CROSS_BANK_RECONCILIATION=PENDING\` cho phần ngân hàng khác và reviewer delta; không tự gọi Q15 PASS tổng thể.

## 3. Q01/Q18 source & review

- Direct PDF S1/SBT: \`Temp_TOPIC1_M1_M3_S1_SBT_VISUAL_RECEIPT_R01_20261110.md\`; SGK B15 in5–10/PDF6–11, B16 in11–18/PDF12–19; SBT B15 in3–9/PDF4–10, B16 in10–15/PDF11–16.
- D5 descriptions: \`Temp_TOPIC1_M1_M3_D5_MATH_SPEC_REVIEW_R01_20261110.md\`, mô tả **trạng thái đúng toán** cho reviewer kiểm đối chiếu hình/code.
- Academic source R18 public blob \`2340ea4975b37a457363eea59dd617070934983c\` **không thay**; verdict snapshot PASS cũ còn nguyên. PR #801 chứa DRAFT mới \`DELTA_C_ACADEMIC_MATERIAL\`, chưa NotebookLM Academic/PED verdict. Không ghi \`CONTENT_READY\` hoặc đưa file vào \`ready/\` khi V2 #790 và review còn HOLD.
- Toàn bộ hình SVG/HTML và public candidate đã được lưu trên nhánh AUTHORING; **không có nguồn đề/key/rubric RD1 private** trong các file DRAFT này; các bài \`<details>Đối chiếu</details>\` chỉ là thực hành công khai, không ghi Mastery.
- Không lấy kết quả browser QA của site/preview từ RELEASE làm nguồn chứng minh cho chính ba HTML này, không tự thay hệ Golden hoặc phát hành.

## 4. Gates tiếp theo

1. \`ACADEMIC_PED_DELTA_C_REVIEW\`: đúng 5 Permanent Sources THPT v2.1, chuẩn hiệu lực \`SLM-THPT-QUALITY-ONE/1.2.0\`, SGK/SBT S1 và snapshots; trả verdict theo M1–M3/outcome/item/FIG.
2. \`Q15\`: reviewer xác nhận các bài ứng viên thực sự bổ sung độ sâu và duy nhất; xử lý placement/role của existing Written/Anchor và ngân hàng canonical cùng một nguồn.
3. \`D5_REAL_RENDER\`: chủ yếu QA khi RELEASE tiếp nhận, nhưng AUTHORING vẫn phải kiểm trục, đường, điểm và điều kiện toán khi có ảnh render.
4. Sau Academic/PED PASS scoped, soát Q01–Q18 và A1–A7, khóa SHA **cả phần bổ sung** và receipt; chỉ bàn giao khi đúng contract V2, tuyệt đối không lấy R18 PASS để tự khép DELTA_C.

**VERDICT CỦA AUTHORING:** \`SOURCE_QA_PASS_WITH_LIMITATIONS\`; \`MOCKED_JS_39_OF_39_PASS\`; \`WRITTEN_DIRECT_SOURCE_CHECK_DONE\`; \`NEW_MATH_DELTA_C_REVIEW_PENDING\`; \`REAL_BROWSER_QA_PENDING\`; \`CONTENT_READY=NO\`; \`NO_MERGE_DEPLOY\`.
