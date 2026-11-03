# G11 SGK RELEASE — quy tắc điều phối vận hành theo Q01–Q18 (03/11/2026)

> **Loại tài liệu:** hướng dẫn thực thi RELEASE, không phải tiêu chuẩn học thuật mới. Chỉ áp dụng `SLM-THPT-QUALITY-ONE v1.0` Q01–Q18 và các cổng chứng cứ sẵn có A1–A7, PED1–PED6, AP1–AP5, R1–R5, P1/P2. Quyết định chủ dự án ngày 03/11/2026 cho phép tự động phát hành SGK Toán 11 từng chương **khi mọi cổng đạt**; thay thế lệnh PAUSE cũ **chỉ trong phạm vi RELEASE SGK G11**. Không mở AUTHORING, G12/Chuyên đề, không sửa/ghi Mastery.

## 1. Dữ liệu đầu vào có thẩm quyền — không tự suy diễn từ PR title

1. Đọc live `main`, `gh-pages`, PR head, tác vụ QA, `AGENTS.md`, chuẩn Q01–Q18, SGK/SBT S1, Sources 08/06/07, hợp đồng handoff V2, và hồ sơ RELEASE hiện hành.
2. Nguồn bàn giao tác giả G11 đầy đủ nằm trên **AUTHORING Draft #710**, gồm 9 chương I–IX **và gói SGK bổ sung Tập 2 tr.99–109** (không gọi Chương X). Mỗi gói có manifest READY V2 + REGISTER + source blob SHA + reviewer receipt blob SHA + mapping + Q01–Q18. Một Draft authoring PR là kho chứng cứ hợp lệ khi bản thân packet đã khóa nguồn; **KHÔNG đòi merge Draft #710 vào `main` làm tiền đề**. Release staging phải import byte nguồn học thuật/receipt có SHA trùng, ghi source commit và một candidate manifest/REGISTER chính xác, không merge nhánh tác giả trực tiếp.
3. Cả 10 gói cần được xét *đúng snapshot*; lỗi đọc/khác SHA => `BLOCKED_BY_AUTHORING_Q18_SOURCE`, nhưng không gọi cả lớp 11 HOLD khi chỉ một packet có lỗi. Historical Academic/PED PASS vẫn có hiệu lực trên nội dung không đổi; không ép NotebookLM review lại DELTA_A_UI hoặc DELTA_B_SOURCE_EQUIVALENT đã có chứng cứ.

## 2. Chủ sở hữu blocker — phân biệt cổng chất lượng với trách nhiệm

| Khi phát hiện | Chủ chịu trách nhiệm | Cách xử lý |
|---|---|---|
| Thiếu SGK/SBT S1, sai công thức/đáp án/rubric, outcome không phủ, item trùng/lệch, source/receipt SHA không khớp, Academic/PED chưa PASS, DELTA_C/D chưa review | **AUTHORING** | `BLOCKED_BY_AUTHORING` + Qxx, LESSON/OUTCOME/ITEM, SHA và minimal delta; RELEASE không tự sửa toán; xét packet tiếp theo |
| Nội dung đã approved nhưng đường dẫn/SVG/MkDocs/JS/Golden UI/MathJax, Final Submit, responsive, AP/R, test hoặc CI fail | **RELEASE** | `BLOCKED_BY_RELEASE` + test/route/HEAD/expected-actual; tự sửa UI/test/packaging DELTA_A và chạy lại exact-head CI |
| Nguồn READY trên Draft tác giả mà `main` chưa có | **RELEASE intake/coordination**, không tự là lỗi AUTHORING | Copy exact locked files vào PR RELEASE, so Git blob SHA, REGISTER, không bắt AUTHORING merge/sao chép nguồn |
| Thiếu công cụ tự kiểm tra trên site từ nguồn canonical PUBLIC đã reviewed | **RELEASE Q16, theo Issue #662** | Reuse `item_id` canonical theo placement, hydrate từ một nguồn câu/đáp án, không clone, QA Final Submit và đánh dấu tự đối chiếu |
| Muốn sáng tác câu mới, đổi toán, đổi đáp án/rubric, muốn dùng private held-out source trái phạm vi đã review | **AUTHORING/owner xác nhận phạm vi mới** | Đưa lại theo `DELTA_C` hoặc `STANDARD_CONFLICT_HOLD`; không lén xuất private archive |

**Q16 chính xác:** Issue #662 cho phép RELEASE dùng ngân hàng câu/khoá công khai đã reviewed trên website tĩnh cho `CLIENT_SELF_CHECK_NO_MASTERY`. Trước Final Submit trong UI **không hint/AI/đáp án/lời giải/đúng-sai/điểm**; sau Final Submit mới hiện đáp án/rubric, tự luận chỉ **tự đối chiếu**, không máy chấm tự luận, không Skill Mastery, không lưu đánh giá độc lập `SGK_CHAPTER_READINESS` hoặc `TOPIC_READINESS`. Câu đã xem/chấm công khai không thể tái sử dụng làm chứng cứ khảo thí độc lập. **Không yêu cầu AUTHORING tạo đề RD1 mới chỉ vì website thiếu self-check**; nếu public canonical phù hợp đã có, RELEASE phải tự hoàn thiện và QA.

