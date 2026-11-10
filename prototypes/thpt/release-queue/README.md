# THPT — Quy trình hai nhánh, một checklist

> **Official one-standard governance after owner-approved PR #703 merge (02/11/2026):** Canonical path `prototypes/thpt/THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md`.  [`SLM-THPT-QUALITY-ONE`](../THPT_UNIFIED_LEARNING_CONTENT_STANDARD_v1.0_20261102.md) remains the ONE normative THPT quality standard Q01–Q18 for both lanes (**v1.2.0 only after governance merge; existing snapshots retain original versions**); D1–D6 and PED1–PED6 are authoring evidence, AP1–AP5 and R1–R5 are rendered/technical evidence of the **same** quality standard. The standard is now effective for NEW authoring packets after the owner-approved governance merge, not retroactive clearance of existing content or approval to publish. Existing V2 handoff, S1, Sources 08/06/07 and private RD1 protections remain binding. Don’t call green source CI Academic PASS; owner restarted only G11 RELEASE conditionally on 03/11/2026 as documented above.


**Repository duy nhất:** TMA2015/self-learning-math. Đây là kho MANIFEST và bằng chứng; không phải kho nhân bản câu hỏi, không có backend, không có held-out Readiness keys.

## Cập nhật điều phối RELEASE G11 ngày 03/11/2026

Quyền phát hành SGK Toán 11 đã được chủ dự án **mở lại có điều kiện** sau lệnh PAUSE 02/11. Đọc [G11 release operations 03/11](G11_RELEASE_OPERATIONS_20261103.md) trước mọi lượt; đây là hướng dẫn vận hành, **không phải chuẩn học thuật mới**. Nó phân rõ `BLOCKED_BY_AUTHORING` khi nguồn S1/toán/receipt/delta lỗi và `BLOCKED_BY_RELEASE` khi Final Submit, MkDocs, JS, AP/QA/CI chưa đạt; **Q16 tự đối chiếu client thuộc RELEASE theo Issue #662**, không lấy thiếu RD1 mới làm lý do trì hoãn. Manifest V2 trên AUTHORING Draft #710 được tiếp nhận theo Git blob SHA không đòi merge Draft vào `main`; Release giữ một candidate PR riêng và hoàn tất exact-final-head QA. Lượt automation phải xét và báo từng packet độc lập, bỏ qua blocker cục bộ để đi tiếp, gồm gói SGK bổ sung trang 99–109 ngoài chín chương.


### Cập nhật diễn giải và dẫn dắt tự học — 04/11/2026

