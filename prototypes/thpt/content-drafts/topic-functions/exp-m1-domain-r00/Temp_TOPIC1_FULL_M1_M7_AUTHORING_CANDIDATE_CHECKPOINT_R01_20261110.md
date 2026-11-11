# Chuyên đề 1 · Hàm số và đồ thị · AUTHORING source-complete candidate checkpoint R01

**Ngày:** 10/11/2026 · **TRẠNG THÁI:** \`AUTHORING_BASELINE_7_OF_7_PRESERVED\` + \`M1_M3_ENRICHMENT_SOURCE_COMPILED\` · \`NEW_CONTENT_SELF_QA_LIMITED_ACCEPT\` · \`INDEPENDENT_DELTA_REVIEW_HOLD\` · \`CONTENT_READY=NO\` · \`NO_MERGE_DEPLOY\`.

## 1. Điều gì đã đủ nguồn, điều gì chưa được cấp quyền?

- **Bản chuẩn của Chuyên đề 1:** R18 là một nguồn công khai hoàn chỉnh **7 mạch M1–M7**, có Academic/PED PASS **theo đúng snapshot đã review** và 30 private RD1 nằm ở kho bảo mật riêng. Git blob **\`2340ea4975b37a457363eea59dd617070934983c\`**, PR #782; **không thay đổi** khi làm gói này.
- **Phần phát triển mới:** M1–M3 có 3 bài giải thích bổ sung và luyện tập sâu hơn, **4 SVG** (gồm hình dịch đồ thị có kiểm miền), **3 HTML tương tác**, **17 ứng viên item công khai** gồm **13 APP + 4 Written**. Không đặt một template cứng. Các bài R00 là \`DELTA_C_ACADEMIC_MATERIAL\`, **chưa** gộp vào R18 và **chưa** được reviewer xác nhận.
- **M4–M7:** không tự viết lại học liệu đã PASS chỉ vì Notebook có cách viết khác. R18 đã có lần lượt **5, 2, 5, 6** tham chiếu hình SVG gốc, ví dụ có suy luận và đường D6. Việc dùng lại hình/item gốc ở nhiều placement phải theo **Q15 một nguồn canonical**.
- **Nhánh người học:** \`Kiến thức / Luyện tập / Tự kiểm tra\`; bản đồ/chặng chỉ bên trong \`Kiến thức\`. Mọi nút xem lời giải của bài công khai dùng **Đối chiếu**, nhãn hoạt động là **Vận dụng**. Không có câu Private RD1 body trong nguồn Github.
- **Không tự cấp PASS:** Chủ dự án cho phép tự chọn nội dung Notebook sau khi kiểm nguồn/toán, nên AUTHORING chấp nhận ở mức **bản thảo đã tự kiểm** các ý đúng và hữu ích. Tuy nhiên, theo một chuẩn hiệu lực \`SLM-THPT-QUALITY-ONE/1.2.0 Q01–Q18\` và Project Source 07 v1.1, thay đổi có nội dung học thuật mới \`DELTA_C\` vẫn cần **phản biện độc lập đúng phần ảnh hưởng** trước khi gắn Academic/PED PASS và \`CONTENT_READY\`. Nếu thay đổi chính yêu cầu độc lập, phải có \`STANDARD_CHANGE_REQUEST\` được chủ dự án phê duyệt, không tự tạo đường self-PASS thứ hai.

## 2. Những kết luận đã tự kiểm bằng nguồn độc lập

**S1/SBT:** SGK KNTT G10 T2 B15 trang in 5–10/PDF6–11, B16 in11–18/PDF12–19; SBT B15 in3–9/PDF4–10, B16 in10–15/PDF11–16, SHA256 PDF thực trong \`Temp_TOPIC1_M1_M3_S1_SBT_VISUAL_RECEIPT_R01_20261110.md\`. Khối lượng nội dung tự biên soạn mở rộng được đặt đúng trạng thái enrichment chứ không thành Core.

**Toán của phần bổ sung:**
- \(D_{\sqrt{4-x^2}/(x-1)}=[-2,1)\cup(1,2]\), nhận −2 và 2, loại 1; căn bằng 0 ở tử không là lỗi.
- Hàm từng đoạn \(f(x)=x+1\) khi x<1, bằng 3 khi x≥1: \(f(1)=3\); \((1,2)\) vòng rỗng, \((1,3)\) chấm đặc. Hai nhánh đều tăng nhưng bước nhảy xuống tại một điểm có thể làm cả hàm **không** tăng.
- Với \(f(x)=x^2-4x+3\), \(|f(2)|=1\) nhưng \(f(|2|)=-1\); tập nghiệm của \(|f(x)|=0\) là \(\{1,3\}\), còn \(f(|x|)=0\) là \(\{-3,-1,1,3\}\). Với \(a=0\), đồ thị bậc nhất/hằng, không dùng công thức đỉnh.
- **Ý chọn từ Notebook 22 đã được kiểm:** \(f(u)=(u-1)^2\) trên [0,2], \(g(x)=f(x-2)+3=(x-3)^2+3\) trên [2,4]; điểm \((1,0)\mapsto(3,3)\), \(T_g=[3,4]\). Với \(h(x)=\sqrt{x+1}-2\) suy từ \(f(x)=\sqrt x\) trên [0,4], \(D_h=[-1,3]\), \(T_h=[-2,0]\). Các mốc và tập giá trị kiểm bằng SymPy và lập luận giải tích.
- **Sai sót Notebook đã loại:** câu suy diễn \(f'(x)=0\Rightarrow\) có cực trị ở Nhánh II Chuyên đề 10. Lấy \(x^3\) tại x=0 phản ví dụ. Nguồn R18 M7 đã xử lý đúng.

**QA tình huống:** 17/17 toán spot-check ở giai đoạn trước và thêm kiểm các mốc dịch đồ thị/ứng dụng nêu trên. 39/39 callback assertions của 3 script D5 lấy từ GitHub pass ở **mocked DOM/Canvas**, **không** phải QA render thật. 4 SVG có \`title\`/\`desc\`, đường nét mảnh theo tham chiếu light UI; các hình phải được reviewer kiểm khi hiển thị thực.

**Q15:** kiểm trực tiếp 6 B15 public item, 6 G10 Topic R01 item và 2 Written/Anchor B15 (5 và 6 điểm); không clone câu gốc/rubric, không tự lấy một bài thay số thành item mới. Đã bỏ DRAFT M1 APP07 vì gần trùng Topic-P05, viết lại M1 WR02 để kiểm điểm khuyết/tập giá trị; 17 DRAFT còn lại **chưa** đạt tư cách canonical item, cần đánh giá ngữ nghĩa toàn thư viện và \`content_version\` chính xác.

## 3. Bộ nguồn review cuối cùng của phần mới

**Duy nhất nguồn vận chuyển được dùng cho Delta M1–M3:**
\`Temp_TOPIC1_M1_M3_NOTEBOOKLM_SINGLE_REVIEW_SOURCE_R02_20261110.md\`, Git blob **\`7edd6cf9ca4367480f7360f67834ac3789e32185\`**.

- Bản R02 chứa **16 phần nguồn**, đã readback GitHub: **16/16 content exact match, 16/16 Git blob SHA match**, gồm 3 bài Kiến thức, 2 file Luyện tập, 4 SVG, 3 lab HTML, tài liệu nguồn S1/SBT, hồ sơ Q15 Written, D5 math spec và sổ chọn lọc Notebook/Gemini.
- Bản review R01 trước đó **SUPERSEDED** và không được chọn song song với R02.
- Prompt review ngắn 5 câu được nhúng trong phần đầu R02: chỉ review phần mới M1–M3 bằng **đúng 5 Permanent Sources v2.1 + SGK/SBT S1** và chuẩn Q01–Q18. Không yêu cầu reviewer đọc lại M4–M7 bất biến.
- Bản R02 là **review transport**, không phải nguồn canonical thứ hai và không thay \`item_id\` của bank gốc.

## Bổ sung AUTHORING M6 đã hoàn thiện về nguồn (10/11/2026)

- Đã thêm **học liệu học sinh M6 mới** \`Temp_TOPIC1_M6_DERIVATIVE_LINKED_GRAPHS_KNOWLEDGE_DELTA_C_R01_20261110.md\`, giải thích rõ cát tuyến h âm/dương, đồ thị f và f′, và phản ví dụ **x³ vs x⁴** cho ngộ nhận f′(0)=0 ⇒ có cực trị; **không tạo item_id canonical mới**.
- Mô hình D5 mới \`Temp_TOPIC1_M6_TANGENT_DERIVATIVE_TWO_GRAPHS_D5_R00_20261110.html\`, blob \`ebf1f392dcc77fa5c94a2bfd75f500bd97dd7ae5\`. Sau sửa, M và N luôn nằm trong khung ở cực biên slider (mock vị trí **12/12 PASS**), logic **36/36 PASS** trên ba cấu hình; **real-browser QA chưa đạt chứng cứ**.
- Đối chiếu S1/SBT trực tiếp SGK G11 T2 **Bài 31 in 81–87/PDF 82–88**, SBT G11 T2 **Bài 31 in 54–57/PDF 55–58**. Xem \`Temp_TOPIC1_M6_S1_SBT_SOURCE_RECEIPT_R01_20261110.md\` có SHA256 hai PDF và ảnh nguồn đã kiểm. Không phỏng đoán trang.
- Một nguồn review targeted M6 **R02** \`Temp_TOPIC1_M6_NOTEBOOKLM_SINGLE_REVIEW_SOURCE_R02_20261110.md\`, Git blob \`199468283a11050cb6bd7c527a979d64f1c7412e\`, **4/4 nguồn body và SHA khớp**. Không chọn R01 cũ (đã xóa trên HEAD).
- Scope Chuyên đề 1 còn **hai khối mới chờ phản biện độc lập**: M1–M3 trong gói review R02 riêng \`7edd6cf9ca4367480f7360f67834ac3789e32185\` và M6 D5 trong gói review R02 trên. M4/M5/M7 và phần M6 R18 cũ giữ PASS snapshot bất biến; không review lại những phần không đổi.

**M6 NEW CONTENT STATUS:** \`S1_VISUAL_RECEIPT_VERIFIED\`; \`MATH_AND_MOCK_QA_PASS_FOR_TESTED_CASES\`; \`INDEPENDENT_DELTA_C_REVIEW_PENDING\`; \`REAL_BROWSER_QA_PENDING\`; \`CONTENT_READY=NO\`.

## 4. Một bộ Chuyên đề 1 được coi là bàn giao hợp lệ khi nào?

| Điều kiện | Trạng thái hiện tại |
|---|---|
| Nguồn M1–M7 học đầy đủ, hai hành trình độc lập | **R18 baseline đã review đúng snapshot** |
| Ý tưởng Notebook/Gemini đã được phân loại và kiểm lỗi | **Đã làm** trong sổ chọn lọc 15 slide và ba nguồn |
| Luyện tập, hình mới, HTML bổ sung đã được lưu source Git | **Đã làm**; chỉ là bản nháp nội dung mới |
| Academic/PED PASS **phần Delta C mới** với SOURCE_RECEIPT | **PENDING INDEPENDENT REVIEW**, không được tự điền |
| Q15 final de-dup, placement, version và Q18 source/receipt SHA | **PENDING** cho item/định danh mới |
| D5 browser real render / accessibility | **PENDING**; AUTHORING không giả làm AP PASS của RELEASE |
| V2 TOPIC intake gate #790 | **OPEN / RELEASE-OWNED** |
| Một handoff V2 + ready manifest + REGISTER sync sau tất cả gates | **NOT ISSUED** |
| \`CONTENT_READY\`, merge, deploy | **NO** |

**Đóng vòng AUTHORING tự kiểm:** không có lý do sửa lại M4–M7 chỉ vì việc nghiên cứu Notebook; bảo toàn phần đã được duyệt, không báo cáo tiến độ liên tục. Bước ngoại sinh duy nhất cần NotebookLM là **phần M1–M3 DELTA_C**; khi phản biện trả về P0/P1/P2 phải xử lý \`MINIMAL_DELTA\` trên đúng snapshot rồi mới bàn giao. Trong lúc đó không trộn nguồn chưa review vào source R18 đã PASS.