## 3. Hàng đợi phát hành: tránh kẹt cả chương trình

- **Hàng đợi:** ChI → ChII → ChIII → ChIV → ChV → ChVI → ChVII → ChVIII → ChIX → SGK bổ sung tr.99–109, không trộn Chuyên đề và không đếm 99–109 là Chương X. ChI #697 đã có bằng chứng P1; không tự phát hành lại, chỉ cập nhật metadata nguồn trung thực khi cần.
- **Mỗi lượt mỗi giờ:** duyệt từ gói đầu chưa P1. Nếu packet không khép cổng của riêng nó, ghi blocker xác định rồi **tiếp tục xét packet tiếp theo trong cùng lượt**. Không được dùng HOLD của ChII làm HOLD của ChIII–IX; có thể làm intake/QA chương khác song song ở mức tài liệu, nhưng tránh PR ghi đè cùng code/branch. Tái xét blocker sau khi nguồn hoặc QA thay đổi.
- **WIP:** ưu tiên hoàn thành một PR RELEASE để ít xung đột. Không tạo PR trùng nếu PR cũ còn mở; khi một PR bị chặn không thể xử lý trong lượt, có thể chuẩn bị/QA packet sau trên branch riêng từ `main`, không giả định các PR độc lập đã được merge.
- **Tiêu chí dừng tự động:** chỉ khi **cả ChI–IX P1 + gói SGK bổ sung p99–109 P1** được chứng minh trên `main` và `gh-pages`, mới tự tắt **một lịch G11**. Không tự mở G12 hoặc Topic.

## 4. State machine và checkpoint bắt buộc

`AUTHORING_CONTENT_READY` → `RELEASE_INTAKE_VERIFIED` → `INTEGRATION_CANDIDATE` → `RELEASE_QA_PASS` → `MERGED` → `PUBLISHED_P1`.

- `AUTHORING_CONTENT_READY`: independent Academic+PED PASS **trên khóa source và receipt**, S1 và Q01–Q18/A1–A7, manifest V2 + REGISTER. Không phải website PASS.
- `RELEASE_INTAKE_VERIFIED`: source/receipt/handoff copied và Git SHA đối chiếu; không nhân bản canonical ID hay thư viện Written/Anchor. `RELEASE_AUTHORIZATION=NO` trong authoring snapshot chỉ nói tác giả **không cấp quyền** phát hành; quyết định chủ dự án sau đó cho phép RELEASE có điều kiện, không phải một blocker cũ tiếp tục áp dụng.
- `INTEGRATION_CANDIDATE`: trang D1–D6/PED/Core/Practice/Written/SVG, self-check, deep links và source parity có trong PR, chưa coi CI xanh là đủ.
- `RELEASE_QA_PASS`: đầy đủ AP1–AP5/R1–R5 evidence trên **exact final PR HEAD + current main**, mọi workflow bắt buộc SUCCESS, không có blocker Q16/Math/Journey, check no-leak/no-mastery/THCS và owner release permission. Khi sửa một file làm HEAD đổi, QA cũ không còn là final gate.
- `MERGED`: merge PR đã được QA trên SHA đúng, tuyệt đối không tự khẳng định deploy.
- `PUBLISHED_P1`: Deploy MkDocs **SUCCESS trên đúng main merge SHA**, `gh-pages` chứa đủ HTML, JS, JSON, SVG và đường dẫn; xác minh byte asset với `main`; nếu không truy cập được live HTTP thì nói rõ giới hạn. P2 Safari thiết bị thật **OPEN** cho đến khi có chứng cứ riêng.

**Kết quả một lượt automation** bắt buộc đúng một trong:
- `PUBLISHED_P1` — có PR/merge SHA, deploy run và receipt pages.
- `RELEASE_PROGRESS` — có commit/CI/verdict thay đổi được kiểm chứng nhưng chưa đủ P1.
- `BLOCKED` — ID + Qxx/gate + owner lane + bằng chứng + action nhỏ nhất, xét tiếp chương khác.
- `NO_CHANGE` — không có source/QA/commit/receipt mới, tránh ghi comment lặp (chỉ đánh dấu nội bộ của lượt).

Chỉ ghi checkpoint lên GitHub Issue #698 và PR chương tương ứng khi có **thay đổi thực chất**, kèm `PACKET_ID`, source/receipt blob, PR HEAD, main SHA, checks exact-head, blocker+owner, trạng thái publish và bước kế tiếp. Mọi văn bản chưa merge trên PR là **đề xuất**, không phải quy tắc đã effective trong `main`.