Chủ dự án phê duyệt hợp nhất cách diễn giải, nhịp dẫn dắt và trình bày vào **chính tiêu chuẩn `SLM-THPT-QUALITY-ONE v1.2.0`**, mục `II-B` và lịch sử `X-B`, **không có Q19 hoặc chuẩn AP/PED cạnh tranh**. Bằng chứng thực tế tham chiếu [Issue #742](https://github.com/TMA2015/self-learning-math/issues/742), #655 và #691. Chỉ có hiệu lực khi governance PR đã qua exact-head QA và merge main; mọi PASS/PUBLISHED trước đó vẫn gắn theo source/receipt chuẩn gốc, không kích hoạt kiểm toán hồi tố.

**AUTHORING** tiếp tục PED1–PED6 theo outcome khi biên soạn mới; **RELEASE** tiếp tục AP1–AP5 trên bản học sinh nhìn thấy: từ câu hỏi gần gũi đến bản chất, điều kiện toán và ví dụ, hình sát lời hướng dẫn, “gọn nhưng không nén”, đọc tốt trên thiết bị thật. Diễn giải khó hiểu mà cần đổi ý học gửi `AUTHORING_DEFECT` theo `DELTA_C`; không âm thầm viết lại source, không thêm hint trước Final Submit. AI Tutor chỉ hỗ trợ, không thay việc học độc lập.

**Báo cáo cho chủ dự án:** ngắn gọn theo **lớp/chương đã phát hành – đang QA – blocker cần quyết định – kết quả cần kiểm tra**. PR/CI/SHA chi tiết lưu trong GitHub, chỉ đưa vào tin nhắn khi thật sự cần đối chiếu. Không vì rút gọn báo cáo mà rút gọn QA.

## Cập nhật tương thích RELEASE V2 cho Topic và chuẩn v1.2.0 (09/11/2026)

Cổng V2 chấp nhận `TOPIC/FULL_TOPIC_LEARNING_PATH` trên **cùng** `SLM-THPT-QUALITY-ONE v1.2.0` (vẫn nhận 1.0/1.1 lịch sử), không ép Topic đổi thành SGK hoặc lùi phiên bản. Các Topic public `item_id` được kiểm theo nhiều role/placement hợp lệ nhưng **một canonical source**, không nhân bản đáp án/rubric. Topic chỉ có **Kiến thức / Luyện tập / Tự kiểm tra**; private Topic RD1 chỉ giữ hash/count owner-held, không được đưa raw nội dung vào GitHub, không bật Mastery hay tự nhận chính thức. `CONTENT_READY` cần one handoff/one ready manifest/REGISTER và source+receipt SHA; cần owner cho phép cùng AP1–AP5/R1–R5/Q16 trước khi triển khai. Đây chỉ là DELTA_A vận hành/CI, **không tự tạo manifest READY, không merge SOURCE AUTHORING hoặc deploy Topic**.

### Hai dạng handoff TOPIC V2 có thật và cách chứng minh nguồn

- **Hàm số (#782):** `ITEM_OUTCOME_MATRIX` có số thứ tự và `TOPIC/...` placement rõ; một `item_id` có thể có nhiều placement khác nhau (116 public canonical IDs / 122 placements). Đầy đủ Q01–Q18 trong chính handoff.
- **Vectơ (#793):** `ITEM_OUTCOME_MATRIX` 5 cột với `role/source_type` (114 public canonical IDs / 114 ánh xạ). Q01–Q18 nằm trong `AUTHOR_A1_A7_PATH` được khóa blob SHA, không bắt buộc nhân bản 18 hàng vào handoff. Biên bản RD1 dùng `PRIVATE_RD1_SHA256` và phần giải thích owner-held thay cho định dạng `PRIVATE_BANK_SHA256`, nhưng vẫn phải có số câu, 64-hex hash, reviewer receipt, owner-only và không public Git.
- `LESSON_ID`/`OUTCOME_ID` là metadata mapping của hành trình Chuyên đề, không bắt buộc là chuỗi thô trong trang Kiến thức; **mọi PUBLIC `item_id` vẫn phải xuất hiện trong nguồn canonical source-locked**. Mỗi item phải map tới outcome hợp lệ, không có tuple trùng, Topic không có Core thứ tư, không tự công khai private RD1.
- File review/handoff AUTHORING sau tương thích chỉ cần **Delta B metadata/source-equivalence có chứng cứ**, không ép NotebookLM review lại toán không đổi. Khi chuyển READY phải thay trạng thái blocker/assessment metadata thành sự thật, tạo đúng 1 manifest `ready/` + 1 REGISTER row; chỉ qua kiểm tra V2 trên HEAD thật mới tính `CONTENT_READY`. Không chuyển `OWNER_HELD_PRIVATE_TOPIC_READINESS_NOT_DEPLOYED` thành chức năng đã phát hành; public static client chỉ `CLIENT_SELF_CHECK_NO_MASTERY`.
- Việc sửa CI không cấp quyền merge, deploy, RD1 chính thức, Mastery hoặc Topic publish. R1–R5/AP1–AP5/Q16, owner permission, P1/P2 vẫn độc lập.

### RELEASE intake độc lập cho Topic (10/11/2026)

Hướng dẫn xử lý nút thắt đã phân loại tại [TOPIC_INTAKE_UNBLOCK_AND_ISOLATION_R01_20261110.md](TOPIC_INTAKE_UNBLOCK_AND_ISOLATION_R01_20261110.md). PR #799 thêm `THPT Topic V2 Intake and Source-Scope QA (no deploy)`: phân biệt `TOPIC_CANDIDATE`, `SGK_CANDIDATE`, `MIXED_TOPIC_AND_SGK` và thay đổi Q16 dùng chung; không tự gán Academic/PED PASS hay CONTENT_READY. V2 lấy phiên bản chuẩn **được duyệt và có hiệu lực** từ một nguồn Q01–Q18, không bị nghẽn khi nâng phiên bản; phiên bản Q18 Draft chưa được chấp nhận. SGK Knowledge PR #797 có lối Q18 nâng cấp riêng sau governance, **không bắt Topic reviewer lại nguồn đã PASS chỉ vì snapshot SGK cũ đổi**, và không lấy Topic reviewer PASS để cấp tự kiểm cho SGK.

## Handoff V2 sau quyết định chủ dự án 02/11/2026

Trước khi nhận gói học liệu mới, cả hai nhánh **bắt buộc** đọc [THPT two-lane source-locked contract v2](../THPT_TWO_LANE_SOURCE_LOCKED_HANDOFF_CONTRACT_v2_20261102.md) và `AGENTS.md`. Nhánh A = học thuật (đầy đủ SGK/SBT, D1–D6, PED1–PED6, NotebookLM Academic + Pedagogical PASS đúng snapshot, danh sách ID, delta); nhánh B = tích hợp, AP1–AP5 trên UI, Final Submit, R1–R5, P1/P2. Hai nhánh trao đổi bằng một handoff canonical trong `release-handoffs/`, một manifest `ready/PACKET_ID.md` và REGISTER một dòng; biên bản NotebookLM không tự biến thành manifest.
Các manifest ready **tạo mới** phải khai báo `HANDOFF_PROTOCOL: THPT-TWO-LANE-V2` và đường dẫn/blob SHA của nguồn và review; CI `scripts/test-thpt-handoff-gate-v2.cjs` so khớp byte nguồn/receipt/manifest, xác nhận source blob được receipt nêu đích danh, ID thực sự xuất hiện trong nguồn, mapping và PED1–PED6 được ký đủ; không cấp PASS học thuật. CI không thay independent review. Manifest lịch sử không bị gán PASS hồi tố.
**Lệnh PAUSE 02/11 là trạng thái lịch sử:** chủ dự án đã mở lại **RELEASE SGK G11** có điều kiện ngày 03/11. AUTHORING/G12/Topic chưa được mở thêm. Không merge/deploy trước AP/R/exact-head CI. Những gói G11 tác giả đã báo PASS nhưng chưa có `ready/` manifest thực thì trả `BLOCKED_BY_AUTHORING`, không tự phát hành từ PR tác giả.

## Hiệu lực và tự tiếp nối cuộc trò chuyện

**Nguồn vận hành chính thức sau khi merge PR #622:** Có hiệu lực cho mọi lần mở chat/nhánh mới của dự án THPT. Trước khi thực hiện, kiểm tra trạng thái GitHub thực tế, đọc `REGISTER.md`, manifest liên quan, checkpoint hiện hành, sau đó chọn đúng vai trò biên soạn hoặc phát hành. Các nguồn 08 (kiến trúc), 06 (file/prompt NotebookLM), 07 (delta) và SGK/SBT S1 giữ nguyên thẩm quyền, không bị quy trình này thay thế.

Danh mục là **con trỏ** đến học liệu và biên bản, không phải nơi copy nội dung câu hỏi. Không dùng trạng thái ghi trong tài liệu này thay cho kết quả live CI hoặc sự cho phép của chủ dự án.

## Phân tách thư mục và kiểm tra CI (governance 01/11/2026)

**Không đặt biên bản academic/A6 handoff trong `release-queue/ready/`.** Thư mục `ready/` và `inventory/` chỉ chứa **manifest canonical** đúng tên `PACKET_ID.md`, đủ trường/cổng theo `PACKET_TEMPLATE.md` và có một hàng đúng trong `REGISTER.md`. Handoff mới đặt tại [`../release-handoffs/`](../release-handoffs/README.md), nguồn tác giả ở `../content-drafts/`, gói NotebookLM ở `../review-packets/`. Reviewer PASS là chứng cứ nguồn, không biến biên bản thành manifest phát hành.

**Phân tầng CI theo nội dung thay đổi, không theo tên nhánh:** Pull Request chỉ thay Markdown/TXT/SVG trong ba thư mục nguồn học thuật chạy scope preflight + kiểm tra integrity manifest; PR có thay đổi docs website, mã, cấu hình, `ready/`, `inventory/` hoặc `REGISTER.md` luôn chạy Roadmap full QA. Preview R4 chạy khi phạm vi website/manifest THPT liên quan thay đổi; các run preview cũ trên cùng PR bị hủy khi có commit mới. **CI nhanh không phải R1–R5, không được dùng làm bằng chứng phát hành.** Trước merge/deploy gói học liệu bắt buộc kiểm chứng cả cổng QA trên đúng final HEAD.

## Quy trình

1. **Nhánh biên soạn/review** khóa SGK/SBT S1, snapshot và danh mục LESSON/OUTCOME/ITEM; bàn giao Temp_ Markdown/TXT + prompt 3–6 câu theo file 06; nhận NotebookLM verdict độc lập; sửa delta theo file 07 v1.1. Điền các ô **A1–A7** và bằng chứng chính xác.
2. Khi **mọi A đều [x]**, chuyển CHÍNH FILE MANIFEST từ inventory/ sang ready/ bằng PR, đổi trạng thái thành CONTENT_READY và cập nhật REGISTER. Đây là gói học thuật hoàn chỉnh **theo RELEASE_SCOPE đã ghi**, không tự suy ra cả chương/chuyên đề hoàn chỉnh.
3. **Nhánh phát hành** chỉ nhận gói ở ready/, trỏ tới nội dung canonical theo commit; không copy câu hỏi hoặc lời giải. Tích hợp website hiện hành và QA exact-head THCS/THPT, desktop/mobile, MathJax, exposure/readiness, giao diện học sinh sạch. Điền **R1–R5**; R5 là phép merge/deploy rõ ràng của chủ dự án.
4. Chỉ sau A1–A7 và R1–R5 PASS mới đặt RELEASE_READY và merge/deploy đúng phạm vi được duyệt. Ghi **P1/P2** sau phát hành; P2 không được suy từ trình duyệt giả lập.

### Cổng trình bày học thuật AP1–AP5 (áp dụng từ 31/10/2026)

Theo [Issue #655](https://github.com/TMA2015/self-learning-math/issues/655), mọi gói học liệu **mới chuẩn bị phát hành** cần xác nhận thêm Academic Presentation QA bên cạnh D1–D6 và A/R/P. **Gọn nhưng không nén**: công thức, điều kiện, định nghĩa, ví dụ và lỗi thường gặp phải phân nhóm hợp lý; hình/đồ thị/SVG đủ rõ để học sinh tự đọc trên desktop, iPhone, iPad. Có thể dùng Adaptive Knowledge Tabs v2 để giảm chiều dọc, nhưng không ghép nhiều ý khác nhau lên một hàng. Các mã D1.x/NotebookLM/PR chỉ dùng trong nguồn/QA, không làm nhãn học sinh.

AP1 cấu trúc ý; AP2 công thức/MathJax; AP3 hình, biểu đồ, SVG; AP4 tự học độc lập; AP5 responsive. Bằng chứng AP cần đủ ngay trên snapshot release HEAD và được ghi trong manifest mới theo `PACKET_TEMPLATE.md`. Không coi Academic PASS hay browser build thành AP3/AP5 PASS tự động. `DELTA_A_UI` được tự QA/log khi không đổi toán; `DELTA_B_SOURCE_EQUIVALENT` cần kiểm chứng tương đương nguồn; `DELTA_C_ACADEMIC_MATERIAL` cần review đúng phần bị tác động; `DELTA_D_BLOCKER` chặn release. Các packet lịch sử được audit theo batch, không tự đổi trạng thái trước khi có bằng chứng.

**HOLD** khi thiếu chứng cứ, D1–D6 chưa đủ theo phạm vi, delta C/D chưa review, hoặc QA lỗi. Review PASS thành phần ≠ CONTENT_READY; CONTENT_READY ≠ merge permission. Một gói đã phát hành phạm vi hữu hạn vẫn có thể chưa đạt FULL_LEARNING_PATH.

**Hai hành trình độc lập:** SGK_CHAPTER (Tự kiểm tra cuối chương); TOPIC (chỉ Kiến thức/Luyện tập/Tự kiểm tra). SGK PASS không suy rộng TOPIC PASS. Dùng chung một canonical item_id/Written/Anchor/skill/ảnh theo placement; tách bằng chứng SGK_CHAPTER_READINESS và TOPIC_READINESS.

**Nguồn và riêng tư:** 5 Permanent NotebookLM THPT v2.1 sẽ thay trọn bộ v2.0 khi chủ dự án cài đặt (manifest SHA256 tại `../notebooklm-permanent-sources/THPT_5_PERMANENT_SOURCES_v2.1_REPLACEMENT_MANIFEST_20261102.md`); SGK/SBT KNTT S1; giao NotebookLM bằng file Temp_ thật và prompt, không JSON. Không đưa câu, key hoặc rubric held-out vào public GitHub. Không bật mastery trước QA engine. Ghi chú NotebookLM/QA chỉ nằm trong hồ sơ, không có trong UI học sinh.

**Ưu tiên phát hành:** lọc CONTENT_READY trước; trong tập đó xếp theo tiền đề kiến thức, phụ thuộc PR, mức ảnh hưởng và ngày review; **không random và không FIFO tuyệt đối**. Phát hành đúng những phần được duyệt, không gắn nhãn 'chương hoàn chỉnh' nếu thiếu D1–D6 hoặc đánh giá.

**Khóa chứng cứ:** SOURCE_COMMIT là commit của ứng viên tích hợp để QA. REVIEW_RECEIPT ghi đường dẫn và Git blob SHA của biên bản NotebookLM bất biến; reviewer PASS chỉ áp dụng đúng snapshot gốc và delta được chứng minh. Nếu có file thay đổi học thuật, cập nhật receipt/delta trước khi đánh dấu A1/A3/A6 PASS.

**Địa chỉ sử dụng:** REGISTER.md là danh sách duy nhất; inventory/ là hồ sơ chưa A-PASS toàn bộ và lịch sử phát hành scoped; ready/ là kho thực sự giao cho nhánh phát hành; PACKET_TEMPLATE.md là mẫu. Script scripts/test-thpt-release-queue.cjs giữ danh mục và checklist nhất quán nhưng không tự cấp Academic PASS hoặc deploy.