## 5. Chốt trách nhiệm, không thêm tiêu chuẩn

Toàn bộ bước trên là **quy trình vận hành của cùng một Q01–Q18**. Không tạo checklist học thuật đối thủ, không sửa Golden THCS/G11 kiến trúc, không thay Firebase/Gemini/tiến độ, không công khai raw private RD1 và không dùng NotebookLM chỉ vì chỉnh metadata. Mọi yêu cầu thay đổi **nội dung chuẩn gốc** phải được chủ dự án duyệt dưới dạng `STANDARD_CHANGE_REQUEST`; runbook này không được quyền cập nhật chuẩn toán học.


## 6. Bảo vệ AP1/AP2/AP5 trước lỗi hiển thị SGK (owner-report 03/11/2026)

**Đây là cổng thực thi RELEASE của Q01–Q18, không phải tiêu chuẩn học thuật thứ hai.** Lý do: các bài B18, B22–B30 trước đây vượt qua một số QA kỹ thuật nhưng vẫn lộ nhãn tác giả (\`2A\`, \`4B\`, \`§1\`, \`WHY/WHAT/HOW/D5\`) và biểu thức thô (\`a^x\`, \`u_n\`, \`log_a\`). Các lỗi này làm học liệu khó tự học dù item/SVG/nguồn được khóa đúng.

**Mỗi PR phát hành SGK G11, bao gồm chương/supplement nhập từ handoff V2:**
1. **Quét toàn bộ bài đã tích hợp và bài mới** bằng \`node scripts/test-thpt-g11-learner-presentation-source.cjs\`. Tự phát hiện tệp Bài mới, kiểm tra H2/H3 phân cấp tuần tự, chặn \`2A/4B/§\`, chặn nhãn kỹ thuật \`D1–D6/PED/WHY/WHAT/HOW/FORMAL/DEEPENING\` ở tiêu đề hiển thị. Tự mở rộng phạm vi khi thêm Bài 31–33; không chỉ kiểm 30 bài cũ.
2. **Chạy kiểm thử trình duyệt ở 390/820/1440 px** qua \`scripts/test-thpt-g11-learner-presentation-browser.py\` trên bản \`site/\` mới build: B18 số mũ và chỉ số dưới; B21 \`log_a\`; B22–B27 tiêu đề và chiều dài dòng đọc; B28–B30 tràn ngang; không lan ảnh hưởng sang THCS. Cùng lúc bảo vệ R4 Golden, MathJax, SVG, deep links và Final Submit bằng các bài hồi quy cũ.
3. **Lệnh này là bắt buộc ở cả hai workflow** \`THPT R4 MkDocs Preview QA (no deploy)\` (kiểm tra source) và \`Roadmap PR Quality\` (source + browser). Nếu bất kỳ cổng nào FAIL, **\`AP_DISPLAY_DEFECT_HOLD\`** gắn LESSON_ID, route, HEAD, viewport và ảnh/chứng cứ; không merge, không triển khai.
4. **Không che đậy biểu thức mơ hồ.** Chỉ render các chuỗi chắc chắn \`a^{m/n}\`/\`u_n\`/\`log_a\` bằng \`sup/sub\` trong DOM, tách khỏi source; biểu thức nhập không rõ như \`a^u(x)\` hoặc \`a^1/2\` phải được ghi nhận để người rà soát xác định ý nghĩa, không tự chuyển thành công thức khác. MathJax, đáp án, rubric và private RD1 phải giữ nguyên.
5. **Giữ người học là chuẩn UI:** tiêu đề tiếng Việt tự nhiên, không phô nhãn review; các đoạn giải thích dài có chiều dài dòng đọc giới hạn riêng trên SGK G11; nêu rõ WHY bằng **câu tiếng Việt có nghĩa**, không bắt học sinh đọc mã PED/D1–D6. Nếu cần viết lại giải thích hoặc bổ sung điều kiện toán, tạo defect \`Qxx + LESSON/OUTCOME/ITEM + source blob + minimal delta\` cho AUTHORING \`DELTA_C\`, không sửa trong RELEASE.
6. **Bằng chứng trước khi đóng:** diff chứng minh non-heading học thuật không đổi; source/receipt SHA khớp; cả bốn workflow bắt buộc trên HEAD cuối/merge-base hiện tại thành \`COMPLETED SUCCESS\` khi áp dụng; preview desktop/tablet/phone có kết quả, P1 deploy parity sau merge. **P2 thiết bị Safari thật luôn OPEN** nếu chưa có ảnh/biên bản từ thiết bị thật.

Không biến \`PASS\` của snapshot cũ thành FAIL học thuật toàn chương: ghi đây là lỗi hiển thị mới được phát hiện, giữ nguyên receipts Q18 và sửa theo \`DELTA_A_UI\`. Tương tự, không tự cho rằng CI PASS chứng minh chất lượng sư phạm hoặc đúng toàn bộ toán.
